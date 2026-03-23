#!/usr/bin/env python3
"""
Replace duplicated generic 10-section tails in level1_intermediate_a.ts (50 occurrences).

TAILS order matches the order of duplicate markers (top to bottom in file).
replacement = "Key Distinctions:\\n" + tail (tail starts with bullet lines, like fix_level1_expert_a).
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

# 50 tails — Key Distinctions bullets through Notes (no leading "Key Distinctions:" line; main adds it)
TAILS: list[str] = [
    # Q1 strip()
    """• strip() trims from both ends; default removes all Unicode whitespace, not only spaces.
• Middle spaces never move — only leading/trailing runs are removed.

How It Works:
• str.strip() builds a new str by scanning from both ends until a character not in the default whitespace set.

Step-by-Step Execution:
1. Allocate a new str view of the original code points.
2. Advance left index past whitespace.
3. Advance right index past whitespace.
4. Slice and return the substring.

Order of Operations:
• Method call on the literal string; no other operators in the stem.

Common Use Cases:
• Cleaning user input, CSV fields, and log lines before validation.

Edge Cases:
• All-whitespace string becomes ""; empty string stays "".

Performance Considerations:
• CPython implements strip in C; cost is proportional to stripped prefix/suffix length.

Examples:
• "  hi  ".strip() -> "hi"; "\\n\\t".strip() -> "".

Notes:
• Pass a chars string to strip a custom character set from both ends.""",
    # Q2 lstrip()
    """• lstrip() removes leading whitespace only; trailing spaces remain part of the result.
• Pair mentally with rstrip() to remember left-only behavior.

How It Works:
• Scans from index 0 forward until a non-whitespace character (per default rules).

Step-by-Step Execution:
1. Find first non-whitespace code point.
2. Return slice from that index to the end.

Order of Operations:
• Single method call on the string literal.

Common Use Cases:
• Dedenting pasted text while preserving right padding.

Edge Cases:
• If the string is all whitespace, result is "".

Performance Considerations:
• Same C fast path as strip for the left segment only.

Examples:
• "  hello  ".lstrip() -> "hello  ".

Notes:
• lstrip("x") removes any of those characters from the left, not a substring prefix.""",
    # Q3 rstrip()
    """• rstrip() trims the right end only; leading spaces stay.
• Often paired with line reads to drop trailing "\\n" without touching indentation.

How It Works:
• Scans backward from the last index until a non-whitespace character.

Step-by-Step Execution:
1. Find last non-whitespace index.
2. Return slice from start to that index inclusive.

Order of Operations:
• One unary str method call.

Common Use Cases:
• Normalizing lines from readline() before split.

Edge Cases:
• Empty string yields ""; whitespace-only yields "".

Performance Considerations:
• O(k) for k trailing whitespace characters.

Examples:
• "  hello  ".rstrip() -> "  hello".

Notes:
• For Windows CRLF lines, rstrip("\\r") may still be needed after rstrip().""",
    # Q4 strip("x")
    """• strip(chars) treats chars as a set of code points to peel from both ends, not a substring.
• Repeats until the end character is not in the set.

How It Works:
• While left char in set: advance; while right char in set: retreat; then slice.

Step-by-Step Execution:
1. Build a frozenset-like view of chars argument.
2. Strip left run of matching chars.
3. Strip right run of matching chars.

Order of Operations:
• Method call with argument evaluated before the call.

Common Use Cases:
• Removing predictable junk tokens (quotes, stars) around payloads.

Edge Cases:
• Empty chars argument is an error in older Python; in 3.x use strip() with no args for whitespace.

Performance Considerations:
• Small char sets are very fast; huge sets still linear in strip length.

Examples:
• "xxhelloxx".strip("x") -> "hello".

Notes:
• strip("xy") removes any mix of x and y from each end, not the literal "xy".""",
    # Q5 encode().__name__
    """• __name__ on a type object is the short string name ("bytes"), not the repr with angle brackets.
• "abc".encode() yields bytes; type(...).__name__ is "bytes".

How It Works:
• encode() runs the codec (UTF-8 by default); type() returns the class object; __name__ reads its name.

Step-by-Step Execution:
1. Call encode on str -> bytes instance.
2. Call type on that instance -> bytes class.
3. Read __name__ attribute -> "bytes".

Order of Operations:
• Attribute access chains left to right: encode(), type(), __name__.

Common Use Cases:
• Logging types during debugging without the full repr.

Edge Cases:
• Subclassing bytes changes type() but __name__ usually reflects the subclass.

Performance Considerations:
• encode allocates; __name__ is a cheap string lookup.

Examples:
• type("abc".encode()).__name__ == "bytes".

Notes:
• Prefer isinstance(x, bytes) at boundaries instead of name string checks.""",
    # Q6 isdigit()
    """• isdigit() is True only if every character is a decimal digit per Unicode rules and the string is non-empty.
• It rejects signs, spaces, radix points, and empty strings.

