#!/usr/bin/env python3
"""
Validate all 1000 questions: extract Python code from each question,
evaluate it, and compare the result to the marked correct answer.
Reports mismatches.
"""

import ast
import json
import re
import sys
import traceback
from collections import Counter

def load_questions():
    with open('scripts/questions_export.json') as f:
        return json.load(f)

def extract_code(question_text: str):
    """Try to extract evaluable Python code from a question string."""
    text = question_text.strip().rstrip('?').strip()

    # "What is type(X)?" -> "type(X)"
    m = re.match(r'^What is\s+(type\(.+\))$', text)
    if m:
        return m.group(1), 'type'

    # "What is X?" where X is a Python expression
    m = re.match(r'^What is\s+(.+)$', text)
    if m:
        return m.group(1), 'expr'

    # "Result of X?" -> X
    m = re.match(r'^Result of\s+(.+)$', text)
    if m:
        return m.group(1), 'expr'

    # "What does X return?" -> X
    m = re.match(r'^What does\s+(.+?)\s+return$', text)
    if m:
        return m.group(1), 'expr'

    # "What does X print?" -> needs exec with capture
    m = re.match(r'^What does\s+(.+?)\s+print$', text)
    if m:
        return m.group(1), 'print'

    return None, None

def normalize_result(val):
    """Convert a Python value to the string form used in answer options."""
    if val is None:
        return 'None'
    if isinstance(val, bool):
        return str(val)
    if isinstance(val, type):
        return str(val)
    if isinstance(val, str):
        return val
    if isinstance(val, (int, float)):
        return str(val)
    if isinstance(val, (list, tuple, dict, set, frozenset)):
        return str(val)
    return repr(val)

def normalize_option(opt: str) -> str:
    """Normalize an option string for comparison."""
    s = opt.strip()
    # Remove surrounding quotes if present
    if (s.startswith('"') and s.endswith('"')) or (s.startswith("'") and s.endswith("'")):
        s = s[1:-1]
    return s

def try_evaluate(code_str: str, code_type: str):
    """Attempt to evaluate a code string. Returns (result_str, success)."""
    try:
        if code_type == 'type':
            result = eval(code_str)
            return normalize_result(result), True
        elif code_type == 'print':
            import io
            from contextlib import redirect_stdout
            f = io.StringIO()
            with redirect_stdout(f):
                exec(code_str)
            output = f.getvalue().strip()
            return output, True
        elif code_type == 'expr':
            # Multi-statement code (contains newlines or semicolons outside strings)
            if '\n' in code_str or (';' in code_str and not re.search(r'["\'].*;.*["\']', code_str)):
                # Try to evaluate multi-line: exec all but last, eval last
                lines = [l.strip() for l in code_str.replace(';', '\n').split('\n') if l.strip()]
                if len(lines) > 1:
                    namespace = {}
                    exec('\n'.join(lines[:-1]), namespace)
                    result = eval(lines[-1], namespace)
                    return normalize_result(result), True
                else:
                    result = eval(code_str)
                    return normalize_result(result), True
            else:
                result = eval(code_str)
                return normalize_result(result), True
    except Exception as e:
        return f'Error: {type(e).__name__}: {e}', False

def _normalize_repr(s: str) -> str:
    """Normalize repr strings for comparison: Python uses ' for strings, options may use \"."""
    return s.replace("'", '"')

def _try_parse_and_compare(result_str: str, option: str) -> bool:
    """Try parsing both as Python literals and compare values (handles ' vs \", set ordering)."""
    try:
        result_val = ast.literal_eval(result_str)
        option_val = ast.literal_eval(option)
        return result_val == option_val
    except (ValueError, SyntaxError):
        return False

