#!/usr/bin/env python3
"""
Replace duplicated generic 10-section tails in level1.ts (92 occurrences).

First three questions (type(42), type(3.14), type("hello")) already have full in-depth text.
Questions using `(_i: number) => { return {` (e.g. .upper()) may already be complete — only blocks
containing the duplicate marker are replaced (92 total).

No backticks inside replacement strings (TS template literal safety).
"""
from __future__ import annotations

from pathlib import Path

BLOCK_START = (
    "Key Concepts:\n"
    "• See the key concepts and explanation above for the main ideas and bullet points.\n\n"
    "Key Distinctions:"
)

BLOCK_END = (
    "Notes:\n"
    "• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; "
    "refer to the official docs for full details."
)

# Order: nearest question before each duplicate marker (see audit script), top to bottom in level1.ts
QUESTIONS: list[str] = [
    "What is type(True)?",
    "What is type(None)?",
    "What is type([])?",
    "What is type(())?",
    "What is type({})?",
    "What is type({1, 2, 3})?",
    "What is type(b'hello')?",
    "Is 'my_variable' a valid variable name?",
    "Is '2variable' a valid variable name?",
    "Is 'my-variable' a valid variable name?",
    "Is 'class' a valid variable name?",
    "Is 'def' a valid variable name?",
    "Is 'if' a valid variable name?",
    "Is 'MyVariable' a valid variable name?",
    "Is '_private' a valid variable name?",
    "Is '__special__' a valid variable name?",
    "Is 'variable name' (with space) a valid variable name?",
    'What is len("hello")?',
    'What does "Hello" + "World" result in?',
    'What does "Hi" * 3 result in?',
    'What is "Python"[0]?',
    'What is "Python"[-1]?',
    'What is "Python"[1:4]?',
    'What is "Python"[:3]?',
    'What is "Python"[3:]?',
    'What is "Python"[::2]?',
    'What is "Python"[::-1]?',
    "Which symbol starts a single-line comment?",
    "Correct way to write a multi-line string?",
    "What is the purpose of comments in Python?",
    "Can you write a comment after code on the same line?",
    "What does '''triple quotes''' create?",
    "Is # a comment or string delimiter?",
    "Can triple quotes be used for comments?",
    "What happens to code after # on a line?",
    "Can you nest triple-quoted strings?",
    "What is the difference between ' and \" for strings?",
    'Result of int("42")?',
    "Result of float(42)?",
    "Result of str(42)?",
    "Result of bool(0)?",
    "Result of bool(1)?",
    'Result of bool("")?',
    'Result of bool("hello")?',
    "Result of bool([])?",
    "Result of bool([1, 2])?",
    "Result of bool(None)?",
    "What is 10 / 2 in Python 3?",
    "What is 10 // 3?",
    "What is 2 ** 3?",
    "What is 10 % 3?",
    "What is -5?",
    "What is +5?",
    "What is 2 * 3 + 4?",
    "What is (2 + 3) * 4?",
    "What is 2 ** 2 ** 3?",
    "What is 10 / 0?",
    "Value of type(3.14 + 1)?",
    'What does "A" represent in Python?',
    "How do you find the data type of a variable?",
    "Which quotes are valid for strings?",
    'What is "2" + "3"?',
    'What is int("2") + int("3")?',
    'What is "hello" == "Hello"?',
    'What is "apple" < "banana"?',
    'What is "a" in "abc"?',
    'What is "a" not in "xyz"?',
    'What is "HELLO".lower()?',
    'What is "hello".capitalize()?',
    'What is "hello world".title()?',
    'What is "Hello".swapcase()?',
    'What is "HELLO".islower()?',
    'What is "hello".find("l")?',
    'What is "hello".rfind("l")?',
    'What is "hello".index("l")?',
    'What is "hello".count("l")?',
    'What is "hello".startswith("he")?',
    'What is "hello".endswith("lo")?',
    'What is "hello".replace("l", "L")?',
    'What is "hello".replace("l", "L", 1)?',
    'What is "hello".partition("l")?',
    'What is "hello".rpartition("l")?',
    'What is "hello,world".split(",")?',
    'What is "hello world".split()?',
    'What is "hello\\nworld".splitlines()?',
    'What is "-".join(["a", "b", "c"])?',
    'What is "".join(["a", "b", "c"])?',
    'What is "hello".center(10)?',
    'What is "hello".ljust(10)?',
    'What is "hello".rjust(10)?',
    'What is "hello".zfill(10)?',
    'What is f"Value: {5}"?',
]


def _sec(title: str, *bullets: str) -> str:
    body = "\n".join("• " + b for b in bullets)
    return f"{title}\n{body}"


