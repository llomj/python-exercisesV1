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
• Sets automatically enforce uniqueness Examples: • {1, 2, 3} → set with 3 elements • {"a", "b"} → set of strings • {1, "a", True} → mixed-type set Common uses: • Removing duplicates from data • Fast membership testing (O(1) average) • Set operations: union, intersection, difference

Key Distinctions:
• This question’s focus is best captured by: In Python, curly braces {} are used for both dicts and sets.
• The contrast that matters for correctness is summarized by: When the contents are plain values without key:value pairs, Python creates a set.

How It Works:
• Python follows the rule implied by: In Python, curly braces {} are used for both dicts and sets.
• The outcome you observe follows from: Sets automatically enforce uniqueness Examples: • {1, 2, 3} → set with 3 elements • {"a", "b"} → set of strings • {1, "a", True} → mixed-type set Common uses: • Removing duplicates from data • Fast membership testing (O(1) average) • Set operations: union, intersection, difference

Step-by-Step Execution:
1. Start from the construct described in: In Python, curly braces {} are used for both dicts and sets.
2. Resolve the subparts implied by: When the contents are plain values without key:value pairs, Python creates a set.
3. Apply the core semantics highlighted in: Key concepts: • {1, 2, 3} → set (values only, no colons) • {"a": 1} → dict (key:value pairs with colons) • Sets are unordered collections of unique elements • type({1, 2, 3}) returns <class 'set'> How it works: 1.
4. Confirm the final result aligns with: Sets automatically enforce uniqueness Examples: • {1, 2, 3} → set with 3 elements • {"a", "b"} → set of strings • {1, "a", True} → mixed-type set Common uses: • Removing duplicates from data • Fast membership testing (O(1) average) • Set operations: union, intersection, difference

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: When the contents are plain values without key:value pairs, Python creates a set.
2. Apply the construct’s main rule next, matching: In Python, curly braces {} are used for both dicts and sets.
3. Produce any intermediate values that Sets automatically enforce uniqueness Examples: • {1, 2, 3} → set with 3 elements • {"a", "b"} → set of strings • {1, "a", True} → mixed-type set Common uses: • Removing duplicates from data • Fast membership testing (O(1) average) • Set operations: union, intersection, difference relies on
4. Finish by returning/assembling the final output named by: Sets automatically enforce uniqueness Examples: • {1, 2, 3} → set with 3 elements • {"a", "b"} → set of strings • {1, "a", True} → mixed-type set Common uses: • Removing duplicates from data • Fast membership testing (O(1) average) • Set operations: union, intersection, difference
5. Use the result only after the full construct has completed, per: In Python, curly braces {} are used for both dicts and sets.

Common Use Cases:
• Teaching this behavior using the mental model: In Python, curly braces {} are used for both dicts and sets.
• Debugging when the observed value should match the expectation in: Sets automatically enforce uniqueness Examples: • {1, 2, 3} → set with 3 elements • {"a", "b"} → set of strings • {1, "a", True} → mixed-type set Common uses: • Removing duplicates from data • Fast membership testing (O(1) average) • Set operations: union, intersection, difference

Edge Cases:
• If inputs vary from the situation described in: When the contents are plain values without key:value pairs, Python creates a set., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • {1, 2, 3} → set (values only, no colons) • {"a": 1} → dict (key:value pairs with colons) • Sets are unordered collections of unique elements • type({1, 2, 3}) returns <class 'set'> How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Sets automatically enforce uniqueness Examples: • {1, 2, 3} → set with 3 elements • {"a", "b"} → set of strings • {1, "a", True} → mixed-type set Common uses: • Removing duplicates from data • Fast membership testing (O(1) average) • Set operations: union, intersection, difference.
• When performance matters, prefer the simplest pattern that still implements: In Python, curly braces {} are used for both dicts and sets..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: In Python, curly braces {} are used for both dicts and sets..

Notes:
• For maintainable code, make the intent behind: When the contents are plain values without key:value pairs, Python creates a set. explicit (and test it with inputs like those in this prompt).`
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
• Adds 3 → {1, 2, 3} Examples: • set([1, 1, 1]) → {1} • set("hello") → {'h', 'e', 'l', 'o'} • set((1, 2, 2)) → {1, 2} Common uses: • Deduplicating lists: unique = list(set(my_list)) • Counting unique elements: len(set(data))

Key Distinctions:
• This question’s focus is best captured by: The set() constructor creates a set from an iterable, automatically removing duplicate values.
• The contrast that matters for correctness is summarized by: Key concepts: • set([1, 2, 2, 3]) → {1, 2, 3} • Duplicate 2 is removed — sets store only unique elements • set() works with any iterable: lists, tuples, strings, etc.

How It Works:
• Python follows the rule implied by: The set() constructor creates a set from an iterable, automatically removing duplicate values.
• The outcome you observe follows from: Adds 3 → {1, 2, 3} Examples: • set([1, 1, 1]) → {1} • set("hello") → {'h', 'e', 'l', 'o'} • set((1, 2, 2)) → {1, 2} Common uses: • Deduplicating lists: unique = list(set(my_list)) • Counting unique elements: len(set(data))

Step-by-Step Execution:
1. Start from the construct described in: The set() constructor creates a set from an iterable, automatically removing duplicate values.
2. Resolve the subparts implied by: Key concepts: • set([1, 2, 2, 3]) → {1, 2, 3} • Duplicate 2 is removed — sets store only unique elements • set() works with any iterable: lists, tuples, strings, etc.
3. Apply the core semantics highlighted in: How it works: 1.
4. Confirm the final result aligns with: Adds 3 → {1, 2, 3} Examples: • set([1, 1, 1]) → {1} • set("hello") → {'h', 'e', 'l', 'o'} • set((1, 2, 2)) → {1, 2} Common uses: • Deduplicating lists: unique = list(set(my_list)) • Counting unique elements: len(set(data))

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • set([1, 2, 2, 3]) → {1, 2, 3} • Duplicate 2 is removed — sets store only unique elements • set() works with any iterable: lists, tuples, strings, etc.
2. Apply the construct’s main rule next, matching: The set() constructor creates a set from an iterable, automatically removing duplicate values.
3. Produce any intermediate values that Adds 3 → {1, 2, 3} Examples: • set([1, 1, 1]) → {1} • set("hello") → {'h', 'e', 'l', 'o'} • set((1, 2, 2)) → {1, 2} Common uses: • Deduplicating lists: unique = list(set(my_list)) • Counting unique elements: len(set(data)) relies on
4. Finish by returning/assembling the final output named by: Adds 3 → {1, 2, 3} Examples: • set([1, 1, 1]) → {1} • set("hello") → {'h', 'e', 'l', 'o'} • set((1, 2, 2)) → {1, 2} Common uses: • Deduplicating lists: unique = list(set(my_list)) • Counting unique elements: len(set(data))
5. Use the result only after the full construct has completed, per: The set() constructor creates a set from an iterable, automatically removing duplicate values.

Common Use Cases:
• Teaching this behavior using the mental model: The set() constructor creates a set from an iterable, automatically removing duplicate values.
• Debugging when the observed value should match the expectation in: Adds 3 → {1, 2, 3} Examples: • set([1, 1, 1]) → {1} • set("hello") → {'h', 'e', 'l', 'o'} • set((1, 2, 2)) → {1, 2} Common uses: • Deduplicating lists: unique = list(set(my_list)) • Counting unique elements: len(set(data))

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • set([1, 2, 2, 3]) → {1, 2, 3} • Duplicate 2 is removed — sets store only unique elements • set() works with any iterable: lists, tuples, strings, etc., the behavior can change.
• When the construct’s assumptions differ, the rule in: How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Adds 3 → {1, 2, 3} Examples: • set([1, 1, 1]) → {1} • set("hello") → {'h', 'e', 'l', 'o'} • set((1, 2, 2)) → {1, 2} Common uses: • Deduplicating lists: unique = list(set(my_list)) • Counting unique elements: len(set(data)).
• When performance matters, prefer the simplest pattern that still implements: The set() constructor creates a set from an iterable, automatically removing duplicate values..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The set() constructor creates a set from an iterable, automatically removing duplicate values..

Notes:
• For maintainable code, make the intent behind: Key concepts: • set([1, 2, 2, 3]) → {1, 2, 3} • Duplicate 2 is removed — sets store only unique elements • set() works with any iterable: lists, tuples, strings, etc. explicit (and test it with inputs like those in this prompt).`
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
• len(set()) returns 0 Examples: • set() → set() (empty set, displayed as set()) • {} → {} (empty dict!) • type(set()) → <class 'set'> • type({}) → <class 'dict'> Edge case: • {1} → set (one-element set) • {} → dict (empty dict — no elements to disambiguate)

Key Distinctions:
• This question’s focus is best captured by: This is a classic Python gotcha.
• The contrast that matters for correctness is summarized by: To create an empty set, you must use set(), not {}.

How It Works:
• Python follows the rule implied by: This is a classic Python gotcha.
• The outcome you observe follows from: len(set()) returns 0 Examples: • set() → set() (empty set, displayed as set()) • {} → {} (empty dict!) • type(set()) → <class 'set'> • type({}) → <class 'dict'> Edge case: • {1} → set (one-element set) • {} → dict (empty dict — no elements to disambiguate)

Step-by-Step Execution:
1. Start from the construct described in: This is a classic Python gotcha.
2. Resolve the subparts implied by: To create an empty set, you must use set(), not {}.
3. Apply the core semantics highlighted in: Key concepts: • set() → empty set • {} → empty dict (NOT an empty set!) • This is because {} was historically used for dicts before sets were added to Python How it works: 1.
4. Confirm the final result aligns with: len(set()) returns 0 Examples: • set() → set() (empty set, displayed as set()) • {} → {} (empty dict!) • type(set()) → <class 'set'> • type({}) → <class 'dict'> Edge case: • {1} → set (one-element set) • {} → dict (empty dict — no elements to disambiguate)

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: To create an empty set, you must use set(), not {}.
2. Apply the construct’s main rule next, matching: This is a classic Python gotcha.
3. Produce any intermediate values that len(set()) returns 0 Examples: • set() → set() (empty set, displayed as set()) • {} → {} (empty dict!) • type(set()) → <class 'set'> • type({}) → <class 'dict'> Edge case: • {1} → set (one-element set) • {} → dict (empty dict — no elements to disambiguate) relies on
4. Finish by returning/assembling the final output named by: len(set()) returns 0 Examples: • set() → set() (empty set, displayed as set()) • {} → {} (empty dict!) • type(set()) → <class 'set'> • type({}) → <class 'dict'> Edge case: • {1} → set (one-element set) • {} → dict (empty dict — no elements to disambiguate)
5. Use the result only after the full construct has completed, per: This is a classic Python gotcha.

Common Use Cases:
• Teaching this behavior using the mental model: This is a classic Python gotcha.
• Debugging when the observed value should match the expectation in: len(set()) returns 0 Examples: • set() → set() (empty set, displayed as set()) • {} → {} (empty dict!) • type(set()) → <class 'set'> • type({}) → <class 'dict'> Edge case: • {1} → set (one-element set) • {} → dict (empty dict — no elements to disambiguate)

Edge Cases:
• If inputs vary from the situation described in: To create an empty set, you must use set(), not {}., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • set() → empty set • {} → empty dict (NOT an empty set!) • This is because {} was historically used for dicts before sets were added to Python How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: len(set()) returns 0 Examples: • set() → set() (empty set, displayed as set()) • {} → {} (empty dict!) • type(set()) → <class 'set'> • type({}) → <class 'dict'> Edge case: • {1} → set (one-element set) • {} → dict (empty dict — no elements to disambiguate).
• When performance matters, prefer the simplest pattern that still implements: This is a classic Python gotcha..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This is a classic Python gotcha..

Notes:
• For maintainable code, make the intent behind: To create an empty set, you must use set(), not {}. explicit (and test it with inputs like those in this prompt).`
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
• Always use set() for that purpose.

Key Distinctions:
• This question’s focus is best captured by: Empty curly braces {} in Python create an empty dictionary, not an empty set.
• The contrast that matters for correctness is summarized by: This is a common misconception.

How It Works:
• Python follows the rule implied by: Empty curly braces {} in Python create an empty dictionary, not an empty set.
• The outcome you observe follows from: Always use set() for that purpose.

Step-by-Step Execution:
1. Start from the construct described in: Empty curly braces {} in Python create an empty dictionary, not an empty set.
2. Resolve the subparts implied by: This is a common misconception.
3. Apply the core semantics highlighted in: Key concepts: • {} → empty dict (type is dict) • set() → empty set (type is set) • {1, 2} → set (non-empty, values only) • {"a": 1} → dict (key:value pairs) How it works: 1.
4. Confirm the final result aligns with: Always use set() for that purpose.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: This is a common misconception.
2. Apply the construct’s main rule next, matching: Empty curly braces {} in Python create an empty dictionary, not an empty set.
3. Produce any intermediate values that Always use set() for that purpose. relies on
4. Finish by returning/assembling the final output named by: Always use set() for that purpose.
5. Use the result only after the full construct has completed, per: Empty curly braces {} in Python create an empty dictionary, not an empty set.

Common Use Cases:
• Teaching this behavior using the mental model: Empty curly braces {} in Python create an empty dictionary, not an empty set.
• Debugging when the observed value should match the expectation in: Always use set() for that purpose.

Edge Cases:
• If inputs vary from the situation described in: This is a common misconception., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • {} → empty dict (type is dict) • set() → empty set (type is set) • {1, 2} → set (non-empty, values only) • {"a": 1} → dict (key:value pairs) How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Always use set() for that purpose..
• When performance matters, prefer the simplest pattern that still implements: Empty curly braces {} in Python create an empty dictionary, not an empty set..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Empty curly braces {} in Python create an empty dictionary, not an empty set..

Notes:
• For maintainable code, make the intent behind: This is a common misconception. explicit (and test it with inputs like those in this prompt).`
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
• len() counts 3 unique elements Examples: • len({1, 1, 1, 1}) → 1 • len({1, 2, 3}) → 3 • len(set([1, 2, 2, 3, 3, 3])) → 3 Common uses: • Counting unique items: unique_count = len(set(items))

Key Distinctions:
• This question’s focus is best captured by: When you create a set with duplicate values, the duplicates are automatically removed.
• The contrast that matters for correctness is summarized by: The length reflects the number of unique elements.

How It Works:
• Python follows the rule implied by: When you create a set with duplicate values, the duplicates are automatically removed.
• The outcome you observe follows from: len() counts 3 unique elements Examples: • len({1, 1, 1, 1}) → 1 • len({1, 2, 3}) → 3 • len(set([1, 2, 2, 3, 3, 3])) → 3 Common uses: • Counting unique items: unique_count = len(set(items))

Step-by-Step Execution:
1. Start from the construct described in: When you create a set with duplicate values, the duplicates are automatically removed.
2. Resolve the subparts implied by: The length reflects the number of unique elements.
3. Apply the core semantics highlighted in: Key concepts: • {1, 2, 3, 3} → {1, 2, 3} (duplicate 3 removed) • len({1, 2, 3}) → 3 • Sets only store unique elements How it works: 1.
4. Confirm the final result aligns with: len() counts 3 unique elements Examples: • len({1, 1, 1, 1}) → 1 • len({1, 2, 3}) → 3 • len(set([1, 2, 2, 3, 3, 3])) → 3 Common uses: • Counting unique items: unique_count = len(set(items))

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The length reflects the number of unique elements.
2. Apply the construct’s main rule next, matching: When you create a set with duplicate values, the duplicates are automatically removed.
3. Produce any intermediate values that len() counts 3 unique elements Examples: • len({1, 1, 1, 1}) → 1 • len({1, 2, 3}) → 3 • len(set([1, 2, 2, 3, 3, 3])) → 3 Common uses: • Counting unique items: unique_count = len(set(items)) relies on
4. Finish by returning/assembling the final output named by: len() counts 3 unique elements Examples: • len({1, 1, 1, 1}) → 1 • len({1, 2, 3}) → 3 • len(set([1, 2, 2, 3, 3, 3])) → 3 Common uses: • Counting unique items: unique_count = len(set(items))
5. Use the result only after the full construct has completed, per: When you create a set with duplicate values, the duplicates are automatically removed.

Common Use Cases:
• Teaching this behavior using the mental model: When you create a set with duplicate values, the duplicates are automatically removed.
• Debugging when the observed value should match the expectation in: len() counts 3 unique elements Examples: • len({1, 1, 1, 1}) → 1 • len({1, 2, 3}) → 3 • len(set([1, 2, 2, 3, 3, 3])) → 3 Common uses: • Counting unique items: unique_count = len(set(items))

Edge Cases:
• If inputs vary from the situation described in: The length reflects the number of unique elements., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • {1, 2, 3, 3} → {1, 2, 3} (duplicate 3 removed) • len({1, 2, 3}) → 3 • Sets only store unique elements How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: len() counts 3 unique elements Examples: • len({1, 1, 1, 1}) → 1 • len({1, 2, 3}) → 3 • len(set([1, 2, 2, 3, 3, 3])) → 3 Common uses: • Counting unique items: unique_count = len(set(items)).
• When performance matters, prefer the simplest pattern that still implements: When you create a set with duplicate values, the duplicates are automatically removed..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: When you create a set with duplicate values, the duplicates are automatically removed..

Notes:
• For maintainable code, make the intent behind: The length reflects the number of unique elements. explicit (and test it with inputs like those in this prompt).`
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
• Result: {1, 2, 3, 4, 5} Examples: • {1, 2} | {3, 4} → {1, 2, 3, 4} • {1, 2} | {2, 3} → {1, 2, 3} • {1} | set() → {1} Related operators: • | union — all from both • & intersection — common to both • - difference — in left but not right • ^ symmetric difference — in one but not both

Key Distinctions:
• This question’s focus is best captured by: The | operator performs a set union, combining all unique elements from both sets.
• The contrast that matters for correctness is summarized by: Key concepts: • | is the union operator for sets • Returns all elements that appear in either set • Duplicates (3 appears in both) are included only once • Does not modify the original sets — returns a new set How it works: 1.

How It Works:
• Python follows the rule implied by: The | operator performs a set union, combining all unique elements from both sets.
• The outcome you observe follows from: Result: {1, 2, 3, 4, 5} Examples: • {1, 2} | {3, 4} → {1, 2, 3, 4} • {1, 2} | {2, 3} → {1, 2, 3} • {1} | set() → {1} Related operators: • | union — all from both • & intersection — common to both • - difference — in left but not right • ^ symmetric difference — in one but not both

Step-by-Step Execution:
1. Start from the construct described in: The | operator performs a set union, combining all unique elements from both sets.
2. Resolve the subparts implied by: Key concepts: • | is the union operator for sets • Returns all elements that appear in either set • Duplicates (3 appears in both) are included only once • Does not modify the original sets — returns a new set How it works: 1.
3. Apply the core semantics highlighted in: Left set: {1, 2, 3} 2.
4. Confirm the final result aligns with: Result: {1, 2, 3, 4, 5} Examples: • {1, 2} | {3, 4} → {1, 2, 3, 4} • {1, 2} | {2, 3} → {1, 2, 3} • {1} | set() → {1} Related operators: • | union — all from both • & intersection — common to both • - difference — in left but not right • ^ symmetric difference — in one but not both

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • | is the union operator for sets • Returns all elements that appear in either set • Duplicates (3 appears in both) are included only once • Does not modify the original sets — returns a new set How it works: 1.
2. Apply the construct’s main rule next, matching: The | operator performs a set union, combining all unique elements from both sets.
3. Produce any intermediate values that Result: {1, 2, 3, 4, 5} Examples: • {1, 2} | {3, 4} → {1, 2, 3, 4} • {1, 2} | {2, 3} → {1, 2, 3} • {1} | set() → {1} Related operators: • | union — all from both • & intersection — common to both • - difference — in left but not right • ^ symmetric difference — in one but not both relies on
4. Finish by returning/assembling the final output named by: Result: {1, 2, 3, 4, 5} Examples: • {1, 2} | {3, 4} → {1, 2, 3, 4} • {1, 2} | {2, 3} → {1, 2, 3} • {1} | set() → {1} Related operators: • | union — all from both • & intersection — common to both • - difference — in left but not right • ^ symmetric difference — in one but not both
5. Use the result only after the full construct has completed, per: The | operator performs a set union, combining all unique elements from both sets.

Common Use Cases:
• Teaching this behavior using the mental model: The | operator performs a set union, combining all unique elements from both sets.
• Debugging when the observed value should match the expectation in: Result: {1, 2, 3, 4, 5} Examples: • {1, 2} | {3, 4} → {1, 2, 3, 4} • {1, 2} | {2, 3} → {1, 2, 3} • {1} | set() → {1} Related operators: • | union — all from both • & intersection — common to both • - difference — in left but not right • ^ symmetric difference — in one but not both

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • | is the union operator for sets • Returns all elements that appear in either set • Duplicates (3 appears in both) are included only once • Does not modify the original sets — returns a new set How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: Left set: {1, 2, 3} 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Result: {1, 2, 3, 4, 5} Examples: • {1, 2} | {3, 4} → {1, 2, 3, 4} • {1, 2} | {2, 3} → {1, 2, 3} • {1} | set() → {1} Related operators: • | union — all from both • & intersection — common to both • - difference — in left but not right • ^ symmetric difference — in one but not both.
• When performance matters, prefer the simplest pattern that still implements: The | operator performs a set union, combining all unique elements from both sets..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The | operator performs a set union, combining all unique elements from both sets..

Notes:
• For maintainable code, make the intent behind: Key concepts: • | is the union operator for sets • Returns all elements that appear in either set • Duplicates (3 appears in both) are included only once • Does not modify the original sets — returns a new set How it works: 1. explicit (and test it with inputs like those in this prompt).`
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
• Result: {2, 3} Examples: • {1, 2, 3} & {3, 4, 5} → {3} • {1, 2} & {3, 4} → set() (no common elements) • {"a", "b"} & {"b", "c"} → {"b"} Common uses: • Finding shared elements between collections • Checking overlap between datasets

Key Distinctions:
• This question’s focus is best captured by: The & operator performs a set intersection, returning only the elements that appear in both sets.
• The contrast that matters for correctness is summarized by: Key concepts: • & is the intersection operator for sets • Returns only elements present in both sets • 2 and 3 are in both {1, 2, 3} and {2, 3, 4} • Result is {2, 3} How it works: 1.

How It Works:
• Python follows the rule implied by: The & operator performs a set intersection, returning only the elements that appear in both sets.
• The outcome you observe follows from: Result: {2, 3} Examples: • {1, 2, 3} & {3, 4, 5} → {3} • {1, 2} & {3, 4} → set() (no common elements) • {"a", "b"} & {"b", "c"} → {"b"} Common uses: • Finding shared elements between collections • Checking overlap between datasets

Step-by-Step Execution:
1. Start from the construct described in: The & operator performs a set intersection, returning only the elements that appear in both sets.
2. Resolve the subparts implied by: Key concepts: • & is the intersection operator for sets • Returns only elements present in both sets • 2 and 3 are in both {1, 2, 3} and {2, 3, 4} • Result is {2, 3} How it works: 1.
3. Apply the core semantics highlighted in: Left set: {1, 2, 3} 2.
4. Confirm the final result aligns with: Result: {2, 3} Examples: • {1, 2, 3} & {3, 4, 5} → {3} • {1, 2} & {3, 4} → set() (no common elements) • {"a", "b"} & {"b", "c"} → {"b"} Common uses: • Finding shared elements between collections • Checking overlap between datasets

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • & is the intersection operator for sets • Returns only elements present in both sets • 2 and 3 are in both {1, 2, 3} and {2, 3, 4} • Result is {2, 3} How it works: 1.
2. Apply the construct’s main rule next, matching: The & operator performs a set intersection, returning only the elements that appear in both sets.
3. Produce any intermediate values that Result: {2, 3} Examples: • {1, 2, 3} & {3, 4, 5} → {3} • {1, 2} & {3, 4} → set() (no common elements) • {"a", "b"} & {"b", "c"} → {"b"} Common uses: • Finding shared elements between collections • Checking overlap between datasets relies on
4. Finish by returning/assembling the final output named by: Result: {2, 3} Examples: • {1, 2, 3} & {3, 4, 5} → {3} • {1, 2} & {3, 4} → set() (no common elements) • {"a", "b"} & {"b", "c"} → {"b"} Common uses: • Finding shared elements between collections • Checking overlap between datasets
5. Use the result only after the full construct has completed, per: The & operator performs a set intersection, returning only the elements that appear in both sets.

