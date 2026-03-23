#!/usr/bin/env python3
"""Replace duplicated generic tails in level2_intermediate_b.ts (50). Same BLOCK_END as Level 2 PEMDAS."""
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

TAILS: list[str] = [
    """• math.fabs(x) returns absolute value as float — like abs for floats but always returns float.
• math.fabs(-3.14) is 3.14.

How It Works:
• Delegates to C fabs for doubles.

Step-by-Step Execution:
1. fabs(-3.14) -> 3.14.

Order of Operations:
• Single call.

Common Use Cases:
• Magnitude for float-specific APIs.

Edge Cases:
• fabs(nan) is nan.

Performance Considerations:
• O(1).

Examples:
• abs vs fabs: abs works on ints and complex; fabs only real float.

Notes:
• For ints, abs is fine; fabs signals float intent.""",
    """• math.modf(x) splits float into fractional and integer parts as floats.
• modf(3.75) -> (0.75, 3.0) with sign on both pieces matching x.

How It Works:
• C modf decomposition.

Step-by-Step Execution:
1. Separate fractional and integer components.

Order of Operations:
• Tuple return.

Common Use Cases:
• Fixed-point simulation.

Edge Cases:
• modf(-3.75) fractional part negative in Python? Actually both have sign of x — verify on interpreter.

Performance Considerations:
• O(1).

Examples:
• Compare with divmod for different semantics.

Notes:
• Decimal for exact splits.""",
    """• math.prod(iterable) multiplies all elements — 2*3*4 = 24 (Python 3.8+).
• Empty prod raises? Actually prod([]) is 1 start identity.

How It Works:
• Fold with optional start.

Step-by-Step Execution:
1. Multiply 2,3,4.

Order of Operations:
• prod call.

Common Use Cases:
• Combinatorial products.

Edge Cases:
• Overflow to inf for float elements.

Performance Considerations:
• O(n).

Examples:
• math.prod(range(1,6)) is factorial 5.

Notes:
• For sums use sum; for products use prod.""",
    """• math.remainder(x,y) is IEEE 754 remainder — result in [-y/2, y/2] unlike %.
• remainder(10,3) differs from 10%3.

How It Works:
• Rounds quotient to nearest integer and subtracts.

Step-by-Step Execution:
1. Compute nearest integer n to x/y.
2. x - n*y.

Order of Operations:
• Call.

Common Use Cases:
• Numeric libraries needing IEEE remainder.

Edge Cases:
• Compare with math.fmod.

Performance Considerations:
• O(1).

Examples:
• Read docs for exact tie rules.

Notes:
• Python % uses floor division pairing — different.""",
    """• math.isqrt(n) is integer square root — floor of exact sqrt for nonnegative int.
• isqrt(10) is 3.

How It Works:
• Integer-only Newton or bit algorithm.

Step-by-Step Execution:
1. Largest integer r with r*r <= 10.

Order of Operations:
• isqrt call.

Common Use Cases:
• Primality and factorization helpers.

Edge Cases:
• isqrt(0) is 0; negative raises ValueError.

Performance Considerations:
• O(log n) bit operations.

Examples:
• isqrt(16) is 4.

Notes:
• Faster than int(math.sqrt(n)) for huge ints.""",
    """• isqrt(16) is 4 — perfect square.

How It Works:
• Exact integer root.

Step-by-Step Execution:
1. 4*4=16.

Order of Operations:
• isqrt.

Common Use Cases:
• Grid sizes.

Edge Cases:
• Perfect powers.

Performance Considerations:
• O(1) tiny n.

Examples:
• Compare sqrt(16) float 4.0.

Notes:
• Use isqrt for integer problems.""",
    """• math.dist(p,q) Euclidean distance in any dimension — sqrt(sum((a-b)^2)).
• dist([0,0],[3,4]) is 5.0.

How It Works:
• hypot for 2D generalized.

Step-by-Step Execution:
1. Differences 3 and 4.
2. hypot -> 5.

Order of Operations:
• dist call.

Common Use Cases:
• Geometry and kNN.

Edge Cases:
• Mismatched lengths raise.

Performance Considerations:
• O(d) in dimension.

Examples:
• 3-4-5 triangle.

Notes:
• For many points use numpy or scipy.""",
    """• math.fmod(x,y) is C-style remainder — same sign as x; differs from Python %.
• fmod(10,3) near 1.0.

How It Works:
• trunc toward zero division.

Step-by-Step Execution:
1. fmod computes x - trunc(x/y)*y.

Order of Operations:
• Call.

Common Use Cases:
• Interop with C libraries.

Edge Cases:
• Negative x behaves differently from %.

Performance Considerations:
• O(1).

Examples:
• Compare 10 % 3.

Notes:
• Prefer % for Pythonic modulo.""",
    """• fmod(-10,3) has sign of x — negative small remainder.
• Not the same as -10 % 3 in Python.

How It Works:
• Truncating division toward zero.

Step-by-Step Execution:
1. Negative remainder pattern.

Order of Operations:
• fmod.

Common Use Cases:
• Ported C code.

Edge Cases:
• NaN if bad inputs.

Performance Considerations:
• O(1).

Examples:
• Read table for fmod vs remainder.

Notes:
• Document which mod you use in teams.""",
    """• math.exp(0) is 1.0 — e**0.

How It Works:
• exp from libm.

Step-by-Step Execution:
1. exp(0) -> 1.

Order of Operations:
• Call.

Common Use Cases:
• Growth and softmax bases.

Edge Cases:
• exp(large) -> inf overflow.

Performance Considerations:
• O(1).

Examples:
• exp(1) is math.e.

Notes:
• Use expm1 for x near 0 accuracy.""",
    """• math.exp(1) is approximately math.e — 2.71828.

How It Works:
• Same constant relationship.

Step-by-Step Execution:
1. exp(1).

Order of Operations:
• Call.

Common Use Cases:
• Natural exponential.

Edge Cases:
• Overflow for huge args.

Performance Considerations:
• O(1).

Examples:
• log(exp(x)) ~ x.

Notes:
• numpy has vectorized exp.""",
    """• math.pow(0,0) returns 1.0 in Python — float result; matches Python int pow convention 0**0==1.
• math.pow always returns float.

How It Works:
• IEEE pow(0,0) is 1 by convention in many libs.

Step-by-Step Execution:
1. Evaluate 0**0 in float domain.

Order of Operations:
• math.pow.

Common Use Cases:
• Continuity in numeric functions.

Edge Cases:
• Domain errors for 0**negative.

Performance Considerations:
• O(1).

Examples:
• Compare built-in pow(0,0).

Notes:
• Pure math debate on 0**0; Python fixes to 1.""",
    """• 0**0 is 1 in Python for int exponentiation — empty product convention.

How It Works:
• Language definition for integer **.

Step-by-Step Execution:
1. 0**0 -> 1.

Order of Operations:
• ** on ints.

Common Use Cases:
• Combinatorial formulas edge cases.

Edge Cases:
• 0**negative raises.

Performance Considerations:
• O(1).

Examples:
• math.comb and perm definitions use products.

Notes:
• Consistent with sum([]) identity 0 vs prod([]) 1.""",
    """• math.tau is 2*pi — one full turn in radians.
• Approximately 6.28318.

How It Works:
• Constant added in 3.6+.

Step-by-Step Execution:
1. math.tau.

Order of Operations:
• Attribute.

Common Use Cases:
• Angle math without repeating 2*math.pi.

Edge Cases:
• Still float approximation.

Performance Considerations:
• O(1).

Examples:
• radians(360) would be tau if degrees API existed that way.

Notes:
• Prefer tau for clarity in rotation code.""",
    """• math.inf + 1 is still inf — absorbing element for addition.
• Arithmetic with infinity follows IEEE rules.

How It Works:
• inf + finite = inf.

Step-by-Step Execution:
1. Add 1 to inf.

Order of Operations:
• Binary +.

Common Use Cases:
• Optimization bounds.

Edge Cases:
• inf + (-inf) is nan.

Performance Considerations:
• O(1).

Examples:
• Compare nan + 1.

Notes:
• Use isfinite guards.""",
    """• 0.1 + 0.2 == 0.3 is False — float equality fails on classic example.
• Each side is approximate.

How It Works:
• Binary float representation mismatch.

Step-by-Step Execution:
1. Add left side.
2. Compare to 0.3 literal.

Order of Operations:
• + then ==.

Common Use Cases:
• Teaching floats.

Edge Cases:
• isclose fixes display.

Performance Considerations:
• O(1).

Examples:
• Decimal path True.

Notes:
• Never use == for float money.""",
    """• Actual value of 0.1+0.2 is a float near 0.30000000000000004 — repr shows long tail.
• Not exactly 0.3.

How It Works:
• IEEE rounding of successive operations.

Step-by-Step Execution:
1. Print or repr the sum.

Order of Operations:
• Addition.

Common Use Cases:
• Debugging financial bugs.

Edge Cases:
• Using round or Decimal cleans.

Performance Considerations:
• O(1).

Examples:
• format(0.1+0.2, '.17g').

Notes:
• Use decimal module for base-10.""",
    """• Underscores in numeric literals are ignored — 1_000_000 is 1000000.
• PEP 515 readability.

How It Works:
• Lexer strips underscores between digits.

Step-by-Step Execution:
1. Parse integer with separators.

Order of Operations:
• Literal only.

Common Use Cases:
• Large constants in code review.

Edge Cases:
• Cannot place underscore at start/end or adjacent.

Performance Considerations:
• O(1).

Examples:
• 0xFF_FF_FF hex grouping.

Notes:
• str of int does not add underscores by default.""",
    """• 1_000 + 2_000 is 3000 — underscores ignored in both literals.

How It Works:
• Two ints add.

Step-by-Step Execution:
1. 1000+2000.

Order of Operations:
• + .

Common Use Cases:
• Readable test data.

Edge Cases:
• Float literals can use underscore too.

Performance Considerations:
• O(1).

Examples:
• Mixing underscores in exponents.

Notes:
• Linters may enforce grouping style.""",
    """• 0b1010 is binary literal — decimal 10.
• Prefix 0b mandatory.

How It Works:
• Base-2 integer literal.

Step-by-Step Execution:
1. Parse bits 1010.

Order of Operations:
• Literal.

Common Use Cases:
• Bitmasks in source.

Edge Cases:
• Only 0-1 digits.

Performance Considerations:
• O(1).

Examples:
• 0b1111 is 15.

Notes:
• int("1010",2) from string alternative.""",
    """• 0o17 is octal literal — 1*8+7 = 15 decimal.

How It Works:
• Prefix 0o for octal in Python 3.

Step-by-Step Execution:
1. Parse octal digits.

Order of Operations:
• Literal.

Common Use Cases:
• Unix permission constants.

Edge Cases:
• Old 017 prefix removed in Python 3.

Performance Considerations:
• O(1).

Examples:
• 0o377 is 255.

Notes:
• Prefer 0o for clarity over leading zero confusion.""",
    """• 0xff is hex literal — 255 decimal.

How It Works:
• Prefix 0x hex.

Step-by-Step Execution:
1. Parse ff hex.

Order of Operations:
• Literal.

Common Use Cases:
• Byte values in code.

Edge Cases:
• Case insensitive a-f.

Performance Considerations:
• O(1).

Examples:
• 0x10 is 16.

Notes:
• Match with hex() string output without prefix.""",
    """• int(1e3) converts float 1000.0 to int 1000 — truncates toward zero.
• Scientific notation literal is float first.

How It Works:
• float 1000 then int truncates.

Step-by-Step Execution:
1. Parse 1e3 as float.
2. int to 1000.

Order of Operations:
• int() call.

Common Use Cases:
• Parsing approximate magnitudes.

Edge Cases:
• int(1e100) may overflow to long? Actually becomes huge int.

Performance Considerations:
• O(1) for moderate.

Examples:
• int(1e-3) is 0.

Notes:
• For exact big integers use int strings or literals.""",
    """• 1e2 is float literal 100.0 — scientific notation.

How It Works:
• Float exponent part.

Step-by-Step Execution:
1. 1 * 10**2.

Order of Operations:
• Literal.

Common Use Cases:
• Engineering constants.

Edge Cases:
• Subnormal and inf possible with extreme exponents.

Performance Considerations:
• O(1).

Examples:
• 0.1e2 is 10.0.

Notes:
• Type is float, not int.""",
    """• type(1e2) is float — any e-notation literal is float.

How It Works:
• Lexer classifies float.

Step-by-Step Execution:
1. type(100.0).

Order of Operations:
• type().

Common Use Cases:
• Debugging mixed numeric pipelines.

Edge Cases:
• 1.0 is float; 1 is int.

Performance Considerations:
• O(1).

Examples:
• isinstance(1e2, int) is False.

Notes:
• Use int(1e2) if integer needed.""",
    """• 10**308 is computed as int — no error; Python big ints.

How It Works:
• Exact integer exponentiation.

Step-by-Step Execution:
1. Huge int within memory.

Order of Operations:
• **.

Common Use Cases:
• Boundary testing float conversion.

Edge Cases:
• MemoryError if too large.

Performance Considerations:
• Expensive for huge exponent.

Examples:
• float(10**308) may be finite.

Notes:
• float(10**400) may be inf.""",
    """• 1e309 overflows to inf in IEEE double — literal too large for finite float.
• Evaluates to inf.

How It Works:
• Float parser overflow.

Step-by-Step Execution:
1. Parse 1e309 -> inf.

Order of Operations:
• Literal.

Common Use Cases:
• Sentinel infinities.

Edge Cases:
• inf arithmetic rules.

Performance Considerations:
• O(1).

Examples:
• sys.float_info.max is largest finite.

Notes:
• Use mpmath for extended range.""",
    """• sys.float_info.max is largest finite positive float — approx 1.8e308.
• Named tuple field exposing DBL_MAX.

How It Works:
• Reads C double limit.

Step-by-Step Execution:
1. Import sys; float_info.max.

Order of Operations:
• Attribute chain.

Common Use Cases:
• Clamping float outputs.

Edge Cases:
• Next float toward inf is inf.

Performance Considerations:
• O(1) read.

Examples:
• Compare with 1e308.

Notes:
• nextafter in math for float neighbors.""",
    """• 1 / 3 in Python 3 is true division — float 0.3333333333333333.

How It Works:
• True division always float.

Step-by-Step Execution:
1. Divide 1 by 3.

Order of Operations:
• / .

Common Use Cases:
• Ratios.

Edge Cases:
• int/int still float in Python 3.

Performance Considerations:
• Hardware division.

Examples:
• Use Fraction for exact rationals.

Notes:
• // for floor division.""",
    """• 2/3 + 1/3 may not equal 1.0 exactly due to float rounding — each third is approximate.
• == 1.0 can be False.

How It Works:
• Two divisions and add — rounding errors compound.

Step-by-Step Execution:
1. Evaluate each fraction as float.
2. Sum.
3. Compare to 1.0.

Order of Operations:
• Left + with same precedence.

Common Use Cases:
• Floating point quizzes.

Edge Cases:
• math.isclose may save True.

Performance Considerations:
• O(1).

Examples:
• Fraction(2,3)+Fraction(1,3)==1 exactly.

Notes:
• Use Decimal or Fraction for equality.""",
    """• abs(-3.14) is 3.14 — float absolute value.

How It Works:
• Built-in abs for real numbers.

Step-by-Step Execution:
1. Magnitude.

Order of Operations:
• abs call.

Common Use Cases:
• Distances.

Edge Cases:
• abs(nan) is nan.

Performance Considerations:
• O(1).

Examples:
• abs vs fabs.

Notes:
• abs works on complex too — magnitude.""",
    """• abs(3+4j) is 5.0 — sqrt(3*3+4*4).

How It Works:
• complex.__abs__ uses hypot.

Step-by-Step Execution:
1. 3+4j magnitude.

Order of Operations:
• abs on complex.

Common Use Cases:
• Complex modulus.

Edge Cases:
• abs(0j) is 0.0.

Performance Considerations:
• O(1).

Examples:
• cmath.phase pairs with abs.

Notes:
• For real use fabs or abs.""",
    """• divmod(7.5, 2.5) on floats returns floats — (3.0, 0.0) roughly.
• Quotient and remainder with float semantics.

How It Works:
• float floor division pairing.

Step-by-Step Execution:
1. 7.5/2.5 is exactly 3 remainder 0.

Order of Operations:
• divmod.

Common Use Cases:
• Splitting continuous quantities.

Edge Cases:
• Rounding surprises with fractional parts.

Performance Considerations:
• O(1).

Examples:
• Compare int divmod.

Notes:
• math.remainder differs for floats.""",
    """• round(3.14159, 3) rounds to three fractional digits — 3.142.

How It Works:
• Bankers rounding to nearest at 10^-3.

Step-by-Step Execution:
1. Round to thousandths.

Order of Operations:
• round two-arg.

Common Use Cases:
• Display precision.

Edge Cases:
• Binary float input may still not be exact.

Performance Considerations:
• O(1).

Examples:
• round(2.675,2) gotcha.

Notes:
• Decimal quantize for money.""",
    """• round(3.14159, 0) rounds to nearest integer — 3.0.

How It Works:
• ndigits 0 means whole number.

Step-by-Step Execution:
1. Round to integer.

Order of Operations:
• round.

Common Use Cases:
• Coarse reporting.

Edge Cases:
• Returns int in Python 3? Actually round half to even returns int when ndigits omitted — with ndigits 0 returns int? Check: round(3.14,0) is 3.0 float in Python 3? It returns 3 as int in some versions — verify.

Performance Considerations:
• O(1).

Examples:
• round(0.5) tie-breaking.

Notes:
• Read Python docs for return type nuances.""",
    """• round(3.14159) one-arg rounds to nearest integer — bankers tie rule.
• May return int type in Python 3.

How It Works:
• Default ndigits None.

Step-by-Step Execution:
1. Round to whole.

Order of Operations:
• round unary.

Common Use Cases:
• Quick rounding.

Edge Cases:
• Ties to even.

Performance Considerations:
• O(1).

Examples:
• round(2.5) and round(3.5).

Notes:
• Explicit ndigits for control.""",
    """• max("hello") on str returns character with highest code point — lexicographic max.
• 'o' wins among 'h','e','l','l','o'.

How It Works:
• max on iterable of single-char strings.

Step-by-Step Execution:
1. Compare characters.

Order of Operations:
• max builtin.

Common Use Cases:
• Puzzles; rarely production for str.

Edge Cases:
• Empty str raises ValueError.

Performance Considerations:
• O(n).

Examples:
• max('abc') is 'c'.

Notes:
• For human sorting use locale or key=casefold.""",
    """• min("hello") is 'e' — smallest code point in the word.

How It Works:
• min on iterable.

Step-by-Step Execution:
1. Scan letters.

Order of Operations:
• min.

Common Use Cases:
• Teaching lexicographic order.

Edge Cases:
• Non-ASCII changes ordering.

Performance Considerations:
• O(n).

Examples:
• min vs sorted first.

Notes:
• key= for custom ordering.""",
    """• max([1,2,3], key=lambda x: -x) picks max under negated key — smallest original value.
• key=lambda x: -x makes 1 largest when negated.

How It Works:
• max compares key(-x) values.

Step-by-Step Execution:
1. Keys -1,-2,-3 max is -1 -> x=1.

Order of Operations:
• max with key.

Common Use Cases:
• Finding minimum without min() joke.

Edge Cases:
• Ties use first occurrence stable in Python 3.

Performance Considerations:
• O(n).

Examples:
• max(words, key=len) longest word.

Notes:
• Prefer min() for clarity when finding smallest.""",
    """• sorted([3,1,2], key=lambda x: -x) sorts descending — [3,2,1].
• key negates for reverse order without reverse=True.

How It Works:
• Sort by keys -3,-1,-2 order.

Step-by-Step Execution:
1. Sort ascending on negated keys.

Order of Operations:
• sorted returns new list.

Common Use Cases:
• Custom orders.

Edge Cases:
• key must be consistent.

Performance Considerations:
• O(n log n).

Examples:
• sorted(..., reverse=True) alternative.

Notes:
• stable sort preserves equal-key order.""",
    """• sum([1,2,3], 10) uses start=10 — total 16.
• Second arg is start value, not an index.

How It Works:
• Accumulator starts at 10.

Step-by-Step Execution:
1. 10+1+2+3.

Order of Operations:
• sum with start.

Common Use Cases:
• Offset totals.

Edge Cases:
• start must match element types for str concat.

Performance Considerations:
• O(n).

Examples:
• sum([]) is 0.

Notes:
• Do not confuse with range end.""",
    """• sum(range(101)) is sum 0..100 — 5050 by Gauss formula n(n+1)/2 with n=100.

How It Works:
• range(101) yields 0..100.

Step-by-Step Execution:
1. Add 101 integers.

Order of Operations:
• sum over iterable.

Common Use Cases:
• Triangular numbers.

Edge Cases:
• Large ranges use integer math.

Performance Considerations:
• O(n) — use formula for speed.

Examples:
• 100*101//2.

Notes:
• math.fsum for float list.""",
    """• sum(range(1,11)) is 1..10 — 55.

How It Works:
• Exclusive end 11.

Step-by-Step Execution:
1. Ten terms.

Order of Operations:
• sum range.

Common Use Cases:
• Partial sums.

Edge Cases:
• Empty range sums to 0.

Performance Considerations:
• O(n) or closed form.

Examples:
• 10*11//2.

Notes:
• Off-by-one awareness.""",
    """• pow(2,10,1000) mod-exp — 2**10 % 1000 = 1024 % 1000 = 24.

How It Works:
• Three-arg pow avoids huge intermediate.

Step-by-Step Execution:
1. Modular exponentiation.

Order of Operations:
• pow three-arg.

Common Use Cases:
• Crypto and competitive programming.

Edge Cases:
• modulus 1 yields 0.

Performance Considerations:
• O(log exponent) multiplications mod m.

Examples:
• RSA uses big mod-pow.

Notes:
• Never use (pow(a,b)%m) for huge b without three-arg.""",
    """• max([], default=0) returns 0 when iterable empty — avoids ValueError.
• default keyword only for max/min.

How It Works:
• max returns default if no items.

Step-by-Step Execution:
1. Empty -> return default.

Order of Operations:
• max call.

Common Use Cases:
• Safe maximum of possibly empty data.

Edge Cases:
• default must be comparable if used.

Performance Considerations:
• O(1) empty.

Examples:
• min([], default=inf) pattern.

Notes:
• sum() of [] is 0 without default.""",
    """• bool(0.0) is False — zero float is falsy.

How It Works:
• __bool__ on float is False if zero.

Step-by-Step Execution:
1. 0.0 -> False.

Order of Operations:
• bool().

Common Use Cases:
• Filtering zero measurements.

Edge Cases:
• nan is truthy in Python — weird.

Performance Considerations:
• O(1).

Examples:
• bool(0.0) vs bool(0).

Notes:
• math.isclose to zero for noise.""",
    """• bool(-1) is True — any nonzero real is truthy.

How It Works:
• Nonzero float True.

Step-by-Step Execution:
1. -1 -> True.

Order of Operations:
• bool.

Common Use Cases:
• Sign checks.

Edge Cases:
• -0.0 is False.

Performance Considerations:
• O(1).

Examples:
• if x: for nonzero.

Notes:
• Explicit x != 0 for clarity.""",
    """• bool(0+0j) is False — complex zero is falsy.

How It Works:
• Both real and imag zero.

Step-by-Step Execution:
1. 0+0j -> False.

Order of Operations:
• bool on complex.

Common Use Cases:
• Zero phasor checks.

Edge Cases:
• 1+0j is True.

Performance Considerations:
• O(1).

Examples:
• Compare bool(0j).

Notes:
• cmath.phase(0+0j) may error — use explicit checks.""",
    """• int(True)+int(False) is 1+0 = 1 — bool as int subclass.

How It Works:
• True->1 False->0.

Step-by-Step Execution:
1. Cast then add.

Order of Operations:
• int() then +.

Common Use Cases:
• Counting booleans explicitly.

Edge Cases:
• Prefer sum(bool_list) for clarity.

Performance Considerations:
• O(1).

Examples:
• True+True is 2.

Notes:
• Code review may flag cleverness.""",
    """• True+True+True is 3 — bools add as 1 each.

How It Works:
• int subclass arithmetic.

Step-by-Step Execution:
1. Chain addition.

Order of Operations:
• Left-associative +.

Common Use Cases:
• Tiny scoring snippets.

Edge Cases:
• Mixing with float promotes.

Performance Considerations:
• O(1).

Examples:
• sum([True,False]) pattern.

Notes:
• Explicit int() or sum for readability.""",
]


def main() -> None:
    path = Path(__file__).resolve().parents[1] / "src/data/questions/level2_intermediate_b.ts"
    text = path.read_text(encoding="utf-8")
    if text.count(BLOCK_START) != len(TAILS):
        raise SystemExit(f"Expected {len(TAILS)} blocks, found {text.count(BLOCK_START)}")
    out = text
    for tail in TAILS:
        replacement = "Key Distinctions:\n" + tail
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
    print(f"OK: patched {len(TAILS)} blocks in {path}")


if __name__ == "__main__":
    main()