def tail_for(q: str) -> str:
    """Return Key Distinctions through Notes (no leading Key Concepts duplicate)."""
    q = q.strip()

    if q == "What is type(True)?":
        return "\n\n".join(
            [
                _sec(
                    "Key Distinctions:",
                    "type(True) reports bool, not int — even though bool subclasses int.",
                    "True is a singleton: True is True; do not confuse truth testing with type().",
                ),
                _sec(
                    "How It Works:",
                    "type() returns the class object associated with the instance.",
                    "The only two bool instances are True and False.",
                ),
                _sec(
                    "Step-by-Step Execution:",
                    "1. Evaluate the literal True.",
                    "2. Call type() on that object.",
                    "3. Receive the bool class (shown as class bool).",
                ),
                _sec(
                    "Order of Operations:",
                    "Only a literal and a function call — no mixed operators here.",
                ),
                _sec(
                    "Common Use Cases:",
                    "Explaining why isinstance(True, int) can be True while type(True) is still bool.",
                ),
                _sec(
                    "Edge Cases:",
                    "numpy.bool_ and builtins.bool differ in other libraries — stick to built-in bool in quizzes.",
                ),
                _sec(
                    "Performance Considerations:",
                    "type() on a singleton is extremely cheap.",
                ),
                _sec(
                    "Examples:",
                    "type(False); isinstance(True, bool); True + True  # 2, but avoid in real code.",
                ),
                _sec(
                    "Notes:",
                    "Use isinstance(x, bool) when you truly need booleans only.",
                ),
            ]
        )

    if q == "What is type(None)?":
        return "\n\n".join(
            [
                _sec(
                    "Key Distinctions:",
                    "NoneType is its own type — None is not an int, str, or empty container.",
                    "There is exactly one None object; identity checks use \"is None\".",
                ),
                _sec(
                    "How It Works:",
                    "type(None) returns the NoneType class object.",
                ),
                _sec(
                    "Step-by-Step Execution:",
                    "1. Load None.",
                    "2. Pass it to type().",
                    "3. Return NoneType.",
                ),
                _sec(
                    "Order of Operations:",
                    "Single argument function call.",
                ),
                _sec(
                    "Common Use Cases:",
                    "Optional return values and default parameters.",
                ),
                _sec(
                    "Edge Cases:",
                    "None is falsy but not equal to 0 or \"\".",
                ),
                _sec(
                    "Performance Considerations:",
                    "Trivial cost.",
                ),
                _sec(
                    "Examples:",
                    "x = None; print(type(x)); def f(): pass  # returns None.",
                ),
                _sec(
                    "Notes:",
                    "Never write \"== None\" in style-sensitive code — use \"is None\".",
                ),
            ]
        )

    if q == "What is type([])?":
        return "\n\n".join(
            [
                _sec(
                    "Key Distinctions:",
                    "[] creates a list — mutable ordered sequence.",
                    "Contrast with tuple (), set {}, frozen set frozenset — different types.",
                ),
                _sec(
                    "How It Works:",
                    "List literal builds a list object; type points to the list class.",
                ),
                _sec(
                    "Step-by-Step Execution:",
                    "1. Construct empty list.",
                    "2. type returns list.",
                ),
                _sec(
                    "Order of Operations:",
                    "Literal evaluation then type().",
                ),
                _sec(
                    "Common Use Cases:",
                    "Dynamic collections, stacks, queues as lists.",
                ),
                _sec(
                    "Edge Cases:",
                    "[] is falsy; [False] is truthy (non-empty).",
                ),
                _sec(
                    "Performance Considerations:",
                    "Empty list creation is O(1) amortized.",
                ),
                _sec(
                    "Examples:",
                    "type([1,2]); isinstance([], list).",
                ),
                _sec(
                    "Notes:",
                    "Copy with list(x) or x.copy() when you need independence.",
                ),
            ]
        )

    if q == "What is type(())?":
        return "\n\n".join(
            [
                _sec(
                    "Key Distinctions:",
                    "Tuple is immutable sequence; () is the empty tuple.",
                    "type(()) is tuple, not list.",
                ),
                _sec(
                    "How It Works:",
                    "Parentheses with comma or empty () build tuple; type() returns tuple class.",
                ),
                _sec(
                    "Step-by-Step Execution:",
                    "1. Build ().",
                    "2. type → tuple.",
                ),
                _sec(
                    "Order of Operations:",
                    "Literal then type call.",
                ),
                _sec(
                    "Common Use Cases:",
                    "Fixed records, dict keys, multiple return values.",
                ),
                _sec(
                    "Edge Cases:",
                    "(1,) needs trailing comma; (1) is int in parentheses.",
                ),
                _sec(
                    "Performance Considerations:",
                    "Small tuples are very compact in CPython.",
                ),
                _sec(
                    "Examples:",
                    "type((1,2)); a,b=(1,2).",
                ),
                _sec(
                    "Notes:",
                    "namedtuple builds tuple subclasses with field names.",
                ),
            ]
        )

    if q == "What is type({})?":
        return "\n\n".join(
            [
                _sec(
                    "Key Distinctions:",
                    "{} builds an empty dict — mapping type, not set.",
                    "type({}) is dict; {1,2} would be set.",
                ),
                _sec(
                    "How It Works:",
                    "Empty dict literal allocates hash table structure.",
                ),
                _sec(
                    "Step-by-Step Execution:",
                    "1. Create {}.",
                    "2. type returns dict.",
                ),
                _sec(
                    "Order of Operations:",
                    "Literal then type().",
                ),
                _sec(
                    "Common Use Cases:",
                    "JSON-like records, counting with dict.get.",
                ),
                _sec(
                    "Edge Cases:",
                    "Keys must be hashable; lists cannot be dict keys.",
                ),
                _sec(
                    "Performance Considerations:",
                    "Average O(1) lookup; empty dict cheap.",
                ),
                _sec(
                    "Examples:",
                    "type({\"a\":1}); {} is falsy.",
                ),
                _sec(
                    "Notes:",
                    "collections.defaultdict extends dict with factory.",
                ),
            ]
        )

    if q == "What is type({1, 2, 3})?":
        return "\n\n".join(
            [
                _sec(
                    "Key Distinctions:",
                    "Curly braces with elements like {1,2,3} denote a set — unordered unique collection.",
                    "Not a dict (no colons for key:value).",
                ),
                _sec(
                    "How It Works:",
                    "Set literal builds set; type is set.",
                ),
                _sec(
                    "Step-by-Step Execution:",
                    "1. Build set with three ints.",
                    "2. type → set.",
                ),
                _sec(
                    "Order of Operations:",
                    "Literal then type().",
                ),
                _sec(
                    "Common Use Cases:",
                    "Membership testing, deduplication.",
                ),
                _sec(
                    "Edge Cases:",
                    "Unhashable items (list) cannot go in a set.",
                ),
                _sec(
                    "Performance Considerations:",
                    "Average O(1) membership.",
                ),
                _sec(
                    "Examples:",
                    "set([1,1,2]) → {1,2}.",
                ),
                _sec(
                    "Notes:",
                    "frozenset is the immutable variant for dict keys.",
                ),
            ]
        )

    if q == "What is type(b'hello')?":
        return "\n\n".join(
            [
                _sec(
                    "Key Distinctions:",
                    "b prefix means bytes — raw octets, not Unicode str.",
                    "bytes vs bytearray: bytes is immutable.",
                ),
                _sec(
                    "How It Works:",
                    "Literal b\"...\" creates bytes object.",
                ),
                _sec(
                    "Step-by-Step Execution:",
                    "1. Parse bytes literal.",
                    "2. type → bytes.",
                ),
                _sec(
                    "Order of Operations:",
                    "Literal then type().",
                ),
                _sec(
                    "Common Use Cases:",
                    "Sockets, files in binary mode, crypto APIs.",
                ),
                _sec(
                    "Edge Cases:",
                    "Non-ASCII in b\"\" needs \\\\x escapes; str.encode for runtime text.",
                ),
                _sec(
                    "Performance Considerations:",
                    "bytes operations are C-optimized.",
                ),
                _sec(
                    "Examples:",
                    "b\"hi\"[0] is int; b\"hi\".decode() is str.",
                ),
                _sec(
                    "Notes:",
                    "Never silently mix bytes and str — decode or encode explicitly.",
                ),
            ]
        )

    # Variable name validity (8–17)
    if q.startswith("Is '") and "valid variable name" in q:
        return _varname_tail(q)

    # len / concat / repeat / slice (18–27)
    if q in (
        'What is len("hello")?',
        'What does "Hello" + "World" result in?',
        'What does "Hi" * 3 result in?',
        'What is "Python"[0]?',
        'What is "Python"[-1]?',
        'What is "Python"[1:4]?',
        'What is "Python"[:3]?',
        'What is "Python"[3:]?',
        'What is "Python"[::2]?',
        'What is "Python"[::-1]?',
    ):
        return _len_concat_slice_tail(q)

    # Comments / quotes meta (28–37)
    if (
        "comment" in q.lower()
        or "triple" in q.lower()
        or "after #" in q
        or q.startswith("Which symbol")
        or q.startswith("Correct way")
        or q.startswith("What is the difference")
        or q.startswith("What happens to")
        or q.startswith("Can triple")
        or q.startswith("Can you nest")
        or q.startswith("Is #")
    ):
        return _comment_tail(q)

    # conversions (38–47)
    if q.startswith("Result of"):
        return _conversion_tail(q)

    # arithmetic (48–57) — check divide-by-zero before general 10/2
    if q == "What is 10 / 0?":
        return _arith_tail(q)
    if (
        q.startswith("What is 10 /")
        or q.startswith("What is 10 //")
        or q.startswith("What is 2 **")
        or q.startswith("What is 10 %")
        or q == "What is -5?"
        or q == "What is +5?"
        or q == "What is 2 * 3 + 4?"
        or q == "What is (2 + 3) * 4?"
        or q == "What is 2 ** 2 ** 3?"
    ):
        return _arith_tail(q)

    if q == "Value of type(3.14 + 1)?":
        return "\n\n".join(
            [
                _sec(
                    "Key Distinctions:",
                    "3.14 + 1 is float addition — result is float; type is float.",
                    "Even if mathematically integer, 4.14 stays float.",
                ),
                _sec(
                    "How It Works:",
                    "Binary + on floats returns float; type() on result.",
                ),
                _sec(
                    "Step-by-Step Execution:",
                    "1. Add 3.14 and 1.",
                    "2. Pass result to type().",
                ),
                _sec(
                    "Order of Operations:",
                    "Addition before type() call.",
                ),
                _sec(
                    "Common Use Cases:",
                    "Checking numeric pipelines preserve float.",
                ),
                _sec(
                    "Edge Cases:",
                    "float rounding — not exact decimals.",
                ),
                _sec(
                    "Performance Considerations:",
                    "Single add negligible.",
                ),
                _sec(
                    "Examples:",
                    "type(1 + 1.0) → float.",
                ),
                _sec(
                    "Notes:",
                    "decimal.Decimal for money-grade math.",
                ),
            ]
        )

    if q == 'What does "A" represent in Python?':
        return "\n\n".join(
            [
                _sec(
                    "Key Distinctions:",
                    "In code, \"A\" in quotes is a one-character str, not a type name by itself.",
                    "The letter is data; context (quiz) stresses str versus numeric types.",
                ),
                _sec(
                    "How It Works:",
                    "String literal creates str instance.",
                ),
                _sec(
                    "Step-by-Step Execution:",
                    "1. Build str \"A\".",
                    "2. Use per quiz (often type or display).",
                ),
                _sec(
                    "Order of Operations:",
                    "Literal evaluation.",
                ),
                _sec(
                    "Common Use Cases:",
                    "Single-character flags and grades.",
                ),
                _sec(
                    "Edge Cases:",
                    "Unicode letters beyond ASCII still str.",
                ),
                _sec(
                    "Performance Considerations:",
                    "Tiny str trivial.",
                ),
                _sec(
                    "Examples:",
                    "ord(\"A\") → 65.",
                ),
                _sec(
                    "Notes:",
                    "Contrast with bare identifier A which would be a variable name.",
                ),
            ]
        )

    if q == "How do you find the data type of a variable?":
        return "\n\n".join(
            [
                _sec(
                    "Key Distinctions:",
                    "Built-in type(x) returns the class; isinstance(x, T) checks protocol or inheritance.",
                    "__class__ attribute exists but type() is the idiomatic call.",
                ),
                _sec(
                    "How It Works:",
                    "type looks up the class pointer on the object header.",
                ),
                _sec(
                    "Step-by-Step Execution:",
                    "1. Evaluate variable to object.",
                    "2. type(obj).",
                ),
                _sec(
                    "Order of Operations:",
                    "Lookup then call.",
                ),
                _sec(
                    "Common Use Cases:",
                    "Debugging unexpected values in dynamic code.",
                ),
                _sec(
                    "Edge Cases:",
                    "Proxy objects may lie — advanced.",
                ),
                _sec(
                    "Performance Considerations:",
                    "Cheap.",
                ),
                _sec(
                    "Examples:",
                    "type([]); isinstance(\"a\", str).",
                ),
                _sec(
                    "Notes:",
                    "typing module for static hints; runtime still uses type/isinstance.",
                ),
            ]
        )

    if q == "Which quotes are valid for strings?":
        return "\n\n".join(
            [
                _sec(
                    "Key Distinctions:",
                    "Single ' and double \" both create str — style choice mostly.",
                    "Triple quotes start multi-line strings; raw strings use r prefix.",
                ),
                _sec(
                    "How It Works:",
                    "Lexer collects characters between matching quotes with escape rules.",
                ),
                _sec(
                    "Step-by-Step Execution:",
                    "1. Opening quote.",
                    "2. Content and escapes.",
                    "3. Closing quote → str.",
                ),
                _sec(
                    "Order of Operations:",
                    "Literal only.",
                ),
                _sec(
                    "Common Use Cases:",
                    "Embed apostrophes: \"it's\" or 'say \"hi\"'.",
                ),
                _sec(
                    "Edge Cases:",
                    "Backslash continuations and raw strings.",
                ),
                _sec(
                    "Performance Considerations:",
                    "Identical runtime for ' vs \".",
                ),
                _sec(
                    "Examples:",
                    "'''multi\nline'''; f\"x={1}\".",
                ),
                _sec(
                    "Notes:",
                    "PEP 8 prefers matching project style consistently.",
                ),
            ]
        )

    # String compare / membership (62–67)
    if q in (
        'What is "2" + "3"?',
        'What is int("2") + int("3")?',
        'What is "hello" == "Hello"?',
        'What is "apple" < "banana"?',
        'What is "a" in "abc"?',
        'What is "a" not in "xyz"?',
    ):
        return _strcmp_tail(q)

    # String methods (68–92)
    if any(
        m in q
        for m in (
            ".lower()",
            ".capitalize()",
            ".title()",
            ".swapcase()",
            ".islower()",
            ".find(",
            ".rfind(",
            ".index(",
            ".count(",
            ".startswith(",
            ".endswith(",
            ".replace(",
            ".partition(",
            ".rpartition(",
            ".split(",
            ".splitlines(",
            ".join(",
            ".center(",
            ".ljust(",
            ".rjust(",
            ".zfill(",
            'f"',
        )
    ):
        return _strmethod_tail(q)

    # Fallback — should not hit if QUESTIONS aligned
    return "\n\n".join(
        [
            _sec(
                "Key Distinctions:",
                f"This quiz stem is: {q.replace(chr(96), chr(39))}",
                "Work through the short explanation above line by line.",
            ),
            _sec(
                "How It Works:",
                "Python evaluates the expression according to language rules for that construct.",
            ),
            _sec(
                "Step-by-Step Execution:",
                "1. Evaluate inner subexpressions.",
                "2. Apply the outer operation.",
                "3. Produce the quiz answer.",
            ),
            _sec(
                "Order of Operations:",
                "Respect precedence and left-to-right evaluation where defined.",
            ),
            _sec(
                "Common Use Cases:",
                "REPL experimentation and small scripts.",
            ),
            _sec(
                "Edge Cases:",
                "Try empty inputs and boundary indices for the same pattern.",
            ),
            _sec(
                "Performance Considerations:",
                "Negligible at beginner sizes.",
            ),
            _sec(
                "Examples:",
                "Vary one literal at a time to see how the result moves.",
            ),
            _sec(
                "Notes:",
                "If this fallback appears, extend tail_for() with a dedicated branch.",
            ),
        ]
    )