Common Use Cases:
• Teaching this behavior using the mental model: The & operator performs a set intersection, returning only the elements that appear in both sets.
• Debugging when the observed value should match the expectation in: Result: {2, 3} Examples: • {1, 2, 3} & {3, 4, 5} → {3} • {1, 2} & {3, 4} → set() (no common elements) • {"a", "b"} & {"b", "c"} → {"b"} Common uses: • Finding shared elements between collections • Checking overlap between datasets

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • & is the intersection operator for sets • Returns only elements present in both sets • 2 and 3 are in both {1, 2, 3} and {2, 3, 4} • Result is {2, 3} How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: Left set: {1, 2, 3} 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Result: {2, 3} Examples: • {1, 2, 3} & {3, 4, 5} → {3} • {1, 2} & {3, 4} → set() (no common elements) • {"a", "b"} & {"b", "c"} → {"b"} Common uses: • Finding shared elements between collections • Checking overlap between datasets.
• When performance matters, prefer the simplest pattern that still implements: The & operator performs a set intersection, returning only the elements that appear in both sets..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The & operator performs a set intersection, returning only the elements that appear in both sets..

Notes:
• For maintainable code, make the intent behind: Key concepts: • & is the intersection operator for sets • Returns only elements present in both sets • 2 and 3 are in both {1, 2, 3} and {2, 3, 4} • Result is {2, 3} How it works: 1. explicit (and test it with inputs like those in this prompt).`
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
• {2, 3, 4} - {1, 2, 3} → {4}.

Key Distinctions:
• This question’s focus is best captured by: The - operator performs a set difference, returning elements in the first set that are not in the second.
• The contrast that matters for correctness is summarized by: Key concepts: • - is the difference operator for sets • Returns elements in the left set but not in the right • 1 is in {1, 2, 3} but not in {2, 3, 4} • 2 and 3 are removed because they appear in the right set How it works: 1.

How It Works:
• Python follows the rule implied by: The - operator performs a set difference, returning elements in the first set that are not in the second.
• The outcome you observe follows from: {2, 3, 4} - {1, 2, 3} → {4}.

Step-by-Step Execution:
1. Start from the construct described in: The - operator performs a set difference, returning elements in the first set that are not in the second.
2. Resolve the subparts implied by: Key concepts: • - is the difference operator for sets • Returns elements in the left set but not in the right • 1 is in {1, 2, 3} but not in {2, 3, 4} • 2 and 3 are removed because they appear in the right set How it works: 1.
3. Apply the core semantics highlighted in: Start with {1, 2, 3} 2.
4. Confirm the final result aligns with: {2, 3, 4} - {1, 2, 3} → {4}.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • - is the difference operator for sets • Returns elements in the left set but not in the right • 1 is in {1, 2, 3} but not in {2, 3, 4} • 2 and 3 are removed because they appear in the right set How it works: 1.
2. Apply the construct’s main rule next, matching: The - operator performs a set difference, returning elements in the first set that are not in the second.
3. Produce any intermediate values that {2, 3, 4} - {1, 2, 3} → {4}. relies on
4. Finish by returning/assembling the final output named by: {2, 3, 4} - {1, 2, 3} → {4}.
5. Use the result only after the full construct has completed, per: The - operator performs a set difference, returning elements in the first set that are not in the second.

Common Use Cases:
• Teaching this behavior using the mental model: The - operator performs a set difference, returning elements in the first set that are not in the second.
• Debugging when the observed value should match the expectation in: {2, 3, 4} - {1, 2, 3} → {4}.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • - is the difference operator for sets • Returns elements in the left set but not in the right • 1 is in {1, 2, 3} but not in {2, 3, 4} • 2 and 3 are removed because they appear in the right set How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: Start with {1, 2, 3} 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: {2, 3, 4} - {1, 2, 3} → {4}..
• When performance matters, prefer the simplest pattern that still implements: The - operator performs a set difference, returning elements in the first set that are not in the second..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The - operator performs a set difference, returning elements in the first set that are not in the second..

Notes:
• For maintainable code, make the intent behind: Key concepts: • - is the difference operator for sets • Returns elements in the left set but not in the right • 1 is in {1, 2, 3} but not in {2, 3, 4} • 2 and 3 are removed because they appear in the right set How it works: 1. explicit (and test it with inputs like those in this prompt).`
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
• Result: {1, 4} Examples: • {1, 2} ^ {2, 3} → {1, 3} • {1, 2} ^ {1, 2} → set() (all shared) • {1, 2} ^ {3, 4} → {1, 2, 3, 4} (none shared) Note: Symmetric difference is equivalent to (A | B) - (A & B), or (A - B) | (B - A).

Key Distinctions:
• This question’s focus is best captured by: The ^ operator performs a symmetric difference — elements that are in one set or the other, but not both.
• The contrast that matters for correctness is summarized by: Key concepts: • ^ is the symmetric difference operator • Returns elements unique to each set (not shared) • 1 is only in the left set, 4 is only in the right set • 2 and 3 are in both, so they are excluded How it works: 1.

How It Works:
• Python follows the rule implied by: The ^ operator performs a symmetric difference — elements that are in one set or the other, but not both.
• The outcome you observe follows from: Result: {1, 4} Examples: • {1, 2} ^ {2, 3} → {1, 3} • {1, 2} ^ {1, 2} → set() (all shared) • {1, 2} ^ {3, 4} → {1, 2, 3, 4} (none shared) Note: Symmetric difference is equivalent to (A | B) - (A & B), or (A - B) | (B - A).

Step-by-Step Execution:
1. Start from the construct described in: The ^ operator performs a symmetric difference — elements that are in one set or the other, but not both.
2. Resolve the subparts implied by: Key concepts: • ^ is the symmetric difference operator • Returns elements unique to each set (not shared) • 1 is only in the left set, 4 is only in the right set • 2 and 3 are in both, so they are excluded How it works: 1.
3. Apply the core semantics highlighted in: Left set: {1, 2, 3} 2.
4. Confirm the final result aligns with: Result: {1, 4} Examples: • {1, 2} ^ {2, 3} → {1, 3} • {1, 2} ^ {1, 2} → set() (all shared) • {1, 2} ^ {3, 4} → {1, 2, 3, 4} (none shared) Note: Symmetric difference is equivalent to (A | B) - (A & B), or (A - B) | (B - A).

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • ^ is the symmetric difference operator • Returns elements unique to each set (not shared) • 1 is only in the left set, 4 is only in the right set • 2 and 3 are in both, so they are excluded How it works: 1.
2. Apply the construct’s main rule next, matching: The ^ operator performs a symmetric difference — elements that are in one set or the other, but not both.
3. Produce any intermediate values that Result: {1, 4} Examples: • {1, 2} ^ {2, 3} → {1, 3} • {1, 2} ^ {1, 2} → set() (all shared) • {1, 2} ^ {3, 4} → {1, 2, 3, 4} (none shared) Note: Symmetric difference is equivalent to (A | B) - (A & B), or (A - B) | (B - A). relies on
4. Finish by returning/assembling the final output named by: Result: {1, 4} Examples: • {1, 2} ^ {2, 3} → {1, 3} • {1, 2} ^ {1, 2} → set() (all shared) • {1, 2} ^ {3, 4} → {1, 2, 3, 4} (none shared) Note: Symmetric difference is equivalent to (A | B) - (A & B), or (A - B) | (B - A).
5. Use the result only after the full construct has completed, per: The ^ operator performs a symmetric difference — elements that are in one set or the other, but not both.

Common Use Cases:
• Teaching this behavior using the mental model: The ^ operator performs a symmetric difference — elements that are in one set or the other, but not both.
• Debugging when the observed value should match the expectation in: Result: {1, 4} Examples: • {1, 2} ^ {2, 3} → {1, 3} • {1, 2} ^ {1, 2} → set() (all shared) • {1, 2} ^ {3, 4} → {1, 2, 3, 4} (none shared) Note: Symmetric difference is equivalent to (A | B) - (A & B), or (A - B) | (B - A).

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • ^ is the symmetric difference operator • Returns elements unique to each set (not shared) • 1 is only in the left set, 4 is only in the right set • 2 and 3 are in both, so they are excluded How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: Left set: {1, 2, 3} 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Result: {1, 4} Examples: • {1, 2} ^ {2, 3} → {1, 3} • {1, 2} ^ {1, 2} → set() (all shared) • {1, 2} ^ {3, 4} → {1, 2, 3, 4} (none shared) Note: Symmetric difference is equivalent to (A | B) - (A & B), or (A - B) | (B - A)..
• When performance matters, prefer the simplest pattern that still implements: The ^ operator performs a symmetric difference — elements that are in one set or the other, but not both..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The ^ operator performs a symmetric difference — elements that are in one set or the other, but not both..

Notes:
• For maintainable code, make the intent behind: Key concepts: • ^ is the symmetric difference operator • Returns elements unique to each set (not shared) • 1 is only in the left set, 4 is only in the right set • 2 and 3 are in both, so they are excluded How it works: 1. explicit (and test it with inputs like those in this prompt).`
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
• All elements are present → True Examples: • {1}.issubset({1, 2, 3}) → True • {1, 2, 3}.issubset({1, 2, 3}) → True (every set is a subset of itself) • {1, 4}.issubset({1, 2, 3}) → False (4 not in the superset) • set().issubset({1, 2}) → True (empty set is subset of everything)

Key Distinctions:
• This question’s focus is best captured by: The issubset() method checks whether every element of the calling set is contained in the argument set.
• The contrast that matters for correctness is summarized by: Key concepts: • A.issubset(B) → True if every element of A is in B • {1, 2} ⊆ {1, 2, 3} → True • Equivalent to: A <= B How it works: 1.

How It Works:
• Python follows the rule implied by: The issubset() method checks whether every element of the calling set is contained in the argument set.
• The outcome you observe follows from: All elements are present → True Examples: • {1}.issubset({1, 2, 3}) → True • {1, 2, 3}.issubset({1, 2, 3}) → True (every set is a subset of itself) • {1, 4}.issubset({1, 2, 3}) → False (4 not in the superset) • set().issubset({1, 2}) → True (empty set is subset of everything)

Step-by-Step Execution:
1. Start from the construct described in: The issubset() method checks whether every element of the calling set is contained in the argument set.
2. Resolve the subparts implied by: Key concepts: • A.issubset(B) → True if every element of A is in B • {1, 2} ⊆ {1, 2, 3} → True • Equivalent to: A <= B How it works: 1.
3. Apply the core semantics highlighted in: Check: is 1 in {1, 2, 3}?
4. Confirm the final result aligns with: All elements are present → True Examples: • {1}.issubset({1, 2, 3}) → True • {1, 2, 3}.issubset({1, 2, 3}) → True (every set is a subset of itself) • {1, 4}.issubset({1, 2, 3}) → False (4 not in the superset) • set().issubset({1, 2}) → True (empty set is subset of everything)

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • A.issubset(B) → True if every element of A is in B • {1, 2} ⊆ {1, 2, 3} → True • Equivalent to: A <= B How it works: 1.
2. Apply the construct’s main rule next, matching: The issubset() method checks whether every element of the calling set is contained in the argument set.
3. Produce any intermediate values that All elements are present → True Examples: • {1}.issubset({1, 2, 3}) → True • {1, 2, 3}.issubset({1, 2, 3}) → True (every set is a subset of itself) • {1, 4}.issubset({1, 2, 3}) → False (4 not in the superset) • set().issubset({1, 2}) → True (empty set is subset of everything) relies on
4. Finish by returning/assembling the final output named by: All elements are present → True Examples: • {1}.issubset({1, 2, 3}) → True • {1, 2, 3}.issubset({1, 2, 3}) → True (every set is a subset of itself) • {1, 4}.issubset({1, 2, 3}) → False (4 not in the superset) • set().issubset({1, 2}) → True (empty set is subset of everything)
5. Use the result only after the full construct has completed, per: The issubset() method checks whether every element of the calling set is contained in the argument set.

Common Use Cases:
• Teaching this behavior using the mental model: The issubset() method checks whether every element of the calling set is contained in the argument set.
• Debugging when the observed value should match the expectation in: All elements are present → True Examples: • {1}.issubset({1, 2, 3}) → True • {1, 2, 3}.issubset({1, 2, 3}) → True (every set is a subset of itself) • {1, 4}.issubset({1, 2, 3}) → False (4 not in the superset) • set().issubset({1, 2}) → True (empty set is subset of everything)

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • A.issubset(B) → True if every element of A is in B • {1, 2} ⊆ {1, 2, 3} → True • Equivalent to: A <= B How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: Check: is 1 in {1, 2, 3}? is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: All elements are present → True Examples: • {1}.issubset({1, 2, 3}) → True • {1, 2, 3}.issubset({1, 2, 3}) → True (every set is a subset of itself) • {1, 4}.issubset({1, 2, 3}) → False (4 not in the superset) • set().issubset({1, 2}) → True (empty set is subset of everything).
• When performance matters, prefer the simplest pattern that still implements: The issubset() method checks whether every element of the calling set is contained in the argument set..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The issubset() method checks whether every element of the calling set is contained in the argument set..

Notes:
• For maintainable code, make the intent behind: Key concepts: • A.issubset(B) → True if every element of A is in B • {1, 2} ⊆ {1, 2, 3} → True • Equivalent to: A <= B How it works: 1. explicit (and test it with inputs like those in this prompt).`
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
• All elements accounted for → True Examples: • {1, 2, 3}.issuperset({1, 2, 3}) → True • {1, 2, 3}.issuperset(set()) → True • {1, 2}.issuperset({1, 2, 3}) → False (missing 3)

Key Distinctions:
• This question’s focus is best captured by: The issuperset() method checks whether the calling set contains every element of the argument set.
• The contrast that matters for correctness is summarized by: Key concepts: • A.issuperset(B) → True if every element of B is in A • {1, 2, 3} ⊇ {1, 2} → True • Equivalent to: A >= B • Inverse of issubset: A.issuperset(B) ↔ B.issubset(A) How it works: 1.

How It Works:
• Python follows the rule implied by: The issuperset() method checks whether the calling set contains every element of the argument set.
• The outcome you observe follows from: All elements accounted for → True Examples: • {1, 2, 3}.issuperset({1, 2, 3}) → True • {1, 2, 3}.issuperset(set()) → True • {1, 2}.issuperset({1, 2, 3}) → False (missing 3)

Step-by-Step Execution:
1. Start from the construct described in: The issuperset() method checks whether the calling set contains every element of the argument set.
2. Resolve the subparts implied by: Key concepts: • A.issuperset(B) → True if every element of B is in A • {1, 2, 3} ⊇ {1, 2} → True • Equivalent to: A >= B • Inverse of issubset: A.issuperset(B) ↔ B.issubset(A) How it works: 1.
3. Apply the core semantics highlighted in: Check: is 1 (from {1, 2}) in {1, 2, 3}?
4. Confirm the final result aligns with: All elements accounted for → True Examples: • {1, 2, 3}.issuperset({1, 2, 3}) → True • {1, 2, 3}.issuperset(set()) → True • {1, 2}.issuperset({1, 2, 3}) → False (missing 3)

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • A.issuperset(B) → True if every element of B is in A • {1, 2, 3} ⊇ {1, 2} → True • Equivalent to: A >= B • Inverse of issubset: A.issuperset(B) ↔ B.issubset(A) How it works: 1.
2. Apply the construct’s main rule next, matching: The issuperset() method checks whether the calling set contains every element of the argument set.
3. Produce any intermediate values that All elements accounted for → True Examples: • {1, 2, 3}.issuperset({1, 2, 3}) → True • {1, 2, 3}.issuperset(set()) → True • {1, 2}.issuperset({1, 2, 3}) → False (missing 3) relies on
4. Finish by returning/assembling the final output named by: All elements accounted for → True Examples: • {1, 2, 3}.issuperset({1, 2, 3}) → True • {1, 2, 3}.issuperset(set()) → True • {1, 2}.issuperset({1, 2, 3}) → False (missing 3)
5. Use the result only after the full construct has completed, per: The issuperset() method checks whether the calling set contains every element of the argument set.

Common Use Cases:
• Teaching this behavior using the mental model: The issuperset() method checks whether the calling set contains every element of the argument set.
• Debugging when the observed value should match the expectation in: All elements accounted for → True Examples: • {1, 2, 3}.issuperset({1, 2, 3}) → True • {1, 2, 3}.issuperset(set()) → True • {1, 2}.issuperset({1, 2, 3}) → False (missing 3)

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • A.issuperset(B) → True if every element of B is in A • {1, 2, 3} ⊇ {1, 2} → True • Equivalent to: A >= B • Inverse of issubset: A.issuperset(B) ↔ B.issubset(A) How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: Check: is 1 (from {1, 2}) in {1, 2, 3}? is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: All elements accounted for → True Examples: • {1, 2, 3}.issuperset({1, 2, 3}) → True • {1, 2, 3}.issuperset(set()) → True • {1, 2}.issuperset({1, 2, 3}) → False (missing 3).
• When performance matters, prefer the simplest pattern that still implements: The issuperset() method checks whether the calling set contains every element of the argument set..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The issuperset() method checks whether the calling set contains every element of the argument set..

Notes:
• For maintainable code, make the intent behind: Key concepts: • A.issuperset(B) → True if every element of B is in A • {1, 2, 3} ⊇ {1, 2} → True • Equivalent to: A >= B • Inverse of issubset: A.issuperset(B) ↔ B.issubset(A) How it works: 1. explicit (and test it with inputs like those in this prompt).`
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
• No common elements found → True Examples: • {1, 2}.isdisjoint({2, 3}) → False (2 in common) • set().isdisjoint(set()) → True (no elements at all) • {"a"}.isdisjoint({1, 2}) → True

Key Distinctions:
• This question’s focus is best captured by: The isdisjoint() method returns True if the two sets have no elements in common.
• The contrast that matters for correctness is summarized by: Key concepts: • A.isdisjoint(B) → True if A ∩ B = ∅ (empty intersection) • {1, 2} and {3, 4} have no overlap → True • Equivalent to: len(A & B) == 0 How it works: 1.

How It Works:
• Python follows the rule implied by: The isdisjoint() method returns True if the two sets have no elements in common.
• The outcome you observe follows from: No common elements found → True Examples: • {1, 2}.isdisjoint({2, 3}) → False (2 in common) • set().isdisjoint(set()) → True (no elements at all) • {"a"}.isdisjoint({1, 2}) → True

Step-by-Step Execution:
1. Start from the construct described in: The isdisjoint() method returns True if the two sets have no elements in common.
2. Resolve the subparts implied by: Key concepts: • A.isdisjoint(B) → True if A ∩ B = ∅ (empty intersection) • {1, 2} and {3, 4} have no overlap → True • Equivalent to: len(A & B) == 0 How it works: 1.
3. Apply the core semantics highlighted in: Check: is 1 in {3, 4}?
4. Confirm the final result aligns with: No common elements found → True Examples: • {1, 2}.isdisjoint({2, 3}) → False (2 in common) • set().isdisjoint(set()) → True (no elements at all) • {"a"}.isdisjoint({1, 2}) → True

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • A.isdisjoint(B) → True if A ∩ B = ∅ (empty intersection) • {1, 2} and {3, 4} have no overlap → True • Equivalent to: len(A & B) == 0 How it works: 1.
2. Apply the construct’s main rule next, matching: The isdisjoint() method returns True if the two sets have no elements in common.
3. Produce any intermediate values that No common elements found → True Examples: • {1, 2}.isdisjoint({2, 3}) → False (2 in common) • set().isdisjoint(set()) → True (no elements at all) • {"a"}.isdisjoint({1, 2}) → True relies on
4. Finish by returning/assembling the final output named by: No common elements found → True Examples: • {1, 2}.isdisjoint({2, 3}) → False (2 in common) • set().isdisjoint(set()) → True (no elements at all) • {"a"}.isdisjoint({1, 2}) → True
5. Use the result only after the full construct has completed, per: The isdisjoint() method returns True if the two sets have no elements in common.

Common Use Cases:
• Teaching this behavior using the mental model: The isdisjoint() method returns True if the two sets have no elements in common.
• Debugging when the observed value should match the expectation in: No common elements found → True Examples: • {1, 2}.isdisjoint({2, 3}) → False (2 in common) • set().isdisjoint(set()) → True (no elements at all) • {"a"}.isdisjoint({1, 2}) → True

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • A.isdisjoint(B) → True if A ∩ B = ∅ (empty intersection) • {1, 2} and {3, 4} have no overlap → True • Equivalent to: len(A & B) == 0 How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: Check: is 1 in {3, 4}? is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: No common elements found → True Examples: • {1, 2}.isdisjoint({2, 3}) → False (2 in common) • set().isdisjoint(set()) → True (no elements at all) • {"a"}.isdisjoint({1, 2}) → True.
• When performance matters, prefer the simplest pattern that still implements: The isdisjoint() method returns True if the two sets have no elements in common..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The isdisjoint() method returns True if the two sets have no elements in common..

Notes:
• For maintainable code, make the intent behind: Key concepts: • A.isdisjoint(B) → True if A ∩ B = ∅ (empty intersection) • {1, 2} and {3, 4} have no overlap → True • Equivalent to: len(A & B) == 0 How it works: 1. explicit (and test it with inputs like those in this prompt).`
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
• Common element exists → False Examples: • {1, 2, 3}.isdisjoint({3, 4, 5}) → False (3 in common) • {"a", "b"}.isdisjoint({"b", "c"}) → False ("b" in common) Note: isdisjoint short-circuits — it stops as soon as it finds one common element.

Key Distinctions:
• This question’s focus is best captured by: isdisjoint() returns False when the two sets share at least one common element.
• The contrast that matters for correctness is summarized by: Key concepts: • {1, 2} and {2, 3} share element 2 • Since there's an overlap → False (not disjoint) • isdisjoint is symmetric: A.isdisjoint(B) == B.isdisjoint(A) How it works: 1.

How It Works:
• Python follows the rule implied by: isdisjoint() returns False when the two sets share at least one common element.
• The outcome you observe follows from: Common element exists → False Examples: • {1, 2, 3}.isdisjoint({3, 4, 5}) → False (3 in common) • {"a", "b"}.isdisjoint({"b", "c"}) → False ("b" in common) Note: isdisjoint short-circuits — it stops as soon as it finds one common element.

Step-by-Step Execution:
1. Start from the construct described in: isdisjoint() returns False when the two sets share at least one common element.
2. Resolve the subparts implied by: Key concepts: • {1, 2} and {2, 3} share element 2 • Since there's an overlap → False (not disjoint) • isdisjoint is symmetric: A.isdisjoint(B) == B.isdisjoint(A) How it works: 1.
3. Apply the core semantics highlighted in: Check: is 1 in {2, 3}?
4. Confirm the final result aligns with: Common element exists → False Examples: • {1, 2, 3}.isdisjoint({3, 4, 5}) → False (3 in common) • {"a", "b"}.isdisjoint({"b", "c"}) → False ("b" in common) Note: isdisjoint short-circuits — it stops as soon as it finds one common element.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • {1, 2} and {2, 3} share element 2 • Since there's an overlap → False (not disjoint) • isdisjoint is symmetric: A.isdisjoint(B) == B.isdisjoint(A) How it works: 1.
2. Apply the construct’s main rule next, matching: isdisjoint() returns False when the two sets share at least one common element.
3. Produce any intermediate values that Common element exists → False Examples: • {1, 2, 3}.isdisjoint({3, 4, 5}) → False (3 in common) • {"a", "b"}.isdisjoint({"b", "c"}) → False ("b" in common) Note: isdisjoint short-circuits — it stops as soon as it finds one common element. relies on
4. Finish by returning/assembling the final output named by: Common element exists → False Examples: • {1, 2, 3}.isdisjoint({3, 4, 5}) → False (3 in common) • {"a", "b"}.isdisjoint({"b", "c"}) → False ("b" in common) Note: isdisjoint short-circuits — it stops as soon as it finds one common element.
5. Use the result only after the full construct has completed, per: isdisjoint() returns False when the two sets share at least one common element.

Common Use Cases:
• Teaching this behavior using the mental model: isdisjoint() returns False when the two sets share at least one common element.
• Debugging when the observed value should match the expectation in: Common element exists → False Examples: • {1, 2, 3}.isdisjoint({3, 4, 5}) → False (3 in common) • {"a", "b"}.isdisjoint({"b", "c"}) → False ("b" in common) Note: isdisjoint short-circuits — it stops as soon as it finds one common element.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • {1, 2} and {2, 3} share element 2 • Since there's an overlap → False (not disjoint) • isdisjoint is symmetric: A.isdisjoint(B) == B.isdisjoint(A) How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: Check: is 1 in {2, 3}? is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Common element exists → False Examples: • {1, 2, 3}.isdisjoint({3, 4, 5}) → False (3 in common) • {"a", "b"}.isdisjoint({"b", "c"}) → False ("b" in common) Note: isdisjoint short-circuits — it stops as soon as it finds one common element..
• When performance matters, prefer the simplest pattern that still implements: isdisjoint() returns False when the two sets share at least one common element..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: isdisjoint() returns False when the two sets share at least one common element..

Notes:
• For maintainable code, make the intent behind: Key concepts: • {1, 2} and {2, 3} share element 2 • Since there's an overlap → False (not disjoint) • isdisjoint is symmetric: A.isdisjoint(B) == B.isdisjoint(A) How it works: 1. explicit (and test it with inputs like those in this prompt).`
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
• Sets don't have append() because they are unordered.

Key Distinctions:
• This question’s focus is best captured by: The add() method adds a single element to a set.
• The contrast that matters for correctness is summarized by: If the element is already present, the set is unchanged.

