#!/usr/bin/env python3
"""
Replace duplicated generic 10-section tails in level1_intermediate_b.ts (50 occurrences).

Order matches duplicate markers top-to-bottom. replacement = "Key Distinctions:\\n" + tail.
No backticks inside strings (TS template literal safety).
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
    "• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; "
    "refer to the official docs for full details."
)

TAILS: list[str] = [
    # 1 += str
    """• += on str rebinds the name to a new str object; concatenation never mutates the original str.
• s = "a"; s += "b" yields "ab" because str is immutable but the variable may point to a new object.

How It Works:
• INPLACE_ADD falls back to __iadd__ then __add__ for str; result is assigned back to s.

Step-by-Step Execution:
1. Load s as "a".
2. Compute "a" + "b" -> "ab".
3. Bind s to "ab".

Order of Operations:
• Augmented assignment after evaluating right-hand side.

Common Use Cases:
• Building small strings in loops (prefer join for many pieces).

Edge Cases:
• If s referenced elsewhere, other names still see old str objects.

Performance Considerations:
• Repeated += in tight loops allocates many temporaries.

Examples:
• s += "" leaves a copy semantics similar but still new object in CPython sometimes.

Notes:
• For large buffers use list.append and join, or io.StringIO.""",
    # 2 *= int
    """• str __imul__ with int repeats the sequence; s *= 3 triplicates the current str value.
• "ab" * 3 is "ababab"; *= updates the name to that new str.

How It Works:
• s *= n computes s * n with str repetition rules; negative n yields "" and a warning in some contexts.

Step-by-Step Execution:
1. s is "ab".
2. "ab" * 3 evaluated.
3. s bound to "ababab".

Order of Operations:
• Integer on right must be int; str * int defined, int * str also works as alternate order.

Common Use Cases:
• ASCII art borders and separator lines.

Edge Cases:
• n == 0 gives ""; very large n can MemoryError.

Performance Considerations:
• Large repeats allocate proportional memory.

Examples:
• s *= 1 is a no-op value-wise but may still create a new object.

Notes:
• *= repeats the whole string, not per-character expansion.""",
    # 3 __contains__
    """• __contains__ implements the "in" operator; for str, substring test is used.
• "hello".__contains__("ell") mirrors "ell" in "hello" -> True.

How It Works:
• CPython uses efficient substring search (Boyer-Moore/Horspool style for large haystacks).

Step-by-Step Execution:
1. Coerce argument to str if needed.
2. Scan for substring "ell" in "hello".

Order of Operations:
• Method call with explicit dunder name — rare in user code; prefer "in".

Common Use Cases:
• Teaching that dunder methods back operators.

Edge Cases:
• Empty substring has special-case rules in Python versions; know your version.

Performance Considerations:
• Substring search average case sublinear for some algorithms.

Examples:
• "hello".__contains__("z") -> False.

Notes:
• Prefer "ell" in "hello" for readability.""",
    # 4 str ==
    """• str __eq__ compares lexicographically by code point sequence; same length and chars -> True.
• "hello" == "hello" is value equality, not identity.

How It Works:
• Character-by-character compare until difference or exhaustion.

Step-by-Step Execution:
1. Compare lengths; if equal compare each pair.

Order of Operations:
• == between two str literals; no short-circuit across unrelated objects.

Common Use Cases:
• Password or token comparison — use secrets.compare_digest for secrets, not plain ==.

Edge Cases:
• Unicode normalization: visually identical glyphs may differ as code points.

Performance Considerations:
• O(min(len(a),len(b))) in the unequal case.

Examples:
• "hello" == "Hello" -> False.

Notes:
• Use casefold() or lower() for case-insensitive checks when appropriate.""",
    # 5 a is b interning
    """• "is" tests object identity (same id), not string value equality.
• Small identical str literals may be interned, so a is b can be True for "hi" in some runs.

How It Works:
• Compares pointer/id() equality.

Step-by-Step Execution:
1. Evaluate a and b to objects.
2. Compare their ids.

Order of Operations:
• "is" before == in typical style guides for None checks; here compares two names.

Common Use Cases:
• Detecting aliasing; sentinel is None checks.

Edge Cases:
• Never rely on interning for program logic except documented cases like small ints.

