// --- LEVEL 5 INTERMEDIATE B: Sets, Sorting with Key Functions, zip/enumerate & map/filter (50 TRULY UNIQUE QUESTIONS) ---
// Topics 51-100: set fundamentals & operations, sorting with key, functional patterns (zip, map, filter)
export const level5IntermediateB = [
  // 51. {1, 2, 3} — what type?
  (_i: number) => ({
    q: `What is the type of {1, 2, 3}?`,
    o: ['set', 'dict', 'list', 'tuple'],
    c: 0,
    e: "Curly braces with values (no key:value pairs) create a set.",
    de: `In Python, curly braces {} are used for both dicts and sets. When the contents are plain values without key:value pairs, Python creates a set.

Key concepts:
• {1, 2, 3} → set (values only, no colons)
• {"a": 1} → dict (key:value pairs with colons)
• Sets are unordered collections of unique elements
• type({1, 2, 3}) returns <class 'set'>

How it works:
1. Python sees { ... } with comma-separated values
2. No colon : between elements → not a dict
3. Creates a set object
4. Sets automatically enforce uniqueness

Examples:
• {1, 2, 3} → set with 3 elements
• {"a", "b"} → set of strings
• {1, "a", True} → mixed-type set

Common uses:
• Removing duplicates from data
• Fast membership testing (O(1) average)
• Set operations: union, intersection, difference

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
  // 52. set() removes duplicates
  (_i: number) => ({
    q: `What is the result of set([1, 2, 2, 3])?`,
    o: ['{1, 2, 3}', '[1, 2, 3]', '{1, 2, 2, 3}', 'Error'],
    c: 0,
    e: "set() removes duplicates from the iterable.",
    de: `The set() constructor creates a set from an iterable, automatically removing duplicate values.

Key concepts:
• set([1, 2, 2, 3]) → {1, 2, 3}
• Duplicate 2 is removed — sets store only unique elements
• set() works with any iterable: lists, tuples, strings, etc.

How it works:
1. set() iterates through [1, 2, 2, 3]
2. Adds 1 → {1}
3. Adds 2 → {1, 2}
4. Encounters 2 again — already present, skipped
5. Adds 3 → {1, 2, 3}

Examples:
• set([1, 1, 1]) → {1}
• set("hello") → {'h', 'e', 'l', 'o'}
• set((1, 2, 2)) → {1, 2}

Common uses:
• Deduplicating lists: unique = list(set(my_list))
• Counting unique elements: len(set(data))

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
  // 53. set() creates empty set, not {}
  (_i: number) => ({
    q: `What does set() create?`,
    o: ['An empty set', 'An empty dict', 'An empty list', 'Error'],
    c: 0,
    e: "set() with no arguments creates an empty set. {} creates an empty dict, not a set!",
    de: `This is a classic Python gotcha. To create an empty set, you must use set(), not {}.

Key concepts:
• set() → empty set
• {} → empty dict (NOT an empty set!)
• This is because {} was historically used for dicts before sets were added to Python

How it works:
1. set() called with no arguments
2. Python creates an empty set object
3. type(set()) returns <class 'set'>
4. len(set()) returns 0

Examples:
• set() → set() (empty set, displayed as set())
• {} → {} (empty dict!)
• type(set()) → <class 'set'>
• type({}) → <class 'dict'>

Edge case:
• {1} → set (one-element set)
• {} → dict (empty dict — no elements to disambiguate)

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
  // 54. type({}) is dict, not set
  (_i: number) => ({
    q: `What is the result of type({})?`,
    o: ["<class 'dict'>", "<class 'set'>", "<class 'list'>", "<class 'tuple'>"],
    c: 0,
    e: "Empty curly braces {} create a dict, not a set. Use set() for an empty set.",
    de: `Empty curly braces {} in Python create an empty dictionary, not an empty set. This is a common misconception.

Key concepts:
• {} → empty dict (type is dict)
• set() → empty set (type is set)
• {1, 2} → set (non-empty, values only)
• {"a": 1} → dict (key:value pairs)

How it works:
1. Python sees {}
2. Historically, {} has always meant dict
3. Sets were added later (Python 2.6+)
4. Empty {} remains dict for backwards compatibility

Examples:
• type({}) → <class 'dict'>
• type(set()) → <class 'set'>
• type({1}) → <class 'set'>
• type({"a": 1}) → <class 'dict'>

Common mistake: Assuming {} creates an empty set. Always use set() for that purpose.

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
  // 55. len of set with duplicate
  (_i: number) => ({
    q: `What is len({1, 2, 3, 3})?`,
    o: ['3', '4', '2', 'Error'],
    c: 0,
    e: "Sets remove duplicates. {1, 2, 3, 3} becomes {1, 2, 3} which has length 3.",
    de: `When you create a set with duplicate values, the duplicates are automatically removed. The length reflects the number of unique elements.

Key concepts:
• {1, 2, 3, 3} → {1, 2, 3} (duplicate 3 removed)
• len({1, 2, 3}) → 3
• Sets only store unique elements

How it works:
1. Python creates set literal {1, 2, 3, 3}
2. Duplicate 3 is discarded
3. Resulting set is {1, 2, 3}
4. len() counts 3 unique elements

Examples:
• len({1, 1, 1, 1}) → 1
• len({1, 2, 3}) → 3
• len(set([1, 2, 2, 3, 3, 3])) → 3

Common uses:
• Counting unique items: unique_count = len(set(items))

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
  // 56. Set union with |
  (_i: number) => ({
    q: `What is {1, 2, 3} | {3, 4, 5}?`,
    o: ['{1, 2, 3, 4, 5}', '{3}', '{1, 2, 4, 5}', 'Error'],
    c: 0,
    e: "The | operator performs set union — all elements from both sets.",
    de: `The | operator performs a set union, combining all unique elements from both sets.

Key concepts:
• | is the union operator for sets
• Returns all elements that appear in either set
• Duplicates (3 appears in both) are included only once
• Does not modify the original sets — returns a new set

How it works:
1. Left set: {1, 2, 3}
2. Right set: {3, 4, 5}
3. Union: combine all unique elements
4. Result: {1, 2, 3, 4, 5}

Examples:
• {1, 2} | {3, 4} → {1, 2, 3, 4}
• {1, 2} | {2, 3} → {1, 2, 3}
• {1} | set() → {1}

Related operators:
• | union — all from both
• & intersection — common to both
• - difference — in left but not right
• ^ symmetric difference — in one but not both

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
  // 57. Set intersection with &
  (_i: number) => ({
    q: `What is {1, 2, 3} & {2, 3, 4}?`,
    o: ['{2, 3}', '{1, 4}', '{1, 2, 3, 4}', 'Error'],
    c: 0,
    e: "The & operator performs set intersection — elements common to both sets.",
    de: `The & operator performs a set intersection, returning only the elements that appear in both sets.

Key concepts:
• & is the intersection operator for sets
• Returns only elements present in both sets
• 2 and 3 are in both {1, 2, 3} and {2, 3, 4}
• Result is {2, 3}

How it works:
1. Left set: {1, 2, 3}
2. Right set: {2, 3, 4}
3. Common elements: 2 and 3
4. Result: {2, 3}

Examples:
• {1, 2, 3} & {3, 4, 5} → {3}
• {1, 2} & {3, 4} → set() (no common elements)
• {"a", "b"} & {"b", "c"} → {"b"}

Common uses:
• Finding shared elements between collections
• Checking overlap between datasets

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
  // 58. Set difference with -
  (_i: number) => ({
    q: `What is {1, 2, 3} - {2, 3, 4}?`,
    o: ['{1}', '{4}', '{1, 4}', 'Error'],
    c: 0,
    e: "The - operator returns elements in the left set that are NOT in the right set.",
    de: `The - operator performs a set difference, returning elements in the first set that are not in the second.

Key concepts:
• - is the difference operator for sets
• Returns elements in the left set but not in the right
• 1 is in {1, 2, 3} but not in {2, 3, 4}
• 2 and 3 are removed because they appear in the right set

How it works:
1. Start with {1, 2, 3}
2. Remove elements also in {2, 3, 4}
3. Remove 2 (in right set) → {1, 3}
4. Remove 3 (in right set) → {1}
5. Result: {1}

Examples:
• {1, 2, 3} - {1, 2, 3} → set()
• {1, 2, 3} - set() → {1, 2, 3}
• {1, 2, 3} - {4, 5} → {1, 2, 3}

Note: Set difference is not symmetric. {2, 3, 4} - {1, 2, 3} → {4}.

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
  // 59. Symmetric difference with ^
  (_i: number) => ({
    q: `What is {1, 2, 3} ^ {2, 3, 4}?`,
    o: ['{1, 4}', '{2, 3}', '{1, 2, 3, 4}', 'Error'],
    c: 0,
    e: "The ^ operator returns elements in either set, but NOT in both (symmetric difference).",
    de: `The ^ operator performs a symmetric difference — elements that are in one set or the other, but not both.

Key concepts:
• ^ is the symmetric difference operator
• Returns elements unique to each set (not shared)
• 1 is only in the left set, 4 is only in the right set
• 2 and 3 are in both, so they are excluded

How it works:
1. Left set: {1, 2, 3}
2. Right set: {2, 3, 4}
3. Only in left: {1}
4. Only in right: {4}
5. Result: {1, 4}

Examples:
• {1, 2} ^ {2, 3} → {1, 3}
• {1, 2} ^ {1, 2} → set() (all shared)
• {1, 2} ^ {3, 4} → {1, 2, 3, 4} (none shared)

Note: Symmetric difference is equivalent to (A | B) - (A & B), or (A - B) | (B - A).

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
  // 60. issubset
  (_i: number) => ({
    q: `What is the result of {1, 2}.issubset({1, 2, 3})?`,
    o: ['True', 'False', 'None', 'Error'],
    c: 0,
    e: "Every element of {1, 2} is in {1, 2, 3}, so it is a subset.",
    de: `The issubset() method checks whether every element of the calling set is contained in the argument set.

Key concepts:
• A.issubset(B) → True if every element of A is in B
• {1, 2} ⊆ {1, 2, 3} → True
• Equivalent to: A <= B

How it works:
1. Check: is 1 in {1, 2, 3}? → Yes
2. Check: is 2 in {1, 2, 3}? → Yes
3. All elements are present → True

Examples:
• {1}.issubset({1, 2, 3}) → True
• {1, 2, 3}.issubset({1, 2, 3}) → True (every set is a subset of itself)
• {1, 4}.issubset({1, 2, 3}) → False (4 not in the superset)
• set().issubset({1, 2}) → True (empty set is subset of everything)

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
  // 61. issuperset
  (_i: number) => ({
    q: `What is the result of {1, 2, 3}.issuperset({1, 2})?`,
    o: ['True', 'False', 'None', 'Error'],
    c: 0,
    e: "{1, 2, 3} contains all elements of {1, 2}, so it is a superset.",
    de: `The issuperset() method checks whether the calling set contains every element of the argument set.

Key concepts:
• A.issuperset(B) → True if every element of B is in A
• {1, 2, 3} ⊇ {1, 2} → True
• Equivalent to: A >= B
• Inverse of issubset: A.issuperset(B) ↔ B.issubset(A)

How it works:
1. Check: is 1 (from {1, 2}) in {1, 2, 3}? → Yes
2. Check: is 2 (from {1, 2}) in {1, 2, 3}? → Yes
3. All elements accounted for → True

Examples:
• {1, 2, 3}.issuperset({1, 2, 3}) → True
• {1, 2, 3}.issuperset(set()) → True
• {1, 2}.issuperset({1, 2, 3}) → False (missing 3)

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
  // 62. isdisjoint — True case
  (_i: number) => ({
    q: `What is the result of {1, 2}.isdisjoint({3, 4})?`,
    o: ['True', 'False', 'None', 'Error'],
    c: 0,
    e: "{1, 2} and {3, 4} share no common elements, so they are disjoint.",
    de: `The isdisjoint() method returns True if the two sets have no elements in common.

Key concepts:
• A.isdisjoint(B) → True if A ∩ B = ∅ (empty intersection)
• {1, 2} and {3, 4} have no overlap → True
• Equivalent to: len(A & B) == 0

How it works:
1. Check: is 1 in {3, 4}? → No
2. Check: is 2 in {3, 4}? → No
3. No common elements found → True

Examples:
• {1, 2}.isdisjoint({2, 3}) → False (2 in common)
• set().isdisjoint(set()) → True (no elements at all)
• {"a"}.isdisjoint({1, 2}) → True

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
  // 63. isdisjoint — False case
  (_i: number) => ({
    q: `What is the result of {1, 2}.isdisjoint({2, 3})?`,
    o: ['False', 'True', 'None', 'Error'],
    c: 0,
    e: "{1, 2} and {2, 3} share element 2, so they are NOT disjoint.",
    de: `isdisjoint() returns False when the two sets share at least one common element.

Key concepts:
• {1, 2} and {2, 3} share element 2
• Since there's an overlap → False (not disjoint)
• isdisjoint is symmetric: A.isdisjoint(B) == B.isdisjoint(A)

How it works:
1. Check: is 1 in {2, 3}? → No
2. Check: is 2 in {2, 3}? → Yes (found overlap!)
3. Common element exists → False

Examples:
• {1, 2, 3}.isdisjoint({3, 4, 5}) → False (3 in common)
• {"a", "b"}.isdisjoint({"b", "c"}) → False ("b" in common)

Note: isdisjoint short-circuits — it stops as soon as it finds one common element.

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
  // 64. set.add()
  (_i: number) => ({
    q: `What is the result of: s = {1, 2}; s.add(3); print(s)?`,
    o: ['{1, 2, 3}', '{1, 2}', '[1, 2, 3]', 'Error'],
    c: 0,
    e: "add() inserts a single element into the set.",
    de: `The add() method adds a single element to a set. If the element is already present, the set is unchanged.

Key concepts:
• s.add(element) adds element to the set in-place
• add() returns None (modifies set directly)
• If element already exists, nothing happens (no error)

How it works:
1. s = {1, 2} (set with two elements)
2. s.add(3) adds 3 to the set
3. s is now {1, 2, 3}

Examples:
• s = {1}; s.add(2) → s is {1, 2}
• s = {1, 2}; s.add(2) → s is still {1, 2} (no duplicate)
• s = set(); s.add("a") → s is {"a"}

Note: Unlike append() for lists, add() is the method name for sets. Sets don't have append() because they are unordered.

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
  // 65. set.discard() removes element
  (_i: number) => ({
    q: `What is the result of: s = {1, 2, 3}; s.discard(2); print(s)?`,
    o: ['{1, 3}', '{1, 2, 3}', '{2}', 'Error'],
    c: 0,
    e: "discard() removes the element if present. No error if missing.",
    de: `The discard() method removes a specific element from the set. If the element is not found, it does nothing (no error).

Key concepts:
• s.discard(element) removes element if present
• Returns None
• Does NOT raise an error if element is missing
• This is the safe removal method

How it works:
1. s = {1, 2, 3}
2. s.discard(2) — 2 is present, so it's removed
3. s is now {1, 3}

Examples:
• s = {1, 2, 3}; s.discard(3) → s is {1, 2}
• s = {1, 2}; s.discard(5) → s is still {1, 2} (no error)

Compare with remove():
• discard() → no error if missing
• remove() → raises KeyError if missing

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
  // 66. discard() with missing element — no error
  (_i: number) => ({
    q: `What is the result of: s = {1, 2, 3}; s.discard(5); print(s)?`,
    o: ['{1, 2, 3}', '{1, 2}', 'KeyError', 'None'],
    c: 0,
    e: "discard() does nothing if the element is not in the set — no error raised.",
    de: `discard() silently ignores attempts to remove elements that aren't in the set. This is its key advantage over remove().

Key concepts:
• s.discard(5) — 5 is not in {1, 2, 3}
• No error raised — set remains unchanged
• This makes discard() safe to use without checking membership first

How it works:
1. s = {1, 2, 3}
2. s.discard(5) — 5 not found, nothing happens
3. s is still {1, 2, 3}

Compare:
• s.discard(5) → no error, set unchanged
• s.remove(5) → KeyError!

Common pattern:
• Use discard() when you don't know if the element exists
• Use remove() when missing element indicates a bug

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
  // 67. remove() with missing element — KeyError
  (_i: number) => ({
    q: `What happens when you run: s = {1, 2, 3}; s.remove(5)?`,
    o: ['KeyError', '{1, 2, 3}', '{1, 2}', 'None'],
    c: 0,
    e: "remove() raises KeyError if the element is not in the set.",
    de: `Unlike discard(), the remove() method raises a KeyError if the element is not found in the set.

Key concepts:
• s.remove(element) removes element or raises KeyError
• 5 is not in {1, 2, 3} → KeyError
• This is the strict removal method

How it works:
1. s = {1, 2, 3}
2. s.remove(5) — 5 is not present
3. Python raises KeyError: 5

Compare discard() vs remove():
• discard(missing) → silently does nothing
• remove(missing) → raises KeyError

When to use which:
• remove() when the element should exist (bug if missing)
• discard() when element may or may not exist

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
  // 68. frozenset immutability
  (_i: number) => ({
    q: `Is frozenset([1, 2, 3]) mutable?`,
    o: ['No, frozenset is immutable', 'Yes, like a normal set', 'Only if elements are ints', 'Error'],
    c: 0,
    e: "frozenset is an immutable version of set — you cannot add or remove elements.",
    de: `frozenset creates an immutable (unchangeable) set. Once created, elements cannot be added or removed.

Key concepts:
• frozenset([1, 2, 3]) → frozenset({1, 2, 3})
• Cannot use add(), remove(), discard(), etc.
• Supports read-only operations: union, intersection, etc.
• Can be used as dict key or set element (because it's hashable)

How it works:
1. frozenset() creates an immutable set
2. All modification methods are unavailable
3. Set operations (|, &, -, ^) return new frozensets

Examples:
• fs = frozenset([1, 2]); fs.add(3) → AttributeError
• frozenset({1, 2}) | frozenset({3}) → frozenset({1, 2, 3})
• {frozenset([1, 2]): "value"} → valid dict key!

Common uses:
• As dictionary keys (regular sets can't be keys)
• As elements of other sets
• Ensuring set data isn't accidentally modified

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
  // 69. Sets cannot contain lists
  (_i: number) => ({
    q: `Can a set contain a list as an element?`,
    o: ['No, lists are unhashable', 'Yes', 'Only empty lists', 'Only lists of ints'],
    c: 0,
    e: "Set elements must be hashable. Lists are mutable and unhashable, so they cannot be in a set.",
    de: `Sets require all elements to be hashable (immutable). Lists are mutable, so they are not hashable and cannot be set elements.

Key concepts:
• Set elements must be hashable
• Hashable = has a fixed hash value throughout its lifetime
• Lists are mutable → unhashable → can't be in a set
• {[1, 2]} → TypeError: unhashable type: 'list'

How it works:
1. Python tries to compute hash([1, 2])
2. Lists don't support hashing (they're mutable)
3. TypeError is raised

What IS hashable:
• int, float, str, bool → hashable ✅
• tuple (if all elements are hashable) → hashable ✅
• frozenset → hashable ✅
• list, dict, set → NOT hashable ❌

Workaround: Convert the list to a tuple → {(1, 2)} works fine.

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
  // 70. Sets can contain tuples
  (_i: number) => ({
    q: `Can a set contain a tuple as an element?`,
    o: ['Yes, tuples are hashable', 'No', 'Only empty tuples', 'Only tuples of strings'],
    c: 0,
    e: "Tuples are immutable and hashable (if their elements are hashable), so they can be set elements.",
    de: `Tuples are immutable and hashable (as long as all their elements are also hashable), so they can be elements of a set.

Key concepts:
• Tuples are immutable → hashable → valid set elements
• {(1, 2), (3, 4)} is a valid set
• But tuple containing a list is NOT hashable: (1, [2, 3]) → unhashable

How it works:
1. Python computes hash((1, 2)) → valid hash
2. Tuple can be added to the set
3. {(1, 2), (3, 4)} → set of two tuples

Examples:
• {(1, 2), (3, 4)} → valid ✅
• {("a", "b")} → valid ✅
• {(1, [2])} → TypeError ❌ (list inside tuple makes it unhashable)

Common uses:
• Storing coordinate pairs: {(0, 0), (1, 1)}
• Using tuple pairs as dict keys or set members

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
  // 71. .union() method
  (_i: number) => ({
    q: `What is {1, 2, 3}.union({4, 5})?`,
    o: ['{1, 2, 3, 4, 5}', '{1, 2, 3}', '{4, 5}', 'Error'],
    c: 0,
    e: "The union() method returns all elements from both sets, same as the | operator.",
    de: `The union() method combines elements from both sets, returning a new set with all unique elements.

Key concepts:
• A.union(B) is equivalent to A | B
• Returns a new set, does not modify A or B
• All elements from both sets are included
• Duplicates are automatically handled

How it works:
1. {1, 2, 3}.union({4, 5})
2. Combines: 1, 2, 3, 4, 5
3. No duplicates to remove
4. Result: {1, 2, 3, 4, 5}

Method vs operator:
• {1, 2}.union({3}) — method form
• {1, 2} | {3} — operator form
• union() can accept any iterable: {1}.union([2, 3])
• | requires both sides to be sets

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
  // 72. .intersection() method
  (_i: number) => ({
    q: `What is {1, 2, 3}.intersection({2, 3, 4})?`,
    o: ['{2, 3}', '{1, 4}', '{1, 2, 3, 4}', 'Error'],
    c: 0,
    e: "intersection() returns only elements common to both sets.",
    de: `The intersection() method returns a new set containing only the elements found in both sets.

Key concepts:
• A.intersection(B) is equivalent to A & B
• Returns elements present in both A and B
• Does not modify the original sets

How it works:
1. {1, 2, 3}.intersection({2, 3, 4})
2. Check each element: 1 not in right, 2 in both, 3 in both, 4 not in left
3. Result: {2, 3}

Method vs operator:
• {1, 2, 3}.intersection({2, 3, 4}) — method, accepts any iterable
• {1, 2, 3} & {2, 3, 4} — operator, both must be sets

Example: intersection() can take multiple arguments:
• {1, 2, 3}.intersection({2, 3}, {3, 4}) → {3}

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
  // 73. .difference() method
  (_i: number) => ({
    q: `What is {1, 2, 3}.difference({2, 3})?`,
    o: ['{1}', '{2, 3}', 'set()', 'Error'],
    c: 0,
    e: "difference() returns elements in the calling set that are NOT in the argument set.",
    de: `The difference() method returns a new set with elements from the calling set that are not in the argument set.

Key concepts:
• A.difference(B) is equivalent to A - B
• Returns elements in A but not in B
• Does not modify A or B

How it works:
1. {1, 2, 3}.difference({2, 3})
2. 1 is not in {2, 3} → include
3. 2 is in {2, 3} → exclude
4. 3 is in {2, 3} → exclude
5. Result: {1}

Examples:
• {1, 2, 3}.difference({1, 2, 3}) → set()
• {1, 2, 3}.difference(set()) → {1, 2, 3}
• {1, 2, 3}.difference({4, 5}) → {1, 2, 3}

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
  // 74. sorted() on a set returns a list
  (_i: number) => ({
    q: `What is the result of sorted({3, 1, 2})?`,
    o: ['[1, 2, 3]', '{1, 2, 3}', '(1, 2, 3)', 'Error'],
    c: 0,
    e: "sorted() always returns a list, even when given a set as input.",
    de: `The sorted() function accepts any iterable and always returns a sorted list — regardless of the input type.

Key concepts:
• sorted({3, 1, 2}) → [1, 2, 3]
• Input is a set, output is a list
• sorted() works with sets, dicts, tuples, strings, etc.
• Always returns a list

How it works:
1. sorted() receives the set {3, 1, 2}
2. Iterates through the set elements
3. Sorts them in ascending order
4. Returns a new list: [1, 2, 3]

Examples:
• sorted({5, 3, 1}) → [1, 3, 5]
• sorted("cba") → ['a', 'b', 'c']
• sorted((3, 1, 2)) → [1, 2, 3]

Note: Sets are unordered, so you can't rely on their iteration order. sorted() is the standard way to get an ordered sequence from a set.

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
  // 75. len(set("hello")) — counting unique characters
  (_i: number) => ({
    q: `What is the length of list(set("hello"))?`,
    o: ['4', '5', '3', 'Error'],
    c: 0,
    e: 'set("hello") removes duplicate letters. "hello" has h, e, l, l, o → 4 unique characters.',
    de: `set("hello") creates a set from the string's characters, removing duplicates. Then len() counts the unique characters.

Key concepts:
• "hello" has characters: h, e, l, l, o
• set("hello") → {'h', 'e', 'l', 'o'} (duplicate 'l' removed)
• Length is 4 (four unique characters)

How it works:
1. "hello" is iterable (each character is an element)
2. set() converts to set: {'h', 'e', 'l', 'o'}
3. Duplicate 'l' is removed
4. list() converts to list (4 elements)
5. Length is 4

Examples:
• len(set("aaa")) → 1
• len(set("abc")) → 3
• len(set("mississippi")) → 4 (m, i, s, p)

Common uses:
• Counting unique characters: unique = len(set(text))
• Checking for all unique: len(set(s)) == len(s)

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
  // 76. sorted() with key=len
  (_i: number) => ({
    q: `What is sorted(["banana", "apple", "cherry"], key=len)?`,
    o: ['["apple", "banana", "cherry"]', '["cherry", "banana", "apple"]', '["banana", "apple", "cherry"]', 'Error'],
    c: 0,
    e: "key=len sorts by string length: apple(5) < banana(6) = cherry(6).",
    de: `The key parameter in sorted() specifies a function that extracts a comparison key from each element. key=len sorts strings by their length.

Key concepts:
• key=len → sort by the length of each string
• "apple" has length 5, "banana" has length 6, "cherry" has length 6
• Sorted by length ascending: 5, 6, 6
• Python's sort is stable: "banana" and "cherry" (both length 6) keep original order

How it works:
1. Compute keys: len("banana")=6, len("apple")=5, len("cherry")=6
2. Sort by keys: 5 < 6 = 6
3. "apple"(5) comes first
4. "banana"(6) and "cherry"(6) keep original order (stable sort)
5. Result: ["apple", "banana", "cherry"]

Examples:
• sorted(["hi", "a", "hey"], key=len) → ["a", "hi", "hey"]
• sorted(["xyz", "ab"], key=len) → ["ab", "xyz"]

Note: The key function is called once per element, and the results are used for comparison.

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
  // 77. sorted() with key=str.lower
  (_i: number) => ({
    q: `What is sorted(["Banana", "apple", "Cherry"], key=str.lower)?`,
    o: ['["apple", "Banana", "Cherry"]', '["Banana", "Cherry", "apple"]', '["Cherry", "Banana", "apple"]', 'Error'],
    c: 0,
    e: "key=str.lower sorts case-insensitively: apple < banana < cherry.",
    de: `key=str.lower converts each string to lowercase for comparison purposes only, enabling case-insensitive sorting.

Key concepts:
• key=str.lower → compare using lowercase versions
• "Banana".lower()="banana", "apple".lower()="apple", "Cherry".lower()="cherry"
• Alphabetical order of keys: "apple" < "banana" < "cherry"
• Original strings (with original casing) are returned

How it works:
1. Compute keys: "banana", "apple", "cherry" (all lowercase)
2. Sort by keys alphabetically: "apple" < "banana" < "cherry"
3. Return original elements in that order: ["apple", "Banana", "Cherry"]

Examples:
• sorted(["B", "a", "C"], key=str.lower) → ["a", "B", "C"]
• sorted(["Z", "a"], key=str.lower) → ["a", "Z"]

Note: Without key=str.lower, uppercase letters sort before lowercase ('A' < 'a' in ASCII/Unicode).

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
  // 78. sorted() with lambda on tuple element
  (_i: number) => ({
    q: `What is sorted([(1,"b"),(2,"a"),(3,"c")], key=lambda x: x[1])?`,
    o: ['[(2,"a"),(1,"b"),(3,"c")]', '[(1,"b"),(2,"a"),(3,"c")]', '[(3,"c"),(2,"a"),(1,"b")]', 'Error'],
    c: 0,
    e: "key=lambda x: x[1] sorts by the second element of each tuple: a < b < c.",
    de: `A lambda function as the key allows sorting by any custom criterion. Here, x[1] extracts the second element of each tuple for comparison.

Key concepts:
• lambda x: x[1] → returns the second element of x
• Keys: "b", "a", "c"
• Sorted by keys: "a" < "b" < "c"
• Corresponding tuples: (2,"a"), (1,"b"), (3,"c")

How it works:
1. Apply key to each element:
   (1,"b") → "b", (2,"a") → "a", (3,"c") → "c"
2. Sort by keys: "a", "b", "c"
3. Return tuples in sorted order: [(2,"a"), (1,"b"), (3,"c")]

Examples:
• sorted([(5,1),(3,2)], key=lambda x: x[0]) → [(3,2),(5,1)]
• sorted([(1,3),(1,1)], key=lambda x: x[1]) → [(1,1),(1,3)]

Common uses:
• Sorting records by a specific field
• Custom ordering of complex data structures

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
  // 79. sorted() with key=abs
  (_i: number) => ({
    q: `What is sorted([3, -1, 2, -4], key=abs)?`,
    o: ['[-1, 2, 3, -4]', '[3, 2, -1, -4]', '[-4, -1, 2, 3]', 'Error'],
    c: 0,
    e: "key=abs sorts by absolute value: |-1|=1, |2|=2, |3|=3, |-4|=4.",
    de: `key=abs sorts numbers by their absolute value (distance from zero), ignoring the sign.

Key concepts:
• abs(3)=3, abs(-1)=1, abs(2)=2, abs(-4)=4
• Sorted by absolute value: 1, 2, 3, 4
• Corresponding original values: -1, 2, 3, -4

How it works:
1. Compute keys: abs(3)=3, abs(-1)=1, abs(2)=2, abs(-4)=4
2. Sort by keys: 1, 2, 3, 4
3. Return original values in that order: [-1, 2, 3, -4]

Examples:
• sorted([-5, 1, -3], key=abs) → [1, -3, -5]
• min([3, -1, -2], key=abs) → -1 (smallest absolute value)

Note: The original values (including signs) are preserved in the output — only the comparison uses absolute values.

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
  // 80. sorted() split words case-insensitive
  (_i: number) => ({
    q: `What is sorted("Hello World".split(), key=str.lower)?`,
    o: ['["Hello", "World"]', '["World", "Hello"]', '["hello", "world"]', 'Error'],
    c: 0,
    e: '"Hello World".split() → ["Hello", "World"]. key=str.lower: "hello" < "world" → same order.',
    de: `This combines string splitting with case-insensitive sorting.

Key concepts:
• "Hello World".split() → ["Hello", "World"]
• key=str.lower → compare as "hello" and "world"
• "hello" < "world" alphabetically → original order maintained

How it works:
1. Split: ["Hello", "World"]
2. Compute keys: "hello", "world"
3. Sort by keys: "hello" < "world" (already in order)
4. Result: ["Hello", "World"]

Note: The original capitalization is preserved in the output — str.lower is only used for comparison. If the words were in reverse order in the input, they would be swapped.

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
  // 81. sorted() with negation key for descending
  (_i: number) => ({
    q: `What is sorted(range(5), key=lambda x: -x)?`,
    o: ['[4, 3, 2, 1, 0]', '[0, 1, 2, 3, 4]', '[0, -1, -2, -3, -4]', 'Error'],
    c: 0,
    e: "key=lambda x: -x negates each value, causing reverse numerical sort.",
    de: `Using a negation key function is a technique to sort in descending order without using reverse=True.

Key concepts:
• range(5) → 0, 1, 2, 3, 4
• key=lambda x: -x → keys are 0, -1, -2, -3, -4
• Sorted ascending by keys: -4, -3, -2, -1, 0
• Corresponding original values: 4, 3, 2, 1, 0

How it works:
1. Elements: 0, 1, 2, 3, 4
2. Keys: -0=0, -1, -2, -3, -4
3. Sort keys ascending: -4 < -3 < -2 < -1 < 0
4. Map back to originals: 4, 3, 2, 1, 0

Alternative approaches:
• sorted(range(5), reverse=True) → same result
• list(reversed(range(5))) → same result

Note: This negation trick only works with numeric keys. For strings, use reverse=True.

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
  // 82. Default tuple sorting
  (_i: number) => ({
    q: `What is sorted([(1, 3), (1, 1), (2, 2)])?`,
    o: ['[(1, 1), (1, 3), (2, 2)]', '[(1, 3), (1, 1), (2, 2)]', '[(2, 2), (1, 1), (1, 3)]', 'Error'],
    c: 0,
    e: "Tuples sort lexicographically: first by element 0, then by element 1 for ties.",
    de: `Tuples are compared lexicographically by default — element by element, left to right.

Key concepts:
• Tuples compare element-by-element from left to right
• (1, 1) < (1, 3) because first elements are equal (1==1), second element 1 < 3
• (1, 3) < (2, 2) because first element 1 < 2

How it works:
1. Compare (1, 3) vs (1, 1): first elements equal, 3 > 1 → (1, 1) comes first
2. Compare (1, 3) vs (2, 2): first elements 1 < 2 → (1, 3) comes before (2, 2)
3. Final order: [(1, 1), (1, 3), (2, 2)]

Examples:
• sorted([(2, 1), (1, 2)]) → [(1, 2), (2, 1)]
• sorted([(1, "b"), (1, "a")]) → [(1, "a"), (1, "b")]

This is called lexicographic ordering — the same way words are sorted in a dictionary.

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
  // 83. Python sort stability
  (_i: number) => ({
    q: `Is Python's built-in sort algorithm stable?`,
    o: ['Yes, equal elements keep original order', 'No, order is random for equal elements', 'Only for numbers', 'Only with key parameter'],
    c: 0,
    e: "Python uses Timsort, which is a stable sort — equal elements maintain their relative order.",
    de: `Python's sort is stable, meaning elements that compare equal retain their original relative order.

Key concepts:
• Stable sort: equal elements keep their original order
• Python uses Timsort (a hybrid merge sort / insertion sort)
• This guarantee applies to both sorted() and list.sort()
• Stability is guaranteed by the language specification

Why stability matters:
• When sorting by key, elements with the same key stay in their original order
• You can sort by multiple criteria by sorting multiple times

Example of stability:
• data = [("Alice", 3), ("Bob", 1), ("Charlie", 3)]
• sorted(data, key=lambda x: x[1])
• Result: [("Bob", 1), ("Alice", 3), ("Charlie", 3)]
• Alice and Charlie both have key 3 — Alice stays before Charlie (original order)

Common uses:
• Multi-level sorting: sort by secondary key first, then primary key
• Preserving input order for equal elements

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
  // 84. Sorting booleans
  (_i: number) => ({
    q: `What is sorted([True, False, True])?`,
    o: ['[False, True, True]', '[True, True, False]', '[True, False, True]', 'Error'],
    c: 0,
    e: "Booleans are integers in Python: False=0, True=1. Sorted: 0, 1, 1.",
    de: `In Python, bool is a subclass of int. False equals 0 and True equals 1. Sorting booleans is equivalent to sorting 0s and 1s.

Key concepts:
• False == 0, True == 1
• Sorting ascending: False(0) < True(1) < True(1)
• Result: [False, True, True]

How it works:
1. Python treats booleans as integers for comparison
2. False = 0, True = 1, True = 1
3. Sort ascending: 0, 1, 1
4. Result: [False, True, True]

Examples:
• sorted([True, False]) → [False, True]
• sorted([1, True, 0, False]) → [0, False, 1, True] (stable sort: 0 before False if 0 came first)
• min([True, False]) → False

Edge case: bool is a subclass of int, so True + True = 2 and False * 10 = 0.

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
  // 85. Case-insensitive sort with stability
  (_i: number) => ({
    q: `What is sorted(["b", "A", "a", "B"], key=str.lower)?`,
    o: ['["A", "a", "b", "B"]', '["a", "A", "B", "b"]', '["A", "B", "a", "b"]', '["b", "B", "a", "A"]'],
    c: 0,
    e: 'key=str.lower groups by lowercase. Stable sort preserves original order within groups: "A" before "a", "b" before "B".',
    de: `This demonstrates both key-based sorting and sort stability working together.

Key concepts:
• Keys: "b"→"b", "A"→"a", "a"→"a", "B"→"b"
• Sorted by keys: "a", "a", "b", "b"
• Stable sort: within equal keys, original order is preserved
• "A" came before "a" in the input → "A" stays first
• "b" came before "B" in the input → "b" stays first

How it works:
1. Compute keys: ["b", "A", "a", "B"] → ["b", "a", "a", "b"]
2. Sort by keys (stable): "a" group first, then "b" group
3. "a" group: "A" (index 1), "a" (index 2) → ["A", "a"]
4. "b" group: "b" (index 0), "B" (index 3) → ["b", "B"]
5. Result: ["A", "a", "b", "B"]

This is a powerful demonstration of Python's stable sort guarantee.

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
  // 86. min() with key=len
  (_i: number) => ({
    q: `What is min(["banana", "apple", "cherry"], key=len)?`,
    o: ['"apple"', '"banana"', '"cherry"', 'Error'],
    c: 0,
    e: "key=len finds the element with the smallest length. apple has length 5, the shortest.",
    de: `The key parameter works with min() just like with sorted(). It determines what value is used for comparison.

Key concepts:
• key=len → compare by string length
• len("banana")=6, len("apple")=5, len("cherry")=6
• Minimum length is 5 → "apple"
• Returns the original element, not the key value

How it works:
1. Compute keys: "banana"→6, "apple"→5, "cherry"→6
2. Find minimum key: 5
3. Return corresponding element: "apple"

Examples:
• min(["hi", "hello", "hey"], key=len) → "hi"
• min(["abc", "de", "f"], key=len) → "f"

Note: min() returns the original element, not the key. min(["apple", "banana"], key=len) returns "apple", not 5.

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
  // 87. max() with key=len
  (_i: number) => ({
    q: `What is max(["hi", "hello", "hey"], key=len)?`,
    o: ['"hello"', '"hey"', '"hi"', 'Error'],
    c: 0,
    e: "key=len finds the element with the greatest length. hello has length 5, the longest.",
    de: `max() with key=len returns the element with the greatest length.

Key concepts:
• key=len → compare by string length
• len("hi")=2, len("hello")=5, len("hey")=3
• Maximum length is 5 → "hello"

How it works:
1. Compute keys: "hi"→2, "hello"→5, "hey"→3
2. Find maximum key: 5
3. Return corresponding element: "hello"

Examples:
• max(["a", "bb", "ccc"], key=len) → "ccc"
• max(["Python", "is", "great"], key=len) → "Python"

Note: Like min(), max() returns the original element, not the computed key value.

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
  // 88. sorted() with modulo key
  (_i: number) => ({
    q: `What is sorted([1, 2, 3, 4, 5], key=lambda x: x % 3)?`,
    o: ['[3, 1, 4, 2, 5]', '[1, 2, 3, 4, 5]', '[3, 6, 1, 4, 2]', 'Error'],
    c: 0,
    e: "key=x%3 groups by remainder: 3%3=0, then 1%3=1 and 4%3=1, then 2%3=2 and 5%3=2.",
    de: `Sorting by modulo groups elements by their remainder when divided by the modulus.

Key concepts:
• Keys: 1%3=1, 2%3=2, 3%3=0, 4%3=1, 5%3=2
• Sorted by keys: 0, 1, 1, 2, 2
• Stable sort preserves order within groups

How it works:
1. Compute keys:
   1→1, 2→2, 3→0, 4→1, 5→2
2. Sort by keys (stable):
   key 0: [3]
   key 1: [1, 4] (1 before 4 in original)
   key 2: [2, 5] (2 before 5 in original)
3. Result: [3, 1, 4, 2, 5]

This technique is useful for grouping numbers by divisibility — all multiples of 3 come first, then remainder 1, then remainder 2.

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
  // 89. sorted() string by descending ord
  (_i: number) => ({
    q: `What is sorted("python", key=lambda c: -ord(c))?`,
    o: ['["y", "t", "p", "o", "n", "h"]', '["h", "n", "o", "p", "t", "y"]', '["p", "y", "t", "h", "o", "n"]', 'Error'],
    c: 0,
    e: "Negating ord() sorts characters in reverse Unicode order: y(121) > t(116) > p(112) > o(111) > n(110) > h(104).",
    de: `ord() returns the Unicode code point of a character. Negating it with -ord(c) sorts characters in reverse order.

Key concepts:
• ord('p')=112, ord('y')=121, ord('t')=116
• ord('h')=104, ord('o')=111, ord('n')=110
• Negated: -121, -116, -112, -111, -110, -104
• Sorted ascending: -121(y), -116(t), -112(p), -111(o), -110(n), -104(h)

How it works:
1. "python" is iterated as ['p', 'y', 't', 'h', 'o', 'n']
2. Compute keys: -112, -121, -116, -104, -111, -110
3. Sort ascending: -121 < -116 < -112 < -111 < -110 < -104
4. Map back: y, t, p, o, n, h

This is equivalent to sorted("python", reverse=True) for single characters.

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
  // 90. reversed(sorted(...))
  (_i: number) => ({
    q: `What is list(reversed(sorted([3, 1, 2])))?`,
    o: ['[3, 2, 1]', '[1, 2, 3]', '[2, 1, 3]', 'Error'],
    c: 0,
    e: "sorted([3, 1, 2]) → [1, 2, 3], then reversed() gives [3, 2, 1].",
    de: `This chains sorted() and reversed() to get a descending-order list.

Key concepts:
• sorted([3, 1, 2]) → [1, 2, 3]
• reversed([1, 2, 3]) → iterator yielding 3, 2, 1
• list() converts iterator to list: [3, 2, 1]

How it works:
1. sorted([3, 1, 2]) returns [1, 2, 3]
2. reversed() returns a reverse iterator (not a list!)
3. list() materializes the iterator into [3, 2, 1]

Alternative approaches:
• sorted([3, 1, 2], reverse=True) → [3, 2, 1] (simpler)
• [3, 1, 2].sort(); reverse() (in-place, two steps)
• sorted([3, 1, 2])[::-1] → [3, 2, 1] (slicing)

Note: reversed() returns an iterator, so you need list() to see all elements.

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
  // 91. zip() basics
  (_i: number) => ({
    q: `What is list(zip("abc", [1, 2, 3]))?`,
    o: ['[("a", 1), ("b", 2), ("c", 3)]', '[("a", "b", "c"), (1, 2, 3)]', '["a1", "b2", "c3"]', 'Error'],
    c: 0,
    e: "zip() pairs corresponding elements from each iterable into tuples.",
    de: `zip() takes multiple iterables and returns an iterator of tuples, where each tuple contains corresponding elements from the inputs.

Key concepts:
• zip("abc", [1, 2, 3]) pairs elements by position
• Position 0: ("a", 1)
• Position 1: ("b", 2)
• Position 2: ("c", 3)

How it works:
1. First iterable: "abc" → 'a', 'b', 'c'
2. Second iterable: [1, 2, 3] → 1, 2, 3
3. Pair by index: ('a',1), ('b',2), ('c',3)
4. list() converts the zip iterator to a list

Examples:
• list(zip([1, 2], [3, 4])) → [(1, 3), (2, 4)]
• list(zip("ab", "cd")) → [("a", "c"), ("b", "d")]

Common uses:
• Iterating over parallel sequences: for a, b in zip(names, scores)
• Creating dictionaries: dict(zip(keys, values))

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
  // 92. zip() truncates to shortest
  (_i: number) => ({
    q: `What is list(zip([1, 2], [3, 4, 5]))?`,
    o: ['[(1, 3), (2, 4)]', '[(1, 3), (2, 4), (None, 5)]', '[(1, 3), (2, 4), (2, 5)]', 'Error'],
    c: 0,
    e: "zip() stops at the shortest iterable. [1, 2] has 2 elements, so only 2 pairs are made.",
    de: `zip() stops producing tuples when the shortest input iterable is exhausted. Extra elements from longer iterables are silently ignored.

Key concepts:
• [1, 2] has 2 elements, [3, 4, 5] has 3 elements
• zip stops at 2 (the shorter length)
• Third element (5) is dropped silently

How it works:
1. Pair index 0: (1, 3)
2. Pair index 1: (2, 4)
3. [1, 2] is exhausted → stop
4. 5 from [3, 4, 5] is never used

Examples:
• list(zip([1], [2, 3, 4])) → [(1, 2)]
• list(zip([], [1, 2])) → []

Alternative: Use itertools.zip_longest() to pad shorter iterables with a fill value:
• list(zip_longest([1, 2], [3, 4, 5], fillvalue=None)) → [(1, 3), (2, 4), (None, 5)]

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
  // 93. dict(zip(...)) to create dict
  (_i: number) => ({
    q: `What is dict(zip("abc", range(3)))?`,
    o: ['{"a": 0, "b": 1, "c": 2}', '{"a": 1, "b": 2, "c": 3}', '{0: "a", 1: "b", 2: "c"}', 'Error'],
    c: 0,
    e: 'zip("abc", range(3)) → ("a",0), ("b",1), ("c",2). dict() converts pairs to key:value.',
    de: `dict(zip(keys, values)) is an idiomatic way to create a dictionary from two sequences.

Key concepts:
• "abc" → 'a', 'b', 'c' (keys)
• range(3) → 0, 1, 2 (values)
• zip pairs them: ('a',0), ('b',1), ('c',2)
• dict() interprets each tuple as (key, value)

How it works:
1. zip("abc", range(3)) → ('a',0), ('b',1), ('c',2)
2. dict() takes iterable of (key, value) pairs
3. Creates: {"a": 0, "b": 1, "c": 2}

Examples:
• dict(zip(["x", "y"], [10, 20])) → {"x": 10, "y": 20}
• dict(zip("ab", "cd")) → {"a": "c", "b": "d"}

Common uses:
• Mapping parallel lists into a dictionary
• Creating lookups from column headers and values

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
  // 94. zip(*...) to transpose/unzip
  (_i: number) => ({
    q: `What is list(zip(*[(1, 4), (2, 5), (3, 6)]))?`,
    o: ['[(1, 2, 3), (4, 5, 6)]', '[(1, 4), (2, 5), (3, 6)]', '[(4, 1), (5, 2), (6, 3)]', 'Error'],
    c: 0,
    e: "zip(*iterable) unpacks and transposes. Rows become columns: (1,2,3) and (4,5,6).",
    de: `zip(*iterable) is the standard Python idiom for transposing (unzipping) a list of tuples. The * operator unpacks the list into separate arguments to zip.

Key concepts:
• * unpacks the list: zip((1,4), (2,5), (3,6))
• zip takes first elements: (1, 2, 3)
• zip takes second elements: (4, 5, 6)
• Result: [(1, 2, 3), (4, 5, 6)]

How it works:
1. [(1,4), (2,5), (3,6)] is unpacked by *
2. Equivalent to: zip((1,4), (2,5), (3,6))
3. zip pairs first elements: (1, 2, 3)
4. zip pairs second elements: (4, 5, 6)
5. Result: [(1, 2, 3), (4, 5, 6)]

This is matrix transposition:
• Input rows: (1,4), (2,5), (3,6)
• Output rows: (1,2,3), (4,5,6)

Common uses:
• Transposing data (rows ↔ columns)
• Separating paired data: names, scores = zip(*student_data)

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
  // 95. List comprehension with zip
  (_i: number) => ({
    q: `What is [a + b for a, b in zip([1, 2, 3], [10, 20, 30])]?`,
    o: ['[11, 22, 33]', '[10, 40, 90]', '[(1, 10), (2, 20), (3, 30)]', 'Error'],
    c: 0,
    e: "zip pairs (1,10), (2,20), (3,30) and the comprehension adds each pair: 11, 22, 33.",
    de: `Combining zip with a list comprehension lets you perform element-wise operations on parallel sequences.

Key concepts:
• zip([1,2,3], [10,20,30]) → (1,10), (2,20), (3,30)
• a + b for each pair: 1+10=11, 2+20=22, 3+30=33
• Result: [11, 22, 33]

How it works:
1. zip creates pairs: (1,10), (2,20), (3,30)
2. for a, b unpacks each pair
3. a + b computes the sum
4. List comprehension collects results: [11, 22, 33]

Examples:
• [a * b for a, b in zip([2, 3], [4, 5])] → [8, 15]
• [a - b for a, b in zip([10, 20], [1, 2])] → [9, 18]

Common uses:
• Element-wise arithmetic on parallel lists
• Combining data from multiple sources

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
  // 96. map() with len
  (_i: number) => ({
    q: `What is list(map(len, ["hi", "hello", "hey"]))?`,
    o: ['[2, 5, 3]', '[3, 3, 3]', '["hi", "hello", "hey"]', 'Error'],
    c: 0,
    e: "map(len, ...) applies len() to each element: len('hi')=2, len('hello')=5, len('hey')=3.",
    de: `map() applies a function to every element of an iterable and returns an iterator of the results.

Key concepts:
• map(function, iterable) applies function to each element
• map(len, ["hi", "hello", "hey"]) → len("hi"), len("hello"), len("hey")
• Results: 2, 5, 3
• map returns an iterator — use list() to see all results

How it works:
1. Apply len("hi") → 2
2. Apply len("hello") → 5
3. Apply len("hey") → 3
4. list() collects results: [2, 5, 3]

Examples:
• list(map(str, [1, 2, 3])) → ["1", "2", "3"]
• list(map(int, ["1", "2"])) → [1, 2]
• list(map(abs, [-1, -2, 3])) → [1, 2, 3]

List comprehension equivalent:
• [len(s) for s in ["hi", "hello", "hey"]] → [2, 5, 3]

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
  // 97. filter(None, ...) removes falsy values
  (_i: number) => ({
    q: `What is list(filter(None, [0, 1, "", "a", None, True]))?`,
    o: ['[1, "a", True]', '[0, 1, "", "a", None, True]', '[None]', 'Error'],
    c: 0,
    e: "filter(None, ...) removes all falsy values. 0, '', and None are falsy; 1, 'a', True are truthy.",
    de: `When filter() is called with None as the function, it removes all falsy elements from the iterable.

Key concepts:
• filter(None, iterable) keeps only truthy values
• Falsy values in Python: 0, "", None, False, [], {}, set(), 0.0
• Truthy: everything else (non-zero numbers, non-empty strings, True)

How it works:
1. 0 → falsy → removed
2. 1 → truthy → kept
3. "" → falsy → removed
4. "a" → truthy → kept
5. None → falsy → removed
6. True → truthy → kept
7. Result: [1, "a", True]

Examples:
• list(filter(None, [0, False, 1, 2])) → [1, 2]
• list(filter(None, ["", "hello", None])) → ["hello"]

Note: filter(None, ...) is equivalent to [x for x in iterable if x].

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
  // 98. map() with two iterables
  (_i: number) => ({
    q: `What is list(map(lambda x, y: x + y, [1, 2], [3, 4]))?`,
    o: ['[4, 6]', '[(1, 3), (2, 4)]', '[1, 2, 3, 4]', 'Error'],
    c: 0,
    e: "map() with two iterables passes one element from each to the lambda: 1+3=4, 2+4=6.",
    de: `map() can accept multiple iterables. The function must take as many arguments as there are iterables.

Key concepts:
• map(func, iter1, iter2) passes one element from each iterable
• lambda x, y: x + y takes two arguments
• Pairs: (1, 3) and (2, 4)
• Results: 1+3=4, 2+4=6

How it works:
1. First call: lambda(1, 3) → 1 + 3 = 4
2. Second call: lambda(2, 4) → 2 + 4 = 6
3. Result: [4, 6]

Examples:
• list(map(lambda x, y: x * y, [2, 3], [4, 5])) → [8, 15]
• list(map(pow, [2, 3], [3, 2])) → [8, 9]

Like zip, map with multiple iterables stops at the shortest:
• list(map(lambda x, y: x + y, [1], [2, 3])) → [3]

List comprehension equivalent:
• [x + y for x, y in zip([1, 2], [3, 4])]

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
  // 99. any() with map
  (_i: number) => ({
    q: `What is any(map(lambda x: x > 3, [1, 2, 3, 4]))?`,
    o: ['True', 'False', '4', 'Error'],
    c: 0,
    e: "map applies x > 3 to each: False, False, False, True. any() returns True if at least one is True.",
    de: `Combining map() with any() checks whether at least one element satisfies a condition.

Key concepts:
• map(lambda x: x > 3, [1, 2, 3, 4]) → False, False, False, True
• any() returns True if at least one value is truthy
• 4 > 3 is True → any() returns True

How it works:
1. map applies x > 3: 1>3=False, 2>3=False, 3>3=False, 4>3=True
2. any() iterates through the results
3. Finds True → immediately returns True (short-circuits)

Examples:
• any(map(lambda x: x < 0, [1, 2, 3])) → False
• all(map(lambda x: x > 0, [1, 2, 3])) → True

Generator equivalent (more Pythonic):
• any(x > 3 for x in [1, 2, 3, 4]) → True

Note: any() short-circuits — it stops checking as soon as it finds a truthy value.

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
  // 100. sum(map(int, ...)) to sum digits
  (_i: number) => ({
    q: `What is sum(map(int, "12345"))?`,
    o: ['15', '12345', '[1, 2, 3, 4, 5]', 'Error'],
    c: 0,
    e: 'map(int, "12345") converts each character to int: 1,2,3,4,5. sum() adds them: 15.',
    de: `This is an idiomatic Python pattern for summing the digits of a number represented as a string.

Key concepts:
• "12345" is iterable — yields '1', '2', '3', '4', '5'
• map(int, "12345") converts each character to an integer
• sum() adds them: 1 + 2 + 3 + 4 + 5 = 15

How it works:
1. "12345" → characters '1', '2', '3', '4', '5'
2. map(int, ...) → 1, 2, 3, 4, 5
3. sum() → 1 + 2 + 3 + 4 + 5 = 15

Examples:
• sum(map(int, "999")) → 27
• sum(map(int, "100")) → 1
• sum(map(int, str(12345))) → 15 (convert number to string first)

Common uses:
• Digital root calculations
• Digit sum validation (credit card checksums, etc.)
• Mathematical puzzles involving digit manipulation

Generator equivalent:
• sum(int(c) for c in "12345") → 15

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
