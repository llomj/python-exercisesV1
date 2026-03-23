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
<class 'float'>

Key Distinctions:
• math.sqrt(16) returns 4.0 as float — the nonnegative square root.
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
• For integers, **0.5 or isqrt for exact integer floor root.`
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
False

Key Distinctions:
• math.sqrt(2) returns a float approximation — not a symbolic exact radical.
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
• sympy.sqrt(2) for exact algebra — not math.`
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
<class 'int'>

Key Distinctions:
• math.floor(x) returns greatest integer less than or equal to x — toward negative infinity.
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
• math.floor returns int in Python 3.`
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
-3

Key Distinctions:
• floor(-3.7) is -4 — more negative than trunc toward zero.
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
• Use math.floor explicitly when you need floor semantics, not trunc.`
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
3

Key Distinctions:
• math.ceil(x) returns smallest integer greater than or equal to x.
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
• math.ceil returns int in Python 3.`
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
-4

Key Distinctions:
• ceil(-3.2) is -3 — closer to zero than floor would be.
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
• For rounding to nearest, use round or Decimal.`
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
3

Key Distinctions:
• math.trunc(x) truncates toward zero — drops fractional part.
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
• math.trunc exists for clarity over int(x).`
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
 -3.7   |   -3     |   -4     |   -3

Key Distinctions:
• trunc(-3.7) is -3, toward zero — not -4 floor.
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
• Choose trunc vs floor vs ceil by business rule.`
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
3

Key Distinctions:
• For positive x, floor(x) equals int(x) truncation — both yield 3 for 3.7.
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
• Do not assume equality for negative.`
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
• C/Java integer division truncates: -17 / 5 = -3

Key Distinctions:
• int(-3.7) truncates toward zero -> -3.
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
• Decimal quantize with explicit rounding mode for money.`
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
3.141592653589793

Key Distinctions:
• math.pi is a float constant approximating pi — 3.14159... to machine precision.
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
• For arbitrary precision use decimal or mpmath.`
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
1.0

Key Distinctions:
• math.e is float base of natural logarithms — ~2.71828.
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
• numpy has e too — different object if mixing.`
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
'float'

Key Distinctions:
• type(math.inf).__name__ is 'float' — inf is a float special value.
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
• Compare with numpy.inf separately in numpy code.`
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
True

Key Distinctions:
• Any finite float is less than positive infinity; math.inf > 10**100 is True.
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
• Do not compare inf with nan using <.`
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
True

Key Distinctions:
• -math.inf is negative infinity; less than any finite negative huge magnitude.
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
• Watch cost of constructing 10**100 for trivial compare.`
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
'float'

Key Distinctions:
• type(math.nan).__name__ is 'float' — nan is a float special.
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
• Use isnan not ==.`
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
False

Key Distinctions:
• nan == nan is False by IEEE rule — NaN is unordered with itself.
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
• collections with nan keys behave oddly.`
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
False

Key Distinctions:
• math.isnan(math.nan) is True — predicate for NaN.
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
• Do not use x == x for nan test — fails.`
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
False

Key Distinctions:
• math.isinf(math.inf) is True.
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
• isfinite is the complement for strict checks.`
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
False

Key Distinctions:
• math.isfinite(3.14) is True — normal real number.
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
• math.isfinite preferred over manual checks.`
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
False

Key Distinctions:
• math.isfinite(inf) is False — infinity is not finite.
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
• numpy has isfinite vectorized.`
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
1.0

Key Distinctions:
• math.log(1) is 0.0 — natural log of 1.
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
• math.log10 and log2 for other bases.`
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
3.0000000000000004

Key Distinctions:
• math.log(math.e) is 1.0 — natural log of e is identity.
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
• Use math.log1p for x near 0.`
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
0.0

Key Distinctions:
• math.log10(100) is 2.0 — base-10 logarithm.
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
• For arbitrary base: log(x,b)=log(x)/log(b).`
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
8.0

Key Distinctions:
• math.log2(8) is 3.0 — log base 2.
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
• int.bit_length differs from log2 floor.`
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
3628800

Key Distinctions:
• math.factorial(5) is 120 — 5*4*3*2*1.
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
• math.comb and perm for selections without full factorial.`
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
5