Performance Considerations:
• Identity check is O(1).

Examples:
• a = "hi"; b = "hi"; a is b may be True in CPython — still use == for text.

Notes:
• Constructed strings (concat at runtime) may not share identity.""",
    # 6 len("")
    """• len on str returns number of Unicode code points in CPython 3 (BMP simple cases).
• Empty string has length 0.

How It Works:
• Reads cached ob_size for str in CPython.

Step-by-Step Execution:
1. Call len with "".
2. Return 0.

Order of Operations:
• Built-in len dispatches to object.__len__.

Common Use Cases:
• Guard clauses if not s:.

Edge Cases:
• Surrogate pairs: still one len unit per code point in str.

Performance Considerations:
• O(1) for str in CPython.

Examples:
• len("") == 0.

Notes:
• For bytes len is number of bytes; do not mix types.""",
    # 7 len spaces
    """• Two space characters are two code points; len("  ") is 2, not 0.
• strip() would remove them; len does not.

How It Works:
• Counts raw code points in the str object.

Step-by-Step Execution:
1. Build string with two spaces.
2. len returns 2.

Order of Operations:
• Literal then len call.

Common Use Cases:
• Measuring padding width.

Edge Cases:
• Other whitespace (tab) each counts as one.

Performance Considerations:
• O(1) time in CPython for length read.

Examples:
• len("\\t\\t") == 2.

Notes:
• bool("  ") is True — non-empty whitespace is truthy.""",
    # 8 negative slice -3:
    """• s[-3:] takes last three code points; "python" -> "hon".
• Negative indices count from the end -1.

How It Works:
• Slice object with start = len-3 implicit, stop = end, step 1.

Step-by-Step Execution:
1. Resolve -3 to positive index len-3.
2. Copy substring to end.

Order of Operations:
• Slice binding tighter than function calls; s[-3:] is one slice expression.

Common Use Cases:
• File extensions and suffix checks when simple.

Edge Cases:
• If len < 3, slice still returns max available characters.

Performance Considerations:
• O(k) copy for k output length.

Examples:
• "ab"[-3:] == "ab".

Notes:
• Prefer endswith for suffix tests in robust code.""",
    # 9 slice step -1
    """• [start:stop:step] with negative step walks backward; empty range yields "".
• "abcde"[4:1:-1] from index 4 down toward 2 step -1 gives "ed".

How It Works:
• Slice adjusts start/stop for negative step rules (exclusive stop on the left side).

Step-by-Step Execution:
1. i=4 -> 'e', i=3 -> 'd', stop before index 1 exclusive -> ends at index 2 char 'd'.

Order of Operations:
• Slice evaluated as single operation.

Common Use Cases:
• Reversing substrings without full [::-1].

Edge Cases:
• Start/stop out of bounds clamp; confusing — verify on interpreter.

Performance Considerations:
• O(length of slice).

Examples:
• Trace indices on paper for negative-step slices.

Notes:
• For full reversal use s[::-1].""",
    # 10 bool empty vs space
    """• bool(s) is False only for empty str; any non-empty str including " " is True.
• Falsy str is exactly ""; whitespace-only strings are truthy.

How It Works:
• __bool__ on str returns False iff len == 0.

Step-by-Step Execution:
1. len("") -> 0 -> False.
2. len(" ") -> 1 -> True.

Order of Operations:
• bool() calls dunder on the object.

Common Use Cases:
• Validating stripped user input: check stripped string, not raw.

Edge Cases:
• Other invisible chars still non-empty.

Performance Considerations:
• len check is O(1) in CPython for str.

Examples:
• if s: after strip() is the usual pattern.

Notes:
• None is falsy; do not confuse with "None" str.""",
    # 11 concat str()
    """• str(25) -> "25"; concatenation builds a new str "age: 25" style message.
• + requires both sides str — str( ) converts int safely.

How It Works:
• str.__add__ allocates new buffer copying both operands.

Step-by-Step Execution:
1. str(25) produces decimal text.
2. "age: " + that text.

Order of Operations:
• str() before +.

Common Use Cases:
• Quick debug prints; prefer f-strings for clarity.

Edge Cases:
• Very large ints stringify to many digits.