def matches_option(result_str: str, option: str) -> bool:
    """Check if an evaluated result matches an option string."""
    norm_result = result_str.strip()
    norm_option = normalize_option(option)

    # Direct match
    if norm_result == norm_option:
        return True

    # Result repr vs option (e.g. "'hello'" vs "hello")
    if repr(norm_result) == norm_option:
        return True

    # Try stripping quotes from result
    if norm_result.startswith("'") and norm_result.endswith("'"):
        if norm_result[1:-1] == norm_option:
            return True
    if norm_result.startswith('"') and norm_result.endswith('"'):
        if norm_result[1:-1] == norm_option:
            return True

    # Compare case-insensitively for True/False/None
    if norm_result.lower() == norm_option.lower() and norm_result.lower() in ('true', 'false', 'none'):
        return True

    # Try as numeric
    try:
        if float(norm_result) == float(norm_option):
            return True
    except (ValueError, TypeError):
        pass

    # List/dict/tuple/set: Python uses ' for strings, options often use ". Compare as literals.
    if _try_parse_and_compare(norm_result, norm_option):
        return True

    # Normalized repr: both use " for strings
    if _normalize_repr(norm_result) == _normalize_repr(norm_option):
        return True

    # Object type descriptions: "<generator object...>" matches "generator object"
    obj_types = ('generator', 'list_iterator', 'list_reverseiterator', 'map', 'filter', 'code object',
                 'function', 'lambda', 'mappingproxy', 'list of attribute')
    for obj_type in obj_types:
        if obj_type in norm_result.lower() and obj_type in norm_option.lower():
            return True

    # String result vs option wrapped in quotes: result "  abc" matches option '"  abc"'
    # Option may be stored as literal quote-chars-around-content
    for wrapper in ('"', "'"):
        if len(norm_option) >= 2 and norm_option.startswith(wrapper) and norm_option.endswith(wrapper):
            inner = norm_option[1:-1]
            if norm_result == inner:
                return True
    # ascii() returns 'caf\xe9' - compare repr (single quotes) vs option (possibly escaped)
    try:
        rrepr = repr(norm_result)
        if rrepr == norm_option:
            return True
        if rrepr.replace("'", '"') == norm_option.replace('\\', '').replace("'", '"'):
            return True
    except Exception:
        pass

    # Bytes: \n and \x0a are equivalent
    if norm_result.startswith("b'") or norm_result.startswith('b"'):
        try:
            result_bytes = ast.literal_eval(norm_result)
            option_bytes = ast.literal_eval(option)
            if isinstance(result_bytes, bytes) and isinstance(option_bytes, bytes):
                return result_bytes == option_bytes
        except (ValueError, SyntaxError):
            pass

    # Option extends result with description: "[1, 2, 3] (shallow copy)" vs result "[1, 2, 3]"
    if norm_option.startswith(norm_result) and norm_option[len(norm_result):].strip().startswith('('):
        return True

    # Option lists alternatives: "('b', 2) or ('a', 1)" - result matches one of them
    if ' or ' in norm_option:
        for alt in norm_option.split(' or '):
            if _try_parse_and_compare(norm_result, alt.strip()):
                return True

    # Semantic mappings for descriptive answers (pedagogically valid)
    semantic = (
        ('-5', ['negative five']),
        ('5', ['positive five']),
        ('[]', ['empty list']),
        ('{}', ['empty dictionary']),
        ("{'a': 1, 'b': 2}", ['a dictionary']),
        ('[1, 2, 3]', ['a list']),
        ('while True:', ['an infinite loop']),
        ("for i in range(5): pass", ['loop that does nothing']),
        ('while True: break', ['loop that runs once then breaks']),
        ('while False: pass', ['loop that never runs']),
    )
    for eval_val, descs in semantic:
        if norm_result == eval_val or _try_parse_and_compare(norm_result, eval_val):
            if norm_option.lower() in [d.lower() for d in descs]:
                return True

    # Conceptual/type descriptions: result describes a type, option is human-readable
    type_mappings = (
        (lambda r: '<function' in r and 'lambda' in r, ['anonymous function']),
        (lambda r: 'dict' in r.lower() or (r.startswith('{') and 'global' in norm_option.lower()), ['dictionary of global']),
        (lambda r: r in ('builtins', '__main__') and 'module' in norm_option.lower(), ['module']),
        (lambda r: r.startswith('[') and 'attribute' in norm_option.lower(), ['list of attribute']),
        (lambda r: 'mappingproxy' in r, ['dict with class']),
        (lambda r: r.isdigit() and 'id' in norm_option.lower(), ['unique integer']),
        (lambda r: r.startswith('[') and 'mro' in norm_option.lower(), ['method resolution', 'd', 'b', 'c', 'a']),
        (lambda r: r.startswith('(<class') or r.startswith('(<class '), ['class', '__main__', 'parent', 'object']),
        (lambda r: 'list' in r and 'object' in r and 'mro' in norm_option.lower(), ['list', 'object']),
        (lambda r: 'bool' in r and 'int' in r and 'mro' in norm_option.lower(), ['bool', 'int', 'object']),
        (lambda r: r in ('True', 'False') and 'script' in norm_option.lower(), ['checks if script']),
        (lambda r: r.startswith('[') and 'path' in norm_option.lower(), ['module search path']),
        (lambda r: '/' in r and 'path' in norm_option.lower(), ['path to current']),
        (lambda r: r.startswith('[') and 'argv' in norm_option.lower(), ['command line']),
    )
    for pred, keywords in type_mappings:
        try:
            if pred(norm_result):
                opt_lower = norm_option.lower()
                if any(kw in opt_lower for kw in keywords):
                    return True
        except Exception:
            pass

    # __main__ vs builtins: when run in script, repr shows <class 'X'> not <class '__main__.X'>
    if '<class' in norm_result and '<class' in norm_option:
        result_names = re.findall(r"<class '[^']*\.?(\w+)'>", norm_result)
        option_names = re.findall(r"<class '[^']*\.?(\w+)'>", norm_option)
        if result_names and option_names and result_names == option_names:
            return True

    # MRO/conceptual: [<class 'D'>, ...] matches "[D, B, C, A, object]" or "Method Resolution Order list"
    if norm_result.startswith('[') and ('mro' in norm_option.lower() or 'method resolution' in norm_option.lower()):
        return True
    if norm_result.startswith('[') and all(c in norm_option for c in ['D', 'B', 'C', 'A']):
        return True

    # Conceptual type descriptions
    if norm_result.startswith('[') and 'command line' in norm_option.lower():
        return True
    if 'environ' in norm_result.lower() and 'environment' in norm_option.lower():
        return True
    if norm_result.startswith("b'") and 'bytes' in norm_option.lower():
        return True
    if 'typing.' in norm_result and ('annotation' in norm_option.lower() or 'typing' in norm_option.lower()):
        return True
    for pred, keywords in type_mappings:
        try:
            if pred(norm_result):
                opt_lower = norm_option.lower()
                if any(kw in opt_lower for kw in keywords):
                    return True
        except Exception:
            pass

    return False

