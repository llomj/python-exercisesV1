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
• Key concepts: • a[1:3] selects elements at index 1 and 2 • Assigning a list to a slice replaces that segment • The replacement list can be shorter or longer than the slice • The list grows or shrinks accordingly How it works: • Before: [1, 2, 3, 4, 5] • a[1:3] = [10, 20, 30] removes indices 1–2 and inserts 10, 20, 30 • After: [1, 10, 20, 30, 4, 5] Example: >>> a = [1, 2, 3, 4, 5] >>> a[1:3] = [10, 20, 30] >>> a [1, 10, 20, 30, 4, 5] This is a powerful technique for in-place list modification without creating a new list object.

Key Distinctions:
• This question’s focus is best captured by: Slice assignment can replace a sub-sequence with a sequence of a different length.
• The contrast that matters for correctness is summarized by: a[1:3] targets indices 1 and 2 (elements 2 and 3).

How It Works:
• Python follows the rule implied by: Slice assignment can replace a sub-sequence with a sequence of a different length.
• The outcome you observe follows from: Key concepts: • a[1:3] selects elements at index 1 and 2 • Assigning a list to a slice replaces that segment • The replacement list can be shorter or longer than the slice • The list grows or shrinks accordingly How it works: • Before: [1, 2, 3, 4, 5] • a[1:3] = [10, 20, 30] removes indices 1–2 and inserts 10, 20, 30 • After: [1, 10, 20, 30, 4, 5] Example: >>> a = [1, 2, 3, 4, 5] >>> a[1:3] = [10, 20, 30] >>> a [1, 10, 20, 30, 4, 5] This is a powerful technique for in-place list modification without creating a new list object.

Step-by-Step Execution:
1. Start from the construct described in: Slice assignment can replace a sub-sequence with a sequence of a different length.
2. Resolve the subparts implied by: a[1:3] targets indices 1 and 2 (elements 2 and 3).
3. Apply the core semantics highlighted in: Assigning [10, 20, 30] replaces those two elements with three new ones.
4. Confirm the final result aligns with: Key concepts: • a[1:3] selects elements at index 1 and 2 • Assigning a list to a slice replaces that segment • The replacement list can be shorter or longer than the slice • The list grows or shrinks accordingly How it works: • Before: [1, 2, 3, 4, 5] • a[1:3] = [10, 20, 30] removes indices 1–2 and inserts 10, 20, 30 • After: [1, 10, 20, 30, 4, 5] Example: >>> a = [1, 2, 3, 4, 5] >>> a[1:3] = [10, 20, 30] >>> a [1, 10, 20, 30, 4, 5] This is a powerful technique for in-place list modification without creating a new list object.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: a[1:3] targets indices 1 and 2 (elements 2 and 3).
2. Apply the construct’s main rule next, matching: Slice assignment can replace a sub-sequence with a sequence of a different length.
3. Produce any intermediate values that Key concepts: • a[1:3] selects elements at index 1 and 2 • Assigning a list to a slice replaces that segment • The replacement list can be shorter or longer than the slice • The list grows or shrinks accordingly How it works: • Before: [1, 2, 3, 4, 5] • a[1:3] = [10, 20, 30] removes indices 1–2 and inserts 10, 20, 30 • After: [1, 10, 20, 30, 4, 5] Example: >>> a = [1, 2, 3, 4, 5] >>> a[1:3] = [10, 20, 30] >>> a [1, 10, 20, 30, 4, 5] This is a powerful technique for in-place list modification without creating a new list object. relies on
4. Finish by returning/assembling the final output named by: Key concepts: • a[1:3] selects elements at index 1 and 2 • Assigning a list to a slice replaces that segment • The replacement list can be shorter or longer than the slice • The list grows or shrinks accordingly How it works: • Before: [1, 2, 3, 4, 5] • a[1:3] = [10, 20, 30] removes indices 1–2 and inserts 10, 20, 30 • After: [1, 10, 20, 30, 4, 5] Example: >>> a = [1, 2, 3, 4, 5] >>> a[1:3] = [10, 20, 30] >>> a [1, 10, 20, 30, 4, 5] This is a powerful technique for in-place list modification without creating a new list object.
5. Use the result only after the full construct has completed, per: Slice assignment can replace a sub-sequence with a sequence of a different length.

Common Use Cases:
• Teaching this behavior using the mental model: Slice assignment can replace a sub-sequence with a sequence of a different length.
• Debugging when the observed value should match the expectation in: Key concepts: • a[1:3] selects elements at index 1 and 2 • Assigning a list to a slice replaces that segment • The replacement list can be shorter or longer than the slice • The list grows or shrinks accordingly How it works: • Before: [1, 2, 3, 4, 5] • a[1:3] = [10, 20, 30] removes indices 1–2 and inserts 10, 20, 30 • After: [1, 10, 20, 30, 4, 5] Example: >>> a = [1, 2, 3, 4, 5] >>> a[1:3] = [10, 20, 30] >>> a [1, 10, 20, 30, 4, 5] This is a powerful technique for in-place list modification without creating a new list object.

Edge Cases:
• If inputs vary from the situation described in: a[1:3] targets indices 1 and 2 (elements 2 and 3)., the behavior can change.
• When the construct’s assumptions differ, the rule in: Assigning [10, 20, 30] replaces those two elements with three new ones. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • a[1:3] selects elements at index 1 and 2 • Assigning a list to a slice replaces that segment • The replacement list can be shorter or longer than the slice • The list grows or shrinks accordingly How it works: • Before: [1, 2, 3, 4, 5] • a[1:3] = [10, 20, 30] removes indices 1–2 and inserts 10, 20, 30 • After: [1, 10, 20, 30, 4, 5] Example: >>> a = [1, 2, 3, 4, 5] >>> a[1:3] = [10, 20, 30] >>> a [1, 10, 20, 30, 4, 5] This is a powerful technique for in-place list modification without creating a new list object..
• When performance matters, prefer the simplest pattern that still implements: Slice assignment can replace a sub-sequence with a sequence of a different length..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Slice assignment can replace a sub-sequence with a sequence of a different length..

Notes:
• For maintainable code, make the intent behind: a[1:3] targets indices 1 and 2 (elements 2 and 3). explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • a[::2] selects every other element: indices 0, 2, 4 • The replacement [10, 20, 30] has 3 elements, matching the 3 selected positions • If lengths don't match, Python raises ValueError • Each selected position is replaced individually How it works: • a[::2] picks indices 0, 2, 4 → elements 1, 3, 5 • Replace: index 0 ← 10, index 2 ← 20, index 4 ← 30 • Elements at indices 1 and 3 are untouched • Result: [10, 2, 20, 4, 30] Example: >>> a = [1, 2, 3, 4, 5] >>> a[::2] = [10, 20, 30] >>> a [10, 2, 20, 4, 30] If you tried a[::2] = [10, 20] it would raise ValueError because the slice selects 3 positions but only 2 values are provided.

Key Distinctions:
• This question’s focus is best captured by: Extended slice assignment (with a step) requires that the replacement sequence has exactly the same number of elements as the slice selects — unlike regular slice assignment.
• The contrast that matters for correctness is summarized by: Key concepts: • a[::2] selects every other element: indices 0, 2, 4 • The replacement [10, 20, 30] has 3 elements, matching the 3 selected positions • If lengths don't match, Python raises ValueError • Each selected position is replaced individually How it works: • a[::2] picks indices 0, 2, 4 → elements 1, 3, 5 • Replace: index 0 ← 10, index 2 ← 20, index 4 ← 30 • Elements at indices 1 and 3 are untouched • Result: [10, 2, 20, 4, 30] Example: >>> a = [1, 2, 3, 4, 5] >>> a[::2] = [10, 20, 30] >>> a [10, 2, 20, 4, 30] If you tried a[::2] = [10, 20] it would raise ValueError because the slice selects 3 positions but only 2 values are provided.

How It Works:
• Python follows the rule implied by: Extended slice assignment (with a step) requires that the replacement sequence has exactly the same number of elements as the slice selects — unlike regular slice assignment.
• The outcome you observe follows from: Key concepts: • a[::2] selects every other element: indices 0, 2, 4 • The replacement [10, 20, 30] has 3 elements, matching the 3 selected positions • If lengths don't match, Python raises ValueError • Each selected position is replaced individually How it works: • a[::2] picks indices 0, 2, 4 → elements 1, 3, 5 • Replace: index 0 ← 10, index 2 ← 20, index 4 ← 30 • Elements at indices 1 and 3 are untouched • Result: [10, 2, 20, 4, 30] Example: >>> a = [1, 2, 3, 4, 5] >>> a[::2] = [10, 20, 30] >>> a [10, 2, 20, 4, 30] If you tried a[::2] = [10, 20] it would raise ValueError because the slice selects 3 positions but only 2 values are provided.

Step-by-Step Execution:
1. Start from the construct described in: Extended slice assignment (with a step) requires that the replacement sequence has exactly the same number of elements as the slice selects — unlike regular slice assignment.
2. Resolve the subparts implied by: Key concepts: • a[::2] selects every other element: indices 0, 2, 4 • The replacement [10, 20, 30] has 3 elements, matching the 3 selected positions • If lengths don't match, Python raises ValueError • Each selected position is replaced individually How it works: • a[::2] picks indices 0, 2, 4 → elements 1, 3, 5 • Replace: index 0 ← 10, index 2 ← 20, index 4 ← 30 • Elements at indices 1 and 3 are untouched • Result: [10, 2, 20, 4, 30] Example: >>> a = [1, 2, 3, 4, 5] >>> a[::2] = [10, 20, 30] >>> a [10, 2, 20, 4, 30] If you tried a[::2] = [10, 20] it would raise ValueError because the slice selects 3 positions but only 2 values are provided.
3. Apply the core semantics highlighted in: Key concepts: • a[::2] selects every other element: indices 0, 2, 4 • The replacement [10, 20, 30] has 3 elements, matching the 3 selected positions • If lengths don't match, Python raises ValueError • Each selected position is replaced individually How it works: • a[::2] picks indices 0, 2, 4 → elements 1, 3, 5 • Replace: index 0 ← 10, index 2 ← 20, index 4 ← 30 • Elements at indices 1 and 3 are untouched • Result: [10, 2, 20, 4, 30] Example: >>> a = [1, 2, 3, 4, 5] >>> a[::2] = [10, 20, 30] >>> a [10, 2, 20, 4, 30] If you tried a[::2] = [10, 20] it would raise ValueError because the slice selects 3 positions but only 2 values are provided.
4. Confirm the final result aligns with: Key concepts: • a[::2] selects every other element: indices 0, 2, 4 • The replacement [10, 20, 30] has 3 elements, matching the 3 selected positions • If lengths don't match, Python raises ValueError • Each selected position is replaced individually How it works: • a[::2] picks indices 0, 2, 4 → elements 1, 3, 5 • Replace: index 0 ← 10, index 2 ← 20, index 4 ← 30 • Elements at indices 1 and 3 are untouched • Result: [10, 2, 20, 4, 30] Example: >>> a = [1, 2, 3, 4, 5] >>> a[::2] = [10, 20, 30] >>> a [10, 2, 20, 4, 30] If you tried a[::2] = [10, 20] it would raise ValueError because the slice selects 3 positions but only 2 values are provided.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • a[::2] selects every other element: indices 0, 2, 4 • The replacement [10, 20, 30] has 3 elements, matching the 3 selected positions • If lengths don't match, Python raises ValueError • Each selected position is replaced individually How it works: • a[::2] picks indices 0, 2, 4 → elements 1, 3, 5 • Replace: index 0 ← 10, index 2 ← 20, index 4 ← 30 • Elements at indices 1 and 3 are untouched • Result: [10, 2, 20, 4, 30] Example: >>> a = [1, 2, 3, 4, 5] >>> a[::2] = [10, 20, 30] >>> a [10, 2, 20, 4, 30] If you tried a[::2] = [10, 20] it would raise ValueError because the slice selects 3 positions but only 2 values are provided.
2. Apply the construct’s main rule next, matching: Extended slice assignment (with a step) requires that the replacement sequence has exactly the same number of elements as the slice selects — unlike regular slice assignment.
3. Produce any intermediate values that Key concepts: • a[::2] selects every other element: indices 0, 2, 4 • The replacement [10, 20, 30] has 3 elements, matching the 3 selected positions • If lengths don't match, Python raises ValueError • Each selected position is replaced individually How it works: • a[::2] picks indices 0, 2, 4 → elements 1, 3, 5 • Replace: index 0 ← 10, index 2 ← 20, index 4 ← 30 • Elements at indices 1 and 3 are untouched • Result: [10, 2, 20, 4, 30] Example: >>> a = [1, 2, 3, 4, 5] >>> a[::2] = [10, 20, 30] >>> a [10, 2, 20, 4, 30] If you tried a[::2] = [10, 20] it would raise ValueError because the slice selects 3 positions but only 2 values are provided. relies on
4. Finish by returning/assembling the final output named by: Key concepts: • a[::2] selects every other element: indices 0, 2, 4 • The replacement [10, 20, 30] has 3 elements, matching the 3 selected positions • If lengths don't match, Python raises ValueError • Each selected position is replaced individually How it works: • a[::2] picks indices 0, 2, 4 → elements 1, 3, 5 • Replace: index 0 ← 10, index 2 ← 20, index 4 ← 30 • Elements at indices 1 and 3 are untouched • Result: [10, 2, 20, 4, 30] Example: >>> a = [1, 2, 3, 4, 5] >>> a[::2] = [10, 20, 30] >>> a [10, 2, 20, 4, 30] If you tried a[::2] = [10, 20] it would raise ValueError because the slice selects 3 positions but only 2 values are provided.
5. Use the result only after the full construct has completed, per: Extended slice assignment (with a step) requires that the replacement sequence has exactly the same number of elements as the slice selects — unlike regular slice assignment.

Common Use Cases:
• Teaching this behavior using the mental model: Extended slice assignment (with a step) requires that the replacement sequence has exactly the same number of elements as the slice selects — unlike regular slice assignment.
• Debugging when the observed value should match the expectation in: Key concepts: • a[::2] selects every other element: indices 0, 2, 4 • The replacement [10, 20, 30] has 3 elements, matching the 3 selected positions • If lengths don't match, Python raises ValueError • Each selected position is replaced individually How it works: • a[::2] picks indices 0, 2, 4 → elements 1, 3, 5 • Replace: index 0 ← 10, index 2 ← 20, index 4 ← 30 • Elements at indices 1 and 3 are untouched • Result: [10, 2, 20, 4, 30] Example: >>> a = [1, 2, 3, 4, 5] >>> a[::2] = [10, 20, 30] >>> a [10, 2, 20, 4, 30] If you tried a[::2] = [10, 20] it would raise ValueError because the slice selects 3 positions but only 2 values are provided.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • a[::2] selects every other element: indices 0, 2, 4 • The replacement [10, 20, 30] has 3 elements, matching the 3 selected positions • If lengths don't match, Python raises ValueError • Each selected position is replaced individually How it works: • a[::2] picks indices 0, 2, 4 → elements 1, 3, 5 • Replace: index 0 ← 10, index 2 ← 20, index 4 ← 30 • Elements at indices 1 and 3 are untouched • Result: [10, 2, 20, 4, 30] Example: >>> a = [1, 2, 3, 4, 5] >>> a[::2] = [10, 20, 30] >>> a [10, 2, 20, 4, 30] If you tried a[::2] = [10, 20] it would raise ValueError because the slice selects 3 positions but only 2 values are provided., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • a[::2] selects every other element: indices 0, 2, 4 • The replacement [10, 20, 30] has 3 elements, matching the 3 selected positions • If lengths don't match, Python raises ValueError • Each selected position is replaced individually How it works: • a[::2] picks indices 0, 2, 4 → elements 1, 3, 5 • Replace: index 0 ← 10, index 2 ← 20, index 4 ← 30 • Elements at indices 1 and 3 are untouched • Result: [10, 2, 20, 4, 30] Example: >>> a = [1, 2, 3, 4, 5] >>> a[::2] = [10, 20, 30] >>> a [10, 2, 20, 4, 30] If you tried a[::2] = [10, 20] it would raise ValueError because the slice selects 3 positions but only 2 values are provided. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • a[::2] selects every other element: indices 0, 2, 4 • The replacement [10, 20, 30] has 3 elements, matching the 3 selected positions • If lengths don't match, Python raises ValueError • Each selected position is replaced individually How it works: • a[::2] picks indices 0, 2, 4 → elements 1, 3, 5 • Replace: index 0 ← 10, index 2 ← 20, index 4 ← 30 • Elements at indices 1 and 3 are untouched • Result: [10, 2, 20, 4, 30] Example: >>> a = [1, 2, 3, 4, 5] >>> a[::2] = [10, 20, 30] >>> a [10, 2, 20, 4, 30] If you tried a[::2] = [10, 20] it would raise ValueError because the slice selects 3 positions but only 2 values are provided..
• When performance matters, prefer the simplest pattern that still implements: Extended slice assignment (with a step) requires that the replacement sequence has exactly the same number of elements as the slice selects — unlike regular slice assignment..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Extended slice assignment (with a step) requires that the replacement sequence has exactly the same number of elements as the slice selects — unlike regular slice assignment..

Notes:
• For maintainable code, make the intent behind: Key concepts: • a[::2] selects every other element: indices 0, 2, 4 • The replacement [10, 20, 30] has 3 elements, matching the 3 selected positions • If lengths don't match, Python raises ValueError • Each selected position is replaced individually How it works: • a[::2] picks indices 0, 2, 4 → elements 1, 3, 5 • Replace: index 0 ← 10, index 2 ← 20, index 4 ← 30 • Elements at indices 1 and 3 are untouched • Result: [10, 2, 20, 4, 30] Example: >>> a = [1, 2, 3, 4, 5] >>> a[::2] = [10, 20, 30] >>> a [10, 2, 20, 4, 30] If you tried a[::2] = [10, 20] it would raise ValueError because the slice selects 3 positions but only 2 values are provided. explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • a[1:4] targets indices 1, 2, 3 (elements 2, 3, 4) • Assigning [] replaces that segment with nothing • The list shrinks — elements are removed, not replaced • This modifies the list in place How it works: • Before: [1, 2, 3, 4, 5] • a[1:4] = [] removes elements at indices 1, 2, 3 • After: [1, 5] Example: >>> a = [1, 2, 3, 4, 5] >>> a[1:4] = [] >>> a [1, 5] This pattern is useful for deleting a range without creating a new list.

Key Distinctions:
• This question’s focus is best captured by: Assigning an empty list to a slice deletes those elements from the list in place.
• The contrast that matters for correctness is summarized by: This is equivalent to del a[1:4].

How It Works:
• Python follows the rule implied by: Assigning an empty list to a slice deletes those elements from the list in place.
• The outcome you observe follows from: Key concepts: • a[1:4] targets indices 1, 2, 3 (elements 2, 3, 4) • Assigning [] replaces that segment with nothing • The list shrinks — elements are removed, not replaced • This modifies the list in place How it works: • Before: [1, 2, 3, 4, 5] • a[1:4] = [] removes elements at indices 1, 2, 3 • After: [1, 5] Example: >>> a = [1, 2, 3, 4, 5] >>> a[1:4] = [] >>> a [1, 5] This pattern is useful for deleting a range without creating a new list.

Step-by-Step Execution:
1. Start from the construct described in: Assigning an empty list to a slice deletes those elements from the list in place.
2. Resolve the subparts implied by: This is equivalent to del a[1:4].
3. Apply the core semantics highlighted in: Key concepts: • a[1:4] targets indices 1, 2, 3 (elements 2, 3, 4) • Assigning [] replaces that segment with nothing • The list shrinks — elements are removed, not replaced • This modifies the list in place How it works: • Before: [1, 2, 3, 4, 5] • a[1:4] = [] removes elements at indices 1, 2, 3 • After: [1, 5] Example: >>> a = [1, 2, 3, 4, 5] >>> a[1:4] = [] >>> a [1, 5] This pattern is useful for deleting a range without creating a new list.
4. Confirm the final result aligns with: Key concepts: • a[1:4] targets indices 1, 2, 3 (elements 2, 3, 4) • Assigning [] replaces that segment with nothing • The list shrinks — elements are removed, not replaced • This modifies the list in place How it works: • Before: [1, 2, 3, 4, 5] • a[1:4] = [] removes elements at indices 1, 2, 3 • After: [1, 5] Example: >>> a = [1, 2, 3, 4, 5] >>> a[1:4] = [] >>> a [1, 5] This pattern is useful for deleting a range without creating a new list.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: This is equivalent to del a[1:4].
2. Apply the construct’s main rule next, matching: Assigning an empty list to a slice deletes those elements from the list in place.
3. Produce any intermediate values that Key concepts: • a[1:4] targets indices 1, 2, 3 (elements 2, 3, 4) • Assigning [] replaces that segment with nothing • The list shrinks — elements are removed, not replaced • This modifies the list in place How it works: • Before: [1, 2, 3, 4, 5] • a[1:4] = [] removes elements at indices 1, 2, 3 • After: [1, 5] Example: >>> a = [1, 2, 3, 4, 5] >>> a[1:4] = [] >>> a [1, 5] This pattern is useful for deleting a range without creating a new list. relies on
4. Finish by returning/assembling the final output named by: Key concepts: • a[1:4] targets indices 1, 2, 3 (elements 2, 3, 4) • Assigning [] replaces that segment with nothing • The list shrinks — elements are removed, not replaced • This modifies the list in place How it works: • Before: [1, 2, 3, 4, 5] • a[1:4] = [] removes elements at indices 1, 2, 3 • After: [1, 5] Example: >>> a = [1, 2, 3, 4, 5] >>> a[1:4] = [] >>> a [1, 5] This pattern is useful for deleting a range without creating a new list.
5. Use the result only after the full construct has completed, per: Assigning an empty list to a slice deletes those elements from the list in place.

Common Use Cases:
• Teaching this behavior using the mental model: Assigning an empty list to a slice deletes those elements from the list in place.
• Debugging when the observed value should match the expectation in: Key concepts: • a[1:4] targets indices 1, 2, 3 (elements 2, 3, 4) • Assigning [] replaces that segment with nothing • The list shrinks — elements are removed, not replaced • This modifies the list in place How it works: • Before: [1, 2, 3, 4, 5] • a[1:4] = [] removes elements at indices 1, 2, 3 • After: [1, 5] Example: >>> a = [1, 2, 3, 4, 5] >>> a[1:4] = [] >>> a [1, 5] This pattern is useful for deleting a range without creating a new list.

Edge Cases:
• If inputs vary from the situation described in: This is equivalent to del a[1:4]., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • a[1:4] targets indices 1, 2, 3 (elements 2, 3, 4) • Assigning [] replaces that segment with nothing • The list shrinks — elements are removed, not replaced • This modifies the list in place How it works: • Before: [1, 2, 3, 4, 5] • a[1:4] = [] removes elements at indices 1, 2, 3 • After: [1, 5] Example: >>> a = [1, 2, 3, 4, 5] >>> a[1:4] = [] >>> a [1, 5] This pattern is useful for deleting a range without creating a new list. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • a[1:4] targets indices 1, 2, 3 (elements 2, 3, 4) • Assigning [] replaces that segment with nothing • The list shrinks — elements are removed, not replaced • This modifies the list in place How it works: • Before: [1, 2, 3, 4, 5] • a[1:4] = [] removes elements at indices 1, 2, 3 • After: [1, 5] Example: >>> a = [1, 2, 3, 4, 5] >>> a[1:4] = [] >>> a [1, 5] This pattern is useful for deleting a range without creating a new list..
• When performance matters, prefer the simplest pattern that still implements: Assigning an empty list to a slice deletes those elements from the list in place..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Assigning an empty list to a slice deletes those elements from the list in place..

Notes:
• For maintainable code, make the intent behind: This is equivalent to del a[1:4]. explicit (and test it with inputs like those in this prompt).`
  }),

  // Q4: del with extended slice
  (_i: number) => ({
    q: `What is a after:\na = [1, 2, 3, 4, 5]\ndel a[::2]`,
    o: ["[2, 4]", "[1, 3, 5]", "[3, 5]", "Error"],
    c: 0,
    e: "del a[::2] deletes elements at indices 0, 2, 4 (values 1, 3, 5), leaving [2, 4].",
    de: `del with an extended slice removes all elements at the selected indices. a[::2] selects indices 0, 2, and 4. Before: [1, 2, 3, 4, 5]. del a[::2] removes indices 0, 2, 4 (elements 1, 3, 5). After: [2, 4]. Note: you cannot use "a[::2] = []" for this because extended slice assignment requires matching lengths. You must use del instead.

Key Concepts:
• You must use del instead.

Key Distinctions:
• This question’s focus is best captured by: del with an extended slice removes all elements at the selected indices.
• The contrast that matters for correctness is summarized by: a[::2] selects indices 0, 2, and 4.

How It Works:
• Python follows the rule implied by: del with an extended slice removes all elements at the selected indices.
• The outcome you observe follows from: You must use del instead.

Step-by-Step Execution:
1. Start from the construct described in: del with an extended slice removes all elements at the selected indices.
2. Resolve the subparts implied by: a[::2] selects indices 0, 2, and 4.
3. Apply the core semantics highlighted in: Before: [1, 2, 3, 4, 5].
4. Confirm the final result aligns with: You must use del instead.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: a[::2] selects indices 0, 2, and 4.
2. Apply the construct’s main rule next, matching: del with an extended slice removes all elements at the selected indices.
3. Produce any intermediate values that You must use del instead. relies on
4. Finish by returning/assembling the final output named by: You must use del instead.
5. Use the result only after the full construct has completed, per: del with an extended slice removes all elements at the selected indices.

Common Use Cases:
• Teaching this behavior using the mental model: del with an extended slice removes all elements at the selected indices.
• Debugging when the observed value should match the expectation in: You must use del instead.

Edge Cases:
• If inputs vary from the situation described in: a[::2] selects indices 0, 2, and 4., the behavior can change.
• When the construct’s assumptions differ, the rule in: Before: [1, 2, 3, 4, 5]. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: You must use del instead..
• When performance matters, prefer the simplest pattern that still implements: del with an extended slice removes all elements at the selected indices..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: del with an extended slice removes all elements at the selected indices..

Notes:
• For maintainable code, make the intent behind: a[::2] selects indices 0, 2, and 4. explicit (and test it with inputs like those in this prompt).`
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
• Similarly, a[:0] = [...] prepends.

Key Distinctions:
• This question’s focus is best captured by: a[len(a):] is an empty slice starting at the end of the list.
• The contrast that matters for correctness is summarized by: Assigning to it inserts elements there — effectively appending.

How It Works:
• Python follows the rule implied by: a[len(a):] is an empty slice starting at the end of the list.
• The outcome you observe follows from: Similarly, a[:0] = [...] prepends.

Step-by-Step Execution:
1. Start from the construct described in: a[len(a):] is an empty slice starting at the end of the list.
2. Resolve the subparts implied by: Assigning to it inserts elements there — effectively appending.
3. Apply the core semantics highlighted in: Key concepts: • a[len(a):] is equivalent to a[3:] when len(a) == 3 • This slice selects nothing (empty range at end) • Assigning a list inserts those elements at that position • Equivalent to a.extend([4, 5]) How it works: • a[3:] is an empty slice starting at index 3 (past the last element) • a[3:] = [4, 5] inserts 4 and 5 at the end • Result: [1, 2, 3, 4, 5] Example: >>> a = [1, 2, 3] >>> a[len(a):] = [4, 5] >>> a [1, 2, 3, 4, 5] This is the slice-based idiom for extend().
4. Confirm the final result aligns with: Similarly, a[:0] = [...] prepends.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Assigning to it inserts elements there — effectively appending.
2. Apply the construct’s main rule next, matching: a[len(a):] is an empty slice starting at the end of the list.
3. Produce any intermediate values that Similarly, a[:0] = [...] prepends. relies on
4. Finish by returning/assembling the final output named by: Similarly, a[:0] = [...] prepends.
5. Use the result only after the full construct has completed, per: a[len(a):] is an empty slice starting at the end of the list.

Common Use Cases:
• Teaching this behavior using the mental model: a[len(a):] is an empty slice starting at the end of the list.
• Debugging when the observed value should match the expectation in: Similarly, a[:0] = [...] prepends.

Edge Cases:
• If inputs vary from the situation described in: Assigning to it inserts elements there — effectively appending., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • a[len(a):] is equivalent to a[3:] when len(a) == 3 • This slice selects nothing (empty range at end) • Assigning a list inserts those elements at that position • Equivalent to a.extend([4, 5]) How it works: • a[3:] is an empty slice starting at index 3 (past the last element) • a[3:] = [4, 5] inserts 4 and 5 at the end • Result: [1, 2, 3, 4, 5] Example: >>> a = [1, 2, 3] >>> a[len(a):] = [4, 5] >>> a [1, 2, 3, 4, 5] This is the slice-based idiom for extend(). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Similarly, a[:0] = [...] prepends..
• When performance matters, prefer the simplest pattern that still implements: a[len(a):] is an empty slice starting at the end of the list..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: a[len(a):] is an empty slice starting at the end of the list..

Notes:
• For maintainable code, make the intent behind: Assigning to it inserts elements there — effectively appending. explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • a[0:0] selects nothing — start and stop are both 0 • Assigning a list to an empty slice inserts without removing • This is the slice idiom for prepending elements • The original elements shift right How it works: • a[0:0] = [10, 20] inserts 10, 20 before index 0 • Original elements [1, 2, 3] move to the right • Result: [10, 20, 1, 2, 3] Example: >>> a = [1, 2, 3] >>> a[0:0] = [10, 20] >>> a [10, 20, 1, 2, 3] This is equivalent to: for x in reversed([10, 20]): a.insert(0, x)

Key Distinctions:
• This question’s focus is best captured by: a[0:0] is an empty slice at the very beginning of the list.
• The contrast that matters for correctness is summarized by: Assigning to it inserts elements before index 0.

How It Works:
• Python follows the rule implied by: a[0:0] is an empty slice at the very beginning of the list.
• The outcome you observe follows from: Key concepts: • a[0:0] selects nothing — start and stop are both 0 • Assigning a list to an empty slice inserts without removing • This is the slice idiom for prepending elements • The original elements shift right How it works: • a[0:0] = [10, 20] inserts 10, 20 before index 0 • Original elements [1, 2, 3] move to the right • Result: [10, 20, 1, 2, 3] Example: >>> a = [1, 2, 3] >>> a[0:0] = [10, 20] >>> a [10, 20, 1, 2, 3] This is equivalent to: for x in reversed([10, 20]): a.insert(0, x)

Step-by-Step Execution:
1. Start from the construct described in: a[0:0] is an empty slice at the very beginning of the list.
2. Resolve the subparts implied by: Assigning to it inserts elements before index 0.
3. Apply the core semantics highlighted in: Key concepts: • a[0:0] selects nothing — start and stop are both 0 • Assigning a list to an empty slice inserts without removing • This is the slice idiom for prepending elements • The original elements shift right How it works: • a[0:0] = [10, 20] inserts 10, 20 before index 0 • Original elements [1, 2, 3] move to the right • Result: [10, 20, 1, 2, 3] Example: >>> a = [1, 2, 3] >>> a[0:0] = [10, 20] >>> a [10, 20, 1, 2, 3] This is equivalent to: for x in reversed([10, 20]): a.insert(0, x)
4. Confirm the final result aligns with: Key concepts: • a[0:0] selects nothing — start and stop are both 0 • Assigning a list to an empty slice inserts without removing • This is the slice idiom for prepending elements • The original elements shift right How it works: • a[0:0] = [10, 20] inserts 10, 20 before index 0 • Original elements [1, 2, 3] move to the right • Result: [10, 20, 1, 2, 3] Example: >>> a = [1, 2, 3] >>> a[0:0] = [10, 20] >>> a [10, 20, 1, 2, 3] This is equivalent to: for x in reversed([10, 20]): a.insert(0, x)

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Assigning to it inserts elements before index 0.
2. Apply the construct’s main rule next, matching: a[0:0] is an empty slice at the very beginning of the list.
3. Produce any intermediate values that Key concepts: • a[0:0] selects nothing — start and stop are both 0 • Assigning a list to an empty slice inserts without removing • This is the slice idiom for prepending elements • The original elements shift right How it works: • a[0:0] = [10, 20] inserts 10, 20 before index 0 • Original elements [1, 2, 3] move to the right • Result: [10, 20, 1, 2, 3] Example: >>> a = [1, 2, 3] >>> a[0:0] = [10, 20] >>> a [10, 20, 1, 2, 3] This is equivalent to: for x in reversed([10, 20]): a.insert(0, x) relies on
4. Finish by returning/assembling the final output named by: Key concepts: • a[0:0] selects nothing — start and stop are both 0 • Assigning a list to an empty slice inserts without removing • This is the slice idiom for prepending elements • The original elements shift right How it works: • a[0:0] = [10, 20] inserts 10, 20 before index 0 • Original elements [1, 2, 3] move to the right • Result: [10, 20, 1, 2, 3] Example: >>> a = [1, 2, 3] >>> a[0:0] = [10, 20] >>> a [10, 20, 1, 2, 3] This is equivalent to: for x in reversed([10, 20]): a.insert(0, x)
5. Use the result only after the full construct has completed, per: a[0:0] is an empty slice at the very beginning of the list.

Common Use Cases:
• Teaching this behavior using the mental model: a[0:0] is an empty slice at the very beginning of the list.
• Debugging when the observed value should match the expectation in: Key concepts: • a[0:0] selects nothing — start and stop are both 0 • Assigning a list to an empty slice inserts without removing • This is the slice idiom for prepending elements • The original elements shift right How it works: • a[0:0] = [10, 20] inserts 10, 20 before index 0 • Original elements [1, 2, 3] move to the right • Result: [10, 20, 1, 2, 3] Example: >>> a = [1, 2, 3] >>> a[0:0] = [10, 20] >>> a [10, 20, 1, 2, 3] This is equivalent to: for x in reversed([10, 20]): a.insert(0, x)

Edge Cases:
• If inputs vary from the situation described in: Assigning to it inserts elements before index 0., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • a[0:0] selects nothing — start and stop are both 0 • Assigning a list to an empty slice inserts without removing • This is the slice idiom for prepending elements • The original elements shift right How it works: • a[0:0] = [10, 20] inserts 10, 20 before index 0 • Original elements [1, 2, 3] move to the right • Result: [10, 20, 1, 2, 3] Example: >>> a = [1, 2, 3] >>> a[0:0] = [10, 20] >>> a [10, 20, 1, 2, 3] This is equivalent to: for x in reversed([10, 20]): a.insert(0, x) is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • a[0:0] selects nothing — start and stop are both 0 • Assigning a list to an empty slice inserts without removing • This is the slice idiom for prepending elements • The original elements shift right How it works: • a[0:0] = [10, 20] inserts 10, 20 before index 0 • Original elements [1, 2, 3] move to the right • Result: [10, 20, 1, 2, 3] Example: >>> a = [1, 2, 3] >>> a[0:0] = [10, 20] >>> a [10, 20, 1, 2, 3] This is equivalent to: for x in reversed([10, 20]): a.insert(0, x).
• When performance matters, prefer the simplest pattern that still implements: a[0:0] is an empty slice at the very beginning of the list..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: a[0:0] is an empty slice at the very beginning of the list..

Notes:
• For maintainable code, make the intent behind: Assigning to it inserts elements before index 0. explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • a[start:start] is always an empty slice at position start • Assigning to it inserts elements at that position • No existing elements are removed • Equivalent to a.insert(1, 10) for a single element How it works: • a[1:1] selects nothing at index 1 • [10] is inserted before the element currently at index 1 • Elements at index 1 onwards shift right • Result: [1, 10, 2, 3] Example: >>> a = [1, 2, 3] >>> a[1:1] = [10] >>> a [1, 10, 2, 3] Unlike insert(), slice assignment can insert multiple elements at once: a[1:1] = [10, 20, 30].

Key Distinctions:
• This question’s focus is best captured by: a[1:1] is an empty slice at index 1.
• The contrast that matters for correctness is summarized by: Assigning to it inserts elements at that position without removing anything.

How It Works:
• Python follows the rule implied by: a[1:1] is an empty slice at index 1.
• The outcome you observe follows from: Key concepts: • a[start:start] is always an empty slice at position start • Assigning to it inserts elements at that position • No existing elements are removed • Equivalent to a.insert(1, 10) for a single element How it works: • a[1:1] selects nothing at index 1 • [10] is inserted before the element currently at index 1 • Elements at index 1 onwards shift right • Result: [1, 10, 2, 3] Example: >>> a = [1, 2, 3] >>> a[1:1] = [10] >>> a [1, 10, 2, 3] Unlike insert(), slice assignment can insert multiple elements at once: a[1:1] = [10, 20, 30].

Step-by-Step Execution:
1. Start from the construct described in: a[1:1] is an empty slice at index 1.
2. Resolve the subparts implied by: Assigning to it inserts elements at that position without removing anything.
3. Apply the core semantics highlighted in: Key concepts: • a[start:start] is always an empty slice at position start • Assigning to it inserts elements at that position • No existing elements are removed • Equivalent to a.insert(1, 10) for a single element How it works: • a[1:1] selects nothing at index 1 • [10] is inserted before the element currently at index 1 • Elements at index 1 onwards shift right • Result: [1, 10, 2, 3] Example: >>> a = [1, 2, 3] >>> a[1:1] = [10] >>> a [1, 10, 2, 3] Unlike insert(), slice assignment can insert multiple elements at once: a[1:1] = [10, 20, 30].
4. Confirm the final result aligns with: Key concepts: • a[start:start] is always an empty slice at position start • Assigning to it inserts elements at that position • No existing elements are removed • Equivalent to a.insert(1, 10) for a single element How it works: • a[1:1] selects nothing at index 1 • [10] is inserted before the element currently at index 1 • Elements at index 1 onwards shift right • Result: [1, 10, 2, 3] Example: >>> a = [1, 2, 3] >>> a[1:1] = [10] >>> a [1, 10, 2, 3] Unlike insert(), slice assignment can insert multiple elements at once: a[1:1] = [10, 20, 30].

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Assigning to it inserts elements at that position without removing anything.
2. Apply the construct’s main rule next, matching: a[1:1] is an empty slice at index 1.
3. Produce any intermediate values that Key concepts: • a[start:start] is always an empty slice at position start • Assigning to it inserts elements at that position • No existing elements are removed • Equivalent to a.insert(1, 10) for a single element How it works: • a[1:1] selects nothing at index 1 • [10] is inserted before the element currently at index 1 • Elements at index 1 onwards shift right • Result: [1, 10, 2, 3] Example: >>> a = [1, 2, 3] >>> a[1:1] = [10] >>> a [1, 10, 2, 3] Unlike insert(), slice assignment can insert multiple elements at once: a[1:1] = [10, 20, 30]. relies on
4. Finish by returning/assembling the final output named by: Key concepts: • a[start:start] is always an empty slice at position start • Assigning to it inserts elements at that position • No existing elements are removed • Equivalent to a.insert(1, 10) for a single element How it works: • a[1:1] selects nothing at index 1 • [10] is inserted before the element currently at index 1 • Elements at index 1 onwards shift right • Result: [1, 10, 2, 3] Example: >>> a = [1, 2, 3] >>> a[1:1] = [10] >>> a [1, 10, 2, 3] Unlike insert(), slice assignment can insert multiple elements at once: a[1:1] = [10, 20, 30].
5. Use the result only after the full construct has completed, per: a[1:1] is an empty slice at index 1.

Common Use Cases:
• Teaching this behavior using the mental model: a[1:1] is an empty slice at index 1.
• Debugging when the observed value should match the expectation in: Key concepts: • a[start:start] is always an empty slice at position start • Assigning to it inserts elements at that position • No existing elements are removed • Equivalent to a.insert(1, 10) for a single element How it works: • a[1:1] selects nothing at index 1 • [10] is inserted before the element currently at index 1 • Elements at index 1 onwards shift right • Result: [1, 10, 2, 3] Example: >>> a = [1, 2, 3] >>> a[1:1] = [10] >>> a [1, 10, 2, 3] Unlike insert(), slice assignment can insert multiple elements at once: a[1:1] = [10, 20, 30].

Edge Cases:
• If inputs vary from the situation described in: Assigning to it inserts elements at that position without removing anything., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • a[start:start] is always an empty slice at position start • Assigning to it inserts elements at that position • No existing elements are removed • Equivalent to a.insert(1, 10) for a single element How it works: • a[1:1] selects nothing at index 1 • [10] is inserted before the element currently at index 1 • Elements at index 1 onwards shift right • Result: [1, 10, 2, 3] Example: >>> a = [1, 2, 3] >>> a[1:1] = [10] >>> a [1, 10, 2, 3] Unlike insert(), slice assignment can insert multiple elements at once: a[1:1] = [10, 20, 30]. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • a[start:start] is always an empty slice at position start • Assigning to it inserts elements at that position • No existing elements are removed • Equivalent to a.insert(1, 10) for a single element How it works: • a[1:1] selects nothing at index 1 • [10] is inserted before the element currently at index 1 • Elements at index 1 onwards shift right • Result: [1, 10, 2, 3] Example: >>> a = [1, 2, 3] >>> a[1:1] = [10] >>> a [1, 10, 2, 3] Unlike insert(), slice assignment can insert multiple elements at once: a[1:1] = [10, 20, 30]..
• When performance matters, prefer the simplest pattern that still implements: a[1:1] is an empty slice at index 1..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: a[1:1] is an empty slice at index 1..

Notes:
• For maintainable code, make the intent behind: Assigning to it inserts elements at that position without removing anything. explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • slice(start, stop) creates a reusable slice object • slice(1, 4) is equivalent to [1:4] • slice objects can be stored in variables and reused • They accept start, stop, and optional step arguments How it works: • slice(1, 4) → selects indices 1, 2, 3 • [1, 2, 3, 4, 5][slice(1, 4)] → [2, 3, 4] • Same as [1, 2, 3, 4, 5][1:4] Example: >>> s = slice(1, 4) >>> [1, 2, 3, 4, 5][s] [2, 3, 4] Slice objects are useful when you need to pass slicing parameters as arguments or store them for reuse.

Key Distinctions:
• This question’s focus is best captured by: The slice() built-in creates a slice object that can be used in place of the a:b syntax inside brackets.
• The contrast that matters for correctness is summarized by: slice(1, 4) is equivalent to the notation [1:4].

How It Works:
• Python follows the rule implied by: The slice() built-in creates a slice object that can be used in place of the a:b syntax inside brackets.
• The outcome you observe follows from: Key concepts: • slice(start, stop) creates a reusable slice object • slice(1, 4) is equivalent to [1:4] • slice objects can be stored in variables and reused • They accept start, stop, and optional step arguments How it works: • slice(1, 4) → selects indices 1, 2, 3 • [1, 2, 3, 4, 5][slice(1, 4)] → [2, 3, 4] • Same as [1, 2, 3, 4, 5][1:4] Example: >>> s = slice(1, 4) >>> [1, 2, 3, 4, 5][s] [2, 3, 4] Slice objects are useful when you need to pass slicing parameters as arguments or store them for reuse.

Step-by-Step Execution:
1. Start from the construct described in: The slice() built-in creates a slice object that can be used in place of the a:b syntax inside brackets.
2. Resolve the subparts implied by: slice(1, 4) is equivalent to the notation [1:4].
3. Apply the core semantics highlighted in: Key concepts: • slice(start, stop) creates a reusable slice object • slice(1, 4) is equivalent to [1:4] • slice objects can be stored in variables and reused • They accept start, stop, and optional step arguments How it works: • slice(1, 4) → selects indices 1, 2, 3 • [1, 2, 3, 4, 5][slice(1, 4)] → [2, 3, 4] • Same as [1, 2, 3, 4, 5][1:4] Example: >>> s = slice(1, 4) >>> [1, 2, 3, 4, 5][s] [2, 3, 4] Slice objects are useful when you need to pass slicing parameters as arguments or store them for reuse.
4. Confirm the final result aligns with: Key concepts: • slice(start, stop) creates a reusable slice object • slice(1, 4) is equivalent to [1:4] • slice objects can be stored in variables and reused • They accept start, stop, and optional step arguments How it works: • slice(1, 4) → selects indices 1, 2, 3 • [1, 2, 3, 4, 5][slice(1, 4)] → [2, 3, 4] • Same as [1, 2, 3, 4, 5][1:4] Example: >>> s = slice(1, 4) >>> [1, 2, 3, 4, 5][s] [2, 3, 4] Slice objects are useful when you need to pass slicing parameters as arguments or store them for reuse.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: slice(1, 4) is equivalent to the notation [1:4].
2. Apply the construct’s main rule next, matching: The slice() built-in creates a slice object that can be used in place of the a:b syntax inside brackets.
3. Produce any intermediate values that Key concepts: • slice(start, stop) creates a reusable slice object • slice(1, 4) is equivalent to [1:4] • slice objects can be stored in variables and reused • They accept start, stop, and optional step arguments How it works: • slice(1, 4) → selects indices 1, 2, 3 • [1, 2, 3, 4, 5][slice(1, 4)] → [2, 3, 4] • Same as [1, 2, 3, 4, 5][1:4] Example: >>> s = slice(1, 4) >>> [1, 2, 3, 4, 5][s] [2, 3, 4] Slice objects are useful when you need to pass slicing parameters as arguments or store them for reuse. relies on
4. Finish by returning/assembling the final output named by: Key concepts: • slice(start, stop) creates a reusable slice object • slice(1, 4) is equivalent to [1:4] • slice objects can be stored in variables and reused • They accept start, stop, and optional step arguments How it works: • slice(1, 4) → selects indices 1, 2, 3 • [1, 2, 3, 4, 5][slice(1, 4)] → [2, 3, 4] • Same as [1, 2, 3, 4, 5][1:4] Example: >>> s = slice(1, 4) >>> [1, 2, 3, 4, 5][s] [2, 3, 4] Slice objects are useful when you need to pass slicing parameters as arguments or store them for reuse.
5. Use the result only after the full construct has completed, per: The slice() built-in creates a slice object that can be used in place of the a:b syntax inside brackets.

Common Use Cases:
• Teaching this behavior using the mental model: The slice() built-in creates a slice object that can be used in place of the a:b syntax inside brackets.
• Debugging when the observed value should match the expectation in: Key concepts: • slice(start, stop) creates a reusable slice object • slice(1, 4) is equivalent to [1:4] • slice objects can be stored in variables and reused • They accept start, stop, and optional step arguments How it works: • slice(1, 4) → selects indices 1, 2, 3 • [1, 2, 3, 4, 5][slice(1, 4)] → [2, 3, 4] • Same as [1, 2, 3, 4, 5][1:4] Example: >>> s = slice(1, 4) >>> [1, 2, 3, 4, 5][s] [2, 3, 4] Slice objects are useful when you need to pass slicing parameters as arguments or store them for reuse.

Edge Cases:
• If inputs vary from the situation described in: slice(1, 4) is equivalent to the notation [1:4]., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • slice(start, stop) creates a reusable slice object • slice(1, 4) is equivalent to [1:4] • slice objects can be stored in variables and reused • They accept start, stop, and optional step arguments How it works: • slice(1, 4) → selects indices 1, 2, 3 • [1, 2, 3, 4, 5][slice(1, 4)] → [2, 3, 4] • Same as [1, 2, 3, 4, 5][1:4] Example: >>> s = slice(1, 4) >>> [1, 2, 3, 4, 5][s] [2, 3, 4] Slice objects are useful when you need to pass slicing parameters as arguments or store them for reuse. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • slice(start, stop) creates a reusable slice object • slice(1, 4) is equivalent to [1:4] • slice objects can be stored in variables and reused • They accept start, stop, and optional step arguments How it works: • slice(1, 4) → selects indices 1, 2, 3 • [1, 2, 3, 4, 5][slice(1, 4)] → [2, 3, 4] • Same as [1, 2, 3, 4, 5][1:4] Example: >>> s = slice(1, 4) >>> [1, 2, 3, 4, 5][s] [2, 3, 4] Slice objects are useful when you need to pass slicing parameters as arguments or store them for reuse..
• When performance matters, prefer the simplest pattern that still implements: The slice() built-in creates a slice object that can be used in place of the a:b syntax inside brackets..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The slice() built-in creates a slice object that can be used in place of the a:b syntax inside brackets..

Notes:
• For maintainable code, make the intent behind: slice(1, 4) is equivalent to the notation [1:4]. explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • slice(0, 10, 2) = start at 0, stop before 10, step by 2 • Equivalent to [0:10:2] • Selects indices: 0, 2, 4, 6, 8 How it works: • The list is [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] • slice(0, 10, 2) picks every other element starting from index 0 • Indices selected: 0, 2, 4, 6, 8 • Elements: [0, 2, 4, 6, 8] Example: >>> s = slice(0, 10, 2) >>> list(range(10))[s] [0, 2, 4, 6, 8] slice objects also have .start, .stop, and .step attributes for introspection.

Key Distinctions:
• This question’s focus is best captured by: slice(start, stop, step) with three arguments creates a slice with a step value.
• The contrast that matters for correctness is summarized by: slice(0, 10, 2) is equivalent to [0:10:2].

How It Works:
• Python follows the rule implied by: slice(start, stop, step) with three arguments creates a slice with a step value.
• The outcome you observe follows from: Key concepts: • slice(0, 10, 2) = start at 0, stop before 10, step by 2 • Equivalent to [0:10:2] • Selects indices: 0, 2, 4, 6, 8 How it works: • The list is [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] • slice(0, 10, 2) picks every other element starting from index 0 • Indices selected: 0, 2, 4, 6, 8 • Elements: [0, 2, 4, 6, 8] Example: >>> s = slice(0, 10, 2) >>> list(range(10))[s] [0, 2, 4, 6, 8] slice objects also have .start, .stop, and .step attributes for introspection.

Step-by-Step Execution:
1. Start from the construct described in: slice(start, stop, step) with three arguments creates a slice with a step value.
2. Resolve the subparts implied by: slice(0, 10, 2) is equivalent to [0:10:2].
3. Apply the core semantics highlighted in: Key concepts: • slice(0, 10, 2) = start at 0, stop before 10, step by 2 • Equivalent to [0:10:2] • Selects indices: 0, 2, 4, 6, 8 How it works: • The list is [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] • slice(0, 10, 2) picks every other element starting from index 0 • Indices selected: 0, 2, 4, 6, 8 • Elements: [0, 2, 4, 6, 8] Example: >>> s = slice(0, 10, 2) >>> list(range(10))[s] [0, 2, 4, 6, 8] slice objects also have .start, .stop, and .step attributes for introspection.
4. Confirm the final result aligns with: Key concepts: • slice(0, 10, 2) = start at 0, stop before 10, step by 2 • Equivalent to [0:10:2] • Selects indices: 0, 2, 4, 6, 8 How it works: • The list is [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] • slice(0, 10, 2) picks every other element starting from index 0 • Indices selected: 0, 2, 4, 6, 8 • Elements: [0, 2, 4, 6, 8] Example: >>> s = slice(0, 10, 2) >>> list(range(10))[s] [0, 2, 4, 6, 8] slice objects also have .start, .stop, and .step attributes for introspection.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: slice(0, 10, 2) is equivalent to [0:10:2].
2. Apply the construct’s main rule next, matching: slice(start, stop, step) with three arguments creates a slice with a step value.
3. Produce any intermediate values that Key concepts: • slice(0, 10, 2) = start at 0, stop before 10, step by 2 • Equivalent to [0:10:2] • Selects indices: 0, 2, 4, 6, 8 How it works: • The list is [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] • slice(0, 10, 2) picks every other element starting from index 0 • Indices selected: 0, 2, 4, 6, 8 • Elements: [0, 2, 4, 6, 8] Example: >>> s = slice(0, 10, 2) >>> list(range(10))[s] [0, 2, 4, 6, 8] slice objects also have .start, .stop, and .step attributes for introspection. relies on
4. Finish by returning/assembling the final output named by: Key concepts: • slice(0, 10, 2) = start at 0, stop before 10, step by 2 • Equivalent to [0:10:2] • Selects indices: 0, 2, 4, 6, 8 How it works: • The list is [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] • slice(0, 10, 2) picks every other element starting from index 0 • Indices selected: 0, 2, 4, 6, 8 • Elements: [0, 2, 4, 6, 8] Example: >>> s = slice(0, 10, 2) >>> list(range(10))[s] [0, 2, 4, 6, 8] slice objects also have .start, .stop, and .step attributes for introspection.
5. Use the result only after the full construct has completed, per: slice(start, stop, step) with three arguments creates a slice with a step value.

Common Use Cases:
• Teaching this behavior using the mental model: slice(start, stop, step) with three arguments creates a slice with a step value.
• Debugging when the observed value should match the expectation in: Key concepts: • slice(0, 10, 2) = start at 0, stop before 10, step by 2 • Equivalent to [0:10:2] • Selects indices: 0, 2, 4, 6, 8 How it works: • The list is [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] • slice(0, 10, 2) picks every other element starting from index 0 • Indices selected: 0, 2, 4, 6, 8 • Elements: [0, 2, 4, 6, 8] Example: >>> s = slice(0, 10, 2) >>> list(range(10))[s] [0, 2, 4, 6, 8] slice objects also have .start, .stop, and .step attributes for introspection.

Edge Cases:
• If inputs vary from the situation described in: slice(0, 10, 2) is equivalent to [0:10:2]., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • slice(0, 10, 2) = start at 0, stop before 10, step by 2 • Equivalent to [0:10:2] • Selects indices: 0, 2, 4, 6, 8 How it works: • The list is [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] • slice(0, 10, 2) picks every other element starting from index 0 • Indices selected: 0, 2, 4, 6, 8 • Elements: [0, 2, 4, 6, 8] Example: >>> s = slice(0, 10, 2) >>> list(range(10))[s] [0, 2, 4, 6, 8] slice objects also have .start, .stop, and .step attributes for introspection. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • slice(0, 10, 2) = start at 0, stop before 10, step by 2 • Equivalent to [0:10:2] • Selects indices: 0, 2, 4, 6, 8 How it works: • The list is [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] • slice(0, 10, 2) picks every other element starting from index 0 • Indices selected: 0, 2, 4, 6, 8 • Elements: [0, 2, 4, 6, 8] Example: >>> s = slice(0, 10, 2) >>> list(range(10))[s] [0, 2, 4, 6, 8] slice objects also have .start, .stop, and .step attributes for introspection..
• When performance matters, prefer the simplest pattern that still implements: slice(start, stop, step) with three arguments creates a slice with a step value..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: slice(start, stop, step) with three arguments creates a slice with a step value..

Notes:
• For maintainable code, make the intent behind: slice(0, 10, 2) is equivalent to [0:10:2]. explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • [::-1] means: start at end, go to beginning, step -1 • Works on strings, lists, tuples — any sequence • Creates a new object (does not modify in place) • For strings, this is the most common reversal technique How it works: • "hello"[::-1] iterates from the last character backwards • h(0) e(1) l(2) l(3) o(4) → o(4) l(3) l(2) e(1) h(0) • Result: "olleh" Example: >>> "hello"[::-1] 'olleh' >>> [1, 2, 3][::-1] [3, 2, 1] This is widely used in interview problems for palindrome checks: s == s[::-1].

Key Distinctions:
• This question’s focus is best captured by: [::-1] is the Pythonic idiom for reversing a sequence.
• The contrast that matters for correctness is summarized by: It creates a new sequence with elements in reverse order.

How It Works:
• Python follows the rule implied by: [::-1] is the Pythonic idiom for reversing a sequence.
• The outcome you observe follows from: Key concepts: • [::-1] means: start at end, go to beginning, step -1 • Works on strings, lists, tuples — any sequence • Creates a new object (does not modify in place) • For strings, this is the most common reversal technique How it works: • "hello"[::-1] iterates from the last character backwards • h(0) e(1) l(2) l(3) o(4) → o(4) l(3) l(2) e(1) h(0) • Result: "olleh" Example: >>> "hello"[::-1] 'olleh' >>> [1, 2, 3][::-1] [3, 2, 1] This is widely used in interview problems for palindrome checks: s == s[::-1].

Step-by-Step Execution:
1. Start from the construct described in: [::-1] is the Pythonic idiom for reversing a sequence.
2. Resolve the subparts implied by: It creates a new sequence with elements in reverse order.
3. Apply the core semantics highlighted in: Key concepts: • [::-1] means: start at end, go to beginning, step -1 • Works on strings, lists, tuples — any sequence • Creates a new object (does not modify in place) • For strings, this is the most common reversal technique How it works: • "hello"[::-1] iterates from the last character backwards • h(0) e(1) l(2) l(3) o(4) → o(4) l(3) l(2) e(1) h(0) • Result: "olleh" Example: >>> "hello"[::-1] 'olleh' >>> [1, 2, 3][::-1] [3, 2, 1] This is widely used in interview problems for palindrome checks: s == s[::-1].
4. Confirm the final result aligns with: Key concepts: • [::-1] means: start at end, go to beginning, step -1 • Works on strings, lists, tuples — any sequence • Creates a new object (does not modify in place) • For strings, this is the most common reversal technique How it works: • "hello"[::-1] iterates from the last character backwards • h(0) e(1) l(2) l(3) o(4) → o(4) l(3) l(2) e(1) h(0) • Result: "olleh" Example: >>> "hello"[::-1] 'olleh' >>> [1, 2, 3][::-1] [3, 2, 1] This is widely used in interview problems for palindrome checks: s == s[::-1].

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: It creates a new sequence with elements in reverse order.
2. Apply the construct’s main rule next, matching: [::-1] is the Pythonic idiom for reversing a sequence.
3. Produce any intermediate values that Key concepts: • [::-1] means: start at end, go to beginning, step -1 • Works on strings, lists, tuples — any sequence • Creates a new object (does not modify in place) • For strings, this is the most common reversal technique How it works: • "hello"[::-1] iterates from the last character backwards • h(0) e(1) l(2) l(3) o(4) → o(4) l(3) l(2) e(1) h(0) • Result: "olleh" Example: >>> "hello"[::-1] 'olleh' >>> [1, 2, 3][::-1] [3, 2, 1] This is widely used in interview problems for palindrome checks: s == s[::-1]. relies on
4. Finish by returning/assembling the final output named by: Key concepts: • [::-1] means: start at end, go to beginning, step -1 • Works on strings, lists, tuples — any sequence • Creates a new object (does not modify in place) • For strings, this is the most common reversal technique How it works: • "hello"[::-1] iterates from the last character backwards • h(0) e(1) l(2) l(3) o(4) → o(4) l(3) l(2) e(1) h(0) • Result: "olleh" Example: >>> "hello"[::-1] 'olleh' >>> [1, 2, 3][::-1] [3, 2, 1] This is widely used in interview problems for palindrome checks: s == s[::-1].
5. Use the result only after the full construct has completed, per: [::-1] is the Pythonic idiom for reversing a sequence.

Common Use Cases:
• Teaching this behavior using the mental model: [::-1] is the Pythonic idiom for reversing a sequence.
• Debugging when the observed value should match the expectation in: Key concepts: • [::-1] means: start at end, go to beginning, step -1 • Works on strings, lists, tuples — any sequence • Creates a new object (does not modify in place) • For strings, this is the most common reversal technique How it works: • "hello"[::-1] iterates from the last character backwards • h(0) e(1) l(2) l(3) o(4) → o(4) l(3) l(2) e(1) h(0) • Result: "olleh" Example: >>> "hello"[::-1] 'olleh' >>> [1, 2, 3][::-1] [3, 2, 1] This is widely used in interview problems for palindrome checks: s == s[::-1].

Edge Cases:
• If inputs vary from the situation described in: It creates a new sequence with elements in reverse order., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • [::-1] means: start at end, go to beginning, step -1 • Works on strings, lists, tuples — any sequence • Creates a new object (does not modify in place) • For strings, this is the most common reversal technique How it works: • "hello"[::-1] iterates from the last character backwards • h(0) e(1) l(2) l(3) o(4) → o(4) l(3) l(2) e(1) h(0) • Result: "olleh" Example: >>> "hello"[::-1] 'olleh' >>> [1, 2, 3][::-1] [3, 2, 1] This is widely used in interview problems for palindrome checks: s == s[::-1]. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • [::-1] means: start at end, go to beginning, step -1 • Works on strings, lists, tuples — any sequence • Creates a new object (does not modify in place) • For strings, this is the most common reversal technique How it works: • "hello"[::-1] iterates from the last character backwards • h(0) e(1) l(2) l(3) o(4) → o(4) l(3) l(2) e(1) h(0) • Result: "olleh" Example: >>> "hello"[::-1] 'olleh' >>> [1, 2, 3][::-1] [3, 2, 1] This is widely used in interview problems for palindrome checks: s == s[::-1]..
• When performance matters, prefer the simplest pattern that still implements: [::-1] is the Pythonic idiom for reversing a sequence..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: [::-1] is the Pythonic idiom for reversing a sequence..

Notes:
• For maintainable code, make the intent behind: It creates a new sequence with elements in reverse order. explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • a[:] copies all elements into a new list • b is a new list object, not the same object as a • 'is' checks object identity (same memory address) • '==' checks equality (same values) • b == a would be True, but b is a is False How it works: • a = [1, 2, 3] creates a list object • b = a[:] creates a different list object with same values • b is a → False (different objects) • b == a → True (equal values) Example: >>> a = [1, 2, 3] >>> b = a[:] >>> b is a False >>> b == a True Other ways to create shallow copies: list(a), a.copy(), copy.copy(a).

Key Distinctions:
• This question’s focus is best captured by: a[:] creates a shallow copy of the list — a new list object with the same elements.
• The contrast that matters for correctness is summarized by: The 'is' operator checks whether two variables refer to the exact same object in memory.

How It Works:
• Python follows the rule implied by: a[:] creates a shallow copy of the list — a new list object with the same elements.
• The outcome you observe follows from: Key concepts: • a[:] copies all elements into a new list • b is a new list object, not the same object as a • 'is' checks object identity (same memory address) • '==' checks equality (same values) • b == a would be True, but b is a is False How it works: • a = [1, 2, 3] creates a list object • b = a[:] creates a different list object with same values • b is a → False (different objects) • b == a → True (equal values) Example: >>> a = [1, 2, 3] >>> b = a[:] >>> b is a False >>> b == a True Other ways to create shallow copies: list(a), a.copy(), copy.copy(a).

Step-by-Step Execution:
1. Start from the construct described in: a[:] creates a shallow copy of the list — a new list object with the same elements.
2. Resolve the subparts implied by: The 'is' operator checks whether two variables refer to the exact same object in memory.
3. Apply the core semantics highlighted in: Key concepts: • a[:] copies all elements into a new list • b is a new list object, not the same object as a • 'is' checks object identity (same memory address) • '==' checks equality (same values) • b == a would be True, but b is a is False How it works: • a = [1, 2, 3] creates a list object • b = a[:] creates a different list object with same values • b is a → False (different objects) • b == a → True (equal values) Example: >>> a = [1, 2, 3] >>> b = a[:] >>> b is a False >>> b == a True Other ways to create shallow copies: list(a), a.copy(), copy.copy(a).
4. Confirm the final result aligns with: Key concepts: • a[:] copies all elements into a new list • b is a new list object, not the same object as a • 'is' checks object identity (same memory address) • '==' checks equality (same values) • b == a would be True, but b is a is False How it works: • a = [1, 2, 3] creates a list object • b = a[:] creates a different list object with same values • b is a → False (different objects) • b == a → True (equal values) Example: >>> a = [1, 2, 3] >>> b = a[:] >>> b is a False >>> b == a True Other ways to create shallow copies: list(a), a.copy(), copy.copy(a).

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The 'is' operator checks whether two variables refer to the exact same object in memory.
2. Apply the construct’s main rule next, matching: a[:] creates a shallow copy of the list — a new list object with the same elements.
3. Produce any intermediate values that Key concepts: • a[:] copies all elements into a new list • b is a new list object, not the same object as a • 'is' checks object identity (same memory address) • '==' checks equality (same values) • b == a would be True, but b is a is False How it works: • a = [1, 2, 3] creates a list object • b = a[:] creates a different list object with same values • b is a → False (different objects) • b == a → True (equal values) Example: >>> a = [1, 2, 3] >>> b = a[:] >>> b is a False >>> b == a True Other ways to create shallow copies: list(a), a.copy(), copy.copy(a). relies on
4. Finish by returning/assembling the final output named by: Key concepts: • a[:] copies all elements into a new list • b is a new list object, not the same object as a • 'is' checks object identity (same memory address) • '==' checks equality (same values) • b == a would be True, but b is a is False How it works: • a = [1, 2, 3] creates a list object • b = a[:] creates a different list object with same values • b is a → False (different objects) • b == a → True (equal values) Example: >>> a = [1, 2, 3] >>> b = a[:] >>> b is a False >>> b == a True Other ways to create shallow copies: list(a), a.copy(), copy.copy(a).
5. Use the result only after the full construct has completed, per: a[:] creates a shallow copy of the list — a new list object with the same elements.

Common Use Cases:
• Teaching this behavior using the mental model: a[:] creates a shallow copy of the list — a new list object with the same elements.
• Debugging when the observed value should match the expectation in: Key concepts: • a[:] copies all elements into a new list • b is a new list object, not the same object as a • 'is' checks object identity (same memory address) • '==' checks equality (same values) • b == a would be True, but b is a is False How it works: • a = [1, 2, 3] creates a list object • b = a[:] creates a different list object with same values • b is a → False (different objects) • b == a → True (equal values) Example: >>> a = [1, 2, 3] >>> b = a[:] >>> b is a False >>> b == a True Other ways to create shallow copies: list(a), a.copy(), copy.copy(a).

Edge Cases:
• If inputs vary from the situation described in: The 'is' operator checks whether two variables refer to the exact same object in memory., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • a[:] copies all elements into a new list • b is a new list object, not the same object as a • 'is' checks object identity (same memory address) • '==' checks equality (same values) • b == a would be True, but b is a is False How it works: • a = [1, 2, 3] creates a list object • b = a[:] creates a different list object with same values • b is a → False (different objects) • b == a → True (equal values) Example: >>> a = [1, 2, 3] >>> b = a[:] >>> b is a False >>> b == a True Other ways to create shallow copies: list(a), a.copy(), copy.copy(a). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • a[:] copies all elements into a new list • b is a new list object, not the same object as a • 'is' checks object identity (same memory address) • '==' checks equality (same values) • b == a would be True, but b is a is False How it works: • a = [1, 2, 3] creates a list object • b = a[:] creates a different list object with same values • b is a → False (different objects) • b == a → True (equal values) Example: >>> a = [1, 2, 3] >>> b = a[:] >>> b is a False >>> b == a True Other ways to create shallow copies: list(a), a.copy(), copy.copy(a)..
• When performance matters, prefer the simplest pattern that still implements: a[:] creates a shallow copy of the list — a new list object with the same elements..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: a[:] creates a shallow copy of the list — a new list object with the same elements..

Notes:
• For maintainable code, make the intent behind: The 'is' operator checks whether two variables refer to the exact same object in memory. explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • id() returns the unique identifier of an object • Two different objects always have different ids (while both alive) • a[:] creates a new list → different id from a • This confirms a[:] is a true copy, not an alias How it works: • a has some id, say 140234567890 • a[:] creates new list with different id, say 140234567960 • id(a) == id(a[:]) → False Example: >>> a = [1, 2, 3] >>> id(a) == id(a[:]) False Note: for small integers and interned strings, id() can sometimes be equal due to caching, but lists are never cached.

Key Distinctions:
• This question’s focus is best captured by: Every Python object has a unique id (its memory address in CPython).
• The contrast that matters for correctness is summarized by: a[:] creates a new list, so it gets a different id.

How It Works:
• Python follows the rule implied by: Every Python object has a unique id (its memory address in CPython).
• The outcome you observe follows from: Key concepts: • id() returns the unique identifier of an object • Two different objects always have different ids (while both alive) • a[:] creates a new list → different id from a • This confirms a[:] is a true copy, not an alias How it works: • a has some id, say 140234567890 • a[:] creates new list with different id, say 140234567960 • id(a) == id(a[:]) → False Example: >>> a = [1, 2, 3] >>> id(a) == id(a[:]) False Note: for small integers and interned strings, id() can sometimes be equal due to caching, but lists are never cached.

Step-by-Step Execution:
1. Start from the construct described in: Every Python object has a unique id (its memory address in CPython).
2. Resolve the subparts implied by: a[:] creates a new list, so it gets a different id.
3. Apply the core semantics highlighted in: Key concepts: • id() returns the unique identifier of an object • Two different objects always have different ids (while both alive) • a[:] creates a new list → different id from a • This confirms a[:] is a true copy, not an alias How it works: • a has some id, say 140234567890 • a[:] creates new list with different id, say 140234567960 • id(a) == id(a[:]) → False Example: >>> a = [1, 2, 3] >>> id(a) == id(a[:]) False Note: for small integers and interned strings, id() can sometimes be equal due to caching, but lists are never cached.
4. Confirm the final result aligns with: Key concepts: • id() returns the unique identifier of an object • Two different objects always have different ids (while both alive) • a[:] creates a new list → different id from a • This confirms a[:] is a true copy, not an alias How it works: • a has some id, say 140234567890 • a[:] creates new list with different id, say 140234567960 • id(a) == id(a[:]) → False Example: >>> a = [1, 2, 3] >>> id(a) == id(a[:]) False Note: for small integers and interned strings, id() can sometimes be equal due to caching, but lists are never cached.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: a[:] creates a new list, so it gets a different id.
2. Apply the construct’s main rule next, matching: Every Python object has a unique id (its memory address in CPython).
3. Produce any intermediate values that Key concepts: • id() returns the unique identifier of an object • Two different objects always have different ids (while both alive) • a[:] creates a new list → different id from a • This confirms a[:] is a true copy, not an alias How it works: • a has some id, say 140234567890 • a[:] creates new list with different id, say 140234567960 • id(a) == id(a[:]) → False Example: >>> a = [1, 2, 3] >>> id(a) == id(a[:]) False Note: for small integers and interned strings, id() can sometimes be equal due to caching, but lists are never cached. relies on
4. Finish by returning/assembling the final output named by: Key concepts: • id() returns the unique identifier of an object • Two different objects always have different ids (while both alive) • a[:] creates a new list → different id from a • This confirms a[:] is a true copy, not an alias How it works: • a has some id, say 140234567890 • a[:] creates new list with different id, say 140234567960 • id(a) == id(a[:]) → False Example: >>> a = [1, 2, 3] >>> id(a) == id(a[:]) False Note: for small integers and interned strings, id() can sometimes be equal due to caching, but lists are never cached.
5. Use the result only after the full construct has completed, per: Every Python object has a unique id (its memory address in CPython).

Common Use Cases:
• Teaching this behavior using the mental model: Every Python object has a unique id (its memory address in CPython).
• Debugging when the observed value should match the expectation in: Key concepts: • id() returns the unique identifier of an object • Two different objects always have different ids (while both alive) • a[:] creates a new list → different id from a • This confirms a[:] is a true copy, not an alias How it works: • a has some id, say 140234567890 • a[:] creates new list with different id, say 140234567960 • id(a) == id(a[:]) → False Example: >>> a = [1, 2, 3] >>> id(a) == id(a[:]) False Note: for small integers and interned strings, id() can sometimes be equal due to caching, but lists are never cached.

Edge Cases:
• If inputs vary from the situation described in: a[:] creates a new list, so it gets a different id., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • id() returns the unique identifier of an object • Two different objects always have different ids (while both alive) • a[:] creates a new list → different id from a • This confirms a[:] is a true copy, not an alias How it works: • a has some id, say 140234567890 • a[:] creates new list with different id, say 140234567960 • id(a) == id(a[:]) → False Example: >>> a = [1, 2, 3] >>> id(a) == id(a[:]) False Note: for small integers and interned strings, id() can sometimes be equal due to caching, but lists are never cached. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • id() returns the unique identifier of an object • Two different objects always have different ids (while both alive) • a[:] creates a new list → different id from a • This confirms a[:] is a true copy, not an alias How it works: • a has some id, say 140234567890 • a[:] creates new list with different id, say 140234567960 • id(a) == id(a[:]) → False Example: >>> a = [1, 2, 3] >>> id(a) == id(a[:]) False Note: for small integers and interned strings, id() can sometimes be equal due to caching, but lists are never cached..
• When performance matters, prefer the simplest pattern that still implements: Every Python object has a unique id (its memory address in CPython)..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Every Python object has a unique id (its memory address in CPython)..

Notes:
• For maintainable code, make the intent behind: a[:] creates a new list, so it gets a different id. explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • Tuples support all slice operations: [start:stop:step] • [::-1] reverses the tuple • The result is always a tuple (not a list) • Tuples cannot be modified via slice assignment (immutable) How it works: • (1, 2, 3)[::-1] reverses: 3, 2, 1 • Returns a new tuple (3, 2, 1) • The original tuple is unchanged (it's immutable) Example: >>> (1, 2, 3)[::-1] (3, 2, 1) >>> t = (10, 20, 30, 40) >>> t[1:3] (20, 30) Unlike lists, you cannot do t[0:1] = (99,) — that would raise TypeError.

Key Distinctions:
• This question’s focus is best captured by: Slicing works on tuples just like lists, but always returns a new tuple (since tuples are immutable).
• The contrast that matters for correctness is summarized by: Key concepts: • Tuples support all slice operations: [start:stop:step] • [::-1] reverses the tuple • The result is always a tuple (not a list) • Tuples cannot be modified via slice assignment (immutable) How it works: • (1, 2, 3)[::-1] reverses: 3, 2, 1 • Returns a new tuple (3, 2, 1) • The original tuple is unchanged (it's immutable) Example: >>> (1, 2, 3)[::-1] (3, 2, 1) >>> t = (10, 20, 30, 40) >>> t[1:3] (20, 30) Unlike lists, you cannot do t[0:1] = (99,) — that would raise TypeError.

How It Works:
• Python follows the rule implied by: Slicing works on tuples just like lists, but always returns a new tuple (since tuples are immutable).
• The outcome you observe follows from: Key concepts: • Tuples support all slice operations: [start:stop:step] • [::-1] reverses the tuple • The result is always a tuple (not a list) • Tuples cannot be modified via slice assignment (immutable) How it works: • (1, 2, 3)[::-1] reverses: 3, 2, 1 • Returns a new tuple (3, 2, 1) • The original tuple is unchanged (it's immutable) Example: >>> (1, 2, 3)[::-1] (3, 2, 1) >>> t = (10, 20, 30, 40) >>> t[1:3] (20, 30) Unlike lists, you cannot do t[0:1] = (99,) — that would raise TypeError.

Step-by-Step Execution:
1. Start from the construct described in: Slicing works on tuples just like lists, but always returns a new tuple (since tuples are immutable).
2. Resolve the subparts implied by: Key concepts: • Tuples support all slice operations: [start:stop:step] • [::-1] reverses the tuple • The result is always a tuple (not a list) • Tuples cannot be modified via slice assignment (immutable) How it works: • (1, 2, 3)[::-1] reverses: 3, 2, 1 • Returns a new tuple (3, 2, 1) • The original tuple is unchanged (it's immutable) Example: >>> (1, 2, 3)[::-1] (3, 2, 1) >>> t = (10, 20, 30, 40) >>> t[1:3] (20, 30) Unlike lists, you cannot do t[0:1] = (99,) — that would raise TypeError.
3. Apply the core semantics highlighted in: Key concepts: • Tuples support all slice operations: [start:stop:step] • [::-1] reverses the tuple • The result is always a tuple (not a list) • Tuples cannot be modified via slice assignment (immutable) How it works: • (1, 2, 3)[::-1] reverses: 3, 2, 1 • Returns a new tuple (3, 2, 1) • The original tuple is unchanged (it's immutable) Example: >>> (1, 2, 3)[::-1] (3, 2, 1) >>> t = (10, 20, 30, 40) >>> t[1:3] (20, 30) Unlike lists, you cannot do t[0:1] = (99,) — that would raise TypeError.
4. Confirm the final result aligns with: Key concepts: • Tuples support all slice operations: [start:stop:step] • [::-1] reverses the tuple • The result is always a tuple (not a list) • Tuples cannot be modified via slice assignment (immutable) How it works: • (1, 2, 3)[::-1] reverses: 3, 2, 1 • Returns a new tuple (3, 2, 1) • The original tuple is unchanged (it's immutable) Example: >>> (1, 2, 3)[::-1] (3, 2, 1) >>> t = (10, 20, 30, 40) >>> t[1:3] (20, 30) Unlike lists, you cannot do t[0:1] = (99,) — that would raise TypeError.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • Tuples support all slice operations: [start:stop:step] • [::-1] reverses the tuple • The result is always a tuple (not a list) • Tuples cannot be modified via slice assignment (immutable) How it works: • (1, 2, 3)[::-1] reverses: 3, 2, 1 • Returns a new tuple (3, 2, 1) • The original tuple is unchanged (it's immutable) Example: >>> (1, 2, 3)[::-1] (3, 2, 1) >>> t = (10, 20, 30, 40) >>> t[1:3] (20, 30) Unlike lists, you cannot do t[0:1] = (99,) — that would raise TypeError.
2. Apply the construct’s main rule next, matching: Slicing works on tuples just like lists, but always returns a new tuple (since tuples are immutable).
3. Produce any intermediate values that Key concepts: • Tuples support all slice operations: [start:stop:step] • [::-1] reverses the tuple • The result is always a tuple (not a list) • Tuples cannot be modified via slice assignment (immutable) How it works: • (1, 2, 3)[::-1] reverses: 3, 2, 1 • Returns a new tuple (3, 2, 1) • The original tuple is unchanged (it's immutable) Example: >>> (1, 2, 3)[::-1] (3, 2, 1) >>> t = (10, 20, 30, 40) >>> t[1:3] (20, 30) Unlike lists, you cannot do t[0:1] = (99,) — that would raise TypeError. relies on
4. Finish by returning/assembling the final output named by: Key concepts: • Tuples support all slice operations: [start:stop:step] • [::-1] reverses the tuple • The result is always a tuple (not a list) • Tuples cannot be modified via slice assignment (immutable) How it works: • (1, 2, 3)[::-1] reverses: 3, 2, 1 • Returns a new tuple (3, 2, 1) • The original tuple is unchanged (it's immutable) Example: >>> (1, 2, 3)[::-1] (3, 2, 1) >>> t = (10, 20, 30, 40) >>> t[1:3] (20, 30) Unlike lists, you cannot do t[0:1] = (99,) — that would raise TypeError.
5. Use the result only after the full construct has completed, per: Slicing works on tuples just like lists, but always returns a new tuple (since tuples are immutable).

Common Use Cases:
• Teaching this behavior using the mental model: Slicing works on tuples just like lists, but always returns a new tuple (since tuples are immutable).
• Debugging when the observed value should match the expectation in: Key concepts: • Tuples support all slice operations: [start:stop:step] • [::-1] reverses the tuple • The result is always a tuple (not a list) • Tuples cannot be modified via slice assignment (immutable) How it works: • (1, 2, 3)[::-1] reverses: 3, 2, 1 • Returns a new tuple (3, 2, 1) • The original tuple is unchanged (it's immutable) Example: >>> (1, 2, 3)[::-1] (3, 2, 1) >>> t = (10, 20, 30, 40) >>> t[1:3] (20, 30) Unlike lists, you cannot do t[0:1] = (99,) — that would raise TypeError.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • Tuples support all slice operations: [start:stop:step] • [::-1] reverses the tuple • The result is always a tuple (not a list) • Tuples cannot be modified via slice assignment (immutable) How it works: • (1, 2, 3)[::-1] reverses: 3, 2, 1 • Returns a new tuple (3, 2, 1) • The original tuple is unchanged (it's immutable) Example: >>> (1, 2, 3)[::-1] (3, 2, 1) >>> t = (10, 20, 30, 40) >>> t[1:3] (20, 30) Unlike lists, you cannot do t[0:1] = (99,) — that would raise TypeError., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • Tuples support all slice operations: [start:stop:step] • [::-1] reverses the tuple • The result is always a tuple (not a list) • Tuples cannot be modified via slice assignment (immutable) How it works: • (1, 2, 3)[::-1] reverses: 3, 2, 1 • Returns a new tuple (3, 2, 1) • The original tuple is unchanged (it's immutable) Example: >>> (1, 2, 3)[::-1] (3, 2, 1) >>> t = (10, 20, 30, 40) >>> t[1:3] (20, 30) Unlike lists, you cannot do t[0:1] = (99,) — that would raise TypeError. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • Tuples support all slice operations: [start:stop:step] • [::-1] reverses the tuple • The result is always a tuple (not a list) • Tuples cannot be modified via slice assignment (immutable) How it works: • (1, 2, 3)[::-1] reverses: 3, 2, 1 • Returns a new tuple (3, 2, 1) • The original tuple is unchanged (it's immutable) Example: >>> (1, 2, 3)[::-1] (3, 2, 1) >>> t = (10, 20, 30, 40) >>> t[1:3] (20, 30) Unlike lists, you cannot do t[0:1] = (99,) — that would raise TypeError..
• When performance matters, prefer the simplest pattern that still implements: Slicing works on tuples just like lists, but always returns a new tuple (since tuples are immutable)..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Slicing works on tuples just like lists, but always returns a new tuple (since tuples are immutable)..

Notes:
• For maintainable code, make the intent behind: Key concepts: • Tuples support all slice operations: [start:stop:step] • [::-1] reverses the tuple • The result is always a tuple (not a list) • Tuples cannot be modified via slice assignment (immutable) How it works: • (1, 2, 3)[::-1] reverses: 3, 2, 1 • Returns a new tuple (3, 2, 1) • The original tuple is unchanged (it's immutable) Example: >>> (1, 2, 3)[::-1] (3, 2, 1) >>> t = (10, 20, 30, 40) >>> t[1:3] (20, 30) Unlike lists, you cannot do t[0:1] = (99,) — that would raise TypeError. explicit (and test it with inputs like those in this prompt).`
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
• • Works on any sequence type How it works: • "python" has indices: p(0) y(1) t(2) h(3) o(4) n(5) • [::2] selects indices 0, 2, 4 → 'p', 't', 'o' • Result: "pto" Example: >>> "python"[::2] 'pto' >>> "python"[1::2] 'yhn' [1::2] would give the other half: characters at indices 1, 3, 5 → "yhn".

Key Distinctions:
• This question’s focus is best captured by: Step slicing [::2] selects every other character starting from the beginning.
• The contrast that matters for correctness is summarized by: Key concepts: • [::2] means start=0, stop=end, step=2 • Selects indices 0, 2, 4, 6, ...

How It Works:
• Python follows the rule implied by: Step slicing [::2] selects every other character starting from the beginning.
• The outcome you observe follows from: • Works on any sequence type How it works: • "python" has indices: p(0) y(1) t(2) h(3) o(4) n(5) • [::2] selects indices 0, 2, 4 → 'p', 't', 'o' • Result: "pto" Example: >>> "python"[::2] 'pto' >>> "python"[1::2] 'yhn' [1::2] would give the other half: characters at indices 1, 3, 5 → "yhn".

Step-by-Step Execution:
1. Start from the construct described in: Step slicing [::2] selects every other character starting from the beginning.
2. Resolve the subparts implied by: Key concepts: • [::2] means start=0, stop=end, step=2 • Selects indices 0, 2, 4, 6, ...
3. Apply the core semantics highlighted in: • Works on any sequence type How it works: • "python" has indices: p(0) y(1) t(2) h(3) o(4) n(5) • [::2] selects indices 0, 2, 4 → 'p', 't', 'o' • Result: "pto" Example: >>> "python"[::2] 'pto' >>> "python"[1::2] 'yhn' [1::2] would give the other half: characters at indices 1, 3, 5 → "yhn".
4. Confirm the final result aligns with: • Works on any sequence type How it works: • "python" has indices: p(0) y(1) t(2) h(3) o(4) n(5) • [::2] selects indices 0, 2, 4 → 'p', 't', 'o' • Result: "pto" Example: >>> "python"[::2] 'pto' >>> "python"[1::2] 'yhn' [1::2] would give the other half: characters at indices 1, 3, 5 → "yhn".

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • [::2] means start=0, stop=end, step=2 • Selects indices 0, 2, 4, 6, ...
2. Apply the construct’s main rule next, matching: Step slicing [::2] selects every other character starting from the beginning.
3. Produce any intermediate values that • Works on any sequence type How it works: • "python" has indices: p(0) y(1) t(2) h(3) o(4) n(5) • [::2] selects indices 0, 2, 4 → 'p', 't', 'o' • Result: "pto" Example: >>> "python"[::2] 'pto' >>> "python"[1::2] 'yhn' [1::2] would give the other half: characters at indices 1, 3, 5 → "yhn". relies on
4. Finish by returning/assembling the final output named by: • Works on any sequence type How it works: • "python" has indices: p(0) y(1) t(2) h(3) o(4) n(5) • [::2] selects indices 0, 2, 4 → 'p', 't', 'o' • Result: "pto" Example: >>> "python"[::2] 'pto' >>> "python"[1::2] 'yhn' [1::2] would give the other half: characters at indices 1, 3, 5 → "yhn".
5. Use the result only after the full construct has completed, per: Step slicing [::2] selects every other character starting from the beginning.

Common Use Cases:
• Teaching this behavior using the mental model: Step slicing [::2] selects every other character starting from the beginning.
• Debugging when the observed value should match the expectation in: • Works on any sequence type How it works: • "python" has indices: p(0) y(1) t(2) h(3) o(4) n(5) • [::2] selects indices 0, 2, 4 → 'p', 't', 'o' • Result: "pto" Example: >>> "python"[::2] 'pto' >>> "python"[1::2] 'yhn' [1::2] would give the other half: characters at indices 1, 3, 5 → "yhn".

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • [::2] means start=0, stop=end, step=2 • Selects indices 0, 2, 4, 6, ..., the behavior can change.
• When the construct’s assumptions differ, the rule in: • Works on any sequence type How it works: • "python" has indices: p(0) y(1) t(2) h(3) o(4) n(5) • [::2] selects indices 0, 2, 4 → 'p', 't', 'o' • Result: "pto" Example: >>> "python"[::2] 'pto' >>> "python"[1::2] 'yhn' [1::2] would give the other half: characters at indices 1, 3, 5 → "yhn". is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: • Works on any sequence type How it works: • "python" has indices: p(0) y(1) t(2) h(3) o(4) n(5) • [::2] selects indices 0, 2, 4 → 'p', 't', 'o' • Result: "pto" Example: >>> "python"[::2] 'pto' >>> "python"[1::2] 'yhn' [1::2] would give the other half: characters at indices 1, 3, 5 → "yhn"..
• When performance matters, prefer the simplest pattern that still implements: Step slicing [::2] selects every other character starting from the beginning..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Step slicing [::2] selects every other character starting from the beginning..

Notes:
• For maintainable code, make the intent behind: Key concepts: • [::2] means start=0, stop=end, step=2 • Selects indices 0, 2, 4, 6, ... explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • [7:2:-1] means start=7, stop=2, step=-1 • Goes from index 7 down to index 3 (stop 2 is excluded) • With negative step, start > stop or you get an empty result • The stop index is always excluded, even with negative step How it works: • list(range(10)) = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] • [7:2:-1] collects: index 7→7, 6→6, 5→5, 4→4, 3→3 • Stops before index 2 • Result: [7, 6, 5, 4, 3] Example: >>> list(range(10))[7:2:-1] [7, 6, 5, 4, 3] Common mistake: [2:7:-1] would return [] because you can't go backward from 2 to 7 with step -1.

Key Distinctions:
• This question’s focus is best captured by: With a negative step, the slice moves backwards.
• The contrast that matters for correctness is summarized by: The start index must be greater than the stop index, and the stop index is excluded.

How It Works:
• Python follows the rule implied by: With a negative step, the slice moves backwards.
• The outcome you observe follows from: Key concepts: • [7:2:-1] means start=7, stop=2, step=-1 • Goes from index 7 down to index 3 (stop 2 is excluded) • With negative step, start > stop or you get an empty result • The stop index is always excluded, even with negative step How it works: • list(range(10)) = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] • [7:2:-1] collects: index 7→7, 6→6, 5→5, 4→4, 3→3 • Stops before index 2 • Result: [7, 6, 5, 4, 3] Example: >>> list(range(10))[7:2:-1] [7, 6, 5, 4, 3] Common mistake: [2:7:-1] would return [] because you can't go backward from 2 to 7 with step -1.

Step-by-Step Execution:
1. Start from the construct described in: With a negative step, the slice moves backwards.
2. Resolve the subparts implied by: The start index must be greater than the stop index, and the stop index is excluded.
3. Apply the core semantics highlighted in: Key concepts: • [7:2:-1] means start=7, stop=2, step=-1 • Goes from index 7 down to index 3 (stop 2 is excluded) • With negative step, start > stop or you get an empty result • The stop index is always excluded, even with negative step How it works: • list(range(10)) = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] • [7:2:-1] collects: index 7→7, 6→6, 5→5, 4→4, 3→3 • Stops before index 2 • Result: [7, 6, 5, 4, 3] Example: >>> list(range(10))[7:2:-1] [7, 6, 5, 4, 3] Common mistake: [2:7:-1] would return [] because you can't go backward from 2 to 7 with step -1.
4. Confirm the final result aligns with: Key concepts: • [7:2:-1] means start=7, stop=2, step=-1 • Goes from index 7 down to index 3 (stop 2 is excluded) • With negative step, start > stop or you get an empty result • The stop index is always excluded, even with negative step How it works: • list(range(10)) = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] • [7:2:-1] collects: index 7→7, 6→6, 5→5, 4→4, 3→3 • Stops before index 2 • Result: [7, 6, 5, 4, 3] Example: >>> list(range(10))[7:2:-1] [7, 6, 5, 4, 3] Common mistake: [2:7:-1] would return [] because you can't go backward from 2 to 7 with step -1.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The start index must be greater than the stop index, and the stop index is excluded.
2. Apply the construct’s main rule next, matching: With a negative step, the slice moves backwards.
3. Produce any intermediate values that Key concepts: • [7:2:-1] means start=7, stop=2, step=-1 • Goes from index 7 down to index 3 (stop 2 is excluded) • With negative step, start > stop or you get an empty result • The stop index is always excluded, even with negative step How it works: • list(range(10)) = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] • [7:2:-1] collects: index 7→7, 6→6, 5→5, 4→4, 3→3 • Stops before index 2 • Result: [7, 6, 5, 4, 3] Example: >>> list(range(10))[7:2:-1] [7, 6, 5, 4, 3] Common mistake: [2:7:-1] would return [] because you can't go backward from 2 to 7 with step -1. relies on
4. Finish by returning/assembling the final output named by: Key concepts: • [7:2:-1] means start=7, stop=2, step=-1 • Goes from index 7 down to index 3 (stop 2 is excluded) • With negative step, start > stop or you get an empty result • The stop index is always excluded, even with negative step How it works: • list(range(10)) = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] • [7:2:-1] collects: index 7→7, 6→6, 5→5, 4→4, 3→3 • Stops before index 2 • Result: [7, 6, 5, 4, 3] Example: >>> list(range(10))[7:2:-1] [7, 6, 5, 4, 3] Common mistake: [2:7:-1] would return [] because you can't go backward from 2 to 7 with step -1.
5. Use the result only after the full construct has completed, per: With a negative step, the slice moves backwards.

Common Use Cases:
• Teaching this behavior using the mental model: With a negative step, the slice moves backwards.
• Debugging when the observed value should match the expectation in: Key concepts: • [7:2:-1] means start=7, stop=2, step=-1 • Goes from index 7 down to index 3 (stop 2 is excluded) • With negative step, start > stop or you get an empty result • The stop index is always excluded, even with negative step How it works: • list(range(10)) = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] • [7:2:-1] collects: index 7→7, 6→6, 5→5, 4→4, 3→3 • Stops before index 2 • Result: [7, 6, 5, 4, 3] Example: >>> list(range(10))[7:2:-1] [7, 6, 5, 4, 3] Common mistake: [2:7:-1] would return [] because you can't go backward from 2 to 7 with step -1.

Edge Cases:
• If inputs vary from the situation described in: The start index must be greater than the stop index, and the stop index is excluded., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • [7:2:-1] means start=7, stop=2, step=-1 • Goes from index 7 down to index 3 (stop 2 is excluded) • With negative step, start > stop or you get an empty result • The stop index is always excluded, even with negative step How it works: • list(range(10)) = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] • [7:2:-1] collects: index 7→7, 6→6, 5→5, 4→4, 3→3 • Stops before index 2 • Result: [7, 6, 5, 4, 3] Example: >>> list(range(10))[7:2:-1] [7, 6, 5, 4, 3] Common mistake: [2:7:-1] would return [] because you can't go backward from 2 to 7 with step -1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • [7:2:-1] means start=7, stop=2, step=-1 • Goes from index 7 down to index 3 (stop 2 is excluded) • With negative step, start > stop or you get an empty result • The stop index is always excluded, even with negative step How it works: • list(range(10)) = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] • [7:2:-1] collects: index 7→7, 6→6, 5→5, 4→4, 3→3 • Stops before index 2 • Result: [7, 6, 5, 4, 3] Example: >>> list(range(10))[7:2:-1] [7, 6, 5, 4, 3] Common mistake: [2:7:-1] would return [] because you can't go backward from 2 to 7 with step -1..
• When performance matters, prefer the simplest pattern that still implements: With a negative step, the slice moves backwards..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: With a negative step, the slice moves backwards..

Notes:
• For maintainable code, make the intent behind: The start index must be greater than the stop index, and the stop index is excluded. explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • Shallow copy copies the outer container only • Inner objects are shared between original and copy • Mutating a shared inner object affects both • This applies to [:], list(), .copy(), and copy.copy() How it works: • a = [[1, 2], [3, 4]] — two inner lists • b = a[:] — new outer list, but b[0] is a[0] (same object) • b[0].append(5) — mutates the shared inner list • a[0] is also [1, 2, 5] because it's the same object • a → [[1, 2, 5], [3, 4]] Example: >>> a = [[1, 2], [3, 4]] >>> b = a[:] >>> b[0] is a[0] True >>> b[0].append(5) >>> a [[1, 2, 5], [3, 4]] Use copy.deepcopy() to avoid this — it recursively copies all nested objects.

Key Distinctions:
• This question’s focus is best captured by: This is the classic shallow copy gotcha.
• The contrast that matters for correctness is summarized by: a[:] creates a new outer list, but the inner lists are not copied — they are shared references.

How It Works:
• Python follows the rule implied by: This is the classic shallow copy gotcha.
• The outcome you observe follows from: Key concepts: • Shallow copy copies the outer container only • Inner objects are shared between original and copy • Mutating a shared inner object affects both • This applies to [:], list(), .copy(), and copy.copy() How it works: • a = [[1, 2], [3, 4]] — two inner lists • b = a[:] — new outer list, but b[0] is a[0] (same object) • b[0].append(5) — mutates the shared inner list • a[0] is also [1, 2, 5] because it's the same object • a → [[1, 2, 5], [3, 4]] Example: >>> a = [[1, 2], [3, 4]] >>> b = a[:] >>> b[0] is a[0] True >>> b[0].append(5) >>> a [[1, 2, 5], [3, 4]] Use copy.deepcopy() to avoid this — it recursively copies all nested objects.

Step-by-Step Execution:
1. Start from the construct described in: This is the classic shallow copy gotcha.
2. Resolve the subparts implied by: a[:] creates a new outer list, but the inner lists are not copied — they are shared references.
3. Apply the core semantics highlighted in: Key concepts: • Shallow copy copies the outer container only • Inner objects are shared between original and copy • Mutating a shared inner object affects both • This applies to [:], list(), .copy(), and copy.copy() How it works: • a = [[1, 2], [3, 4]] — two inner lists • b = a[:] — new outer list, but b[0] is a[0] (same object) • b[0].append(5) — mutates the shared inner list • a[0] is also [1, 2, 5] because it's the same object • a → [[1, 2, 5], [3, 4]] Example: >>> a = [[1, 2], [3, 4]] >>> b = a[:] >>> b[0] is a[0] True >>> b[0].append(5) >>> a [[1, 2, 5], [3, 4]] Use copy.deepcopy() to avoid this — it recursively copies all nested objects.
4. Confirm the final result aligns with: Key concepts: • Shallow copy copies the outer container only • Inner objects are shared between original and copy • Mutating a shared inner object affects both • This applies to [:], list(), .copy(), and copy.copy() How it works: • a = [[1, 2], [3, 4]] — two inner lists • b = a[:] — new outer list, but b[0] is a[0] (same object) • b[0].append(5) — mutates the shared inner list • a[0] is also [1, 2, 5] because it's the same object • a → [[1, 2, 5], [3, 4]] Example: >>> a = [[1, 2], [3, 4]] >>> b = a[:] >>> b[0] is a[0] True >>> b[0].append(5) >>> a [[1, 2, 5], [3, 4]] Use copy.deepcopy() to avoid this — it recursively copies all nested objects.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: a[:] creates a new outer list, but the inner lists are not copied — they are shared references.
2. Apply the construct’s main rule next, matching: This is the classic shallow copy gotcha.
3. Produce any intermediate values that Key concepts: • Shallow copy copies the outer container only • Inner objects are shared between original and copy • Mutating a shared inner object affects both • This applies to [:], list(), .copy(), and copy.copy() How it works: • a = [[1, 2], [3, 4]] — two inner lists • b = a[:] — new outer list, but b[0] is a[0] (same object) • b[0].append(5) — mutates the shared inner list • a[0] is also [1, 2, 5] because it's the same object • a → [[1, 2, 5], [3, 4]] Example: >>> a = [[1, 2], [3, 4]] >>> b = a[:] >>> b[0] is a[0] True >>> b[0].append(5) >>> a [[1, 2, 5], [3, 4]] Use copy.deepcopy() to avoid this — it recursively copies all nested objects. relies on
4. Finish by returning/assembling the final output named by: Key concepts: • Shallow copy copies the outer container only • Inner objects are shared between original and copy • Mutating a shared inner object affects both • This applies to [:], list(), .copy(), and copy.copy() How it works: • a = [[1, 2], [3, 4]] — two inner lists • b = a[:] — new outer list, but b[0] is a[0] (same object) • b[0].append(5) — mutates the shared inner list • a[0] is also [1, 2, 5] because it's the same object • a → [[1, 2, 5], [3, 4]] Example: >>> a = [[1, 2], [3, 4]] >>> b = a[:] >>> b[0] is a[0] True >>> b[0].append(5) >>> a [[1, 2, 5], [3, 4]] Use copy.deepcopy() to avoid this — it recursively copies all nested objects.
5. Use the result only after the full construct has completed, per: This is the classic shallow copy gotcha.

Common Use Cases:
• Teaching this behavior using the mental model: This is the classic shallow copy gotcha.
• Debugging when the observed value should match the expectation in: Key concepts: • Shallow copy copies the outer container only • Inner objects are shared between original and copy • Mutating a shared inner object affects both • This applies to [:], list(), .copy(), and copy.copy() How it works: • a = [[1, 2], [3, 4]] — two inner lists • b = a[:] — new outer list, but b[0] is a[0] (same object) • b[0].append(5) — mutates the shared inner list • a[0] is also [1, 2, 5] because it's the same object • a → [[1, 2, 5], [3, 4]] Example: >>> a = [[1, 2], [3, 4]] >>> b = a[:] >>> b[0] is a[0] True >>> b[0].append(5) >>> a [[1, 2, 5], [3, 4]] Use copy.deepcopy() to avoid this — it recursively copies all nested objects.

Edge Cases:
• If inputs vary from the situation described in: a[:] creates a new outer list, but the inner lists are not copied — they are shared references., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • Shallow copy copies the outer container only • Inner objects are shared between original and copy • Mutating a shared inner object affects both • This applies to [:], list(), .copy(), and copy.copy() How it works: • a = [[1, 2], [3, 4]] — two inner lists • b = a[:] — new outer list, but b[0] is a[0] (same object) • b[0].append(5) — mutates the shared inner list • a[0] is also [1, 2, 5] because it's the same object • a → [[1, 2, 5], [3, 4]] Example: >>> a = [[1, 2], [3, 4]] >>> b = a[:] >>> b[0] is a[0] True >>> b[0].append(5) >>> a [[1, 2, 5], [3, 4]] Use copy.deepcopy() to avoid this — it recursively copies all nested objects. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • Shallow copy copies the outer container only • Inner objects are shared between original and copy • Mutating a shared inner object affects both • This applies to [:], list(), .copy(), and copy.copy() How it works: • a = [[1, 2], [3, 4]] — two inner lists • b = a[:] — new outer list, but b[0] is a[0] (same object) • b[0].append(5) — mutates the shared inner list • a[0] is also [1, 2, 5] because it's the same object • a → [[1, 2, 5], [3, 4]] Example: >>> a = [[1, 2], [3, 4]] >>> b = a[:] >>> b[0] is a[0] True >>> b[0].append(5) >>> a [[1, 2, 5], [3, 4]] Use copy.deepcopy() to avoid this — it recursively copies all nested objects..
• When performance matters, prefer the simplest pattern that still implements: This is the classic shallow copy gotcha..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This is the classic shallow copy gotcha..

Notes:
• For maintainable code, make the intent behind: a[:] creates a new outer list, but the inner lists are not copied — they are shared references. explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • list(a) = shallow copy (same as a[:] or a.copy()) • Only the top-level list is new • Inner lists are shared references • 'is' returns True because they are literally the same object How it works: • a = [[1, 2], [3, 4]] • b = list(a) — new outer list • b[0] points to the exact same [1, 2] object as a[0] • b[0] is a[0] → True Example: >>> a = [[1, 2], [3, 4]] >>> b = list(a) >>> b is a # outer list is different False >>> b[0] is a[0] # inner lists are shared True All shallow copy methods ([:], list(), .copy(), copy.copy()) behave identically.

Key Distinctions:
• This question’s focus is best captured by: list(a) creates a new list containing the same references as a.
• The contrast that matters for correctness is summarized by: It does NOT recursively copy inner objects.

How It Works:
• Python follows the rule implied by: list(a) creates a new list containing the same references as a.
• The outcome you observe follows from: Key concepts: • list(a) = shallow copy (same as a[:] or a.copy()) • Only the top-level list is new • Inner lists are shared references • 'is' returns True because they are literally the same object How it works: • a = [[1, 2], [3, 4]] • b = list(a) — new outer list • b[0] points to the exact same [1, 2] object as a[0] • b[0] is a[0] → True Example: >>> a = [[1, 2], [3, 4]] >>> b = list(a) >>> b is a # outer list is different False >>> b[0] is a[0] # inner lists are shared True All shallow copy methods ([:], list(), .copy(), copy.copy()) behave identically.

Step-by-Step Execution:
1. Start from the construct described in: list(a) creates a new list containing the same references as a.
2. Resolve the subparts implied by: It does NOT recursively copy inner objects.
3. Apply the core semantics highlighted in: Key concepts: • list(a) = shallow copy (same as a[:] or a.copy()) • Only the top-level list is new • Inner lists are shared references • 'is' returns True because they are literally the same object How it works: • a = [[1, 2], [3, 4]] • b = list(a) — new outer list • b[0] points to the exact same [1, 2] object as a[0] • b[0] is a[0] → True Example: >>> a = [[1, 2], [3, 4]] >>> b = list(a) >>> b is a # outer list is different False >>> b[0] is a[0] # inner lists are shared True All shallow copy methods ([:], list(), .copy(), copy.copy()) behave identically.
4. Confirm the final result aligns with: Key concepts: • list(a) = shallow copy (same as a[:] or a.copy()) • Only the top-level list is new • Inner lists are shared references • 'is' returns True because they are literally the same object How it works: • a = [[1, 2], [3, 4]] • b = list(a) — new outer list • b[0] points to the exact same [1, 2] object as a[0] • b[0] is a[0] → True Example: >>> a = [[1, 2], [3, 4]] >>> b = list(a) >>> b is a # outer list is different False >>> b[0] is a[0] # inner lists are shared True All shallow copy methods ([:], list(), .copy(), copy.copy()) behave identically.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: It does NOT recursively copy inner objects.
2. Apply the construct’s main rule next, matching: list(a) creates a new list containing the same references as a.
3. Produce any intermediate values that Key concepts: • list(a) = shallow copy (same as a[:] or a.copy()) • Only the top-level list is new • Inner lists are shared references • 'is' returns True because they are literally the same object How it works: • a = [[1, 2], [3, 4]] • b = list(a) — new outer list • b[0] points to the exact same [1, 2] object as a[0] • b[0] is a[0] → True Example: >>> a = [[1, 2], [3, 4]] >>> b = list(a) >>> b is a # outer list is different False >>> b[0] is a[0] # inner lists are shared True All shallow copy methods ([:], list(), .copy(), copy.copy()) behave identically. relies on
4. Finish by returning/assembling the final output named by: Key concepts: • list(a) = shallow copy (same as a[:] or a.copy()) • Only the top-level list is new • Inner lists are shared references • 'is' returns True because they are literally the same object How it works: • a = [[1, 2], [3, 4]] • b = list(a) — new outer list • b[0] points to the exact same [1, 2] object as a[0] • b[0] is a[0] → True Example: >>> a = [[1, 2], [3, 4]] >>> b = list(a) >>> b is a # outer list is different False >>> b[0] is a[0] # inner lists are shared True All shallow copy methods ([:], list(), .copy(), copy.copy()) behave identically.
5. Use the result only after the full construct has completed, per: list(a) creates a new list containing the same references as a.

Common Use Cases:
• Teaching this behavior using the mental model: list(a) creates a new list containing the same references as a.
• Debugging when the observed value should match the expectation in: Key concepts: • list(a) = shallow copy (same as a[:] or a.copy()) • Only the top-level list is new • Inner lists are shared references • 'is' returns True because they are literally the same object How it works: • a = [[1, 2], [3, 4]] • b = list(a) — new outer list • b[0] points to the exact same [1, 2] object as a[0] • b[0] is a[0] → True Example: >>> a = [[1, 2], [3, 4]] >>> b = list(a) >>> b is a # outer list is different False >>> b[0] is a[0] # inner lists are shared True All shallow copy methods ([:], list(), .copy(), copy.copy()) behave identically.

Edge Cases:
• If inputs vary from the situation described in: It does NOT recursively copy inner objects., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • list(a) = shallow copy (same as a[:] or a.copy()) • Only the top-level list is new • Inner lists are shared references • 'is' returns True because they are literally the same object How it works: • a = [[1, 2], [3, 4]] • b = list(a) — new outer list • b[0] points to the exact same [1, 2] object as a[0] • b[0] is a[0] → True Example: >>> a = [[1, 2], [3, 4]] >>> b = list(a) >>> b is a # outer list is different False >>> b[0] is a[0] # inner lists are shared True All shallow copy methods ([:], list(), .copy(), copy.copy()) behave identically. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • list(a) = shallow copy (same as a[:] or a.copy()) • Only the top-level list is new • Inner lists are shared references • 'is' returns True because they are literally the same object How it works: • a = [[1, 2], [3, 4]] • b = list(a) — new outer list • b[0] points to the exact same [1, 2] object as a[0] • b[0] is a[0] → True Example: >>> a = [[1, 2], [3, 4]] >>> b = list(a) >>> b is a # outer list is different False >>> b[0] is a[0] # inner lists are shared True All shallow copy methods ([:], list(), .copy(), copy.copy()) behave identically..
• When performance matters, prefer the simplest pattern that still implements: list(a) creates a new list containing the same references as a..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: list(a) creates a new list containing the same references as a..

Notes:
• For maintainable code, make the intent behind: It does NOT recursively copy inner objects. explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • copy.copy(a) = shallow copy (identical to a[:] for lists) • Inner list [1] is shared between a and b • Mutating b[0] also mutates a[0] • copy.deepcopy() would prevent this How it works: • a = [[1]] — list containing one inner list • b = copy.copy(a) — new outer list, shared inner list • b[0].append(2) — mutates the shared inner list [1] → [1, 2] • a[0] is the same object, so a becomes [[1, 2]] Example: >>> import copy >>> a = [[1]] >>> b = copy.copy(a) >>> b[0].append(2) >>> a [[1, 2]] This demonstrates why shallow copies can be dangerous with nested mutable objects.

Key Distinctions:
• This question’s focus is best captured by: copy.copy() performs a shallow copy — it creates a new outer container but does not copy nested objects.
• The contrast that matters for correctness is summarized by: Key concepts: • copy.copy(a) = shallow copy (identical to a[:] for lists) • Inner list [1] is shared between a and b • Mutating b[0] also mutates a[0] • copy.deepcopy() would prevent this How it works: • a = [[1]] — list containing one inner list • b = copy.copy(a) — new outer list, shared inner list • b[0].append(2) — mutates the shared inner list [1] → [1, 2] • a[0] is the same object, so a becomes [[1, 2]] Example: >>> import copy >>> a = [[1]] >>> b = copy.copy(a) >>> b[0].append(2) >>> a [[1, 2]] This demonstrates why shallow copies can be dangerous with nested mutable objects.

How It Works:
• Python follows the rule implied by: copy.copy() performs a shallow copy — it creates a new outer container but does not copy nested objects.
• The outcome you observe follows from: Key concepts: • copy.copy(a) = shallow copy (identical to a[:] for lists) • Inner list [1] is shared between a and b • Mutating b[0] also mutates a[0] • copy.deepcopy() would prevent this How it works: • a = [[1]] — list containing one inner list • b = copy.copy(a) — new outer list, shared inner list • b[0].append(2) — mutates the shared inner list [1] → [1, 2] • a[0] is the same object, so a becomes [[1, 2]] Example: >>> import copy >>> a = [[1]] >>> b = copy.copy(a) >>> b[0].append(2) >>> a [[1, 2]] This demonstrates why shallow copies can be dangerous with nested mutable objects.

Step-by-Step Execution:
1. Start from the construct described in: copy.copy() performs a shallow copy — it creates a new outer container but does not copy nested objects.
2. Resolve the subparts implied by: Key concepts: • copy.copy(a) = shallow copy (identical to a[:] for lists) • Inner list [1] is shared between a and b • Mutating b[0] also mutates a[0] • copy.deepcopy() would prevent this How it works: • a = [[1]] — list containing one inner list • b = copy.copy(a) — new outer list, shared inner list • b[0].append(2) — mutates the shared inner list [1] → [1, 2] • a[0] is the same object, so a becomes [[1, 2]] Example: >>> import copy >>> a = [[1]] >>> b = copy.copy(a) >>> b[0].append(2) >>> a [[1, 2]] This demonstrates why shallow copies can be dangerous with nested mutable objects.
3. Apply the core semantics highlighted in: Key concepts: • copy.copy(a) = shallow copy (identical to a[:] for lists) • Inner list [1] is shared between a and b • Mutating b[0] also mutates a[0] • copy.deepcopy() would prevent this How it works: • a = [[1]] — list containing one inner list • b = copy.copy(a) — new outer list, shared inner list • b[0].append(2) — mutates the shared inner list [1] → [1, 2] • a[0] is the same object, so a becomes [[1, 2]] Example: >>> import copy >>> a = [[1]] >>> b = copy.copy(a) >>> b[0].append(2) >>> a [[1, 2]] This demonstrates why shallow copies can be dangerous with nested mutable objects.
4. Confirm the final result aligns with: Key concepts: • copy.copy(a) = shallow copy (identical to a[:] for lists) • Inner list [1] is shared between a and b • Mutating b[0] also mutates a[0] • copy.deepcopy() would prevent this How it works: • a = [[1]] — list containing one inner list • b = copy.copy(a) — new outer list, shared inner list • b[0].append(2) — mutates the shared inner list [1] → [1, 2] • a[0] is the same object, so a becomes [[1, 2]] Example: >>> import copy >>> a = [[1]] >>> b = copy.copy(a) >>> b[0].append(2) >>> a [[1, 2]] This demonstrates why shallow copies can be dangerous with nested mutable objects.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • copy.copy(a) = shallow copy (identical to a[:] for lists) • Inner list [1] is shared between a and b • Mutating b[0] also mutates a[0] • copy.deepcopy() would prevent this How it works: • a = [[1]] — list containing one inner list • b = copy.copy(a) — new outer list, shared inner list • b[0].append(2) — mutates the shared inner list [1] → [1, 2] • a[0] is the same object, so a becomes [[1, 2]] Example: >>> import copy >>> a = [[1]] >>> b = copy.copy(a) >>> b[0].append(2) >>> a [[1, 2]] This demonstrates why shallow copies can be dangerous with nested mutable objects.
2. Apply the construct’s main rule next, matching: copy.copy() performs a shallow copy — it creates a new outer container but does not copy nested objects.
3. Produce any intermediate values that Key concepts: • copy.copy(a) = shallow copy (identical to a[:] for lists) • Inner list [1] is shared between a and b • Mutating b[0] also mutates a[0] • copy.deepcopy() would prevent this How it works: • a = [[1]] — list containing one inner list • b = copy.copy(a) — new outer list, shared inner list • b[0].append(2) — mutates the shared inner list [1] → [1, 2] • a[0] is the same object, so a becomes [[1, 2]] Example: >>> import copy >>> a = [[1]] >>> b = copy.copy(a) >>> b[0].append(2) >>> a [[1, 2]] This demonstrates why shallow copies can be dangerous with nested mutable objects. relies on
4. Finish by returning/assembling the final output named by: Key concepts: • copy.copy(a) = shallow copy (identical to a[:] for lists) • Inner list [1] is shared between a and b • Mutating b[0] also mutates a[0] • copy.deepcopy() would prevent this How it works: • a = [[1]] — list containing one inner list • b = copy.copy(a) — new outer list, shared inner list • b[0].append(2) — mutates the shared inner list [1] → [1, 2] • a[0] is the same object, so a becomes [[1, 2]] Example: >>> import copy >>> a = [[1]] >>> b = copy.copy(a) >>> b[0].append(2) >>> a [[1, 2]] This demonstrates why shallow copies can be dangerous with nested mutable objects.
5. Use the result only after the full construct has completed, per: copy.copy() performs a shallow copy — it creates a new outer container but does not copy nested objects.

Common Use Cases:
• Teaching this behavior using the mental model: copy.copy() performs a shallow copy — it creates a new outer container but does not copy nested objects.
• Debugging when the observed value should match the expectation in: Key concepts: • copy.copy(a) = shallow copy (identical to a[:] for lists) • Inner list [1] is shared between a and b • Mutating b[0] also mutates a[0] • copy.deepcopy() would prevent this How it works: • a = [[1]] — list containing one inner list • b = copy.copy(a) — new outer list, shared inner list • b[0].append(2) — mutates the shared inner list [1] → [1, 2] • a[0] is the same object, so a becomes [[1, 2]] Example: >>> import copy >>> a = [[1]] >>> b = copy.copy(a) >>> b[0].append(2) >>> a [[1, 2]] This demonstrates why shallow copies can be dangerous with nested mutable objects.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • copy.copy(a) = shallow copy (identical to a[:] for lists) • Inner list [1] is shared between a and b • Mutating b[0] also mutates a[0] • copy.deepcopy() would prevent this How it works: • a = [[1]] — list containing one inner list • b = copy.copy(a) — new outer list, shared inner list • b[0].append(2) — mutates the shared inner list [1] → [1, 2] • a[0] is the same object, so a becomes [[1, 2]] Example: >>> import copy >>> a = [[1]] >>> b = copy.copy(a) >>> b[0].append(2) >>> a [[1, 2]] This demonstrates why shallow copies can be dangerous with nested mutable objects., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • copy.copy(a) = shallow copy (identical to a[:] for lists) • Inner list [1] is shared between a and b • Mutating b[0] also mutates a[0] • copy.deepcopy() would prevent this How it works: • a = [[1]] — list containing one inner list • b = copy.copy(a) — new outer list, shared inner list • b[0].append(2) — mutates the shared inner list [1] → [1, 2] • a[0] is the same object, so a becomes [[1, 2]] Example: >>> import copy >>> a = [[1]] >>> b = copy.copy(a) >>> b[0].append(2) >>> a [[1, 2]] This demonstrates why shallow copies can be dangerous with nested mutable objects. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • copy.copy(a) = shallow copy (identical to a[:] for lists) • Inner list [1] is shared between a and b • Mutating b[0] also mutates a[0] • copy.deepcopy() would prevent this How it works: • a = [[1]] — list containing one inner list • b = copy.copy(a) — new outer list, shared inner list • b[0].append(2) — mutates the shared inner list [1] → [1, 2] • a[0] is the same object, so a becomes [[1, 2]] Example: >>> import copy >>> a = [[1]] >>> b = copy.copy(a) >>> b[0].append(2) >>> a [[1, 2]] This demonstrates why shallow copies can be dangerous with nested mutable objects..
• When performance matters, prefer the simplest pattern that still implements: copy.copy() performs a shallow copy — it creates a new outer container but does not copy nested objects..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: copy.copy() performs a shallow copy — it creates a new outer container but does not copy nested objects..

Notes:
• For maintainable code, make the intent behind: Key concepts: • copy.copy(a) = shallow copy (identical to a[:] for lists) • Inner list [1] is shared between a and b • Mutating b[0] also mutates a[0] • copy.deepcopy() would prevent this How it works: • a = [[1]] — list containing one inner list • b = copy.copy(a) — new outer list, shared inner list • b[0].append(2) — mutates the shared inner list [1] → [1, 2] • a[0] is the same object, so a becomes [[1, 2]] Example: >>> import copy >>> a = [[1]] >>> b = copy.copy(a) >>> b[0].append(2) >>> a [[1, 2]] This demonstrates why shallow copies can be dangerous with nested mutable objects. explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • deepcopy() copies the outer container AND all inner objects • No references are shared between original and deep copy • Mutating the deep copy never affects the original • Works for arbitrarily nested structures How it works: • a = [[1]] — list with inner list [1] • b = copy.deepcopy(a) — new outer list AND new inner list [1] • b[0].append(2) — mutates b's inner list to [1, 2] • a[0] is a different object — still [1] • a remains [[1]] Example: >>> import copy >>> a = [[1]] >>> b = copy.deepcopy(a) >>> b[0] is a[0] False >>> b[0].append(2) >>> a [[1]] deepcopy handles circular references and complex object graphs correctly.

Key Distinctions:
• This question’s focus is best captured by: copy.deepcopy() recursively copies all nested objects, creating a completely independent clone.
• The contrast that matters for correctness is summarized by: Key concepts: • deepcopy() copies the outer container AND all inner objects • No references are shared between original and deep copy • Mutating the deep copy never affects the original • Works for arbitrarily nested structures How it works: • a = [[1]] — list with inner list [1] • b = copy.deepcopy(a) — new outer list AND new inner list [1] • b[0].append(2) — mutates b's inner list to [1, 2] • a[0] is a different object — still [1] • a remains [[1]] Example: >>> import copy >>> a = [[1]] >>> b = copy.deepcopy(a) >>> b[0] is a[0] False >>> b[0].append(2) >>> a [[1]] deepcopy handles circular references and complex object graphs correctly.

How It Works:
• Python follows the rule implied by: copy.deepcopy() recursively copies all nested objects, creating a completely independent clone.
• The outcome you observe follows from: Key concepts: • deepcopy() copies the outer container AND all inner objects • No references are shared between original and deep copy • Mutating the deep copy never affects the original • Works for arbitrarily nested structures How it works: • a = [[1]] — list with inner list [1] • b = copy.deepcopy(a) — new outer list AND new inner list [1] • b[0].append(2) — mutates b's inner list to [1, 2] • a[0] is a different object — still [1] • a remains [[1]] Example: >>> import copy >>> a = [[1]] >>> b = copy.deepcopy(a) >>> b[0] is a[0] False >>> b[0].append(2) >>> a [[1]] deepcopy handles circular references and complex object graphs correctly.

Step-by-Step Execution:
1. Start from the construct described in: copy.deepcopy() recursively copies all nested objects, creating a completely independent clone.
2. Resolve the subparts implied by: Key concepts: • deepcopy() copies the outer container AND all inner objects • No references are shared between original and deep copy • Mutating the deep copy never affects the original • Works for arbitrarily nested structures How it works: • a = [[1]] — list with inner list [1] • b = copy.deepcopy(a) — new outer list AND new inner list [1] • b[0].append(2) — mutates b's inner list to [1, 2] • a[0] is a different object — still [1] • a remains [[1]] Example: >>> import copy >>> a = [[1]] >>> b = copy.deepcopy(a) >>> b[0] is a[0] False >>> b[0].append(2) >>> a [[1]] deepcopy handles circular references and complex object graphs correctly.
3. Apply the core semantics highlighted in: Key concepts: • deepcopy() copies the outer container AND all inner objects • No references are shared between original and deep copy • Mutating the deep copy never affects the original • Works for arbitrarily nested structures How it works: • a = [[1]] — list with inner list [1] • b = copy.deepcopy(a) — new outer list AND new inner list [1] • b[0].append(2) — mutates b's inner list to [1, 2] • a[0] is a different object — still [1] • a remains [[1]] Example: >>> import copy >>> a = [[1]] >>> b = copy.deepcopy(a) >>> b[0] is a[0] False >>> b[0].append(2) >>> a [[1]] deepcopy handles circular references and complex object graphs correctly.
4. Confirm the final result aligns with: Key concepts: • deepcopy() copies the outer container AND all inner objects • No references are shared between original and deep copy • Mutating the deep copy never affects the original • Works for arbitrarily nested structures How it works: • a = [[1]] — list with inner list [1] • b = copy.deepcopy(a) — new outer list AND new inner list [1] • b[0].append(2) — mutates b's inner list to [1, 2] • a[0] is a different object — still [1] • a remains [[1]] Example: >>> import copy >>> a = [[1]] >>> b = copy.deepcopy(a) >>> b[0] is a[0] False >>> b[0].append(2) >>> a [[1]] deepcopy handles circular references and complex object graphs correctly.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • deepcopy() copies the outer container AND all inner objects • No references are shared between original and deep copy • Mutating the deep copy never affects the original • Works for arbitrarily nested structures How it works: • a = [[1]] — list with inner list [1] • b = copy.deepcopy(a) — new outer list AND new inner list [1] • b[0].append(2) — mutates b's inner list to [1, 2] • a[0] is a different object — still [1] • a remains [[1]] Example: >>> import copy >>> a = [[1]] >>> b = copy.deepcopy(a) >>> b[0] is a[0] False >>> b[0].append(2) >>> a [[1]] deepcopy handles circular references and complex object graphs correctly.
2. Apply the construct’s main rule next, matching: copy.deepcopy() recursively copies all nested objects, creating a completely independent clone.
3. Produce any intermediate values that Key concepts: • deepcopy() copies the outer container AND all inner objects • No references are shared between original and deep copy • Mutating the deep copy never affects the original • Works for arbitrarily nested structures How it works: • a = [[1]] — list with inner list [1] • b = copy.deepcopy(a) — new outer list AND new inner list [1] • b[0].append(2) — mutates b's inner list to [1, 2] • a[0] is a different object — still [1] • a remains [[1]] Example: >>> import copy >>> a = [[1]] >>> b = copy.deepcopy(a) >>> b[0] is a[0] False >>> b[0].append(2) >>> a [[1]] deepcopy handles circular references and complex object graphs correctly. relies on
4. Finish by returning/assembling the final output named by: Key concepts: • deepcopy() copies the outer container AND all inner objects • No references are shared between original and deep copy • Mutating the deep copy never affects the original • Works for arbitrarily nested structures How it works: • a = [[1]] — list with inner list [1] • b = copy.deepcopy(a) — new outer list AND new inner list [1] • b[0].append(2) — mutates b's inner list to [1, 2] • a[0] is a different object — still [1] • a remains [[1]] Example: >>> import copy >>> a = [[1]] >>> b = copy.deepcopy(a) >>> b[0] is a[0] False >>> b[0].append(2) >>> a [[1]] deepcopy handles circular references and complex object graphs correctly.
5. Use the result only after the full construct has completed, per: copy.deepcopy() recursively copies all nested objects, creating a completely independent clone.

Common Use Cases:
• Teaching this behavior using the mental model: copy.deepcopy() recursively copies all nested objects, creating a completely independent clone.
• Debugging when the observed value should match the expectation in: Key concepts: • deepcopy() copies the outer container AND all inner objects • No references are shared between original and deep copy • Mutating the deep copy never affects the original • Works for arbitrarily nested structures How it works: • a = [[1]] — list with inner list [1] • b = copy.deepcopy(a) — new outer list AND new inner list [1] • b[0].append(2) — mutates b's inner list to [1, 2] • a[0] is a different object — still [1] • a remains [[1]] Example: >>> import copy >>> a = [[1]] >>> b = copy.deepcopy(a) >>> b[0] is a[0] False >>> b[0].append(2) >>> a [[1]] deepcopy handles circular references and complex object graphs correctly.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • deepcopy() copies the outer container AND all inner objects • No references are shared between original and deep copy • Mutating the deep copy never affects the original • Works for arbitrarily nested structures How it works: • a = [[1]] — list with inner list [1] • b = copy.deepcopy(a) — new outer list AND new inner list [1] • b[0].append(2) — mutates b's inner list to [1, 2] • a[0] is a different object — still [1] • a remains [[1]] Example: >>> import copy >>> a = [[1]] >>> b = copy.deepcopy(a) >>> b[0] is a[0] False >>> b[0].append(2) >>> a [[1]] deepcopy handles circular references and complex object graphs correctly., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • deepcopy() copies the outer container AND all inner objects • No references are shared between original and deep copy • Mutating the deep copy never affects the original • Works for arbitrarily nested structures How it works: • a = [[1]] — list with inner list [1] • b = copy.deepcopy(a) — new outer list AND new inner list [1] • b[0].append(2) — mutates b's inner list to [1, 2] • a[0] is a different object — still [1] • a remains [[1]] Example: >>> import copy >>> a = [[1]] >>> b = copy.deepcopy(a) >>> b[0] is a[0] False >>> b[0].append(2) >>> a [[1]] deepcopy handles circular references and complex object graphs correctly. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • deepcopy() copies the outer container AND all inner objects • No references are shared between original and deep copy • Mutating the deep copy never affects the original • Works for arbitrarily nested structures How it works: • a = [[1]] — list with inner list [1] • b = copy.deepcopy(a) — new outer list AND new inner list [1] • b[0].append(2) — mutates b's inner list to [1, 2] • a[0] is a different object — still [1] • a remains [[1]] Example: >>> import copy >>> a = [[1]] >>> b = copy.deepcopy(a) >>> b[0] is a[0] False >>> b[0].append(2) >>> a [[1]] deepcopy handles circular references and complex object graphs correctly..
• When performance matters, prefer the simplest pattern that still implements: copy.deepcopy() recursively copies all nested objects, creating a completely independent clone..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: copy.deepcopy() recursively copies all nested objects, creating a completely independent clone..

Notes:
• For maintainable code, make the intent behind: Key concepts: • deepcopy() copies the outer container AND all inner objects • No references are shared between original and deep copy • Mutating the deep copy never affects the original • Works for arbitrarily nested structures How it works: • a = [[1]] — list with inner list [1] • b = copy.deepcopy(a) — new outer list AND new inner list [1] • b[0].append(2) — mutates b's inner list to [1, 2] • a[0] is a different object — still [1] • a remains [[1]] Example: >>> import copy >>> a = [[1]] >>> b = copy.deepcopy(a) >>> b[0] is a[0] False >>> b[0].append(2) >>> a [[1]] deepcopy handles circular references and complex object graphs correctly. explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • For lists, a += [4] is equivalent to a.extend([4]) • It mutates the existing list object in place • b = a makes b an alias — same object • Both a and b see the mutation How it works: • a = [1, 2, 3] creates list object • b = a — b points to same object • a += [4] — calls list.__iadd__([4]), mutates in place • The object is now [1, 2, 3, 4] • b still points to this same object → [1, 2, 3, 4] Example: >>> a = [1, 2, 3] >>> b = a >>> a += [4] >>> b [1, 2, 3, 4] >>> a is b True This is a subtle difference from a = a + [4], which creates a new list.

Key Distinctions:
• This question’s focus is best captured by: For mutable types like lists, += calls __iadd__ which modifies the object in place.
• The contrast that matters for correctness is summarized by: Since b and a reference the same object, b reflects the change.

How It Works:
• Python follows the rule implied by: For mutable types like lists, += calls __iadd__ which modifies the object in place.
• The outcome you observe follows from: Key concepts: • For lists, a += [4] is equivalent to a.extend([4]) • It mutates the existing list object in place • b = a makes b an alias — same object • Both a and b see the mutation How it works: • a = [1, 2, 3] creates list object • b = a — b points to same object • a += [4] — calls list.__iadd__([4]), mutates in place • The object is now [1, 2, 3, 4] • b still points to this same object → [1, 2, 3, 4] Example: >>> a = [1, 2, 3] >>> b = a >>> a += [4] >>> b [1, 2, 3, 4] >>> a is b True This is a subtle difference from a = a + [4], which creates a new list.

Step-by-Step Execution:
1. Start from the construct described in: For mutable types like lists, += calls __iadd__ which modifies the object in place.
2. Resolve the subparts implied by: Since b and a reference the same object, b reflects the change.
3. Apply the core semantics highlighted in: Key concepts: • For lists, a += [4] is equivalent to a.extend([4]) • It mutates the existing list object in place • b = a makes b an alias — same object • Both a and b see the mutation How it works: • a = [1, 2, 3] creates list object • b = a — b points to same object • a += [4] — calls list.__iadd__([4]), mutates in place • The object is now [1, 2, 3, 4] • b still points to this same object → [1, 2, 3, 4] Example: >>> a = [1, 2, 3] >>> b = a >>> a += [4] >>> b [1, 2, 3, 4] >>> a is b True This is a subtle difference from a = a + [4], which creates a new list.
4. Confirm the final result aligns with: Key concepts: • For lists, a += [4] is equivalent to a.extend([4]) • It mutates the existing list object in place • b = a makes b an alias — same object • Both a and b see the mutation How it works: • a = [1, 2, 3] creates list object • b = a — b points to same object • a += [4] — calls list.__iadd__([4]), mutates in place • The object is now [1, 2, 3, 4] • b still points to this same object → [1, 2, 3, 4] Example: >>> a = [1, 2, 3] >>> b = a >>> a += [4] >>> b [1, 2, 3, 4] >>> a is b True This is a subtle difference from a = a + [4], which creates a new list.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Since b and a reference the same object, b reflects the change.
2. Apply the construct’s main rule next, matching: For mutable types like lists, += calls __iadd__ which modifies the object in place.
3. Produce any intermediate values that Key concepts: • For lists, a += [4] is equivalent to a.extend([4]) • It mutates the existing list object in place • b = a makes b an alias — same object • Both a and b see the mutation How it works: • a = [1, 2, 3] creates list object • b = a — b points to same object • a += [4] — calls list.__iadd__([4]), mutates in place • The object is now [1, 2, 3, 4] • b still points to this same object → [1, 2, 3, 4] Example: >>> a = [1, 2, 3] >>> b = a >>> a += [4] >>> b [1, 2, 3, 4] >>> a is b True This is a subtle difference from a = a + [4], which creates a new list. relies on
4. Finish by returning/assembling the final output named by: Key concepts: • For lists, a += [4] is equivalent to a.extend([4]) • It mutates the existing list object in place • b = a makes b an alias — same object • Both a and b see the mutation How it works: • a = [1, 2, 3] creates list object • b = a — b points to same object • a += [4] — calls list.__iadd__([4]), mutates in place • The object is now [1, 2, 3, 4] • b still points to this same object → [1, 2, 3, 4] Example: >>> a = [1, 2, 3] >>> b = a >>> a += [4] >>> b [1, 2, 3, 4] >>> a is b True This is a subtle difference from a = a + [4], which creates a new list.
5. Use the result only after the full construct has completed, per: For mutable types like lists, += calls __iadd__ which modifies the object in place.

Common Use Cases:
• Teaching this behavior using the mental model: For mutable types like lists, += calls __iadd__ which modifies the object in place.
• Debugging when the observed value should match the expectation in: Key concepts: • For lists, a += [4] is equivalent to a.extend([4]) • It mutates the existing list object in place • b = a makes b an alias — same object • Both a and b see the mutation How it works: • a = [1, 2, 3] creates list object • b = a — b points to same object • a += [4] — calls list.__iadd__([4]), mutates in place • The object is now [1, 2, 3, 4] • b still points to this same object → [1, 2, 3, 4] Example: >>> a = [1, 2, 3] >>> b = a >>> a += [4] >>> b [1, 2, 3, 4] >>> a is b True This is a subtle difference from a = a + [4], which creates a new list.

Edge Cases:
• If inputs vary from the situation described in: Since b and a reference the same object, b reflects the change., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • For lists, a += [4] is equivalent to a.extend([4]) • It mutates the existing list object in place • b = a makes b an alias — same object • Both a and b see the mutation How it works: • a = [1, 2, 3] creates list object • b = a — b points to same object • a += [4] — calls list.__iadd__([4]), mutates in place • The object is now [1, 2, 3, 4] • b still points to this same object → [1, 2, 3, 4] Example: >>> a = [1, 2, 3] >>> b = a >>> a += [4] >>> b [1, 2, 3, 4] >>> a is b True This is a subtle difference from a = a + [4], which creates a new list. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • For lists, a += [4] is equivalent to a.extend([4]) • It mutates the existing list object in place • b = a makes b an alias — same object • Both a and b see the mutation How it works: • a = [1, 2, 3] creates list object • b = a — b points to same object • a += [4] — calls list.__iadd__([4]), mutates in place • The object is now [1, 2, 3, 4] • b still points to this same object → [1, 2, 3, 4] Example: >>> a = [1, 2, 3] >>> b = a >>> a += [4] >>> b [1, 2, 3, 4] >>> a is b True This is a subtle difference from a = a + [4], which creates a new list..
• When performance matters, prefer the simplest pattern that still implements: For mutable types like lists, += calls __iadd__ which modifies the object in place..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: For mutable types like lists, += calls __iadd__ which modifies the object in place..

Notes:
• For maintainable code, make the intent behind: Since b and a reference the same object, b reflects the change. explicit (and test it with inputs like those in this prompt).`
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
• Lists mutate; tuples create new objects.

Key Distinctions:
• This question’s focus is best captured by: For immutable types like tuples, += cannot mutate in place.
• The contrast that matters for correctness is summarized by: Instead, it creates a new object and rebinds the variable.

How It Works:
• Python follows the rule implied by: For immutable types like tuples, += cannot mutate in place.
• The outcome you observe follows from: Lists mutate; tuples create new objects.

Step-by-Step Execution:
1. Start from the construct described in: For immutable types like tuples, += cannot mutate in place.
2. Resolve the subparts implied by: Instead, it creates a new object and rebinds the variable.
3. Apply the core semantics highlighted in: Key concepts: • Tuples don't have __iadd__, so += falls back to __add__ + rebinding • a += (4,) is equivalent to a = a + (4,) for tuples • a is rebound to a new tuple (1, 2, 3, 4) • b still references the original tuple (1, 2, 3) How it works: • a = (1, 2, 3) — a points to tuple object • b = a — b points to same tuple • a += (4,) — creates new tuple (1, 2, 3, 4), rebinds a • b still points to original (1, 2, 3) • a is b → False (different objects now) Example: >>> a = (1, 2, 3) >>> b = a >>> a += (4,) >>> b (1, 2, 3) >>> a (1, 2, 3, 4) This is the key mutable vs immutable += difference.
4. Confirm the final result aligns with: Lists mutate; tuples create new objects.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Instead, it creates a new object and rebinds the variable.
2. Apply the construct’s main rule next, matching: For immutable types like tuples, += cannot mutate in place.
3. Produce any intermediate values that Lists mutate; tuples create new objects. relies on
4. Finish by returning/assembling the final output named by: Lists mutate; tuples create new objects.
5. Use the result only after the full construct has completed, per: For immutable types like tuples, += cannot mutate in place.

Common Use Cases:
• Teaching this behavior using the mental model: For immutable types like tuples, += cannot mutate in place.
• Debugging when the observed value should match the expectation in: Lists mutate; tuples create new objects.

Edge Cases:
• If inputs vary from the situation described in: Instead, it creates a new object and rebinds the variable., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • Tuples don't have __iadd__, so += falls back to __add__ + rebinding • a += (4,) is equivalent to a = a + (4,) for tuples • a is rebound to a new tuple (1, 2, 3, 4) • b still references the original tuple (1, 2, 3) How it works: • a = (1, 2, 3) — a points to tuple object • b = a — b points to same tuple • a += (4,) — creates new tuple (1, 2, 3, 4), rebinds a • b still points to original (1, 2, 3) • a is b → False (different objects now) Example: >>> a = (1, 2, 3) >>> b = a >>> a += (4,) >>> b (1, 2, 3) >>> a (1, 2, 3, 4) This is the key mutable vs immutable += difference. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Lists mutate; tuples create new objects..
• When performance matters, prefer the simplest pattern that still implements: For immutable types like tuples, += cannot mutate in place..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: For immutable types like tuples, += cannot mutate in place..

Notes:
• For maintainable code, make the intent behind: Instead, it creates a new object and rebinds the variable. explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • a + [4] uses __add__, which always returns a new list • a is rebound to the new list • b still references the old list • This is the safe pattern when you don't want aliases to see changes How it works: • a = [1, 2, 3] — list object created • b = a — b is an alias • a = a + [4] — creates new list [1, 2, 3, 4], rebinds a • b still points to old object [1, 2, 3] Example: >>> a = [1, 2, 3] >>> b = a >>> a = a + [4] >>> b [1, 2, 3] >>> a is b False Compare: a += [4] would give b = [1, 2, 3, 4] because += mutates in place for lists.

Key Distinctions:
• This question’s focus is best captured by: a = a + [4] creates a brand new list and assigns it to a.
• The contrast that matters for correctness is summarized by: This is different from a += [4] which mutates in place.

How It Works:
• Python follows the rule implied by: a = a + [4] creates a brand new list and assigns it to a.
• The outcome you observe follows from: Key concepts: • a + [4] uses __add__, which always returns a new list • a is rebound to the new list • b still references the old list • This is the safe pattern when you don't want aliases to see changes How it works: • a = [1, 2, 3] — list object created • b = a — b is an alias • a = a + [4] — creates new list [1, 2, 3, 4], rebinds a • b still points to old object [1, 2, 3] Example: >>> a = [1, 2, 3] >>> b = a >>> a = a + [4] >>> b [1, 2, 3] >>> a is b False Compare: a += [4] would give b = [1, 2, 3, 4] because += mutates in place for lists.

Step-by-Step Execution:
1. Start from the construct described in: a = a + [4] creates a brand new list and assigns it to a.
2. Resolve the subparts implied by: This is different from a += [4] which mutates in place.
3. Apply the core semantics highlighted in: Key concepts: • a + [4] uses __add__, which always returns a new list • a is rebound to the new list • b still references the old list • This is the safe pattern when you don't want aliases to see changes How it works: • a = [1, 2, 3] — list object created • b = a — b is an alias • a = a + [4] — creates new list [1, 2, 3, 4], rebinds a • b still points to old object [1, 2, 3] Example: >>> a = [1, 2, 3] >>> b = a >>> a = a + [4] >>> b [1, 2, 3] >>> a is b False Compare: a += [4] would give b = [1, 2, 3, 4] because += mutates in place for lists.
4. Confirm the final result aligns with: Key concepts: • a + [4] uses __add__, which always returns a new list • a is rebound to the new list • b still references the old list • This is the safe pattern when you don't want aliases to see changes How it works: • a = [1, 2, 3] — list object created • b = a — b is an alias • a = a + [4] — creates new list [1, 2, 3, 4], rebinds a • b still points to old object [1, 2, 3] Example: >>> a = [1, 2, 3] >>> b = a >>> a = a + [4] >>> b [1, 2, 3] >>> a is b False Compare: a += [4] would give b = [1, 2, 3, 4] because += mutates in place for lists.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: This is different from a += [4] which mutates in place.
2. Apply the construct’s main rule next, matching: a = a + [4] creates a brand new list and assigns it to a.
3. Produce any intermediate values that Key concepts: • a + [4] uses __add__, which always returns a new list • a is rebound to the new list • b still references the old list • This is the safe pattern when you don't want aliases to see changes How it works: • a = [1, 2, 3] — list object created • b = a — b is an alias • a = a + [4] — creates new list [1, 2, 3, 4], rebinds a • b still points to old object [1, 2, 3] Example: >>> a = [1, 2, 3] >>> b = a >>> a = a + [4] >>> b [1, 2, 3] >>> a is b False Compare: a += [4] would give b = [1, 2, 3, 4] because += mutates in place for lists. relies on
4. Finish by returning/assembling the final output named by: Key concepts: • a + [4] uses __add__, which always returns a new list • a is rebound to the new list • b still references the old list • This is the safe pattern when you don't want aliases to see changes How it works: • a = [1, 2, 3] — list object created • b = a — b is an alias • a = a + [4] — creates new list [1, 2, 3, 4], rebinds a • b still points to old object [1, 2, 3] Example: >>> a = [1, 2, 3] >>> b = a >>> a = a + [4] >>> b [1, 2, 3] >>> a is b False Compare: a += [4] would give b = [1, 2, 3, 4] because += mutates in place for lists.
5. Use the result only after the full construct has completed, per: a = a + [4] creates a brand new list and assigns it to a.

Common Use Cases:
• Teaching this behavior using the mental model: a = a + [4] creates a brand new list and assigns it to a.
• Debugging when the observed value should match the expectation in: Key concepts: • a + [4] uses __add__, which always returns a new list • a is rebound to the new list • b still references the old list • This is the safe pattern when you don't want aliases to see changes How it works: • a = [1, 2, 3] — list object created • b = a — b is an alias • a = a + [4] — creates new list [1, 2, 3, 4], rebinds a • b still points to old object [1, 2, 3] Example: >>> a = [1, 2, 3] >>> b = a >>> a = a + [4] >>> b [1, 2, 3] >>> a is b False Compare: a += [4] would give b = [1, 2, 3, 4] because += mutates in place for lists.

Edge Cases:
• If inputs vary from the situation described in: This is different from a += [4] which mutates in place., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • a + [4] uses __add__, which always returns a new list • a is rebound to the new list • b still references the old list • This is the safe pattern when you don't want aliases to see changes How it works: • a = [1, 2, 3] — list object created • b = a — b is an alias • a = a + [4] — creates new list [1, 2, 3, 4], rebinds a • b still points to old object [1, 2, 3] Example: >>> a = [1, 2, 3] >>> b = a >>> a = a + [4] >>> b [1, 2, 3] >>> a is b False Compare: a += [4] would give b = [1, 2, 3, 4] because += mutates in place for lists. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • a + [4] uses __add__, which always returns a new list • a is rebound to the new list • b still references the old list • This is the safe pattern when you don't want aliases to see changes How it works: • a = [1, 2, 3] — list object created • b = a — b is an alias • a = a + [4] — creates new list [1, 2, 3, 4], rebinds a • b still points to old object [1, 2, 3] Example: >>> a = [1, 2, 3] >>> b = a >>> a = a + [4] >>> b [1, 2, 3] >>> a is b False Compare: a += [4] would give b = [1, 2, 3, 4] because += mutates in place for lists..
• When performance matters, prefer the simplest pattern that still implements: a = a + [4] creates a brand new list and assigns it to a..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: a = a + [4] creates a brand new list and assigns it to a..

Notes:
• For maintainable code, make the intent behind: This is different from a += [4] which mutates in place. explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • [[0]*3 for _ in range(3)] creates 3 independent [0,0,0] lists • Each iteration of the comprehension creates a new [0]*3 • Modifying a[0] does not affect a[1] or a[2] • This is the correct way to create a 2D matrix How it works: • Comprehension runs 3 times, each creating a new [0, 0, 0] • a = [[0,0,0], [0,0,0], [0,0,0]] — three different objects • a[0][0] = 1 — only modifies a[0] • Result: [[1,0,0], [0,0,0], [0,0,0]] Example: >>> a = [[0]*3 for _ in range(3)] >>> a[0] is a[1] False >>> a[0][0] = 1 >>> a [[1, 0, 0], [0, 0, 0], [0, 0, 0]] Compare with [[0]*3]*3 which shares all inner lists.

Key Distinctions:
• This question’s focus is best captured by: Using a list comprehension to create nested lists ensures each inner list is a separate object.
• The contrast that matters for correctness is summarized by: Key concepts: • [[0]*3 for _ in range(3)] creates 3 independent [0,0,0] lists • Each iteration of the comprehension creates a new [0]*3 • Modifying a[0] does not affect a[1] or a[2] • This is the correct way to create a 2D matrix How it works: • Comprehension runs 3 times, each creating a new [0, 0, 0] • a = [[0,0,0], [0,0,0], [0,0,0]] — three different objects • a[0][0] = 1 — only modifies a[0] • Result: [[1,0,0], [0,0,0], [0,0,0]] Example: >>> a = [[0]*3 for _ in range(3)] >>> a[0] is a[1] False >>> a[0][0] = 1 >>> a [[1, 0, 0], [0, 0, 0], [0, 0, 0]] Compare with [[0]*3]*3 which shares all inner lists.

How It Works:
• Python follows the rule implied by: Using a list comprehension to create nested lists ensures each inner list is a separate object.
• The outcome you observe follows from: Key concepts: • [[0]*3 for _ in range(3)] creates 3 independent [0,0,0] lists • Each iteration of the comprehension creates a new [0]*3 • Modifying a[0] does not affect a[1] or a[2] • This is the correct way to create a 2D matrix How it works: • Comprehension runs 3 times, each creating a new [0, 0, 0] • a = [[0,0,0], [0,0,0], [0,0,0]] — three different objects • a[0][0] = 1 — only modifies a[0] • Result: [[1,0,0], [0,0,0], [0,0,0]] Example: >>> a = [[0]*3 for _ in range(3)] >>> a[0] is a[1] False >>> a[0][0] = 1 >>> a [[1, 0, 0], [0, 0, 0], [0, 0, 0]] Compare with [[0]*3]*3 which shares all inner lists.

Step-by-Step Execution:
1. Start from the construct described in: Using a list comprehension to create nested lists ensures each inner list is a separate object.
2. Resolve the subparts implied by: Key concepts: • [[0]*3 for _ in range(3)] creates 3 independent [0,0,0] lists • Each iteration of the comprehension creates a new [0]*3 • Modifying a[0] does not affect a[1] or a[2] • This is the correct way to create a 2D matrix How it works: • Comprehension runs 3 times, each creating a new [0, 0, 0] • a = [[0,0,0], [0,0,0], [0,0,0]] — three different objects • a[0][0] = 1 — only modifies a[0] • Result: [[1,0,0], [0,0,0], [0,0,0]] Example: >>> a = [[0]*3 for _ in range(3)] >>> a[0] is a[1] False >>> a[0][0] = 1 >>> a [[1, 0, 0], [0, 0, 0], [0, 0, 0]] Compare with [[0]*3]*3 which shares all inner lists.
3. Apply the core semantics highlighted in: Key concepts: • [[0]*3 for _ in range(3)] creates 3 independent [0,0,0] lists • Each iteration of the comprehension creates a new [0]*3 • Modifying a[0] does not affect a[1] or a[2] • This is the correct way to create a 2D matrix How it works: • Comprehension runs 3 times, each creating a new [0, 0, 0] • a = [[0,0,0], [0,0,0], [0,0,0]] — three different objects • a[0][0] = 1 — only modifies a[0] • Result: [[1,0,0], [0,0,0], [0,0,0]] Example: >>> a = [[0]*3 for _ in range(3)] >>> a[0] is a[1] False >>> a[0][0] = 1 >>> a [[1, 0, 0], [0, 0, 0], [0, 0, 0]] Compare with [[0]*3]*3 which shares all inner lists.
4. Confirm the final result aligns with: Key concepts: • [[0]*3 for _ in range(3)] creates 3 independent [0,0,0] lists • Each iteration of the comprehension creates a new [0]*3 • Modifying a[0] does not affect a[1] or a[2] • This is the correct way to create a 2D matrix How it works: • Comprehension runs 3 times, each creating a new [0, 0, 0] • a = [[0,0,0], [0,0,0], [0,0,0]] — three different objects • a[0][0] = 1 — only modifies a[0] • Result: [[1,0,0], [0,0,0], [0,0,0]] Example: >>> a = [[0]*3 for _ in range(3)] >>> a[0] is a[1] False >>> a[0][0] = 1 >>> a [[1, 0, 0], [0, 0, 0], [0, 0, 0]] Compare with [[0]*3]*3 which shares all inner lists.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • [[0]*3 for _ in range(3)] creates 3 independent [0,0,0] lists • Each iteration of the comprehension creates a new [0]*3 • Modifying a[0] does not affect a[1] or a[2] • This is the correct way to create a 2D matrix How it works: • Comprehension runs 3 times, each creating a new [0, 0, 0] • a = [[0,0,0], [0,0,0], [0,0,0]] — three different objects • a[0][0] = 1 — only modifies a[0] • Result: [[1,0,0], [0,0,0], [0,0,0]] Example: >>> a = [[0]*3 for _ in range(3)] >>> a[0] is a[1] False >>> a[0][0] = 1 >>> a [[1, 0, 0], [0, 0, 0], [0, 0, 0]] Compare with [[0]*3]*3 which shares all inner lists.
2. Apply the construct’s main rule next, matching: Using a list comprehension to create nested lists ensures each inner list is a separate object.
3. Produce any intermediate values that Key concepts: • [[0]*3 for _ in range(3)] creates 3 independent [0,0,0] lists • Each iteration of the comprehension creates a new [0]*3 • Modifying a[0] does not affect a[1] or a[2] • This is the correct way to create a 2D matrix How it works: • Comprehension runs 3 times, each creating a new [0, 0, 0] • a = [[0,0,0], [0,0,0], [0,0,0]] — three different objects • a[0][0] = 1 — only modifies a[0] • Result: [[1,0,0], [0,0,0], [0,0,0]] Example: >>> a = [[0]*3 for _ in range(3)] >>> a[0] is a[1] False >>> a[0][0] = 1 >>> a [[1, 0, 0], [0, 0, 0], [0, 0, 0]] Compare with [[0]*3]*3 which shares all inner lists. relies on
4. Finish by returning/assembling the final output named by: Key concepts: • [[0]*3 for _ in range(3)] creates 3 independent [0,0,0] lists • Each iteration of the comprehension creates a new [0]*3 • Modifying a[0] does not affect a[1] or a[2] • This is the correct way to create a 2D matrix How it works: • Comprehension runs 3 times, each creating a new [0, 0, 0] • a = [[0,0,0], [0,0,0], [0,0,0]] — three different objects • a[0][0] = 1 — only modifies a[0] • Result: [[1,0,0], [0,0,0], [0,0,0]] Example: >>> a = [[0]*3 for _ in range(3)] >>> a[0] is a[1] False >>> a[0][0] = 1 >>> a [[1, 0, 0], [0, 0, 0], [0, 0, 0]] Compare with [[0]*3]*3 which shares all inner lists.
5. Use the result only after the full construct has completed, per: Using a list comprehension to create nested lists ensures each inner list is a separate object.

Common Use Cases:
• Teaching this behavior using the mental model: Using a list comprehension to create nested lists ensures each inner list is a separate object.
• Debugging when the observed value should match the expectation in: Key concepts: • [[0]*3 for _ in range(3)] creates 3 independent [0,0,0] lists • Each iteration of the comprehension creates a new [0]*3 • Modifying a[0] does not affect a[1] or a[2] • This is the correct way to create a 2D matrix How it works: • Comprehension runs 3 times, each creating a new [0, 0, 0] • a = [[0,0,0], [0,0,0], [0,0,0]] — three different objects • a[0][0] = 1 — only modifies a[0] • Result: [[1,0,0], [0,0,0], [0,0,0]] Example: >>> a = [[0]*3 for _ in range(3)] >>> a[0] is a[1] False >>> a[0][0] = 1 >>> a [[1, 0, 0], [0, 0, 0], [0, 0, 0]] Compare with [[0]*3]*3 which shares all inner lists.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • [[0]*3 for _ in range(3)] creates 3 independent [0,0,0] lists • Each iteration of the comprehension creates a new [0]*3 • Modifying a[0] does not affect a[1] or a[2] • This is the correct way to create a 2D matrix How it works: • Comprehension runs 3 times, each creating a new [0, 0, 0] • a = [[0,0,0], [0,0,0], [0,0,0]] — three different objects • a[0][0] = 1 — only modifies a[0] • Result: [[1,0,0], [0,0,0], [0,0,0]] Example: >>> a = [[0]*3 for _ in range(3)] >>> a[0] is a[1] False >>> a[0][0] = 1 >>> a [[1, 0, 0], [0, 0, 0], [0, 0, 0]] Compare with [[0]*3]*3 which shares all inner lists., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • [[0]*3 for _ in range(3)] creates 3 independent [0,0,0] lists • Each iteration of the comprehension creates a new [0]*3 • Modifying a[0] does not affect a[1] or a[2] • This is the correct way to create a 2D matrix How it works: • Comprehension runs 3 times, each creating a new [0, 0, 0] • a = [[0,0,0], [0,0,0], [0,0,0]] — three different objects • a[0][0] = 1 — only modifies a[0] • Result: [[1,0,0], [0,0,0], [0,0,0]] Example: >>> a = [[0]*3 for _ in range(3)] >>> a[0] is a[1] False >>> a[0][0] = 1 >>> a [[1, 0, 0], [0, 0, 0], [0, 0, 0]] Compare with [[0]*3]*3 which shares all inner lists. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • [[0]*3 for _ in range(3)] creates 3 independent [0,0,0] lists • Each iteration of the comprehension creates a new [0]*3 • Modifying a[0] does not affect a[1] or a[2] • This is the correct way to create a 2D matrix How it works: • Comprehension runs 3 times, each creating a new [0, 0, 0] • a = [[0,0,0], [0,0,0], [0,0,0]] — three different objects • a[0][0] = 1 — only modifies a[0] • Result: [[1,0,0], [0,0,0], [0,0,0]] Example: >>> a = [[0]*3 for _ in range(3)] >>> a[0] is a[1] False >>> a[0][0] = 1 >>> a [[1, 0, 0], [0, 0, 0], [0, 0, 0]] Compare with [[0]*3]*3 which shares all inner lists..
• When performance matters, prefer the simplest pattern that still implements: Using a list comprehension to create nested lists ensures each inner list is a separate object..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Using a list comprehension to create nested lists ensures each inner list is a separate object..

Notes:
• For maintainable code, make the intent behind: Key concepts: • [[0]*3 for _ in range(3)] creates 3 independent [0,0,0] lists • Each iteration of the comprehension creates a new [0]*3 • Modifying a[0] does not affect a[1] or a[2] • This is the correct way to create a 2D matrix How it works: • Comprehension runs 3 times, each creating a new [0, 0, 0] • a = [[0,0,0], [0,0,0], [0,0,0]] — three different objects • a[0][0] = 1 — only modifies a[0] • Result: [[1,0,0], [0,0,0], [0,0,0]] Example: >>> a = [[0]*3 for _ in range(3)] >>> a[0] is a[1] False >>> a[0][0] = 1 >>> a [[1, 0, 0], [0, 0, 0], [0, 0, 0]] Compare with [[0]*3]*3 which shares all inner lists. explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • [x]*3 creates [x, x, x] where all three are the SAME object • When x is a mutable list, all three entries share it • Modifying any one modifies all • This is one of Python's most notorious gotchas How it works: • [0]*3 creates [0, 0, 0] — one list object • [[0,0,0]]*3 creates [ref, ref, ref] — three references to that ONE list • a[0] is a[1] is a[2] → True • a[0][0] = 1 modifies the shared list → [1, 0, 0] • All three entries show [1, 0, 0] Example: >>> a = [[0]*3]*3 >>> a[0] is a[1] True >>> a[0][0] = 1 >>> a [[1, 0, 0], [1, 0, 0], [1, 0, 0]] Fix: use [[0]*3 for _ in range(3)] to create independent lists.

Key Distinctions:
• This question’s focus is best captured by: The * operator on a list containing a mutable object creates multiple references to that same object — not independent copies.
• The contrast that matters for correctness is summarized by: Key concepts: • [x]*3 creates [x, x, x] where all three are the SAME object • When x is a mutable list, all three entries share it • Modifying any one modifies all • This is one of Python's most notorious gotchas How it works: • [0]*3 creates [0, 0, 0] — one list object • [[0,0,0]]*3 creates [ref, ref, ref] — three references to that ONE list • a[0] is a[1] is a[2] → True • a[0][0] = 1 modifies the shared list → [1, 0, 0] • All three entries show [1, 0, 0] Example: >>> a = [[0]*3]*3 >>> a[0] is a[1] True >>> a[0][0] = 1 >>> a [[1, 0, 0], [1, 0, 0], [1, 0, 0]] Fix: use [[0]*3 for _ in range(3)] to create independent lists.

How It Works:
• Python follows the rule implied by: The * operator on a list containing a mutable object creates multiple references to that same object — not independent copies.
• The outcome you observe follows from: Key concepts: • [x]*3 creates [x, x, x] where all three are the SAME object • When x is a mutable list, all three entries share it • Modifying any one modifies all • This is one of Python's most notorious gotchas How it works: • [0]*3 creates [0, 0, 0] — one list object • [[0,0,0]]*3 creates [ref, ref, ref] — three references to that ONE list • a[0] is a[1] is a[2] → True • a[0][0] = 1 modifies the shared list → [1, 0, 0] • All three entries show [1, 0, 0] Example: >>> a = [[0]*3]*3 >>> a[0] is a[1] True >>> a[0][0] = 1 >>> a [[1, 0, 0], [1, 0, 0], [1, 0, 0]] Fix: use [[0]*3 for _ in range(3)] to create independent lists.

Step-by-Step Execution:
1. Start from the construct described in: The * operator on a list containing a mutable object creates multiple references to that same object — not independent copies.
2. Resolve the subparts implied by: Key concepts: • [x]*3 creates [x, x, x] where all three are the SAME object • When x is a mutable list, all three entries share it • Modifying any one modifies all • This is one of Python's most notorious gotchas How it works: • [0]*3 creates [0, 0, 0] — one list object • [[0,0,0]]*3 creates [ref, ref, ref] — three references to that ONE list • a[0] is a[1] is a[2] → True • a[0][0] = 1 modifies the shared list → [1, 0, 0] • All three entries show [1, 0, 0] Example: >>> a = [[0]*3]*3 >>> a[0] is a[1] True >>> a[0][0] = 1 >>> a [[1, 0, 0], [1, 0, 0], [1, 0, 0]] Fix: use [[0]*3 for _ in range(3)] to create independent lists.
3. Apply the core semantics highlighted in: Key concepts: • [x]*3 creates [x, x, x] where all three are the SAME object • When x is a mutable list, all three entries share it • Modifying any one modifies all • This is one of Python's most notorious gotchas How it works: • [0]*3 creates [0, 0, 0] — one list object • [[0,0,0]]*3 creates [ref, ref, ref] — three references to that ONE list • a[0] is a[1] is a[2] → True • a[0][0] = 1 modifies the shared list → [1, 0, 0] • All three entries show [1, 0, 0] Example: >>> a = [[0]*3]*3 >>> a[0] is a[1] True >>> a[0][0] = 1 >>> a [[1, 0, 0], [1, 0, 0], [1, 0, 0]] Fix: use [[0]*3 for _ in range(3)] to create independent lists.
4. Confirm the final result aligns with: Key concepts: • [x]*3 creates [x, x, x] where all three are the SAME object • When x is a mutable list, all three entries share it • Modifying any one modifies all • This is one of Python's most notorious gotchas How it works: • [0]*3 creates [0, 0, 0] — one list object • [[0,0,0]]*3 creates [ref, ref, ref] — three references to that ONE list • a[0] is a[1] is a[2] → True • a[0][0] = 1 modifies the shared list → [1, 0, 0] • All three entries show [1, 0, 0] Example: >>> a = [[0]*3]*3 >>> a[0] is a[1] True >>> a[0][0] = 1 >>> a [[1, 0, 0], [1, 0, 0], [1, 0, 0]] Fix: use [[0]*3 for _ in range(3)] to create independent lists.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • [x]*3 creates [x, x, x] where all three are the SAME object • When x is a mutable list, all three entries share it • Modifying any one modifies all • This is one of Python's most notorious gotchas How it works: • [0]*3 creates [0, 0, 0] — one list object • [[0,0,0]]*3 creates [ref, ref, ref] — three references to that ONE list • a[0] is a[1] is a[2] → True • a[0][0] = 1 modifies the shared list → [1, 0, 0] • All three entries show [1, 0, 0] Example: >>> a = [[0]*3]*3 >>> a[0] is a[1] True >>> a[0][0] = 1 >>> a [[1, 0, 0], [1, 0, 0], [1, 0, 0]] Fix: use [[0]*3 for _ in range(3)] to create independent lists.
2. Apply the construct’s main rule next, matching: The * operator on a list containing a mutable object creates multiple references to that same object — not independent copies.
3. Produce any intermediate values that Key concepts: • [x]*3 creates [x, x, x] where all three are the SAME object • When x is a mutable list, all three entries share it • Modifying any one modifies all • This is one of Python's most notorious gotchas How it works: • [0]*3 creates [0, 0, 0] — one list object • [[0,0,0]]*3 creates [ref, ref, ref] — three references to that ONE list • a[0] is a[1] is a[2] → True • a[0][0] = 1 modifies the shared list → [1, 0, 0] • All three entries show [1, 0, 0] Example: >>> a = [[0]*3]*3 >>> a[0] is a[1] True >>> a[0][0] = 1 >>> a [[1, 0, 0], [1, 0, 0], [1, 0, 0]] Fix: use [[0]*3 for _ in range(3)] to create independent lists. relies on
4. Finish by returning/assembling the final output named by: Key concepts: • [x]*3 creates [x, x, x] where all three are the SAME object • When x is a mutable list, all three entries share it • Modifying any one modifies all • This is one of Python's most notorious gotchas How it works: • [0]*3 creates [0, 0, 0] — one list object • [[0,0,0]]*3 creates [ref, ref, ref] — three references to that ONE list • a[0] is a[1] is a[2] → True • a[0][0] = 1 modifies the shared list → [1, 0, 0] • All three entries show [1, 0, 0] Example: >>> a = [[0]*3]*3 >>> a[0] is a[1] True >>> a[0][0] = 1 >>> a [[1, 0, 0], [1, 0, 0], [1, 0, 0]] Fix: use [[0]*3 for _ in range(3)] to create independent lists.
5. Use the result only after the full construct has completed, per: The * operator on a list containing a mutable object creates multiple references to that same object — not independent copies.

Common Use Cases:
• Teaching this behavior using the mental model: The * operator on a list containing a mutable object creates multiple references to that same object — not independent copies.
• Debugging when the observed value should match the expectation in: Key concepts: • [x]*3 creates [x, x, x] where all three are the SAME object • When x is a mutable list, all three entries share it • Modifying any one modifies all • This is one of Python's most notorious gotchas How it works: • [0]*3 creates [0, 0, 0] — one list object • [[0,0,0]]*3 creates [ref, ref, ref] — three references to that ONE list • a[0] is a[1] is a[2] → True • a[0][0] = 1 modifies the shared list → [1, 0, 0] • All three entries show [1, 0, 0] Example: >>> a = [[0]*3]*3 >>> a[0] is a[1] True >>> a[0][0] = 1 >>> a [[1, 0, 0], [1, 0, 0], [1, 0, 0]] Fix: use [[0]*3 for _ in range(3)] to create independent lists.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • [x]*3 creates [x, x, x] where all three are the SAME object • When x is a mutable list, all three entries share it • Modifying any one modifies all • This is one of Python's most notorious gotchas How it works: • [0]*3 creates [0, 0, 0] — one list object • [[0,0,0]]*3 creates [ref, ref, ref] — three references to that ONE list • a[0] is a[1] is a[2] → True • a[0][0] = 1 modifies the shared list → [1, 0, 0] • All three entries show [1, 0, 0] Example: >>> a = [[0]*3]*3 >>> a[0] is a[1] True >>> a[0][0] = 1 >>> a [[1, 0, 0], [1, 0, 0], [1, 0, 0]] Fix: use [[0]*3 for _ in range(3)] to create independent lists., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • [x]*3 creates [x, x, x] where all three are the SAME object • When x is a mutable list, all three entries share it • Modifying any one modifies all • This is one of Python's most notorious gotchas How it works: • [0]*3 creates [0, 0, 0] — one list object • [[0,0,0]]*3 creates [ref, ref, ref] — three references to that ONE list • a[0] is a[1] is a[2] → True • a[0][0] = 1 modifies the shared list → [1, 0, 0] • All three entries show [1, 0, 0] Example: >>> a = [[0]*3]*3 >>> a[0] is a[1] True >>> a[0][0] = 1 >>> a [[1, 0, 0], [1, 0, 0], [1, 0, 0]] Fix: use [[0]*3 for _ in range(3)] to create independent lists. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • [x]*3 creates [x, x, x] where all three are the SAME object • When x is a mutable list, all three entries share it • Modifying any one modifies all • This is one of Python's most notorious gotchas How it works: • [0]*3 creates [0, 0, 0] — one list object • [[0,0,0]]*3 creates [ref, ref, ref] — three references to that ONE list • a[0] is a[1] is a[2] → True • a[0][0] = 1 modifies the shared list → [1, 0, 0] • All three entries show [1, 0, 0] Example: >>> a = [[0]*3]*3 >>> a[0] is a[1] True >>> a[0][0] = 1 >>> a [[1, 0, 0], [1, 0, 0], [1, 0, 0]] Fix: use [[0]*3 for _ in range(3)] to create independent lists..
• When performance matters, prefer the simplest pattern that still implements: The * operator on a list containing a mutable object creates multiple references to that same object — not independent copies..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The * operator on a list containing a mutable object creates multiple references to that same object — not independent copies..

Notes:
• For maintainable code, make the intent behind: Key concepts: • [x]*3 creates [x, x, x] where all three are the SAME object • When x is a mutable list, all three entries share it • Modifying any one modifies all • This is one of Python's most notorious gotchas How it works: • [0]*3 creates [0, 0, 0] — one list object • [[0,0,0]]*3 creates [ref, ref, ref] — three references to that ONE list • a[0] is a[1] is a[2] → True • a[0][0] = 1 modifies the shared list → [1, 0, 0] • All three entries show [1, 0, 0] Example: >>> a = [[0]*3]*3 >>> a[0] is a[1] True >>> a[0][0] = 1 >>> a [[1, 0, 0], [1, 0, 0], [1, 0, 0]] Fix: use [[0]*3 for _ in range(3)] to create independent lists. explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • [[]] is a list containing one empty list • [[]]*3 repeats that reference three times • All three entries point to the same inner list object • Appending to any one entry appends to all How it works: • [[]] creates [ref_to_empty_list] • *3 creates [ref, ref, ref] — same empty list object • a[0].append(1) → the shared list becomes [1] • a → [[1], [1], [1]] Example: >>> a = [[]]*3 >>> a[0] is a[1] is a[2] True >>> a[0].append(1) >>> a [[1], [1], [1]] Fix: [[] for _ in range(3)] creates three independent empty lists.

Key Distinctions:
• This question’s focus is best captured by: This is the same gotcha as [[0]*3]*3 but with empty lists.
• The contrast that matters for correctness is summarized by: [[]]*3 creates three references to one shared empty list.

How It Works:
• Python follows the rule implied by: This is the same gotcha as [[0]*3]*3 but with empty lists.
• The outcome you observe follows from: Key concepts: • [[]] is a list containing one empty list • [[]]*3 repeats that reference three times • All three entries point to the same inner list object • Appending to any one entry appends to all How it works: • [[]] creates [ref_to_empty_list] • *3 creates [ref, ref, ref] — same empty list object • a[0].append(1) → the shared list becomes [1] • a → [[1], [1], [1]] Example: >>> a = [[]]*3 >>> a[0] is a[1] is a[2] True >>> a[0].append(1) >>> a [[1], [1], [1]] Fix: [[] for _ in range(3)] creates three independent empty lists.

Step-by-Step Execution:
1. Start from the construct described in: This is the same gotcha as [[0]*3]*3 but with empty lists.
2. Resolve the subparts implied by: [[]]*3 creates three references to one shared empty list.
3. Apply the core semantics highlighted in: Key concepts: • [[]] is a list containing one empty list • [[]]*3 repeats that reference three times • All three entries point to the same inner list object • Appending to any one entry appends to all How it works: • [[]] creates [ref_to_empty_list] • *3 creates [ref, ref, ref] — same empty list object • a[0].append(1) → the shared list becomes [1] • a → [[1], [1], [1]] Example: >>> a = [[]]*3 >>> a[0] is a[1] is a[2] True >>> a[0].append(1) >>> a [[1], [1], [1]] Fix: [[] for _ in range(3)] creates three independent empty lists.
4. Confirm the final result aligns with: Key concepts: • [[]] is a list containing one empty list • [[]]*3 repeats that reference three times • All three entries point to the same inner list object • Appending to any one entry appends to all How it works: • [[]] creates [ref_to_empty_list] • *3 creates [ref, ref, ref] — same empty list object • a[0].append(1) → the shared list becomes [1] • a → [[1], [1], [1]] Example: >>> a = [[]]*3 >>> a[0] is a[1] is a[2] True >>> a[0].append(1) >>> a [[1], [1], [1]] Fix: [[] for _ in range(3)] creates three independent empty lists.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: [[]]*3 creates three references to one shared empty list.
2. Apply the construct’s main rule next, matching: This is the same gotcha as [[0]*3]*3 but with empty lists.
3. Produce any intermediate values that Key concepts: • [[]] is a list containing one empty list • [[]]*3 repeats that reference three times • All three entries point to the same inner list object • Appending to any one entry appends to all How it works: • [[]] creates [ref_to_empty_list] • *3 creates [ref, ref, ref] — same empty list object • a[0].append(1) → the shared list becomes [1] • a → [[1], [1], [1]] Example: >>> a = [[]]*3 >>> a[0] is a[1] is a[2] True >>> a[0].append(1) >>> a [[1], [1], [1]] Fix: [[] for _ in range(3)] creates three independent empty lists. relies on
4. Finish by returning/assembling the final output named by: Key concepts: • [[]] is a list containing one empty list • [[]]*3 repeats that reference three times • All three entries point to the same inner list object • Appending to any one entry appends to all How it works: • [[]] creates [ref_to_empty_list] • *3 creates [ref, ref, ref] — same empty list object • a[0].append(1) → the shared list becomes [1] • a → [[1], [1], [1]] Example: >>> a = [[]]*3 >>> a[0] is a[1] is a[2] True >>> a[0].append(1) >>> a [[1], [1], [1]] Fix: [[] for _ in range(3)] creates three independent empty lists.
5. Use the result only after the full construct has completed, per: This is the same gotcha as [[0]*3]*3 but with empty lists.

Common Use Cases:
• Teaching this behavior using the mental model: This is the same gotcha as [[0]*3]*3 but with empty lists.
• Debugging when the observed value should match the expectation in: Key concepts: • [[]] is a list containing one empty list • [[]]*3 repeats that reference three times • All three entries point to the same inner list object • Appending to any one entry appends to all How it works: • [[]] creates [ref_to_empty_list] • *3 creates [ref, ref, ref] — same empty list object • a[0].append(1) → the shared list becomes [1] • a → [[1], [1], [1]] Example: >>> a = [[]]*3 >>> a[0] is a[1] is a[2] True >>> a[0].append(1) >>> a [[1], [1], [1]] Fix: [[] for _ in range(3)] creates three independent empty lists.

Edge Cases:
• If inputs vary from the situation described in: [[]]*3 creates three references to one shared empty list., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • [[]] is a list containing one empty list • [[]]*3 repeats that reference three times • All three entries point to the same inner list object • Appending to any one entry appends to all How it works: • [[]] creates [ref_to_empty_list] • *3 creates [ref, ref, ref] — same empty list object • a[0].append(1) → the shared list becomes [1] • a → [[1], [1], [1]] Example: >>> a = [[]]*3 >>> a[0] is a[1] is a[2] True >>> a[0].append(1) >>> a [[1], [1], [1]] Fix: [[] for _ in range(3)] creates three independent empty lists. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • [[]] is a list containing one empty list • [[]]*3 repeats that reference three times • All three entries point to the same inner list object • Appending to any one entry appends to all How it works: • [[]] creates [ref_to_empty_list] • *3 creates [ref, ref, ref] — same empty list object • a[0].append(1) → the shared list becomes [1] • a → [[1], [1], [1]] Example: >>> a = [[]]*3 >>> a[0] is a[1] is a[2] True >>> a[0].append(1) >>> a [[1], [1], [1]] Fix: [[] for _ in range(3)] creates three independent empty lists..
• When performance matters, prefer the simplest pattern that still implements: This is the same gotcha as [[0]*3]*3 but with empty lists..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This is the same gotcha as [[0]*3]*3 but with empty lists..

Notes:
• For maintainable code, make the intent behind: [[]]*3 creates three references to one shared empty list. explicit (and test it with inputs like those in this prompt).`
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
• Immutable objects are safe.

Key Distinctions:
• This question’s focus is best captured by: When * repeats immutable objects (strings, ints, tuples), the sharing is harmless because you can't mutate them.
• The contrast that matters for correctness is summarized by: Reassigning an index doesn't affect the others.

How It Works:
• Python follows the rule implied by: When * repeats immutable objects (strings, ints, tuples), the sharing is harmless because you can't mutate them.
• The outcome you observe follows from: Immutable objects are safe.

Step-by-Step Execution:
1. Start from the construct described in: When * repeats immutable objects (strings, ints, tuples), the sharing is harmless because you can't mutate them.
2. Resolve the subparts implied by: Reassigning an index doesn't affect the others.
3. Apply the core semantics highlighted in: Key concepts: • ["x"]*3 creates ["x", "x", "x"] — three refs to same "x" • But strings are immutable — you can't modify "x" in place • a[0] = "y" rebinds index 0 to a new string object • The other indices still reference "x" How it works: • a = ["x", "x", "x"] — all point to the same "x" object • a[0] = "y" — only index 0 now points to "y" • a[1] and a[2] still point to "x" • Result: ["y", "x", "x"] Example: >>> a = ["x"]*3 >>> a[0] = "y" >>> a ['y', 'x', 'x'] The * gotcha only matters for mutable inner objects (lists, dicts, sets).
4. Confirm the final result aligns with: Immutable objects are safe.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Reassigning an index doesn't affect the others.
2. Apply the construct’s main rule next, matching: When * repeats immutable objects (strings, ints, tuples), the sharing is harmless because you can't mutate them.
3. Produce any intermediate values that Immutable objects are safe. relies on
4. Finish by returning/assembling the final output named by: Immutable objects are safe.
5. Use the result only after the full construct has completed, per: When * repeats immutable objects (strings, ints, tuples), the sharing is harmless because you can't mutate them.

Common Use Cases:
• Teaching this behavior using the mental model: When * repeats immutable objects (strings, ints, tuples), the sharing is harmless because you can't mutate them.
• Debugging when the observed value should match the expectation in: Immutable objects are safe.

Edge Cases:
• If inputs vary from the situation described in: Reassigning an index doesn't affect the others., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • ["x"]*3 creates ["x", "x", "x"] — three refs to same "x" • But strings are immutable — you can't modify "x" in place • a[0] = "y" rebinds index 0 to a new string object • The other indices still reference "x" How it works: • a = ["x", "x", "x"] — all point to the same "x" object • a[0] = "y" — only index 0 now points to "y" • a[1] and a[2] still point to "x" • Result: ["y", "x", "x"] Example: >>> a = ["x"]*3 >>> a[0] = "y" >>> a ['y', 'x', 'x'] The * gotcha only matters for mutable inner objects (lists, dicts, sets). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Immutable objects are safe..
• When performance matters, prefer the simplest pattern that still implements: When * repeats immutable objects (strings, ints, tuples), the sharing is harmless because you can't mutate them..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: When * repeats immutable objects (strings, ints, tuples), the sharing is harmless because you can't mutate them..

Notes:
• For maintainable code, make the intent behind: Reassigning an index doesn't affect the others. explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • a.copy() creates a new list with the same elements • For flat lists of immutables, shallow = fully independent • Changes to a (append, remove, etc.) don't affect b • The inner elements are immutable so sharing them is safe How it works: • a = [1, 2, 3] • b = a.copy() — new list [1, 2, 3] • a.append(4) — only modifies a • b is unaffected → [1, 2, 3] Example: >>> a = [1, 2, 3] >>> b = a.copy() >>> a.append(4) >>> b [1, 2, 3] Shallow copy is only "dangerous" when the list contains mutable objects (other lists, dicts, etc.).

Key Distinctions:
• This question’s focus is best captured by: For lists containing only immutable elements (ints, strings, etc.), a shallow copy via .copy() is effectively independent.
• The contrast that matters for correctness is summarized by: Key concepts: • a.copy() creates a new list with the same elements • For flat lists of immutables, shallow = fully independent • Changes to a (append, remove, etc.) don't affect b • The inner elements are immutable so sharing them is safe How it works: • a = [1, 2, 3] • b = a.copy() — new list [1, 2, 3] • a.append(4) — only modifies a • b is unaffected → [1, 2, 3] Example: >>> a = [1, 2, 3] >>> b = a.copy() >>> a.append(4) >>> b [1, 2, 3] Shallow copy is only "dangerous" when the list contains mutable objects (other lists, dicts, etc.).

How It Works:
• Python follows the rule implied by: For lists containing only immutable elements (ints, strings, etc.), a shallow copy via .copy() is effectively independent.
• The outcome you observe follows from: Key concepts: • a.copy() creates a new list with the same elements • For flat lists of immutables, shallow = fully independent • Changes to a (append, remove, etc.) don't affect b • The inner elements are immutable so sharing them is safe How it works: • a = [1, 2, 3] • b = a.copy() — new list [1, 2, 3] • a.append(4) — only modifies a • b is unaffected → [1, 2, 3] Example: >>> a = [1, 2, 3] >>> b = a.copy() >>> a.append(4) >>> b [1, 2, 3] Shallow copy is only "dangerous" when the list contains mutable objects (other lists, dicts, etc.).

Step-by-Step Execution:
1. Start from the construct described in: For lists containing only immutable elements (ints, strings, etc.), a shallow copy via .copy() is effectively independent.
2. Resolve the subparts implied by: Key concepts: • a.copy() creates a new list with the same elements • For flat lists of immutables, shallow = fully independent • Changes to a (append, remove, etc.) don't affect b • The inner elements are immutable so sharing them is safe How it works: • a = [1, 2, 3] • b = a.copy() — new list [1, 2, 3] • a.append(4) — only modifies a • b is unaffected → [1, 2, 3] Example: >>> a = [1, 2, 3] >>> b = a.copy() >>> a.append(4) >>> b [1, 2, 3] Shallow copy is only "dangerous" when the list contains mutable objects (other lists, dicts, etc.).
3. Apply the core semantics highlighted in: Key concepts: • a.copy() creates a new list with the same elements • For flat lists of immutables, shallow = fully independent • Changes to a (append, remove, etc.) don't affect b • The inner elements are immutable so sharing them is safe How it works: • a = [1, 2, 3] • b = a.copy() — new list [1, 2, 3] • a.append(4) — only modifies a • b is unaffected → [1, 2, 3] Example: >>> a = [1, 2, 3] >>> b = a.copy() >>> a.append(4) >>> b [1, 2, 3] Shallow copy is only "dangerous" when the list contains mutable objects (other lists, dicts, etc.).
4. Confirm the final result aligns with: Key concepts: • a.copy() creates a new list with the same elements • For flat lists of immutables, shallow = fully independent • Changes to a (append, remove, etc.) don't affect b • The inner elements are immutable so sharing them is safe How it works: • a = [1, 2, 3] • b = a.copy() — new list [1, 2, 3] • a.append(4) — only modifies a • b is unaffected → [1, 2, 3] Example: >>> a = [1, 2, 3] >>> b = a.copy() >>> a.append(4) >>> b [1, 2, 3] Shallow copy is only "dangerous" when the list contains mutable objects (other lists, dicts, etc.).

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • a.copy() creates a new list with the same elements • For flat lists of immutables, shallow = fully independent • Changes to a (append, remove, etc.) don't affect b • The inner elements are immutable so sharing them is safe How it works: • a = [1, 2, 3] • b = a.copy() — new list [1, 2, 3] • a.append(4) — only modifies a • b is unaffected → [1, 2, 3] Example: >>> a = [1, 2, 3] >>> b = a.copy() >>> a.append(4) >>> b [1, 2, 3] Shallow copy is only "dangerous" when the list contains mutable objects (other lists, dicts, etc.).
2. Apply the construct’s main rule next, matching: For lists containing only immutable elements (ints, strings, etc.), a shallow copy via .copy() is effectively independent.
3. Produce any intermediate values that Key concepts: • a.copy() creates a new list with the same elements • For flat lists of immutables, shallow = fully independent • Changes to a (append, remove, etc.) don't affect b • The inner elements are immutable so sharing them is safe How it works: • a = [1, 2, 3] • b = a.copy() — new list [1, 2, 3] • a.append(4) — only modifies a • b is unaffected → [1, 2, 3] Example: >>> a = [1, 2, 3] >>> b = a.copy() >>> a.append(4) >>> b [1, 2, 3] Shallow copy is only "dangerous" when the list contains mutable objects (other lists, dicts, etc.). relies on
4. Finish by returning/assembling the final output named by: Key concepts: • a.copy() creates a new list with the same elements • For flat lists of immutables, shallow = fully independent • Changes to a (append, remove, etc.) don't affect b • The inner elements are immutable so sharing them is safe How it works: • a = [1, 2, 3] • b = a.copy() — new list [1, 2, 3] • a.append(4) — only modifies a • b is unaffected → [1, 2, 3] Example: >>> a = [1, 2, 3] >>> b = a.copy() >>> a.append(4) >>> b [1, 2, 3] Shallow copy is only "dangerous" when the list contains mutable objects (other lists, dicts, etc.).
5. Use the result only after the full construct has completed, per: For lists containing only immutable elements (ints, strings, etc.), a shallow copy via .copy() is effectively independent.

Common Use Cases:
• Teaching this behavior using the mental model: For lists containing only immutable elements (ints, strings, etc.), a shallow copy via .copy() is effectively independent.
• Debugging when the observed value should match the expectation in: Key concepts: • a.copy() creates a new list with the same elements • For flat lists of immutables, shallow = fully independent • Changes to a (append, remove, etc.) don't affect b • The inner elements are immutable so sharing them is safe How it works: • a = [1, 2, 3] • b = a.copy() — new list [1, 2, 3] • a.append(4) — only modifies a • b is unaffected → [1, 2, 3] Example: >>> a = [1, 2, 3] >>> b = a.copy() >>> a.append(4) >>> b [1, 2, 3] Shallow copy is only "dangerous" when the list contains mutable objects (other lists, dicts, etc.).

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • a.copy() creates a new list with the same elements • For flat lists of immutables, shallow = fully independent • Changes to a (append, remove, etc.) don't affect b • The inner elements are immutable so sharing them is safe How it works: • a = [1, 2, 3] • b = a.copy() — new list [1, 2, 3] • a.append(4) — only modifies a • b is unaffected → [1, 2, 3] Example: >>> a = [1, 2, 3] >>> b = a.copy() >>> a.append(4) >>> b [1, 2, 3] Shallow copy is only "dangerous" when the list contains mutable objects (other lists, dicts, etc.)., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • a.copy() creates a new list with the same elements • For flat lists of immutables, shallow = fully independent • Changes to a (append, remove, etc.) don't affect b • The inner elements are immutable so sharing them is safe How it works: • a = [1, 2, 3] • b = a.copy() — new list [1, 2, 3] • a.append(4) — only modifies a • b is unaffected → [1, 2, 3] Example: >>> a = [1, 2, 3] >>> b = a.copy() >>> a.append(4) >>> b [1, 2, 3] Shallow copy is only "dangerous" when the list contains mutable objects (other lists, dicts, etc.). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • a.copy() creates a new list with the same elements • For flat lists of immutables, shallow = fully independent • Changes to a (append, remove, etc.) don't affect b • The inner elements are immutable so sharing them is safe How it works: • a = [1, 2, 3] • b = a.copy() — new list [1, 2, 3] • a.append(4) — only modifies a • b is unaffected → [1, 2, 3] Example: >>> a = [1, 2, 3] >>> b = a.copy() >>> a.append(4) >>> b [1, 2, 3] Shallow copy is only "dangerous" when the list contains mutable objects (other lists, dicts, etc.)..
• When performance matters, prefer the simplest pattern that still implements: For lists containing only immutable elements (ints, strings, etc.), a shallow copy via .copy() is effectively independent..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: For lists containing only immutable elements (ints, strings, etc.), a shallow copy via .copy() is effectively independent..

Notes:
• For maintainable code, make the intent behind: Key concepts: • a.copy() creates a new list with the same elements • For flat lists of immutables, shallow = fully independent • Changes to a (append, remove, etc.) don't affect b • The inner elements are immutable so sharing them is safe How it works: • a = [1, 2, 3] • b = a.copy() — new list [1, 2, 3] • a.append(4) — only modifies a • b is unaffected → [1, 2, 3] Example: >>> a = [1, 2, 3] >>> b = a.copy() >>> a.append(4) >>> b [1, 2, 3] Shallow copy is only "dangerous" when the list contains mutable objects (other lists, dicts, etc.). explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • set.copy() creates a new set with the same elements • Sets only hold immutable items, so no nested-mutation issues • Adding to the original doesn't affect the copy • Equivalent to set(a) or {*a} How it works: • a = {1, 2, 3} • b = a.copy() — new set {1, 2, 3} • a.add(4) — only modifies a • b → {1, 2, 3} Example: >>> a = {1, 2, 3} >>> b = a.copy() >>> a.add(4) >>> b {1, 2, 3} Sets never have the shallow-copy gotcha because their elements must be hashable (immutable).

Key Distinctions:
• This question’s focus is best captured by: Sets also have a .copy() method that creates a shallow copy.
• The contrast that matters for correctness is summarized by: Since sets can only contain immutable (hashable) elements, a shallow copy is always fully independent.

How It Works:
• Python follows the rule implied by: Sets also have a .copy() method that creates a shallow copy.
• The outcome you observe follows from: Key concepts: • set.copy() creates a new set with the same elements • Sets only hold immutable items, so no nested-mutation issues • Adding to the original doesn't affect the copy • Equivalent to set(a) or {*a} How it works: • a = {1, 2, 3} • b = a.copy() — new set {1, 2, 3} • a.add(4) — only modifies a • b → {1, 2, 3} Example: >>> a = {1, 2, 3} >>> b = a.copy() >>> a.add(4) >>> b {1, 2, 3} Sets never have the shallow-copy gotcha because their elements must be hashable (immutable).

Step-by-Step Execution:
1. Start from the construct described in: Sets also have a .copy() method that creates a shallow copy.
2. Resolve the subparts implied by: Since sets can only contain immutable (hashable) elements, a shallow copy is always fully independent.
3. Apply the core semantics highlighted in: Key concepts: • set.copy() creates a new set with the same elements • Sets only hold immutable items, so no nested-mutation issues • Adding to the original doesn't affect the copy • Equivalent to set(a) or {*a} How it works: • a = {1, 2, 3} • b = a.copy() — new set {1, 2, 3} • a.add(4) — only modifies a • b → {1, 2, 3} Example: >>> a = {1, 2, 3} >>> b = a.copy() >>> a.add(4) >>> b {1, 2, 3} Sets never have the shallow-copy gotcha because their elements must be hashable (immutable).
4. Confirm the final result aligns with: Key concepts: • set.copy() creates a new set with the same elements • Sets only hold immutable items, so no nested-mutation issues • Adding to the original doesn't affect the copy • Equivalent to set(a) or {*a} How it works: • a = {1, 2, 3} • b = a.copy() — new set {1, 2, 3} • a.add(4) — only modifies a • b → {1, 2, 3} Example: >>> a = {1, 2, 3} >>> b = a.copy() >>> a.add(4) >>> b {1, 2, 3} Sets never have the shallow-copy gotcha because their elements must be hashable (immutable).

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Since sets can only contain immutable (hashable) elements, a shallow copy is always fully independent.
2. Apply the construct’s main rule next, matching: Sets also have a .copy() method that creates a shallow copy.
3. Produce any intermediate values that Key concepts: • set.copy() creates a new set with the same elements • Sets only hold immutable items, so no nested-mutation issues • Adding to the original doesn't affect the copy • Equivalent to set(a) or {*a} How it works: • a = {1, 2, 3} • b = a.copy() — new set {1, 2, 3} • a.add(4) — only modifies a • b → {1, 2, 3} Example: >>> a = {1, 2, 3} >>> b = a.copy() >>> a.add(4) >>> b {1, 2, 3} Sets never have the shallow-copy gotcha because their elements must be hashable (immutable). relies on
4. Finish by returning/assembling the final output named by: Key concepts: • set.copy() creates a new set with the same elements • Sets only hold immutable items, so no nested-mutation issues • Adding to the original doesn't affect the copy • Equivalent to set(a) or {*a} How it works: • a = {1, 2, 3} • b = a.copy() — new set {1, 2, 3} • a.add(4) — only modifies a • b → {1, 2, 3} Example: >>> a = {1, 2, 3} >>> b = a.copy() >>> a.add(4) >>> b {1, 2, 3} Sets never have the shallow-copy gotcha because their elements must be hashable (immutable).
5. Use the result only after the full construct has completed, per: Sets also have a .copy() method that creates a shallow copy.

Common Use Cases:
• Teaching this behavior using the mental model: Sets also have a .copy() method that creates a shallow copy.
• Debugging when the observed value should match the expectation in: Key concepts: • set.copy() creates a new set with the same elements • Sets only hold immutable items, so no nested-mutation issues • Adding to the original doesn't affect the copy • Equivalent to set(a) or {*a} How it works: • a = {1, 2, 3} • b = a.copy() — new set {1, 2, 3} • a.add(4) — only modifies a • b → {1, 2, 3} Example: >>> a = {1, 2, 3} >>> b = a.copy() >>> a.add(4) >>> b {1, 2, 3} Sets never have the shallow-copy gotcha because their elements must be hashable (immutable).

Edge Cases:
• If inputs vary from the situation described in: Since sets can only contain immutable (hashable) elements, a shallow copy is always fully independent., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • set.copy() creates a new set with the same elements • Sets only hold immutable items, so no nested-mutation issues • Adding to the original doesn't affect the copy • Equivalent to set(a) or {*a} How it works: • a = {1, 2, 3} • b = a.copy() — new set {1, 2, 3} • a.add(4) — only modifies a • b → {1, 2, 3} Example: >>> a = {1, 2, 3} >>> b = a.copy() >>> a.add(4) >>> b {1, 2, 3} Sets never have the shallow-copy gotcha because their elements must be hashable (immutable). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • set.copy() creates a new set with the same elements • Sets only hold immutable items, so no nested-mutation issues • Adding to the original doesn't affect the copy • Equivalent to set(a) or {*a} How it works: • a = {1, 2, 3} • b = a.copy() — new set {1, 2, 3} • a.add(4) — only modifies a • b → {1, 2, 3} Example: >>> a = {1, 2, 3} >>> b = a.copy() >>> a.add(4) >>> b {1, 2, 3} Sets never have the shallow-copy gotcha because their elements must be hashable (immutable)..
• When performance matters, prefer the simplest pattern that still implements: Sets also have a .copy() method that creates a shallow copy..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Sets also have a .copy() method that creates a shallow copy..

Notes:
• For maintainable code, make the intent behind: Since sets can only contain immutable (hashable) elements, a shallow copy is always fully independent. explicit (and test it with inputs like those in this prompt).`
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
• The gotcha only appears with mutable values.

Key Distinctions:
• This question’s focus is best captured by: dict.copy() creates a new dictionary with the same key-value pairs.
• The contrast that matters for correctness is summarized by: Adding or removing keys from the original doesn't affect the copy.

How It Works:
• Python follows the rule implied by: dict.copy() creates a new dictionary with the same key-value pairs.
• The outcome you observe follows from: The gotcha only appears with mutable values.

Step-by-Step Execution:
1. Start from the construct described in: dict.copy() creates a new dictionary with the same key-value pairs.
2. Resolve the subparts implied by: Adding or removing keys from the original doesn't affect the copy.
3. Apply the core semantics highlighted in: Key concepts: • dict.copy() creates a new top-level dict • New keys added to original are not in the copy • Keys deleted from original are still in the copy • But: mutable values (lists, dicts) are shared references How it works: • a = {"x": 1} • b = a.copy() — new dict {"x": 1} • a["y"] = 2 — adds new key only to a • b → {"x": 1} Example: >>> a = {"x": 1} >>> b = a.copy() >>> a["y"] = 2 >>> b {'x': 1} The top-level structure is independent.
4. Confirm the final result aligns with: The gotcha only appears with mutable values.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Adding or removing keys from the original doesn't affect the copy.
2. Apply the construct’s main rule next, matching: dict.copy() creates a new dictionary with the same key-value pairs.
3. Produce any intermediate values that The gotcha only appears with mutable values. relies on
4. Finish by returning/assembling the final output named by: The gotcha only appears with mutable values.
5. Use the result only after the full construct has completed, per: dict.copy() creates a new dictionary with the same key-value pairs.

Common Use Cases:
• Teaching this behavior using the mental model: dict.copy() creates a new dictionary with the same key-value pairs.
• Debugging when the observed value should match the expectation in: The gotcha only appears with mutable values.

Edge Cases:
• If inputs vary from the situation described in: Adding or removing keys from the original doesn't affect the copy., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • dict.copy() creates a new top-level dict • New keys added to original are not in the copy • Keys deleted from original are still in the copy • But: mutable values (lists, dicts) are shared references How it works: • a = {"x": 1} • b = a.copy() — new dict {"x": 1} • a["y"] = 2 — adds new key only to a • b → {"x": 1} Example: >>> a = {"x": 1} >>> b = a.copy() >>> a["y"] = 2 >>> b {'x': 1} The top-level structure is independent. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: The gotcha only appears with mutable values..
• When performance matters, prefer the simplest pattern that still implements: dict.copy() creates a new dictionary with the same key-value pairs..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: dict.copy() creates a new dictionary with the same key-value pairs..

Notes:
• For maintainable code, make the intent behind: Adding or removing keys from the original doesn't affect the copy. explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • b = a.copy() — new dict, but values are shared • a["x"] and b["x"] point to the same list [1] • Mutating that list (append) is visible through both dicts • Use copy.deepcopy(a) for full independence How it works: • a = {"x": [1]} — value is a list • b = a.copy() — b["x"] is the same list object as a["x"] • a["x"].append(2) — mutates the shared list to [1, 2] • b["x"] → [1, 2] (same object) • b → {"x": [1, 2]} Example: >>> a = {"x": [1]} >>> b = a.copy() >>> a["x"] is b["x"] True >>> a["x"].append(2) >>> b {'x': [1, 2]} The shallow copy gotcha applies universally: lists, dicts, sets — any container with mutable inner objects.

Key Distinctions:
• This question’s focus is best captured by: This is the dict version of the shallow copy gotcha.
• The contrast that matters for correctness is summarized by: dict.copy() copies the key-value mappings, but mutable values are shared references.

How It Works:
• Python follows the rule implied by: This is the dict version of the shallow copy gotcha.
• The outcome you observe follows from: Key concepts: • b = a.copy() — new dict, but values are shared • a["x"] and b["x"] point to the same list [1] • Mutating that list (append) is visible through both dicts • Use copy.deepcopy(a) for full independence How it works: • a = {"x": [1]} — value is a list • b = a.copy() — b["x"] is the same list object as a["x"] • a["x"].append(2) — mutates the shared list to [1, 2] • b["x"] → [1, 2] (same object) • b → {"x": [1, 2]} Example: >>> a = {"x": [1]} >>> b = a.copy() >>> a["x"] is b["x"] True >>> a["x"].append(2) >>> b {'x': [1, 2]} The shallow copy gotcha applies universally: lists, dicts, sets — any container with mutable inner objects.

Step-by-Step Execution:
1. Start from the construct described in: This is the dict version of the shallow copy gotcha.
2. Resolve the subparts implied by: dict.copy() copies the key-value mappings, but mutable values are shared references.
3. Apply the core semantics highlighted in: Key concepts: • b = a.copy() — new dict, but values are shared • a["x"] and b["x"] point to the same list [1] • Mutating that list (append) is visible through both dicts • Use copy.deepcopy(a) for full independence How it works: • a = {"x": [1]} — value is a list • b = a.copy() — b["x"] is the same list object as a["x"] • a["x"].append(2) — mutates the shared list to [1, 2] • b["x"] → [1, 2] (same object) • b → {"x": [1, 2]} Example: >>> a = {"x": [1]} >>> b = a.copy() >>> a["x"] is b["x"] True >>> a["x"].append(2) >>> b {'x': [1, 2]} The shallow copy gotcha applies universally: lists, dicts, sets — any container with mutable inner objects.
4. Confirm the final result aligns with: Key concepts: • b = a.copy() — new dict, but values are shared • a["x"] and b["x"] point to the same list [1] • Mutating that list (append) is visible through both dicts • Use copy.deepcopy(a) for full independence How it works: • a = {"x": [1]} — value is a list • b = a.copy() — b["x"] is the same list object as a["x"] • a["x"].append(2) — mutates the shared list to [1, 2] • b["x"] → [1, 2] (same object) • b → {"x": [1, 2]} Example: >>> a = {"x": [1]} >>> b = a.copy() >>> a["x"] is b["x"] True >>> a["x"].append(2) >>> b {'x': [1, 2]} The shallow copy gotcha applies universally: lists, dicts, sets — any container with mutable inner objects.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: dict.copy() copies the key-value mappings, but mutable values are shared references.
2. Apply the construct’s main rule next, matching: This is the dict version of the shallow copy gotcha.
3. Produce any intermediate values that Key concepts: • b = a.copy() — new dict, but values are shared • a["x"] and b["x"] point to the same list [1] • Mutating that list (append) is visible through both dicts • Use copy.deepcopy(a) for full independence How it works: • a = {"x": [1]} — value is a list • b = a.copy() — b["x"] is the same list object as a["x"] • a["x"].append(2) — mutates the shared list to [1, 2] • b["x"] → [1, 2] (same object) • b → {"x": [1, 2]} Example: >>> a = {"x": [1]} >>> b = a.copy() >>> a["x"] is b["x"] True >>> a["x"].append(2) >>> b {'x': [1, 2]} The shallow copy gotcha applies universally: lists, dicts, sets — any container with mutable inner objects. relies on
4. Finish by returning/assembling the final output named by: Key concepts: • b = a.copy() — new dict, but values are shared • a["x"] and b["x"] point to the same list [1] • Mutating that list (append) is visible through both dicts • Use copy.deepcopy(a) for full independence How it works: • a = {"x": [1]} — value is a list • b = a.copy() — b["x"] is the same list object as a["x"] • a["x"].append(2) — mutates the shared list to [1, 2] • b["x"] → [1, 2] (same object) • b → {"x": [1, 2]} Example: >>> a = {"x": [1]} >>> b = a.copy() >>> a["x"] is b["x"] True >>> a["x"].append(2) >>> b {'x': [1, 2]} The shallow copy gotcha applies universally: lists, dicts, sets — any container with mutable inner objects.
5. Use the result only after the full construct has completed, per: This is the dict version of the shallow copy gotcha.

Common Use Cases:
• Teaching this behavior using the mental model: This is the dict version of the shallow copy gotcha.
• Debugging when the observed value should match the expectation in: Key concepts: • b = a.copy() — new dict, but values are shared • a["x"] and b["x"] point to the same list [1] • Mutating that list (append) is visible through both dicts • Use copy.deepcopy(a) for full independence How it works: • a = {"x": [1]} — value is a list • b = a.copy() — b["x"] is the same list object as a["x"] • a["x"].append(2) — mutates the shared list to [1, 2] • b["x"] → [1, 2] (same object) • b → {"x": [1, 2]} Example: >>> a = {"x": [1]} >>> b = a.copy() >>> a["x"] is b["x"] True >>> a["x"].append(2) >>> b {'x': [1, 2]} The shallow copy gotcha applies universally: lists, dicts, sets — any container with mutable inner objects.

Edge Cases:
• If inputs vary from the situation described in: dict.copy() copies the key-value mappings, but mutable values are shared references., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • b = a.copy() — new dict, but values are shared • a["x"] and b["x"] point to the same list [1] • Mutating that list (append) is visible through both dicts • Use copy.deepcopy(a) for full independence How it works: • a = {"x": [1]} — value is a list • b = a.copy() — b["x"] is the same list object as a["x"] • a["x"].append(2) — mutates the shared list to [1, 2] • b["x"] → [1, 2] (same object) • b → {"x": [1, 2]} Example: >>> a = {"x": [1]} >>> b = a.copy() >>> a["x"] is b["x"] True >>> a["x"].append(2) >>> b {'x': [1, 2]} The shallow copy gotcha applies universally: lists, dicts, sets — any container with mutable inner objects. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • b = a.copy() — new dict, but values are shared • a["x"] and b["x"] point to the same list [1] • Mutating that list (append) is visible through both dicts • Use copy.deepcopy(a) for full independence How it works: • a = {"x": [1]} — value is a list • b = a.copy() — b["x"] is the same list object as a["x"] • a["x"].append(2) — mutates the shared list to [1, 2] • b["x"] → [1, 2] (same object) • b → {"x": [1, 2]} Example: >>> a = {"x": [1]} >>> b = a.copy() >>> a["x"] is b["x"] True >>> a["x"].append(2) >>> b {'x': [1, 2]} The shallow copy gotcha applies universally: lists, dicts, sets — any container with mutable inner objects..
• When performance matters, prefer the simplest pattern that still implements: This is the dict version of the shallow copy gotcha..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This is the dict version of the shallow copy gotcha..

Notes:
• For maintainable code, make the intent behind: dict.copy() copies the key-value mappings, but mutable values are shared references. explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • append(x) adds to the end — O(1) • pop() removes and returns the last element — O(1) • Together they implement a stack • LIFO: the last element added is the first removed How it works: • stack = [] — empty stack • stack.append(1) → [1] • stack.append(2) → [1, 2] • stack.pop() → returns 2, stack becomes [1] Example: >>> stack = [] >>> stack.append(1) >>> stack.append(2) >>> stack.pop() 2 Lists are efficient stacks because both append and pop at the end are amortized O(1).

Key Distinctions:
• This question’s focus is best captured by: Python lists can be used as stacks (LIFO — Last In, First Out) using append() and pop().
• The contrast that matters for correctness is summarized by: Key concepts: • append(x) adds to the end — O(1) • pop() removes and returns the last element — O(1) • Together they implement a stack • LIFO: the last element added is the first removed How it works: • stack = [] — empty stack • stack.append(1) → [1] • stack.append(2) → [1, 2] • stack.pop() → returns 2, stack becomes [1] Example: >>> stack = [] >>> stack.append(1) >>> stack.append(2) >>> stack.pop() 2 Lists are efficient stacks because both append and pop at the end are amortized O(1).

How It Works:
• Python follows the rule implied by: Python lists can be used as stacks (LIFO — Last In, First Out) using append() and pop().
• The outcome you observe follows from: Key concepts: • append(x) adds to the end — O(1) • pop() removes and returns the last element — O(1) • Together they implement a stack • LIFO: the last element added is the first removed How it works: • stack = [] — empty stack • stack.append(1) → [1] • stack.append(2) → [1, 2] • stack.pop() → returns 2, stack becomes [1] Example: >>> stack = [] >>> stack.append(1) >>> stack.append(2) >>> stack.pop() 2 Lists are efficient stacks because both append and pop at the end are amortized O(1).

Step-by-Step Execution:
1. Start from the construct described in: Python lists can be used as stacks (LIFO — Last In, First Out) using append() and pop().
2. Resolve the subparts implied by: Key concepts: • append(x) adds to the end — O(1) • pop() removes and returns the last element — O(1) • Together they implement a stack • LIFO: the last element added is the first removed How it works: • stack = [] — empty stack • stack.append(1) → [1] • stack.append(2) → [1, 2] • stack.pop() → returns 2, stack becomes [1] Example: >>> stack = [] >>> stack.append(1) >>> stack.append(2) >>> stack.pop() 2 Lists are efficient stacks because both append and pop at the end are amortized O(1).
3. Apply the core semantics highlighted in: Key concepts: • append(x) adds to the end — O(1) • pop() removes and returns the last element — O(1) • Together they implement a stack • LIFO: the last element added is the first removed How it works: • stack = [] — empty stack • stack.append(1) → [1] • stack.append(2) → [1, 2] • stack.pop() → returns 2, stack becomes [1] Example: >>> stack = [] >>> stack.append(1) >>> stack.append(2) >>> stack.pop() 2 Lists are efficient stacks because both append and pop at the end are amortized O(1).
4. Confirm the final result aligns with: Key concepts: • append(x) adds to the end — O(1) • pop() removes and returns the last element — O(1) • Together they implement a stack • LIFO: the last element added is the first removed How it works: • stack = [] — empty stack • stack.append(1) → [1] • stack.append(2) → [1, 2] • stack.pop() → returns 2, stack becomes [1] Example: >>> stack = [] >>> stack.append(1) >>> stack.append(2) >>> stack.pop() 2 Lists are efficient stacks because both append and pop at the end are amortized O(1).

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • append(x) adds to the end — O(1) • pop() removes and returns the last element — O(1) • Together they implement a stack • LIFO: the last element added is the first removed How it works: • stack = [] — empty stack • stack.append(1) → [1] • stack.append(2) → [1, 2] • stack.pop() → returns 2, stack becomes [1] Example: >>> stack = [] >>> stack.append(1) >>> stack.append(2) >>> stack.pop() 2 Lists are efficient stacks because both append and pop at the end are amortized O(1).
2. Apply the construct’s main rule next, matching: Python lists can be used as stacks (LIFO — Last In, First Out) using append() and pop().
3. Produce any intermediate values that Key concepts: • append(x) adds to the end — O(1) • pop() removes and returns the last element — O(1) • Together they implement a stack • LIFO: the last element added is the first removed How it works: • stack = [] — empty stack • stack.append(1) → [1] • stack.append(2) → [1, 2] • stack.pop() → returns 2, stack becomes [1] Example: >>> stack = [] >>> stack.append(1) >>> stack.append(2) >>> stack.pop() 2 Lists are efficient stacks because both append and pop at the end are amortized O(1). relies on
4. Finish by returning/assembling the final output named by: Key concepts: • append(x) adds to the end — O(1) • pop() removes and returns the last element — O(1) • Together they implement a stack • LIFO: the last element added is the first removed How it works: • stack = [] — empty stack • stack.append(1) → [1] • stack.append(2) → [1, 2] • stack.pop() → returns 2, stack becomes [1] Example: >>> stack = [] >>> stack.append(1) >>> stack.append(2) >>> stack.pop() 2 Lists are efficient stacks because both append and pop at the end are amortized O(1).
5. Use the result only after the full construct has completed, per: Python lists can be used as stacks (LIFO — Last In, First Out) using append() and pop().

Common Use Cases:
• Teaching this behavior using the mental model: Python lists can be used as stacks (LIFO — Last In, First Out) using append() and pop().
• Debugging when the observed value should match the expectation in: Key concepts: • append(x) adds to the end — O(1) • pop() removes and returns the last element — O(1) • Together they implement a stack • LIFO: the last element added is the first removed How it works: • stack = [] — empty stack • stack.append(1) → [1] • stack.append(2) → [1, 2] • stack.pop() → returns 2, stack becomes [1] Example: >>> stack = [] >>> stack.append(1) >>> stack.append(2) >>> stack.pop() 2 Lists are efficient stacks because both append and pop at the end are amortized O(1).

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • append(x) adds to the end — O(1) • pop() removes and returns the last element — O(1) • Together they implement a stack • LIFO: the last element added is the first removed How it works: • stack = [] — empty stack • stack.append(1) → [1] • stack.append(2) → [1, 2] • stack.pop() → returns 2, stack becomes [1] Example: >>> stack = [] >>> stack.append(1) >>> stack.append(2) >>> stack.pop() 2 Lists are efficient stacks because both append and pop at the end are amortized O(1)., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • append(x) adds to the end — O(1) • pop() removes and returns the last element — O(1) • Together they implement a stack • LIFO: the last element added is the first removed How it works: • stack = [] — empty stack • stack.append(1) → [1] • stack.append(2) → [1, 2] • stack.pop() → returns 2, stack becomes [1] Example: >>> stack = [] >>> stack.append(1) >>> stack.append(2) >>> stack.pop() 2 Lists are efficient stacks because both append and pop at the end are amortized O(1). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • append(x) adds to the end — O(1) • pop() removes and returns the last element — O(1) • Together they implement a stack • LIFO: the last element added is the first removed How it works: • stack = [] — empty stack • stack.append(1) → [1] • stack.append(2) → [1, 2] • stack.pop() → returns 2, stack becomes [1] Example: >>> stack = [] >>> stack.append(1) >>> stack.append(2) >>> stack.pop() 2 Lists are efficient stacks because both append and pop at the end are amortized O(1)..
• When performance matters, prefer the simplest pattern that still implements: Python lists can be used as stacks (LIFO — Last In, First Out) using append() and pop()..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Python lists can be used as stacks (LIFO — Last In, First Out) using append() and pop()..

Notes:
• For maintainable code, make the intent behind: Key concepts: • append(x) adds to the end — O(1) • pop() removes and returns the last element — O(1) • Together they implement a stack • LIFO: the last element added is the first removed How it works: • stack = [] — empty stack • stack.append(1) → [1] • stack.append(2) → [1, 2] • stack.pop() → returns 2, stack becomes [1] Example: >>> stack = [] >>> stack.append(1) >>> stack.append(2) >>> stack.pop() 2 Lists are efficient stacks because both append and pop at the end are amortized O(1). explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • pop() with no arguments removes the last element • It both removes the element AND returns its value • The list is modified in place • pop(i) removes at index i, but pop() at the end is O(1) How it works: • stack = [1, 2, 3] • stack.pop() → removes 3 and returns it • stack → [1, 2] Example: >>> stack = [1, 2, 3] >>> val = stack.pop() >>> val 3 >>> stack [1, 2] pop() is O(1) at the end but O(n) at the beginning because elements must shift.

Key Distinctions:
• This question’s focus is best captured by: list.pop() removes and returns the last element, modifying the list in place.
• The contrast that matters for correctness is summarized by: Key concepts: • pop() with no arguments removes the last element • It both removes the element AND returns its value • The list is modified in place • pop(i) removes at index i, but pop() at the end is O(1) How it works: • stack = [1, 2, 3] • stack.pop() → removes 3 and returns it • stack → [1, 2] Example: >>> stack = [1, 2, 3] >>> val = stack.pop() >>> val 3 >>> stack [1, 2] pop() is O(1) at the end but O(n) at the beginning because elements must shift.

How It Works:
• Python follows the rule implied by: list.pop() removes and returns the last element, modifying the list in place.
• The outcome you observe follows from: Key concepts: • pop() with no arguments removes the last element • It both removes the element AND returns its value • The list is modified in place • pop(i) removes at index i, but pop() at the end is O(1) How it works: • stack = [1, 2, 3] • stack.pop() → removes 3 and returns it • stack → [1, 2] Example: >>> stack = [1, 2, 3] >>> val = stack.pop() >>> val 3 >>> stack [1, 2] pop() is O(1) at the end but O(n) at the beginning because elements must shift.

Step-by-Step Execution:
1. Start from the construct described in: list.pop() removes and returns the last element, modifying the list in place.
2. Resolve the subparts implied by: Key concepts: • pop() with no arguments removes the last element • It both removes the element AND returns its value • The list is modified in place • pop(i) removes at index i, but pop() at the end is O(1) How it works: • stack = [1, 2, 3] • stack.pop() → removes 3 and returns it • stack → [1, 2] Example: >>> stack = [1, 2, 3] >>> val = stack.pop() >>> val 3 >>> stack [1, 2] pop() is O(1) at the end but O(n) at the beginning because elements must shift.
3. Apply the core semantics highlighted in: Key concepts: • pop() with no arguments removes the last element • It both removes the element AND returns its value • The list is modified in place • pop(i) removes at index i, but pop() at the end is O(1) How it works: • stack = [1, 2, 3] • stack.pop() → removes 3 and returns it • stack → [1, 2] Example: >>> stack = [1, 2, 3] >>> val = stack.pop() >>> val 3 >>> stack [1, 2] pop() is O(1) at the end but O(n) at the beginning because elements must shift.
4. Confirm the final result aligns with: Key concepts: • pop() with no arguments removes the last element • It both removes the element AND returns its value • The list is modified in place • pop(i) removes at index i, but pop() at the end is O(1) How it works: • stack = [1, 2, 3] • stack.pop() → removes 3 and returns it • stack → [1, 2] Example: >>> stack = [1, 2, 3] >>> val = stack.pop() >>> val 3 >>> stack [1, 2] pop() is O(1) at the end but O(n) at the beginning because elements must shift.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • pop() with no arguments removes the last element • It both removes the element AND returns its value • The list is modified in place • pop(i) removes at index i, but pop() at the end is O(1) How it works: • stack = [1, 2, 3] • stack.pop() → removes 3 and returns it • stack → [1, 2] Example: >>> stack = [1, 2, 3] >>> val = stack.pop() >>> val 3 >>> stack [1, 2] pop() is O(1) at the end but O(n) at the beginning because elements must shift.
2. Apply the construct’s main rule next, matching: list.pop() removes and returns the last element, modifying the list in place.
3. Produce any intermediate values that Key concepts: • pop() with no arguments removes the last element • It both removes the element AND returns its value • The list is modified in place • pop(i) removes at index i, but pop() at the end is O(1) How it works: • stack = [1, 2, 3] • stack.pop() → removes 3 and returns it • stack → [1, 2] Example: >>> stack = [1, 2, 3] >>> val = stack.pop() >>> val 3 >>> stack [1, 2] pop() is O(1) at the end but O(n) at the beginning because elements must shift. relies on
4. Finish by returning/assembling the final output named by: Key concepts: • pop() with no arguments removes the last element • It both removes the element AND returns its value • The list is modified in place • pop(i) removes at index i, but pop() at the end is O(1) How it works: • stack = [1, 2, 3] • stack.pop() → removes 3 and returns it • stack → [1, 2] Example: >>> stack = [1, 2, 3] >>> val = stack.pop() >>> val 3 >>> stack [1, 2] pop() is O(1) at the end but O(n) at the beginning because elements must shift.
5. Use the result only after the full construct has completed, per: list.pop() removes and returns the last element, modifying the list in place.

Common Use Cases:
• Teaching this behavior using the mental model: list.pop() removes and returns the last element, modifying the list in place.
• Debugging when the observed value should match the expectation in: Key concepts: • pop() with no arguments removes the last element • It both removes the element AND returns its value • The list is modified in place • pop(i) removes at index i, but pop() at the end is O(1) How it works: • stack = [1, 2, 3] • stack.pop() → removes 3 and returns it • stack → [1, 2] Example: >>> stack = [1, 2, 3] >>> val = stack.pop() >>> val 3 >>> stack [1, 2] pop() is O(1) at the end but O(n) at the beginning because elements must shift.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • pop() with no arguments removes the last element • It both removes the element AND returns its value • The list is modified in place • pop(i) removes at index i, but pop() at the end is O(1) How it works: • stack = [1, 2, 3] • stack.pop() → removes 3 and returns it • stack → [1, 2] Example: >>> stack = [1, 2, 3] >>> val = stack.pop() >>> val 3 >>> stack [1, 2] pop() is O(1) at the end but O(n) at the beginning because elements must shift., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • pop() with no arguments removes the last element • It both removes the element AND returns its value • The list is modified in place • pop(i) removes at index i, but pop() at the end is O(1) How it works: • stack = [1, 2, 3] • stack.pop() → removes 3 and returns it • stack → [1, 2] Example: >>> stack = [1, 2, 3] >>> val = stack.pop() >>> val 3 >>> stack [1, 2] pop() is O(1) at the end but O(n) at the beginning because elements must shift. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • pop() with no arguments removes the last element • It both removes the element AND returns its value • The list is modified in place • pop(i) removes at index i, but pop() at the end is O(1) How it works: • stack = [1, 2, 3] • stack.pop() → removes 3 and returns it • stack → [1, 2] Example: >>> stack = [1, 2, 3] >>> val = stack.pop() >>> val 3 >>> stack [1, 2] pop() is O(1) at the end but O(n) at the beginning because elements must shift..
• When performance matters, prefer the simplest pattern that still implements: list.pop() removes and returns the last element, modifying the list in place..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: list.pop() removes and returns the last element, modifying the list in place..

Notes:
• For maintainable code, make the intent behind: Key concepts: • pop() with no arguments removes the last element • It both removes the element AND returns its value • The list is modified in place • pop(i) removes at index i, but pop() at the end is O(1) How it works: • stack = [1, 2, 3] • stack.pop() → removes 3 and returns it • stack → [1, 2] Example: >>> stack = [1, 2, 3] >>> val = stack.pop() >>> val 3 >>> stack [1, 2] pop() is O(1) at the end but O(n) at the beginning because elements must shift. explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • deque = double-ended queue • popleft() removes and returns the leftmost element — O(1) • list.pop(0) does the same but is O(n) due to shifting • deque is the proper data structure for queues in Python How it works: • q = deque([1, 2, 3]) • q.popleft() → returns 1, q becomes deque([2, 3]) Example: >>> from collections import deque >>> q = deque([1, 2, 3]) >>> q.popleft() 1 >>> q deque([2, 3]) For FIFO queues, always use deque over list for O(1) performance at both ends.

Key Distinctions:
• This question’s focus is best captured by: collections.deque provides O(1) operations at both ends.
• The contrast that matters for correctness is summarized by: popleft() removes from the left, implementing FIFO (First In, First Out).

How It Works:
• Python follows the rule implied by: collections.deque provides O(1) operations at both ends.
• The outcome you observe follows from: Key concepts: • deque = double-ended queue • popleft() removes and returns the leftmost element — O(1) • list.pop(0) does the same but is O(n) due to shifting • deque is the proper data structure for queues in Python How it works: • q = deque([1, 2, 3]) • q.popleft() → returns 1, q becomes deque([2, 3]) Example: >>> from collections import deque >>> q = deque([1, 2, 3]) >>> q.popleft() 1 >>> q deque([2, 3]) For FIFO queues, always use deque over list for O(1) performance at both ends.

Step-by-Step Execution:
1. Start from the construct described in: collections.deque provides O(1) operations at both ends.
2. Resolve the subparts implied by: popleft() removes from the left, implementing FIFO (First In, First Out).
3. Apply the core semantics highlighted in: Key concepts: • deque = double-ended queue • popleft() removes and returns the leftmost element — O(1) • list.pop(0) does the same but is O(n) due to shifting • deque is the proper data structure for queues in Python How it works: • q = deque([1, 2, 3]) • q.popleft() → returns 1, q becomes deque([2, 3]) Example: >>> from collections import deque >>> q = deque([1, 2, 3]) >>> q.popleft() 1 >>> q deque([2, 3]) For FIFO queues, always use deque over list for O(1) performance at both ends.
4. Confirm the final result aligns with: Key concepts: • deque = double-ended queue • popleft() removes and returns the leftmost element — O(1) • list.pop(0) does the same but is O(n) due to shifting • deque is the proper data structure for queues in Python How it works: • q = deque([1, 2, 3]) • q.popleft() → returns 1, q becomes deque([2, 3]) Example: >>> from collections import deque >>> q = deque([1, 2, 3]) >>> q.popleft() 1 >>> q deque([2, 3]) For FIFO queues, always use deque over list for O(1) performance at both ends.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: popleft() removes from the left, implementing FIFO (First In, First Out).
2. Apply the construct’s main rule next, matching: collections.deque provides O(1) operations at both ends.
3. Produce any intermediate values that Key concepts: • deque = double-ended queue • popleft() removes and returns the leftmost element — O(1) • list.pop(0) does the same but is O(n) due to shifting • deque is the proper data structure for queues in Python How it works: • q = deque([1, 2, 3]) • q.popleft() → returns 1, q becomes deque([2, 3]) Example: >>> from collections import deque >>> q = deque([1, 2, 3]) >>> q.popleft() 1 >>> q deque([2, 3]) For FIFO queues, always use deque over list for O(1) performance at both ends. relies on
4. Finish by returning/assembling the final output named by: Key concepts: • deque = double-ended queue • popleft() removes and returns the leftmost element — O(1) • list.pop(0) does the same but is O(n) due to shifting • deque is the proper data structure for queues in Python How it works: • q = deque([1, 2, 3]) • q.popleft() → returns 1, q becomes deque([2, 3]) Example: >>> from collections import deque >>> q = deque([1, 2, 3]) >>> q.popleft() 1 >>> q deque([2, 3]) For FIFO queues, always use deque over list for O(1) performance at both ends.
5. Use the result only after the full construct has completed, per: collections.deque provides O(1) operations at both ends.

Common Use Cases:
• Teaching this behavior using the mental model: collections.deque provides O(1) operations at both ends.
• Debugging when the observed value should match the expectation in: Key concepts: • deque = double-ended queue • popleft() removes and returns the leftmost element — O(1) • list.pop(0) does the same but is O(n) due to shifting • deque is the proper data structure for queues in Python How it works: • q = deque([1, 2, 3]) • q.popleft() → returns 1, q becomes deque([2, 3]) Example: >>> from collections import deque >>> q = deque([1, 2, 3]) >>> q.popleft() 1 >>> q deque([2, 3]) For FIFO queues, always use deque over list for O(1) performance at both ends.

Edge Cases:
• If inputs vary from the situation described in: popleft() removes from the left, implementing FIFO (First In, First Out)., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • deque = double-ended queue • popleft() removes and returns the leftmost element — O(1) • list.pop(0) does the same but is O(n) due to shifting • deque is the proper data structure for queues in Python How it works: • q = deque([1, 2, 3]) • q.popleft() → returns 1, q becomes deque([2, 3]) Example: >>> from collections import deque >>> q = deque([1, 2, 3]) >>> q.popleft() 1 >>> q deque([2, 3]) For FIFO queues, always use deque over list for O(1) performance at both ends. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • deque = double-ended queue • popleft() removes and returns the leftmost element — O(1) • list.pop(0) does the same but is O(n) due to shifting • deque is the proper data structure for queues in Python How it works: • q = deque([1, 2, 3]) • q.popleft() → returns 1, q becomes deque([2, 3]) Example: >>> from collections import deque >>> q = deque([1, 2, 3]) >>> q.popleft() 1 >>> q deque([2, 3]) For FIFO queues, always use deque over list for O(1) performance at both ends..
• When performance matters, prefer the simplest pattern that still implements: collections.deque provides O(1) operations at both ends..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: collections.deque provides O(1) operations at both ends..

Notes:
• For maintainable code, make the intent behind: popleft() removes from the left, implementing FIFO (First In, First Out). explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • appendleft(x) adds to the left — O(1) • append(x) adds to the right — O(1) • list.insert(0, x) would be O(n) for the same operation • deque is doubly-linked, so both ends are fast How it works: • q = deque([1, 2, 3]) • q.appendleft(0) → deque([0, 1, 2, 3]) • list(q) → [0, 1, 2, 3] Example: >>> from collections import deque >>> q = deque([1, 2, 3]) >>> q.appendleft(0) >>> list(q) [0, 1, 2, 3] deque supports both appendleft/popleft (left end) and append/pop (right end), all in O(1).

Key Distinctions:
• This question’s focus is best captured by: deque.appendleft() adds an element to the left (front) of the deque in O(1) time.
• The contrast that matters for correctness is summarized by: Key concepts: • appendleft(x) adds to the left — O(1) • append(x) adds to the right — O(1) • list.insert(0, x) would be O(n) for the same operation • deque is doubly-linked, so both ends are fast How it works: • q = deque([1, 2, 3]) • q.appendleft(0) → deque([0, 1, 2, 3]) • list(q) → [0, 1, 2, 3] Example: >>> from collections import deque >>> q = deque([1, 2, 3]) >>> q.appendleft(0) >>> list(q) [0, 1, 2, 3] deque supports both appendleft/popleft (left end) and append/pop (right end), all in O(1).

How It Works:
• Python follows the rule implied by: deque.appendleft() adds an element to the left (front) of the deque in O(1) time.
• The outcome you observe follows from: Key concepts: • appendleft(x) adds to the left — O(1) • append(x) adds to the right — O(1) • list.insert(0, x) would be O(n) for the same operation • deque is doubly-linked, so both ends are fast How it works: • q = deque([1, 2, 3]) • q.appendleft(0) → deque([0, 1, 2, 3]) • list(q) → [0, 1, 2, 3] Example: >>> from collections import deque >>> q = deque([1, 2, 3]) >>> q.appendleft(0) >>> list(q) [0, 1, 2, 3] deque supports both appendleft/popleft (left end) and append/pop (right end), all in O(1).

Step-by-Step Execution:
1. Start from the construct described in: deque.appendleft() adds an element to the left (front) of the deque in O(1) time.
2. Resolve the subparts implied by: Key concepts: • appendleft(x) adds to the left — O(1) • append(x) adds to the right — O(1) • list.insert(0, x) would be O(n) for the same operation • deque is doubly-linked, so both ends are fast How it works: • q = deque([1, 2, 3]) • q.appendleft(0) → deque([0, 1, 2, 3]) • list(q) → [0, 1, 2, 3] Example: >>> from collections import deque >>> q = deque([1, 2, 3]) >>> q.appendleft(0) >>> list(q) [0, 1, 2, 3] deque supports both appendleft/popleft (left end) and append/pop (right end), all in O(1).
3. Apply the core semantics highlighted in: Key concepts: • appendleft(x) adds to the left — O(1) • append(x) adds to the right — O(1) • list.insert(0, x) would be O(n) for the same operation • deque is doubly-linked, so both ends are fast How it works: • q = deque([1, 2, 3]) • q.appendleft(0) → deque([0, 1, 2, 3]) • list(q) → [0, 1, 2, 3] Example: >>> from collections import deque >>> q = deque([1, 2, 3]) >>> q.appendleft(0) >>> list(q) [0, 1, 2, 3] deque supports both appendleft/popleft (left end) and append/pop (right end), all in O(1).
4. Confirm the final result aligns with: Key concepts: • appendleft(x) adds to the left — O(1) • append(x) adds to the right — O(1) • list.insert(0, x) would be O(n) for the same operation • deque is doubly-linked, so both ends are fast How it works: • q = deque([1, 2, 3]) • q.appendleft(0) → deque([0, 1, 2, 3]) • list(q) → [0, 1, 2, 3] Example: >>> from collections import deque >>> q = deque([1, 2, 3]) >>> q.appendleft(0) >>> list(q) [0, 1, 2, 3] deque supports both appendleft/popleft (left end) and append/pop (right end), all in O(1).

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • appendleft(x) adds to the left — O(1) • append(x) adds to the right — O(1) • list.insert(0, x) would be O(n) for the same operation • deque is doubly-linked, so both ends are fast How it works: • q = deque([1, 2, 3]) • q.appendleft(0) → deque([0, 1, 2, 3]) • list(q) → [0, 1, 2, 3] Example: >>> from collections import deque >>> q = deque([1, 2, 3]) >>> q.appendleft(0) >>> list(q) [0, 1, 2, 3] deque supports both appendleft/popleft (left end) and append/pop (right end), all in O(1).
2. Apply the construct’s main rule next, matching: deque.appendleft() adds an element to the left (front) of the deque in O(1) time.
3. Produce any intermediate values that Key concepts: • appendleft(x) adds to the left — O(1) • append(x) adds to the right — O(1) • list.insert(0, x) would be O(n) for the same operation • deque is doubly-linked, so both ends are fast How it works: • q = deque([1, 2, 3]) • q.appendleft(0) → deque([0, 1, 2, 3]) • list(q) → [0, 1, 2, 3] Example: >>> from collections import deque >>> q = deque([1, 2, 3]) >>> q.appendleft(0) >>> list(q) [0, 1, 2, 3] deque supports both appendleft/popleft (left end) and append/pop (right end), all in O(1). relies on
4. Finish by returning/assembling the final output named by: Key concepts: • appendleft(x) adds to the left — O(1) • append(x) adds to the right — O(1) • list.insert(0, x) would be O(n) for the same operation • deque is doubly-linked, so both ends are fast How it works: • q = deque([1, 2, 3]) • q.appendleft(0) → deque([0, 1, 2, 3]) • list(q) → [0, 1, 2, 3] Example: >>> from collections import deque >>> q = deque([1, 2, 3]) >>> q.appendleft(0) >>> list(q) [0, 1, 2, 3] deque supports both appendleft/popleft (left end) and append/pop (right end), all in O(1).
5. Use the result only after the full construct has completed, per: deque.appendleft() adds an element to the left (front) of the deque in O(1) time.

Common Use Cases:
• Teaching this behavior using the mental model: deque.appendleft() adds an element to the left (front) of the deque in O(1) time.
• Debugging when the observed value should match the expectation in: Key concepts: • appendleft(x) adds to the left — O(1) • append(x) adds to the right — O(1) • list.insert(0, x) would be O(n) for the same operation • deque is doubly-linked, so both ends are fast How it works: • q = deque([1, 2, 3]) • q.appendleft(0) → deque([0, 1, 2, 3]) • list(q) → [0, 1, 2, 3] Example: >>> from collections import deque >>> q = deque([1, 2, 3]) >>> q.appendleft(0) >>> list(q) [0, 1, 2, 3] deque supports both appendleft/popleft (left end) and append/pop (right end), all in O(1).

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • appendleft(x) adds to the left — O(1) • append(x) adds to the right — O(1) • list.insert(0, x) would be O(n) for the same operation • deque is doubly-linked, so both ends are fast How it works: • q = deque([1, 2, 3]) • q.appendleft(0) → deque([0, 1, 2, 3]) • list(q) → [0, 1, 2, 3] Example: >>> from collections import deque >>> q = deque([1, 2, 3]) >>> q.appendleft(0) >>> list(q) [0, 1, 2, 3] deque supports both appendleft/popleft (left end) and append/pop (right end), all in O(1)., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • appendleft(x) adds to the left — O(1) • append(x) adds to the right — O(1) • list.insert(0, x) would be O(n) for the same operation • deque is doubly-linked, so both ends are fast How it works: • q = deque([1, 2, 3]) • q.appendleft(0) → deque([0, 1, 2, 3]) • list(q) → [0, 1, 2, 3] Example: >>> from collections import deque >>> q = deque([1, 2, 3]) >>> q.appendleft(0) >>> list(q) [0, 1, 2, 3] deque supports both appendleft/popleft (left end) and append/pop (right end), all in O(1). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • appendleft(x) adds to the left — O(1) • append(x) adds to the right — O(1) • list.insert(0, x) would be O(n) for the same operation • deque is doubly-linked, so both ends are fast How it works: • q = deque([1, 2, 3]) • q.appendleft(0) → deque([0, 1, 2, 3]) • list(q) → [0, 1, 2, 3] Example: >>> from collections import deque >>> q = deque([1, 2, 3]) >>> q.appendleft(0) >>> list(q) [0, 1, 2, 3] deque supports both appendleft/popleft (left end) and append/pop (right end), all in O(1)..
• When performance matters, prefer the simplest pattern that still implements: deque.appendleft() adds an element to the left (front) of the deque in O(1) time..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: deque.appendleft() adds an element to the left (front) of the deque in O(1) time..

Notes:
• For maintainable code, make the intent behind: Key concepts: • appendleft(x) adds to the left — O(1) • append(x) adds to the right — O(1) • list.insert(0, x) would be O(n) for the same operation • deque is doubly-linked, so both ends are fast How it works: • q = deque([1, 2, 3]) • q.appendleft(0) → deque([0, 1, 2, 3]) • list(q) → [0, 1, 2, 3] Example: >>> from collections import deque >>> q = deque([1, 2, 3]) >>> q.appendleft(0) >>> list(q) [0, 1, 2, 3] deque supports both appendleft/popleft (left end) and append/pop (right end), all in O(1). explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • maxlen=3 limits the deque to at most 3 elements • Adding to the right drops from the left (and vice versa) • Useful for fixed-size sliding windows • Once set, maxlen cannot be changed How it works: • q = deque(maxlen=3) — empty, max 3 elements • q.extend([1, 2, 3, 4]) adds 1, 2, 3, 4 one by one • After 1: deque([1]) • After 2: deque([1, 2]) • After 3: deque([1, 2, 3]) — full • After 4: deque([2, 3, 4]) — 1 dropped from left Example: >>> from collections import deque >>> q = deque(maxlen=3) >>> q.extend([1, 2, 3, 4]) >>> list(q) [2, 3, 4] This is commonly used for "last N items" buffers or moving averages.

Key Distinctions:
• This question’s focus is best captured by: A deque with maxlen automatically discards elements from the opposite end when the limit is exceeded.
• The contrast that matters for correctness is summarized by: Key concepts: • maxlen=3 limits the deque to at most 3 elements • Adding to the right drops from the left (and vice versa) • Useful for fixed-size sliding windows • Once set, maxlen cannot be changed How it works: • q = deque(maxlen=3) — empty, max 3 elements • q.extend([1, 2, 3, 4]) adds 1, 2, 3, 4 one by one • After 1: deque([1]) • After 2: deque([1, 2]) • After 3: deque([1, 2, 3]) — full • After 4: deque([2, 3, 4]) — 1 dropped from left Example: >>> from collections import deque >>> q = deque(maxlen=3) >>> q.extend([1, 2, 3, 4]) >>> list(q) [2, 3, 4] This is commonly used for "last N items" buffers or moving averages.

How It Works:
• Python follows the rule implied by: A deque with maxlen automatically discards elements from the opposite end when the limit is exceeded.
• The outcome you observe follows from: Key concepts: • maxlen=3 limits the deque to at most 3 elements • Adding to the right drops from the left (and vice versa) • Useful for fixed-size sliding windows • Once set, maxlen cannot be changed How it works: • q = deque(maxlen=3) — empty, max 3 elements • q.extend([1, 2, 3, 4]) adds 1, 2, 3, 4 one by one • After 1: deque([1]) • After 2: deque([1, 2]) • After 3: deque([1, 2, 3]) — full • After 4: deque([2, 3, 4]) — 1 dropped from left Example: >>> from collections import deque >>> q = deque(maxlen=3) >>> q.extend([1, 2, 3, 4]) >>> list(q) [2, 3, 4] This is commonly used for "last N items" buffers or moving averages.

Step-by-Step Execution:
1. Start from the construct described in: A deque with maxlen automatically discards elements from the opposite end when the limit is exceeded.
2. Resolve the subparts implied by: Key concepts: • maxlen=3 limits the deque to at most 3 elements • Adding to the right drops from the left (and vice versa) • Useful for fixed-size sliding windows • Once set, maxlen cannot be changed How it works: • q = deque(maxlen=3) — empty, max 3 elements • q.extend([1, 2, 3, 4]) adds 1, 2, 3, 4 one by one • After 1: deque([1]) • After 2: deque([1, 2]) • After 3: deque([1, 2, 3]) — full • After 4: deque([2, 3, 4]) — 1 dropped from left Example: >>> from collections import deque >>> q = deque(maxlen=3) >>> q.extend([1, 2, 3, 4]) >>> list(q) [2, 3, 4] This is commonly used for "last N items" buffers or moving averages.
3. Apply the core semantics highlighted in: Key concepts: • maxlen=3 limits the deque to at most 3 elements • Adding to the right drops from the left (and vice versa) • Useful for fixed-size sliding windows • Once set, maxlen cannot be changed How it works: • q = deque(maxlen=3) — empty, max 3 elements • q.extend([1, 2, 3, 4]) adds 1, 2, 3, 4 one by one • After 1: deque([1]) • After 2: deque([1, 2]) • After 3: deque([1, 2, 3]) — full • After 4: deque([2, 3, 4]) — 1 dropped from left Example: >>> from collections import deque >>> q = deque(maxlen=3) >>> q.extend([1, 2, 3, 4]) >>> list(q) [2, 3, 4] This is commonly used for "last N items" buffers or moving averages.
4. Confirm the final result aligns with: Key concepts: • maxlen=3 limits the deque to at most 3 elements • Adding to the right drops from the left (and vice versa) • Useful for fixed-size sliding windows • Once set, maxlen cannot be changed How it works: • q = deque(maxlen=3) — empty, max 3 elements • q.extend([1, 2, 3, 4]) adds 1, 2, 3, 4 one by one • After 1: deque([1]) • After 2: deque([1, 2]) • After 3: deque([1, 2, 3]) — full • After 4: deque([2, 3, 4]) — 1 dropped from left Example: >>> from collections import deque >>> q = deque(maxlen=3) >>> q.extend([1, 2, 3, 4]) >>> list(q) [2, 3, 4] This is commonly used for "last N items" buffers or moving averages.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • maxlen=3 limits the deque to at most 3 elements • Adding to the right drops from the left (and vice versa) • Useful for fixed-size sliding windows • Once set, maxlen cannot be changed How it works: • q = deque(maxlen=3) — empty, max 3 elements • q.extend([1, 2, 3, 4]) adds 1, 2, 3, 4 one by one • After 1: deque([1]) • After 2: deque([1, 2]) • After 3: deque([1, 2, 3]) — full • After 4: deque([2, 3, 4]) — 1 dropped from left Example: >>> from collections import deque >>> q = deque(maxlen=3) >>> q.extend([1, 2, 3, 4]) >>> list(q) [2, 3, 4] This is commonly used for "last N items" buffers or moving averages.
2. Apply the construct’s main rule next, matching: A deque with maxlen automatically discards elements from the opposite end when the limit is exceeded.
3. Produce any intermediate values that Key concepts: • maxlen=3 limits the deque to at most 3 elements • Adding to the right drops from the left (and vice versa) • Useful for fixed-size sliding windows • Once set, maxlen cannot be changed How it works: • q = deque(maxlen=3) — empty, max 3 elements • q.extend([1, 2, 3, 4]) adds 1, 2, 3, 4 one by one • After 1: deque([1]) • After 2: deque([1, 2]) • After 3: deque([1, 2, 3]) — full • After 4: deque([2, 3, 4]) — 1 dropped from left Example: >>> from collections import deque >>> q = deque(maxlen=3) >>> q.extend([1, 2, 3, 4]) >>> list(q) [2, 3, 4] This is commonly used for "last N items" buffers or moving averages. relies on
4. Finish by returning/assembling the final output named by: Key concepts: • maxlen=3 limits the deque to at most 3 elements • Adding to the right drops from the left (and vice versa) • Useful for fixed-size sliding windows • Once set, maxlen cannot be changed How it works: • q = deque(maxlen=3) — empty, max 3 elements • q.extend([1, 2, 3, 4]) adds 1, 2, 3, 4 one by one • After 1: deque([1]) • After 2: deque([1, 2]) • After 3: deque([1, 2, 3]) — full • After 4: deque([2, 3, 4]) — 1 dropped from left Example: >>> from collections import deque >>> q = deque(maxlen=3) >>> q.extend([1, 2, 3, 4]) >>> list(q) [2, 3, 4] This is commonly used for "last N items" buffers or moving averages.
5. Use the result only after the full construct has completed, per: A deque with maxlen automatically discards elements from the opposite end when the limit is exceeded.

Common Use Cases:
• Teaching this behavior using the mental model: A deque with maxlen automatically discards elements from the opposite end when the limit is exceeded.
• Debugging when the observed value should match the expectation in: Key concepts: • maxlen=3 limits the deque to at most 3 elements • Adding to the right drops from the left (and vice versa) • Useful for fixed-size sliding windows • Once set, maxlen cannot be changed How it works: • q = deque(maxlen=3) — empty, max 3 elements • q.extend([1, 2, 3, 4]) adds 1, 2, 3, 4 one by one • After 1: deque([1]) • After 2: deque([1, 2]) • After 3: deque([1, 2, 3]) — full • After 4: deque([2, 3, 4]) — 1 dropped from left Example: >>> from collections import deque >>> q = deque(maxlen=3) >>> q.extend([1, 2, 3, 4]) >>> list(q) [2, 3, 4] This is commonly used for "last N items" buffers or moving averages.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • maxlen=3 limits the deque to at most 3 elements • Adding to the right drops from the left (and vice versa) • Useful for fixed-size sliding windows • Once set, maxlen cannot be changed How it works: • q = deque(maxlen=3) — empty, max 3 elements • q.extend([1, 2, 3, 4]) adds 1, 2, 3, 4 one by one • After 1: deque([1]) • After 2: deque([1, 2]) • After 3: deque([1, 2, 3]) — full • After 4: deque([2, 3, 4]) — 1 dropped from left Example: >>> from collections import deque >>> q = deque(maxlen=3) >>> q.extend([1, 2, 3, 4]) >>> list(q) [2, 3, 4] This is commonly used for "last N items" buffers or moving averages., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • maxlen=3 limits the deque to at most 3 elements • Adding to the right drops from the left (and vice versa) • Useful for fixed-size sliding windows • Once set, maxlen cannot be changed How it works: • q = deque(maxlen=3) — empty, max 3 elements • q.extend([1, 2, 3, 4]) adds 1, 2, 3, 4 one by one • After 1: deque([1]) • After 2: deque([1, 2]) • After 3: deque([1, 2, 3]) — full • After 4: deque([2, 3, 4]) — 1 dropped from left Example: >>> from collections import deque >>> q = deque(maxlen=3) >>> q.extend([1, 2, 3, 4]) >>> list(q) [2, 3, 4] This is commonly used for "last N items" buffers or moving averages. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • maxlen=3 limits the deque to at most 3 elements • Adding to the right drops from the left (and vice versa) • Useful for fixed-size sliding windows • Once set, maxlen cannot be changed How it works: • q = deque(maxlen=3) — empty, max 3 elements • q.extend([1, 2, 3, 4]) adds 1, 2, 3, 4 one by one • After 1: deque([1]) • After 2: deque([1, 2]) • After 3: deque([1, 2, 3]) — full • After 4: deque([2, 3, 4]) — 1 dropped from left Example: >>> from collections import deque >>> q = deque(maxlen=3) >>> q.extend([1, 2, 3, 4]) >>> list(q) [2, 3, 4] This is commonly used for "last N items" buffers or moving averages..
• When performance matters, prefer the simplest pattern that still implements: A deque with maxlen automatically discards elements from the opposite end when the limit is exceeded..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: A deque with maxlen automatically discards elements from the opposite end when the limit is exceeded..

Notes:
• For maintainable code, make the intent behind: Key concepts: • maxlen=3 limits the deque to at most 3 elements • Adding to the right drops from the left (and vice versa) • Useful for fixed-size sliding windows • Once set, maxlen cannot be changed How it works: • q = deque(maxlen=3) — empty, max 3 elements • q.extend([1, 2, 3, 4]) adds 1, 2, 3, 4 one by one • After 1: deque([1]) • After 2: deque([1, 2]) • After 3: deque([1, 2, 3]) — full • After 4: deque([2, 3, 4]) — 1 dropped from left Example: >>> from collections import deque >>> q = deque(maxlen=3) >>> q.extend([1, 2, 3, 4]) >>> list(q) [2, 3, 4] This is commonly used for "last N items" buffers or moving averages. explicit (and test it with inputs like those in this prompt).`
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
• Use deque.popleft() for O(1) front removal.

Key Distinctions:
• This question’s focus is best captured by: This uses pop(0) inside a list comprehension to drain the list from the front.
• The contrast that matters for correctness is summarized by: range(len(a)) is evaluated once before iteration starts.

How It Works:
• Python follows the rule implied by: This uses pop(0) inside a list comprehension to drain the list from the front.
• The outcome you observe follows from: Use deque.popleft() for O(1) front removal.

Step-by-Step Execution:
1. Start from the construct described in: This uses pop(0) inside a list comprehension to drain the list from the front.
2. Resolve the subparts implied by: range(len(a)) is evaluated once before iteration starts.
3. Apply the core semantics highlighted in: Key concepts: • range(len(a)) is evaluated once → range(3) • Each pop(0) removes and returns the first element • The list shrinks with each iteration • Result is [1, 2, 3] — elements in original order How it works: • range(len(a)) → range(3), so the loop runs 3 times • Iteration 1: a.pop(0) → 1, a = [2, 3] • Iteration 2: a.pop(0) → 2, a = [3] • Iteration 3: a.pop(0) → 3, a = [] • Comprehension result: [1, 2, 3] Example: >>> a = [1, 2, 3] >>> [a.pop(0) for _ in range(len(a))] [1, 2, 3] >>> a [] Warning: pop(0) is O(n) for lists, making this O(n²).
4. Confirm the final result aligns with: Use deque.popleft() for O(1) front removal.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: range(len(a)) is evaluated once before iteration starts.
2. Apply the construct’s main rule next, matching: This uses pop(0) inside a list comprehension to drain the list from the front.
3. Produce any intermediate values that Use deque.popleft() for O(1) front removal. relies on
4. Finish by returning/assembling the final output named by: Use deque.popleft() for O(1) front removal.
5. Use the result only after the full construct has completed, per: This uses pop(0) inside a list comprehension to drain the list from the front.

Common Use Cases:
• Teaching this behavior using the mental model: This uses pop(0) inside a list comprehension to drain the list from the front.
• Debugging when the observed value should match the expectation in: Use deque.popleft() for O(1) front removal.

Edge Cases:
• If inputs vary from the situation described in: range(len(a)) is evaluated once before iteration starts., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • range(len(a)) is evaluated once → range(3) • Each pop(0) removes and returns the first element • The list shrinks with each iteration • Result is [1, 2, 3] — elements in original order How it works: • range(len(a)) → range(3), so the loop runs 3 times • Iteration 1: a.pop(0) → 1, a = [2, 3] • Iteration 2: a.pop(0) → 2, a = [3] • Iteration 3: a.pop(0) → 3, a = [] • Comprehension result: [1, 2, 3] Example: >>> a = [1, 2, 3] >>> [a.pop(0) for _ in range(len(a))] [1, 2, 3] >>> a [] Warning: pop(0) is O(n) for lists, making this O(n²). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Use deque.popleft() for O(1) front removal..
• When performance matters, prefer the simplest pattern that still implements: This uses pop(0) inside a list comprehension to drain the list from the front..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This uses pop(0) inside a list comprehension to drain the list from the front..

Notes:
• For maintainable code, make the intent behind: range(len(a)) is evaluated once before iteration starts. explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • a[2:4] selects elements at index 2 and 3 → values 3, 4 • Assigning [] removes them • Equivalent to del a[2:4] • The list shrinks in place How it works: • Before: [1, 2, 3, 4, 5] • a[2:4] = [] removes indices 2, 3 (elements 3, 4) • After: [1, 2, 5] Example: >>> a = [1, 2, 3, 4, 5] >>> a[2:4] = [] >>> a [1, 2, 5] This is a common pattern for removing a contiguous block of elements without creating a new list.

Key Distinctions:
• This question’s focus is best captured by: Assigning an empty list to a slice removes those elements in place.
• The contrast that matters for correctness is summarized by: a[2:4] selects indices 2 and 3.

How It Works:
• Python follows the rule implied by: Assigning an empty list to a slice removes those elements in place.
• The outcome you observe follows from: Key concepts: • a[2:4] selects elements at index 2 and 3 → values 3, 4 • Assigning [] removes them • Equivalent to del a[2:4] • The list shrinks in place How it works: • Before: [1, 2, 3, 4, 5] • a[2:4] = [] removes indices 2, 3 (elements 3, 4) • After: [1, 2, 5] Example: >>> a = [1, 2, 3, 4, 5] >>> a[2:4] = [] >>> a [1, 2, 5] This is a common pattern for removing a contiguous block of elements without creating a new list.

Step-by-Step Execution:
1. Start from the construct described in: Assigning an empty list to a slice removes those elements in place.
2. Resolve the subparts implied by: a[2:4] selects indices 2 and 3.
3. Apply the core semantics highlighted in: Key concepts: • a[2:4] selects elements at index 2 and 3 → values 3, 4 • Assigning [] removes them • Equivalent to del a[2:4] • The list shrinks in place How it works: • Before: [1, 2, 3, 4, 5] • a[2:4] = [] removes indices 2, 3 (elements 3, 4) • After: [1, 2, 5] Example: >>> a = [1, 2, 3, 4, 5] >>> a[2:4] = [] >>> a [1, 2, 5] This is a common pattern for removing a contiguous block of elements without creating a new list.
4. Confirm the final result aligns with: Key concepts: • a[2:4] selects elements at index 2 and 3 → values 3, 4 • Assigning [] removes them • Equivalent to del a[2:4] • The list shrinks in place How it works: • Before: [1, 2, 3, 4, 5] • a[2:4] = [] removes indices 2, 3 (elements 3, 4) • After: [1, 2, 5] Example: >>> a = [1, 2, 3, 4, 5] >>> a[2:4] = [] >>> a [1, 2, 5] This is a common pattern for removing a contiguous block of elements without creating a new list.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: a[2:4] selects indices 2 and 3.
2. Apply the construct’s main rule next, matching: Assigning an empty list to a slice removes those elements in place.
3. Produce any intermediate values that Key concepts: • a[2:4] selects elements at index 2 and 3 → values 3, 4 • Assigning [] removes them • Equivalent to del a[2:4] • The list shrinks in place How it works: • Before: [1, 2, 3, 4, 5] • a[2:4] = [] removes indices 2, 3 (elements 3, 4) • After: [1, 2, 5] Example: >>> a = [1, 2, 3, 4, 5] >>> a[2:4] = [] >>> a [1, 2, 5] This is a common pattern for removing a contiguous block of elements without creating a new list. relies on
4. Finish by returning/assembling the final output named by: Key concepts: • a[2:4] selects elements at index 2 and 3 → values 3, 4 • Assigning [] removes them • Equivalent to del a[2:4] • The list shrinks in place How it works: • Before: [1, 2, 3, 4, 5] • a[2:4] = [] removes indices 2, 3 (elements 3, 4) • After: [1, 2, 5] Example: >>> a = [1, 2, 3, 4, 5] >>> a[2:4] = [] >>> a [1, 2, 5] This is a common pattern for removing a contiguous block of elements without creating a new list.
5. Use the result only after the full construct has completed, per: Assigning an empty list to a slice removes those elements in place.

Common Use Cases:
• Teaching this behavior using the mental model: Assigning an empty list to a slice removes those elements in place.
• Debugging when the observed value should match the expectation in: Key concepts: • a[2:4] selects elements at index 2 and 3 → values 3, 4 • Assigning [] removes them • Equivalent to del a[2:4] • The list shrinks in place How it works: • Before: [1, 2, 3, 4, 5] • a[2:4] = [] removes indices 2, 3 (elements 3, 4) • After: [1, 2, 5] Example: >>> a = [1, 2, 3, 4, 5] >>> a[2:4] = [] >>> a [1, 2, 5] This is a common pattern for removing a contiguous block of elements without creating a new list.

Edge Cases:
• If inputs vary from the situation described in: a[2:4] selects indices 2 and 3., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • a[2:4] selects elements at index 2 and 3 → values 3, 4 • Assigning [] removes them • Equivalent to del a[2:4] • The list shrinks in place How it works: • Before: [1, 2, 3, 4, 5] • a[2:4] = [] removes indices 2, 3 (elements 3, 4) • After: [1, 2, 5] Example: >>> a = [1, 2, 3, 4, 5] >>> a[2:4] = [] >>> a [1, 2, 5] This is a common pattern for removing a contiguous block of elements without creating a new list. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • a[2:4] selects elements at index 2 and 3 → values 3, 4 • Assigning [] removes them • Equivalent to del a[2:4] • The list shrinks in place How it works: • Before: [1, 2, 3, 4, 5] • a[2:4] = [] removes indices 2, 3 (elements 3, 4) • After: [1, 2, 5] Example: >>> a = [1, 2, 3, 4, 5] >>> a[2:4] = [] >>> a [1, 2, 5] This is a common pattern for removing a contiguous block of elements without creating a new list..
• When performance matters, prefer the simplest pattern that still implements: Assigning an empty list to a slice removes those elements in place..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Assigning an empty list to a slice removes those elements in place..

Notes:
• For maintainable code, make the intent behind: a[2:4] selects indices 2 and 3. explicit (and test it with inputs like those in this prompt).`
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
• a.remove(x) >>> a [1, 3, 5] # Looks correct by luck, but with [1,2,3,4] you'd get [1,3,4] Safe alternatives: iterate over a copy (a[:]) or use list comprehension to filter.

Key Distinctions:
• This question’s focus is best captured by: Modifying a list while iterating over it leads to unexpected behavior.
• The contrast that matters for correctness is summarized by: Python's for loop uses an internal index counter that advances by 1 each iteration, but removing elements shifts subsequent elements.

How It Works:
• Python follows the rule implied by: Modifying a list while iterating over it leads to unexpected behavior.
• The outcome you observe follows from: a.remove(x) >>> a [1, 3, 5] # Looks correct by luck, but with [1,2,3,4] you'd get [1,3,4] Safe alternatives: iterate over a copy (a[:]) or use list comprehension to filter.

Step-by-Step Execution:
1. Start from the construct described in: Modifying a list while iterating over it leads to unexpected behavior.
2. Resolve the subparts implied by: Python's for loop uses an internal index counter that advances by 1 each iteration, but removing elements shifts subsequent elements.
3. Apply the core semantics highlighted in: Key concepts: • Python tracks the current index internally during iteration • Removing an element shifts all subsequent elements left • The iterator advances past the shifted element — skipping it • This is undefined behavior that should be avoided How it works: • for x in a: iterates with an internal counter i = 0, 1, 2, ...
4. Confirm the final result aligns with: a.remove(x) >>> a [1, 3, 5] # Looks correct by luck, but with [1,2,3,4] you'd get [1,3,4] Safe alternatives: iterate over a copy (a[:]) or use list comprehension to filter.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Python's for loop uses an internal index counter that advances by 1 each iteration, but removing elements shifts subsequent elements.
2. Apply the construct’s main rule next, matching: Modifying a list while iterating over it leads to unexpected behavior.
3. Produce any intermediate values that a.remove(x) >>> a [1, 3, 5] # Looks correct by luck, but with [1,2,3,4] you'd get [1,3,4] Safe alternatives: iterate over a copy (a[:]) or use list comprehension to filter. relies on
4. Finish by returning/assembling the final output named by: a.remove(x) >>> a [1, 3, 5] # Looks correct by luck, but with [1,2,3,4] you'd get [1,3,4] Safe alternatives: iterate over a copy (a[:]) or use list comprehension to filter.
5. Use the result only after the full construct has completed, per: Modifying a list while iterating over it leads to unexpected behavior.

Common Use Cases:
• Teaching this behavior using the mental model: Modifying a list while iterating over it leads to unexpected behavior.
• Debugging when the observed value should match the expectation in: a.remove(x) >>> a [1, 3, 5] # Looks correct by luck, but with [1,2,3,4] you'd get [1,3,4] Safe alternatives: iterate over a copy (a[:]) or use list comprehension to filter.

Edge Cases:
• If inputs vary from the situation described in: Python's for loop uses an internal index counter that advances by 1 each iteration, but removing elements shifts subsequent elements., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • Python tracks the current index internally during iteration • Removing an element shifts all subsequent elements left • The iterator advances past the shifted element — skipping it • This is undefined behavior that should be avoided How it works: • for x in a: iterates with an internal counter i = 0, 1, 2, ... is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: a.remove(x) >>> a [1, 3, 5] # Looks correct by luck, but with [1,2,3,4] you'd get [1,3,4] Safe alternatives: iterate over a copy (a[:]) or use list comprehension to filter..
• When performance matters, prefer the simplest pattern that still implements: Modifying a list while iterating over it leads to unexpected behavior..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Modifying a list while iterating over it leads to unexpected behavior..

Notes:
• For maintainable code, make the intent behind: Python's for loop uses an internal index counter that advances by 1 each iteration, but removing elements shifts subsequent elements. explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • [x for x in a if condition] creates a new filtered list • Original list a is not modified • Much safer than removing during iteration • Also more readable and efficient How it works: • Iterates over a = [1, 2, 3, 4] • x=1: 1 != 2 → True → include • x=2: 2 != 2 → False → exclude • x=3: 3 != 2 → True → include • x=4: 4 != 2 → True → include • b = [1, 3, 4] Example: >>> a = [1, 2, 3, 4] >>> b = [x for x in a if x != 2] >>> b [1, 3, 4] >>> a [1, 2, 3, 4] For in-place modification: a[:] = [x for x in a if x != 2] modifies a while keeping the same object.

Key Distinctions:
• This question’s focus is best captured by: List comprehensions with a condition are the Pythonic way to filter elements without mutating the original list.
• The contrast that matters for correctness is summarized by: Key concepts: • [x for x in a if condition] creates a new filtered list • Original list a is not modified • Much safer than removing during iteration • Also more readable and efficient How it works: • Iterates over a = [1, 2, 3, 4] • x=1: 1 != 2 → True → include • x=2: 2 != 2 → False → exclude • x=3: 3 != 2 → True → include • x=4: 4 != 2 → True → include • b = [1, 3, 4] Example: >>> a = [1, 2, 3, 4] >>> b = [x for x in a if x != 2] >>> b [1, 3, 4] >>> a [1, 2, 3, 4] For in-place modification: a[:] = [x for x in a if x != 2] modifies a while keeping the same object.

How It Works:
• Python follows the rule implied by: List comprehensions with a condition are the Pythonic way to filter elements without mutating the original list.
• The outcome you observe follows from: Key concepts: • [x for x in a if condition] creates a new filtered list • Original list a is not modified • Much safer than removing during iteration • Also more readable and efficient How it works: • Iterates over a = [1, 2, 3, 4] • x=1: 1 != 2 → True → include • x=2: 2 != 2 → False → exclude • x=3: 3 != 2 → True → include • x=4: 4 != 2 → True → include • b = [1, 3, 4] Example: >>> a = [1, 2, 3, 4] >>> b = [x for x in a if x != 2] >>> b [1, 3, 4] >>> a [1, 2, 3, 4] For in-place modification: a[:] = [x for x in a if x != 2] modifies a while keeping the same object.

Step-by-Step Execution:
1. Start from the construct described in: List comprehensions with a condition are the Pythonic way to filter elements without mutating the original list.
2. Resolve the subparts implied by: Key concepts: • [x for x in a if condition] creates a new filtered list • Original list a is not modified • Much safer than removing during iteration • Also more readable and efficient How it works: • Iterates over a = [1, 2, 3, 4] • x=1: 1 != 2 → True → include • x=2: 2 != 2 → False → exclude • x=3: 3 != 2 → True → include • x=4: 4 != 2 → True → include • b = [1, 3, 4] Example: >>> a = [1, 2, 3, 4] >>> b = [x for x in a if x != 2] >>> b [1, 3, 4] >>> a [1, 2, 3, 4] For in-place modification: a[:] = [x for x in a if x != 2] modifies a while keeping the same object.
3. Apply the core semantics highlighted in: Key concepts: • [x for x in a if condition] creates a new filtered list • Original list a is not modified • Much safer than removing during iteration • Also more readable and efficient How it works: • Iterates over a = [1, 2, 3, 4] • x=1: 1 != 2 → True → include • x=2: 2 != 2 → False → exclude • x=3: 3 != 2 → True → include • x=4: 4 != 2 → True → include • b = [1, 3, 4] Example: >>> a = [1, 2, 3, 4] >>> b = [x for x in a if x != 2] >>> b [1, 3, 4] >>> a [1, 2, 3, 4] For in-place modification: a[:] = [x for x in a if x != 2] modifies a while keeping the same object.
4. Confirm the final result aligns with: Key concepts: • [x for x in a if condition] creates a new filtered list • Original list a is not modified • Much safer than removing during iteration • Also more readable and efficient How it works: • Iterates over a = [1, 2, 3, 4] • x=1: 1 != 2 → True → include • x=2: 2 != 2 → False → exclude • x=3: 3 != 2 → True → include • x=4: 4 != 2 → True → include • b = [1, 3, 4] Example: >>> a = [1, 2, 3, 4] >>> b = [x for x in a if x != 2] >>> b [1, 3, 4] >>> a [1, 2, 3, 4] For in-place modification: a[:] = [x for x in a if x != 2] modifies a while keeping the same object.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • [x for x in a if condition] creates a new filtered list • Original list a is not modified • Much safer than removing during iteration • Also more readable and efficient How it works: • Iterates over a = [1, 2, 3, 4] • x=1: 1 != 2 → True → include • x=2: 2 != 2 → False → exclude • x=3: 3 != 2 → True → include • x=4: 4 != 2 → True → include • b = [1, 3, 4] Example: >>> a = [1, 2, 3, 4] >>> b = [x for x in a if x != 2] >>> b [1, 3, 4] >>> a [1, 2, 3, 4] For in-place modification: a[:] = [x for x in a if x != 2] modifies a while keeping the same object.
2. Apply the construct’s main rule next, matching: List comprehensions with a condition are the Pythonic way to filter elements without mutating the original list.
3. Produce any intermediate values that Key concepts: • [x for x in a if condition] creates a new filtered list • Original list a is not modified • Much safer than removing during iteration • Also more readable and efficient How it works: • Iterates over a = [1, 2, 3, 4] • x=1: 1 != 2 → True → include • x=2: 2 != 2 → False → exclude • x=3: 3 != 2 → True → include • x=4: 4 != 2 → True → include • b = [1, 3, 4] Example: >>> a = [1, 2, 3, 4] >>> b = [x for x in a if x != 2] >>> b [1, 3, 4] >>> a [1, 2, 3, 4] For in-place modification: a[:] = [x for x in a if x != 2] modifies a while keeping the same object. relies on
4. Finish by returning/assembling the final output named by: Key concepts: • [x for x in a if condition] creates a new filtered list • Original list a is not modified • Much safer than removing during iteration • Also more readable and efficient How it works: • Iterates over a = [1, 2, 3, 4] • x=1: 1 != 2 → True → include • x=2: 2 != 2 → False → exclude • x=3: 3 != 2 → True → include • x=4: 4 != 2 → True → include • b = [1, 3, 4] Example: >>> a = [1, 2, 3, 4] >>> b = [x for x in a if x != 2] >>> b [1, 3, 4] >>> a [1, 2, 3, 4] For in-place modification: a[:] = [x for x in a if x != 2] modifies a while keeping the same object.
5. Use the result only after the full construct has completed, per: List comprehensions with a condition are the Pythonic way to filter elements without mutating the original list.

Common Use Cases:
• Teaching this behavior using the mental model: List comprehensions with a condition are the Pythonic way to filter elements without mutating the original list.
• Debugging when the observed value should match the expectation in: Key concepts: • [x for x in a if condition] creates a new filtered list • Original list a is not modified • Much safer than removing during iteration • Also more readable and efficient How it works: • Iterates over a = [1, 2, 3, 4] • x=1: 1 != 2 → True → include • x=2: 2 != 2 → False → exclude • x=3: 3 != 2 → True → include • x=4: 4 != 2 → True → include • b = [1, 3, 4] Example: >>> a = [1, 2, 3, 4] >>> b = [x for x in a if x != 2] >>> b [1, 3, 4] >>> a [1, 2, 3, 4] For in-place modification: a[:] = [x for x in a if x != 2] modifies a while keeping the same object.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • [x for x in a if condition] creates a new filtered list • Original list a is not modified • Much safer than removing during iteration • Also more readable and efficient How it works: • Iterates over a = [1, 2, 3, 4] • x=1: 1 != 2 → True → include • x=2: 2 != 2 → False → exclude • x=3: 3 != 2 → True → include • x=4: 4 != 2 → True → include • b = [1, 3, 4] Example: >>> a = [1, 2, 3, 4] >>> b = [x for x in a if x != 2] >>> b [1, 3, 4] >>> a [1, 2, 3, 4] For in-place modification: a[:] = [x for x in a if x != 2] modifies a while keeping the same object., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • [x for x in a if condition] creates a new filtered list • Original list a is not modified • Much safer than removing during iteration • Also more readable and efficient How it works: • Iterates over a = [1, 2, 3, 4] • x=1: 1 != 2 → True → include • x=2: 2 != 2 → False → exclude • x=3: 3 != 2 → True → include • x=4: 4 != 2 → True → include • b = [1, 3, 4] Example: >>> a = [1, 2, 3, 4] >>> b = [x for x in a if x != 2] >>> b [1, 3, 4] >>> a [1, 2, 3, 4] For in-place modification: a[:] = [x for x in a if x != 2] modifies a while keeping the same object. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • [x for x in a if condition] creates a new filtered list • Original list a is not modified • Much safer than removing during iteration • Also more readable and efficient How it works: • Iterates over a = [1, 2, 3, 4] • x=1: 1 != 2 → True → include • x=2: 2 != 2 → False → exclude • x=3: 3 != 2 → True → include • x=4: 4 != 2 → True → include • b = [1, 3, 4] Example: >>> a = [1, 2, 3, 4] >>> b = [x for x in a if x != 2] >>> b [1, 3, 4] >>> a [1, 2, 3, 4] For in-place modification: a[:] = [x for x in a if x != 2] modifies a while keeping the same object..
• When performance matters, prefer the simplest pattern that still implements: List comprehensions with a condition are the Pythonic way to filter elements without mutating the original list..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: List comprehensions with a condition are the Pythonic way to filter elements without mutating the original list..

Notes:
• For maintainable code, make the intent behind: Key concepts: • [x for x in a if condition] creates a new filtered list • Original list a is not modified • Much safer than removing during iteration • Also more readable and efficient How it works: • Iterates over a = [1, 2, 3, 4] • x=1: 1 != 2 → True → include • x=2: 2 != 2 → False → exclude • x=3: 3 != 2 → True → include • x=4: 4 != 2 → True → include • b = [1, 3, 4] Example: >>> a = [1, 2, 3, 4] >>> b = [x for x in a if x != 2] >>> b [1, 3, 4] >>> a [1, 2, 3, 4] For in-place modification: a[:] = [x for x in a if x != 2] modifies a while keeping the same object. explicit (and test it with inputs like those in this prompt).`
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
• Use deque.appendleft() for O(1) front insertion.

Key Distinctions:
• This question’s focus is best captured by: list.insert(index, element) inserts an element before the given index.
• The contrast that matters for correctness is summarized by: insert(0, x) prepends to the list.

How It Works:
• Python follows the rule implied by: list.insert(index, element) inserts an element before the given index.
• The outcome you observe follows from: Use deque.appendleft() for O(1) front insertion.

Step-by-Step Execution:
1. Start from the construct described in: list.insert(index, element) inserts an element before the given index.
2. Resolve the subparts implied by: insert(0, x) prepends to the list.
3. Apply the core semantics highlighted in: Key concepts: • insert(0, x) inserts at the beginning • All existing elements shift right by one position • This is an O(n) operation because of the shifting • For frequent front-insertions, use collections.deque How it works: • a = [1, 2, 3] • a.insert(0, 0) → inserts 0 before index 0 • Elements 1, 2, 3 shift right • a → [0, 1, 2, 3] Example: >>> a = [1, 2, 3] >>> a.insert(0, 0) >>> a [0, 1, 2, 3] Performance: insert(0, x) is O(n) because every element must shift.
4. Confirm the final result aligns with: Use deque.appendleft() for O(1) front insertion.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: insert(0, x) prepends to the list.
2. Apply the construct’s main rule next, matching: list.insert(index, element) inserts an element before the given index.
3. Produce any intermediate values that Use deque.appendleft() for O(1) front insertion. relies on
4. Finish by returning/assembling the final output named by: Use deque.appendleft() for O(1) front insertion.
5. Use the result only after the full construct has completed, per: list.insert(index, element) inserts an element before the given index.

Common Use Cases:
• Teaching this behavior using the mental model: list.insert(index, element) inserts an element before the given index.
• Debugging when the observed value should match the expectation in: Use deque.appendleft() for O(1) front insertion.

Edge Cases:
• If inputs vary from the situation described in: insert(0, x) prepends to the list., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • insert(0, x) inserts at the beginning • All existing elements shift right by one position • This is an O(n) operation because of the shifting • For frequent front-insertions, use collections.deque How it works: • a = [1, 2, 3] • a.insert(0, 0) → inserts 0 before index 0 • Elements 1, 2, 3 shift right • a → [0, 1, 2, 3] Example: >>> a = [1, 2, 3] >>> a.insert(0, 0) >>> a [0, 1, 2, 3] Performance: insert(0, x) is O(n) because every element must shift. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Use deque.appendleft() for O(1) front insertion..
• When performance matters, prefer the simplest pattern that still implements: list.insert(index, element) inserts an element before the given index..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: list.insert(index, element) inserts an element before the given index..

Notes:
• For maintainable code, make the intent behind: insert(0, x) prepends to the list. explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • set() removes duplicates: {3, 1, 4, 1, 5} → {1, 3, 4, 5} • sorted() returns a new sorted list from any iterable • sorted(set(...)) is a common Python idiom • Original order is lost (sorted by value) How it works: • set([3, 1, 4, 1, 5]) → {1, 3, 4, 5} (duplicate 1 removed) • sorted({1, 3, 4, 5}) → [1, 3, 4, 5] Example: >>> sorted(set([3, 1, 4, 1, 5])) [1, 3, 4, 5] If you need to preserve original order while deduplicating, use dict.fromkeys(): list(dict.fromkeys([3, 1, 4, 1, 5])) → [3, 1, 4, 5].

Key Distinctions:
• This question’s focus is best captured by: Combining set() and sorted() is the idiomatic way to get unique elements in sorted order.
• The contrast that matters for correctness is summarized by: Key concepts: • set() removes duplicates: {3, 1, 4, 1, 5} → {1, 3, 4, 5} • sorted() returns a new sorted list from any iterable • sorted(set(...)) is a common Python idiom • Original order is lost (sorted by value) How it works: • set([3, 1, 4, 1, 5]) → {1, 3, 4, 5} (duplicate 1 removed) • sorted({1, 3, 4, 5}) → [1, 3, 4, 5] Example: >>> sorted(set([3, 1, 4, 1, 5])) [1, 3, 4, 5] If you need to preserve original order while deduplicating, use dict.fromkeys(): list(dict.fromkeys([3, 1, 4, 1, 5])) → [3, 1, 4, 5].

How It Works:
• Python follows the rule implied by: Combining set() and sorted() is the idiomatic way to get unique elements in sorted order.
• The outcome you observe follows from: Key concepts: • set() removes duplicates: {3, 1, 4, 1, 5} → {1, 3, 4, 5} • sorted() returns a new sorted list from any iterable • sorted(set(...)) is a common Python idiom • Original order is lost (sorted by value) How it works: • set([3, 1, 4, 1, 5]) → {1, 3, 4, 5} (duplicate 1 removed) • sorted({1, 3, 4, 5}) → [1, 3, 4, 5] Example: >>> sorted(set([3, 1, 4, 1, 5])) [1, 3, 4, 5] If you need to preserve original order while deduplicating, use dict.fromkeys(): list(dict.fromkeys([3, 1, 4, 1, 5])) → [3, 1, 4, 5].

Step-by-Step Execution:
1. Start from the construct described in: Combining set() and sorted() is the idiomatic way to get unique elements in sorted order.
2. Resolve the subparts implied by: Key concepts: • set() removes duplicates: {3, 1, 4, 1, 5} → {1, 3, 4, 5} • sorted() returns a new sorted list from any iterable • sorted(set(...)) is a common Python idiom • Original order is lost (sorted by value) How it works: • set([3, 1, 4, 1, 5]) → {1, 3, 4, 5} (duplicate 1 removed) • sorted({1, 3, 4, 5}) → [1, 3, 4, 5] Example: >>> sorted(set([3, 1, 4, 1, 5])) [1, 3, 4, 5] If you need to preserve original order while deduplicating, use dict.fromkeys(): list(dict.fromkeys([3, 1, 4, 1, 5])) → [3, 1, 4, 5].
3. Apply the core semantics highlighted in: Key concepts: • set() removes duplicates: {3, 1, 4, 1, 5} → {1, 3, 4, 5} • sorted() returns a new sorted list from any iterable • sorted(set(...)) is a common Python idiom • Original order is lost (sorted by value) How it works: • set([3, 1, 4, 1, 5]) → {1, 3, 4, 5} (duplicate 1 removed) • sorted({1, 3, 4, 5}) → [1, 3, 4, 5] Example: >>> sorted(set([3, 1, 4, 1, 5])) [1, 3, 4, 5] If you need to preserve original order while deduplicating, use dict.fromkeys(): list(dict.fromkeys([3, 1, 4, 1, 5])) → [3, 1, 4, 5].
4. Confirm the final result aligns with: Key concepts: • set() removes duplicates: {3, 1, 4, 1, 5} → {1, 3, 4, 5} • sorted() returns a new sorted list from any iterable • sorted(set(...)) is a common Python idiom • Original order is lost (sorted by value) How it works: • set([3, 1, 4, 1, 5]) → {1, 3, 4, 5} (duplicate 1 removed) • sorted({1, 3, 4, 5}) → [1, 3, 4, 5] Example: >>> sorted(set([3, 1, 4, 1, 5])) [1, 3, 4, 5] If you need to preserve original order while deduplicating, use dict.fromkeys(): list(dict.fromkeys([3, 1, 4, 1, 5])) → [3, 1, 4, 5].

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • set() removes duplicates: {3, 1, 4, 1, 5} → {1, 3, 4, 5} • sorted() returns a new sorted list from any iterable • sorted(set(...)) is a common Python idiom • Original order is lost (sorted by value) How it works: • set([3, 1, 4, 1, 5]) → {1, 3, 4, 5} (duplicate 1 removed) • sorted({1, 3, 4, 5}) → [1, 3, 4, 5] Example: >>> sorted(set([3, 1, 4, 1, 5])) [1, 3, 4, 5] If you need to preserve original order while deduplicating, use dict.fromkeys(): list(dict.fromkeys([3, 1, 4, 1, 5])) → [3, 1, 4, 5].
2. Apply the construct’s main rule next, matching: Combining set() and sorted() is the idiomatic way to get unique elements in sorted order.
3. Produce any intermediate values that Key concepts: • set() removes duplicates: {3, 1, 4, 1, 5} → {1, 3, 4, 5} • sorted() returns a new sorted list from any iterable • sorted(set(...)) is a common Python idiom • Original order is lost (sorted by value) How it works: • set([3, 1, 4, 1, 5]) → {1, 3, 4, 5} (duplicate 1 removed) • sorted({1, 3, 4, 5}) → [1, 3, 4, 5] Example: >>> sorted(set([3, 1, 4, 1, 5])) [1, 3, 4, 5] If you need to preserve original order while deduplicating, use dict.fromkeys(): list(dict.fromkeys([3, 1, 4, 1, 5])) → [3, 1, 4, 5]. relies on
4. Finish by returning/assembling the final output named by: Key concepts: • set() removes duplicates: {3, 1, 4, 1, 5} → {1, 3, 4, 5} • sorted() returns a new sorted list from any iterable • sorted(set(...)) is a common Python idiom • Original order is lost (sorted by value) How it works: • set([3, 1, 4, 1, 5]) → {1, 3, 4, 5} (duplicate 1 removed) • sorted({1, 3, 4, 5}) → [1, 3, 4, 5] Example: >>> sorted(set([3, 1, 4, 1, 5])) [1, 3, 4, 5] If you need to preserve original order while deduplicating, use dict.fromkeys(): list(dict.fromkeys([3, 1, 4, 1, 5])) → [3, 1, 4, 5].
5. Use the result only after the full construct has completed, per: Combining set() and sorted() is the idiomatic way to get unique elements in sorted order.

Common Use Cases:
• Teaching this behavior using the mental model: Combining set() and sorted() is the idiomatic way to get unique elements in sorted order.
• Debugging when the observed value should match the expectation in: Key concepts: • set() removes duplicates: {3, 1, 4, 1, 5} → {1, 3, 4, 5} • sorted() returns a new sorted list from any iterable • sorted(set(...)) is a common Python idiom • Original order is lost (sorted by value) How it works: • set([3, 1, 4, 1, 5]) → {1, 3, 4, 5} (duplicate 1 removed) • sorted({1, 3, 4, 5}) → [1, 3, 4, 5] Example: >>> sorted(set([3, 1, 4, 1, 5])) [1, 3, 4, 5] If you need to preserve original order while deduplicating, use dict.fromkeys(): list(dict.fromkeys([3, 1, 4, 1, 5])) → [3, 1, 4, 5].

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • set() removes duplicates: {3, 1, 4, 1, 5} → {1, 3, 4, 5} • sorted() returns a new sorted list from any iterable • sorted(set(...)) is a common Python idiom • Original order is lost (sorted by value) How it works: • set([3, 1, 4, 1, 5]) → {1, 3, 4, 5} (duplicate 1 removed) • sorted({1, 3, 4, 5}) → [1, 3, 4, 5] Example: >>> sorted(set([3, 1, 4, 1, 5])) [1, 3, 4, 5] If you need to preserve original order while deduplicating, use dict.fromkeys(): list(dict.fromkeys([3, 1, 4, 1, 5])) → [3, 1, 4, 5]., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • set() removes duplicates: {3, 1, 4, 1, 5} → {1, 3, 4, 5} • sorted() returns a new sorted list from any iterable • sorted(set(...)) is a common Python idiom • Original order is lost (sorted by value) How it works: • set([3, 1, 4, 1, 5]) → {1, 3, 4, 5} (duplicate 1 removed) • sorted({1, 3, 4, 5}) → [1, 3, 4, 5] Example: >>> sorted(set([3, 1, 4, 1, 5])) [1, 3, 4, 5] If you need to preserve original order while deduplicating, use dict.fromkeys(): list(dict.fromkeys([3, 1, 4, 1, 5])) → [3, 1, 4, 5]. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • set() removes duplicates: {3, 1, 4, 1, 5} → {1, 3, 4, 5} • sorted() returns a new sorted list from any iterable • sorted(set(...)) is a common Python idiom • Original order is lost (sorted by value) How it works: • set([3, 1, 4, 1, 5]) → {1, 3, 4, 5} (duplicate 1 removed) • sorted({1, 3, 4, 5}) → [1, 3, 4, 5] Example: >>> sorted(set([3, 1, 4, 1, 5])) [1, 3, 4, 5] If you need to preserve original order while deduplicating, use dict.fromkeys(): list(dict.fromkeys([3, 1, 4, 1, 5])) → [3, 1, 4, 5]..
• When performance matters, prefer the simplest pattern that still implements: Combining set() and sorted() is the idiomatic way to get unique elements in sorted order..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Combining set() and sorted() is the idiomatic way to get unique elements in sorted order..

Notes:
• For maintainable code, make the intent behind: Key concepts: • set() removes duplicates: {3, 1, 4, 1, 5} → {1, 3, 4, 5} • sorted() returns a new sorted list from any iterable • sorted(set(...)) is a common Python idiom • Original order is lost (sorted by value) How it works: • set([3, 1, 4, 1, 5]) → {1, 3, 4, 5} (duplicate 1 removed) • sorted({1, 3, 4, 5}) → [1, 3, 4, 5] Example: >>> sorted(set([3, 1, 4, 1, 5])) [1, 3, 4, 5] If you need to preserve original order while deduplicating, use dict.fromkeys(): list(dict.fromkeys([3, 1, 4, 1, 5])) → [3, 1, 4, 5]. explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • reversed(a) returns a reverse iterator (lazy, O(1) memory) • a[::-1] creates a new reversed list (eager, O(n) memory) • When compared as lists, they are equal • reversed() is more memory-efficient for large sequences How it works: • a = [1, 2, 3] • list(reversed(a)) → [3, 2, 1] • a[::-1] → [3, 2, 1] • [3, 2, 1] == [3, 2, 1] → True Example: >>> a = [1, 2, 3] >>> list(reversed(a)) == a[::-1] True Choose reversed() when you only need to iterate once; use [::-1] when you need a concrete reversed list.

Key Distinctions:
• This question’s focus is best captured by: reversed() and [::-1] both reverse a sequence, but they work differently internally.
• The contrast that matters for correctness is summarized by: Key concepts: • reversed(a) returns a reverse iterator (lazy, O(1) memory) • a[::-1] creates a new reversed list (eager, O(n) memory) • When compared as lists, they are equal • reversed() is more memory-efficient for large sequences How it works: • a = [1, 2, 3] • list(reversed(a)) → [3, 2, 1] • a[::-1] → [3, 2, 1] • [3, 2, 1] == [3, 2, 1] → True Example: >>> a = [1, 2, 3] >>> list(reversed(a)) == a[::-1] True Choose reversed() when you only need to iterate once; use [::-1] when you need a concrete reversed list.

How It Works:
• Python follows the rule implied by: reversed() and [::-1] both reverse a sequence, but they work differently internally.
• The outcome you observe follows from: Key concepts: • reversed(a) returns a reverse iterator (lazy, O(1) memory) • a[::-1] creates a new reversed list (eager, O(n) memory) • When compared as lists, they are equal • reversed() is more memory-efficient for large sequences How it works: • a = [1, 2, 3] • list(reversed(a)) → [3, 2, 1] • a[::-1] → [3, 2, 1] • [3, 2, 1] == [3, 2, 1] → True Example: >>> a = [1, 2, 3] >>> list(reversed(a)) == a[::-1] True Choose reversed() when you only need to iterate once; use [::-1] when you need a concrete reversed list.

Step-by-Step Execution:
1. Start from the construct described in: reversed() and [::-1] both reverse a sequence, but they work differently internally.
2. Resolve the subparts implied by: Key concepts: • reversed(a) returns a reverse iterator (lazy, O(1) memory) • a[::-1] creates a new reversed list (eager, O(n) memory) • When compared as lists, they are equal • reversed() is more memory-efficient for large sequences How it works: • a = [1, 2, 3] • list(reversed(a)) → [3, 2, 1] • a[::-1] → [3, 2, 1] • [3, 2, 1] == [3, 2, 1] → True Example: >>> a = [1, 2, 3] >>> list(reversed(a)) == a[::-1] True Choose reversed() when you only need to iterate once; use [::-1] when you need a concrete reversed list.
3. Apply the core semantics highlighted in: Key concepts: • reversed(a) returns a reverse iterator (lazy, O(1) memory) • a[::-1] creates a new reversed list (eager, O(n) memory) • When compared as lists, they are equal • reversed() is more memory-efficient for large sequences How it works: • a = [1, 2, 3] • list(reversed(a)) → [3, 2, 1] • a[::-1] → [3, 2, 1] • [3, 2, 1] == [3, 2, 1] → True Example: >>> a = [1, 2, 3] >>> list(reversed(a)) == a[::-1] True Choose reversed() when you only need to iterate once; use [::-1] when you need a concrete reversed list.
4. Confirm the final result aligns with: Key concepts: • reversed(a) returns a reverse iterator (lazy, O(1) memory) • a[::-1] creates a new reversed list (eager, O(n) memory) • When compared as lists, they are equal • reversed() is more memory-efficient for large sequences How it works: • a = [1, 2, 3] • list(reversed(a)) → [3, 2, 1] • a[::-1] → [3, 2, 1] • [3, 2, 1] == [3, 2, 1] → True Example: >>> a = [1, 2, 3] >>> list(reversed(a)) == a[::-1] True Choose reversed() when you only need to iterate once; use [::-1] when you need a concrete reversed list.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • reversed(a) returns a reverse iterator (lazy, O(1) memory) • a[::-1] creates a new reversed list (eager, O(n) memory) • When compared as lists, they are equal • reversed() is more memory-efficient for large sequences How it works: • a = [1, 2, 3] • list(reversed(a)) → [3, 2, 1] • a[::-1] → [3, 2, 1] • [3, 2, 1] == [3, 2, 1] → True Example: >>> a = [1, 2, 3] >>> list(reversed(a)) == a[::-1] True Choose reversed() when you only need to iterate once; use [::-1] when you need a concrete reversed list.
2. Apply the construct’s main rule next, matching: reversed() and [::-1] both reverse a sequence, but they work differently internally.
3. Produce any intermediate values that Key concepts: • reversed(a) returns a reverse iterator (lazy, O(1) memory) • a[::-1] creates a new reversed list (eager, O(n) memory) • When compared as lists, they are equal • reversed() is more memory-efficient for large sequences How it works: • a = [1, 2, 3] • list(reversed(a)) → [3, 2, 1] • a[::-1] → [3, 2, 1] • [3, 2, 1] == [3, 2, 1] → True Example: >>> a = [1, 2, 3] >>> list(reversed(a)) == a[::-1] True Choose reversed() when you only need to iterate once; use [::-1] when you need a concrete reversed list. relies on
4. Finish by returning/assembling the final output named by: Key concepts: • reversed(a) returns a reverse iterator (lazy, O(1) memory) • a[::-1] creates a new reversed list (eager, O(n) memory) • When compared as lists, they are equal • reversed() is more memory-efficient for large sequences How it works: • a = [1, 2, 3] • list(reversed(a)) → [3, 2, 1] • a[::-1] → [3, 2, 1] • [3, 2, 1] == [3, 2, 1] → True Example: >>> a = [1, 2, 3] >>> list(reversed(a)) == a[::-1] True Choose reversed() when you only need to iterate once; use [::-1] when you need a concrete reversed list.
5. Use the result only after the full construct has completed, per: reversed() and [::-1] both reverse a sequence, but they work differently internally.

Common Use Cases:
• Teaching this behavior using the mental model: reversed() and [::-1] both reverse a sequence, but they work differently internally.
• Debugging when the observed value should match the expectation in: Key concepts: • reversed(a) returns a reverse iterator (lazy, O(1) memory) • a[::-1] creates a new reversed list (eager, O(n) memory) • When compared as lists, they are equal • reversed() is more memory-efficient for large sequences How it works: • a = [1, 2, 3] • list(reversed(a)) → [3, 2, 1] • a[::-1] → [3, 2, 1] • [3, 2, 1] == [3, 2, 1] → True Example: >>> a = [1, 2, 3] >>> list(reversed(a)) == a[::-1] True Choose reversed() when you only need to iterate once; use [::-1] when you need a concrete reversed list.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • reversed(a) returns a reverse iterator (lazy, O(1) memory) • a[::-1] creates a new reversed list (eager, O(n) memory) • When compared as lists, they are equal • reversed() is more memory-efficient for large sequences How it works: • a = [1, 2, 3] • list(reversed(a)) → [3, 2, 1] • a[::-1] → [3, 2, 1] • [3, 2, 1] == [3, 2, 1] → True Example: >>> a = [1, 2, 3] >>> list(reversed(a)) == a[::-1] True Choose reversed() when you only need to iterate once; use [::-1] when you need a concrete reversed list., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • reversed(a) returns a reverse iterator (lazy, O(1) memory) • a[::-1] creates a new reversed list (eager, O(n) memory) • When compared as lists, they are equal • reversed() is more memory-efficient for large sequences How it works: • a = [1, 2, 3] • list(reversed(a)) → [3, 2, 1] • a[::-1] → [3, 2, 1] • [3, 2, 1] == [3, 2, 1] → True Example: >>> a = [1, 2, 3] >>> list(reversed(a)) == a[::-1] True Choose reversed() when you only need to iterate once; use [::-1] when you need a concrete reversed list. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • reversed(a) returns a reverse iterator (lazy, O(1) memory) • a[::-1] creates a new reversed list (eager, O(n) memory) • When compared as lists, they are equal • reversed() is more memory-efficient for large sequences How it works: • a = [1, 2, 3] • list(reversed(a)) → [3, 2, 1] • a[::-1] → [3, 2, 1] • [3, 2, 1] == [3, 2, 1] → True Example: >>> a = [1, 2, 3] >>> list(reversed(a)) == a[::-1] True Choose reversed() when you only need to iterate once; use [::-1] when you need a concrete reversed list..
• When performance matters, prefer the simplest pattern that still implements: reversed() and [::-1] both reverse a sequence, but they work differently internally..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: reversed() and [::-1] both reverse a sequence, but they work differently internally..

Notes:
• For maintainable code, make the intent behind: Key concepts: • reversed(a) returns a reverse iterator (lazy, O(1) memory) • a[::-1] creates a new reversed list (eager, O(n) memory) • When compared as lists, they are equal • reversed() is more memory-efficient for large sequences How it works: • a = [1, 2, 3] • list(reversed(a)) → [3, 2, 1] • a[::-1] → [3, 2, 1] • [3, 2, 1] == [3, 2, 1] → True Example: >>> a = [1, 2, 3] >>> list(reversed(a)) == a[::-1] True Choose reversed() when you only need to iterate once; use [::-1] when you need a concrete reversed list. explicit (and test it with inputs like those in this prompt).`
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
• Use b = a[::-1] or b = list(reversed(a)) to get a reversed copy.

Key Distinctions:
• This question’s focus is best captured by: list.reverse() modifies the list in place and returns None.
• The contrast that matters for correctness is summarized by: This is a common pattern for in-place methods in Python.

How It Works:
• Python follows the rule implied by: list.reverse() modifies the list in place and returns None.
• The outcome you observe follows from: Use b = a[::-1] or b = list(reversed(a)) to get a reversed copy.

Step-by-Step Execution:
1. Start from the construct described in: list.reverse() modifies the list in place and returns None.
2. Resolve the subparts implied by: This is a common pattern for in-place methods in Python.
3. Apply the core semantics highlighted in: Key concepts: • .reverse() modifies the list in place • Returns None (not the reversed list) • O(n) time, O(1) extra space • Different from reversed() which returns an iterator How it works: • a = [1, 2, 3] • a.reverse() swaps elements in place: 1↔3 • a → [3, 2, 1] • The method returns None Example: >>> a = [1, 2, 3] >>> a.reverse() >>> a [3, 2, 1] Common mistake: b = a.reverse() — b is None, not [3, 2, 1].
4. Confirm the final result aligns with: Use b = a[::-1] or b = list(reversed(a)) to get a reversed copy.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: This is a common pattern for in-place methods in Python.
2. Apply the construct’s main rule next, matching: list.reverse() modifies the list in place and returns None.
3. Produce any intermediate values that Use b = a[::-1] or b = list(reversed(a)) to get a reversed copy. relies on
4. Finish by returning/assembling the final output named by: Use b = a[::-1] or b = list(reversed(a)) to get a reversed copy.
5. Use the result only after the full construct has completed, per: list.reverse() modifies the list in place and returns None.

Common Use Cases:
• Teaching this behavior using the mental model: list.reverse() modifies the list in place and returns None.
• Debugging when the observed value should match the expectation in: Use b = a[::-1] or b = list(reversed(a)) to get a reversed copy.

Edge Cases:
• If inputs vary from the situation described in: This is a common pattern for in-place methods in Python., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • .reverse() modifies the list in place • Returns None (not the reversed list) • O(n) time, O(1) extra space • Different from reversed() which returns an iterator How it works: • a = [1, 2, 3] • a.reverse() swaps elements in place: 1↔3 • a → [3, 2, 1] • The method returns None Example: >>> a = [1, 2, 3] >>> a.reverse() >>> a [3, 2, 1] Common mistake: b = a.reverse() — b is None, not [3, 2, 1]. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Use b = a[::-1] or b = list(reversed(a)) to get a reversed copy..
• When performance matters, prefer the simplest pattern that still implements: list.reverse() modifies the list in place and returns None..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: list.reverse() modifies the list in place and returns None..

Notes:
• For maintainable code, make the intent behind: This is a common pattern for in-place methods in Python. explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • .reverse() returns None — Python convention for in-place methods • .sort() also returns None • .append(), .extend(), .insert() all return None • This prevents chaining like a.reverse().sort() (it would fail) How it works: • a.reverse() reverses a in place and returns None • None is None → True • a is now [3, 2, 1], but the return value is None Example: >>> a = [1, 2, 3] >>> result = a.reverse() >>> result is None True >>> a [3, 2, 1] This convention was a deliberate design choice by Guido van Rossum to make mutation explicit and prevent silent errors.

Key Distinctions:
• This question’s focus is best captured by: In Python, methods that modify a collection in place conventionally return None to avoid confusion about whether a new object was created.
• The contrast that matters for correctness is summarized by: Key concepts: • .reverse() returns None — Python convention for in-place methods • .sort() also returns None • .append(), .extend(), .insert() all return None • This prevents chaining like a.reverse().sort() (it would fail) How it works: • a.reverse() reverses a in place and returns None • None is None → True • a is now [3, 2, 1], but the return value is None Example: >>> a = [1, 2, 3] >>> result = a.reverse() >>> result is None True >>> a [3, 2, 1] This convention was a deliberate design choice by Guido van Rossum to make mutation explicit and prevent silent errors.

How It Works:
• Python follows the rule implied by: In Python, methods that modify a collection in place conventionally return None to avoid confusion about whether a new object was created.
• The outcome you observe follows from: Key concepts: • .reverse() returns None — Python convention for in-place methods • .sort() also returns None • .append(), .extend(), .insert() all return None • This prevents chaining like a.reverse().sort() (it would fail) How it works: • a.reverse() reverses a in place and returns None • None is None → True • a is now [3, 2, 1], but the return value is None Example: >>> a = [1, 2, 3] >>> result = a.reverse() >>> result is None True >>> a [3, 2, 1] This convention was a deliberate design choice by Guido van Rossum to make mutation explicit and prevent silent errors.

Step-by-Step Execution:
1. Start from the construct described in: In Python, methods that modify a collection in place conventionally return None to avoid confusion about whether a new object was created.
2. Resolve the subparts implied by: Key concepts: • .reverse() returns None — Python convention for in-place methods • .sort() also returns None • .append(), .extend(), .insert() all return None • This prevents chaining like a.reverse().sort() (it would fail) How it works: • a.reverse() reverses a in place and returns None • None is None → True • a is now [3, 2, 1], but the return value is None Example: >>> a = [1, 2, 3] >>> result = a.reverse() >>> result is None True >>> a [3, 2, 1] This convention was a deliberate design choice by Guido van Rossum to make mutation explicit and prevent silent errors.
3. Apply the core semantics highlighted in: Key concepts: • .reverse() returns None — Python convention for in-place methods • .sort() also returns None • .append(), .extend(), .insert() all return None • This prevents chaining like a.reverse().sort() (it would fail) How it works: • a.reverse() reverses a in place and returns None • None is None → True • a is now [3, 2, 1], but the return value is None Example: >>> a = [1, 2, 3] >>> result = a.reverse() >>> result is None True >>> a [3, 2, 1] This convention was a deliberate design choice by Guido van Rossum to make mutation explicit and prevent silent errors.
4. Confirm the final result aligns with: Key concepts: • .reverse() returns None — Python convention for in-place methods • .sort() also returns None • .append(), .extend(), .insert() all return None • This prevents chaining like a.reverse().sort() (it would fail) How it works: • a.reverse() reverses a in place and returns None • None is None → True • a is now [3, 2, 1], but the return value is None Example: >>> a = [1, 2, 3] >>> result = a.reverse() >>> result is None True >>> a [3, 2, 1] This convention was a deliberate design choice by Guido van Rossum to make mutation explicit and prevent silent errors.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • .reverse() returns None — Python convention for in-place methods • .sort() also returns None • .append(), .extend(), .insert() all return None • This prevents chaining like a.reverse().sort() (it would fail) How it works: • a.reverse() reverses a in place and returns None • None is None → True • a is now [3, 2, 1], but the return value is None Example: >>> a = [1, 2, 3] >>> result = a.reverse() >>> result is None True >>> a [3, 2, 1] This convention was a deliberate design choice by Guido van Rossum to make mutation explicit and prevent silent errors.
2. Apply the construct’s main rule next, matching: In Python, methods that modify a collection in place conventionally return None to avoid confusion about whether a new object was created.
3. Produce any intermediate values that Key concepts: • .reverse() returns None — Python convention for in-place methods • .sort() also returns None • .append(), .extend(), .insert() all return None • This prevents chaining like a.reverse().sort() (it would fail) How it works: • a.reverse() reverses a in place and returns None • None is None → True • a is now [3, 2, 1], but the return value is None Example: >>> a = [1, 2, 3] >>> result = a.reverse() >>> result is None True >>> a [3, 2, 1] This convention was a deliberate design choice by Guido van Rossum to make mutation explicit and prevent silent errors. relies on
4. Finish by returning/assembling the final output named by: Key concepts: • .reverse() returns None — Python convention for in-place methods • .sort() also returns None • .append(), .extend(), .insert() all return None • This prevents chaining like a.reverse().sort() (it would fail) How it works: • a.reverse() reverses a in place and returns None • None is None → True • a is now [3, 2, 1], but the return value is None Example: >>> a = [1, 2, 3] >>> result = a.reverse() >>> result is None True >>> a [3, 2, 1] This convention was a deliberate design choice by Guido van Rossum to make mutation explicit and prevent silent errors.
5. Use the result only after the full construct has completed, per: In Python, methods that modify a collection in place conventionally return None to avoid confusion about whether a new object was created.

Common Use Cases:
• Teaching this behavior using the mental model: In Python, methods that modify a collection in place conventionally return None to avoid confusion about whether a new object was created.
• Debugging when the observed value should match the expectation in: Key concepts: • .reverse() returns None — Python convention for in-place methods • .sort() also returns None • .append(), .extend(), .insert() all return None • This prevents chaining like a.reverse().sort() (it would fail) How it works: • a.reverse() reverses a in place and returns None • None is None → True • a is now [3, 2, 1], but the return value is None Example: >>> a = [1, 2, 3] >>> result = a.reverse() >>> result is None True >>> a [3, 2, 1] This convention was a deliberate design choice by Guido van Rossum to make mutation explicit and prevent silent errors.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • .reverse() returns None — Python convention for in-place methods • .sort() also returns None • .append(), .extend(), .insert() all return None • This prevents chaining like a.reverse().sort() (it would fail) How it works: • a.reverse() reverses a in place and returns None • None is None → True • a is now [3, 2, 1], but the return value is None Example: >>> a = [1, 2, 3] >>> result = a.reverse() >>> result is None True >>> a [3, 2, 1] This convention was a deliberate design choice by Guido van Rossum to make mutation explicit and prevent silent errors., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • .reverse() returns None — Python convention for in-place methods • .sort() also returns None • .append(), .extend(), .insert() all return None • This prevents chaining like a.reverse().sort() (it would fail) How it works: • a.reverse() reverses a in place and returns None • None is None → True • a is now [3, 2, 1], but the return value is None Example: >>> a = [1, 2, 3] >>> result = a.reverse() >>> result is None True >>> a [3, 2, 1] This convention was a deliberate design choice by Guido van Rossum to make mutation explicit and prevent silent errors. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • .reverse() returns None — Python convention for in-place methods • .sort() also returns None • .append(), .extend(), .insert() all return None • This prevents chaining like a.reverse().sort() (it would fail) How it works: • a.reverse() reverses a in place and returns None • None is None → True • a is now [3, 2, 1], but the return value is None Example: >>> a = [1, 2, 3] >>> result = a.reverse() >>> result is None True >>> a [3, 2, 1] This convention was a deliberate design choice by Guido van Rossum to make mutation explicit and prevent silent errors..
• When performance matters, prefer the simplest pattern that still implements: In Python, methods that modify a collection in place conventionally return None to avoid confusion about whether a new object was created..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: In Python, methods that modify a collection in place conventionally return None to avoid confusion about whether a new object was created..

Notes:
• For maintainable code, make the intent behind: Key concepts: • .reverse() returns None — Python convention for in-place methods • .sort() also returns None • .append(), .extend(), .insert() all return None • This prevents chaining like a.reverse().sort() (it would fail) How it works: • a.reverse() reverses a in place and returns None • None is None → True • a is now [3, 2, 1], but the return value is None Example: >>> a = [1, 2, 3] >>> result = a.reverse() >>> result is None True >>> a [3, 2, 1] This convention was a deliberate design choice by Guido van Rossum to make mutation explicit and prevent silent errors. explicit (and test it with inputs like those in this prompt).`
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
• How it works: • a = [] • a.extend(range(5)) → iterates range(5): 0, 1, 2, 3, 4 • Each value is appended: a → [0, 1, 2, 3, 4] Example: >>> a = [] >>> a.extend(range(5)) >>> a [0, 1, 2, 3, 4] Compare: a.append(range(5)) would give [range(0, 5)] — the range object itself as a single element.

Key Distinctions:
• This question’s focus is best captured by: list.extend() takes any iterable and adds each of its elements to the list.
• The contrast that matters for correctness is summarized by: It does not nest the iterable — it flattens one level.

How It Works:
• Python follows the rule implied by: list.extend() takes any iterable and adds each of its elements to the list.
• The outcome you observe follows from: How it works: • a = [] • a.extend(range(5)) → iterates range(5): 0, 1, 2, 3, 4 • Each value is appended: a → [0, 1, 2, 3, 4] Example: >>> a = [] >>> a.extend(range(5)) >>> a [0, 1, 2, 3, 4] Compare: a.append(range(5)) would give [range(0, 5)] — the range object itself as a single element.

Step-by-Step Execution:
1. Start from the construct described in: list.extend() takes any iterable and adds each of its elements to the list.
2. Resolve the subparts implied by: It does not nest the iterable — it flattens one level.
3. Apply the core semantics highlighted in: Key concepts: • extend() iterates over its argument • Each element from the iterable is appended individually • Different from append(), which would add the whole object as one element • Works with any iterable: range, generator, list, tuple, string, etc.
4. Confirm the final result aligns with: How it works: • a = [] • a.extend(range(5)) → iterates range(5): 0, 1, 2, 3, 4 • Each value is appended: a → [0, 1, 2, 3, 4] Example: >>> a = [] >>> a.extend(range(5)) >>> a [0, 1, 2, 3, 4] Compare: a.append(range(5)) would give [range(0, 5)] — the range object itself as a single element.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: It does not nest the iterable — it flattens one level.
2. Apply the construct’s main rule next, matching: list.extend() takes any iterable and adds each of its elements to the list.
3. Produce any intermediate values that How it works: • a = [] • a.extend(range(5)) → iterates range(5): 0, 1, 2, 3, 4 • Each value is appended: a → [0, 1, 2, 3, 4] Example: >>> a = [] >>> a.extend(range(5)) >>> a [0, 1, 2, 3, 4] Compare: a.append(range(5)) would give [range(0, 5)] — the range object itself as a single element. relies on
4. Finish by returning/assembling the final output named by: How it works: • a = [] • a.extend(range(5)) → iterates range(5): 0, 1, 2, 3, 4 • Each value is appended: a → [0, 1, 2, 3, 4] Example: >>> a = [] >>> a.extend(range(5)) >>> a [0, 1, 2, 3, 4] Compare: a.append(range(5)) would give [range(0, 5)] — the range object itself as a single element.
5. Use the result only after the full construct has completed, per: list.extend() takes any iterable and adds each of its elements to the list.

Common Use Cases:
• Teaching this behavior using the mental model: list.extend() takes any iterable and adds each of its elements to the list.
• Debugging when the observed value should match the expectation in: How it works: • a = [] • a.extend(range(5)) → iterates range(5): 0, 1, 2, 3, 4 • Each value is appended: a → [0, 1, 2, 3, 4] Example: >>> a = [] >>> a.extend(range(5)) >>> a [0, 1, 2, 3, 4] Compare: a.append(range(5)) would give [range(0, 5)] — the range object itself as a single element.

Edge Cases:
• If inputs vary from the situation described in: It does not nest the iterable — it flattens one level., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • extend() iterates over its argument • Each element from the iterable is appended individually • Different from append(), which would add the whole object as one element • Works with any iterable: range, generator, list, tuple, string, etc. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: How it works: • a = [] • a.extend(range(5)) → iterates range(5): 0, 1, 2, 3, 4 • Each value is appended: a → [0, 1, 2, 3, 4] Example: >>> a = [] >>> a.extend(range(5)) >>> a [0, 1, 2, 3, 4] Compare: a.append(range(5)) would give [range(0, 5)] — the range object itself as a single element..
• When performance matters, prefer the simplest pattern that still implements: list.extend() takes any iterable and adds each of its elements to the list..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: list.extend() takes any iterable and adds each of its elements to the list..

Notes:
• For maintainable code, make the intent behind: It does not nest the iterable — it flattens one level. explicit (and test it with inputs like those in this prompt).`
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
• (until out of range) • Works on any sequence (list, string, tuple) How it works: • list(range(10)) = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] • [::3] selects indices 0, 3, 6, 9 • Elements: 0, 3, 6, 9 • Result: [0, 3, 6, 9] Example: >>> list(range(10))[::3] [0, 3, 6, 9] >>> "abcdefghij"[::3] 'adgj' The step value determines the gap between selected indices.

Key Distinctions:
• This question’s focus is best captured by: [::3] selects every 3rd element from the sequence, starting at index 0.
• The contrast that matters for correctness is summarized by: Key concepts: • [::3] means start=0, stop=end, step=3 • Selects indices 0, 3, 6, 9, 12, ...

How It Works:
• Python follows the rule implied by: [::3] selects every 3rd element from the sequence, starting at index 0.
• The outcome you observe follows from: (until out of range) • Works on any sequence (list, string, tuple) How it works: • list(range(10)) = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] • [::3] selects indices 0, 3, 6, 9 • Elements: 0, 3, 6, 9 • Result: [0, 3, 6, 9] Example: >>> list(range(10))[::3] [0, 3, 6, 9] >>> "abcdefghij"[::3] 'adgj' The step value determines the gap between selected indices.

Step-by-Step Execution:
1. Start from the construct described in: [::3] selects every 3rd element from the sequence, starting at index 0.
2. Resolve the subparts implied by: Key concepts: • [::3] means start=0, stop=end, step=3 • Selects indices 0, 3, 6, 9, 12, ...
3. Apply the core semantics highlighted in: (until out of range) • Works on any sequence (list, string, tuple) How it works: • list(range(10)) = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] • [::3] selects indices 0, 3, 6, 9 • Elements: 0, 3, 6, 9 • Result: [0, 3, 6, 9] Example: >>> list(range(10))[::3] [0, 3, 6, 9] >>> "abcdefghij"[::3] 'adgj' The step value determines the gap between selected indices.
4. Confirm the final result aligns with: (until out of range) • Works on any sequence (list, string, tuple) How it works: • list(range(10)) = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] • [::3] selects indices 0, 3, 6, 9 • Elements: 0, 3, 6, 9 • Result: [0, 3, 6, 9] Example: >>> list(range(10))[::3] [0, 3, 6, 9] >>> "abcdefghij"[::3] 'adgj' The step value determines the gap between selected indices.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • [::3] means start=0, stop=end, step=3 • Selects indices 0, 3, 6, 9, 12, ...
2. Apply the construct’s main rule next, matching: [::3] selects every 3rd element from the sequence, starting at index 0.
3. Produce any intermediate values that (until out of range) • Works on any sequence (list, string, tuple) How it works: • list(range(10)) = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] • [::3] selects indices 0, 3, 6, 9 • Elements: 0, 3, 6, 9 • Result: [0, 3, 6, 9] Example: >>> list(range(10))[::3] [0, 3, 6, 9] >>> "abcdefghij"[::3] 'adgj' The step value determines the gap between selected indices. relies on
4. Finish by returning/assembling the final output named by: (until out of range) • Works on any sequence (list, string, tuple) How it works: • list(range(10)) = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] • [::3] selects indices 0, 3, 6, 9 • Elements: 0, 3, 6, 9 • Result: [0, 3, 6, 9] Example: >>> list(range(10))[::3] [0, 3, 6, 9] >>> "abcdefghij"[::3] 'adgj' The step value determines the gap between selected indices.
5. Use the result only after the full construct has completed, per: [::3] selects every 3rd element from the sequence, starting at index 0.

Common Use Cases:
• Teaching this behavior using the mental model: [::3] selects every 3rd element from the sequence, starting at index 0.
• Debugging when the observed value should match the expectation in: (until out of range) • Works on any sequence (list, string, tuple) How it works: • list(range(10)) = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] • [::3] selects indices 0, 3, 6, 9 • Elements: 0, 3, 6, 9 • Result: [0, 3, 6, 9] Example: >>> list(range(10))[::3] [0, 3, 6, 9] >>> "abcdefghij"[::3] 'adgj' The step value determines the gap between selected indices.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • [::3] means start=0, stop=end, step=3 • Selects indices 0, 3, 6, 9, 12, ..., the behavior can change.
• When the construct’s assumptions differ, the rule in: (until out of range) • Works on any sequence (list, string, tuple) How it works: • list(range(10)) = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] • [::3] selects indices 0, 3, 6, 9 • Elements: 0, 3, 6, 9 • Result: [0, 3, 6, 9] Example: >>> list(range(10))[::3] [0, 3, 6, 9] >>> "abcdefghij"[::3] 'adgj' The step value determines the gap between selected indices. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: (until out of range) • Works on any sequence (list, string, tuple) How it works: • list(range(10)) = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] • [::3] selects indices 0, 3, 6, 9 • Elements: 0, 3, 6, 9 • Result: [0, 3, 6, 9] Example: >>> list(range(10))[::3] [0, 3, 6, 9] >>> "abcdefghij"[::3] 'adgj' The step value determines the gap between selected indices..
• When performance matters, prefer the simplest pattern that still implements: [::3] selects every 3rd element from the sequence, starting at index 0..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: [::3] selects every 3rd element from the sequence, starting at index 0..

Notes:
• For maintainable code, make the intent behind: Key concepts: • [::3] means start=0, stop=end, step=3 • Selects indices 0, 3, 6, 9, 12, ... explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • isinstance(x, list) checks if x is a list instance • sum(1 for ...) counts how many items satisfy the condition • Only [2, 3] is a list — 1 is an int, (4, 5) is a tuple • isinstance checks the exact type (or subclass) How it works: • a = [1, [2, 3], (4, 5)] • x=1: isinstance(1, list) → False • x=[2,3]: isinstance([2,3], list) → True → contributes 1 • x=(4,5): isinstance((4,5), list) → False • sum of [1] = 1 Example: >>> a = [1, [2, 3], (4, 5)] >>> sum(1 for x in a if isinstance(x, list)) 1 To count both lists and tuples: isinstance(x, (list, tuple)) with a tuple of types.

Key Distinctions:
• This question’s focus is best captured by: This uses a generator expression with isinstance() to count how many elements are lists.
• The contrast that matters for correctness is summarized by: Key concepts: • isinstance(x, list) checks if x is a list instance • sum(1 for ...) counts how many items satisfy the condition • Only [2, 3] is a list — 1 is an int, (4, 5) is a tuple • isinstance checks the exact type (or subclass) How it works: • a = [1, [2, 3], (4, 5)] • x=1: isinstance(1, list) → False • x=[2,3]: isinstance([2,3], list) → True → contributes 1 • x=(4,5): isinstance((4,5), list) → False • sum of [1] = 1 Example: >>> a = [1, [2, 3], (4, 5)] >>> sum(1 for x in a if isinstance(x, list)) 1 To count both lists and tuples: isinstance(x, (list, tuple)) with a tuple of types.

How It Works:
• Python follows the rule implied by: This uses a generator expression with isinstance() to count how many elements are lists.
• The outcome you observe follows from: Key concepts: • isinstance(x, list) checks if x is a list instance • sum(1 for ...) counts how many items satisfy the condition • Only [2, 3] is a list — 1 is an int, (4, 5) is a tuple • isinstance checks the exact type (or subclass) How it works: • a = [1, [2, 3], (4, 5)] • x=1: isinstance(1, list) → False • x=[2,3]: isinstance([2,3], list) → True → contributes 1 • x=(4,5): isinstance((4,5), list) → False • sum of [1] = 1 Example: >>> a = [1, [2, 3], (4, 5)] >>> sum(1 for x in a if isinstance(x, list)) 1 To count both lists and tuples: isinstance(x, (list, tuple)) with a tuple of types.

Step-by-Step Execution:
1. Start from the construct described in: This uses a generator expression with isinstance() to count how many elements are lists.
2. Resolve the subparts implied by: Key concepts: • isinstance(x, list) checks if x is a list instance • sum(1 for ...) counts how many items satisfy the condition • Only [2, 3] is a list — 1 is an int, (4, 5) is a tuple • isinstance checks the exact type (or subclass) How it works: • a = [1, [2, 3], (4, 5)] • x=1: isinstance(1, list) → False • x=[2,3]: isinstance([2,3], list) → True → contributes 1 • x=(4,5): isinstance((4,5), list) → False • sum of [1] = 1 Example: >>> a = [1, [2, 3], (4, 5)] >>> sum(1 for x in a if isinstance(x, list)) 1 To count both lists and tuples: isinstance(x, (list, tuple)) with a tuple of types.
3. Apply the core semantics highlighted in: Key concepts: • isinstance(x, list) checks if x is a list instance • sum(1 for ...) counts how many items satisfy the condition • Only [2, 3] is a list — 1 is an int, (4, 5) is a tuple • isinstance checks the exact type (or subclass) How it works: • a = [1, [2, 3], (4, 5)] • x=1: isinstance(1, list) → False • x=[2,3]: isinstance([2,3], list) → True → contributes 1 • x=(4,5): isinstance((4,5), list) → False • sum of [1] = 1 Example: >>> a = [1, [2, 3], (4, 5)] >>> sum(1 for x in a if isinstance(x, list)) 1 To count both lists and tuples: isinstance(x, (list, tuple)) with a tuple of types.
4. Confirm the final result aligns with: Key concepts: • isinstance(x, list) checks if x is a list instance • sum(1 for ...) counts how many items satisfy the condition • Only [2, 3] is a list — 1 is an int, (4, 5) is a tuple • isinstance checks the exact type (or subclass) How it works: • a = [1, [2, 3], (4, 5)] • x=1: isinstance(1, list) → False • x=[2,3]: isinstance([2,3], list) → True → contributes 1 • x=(4,5): isinstance((4,5), list) → False • sum of [1] = 1 Example: >>> a = [1, [2, 3], (4, 5)] >>> sum(1 for x in a if isinstance(x, list)) 1 To count both lists and tuples: isinstance(x, (list, tuple)) with a tuple of types.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • isinstance(x, list) checks if x is a list instance • sum(1 for ...) counts how many items satisfy the condition • Only [2, 3] is a list — 1 is an int, (4, 5) is a tuple • isinstance checks the exact type (or subclass) How it works: • a = [1, [2, 3], (4, 5)] • x=1: isinstance(1, list) → False • x=[2,3]: isinstance([2,3], list) → True → contributes 1 • x=(4,5): isinstance((4,5), list) → False • sum of [1] = 1 Example: >>> a = [1, [2, 3], (4, 5)] >>> sum(1 for x in a if isinstance(x, list)) 1 To count both lists and tuples: isinstance(x, (list, tuple)) with a tuple of types.
2. Apply the construct’s main rule next, matching: This uses a generator expression with isinstance() to count how many elements are lists.
3. Produce any intermediate values that Key concepts: • isinstance(x, list) checks if x is a list instance • sum(1 for ...) counts how many items satisfy the condition • Only [2, 3] is a list — 1 is an int, (4, 5) is a tuple • isinstance checks the exact type (or subclass) How it works: • a = [1, [2, 3], (4, 5)] • x=1: isinstance(1, list) → False • x=[2,3]: isinstance([2,3], list) → True → contributes 1 • x=(4,5): isinstance((4,5), list) → False • sum of [1] = 1 Example: >>> a = [1, [2, 3], (4, 5)] >>> sum(1 for x in a if isinstance(x, list)) 1 To count both lists and tuples: isinstance(x, (list, tuple)) with a tuple of types. relies on
4. Finish by returning/assembling the final output named by: Key concepts: • isinstance(x, list) checks if x is a list instance • sum(1 for ...) counts how many items satisfy the condition • Only [2, 3] is a list — 1 is an int, (4, 5) is a tuple • isinstance checks the exact type (or subclass) How it works: • a = [1, [2, 3], (4, 5)] • x=1: isinstance(1, list) → False • x=[2,3]: isinstance([2,3], list) → True → contributes 1 • x=(4,5): isinstance((4,5), list) → False • sum of [1] = 1 Example: >>> a = [1, [2, 3], (4, 5)] >>> sum(1 for x in a if isinstance(x, list)) 1 To count both lists and tuples: isinstance(x, (list, tuple)) with a tuple of types.
5. Use the result only after the full construct has completed, per: This uses a generator expression with isinstance() to count how many elements are lists.

Common Use Cases:
• Teaching this behavior using the mental model: This uses a generator expression with isinstance() to count how many elements are lists.
• Debugging when the observed value should match the expectation in: Key concepts: • isinstance(x, list) checks if x is a list instance • sum(1 for ...) counts how many items satisfy the condition • Only [2, 3] is a list — 1 is an int, (4, 5) is a tuple • isinstance checks the exact type (or subclass) How it works: • a = [1, [2, 3], (4, 5)] • x=1: isinstance(1, list) → False • x=[2,3]: isinstance([2,3], list) → True → contributes 1 • x=(4,5): isinstance((4,5), list) → False • sum of [1] = 1 Example: >>> a = [1, [2, 3], (4, 5)] >>> sum(1 for x in a if isinstance(x, list)) 1 To count both lists and tuples: isinstance(x, (list, tuple)) with a tuple of types.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • isinstance(x, list) checks if x is a list instance • sum(1 for ...) counts how many items satisfy the condition • Only [2, 3] is a list — 1 is an int, (4, 5) is a tuple • isinstance checks the exact type (or subclass) How it works: • a = [1, [2, 3], (4, 5)] • x=1: isinstance(1, list) → False • x=[2,3]: isinstance([2,3], list) → True → contributes 1 • x=(4,5): isinstance((4,5), list) → False • sum of [1] = 1 Example: >>> a = [1, [2, 3], (4, 5)] >>> sum(1 for x in a if isinstance(x, list)) 1 To count both lists and tuples: isinstance(x, (list, tuple)) with a tuple of types., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • isinstance(x, list) checks if x is a list instance • sum(1 for ...) counts how many items satisfy the condition • Only [2, 3] is a list — 1 is an int, (4, 5) is a tuple • isinstance checks the exact type (or subclass) How it works: • a = [1, [2, 3], (4, 5)] • x=1: isinstance(1, list) → False • x=[2,3]: isinstance([2,3], list) → True → contributes 1 • x=(4,5): isinstance((4,5), list) → False • sum of [1] = 1 Example: >>> a = [1, [2, 3], (4, 5)] >>> sum(1 for x in a if isinstance(x, list)) 1 To count both lists and tuples: isinstance(x, (list, tuple)) with a tuple of types. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • isinstance(x, list) checks if x is a list instance • sum(1 for ...) counts how many items satisfy the condition • Only [2, 3] is a list — 1 is an int, (4, 5) is a tuple • isinstance checks the exact type (or subclass) How it works: • a = [1, [2, 3], (4, 5)] • x=1: isinstance(1, list) → False • x=[2,3]: isinstance([2,3], list) → True → contributes 1 • x=(4,5): isinstance((4,5), list) → False • sum of [1] = 1 Example: >>> a = [1, [2, 3], (4, 5)] >>> sum(1 for x in a if isinstance(x, list)) 1 To count both lists and tuples: isinstance(x, (list, tuple)) with a tuple of types..
• When performance matters, prefer the simplest pattern that still implements: This uses a generator expression with isinstance() to count how many elements are lists..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This uses a generator expression with isinstance() to count how many elements are lists..

Notes:
• For maintainable code, make the intent behind: Key concepts: • isinstance(x, list) checks if x is a list instance • sum(1 for ...) counts how many items satisfy the condition • Only [2, 3] is a list — 1 is an int, (4, 5) is a tuple • isinstance checks the exact type (or subclass) How it works: • a = [1, [2, 3], (4, 5)] • x=1: isinstance(1, list) → False • x=[2,3]: isinstance([2,3], list) → True → contributes 1 • x=(4,5): isinstance((4,5), list) → False • sum of [1] = 1 Example: >>> a = [1, [2, 3], (4, 5)] >>> sum(1 for x in a if isinstance(x, list)) 1 To count both lists and tuples: isinstance(x, (list, tuple)) with a tuple of types. explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • The outer for iterates over sublists • The inner for iterates over elements in each sublist • Read left-to-right: outer loop first, then inner loop • This is the idiomatic way to flatten one level of nesting How it works: • sublist = [1, 2] → x = 1, x = 2 • sublist = [3, 4] → x = 3, x = 4 • sublist = [5] → x = 5 • Result: [1, 2, 3, 4, 5] Equivalent nested loop: result = [] for sublist in [[1,2],[3,4],[5]]: for x in sublist: result.append(x) Example: >>> [x for sublist in [[1,2],[3,4],[5]] for x in sublist] [1, 2, 3, 4, 5] For deeper nesting, use itertools.chain.from_iterable() or recursive flattening.

Key Distinctions:
• This question’s focus is best captured by: This nested list comprehension flattens a list of lists into a single list.
• The contrast that matters for correctness is summarized by: The order of the for clauses matches nested for loops.

How It Works:
• Python follows the rule implied by: This nested list comprehension flattens a list of lists into a single list.
• The outcome you observe follows from: Key concepts: • The outer for iterates over sublists • The inner for iterates over elements in each sublist • Read left-to-right: outer loop first, then inner loop • This is the idiomatic way to flatten one level of nesting How it works: • sublist = [1, 2] → x = 1, x = 2 • sublist = [3, 4] → x = 3, x = 4 • sublist = [5] → x = 5 • Result: [1, 2, 3, 4, 5] Equivalent nested loop: result = [] for sublist in [[1,2],[3,4],[5]]: for x in sublist: result.append(x) Example: >>> [x for sublist in [[1,2],[3,4],[5]] for x in sublist] [1, 2, 3, 4, 5] For deeper nesting, use itertools.chain.from_iterable() or recursive flattening.

Step-by-Step Execution:
1. Start from the construct described in: This nested list comprehension flattens a list of lists into a single list.
2. Resolve the subparts implied by: The order of the for clauses matches nested for loops.
3. Apply the core semantics highlighted in: Key concepts: • The outer for iterates over sublists • The inner for iterates over elements in each sublist • Read left-to-right: outer loop first, then inner loop • This is the idiomatic way to flatten one level of nesting How it works: • sublist = [1, 2] → x = 1, x = 2 • sublist = [3, 4] → x = 3, x = 4 • sublist = [5] → x = 5 • Result: [1, 2, 3, 4, 5] Equivalent nested loop: result = [] for sublist in [[1,2],[3,4],[5]]: for x in sublist: result.append(x) Example: >>> [x for sublist in [[1,2],[3,4],[5]] for x in sublist] [1, 2, 3, 4, 5] For deeper nesting, use itertools.chain.from_iterable() or recursive flattening.
4. Confirm the final result aligns with: Key concepts: • The outer for iterates over sublists • The inner for iterates over elements in each sublist • Read left-to-right: outer loop first, then inner loop • This is the idiomatic way to flatten one level of nesting How it works: • sublist = [1, 2] → x = 1, x = 2 • sublist = [3, 4] → x = 3, x = 4 • sublist = [5] → x = 5 • Result: [1, 2, 3, 4, 5] Equivalent nested loop: result = [] for sublist in [[1,2],[3,4],[5]]: for x in sublist: result.append(x) Example: >>> [x for sublist in [[1,2],[3,4],[5]] for x in sublist] [1, 2, 3, 4, 5] For deeper nesting, use itertools.chain.from_iterable() or recursive flattening.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The order of the for clauses matches nested for loops.
2. Apply the construct’s main rule next, matching: This nested list comprehension flattens a list of lists into a single list.
3. Produce any intermediate values that Key concepts: • The outer for iterates over sublists • The inner for iterates over elements in each sublist • Read left-to-right: outer loop first, then inner loop • This is the idiomatic way to flatten one level of nesting How it works: • sublist = [1, 2] → x = 1, x = 2 • sublist = [3, 4] → x = 3, x = 4 • sublist = [5] → x = 5 • Result: [1, 2, 3, 4, 5] Equivalent nested loop: result = [] for sublist in [[1,2],[3,4],[5]]: for x in sublist: result.append(x) Example: >>> [x for sublist in [[1,2],[3,4],[5]] for x in sublist] [1, 2, 3, 4, 5] For deeper nesting, use itertools.chain.from_iterable() or recursive flattening. relies on
4. Finish by returning/assembling the final output named by: Key concepts: • The outer for iterates over sublists • The inner for iterates over elements in each sublist • Read left-to-right: outer loop first, then inner loop • This is the idiomatic way to flatten one level of nesting How it works: • sublist = [1, 2] → x = 1, x = 2 • sublist = [3, 4] → x = 3, x = 4 • sublist = [5] → x = 5 • Result: [1, 2, 3, 4, 5] Equivalent nested loop: result = [] for sublist in [[1,2],[3,4],[5]]: for x in sublist: result.append(x) Example: >>> [x for sublist in [[1,2],[3,4],[5]] for x in sublist] [1, 2, 3, 4, 5] For deeper nesting, use itertools.chain.from_iterable() or recursive flattening.
5. Use the result only after the full construct has completed, per: This nested list comprehension flattens a list of lists into a single list.

Common Use Cases:
• Teaching this behavior using the mental model: This nested list comprehension flattens a list of lists into a single list.
• Debugging when the observed value should match the expectation in: Key concepts: • The outer for iterates over sublists • The inner for iterates over elements in each sublist • Read left-to-right: outer loop first, then inner loop • This is the idiomatic way to flatten one level of nesting How it works: • sublist = [1, 2] → x = 1, x = 2 • sublist = [3, 4] → x = 3, x = 4 • sublist = [5] → x = 5 • Result: [1, 2, 3, 4, 5] Equivalent nested loop: result = [] for sublist in [[1,2],[3,4],[5]]: for x in sublist: result.append(x) Example: >>> [x for sublist in [[1,2],[3,4],[5]] for x in sublist] [1, 2, 3, 4, 5] For deeper nesting, use itertools.chain.from_iterable() or recursive flattening.

Edge Cases:
• If inputs vary from the situation described in: The order of the for clauses matches nested for loops., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • The outer for iterates over sublists • The inner for iterates over elements in each sublist • Read left-to-right: outer loop first, then inner loop • This is the idiomatic way to flatten one level of nesting How it works: • sublist = [1, 2] → x = 1, x = 2 • sublist = [3, 4] → x = 3, x = 4 • sublist = [5] → x = 5 • Result: [1, 2, 3, 4, 5] Equivalent nested loop: result = [] for sublist in [[1,2],[3,4],[5]]: for x in sublist: result.append(x) Example: >>> [x for sublist in [[1,2],[3,4],[5]] for x in sublist] [1, 2, 3, 4, 5] For deeper nesting, use itertools.chain.from_iterable() or recursive flattening. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • The outer for iterates over sublists • The inner for iterates over elements in each sublist • Read left-to-right: outer loop first, then inner loop • This is the idiomatic way to flatten one level of nesting How it works: • sublist = [1, 2] → x = 1, x = 2 • sublist = [3, 4] → x = 3, x = 4 • sublist = [5] → x = 5 • Result: [1, 2, 3, 4, 5] Equivalent nested loop: result = [] for sublist in [[1,2],[3,4],[5]]: for x in sublist: result.append(x) Example: >>> [x for sublist in [[1,2],[3,4],[5]] for x in sublist] [1, 2, 3, 4, 5] For deeper nesting, use itertools.chain.from_iterable() or recursive flattening..
• When performance matters, prefer the simplest pattern that still implements: This nested list comprehension flattens a list of lists into a single list..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This nested list comprehension flattens a list of lists into a single list..

Notes:
• For maintainable code, make the intent behind: The order of the for clauses matches nested for loops. explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • bool inherits from int: class bool(int) • isinstance(True, int) → True • isinstance(False, int) → True • True == 1 and False == 0 in numeric contexts • This is by design — booleans were added to Python 2.3 as a subclass of int How it works: • all() checks if every element satisfies the condition • x=1: isinstance(1, int) → True • x=True: isinstance(True, int) → True (bool is subclass of int) • x=3: isinstance(3, int) → True • all([True, True, True]) → True Example: >>> isinstance(True, int) True >>> isinstance(True, bool) True >>> issubclass(bool, int) True This can be surprising: if you want to exclude booleans, check type(x) is int (exact type check) instead of isinstance.

Key Distinctions:
• This question’s focus is best captured by: In Python, bool is a subclass of int.
• The contrast that matters for correctness is summarized by: This means True and False are valid int instances.

How It Works:
• Python follows the rule implied by: In Python, bool is a subclass of int.
• The outcome you observe follows from: Key concepts: • bool inherits from int: class bool(int) • isinstance(True, int) → True • isinstance(False, int) → True • True == 1 and False == 0 in numeric contexts • This is by design — booleans were added to Python 2.3 as a subclass of int How it works: • all() checks if every element satisfies the condition • x=1: isinstance(1, int) → True • x=True: isinstance(True, int) → True (bool is subclass of int) • x=3: isinstance(3, int) → True • all([True, True, True]) → True Example: >>> isinstance(True, int) True >>> isinstance(True, bool) True >>> issubclass(bool, int) True This can be surprising: if you want to exclude booleans, check type(x) is int (exact type check) instead of isinstance.

Step-by-Step Execution:
1. Start from the construct described in: In Python, bool is a subclass of int.
2. Resolve the subparts implied by: This means True and False are valid int instances.
3. Apply the core semantics highlighted in: Key concepts: • bool inherits from int: class bool(int) • isinstance(True, int) → True • isinstance(False, int) → True • True == 1 and False == 0 in numeric contexts • This is by design — booleans were added to Python 2.3 as a subclass of int How it works: • all() checks if every element satisfies the condition • x=1: isinstance(1, int) → True • x=True: isinstance(True, int) → True (bool is subclass of int) • x=3: isinstance(3, int) → True • all([True, True, True]) → True Example: >>> isinstance(True, int) True >>> isinstance(True, bool) True >>> issubclass(bool, int) True This can be surprising: if you want to exclude booleans, check type(x) is int (exact type check) instead of isinstance.
4. Confirm the final result aligns with: Key concepts: • bool inherits from int: class bool(int) • isinstance(True, int) → True • isinstance(False, int) → True • True == 1 and False == 0 in numeric contexts • This is by design — booleans were added to Python 2.3 as a subclass of int How it works: • all() checks if every element satisfies the condition • x=1: isinstance(1, int) → True • x=True: isinstance(True, int) → True (bool is subclass of int) • x=3: isinstance(3, int) → True • all([True, True, True]) → True Example: >>> isinstance(True, int) True >>> isinstance(True, bool) True >>> issubclass(bool, int) True This can be surprising: if you want to exclude booleans, check type(x) is int (exact type check) instead of isinstance.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: This means True and False are valid int instances.
2. Apply the construct’s main rule next, matching: In Python, bool is a subclass of int.
3. Produce any intermediate values that Key concepts: • bool inherits from int: class bool(int) • isinstance(True, int) → True • isinstance(False, int) → True • True == 1 and False == 0 in numeric contexts • This is by design — booleans were added to Python 2.3 as a subclass of int How it works: • all() checks if every element satisfies the condition • x=1: isinstance(1, int) → True • x=True: isinstance(True, int) → True (bool is subclass of int) • x=3: isinstance(3, int) → True • all([True, True, True]) → True Example: >>> isinstance(True, int) True >>> isinstance(True, bool) True >>> issubclass(bool, int) True This can be surprising: if you want to exclude booleans, check type(x) is int (exact type check) instead of isinstance. relies on
4. Finish by returning/assembling the final output named by: Key concepts: • bool inherits from int: class bool(int) • isinstance(True, int) → True • isinstance(False, int) → True • True == 1 and False == 0 in numeric contexts • This is by design — booleans were added to Python 2.3 as a subclass of int How it works: • all() checks if every element satisfies the condition • x=1: isinstance(1, int) → True • x=True: isinstance(True, int) → True (bool is subclass of int) • x=3: isinstance(3, int) → True • all([True, True, True]) → True Example: >>> isinstance(True, int) True >>> isinstance(True, bool) True >>> issubclass(bool, int) True This can be surprising: if you want to exclude booleans, check type(x) is int (exact type check) instead of isinstance.
5. Use the result only after the full construct has completed, per: In Python, bool is a subclass of int.

Common Use Cases:
• Teaching this behavior using the mental model: In Python, bool is a subclass of int.
• Debugging when the observed value should match the expectation in: Key concepts: • bool inherits from int: class bool(int) • isinstance(True, int) → True • isinstance(False, int) → True • True == 1 and False == 0 in numeric contexts • This is by design — booleans were added to Python 2.3 as a subclass of int How it works: • all() checks if every element satisfies the condition • x=1: isinstance(1, int) → True • x=True: isinstance(True, int) → True (bool is subclass of int) • x=3: isinstance(3, int) → True • all([True, True, True]) → True Example: >>> isinstance(True, int) True >>> isinstance(True, bool) True >>> issubclass(bool, int) True This can be surprising: if you want to exclude booleans, check type(x) is int (exact type check) instead of isinstance.

Edge Cases:
• If inputs vary from the situation described in: This means True and False are valid int instances., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • bool inherits from int: class bool(int) • isinstance(True, int) → True • isinstance(False, int) → True • True == 1 and False == 0 in numeric contexts • This is by design — booleans were added to Python 2.3 as a subclass of int How it works: • all() checks if every element satisfies the condition • x=1: isinstance(1, int) → True • x=True: isinstance(True, int) → True (bool is subclass of int) • x=3: isinstance(3, int) → True • all([True, True, True]) → True Example: >>> isinstance(True, int) True >>> isinstance(True, bool) True >>> issubclass(bool, int) True This can be surprising: if you want to exclude booleans, check type(x) is int (exact type check) instead of isinstance. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • bool inherits from int: class bool(int) • isinstance(True, int) → True • isinstance(False, int) → True • True == 1 and False == 0 in numeric contexts • This is by design — booleans were added to Python 2.3 as a subclass of int How it works: • all() checks if every element satisfies the condition • x=1: isinstance(1, int) → True • x=True: isinstance(True, int) → True (bool is subclass of int) • x=3: isinstance(3, int) → True • all([True, True, True]) → True Example: >>> isinstance(True, int) True >>> isinstance(True, bool) True >>> issubclass(bool, int) True This can be surprising: if you want to exclude booleans, check type(x) is int (exact type check) instead of isinstance..
• When performance matters, prefer the simplest pattern that still implements: In Python, bool is a subclass of int..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: In Python, bool is a subclass of int..

Notes:
• For maintainable code, make the intent behind: This means True and False are valid int instances. explicit (and test it with inputs like those in this prompt).`
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
• The [:] is critical for in-place modification.

Key Distinctions:
• This question’s focus is best captured by: a[:] = ...
• The contrast that matters for correctness is summarized by: replaces the contents of the list in place without creating a new object.

How It Works:
• Python follows the rule implied by: a[:] = ...
• The outcome you observe follows from: The [:] is critical for in-place modification.

Step-by-Step Execution:
1. Start from the construct described in: a[:] = ...
2. Resolve the subparts implied by: replaces the contents of the list in place without creating a new object.
3. Apply the core semantics highlighted in: Any aliases (like b) see the change because they reference the same object.
4. Confirm the final result aligns with: The [:] is critical for in-place modification.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: replaces the contents of the list in place without creating a new object.
2. Apply the construct’s main rule next, matching: a[:] = ...
3. Produce any intermediate values that The [:] is critical for in-place modification. relies on
4. Finish by returning/assembling the final output named by: The [:] is critical for in-place modification.
5. Use the result only after the full construct has completed, per: a[:] = ...

Common Use Cases:
• Teaching this behavior using the mental model: a[:] = ...
• Debugging when the observed value should match the expectation in: The [:] is critical for in-place modification.

Edge Cases:
• If inputs vary from the situation described in: replaces the contents of the list in place without creating a new object., the behavior can change.
• When the construct’s assumptions differ, the rule in: Any aliases (like b) see the change because they reference the same object. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: The [:] is critical for in-place modification..
• When performance matters, prefer the simplest pattern that still implements: a[:] = ....

Examples:
• Try the same reasoning with a closely related input to verify the rule in: a[:] = ....

Notes:
• For maintainable code, make the intent behind: replaces the contents of the list in place without creating a new object. explicit (and test it with inputs like those in this prompt).`
  }),
];