Performance Considerations:
• Two allocations typical.

Examples:
• "x" + str([]) -> "x[]".

Notes:
• For i18n avoid hard-coded English labels inline.""",
    # 12 str + int TypeError
    """• str + int has no __add__ overload; Python raises TypeError before implicit coercion.
• Must use str(n) or f-string.

How It Works:
• str.__add__ rejects non-str right operand.

Step-by-Step Execution:
1. Attempt "age: " + 25.
2. TypeError raised.

Order of Operations:
• + tries str path; fails.

Common Use Cases:
• Teaching why dynamic typing still needs explicit conversion for concatenation.

Edge Cases:
• bytes + str also errors in Python 3.

Performance Considerations:
• Error path only.

Examples:
• Use f"age: {25}" instead.

Notes:
• Unlike some languages, + does not auto-convert numbers to str.""",
    # 13 str * negative
    """• Sequence repetition with negative multiplier yields empty sequence for str in Python 3.
• "hi" * -1 -> "".

How It Works:
• str.__mul__ defines n < 0 as empty result (documented behavior).

Step-by-Step Execution:
1. Evaluate "hi" * -1.
2. Return "".

Order of Operations:
• Multiplication before assignment if in statement.

Common Use Cases:
• Rare; sometimes used to clear conceptual duplicates.

Edge Cases:
• *0 also ""; very large positive n can MemoryError.

Performance Considerations:
• Negative fast path returns shared empty str possibly.

Examples:
• [1]*-1 == [] similarly for list.

Notes:
• Do not use negative repeat for logic — prefer explicit if.""",
    # 14 len a\\nb
    """• Ordinary literal "a\\nb" has three chars: a, newline, b — len 3.
• Escape sequences are interpreted in non-raw strings.

How It Works:
• Lexer builds str from escapes; len counts code points.

Step-by-Step Execution:
1. Parse \\n to newline.
2. len -> 3.

Order of Operations:
• len wraps the literal.

Common Use Cases:
• Measuring lines in embedded test strings.

Edge Cases:
• Windows "\\r\\n" is two chars in a Python literal written as "\\r\\n".

Performance Considerations:
• O(1) len.

Examples:
• len("a\\nb")==3.

Notes:
• Raw r"a\\nb" differs — backslashes stay.""",
    # 15 split on tab
    """• split with "\\t" splits on tab character; single tab between gives two tokens.
• "a\\tb".split("\\t") -> ["a","b"].

How It Works:
• Scans for separator substring; default split is different (whitespace runs).

Step-by-Step Execution:
1. Find tab positions.
2. Build list of slices.

Order of Operations:
• Method on str; argument is separator str.

Common Use Cases:
• TSV files.

Edge Cases:
• Consecutive separators yield empty strings in list.

Performance Considerations:
• O(n) scan.

Examples:
• Compare with .split() no args for different rules.

Notes:
• For CSV use csv module, not manual split on comma only.""",
    # 16 chr(65)
    """• chr maps Unicode code point int to one-character str; 65 is 'A'.
• Inverse of ord for BMP characters.

How It Works:
• Validates range 0..0x10FFFF; builds length-1 str.

Step-by-Step Execution:
1. Pass 65 to chr.
2. Return "A".

Order of Operations:
• Built-in call.

Common Use Cases:
• Generating ASCII columns and simple ciphers.

Edge Cases:
• Values outside range raise ValueError.

Performance Considerations:
• O(1) small int.

Examples:
• chr(48) -> "0".

Notes:
• Use chr/ord for code points, not UTF-8 bytes directly.""",
    # 17 chr(ord+1)
    """• ord("a") is 97; +1 -> 98; chr(98) is 'b'.
• Chains ord and chr for neighbor letters.

How It Works:
• ord returns int; arithmetic; chr maps back.

Step-by-Step Execution:
1. ord('a') -> 97.
2. Add 1 -> 98.
3. chr -> 'b'.

Order of Operations:
• Inner calls first.

Common Use Cases:
• Caesar shifts on lowercase only with bounds checks.

Edge Cases:
• chr(ord('z')+1) is '{' — not a letter.

Performance Considerations:
• Tiny cost.

Examples:
• Wrap modulo 26 for ring cipher.

