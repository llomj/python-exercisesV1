#!/usr/bin/env python3
"""One-shot generator for fix_level3_expert_b / intermediate_a / intermediate_b scripts. Run from repo root."""
from __future__ import annotations

from pathlib import Path


def tail_block(*parts: str) -> str:
    """Build tail; pads to 10 section strings if fewer were provided (legacy blocks in this builder)."""
    if len(parts) > 10:
        raise ValueError(f"tail_block: at most 10 strings, got {len(parts)}")
    fill = "— (Editorial: expand this slot if needed.)"
    p = list(parts)
    while len(p) < 10:
        p.append(fill)
    kd1, kd2, how, step, order, common, edge, perf, ex, notes = p
    out = [
        "• " + kd1,
        "• " + kd2,
        "",
        "How It Works:",
        "• " + how,
        "",
        "Step-by-Step Execution:",
        step,
        "",
        "Order of Operations:",
        "• " + order,
        "",
        "Common Use Cases:",
        "• " + common,
        "",
        "Edge Cases:",
        "• " + edge,
        "",
        "Performance Considerations:",
        "• " + perf,
        "",
        "Examples:",
        "• " + ex,
        "",
        "Notes:",
        "• " + notes,
    ]
    return "\n".join(out)


HEADER = '''#!/usr/bin/env python3
"""
Replace duplicated generic tails in {title} (50 occurrences).
replacement = "Key Distinctions:\\n" + tail
BLOCK_END = Level 3 PEP 8 Notes (same as level3.ts).
No backticks inside tails (TS template literal safety).
"""
from __future__ import annotations

from pathlib import Path

BLOCK_START = (
    "Key Concepts:\\n"
    "• See the key concepts and explanation above for the main ideas and bullet points.\\n\\n"
    "Key Distinctions:"
)

BLOCK_END = (
    "Notes:\\n"
    "• Follow PEP 8 and best practices; refer to the official docs for full details."
)

TAILS: list[str] = [
'''

FOOTER = '''


def main() -> None:
    path = Path(__file__).resolve().parents[1] / "src/data/questions/{ts}"
    text = path.read_text(encoding="utf-8")
    if text.count(BLOCK_START) != len(TAILS):
        raise SystemExit(f"Expected {{len(TAILS)}} blocks, found {{text.count(BLOCK_START)}}")
    out = text
    for tail in TAILS:
        replacement = "Key Distinctions:\\n" + tail
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
    print(f"OK: patched {{len(TAILS)}} blocks in {{path}}")


if __name__ == "__main__":
    main()
'''


def write_script(script_name: str, ts: str, title: str, tails: list[str]) -> None:
    lines = [HEADER.format(title=title)]
    for i, t in enumerate(tails):
        lines.append("    " + repr(t))
        if i < len(tails) - 1:
            lines.append(",")
    lines.append("]" + FOOTER.format(ts=ts))
    Path("scripts", script_name).write_text("\n".join(lines), encoding="utf-8")