How It Works:
• Each code point must pass Py_UNICODE_ISDIGIT-style checks (includes some Unicode digits).

Step-by-Step Execution:
1. If length 0 -> False.
2. If any char fails digit test -> False else True.

Order of Operations:
• Single method call; no short-circuiting visible to user.

Common Use Cases:
• Validating that a token is digits-only before int() conversion.

Edge Cases:
• "²" may be digit for isdigit in some builds; contrast with isdecimal().

Performance Considerations:
• O(n) in string length; early exit on first failure.

Examples:
• "123".isdigit() -> True; "12a".isdigit() -> False.

Notes:
• For locale-aware parsing, prefer explicit normalization or decimal module.""",
    # Q7 isalpha()
    """• isalpha() requires every character to be a letter; one digit makes the whole call False.
• Contrast with isalnum(), which allows mixed letters and digits.

How It Works:
• Unicode category must be letter-like for each code point; empty str -> False.

Step-by-Step Execution:
1. Empty -> False.
2. Scan; if any char not alpha -> False.

Order of Operations:
• Method call on the literal shown in the stem.

Common Use Cases:
• Checking tokens that must be pure letters (names in strict grammars).

Edge Cases:
• Spaces and punctuation always yield False.

Performance Considerations:
• Linear scan; same class of work as other str predicates.

Examples:
• "hello3".isalpha() -> False because of "3".

Notes:
• Accented letters usually count as alphabetic in Unicode builds.""",
    # Q8 isalnum()
    """• isalnum() is True when every character is either a letter or a digit — no spaces or symbols.
• "hello3" mixes letters and one digit; all positions satisfy the predicate.

How It Works:
• Combines letter or digit test for each code point.

Step-by-Step Execution:
1. Reject empty.
2. Ensure each char passes isalpha OR isdigit style checks.

Order of Operations:
• One call; no Python-level loops exposed.

Common Use Cases:
• Loose validation of alphanumeric identifiers before regex.

Edge Cases:
• Underscore is neither letter nor digit for this method -> False if present.

Performance Considerations:
• Similar cost to isalpha/isdigit scans.

Examples:
• "hello3".isalnum() -> True; "hello 3".isalnum() -> False.

Notes:
• For Python identifiers use str.isidentifier() instead of isalnum().""",
    # Q9 isspace()
    """• isspace() requires the string be non-empty and every code point be whitespace (Zs, Zl, Zp, etc.).
• A string of three spaces is all whitespace -> True.

How It Works:
• Uses Unicode whitespace classification, not only ASCII space.

Step-by-Step Execution:
1. Empty -> False.
2. Any non-space char -> False else True.

Order of Operations:
• Predicate call on the literal.

Common Use Cases:
• Detecting blank-only lines after strip is unnecessary.

Edge Cases:
• "\\u00a0" (non-breaking space) often counts as whitespace.

Performance Considerations:
• O(n); fails fast on first non-space.

Examples:
• "   ".isspace() -> True; " \\t\\n".isspace() -> True.

Notes:
• Do not confuse with str.strip() which removes; isspace() only tests.""",
    # Q10 isnumeric()
    """• isnumeric() is the broadest numeric category: superscripts, fractions, and many Unicode numerals count.
• "²" is numeric (and digit) but not necessarily decimal.

How It Works:
• Each char must have numeric value in Unicode numeric data.

Step-by-Step Execution:
1. Empty -> False.
2. Each char checked against numeric property sets.

Order of Operations:
• Single method call.

Common Use Cases:
• Accepting exotic number notations in internationalized input.

Edge Cases:
• Roman numeral letters may fail isnumeric depending on code point.

Performance Considerations:
• Table lookups per character; still linear.

Examples:
• "²".isnumeric() -> True.

Notes:
• Hierarchy: isdecimal() subset of isdigit() subset of isnumeric() for typical Western digits.""",
    # Q11 isdecimal()
    """• isdecimal() is the strictest: only true decimal digits (and compatibles) pass; superscript two fails here.
• So "²" is not decimal even though it is digit/numeric for other methods.

How It Works:
• Uses decimal digit property only.

Step-by-Step Execution:
1. Empty -> False.
2. Any char not decimal -> False.

Order of Operations:
• One predicate on the one-character string.

Common Use Cases:
• Validating input for int() without handling exotic numerals.

Edge Cases:
• Digits from other scripts may pass if classified as decimal digits.

Performance Considerations:
• Cheapest predicate when it rejects early on first char.

Examples:
• "²".isdecimal() -> False; "2".isdecimal() -> True.

Notes:
• When all three predicates matter, test in order: decimal -> digit -> numeric.""",
    # Q12 isidentifier()
    """• isidentifier() mirrors lexical rules: start with Unicode XID_Start, continue with XID_Continue; reserved words still return True syntactically.
• Leading digit fails; "2name" is not an identifier.

How It Works:
• Delegates to Unicode identifier tables and keyword check.

