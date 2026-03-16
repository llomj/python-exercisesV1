// --- LEVEL 5 EXPERT A: Advanced List/Tuple Patterns, Copy Gotchas & Slicing Idioms — 50 TRULY UNIQUE QUESTIONS ---
export const level5ExpertA = [
  // ===== ADVANCED SLICING (1–15) =====

  // Q1: Slice assignment with different length
  (_i: number) => ({
    q: `What is a after:\na = [1, 2, 3, 4, 5]\na[1:3] = [10, 20, 30]`,
    o: ["[1, 10, 20, 30, 4, 5]", "[1, 10, 20, 4, 5]", "[1, 10, 20, 30, 5]", "Error"],
    c: 0,
    e: "Slice assignment replaces a[1:3] (two elements) with three elements, expanding the list.",
    de: `Slice assignment can replace a sub-sequence with a sequence of a different length. a[1:3] targets indices 1 and 2 (elements 2 and 3). Assigning [10, 20, 30] replaces those two elements with three new ones.

Key concepts:
• a[1:3] selects elements at index 1 and 2
• Assigning a list to a slice replaces that segment
• The replacement list can be shorter or longer than the slice
• The list grows or shrinks accordingly

How it works:
• Before: [1, 2, 3, 4, 5]
• a[1:3] = [10, 20, 30] removes indices 1–2 and inserts 10, 20, 30
• After: [1, 10, 20, 30, 4, 5]

Example:
>>> a = [1, 2, 3, 4, 5]
>>> a[1:3] = [10, 20, 30]
>>> a
[1, 10, 20, 30, 4, 5]

This is a powerful technique for in-place list modification without creating a new list object.

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

  // Q2: Extended slice assignment (must match length)
  (_i: number) => ({
    q: `What is a after:\na = [1, 2, 3, 4, 5]\na[::2] = [10, 20, 30]`,
    o: ["[10, 2, 20, 4, 30]", "[10, 20, 30, 4, 5]", "Error", "[1, 10, 2, 20, 3, 30]"],
    c: 0,
    e: "Extended slice a[::2] selects indices 0, 2, 4. Assignment replaces those positions with 10, 20, 30.",
    de: `Extended slice assignment (with a step) requires that the replacement sequence has exactly the same number of elements as the slice selects — unlike regular slice assignment.

Key concepts:
• a[::2] selects every other element: indices 0, 2, 4
• The replacement [10, 20, 30] has 3 elements, matching the 3 selected positions
• If lengths don't match, Python raises ValueError
• Each selected position is replaced individually

How it works:
• a[::2] picks indices 0, 2, 4 → elements 1, 3, 5
• Replace: index 0 ← 10, index 2 ← 20, index 4 ← 30
• Elements at indices 1 and 3 are untouched
• Result: [10, 2, 20, 4, 30]

Example:
>>> a = [1, 2, 3, 4, 5]
>>> a[::2] = [10, 20, 30]
>>> a
[10, 2, 20, 4, 30]

If you tried a[::2] = [10, 20] it would raise ValueError because the slice selects 3 positions but only 2 values are provided.

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

  // Q3: Delete via empty slice assignment
  (_i: number) => ({
    q: `What is a after:\na = [1, 2, 3, 4, 5]\na[1:4] = []`,
    o: ["[1, 5]", "[1, 2, 5]", "[]", "Error"],
    c: 0,
    e: "Assigning an empty list to a[1:4] removes elements at indices 1, 2, and 3.",
    de: `Assigning an empty list to a slice deletes those elements from the list in place. This is equivalent to del a[1:4].

Key concepts:
• a[1:4] targets indices 1, 2, 3 (elements 2, 3, 4)
• Assigning [] replaces that segment with nothing
• The list shrinks — elements are removed, not replaced
• This modifies the list in place

How it works:
• Before: [1, 2, 3, 4, 5]
• a[1:4] = [] removes elements at indices 1, 2, 3
• After: [1, 5]

Example:
>>> a = [1, 2, 3, 4, 5]
>>> a[1:4] = []
>>> a
[1, 5]

This pattern is useful for deleting a range without creating a new list.

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

  // Q4: del with extended slice
  (_i: number) => ({
    q: `What is a after:\na = [1, 2, 3, 4, 5]\ndel a[::2]`,
    o: ["[2, 4]", "[1, 3, 5]", "[3, 5]", "Error"],
    c: 0,
    e: "del a[::2] deletes elements at indices 0, 2, 4 (values 1, 3, 5), leaving [2, 4].",
    de: `del with an extended slice removes all elements at the selected indices. a[::2] selects indices 0, 2, and 4. Before: [1, 2, 3, 4, 5]. del a[::2] removes indices 0, 2, 4 (elements 1, 3, 5). After: [2, 4]. Note: you cannot use "a[::2] = []" for this because extended slice assignment requires matching lengths. You must use del instead.

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

  // Q5: Append via slice at end
  (_i: number) => ({
    q: `What is a after:\na = [1, 2, 3]\na[len(a):] = [4, 5]`,
    o: ["[1, 2, 3, 4, 5]", "[1, 2, 3, [4, 5]]", "Error", "[4, 5, 1, 2, 3]"],
    c: 0,
    e: "a[len(a):] is an empty slice at the end. Assigning [4, 5] appends those elements.",
    de: `a[len(a):] is an empty slice starting at the end of the list. Assigning to it inserts elements there — effectively appending.

Key concepts:
• a[len(a):] is equivalent to a[3:] when len(a) == 3
• This slice selects nothing (empty range at end)
• Assigning a list inserts those elements at that position
• Equivalent to a.extend([4, 5])

How it works:
• a[3:] is an empty slice starting at index 3 (past the last element)
• a[3:] = [4, 5] inserts 4 and 5 at the end
• Result: [1, 2, 3, 4, 5]

Example:
>>> a = [1, 2, 3]
>>> a[len(a):] = [4, 5]
>>> a
[1, 2, 3, 4, 5]

This is the slice-based idiom for extend(). Similarly, a[:0] = [...] prepends.

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

  // Q6: Insert at beginning via slice
  (_i: number) => ({
    q: `What is a after:\na = [1, 2, 3]\na[0:0] = [10, 20]`,
    o: ["[10, 20, 1, 2, 3]", "[10, 20]", "[1, 10, 20, 2, 3]", "Error"],
    c: 0,
    e: "a[0:0] is an empty slice at position 0. Assigning [10, 20] inserts them at the beginning.",
    de: `a[0:0] is an empty slice at the very beginning of the list. Assigning to it inserts elements before index 0.

Key concepts:
• a[0:0] selects nothing — start and stop are both 0
• Assigning a list to an empty slice inserts without removing
• This is the slice idiom for prepending elements
• The original elements shift right

How it works:
• a[0:0] = [10, 20] inserts 10, 20 before index 0
• Original elements [1, 2, 3] move to the right
• Result: [10, 20, 1, 2, 3]

Example:
>>> a = [1, 2, 3]
>>> a[0:0] = [10, 20]
>>> a
[10, 20, 1, 2, 3]

This is equivalent to: for x in reversed([10, 20]): a.insert(0, x)

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

  // Q7: Insert in middle via slice
  (_i: number) => ({
    q: `What is a after:\na = [1, 2, 3]\na[1:1] = [10]`,
    o: ["[1, 10, 2, 3]", "[1, 2, 10, 3]", "[10, 1, 2, 3]", "Error"],
    c: 0,
    e: "a[1:1] is an empty slice at index 1. Assigning [10] inserts 10 before element at index 1.",
    de: `a[1:1] is an empty slice at index 1. Assigning to it inserts elements at that position without removing anything.

Key concepts:
• a[start:start] is always an empty slice at position start
• Assigning to it inserts elements at that position
• No existing elements are removed
• Equivalent to a.insert(1, 10) for a single element

How it works:
• a[1:1] selects nothing at index 1
• [10] is inserted before the element currently at index 1
• Elements at index 1 onwards shift right
• Result: [1, 10, 2, 3]

Example:
>>> a = [1, 2, 3]
>>> a[1:1] = [10]
>>> a
[1, 10, 2, 3]

Unlike insert(), slice assignment can insert multiple elements at once: a[1:1] = [10, 20, 30].

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

  // Q8: Using a slice object
  (_i: number) => ({
    q: `What is [1, 2, 3, 4, 5][slice(1, 4)]?`,
    o: ["[2, 3, 4]", "[1, 2, 3, 4]", "[2, 3, 4, 5]", "Error"],
    c: 0,
    e: "slice(1, 4) creates a slice object equivalent to [1:4], selecting indices 1, 2, 3.",
    de: `The slice() built-in creates a slice object that can be used in place of the a:b syntax inside brackets. slice(1, 4) is equivalent to the notation [1:4].

Key concepts:
• slice(start, stop) creates a reusable slice object
• slice(1, 4) is equivalent to [1:4]
• slice objects can be stored in variables and reused
• They accept start, stop, and optional step arguments

How it works:
• slice(1, 4) → selects indices 1, 2, 3
• [1, 2, 3, 4, 5][slice(1, 4)] → [2, 3, 4]
• Same as [1, 2, 3, 4, 5][1:4]

Example:
>>> s = slice(1, 4)
>>> [1, 2, 3, 4, 5][s]
[2, 3, 4]

Slice objects are useful when you need to pass slicing parameters as arguments or store them for reuse.

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

  // Q9: Slice object with step
  (_i: number) => ({
    q: `What is the result?\ns = slice(0, 10, 2)\n[0, 1, 2, 3, 4, 5, 6, 7, 8, 9][s]`,
    o: ["[0, 2, 4, 6, 8]", "[0, 1, 2, 3, 4]", "[1, 3, 5, 7, 9]", "Error"],
    c: 0,
    e: "slice(0, 10, 2) selects every other element from index 0 to 9, giving [0, 2, 4, 6, 8].",
    de: `slice(start, stop, step) with three arguments creates a slice with a step value. slice(0, 10, 2) is equivalent to [0:10:2].

Key concepts:
• slice(0, 10, 2) = start at 0, stop before 10, step by 2
• Equivalent to [0:10:2]
• Selects indices: 0, 2, 4, 6, 8

How it works:
• The list is [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
• slice(0, 10, 2) picks every other element starting from index 0
• Indices selected: 0, 2, 4, 6, 8
• Elements: [0, 2, 4, 6, 8]

Example:
>>> s = slice(0, 10, 2)
>>> list(range(10))[s]
[0, 2, 4, 6, 8]

slice objects also have .start, .stop, and .step attributes for introspection.

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

  // Q10: String reversal via slice
  (_i: number) => ({
    q: `What is "hello"[::-1]?`,
    o: ['"olleh"', '"hello"', '"oellh"', "Error"],
    c: 0,
    e: "[::-1] reverses any sequence. For \"hello\" it produces \"olleh\".",
    de: `[::-1] is the Pythonic idiom for reversing a sequence. It creates a new sequence with elements in reverse order.

Key concepts:
• [::-1] means: start at end, go to beginning, step -1
• Works on strings, lists, tuples — any sequence
• Creates a new object (does not modify in place)
• For strings, this is the most common reversal technique

How it works:
• "hello"[::-1] iterates from the last character backwards
• h(0) e(1) l(2) l(3) o(4) → o(4) l(3) l(2) e(1) h(0)
• Result: "olleh"

Example:
>>> "hello"[::-1]
'olleh'
>>> [1, 2, 3][::-1]
[3, 2, 1]

This is widely used in interview problems for palindrome checks: s == s[::-1].

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

  // Q11: Slice copy identity check
  (_i: number) => ({
    q: `What is the result?\na = [1, 2, 3]\nb = a[:]\nb is a`,
    o: ["False", "True", "None", "Error"],
    c: 0,
    e: "a[:] creates a shallow copy — a new list object. 'is' checks identity, not equality, so False.",
    de: `a[:] creates a shallow copy of the list — a new list object with the same elements. The 'is' operator checks whether two variables refer to the exact same object in memory.

Key concepts:
• a[:] copies all elements into a new list
• b is a new list object, not the same object as a
• 'is' checks object identity (same memory address)
• '==' checks equality (same values)
• b == a would be True, but b is a is False

How it works:
• a = [1, 2, 3] creates a list object
• b = a[:] creates a different list object with same values
• b is a → False (different objects)
• b == a → True (equal values)

Example:
>>> a = [1, 2, 3]
>>> b = a[:]
>>> b is a
False
>>> b == a
True

Other ways to create shallow copies: list(a), a.copy(), copy.copy(a).

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

  // Q12: id comparison of slice copy
  (_i: number) => ({
    q: `What is the result?\na = [1, 2, 3]\nid(a) == id(a[:])`,
    o: ["False", "True", "None", "Error"],
    c: 0,
    e: "a[:] creates a new list object with a different id. The ids will not be equal.",
    de: `Every Python object has a unique id (its memory address in CPython). a[:] creates a new list, so it gets a different id.

Key concepts:
• id() returns the unique identifier of an object
• Two different objects always have different ids (while both alive)
• a[:] creates a new list → different id from a
• This confirms a[:] is a true copy, not an alias

How it works:
• a has some id, say 140234567890
• a[:] creates new list with different id, say 140234567960
• id(a) == id(a[:]) → False

Example:
>>> a = [1, 2, 3]
>>> id(a) == id(a[:])
False

Note: for small integers and interned strings, id() can sometimes be equal due to caching, but lists are never cached.

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

  // Q13: Tuple reversal via slice
  (_i: number) => ({
    q: `What is (1, 2, 3)[::-1]?`,
    o: ["(3, 2, 1)", "[3, 2, 1]", "(1, 2, 3)", "Error"],
    c: 0,
    e: "[::-1] works on tuples and returns a reversed tuple: (3, 2, 1).",
    de: `Slicing works on tuples just like lists, but always returns a new tuple (since tuples are immutable).

Key concepts:
• Tuples support all slice operations: [start:stop:step]
• [::-1] reverses the tuple
• The result is always a tuple (not a list)
• Tuples cannot be modified via slice assignment (immutable)

How it works:
• (1, 2, 3)[::-1] reverses: 3, 2, 1
• Returns a new tuple (3, 2, 1)
• The original tuple is unchanged (it's immutable)

Example:
>>> (1, 2, 3)[::-1]
(3, 2, 1)
>>> t = (10, 20, 30, 40)
>>> t[1:3]
(20, 30)

Unlike lists, you cannot do t[0:1] = (99,) — that would raise TypeError.

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

  // Q14: String step slicing
  (_i: number) => ({
    q: `What is "python"[::2]?`,
    o: ['"pto"', '"yhn"', '"pho"', '"python"'],
    c: 0,
    e: '"python"[::2] selects characters at indices 0, 2, 4 → "p", "t", "o" → "pto".',
    de: `Step slicing [::2] selects every other character starting from the beginning.

Key concepts:
• [::2] means start=0, stop=end, step=2
• Selects indices 0, 2, 4, 6, ...
• Works on any sequence type

How it works:
• "python" has indices: p(0) y(1) t(2) h(3) o(4) n(5)
• [::2] selects indices 0, 2, 4 → 'p', 't', 'o'
• Result: "pto"

Example:
>>> "python"[::2]
'pto'
>>> "python"[1::2]
'yhn'

[1::2] would give the other half: characters at indices 1, 3, 5 → "yhn".

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

  // Q15: Negative step with start > stop
  (_i: number) => ({
    q: `What is list(range(10))[7:2:-1]?`,
    o: ["[7, 6, 5, 4, 3]", "[3, 4, 5, 6, 7]", "[7, 6, 5, 4, 3, 2]", "Error"],
    c: 0,
    e: "[7:2:-1] starts at index 7 and steps backwards to index 3 (stop index 2 is excluded).",
    de: `With a negative step, the slice moves backwards. The start index must be greater than the stop index, and the stop index is excluded.

Key concepts:
• [7:2:-1] means start=7, stop=2, step=-1
• Goes from index 7 down to index 3 (stop 2 is excluded)
• With negative step, start > stop or you get an empty result
• The stop index is always excluded, even with negative step

How it works:
• list(range(10)) = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
• [7:2:-1] collects: index 7→7, 6→6, 5→5, 4→4, 3→3
• Stops before index 2
• Result: [7, 6, 5, 4, 3]

Example:
>>> list(range(10))[7:2:-1]
[7, 6, 5, 4, 3]

Common mistake: [2:7:-1] would return [] because you can't go backward from 2 to 7 with step -1.

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

  // ===== COPY VS DEEPCOPY GOTCHAS (16–30) =====

  // Q16: Shallow copy shares inner lists
  (_i: number) => ({
    q: `What is a after:\na = [[1, 2], [3, 4]]\nb = a[:]\nb[0].append(5)`,
    o: ["[[1, 2, 5], [3, 4]]", "[[1, 2], [3, 4]]", "[[1, 2, 5], [3, 4, 5]]", "Error"],
    c: 0,
    e: "a[:] is a shallow copy. b[0] and a[0] point to the same inner list, so appending 5 affects both.",
    de: `This is the classic shallow copy gotcha. a[:] creates a new outer list, but the inner lists are not copied — they are shared references.

Key concepts:
• Shallow copy copies the outer container only
• Inner objects are shared between original and copy
• Mutating a shared inner object affects both
• This applies to [:], list(), .copy(), and copy.copy()

How it works:
• a = [[1, 2], [3, 4]] — two inner lists
• b = a[:] — new outer list, but b[0] is a[0] (same object)
• b[0].append(5) — mutates the shared inner list
• a[0] is also [1, 2, 5] because it's the same object
• a → [[1, 2, 5], [3, 4]]

Example:
>>> a = [[1, 2], [3, 4]]
>>> b = a[:]
>>> b[0] is a[0]
True
>>> b[0].append(5)
>>> a
[[1, 2, 5], [3, 4]]

Use copy.deepcopy() to avoid this — it recursively copies all nested objects.

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

  // Q17: list() is also shallow
  (_i: number) => ({
    q: `What is the result?\na = [[1, 2], [3, 4]]\nb = list(a)\nb[0] is a[0]`,
    o: ["True", "False", "None", "Error"],
    c: 0,
    e: "list() creates a shallow copy. The inner lists are shared, so b[0] is the same object as a[0].",
    de: `list(a) creates a new list containing the same references as a. It does NOT recursively copy inner objects.

Key concepts:
• list(a) = shallow copy (same as a[:] or a.copy())
• Only the top-level list is new
• Inner lists are shared references
• 'is' returns True because they are literally the same object

How it works:
• a = [[1, 2], [3, 4]]
• b = list(a) — new outer list
• b[0] points to the exact same [1, 2] object as a[0]
• b[0] is a[0] → True

Example:
>>> a = [[1, 2], [3, 4]]
>>> b = list(a)
>>> b is a        # outer list is different
False
>>> b[0] is a[0]  # inner lists are shared
True

All shallow copy methods ([:], list(), .copy(), copy.copy()) behave identically.

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

  // Q18: copy.copy shallow gotcha
  (_i: number) => ({
    q: `What is a after:\nimport copy\na = [[1]]\nb = copy.copy(a)\nb[0].append(2)`,
    o: ["[[1, 2]]", "[[1]]", "[[1], [2]]", "Error"],
    c: 0,
    e: "copy.copy() is a shallow copy. b[0] and a[0] are the same inner list, so appending 2 affects a.",
    de: `copy.copy() performs a shallow copy — it creates a new outer container but does not copy nested objects.

Key concepts:
• copy.copy(a) = shallow copy (identical to a[:] for lists)
• Inner list [1] is shared between a and b
• Mutating b[0] also mutates a[0]
• copy.deepcopy() would prevent this

How it works:
• a = [[1]] — list containing one inner list
• b = copy.copy(a) — new outer list, shared inner list
• b[0].append(2) — mutates the shared inner list [1] → [1, 2]
• a[0] is the same object, so a becomes [[1, 2]]

Example:
>>> import copy
>>> a = [[1]]
>>> b = copy.copy(a)
>>> b[0].append(2)
>>> a
[[1, 2]]

This demonstrates why shallow copies can be dangerous with nested mutable objects.

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

  // Q19: deepcopy is truly independent
  (_i: number) => ({
    q: `What is a after:\nimport copy\na = [[1]]\nb = copy.deepcopy(a)\nb[0].append(2)`,
    o: ["[[1]]", "[[1, 2]]", "[[1], [2]]", "Error"],
    c: 0,
    e: "copy.deepcopy() creates a fully independent copy. Mutating b does not affect a.",
    de: `copy.deepcopy() recursively copies all nested objects, creating a completely independent clone.

Key concepts:
• deepcopy() copies the outer container AND all inner objects
• No references are shared between original and deep copy
• Mutating the deep copy never affects the original
• Works for arbitrarily nested structures

How it works:
• a = [[1]] — list with inner list [1]
• b = copy.deepcopy(a) — new outer list AND new inner list [1]
• b[0].append(2) — mutates b's inner list to [1, 2]
• a[0] is a different object — still [1]
• a remains [[1]]

Example:
>>> import copy
>>> a = [[1]]
>>> b = copy.deepcopy(a)
>>> b[0] is a[0]
False
>>> b[0].append(2)
>>> a
[[1]]

deepcopy handles circular references and complex object graphs correctly.

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

  // Q20: += mutates lists in place
  (_i: number) => ({
    q: `What is b after:\na = [1, 2, 3]\nb = a\na += [4]`,
    o: ["[1, 2, 3, 4]", "[1, 2, 3]", "[4]", "Error"],
    c: 0,
    e: "+= on lists calls __iadd__ which mutates in place. Since b is a, b also sees the change.",
    de: `For mutable types like lists, += calls __iadd__ which modifies the object in place. Since b and a reference the same object, b reflects the change.

Key concepts:
• For lists, a += [4] is equivalent to a.extend([4])
• It mutates the existing list object in place
• b = a makes b an alias — same object
• Both a and b see the mutation

How it works:
• a = [1, 2, 3] creates list object
• b = a — b points to same object
• a += [4] — calls list.__iadd__([4]), mutates in place
• The object is now [1, 2, 3, 4]
• b still points to this same object → [1, 2, 3, 4]

Example:
>>> a = [1, 2, 3]
>>> b = a
>>> a += [4]
>>> b
[1, 2, 3, 4]
>>> a is b
True

This is a subtle difference from a = a + [4], which creates a new list.

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

  // Q21: += on tuples creates new object
  (_i: number) => ({
    q: `What is b after:\na = (1, 2, 3)\nb = a\na += (4,)`,
    o: ["(1, 2, 3)", "(1, 2, 3, 4)", "(4,)", "Error"],
    c: 0,
    e: "Tuples are immutable. += creates a new tuple and rebinds a, but b still points to the original.",
    de: `For immutable types like tuples, += cannot mutate in place. Instead, it creates a new object and rebinds the variable.

Key concepts:
• Tuples don't have __iadd__, so += falls back to __add__ + rebinding
• a += (4,) is equivalent to a = a + (4,) for tuples
• a is rebound to a new tuple (1, 2, 3, 4)
• b still references the original tuple (1, 2, 3)

How it works:
• a = (1, 2, 3) — a points to tuple object
• b = a — b points to same tuple
• a += (4,) — creates new tuple (1, 2, 3, 4), rebinds a
• b still points to original (1, 2, 3)
• a is b → False (different objects now)

Example:
>>> a = (1, 2, 3)
>>> b = a
>>> a += (4,)
>>> b
(1, 2, 3)
>>> a
(1, 2, 3, 4)

This is the key mutable vs immutable += difference. Lists mutate; tuples create new objects.

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

  // Q22: a = a + [4] creates new list
  (_i: number) => ({
    q: `What is b after:\na = [1, 2, 3]\nb = a\na = a + [4]`,
    o: ["[1, 2, 3]", "[1, 2, 3, 4]", "[4]", "Error"],
    c: 0,
    e: "a + [4] creates a new list and rebinds a. b still references the original list [1, 2, 3].",
    de: `a = a + [4] creates a brand new list and assigns it to a. This is different from a += [4] which mutates in place.

Key concepts:
• a + [4] uses __add__, which always returns a new list
• a is rebound to the new list
• b still references the old list
• This is the safe pattern when you don't want aliases to see changes

How it works:
• a = [1, 2, 3] — list object created
• b = a — b is an alias
• a = a + [4] — creates new list [1, 2, 3, 4], rebinds a
• b still points to old object [1, 2, 3]

Example:
>>> a = [1, 2, 3]
>>> b = a
>>> a = a + [4]
>>> b
[1, 2, 3]
>>> a is b
False

Compare: a += [4] would give b = [1, 2, 3, 4] because += mutates in place for lists.

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

  // Q23: List comprehension creates independent inner lists
  (_i: number) => ({
    q: `What is a after:\na = [[0]*3 for _ in range(3)]\na[0][0] = 1`,
    o: ["[[1,0,0],[0,0,0],[0,0,0]]", "[[1,0,0],[1,0,0],[1,0,0]]", "[[1,1,1],[0,0,0],[0,0,0]]", "Error"],
    c: 0,
    e: "List comprehension creates independent inner lists. Only a[0][0] is changed to 1.",
    de: `Using a list comprehension to create nested lists ensures each inner list is a separate object.

Key concepts:
• [[0]*3 for _ in range(3)] creates 3 independent [0,0,0] lists
• Each iteration of the comprehension creates a new [0]*3
• Modifying a[0] does not affect a[1] or a[2]
• This is the correct way to create a 2D matrix

How it works:
• Comprehension runs 3 times, each creating a new [0, 0, 0]
• a = [[0,0,0], [0,0,0], [0,0,0]] — three different objects
• a[0][0] = 1 — only modifies a[0]
• Result: [[1,0,0], [0,0,0], [0,0,0]]

Example:
>>> a = [[0]*3 for _ in range(3)]
>>> a[0] is a[1]
False
>>> a[0][0] = 1
>>> a
[[1, 0, 0], [0, 0, 0], [0, 0, 0]]

Compare with [[0]*3]*3 which shares all inner lists.

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

  // Q24: Multiplication creates shared references
  (_i: number) => ({
    q: `What is a after:\na = [[0]*3]*3\na[0][0] = 1`,
    o: ["[[1,0,0],[1,0,0],[1,0,0]]", "[[1,0,0],[0,0,0],[0,0,0]]", "[[1,1,1],[1,1,1],[1,1,1]]", "Error"],
    c: 0,
    e: "[[0]*3]*3 creates 3 references to the SAME inner list. Changing one changes all.",
    de: `The * operator on a list containing a mutable object creates multiple references to that same object — not independent copies.

Key concepts:
• [x]*3 creates [x, x, x] where all three are the SAME object
• When x is a mutable list, all three entries share it
• Modifying any one modifies all
• This is one of Python's most notorious gotchas

How it works:
• [0]*3 creates [0, 0, 0] — one list object
• [[0,0,0]]*3 creates [ref, ref, ref] — three references to that ONE list
• a[0] is a[1] is a[2] → True
• a[0][0] = 1 modifies the shared list → [1, 0, 0]
• All three entries show [1, 0, 0]

Example:
>>> a = [[0]*3]*3
>>> a[0] is a[1]
True
>>> a[0][0] = 1
>>> a
[[1, 0, 0], [1, 0, 0], [1, 0, 0]]

Fix: use [[0]*3 for _ in range(3)] to create independent lists.

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

  // Q25: Empty list multiplication shares references
  (_i: number) => ({
    q: `What is a after:\na = [[]]*3\na[0].append(1)`,
    o: ["[[1], [1], [1]]", "[[1], [], []]", "[[], [], [1]]", "Error"],
    c: 0,
    e: "[[]]*3 creates three references to the same empty list. Appending to one appends to all.",
    de: `This is the same gotcha as [[0]*3]*3 but with empty lists. [[]]*3 creates three references to one shared empty list.

Key concepts:
• [[]] is a list containing one empty list
• [[]]*3 repeats that reference three times
• All three entries point to the same inner list object
• Appending to any one entry appends to all

How it works:
• [[]] creates [ref_to_empty_list]
• *3 creates [ref, ref, ref] — same empty list object
• a[0].append(1) → the shared list becomes [1]
• a → [[1], [1], [1]]

Example:
>>> a = [[]]*3
>>> a[0] is a[1] is a[2]
True
>>> a[0].append(1)
>>> a
[[1], [1], [1]]

Fix: [[] for _ in range(3)] creates three independent empty lists.

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

  // Q26: String immutability avoids sharing issue
  (_i: number) => ({
    q: `What is a after:\na = ["x"]*3\na[0] = "y"`,
    o: ['["y", "x", "x"]', '["y", "y", "y"]', '["x", "x", "x"]', "Error"],
    c: 0,
    e: 'Strings are immutable. a[0] = "y" rebinds index 0 to a new string; other indices are unaffected.',
    de: `When * repeats immutable objects (strings, ints, tuples), the sharing is harmless because you can't mutate them. Reassigning an index doesn't affect the others.

Key concepts:
• ["x"]*3 creates ["x", "x", "x"] — three refs to same "x"
• But strings are immutable — you can't modify "x" in place
• a[0] = "y" rebinds index 0 to a new string object
• The other indices still reference "x"

How it works:
• a = ["x", "x", "x"] — all point to the same "x" object
• a[0] = "y" — only index 0 now points to "y"
• a[1] and a[2] still point to "x"
• Result: ["y", "x", "x"]

Example:
>>> a = ["x"]*3
>>> a[0] = "y"
>>> a
['y', 'x', 'x']

The * gotcha only matters for mutable inner objects (lists, dicts, sets). Immutable objects are safe.

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

  // Q27: .copy() is independent for flat lists
  (_i: number) => ({
    q: `What is b after:\na = [1, 2, 3]\nb = a.copy()\na.append(4)`,
    o: ["[1, 2, 3]", "[1, 2, 3, 4]", "[4]", "Error"],
    c: 0,
    e: ".copy() creates a shallow copy. For flat lists, it's fully independent — appending to a doesn't affect b.",
    de: `For lists containing only immutable elements (ints, strings, etc.), a shallow copy via .copy() is effectively independent.

Key concepts:
• a.copy() creates a new list with the same elements
• For flat lists of immutables, shallow = fully independent
• Changes to a (append, remove, etc.) don't affect b
• The inner elements are immutable so sharing them is safe

How it works:
• a = [1, 2, 3]
• b = a.copy() — new list [1, 2, 3]
• a.append(4) — only modifies a
• b is unaffected → [1, 2, 3]

Example:
>>> a = [1, 2, 3]
>>> b = a.copy()
>>> a.append(4)
>>> b
[1, 2, 3]

Shallow copy is only "dangerous" when the list contains mutable objects (other lists, dicts, etc.).

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

  // Q28: Set copy independence
  (_i: number) => ({
    q: `What is b after:\na = {1, 2, 3}\nb = a.copy()\na.add(4)`,
    o: ["{1, 2, 3}", "{1, 2, 3, 4}", "Error", "{4}"],
    c: 0,
    e: "set.copy() creates a shallow copy. Adding to a doesn't affect b.",
    de: `Sets also have a .copy() method that creates a shallow copy. Since sets can only contain immutable (hashable) elements, a shallow copy is always fully independent.

Key concepts:
• set.copy() creates a new set with the same elements
• Sets only hold immutable items, so no nested-mutation issues
• Adding to the original doesn't affect the copy
• Equivalent to set(a) or {*a}

How it works:
• a = {1, 2, 3}
• b = a.copy() — new set {1, 2, 3}
• a.add(4) — only modifies a
• b → {1, 2, 3}

Example:
>>> a = {1, 2, 3}
>>> b = a.copy()
>>> a.add(4)
>>> b
{1, 2, 3}

Sets never have the shallow-copy gotcha because their elements must be hashable (immutable).

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

  // Q29: Dict shallow copy — new keys independent
  (_i: number) => ({
    q: `What is b after:\na = {"x": 1}\nb = a.copy()\na["y"] = 2`,
    o: ['{"x": 1}', '{"x": 1, "y": 2}', "Error", '{"y": 2}'],
    c: 0,
    e: "dict.copy() is a shallow copy. Adding a new key to a doesn't affect b.",
    de: `dict.copy() creates a new dictionary with the same key-value pairs. Adding or removing keys from the original doesn't affect the copy.

Key concepts:
• dict.copy() creates a new top-level dict
• New keys added to original are not in the copy
• Keys deleted from original are still in the copy
• But: mutable values (lists, dicts) are shared references

How it works:
• a = {"x": 1}
• b = a.copy() — new dict {"x": 1}
• a["y"] = 2 — adds new key only to a
• b → {"x": 1}

Example:
>>> a = {"x": 1}
>>> b = a.copy()
>>> a["y"] = 2
>>> b
{'x': 1}

The top-level structure is independent. The gotcha only appears with mutable values.

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

  // Q30: Dict shallow copy — shared mutable values
  (_i: number) => ({
    q: `What is b after:\na = {"x": [1]}\nb = a.copy()\na["x"].append(2)`,
    o: ['{"x": [1, 2]}', '{"x": [1]}', "Error", '{"x": [2]}'],
    c: 0,
    e: 'dict.copy() is shallow. The list value [1] is shared, so appending 2 to a["x"] also changes b["x"].',
    de: `This is the dict version of the shallow copy gotcha. dict.copy() copies the key-value mappings, but mutable values are shared references.

Key concepts:
• b = a.copy() — new dict, but values are shared
• a["x"] and b["x"] point to the same list [1]
• Mutating that list (append) is visible through both dicts
• Use copy.deepcopy(a) for full independence

How it works:
• a = {"x": [1]} — value is a list
• b = a.copy() — b["x"] is the same list object as a["x"]
• a["x"].append(2) — mutates the shared list to [1, 2]
• b["x"] → [1, 2] (same object)
• b → {"x": [1, 2]}

Example:
>>> a = {"x": [1]}
>>> b = a.copy()
>>> a["x"] is b["x"]
True
>>> a["x"].append(2)
>>> b
{'x': [1, 2]}

The shallow copy gotcha applies universally: lists, dicts, sets — any container with mutable inner objects.

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

  // ===== LIST AS STACK/QUEUE, MUTATION PATTERNS (31–50) =====

  // Q31: List as stack — LIFO pop
  (_i: number) => ({
    q: `What is the result?\nstack = []\nstack.append(1)\nstack.append(2)\nstack.pop()`,
    o: ["2", "1", "[1, 2]", "Error"],
    c: 0,
    e: "pop() removes and returns the last element. After appending 1 then 2, pop() returns 2 (LIFO).",
    de: `Python lists can be used as stacks (LIFO — Last In, First Out) using append() and pop().

Key concepts:
• append(x) adds to the end — O(1)
• pop() removes and returns the last element — O(1)
• Together they implement a stack
• LIFO: the last element added is the first removed

How it works:
• stack = [] — empty stack
• stack.append(1) → [1]
• stack.append(2) → [1, 2]
• stack.pop() → returns 2, stack becomes [1]

Example:
>>> stack = []
>>> stack.append(1)
>>> stack.append(2)
>>> stack.pop()
2

Lists are efficient stacks because both append and pop at the end are amortized O(1).

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

  // Q32: pop removes last and returns it
  (_i: number) => ({
    q: `What is stack after:\nstack = [1, 2, 3]\nstack.pop()`,
    o: ["[1, 2]", "[1, 2, 3]", "[2, 3]", "[]"],
    c: 0,
    e: "pop() removes the last element (3). The stack becomes [1, 2].",
    de: `list.pop() removes and returns the last element, modifying the list in place.

Key concepts:
• pop() with no arguments removes the last element
• It both removes the element AND returns its value
• The list is modified in place
• pop(i) removes at index i, but pop() at the end is O(1)

How it works:
• stack = [1, 2, 3]
• stack.pop() → removes 3 and returns it
• stack → [1, 2]

Example:
>>> stack = [1, 2, 3]
>>> val = stack.pop()
>>> val
3
>>> stack
[1, 2]

pop() is O(1) at the end but O(n) at the beginning because elements must shift.

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

  // Q33: deque popleft for FIFO
  (_i: number) => ({
    q: `What is the result?\nfrom collections import deque\nq = deque([1, 2, 3])\nq.popleft()`,
    o: ["1", "3", "[2, 3]", "Error"],
    c: 0,
    e: "popleft() removes and returns the leftmost element (1) — this is FIFO behavior.",
    de: `collections.deque provides O(1) operations at both ends. popleft() removes from the left, implementing FIFO (First In, First Out).

Key concepts:
• deque = double-ended queue
• popleft() removes and returns the leftmost element — O(1)
• list.pop(0) does the same but is O(n) due to shifting
• deque is the proper data structure for queues in Python

How it works:
• q = deque([1, 2, 3])
• q.popleft() → returns 1, q becomes deque([2, 3])

Example:
>>> from collections import deque
>>> q = deque([1, 2, 3])
>>> q.popleft()
1
>>> q
deque([2, 3])

For FIFO queues, always use deque over list for O(1) performance at both ends.

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

  // Q34: deque appendleft
  (_i: number) => ({
    q: `What is list(q) after:\nfrom collections import deque\nq = deque([1, 2, 3])\nq.appendleft(0)`,
    o: ["[0, 1, 2, 3]", "[1, 2, 3, 0]", "[0, 3, 2, 1]", "Error"],
    c: 0,
    e: "appendleft(0) adds 0 to the left side of the deque. Result: [0, 1, 2, 3].",
    de: `deque.appendleft() adds an element to the left (front) of the deque in O(1) time.

Key concepts:
• appendleft(x) adds to the left — O(1)
• append(x) adds to the right — O(1)
• list.insert(0, x) would be O(n) for the same operation
• deque is doubly-linked, so both ends are fast

How it works:
• q = deque([1, 2, 3])
• q.appendleft(0) → deque([0, 1, 2, 3])
• list(q) → [0, 1, 2, 3]

Example:
>>> from collections import deque
>>> q = deque([1, 2, 3])
>>> q.appendleft(0)
>>> list(q)
[0, 1, 2, 3]

deque supports both appendleft/popleft (left end) and append/pop (right end), all in O(1).

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

  // Q35: deque with maxlen
  (_i: number) => ({
    q: `What is list(q) after:\nfrom collections import deque\nq = deque(maxlen=3)\nq.extend([1, 2, 3, 4])`,
    o: ["[2, 3, 4]", "[1, 2, 3]", "[1, 2, 3, 4]", "Error"],
    c: 0,
    e: "maxlen=3 limits the deque to 3 elements. When 4 is added, 1 is dropped from the left.",
    de: `A deque with maxlen automatically discards elements from the opposite end when the limit is exceeded.

Key concepts:
• maxlen=3 limits the deque to at most 3 elements
• Adding to the right drops from the left (and vice versa)
• Useful for fixed-size sliding windows
• Once set, maxlen cannot be changed

How it works:
• q = deque(maxlen=3) — empty, max 3 elements
• q.extend([1, 2, 3, 4]) adds 1, 2, 3, 4 one by one
• After 1: deque([1])
• After 2: deque([1, 2])
• After 3: deque([1, 2, 3]) — full
• After 4: deque([2, 3, 4]) — 1 dropped from left

Example:
>>> from collections import deque
>>> q = deque(maxlen=3)
>>> q.extend([1, 2, 3, 4])
>>> list(q)
[2, 3, 4]

This is commonly used for "last N items" buffers or moving averages.

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

  // Q36: pop(0) in list comprehension drains list
  (_i: number) => ({
    q: `What is the result?\na = [1, 2, 3]\n[a.pop(0) for _ in range(len(a))]`,
    o: ["[1, 2, 3]", "[3, 2, 1]", "[1, 2]", "Error"],
    c: 0,
    e: "pop(0) removes and returns the first element each time. Three calls return 1, 2, 3 in order.",
    de: `This uses pop(0) inside a list comprehension to drain the list from the front. range(len(a)) is evaluated once before iteration starts.

Key concepts:
• range(len(a)) is evaluated once → range(3)
• Each pop(0) removes and returns the first element
• The list shrinks with each iteration
• Result is [1, 2, 3] — elements in original order

How it works:
• range(len(a)) → range(3), so the loop runs 3 times
• Iteration 1: a.pop(0) → 1, a = [2, 3]
• Iteration 2: a.pop(0) → 2, a = [3]
• Iteration 3: a.pop(0) → 3, a = []
• Comprehension result: [1, 2, 3]

Example:
>>> a = [1, 2, 3]
>>> [a.pop(0) for _ in range(len(a))]
[1, 2, 3]
>>> a
[]

Warning: pop(0) is O(n) for lists, making this O(n²). Use deque.popleft() for O(1) front removal.

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

  // Q37: Delete range via empty slice
  (_i: number) => ({
    q: `What is a after:\na = [1, 2, 3, 4, 5]\na[2:4] = []`,
    o: ["[1, 2, 5]", "[1, 2, 3, 5]", "[1, 5]", "Error"],
    c: 0,
    e: "a[2:4] = [] removes elements at indices 2 and 3 (values 3 and 4). Result: [1, 2, 5].",
    de: `Assigning an empty list to a slice removes those elements in place. a[2:4] selects indices 2 and 3.

Key concepts:
• a[2:4] selects elements at index 2 and 3 → values 3, 4
• Assigning [] removes them
• Equivalent to del a[2:4]
• The list shrinks in place

How it works:
• Before: [1, 2, 3, 4, 5]
• a[2:4] = [] removes indices 2, 3 (elements 3, 4)
• After: [1, 2, 5]

Example:
>>> a = [1, 2, 3, 4, 5]
>>> a[2:4] = []
>>> a
[1, 2, 5]

This is a common pattern for removing a contiguous block of elements without creating a new list.

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

  // Q38: Modifying list while iterating
  (_i: number) => ({
    q: `What happens when you remove elements from a list while iterating over it with a for loop?`,
    o: ["Elements may be skipped", "All elements are processed", "Python raises RuntimeError", "The loop runs forever"],
    c: 0,
    e: "Modifying a list during iteration can cause elements to be skipped because indices shift.",
    de: `Modifying a list while iterating over it leads to unexpected behavior. Python's for loop uses an internal index counter that advances by 1 each iteration, but removing elements shifts subsequent elements.

Key concepts:
• Python tracks the current index internally during iteration
• Removing an element shifts all subsequent elements left
• The iterator advances past the shifted element — skipping it
• This is undefined behavior that should be avoided

How it works:
• for x in a: iterates with an internal counter i = 0, 1, 2, ...
• If you remove a[1], elements shift: old a[2] becomes new a[1]
• The counter advances to i=2, skipping the element now at index 1

Example:
>>> a = [1, 2, 3, 4, 5]
>>> for x in a:
...     if x % 2 == 0:
...         a.remove(x)
>>> a
[1, 3, 5]   # Looks correct by luck, but with [1,2,3,4] you'd get [1,3,4]

Safe alternatives: iterate over a copy (a[:]) or use list comprehension to filter.

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

  // Q39: Safe filtering with comprehension
  (_i: number) => ({
    q: `What is b after:\na = [1, 2, 3, 4]\nb = [x for x in a if x != 2]`,
    o: ["[1, 3, 4]", "[1, 2, 3, 4]", "[2]", "Error"],
    c: 0,
    e: "The comprehension filters out 2, keeping all other elements: [1, 3, 4].",
    de: `List comprehensions with a condition are the Pythonic way to filter elements without mutating the original list.

Key concepts:
• [x for x in a if condition] creates a new filtered list
• Original list a is not modified
• Much safer than removing during iteration
• Also more readable and efficient

How it works:
• Iterates over a = [1, 2, 3, 4]
• x=1: 1 != 2 → True → include
• x=2: 2 != 2 → False → exclude
• x=3: 3 != 2 → True → include
• x=4: 4 != 2 → True → include
• b = [1, 3, 4]

Example:
>>> a = [1, 2, 3, 4]
>>> b = [x for x in a if x != 2]
>>> b
[1, 3, 4]
>>> a
[1, 2, 3, 4]

For in-place modification: a[:] = [x for x in a if x != 2] modifies a while keeping the same object.

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

  // Q40: insert at beginning
  (_i: number) => ({
    q: `What is a after:\na = [1, 2, 3]\na.insert(0, 0)`,
    o: ["[0, 1, 2, 3]", "[1, 2, 3, 0]", "[1, 0, 2, 3]", "Error"],
    c: 0,
    e: "insert(0, 0) inserts value 0 at index 0 (beginning). All existing elements shift right.",
    de: `list.insert(index, element) inserts an element before the given index. insert(0, x) prepends to the list.

Key concepts:
• insert(0, x) inserts at the beginning
• All existing elements shift right by one position
• This is an O(n) operation because of the shifting
• For frequent front-insertions, use collections.deque

How it works:
• a = [1, 2, 3]
• a.insert(0, 0) → inserts 0 before index 0
• Elements 1, 2, 3 shift right
• a → [0, 1, 2, 3]

Example:
>>> a = [1, 2, 3]
>>> a.insert(0, 0)
>>> a
[0, 1, 2, 3]

Performance: insert(0, x) is O(n) because every element must shift. Use deque.appendleft() for O(1) front insertion.

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

  // Q41: Unique sorted elements
  (_i: number) => ({
    q: `What is sorted(set([3, 1, 4, 1, 5]))?`,
    o: ["[1, 3, 4, 5]", "[3, 1, 4, 5]", "[1, 1, 3, 4, 5]", "[5, 4, 3, 1]"],
    c: 0,
    e: "set() removes duplicates {1, 3, 4, 5}, then sorted() returns them in ascending order.",
    de: `Combining set() and sorted() is the idiomatic way to get unique elements in sorted order.

Key concepts:
• set() removes duplicates: {3, 1, 4, 1, 5} → {1, 3, 4, 5}
• sorted() returns a new sorted list from any iterable
• sorted(set(...)) is a common Python idiom
• Original order is lost (sorted by value)

How it works:
• set([3, 1, 4, 1, 5]) → {1, 3, 4, 5} (duplicate 1 removed)
• sorted({1, 3, 4, 5}) → [1, 3, 4, 5]

Example:
>>> sorted(set([3, 1, 4, 1, 5]))
[1, 3, 4, 5]

If you need to preserve original order while deduplicating, use dict.fromkeys(): list(dict.fromkeys([3, 1, 4, 1, 5])) → [3, 1, 4, 5].

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

  // Q42: reversed vs [::-1] equivalence
  (_i: number) => ({
    q: `What is the result?\na = [1, 2, 3]\nlist(reversed(a)) == a[::-1]`,
    o: ["True", "False", "None", "Error"],
    c: 0,
    e: "Both produce [3, 2, 1]. reversed() returns an iterator, but wrapped in list() it equals a[::-1].",
    de: `reversed() and [::-1] both reverse a sequence, but they work differently internally.

Key concepts:
• reversed(a) returns a reverse iterator (lazy, O(1) memory)
• a[::-1] creates a new reversed list (eager, O(n) memory)
• When compared as lists, they are equal
• reversed() is more memory-efficient for large sequences

How it works:
• a = [1, 2, 3]
• list(reversed(a)) → [3, 2, 1]
• a[::-1] → [3, 2, 1]
• [3, 2, 1] == [3, 2, 1] → True

Example:
>>> a = [1, 2, 3]
>>> list(reversed(a)) == a[::-1]
True

Choose reversed() when you only need to iterate once; use [::-1] when you need a concrete reversed list.

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

  // Q43: .reverse() modifies in place
  (_i: number) => ({
    q: `What is a after:\na = [1, 2, 3]\na.reverse()`,
    o: ["[3, 2, 1]", "[1, 2, 3]", "None", "Error"],
    c: 0,
    e: "list.reverse() reverses the list in place. a becomes [3, 2, 1].",
    de: `list.reverse() modifies the list in place and returns None. This is a common pattern for in-place methods in Python.

Key concepts:
• .reverse() modifies the list in place
• Returns None (not the reversed list)
• O(n) time, O(1) extra space
• Different from reversed() which returns an iterator

How it works:
• a = [1, 2, 3]
• a.reverse() swaps elements in place: 1↔3
• a → [3, 2, 1]
• The method returns None

Example:
>>> a = [1, 2, 3]
>>> a.reverse()
>>> a
[3, 2, 1]

Common mistake: b = a.reverse() — b is None, not [3, 2, 1]. Use b = a[::-1] or b = list(reversed(a)) to get a reversed copy.

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

  // Q44: .reverse() returns None
  (_i: number) => ({
    q: `What is the result?\na = [1, 2, 3]\na.reverse() is None`,
    o: ["True", "False", "[3, 2, 1]", "Error"],
    c: 0,
    e: "list.reverse() returns None (it modifies the list in place). None is None → True.",
    de: `In Python, methods that modify a collection in place conventionally return None to avoid confusion about whether a new object was created.

Key concepts:
• .reverse() returns None — Python convention for in-place methods
• .sort() also returns None
• .append(), .extend(), .insert() all return None
• This prevents chaining like a.reverse().sort() (it would fail)

How it works:
• a.reverse() reverses a in place and returns None
• None is None → True
• a is now [3, 2, 1], but the return value is None

Example:
>>> a = [1, 2, 3]
>>> result = a.reverse()
>>> result is None
True
>>> a
[3, 2, 1]

This convention was a deliberate design choice by Guido van Rossum to make mutation explicit and prevent silent errors.

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

  // Q45: extend with range
  (_i: number) => ({
    q: `What is a after:\na = []\na.extend(range(5))`,
    o: ["[0, 1, 2, 3, 4]", "[range(0, 5)]", "[0, 1, 2, 3, 4, 5]", "Error"],
    c: 0,
    e: "extend() iterates over the argument and adds each element. range(5) yields 0, 1, 2, 3, 4.",
    de: `list.extend() takes any iterable and adds each of its elements to the list. It does not nest the iterable — it flattens one level.

Key concepts:
• extend() iterates over its argument
• Each element from the iterable is appended individually
• Different from append(), which would add the whole object as one element
• Works with any iterable: range, generator, list, tuple, string, etc.

How it works:
• a = []
• a.extend(range(5)) → iterates range(5): 0, 1, 2, 3, 4
• Each value is appended: a → [0, 1, 2, 3, 4]

Example:
>>> a = []
>>> a.extend(range(5))
>>> a
[0, 1, 2, 3, 4]

Compare: a.append(range(5)) would give [range(0, 5)] — the range object itself as a single element.

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

  // Q46: Step slicing on range list
  (_i: number) => ({
    q: `What is list(range(10))[::3]?`,
    o: ["[0, 3, 6, 9]", "[0, 3, 6]", "[0, 1, 2, 3]", "[3, 6, 9]"],
    c: 0,
    e: "[::3] selects every third element starting from index 0: indices 0, 3, 6, 9.",
    de: `[::3] selects every 3rd element from the sequence, starting at index 0.

Key concepts:
• [::3] means start=0, stop=end, step=3
• Selects indices 0, 3, 6, 9, 12, ... (until out of range)
• Works on any sequence (list, string, tuple)

How it works:
• list(range(10)) = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
• [::3] selects indices 0, 3, 6, 9
• Elements: 0, 3, 6, 9
• Result: [0, 3, 6, 9]

Example:
>>> list(range(10))[::3]
[0, 3, 6, 9]
>>> "abcdefghij"[::3]
'adgj'

The step value determines the gap between selected indices.

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

  // Q47: isinstance count with generator
  (_i: number) => ({
    q: `What is the result?\na = [1, [2, 3], (4, 5)]\nsum(1 for x in a if isinstance(x, list))`,
    o: ["1", "2", "3", "0"],
    c: 0,
    e: "Only [2, 3] is a list. The integer 1 and tuple (4, 5) are not lists. Count = 1.",
    de: `This uses a generator expression with isinstance() to count how many elements are lists.

Key concepts:
• isinstance(x, list) checks if x is a list instance
• sum(1 for ...) counts how many items satisfy the condition
• Only [2, 3] is a list — 1 is an int, (4, 5) is a tuple
• isinstance checks the exact type (or subclass)

How it works:
• a = [1, [2, 3], (4, 5)]
• x=1: isinstance(1, list) → False
• x=[2,3]: isinstance([2,3], list) → True → contributes 1
• x=(4,5): isinstance((4,5), list) → False
• sum of [1] = 1

Example:
>>> a = [1, [2, 3], (4, 5)]
>>> sum(1 for x in a if isinstance(x, list))
1

To count both lists and tuples: isinstance(x, (list, tuple)) with a tuple of types.

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

  // Q48: Flatten nested list with comprehension
  (_i: number) => ({
    q: `What is the result?\n[x for sublist in [[1,2],[3,4],[5]] for x in sublist]`,
    o: ["[1, 2, 3, 4, 5]", "[[1,2],[3,4],[5]]", "[1, 3, 5]", "Error"],
    c: 0,
    e: "Nested comprehension iterates outer lists then inner elements, flattening to [1, 2, 3, 4, 5].",
    de: `This nested list comprehension flattens a list of lists into a single list. The order of the for clauses matches nested for loops.

Key concepts:
• The outer for iterates over sublists
• The inner for iterates over elements in each sublist
• Read left-to-right: outer loop first, then inner loop
• This is the idiomatic way to flatten one level of nesting

How it works:
• sublist = [1, 2] → x = 1, x = 2
• sublist = [3, 4] → x = 3, x = 4
• sublist = [5] → x = 5
• Result: [1, 2, 3, 4, 5]

Equivalent nested loop:
result = []
for sublist in [[1,2],[3,4],[5]]:
    for x in sublist:
        result.append(x)

Example:
>>> [x for sublist in [[1,2],[3,4],[5]] for x in sublist]
[1, 2, 3, 4, 5]

For deeper nesting, use itertools.chain.from_iterable() or recursive flattening.

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

  // Q49: bool is subclass of int
  (_i: number) => ({
    q: `What is the result?\nall(isinstance(x, int) for x in [1, True, 3])`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "bool is a subclass of int in Python. True and False are instances of int, so all checks pass.",
    de: `In Python, bool is a subclass of int. This means True and False are valid int instances.

Key concepts:
• bool inherits from int: class bool(int)
• isinstance(True, int) → True
• isinstance(False, int) → True
• True == 1 and False == 0 in numeric contexts
• This is by design — booleans were added to Python 2.3 as a subclass of int

How it works:
• all() checks if every element satisfies the condition
• x=1: isinstance(1, int) → True
• x=True: isinstance(True, int) → True (bool is subclass of int)
• x=3: isinstance(3, int) → True
• all([True, True, True]) → True

Example:
>>> isinstance(True, int)
True
>>> isinstance(True, bool)
True
>>> issubclass(bool, int)
True

This can be surprising: if you want to exclude booleans, check type(x) is int (exact type check) instead of isinstance.

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

  // Q50: Slice assignment modifies in place — alias sees change
  (_i: number) => ({
    q: `What is b after:\na = [1, 2, 3]\nb = a\na[:] = [4, 5, 6]`,
    o: ["[4, 5, 6]", "[1, 2, 3]", "Error", "None"],
    c: 0,
    e: "a[:] = [4, 5, 6] replaces all elements in place. Since b is a (same object), b also becomes [4, 5, 6].",
    de: `a[:] = ... replaces the contents of the list in place without creating a new object. Any aliases (like b) see the change because they reference the same object.

Key concepts:
• a[:] = [4, 5, 6] modifies the existing list object
• It replaces all elements with new ones
• The object identity doesn't change — id(a) stays the same
• Any variable referencing the same object sees the update

How it works:
• a = [1, 2, 3] — creates list object
• b = a — b is an alias (same object)
• a[:] = [4, 5, 6] — replaces contents in place
• The object is now [4, 5, 6]
• b still references the same object → [4, 5, 6]

Example:
>>> a = [1, 2, 3]
>>> b = a
>>> a[:] = [4, 5, 6]
>>> b
[4, 5, 6]
>>> a is b
True

Compare: a = [4, 5, 6] would rebind a to a new object — b would still be [1, 2, 3]. The [:] is critical for in-place modification.

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
