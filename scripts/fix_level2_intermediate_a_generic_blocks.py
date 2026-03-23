#!/usr/bin/env python3
"""Replace duplicated generic tails in level2_intermediate_a.ts (50). Same BLOCK_END as Level 2 PEMDAS."""
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
    """• math.sqrt(16) returns 4.0 as float — the nonnegative square root.
• import math; attribute access then call.

How It Works:
• Delegates to libm sqrt for doubles; may set errno on domain error in C.

Step-by-Step Execution:
1. Load math module.
2. Call sqrt(16) -> 4.0.

Order of Operations:
• Attribute access on math, then function call.

Common Use Cases:
• Geometry distances and RMS norms.

Edge Cases:
• sqrt of negative raises ValueError in math; use cmath.sqrt for complex.

Performance Considerations:
• Hardware sqrt on typical CPUs.

Examples:
• math.sqrt(2) is irrational — float approximation.

Notes:
• For integers, **0.5 or isqrt for exact integer floor root.""",
    """• math.sqrt(2) returns a float approximation — not a symbolic exact radical.
• Binary float cannot represent sqrt(2) exactly.

How It Works:
• IEEE double closest to the true square root.

Step-by-Step Execution:
1. Evaluate sqrt(2) in double precision.

Order of Operations:
• Function call.

Common Use Cases:
• Any numerical code that needs a real number, not a proof.

Edge Cases:
• Last bit may differ by platform — use isclose for comparisons.

Performance Considerations:
• One sqrt call.

Examples:
• math.isqrt(2) for integer floor of square root — different function.

Notes:
• sympy.sqrt(2) for exact algebra — not math.""",
    """• math.floor(x) returns greatest integer less than or equal to x — toward negative infinity.
• floor(3.7) is 3.0 as float return type in Python 3? Actually returns int in Python 3 for floor — verify: math.floor returns int.

How It Works:
• C floor function semantics.

Step-by-Step Execution:
1. 3.7 -> floor 3.

Order of Operations:
• Single call.

Common Use Cases:
• Discretizing buckets and grid indices.

Edge Cases:
• floor(-3.1) is -4, not -3.

Performance Considerations:
• O(1).

Examples:
• Compare int(3.7) truncates toward zero.

Notes:
• math.floor returns int in Python 3.""",
    """• floor(-3.7) is -4 — more negative than trunc toward zero.
• Distinct from int(-3.7) which is -3.

How It Works:
• Floor toward negative infinity.

Step-by-Step Execution:
1. -3.7 lies between -4 and -3 floor picks -4.

Order of Operations:
• Unary - on result? Call floor on -3.7.

Common Use Cases:
• Correcting indexing for negative offsets.

Edge Cases:
• Exact integers: floor(-3.0) is -3.

Performance Considerations:
• O(1).

Examples:
• Plotting floor division with negatives.

Notes:
• Use math.floor explicitly when you need floor semantics, not trunc.""",
    """• math.ceil(x) returns smallest integer greater than or equal to x.
• ceil(3.2) is 4.

How It Works:
• Smallest integer not below x in the upward direction.

Step-by-Step Execution:
1. 3.2 -> ceil 4.

Order of Operations:
• Single call.

Common Use Cases:
• Allocating enough capacity for partial units.

Edge Cases:
• ceil(-3.2) is -3 (less negative).

Performance Considerations:
• O(1).

Examples:
• Pair with floor for bracketing.

Notes:
• math.ceil returns int in Python 3.""",
    """• ceil(-3.2) is -3 — closer to zero than floor would be.
• Stays on the number line toward +inf for ceil.

How It Works:
• Least integer >= x.

Step-by-Step Execution:
1. -3.2 between -4 and -3 -> ceil picks -3.

Order of Operations:
• math.ceil call.

Common Use Cases:
• Rounding up debt or load toward zero.

Edge Cases:
• Integer input: ceil(5) is 5.

Performance Considerations:
• O(1).

Examples:
• Contrast floor(-3.2) -> -4.

Notes:
• For rounding to nearest, use round or Decimal.""",
    """• math.trunc(x) truncates toward zero — drops fractional part.
• trunc(3.7) is 3; same as int(3.7) for floats.

How It Works:
• Toward zero chop, same as C trunc.

Step-by-Step Execution:
1. Magnitude 3.7 -> 3 toward zero.

Order of Operations:
• Unary trunc.

Common Use Cases:
• Converting to integer toward zero explicitly.

Edge Cases:
• trunc(-3.7) is -3, unlike floor.

Performance Considerations:
• O(1).

Examples:
• int and trunc agree for finite floats.

Notes:
• math.trunc exists for clarity over int(x).""",
    """• trunc(-3.7) is -3, toward zero — not -4 floor.
• Preserves sign direction toward zero.

How It Works:
• Drop fractional magnitude, keep sign of integer part.

Step-by-Step Execution:
1. -3.7 -> -3.

Order of Operations:
• math.trunc.

Common Use Cases:
• Graphics coordinate clamping toward origin.

Edge Cases:
• Subnormals — still trunc.

Performance Considerations:
• O(1).

Examples:
• Compare floor(-3.7) -> -4.

Notes:
• Choose trunc vs floor vs ceil by business rule.""",
    """• For positive x, floor(x) equals int(x) truncation — both yield 3 for 3.7.
• Same result for nonnegative numbers.

How It Works:
• int() truncates toward zero; floor goes to -inf — for positive they match.

Step-by-Step Execution:
1. floor(3.7) -> 3; int(3.7) -> 3.

Order of Operations:
• Two separate calls compared in quiz.

Common Use Cases:
• Positive-only pipelines where both work.

Edge Cases:
• Negative x breaks equality — see next question.

Performance Considerations:
• Both O(1).

Examples:
• floor(3.0) == int(3.0) == 3.

Notes:
• Do not assume equality for negative.""",
    """• int(-3.7) truncates toward zero -> -3.
• floor(-3.7) is -4 toward negative infinity.
• Difference of 1 in magnitude.

How It Works:
• int uses float __trunc__ toward zero; floor uses floor.

Step-by-Step Execution:
1. Compare -3 vs -4 for same input.

Order of Operations:
• Two builtins.

Common Use Cases:
• Choosing correct rounding direction for negative financial amounts.

Edge Cases:
• Exactly halfway integers: int(-3.0) is -3, floor is -3.

Performance Considerations:
• O(1).

Examples:
• Always document which rounding rule you use.

Notes:
• Decimal quantize with explicit rounding mode for money.""",
    """• math.pi is a float constant approximating pi — 3.14159... to machine precision.
• First five digits after decimal often printed as 14159.

How It Works:
• Stored constant in math module at import time.

Step-by-Step Execution:
1. Access math.pi.

Order of Operations:
• Attribute.

Common Use Cases:
• Trigonometry and circle geometry.

Edge Cases:
• Not an exact symbolic pi — use math.tau for 2pi constant.

Performance Considerations:
• O(1) read.

Examples:
• round(math.pi, 5) for five decimal places.

Notes:
• For arbitrary precision use decimal or mpmath.""",
    """• math.e is float base of natural logarithms — ~2.71828.
• First five decimals: 2.71828.

How It Works:
• Module constant.

Step-by-Step Execution:
1. math.e.

Order of Operations:
• Attribute read.

Common Use Cases:
• exp and log growth models.

Edge Cases:
• Not exact rational — float.

Performance Considerations:
• O(1).

Examples:
• math.log(math.e) == 1.0.

Notes:
• numpy has e too — different object if mixing.""",
    """• type(math.inf).__name__ is 'float' — inf is a float special value.
• math.inf is same as float('inf').

How It Works:
• math.inf is a float singleton-like value.

Step-by-Step Execution:
1. type(math.inf).__name__ -> 'float'.

Order of Operations:
• type then __name__.

Common Use Cases:
• Logging type names in debug.

Edge Cases:
• math.inf is float; not a separate class.

Performance Considerations:
• O(1).

Examples:
• math.isinf(math.inf) True.

Notes:
• Compare with numpy.inf separately in numpy code.""",
    """• Any finite float is less than positive infinity; math.inf > 10**100 is True.
• Huge int compared promotes or compares by value rules.

How It Works:
• Total order: finite < +inf.

Step-by-Step Execution:
1. Evaluate huge int.
2. Compare to inf.

Order of Operations:
• Comparison operator.

Common Use Cases:
• Sentinel max bounds.

Edge Cases:
• inf == inf True; inf > x for finite x.

Performance Considerations:
• Big int creation costly; comparison cheap.

Examples:
• math.inf > float('inf') is False — equal.

Notes:
• Do not compare inf with nan using <.""",
    """• -math.inf is negative infinity; less than any finite negative huge magnitude.
• -inf < -10**100 is True.

How It Works:
• Ordering on negative infinity.

Step-by-Step Execution:
1. -10**100 is finite negative.
2. -inf is less.

Order of Operations:
• Unary - on math.inf then comparison.

Common Use Cases:
• Lower bounds in optimization.

Edge Cases:
• -inf == -inf True.

Performance Considerations:
• O(1) compare after building int if needed.

Notes:
• Watch cost of constructing 10**100 for trivial compare.""",
    """• type(math.nan).__name__ is 'float' — nan is a float special.
• nan is not a separate class.

How It Works:
• float nan payload.

Step-by-Step Execution:
1. type(math.nan).__name__.

Order of Operations:
• type and attribute.

Common Use Cases:
• Debugging type of nan.

Edge Cases:
• math.nan is float('nan') bit pattern may differ.

Performance Considerations:
• O(1).

Examples:
• math.isnan(float('nan')).

Notes:
• Use isnan not ==.""",
    """• nan == nan is False by IEEE rule — NaN is unordered with itself.
• Use math.isnan for detection.

How It Works:
• Comparison always false for equality with nan.

Step-by-Step Execution:
1. nan == nan -> False.

Order of Operations:
• == on floats.

Common Use Cases:
• Teaching why isnan exists.

Edge Cases:
• nan < x is also False.

Performance Considerations:
• O(1).

Examples:
• math.isnan(math.nan) True.

Notes:
• collections with nan keys behave oddly.""",
    """• math.isnan(math.nan) is True — predicate for NaN.
• Correct way to test.

How It Works:
• Checks IEEE nan flag.

Step-by-Step Execution:
1. isnan(nan) -> True.

Order of Operations:
• Function call.

Common Use Cases:
• Filtering bad data.

Edge Cases:
• isnan accepts float only — int raises.

Performance Considerations:
• O(1).

Examples:
• pandas uses numpy isnan often.

Notes:
• Do not use x == x for nan test — fails.""",
    """• math.isinf(math.inf) is True.
• Detects infinity.

How It Works:
• Checks infinite exponent pattern.

Step-by-Step Execution:
1. isinf(inf) -> True.

Order of Operations:
• Call.

Common Use Cases:
• Divergence detection.

Edge Cases:
• isinf(-inf) True as well.

Performance Considerations:
• O(1).

Examples:
• isinf(1e400) may be True as inf.

Notes:
• isfinite is the complement for strict checks.""",
    """• math.isfinite(3.14) is True — normal real number.
• Excludes inf and nan.

How It Works:
• Checks not inf and not nan.

Step-by-Step Execution:
1. isfinite(3.14) -> True.

Order of Operations:
• Function.

Common Use Cases:
• Validating numeric outputs before log or division.

Edge Cases:
• isfinite(nan) False.

Performance Considerations:
• O(1).

Examples:
• Filter list with isfinite.

Notes:
• math.isfinite preferred over manual checks.""",
    """• math.isfinite(inf) is False — infinity is not finite.
• Complement of isinf for strict finiteness.

How It Works:
• inf fails finite test.

Step-by-Step Execution:
1. isfinite(inf) -> False.

Order of Operations:
• Call.

Common Use Cases:
• Rejecting divergent iterations.

Edge Cases:
• nan also not finite.

Performance Considerations:
• O(1).

Examples:
• isfinite is the usual guard for real algorithms.

Notes:
• numpy has isfinite vectorized.""",
    """• math.log(1) is 0.0 — natural log of 1.
• Base e logarithm.

How It Works:
• log_e(1)=0.

Step-by-Step Execution:
1. log(1) -> 0.0.

Order of Operations:
• math.log single arg.

Common Use Cases:
• Log scales and entropy.

Edge Cases:
• log(0) raises ValueError.

Performance Considerations:
• libm log.

Examples:
• log(1, base) two-arg form exists.

Notes:
• math.log10 and log2 for other bases.""",
    """• math.log(math.e) is 1.0 — natural log of e is identity.
• Confirms ln base.

How It Works:
• ln(e)=1 exactly in reals; float may show 1.0.

Step-by-Step Execution:
1. log(e) -> 1.0.

Order of Operations:
• Attribute e then log.

Common Use Cases:
• Sanity checks in calculus code.

Edge Cases:
• math.e is float — tiny error possible in pathological builds.

Performance Considerations:
• O(1).

Examples:
• exp(log(x)) ~ x for positive x.

Notes:
• Use math.log1p for x near 0.""",
    """• math.log10(100) is 2.0 — base-10 logarithm.
• 10**2 = 100.

How It Works:
• log10 via libm.

Step-by-Step Execution:
1. log10(100) -> 2.0.

Order of Operations:
• Call.

Common Use Cases:
• Orders of magnitude, decibels.

Edge Cases:
• log10(0) raises.

Performance Considerations:
• O(1).

Examples:
• log10(1000) is 3.0.

Notes:
• For arbitrary base: log(x,b)=log(x)/log(b).""",
    """• math.log2(8) is 3.0 — log base 2.
• 2**3 = 8.

How It Works:
• Often implemented with bit tricks for exact powers of two.

Step-by-Step Execution:
1. log2(8) -> 3.0.

Order of Operations:
• Call.

Common Use Cases:
• Bit width and information theory.

Edge Cases:
• log2(0) raises.

Performance Considerations:
• Fast path for powers of 2.

Examples:
• (8).bit_length()-1 relates for exact powers.

Notes:
• int.bit_length differs from log2 floor.""",
    """• math.factorial(5) is 120 — 5*4*3*2*1.
• Not defined for negative ints; raises ValueError.

How It Works:
• Product of integers 1..n for n>=0; 0! = 1.

Step-by-Step Execution:
1. factorial(5) -> 120.

Order of Operations:
• Single call.

Common Use Cases:
• Permutations and combinatorics.

Edge Cases:
• Large n may be slow and huge — use lgamma approx for logs.

Performance Considerations:
• O(n) multiplications growing in size.

Examples:
• math.factorial(0) is 1.

Notes:
• math.comb and perm for selections without full factorial.""",
    """• math.gcd(12,8) is 4 — greatest common divisor nonnegative.
• gcd(0,0) is 0 in Python 3.9+.

How It Works:
• Euclidean algorithm on integers.

Step-by-Step Execution:
1. gcd reduces 12 and 8 to 4.

Order of Operations:
• gcd accepts multiple args in 3.9+.

Common Use Cases:
• Reducing fractions.

Edge Cases:
• Negative inputs use absolute values.

Performance Considerations:
• O(log min(a,b)) typical.

Examples:
• math.lcm built on gcd.

Notes:
• Use math.gcd for two-arg clarity.""",
    """• math.lcm(4,6) is 12 — least common multiple.
• 3.9+.

How It Works:
• lcm(a,b) = abs(a*b)//gcd(a,b) for nonzero.

Step-by-Step Execution:
1. lcm(4,6) -> 12.

Order of Operations:
• Call.

Common Use Cases:
• Synchronizing periodic events.

Edge Cases:
• lcm(0,x) is 0.

Performance Considerations:
• Uses gcd internally.

Examples:
• Align denominators.

Notes:
• For many numbers, reduce pairwise or use functools.""",
    """• math.comb(5,2) is 10 — binomial coefficient n choose k.
• Order does not matter.

How It Works:
• comb(n,k) = n!/(k!(n-k)!).

Step-by-Step Execution:
1. comb(5,2) -> 10.

Order of Operations:
• Call.

Common Use Cases:
• Counting subsets.

Edge Cases:
• k>n or k<0 -> 0 or ValueError per version.

Performance Considerations:
• Multiplicative formula avoids huge factorials.

Examples:
• comb(5,5) is 1.

Notes:
• math.perm for ordered selections.""",
    """• math.perm(5,2) is 20 — permutations P(n,k) = n!/(n-k)!.
• Order matters.

How It Works:
• 5*4 = 20.

Step-by-Step Execution:
1. perm(5,2) -> 20.

Order of Operations:
• Call.

Common Use Cases:
• Arrangements and race outcomes.

Edge Cases:
• k=0 returns 1.

Performance Considerations:
• Efficient multiplicative.

Examples:
• perm(5,5) is 120 = factorial(5).

Notes:
• comb counts unordered; perm counts ordered.""",
    """• divmod(17,5) is (3,2) — floor quotient and remainder pairing with // and %.
• 17 = 3*5 + 2.

How It Works:
• Same as level2 patterns; for positive divisor familiar.

Step-by-Step Execution:
1. 17//5 -> 3.
2. 17%5 -> 2.

Order of Operations:
• Single divmod.

Common Use Cases:
• Clock arithmetic.

Edge Cases:
• Negative dividend: follow Python floor division rules.

Performance Considerations:
• O(1).

Examples:
• Unpack q,r = divmod(17,5).

Notes:
• divmod on floats exists too.""",
    """• divmod(-17,5) pairs floor division with remainder; quotient -4, remainder 3 because (-4)*5+3=-17.
• Python floor division toward -inf.

How It Works:
• Consistent with // and % for negatives.

Step-by-Step Execution:
1. Compute floor div and remainder.

Order of Operations:
• divmod.

Common Use Cases:
• Negative index wrapping.

Edge Cases:
• Compare with math.fmod for float different semantics.

Performance Considerations:
• O(1).

Examples:
• Verify identity (a//b)*b + a%b == a.

Notes:
• Read table for negative modulo once.""",
    """• divmod(17,-5) yields quotient -4 and remainder -3? Verify: (-4)*(-5)+(-3)=20-3=17. Actually Python: 17 // -5 is -4, 17 % -5 is -3? Check: (-4)*(-5) + (-3) = 20-3=17. Yes.

How It Works:
• Floor toward -inf for // with negative divisor.

Step-by-Step Execution:
1. divmod(17,-5) -> (-4,-3) in Python 3.

Order of Operations:
• divmod.

Common Use Cases:
• Rare; tests understanding of pairing.

Edge Cases:
• Always verify with identity.

Performance Considerations:
• O(1).

Examples:
• Use divmod in puzzles, not by hand.

Notes:
• math.remainder for IEEE remainder different from float.""",
    """• round(2.675, 2) may be 2.67 due to bankers rounding and binary float representation of 2.675.
• Not always 2.68 — classic gotcha.

How It Works:
• Float may not be exactly 2.675; rounding then applies tie rules.

Step-by-Step Execution:
1. Represent 2.675 in binary.
2. Round to two decimals.

Order of Operations:
• round two-arg.

Common Use Cases:
• Teaching float + round interaction.

Edge Cases:
• Decimal quantize for exact decimal rounding.

Performance Considerations:
• O(1).

Examples:
• Use Decimal for invoices.

Notes:
• Display with format, store with Decimal.""",
    """• round(1234,-2) rounds to nearest hundred — 1200.
• Negative ndigits rounds left of decimal.

How It Works:
• Multiples of 10**(-ndigits) effectively.

Step-by-Step Execution:
1. 1234 to hundreds -> 1200.

Order of Operations:
• round two-arg.

Common Use Cases:
• Reporting coarse aggregates.

Edge Cases:
• Ties to even.

Performance Considerations:
• O(1).

Examples:
• round(1250,-2) may be 1200 (bankers).

Notes:
• Label axes when showing rounded thousands.""",
    """• round(1250,-2) with bankers rounding ties to even 1200.
• Not always 1300.

How It Works:
• Halfway between 1200 and 1300 picks even 1200.

Step-by-Step Execution:
1. Detect tie at 50.
2. Choose even hundred.

Order of Operations:
• round.

Common Use Cases:
• Statistical aggregation bias reduction.

Edge Cases:
• 1350 may round to 1400.

Performance Considerations:
• O(1).

Examples:
• Compare round(2.5) and round(3.5).

Notes:
• Document rounding mode for stakeholders.""",
    """• Same tie rule: 1350 to hundreds -> 1400 (even thousand is 1400?).
• Actually nearest hundreds: 1350 between 1300 and 1400; tie -> even 1400.

How It Works:
• Bankers rounding to even multiple.

Step-by-Step Execution:
1. Tie at midpoint between 1300 and 1400.

Order of Operations:
• round.

Common Use Cases:
• Census rounding.

Edge Cases:
• Confirm on interpreter — binary float may affect.

Performance Considerations:
• O(1).

Examples:
• Always verify with exact Decimal if disputes.

Notes:
• Use Decimal for legal rounding.""",
    """• round(0.1+0.2,1) rounds the sum of float approximations to one decimal.
• Often 0.3 after rounding even if 0.1+0.2 is not exact 0.3 before.

How It Works:
• Add floats then round to decimal place.

Step-by-Step Execution:
1. 0.1+0.2 float.
2. round to 1 decimal.

Order of Operations:
• + then round.

Common Use Cases:
• Displaying money approximations — still prefer Decimal.

Edge Cases:
• Edge float sums may still round wrong.

Performance Considerations:
• O(1).

Examples:
• math.isclose(0.1+0.2,1.0*0.3) may be False.

Notes:
• Decimal for currency.""",
    """• math.fsum uses extra precision to reduce error summing floats.
• More accurate than naive sum for many small terms.

How It Works:
• Kahan summation style algorithm in CPython.

Step-by-Step Execution:
1. fsum iterates with error compensation.

Order of Operations:
• fsum vs sum built-in.

Common Use Cases:
• Scientific totals where drift matters.

Edge Cases:
• Still returns float; not exact rational.

Performance Considerations:
• O(n) with more work per element than sum.

Examples:
• fsum of tiny increments.

Notes:
• For decimals use Decimal.""",
    """• math.copysign(1,-3) gives -1.0 — sign of -3 applied to magnitude 1.
• Same as earlier expert questions.

How It Works:
• copysign from libm.

Step-by-Step Execution:
1. Magnitude 1, sign negative -> -1.

Order of Operations:
• math.copysign.

Common Use Cases:
• Restoring sign after abs.

Edge Cases:
• copysign(1,0.0) is +1; copysign(1,-0.0) is -1.

Performance Considerations:
• O(1).

Examples:
• See float sign handling.

Notes:
• Consistent API across math module.""",
    """• pow(2,10) is 1024 — same as 2**10 for two args.
• Built-in pow.

How It Works:
• Exponentiation by squaring for ints.

Step-by-Step Execution:
1. 2**10 -> 1024.

Order of Operations:
• pow call.

Common Use Cases:
• Powers of two sizing.

Edge Cases:
• Three-arg pow mod — different path.

Performance Considerations:
• Optimized for large ints.

Examples:
• pow(2,10,1000) mod reduction.

Notes:
• math.pow always returns float — different.""",
    """• pow(2,-1) is 0.5 as float in Python 3 for int negative exponent? Actually 2**(-1) is 0.5 float.
• int pow with negative exponent yields float or Fraction? In Python 3, int negative pow returns float.

How It Works:
• Negative exponent reciprocates.

Step-by-Step Execution:
1. 2**(-1) -> 0.5.

Order of Operations:
• pow.

Common Use Cases:
• Halving and reciprocals.

Edge Cases:
• 0**negative raises ZeroDivisionError.

Performance Considerations:
• O(1) for small ints.

Examples:
• Use Fraction for exact rationals.

Notes:
• math.pow(2,-1) is 0.5 float.""",
    """• pow(2,0.5) is sqrt(2) as float — ** with fractional exponent uses float path.
• Yes, computes square root of 2 in float.

How It Works:
• pow(x,y) with float y uses float exponentiation.

Step-by-Step Execution:
1. 2**0.5 -> sqrt(2).

Order of Operations:
• ** or pow.

Common Use Cases:
• Root without importing math.

Edge Cases:
• Negative base with fractional exponent is complex.

Performance Considerations:
• libm pow.

Examples:
• Prefer math.sqrt for clarity for square root.

Notes:
• cmath.exp for complex roots.""",
    """• math.pow(2,3) is 8.0 always float — unlike built-in pow which returns int for int**int.
• math.pow coerces to float.

How It Works:
• Always returns float.

Step-by-Step Execution:
1. math.pow(2,3) -> 8.0.

Order of Operations:
• math.pow call.

Common Use Cases:
• When you need float type guarantee.

Edge Cases:
• math.pow can overflow to inf.

Performance Considerations:
• float path.

Examples:
• pow(2,3) is 8 int.

Notes:
• Prefer ** for integer exact powers.""",
    """• 2**0.5 and math.sqrt(2) both yield float sqrt(2); may differ in last bit.
• Generally equal with isclose.

How It Works:
• Different code paths — both libm quality.

Step-by-Step Execution:
1. Compare two float results.

Order of Operations:
• ** vs sqrt.

Common Use Cases:
• Choosing readable sqrt(2).

Edge Cases:
• Use math.isclose for equality.

Performance Considerations:
• sqrt may be faster than pow for square root.

Examples:
• hypot(1,1) for sqrt(2) in 2D.

Notes:
• Prefer math.sqrt(2) for clarity.""",
    """• math.isclose(0.1+0.2,1.0*0.3) may be True — relative tolerance catches near equality.
• Default rel_tol and abs_tol.

How It Works:
• Compares absolute difference within tolerances.

Step-by-Step Execution:
1. Evaluate both sides.
2. Compare with tolerance.

Order of Operations:
• isclose call.

Common Use Cases:
• Unit tests on floats.

Edge Cases:
• Both nan -> False.

Performance Considerations:
• O(1).

Examples:
• isclose(a,b,rel_tol=1e-9).

Notes:
• Do not use for Decimal — use compare.""",
    """• math.isclose(1.0,1.001,abs_tol=0.01) is True — within absolute tolerance 0.01.
• Ignores rel_tol for large absolute gap if abs_tol dominates.

How It Works:
• Checks |a-b| <= max(rel_tol*max(|a|,|b|), abs_tol).

Step-by-Step Execution:
1. Difference 0.001 <= 0.01.

Order of Operations:
• Keyword abs_tol.

Common Use Cases:
• Sensor noise thresholds.

Edge Cases:
• Zero values need rel_tol care.

Performance Considerations:
• O(1).

Examples:
• Tune tolerances per domain.

Notes:
• numpy has allclose vectorized.""",
    """• math.degrees(math.pi) is 180.0 — radians to degrees.
• pi radians = 180 degrees.

How It Works:
• multiply by 180/pi.

Step-by-Step Execution:
1. pi radians -> degrees.

Order of Operations:
• degrees().

Common Use Cases:
• UI angles in degrees from trig in radians.

Edge Cases:
• Large angles wrap in UI separately.

Performance Considerations:
• O(1).

Examples:
• radians() inverse.

Notes:
• math.tau is 2pi radians.""",
    """• math.radians(180) returns pi float — approximately equal to math.pi.
• May differ in last bits from math.pi constant.

How It Works:
• multiply by pi/180.

Step-by-Step Execution:
1. 180 degrees -> pi radians.

Order of Operations:
• radians call.

Common Use Cases:
• Converting user degree input to trig functions.

Edge Cases:
• Use isclose for equality checks.

Performance Considerations:
• O(1).

Examples:
• isclose(radians(180), pi).

Notes:
• Prefer storing radians internally.""",
    """• math.hypot(3,4) is 5.0 — sqrt(3**2+4**2) without overflow/underflow.
• Stable for large arguments.

How It Works:
• Scales inputs to avoid overflow in naive sum of squares.

Step-by-Step Execution:
1. hypot(3,4) -> 5.0.

Order of Operations:
• hypot variadic in 3.8+.

Common Use Cases:
• Euclidean distance in 2D.

Edge Cases:
• hypot(inf,0) is inf.

Performance Considerations:
• O(1) few ops.

Examples:
• hypot(*vec) for n dimensions.

Notes:
• For complex z, abs(z) is hypot(z.real,z.imag).""",
]


def main() -> None:
    path = Path(__file__).resolve().parents[1] / "src/data/questions/level2_intermediate_a.ts"
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