Step-by-Step Execution:
1. Classify first char as ID start.
2. Classify following chars as ID continue.

Order of Operations:
• Method call on the literal string.

Common Use Cases:
• Sanitizing dynamic attribute names before setattr.

Edge Cases:
• Keywords like "class" still give True for isidentifier though invalid as a bare name in source in some contexts.

Performance Considerations:
• Small strings; table lookups dominate.

Examples:
• "2name".isidentifier() -> False; "_x".isidentifier() -> True.

Notes:
• Valid identifier text is necessary but not sufficient for choosing a safe public API name.""",
    # Q13 maketrans / translate
    """• str.maketrans builds a translation table; translate applies 1:1 code point swaps per that mapping.
• Vowels map to digits in the quiz; order of maketrans arguments defines the pairing.

How It Works:
• maketrans returns a dict-like mapping usable by translate; translate walks the string and substitutes.

Step-by-Step Execution:
1. Evaluate maketrans("aeiou", "12345") -> translation table.
2. Call "hello".translate(table).
3. Each vowel replaced by its partner.

Order of Operations:
• Assignment and calls follow Python left-to-right evaluation in the quiz snippet.

Common Use Cases:
• Character-level ciphers, accent stripping, or custom normalizers.

Edge Cases:
• Unequal-length maps raise ValueError in maketrans for the two-string form.

Performance Considerations:
• translate is implemented efficiently in C for CPython.

Examples:
• With the given table, "hello" -> "h2ll4".

Notes:
• For regex-level patterns use re.sub, not translate.""",
    # Q14 expandtabs
    """• expandtabs replaces U+0009 tab with spaces up to the next tab stop column; len then counts final code points.
• Tab stops every n columns (here 4) affect how many spaces replace one tab.

How It Works:
• Walks the string expanding tabs; each tab may become 1..tabsize spaces depending on column.

Step-by-Step Execution:
1. expandtabs(4) on "a\\tb" yields a string with tab expanded.
2. len counts characters in the expanded string.

Order of Operations:
• expandtabs before len in the nested call.

Common Use Cases:
• Displaying file contents with predictable column alignment.

Edge Cases:
• Tabs at different columns expand to different space counts.

Performance Considerations:
• O(n) copy; new string allocation.

Examples:
• Typical "a\\tb" with tabsize 4 often yields length 5 — verify on your interpreter.

Notes:
• Mixing tabs and spaces is fragile; prefer spaces-only style in new code.""",
    # Q15 removeprefix
    """• removeprefix(prefix) removes one leading occurrence of prefix if present; no error if missing (Python 3.9+).
• Case and spelling must match exactly.

How It Works:
• If startswith(prefix), return s[len(prefix):], else return a copy of s.

Step-by-Step Execution:
1. Test prefix at index 0.
2. Slice or copy accordingly.

Order of Operations:
• Method call; argument string evaluated first.

Common Use Cases:
• Stripping known protocol markers from URLs or log tags.

Edge Cases:
• Only one removal from the left; repeated prefixes need a loop.

Performance Considerations:
• O(len(prefix)) check plus O(n) slice copy worst case.

Examples:
• "HelloWorld".removeprefix("Hello") -> "World".

Notes:
• For older Python use s[len(p):] if s.startswith(p) else s.""",
    # Q16 removesuffix
    """• removesuffix(suffix) trims one trailing occurrence when the string endswith it.
• Leaves the string unchanged if the suffix does not match.

How It Works:
• If endswith(suffix), return slice without final len(suffix) chars.

Step-by-Step Execution:
1. Compare tail to suffix.
2. Return truncated str or copy.

Order of Operations:
• Single method call with literal suffix argument.

Common Use Cases:
• Dropping file extensions or closing tags from tokens.

Edge Cases:
• Only one removal; "foo.txt".removesuffix(".txt") -> "foo".

Performance Considerations:
• Similar to removeprefix cost profile.

Examples:
• "HelloWorld".removesuffix("World") -> "Hello".

Notes:
• Do not confuse with rstrip(chars), which removes any of those characters repeatedly.""",
    # Q17 "" * 5 == "a" * 0
    """• str repetition uses * with int; empty string times any finite n is still "".
• "a"*0 is ""; both sides compare equal.

How It Works:
• __mul__ on str builds concatenation of n copies; n==0 yields "".

Step-by-Step Execution:
1. Evaluate "" * 5 -> "".
2. Evaluate "a" * 0 -> "".
3. Compare with ==.

Order of Operations:
• Repetition binds before equality == in this expression.

Common Use Cases:
• Building padding and separators in formatted output.

Edge Cases:
• Negative repeat raises ValueError for str in Python 3.

Performance Considerations:
• *0 avoids allocation of large buffers.

Examples:
• "" * 99 == "" * 1 is True.

Notes:
• Use join for many pieces instead of repeated + in hot loops.""",
    # Q18 lexicographic <
    """• str comparison uses lexicographic order of code points (Unicode code units in CPython 3 for BMP).