Notes:
• For real text use Unicode categories, not manual +1 only.""",
    # 18 min(str)
    """• min on str iterates characters; lexicographically smallest code point wins.
• min("hello") -> 'e' (not 'h').

How It Works:
• min uses total ordering of single-char strings.

Step-by-Step Execution:
1. Compare 'h','e','l','l','o'.
2. Smallest is 'e'.

Order of Operations:
• min single iterable.

Common Use Cases:
• Puzzles; rarely production for text.

Edge Cases:
• Empty str raises ValueError for min.

Performance Considerations:
• O(n) scan.

Examples:
• min("cba") -> 'a'.

Notes:
• For human sorting use locale or sorted key=casefold.""",
    # 19 sorted(str)
    """• sorted(iterable) returns list of items; for str, items are one-char strings sorted by code point.
• sorted("python") letters ordered, duplicates preserved by count.

How It Works:
• Timsort on list of chars.

Step-by-Step Execution:
1. Expand str to list of chars.
2. Sort.

Order of Operations:
• sorted built-in call.

Common Use Cases:
• Anagram checks via sorted tuples.

Edge Cases:
• sorted returns list, not str.

Performance Considerations:
• O(n log n).

Examples:
• ''.join(sorted(s)) to reassemble.

Notes:
• Compare sorted(s) == sorted(t) for anagram equality.""",
    # 20 join sorted
    """• sorted("python") list joined with "" separator concatenates sorted letters into one str.
• Result is the letters of "python" in ascending code point order.

How It Works:
• join requires str iterable of str; sorted gives list of 1-char strs.

Step-by-Step Execution:
1. sorted -> list.
2. "".join merges.

Order of Operations:
• Inner sorted then join.

Common Use Cases:
• Signature of anagram normalized form.

Edge Cases:
• Empty input sorted -> [] -> join -> "".

Performance Considerations:
• One allocation for final str in CPython join.

Examples:
• Anagram key pattern.

Notes:
• For Unicode normalization sort may not match human collation.""",
    # 21 list(str)
    """• list("abc") -> ['a','b','c'] — str is iterable of 1-char strings.
• Useful for mutating characters via list then join back.

How It Works:
• Iteration yields substrings length 1 in Python 3.

Step-by-Step Execution:
1. Iterate str.
2. Build list.

Order of Operations:
• list constructor consumes iterable.

Common Use Cases:
• inplace char edits rare; prefer list(data) for clarity.

Edge Cases:
• Surrogate pairs may appear as separate items in narrow builds — usually one str char.

Performance Considerations:
• O(n) memory and time.

Examples:
• list("") -> [].

Notes:
• bytearray exists for mutable bytes-like editing.""",
    # 22 repeat and concat
    """• "abc" * 2 -> "abcabc"; then + "d" -> "abcabcd".
• * binds before + for same precedence left-associative — verify: multiplication then addition.

How It Works:
• str __mul__ then __add__.

Step-by-Step Execution:
1. "abc"*2 evaluated.
2. Concat "d".

Order of Operations:
• * higher precedence than +.

Common Use Cases:
• Building test strings.

Edge Cases:
• Empty pieces behave as identity for + and *.

Performance Considerations:
• Intermediate str allocated.

Examples:
• Parenthesize to clarify intent.

Notes:
• Use join for many fragments.""",
    # 23 prefix compare
    """• "abc" < "abcd" uses lexicographic compare; shorter is smaller if it is a prefix.
• True because shared prefix and second string longer.

How It Works:
• At index 3 first has no char; second has 'd' — exhausted shorter is smaller.

Step-by-Step Execution:
1. Compare a==a, b==b, c==c.
2. End of first before second -> first smaller.

Order of Operations:
• Single < op.

Common Use Cases:
• Sorting filenames and version strings (careful with numeric parts).

Edge Cases:
• Different Unicode normalizations may change order.

Performance Considerations:
• O(min(len)).

Examples:
• "ab" < "abc" True.

Notes:
• Use packaging.version for semver, not raw str compare.""",
    # 24 strip spaces
    """• strip() with default removes all leading/trailing whitespace; all-space string becomes "".
• "   ".strip() -> "".

How It Works:
• Bidirectional trim of Unicode whitespace set.

