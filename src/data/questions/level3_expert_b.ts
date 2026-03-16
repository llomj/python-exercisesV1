// --- LEVEL 3 EXPERT B: Truthiness Edge Cases, Boolean Gotchas, Advanced Conditionals (50 Questions) ---
// Questions 51-100 of expert set. Each is TRULY UNIQUE.
export const level3ExpertB = [
  // 51. bool(float("nan")) → True (NaN is truthy!)
  (_i: number) => ({
    q: `What is bool(float("nan"))?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "NaN is truthy! Only 0 and 0.0 are falsy among numbers. NaN is a non-zero float value.",
    de: `This is one of Python's most surprising gotchas. float("nan") is Not a Number, but it is truthy.

Key concepts:
• bool(float("nan")) → True
• NaN is a special IEEE 754 value, but it's not zero
• Python's truthiness rule for numbers: only 0 (int) and 0.0 (float) are falsy
• NaN fails equality even with itself: float("nan") != float("nan")
• Use math.isnan() to check for NaN, never truthiness

How it works:
• float("nan") creates a NaN float value
• bool() checks if the value is truthy
• Since NaN is not 0 or 0.0, it's truthy
• This catches many beginners off guard

Common pitfall:
• if value: will pass for NaN — don't use truthiness to validate numbers
• Always use math.isnan() for NaN checks

Example: bool(float("nan")) → True. Despite NaN meaning "not a number", Python considers it truthy.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 52. bool(float("inf")) → True
  (_i: number) => ({
    q: `What is bool(float("inf"))?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "Infinity is truthy. Only 0 and 0.0 are falsy floats.",
    de: `Positive infinity is a valid float value and is truthy in Python.

Key concepts:
• bool(float("inf")) → True
• Infinity is not zero, so it's truthy
• Only 0 and 0.0 are falsy among numeric types
• float("inf") is a special IEEE 754 value representing positive infinity
• math.isinf() can check for infinity

How it works:
• float("inf") creates positive infinity
• bool() checks truthiness — any non-zero number is truthy
• inf is definitely not zero, so it's True

Example: bool(float("inf")) → True. bool(float("-inf")) → True. bool(0.0) → False.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 53. bool(float("-inf")) → True
  (_i: number) => ({
    q: `What is bool(float("-inf"))?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "Negative infinity is also truthy — only zero floats are falsy.",
    de: `Negative infinity is truthy, just like positive infinity.

Key concepts:
• bool(float("-inf")) → True
• Negative infinity is not zero, so it's truthy
• Both float("inf") and float("-inf") are truthy
• Only 0.0 and -0.0 are falsy floats
• The sign of infinity doesn't affect truthiness

How it works:
• float("-inf") creates negative infinity
• bool() checks if the value is non-zero
• -inf is not zero → True

Example: bool(float("-inf")) → True. All non-zero floats, including special values like inf and nan, are truthy.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 54. bool(0.0) → False
  (_i: number) => ({
    q: `What is bool(0.0)?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "0.0 is the only numeric float value that is falsy (besides -0.0).",
    de: `Zero as a float is falsy, just like zero as an integer.

Key concepts:
• bool(0.0) → False
• 0.0 is the float representation of zero
• Python treats all numeric zeros as falsy: 0, 0.0, 0j, Decimal(0), Fraction(0)
• Any non-zero float is truthy, including tiny values like 1e-300

How it works:
• 0.0 is numerically zero
• bool() returns False for any numeric zero
• This is consistent across all numeric types

Example: bool(0.0) → False. bool(0.1) → True. bool(-0.1) → True. bool(1e-300) → True.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 55. bool(-0.0) → False
  (_i: number) => ({
    q: `What is bool(-0.0)?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "Negative zero (-0.0) is still zero and therefore falsy.",
    de: `IEEE 754 has both +0.0 and -0.0, but Python treats both as falsy.

Key concepts:
• bool(-0.0) → False
• -0.0 == 0.0 in Python (they're equal)
• Both are falsy because they represent zero
• -0.0 exists in IEEE 754 floating-point standard
• In Python, -0.0 and 0.0 are almost indistinguishable

How it works:
• -0.0 is negative zero from IEEE 754
• bool() checks if it's zero → it is zero → False
• -0.0 == 0.0 → True (they compare equal)
• Only math.copysign() can distinguish them

Example: bool(-0.0) → False. -0.0 == 0.0 → True. math.copysign(1, -0.0) → -1.0.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 56. bool("0") → True (non-empty string)
  (_i: number) => ({
    q: `What is bool("0")?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "The string \"0\" is non-empty, so it's truthy. Only empty string \"\" is falsy.",
    de: `This is a classic Python gotcha. The string "0" is truthy because string truthiness depends on length, not content.

Key concepts:
• bool("0") → True
• String truthiness = is the string non-empty?
• "0" has length 1, so it's truthy
• Only "" (empty string) is falsy
• The content of the string doesn't matter for truthiness

Common gotcha:
• In some languages (PHP, JavaScript), "0" is falsy
• In Python, ALL non-empty strings are truthy
• "0", "False", "None", " " — all truthy because non-empty

How it works:
• "0" is a string with one character
• bool("0") checks len("0") > 0 → True
• The character being '0' is irrelevant

Example: bool("0") → True. bool("") → False. bool(" ") → True. bool("False") → True.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 57. bool("False") → True
  (_i: number) => ({
    q: `What is bool("False")?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "The string \"False\" is non-empty (5 characters), so it's truthy!",
    de: `The string "False" is truthy — a very common beginner mistake.

Key concepts:
• bool("False") → True
• "False" is a string with 5 characters, not the boolean value False
• String truthiness depends only on whether the string is empty
• Only "" is a falsy string — everything else is truthy
• The word "False" in a string has no special meaning

Common mistake:
• Confusing the string "False" with the boolean False
• bool("False") ≠ bool(False)
• bool(False) → False (actual boolean)
• bool("False") → True (non-empty string)

Example: bool("False") → True. bool("") → False. bool("True") → True. bool("0") → True.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 58. bool("None") → True
  (_i: number) => ({
    q: `What is bool("None")?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "The string \"None\" is non-empty (4 characters), so it's truthy.",
    de: `Similar to "False", the string "None" is truthy because it's a non-empty string.

Key concepts:
• bool("None") → True
• "None" is a 4-character string, not the None object
• String truthiness = non-empty → truthy
• Only "" is falsy among strings
• The string content "None" has no special truthiness meaning

Key distinction:
• bool(None) → False (actual None object is falsy)
• bool("None") → True (non-empty string is truthy)
• These are completely different types and values

Example: bool("None") → True. bool(None) → False. "None" is str, None is NoneType.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 59. bool([0]) → True (non-empty list)
  (_i: number) => ({
    q: `What is bool([0])?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "The list [0] is non-empty (has 1 element), so it's truthy — even though 0 is falsy.",
    de: `Container truthiness depends on length, not the truthiness of contents.

Key concepts:
• bool([0]) → True
• [0] is a list with one element — it's non-empty
• Container truthiness: empty → falsy, non-empty → truthy
• The element 0 is falsy, but the LIST containing it is truthy
• Truthiness of contents is irrelevant to container truthiness

How it works:
• [0] has len([0]) == 1
• bool() checks if the container is non-empty
• 1 > 0 → truthy → True
• What's inside doesn't matter

Common mistake:
• Thinking bool([0]) would be False because 0 is falsy
• Python checks the container, not its contents

Example: bool([0]) → True. bool([False]) → True. bool([None]) → True. bool([]) → False.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 60. bool([[]]) → True (non-empty list containing empty list)
  (_i: number) => ({
    q: `What is bool([[]])?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "The outer list has one element (an empty list), so it's non-empty and truthy.",
    de: `This tests nested container truthiness — the outer list is non-empty.

Key concepts:
• bool([[]]) → True
• [[]] is a list containing one element: an empty list
• The outer list has length 1 → non-empty → truthy
• The inner [] is falsy, but that doesn't affect the outer list's truthiness
• Container truthiness only checks the container's own length

How it works:
• [[]] → a list with 1 element
• len([[]]) == 1
• bool() checks outer container: non-empty → True
• The element [] being falsy is irrelevant

Contrast:
• bool([]) → False (empty list)
• bool([[]]) → True (list with one element)
• bool([[], []]) → True (list with two elements)

Example: bool([[]]) → True. The outer list is non-empty, so it's truthy regardless of contents.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 61. bool((0,)) → True (non-empty tuple)
  (_i: number) => ({
    q: `What is bool((0,))?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "The tuple (0,) has one element, so it's non-empty and truthy.",
    de: `Tuple truthiness follows the same rule as lists: empty → falsy, non-empty → truthy.

Key concepts:
• bool((0,)) → True
• (0,) is a tuple with one element (the trailing comma makes it a tuple)
• Non-empty tuple → truthy
• The element 0 being falsy doesn't affect the tuple's truthiness
• Without the comma, (0) would just be the integer 0

How it works:
• (0,) is a 1-element tuple
• len((0,)) == 1
• bool() checks if non-empty → True

Important syntax note:
• (0,) is a tuple — the comma makes it a tuple
• (0) is just the integer 0 — no comma, no tuple
• bool((0,)) → True (non-empty tuple)
• bool((0)) → bool(0) → False (just the integer 0)

Example: bool((0,)) → True. bool(()) → False. bool((0)) → False (that's just 0).

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 62. bool({0: 0}) → True (non-empty dict)
  (_i: number) => ({
    q: `What is bool({0: 0})?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "The dict {0: 0} has one key-value pair, so it's non-empty and truthy.",
    de: `Dictionary truthiness depends on whether it has any key-value pairs.

Key concepts:
• bool({0: 0}) → True
• {0: 0} is a dict with one entry — non-empty → truthy
• Both the key (0) and value (0) are falsy, but the dict itself is truthy
• Only empty dict {} is falsy
• Container truthiness ignores the truthiness of keys and values

How it works:
• {0: 0} has len({0: 0}) == 1
• bool() checks if non-empty → True
• The falsy key and value are irrelevant

Example: bool({0: 0}) → True. bool({}) → False. bool({False: None}) → True (non-empty).

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 63. bool(frozenset()) → False
  (_i: number) => ({
    q: `What is bool(frozenset())?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "An empty frozenset is falsy, just like an empty set or empty list.",
    de: `frozenset() creates an empty immutable set, which is falsy.

Key concepts:
• bool(frozenset()) → False
• frozenset() creates an empty frozenset
• Empty containers are falsy: [], (), {}, set(), frozenset()
• frozenset is the immutable version of set
• Same truthiness rules apply as for regular sets

How it works:
• frozenset() → frozenset() (empty)
• len(frozenset()) == 0
• bool() checks if non-empty → False

Comparison:
• bool(frozenset()) → False (empty)
• bool(frozenset({1})) → True (non-empty)
• bool(set()) → False (empty set, same rule)

Example: bool(frozenset()) → False. All empty containers are falsy in Python.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 64. bool(frozenset({0})) → True
  (_i: number) => ({
    q: `What is bool(frozenset({0}))?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "frozenset({0}) has one element (0), so it's non-empty and truthy.",
    de: `A non-empty frozenset is truthy, regardless of what it contains.

Key concepts:
• bool(frozenset({0})) → True
• frozenset({0}) creates a frozenset containing the element 0
• It has one element → non-empty → truthy
• The element 0 being falsy doesn't matter
• Container truthiness only checks if the container has any elements

How it works:
• frozenset({0}) → frozenset({0}) with one element
• len(frozenset({0})) == 1
• bool() checks if non-empty → True

Example: bool(frozenset({0})) → True. bool(frozenset()) → False. Container truthiness ignores element values.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 65. bool(bytearray()) → False
  (_i: number) => ({
    q: `What is bool(bytearray())?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "An empty bytearray is falsy, just like any other empty container.",
    de: `bytearray() creates an empty mutable byte sequence, which is falsy.

Key concepts:
• bool(bytearray()) → False
• bytearray() creates an empty bytearray
• Empty containers are always falsy in Python
• bytearray is a mutable sequence of bytes (0-255)
• Same truthiness rule as bytes, str, list, etc.

How it works:
• bytearray() → bytearray(b'') (empty)
• len(bytearray()) == 0
• bool() checks if non-empty → False

Example: bool(bytearray()) → False. bool(bytearray(b'\\x00')) → True (has one byte).

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 66. bool(bytearray(b"\x00")) → True
  (_i: number) => ({
    q: `What is bool(bytearray(b"\\x00"))?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "bytearray(b\"\\x00\") has one byte (a zero byte), so it's non-empty and truthy.",
    de: `A bytearray containing a zero byte is truthy because it's non-empty.

Key concepts:
• bool(bytearray(b"\\x00")) → True
• b"\\x00" is a single zero byte (null byte)
• The bytearray has length 1 → non-empty → truthy
• The byte value being 0 doesn't affect container truthiness
• Only empty bytearray() is falsy

Common gotcha:
• The zero byte (\\x00) is falsy as an integer (0)
• But a container holding it is non-empty → truthy
• Container truthiness ≠ element truthiness

Example: bool(bytearray(b"\\x00")) → True. len(bytearray(b"\\x00")) == 1 → non-empty.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 67. bool(range(0)) → False
  (_i: number) => ({
    q: `What is bool(range(0))?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "range(0) is an empty range (no elements), so it's falsy.",
    de: `range(0) produces an empty sequence, which is falsy.

Key concepts:
• bool(range(0)) → False
• range(0) generates no numbers (start=0, stop=0, so empty)
• Empty range is falsy, just like an empty list
• range objects support truthiness testing via __bool__
• len(range(0)) == 0

How it works:
• range(0) → range(0, 0) → empty sequence
• No integers from 0 up to (not including) 0
• bool() checks if it has elements → no → False

Comparison:
• bool(range(0)) → False (empty)
• bool(range(1)) → True (has element 0)
• bool(range(5, 5)) → False (empty: start == stop)

Example: bool(range(0)) → False. range(0) contains no elements.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 68. bool(range(1)) → True
  (_i: number) => ({
    q: `What is bool(range(1))?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "range(1) contains one element (0), so it's non-empty and truthy.",
    de: `range(1) produces a sequence with one element, which is truthy.

Key concepts:
• bool(range(1)) → True
• range(1) generates [0] — one element
• Non-empty range is truthy
• range objects implement __bool__ efficiently (doesn't iterate)
• len(range(1)) == 1

How it works:
• range(1) → range(0, 1) → contains [0]
• Has at least one element → non-empty → True
• Python checks this efficiently without iterating

Example: bool(range(1)) → True. bool(range(0)) → False. bool(range(10)) → True.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 69. bool(object()) → True
  (_i: number) => ({
    q: `What is bool(object())?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "Custom objects are truthy by default unless __bool__ or __len__ is defined.",
    de: `By default, all instances of user-defined classes (and object) are truthy.

Key concepts:
• bool(object()) → True
• object() creates a basic Python object instance
• By default, all objects are truthy
• An object is falsy only if its class defines __bool__ returning False, or __len__ returning 0
• Without __bool__ or __len__, bool() always returns True

How it works:
• object() creates a plain object
• bool() checks for __bool__: object doesn't define one that returns False
• Falls back to default: all objects are truthy
• This is the base behavior inherited by all classes

Customization:
• Define __bool__(self) to control truthiness
• Define __len__(self) — if it returns 0, bool() is False
• __bool__ takes priority over __len__

Example: bool(object()) → True. class Empty: pass; bool(Empty()) → True. Objects are truthy by default.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 70. None or 0 or "" or [] or "found!" → "found!"
  (_i: number) => ({
    q: `What is the result of: None or 0 or "" or [] or "found!"?`,
    o: ['"found!"', "None", "True", "[]"],
    c: 0,
    e: "or returns the first truthy value. None, 0, \"\", [] are all falsy, so \"found!\" is returned.",
    de: `The or operator short-circuits and returns the first truthy value in the chain.

Key concepts:
• None or 0 or "" or [] or "found!" → "found!"
• or evaluates left to right, returning the first truthy value
• None → falsy, skip
• 0 → falsy, skip
• "" → falsy, skip
• [] → falsy, skip
• "found!" → truthy! Return it.

How it works:
• Python's or doesn't return True/False — it returns the actual value
• It returns the first truthy operand, or the last operand if all are falsy
• This is called short-circuit evaluation

Important detail:
• or returns the VALUE, not bool(value)
• "found!" is returned, not True
• If all were falsy, the last value would be returned

Example: None or 0 or "" or [] or "found!" → "found!". The first four are falsy, "found!" is the first truthy value.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 71. True + True + True → 3
  (_i: number) => ({
    q: `What is True + True + True?`,
    o: ["3", "True", "Error", "1"],
    c: 0,
    e: "bool is a subclass of int: True is 1, so True + True + True = 1 + 1 + 1 = 3.",
    de: `In Python, bool is a subclass of int. True equals 1 and False equals 0 in arithmetic.

Key concepts:
• True + True + True → 3
• bool is a subclass of int
• True == 1 and False == 0 in arithmetic contexts
• When used in arithmetic, booleans behave as integers
• This is by design, not a bug

How it works:
• True + True = 1 + 1 = 2
• 2 + True = 2 + 1 = 3
• The result is an int, not a bool

Why this exists:
• Historical: Python's bool was added in 2.3, inheriting from int
• Practical: allows sum(list_of_bools) to count True values
• sum([True, False, True, True]) → 3

Example: True + True + True → 3. False + True → 1. True * 5 → 5.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 72. True * 10 → 10
  (_i: number) => ({
    q: `What is True * 10?`,
    o: ["10", "True", "Error", "1"],
    c: 0,
    e: "True is 1 in arithmetic, so True * 10 = 1 * 10 = 10.",
    de: `Since bool inherits from int, True acts as 1 in multiplication.

Key concepts:
• True * 10 → 10
• True == 1 in arithmetic
• 1 * 10 = 10
• The result is an int (10), not a bool
• False * 10 → 0 (since False == 0)

How it works:
• Python sees True as integer 1 in arithmetic operations
• 1 * 10 = 10
• The result type is int

Example: True * 10 → 10. False * 10 → 0. True * True → 1. True + 99 → 100.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 73. False ** 0 → 1
  (_i: number) => ({
    q: `What is False ** 0?`,
    o: ["1", "0", "False", "Error"],
    c: 0,
    e: "False is 0 in arithmetic. 0 ** 0 = 1 by Python convention (and math convention).",
    de: `False ** 0 is equivalent to 0 ** 0, which Python defines as 1.

Key concepts:
• False ** 0 → 1
• False == 0 in arithmetic
• 0 ** 0 = 1 in Python (and in most math conventions)
• This follows the convention that x**0 = 1 for all x
• The result is an int (1), not a bool

How it works:
• False is treated as 0
• 0 ** 0 = 1 (Python convention)
• The result is int 1

Mathematical note:
• 0**0 is sometimes considered indeterminate in pure math
• But Python (and most programming languages) define it as 1
• This is useful for polynomial evaluation and combinatorics

Example: False ** 0 → 1. True ** 0 → 1. 0 ** 0 → 1. Any number ** 0 → 1.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 74. True == 1 → True
  (_i: number) => ({
    q: `What is True == 1?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "True equals 1 because bool is a subclass of int. True == 1 is True.",
    de: `True and 1 are equal in Python because bool inherits from int.

Key concepts:
• True == 1 → True
• bool is a subclass of int
• True has the integer value 1
• == checks value equality, not identity
• This is fundamental to Python's type system

How it works:
• isinstance(True, int) → True (bool is subclass of int)
• True's integer value is 1
• == compares values: 1 == 1 → True
• Similarly: False == 0 → True

Important distinction:
• True == 1 → True (value equality)
• True is 1 → implementation-dependent (identity check)
• Use == for value comparison, is for identity

Example: True == 1 → True. False == 0 → True. True == 1.0 → True (cross-type equality).

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 75. True is 1 → False
  (_i: number) => ({
    q: `What does True is 1 evaluate to?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "is checks identity (same object in memory), not equality. True and 1 are different objects.",
    de: `The is operator checks object identity, not value equality. True and 1 are different objects.

Key concepts:
• True is 1 → False
• is checks if two references point to the same object in memory
• True is a bool object, 1 is an int object
• They have equal values (True == 1) but are different objects
• is checks identity, == checks equality

How it works:
• True is the singleton bool object for truth
• 1 is an int object
• They are different objects in memory
• id(True) ≠ id(1)
• So True is 1 → False

When to use is:
• Comparing with None: x is None
• Comparing with True/False: x is True (rare, but identity check)
• Never use is for value comparison with numbers or strings

Example: True is 1 → False. True == 1 → True. True is True → True.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 76. False == 0 → True
  (_i: number) => ({
    q: `What is False == 0?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "False equals 0 because bool is a subclass of int. False has the integer value 0.",
    de: `False and 0 are equal because bool inherits from int.

Key concepts:
• False == 0 → True
• bool is a subclass of int
• False has the integer value 0
• == checks value equality
• This is the counterpart to True == 1

How it works:
• isinstance(False, int) → True
• False's integer value is 0
• == compares values: 0 == 0 → True

Example: False == 0 → True. False == 0.0 → True. False == "" → False (different types).

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 77. False == 0.0 → True
  (_i: number) => ({
    q: `What is False == 0.0?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "False == 0 == 0.0 — Python compares across numeric types. All numeric zeros are equal.",
    de: `Python's cross-type numeric comparison makes False, 0, and 0.0 all equal.

Key concepts:
• False == 0.0 → True
• False == 0 (bool inherits from int)
• 0 == 0.0 (int-float cross-type comparison)
• Therefore False == 0.0 → True
• All numeric zeros are equal regardless of type

How it works:
• Python automatically converts for cross-type numeric comparison
• False (bool) → 0 (int) → 0.0 (float) for comparison purposes
• 0.0 == 0.0 → True

Example: False == 0.0 → True. False == 0 → True. False == 0j → True (complex zero too).

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 78. False == "" → False
  (_i: number) => ({
    q: `What is False == ""?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "Despite both being falsy, False and \"\" are different types and not equal.",
    de: `Both False and "" are falsy, but they are NOT equal. Python doesn't equate falsy values across types.

Key concepts:
• False == "" → False
• bool(False) → False and bool("") → False (both falsy)
• But == checks VALUE equality, not truthiness equality
• False is a bool (int subclass), "" is a str — different types
• Python doesn't implicitly convert between these types for ==

Common misconception:
• "Falsy values are equal to each other" — WRONG
• Falsy means bool(x) is False, not that x == False
• False == 0 → True (numeric comparison, same type hierarchy)
• False == "" → False (no conversion between bool/int and str)

Example: False == "" → False. False == 0 → True. False == [] → False. False == None → False.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 79. {True: "a", 1: "b"} → {True: "b"}
  (_i: number) => ({
    q: `What is {True: "a", 1: "b"}?`,
    o: ['{True: "b"}', '{True: "a", 1: "b"}', '{1: "b"}', "Error"],
    c: 0,
    e: "True == 1 and hash(True) == hash(1), so they're the same dict key. The value is overwritten to \"b\".",
    de: `Since True == 1 and hash(True) == hash(1), Python treats them as the same dictionary key.

Key concepts:
• {True: "a", 1: "b"} → {True: "b"}
• Dict keys are compared by value AND hash
• True == 1 → True, and hash(True) == hash(1) → True
• So 1 is treated as the same key as True
• The first key (True) is kept, but the value is updated to "b"

How it works:
• Insert True: "a" → dict = {True: "a"}
• Insert 1: "b" → key 1 matches existing key True (equal and same hash)
• Update value: {True: "b"} (key stays True, value becomes "b")
• Result: {True: "b"}

Why True is the key (not 1):
• Python keeps the FIRST key but updates the value
• True was inserted first, so True remains as the key
• The value "b" overwrites "a"

Example: {True: "a", 1: "b"} → {True: "b"}. The dict has only one entry.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 80. {0: "a", False: "b"} → {0: "b"}
  (_i: number) => ({
    q: `What is {0: "a", False: "b"}?`,
    o: ['{0: "b"}', '{0: "a", False: "b"}', '{False: "b"}', "Error"],
    c: 0,
    e: "False == 0 and hash(False) == hash(0), so they're the same key. Value overwritten to \"b\".",
    de: `Just like True/1, False and 0 are treated as the same dictionary key.

Key concepts:
• {0: "a", False: "b"} → {0: "b"}
• False == 0 and hash(False) == hash(0)
• Same key → value overwritten
• The first key (0) is kept, value updated to "b"

How it works:
• Insert 0: "a" → dict = {0: "a"}
• Insert False: "b" → key False matches existing key 0
• Update value: {0: "b"} (key stays 0, value becomes "b")
• Result: {0: "b"}

Symmetry with True/1:
• {True: "a", 1: "b"} → {True: "b"} (keeps True)
• {0: "a", False: "b"} → {0: "b"} (keeps 0)
• First key always wins, last value always wins

Example: {0: "a", False: "b"} → {0: "b"}. Only one entry because 0 and False are the same key.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 81. [True, 1, 1.0].count(True) → 3
  (_i: number) => ({
    q: `What is [True, 1, 1.0].count(True)?`,
    o: ["3", "1", "2", "Error"],
    c: 0,
    e: "True == 1 == 1.0, so .count(True) counts all three as matches.",
    de: `Since True == 1 == 1.0, the count() method matches all three elements.

Key concepts:
• [True, 1, 1.0].count(True) → 3
• count() uses == for comparison
• True == 1 → True (bool inherits from int)
• True == 1.0 → True (cross-type numeric equality)
• All three elements are equal to True

How it works:
• Check True == True → True (count: 1)
• Check 1 == True → True (count: 2)
• Check 1.0 == True → True (count: 3)
• Total: 3

This extends to:
• [True, 1, 1.0].count(1) → 3 (same result)
• [True, 1, 1.0].count(1.0) → 3 (same result)
• All three values are interchangeably equal

Example: [True, 1, 1.0].count(True) → 3. They're all considered equal values.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 82. {True, 1, 1.0} → {True}
  (_i: number) => ({
    q: `What is {True, 1, 1.0}?`,
    o: ["{True}", "{True, 1, 1.0}", "{1}", "{1.0}"],
    c: 0,
    e: "Sets remove duplicates. True == 1 == 1.0, so only the first (True) is kept.",
    de: `Sets eliminate duplicates using == and hash. Since True, 1, and 1.0 are all equal, only the first is kept.

Key concepts:
• {True, 1, 1.0} → {True}
• Sets don't allow duplicates (by equality)
• True == 1 == 1.0 → all equal
• hash(True) == hash(1) == hash(1.0) → all same hash
• The first inserted value is retained

How it works:
• Insert True → {True}
• Insert 1 → already in set (1 == True) → skip
• Insert 1.0 → already in set (1.0 == True) → skip
• Result: {True}

The retained value:
• Sets keep the first value encountered
• True was added first, so True is kept
• {1, True, 1.0} would give {1} (1 first)
• {1.0, True, 1} would give {1.0} (1.0 first)

Example: {True, 1, 1.0} → {True}. Only one element because all three are equal.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 83. sorted([None, 1]) → TypeError
  (_i: number) => ({
    q: `What happens with sorted([None, 1])?`,
    o: ["TypeError", "[None, 1]", "[1, None]", "Error"],
    c: 0,
    e: "Python 3 can't compare None and int with <. sorted() raises TypeError.",
    de: `In Python 3, None cannot be compared with < to other types, so sorted() fails.

Key concepts:
• sorted([None, 1]) → TypeError
• sorted() needs to compare elements using <
• None < 1 raises TypeError in Python 3
• Python 3 removed implicit ordering between incompatible types
• Python 2 allowed this (None was "less than" everything)

How it works:
• sorted() tries to compare None and 1
• None < 1 → TypeError: '<' not supported between instances of 'NoneType' and 'int'
• The sort cannot proceed

Python 2 vs 3:
• Python 2: sorted([None, 1]) → [None, 1] (None < everything)
• Python 3: TypeError (strict type checking for comparisons)
• This is a deliberate design improvement in Python 3

Example: sorted([None, 1]) raises TypeError. Use a key function to handle None: sorted(lst, key=lambda x: (x is None, x)).

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 84. None < 0 → TypeError
  (_i: number) => ({
    q: `What happens with None < 0?`,
    o: ["TypeError", "True", "False", "None"],
    c: 0,
    e: "Python 3 doesn't support < between None and int. Raises TypeError.",
    de: `Ordering comparisons (<, >, <=, >=) are not supported between None and numbers in Python 3.

Key concepts:
• None < 0 → TypeError
• Python 3 requires compatible types for ordering comparisons
• None has no natural ordering with numbers
• This is different from == which works fine
• TypeError: '<' not supported between instances of 'NoneType' and 'int'

How it works:
• Python tries to evaluate None < 0
• NoneType doesn't implement __lt__ for int comparison
• TypeError is raised

Contrast with ==:
• None < 0 → TypeError (ordering not supported)
• None == 0 → False (equality works, returns False)
• None is None → True (identity works)

Example: None < 0 → TypeError. None > 5 → TypeError. None == 0 → False (works fine).

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 85. None == 0 → False
  (_i: number) => ({
    q: `What is None == 0?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "== works with None and int but returns False. None only equals None.",
    de: `Unlike < and >, the == operator works between None and other types, but None is only equal to None.

Key concepts:
• None == 0 → False
• == is allowed between any types (doesn't raise TypeError)
• None is not equal to any number, string, or other value
• None == None → True (only thing None equals)
• This is different from ordering comparisons which raise TypeError

How it works:
• Python evaluates None == 0
• None.__eq__(0) returns NotImplemented
• int.__eq__(0, None) returns NotImplemented
• Python falls back to identity check → different objects → False

Comparison operators with None:
• None == 0 → False (works, returns False)
• None == "" → False (works, returns False)
• None == None → True (only equal to itself)
• None < 0 → TypeError (ordering not supported)
• None is None → True (identity check)

Example: None == 0 → False. None is not equal to 0, even though bool(None) and bool(0) are both False.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 86. x = []; y = x or [1,2] → y = [1, 2]
  (_i: number) => ({
    q: `If x = [], what is y after y = x or [1, 2]?`,
    o: ["[1, 2]", "[]", "True", "None"],
    c: 0,
    e: "Empty list is falsy, so or returns the right operand: [1, 2].",
    de: `The or operator returns the first truthy value. An empty list is falsy, so the right side is returned.

Key concepts:
• x = [] → x is falsy (empty list)
• y = x or [1, 2] → y = [1, 2]
• or returns the first truthy operand
• [] is falsy → skip to right operand
• [1, 2] is truthy → return it

How it works:
• Evaluate x: [] (falsy)
• or needs a truthy value, so evaluate right side: [1, 2]
• [1, 2] is truthy → return [1, 2]
• y = [1, 2]

Common pattern:
• Used for default values: value = user_input or default
• If user_input is falsy, default is used
• Caveat: 0, "", False are also falsy — use if/else for more control

Example: y = [] or [1, 2] → [1, 2]. y = [3] or [1, 2] → [3].

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 87. x = [3]; y = x or [1,2] → y = [3]
  (_i: number) => ({
    q: `If x = [3], what is y after y = x or [1, 2]?`,
    o: ["[3]", "[1, 2]", "True", "None"],
    c: 0,
    e: "Non-empty list is truthy, so or short-circuits and returns x = [3].",
    de: `The or operator short-circuits: since [3] is truthy, it's returned immediately.

Key concepts:
• x = [3] → x is truthy (non-empty list)
• y = x or [1, 2] → y = [3]
• or short-circuits: returns first truthy value
• [3] is truthy → return it, don't evaluate [1, 2]

How it works:
• Evaluate x: [3] (truthy — non-empty list)
• or found a truthy value → short-circuit, return [3]
• [1, 2] is never evaluated
• y = [3]

Short-circuit benefit:
• The right side is never evaluated if left is truthy
• Useful for expensive operations on the right
• x or expensive_function() — function only called if x is falsy

Example: y = [3] or [1, 2] → [3]. y = [] or [1, 2] → [1, 2].

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 88. a = b = c = 0; a == b == c → True
  (_i: number) => ({
    q: `If a = b = c = 0, what is a == b == c?`,
    o: ["True", "False", "Error", "0"],
    c: 0,
    e: "Chained comparison: a == b == c means (a == b) and (b == c). 0 == 0 and 0 == 0 → True.",
    de: `Python supports chained comparisons, which expand to logical AND of adjacent pairs.

Key concepts:
• a = b = c = 0
• a == b == c is equivalent to (a == b) and (b == c)
• (0 == 0) and (0 == 0) → True and True → True
• This is NOT (a == b) == c (which would be True == 0 → False!)

How it works:
• Python expands chained comparison: a == b == c
• Becomes: (a == b) and (b == c)
• (0 == 0) → True
• (0 == 0) → True
• True and True → True

Important:
• Chained comparisons are AND of pairwise checks
• a < b < c means (a < b) and (b < c)
• This is NOT left-to-right evaluation of operators
• b is only evaluated once in the chain

Example: 0 == 0 == 0 → True. 1 < 2 < 3 → True. 1 < 2 > 1 → True.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 89. 1 != 2 != 1 → True
  (_i: number) => ({
    q: `What is 1 != 2 != 1?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "Chained: (1 != 2) and (2 != 1) → True. It does NOT check all pairwise combinations!",
    de: `This is a subtle gotcha with chained != comparisons.

Key concepts:
• 1 != 2 != 1 → True
• Expands to: (1 != 2) and (2 != 1)
• (1 != 2) → True
• (2 != 1) → True
• True and True → True

The gotcha:
• You might expect False because 1 appears twice
• But chained != does NOT check all pairs
• It only checks adjacent pairs: (1 != 2) and (2 != 1)
• It does NOT check 1 != 1 (the first and last values)

This is different from "all distinct":
• 1 != 2 != 1 → True (only adjacent pairs checked)
• But 1 and 1 ARE equal — they're not "all different"
• To check all elements are distinct, use: len(set([1, 2, 1])) == 3 → False

Example: 1 != 2 != 1 → True. Chained != checks adjacent pairs only, not all combinations.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 90. {i: i**2 for i in range(5) if i%2} → {1: 1, 3: 9}
  (_i: number) => ({
    q: `What is {i: i**2 for i in range(5) if i % 2}?`,
    o: ["{1: 1, 3: 9}", "{0: 0, 1: 1, 4: 16}", "{2: 4, 4: 16}", "{1: 1, 2: 4, 3: 9, 4: 16}"],
    c: 0,
    e: "if i % 2 filters to odd numbers (where i%2 is truthy/non-zero): 1 and 3.",
    de: `Dict comprehension with a truthiness-based filter.

Key concepts:
• {i: i**2 for i in range(5) if i % 2}
• range(5) → 0, 1, 2, 3, 4
• if i % 2 filters: keeps elements where i % 2 is truthy (non-zero)
• 0 % 2 = 0 (falsy) → skip
• 1 % 2 = 1 (truthy) → include: 1: 1
• 2 % 2 = 0 (falsy) → skip
• 3 % 2 = 1 (truthy) → include: 3: 9
• 4 % 2 = 0 (falsy) → skip
• Result: {1: 1, 3: 9}

How it works:
• i % 2 returns 0 for even, 1 for odd
• 0 is falsy, 1 is truthy
• So this filters to odd numbers only
• Each odd i maps to i**2

Example: {i: i**2 for i in range(5) if i % 2} → {1: 1, 3: 9}. Only odd numbers pass the filter.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 91. all(map(str.isdigit, "12345")) → True
  (_i: number) => ({
    q: `What is all(map(str.isdigit, "12345"))?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "all() checks if every element is truthy. Every character in \"12345\" is a digit, so True.",
    de: `all() with map() tests a condition on every element of an iterable.

Key concepts:
• all(map(str.isdigit, "12345")) → True
• map(str.isdigit, "12345") applies str.isdigit to each character
• "1".isdigit() → True, "2".isdigit() → True, ... all True
• all() returns True if every element is truthy
• All characters are digits → True

How it works:
• Iterating "12345" gives characters: "1", "2", "3", "4", "5"
• map(str.isdigit, ...) → True, True, True, True, True
• all([True, True, True, True, True]) → True

Practical use:
• Validating that a string contains only digits
• Alternative: "12345".isdigit() (simpler for this case)
• But map pattern is flexible for custom checks

Example: all(map(str.isdigit, "12345")) → True. all(map(str.isdigit, "123a5")) → False.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 92. any(map(str.isdigit, "abc1")) → True
  (_i: number) => ({
    q: `What is any(map(str.isdigit, "abc1"))?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "any() returns True if at least one element is truthy. \"1\" is a digit, so True.",
    de: `any() checks if at least one element is truthy.

Key concepts:
• any(map(str.isdigit, "abc1")) → True
• map(str.isdigit, "abc1") checks each character
• "a".isdigit() → False, "b".isdigit() → False, "c".isdigit() → False
• "1".isdigit() → True
• any() finds one True → returns True

How it works:
• Iterating "abc1" gives: "a", "b", "c", "1"
• map produces: False, False, False, True
• any() short-circuits at first True → returns True
• Doesn't need to check remaining elements (if any)

Short-circuit behavior:
• any() stops at first True — efficient for large iterables
• all() stops at first False
• Both are lazy when used with iterators

Example: any(map(str.isdigit, "abc1")) → True. any(map(str.isdigit, "abc")) → False.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 93. all(map(str.isdigit, "abc")) → False
  (_i: number) => ({
    q: `What is all(map(str.isdigit, "abc"))?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "No character in \"abc\" is a digit, so all() returns False at the first non-digit.",
    de: `all() returns False as soon as it encounters a falsy element.

Key concepts:
• all(map(str.isdigit, "abc")) → False
• map(str.isdigit, "abc") checks each character
• "a".isdigit() → False → all() short-circuits immediately
• Returns False without checking "b" or "c"

How it works:
• First character: "a".isdigit() → False
• all() sees False → immediately returns False
• Short-circuit: "b" and "c" are never checked

all() behavior:
• Returns True if ALL elements are truthy
• Returns False if ANY element is falsy
• Short-circuits at first falsy value
• all([]) → True (vacuously true — no elements to be falsy)

Example: all(map(str.isdigit, "abc")) → False. "a" is not a digit, so all() fails immediately.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 94. [x if x > 0 else -x for x in [-1, 2, -3]] → [1, 2, 3]
  (_i: number) => ({
    q: `What is [x if x > 0 else -x for x in [-1, 2, -3]]?`,
    o: ["[1, 2, 3]", "[-1, 2, -3]", "[1, -2, 3]", "Error"],
    c: 0,
    e: "Conditional expression in list comprehension: keeps positive, negates negative → manual abs().",
    de: `This uses a ternary expression inside a list comprehension to compute absolute values.

Key concepts:
• [x if x > 0 else -x for x in [-1, 2, -3]] → [1, 2, 3]
• For each x: if x > 0, keep x; else negate it (-x)
• -1: -1 > 0? No → -(-1) = 1
• 2: 2 > 0? Yes → 2
• -3: -3 > 0? No → -(-3) = 3
• Result: [1, 2, 3]

How it works:
• Syntax: [VALUE_IF_TRUE if CONDITION else VALUE_IF_FALSE for item in iterable]
• This is a ternary/conditional expression, not a filter
• Every element produces a value (no filtering)

Equivalent:
• [abs(x) for x in [-1, 2, -3]] → [1, 2, 3]
• The manual version demonstrates the ternary pattern

Example: [x if x > 0 else -x for x in [-1, 2, -3]] → [1, 2, 3].

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 95. next((x for x in [5,3,8,1] if x > 6), None) → 8
  (_i: number) => ({
    q: `What is next((x for x in [5, 3, 8, 1] if x > 6), None)?`,
    o: ["8", "None", "5", "1"],
    c: 0,
    e: "next() gets the first value from the generator where x > 6. That's 8.",
    de: `next() with a generator expression finds the first element matching a condition.

Key concepts:
• next((x for x in [5, 3, 8, 1] if x > 6), None) → 8
• Generator: (x for x in [5, 3, 8, 1] if x > 6)
• Filters to elements > 6: only 8 qualifies
• next() returns the first value from the generator
• The second argument (None) is the default if no match

How it works:
• 5 > 6? No → skip
• 3 > 6? No → skip
• 8 > 6? Yes → yield 8
• next() returns 8 (first match)
• 1 is never checked (lazy evaluation)

The default argument:
• next(gen, default) returns default if generator is exhausted
• Without default, StopIteration is raised if no match
• None is a common default for "not found"

Example: next((x for x in [5, 3, 8, 1] if x > 6), None) → 8.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 96. next((x for x in [5,3,1] if x > 6), None) → None
  (_i: number) => ({
    q: `What is next((x for x in [5, 3, 1] if x > 6), None)?`,
    o: ["None", "5", "1", "StopIteration"],
    c: 0,
    e: "No element > 6 in the list, so next() returns the default value: None.",
    de: `When no element matches the generator condition, next() returns the default.

Key concepts:
• next((x for x in [5, 3, 1] if x > 6), None) → None
• Generator filters to x > 6
• 5 > 6? No. 3 > 6? No. 1 > 6? No.
• Generator is exhausted — no matches
• next() returns the default value: None

How it works:
• All elements are checked: 5, 3, 1
• None satisfy x > 6
• Generator exhausted → no value to return
• next() returns the second argument (default): None

Without default:
• next((x for x in [5, 3, 1] if x > 6)) → StopIteration
• The default argument prevents the exception
• Always provide a default when the generator might be empty

Example: next((x for x in [5, 3, 1] if x > 6), None) → None. No match found.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 97. all(isinstance(x, int) for x in [1, True, 3]) → True
  (_i: number) => ({
    q: `What is all(isinstance(x, int) for x in [1, True, 3])?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "bool is a subclass of int, so isinstance(True, int) is True. All elements pass.",
    de: `This exploits the fact that bool is a subclass of int in Python.

Key concepts:
• all(isinstance(x, int) for x in [1, True, 3]) → True
• isinstance(1, int) → True
• isinstance(True, int) → True (because bool inherits from int!)
• isinstance(3, int) → True
• all([True, True, True]) → True

The key insight:
• bool is a subclass of int: issubclass(bool, int) → True
• Therefore isinstance(True, int) → True
• True IS an int (by inheritance)
• type(True) is int → False (exact type is bool, not int)
• isinstance() checks the class hierarchy, type() checks exact type

Practical implication:
• If you want to exclude bools: type(x) is int (exact match)
• If you want to include bools: isinstance(x, int) (includes subclasses)

Example: all(isinstance(x, int) for x in [1, True, 3]) → True. bool is a subclass of int.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 98. any(x is None for x in [1, None, 3]) → True
  (_i: number) => ({
    q: `What is any(x is None for x in [1, None, 3])?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "any() finds that one element is None (using identity check), so it returns True.",
    de: `any() with an identity check finds if any element is None.

Key concepts:
• any(x is None for x in [1, None, 3]) → True
• Generator checks each element: is it None?
• 1 is None → False
• None is None → True → any() short-circuits
• Returns True immediately

How it works:
• 1 is None → False (int is not None)
• None is None → True (identity match!)
• any() found a True → returns True immediately
• 3 is never checked (short-circuit)

Why is instead of ==:
• None should always be compared with is, not ==
• is checks identity (same object in memory)
• == can be overridden by custom __eq__ methods
• PEP 8: "Comparisons to singletons like None should always be done with is"

Example: any(x is None for x in [1, None, 3]) → True. None is found in the list.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 99. sum(x > 0 for x in [-1, 2, -3, 4]) → 2
  (_i: number) => ({
    q: `What is sum(x > 0 for x in [-1, 2, -3, 4])?`,
    o: ["2", "6", "4", "Error"],
    c: 0,
    e: "x > 0 returns True/False. True = 1 in sum, so it counts how many are positive: 2.",
    de: `This uses the fact that True equals 1 in arithmetic to count elements matching a condition.

Key concepts:
• sum(x > 0 for x in [-1, 2, -3, 4]) → 2
• x > 0 produces True or False for each element
• True is 1 in arithmetic, False is 0
• sum counts the True values: effectively counting positives

How it works:
• -1 > 0 → False (0)
• 2 > 0 → True (1)
• -3 > 0 → False (0)
• 4 > 0 → True (1)
• sum(0, 1, 0, 1) → 2

This is a Pythonic counting pattern:
• Count matching elements: sum(condition for x in iterable)
• More readable than len([x for x in iterable if condition])
• Memory-efficient (generator, not list)

Example: sum(x > 0 for x in [-1, 2, -3, 4]) → 2. Two positive numbers: 2 and 4.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 100. max(range(10), key=lambda x: -(x-5)**2) → 5
  (_i: number) => ({
    q: `What is max(range(10), key=lambda x: -(x-5)**2)?`,
    o: ["5", "9", "0", "4"],
    c: 0,
    e: "The key -(x-5)² is maximized when (x-5)² is minimized — at x=5. So max returns 5.",
    de: `This uses max() with a custom key function that peaks at x=5.

Key concepts:
• max(range(10), key=lambda x: -(x-5)**2) → 5
• range(10) → 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
• key function: -(x-5)² — a downward parabola centered at x=5
• max() finds the x that maximizes the key function
• -(x-5)² is maximized when (x-5)² is minimized → at x=5

How it works:
• x=0: -(0-5)² = -25
• x=1: -(1-5)² = -16
• x=2: -(2-5)² = -9
• x=3: -(3-5)² = -4
• x=4: -(4-5)² = -1
• x=5: -(5-5)² = 0 ← maximum!
• x=6: -(6-5)² = -1
• x=7: -(7-5)² = -4
• x=8: -(8-5)² = -9
• x=9: -(9-5)² = -16
• Maximum key value is 0, at x=5

Pattern:
• max() with key finds the element that maximizes the key function
• -(x-a)² always peaks at x=a
• This is a way to find the element closest to a target value

Example: max(range(10), key=lambda x: -(x-5)**2) → 5. The parabola peaks at x=5.

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
];