• "abc" < "abd" because first differing index is 'c' vs 'd'.

How It Works:
• Pairwise compare code points left to right until inequality or exhaustion.

Step-by-Step Execution:
1. Compare 'a' vs 'a'.
2. Compare 'b' vs 'b'.
3. Compare 'c' vs 'd' -> c < d -> True.

Order of Operations:
• Chained str comparisons are not involved; single < operation.

Common Use Cases:
• Sorting keys and binary-searching ordered text.

Edge Cases:
• Different lengths: shorter prefix compares smaller if all equal up to len(shorter).

Performance Considerations:
• O(min(len(a),len(b))) comparisons.

Examples:
• "abc" < "abd" -> True.

Notes:
• Locale-aware sorting needs locale.strxfrm or PyICU, not raw <.""",
    # Q19 len("a\\nb")
    """• Ordinary string literal: backslash-n is a single newline character; len counts that as one.
• So length is 3: 'a', newline, 'b'.

How It Works:
• Parser interprets escape in the literal; len returns code point count.

Step-by-Step Execution:
1. Build str with three characters.
2. len returns 3.

Order of Operations:
• len call wraps the literal.

Common Use Cases:
• Measuring visible line length after escapes are applied.

Edge Cases:
• Windows "\\r\\n" in a literal is two characters unless using universal newlines in reads.

Performance Considerations:
• O(1) len for str in CPython (cached size).

Examples:
• len("a\\nb") == 3.

Notes:
• Contrast with raw strings where backslash is literal.""",
    # Q20 len(r"\\n")
    """• Raw string prefix r keeps backslash as literal; r"\\n" is backslash + n, two characters.
• len is 2, not counting a newline.

How It Works:
• Raw string lexer rules: most escapes are disabled; len counts literal chars.

Step-by-Step Execution:
1. Build str with '\\' and 'n'.
2. len -> 2.

Order of Operations:
• r prefix applies before escape processing for normal rules.

Common Use Cases:
• Regex patterns and Windows paths where backslashes must survive.

Edge Cases:
• r"\\"" still ends the string; quote rules remain.

Performance Considerations:
• Same len cost as any short str.

Examples:
• len(r"\\n") == 2 in the quiz stem sense (two-char backslash-n sequence).

Notes:
• Compare with ordinary "\\\\n" vs r"\\\\n" carefully when counting.""",
    # Q21 triple f-string len
    """• Triple-quoted f-string builds text with embedded expressions; newlines inside the literal add to length.
• Each expression result contributes its characters.

How It Works:
• f-string evaluates {'A'} and {'B'} and inserts literal newlines between as written.

Step-by-Step Execution:
1. Build multi-line string with newline between A and B lines.
2. len counts all code points including newline(s).

Order of Operations:
• Braces evaluated first inside f-string; concatenation implicit.

Common Use Cases:
• Generating multi-line templates and doctest-style blocks.

Edge Cases:
• Trailing newline on last line depends on how the closing quotes sit.

Performance Considerations:
• f-string is compiled to efficient format path.

Examples:
• Count includes every '\\n' inserted by the template layout.

Notes:
• Use repr(s) when debugging to see exact escapes.""",
    # Q22 immutability assignment
    """• str objects do not support item assignment; s[0] = "H" raises TypeError.
• Immutability is a language guarantee for str.

How It Works:
• __setitem__ is undefined for str; interpreter raises.

Step-by-Step Execution:
1. Load name s bound to str.
2. Attempt store to index 0 -> TypeError.

Order of Operations:
• Subscript assignment fails before any value effect.

Common Use Cases:
• Teaching why concatenation or list of chars is used to "mutate" text.

Edge Cases:
• bytearray supports item assignment; str does not.

Performance Considerations:
• Error path is cheap; no partial mutation occurs.

Notes:
• Build new str: s = "H" + s[1:] instead of mutating.""",
    # Q23 str([1, 2])
    """• str() calls the object's __str__ or falls back to repr-like display for containers.
• Lists render with brackets and comma spacing similar to their repr for built-in types.

How It Works:
• PyObject_Str formats the list's contents using repr of elements by default rules.

Step-by-Step Execution:
1. Construct list [1,2].
2. str() produces readable string form.

Order of Operations:
• str call wraps the list literal.

Common Use Cases:
• Quick debugging prints before learning join for custom formatting.

Edge Cases:
• Nested lists recurse in the string form.

Performance Considerations:
• Builds new string proportional to repr length.

Examples:
• str([1, 2]) contains "1" and "2" with list punctuation.

Notes:
• For CSV-safe output use join and explicit formatting.""",
    # Q24 repr("hello")
    """• repr aims at a string that round-trips through eval-ish contexts; adds quotes for str.
• For "hello", repr includes single quotes in the result string.

How It Works:
• Calls PyObject_Repr; for str, escapes and wraps quotes.