def build_expert_b() -> list[str]:
    tails: list[str] = []
    tails.append(
        tail_block(
            "float('nan') is NaN; bool(nan) is True in Python because NaN is a non-zero float object.",
            "Use math.isnan(x), not x == float('nan'), to detect NaN.",
            "float.__bool__ treats any nonzero magnitude as true; NaN is nonzero.",
            "1. Create nan. 2. Call bool. 3. Observe True.",
            "bool on float follows numeric magnitude rules, not IEEE total-order rules.",
            "Sanity-checking calculations that should never produce NaN.",
            "NaN != NaN — reflexivity fails; sorting can misbehave without keys.",
            "Constant-time.",
            "math.isnan(float('nan')) -> True.",
            "Prefer pandas.isna for tabular data; handle NaN explicitly in plots.",
        )
    )
    tails.append(
        tail_block(
            "float('inf') is infinite positive float; bool is True (non-zero).",
            "inf compares greater than any finite float; use math.isinf for explicit tests.",
            "Same truthiness rule applies to sign of infinity.",
            "1. Parse inf. 2. bool True.",
            "Sign of infinity does not flip truthiness.",
            "Overflow results and limiting behavior in simulations.",
            "inf + (-inf) yields nan — different truthiness.",
            "Trivial.",
            "math.isinf(x) and math.copysign(1, x) for sign.",
            "Watch inf propagation in products and sums.",
        )
    )
    tails.append(
        tail_block(
            "float('-inf') is nonzero; bool True.",
            "-inf sorts below all finite numbers.",
            "Magnitude-based bool, not sign-based falsity.",
            "1. Build -inf. 2. bool True.",
            "Unordered comparisons with nan still possible — not this quiz.",
            "Optimization and physics-style asymptotics.",
            "Comparing -inf with nan is False — partial order.",
            "Trivial.",
            "math.isinf distinguishes signed infinities.",
            "Plotting asymptotes and clipped ranges.",
        )
    )
    tails.append(
        tail_block(
            "0.0 is numerically zero; bool(0.0) is False like int 0.",
            "Contrast with any nonzero float, including subnormal tiny values (usually True).",
            "float shares falsy zero with int.",
            "1. Literal 0.0. 2. bool False.",
            "Magnitude zero means falsy for numbers.",
            "Default metrics and uninitialized gauges.",
            "-0.0 still compares equal to 0.0; bool still False.",
            "Trivial.",
            "math.copysign(1, -0.0) reveals signed zero.",
            "Use isclose for residuals near zero, not raw truth tests.",
        )
    )
    tails.append(
        tail_block(
            "IEEE -0.0 equals +0.0; bool(-0.0) is False.",
            "Sign of zero can matter for 1/x but not for truthiness.",
            "Same as +0.0 for boolean context.",
            "1. Construct -0.0. 2. bool False.",
            "Signed-zero edge cases in numerical libraries.",
            "1 / -0.0 is -inf — unrelated to bool.",
            "Trivial.",
            "struct.unpack may reveal sign bit — rare in app code.",
            "Do not branch on signed zero in business logic without domain reason.",
            "Reserve signed-zero handling for numeric libraries, not UI booleans.",
        )
    )
    tails.append(
        tail_block(
            "Non-empty string '0' has length 1; bool is True — the digit character is not numeric zero.",
            "Only the empty string '' is falsy among str (plus whitespace-only policy varies by use).",
            "Truthiness uses emptiness, not numeric parsing.",
            "1. str '0'. 2. bool True.",
            "str never auto-parses to int in truth tests.",
            "CLI arguments and form fields before int().",
            "Whitespace ' ' is truthy; strip before checks if needed.",
            "O(1) length.",
            "int('0') == 0 but '0' itself is truthy.",
            "Validate with explicit int() and try/except.",
        )
    )
    tails.append(
        tail_block(
            "The string 'False' is non-empty, so bool is True — it is not the bool singleton False.",
            "Lexical text does not auto-convert to bool in truth tests.",
            "Need ast.literal_eval or custom parsing for 'True'/'False' strings.",
            "1. Non-empty str. 2. bool True.",
            "Config parsers differ from bare truth checks.",
            "Feature flags read from text files.",
            "distutils.util.strtobool maps common strings — different API.",
            "Trivial.",
            "json.loads maps JSON false to False — not plain str.",
            "Document expected string tokens for settings.",
        )
    )
    tails.append(
        tail_block(
            "The string 'None' is truthy — five characters — not the None singleton.",
            "None object is falsy; the text 'None' is a normal nonempty string.",
            "Never use truthiness to detect None — use is None.",
            "1. str object. 2. bool True.",
            "Serialization and logging often stringify None accidentally.",
            "JSON null becomes None in json.loads — distinct from 'None' str.",
            "APIs that echo None as text can confuse clients expecting JSON null.",
            "Trivial.",
            "if x is None: is the idiomatic guard.",
            "Teach beginners the string-vs-None confusion early.",
        )
    )
    tails.append(
        tail_block(
            "List [0] is nonempty; bool([0]) is True even though 0 is falsy.",
            "Container truthiness uses len, not all(element truth).",
            "list.__bool__ returns False only for empty lists.",
            "1. len 1. 2. bool True.",
            "Contrast all([False]) which is False.",
            "Checking that a list exists before indexing element 0.",
            "Nested [[]] still truthy at outer level.",
            "O(1) length check.",
            "if rows: pick rows[0]",
            "Use all(rows) or any(rows) if element truth matters.",
        )
    )
    tails.append(
        tail_block(
            "Outer list [[]] has length 1; inner empty list does not falsify the outer container.",
            "Emptiness is about the immediate container only.",
            "1. len 1. 2. bool True.",
            "Tree shapes where parent node exists with empty child.",
            "Matrix rows with placeholder empty rows.",
            "Deeply nested empties can still yield truthy outer wrappers.",
            "Constant-time.",
            "Flatten or check inner structure explicitly when needed.",
            "Combine with any() on children for meaningful emptiness.",
        )
    )
    tails.append(
        tail_block(
            "Tuple (0,) has length 1 — truthy — trailing comma makes a tuple, not int.",
            "Without comma, (0) is int 0 which is falsy — easy typo.",
            "Container truthiness from length.",
            "1. Tuple one slot. 2. bool True.",
            "Fixed-arity records that may hold zero magnitudes.",
            "Contrast (0) which parses as int.",
            "O(1).",
            "x = (0,) vs x = (0) — review reviews carefully.",
            "NamedTuple for clarity in APIs.",
        )
    )
    tails.append(
        tail_block(
            "Dict {0:0} has one entry; bool is True — key count matters, not value truthiness.",
            "Empty dict only is falsy.",
            "1. len>0. 2. bool True.",
            "dict.__bool__ uses size.",
            "Configuration dicts with zero values.",
            "Keys False and 0 collide — separate question.",
            "O(1) size.",
            "if settings: before iterating keys.",
            "Use .get and 'in' for presence, not truth of dict.",
        )
    )
    tails.append(
        tail_block(
            "frozenset() is empty; bool False — same emptiness rule as set().",
            "Immutable set type follows set truthiness.",
            "1. len 0. 2. bool False.",
            "Optional tag sets before items added.",
            "frozenset({0}) becomes truthy.",
            "Trivial.",
            "if tags: process(tags)",
            "Empty frozenset is a singleton-like useful sentinel container.",
        )
    )
    tails.append(
        tail_block(
            "frozenset({0}) has one element; bool True even though element is 0.",
            "Set truthiness is about cardinality, not member truthiness.",
            "1. len 1. 2. bool True.",
            "Frozen tag sets with numeric zero as token.",
            "Empty set remains falsy.",
            "O(1) length.",
            "len({0, False}) == 1 due to key equality.",
            "Prefer str tags if collisions confuse readers.",
        )
    )
    tails.append(
        tail_block(
            "bytearray() has length 0; bool False — buffer emptiness.",
            "Like bytes/list, length drives truthiness.",
            "1. No bytes. 2. bool False.",
            "Binary parsers starting empty then extending.",
            "bytearray(b'\\x00') length 1 is truthy.",
            "O(1).",
            "if buf: send(buf)",
            "memoryview truthiness follows underlying length.",
        )
    )
    tails.append(
        tail_block(
            "bytearray(b'\\x00') length 1; bool True — NUL byte is still data.",
            "Zero-valued byte is not container emptiness.",
            "1. len 1. 2. bool True.",
            "Binary frames with padding bytes.",
            "Empty bytearray remains the only falsy buffer here.",
            "Linear truthiness O(1).",
            "if data: checksum(data)",
            "Distinguish empty buffer from buffer of zeros.",
        )
    )
    tails.append(
        tail_block(
            "range(0) is empty; bool False — no iterations.",
            "range truthiness reflects whether any integer would be produced.",
            "1. len-like 0. 2. False.",
            "Guard for loops when upper bound may be 0.",
            "range(1) truthy.",
            "O(1) __bool__.",
            "Prefer explicit n > 0 over bool(range(n)) for readers.",
            "Huge stop values still cheap for truth test.",
        )
    )
    tails.append(
        tail_block(
            "range(1) yields one value; bool True.",
            "Any positive-length arithmetic range is truthy.",
            "1. Count >0. 2. True.",
            "Teaching bounds for loops.",
            "range(0,0,step) empty — falsy.",
            "O(1).",
            "len(range(a,b)) formula for counts.",
            "Avoid materializing range as list for truthiness.",
        )
    )
    tails.append(
        tail_block(
            "object() instances are truthy by default — no __bool__ making them false.",
            "Bare object is a common unique sentinel when identity matters.",
            "1. Allocate. 2. bool True.",
            "Custom singletons subclassing object.",
            "Could override __bool__ in subclasses — not here.",
            "O(1).",
            "sentinel = object()",
            "Enum or None often clearer for public APIs.",
        )
    )
    tails.append(
        tail_block(
            "or scans left to right and returns the first truthy operand — here the string 'found!' after falsy sentinels.",
            "None, 0, '', [] are falsy; the string at the end is truthy.",
            "Short-circuit stops at first truthy.",
            "1. Test None — falsy. 2. Continue until 'found!'.",
            "Default and fallback chains in configuration.",
            "If every operand were falsy, or returns the last value — not this chain.",
            "Evaluates until success.",
            "cfg.get('x') or default — similar pattern.",
            "Beware skipping valid numeric 0 with or — use explicit None tests.",
        )
    )
    tails.append(
        tail_block(
            "bool subclasses int; True+True+True evaluates as 1+1+1 == 3 in arithmetic contexts.",
            "PEP 285 made bool a subclass of int for backward compatibility.",
            "1. Promote True to 1. 2. Sum.",
            "Addition is left-associative.",
            "Counting True values via sum on a list of bools.",
            "numpy bool dtypes behave differently — mind arrays.",
            "Tiny integer ops.",
            "sum([True, False, True]) -> 2",
            "Prefer explicit int(x) in APIs returning counts.",
        )
    )
    tails.append(
        tail_block(
            "True*10 promotes True to 1; product is 10.",
            "Multiplication uses numeric promotion, not string repetition.",
            "1. 1*10.",
            "Arithmetic with bools is usually style-smell outside teaching.",
            "Bitmask tutorials sometimes abuse this.",
            "False times anything int-like gives 0.",
            "O(1).",
            "10 * True == 10",
            "Use int(flag) when you mean 0/1.",
        )
    )
    tails.append(
        tail_block(
            "False**0 follows numeric exponent rules; 0**0 is 1 in Python integers.",
            "False acts as integer 0 in power.",
            "1. Compute 0**0 -> 1.",
            "** binds tighter than unary operators in many contexts — mind parentheses.",
            "Puzzle code, not typical production.",
            "Debate about 0**0 in math does not change Python int result here.",
            "Constant-time.",
            "True**0 is also 1.",
            "Use pow with three arguments for modular exponentiation in crypto.",
        )
    )
    tails.append(
        tail_block(
            "True == 1 is True — value equality with bool subclassing int.",
            "== compares values; it is not identity.",
            "1. Coerce bool and int under equality.",
            "JSON true maps to True naturally.",
            "True == 2 is False.",
            "Trivial.",
            "hash(True) == hash(1) — dict key collision risk.",
            "Use is True only when singleton semantics matter.",
        )
    )
    tails.append(
        tail_block(
            "True is 1 is False — different objects despite == True.",
            "is compares identity (id).",
            "1. id(True) != id(1).",
            "Teach equality vs identity side by side.",
            "Small int caching is separate mechanism.",
            "Pointer compare.",
            "True is True is True.",
            "Never write True is 1 in production style guides.",
        )
    )
    tails.append(
        tail_block(
            "False == 0 is True — bool and int zero compare equal under ==.",
            "Same mechanism as True/1.",
            "1. Equality succeeds.",
            "JSON false mapping.",
            "False == 0.0 is also True.",
            "Trivial.",
            "hash(False) == hash(0) — dict key collision.",
            "Use explicit key types to avoid surprise merges.",
        )
    )
    tails.append(
        tail_block(
            "False == 0.0 is True — numeric equality across int and float zero.",
            "IEEE zero compares equal to int zero under ==.",
            "1. Compare across types.",
            "Scientific code comparing magnitudes.",
            "NaN would break reflexivity — not this case.",
            "Trivial.",
            "math.isclose for approximate floats.",
            "Dict keys 0 and 0.0 collide.",
        )
    )
    tails.append(
        tail_block(
            "False == '' is False — bool and empty str are incomparable for equality meaningfully here.",
            "No implicit '' to False conversion under ==.",
            "1. Compare distinct types.",
            "Avoid mixing bool and str in equality.",
            "'' == 0 is also False.",
            "Trivial.",
            "Use if not s: for empty string checks.",
            "Validate user input with explicit rules.",
        )
    )
    tails.append(
        tail_block(
            "Dict {True:'a', 1:'b'} merges keys True and 1 — equal hashes and equality — last wins.",
            "Effective single entry: key 1 maps to 'b' (or True — same slot).",
            "1. Insert True. 2. Insert 1 — collision.",
            "Surprising dict length for beginners.",
            "Use str keys when mixing bool-like and int-like tokens.",
            "1.0 also equals 1 — triple collision possible.",
            "O(1) inserts.",
            "len({True:1, 1:2}) == 1",
            "Prefer Enum or str keys in public schemas.",
        )
    )
    tails.append(
        tail_block(
            "Keys 0 and False collide like 1/True — one entry remains.",
            "hash and equality alignment for dict keys.",
            "1. Build dict. 2. Observe single slot.",
            "Configuration merging bugs.",
            "Similar caution for 0.0.",
            "Constant.",
            "{0:'a', False:'b'} -> one key",
            "Explicit string keys for human-readable maps.",
        )
    )
    tails.append(
        tail_block(
            "[True,1,1.0].count(True) uses == — three values equal True, so count is 3.",
            "count is equality-based, not identity-based.",
            "1. Compare each element to True.",
            "Surprising when mixing numeric forms.",
            "NaN would not compare equal to itself — different behavior.",
            "O(n) scan.",
            "sum(1 for x in lst if x is True) for identity-specific counting.",
            "Document what 'sameness' means in analytics.",
        )
    )
    tails.append(
        tail_block(
            "Set {True,1,1.0} collapses to one element — equality merges members.",
            "Set requires consistent hash/equality.",
            "1. Insert True; 1 and 1.0 deduplicate.",
            "Unique collections with numeric/bool confusion.",
            "len is 1.",
            "O(n) inserts average.",
            "Use homogeneous element types in sets when teaching.",
            "frozenset for dict keys with similar caution.",
        )
    )
    tails.append(
        tail_block(
            "sorted([None, 1]) raises TypeError in Python 3 — None and int are not orderable.",
            "sorting requires total ordering compatible with < between elements.",
            "1. sort tries less-than. 2. TypeError.",
            "Use key= mapping None to a sentinel tuple.",
            "Migration from Python 2 ordering differences.",
            "N/A — error path.",
            "sorted(items, key=lambda x: (x is None, x))",
            "numpy sorts may coerce — different ecosystem.",
        )
    )
    tails.append(
        tail_block(
            "None < 0 raises TypeError — no natural ordering between NoneType and int.",
            "Rich comparisons return NotImplemented or error across these types.",
            "1. Attempt comparison. 2. Error.",
            "Never order None against numbers.",
            "Use explicit is None checks.",
            "functools.cmp_to_key is legacy style.",
            "Fails immediately.",
            "SQL NULL semantics differ — ORMs map carefully.",
            "Optional[int] typing reflects possibility of None.",
        )
    )
    tails.append(
        tail_block(
            "None == 0 is False — None equals only None.",
            "No coercion of None to numeric zero under ==.",
            "1. Equality fails.",
            "Default handling with explicit None tests.",
            "None == False is also False.",
            "Trivial.",
            "if x is None:",
            "Database NULL is tri-state — do not mirror Python None blindly.",
        )
    )
    tails.append(
        tail_block(
            "x or [1,2] with x=[] chooses the right side because empty list is falsy.",
            "or returns first truthy or last operand if all falsy.",
            "1. [] falsy. 2. Evaluate [1,2].",
            "Defaulting mutable list — copy if you must avoid shared mutation.",
            "If x were truthy, same object returned — identity preserved.",
            "O(1) selection.",
            "y = x if x else [1,2] reads clearly.",
            "Do not use [] as default arg — use None pattern.",
        )
    )
    tails.append(
        tail_block(
            "x=[3] is truthy; x or [1,2] returns x without building default.",
            "Short-circuit stops at first truthy.",
            "1. x truthy. 2. Return x.",
            "Optional parameters with user-supplied nonempty list.",
            "Mutating result mutates original — same object.",
            "Identity return.",
            "if x is None: x = default — different from empty list semantics.",
            "Clarify whether empty list should trigger default.",
        )
    )
    tails.append(
        tail_block(
            "Chained a == b == c with all zeros: each pairwise equality holds — True.",
            "Equivalent to (a==b) and (b==c) with b evaluated once in chaining.",
            "1. 0==0 and 0==0.",
            "Asserting three tied variables.",
            "NaN breaks transitivity — not with ints.",
            "Two == operations.",
            "a==b==c is clearer than nested and for readers.",
            "Use math.isclose for floats.",
        )
    )
    tails.append(
        tail_block(
            "1 != 2 != 1 parses as (1!=2) and (2!=1) — both true — overall True.",
            "Chained inequality is not the same as comparing all three pairwise in one hop.",
            "1. First pair true. 2. Second pair true.",
            "Puzzle illustrating chained comparisons.",
            "1!=2!=2 would fail second segment.",
            "Two comparisons.",
            "Draw small truth tables for teaching.",
            "Read language reference on chained comparisons.",
        )
    )
    tails.append(
        tail_block(
            "Dict comprehension keeps odd i with i%2 truthy: {1:1, 3:9} from range(5).",
            "if i%2 filters evens — zero is falsy.",
            "1. Loop i. 2. Filter odds. 3. Square values.",
            "Combining filter with mapping in one comprehension.",
            "Could write i%2==1 explicitly.",
            "O(n).",
            "{i:i**2 for i in range(5) if i%2==1}",
            "Walrus can name parity once in larger expressions.",
        )
    )
    tails.append(
        tail_block(
            "all(map(str.isdigit, '12345')) — every char is digit — True.",
            "all consumes the iterator from map; short-circuits on first False.",
            "1. Each char isdigit. 2. True.",
            "Validating numeric strings before int().",
            "Empty string: all([]) vacuously True — watch separately.",
            "O(n) length.",
            "s.isdigit() on whole string may differ for signs/+.",
            "regex ^\\d+$ for whole-string match.",
        )
    )
    tails.append(
        tail_block(
            "any(map(str.isdigit, 'abc1')) finds a digit — True.",
            "any stops at first True — lazy evaluation from map.",
            "1. Scan until '1'.",
            "Password has-digit checks.",
            "any([]) is False.",
            "Short-circuit may skip tail of string.",
            "any(c.isdigit() for c in s) equivalent.",
            "Use regex for category rules beyond one digit.",
        )
    )
    tails.append(
        tail_block(
            "all(map(str.isdigit, 'abc')) — no digits — False.",
            "First nondigit short-circuits all.",
            "1. 'a' fails isdigit.",
            "Rejecting non-numeric codes.",
            "Vacuous all on empty iterable is True — edge case.",
            "O(n) until failure.",
            "isalnum vs isdigit distinction.",
            "Unicode digits may need normalization.",
        )
    )
    tails.append(
        tail_block(
            "List comp [x if x>0 else -x for x in [-1,2,-3]] maps to absolute values [1,2,3].",
            "Conditional expression in output expression position.",
            "1. Bind each x. 2. Apply abs-like ternary.",
            "Prefer built-in abs(x) for clarity in real code.",
            "Nested conditionals reduce readability.",
            "O(n).",
            "[abs(x) for x in lst]",
            "Walrus if computing expensive transform once.",
        )
    )
    tails.append(
        tail_block(
            "next((x for x in [5,3,8,1] if x>6), None) returns 8 — first match.",
            "Generator expression finds first satisfying predicate; default None if none.",
            "1. Iterate. 2. Yield first >6.",
            "Search without building a list.",
            "If no match, next returns default — here 8 exists.",
            "Short-circuit scan.",
            "next(..., None) for optional earliest match.",
            "Explicit for-loop often clearer for debugging.",
        )
    )
    tails.append(
        tail_block(
            "No x>6 in [5,3,1] — generator exhausted; next returns default None.",
            "Short-circuit never finds a truthy predicate.",
            "1. Scan all. 2. Return default.",
            "Contrasts with finding a match.",
            "Distinguish None default from valid None data with care.",
            "O(n) full pass.",
            "for x in data: if x>6: return x; return None",
            "Use a sentinel other than None if None is valid data.",
        )
    )
    tails.append(
        tail_block(
            "all(isinstance(x,int) for x in [1,True,3]) is True — bool is subclass of int.",
            "isinstance(True, int) succeeds — separate bool if you need to exclude.",
            "1. Each element passes int check.",
            "Type-guarding heterogeneous lists.",
            "type(x) is int excludes bool — different test.",
            "O(n).",
            "Use Union types in typing when bool should be distinct.",
            "Protocol and ABC checks for duck typing.",
        )
    )
    tails.append(
        tail_block(
            "any(x is None for x in [1,None,3]) finds None — True.",
            "Generator uses identity check for sentinel.",
            "1. Second element matches.",
            "Optional row validation.",
            "x==None discouraged — any uses is.",
            "Short-circuit True.",
            "if any(v is None for v in row): error",
            "pandas isna for tabular None/NaN.",
        )
    )
    tails.append(
        tail_block(
            "sum(x>0 for x in [-1,2,-3,4]) counts positives — bools sum as 0/1 — result 2.",
            "Generator yields True/False; sum coerces to int addition.",
            "1. Count truths.",
            "Inline counting without list of flags.",
            "sum starts at 0.",
            "O(n).",
            "len([x for x in a if x>0]) materializes — more memory.",
            "numpy.count_nonzero for large arrays.",
        )
    )
    tails.append(
        tail_block(
            "max(range(10), key=lambda x: -(x-5)**2) selects x maximizing a concave quadratic — peak at 5.",
            "key= transforms items before comparison; max picks one argmax.",
            "1. Evaluate key for each candidate. 2. Take argmax.",
            "Ties: first maximal item wins in CPython max stability.",
            "Simple demo of key= without sorting entire range.",
            "O(n) over iterable.",
            "numpy.argmax for vectorized data.",
            "Prefer readable names for key functions in production.",
        )
    )
    assert len(tails) == 50, len(tails)
    return tails


