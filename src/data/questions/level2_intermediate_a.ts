// --- LEVEL 2 INTERMEDIATE A: math module, divmod deep-dive, pow variations, round modes --- 50 TRULY UNIQUE QUESTIONS ---
// Topics: math.sqrt, math.floor/ceil/trunc, math constants, math.inf/nan, math.log variants,
// math.factorial/gcd/lcm/comb/perm, divmod negative, round banker's rounding, math.fsum,
// math.copysign, pow variations, math.isclose, math.degrees/radians, math.hypot

export const level2IntermediateA = [
  // Q1: math.sqrt — square root returns float
  (_i: number) => ({
    q: `import math; what is math.sqrt(16)?`,
    o: ["4.0", "4", "16", "Error"],
    c: 0,
    e: "math.sqrt() returns a float: sqrt(16) is 4.0, not the integer 4.",
    de: `The math.sqrt() function computes the square root and always returns a float, even when the result is a whole number.

Key concepts:
• math.sqrt(16) → 4.0 (float, not int)
• This differs from 16 ** 0.5, which also gives 4.0
• For integer square roots in Python 3.8+, use math.isqrt(16) → 4 (int)
• math.sqrt() raises ValueError for negative inputs

Example:
>>> import math
>>> math.sqrt(16)
4.0
>>> type(math.sqrt(16))
<class 'float'>`
  }),
  // Q2: math.sqrt — float approximation for irrational results
  (_i: number) => ({
    q: `Is math.sqrt(2) an exact value or a float approximation?`,
    o: ["Float approximation", "Exact value", "Returns a Fraction", "Returns an integer"],
    c: 0,
    e: "√2 is irrational, so math.sqrt(2) returns a float approximation (~1.41421356...).",
    de: `The square root of 2 is an irrational number — it has infinite non-repeating decimal digits. Since Python floats use IEEE 754 double-precision (64-bit), math.sqrt(2) can only store a finite approximation.

Key concepts:
• math.sqrt(2) → 1.4142135623730951
• This is the closest 64-bit float to the true value
• math.sqrt(2) ** 2 → 2.0000000000000004 (not exactly 2!)
• For exact arithmetic, use the decimal or fractions modules
• All floating-point square roots of non-perfect-squares are approximations

Example:
>>> math.sqrt(2)
1.4142135623730951
>>> math.sqrt(2) ** 2 == 2
False`
  }),
  // Q3: math.floor — positive float
  (_i: number) => ({
    q: `What is math.floor(3.7)?`,
    o: ["3", "4", "3.0", "Error"],
    c: 0,
    e: "math.floor() rounds down to the nearest integer: floor(3.7) is 3.",
    de: `math.floor() returns the largest integer less than or equal to the given number. For positive numbers, this means rounding toward zero (dropping the decimal part).

Key concepts:
• math.floor(3.7) → 3 (returns an int, not float)
• "Floor" means "the ground" — always rounds down on the number line
• For positive numbers: floor(3.1) = 3, floor(3.9) = 3, floor(3.0) = 3
• Differs from int() only for negative numbers
• Returns an int type in Python 3

Example:
>>> import math
>>> math.floor(3.7)
3
>>> type(math.floor(3.7))
<class 'int'>`
  }),
  // Q4: math.floor — negative float (floors toward negative infinity)
  (_i: number) => ({
    q: `What is math.floor(-3.7)?`,
    o: ["-4", "-3", "-3.0", "Error"],
    c: 0,
    e: "math.floor() rounds toward negative infinity: floor(-3.7) is -4, not -3.",
    de: `For negative numbers, math.floor() rounds toward negative infinity, which means going further from zero. This is the critical difference between floor() and int()/trunc().

Key concepts:
• math.floor(-3.7) → -4 (rounds DOWN on the number line)
• -4 is less than -3.7, so -4 is the "floor"
• int(-3.7) → -3 (truncates toward zero instead)
• This distinction matters in algorithms using integer division
• Python's // operator also floors toward negative infinity: -17 // 5 = -4

Example:
>>> math.floor(-3.7)
-4
>>> int(-3.7)
-3`
  }),
  // Q5: math.ceil — positive float
  (_i: number) => ({
    q: `What is math.ceil(3.2)?`,
    o: ["4", "3", "3.0", "Error"],
    c: 0,
    e: "math.ceil() rounds up to the nearest integer: ceil(3.2) is 4.",
    de: `math.ceil() returns the smallest integer greater than or equal to the given number. For positive non-integer values, this means rounding away from zero.

Key concepts:
• math.ceil(3.2) → 4 (rounds UP on the number line)
• "Ceil" is short for "ceiling" — always rounds up
• math.ceil(3.0) → 3 (already an integer, no rounding needed)
• Useful for calculating how many containers/pages are needed
• Returns int type in Python 3

Example:
>>> math.ceil(3.2)
4
>>> math.ceil(3.0)
3`
  }),
  // Q6: math.ceil — negative float
  (_i: number) => ({
    q: `What is math.ceil(-3.2)?`,
    o: ["-3", "-4", "-3.0", "Error"],
    c: 0,
    e: "math.ceil() rounds toward positive infinity: ceil(-3.2) is -3.",
    de: `For negative numbers, math.ceil() rounds toward positive infinity (toward zero). The ceiling of -3.2 is -3 because -3 is the smallest integer that is still greater than or equal to -3.2.

Key concepts:
• math.ceil(-3.2) → -3 (rounds UP toward zero)
• -3 > -3.2, so -3 is the "ceiling"
• Compare: math.floor(-3.2) → -4 (rounds DOWN away from zero)
• ceil and floor are mirror operations for negative numbers
• math.ceil(-3.0) → -3 (exact integer, unchanged)

Example:
>>> math.ceil(-3.2)
-3
>>> math.floor(-3.2)
-4`
  }),
  // Q7: math.trunc — positive float (truncate toward zero)
  (_i: number) => ({
    q: `What is math.trunc(3.7)?`,
    o: ["3", "4", "3.0", "Error"],
    c: 0,
    e: "math.trunc() removes the fractional part, truncating toward zero: trunc(3.7) is 3.",
    de: `math.trunc() removes the decimal portion of a number, always truncating toward zero. For positive numbers, trunc() gives the same result as floor().

Key concepts:
• math.trunc(3.7) → 3 (drops .7, keeps 3)
• Equivalent to int(3.7) for all numbers
• For positive numbers: trunc(x) == floor(x)
• For negative numbers: trunc(x) == ceil(x)
• trunc() always moves toward zero on the number line

Example:
>>> math.trunc(3.7)
3
>>> int(3.7)
3`
  }),
  // Q8: math.trunc — negative float (toward zero, unlike floor)
  (_i: number) => ({
    q: `What is math.trunc(-3.7)?`,
    o: ["-3", "-4", "-3.0", "Error"],
    c: 0,
    e: "math.trunc() truncates toward zero: trunc(-3.7) is -3, not -4 like floor().",
    de: `math.trunc() always truncates toward zero. For negative numbers, this means rounding toward zero (up on the number line), which is the opposite direction from floor().

Key concepts:
• math.trunc(-3.7) → -3 (truncates toward zero)
• math.floor(-3.7) → -4 (floors toward negative infinity)
• trunc() simply removes the decimal part: -3.7 → -3
• This is identical to int(-3.7) → -3
• The key difference: floor goes DOWN, trunc goes TOWARD ZERO

Comparison table:
   x    | trunc(x) | floor(x) | ceil(x)
  3.7   |    3     |    3     |    4
 -3.7   |   -3     |   -4     |   -3`
  }),
  // Q9: math.floor vs int() — same result for positive numbers
  (_i: number) => ({
    q: `Do math.floor(3.7) and int(3.7) give the same result?`,
    o: ["Yes, both return 3", "No, floor returns 3.0", "No, int returns 4", "Error"],
    c: 0,
    e: "For positive numbers, floor() and int() both truncate downward and return the same integer.",
    de: `For positive numbers, math.floor() and int() produce identical results because truncating toward zero and flooring toward negative infinity go in the same direction.

Key concepts:
• math.floor(3.7) → 3
• int(3.7) → 3
• Both return Python int type
• This equivalence ONLY holds for positive numbers
• For negative numbers, they differ: floor(-3.7) = -4, int(-3.7) = -3

Example:
>>> math.floor(3.7) == int(3.7)
True
>>> math.floor(3.7)
3
>>> int(3.7)
3`
  }),
  // Q10: math.floor vs int() — different for negative numbers
  (_i: number) => ({
    q: `What is the difference between int(-3.7) and math.floor(-3.7)?`,
    o: ["int gives -3, floor gives -4", "Both give -3", "Both give -4", "int gives -4, floor gives -3"],
    c: 0,
    e: "int() truncates toward zero (-3), while floor() rounds toward negative infinity (-4).",
    de: `This is one of the most important distinctions in Python numeric operations. int() and math.floor() behave differently for negative numbers.

Key concepts:
• int(-3.7) → -3 (truncation toward zero)
• math.floor(-3.7) → -4 (floor toward negative infinity)
• int() removes the decimal part: -3.7 → -3
• floor() finds the largest integer ≤ the value: -4 ≤ -3.7
• This difference affects division too: -7 // 2 = -4 (floor division)

Why it matters:
• Python's // operator uses floor division, not truncation
• -17 // 5 = -4 (not -3), because Python floors toward negative infinity
• C/Java integer division truncates: -17 / 5 = -3`
  }),
  // Q11: math.pi — approximate value
  (_i: number) => ({
    q: `What does math.pi start with (to 5 decimal places)?`,
    o: ["3.14159", "3.14169", "3.15149", "3.14195"],
    c: 0,
    e: "math.pi is the mathematical constant π ≈ 3.14159265358979...",
    de: `math.pi provides the mathematical constant π (pi) as a float, accurate to the full precision of a 64-bit double.

Key concepts:
• math.pi → 3.141592653589793
• π is the ratio of a circle's circumference to its diameter
• It is an irrational and transcendental number
• Python stores it as a double-precision float (about 15-17 significant digits)
• Used in trigonometry, geometry, and many mathematical formulas

Example:
>>> import math
>>> math.pi
3.141592653589793
>>> math.pi * 1  # radius 1 circle circumference / 2
3.141592653589793`
  }),
  // Q12: math.e — Euler's number
  (_i: number) => ({
    q: `What does math.e start with (to 5 decimal places)?`,
    o: ["2.71828", "2.71282", "2.78128", "2.71818"],
    c: 0,
    e: "math.e is Euler's number e ≈ 2.71828182845904...",
    de: `math.e provides Euler's number (e), the base of natural logarithms, as a float constant.

Key concepts:
• math.e → 2.718281828459045
• e is the base of the natural logarithm (ln)
• e is irrational and transcendental
• e = lim(n→∞) (1 + 1/n)^n
• Used in exponential growth/decay, compound interest, calculus

Example:
>>> math.e
2.718281828459045
>>> math.log(math.e)
1.0`
  }),
  // Q13: math.inf — positive infinity
  (_i: number) => ({
    q: `What is type(math.inf).__name__?`,
    o: ["float", "int", "inf", "Error"],
    c: 0,
    e: "math.inf is a special float value representing positive infinity.",
    de: `math.inf is a special floating-point value representing positive infinity. It is of type float, not a separate type.

Key concepts:
• math.inf → inf (positive infinity)
• type(math.inf) → <class 'float'>
• Equivalent to float('inf')
• Infinity is defined in the IEEE 754 floating-point standard
• Any finite number compared to inf is smaller
• inf + 1 = inf, inf * 2 = inf
• inf - inf = nan (not a number)

Example:
>>> type(math.inf)
<class 'float'>
>>> type(math.inf).__name__
'float'`
  }),
  // Q14: math.inf > any large number
  (_i: number) => ({
    q: `What is math.inf > 10 ** 100?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "Positive infinity is greater than any finite number, even 10^100 (a googol).",
    de: `math.inf represents positive infinity, which by definition is larger than any finite number, no matter how large.

Key concepts:
• math.inf > 10 ** 100 → True
• 10 ** 100 is a googol (1 followed by 100 zeros) — an astronomically large number
• Even so, infinity is still larger
• math.inf > any_finite_number is always True
• math.inf == math.inf is True
• Only math.inf is not less than math.inf

Example:
>>> math.inf > 10 ** 100
True
>>> math.inf > 10 ** 1000
True`
  }),
  // Q15: -math.inf less than any negative number
  (_i: number) => ({
    q: `What is -math.inf < -10 ** 100?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "Negative infinity is less than any finite number, even -10^100.",
    de: `Negative infinity (-math.inf) is less than every finite number, no matter how negative.

Key concepts:
• -math.inf < -10 ** 100 → True
• -10 ** 100 is an astronomically large negative number
• But -infinity is still more negative
• -math.inf < any_finite_number is always True
• -math.inf == -math.inf is True
• -math.inf is equivalent to float('-inf')

Example:
>>> -math.inf < -10 ** 100
True
>>> -math.inf < -10 ** 10000
True`
  }),
  // Q16: math.nan — what type is it?
  (_i: number) => ({
    q: `What is type(math.nan).__name__?`,
    o: ["float", "NoneType", "nan", "Error"],
    c: 0,
    e: "math.nan is a special float value representing 'not a number'.",
    de: `math.nan (Not a Number) is a special floating-point value used to represent undefined or unrepresentable numerical results. Surprisingly, it is of type float.

Key concepts:
• math.nan → nan
• type(math.nan) → <class 'float'>
• NaN results from operations like 0/0 or inf - inf (in float context)
• NaN is defined by the IEEE 754 standard
• Equivalent to float('nan')
• NaN is "quiet" — it propagates through calculations without raising errors

Example:
>>> type(math.nan)
<class 'float'>
>>> type(math.nan).__name__
'float'`
  }),
  // Q17: math.nan equality — NaN is not equal to itself
  (_i: number) => ({
    q: `What is math.nan == math.nan?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "NaN is never equal to anything, not even itself. This is by IEEE 754 design.",
    de: `One of the most surprising behaviors in computing: NaN (Not a Number) is not equal to itself. This is mandated by the IEEE 754 floating-point standard.

Key concepts:
• math.nan == math.nan → False
• This is the ONLY value in Python where x == x is False
• This behavior is by design, not a bug
• To check for NaN, use math.isnan() instead of ==
• x != x being True is actually a quick NaN test
• float('nan') == float('nan') is also False

Why? IEEE 754 defines NaN as representing an undefined result. Since two undefined results aren't necessarily the same, comparing them should not return True.

Example:
>>> math.nan == math.nan
False
>>> x = math.nan
>>> x == x
False`
  }),
  // Q18: math.isnan — proper way to check for NaN
  (_i: number) => ({
    q: `What is math.isnan(math.nan)?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "math.isnan() is the correct way to check if a value is NaN.",
    de: `Since NaN != NaN (the == operator always returns False for NaN), you need math.isnan() to reliably detect NaN values.

Key concepts:
• math.isnan(math.nan) → True
• math.isnan(3.14) → False
• math.isnan(math.inf) → False (infinity is not NaN)
• Alternative: x != x is True only when x is NaN
• In pandas: pd.isna() or pd.isnull() also detect NaN
• NaN propagates: math.nan + 5 → nan, and isnan detects it

Example:
>>> math.isnan(math.nan)
True
>>> math.isnan(42.0)
False`
  }),
  // Q19: math.isinf — check for infinity
  (_i: number) => ({
    q: `What is math.isinf(math.inf)?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "math.isinf() returns True for both positive and negative infinity.",
    de: `math.isinf() checks whether a value is positive or negative infinity.

Key concepts:
• math.isinf(math.inf) → True
• math.isinf(-math.inf) → True (also catches negative infinity)
• math.isinf(3.14) → False
• math.isinf(math.nan) → False (NaN is not infinity)
• float('inf') and float('-inf') are also detected
• Useful for validating computation results

Example:
>>> math.isinf(math.inf)
True
>>> math.isinf(-math.inf)
True
>>> math.isinf(999999)
False`
  }),
  // Q20: math.isfinite — True for normal numbers
  (_i: number) => ({
    q: `What is math.isfinite(3.14)?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "math.isfinite() returns True if the value is neither infinity nor NaN.",
    de: `math.isfinite() returns True for any number that is not infinity and not NaN — i.e., a "normal" numeric value.

Key concepts:
• math.isfinite(3.14) → True
• math.isfinite(0) → True
• math.isfinite(10 ** 100) → True (large but finite)
• math.isfinite(math.inf) → False
• math.isfinite(math.nan) → False
• Essentially: isfinite(x) == (not isinf(x) and not isnan(x))

Example:
>>> math.isfinite(3.14)
True
>>> math.isfinite(math.inf)
False`
  }),
  // Q21: math.isfinite — False for infinity
  (_i: number) => ({
    q: `What is math.isfinite(math.inf)?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "math.isfinite() returns False for infinity because infinity is not a finite number.",
    de: `Infinity, while a valid float value, is not a finite number. math.isfinite() returns False for both positive and negative infinity.

Key concepts:
• math.isfinite(math.inf) → False
• math.isfinite(-math.inf) → False
• math.isfinite(math.nan) → False (NaN is also not finite)
• Contrast: math.isinf(math.inf) → True
• isfinite is the most conservative check — only True for "normal" numbers

Example:
>>> math.isfinite(math.inf)
False
>>> math.isfinite(-math.inf)
False`
  }),
  // Q22: math.log — natural logarithm of 1
  (_i: number) => ({
    q: `What is math.log(1)?`,
    o: ["0.0", "1.0", "Error", "None"],
    c: 0,
    e: "The natural logarithm of 1 is 0, because e^0 = 1.",
    de: `math.log(x) computes the natural logarithm (base e) of x. Since e^0 = 1, the natural log of 1 is 0.

Key concepts:
• math.log(1) → 0.0
• ln(1) = 0 because e^0 = 1
• This is true for ALL logarithm bases: log_b(1) = 0 for any base b
• math.log() returns a float
• math.log(0) raises ValueError (log of 0 is undefined / -infinity)
• math.log(x) for x < 0 also raises ValueError

Example:
>>> math.log(1)
0.0
>>> math.log(math.e)
1.0`
  }),
  // Q23: math.log — natural logarithm of e
  (_i: number) => ({
    q: `What is math.log(math.e)?`,
    o: ["1.0", "0.0", "2.71828", "Error"],
    c: 0,
    e: "The natural log of e is 1, because e^1 = e.",
    de: `Since the natural logarithm uses base e, and log_e(e) = 1 by definition, math.log(math.e) returns 1.0.

Key concepts:
• math.log(math.e) → 1.0
• ln(e) = 1 because e^1 = e
• math.log(math.e ** 2) → 2.0
• math.log(math.e ** n) → n (approximately, due to float precision)
• The natural log is the inverse of the exponential function

Example:
>>> math.log(math.e)
1.0
>>> math.log(math.e ** 3)
3.0000000000000004`
  }),
  // Q24: math.log10 — base-10 logarithm
  (_i: number) => ({
    q: `What is math.log10(100)?`,
    o: ["2.0", "10.0", "100.0", "Error"],
    c: 0,
    e: "math.log10(100) is 2.0 because 10^2 = 100.",
    de: `math.log10() computes the base-10 (common) logarithm. It answers the question: "10 raised to what power equals x?"

Key concepts:
• math.log10(100) → 2.0 (because 10² = 100)
• math.log10(1000) → 3.0 (because 10³ = 1000)
• math.log10(1) → 0.0 (because 10⁰ = 1)
• More accurate than math.log(x, 10) for base-10 calculations
• Useful for scientific notation, decibel calculations, pH scales

Example:
>>> math.log10(100)
2.0
>>> math.log10(1)
0.0`
  }),
  // Q25: math.log2 — base-2 logarithm
  (_i: number) => ({
    q: `What is math.log2(8)?`,
    o: ["3.0", "2.0", "8.0", "Error"],
    c: 0,
    e: "math.log2(8) is 3.0 because 2^3 = 8.",
    de: `math.log2() computes the base-2 (binary) logarithm. It answers: "2 raised to what power equals x?"

Key concepts:
• math.log2(8) → 3.0 (because 2³ = 8)
• math.log2(1024) → 10.0 (because 2¹⁰ = 1024)
• math.log2(1) → 0.0 (because 2⁰ = 1)
• More accurate than math.log(x, 2) for powers of 2
• Essential in computer science: bit counting, binary trees, algorithm complexity

Example:
>>> math.log2(8)
3.0
>>> math.log2(256)
8.0`
  }),
  // Q26: math.factorial — 5!
  (_i: number) => ({
    q: `What is math.factorial(5)?`,
    o: ["120", "24", "60", "Error"],
    c: 0,
    e: "5! = 5 × 4 × 3 × 2 × 1 = 120.",
    de: `math.factorial(n) computes n! (n factorial), the product of all positive integers up to n.

Key concepts:
• math.factorial(5) = 5! = 5 × 4 × 3 × 2 × 1 = 120
• math.factorial(0) → 1 (by mathematical convention, 0! = 1)
• Returns an int (can be arbitrarily large in Python)
• Raises ValueError for negative numbers
• Raises ValueError for non-integers
• Used in combinatorics, probability, permutations

Example:
>>> math.factorial(5)
120
>>> math.factorial(0)
1
>>> math.factorial(10)
3628800`
  }),
  // Q27: math.gcd — greatest common divisor
  (_i: number) => ({
    q: `What is math.gcd(12, 8)?`,
    o: ["4", "2", "8", "24"],
    c: 0,
    e: "The greatest common divisor of 12 and 8 is 4.",
    de: `math.gcd() returns the greatest common divisor — the largest positive integer that divides both numbers evenly.

Key concepts:
• math.gcd(12, 8) → 4
• Factors of 12: 1, 2, 3, 4, 6, 12
• Factors of 8: 1, 2, 4, 8
• Common factors: 1, 2, 4 → greatest is 4
• math.gcd(0, n) → n (by convention)
• In Python 3.9+, gcd accepts multiple arguments: math.gcd(12, 8, 6) → 2

Example:
>>> math.gcd(12, 8)
4
>>> math.gcd(15, 25)
5`
  }),
  // Q28: math.lcm — least common multiple (Python 3.9+)
  (_i: number) => ({
    q: `What is math.lcm(4, 6)?`,
    o: ["12", "24", "2", "Error"],
    c: 0,
    e: "The least common multiple of 4 and 6 is 12.",
    de: `math.lcm() (added in Python 3.9) returns the least common multiple — the smallest positive integer that is divisible by both arguments.

Key concepts:
• math.lcm(4, 6) → 12
• Multiples of 4: 4, 8, 12, 16, 20, ...
• Multiples of 6: 6, 12, 18, 24, ...
• Smallest common multiple: 12
• Relationship: lcm(a, b) = abs(a * b) // gcd(a, b)
• math.lcm(4, 6) = (4 * 6) // gcd(4, 6) = 24 // 2 = 12
• Accepts multiple arguments: math.lcm(4, 6, 10) → 60

Example:
>>> math.lcm(4, 6)
12
>>> math.lcm(3, 5)
15`
  }),
  // Q29: math.comb — combinations
  (_i: number) => ({
    q: `What is math.comb(5, 2)?`,
    o: ["10", "20", "25", "Error"],
    c: 0,
    e: "C(5,2) = 5! / (2! × 3!) = 10 — the number of ways to choose 2 items from 5.",
    de: `math.comb(n, k) computes the binomial coefficient C(n, k) — the number of ways to choose k items from n items without regard to order.

Key concepts:
• math.comb(5, 2) → 10
• Formula: C(n, k) = n! / (k! × (n-k)!)
• C(5, 2) = 5! / (2! × 3!) = 120 / (2 × 6) = 10
• Order doesn't matter: choosing {A,B} is the same as {B,A}
• math.comb(n, 0) → 1 (one way to choose nothing)
• math.comb(n, n) → 1 (one way to choose everything)
• Added in Python 3.8

Example:
>>> math.comb(5, 2)
10
>>> math.comb(10, 3)
120`
  }),
  // Q30: math.perm — permutations
  (_i: number) => ({
    q: `What is math.perm(5, 2)?`,
    o: ["20", "10", "25", "Error"],
    c: 0,
    e: "P(5,2) = 5! / 3! = 5 × 4 = 20 — the number of ordered arrangements of 2 from 5.",
    de: `math.perm(n, k) computes the number of permutations — the number of ways to arrange k items from n items where order matters.

Key concepts:
• math.perm(5, 2) → 20
• Formula: P(n, k) = n! / (n-k)!
• P(5, 2) = 5! / 3! = 120 / 6 = 20
• Unlike combinations, order matters: (A,B) ≠ (B,A)
• math.perm(5, 2) = math.comb(5, 2) × math.factorial(2) = 10 × 2 = 20
• math.perm(n) without k returns n! (all permutations)
• Added in Python 3.8

Example:
>>> math.perm(5, 2)
20
>>> math.perm(5, 2) == math.comb(5, 2) * math.factorial(2)
True`
  }),
  // Q31: divmod — positive division
  (_i: number) => ({
    q: `What is divmod(17, 5)?`,
    o: ["(3, 2)", "(3, 3)", "(2, 7)", "Error"],
    c: 0,
    e: "divmod(17, 5) returns (3, 2) because 17 = 5 × 3 + 2.",
    de: `divmod(a, b) returns a tuple of (quotient, remainder) where quotient = a // b and remainder = a % b.

Key concepts:
• divmod(17, 5) → (3, 2)
• 17 // 5 = 3 (floor division)
• 17 % 5 = 2 (remainder)
• Verification: 5 × 3 + 2 = 17 ✓
• Invariant: b * quotient + remainder == a (always holds)
• More efficient than computing // and % separately

Example:
>>> divmod(17, 5)
(3, 2)
>>> q, r = divmod(17, 5)
>>> 5 * q + r == 17
True`
  }),
  // Q32: divmod — negative dividend (floors toward negative infinity)
  (_i: number) => ({
    q: `What is divmod(-17, 5)?`,
    o: ["(-4, 3)", "(-3, -2)", "(-3, 2)", "(-4, -3)"],
    c: 0,
    e: "divmod(-17, 5) is (-4, 3) because Python floors toward negative infinity: -17 = 5 × (-4) + 3.",
    de: `When the dividend is negative, Python's floor division rounds toward negative infinity, producing a potentially surprising remainder.

Key concepts:
• divmod(-17, 5) → (-4, 3)
• -17 // 5 = -4 (floor toward negative infinity, not -3!)
• -17 % 5 = 3 (remainder is positive when divisor is positive)
• Verification: 5 × (-4) + 3 = -20 + 3 = -17 ✓
• In C/Java: -17 / 5 = -3, -17 % 5 = -2 (truncation)
• Python's behavior ensures remainder has the same sign as the divisor

Why -4 and not -3?
• -17 / 5 = -3.4
• floor(-3.4) = -4 (floor goes toward negative infinity)
• Remainder: -17 - (5 × -4) = -17 + 20 = 3`
  }),
  // Q33: divmod — negative divisor
  (_i: number) => ({
    q: `What is divmod(17, -5)?`,
    o: ["(-4, -3)", "(-3, 2)", "(3, -2)", "(-4, 3)"],
    c: 0,
    e: "divmod(17, -5) is (-4, -3) because the remainder takes the sign of the divisor.",
    de: `When the divisor is negative, Python still floors toward negative infinity, and the remainder takes the sign of the divisor.

Key concepts:
• divmod(17, -5) → (-4, -3)
• 17 // -5 = -4 (floor of 17 / -5 = -3.4 → floor is -4)
• 17 % -5 = -3 (remainder has same sign as divisor)
• Verification: (-5) × (-4) + (-3) = 20 - 3 = 17 ✓
• The invariant b * q + r == a always holds
• Remainder sign matches the divisor sign in Python

Example:
>>> divmod(17, -5)
(-4, -3)
>>> -5 * (-4) + (-3) == 17
True`
  }),
  // Q34: round with floating point representation issue
  (_i: number) => ({
    q: `What is round(2.675, 2)?`,
    o: ["2.67", "2.68", "2.7", "Error"],
    c: 0,
    e: "Due to float representation, 2.675 is stored as ~2.6749999... so it rounds to 2.67, not 2.68.",
    de: `This is a classic floating-point gotcha. You might expect round(2.675, 2) to give 2.68 (rounding up), but it gives 2.67.

Key concepts:
• round(2.675, 2) → 2.67 (not 2.68!)
• The number 2.675 cannot be represented exactly in binary floating point
• Internally it's stored as approximately 2.6749999999999998
• Since the stored value is < 2.675, it rounds down to 2.67
• This is NOT a Python bug — it's an IEEE 754 limitation
• For exact decimal arithmetic, use the decimal module

Example:
>>> round(2.675, 2)
2.67
>>> from decimal import Decimal
>>> round(Decimal('2.675'), 2)
Decimal('2.68')`
  }),
  // Q35: round to negative decimal places (round to hundreds)
  (_i: number) => ({
    q: `What is round(1234, -2)?`,
    o: ["1200", "1230", "1300", "Error"],
    c: 0,
    e: "round(1234, -2) rounds to the nearest hundred: 1200.",
    de: `Python's round() accepts negative ndigits to round to tens, hundreds, thousands, etc.

Key concepts:
• round(1234, -2) → 1200 (round to nearest 100)
• -1 rounds to tens: round(1234, -1) → 1230
• -2 rounds to hundreds: round(1234, -2) → 1200
• -3 rounds to thousands: round(1234, -3) → 1000
• The result is always an int when input is int
• 1234 is closer to 1200 than to 1300 (distance 34 vs 66)

Example:
>>> round(1234, -2)
1200
>>> round(1234, -1)
1230`
  }),
  // Q36: round — banker's rounding to hundreds
  (_i: number) => ({
    q: `What is round(1250, -2)?`,
    o: ["1200", "1300", "1250", "Error"],
    c: 0,
    e: "Banker's rounding: 1250 is exactly halfway, so it rounds to the even hundred: 1200.",
    de: `Python uses "banker's rounding" (round half to even). When a number is exactly halfway between two values, it rounds to the nearest even result.

Key concepts:
• round(1250, -2) → 1200 (not 1300!)
• 1250 is exactly halfway between 1200 and 1300
• 12 is even, 13 is odd → rounds to 1200 (the even hundred)
• This minimizes cumulative rounding bias in statistics
• Also called "round half to even" or "convergent rounding"
• School math teaches "round up at .5" — Python does NOT do this

Example:
>>> round(1250, -2)
1200
>>> round(1350, -2)
1400`
  }),
  // Q37: round — banker's rounding rounds to even (1350 → 1400)
  (_i: number) => ({
    q: `What is round(1350, -2)?`,
    o: ["1400", "1300", "1350", "Error"],
    c: 0,
    e: "1350 is exactly halfway; banker's rounding rounds to the even hundred: 1400.",
    de: `Continuing the banker's rounding pattern: when exactly halfway, round to the nearest even value.

Key concepts:
• round(1350, -2) → 1400
• 1350 is exactly halfway between 1300 and 1400
• 13 is odd, 14 is even → rounds to 1400 (the even hundred)
• Contrast with round(1250, -2) → 1200 (12 is even)
• Pattern: .5 always rounds toward the even side

Comparison:
• round(1250, -2) → 1200 (12 even ✓)
• round(1350, -2) → 1400 (14 even ✓)
• round(1450, -2) → 1400 (14 even ✓)
• round(1550, -2) → 1600 (16 even ✓)`
  }),
  // Q38: round fixes float imprecision
  (_i: number) => ({
    q: `What is round(0.1 + 0.2, 1)?`,
    o: ["0.3", "0.30000000000000004", "0.2", "Error"],
    c: 0,
    e: "round(0.1 + 0.2, 1) gives 0.3, effectively correcting the float imprecision.",
    de: `The famous 0.1 + 0.2 problem: the result is 0.30000000000000004 due to binary float representation. Rounding to 1 decimal place corrects this.

Key concepts:
• 0.1 + 0.2 → 0.30000000000000004 (not exactly 0.3)
• round(0.30000000000000004, 1) → 0.3
• Rounding is a practical fix for display purposes
• For exact arithmetic, use decimal.Decimal
• This imprecision exists in all languages using IEEE 754 floats
• The error (~5.5e-17) is negligible for most applications

Example:
>>> 0.1 + 0.2
0.30000000000000004
>>> round(0.1 + 0.2, 1)
0.3`
  }),
  // Q39: math.fsum — more accurate than sum
  (_i: number) => ({
    q: `Is math.fsum([0.1, 0.2, 0.3]) more accurate than sum([0.1, 0.2, 0.3])?`,
    o: ["Yes, fsum gives exactly 0.6", "No, both give the same result", "fsum raises an Error", "sum is more accurate"],
    c: 0,
    e: "math.fsum uses compensated summation to minimize float errors; sum may accumulate rounding errors.",
    de: `math.fsum() uses a compensated summation algorithm to track lost low-order bits, producing more accurate results than the built-in sum() for floating-point numbers.

Key concepts:
• sum([0.1, 0.2, 0.3]) → 0.6000000000000001 (accumulated error)
• math.fsum([0.1, 0.2, 0.3]) → 0.6 (compensated, more accurate)
• fsum uses the Shewchuk algorithm to minimize rounding errors
• For integer or simple sums, sum() is perfectly fine
• fsum is important in scientific computing where precision matters
• fsum always returns a float

Example:
>>> sum([0.1, 0.2, 0.3])
0.6000000000000001
>>> math.fsum([0.1, 0.2, 0.3])
0.6`
  }),
  // Q40: math.copysign — copy sign from one number to another
  (_i: number) => ({
    q: `What is math.copysign(1, -3)?`,
    o: ["-1.0", "1.0", "-3.0", "Error"],
    c: 0,
    e: "math.copysign(x, y) returns x with the sign of y: copysign(1, -3) → -1.0.",
    de: `math.copysign(x, y) returns a float with the magnitude (absolute value) of x but the sign of y.

Key concepts:
• math.copysign(1, -3) → -1.0
• Takes the magnitude of first argument: |1| = 1
• Takes the sign of second argument: sign(-3) = negative
• Result: -1.0 (always returns float)
• math.copysign(5, -1) → -5.0
• math.copysign(-5, 1) → 5.0
• Useful for preserving sign information in numerical algorithms

Example:
>>> math.copysign(1, -3)
-1.0
>>> math.copysign(3.14, -1)
-3.14
>>> math.copysign(-7, 2)
7.0`
  }),
  // Q41: pow with large exponent
  (_i: number) => ({
    q: `What is pow(2, 10)?`,
    o: ["1024", "100", "20", "Error"],
    c: 0,
    e: "pow(2, 10) = 2^10 = 1024.",
    de: `The built-in pow(base, exp) computes base raised to the power exp. pow(2, 10) computes 2¹⁰.

Key concepts:
• pow(2, 10) → 1024
• 2^10 = 2×2×2×2×2×2×2×2×2×2 = 1024
• Equivalent to 2 ** 10
• Built-in pow() returns int when both arguments are non-negative ints
• pow() with two arguments is the same as the ** operator
• 1024 = 1 KB in computing (2^10 bytes)

Example:
>>> pow(2, 10)
1024
>>> 2 ** 10
1024`
  }),
  // Q42: pow with negative exponent
  (_i: number) => ({
    q: `What is pow(2, -1)?`,
    o: ["0.5", "2", "-2", "Error"],
    c: 0,
    e: "pow(2, -1) = 2^(-1) = 1/2 = 0.5.",
    de: `Negative exponents produce reciprocals. pow(2, -1) computes 1/2¹ = 0.5.

Key concepts:
• pow(2, -1) → 0.5
• 2^(-1) = 1 / 2^1 = 1/2 = 0.5
• Negative exponent means "1 divided by base^|exponent|"
• pow(2, -2) → 0.25 (1/4)
• pow(2, -3) → 0.125 (1/8)
• Returns a float when exponent is negative
• The ** operator behaves the same: 2 ** -1 → 0.5

Example:
>>> pow(2, -1)
0.5
>>> pow(5, -1)
0.2`
  }),
  // Q43: pow with fractional exponent (square root via pow)
  (_i: number) => ({
    q: `Does pow(2, 0.5) compute the square root of 2?`,
    o: ["Yes, it returns ~1.4142", "No, it raises an Error", "No, it returns 1.0", "No, it returns 2.0"],
    c: 0,
    e: "pow(2, 0.5) = 2^0.5 = √2 ≈ 1.4142135623730951.",
    de: `Fractional exponents compute roots. An exponent of 0.5 is equivalent to a square root.

Key concepts:
• pow(2, 0.5) → 1.4142135623730951
• 2^0.5 = √2 by the mathematical identity x^(1/n) = ⁿ√x
• pow(27, 1/3) → 3.0 (cube root of 27)
• pow(16, 0.25) → 2.0 (fourth root of 16)
• Returns float for fractional exponents
• Same result as math.sqrt(2) for square roots

Example:
>>> pow(2, 0.5)
1.4142135623730951
>>> math.sqrt(2)
1.4142135623730951`
  }),
  // Q44: math.pow always returns float
  (_i: number) => ({
    q: `What is math.pow(2, 3)?`,
    o: ["8.0", "8", "6", "Error"],
    c: 0,
    e: "math.pow() always returns a float: math.pow(2, 3) returns 8.0, not 8.",
    de: `math.pow() differs from the built-in pow() in that it always returns a float, even when both arguments are integers.

Key concepts:
• math.pow(2, 3) → 8.0 (float)
• Built-in pow(2, 3) → 8 (int)
• math.pow() converts arguments to float internally
• math.pow() does NOT support the three-argument form (modular exponentiation)
• math.pow() can handle float arguments more predictably
• For integer results, use built-in pow() or **

Comparison:
>>> math.pow(2, 3)    # → 8.0 (float)
>>> pow(2, 3)          # → 8 (int)
>>> 2 ** 3             # → 8 (int)`
  }),
  // Q45: 2 ** 0.5 vs math.sqrt(2) — same result
  (_i: number) => ({
    q: `Do 2 ** 0.5 and math.sqrt(2) give the same result?`,
    o: ["Yes, both give ~1.4142", "No, ** is less accurate", "No, sqrt returns int", "Error with **"],
    c: 0,
    e: "Both compute √2 and return the same float: 1.4142135623730951.",
    de: `The ** operator with exponent 0.5 and math.sqrt() both compute square roots and produce identical results.

Key concepts:
• 2 ** 0.5 → 1.4142135623730951
• math.sqrt(2) → 1.4142135623730951
• 2 ** 0.5 == math.sqrt(2) → True
• Both use the same underlying C library function (on most platforms)
• math.sqrt() is slightly more readable for square roots
• ** is more flexible: works for any exponent (cube root: x ** (1/3))

Example:
>>> 2 ** 0.5
1.4142135623730951
>>> math.sqrt(2)
1.4142135623730951
>>> 2 ** 0.5 == math.sqrt(2)
True`
  }),
  // Q46: math.isclose — comparing floats safely
  (_i: number) => ({
    q: `What is math.isclose(0.1 + 0.2, 0.3)?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "math.isclose() handles float imprecision: 0.1 + 0.2 ≈ 0.3 within default tolerance.",
    de: `math.isclose() compares two floats with a tolerance, solving the classic 0.1 + 0.2 != 0.3 problem.

Key concepts:
• 0.1 + 0.2 == 0.3 → False (direct comparison fails!)
• math.isclose(0.1 + 0.2, 0.3) → True (tolerance-aware comparison)
• Default relative tolerance: 1e-09
• Default absolute tolerance: 0.0
• Formula: |a - b| <= max(rel_tol * max(|a|, |b|), abs_tol)
• Essential for comparing floating-point results in tests and algorithms

Example:
>>> 0.1 + 0.2 == 0.3
False
>>> math.isclose(0.1 + 0.2, 0.3)
True`
  }),
  // Q47: math.isclose with abs_tol
  (_i: number) => ({
    q: `What is math.isclose(1.0, 1.001, abs_tol=0.01)?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "The difference is 0.001, which is within the absolute tolerance of 0.01, so True.",
    de: `math.isclose() supports an abs_tol parameter for specifying an absolute tolerance threshold.

Key concepts:
• math.isclose(1.0, 1.001, abs_tol=0.01) → True
• |1.0 - 1.001| = 0.001
• 0.001 <= 0.01 (abs_tol) → True
• abs_tol provides a fixed tolerance regardless of the magnitude of the values
• Useful when comparing values near zero where relative tolerance fails
• You can combine rel_tol and abs_tol; the larger tolerance wins

Example:
>>> math.isclose(1.0, 1.001, abs_tol=0.01)
True
>>> math.isclose(1.0, 1.02, abs_tol=0.01)
False`
  }),
  // Q48: math.degrees — radians to degrees
  (_i: number) => ({
    q: `What is math.degrees(math.pi)?`,
    o: ["180.0", "3.14159", "90.0", "Error"],
    c: 0,
    e: "π radians = 180 degrees. math.degrees(math.pi) converts π to 180.0.",
    de: `math.degrees() converts an angle from radians to degrees. Since π radians = 180°, math.degrees(math.pi) returns 180.0.

Key concepts:
• math.degrees(math.pi) → 180.0
• Conversion formula: degrees = radians × (180 / π)
• math.degrees(0) → 0.0
• math.degrees(math.pi / 2) → 90.0
• math.degrees(2 * math.pi) → 360.0
• Python's trigonometric functions (sin, cos, tan) use radians
• Use degrees() to convert results to human-readable angles

Example:
>>> math.degrees(math.pi)
180.0
>>> math.degrees(math.pi / 2)
90.0`
  }),
  // Q49: math.radians — degrees to radians
  (_i: number) => ({
    q: `Is math.radians(180) approximately equal to math.pi?`,
    o: ["Yes, it returns ~3.14159", "No, it returns 180.0", "No, it returns 1.0", "Error"],
    c: 0,
    e: "math.radians(180) converts 180° to π radians ≈ 3.14159.",
    de: `math.radians() converts an angle from degrees to radians. Since 180° = π radians, math.radians(180) returns π.

Key concepts:
• math.radians(180) → 3.141592653589793 (≈ math.pi)
• Conversion formula: radians = degrees × (π / 180)
• math.radians(90) → 1.5707963267948966 (≈ π/2)
• math.radians(360) → 6.283185307179586 (≈ 2π)
• math.radians(0) → 0.0
• Use radians() before calling trig functions: math.sin(math.radians(30))

Example:
>>> math.radians(180)
3.141592653589793
>>> math.radians(180) == math.pi
True`
  }),
  // Q50: math.hypot — hypotenuse of a right triangle
  (_i: number) => ({
    q: `What is math.hypot(3, 4)?`,
    o: ["5.0", "7.0", "12.0", "Error"],
    c: 0,
    e: "math.hypot(3, 4) = √(3² + 4²) = √(9 + 16) = √25 = 5.0.",
    de: `math.hypot() computes the Euclidean distance (hypotenuse) from the origin to a point (x, y), i.e., √(x² + y²).

Key concepts:
• math.hypot(3, 4) → 5.0
• Calculation: √(3² + 4²) = √(9 + 16) = √25 = 5.0
• 3-4-5 is a classic Pythagorean triple (a² + b² = c²)
• More numerically stable than math.sqrt(x**2 + y**2)
• In Python 3.8+, accepts multiple arguments: math.hypot(1, 2, 3) for 3D distance
• Equivalent to the Euclidean norm (length) of a vector

Example:
>>> math.hypot(3, 4)
5.0
>>> math.hypot(5, 12)
13.0
>>> math.hypot(1, 1)
1.4142135623730951`
  }),
];
