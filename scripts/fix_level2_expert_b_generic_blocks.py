#!/usr/bin/env python3
"""Replace duplicated generic tails in level2_expert_b.ts (50). See fix_level2_expert_a for pattern."""
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
    """• Repeated float adds/subtracts accumulate binary rounding error; three 0.1 values minus 0.3 may not be exactly 0.0.
• The expression is evaluated left to right with IEEE-754 doubles.

How It Works:
• Each 0.1 is a binary float approximation; subtraction does not restore an exact decimal zero.

Step-by-Step Execution:
1. Add 0.1+0.1+0.1 in float space.
2. Subtract 0.3 (also approximate).
3. Yield a tiny residual or zero depending on rounding.

Order of Operations:
• Left-to-right + and - at same precedence.

Common Use Cases:
• Demonstrating why money should use Decimal, not float.

Edge Cases:
• Using round() or Decimal cleans the story; raw floats expose noise.

Performance Considerations:
• O(1) operations; precision is the issue, not speed.

Examples:
• repr(0.1) shows long binary expansion.

Notes:
• math.isclose is the right tool to compare floats for "near enough".""",
    """• inf minus inf is NaN in IEEE-754: indeterminate form, not zero.
• float("inf") builds positive infinity.

How It Works:
• CPython maps to libm / IEEE rules for inf and nan.

Step-by-Step Execution:
1. Two infinities of same sign in subtraction -> NaN.

Order of Operations:
• Binary - on two floats.

Common Use Cases:
• Detecting invalid limits in numerical code.

Edge Cases:
• nan participates in further ops as poison.

Performance Considerations:
• Trivial.

Examples:
• math.isnan(float("inf")-float("inf")) -> True.

Notes:
• Do not use == to test NaN; use math.isnan.""",
    """• inf times zero is NaN in IEEE rules — not zero, not inf — because the limit is indeterminate.
• Contrasts with finite * 0 -> 0.

How It Works:
• Hardware FPU or soft float follows IEEE.

Step-by-Step Execution:
1. Multiply inf by 0.0 -> NaN.

Order of Operations:
• Single *.

Common Use Cases:
• Catching undefined limit expressions translated to floats.

Edge Cases:
• nan * 0 is also nan.

Performance Considerations:
• O(1).

Examples:
• 0 * finite is 0; inf*0 is nan.

Notes:
• SymPy or fractions avoid this class of undefined float results.""",
    """• inf / inf is NaN — undefined ratio of two infinities.
• Not 1.0.

How It Works:
• IEEE specifies nan for 0/0 and inf/inf among indeterminate forms.

Step-by-Step Execution:
1. Divide two infinities -> NaN.

Order of Operations:
• Single /.

Common Use Cases:
• Teaching limits versus float evaluation.

Edge Cases:
• finite / inf -> 0.0; inf / finite -> inf.

Performance Considerations:
• O(1).

Examples:
• math.isnan(float("inf")/float("inf")).

Notes:
• Use math.copysign and checks when building plotting domains.""",
    """• inf + inf yields inf (same sign infinities add).
• Still not a finite sum.

How It Works:
• IEEE addition: magnitude overflows to inf; inf+inf stays inf.

Step-by-Step Execution:
1. Add two positive infinities -> inf.

Order of Operations:
• Binary +.

Common Use Cases:
• Sentinel values in optimization and stats.

Edge Cases:
• inf + (-inf) is nan.

Performance Considerations:
• O(1).

Examples:
• float("inf") + 1.0 is still inf.

Notes:
• Compare with math.fsum for careful accumulation of finite lists.""",
    """• (1/3)*3 in float is rarely bitwise 1.0 due to repeating thirds in binary.
• Equality with 1.0 may be False even when "almost" one.

How It Works:
• Each / and * rounds to nearest representable float.

Step-by-Step Execution:
1. 1.0/3.0 -> approximate third.
2. *3.0 -> near 1.0 with possible drift.

Order of Operations:
• Left-to-right / and *.

Common Use Cases:
• Unit tests illustrating float hazards.

Edge Cases:
• Using round(x, 15)==1.0 may pass where raw == fails.

Performance Considerations:
• O(1).

Examples:
• math.isclose(1.0/3.0*3.0, 1.0) often True.

Notes:
• For exact 1, use Fraction(1,3)*3==1.""",
    """• 0.1*3 and 0.3 are different float encodings; == can be False.
• Classic classroom example.

How It Works:
• 0.1 is not exact in base 2; tripling does not land on the same bits as 0.3's encoding.

Step-by-Step Execution:
1. Multiply 0.1*3.
2. Compare to 0.3 -> often False.

Order of Operations:
• * before ==.

Common Use Cases:
• Explaining why financial code avoids float.

Edge Cases:
• Decimal("0.1")*3 == Decimal("0.3") is True.

Performance Considerations:
• O(1).

Examples:
• round(0.1*3,1)==round(0.3,1) may be True.

Notes:
• Prefer Decimal or integers of cents.""",
    """• sys.float_info.epsilon is the difference between 1.0 and the next representable float above it (machine epsilon).
• It scales with magnitude — not an absolute tolerance for all numbers.

How It Works:
• Named tuple field exposing DBL_EPSILON-like constant in CPython.

Step-by-Step Execution:
1. Read attribute from sys.float_info.

Order of Operations:
• Attribute access only.

Common Use Cases:
• Choosing relative tolerances in numeric algorithms.

Edge Cases:
• Epsilon near zero comparisons still need care; use isclose.

Performance Considerations:
• O(1) lookup.

Examples:
• float_info also has max, min, mant_dig, etc.

Notes:
• Do not compare arbitrary floats with only epsilon without scaling.""",
    """• Positive infinities compare equal to themselves under ==.
• Two float("inf") values satisfy == though they are not "numbers" in the finite sense.

How It Works:
• IEEE totalOrder-style equality for infinities: inf == inf True.

Step-by-Step Execution:
1. Build two infs.
2. == -> True.

Order of Operations:
• == on floats.

Common Use Cases:
• Sentinel checks before math operations.

Edge Cases:
• nan == nan is False.

Performance Considerations:
• O(1).

Examples:
• math.inf == float("inf") True.

Notes:
• Use math.isfinite to exclude inf and nan together.""",
    """• -0.0 and +0.0 compare equal with ==; sign is preserved in bits but equality ignores sign for zero.
• Still, copysign distinguishes them.

How It Works:
• IEEE says +0 and -0 compare as equal numerically.

Step-by-Step Execution:
1. float("-0.0") constructs negative zero.
2. == 0.0 -> True.

Order of Operations:
• Unary - on zero literal in float parser.

Common Use Cases:
• Branching that must distinguish signed zero for plots.

Edge Cases:
• 1.0/-0.0 may yield -inf direction hints.

Performance Considerations:
• O(1).

Examples:
• math.copysign(1, -0.0) is -1.0.

Notes:
• Use math.signbit for sign of zero if needed.""",
    """• copysign(magnitude, sign_from) returns magnitude with the sign of the second argument.
• copysign(1, -0.0) is -1.0 — negative zero carries negative sign.

How It Works:
• Copies sign bit from second float to magnitude of first.

Step-by-Step Execution:
1. Take abs-like magnitude 1.0.
2. Apply sign of -0.0 -> -1.0.

Order of Operations:
• Function call math.copysign.

Common Use Cases:
• Restoring sign after abs or sqrt.

Edge Cases:
• Second arg nan may propagate sign oddly — rare.

Performance Considerations:
• O(1) libm.

Examples:
• copysign(5, -2) -> -5.0.

Notes:
• Prefer over manual sign*abs for nan safety in some cases.""",
    """• Integers have arbitrary precision in Python 3; 10**100 is computed exactly as a big int.
• No overflow exception for huge ints within memory limits.

How It Works:
• Karatsuba / FFT multiplication in CPython for large operands.

Step-by-Step Execution:
1. Exponentiation produces an int with 101 digits.

Order of Operations:
• ** on ints.

Common Use Cases:
• Cryptography, combinatorics, Project Euler style puzzles.

Edge Cases:
• MemoryError if result too large for RAM.

Performance Considerations:
• Cost grows superlinearly in bit length.

Examples:
• len(str(10**100)) == 101.

Notes:
• float(10**400) may overflow to inf — different type.""",
    """• 10**100 is int; type(...) is int — not float, not long deprecated name.
• Confirms big-int class.

How It Works:
• type() returns the class object.

Step-by-Step Execution:
1. Compute huge int (or reference in quiz).
2. type -> int.

Order of Operations:
• type() built-in.

Common Use Cases:
• Runtime type branching in polymorphic helpers.

Edge Cases:
• bool is subclass of int — isinstance nuances.

Performance Considerations:
• type lookup O(1).

Examples:
• isinstance(10**100, int) True.

Notes:
• For numpy scalars, type differs.""",
    """• float(10**308) usually succeeds: near max finite double, still representable.
• No Python exception — becomes a large finite float.

How It Works:
• Rounds big int to nearest representable double — may lose low bits.

Step-by-Step Execution:
1. Big int 10**308.
2. Convert to float — finite.

Order of Operations:
• float() call.

Common Use Cases:
• Boundary testing float range.

Edge Cases:
• Precision loss — not all int digits survive.

Performance Considerations:
• Conversion can be heavy for huge ints.

Examples:
• float(10**400) often overflows to inf.

Notes:
• sys.float_info.max shows the largest finite float.""",
    """• 10**309 exceeds finite double range; float(...) overflows to inf.
• No exception by default in IEEE mode.

How It Works:
• Rounding to double yields overflow to infinity.

Step-by-Step Execution:
1. Construct huge int.
2. float -> inf.

Order of Operations:
• float() conversion.

Common Use Cases:
• Demonstrating overflow to inf.

Edge Cases:
• inf further ops follow IEEE rules.

Performance Considerations:
• Big int to float overflow path still bounded work.

Examples:
• math.isinf(float(10**400)) likely True.

Notes:
• mpmath or Decimal for truly large magnitudes.""",
    """• -(-2147483648) negates the minimum 32-bit signed int boundary value in Python int (unbounded).
• Result is 2147483648 — fits in Python int, not necessarily in C int32.

How It Works:
• Unary - on arbitrary precision int.

Step-by-Step Execution:
1. Literal -2147483648 (or computed).
2. Negate -> positive 2147483648.

Order of Operations:
• Unary - twice conceptually if written --.

Common Use Cases:
• C interop thinking vs Python unbounded ints.

Edge Cases:
• In numpy int32, overflow rules differ — not in core Python int.

Performance Considerations:
• O(1) for moderate size.

Examples:
• Python int has no 32-bit wrap.

Notes:
• ctypes still uses fixed widths when requested.""",
    """• Python int exponentiation does not overflow like fixed-width C integers; 2**1000 is exact big int.
• No exception: result grows.

How It Works:
• exponentiation by squaring in CPython big integers.

Step-by-Step Execution:
1. Compute 2**1000 exactly.

Order of Operations:
• ** on ints.

Common Use Cases:
• Cryptographic sizes and combinatorial counts.

Edge Cases:
• MemoryError if astronomically huge.

Performance Considerations:
• O(log exponent) multiplications of growing size.

Examples:
• bit_length of 2**1000 is 1001.

Notes:
• float(2**1024) may be inf while int stays exact.""",
    """• str(2**1000) has len equal to number of decimal digits of that power — about 302 digits for 2**1000.
• len counts characters in the decimal string.

How It Works:
• Big int __str__ does decimal conversion.

Step-by-Step Execution:
1. Compute 2**1000.
2. Decimal string.
3. len(...) counts digits.

Order of Operations:
• str then len.

Common Use Cases:
• Estimating output size for logging huge numbers.

Edge Cases:
• Leading minus only for negative ints.

Performance Considerations:
• Conversion cost proportional to output length.

Examples:
• len(str(10**100)) == 101.

Notes:
• Use bit_length for binary size without decimal conversion.""",
    """• int("ff", 16) parses base-16 text without 0x prefix when radix given.
• ff -> 255.

How It Works:
• Per-digit value accumulation with base 16.

Step-by-Step Execution:
1. Scan "ff".
2. 15*16+15 -> 255.

Order of Operations:
• int(text, base) call.

Common Use Cases:
• Parsing hex color bytes and memory dumps.

Edge Cases:
• int("0xff", 0) auto-detects base from prefix.

Performance Considerations:
• O(len) digits.

Examples:
• int("FF",16) case-insensitive.

Notes:
• For user input validate charset first.""",
    """• int("1010", 2) parses binary string to decimal 10.
• Digits must be 0-1 only for base 2.

How It Works:
• Horner method / accumulation in base 2.

Step-by-Step Execution:
1. Parse bits left to right.

Order of Operations:
• int with two arguments.

Common Use Cases:
• Bitstring to integer for protocols.

Edge Cases:
• Underscores allowed in numeric literals in code; int() may accept in recent Python for strings — check version.

Performance Considerations:
• Linear in string length.

Examples:
• int("0b1010",0) uses prefix rules with base 0.

Notes:
• bin() is the inverse for positive ints.""",
    """• int("777", 8) parses octal — digits 0-7 only; 777_8 = 511 decimal.
• Verify: 7*64+7*8+7.

How It Works:
• Base-8 positional notation.

Step-by-Step Execution:
1. Parse three sevens in octal.

Order of Operations:
• int(s, 8).

Common Use Cases:
• Unix chmod triples.

Edge Cases:
• Invalid digit 8 in base 8 raises ValueError.

Performance Considerations:
• O(len).

Examples:
• oct(511) -> '0o777'.

Notes:
• Literal 0o777 in source is same value.""",
    """• Base 36 uses 0-9 and a-z; int("0", 36) is 0.
• Single character "0" maps to digit 0.

How It Works:
• Radix-36 alphabet mapping per Python rules.

Step-by-Step Execution:
1. Parse "0" in base 36 -> 0.

Order of Operations:
• int(text, 36).

Common Use Cases:
• Compact alphanumeric encodings (URL shorteners).

Edge Cases:
• Case insensitivity for letters.

Performance Considerations:
• Small parse.

Examples:
• int("10",36) is 36 in decimal.

Notes:
• int("z",36) is 35; int("10",36) is 36.""",
    """• "z" is letter 35 in base-36 digit set; int("z",36) == 35.
• Single-letter parse.

How It Works:
• Map 'z' to 35.

Step-by-Step Execution:
1. Single digit in base 36.

Order of Operations:
• int with base 36.

Common Use Cases:
• Parsing base-36 tokens.

Edge Cases:
• "Z" also 35.

Performance Considerations:
• O(1).

Examples:
• int("zz",36) is 35*36+35.

Notes:
• Maximum digit in base b is b-1 symbolically.""",
    """• bin(255) returns '0b11111111' — eight ones for 255.
• Prefix 0b mandatory in bin() output.

How It Works:
• Format integer as binary text.

Step-by-Step Execution:
1. Convert 255 to bit string with prefix.

Order of Operations:
• bin() call.

Common Use Cases:
• Debugging masks.

Edge Cases:
• Negative ints use -0b... signed representation style in Python.

Performance Considerations:
• O(bits).

Examples:
• bin(0) is '0b0'.

Notes:
• format(n,'#b') similar alternate form.""",
    """• hex(255) -> '0xff' lowercase hex with 0x prefix.
• 255 is 15*16+15.

How It Works:
• Format as base-16 with prefix.

Step-by-Step Execution:
1. hex(255).

Order of Operations:
• Built-in hex.

Common Use Cases:
• Color #RRGGBB components.

Edge Cases:
• hex(-1) shows negative two's complement long string in Python 3.

Performance Considerations:
• O(hex digits).

Examples:
• format(255,'#X') uppercase hex optional.

Notes:
• int(hex(x),16) round trip for positive ints.""",
    """• oct(255) -> '0o377' in Python 3 with 0o prefix.
• 255 decimal is three octal digits.

How It Works:
• Base-8 formatting with modern 0o prefix.

Step-by-Step Execution:
1. Convert 255 to octal literal string.

Order of Operations:
• oct() builtin.

Common Use Cases:
• Unix permission triples.

Edge Cases:
• Negative ints get signed oct string.

Performance Considerations:
• O(digits).

Examples:
• 0o377 == 255.

Notes:
• Do not confuse with str of int.""",
    """• bit_length() returns bits needed to represent positive int in binary excluding sign and redundant zeros.
• 100 decimal needs 7 bits (64..127 range).

How It Works:
• floor(log2(n))+1 for n>0.

Step-by-Step Execution:
1. (100).bit_length() -> 7.

Order of Operations:
• Method on int.

Common Use Cases:
• Allocating bit vectors.

Edge Cases:
• 0.bit_length() is 0.

Performance Considerations:
• O(1) for word-sized ints.

Examples:
• (255).bit_length() is 8.

Notes:
• (n-1).bit_length() sometimes used for highest set bit index.""",
    """• Zero needs zero bits to represent as nonnegative magnitude; bit_length is 0.
• Distinct from math.ceil(log2(0)) undefined.

How It Works:
• Special case in CPython implementation.

Step-by-Step Execution:
1. 0.bit_length() -> 0.

Order of Operations:
• Method on literal 0.

Common Use Cases:
• Edge cases in competitive programming.

Edge Cases:
• Only zero has length 0.

Performance Considerations:
• O(1).

Examples:
• bool(0.bit_length()) is False.

Notes:
• Use n>0 guard before log2 style reasoning.""",
    """• 1 in binary is a single 1 bit; bit_length is 1.
• Smallest positive int.

How It Works:
• Single bit at position 0.

Step-by-Step Execution:
1. (1).bit_length() -> 1.

Order of Operations:
• Attribute on int.

Common Use Cases:
• Base cases in bit DP.

Edge Cases:
• (-1).bit_length() in Python — defined for absolute value? Actually bit_length for negative returns same as abs in Python 3.

Performance Considerations:
• O(1).

Examples:
• (2).bit_length() is 2.

Notes:
• Read docs for negative int behavior — uses absolute value.""",
    """• 255 is 8-bit all ones; bit_length 8.
• Matches unsigned byte range.

How It Works:
• Highest bit at position 7 (0-indexed).

Step-by-Step Execution:
1. (255).bit_length() -> 8.

Order of Operations:
• Method call.

Common Use Cases:
• Byte width checks.

Edge Cases:
• 256 needs 9 bits.

Performance Considerations:
• O(1).

Examples:
• Align to byte boundaries with (n+7)//8.

Notes:
• Combine with to_bytes for packing.""",
    """• from_bytes interprets byte string as big-endian integer: high byte first.
• b'\\x00\\x0a' -> 0*256+10 = 10 (bytes shown escaped in quiz text).

How It Works:
• Horner accumulation over bytes with shift 8.

Step-by-Step Execution:
1. First byte 0.
2. Second byte 10 -> total 10.

Order of Operations:
• int.from_bytes static method.

Common Use Cases:
• Parsing network uint16 big-endian.

Edge Cases:
• signed=True uses two's complement interpretation.

Performance Considerations:
• O(len(bytes)).

Examples:
• 'little' endian swaps weighting.

Notes:
• PEP 456 style — know your wire format.""",
    """• to_bytes(2,'big') packs small int into 2 bytes big-endian.
• 10 -> 0x00 0x0a.

How It Works:
• Ensures value fits in length*8 bits; raises OverflowError if not.

Step-by-Step Execution:
1. Check range for 2 bytes.
2. Emit high then low byte.

Order of Operations:
• Method on int.

Common Use Cases:
• Binary protocols and struct-like packing without struct module.

Edge Cases:
• signed encodings extend sign bit.

Performance Considerations:
• O(length).

Examples:
• (256).to_bytes(2,'big') -> b'\\x01\\x00'.

Notes:
• Prefer struct.pack for multiple fields together.""",
    """• Single byte 0xff is 255 unsigned.
• from_bytes one byte -> 255.

How It Works:
• One byte magnitude 255.

Step-by-Step Execution:
1. Parse 0xff as 255.

Order of Operations:
• from_bytes length 1.

Common Use Cases:
• Reading raw bytes from files.

Edge Cases:
• signed=True makes 0xff mean -1 in two's complement for one byte.

Performance Considerations:
• O(1).

Examples:
• Compare signed interpretation next.

Notes:
• Always specify endianness explicitly in APIs.""",
    """• signed=True interprets bytes as two's complement; 0xff as one byte is -1.
• High bit set means negative.

How It Works:
• Sign extend from bit width of given length.

Step-by-Step Execution:
1. Read one signed byte -1.

Order of Operations:
• from_bytes with signed flag.

Common Use Cases:
• Parsing signed 8-bit samples.

Edge Cases:
• Length must match bit width intended.

Performance Considerations:
• O(len).

Examples:
• -128 as single signed byte 0x80.

Notes:
• Match width to your protocol spec.""",
    """• 256 needs two bytes unsigned big-endian: 0x01 0x00.
• to_bytes verifies fit.

How It Works:
• 256 == 2**8 fits in 16 bits.

Step-by-Step Execution:
1. Emit 1 then 0.

Order of Operations:
• to_bytes(2,'big').

Common Use Cases:
• Emitting 16-bit big-endian fields.

Edge Cases:
• Overflow if value too large for length.

Performance Considerations:
• O(length).

Examples:
• (255).to_bytes(2,'big') -> b'\\x00\\xff'.

Notes:
• Combine with int.from_bytes for round trip tests.""",
    """• format(42,'b') gives binary text without 0b prefix (unlike bin()).
• '101010' for 42.

How It Works:
• Calls int.__format__ with type b.

Step-by-Step Execution:
1. Format 42 in base 2 min width default.

Order of Operations:
• format(value, spec).

Common Use Cases:
• Padding with format spec widths.

Edge Cases:
• Use '#b' alternate for 0b prefix in format mini-language.

Performance Considerations:
• O(bits).

Examples:
• format(42,'08b') zero-pads width 8.

Notes:
• f-strings share mini-language.""",
    """• format(42,'o') octal digits without 0o prefix by default.
• 52 is octal for 42 decimal? Wait 42 decimal is 52 octal — verify: 5*8+2=42.

How It Works:
• Base-8 conversion string.

Step-by-Step Execution:
1. Render 42 in octal digits.

Order of Operations:
• format two-arg.

Common Use Cases:
• Custom numeric displays.

Edge Cases:
• '#o' adds 0o prefix.

Performance Considerations:
• O(octal digits).

Examples:
• format(8,'o') -> '10'.

Notes:
• Confusing with decimal str — label outputs.""",
    """• format(42,'x') lowercase hex without 0x unless alternate.
• '2a' for 42.

How It Works:
• Hexadecimal digits a-f lower case.

Step-by-Step Execution:
1. Convert to hex string.

Order of Operations:
• format.

Common Use Cases:
• Compact hex in logs.

Edge Cases:
• 'X' uses uppercase hex digits.

Performance Considerations:
• O(hex digits).

Examples:
• format(255,'x') -> 'ff'.

Notes:
• Prefix with '#x' when you need 0x.""",
    """• 'X' type uses uppercase A-F for hex digits.
• Same value as 'x', different letter case.

How It Works:
• Uppercase formatting flag in mini-language.

Step-by-Step Execution:
1. format(42,'X') -> '2A'.

Order of Operations:
• format.

Common Use Cases:
• Display conventions (MAC addresses often uppercase).

Edge Cases:
• Mixing with width fills.

Performance Considerations:
• Same as lowercase path.

Examples:
• format(254,'X') -> 'FE'.

Notes:
• Match style guides of your output format.""",
    """• '.5f' formats float fixed 5 digits after decimal.
• Rounds for display; underlying float may still be inexact.

How It Works:
• Dragon4 style formatting to decimal with precision.

Step-by-Step Execution:
1. Take float 3.14.
2. Format with 5 fractional digits.

Order of Operations:
• format(float, str spec).

Common Use Cases:
• CSV export with fixed decimals.

Edge Cases:
• Very large or tiny floats switch to scientific per rules.

Performance Considerations:
• Formatting cost modest.

Examples:
• format(pi,'.2f') common pattern.

Notes:
• Decimal quantize for money — not format float.""",
    """• Comma option groups thousands with ASCII comma in format mini-language.
• Readable large integers in en_US style.

How It Works:
• Inserts commas every three digits from right for ints.

Step-by-Step Execution:
1. format(1234567 with comma grouping.

Order of Operations:
• format call.

Common Use Cases:
• Dashboard counters.

Edge Cases:
• Locale module needed for other separators.

Performance Considerations:
• O(digits).

Examples:
• f"{1234567:,}" in f-string.

Notes:
• For floats, comma groups integer part.""",
    """• '%' type multiplies float by 100 and adds percent sign for display.
• format(0.5,'%') -> '50.000000%' default precision.

How It Works:
• Percent conversion in format mini-language.

Step-by-Step Execution:
1. Take 0.5.
2. Display as percent string.

Order of Operations:
• format.

Common Use Cases:
• Progress percentages in UI.

Edge Cases:
• Precision field controls decimals.

Performance Considerations:
• O(1).

Examples:
• format(0.5,'.0%') -> '50%'.

Notes:
• Value is fractional; 1.0 is 100%.""",
    """• f-string 08b: zero-fill width 8 binary for 42.
• Includes only bits; no 0b unless alternate in spec.

How It Works:
• Format mini-language inside f-string brace.

Step-by-Step Execution:
1. Format 42 with 0 pad width 8 base 2.

Order of Operations:
• Expression evaluated then formatted.

Common Use Cases:
• Bit pattern tables in teaching output.

Edge Cases:
• Value wider than width: min width can expand.

Performance Considerations:
• Small.

Examples:
• f"{3:04b}" padded binary.

Notes:
• Use #08b if you need 0b prefix with padding.""",
    """• :04x zero-pads hex lowercase to width 4.
• 255 -> '00ff' style.

How It Works:
• int format with x type and width.

Step-by-Step Execution:
1. Format 255 hex width 4.

Order of Operations:
• f-string.

Common Use Cases:
• Fixed-width hex color components.

Edge Cases:
• Use X for uppercase.

Performance Considerations:
• O(width).

Examples:
• CSS #rrggbb from ints.

Notes:
• Slice or concatenate with '#' for HTML colors.""",
    """• + in format shows explicit sign for positive numbers; .2f two decimals.
• Helps aligned columns of signed values.

How It Works:
• Sign option in format spec for floats.

Step-by-Step Execution:
1. Format 3.14 with plus and two fraction digits.

Order of Operations:
• f-string.

Common Use Cases:
• Tables showing + and - explicitly.

Edge Cases:
• NaN and inf have string forms with signs handled differently.

Performance Considerations:
• Float format cost.

Examples:
• f"{-3.14:+.2f}".

Notes:
• Align with >10 for field width.""",
    """• isinstance(3.14, (int,float)) checks membership in the tuple of classes — True if type matches any.
• float instance matches second class.

How It Works:
• isinstance supports tuple of types as second argument.

Step-by-Step Execution:
1. Get type of 3.14.
2. Test against int or float -> True on float.

Order of Operations:
• isinstance call.

Common Use Cases:
• Duck-typing guards accepting multiple numeric types.

Edge Cases:
• Subclasses count — bool is int subclass.

Performance Considerations:
• O(number of types) in tuple.

Examples:
• isinstance(3, (str,int)) False.

Notes:
• collections.abc.Number for abstract numeric if appropriate.""",
    """• bool subclasses int; isinstance(True, int) is True.
• type(True) is bool, but bool is subclass of int.

How It Works:
• MRO check in isinstance walks bases.

Step-by-Step Execution:
1. True is bool instance.
2. isinstance against int -> True.

Order of Operations:
• isinstance.

Common Use Cases:
• Accepting bool in numeric APIs that allow 0/1.

Edge Cases:
• Prefer explicit bool checks when semantics matter.

Performance Considerations:
• Cheap.

Examples:
• True+1 == 2.

Notes:
• PEP 285 rationale for bool subclassing int.""",
    """• True+True coerces bool to int 1+1=2 in arithmetic context.
• + on bools uses int subclass behavior.

How It Works:
• bool.__add__ not special — falls back to int addition.

Step-by-Step Execution:
1. True -> 1.
2. Add -> 2.

Order of Operations:
• Binary +.

Common Use Cases:
• Counting True values in tiny snippets — prefer sum(bool_list) intentionally.

Edge Cases:
• True+False -> 1.

Performance Considerations:
• O(1).

Examples:
• sum([True,False]) counts True as 1.

Notes:
• For clarity use int(x) or sum with start=0 explicitly.""",
    """• False*100 promotes False to 0 int; product 0.
• Any zero multiplier zeros the result.

How It Works:
• Multiplication with int subclass bool.

Step-by-Step Execution:
1. False -> 0.
2. *100 -> 0.

Order of Operations:
• Binary *.

Common Use Cases:
• Obfuscated zero — not idiomatic.

Edge Cases:
• True*10 -> 10.

Performance Considerations:
• O(1).

Examples:
• Use if else for readability.

Notes:
• Prefer 0 directly for zero.""",
    """• sum on bools coerces True to 1 and False to 0; sum([T,T,F,T]) -> 3.
• Counts True values.

How It Works:
• sum starts 0 and adds int(bool) values.

Step-by-Step Execution:
1. Iterate list summing 1+1+0+1.

Order of Operations:
• sum builtin.

Common Use Cases:
• Counting conditions without explicit loop.

Edge Cases:
• start argument changes baseline.

Performance Considerations:
• O(n).

Examples:
• len([x for x in flags if x]) alternative.

Notes:
• For large iterables generator expressions save memory.""",
]


def main() -> None:
    path = Path(__file__).resolve().parents[1] / "src/data/questions/level2_expert_b.ts"
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
