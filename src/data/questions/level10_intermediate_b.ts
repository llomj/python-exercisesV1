// --- LEVEL 10 INTERMEDIATE B: itertools deep, json advanced, os/pathlib, string module (49 TRULY UNIQUE QUESTIONS) ---
// Topics 50-98: Advanced itertools, JSON serialization, path manipulation, string constants & textwrap
export const level10IntermediateB = [
  // 50. chain — flatten multiple iterables
  (_i: number) => ({
    q: `from itertools import chain\nlist(chain([1,2],[3,4],[5]))\nWhat is the result?`,
    o: ["[1, 2, 3, 4, 5]", "[[1,2],[3,4],[5]]", "[1, 2, 3, 4]", "Error"],
    c: 0,
    e: "chain() concatenates multiple iterables into a single sequence, yielding each element one by one.",
    de: `itertools.chain takes multiple iterables and yields elements from each one in order, as if they were a single iterable. It does not create nested structures — it flattens one level of nesting.

Key concepts:
• chain(iter1, iter2, ...) yields elements from iter1, then iter2, etc.
• Each argument must be an iterable
• Elements are yielded lazily (one at a time)
• Only flattens one level — nested lists inside remain nested

How it works:
1. chain([1,2], [3,4], [5]) takes three lists
2. Yields 1, 2 from first list
3. Then 3, 4 from second list
4. Then 5 from third list
5. Result: [1, 2, 3, 4, 5]

Example:
from itertools import chain
list(chain("AB", "CD"))       # ['A', 'B', 'C', 'D']
list(chain([1], [2], [3,4]))  # [1, 2, 3, 4]
list(chain(range(3), range(3,6)))  # [0, 1, 2, 3, 4, 5]

Common uses:
• Combining multiple sequences without copying
• Flattening a known number of iterables
• Processing items from multiple sources as one stream

Key Concepts:
• Processing items from multiple sources as one stream

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
  // 51. chain.from_iterable — flatten an iterable of iterables
  (_i: number) => ({
    q: `from itertools import chain\nlist(chain.from_iterable([[1,2],[3,4]]))\nWhat is the result?`,
    o: ["[1, 2, 3, 4]", "[[1,2],[3,4]]", "[1, 2]", "Error"],
    c: 0,
    e: "chain.from_iterable() takes a single iterable of iterables and flattens them into one sequence.",
    de: `chain.from_iterable is an alternate constructor that accepts a single iterable whose elements are themselves iterables. This is useful when you have a list of lists (or any nested iterable) and want to flatten it one level.

Key concepts:
• chain.from_iterable(iterable_of_iterables) — takes ONE argument
• Unlike chain(*args) which takes multiple arguments
• Useful when the number of sub-iterables is unknown or dynamic
• Still only flattens one level

How it works:
1. chain.from_iterable([[1,2],[3,4]]) receives one list containing two sublists
2. Yields 1, 2 from [1,2]
3. Then yields 3, 4 from [3,4]
4. Result: [1, 2, 3, 4]

Example:
from itertools import chain
nested = [[1, 2], [3, 4], [5]]
list(chain.from_iterable(nested))  # [1, 2, 3, 4, 5]

# Equivalent to:
list(chain(*nested))  # same result but requires unpacking

Common uses:
• Flattening a list of lists
• Processing dynamically generated groups of items
• More memory-efficient than chain(*big_list) for large inputs

Key Concepts:
• More memory-efficient than chain(*big_list) for large inputs

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
  // 52. product — Cartesian product
  (_i: number) => ({
    q: `from itertools import product\nlist(product("AB", "12"))\nWhat is the result?`,
    o: [`[("A","1"),("A","2"),("B","1"),("B","2")]`, `[("A","B"),("1","2")]`, `["A1","A2","B1","B2"]`, "Error"],
    c: 0,
    e: "product() computes the Cartesian product, pairing every element of the first iterable with every element of the second.",
    de: `itertools.product computes the Cartesian product of input iterables, which is all possible ordered pairs (or tuples) combining one element from each input.

Key concepts:
• product(A, B) yields all (a, b) where a ∈ A and b ∈ B
• Equivalent to nested for-loops
• Result length = len(A) × len(B)
• Can take more than 2 iterables: product(A, B, C) yields 3-tuples

How it works:
1. product("AB", "12") pairs each character from "AB" with each from "12"
2. A with 1 → ("A","1")
3. A with 2 → ("A","2")
4. B with 1 → ("B","1")
5. B with 2 → ("B","2")
6. Result: [("A","1"), ("A","2"), ("B","1"), ("B","2")]

Example:
from itertools import product
list(product([0,1], repeat=2))
# [(0,0), (0,1), (1,0), (1,1)]

list(product("AB", "CD", "EF"))
# 8 tuples: ("A","C","E"), ("A","C","F"), ...

Common uses:
• Generating all combinations of parameters
• Replacing nested loops
• Testing all input combinations

Key Concepts:
• Testing all input combinations

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
  // 53. permutations — count of arrangements
  (_i: number) => ({
    q: `from itertools import permutations\nlen(list(permutations("ABC")))\nWhat is the result?`,
    o: ["6", "3", "9", "27"],
    c: 0,
    e: "permutations('ABC') generates all 3! = 6 arrangements of the 3 characters.",
    de: `itertools.permutations returns all possible orderings (arrangements) of the input elements. For n distinct elements, there are n! (n factorial) permutations.

Key concepts:
• permutations(iterable) generates all orderings of all elements
• permutations(iterable, r) generates r-length orderings
• For "ABC" with 3 characters: 3! = 3 × 2 × 1 = 6 permutations
• Each permutation is a tuple

How it works:
1. permutations("ABC") generates all orderings of A, B, C
2. ('A','B','C'), ('A','C','B'), ('B','A','C'), ('B','C','A'), ('C','A','B'), ('C','B','A')
3. That's 6 tuples total
4. len(...) returns 6

Example:
from itertools import permutations
list(permutations("AB"))
# [('A','B'), ('B','A')] — 2! = 2

list(permutations("ABC", 2))
# [('A','B'), ('A','C'), ('B','A'), ('B','C'), ('C','A'), ('C','B')] — 6

Common uses:
• Generating all possible orderings
• Solving combinatorial problems
• Brute-force search over arrangements

Key Concepts:
• Brute-force search over arrangements

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
  // 54. combinations — choosing subsets
  (_i: number) => ({
    q: `from itertools import combinations\nlist(combinations("ABC", 2))\nWhat is the result?`,
    o: [`[("A","B"),("A","C"),("B","C")]`, `[("A","B"),("B","A"),("A","C"),("C","A"),("B","C"),("C","B")]`, `["AB","AC","BC"]`, "Error"],
    c: 0,
    e: "combinations('ABC', 2) returns all 2-element subsets in sorted order, without repeated elements.",
    de: `itertools.combinations returns r-length subsequences of elements from the input iterable, in sorted order and without repeated elements. Unlike permutations, order doesn't matter: (A,B) is included but (B,A) is not.

Key concepts:
• combinations(iterable, r) — choose r elements from the iterable
• Order doesn't matter: (A,B) and (B,A) are the same combination
• Number of combinations: C(n, r) = n! / (r! × (n-r)!)
• C(3, 2) = 3! / (2! × 1!) = 3

How it works:
1. combinations("ABC", 2) picks all 2-element subsets
2. ("A","B"), ("A","C"), ("B","C")
3. Note: ("B","A") is NOT included (already covered by ("A","B"))
4. Elements maintain their original order from the input

Example:
from itertools import combinations
list(combinations(range(4), 2))
# [(0,1), (0,2), (0,3), (1,2), (1,3), (2,3)]

list(combinations("ABCD", 3))
# [('A','B','C'), ('A','B','D'), ('A','C','D'), ('B','C','D')]

Common uses:
• Choosing subsets from a collection
• Lottery number combinations
• Testing pairs of items

Key Concepts:
• Testing pairs of items

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
  // 55. combinations_with_replacement — subsets with repeats allowed
  (_i: number) => ({
    q: `from itertools import combinations_with_replacement\nlist(combinations_with_replacement("AB", 2))\nWhat is the result?`,
    o: [`[("A","A"),("A","B"),("B","B")]`, `[("A","B"),("B","A")]`, `[("A","A"),("A","B"),("B","A"),("B","B")]`, "Error"],
    c: 0,
    e: "combinations_with_replacement allows elements to repeat, so ('A','A') and ('B','B') are included.",
    de: `combinations_with_replacement returns r-length subsequences where individual elements may repeat. Unlike regular combinations, the same element can appear multiple times in a single combination.

Key concepts:
• combinations_with_replacement(iterable, r) — choose r elements, repeats allowed
• Still maintains sorted order (no (B,A) if (A,B) exists)
• More results than regular combinations
• For n elements choosing r: C(n+r-1, r)

How it works:
1. combinations_with_replacement("AB", 2) picks 2 elements, allowing repeats
2. ("A","A") — A chosen twice
3. ("A","B") — one of each
4. ("B","B") — B chosen twice
5. Result: [("A","A"), ("A","B"), ("B","B")]

Example:
from itertools import combinations_with_replacement
list(combinations_with_replacement("ABC", 2))
# [('A','A'), ('A','B'), ('A','C'), ('B','B'), ('B','C'), ('C','C')]

Common uses:
• Multisets and bags
• Dice rolls (where order doesn't matter)
• Sampling with replacement

Key Concepts:
• Sampling with replacement

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
  // 56. repeat — finite repetition
  (_i: number) => ({
    q: `from itertools import repeat\nlist(repeat("x", 3))\nWhat is the result?`,
    o: [`["x", "x", "x"]`, `"xxx"`, `[("x", 3)]`, "Error"],
    c: 0,
    e: "repeat('x', 3) yields 'x' three times, producing a list of three 'x' strings.",
    de: `itertools.repeat returns an iterator that yields the same object over and over. When a count is specified, it yields exactly that many times. Without a count, it repeats infinitely.

Key concepts:
• repeat(object, times) — yields object exactly 'times' times
• repeat(object) without times — repeats infinitely (use with islice or zip)
• Useful as a constant argument in map() or zip()
• Returns an iterator, not a list

How it works:
1. repeat("x", 3) creates an iterator
2. First next() call yields "x"
3. Second next() call yields "x"
4. Third next() call yields "x"
5. StopIteration after 3 yields
6. list(...) collects: ["x", "x", "x"]

Example:
from itertools import repeat
list(repeat(0, 5))      # [0, 0, 0, 0, 0]
list(repeat([1,2], 2))  # [[1,2], [1,2]] — same object repeated

Common uses:
• Providing constant values to map/zip
• Creating fixed-length sequences of the same value
• Default fill values in algorithms

Key Concepts:
• Default fill values in algorithms

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
  // 57. count — infinite counter with step
  (_i: number) => ({
    q: `from itertools import count\nc = count(10, 2)\n[next(c) for _ in range(4)]\nWhat is the result?`,
    o: ["[10, 12, 14, 16]", "[10, 11, 12, 13]", "[2, 4, 6, 8]", "Error"],
    c: 0,
    e: "count(10, 2) starts at 10 and increments by 2 each time: 10, 12, 14, 16.",
    de: `itertools.count creates an infinite counter that starts at a given value and increments by a step. Since it's infinite, you must use it with something that limits consumption (like islice, zip, or a manual break).

Key concepts:
• count(start=0, step=1) — default start is 0, default step is 1
• Produces an infinite sequence: start, start+step, start+2*step, ...
• Must be limited externally (islice, zip, list comprehension with range, etc.)
• Works with floats too: count(0.5, 0.1)

How it works:
1. count(10, 2) creates a counter starting at 10, step 2
2. First next(c) → 10
3. Second next(c) → 12
4. Third next(c) → 14
5. Fourth next(c) → 16
6. Result: [10, 12, 14, 16]

Example:
from itertools import count, islice
list(islice(count(1, 3), 5))  # [1, 4, 7, 10, 13]
list(islice(count(0, -1), 4)) # [0, -1, -2, -3]

Common uses:
• Generating sequential IDs
• Creating arithmetic progressions
• Pairing with zip for enumeration alternatives

Key Concepts:
• Pairing with zip for enumeration alternatives

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
  // 58. cycle — infinite cycling
  (_i: number) => ({
    q: `from itertools import cycle\nc = cycle("AB")\n[next(c) for _ in range(5)]\nWhat is the result?`,
    o: [`["A", "B", "A", "B", "A"]`, `["A", "B"]`, `["A", "A", "A", "A", "A"]`, "Error"],
    c: 0,
    e: "cycle('AB') repeats A, B, A, B, A, ... infinitely. Taking 5 elements gives ['A','B','A','B','A'].",
    de: `itertools.cycle takes an iterable and returns an infinite iterator that repeats the elements of the iterable endlessly. It first consumes the entire iterable (saving a copy), then yields elements from the saved copy in a loop.

Key concepts:
• cycle(iterable) — repeats the iterable's elements forever
• Saves a copy of the iterable internally
• Must be limited externally to avoid infinite loops
• Useful for round-robin scheduling

How it works:
1. cycle("AB") saves ['A', 'B'] internally
2. Yields: A, B, A, B, A, B, A, B, ... (forever)
3. [next(c) for _ in range(5)] takes exactly 5 elements
4. Result: ["A", "B", "A", "B", "A"]

Example:
from itertools import cycle, islice
colors = cycle(["red", "green", "blue"])
list(islice(colors, 7))
# ['red', 'green', 'blue', 'red', 'green', 'blue', 'red']

Common uses:
• Round-robin scheduling
• Alternating between states
• Repeating patterns in data processing

Key Concepts:
• Repeating patterns in data processing

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
  // 59. islice — slicing iterators
  (_i: number) => ({
    q: `from itertools import islice\nlist(islice(range(100), 0, 10, 3))\nWhat is the result?`,
    o: ["[0, 3, 6, 9]", "[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]", "[0, 10, 20, 30]", "Error"],
    c: 0,
    e: "islice(range(100), 0, 10, 3) takes elements at indices 0, 3, 6, 9 from the range.",
    de: `itertools.islice works like regular slicing but on any iterator, including infinite ones. It takes start, stop, and step arguments similar to slice notation.

Key concepts:
• islice(iterable, stop) — take first 'stop' elements
• islice(iterable, start, stop) — skip 'start', take until 'stop'
• islice(iterable, start, stop, step) — with step like [start:stop:step]
• Works on any iterator, not just sequences
• Consumes elements from the underlying iterator

How it works:
1. islice(range(100), 0, 10, 3) slices range(100)
2. Start at index 0, stop before 10, step of 3
3. Indices selected: 0, 3, 6, 9
4. Values at those indices: 0, 3, 6, 9
5. Result: [0, 3, 6, 9]

Example:
from itertools import islice, count
list(islice(count(), 5))           # [0, 1, 2, 3, 4]
list(islice("ABCDEFG", 2, 5))     # ['C', 'D', 'E']
list(islice(range(20), 0, 20, 4)) # [0, 4, 8, 12, 16]

Common uses:
• Taking first N items from an infinite iterator
• Skipping items at the start
• Sampling every Nth item from a stream

Key Concepts:
• Sampling every Nth item from a stream

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
  // 60. accumulate with custom function (multiplication)
  (_i: number) => ({
    q: `from itertools import accumulate\nlist(accumulate([1,2,3,4], lambda a,b: a*b))\nWhat is the result?`,
    o: ["[1, 2, 6, 24]", "[1, 3, 6, 10]", "[24, 24, 24, 24]", "Error"],
    c: 0,
    e: "accumulate with multiplication: 1, 1*2=2, 2*3=6, 6*4=24.",
    de: `itertools.accumulate returns running accumulated results. By default it sums, but you can pass a custom binary function. Here, the lambda multiplies, producing a running product.

Key concepts:
• accumulate(iterable) — running sum by default
• accumulate(iterable, func) — apply func to accumulate values
• First element is always yielded as-is
• Each subsequent element is func(accumulated, next_element)

How it works:
1. Start with first element: 1
2. func(1, 2) = 1 * 2 = 2
3. func(2, 3) = 2 * 3 = 6
4. func(6, 4) = 6 * 4 = 24
5. Result: [1, 2, 6, 24]

Example:
from itertools import accumulate
import operator
list(accumulate([1,2,3,4]))               # [1, 3, 6, 10] — running sum
list(accumulate([1,2,3,4], operator.mul))  # [1, 2, 6, 24] — running product
list(accumulate([3,1,4,1,5], max))         # [3, 3, 4, 4, 5] — running max

Common uses:
• Running totals and cumulative sums
• Running products
• Running max/min values

Key Concepts:
• Running max/min values

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
  // 61. takewhile — take while predicate is true
  (_i: number) => ({
    q: `from itertools import takewhile\nlist(takewhile(lambda x: x < 5, [1, 3, 5, 2, 4]))\nWhat is the result?`,
    o: ["[1, 3]", "[1, 3, 2, 4]", "[1, 3, 5]", "Error"],
    c: 0,
    e: "takewhile stops as soon as the predicate is False. At 5, x < 5 is False, so only [1, 3] are taken.",
    de: `itertools.takewhile yields elements from an iterable as long as the predicate function returns True. It stops immediately when the predicate returns False for the first time — even if later elements would satisfy the predicate.

Key concepts:
• takewhile(predicate, iterable) — yields while predicate is True
• Stops at the FIRST False — does NOT resume
• Elements after the first False are never seen
• Similar to a "break" condition in a loop

How it works:
1. Check 1: 1 < 5 → True → yield 1
2. Check 3: 3 < 5 → True → yield 3
3. Check 5: 5 < 5 → False → STOP immediately
4. 2 and 4 are never checked even though they're < 5
5. Result: [1, 3]

Example:
from itertools import takewhile
list(takewhile(str.islower, "abcDef"))  # ['a', 'b', 'c']
list(takewhile(lambda x: x > 0, [3, 2, 1, 0, -1, 5]))  # [3, 2, 1]

Common uses:
• Reading data until a sentinel value
• Processing sorted data up to a threshold
• Taking a prefix that satisfies a condition

Key Concepts:
• Taking a prefix that satisfies a condition

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
  // 62. dropwhile — skip while predicate is true
  (_i: number) => ({
    q: `from itertools import dropwhile\nlist(dropwhile(lambda x: x < 5, [1, 3, 5, 2, 4]))\nWhat is the result?`,
    o: ["[5, 2, 4]", "[2, 4]", "[5]", "Error"],
    c: 0,
    e: "dropwhile skips elements while the predicate is True. Once 5 fails x < 5, it yields 5 and all remaining: [5, 2, 4].",
    de: `itertools.dropwhile is the complement of takewhile. It drops elements from the iterable as long as the predicate is True, then yields ALL remaining elements regardless of whether they satisfy the predicate.

Key concepts:
• dropwhile(predicate, iterable) — drops while predicate is True
• Once predicate returns False, yields EVERYTHING remaining
• Does NOT filter — just skips a prefix
• Later elements are yielded even if they would satisfy the predicate

How it works:
1. Check 1: 1 < 5 → True → drop
2. Check 3: 3 < 5 → True → drop
3. Check 5: 5 < 5 → False → yield 5 and everything after
4. Yields: 5, 2, 4 (2 and 4 are yielded even though they're < 5)
5. Result: [5, 2, 4]

Example:
from itertools import dropwhile
list(dropwhile(str.islower, "abcDef"))  # ['D', 'e', 'f']
list(dropwhile(lambda x: x > 0, [3, 2, 0, -1, 5]))  # [0, -1, 5]

Common uses:
• Skipping headers in data files
• Ignoring leading whitespace or noise
• Finding the first element that doesn't match a condition

Key Concepts:
• Finding the first element that doesn't match a condition

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
  // 63. compress — selective filtering with selectors
  (_i: number) => ({
    q: `from itertools import compress\nlist(compress("ABCDE", [1, 0, 1, 0, 1]))\nWhat is the result?`,
    o: [`["A", "C", "E"]`, `["B", "D"]`, `["A", "B", "C", "D", "E"]`, "Error"],
    c: 0,
    e: "compress selects elements where the corresponding selector is truthy: A (1), C (1), E (1).",
    de: `itertools.compress filters elements from a data iterable using a corresponding selector iterable. An element is included only if its corresponding selector value is truthy.

Key concepts:
• compress(data, selectors) — pairs data with selectors
• Element is yielded if its selector is truthy (1, True, non-zero, etc.)
• Element is skipped if its selector is falsy (0, False, None, etc.)
• Stops when either data or selectors is exhausted

How it works:
1. Pair: A→1, B→0, C→1, D→0, E→1
2. A: selector 1 (truthy) → yield "A"
3. B: selector 0 (falsy) → skip
4. C: selector 1 (truthy) → yield "C"
5. D: selector 0 (falsy) → skip
6. E: selector 1 (truthy) → yield "E"
7. Result: ["A", "C", "E"]

Example:
from itertools import compress
data = range(10)
selectors = [1,0,0,1,0,1,0,0,1,0]
list(compress(data, selectors))  # [0, 3, 5, 8]

Common uses:
• Applying a boolean mask to data
• Selecting elements based on external criteria
• Filtering with precomputed conditions

Key Concepts:
• Filtering with precomputed conditions

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
  // 64. zip_longest — zip with fill value
  (_i: number) => ({
    q: `from itertools import zip_longest\nlist(zip_longest([1,2], [3,4,5], fillvalue=0))\nWhat is the result?`,
    o: ["[(1,3), (2,4), (0,5)]", "[(1,3), (2,4)]", "[(1,3), (2,4), (5,0)]", "Error"],
    c: 0,
    e: "zip_longest pads the shorter iterable with fillvalue=0, so the third pair is (0, 5).",
    de: `itertools.zip_longest works like zip but continues until the LONGEST iterable is exhausted, filling missing values with a specified fillvalue (default None).

Key concepts:
• zip_longest(*iterables, fillvalue=None) — zip to longest
• Regular zip stops at shortest iterable
• zip_longest fills missing values with fillvalue
• Default fillvalue is None

How it works:
1. [1,2] has 2 elements, [3,4,5] has 3 elements
2. Pair 1: (1, 3)
3. Pair 2: (2, 4)
4. [1,2] is exhausted, but [3,4,5] has one more element
5. Pair 3: (0, 5) — 0 is the fillvalue replacing the missing element
6. Result: [(1,3), (2,4), (0,5)]

Example:
from itertools import zip_longest
list(zip_longest("AB", "XYZ", fillvalue="-"))
# [('A','X'), ('B','Y'), ('-','Z')]

list(zip_longest([1], [2,3], [4,5,6]))
# [(1,2,4), (None,3,5), (None,None,6)]

Common uses:
• Aligning data of different lengths
• Parallel iteration where all elements matter
• Matrix operations with uneven rows

Key Concepts:
• Matrix operations with uneven rows

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
  // 65. starmap — map with unpacked arguments
  (_i: number) => ({
    q: `from itertools import starmap\nlist(starmap(pow, [(2,3), (3,2)]))\nWhat is the result?`,
    o: ["[8, 9]", "[6, 6]", "[9, 8]", "Error"],
    c: 0,
    e: "starmap unpacks each tuple as arguments: pow(2,3)=8, pow(3,2)=9.",
    de: `itertools.starmap is like map, but instead of passing each element as a single argument, it unpacks each element (which must be an iterable) as multiple arguments to the function.

Key concepts:
• starmap(function, iterable_of_iterables)
• Each element of the iterable is unpacked with * into the function
• Equivalent to: (func(*args) for args in iterable)
• Name comes from the * (star) used in unpacking

How it works:
1. starmap(pow, [(2,3), (3,2)])
2. First tuple (2,3) → pow(2, 3) = 2³ = 8
3. Second tuple (3,2) → pow(3, 2) = 3² = 9
4. Result: [8, 9]

Example:
from itertools import starmap
list(starmap(max, [(1,5,3), (2,8,4)]))  # [5, 8]
list(starmap(str.replace, [("hello", "l", "L"), ("world", "o", "0")]))
# ["heLLo", "w0rld"]

Common uses:
• Applying functions with multiple arguments to data
• Processing rows of a table/matrix
• Replacing loops that unpack tuples

Key Concepts:
• Replacing loops that unpack tuples

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
  // 66. json.dumps with indent — pretty-printing
  (_i: number) => ({
    q: `import json\njson.dumps({"a": 1}, indent=2)\nWhat does the indent parameter do?`,
    o: ["Pretty-prints with 2-space indentation", "Adds 2 spaces before the key", "Limits output to 2 lines", "Indents only nested objects"],
    c: 0,
    e: "The indent parameter pretty-prints the JSON output with the specified number of spaces for indentation.",
    de: `json.dumps converts a Python object to a JSON-formatted string. The indent parameter controls pretty-printing: when set, it adds newlines and indentation to make the output human-readable.

Key concepts:
• json.dumps(obj) — compact single-line output by default
• json.dumps(obj, indent=n) — pretty-printed with n spaces per level
• indent=None (default) — no pretty-printing
• indent=0 — newlines but no indentation

How it works:
1. json.dumps({"a": 1}, indent=2) produces:
{
  "a": 1
}
2. Each nesting level is indented by 2 additional spaces
3. Keys and values are on separate lines for readability

Example:
import json
data = {"name": "Alice", "scores": [90, 85]}
print(json.dumps(data, indent=4))
# {
#     "name": "Alice",
#     "scores": [
#         90,
#         85
#     ]
# }

Common uses:
• Writing human-readable JSON config files
• Debugging JSON data
• Logging structured data

Key Concepts:
• Logging structured data

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
  // 67. json.dumps with sort_keys
  (_i: number) => ({
    q: `import json\njson.dumps({"b": 2, "a": 1}, sort_keys=True)\nWhat is the result?`,
    o: [`'{"a": 1, "b": 2}'`, `'{"b": 2, "a": 1}'`, `'{"a":1,"b":2}'`, "Error"],
    c: 0,
    e: "sort_keys=True sorts dictionary keys alphabetically in the JSON output.",
    de: `The sort_keys parameter in json.dumps sorts the dictionary keys alphabetically in the output. This is useful for producing deterministic, reproducible JSON output regardless of insertion order.

Key concepts:
• sort_keys=True — keys appear in alphabetical order
• sort_keys=False (default) — keys appear in insertion order
• Only affects dictionary key ordering, not list element ordering
• Useful for comparing JSON outputs or version control

How it works:
1. Input dict: {"b": 2, "a": 1} (insertion order: b first)
2. sort_keys=True sorts keys: "a" before "b"
3. Output: '{"a": 1, "b": 2}'

Example:
import json
data = {"z": 1, "m": 2, "a": 3}
json.dumps(data, sort_keys=True)   # '{"a": 3, "m": 2, "z": 1}'
json.dumps(data, sort_keys=False)  # '{"z": 1, "m": 2, "a": 3}'

Common uses:
• Deterministic serialization for hashing or comparison
• Clean diffs in version control
• Canonical JSON representation

Key Concepts:
• Canonical JSON representation

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
  // 68. json.dumps with a list
  (_i: number) => ({
    q: `import json\njson.dumps([1, 2, 3])\nWhat is the result?`,
    o: ['"[1, 2, 3]"', "'[1,2,3]'", "[1, 2, 3]", "Error"],
    c: 0,
    e: "json.dumps serializes a Python list to a JSON string: '[1, 2, 3]' (with spaces after commas by default).",
    de: `json.dumps converts any JSON-serializable Python object to a JSON string. Lists become JSON arrays. The default separator includes a space after commas and after colons.

Key concepts:
• json.dumps returns a STRING, not a list
• Python lists become JSON arrays
• Default separators: ", " (comma-space) and ": " (colon-space)
• The result is a string representation of the JSON array

How it works:
1. json.dumps([1, 2, 3]) converts the list to a JSON string
2. Default separator after comma includes a space
3. Result: '[1, 2, 3]' (a string, not a list)

Example:
import json
json.dumps([1, 2, 3])        # '[1, 2, 3]'
json.dumps(["a", "b"])       # '["a", "b"]'
type(json.dumps([1, 2, 3]))  # <class 'str'>

Common uses:
• Serializing data for APIs
• Storing structured data as strings
• Sending data over network protocols

Key Concepts:
• Sending data over network protocols

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
  // 69. json.dumps with None
  (_i: number) => ({
    q: `import json\njson.dumps(None)\nWhat is the result?`,
    o: ['"null"', '"None"', '""', "Error"],
    c: 0,
    e: "Python's None maps to JSON's null, so json.dumps(None) returns the string 'null'.",
    de: `JSON has its own set of data types that differ from Python's. json.dumps handles the mapping between Python and JSON types automatically.

Key concepts:
• Python None → JSON null
• Python True → JSON true
• Python False → JSON false
• Python dict → JSON object
• Python list → JSON array
• Python str → JSON string
• Python int/float → JSON number

How it works:
1. json.dumps(None) converts Python's None to JSON
2. JSON's equivalent of None is null (lowercase)
3. Result: 'null' (a string containing the word null)

Example:
import json
json.dumps(None)    # 'null'
json.dumps(True)    # 'true'
json.dumps(False)   # 'false'
json.loads('null')  # None (reverse mapping)

Common uses:
• Representing absent values in JSON APIs
• Serializing optional fields
• Interoperability between Python and JSON

Key Concepts:
• Interoperability between Python and JSON

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
  // 70. json.dumps with True
  (_i: number) => ({
    q: `import json\njson.dumps(True)\nWhat is the result?`,
    o: ['"true"', '"True"', '"1"', "Error"],
    c: 0,
    e: "Python's True maps to JSON's true (lowercase), so json.dumps(True) returns 'true'.",
    de: `JSON booleans are lowercase (true/false), unlike Python's capitalized booleans (True/False). json.dumps handles this conversion automatically.

Key concepts:
• Python True → JSON true (lowercase)
• Python False → JSON false (lowercase)
• This is a common source of confusion between Python and JSON
• json.loads('true') converts back to Python True

How it works:
1. json.dumps(True) converts Python's True to JSON format
2. JSON requires lowercase: true, not True
3. Result: 'true'

Example:
import json
json.dumps(True)           # 'true'
json.dumps(False)          # 'false'
json.dumps({"flag": True}) # '{"flag": true}'
json.loads('true')         # True
json.loads('false')        # False

Common uses:
• Boolean fields in API responses
• Configuration files
• Feature flags in JSON

Key Concepts:
• Feature flags in JSON

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
  // 71. json.loads with "null"
  (_i: number) => ({
    q: `import json\njson.loads("null")\nWhat is the result?`,
    o: ["None", '"null"', "Error", "0"],
    c: 0,
    e: "JSON null maps to Python None, so json.loads('null') returns None.",
    de: `json.loads parses a JSON string and returns the corresponding Python object. JSON null is converted to Python's None.

Key concepts:
• json.loads(string) — parse JSON string to Python object
• JSON null → Python None
• JSON true → Python True
• JSON false → Python False
• Reverse of json.dumps

How it works:
1. json.loads("null") parses the JSON string "null"
2. JSON null maps to Python None
3. Result: None

Example:
import json
json.loads("null")           # None
json.loads("true")           # True
json.loads("42")             # 42
json.loads('"hello"')        # 'hello'
json.loads('[1, 2, 3]')      # [1, 2, 3]
json.loads('{"a": 1}')       # {'a': 1}

Common uses:
• Parsing API responses
• Reading JSON configuration files
• Deserializing stored data

Key Concepts:
• Deserializing stored data

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
  // 72. json.loads with "true"
  (_i: number) => ({
    q: `import json\njson.loads("true")\nWhat is the result?`,
    o: ["True", '"true"', "1", "Error"],
    c: 0,
    e: "JSON true maps to Python True, so json.loads('true') returns True.",
    de: `json.loads converts JSON primitives to their Python equivalents. JSON's lowercase true becomes Python's capitalized True.

Key concepts:
• json.loads("true") → True (Python bool)
• json.loads("false") → False (Python bool)
• The input must be valid JSON — "True" (capitalized) would cause an error
• json.loads is strict about JSON syntax

How it works:
1. json.loads("true") parses the JSON value true
2. JSON true → Python True
3. Result: True (the Python boolean)

Example:
import json
json.loads("true")   # True
json.loads("false")  # False
# json.loads("True")  # JSONDecodeError — not valid JSON!

Common uses:
• Parsing boolean values from JSON APIs
• Processing feature flags
• Handling boolean configuration values

Key Concepts:
• Handling boolean configuration values

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
  // 73. json.loads with an array string
  (_i: number) => ({
    q: `import json\njson.loads("[1, 2, 3]")\nWhat is the result?`,
    o: ["[1, 2, 3]", '"[1, 2, 3]"', "(1, 2, 3)", "Error"],
    c: 0,
    e: "json.loads parses a JSON array string into a Python list: [1, 2, 3].",
    de: `json.loads parses a JSON-formatted string and returns the corresponding Python data structure. JSON arrays become Python lists, and JSON numbers become Python ints or floats.

Key concepts:
• JSON arrays → Python lists
• JSON numbers (no decimal) → Python int
• JSON numbers (with decimal) → Python float
• The string must contain valid JSON

How it works:
1. json.loads("[1, 2, 3]") parses the JSON array
2. JSON array [1, 2, 3] becomes Python list [1, 2, 3]
3. Each number is converted to a Python int
4. Result: [1, 2, 3] (a Python list, not a string)

Example:
import json
json.loads("[1, 2, 3]")           # [1, 2, 3]
json.loads('["a", "b", "c"]')     # ['a', 'b', 'c']
json.loads('[1, 2.5, "three"]')   # [1, 2.5, 'three']
type(json.loads("[1, 2, 3]"))     # <class 'list'>

Common uses:
• Parsing list data from JSON APIs
• Processing array-format configuration
• Converting stored JSON arrays back to Python lists

Key Concepts:
• Converting stored JSON arrays back to Python lists

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
  // 74. json.dumps with a set — TypeError
  (_i: number) => ({
    q: `import json\njson.dumps({1, 2, 3})\nWhat happens?`,
    o: ["TypeError — sets are not JSON serializable", "'{1, 2, 3}'", "'[1, 2, 3]'", "'{}'"],
    c: 0,
    e: "Sets are not JSON serializable. json.dumps raises TypeError for unsupported types like set.",
    de: `JSON only supports a limited set of data types: objects, arrays, strings, numbers, booleans, and null. Python sets have no JSON equivalent, so json.dumps raises a TypeError.

Key concepts:
• JSON-serializable types: dict, list, str, int, float, bool, None
• NOT serializable: set, tuple (but tuple is converted to array), bytes, custom objects
• Actually, tuples ARE serialized as JSON arrays — but sets are NOT
• To serialize a set, convert it to a list first: json.dumps(list(my_set))

How it works:
1. json.dumps({1, 2, 3}) tries to serialize a Python set
2. Sets have no JSON equivalent
3. Raises TypeError: Object of type set is not JSON serializable

Example:
import json
# json.dumps({1, 2, 3})     # TypeError!
json.dumps(list({1, 2, 3})) # '[1, 2, 3]' — convert to list first
json.dumps((1, 2, 3))       # '[1, 2, 3]' — tuples work (become arrays)

Workaround — custom encoder:
class SetEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, set):
            return list(obj)
        return super().default(obj)

json.dumps({1, 2, 3}, cls=SetEncoder)  # '[1, 2, 3]'

Common uses:
• Understanding JSON type limitations
• Building custom JSON encoders for non-standard types
• Converting data before serialization

Key Concepts:
• Converting data before serialization

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
  // 75. json.dumps with compact separators
  (_i: number) => ({
    q: `import json\njson.dumps({"a": 1}, separators=(",", ":"))\nWhat is the result?`,
    o: [`'{"a":1}'`, `'{"a": 1}'`, `'{ "a" : 1 }'`, "Error"],
    c: 0,
    e: "separators=(',', ':') removes spaces, producing compact JSON: '{\"a\":1}'.",
    de: `The separators parameter in json.dumps controls the characters used between items and between keys and values. The default is (", ", ": ") which includes spaces. Using (",", ":") removes spaces for compact output.

Key concepts:
• separators=(item_separator, key_separator)
• Default: (", ", ": ") — spaces after commas and colons
• Compact: (",", ":") — no spaces
• Useful for minimizing JSON size in network transmission

How it works:
1. json.dumps({"a": 1}, separators=(",", ":"))
2. Item separator "," — no space after comma between key-value pairs
3. Key separator ":" — no space after colon between key and value
4. Result: '{"a":1}' (compact, no extra whitespace)

Example:
import json
data = {"a": 1, "b": [2, 3]}
json.dumps(data)                          # '{"a": 1, "b": [2, 3]}'
json.dumps(data, separators=(",", ":"))   # '{"a":1,"b":[2,3]}'

Common uses:
• Minimizing JSON payload size for APIs
• Reducing bandwidth in network communication
• Compact storage format

Key Concepts:
• Compact storage format

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
  // 76. Path.name — last component
  (_i: number) => ({
    q: `from pathlib import Path\nPath("a/b/c").name\nWhat is the result?`,
    o: ['"c"', '"a/b/c"', '"a"', "Error"],
    c: 0,
    e: "Path.name returns the final component of the path: 'c'.",
    de: `pathlib.Path.name is a property that returns the final component of the path as a string. It's the filename (or last directory name) without any parent directories.

Key concepts:
• Path.name — the last component of the path
• For files: returns the filename with extension
• For directories: returns the directory name
• Returns a string, not a Path object

How it works:
1. Path("a/b/c") creates a path object
2. .name returns the last component: "c"
3. It strips all parent directories

Example:
from pathlib import Path
Path("a/b/c").name          # 'c'
Path("/home/user/file.txt").name  # 'file.txt'
Path("file.py").name        # 'file.py'
Path("/").name              # ''

Common uses:
• Extracting filename from a full path
• Getting the last directory in a path
• File management and processing

Key Concepts:
• File management and processing

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
  // 77. Path.suffix — file extension
  (_i: number) => ({
    q: `from pathlib import Path\nPath("a/b/c.txt").suffix\nWhat is the result?`,
    o: ['".txt"', '"txt"', '"c.txt"', "Error"],
    c: 0,
    e: "Path.suffix returns the file extension including the dot: '.txt'.",
    de: `pathlib.Path.suffix returns the file extension of the final component, including the leading dot. If there is no extension, it returns an empty string.

Key concepts:
• Path.suffix — extension with the dot
• Returns "" if no extension
• Only returns the LAST extension (for .tar.gz, returns .gz)
• Use .suffixes for all extensions

How it works:
1. Path("a/b/c.txt") creates a path
2. .suffix returns ".txt" (with the dot)
3. Not "txt" — the dot is included

Example:
from pathlib import Path
Path("file.txt").suffix        # '.txt'
Path("file.tar.gz").suffix     # '.gz' (last only)
Path("file").suffix            # '' (no extension)
Path(".hidden").suffix         # '' (dotfile, not extension)

Common uses:
• Checking file types by extension
• Filtering files by type
• Conditional processing based on file format

Key Concepts:
• Conditional processing based on file format

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
  // 78. Path.stem — filename without extension
  (_i: number) => ({
    q: `from pathlib import Path\nPath("a/b/c.txt").stem\nWhat is the result?`,
    o: ['"c"', '"c.txt"', '"txt"', "Error"],
    c: 0,
    e: "Path.stem returns the filename without the extension: 'c'.",
    de: `pathlib.Path.stem returns the final path component without its extension. It's equivalent to Path.name minus Path.suffix.

Key concepts:
• Path.stem — name without extension
• Path.name = Path.stem + Path.suffix
• For multiple extensions (.tar.gz), stem is "file.tar"
• Returns a string

How it works:
1. Path("a/b/c.txt") creates a path
2. .name is "c.txt"
3. .suffix is ".txt"
4. .stem is "c" (name minus suffix)

Example:
from pathlib import Path
Path("report.pdf").stem         # 'report'
Path("archive.tar.gz").stem     # 'archive.tar' (removes only last suffix)
Path("noext").stem              # 'noext'
Path("/home/user/file.py").stem # 'file'

Common uses:
• Getting base filename for renaming
• Creating output filenames with different extensions
• Processing files without caring about their type

Key Concepts:
• Processing files without caring about their type

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
  // 79. Path / operator — joining paths
  (_i: number) => ({
    q: `from pathlib import Path\nPath("a/b") / "c.txt"\nWhat is the result?`,
    o: ['Path("a/b/c.txt")', '"a/bc.txt"', "Error", "TypeError"],
    c: 0,
    e: "The / operator joins Path objects and strings, producing Path('a/b/c.txt').",
    de: `pathlib.Path overloads the / (division) operator to join path segments. This provides a clean, readable syntax for building paths.

Key concepts:
• Path / string — joins path with string segment
• Path / Path — joins two Path objects
• Equivalent to Path.joinpath()
• Returns a new Path object (paths are immutable)

How it works:
1. Path("a/b") creates a path
2. / "c.txt" joins "c.txt" as a child
3. Result: Path("a/b/c.txt")

Example:
from pathlib import Path
base = Path("/home/user")
base / "docs" / "file.txt"     # Path('/home/user/docs/file.txt')
Path("src") / Path("main.py")  # Path('src/main.py')

# If right side is absolute, it replaces the left:
Path("a/b") / "/c"             # Path('/c')

Common uses:
• Building file paths dynamically
• Constructing paths in a readable way
• Cross-platform path construction

Key Concepts:
• Cross-platform path construction

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
  // 80. Path.parent — parent directory
  (_i: number) => ({
    q: `from pathlib import Path\nPath("a/b/c").parent\nWhat is the result?`,
    o: ['Path("a/b")', '"a/b"', 'Path("a")', "Error"],
    c: 0,
    e: "Path.parent returns the logical parent: Path('a/b').",
    de: `pathlib.Path.parent returns a new Path representing the parent directory. It strips the last component of the path.

Key concepts:
• Path.parent — immediate parent directory
• Path.parents — sequence of all ancestor directories
• Returns a Path object, not a string
• Does not check if the path actually exists

How it works:
1. Path("a/b/c") represents path a/b/c
2. .parent removes the last component ("c")
3. Result: Path("a/b")

Example:
from pathlib import Path
Path("/home/user/file.txt").parent    # Path('/home/user')
Path("/home/user/file.txt").parent.parent  # Path('/home')
Path("a").parent                      # Path('.')

# .parents gives all ancestors:
p = Path("/a/b/c/d")
list(p.parents)  # [Path('/a/b/c'), Path('/a/b'), Path('/a'), Path('/')]

Common uses:
• Navigating directory hierarchies
• Creating sibling files
• Finding project root directories

Key Concepts:
• Finding project root directories

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
  // 81. Path.parts — tuple of path components
  (_i: number) => ({
    q: `from pathlib import Path\nPath("a/b/c").parts\nWhat is the result?`,
    o: [`("a", "b", "c")`, `["a", "b", "c"]`, `"a/b/c"`, "Error"],
    c: 0,
    e: "Path.parts returns a tuple of the path's components: ('a', 'b', 'c').",
    de: `pathlib.Path.parts returns a tuple containing all the individual components of the path. For absolute paths, the root (/ or drive letter) is included as the first element.

Key concepts:
• Path.parts — tuple of path components
• Relative paths: just the directories and filename
• Absolute paths: root is included as first element
• Returns a tuple, not a list

How it works:
1. Path("a/b/c") is a relative path with 3 components
2. .parts splits into individual components
3. Result: ("a", "b", "c")

Example:
from pathlib import Path
Path("a/b/c").parts            # ('a', 'b', 'c')
Path("/usr/local/bin").parts   # ('/', 'usr', 'local', 'bin')
Path("file.txt").parts         # ('file.txt',)

Common uses:
• Inspecting individual path components
• Checking if a specific directory is in the path
• Reconstructing paths from parts

Key Concepts:
• Reconstructing paths from parts

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
  // 82. Path.suffixes — all file extensions
  (_i: number) => ({
    q: `from pathlib import Path\nPath("file.tar.gz").suffixes\nWhat is the result?`,
    o: [`[".tar", ".gz"]`, `".gz"`, `[".tar.gz"]`, "Error"],
    c: 0,
    e: "Path.suffixes returns a list of all extensions: ['.tar', '.gz'].",
    de: `pathlib.Path.suffixes returns a list of all the file extensions in the path's final component. Unlike .suffix which only returns the last extension, .suffixes captures all of them.

Key concepts:
• Path.suffixes — list of all extensions
• Path.suffix — only the last extension
• Each extension includes its leading dot
• Returns a list of strings

How it works:
1. Path("file.tar.gz") has two extensions
2. .suffixes returns [".tar", ".gz"]
3. Compare: .suffix returns just ".gz"

Example:
from pathlib import Path
Path("file.tar.gz").suffixes     # ['.tar', '.gz']
Path("file.txt").suffixes        # ['.txt']
Path("file").suffixes            # []
Path("my.backup.2024.zip").suffixes  # ['.backup', '.2024', '.zip']

Common uses:
• Detecting compound extensions like .tar.gz
• Processing files with multiple extensions
• Stripping all extensions from a filename

Key Concepts:
• Stripping all extensions from a filename

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
  // 83. os.path.join — joining path components
  (_i: number) => ({
    q: `import os.path\nos.path.join("a", "b", "c")\nWhat is the result?`,
    o: ['"a/b/c"', '"abc"', '"a, b, c"', "Error"],
    c: 0,
    e: "os.path.join combines path components with the OS separator: 'a/b/c' on Unix.",
    de: `os.path.join intelligently joins path components using the correct separator for the current operating system. On Unix/macOS it uses /, on Windows it uses \\.

Key concepts:
• os.path.join(path1, path2, ...) — joins with OS separator
• Handles trailing/leading separators correctly
• If a component is absolute, previous components are discarded
• Returns a string (not a Path object)

How it works:
1. os.path.join("a", "b", "c") joins three components
2. On Unix: uses / as separator
3. Result: "a/b/c"

Example:
import os.path
os.path.join("home", "user", "file.txt")  # 'home/user/file.txt'
os.path.join("/home", "user")             # '/home/user'
os.path.join("a", "/b", "c")             # '/b/c' (absolute resets)

Common uses:
• Building file paths in a cross-platform way
• Older alternative to pathlib.Path / operator
• Working with os module functions that expect string paths

Key Concepts:
• Working with os module functions that expect string paths

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
  // 84. os.path.splitext — split extension
  (_i: number) => ({
    q: `import os.path\nos.path.splitext("file.txt")\nWhat is the result?`,
    o: [`("file", ".txt")`, `("file", "txt")`, `["file", ".txt"]`, "Error"],
    c: 0,
    e: "os.path.splitext splits into root and extension: ('file', '.txt').",
    de: `os.path.splitext splits a path into a (root, extension) tuple. The extension includes the dot. If there's no extension, the second element is an empty string.

Key concepts:
• Returns a tuple: (root, ext)
• Extension includes the dot
• Only splits the LAST dot: "file.tar.gz" → ("file.tar", ".gz")
• No extension: ("file", "")

How it works:
1. os.path.splitext("file.txt") splits at the last dot
2. Root: "file"
3. Extension: ".txt" (with dot)
4. Result: ("file", ".txt")

Example:
import os.path
os.path.splitext("file.txt")         # ('file', '.txt')
os.path.splitext("archive.tar.gz")   # ('archive.tar', '.gz')
os.path.splitext("noext")            # ('noext', '')
os.path.splitext("/path/to/file.py") # ('/path/to/file', '.py')

Common uses:
• Extracting file extensions
• Changing file extensions
• Checking file types

Key Concepts:
• Checking file types

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
  // 85. os.path.basename — filename from path
  (_i: number) => ({
    q: `import os.path\nos.path.basename("/a/b/c.txt")\nWhat is the result?`,
    o: ['"c.txt"', '"/a/b"', '"c"', "Error"],
    c: 0,
    e: "os.path.basename returns the final component of the path: 'c.txt'.",
    de: `os.path.basename returns the last component of a path — the filename or last directory name. It's equivalent to Path.name in pathlib.

Key concepts:
• os.path.basename(path) — returns last path component
• Equivalent to the part after the last separator
• Returns empty string for paths ending in separator
• Returns a string

How it works:
1. os.path.basename("/a/b/c.txt")
2. Splits at last separator /
3. Returns everything after: "c.txt"

Example:
import os.path
os.path.basename("/a/b/c.txt")   # 'c.txt'
os.path.basename("/a/b/c/")      # '' (trailing separator)
os.path.basename("file.py")      # 'file.py'

Common uses:
• Extracting filenames from full paths
• Logging just the filename
• File processing pipelines

Key Concepts:
• File processing pipelines

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
  // 86. os.path.dirname — directory from path
  (_i: number) => ({
    q: `import os.path\nos.path.dirname("/a/b/c.txt")\nWhat is the result?`,
    o: ['"/a/b"', '"c.txt"', '"/a/b/c"', "Error"],
    c: 0,
    e: "os.path.dirname returns the directory portion of the path: '/a/b'.",
    de: `os.path.dirname returns everything before the last path separator — the directory containing the file. It's equivalent to Path.parent in pathlib (but returns a string).

Key concepts:
• os.path.dirname(path) — directory portion
• os.path.basename(path) — filename portion
• Together: dirname + basename = full path
• Returns a string

How it works:
1. os.path.dirname("/a/b/c.txt")
2. Splits at last separator /
3. Returns everything before: "/a/b"

Example:
import os.path
os.path.dirname("/a/b/c.txt")    # '/a/b'
os.path.dirname("/a/b/")         # '/a/b'
os.path.dirname("file.txt")      # '' (no directory)

# dirname + basename = full path
path = "/a/b/c.txt"
os.path.dirname(path) + "/" + os.path.basename(path)
# '/a/b/c.txt'

Common uses:
• Extracting the directory of a file
• Navigating to parent directories
• Constructing sibling file paths

Key Concepts:
• Constructing sibling file paths

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
  // 87. os.sep — path separator on Unix
  (_i: number) => ({
    q: `import os\nos.sep on Unix/macOS\nWhat is the value?`,
    o: ['"/"', '"\\\\"', '";"', '":"'],
    c: 0,
    e: "os.sep is '/' on Unix/macOS and '\\\\' on Windows. It's the OS path separator.",
    de: `os.sep is a string constant containing the character used by the operating system to separate path components. On Unix-based systems (Linux, macOS) it's /, on Windows it's \\.

Key concepts:
• os.sep — path separator: "/" on Unix, "\\" on Windows
• os.altsep — alternative separator (None on Unix, "/" on Windows)
• os.pathsep — PATH variable separator: ":" on Unix, ";" on Windows
• Use os.path.join or pathlib instead of manual string concatenation

How it works:
1. On Unix/macOS, paths use / as separator
2. os.sep returns "/"
3. On Windows, os.sep returns "\\\\"

Example:
import os
print(os.sep)      # '/' on Unix, '\\' on Windows
print(os.pathsep)  # ':' on Unix, ';' on Windows

# Avoid this:
path = "a" + os.sep + "b"  # 'a/b'
# Prefer this:
path = os.path.join("a", "b")  # 'a/b' (more portable)

Common uses:
• Understanding OS-specific path behavior
• Splitting paths manually (prefer os.path.split instead)
• Cross-platform path utilities

Key Concepts:
• Cross-platform path utilities

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
  // 88. Path.with_suffix — change extension
  (_i: number) => ({
    q: `from pathlib import Path\nPath("a.txt").with_suffix(".md")\nWhat is the result?`,
    o: ['Path("a.md")', '"a.md"', 'Path("a.txt.md")', "Error"],
    c: 0,
    e: "with_suffix('.md') replaces the existing extension, producing Path('a.md').",
    de: `pathlib.Path.with_suffix returns a new Path with the suffix (extension) changed. If the original path has no suffix, the new suffix is appended.

Key concepts:
• with_suffix(new_suffix) — replaces the extension
• The new suffix must include the dot: ".md" not "md"
• with_suffix("") removes the extension entirely
• Returns a new Path (paths are immutable)

How it works:
1. Path("a.txt") has suffix ".txt"
2. .with_suffix(".md") replaces ".txt" with ".md"
3. Result: Path("a.md")

Example:
from pathlib import Path
Path("report.txt").with_suffix(".pdf")   # Path('report.pdf')
Path("archive.tar.gz").with_suffix(".bz2")  # Path('archive.tar.bz2')
Path("file.txt").with_suffix("")         # Path('file') — removes extension
Path("noext").with_suffix(".py")         # Path('noext.py') — adds extension

Common uses:
• Converting file formats (change extension before saving)
• Creating output files with different extensions
• Generating companion files (.py → .pyc)

Key Concepts:
• Generating companion files (.py → .pyc)

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
  // 89. string.ascii_lowercase
  (_i: number) => ({
    q: `import string\nstring.ascii_lowercase\nWhat is the value?`,
    o: ['"abcdefghijklmnopqrstuvwxyz"', '"ABCDEFGHIJKLMNOPQRSTUVWXYZ"', '"abcdef"', "Error"],
    c: 0,
    e: "string.ascii_lowercase is a string constant containing all 26 lowercase ASCII letters.",
    de: `The string module provides several useful string constants. ascii_lowercase contains all 26 lowercase English letters from 'a' to 'z'.

Key concepts:
• string.ascii_lowercase — "abcdefghijklmnopqrstuvwxyz"
• It's a constant string, not a function
• Contains exactly 26 characters
• Only ASCII letters — no accented characters

How it works:
1. import string loads the string module
2. string.ascii_lowercase is a pre-defined constant
3. Value: "abcdefghijklmnopqrstuvwxyz"

Example:
import string
string.ascii_lowercase  # 'abcdefghijklmnopqrstuvwxyz'
len(string.ascii_lowercase)  # 26
'a' in string.ascii_lowercase  # True
'A' in string.ascii_lowercase  # False

Common uses:
• Validating that a string contains only lowercase letters
• Generating random strings
• Character rotation ciphers (Caesar cipher, ROT13)

Key Concepts:
• Character rotation ciphers (Caesar cipher, ROT13)

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
  // 90. string.ascii_uppercase
  (_i: number) => ({
    q: `import string\nstring.ascii_uppercase\nWhat is the value?`,
    o: ['"ABCDEFGHIJKLMNOPQRSTUVWXYZ"', '"abcdefghijklmnopqrstuvwxyz"', '"ABCDEF"', "Error"],
    c: 0,
    e: "string.ascii_uppercase is a string constant containing all 26 uppercase ASCII letters.",
    de: `string.ascii_uppercase contains all 26 uppercase English letters from 'A' to 'Z'. It's the uppercase counterpart of string.ascii_lowercase.

Key concepts:
• string.ascii_uppercase — "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
• Exactly 26 characters
• Only ASCII uppercase letters
• Counterpart: string.ascii_lowercase

How it works:
1. string.ascii_uppercase is a pre-defined constant
2. Value: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

Example:
import string
string.ascii_uppercase  # 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
len(string.ascii_uppercase)  # 26
'Z' in string.ascii_uppercase  # True
'z' in string.ascii_uppercase  # False

Common uses:
• Validating uppercase input
• Password strength checking
• Encoding/decoding algorithms

Key Concepts:
• Encoding/decoding algorithms

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
  // 91. string.digits
  (_i: number) => ({
    q: `import string\nstring.digits\nWhat is the value?`,
    o: ['"0123456789"', '"123456789"', '"digits"', "Error"],
    c: 0,
    e: "string.digits is the string '0123456789' — all decimal digit characters.",
    de: `string.digits contains all 10 decimal digit characters from '0' to '9'. It's useful for validating numeric input or generating random numeric strings.

Key concepts:
• string.digits — "0123456789"
• Starts with '0', not '1'
• Contains 10 characters
• Only ASCII digits — no unicode numerals

How it works:
1. string.digits is a pre-defined constant
2. Value: "0123456789"

Example:
import string
string.digits            # '0123456789'
len(string.digits)       # 10
'5' in string.digits     # True
'a' in string.digits     # False

# Check if string is all digits:
all(c in string.digits for c in "12345")  # True
all(c in string.digits for c in "123a5")  # False

Common uses:
• Validating numeric strings
• Generating random PINs or codes
• Stripping non-digit characters

Key Concepts:
• Stripping non-digit characters

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
  // 92. string.punctuation — punctuation characters
  (_i: number) => ({
    q: `import string\nDoes string.punctuation contain '!' and '@'?`,
    o: ["Yes, it contains all ASCII punctuation", "No, only some punctuation", "Only '!'", "Error"],
    c: 0,
    e: "string.punctuation contains all ASCII punctuation characters including !, @, #, $, etc.",
    de: `string.punctuation contains all ASCII characters that are considered punctuation — characters that are printable but are neither letters nor digits.

Key concepts:
• string.punctuation — all ASCII punctuation
• Contains: !"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~
• 32 characters total
• Does not include space (space is in string.whitespace)

How it works:
1. string.punctuation is a pre-defined constant
2. Contains every printable ASCII character that is not a letter, digit, or whitespace
3. Both '!' and '@' are included

Example:
import string
string.punctuation  # '!"#$%&\\'()*+,-./:;<=>?@[\\\\]^_\`{|}~'
len(string.punctuation)  # 32
'!' in string.punctuation   # True
'@' in string.punctuation   # True
' ' in string.punctuation   # False (space is whitespace)

Common uses:
• Stripping punctuation from text
• Password validation (checking for special characters)
• Text preprocessing for NLP

Key Concepts:
• Text preprocessing for NLP

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
  // 93. len(string.ascii_letters) — combined letters
  (_i: number) => ({
    q: `import string\nlen(string.ascii_letters)\nWhat is the result?`,
    o: ["52", "26", "62", "36"],
    c: 0,
    e: "string.ascii_letters combines lowercase (26) and uppercase (26) for a total of 52.",
    de: `string.ascii_letters is the concatenation of string.ascii_lowercase and string.ascii_uppercase, containing all 52 ASCII letters.

Key concepts:
• string.ascii_letters = string.ascii_lowercase + string.ascii_uppercase
• "abcdefghijklmnopqrstuvwxyz" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
• Total: 26 + 26 = 52 characters
• Does not include digits, punctuation, or whitespace

How it works:
1. string.ascii_letters contains all 52 ASCII letters
2. len(string.ascii_letters) returns 52
3. 26 lowercase + 26 uppercase = 52

Example:
import string
string.ascii_letters  # 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
len(string.ascii_letters)  # 52
'a' in string.ascii_letters  # True
'Z' in string.ascii_letters  # True
'5' in string.ascii_letters  # False

Common uses:
• Validating alphabetic input
• Generating random alphanumeric strings (with string.digits)
• Character classification

Key Concepts:
• Character classification

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
  // 94. string.hexdigits — hexadecimal digits
  (_i: number) => ({
    q: `import string\nstring.hexdigits\nWhat is the value?`,
    o: ['"0123456789abcdefABCDEF"', '"0123456789abcdef"', '"0123456789ABCDEF"', "Error"],
    c: 0,
    e: "string.hexdigits contains all valid hexadecimal characters: digits plus a-f and A-F.",
    de: `string.hexdigits contains all characters that are valid in hexadecimal representation: the 10 decimal digits (0-9) plus lowercase (a-f) and uppercase (A-F) hex letters.

Key concepts:
• string.hexdigits — "0123456789abcdefABCDEF"
• Contains 22 characters total
• Includes both lowercase and uppercase hex letters
• Hexadecimal uses base 16: 0-9 and A-F

How it works:
1. string.hexdigits is a pre-defined constant
2. Value: "0123456789abcdefABCDEF"
3. Contains digits 0-9, then a-f, then A-F

Example:
import string
string.hexdigits  # '0123456789abcdefABCDEF'
len(string.hexdigits)  # 22
'f' in string.hexdigits  # True
'F' in string.hexdigits  # True
'g' in string.hexdigits  # False

# Validate hex string:
all(c in string.hexdigits for c in "1a2B3c")  # True
all(c in string.hexdigits for c in "1g2h")    # False

Common uses:
• Validating hexadecimal strings
• Parsing color codes (#FF0000)
• Working with hex-encoded data

Key Concepts:
• Working with hex-encoded data

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
  // 95. string.whitespace — whitespace characters
  (_i: number) => ({
    q: `import string\nWhat does string.whitespace contain?`,
    o: ["Space, tab, newline, and other whitespace", "Only spaces", "Only space and tab", "Error"],
    c: 0,
    e: "string.whitespace contains space, tab (\\t), newline (\\n), carriage return (\\r), form feed, and vertical tab.",
    de: `string.whitespace contains all ASCII characters considered whitespace. These are characters that create blank space in text output.

Key concepts:
• string.whitespace — contains 6 whitespace characters
• Space ' ', Tab '\\t', Newline '\\n'
• Carriage Return '\\r', Form Feed '\\x0c', Vertical Tab '\\x0b'
• These are the same characters that str.split() splits on by default

How it works:
1. string.whitespace is a pre-defined constant
2. Contains: ' \\t\\n\\r\\x0b\\x0c'
3. These characters all produce "blank" space in output

Example:
import string
string.whitespace     # ' \\t\\n\\r\\x0b\\x0c'
len(string.whitespace)  # 6
' ' in string.whitespace   # True
'\\t' in string.whitespace  # True
'\\n' in string.whitespace  # True

# Check if character is whitespace:
all(c in string.whitespace for c in " \\t\\n")  # True

Common uses:
• Custom whitespace stripping
• Tokenization and parsing
• Detecting whitespace-only strings

Key Concepts:
• Detecting whitespace-only strings

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
  // 96. textwrap.wrap — wrapping text to a width
  (_i: number) => ({
    q: `import textwrap\ntextwrap.wrap("hello world foo bar", width=10)\nWhat does this do?`,
    o: ["Wraps text into lines of at most 10 characters each", "Truncates to 10 characters", "Adds 10 spaces of padding", "Error"],
    c: 0,
    e: "textwrap.wrap breaks text into a list of lines, each no longer than the specified width.",
    de: `textwrap.wrap breaks a long string into a list of lines, where each line is at most 'width' characters long. It breaks at word boundaries (spaces) to avoid splitting words.

Key concepts:
• textwrap.wrap(text, width=70) — returns a list of strings
• Default width is 70 characters
• Breaks at word boundaries (whitespace)
• Returns a list of lines without trailing newlines

How it works:
1. textwrap.wrap("hello world foo bar", width=10)
2. Breaks text so no line exceeds 10 characters
3. Breaks at spaces: ["hello", "world foo", "bar"] or similar
4. Returns a list of wrapped lines

Example:
import textwrap
textwrap.wrap("hello world foo bar", width=10)
# ['hello', 'world foo', 'bar']

textwrap.wrap("The quick brown fox jumps over the lazy dog", width=15)
# ['The quick brown', 'fox jumps over', 'the lazy dog']

# textwrap.fill is similar but joins with newlines:
textwrap.fill("hello world foo bar", width=10)
# 'hello\\nworld foo\\nbar'

Common uses:
• Formatting text for terminal output
• Creating fixed-width text displays
• Email formatting

Key Concepts:
• Email formatting

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
  // 97. textwrap.dedent — remove common leading whitespace
  (_i: number) => ({
    q: `import textwrap\ntextwrap.dedent("  hello\\n  world")\nWhat is the result?`,
    o: ['"hello\\nworld"', '"  hello\\n  world"', '"helloworld"', "Error"],
    c: 0,
    e: "textwrap.dedent removes common leading whitespace from all lines. Both lines have 2 spaces, so both are removed.",
    de: `textwrap.dedent removes any common leading whitespace from all lines in the text. It inspects all non-empty lines, finds the longest common whitespace prefix, and removes it.

Key concepts:
• dedent finds the COMMON leading whitespace across all lines
• Only removes whitespace that appears in EVERY non-empty line
• Empty lines are ignored when computing the common prefix
• Useful for cleaning up triple-quoted strings in code

How it works:
1. Input: "  hello\\n  world"
2. Line 1: "  hello" (2 spaces leading)
3. Line 2: "  world" (2 spaces leading)
4. Common leading whitespace: 2 spaces
5. Remove 2 spaces from each line
6. Result: "hello\\nworld"

Example:
import textwrap
s = """
    def foo():
        return 42
"""
print(textwrap.dedent(s))
# \\ndef foo():\\n    return 42\\n
# (4 spaces removed from each line, leaving relative indentation intact)

Common uses:
• Cleaning up multi-line strings defined in indented code
• Formatting docstrings
• Template processing

Key Concepts:
• Template processing

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
  // 98. string.Template — variable substitution
  (_i: number) => ({
    q: `from string import Template\nTemplate("Hello $name").substitute(name="World")\nWhat is the result?`,
    o: ['"Hello World"', '"Hello $name"', "Error", '"Hello name"'],
    c: 0,
    e: "Template.substitute replaces $name with the value 'World', producing 'Hello World'.",
    de: `string.Template provides a simpler string substitution mechanism than str.format or f-strings. Variables are marked with $ prefix and replaced using substitute() or safe_substitute().

Key concepts:
• Template("$var") — marks variables with $
• .substitute(var=value) — replaces variables, raises KeyError if missing
• .safe_substitute(var=value) — replaces what it can, leaves missing $vars as-is
• Simpler and safer than % formatting for user-supplied templates

How it works:
1. Template("Hello $name") creates a template with variable $name
2. .substitute(name="World") replaces $name with "World"
3. Result: "Hello World"

Example:
from string import Template
t = Template("$greeting, $name!")
t.substitute(greeting="Hi", name="Alice")   # 'Hi, Alice!'
t.safe_substitute(greeting="Hi")            # 'Hi, $name!' (missing var kept)

# Use braces for adjacent text:
You can use braces like Template("$\\{noun}ification") for adjacent text.

# $$ for literal dollar sign:
Template("Price: $$100").substitute()  # 'Price: $100'

Common uses:
• User-defined templates (safer than eval/exec)
• Simple mail merge operations
• Configuration file templates
• Cases where f-strings or .format are too powerful/risky

Key Concepts:
• Cases where f-strings or .format are too powerful/risky

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