Step-by-Step Execution:
1. Scan left until non-space.
2. Scan right.
3. Slice.

Order of Operations:
• Method on literal.

Common Use Cases:
• Blank-line detection after strip.

Edge Cases:
• Non-breaking space may or may not strip depending on version and definition.

Performance Considerations:
• O(k) trimmed region.

Examples:
• if not line.strip(): skip.

Notes:
• strip does not collapse internal runs.""",
    # 25 translate delete
    """• maketrans("", "", "aeiou") builds table deleting vowels; translate applies removals.
• "hello".translate(...) -> "hll".

How It Works:
• Third-argument deletechars path removes any listed chars wherever they appear.

Step-by-Step Execution:
1. Build translation mapping with deletions.
2. Walk str copying non-deleted chars.

Order of Operations:
• translate single pass.

Common Use Cases:
• Stripping punctuation for rough matching.

Edge Cases:
• Composed characters may need normalization before delete.

Performance Considerations:
• O(n) output size.

Examples:
• Contrast with replace per vowel in loop.

Notes:
• For regex-level patterns use re.sub.""",
    # 26 int base 2
    """• int(s, base) parses with prefix rules; "0b1010" is binary literal text -> 10 decimal.
• Base 2 allows digits 0-1 only in the numeric part.

How It Works:
• Parser reads radix prefix then digits.

Step-by-Step Execution:
1. Strip whitespace conceptually.
2. Interpret as base-2.

Order of Operations:
• int call with two arguments.

Common Use Cases:
• Bit flags from config strings.

Edge Cases:
• Invalid digits raise ValueError.

Performance Considerations:
• O(len) digits.

Examples:
• int("1010",2) also works without 0b prefix.

Notes:
• Use int(x,0) for auto base from literal prefix.""",
    # 27 int hex
    """• int("0xff", 16) -> 255; prefix 0x optional when base given explicitly in two-arg form.
• Hex digits case-insensitive.

How It Works:
• Parse hex digit run after optional prefix.

Step-by-Step Execution:
1. Validate characters.
2. Accumulate value.

Order of Operations:
• int(text,16).

Common Use Cases:
• Color parsing.

Edge Cases:
• Overflow not an issue for Python int arbitrary precision.

Performance Considerations:
• Linear in digit count.

Examples:
• int("ff",16) == 255.

Notes:
• For user input validate charset first.""",
    # 28 int octal
    """• int("0o17", 8) parses octal 17 -> decimal 15.
• Leading 0o documents octal in Python 3 literals.

How It Works:
• Base-8 digit accumulation.

Step-by-Step Execution:
1. Accept 0o prefix.
2. Parse digits 0-7.

Order of Operations:
• Two-arg int.

Common Use Cases:
• Unix permission triples.

Edge Cases:
• '8' in base 8 invalid.

Performance Considerations:
• Small constant time for short strings.

Examples:
• int("17",8) without prefix.

Notes:
• Literal form of int is 0o17 == 15.""",
    # 29 bin()
    """• bin(10) returns str with '0b' prefix and binary digits: '0b1010'.
• Result is a str, not an int.

How It Works:
• Computes two's complement representation for negatives; positive shown as usual.

Step-by-Step Execution:
1. Format int as binary text with prefix.

Order of Operations:
• Built-in call.

Common Use Cases:
• Debugging bitmasks.

Edge Cases:
• Large ints produce long strings.

Performance Considerations:
• O(log n) digits.

Examples:
• bin(0) is '0b0'.

Notes:
• For output without prefix slice [2:] or format(n,'b').""",
    # 30 hex()
    """• hex(255) -> '0xff' lowercase hex with 0x prefix.
• str type.

How It Works:
• Similar to bin but base 16.

Step-by-Step Execution:
1. Convert int to lowercase hex digits.

Order of Operations:
• hex built-in.

Common Use Cases:
• Memory address style display (though id hex is separate).

Edge Cases:
• Negative uses two's complement with many fs.

Performance Considerations:
• Proportional to digit count.

Examples:
• hex(0) '0x0'.

Notes:
• Uppercase: format(n,'X').""",
    # 31 oct()
    """• oct(15) -> '0o17' in Python 3 with 0o prefix.