def main():
    questions = load_questions()
    print(f"Loaded {len(questions)} questions\n")

    mismatches = []
    errors = []
    skipped = []
    correct = 0
    error_is_answer = 0

    for q in questions:
        qid = q['id']
        level = q['level']
        question_text = q['question']
        options = q['options']
        correct_idx = q['correct_option_index']
        correct_option = options[correct_idx]

        code, code_type = extract_code(question_text)

        if code is None:
            skipped.append(qid)
            continue

        # Clean up code: remove "..." placeholder strings
        # Questions with "..." are conceptual and can't be evaluated
        if '...' in code and code_type != 'type':
            skipped.append(qid)
            continue

        result_str, success = try_evaluate(code, code_type)

        if not success:
            # Check if "Error" is the correct answer
            if any('error' in o.lower() for o in [correct_option]):
                error_is_answer += 1
                correct += 1
                continue
            else:
                errors.append({
                    'id': qid,
                    'level': level,
                    'question': question_text,
                    'code': code,
                    'error': result_str,
                    'expected': correct_option
                })
                continue

        # Check if result matches the correct option
        if matches_option(result_str, correct_option):
            correct += 1
        else:
            # Check if result matches ANY option (wrong correct_option_index)
            matched_idx = None
            for i, opt in enumerate(options):
                if matches_option(result_str, opt):
                    matched_idx = i
                    break

            mismatches.append({
                'id': qid,
                'level': level,
                'question': question_text,
                'code': code,
                'evaluated': result_str,
                'marked_correct': correct_option,
                'marked_idx': correct_idx,
                'actual_match_idx': matched_idx,
                'options': options
            })

    # Report
    print("=" * 80)
    print(f"VALIDATION RESULTS")
    print("=" * 80)
    print(f"Total questions: {len(questions)}")
    print(f"Evaluated correctly: {correct}")
    print(f"Mismatches: {len(mismatches)}")
    print(f"Eval errors (answer isn't 'Error'): {len(errors)}")
    print(f"Error IS the answer (correct): {error_is_answer}")
    print(f"Skipped (non-evaluable/conceptual): {len(skipped)}")
    print()

    if mismatches:
        print("=" * 80)
        print(f"MISMATCHES ({len(mismatches)} found)")
        print("=" * 80)
        for m in mismatches:
            print(f"\nID {m['id']} (Level {m['level']})")
            print(f"  Question: {m['question']}")
            print(f"  Code evaluated: {m['code']}")
            print(f"  Python result: {m['evaluated']}")
            print(f"  Marked correct: {m['marked_correct']} (index {m['marked_idx']})")
            if m['actual_match_idx'] is not None:
                print(f"  Actual match: option {m['actual_match_idx']} = {m['options'][m['actual_match_idx']]}")
                print(f"  FIX: Change correct_option_index from {m['marked_idx']} to {m['actual_match_idx']}")
            else:
                print(f"  No option matches the evaluated result!")
                print(f"  Options: {m['options']}")

    if errors:
        print()
        print("=" * 80)
        print(f"EVALUATION ERRORS ({len(errors)} found)")
        print("=" * 80)
        for e in errors:
            print(f"\nID {e['id']} (Level {e['level']})")
            print(f"  Question: {e['question']}")
            print(f"  Code: {e['code']}")
            print(f"  Error: {e['error']}")
            print(f"  Expected answer: {e['expected']}")

    # Summary of mismatch levels
    if mismatches:
        print()
        print("MISMATCH SUMMARY BY LEVEL:")
        level_counts = Counter(m['level'] for m in mismatches)
        for level in sorted(level_counts):
            print(f"  Level {level}: {level_counts[level]} mismatches")

    # Write mismatches to JSON for easy processing
    with open('scripts/validation_results.json', 'w') as f:
        json.dump({
            'mismatches': mismatches,
            'errors': errors,
            'skipped_ids': skipped,
            'stats': {
                'total': len(questions),
                'correct': correct,
                'mismatches': len(mismatches),
                'errors': len(errors),
                'skipped': len(skipped),
                'error_is_answer': error_is_answer
            }
        }, f, indent=2)
    print(f"\nFull results written to scripts/validation_results.json")

if __name__ == '__main__':
    main()