def build_intermediate_a() -> list[str]:
    # abbreviated: 50 unique tails for any/all / ternary / truth drills
    tails: list[str] = []
    tails.append(
        tail_block(
            "any([True, False, False]) is True — disjunction short-circuits on first True.",
            "any is existential quantifier over iterable truthiness.",
            "1. First element True. 2. Return True.",
            "Linear scan worst case O(n).",
            "Feature flags: at least one enabled.",
            "any([]) is False.",
            "Short-circuit saves work.",
            "any(pred(x) for x in items)",
            "Combine with all for invariants.",
        )
    )
    tails.append(
        tail_block(
            "any([False, False, False]) is False — no truthy element.",
            "Full scan may occur.",
            "1. All falsy. 2. False.",
            "Detecting total absence of success signals.",
            "[0,0,0] any False — zeros falsy.",
            "O(n).",
            "any with generator avoids list materialization.",
            "map with any for vectorized checks.",
        )
    )
    tails.append(
        tail_block(
            "all([True, True, True]) is True — universal truth.",
            "all short-circuits on first falsy — none here.",
            "1. Every element truthy.",
            "Form validation: every field passes.",
            "all([]) vacuously True.",
            "O(n) worst case.",
            "all(not x for x in flags) pattern.",
            "numpy.all for arrays.",
        )
    )
    tails.append(
        tail_block(
            "all([True, False, True]) fails at middle False.",
            "Second element stops evaluation? all still may short-circuit after first False.",
            "1. True ok. 2. False stops with False.",
            "Permission checks: one deny fails all.",
            "0 in numeric list would fail all if testing positivity via truthiness.",
            "Early exit.",
            "all(map(pred, items))",
            "Use explicit loops when reporting which index failed.",
        )
    )
    tails.append(
        tail_block(
            "any([]) is False — empty disjunction has no witness.",
            "Vacuous any is false in Python convention.",
            "1. No items. 2. False.",
            "Default deny for empty evidence set.",
            "Contrast all([]) True.",
            "O(1).",
            "Guard if any(items): with explicit nonempty check if needed.",
            "Document API behavior on empty input.",
        )
    )
    tails.append(
        tail_block(
            "all([]) is True — no counterexample exists in empty domain.",
            "Universal quantification over empty set is true in logic and Python.",
            "1. No items. 2. True.",
            "Surprising paired with any([]) False — teach together.",
            "Default allow for AND over empty collections — mind business rules.",
            "O(1).",
            "Tests must cover empty input explicitly.",
            "Business may require nonempty lists — validate separately.",
        )
    )
    tails.append(
        tail_block(
            "any([0,0,0]) is False — numeric zeros are falsy.",
            "Truthiness, not numeric inequality to zero, drives any/all.",
            "1. Scan zeros. 2. No truthy.",
            "Scanning for nonzero activity in sparse vectors.",
            "0.0 also falsy.",
            "O(n).",
            "any(x != 0 for x in lst) if you need explicit inequality.",
            "numpy.any for ndarray.",
        )
    )
    tails.append(
        tail_block(
            "any([0,1,0]) is True — middle 1 is truthy.",
            "Short-circuit may stop at second element.",
            "1. First 0. 2. 1 True.",
            "Finding any hit in a small vector.",
            "Could use 1 in lst for literal membership — different intent.",
            "Stops early.",
            "next(x for x in lst if x) pattern related.",
            "any for custom predicates.",
        )
    )
    tails.append(
        tail_block(
            "all([1,2,3]) is True — all ints nonzero thus truthy.",
            "Only zero among ints is falsy.",
            "1. Each element truthy.",
            "Lightweight positivity check without explicit >0.",
            "Negative ints are truthy — not a sign test.",
            "O(n).",
            "all(x > 0 for x in lst) when strict positivity matters.",
            "None in list raises TypeError in comparisons — separate issue.",
        )
    )
    tails.append(
        tail_block(
            "all([1,0,3]) short-circuits at 0 — False.",
            "Zero falsy fails universal test.",
            "1. Pass 1. 2. Fail at 0.",
            "Inventory quantities — zero may mean out of stock.",
            "Early exit on first failure.",
            "all with explicit predicate preferred for clarity.",
            "Combine with enumerate to report index.",
        )
    )
    # 11-20
    tails.append(
        tail_block(
            "any(x>3 for x in [1,2,5]) — 5>3 — True.",
            "Generator lazy; any stops early at first True.",
            "1. x=1,2 fail. 2. x=5 succeeds.",
            "Threshold scanning on the fly.",
            "Order of x matters for which value short-circuits first.",
            "O(n) worst.",
            "next(x for x in xs if x>3, None)",
            "For huge streams, generators avoid materializing lists.",
        )
    )
    tails.append(
        tail_block(
            "all(x>0 for x in [1,2,3]) — True — strict positivity via comparisons.",
            "Generator tests each element explicitly.",
            "1. All comparisons true.",
            "Validating ranges for physics or finance positives.",
            "Non-int types may fail comparisons — homogeneous list assumed.",
            "O(n).",
            "all(x>0 for x in items if items)",
            "numpy: (arr>0).all()",
        )
    )
    tails.append(
        tail_block(
            "all(x>0 for x in [1,-2,3]) fails at -2.",
            "Short-circuit stops at first nonpositive.",
            "1. 1 ok. 2. -2 fails.",
            "Catching sign errors in vectors.",
            "Zero would also fail.",
            "Early exit.",
            "Report failing index with enumerate in real code.",
            "math.copysign for sign extraction instead of truth hacks.",
        )
    )
    tails.append(
        tail_block(
            "any(c.isupper() for c in 'Hello') — H uppercase — True.",
            "Character iteration with str methods.",
            "1. 'H' triggers True.",
            "Password rules: require an uppercase letter.",
            "Unicode categories beyond isupper exist for i18n.",
            "Short-circuit at H.",
            "regex [A-Z] alternative.",
            "Normalize unicode before policy checks.",
        )
    )
    tails.append(
        tail_block(
            "all(c.islower() for c in 'hello') — all lowercase letters — True.",
            "No uppercase in string.",
            "1. Each char passes.",
            "Slug / username lowercase enforcement.",
            "Spaces: ' '.islower() is False — would fail all.",
            "O(n).",
            "isalpha guard if non-letters must be excluded.",
            "casefold for case-insensitive equality.",
        )
    )
    tails.append(
        tail_block(
            "all(c.islower() for c in 'Hello') fails on H.",
            "Mixed case breaks all-lowercase requirement.",
            "1. First char fails.",
            "Usernames with accidental capitals.",
            "Title case breaks policy.",
            "Stops early.",
            "s.lower() before test if policy is display normalization.",
            "Turkish dotted capital I edge cases in unicode.",
        )
    )
    tails.append(
        tail_block(
            "any(isinstance(x,str) for x in [1,'a',3]) — str present — True.",
            "Heterogeneous rows — check for any string column.",
            "1. Second element matches str.",
            "Union-like tuples in legacy data.",
            "Short-circuit early.",
            "isinstance(x,(str,bytes))",
            "TypedDict for structured rows.",
        )
    )
    tails.append(
        tail_block(
            "all(isinstance(x,int) for x in [1,2,3]) — True.",
            "Uniform int list passes isinstance int.",
            "1. Each int.",
            "Type validation before numeric pipeline.",
            "bool is subclass of int — True would pass if present — exclude explicitly if needed.",
            "O(n).",
            "type(x) is int excludes bool.",
            "collections.abc.Integral for broader numeric acceptance.",
        )
    )
    tails.append(
        tail_block(
            "any([None,0,'',[],False]) is False — all standard falsy values.",
            "Demonstrates falsy set in one expression.",
            "1. Scan all. 2. No truthy.",
            "Teaching truthiness table.",
            "Last False is falsy too.",
            "Full scan.",
            "any(map(bool, lst)) would coerce — different.",
            "Explicit None vs empty distinction elsewhere.",
        )
    )
    tails.append(
        tail_block(
            "all([1,'hello',[1],True]) — heterogeneous truthy — True.",
            "Nonempty str and list; nonzero int; True bool.",
            "1. Each truthy.",
            "Smoke that collection has no empty containers or zero ints.",
            "0 would fail.",
            "O(n).",
            "all(x for x in lst) vs all(lst) same if no custom logic.",
            "Watch short-circuit on empty subcontainers if testing elements.",
        )
    )
    tails.append(
        tail_block(
            "Nested ternary: x=15 selects 'big' on x>10 first.",
            "Right-associative nested else-if expression.",
            "1. >10 true. 2. 'big'.",
            "Score bucketization.",
            "Readability vs elif chain tradeoff.",
            "One evaluation path.",
            "('big' if x>10 else 'mid' if x>5 else 'small')",
            "PEP 8 line wrapping for long ternaries.",
        )
    )
    tails.append(
        tail_block(
            "x=7: not >10, then inner ternary: >5 -> 'mid'.",
            "Nested thresholds for medium bucket.",
            "1. Outer false. 2. Inner true.",
            "Three-tier labels.",
            "Boundary tests at 5 and 10.",
            "Trivial path.",
            "elif readability often wins in teams.",
            "Unit-test boundaries inclusive/exclusive.",
        )
    )
    tails.append(
        tail_block(
            "x=3: falls through to 'small' — neither >10 nor >5.",
            "Inner ternary final branch.",
            "1. Both comparisons false for 'big'/'mid'.",
            "Low bucket classification.",
            "Equality at 5 goes to small because x>5 is strict.",
            "Trivial.",
            "bisect or dict lookup for many thresholds.",
            "Document inclusive/exclusive rules in specs.",
        )
    )
    tails.append(
        tail_block(
            "Guard clause returns early on invalid input — design pattern, not a keyword.",
            "Reduces nesting and highlights preconditions.",
            "1. Test precondition. 2. Return or raise if fail.",
            "API validation helpers.",
            "Overuse can duplicate cleanup — balance with context managers.",
            "O(1) checks typically.",
            "if not valid: raise ValueError",
            "Assertions only for internal invariants, not user input.",
        )
    )
    tails.append(
        tail_block(
            "x=5,y=10: both >0 -> 'both' — logical and of predicates.",
            "Python and short-circuits: if x>0 is false, y>0 not evaluated.",
            "1. x>0 true. 2. y>0 true.",
            "Pairwise validation of independent conditions.",
            "Side effects: put cheaper checks first if needed.",
            "O(1).",
            "min(x,y)>0 alternative for same sign positivity? Not equivalent generally.",
            "De Morgan: not (A and B) == (not A) or (not B).",
        )
    )
    tails.append(
        tail_block(
            "x=-1,y=10: x>0 false — and short-circuits; result 'not both' without needing y>0.",
            "False and ... does not evaluate RHS in Python boolean and.",
            "1. x>0 false. 2. Short-circuit.",
            "Relies on short-circuit for safety and performance.",
            "If x>0 true, y>0 evaluated.",
            "Boolean and semantics.",
            "Explicit tests give clearer error messages per variable.",
            "Document short-circuit in code reviews.",
        )
    )
    tails.append(
        tail_block(
            "x=0: nested ternary for sign — not >0, not <0 -> 'zero'.",
            "Three-way classification of integers.",
            "1. Sign test ladder.",
            "Center bucket for exactly zero.",
            "NaN not in int domain here.",
            "O(1).",
            "math.copysign(1,x) for sign bit.",
            "elif chain often clearer.",
        )
    )
    tails.append(
        tail_block(
            "x is None -> 'default' branch of x if x is not None else 'default'.",
            "Conditional expression for None-coalescing without treating 0 as missing.",
            "1. None test. 2. Pick alternative.",
            "Optional[str] style handling.",
            "Contrast with or-default which treats 0 as falsy.",
            "O(1).",
            "value if value is not None else default",
            "typing.Optional patterns.",
        )
    )
    tails.append(
        tail_block(
            "x=42: not None -> left branch returns 42.",
            "Identity check passes; value preserved.",
            "1. is not None true.",
            "Preserves legitimate zero unlike or-default.",
            "0 would also pass is not None — good for numeric optionals.",
            "Trivial.",
            "PEP 8 recommends is not None.",
            "SQLAlchemy distinguishes unloaded vs None — ORM nuance.",
        )
    )
    tails.append(
        tail_block(
            "List comp with two if filters: multiples of 2 and 3 -> multiples of 6: [0,6] in range(10).",
            "Multiple if clauses chain as AND.",
            "1. i%2==0. 2. i%3==0.",
            "Equivalent to i%6==0 for integers.",
            "O(n).",
            "[i for i in range(10) if i%6==0]",
            "Keep comprehension readable — sometimes explicit loop wins.",
        )
    )
    tails.append(
        tail_block(
            "bool([False]) True — nonempty list despite falsy element.",
            "Container truthiness from length only.",
            "1. len 1.",
            "Contrast all([False]) which is False.",
            "Teaching list vs element truthiness.",
            "[[False]] still True.",
            "O(1).",
            "if lst and all(lst): — different tests.",
            "Use any/not any on elements when needed.",
        )
    )
    tails.append(
        tail_block(
            "bool('False') True — nonempty string.",
            "Lexical 'False' is not bool False.",
            "Parsing needed for real booleans.",
            "Config pitfalls.",
            "json.loads.",
            "Trivial.",
            "strtobool utilities.",
            "Validate enumerations explicitly.",
        )
    )
    tails.append(
        tail_block(
            "bool(' ') True — space character string nonempty.",
            "Whitespace still has length.",
            "Strip before meaningful emptiness checks.",
            "Form fields with accidental spaces.",
            "isspace() differs from empty.",
            "Trivial.",
            "if s.strip():",
            "Usernames may disallow whitespace-only.",
        )
    )
    tails.append(
        tail_block(
            "bool(0.0) False — float zero falsy.",
            "Same rule as int zero.",
            "Residual calculations near zero.",
            "NaN is True — different edge.",
            "Trivial.",
            "math.isclose for residuals.",
            "Decimal(0) also falsy.",
        )
    )
    tails.append(
        tail_block(
            "bool(0j) False — complex zero has zero magnitude.",
            "Complex __bool__ uses magnitude == 0 test.",
            "1+0j truthy.",
            "Signal processing teaching examples.",
            "cmath phase of 0j defined.",
            "Trivial.",
            "abs(z)==0 equivalent test.",
            "numpy complex may differ slightly — ecosystem note.",
        )
    )
    tails.append(
        tail_block(
            "None or 'default' -> 'default' — None falsy.",
            "or picks first truthy.",
            "1. None fails. 2. Pick string.",
            "Defaulting values — watch 0 validity.",
            "O(1).",
            "x if x is not None else v — None-specific.",
            "API docs should state falsy vs None semantics.",
        )
    )
    tails.append(
        tail_block(
            "'value' or 'default' -> 'value' — left operand truthy.",
            "Short-circuit stops.",
            "1. Nonempty str.",
            "Default only when left missing/empty.",
            "Trivial.",
            "or chains for priority-ordered defaults.",
            "Keyword-argument defaults differ pattern.",
        )
    )
    tails.append(
        tail_block(
            "'' or 'fallback' -> 'fallback' — empty str falsy.",
            "Common pattern for display names.",
            "Whitespace ' ' would be truthy — different.",
            "User profile optional fields.",
            "O(1).",
            "name or 'anonymous'",
            "i18n: distinguish missing key vs empty translation.",
        )
    )
    tails.append(
        tail_block(
            "0 or None or '' or 'found' evaluates left-associative chain of or — first truthy is 'found'.",
            "All prior operands falsy.",
            "1. Scan until truthy.",
            "Fallback priority lists.",
            "Valid zero may be wrongly skipped — use explicit None checks.",
            "Stops at truthy.",
            "Explicit if/elif for money and counters.",
            "Document intentional falsy handling.",
        )
    )
    tails.append(
        tail_block(
            "1 and 2 and 3 returns last operand 3 — all truthy.",
            "and returns first falsy or last truthy.",
            "1. Chain truthy. 2. Result 3.",
            "Numeric and-chains are obscure style — prefer explicit logic.",
            "Stops at first falsy if any.",
            "O(1) tiny chain.",
            "all([1,2,3]) is True but different meaning.",
            "Avoid clever and-chains in production.",
        )
    )
    tails.append(
        tail_block(
            "1 and 0 and 3 -> 0 — first falsy wins.",
            "Short-circuit skips 3.",
            "1. 1 ok. 2. 0 falsy.",
            "Validation chains.",
            "0 returned, not False.",
            "Trivial.",
            "all(...) for boolean intent.",
            "Explicit if clearer.",
        )
    )
    tails.append(
        tail_block(
            "'' or [] or {} or 'yes' — first three falsy; 'yes' truthy.",
            "or chain across container types.",
            "1. Try each. 2. Last truthy.",
            "Default selection among many empty sentinels.",
            "Order encodes priority.",
            "Stops early at truthy.",
            "Valid empty dict may be wrongly replaced — explicit None pattern.",
            "config.get with defaults.",
        )
    )
    tails.append(
        tail_block(
            "[] and 'hello' -> [] — empty list falsy; and short-circuits.",
            "Returns first falsy operand.",
            "1. [].",
            "Guards before processing.",
            "Second operand not evaluated.",
            "Short-circuit protects expensive calls.",
            "if lst and process(lst):",
            "Similar to expert patterns.",
        )
    )
    tails.append(
        tail_block(
            "[1] and 'hello' -> 'hello' — both truthy; and returns last evaluated operand here.",
            "Two-operand and between truthy values yields last.",
            "1. [1] truthy. 2. 'hello' truthy.",
            "Obscure idiom — prefer tuple or small struct.",
            "O(1).",
            "optional_fn and optional_fn() pattern for callbacks.",
            "Readability over cleverness.",
        )
    )
    tails.append(
        tail_block(
            "not 0 is True — not inverts bool(0) which is False.",
            "Unary not on ints uses truthiness.",
            "1. 0 falsy. 2. not True.",
            "Guarding zero vs nonzero.",
            "not [] True.",
            "Trivial.",
            "if not n:",
            "Explicit n==0 when False and 0 both possible.",
        )
    )
    tails.append(
        tail_block(
            "not '' is True — empty string falsy.",
            "Common if not s: pattern.",
            "Whitespace caveat.",
            "1. '' falsy. 2. not True.",
            "Form validation.",
            "not 'hello' False.",
            "Trivial.",
            "if not name.strip():",
            "len(s)==0 explicit alternative.",
        )
    )
    tails.append(
        tail_block(
            "not 'hello' is False — nonempty string truthy.",
            "1. bool True. 2. not False.",
            "Presence tests.",
            "Trivial.",
            "if message:",
            "Double negatives harm readability.",
        )
    )
    tails.append(
        tail_block(
            "not [] is True — empty list falsy.",
            "Container emptiness.",
            "1. bool False. 2. not True.",
            "if not items:",
            "Nonempty [0] truthy.",
            "Trivial.",
            "if not data: return",
            "len(items)==0 explicit.",
        )
    )
    tails.append(
        tail_block(
            "not not True is True — double negation yields original truth for proper booleans.",
            "1. not True False. 2. not False True.",
            "Prefer bool(x) over not not x in real code.",
            "Educational only.",
            "Trivial.",
            "bool() constructor clarity.",
            "PEP 8 readability.",
        )
    )
    tails.append(
        tail_block(
            "not not [] is False — [] falsy; not True; not False.",
            "Double negation maps truthiness to bool-like True/False values.",
            "1. [] falsy. 2. not True. 3. not False.",
            "Confusing — use bool([]) directly.",
            "Pedagogical contrast with not not True.",
            "Trivial.",
            "Explicit tests beat double negation.",
            "Keep control flow readable.",
        )
    )
    assert len(tails) == 50, len(tails)
    return tails


