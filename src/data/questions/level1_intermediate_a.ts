// --- LEVEL 1 INTERMEDIATE A: String Methods Deep-Dive & F-Strings - 50 TRULY UNIQUE QUESTIONS ---
// Topics: strip/lstrip/rstrip, is* methods, encode, maketrans/translate, expandtabs,
// removeprefix/removesuffix, string edge cases, escape sequences, raw strings, immutability,
// repr vs str, method chaining, f-string formatting, .format(), % formatting

export const level1IntermediateA = [
  // Q1: str.strip() — remove whitespace from both ends
  (_i: number) => ({
    q: `What is "  hello  ".strip()?`,
    o: ["hello", "  hello", "hello  ", "  hello  "],
    c: 0,
    e: "strip() removes whitespace from both ends of a string.",
    de: `The strip() method returns a new string with all leading and trailing whitespace removed. It does not modify the original string (strings are immutable in Python).

Key Concepts:
• strip() removes spaces, tabs, newlines, and other whitespace from both ends
• It does NOT remove whitespace in the middle of the string
• lstrip() removes only from the left; rstrip() removes only from the right
• strip() can also accept a chars argument to strip specific characters

Example: "  hello  ".strip() returns "hello" — the two leading and two trailing spaces are removed, but the string content is untouched.

Key Distinctions:
• strip() trims from both ends; default removes all Unicode whitespace, not only spaces.
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
• "  hi  ".strip() -> "hi"; "\n\t".strip() -> "".

Notes:
• Pass a chars string to strip a custom character set from both ends.`
  }),
  // Q2: str.lstrip() — remove left whitespace only
  (_i: number) => ({
    q: `What is "  hello  ".lstrip()?`,
    o: ["hello  ", "  hello", "hello", "  hello  "],
    c: 0,
    e: "lstrip() removes whitespace from the left (beginning) only.",
    de: `The lstrip() method (left-strip) removes leading whitespace characters from the beginning of a string, leaving trailing whitespace intact.

Key Concepts:
• "l" in lstrip stands for "left"
• Only the left side (beginning) is stripped
• The trailing spaces remain: "  hello  ".lstrip() → "hello  "
• Useful when processing lines from files where left indentation needs removal

Example: "  hello  " has 2 leading and 2 trailing spaces. lstrip() removes only the 2 leading spaces, resulting in "hello  " (with trailing spaces still present).

Key Distinctions:
• lstrip() removes leading whitespace only; trailing spaces remain part of the result.
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
• lstrip("x") removes any of those characters from the left, not a substring prefix.`
  }),
  // Q3: str.rstrip() — remove right whitespace only
  (_i: number) => ({
    q: `What is "  hello  ".rstrip()?`,
    o: ["  hello", "hello  ", "hello", "  hello  "],
    c: 0,
    e: "rstrip() removes whitespace from the right (end) only.",
    de: `The rstrip() method (right-strip) removes trailing whitespace characters from the end of a string, leaving leading whitespace intact.

Key Concepts:
• "r" in rstrip stands for "right"
• Only the right side (end) is stripped
• The leading spaces remain: "  hello  ".rstrip() → "  hello"
• Commonly used to remove trailing newlines from file lines

Example: "  hello  " has 2 leading and 2 trailing spaces. rstrip() removes only the 2 trailing spaces, resulting in "  hello" (with leading spaces still present).

Key Distinctions:
• rstrip() trims the right end only; leading spaces stay.
• Often paired with line reads to drop trailing "\n" without touching indentation.

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
• For Windows CRLF lines, rstrip("\r") may still be needed after rstrip().`
  }),
  // Q4: str.strip(chars) — strip specific characters
  (_i: number) => ({
    q: `What is "xxhelloxx".strip("x")?`,
    o: ["hello", "xxhello", "helloxx", "xxhelloxx"],
    c: 0,
    e: "strip(chars) removes the specified characters from both ends.",
    de: `When you pass an argument to strip(), it removes all occurrences of those characters from both ends of the string (not just the exact sequence — it strips any character that appears in the argument).

Key Concepts:
• strip("x") removes all 'x' characters from both ends
• The argument is treated as a SET of characters, not a substring
• strip("xy") would remove any 'x' or 'y' from both ends
• Characters in the middle are never affected
• The stripping stops at the first character NOT in the set

Example: "xxhelloxx".strip("x") strips all 'x' from both ends → "hello". Note: "xyhelloxy".strip("xy") would also give "hello" since both x and y are stripped.

Key Distinctions:
• strip(chars) treats chars as a set of code points to peel from both ends, not a substring.
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
• strip("xy") removes any mix of x and y from each end, not the literal "xy".`
  }),
  // Q5: str.encode() — returns bytes object
  (_i: number) => ({
    q: `What is type("abc".encode()).__name__?`,
    o: ["bytes", "str", "list", "bytearray"],
    c: 0,
    e: "encode() converts a string to a bytes object using the specified encoding.",
    de: `The encode() method converts a string into a bytes object. By default, it uses UTF-8 encoding. Bytes objects represent raw binary data and are prefixed with b in Python.

Key Concepts:
• "abc".encode() returns b'abc' — a bytes object
• type(b'abc') is <class 'bytes'>, so __name__ is "bytes"
• Default encoding is UTF-8: "abc".encode() is the same as "abc".encode("utf-8")
• To convert back: b'abc'.decode() returns "abc"
• Bytes are essential for file I/O, network communication, and binary data processing

Example: "abc".encode() → b'abc'. The b prefix indicates it's a bytes object, not a string. type(b'abc').__name__ is "bytes".

Key Distinctions:
• __name__ on a type object is the short string name ("bytes"), not the repr with angle brackets.
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
• Prefer isinstance(x, bytes) at boundaries instead of name string checks.`
  }),
  // Q6: str.isdigit() — check if all digits
  (_i: number) => ({
    q: `What is "123".isdigit()?`,
    o: ["True", "False", "123", "Error"],
    c: 0,
    e: "isdigit() returns True if all characters in the string are digits.",
    de: `The isdigit() method returns True if all characters in the string are digit characters and the string is not empty. Regular digits 0-9 plus some Unicode digit characters (like superscripts ²) are considered digits.

Key Concepts:
• "123".isdigit() → True — all characters are digits
• "12.3".isdigit() → False — the dot is not a digit
• "".isdigit() → False — empty string returns False
• "-5".isdigit() → False — minus sign is not a digit
• "²".isdigit() → True — Unicode superscripts count as digits

Example: "123" contains only digit characters (1, 2, 3), so isdigit() returns True. If any non-digit character is present, it returns False.

Key Distinctions:
• isdigit() is True only if every character is a decimal digit per Unicode rules and the string is non-empty.
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
• For locale-aware parsing, prefer explicit normalization or decimal module.`
  }),
  // Q7: str.isalpha() — check if all alphabetic
  (_i: number) => ({
    q: `What is "hello3".isalpha()?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "isalpha() returns False because '3' is not an alphabetic character.",
    de: `The isalpha() method returns True only if ALL characters in the string are alphabetic letters and the string is not empty. Even one non-letter character makes it return False.

Key Concepts:
• "hello".isalpha() → True — all letters
• "hello3".isalpha() → False — '3' is not alphabetic
• "hello world".isalpha() → False — space is not alphabetic
• "".isalpha() → False — empty string returns False
• Unicode letters (é, ñ, etc.) are considered alphabetic

Example: "hello3" contains the digit '3', which is not a letter. Since isalpha() requires every character to be alphabetic, it returns False.

Key Distinctions:
• isalpha() requires every character to be a letter; one digit makes the whole call False.
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
• Accented letters usually count as alphabetic in Unicode builds.`
  }),
  // Q8: str.isalnum() — check if alphanumeric
  (_i: number) => ({
    q: `What is "hello3".isalnum()?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "isalnum() returns True because all characters are letters or digits.",
    de: `The isalnum() method returns True if all characters are alphanumeric (either letters or digits) and the string is not empty. It combines the checks of isalpha() and isdigit().

Key Concepts:
• "hello3".isalnum() → True — all chars are letters or digits
• "hello".isalnum() → True — all letters count as alphanumeric
• "123".isalnum() → True — all digits count as alphanumeric
• "hello 3".isalnum() → False — space is not alphanumeric
• "hello!".isalnum() → False — '!' is not alphanumeric

Example: "hello3" has letters (h,e,l,l,o) and a digit (3). Since every character is either a letter or a digit, isalnum() returns True. Compare: isalpha() would return False for the same string.

Key Distinctions:
• isalnum() is True when every character is either a letter or a digit — no spaces or symbols.
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
• For Python identifiers use str.isidentifier() instead of isalnum().`
  }),
  // Q9: str.isspace() — check if all whitespace
  (_i: number) => ({
    q: `What is "   ".isspace()?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "isspace() returns True because all characters are whitespace.",
    de: `The isspace() method returns True if all characters in the string are whitespace characters and the string is not empty. Whitespace includes spaces, tabs, newlines, carriage returns, and other Unicode whitespace.

Key Concepts:
• "   ".isspace() → True — all spaces
• " \\t\\n".isspace() → True — space, tab, newline are all whitespace
• "".isspace() → False — empty string returns False
• " a ".isspace() → False — 'a' is not whitespace
• "\\n".isspace() → True — newline is whitespace

Example: "   " contains three space characters. Since every character is whitespace, isspace() returns True.

Key Distinctions:
• isspace() requires the string be non-empty and every code point be whitespace (Zs, Zl, Zp, etc.).
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
• "\u00a0" (non-breaking space) often counts as whitespace.

Performance Considerations:
• O(n); fails fast on first non-space.

Examples:
• "   ".isspace() -> True; " \t\n".isspace() -> True.

Notes:
• Do not confuse with str.strip() which removes; isspace() only tests.`
  }),
  // Q10: str.isnumeric() — Unicode numeric check
  (_i: number) => ({
    q: `What is "²".isnumeric()?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "isnumeric() returns True for Unicode numeric characters including superscripts.",
    de: `The isnumeric() method returns True if all characters are numeric characters. It is broader than isdigit(): it accepts superscripts (²), fractions (½), Roman numerals, and other Unicode numeric characters.

Key Concepts:
• "²" (superscript 2) — isnumeric() → True, isdigit() → True, isdecimal() → False
• "½" (fraction) — isnumeric() → True, isdigit() → False, isdecimal() → False
• The hierarchy: isdecimal() ⊂ isdigit() ⊂ isnumeric()
• isdecimal: only 0-9 (and equivalents in other scripts)
• isdigit: isdecimal + superscripts, subscripts
• isnumeric: isdigit + fractions, Roman numerals, etc.

Example: "²" is the Unicode superscript two character. It is considered numeric by isnumeric() and a digit by isdigit(), but not a decimal character by isdecimal().

Key Distinctions:
• isnumeric() is the broadest numeric category: superscripts, fractions, and many Unicode numerals count.
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
• Hierarchy: isdecimal() subset of isdigit() subset of isnumeric() for typical Western digits.`
  }),
  // Q11: str.isdecimal() — strictest numeric check
  (_i: number) => ({
    q: `What is "²".isdecimal()?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "isdecimal() returns False because ² is a superscript, not a decimal digit.",
    de: `The isdecimal() method is the strictest of the three numeric checks. It returns True only for characters that can form decimal-radix numbers (0-9 and their equivalents in other scripts like Arabic-Indic digits).

Key Concepts:
• "²" — isdecimal() → False (superscript, not a decimal digit)
• "²" — isdigit() → True (superscripts count as digits)
• "9".isdecimal() → True (regular digit)
• "٣".isdecimal() → True (Arabic-Indic digit 3)
• Hierarchy: isdecimal ⊂ isdigit ⊂ isnumeric

Example: The superscript character "²" is recognized as a digit (isdigit → True) and as numeric (isnumeric → True), but NOT as a decimal character (isdecimal → False). Only standard decimal digits like "0" through "9" return True for isdecimal().

Key Distinctions:
• isdecimal() is the strictest: only true decimal digits (and compatibles) pass; superscript two fails here.
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
• When all three predicates matter, test in order: decimal -> digit -> numeric.`
  }),
  // Q12: str.isidentifier() — valid Python identifier
  (_i: number) => ({
    q: `What is "2name".isidentifier()?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "isidentifier() returns False because Python identifiers cannot start with a digit.",
    de: `The isidentifier() method checks if a string is a valid Python identifier (variable name, function name, etc.). Python identifiers must start with a letter or underscore, followed by letters, digits, or underscores.

Key Concepts:
• "2name" → False — starts with a digit, invalid identifier
• "name2" → True — starts with a letter, digits allowed after
• "_private" → True — underscore is a valid start
• "my_var" → True — underscores allowed anywhere
• "class" → True — isidentifier doesn't check reserved words
• "".isidentifier() → False — empty string is invalid
• Use keyword.iskeyword() to also check for reserved words

Example: "2name" starts with the digit '2'. Python identifiers cannot start with digits, so isidentifier() returns False. Compare: "name2".isidentifier() returns True.

Key Distinctions:
• isidentifier() mirrors lexical rules: start with Unicode XID_Start, continue with XID_Continue; reserved words still return True syntactically.
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
• Valid identifier text is necessary but not sufficient for choosing a safe public API name.`
  }),
  // Q13: maketrans() + translate() — character mapping
  (_i: number) => ({
    q: `t = str.maketrans("aeiou", "12345")\nWhat is "hello".translate(t)?`,
    o: ["h2ll4", "12ll4", "hello", "h1ll5"],
    c: 0,
    e: "maketrans maps a→1, e→2, i→3, o→4, u→5. In 'hello': e→2, o→4.",
    de: `str.maketrans() creates a translation table that maps characters to replacements. translate() applies that table to every character in the string.

Key Concepts:
• maketrans("aeiou", "12345") creates: a→1, e→2, i→3, o→4, u→5
• translate() replaces each character found in the table
• Characters NOT in the table remain unchanged
• In "hello": h(unchanged), e→2, l(unchanged), l(unchanged), o→4
• Result: "h2ll4"
• maketrans can also accept a dict: str.maketrans({"a": "1", "e": "2"})
• A third argument to maketrans specifies characters to delete

Example: The translation table maps vowels to numbers. Applying it to "hello": h stays h, e becomes 2, both l's stay l, o becomes 4 → "h2ll4".

Key Distinctions:
• str.maketrans builds a translation table; translate applies 1:1 code point swaps per that mapping.
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
• For regex-level patterns use re.sub, not translate.`
  }),
  // Q14: str.expandtabs() — tab to spaces
  (_i: number) => ({
    q: `What is len("a\\tb".expandtabs(4))?`,
    o: ["5", "4", "6", "3"],
    c: 0,
    e: "expandtabs(4) replaces the tab with spaces up to the next tab stop at position 4.",
    de: `The expandtabs() method replaces tab characters with spaces, using tab stops at regular intervals. With tabsize=4, tab stops are at positions 0, 4, 8, 12, etc.

Key Concepts:
• "a\\tb" — 'a' is at position 0, '\\t' is at position 1
• Next tab stop after position 1 is position 4
• So the tab becomes 3 spaces (positions 1, 2, 3)
• Result: "a   b" (a + 3 spaces + b = 5 characters)
• Default tabsize is 8 if not specified
• Tab expansion considers the current column position, not just replacing with N spaces

Example: "a\\tb".expandtabs(4) → "a   b". The 'a' occupies position 0. The tab at position 1 expands to fill up to position 4 (3 spaces). Then 'b' goes at position 4. Total length: 5.

Key Distinctions:
• expandtabs replaces U+0009 tab with spaces up to the next tab stop column; len then counts final code points.
• Tab stops every n columns (here 4) affect how many spaces replace one tab.

How It Works:
• Walks the string expanding tabs; each tab may become 1..tabsize spaces depending on column.

Step-by-Step Execution:
1. expandtabs(4) on "a\tb" yields a string with tab expanded.
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
• Typical "a\tb" with tabsize 4 often yields length 5 — verify on your interpreter.

Notes:
• Mixing tabs and spaces is fragile; prefer spaces-only style in new code.`
  }),
  // Q15: str.removeprefix() (Python 3.9+)
  (_i: number) => ({
    q: `What is "HelloWorld".removeprefix("Hello")?`,
    o: ["World", "HelloWorld", "Hello", "Error"],
    c: 0,
    e: "removeprefix() removes the specified prefix if the string starts with it.",
    de: `The removeprefix() method (added in Python 3.9) removes a prefix from the beginning of a string. If the string doesn't start with the prefix, it returns the original string unchanged.

Key Concepts:
• "HelloWorld".removeprefix("Hello") → "World"
• If prefix not found: "HelloWorld".removeprefix("Hi") → "HelloWorld" (unchanged)
• Unlike lstrip(), removeprefix() treats the argument as a whole substring, not a set of characters
• lstrip("Hello") would remove any H, e, l, o from the left — very different behavior!
• removeprefix() was added because lstrip() was commonly misused for prefix removal

Example: "HelloWorld" starts with "Hello", so removeprefix("Hello") returns the remaining part: "World".

Key Distinctions:
• removeprefix(prefix) removes one leading occurrence of prefix if present; no error if missing (Python 3.9+).
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
• For older Python use s[len(p):] if s.startswith(p) else s.`
  }),
  // Q16: str.removesuffix() (Python 3.9+)
  (_i: number) => ({
    q: `What is "HelloWorld".removesuffix("World")?`,
    o: ["Hello", "World", "HelloWorld", "Error"],
    c: 0,
    e: "removesuffix() removes the specified suffix if the string ends with it.",
    de: `The removesuffix() method (added in Python 3.9) removes a suffix from the end of a string. If the string doesn't end with the suffix, it returns the original string unchanged.

Key Concepts:
• "HelloWorld".removesuffix("World") → "Hello"
• If suffix not found: "HelloWorld".removesuffix("Earth") → "HelloWorld" (unchanged)
• Unlike rstrip(), removesuffix() treats the argument as a whole substring, not a set of characters
• rstrip("World") would remove any W, o, r, l, d from the right — very different!
• removesuffix() pairs with removeprefix() — both added in Python 3.9

Example: "HelloWorld" ends with "World", so removesuffix("World") returns the remaining part: "Hello".

Key Distinctions:
• removesuffix(suffix) trims one trailing occurrence when the string endswith it.
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
• Do not confuse with rstrip(chars), which removes any of those characters repeatedly.`
  }),
  // Q17: String multiplication edge cases
  (_i: number) => ({
    q: `What is "" * 5 == "a" * 0?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: 'Both "" * 5 and "a" * 0 produce an empty string "".',
    de: `String multiplication with edge cases: multiplying any string by 0 gives an empty string, and multiplying an empty string by any number also gives an empty string.

Key Concepts:
• "" * 5 → "" (empty string repeated 5 times is still empty)
• "a" * 0 → "" (any string repeated 0 times is empty)
• Both results are "" (empty string)
• "" == "" → True
• "a" * -1 → "" (negative repetition also gives empty string)
• These are consistent with the mathematical concept of multiplication by zero

Example: "" * 5 produces "" and "a" * 0 produces "". Since both are the empty string, the equality comparison returns True.

Key Distinctions:
• str repetition uses * with int; empty string times any finite n is still "".
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
• Use join for many pieces instead of repeated + in hot loops.`
  }),
  // Q18: Lexicographic string comparison
  (_i: number) => ({
    q: `What is "abc" < "abd"?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "Strings are compared lexicographically: 'c' < 'd' at position 2.",
    de: `Python compares strings lexicographically (character by character using Unicode code points). It compares characters at each position until a difference is found.

Key Concepts:
• "abc" vs "abd": a==a, b==b, c<d → "abc" < "abd" is True
• Comparison uses Unicode code points: ord('c')=99, ord('d')=100
• Shorter strings are "less than" longer strings if the prefix matches: "abc" < "abcd"
• Uppercase letters come before lowercase: "A" < "a" (ord('A')=65, ord('a')=97)
• Empty string is less than any non-empty string: "" < "a" is True

Example: Comparing "abc" and "abd" character by character: 'a'=='a', 'b'=='b', then 'c' < 'd' (99 < 100). Since the first differing character in "abc" is less, "abc" < "abd" is True.

Key Distinctions:
• str comparison uses lexicographic order of code points (Unicode code units in CPython 3 for BMP).
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
• Locale-aware sorting needs locale.strxfrm or PyICU, not raw <.`
  }),
  // Q19: Escape sequences — \n in strings
  (_i: number) => ({
    q: `What is len("a\\nb")?`,
    o: ["3", "4", "2", "5"],
    c: 0,
    e: "\\n is a single newline character, so 'a', newline, 'b' = 3 characters.",
    de: `Escape sequences in Python strings represent special characters using a backslash followed by a character. The sequence \\n represents a single newline character, even though it's written as two characters in source code.

Key Concepts:
• \\n → newline (1 character)
• \\t → tab (1 character)
• \\\\ → literal backslash (1 character)
• "a\\nb" contains 3 characters: 'a', newline, 'b'
• The backslash-n is NOT two separate characters in the string
• Use repr() to see escape sequences: repr("a\\nb") → "'a\\\\nb'"

Example: "a\\nb" looks like 4 characters in source code, but \\n is a single newline character. So the string has exactly 3 characters: 'a', the newline character, and 'b'. len("a\\nb") → 3.

Key Distinctions:
• Ordinary string literal: backslash-n is a single newline character; len counts that as one.
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
• Windows "\r\n" in a literal is two characters unless using universal newlines in reads.

Performance Considerations:
• O(1) len for str in CPython (cached size).

Examples:
• len("a\nb") == 3.

Notes:
• Contrast with raw strings where backslash is literal.`
  }),
  // Q20: Raw strings — r"\n" vs "\n"
  (_i: number) => ({
    q: `In Python, what is len(r"\\n")?`,
    o: ["2", "1", "3", "Error"],
    c: 0,
    e: "In a raw string r\"\\n\", the backslash is literal, giving 2 characters: \\ and n.",
    de: `Raw strings (prefixed with r or R) treat backslashes as literal characters instead of escape sequence initiators. This means \\n in a raw string is two separate characters (backslash and 'n'), not a newline.

Key Concepts:
• r"\\n" → 2 characters: '\\' and 'n'
• "\\n" → 1 character: newline
• Raw strings are commonly used for regex patterns and Windows file paths
• r"C:\\Users\\name" → the backslashes are literal (no need to double them)
• A raw string cannot end with an odd number of backslashes: r"\\" is invalid

Example: len("\\n") returns 1 (one newline character), but len(r"\\n") returns 2 (a literal backslash followed by the letter 'n'). The r prefix disables escape sequence processing.

Key Distinctions:
• Raw string prefix r keeps backslash as literal; r"\n" is backslash + n, two characters.
• len is 2, not counting a newline.

How It Works:
• Raw string lexer rules: most escapes are disabled; len counts literal chars.

Step-by-Step Execution:
1. Build str with '\' and 'n'.
2. len -> 2.

Order of Operations:
• r prefix applies before escape processing for normal rules.

Common Use Cases:
• Regex patterns and Windows paths where backslashes must survive.

Edge Cases:
• r"\"" still ends the string; quote rules remain.

Performance Considerations:
• Same len cost as any short str.

Examples:
• len(r"\n") == 2 in the quiz stem sense (two-char backslash-n sequence).

Notes:
• Compare with ordinary "\\n" vs r"\\n" carefully when counting.`
  }),
  // Q21: Multi-line triple-quoted f-string
  (_i: number) => ({
    q: `result = f"""{'A'}\n{'B'}"""\nWhat is len(result)?`,
    o: ["3", "2", "4", "Error"],
    c: 0,
    e: "The triple-quoted f-string produces 'A', newline, 'B' = 3 characters.",
    de: `F-strings can use triple quotes (\"\"\" or ''') to span multiple lines. The newline between the lines becomes a literal newline character in the result.

Key Concepts:
• Triple-quoted f-strings preserve line breaks as newline characters
• f\"\"\"{'A'}(newline){'B'}\"\"\" produces the string "A\\nB"
• 'A' is 1 char, newline is 1 char, 'B' is 1 char → total 3
• Expressions in {} are evaluated as usual inside triple-quoted f-strings
• Triple-quoted strings are useful for templates and multi-line output

Example: The f-string evaluates {'A'} to "A" and {'B'} to "B", with a literal newline between them. The result is "A\\nB" with length 3.

Key Distinctions:
• Triple-quoted f-string builds text with embedded expressions; newlines inside the literal add to length.
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
• Count includes every '\n' inserted by the template layout.

Notes:
• Use repr(s) when debugging to see exact escapes.`
  }),
  // Q22: String immutability — assignment to index
  (_i: number) => ({
    q: `s = "hello"\ns[0] = "H"\nWhat happens?`,
    o: ["TypeError", "s becomes 'Hello'", "s becomes 'H'", "None"],
    c: 0,
    e: "Strings are immutable in Python — you cannot assign to an index.",
    de: `Strings in Python are immutable sequences. Once a string is created, you cannot modify its individual characters. Attempting to assign to an index raises a TypeError.

Key Concepts:
• s[0] = "H" raises TypeError: 'str' object does not support item assignment
• To "modify" a string, you must create a new one: s = "H" + s[1:]
• Immutability means string methods always return NEW strings
• Lists are mutable (support item assignment), but strings are not
• This design choice enables string interning and hash-based optimizations

Example: s = "hello"; s[0] = "H" raises TypeError because strings don't support item assignment. To get "Hello", you would write s = "H" + s[1:] or s = s.replace("h", "H", 1).

Key Distinctions:
• str objects do not support item assignment; s[0] = "H" raises TypeError.
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
• Build new str: s = "H" + s[1:] instead of mutating.`
  }),
  // Q23: str() conversion on a list
  (_i: number) => ({
    q: `What is str([1, 2])?`,
    o: ["[1, 2]", "12", "[1,2]", "Error"],
    c: 0,
    e: "str() on a list produces its string representation including brackets and spaces.",
    de: `The str() function converts any Python object to its string representation. For lists, this produces a string that looks exactly like how the list would appear in the Python REPL, including brackets, commas, and spaces.

Key Concepts:
• str([1, 2]) → "[1, 2]" (note the space after the comma)
• str((1,)) → "(1,)" (tuple with trailing comma)
• str({"a": 1}) → "{'a': 1}" (dict representation)
• str() calls the object's __str__ method internally
• The result is a human-readable string representation

Example: str([1, 2]) returns the string "[1, 2]" — this includes the brackets, the comma, and the space after the comma, exactly as Python displays lists.

Key Distinctions:
• str() calls the object's __str__ or falls back to repr-like display for containers.
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
• For CSV-safe output use join and explicit formatting.`
  }),
  // Q24: repr() vs str() — quoted output
  (_i: number) => ({
    q: `What is repr("hello")?`,
    o: ["'hello'", "hello", "\"hello\"", "Error"],
    c: 0,
    e: "repr() returns a string representation with quotes, showing how to recreate the object.",
    de: `repr() returns an "official" string representation of an object — one that ideally could be used to recreate the object. For strings, repr() adds quotes around the value.

Key Concepts:
• str("hello") → "hello" (human-readable, no quotes)
• repr("hello") → "'hello'" (includes quotes, shows it's a string)
• repr() is what you see in the interactive Python shell
• repr() is useful for debugging — it shows the exact value
• For numbers: str(42) == repr(42) == "42" (no difference)
• For strings: str shows content, repr shows content WITH quotes

Example: repr("hello") returns the string 'hello' (with single quotes included in the string). This is 7 characters: ', h, e, l, l, o, '. Compare: str("hello") returns hello (5 characters, no quotes).

Key Distinctions:
• repr aims at a string that round-trips through eval-ish contexts; adds quotes for str.
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
• str() is human-friendly; repr() is interpreter-friendly.`
  }),
  // Q25: Method chaining — strip then lower
  (_i: number) => ({
    q: `What is "  Hello  ".strip().lower()?`,
    o: ["hello", "Hello", "  hello  ", "HELLO"],
    c: 0,
    e: "strip() removes spaces → 'Hello', then lower() converts → 'hello'.",
    de: `Method chaining calls multiple string methods in sequence. Each method returns a new string, and the next method is called on that result.

Key Concepts:
• "  Hello  ".strip() → "Hello" (removes leading/trailing spaces)
• "Hello".lower() → "hello" (converts to lowercase)
• Combined: "  Hello  ".strip().lower() → "hello"
• Methods are evaluated left to right
• Each method returns a new string (strings are immutable)
• You can chain as many methods as needed: "  HELLO  ".strip().lower().capitalize()

Example: First, strip() removes the spaces to give "Hello". Then lower() is called on "Hello" to give "hello". The chain processes step by step from left to right.

Key Distinctions:
• Method chaining left to right: strip() returns new str, then lower() on that result.
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
• For storage keys consider casefold() for aggressive normalization.`
  }),
  // Q26: f-string with arithmetic expression
  (_i: number) => ({
    q: `What is f"{2 + 3}"?`,
    o: ["5", "2 + 3", "23", "Error"],
    c: 0,
    e: "Expressions inside f-string {} are evaluated: 2 + 3 = 5, converted to string.",
    de: `F-strings (formatted string literals, prefixed with f) evaluate expressions inside curly braces {} and insert the result into the string.

Key Concepts:
• f"{2 + 3}" evaluates 2 + 3 = 5, then converts to string "5"
• Any valid Python expression can go inside {}
• The expression is evaluated at runtime
• The result is automatically converted to a string via str()
• f-strings were introduced in Python 3.6

Example: f"{2 + 3}" — Python evaluates the expression 2 + 3 to get 5, converts it to the string "5", and inserts it into the f-string. The result is the string "5".

Key Distinctions:
• Braces in f-strings evaluate expressions; 2+3 runs before formatting.
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
• Use = debug syntax (f"{x=}") when teaching introspection.`
  }),
  // Q27: f-string with method call inside
  (_i: number) => ({
    q: `What is f"{'hello'.upper()}"?`,
    o: ["HELLO", "hello", "'hello'.upper()", "Error"],
    c: 0,
    e: "The method call inside {} is evaluated: 'hello'.upper() → 'HELLO'.",
    de: `F-string expressions can contain method calls. The method is called and its return value is inserted into the string.

Key Concepts:
• f"{'hello'.upper()}" calls 'hello'.upper() which returns 'HELLO'
• The result 'HELLO' is inserted into the f-string
• Any method that returns a value can be used inside {}
• f"{' hi '.strip()}" → "hi"
• f"{'abc'.replace('a','x')}" → "xbc"

Example: Inside the f-string braces, 'hello'.upper() is evaluated. The upper() method returns "HELLO", which becomes the content of the f-string. Result: "HELLO".

Key Distinctions:
• Nested expressions allow method calls inside braces; 'hello'.upper() runs first.
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
• Keep nesting shallow for clarity.`
  }),
  // Q28: f-string with ternary conditional
  (_i: number) => ({
    q: `What is f"{'even' if 4%2==0 else 'odd'}"?`,
    o: ["even", "odd", "True", "Error"],
    c: 0,
    e: "4%2 is 0, which equals 0, so the condition is True → 'even'.",
    de: `F-strings can contain conditional (ternary) expressions. The format is: value_if_true if condition else value_if_false.

Key Concepts:
• 4 % 2 == 0 → 0 == 0 → True
• Since True: the expression evaluates to 'even'
• f"{'even' if True else 'odd'}" → "even"
• The ternary expression is fully evaluated before insertion
• This is a powerful way to format context-dependent output

Example: 4 % 2 gives 0 (4 is evenly divisible by 2). 0 == 0 is True. So the conditional picks 'even', and f"{'even' if 4%2==0 else 'odd'}" returns "even".

Key Distinctions:
• Ternary if/else inside braces picks a branch; only the chosen subexpression runs.
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
• For i18n avoid hard-coded English branches inside f-strings.`
  }),
  // Q29: f-string float formatting — .2f
  (_i: number) => ({
    q: `What is f"{3.14159:.2f}"?`,
    o: ["3.14", "3.15", "3.1", "3.14159"],
    c: 0,
    e: ":.2f formats the float to 2 decimal places, rounding: 3.14159 → 3.14.",
    de: `F-strings support format specifiers after a colon inside the braces. The .2f specifier formats a number as a fixed-point decimal with 2 places after the decimal point.

Key Concepts:
• :.2f → 2 decimal places, fixed-point notation
• 3.14159 rounded to 2 decimal places → 3.14 (the 1 after 4 rounds down)
• :.0f → no decimal places (rounds to integer)
• :.4f → 4 decimal places: "3.1416" (note rounding)
• The f stands for "fixed-point" notation

Example: f"{3.14159:.2f}" formats 3.14159 with exactly 2 decimal places. The third decimal digit (1) is less than 5, so it rounds down: result is "3.14".

Key Distinctions:
• Format spec .2f rounds to two digits after the decimal for float; ties use bankers rounding in modern Python.
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
• Locale-aware separators need different spec or Babel.`
  }),
  // Q30: f-string integer formatting — zero-padded
  (_i: number) => ({
    q: `What is f"{42:05d}"?`,
    o: ["00042", "42000", "42", "0042"],
    c: 0,
    e: ":05d means minimum 5 digits wide, zero-padded: 42 → 00042.",
    de: `The format specifier :05d formats an integer with zero-padding to a minimum width of 5 characters.

Key Concepts:
• 0 → fill character (pad with zeros)
• 5 → minimum width (5 characters total)
• d → decimal integer format
• 42 has 2 digits, needs 3 leading zeros to reach width 5: "00042"
• Without the 0: f"{42:5d}" → "   42" (space-padded)
• This is commonly used for file names, IDs, timestamps

Example: f"{42:05d}" — the integer 42 is formatted as a 5-character-wide string, padded with leading zeros. Result: "00042".

Key Distinctions:
• Integer format 05d pads with zeros on the left to width 5 minimum.
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
• For arbitrary radix use b/x/o types instead of d.`
  }),
  // Q31: f-string right-align — width
  (_i: number) => ({
    q: `What is len(f"{'hi':>10}")?`,
    o: ["10", "2", "12", "8"],
    c: 0,
    e: ":>10 right-aligns 'hi' in a 10-character-wide field, total length is 10.",
    de: `The :>10 format specifier right-aligns the value within a field of width 10, padding with spaces on the left.

Key Concepts:
• > means right-align
• 10 is the total field width
• "hi" is 2 characters, so 8 spaces are added on the left
• Result: "        hi" (8 spaces + "hi" = 10 characters)
• len("        hi") → 10
• < means left-align, ^ means center

Example: f"{'hi':>10}" produces "        hi" — the string "hi" is pushed to the right side of a 10-character field, with 8 leading spaces. The total length is always 10.

Key Distinctions:
• Nested f-string first right-aligns "hi" in width 10, producing a ten-character str, then len counts 10.
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
• Use debug f"{s=}" to inspect intermediate widths while learning.`
  }),
  // Q32: f-string left-align — trailing space test
  (_i: number) => ({
    q: `x = f"{'hi':<10}"\nWhat is x.endswith("hi")?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "Left-aligned 'hi' has trailing spaces, so it does NOT end with 'hi'.",
    de: `The :<10 format specifier left-aligns the value within a 10-character field, padding with spaces on the right.

Key Concepts:
• < means left-align (this is the default for strings)
• "hi" is placed at the left, 8 spaces fill the right
• Result: "hi        " (hi + 8 trailing spaces)
• "hi        ".endswith("hi") → False (it ends with spaces)
• "hi        ".startswith("hi") → True
• Compare: :>10 would put spaces on the left

Example: f"{'hi':<10}" produces "hi        " (hi followed by 8 spaces). Since the string ends with spaces, not "hi", the endswith("hi") check returns False.

Key Distinctions:
• f"{'hi':<10}" left-aligns "hi" in width 10 with spaces on the right, so the last characters are spaces, not "hi".
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
• Compare with :>10 where spaces lead and endswith might succeed differently.`
  }),
  // Q33: f-string center-align — strip test
  (_i: number) => ({
    q: `x = f"{'hi':^10}"\nWhat is x.strip()?`,
    o: ["hi", "    hi    ", "hi    ", "    hi"],
    c: 0,
    e: "Center-aligned 'hi' has spaces on both sides; strip() removes them all.",
    de: `The :^10 format specifier centers the value within a 10-character field, padding equally with spaces on both sides.

Key Concepts:
• ^ means center-align
• "hi" is 2 characters, field is 10 → 8 spaces total, 4 on each side
• Result: "    hi    " (4 spaces + "hi" + 4 spaces)
• strip() removes all leading and trailing whitespace
• "    hi    ".strip() → "hi"

Example: f"{'hi':^10}" produces "    hi    " — "hi" centered in a 10-character field with 4 spaces on each side. Calling strip() removes all the padding spaces, leaving just "hi".

Key Distinctions:
• f"{'hi':^10}" centers with equal padding both sides; strip() then removes default whitespace from both ends.
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
• Use specific strip(chars) if fill is not whitespace.`
  }),
  // Q34: f-string fill character — star centering
  (_i: number) => ({
    q: `What is f"{'hi':*^10}"?`,
    o: ["****hi****", "**hi**", "hi********", "********hi"],
    c: 0,
    e: ":*^10 centers 'hi' in 10 chars, filling with * instead of spaces.",
    de: `The :*^10 format specifier uses * as the fill character, ^ for center alignment, and 10 for the total width.

Key Concepts:
• * → fill character (replaces default spaces)
• ^ → center alignment
• 10 → total width
• "hi" is 2 chars → 8 fill chars needed → 4 on each side
• Result: "****hi****"
• Any character can be a fill: :-^10 → "----hi----", :.^10 → "....hi...."
• Fill character must come before the alignment specifier

Example: f"{'hi':*^10}" — 'hi' (2 chars) is centered in a 10-character field, with 4 asterisks on each side: "****hi****".

Key Distinctions:
• Format fill character can be * with ^ for centering; width 10 surrounds "hi" with asterisks as needed.
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
• Fill must be exactly one character before alignment flag.`
  }),
  // Q35: f-string binary conversion
  (_i: number) => ({
    q: `What is f"{10:b}"?`,
    o: ["1010", "10", "0b1010", "1100"],
    c: 0,
    e: ":b formats the integer in binary. 10 in binary is 1010.",
    de: `The :b format specifier converts an integer to its binary representation (base 2), without the 0b prefix.

Key Concepts:
• 10 in binary: 8 + 2 = 1010
• f"{10:b}" → "1010" (no 0b prefix)
• f"{10:#b}" → "0b1010" (with 0b prefix using # flag)
• bin(10) → "0b1010" (built-in function includes prefix)
• :b only works with integers, not floats

Example: The decimal number 10 equals 1×8 + 0×4 + 1×2 + 0×1 = 1010 in binary. f"{10:b}" returns "1010" — just the binary digits without any prefix.

Key Distinctions:
• Format type b prints integer in binary with 0b prefix in formatted output rules for str.format/f-strings.
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
• Use '#b' if you need explicit 0b prefix per format mini-language.`
  }),
  // Q36: f-string hexadecimal conversion
  (_i: number) => ({
    q: `What is f"{255:x}"?`,
    o: ["ff", "FF", "0xff", "255"],
    c: 0,
    e: ":x formats the integer in lowercase hexadecimal. 255 = ff in hex.",
    de: `The :x format specifier converts an integer to its hexadecimal (base 16) representation using lowercase letters.

Key Concepts:
• 255 = 15×16 + 15 = ff in hex
• :x → lowercase hex: "ff"
• :X → uppercase hex: "FF"
• :#x → with prefix: "0xff"
• hex(255) → "0xff" (built-in includes prefix)
• Hex digits: 0-9 and a-f (or A-F for uppercase)

Example: 255 in hexadecimal is ff (15×16 + 15 = 255). f"{255:x}" returns "ff" using lowercase x format. Use :X for uppercase "FF".

Key Distinctions:
• x format emits hexadecimal lowercase without 0x unless alternate # specified.
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
• Prefix with 0x manually or use '#x'.`
  }),
  // Q37: f-string octal conversion
  (_i: number) => ({
    q: `What is f"{8:o}"?`,
    o: ["10", "8", "0o10", "100"],
    c: 0,
    e: ":o formats the integer in octal. 8 in octal is 10.",
    de: `The :o format specifier converts an integer to its octal (base 8) representation.

Key Concepts:
• 8 in octal: 1×8 + 0 = 10
• f"{8:o}" → "10" (no prefix)
• f"{8:#o}" → "0o10" (with 0o prefix using # flag)
• oct(8) → "0o10" (built-in includes prefix)
• Octal uses digits 0-7 only

Example: The decimal number 8 equals 1×8 + 0×1 = 10 in octal. f"{8:o}" returns "10". This can be confusing since "10" looks like decimal ten, but it represents octal ten (which is decimal 8).

Key Distinctions:
• o format prints base-8 representation without extra prefix unless alternate.
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
• Python 3 int literals use 0o10 syntax, separate from formatted output.`
  }),
  // Q38: f-string scientific notation
  (_i: number) => ({
    q: `What is f"{1234.5:e}"?`,
    o: ["1.234500e+03", "1234.5e0", "1.2345e3", "1.23e+03"],
    c: 0,
    e: ":e formats in scientific notation with 6 decimal places by default.",
    de: `The :e format specifier converts a number to scientific notation (exponential notation) with a lowercase 'e'. By default, it shows 6 digits after the decimal point.

Key Concepts:
• 1234.5 = 1.234500 × 10³
• Default precision is 6 digits after decimal: "1.234500e+03"
• :E uses uppercase E: "1.234500E+03"
• :.2e limits to 2 decimal places: "1.23e+03"
• The exponent always has a sign (+ or -) and at least 2 digits

Example: f"{1234.5:e}" converts 1234.5 to scientific notation. It becomes 1.234500 × 10³, displayed as "1.234500e+03" with the default 6 digits of precision.

Key Distinctions:
• e format uses scientific notation with mantissa and exponent for floats.
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
• Control precision with .4e etc.`
  }),
  // Q39: f-string thousands separator
  (_i: number) => ({
    q: `What is f"{1000000:,}"?`,
    o: ["1,000,000", "1000000", "1.000.000", "1 000 000"],
    c: 0,
    e: ":, adds commas as thousands separators.",
    de: `The :, format specifier adds comma separators for thousands, making large numbers more readable.

Key Concepts:
• f"{1000000:,}" → "1,000,000"
• Commas are inserted every 3 digits from the right
• Works with both integers and floats: f"{1234.56:,.2f}" → "1,234.56"
• For underscore separators: f"{1000000:_}" → "1_000_000"
• This is purely cosmetic — the number itself isn't changed

Example: f"{1000000:,}" inserts commas every three digits: "1,000,000". This makes the number much easier to read than "1000000".

Key Distinctions:
• comma option inserts thousands separators for int/float string form per locale-unaware rules (ASCII comma).
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
• For finance use Decimal quantize, not float comma only.`
  }),
  // Q40: f-string percentage formatting
  (_i: number) => ({
    q: `What is f"{0.75:.0%}"?`,
    o: ["75%", "0.75%", "75.0%", "0.75"],
    c: 0,
    e: ":% multiplies by 100 and adds %. .0 means no decimal places.",
    de: `The :% format specifier multiplies the number by 100 and appends a percent sign. The .0 precision means zero decimal places.

Key Concepts:
• 0.75 × 100 = 75 → "75%"
• :.0% → no decimal places: "75%"
• :.1% → one decimal place: "75.0%"
• :.2% → two decimal places: "75.00%"
• :% with default precision (6): "75.000000%"
• The multiplication by 100 is automatic

Example: f"{0.75:.0%}" — first multiplies 0.75 by 100 to get 75, formats with 0 decimal places, and appends %. Result: "75%".

Key Distinctions:
• % multiplies float by 100 and adds percent sign in the formatted output.
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
• Value is fractional; 1.0 is 100%.`
  }),
  // Q41: f-string with dictionary access
  (_i: number) => ({
    q: `d = {"a": 1}\nWhat is f"{d['a']}"?`,
    o: ["1", "a", "{'a': 1}", "Error"],
    c: 0,
    e: "d['a'] accesses the value 1 from the dictionary, which is inserted into the f-string.",
    de: `F-strings can contain dictionary access expressions. The key lookup is evaluated and the result is inserted into the string.

Key Concepts:
• d = {"a": 1} — a dictionary with key "a" and value 1
• d['a'] → 1
• f"{d['a']}" → "1" (the value is converted to string)
• You can use different quote styles: if f-string uses ", use ' for dict keys
• f"{d['a']}" works because the outer quotes are " and inner are '
• In Python 3.12+, you can even use the same quote style inside f-strings

Example: d['a'] looks up key "a" in the dictionary and returns 1. The f-string converts this to the string "1". Note the use of single quotes for the key inside double-quoted f-string.

Key Distinctions:
• Braces inside f-string can index mapping literals; d['a'] resolves during formatting.
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
• For user-controlled keys use .get to avoid crashes.`
  }),
  // Q42: f-string with list index
  (_i: number) => ({
    q: `lst = [10, 20, 30]\nWhat is f"{lst[1]}"?`,
    o: ["20", "10", "30", "Error"],
    c: 0,
    e: "lst[1] accesses index 1, which is 20. The f-string converts it to '20'.",
    de: `F-strings can contain list indexing expressions. The element at the specified index is retrieved and inserted into the string.

Key Concepts:
• lst = [10, 20, 30] — indices are 0, 1, 2
• lst[1] → 20 (second element, zero-indexed)
• f"{lst[1]}" → "20" (converted to string)
• Negative indices work too: f"{lst[-1]}" → "30"
• Slicing also works: f"{lst[0:2]}" → "[10, 20]"

Example: lst[1] retrieves the element at index 1 from the list [10, 20, 30], which is 20. The f-string converts this integer to the string "20".

Key Distinctions:
• lst[1] inside braces picks second element (20) for formatting.
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
• Prefer named variables over huge literals in f-strings for readability.`
  }),
  // Q43: f-string nested quotes — string literal inside
  (_i: number) => ({
    q: `What is f"{'hello'}"?`,
    o: ["hello", "'hello'", "Error", "None"],
    c: 0,
    e: "The string 'hello' inside {} is evaluated and inserted without extra quotes.",
    de: `F-strings evaluate the expression inside {} and insert the str() representation. A string literal 'hello' evaluates to the string hello — the quotes are syntax, not part of the value.

Key Concepts:
• f"{'hello'}" — the expression is the string literal 'hello'
• 'hello' evaluates to the string value hello (no quotes in the value)
• str("hello") → "hello" (no quotes)
• This is different from repr("hello") → "'hello'" (with quotes)
• You must use different quote styles: single quotes inside double-quoted f-string
• f"{'hello'}" → "hello", not "'hello'"

Example: Inside the f-string braces, 'hello' is a string literal that evaluates to the string hello. The f-string inserts this value, producing "hello" (without quotes).

Key Distinctions:
• f"{'hello'}" embeds a literal str unchanged; quotes nest carefully.
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
• Useless f-prefix here; plain string suffices in production.`
  }),
  // Q44: f-string with built-in function call
  (_i: number) => ({
    q: `What is f"{len('abc')}"?`,
    o: ["3", "abc", "len('abc')", "Error"],
    c: 0,
    e: "len('abc') returns 3, which is converted to the string '3'.",
    de: `F-strings can contain any valid Python expression, including built-in function calls. The function is called and its return value is inserted.

Key Concepts:
• len('abc') → 3
• f"{len('abc')}" → "3" (integer 3 converted to string)
• Any built-in function works: f"{max(1,2,3)}" → "3"
• f"{type(42).__name__}" → "int"
• The expression is fully evaluated before string conversion

Example: len('abc') counts the characters in 'abc' and returns 3. The f-string converts this integer to the string "3" and inserts it. Result: "3".

Key Distinctions:
• len('abc') runs inside braces; result 3 converts to str in the outer f-string.
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
• Use !r if you need repr of the int for debugging clarity.`
  }),
  // Q45: f-string self-documenting expression (= specifier)
  (_i: number) => ({
    q: `x = 42\nWhat is f"{x=}"?`,
    o: ["x=42", "42", "x42", "Error"],
    c: 0,
    e: "The = specifier in f-strings shows the expression text and its value: x=42.",
    de: `The = specifier (added in Python 3.8) is a debugging feature that shows both the expression text and its evaluated value. It's called the "self-documenting expression" or "debug" specifier.

Key Concepts:
• f"{x=}" → "x=42" (shows variable name, equals sign, and value)
• Useful for quick debugging: print(f"{x=}, {y=}")
• Works with expressions too: f"{x+1=}" → "x+1=43"
• Can combine with format specs: f"{x=:05d}" → "x=00042"
• The exact text of the expression is preserved in the output

Example: With x = 42, f"{x=}" produces "x=42". Python includes the literal text "x" from the source code, followed by "=", followed by the repr of the value (42). This is very handy for debugging.

Key Distinctions:
• f"{x=}" includes name, equals sign, and repr of value for quick debugging (Python 3.8+).
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
• Strip for production logs; this is dev-oriented sugar.`
  }),
  // Q46: str.format() — positional arguments
  (_i: number) => ({
    q: `What is "{} {}".format("a", "b")?`,
    o: ["a b", "ab", "{} {}", "a, b"],
    c: 0,
    e: "{} placeholders are filled in order: first 'a', then 'b'.",
    de: `The str.format() method replaces {} placeholders with the provided arguments, in order. This was the primary string formatting method before f-strings (Python 3.6).

Key Concepts:
• {} acts as a positional placeholder
• Arguments fill placeholders left to right
• "{} {}".format("a", "b") → "a" fills first {}, "b" fills second {}
• Result: "a b" (with the space between placeholders preserved)
• Extra arguments are ignored; missing arguments raise IndexError
• .format() was introduced in Python 2.6

Example: "{} {}" has two placeholders. The first {} is replaced by "a", the second by "b". The space between the braces is preserved, giving "a b".

Key Distinctions:
• str.format maps positional args left to right into {} placeholders.
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
• Prefer f-strings for static local formatting in 3.6+.`
  }),
  // Q47: str.format() — indexed arguments (swap order)
  (_i: number) => ({
    q: `What is "{1} {0}".format("a", "b")?`,
    o: ["b a", "a b", "1 0", "Error"],
    c: 0,
    e: "{1} gets 'b' (index 1), {0} gets 'a' (index 0) → 'b a'.",
    de: `Numbered placeholders in str.format() allow you to reference arguments by their index position, and in any order.

Key Concepts:
• {0} refers to the first argument, {1} to the second, etc.
• "{1} {0}".format("a", "b") → "b" first (index 1), then "a" (index 0)
• Result: "b a"
• You can reuse indices: "{0} {0}".format("hi") → "hi hi"
• Indexed and auto-numbered {} cannot be mixed in the same string
• This allows reordering arguments without changing the format() call

Example: "{1} {0}" swaps the order of arguments. "a" is at index 0 and "b" is at index 1. {1} picks "b", {0} picks "a", producing "b a".

Key Distinctions:
• Numeric fields {1} {0} reorder arguments without changing call order.
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
• Use keyword fields for readability with many args.`
  }),
  // Q48: str.format() — named arguments
  (_i: number) => ({
    q: `What is "{name} is {age}".format(name="Alice", age=30)?`,
    o: ["Alice is 30", "{name} is {age}", "Alice is age", "Error"],
    c: 0,
    e: "Named placeholders are replaced by their keyword arguments.",
    de: `Named placeholders in str.format() use keyword arguments for clarity and readability. Each {name} is replaced by the corresponding keyword argument.

Key Concepts:
• {name} is replaced by the name= keyword argument
• {age} is replaced by the age= keyword argument
• Result: "Alice is 30"
• Named placeholders make the template self-documenting
• You can mix positional and named: "{0} is {age}".format("Alice", age=30)
• Can also unpack a dictionary: "{name}".format(**{"name": "Alice"})

Example: "{name} is {age}".format(name="Alice", age=30) — {name} becomes "Alice" and {age} becomes "30" (integer 30 is converted to string). Result: "Alice is 30".

Key Distinctions:
• format(name="Alice", age=30) fills {name} and {age} by keyword.
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
• Combine with **dict to unpack existing mappings.`
  }),
  // Q49: str.format() — right-align padding
  (_i: number) => ({
    q: `What is len("{:>10}".format("hi"))?`,
    o: ["10", "2", "12", "8"],
    c: 0,
    e: ":>10 right-aligns 'hi' in a 10-character field, total length is 10.",
    de: `The format specifier :>10 inside str.format() works the same way as in f-strings — it right-aligns the value in a field of width 10.

Key Concepts:
• {:>10} → right-align in 10-character field
• "hi" is 2 characters → 8 spaces added on the left
• Result: "        hi" (8 spaces + "hi")
• len("        hi") → 10
• The format mini-language is the same for .format() and f-strings
• {:>10} in .format() is equivalent to f"{'hi':>10}"

Example: "{:>10}".format("hi") produces "        hi" — "hi" right-aligned in a 10-character field. The total length is 10, not 2 or 12.

Key Distinctions:
• Inner "{:>10}".format("hi") right-aligns "hi" to width 10; len counts resulting length 10.
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
• Modern code often writes len(f"{'hi':>10}") instead.`
  }),
  // Q50: % formatting — old-style string formatting
  (_i: number) => ({
    q: `What is "%s is %d" % ("age", 25)?`,
    o: ["age is 25", "%s is %d", "age is 25.0", "Error"],
    c: 0,
    e: "%s inserts the string 'age', %d inserts the integer 25.",
    de: `The % operator is Python's oldest string formatting method (inherited from C's printf). %s formats a string, %d formats a decimal integer.

Key Concepts:
• %s → string placeholder (calls str() on the argument)
• %d → decimal integer placeholder (truncates to int)
• % ("age", 25) → provides a tuple of values to fill placeholders
• Result: "age is 25"
• Other specifiers: %f (float), %x (hex), %o (octal)
• For a single value, parentheses are optional: "%s" % "hi" → "hi"
• This style is considered "old" — f-strings and .format() are preferred

Example: "%s is %d" % ("age", 25) — %s is replaced by "age" and %d is replaced by 25. The result is "age is 25". While this style still works, f-strings (f"{'age'} is {25}") are now preferred.

Key Distinctions:
• Old-style % formatting maps %s and %d using a tuple on the right; "age" then 25.
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
• For new code prefer f-strings or str.format for clarity.`
  }),
];
