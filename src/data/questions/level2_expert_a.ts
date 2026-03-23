// --- LEVEL 2 EXPERT A: Decimal, Fractions, Complex Numbers, Bitwise Operations — 50 TRULY UNIQUE QUESTIONS ---
export const level2ExpertA = [
  // ===== DECIMAL MODULE (1–15) =====

  // Q1
  (_i: number) => ({
    q: `What is Decimal("0.1") + Decimal("0.2") == Decimal("0.3")?\n(from decimal import Decimal)`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "Decimal performs exact base-10 arithmetic — no float rounding errors.",
    de: `Unlike float, the Decimal type stores numbers exactly as written in base-10. The infamous 0.1 + 0.2 != 0.3 problem with floats does not exist with Decimal.

Key concepts:
• Decimal("0.1") is stored as exactly 0.1, not a binary approximation
• Decimal("0.1") + Decimal("0.2") produces Decimal("0.3") exactly
• Compare: 0.1 + 0.2 == 0.3 is False with floats

Why it matters:
• Financial calculations require exact decimal arithmetic
• float(0.1) is actually 0.1000000000000000055511151231...
• Decimal("0.1") is exactly 0.1 — no approximation

Example:
>>> from decimal import Decimal
>>> Decimal("0.1") + Decimal("0.2") == Decimal("0.3")
True
>>> 0.1 + 0.2 == 0.3
False

Key Distinctions:
• Decimal compares values in base ten; the equality tests exact rational value, not float bits.
• "0.1"+"0.2" as Decimal sums to exactly 0.3, so == Decimal("0.3") is True — unlike float 0.1+0.2.

How It Works:
• Decimal.__add__ then __eq__ against another Decimal constructed from the string "0.3".

Step-by-Step Execution:
1. Build Decimal instances from string literals (exact coefficients).
2. Add left and right Decimal operands.
3. Compare result to Decimal("0.3") with value equality.

Order of Operations:
• Function calls (Decimal(...)) and import context are outside the pure comparison semantics.

Common Use Cases:
• Monetary and billing checks where float noise is unacceptable.

Edge Cases:
• Context (precision, rounding) can change results if not using default context; this quiz uses plain Decimal strings.

Performance Considerations:
• Decimal is slower than float; acceptable for precision-critical paths.

Examples:
• Decimal("0.1")+Decimal("0.2") == Decimal("0.3") -> True; float 0.1+0.2 == 0.3 -> False.

Notes:
• Configure decimal.getcontext() for production rounding rules; do not mix Decimal with float in careless adds.`
  }),

  // Q2
  (_i: number) => ({
    q: `What is Decimal("0.1") + Decimal("0.2")?\n(from decimal import Decimal)`,
    o: ["Decimal('0.3')", "0.30000000000000004", "0.3", "Error"],
    c: 0,
    e: "Decimal addition is exact — the result is Decimal('0.3'), not a float approximation.",
    de: `When you add two Decimal values created from strings, the arithmetic is exact in base-10. The result is a Decimal object, not a float.

Key concepts:
• Decimal("0.1") + Decimal("0.2") = Decimal('0.3')
• The result is a Decimal object, not a float
• No rounding error occurs because Decimal uses base-10 internally
• Compare: 0.1 + 0.2 = 0.30000000000000004 (float imprecision)

Why use Decimal:
• Financial/monetary calculations where exact cents matter
• Scientific calculations requiring specific decimal precision
• Any situation where float rounding is unacceptable

Example:
>>> Decimal("0.1") + Decimal("0.2")
Decimal('0.3')
>>> 0.1 + 0.2
0.30000000000000004

Key Distinctions:
• Addition yields a new Decimal representing the exact mathematical sum in the current context.
• Result prints as Decimal('0.3'), not a binary float approximation string.

How It Works:
• Coefficient/exponent arithmetic in base 10 per the General Decimal Arithmetic spec.

Step-by-Step Execution:
1. Parse both operands from strings.
2. Align exponents and add coefficients.
3. Produce normalized Decimal result.

Order of Operations:
• Binary + on Decimal objects only after Decimal("0.1") and Decimal("0.2") exist.

Common Use Cases:
• Ledger lines and tax lines where every cent must tie out.

Edge Cases:
• Overflow/Inexact signals exist in context traps — not triggered by this tiny sum.

Performance Considerations:
• Several times slower than float +; batch work may still be fine.

Examples:
• repr(Decimal("0.1")+Decimal("0.2")) shows Decimal('0.3').

Notes:
• Use strings in Decimal("...") for human inputs; avoid Decimal(0.1) from float noise.`
  }),

  // Q3
  (_i: number) => ({
    q: `Is Decimal(0.1) == Decimal("0.1")?\n(from decimal import Decimal)`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "Decimal(0.1) inherits float's imprecision — it is NOT the same as Decimal(\"0.1\").",
    de: `When you pass a float to the Decimal constructor (without quotes), Python first creates the imprecise float 0.1, then converts that imprecise value to Decimal. The result is NOT 0.1 exactly.

Key concepts:
• Decimal(0.1) = Decimal('0.1000000000000000055511151231257827021181583404541015625')
• Decimal("0.1") = Decimal('0.1') — exact
• They are NOT equal because Decimal(0.1) preserves the float's imprecision
• Always use string arguments with Decimal for exact values

The trap:
• Decimal(0.1) looks like it should be 0.1, but it isn't
• The float 0.1 is already imprecise before Decimal sees it
• Decimal faithfully represents the imprecise float value
• Use Decimal("0.1") (with quotes) for exact decimal values

Key Distinctions:
• Decimal(0.1) first sees a binary float already wrong in base ten; Decimal("0.1") is exact.
• Therefore Decimal(0.1) == Decimal("0.1") is typically False.

How It Works:
• Decimal constructor from float takes the exact binary float value then converts to decimal representation.

Step-by-Step Execution:
1. Float 0.1 becomes a long decimal coefficient reflecting IEEE bits.
2. String "0.1" becomes exact one-tenth.
3. Equality compares two different Decimal values.

Order of Operations:
• Constructor choice (float vs str) happens before ==.

Common Use Cases:
• Catching bugs where floats were passed into Decimal() by mistake.

Edge Cases:
• Decimal.from_float exists and documents the same issue.

Performance Considerations:
• String parsing is cheap compared to financial wrongness.

Examples:
• Prefer Decimal(str(x)) if x must come from a float display string.

Notes:
• Never construct Decimal from float for accounting — use strings or integers of smallest currency units.`
  }),

  // Q4
  (_i: number) => ({
    q: `What is Decimal("1") / Decimal("3")?\n(from decimal import Decimal)`,
    o: ["Decimal('0.3333333333333333333333333333')", "0.3333333333333333", "Decimal('0.33')", "Error"],
    c: 0,
    e: "Decimal division produces 28 significant digits by default — far more than float's ~15.",
    de: `The default Decimal context has a precision of 28 significant digits. When you divide 1 by 3, you get 28 threes after the decimal point.

Key concepts:
• Default precision: 28 significant digits
• Decimal("1") / Decimal("3") = Decimal('0.3333333333333333333333333333')
• That's 28 threes — compared to float's ~15-16 digits
• You can change precision via decimal.getcontext().prec

Comparison with float:
• 1 / 3 = 0.3333333333333333 (only 16 digits)
• Decimal gives 28 digits by default
• Precision is configurable: set getcontext().prec = 50 for 50 digits

Example:
>>> Decimal("1") / Decimal("3")
Decimal('0.3333333333333333333333333333')

Key Distinctions:
• True division on Decimal can produce unrounded ratios; 1/3 is a repeating decimal stored with context precision.
• Result type remains Decimal.

How It Works:
• Division uses context precision and rounding mode from decimal.getcontext().

Step-by-Step Execution:
1. Divide Decimal("1") by Decimal("3").
2. Apply rounding per context (may show many digits).

Order of Operations:
• Single / on two Decimals.

Common Use Cases:
• Rates and allocations that must stay in decimal space.

Edge Cases:
• Division by zero raises; precision limits may round unexpectedly if context is tight.

Performance Considerations:
• More digits than float for the same operation — memory scales.

Examples:
• + operator on Decimal is exact for representable sums; / may need rounding.

Notes:
• quantize after division when you need a fixed number of decimal places.`
  }),

  // Q5
  (_i: number) => ({
    q: `What is Decimal("10.5").quantize(Decimal("1"))?\n(from decimal import Decimal)`,
    o: ["Decimal('10')", "Decimal('11')", "Decimal('10.5')", "Error"],
    c: 0,
    e: "quantize rounds to the given precision — default is ROUND_HALF_EVEN (banker's rounding).",
    de: `The quantize() method rounds a Decimal to match the exponent of the argument. Decimal("1") has exponent 0, so this rounds to the nearest integer.

Key concepts:
• quantize(Decimal("1")) means "round to integer precision"
• Default rounding mode is ROUND_HALF_EVEN (banker's rounding)
• 10.5 is exactly halfway between 10 and 11
• ROUND_HALF_EVEN rounds to the nearest even number: 10 (even) wins over 11 (odd)

Banker's rounding (ROUND_HALF_EVEN):
• 10.5 rounds to 10 (10 is even)
• 11.5 rounds to 12 (12 is even)
• This reduces systematic bias in large datasets
• Different from "always round 0.5 up" taught in school

Example:
>>> Decimal("10.5").quantize(Decimal("1"))
Decimal('10')

Key Distinctions:
• quantize(Decimal("1")) rounds the value to integer units (0 decimal places) per rounding mode.
• 10.5 -> 10 or 11 depending on rounding; default is ROUND_HALF_EVEN.

How It Works:
• quantize builds an exponent matching the template Decimal's exponent structure.

Step-by-Step Execution:
1. Load Decimal("10.5").
2. quantize to step size "1".
3. Apply bankers rounding unless context overrides.

Order of Operations:
• Method call on Decimal instance.

Common Use Cases:
• Currency display to whole dollars or cents buckets.

Edge Cases:
• InvalidOperation if quantize template is impossible (e.g., conflicting exponents) — not here.

Performance Considerations:
• Small constant-time for modest coefficients.

Examples:
• Compare quantize(Decimal("0.01")) for cents.

Notes:
• Match quantize template exponent to your legal rounding granularity.`
  }),

  // Q6
  (_i: number) => ({
    q: `What is Decimal("10.55").quantize(Decimal("0.1"))?\n(from decimal import Decimal)`,
    o: ["Decimal('10.6')", "Decimal('10.5')", "Decimal('11')", "Error"],
    c: 0,
    e: "quantize to 0.1 rounds the second decimal — ROUND_HALF_EVEN rounds 5 up when preceding digit is odd.",
    de: `quantize(Decimal("0.1")) rounds to one decimal place. The digit being dropped is 5 (the second decimal in 10.55).

Key concepts:
• Decimal("10.55") quantized to Decimal("0.1") = round to 1 decimal place
• The dropped digit is 5, and the preceding digit (tenths place) is 5 (odd)
• ROUND_HALF_EVEN: when exactly halfway, round to nearest even digit
• 5 (odd) rounds up to 6 (even), so result is 10.6

Step by step:
• 10.55 → drop the second 5
• Tenths digit is 5 — odd, so round UP to 6
• Result: Decimal('10.6')

Example:
>>> Decimal("10.55").quantize(Decimal("0.1"))
Decimal('10.6')

Key Distinctions:
• quantize(Decimal("0.1")) keeps one fractional digit — rounds 10.55 to one decimal place.
• HALF_EVEN picks the nearest tenth; .55 ties go to even tenths.

How It Works:
• Exponent fixed at -1; coefficient adjusted with rounding.

Step-by-Step Execution:
1. Start at 10.55.
2. Round to one decimal under current context.

Order of Operations:
• Chained method on Decimal.

Common Use Cases:
• Price labels and VAT lines with one decimal policy.

Edge Cases:
• If rounding produces carry, integer part may increment.

Performance Considerations:
• Still cheap for single values.

Examples:
• 10.54 quantize 0.1 may differ from 10.55.

Notes:
• Document rounding mode for auditors; consider ROUND_DOWN for conservative fees.`
  }),

  // Q7
  (_i: number) => ({
    q: `What is type(Decimal("3.14"))?\n(from decimal import Decimal)`,
    o: ["<class 'decimal.Decimal'>", "<class 'float'>", "<class 'int'>", "<class 'str'>"],
    c: 0,
    e: "Decimal is its own type in the decimal module — not a float or int.",
    de: `The Decimal class lives in the decimal module. Its full type name includes the module path: decimal.Decimal.

Key concepts:
• type(Decimal("3.14")) returns <class 'decimal.Decimal'>
• Note the module prefix: decimal.Decimal, not just Decimal
• Decimal is a distinct type — not a subclass of float or int
• isinstance(Decimal("3.14"), float) is False

Decimal vs float:
• Decimal: exact base-10, configurable precision, slower
• float: binary IEEE 754, fixed ~15-digit precision, faster
• Decimal: used for financial/exact calculations
• float: used for scientific/general-purpose math

Key Distinctions:
• type(Decimal("3.14")) is <class 'decimal.Decimal'> — a distinct numeric type from float and int.
• isinstance(x, Decimal) is the usual runtime check.

How It Works:
• Decimal is a built-in class implemented in C in CPython.

Step-by-Step Execution:
1. Construct Decimal from string.
2. type() returns the class object.

Order of Operations:
• type() call after Decimal construction.

Common Use Cases:
• Branching logic between float pipelines and decimal pipelines.

Edge Cases:
• Subclassing Decimal is rare but would report subclass in type().

Performance Considerations:
• type() is a pointer lookup.

Examples:
• type(3.14) is float — different class from Decimal("3.14").

Notes:
• JSON serialization needs a custom encoder for Decimal.`
  }),

  // Q8
  (_i: number) => ({
    q: `What is Decimal("inf").is_infinite()?\n(from decimal import Decimal)`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "Decimal supports special values: infinity, negative infinity, and NaN.",
    de: `Like float, Decimal can represent special values including positive infinity, negative infinity, and NaN (Not a Number).

Key concepts:
• Decimal("inf") or Decimal("Infinity") creates positive infinity
• Decimal("-inf") creates negative infinity
• is_infinite() returns True for both positive and negative infinity
• Decimal("inf") + Decimal(1) is still Decimal('Infinity')

Special value methods:
• is_infinite() — True for +/- infinity
• is_nan() — True for NaN
• is_finite() — True for normal numbers (not inf, not NaN)
• is_zero() — True for Decimal('0')

Example:
>>> Decimal("inf").is_infinite()
True
>>> Decimal("-inf").is_infinite()
True

Key Distinctions:
• Decimal supports infinities; is_infinite() is True for signed infinity special values.
• Finite Decimals return False.

How It Works:
• Special exponent and coefficient encodings per the spec.

Step-by-Step Execution:
1. Parse Decimal("inf").
2. Call is_infinite() -> True.

Order of Operations:
• Attribute call after literal.

Common Use Cases:
• Detecting overflow results in decimal-heavy numeric code.

Edge Cases:
• NaN is neither finite nor infinite in the usual trichotomy — use is_nan().

Performance Considerations:
• O(1) flag checks.

Examples:
• math.inf float is different object domain than Decimal("inf").

Notes:
• Do not mix Decimal infinities with float inf without explicit conversion rules.`
  }),

  // Q9
  (_i: number) => ({
    q: `What is Decimal("nan").is_nan()?\n(from decimal import Decimal)`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "Decimal('nan') creates a NaN value — is_nan() returns True for it.",
    de: `Decimal supports NaN (Not a Number), just like float. NaN represents an undefined or unrepresentable value.

Key concepts:
• Decimal("nan") creates a NaN Decimal
• is_nan() returns True for NaN values
• NaN is not equal to anything, including itself: Decimal("nan") == Decimal("nan") is False
• NaN propagates: Decimal("nan") + Decimal("1") is still NaN

NaN behavior:
• Any comparison with NaN returns False (except !=)
• Decimal("nan") == Decimal("nan") → False
• Decimal("nan") != Decimal("nan") → True
• This matches IEEE 754 behavior for float NaN

Example:
>>> Decimal("nan").is_nan()
True
>>> Decimal("nan") == Decimal("nan")
False

Key Distinctions:
• Decimal NaN is a quiet NaN analog; is_nan() returns True.
• Any comparison with NaN via ordering is False in Decimal (unordered).

How It Works:
• Special NaN payload in Decimal internals.

Step-by-Step Execution:
1. Build Decimal("nan").
2. is_nan() -> True.

Order of Operations:
• Method on constant Decimal.

Common Use Cases:
• Propagating invalid operations in decimal simulations.

Edge Cases:
• Decimal NaN == Decimal NaN is False (like float).

Performance Considerations:
• Cheap predicate.

Examples:
• Filter with math.isnan for floats; use is_nan for Decimal.

Notes:
• Prefer exceptions over NaN in business logic when possible.`
  }),

  // Q10
  (_i: number) => ({
    q: `What is Decimal("3.14").is_finite()?\n(from decimal import Decimal)`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "is_finite() returns True for normal numbers — False for infinity and NaN.",
    de: `The is_finite() method returns True if the Decimal is a normal finite number — neither infinity nor NaN.

Key concepts:
• Decimal("3.14").is_finite() → True (normal number)
• Decimal("inf").is_finite() → False (infinity)
• Decimal("nan").is_finite() → False (NaN)
• Decimal("0").is_finite() → True (zero is finite)

Decimal classification methods:
• is_finite() — normal numbers and zero
• is_infinite() — positive and negative infinity
• is_nan() — NaN values
• is_zero() — zero values
• is_signed() — negative numbers and negative zero

Example:
>>> Decimal("3.14").is_finite()
True
>>> Decimal("inf").is_finite()
False

Key Distinctions:
• Normal finite Decimals return True; infinities and NaNs return False for is_finite().
• Decimal("3.14") is finite.

How It Works:
• Checks special flags on the Decimal object.

Step-by-Step Execution:
1. Construct Decimal("3.14").
2. is_finite() -> True.

Order of Operations:
• Single method call chain.

Common Use Cases:
• Guarding logarithms and divisions that reject non-finite values.

Edge Cases:
• Subnormal concepts differ from float; still finite if representable.

Performance Considerations:
• O(1).

Examples:
• is_finite on Decimal("inf") -> False.

Notes:
• Pair with is_nan and is_infinite for full classification.`
  }),

  // Q11
  (_i: number) => ({
    q: `What is Decimal("100").sqrt()?\n(from decimal import Decimal)`,
    o: ["Decimal('10')", "10", "10.0", "Error"],
    c: 0,
    e: "Decimal has a built-in sqrt() method — sqrt of 100 is exactly 10.",
    de: `The Decimal class has its own sqrt() method that returns a Decimal result with the configured precision. For perfect squares, the result is exact.

Key concepts:
• Decimal("100").sqrt() returns Decimal('10')
• The result is a Decimal object, not a float or int
• For perfect squares, the result is exact
• For non-perfect squares, it uses the context's precision (default 28 digits)

Decimal sqrt vs math.sqrt:
• Decimal("100").sqrt() → Decimal('10') (Decimal type)
• math.sqrt(100) → 10.0 (float type)
• Decimal sqrt can provide more precision for non-perfect squares
• Decimal("2").sqrt() gives 28 digits vs float's ~15

Example:
>>> Decimal("100").sqrt()
Decimal('10')
>>> Decimal("4").sqrt()
Decimal('2')

Key Distinctions:
• Decimal.sqrt() returns a Decimal approximate square root using context precision.
• sqrt(100) -> 10 exactly when representable.

How It Works:
• Iterative or hardware-assisted algorithm in the decimal module to the required precision.

Step-by-Step Execution:
1. Parse Decimal("100").
2. sqrt() with context.

Order of Operations:
• Method call on Decimal.

Common Use Cases:
• Norms and quadratic formulas in decimal space.

Edge Cases:
• Negative inputs raise InvalidOperation unless context allows complex (it does not).

Performance Considerations:
• More costly than float math.sqrt.

Examples:
• Compare with math.sqrt(100) as float 10.0.

Notes:
• Increase context.prec for more sqrt digits.`
  }),

  // Q12
  (_i: number) => ({
    q: `What is Decimal("2").sqrt()?\n(from decimal import Decimal)`,
    o: ["Decimal('1.414213562373095048801688724')", "1.4142135623730951", "Error", "Decimal('1.41')"],
    c: 0,
    e: "Decimal sqrt provides 28 significant digits by default — far more precise than float.",
    de: `Decimal("2").sqrt() computes the square root of 2 using the context's precision (default 28 significant digits). This is much more precise than float's ~15 digits.

Key concepts:
• Result: Decimal('1.414213562373095048801688724') — 28 significant digits
• Compare: math.sqrt(2) = 1.4142135623730951 — only ~16 digits
• Decimal's precision is configurable via getcontext().prec
• Setting prec = 50 would give 50 digits of sqrt(2)

Why it matters:
• Scientific computing may need arbitrary precision
• Financial calculations benefit from exact control over precision
• Decimal lets you choose exactly how many digits you need

Example:
>>> Decimal("2").sqrt()
Decimal('1.414213562373095048801688724')
>>> import math; math.sqrt(2)
1.4142135623730951

Key Distinctions:
• sqrt(2) is irrational; Decimal gives a rounded result to context precision, not a symbol.
• Still exact in the sense of being a Decimal value, not a float bit pattern.

How It Works:
• Series or Newton iteration until precision satisfied.

Step-by-Step Execution:
1. Decimal("2").sqrt().
2. Rounded Decimal result.

Order of Operations:
• Single unary sqrt on Decimal.

Common Use Cases:
• Diagonal lengths in CAD with decimal policy.

Edge Cases:
• Increasing precision changes the last digits — document context.

Performance Considerations:
• Precision drives iteration count.

Examples:
• math.sqrt(2) float differs slightly from Decimal sqrt at the last digits.

Notes:
• For exact radicals, use sympy or rationals, not Decimal.`
  }),

  // Q13
  (_i: number) => ({
    q: `What is float(Decimal("3.14"))?\n(from decimal import Decimal)`,
    o: ["3.14", "Decimal('3.14')", "Error", "'3.14'"],
    c: 0,
    e: "float() converts a Decimal back to a regular Python float.",
    de: `You can convert a Decimal back to a float using the float() built-in. The result is a standard Python float.

Key concepts:
• float(Decimal("3.14")) returns 3.14 (a float, not a Decimal)
• Conversion may lose precision for values that can't be exactly represented in binary
• float(Decimal("0.1")) returns 0.1 (but with hidden binary imprecision)
• Useful when interfacing with libraries that expect float

Precision considerations:
• Converting Decimal to float may lose the extra precision
• Decimal has 28 digits; float has ~15-16
• The conversion is generally safe for values within float's precision
• For financial code, avoid converting back to float

Example:
>>> float(Decimal("3.14"))
3.14
>>> type(float(Decimal("3.14")))
<class 'float'>

Key Distinctions:
• float(Decimal("3.14")) produces a binary float — may introduce slight representation error.
• Round-trip Decimal -> float -> Decimal can differ.

How It Works:
• Converts exact decimal value to nearest representable IEEE double.

Step-by-Step Execution:
1. Exact Decimal 3.14.
2. Convert to float — binary approximation.

Order of Operations:
• Built-in float() call on Decimal instance.

Common Use Cases:
• Interop with libraries that only accept float (numpy older APIs).

Edge Cases:
• Very large Decimal may overflow to inf as float.

Performance Considerations:
• Conversion allocates float object.

Examples:
• float(Decimal("0.1")) is still not exact 0.1 in binary.

Notes:
• Keep finance in Decimal end-to-end when possible.`
  }),

  // Q14
  (_i: number) => ({
    q: `What is Decimal("3.14") > Decimal("3.13")?\n(from decimal import Decimal)`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "Decimal supports all comparison operators — 3.14 is greater than 3.13.",
    de: `Decimal objects support all standard comparison operators: ==, !=, <, >, <=, >=. Comparisons are exact in base-10.

Key concepts:
• Decimal("3.14") > Decimal("3.13") is True
• Comparisons are exact — no float rounding issues
• Decimal("0.1") + Decimal("0.2") == Decimal("0.3") is True (unlike float)
• You can also compare Decimal with int: Decimal("5") == 5 is True

Supported comparisons:
• Decimal vs Decimal: exact comparison
• Decimal vs int: works correctly
• Decimal vs float: NOT recommended (may cause unexpected results)
• Decimal supports ordering: can be used in sort(), min(), max()

Example:
>>> Decimal("3.14") > Decimal("3.13")
True
>>> Decimal("1.0") == Decimal("1.00")
True

Key Distinctions:
• Decimal ordering uses exact numeric value; 3.14 > 3.13 is True.
• Unlike float, no weird cross-NaN ordering beyond Decimal rules.

How It Works:
• Compare coefficients and exponents after alignment.

Step-by-Step Execution:
1. Load both Decimals.
2. Rich comparison returns bool.

Order of Operations:
• > on two Decimals.

Common Use Cases:
• Threshold checks on money amounts.

Edge Cases:
• Comparing Decimal to float may raise TypeError — convert explicitly.

Performance Considerations:
• Linear in digit length for huge values.

Examples:
• Sorting a list of Decimals works like other numbers.

Notes:
• Use quantize before comparing if business rules require same scale.`
  }),

  // Q15
  (_i: number) => ({
    q: `What is Decimal("3.14") + 1?\n(from decimal import Decimal)`,
    o: ["Decimal('4.14')", "TypeError", "4.14", "Error"],
    c: 0,
    e: "Decimal + int works in Python — but Decimal + float raises TypeError.",
    de: `Python allows mixing Decimal with int in arithmetic operations. The int is automatically converted to Decimal. However, mixing Decimal with float raises TypeError.

Key concepts:
• Decimal("3.14") + 1 = Decimal('4.14') — works!
• int is safely convertible to Decimal (exact representation)
• Decimal("3.14") + 1.0 raises TypeError — float mixing is not allowed
• This prevents accidental loss of Decimal's precision guarantees

Why int works but float doesn't:
• int → Decimal conversion is exact (no precision loss)
• float → Decimal would bring in float imprecision
• Python deliberately prevents Decimal + float to protect precision
• If you need it: Decimal("3.14") + Decimal(str(1.0))

Example:
>>> Decimal("3.14") + 1
Decimal('4.14')
>>> Decimal("3.14") + 1.0
TypeError: unsupported operand type(s) for +: 'decimal.Decimal' and 'float'

Key Distinctions:
• Adding int to Decimal promotes the int to Decimal and returns Decimal — no float in the middle.
• Preserves exact arithmetic for integer parts.

How It Works:
• int is converted to Decimal exactly, then added.

Step-by-Step Execution:
1. Decimal("3.14") + 1 -> coerces 1 to Decimal(1).
2. Add and yield Decimal result.

Order of Operations:
• Addition after left operand ready.

Common Use Cases:
• Incrementing monetary amounts by whole currency units.

Edge Cases:
• Huge int may increase coefficient size dramatically.

Performance Considerations:
• Coefficient size affects cost.

Examples:
• Decimal("2.50")+1 -> Decimal('3.50').

Notes:
• Do not add float to Decimal — TypeError in Python 3.`
  }),

  // ===== FRACTIONS MODULE (16–25) =====

  // Q16
  (_i: number) => ({
    q: `What is Fraction(1, 3)?\n(from fractions import Fraction)`,
    o: ["Fraction(1, 3)", "0.3333333333333333", "1/3", "Error"],
    c: 0,
    e: "Fraction(1, 3) creates an exact rational number — stored as numerator/denominator.",
    de: `The Fraction class represents rational numbers exactly as a ratio of two integers. Fraction(1, 3) stores the value one-third without any rounding.

Key concepts:
• Fraction(1, 3) creates the fraction 1/3
• repr shows Fraction(1, 3), not a decimal approximation
• The value is stored exactly — no float imprecision
• Fractions auto-reduce: Fraction(2, 6) becomes Fraction(1, 3)

Creating Fractions:
• Fraction(numerator, denominator): Fraction(1, 3)
• Fraction(string): Fraction("1/3") or Fraction("0.5")
• Fraction(float): Fraction(0.5) — caution with imprecise floats
• Fraction(Decimal): exact conversion from Decimal

Example:
>>> from fractions import Fraction
>>> Fraction(1, 3)
Fraction(1, 3)
>>> Fraction(1, 3) + Fraction(1, 3)
Fraction(2, 3)

Key Distinctions:
• Fraction stores a rational as numerator and denominator in lowest terms internally.
• Fraction(1,3) prints as Fraction(1, 3).

How It Works:
• gcd reduction on construction; signs normalized.

Step-by-Step Execution:
1. Store 1 and 3.
2. Reduce if common factors — already coprime.

Order of Operations:
• Constructor call.

Common Use Cases:
• Exact rationals for teaching and symbolic fractions.

Edge Cases:
• Denominator 0 raises ZeroDivisionError.

Performance Considerations:
• gcd on big integers costs more than small ints.

Examples:
• Fraction(2,4) -> Fraction(1, 2).

Notes:
• limit_denominator finds nearby small denominators from floats.`
  }),

  // Q17
  (_i: number) => ({
    q: `What is Fraction(1, 3) + Fraction(1, 6)?\n(from fractions import Fraction)`,
    o: ["Fraction(1, 2)", "Fraction(2, 9)", "Fraction(1, 9)", "0.5"],
    c: 0,
    e: "1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2 — Fraction auto-simplifies.",
    de: `Fraction arithmetic is exact and results are automatically reduced to lowest terms. Adding 1/3 and 1/6 gives 1/2.

Step by step:
• 1/3 + 1/6
• Common denominator: 6
• 2/6 + 1/6 = 3/6
• Auto-reduce: 3/6 → 1/2
• Result: Fraction(1, 2)

Key concepts:
• Fraction always auto-reduces to lowest terms
• GCD (greatest common divisor) is used for reduction
• All arithmetic operations return Fraction objects
• No rounding or precision loss at any step

Example:
>>> Fraction(1, 3) + Fraction(1, 6)
Fraction(1, 2)
>>> float(Fraction(1, 2))
0.5

Key Distinctions:
• Fraction addition uses exact rational arithmetic: common denominator then add numerators.
• 1/3 + 1/6 = 1/2.

How It Works:
• lcm of denominators; extend numerators; sum; reduce.

Step-by-Step Execution:
1. 1/3 and 1/6 -> common denominator 6.
2. 2/6+1/6=3/6 -> 1/2 after reduction.

Order of Operations:
• Binary + on Fraction instances.

Common Use Cases:
• Recipe scaling and music theory ratios.

Edge Cases:
• Huge numerators from repeated ops — still exact but heavy.

Performance Considerations:
• gcd/lcm dominate cost.

Examples:
• Result remains Fraction, not float.

Notes:
• float(f) may approximate — use only at boundaries.`
  }),

  // Q18
  (_i: number) => ({
    q: `What is Fraction(2, 4)?\n(from fractions import Fraction)`,
    o: ["Fraction(1, 2)", "Fraction(2, 4)", "0.5", "Error"],
    c: 0,
    e: "Fraction auto-reduces — 2/4 is simplified to 1/2 immediately.",
    de: `Fraction automatically reduces fractions to their lowest terms during construction. Fraction(2, 4) is stored as Fraction(1, 2).

Key concepts:
• Fraction(2, 4) automatically reduces to Fraction(1, 2)
• GCD of 2 and 4 is 2, so both are divided by 2
• This happens at creation time, not just for display
• Fraction(6, 9) becomes Fraction(2, 3)

Auto-reduction examples:
• Fraction(2, 4) → Fraction(1, 2)
• Fraction(10, 20) → Fraction(1, 2)
• Fraction(6, 9) → Fraction(2, 3)
• Fraction(100, 200) → Fraction(1, 2)
• Fraction(7, 7) → Fraction(1, 1)

Example:
>>> Fraction(2, 4)
Fraction(1, 2)
>>> Fraction(2, 4) == Fraction(1, 2)
True

Key Distinctions:
• Fraction automatically reduces 2/4 to 1/2 — canonical lowest terms.
• Equality compares value, not raw numerator/denominator pair.

How It Works:
• gcd(2,4)=2; divide top and bottom.

Step-by-Step Execution:
1. Input 2,4.
2. Reduce to 1,2.

Order of Operations:
• Constructor reduction.

Common Use Cases:
• Canonical keys for rational dictionaries.

Edge Cases:
• Negative signs kept in numerator typically.

Performance Considerations:
• gcd is cheap for small ints.

Examples:
• Fraction(-2,4) -> Fraction(-1,2).

Notes:
• str(Fraction) may show simplified form.`
  }),

  // Q19
  (_i: number) => ({
    q: `What is float(Fraction(1, 3))?\n(from fractions import Fraction)`,
    o: ["0.3333333333333333", "Fraction(1, 3)", "0.33", "Error"],
    c: 0,
    e: "float() converts a Fraction to a float — 1/3 becomes 0.3333333333333333.",
    de: `Converting a Fraction to float produces a standard Python float. Since 1/3 cannot be exactly represented in binary, the result has limited precision.

Key concepts:
• float(Fraction(1, 3)) returns 0.3333333333333333
• This is the best float approximation of 1/3
• Precision is limited to ~15-16 significant digits (IEEE 754 double)
• The Fraction itself stores 1/3 exactly — precision is only lost on conversion

Conversion chain:
• Fraction(1, 3) — exact rational representation
• float(Fraction(1, 3)) — approximate float: 0.3333333333333333
• str(float(Fraction(1, 3))) — string: '0.3333333333333333'

Example:
>>> float(Fraction(1, 3))
0.3333333333333333
>>> float(Fraction(1, 7))
0.14285714285714285

Key Distinctions:
• float(Fraction(1,3)) is the nearest binary float to one-third — not exact.
• Denominator 3 means repeating digits in base 2.

How It Works:
• Rational numerator/denominator converted to float division in C.

Step-by-Step Execution:
1. Exact 1/3 rational.
2. Convert to IEEE float approximation.

Order of Operations:
• float() call.

Common Use Cases:
• Plotting and numpy arrays needing float dtype.

Edge Cases:
• Huge fractions may overflow to inf.

Performance Considerations:
• Division cost.

Examples:
• float(Fraction(1,2)) is exact 0.5 in binary.

Notes:
• Keep Fraction until the last moment for exact pipelines.`
  }),

  // Q20
  (_i: number) => ({
    q: `What is Fraction(1, 3) * 3?\n(from fractions import Fraction)`,
    o: ["Fraction(1, 1)", "Fraction(3, 3)", "1", "0.9999999999999999"],
    c: 0,
    e: "Fraction(1, 3) * 3 = Fraction(3, 3), auto-reduced to Fraction(1, 1).",
    de: `Multiplying Fraction(1, 3) by 3 gives Fraction(3, 3), which auto-reduces to Fraction(1, 1). The result is a Fraction object, not an int.

Key concepts:
• Fraction(1, 3) * 3 = Fraction(3, 3) → auto-reduces to Fraction(1, 1)
• The result is Fraction(1, 1), not the integer 1
• But Fraction(1, 1) == 1 is True (cross-type comparison)
• Compare: (1/3) * 3 with floats gives 0.9999999999999999

Why Fraction is better here:
• Float: 1/3 * 3 = 0.9999999999999999 (not exactly 1!)
• Fraction: Fraction(1, 3) * 3 = Fraction(1, 1) (exactly 1)
• No rounding errors in Fraction arithmetic

Example:
>>> Fraction(1, 3) * 3
Fraction(1, 1)
>>> (1/3) * 3
0.9999999999999999

Key Distinctions:
• Multiplying Fraction by int scales the numerator exactly.
• (1/3)*3 -> Fraction(1,1) == 1.

How It Works:
• Integer treated as Fraction(n,1) then multiply.

Step-by-Step Execution:
1. Multiply numerators and denominators.
2. Reduce fraction.

Order of Operations:
• * between Fraction and int.

Common Use Cases:
• Scaling recipe portions rationally.

Edge Cases:
• Overflow only in theory with huge ints.

Performance Considerations:
• gcd reduction after multiply.

Examples:
• Fraction(2,3)*3 -> Fraction(2,1).

Notes:
• Use // for floor of rational division? Different operation.`
  }),

  // Q21
  (_i: number) => ({
    q: `What is Fraction(1, 3) * 3 == 1?\n(from fractions import Fraction)`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "Fraction(1, 1) equals integer 1 — Fraction supports cross-type equality.",
    de: `Fraction supports comparison with int, float, and Decimal. Fraction(1, 1) is mathematically equal to 1, so this comparison returns True.

Key concepts:
• Fraction(1, 3) * 3 = Fraction(1, 1)
• Fraction(1, 1) == 1 → True (cross-type comparison)
• Fraction compares by mathematical value, not by type
• This is different from "is" (identity) — they are equal but not identical

Cross-type comparisons:
• Fraction(1, 2) == 0.5 → True
• Fraction(1, 1) == 1 → True
• Fraction(2, 1) == 2 → True
• Fraction(1, 3) == 1/3 → False! (float 1/3 is imprecise)

Example:
>>> Fraction(1, 3) * 3 == 1
True
>>> (1/3) * 3 == 1
False

Key Distinctions:
• Exact equality: (1/3)*3 reduces to 1 — True in rationals, unlike float 0.1*3 noise stories.
• == compares rational value to int 1.

How It Works:
• Product simplifies to 1/1.

Step-by-Step Execution:
1. Multiply and reduce.
2. Compare to integer 1 with rational equality.

Order of Operations:
• * before ==.

Common Use Cases:
• Unit tests proving algebraic identities.

Edge Cases:
• Large intermediate fractions before reduction — still exact.

Performance Considerations:
• gcd may run on bigger ints after multiply.

Examples:
• Float path (1/3)*3==1 may fail — Fraction path succeeds.

Notes:
• from_float may poison Fraction with approximation — prefer ints or strings.`
  }),

  // Q22
  (_i: number) => ({
    q: `What is Fraction("0.5")?\n(from fractions import Fraction)`,
    o: ["Fraction(1, 2)", "Fraction(5, 10)", "0.5", "Error"],
    c: 0,
    e: "Fraction can be created from a decimal string — '0.5' becomes Fraction(1, 2).",
    de: `Fraction accepts string arguments and parses them exactly. "0.5" is parsed as 5/10, which auto-reduces to 1/2.

Key concepts:
• Fraction("0.5") creates Fraction(1, 2)
• String parsing is exact — no float imprecision
• Fraction("0.1") gives Fraction(1, 10) — exact!
• Compare: Fraction(0.1) gives an imprecise result (float trap)

String vs float construction:
• Fraction("0.1") = Fraction(1, 10) — exact
• Fraction(0.1) = Fraction(3602879701896397, 36028797018963968) — imprecise!
• Always prefer Fraction("0.1") over Fraction(0.1) for exact values

Example:
>>> Fraction("0.5")
Fraction(1, 2)
>>> Fraction("0.1")
Fraction(1, 10)

Key Distinctions:
• Fraction("0.5") parses decimal text to exact 1/2.
• String parsing avoids float contamination.

How It Works:
• Parses decimal or rational string formats per fractions module rules.

Step-by-Step Execution:
1. Read "0.5".
2. Convert to rational 1/2.

Order of Operations:
• Constructor from str.

Common Use Cases:
• Reading config values as exact rationals.

Edge Cases:
• Malformed strings raise ValueError.

Performance Considerations:
• Parsing cost linear in string length.

Examples:
• Fraction("1/3") also supported in string form.

Notes:
• Fraction(0.1) uses float's exact value — often surprising.`
  }),

  // Q23
  (_i: number) => ({
    q: `What is Fraction(0.1)?\n(from fractions import Fraction)`,
    o: ["Fraction(3602879701896397, 36028797018963968)", "Fraction(1, 10)", "TypeError", "Fraction(0, 1)"],
    c: 0,
    e: "Fraction(0.1) uses float 0.1 — which is imprecise — creating a huge ugly fraction.",
    de: `When you pass a float to Fraction, it converts the exact binary value of that float to a fraction. Since 0.1 cannot be exactly represented in binary, you get a very large, ugly fraction.

Key concepts:
• float 0.1 = 0.1000000000000000055511151231257827021181583404541015625
• Fraction faithfully converts this to Fraction(3602879701896397, 36028797018963968)
• This is NOT Fraction(1, 10) because float 0.1 is not exactly 0.1
• Use Fraction("0.1") or Fraction(1, 10) for the exact value

The float trap:
• 0.1 in binary is a repeating fraction (like 1/3 in decimal)
• float stores the nearest representable value: 3602879701896397 / 2^55
• Fraction preserves this imprecision faithfully
• Solution: use string or integer arguments for exact values

Example:
>>> Fraction(0.1)
Fraction(3602879701896397, 36028797018963968)
>>> Fraction("0.1")
Fraction(1, 10)

Key Distinctions:
• Constructing Fraction from float uses the exact binary value of 0.1, not the human decimal 0.1.
• Denominator grows to represent IEEE bits — ugly rational.

How It Works:
• as_integer_ratio on float then builds Fraction.

Step-by-Step Execution:
1. Take float 0.1 bits.
2. Build huge rational representation.

Order of Operations:
• float literal evaluated first.

Common Use Cases:
• Warning example in tutorials — not production input.

Edge Cases:
• inf and nan raise or behave specially.

Performance Considerations:
• Large numerators/denominators possible.

Examples:
• Prefer Fraction.from_decimal or string for decimals.

Notes:
• Limit_denominator cleans huge rationals from floats.`
  }),

  // Q24
  (_i: number) => ({
    q: `What happens with Fraction(1, 0)?\n(from fractions import Fraction)`,
    o: ["ZeroDivisionError", "Fraction(1, 0)", "Fraction(inf)", "None"],
    c: 0,
    e: "Division by zero is not allowed — Fraction(1, 0) raises ZeroDivisionError.",
    de: `Unlike Decimal (which supports infinity), Fraction does not allow a zero denominator. Attempting to create Fraction(1, 0) raises ZeroDivisionError.

Key concepts:
• Fraction(1, 0) raises ZeroDivisionError
• There is no "infinity" representation in Fraction
• Any denominator of 0 is rejected at construction time
• This applies to all numerators: Fraction(0, 0) also raises ZeroDivisionError

Comparison with other types:
• float: 1.0 / 0.0 raises ZeroDivisionError, but float("inf") exists
• Decimal: Decimal("inf") is valid
• Fraction: no infinity support — ZeroDivisionError always

Example:
>>> Fraction(1, 0)
ZeroDivisionError: Fraction(1, 0)
>>> Fraction(0, 0)
ZeroDivisionError: Fraction(0, 0)

Key Distinctions:
• Denominator zero is undefined; Fraction raises ZeroDivisionError.
• No silent infinity in Fraction — unlike float division.

How It Works:
• Constructor validates denominator non-zero.

Step-by-Step Execution:
1. Attempt create Fraction(1,0).
2. Exception.

Order of Operations:
• Constructor fails before object exists.

Common Use Cases:
• Validating user-provided fractions.

Edge Cases:
• Numerator 0 with non-zero denominator is valid (zero fraction).

Performance Considerations:
• Error path only.

Examples:
• Catch ZeroDivisionError like integer division by zero.

Notes:
• math.inf is float domain; not a Fraction.`
  }),

  // Q25
  (_i: number) => ({
    q: `What is Fraction(1, 3).limit_denominator(10)?\n(from fractions import Fraction)`,
    o: ["Fraction(1, 3)", "Fraction(3, 10)", "Fraction(0, 1)", "Error"],
    c: 0,
    e: "limit_denominator finds the closest fraction with denominator ≤ max — 1/3 already qualifies.",
    de: `limit_denominator(max) returns the closest Fraction with a denominator at most max. Since Fraction(1, 3) already has denominator 3 (which is ≤ 10), it returns itself unchanged.

Key concepts:
• Fraction(1, 3).limit_denominator(10) → Fraction(1, 3)
• Denominator 3 is already ≤ 10, so no approximation needed
• limit_denominator is useful for simplifying complex fractions
• Fraction(355, 113).limit_denominator(10) would give Fraction(22, 7)

Common uses:
• Simplify imprecise float-derived fractions
• Fraction(0.1).limit_denominator(10) → Fraction(1, 10) (cleans up float imprecision!)
• Find rational approximations of irrational numbers
• Fraction.from_float(math.pi).limit_denominator(100) → Fraction(311, 99)

Example:
>>> Fraction(1, 3).limit_denominator(10)
Fraction(1, 3)
>>> Fraction(0.1).limit_denominator(10)
Fraction(1, 10)

Key Distinctions:
• limit_denominator(max_den) finds a nearby rational with denominator at most max.
• Approximates irrationals or messy rationals with smaller terms.

How It Works:
• Continued-fraction/mediant style search in fractions module.

Step-by-Step Execution:
1. Start from Fraction(1,3).
2. Find close fraction with denom <= 10.

Order of Operations:
• Method call on Fraction.

Common Use Cases:
• Simplifying ratios for display (gear teeth, gear ratios).

Edge Cases:
• max_den small may yield poor approximation.

Performance Considerations:
• Search cost grows with max_den.

Examples:
• limit_denominator on float-derived Fraction cleans huge terms.

Notes:
• Not the same as float round — different objective.`
  }),

  // ===== COMPLEX NUMBERS (26–35) =====

  // Q26
  (_i: number) => ({
    q: `What is type(1+2j)?`,
    o: ["<class 'complex'>", "<class 'tuple'>", "<class 'float'>", "<class 'int'>"],
    c: 0,
    e: "The j suffix creates a complex number — Python's built-in type for imaginary numbers.",
    de: `Python has built-in support for complex numbers using the j suffix for the imaginary part. No import is needed.

Key concepts:
• 1+2j creates a complex number with real=1 and imaginary=2
• type(1+2j) returns <class 'complex'>
• Python uses j (not i) for the imaginary unit, following engineering convention
• Complex is a built-in type — no import needed

Creating complex numbers:
• Literal: 1+2j, 3-4j, 0+1j
• Constructor: complex(1, 2) → (1+2j)
• The j suffix only works with numeric literals: 2j is valid, but xj is not
• Just j alone is a syntax error — use 1j for the imaginary unit

Example:
>>> type(1+2j)
<class 'complex'>
>>> type(3j)
<class 'complex'>

Key Distinctions:
• Adding imaginary unit forms a complex number; type is complex.
• complex is a built-in immutable numeric type.

How It Works:
• complex class stores two doubles for real and imag parts in CPython.

Step-by-Step Execution:
1. Parse 1+2j literal.
2. type() -> complex.

Order of Operations:
• Literal creation then type call.

Common Use Cases:
• Signal processing and quantum toy models.

Edge Cases:
• complex inherits from numbers.Complex abstract base.

Performance Considerations:
• type() is O(1).

Examples:
• isinstance(1+2j, complex) -> True.

Notes:
• No native Decimal complex in stdlib — use cmath on complex.`
  }),

  // Q27
  (_i: number) => ({
    q: `What is (1+2j).real?`,
    o: ["1.0", "1", "2.0", "Error"],
    c: 0,
    e: "The .real attribute returns the real part as a float — 1.0, not the integer 1.",
    de: `Complex numbers have .real and .imag attributes that return the real and imaginary parts respectively. Both are always floats.

Key concepts:
• (1+2j).real returns 1.0 (float, not int)
• The real and imaginary parts are always stored as floats
• Even complex(1, 2).real returns 1.0, not 1
• These attributes are read-only — you cannot assign to them

Complex number anatomy:
• (a+bj) where a is the real part and b is the imaginary part
• .real → a (as float)
• .imag → b (as float)
• Both are always float type, even if the original values were int

Example:
>>> (1+2j).real
1.0
>>> type((1+2j).real)
<class 'float'>

Key Distinctions:
• .real attribute returns the real part as float (even if mathematically integer).
• (1+2j).real is 1.0.

How It Works:
• C struct fields in complex object exposed as float attributes.

Step-by-Step Execution:
1. Access real component.
2. Float 1.0 returned.

Order of Operations:
• Attribute access on complex instance.

Common Use Cases:
• Splitting complex results into Re/Im for plotting.

Edge Cases:
• real and imag are always floats in Python complex.

Performance Considerations:
• Attribute read O(1).

Examples:
• z.real + z.imag*1j reconstructs z if imag tracked.

Notes:
• For higher precision use external libraries.`
  }),

  // Q28
  (_i: number) => ({
    q: `What is (1+2j).imag?`,
    o: ["2.0", "2", "1.0", "Error"],
    c: 0,
    e: "The .imag attribute returns the imaginary part as a float — 2.0.",
    de: `The .imag attribute extracts the imaginary component of a complex number. Like .real, it always returns a float.

Key concepts:
• (1+2j).imag returns 2.0 (the coefficient of j)
• Always a float, even if originally specified as int
• (3-4j).imag returns -4.0 (negative imaginary part)
• (5+0j).imag returns 0.0

Real vs imaginary:
• (1+2j).real = 1.0 (real part)
• (1+2j).imag = 2.0 (imaginary part)
• The imaginary unit j itself is not included — just the coefficient
• 2j means 0+2j, so (2j).real = 0.0 and (2j).imag = 2.0

Example:
>>> (1+2j).imag
2.0
>>> (3-4j).imag
-4.0

Key Distinctions:
• .imag returns the imaginary coefficient as float.
• (1+2j).imag is 2.0.

How It Works:
• Paired with .real in the same complex object.

Step-by-Step Execution:
1. Access imag.
2. Return 2.0.

Order of Operations:
• Attribute.

Common Use Cases:
• Phase and magnitude calculations after splitting.

Edge Cases:
• imag can be 0.0 for real-only complex numbers like 5+0j.

Performance Considerations:
• O(1).

Examples:
• abs(z) uses hypot(real, imag).

Notes:
• cmath.phase uses atan2(imag, real).`
  }),

  // Q29
  (_i: number) => ({
    q: `What is (1+2j) + (3+4j)?`,
    o: ["(4+6j)", "(4+8j)", "(3+6j)", "Error"],
    c: 0,
    e: "Complex addition adds real and imaginary parts separately: (1+3) + (2+4)j = 4+6j.",
    de: `Complex number addition works component-wise: add the real parts together and the imaginary parts together.

Step by step:
• (1+2j) + (3+4j)
• Real: 1 + 3 = 4
• Imaginary: 2 + 4 = 6
• Result: (4+6j)

Key concepts:
• Addition is component-wise: (a+bj) + (c+dj) = (a+c) + (b+d)j
• Subtraction works the same way: (a+bj) - (c+dj) = (a-c) + (b-d)j
• The result is always a complex number
• You can also add int or float to complex: (1+2j) + 3 = (4+2j)

Example:
>>> (1+2j) + (3+4j)
(4+6j)
>>> (5+3j) - (2+1j)
(3+2j)

Key Distinctions:
• Complex addition is componentwise: (a+bi)+(c+di)=(a+c)+(b+d)i.
• (1+2j)+(3+4j) -> (4+6j).

How It Works:
• __add__ on complex adds reals and imaginaries separately.

Step-by-Step Execution:
1. Add reals 1+3 -> 4.
2. Add imags 2+4 -> 6.

Order of Operations:
• Left + right complex.

Common Use Cases:
• Superposition in simple simulations.

Edge Cases:
• Adding complex + int promotes int to complex real part.

Performance Considerations:
• Two float adds — cheap.

Examples:
• (1+2j)+1 -> (2+2j).

Notes:
• Decimal and complex do not mix directly.`
  }),

  // Q30
  (_i: number) => ({
    q: `What is (1+2j) * (3+4j)?`,
    o: ["(-5+10j)", "(3+8j)", "(7+10j)", "(-5-10j)"],
    c: 0,
    e: "Complex multiplication uses FOIL: 3+4j+6j+8j² = 3+10j-8 = -5+10j (since j²=-1).",
    de: `Complex multiplication follows the distributive property (FOIL), with the key rule that j² = -1.

Step by step:
• (1+2j) * (3+4j)
• = 1*3 + 1*4j + 2j*3 + 2j*4j
• = 3 + 4j + 6j + 8j²
• = 3 + 10j + 8(-1)    [since j² = -1]
• = 3 + 10j - 8
• = -5 + 10j

Key concepts:
• j² = -1 is the fundamental rule of complex multiplication
• FOIL: First, Outer, Inner, Last
• Real part: ac - bd (for (a+bj)*(c+dj))
• Imaginary part: ad + bc

Formula: (a+bj)(c+dj) = (ac-bd) + (ad+bc)j

Example:
>>> (1+2j) * (3+4j)
(-5+10j)

Key Distinctions:
• Multiply using distributive law and i^2=-1: (a+bi)(c+di)=(ac-bd)+(ad+bc)i.
• (1+2j)*(3+4j) -> (-5+10j).

How It Works:
• Complex __mul__ implements FOIL with imag^2 correction.

Step-by-Step Execution:
1. Expand product.
2. Replace i*i with -1.
3. Combine real and imag parts.

Order of Operations:
• Single * on complexes.

Common Use Cases:
• Rotations and phasors when represented as complex numbers.

Edge Cases:
• Overflow to inf if magnitudes huge.

Performance Considerations:
• Several float ops — still O(1).

Examples:
• Multiplying by 1j rotates by 90 degrees if starting from real.

Notes:
• cmath.exp for polar form.`
  }),

  // Q31
  (_i: number) => ({
    q: `What is abs(3+4j)?`,
    o: ["5.0", "7.0", "25", "Error"],
    c: 0,
    e: "abs() of a complex number returns its magnitude: sqrt(3² + 4²) = sqrt(25) = 5.0.",
    de: `For complex numbers, abs() returns the magnitude (modulus) — the distance from the origin in the complex plane. It uses the Pythagorean theorem.

Key concepts:
• abs(a+bj) = sqrt(a² + b²)
• abs(3+4j) = sqrt(9 + 16) = sqrt(25) = 5.0
• The result is always a float, not complex
• This is the Euclidean distance from (0,0) to (a,b) in the complex plane

The 3-4-5 right triangle:
• 3² + 4² = 9 + 16 = 25
• sqrt(25) = 5
• This is the classic Pythagorean triple

Other examples:
• abs(1+0j) = 1.0
• abs(0+1j) = 1.0
• abs(1+1j) = 1.4142135623730951 (sqrt(2))

Example:
>>> abs(3+4j)
5.0
>>> abs(5+12j)
13.0

Key Distinctions:
• abs on complex returns magnitude sqrt(real^2+imag^2) as float.
• abs(3+4j) -> 5.0 (3-4-5 triangle).

How It Works:
• hypot for numerical stability in CPython implementation.

Step-by-Step Execution:
1. Square components, sum, sqrt.
2. Return float distance from origin.

Order of Operations:
• Built-in abs dispatches to complex.__abs__.

Common Use Cases:
• Vector lengths in 2D when encoded as complex.

Edge Cases:
• Overflow possible for huge components — hypot mitigates somewhat.

Performance Considerations:
• hypot is a few float ops.

Examples:
• abs(1j) -> 1.0.

Notes:
• cmath.polar returns (abs, phase).`
  }),

  // Q32
  (_i: number) => ({
    q: `What is complex(3, 4)?`,
    o: ["(3+4j)", "3+4j", "complex(3, 4)", "Error"],
    c: 0,
    e: "complex(real, imag) creates a complex number — complex(3, 4) produces (3+4j).",
    de: `The complex() built-in function creates complex numbers from real and imaginary parts. It is equivalent to using the literal j syntax.

Key concepts:
• complex(3, 4) creates (3+4j)
• complex(real, imag) — both arguments are optional
• complex(3) → (3+0j) — imaginary defaults to 0
• complex() → 0j — both default to 0

Constructor vs literal:
• complex(3, 4) and 3+4j produce the same result
• complex("3+4j") also works — parses a string
• complex("3 + 4j") raises ValueError — no spaces allowed in string form
• complex(3, 4) == 3+4j → True

Example:
>>> complex(3, 4)
(3+4j)
>>> complex(3, 4) == 3+4j
True

Key Distinctions:
• complex(real, imag) constructor builds 3+4j from two numbers.
• Equivalent to 3+4j literal when both are ints/floats.

How It Works:
• Allocates complex object with two float parts.

Step-by-Step Execution:
1. Convert args to floats if needed.
2. Build complex(3.0, 4.0).

Order of Operations:
• Function call with two positional args.

Common Use Cases:
• Building complexes from user-supplied real/imag pairs.

Edge Cases:
• Passing complex as real part nests — usually avoid.

Performance Considerations:
• Small allocation.

Examples:
• complex(0,1) is 1j.

Notes:
• str(complex) shows parentheses form.`
  }),

  // Q33
  (_i: number) => ({
    q: `What is (1+0j) == 1?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "A complex number with zero imaginary part equals the corresponding int or float.",
    de: `Python supports cross-type equality between complex, float, and int. A complex number with zero imaginary part is considered equal to the corresponding real number.

Key concepts:
• (1+0j) == 1 → True (complex with 0 imaginary == int)
• (1+0j) == 1.0 → True (complex with 0 imaginary == float)
• (1.5+0j) == 1.5 → True
• (1+2j) == 1 → False (non-zero imaginary part)

Cross-type numeric equality:
• Python's numeric types form a hierarchy: int < float < complex
• Equality works across types based on mathematical value
• 1 == 1.0 == (1+0j) → all True
• This is useful when functions return complex but the result is real

Example:
>>> (1+0j) == 1
True
>>> (0+0j) == 0
True

Key Distinctions:
• Mixed comparison: complex with zero imaginary part may compare equal to int/float real.
• (1+0j) == 1 is True — numeric equality across types.

How It Works:
• __eq__ converts or compares real/imag appropriately per numeric tower rules.

Step-by-Step Execution:
1. Compare complex 1+0j to int 1.
2. True.

Order of Operations:
• == between complex and int.

Common Use Cases:
• Detecting real-only results after computation.

Edge Cases:
• (1+1j) == 1 is False.

Performance Considerations:
• Cheap comparison.

Examples:
• bool(1+0j) is True — nonzero complex.

Notes:
• Use cmath.isclose for float noise; not needed for exact integers.`
  }),

  // Q34
  (_i: number) => ({
    q: `What is bool(0+0j)?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "Zero complex (0+0j) is falsy — any complex with both parts zero is False.",
    de: `In Python's truthiness rules, 0+0j is falsy. Any complex number where both real and imaginary parts are zero is considered False.

Key concepts:
• bool(0+0j) → False (both parts are zero)
• bool(1+0j) → True (non-zero real part)
• bool(0+1j) → True (non-zero imaginary part)
• bool(0.0+0.0j) → False (still zero)

Python truthiness for numeric types:
• int: 0 is falsy, all others are truthy
• float: 0.0 is falsy, all others are truthy
• complex: 0+0j is falsy, all others are truthy
• Pattern: zero values are falsy, non-zero values are truthy

Example:
>>> bool(0+0j)
False
>>> bool(1+0j)
True
>>> bool(0+0.001j)
True

Key Distinctions:
• Complex zero is falsy like float 0.0: bool(0+0j) is False.
• Any nonzero real or imag makes complex truthy.

How It Works:
• __bool__ on complex checks both parts zero.

Step-by-Step Execution:
1. Test real==0 and imag==0.
2. Return False for bool.

Order of Operations:
• bool() call.

Common Use Cases:
• Filtering zero phasors.

Edge Cases:
• 0+0j is the only false complex if both parts exactly zero.

Performance Considerations:
• O(1).

Examples:
• bool(0j) False; bool(1j) True.

Notes:
• Do not confuse with None.`
  }),

  // Q35
  (_i: number) => ({
    q: `What is (3+4j).conjugate()?`,
    o: ["(3-4j)", "(3+4j)", "(-3+4j)", "(-3-4j)"],
    c: 0,
    e: "The conjugate flips the sign of the imaginary part: (3+4j) → (3-4j).",
    de: `The conjugate of a complex number has the same real part but the opposite sign on the imaginary part. For (a+bj), the conjugate is (a-bj).

Key concepts:
• (3+4j).conjugate() = (3-4j)
• Only the imaginary part changes sign
• The real part stays the same
• Conjugating twice returns the original: (3-4j).conjugate() = (3+4j)

Why conjugates matter:
• z * z.conjugate() = |z|² (always a real number)
• (3+4j) * (3-4j) = 9 + 16 = 25
• Used in complex division, signal processing, quantum mechanics
• The magnitude squared: abs(z)**2 == (z * z.conjugate()).real

Example:
>>> (3+4j).conjugate()
(3-4j)
>>> (1-2j).conjugate()
(1+2j)

Key Distinctions:
• conjugate() flips the sign of the imaginary part: (a+bi)* = a-bi.
• (3+4j).conjugate() -> (3-4j).

How It Works:
• Returns new complex with negated imag.

Step-by-Step Execution:
1. Copy real 3.
2. Negate imag 4 -> -4.

Order of Operations:
• Method on complex instance.

Common Use Cases:
• Computing |z|^2 as z*z.conjugate() for real result.

Edge Cases:
• Real numbers as complex have conjugate equal to self.

Performance Considerations:
• O(1) float negation.

Examples:
• Product z*z.conjugate() is real nonnegative.

Notes:
• For matrices of complex numbers use numpy.`
  }),

  // ===== BITWISE OPERATIONS (36–50) =====

  // Q36
  (_i: number) => ({
    q: `What is 5 & 3?`,
    o: ["1", "7", "6", "8"],
    c: 0,
    e: "Bitwise AND: 101 & 011 = 001 = 1. Only bits that are 1 in BOTH operands remain.",
    de: `The & operator performs bitwise AND — each bit in the result is 1 only if the corresponding bits in both operands are 1.

Step by step:
• 5 in binary: 101
• 3 in binary: 011
• AND operation:
  101
  011
  ---
  001 = 1

Key concepts:
• & compares each bit position independently
• Bit is 1 only if BOTH input bits are 1
• Acts like a logical AND on each bit pair
• Common use: masking — extracting specific bits from a value

Truth table for AND:
• 0 & 0 = 0
• 0 & 1 = 0
• 1 & 0 = 0
• 1 & 1 = 1

Example:
>>> 5 & 3
1
>>> bin(5 & 3)
'0b1'

Key Distinctions:
• & is bitwise AND on integers: bits both 1 stay 1.
• 5 is 0b101, 3 is 0b011 -> 0b001 which is 1.

How It Works:
• Pairwise AND on two's-complement bit patterns for ints.

Step-by-Step Execution:
1. Align bits of 5 and 3.
2. AND -> 1.

Order of Operations:
• & binds tighter than comparison operators; weaker than + * in mixed cases — check table.

Common Use Cases:
• Masks and feature flags in integers.

Edge Cases:
• Negative ints use infinite sign bits in conceptual two's complement.

Performance Considerations:
• O(1) word-sized ints.

Examples:
• Clear bits with AND mask 0.

Notes:
• bool & bool coerces to int 0/1 in Python 3.`
  }),

  // Q37
  (_i: number) => ({
    q: `What is 5 | 3?`,
    o: ["7", "1", "6", "8"],
    c: 0,
    e: "Bitwise OR: 101 | 011 = 111 = 7. Bits that are 1 in EITHER operand remain.",
    de: `The | operator performs bitwise OR — each bit in the result is 1 if the corresponding bit in either operand is 1.

Step by step:
• 5 in binary: 101
• 3 in binary: 011
• OR operation:
  101
  011
  ---
  111 = 7

Key concepts:
• | compares each bit position independently
• Bit is 1 if EITHER input bit is 1
• Acts like a logical OR on each bit pair
• Common use: combining flags or setting specific bits

Truth table for OR:
• 0 | 0 = 0
• 0 | 1 = 1
• 1 | 0 = 1
• 1 | 1 = 1

Example:
>>> 5 | 3
7
>>> bin(5 | 3)
'0b111'

Key Distinctions:
• | is bitwise OR: bit 1 if either operand has 1.
• 0b101 | 0b011 -> 0b111 = 7.

How It Works:
• Bitwise OR on int unlimited precision.

Step-by-Step Execution:
1. OR each bit position.
2. Result 7.

Order of Operations:
• | with other bitwise ops has defined precedence among themselves.

Common Use Cases:
• Combining permission bitmasks.

Edge Cases:
• Do not confuse | with logical or for booleans — different.

Performance Considerations:
• O(1) for small ints.

Examples:
• set union uses | for sets — unrelated to int | int.

Notes:
• Overloaded | for dict merge in 3.9+ — not this quiz.`
  }),

  // Q38
  (_i: number) => ({
    q: `What is 5 ^ 3?`,
    o: ["6", "1", "7", "8"],
    c: 0,
    e: "Bitwise XOR: 101 ^ 011 = 110 = 6. Bits that differ between operands become 1.",
    de: `The ^ operator performs bitwise XOR (exclusive OR) — each bit in the result is 1 if the corresponding bits in the operands are different.

Step by step:
• 5 in binary: 101
• 3 in binary: 011
• XOR operation:
  101
  011
  ---
  110 = 6

Key concepts:
• ^ compares each bit position independently
• Bit is 1 only if the input bits are DIFFERENT
• Acts like a logical XOR on each bit pair
• Common use: toggling bits, simple encryption, swapping values

Truth table for XOR:
• 0 ^ 0 = 0
• 0 ^ 1 = 1
• 1 ^ 0 = 1
• 1 ^ 1 = 0

Example:
>>> 5 ^ 3
6
>>> bin(5 ^ 3)
'0b110'

Key Distinctions:
• ^ is bitwise XOR: 1 if bits differ.
• 0b101 ^ 0b011 -> 0b110 = 6.

How It Works:
• XOR table per bit.

Step-by-Step Execution:
1. XOR bits.
2. 6.

Order of Operations:
• ^ between ints.

Common Use Cases:
• Parity, toggling bits, XOR linked list tricks.

Edge Cases:
• XOR is its own inverse: a^a == 0.

Performance Considerations:
• O(1).

Examples:
• Swap XOR swap pattern for ints — avoid in Python style.

Notes:
• bool ^ bool is int 0/1.`
  }),

  // Q39
  (_i: number) => ({
    q: `What is ~5?`,
    o: ["-6", "-5", "6", "-4"],
    c: 0,
    e: "Bitwise NOT inverts all bits — in two's complement, ~n = -(n+1), so ~5 = -6.",
    de: `The ~ operator performs bitwise NOT — it inverts every bit. In Python's two's complement representation, ~n equals -(n+1).

Key concepts:
• ~5 = -6 because ~n = -(n + 1)
• This comes from two's complement binary representation
• ~0 = -1, ~1 = -2, ~(-1) = 0
• Python integers have unlimited precision, so all bits are flipped

Two's complement explanation:
• 5 in binary: ...00000101
• ~5 flips all bits: ...11111010
• In two's complement, ...11111010 = -6
• Formula: ~n = -(n + 1) always holds

Useful identity:
• ~n = -(n + 1)
• ~~n = n (double NOT returns original)
• ~(-n) = n - 1

Example:
>>> ~5
-6
>>> ~0
-1
>>> ~(-1)
0

Key Distinctions:
• ~ is bitwise NOT: ~x == -x-1 for ints in two's complement view.
• ~5 -> -6.

How It Works:
• Inverts all bits in unlimited precision representation.

Step-by-Step Execution:
1. Invert bits of 5.
2. Interpret as signed int -> -6.

Order of Operations:
• Unary ~ binds tightly.

Common Use Cases:
• Low-level bit tricks and competitive programming.

Edge Cases:
• ~(-1) is 0 in the sense infinite ones flip — careful with theory.

Performance Considerations:
• O(1) for word size.

Examples:
• ~~x is not always x for floats — ~ is int/bit op.

Notes:
• For positive n, ~n == -n-1.`
  }),

  // Q40
  (_i: number) => ({
    q: `What is 1 << 3?`,
    o: ["8", "3", "4", "1"],
    c: 0,
    e: "Left shift by 3: 1 (binary 1) becomes 1000 (binary) = 8. Equivalent to 1 * 2³.",
    de: `The << operator shifts bits to the left, inserting zeros on the right. Left shifting by n positions multiplies by 2^n.

Step by step:
• 1 in binary: 0001
• Shift left by 3: 1000
• 1000 in decimal = 8
• Equivalent to: 1 * 2^3 = 8

Key concepts:
• a << n = a * 2^n
• Each left shift doubles the value
• 1 << 3 = 1 * 8 = 8
• Zeros are inserted on the right side

Common uses:
• Quick power-of-2 multiplication: x << 1 = x * 2
• Creating bitmasks: 1 << n sets the nth bit
• 1 << 0 = 1, 1 << 1 = 2, 1 << 2 = 4, 1 << 3 = 8

Example:
>>> 1 << 3
8
>>> 5 << 1
10

Key Distinctions:
• << left-shifts bits: multiplying by 2**k for nonnegative left operands.
• 1 << 3 is 8.

How It Works:
• Insert zeros on the right in binary representation.

Step-by-Step Execution:
1. Start 0b1.
2. Shift left 3 -> 0b1000.

Order of Operations:
• << between ints.

Common Use Cases:
• Powers of two and bitmask building.

Edge Cases:
• Negative shift counts raise ValueError; huge shifts allocate big ints.

Performance Considerations:
• Big int shifts cost by result size.

Examples:
• 1 << 10 == 1024.

Notes:
• For floats use multiplication — << is int only.`
  }),

  // Q41
  (_i: number) => ({
    q: `What is 16 >> 2?`,
    o: ["4", "8", "2", "64"],
    c: 0,
    e: "Right shift by 2: 10000 becomes 100 = 4. Equivalent to 16 // 2² = 16 // 4.",
    de: `The >> operator shifts bits to the right, discarding bits that fall off. Right shifting by n positions divides by 2^n (integer division).

Step by step:
• 16 in binary: 10000
• Shift right by 2: 00100
• 100 in decimal = 4
• Equivalent to: 16 // 2^2 = 16 // 4 = 4

Key concepts:
• a >> n = a // 2^n (floor division by power of 2)
• Each right shift halves the value (floor)
• Bits shifted off the right are lost
• For negative numbers, sign bit is preserved (arithmetic shift)

Common uses:
• Quick power-of-2 division: x >> 1 = x // 2
• Extracting specific bits from a value
• 16 >> 1 = 8, 16 >> 2 = 4, 16 >> 3 = 2, 16 >> 4 = 1

Example:
>>> 16 >> 2
4
>>> 100 >> 1
50

Key Distinctions:
• >> floor-divides by 2**k toward negative infinity for ints.
• 16 >> 2 is 4.

How It Works:
• Drop k least significant bits (for nonnegative).

Step-by-Step Execution:
1. 16 // 4 conceptually.
2. Result 4.

Order of Operations:
• >> on nonnegative int is floor division by power of two.

Common Use Cases:
• Halving in integer-only pipelines.

Edge Cases:
• Negative left operand shifts differently — arithmetic shift conceptual.

Performance Considerations:
• O(1) for small ints.

Examples:
• -7 >> 1 is -4 floor toward -inf.

Notes:
• Prefer // for clarity if not bit-motivated.`
  }),

  // Q42
  (_i: number) => ({
    q: `What is 0b1010 & 0b1100?`,
    o: ["8", "14", "6", "2"],
    c: 0,
    e: "Binary AND: 1010 & 1100 = 1000 = 8. Only the leftmost bit is 1 in both.",
    de: `The 0b prefix creates integers from binary literals. The & operator then performs bitwise AND on these values.

Step by step:
• 0b1010 = 10 (decimal)
• 0b1100 = 12 (decimal)
• AND operation:
  1010
  1100
  ----
  1000 = 8

Key concepts:
• 0b prefix lets you write integers in binary
• 0b1010 is the integer 10, 0b1100 is the integer 12
• Bitwise operations work on the binary representations
• The result is a regular Python int (8), not a binary string

Bit-by-bit analysis:
• Position 3: 1 & 1 = 1
• Position 2: 0 & 1 = 0
• Position 1: 1 & 0 = 0
• Position 0: 0 & 0 = 0
• Result: 1000 = 8

Example:
>>> 0b1010 & 0b1100
8

Key Distinctions:
• Binary literals work as ints; AND masks common 1 bits.
• 0b1010 & 0b1100 -> 0b1000 = 8.

How It Works:
• Same as decimal ints — just literal syntax.

Step-by-Step Execution:
1. Parse 10 and 12 decimal equivalents.
2. AND -> 8.

Order of Operations:
• & on two ints.

Common Use Cases:
• Hardware register masks.

Edge Cases:
• Underscores allowed in literals for grouping in modern Python.

Performance Considerations:
• O(1).

Examples:
• 0b1111 & 0b1010 -> 0b1010.

Notes:
• int.bit_count() counts set bits in 3.8+ / 3.10+.`
  }),

  // Q43
  (_i: number) => ({
    q: `What is 0b1010 | 0b1100?`,
    o: ["14", "8", "6", "10"],
    c: 0,
    e: "Binary OR: 1010 | 1100 = 1110 = 14. Any bit that is 1 in either operand stays 1.",
    de: `Bitwise OR on binary literals combines the set bits from both operands.

Step by step:
• 0b1010 = 10 (decimal)
• 0b1100 = 12 (decimal)
• OR operation:
  1010
  1100
  ----
  1110 = 14

Bit-by-bit analysis:
• Position 3: 1 | 1 = 1
• Position 2: 0 | 1 = 1
• Position 1: 1 | 0 = 1
• Position 0: 0 | 0 = 0
• Result: 1110 = 14

Key concepts:
• OR keeps a bit if it's set in either operand
• Result has more bits set than either input (or equal)
• a | 0 = a (OR with zero preserves the value)
• a | a = a (OR with self is unchanged)

Example:
>>> 0b1010 | 0b1100
14
>>> bin(0b1010 | 0b1100)
'0b1110'

Key Distinctions:
• OR combines 1 bits: 0b1010 | 0b1100 -> 0b1110 = 14.

How It Works:
• Bitwise OR on literal ints.

Step-by-Step Execution:
1. OR bits.
2. 14.

Order of Operations:
• Single |.

Common Use Cases:
• Merging flags.

Edge Cases:
• Result at least as large in bit length as max operand for nonnegative.

Performance Considerations:
• O(1).

Examples:
• union of bit positions.

Notes:
• Use bin() to debug bit patterns.`
  }),

  // Q44
  (_i: number) => ({
    q: `What is 0b1010 ^ 0b1100?`,
    o: ["6", "8", "14", "2"],
    c: 0,
    e: "Binary XOR: 1010 ^ 1100 = 0110 = 6. Bits that differ between operands become 1.",
    de: `Bitwise XOR on binary literals produces 1 only where the bits differ between the two operands.

Step by step:
• 0b1010 = 10 (decimal)
• 0b1100 = 12 (decimal)
• XOR operation:
  1010
  1100
  ----
  0110 = 6

Bit-by-bit analysis:
• Position 3: 1 ^ 1 = 0 (same → 0)
• Position 2: 0 ^ 1 = 1 (different → 1)
• Position 1: 1 ^ 0 = 1 (different → 1)
• Position 0: 0 ^ 0 = 0 (same → 0)
• Result: 0110 = 6

Key concepts:
• XOR finds the bits that are different
• a ^ 0 = a (XOR with zero preserves value)
• a ^ a = 0 (XOR with self gives zero)
• XOR is reversible: (a ^ b) ^ b = a

Example:
>>> 0b1010 ^ 0b1100
6
>>> bin(0b1010 ^ 0b1100)
'0b110'

Key Distinctions:
• XOR finds differing bits: 1010 xor 1100 -> 0110 = 6.

How It Works:
• XOR table per bit position.

Step-by-Step Execution:
1. Compute xor.
2. 6.

Order of Operations:
• Single ^.

Common Use Cases:
• Checksums and toggling.

Edge Cases:
• a^b^b == a classic identity.

Performance Considerations:
• O(1).

Examples:
• XOR swap without temp for ints — Python style still prefers tuple swap.

Notes:
• Hamming distance uses XOR and bit_count.`
  }),

  // Q45
  (_i: number) => ({
    q: `What is bin(10)?`,
    o: ["'0b1010'", "'1010'", "'0x0a'", "1010"],
    c: 0,
    e: "bin() converts an integer to its binary string representation with '0b' prefix.",
    de: `The bin() built-in function converts an integer to a string showing its binary representation, prefixed with '0b'.

Key concepts:
• bin(10) returns '0b1010'
• The '0b' prefix indicates binary representation
• The result is a string, not a number
• 10 in binary: 8+2 = 1010

Related conversion functions:
• bin(10) → '0b1010' (binary)
• oct(10) → '0o12' (octal)
• hex(10) → '0xa' (hexadecimal)
• int('0b1010', 2) → 10 (binary string back to int)

Converting between bases:
• Binary: bin(n) — prefix '0b'
• Octal: oct(n) — prefix '0o'
• Hex: hex(n) — prefix '0x'
• All return strings

Example:
>>> bin(10)
'0b1010'
>>> bin(255)
'0b11111111'

Key Distinctions:
• bin() returns string with '0b' prefix and binary digits for nonnegative int.
• bin(10) -> '0b1010'.

How It Works:
• Format integer in base 2 with prefix.

Step-by-Step Execution:
1. Convert 10 to binary text.
2. Prefix 0b.

Order of Operations:
• Built-in bin call.

Common Use Cases:
• Debugging bit patterns in teaching.

Edge Cases:
• Negative ints show minus sign and infinite bits concept — uses -0b... form.

Performance Considerations:
• O(number of output bits).

Examples:
• bin(0) is '0b0'.

Notes:
• format(n,'b') without prefix if slice [2:] from bin.`
  }),

  // Q46
  (_i: number) => ({
    q: `What is bin(10 & 12)?`,
    o: ["'0b1000'", "'0b1010'", "'0b1100'", "'0b0010'"],
    c: 0,
    e: "10 & 12 = 8 (1010 & 1100 = 1000), then bin(8) = '0b1000'.",
    de: `This combines a bitwise AND operation with bin() to visualize the result in binary.

Step by step:
• 10 in binary: 1010
• 12 in binary: 1100
• 10 & 12:
  1010
  1100
  ----
  1000 = 8
• bin(8) = '0b1000'

Key concepts:
• Operations are evaluated inside out: first 10 & 12 = 8, then bin(8)
• bin() is useful for visualizing bitwise operation results
• The result string always has the '0b' prefix
• Leading zeros are not shown: bin(8) is '0b1000' not '0b01000'

Useful pattern:
• Use bin() to verify bitwise operations visually
• bin(a & b) shows which bits are common
• bin(a | b) shows which bits are set in either
• bin(a ^ b) shows which bits differ

Example:
>>> bin(10 & 12)
'0b1000'
>>> bin(10 | 12)
'0b1110'

Key Distinctions:
• Inner & evaluates first: 10 & 12 -> 8, then bin(8) -> '0b1000'.
• Shows composing bitwise op inside conversion.

How It Works:
• Function call with inner expression evaluated first.

Step-by-Step Execution:
1. 10 & 12 -> 8.
2. bin(8).

Order of Operations:
• Call parens: argument & before bin.

Common Use Cases:
• Printing masked values in binary.

Edge Cases:
• Large results produce long strings.

Performance Considerations:
• Linear in bit length output.

Examples:
• hex(10&12) alternative view.

Notes:
• f-string binary formatting with format specs also works.`
  }),

  // Q47
  (_i: number) => ({
    q: `What is 1 << 10?`,
    o: ["1024", "10", "100", "512"],
    c: 0,
    e: "1 << 10 = 2^10 = 1024. Left shifting 1 by n gives 2 to the power of n.",
    de: `Left shifting 1 by n positions is the fastest way to compute 2^n in Python. 1 << 10 = 2^10 = 1024.

Key concepts:
• 1 << n = 2^n (power of 2)
• 1 << 10 = 1024 = 2^10
• This is faster than 2**10 for computing powers of 2
• Works because shifting left multiplies by 2 each time

Powers of 2 via left shift:
• 1 << 0 = 1
• 1 << 1 = 2
• 1 << 2 = 4
• 1 << 3 = 8
• 1 << 10 = 1024
• 1 << 20 = 1048576

Common values:
• 1 << 8 = 256 (1 byte range)
• 1 << 10 = 1024 (1 KB)
• 1 << 20 = 1048576 (1 MB)
• 1 << 30 = 1073741824 (1 GB)

Example:
>>> 1 << 10
1024
>>> 1 << 10 == 2**10
True

Key Distinctions:
• Shift 1 left 10 bits -> 2**10 = 1024.
• Common for kilobyte scale constants.

How It Works:
• Same as pow(2,10) for nonnegative small left operand.

Step-by-Step Execution:
1. 1 << 10.
2. 1024.

Order of Operations:
• << on ints.

Common Use Cases:
• Buffer sizes and page sizes in code comments.

Edge Cases:
• 0 << n is 0.

Performance Considerations:
• Big int if n huge.

Examples:
• 1<<20 for megabyte scale.

Notes:
• Use bit_length to measure integer size.`
  }),

  // Q48
  (_i: number) => ({
    q: `x = 5\nx ^= x\nWhat is x?`,
    o: ["0", "5", "10", "25"],
    c: 0,
    e: "XOR with self always gives 0 — every bit cancels out: 101 ^ 101 = 000.",
    de: `XORing any value with itself always produces 0. This is because XOR returns 1 only when bits differ, and identical values have no differing bits.

Step by step:
• x = 5 (binary: 101)
• x ^= x means x = x ^ x = 5 ^ 5
• XOR operation:
  101
  101
  ---
  000 = 0

Key concepts:
• a ^ a = 0 for any value a
• This is a fundamental property of XOR
• Every bit pair is (0,0) or (1,1) — both XOR to 0
• Used in cryptography, checksums, and variable swapping

XOR properties:
• a ^ a = 0 (self-cancellation)
• a ^ 0 = a (identity)
• a ^ b = b ^ a (commutative)
• (a ^ b) ^ c = a ^ (b ^ c) (associative)

Example:
>>> x = 5; x ^= x; x
0
>>> 255 ^ 255
0

Key Distinctions:
• In-place XOR with self: x ^= x sets x to 0 for any int (a^a==0).
• Side effect updates x; expression result is 0.

How It Works:
• __ixor__ on int mutates name binding to new int in CPython for augmented assignment.

Step-by-Step Execution:
1. Load x=5.
2. XOR with itself -> 0.
3. Bind x to 0.

Order of Operations:
• Augmented assignment evaluates x once in CPython 3 for this pattern.

Common Use Cases:
• Obfuscated zeroing — rarely idiomatic Python.

Edge Cases:
• Custom objects may define different ^=.

Performance Considerations:
• O(1).

Examples:
• Clear bitfields with &= 0 instead for clarity.

Notes:
• Prefer x = 0 for readability.`
  }),

  // Q49
  (_i: number) => ({
    q: `a, b = 3, 7\nWhat is a ^ b ^ b?`,
    o: ["3", "7", "0", "4"],
    c: 0,
    e: "XOR is self-inverse: a ^ b ^ b = a. XORing with b twice cancels out.",
    de: `XOR has a remarkable property: applying it twice with the same value cancels out, returning the original. This means a ^ b ^ b = a.

Step by step:
• a = 3 (binary: 011)
• b = 7 (binary: 111)
• a ^ b = 011 ^ 111 = 100 = 4
• 4 ^ b = 100 ^ 111 = 011 = 3
• Result: 3 (back to original a!)

Key concepts:
• a ^ b ^ b = a (XOR is self-inverse)
• The b XORs cancel each other out
• This works because b ^ b = 0, and a ^ 0 = a
• Proof: a ^ b ^ b = a ^ (b ^ b) = a ^ 0 = a

Applications:
• Simple encryption: encrypt with key, decrypt by XORing with same key
• XOR swap: swap two values without a temp variable
• Error detection and correction codes
• Finding the unique element in a list of pairs

Example:
>>> a, b = 3, 7
>>> a ^ b ^ b
3

Key Distinctions:
• XOR is associative: (a^b)^b == a because b^b==0 and a^0==a.
• Result restores a=3.

How It Works:
• Chain XOR left-associative: ((a^b)^b).

Step-by-Step Execution:
1. a^b.
2. XOR result with b -> cancels b bits.

Order of Operations:
• ^ chains left to right among equal precedence.

Common Use Cases:
• XOR decryption round trips in simple ciphers.

Edge Cases:
• Negative ints XOR with tricky infinite bit patterns.

Performance Considerations:
• O(1) big-int XOR proportional to word count.

Examples:
• One-time pad uses XOR secrecy.

Notes:
• For crypto use secrets module and proper keys — not toy XOR.`
  }),

  // Q50
  (_i: number) => ({
    q: `What is bool(0b0000)?`,
    o: ["False", "True", "0", "None"],
    c: 0,
    e: "0b0000 is 0 in decimal — and 0 is falsy regardless of how it's written.",
    de: `Binary literal 0b0000 is just the integer 0 written in binary notation. Since 0 is falsy in Python, bool(0b0000) returns False.

Key concepts:
• 0b0000 = 0 (decimal) — it's just another way to write zero
• bool(0) = False — zero is always falsy
• The base notation (binary, octal, hex) doesn't affect truthiness
• 0b0000, 0o0, 0x0, and 0 are all the same value: zero

Python truthiness for integers:
• bool(0) → False (zero is the only falsy integer)
• bool(1) → True
• bool(-1) → True
• bool(0b0000) → False
• bool(0b0001) → True

All representations of zero:
• 0 (decimal)
• 0b0 or 0b0000 (binary)
• 0o0 (octal)
• 0x0 (hexadecimal)
• All are the same int object: 0

Example:
>>> bool(0b0000)
False
>>> bool(0b0001)
True

Key Distinctions:
• Literal 0b0000 is int 0; bool(0) is False.
• Binary syntax does not make nonzero — value still zero.

How It Works:
• Parse binary literal to int 0; bool uses number truthiness.

Step-by-Step Execution:
1. int 0 from literal.
2. bool(0) -> False.

Order of Operations:
• bool() call on literal.

Common Use Cases:
• Teaching that base prefix does not imply truthiness.

Edge Cases:
• bool(0b1) is True — any nonzero.

Performance Considerations:
• Trivial.

Examples:
• bool(0o0) and bool(0x0) also False.

Notes:
• Use explicit is None checks separately from numeric zero.`
  }),
];