Key Distinctions:
• math.gcd(12,8) is 4 — greatest common divisor nonnegative.
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
• Use math.gcd for two-arg clarity.`
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
15

Key Distinctions:
• math.lcm(4,6) is 12 — least common multiple.
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
• For many numbers, reduce pairwise or use functools.`
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
120

Key Distinctions:
• math.comb(5,2) is 10 — binomial coefficient n choose k.
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
• math.perm for ordered selections.`
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
True

Key Distinctions:
• math.perm(5,2) is 20 — permutations P(n,k) = n!/(n-k)!.
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
• comb counts unordered; perm counts ordered.`
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
True

Key Distinctions:
• divmod(17,5) is (3,2) — floor quotient and remainder pairing with // and %.
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
• divmod on floats exists too.`
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
• Remainder: -17 - (5 × -4) = -17 + 20 = 3

Key Distinctions:
• divmod(-17,5) pairs floor division with remainder; quotient -4, remainder 3 because (-4)*5+3=-17.
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
• Read table for negative modulo once.`
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
True

Key Distinctions:
• divmod(17,-5) yields quotient -4 and remainder -3? Verify: (-4)*(-5)+(-3)=20-3=17. Actually Python: 17 // -5 is -4, 17 % -5 is -3? Check: (-4)*(-5) + (-3) = 20-3=17. Yes.

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
• math.remainder for IEEE remainder different from float.`
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
Decimal('2.68')

Key Distinctions:
• round(2.675, 2) may be 2.67 due to bankers rounding and binary float representation of 2.675.
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
• Display with format, store with Decimal.`
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
1230

Key Distinctions:
• round(1234,-2) rounds to nearest hundred — 1200.
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
• Label axes when showing rounded thousands.`
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
1400

Key Distinctions:
• round(1250,-2) with bankers rounding ties to even 1200.
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
• Document rounding mode for stakeholders.`
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
• round(1550, -2) → 1600 (16 even ✓)

Key Distinctions:
• Same tie rule: 1350 to hundreds -> 1400 (even thousand is 1400?).
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
• Use Decimal for legal rounding.`
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
0.3

Key Distinctions:
• round(0.1+0.2,1) rounds the sum of float approximations to one decimal.
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
• Decimal for currency.`
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
0.6

Key Distinctions:
• math.fsum uses extra precision to reduce error summing floats.
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
• For decimals use Decimal.`
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
7.0

Key Distinctions:
• math.copysign(1,-3) gives -1.0 — sign of -3 applied to magnitude 1.
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
• Consistent API across math module.`
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
1024

Key Distinctions:
• pow(2,10) is 1024 — same as 2**10 for two args.
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
• math.pow always returns float — different.`
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
0.2

Key Distinctions:
• pow(2,-1) is 0.5 as float in Python 3 for int negative exponent? Actually 2**(-1) is 0.5 float.
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
• math.pow(2,-1) is 0.5 float.`
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
1.4142135623730951

Key Distinctions:
• pow(2,0.5) is sqrt(2) as float — ** with fractional exponent uses float path.
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
• cmath.exp for complex roots.`
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
>>> 2 ** 3             # → 8 (int)

Key Distinctions:
• math.pow(2,3) is 8.0 always float — unlike built-in pow which returns int for int**int.
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
• Prefer ** for integer exact powers.`
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
True

Key Distinctions:
• 2**0.5 and math.sqrt(2) both yield float sqrt(2); may differ in last bit.
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
• Prefer math.sqrt(2) for clarity.`
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
True

Key Distinctions:
• math.isclose(0.1+0.2,1.0*0.3) may be True — relative tolerance catches near equality.
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
• Do not use for Decimal — use compare.`
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
False

Key Distinctions:
• math.isclose(1.0,1.001,abs_tol=0.01) is True — within absolute tolerance 0.01.
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
• numpy has allclose vectorized.`
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
90.0

Key Distinctions:
• math.degrees(math.pi) is 180.0 — radians to degrees.
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
• math.tau is 2pi radians.`
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
True

Key Distinctions:
• math.radians(180) returns pi float — approximately equal to math.pi.
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
• Prefer storing radians internally.`
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
1.4142135623730951

Key Distinctions:
• math.hypot(3,4) is 5.0 — sqrt(3**2+4**2) without overflow/underflow.
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
• For complex z, abs(z) is hypot(z.real,z.imag).`
  }),
];