Step-by-Step Execution:
1. Take str "hello".
2. Return representation with delimiters.

Order of Operations:
• Unary repr() call.

Common Use Cases:
• Logging exact values; doctest expected output.

Edge Cases:
• Quotes inside the string are escaped in repr output.

Performance Considerations:
• Allocates new str; small constant factor.

Examples:
• repr("hello") starts and ends with quote characters in output.

Notes:
• str() is human-friendly; repr() is interpreter-friendly.""",
    # Q25 strip().lower()
    """• Method chaining left to right: strip() returns new str, then lower() on that result.
• Whitespace removed before case folding.

How It Works:
• Temporary str from strip; lower() maps cased letters per Unicode lower mapping.

Step-by-Step Execution:
1. strip outer whitespace -> "Hello".
2. lower -> "hello".

Order of Operations:
• Calls chain; no arithmetic.

Common Use Cases:
• Normalizing free-text tokens for case-insensitive comparison.

Edge Cases:
• lower() is not the same as casefold() for some Unicode.

Performance Considerations:
• Two passes over string segments; still linear total.

Examples:
• "  Hello  ".strip().lower() -> "hello".

Notes:
• For storage keys consider casefold() for aggressive normalization.""",
    # Q26 f"{2 + 3}"
    """• Braces in f-strings evaluate expressions; 2+3 runs before formatting.
• Result string is "5" without extra spaces unless specified in format spec.

How It Works:
• Compiler emits FORMAT_VALUE on the sum result.

Step-by-Step Execution:
1. Evaluate 2+3 -> 5.
2. Convert to str inside f-string machinery.

Order of Operations:
• Expression inside braces before surrounding literal parts.

Common Use Cases:
• Inline arithmetic in messages and logs.

Edge Cases:
• Errors inside braces propagate as in normal code.

Performance Considerations:
• Fast path for simple types; avoids .format temporary dict.

Examples:
• f"{2 + 3}" == "5".

Notes:
• Use = debug syntax (f"{x=}") when teaching introspection.""",
    # Q27 f"{'hello'.upper()}"
    """• Nested expressions allow method calls inside braces; 'hello'.upper() runs first.
• Outer f-string embeds the returned "HELLO".

How It Works:
• Inner str evaluated; upper() allocates new str; outer f-string inserts it.

Step-by-Step Execution:
1. Evaluate 'hello'.upper() -> "HELLO".
2. Build f-string with that value.

Order of Operations:
• Inner call completes before FORMAT_VALUE.

Common Use Cases:
• Title-case snippets inside larger templates.

Edge Cases:
• Nested f-strings possible but hurt readability.

Performance Considerations:
• Two string allocations typical.

Examples:
• f"{'hello'.upper()}" -> "HELLO".

Notes:
• Keep nesting shallow for clarity.""",
    # Q28 conditional expression in f-string
    """• Ternary if/else inside braces picks a branch; only the chosen subexpression runs.
• parity test 4%2==0 drives "even" vs "odd".

How It Works:
• Conditional expression evaluates boolean, then one of the two str branches.

Step-by-Step Execution:
1. Compute 4%2 == 0 -> True.
2. Select 'even' branch.

Order of Operations:
• Modulo and compare before conditional expression.

Common Use Cases:
• Inline pluralization and status words in templates.

Edge Cases:
• Division by zero still possible inside either branch if written carelessly.

Performance Evaluations:
• Single small expression; no extra format spec work.

Examples:
• f"{'even' if 4%2==0 else 'odd'}" -> "even".

Notes:
• For i18n avoid hard-coded English branches inside f-strings.""",
    # Q29 float format .2f
    """• Format spec .2f rounds to two digits after the decimal for float; ties use bankers rounding in modern Python.
• Result is a decimal string suitable for display.

How It Works:
• format() machinery applies precision and type f.

Step-by-Step Execution:
1. Load float 3.14159.
2. Apply spec .2f -> "3.14" (rounded).

Order of Operations:
• Expression in braces evaluated before formatting.

Common Use Cases:
• Currency-like display (but use Decimal for money rules).

Edge Cases:
• Very large or tiny floats may use scientific notation if spec asks.

Performance Considerations:
• Formatting floats is more costly than ints but still small.

Examples:
• f"{3.14159:.2f}" -> "3.14".

Notes:
• Locale-aware separators need different spec or Babel.""",
    # Q30 zero-padded int
    """• Integer format 05d pads with zeros on the left to width 5 minimum.
• Sign handling interacts with width; positive 42 becomes "00042" style.

How It Works:
• format int with fill 0, align default, width 5, type d.

Step-by-Step Execution:
1. Convert 42 to decimal digits.
2. Pad to five characters with leading zeros.

Order of Operations:
• Format spec applied after int object is ready.

Common Use Cases:
• Serial numbers, timestamps, and lexicographically sortable codes.

Edge Cases:
• Width smaller than digit count still shows all digits.

Performance Considerations:
• Small int formatting is highly optimized.

