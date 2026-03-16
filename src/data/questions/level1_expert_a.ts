// --- LEVEL 1 EXPERT A: Bytes, Encoding, ord/chr, None Deep-Dive — 50 TRULY UNIQUE QUESTIONS ---
export const level1ExpertA = [
  // ===== BYTES AND BYTEARRAY (1–20) =====

  // Q1
  (_i: number) => ({
    q: `What is type(b"hello")?`,
    o: ["<class 'bytes'>", "<class 'str'>", "<class 'bytearray'>", "<class 'list'>"],
    c: 0,
    e: "A bytes literal created with b\"...\" is of type bytes.",
    de: `The b prefix before a string literal creates a bytes object. Bytes represent raw binary data — a sequence of integers in the range 0–255.

Key Concepts:
• b"hello" is a bytes literal, not a string
• type(b"hello") returns <class 'bytes'>
• bytes objects are immutable sequences of integers
• Each element is an int (0–255), not a character

Common uses: file I/O, network communication, binary protocols, and encoding/decoding text.

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

  // Q2
  (_i: number) => ({
    q: `What is type(bytearray(b"hello"))?`,
    o: ["<class 'bytearray'>", "<class 'bytes'>", "<class 'str'>", "<class 'list'>"],
    c: 0,
    e: "bytearray() creates a mutable byte sequence.",
    de: `bytearray is the mutable counterpart of bytes. While bytes objects cannot be modified after creation, bytearray objects can be changed in place.

Key Concepts:
• bytearray(b"hello") creates a mutable copy of the bytes data
• type() returns <class 'bytearray'>
• You can assign to individual indices: ba[0] = 65
• Supports the same methods as bytes (upper, split, hex, etc.)

Use bytearray when you need to modify binary data in place, such as building network packets or manipulating file buffers.

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

  // Q3
  (_i: number) => ({
    q: `What is b"hello"[0]?`,
    o: ["104", "b'h'", "'h'", "Error"],
    c: 0,
    e: "Indexing bytes returns an integer, not a character.",
    de: `When you index a bytes object, you get an integer — the byte value at that position — not a single-byte bytes object.

Key Concepts:
• b"hello"[0] returns 104, because ord('h') == 104
• This differs from strings: "hello"[0] returns 'h'
• Slicing bytes returns bytes: b"hello"[0:1] returns b'h'
• Each byte is an int in range 0–255

This is a common source of confusion: indexing gives int, slicing gives bytes.

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

  // Q4
  (_i: number) => ({
    q: `What is b"hello"[1]?`,
    o: ["101", "b'e'", "'e'", "104"],
    c: 0,
    e: "b\"hello\"[1] is 101, the ASCII code for 'e'.",
    de: `Indexing bytes at position 1 returns the integer value of the second byte. In b"hello", the second character is 'e', and ord('e') == 101.

Key Concepts:
• b"hello"[0] = 104 (h), [1] = 101 (e), [2] = 108 (l), [3] = 108 (l), [4] = 111 (o)
• These are standard ASCII values
• Remember: bytes indexing always yields an int
• To get a single-byte bytes object, slice instead: b"hello"[1:2] → b'e'

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

  // Q5
  (_i: number) => ({
    q: `What is list(b"Hi")?`,
    o: ["[72, 105]", "['H', 'i']", "[b'H', b'i']", "Error"],
    c: 0,
    e: "Converting bytes to a list gives a list of integers.",
    de: `list() on a bytes object produces a list of the integer byte values. Since bytes iterates over ints, the result is a list of ints.

Key Concepts:
• 'H' has ASCII value 72, 'i' has ASCII value 105
• list(b"Hi") → [72, 105]
• This is consistent with indexing: b"Hi"[0] == 72
• Iterating over bytes also yields ints: for x in b"Hi": print(x) prints 72 then 105

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

  // Q6
  (_i: number) => ({
    q: `What is len(b"abc")?`,
    o: ["3", "5", "6", "Error"],
    c: 0,
    e: "len() counts the number of bytes.",
    de: `len() on a bytes object returns the number of bytes (not characters, though for pure ASCII they are the same).

Key Concepts:
• b"abc" contains 3 bytes: 97, 98, 99
• For ASCII text, len(bytes) == len(str)
• For non-ASCII (e.g. UTF-8 encoded text), byte length can exceed character count
• Example: len("é".encode("utf-8")) == 2, but len("é") == 1

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

  // Q7
  (_i: number) => ({
    q: `What is b"hello" + b" world"?`,
    o: ["b'hello world'", "'hello world'", "Error", "b'helloworld'"],
    c: 0,
    e: "The + operator concatenates two bytes objects.",
    de: `Bytes support concatenation with +, just like strings. Both operands must be bytes — you cannot concatenate bytes and str.

Key Concepts:
• b"hello" + b" world" → b'hello world'
• Both operands must be bytes; b"hi" + " there" raises TypeError
• The result is a new bytes object (bytes are immutable)
• You can also use += on bytearray for in-place concatenation

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

  // Q8
  (_i: number) => ({
    q: `What is b"ab" * 3?`,
    o: ["b'ababab'", "b'ab3'", "Error", "b'aabbab'"],
    c: 0,
    e: "Multiplying bytes by an integer repeats the byte sequence.",
    de: `The * operator repeats a bytes object, just as it repeats strings.

Key Concepts:
• b"ab" * 3 → b'ababab' (the 2-byte sequence repeated 3 times)
• 3 * b"ab" also works (commutative with int)
• b"ab" * 0 → b'' (empty bytes)
• This creates a new bytes object each time

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

  // Q9
  (_i: number) => ({
    q: `What is b"hello"[1:3]?`,
    o: ["b'el'", "b'ell'", "[101, 108]", "Error"],
    c: 0,
    e: "Slicing bytes returns a bytes object, not a list of ints.",
    de: `Slicing a bytes object returns another bytes object (unlike indexing, which returns an int).

Key Concepts:
• b"hello"[1:3] → b'el' (indices 1 and 2)
• Slicing uses the standard start:stop convention (stop is exclusive)
• The result is bytes, not a list of integers
• Contrast with indexing: b"hello"[1] → 101 (int)

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

  // Q10
  (_i: number) => ({
    q: `What is bytes([72, 101, 108, 108, 111])?`,
    o: ["b'Hello'", "[72, 101, 108, 108, 111]", "Error", "b'hello'"],
    c: 0,
    e: "bytes() from a list of ints creates a bytes object from those byte values.",
    de: `You can create a bytes object by passing an iterable of integers (0–255). Each integer is interpreted as a byte value.

Key Concepts:
• 72 = 'H', 101 = 'e', 108 = 'l', 108 = 'l', 111 = 'o'
• bytes([72, 101, 108, 108, 111]) → b'Hello'
• Values must be in range 0–255 or ValueError is raised
• This is the inverse of list(b'Hello') → [72, 101, 108, 108, 111]

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

  // Q11
  (_i: number) => ({
    q: `What is the result?\nba = bytearray(b"abc")\nba[0] = 65\nba`,
    o: ["bytearray(b'Abc')", "Error", "bytearray(b'abc')", "b'Abc'"],
    c: 0,
    e: "bytearray is mutable — you can assign to individual byte positions.",
    de: `bytearray supports item assignment because it is mutable, unlike bytes.

Key Concepts:
• ba = bytearray(b"abc") creates a mutable byte array: [97, 98, 99]
• ba[0] = 65 replaces the first byte (97='a') with 65 ('A')
• Result: bytearray(b'Abc')
• Doing the same on bytes would raise TypeError: bytes does not support item assignment

This is the key difference between bytes (immutable) and bytearray (mutable).

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

  // Q12
  (_i: number) => ({
    q: `What is b"hello".decode("utf-8")?`,
    o: ["'hello'", "b'hello'", "Error", "['h','e','l','l','o']"],
    c: 0,
    e: "decode() converts bytes to a string using the specified encoding.",
    de: `The decode() method converts a bytes object into a str by interpreting the bytes using the given encoding.

Key Concepts:
• b"hello".decode("utf-8") → 'hello'
• decode() is the inverse of str.encode()
• UTF-8 is the most common encoding; ASCII bytes decode identically in UTF-8
• If the bytes are not valid for the specified encoding, a UnicodeDecodeError is raised

Example round-trip: "hello".encode("utf-8").decode("utf-8") → "hello"

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

  // Q13
  (_i: number) => ({
    q: `What is "hello".encode("utf-8")?`,
    o: ["b'hello'", "'hello'", "Error", "[104, 101, 108, 108, 111]"],
    c: 0,
    e: "encode() converts a string to bytes using the specified encoding.",
    de: `The encode() method converts a str into a bytes object by encoding each character using the specified encoding.

Key Concepts:
• "hello".encode("utf-8") → b'hello'
• For ASCII characters, UTF-8 encoding is identical to ASCII
• encode() is the inverse of bytes.decode()
• Non-ASCII characters may produce multi-byte sequences: "é".encode("utf-8") → b'\\xc3\\xa9'

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

  // Q14
  (_i: number) => ({
    q: `What is b"hello".upper()?`,
    o: ["b'HELLO'", "'HELLO'", "Error", "b'Hello'"],
    c: 0,
    e: "bytes objects support upper(), which returns uppercase bytes.",
    de: `bytes objects have many of the same methods as strings, including upper(), lower(), split(), and more.

Key Concepts:
• b"hello".upper() → b'HELLO'
• The result is a new bytes object, not a str
• Only ASCII letters (a–z) are uppercased
• Other bytes methods: b"hello".lower(), b"hello".title(), b"hello".capitalize()

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

  // Q15
  (_i: number) => ({
    q: `What is b"hello".split(b"l")?`,
    o: ["[b'he', b'', b'o']", "[b'he', b'o']", "['he', '', 'o']", "Error"],
    c: 0,
    e: "split() on bytes works like on strings, producing a list of bytes objects.",
    de: `bytes.split() splits a bytes object at each occurrence of the separator, returning a list of bytes objects.

Key Concepts:
• b"hello" has two consecutive 'l' bytes
• Splitting at b"l" produces: b'he' (before first l), b'' (between the two l's), b'o' (after second l)
• The separator must also be bytes, not str
• Without a separator, split() splits on whitespace: b"a b".split() → [b'a', b'b']

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

  // Q16
  (_i: number) => ({
    q: `What is the result of 104 in b"hello"?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "The 'in' operator checks whether an integer byte value exists in the bytes object.",
    de: `The 'in' operator on bytes checks for the presence of an integer byte value, because bytes iterates over ints.

Key Concepts:
• 104 is the ASCII value of 'h'
• b"hello" contains bytes [104, 101, 108, 108, 111]
• 104 in b"hello" → True
• You can also check for subsequences: b"ell" in b"hello" → True
• But 'h' in b"hello" raises TypeError — you must use int or bytes, not str

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

  // Q17
  (_i: number) => ({
    q: `What is b"hello".hex()?`,
    o: ["'68656c6c6f'", "b'68656c6c6f'", "Error", "'hello'"],
    c: 0,
    e: "hex() returns a string of hexadecimal digit pairs for each byte.",
    de: `The hex() method on bytes returns a str containing two hex digits per byte.

Key Concepts:
• h=0x68, e=0x65, l=0x6c, l=0x6c, o=0x6f
• b"hello".hex() → '68656c6c6f' (a regular string, not bytes)
• This is useful for debugging binary data
• The inverse is bytes.fromhex("68656c6c6f") → b'hello'
• You can add a separator: b"hello".hex(" ") → '68 65 6c 6c 6f' (Python 3.8+)

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

  // Q18
  (_i: number) => ({
    q: `What is bytes.fromhex("68656c6c6f")?`,
    o: ["b'hello'", "'hello'", "Error", "[104, 101, 108, 108, 111]"],
    c: 0,
    e: "bytes.fromhex() creates a bytes object from a hex string.",
    de: `bytes.fromhex() is a class method that parses a string of hex digit pairs and creates a bytes object.

Key Concepts:
• "68656c6c6f" is parsed as: 0x68=h, 0x65=e, 0x6c=l, 0x6c=l, 0x6f=o
• bytes.fromhex("68656c6c6f") → b'hello'
• Whitespace in the hex string is ignored: bytes.fromhex("68 65 6c 6c 6f") also works
• The inverse of b"hello".hex()
• Raises ValueError for invalid hex characters

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

  // Q19
  (_i: number) => ({
    q: `What is b"hello" == "hello"?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "bytes and str are never equal, even with identical content.",
    de: `Python strictly distinguishes bytes and str. Comparing them with == always returns False — they are different types.

Key Concepts:
• b"hello" == "hello" → False
• bytes and str are fundamentally different types in Python 3
• No implicit conversion happens during comparison
• To compare content, decode bytes first: b"hello".decode() == "hello" → True
• In Python 2 this was different, but Python 3 enforces strict separation

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

  // Q20
  (_i: number) => ({
    q: `What is b"abc".decode() + "def"?`,
    o: ["'abcdef'", "b'abcdef'", "Error", "'abc' + 'def'"],
    c: 0,
    e: "decode() returns a str, which can then be concatenated with another str.",
    de: `b"abc".decode() converts bytes to str (defaulting to UTF-8), and then + concatenates two strings.

Key Concepts:
• b"abc".decode() → "abc" (str)
• "abc" + "def" → "abcdef"
• decode() without arguments defaults to UTF-8
• You cannot do b"abc" + "def" directly — that raises TypeError
• decode first, then concatenate with other strings

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

  // ===== ENCODING AND UNICODE (21–35) =====

  // Q21
  (_i: number) => ({
    q: `What is "café".encode("utf-8")?`,
    o: ["b'caf\\xc3\\xa9'", "b'café'", "b'cafe'", "Error"],
    c: 0,
    e: "The character é requires two bytes (\\xc3\\xa9) in UTF-8.",
    de: `When encoding a string to UTF-8, ASCII characters use one byte each, but non-ASCII characters may use 2, 3, or 4 bytes.

Key Concepts:
• 'c' → 0x63 (1 byte), 'a' → 0x61 (1 byte), 'f' → 0x66 (1 byte)
• 'é' (U+00E9) → 0xC3 0xA9 (2 bytes in UTF-8)
• Total: b'caf\\xc3\\xa9' — 5 bytes for 4 characters
• UTF-8 is a variable-length encoding: ASCII = 1 byte, most Latin = 2, Asian = 3, emoji = 4

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

  // Q22
  (_i: number) => ({
    q: `What is len("café")?`,
    o: ["4", "5", "3", "Error"],
    c: 0,
    e: "len() on a string counts characters, not bytes.",
    de: `In Python, len() on a string returns the number of Unicode characters (code points), regardless of how many bytes they require in any particular encoding.

Key Concepts:
• "café" has 4 characters: c, a, f, é
• len("café") → 4
• This is different from byte length: len("café".encode("utf-8")) → 5
• Python strings are sequences of Unicode code points
• Each character counts as 1, whether ASCII or multi-byte in UTF-8

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

  // Q23
  (_i: number) => ({
    q: `What is len("café".encode("utf-8"))?`,
    o: ["5", "4", "6", "Error"],
    c: 0,
    e: "In UTF-8, 'é' takes 2 bytes, so 'café' encodes to 5 bytes total.",
    de: `len() on a bytes object counts the number of bytes, which may differ from the character count of the original string.

Key Concepts:
• "café" has 4 characters but encodes to 5 bytes in UTF-8
• c (1 byte) + a (1 byte) + f (1 byte) + é (2 bytes) = 5 bytes
• len("café") → 4 (characters), len("café".encode("utf-8")) → 5 (bytes)
• This distinction is critical for file I/O, network protocols, and database storage

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

  // Q24
  (_i: number) => ({
    q: `What is "hello".encode("ascii")?`,
    o: ["b'hello'", "'hello'", "Error", "b'\\x68\\x65\\x6c\\x6c\\x6f'"],
    c: 0,
    e: "Pure ASCII text encodes identically in ASCII and UTF-8.",
    de: `The encode("ascii") method converts a string to bytes using the ASCII encoding. Since "hello" contains only ASCII characters, this works without issue.

Key Concepts:
• "hello".encode("ascii") → b'hello'
• ASCII maps characters to single bytes (0–127)
• All ASCII characters have the same byte values in UTF-8
• Non-ASCII characters (é, ñ, 中, 😀) cannot be encoded in ASCII and raise UnicodeEncodeError

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

  // Q25
  (_i: number) => ({
    q: `What happens with "café".encode("ascii")?`,
    o: ["UnicodeEncodeError", "b'cafe'", "b'café'", "b'caf'"],
    c: 0,
    e: "ASCII cannot represent 'é' — only code points 0–127 are valid.",
    de: `The ASCII encoding only supports characters with code points 0–127. The character 'é' (U+00E9 = 233) is outside this range.

Key Concepts:
• "café".encode("ascii") raises UnicodeEncodeError
• 'c', 'a', 'f' are valid ASCII, but 'é' is not
• To handle this: "café".encode("ascii", errors="ignore") → b'caf'
• Or: "café".encode("ascii", errors="replace") → b'caf?'
• Use UTF-8 for text that may contain non-ASCII characters

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

  // Q26
  (_i: number) => ({
    q: `What is b"hello".decode("ascii")?`,
    o: ["'hello'", "b'hello'", "Error", "None"],
    c: 0,
    e: "decode(\"ascii\") converts ASCII bytes back to a string.",
    de: `The decode("ascii") method interprets bytes as ASCII-encoded text and returns a str.

Key Concepts:
• b"hello".decode("ascii") → 'hello'
• This works because all bytes in b"hello" are valid ASCII (< 128)
• If any byte is ≥ 128, a UnicodeDecodeError is raised
• For ASCII-only data, decode("ascii") and decode("utf-8") give identical results

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

  // Q27
  (_i: number) => ({
    q: `What is len("😀".encode("utf-8"))?`,
    o: ["4", "1", "2", "8"],
    c: 0,
    e: "Emoji are encoded as 4 bytes in UTF-8.",
    de: `Emoji and other characters above U+FFFF require 4 bytes in UTF-8 encoding.

Key Concepts:
• "😀" is U+1F600 (a code point above 0xFFFF)
• UTF-8 encodes it as 4 bytes: \\xf0\\x9f\\x98\\x80
• len("😀") → 1 (one character)
• len("😀".encode("utf-8")) → 4 (four bytes)
• UTF-8 byte counts: 1 byte (ASCII), 2 bytes (Latin/Greek/Cyrillic), 3 bytes (CJK/most symbols), 4 bytes (emoji/rare scripts)

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

  // Q28
  (_i: number) => ({
    q: `What is len("😀")?`,
    o: ["1", "2", "4", "Error"],
    c: 0,
    e: "An emoji is a single Unicode character, so len() returns 1.",
    de: `Python strings are sequences of Unicode code points. Each emoji (when not composed of multiple code points) counts as one character.

Key Concepts:
• "😀" is a single Unicode code point: U+1F600
• len("😀") → 1
• This contrasts with the byte length: len("😀".encode("utf-8")) → 4
• Some emoji are composed of multiple code points (like family emoji or skin-tone modifiers), and len() counts each code point separately

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

  // Q29
  (_i: number) => ({
    q: `What is ord("A")?`,
    o: ["65", "97", "41", "Error"],
    c: 0,
    e: "ord() returns the Unicode code point of a character. 'A' is 65.",
    de: `ord() returns the integer Unicode code point for a single character. For ASCII characters, this matches the ASCII table.

Key Concepts:
• ord("A") → 65 (the ASCII/Unicode code point for uppercase A)
• ord() accepts exactly one character
• ord("AB") raises TypeError (string of length 2, not 1)
• The inverse is chr(): chr(65) → 'A'
• Uppercase letters A–Z have code points 65–90

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

  // Q30
  (_i: number) => ({
    q: `What is ord("a")?`,
    o: ["97", "65", "61", "Error"],
    c: 0,
    e: "Lowercase 'a' has Unicode code point 97.",
    de: `ord("a") returns 97, the Unicode/ASCII code point for lowercase a.

Key Concepts:
• Lowercase letters a–z have code points 97–122
• Uppercase letters A–Z have code points 65–90
• The difference is 32: ord("a") - ord("A") == 32
• This 32-offset is used in some low-level case conversion algorithms
• ord() works on any single Unicode character, not just ASCII

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

  // Q31
  (_i: number) => ({
    q: `What is ord("0")?`,
    o: ["48", "0", "30", "Error"],
    c: 0,
    e: "The character '0' has code point 48 — it is not the integer 0.",
    de: `The character '0' (the digit zero as text) has Unicode code point 48, which is distinct from the integer 0.

Key Concepts:
• ord("0") → 48 (not 0!)
• Digit characters '0'–'9' have code points 48–57
• To convert a digit character to its numeric value: int("0") → 0
• Or: ord("0") - 48 → 0
• This is why int() exists — to parse text as a number

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

  // Q32
  (_i: number) => ({
    q: `What is chr(65)?`,
    o: ["'A'", "'a'", "'65'", "Error"],
    c: 0,
    e: "chr() converts a code point to its character. 65 is 'A'.",
    de: `chr() is the inverse of ord(). It takes an integer code point and returns the corresponding Unicode character as a string.

Key Concepts:
• chr(65) → 'A'
• chr() accepts integers in the valid Unicode range (0–1,114,111)
• chr(0) → '\\x00' (null character)
• chr(128512) → '😀' (emoji)
• Round-trip: chr(ord("A")) → "A" and ord(chr(65)) → 65

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

  // Q33
  (_i: number) => ({
    q: `What is chr(97)?`,
    o: ["'a'", "'A'", "'97'", "Error"],
    c: 0,
    e: "Code point 97 corresponds to lowercase 'a'.",
    de: `chr(97) returns 'a', the lowercase letter a.

Key Concepts:
• Code point 97 = lowercase 'a'
• Code point 65 = uppercase 'A'
• The difference of 32 between uppercase and lowercase ASCII letters is a well-known property of the ASCII table
• chr(97) → 'a', chr(98) → 'b', chr(99) → 'c', etc.

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

  // Q34
  (_i: number) => ({
    q: `What is chr(48)?`,
    o: ["'0'", "'48'", "0", "Error"],
    c: 0,
    e: "Code point 48 is the character '0' (digit zero as text).",
    de: `chr(48) returns the character '0' — the textual representation of the digit zero. This is a string of length 1, not the integer 0.

Key Concepts:
• chr(48) → '0' (a string character)
• Digit characters: chr(48)='0', chr(49)='1', ..., chr(57)='9'
• '0' is truthy (non-empty string), unlike the integer 0 which is falsy
• int(chr(48)) → 0 (converts the character back to an integer)

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

  // Q35
  (_i: number) => ({
    q: `What is chr(ord("A") + 32)?`,
    o: ["'a'", "'A'", "'!'", "Error"],
    c: 0,
    e: "ord(\"A\") is 65; adding 32 gives 97, which is chr(97) = 'a'.",
    de: `This expression converts uppercase 'A' to lowercase 'a' using ASCII arithmetic.

Key Concepts:
• ord("A") → 65
• 65 + 32 → 97
• chr(97) → 'a'
• In ASCII, each uppercase letter is exactly 32 less than its lowercase counterpart
• This is how low-level case conversion works, though Python's .lower() method is preferred for readability and Unicode correctness

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

  // ===== NONE DEEP-DIVE (36–50) =====

  // Q36
  (_i: number) => ({
    q: `What is type(None)?`,
    o: ["<class 'NoneType'>", "<class 'None'>", "<class 'null'>", "<class 'void'>"],
    c: 0,
    e: "None is the sole instance of the NoneType class.",
    de: `None is Python's null value, and it has its own dedicated type called NoneType. There is exactly one None object in any Python program (it is a singleton).

Key Concepts:
• type(None) → <class 'NoneType'>
• None is a singleton: all references to None point to the same object
• NoneType cannot be instantiated: type(None)() returns None itself
• There is no 'null', 'void', or 'Nothing' in Python — only None

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

  // Q37
  (_i: number) => ({
    q: `What is None == None?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "None is equal to itself using ==.",
    de: `None compared to None with == returns True. However, the idiomatic way to check for None in Python is to use 'is' instead of '=='.

Key Concepts:
• None == None → True
• == checks value equality
• While this works, PEP 8 recommends: x is None (not x == None)
• The reason: a custom class could override __eq__ to return True when compared with None, leading to unexpected results

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

  // Q38
  (_i: number) => ({
    q: `What is None is None?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "None is a singleton, so 'is' always returns True for None comparisons.",
    de: `The 'is' operator checks identity (same object in memory), not equality. Since None is a singleton, 'is' is the preferred way to check for None.

Key Concepts:
• None is None → True
• 'is' checks identity: are these the exact same object?
• Since there is only one None object in Python, x is None is always reliable
• PEP 8 style: always use 'is' or 'is not' when comparing to None
• x is None is slightly faster than x == None because it avoids calling __eq__

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

  // Q39
  (_i: number) => ({
    q: `What is bool(None)?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "None is falsy — bool(None) returns False.",
    de: `None is one of Python's falsy values. When converted to a boolean, it evaluates to False.

Key Concepts:
• bool(None) → False
• None is falsy, meaning it evaluates to False in boolean contexts
• Other falsy values: 0, 0.0, "", [], {}, (), set(), False
• In if statements: if None: never executes the body
• This is why 'if x:' works as a None check (though 'if x is not None:' is more explicit)

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

  // Q40
  (_i: number) => ({
    q: `What is None == 0?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "None is not equal to 0 — they are different types and values.",
    de: `Even though both None and 0 are falsy, they are not equal. Python does not conflate "falsy" with "equal to other falsy values."

Key Concepts:
• None == 0 → False
• None and 0 are different types (NoneType vs int)
• Both are falsy: bool(None) == False and bool(0) == False
• But falsy values are not interchangeable: None != 0 != "" != [] != False
• Only None == None and 0 == 0 are True

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

  // Q41
  (_i: number) => ({
    q: `What is None == False?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "None is not equal to False, despite both being falsy.",
    de: `None and False are both falsy, but they are not equal. Python distinguishes between different falsy values.

Key Concepts:
• None == False → False
• bool(None) == False → True (both are falsy)
• But None == False → False (they are different objects/types)
• False == 0 → True (bool is a subclass of int, and False is 0)
• None does not equal any value except None itself

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

  // Q42
  (_i: number) => ({
    q: `What is None == ""?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "None is not equal to an empty string.",
    de: `None is not equal to any value other than None itself. An empty string "" is a different type (str) and a different value.

Key Concepts:
• None == "" → False
• Both None and "" are falsy, but they are not equal
• None is NoneType, "" is str — different types
• In many other languages, null/nil may loosely equal empty string, but Python is strict
• Always use 'x is None' rather than 'x == ""' to check for None

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

  // Q43
  (_i: number) => ({
    q: `What is the result?\nx = None\nx is None`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "Assigning None to a variable and checking with 'is' returns True.",
    de: `When you assign None to a variable, the variable references the singleton None object. The 'is' operator confirms identity.

Key Concepts:
• x = None stores a reference to the singleton None object
• x is None → True (x references the same None object)
• This is the standard Python idiom for checking if a variable is None
• Common pattern: def f(x=None): if x is None: x = []

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

  // Q44
  (_i: number) => ({
    q: `What does a function return if it has no return statement?`,
    o: ["None", "0", "False", "Error"],
    c: 0,
    e: "Functions without a return statement implicitly return None.",
    de: `In Python, every function returns a value. If no return statement is present, the function implicitly returns None.

Key Concepts:
• def f(): pass → calling f() returns None
• def g(): print("hi") → g() prints "hi" and returns None
• This is an implicit return, equivalent to having 'return None' at the end
• print() itself returns None: x = print("hi") → x is None
• This is why you should never write: my_list = my_list.sort() (sort returns None)

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

  // Q45
  (_i: number) => ({
    q: `What is the result?\ndef f(): pass\ntype(f())`,
    o: ["<class 'NoneType'>", "<class 'None'>", "<class 'function'>", "Error"],
    c: 0,
    e: "f() returns None (no return statement), so type(f()) is NoneType.",
    de: `A function with only 'pass' in its body returns None implicitly. type() on that return value gives NoneType.

Key Concepts:
• def f(): pass defines a function that does nothing
• f() calls the function and gets None (the implicit return value)
• type(None) → <class 'NoneType'>
• Note: type(f) would give <class 'function'> — but type(f()) gives the type of the return value
• The parentheses matter: f is the function object, f() is the call result

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

  // Q46
  (_i: number) => ({
    q: `What is the result?\ndef f(): return\nf() is None`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "A bare 'return' with no value returns None.",
    de: `A return statement without a value (bare return) is equivalent to 'return None'. The function exits and returns None.

Key Concepts:
• 'return' with no expression returns None
• 'return' is equivalent to 'return None'
• f() is None → True
• This is commonly used to exit a function early: if error: return
• All three produce the same result: no return, bare return, and return None

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

  // Q47
  (_i: number) => ({
    q: `What is [None, None, None] == [None] * 3?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "[None] * 3 creates [None, None, None], which equals the left side.",
    de: `List repetition with * creates a new list with the element repeated. Since None is a singleton, all references point to the same object.

Key Concepts:
• [None] * 3 → [None, None, None]
• [None, None, None] == [None, None, None] → True
• All None references are the same object (singleton)
• Caution with mutable objects: [[]] * 3 creates three references to the same inner list
• But with None (immutable singleton), repetition is perfectly safe

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

  // Q48
  (_i: number) => ({
    q: `What is str(None)?`,
    o: ["'None'", "''", "None", "Error"],
    c: 0,
    e: "str(None) returns the string 'None', not an empty string.",
    de: `Calling str() on None returns the string "None" — a 4-character string containing the letters N, o, n, e.

Key Concepts:
• str(None) → 'None' (the string, not the None object)
• len(str(None)) → 4
• This is why f-strings and print() display "None": print(None) outputs None
• Be careful: str(None) is truthy (non-empty string), unlike None itself which is falsy
• Common pitfall: if x is None, str(x) gives "None", not ""

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

  // Q49
  (_i: number) => ({
    q: `What is repr(None)?`,
    o: ["'None'", "None", "''", "Error"],
    c: 0,
    e: "repr(None) returns the string 'None', same as str(None).",
    de: `repr() returns a string representation intended for debugging. For None, repr(None) and str(None) both return the string "None".

Key Concepts:
• repr(None) → 'None'
• str(None) → 'None' (same result for None)
• For many types, repr() and str() differ: repr("hello") → "'hello'" (with quotes), str("hello") → 'hello'
• But for None, both produce the same 4-character string "None"
• repr() is what you see in the interactive Python shell; str() is what print() uses

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

  // Q50
  (_i: number) => ({
    q: `What is None in [1, None, 3]?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "The 'in' operator finds None in the list because it is an element.",
    de: `The 'in' operator checks for membership. Since None is one of the elements in the list [1, None, 3], the result is True.

Key Concepts:
• None in [1, None, 3] → True
• The 'in' operator uses identity (is) and equality (==) checks
• Since None is a singleton, the identity check succeeds immediately
• None can be a valid element in any collection: lists, tuples, sets, dicts (as value)
• None is not hashable? Actually it is: {None: "value"} is valid, and None can be in a set

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
