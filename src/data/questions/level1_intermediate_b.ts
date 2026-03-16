// --- LEVEL 1 INTERMEDIATE B: Advanced String Operations & Type Conversion (50 TRULY UNIQUE QUESTIONS) ---
// Topics 51-100: Advanced string ops, edge cases, type conversion, string formatting deep
export const level1IntermediateB = [
  // 51. String concatenation with +=
  (_i: number) => ({
    q: `What is the value of s after: s = "a"; s += "b"?`,
    o: ['"ab"', '"a"', '"b"', 'Error'],
    c: 0,
    e: "The += operator appends the right string to the left variable.",
    de: `The += operator for strings performs in-place concatenation (technically, it creates a new string and reassigns). When s = "a" and then s += "b", Python creates a new string "ab" and assigns it back to s.

Key Concepts:
• s += "b" is equivalent to s = s + "b"
• Strings are immutable, so += actually creates a new string object
• This is convenient shorthand for building strings incrementally
• Works only when the left side is a string variable

Example:
• s = "a"; s += "b" → s is now "ab"
• s += "c" → s is now "abc"
• This is common in loops where you build a string piece by piece

Note: For building large strings in a loop, using a list and "".join() is more efficient than repeated += because each += creates a new string object.

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
  // 52. String repetition with *=
  (_i: number) => ({
    q: `What is the value of s after: s = "ab"; s *= 3?`,
    o: ['"ababab"', '"ab3"', '"aabbab"', 'Error'],
    c: 0,
    e: "The *= operator repeats the string the specified number of times.",
    de: `The *= operator for strings performs in-place repetition. s *= 3 is equivalent to s = s * 3, which repeats the string 3 times.

Key Concepts:
• s *= n is equivalent to s = s * n
• The original string is repeated n times and concatenated
• Like +=, this creates a new string (strings are immutable)
• n must be an integer

Example:
• s = "ab"; s *= 3 → s is "ababab"
• s = "x"; s *= 5 → s is "xxxxx"
• s *= 0 → s becomes "" (empty string)
• s *= -1 → s becomes "" (negative repetition yields empty string)

This is a clean shorthand when you need to repeat a pattern multiple times.

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
  // 53. __contains__ dunder method
  (_i: number) => ({
    q: `What does "hello".__contains__("ell") return?`,
    o: ['True', 'False', 'Error', '"ell"'],
    c: 0,
    e: 'The __contains__ method is what the "in" operator calls internally.',
    de: `The __contains__ dunder (double underscore) method is the internal implementation of Python's "in" operator. When you write "ell" in "hello", Python actually calls "hello".__contains__("ell").

Key Concepts:
• __contains__ returns True if the substring is found, False otherwise
• "ell" in "hello" is syntactic sugar for "hello".__contains__("ell")
• All sequence types (str, list, tuple) implement __contains__
• Dunder methods are Python's way of implementing operator overloading

Example:
• "hello".__contains__("ell") → True (same as "ell" in "hello")
• "hello".__contains__("xyz") → False
• [1, 2, 3].__contains__(2) → True

In practice, always use the "in" operator for readability. The dunder method is for understanding Python internals.

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
  // 54. String comparison == vs is
  (_i: number) => ({
    q: `What does "hello" == "hello" return?`,
    o: ['True', 'False', 'None', 'Error'],
    c: 0,
    e: "The == operator compares string values (content), not identity.",
    de: `The == operator compares the values (content) of two strings, while "is" checks if they are the exact same object in memory.

Key Concepts:
• == compares values: "hello" == "hello" is always True
• "is" compares identity (memory address): may or may not be True
• Python may intern (reuse) small strings, so "is" can sometimes be True for identical literals
• Never use "is" to compare string values — always use ==

Example:
• "hello" == "hello" → True (same content)
• a = "hello"; b = "hello"; a == b → True (same content)
• a is b → may be True due to interning, but don't rely on it
• a = "hello!"; b = "hello!"; a is b → may be False (interning is not guaranteed for all strings)

Rule of thumb: Use == for value comparison, "is" only for None checks (x is None).

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
  // 55. String interning behavior
  (_i: number) => ({
    q: `Given a = "hi"; b = "hi", what does a is b return?`,
    o: ['True', 'False', 'None', 'Error'],
    c: 0,
    e: "Python interns small simple strings, so they share the same object in memory.",
    de: `Python automatically interns (caches and reuses) small strings that look like identifiers. When two variables reference the same interned string, "is" returns True because they point to the same object.

Key Concepts:
• String interning means Python reuses the same object for identical string literals
• Small strings (especially those that look like identifiers) are interned automatically
• a = "hi"; b = "hi" → a is b is True because "hi" is interned
• Longer or complex strings may not be interned

Example:
• a = "hi"; b = "hi"; a is b → True (interned)
• a = "hello world!"; b = "hello world!"; a is b → may be True or False (implementation-dependent)
• a = "a" * 100; b = "a" * 100; a is b → False (dynamically created, not interned)

Important: Never rely on string interning for correctness. Always use == for value comparison.

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
  // 56. len() on empty string
  (_i: number) => ({
    q: `What does len("") return?`,
    o: ['0', '1', 'None', 'Error'],
    c: 0,
    e: "An empty string has zero characters, so its length is 0.",
    de: `The len() function returns the number of characters in a string. An empty string "" contains no characters, so len("") returns 0.

Key Concepts:
• len("") returns 0 — the empty string has no characters
• The empty string is a valid string, not None or null
• bool("") is False — empty strings are falsy
• "" is the identity element for string concatenation: "" + s == s

Example:
• len("") → 0
• len(" ") → 1 (a single space character)
• len("abc") → 3
• bool("") → False (empty string is falsy)
• bool(" ") → True (space is a character, non-empty string is truthy)

Common use: if len(s) == 0 is equivalent to if not s, and the latter is more Pythonic.

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
  // 57. len() on string with only spaces
  (_i: number) => ({
    q: `What does len("  ") return?`,
    o: ['2', '0', '1', 'Error'],
    c: 0,
    e: "Spaces are characters, so two spaces have length 2.",
    de: `Spaces are regular characters in Python. The string "  " contains exactly two space characters, so len("  ") returns 2.

Key Concepts:
• Spaces count as characters — they're not "empty"
• len() counts all characters including whitespace
• "  " (two spaces) has length 2
• " " (one space) has length 1

Example:
• len("  ") → 2 (two space characters)
• len("\\t") → 1 (one tab character)
• len("\\n") → 1 (one newline character)
• len(" hello ") → 7 (5 letters + 2 spaces)

This is why "  ".strip() returns "" — strip removes leading/trailing whitespace, leaving an empty string.

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
  // 58. Negative indexing with slice
  (_i: number) => ({
    q: `What is "python"[-3:]?`,
    o: ['"hon"', '"pyt"', '"tho"', '"on"'],
    c: 0,
    e: 'Negative index -3 starts 3 from the end; the slice goes to the end.',
    de: `Negative indices count from the end of the string. "python"[-3:] starts at the 3rd character from the end and goes to the end of the string.

Key Concepts:
• Negative indices: -1 is last char, -2 is second-to-last, etc.
• "python" has indices: p(0/-6), y(1/-5), t(2/-4), h(3/-3), o(4/-2), n(5/-1)
• [-3:] means "from index -3 (which is 'h') to the end"
• This extracts the last 3 characters

Example:
• "python"[-3:] → "hon" (last 3 characters)
• "python"[-1:] → "n" (last character)
• "python"[-4:] → "thon" (last 4 characters)
• "python"[:-3] → "pyt" (everything except last 3)

Negative slicing is a Pythonic way to access elements from the end without knowing the string length.

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
  // 59. Slice with negative step
  (_i: number) => ({
    q: `What is "abcde"[4:1:-1]?`,
    o: ['"edc"', '"edcb"', '"dcb"', '"cde"'],
    c: 0,
    e: "Starts at index 4 ('e'), steps backward by 1, stops before index 1.",
    de: `When using a negative step in slicing, Python traverses the string backwards. "abcde"[4:1:-1] starts at index 4, moves backward with step -1, and stops before reaching index 1.

Key Concepts:
• [start:stop:step] — with negative step, start should be > stop
• Indices: a(0), b(1), c(2), d(3), e(4)
• Start at index 4 → 'e'
• Step -1: index 3 → 'd', index 2 → 'c'
• Stop before index 1 (exclusive) — don't include 'b'
• Result: "edc"

Example:
• "abcde"[4:1:-1] → "edc" (from 'e' backward, stopping before 'b')
• "abcde"[4:0:-1] → "edcb" (from 'e' backward, stopping before 'a')
• "abcde"[::-1] → "edcba" (full reverse)
• "abcde"[3:0:-1] → "dcb"

The stop index is always exclusive, even with negative steps.

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
  // 60. String in boolean context
  (_i: number) => ({
    q: `What is the difference between bool("") and bool(" ")?`,
    o: ['False and True', 'True and False', 'Both True', 'Both False'],
    c: 0,
    e: 'Empty string is falsy (False), but a string with a space is non-empty and truthy (True).',
    de: `In Python, empty sequences are falsy and non-empty sequences are truthy. The empty string "" is falsy, while " " (a space) is a non-empty string and therefore truthy.

Key Concepts:
• bool("") → False (empty string is falsy)
• bool(" ") → True (non-empty string, even if only whitespace)
• Python doesn't care about the content, only whether the string has length > 0
• This applies to all sequences: [], (), {} are all falsy; [0], (0,), {0} are truthy

Example:
• bool("") → False
• bool(" ") → True
• bool("0") → True (non-empty string)
• bool("False") → True (the string "False" is non-empty!)

This is commonly used in conditionals: if my_string: will be False only for empty strings, not for whitespace-only strings. Use if my_string.strip(): to also exclude whitespace-only strings.

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
  // 61. Concatenating string with number using str()
  (_i: number) => ({
    q: `What is the result of "age: " + str(25)?`,
    o: ['"age: 25"', '"age: "25', 'TypeError', '"age: str(25)"'],
    c: 0,
    e: "str(25) converts the integer to the string \"25\", allowing concatenation.",
    de: `Python does not allow concatenating strings with non-string types directly. You must convert the number to a string first using str().

Key Concepts:
• str(25) converts integer 25 to string "25"
• "age: " + "25" produces "age: 25"
• Without str(), Python raises TypeError
• This is explicit type conversion (casting)

Example:
• "age: " + str(25) → "age: 25"
• "score: " + str(99.5) → "score: 99.5"
• "items: " + str([1, 2]) → "items: [1, 2]"

Alternatives for combining strings and numbers:
• f-strings: f"age: {25}" → "age: 25" (preferred)
• format(): "age: {}".format(25) → "age: 25"
• % formatting: "age: %d" % 25 → "age: 25"

f-strings are the modern Pythonic way and automatically convert values to strings.

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
  // 62. TypeError when concatenating string with int
  (_i: number) => ({
    q: `What happens when you run: "age: " + 25?`,
    o: ['TypeError', '"age: 25"', '"age: "25', '25'],
    c: 0,
    e: "Python cannot concatenate str and int directly — it raises TypeError.",
    de: `Python is strongly typed and does not implicitly convert between types. Attempting to concatenate a string with an integer using + raises a TypeError.

Key Concepts:
• Python's + operator requires operands of the same type for strings
• "age: " + 25 raises: TypeError: can only concatenate str (not "int") to str
• Unlike JavaScript, Python does NOT auto-convert numbers to strings
• You must explicitly convert: "age: " + str(25)

Example:
• "age: " + 25 → TypeError
• "age: " + str(25) → "age: 25" (correct)
• 25 + "age" → TypeError (same error, order doesn't matter)

This is a feature, not a bug — Python's strong typing prevents subtle bugs that can occur with implicit type coercion in other languages.

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
  // 63. Multiplying string by negative number
  (_i: number) => ({
    q: `What is "hi" * -1?`,
    o: ['""', '"hi"', 'Error', '"-hi"'],
    c: 0,
    e: "Multiplying a string by a negative number (or zero) returns an empty string.",
    de: `When you multiply a string by zero or a negative number, Python returns an empty string. It does not raise an error.

Key Concepts:
• "hi" * -1 → "" (empty string)
• "hi" * 0 → "" (empty string)
• Any negative or zero repetition count yields ""
• This is consistent: you can't have a negative number of repetitions

Example:
• "hi" * -1 → ""
• "hi" * 0 → ""
• "hi" * 1 → "hi"
• "hi" * 3 → "hihihi"

This behavior is useful because it means string multiplication never raises an error for integer arguments, making it safe to use in expressions like "=" * max(0, width).

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
  // 64. String with newline character length
  (_i: number) => ({
    q: `What does len("a\\nb") return?`,
    o: ['3', '4', '2', 'Error'],
    c: 0,
    e: "The \\n escape sequence is a single newline character, so the string has 3 characters: 'a', newline, 'b'.",
    de: `The escape sequence \\n represents a single newline character. Even though it's written as two characters in source code, it counts as one character at runtime.

Key Concepts:
• \\n is one character (newline)
• "a\\nb" contains: 'a' (1) + newline (1) + 'b' (1) = 3 characters
• Other single-character escapes: \\t (tab), \\\\ (backslash), \\' (quote)
• len() counts actual characters, not source code characters

Example:
• len("a\\nb") → 3
• len("a\\tb") → 3 (tab is also one character)
• len("a\\\\b") → 3 (backslash is one character)
• len("\\n\\n\\n") → 3 (three newline characters)

To include a literal backslash-n in a string (not a newline), use a raw string: r"a\\nb" has length 4.

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
  // 65. String split with tab
  (_i: number) => ({
    q: `What does "a\\tb".split("\\t") return?`,
    o: ['["a", "b"]', '["a\\tb"]', '["a", "\\t", "b"]', 'Error'],
    c: 0,
    e: "split(\"\\t\") splits the string at each tab character.",
    de: `The split() method divides a string at each occurrence of the specified delimiter. \\t is the tab character, so "a\\tb".split("\\t") splits at the tab.

Key Concepts:
• \\t represents the tab character
• split("\\t") uses tab as the delimiter
• The delimiter is not included in the result
• Returns a list of substrings

Example:
• "a\\tb".split("\\t") → ["a", "b"]
• "a\\tb\\tc".split("\\t") → ["a", "b", "c"]
• "a\\t\\tb".split("\\t") → ["a", "", "b"] (empty string between consecutive tabs)
• "hello".split("\\t") → ["hello"] (no tab found, returns list with original string)

The tab character is commonly used as a delimiter in TSV (Tab-Separated Values) files.

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
  // 66. chr() and ord() functions
  (_i: number) => ({
    q: `What does chr(65) return?`,
    o: ['"A"', '"a"', '65', 'Error'],
    c: 0,
    e: "chr(65) returns the character with Unicode code point 65, which is 'A'.",
    de: `The chr() function converts a Unicode code point (integer) to its corresponding character. 65 is the code point for uppercase 'A' in the ASCII/Unicode table.

Key Concepts:
• chr(n) converts integer n to a single character string
• ord(c) is the inverse: converts a character to its code point
• ASCII values: A=65, B=66, ..., Z=90, a=97, b=98, ..., z=122
• 0=48, 1=49, ..., 9=57

Example:
• chr(65) → "A"
• chr(97) → "a"
• chr(48) → "0"
• ord("A") → 65
• ord("a") → 97

chr() and ord() are useful for character arithmetic, encoding/decoding, and working with character ranges. For example, chr(ord("A") + 3) gives "D".

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
  // 67. chr(ord()) character arithmetic
  (_i: number) => ({
    q: `What does chr(ord("a") + 1) return?`,
    o: ['"b"', '"a1"', '98', 'Error'],
    c: 0,
    e: 'ord("a") is 97, adding 1 gives 98, and chr(98) is "b".',
    de: `This demonstrates character arithmetic using ord() and chr(). ord("a") returns 97 (the Unicode code point for lowercase 'a'), adding 1 gives 98, and chr(98) returns "b".

Key Concepts:
• ord("a") → 97
• 97 + 1 → 98
• chr(98) → "b"
• Consecutive letters have consecutive code points

Example:
• chr(ord("a") + 1) → "b"
• chr(ord("a") + 25) → "z"
• chr(ord("A") + 1) → "B"
• chr(ord("0") + 5) → "5"

This pattern is commonly used for Caesar ciphers, generating character ranges, and converting between characters and their positions in the alphabet.

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
  // 68. String min() and max()
  (_i: number) => ({
    q: `What does min("hello") return?`,
    o: ['"e"', '"h"', '"o"', '"l"'],
    c: 0,
    e: 'min() returns the character with the smallest Unicode value. "e" (101) is the smallest in "hello".',
    de: `The min() function can be applied to strings, treating them as sequences of characters. It returns the character with the smallest Unicode code point value.

Key Concepts:
• min() iterates over the string and compares characters by their Unicode values
• Characters in "hello": h(104), e(101), l(108), l(108), o(111)
• The smallest value is e(101), so min("hello") returns "e"
• Similarly, max("hello") returns "o" (111 is the largest)

Example:
• min("hello") → "e"
• max("hello") → "o"
• min("ABC") → "A" (65 < 66 < 67)
• min("aAbB") → "A" (uppercase letters have smaller code points than lowercase)

Character comparison order: digits (48-57) < uppercase (65-90) < lowercase (97-122). So min("aA") returns "A", not "a".

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
  // 69. sorted() on a string
  (_i: number) => ({
    q: `What does sorted("python") return?`,
    o: [`['h', 'n', 'o', 'p', 't', 'y']`, `"hnopty"`, `['p', 'y', 't', 'h', 'o', 'n']`, `Error`],
    c: 0,
    e: "sorted() returns a list of characters sorted by their Unicode values.",
    de: `The sorted() function takes any iterable and returns a new sorted list. When applied to a string, it returns a list of individual characters sorted alphabetically (by Unicode code point).

Key Concepts:
• sorted() always returns a list, even when given a string
• Characters are sorted by their Unicode values
• "python" → ['h', 'n', 'o', 'p', 't', 'y'] (alphabetical order)
• The original string is not modified

Example:
• sorted("python") → ['h', 'n', 'o', 'p', 't', 'y']
• sorted("cba") → ['a', 'b', 'c']
• sorted("BaC") → ['B', 'C', 'a'] (uppercase before lowercase)

To get a sorted string instead of a list, use "".join(sorted("python")) → "hnopty".

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
  // 70. "".join(sorted()) to get sorted string
  (_i: number) => ({
    q: `What does "".join(sorted("python")) return?`,
    o: ['"hnopty"', '["h", "n", "o", "p", "t", "y"]', '"python"', 'Error'],
    c: 0,
    e: 'sorted() produces a sorted list of characters, and "".join() combines them back into a string.',
    de: `This is a two-step operation: first sorted() creates a sorted list of characters, then "".join() concatenates them back into a single string.

Key Concepts:
• sorted("python") → ['h', 'n', 'o', 'p', 't', 'y']
• "".join(['h', 'n', 'o', 'p', 't', 'y']) → "hnopty"
• The empty string "" as separator means no separator between characters
• This is the standard pattern for sorting characters in a string

Example:
• "".join(sorted("python")) → "hnopty"
• "".join(sorted("cba")) → "abc"
• "-".join(sorted("python")) → "h-n-o-p-t-y" (with separator)
• "".join(sorted("hello")) → "ehllo"

This pattern is commonly used for anagram detection: two words are anagrams if sorted(word1) == sorted(word2).

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
  // 71. String to list conversion
  (_i: number) => ({
    q: `What does list("abc") return?`,
    o: ['["a", "b", "c"]', '["abc"]', '[abc]', 'Error'],
    c: 0,
    e: "list() converts a string into a list of individual characters.",
    de: `The list() constructor takes any iterable and creates a list from its elements. Since strings are iterable sequences of characters, list("abc") creates a list with each character as a separate element.

Key Concepts:
• Strings are iterable — you can loop over individual characters
• list("abc") → ["a", "b", "c"]
• Each character becomes a separate list element
• This is the inverse of "".join(["a", "b", "c"]) → "abc"

Example:
• list("abc") → ["a", "b", "c"]
• list("hello") → ["h", "e", "l", "l", "o"]
• list("") → [] (empty string gives empty list)
• list("123") → ["1", "2", "3"] (characters, not integers!)

This is useful when you need to modify individual characters, since strings are immutable but lists are mutable.

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
  // 72. String multiplication then concatenation
  (_i: number) => ({
    q: `What is "abc" * 2 + "d"?`,
    o: ['"abcabcd"', '"abcd2"', '"aabbccd"', '"abcabc"'],
    c: 0,
    e: '"abc" * 2 gives "abcabc", then + "d" appends to make "abcabcd".',
    de: `Python follows standard operator precedence: multiplication (*) is evaluated before addition (+). So "abc" * 2 is computed first, then "d" is concatenated.

Key Concepts:
• * has higher precedence than + for strings (same as math)
• "abc" * 2 → "abcabc"
• "abcabc" + "d" → "abcabcd"
• Parentheses can change the order: "abc" * (2 + 1) would be different

Example:
• "abc" * 2 + "d" → "abcabcd"
• "abc" + "d" * 2 → "abcdd" (* evaluated first: "d" * 2 = "dd")
• ("abc" + "d") * 2 → "abcdabcd" (parentheses force + first)

String operators follow the same precedence rules as numeric operators, which makes expressions predictable.

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
  // 73. Comparing strings of different lengths
  (_i: number) => ({
    q: `What does "abc" < "abcd" return?`,
    o: ['True', 'False', 'Error', 'None'],
    c: 0,
    e: "When one string is a prefix of another, the shorter string is considered less.",
    de: `Python compares strings lexicographically (character by character). When one string is a prefix of another, the shorter string is considered "less than" the longer one.

Key Concepts:
• String comparison is character-by-character using Unicode values
• "abc" vs "abcd": first 3 characters match, but "abc" is shorter
• A prefix string is always less than the longer string
• This follows dictionary ordering rules

Example:
• "abc" < "abcd" → True (prefix is less)
• "abc" < "abd" → True ('c' < 'd')
• "abc" < "abc" → False (equal, not less)
• "abc" <= "abc" → True (equal counts for <=)
• "z" > "abc" → True ('z' > 'a' at first character)

This ordering is used by sorted() and .sort() for strings, and is why "apple" comes before "banana" in alphabetical sorting.

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
  // 74. Stripping whitespace-only strings
  (_i: number) => ({
    q: `What does "   ".strip() return?`,
    o: ['""', '" "', '"   "', 'None'],
    c: 0,
    e: "strip() removes all leading and trailing whitespace, leaving an empty string.",
    de: `The strip() method removes all leading and trailing whitespace characters from a string. When the string consists entirely of whitespace, strip() removes everything and returns an empty string.

Key Concepts:
• strip() removes whitespace from both ends
• "   ".strip() → "" (all spaces removed)
• Whitespace includes: spaces, tabs, newlines, carriage returns
• strip() does not modify the original string (strings are immutable)

Example:
• "   ".strip() → "" (empty string)
• " hello ".strip() → "hello"
• "\\t\\n ".strip() → "" (all whitespace types removed)
• lstrip() removes only leading whitespace
• rstrip() removes only trailing whitespace

Note: strip() with an argument removes specific characters, not whitespace: "aabcaa".strip("a") → "bc".

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
  // 75. str.translate with character deletion
  (_i: number) => ({
    q: `What does "hello".translate(str.maketrans("", "", "aeiou")) return?`,
    o: ['"hll"', '"hello"', '"eo"', 'Error'],
    c: 0,
    e: 'str.maketrans("", "", "aeiou") creates a mapping that deletes all vowels.',
    de: `str.maketrans() with three arguments creates a translation table. The third argument specifies characters to delete. "hello".translate() then applies this table.

Key Concepts:
• str.maketrans(x, y, z): x maps to y, z characters are deleted
• str.maketrans("", "", "aeiou") → delete all vowels
• "hello" without vowels 'e' and 'o' → "hll"
• translate() processes each character through the translation table

Example:
• "hello".translate(str.maketrans("", "", "aeiou")) → "hll"
• "beautiful".translate(str.maketrans("", "", "aeiou")) → "btfl"
• str.maketrans("abc", "xyz") → maps a→x, b→y, c→z (replacement, not deletion)

This is an efficient way to remove or replace multiple characters at once, faster than chaining multiple .replace() calls.

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
  // 76. Binary string to int
  (_i: number) => ({
    q: `What does int("0b1010", 2) return?`,
    o: ['10', '1010', '"0b1010"', 'Error'],
    c: 0,
    e: '"0b1010" is binary for 10. int() with base 2 parses binary strings.',
    de: `The int() function can parse strings in different bases. int("0b1010", 2) interprets the string as a base-2 (binary) number. 1010 in binary = 1×8 + 0×4 + 1×2 + 0×1 = 10.

Key Concepts:
• int(string, base) converts a string in the given base to an integer
• Base 2 = binary: digits are 0 and 1
• "0b" prefix indicates binary (optional when base is specified)
• 1010₂ = 8 + 2 = 10₁₀

Example:
• int("0b1010", 2) → 10
• int("1010", 2) → 10 (prefix is optional)
• int("0b1111", 2) → 15
• int("0b100", 2) → 4

Python also supports int("0b1010", 0) where base 0 means "auto-detect from prefix".

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
  // 77. Hex string to int
  (_i: number) => ({
    q: `What does int("0xff", 16) return?`,
    o: ['255', '0xff', 'ff', 'Error'],
    c: 0,
    e: '"0xff" is hexadecimal for 255. int() with base 16 parses hex strings.',
    de: `The int() function with base 16 parses hexadecimal strings. "0xff" in hex = 15×16 + 15 = 255.

Key Concepts:
• Hexadecimal (base 16) uses digits 0-9 and a-f
• "0x" prefix indicates hexadecimal
• f = 15, so ff = 15×16 + 15 = 255
• Case insensitive: "0xFF" and "0xff" both work

Example:
• int("0xff", 16) → 255
• int("ff", 16) → 255 (prefix optional)
• int("0x1a", 16) → 26 (1×16 + 10)
• int("0x100", 16) → 256

Hexadecimal is widely used for colors (#FF0000), memory addresses, and byte values.

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
  // 78. Octal string to int
  (_i: number) => ({
    q: `What does int("0o17", 8) return?`,
    o: ['15', '17', '0o17', 'Error'],
    c: 0,
    e: '"0o17" is octal for 15. int() with base 8 parses octal strings.',
    de: `The int() function with base 8 parses octal strings. "0o17" in octal = 1×8 + 7 = 15.

Key Concepts:
• Octal (base 8) uses digits 0-7
• "0o" prefix indicates octal
• 17₈ = 1×8 + 7 = 15₁₀
• Octal is less common than hex but used in Unix file permissions

Example:
• int("0o17", 8) → 15
• int("17", 8) → 15 (prefix optional)
• int("0o777", 8) → 511
• int("0o10", 8) → 8

Unix file permissions use octal: 755 (rwxr-xr-x), 644 (rw-r--r--), which is why octal is still relevant.

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
  // 79. bin() function
  (_i: number) => ({
    q: `What does bin(10) return?`,
    o: ['"0b1010"', '1010', '10', '"1010"'],
    c: 0,
    e: "bin() converts an integer to its binary string representation with '0b' prefix.",
    de: `The bin() function converts an integer to its binary string representation, prefixed with "0b".

Key Concepts:
• bin() returns a string, not a number
• The "0b" prefix indicates binary format
• 10 in binary: 10 = 8 + 2 = 1010₂
• The result is always a string: "0b1010"

Example:
• bin(10) → "0b1010"
• bin(0) → "0b0"
• bin(255) → "0b11111111"
• bin(-10) → "-0b1010" (negative numbers get a minus sign)

To get binary without the prefix, use format(10, "b") → "1010" or bin(10)[2:] → "1010".

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
  // 80. hex() function
  (_i: number) => ({
    q: `What does hex(255) return?`,
    o: ['"0xff"', '255', '"ff"', '"FF"'],
    c: 0,
    e: "hex() converts an integer to its hexadecimal string representation with '0x' prefix.",
    de: `The hex() function converts an integer to its lowercase hexadecimal string representation, prefixed with "0x".

Key Concepts:
• hex() returns a string with "0x" prefix
• 255 = 15×16 + 15 = ff in hexadecimal
• The result uses lowercase letters: "0xff" not "0xFF"
• hex() only works with integers

Example:
• hex(255) → "0xff"
• hex(0) → "0x0"
• hex(16) → "0x10"
• hex(-255) → "-0xff"

To get uppercase hex or remove the prefix:
• format(255, "X") → "FF" (uppercase, no prefix)
• format(255, "x") → "ff" (lowercase, no prefix)
• hex(255)[2:] → "ff" (slice off prefix)

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
  // 81. oct() function
  (_i: number) => ({
    q: `What does oct(15) return?`,
    o: ['"0o17"', '15', '"17"', '"0o15"'],
    c: 0,
    e: "oct() converts an integer to its octal string representation with '0o' prefix.",
    de: `The oct() function converts an integer to its octal string representation, prefixed with "0o".

Key Concepts:
• oct() returns a string with "0o" prefix
• 15 = 1×8 + 7 = 17 in octal
• The result is always a string: "0o17"
• oct() only works with integers

Example:
• oct(15) → "0o17"
• oct(0) → "0o0"
• oct(8) → "0o10"
• oct(64) → "0o100"

To get octal without the prefix, use format(15, "o") → "17" or oct(15)[2:] → "17".

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
  // 82. format() with binary specifier
  (_i: number) => ({
    q: `What does format(42, "b") return?`,
    o: ['"101010"', '"0b101010"', '42', 'Error'],
    c: 0,
    e: 'format() with "b" converts to binary without the "0b" prefix.',
    de: `The format() function with the "b" format specifier converts an integer to its binary representation as a string, without the "0b" prefix that bin() includes.

Key Concepts:
• format(n, "b") → binary string without prefix
• 42 in binary: 32 + 8 + 2 = 101010₂
• Compare: bin(42) → "0b101010" (with prefix)
• format(42, "b") → "101010" (without prefix)

Example:
• format(42, "b") → "101010"
• format(10, "b") → "1010"
• format(255, "b") → "11111111"
• format(0, "b") → "0"

Other format specifiers: "x" (hex), "o" (octal), "d" (decimal), "e" (scientific notation).

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
  // 83. format() with hex specifier
  (_i: number) => ({
    q: `What does format(255, "x") return?`,
    o: ['"ff"', '"0xff"', '"FF"', '255'],
    c: 0,
    e: 'format() with "x" converts to lowercase hex without the "0x" prefix.',
    de: `The format() function with the "x" specifier converts an integer to lowercase hexadecimal without the "0x" prefix. Use "X" for uppercase.

Key Concepts:
• format(n, "x") → lowercase hex without prefix
• format(n, "X") → uppercase hex without prefix
• Compare: hex(255) → "0xff" (with prefix, lowercase)
• format(255, "x") → "ff" (no prefix, lowercase)

Example:
• format(255, "x") → "ff"
• format(255, "X") → "FF"
• format(16, "x") → "10"
• format(0, "x") → "0"

This is useful for generating hex color codes: f"#{format(255, '02x')}{format(128, '02x')}{format(0, '02x')}" → "#ff8000".

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
  // 84. format() with float precision
  (_i: number) => ({
    q: `What does format(3.14, ".1f") return?`,
    o: ['"3.1"', '"3.14"', '"3"', '3.1'],
    c: 0,
    e: '".1f" formats the float to 1 decimal place, giving "3.1".',
    de: `The format() function with ".1f" formats a floating-point number to exactly 1 decimal place. The "f" stands for fixed-point notation.

Key Concepts:
• ".1f" means fixed-point with 1 decimal place
• format() always returns a string
• 3.14 rounded to 1 decimal place is 3.1
• The number after "." specifies decimal places

Example:
• format(3.14, ".1f") → "3.1"
• format(3.14, ".2f") → "3.14"
• format(3.14, ".0f") → "3" (no decimal places)
• format(3.14159, ".3f") → "3.142" (rounds up)
• format(3.0, ".2f") → "3.00" (pads with zeros)

This is equivalent to f"{3.14:.1f}" using f-string syntax. Both are commonly used for formatting currency, measurements, and percentages.

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
  // 85. f-string right alignment
  (_i: number) => ({
    q: `What does f"{'abc':>5}" return?`,
    o: ['  abc', 'abc  ', ' abc ', 'Error'],
    c: 0,
    e: ">5 right-aligns the string in a field of width 5, padding with spaces on the left.",
    de: `The > format specifier right-aligns the value within the given width. f"{'abc':>5}" right-aligns "abc" (length 3) in a field of width 5, adding 2 spaces on the left.

Key Concepts:
• > means right-align
• 5 is the minimum field width
• "abc" has length 3, so 5 - 3 = 2 spaces are added on the left
• If the string is longer than the width, no truncation occurs

Example:
• f"{'abc':>5}" → "  abc" (2 spaces + "abc")
• f"{'abcdef':>5}" → "abcdef" (no truncation, already wider)
• f"{'x':>5}" → "    x" (4 spaces + "x")
• f"{42:>5}" → "   42" (works with numbers too)

Alignment options: > (right), < (left), ^ (center). You can also specify a fill character: f"{'abc':*>5}" → "**abc".

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
  // 86. f-string left alignment
  (_i: number) => ({
    q: `What does f"{'abc':<5}" return?`,
    o: ['abc  ', '  abc', ' abc ', 'Error'],
    c: 0,
    e: "<5 left-aligns the string in a field of width 5, padding with spaces on the right.",
    de: `The < format specifier left-aligns the value within the given width. f"{'abc':<5}" left-aligns "abc" (length 3) in a field of width 5, adding 2 spaces on the right.

Key Concepts:
• < means left-align (default for strings)
• 5 is the minimum field width
• "abc" has length 3, so 5 - 3 = 2 spaces are added on the right
• For strings, left-align is the default, so f"{'abc':5}" is the same as f"{'abc':<5}"

Example:
• f"{'abc':<5}" → "abc  " ("abc" + 2 spaces)
• f"{'x':<5}" → "x    " ("x" + 4 spaces)
• f"{'abc':<3}" → "abc" (exact width, no padding needed)

This is useful for creating formatted tables or aligned output where you need consistent column widths.

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
  // 87. f-string center alignment
  (_i: number) => ({
    q: `What does f"{'abc':^7}" return?`,
    o: ['  abc  ', 'abc    ', '    abc', 'Error'],
    c: 0,
    e: "^7 center-aligns the string in a field of width 7, padding with spaces on both sides.",
    de: `The ^ format specifier center-aligns the value within the given width. f"{'abc':^7}" centers "abc" (length 3) in a field of width 7, adding 2 spaces on each side.

Key Concepts:
• ^ means center-align
• 7 is the minimum field width
• "abc" has length 3, so 7 - 3 = 4 spaces total, 2 on each side
• If padding is odd, the extra space goes on the right

Example:
• f"{'abc':^7}" → "  abc  " (2 spaces on each side)
• f"{'ab':^7}" → "  ab   " (2 left, 3 right — extra goes right)
• f"{'abc':*^7}" → "**abc**" (using * as fill character)

Center alignment is useful for creating centered headers, titles, or visual separators in terminal output.

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
  // 88. f-string hex with prefix
  (_i: number) => ({
    q: `What does f"{42:#x}" return?`,
    o: ['"0x2a"', '"2a"', '"0x42"', '"42"'],
    c: 0,
    e: "#x formats the number as hexadecimal with the 0x prefix. 42 in hex is 2a.",
    de: `The # flag in format specifiers adds the base prefix. #x gives lowercase hex with "0x" prefix. 42 in hexadecimal is 2a (2×16 + 10 = 42).

Key Concepts:
• #x → hex with "0x" prefix, lowercase
• #X → hex with "0X" prefix, uppercase
• Without #: f"{42:x}" → "2a" (no prefix)
• 42 = 2×16 + 10 = 0x2a

Example:
• f"{42:#x}" → "0x2a"
• f"{42:#X}" → "0X2A"
• f"{42:x}" → "2a" (no prefix)
• f"{255:#x}" → "0xff"

The # flag also works with binary (#b → 0b prefix) and octal (#o → 0o prefix).

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
  // 89. f-string binary with prefix
  (_i: number) => ({
    q: `What does f"{42:#b}" return?`,
    o: ['"0b101010"', '"101010"', '"0b42"', 'Error'],
    c: 0,
    e: "#b formats the number as binary with the 0b prefix. 42 in binary is 101010.",
    de: `The #b format specifier converts a number to binary with the "0b" prefix. 42 in binary is 101010 (32 + 8 + 2).

Key Concepts:
• #b → binary with "0b" prefix
• Without #: f"{42:b}" → "101010" (no prefix)
• 42 = 32 + 8 + 2 = 0b101010
• Same result as bin(42), but within an f-string

Example:
• f"{42:#b}" → "0b101010"
• f"{42:b}" → "101010" (no prefix)
• f"{10:#b}" → "0b1010"
• f"{255:#b}" → "0b11111111"

The # flag is the f-string equivalent of using bin(), hex(), or oct() functions.

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
  // 90. f-string octal with prefix
  (_i: number) => ({
    q: `What does f"{42:#o}" return?`,
    o: ['"0o52"', '"52"', '"0o42"', 'Error'],
    c: 0,
    e: "#o formats the number as octal with the 0o prefix. 42 in octal is 52.",
    de: `The #o format specifier converts a number to octal with the "0o" prefix. 42 in octal is 52 (5×8 + 2 = 42).

Key Concepts:
• #o → octal with "0o" prefix
• Without #: f"{42:o}" → "52" (no prefix)
• 42 = 5×8 + 2 = 0o52
• Same result as oct(42), but within an f-string

Example:
• f"{42:#o}" → "0o52"
• f"{42:o}" → "52" (no prefix)
• f"{8:#o}" → "0o10"
• f"{64:#o}" → "0o100"

Octal representation is primarily used in Unix/Linux for file permissions (e.g., 0o755 = rwxr-xr-x).

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
  // 91. f-string underscore separator
  (_i: number) => ({
    q: `What does f"{1234567:_}" return?`,
    o: ['"1_234_567"', '"1234567"', '"_1234567_"', 'Error'],
    c: 0,
    e: "The _ format specifier adds underscores as thousands separators.",
    de: `The underscore (_) format specifier adds underscore separators every three digits, making large numbers more readable.

Key Concepts:
• _ adds underscore as thousands separator
• 1234567 → "1_234_567"
• Similar to using commas: f"{1234567:,}" → "1,234,567"
• Python 3.6+ supports underscores in numeric literals too: 1_234_567

Example:
• f"{1234567:_}" → "1_234_567"
• f"{1234567:,}" → "1,234,567" (comma separator)
• f"{1000:_}" → "1_000"
• f"{100:_}" → "100" (no separator needed for < 4 digits)

This matches Python's syntax for numeric literals, where you can write 1_000_000 instead of 1000000 for readability.

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
  // 92. f-string with dict literal (spaces required)
  (_i: number) => ({
    q: `What does f"{ {1: 2} }" return?`,
    o: ['"{1: 2}"', 'SyntaxError', '"{1:2}"', '"{ {1: 2} }"'],
    c: 0,
    e: "Spaces around the dict literal help Python distinguish f-string braces from dict braces.",
    de: `In f-strings, curly braces { } denote expressions. To include a dict literal, you need spaces to help Python's parser distinguish between f-string braces and dict braces.

Key Concepts:
• f"{ {1: 2} }" works — the spaces separate the f-string { } from the dict { }
• The expression {1: 2} is evaluated, producing the dict {1: 2}
• str({1: 2}) → "{1: 2}", which is embedded in the f-string
• Without spaces, f"{{1: 2}}" would be interpreted as escaped braces

Example:
• f"{ {1: 2} }" → "{1: 2}"
• f"{ {'a': 1} }" → "{'a': 1}"
• f"{{not an expression}}" → "{not an expression}" (escaped braces, literal text)

This is a subtle parsing detail — the spaces are necessary for Python to correctly identify the dict as an expression inside the f-string.

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
  // 93. Old-style % formatting with dict
  (_i: number) => ({
    q: `What does "Name: %(name)s" % {"name": "Alice"} return?`,
    o: ['"Name: Alice"', '"Name: %(name)s"', 'Error', '"Name: name"'],
    c: 0,
    e: "%(name)s is old-style dict formatting — it looks up 'name' in the provided dict.",
    de: `The % operator supports dictionary-based formatting using %(key)s syntax. The key in parentheses is looked up in the dictionary on the right side.

Key Concepts:
• %(name)s looks up "name" key in the dict and formats as string
• "s" means string format, "d" means integer, "f" means float
• This is Python's oldest string formatting method
• Still works but f-strings and .format() are preferred

Example:
• "Name: %(name)s" % {"name": "Alice"} → "Name: Alice"
• "%(x)d + %(y)d" % {"x": 3, "y": 4} → "3 + 4"
• "%(item)s: $%(price).2f" % {"item": "Book", "price": 9.99} → "Book: $9.99"

Modern alternatives:
• f-string: f"Name: {name}" (preferred)
• .format(): "Name: {name}".format(name="Alice")

The % formatting is still common in logging: logging.info("User %s logged in", username).

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
  // 94. str.format_map() method
  (_i: number) => ({
    q: `What does "Hello, {name}!".format_map({"name": "Bob"}) return?`,
    o: ['"Hello, Bob!"', '"Hello, {name}!"', 'Error', '"Hello, name!"'],
    c: 0,
    e: "format_map() works like format() but takes a mapping (dict) directly.",
    de: `The format_map() method is similar to format(**mapping) but uses the mapping directly without unpacking. It replaces {key} placeholders with values from the provided dictionary.

Key Concepts:
• format_map() takes a single dict argument
• Replaces {key} with the corresponding value from the dict
• Similar to .format(**dict) but more efficient
• Useful with custom mapping types (like defaultdict)

Example:
• "Hello, {name}!".format_map({"name": "Bob"}) → "Hello, Bob!"
• "{x} + {y}".format_map({"x": 1, "y": 2}) → "1 + 2"

Key advantage over .format(**d):
• format_map() doesn't create a copy of the dict
• Works with dict subclasses that have custom __missing__ methods
• from collections import defaultdict; d = defaultdict(lambda: "?")
• "{name} is {age}".format_map(d) → "? is ?" (no KeyError!)

In practice, f-strings are usually preferred for simple cases.

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
  // 95. ascii() function
  (_i: number) => ({
    q: `What does ascii("café") return?`,
    o: ['\'caf\\xe9\'', "café", "cafe", "Error"],
    c: 0,
    e: "ascii() returns a string representation where non-ASCII characters are escaped with \\x, \\u, or \\U.",
    de: `The ascii() function returns a printable representation of an object, with non-ASCII characters escaped using \\x, \\u, or \\U sequences. It's similar to repr() but escapes all non-ASCII characters.

Key Concepts:
• ascii() escapes non-ASCII characters
• é (U+00E9) becomes \\xe9
• The result includes quotes around the string
• Useful for debugging strings with special characters

Example:
• ascii("café") → "'caf\\xe9'" (é escaped as \\xe9)
• ascii("hello") → "'hello'" (all ASCII, no escaping)
• ascii("π") → "'\\u03c0'" (pi symbol escaped)
• ascii("🐍") → "'\\U0001f40d'" (emoji escaped with \\U)

Compare with repr():
• repr("café") → "'café'" (repr preserves non-ASCII characters)
• ascii("café") → "'caf\\xe9'" (ascii escapes them)

ascii() is useful when you need to ensure a string contains only ASCII characters.

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
  // 96. repr() vs str()
  (_i: number) => ({
    q: `What is the difference between repr("hello") and str("hello")?`,
    o: [`"'hello'" and "hello"`, `Both return "hello"`, `Both return "'hello'"`, `Error`],
    c: 0,
    e: 'repr() includes quotes in the output ("\'hello\'"), while str() returns the string as-is ("hello").',
    de: `repr() and str() serve different purposes. repr() returns a developer-oriented representation that could recreate the object, while str() returns a human-readable version.

Key Concepts:
• str("hello") → "hello" (just the content)
• repr("hello") → "'hello'" (includes quotes, shows it's a string)
• repr() is meant for debugging: the output looks like valid Python code
• str() is meant for display: the output is human-readable

Example:
• str("hello") → "hello"
• repr("hello") → "'hello'"
• str(42) → "42"
• repr(42) → "42" (same for numbers)
• str("it's") → "it's"
• repr("it's") → '"it\'s"' (escapes the quote)

In the REPL, Python uses repr() to display results. print() uses str(). This is why typing "hello" in the REPL shows 'hello' (with quotes), but print("hello") shows hello (without quotes).

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
  // 97. isinstance() with str
  (_i: number) => ({
    q: `What does isinstance("hello", str) return?`,
    o: ['True', 'False', '"str"', 'Error'],
    c: 0,
    e: '"hello" is a string, so isinstance("hello", str) returns True.',
    de: `isinstance() checks whether an object is an instance of a given class (or a subclass of it). "hello" is a string, so isinstance("hello", str) returns True.

Key Concepts:
• isinstance(obj, class) → True if obj is an instance of class
• isinstance() also checks subclasses (bool is a subclass of int)
• Preferred over type() == for type checking because it handles inheritance
• Can check multiple types: isinstance(x, (int, float))

Example:
• isinstance("hello", str) → True
• isinstance(42, str) → False
• isinstance(True, int) → True (bool is subclass of int!)
• isinstance("hello", (str, int)) → True (matches str)

Best practice: Use isinstance() instead of type(x) == str because isinstance handles subclasses correctly.

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
  // 98. isinstance() returning False
  (_i: number) => ({
    q: `What does isinstance(42, str) return?`,
    o: ['False', 'True', 'Error', 'None'],
    c: 0,
    e: "42 is an integer, not a string, so isinstance(42, str) returns False.",
    de: `isinstance() returns False when the object is not an instance of the specified class. 42 is an int, not a str, so isinstance(42, str) returns False.

Key Concepts:
• isinstance(42, str) → False (42 is int, not str)
• isinstance(42, int) → True (42 is indeed an int)
• The second argument is the class to check against
• This is a straightforward type check

Example:
• isinstance(42, str) → False
• isinstance(42, int) → True
• isinstance("42", str) → True (the string "42" is a str)
• isinstance("42", int) → False (the string "42" is not an int)

Note the difference: 42 (no quotes) is an integer, "42" (with quotes) is a string. They are completely different types even though they represent the same value.

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
  // 99. str.isidentifier() method
  (_i: number) => ({
    q: `What does "2var".isidentifier() return?`,
    o: ['False', 'True', '"2var"', 'Error'],
    c: 0,
    e: "Variable names cannot start with a digit, so \"2var\" is not a valid identifier.",
    de: `The isidentifier() method checks whether a string is a valid Python identifier (variable/function/class name). "2var" starts with a digit, which is not allowed, so it returns False.

Key Concepts:
• Valid identifiers: start with a letter or underscore, followed by letters, digits, or underscores
• "my_var".isidentifier() → True (starts with letter)
• "_x".isidentifier() → True (starts with underscore)
• "2var".isidentifier() → False (starts with digit)
• "my var".isidentifier() → False (contains space)

Example:
• "my_var".isidentifier() → True
• "_x".isidentifier() → True
• "__init__".isidentifier() → True
• "2var".isidentifier() → False
• "my-var".isidentifier() → False (hyphen not allowed)
• "class".isidentifier() → True (it's a valid identifier, even though it's a keyword)

To also check for keywords: import keyword; keyword.iskeyword("class") → True.

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
  // 100. type() is check
  (_i: number) => ({
    q: `What does type("hello") is str return?`,
    o: ['True', 'False', '<class \'str\'>', 'Error'],
    c: 0,
    e: 'type("hello") returns <class \'str\'>, and checking it with "is str" returns True.',
    de: `The expression type("hello") is str checks if the exact type of "hello" is str using identity comparison. Since "hello" is directly a str instance, this returns True.

Key Concepts:
• type("hello") returns <class 'str'>
• "is" checks identity — is it the exact same type object?
• type("hello") is str → True (exact match)
• This is stricter than isinstance() — it doesn't consider subclasses

Example:
• type("hello") is str → True
• type(42) is int → True
• type(True) is bool → True
• type(True) is int → False (even though bool is a subclass of int!)

isinstance() vs type() is:
• isinstance(True, int) → True (checks inheritance chain)
• type(True) is int → False (checks exact type only)

In most cases, isinstance() is preferred because it handles inheritance correctly.

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
