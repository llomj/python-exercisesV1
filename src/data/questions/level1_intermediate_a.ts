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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
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

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) and similar operations or methods.
• Distinguish this operation or type from others that beginners might confuse (e.g. type() vs isinstance(), mutable vs immutable).

How It Works:
• Python evaluates the expression or literal first, then applies the operation (e.g. type(), method call, or built-in).
• The result is returned or produced according to the semantics of that operation.

Step-by-Step Execution:
1. Any literals or subexpressions in the expression are evaluated (e.g. the argument to type(), or the string before a method call).
2. The main operation is applied (type lookup, method invocation, or built-in function).
3. The operation completes and returns a value (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Method calls or function calls are evaluated: arguments are evaluated left to right, then the call is performed.
3. The operation completes and produces its return value.
4. No other operators or operands remain in this expression once the call finishes.
5. Display or use of the result happens after the full expression has been evaluated.

Common Use Cases:
• Checking types or results in the REPL; teaching the concept to beginners; validating data before use.
• Using this pattern in scripts to branch on type or to ensure correct behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, subclasses, encoding, or boundary conditions).
• Consider what happens with empty collections, missing keys, or invalid arguments where applicable.

Performance Considerations:
• The operation is typically fast at beginner scale; built-in types and methods are highly optimized in CPython.
• For hot paths, prefer isinstance() over type() when subclasses are allowed; avoid repeated type checks in tight loops when possible.

Examples:
• See the example(s) above; try the same pattern with related values or similar expressions to reinforce understanding.

Notes:
• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; refer to the official docs for full details.`
  }),
];
