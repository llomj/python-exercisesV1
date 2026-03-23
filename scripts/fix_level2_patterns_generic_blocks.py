#!/usr/bin/env python3
"""
Replace duplicated generic 10-section tails in level2.ts (100 occurrences).

tail_for() returns Key Distinctions … Notes (replacement = tail only; no extra Key Distinctions prefix).
Avoid backticks and raw \\x in output strings (TS template literal / esbuild safety).
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
    "• Follow PEMDAS; use parentheses to make order explicit when in doubt; refer to the official "
    "docs for full precedence tables."
)

QUESTIONS: list[str] = [
    "What is 10 + 5 * 2?",
    "What is (10 + 5) * 2?",
    "What is 10 / 2 in Python 3?",
    "What is 10 // 3?",
    "What is 10 % 3?",
    "What is 2 ** 3?",
    "What is 2 ** 2 ** 3?",
    "What is 10 / 0?",
    "What is 0 / 10?",
    "What is 10 * 0?",
    "What is abs(-5)?",
    "What is abs(5)?",
    "What is round(3.49)?",
    "What is round(3.51)?",
    "What is round(3.5)?",
    "What is min(5, 10, 2)?",
    "What is max(5, 10, 2)?",
    "What is pow(3, 2)?",
    "What is pow(2, 3, 5)?",
    "What is sum([1, 2, 3])?",
    "What is divmod(10, 3)?",
    "What is sorted([3, 1, 2])?",
    "What is sorted([3, 1, 2], reverse=True)?",
    "What is 5 ** 0?",
    "What is 0 ** 5?",
    "What is 1 ** 100?",
    "What is 5 ** 1?",
    "What is 5 % 5?",
    "What is 5 % 3?",
    "What is 3 % 5?",
    "What is 2 * 3 + 4?",
    "What is 2 + 3 * 4?",
    "What is (2 + 3) * 4?",
    "What is 2 ** 3 + 4?",
    "What is 2 + 3 ** 4?",
    "What is (2 + 3) ** 4?",
    "What is 10 / 2 * 4?",
    "What is 10 * 2 / 4?",
    "What is 10 - 2 - 3?",
    "What is 10 + 2 - 3?",
    "What is float(\"3.14\")?",
    "What is int(\"42\")?",
    "What is str(42)?",
    "What is int(3.7)?",
    "What is int(-3.7)?",
    "What is float(5)?",
    "What is str(1.0 + 2)?",
    "What is type(3.14 + 1)?",
    "What is type(1 + 2)?",
    "What is type(1.0 * 2)?",
    "Is '1' + '1' equal to '2'?",
    "What is int('1') + int('1')?",
    "What is '5' * 2?",
    "What is 5 * 2?",
    "What is 'hello' + 'world'?",
    "What is '5' + '3'?",
    "What is int('5') + int('3')?",
    "What is 'abc' * 0?",
    "What is 'abc' * 1?",
    "What is 'abc' * 3?",
    "Result of 10 > 5?",
    "Result of 5 < 10?",
    "Result of 10 >= 10?",
    "Result of 5 <= 10?",
    "Result of 10 == 10?",
    "Result of 10 != 5?",
    "Result of 10 == 5?",
    "Result of 5 > 10?",
    "Result of 10 < 5?",
    "Result of 5 >= 10?",
    "Result of 5 == 5 and 10 > 5?",
    "Result of 5 == 5 and 5 > 10?",
    "Result of 5 == 10 or 10 > 5?",
    "Result of 5 == 10 or 5 > 10?",
    "Result of not 5 == 10?",
    "Result of not 5 == 5?",
    "Result of 5 < 10 < 15?",
    "Result of 15 > 10 > 5?",
    "Result of 5 == 5 == 5?",
    "Result of 5 != 10 != 15?",
    "Result of 5 in [1, 2, 3, 4, 5]?",
    "Result of 10 in [1, 2, 3, 4, 5]?",
    "Result of 5 not in [1, 2, 3]?",
    "Result of 1 not in [1, 2, 3]?",
    "Result of 'a' in 'abc'?",
    "Result of 'x' in 'abc'?",
    "Result of 5 is 5?",
    "Result of [1, 2] is [1, 2]?",
    "Result of 5 is not 10?",
    "Result of None is None?",
    "What is -5?",
    "What is +5?",
    "What is --5?",
    "What is -(-5)?",
    "What is 0 // 5?",
    "What is 5 // 1?",
    "What is 0 % 5?",
    "What is 5 % 1?",
    "What is round(2.5)?",
    "What is round(3.5)?",
]


def _sec(title: str, *bullets: str) -> str:
    body = "\n".join("• " + b for b in bullets)
    return f"{title}\n{body}"


def _tail(
    kd1: str,
    kd2: str,
    how: str,
    step: str,
    order: str,
    common: str,
    edge: str,
    perf: str,
    ex: str,
    notes: str,
) -> str:
    return "\n\n".join(
        [
            _sec("Key Distinctions:", kd1, kd2),
            _sec("How It Works:", how),
            _sec("Step-by-Step Execution:", step),
            _sec("Order of Operations:", order),
            _sec("Common Use Cases:", common),
            _sec("Edge Cases:", edge),
            _sec("Performance Considerations:", perf),
            _sec("Examples:", ex),
            _sec("Notes:", notes),
        ]
    )


def tail_for(q: str) -> str:
    q = q.strip()
    if q not in QUESTIONS:
        raise ValueError(f"extend tail_for: unknown question {q!r}")

    # 1
    if q == "What is 10 + 5 * 2?":
        return _tail(
            "Without parentheses, multiplication binds before addition.",
            "10 + (5 * 2) = 10 + 10 = 20, not (10 + 5) * 2.",
            "Python applies the numeric precedence table: *, /, //, %, ** before + and - at the same level left-to-right among peers.",
            "1. Evaluate 5 * 2 -> 10. 2. Evaluate 10 + 10 -> 20.",
            "Multiplication first, then addition.",
            "Mixing units in formulas, layout math, and introductory expression evaluation.",
            "Adding parentheses changes grouping; mixing ints and floats promotes to float in results.",
            "Single expression evaluation is O(1) for small literals.",
            "10 + 5 * 2 -> 20; (10 + 5) * 2 -> 30.",
            "Use extra parentheses when readability beats minimal tokens.",
        )
    # 2
    if q == "What is (10 + 5) * 2?":
        return _tail(
            "Parentheses force the addition to happen before the multiplication.",
            "(10 + 5) is 15, then 15 * 2 is 30 — different from 10 + 5 * 2.",
            "Subexpression in parentheses is evaluated first, yielding a single value for the *.",
            "1. 10 + 5 -> 15. 2. 15 * 2 -> 30.",
            "Inner parens, then multiplication.",
            "Scaling a summed quantity (perimeter then double, etc.).",
            "Deeply nested parens follow innermost-first evaluation.",
            "Still constant-time for fixed-size arithmetic.",
            "(1 + 2) * 3 -> 9; 1 + 2 * 3 -> 7.",
            "PEP 8 allows redundant parens when they clarify intent.",
        )
    # 3
    if q == "What is 10 / 2 in Python 3?":
        return _tail(
            "True division / always returns float in Python 3, even when the value is mathematically integral.",
            "10 / 2 is 5.0, not int 5 — unlike // which floors toward negative infinity.",
            "The / operator calls PyNumber_TrueDivide and builds a float result object.",
            "1. Divide 10 by 2. 2. Produce float 5.0.",
            "Left-to-right among / at same precedence; here one operation only.",
            "Ratios, averages, and anything needing fractional math without floor semantics.",
            "Very large ints still produce floats; precision limits of IEEE binary float apply.",
            "Hardware float division; typically a few nanoseconds.",
            "10 / 4 -> 2.5; 9 / 3 -> 3.0.",
            "Use // for floor division when you need an integer quotient toward -inf.",
        )
    # 4
    if q == "What is 10 // 3?":
        return _tail(
            "Floor division // rounds the quotient toward negative infinity, not toward zero.",
            "10 // 3 is 3 because 3 <= 10/3 < 4 on the number line.",
            "// computes floor(a / b) for ints, with well-defined behavior for negatives.",
            "1. True divide 10/3 ~ 3.33. 2. Floor -> 3.",
            "Multiplicative operators bind tighter than + - ; here one // only.",
            "Indexing chunks, pagination counts, and integer splitting problems.",
            "-10 // 3 is -4 (floor), whereas int(-10/3) truncates toward zero.",
            "O(1) for C long-sized values; big ints cost more.",
            "7 // 2 -> 3; -7 // 2 -> -4.",
            "For modulo pairing, divmod gives both // and % together.",
        )
    # 5
    if q == "What is 10 % 3?":
        return _tail(
            "Modulo a % b matches Python's // so that (a // b) * b + (a % b) == a for ints.",
            "10 % 3 is 1 — the remainder after floor division by 3.",
            "% computes remainder consistent with floor division, not C-style trunc toward zero for negatives.",
            "1. 10 // 3 -> 3. 2. Subtract 3*3 from 10 -> 1.",
            "Same precedence family as * / //.",
            "Wrap indices, cyclic buffers, and divisibility tests (a % b == 0).",
            "Negative a: sign of % follows Python rule pairing with //; learn one table and stick to it.",
            "O(1) for small ints.",
            "4 % 2 -> 0; 5 % 2 -> 1.",
            "math.fmod uses float trunc division — different from % for negatives.",
        )
    # 6
    if q == "What is 2 ** 3?":
        return _tail(
            "** is exponentiation; 2 ** 3 is 8, not 6 (not repeated addition).",
            "Right-associative for chains: see the 2 ** 2 ** 3 question separately.",
            "pow(2, 3) can match ** for two arguments; three-arg pow adds modular reduction.",
            "1. Raise 2 to the power 3. 2. Result 8.",
            "** binds tighter than unary + - and multiplicative ops.",
            "Growth models, bit counts, powers of two in algorithms.",
            "0**0 is 1 in Python; huge exponents can be slow or huge.",
            "Exponentiation by squaring for pow with three args is optimized; plain ** on big ints uses Karatsuba-style paths.",
            "2 ** 10 -> 1024 for quick powers-of-two intuition.",
            "Use math.pow if you need float-only behavior (always float).",
        )
    # 7
    if q == "What is 2 ** 2 ** 3?":
        return _tail(
            "Chained ** is right-associative: 2 ** (2 ** 3), not (2 ** 2) ** 3.",
            "2 ** 3 is 8, then 2 ** 8 is 256.",
            "Parser groups exponentiation from the right for a chain of **.",
            "1. Evaluate inner 2**3 -> 8. 2. Evaluate 2**8 -> 256.",
            "All ** in a chain resolve right-to-left.",
            "Nested exponential growth expressions in math puzzles.",
            "Mixing with unary minus needs explicit parens: -2**2 is -(2**2).",
            "Result size can explode; big-int ** is not constant memory.",
            "Compare (2**2)**3 -> 64 to see associativity difference.",
            "When in doubt, add parentheses even if redundant to readers.",
        )
    # 8
    if q == "What is 10 / 0?":
        return _tail(
            "Division by zero is undefined; Python raises ZeroDivisionError for / and // on zero divisor.",
            "This is a runtime exception, not a silent infinity (unlike some floats).",
            "Interpreter checks divisor after evaluating numerator for ints; zero triggers error.",
            "1. Attempt 10 / 0. 2. Raise ZeroDivisionError before producing a numeric result.",
            "No fallback value — control jumps to exception handling.",
            "Guarding denominators from user input or measurements.",
            "Float 0.0 divisor also raises for / in pure integer-looking expressions with int zero.",
            "No numeric cost — failure is immediate.",
            "Use if b != 0: or try/except around risky divides.",
            "math.inf appears only from float overflow or float('inf'), not int / 0.",
        )
    # 9
    if q == "What is 0 / 10?":
        return _tail(
            "Zero divided by a non-zero float/int yields 0.0 in true division.",
            "Numerator zero is allowed; only divisor zero is forbidden.",
            "Floating true division produces 0.0 even when operands are ints.",
            "1. Evaluate 0 / 10. 2. Result 0.0.",
            "Single / operation.",
            "Normalized scores starting at zero, zeroed numerators in ratios.",
            "0 / 0 still raises; -0.0 is a possible float sign bit edge case rarely seen in quizzes.",
            "Trivial float division.",
            "0 / 3 -> 0.0; 0 // 5 -> 0.",
            "Distinguish mathematical limit stories from Python's strict zero rules.",
        )
    # 10
    if q == "What is 10 * 0?":
        return _tail(
            "Multiplication by zero annihilates: any finite number times zero is zero (int 0 here).",
            "Distinct from division by zero — multiplying by zero is always defined for ints.",
            "Repeated addition interpretation: zero copies of 10 sum to 0.",
            "1. Multiply 10 * 0. 2. Yield 0.",
            "* binds before + - ; single multiplication here.",
            "Resetting accumulators and clearing scaled quantities.",
            "float('inf') * 0 is nan in IEEE rules — not this int case.",
            "Constant-time small-int multiply.",
            "0 * 10**9 -> 0.",
            "Boolean multiplication uses int subclassing — True*10 -> 10 pedagogically odd but valid.",
        )
    # 11
    if q == "What is abs(-5)?":
        return _tail(
            "abs returns the magnitude: distance from zero, always non-negative (or -0.0 for floats).",
            "abs(-5) is 5; abs(5) is also 5.",
            "For ints, abs delegates to sign handling without allocating a new object for small ints often.",
            "1. Take numeric value -5. 2. Apply absolute value -> 5.",
            "Function call wraps a single unary expression.",
            "Distances, tolerances, and normalizing signed deltas.",
            "abs raises on complex numbers in older expectations — complex abs returns magnitude float.",
            "O(1) for int.",
            "abs(0) -> 0; abs(-0.0) may show -0.0 sign quirks in floats.",
            "math.fabs always returns float.",
        )
    # 12
    if q == "What is abs(5)?":
        return _tail(
            "abs of a non-negative number returns the same value unchanged.",
            "abs(5) is 5 — identity on non-negative reals.",
            "Sign bit discarded only when negative; positive path is cheap.",
            "1. Observe 5 >= 0. 2. Return 5.",
            "Single call.",
            "Defensive coding when a value might be negative but often is not.",
            "NaN abs is still NaN for floats.",
            "O(1).",
            "min(abs(a), abs(b)) style comparisons.",
            "For integers, abs never changes type.",
        )
    # 13
    if q == "What is round(3.49)?":
        return _tail(
            "round(x) with one argument rounds to nearest int, ties to even (bankers rounding).",
            "3.49 is closer to 3 than to 4, so result is 3.",
            "Binary float may not store 3.49 exactly — result still follows round rules on the actual float.",
            "1. Load float near 3.49. 2. Round to nearest int -> 3.",
            "Function call; no mixed operators.",
            "Displaying whole units while hiding noise decimals.",
            "Very large magnitudes: see round second argument for decimal places.",
            "Rounding is small constant work.",
            "round(2.5) -> 2 (tie to even).",
            "For Decimal, use quantize for exact decimal rounding.",
        )
    # 14
    if q == "What is round(3.51)?":
        return _tail(
            "Values past the midpoint round away from zero toward the nearer integer — here toward 4.",
            "3.51 rounds to 4 under nearest-int rules.",
            "Compare with 3.49 rounding to 3 to see directional bias before ties.",
            "1. Nearest int to 3.51 is 4.",
            "Single round call.",
            "Thresholding sensor readings to integer buckets.",
            "Exact halfway cases use tie-to-even; 3.5 is tie, 3.51 is not.",
            "O(1).",
            "round(-3.51) -> -4.",
            "Two-argument round(x, ndigits) shifts rounding position.",
        )
    # 15
    if q == "What is round(3.5)?":
        return _tail(
            "Halfway between integers, round breaks ties to the nearest even integer.",
            "3.5 rounds to 4 because 4 is even? Actually 3.5 is halfway: Python 3 rounds 3.5 to 4 (nearest even banker's rule).",
            "IEEE-style unbiased rounding reduces systematic bias in repeated half increments.",
            "1. Detect tie at .5. 2. Choose even outcome — 3.5 -> 4.",
            "Unary round on one float.",
            "Aggregated financial rounding sometimes uses Decimal instead.",
            "2.5 rounds to 2 (even); 3.5 rounds to 4 (even).",
            "O(1).",
            "round(4.5) -> 4 (even).",
            "Do not assume schoolhouse always-away-from-zero rules.",
        )
    # 16
    if q == "What is min(5, 10, 2)?":
        return _tail(
            "min picks the smallest argument by standard comparison ordering.",
            "Among 5, 10, 2 the minimum is 2.",
            "Variadic min compares pairwise in linear scan (conceptually).",
            "1. Compare elements. 2. Return 2.",
            "Function call with multiple positional args.",
            "Clamping lower bounds, earliest values in small sets.",
            "min([]) raises ValueError; single-arg iterable form differs.",
            "O(n) in number of arguments.",
            "min([5,10,2]) same idea with iterable.",
            "key= function customizes ordering (e.g., len for strings).",
        )
    # 17
    if q == "What is max(5, 10, 2)?":
        return _tail(
            "max returns the largest item by comparison ordering.",
            "Among 5, 10, 2 the maximum is 10.",
            "Linear scan over arguments or iterable.",
            "1. Scan values. 2. Return 10.",
            "Single max call.",
            "Upper caps, peak detection on tiny tuples.",
            "max([]) raises; NaN comparisons propagate odd ordering with floats.",
            "O(n).",
            "max('a','b') uses lexicographic str rules.",
            "default= only for iterable form when empty.",
        )
    # 18
    if q == "What is pow(3, 2)?":
        return _tail(
            "pow(x, y) is exponentiation, like x ** y for two arguments.",
            "3 squared is 9.",
            "Built-in pow can take a third modulus argument for modular exponentiation.",
            "1. Compute 3 ** 2. 2. Return 9.",
            "Function call; exponent evaluated after bases.",
            "Crypto and modular math use three-arg pow heavily.",
            "pow(0,0) is 1 in Python.",
            "Three-arg pow uses fast modular algorithm for large numbers.",
            "pow(2,10) -> 1024.",
            "math.pow always returns float — different from built-in pow.",
        )
    # 19
    if q == "What is pow(2, 3, 5)?":
        return _tail(
            "Three-argument pow computes (2 ** 3) % 5 efficiently without huge intermediates.",
            "8 % 5 is 3 — the modular result.",
            "Pow mod uses repeated squaring modulo m for performance and size control.",
            "1. Compute 2**3 mod 5 via modular ladder. 2. Result 3.",
            "All args evaluated before pow; modulus must be positive for defined behavior.",
            "RSA and competitive programming exponent-mod tasks.",
            "Modulus 1 yields 0 for bases; modulus 0 is error.",
            "Sub-quadratic in exponent bits for three-arg form.",
            "pow(a, b, m) when m given requires int a,b,m conventions.",
            "Prefer three-arg pow over (a**b)%m for huge b.",
        )
    # 20
    if q == "What is sum([1, 2, 3])?":
        return _tail(
            "sum adds numeric items of an iterable, starting from 0 by default.",
            "1+2+3 is 6.",
            "Optional start argument changes the accumulator base (not used here).",
            "1. Iterate 1,2,3. 2. Accumulate to 6.",
            "sum is a built-in; inner list literal built first.",
            "Totals, averages after dividing by len.",
            "sum of strings raises — use str.join; sum of empty is 0.",
            "O(n) in list length.",
            "sum(range(5)) -> 10.",
            "For floats, accumulation error can drift — use math.fsum for stability.",
        )
    # 21
    if q == "What is divmod(10, 3)?":
        return _tail(
            "divmod(a, b) returns (a // b, a % b) as a tuple pair consistent with Python floor division.",
            "10 // 3 is 3 and 10 % 3 is 1, so divmod -> (3, 1).",
            "Single call avoids repeating divisor for both operations.",
            "1. Floor divide. 2. Modulo. 3. Pack tuple.",
            "Built-in function call.",
            "Clock arithmetic and splitting quantities into quotient+remainder.",
            "Negative operands follow // and % pairing rules.",
            "O(1) for ints.",
            "unpack: q, r = divmod(10,3).",
            "For floats, divmod returns floats.",
        )
    # 22
    if q == "What is sorted([3, 1, 2])?":
        return _tail(
            "sorted returns a new list, leaving the original iterable untouched.",
            "Default ascending sort: [1, 2, 3].",
            "Timsort algorithm: O(n log n) worst case, adaptive to runs.",
            "1. Copy elements. 2. Sort. 3. Return new list.",
            "sorted() builds list from iterable then sorts.",
            "Display order, ranking without mutating source data.",
            "Key functions and reverse flag customize order; stable sort preserves equal-key order.",
            "O(n log n) typical.",
            "sorted([3,1,2], reverse=True) flips order.",
            "list.sort sorts in place and returns None.",
        )
    # 23
    if q == "What is sorted([3, 1, 2], reverse=True)?":
        return _tail(
            "reverse=True sorts descending: largest elements first.",
            "[3, 1, 2] becomes [3, 2, 1].",
            "Stable sort still applies among equal keys.",
            "1. Sort ascending logic internally then reverse output or sort with reversed comparator.",
            "Keyword argument evaluated with sorted call.",
            "Leaderboards and top-k style presentations.",
            "key=abs with reverse for magnitude ordering puzzles.",
            "Same asymptotic cost as ascending sort.",
            "sorted(x, reverse=True) does not mutate x.",
            "reversed(sorted(x)) differs if you need iterator laziness.",
        )
    # 24
    if q == "What is 5 ** 0?":
        return _tail(
            "Any non-zero number to the power 0 is 1 in Python integers; 5**0 is 1.",
            "0**0 is defined as 1 in Python (convention for empty product).",
            "Exponentiation by squaring fast path handles zero exponent.",
            "1. Recognize exponent 0. 2. Return 1.",
            "** tighter than unary operators in composition.",
            "Bit shifts and combinatorial formulas resetting terms.",
            "Very large base with exponent 0 still 1.",
            "O(1) for small ints.",
            "pow(9, 0) -> 1.",
            "In math proofs, 0**0 is indeterminate — Python fixes it to 1.",
        )
    # 25
    if q == "What is 0 ** 5?":
        return _tail(
            "Zero to a positive integer power is zero: repeated multiplication of zeros.",
            "0 ** 5 is 0.",
            "For positive exponents, 0**n is 0; 0**0 special-cased to 1.",
            "1. Multiply zero by itself conceptually five times -> 0.",
            "Right operand positive int.",
            "Zeroing exponential decay models at the origin.",
            "0**negative raises ZeroDivisionError in spirit (actually raises in Python).",
            "O(1).",
            "0**1 -> 0.",
            "Distinguish limits in calculus from discrete Python ints.",
        )
    # 26
    if q == "What is 1 ** 100?":
        return _tail(
            "One raised to any finite power remains one — multiplicative identity.",
            "1 ** 100 is 1.",
            "Exponentiation still runs but optimizes quickly for bases 0,1,-1 in practice.",
            "1. Any count of multiplying ones stays 1.",
            "All ** here is constant folding friendly.",
            "Trivial exponents in expanded polynomials.",
            "1**inf is 1 in sympy-like reasoning; Python ints stay finite here.",
            "Fast for exponent 100.",
            "(-1)**even vs odd flips sign — contrast with base 1.",
            "Use pow(1,n, m) in crypto for no-op steps carefully.",
        )
    # 27
    if q == "What is 5 ** 1?":
        return _tail(
            "Any number to the first power is itself.",
            "5 ** 1 is 5.",
            "Exponent 1 is the identity exponent in multiplicative group sense for positives.",
            "1. Parse 5**1. 2. Return 5.",
            "Single ** operation.",
            "Dimensional analysis keeping a quantity unchanged.",
            "5**-1 is rational 1/5 in floats, or Fraction.",
            "O(1).",
            "x**1 is x for int x.",
            "Contrast with x*1 which is also x but different operation class.",
        )
    # 28
    if q == "What is 5 % 5?":
        return _tail(
            "When divisor divides dividend evenly, remainder is zero.",
            "5 % 5 is 0 — divisibility test pattern.",
            "Matches 5 // 5 == 1 and 1*5 + 0 == 5.",
            "1. 5 // 5 -> 1. 2. Remainder 0.",
            "% with same left and right non-zero small ints.",
            "Checking multiples and column alignment in grids.",
            "0 % n is 0 for non-zero n.",
            "O(1).",
            "n % n -> 0 for non-zero n.",
            "Use a % b == 0 for divisibility.",
        )
    # 29
    if q == "What is 5 % 3?":
        return _tail(
            "Remainder after dividing 5 by 3 using floor division toward -inf.",
            "5 % 3 is 2.",
            "Pair: 5 // 3 is 1, 1*3 + 2 == 5.",
            "1. Floor divide. 2. Subtract product from 5.",
            "Single % operation.",
            "Odd/even via n % 2.",
            "Negative dividend: sign of % follows Python pairing rule.",
            "O(1).",
            "6 % 3 -> 0.",
            "math.gcd uses modulo internally.",
        )
    # 30
    if q == "What is 3 % 5?":
        return _tail(
            "When dividend is smaller than positive divisor, a % b is simply a (the whole number fits zero times with remainder a).",
            "3 % 5 is 3.",
            "Floor division gives 0, remainder is the original small positive numerator.",
            "1. 3 // 5 -> 0. 2. Remainder 3.",
            "Single modulo.",
            "Normalizing angles to [0, m) before adjustment.",
            "Negative a still follows floor pairing — learn the table.",
            "O(1).",
            "2 % 7 -> 2.",
            "For always-positive mod use a % m adjusted formula in crypto.",
        )
    # 31
    if q == "What is 2 * 3 + 4?":
        return _tail(
            "Multiplication before addition: 2*3 is 6, then 6+4 is 10.",
            "Not 2 * (3+4) unless parentheses say so.",
            "Precedence table governs implicit grouping.",
            "1. 2*3 -> 6. 2. 6+4 -> 10.",
            "* before +.",
            "Polynomial evaluation patterns.",
            "Float rounding only matters with floats.",
            "O(1).",
            "2 + 3 * 4 -> 14.",
            "Whitespace never changes precedence.",
        )
    # 32
    if q == "What is 2 + 3 * 4?":
        return _tail(
            "3*4 happens first -> 12, then 2+12 -> 14.",
            "Addition does not bind before multiplication.",
            "Same precedence family as prior question with operands permuted.",
            "1. 3*4=12. 2. 2+12=14.",
            "* before +.",
            "Teaching order of operations drills.",
            "Mix ** with care — ** tighter than *.",
            "O(1).",
            "Compare (2+3)*4 -> 20.",
            "Use explicit parens in money code when mixing ops.",
        )
    # 33
    if q == "What is (2 + 3) * 4?":
        return _tail(
            "Parentheses sum first: 2+3 is 5, then 5*4 is 20.",
            "Different from 2 + 3 * 4 without parens.",
            "Inner addition yields single factor for multiplication.",
            "1. 2+3 -> 5. 2. 5*4 -> 20.",
            "Paren expr then *.",
            "Scaling a summed offset.",
            "Floating errors if inner values are floats.",
            "O(1).",
            "Distributive law links (a+b)*c to a*c + b*c.",
            "Symbolic algebra reorder differs from float rounding.",
        )
    # 34
    if q == "What is 2 ** 3 + 4?":
        return _tail(
            "** binds tighter than + : compute 2**3=8 first, then 8+4=12.",
            "Not 2 ** (3+4).",
            "Exponentiation ranks above additive operators.",
            "1. 2**3 -> 8. 2. +4 -> 12.",
            "** then +.",
            "Mixed exponential and linear terms in formulas.",
            "Unary minus interaction: -2**2 is -(2**2).",
            "O(1) for small ints.",
            "2 + 2**3 -> 10.",
            "Add parens when you mean (2**3)+4 vs 2**(3+4).",
        )
    # 35
    if q == "What is 2 + 3 ** 4?":
        return _tail(
            "Exponent evaluated first: 3**4 = 81, then 2 + 81 = 83.",
            "Addition waits for the power result.",
            "Demonstrates ** over + without parentheses.",
            "1. 3**4 -> 81. 2. 2+81 -> 83.",
            "** before +.",
            "Polynomial with dominant high-degree term numerically.",
            "Huge powers overflow time/memory if base and exp grow.",
            "O(1) here.",
            "Compare (2+3)**4 -> 625.",
            "For floats, overflow to inf possible.",
        )
    # 36
    if q == "What is (2 + 3) ** 4?":
        return _tail(
            "Parentheses force addition before exponentiation: (2+3)=5, then 5**4.",
            "5**4 = 625.",
            "Contrast with 2 + 3**4 which is much smaller in the prior question.",
            "1. Inner sum 5. 2. 5**4 -> 625.",
            "Paren then **.",
            "Binomial expansions at high level conceptually.",
            "Negative base with odd/even exponent sign patterns.",
            "Pow grows quickly — 625 here.",
            "(a+b)**2 expands differently than a**2 + b**2.",
            "Exact integer ** for modest sizes is fine.",
        )
    # 37
    if q == "What is 10 / 2 * 4?":
        return _tail(
            "* and / share precedence and group left-to-right: (10/2)*4, not 10/(2*4).",
            "10/2 is 5.0, then *4 is 20.0.",
            "Left-associative true division and multiplication for chains.",
            "1. 10/2 -> 5.0. 2. *4 -> 20.0.",
            "Left-to-right among * and /.",
            "Sequential scaling steps in pipelines.",
            "Mixing // changes floor behavior if used.",
            "Each op O(1) for floats.",
            "10 * 2 / 4 -> 5.0 (same left-right idea).",
            "Use parentheses when the business formula is ambiguous on paper.",
        )
    # 38
    if q == "What is 10 * 2 / 4?":
        return _tail(
            "Left-to-right: (10*2)/4 = 20/4 = 5.0.",
            "Multiplication first in the chain, then division.",
            "Same precedence band as previous question with operand order swapped.",
            "1. 10*2 -> 20. 2. /4 -> 5.0.",
            "* then / left-associative.",
            "Normalizing after a double-scale then halve pattern.",
            "Integer 10*2 is 20 before float division if using ints — here promotes to float on /.",
            "O(1).",
            "Contrast 10 / (2*4) -> 1.25 with parens.",
            "math.prod for longer chains.",
        )
    # 39
    if q == "What is 10 - 2 - 3?":
        return _tail(
            "Subtraction chains left-to-right: (10-2)-3, not 10-(2-3).",
            "8 - 3 = 5.",
            "Binary - is left-associative for repeated use.",
            "1. 10-2 -> 8. 2. 8-3 -> 5.",
            "- chains left.",
            "Sequential debits from a balance.",
            "Unary minus binds tighter: -a - b reads (-a) - b.",
            "O(1).",
            "10 - (2-3) -> 11 — different parens.",
            "Use += style updates to avoid long - chains.",
        )
    # 40
    if q == "What is 10 + 2 - 3?":
        return _tail(
            "+ and - share precedence and associate left-to-right: ((10+2)-3).",
            "12 - 3 = 9.",
            "Mixture of addition and subtraction without surprise jumps.",
            "1. 10+2 -> 12. 2. 12-3 -> 9.",
            "Left-associative + - chain.",
            "Net adjustments with credits and debits in order.",
            "Floats lose associativity in extreme cases — not here.",
            "O(1).",
            "a + b - c common idiom.",
            "PEP 8 spaces around binary operators.",
        )
    # 41
    if q == "What is float(\"3.14\")?":
        return _tail(
            "float() parses a string decimal text into IEEE 754 binary float (approximate).",
            "Result is a float object near 3.14.",
            "Invalid strings raise ValueError; underscores in literals allowed in recent Python for numeric literals but not arbitrary in float(str) without rules.",
            "1. Parse characters. 2. Build float.",
            "Call on string literal.",
            "Reading configuration and CSV fields into numbers.",
            "Scientific notation strings like '1e-3' parse.",
            "Parsing cost proportional to string length.",
            "float('inf') works for special values.",
            "Decimal module for exact decimal arithmetic.",
        )
    # 42
    if q == "What is int(\"42\")?":
        return _tail(
            "int(string) parses base-10 by default; '42' becomes int 42.",
            "Whitespace may strip; bases use second argument.",
            "Errors on non-numeric text without base-0 auto detection.",
            "1. Scan digits. 2. Build int.",
            "Function call on str literal.",
            "User input validation before math.",
            "int('ff',16) hex parsing; int('42',0) uses prefix rules.",
            "Linear in digit count.",
            "int(' 42 ') often works.",
            "Never int() untrusted strings without validation in security contexts.",
        )
    # 43
    if q == "What is str(42)?":
        return _tail(
            "str on int produces decimal text without quotes in the value — the string '42' content.",
            "Type becomes str, representation human-oriented.",
            "str calls __str__ on the object; int __str__ is decimal.",
            "1. Take int 42. 2. Allocate str with chars '4','2'.",
            "Single call.",
            "Formatting output and building messages.",
            "str of float uses shortest round-trip-ish rules.",
            "Small allocation.",
            "str(True) -> 'True'.",
            "repr differs — see repr() for quotes on str.",
        )
    # 44
    if q == "What is int(3.7)?":
        return _tail(
            "int(float) truncates toward zero — drops fractional part, not floor for negatives.",
            "int(3.7) is 3.",
            "Differs from math.floor for negative values.",
            "1. Take float 3.7. 2. Truncate toward zero -> 3.",
            "Function call.",
            "Converting measurements to whole units toward zero.",
            "int(-3.7) -> -3, while floor(-3.7) -> -4.",
            "O(1).",
            "int(3.0) -> 3.",
            "Use math.floor or math.ceil when you need directed rounding.",
        )
    # 45
    if q == "What is int(-3.7)?":
        return _tail(
            "Truncation toward zero means -3.7 becomes -3, not -4.",
            "Floor would go more negative; int() chooses toward zero.",
            "Matches C-style cast semantics for float to int in Python.",
            "1. Magnitude 3.7. 2. Apply sign toward zero -> -3.",
            "Unary - on literal inside int().",
            "Converting negative deltas without extra floor bias unless wanted.",
            "Exact halfway floats rare in binary — still trunc rule.",
            "O(1).",
            "Compare math.floor(-3.7) -> -4.",
            "For rounding to nearest, use round() then int in two steps carefully.",
        )
    # 46
    if q == "What is float(5)?":
        return _tail(
            "float on int constructs an exact representable float for small integers in many cases.",
            "float(5) is 5.0.",
            "Large ints may lose precision when converted to float.",
            "1. Promote int 5 to float 5.0.",
            "Single conversion call.",
            "Mixing into float pipelines.",
            "Some ints beyond 2**53 do not round-trip exactly as float.",
            "Cheap for small values.",
            "float('nan') special case.",
            "Use int for exact integer-only math when possible.",
        )
    # 47
    if q == "What is str(1.0 + 2)?":
        return _tail(
            "Inner addition promotes int 2 to float; 1.0 + 2 is 3.0, then str becomes '3.0' text.",
            "Shows str of float includes decimal point or exponent style.",
            "Addition follows numeric promotion rules to wider type.",
            "1. Add -> 3.0. 2. str -> '3.0' (typical).",
            "Inner + then str call.",
            "Printing computed float results.",
            "Binary float may show '2.999999999' style noise rarely from other ops.",
            "Small string build.",
            "format(3.0, 'g') controls digits.",
            "repr vs str for floats differs in edge cases.",
        )
    # 48
    if q == "What is type(3.14 + 1)?":
        return _tail(
            "Adding float and int yields float; type of result is float.",
            "type(...) is <class 'float'> — use type name or isinstance checks in real code.",
            "Promotion to float happens before addition completes.",
            "1. Add 3.14 + 1 -> float. 2. type returns float class.",
            "type() call on expression.",
            "Debugging mixed arithmetic bugs.",
            "type returns exact class — subclasses report subclass.",
            "type lookup O(1).",
            "isinstance(x, float) includes subclasses.",
            "For numpy scalars, type differs — stay in pure Python here.",
        )
    # 49
    if q == "What is type(1 + 2)?":
        return _tail(
            "Sum of two ints remains int in Python 3; no silent float promotion.",
            "type(3) is int.",
            "True division would float; addition of ints stays int until overflow to long arbitrary precision.",
            "1. Add ints. 2. type int.",
            "Pure int + int.",
            "Integer pipelines until a / appears.",
            "Big int automatic in Python 3 — unbounded.",
            "O(1) type check.",
            "type(True) is int subclass bool — still int subclass.",
            "Use // when you need integer quotient type consistency.",
        )
    # 50
    if q == "What is type(1.0 * 2)?":
        return _tail(
            "float * int promotes to float multiplication; result type is float.",
            "type(2.0) is float.",
            "Even if mathematically integral, 1.0*2 is float 2.0.",
            "1. Multiply -> 2.0. 2. type -> float.",
            "Multiplication before type().",
            "Graphics and ML stacks often stay float throughout.",
            "0.0 * inf is nan — float oddities.",
            "O(1).",
            "2 * 1.0 same idea.",
            "Fraction module for rational exact arithmetic.",
        )
    # 51
    if q == "Is '1' + '1' equal to '2'?":
        return _tail(
            "String concatenation is not numeric addition: '1'+'1' is '11', not '2'.",
            "Equality compares str to str — '11' == '2' is False.",
            "No automatic int conversion for str + str.",
            "1. Build '11'. 2. Compare to '2' -> False.",
            "+ on str means concat; == compares character sequences.",
            "Teaching that types matter for +.",
            "'2' == 2 is False — different types.",
            "O(1) length compares.",
            "int('1')+int('1') is numeric path.",
            "Use f-strings or format for joining numbers into text.",
        )
    # 52
    if q == "What is int('1') + int('1')?":
        return _tail(
            "Each int() parses digit strings to int; then + is numeric addition.",
            "1 + 1 is 2 — not string '11'.",
            "Left-to-right calls: int, int, then add.",
            "1. int('1')->1. 2. int('1')->1. 3. add ->2.",
            "Function calls before binary +.",
            "Parsing CSV integers before summing.",
            "int('') raises ValueError.",
            "O(1) tiny strings.",
            "int('01') works in base 10 as 1.",
            "For bases use int(s, base).",
        )
    # 53
    if q == "What is '5' * 2?":
        return _tail(
            "str * int repeats the string; '5' * 2 is '55'.",
            "Not numeric 10 — type is str.",
            "Sequence repetition __mul__ on str.",
            "1. Repeat '5' twice. 2. Concatenate -> '55'.",
            "str repetition after evaluating int 2.",
            "ASCII line drawing and padding.",
            "Negative repeat raises; zero gives ''",
            "O(n * len) output size.",
            "2 * '5' also '55'.",
            "Use int() before math if you meant multiply numbers.",
        )
    # 54
    if q == "What is 5 * 2?":
        return _tail(
            "Numeric multiplication: 5 * 2 is int 10.",
            "Contrasts with str repetition question using '5'.",
            "PyNumber_Multiply for ints.",
            "1. Multiply ints -> 10.",
            "Single * on ints.",
            "Arithmetic everywhere.",
            "Overflow not an issue — big ints grow.",
            "O(1) small int.",
            "5 * 2 == 2 * 5 commutative.",
            "bool is subclass of int — weird cases in puzzles.",
        )
    # 55
    if q == "What is 'hello' + 'world'?":
        return _tail(
            "String concatenation joins sequences without separator: 'helloworld'.",
            "No space added — unlike some template languages.",
            "Allocates new str length sum of parts.",
            "1. Build 'hello'. 2. Concat 'world'.",
            "Left + right str.",
            "Building tokens from pieces.",
            "Huge concatenations in loops use join list.",
            "O(n+m) output size.",
            "''.join(['hello','world']) clearer for many parts.",
            "f'{a}{b}' often clearer.",
        )
    # 56
    if q == "What is '5' + '3'?":
        return _tail(
            "Concatenation yields '53' text, not numeric 8.",
            "Type str throughout.",
            "Two one-character strings become length-2 str.",
            "1. '5' + '3' -> '53'.",
            "Single concat op.",
            "Digit string assembly for display codes.",
            "int('53') recovers number 53.",
            "Short output allocation.",
            "Contrast int('5')+int('3') -> 8.",
            "For arithmetic, cast first.",
        )
    # 57
    if q == "What is int('5') + int('3')?":
        return _tail(
            "Parse then add: 5 + 3 is 8.",
            "Numeric int result.",
            "Two int() calls then addition.",
            "1. Parse 5. 2. Parse 3. 3. Add -> 8.",
            "Calls bind tightly; then +.",
            "Summing text fields from forms.",
            "ValueError on bad digits.",
            "O(1) parse.",
            "float('3.5')+1 for float path.",
            "strip() inputs with whitespace first.",
        )
    # 58
    if q == "What is 'abc' * 0?":
        return _tail(
            "Zero repetitions of a string yield empty string ''.",
            "Universal for sequences: *0 gives empty.",
            "Avoids allocating large buffers.",
            "1. Repeat 'abc' zero times. 2. ''.",
            "str * int.",
            "Resetting formatted buffers.",
            "Negative repeat raises ValueError for str.",
            "O(1) returns interned empty str often.",
            "'abc'*1 is 'abc'.",
            "Use this to clear dummy padding in simple puzzles.",
        )
    # 59
    if q == "What is 'abc' * 1?":
        return _tail(
            "Multiplying by 1 returns the same sequence content, often a new str object.",
            "'abc' * 1 is 'abc'.",
            "Identity may differ but value equal.",
            "1. Copy conceptually once.",
            "Single * op.",
            "No-op scaling in string templates.",
            "*(-1) raises for str.",
            "O(n) copy may occur.",
            "'x'*3 repeats three times.",
            "Contrast list * shallow copy semantics.",
        )
    # 60
    if q == "What is 'abc' * 3?":
        return _tail(
            "Repeats the string three times end-to-end: 'abcabcabc'.",
            "Length multiplies by 3.",
            "Quadratic growth if you chain * in a loop — use join.",
            "1. Concatenate three copies.",
            "str * int.",
            "Pattern generation and simple obfuscation jokes.",
            "Memory blow-up if multiplier huge.",
            "O(k * n) time and space for multiplier k and length n.",
            "'a'*10**6 possible but heavy.",
            "bytearray has different mutability story.",
        )
    # 61-70 comparisons - compact unique
    if q == "Result of 10 > 5?":
        return _tail(
            "Ordering comparison on ints yields bool.",
            "10 > 5 is True.",
            "Rich comparison returns bool only; no three-valued logic.",
            "1. Compare magnitudes. 2. Return True.",
            "Single > op.",
            "Guards and sorting predicates.",
            "Chained comparisons differ — single op here.",
            "O(1).",
            "10 <= 5 is False.",
            "numpy arrays overload comparisons differently.",
        )
    if q == "Result of 5 < 10?":
        return _tail(
            "< asks if left is strictly less than right.",
            "5 < 10 is True.",
            "Mirrors > with operands flipped conceptually.",
            "1. Evaluate 5 and 10. 2. Compare -> True.",
            "One comparison.",
            "Strict bounds checks exclusive of endpoint.",
            "Type mismatch raises unless rich comparison defined.",
            "O(1).",
            "5 < 5 is False.",
            "Chained 5 < x < 10 uses pairwise AND semantics.",
        )
    if q == "Result of 10 >= 10?":
        return _tail(
            ">= is True when left equals right or greater.",
            "10 >= 10 is True — equality satisfies.",
            "Inclusive upper or lower bound tests.",
            "1. Compare. 2. True because equal.",
            "Single >=.",
            "Loop termination i <= n style.",
            "NaN comparisons are False for all ordering ops with NaN involved.",
            "O(1).",
            "9 >= 10 is False.",
            "Prefer explicit == or < when logic clearer.",
        )
    if q == "Result of 5 <= 10?":
        return _tail(
            "<= True when left is less or equal.",
            "5 <= 10 is True.",
            "Inclusive ceiling checks on ordered values.",
            "1. Compare pair. 2. True.",
            "One <=.",
            "Validating max constraints.",
            "float('nan') <= anything is False.",
            "O(1).",
            "5 <= 5 is True.",
            "Chained comparisons short-circuit.",
        )
    if q == "Result of 10 == 10?":
        return _tail(
            "== checks value equality for ints; 10 equals 10.",
            "True.",
            "Not identity — small ints may be cached but do not rely on that.",
            "1. Compare values. 2. True.",
            "Equality op.",
            "Unit tests and assertions.",
            "10 == 10.0 is True — numeric equality across int/float.",
            "O(1).",
            "is not the same as == for mutable objects.",
            "math.isclose for floats near equality.",
        )
    if q == "Result of 10 != 5?":
        return _tail(
            "!= is negation of == — inequality holds here.",
            "10 != 5 is True.",
            "Reads naturally as 'not equal'.",
            "1. Compare. 2. True unequal.",
            "Single !=.",
            "Negative guards.",
            "NaN != NaN is True oddly — float quirk.",
            "O(1).",
            "10 != 10 is False.",
            "Use 'is not' only for None singleton checks style-wise.",
        )
    if q == "Result of 10 == 5?":
        return _tail(
            "Equal comparison fails for different values.",
            "10 == 5 is False.",
            "No coercion makes 5 into 10.",
            "1. Compare. 2. False.",
            "Single ==.",
            "Negative test expectations.",
            "0 == False is True — bool subclass int.",
            "O(1).",
            "Same structure as other equality drills.",
            "For floats, watch rounding.",
        )
    if q == "Result of 5 > 10?":
        return _tail(
            "Order comparison: 5 is not greater than 10.",
            "False.",
            "Strict > requires left strictly bigger.",
            "1. Compare. 2. False.",
            "Single >.",
            "Invalid range checks.",
            "Strings compare lexicographically — different story.",
            "O(1).",
            "5 > 5 is False.",
            "Sort key functions change comparison basis.",
        )
    if q == "Result of 10 < 5?":
        return _tail(
            "10 is not less than 5.",
            "False.",
            "Asymmetric comparison — not commutative.",
            "1. Evaluate. 2. False.",
            "Single <.",
            "Sanity checks on sorted inputs.",
            "Chained comparisons must all hold.",
            "O(1).",
            "Compare with 5 < 10 True.",
            "Use key= when comparing derived values.",
        )
    if q == "Result of 5 >= 10?":
        return _tail(
            "5 is neither greater than nor equal to 10 in value.",
            "False.",
            "Inclusive bound fails on the lower side here.",
            "1. Compare. 2. False.",
            "Single >=.",
            "Threshold failures.",
            "Edge at 10: 10 >= 10 would be True.",
            "O(1).",
            "5 >= 5 is True.",
            "Floating point inclusive ranges need care at boundaries.",
        )
    # 71-80 bool logic
    if q == "Result of 5 == 5 and 10 > 5?":
        return _tail(
            "and requires both subexpressions True.",
            "5==5 is True and 10>5 is True -> overall True.",
            "Short-circuit: if left false, right skipped.",
            "1. Left True. 2. Evaluate right True. 3. True.",
            "and lower precedence than comparisons? Actually comparison binds tighter than and in Python — here explicit structure.",
            "Combining validity checks.",
            "Empty string and short-circuit behavior in general.",
            "O(1).",
            "True and False -> False.",
            "Use parentheses when mixing with or for clarity.",
        )
    if q == "Result of 5 == 5 and 5 > 10?":
        return _tail(
            "First conjunct True, second False — and is False.",
            "5>10 is False.",
            "Short-circuit still evaluates second here because first True.",
            "1. Left True. 2. Right False. 3. False.",
            "and of bools.",
            "Failing multi-condition forms.",
            "If left were False, right might not run — side effects rely on this.",
            "O(1).",
            "De Morgan laws relate and/or/not.",
            "all([...]) for iterable of conditions.",
        )
    if q == "Result of 5 == 10 or 10 > 5?":
        return _tail(
            "or is True if any operand True — first False, second True yields True.",
            "Short-circuit stops at first True if left were True.",
            "1. Left False. 2. Right True. 3. True.",
            "or lower precedence than comparison? Comparisons evaluate first inside operands.",
            "Fallback permission checks.",
            "or with empty string left returns right operand truthiness.",
            "O(1).",
            "False or False -> False.",
            "any([...]) for iterable.",
            "Do not confuse short-circuit or with bitwise | on integers.",
        )
    if q == "Result of 5 == 10 or 5 > 10?":
        return _tail(
            "Both subexpressions False — or is False.",
            "Neither equality nor inequality holds as needed.",
            "1. Left False. 2. Right False. 3. False.",
            "or of two False.",
            "Rejecting all branches.",
            "Short-circuit: after first False, still evaluates second here.",
            "O(1).",
            "True or x does not evaluate x.",
            "Bitwise | vs logical or for ints — different.",
            "Use explicit if/elif chains when readability beats one long or expression.",
        )
    if q == "Result of not 5 == 10?":
        return _tail(
            "not binds looser than == : parsed as not (5 == 10).",
            "5==10 is False, not False is True.",
            "not unary bool conversion.",
            "1. Compare -> False. 2. not -> True.",
            "Comparison then not.",
            "Negating membership or equality tests.",
            "not not x double negation.",
            "O(1).",
            "not 0 is True — falsy int.",
            "Use explicit == False sparingly; 'if not cond' idiomatic.",
        )
    if q == "Result of not 5 == 5?":
        return _tail(
            "not (5 == 5): inner True, outer not -> False.",
            "Equality holds, negation flips to False.",
            "1. 5==5 True. 2. not True -> False.",
            "not applies to bool of comparison.",
            "Rejecting tautologies.",
            "Operator precedence: not binds tighter than and/or? Actually not is lower than comparisons — still not (True).",
            "O(1).",
            "not True is False.",
            "Chained not not for bool normalization.",
            "Write not (a == b) for clarity when mixing with and/or.",
        )
    if q == "Result of 5 < 10 < 15?":
        return _tail(
            "Chained comparison expands to (5 < 10) and (10 < 15) with middle evaluated once.",
            "Both True -> True.",
            "No C-style ternary — this is pairwise AND.",
            "1. 5<10 True. 2. 10<15 True. 3. True.",
            "Chained <.",
            "Range membership for ordered values.",
            "a < b < c requires b shared — no (a<b)<c nonsense.",
            "Middle term evaluated once — important if side effects.",
            "O(1).",
            "Pairwise short-circuit; PEP 8 encourages chained forms; watch NaN and custom __lt__.",
        )
    if q == "Result of 15 > 10 > 5?":
        return _tail(
            "Chained > expands to (15 > 10) and (10 > 5).",
            "Both True -> True.",
            "Middle value 10 anchors both tests.",
            "1. 15>10 True. 2. 10>5 True. 3. True.",
            "Chained > descending check.",
            "Strictly decreasing triple check.",
            "Mixing directions in one chain is syntax error if ill-formed.",
            "O(1).",
            "Compare 15 > 10 > 15 -> False on second part.",
            "Works with any comparable middle.",
        )
    if q == "Result of 5 == 5 == 5?":
        return _tail(
            "Chained equality: (5==5) and (5==5) conceptually — actually compares a chain with middle evaluated once.",
            "For equal literals, all pairwise equalities hold.",
            "True.",
            "1. Pairwise True. 2. True.",
            "Chained ==.",
            "Checking three values identical in one expression.",
            "a == b == c does not imply a is b is c identity.",
            "O(1).",
            "1 == 2 == 1 is False at first pair? Actually 1==2 False short-circuits the chain result False.",
            "NaN breaks equality chains.",
        )
    if q == "Result of 5 != 10 != 15?":
        return _tail(
            "Chained != is not equivalent to (5!=10) and (10!=15) — Python chains pairwise.",
            "5!=10 True and 10!=15 True -> True.",
            "Care: a != b != c does not mean all pairwise distinct in multi-value sense beyond chain.",
            "1. First pair True. 2. Second pair True. 3. True.",
            "Chained !=.",
            "Quick inequality along a sequence.",
            "Surprising results possible with NaN.",
            "O(1).",
            "1 != 2 != 1 is True? Evaluate: 1!=2 True, 2!=1 True -> True.",
            "Read docs for exact semantics on mixed operators.",
        )
    # 81-86 membership
    if q == "Result of 5 in [1, 2, 3, 4, 5]?":
        return _tail(
            "in tests membership — linear scan for list unless optimized.",
            "5 is last element -> True.",
            "Equality uses == per element.",
            "1. Iterate list. 2. Found 5 -> True.",
            "in has lower precedence than many ops; list literal builds first.",
            "Filtering allowed values.",
            "Custom classes define __contains__.",
            "O(n) for list worst case.",
            "set membership average O(1).",
            "5 in (1,2,3) tuple similar.",
        )
    if q == "Result of 10 in [1, 2, 3, 4, 5]?":
        return _tail(
            "10 not present in the five-element list.",
            "False.",
            "Full scan may check every element.",
            "1. Scan. 2. No match -> False.",
            "Membership test.",
            "Validation failure paths.",
            "Nested lists: 10 in [[10]] is False — element is list not 10.",
            "O(n).",
            "10 in {10} set True.",
            "bisect on sorted lists for faster search.",
        )
    if q == "Result of 5 not in [1, 2, 3]?":
        return _tail(
            "not in is negation of in — 5 absent from [1,2,3].",
            "True.",
            "Equivalent to not (5 in ...).",
            "1. Membership False. 2. not in -> True.",
            "not in operator.",
            "Whitelist checks.",
            "Element __eq__ can make weird membership.",
            "O(n) list scan.",
            "5 not in [] is True.",
            "Prefer 'x not in s' over 'not x in s' per PEP 8.",
        )
    if q == "Result of 1 not in [1, 2, 3]?":
        return _tail(
            "1 is first element — membership True, so not in is False.",
            "False.",
            "Early exit often on first element for lists.",
            "1. Found at index 0. 2. not in -> False.",
            "Membership.",
            "Wrong negatives on partial data.",
            "Custom __contains__ can be slow.",
            "O(1) best case here.",
            "1 not in [2,3] is True.",
            "Counterintuitive with NaN identity.",
        )
    if q == "Result of 'a' in 'abc'?":
        return _tail(
            "Substring test for str — 'a' is prefix char.",
            "True.",
            "Uses efficient substring search.",
            "1. Search 'a' in 'abc' -> True.",
            "in on str.",
            "Parsing tokens.",
            "'' in any string is True at every position by Python rule.",
            "Sublinear average for some search algos.",
            "'ab' in 'abc' True contiguous.",
            "For single char, could use set of chars instead.",
        )
    if q == "Result of 'x' in 'abc'?":
        return _tail(
            "'x' not a contiguous substring of 'abc'.",
            "False.",
            "Case sensitive by default.",
            "1. Scan/search. 2. False.",
            "in str.",
            "Invalid option detection.",
            "Very long haystacks — consider preprocessing.",
            "O(n*m) worst naive.",
            "'A' in 'abc' False — case matters.",
            "use casefold() for case-insensitive manual checks.",
        )
    # 87-90 identity
    if q == "Result of 5 is 5?":
        return _tail(
            "Small ints may be cached — 5 is 5 often True in CPython.",
            "Identity of objects — do not rely on for logic except None and interned cases.",
            "is compares ids.",
            "1. Load two 5 objects. 2. Compare id.",
            "is between literals.",
            "Interning trivia — not a language guarantee for all ints.",
            "Large ints constructed separately may differ identity with same value.",
            "O(1).",
            "a=5;b=5; a is b often True.",
            "Always use == for numeric equality semantics.",
        )
    if q == "Result of [1, 2] is [1, 2]?":
        return _tail(
            "New list literals usually create distinct objects — identity False even if contents equal.",
            "False in typical CPython.",
            "== would be True for same elements.",
            "1. Create list A. 2. Create list B. 3. ids differ.",
            "is on lists.",
            "Why copy vs alias matters.",
            "is [] always a new empty list each time? Often new object — False to other [].",
            "O(1) pointer compare.",
            "a=[1,2]; b=a; a is b True.",
            "Use == for value equality of containers.",
        )
    if q == "Result of 5 is not 10?":
        return _tail(
            "is not is negation of is — different objects here.",
            "True.",
            "5 and 10 are distinct int objects conceptually.",
            "1. Compare ids. 2. Not equal -> True.",
            "is not.",
            "None checks: x is not None.",
            "NaN is always not equal — weird with is.",
            "O(1).",
            "Prefer 'is not' over 'not x is y' spacing.",
            "Small int cache can make some equal values identical objects.",
        )
    if q == "Result of None is None?":
        return _tail(
            "None is a singleton — only one None object exists.",
            "True — always use 'is None' for checks.",
            "Identity holds for None literal vs None.",
            "1. Load None twice. 2. Same id.",
            "is on None.",
            "Optional default handling.",
            "None == None also True but style prefers is.",
            "O(1).",
            "np.nan is not np.nan for floats — different issue.",
            "Ellipsis ... is another singleton.",
        )
    # 91-100 unary and floor/mod/round
    if q == "What is -5?":
        return _tail(
            "Unary minus negates the numeric value.",
            "-5 is int -5.",
            "On literals, straightforward sign flip.",
            "1. Apply unary - to 5.",
            "Unary - binds tighter than ** in -2**2 style cases.",
            "Signed offsets and deltas.",
            "-(-5) is 5.",
            "O(1).",
            "-0 is 0.",
            "Unary + exists as no-op for numbers.",
        )
    if q == "What is +5?":
        return _tail(
            "Unary plus returns the value unchanged for int.",
            "+5 is 5.",
            "Rarely needed; included for symmetry with unary -.",
            "1. Apply unary +.",
            "Unary + on int.",
            "Clarifying positive terms in formatted expressions.",
            "Coerces custom objects if __pos__ defined.",
            "O(1).",
            "+True is 1.",
            "Do not confuse with string concatenation +.",
        )
    if q == "What is --5?":
        return _tail(
            "Double unary minus: -(-5) -> 5.",
            "Right-to-left unary binding: first - applies to 5 -> -5, second negates to 5.",
            "Chained unaries stack.",
            "1. Inner -5. 2. Outer - -> 5.",
            "Unary - twice.",
            "Obfuscated sign flips in puzzles.",
            "---5 parses as -(-(-5)) -> -5.",
            "O(1).",
            "Readable code uses explicit signs or variables.",
            "Not bitwise -- (decrement) — Python has no ++.",
        )
    if q == "What is -(-5)?":
        return _tail(
            "Explicit parens show inner -5 then outer negation to 5.",
            "Same value as --5 with clarity.",
            "Parentheses do not change unary semantics beyond grouping.",
            "1. -5 inner. 2. negate -> 5.",
            "Nested unary.",
            "Teaching order of unary operations.",
            "Mixing with exponentiation: -2**2 is -(2**2).",
            "O(1).",
            "-(-(-5)) -> -5.",
            "Use spaces for readability with unary ops.",
        )
    if q == "What is 0 // 5?":
        return _tail(
            "Floor division 0 // 5 is 0 — floor of 0/5.",
            "0.",
            "Consistent with divmod(0,5).",
            "1. 0 divided by 5 floor -> 0.",
            "Single //.",
            "Zero chunks partitioning.",
            "0 // 0 raises ZeroDivisionError.",
            "O(1).",
            "5 // 0 raises.",
            "Negative numerators follow floor toward -inf.",
        )
    if q == "What is 5 // 1?":
        return _tail(
            "Dividing by 1 returns the numerator unchanged for ints.",
            "5 // 1 is 5.",
            "Floor and trunc agree for positive divisor 1.",
            "1. 5 // 1 -> 5.",
            "Single //.",
            "Unit normalization.",
            "Large ints still exact with divisor 1.",
            "O(1) big-int path may still allocate same value.",
            "5 // -1 is -5.",
            "True division 5/1 is 5.0.",
        )
    if q == "What is 0 % 5?":
        return _tail(
            "0 divided by 5 has remainder 0.",
            "0 % 5 is 0.",
            "Numerator zero yields remainder zero for non-zero divisor.",
            "1. 0 // 5 -> 0. 2. remainder 0.",
            "Single %.",
            "Clock math at origin.",
            "0 % 0 raises.",
            "O(1).",
            "5 % 0 raises.",
            "a % 1 is 0 for any integer a.",
        )
    if q == "What is 5 % 1?":
        return _tail(
            "Any integer mod 1 is 0 — multiples of 1 cover all integers with no remainder.",
            "5 % 1 is 0.",
            "Useful in periodic indexing with step 1.",
            "1. Floor divide 5/1 ->5. 2. remainder 0.",
            "Modulo 1.",
            "Fractional part analog via % 1 on floats.",
            "Negative numerators: still consistent pairing with //.",
            "O(1).",
            "3.5 % 1.0 -> 0.5 float behavior.",
            "Decimal modulo differs in financial rules.",
        )
    if q == "What is round(2.5)?":
        return _tail(
            "Tie to even: 2.5 is halfway between 2 and 3; nearest even integer is 2.",
            "round(2.5) -> 2 in Python 3.",
            "Differs from school rounding always away from zero.",
            "1. Detect tie. 2. Pick even -> 2.",
            "round unary.",
            "Statistical aggregation bias reduction.",
            "Binary float may not represent 2.5 exactly — still follows round rules.",
            "O(1).",
            "round(3.5) -> 4.",
            "Use Decimal for decimal-half rules.",
        )
    if q == "What is round(3.5)?":
        return _tail(
            "Halfway tie between 3 and 4 — choose even 4.",
            "round(3.5) -> 4.",
            "Pairs with round(2.5)->2 to show tie-breaking.",
            "1. Tie at .5. 2. Even outcome 4.",
            "round unary.",
            "Teaching bankers rounding.",
            "Multiple rounding steps compound bias differently than always-up.",
            "O(1).",
            "round(-2.5) -> -2 (even).",
            "numpy.round may differ — ecosystem dependent.",
        )

    raise RuntimeError("unreachable")


def main() -> None:
    path = Path(__file__).resolve().parents[1] / "src/data/questions/level2.ts"
    text = path.read_text(encoding="utf-8")
    if text.count(BLOCK_START) != len(QUESTIONS):
        raise SystemExit(
            f"Expected {len(QUESTIONS)} generic blocks, found {text.count(BLOCK_START)}"
        )
    tails = [tail_for(q) for q in QUESTIONS]
    out = text
    for tail in tails:
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