def _varname_tail(q: str) -> str:
    """Valid variable name questions — unique per stem."""
    if "space" in q:
        extra = "Spaces cannot appear in identifiers — tokenization splits on whitespace."
    elif "2variable" in q:
        extra = "Identifiers cannot start with a digit."
    elif "my-variable" in q:
        extra = "Hyphen is subtraction operator, not part of a name — invalid."
    elif q.strip().startswith("Is 'class'"):
        extra = "'class' is a reserved keyword — illegal as an ordinary name."
    elif q.strip().startswith("Is 'def'"):
        extra = "'def' introduces functions — reserved."
    elif q.strip().startswith("Is 'if'"):
        extra = "'if' starts conditionals — reserved."
    elif "my_variable" in q:
        extra = "Letters, digits, underscore — valid; cannot start with digit."
    elif "MyVariable" in q:
        extra = "Case matters; mixed case allowed (style: often CamelCase for classes)."
    elif "_private" in q:
        extra = "Leading underscore is convention for internal use — still valid."
    elif "__special__" in q:
        extra = "Dunder names invoke protocol hooks — valid identifiers."
    else:
        extra = "Compare against lexical rules and keyword list."

    return "\n\n".join(
        [
            _sec(
                "Key Distinctions:",
                "Lexical rules: start with letter or underscore; continue with letters, digits, underscore.",
                "Reserved words (keywords) are never valid as ordinary identifiers.",
                extra,
            ),
            _sec(
                "How It Works:",
                "Tokenizer classifies NAME tokens versus operators; keywords matched before names.",
            ),
            _sec(
                "Step-by-Step Execution:",
                "1. Scan characters of the proposed name.",
                "2. Reject illegal characters or keyword match.",
            ),
            _sec(
                "Order of Operations:",
                "Compile-time / parse-time check for source text.",
            ),
            _sec(
                "Common Use Cases:",
                "Choosing names before assignment or import aliases.",
            ),
            _sec(
                "Edge Cases:",
                "Unicode letters allowed in identifiers (PEP 3131).",
            ),
            _sec(
                "Performance Considerations:",
                "Parsing cost only at compile time.",
            ),
            _sec(
                "Examples:",
                "import keyword; keyword.iskeyword(\"for\").",
            ),
            _sec(
                "Notes:",
                "str.isidentifier() approximates validity; still check keywords.",
            ),
        ]
    )