• Base-8 textual form.

How It Works:
• Format unsigned magnitude for positive ints.

Step-by-Step Execution:
1. Emit octal digits with 0o prefix.

Order of Operations:
• oct(n).

Common Use Cases:
• Displaying permission bits.

Edge Cases:
• Negatives include leading '-0o...'.

Performance Considerations:
• Small int fast.

Examples:
• oct(8) -> '0o10'.

Notes:
• Match int(x,0) parsing rules when round-tripping.""",
    # 32 format binary
    """• format(42, "b") returns binary text without 0b prefix (unlike bin()).
• Uses mini-language not f-string.

How It Works:
• Calls value.__format__("b") for int.

Step-by-Step Execution:
1. Dispatch format with spec b.

Order of Operations:
• format(value, spec) built-in.

Common Use Cases:
• Custom separators via format specs combined.

Edge Cases:
• Use '#b' alternate form if available for prefix in some contexts.

Performance Considerations:
• Similar to bin without prefix.

Examples:
• format(5,'b')=='101'.

Notes:
• str.format and f-strings share mini-language rules.""",
    # 33 format hex
    """• format(255,'x') lowercase hex without 0x unless alternate.
• 'ff'.

How It Works:
• int __format__ with type x.

Step-by-Step Execution:
1. Apply x conversion.

Order of Operations:
• format built-in two-arg.

Common Use Cases:
• Hex without bin() style parentheses.

Edge Cases:
• Precision on ints affects sign handling for some specs.

Performance Considerations:
• Cheap for small ints.

Examples:
• format(255,'X') uppercase.