How It Works:
• Python follows the rule implied by: The add() method adds a single element to a set.
• The outcome you observe follows from: Sets don't have append() because they are unordered.

Step-by-Step Execution:
1. Start from the construct described in: The add() method adds a single element to a set.
2. Resolve the subparts implied by: If the element is already present, the set is unchanged.
3. Apply the core semantics highlighted in: Key concepts: • s.add(element) adds element to the set in-place • add() returns None (modifies set directly) • If element already exists, nothing happens (no error) How it works: 1.
4. Confirm the final result aligns with: Sets don't have append() because they are unordered.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: If the element is already present, the set is unchanged.
2. Apply the construct’s main rule next, matching: The add() method adds a single element to a set.
3. Produce any intermediate values that Sets don't have append() because they are unordered. relies on
4. Finish by returning/assembling the final output named by: Sets don't have append() because they are unordered.
5. Use the result only after the full construct has completed, per: The add() method adds a single element to a set.

Common Use Cases:
• Teaching this behavior using the mental model: The add() method adds a single element to a set.
• Debugging when the observed value should match the expectation in: Sets don't have append() because they are unordered.

Edge Cases:
• If inputs vary from the situation described in: If the element is already present, the set is unchanged., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • s.add(element) adds element to the set in-place • add() returns None (modifies set directly) • If element already exists, nothing happens (no error) How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Sets don't have append() because they are unordered..
• When performance matters, prefer the simplest pattern that still implements: The add() method adds a single element to a set..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The add() method adds a single element to a set..

Notes:
• For maintainable code, make the intent behind: If the element is already present, the set is unchanged. explicit (and test it with inputs like those in this prompt).`
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
• s is now {1, 3} Examples: • s = {1, 2, 3}; s.discard(3) → s is {1, 2} • s = {1, 2}; s.discard(5) → s is still {1, 2} (no error) Compare with remove(): • discard() → no error if missing • remove() → raises KeyError if missing

Key Distinctions:
• This question’s focus is best captured by: The discard() method removes a specific element from the set.
• The contrast that matters for correctness is summarized by: If the element is not found, it does nothing (no error).

How It Works:
• Python follows the rule implied by: The discard() method removes a specific element from the set.
• The outcome you observe follows from: s is now {1, 3} Examples: • s = {1, 2, 3}; s.discard(3) → s is {1, 2} • s = {1, 2}; s.discard(5) → s is still {1, 2} (no error) Compare with remove(): • discard() → no error if missing • remove() → raises KeyError if missing

Step-by-Step Execution:
1. Start from the construct described in: The discard() method removes a specific element from the set.
2. Resolve the subparts implied by: If the element is not found, it does nothing (no error).
3. Apply the core semantics highlighted in: Key concepts: • s.discard(element) removes element if present • Returns None • Does NOT raise an error if element is missing • This is the safe removal method How it works: 1.
4. Confirm the final result aligns with: s is now {1, 3} Examples: • s = {1, 2, 3}; s.discard(3) → s is {1, 2} • s = {1, 2}; s.discard(5) → s is still {1, 2} (no error) Compare with remove(): • discard() → no error if missing • remove() → raises KeyError if missing

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: If the element is not found, it does nothing (no error).
2. Apply the construct’s main rule next, matching: The discard() method removes a specific element from the set.
3. Produce any intermediate values that s is now {1, 3} Examples: • s = {1, 2, 3}; s.discard(3) → s is {1, 2} • s = {1, 2}; s.discard(5) → s is still {1, 2} (no error) Compare with remove(): • discard() → no error if missing • remove() → raises KeyError if missing relies on
4. Finish by returning/assembling the final output named by: s is now {1, 3} Examples: • s = {1, 2, 3}; s.discard(3) → s is {1, 2} • s = {1, 2}; s.discard(5) → s is still {1, 2} (no error) Compare with remove(): • discard() → no error if missing • remove() → raises KeyError if missing
5. Use the result only after the full construct has completed, per: The discard() method removes a specific element from the set.

Common Use Cases:
• Teaching this behavior using the mental model: The discard() method removes a specific element from the set.
• Debugging when the observed value should match the expectation in: s is now {1, 3} Examples: • s = {1, 2, 3}; s.discard(3) → s is {1, 2} • s = {1, 2}; s.discard(5) → s is still {1, 2} (no error) Compare with remove(): • discard() → no error if missing • remove() → raises KeyError if missing

Edge Cases:
• If inputs vary from the situation described in: If the element is not found, it does nothing (no error)., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • s.discard(element) removes element if present • Returns None • Does NOT raise an error if element is missing • This is the safe removal method How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: s is now {1, 3} Examples: • s = {1, 2, 3}; s.discard(3) → s is {1, 2} • s = {1, 2}; s.discard(5) → s is still {1, 2} (no error) Compare with remove(): • discard() → no error if missing • remove() → raises KeyError if missing.
• When performance matters, prefer the simplest pattern that still implements: The discard() method removes a specific element from the set..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The discard() method removes a specific element from the set..

Notes:
• For maintainable code, make the intent behind: If the element is not found, it does nothing (no error). explicit (and test it with inputs like those in this prompt).`
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
• Common pattern: • Use discard() when you don't know if the element exists • Use remove() when missing element indicates a bug

Key Distinctions:
• This question’s focus is best captured by: discard() silently ignores attempts to remove elements that aren't in the set.
• The contrast that matters for correctness is summarized by: This is its key advantage over remove().

How It Works:
• Python follows the rule implied by: discard() silently ignores attempts to remove elements that aren't in the set.
• The outcome you observe follows from: Common pattern: • Use discard() when you don't know if the element exists • Use remove() when missing element indicates a bug

Step-by-Step Execution:
1. Start from the construct described in: discard() silently ignores attempts to remove elements that aren't in the set.
2. Resolve the subparts implied by: This is its key advantage over remove().
3. Apply the core semantics highlighted in: Key concepts: • s.discard(5) — 5 is not in {1, 2, 3} • No error raised — set remains unchanged • This makes discard() safe to use without checking membership first How it works: 1.
4. Confirm the final result aligns with: Common pattern: • Use discard() when you don't know if the element exists • Use remove() when missing element indicates a bug

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: This is its key advantage over remove().
2. Apply the construct’s main rule next, matching: discard() silently ignores attempts to remove elements that aren't in the set.
3. Produce any intermediate values that Common pattern: • Use discard() when you don't know if the element exists • Use remove() when missing element indicates a bug relies on
4. Finish by returning/assembling the final output named by: Common pattern: • Use discard() when you don't know if the element exists • Use remove() when missing element indicates a bug
5. Use the result only after the full construct has completed, per: discard() silently ignores attempts to remove elements that aren't in the set.

Common Use Cases:
• Teaching this behavior using the mental model: discard() silently ignores attempts to remove elements that aren't in the set.
• Debugging when the observed value should match the expectation in: Common pattern: • Use discard() when you don't know if the element exists • Use remove() when missing element indicates a bug

Edge Cases:
• If inputs vary from the situation described in: This is its key advantage over remove()., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • s.discard(5) — 5 is not in {1, 2, 3} • No error raised — set remains unchanged • This makes discard() safe to use without checking membership first How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Common pattern: • Use discard() when you don't know if the element exists • Use remove() when missing element indicates a bug.
• When performance matters, prefer the simplest pattern that still implements: discard() silently ignores attempts to remove elements that aren't in the set..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: discard() silently ignores attempts to remove elements that aren't in the set..