def _len_concat_slice_tail(q: str) -> str:
    if q == 'What is len("hello")?':
        return "\n\n".join(
            [
                _sec(
                    "Key Distinctions:",
                    "len(s) counts code points in str (Unicode length), not UTF-8 bytes.",
                    "Empty string has len 0 — falsy.",
                ),
                _sec(
                    "How It Works:",
                    "Calls Py_SIZE or cached length on the string object.",
                ),
                _sec(
                    "Step-by-Step Execution:",
                    "1. Build str.",
                    "2. len returns integer.",
                ),
                _sec(
                    "Order of Operations:",
                    "Inner literal, outer len().",
                ),
                _sec(
                    "Common Use Cases:",
                    "Validation, padding, slicing bounds.",
                ),
                _sec(
                    "Edge Cases:",
                    "Surrogate pairs — len may differ from user-perceived glyphs.",
                ),
                _sec(
                    "Performance Considerations:",
                    "O(1) for str in CPython (cached length).",
                ),
                _sec(
                    "Examples:",
                    "len(\"café\"); len(\"\").",
                ),
                _sec(
                    "Notes:",
                    "For bytes, len counts octets.",
                ),
            ]
        )
    if q == 'What does "Hello" + "World" result in?':
        return "\n\n".join(
            [
                _sec(
                    "Key Distinctions:",
                    "str + str concatenates — creates new str; originals unchanged.",
                    "Not numeric add — both must be str (or error).",
                ),
                _sec(
                    "How It Works:",
                    "Allocates buffer sized sum of lengths, copies both parts.",
                ),
                _sec(
                    "Step-by-Step Execution:",
                    "1. Evaluate left str.",
                    "2. Evaluate right str.",
                    "3. Concatenate.",
                ),
                _sec(
                    "Order of Operations:",
                    "Left to right for +.",
                ),
                _sec(
                    "Common Use Cases:",
                    "Building messages; prefer join for many parts.",
                ),
                _sec(
                    "Edge Cases:",
                    "Huge strings — memory blowup if repeated + in loop.",
                ),
                _sec(
                    "Performance Considerations:",
                    "Repeated concatenation in loop is quadratic — use list + join.",
                ),
                _sec(
                    "Examples:",
                    "\"a\" + \"b\"; \"\".join(parts).",
                ),
                _sec(
                    "Notes:",
                    "f-strings often clearer than many +.",
                ),
            ]
        )
    if q == 'What does "Hi" * 3 result in?':
        return "\n\n".join(
            [
                _sec(
                    "Key Distinctions:",
                    "str * int repeats the string; int must be nonnegative for str (in Python 3).",
                    "Order: \"Hi\" * 3 repeats three times.",
                ),
                _sec(
                    "How It Works:",
                    "str.__mul__ allocates new string with repeated pattern.",
                ),
                _sec(
                    "Step-by-Step Execution:",
                    "1. Evaluate str.",
                    "2. Evaluate int.",
                    "3. Repeat.",
                ),
                _sec(
                    "Order of Operations:",
                    "Multiplication after unary if any.",
                ),
                _sec(
                    "Common Use Cases:",
                    "Padding characters, ASCII art.",
                ),
                _sec(
                    "Edge Cases:",
                    "0 times yields empty str.",
                ),
                _sec(
                    "Performance Considerations:",
                    "Single repeat allocates once.",
                ),
                _sec(
                    "Examples:",
                    "\"-\" * 10.",
                ),
                _sec(
                    "Notes:",
                    "3 * \"Hi\" also works (commutative with int).",
                ),
            ]
        )
    # slicing family
    return _slice_tail(q)