Notes:
• Combine with :#x for 0x in format mini-language.""",
    # 34 format float precision
    """• format(3.14,'.1f') rounds to one fractional digit string '3.1'.
• Rounding ties to even.

How It Works:
• float __format__ implements fixed-point f.

Step-by-Step Execution:
1. Round to one decimal place for display.
2. Produce str.

Order of Operations:
• format call.

Common Use Cases:
• Displaying measurements.

Edge Cases:
• Binary float cannot represent all decimals exactly.

Performance Considerations:
• Dragon4 style formatting cost.

Examples:
• Use Decimal for exact decimal arithmetic.

Notes:
• For monetary values avoid float entirely.""",
    # 35 f right align 5
    """• f"{'abc':>5}" right-aligns 'abc' in width 5 with spaces on the left.
• Result length 5.

How It Works:
• Format spec > with default space fill.

Step-by-Step Execution:
1. Field width 5.
2. Pad two spaces before 'abc'.

Order of Operations:
• f-string evaluates 'abc' then applies spec.

Common Use Cases:
• Monospace columns.

Edge Cases:
• Value longer than width is not truncated.

Performance Considerations:
• Allocates width chars.

Examples:
• verify visually with repr.

Notes:
• Numeric types use different default align rules.""",
    # 36 f left align 5
    """• :<5 left-aligns with spaces on the right; "abc  " length 5.
• startswith still True for 'abc'.

How It Works:
• Fill space pad after text.

Step-by-Step Execution:
1. Build five-char field.

Order of Operations:
• f-string then value.

Common Use Cases:
• CLI tables left text.

Edge Cases:
• Different fill char with :*<5 etc.

Performance Considerations:
• O(width).

Examples:
• len result 5.

Notes:
• Default alignment for str is left with format specs.""",
    # 37 f center 7
    """• :^7 centers 'abc' in width 7 with extra space split left/right per rule.
• One extra space may lean left for odd padding.

How It Works:
• Centering algorithm in format implementation.

Step-by-Step Execution:
1. Compute total pad 4 spaces around 3 chars.
2. Distribute.

Order of Operations:
• f-string expression.

Common Use Cases:
• Banners.

Edge Cases:
• Odd width minus len gives uneven split.

Performance Considerations:
• Allocates new str length 7.

Examples:
• repr to see exact spaces.

Notes:
• Use * as fill for visible padding.""",
    # 38 f #x
    """• # alternate form for hex includes 0x prefix in formatted output.
• f"{42:#x}" -> '0x2a'.

How It Works:
• int format with # and x.

Step-by-Step Execution:
1. Format 42 hex with prefix.

Order of Operations:
• Braces evaluate int then spec.

Common Use Cases:
• Matching C-style hex logs.

Edge Cases:
• Uppercase X uses capital letters in hex digits.

Performance Considerations:
• Tiny.

Examples:
• compare with hex(42).

Notes:
• Consistent with other alternate forms (#b, #o).""",
    # 39 f #b
    """• #b includes 0b prefix in binary text inside f-string.
• f"{42:#b}" shows binary with prefix.

How It Works:
• Alternate form for b type.

Step-by-Step Execution:
1. Format with prefix.

Order of Operations:
• Same as format(42,'#b') effectively.

Common Use Cases:
• Teaching bit representation in messages.

Edge Cases:
• Negative values long two's complement string.

Performance Considerations:
• O(bits).

Examples:
• Contrast f"{42:b}" without prefix.

Notes:
• bin() always includes prefix already — mind duplication when mixing APIs.""",
    # 40 f #o
    """• #o includes 0o octal prefix in output.
• f"{42:#o}" readable octal with marker.

How It Works:
• int alternate octal formatting.

Step-by-Step Execution:
1. Apply #o rules.

Order of Operations:
• f-string.

Common Use Cases:
• Debugging chmod-related values.

Edge Cases:
• Negatives include sign.

Performance Considerations:
• Small.

Examples:
• Compare plain :o without #.

Notes:
• Literal 0o52 style matches Python syntax.""",
    # 41 underscore grouping
    """• Underscore in format mini-language inserts thousands separators for numeric types.
• f"{1234567:_}" may yield '1_234_567' style in 3.6+ (PEP 515 style via format).

How It Works:
• Uses locale-independent underscore thousands grouping in modern Python formatting.

Step-by-Step Execution:
1. Format int with _ option.

Order of Operations:
• f-string braces.

Common Use Cases:
• Readable large counters in logs.

Edge Cases:
• Float formatting also supports _ grouping.

Performance Considerations:
• Linear in digit count.

Examples:
• Verify exact output on your minor version.

Notes:
• For locale commas use comma spec or Babel.""",
    # 42 f-string dict inside expression
    """• The quiz expression embeds a dict literal inside an f-string field; inner {1: 2} builds a dict, then its str() appears in the output.
• Brace nesting follows PEP 498: outer f-string braces vs inner dict braces.

How It Works:
• Inner {1: 2} evaluates to dict; formatting calls str() unless !r or !s specified.

Step-by-Step Execution:
1. Create dict mapping 1 to 2.
2. f-string inserts representation into result.

Order of Operations:
• Inner dict literal before FORMAT_VALUE.

Common Use Cases:
• Quick debug prints of tiny dicts and sets.

Edge Cases:
• To print literal brace characters in f-string, double them {{ }}.

Performance Considerations:
• repr/str of small dict is cheap.

Examples:
• Compare with f"{ {1,2,3} }" style set display in other exercises.

Notes:
• Read PEP 498 for the full f-string grammar.""",
    # 43 % dict mapping
    """• Old-style % with %(name)s keys uses dict on right; "Name: %(name)s" % {"name":"Alice"} substitutes.
• Order independent by name.

How It Works:
• Parses format string for named placeholders.

Step-by-Step Execution:
1. Look up name key.
2. Convert per %s.

Order of Operations:
• Mod on str with dict.

Common Use Cases:
• Legacy i18n catalogs.

Edge Cases:
• Missing key raises KeyError.

Performance Considerations:
• Slower than f-string.

Examples:
• Use tuple for positional %s %d.

Notes:
• For SQL never interpolate — use parameters.""",
    # 44 format_map
    """• str.format_map takes mapping directly without **unpacking; same as format(**d) for simple cases.
• "Hello, {name}!".format_map({"name":"Bob"}) -> greeting.

How It Works:
• Looks up keys in mapping for {name} fields.

Step-by-Step Execution:
1. Parse fields.
2. Retrieve name.

Order of Operations:
• Method on str template.

Common Use Cases:
• Subclassing Mapping for lazy or defaulting lookups.

Edge Cases:
• Custom map can override __missing__.

Performance Considerations:
• Similar to format(**dict).

Examples:
• Prefer format_map when you already have a dict object.

Notes:
• Still not as fast as f-strings for local variables.""",
    # 45 ascii()
    """• ascii() returns repr-like string with only ASCII bytes escaping non-ASCII via \\\\x, \\\\u, or \\\\U.
• ascii("café") escapes é.

How It Works:
• PyObject_ASCII in CPython.

Step-by-Step Execution:
1. Build representation with escapes.

Order of Operations:
• ascii() built-in.

Common Use Cases:
• Safe logs when channel is ASCII-only.

Edge Cases:
• Mixed scripts each escaped.

Performance Considerations:
• Allocates new str.

Examples:
• contrast repr() which may use non-ascii if printable.

Notes:
• For JSON use json.dumps with ensure_ascii.""",
    # 46 repr vs str
    """• str("hello") is usually 'hello' without extra quotes in the value sense — str human string.
• repr("hello") includes quotes to round-trip; different goals.

How It Works:
• str.__str__ vs __repr__ on str instance returns different formatting.

Step-by-Step Execution:
1. Call each on same object.
2. Compare outputs as pedagogical difference.

Order of Operations:
• Two separate calls.

Common Use Cases:
• Teaching debugger displays vs print.

Edge Cases:
• For user-defined classes, default str/repr may differ more.

Performance Considerations:
• Small cost.

Examples:
• print(str); print(repr) side by side.

Notes:
• Object __repr__ should ideally be unambiguous per docs.""",
    # 47 isinstance str True
    """• isinstance("hello", str) True for built-in str instances; respects subclasses.
• Preferred over type(x) is str for flexibility.

How It Works:
• Checks MRO for str subclass.

Step-by-Step Execution:
1. Get class of object.
2. Test subclass relationship.

Order of Operations:
• isinstance builtin.

Common Use Cases:
• API type checking at runtime.

Edge Cases:
• numpy str_ may differ — usually still isinstance(..., str) False? Actually numpy string types vary.

Performance Considerations:
• Slightly slower than direct type compare but safer.

Examples:
• isinstance(True,int) True.

Notes:
• Use collections.abc for abstract checks.""",
    # 48 isinstance False
    """• isinstance(42, str) is False; int is not str.
• No coercion in isinstance.

How It Works:
• MRO check fails.

Step-by-Step Execution:
1. int instance.
2. str not in bases.

Order of Operations:
• isinstance call.

Common Use Cases:
• Validating heterogeneous lists.

Edge Cases:
• bool is subclass of int — isinstance(True,int) True.

Performance Considerations:
• Cheap.

Examples:
• Combine with not str for guard.

Notes:
• Use try/except less for flow control than validation.""",
    # 49 isidentifier false
    """• "2var" fails isidentifier because first char cannot be digit.
• Returns False.

How It Works:
• Same lexical rules as tokenization.

Step-by-Step Execution:
1. Inspect first char '2'.
2. Reject.

Order of Operations:
• Method on str literal.

Common Use Cases:
• Rejecting bad dynamic field names.

Edge Cases:
• Keywords still True for isidentifier though reserved.

Performance Considerations:
• O(len) scan.

Examples:
• Compare "_2var" True.

Notes:
• Valid identifier != safe file name.""",
    # 50 type is str
    """• type("hello") returns class str; "is str" compares that object to the str builtin — True for plain str instances.
• Not subclass check.

How It Works:
• type(x) is cls exact class identity test.

Step-by-Step Execution:
1. type("hello") -> str class object.
2. Compare pointer to str in builtins.

Order of Operations:
• type() then "is" comparison.

Common Use Cases:
• Exact-type checks when subclasses must be excluded.

Edge Cases:
• Subclass instance: type is subclass; "is str" False.

Performance Considerations:
• Very cheap.

Examples:
• Prefer isinstance for most APIs.

Notes:
• type(x) is type(y) sometimes used to compare constructors.""",
]


def main() -> None:
    path = Path(__file__).resolve().parents[1] / "src/data/questions/level1_intermediate_b.ts"
    text = path.read_text(encoding="utf-8")
    if text.count(BLOCK_START) != len(TAILS):
        raise SystemExit(
            f"Expected {len(TAILS)} generic blocks, found {text.count(BLOCK_START)}"
        )
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