Examples:
• f"{42:05d}" -> "00042".

Notes:
• For arbitrary radix use b/x/o types instead of d.""",
    # Q31 len(f"{'hi':>10}")
    """• Nested f-string first right-aligns "hi" in width 10, producing a ten-character str, then len counts 10.
• Alignment happens inside the braces using format mini-language.

How It Works:
• Inner format applies > with default space fill; outer len reads length.

Step-by-Step Execution:
1. Build field with 'hi' right aligned to 10 cols.
2. len(...) -> 10.

Order of Operations:
• Inner formatting before outer len call.

Common Use Cases:
• Verifying column widths for monospace tables.

Edge Cases:
• If value longer than width, min width may be exceeded (no truncation).

Performance Considerations:
• Allocates padded string then counts; O(width).

Examples:
• len(f"{'hi':>10}") == 10.

Notes:
• Use debug f"{s=}" to inspect intermediate widths while learning.""",
    # Q32 endswith after l-align
    """• f"{'hi':<10}" left-aligns "hi" in width 10 with spaces on the right, so the last characters are spaces, not "hi".
• endswith("hi") is False because the suffix is blank padding, not the letters "hi".

How It Works:
• endswith tests the final len(suffix) code points; they must exactly equal "hi".

Step-by-Step Execution:
1. Build "hi" plus eight spaces (total width 10).
2. Last two code points are spaces -> not equal to "hi" -> False.

Order of Operations:
• Format x first; then endswith on the resulting str.

Common Use Cases:
• Catching mistaken assumptions about padding when validating suffixes.

Edge Cases:
• rstrip() before endswith would change the answer.

Performance Considerations:
• Suffix check is O(len(suffix)).

Examples:
• "hi        ".endswith("hi") -> False; .startswith("hi") -> True.

Notes:
• Compare with :>10 where spaces lead and endswith might succeed differently.""",
    # Q33 center strip
    """• f"{'hi':^10}" centers with equal padding both sides; strip() then removes default whitespace from both ends.
• After strip, you often recover just "hi".

How It Works:
• center builds padded str; strip removes surrounding whitespace characters.

Step-by-Step Execution:
1. Center 'hi' in width 10.
2. strip outer spaces.

Order of Operations:
• Assignment in quiz then strip on x.

Common Use Cases:
• Cleaning banner text after padding for display.

Edge Cases:
• If fill char not whitespace, strip default does not remove it.

Performance Considerations:
• Two passes over edges typical.

Examples:
• x.strip() often yields "hi" for space-centered fields.

Notes:
• Use specific strip(chars) if fill is not whitespace.""",
    # Q34 fill *^
    """• Format fill character can be * with ^ for centering; width 10 surrounds "hi" with asterisks as needed.
• Mini-language syntax is {value:*^10} style in the quiz.

How It Works:
• parse format spec: fill '*', align '^', width 10.

Step-by-Step Execution:
1. Compute centered string with asterisk padding.
2. Return resulting str.

Order of Operations:
• Expression inside braces evaluated before width fill.

Common Use Cases:
• CLI banners and quick visual separators.

Edge Cases:
• Odd width leaves one extra pad on the left for '^'.

Performance Considerations:
• Allocates length width string.

Examples:
• f"{'hi':*^10}" produces stars around centered text.

Notes:
• Fill must be exactly one character before alignment flag.""",
    # Q35 bin f-string
    """• Format type b prints integer in binary with 0b prefix in formatted output rules for str.format/f-strings.
• f"{10:b}" yields binary text without extra spaces.

How It Works:
• Integer 10 converted to base-2 string per format spec.

Step-by-Step Execution:
1. Take int 10.
2. Apply b conversion -> bit pattern string.

Order of Operations:
• Value then format spec.

Common Use Cases:
• Bitmasks, flags, and teaching binary.

Edge Cases:
• Negative ints use two's complement with minus sign in output.

Performance Considerations:
• Logarithmic work in value magnitude.

Examples:
• f"{10:b}" -> "1010" without prefix depending on alternate form rules — verify '#' alternate.

Notes:
• Use '#b' if you need explicit 0b prefix per format mini-language.""",
    # Q36 hex
    """• x format emits hexadecimal lowercase without 0x unless alternate # specified.
• 255 -> "ff".

How It Works:
• Integer formatting divides by 16 collecting digits.

Step-by-Step Execution:
1. Start with 255.
2. Emit hex digits.

Order of Operations:
• f-string evaluates int then applies x.