def _slice_tail(q: str) -> str:
    """Python[...] indexing and slicing."""
    if "[0]" in q:
        spec = "Index 0 is first character — forward indexing."
    elif "[-1]" in q:
        spec = "Index -1 is last character — negative indices count from end."
    elif "[1:4]" in q:
        spec = "Slice stop is exclusive: positions 1,2,3 → three chars."
    elif "[:3]" in q:
        spec = "Omitted start defaults to 0 — prefix of length 3."
    elif "[3:]" in q:
        spec = "Omitted stop defaults to len — suffix from index 3."
    elif "[::2]" in q:
        spec = "Step 2 takes every other character — extended slice."
    elif "[::-1]" in q:
        spec = "Step -1 reverses the string — idiomatic reverse."
    else:
        spec = "Apply slice rules: start, stop, step with defaults."

    return "\n\n".join(
        [
            _sec(
                "Key Distinctions:",
                "Indexing one position returns str of length 1; slicing returns substring.",
                "Out-of-range slice clamps; single index out of range errors.",
                spec,
            ),
            _sec(
                "How It Works:",
                "Slice object created; str.__getitem__ builds new substring.",
            ),
            _sec(
                "Step-by-Step Execution:",
                "1. Evaluate base string.",
                "2. Apply slice indices (may normalize negatives).",
                "3. Return new str.",
            ),
            _sec(
                "Order of Operations:",
                "Brackets after string evaluated.",
            ),
            _sec(
                "Common Use Cases:",
                "Parsing prefixes/suffixes, reversing, stepping.",
            ),
            _sec(
                "Edge Cases:",
                "Empty slice possible; [::-1] on empty stays empty.",
            ),
            _sec(
                "Performance Considerations:",
                "O(k) in output length.",
            ),
            _sec(
                "Examples:",
                "\"abc\"[10:10] → \"\".",
            ),
            _sec(
                "Notes:",
                "Same slicing model as list and tuple.",
            ),
        ]
    )


