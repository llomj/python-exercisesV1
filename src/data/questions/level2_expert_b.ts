// --- LEVEL 2 EXPERT B: Numeric Edge Cases, Conversion Gotchas, Advanced Numbers (50 Questions) ---
// Questions 51-100 of expert set. Each is TRULY UNIQUE.
export const level2ExpertB = [
  // 51. Float imprecision: 0.1 + 0.1 + 0.1 - 0.3
  (_i: number) => ({
    q: `What is the result of 0.1 + 0.1 + 0.1 - 0.3 in Python?`,
    o: ["A tiny number close to 0 (not exactly 0)", "0", "0.1", "Error"],
    c: 0,
    e: "IEEE 754 floating-point arithmetic causes a tiny rounding error (~5.55e-17), not exactly 0.",
    de: `This is the classic floating-point imprecision example. 0.1 cannot be represented exactly in binary, so each addition accumulates a tiny error.

Key concepts:
• 0.1 in binary is a repeating fraction, like 1/3 in decimal
• 0.1 + 0.1 + 0.1 ≈ 0.30000000000000004
• 0.30000000000000004 - 0.3 ≈ 5.551115123125783e-17
• This is NOT zero — it's an extremely small positive number
• Use math.isclose() or round() for float comparisons

Example: 0.1 + 0.1 + 0.1 - 0.3 → 5.551115123125783e-17 (not exactly 0).`
  }),
  // 52. inf - inf = nan
  (_i: number) => ({
    q: `What is float("inf") - float("inf")?`,
    o: ["nan", "0", "inf", "Error"],
    c: 0,
    e: "Infinity minus infinity is undefined — the result is NaN (Not a Number).",
    de: `Subtracting infinity from infinity is mathematically indeterminate. IEEE 754 defines this result as NaN.

Key concepts:
• inf - inf → nan (indeterminate form)
• inf + inf → inf (both go the same direction)
• Infinity arithmetic follows IEEE 754 rules
• NaN propagates: any operation with NaN produces NaN
• Use math.isnan() to check for NaN

Example: float("inf") - float("inf") → nan. This is consistent with mathematical convention: ∞ - ∞ is undefined.`
  }),
  // 53. inf * 0 = nan
  (_i: number) => ({
    q: `What is float("inf") * 0?`,
    o: ["nan", "0", "inf", "Error"],
    c: 0,
    e: "Infinity times zero is undefined — the result is NaN.",
    de: `Multiplying infinity by zero is another indeterminate form. IEEE 754 defines this as NaN because the limit depends on how each factor approaches its value.

Key concepts:
• inf * 0 → nan (indeterminate form: 0 × ∞)
• inf * any positive number → inf
• inf * any negative number → -inf
• inf * 0 is undefined because the limit is ambiguous
• Python follows IEEE 754 strictly for these edge cases

Example: float("inf") * 0 → nan. float("inf") * 5 → inf. float("inf") * -1 → -inf.`
  }),
  // 54. inf / inf = nan
  (_i: number) => ({
    q: `What is float("inf") / float("inf")?`,
    o: ["nan", "1", "inf", "Error"],
    c: 0,
    e: "Infinity divided by infinity is undefined — the result is NaN.",
    de: `Dividing infinity by infinity is another indeterminate form. You might expect 1 (anything divided by itself), but ∞/∞ is mathematically undefined.

Key concepts:
• inf / inf → nan (indeterminate: ∞/∞)
• 1 / inf → 0.0 (finite / infinity = 0)
• inf / 1 → inf (infinity / finite = infinity)
• inf / 0 → ZeroDivisionError in Python (not inf!)
• These rules come from IEEE 754 floating-point standard

Example: float("inf") / float("inf") → nan. But 1.0 / float("inf") → 0.0.`
  }),
  // 55. inf + inf = inf
  (_i: number) => ({
    q: `What is float("inf") + float("inf")?`,
    o: ["inf", "nan", "Error", "0"],
    c: 0,
    e: "Infinity plus infinity is still infinity.",
    de: `Unlike inf - inf (which is nan), adding two infinities of the same sign yields infinity. Both go in the same direction, so the result is still infinite.

Key concepts:
• inf + inf → inf (same direction)
• -inf + -inf → -inf (both negative)
• inf + (-inf) → nan (opposite directions, indeterminate)
• inf + any finite number → inf
• Adding to infinity doesn't change it

Example: float("inf") + float("inf") → inf. Contrast with float("inf") - float("inf") → nan.`
  }),
  // 56. Lucky rounding: 1.0 / 3.0 * 3.0 == 1.0
  (_i: number) => ({
    q: `What is 1.0 / 3.0 * 3.0 == 1.0?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "Despite float imprecision, IEEE 754 rounding happens to produce exactly 1.0 here.",
    de: `This is a case of "lucky rounding." 1.0/3.0 produces 0.3333333333333333 (rounded), and multiplying by 3.0 rounds back to exactly 1.0 due to IEEE 754 round-to-nearest-even.

Key concepts:
• 1.0 / 3.0 → 0.3333333333333333 (truncated in binary)
• 0.3333333333333333 * 3.0 → 1.0 (rounds back perfectly)
• This is NOT guaranteed for all similar expressions
• 0.1 * 3 != 0.3 (different rounding, unlucky case)
• Float arithmetic can sometimes be exact by coincidence

Example: 1.0 / 3.0 * 3.0 == 1.0 → True. But don't rely on float equality in general.`
  }),
  // 57. Float imprecision: 0.1 * 3 != 0.3
  (_i: number) => ({
    q: `What is 0.1 * 3 == 0.3?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "0.1 * 3 gives 0.30000000000000004, which is not exactly 0.3.",
    de: `This is the most famous floating-point gotcha. Because 0.1 can't be represented exactly in binary, multiplying by 3 accumulates error.

Key concepts:
• 0.1 in float ≈ 0.1000000000000000055511151231257827021181583404541015625
• 0.1 * 3 ≈ 0.30000000000000004
• 0.3 in float ≈ 0.2999999999999999888977697537484345957636833190917968750
• These two representations are NOT equal
• Use math.isclose(0.1 * 3, 0.3) → True for approximate comparison

Example: 0.1 * 3 == 0.3 → False. 0.1 * 3 → 0.30000000000000004.`
  }),
  // 58. sys.float_info.epsilon conceptual
  (_i: number) => ({
    q: `What does sys.float_info.epsilon represent?`,
    o: ["Smallest float so that 1.0 + epsilon != 1.0", "The smallest positive float", "Maximum float value", "Float precision in decimal digits"],
    c: 0,
    e: "Epsilon (~2.22e-16) is the smallest float such that 1.0 + epsilon is distinguishable from 1.0.",
    de: `Machine epsilon is a fundamental concept in floating-point arithmetic. It defines the limit of precision for float operations near 1.0.

Key concepts:
• sys.float_info.epsilon ≈ 2.220446049250313e-16
• It's the smallest value where 1.0 + epsilon != 1.0
• Values smaller than epsilon are lost when added to 1.0
• It's NOT the smallest positive float (that's sys.float_info.min)
• Epsilon helps determine appropriate tolerance for float comparisons

Example: 1.0 + sys.float_info.epsilon != 1.0 → True. But 1.0 + (sys.float_info.epsilon / 2) == 1.0 → True (lost to rounding).`
  }),
  // 59. inf == inf is True (unlike nan)
  (_i: number) => ({
    q: `What is float("inf") == float("inf")?`,
    o: ["True", "False", "nan", "Error"],
    c: 0,
    e: "Unlike NaN, infinity IS equal to itself.",
    de: `Infinity compares equal to itself, which is the opposite behavior from NaN. This makes inf behave more intuitively in comparisons.

Key concepts:
• float("inf") == float("inf") → True
• float("nan") == float("nan") → False (NaN is NEVER equal to anything)
• inf is inf → True (identity, same singleton object)
• -inf == -inf → True
• inf == -inf → False

Example: float("inf") == float("inf") → True. This is the key difference: inf equals itself, nan does not.`
  }),
  // 60. Negative zero equals positive zero
  (_i: number) => ({
    q: `What is float("-0.0") == 0.0?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "IEEE 754 defines negative zero as equal to positive zero.",
    de: `IEEE 754 floating-point has two zero values: +0.0 and -0.0. Despite being distinct bit patterns, they compare as equal.

Key concepts:
• float("-0.0") == 0.0 → True (negative zero equals positive zero)
• -0.0 and +0.0 have different bit representations
• -0.0 == 0.0 → True (value equality)
• str(-0.0) → '-0.0' (the sign is preserved in string form)
• math.copysign(1, -0.0) → -1.0 (can detect negative zero)
• 1 / -0.0 → -inf vs 1 / 0.0 → inf (division distinguishes them)

Example: float("-0.0") == 0.0 → True. They are equal by IEEE 754 definition.`
  }),
  // 61. Detecting negative zero with copysign
  (_i: number) => ({
    q: `What is math.copysign(1, -0.0)?`,
    o: ["-1.0", "1.0", "0.0", "Error"],
    c: 0,
    e: "copysign copies the sign of -0.0 onto 1, producing -1.0.",
    de: `math.copysign(x, y) returns x with the sign of y. Since -0.0 has a negative sign, copysign(1, -0.0) returns -1.0. This is one way to detect negative zero.

Key concepts:
• math.copysign(1, -0.0) → -1.0 (copies the negative sign)
• math.copysign(1, 0.0) → 1.0 (copies the positive sign)
• -0.0 == 0.0 is True, but copysign can distinguish them
• copysign always returns a float
• Useful in scientific computing where sign matters

Example: math.copysign(1, -0.0) → -1.0. math.copysign(1, 0.0) → 1.0.`
  }),
  // 62. Python handles arbitrary precision integers (googol)
  (_i: number) => ({
    q: `Can Python compute 10 ** 100 (a googol) exactly?`,
    o: ["Yes, Python integers have unlimited precision", "No, it overflows", "It returns inf", "It raises OverflowError"],
    c: 0,
    e: "Python integers have arbitrary precision — there is no overflow for int operations.",
    de: `Python integers are not limited to 32 or 64 bits. They can grow as large as your memory allows, so computing 10**100 is perfectly fine.

Key concepts:
• Python int has arbitrary (unlimited) precision
• 10 ** 100 is a 101-digit number (a googol)
• No integer overflow exists in Python
• This is different from C/Java where ints are fixed-size
• Only float operations can overflow (to inf)

Example: 10 ** 100 → 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000. All 101 digits exact.`
  }),
  // 63. type of a huge int
  (_i: number) => ({
    q: `What is type(10 ** 100)?`,
    o: ["<class 'int'>", "<class 'float'>", "<class 'long'>", "Error"],
    c: 0,
    e: "Even extremely large numbers remain type int in Python 3.",
    de: `In Python 3, there is no separate 'long' type. All integers, regardless of size, are of type int. Python 2 had a separate long type, but Python 3 unified them.

Key concepts:
• type(10 ** 100) → <class 'int'> (not long, not float)
• Python 3 has only one integer type: int
• Python 2 had int and long (merged in Python 3)
• There is no size limit for Python int
• Converting huge ints to float may lose precision or overflow

Example: type(10 ** 100) → <class 'int'>. type(2 ** 1000) → <class 'int'>. Always int.`
  }),
  // 64. float(10 ** 308) is valid
  (_i: number) => ({
    q: `What happens with float(10 ** 308)?`,
    o: ["Returns 1e+308 (valid float)", "Returns inf", "Raises OverflowError", "Returns 0.0"],
    c: 0,
    e: "10^308 is within the float range (max ≈ 1.8e+308), so conversion succeeds.",
    de: `The maximum finite float is approximately 1.7976931348623157e+308. Since 10**308 = 1e+308 is less than this maximum, the conversion is valid.

Key concepts:
• float max ≈ 1.7977e+308 (sys.float_info.max)
• float(10 ** 308) → 1e+308 (within range, valid)
• float(10 ** 309) → inf (exceeds max, overflows to infinity)
• Converting large ints to float may lose precision even when valid
• int → float conversion can silently lose precision for ints > 2^53

Example: float(10 ** 308) → 1e+308. This is a valid, finite float value.`
  }),
  // 65. float(10 ** 309) overflows to inf
  (_i: number) => ({
    q: `What is float(10 ** 309)?`,
    o: ["inf", "1e+309", "OverflowError", "0.0"],
    c: 0,
    e: "10^309 exceeds the maximum float value (~1.8e+308), so it overflows to infinity.",
    de: `When an integer is too large to fit in a float, Python converts it to inf instead of raising an error. The threshold is approximately 1.8e+308.

Key concepts:
• float(10 ** 309) → inf (overflow, exceeds max float)
• float(10 ** 308) → 1e+308 (still within range)
• Python doesn't raise OverflowError for int-to-float overflow
• The result is positive infinity (inf)
• sys.float_info.max ≈ 1.7976931348623157e+308

Example: float(10 ** 309) → inf. The integer is too large for float representation.`
  }),
  // 66. No integer overflow in Python
  (_i: number) => ({
    q: `What is -(-2147483648) in Python?`,
    o: ["2147483648", "-2147483648", "0", "OverflowError"],
    c: 0,
    e: "Python has no integer overflow — negating any integer works correctly.",
    de: `In C, -(-2147483648) would overflow a 32-bit signed integer because 2147483648 exceeds the max (2147483647). Python has no such limit.

Key concepts:
• -(-2147483648) → 2147483648 (correct mathematical result)
• 2147483648 = 2^31, which overflows 32-bit signed int in C
• Python integers have unlimited precision — no overflow possible
• This is a common gotcha when porting C code to Python
• -2147483648 is the minimum 32-bit signed integer

Example: -(-2147483648) → 2147483648. Python handles this perfectly because ints have arbitrary precision.`
  }),
  // 67. Huge integer with no overflow
  (_i: number) => ({
    q: `Does 2 ** 1000 cause an overflow in Python?`,
    o: ["No, Python computes it exactly", "Yes, OverflowError", "It returns inf", "It returns 0"],
    c: 0,
    e: "Python integers have arbitrary precision — 2^1000 is computed exactly with all 302 digits.",
    de: `2**1000 is an astronomically large number with 302 digits, but Python handles it without any issue because Python integers have unlimited precision.

Key concepts:
• 2 ** 1000 produces a 302-digit integer
• No OverflowError — Python ints grow as needed
• Only limited by available memory
• Arithmetic on huge ints is slower but always correct
• This is a major advantage of Python over fixed-precision languages

Example: 2 ** 1000 → a 302-digit number. type(2 ** 1000) → <class 'int'>. No overflow.`
  }),
  // 68. Number of digits in 2 ** 1000
  (_i: number) => ({
    q: `What is len(str(2 ** 1000))?`,
    o: ["302", "1000", "301", "Error"],
    c: 0,
    e: "2^1000 has 302 decimal digits.",
    de: `Converting 2**1000 to a string and measuring its length tells you how many decimal digits it has. The number of digits is floor(log10(2^1000)) + 1 = floor(1000 * log10(2)) + 1 = floor(301.03) + 1 = 302.

Key concepts:
• len(str(n)) gives the number of decimal digits of a positive integer n
• 2^1000 ≈ 1.07 × 10^301, so it has 302 digits
• Formula: digits = floor(n * log10(2)) + 1 for 2^n
• str() converts the full integer to its decimal representation
• Python handles the conversion for arbitrarily large integers

Example: len(str(2 ** 1000)) → 302. The number starts with "1071508607..." and has 302 total digits.`
  }),
  // 69. int() with base 16
  (_i: number) => ({
    q: `What is int("ff", 16)?`,
    o: ["255", "Error", "ff", "16"],
    c: 0,
    e: 'int("ff", 16) parses "ff" as hexadecimal: f=15, so 15×16 + 15 = 255.',
    de: `int() accepts a second argument specifying the base. Base 16 (hexadecimal) uses digits 0-9 and letters a-f (case-insensitive).

Key concepts:
• int("ff", 16) → 255 (parse as hex)
• f in hex = 15, so ff = 15×16 + 15 = 255
• Case-insensitive: int("FF", 16) also → 255
• Prefix not needed: int("0xff", 16) also works
• Base can be 2-36 or 0 (auto-detect from prefix)

Example: int("ff", 16) → 255. int("a", 16) → 10. int("10", 16) → 16.`
  }),
  // 70. int() with base 2
  (_i: number) => ({
    q: `What is int("1010", 2)?`,
    o: ["10", "1010", "Error", "5"],
    c: 0,
    e: 'int("1010", 2) parses "1010" as binary: 8 + 0 + 2 + 0 = 10.',
    de: `Parsing a string in base 2 interprets each character as a binary digit. "1010" in binary is 1×8 + 0×4 + 1×2 + 0×1 = 10.

Key concepts:
• int("1010", 2) → 10 (binary to decimal)
• Binary digits: 1=1, 10=2, 100=4, 1000=8, 10000=16
• Only '0' and '1' are valid in base 2
• int("0b1010", 2) also works (with prefix)
• This is the inverse of bin(10) → '0b1010'

Example: int("1010", 2) → 10. int("1111", 2) → 15. int("10000", 2) → 16.`
  }),
  // 71. int() with base 8
  (_i: number) => ({
    q: `What is int("777", 8)?`,
    o: ["511", "777", "Error", "343"],
    c: 0,
    e: 'int("777", 8) parses "777" as octal: 7×64 + 7×8 + 7 = 511.',
    de: `Base 8 (octal) uses digits 0-7. "777" in octal is 7×64 + 7×8 + 7 = 448 + 56 + 7 = 511.

Key concepts:
• int("777", 8) → 511 (octal to decimal)
• Octal is base 8: each digit position is a power of 8
• 7×8² + 7×8¹ + 7×8⁰ = 448 + 56 + 7 = 511
• 777 in octal is the maximum 3-digit octal number
• Unix file permissions use octal: 777 = all permissions

Example: int("777", 8) → 511. int("10", 8) → 8. int("100", 8) → 64.`
  }),
  // 72. int() with base 36 zero
  (_i: number) => ({
    q: `What is int("0", 36)?`,
    o: ["0", "36", "Error", "None"],
    c: 0,
    e: '"0" in any base is 0.',
    de: `Zero is zero in every base. int() with base 36 supports digits 0-9 and letters a-z, but "0" is simply zero regardless.

Key concepts:
• int("0", base) → 0 for any valid base (2-36)
• Base 36 is the maximum supported base in Python
• Base 36 uses: 0-9 (values 0-9) and a-z (values 10-35)
• "0" has the same value in every number system
• int("0", 36) → 0, int("0", 2) → 0, int("0", 10) → 0

Example: int("0", 36) → 0. Zero is universal across all bases.`
  }),
  // 73. Base 36 max single digit: z = 35
  (_i: number) => ({
    q: `What is int("z", 36)?`,
    o: ["35", "36", "26", "Error"],
    c: 0,
    e: 'In base 36, "z" is the highest single digit with value 35 (a=10, b=11, ..., z=35).',
    de: `Base 36 is the largest base supported by int(). It uses digits 0-9 (values 0-9) and letters a-z (values 10-35). The letter 'z' represents 35.

Key concepts:
• Base 36: 0-9 → 0-9, a-z → 10-35
• 'a' = 10, 'b' = 11, ..., 'z' = 35
• int("z", 36) → 35 (the maximum single-digit value)
• int("10", 36) → 36 (one-zero in base 36 = 36)
• Base 36 is sometimes used for short URL encodings

Example: int("z", 36) → 35. int("a", 36) → 10. int("10", 36) → 36.`
  }),
  // 74. bin(255)
  (_i: number) => ({
    q: `What is bin(255)?`,
    o: ["'0b11111111'", "'0b10000000'", "'11111111'", "Error"],
    c: 0,
    e: "255 in binary is 11111111 (eight 1s). bin() adds the '0b' prefix.",
    de: `bin() converts an integer to its binary string representation with a '0b' prefix. 255 = 2^8 - 1 = 11111111 in binary.

Key concepts:
• bin(255) → '0b11111111' (8 ones in binary)
• 255 = 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 2^8 - 1
• bin() always includes the '0b' prefix
• Use format(255, 'b') for binary without prefix → '11111111'
• bin() works with negative numbers: bin(-1) → '-0b1'

Example: bin(255) → '0b11111111'. bin(256) → '0b100000000' (nine digits).`
  }),
  // 75. hex(255)
  (_i: number) => ({
    q: `What is hex(255)?`,
    o: ["'0xff'", "'0xf'", "'ff'", "Error"],
    c: 0,
    e: "255 in hexadecimal is ff. hex() adds the '0x' prefix.",
    de: `hex() converts an integer to its hexadecimal string representation with a '0x' prefix. 255 = 15×16 + 15 = ff in hex.

Key concepts:
• hex(255) → '0xff' (ff in hexadecimal)
• 255 = f×16 + f = 15×16 + 15
• hex() always uses lowercase letters (a-f)
• hex() always includes the '0x' prefix
• Use format(255, 'x') for hex without prefix → 'ff'

Example: hex(255) → '0xff'. hex(256) → '0x100'. hex(16) → '0x10'.`
  }),
  // 76. oct(255)
  (_i: number) => ({
    q: `What is oct(255)?`,
    o: ["'0o377'", "'0o255'", "'377'", "Error"],
    c: 0,
    e: "255 in octal is 377. oct() adds the '0o' prefix.",
    de: `oct() converts an integer to its octal string representation with a '0o' prefix. 255 = 3×64 + 7×8 + 7 = 377 in octal.

Key concepts:
• oct(255) → '0o377' (377 in octal)
• 255 = 3×8² + 7×8¹ + 7×8⁰ = 192 + 56 + 7
• oct() always includes the '0o' prefix
• Use format(255, 'o') for octal without prefix → '377'
• 0o377 is a valid Python literal for 255

Example: oct(255) → '0o377'. oct(8) → '0o10'. oct(64) → '0o100'.`
  }),
  // 77. bit_length() of 100
  (_i: number) => ({
    q: `What is (100).bit_length()?`,
    o: ["7", "8", "100", "3"],
    c: 0,
    e: "100 in binary is 1100100, which requires 7 bits.",
    de: `bit_length() returns the number of bits needed to represent the integer in binary, excluding the sign and leading zeros.

Key concepts:
• (100).bit_length() → 7
• 100 in binary = 1100100 (7 digits)
• bit_length() counts the position of the highest set bit
• Equivalent to: floor(log2(n)) + 1 for positive n
• Useful for determining how many bits an integer needs

Example: (100).bit_length() → 7. (127).bit_length() → 7. (128).bit_length() → 8.`
  }),
  // 78. bit_length() of 0
  (_i: number) => ({
    q: `What is (0).bit_length()?`,
    o: ["0", "1", "Error", "None"],
    c: 0,
    e: "Zero requires 0 bits to represent — it's the special case.",
    de: `Zero is a special case for bit_length(): it returns 0 because zero requires no bits to represent (there are no set bits).

Key concepts:
• (0).bit_length() → 0 (special case)
• (1).bit_length() → 1 (needs 1 bit: '1')
• (2).bit_length() → 2 (needs 2 bits: '10')
• Zero is the only integer where bit_length() returns 0
• Negative numbers: (-1).bit_length() → 1 (sign is excluded)

Example: (0).bit_length() → 0. This is the only value that returns 0.`
  }),
  // 79. bit_length() of 1
  (_i: number) => ({
    q: `What is (1).bit_length()?`,
    o: ["1", "0", "2", "Error"],
    c: 0,
    e: "1 in binary is just '1', requiring exactly 1 bit.",
    de: `The integer 1 in binary is simply '1', which requires exactly one bit. bit_length() returns the minimum number of bits needed.

Key concepts:
• (1).bit_length() → 1 (binary: '1')
• (2).bit_length() → 2 (binary: '10')
• (3).bit_length() → 2 (binary: '11')
• (4).bit_length() → 3 (binary: '100')
• Pattern: 2^n has bit_length of n+1

Example: (1).bit_length() → 1. The number 1 needs exactly one binary digit.`
  }),
  // 80. bit_length() of 255
  (_i: number) => ({
    q: `What is (255).bit_length()?`,
    o: ["8", "7", "255", "9"],
    c: 0,
    e: "255 in binary is 11111111 (eight bits).",
    de: `255 = 2^8 - 1 = 11111111 in binary, which requires exactly 8 bits. This is the largest number that fits in 8 bits (unsigned).

Key concepts:
• (255).bit_length() → 8 (binary: 11111111)
• 255 = 2^8 - 1, the maximum 8-bit unsigned value
• (256).bit_length() → 9 (binary: 100000000)
• bit_length() tells you the minimum bits needed
• 2^n - 1 always has bit_length of n

Example: (255).bit_length() → 8. Compare: (256).bit_length() → 9.`
  }),
  // 81. int.from_bytes big-endian
  (_i: number) => ({
    q: `What is int.from_bytes(b'\\x00\\x0a', 'big')?`,
    o: ["10", "2560", "0", "Error"],
    c: 0,
    e: "Big-endian: \\x00 is high byte (0), \\x0a is low byte (10). Result: 0×256 + 10 = 10.",
    de: `int.from_bytes() converts a bytes object to an integer. In big-endian ('big'), the first byte is the most significant.

Key concepts:
• b'\\x00\\x0a' in big-endian: 0×256 + 10 = 10
• 'big' means most significant byte first (network byte order)
• 'little' would reverse: 10×256 + 0 = 2560
• \\x0a is hexadecimal for 10
• This is useful for parsing binary protocols and file formats

Example: int.from_bytes(b'\\x00\\x0a', 'big') → 10. In little-endian it would be 2560.`
  }),
  // 82. to_bytes big-endian
  (_i: number) => ({
    q: `What is (10).to_bytes(2, 'big')?`,
    o: ["b'\\x00\\x0a'", "b'\\x0a\\x00'", "b'\\x0a'", "Error"],
    c: 0,
    e: "10 in 2 bytes big-endian: high byte = 0, low byte = 10 (0x0a).",
    de: `to_bytes() converts an integer to a bytes object. The first argument is the number of bytes, and the second is the byte order.

Key concepts:
• (10).to_bytes(2, 'big') → b'\\x00\\x0a'
• 10 = 0×256 + 10, so bytes are [0x00, 0x0a] in big-endian
• 'big' = most significant byte first
• 'little' would give b'\\x0a\\x00' (reversed)
• OverflowError if the number doesn't fit in the specified bytes

Example: (10).to_bytes(2, 'big') → b'\\x00\\x0a'. This is the inverse of int.from_bytes().`
  }),
  // 83. from_bytes single byte 0xff
  (_i: number) => ({
    q: `What is int.from_bytes(b'\\xff', 'big')?`,
    o: ["255", "-1", "0", "Error"],
    c: 0,
    e: "\\xff as unsigned (default) is 255. Signed interpretation would be -1.",
    de: `By default, int.from_bytes() interprets bytes as unsigned. \\xff as an unsigned 8-bit value is 255.

Key concepts:
• int.from_bytes(b'\\xff', 'big') → 255 (unsigned, default)
• \\xff = 11111111 in binary = 255 unsigned
• Default signed=False means unsigned interpretation
• With signed=True: int.from_bytes(b'\\xff', 'big', signed=True) → -1
• The same bits have different values depending on signed vs unsigned

Example: int.from_bytes(b'\\xff', 'big') → 255. The default is unsigned interpretation.`
  }),
  // 84. from_bytes signed interpretation
  (_i: number) => ({
    q: `What is int.from_bytes(b'\\xff', 'big', signed=True)?`,
    o: ["-1", "255", "0", "Error"],
    c: 0,
    e: "\\xff in signed 8-bit two's complement is -1.",
    de: `When signed=True, int.from_bytes() interprets the bytes using two's complement. \\xff (all bits set) in signed 8-bit is -1.

Key concepts:
• int.from_bytes(b'\\xff', 'big', signed=True) → -1
• Two's complement: \\xff = -1 for 8-bit signed
• \\xff unsigned = 255, signed = -1
• \\x80 signed = -128 (minimum 8-bit signed value)
• Two's complement is how computers represent negative integers

Example: int.from_bytes(b'\\xff', 'big', signed=True) → -1. This is two's complement representation.`
  }),
  // 85. to_bytes for 256
  (_i: number) => ({
    q: `What is (256).to_bytes(2, 'big')?`,
    o: ["b'\\x01\\x00'", "b'\\x00\\x01'", "b'\\x01'", "Error"],
    c: 0,
    e: "256 = 1×256 + 0, so in 2 bytes big-endian: [0x01, 0x00].",
    de: `256 in 2 bytes big-endian is b'\\x01\\x00'. The high byte is 1 and the low byte is 0, because 256 = 1×256 + 0.

Key concepts:
• (256).to_bytes(2, 'big') → b'\\x01\\x00'
• 256 = 0x0100 in hex
• Big-endian: most significant byte first → [0x01, 0x00]
• (256).to_bytes(1, 'big') → OverflowError (doesn't fit in 1 byte)
• 256 is the smallest number that needs more than 1 byte

Example: (256).to_bytes(2, 'big') → b'\\x01\\x00'. (255).to_bytes(1, 'big') → b'\\xff'.`
  }),
  // 86. format() binary without prefix
  (_i: number) => ({
    q: `What is format(42, 'b')?`,
    o: ["'101010'", "'0b101010'", "'42'", "Error"],
    c: 0,
    e: "format(n, 'b') gives binary representation WITHOUT the '0b' prefix.",
    de: `format() with 'b' format spec produces a binary string without any prefix, unlike bin() which includes '0b'.

Key concepts:
• format(42, 'b') → '101010' (no prefix)
• bin(42) → '0b101010' (with prefix)
• 42 = 32 + 8 + 2 = 101010 in binary
• format() is more flexible than bin/hex/oct
• You can add padding: format(42, '08b') → '00101010'

Example: format(42, 'b') → '101010'. Use this when you want clean binary without '0b'.`
  }),
  // 87. format() octal without prefix
  (_i: number) => ({
    q: `What is format(42, 'o')?`,
    o: ["'52'", "'0o52'", "'42'", "Error"],
    c: 0,
    e: "format(n, 'o') gives octal representation WITHOUT the '0o' prefix.",
    de: `format() with 'o' format spec produces an octal string without the '0o' prefix that oct() includes.

Key concepts:
• format(42, 'o') → '52' (no prefix)
• oct(42) → '0o52' (with prefix)
• 42 = 5×8 + 2 = 52 in octal
• format() gives clean output for embedding in strings
• oct() is mainly for debugging/display

Example: format(42, 'o') → '52'. oct(42) → '0o52'. Use format() for prefix-free output.`
  }),
  // 88. format() hex lowercase
  (_i: number) => ({
    q: `What is format(42, 'x')?`,
    o: ["'2a'", "'0x2a'", "'2A'", "Error"],
    c: 0,
    e: "format(n, 'x') gives lowercase hex WITHOUT the '0x' prefix.",
    de: `format() with 'x' produces lowercase hexadecimal without prefix. Use 'X' for uppercase.

Key concepts:
• format(42, 'x') → '2a' (lowercase, no prefix)
• format(42, 'X') → '2A' (uppercase, no prefix)
• hex(42) → '0x2a' (lowercase, with prefix)
• 42 = 2×16 + 10 = 0x2a
• 'a' = 10 in hex notation

Example: format(42, 'x') → '2a'. hex(42) → '0x2a'. format() gives cleaner output.`
  }),
  // 89. format() hex uppercase
  (_i: number) => ({
    q: `What is format(42, 'X')?`,
    o: ["'2A'", "'2a'", "'0x2A'", "Error"],
    c: 0,
    e: "format(n, 'X') gives UPPERCASE hex without prefix.",
    de: `The 'X' format specifier works like 'x' but produces uppercase hex digits. Both omit the '0x' prefix.

Key concepts:
• format(42, 'X') → '2A' (uppercase)
• format(42, 'x') → '2a' (lowercase)
• 42 = 2×16 + 10, where 10 = 'a' or 'A'
• Uppercase hex is common in color codes: format(255, '02X') → 'FF'
• Also works in f-strings: f"{42:X}" → '2A'

Example: format(42, 'X') → '2A'. Useful for hex color codes and memory addresses.`
  }),
  // 90. format() float with precision
  (_i: number) => ({
    q: `What is format(3.14, '.5f')?`,
    o: ["'3.14000'", "'3.14'", "'3.14000000'", "Error"],
    c: 0,
    e: "'.5f' means fixed-point with 5 decimal places, padding with zeros.",
    de: `The '.5f' format specifier means fixed-point notation with exactly 5 decimal places. Trailing zeros are added to reach the specified precision.

Key concepts:
• format(3.14, '.5f') → '3.14000' (5 decimal places)
• '.nf' = n decimal places in fixed-point notation
• format(3.14, '.2f') → '3.14' (2 decimal places)
• format(3.14, '.0f') → '3' (no decimal places)
• format(3.14, '.10f') → '3.1400000000' (10 decimal places)

Example: format(3.14, '.5f') → '3.14000'. The number is padded to exactly 5 decimal places.`
  }),
  // 91. format() thousands separator
  (_i: number) => ({
    q: `What is format(1234567, ',')?`,
    o: ["'1,234,567'", "'1234567'", "'1.234.567'", "Error"],
    c: 0,
    e: "The ',' format spec adds comma thousands separators.",
    de: `The ',' format specifier inserts commas as thousands separators, making large numbers easier to read.

Key concepts:
• format(1234567, ',') → '1,234,567'
• Commas are inserted every 3 digits from the right
• Works with floats too: format(1234.56, ',.2f') → '1,234.56'
• For underscores instead: format(1234567, '_') → '1_234_567'
• f-strings: f"{1234567:,}" → '1,234,567'

Example: format(1234567, ',') → '1,234,567'. Great for displaying currency or large counts.`
  }),
  // 92. format() percentage
  (_i: number) => ({
    q: `What is format(0.5, '%')?`,
    o: ["'50.000000%'", "'0.5%'", "'50%'", "Error"],
    c: 0,
    e: "The '%' format multiplies by 100 and appends '%' with 6 decimal places by default.",
    de: `The '%' format specifier multiplies the number by 100 and appends a percent sign. Default precision is 6 decimal places.

Key concepts:
• format(0.5, '%') → '50.000000%' (default 6 decimals)
• The value is multiplied by 100 automatically
• format(0.5, '.0%') → '50%' (no decimal places)
• format(0.5, '.1%') → '50.0%' (1 decimal place)
• format(0.123, '.1%') → '12.3%'

Example: format(0.5, '%') → '50.000000%'. Use '.0%' or '.1%' to control decimal places.`
  }),
  // 93. f-string binary with zero-padding
  (_i: number) => ({
    q: `What is f"{42:08b}"?`,
    o: ["'00101010'", "'101010'", "'0b101010'", "Error"],
    c: 0,
    e: "'08b' means 8-character-wide binary, zero-padded on the left.",
    de: `In f-string format specs, '08b' means: pad to 8 characters with zeros, in binary format. 42 = 101010 (6 digits), padded to 8 gives 00101010.

Key concepts:
• f"{42:08b}" → '00101010' (8-bit binary, zero-padded)
• '0' = pad with zeros, '8' = total width, 'b' = binary
• 42 in binary = 101010 (6 bits), padded to 8 = 00101010
• Useful for displaying byte values: f"{255:08b}" → '11111111'
• Without padding: f"{42:b}" → '101010'

Example: f"{42:08b}" → '00101010'. This shows all 8 bits clearly.`
  }),
  // 94. f-string hex with zero-padding
  (_i: number) => ({
    q: `What is f"{255:04x}"?`,
    o: ["'00ff'", "'ff'", "'0xff'", "Error"],
    c: 0,
    e: "'04x' means 4-character-wide lowercase hex, zero-padded.",
    de: `The format spec '04x' pads the hexadecimal output to 4 characters with leading zeros. 255 = ff in hex, padded to 4 gives 00ff.

Key concepts:
• f"{255:04x}" → '00ff' (4-digit hex, zero-padded)
• '0' = pad with zeros, '4' = width, 'x' = lowercase hex
• 255 in hex = ff (2 digits), padded to 4 = 00ff
• f"{255:04X}" → '00FF' (uppercase version)
• Common in color codes: f"{r:02x}{g:02x}{b:02x}" for RGB

Example: f"{255:04x}" → '00ff'. f"{16:04x}" → '0010'.`
  }),
  // 95. f-string with explicit sign
  (_i: number) => ({
    q: `What is f"{3.14:+.2f}"?`,
    o: ["'+3.14'", "'3.14'", "'+ 3.14'", "Error"],
    c: 0,
    e: "'+' in format spec forces showing the sign for positive numbers too.",
    de: `The '+' flag in a format specification forces the sign to be displayed for both positive and negative numbers. Normally, only negative numbers show their sign.

Key concepts:
• f"{3.14:+.2f}" → '+3.14' (explicit positive sign)
• f"{-3.14:+.2f}" → '-3.14' (negative sign always shown)
• Without '+': f"{3.14:.2f}" → '3.14' (no sign for positive)
• Use ' ' instead of '+' for a space: f"{3.14: .2f}" → ' 3.14'
• Useful for aligning columns of positive and negative numbers

Example: f"{3.14:+.2f}" → '+3.14'. f"{-3.14:+.2f}" → '-3.14'.`
  }),
  // 96. isinstance with tuple of types
  (_i: number) => ({
    q: `What is isinstance(3.14, (int, float))?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "isinstance() with a tuple checks if the object is any of those types. 3.14 is a float.",
    de: `isinstance() accepts a tuple of types as its second argument and returns True if the object is an instance of any type in the tuple.

Key concepts:
• isinstance(3.14, (int, float)) → True (3.14 is a float)
• The tuple acts as an OR: matches int OR float
• isinstance(42, (int, float)) → True (42 is an int)
• isinstance("hi", (int, float)) → False (str is neither)
• This is cleaner than: isinstance(x, int) or isinstance(x, float)

Example: isinstance(3.14, (int, float)) → True. Matches because 3.14 is a float.`
  }),
  // 97. bool is subclass of int
  (_i: number) => ({
    q: `What is isinstance(True, int)?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "bool is a subclass of int, so True is also an instance of int!",
    de: `This is one of Python's most surprising facts: bool is a subclass of int. True and False are technically integers (1 and 0), so isinstance(True, int) returns True.

Key concepts:
• isinstance(True, int) → True (bool is a subclass of int)
• issubclass(bool, int) → True
• True == 1 and False == 0
• type(True) is int → False (type() is strict, no subclass check)
• This allows: True + True → 2, False * 100 → 0

Example: isinstance(True, int) → True. This is because class bool(int) in Python's type hierarchy.`
  }),
  // 98. Boolean arithmetic: True + True
  (_i: number) => ({
    q: `What is True + True?`,
    o: ["2", "True", "Error", "1"],
    c: 0,
    e: "Since bool is a subclass of int, True = 1, so True + True = 1 + 1 = 2.",
    de: `Because bool inherits from int, boolean values can be used in arithmetic. True is 1 and False is 0, so True + True = 1 + 1 = 2.

Key concepts:
• True + True → 2 (1 + 1)
• True + False → 1 (1 + 0)
• False + False → 0 (0 + 0)
• True * 5 → 5 (1 × 5)
• The result type is int, not bool
• This is by design: bool inherits all int operations

Example: True + True → 2. type(True + True) → <class 'int'>.`
  }),
  // 99. Boolean arithmetic: False * 100
  (_i: number) => ({
    q: `What is False * 100?`,
    o: ["0", "False", "Error", "100"],
    c: 0,
    e: "False equals 0, so False * 100 = 0 × 100 = 0.",
    de: `Since False is equivalent to 0 in numeric contexts, multiplying False by any number gives 0.

Key concepts:
• False * 100 → 0 (0 × 100)
• False * anything → 0 (zero times anything is zero)
• True * 100 → 100 (1 × 100)
• The result is an int, not a bool
• False acts exactly like 0 in all arithmetic operations

Example: False * 100 → 0. False ** 0 → 1 (anything to the power of 0 is 1, even 0**0 in Python).`
  }),
  // 100. sum() with booleans
  (_i: number) => ({
    q: `What is sum([True, True, False, True])?`,
    o: ["3", "True", "Error", "2"],
    c: 0,
    e: "sum() adds the values: True=1, True=1, False=0, True=1 → 1+1+0+1 = 3.",
    de: `Since True = 1 and False = 0, sum() on a list of booleans counts the number of True values. This is a common Python idiom.

Key concepts:
• sum([True, True, False, True]) → 3 (counting Trues)
• This is equivalent to sum([1, 1, 0, 1]) → 3
• Common pattern: sum(condition(x) for x in items) counts matches
• Example: sum(x > 0 for x in [-1, 2, 3, -4]) → 2
• More readable alternative: [True, True, False, True].count(True) → 3

Example: sum([True, True, False, True]) → 3. A Pythonic way to count True values in a list.`
  }),
];