def build_intermediate_b() -> list[str]:
    tails: list[str] = []
    tails.append(
        tail_block(
            "and binds tighter than or: True or False and False -> True or (False and False) -> True.",
            "Mixing without parentheses invites bugs — parenthesize.",
            "PEP reference operator precedence table.",
            "1. Evaluate inner and. 2. Evaluate or.",
            "De Morgan and distributive laws help refactor.",
            "Boolean configs in feature flags.",
            "not binds tighter than and/or — another pitfall.",
            "Trivial.",
            "(True or False) and False -> False",
            "Add parentheses whenever reviewers misread.",
        )
    )
    tails.append(
        tail_block(
            "(True or False) and False -> True and False -> False.",
            "Parentheses force or before and.",
            "1. Inner or True. 2. and False.",
            "Contrasts with unparenthesized version.",
            "Explicit grouping in policies.",
            "Trivial.",
            "Always parenthesize mixed and/or.",
            "Truth tables for verification.",
        )
    )
    tails.append(
        tail_block(
            "not True or True -> (not True) or True -> False or True -> True.",
            "not binds before or.",
            "1. not False? not True is False. 2. or True.",
            "Precedence demonstration.",
            "Add parentheses when intending not (True or True).",
            "Trivial.",
            "not True or False -> False",
            "Style guides suggest spacing and parens.",
        )
    )
    tails.append(
        tail_block(
            "not (True or True) -> not True -> False.",
            "Parentheses after not.",
            "1. Inner True. 2. Negate.",
            "De Morgan: not (A or B).",
            "Trivial.",
            "not A and not B equivalent under De Morgan.",
            "Truth tables.",
        )
    )
    tails.append(
        tail_block(
            "True and not False -> True and True -> True.",
            "not applies to False first.",
            "1. not False True. 2. and True.",
            "Common guard pattern A and not B.",
            "Trivial.",
            "Optional parens: True and (not False).",
            "Readability in compound guards.",
        )
    )
    tails.append(
        tail_block(
            "False or not False and True -> False or (True and True) -> True — and before or.",
            "not False is True; and combines; or combines.",
            "1. Parse precedence. 2. Evaluate.",
            "Complex — split into variables in real code.",
            "Refactor for clarity.",
            "Trivial.",
            "Multiple lines with named booleans.",
            "Unit-test each subexpression.",
        )
    )
    tails.append(
        tail_block(
            "1<2 and 3<4 -> True — two comparisons and-ed.",
            "Not a chained four-term comparison — two separate bools.",
            "1. Both true.",
            "Range-like checks split.",
            "Could be written 1<2<3<4 chained instead — different syntax.",
            "Trivial.",
            "Chained form often clearer for intervals.",
            "Mind short-circuit: and stops at first false.",
        )
    )
    tails.append(
        tail_block(
            "1<2 or 3>4 -> True or False -> True.",
            "Left comparison already true; or short-circuits.",
            "1. 1<2 True.",
            "Either-side checks.",
            "Right side may be skipped.",
            "Trivial.",
            "Side effects: put cheaper or safer checks first.",
            "Logically related inequalities may deserve named variables.",
        )
    )
    tails.append(
        tail_block(
            "not 1<2 parses as not (1<2) because not is lower precedence than comparisons — result False.",
            "If it were (not 1)<2 that would be 0<2 True — different parse.",
            "Python 3 grammar: not a < b is not (a < b) when not applies to comparison.",
            "1. 1<2 True. 2. not False.",
            "Verify in REPL when unsure.",
            "Trivial.",
            "Parenthesize comparisons after not explicitly if needed.",
            "Do not guess precedence — check docs.",
        )
    )
    tails.append(
        tail_block(
            "1<2<3<4 chained -> True — pairwise 1<2, 2<3, 3<4.",
            "Middle operands evaluated once.",
            "Interval inclusion in ordered numbers.",
            "NaN breaks chains — not here.",
            "O(1).",
            "a <= x <= b inclusive bounds.",
            "Floats: use isclose at endpoints.",
        )
    )
    tails.append(
        tail_block(
            "1<2>0 chained -> 1<2 and 2>0 — both true.",
            "Peak-style local check — not global monotonicity.",
            "1. Segments hold.",
            "Inequalities for small puzzles.",
            "1<2>3 would fail second segment.",
            "O(1).",
            "Chained comparisons are pairwise, not transitive inference.",
            "Explain with number line sketches.",
        )
    )
    tails.append(
        tail_block(
            "1<2>3 -> False — 2>3 fails.",
            "Second segment fails entire chain.",
            "1. First true. 2. Second false.",
            "Illustrates local failure.",
            "Trivial.",
            "Draw 1,2,3 on line.",
            "Chained ops still pairwise.",
        )
    )
    tails.append(
        tail_block(
            "'a'<'b'<'c' lexicographic ordering holds for ASCII letters.",
            "String comparison uses Unicode code points.",
            "1. Three pairwise str compares.",
            "Sorting keys and tokens.",
            "Locale collation differs — not this simple rule globally.",
            "O(1) for short literals.",
            "ord() reveals code points.",
            "Use locale-aware sort for user-visible strings.",
        )
    )
    tails.append(
        tail_block(
            "0<1>-1 -> 0<1 and 1>-1 — both true.",
            "Signed numbers in chain.",
            "1. Two segments.",
            "Inequality puzzles mixing negatives.",
            "Trivial.",
            "Chained comparisons with negatives on number line.",
            "Explain carefully in teaching.",
        )
    )
    tails.append(
        tail_block(
            "1==1<2 -> 1==1 and 1<2 — both true.",
            "Mixing == and < in one chain is legal.",
            "1. Equality segment. 2. order segment.",
            "Useful for x==y<z style constraints.",
            "Trivial.",
            "Read PEP for edge cases mixing operators.",
            "Prefer named subexpressions if confusing.",
        )
    )
    tails.append(
        tail_block(
            "1<=x<=10 with x=5 — inclusive range check True.",
            "Chained comparisons for interval membership.",
            "1. Lower bound. 2. Upper bound.",
            "Validate user numeric input windows.",
            "x=15 fails upper segment.",
            "O(1).",
            "min(max(x,lo),hi) clamp alternative.",
            "Floats: isclose at edges.",
        )
    )
    tails.append(
        tail_block(
            "x=15 fails 15<=10 — chained comparison false.",
            "Second segment fails.",
            "Out-of-range high.",
            "User-friendly error messages should mention bounds.",
            "Trivial.",
            "Clamp instead of reject when appropriate.",
            "Separate checks for clearer errors.",
        )
    )
    tails.append(
        tail_block(
            "x='hello': x and len(x)>3 — x truthy, len>3 true — expression True.",
            "and returns last evaluated operand if all truthy? Actually bool of (len(x)>3) — True.",
            "1. x truthy. 2. evaluate len>3 True.",
            "Guard processing long strings.",
            "Empty x short-circuits to '' without evaluating len — safe.",
            "Short-circuit protects len on empty? Actually len('') is 0 — safe anyway.",
            "if s and len(s)>3:",
            "Mixing return types str vs bool — mind API consistency.",
        )
    )
    tails.append(
        tail_block(
            "x='' -> '' and len(x)>3 short-circuits to '' — falsy left.",
            "Second operand not evaluated in boolean and.",
            "1. '' falsy.",
            "Avoid processing empty strings.",
            "Return type may be str not bool — pattern sometimes abused.",
            "Trivial.",
            "if not x: handle empty",
            "Prefer explicit booleans in APIs.",
        )
    )
    tails.append(
        tail_block(
            "x=None: x and x.strip() — None falsy; short-circuit avoids AttributeError on strip.",
            "Safe optional chaining style without ?. operator.",
            "1. None falsy.",
            "Protect methods on possibly-None values.",
            "'' would evaluate strip — still safe.",
            "Short-circuit pattern.",
            "Optional chaining PEP discussions — still use explicit if None in strict code.",
            "if x is not None: x.strip() clearer.",
        )
    )
    tails.append(
        tail_block(
            "d.get('b') missing -> None; None or 'missing' -> 'missing'.",
            "get avoids KeyError.",
            "1. None falsy. 2. default str.",
            "Defaulting dict lookups.",
            "or skips valid 0 — use None test if zero is legitimate.",
            "O(1).",
            "d.get(k, default) for missing-key default only.",
            "defaultdict alternative.",
        )
    )
    tails.append(
        tail_block(
            "d.get('a') returns 1; 1 or 'missing' -> 1 — truthy left stops.",
            "Preserves numeric one.",
            "1. get succeeds.",
            "Contrast with 0 case.",
            "Trivial.",
            "if (v:=d.get(k)) is not None:",
            "Explicit branching for 0 vs missing.",
        )
    )
    tails.append(
        tail_block(
            "d.get('a') is 0; 0 or 'missing' -> 'missing' — zero falsy triggers default.",
            "Classic foot-gun: valid zero treated as missing by or.",
            "1. 0 falsy.",
            "Counters where zero is valid.",
            "Use is None checks when 0 is meaningful.",
            "Trivial.",
            "v if v is not None else default — None-specific.",
            "Document API: falsy vs missing.",
        )
    )
    tails.append(
        tail_block(
            "d.get('a', 'missing') returns 0 when key exists — default only for missing keys.",
            "No or involved — value preserved even if falsy.",
            "1. Key present. 2. Return 0.",
            "Correct pattern for allowing zero.",
            "Contrast with .get('a') or 'missing'.",
            "O(1).",
            "Read dict.get documentation carefully.",
            "collections.ChainMap patterns differ.",
        )
    )
    tails.append(
        tail_block(
            "any(c.isdigit() for c in 'abc123') True — digit exists.",
            "Generator short-circuits at digit.",
            "1. Scan until digit.",
            "Password complexity checks.",
            "Trivial.",
            "regex search alternative.",
            "Unicode digit categories.",
        )
    )
    tails.append(
        tail_block(
            "all(c.isalpha() for c in 'abcdef') True — letters only.",
            "Fails if digits or spaces present.",
            "1. Each char isalpha.",
            "Username alphabetic policy.",
            "Non-ASCII letters may count as alpha — unicode aware.",
            "O(n).",
            "isalnum allows digits — different test.",
            "Normalize unicode for locale policies.",
        )
    )
    tails.append(
        tail_block(
            "all(c.isalpha() for c in 'abc123') False — digit breaks.",
            "Short-circuit at first bad char.",
            "Mixed alphanumeric fails alpha-only.",
            "Trivial.",
            "isdigit on any char alternative test.",
            "regex ^[A-Za-z]+$ with ASCII flag.",
        )
    )
    tails.append(
        tail_block(
            "sum(1 for x in [1,2,3,4,5] if x>3) counts 4 and 5 -> 2.",
            "Generator sum of ones.",
            "1. Predicate selects. 2. Sum.",
            "Counting without list materialization.",
            "len([...]) alternative uses more memory.",
            "O(n).",
            "sum(x>0 for x in a) bool sum pattern.",
            "NumPy count_nonzero.",
        )
    )
    tails.append(
        tail_block(
            "[x for x in [1,2,3,4,5] if x>3] -> [4,5].",
            "List comprehension collects matches.",
            "1. Filter. 2. Collect.",
            "Same predicate as counting example.",
            "O(n) output.",
            "filter(lambda x:x>3, lst) equivalent.",
            "Generator for memory efficiency on large inputs.",
        )
    )
    tails.append(
        tail_block(
            "any(word.startswith('py') for word in ['python','java','php']) True — python.",
            "Case-sensitive prefix — 'Python' would fail unless cased correctly.",
            "1. First word matches prefix.",
            "Feature detection of stack names.",
            "Trivial.",
            "word.lower().startswith('py') for case-insensitive.",
            "tuple of prefixes in startswith.",
        )
    )
    tails.append(
        tail_block(
            "all(len(w)>2 for w in ['hi','hello','hey']) False — 'hi' length 2 not >2.",
            "Short-circuit at hi.",
            "Password minimum length policies.",
            "Edge exactly threshold.",
            "O(n).",
            "all(len(w)>=3 for ...) inclusive threshold.",
            "Report which word failed with enumerate.",
        )
    )
    tails.append(
        tail_block(
            "max([1,2,3,4,5], key=lambda x: x%3) maximizes remainder mod 3 — candidates 1,2,0,1,2 -> max remainder 2 first at value 2.",
            "CPython max returns first item among ties of key.",
            "1. Map key. 2. Argmax.",
            "Custom scoring without sorting full list.",
            "O(n) single pass.",
            "max with key documented tie behavior.",
            "numpy.argmax for vectors.",
        )
    )
    tails.append(
        tail_block(
            "min([1,2,3,4,5], key=lambda x: -x) emulates max by negating.",
            "1. Keys -1..-5. 2. min key -5 corresponds to x=5.",
            "Idiomatic argmax via min(-x).",
            "Tie behavior as min.",
            "O(n).",
            "max(iterable) simpler for plain numeric max.",
            "key abs for magnitude sometimes.",
        )
    )
    tails.append(
        tail_block(
            "sorted([True, False, True, False]) orders False before True — bool orders like 0 before 1.",
            "bool subclass int ordering.",
            "Stable sort preserves relative order of equal keys? Timsort stable.",
            "Predictable booleans in sorts.",
            "O(n log n).",
            "sorted(flags, key=int) same order.",
            "Don't rely on bool sort in APIs — be explicit.",
        )
    )
    tails.append(
        tail_block(
            "[False, True] < [True, False] lexicographic — compare first elements: False < True -> True.",
            "List comparison elementwise then length.",
            "1. First pair decides.",
            "Tuple comparison analogous.",
            "If first equal, compare next.",
            "O(k).",
            "Avoid comparing heterogeneous-type lists accidentally.",
            "Document ordering for UI sort keys.",
        )
    )
    tails.append(
        tail_block(
            "lambda x: 'even' if x%2==0 else 'odd' applied to 4 -> 'even'.",
            "Conditional expression inside lambda body.",
            "1. 4%2==0 true.",
            "Tiny dispatch functions.",
            "lambda single-expression limitation.",
            "Trivial.",
            "def with name clearer for debugging.",
            "assigning lambda to name discouraged by PEP8 but common in pandas.",
        )
    )
    tails.append(
        tail_block(
            "Same lambda applied to 7 -> 'odd'.",
            "7%2==1.",
            "Else branch.",
            "Trivial.",
            "Test boundary 0 for even.",
            "lambda debugging harder than def.",
        )
    )
    tails.append(
        tail_block(
            "Nested ternary right-associative: x=5 -> not >10, inner 'b' if x>3 else 'c' -> 'b'.",
            "1. Outer false to big. 2. Inner true to mid.",
            "Multi-label selection.",
            "Readability vs elif.",
            "Trivial.",
            "Add parentheses and line breaks.",
            "dict or bisect for many labels.",
        )
    )
    tails.append(
        tail_block(
            "x=1 -> inner ternary yields 'c' — not >3.",
            "Lowest bucket.",
            "1. x>3 false.",
            "Boundary 3 exclusive.",
            "Trivial.",
            "Test x=3 exactly.",
            "elif chain for teaching.",
        )
    )
    tails.append(
        tail_block(
            "[i for i in range(10) if i%2==0 and i%3==0] == multiples of 6 -> [0,6].",
            "Double filter AND in comprehension.",
            "1. i%2==0. 2. i%3==0.",
            "Equivalent lcm filter.",
            "O(n).",
            "i%6==0 single test alternative.",
            "Keep readable — sometimes split conditions.",
        )
    )
    tails.append(
        tail_block(
            "len([x for x in range(100) if x%7==0]) counts multiples of 7 in 0..99 — 15 values.",
            "Floor division count: 99//7 +1 for zero? Multiples 0,7,...,98 -> 15.",
            "1. List comp. 2. len.",
            "Count via materialized list — memory heavier than sum(1 for ...).",
            "O(n) time.",
            "100//7 + 1 = 15? 98/7=14, plus 0 ->15. OK.",
            "Use arithmetic count formula when possible.",
        )
    )
    tails.append(
        tail_block(
            "next(x for x in [1,2,3,4,5] if x>3) returns 4 — first match.",
            "Generator expression consumed by next without default — StopIteration if none.",
            "1. Skip 1,2,3. 2. Yield 4.",
            "Search earliest exceeding threshold.",
            "Use next(..., default) for safety.",
            "Short-circuit.",
            "for-loop explicit for debugging.",
        )
    )
    tails.append(
        tail_block(
            "bool(float('nan')) True — non-zero float object — reinforces expert_b lesson.",
            "Cross-file duplicate concept intentional.",
            "math.isnan for real checks.",
            "Trivial.",
            "Pedagogy: link levels.",
            "pandas isna.",
        )
    )
    tails.append(
        tail_block(
            "bool(float('inf')) True — reinforces infinity truthiness.",
            "Same theme as expert_b.",
            "math.isinf.",
            "Trivial.",
            "Consistent curriculum.",
        )
    )
    tails.append(
        tail_block(
            "True==1 True — bool/int equality.",
            "PEP 285 subclassing.",
            "Hash collision in dict keys.",
            "Trivial.",
            "Identity vs equality separate topic.",
        )
    )
    tails.append(
        tail_block(
            "False==0 True — reinforces bool/int zero equality.",
            "Dict key collisions with 0 and False.",
            "Trivial.",
            "Explicit key types.",
        )
    )
    tails.append(
        tail_block(
            "True+1 -> 2 — True promotes to 1.",
            "Arithmetic on bool.",
            "Avoid style-wise except teaching.",
            "Trivial.",
            "int(True)+1",
        )
    )
    tails.append(
        tail_block(
            "False+0 -> 0 — 0+0.",
            "Falsy sum.",
            "Trivial.",
            "sum(bool_list) counting pattern.",
        )
    )
    tails.append(
        tail_block(
            "{True:'a',1:'b',1.0:'c'} single key after collisions — last wins 'c'.",
            "True, 1, 1.0 equal as keys.",
            "len 1.",
            "Key typing discipline.",
            "Trivial.",
            "str keys for JSON-like maps.",
        )
    )
    tails.append(
        tail_block(
            "[False,0,0.0].count(0) == 3 — each element == 0 including False.",
            "Equality-based count, not identity.",
            "1. Three ==0 comparisons true.",
            "Surprising for new learners.",
            "NaN would not match 0.",
            "O(n).",
            "sum(x is 0 for x in lst) for strict int zero only.",
            "Document analytics definitions.",
        )
    )
    assert len(tails) == 50, len(tails)
    return tails


def main() -> None:
    write_script("fix_level3_expert_b_generic_blocks.py", "level3_expert_b.ts", "level3_expert_b.ts", build_expert_b())
    write_script(
        "fix_level3_intermediate_a_generic_blocks.py",
        "level3_intermediate_a.ts",
        "level3_intermediate_a.ts",
        build_intermediate_a(),
    )
    write_script(
        "fix_level3_intermediate_b_generic_blocks.py",
        "level3_intermediate_b.ts",
        "level3_intermediate_b.ts",
        build_intermediate_b(),
    )
    print("Generated 3 scripts OK")


if __name__ == "__main__":
    main()