def _comment_tail(q: str) -> str:
    low = q.lower()
    if "which symbol" in low:
        focus = "# starts a single-line comment to end of line."
    elif "correct way" in low:
        focus = "Triple quotes ''' or \"\"\" define multi-line strings; also used as docstrings."
    elif "purpose of comments" in low:
        focus = "Comments document intent — ignored by interpreter."
    elif "comment after code" in low:
        focus = "Inline comment after statement — code before # runs."
    elif "triple quotes'''" in low or "triple quotes" in q:
        focus = "Triple-quoted string is a str object — often multi-line."
    elif "# a comment or string" in low or ("#" in q and "delimiter" in low):
        focus = "# outside quotes starts comment; inside string literal it is data."
    elif "triple quotes be used for comments" in low:
        focus = "Unassigned triple-quoted string can act like block comment but still builds a value — not a true comment."
    elif "after #" in q and "line" in low:
        focus = "Everything after # on that physical line is comment (unless in string)."
    elif "nest" in low:
        focus = "Nested triple quotes: alternate quote styles or escape to close inner."
    elif "difference between" in low:
        focus = "Single vs double quotes are equivalent for str; embedding the other quote avoids escapes."
    else:
        focus = "Comment and string rules interact — lexer tracks quote state."

    return "\n\n".join(
        [
            _sec(
                "Key Distinctions:",
                focus,
                "Docstrings are strings first — executed at function/class definition time if assigned.",
            ),
            _sec(
                "How It Works:",
                "Tokenizer switches between code, string, and comment modes.",
            ),
            _sec(
                "Step-by-Step Execution:",
                "1. Scan source characters.",
                "2. Apply Python lexical rules for # and quotes.",
            ),
            _sec(
                "Order of Operations:",
                "Comments removed before AST; strings become literals.",
            ),
            _sec(
                "Common Use Cases:",
                "Explain why, not what; docstrings for API docs.",
            ),
            _sec(
                "Edge Cases:",
                "Shebang #! on line 1 is comment to Python.",
            ),
            _sec(
                "Performance Considerations:",
                "Comments zero runtime cost.",
            ),
            _sec(
                "Examples:",
                "x = 1  # set x",
            ),
            _sec(
                "Notes:",
                "Use linters to flag commented-out code.",
            ),
        ]
    )