Common Use Cases:
• Color codes (#RRGGBB) and low-level debugging.

Edge Cases:
• Uppercase X uses capital hex letters.

Performance Considerations:
• Similar cost to other int bases.

Examples:
• f"{255:x}" -> "ff".

Notes:
• Prefix with 0x manually or use '#x'.""",
    # Q37 octal
    """• o format prints base-8 representation without extra prefix unless alternate.
• 8 decimal is 10 in octal.

How It Works:
• Repeated division by eight builds digits.

Step-by-Step Execution:
1. Take int 8.
2. Convert to octal text.

Order of Operations:
• f-string expression then spec o.

Common Use Cases:
• Unix permission triplets (chmod thinking).

Edge Cases:
• Negative numbers include leading minus.

Performance Considerations:
• Small int base conversion is fast.

Examples:
• f"{8:o}" -> "10".

Notes:
• Python 3 int literals use 0o10 syntax, separate from formatted output.""",
    # Q38 scientific e
    """• e format uses scientific notation with mantissa and exponent for floats.
• 1234.5 formats with one digit before decimal by default style.

How It Works:
• Dragon4/grisu-style algorithms pick digits and exponent.

Step-by-Step Execution:
1. Load float 1234.5.
2. Apply :e precision rules.

Order of Operations:
• f-string braces evaluate float then spec.

Common Use Cases:
• Wide dynamic range measurements.

Edge Cases:
• NaN and inf have string forms.

Performance Considerations:
• More expensive than fixed-point formatting.

Examples:
• f"{1234.5:e}" shows scientific string.

Notes:
• Control precision with .4e etc.""",
    # Q39 thousands comma
    """• comma option inserts thousands separators for int/float string form per locale-unaware rules (ASCII comma).
• 1000000 -> "1,000,000".

How It Works:
• Insert commas between groups of three digits from the right.

Step-by-Step Execution:
1. Format 1000000 with grouping.

Order of Operations:
• Expression then ',' option.

Common Use Cases:
• Human-readable large counters in en_US style.

Edge Cases:
• Locale-aware separators need locale module or Babel.

Performance Considerations:
• O(number of digits).

Examples:
• f"{1000000:,}" includes commas.

Notes:
• For finance use Decimal quantize, not float comma only.""",
    # Q40 percent
    """• % multiplies float by 100 and adds percent sign in the formatted output.
• .0% means zero fraction digits in the percentage.

How It Works:
• format type % applies percent scaling.

Step-by-Step Execution:
1. Take 0.75.
2. Format -> "75%" with .0 precision.

Order of Operations:
• f-string evaluates float then format spec.

Common Use Cases:
• Progress bars and ratios in UI copy.

Edge Cases:
• Rounding ties follow round-half-to-even.

Performance Considerations:
• Cheap conversion.

Examples:
• f"{0.75:.0%}" -> "75%".

Notes:
• Value is fractional; 1.0 is 100%.""",
    # Q41 dict subscript in f-string
    """• Braces inside f-string can index mapping literals; d['a'] resolves during formatting.
• Must use quotes compatible with outer f-string quoting.

How It Works:
• Expression d['a'] evaluates to 1; inserted as str.

Step-by-Step Execution:
1. Build dict.
2. Read key 'a'.
3. Embed value in output.

Order of Operations:
• Dict literal then subscript inside same expression.

Common Use Cases:
• Quick templating with small dicts (prefer variables for real code).

Edge Cases:
• Missing KeyError if key absent.

Performance Considerations:
• Dict lookup O(1) average.

Examples:
• f"{d['a']}" -> "1" for {"a":1}.

Notes:
• For user-controlled keys use .get to avoid crashes.""",
    # Q42 list subscript f-string
    """• lst[1] inside braces picks second element (20) for formatting.
• Lists are evaluated like normal Python expressions.

How It Works:
• Index 1 on [10,20,30] yields 20; str inserted.

Step-by-Step Execution:
1. Build list literal.
2. Index -> int 20.
3. Format to text.

Order of Operations:
• Subscript inside expression before conversion.

Common Use Cases:
• Showing specific entries from parsed records.

Edge Cases:
• IndexError if out of range.

Performance Considerations:
• O(1) index for list.

Examples:
• f"{lst[1]}" -> "20" with given lst.

Notes:
• Prefer named variables over huge literals in f-strings for readability.""",
    # Q43 trivial f-string
    """• f"{'hello'}" embeds a literal str unchanged; quotes nest carefully.
• Result is "hello" without extra quotes in the value.

How It Works:
• Expression 'hello' evaluates to str; FORMAT_VALUE default.

Step-by-Step Execution:
1. Evaluate inner 'hello'.
2. Produce outer string identical to hello.

Order of Operations:
• Inner literal first.

Common Use Cases:
• Teaching that f-strings accept arbitrary expressions.

Edge Cases:
• Same as plain "hello" for this trivial case.

Performance Considerations:
• Compiler may simplify constant f-strings.

Examples:
• f"{'hello'}" == "hello".

Notes:
• Useless f-prefix here; plain string suffices in production.""",
    # Q44 len in f-string
    """• len('abc') runs inside braces; result 3 converts to str in the outer f-string.
• Nested calls are normal Python expressions.

How It Works:
• len returns int; f-string converts to decimal str.

Step-by-Step Execution:
1. len('abc') -> 3.
2. Embed "3".

Order of Operations:
• Inner call before formatting.

Common Use Cases:
• Showing counts inline in messages.

Edge Cases:
• len on non-sequence types follows their protocol.

Performance Considerations:
• Tiny cost.

Examples:
• f"{len('abc')}" -> "3".

Notes:
• Use !r if you need repr of the int for debugging clarity.""",
    # Q45 debug f-string x=
    """• f"{x=}" includes name, equals sign, and repr of value for quick debugging (Python 3.8+).
• Output contains "x=" prefix plus repr(x).

How It Works:
• Special FORMAT_DEBUG conversion builds debug text.

Step-by-Step Execution:
1. Evaluate x -> 42.
2. Build "x=" + repr(42) inside field.

Order of Operations:
• Loads x then debug format.

Common Use Cases:
• Print debugging without typing variable names twice.

Edge Cases:
• Expressions like f"{(a+b)=}" also supported.

Performance Considerations:
• repr may be slower for huge objects.

Examples:
• f"{x=}" substring contains "42".

Notes:
• Strip for production logs; this is dev-oriented sugar.""",
    # Q46 format two braces
    """• str.format maps positional args left to right into {} placeholders.
• "{} {}".format("a","b") -> "a b".

How It Works:
• Parser builds format string; arguments fill slots.

Step-by-Step Execution:
1. Allocate template with two holes.
2. Substitute "a" then "b".

Order of Operations:
• format method call after string literal.

Common Use Cases:
• i18n message templates with reorderable fields.

Edge Cases:
• Too few args -> IndexError; too many ignored unless named.

Performance Considerations:
• Slower than f-string for local variables.

Examples:
• "{} {}".format("a","b") == "a b".

Notes:
• Prefer f-strings for static local formatting in 3.6+.""",
    # Q47 format positions swap
    """• Numeric fields {1} {0} reorder arguments without changing call order.
• "a" maps to {1}? Wait: {1} is second arg "b", {0} is first "a" -> "b a".

How It Works:
• Fields refer to argument index explicitly.

Step-by-Step Execution:
1. Map {1}-> "b".
2. Map {0}-> "a".
3. Concat with space.

Order of Operations:
• format resolves all fields from the argument tuple.

Common Use Cases:
• Different word orders in translated sentences.

Edge Cases:
• Duplicate indices allowed; same arg reused.

Performance Considerations:
• Similar to positional format cost.

Examples:
• "{1} {0}".format("a","b") == "b a".

Notes:
• Use keyword fields for readability with many args.""",
    # Q48 format keywords
    """• format(name="Alice", age=30) fills {name} and {age} by keyword.
• Order of kwargs does not matter.

How It Works:
• Each placeholder resolves against the keyword dict built from kwargs.

Step-by-Step Execution:
1. Bind name and age.
2. Interpolate into template.

Order of Operations:
• String format method evaluates kwargs dict first.

Common Use Cases:
• Readable templates with named holes.

Edge Cases:
• Missing name raises KeyError.

Performance Considerations:
• Dict lookup per name.

Examples:
• "{name} is {age}".format(name="Alice", age=30) -> "Alice is 30".

Notes:
• Combine with **dict to unpack existing mappings.""",
    # Q49 len format mini
    """• Inner "{:>10}".format("hi") right-aligns "hi" to width 10; len counts resulting length 10.
• Nesting str.format inside len mirrors f-string width checks.

How It Works:
• format builds padded str; len returns its character count.

Step-by-Step Execution:
1. Produce ten-char str with hi at right.
2. len -> 10.

Order of Operations:
• Inner format call before len.

Common Use Cases:
• Verifying column widths in pre-f-string codebases.

Edge Cases:
• If value longer than width, len may exceed width.

Performance Considerations:
• Two allocations: formatted string and len read.

Examples:
• len("{:>10}".format("hi")) == 10.

Notes:
• Modern code often writes len(f"{'hi':>10}") instead.""",
    # Q50 printf style %
    """• Old-style % formatting maps %s and %d using a tuple on the right; "age" then 25.
• Returns new str; types must match spec or you get TypeError.

How It Works:
• Mod operator on str triggers __mod__ with tuple; C-style printf semantics.

Step-by-Step Execution:
1. Parse format string for specs.
2. Convert args per %s and %d rules.
3. Concatenate pieces.

Order of Operations:
• Mod has lower precedence than many operators; parenthesize tuples.

Common Use Cases:
• Legacy code and SQL snippets (still prefer parameters for SQL safety).

Edge Cases:
• Single value can omit tuple in some cases; multiple need tuple.

Performance Considerations:
• Slightly slower than f-strings; still fine for tiny strings.

Examples:
• "%s is %d" % ("age", 25) -> "age is 25".

Notes:
• For new code prefer f-strings or str.format for clarity.""",
]


def main() -> None:
    path = Path(__file__).resolve().parents[1] / "src/data/questions/level1_intermediate_a.ts"
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
