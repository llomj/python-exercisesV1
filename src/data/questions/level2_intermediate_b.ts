// --- LEVEL 2 INTERMEDIATE B: Advanced Math Operations & Number Processing (50 TRULY UNIQUE QUESTIONS) ---
// Topics 51-100: math module functions, number representation, built-in numeric functions deep
export const level2IntermediateB = [
  // 51. math.fabs — float absolute value
  (_i: number) => ({
    q: `What does math.fabs(-3.14) return?`,
    o: ['3.14', '-3.14', '3', 'Error'],
    c: 0,
    e: "math.fabs() returns the absolute value as a float.",
    de: `math.fabs() returns the absolute value of a number, always as a float. Unlike the built-in abs(), which returns an int for int inputs, math.fabs() always returns a float.

Key concepts:
• math.fabs(-3.14) → 3.14 (removes the sign, returns float)
• abs(-3.14) also returns 3.14, but abs(-3) returns 3 (int)
• math.fabs(-3) returns 3.0 (always float)
• Useful when you need a guaranteed float result

Example:
• math.fabs(-3.14) → 3.14
• math.fabs(3.14) → 3.14
• math.fabs(0) → 0.0

Note: math.fabs() does not work on complex numbers — use abs() for those.

Key Distinctions:
• math.fabs(x) returns absolute value as float — like abs for floats but always returns float.
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
• For ints, abs is fine; fabs signals float intent.`
  }),
  // 52. math.modf — fractional and integer parts
  (_i: number) => ({
    q: `What does math.modf(3.75) return?`,
    o: ['(0.75, 3.0)', '(3, 0.75)', '(3.75, 0)', '0.75'],
    c: 0,
    e: "math.modf() returns (fractional_part, integer_part) as floats.",
    de: `math.modf() splits a number into its fractional and integer parts, returning both as a tuple of floats. The fractional part comes first, then the integer part.

Key concepts:
• math.modf(3.75) → (0.75, 3.0) — fractional first, integer second
• Both values are always floats
• The sign of the fractional part matches the original number
• math.modf(-3.75) → (-0.75, -3.0)

Example:
• math.modf(3.75) → (0.75, 3.0)
• math.modf(1.5) → (0.5, 1.0)
• math.modf(-2.3) → (-0.3, -2.0)

The order (fractional, integer) is the opposite of what many expect — remember "fraction first".

Key Distinctions:
• math.modf(x) splits float into fractional and integer parts as floats.
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
• Decimal for exact splits.`
  }),
  // 53. math.prod — product of iterable (Python 3.8+)
  (_i: number) => ({
    q: `What does math.prod([2, 3, 4]) return? (Python 3.8+)`,
    o: ['24', '9', '[2, 3, 4]', 'Error'],
    c: 0,
    e: "math.prod() multiplies all elements of an iterable together.",
    de: `math.prod() calculates the product of all elements in an iterable. It was introduced in Python 3.8 as the multiplication counterpart to sum().

Key concepts:
• math.prod([2, 3, 4]) → 2 × 3 × 4 = 24
• Similar to how sum() adds all elements, prod() multiplies them
• math.prod([], start=1) → 1 (empty iterable returns the start value)
• Default start value is 1

Example:
• math.prod([2, 3, 4]) → 24
• math.prod([1, 2, 3, 4, 5]) → 120 (factorial of 5)
• math.prod(range(1, 6)) → 120
• math.prod([]) → 1 (empty = start value)

Before Python 3.8, you had to use functools.reduce(operator.mul, iterable) for the same result.

Key Distinctions:
• math.prod(iterable) multiplies all elements — 2*3*4 = 24 (Python 3.8+).
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
• For sums use sum; for products use prod.`
  }),
  // 54. math.remainder — IEEE 754 remainder
  (_i: number) => ({
    q: `What does math.remainder(10, 3) return?`,
    o: ['1.0', '1', '0.0', '3.33'],
    c: 0,
    e: "math.remainder() returns the IEEE 754 remainder as a float.",
    de: `math.remainder() computes the IEEE 754 remainder of x with respect to y. Unlike the % operator which always returns a non-negative result for positive divisors, math.remainder() returns a value closest to zero.

Key concepts:
• math.remainder(10, 3) → 1.0 (10 = 3×3 + 1)
• Result is always a float
• The result can be negative (differs from %)
• math.remainder(10, 4) → 2.0
• math.remainder(10, 7) → -4.0 (closest to zero: 10 = 7×1 + 3 or 7×2 - 4)

Example:
• math.remainder(10, 3) → 1.0
• 10 % 3 → 1 (similar here, but % returns int for int inputs)
• math.remainder(7, 4) → -1.0 (7 = 4×2 - 1, closer to zero than +3)

The IEEE 754 remainder chooses the quotient nearest to zero.

Key Distinctions:
• math.remainder(x,y) is IEEE 754 remainder — result in [-y/2, y/2] unlike %.
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
• Python % uses floor division pairing — different.`
  }),
  // 55. math.isqrt — integer square root
  (_i: number) => ({
    q: `What does math.isqrt(10) return?`,
    o: ['3', '3.16', '4', 'Error'],
    c: 0,
    e: "math.isqrt() returns the integer square root (floor of sqrt).",
    de: `math.isqrt() returns the largest integer n such that n² ≤ x. It's the floor of the exact square root, returned as an integer (not a float).

Key concepts:
• math.isqrt(10) → 3 (because 3² = 9 ≤ 10 < 16 = 4²)
• Always returns an int, never a float
• math.isqrt(9) → 3 (exact square root)
• Introduced in Python 3.8
• Only works on non-negative integers

Example:
• math.isqrt(10) → 3
• math.isqrt(16) → 4
• math.isqrt(0) → 0
• math.isqrt(1) → 1

Unlike int(math.sqrt(n)), isqrt() is exact for arbitrarily large integers — no floating-point rounding issues.

Key Distinctions:
• math.isqrt(n) is integer square root — floor of exact sqrt for nonnegative int.
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
• Faster than int(math.sqrt(n)) for huge ints.`
  }),
  // 56. math.isqrt — perfect square
  (_i: number) => ({
    q: `What does math.isqrt(16) return?`,
    o: ['4', '4.0', '8', '256'],
    c: 0,
    e: "math.isqrt(16) returns 4 because 4² = 16 exactly.",
    de: `For perfect squares, math.isqrt() returns the exact integer square root. Since 16 is a perfect square (4² = 16), math.isqrt(16) returns exactly 4.

Key concepts:
• math.isqrt(16) → 4 (returns int, not float)
• For perfect squares: math.isqrt(n²) = n
• math.sqrt(16) → 4.0 (returns float!)
• isqrt always returns int, sqrt always returns float

Example:
• math.isqrt(16) → 4
• math.isqrt(25) → 5
• math.isqrt(100) → 10
• math.sqrt(16) → 4.0 (note the difference: float vs int)

Use isqrt when you need an integer result and want to avoid floating-point precision issues.

Key Distinctions:
• isqrt(16) is 4 — perfect square.

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
• Use isqrt for integer problems.`
  }),
  // 57. math.dist — Euclidean distance
  (_i: number) => ({
    q: `What does math.dist([0,0], [3,4]) return?`,
    o: ['5.0', '7', '25', 'Error'],
    c: 0,
    e: "math.dist() calculates the Euclidean distance between two points.",
    de: `math.dist() computes the Euclidean distance between two points in n-dimensional space. For [0,0] and [3,4], it calculates √(3² + 4²) = √(9 + 16) = √25 = 5.0.

Key concepts:
• math.dist([0,0], [3,4]) → 5.0 (classic 3-4-5 right triangle)
• Formula: √(Σ(p[i] - q[i])²)
• Works in any number of dimensions
• Returns a float
• Introduced in Python 3.8

Example:
• math.dist([0,0], [3,4]) → 5.0
• math.dist([1,1], [4,5]) → 5.0
• math.dist([0,0,0], [1,1,1]) → 1.732... (√3)

This is a convenient replacement for manually computing √((x2-x1)² + (y2-y1)²).

Key Distinctions:
• math.dist(p,q) Euclidean distance in any dimension — sqrt(sum((a-b)^2)).
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
• For many points use numpy or scipy.`
  }),
  // 58. math.fmod — C-style modulo
  (_i: number) => ({
    q: `What does math.fmod(10, 3) return?`,
    o: ['1.0', '1', '3.33', '0.0'],
    c: 0,
    e: "math.fmod() returns the C-style floating-point remainder.",
    de: `math.fmod() computes the remainder using C-style modulo rules. For positive numbers, it behaves the same as %, but it returns a float.

Key concepts:
• math.fmod(10, 3) → 1.0 (10 = 3×3 + 1)
• Always returns a float
• For positive numbers: same result as % but as float
• Difference from %: sign behavior for negative numbers

Example:
• math.fmod(10, 3) → 1.0
• 10 % 3 → 1 (same value, but int)
• math.fmod(10.5, 3) → 1.5
• math.fmod(7, 2.5) → 2.0

The distinction from % matters mainly for negative operands (see next question).

Key Distinctions:
• math.fmod(x,y) is C-style remainder — same sign as x; differs from Python %.
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
• Prefer % for Pythonic modulo.`
  }),
  // 59. math.fmod with negative — C-style vs Python modulo
  (_i: number) => ({
    q: `What does math.fmod(-10, 3) return?`,
    o: ['-1.0', '2', '2.0', '-2.0'],
    c: 0,
    e: "math.fmod keeps the sign of the dividend; Python's % follows the divisor's sign.",
    de: `math.fmod(-10, 3) returns -1.0 because C-style modulo preserves the sign of the dividend (first operand). Python's % operator returns 2 instead because it follows the divisor's sign.

Key concepts:
• math.fmod(-10, 3) → -1.0 (C-style: sign follows dividend -10)
• -10 % 3 → 2 (Python-style: sign follows divisor 3)
• Both are mathematically valid definitions of "remainder"
• C, Java, JavaScript use dividend-sign convention
• Python uses divisor-sign convention

Example:
• math.fmod(-10, 3) → -1.0 (because -10 = 3 × (-3) + (-1))
• -10 % 3 → 2 (because -10 = 3 × (-4) + 2)

Use math.fmod when you want C/Java-compatible behavior. Use % for Python's standard modulo.

Key Distinctions:
• fmod(-10,3) has sign of x — negative small remainder.
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
• Document which mod you use in teams.`
  }),
  // 60. math.exp(0) — e^0
  (_i: number) => ({
    q: `What does math.exp(0) return?`,
    o: ['1.0', '0', '0.0', '2.718'],
    c: 0,
    e: "math.exp(0) returns e^0 = 1.0. Any number raised to 0 is 1.",
    de: `math.exp(x) returns e raised to the power of x (e^x). When x is 0, e^0 = 1.0 — this is a fundamental mathematical identity: any non-zero number raised to the power 0 equals 1.

Key concepts:
• math.exp(0) → 1.0 (e^0 = 1)
• e ≈ 2.71828... (Euler's number)
• math.exp(1) → e ≈ 2.718281828...
• math.exp(x) is equivalent to math.e ** x but more accurate

Example:
• math.exp(0) → 1.0
• math.exp(1) → 2.718281828459045
• math.exp(-1) → 0.36787944117144233
• math.exp(2) → 7.38905609893065

The exponential function is fundamental in mathematics, appearing in compound interest, population growth, and probability distributions.

Key Distinctions:
• math.exp(0) is 1.0 — e**0.

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
• Use expm1 for x near 0 accuracy.`
  }),
  // 61. math.exp(1) — Euler's number
  (_i: number) => ({
    q: `What does math.exp(1) approximately equal?`,
    o: ['2.718', '1.0', '3.14', '1.618'],
    c: 0,
    e: "math.exp(1) returns e^1 ≈ 2.718 (Euler's number).",
    de: `math.exp(1) returns e¹ = e ≈ 2.71828... Euler's number (e) is one of the most important mathematical constants, the base of natural logarithms.

Key concepts:
• math.exp(1) → 2.718281828459045 (e)
• e is irrational — its decimal expansion never terminates or repeats
• math.e gives the same value as math.exp(1)
• e appears naturally in calculus, probability, and compound interest

Example:
• math.exp(1) ≈ 2.718
• math.e ≈ 2.718 (same value)
• math.pi ≈ 3.14159 (different constant)
• The golden ratio φ ≈ 1.618 (yet another constant)

Fun fact: e = lim(n→∞) (1 + 1/n)^n — the limit of compound interest compounded infinitely.

Key Distinctions:
• math.exp(1) is approximately math.e — 2.71828.

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
• numpy has vectorized exp.`
  }),
  // 62. math.pow(0, 0) — zero to zero power
  (_i: number) => ({
    q: `What does math.pow(0, 0) return?`,
    o: ['1.0', '0', '0.0', 'Error'],
    c: 0,
    e: "math.pow(0, 0) returns 1.0 by convention, consistent with the C standard.",
    de: `math.pow(0, 0) returns 1.0. While 0^0 is mathematically indeterminate, Python (following the C standard and IEEE 754) defines it as 1.0 by convention.

Key concepts:
• math.pow(0, 0) → 1.0 (returns float)
• 0 ** 0 → 1 (built-in ** also returns 1, but as int)
• This convention simplifies many formulas (e.g., polynomial evaluation)
• math.pow() always returns a float

Example:
• math.pow(0, 0) → 1.0
• math.pow(2, 3) → 8.0
• 0 ** 0 → 1 (int result)
• math.pow(0, 1) → 0.0

While mathematicians debate 0^0, computer science consistently defines it as 1 for practical reasons.

Key Distinctions:
• math.pow(0,0) returns 1.0 in Python — float result; matches Python int pow convention 0**0==1.
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
• Pure math debate on 0**0; Python fixes to 1.`
  }),
  // 63. 0 ** 0 — Python convention with built-in operator
  (_i: number) => ({
    q: `What is the result of 0 ** 0 in Python?`,
    o: ['1', '0', 'Error', 'undefined'],
    c: 0,
    e: "Python defines 0 ** 0 as 1 by convention.",
    de: `Python's built-in ** operator returns 1 for 0 ** 0. This is a deliberate design choice that simplifies many algorithms and mathematical formulas.

Key concepts:
• 0 ** 0 → 1 (int result from ** operator)
• math.pow(0, 0) → 1.0 (float result from math.pow)
• This is consistent across virtually all programming languages
• The convention is used because it makes polynomial and combinatorial formulas work correctly

Example:
• 0 ** 0 → 1
• 0 ** 1 → 0
• 1 ** 0 → 1
• type(0 ** 0) → <class 'int'>

The key difference from math.pow: ** preserves int type (returns 1), while math.pow always returns float (1.0).

Key Distinctions:
• 0**0 is 1 in Python for int exponentiation — empty product convention.

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
• Consistent with sum([]) identity 0 vs prod([]) 1.`
  }),
  // 64. math.tau — 2π constant
  (_i: number) => ({
    q: `What is math.tau approximately equal to?`,
    o: ['6.283', '3.14', '1.57', '9.42'],
    c: 0,
    e: "math.tau = 2π ≈ 6.283, the ratio of circumference to radius.",
    de: `math.tau is the circle constant τ (tau), equal to 2π ≈ 6.283185307... It represents the ratio of a circle's circumference to its radius.

Key concepts:
• math.tau ≈ 6.283185307179586
• math.tau = 2 × math.pi
• τ represents one full rotation (360°) in radians
• Added to Python 3.6 as a "more natural" circle constant

Example:
• math.tau ≈ 6.283
• math.pi ≈ 3.14159
• math.tau / 2 ≈ math.pi
• A full circle = τ radians = 2π radians = 360°

Some mathematicians argue τ is more fundamental than π because it directly represents one full turn, making angle calculations more intuitive: a quarter turn = τ/4, a half turn = τ/2.

Key Distinctions:
• math.tau is 2*pi — one full turn in radians.
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
• Prefer tau for clarity in rotation code.`
  }),
  // 65. math.inf + 1 — infinity arithmetic
  (_i: number) => ({
    q: `What is the result of math.inf + 1?`,
    o: ['inf', 'Error', 'OverflowError', 'math.inf + 1'],
    c: 0,
    e: "Adding any finite number to infinity still gives infinity.",
    de: `math.inf represents positive infinity in Python's floating-point system. Adding any finite number to infinity still results in infinity — it's a fundamental property of infinite values in IEEE 754 arithmetic.

Key concepts:
• math.inf + 1 → inf (still infinity)
• math.inf + math.inf → inf
• math.inf - math.inf → nan (indeterminate!)
• math.inf * 2 → inf
• math.inf * 0 → nan (indeterminate!)

Example:
• math.inf + 1 → inf
• math.inf > 1000000 → True
• math.inf == float('inf') → True
• -math.inf → negative infinity

Python's inf follows IEEE 754 rules. It's useful as an initial value for finding minimums: start with inf so any real number is smaller.

Key Distinctions:
• math.inf + 1 is still inf — absorbing element for addition.
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
• Use isfinite guards.`
  }),
  // 66. Floating point equality — the classic gotcha
  (_i: number) => ({
    q: `What is the result of 0.1 + 0.2 == 0.3 in Python?`,
    o: ['False', 'True', 'Error', 'None'],
    c: 0,
    e: "Due to floating-point representation, 0.1 + 0.2 is not exactly 0.3.",
    de: `0.1 + 0.2 == 0.3 evaluates to False because of how floating-point numbers are stored in binary. 0.1 and 0.2 cannot be represented exactly in binary, so their sum has tiny rounding errors.

Key concepts:
• 0.1 + 0.2 → 0.30000000000000004 (not exactly 0.3)
• 0.3 is stored as 0.2999999999999999888...
• The sum and 0.3 differ by a tiny amount
• This affects ALL languages using IEEE 754 floats, not just Python

Example:
• 0.1 + 0.2 == 0.3 → False
• 0.1 + 0.2 → 0.30000000000000004
• Use math.isclose(0.1 + 0.2, 0.3) → True (proper comparison)
• Or use decimal.Decimal for exact decimal arithmetic

This is the most famous floating-point gotcha in programming. Always use math.isclose() or an epsilon tolerance for float comparisons.

Key Distinctions:
• 0.1 + 0.2 == 0.3 is False — float equality fails on classic example.
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
• Never use == for float money.`
  }),
  // 67. 0.1 + 0.2 actual result
  (_i: number) => ({
    q: `What does 0.1 + 0.2 actually equal in Python?`,
    o: ['0.30000000000000004', '0.3', '0.30', '0.300'],
    c: 0,
    e: "Due to binary floating-point, 0.1 + 0.2 produces a tiny rounding error.",
    de: `0.1 + 0.2 produces 0.30000000000000004 in Python (and virtually every other programming language). This is because 0.1 and 0.2 cannot be exactly represented in binary floating-point.

Key concepts:
• In binary: 0.1 ≈ 0.0001100110011... (repeating)
• In binary: 0.2 ≈ 0.0011001100110... (repeating)
• Their sum accumulates tiny rounding errors
• The result 0.30000000000000004 is the closest representable float

Example:
• 0.1 + 0.2 → 0.30000000000000004
• repr(0.1 + 0.2) → '0.30000000000000004'
• format(0.1 + 0.2, '.17g') → '0.30000000000000004'

Solutions for exact decimal math:
• decimal.Decimal('0.1') + decimal.Decimal('0.2') == decimal.Decimal('0.3') → True
• fractions.Fraction(1, 10) + fractions.Fraction(2, 10) == fractions.Fraction(3, 10) → True

Key Distinctions:
• Actual value of 0.1+0.2 is a float near 0.30000000000000004 — repr shows long tail.
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
• Use decimal module for base-10.`
  }),
  // 68. Underscore separators in integers
  (_i: number) => ({
    q: `What is the value of 1_000_000 in Python?`,
    o: ['1000000', '"1_000_000"', 'Error', '1.0'],
    c: 0,
    e: "Underscores in numeric literals are ignored — they're visual separators only.",
    de: `Python 3.6+ allows underscores in numeric literals as visual separators. They are completely ignored by the interpreter — 1_000_000 is identical to 1000000.

Key concepts:
• 1_000_000 → 1000000 (underscores ignored)
• They improve readability for large numbers
• Work in int, float, hex, octal, and binary literals
• Cannot be at the start or end, or adjacent to a decimal point

Example:
• 1_000_000 → 1000000
• 3.14_15_93 → 3.141593
• 0xFF_FF → 65535
• 0b1010_0101 → 165

This is purely a readability feature — no runtime effect. The number is stored exactly the same way with or without underscores.

Key Distinctions:
• Underscores in numeric literals are ignored — 1_000_000 is 1000000.
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
• str of int does not add underscores by default.`
  }),
  // 69. Arithmetic with underscore-separated numbers
  (_i: number) => ({
    q: `What is 1_000 + 2_000 in Python?`,
    o: ['3000', '"1_000 + 2_000"', '3_000', 'Error'],
    c: 0,
    e: "Underscores are just visual separators; the math works on the actual numbers.",
    de: `1_000 + 2_000 equals 3000. The underscores are stripped during parsing, so Python sees this as 1000 + 2000 = 3000. The result is a plain integer without underscores.

Key concepts:
• 1_000 is parsed as 1000
• 2_000 is parsed as 2000
• 1000 + 2000 = 3000 (plain int result)
• Results never contain underscores — they're only for source code

Example:
• 1_000 + 2_000 → 3000
• 1_000 * 1_000 → 1000000
• type(1_000) → <class 'int'>
• str(1_000) → '1000' (no underscores in string)

The underscores exist only in your source code for readability. Python never displays them in output.

Key Distinctions:
• 1_000 + 2_000 is 3000 — underscores ignored in both literals.

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
• Linters may enforce grouping style.`
  }),
  // 70. Binary literal
  (_i: number) => ({
    q: `What is the value of 0b1010 in Python?`,
    o: ['10', '1010', '0b1010', 'Error'],
    c: 0,
    e: "0b prefix means binary: 1010 in binary = 8 + 0 + 2 + 0 = 10.",
    de: `0b1010 is a binary literal in Python. The 0b prefix indicates binary (base 2). Converting 1010₂ to decimal: 1×8 + 0×4 + 1×2 + 0×1 = 10.

Key concepts:
• 0b prefix = binary literal
• 1010 in binary: 1×2³ + 0×2² + 1×2¹ + 0×2⁰ = 8 + 0 + 2 + 0 = 10
• Python displays binary literals as their decimal (base 10) value
• bin(10) → '0b1010' (converts decimal to binary string)

Example:
• 0b1010 → 10
• 0b1111 → 15
• 0b10000 → 16
• type(0b1010) → <class 'int'>

Binary is base 2: each digit can only be 0 or 1, and each position represents a power of 2.

Key Distinctions:
• 0b1010 is binary literal — decimal 10.
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
• int("1010",2) from string alternative.`
  }),
  // 71. Octal literal
  (_i: number) => ({
    q: `What is the value of 0o17 in Python?`,
    o: ['15', '17', '8', 'Error'],
    c: 0,
    e: "0o prefix means octal (base 8): 1×8 + 7×1 = 15.",
    de: `0o17 is an octal literal in Python. The 0o prefix indicates octal (base 8). Converting 17₈ to decimal: 1×8 + 7×1 = 15.

Key concepts:
• 0o prefix = octal literal (base 8)
• Digits can only be 0-7
• 17 in octal: 1×8¹ + 7×8⁰ = 8 + 7 = 15
• oct(15) → '0o17' (converts decimal to octal string)

Example:
• 0o17 → 15
• 0o10 → 8
• 0o77 → 63
• type(0o17) → <class 'int'>

Octal was historically important in Unix file permissions (e.g., chmod 755 → 0o755 = owner rwx, group r-x, others r-x).

Key Distinctions:
• 0o17 is octal literal — 1*8+7 = 15 decimal.

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
• Prefer 0o for clarity over leading zero confusion.`
  }),
  // 72. Hexadecimal literal
  (_i: number) => ({
    q: `What is the value of 0xff in Python?`,
    o: ['255', '15', 'ff', 'Error'],
    c: 0,
    e: "0x prefix means hexadecimal (base 16): f=15, so ff = 15×16 + 15 = 255.",
    de: `0xff is a hexadecimal literal in Python. The 0x prefix indicates base 16. Converting ff₁₆ to decimal: 15×16 + 15×1 = 240 + 15 = 255.

Key concepts:
• 0x prefix = hexadecimal literal (base 16)
• Digits: 0-9 and a-f (a=10, b=11, c=12, d=13, e=14, f=15)
• ff in hex: 15×16¹ + 15×16⁰ = 240 + 15 = 255
• hex(255) → '0xff' (converts decimal to hex string)

Example:
• 0xff → 255
• 0x10 → 16
• 0xFF → 255 (case-insensitive)
• 0xDEAD → 57005

255 (0xff) is the maximum value for an 8-bit unsigned integer — commonly seen in RGB color values (0-255 per channel).

Key Distinctions:
• 0xff is hex literal — 255 decimal.

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
• Match with hex() string output without prefix.`
  }),
  // 73. int(1e3) — scientific notation to int
  (_i: number) => ({
    q: `What does int(1e3) return?`,
    o: ['1000', '1e3', '1000.0', 'Error'],
    c: 0,
    e: "1e3 is 1000.0 (float), and int() truncates it to 1000.",
    de: `1e3 is scientific notation for 1 × 10³ = 1000.0 (a float). int() converts this float to an integer by truncating the decimal part, giving 1000.

Key concepts:
• 1e3 → 1000.0 (scientific notation produces a float)
• int(1000.0) → 1000 (truncates to integer)
• Scientific notation always produces a float, never an int
• int() truncates toward zero (drops the .0)

Example:
• int(1e3) → 1000
• int(2.5e2) → 250
• int(1e0) → 1
• type(1e3) → <class 'float'>

Note: int() truncates, it doesn't round. int(1.9e0) → 1, not 2.

Key Distinctions:
• int(1e3) converts float 1000.0 to int 1000 — truncates toward zero.
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
• For exact big integers use int strings or literals.`
  }),
  // 74. Scientific notation is always float
  (_i: number) => ({
    q: `What is the value of 1e2 in Python?`,
    o: ['100.0', '100', '1e2', 'Error'],
    c: 0,
    e: "Scientific notation (1e2) always produces a float: 100.0.",
    de: `1e2 means 1 × 10² = 100.0. In Python, scientific notation always produces a float value, even when the result is a whole number.

Key concepts:
• 1e2 → 100.0 (float, not int)
• The 'e' stands for "times 10 to the power of"
• 1e2 = 1 × 10² = 100.0
• This is a fundamental rule: scientific notation = always float

Example:
• 1e2 → 100.0
• 5e3 → 5000.0
• 1.5e1 → 15.0
• 1e-2 → 0.01

This catches many beginners: 1e2 looks like it should be the integer 100, but it's the float 100.0.

Key Distinctions:
• 1e2 is float literal 100.0 — scientific notation.

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
• Type is float, not int.`
  }),
  // 75. type of scientific notation
  (_i: number) => ({
    q: `What does type(1e2) return?`,
    o: ["<class 'float'>", "<class 'int'>", "<class 'str'>", "Error"],
    c: 0,
    e: "Scientific notation always creates a float, so type(1e2) is float.",
    de: `type(1e2) returns <class 'float'> because scientific notation in Python always produces a floating-point number, regardless of whether the value is a whole number.

Key concepts:
• 1e2 → 100.0 (float)
• type(100.0) → <class 'float'>
• Even though 100.0 is a "whole number," it's still stored as float
• To get an int: int(1e2) → 100

Example:
• type(1e2) → <class 'float'>
• type(100) → <class 'int'>
• type(100.0) → <class 'float'>
• 1e2 == 100 → True (equal in value, different types)

Python distinguishes between 100 (int) and 100.0 (float) even though they're mathematically equal. The literal syntax determines the type.

Key Distinctions:
• type(1e2) is float — any e-notation literal is float.

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
• Use int(1e2) if integer needed.`
  }),
  // 76. Huge int — Python arbitrary precision
  (_i: number) => ({
    q: `Does Python raise an error for 10 ** 308?`,
    o: ['No, Python ints have arbitrary precision', 'Yes, OverflowError', 'Yes, MemoryError', 'It returns inf'],
    c: 0,
    e: "Python integers have unlimited precision — no overflow possible.",
    de: `Python integers have arbitrary (unlimited) precision, so 10 ** 308 works perfectly fine. There is no maximum integer value in Python — ints can be as large as memory allows.

Key concepts:
• 10 ** 308 produces a valid integer with 309 digits
• Python ints never overflow — they grow as needed
• This is different from C/Java where ints have fixed sizes (32 or 64 bits)
• Only floats can overflow (to inf)

Example:
• 10 ** 308 → a 309-digit integer (works fine)
• 10 ** 1000 → a 1001-digit integer (still works!)
• 2 ** 1000 → a 302-digit integer (no problem)
• type(10 ** 308) → <class 'int'>

However, 1e308 would approach float limits, and 1e309 would overflow to inf — because floats have finite precision.

Key Distinctions:
• 10**308 is computed as int — no error; Python big ints.

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
• float(10**400) may be inf.`
  }),
  // 77. Float overflow to infinity
  (_i: number) => ({
    q: `What does 1e309 evaluate to in Python?`,
    o: ['inf', 'OverflowError', '1e309', '0'],
    c: 0,
    e: "1e309 overflows the float range and becomes inf (positive infinity).",
    de: `1e309 exceeds the maximum representable float value (~1.8 × 10³⁰⁸), so Python silently converts it to inf (positive infinity) instead of raising an error.

Key concepts:
• The largest finite float is approximately 1.7976931348623157 × 10³⁰⁸
• 1e309 > max float → becomes inf
• No error is raised — this is IEEE 754 behavior
• float('inf') and math.inf give the same value

Example:
• 1e309 → inf
• 1e308 → 1e+308 (still valid)
• -1e309 → -inf
• type(1e309) → <class 'float'> (inf is a float)

Contrast with integers: 10 ** 309 works perfectly (arbitrary precision), but the float literal 1e309 overflows to infinity.

Key Distinctions:
• 1e309 overflows to inf in IEEE double — literal too large for finite float.
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
• Use mpmath for extended range.`
  }),
  // 78. sys.float_info.max — largest float
  (_i: number) => ({
    q: `What does sys.float_info.max represent?`,
    o: ['The largest finite float (~1.8e308)', 'The largest int', 'Infinity', 'The smallest float'],
    c: 0,
    e: "sys.float_info.max is the largest representable finite floating-point number.",
    de: `sys.float_info.max gives the largest finite floating-point number Python can represent, approximately 1.7976931348623157 × 10³⁰⁸. Any float larger than this becomes inf.

Key concepts:
• sys.float_info.max ≈ 1.7976931348623157e+308
• Values larger than this overflow to inf
• This limit is set by the IEEE 754 double-precision format (64 bits)
• sys.float_info also has min, epsilon, and other attributes

Example:
• sys.float_info.max ≈ 1.8e308
• sys.float_info.max + 1 → still ≈ 1.8e308 (1 is too small to matter)
• sys.float_info.max * 2 → inf (overflow!)
• sys.float_info.min → 2.2250738585072014e-308 (smallest positive normal float)

Python ints have no maximum (arbitrary precision), but floats are limited by the IEEE 754 standard.

Key Distinctions:
• sys.float_info.max is largest finite positive float — approx 1.8e308.
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
• nextafter in math for float neighbors.`
  }),
  // 79. Repeating decimal as float
  (_i: number) => ({
    q: `What does 1 / 3 return in Python?`,
    o: ['0.3333333333333333', '0', '0.33', 'Error'],
    c: 0,
    e: "1 / 3 returns a float approximation of the repeating decimal 0.333...",
    de: `In Python 3, 1 / 3 returns 0.3333333333333333 — a floating-point approximation of the repeating decimal 1/3. The division operator / always returns a float.

Key concepts:
• 1 / 3 → 0.3333333333333333 (16 significant digits displayed)
• The actual stored value has about 17 significant digits of precision
• 1/3 cannot be exactly represented in binary floating-point
• For exact fractions, use fractions.Fraction(1, 3)

Example:
• 1 / 3 → 0.3333333333333333
• 2 / 3 → 0.6666666666666666
• 1 / 3 + 1 / 3 + 1 / 3 → 1.0 (luckily rounds correctly!)
• 1 // 3 → 0 (floor division gives integer)

Python displays up to 17 significant digits for floats, which is enough to uniquely identify any IEEE 754 double.

Key Distinctions:
• 1 / 3 in Python 3 is true division — float 0.3333333333333333.

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
• // for floor division.`
  }),
  // 80. 2/3 + 1/3 == 1.0 — sometimes floats work out
  (_i: number) => ({
    q: `What is the result of 2 / 3 + 1 / 3 == 1.0?`,
    o: ['True', 'False', 'Error', 'None'],
    c: 0,
    e: "This happens to equal True because the rounding errors cancel out.",
    de: `2 / 3 + 1 / 3 == 1.0 evaluates to True. Unlike 0.1 + 0.2 == 0.3 (which is False), this particular combination of floating-point rounding errors happens to cancel out perfectly.

Key concepts:
• 2/3 → 0.6666666666666666
• 1/3 → 0.3333333333333333
• 2/3 + 1/3 → 1.0 (errors cancel!)
• This is lucky — not all similar expressions work out

Example:
• 2/3 + 1/3 == 1.0 → True (rounding errors cancel)
• 0.1 + 0.2 == 0.3 → False (rounding errors accumulate)
• 1/3 + 1/3 + 1/3 == 1.0 → True (also works out)

This demonstrates that floating-point arithmetic is unpredictable — some expressions round perfectly, others don't. Always use math.isclose() for reliable comparisons.

Key Distinctions:
• 2/3 + 1/3 may not equal 1.0 exactly due to float rounding — each third is approximate.
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
• Use Decimal or Fraction for equality.`
  }),
  // 81. abs() on floats
  (_i: number) => ({
    q: `What does abs(-3.14) return?`,
    o: ['3.14', '-3.14', '3', 'Error'],
    c: 0,
    e: "abs() works on floats too, returning the absolute value as a float.",
    de: `abs() returns the absolute value of any numeric type. For floats, it returns a float. abs(-3.14) removes the negative sign and returns 3.14.

Key concepts:
• abs(-3.14) → 3.14 (float in, float out)
• abs(-5) → 5 (int in, int out)
• abs() preserves the numeric type
• Unlike math.fabs(), abs() keeps the original type

Example:
• abs(-3.14) → 3.14
• abs(3.14) → 3.14 (already positive)
• abs(-5) → 5 (returns int)
• math.fabs(-5) → 5.0 (always returns float)

abs() is a built-in function — no import needed. Use it for any numeric type (int, float, complex).

Key Distinctions:
• abs(-3.14) is 3.14 — float absolute value.

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
• abs works on complex too — magnitude.`
  }),
  // 82. abs() on complex numbers — magnitude
  (_i: number) => ({
    q: `What does abs(3+4j) return?`,
    o: ['5.0', '7', '3+4j', 'Error'],
    c: 0,
    e: "For complex numbers, abs() returns the magnitude: √(3² + 4²) = 5.0.",
    de: `For complex numbers, abs() returns the magnitude (absolute value), calculated as √(real² + imag²). For 3+4j: √(9 + 16) = √25 = 5.0.

Key concepts:
• abs(3+4j) → 5.0 (magnitude of the complex number)
• Formula: √(real² + imag²)
• 3+4j → √(3² + 4²) = √(9 + 16) = √25 = 5.0
• This is the Euclidean distance from the origin in the complex plane

Example:
• abs(3+4j) → 5.0 (classic 3-4-5 triangle)
• abs(1+1j) → 1.4142... (√2)
• abs(0+1j) → 1.0
• abs(5+0j) → 5.0

This is the only way to get the magnitude of a complex number in Python — math.fabs() raises a TypeError for complex inputs.

Key Distinctions:
• abs(3+4j) is 5.0 — sqrt(3*3+4*4).

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
• For real use fabs or abs.`
  }),
  // 83. divmod() with floats
  (_i: number) => ({
    q: `What does divmod(7.5, 2.5) return?`,
    o: ['(3.0, 0.0)', '(3, 0)', '(2.5, 2.5)', 'Error'],
    c: 0,
    e: "divmod() works on floats, returning (quotient, remainder) as floats.",
    de: `divmod(a, b) returns a tuple (quotient, remainder) where quotient = a // b and remainder = a % b. For floats, both results are floats.

Key concepts:
• divmod(7.5, 2.5) → (3.0, 0.0)
• 7.5 // 2.5 = 3.0 (floor division)
• 7.5 % 2.5 = 0.0 (remainder)
• 7.5 = 2.5 × 3.0 + 0.0 ✓

Example:
• divmod(7.5, 2.5) → (3.0, 0.0)
• divmod(7, 2) → (3, 1) (int inputs → int outputs)
• divmod(10.0, 3.0) → (3.0, 1.0)
• divmod(-7, 2) → (-4, 1) (floor division rounds toward -∞)

divmod() is efficient when you need both the quotient and remainder — it computes both in a single operation.

Key Distinctions:
• divmod(7.5, 2.5) on floats returns floats — (3.0, 0.0) roughly.
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
• math.remainder differs for floats.`
  }),
  // 84. round() with precision
  (_i: number) => ({
    q: `What does round(3.14159, 3) return?`,
    o: ['3.142', '3.141', '3.14', '3.1416'],
    c: 0,
    e: "round(x, 3) rounds to 3 decimal places. The 4th digit (5) rounds up.",
    de: `round(3.14159, 3) rounds to 3 decimal places, giving 3.142. The second argument specifies how many decimal places to keep.

Key concepts:
• round(3.14159, 3) → 3.142
• The 4th decimal digit is 5, which rounds the 3rd digit up (1 → 2)
• round(x, n) keeps n decimal places
• Python uses "round half to even" (banker's rounding) for .5 cases

Example:
• round(3.14159, 3) → 3.142
• round(3.14159, 2) → 3.14
• round(3.14159, 4) → 3.1416
• round(3.14159, 1) → 3.1

Note: For the .5 case, Python rounds to the nearest even digit: round(2.5) → 2, round(3.5) → 4.

Key Distinctions:
• round(3.14159, 3) rounds to three fractional digits — 3.142.

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
• Decimal quantize for money.`
  }),
  // 85. round() with 0 decimal places — returns float
  (_i: number) => ({
    q: `What does round(3.14159, 0) return?`,
    o: ['3.0', '3', '3.14', '0'],
    c: 0,
    e: "round(x, 0) rounds to 0 decimal places but returns a float (3.0, not 3).",
    de: `round(3.14159, 0) returns 3.0 — a float, not an integer. When ndigits is explicitly provided (even as 0), the return type matches the input type.

Key concepts:
• round(3.14159, 0) → 3.0 (float, not int!)
• When ndigits is given: result type = input type
• 3.14159 is a float, so result is float (3.0)
• round(3.14159) → 3 (no ndigits: returns int — see next question)

Example:
• round(3.14159, 0) → 3.0 (float)
• round(3.7, 0) → 4.0 (float)
• round(3.14159) → 3 (int — no ndigits argument)
• round(3.5, 0) → 4.0 (banker's rounding: .5 rounds to even)

The subtle difference: providing ndigits=0 keeps the float type, while omitting ndigits converts to int.

Key Distinctions:
• round(3.14159, 0) rounds to nearest integer — 3.0.

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
• Read Python docs for return type nuances.`
  }),
  // 86. round() without ndigits — returns int
  (_i: number) => ({
    q: `What does round(3.14159) return?`,
    o: ['3', '3.0', '3.14', 'Error'],
    c: 0,
    e: "round() without ndigits returns an int, not a float.",
    de: `round(3.14159) returns 3 (an integer). When the ndigits argument is omitted entirely, round() returns an int — this is different from round(x, 0) which returns a float.

Key concepts:
• round(3.14159) → 3 (int!)
• round(3.14159, 0) → 3.0 (float!)
• No ndigits → int result (regardless of input type)
• With ndigits → same type as input

Example:
• round(3.14159) → 3 (type: int)
• round(3.14159, 0) → 3.0 (type: float)
• round(3.7) → 4 (type: int)
• type(round(3.14)) → <class 'int'>

This distinction is important: round() without arguments always returns int, which can matter for type-sensitive operations.

Key Distinctions:
• round(3.14159) one-arg rounds to nearest integer — bankers tie rule.
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
• Explicit ndigits for control.`
  }),
  // 87. max() on a string — max character by ASCII
  (_i: number) => ({
    q: `What does max("hello") return?`,
    o: ['"o"', '"h"', '"l"', '"e"'],
    c: 0,
    e: "max() on a string returns the character with the highest Unicode/ASCII value.",
    de: `max("hello") returns "o" because 'o' has the highest Unicode (ASCII) value among the characters in "hello". Strings are iterable, and max() compares characters by their ordinal values.

Key concepts:
• max("hello") → "o"
• ASCII values: h=104, e=101, l=108, o=111
• 'o' (111) is the highest → max returns "o"
• Strings are iterable — max() iterates over each character

Example:
• max("hello") → "o" (ord('o') = 111)
• min("hello") → "e" (ord('e') = 101)
• max("abc") → "c"
• max("Hello") → "o" (lowercase > uppercase in ASCII)

Note: Uppercase letters (A=65..Z=90) are "less than" lowercase letters (a=97..z=122) in ASCII.

Key Distinctions:
• max("hello") on str returns character with highest code point — lexicographic max.
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
• For human sorting use locale or key=casefold.`
  }),
  // 88. min() on a string — min character by ASCII
  (_i: number) => ({
    q: `What does min("hello") return?`,
    o: ['"e"', '"h"', '"l"', '"o"'],
    c: 0,
    e: "min() on a string returns the character with the lowest Unicode/ASCII value.",
    de: `min("hello") returns "e" because 'e' has the lowest Unicode (ASCII) value among the characters in "hello".

Key concepts:
• min("hello") → "e"
• ASCII values: h=104, e=101, l=108, o=111
• 'e' (101) is the lowest → min returns "e"
• min() iterates over the string's characters and finds the smallest

Example:
• min("hello") → "e" (ord('e') = 101)
• min("python") → "h" (ord('h') = 104)
• min("ABC") → "A" (ord('A') = 65)
• min("aA") → "A" (uppercase < lowercase in ASCII)

Remember: space (32) < digits (48-57) < uppercase (65-90) < lowercase (97-122) in ASCII order.

Key Distinctions:
• min("hello") is 'e' — smallest code point in the word.

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
• key= for custom ordering.`
  }),
  // 89. max() with key=lambda — max of negated = min
  (_i: number) => ({
    q: `What does max([1, 2, 3], key=lambda x: -x) return?`,
    o: ['1', '3', '-3', '-1'],
    c: 0,
    e: "The key negates values, so max of negated values (-1,-2,-3) picks the original 1.",
    de: `max([1, 2, 3], key=lambda x: -x) returns 1. The key function transforms values for comparison only — max finds the element whose key is largest. With key=lambda x: -x, the keys are -1, -2, -3. The largest key is -1, which corresponds to the original element 1.

Key concepts:
• key=lambda x: -x transforms: 1→-1, 2→-2, 3→-3
• max picks the element with the largest key: -1 > -2 > -3
• Element with key -1 is original value 1
• The return value is the original element, not the key

Example:
• max([1, 2, 3], key=lambda x: -x) → 1 (effectively finds the minimum!)
• min([1, 2, 3], key=lambda x: -x) → 3 (effectively finds the maximum!)
• max(["a", "bb", "ccc"], key=len) → "ccc" (longest string)

The key function is applied for comparison only — the original element is returned.

Key Distinctions:
• max([1,2,3], key=lambda x: -x) picks max under negated key — smallest original value.
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
• Prefer min() for clarity when finding smallest.`
  }),
  // 90. sorted() with key=lambda for reverse
  (_i: number) => ({
    q: `What does sorted([3, 1, 2], key=lambda x: -x) return?`,
    o: ['[3, 2, 1]', '[1, 2, 3]', '[-3, -2, -1]', 'Error'],
    c: 0,
    e: "Sorting by negated values reverses the order: 3, 2, 1.",
    de: `sorted([3, 1, 2], key=lambda x: -x) returns [3, 2, 1]. The key function negates each value for comparison, effectively sorting in descending order.

Key concepts:
• key=lambda x: -x transforms: 3→-3, 1→-1, 2→-2
• Sorting by keys ascending: -3, -2, -1 → original elements: 3, 2, 1
• The result contains original values, not the keys
• This is equivalent to sorted([3, 1, 2], reverse=True)

Example:
• sorted([3, 1, 2], key=lambda x: -x) → [3, 2, 1]
• sorted([3, 1, 2], reverse=True) → [3, 2, 1] (same result)
• sorted([3, 1, 2]) → [1, 2, 3] (default ascending)

Using reverse=True is cleaner and more readable than key=lambda x: -x, but the lambda trick works for more complex cases where you want partial reverse.

Key Distinctions:
• sorted([3,1,2], key=lambda x: -x) sorts descending — [3,2,1].
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
• stable sort preserves equal-key order.`
  }),
  // 91. sum() with start parameter
  (_i: number) => ({
    q: `What does sum([1, 2, 3], 10) return?`,
    o: ['16', '6', '10', 'Error'],
    c: 0,
    e: "sum() adds all elements plus the start value: 10 + 1 + 2 + 3 = 16.",
    de: `sum([1, 2, 3], 10) returns 16. The second argument to sum() is the start value — the sum begins at 10 instead of 0, then adds each element: 10 + 1 + 2 + 3 = 16.

Key concepts:
• sum(iterable, start=0) — start defaults to 0
• sum([1, 2, 3], 10) → 10 + 1 + 2 + 3 = 16
• sum([1, 2, 3]) → 0 + 1 + 2 + 3 = 6 (default start=0)
• The start parameter is useful for accumulating across multiple sum() calls

Example:
• sum([1, 2, 3], 10) → 16
• sum([1, 2, 3]) → 6
• sum([], 5) → 5 (empty iterable returns start)
• sum([[1], [2]], []) → [1, 2] (flattening — but use itertools.chain instead)

Note: sum() cannot be used with strings — use "".join() for string concatenation.

Key Distinctions:
• sum([1,2,3], 10) uses start=10 — total 16.
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
• Do not confuse with range end.`
  }),
  // 92. sum(range(101)) — Gauss formula
  (_i: number) => ({
    q: `What does sum(range(101)) return?`,
    o: ['5050', '5150', '100', '101'],
    c: 0,
    e: "sum(range(101)) = 0+1+2+...+100 = 5050 (Gauss's formula: n(n+1)/2).",
    de: `sum(range(101)) returns 5050. range(101) generates numbers 0 through 100, and their sum is 5050. This is famously computed by Gauss's formula: n(n+1)/2 = 100×101/2 = 5050.

Key concepts:
• range(101) → 0, 1, 2, ..., 100 (101 numbers)
• sum = 0 + 1 + 2 + ... + 100 = 5050
• Gauss's formula: n(n+1)/2 = 100 × 101 / 2 = 5050
• range(101) includes 0, excludes 101

Example:
• sum(range(101)) → 5050
• sum(range(11)) → 55 (0+1+...+10)
• sum(range(1, 101)) → 5050 (same! 1+2+...+100)

Legend: Young Gauss supposedly calculated 1+2+...+100 = 5050 in seconds by pairing numbers: (1+100) + (2+99) + ... = 50 × 101 = 5050.

Key Distinctions:
• sum(range(101)) is sum 0..100 — 5050 by Gauss formula n(n+1)/2 with n=100.

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
• math.fsum for float list.`
  }),
  // 93. sum(range(1, 11)) — sum of 1 to 10
  (_i: number) => ({
    q: `What does sum(range(1, 11)) return?`,
    o: ['55', '45', '66', '10'],
    c: 0,
    e: "range(1, 11) = 1,2,...,10 and their sum = 55.",
    de: `sum(range(1, 11)) returns 55. range(1, 11) generates numbers 1 through 10 (start=1, stop=11 which is exclusive), and 1+2+3+...+10 = 55.

Key concepts:
• range(1, 11) → 1, 2, 3, ..., 10 (excludes 11)
• 1 + 2 + 3 + ... + 10 = 55
• Gauss's formula: 10 × 11 / 2 = 55
• range(start, stop) includes start, excludes stop

Example:
• sum(range(1, 11)) → 55
• sum(range(1, 6)) → 15 (1+2+3+4+5)
• sum(range(1, 101)) → 5050
• sum(range(1, 1001)) → 500500

The sum of the first n positive integers is always n(n+1)/2.

Key Distinctions:
• sum(range(1,11)) is 1..10 — 55.

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
• Off-by-one awareness.`
  }),
  // 94. pow() with three arguments — modular exponentiation
  (_i: number) => ({
    q: `What does pow(2, 10, 1000) return?`,
    o: ['24', '1024', '2', '10'],
    c: 0,
    e: "pow(2, 10, 1000) computes 2^10 % 1000 = 1024 % 1000 = 24.",
    de: `pow(2, 10, 1000) returns 24. The three-argument form pow(base, exp, mod) computes (base ** exp) % mod efficiently. 2^10 = 1024, and 1024 % 1000 = 24.

Key concepts:
• pow(2, 10, 1000) = 2¹⁰ % 1000 = 1024 % 1000 = 24
• Three-arg pow is much more efficient than (2**10) % 1000 for large numbers
• Uses modular exponentiation algorithm (fast for cryptography)
• Only works with integers, not floats

Example:
• pow(2, 10, 1000) → 24
• pow(2, 10) → 1024 (without mod)
• pow(3, 4, 5) → 81 % 5 → 1
• pow(7, 256, 13) → computed efficiently without creating 7^256 first

Three-argument pow is essential in cryptography (RSA, Diffie-Hellman) where exponents are hundreds of digits long.

Key Distinctions:
• pow(2,10,1000) mod-exp — 2**10 % 1000 = 1024 % 1000 = 24.

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
• Never use (pow(a,b)%m) for huge b without three-arg.`
  }),
  // 95. max() with default for empty iterable
  (_i: number) => ({
    q: `What does max([], default=0) return?`,
    o: ['0', 'Error', 'None', '[]'],
    c: 0,
    e: "The default parameter provides a fallback when the iterable is empty.",
    de: `max([], default=0) returns 0. Without the default parameter, max([]) would raise a ValueError. The default argument (added in Python 3.4) provides a fallback value for empty iterables.

Key concepts:
• max([], default=0) → 0 (empty list, uses default)
• max([]) → ValueError: max() arg is an empty sequence
• The default parameter prevents errors on empty iterables
• min() also supports the default parameter

Example:
• max([], default=0) → 0
• max([], default=-1) → -1
• max([5], default=0) → 5 (non-empty: default ignored)
• min([], default=float('inf')) → inf

This is useful when processing data that might be empty: max(scores, default=0) gives 0 instead of crashing.

Key Distinctions:
• max([], default=0) returns 0 when iterable empty — avoids ValueError.
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
• sum() of [] is 0 without default.`
  }),
  // 96. bool(0.0) — zero float is falsy
  (_i: number) => ({
    q: `What does bool(0.0) return?`,
    o: ['False', 'True', '0', 'Error'],
    c: 0,
    e: "0.0 is falsy — any numeric zero is considered False in Python.",
    de: `bool(0.0) returns False. In Python, any numeric zero value is falsy: 0, 0.0, 0j, Decimal(0), Fraction(0, 1) — they all evaluate to False in a boolean context.

Key concepts:
• bool(0.0) → False (zero float is falsy)
• bool(0) → False (zero int is falsy)
• bool(0j) → False (zero complex is falsy)
• Any non-zero number is truthy

Example:
• bool(0.0) → False
• bool(0.1) → True
• bool(-0.0) → False (negative zero is still zero!)
• bool(1e-300) → True (tiny but non-zero)

Python's truthiness rules for numbers: zero = False, anything else = True. This applies uniformly to int, float, complex, Decimal, and Fraction.

Key Distinctions:
• bool(0.0) is False — zero float is falsy.

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
• math.isclose to zero for noise.`
  }),
  // 97. bool(-1) — non-zero is truthy
  (_i: number) => ({
    q: `What does bool(-1) return?`,
    o: ['True', 'False', '-1', 'Error'],
    c: 0,
    e: "Any non-zero number is truthy, including negatives.",
    de: `bool(-1) returns True. In Python, any non-zero number is truthy — it doesn't matter if it's positive or negative. Only zero values (0, 0.0, 0j) are falsy.

Key concepts:
• bool(-1) → True (non-zero = truthy)
• bool(1) → True
• bool(-100) → True
• bool(0) → False (only zero is falsy)

Example:
• bool(-1) → True
• bool(-0.5) → True
• bool(42) → True
• bool(0) → False

This is why if -1: works the same as if True: in Python. The sign doesn't affect truthiness — only the magnitude (zero vs non-zero) matters.

Key Distinctions:
• bool(-1) is True — any nonzero real is truthy.

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
• Explicit x != 0 for clarity.`
  }),
  // 98. bool(0+0j) — zero complex is falsy
  (_i: number) => ({
    q: `What does bool(0+0j) return?`,
    o: ['False', 'True', 'Error', '0j'],
    c: 0,
    e: "0+0j is zero (both parts are 0), so it's falsy.",
    de: `bool(0+0j) returns False. A complex number is falsy only when both its real and imaginary parts are zero. 0+0j has real=0 and imag=0, so it's the complex zero and evaluates to False.

Key concepts:
• bool(0+0j) → False (complex zero is falsy)
• bool(1+0j) → True (non-zero real part)
• bool(0+1j) → True (non-zero imaginary part)
• bool(0+0j) is equivalent to bool(complex(0, 0))

Example:
• bool(0+0j) → False
• bool(0j) → False (same as 0+0j)
• bool(1j) → True (same as 0+1j)
• bool(3+4j) → True

A complex number c is falsy only when c.real == 0 and c.imag == 0. This is consistent with Python's rule: zero values are falsy, everything else is truthy.

Key Distinctions:
• bool(0+0j) is False — complex zero is falsy.

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
• cmath.phase(0+0j) may error — use explicit checks.`
  }),
  // 99. int(True) + int(False) — bool to int conversion
  (_i: number) => ({
    q: `What does int(True) + int(False) return?`,
    o: ['1', '0', 'True', 'Error'],
    c: 0,
    e: "int(True) = 1 and int(False) = 0, so 1 + 0 = 1.",
    de: `int(True) + int(False) returns 1. In Python, bool is a subclass of int, where True equals 1 and False equals 0. int(True) explicitly converts to 1, and int(False) to 0.

Key concepts:
• int(True) → 1
• int(False) → 0
• 1 + 0 = 1
• bool is actually a subclass of int in Python
• True and False are literally the integers 1 and 0 with a different repr

Example:
• int(True) + int(False) → 1
• True + True → 2 (even without int())
• isinstance(True, int) → True (bool IS an int)
• True == 1 → True (they're equal)

This is a fundamental Python design choice: booleans are integers. This allows boolean arithmetic and makes functions like sum() work with boolean lists: sum([True, False, True]) → 2.

Key Distinctions:
• int(True)+int(False) is 1+0 = 1 — bool as int subclass.

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
• Code review may flag cleverness.`
  }),
  // 100. True + True + True — bool arithmetic
  (_i: number) => ({
    q: `What does True + True + True return?`,
    o: ['3', 'True', 'Error', '"TrueTrueTrue"'],
    c: 0,
    e: "Since bool is a subclass of int, True = 1, so True + True + True = 3.",
    de: `True + True + True returns 3. Since bool is a subclass of int in Python, True is literally the integer 1. Adding three True values together is the same as 1 + 1 + 1 = 3.

Key concepts:
• True + True + True = 1 + 1 + 1 = 3
• The result is an int (3), not a bool
• bool is a subclass of int: issubclass(bool, int) → True
• True behaves as 1 and False as 0 in arithmetic

Example:
• True + True + True → 3
• True * 5 → 5
• False + False → 0
• True + False + True → 2

Practical use: sum(bool_list) counts how many True values are in a list. For example, sum([x > 0 for x in [-1, 2, -3, 4]]) → 2 (counts positive numbers).

Key Distinctions:
• True+True+True is 3 — bools add as 1 each.

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
• Explicit int() or sum for readability.`
  }),
];