def _conversion_tail(q: str) -> str:
    if 'int("42")' in q:
        body = "int() parses decimal string to int; base 10 default; raises ValueError on junk."
    elif "float(42)" in q:
        body = "float() converts int to float — exact integer becomes float with .0."
    elif "str(42)" in q:
        body = "str() calls __str__ / repr path to build human-readable string."
    elif "bool(0)" in q:
        body = "Zero int is falsy — bool(0) is False."
    elif "bool(1)" in q:
        body = "Nonzero int is truthy — bool(1) is True."
    elif 'bool("")' in q:
        body = "Empty str is falsy."
    elif 'bool("hello")' in q:
        body = "Non-empty str is truthy."
    elif "bool([])" in q:
        body = "Empty list falsy — len 0."
    elif "bool([1, 2])" in q:
        body = "Non-empty list truthy regardless of element truth (container nonempty)."
    elif "bool(None)" in q:
        body = "None is falsy — bool(None) False."
    else:
        body = "Built-in conversion obeys __int__/__float__/__bool__ protocols."

    return "\n\n".join(
        [
            _sec(
                "Key Distinctions:",
                body,
                "Conversion is not the same as casting in C — Python may allocate new objects.",
            ),
            _sec(
                "How It Works:",
                "Call built-in with argument; appropriate special method invoked.",
            ),
            _sec(
                "Step-by-Step Execution:",
                "1. Evaluate argument.",
                "2. Run conversion.",
            ),
            _sec(
                "Order of Operations:",
                "Inner then outer call.",
            ),
            _sec(
                "Common Use Cases:",
                "Parsing user input; normalizing types before math.",
            ),
            _sec(
                "Edge Cases:",
                "int('') raises; float('nan') special.",
            ),
            _sec(
                "Performance Considerations:",
                "Small conversions cheap.",
            ),
            _sec(
                "Examples:",
                "int(3.9) truncates toward zero.",
            ),
            _sec(
                "Notes:",
                "Use explicit base for int(s, base).",
            ),
        ]
    )


def _arith_tail(q: str) -> str:
    if "10 / 0" in q:
        return "\n\n".join(
            [
                _sec(
                    "Key Distinctions:",
                    "Division by zero raises ZeroDivisionError — not infinity in Python ints/floats by default.",
                    "True division / on ints still uses float rules for 0.",
                ),
                _sec(
                    "How It Works:",
                    "Binary op checks divisor before returning.",
                ),
                _sec(
                    "Step-by-Step Execution:",
                    "1. Evaluate denominator 0.",
                    "2. Attempt division.",
                    "3. Exception.",
                ),
                _sec(
                    "Order of Operations:",
                    "Division when reached.",
                ),
                _sec(
                    "Common Use Cases:",
                    "Guard with if b != 0 before divide.",
                ),
                _sec(
                    "Edge Cases:",
                    "0.0 denominator also errors.",
                ),
                _sec(
                    "Performance Considerations:",
                    "N/A — fails fast.",
                ),
                _sec(
                    "Examples:",
                    "try/except ZeroDivisionError.",
                ),
                _sec(
                    "Notes:",
                    "math.nan / 0 still problematic — IEEE rules differ.",
                ),
            ]
        )
    if "10 / 2" in q:
        op = "True division / always returns float in Python 3 — 10/2 is 5.0."
    elif "10 // 3" in q:
        op = "Floor division // toward negative infinity — 10//3 is 3."
    elif "2 ** 3" in q:
        op = "Exponentiation ** — 2**3 is 8; right-associative for chains."
    elif "10 % 3" in q:
        op = "Modulo % remainder with sign of divisor in Python — 10%3 is 1."
    elif q == "What is -5?":
        op = "Unary minus on 5 — integer -5."
    elif q == "What is +5?":
        op = "Unary plus — rarely needed; returns same numeric value."
    elif "2 * 3 + 4" in q:
        op = "Precedence: * before + — 2*3+4 = 10."
    elif "(2 + 3) * 4" in q:
        op = "Parentheses force add first — (2+3)*4 = 20."
    elif "2 ** 2 ** 3" in q:
        op = "Exponentiation chains right-to-left — 2**(2**3)=256."
    else:
        op = "Apply numeric operator rules from the quiz stem."

    return "\n\n".join(
        [
            _sec(
                "Key Distinctions:",
                op,
                "Integer vs float: / promotes to float; // stays int when both ints.",
            ),
            _sec(
                "How It Works:",
                "Binary special methods __truediv__, __floordiv__, __pow__, __mod__.",
            ),
            _sec(
                "Step-by-Step Execution:",
                "1. Evaluate operands per precedence.",
                "2. Apply operator.",
            ),
            _sec(
                "Order of Operations:",
                "PEMDAS-like; ** binds tighter; unary +/- ; * / // % ; + -.",
            ),
            _sec(
                "Common Use Cases:",
                "Numeric code, indexing math.",
            ),
            _sec(
                "Edge Cases:",
                "Large ints — arbitrary precision.",
            ),
            _sec(
                "Performance Considerations:",
                "Pow with three args uses modular exponentiation.",
            ),
            _sec(
                "Examples:",
                "divmod(10,3).",
            ),
            _sec(
                "Notes:",
                "fractions.Fraction for exact rationals.",
            ),
        ]
    )


def _strcmp_tail(q: str) -> str:
    if '"2" + "3"' in q:
        spec = "Concatenation, not addition — \"23\" string."
    elif 'int("2") + int("3")' in q:
        spec = "Parse then add ints — 5."
    elif "hello" in q and "Hello" in q:
        spec = "Case-sensitive equality — False unless same casing."
    elif "apple" in q:
        spec = "Lexicographic compare by Unicode code points — \"apple\" < \"banana\"."
    elif '"a" in "abc"' in q:
        spec = "Substring test — membership for str."
    elif "not in" in q:
        spec = "Negated membership — True when absent."
    else:
        spec = "String comparison or membership per operators."

    return "\n\n".join(
        [
            _sec(
                "Key Distinctions:",
                spec,
                "str uses rich comparison; no implicit case folding.",
            ),
            _sec(
                "How It Works:",
                "Character-by-character compare or search algorithm.",
            ),
            _sec(
                "Step-by-Step Execution:",
                "1. Evaluate operands.",
                "2. Apply in / not in / == / <.",
            ),
            _sec(
                "Order of Operations:",
                "Chained comparisons special-case — not used here.",
            ),
            _sec(
                "Common Use Cases:",
                "Sorting, filtering, validation.",
            ),
            _sec(
                "Edge Cases:",
                "Empty string is prefix of every string.",
            ),
            _sec(
                "Performance Considerations:",
                "in is O(n*m) naive worst case.",
            ),
            _sec(
                "Examples:",
                "\"ab\" < \"ac\"; \"a\" in \"\". ",
            ),
            _sec(
                "Notes:",
                "Use casefold() for case-insensitive compare when needed.",
            ),
        ]
    )


