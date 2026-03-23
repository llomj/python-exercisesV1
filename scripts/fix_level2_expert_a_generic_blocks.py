#!/usr/bin/env python3
"""
Replace duplicated generic tails in level2_expert_a.ts (50 occurrences).

Positional TAILS order = duplicate markers top-to-bottom. replacement = "Key Distinctions:\\n" + tail.
BLOCK_END matches Level 2 PEMDAS Notes footer (same as level2.ts).
No backticks inside tails (TS de template literal safety).
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

# 50 tails: open with bullet lines (Key Distinctions body), then section headers as in other fix scripts
TAILS: list[str] = [
    # 1 Decimal equality
    """• Decimal compares values in base ten; the equality tests exact rational value, not float bits.
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
• Configure decimal.getcontext() for production rounding rules; do not mix Decimal with float in careless adds.""",
    # 2 Decimal add value
    """• Addition yields a new Decimal representing the exact mathematical sum in the current context.
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
• Use strings in Decimal("...") for human inputs; avoid Decimal(0.1) from float noise.""",
    # 3 Decimal from float vs string
    """• Decimal(0.1) first sees a binary float already wrong in base ten; Decimal("0.1") is exact.
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
• Never construct Decimal from float for accounting — use strings or integers of smallest currency units.""",
    # 4 Decimal division
    """• True division on Decimal can produce unrounded ratios; 1/3 is a repeating decimal stored with context precision.
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
• quantize after division when you need a fixed number of decimal places.""",
    # 5 quantize 1
    """• quantize(Decimal("1")) rounds the value to integer units (0 decimal places) per rounding mode.
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
• Match quantize template exponent to your legal rounding granularity.""",
    # 6 quantize 0.1
    """• quantize(Decimal("0.1")) keeps one fractional digit — rounds 10.55 to one decimal place.
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
• Document rounding mode for auditors; consider ROUND_DOWN for conservative fees.""",
    # 7 type Decimal
    """• type(Decimal("3.14")) is <class 'decimal.Decimal'> — a distinct numeric type from float and int.
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
• JSON serialization needs a custom encoder for Decimal.""",
    # 8 is_infinite
    """• Decimal supports infinities; is_infinite() is True for signed infinity special values.
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
• Do not mix Decimal infinities with float inf without explicit conversion rules.""",
    # 9 is_nan
    """• Decimal NaN is a quiet NaN analog; is_nan() returns True.
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
• Prefer exceptions over NaN in business logic when possible.""",
    # 10 is_finite
    """• Normal finite Decimals return True; infinities and NaNs return False for is_finite().
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
• Pair with is_nan and is_infinite for full classification.""",
    # 11 sqrt Decimal
    """• Decimal.sqrt() returns a Decimal approximate square root using context precision.
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
• Increase context.prec for more sqrt digits.""",
    # 12 sqrt(2)
    """• sqrt(2) is irrational; Decimal gives a rounded result to context precision, not a symbol.
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
• For exact radicals, use sympy or rationals, not Decimal.""",
    # 13 float(Decimal)
    """• float(Decimal("3.14")) produces a binary float — may introduce slight representation error.
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
• Keep finance in Decimal end-to-end when possible.""",
    # 14 Decimal compare
    """• Decimal ordering uses exact numeric value; 3.14 > 3.13 is True.
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
• Use quantize before comparing if business rules require same scale.""",
    # 15 Decimal + int
    """• Adding int to Decimal promotes the int to Decimal and returns Decimal — no float in the middle.
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
• Do not add float to Decimal — TypeError in Python 3.""",
    # 16 Fraction(1,3)
    """• Fraction stores a rational as numerator and denominator in lowest terms internally.
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
• limit_denominator finds nearby small denominators from floats.""",
    # 17 Fraction add
    """• Fraction addition uses exact rational arithmetic: common denominator then add numerators.
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
• float(f) may approximate — use only at boundaries.""",
    # 18 Fraction(2,4) normalize
    """• Fraction automatically reduces 2/4 to 1/2 — canonical lowest terms.
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
• str(Fraction) may show simplified form.""",
    # 19 float(Fraction)
    """• float(Fraction(1,3)) is the nearest binary float to one-third — not exact.
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
• Keep Fraction until the last moment for exact pipelines.""",
    # 20 Fraction * int
    """• Multiplying Fraction by int scales the numerator exactly.
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
• Use // for floor of rational division? Different operation.""",
    # 21 Fraction *3 == 1
    """• Exact equality: (1/3)*3 reduces to 1 — True in rationals, unlike float 0.1*3 noise stories.
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
• from_float may poison Fraction with approximation — prefer ints or strings.""",
    # 22 Fraction from string
    """• Fraction("0.5") parses decimal text to exact 1/2.
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
• Fraction(0.1) uses float's exact value — often surprising.""",
    # 23 Fraction(0.1) float hazard
    """• Constructing Fraction from float uses the exact binary value of 0.1, not the human decimal 0.1.
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
• Limit_denominator cleans huge rationals from floats.""",
    # 24 Fraction(1,0)
    """• Denominator zero is undefined; Fraction raises ZeroDivisionError.
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
• math.inf is float domain; not a Fraction.""",
    # 25 limit_denominator
    """• limit_denominator(max_den) finds a nearby rational with denominator at most max.
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
• Not the same as float round — different objective.""",
    # 26 type(1+2j)
    """• Adding imaginary unit forms a complex number; type is complex.
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
• No native Decimal complex in stdlib — use cmath on complex.""",
    # 27 .real
    """• .real attribute returns the real part as float (even if mathematically integer).
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
• For higher precision use external libraries.""",
    # 28 .imag
    """• .imag returns the imaginary coefficient as float.
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
• cmath.phase uses atan2(imag, real).""",
    # 29 complex add
    """• Complex addition is componentwise: (a+bi)+(c+di)=(a+c)+(b+d)i.
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
• Decimal and complex do not mix directly.""",
    # 30 complex multiply
    """• Multiply using distributive law and i^2=-1: (a+bi)(c+di)=(ac-bd)+(ad+bc)i.
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
• cmath.exp for polar form.""",
    # 31 abs complex
    """• abs on complex returns magnitude sqrt(real^2+imag^2) as float.
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
• cmath.polar returns (abs, phase).""",
    # 32 complex(3,4)
    """• complex(real, imag) constructor builds 3+4j from two numbers.
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
• str(complex) shows parentheses form.""",
    # 33 (1+0j) == 1
    """• Mixed comparison: complex with zero imaginary part may compare equal to int/float real.
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
• Use cmath.isclose for float noise; not needed for exact integers.""",
    # 34 bool(0+0j)
    """• Complex zero is falsy like float 0.0: bool(0+0j) is False.
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
• Do not confuse with None.""",
    # 35 conjugate
    """• conjugate() flips the sign of the imaginary part: (a+bi)* = a-bi.
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
• For matrices of complex numbers use numpy.""",
    # 36 5 & 3 bitwise AND
    """• & is bitwise AND on integers: bits both 1 stay 1.
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
• bool & bool coerces to int 0/1 in Python 3.""",
    # 37 5 | 3 OR
    """• | is bitwise OR: bit 1 if either operand has 1.
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
• Overloaded | for dict merge in 3.9+ — not this quiz.""",
    # 38 5 ^ 3 XOR
    """• ^ is bitwise XOR: 1 if bits differ.
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
• bool ^ bool is int 0/1.""",
    # 39 ~5 invert
    """• ~ is bitwise NOT: ~x == -x-1 for ints in two's complement view.
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
• For positive n, ~n == -n-1.""",
    # 40 1 << 3 left shift
    """• << left-shifts bits: multiplying by 2**k for nonnegative left operands.
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
• For floats use multiplication — << is int only.""",
    # 41 16 >> 2 right shift
    """• >> floor-divides by 2**k toward negative infinity for ints.
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
• Prefer // for clarity if not bit-motivated.""",
    # 42 0b1010 & 0b1100
    """• Binary literals work as ints; AND masks common 1 bits.
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
• int.bit_count() counts set bits in 3.8+ / 3.10+.""",
    # 43 0b1010 | 0b1100
    """• OR combines 1 bits: 0b1010 | 0b1100 -> 0b1110 = 14.

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
• Use bin() to debug bit patterns.""",
    # 44 0b1010 ^ 0b1100
    """• XOR finds differing bits: 1010 xor 1100 -> 0110 = 6.

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
• Hamming distance uses XOR and bit_count.""",
    # 45 bin(10)
    """• bin() returns string with '0b' prefix and binary digits for nonnegative int.
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
• format(n,'b') without prefix if slice [2:] from bin.""",
    # 46 bin(10 & 12)
    """• Inner & evaluates first: 10 & 12 -> 8, then bin(8) -> '0b1000'.
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
• f-string binary formatting with format specs also works.""",
    # 47 1 << 10
    """• Shift 1 left 10 bits -> 2**10 = 1024.
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
• Use bit_length to measure integer size.""",
    # 48 x ^= x
    """• In-place XOR with self: x ^= x sets x to 0 for any int (a^a==0).
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
• Prefer x = 0 for readability.""",
    # 49 a ^ b ^ b
    """• XOR is associative: (a^b)^b == a because b^b==0 and a^0==a.
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
• For crypto use secrets module and proper keys — not toy XOR.""",
    # 50 bool(0b0000)
    """• Literal 0b0000 is int 0; bool(0) is False.
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
• Use explicit is None checks separately from numeric zero.""",
]


def main() -> None:
    path = Path(__file__).resolve().parents[1] / "src/data/questions/level2_expert_a.ts"
    text = path.read_text(encoding="utf-8")
    n = text.count(BLOCK_START)
    if n != len(TAILS):
        raise SystemExit(f"Expected {len(TAILS)} generic blocks, found {n}")
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