Notes:
• For maintainable code, make the intent behind: This is its key advantage over remove(). explicit (and test it with inputs like those in this prompt).`
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
• Python raises KeyError: 5 Compare discard() vs remove(): • discard(missing) → silently does nothing • remove(missing) → raises KeyError When to use which: • remove() when the element should exist (bug if missing) • discard() when element may or may not exist

Key Distinctions:
• This question’s focus is best captured by: Unlike discard(), the remove() method raises a KeyError if the element is not found in the set.
• The contrast that matters for correctness is summarized by: Key concepts: • s.remove(element) removes element or raises KeyError • 5 is not in {1, 2, 3} → KeyError • This is the strict removal method How it works: 1.

How It Works:
• Python follows the rule implied by: Unlike discard(), the remove() method raises a KeyError if the element is not found in the set.
• The outcome you observe follows from: Python raises KeyError: 5 Compare discard() vs remove(): • discard(missing) → silently does nothing • remove(missing) → raises KeyError When to use which: • remove() when the element should exist (bug if missing) • discard() when element may or may not exist

Step-by-Step Execution:
1. Start from the construct described in: Unlike discard(), the remove() method raises a KeyError if the element is not found in the set.
2. Resolve the subparts implied by: Key concepts: • s.remove(element) removes element or raises KeyError • 5 is not in {1, 2, 3} → KeyError • This is the strict removal method How it works: 1.
3. Apply the core semantics highlighted in: s = {1, 2, 3} 2.
4. Confirm the final result aligns with: Python raises KeyError: 5 Compare discard() vs remove(): • discard(missing) → silently does nothing • remove(missing) → raises KeyError When to use which: • remove() when the element should exist (bug if missing) • discard() when element may or may not exist

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • s.remove(element) removes element or raises KeyError • 5 is not in {1, 2, 3} → KeyError • This is the strict removal method How it works: 1.
2. Apply the construct’s main rule next, matching: Unlike discard(), the remove() method raises a KeyError if the element is not found in the set.
3. Produce any intermediate values that Python raises KeyError: 5 Compare discard() vs remove(): • discard(missing) → silently does nothing • remove(missing) → raises KeyError When to use which: • remove() when the element should exist (bug if missing) • discard() when element may or may not exist relies on
4. Finish by returning/assembling the final output named by: Python raises KeyError: 5 Compare discard() vs remove(): • discard(missing) → silently does nothing • remove(missing) → raises KeyError When to use which: • remove() when the element should exist (bug if missing) • discard() when element may or may not exist
5. Use the result only after the full construct has completed, per: Unlike discard(), the remove() method raises a KeyError if the element is not found in the set.

Common Use Cases:
• Teaching this behavior using the mental model: Unlike discard(), the remove() method raises a KeyError if the element is not found in the set.
• Debugging when the observed value should match the expectation in: Python raises KeyError: 5 Compare discard() vs remove(): • discard(missing) → silently does nothing • remove(missing) → raises KeyError When to use which: • remove() when the element should exist (bug if missing) • discard() when element may or may not exist

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • s.remove(element) removes element or raises KeyError • 5 is not in {1, 2, 3} → KeyError • This is the strict removal method How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: s = {1, 2, 3} 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Python raises KeyError: 5 Compare discard() vs remove(): • discard(missing) → silently does nothing • remove(missing) → raises KeyError When to use which: • remove() when the element should exist (bug if missing) • discard() when element may or may not exist.
• When performance matters, prefer the simplest pattern that still implements: Unlike discard(), the remove() method raises a KeyError if the element is not found in the set..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Unlike discard(), the remove() method raises a KeyError if the element is not found in the set..

Notes:
• For maintainable code, make the intent behind: Key concepts: • s.remove(element) removes element or raises KeyError • 5 is not in {1, 2, 3} → KeyError • This is the strict removal method How it works: 1. explicit (and test it with inputs like those in this prompt).`
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
• Common uses: • As dictionary keys (regular sets can't be keys) • As elements of other sets • Ensuring set data isn't accidentally modified

Key Distinctions:
• This question’s focus is best captured by: frozenset creates an immutable (unchangeable) set.
• The contrast that matters for correctness is summarized by: Once created, elements cannot be added or removed.

How It Works:
• Python follows the rule implied by: frozenset creates an immutable (unchangeable) set.
• The outcome you observe follows from: Common uses: • As dictionary keys (regular sets can't be keys) • As elements of other sets • Ensuring set data isn't accidentally modified

Step-by-Step Execution:
1. Start from the construct described in: frozenset creates an immutable (unchangeable) set.
2. Resolve the subparts implied by: Once created, elements cannot be added or removed.
3. Apply the core semantics highlighted in: Key concepts: • frozenset([1, 2, 3]) → frozenset({1, 2, 3}) • Cannot use add(), remove(), discard(), etc.
4. Confirm the final result aligns with: Common uses: • As dictionary keys (regular sets can't be keys) • As elements of other sets • Ensuring set data isn't accidentally modified

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Once created, elements cannot be added or removed.
2. Apply the construct’s main rule next, matching: frozenset creates an immutable (unchangeable) set.
3. Produce any intermediate values that Common uses: • As dictionary keys (regular sets can't be keys) • As elements of other sets • Ensuring set data isn't accidentally modified relies on
4. Finish by returning/assembling the final output named by: Common uses: • As dictionary keys (regular sets can't be keys) • As elements of other sets • Ensuring set data isn't accidentally modified
5. Use the result only after the full construct has completed, per: frozenset creates an immutable (unchangeable) set.

Common Use Cases:
• Teaching this behavior using the mental model: frozenset creates an immutable (unchangeable) set.
• Debugging when the observed value should match the expectation in: Common uses: • As dictionary keys (regular sets can't be keys) • As elements of other sets • Ensuring set data isn't accidentally modified

Edge Cases:
• If inputs vary from the situation described in: Once created, elements cannot be added or removed., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • frozenset([1, 2, 3]) → frozenset({1, 2, 3}) • Cannot use add(), remove(), discard(), etc. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Common uses: • As dictionary keys (regular sets can't be keys) • As elements of other sets • Ensuring set data isn't accidentally modified.
• When performance matters, prefer the simplest pattern that still implements: frozenset creates an immutable (unchangeable) set..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: frozenset creates an immutable (unchangeable) set..

Notes:
• For maintainable code, make the intent behind: Once created, elements cannot be added or removed. explicit (and test it with inputs like those in this prompt).`
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
• TypeError is raised What IS hashable: • int, float, str, bool → hashable ✅ • tuple (if all elements are hashable) → hashable ✅ • frozenset → hashable ✅ • list, dict, set → NOT hashable ❌ Workaround: Convert the list to a tuple → {(1, 2)} works fine.

Key Distinctions:
• This question’s focus is best captured by: Sets require all elements to be hashable (immutable).
• The contrast that matters for correctness is summarized by: Lists are mutable, so they are not hashable and cannot be set elements.

How It Works:
• Python follows the rule implied by: Sets require all elements to be hashable (immutable).
• The outcome you observe follows from: TypeError is raised What IS hashable: • int, float, str, bool → hashable ✅ • tuple (if all elements are hashable) → hashable ✅ • frozenset → hashable ✅ • list, dict, set → NOT hashable ❌ Workaround: Convert the list to a tuple → {(1, 2)} works fine.

Step-by-Step Execution:
1. Start from the construct described in: Sets require all elements to be hashable (immutable).
2. Resolve the subparts implied by: Lists are mutable, so they are not hashable and cannot be set elements.
3. Apply the core semantics highlighted in: Key concepts: • Set elements must be hashable • Hashable = has a fixed hash value throughout its lifetime • Lists are mutable → unhashable → can't be in a set • {[1, 2]} → TypeError: unhashable type: 'list' How it works: 1.
4. Confirm the final result aligns with: TypeError is raised What IS hashable: • int, float, str, bool → hashable ✅ • tuple (if all elements are hashable) → hashable ✅ • frozenset → hashable ✅ • list, dict, set → NOT hashable ❌ Workaround: Convert the list to a tuple → {(1, 2)} works fine.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Lists are mutable, so they are not hashable and cannot be set elements.
2. Apply the construct’s main rule next, matching: Sets require all elements to be hashable (immutable).
3. Produce any intermediate values that TypeError is raised What IS hashable: • int, float, str, bool → hashable ✅ • tuple (if all elements are hashable) → hashable ✅ • frozenset → hashable ✅ • list, dict, set → NOT hashable ❌ Workaround: Convert the list to a tuple → {(1, 2)} works fine. relies on
4. Finish by returning/assembling the final output named by: TypeError is raised What IS hashable: • int, float, str, bool → hashable ✅ • tuple (if all elements are hashable) → hashable ✅ • frozenset → hashable ✅ • list, dict, set → NOT hashable ❌ Workaround: Convert the list to a tuple → {(1, 2)} works fine.
5. Use the result only after the full construct has completed, per: Sets require all elements to be hashable (immutable).

Common Use Cases:
• Teaching this behavior using the mental model: Sets require all elements to be hashable (immutable).
• Debugging when the observed value should match the expectation in: TypeError is raised What IS hashable: • int, float, str, bool → hashable ✅ • tuple (if all elements are hashable) → hashable ✅ • frozenset → hashable ✅ • list, dict, set → NOT hashable ❌ Workaround: Convert the list to a tuple → {(1, 2)} works fine.

Edge Cases:
• If inputs vary from the situation described in: Lists are mutable, so they are not hashable and cannot be set elements., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • Set elements must be hashable • Hashable = has a fixed hash value throughout its lifetime • Lists are mutable → unhashable → can't be in a set • {[1, 2]} → TypeError: unhashable type: 'list' How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: TypeError is raised What IS hashable: • int, float, str, bool → hashable ✅ • tuple (if all elements are hashable) → hashable ✅ • frozenset → hashable ✅ • list, dict, set → NOT hashable ❌ Workaround: Convert the list to a tuple → {(1, 2)} works fine..
• When performance matters, prefer the simplest pattern that still implements: Sets require all elements to be hashable (immutable)..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Sets require all elements to be hashable (immutable)..

Notes:
• For maintainable code, make the intent behind: Lists are mutable, so they are not hashable and cannot be set elements. explicit (and test it with inputs like those in this prompt).`
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
• {(1, 2), (3, 4)} → set of two tuples Examples: • {(1, 2), (3, 4)} → valid ✅ • {("a", "b")} → valid ✅ • {(1, [2])} → TypeError ❌ (list inside tuple makes it unhashable) Common uses: • Storing coordinate pairs: {(0, 0), (1, 1)} • Using tuple pairs as dict keys or set members

Key Distinctions:
• This question’s focus is best captured by: Tuples are immutable and hashable (as long as all their elements are also hashable), so they can be elements of a set.
• The contrast that matters for correctness is summarized by: Key concepts: • Tuples are immutable → hashable → valid set elements • {(1, 2), (3, 4)} is a valid set • But tuple containing a list is NOT hashable: (1, [2, 3]) → unhashable How it works: 1.

How It Works:
• Python follows the rule implied by: Tuples are immutable and hashable (as long as all their elements are also hashable), so they can be elements of a set.
• The outcome you observe follows from: {(1, 2), (3, 4)} → set of two tuples Examples: • {(1, 2), (3, 4)} → valid ✅ • {("a", "b")} → valid ✅ • {(1, [2])} → TypeError ❌ (list inside tuple makes it unhashable) Common uses: • Storing coordinate pairs: {(0, 0), (1, 1)} • Using tuple pairs as dict keys or set members

Step-by-Step Execution:
1. Start from the construct described in: Tuples are immutable and hashable (as long as all their elements are also hashable), so they can be elements of a set.
2. Resolve the subparts implied by: Key concepts: • Tuples are immutable → hashable → valid set elements • {(1, 2), (3, 4)} is a valid set • But tuple containing a list is NOT hashable: (1, [2, 3]) → unhashable How it works: 1.
3. Apply the core semantics highlighted in: Python computes hash((1, 2)) → valid hash 2.
4. Confirm the final result aligns with: {(1, 2), (3, 4)} → set of two tuples Examples: • {(1, 2), (3, 4)} → valid ✅ • {("a", "b")} → valid ✅ • {(1, [2])} → TypeError ❌ (list inside tuple makes it unhashable) Common uses: • Storing coordinate pairs: {(0, 0), (1, 1)} • Using tuple pairs as dict keys or set members

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • Tuples are immutable → hashable → valid set elements • {(1, 2), (3, 4)} is a valid set • But tuple containing a list is NOT hashable: (1, [2, 3]) → unhashable How it works: 1.
2. Apply the construct’s main rule next, matching: Tuples are immutable and hashable (as long as all their elements are also hashable), so they can be elements of a set.
3. Produce any intermediate values that {(1, 2), (3, 4)} → set of two tuples Examples: • {(1, 2), (3, 4)} → valid ✅ • {("a", "b")} → valid ✅ • {(1, [2])} → TypeError ❌ (list inside tuple makes it unhashable) Common uses: • Storing coordinate pairs: {(0, 0), (1, 1)} • Using tuple pairs as dict keys or set members relies on
4. Finish by returning/assembling the final output named by: {(1, 2), (3, 4)} → set of two tuples Examples: • {(1, 2), (3, 4)} → valid ✅ • {("a", "b")} → valid ✅ • {(1, [2])} → TypeError ❌ (list inside tuple makes it unhashable) Common uses: • Storing coordinate pairs: {(0, 0), (1, 1)} • Using tuple pairs as dict keys or set members
5. Use the result only after the full construct has completed, per: Tuples are immutable and hashable (as long as all their elements are also hashable), so they can be elements of a set.

Common Use Cases:
• Teaching this behavior using the mental model: Tuples are immutable and hashable (as long as all their elements are also hashable), so they can be elements of a set.
• Debugging when the observed value should match the expectation in: {(1, 2), (3, 4)} → set of two tuples Examples: • {(1, 2), (3, 4)} → valid ✅ • {("a", "b")} → valid ✅ • {(1, [2])} → TypeError ❌ (list inside tuple makes it unhashable) Common uses: • Storing coordinate pairs: {(0, 0), (1, 1)} • Using tuple pairs as dict keys or set members

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • Tuples are immutable → hashable → valid set elements • {(1, 2), (3, 4)} is a valid set • But tuple containing a list is NOT hashable: (1, [2, 3]) → unhashable How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: Python computes hash((1, 2)) → valid hash 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: {(1, 2), (3, 4)} → set of two tuples Examples: • {(1, 2), (3, 4)} → valid ✅ • {("a", "b")} → valid ✅ • {(1, [2])} → TypeError ❌ (list inside tuple makes it unhashable) Common uses: • Storing coordinate pairs: {(0, 0), (1, 1)} • Using tuple pairs as dict keys or set members.
• When performance matters, prefer the simplest pattern that still implements: Tuples are immutable and hashable (as long as all their elements are also hashable), so they can be elements of a set..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Tuples are immutable and hashable (as long as all their elements are also hashable), so they can be elements of a set..

Notes:
• For maintainable code, make the intent behind: Key concepts: • Tuples are immutable → hashable → valid set elements • {(1, 2), (3, 4)} is a valid set • But tuple containing a list is NOT hashable: (1, [2, 3]) → unhashable How it works: 1. explicit (and test it with inputs like those in this prompt).`
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
• Result: {1, 2, 3, 4, 5} Method vs operator: • {1, 2}.union({3}) — method form • {1, 2} | {3} — operator form • union() can accept any iterable: {1}.union([2, 3]) • | requires both sides to be sets

Key Distinctions:
• This question’s focus is best captured by: The union() method combines elements from both sets, returning a new set with all unique elements.
• The contrast that matters for correctness is summarized by: Key concepts: • A.union(B) is equivalent to A | B • Returns a new set, does not modify A or B • All elements from both sets are included • Duplicates are automatically handled How it works: 1.

How It Works:
• Python follows the rule implied by: The union() method combines elements from both sets, returning a new set with all unique elements.
• The outcome you observe follows from: Result: {1, 2, 3, 4, 5} Method vs operator: • {1, 2}.union({3}) — method form • {1, 2} | {3} — operator form • union() can accept any iterable: {1}.union([2, 3]) • | requires both sides to be sets

Step-by-Step Execution:
1. Start from the construct described in: The union() method combines elements from both sets, returning a new set with all unique elements.
2. Resolve the subparts implied by: Key concepts: • A.union(B) is equivalent to A | B • Returns a new set, does not modify A or B • All elements from both sets are included • Duplicates are automatically handled How it works: 1.
3. Apply the core semantics highlighted in: {1, 2, 3}.union({4, 5}) 2.
4. Confirm the final result aligns with: Result: {1, 2, 3, 4, 5} Method vs operator: • {1, 2}.union({3}) — method form • {1, 2} | {3} — operator form • union() can accept any iterable: {1}.union([2, 3]) • | requires both sides to be sets

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • A.union(B) is equivalent to A | B • Returns a new set, does not modify A or B • All elements from both sets are included • Duplicates are automatically handled How it works: 1.
2. Apply the construct’s main rule next, matching: The union() method combines elements from both sets, returning a new set with all unique elements.
3. Produce any intermediate values that Result: {1, 2, 3, 4, 5} Method vs operator: • {1, 2}.union({3}) — method form • {1, 2} | {3} — operator form • union() can accept any iterable: {1}.union([2, 3]) • | requires both sides to be sets relies on
4. Finish by returning/assembling the final output named by: Result: {1, 2, 3, 4, 5} Method vs operator: • {1, 2}.union({3}) — method form • {1, 2} | {3} — operator form • union() can accept any iterable: {1}.union([2, 3]) • | requires both sides to be sets
5. Use the result only after the full construct has completed, per: The union() method combines elements from both sets, returning a new set with all unique elements.

Common Use Cases:
• Teaching this behavior using the mental model: The union() method combines elements from both sets, returning a new set with all unique elements.
• Debugging when the observed value should match the expectation in: Result: {1, 2, 3, 4, 5} Method vs operator: • {1, 2}.union({3}) — method form • {1, 2} | {3} — operator form • union() can accept any iterable: {1}.union([2, 3]) • | requires both sides to be sets

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • A.union(B) is equivalent to A | B • Returns a new set, does not modify A or B • All elements from both sets are included • Duplicates are automatically handled How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: {1, 2, 3}.union({4, 5}) 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Result: {1, 2, 3, 4, 5} Method vs operator: • {1, 2}.union({3}) — method form • {1, 2} | {3} — operator form • union() can accept any iterable: {1}.union([2, 3]) • | requires both sides to be sets.
• When performance matters, prefer the simplest pattern that still implements: The union() method combines elements from both sets, returning a new set with all unique elements..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The union() method combines elements from both sets, returning a new set with all unique elements..

Notes:
• For maintainable code, make the intent behind: Key concepts: • A.union(B) is equivalent to A | B • Returns a new set, does not modify A or B • All elements from both sets are included • Duplicates are automatically handled How it works: 1. explicit (and test it with inputs like those in this prompt).`
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
• Result: {2, 3} Method vs operator: • {1, 2, 3}.intersection({2, 3, 4}) — method, accepts any iterable • {1, 2, 3} & {2, 3, 4} — operator, both must be sets Example: intersection() can take multiple arguments: • {1, 2, 3}.intersection({2, 3}, {3, 4}) → {3}

Key Distinctions:
• This question’s focus is best captured by: The intersection() method returns a new set containing only the elements found in both sets.
• The contrast that matters for correctness is summarized by: Key concepts: • A.intersection(B) is equivalent to A & B • Returns elements present in both A and B • Does not modify the original sets How it works: 1.

How It Works:
• Python follows the rule implied by: The intersection() method returns a new set containing only the elements found in both sets.
• The outcome you observe follows from: Result: {2, 3} Method vs operator: • {1, 2, 3}.intersection({2, 3, 4}) — method, accepts any iterable • {1, 2, 3} & {2, 3, 4} — operator, both must be sets Example: intersection() can take multiple arguments: • {1, 2, 3}.intersection({2, 3}, {3, 4}) → {3}

Step-by-Step Execution:
1. Start from the construct described in: The intersection() method returns a new set containing only the elements found in both sets.
2. Resolve the subparts implied by: Key concepts: • A.intersection(B) is equivalent to A & B • Returns elements present in both A and B • Does not modify the original sets How it works: 1.
3. Apply the core semantics highlighted in: {1, 2, 3}.intersection({2, 3, 4}) 2.
4. Confirm the final result aligns with: Result: {2, 3} Method vs operator: • {1, 2, 3}.intersection({2, 3, 4}) — method, accepts any iterable • {1, 2, 3} & {2, 3, 4} — operator, both must be sets Example: intersection() can take multiple arguments: • {1, 2, 3}.intersection({2, 3}, {3, 4}) → {3}

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • A.intersection(B) is equivalent to A & B • Returns elements present in both A and B • Does not modify the original sets How it works: 1.
2. Apply the construct’s main rule next, matching: The intersection() method returns a new set containing only the elements found in both sets.
3. Produce any intermediate values that Result: {2, 3} Method vs operator: • {1, 2, 3}.intersection({2, 3, 4}) — method, accepts any iterable • {1, 2, 3} & {2, 3, 4} — operator, both must be sets Example: intersection() can take multiple arguments: • {1, 2, 3}.intersection({2, 3}, {3, 4}) → {3} relies on
4. Finish by returning/assembling the final output named by: Result: {2, 3} Method vs operator: • {1, 2, 3}.intersection({2, 3, 4}) — method, accepts any iterable • {1, 2, 3} & {2, 3, 4} — operator, both must be sets Example: intersection() can take multiple arguments: • {1, 2, 3}.intersection({2, 3}, {3, 4}) → {3}
5. Use the result only after the full construct has completed, per: The intersection() method returns a new set containing only the elements found in both sets.

Common Use Cases:
• Teaching this behavior using the mental model: The intersection() method returns a new set containing only the elements found in both sets.
• Debugging when the observed value should match the expectation in: Result: {2, 3} Method vs operator: • {1, 2, 3}.intersection({2, 3, 4}) — method, accepts any iterable • {1, 2, 3} & {2, 3, 4} — operator, both must be sets Example: intersection() can take multiple arguments: • {1, 2, 3}.intersection({2, 3}, {3, 4}) → {3}

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • A.intersection(B) is equivalent to A & B • Returns elements present in both A and B • Does not modify the original sets How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: {1, 2, 3}.intersection({2, 3, 4}) 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Result: {2, 3} Method vs operator: • {1, 2, 3}.intersection({2, 3, 4}) — method, accepts any iterable • {1, 2, 3} & {2, 3, 4} — operator, both must be sets Example: intersection() can take multiple arguments: • {1, 2, 3}.intersection({2, 3}, {3, 4}) → {3}.
• When performance matters, prefer the simplest pattern that still implements: The intersection() method returns a new set containing only the elements found in both sets..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The intersection() method returns a new set containing only the elements found in both sets..

Notes:
• For maintainable code, make the intent behind: Key concepts: • A.intersection(B) is equivalent to A & B • Returns elements present in both A and B • Does not modify the original sets How it works: 1. explicit (and test it with inputs like those in this prompt).`
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
• Result: {1} Examples: • {1, 2, 3}.difference({1, 2, 3}) → set() • {1, 2, 3}.difference(set()) → {1, 2, 3} • {1, 2, 3}.difference({4, 5}) → {1, 2, 3}

Key Distinctions:
• This question’s focus is best captured by: The difference() method returns a new set with elements from the calling set that are not in the argument set.
• The contrast that matters for correctness is summarized by: Key concepts: • A.difference(B) is equivalent to A - B • Returns elements in A but not in B • Does not modify A or B How it works: 1.

How It Works:
• Python follows the rule implied by: The difference() method returns a new set with elements from the calling set that are not in the argument set.
• The outcome you observe follows from: Result: {1} Examples: • {1, 2, 3}.difference({1, 2, 3}) → set() • {1, 2, 3}.difference(set()) → {1, 2, 3} • {1, 2, 3}.difference({4, 5}) → {1, 2, 3}

Step-by-Step Execution:
1. Start from the construct described in: The difference() method returns a new set with elements from the calling set that are not in the argument set.
2. Resolve the subparts implied by: Key concepts: • A.difference(B) is equivalent to A - B • Returns elements in A but not in B • Does not modify A or B How it works: 1.
3. Apply the core semantics highlighted in: {1, 2, 3}.difference({2, 3}) 2.
4. Confirm the final result aligns with: Result: {1} Examples: • {1, 2, 3}.difference({1, 2, 3}) → set() • {1, 2, 3}.difference(set()) → {1, 2, 3} • {1, 2, 3}.difference({4, 5}) → {1, 2, 3}

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • A.difference(B) is equivalent to A - B • Returns elements in A but not in B • Does not modify A or B How it works: 1.
2. Apply the construct’s main rule next, matching: The difference() method returns a new set with elements from the calling set that are not in the argument set.
3. Produce any intermediate values that Result: {1} Examples: • {1, 2, 3}.difference({1, 2, 3}) → set() • {1, 2, 3}.difference(set()) → {1, 2, 3} • {1, 2, 3}.difference({4, 5}) → {1, 2, 3} relies on
4. Finish by returning/assembling the final output named by: Result: {1} Examples: • {1, 2, 3}.difference({1, 2, 3}) → set() • {1, 2, 3}.difference(set()) → {1, 2, 3} • {1, 2, 3}.difference({4, 5}) → {1, 2, 3}
5. Use the result only after the full construct has completed, per: The difference() method returns a new set with elements from the calling set that are not in the argument set.

Common Use Cases:
• Teaching this behavior using the mental model: The difference() method returns a new set with elements from the calling set that are not in the argument set.
• Debugging when the observed value should match the expectation in: Result: {1} Examples: • {1, 2, 3}.difference({1, 2, 3}) → set() • {1, 2, 3}.difference(set()) → {1, 2, 3} • {1, 2, 3}.difference({4, 5}) → {1, 2, 3}

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • A.difference(B) is equivalent to A - B • Returns elements in A but not in B • Does not modify A or B How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: {1, 2, 3}.difference({2, 3}) 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Result: {1} Examples: • {1, 2, 3}.difference({1, 2, 3}) → set() • {1, 2, 3}.difference(set()) → {1, 2, 3} • {1, 2, 3}.difference({4, 5}) → {1, 2, 3}.
• When performance matters, prefer the simplest pattern that still implements: The difference() method returns a new set with elements from the calling set that are not in the argument set..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The difference() method returns a new set with elements from the calling set that are not in the argument set..

Notes:
• For maintainable code, make the intent behind: Key concepts: • A.difference(B) is equivalent to A - B • Returns elements in A but not in B • Does not modify A or B How it works: 1. explicit (and test it with inputs like those in this prompt).`
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
• sorted() is the standard way to get an ordered sequence from a set.

Key Distinctions:
• This question’s focus is best captured by: The sorted() function accepts any iterable and always returns a sorted list — regardless of the input type.
• The contrast that matters for correctness is summarized by: Key concepts: • sorted({3, 1, 2}) → [1, 2, 3] • Input is a set, output is a list • sorted() works with sets, dicts, tuples, strings, etc.

How It Works:
• Python follows the rule implied by: The sorted() function accepts any iterable and always returns a sorted list — regardless of the input type.
• The outcome you observe follows from: sorted() is the standard way to get an ordered sequence from a set.

Step-by-Step Execution:
1. Start from the construct described in: The sorted() function accepts any iterable and always returns a sorted list — regardless of the input type.
2. Resolve the subparts implied by: Key concepts: • sorted({3, 1, 2}) → [1, 2, 3] • Input is a set, output is a list • sorted() works with sets, dicts, tuples, strings, etc.
3. Apply the core semantics highlighted in: • Always returns a list How it works: 1.
4. Confirm the final result aligns with: sorted() is the standard way to get an ordered sequence from a set.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • sorted({3, 1, 2}) → [1, 2, 3] • Input is a set, output is a list • sorted() works with sets, dicts, tuples, strings, etc.
2. Apply the construct’s main rule next, matching: The sorted() function accepts any iterable and always returns a sorted list — regardless of the input type.
3. Produce any intermediate values that sorted() is the standard way to get an ordered sequence from a set. relies on
4. Finish by returning/assembling the final output named by: sorted() is the standard way to get an ordered sequence from a set.
5. Use the result only after the full construct has completed, per: The sorted() function accepts any iterable and always returns a sorted list — regardless of the input type.

Common Use Cases:
• Teaching this behavior using the mental model: The sorted() function accepts any iterable and always returns a sorted list — regardless of the input type.
• Debugging when the observed value should match the expectation in: sorted() is the standard way to get an ordered sequence from a set.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • sorted({3, 1, 2}) → [1, 2, 3] • Input is a set, output is a list • sorted() works with sets, dicts, tuples, strings, etc., the behavior can change.
• When the construct’s assumptions differ, the rule in: • Always returns a list How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: sorted() is the standard way to get an ordered sequence from a set..
• When performance matters, prefer the simplest pattern that still implements: The sorted() function accepts any iterable and always returns a sorted list — regardless of the input type..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The sorted() function accepts any iterable and always returns a sorted list — regardless of the input type..

Notes:
• For maintainable code, make the intent behind: Key concepts: • sorted({3, 1, 2}) → [1, 2, 3] • Input is a set, output is a list • sorted() works with sets, dicts, tuples, strings, etc. explicit (and test it with inputs like those in this prompt).`
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
• Length is 4 Examples: • len(set("aaa")) → 1 • len(set("abc")) → 3 • len(set("mississippi")) → 4 (m, i, s, p) Common uses: • Counting unique characters: unique = len(set(text)) • Checking for all unique: len(set(s)) == len(s)

Key Distinctions:
• This question’s focus is best captured by: set("hello") creates a set from the string's characters, removing duplicates.
• The contrast that matters for correctness is summarized by: Then len() counts the unique characters.

How It Works:
• Python follows the rule implied by: set("hello") creates a set from the string's characters, removing duplicates.
• The outcome you observe follows from: Length is 4 Examples: • len(set("aaa")) → 1 • len(set("abc")) → 3 • len(set("mississippi")) → 4 (m, i, s, p) Common uses: • Counting unique characters: unique = len(set(text)) • Checking for all unique: len(set(s)) == len(s)

Step-by-Step Execution:
1. Start from the construct described in: set("hello") creates a set from the string's characters, removing duplicates.
2. Resolve the subparts implied by: Then len() counts the unique characters.
3. Apply the core semantics highlighted in: Key concepts: • "hello" has characters: h, e, l, l, o • set("hello") → {'h', 'e', 'l', 'o'} (duplicate 'l' removed) • Length is 4 (four unique characters) How it works: 1.
4. Confirm the final result aligns with: Length is 4 Examples: • len(set("aaa")) → 1 • len(set("abc")) → 3 • len(set("mississippi")) → 4 (m, i, s, p) Common uses: • Counting unique characters: unique = len(set(text)) • Checking for all unique: len(set(s)) == len(s)

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Then len() counts the unique characters.
2. Apply the construct’s main rule next, matching: set("hello") creates a set from the string's characters, removing duplicates.
3. Produce any intermediate values that Length is 4 Examples: • len(set("aaa")) → 1 • len(set("abc")) → 3 • len(set("mississippi")) → 4 (m, i, s, p) Common uses: • Counting unique characters: unique = len(set(text)) • Checking for all unique: len(set(s)) == len(s) relies on
4. Finish by returning/assembling the final output named by: Length is 4 Examples: • len(set("aaa")) → 1 • len(set("abc")) → 3 • len(set("mississippi")) → 4 (m, i, s, p) Common uses: • Counting unique characters: unique = len(set(text)) • Checking for all unique: len(set(s)) == len(s)
5. Use the result only after the full construct has completed, per: set("hello") creates a set from the string's characters, removing duplicates.

Common Use Cases:
• Teaching this behavior using the mental model: set("hello") creates a set from the string's characters, removing duplicates.
• Debugging when the observed value should match the expectation in: Length is 4 Examples: • len(set("aaa")) → 1 • len(set("abc")) → 3 • len(set("mississippi")) → 4 (m, i, s, p) Common uses: • Counting unique characters: unique = len(set(text)) • Checking for all unique: len(set(s)) == len(s)

Edge Cases:
• If inputs vary from the situation described in: Then len() counts the unique characters., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • "hello" has characters: h, e, l, l, o • set("hello") → {'h', 'e', 'l', 'o'} (duplicate 'l' removed) • Length is 4 (four unique characters) How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Length is 4 Examples: • len(set("aaa")) → 1 • len(set("abc")) → 3 • len(set("mississippi")) → 4 (m, i, s, p) Common uses: • Counting unique characters: unique = len(set(text)) • Checking for all unique: len(set(s)) == len(s).
• When performance matters, prefer the simplest pattern that still implements: set("hello") creates a set from the string's characters, removing duplicates..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: set("hello") creates a set from the string's characters, removing duplicates..

Notes:
• For maintainable code, make the intent behind: Then len() counts the unique characters. explicit (and test it with inputs like those in this prompt).`
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
• Result: ["apple", "banana", "cherry"] Examples: • sorted(["hi", "a", "hey"], key=len) → ["a", "hi", "hey"] • sorted(["xyz", "ab"], key=len) → ["ab", "xyz"] Note: The key function is called once per element, and the results are used for comparison.

Key Distinctions:
• This question’s focus is best captured by: The key parameter in sorted() specifies a function that extracts a comparison key from each element.
• The contrast that matters for correctness is summarized by: key=len sorts strings by their length.

How It Works:
• Python follows the rule implied by: The key parameter in sorted() specifies a function that extracts a comparison key from each element.
• The outcome you observe follows from: Result: ["apple", "banana", "cherry"] Examples: • sorted(["hi", "a", "hey"], key=len) → ["a", "hi", "hey"] • sorted(["xyz", "ab"], key=len) → ["ab", "xyz"] Note: The key function is called once per element, and the results are used for comparison.

Step-by-Step Execution:
1. Start from the construct described in: The key parameter in sorted() specifies a function that extracts a comparison key from each element.
2. Resolve the subparts implied by: key=len sorts strings by their length.
3. Apply the core semantics highlighted in: Key concepts: • key=len → sort by the length of each string • "apple" has length 5, "banana" has length 6, "cherry" has length 6 • Sorted by length ascending: 5, 6, 6 • Python's sort is stable: "banana" and "cherry" (both length 6) keep original order How it works: 1.
4. Confirm the final result aligns with: Result: ["apple", "banana", "cherry"] Examples: • sorted(["hi", "a", "hey"], key=len) → ["a", "hi", "hey"] • sorted(["xyz", "ab"], key=len) → ["ab", "xyz"] Note: The key function is called once per element, and the results are used for comparison.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: key=len sorts strings by their length.
2. Apply the construct’s main rule next, matching: The key parameter in sorted() specifies a function that extracts a comparison key from each element.
3. Produce any intermediate values that Result: ["apple", "banana", "cherry"] Examples: • sorted(["hi", "a", "hey"], key=len) → ["a", "hi", "hey"] • sorted(["xyz", "ab"], key=len) → ["ab", "xyz"] Note: The key function is called once per element, and the results are used for comparison. relies on
4. Finish by returning/assembling the final output named by: Result: ["apple", "banana", "cherry"] Examples: • sorted(["hi", "a", "hey"], key=len) → ["a", "hi", "hey"] • sorted(["xyz", "ab"], key=len) → ["ab", "xyz"] Note: The key function is called once per element, and the results are used for comparison.
5. Use the result only after the full construct has completed, per: The key parameter in sorted() specifies a function that extracts a comparison key from each element.

Common Use Cases:
• Teaching this behavior using the mental model: The key parameter in sorted() specifies a function that extracts a comparison key from each element.
• Debugging when the observed value should match the expectation in: Result: ["apple", "banana", "cherry"] Examples: • sorted(["hi", "a", "hey"], key=len) → ["a", "hi", "hey"] • sorted(["xyz", "ab"], key=len) → ["ab", "xyz"] Note: The key function is called once per element, and the results are used for comparison.

Edge Cases:
• If inputs vary from the situation described in: key=len sorts strings by their length., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • key=len → sort by the length of each string • "apple" has length 5, "banana" has length 6, "cherry" has length 6 • Sorted by length ascending: 5, 6, 6 • Python's sort is stable: "banana" and "cherry" (both length 6) keep original order How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Result: ["apple", "banana", "cherry"] Examples: • sorted(["hi", "a", "hey"], key=len) → ["a", "hi", "hey"] • sorted(["xyz", "ab"], key=len) → ["ab", "xyz"] Note: The key function is called once per element, and the results are used for comparison..
• When performance matters, prefer the simplest pattern that still implements: The key parameter in sorted() specifies a function that extracts a comparison key from each element..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The key parameter in sorted() specifies a function that extracts a comparison key from each element..

Notes:
• For maintainable code, make the intent behind: key=len sorts strings by their length. explicit (and test it with inputs like those in this prompt).`
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
• Return original elements in that order: ["apple", "Banana", "Cherry"] Examples: • sorted(["B", "a", "C"], key=str.lower) → ["a", "B", "C"] • sorted(["Z", "a"], key=str.lower) → ["a", "Z"] Note: Without key=str.lower, uppercase letters sort before lowercase ('A' < 'a' in ASCII/Unicode).

Key Distinctions:
• This question’s focus is best captured by: key=str.lower converts each string to lowercase for comparison purposes only, enabling case-insensitive sorting.
• The contrast that matters for correctness is summarized by: Key concepts: • key=str.lower → compare using lowercase versions • "Banana".lower()="banana", "apple".lower()="apple", "Cherry".lower()="cherry" • Alphabetical order of keys: "apple" < "banana" < "cherry" • Original strings (with original casing) are returned How it works: 1.

How It Works:
• Python follows the rule implied by: key=str.lower converts each string to lowercase for comparison purposes only, enabling case-insensitive sorting.
• The outcome you observe follows from: Return original elements in that order: ["apple", "Banana", "Cherry"] Examples: • sorted(["B", "a", "C"], key=str.lower) → ["a", "B", "C"] • sorted(["Z", "a"], key=str.lower) → ["a", "Z"] Note: Without key=str.lower, uppercase letters sort before lowercase ('A' < 'a' in ASCII/Unicode).

Step-by-Step Execution:
1. Start from the construct described in: key=str.lower converts each string to lowercase for comparison purposes only, enabling case-insensitive sorting.
2. Resolve the subparts implied by: Key concepts: • key=str.lower → compare using lowercase versions • "Banana".lower()="banana", "apple".lower()="apple", "Cherry".lower()="cherry" • Alphabetical order of keys: "apple" < "banana" < "cherry" • Original strings (with original casing) are returned How it works: 1.
3. Apply the core semantics highlighted in: Compute keys: "banana", "apple", "cherry" (all lowercase) 2.
4. Confirm the final result aligns with: Return original elements in that order: ["apple", "Banana", "Cherry"] Examples: • sorted(["B", "a", "C"], key=str.lower) → ["a", "B", "C"] • sorted(["Z", "a"], key=str.lower) → ["a", "Z"] Note: Without key=str.lower, uppercase letters sort before lowercase ('A' < 'a' in ASCII/Unicode).

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • key=str.lower → compare using lowercase versions • "Banana".lower()="banana", "apple".lower()="apple", "Cherry".lower()="cherry" • Alphabetical order of keys: "apple" < "banana" < "cherry" • Original strings (with original casing) are returned How it works: 1.
2. Apply the construct’s main rule next, matching: key=str.lower converts each string to lowercase for comparison purposes only, enabling case-insensitive sorting.
3. Produce any intermediate values that Return original elements in that order: ["apple", "Banana", "Cherry"] Examples: • sorted(["B", "a", "C"], key=str.lower) → ["a", "B", "C"] • sorted(["Z", "a"], key=str.lower) → ["a", "Z"] Note: Without key=str.lower, uppercase letters sort before lowercase ('A' < 'a' in ASCII/Unicode). relies on
4. Finish by returning/assembling the final output named by: Return original elements in that order: ["apple", "Banana", "Cherry"] Examples: • sorted(["B", "a", "C"], key=str.lower) → ["a", "B", "C"] • sorted(["Z", "a"], key=str.lower) → ["a", "Z"] Note: Without key=str.lower, uppercase letters sort before lowercase ('A' < 'a' in ASCII/Unicode).
5. Use the result only after the full construct has completed, per: key=str.lower converts each string to lowercase for comparison purposes only, enabling case-insensitive sorting.

Common Use Cases:
• Teaching this behavior using the mental model: key=str.lower converts each string to lowercase for comparison purposes only, enabling case-insensitive sorting.
• Debugging when the observed value should match the expectation in: Return original elements in that order: ["apple", "Banana", "Cherry"] Examples: • sorted(["B", "a", "C"], key=str.lower) → ["a", "B", "C"] • sorted(["Z", "a"], key=str.lower) → ["a", "Z"] Note: Without key=str.lower, uppercase letters sort before lowercase ('A' < 'a' in ASCII/Unicode).

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • key=str.lower → compare using lowercase versions • "Banana".lower()="banana", "apple".lower()="apple", "Cherry".lower()="cherry" • Alphabetical order of keys: "apple" < "banana" < "cherry" • Original strings (with original casing) are returned How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: Compute keys: "banana", "apple", "cherry" (all lowercase) 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Return original elements in that order: ["apple", "Banana", "Cherry"] Examples: • sorted(["B", "a", "C"], key=str.lower) → ["a", "B", "C"] • sorted(["Z", "a"], key=str.lower) → ["a", "Z"] Note: Without key=str.lower, uppercase letters sort before lowercase ('A' < 'a' in ASCII/Unicode)..
• When performance matters, prefer the simplest pattern that still implements: key=str.lower converts each string to lowercase for comparison purposes only, enabling case-insensitive sorting..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: key=str.lower converts each string to lowercase for comparison purposes only, enabling case-insensitive sorting..

Notes:
• For maintainable code, make the intent behind: Key concepts: • key=str.lower → compare using lowercase versions • "Banana".lower()="banana", "apple".lower()="apple", "Cherry".lower()="cherry" • Alphabetical order of keys: "apple" < "banana" < "cherry" • Original strings (with original casing) are returned How it works: 1. explicit (and test it with inputs like those in this prompt).`
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
• Return tuples in sorted order: [(2,"a"), (1,"b"), (3,"c")] Examples: • sorted([(5,1),(3,2)], key=lambda x: x[0]) → [(3,2),(5,1)] • sorted([(1,3),(1,1)], key=lambda x: x[1]) → [(1,1),(1,3)] Common uses: • Sorting records by a specific field • Custom ordering of complex data structures

Key Distinctions:
• This question’s focus is best captured by: A lambda function as the key allows sorting by any custom criterion.
• The contrast that matters for correctness is summarized by: Here, x[1] extracts the second element of each tuple for comparison.

How It Works:
• Python follows the rule implied by: A lambda function as the key allows sorting by any custom criterion.
• The outcome you observe follows from: Return tuples in sorted order: [(2,"a"), (1,"b"), (3,"c")] Examples: • sorted([(5,1),(3,2)], key=lambda x: x[0]) → [(3,2),(5,1)] • sorted([(1,3),(1,1)], key=lambda x: x[1]) → [(1,1),(1,3)] Common uses: • Sorting records by a specific field • Custom ordering of complex data structures

Step-by-Step Execution:
1. Start from the construct described in: A lambda function as the key allows sorting by any custom criterion.
2. Resolve the subparts implied by: Here, x[1] extracts the second element of each tuple for comparison.
3. Apply the core semantics highlighted in: Key concepts: • lambda x: x[1] → returns the second element of x • Keys: "b", "a", "c" • Sorted by keys: "a" < "b" < "c" • Corresponding tuples: (2,"a"), (1,"b"), (3,"c") How it works: 1.
4. Confirm the final result aligns with: Return tuples in sorted order: [(2,"a"), (1,"b"), (3,"c")] Examples: • sorted([(5,1),(3,2)], key=lambda x: x[0]) → [(3,2),(5,1)] • sorted([(1,3),(1,1)], key=lambda x: x[1]) → [(1,1),(1,3)] Common uses: • Sorting records by a specific field • Custom ordering of complex data structures

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Here, x[1] extracts the second element of each tuple for comparison.
2. Apply the construct’s main rule next, matching: A lambda function as the key allows sorting by any custom criterion.
3. Produce any intermediate values that Return tuples in sorted order: [(2,"a"), (1,"b"), (3,"c")] Examples: • sorted([(5,1),(3,2)], key=lambda x: x[0]) → [(3,2),(5,1)] • sorted([(1,3),(1,1)], key=lambda x: x[1]) → [(1,1),(1,3)] Common uses: • Sorting records by a specific field • Custom ordering of complex data structures relies on
4. Finish by returning/assembling the final output named by: Return tuples in sorted order: [(2,"a"), (1,"b"), (3,"c")] Examples: • sorted([(5,1),(3,2)], key=lambda x: x[0]) → [(3,2),(5,1)] • sorted([(1,3),(1,1)], key=lambda x: x[1]) → [(1,1),(1,3)] Common uses: • Sorting records by a specific field • Custom ordering of complex data structures
5. Use the result only after the full construct has completed, per: A lambda function as the key allows sorting by any custom criterion.

Common Use Cases:
• Teaching this behavior using the mental model: A lambda function as the key allows sorting by any custom criterion.
• Debugging when the observed value should match the expectation in: Return tuples in sorted order: [(2,"a"), (1,"b"), (3,"c")] Examples: • sorted([(5,1),(3,2)], key=lambda x: x[0]) → [(3,2),(5,1)] • sorted([(1,3),(1,1)], key=lambda x: x[1]) → [(1,1),(1,3)] Common uses: • Sorting records by a specific field • Custom ordering of complex data structures

Edge Cases:
• If inputs vary from the situation described in: Here, x[1] extracts the second element of each tuple for comparison., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • lambda x: x[1] → returns the second element of x • Keys: "b", "a", "c" • Sorted by keys: "a" < "b" < "c" • Corresponding tuples: (2,"a"), (1,"b"), (3,"c") How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Return tuples in sorted order: [(2,"a"), (1,"b"), (3,"c")] Examples: • sorted([(5,1),(3,2)], key=lambda x: x[0]) → [(3,2),(5,1)] • sorted([(1,3),(1,1)], key=lambda x: x[1]) → [(1,1),(1,3)] Common uses: • Sorting records by a specific field • Custom ordering of complex data structures.
• When performance matters, prefer the simplest pattern that still implements: A lambda function as the key allows sorting by any custom criterion..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: A lambda function as the key allows sorting by any custom criterion..

Notes:
• For maintainable code, make the intent behind: Here, x[1] extracts the second element of each tuple for comparison. explicit (and test it with inputs like those in this prompt).`
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
• Return original values in that order: [-1, 2, 3, -4] Examples: • sorted([-5, 1, -3], key=abs) → [1, -3, -5] • min([3, -1, -2], key=abs) → -1 (smallest absolute value) Note: The original values (including signs) are preserved in the output — only the comparison uses absolute values.

Key Distinctions:
• This question’s focus is best captured by: key=abs sorts numbers by their absolute value (distance from zero), ignoring the sign.
• The contrast that matters for correctness is summarized by: Key concepts: • abs(3)=3, abs(-1)=1, abs(2)=2, abs(-4)=4 • Sorted by absolute value: 1, 2, 3, 4 • Corresponding original values: -1, 2, 3, -4 How it works: 1.

How It Works:
• Python follows the rule implied by: key=abs sorts numbers by their absolute value (distance from zero), ignoring the sign.
• The outcome you observe follows from: Return original values in that order: [-1, 2, 3, -4] Examples: • sorted([-5, 1, -3], key=abs) → [1, -3, -5] • min([3, -1, -2], key=abs) → -1 (smallest absolute value) Note: The original values (including signs) are preserved in the output — only the comparison uses absolute values.

Step-by-Step Execution:
1. Start from the construct described in: key=abs sorts numbers by their absolute value (distance from zero), ignoring the sign.
2. Resolve the subparts implied by: Key concepts: • abs(3)=3, abs(-1)=1, abs(2)=2, abs(-4)=4 • Sorted by absolute value: 1, 2, 3, 4 • Corresponding original values: -1, 2, 3, -4 How it works: 1.
3. Apply the core semantics highlighted in: Compute keys: abs(3)=3, abs(-1)=1, abs(2)=2, abs(-4)=4 2.
4. Confirm the final result aligns with: Return original values in that order: [-1, 2, 3, -4] Examples: • sorted([-5, 1, -3], key=abs) → [1, -3, -5] • min([3, -1, -2], key=abs) → -1 (smallest absolute value) Note: The original values (including signs) are preserved in the output — only the comparison uses absolute values.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • abs(3)=3, abs(-1)=1, abs(2)=2, abs(-4)=4 • Sorted by absolute value: 1, 2, 3, 4 • Corresponding original values: -1, 2, 3, -4 How it works: 1.
2. Apply the construct’s main rule next, matching: key=abs sorts numbers by their absolute value (distance from zero), ignoring the sign.
3. Produce any intermediate values that Return original values in that order: [-1, 2, 3, -4] Examples: • sorted([-5, 1, -3], key=abs) → [1, -3, -5] • min([3, -1, -2], key=abs) → -1 (smallest absolute value) Note: The original values (including signs) are preserved in the output — only the comparison uses absolute values. relies on
4. Finish by returning/assembling the final output named by: Return original values in that order: [-1, 2, 3, -4] Examples: • sorted([-5, 1, -3], key=abs) → [1, -3, -5] • min([3, -1, -2], key=abs) → -1 (smallest absolute value) Note: The original values (including signs) are preserved in the output — only the comparison uses absolute values.
5. Use the result only after the full construct has completed, per: key=abs sorts numbers by their absolute value (distance from zero), ignoring the sign.

Common Use Cases:
• Teaching this behavior using the mental model: key=abs sorts numbers by their absolute value (distance from zero), ignoring the sign.
• Debugging when the observed value should match the expectation in: Return original values in that order: [-1, 2, 3, -4] Examples: • sorted([-5, 1, -3], key=abs) → [1, -3, -5] • min([3, -1, -2], key=abs) → -1 (smallest absolute value) Note: The original values (including signs) are preserved in the output — only the comparison uses absolute values.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • abs(3)=3, abs(-1)=1, abs(2)=2, abs(-4)=4 • Sorted by absolute value: 1, 2, 3, 4 • Corresponding original values: -1, 2, 3, -4 How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: Compute keys: abs(3)=3, abs(-1)=1, abs(2)=2, abs(-4)=4 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Return original values in that order: [-1, 2, 3, -4] Examples: • sorted([-5, 1, -3], key=abs) → [1, -3, -5] • min([3, -1, -2], key=abs) → -1 (smallest absolute value) Note: The original values (including signs) are preserved in the output — only the comparison uses absolute values..
• When performance matters, prefer the simplest pattern that still implements: key=abs sorts numbers by their absolute value (distance from zero), ignoring the sign..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: key=abs sorts numbers by their absolute value (distance from zero), ignoring the sign..

Notes:
• For maintainable code, make the intent behind: Key concepts: • abs(3)=3, abs(-1)=1, abs(2)=2, abs(-4)=4 • Sorted by absolute value: 1, 2, 3, 4 • Corresponding original values: -1, 2, 3, -4 How it works: 1. explicit (and test it with inputs like those in this prompt).`
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
• If the words were in reverse order in the input, they would be swapped.

Key Distinctions:
• This question’s focus is best captured by: This combines string splitting with case-insensitive sorting.
• The contrast that matters for correctness is summarized by: Key concepts: • "Hello World".split() → ["Hello", "World"] • key=str.lower → compare as "hello" and "world" • "hello" < "world" alphabetically → original order maintained How it works: 1.

How It Works:
• Python follows the rule implied by: This combines string splitting with case-insensitive sorting.
• The outcome you observe follows from: If the words were in reverse order in the input, they would be swapped.

Step-by-Step Execution:
1. Start from the construct described in: This combines string splitting with case-insensitive sorting.
2. Resolve the subparts implied by: Key concepts: • "Hello World".split() → ["Hello", "World"] • key=str.lower → compare as "hello" and "world" • "hello" < "world" alphabetically → original order maintained How it works: 1.
3. Apply the core semantics highlighted in: Split: ["Hello", "World"] 2.
4. Confirm the final result aligns with: If the words were in reverse order in the input, they would be swapped.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • "Hello World".split() → ["Hello", "World"] • key=str.lower → compare as "hello" and "world" • "hello" < "world" alphabetically → original order maintained How it works: 1.
2. Apply the construct’s main rule next, matching: This combines string splitting with case-insensitive sorting.
3. Produce any intermediate values that If the words were in reverse order in the input, they would be swapped. relies on
4. Finish by returning/assembling the final output named by: If the words were in reverse order in the input, they would be swapped.
5. Use the result only after the full construct has completed, per: This combines string splitting with case-insensitive sorting.

Common Use Cases:
• Teaching this behavior using the mental model: This combines string splitting with case-insensitive sorting.
• Debugging when the observed value should match the expectation in: If the words were in reverse order in the input, they would be swapped.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • "Hello World".split() → ["Hello", "World"] • key=str.lower → compare as "hello" and "world" • "hello" < "world" alphabetically → original order maintained How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: Split: ["Hello", "World"] 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: If the words were in reverse order in the input, they would be swapped..
• When performance matters, prefer the simplest pattern that still implements: This combines string splitting with case-insensitive sorting..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This combines string splitting with case-insensitive sorting..

Notes:
• For maintainable code, make the intent behind: Key concepts: • "Hello World".split() → ["Hello", "World"] • key=str.lower → compare as "hello" and "world" • "hello" < "world" alphabetically → original order maintained How it works: 1. explicit (and test it with inputs like those in this prompt).`
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
• For strings, use reverse=True.

Key Distinctions:
• This question’s focus is best captured by: Using a negation key function is a technique to sort in descending order without using reverse=True.
• The contrast that matters for correctness is summarized by: Key concepts: • range(5) → 0, 1, 2, 3, 4 • key=lambda x: -x → keys are 0, -1, -2, -3, -4 • Sorted ascending by keys: -4, -3, -2, -1, 0 • Corresponding original values: 4, 3, 2, 1, 0 How it works: 1.

How It Works:
• Python follows the rule implied by: Using a negation key function is a technique to sort in descending order without using reverse=True.
• The outcome you observe follows from: For strings, use reverse=True.

Step-by-Step Execution:
1. Start from the construct described in: Using a negation key function is a technique to sort in descending order without using reverse=True.
2. Resolve the subparts implied by: Key concepts: • range(5) → 0, 1, 2, 3, 4 • key=lambda x: -x → keys are 0, -1, -2, -3, -4 • Sorted ascending by keys: -4, -3, -2, -1, 0 • Corresponding original values: 4, 3, 2, 1, 0 How it works: 1.
3. Apply the core semantics highlighted in: Elements: 0, 1, 2, 3, 4 2.
4. Confirm the final result aligns with: For strings, use reverse=True.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • range(5) → 0, 1, 2, 3, 4 • key=lambda x: -x → keys are 0, -1, -2, -3, -4 • Sorted ascending by keys: -4, -3, -2, -1, 0 • Corresponding original values: 4, 3, 2, 1, 0 How it works: 1.
2. Apply the construct’s main rule next, matching: Using a negation key function is a technique to sort in descending order without using reverse=True.
3. Produce any intermediate values that For strings, use reverse=True. relies on
4. Finish by returning/assembling the final output named by: For strings, use reverse=True.
5. Use the result only after the full construct has completed, per: Using a negation key function is a technique to sort in descending order without using reverse=True.

Common Use Cases:
• Teaching this behavior using the mental model: Using a negation key function is a technique to sort in descending order without using reverse=True.
• Debugging when the observed value should match the expectation in: For strings, use reverse=True.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • range(5) → 0, 1, 2, 3, 4 • key=lambda x: -x → keys are 0, -1, -2, -3, -4 • Sorted ascending by keys: -4, -3, -2, -1, 0 • Corresponding original values: 4, 3, 2, 1, 0 How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: Elements: 0, 1, 2, 3, 4 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: For strings, use reverse=True..
• When performance matters, prefer the simplest pattern that still implements: Using a negation key function is a technique to sort in descending order without using reverse=True..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Using a negation key function is a technique to sort in descending order without using reverse=True..

Notes:
• For maintainable code, make the intent behind: Key concepts: • range(5) → 0, 1, 2, 3, 4 • key=lambda x: -x → keys are 0, -1, -2, -3, -4 • Sorted ascending by keys: -4, -3, -2, -1, 0 • Corresponding original values: 4, 3, 2, 1, 0 How it works: 1. explicit (and test it with inputs like those in this prompt).`
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
• Final order: [(1, 1), (1, 3), (2, 2)] Examples: • sorted([(2, 1), (1, 2)]) → [(1, 2), (2, 1)] • sorted([(1, "b"), (1, "a")]) → [(1, "a"), (1, "b")] This is called lexicographic ordering — the same way words are sorted in a dictionary.

Key Distinctions:
• This question’s focus is best captured by: Tuples are compared lexicographically by default — element by element, left to right.
• The contrast that matters for correctness is summarized by: Key concepts: • Tuples compare element-by-element from left to right • (1, 1) < (1, 3) because first elements are equal (1==1), second element 1 < 3 • (1, 3) < (2, 2) because first element 1 < 2 How it works: 1.

How It Works:
• Python follows the rule implied by: Tuples are compared lexicographically by default — element by element, left to right.
• The outcome you observe follows from: Final order: [(1, 1), (1, 3), (2, 2)] Examples: • sorted([(2, 1), (1, 2)]) → [(1, 2), (2, 1)] • sorted([(1, "b"), (1, "a")]) → [(1, "a"), (1, "b")] This is called lexicographic ordering — the same way words are sorted in a dictionary.

Step-by-Step Execution:
1. Start from the construct described in: Tuples are compared lexicographically by default — element by element, left to right.
2. Resolve the subparts implied by: Key concepts: • Tuples compare element-by-element from left to right • (1, 1) < (1, 3) because first elements are equal (1==1), second element 1 < 3 • (1, 3) < (2, 2) because first element 1 < 2 How it works: 1.
3. Apply the core semantics highlighted in: Compare (1, 3) vs (1, 1): first elements equal, 3 > 1 → (1, 1) comes first 2.
4. Confirm the final result aligns with: Final order: [(1, 1), (1, 3), (2, 2)] Examples: • sorted([(2, 1), (1, 2)]) → [(1, 2), (2, 1)] • sorted([(1, "b"), (1, "a")]) → [(1, "a"), (1, "b")] This is called lexicographic ordering — the same way words are sorted in a dictionary.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • Tuples compare element-by-element from left to right • (1, 1) < (1, 3) because first elements are equal (1==1), second element 1 < 3 • (1, 3) < (2, 2) because first element 1 < 2 How it works: 1.
2. Apply the construct’s main rule next, matching: Tuples are compared lexicographically by default — element by element, left to right.
3. Produce any intermediate values that Final order: [(1, 1), (1, 3), (2, 2)] Examples: • sorted([(2, 1), (1, 2)]) → [(1, 2), (2, 1)] • sorted([(1, "b"), (1, "a")]) → [(1, "a"), (1, "b")] This is called lexicographic ordering — the same way words are sorted in a dictionary. relies on
4. Finish by returning/assembling the final output named by: Final order: [(1, 1), (1, 3), (2, 2)] Examples: • sorted([(2, 1), (1, 2)]) → [(1, 2), (2, 1)] • sorted([(1, "b"), (1, "a")]) → [(1, "a"), (1, "b")] This is called lexicographic ordering — the same way words are sorted in a dictionary.
5. Use the result only after the full construct has completed, per: Tuples are compared lexicographically by default — element by element, left to right.

Common Use Cases:
• Teaching this behavior using the mental model: Tuples are compared lexicographically by default — element by element, left to right.
• Debugging when the observed value should match the expectation in: Final order: [(1, 1), (1, 3), (2, 2)] Examples: • sorted([(2, 1), (1, 2)]) → [(1, 2), (2, 1)] • sorted([(1, "b"), (1, "a")]) → [(1, "a"), (1, "b")] This is called lexicographic ordering — the same way words are sorted in a dictionary.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • Tuples compare element-by-element from left to right • (1, 1) < (1, 3) because first elements are equal (1==1), second element 1 < 3 • (1, 3) < (2, 2) because first element 1 < 2 How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: Compare (1, 3) vs (1, 1): first elements equal, 3 > 1 → (1, 1) comes first 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Final order: [(1, 1), (1, 3), (2, 2)] Examples: • sorted([(2, 1), (1, 2)]) → [(1, 2), (2, 1)] • sorted([(1, "b"), (1, "a")]) → [(1, "a"), (1, "b")] This is called lexicographic ordering — the same way words are sorted in a dictionary..
• When performance matters, prefer the simplest pattern that still implements: Tuples are compared lexicographically by default — element by element, left to right..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Tuples are compared lexicographically by default — element by element, left to right..

Notes:
• For maintainable code, make the intent behind: Key concepts: • Tuples compare element-by-element from left to right • (1, 1) < (1, 3) because first elements are equal (1==1), second element 1 < 3 • (1, 3) < (2, 2) because first element 1 < 2 How it works: 1. explicit (and test it with inputs like those in this prompt).`
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
• Key concepts: • Stable sort: equal elements keep their original order • Python uses Timsort (a hybrid merge sort / insertion sort) • This guarantee applies to both sorted() and list.sort() • Stability is guaranteed by the language specification Why stability matters: • When sorting by key, elements with the same key stay in their original order • You can sort by multiple criteria by sorting multiple times Example of stability: • data = [("Alice", 3), ("Bob", 1), ("Charlie", 3)] • sorted(data, key=lambda x: x[1]) • Result: [("Bob", 1), ("Alice", 3), ("Charlie", 3)] • Alice and Charlie both have key 3 — Alice stays before Charlie (original order) Common uses: • Multi-level sorting: sort by secondary key first, then primary key • Preserving input order for equal elements

Key Distinctions:
• This question’s focus is best captured by: Python's sort is stable, meaning elements that compare equal retain their original relative order.
• The contrast that matters for correctness is summarized by: Key concepts: • Stable sort: equal elements keep their original order • Python uses Timsort (a hybrid merge sort / insertion sort) • This guarantee applies to both sorted() and list.sort() • Stability is guaranteed by the language specification Why stability matters: • When sorting by key, elements with the same key stay in their original order • You can sort by multiple criteria by sorting multiple times Example of stability: • data = [("Alice", 3), ("Bob", 1), ("Charlie", 3)] • sorted(data, key=lambda x: x[1]) • Result: [("Bob", 1), ("Alice", 3), ("Charlie", 3)] • Alice and Charlie both have key 3 — Alice stays before Charlie (original order) Common uses: • Multi-level sorting: sort by secondary key first, then primary key • Preserving input order for equal elements

How It Works:
• Python follows the rule implied by: Python's sort is stable, meaning elements that compare equal retain their original relative order.
• The outcome you observe follows from: Key concepts: • Stable sort: equal elements keep their original order • Python uses Timsort (a hybrid merge sort / insertion sort) • This guarantee applies to both sorted() and list.sort() • Stability is guaranteed by the language specification Why stability matters: • When sorting by key, elements with the same key stay in their original order • You can sort by multiple criteria by sorting multiple times Example of stability: • data = [("Alice", 3), ("Bob", 1), ("Charlie", 3)] • sorted(data, key=lambda x: x[1]) • Result: [("Bob", 1), ("Alice", 3), ("Charlie", 3)] • Alice and Charlie both have key 3 — Alice stays before Charlie (original order) Common uses: • Multi-level sorting: sort by secondary key first, then primary key • Preserving input order for equal elements

Step-by-Step Execution:
1. Start from the construct described in: Python's sort is stable, meaning elements that compare equal retain their original relative order.
2. Resolve the subparts implied by: Key concepts: • Stable sort: equal elements keep their original order • Python uses Timsort (a hybrid merge sort / insertion sort) • This guarantee applies to both sorted() and list.sort() • Stability is guaranteed by the language specification Why stability matters: • When sorting by key, elements with the same key stay in their original order • You can sort by multiple criteria by sorting multiple times Example of stability: • data = [("Alice", 3), ("Bob", 1), ("Charlie", 3)] • sorted(data, key=lambda x: x[1]) • Result: [("Bob", 1), ("Alice", 3), ("Charlie", 3)] • Alice and Charlie both have key 3 — Alice stays before Charlie (original order) Common uses: • Multi-level sorting: sort by secondary key first, then primary key • Preserving input order for equal elements
3. Apply the core semantics highlighted in: Key concepts: • Stable sort: equal elements keep their original order • Python uses Timsort (a hybrid merge sort / insertion sort) • This guarantee applies to both sorted() and list.sort() • Stability is guaranteed by the language specification Why stability matters: • When sorting by key, elements with the same key stay in their original order • You can sort by multiple criteria by sorting multiple times Example of stability: • data = [("Alice", 3), ("Bob", 1), ("Charlie", 3)] • sorted(data, key=lambda x: x[1]) • Result: [("Bob", 1), ("Alice", 3), ("Charlie", 3)] • Alice and Charlie both have key 3 — Alice stays before Charlie (original order) Common uses: • Multi-level sorting: sort by secondary key first, then primary key • Preserving input order for equal elements
4. Confirm the final result aligns with: Key concepts: • Stable sort: equal elements keep their original order • Python uses Timsort (a hybrid merge sort / insertion sort) • This guarantee applies to both sorted() and list.sort() • Stability is guaranteed by the language specification Why stability matters: • When sorting by key, elements with the same key stay in their original order • You can sort by multiple criteria by sorting multiple times Example of stability: • data = [("Alice", 3), ("Bob", 1), ("Charlie", 3)] • sorted(data, key=lambda x: x[1]) • Result: [("Bob", 1), ("Alice", 3), ("Charlie", 3)] • Alice and Charlie both have key 3 — Alice stays before Charlie (original order) Common uses: • Multi-level sorting: sort by secondary key first, then primary key • Preserving input order for equal elements

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • Stable sort: equal elements keep their original order • Python uses Timsort (a hybrid merge sort / insertion sort) • This guarantee applies to both sorted() and list.sort() • Stability is guaranteed by the language specification Why stability matters: • When sorting by key, elements with the same key stay in their original order • You can sort by multiple criteria by sorting multiple times Example of stability: • data = [("Alice", 3), ("Bob", 1), ("Charlie", 3)] • sorted(data, key=lambda x: x[1]) • Result: [("Bob", 1), ("Alice", 3), ("Charlie", 3)] • Alice and Charlie both have key 3 — Alice stays before Charlie (original order) Common uses: • Multi-level sorting: sort by secondary key first, then primary key • Preserving input order for equal elements
2. Apply the construct’s main rule next, matching: Python's sort is stable, meaning elements that compare equal retain their original relative order.
3. Produce any intermediate values that Key concepts: • Stable sort: equal elements keep their original order • Python uses Timsort (a hybrid merge sort / insertion sort) • This guarantee applies to both sorted() and list.sort() • Stability is guaranteed by the language specification Why stability matters: • When sorting by key, elements with the same key stay in their original order • You can sort by multiple criteria by sorting multiple times Example of stability: • data = [("Alice", 3), ("Bob", 1), ("Charlie", 3)] • sorted(data, key=lambda x: x[1]) • Result: [("Bob", 1), ("Alice", 3), ("Charlie", 3)] • Alice and Charlie both have key 3 — Alice stays before Charlie (original order) Common uses: • Multi-level sorting: sort by secondary key first, then primary key • Preserving input order for equal elements relies on
4. Finish by returning/assembling the final output named by: Key concepts: • Stable sort: equal elements keep their original order • Python uses Timsort (a hybrid merge sort / insertion sort) • This guarantee applies to both sorted() and list.sort() • Stability is guaranteed by the language specification Why stability matters: • When sorting by key, elements with the same key stay in their original order • You can sort by multiple criteria by sorting multiple times Example of stability: • data = [("Alice", 3), ("Bob", 1), ("Charlie", 3)] • sorted(data, key=lambda x: x[1]) • Result: [("Bob", 1), ("Alice", 3), ("Charlie", 3)] • Alice and Charlie both have key 3 — Alice stays before Charlie (original order) Common uses: • Multi-level sorting: sort by secondary key first, then primary key • Preserving input order for equal elements
5. Use the result only after the full construct has completed, per: Python's sort is stable, meaning elements that compare equal retain their original relative order.

Common Use Cases:
• Teaching this behavior using the mental model: Python's sort is stable, meaning elements that compare equal retain their original relative order.
• Debugging when the observed value should match the expectation in: Key concepts: • Stable sort: equal elements keep their original order • Python uses Timsort (a hybrid merge sort / insertion sort) • This guarantee applies to both sorted() and list.sort() • Stability is guaranteed by the language specification Why stability matters: • When sorting by key, elements with the same key stay in their original order • You can sort by multiple criteria by sorting multiple times Example of stability: • data = [("Alice", 3), ("Bob", 1), ("Charlie", 3)] • sorted(data, key=lambda x: x[1]) • Result: [("Bob", 1), ("Alice", 3), ("Charlie", 3)] • Alice and Charlie both have key 3 — Alice stays before Charlie (original order) Common uses: • Multi-level sorting: sort by secondary key first, then primary key • Preserving input order for equal elements

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • Stable sort: equal elements keep their original order • Python uses Timsort (a hybrid merge sort / insertion sort) • This guarantee applies to both sorted() and list.sort() • Stability is guaranteed by the language specification Why stability matters: • When sorting by key, elements with the same key stay in their original order • You can sort by multiple criteria by sorting multiple times Example of stability: • data = [("Alice", 3), ("Bob", 1), ("Charlie", 3)] • sorted(data, key=lambda x: x[1]) • Result: [("Bob", 1), ("Alice", 3), ("Charlie", 3)] • Alice and Charlie both have key 3 — Alice stays before Charlie (original order) Common uses: • Multi-level sorting: sort by secondary key first, then primary key • Preserving input order for equal elements, the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • Stable sort: equal elements keep their original order • Python uses Timsort (a hybrid merge sort / insertion sort) • This guarantee applies to both sorted() and list.sort() • Stability is guaranteed by the language specification Why stability matters: • When sorting by key, elements with the same key stay in their original order • You can sort by multiple criteria by sorting multiple times Example of stability: • data = [("Alice", 3), ("Bob", 1), ("Charlie", 3)] • sorted(data, key=lambda x: x[1]) • Result: [("Bob", 1), ("Alice", 3), ("Charlie", 3)] • Alice and Charlie both have key 3 — Alice stays before Charlie (original order) Common uses: • Multi-level sorting: sort by secondary key first, then primary key • Preserving input order for equal elements is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • Stable sort: equal elements keep their original order • Python uses Timsort (a hybrid merge sort / insertion sort) • This guarantee applies to both sorted() and list.sort() • Stability is guaranteed by the language specification Why stability matters: • When sorting by key, elements with the same key stay in their original order • You can sort by multiple criteria by sorting multiple times Example of stability: • data = [("Alice", 3), ("Bob", 1), ("Charlie", 3)] • sorted(data, key=lambda x: x[1]) • Result: [("Bob", 1), ("Alice", 3), ("Charlie", 3)] • Alice and Charlie both have key 3 — Alice stays before Charlie (original order) Common uses: • Multi-level sorting: sort by secondary key first, then primary key • Preserving input order for equal elements.
• When performance matters, prefer the simplest pattern that still implements: Python's sort is stable, meaning elements that compare equal retain their original relative order..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Python's sort is stable, meaning elements that compare equal retain their original relative order..

Notes:
• For maintainable code, make the intent behind: Key concepts: • Stable sort: equal elements keep their original order • Python uses Timsort (a hybrid merge sort / insertion sort) • This guarantee applies to both sorted() and list.sort() • Stability is guaranteed by the language specification Why stability matters: • When sorting by key, elements with the same key stay in their original order • You can sort by multiple criteria by sorting multiple times Example of stability: • data = [("Alice", 3), ("Bob", 1), ("Charlie", 3)] • sorted(data, key=lambda x: x[1]) • Result: [("Bob", 1), ("Alice", 3), ("Charlie", 3)] • Alice and Charlie both have key 3 — Alice stays before Charlie (original order) Common uses: • Multi-level sorting: sort by secondary key first, then primary key • Preserving input order for equal elements explicit (and test it with inputs like those in this prompt).`
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
• Result: [False, True, True] Examples: • sorted([True, False]) → [False, True] • sorted([1, True, 0, False]) → [0, False, 1, True] (stable sort: 0 before False if 0 came first) • min([True, False]) → False Edge case: bool is a subclass of int, so True + True = 2 and False * 10 = 0.

Key Distinctions:
• This question’s focus is best captured by: In Python, bool is a subclass of int.
• The contrast that matters for correctness is summarized by: False equals 0 and True equals 1.

How It Works:
• Python follows the rule implied by: In Python, bool is a subclass of int.
• The outcome you observe follows from: Result: [False, True, True] Examples: • sorted([True, False]) → [False, True] • sorted([1, True, 0, False]) → [0, False, 1, True] (stable sort: 0 before False if 0 came first) • min([True, False]) → False Edge case: bool is a subclass of int, so True + True = 2 and False * 10 = 0.

Step-by-Step Execution:
1. Start from the construct described in: In Python, bool is a subclass of int.
2. Resolve the subparts implied by: False equals 0 and True equals 1.
3. Apply the core semantics highlighted in: Sorting booleans is equivalent to sorting 0s and 1s.
4. Confirm the final result aligns with: Result: [False, True, True] Examples: • sorted([True, False]) → [False, True] • sorted([1, True, 0, False]) → [0, False, 1, True] (stable sort: 0 before False if 0 came first) • min([True, False]) → False Edge case: bool is a subclass of int, so True + True = 2 and False * 10 = 0.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: False equals 0 and True equals 1.
2. Apply the construct’s main rule next, matching: In Python, bool is a subclass of int.
3. Produce any intermediate values that Result: [False, True, True] Examples: • sorted([True, False]) → [False, True] • sorted([1, True, 0, False]) → [0, False, 1, True] (stable sort: 0 before False if 0 came first) • min([True, False]) → False Edge case: bool is a subclass of int, so True + True = 2 and False * 10 = 0. relies on
4. Finish by returning/assembling the final output named by: Result: [False, True, True] Examples: • sorted([True, False]) → [False, True] • sorted([1, True, 0, False]) → [0, False, 1, True] (stable sort: 0 before False if 0 came first) • min([True, False]) → False Edge case: bool is a subclass of int, so True + True = 2 and False * 10 = 0.
5. Use the result only after the full construct has completed, per: In Python, bool is a subclass of int.

Common Use Cases:
• Teaching this behavior using the mental model: In Python, bool is a subclass of int.
• Debugging when the observed value should match the expectation in: Result: [False, True, True] Examples: • sorted([True, False]) → [False, True] • sorted([1, True, 0, False]) → [0, False, 1, True] (stable sort: 0 before False if 0 came first) • min([True, False]) → False Edge case: bool is a subclass of int, so True + True = 2 and False * 10 = 0.

Edge Cases:
• If inputs vary from the situation described in: False equals 0 and True equals 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: Sorting booleans is equivalent to sorting 0s and 1s. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Result: [False, True, True] Examples: • sorted([True, False]) → [False, True] • sorted([1, True, 0, False]) → [0, False, 1, True] (stable sort: 0 before False if 0 came first) • min([True, False]) → False Edge case: bool is a subclass of int, so True + True = 2 and False * 10 = 0..
• When performance matters, prefer the simplest pattern that still implements: In Python, bool is a subclass of int..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: In Python, bool is a subclass of int..

Notes:
• For maintainable code, make the intent behind: False equals 0 and True equals 1. explicit (and test it with inputs like those in this prompt).`
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
• Result: ["A", "a", "b", "B"] This is a powerful demonstration of Python's stable sort guarantee.

Key Distinctions:
• This question’s focus is best captured by: This demonstrates both key-based sorting and sort stability working together.
• The contrast that matters for correctness is summarized by: Key concepts: • Keys: "b"→"b", "A"→"a", "a"→"a", "B"→"b" • Sorted by keys: "a", "a", "b", "b" • Stable sort: within equal keys, original order is preserved • "A" came before "a" in the input → "A" stays first • "b" came before "B" in the input → "b" stays first How it works: 1.

How It Works:
• Python follows the rule implied by: This demonstrates both key-based sorting and sort stability working together.
• The outcome you observe follows from: Result: ["A", "a", "b", "B"] This is a powerful demonstration of Python's stable sort guarantee.

Step-by-Step Execution:
1. Start from the construct described in: This demonstrates both key-based sorting and sort stability working together.
2. Resolve the subparts implied by: Key concepts: • Keys: "b"→"b", "A"→"a", "a"→"a", "B"→"b" • Sorted by keys: "a", "a", "b", "b" • Stable sort: within equal keys, original order is preserved • "A" came before "a" in the input → "A" stays first • "b" came before "B" in the input → "b" stays first How it works: 1.
3. Apply the core semantics highlighted in: Compute keys: ["b", "A", "a", "B"] → ["b", "a", "a", "b"] 2.
4. Confirm the final result aligns with: Result: ["A", "a", "b", "B"] This is a powerful demonstration of Python's stable sort guarantee.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • Keys: "b"→"b", "A"→"a", "a"→"a", "B"→"b" • Sorted by keys: "a", "a", "b", "b" • Stable sort: within equal keys, original order is preserved • "A" came before "a" in the input → "A" stays first • "b" came before "B" in the input → "b" stays first How it works: 1.
2. Apply the construct’s main rule next, matching: This demonstrates both key-based sorting and sort stability working together.
3. Produce any intermediate values that Result: ["A", "a", "b", "B"] This is a powerful demonstration of Python's stable sort guarantee. relies on
4. Finish by returning/assembling the final output named by: Result: ["A", "a", "b", "B"] This is a powerful demonstration of Python's stable sort guarantee.
5. Use the result only after the full construct has completed, per: This demonstrates both key-based sorting and sort stability working together.

Common Use Cases:
• Teaching this behavior using the mental model: This demonstrates both key-based sorting and sort stability working together.
• Debugging when the observed value should match the expectation in: Result: ["A", "a", "b", "B"] This is a powerful demonstration of Python's stable sort guarantee.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • Keys: "b"→"b", "A"→"a", "a"→"a", "B"→"b" • Sorted by keys: "a", "a", "b", "b" • Stable sort: within equal keys, original order is preserved • "A" came before "a" in the input → "A" stays first • "b" came before "B" in the input → "b" stays first How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: Compute keys: ["b", "A", "a", "B"] → ["b", "a", "a", "b"] 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Result: ["A", "a", "b", "B"] This is a powerful demonstration of Python's stable sort guarantee..
• When performance matters, prefer the simplest pattern that still implements: This demonstrates both key-based sorting and sort stability working together..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This demonstrates both key-based sorting and sort stability working together..

Notes:
• For maintainable code, make the intent behind: Key concepts: • Keys: "b"→"b", "A"→"a", "a"→"a", "B"→"b" • Sorted by keys: "a", "a", "b", "b" • Stable sort: within equal keys, original order is preserved • "A" came before "a" in the input → "A" stays first • "b" came before "B" in the input → "b" stays first How it works: 1. explicit (and test it with inputs like those in this prompt).`
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
• min(["apple", "banana"], key=len) returns "apple", not 5.

Key Distinctions:
• This question’s focus is best captured by: The key parameter works with min() just like with sorted().
• The contrast that matters for correctness is summarized by: It determines what value is used for comparison.

How It Works:
• Python follows the rule implied by: The key parameter works with min() just like with sorted().
• The outcome you observe follows from: min(["apple", "banana"], key=len) returns "apple", not 5.

Step-by-Step Execution:
1. Start from the construct described in: The key parameter works with min() just like with sorted().
2. Resolve the subparts implied by: It determines what value is used for comparison.
3. Apply the core semantics highlighted in: Key concepts: • key=len → compare by string length • len("banana")=6, len("apple")=5, len("cherry")=6 • Minimum length is 5 → "apple" • Returns the original element, not the key value How it works: 1.
4. Confirm the final result aligns with: min(["apple", "banana"], key=len) returns "apple", not 5.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: It determines what value is used for comparison.
2. Apply the construct’s main rule next, matching: The key parameter works with min() just like with sorted().
3. Produce any intermediate values that min(["apple", "banana"], key=len) returns "apple", not 5. relies on
4. Finish by returning/assembling the final output named by: min(["apple", "banana"], key=len) returns "apple", not 5.
5. Use the result only after the full construct has completed, per: The key parameter works with min() just like with sorted().

Common Use Cases:
• Teaching this behavior using the mental model: The key parameter works with min() just like with sorted().
• Debugging when the observed value should match the expectation in: min(["apple", "banana"], key=len) returns "apple", not 5.

Edge Cases:
• If inputs vary from the situation described in: It determines what value is used for comparison., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • key=len → compare by string length • len("banana")=6, len("apple")=5, len("cherry")=6 • Minimum length is 5 → "apple" • Returns the original element, not the key value How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: min(["apple", "banana"], key=len) returns "apple", not 5..
• When performance matters, prefer the simplest pattern that still implements: The key parameter works with min() just like with sorted()..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The key parameter works with min() just like with sorted()..

Notes:
• For maintainable code, make the intent behind: It determines what value is used for comparison. explicit (and test it with inputs like those in this prompt).`
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
• Return corresponding element: "hello" Examples: • max(["a", "bb", "ccc"], key=len) → "ccc" • max(["Python", "is", "great"], key=len) → "Python" Note: Like min(), max() returns the original element, not the computed key value.

Key Distinctions:
• This question’s focus is best captured by: max() with key=len returns the element with the greatest length.
• The contrast that matters for correctness is summarized by: Key concepts: • key=len → compare by string length • len("hi")=2, len("hello")=5, len("hey")=3 • Maximum length is 5 → "hello" How it works: 1.

How It Works:
• Python follows the rule implied by: max() with key=len returns the element with the greatest length.
• The outcome you observe follows from: Return corresponding element: "hello" Examples: • max(["a", "bb", "ccc"], key=len) → "ccc" • max(["Python", "is", "great"], key=len) → "Python" Note: Like min(), max() returns the original element, not the computed key value.

Step-by-Step Execution:
1. Start from the construct described in: max() with key=len returns the element with the greatest length.
2. Resolve the subparts implied by: Key concepts: • key=len → compare by string length • len("hi")=2, len("hello")=5, len("hey")=3 • Maximum length is 5 → "hello" How it works: 1.
3. Apply the core semantics highlighted in: Compute keys: "hi"→2, "hello"→5, "hey"→3 2.
4. Confirm the final result aligns with: Return corresponding element: "hello" Examples: • max(["a", "bb", "ccc"], key=len) → "ccc" • max(["Python", "is", "great"], key=len) → "Python" Note: Like min(), max() returns the original element, not the computed key value.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • key=len → compare by string length • len("hi")=2, len("hello")=5, len("hey")=3 • Maximum length is 5 → "hello" How it works: 1.
2. Apply the construct’s main rule next, matching: max() with key=len returns the element with the greatest length.
3. Produce any intermediate values that Return corresponding element: "hello" Examples: • max(["a", "bb", "ccc"], key=len) → "ccc" • max(["Python", "is", "great"], key=len) → "Python" Note: Like min(), max() returns the original element, not the computed key value. relies on
4. Finish by returning/assembling the final output named by: Return corresponding element: "hello" Examples: • max(["a", "bb", "ccc"], key=len) → "ccc" • max(["Python", "is", "great"], key=len) → "Python" Note: Like min(), max() returns the original element, not the computed key value.
5. Use the result only after the full construct has completed, per: max() with key=len returns the element with the greatest length.

Common Use Cases:
• Teaching this behavior using the mental model: max() with key=len returns the element with the greatest length.
• Debugging when the observed value should match the expectation in: Return corresponding element: "hello" Examples: • max(["a", "bb", "ccc"], key=len) → "ccc" • max(["Python", "is", "great"], key=len) → "Python" Note: Like min(), max() returns the original element, not the computed key value.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • key=len → compare by string length • len("hi")=2, len("hello")=5, len("hey")=3 • Maximum length is 5 → "hello" How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: Compute keys: "hi"→2, "hello"→5, "hey"→3 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Return corresponding element: "hello" Examples: • max(["a", "bb", "ccc"], key=len) → "ccc" • max(["Python", "is", "great"], key=len) → "Python" Note: Like min(), max() returns the original element, not the computed key value..
• When performance matters, prefer the simplest pattern that still implements: max() with key=len returns the element with the greatest length..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: max() with key=len returns the element with the greatest length..

Notes:
• For maintainable code, make the intent behind: Key concepts: • key=len → compare by string length • len("hi")=2, len("hello")=5, len("hey")=3 • Maximum length is 5 → "hello" How it works: 1. explicit (and test it with inputs like those in this prompt).`
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
• Result: [3, 1, 4, 2, 5] This technique is useful for grouping numbers by divisibility — all multiples of 3 come first, then remainder 1, then remainder 2.

Key Distinctions:
• This question’s focus is best captured by: Sorting by modulo groups elements by their remainder when divided by the modulus.
• The contrast that matters for correctness is summarized by: Key concepts: • Keys: 1%3=1, 2%3=2, 3%3=0, 4%3=1, 5%3=2 • Sorted by keys: 0, 1, 1, 2, 2 • Stable sort preserves order within groups How it works: 1.

How It Works:
• Python follows the rule implied by: Sorting by modulo groups elements by their remainder when divided by the modulus.
• The outcome you observe follows from: Result: [3, 1, 4, 2, 5] This technique is useful for grouping numbers by divisibility — all multiples of 3 come first, then remainder 1, then remainder 2.

Step-by-Step Execution:
1. Start from the construct described in: Sorting by modulo groups elements by their remainder when divided by the modulus.
2. Resolve the subparts implied by: Key concepts: • Keys: 1%3=1, 2%3=2, 3%3=0, 4%3=1, 5%3=2 • Sorted by keys: 0, 1, 1, 2, 2 • Stable sort preserves order within groups How it works: 1.
3. Apply the core semantics highlighted in: Compute keys: 1→1, 2→2, 3→0, 4→1, 5→2 2.
4. Confirm the final result aligns with: Result: [3, 1, 4, 2, 5] This technique is useful for grouping numbers by divisibility — all multiples of 3 come first, then remainder 1, then remainder 2.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • Keys: 1%3=1, 2%3=2, 3%3=0, 4%3=1, 5%3=2 • Sorted by keys: 0, 1, 1, 2, 2 • Stable sort preserves order within groups How it works: 1.
2. Apply the construct’s main rule next, matching: Sorting by modulo groups elements by their remainder when divided by the modulus.
3. Produce any intermediate values that Result: [3, 1, 4, 2, 5] This technique is useful for grouping numbers by divisibility — all multiples of 3 come first, then remainder 1, then remainder 2. relies on
4. Finish by returning/assembling the final output named by: Result: [3, 1, 4, 2, 5] This technique is useful for grouping numbers by divisibility — all multiples of 3 come first, then remainder 1, then remainder 2.
5. Use the result only after the full construct has completed, per: Sorting by modulo groups elements by their remainder when divided by the modulus.

Common Use Cases:
• Teaching this behavior using the mental model: Sorting by modulo groups elements by their remainder when divided by the modulus.
• Debugging when the observed value should match the expectation in: Result: [3, 1, 4, 2, 5] This technique is useful for grouping numbers by divisibility — all multiples of 3 come first, then remainder 1, then remainder 2.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • Keys: 1%3=1, 2%3=2, 3%3=0, 4%3=1, 5%3=2 • Sorted by keys: 0, 1, 1, 2, 2 • Stable sort preserves order within groups How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: Compute keys: 1→1, 2→2, 3→0, 4→1, 5→2 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Result: [3, 1, 4, 2, 5] This technique is useful for grouping numbers by divisibility — all multiples of 3 come first, then remainder 1, then remainder 2..
• When performance matters, prefer the simplest pattern that still implements: Sorting by modulo groups elements by their remainder when divided by the modulus..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Sorting by modulo groups elements by their remainder when divided by the modulus..

Notes:
• For maintainable code, make the intent behind: Key concepts: • Keys: 1%3=1, 2%3=2, 3%3=0, 4%3=1, 5%3=2 • Sorted by keys: 0, 1, 1, 2, 2 • Stable sort preserves order within groups How it works: 1. explicit (and test it with inputs like those in this prompt).`
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
• Map back: y, t, p, o, n, h This is equivalent to sorted("python", reverse=True) for single characters.

Key Distinctions:
• This question’s focus is best captured by: ord() returns the Unicode code point of a character.
• The contrast that matters for correctness is summarized by: Negating it with -ord(c) sorts characters in reverse order.

How It Works:
• Python follows the rule implied by: ord() returns the Unicode code point of a character.
• The outcome you observe follows from: Map back: y, t, p, o, n, h This is equivalent to sorted("python", reverse=True) for single characters.

Step-by-Step Execution:
1. Start from the construct described in: ord() returns the Unicode code point of a character.
2. Resolve the subparts implied by: Negating it with -ord(c) sorts characters in reverse order.
3. Apply the core semantics highlighted in: Key concepts: • ord('p')=112, ord('y')=121, ord('t')=116 • ord('h')=104, ord('o')=111, ord('n')=110 • Negated: -121, -116, -112, -111, -110, -104 • Sorted ascending: -121(y), -116(t), -112(p), -111(o), -110(n), -104(h) How it works: 1.
4. Confirm the final result aligns with: Map back: y, t, p, o, n, h This is equivalent to sorted("python", reverse=True) for single characters.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Negating it with -ord(c) sorts characters in reverse order.
2. Apply the construct’s main rule next, matching: ord() returns the Unicode code point of a character.
3. Produce any intermediate values that Map back: y, t, p, o, n, h This is equivalent to sorted("python", reverse=True) for single characters. relies on
4. Finish by returning/assembling the final output named by: Map back: y, t, p, o, n, h This is equivalent to sorted("python", reverse=True) for single characters.
5. Use the result only after the full construct has completed, per: ord() returns the Unicode code point of a character.

Common Use Cases:
• Teaching this behavior using the mental model: ord() returns the Unicode code point of a character.
• Debugging when the observed value should match the expectation in: Map back: y, t, p, o, n, h This is equivalent to sorted("python", reverse=True) for single characters.

Edge Cases:
• If inputs vary from the situation described in: Negating it with -ord(c) sorts characters in reverse order., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • ord('p')=112, ord('y')=121, ord('t')=116 • ord('h')=104, ord('o')=111, ord('n')=110 • Negated: -121, -116, -112, -111, -110, -104 • Sorted ascending: -121(y), -116(t), -112(p), -111(o), -110(n), -104(h) How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Map back: y, t, p, o, n, h This is equivalent to sorted("python", reverse=True) for single characters..
• When performance matters, prefer the simplest pattern that still implements: ord() returns the Unicode code point of a character..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: ord() returns the Unicode code point of a character..

Notes:
• For maintainable code, make the intent behind: Negating it with -ord(c) sorts characters in reverse order. explicit (and test it with inputs like those in this prompt).`
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
• list() materializes the iterator into [3, 2, 1] Alternative approaches: • sorted([3, 1, 2], reverse=True) → [3, 2, 1] (simpler) • [3, 1, 2].sort(); reverse() (in-place, two steps) • sorted([3, 1, 2])[::-1] → [3, 2, 1] (slicing) Note: reversed() returns an iterator, so you need list() to see all elements.

Key Distinctions:
• This question’s focus is best captured by: This chains sorted() and reversed() to get a descending-order list.
• The contrast that matters for correctness is summarized by: Key concepts: • sorted([3, 1, 2]) → [1, 2, 3] • reversed([1, 2, 3]) → iterator yielding 3, 2, 1 • list() converts iterator to list: [3, 2, 1] How it works: 1.

How It Works:
• Python follows the rule implied by: This chains sorted() and reversed() to get a descending-order list.
• The outcome you observe follows from: list() materializes the iterator into [3, 2, 1] Alternative approaches: • sorted([3, 1, 2], reverse=True) → [3, 2, 1] (simpler) • [3, 1, 2].sort(); reverse() (in-place, two steps) • sorted([3, 1, 2])[::-1] → [3, 2, 1] (slicing) Note: reversed() returns an iterator, so you need list() to see all elements.

Step-by-Step Execution:
1. Start from the construct described in: This chains sorted() and reversed() to get a descending-order list.
2. Resolve the subparts implied by: Key concepts: • sorted([3, 1, 2]) → [1, 2, 3] • reversed([1, 2, 3]) → iterator yielding 3, 2, 1 • list() converts iterator to list: [3, 2, 1] How it works: 1.
3. Apply the core semantics highlighted in: sorted([3, 1, 2]) returns [1, 2, 3] 2.
4. Confirm the final result aligns with: list() materializes the iterator into [3, 2, 1] Alternative approaches: • sorted([3, 1, 2], reverse=True) → [3, 2, 1] (simpler) • [3, 1, 2].sort(); reverse() (in-place, two steps) • sorted([3, 1, 2])[::-1] → [3, 2, 1] (slicing) Note: reversed() returns an iterator, so you need list() to see all elements.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • sorted([3, 1, 2]) → [1, 2, 3] • reversed([1, 2, 3]) → iterator yielding 3, 2, 1 • list() converts iterator to list: [3, 2, 1] How it works: 1.
2. Apply the construct’s main rule next, matching: This chains sorted() and reversed() to get a descending-order list.
3. Produce any intermediate values that list() materializes the iterator into [3, 2, 1] Alternative approaches: • sorted([3, 1, 2], reverse=True) → [3, 2, 1] (simpler) • [3, 1, 2].sort(); reverse() (in-place, two steps) • sorted([3, 1, 2])[::-1] → [3, 2, 1] (slicing) Note: reversed() returns an iterator, so you need list() to see all elements. relies on
4. Finish by returning/assembling the final output named by: list() materializes the iterator into [3, 2, 1] Alternative approaches: • sorted([3, 1, 2], reverse=True) → [3, 2, 1] (simpler) • [3, 1, 2].sort(); reverse() (in-place, two steps) • sorted([3, 1, 2])[::-1] → [3, 2, 1] (slicing) Note: reversed() returns an iterator, so you need list() to see all elements.
5. Use the result only after the full construct has completed, per: This chains sorted() and reversed() to get a descending-order list.

Common Use Cases:
• Teaching this behavior using the mental model: This chains sorted() and reversed() to get a descending-order list.
• Debugging when the observed value should match the expectation in: list() materializes the iterator into [3, 2, 1] Alternative approaches: • sorted([3, 1, 2], reverse=True) → [3, 2, 1] (simpler) • [3, 1, 2].sort(); reverse() (in-place, two steps) • sorted([3, 1, 2])[::-1] → [3, 2, 1] (slicing) Note: reversed() returns an iterator, so you need list() to see all elements.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • sorted([3, 1, 2]) → [1, 2, 3] • reversed([1, 2, 3]) → iterator yielding 3, 2, 1 • list() converts iterator to list: [3, 2, 1] How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: sorted([3, 1, 2]) returns [1, 2, 3] 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: list() materializes the iterator into [3, 2, 1] Alternative approaches: • sorted([3, 1, 2], reverse=True) → [3, 2, 1] (simpler) • [3, 1, 2].sort(); reverse() (in-place, two steps) • sorted([3, 1, 2])[::-1] → [3, 2, 1] (slicing) Note: reversed() returns an iterator, so you need list() to see all elements..
• When performance matters, prefer the simplest pattern that still implements: This chains sorted() and reversed() to get a descending-order list..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This chains sorted() and reversed() to get a descending-order list..

Notes:
• For maintainable code, make the intent behind: Key concepts: • sorted([3, 1, 2]) → [1, 2, 3] • reversed([1, 2, 3]) → iterator yielding 3, 2, 1 • list() converts iterator to list: [3, 2, 1] How it works: 1. explicit (and test it with inputs like those in this prompt).`
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
• list() converts the zip iterator to a list Examples: • list(zip([1, 2], [3, 4])) → [(1, 3), (2, 4)] • list(zip("ab", "cd")) → [("a", "c"), ("b", "d")] Common uses: • Iterating over parallel sequences: for a, b in zip(names, scores) • Creating dictionaries: dict(zip(keys, values))

Key Distinctions:
• This question’s focus is best captured by: zip() takes multiple iterables and returns an iterator of tuples, where each tuple contains corresponding elements from the inputs.
• The contrast that matters for correctness is summarized by: Key concepts: • zip("abc", [1, 2, 3]) pairs elements by position • Position 0: ("a", 1) • Position 1: ("b", 2) • Position 2: ("c", 3) How it works: 1.

How It Works:
• Python follows the rule implied by: zip() takes multiple iterables and returns an iterator of tuples, where each tuple contains corresponding elements from the inputs.
• The outcome you observe follows from: list() converts the zip iterator to a list Examples: • list(zip([1, 2], [3, 4])) → [(1, 3), (2, 4)] • list(zip("ab", "cd")) → [("a", "c"), ("b", "d")] Common uses: • Iterating over parallel sequences: for a, b in zip(names, scores) • Creating dictionaries: dict(zip(keys, values))

Step-by-Step Execution:
1. Start from the construct described in: zip() takes multiple iterables and returns an iterator of tuples, where each tuple contains corresponding elements from the inputs.
2. Resolve the subparts implied by: Key concepts: • zip("abc", [1, 2, 3]) pairs elements by position • Position 0: ("a", 1) • Position 1: ("b", 2) • Position 2: ("c", 3) How it works: 1.
3. Apply the core semantics highlighted in: First iterable: "abc" → 'a', 'b', 'c' 2.
4. Confirm the final result aligns with: list() converts the zip iterator to a list Examples: • list(zip([1, 2], [3, 4])) → [(1, 3), (2, 4)] • list(zip("ab", "cd")) → [("a", "c"), ("b", "d")] Common uses: • Iterating over parallel sequences: for a, b in zip(names, scores) • Creating dictionaries: dict(zip(keys, values))

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • zip("abc", [1, 2, 3]) pairs elements by position • Position 0: ("a", 1) • Position 1: ("b", 2) • Position 2: ("c", 3) How it works: 1.
2. Apply the construct’s main rule next, matching: zip() takes multiple iterables and returns an iterator of tuples, where each tuple contains corresponding elements from the inputs.
3. Produce any intermediate values that list() converts the zip iterator to a list Examples: • list(zip([1, 2], [3, 4])) → [(1, 3), (2, 4)] • list(zip("ab", "cd")) → [("a", "c"), ("b", "d")] Common uses: • Iterating over parallel sequences: for a, b in zip(names, scores) • Creating dictionaries: dict(zip(keys, values)) relies on
4. Finish by returning/assembling the final output named by: list() converts the zip iterator to a list Examples: • list(zip([1, 2], [3, 4])) → [(1, 3), (2, 4)] • list(zip("ab", "cd")) → [("a", "c"), ("b", "d")] Common uses: • Iterating over parallel sequences: for a, b in zip(names, scores) • Creating dictionaries: dict(zip(keys, values))
5. Use the result only after the full construct has completed, per: zip() takes multiple iterables and returns an iterator of tuples, where each tuple contains corresponding elements from the inputs.

Common Use Cases:
• Teaching this behavior using the mental model: zip() takes multiple iterables and returns an iterator of tuples, where each tuple contains corresponding elements from the inputs.
• Debugging when the observed value should match the expectation in: list() converts the zip iterator to a list Examples: • list(zip([1, 2], [3, 4])) → [(1, 3), (2, 4)] • list(zip("ab", "cd")) → [("a", "c"), ("b", "d")] Common uses: • Iterating over parallel sequences: for a, b in zip(names, scores) • Creating dictionaries: dict(zip(keys, values))

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • zip("abc", [1, 2, 3]) pairs elements by position • Position 0: ("a", 1) • Position 1: ("b", 2) • Position 2: ("c", 3) How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: First iterable: "abc" → 'a', 'b', 'c' 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: list() converts the zip iterator to a list Examples: • list(zip([1, 2], [3, 4])) → [(1, 3), (2, 4)] • list(zip("ab", "cd")) → [("a", "c"), ("b", "d")] Common uses: • Iterating over parallel sequences: for a, b in zip(names, scores) • Creating dictionaries: dict(zip(keys, values)).
• When performance matters, prefer the simplest pattern that still implements: zip() takes multiple iterables and returns an iterator of tuples, where each tuple contains corresponding elements from the inputs..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: zip() takes multiple iterables and returns an iterator of tuples, where each tuple contains corresponding elements from the inputs..

Notes:
• For maintainable code, make the intent behind: Key concepts: • zip("abc", [1, 2, 3]) pairs elements by position • Position 0: ("a", 1) • Position 1: ("b", 2) • Position 2: ("c", 3) How it works: 1. explicit (and test it with inputs like those in this prompt).`
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
• 5 from [3, 4, 5] is never used Examples: • list(zip([1], [2, 3, 4])) → [(1, 2)] • list(zip([], [1, 2])) → [] Alternative: Use itertools.zip_longest() to pad shorter iterables with a fill value: • list(zip_longest([1, 2], [3, 4, 5], fillvalue=None)) → [(1, 3), (2, 4), (None, 5)]

Key Distinctions:
• This question’s focus is best captured by: zip() stops producing tuples when the shortest input iterable is exhausted.
• The contrast that matters for correctness is summarized by: Extra elements from longer iterables are silently ignored.

How It Works:
• Python follows the rule implied by: zip() stops producing tuples when the shortest input iterable is exhausted.
• The outcome you observe follows from: 5 from [3, 4, 5] is never used Examples: • list(zip([1], [2, 3, 4])) → [(1, 2)] • list(zip([], [1, 2])) → [] Alternative: Use itertools.zip_longest() to pad shorter iterables with a fill value: • list(zip_longest([1, 2], [3, 4, 5], fillvalue=None)) → [(1, 3), (2, 4), (None, 5)]

Step-by-Step Execution:
1. Start from the construct described in: zip() stops producing tuples when the shortest input iterable is exhausted.
2. Resolve the subparts implied by: Extra elements from longer iterables are silently ignored.
3. Apply the core semantics highlighted in: Key concepts: • [1, 2] has 2 elements, [3, 4, 5] has 3 elements • zip stops at 2 (the shorter length) • Third element (5) is dropped silently How it works: 1.
4. Confirm the final result aligns with: 5 from [3, 4, 5] is never used Examples: • list(zip([1], [2, 3, 4])) → [(1, 2)] • list(zip([], [1, 2])) → [] Alternative: Use itertools.zip_longest() to pad shorter iterables with a fill value: • list(zip_longest([1, 2], [3, 4, 5], fillvalue=None)) → [(1, 3), (2, 4), (None, 5)]

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Extra elements from longer iterables are silently ignored.
2. Apply the construct’s main rule next, matching: zip() stops producing tuples when the shortest input iterable is exhausted.
3. Produce any intermediate values that 5 from [3, 4, 5] is never used Examples: • list(zip([1], [2, 3, 4])) → [(1, 2)] • list(zip([], [1, 2])) → [] Alternative: Use itertools.zip_longest() to pad shorter iterables with a fill value: • list(zip_longest([1, 2], [3, 4, 5], fillvalue=None)) → [(1, 3), (2, 4), (None, 5)] relies on
4. Finish by returning/assembling the final output named by: 5 from [3, 4, 5] is never used Examples: • list(zip([1], [2, 3, 4])) → [(1, 2)] • list(zip([], [1, 2])) → [] Alternative: Use itertools.zip_longest() to pad shorter iterables with a fill value: • list(zip_longest([1, 2], [3, 4, 5], fillvalue=None)) → [(1, 3), (2, 4), (None, 5)]
5. Use the result only after the full construct has completed, per: zip() stops producing tuples when the shortest input iterable is exhausted.

Common Use Cases:
• Teaching this behavior using the mental model: zip() stops producing tuples when the shortest input iterable is exhausted.
• Debugging when the observed value should match the expectation in: 5 from [3, 4, 5] is never used Examples: • list(zip([1], [2, 3, 4])) → [(1, 2)] • list(zip([], [1, 2])) → [] Alternative: Use itertools.zip_longest() to pad shorter iterables with a fill value: • list(zip_longest([1, 2], [3, 4, 5], fillvalue=None)) → [(1, 3), (2, 4), (None, 5)]

Edge Cases:
• If inputs vary from the situation described in: Extra elements from longer iterables are silently ignored., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • [1, 2] has 2 elements, [3, 4, 5] has 3 elements • zip stops at 2 (the shorter length) • Third element (5) is dropped silently How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: 5 from [3, 4, 5] is never used Examples: • list(zip([1], [2, 3, 4])) → [(1, 2)] • list(zip([], [1, 2])) → [] Alternative: Use itertools.zip_longest() to pad shorter iterables with a fill value: • list(zip_longest([1, 2], [3, 4, 5], fillvalue=None)) → [(1, 3), (2, 4), (None, 5)].
• When performance matters, prefer the simplest pattern that still implements: zip() stops producing tuples when the shortest input iterable is exhausted..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: zip() stops producing tuples when the shortest input iterable is exhausted..

Notes:
• For maintainable code, make the intent behind: Extra elements from longer iterables are silently ignored. explicit (and test it with inputs like those in this prompt).`
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
• Creates: {"a": 0, "b": 1, "c": 2} Examples: • dict(zip(["x", "y"], [10, 20])) → {"x": 10, "y": 20} • dict(zip("ab", "cd")) → {"a": "c", "b": "d"} Common uses: • Mapping parallel lists into a dictionary • Creating lookups from column headers and values

Key Distinctions:
• This question’s focus is best captured by: dict(zip(keys, values)) is an idiomatic way to create a dictionary from two sequences.
• The contrast that matters for correctness is summarized by: Key concepts: • "abc" → 'a', 'b', 'c' (keys) • range(3) → 0, 1, 2 (values) • zip pairs them: ('a',0), ('b',1), ('c',2) • dict() interprets each tuple as (key, value) How it works: 1.

How It Works:
• Python follows the rule implied by: dict(zip(keys, values)) is an idiomatic way to create a dictionary from two sequences.
• The outcome you observe follows from: Creates: {"a": 0, "b": 1, "c": 2} Examples: • dict(zip(["x", "y"], [10, 20])) → {"x": 10, "y": 20} • dict(zip("ab", "cd")) → {"a": "c", "b": "d"} Common uses: • Mapping parallel lists into a dictionary • Creating lookups from column headers and values

Step-by-Step Execution:
1. Start from the construct described in: dict(zip(keys, values)) is an idiomatic way to create a dictionary from two sequences.
2. Resolve the subparts implied by: Key concepts: • "abc" → 'a', 'b', 'c' (keys) • range(3) → 0, 1, 2 (values) • zip pairs them: ('a',0), ('b',1), ('c',2) • dict() interprets each tuple as (key, value) How it works: 1.
3. Apply the core semantics highlighted in: zip("abc", range(3)) → ('a',0), ('b',1), ('c',2) 2.
4. Confirm the final result aligns with: Creates: {"a": 0, "b": 1, "c": 2} Examples: • dict(zip(["x", "y"], [10, 20])) → {"x": 10, "y": 20} • dict(zip("ab", "cd")) → {"a": "c", "b": "d"} Common uses: • Mapping parallel lists into a dictionary • Creating lookups from column headers and values

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • "abc" → 'a', 'b', 'c' (keys) • range(3) → 0, 1, 2 (values) • zip pairs them: ('a',0), ('b',1), ('c',2) • dict() interprets each tuple as (key, value) How it works: 1.
2. Apply the construct’s main rule next, matching: dict(zip(keys, values)) is an idiomatic way to create a dictionary from two sequences.
3. Produce any intermediate values that Creates: {"a": 0, "b": 1, "c": 2} Examples: • dict(zip(["x", "y"], [10, 20])) → {"x": 10, "y": 20} • dict(zip("ab", "cd")) → {"a": "c", "b": "d"} Common uses: • Mapping parallel lists into a dictionary • Creating lookups from column headers and values relies on
4. Finish by returning/assembling the final output named by: Creates: {"a": 0, "b": 1, "c": 2} Examples: • dict(zip(["x", "y"], [10, 20])) → {"x": 10, "y": 20} • dict(zip("ab", "cd")) → {"a": "c", "b": "d"} Common uses: • Mapping parallel lists into a dictionary • Creating lookups from column headers and values
5. Use the result only after the full construct has completed, per: dict(zip(keys, values)) is an idiomatic way to create a dictionary from two sequences.

Common Use Cases:
• Teaching this behavior using the mental model: dict(zip(keys, values)) is an idiomatic way to create a dictionary from two sequences.
• Debugging when the observed value should match the expectation in: Creates: {"a": 0, "b": 1, "c": 2} Examples: • dict(zip(["x", "y"], [10, 20])) → {"x": 10, "y": 20} • dict(zip("ab", "cd")) → {"a": "c", "b": "d"} Common uses: • Mapping parallel lists into a dictionary • Creating lookups from column headers and values

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • "abc" → 'a', 'b', 'c' (keys) • range(3) → 0, 1, 2 (values) • zip pairs them: ('a',0), ('b',1), ('c',2) • dict() interprets each tuple as (key, value) How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: zip("abc", range(3)) → ('a',0), ('b',1), ('c',2) 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Creates: {"a": 0, "b": 1, "c": 2} Examples: • dict(zip(["x", "y"], [10, 20])) → {"x": 10, "y": 20} • dict(zip("ab", "cd")) → {"a": "c", "b": "d"} Common uses: • Mapping parallel lists into a dictionary • Creating lookups from column headers and values.
• When performance matters, prefer the simplest pattern that still implements: dict(zip(keys, values)) is an idiomatic way to create a dictionary from two sequences..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: dict(zip(keys, values)) is an idiomatic way to create a dictionary from two sequences..

Notes:
• For maintainable code, make the intent behind: Key concepts: • "abc" → 'a', 'b', 'c' (keys) • range(3) → 0, 1, 2 (values) • zip pairs them: ('a',0), ('b',1), ('c',2) • dict() interprets each tuple as (key, value) How it works: 1. explicit (and test it with inputs like those in this prompt).`
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
• Result: [(1, 2, 3), (4, 5, 6)] This is matrix transposition: • Input rows: (1,4), (2,5), (3,6) • Output rows: (1,2,3), (4,5,6) Common uses: • Transposing data (rows ↔ columns) • Separating paired data: names, scores = zip(*student_data)

Key Distinctions:
• This question’s focus is best captured by: zip(*iterable) is the standard Python idiom for transposing (unzipping) a list of tuples.
• The contrast that matters for correctness is summarized by: The * operator unpacks the list into separate arguments to zip.

How It Works:
• Python follows the rule implied by: zip(*iterable) is the standard Python idiom for transposing (unzipping) a list of tuples.
• The outcome you observe follows from: Result: [(1, 2, 3), (4, 5, 6)] This is matrix transposition: • Input rows: (1,4), (2,5), (3,6) • Output rows: (1,2,3), (4,5,6) Common uses: • Transposing data (rows ↔ columns) • Separating paired data: names, scores = zip(*student_data)

Step-by-Step Execution:
1. Start from the construct described in: zip(*iterable) is the standard Python idiom for transposing (unzipping) a list of tuples.
2. Resolve the subparts implied by: The * operator unpacks the list into separate arguments to zip.
3. Apply the core semantics highlighted in: Key concepts: • * unpacks the list: zip((1,4), (2,5), (3,6)) • zip takes first elements: (1, 2, 3) • zip takes second elements: (4, 5, 6) • Result: [(1, 2, 3), (4, 5, 6)] How it works: 1.
4. Confirm the final result aligns with: Result: [(1, 2, 3), (4, 5, 6)] This is matrix transposition: • Input rows: (1,4), (2,5), (3,6) • Output rows: (1,2,3), (4,5,6) Common uses: • Transposing data (rows ↔ columns) • Separating paired data: names, scores = zip(*student_data)

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The * operator unpacks the list into separate arguments to zip.
2. Apply the construct’s main rule next, matching: zip(*iterable) is the standard Python idiom for transposing (unzipping) a list of tuples.
3. Produce any intermediate values that Result: [(1, 2, 3), (4, 5, 6)] This is matrix transposition: • Input rows: (1,4), (2,5), (3,6) • Output rows: (1,2,3), (4,5,6) Common uses: • Transposing data (rows ↔ columns) • Separating paired data: names, scores = zip(*student_data) relies on
4. Finish by returning/assembling the final output named by: Result: [(1, 2, 3), (4, 5, 6)] This is matrix transposition: • Input rows: (1,4), (2,5), (3,6) • Output rows: (1,2,3), (4,5,6) Common uses: • Transposing data (rows ↔ columns) • Separating paired data: names, scores = zip(*student_data)
5. Use the result only after the full construct has completed, per: zip(*iterable) is the standard Python idiom for transposing (unzipping) a list of tuples.

Common Use Cases:
• Teaching this behavior using the mental model: zip(*iterable) is the standard Python idiom for transposing (unzipping) a list of tuples.
• Debugging when the observed value should match the expectation in: Result: [(1, 2, 3), (4, 5, 6)] This is matrix transposition: • Input rows: (1,4), (2,5), (3,6) • Output rows: (1,2,3), (4,5,6) Common uses: • Transposing data (rows ↔ columns) • Separating paired data: names, scores = zip(*student_data)

Edge Cases:
• If inputs vary from the situation described in: The * operator unpacks the list into separate arguments to zip., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • * unpacks the list: zip((1,4), (2,5), (3,6)) • zip takes first elements: (1, 2, 3) • zip takes second elements: (4, 5, 6) • Result: [(1, 2, 3), (4, 5, 6)] How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Result: [(1, 2, 3), (4, 5, 6)] This is matrix transposition: • Input rows: (1,4), (2,5), (3,6) • Output rows: (1,2,3), (4,5,6) Common uses: • Transposing data (rows ↔ columns) • Separating paired data: names, scores = zip(*student_data).
• When performance matters, prefer the simplest pattern that still implements: zip(*iterable) is the standard Python idiom for transposing (unzipping) a list of tuples..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: zip(*iterable) is the standard Python idiom for transposing (unzipping) a list of tuples..

Notes:
• For maintainable code, make the intent behind: The * operator unpacks the list into separate arguments to zip. explicit (and test it with inputs like those in this prompt).`
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
• List comprehension collects results: [11, 22, 33] Examples: • [a * b for a, b in zip([2, 3], [4, 5])] → [8, 15] • [a - b for a, b in zip([10, 20], [1, 2])] → [9, 18] Common uses: • Element-wise arithmetic on parallel lists • Combining data from multiple sources

Key Distinctions:
• This question’s focus is best captured by: Combining zip with a list comprehension lets you perform element-wise operations on parallel sequences.
• The contrast that matters for correctness is summarized by: Key concepts: • zip([1,2,3], [10,20,30]) → (1,10), (2,20), (3,30) • a + b for each pair: 1+10=11, 2+20=22, 3+30=33 • Result: [11, 22, 33] How it works: 1.

How It Works:
• Python follows the rule implied by: Combining zip with a list comprehension lets you perform element-wise operations on parallel sequences.
• The outcome you observe follows from: List comprehension collects results: [11, 22, 33] Examples: • [a * b for a, b in zip([2, 3], [4, 5])] → [8, 15] • [a - b for a, b in zip([10, 20], [1, 2])] → [9, 18] Common uses: • Element-wise arithmetic on parallel lists • Combining data from multiple sources

Step-by-Step Execution:
1. Start from the construct described in: Combining zip with a list comprehension lets you perform element-wise operations on parallel sequences.
2. Resolve the subparts implied by: Key concepts: • zip([1,2,3], [10,20,30]) → (1,10), (2,20), (3,30) • a + b for each pair: 1+10=11, 2+20=22, 3+30=33 • Result: [11, 22, 33] How it works: 1.
3. Apply the core semantics highlighted in: zip creates pairs: (1,10), (2,20), (3,30) 2.
4. Confirm the final result aligns with: List comprehension collects results: [11, 22, 33] Examples: • [a * b for a, b in zip([2, 3], [4, 5])] → [8, 15] • [a - b for a, b in zip([10, 20], [1, 2])] → [9, 18] Common uses: • Element-wise arithmetic on parallel lists • Combining data from multiple sources

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • zip([1,2,3], [10,20,30]) → (1,10), (2,20), (3,30) • a + b for each pair: 1+10=11, 2+20=22, 3+30=33 • Result: [11, 22, 33] How it works: 1.
2. Apply the construct’s main rule next, matching: Combining zip with a list comprehension lets you perform element-wise operations on parallel sequences.
3. Produce any intermediate values that List comprehension collects results: [11, 22, 33] Examples: • [a * b for a, b in zip([2, 3], [4, 5])] → [8, 15] • [a - b for a, b in zip([10, 20], [1, 2])] → [9, 18] Common uses: • Element-wise arithmetic on parallel lists • Combining data from multiple sources relies on
4. Finish by returning/assembling the final output named by: List comprehension collects results: [11, 22, 33] Examples: • [a * b for a, b in zip([2, 3], [4, 5])] → [8, 15] • [a - b for a, b in zip([10, 20], [1, 2])] → [9, 18] Common uses: • Element-wise arithmetic on parallel lists • Combining data from multiple sources
5. Use the result only after the full construct has completed, per: Combining zip with a list comprehension lets you perform element-wise operations on parallel sequences.

Common Use Cases:
• Teaching this behavior using the mental model: Combining zip with a list comprehension lets you perform element-wise operations on parallel sequences.
• Debugging when the observed value should match the expectation in: List comprehension collects results: [11, 22, 33] Examples: • [a * b for a, b in zip([2, 3], [4, 5])] → [8, 15] • [a - b for a, b in zip([10, 20], [1, 2])] → [9, 18] Common uses: • Element-wise arithmetic on parallel lists • Combining data from multiple sources

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • zip([1,2,3], [10,20,30]) → (1,10), (2,20), (3,30) • a + b for each pair: 1+10=11, 2+20=22, 3+30=33 • Result: [11, 22, 33] How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: zip creates pairs: (1,10), (2,20), (3,30) 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: List comprehension collects results: [11, 22, 33] Examples: • [a * b for a, b in zip([2, 3], [4, 5])] → [8, 15] • [a - b for a, b in zip([10, 20], [1, 2])] → [9, 18] Common uses: • Element-wise arithmetic on parallel lists • Combining data from multiple sources.
• When performance matters, prefer the simplest pattern that still implements: Combining zip with a list comprehension lets you perform element-wise operations on parallel sequences..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Combining zip with a list comprehension lets you perform element-wise operations on parallel sequences..

Notes:
• For maintainable code, make the intent behind: Key concepts: • zip([1,2,3], [10,20,30]) → (1,10), (2,20), (3,30) • a + b for each pair: 1+10=11, 2+20=22, 3+30=33 • Result: [11, 22, 33] How it works: 1. explicit (and test it with inputs like those in this prompt).`
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
• list() collects results: [2, 5, 3] Examples: • list(map(str, [1, 2, 3])) → ["1", "2", "3"] • list(map(int, ["1", "2"])) → [1, 2] • list(map(abs, [-1, -2, 3])) → [1, 2, 3] List comprehension equivalent: • [len(s) for s in ["hi", "hello", "hey"]] → [2, 5, 3]

Key Distinctions:
• This question’s focus is best captured by: map() applies a function to every element of an iterable and returns an iterator of the results.
• The contrast that matters for correctness is summarized by: Key concepts: • map(function, iterable) applies function to each element • map(len, ["hi", "hello", "hey"]) → len("hi"), len("hello"), len("hey") • Results: 2, 5, 3 • map returns an iterator — use list() to see all results How it works: 1.

How It Works:
• Python follows the rule implied by: map() applies a function to every element of an iterable and returns an iterator of the results.
• The outcome you observe follows from: list() collects results: [2, 5, 3] Examples: • list(map(str, [1, 2, 3])) → ["1", "2", "3"] • list(map(int, ["1", "2"])) → [1, 2] • list(map(abs, [-1, -2, 3])) → [1, 2, 3] List comprehension equivalent: • [len(s) for s in ["hi", "hello", "hey"]] → [2, 5, 3]

Step-by-Step Execution:
1. Start from the construct described in: map() applies a function to every element of an iterable and returns an iterator of the results.
2. Resolve the subparts implied by: Key concepts: • map(function, iterable) applies function to each element • map(len, ["hi", "hello", "hey"]) → len("hi"), len("hello"), len("hey") • Results: 2, 5, 3 • map returns an iterator — use list() to see all results How it works: 1.
3. Apply the core semantics highlighted in: Apply len("hi") → 2 2.
4. Confirm the final result aligns with: list() collects results: [2, 5, 3] Examples: • list(map(str, [1, 2, 3])) → ["1", "2", "3"] • list(map(int, ["1", "2"])) → [1, 2] • list(map(abs, [-1, -2, 3])) → [1, 2, 3] List comprehension equivalent: • [len(s) for s in ["hi", "hello", "hey"]] → [2, 5, 3]

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • map(function, iterable) applies function to each element • map(len, ["hi", "hello", "hey"]) → len("hi"), len("hello"), len("hey") • Results: 2, 5, 3 • map returns an iterator — use list() to see all results How it works: 1.
2. Apply the construct’s main rule next, matching: map() applies a function to every element of an iterable and returns an iterator of the results.
3. Produce any intermediate values that list() collects results: [2, 5, 3] Examples: • list(map(str, [1, 2, 3])) → ["1", "2", "3"] • list(map(int, ["1", "2"])) → [1, 2] • list(map(abs, [-1, -2, 3])) → [1, 2, 3] List comprehension equivalent: • [len(s) for s in ["hi", "hello", "hey"]] → [2, 5, 3] relies on
4. Finish by returning/assembling the final output named by: list() collects results: [2, 5, 3] Examples: • list(map(str, [1, 2, 3])) → ["1", "2", "3"] • list(map(int, ["1", "2"])) → [1, 2] • list(map(abs, [-1, -2, 3])) → [1, 2, 3] List comprehension equivalent: • [len(s) for s in ["hi", "hello", "hey"]] → [2, 5, 3]
5. Use the result only after the full construct has completed, per: map() applies a function to every element of an iterable and returns an iterator of the results.

Common Use Cases:
• Teaching this behavior using the mental model: map() applies a function to every element of an iterable and returns an iterator of the results.
• Debugging when the observed value should match the expectation in: list() collects results: [2, 5, 3] Examples: • list(map(str, [1, 2, 3])) → ["1", "2", "3"] • list(map(int, ["1", "2"])) → [1, 2] • list(map(abs, [-1, -2, 3])) → [1, 2, 3] List comprehension equivalent: • [len(s) for s in ["hi", "hello", "hey"]] → [2, 5, 3]

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • map(function, iterable) applies function to each element • map(len, ["hi", "hello", "hey"]) → len("hi"), len("hello"), len("hey") • Results: 2, 5, 3 • map returns an iterator — use list() to see all results How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: Apply len("hi") → 2 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: list() collects results: [2, 5, 3] Examples: • list(map(str, [1, 2, 3])) → ["1", "2", "3"] • list(map(int, ["1", "2"])) → [1, 2] • list(map(abs, [-1, -2, 3])) → [1, 2, 3] List comprehension equivalent: • [len(s) for s in ["hi", "hello", "hey"]] → [2, 5, 3].
• When performance matters, prefer the simplest pattern that still implements: map() applies a function to every element of an iterable and returns an iterator of the results..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: map() applies a function to every element of an iterable and returns an iterator of the results..

Notes:
• For maintainable code, make the intent behind: Key concepts: • map(function, iterable) applies function to each element • map(len, ["hi", "hello", "hey"]) → len("hi"), len("hello"), len("hey") • Results: 2, 5, 3 • map returns an iterator — use list() to see all results How it works: 1. explicit (and test it with inputs like those in this prompt).`
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
• Result: [1, "a", True] Examples: • list(filter(None, [0, False, 1, 2])) → [1, 2] • list(filter(None, ["", "hello", None])) → ["hello"] Note: filter(None, ...) is equivalent to [x for x in iterable if x].

Key Distinctions:
• This question’s focus is best captured by: When filter() is called with None as the function, it removes all falsy elements from the iterable.
• The contrast that matters for correctness is summarized by: Key concepts: • filter(None, iterable) keeps only truthy values • Falsy values in Python: 0, "", None, False, [], {}, set(), 0.0 • Truthy: everything else (non-zero numbers, non-empty strings, True) How it works: 1.

How It Works:
• Python follows the rule implied by: When filter() is called with None as the function, it removes all falsy elements from the iterable.
• The outcome you observe follows from: Result: [1, "a", True] Examples: • list(filter(None, [0, False, 1, 2])) → [1, 2] • list(filter(None, ["", "hello", None])) → ["hello"] Note: filter(None, ...) is equivalent to [x for x in iterable if x].

Step-by-Step Execution:
1. Start from the construct described in: When filter() is called with None as the function, it removes all falsy elements from the iterable.
2. Resolve the subparts implied by: Key concepts: • filter(None, iterable) keeps only truthy values • Falsy values in Python: 0, "", None, False, [], {}, set(), 0.0 • Truthy: everything else (non-zero numbers, non-empty strings, True) How it works: 1.
3. Apply the core semantics highlighted in: 0 → falsy → removed 2.
4. Confirm the final result aligns with: Result: [1, "a", True] Examples: • list(filter(None, [0, False, 1, 2])) → [1, 2] • list(filter(None, ["", "hello", None])) → ["hello"] Note: filter(None, ...) is equivalent to [x for x in iterable if x].

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • filter(None, iterable) keeps only truthy values • Falsy values in Python: 0, "", None, False, [], {}, set(), 0.0 • Truthy: everything else (non-zero numbers, non-empty strings, True) How it works: 1.
2. Apply the construct’s main rule next, matching: When filter() is called with None as the function, it removes all falsy elements from the iterable.
3. Produce any intermediate values that Result: [1, "a", True] Examples: • list(filter(None, [0, False, 1, 2])) → [1, 2] • list(filter(None, ["", "hello", None])) → ["hello"] Note: filter(None, ...) is equivalent to [x for x in iterable if x]. relies on
4. Finish by returning/assembling the final output named by: Result: [1, "a", True] Examples: • list(filter(None, [0, False, 1, 2])) → [1, 2] • list(filter(None, ["", "hello", None])) → ["hello"] Note: filter(None, ...) is equivalent to [x for x in iterable if x].
5. Use the result only after the full construct has completed, per: When filter() is called with None as the function, it removes all falsy elements from the iterable.

Common Use Cases:
• Teaching this behavior using the mental model: When filter() is called with None as the function, it removes all falsy elements from the iterable.
• Debugging when the observed value should match the expectation in: Result: [1, "a", True] Examples: • list(filter(None, [0, False, 1, 2])) → [1, 2] • list(filter(None, ["", "hello", None])) → ["hello"] Note: filter(None, ...) is equivalent to [x for x in iterable if x].

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • filter(None, iterable) keeps only truthy values • Falsy values in Python: 0, "", None, False, [], {}, set(), 0.0 • Truthy: everything else (non-zero numbers, non-empty strings, True) How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: 0 → falsy → removed 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Result: [1, "a", True] Examples: • list(filter(None, [0, False, 1, 2])) → [1, 2] • list(filter(None, ["", "hello", None])) → ["hello"] Note: filter(None, ...) is equivalent to [x for x in iterable if x]..
• When performance matters, prefer the simplest pattern that still implements: When filter() is called with None as the function, it removes all falsy elements from the iterable..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: When filter() is called with None as the function, it removes all falsy elements from the iterable..

Notes:
• For maintainable code, make the intent behind: Key concepts: • filter(None, iterable) keeps only truthy values • Falsy values in Python: 0, "", None, False, [], {}, set(), 0.0 • Truthy: everything else (non-zero numbers, non-empty strings, True) How it works: 1. explicit (and test it with inputs like those in this prompt).`
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
• Result: [4, 6] Examples: • list(map(lambda x, y: x * y, [2, 3], [4, 5])) → [8, 15] • list(map(pow, [2, 3], [3, 2])) → [8, 9] Like zip, map with multiple iterables stops at the shortest: • list(map(lambda x, y: x + y, [1], [2, 3])) → [3] List comprehension equivalent: • [x + y for x, y in zip([1, 2], [3, 4])]

Key Distinctions:
• This question’s focus is best captured by: map() can accept multiple iterables.
• The contrast that matters for correctness is summarized by: The function must take as many arguments as there are iterables.

How It Works:
• Python follows the rule implied by: map() can accept multiple iterables.
• The outcome you observe follows from: Result: [4, 6] Examples: • list(map(lambda x, y: x * y, [2, 3], [4, 5])) → [8, 15] • list(map(pow, [2, 3], [3, 2])) → [8, 9] Like zip, map with multiple iterables stops at the shortest: • list(map(lambda x, y: x + y, [1], [2, 3])) → [3] List comprehension equivalent: • [x + y for x, y in zip([1, 2], [3, 4])]

Step-by-Step Execution:
1. Start from the construct described in: map() can accept multiple iterables.
2. Resolve the subparts implied by: The function must take as many arguments as there are iterables.
3. Apply the core semantics highlighted in: Key concepts: • map(func, iter1, iter2) passes one element from each iterable • lambda x, y: x + y takes two arguments • Pairs: (1, 3) and (2, 4) • Results: 1+3=4, 2+4=6 How it works: 1.
4. Confirm the final result aligns with: Result: [4, 6] Examples: • list(map(lambda x, y: x * y, [2, 3], [4, 5])) → [8, 15] • list(map(pow, [2, 3], [3, 2])) → [8, 9] Like zip, map with multiple iterables stops at the shortest: • list(map(lambda x, y: x + y, [1], [2, 3])) → [3] List comprehension equivalent: • [x + y for x, y in zip([1, 2], [3, 4])]

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The function must take as many arguments as there are iterables.
2. Apply the construct’s main rule next, matching: map() can accept multiple iterables.
3. Produce any intermediate values that Result: [4, 6] Examples: • list(map(lambda x, y: x * y, [2, 3], [4, 5])) → [8, 15] • list(map(pow, [2, 3], [3, 2])) → [8, 9] Like zip, map with multiple iterables stops at the shortest: • list(map(lambda x, y: x + y, [1], [2, 3])) → [3] List comprehension equivalent: • [x + y for x, y in zip([1, 2], [3, 4])] relies on
4. Finish by returning/assembling the final output named by: Result: [4, 6] Examples: • list(map(lambda x, y: x * y, [2, 3], [4, 5])) → [8, 15] • list(map(pow, [2, 3], [3, 2])) → [8, 9] Like zip, map with multiple iterables stops at the shortest: • list(map(lambda x, y: x + y, [1], [2, 3])) → [3] List comprehension equivalent: • [x + y for x, y in zip([1, 2], [3, 4])]
5. Use the result only after the full construct has completed, per: map() can accept multiple iterables.

Common Use Cases:
• Teaching this behavior using the mental model: map() can accept multiple iterables.
• Debugging when the observed value should match the expectation in: Result: [4, 6] Examples: • list(map(lambda x, y: x * y, [2, 3], [4, 5])) → [8, 15] • list(map(pow, [2, 3], [3, 2])) → [8, 9] Like zip, map with multiple iterables stops at the shortest: • list(map(lambda x, y: x + y, [1], [2, 3])) → [3] List comprehension equivalent: • [x + y for x, y in zip([1, 2], [3, 4])]

Edge Cases:
• If inputs vary from the situation described in: The function must take as many arguments as there are iterables., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • map(func, iter1, iter2) passes one element from each iterable • lambda x, y: x + y takes two arguments • Pairs: (1, 3) and (2, 4) • Results: 1+3=4, 2+4=6 How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Result: [4, 6] Examples: • list(map(lambda x, y: x * y, [2, 3], [4, 5])) → [8, 15] • list(map(pow, [2, 3], [3, 2])) → [8, 9] Like zip, map with multiple iterables stops at the shortest: • list(map(lambda x, y: x + y, [1], [2, 3])) → [3] List comprehension equivalent: • [x + y for x, y in zip([1, 2], [3, 4])].
• When performance matters, prefer the simplest pattern that still implements: map() can accept multiple iterables..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: map() can accept multiple iterables..

Notes:
• For maintainable code, make the intent behind: The function must take as many arguments as there are iterables. explicit (and test it with inputs like those in this prompt).`
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
• Finds True → immediately returns True (short-circuits) Examples: • any(map(lambda x: x < 0, [1, 2, 3])) → False • all(map(lambda x: x > 0, [1, 2, 3])) → True Generator equivalent (more Pythonic): • any(x > 3 for x in [1, 2, 3, 4]) → True Note: any() short-circuits — it stops checking as soon as it finds a truthy value.

Key Distinctions:
• This question’s focus is best captured by: Combining map() with any() checks whether at least one element satisfies a condition.
• The contrast that matters for correctness is summarized by: Key concepts: • map(lambda x: x > 3, [1, 2, 3, 4]) → False, False, False, True • any() returns True if at least one value is truthy • 4 > 3 is True → any() returns True How it works: 1.

How It Works:
• Python follows the rule implied by: Combining map() with any() checks whether at least one element satisfies a condition.
• The outcome you observe follows from: Finds True → immediately returns True (short-circuits) Examples: • any(map(lambda x: x < 0, [1, 2, 3])) → False • all(map(lambda x: x > 0, [1, 2, 3])) → True Generator equivalent (more Pythonic): • any(x > 3 for x in [1, 2, 3, 4]) → True Note: any() short-circuits — it stops checking as soon as it finds a truthy value.

Step-by-Step Execution:
1. Start from the construct described in: Combining map() with any() checks whether at least one element satisfies a condition.
2. Resolve the subparts implied by: Key concepts: • map(lambda x: x > 3, [1, 2, 3, 4]) → False, False, False, True • any() returns True if at least one value is truthy • 4 > 3 is True → any() returns True How it works: 1.
3. Apply the core semantics highlighted in: map applies x > 3: 1>3=False, 2>3=False, 3>3=False, 4>3=True 2.
4. Confirm the final result aligns with: Finds True → immediately returns True (short-circuits) Examples: • any(map(lambda x: x < 0, [1, 2, 3])) → False • all(map(lambda x: x > 0, [1, 2, 3])) → True Generator equivalent (more Pythonic): • any(x > 3 for x in [1, 2, 3, 4]) → True Note: any() short-circuits — it stops checking as soon as it finds a truthy value.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • map(lambda x: x > 3, [1, 2, 3, 4]) → False, False, False, True • any() returns True if at least one value is truthy • 4 > 3 is True → any() returns True How it works: 1.
2. Apply the construct’s main rule next, matching: Combining map() with any() checks whether at least one element satisfies a condition.
3. Produce any intermediate values that Finds True → immediately returns True (short-circuits) Examples: • any(map(lambda x: x < 0, [1, 2, 3])) → False • all(map(lambda x: x > 0, [1, 2, 3])) → True Generator equivalent (more Pythonic): • any(x > 3 for x in [1, 2, 3, 4]) → True Note: any() short-circuits — it stops checking as soon as it finds a truthy value. relies on
4. Finish by returning/assembling the final output named by: Finds True → immediately returns True (short-circuits) Examples: • any(map(lambda x: x < 0, [1, 2, 3])) → False • all(map(lambda x: x > 0, [1, 2, 3])) → True Generator equivalent (more Pythonic): • any(x > 3 for x in [1, 2, 3, 4]) → True Note: any() short-circuits — it stops checking as soon as it finds a truthy value.
5. Use the result only after the full construct has completed, per: Combining map() with any() checks whether at least one element satisfies a condition.

Common Use Cases:
• Teaching this behavior using the mental model: Combining map() with any() checks whether at least one element satisfies a condition.
• Debugging when the observed value should match the expectation in: Finds True → immediately returns True (short-circuits) Examples: • any(map(lambda x: x < 0, [1, 2, 3])) → False • all(map(lambda x: x > 0, [1, 2, 3])) → True Generator equivalent (more Pythonic): • any(x > 3 for x in [1, 2, 3, 4]) → True Note: any() short-circuits — it stops checking as soon as it finds a truthy value.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • map(lambda x: x > 3, [1, 2, 3, 4]) → False, False, False, True • any() returns True if at least one value is truthy • 4 > 3 is True → any() returns True How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: map applies x > 3: 1>3=False, 2>3=False, 3>3=False, 4>3=True 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Finds True → immediately returns True (short-circuits) Examples: • any(map(lambda x: x < 0, [1, 2, 3])) → False • all(map(lambda x: x > 0, [1, 2, 3])) → True Generator equivalent (more Pythonic): • any(x > 3 for x in [1, 2, 3, 4]) → True Note: any() short-circuits — it stops checking as soon as it finds a truthy value..
• When performance matters, prefer the simplest pattern that still implements: Combining map() with any() checks whether at least one element satisfies a condition..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Combining map() with any() checks whether at least one element satisfies a condition..

Notes:
• For maintainable code, make the intent behind: Key concepts: • map(lambda x: x > 3, [1, 2, 3, 4]) → False, False, False, True • any() returns True if at least one value is truthy • 4 > 3 is True → any() returns True How it works: 1. explicit (and test it with inputs like those in this prompt).`
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
• sum() → 1 + 2 + 3 + 4 + 5 = 15 Examples: • sum(map(int, "999")) → 27 • sum(map(int, "100")) → 1 • sum(map(int, str(12345))) → 15 (convert number to string first) Common uses: • Digital root calculations • Digit sum validation (credit card checksums, etc.) • Mathematical puzzles involving digit manipulation Generator equivalent: • sum(int(c) for c in "12345") → 15

Key Distinctions:
• This question’s focus is best captured by: This is an idiomatic Python pattern for summing the digits of a number represented as a string.
• The contrast that matters for correctness is summarized by: Key concepts: • "12345" is iterable — yields '1', '2', '3', '4', '5' • map(int, "12345") converts each character to an integer • sum() adds them: 1 + 2 + 3 + 4 + 5 = 15 How it works: 1.

How It Works:
• Python follows the rule implied by: This is an idiomatic Python pattern for summing the digits of a number represented as a string.
• The outcome you observe follows from: sum() → 1 + 2 + 3 + 4 + 5 = 15 Examples: • sum(map(int, "999")) → 27 • sum(map(int, "100")) → 1 • sum(map(int, str(12345))) → 15 (convert number to string first) Common uses: • Digital root calculations • Digit sum validation (credit card checksums, etc.) • Mathematical puzzles involving digit manipulation Generator equivalent: • sum(int(c) for c in "12345") → 15

Step-by-Step Execution:
1. Start from the construct described in: This is an idiomatic Python pattern for summing the digits of a number represented as a string.
2. Resolve the subparts implied by: Key concepts: • "12345" is iterable — yields '1', '2', '3', '4', '5' • map(int, "12345") converts each character to an integer • sum() adds them: 1 + 2 + 3 + 4 + 5 = 15 How it works: 1.
3. Apply the core semantics highlighted in: "12345" → characters '1', '2', '3', '4', '5' 2.
4. Confirm the final result aligns with: sum() → 1 + 2 + 3 + 4 + 5 = 15 Examples: • sum(map(int, "999")) → 27 • sum(map(int, "100")) → 1 • sum(map(int, str(12345))) → 15 (convert number to string first) Common uses: • Digital root calculations • Digit sum validation (credit card checksums, etc.) • Mathematical puzzles involving digit manipulation Generator equivalent: • sum(int(c) for c in "12345") → 15

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • "12345" is iterable — yields '1', '2', '3', '4', '5' • map(int, "12345") converts each character to an integer • sum() adds them: 1 + 2 + 3 + 4 + 5 = 15 How it works: 1.
2. Apply the construct’s main rule next, matching: This is an idiomatic Python pattern for summing the digits of a number represented as a string.
3. Produce any intermediate values that sum() → 1 + 2 + 3 + 4 + 5 = 15 Examples: • sum(map(int, "999")) → 27 • sum(map(int, "100")) → 1 • sum(map(int, str(12345))) → 15 (convert number to string first) Common uses: • Digital root calculations • Digit sum validation (credit card checksums, etc.) • Mathematical puzzles involving digit manipulation Generator equivalent: • sum(int(c) for c in "12345") → 15 relies on
4. Finish by returning/assembling the final output named by: sum() → 1 + 2 + 3 + 4 + 5 = 15 Examples: • sum(map(int, "999")) → 27 • sum(map(int, "100")) → 1 • sum(map(int, str(12345))) → 15 (convert number to string first) Common uses: • Digital root calculations • Digit sum validation (credit card checksums, etc.) • Mathematical puzzles involving digit manipulation Generator equivalent: • sum(int(c) for c in "12345") → 15
5. Use the result only after the full construct has completed, per: This is an idiomatic Python pattern for summing the digits of a number represented as a string.

Common Use Cases:
• Teaching this behavior using the mental model: This is an idiomatic Python pattern for summing the digits of a number represented as a string.
• Debugging when the observed value should match the expectation in: sum() → 1 + 2 + 3 + 4 + 5 = 15 Examples: • sum(map(int, "999")) → 27 • sum(map(int, "100")) → 1 • sum(map(int, str(12345))) → 15 (convert number to string first) Common uses: • Digital root calculations • Digit sum validation (credit card checksums, etc.) • Mathematical puzzles involving digit manipulation Generator equivalent: • sum(int(c) for c in "12345") → 15

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • "12345" is iterable — yields '1', '2', '3', '4', '5' • map(int, "12345") converts each character to an integer • sum() adds them: 1 + 2 + 3 + 4 + 5 = 15 How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: "12345" → characters '1', '2', '3', '4', '5' 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: sum() → 1 + 2 + 3 + 4 + 5 = 15 Examples: • sum(map(int, "999")) → 27 • sum(map(int, "100")) → 1 • sum(map(int, str(12345))) → 15 (convert number to string first) Common uses: • Digital root calculations • Digit sum validation (credit card checksums, etc.) • Mathematical puzzles involving digit manipulation Generator equivalent: • sum(int(c) for c in "12345") → 15.
• When performance matters, prefer the simplest pattern that still implements: This is an idiomatic Python pattern for summing the digits of a number represented as a string..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This is an idiomatic Python pattern for summing the digits of a number represented as a string..

Notes:
• For maintainable code, make the intent behind: Key concepts: • "12345" is iterable — yields '1', '2', '3', '4', '5' • map(int, "12345") converts each character to an integer • sum() adds them: 1 + 2 + 3 + 4 + 5 = 15 How it works: 1. explicit (and test it with inputs like those in this prompt).`
  }),
];