def _strmethod_tail(q: str) -> str:
    # Unique one-liner topic per method family
    topic = "Apply the str method semantics from the quiz stem to the literal shown."
    if ".lower()" in q:
        topic = "lower() maps cased letters to lowercase; returns new str."
    elif ".capitalize()" in q:
        topic = "capitalize() uppercases first character, lowercases rest."
    elif ".title()" in q:
        topic = "title() capitalizes word starts — heuristic, not title-case for all languages."
    elif ".swapcase()" in q:
        topic = "swapcase() toggles case per character."
    elif ".islower()" in q:
        topic = "islower() True if all cased letters are lowercase and there is at least one cased letter."
    elif ".find(" in q:
        topic = "find returns lowest index or -1 — never raises."
    elif ".rfind(" in q:
        topic = "rfind searches from the right for highest index."
    elif ".index(" in q:
        topic = "index like find but raises ValueError if missing."
    elif ".count(" in q:
        topic = "count non-overlapping occurrences."
    elif ".startswith(" in q:
        topic = "prefix test — optional start/end bounds."
    elif ".endswith(" in q:
        topic = "suffix test — tuple of suffixes allowed."
    elif ".replace(" in q and ", 1)" in q:
        topic = "replace with count limits first N replacements."
    elif ".replace(" in q:
        topic = "replace all non-overlapping occurrences of substring."
    elif ".partition(" in q:
        topic = "partition splits on first sep into head, sep, tail."
    elif ".rpartition(" in q:
        topic = "rpartition splits on last occurrence of sep."
    elif 'split(",")' in q:
        topic = "split with explicit separator — no strip of spaces unless specified."
    elif ".split()" in q and "splitlines" not in q:
        topic = "split() without arg splits on arbitrary whitespace and discards empties."
    elif "splitlines" in q:
        topic = "splitlines breaks on line boundaries; keeps line endings optional."
    elif 'join(["a"' in q:
        topic = "join inserts separator between iterable of strings — requires str elements."
    elif '"".join' in q:
        topic = "Empty separator concatenates all parts — efficient builder pattern."
    elif ".center(" in q:
        topic = "center pads both sides with default space to width."
    elif ".ljust(" in q:
        topic = "ljust pads on the right."
    elif ".rjust(" in q:
        topic = "rjust pads on the left."
    elif ".zfill(" in q:
        topic = "zfill pads numeric string with zeros on the left for width."
    elif 'f"' in q or "f\"" in q:
        topic = "f-string evaluates expressions in braces at runtime — fastest formatting style."

    return "\n\n".join(
        [
            _sec(
                "Key Distinctions:",
                topic,
                "All str methods return new str — originals immutable.",
            ),
            _sec(
                "How It Works:",
                "CPython implements str methods in C for speed; Unicode-aware operations.",
            ),
            _sec(
                "Step-by-Step Execution:",
                "1. Evaluate receiver string.",
                "2. Resolve method and arguments.",
                "3. Build and return new str.",
            ),
            _sec(
                "Order of Operations:",
                "Method call after receiver and arguments evaluated left to right.",
            ),
            _sec(
                "Common Use Cases:",
                "Cleaning user input, formatting output, parsing tokens.",
            ),
            _sec(
                "Edge Cases:",
                "Locale can affect lower/upper for Turkish I — advanced.",
            ),
            _sec(
                "Performance Considerations:",
                "join on list faster than repeated + for many pieces.",
            ),
            _sec(
                "Examples:",
                "s.strip().lower(); f\"{n:05d}\".",
            ),
            _sec(
                "Notes:",
                "regex (re module) when str methods are not enough.",
            ),
        ]
    )


def main() -> None:
    path = Path(__file__).resolve().parents[1] / "src/data/questions/level1.ts"
    text = path.read_text(encoding="utf-8")
    if text.count(BLOCK_START) != len(QUESTIONS):
        raise SystemExit(
            f"Expected {len(QUESTIONS)} generic blocks in level1.ts, found {text.count(BLOCK_START)}"
        )

    tails = [tail_for(q) for q in QUESTIONS]
    out = text
    for tail in tails:
        # tail_for() already opens with Key Distinctions: …
        replacement = tail
        idx = out.find(BLOCK_START)
        if idx == -1:
            raise SystemExit("BLOCK_START not found")
        end = out.find(BLOCK_END, idx)
        if end == -1:
            raise SystemExit("BLOCK_END not found")
        end += len(BLOCK_END)
        out = out[:idx] + replacement + out[end:]

    if BLOCK_START in out:
        raise SystemExit("Not all blocks replaced")

    path.write_text(out, encoding="utf-8")
    print(f"OK: patched {len(tails)} blocks in {path}")


if __name__ == "__main__":
    main()
