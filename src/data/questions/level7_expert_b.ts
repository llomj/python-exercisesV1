// --- LEVEL 7 EXPERT B: functools (reduce, partial, lru_cache, wraps, singledispatch) & Advanced Function Concepts (50 Questions) ---
// Questions 51-100 of expert set. Each is TRULY UNIQUE.
export const level7ExpertB = [
  // 51. reduce — sum of list
  (_i: number) => ({
    q: `What does this return?\nfrom functools import reduce\nreduce(lambda a, b: a + b, [1, 2, 3, 4])`,
    o: ["10", "24", "[1, 2, 3, 4]", "Error"],
    c: 0,
    e: "reduce applies the lambda cumulatively: ((1+2)+3)+4 = 10.",
    de: `functools.reduce applies a two-argument function cumulatively to the items of an iterable, reducing it to a single value.

Key concepts:
• reduce(function, iterable) applies function left-to-right
• The function takes two arguments: accumulator and current element
• First call uses the first two elements, then uses the result as the new accumulator
• Imported from functools (not a built-in in Python 3)

How it works step by step:
• Step 1: a=1, b=2 → 1+2 = 3
• Step 2: a=3, b=3 → 3+3 = 6
• Step 3: a=6, b=4 → 6+4 = 10
• Final result: 10

Example:
from functools import reduce
reduce(lambda a, b: a + b, [1, 2, 3, 4])  # 10
reduce(lambda a, b: a + b, [5])            # 5 (single element)

Common uses:
• Summing sequences (though sum() is preferred for simple addition)
• Aggregating values with custom logic
• Chaining operations across a sequence

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
  // 52. reduce — product of list
  (_i: number) => ({
    q: `What does this return?\nfrom functools import reduce\nreduce(lambda a, b: a * b, [1, 2, 3, 4])`,
    o: ["24", "10", "4", "Error"],
    c: 0,
    e: "reduce multiplies cumulatively: ((1*2)*3)*4 = 24.",
    de: `reduce with multiplication computes the product of all elements.

Key concepts:
• lambda a, b: a * b multiplies the accumulator by each element
• Works left-to-right through the iterable
• Equivalent to math.prod([1, 2, 3, 4]) in Python 3.8+

How it works step by step:
• Step 1: a=1, b=2 → 1*2 = 2
• Step 2: a=2, b=3 → 2*3 = 6
• Step 3: a=6, b=4 → 6*4 = 24
• Final result: 24

Example:
from functools import reduce
reduce(lambda a, b: a * b, [1, 2, 3, 4])  # 24
reduce(lambda a, b: a * b, [2, 3, 5])     # 30

Common uses:
• Computing factorials: reduce(lambda a,b: a*b, range(1, n+1))
• Product of numeric sequences
• Chaining multiplicative operations

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
  // 53. reduce — with initial value
  (_i: number) => ({
    q: `What does this return?\nfrom functools import reduce\nreduce(lambda a, b: a + b, [1, 2, 3, 4], 10)`,
    o: ["20", "10", "14", "Error"],
    c: 0,
    e: "The third argument is the initial value. 10+1+2+3+4 = 20.",
    de: `reduce accepts an optional third argument as the initial value (also called the initializer).

Key concepts:
• reduce(function, iterable, initializer) starts accumulation from initializer
• Without initializer, the first element is used as the initial accumulator
• With initializer, it becomes the first accumulator value before any elements
• Using an initializer also handles empty iterables safely

How it works step by step:
• Initial accumulator: 10
• Step 1: a=10, b=1 → 10+1 = 11
• Step 2: a=11, b=2 → 11+2 = 13
• Step 3: a=13, b=3 → 13+3 = 16
• Step 4: a=16, b=4 → 16+4 = 20
• Final result: 20

Example:
from functools import reduce
reduce(lambda a, b: a + b, [1, 2, 3, 4], 10)   # 20
reduce(lambda a, b: a + b, [1, 2, 3, 4], 100)  # 110
reduce(lambda a, b: a + b, [], 0)               # 0 (safe with empty)

Common uses:
• Providing a default for empty iterables
• Starting accumulation from a non-zero/non-default value
• Ensuring type consistency when the result type differs from element type

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
  // 54. reduce — finding max
  (_i: number) => ({
    q: `What does this return?\nfrom functools import reduce\nreduce(lambda a, b: max(a, b), [3, 1, 4, 1, 5])`,
    o: ["5", "3", "1", "Error"],
    c: 0,
    e: "reduce with max keeps the largest value seen so far. The maximum is 5.",
    de: `reduce can implement max by keeping the larger of the accumulator and current element at each step.

Key concepts:
• lambda a, b: max(a, b) returns the larger of two values
• The accumulator always holds the largest value seen so far
• Equivalent to the built-in max() for this use case

How it works step by step:
• Step 1: a=3, b=1 → max(3,1) = 3
• Step 2: a=3, b=4 → max(3,4) = 4
• Step 3: a=4, b=1 → max(4,1) = 4
• Step 4: a=4, b=5 → max(4,5) = 5
• Final result: 5

Example:
from functools import reduce
reduce(lambda a, b: max(a, b), [3, 1, 4, 1, 5])  # 5
reduce(lambda a, b: min(a, b), [3, 1, 4, 1, 5])  # 1

Common uses:
• Demonstrating reduce logic (use built-in max() in practice)
• Custom comparison aggregations
• Educational examples of fold operations

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
  // 55. reduce — concatenating strings
  (_i: number) => ({
    q: `What does this return?\nfrom functools import reduce\nreduce(lambda a, b: a + b, ["hello", " ", "world"])`,
    o: ['"hello world"', '["hello", " ", "world"]', '"helloworld"', "Error"],
    c: 0,
    e: 'reduce concatenates strings: "hello" + " " + "world" = "hello world".',
    de: `reduce works with any type that supports the operation — including strings with + for concatenation.

Key concepts:
• String concatenation with + works element by element
• reduce does not add any separator — the space is an explicit element in the list
• For joining strings, str.join() is more idiomatic and efficient

How it works step by step:
• Step 1: a="hello", b=" " → "hello" + " " = "hello "
• Step 2: a="hello ", b="world" → "hello " + "world" = "hello world"
• Final result: "hello world"

Example:
from functools import reduce
reduce(lambda a, b: a + b, ["hello", " ", "world"])  # "hello world"
" ".join(["hello", "world"])                          # "hello world" (preferred)

Common uses:
• String concatenation (though str.join() is preferred)
• Demonstrating reduce with non-numeric types
• Building strings from parts

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
  // 56. reduce — conditional max
  (_i: number) => ({
    q: `What does this return?\nfrom functools import reduce\nreduce(lambda a, b: a if a > b else b, [3, 7, 2, 8, 1])`,
    o: ["8", "7", "3", "1"],
    c: 0,
    e: "The lambda keeps the larger value at each step. The maximum is 8.",
    de: `This is an alternative way to find the maximum using a conditional expression inside reduce.

Key concepts:
• lambda a, b: a if a > b else b is a ternary expression
• It returns a if a is greater, otherwise b
• Functionally identical to lambda a, b: max(a, b)
• Shows how reduce can implement comparison logic

How it works step by step:
• Step 1: a=3, b=7 → 3 > 7? No → 7
• Step 2: a=7, b=2 → 7 > 2? Yes → 7
• Step 3: a=7, b=8 → 7 > 8? No → 8
• Step 4: a=8, b=1 → 8 > 1? Yes → 8
• Final result: 8

Example:
from functools import reduce
reduce(lambda a, b: a if a > b else b, [3, 7, 2, 8, 1])  # 8
reduce(lambda a, b: a if a < b else b, [3, 7, 2, 8, 1])  # 1

Common uses:
• Custom comparison operations in reduce
• Finding extremes without built-in max/min
• Demonstrating conditional expressions in lambdas

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
  // 57. reduce — merging dicts
  (_i: number) => ({
    q: `What does this return?\nfrom functools import reduce\nreduce(lambda a, b: {**a, **b}, [{"a":1}, {"b":2}, {"c":3}])`,
    o: ['{"a":1, "b":2, "c":3}', '{"c":3}', '[{"a":1}, {"b":2}, {"c":3}]', "Error"],
    c: 0,
    e: "reduce merges dicts using unpacking: {**a, **b} merges two dicts. Result has all keys.",
    de: `reduce can merge multiple dictionaries using dictionary unpacking with **.

Key concepts:
• {**a, **b} creates a new dict with all key-value pairs from a and b
• If keys overlap, values from b (the later dict) take precedence
• reduce applies this pairwise across the list of dicts

How it works step by step:
• Step 1: a={"a":1}, b={"b":2} → {**{"a":1}, **{"b":2}} = {"a":1, "b":2}
• Step 2: a={"a":1, "b":2}, b={"c":3} → {"a":1, "b":2, "c":3}
• Final result: {"a": 1, "b": 2, "c": 3}

Example:
from functools import reduce
reduce(lambda a, b: {**a, **b}, [{"a":1}, {"b":2}, {"c":3}])
# {"a": 1, "b": 2, "c": 3}

reduce(lambda a, b: {**a, **b}, [{"x":1}, {"x":2}])
# {"x": 2}  — later value wins

Common uses:
• Merging configuration dictionaries
• Combining partial data from multiple sources
• Flattening list of dicts into a single dict

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
  // 58. reduce — building a list
  (_i: number) => ({
    q: `What does this return?\nfrom functools import reduce\nreduce(lambda a, b: a + [b], [1, 2, 3], [])`,
    o: ["[1, 2, 3]", "6", "[[1], [2], [3]]", "Error"],
    c: 0,
    e: "Starting with [], each step appends an element via a + [b]. Result is [1, 2, 3].",
    de: `reduce can build a list by starting with an empty list as the initializer and appending each element.

Key concepts:
• The initializer [] is the starting accumulator (an empty list)
• a + [b] creates a new list by concatenating the accumulator with a single-element list
• This is not the idiomatic way to copy a list, but demonstrates reduce's flexibility

How it works step by step:
• Initial accumulator: []
• Step 1: a=[], b=1 → [] + [1] = [1]
• Step 2: a=[1], b=2 → [1] + [2] = [1, 2]
• Step 3: a=[1, 2], b=3 → [1, 2] + [3] = [1, 2, 3]
• Final result: [1, 2, 3]

Example:
from functools import reduce
reduce(lambda a, b: a + [b], [1, 2, 3], [])  # [1, 2, 3]
reduce(lambda a, b: a + [b*2], [1, 2, 3], [])  # [2, 4, 6]

Common uses:
• Demonstrating reduce with list building
• Transforming and collecting results (though list comprehensions are preferred)
• Building custom data structures with reduce

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
  // 59. reduce — product with initial value
  (_i: number) => ({
    q: `What does this return?\nfrom functools import reduce\nreduce(lambda a, b: a * b, [2, 3, 4], 1)`,
    o: ["24", "10", "1", "Error"],
    c: 0,
    e: "With initial value 1: 1*2*3*4 = 24. The initializer 1 is the identity for multiplication.",
    de: `Using an initializer of 1 with multiplication is a common pattern — 1 is the multiplicative identity.

Key concepts:
• 1 is the identity element for multiplication (x * 1 = x)
• Starting with 1 ensures the product is computed correctly
• Also safely handles empty iterables: reduce(lambda a,b: a*b, [], 1) returns 1

How it works step by step:
• Initial accumulator: 1
• Step 1: a=1, b=2 → 1*2 = 2
• Step 2: a=2, b=3 → 2*3 = 6
• Step 3: a=6, b=4 → 6*4 = 24
• Final result: 24

Example:
from functools import reduce
reduce(lambda a, b: a * b, [2, 3, 4], 1)  # 24
reduce(lambda a, b: a * b, [], 1)          # 1 (empty → returns initializer)

Common uses:
• Safe product computation with identity initializer
• Handling potentially empty iterables
• Ensuring consistent return type

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
  // 60. reduce — empty iterable with initial value
  (_i: number) => ({
    q: `What does this return?\nfrom functools import reduce\nreduce(lambda a, b: a + b, [], 0)`,
    o: ["0", "[]", "None", "Error"],
    c: 0,
    e: "With an empty iterable, reduce returns the initializer directly: 0.",
    de: `When the iterable is empty, reduce returns the initializer without calling the function at all.

Key concepts:
• Empty iterable + initializer → initializer is returned directly
• The lambda is never called (no elements to process)
• Without an initializer, reduce on an empty iterable raises TypeError
• This is why providing an initializer is recommended for safety

How it works:
• Iterable is [] (empty)
• Initializer is 0
• No elements to process → return 0 immediately
• The function lambda a, b: a + b is never invoked

Example:
from functools import reduce
reduce(lambda a, b: a + b, [], 0)     # 0
reduce(lambda a, b: a + b, [], "")    # ""
reduce(lambda a, b: a + b, [])        # TypeError! (no initial value)

Common uses:
• Safe aggregation over potentially empty collections
• Default values for missing data
• Avoiding TypeError on empty iterables

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
  // 61. partial — basic usage
  (_i: number) => ({
    q: `What does this return?\nfrom functools import partial\nadd = lambda a, b: a + b\nadd5 = partial(add, 5)\nadd5(3)`,
    o: ["8", "5", "3", "Error"],
    c: 0,
    e: "partial(add, 5) creates a new function with a fixed to 5. add5(3) → 5+3 = 8.",
    de: `functools.partial creates a new function with some arguments pre-filled (partially applied).

Key concepts:
• partial(func, *args, **kwargs) returns a new callable
• The positional args are prepended to the call
• The new function only needs the remaining arguments
• This is called partial application (from functional programming)

How it works:
• add = lambda a, b: a + b is a simple addition function
• partial(add, 5) fixes the first argument a to 5
• add5(3) calls add(5, 3) → 5 + 3 = 8

Example:
from functools import partial
add = lambda a, b: a + b
add5 = partial(add, 5)
add5(3)   # 8
add5(10)  # 15

Common uses:
• Creating specialized versions of general functions
• Callback functions that need pre-set parameters
• Simplifying function signatures for APIs

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
  // 62. partial — with pow
  (_i: number) => ({
    q: `What does this return?\nfrom functools import partial\npow2 = partial(pow, 2)\npow2(10)`,
    o: ["1024", "20", "100", "Error"],
    c: 0,
    e: "partial(pow, 2) fixes the base to 2. pow2(10) → pow(2, 10) = 2**10 = 1024.",
    de: `partial with built-in pow demonstrates fixing the base argument.

Key concepts:
• pow(base, exp) computes base ** exp
• partial(pow, 2) fixes base=2
• pow2(10) calls pow(2, 10) = 2**10 = 1024
• The first positional argument is fixed, the rest are passed through

How it works:
• partial(pow, 2) creates a new function where the first argument is always 2
• pow2(10) → pow(2, 10) → 2**10 → 1024
• pow2(8) would give pow(2, 8) → 256

Example:
from functools import partial
pow2 = partial(pow, 2)
pow2(10)  # 1024 (2**10)
pow2(8)   # 256  (2**8)
pow2(0)   # 1    (2**0)

Common uses:
• Creating power functions with fixed bases
• Simplifying repeated calculations
• Generating families of related functions

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
  // 63. partial — int with base=2
  (_i: number) => ({
    q: `What does this return?\nfrom functools import partial\nint_base2 = partial(int, base=2)\nint_base2("1010")`,
    o: ["10", "1010", "2", "Error"],
    c: 0,
    e: 'partial(int, base=2) creates a binary-to-int converter. "1010" in binary is 10.',
    de: `partial with keyword arguments creates specialized converters — here, a binary string parser.

Key concepts:
• int(string, base=2) parses a binary string to an integer
• partial(int, base=2) fixes the base keyword argument
• "1010" in binary = 1*8 + 0*4 + 1*2 + 0*1 = 10
• Keyword arguments in partial are stored and applied at call time

How it works:
• partial(int, base=2) creates a new function that always passes base=2
• int_base2("1010") → int("1010", base=2) → 10
• The positional argument "1010" is passed as the first argument to int

Example:
from functools import partial
int_base2 = partial(int, base=2)
int_base2("1010")    # 10
int_base2("1111")    # 15
int_base2("100000")  # 32

Common uses:
• Creating base-specific integer parsers
• Data format converters
• Simplifying repeated conversions

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
  // 64. partial — with print
  (_i: number) => ({
    q: `What does partial(print, "Hello") do when called with "World"?\nfrom functools import partial\ngreet = partial(print, "Hello")\ngreet("World")`,
    o: ['Prints "Hello World"', 'Prints "World"', 'Prints "Hello"', "Error"],
    c: 0,
    e: 'partial(print, "Hello") fixes "Hello" as the first argument. greet("World") prints "Hello World".',
    de: `partial with print pre-fills the first positional argument, and additional arguments are appended.

Key concepts:
• print takes multiple positional arguments separated by space (default sep=" ")
• partial(print, "Hello") fixes "Hello" as the first argument
• greet("World") → print("Hello", "World") → outputs "Hello World"
• print's default separator is a space

How it works:
• partial(print, "Hello") creates a new function with "Hello" pre-filled
• Calling greet("World") → print("Hello", "World")
• print joins arguments with sep (default " ") → "Hello World"

Example:
from functools import partial
greet = partial(print, "Hello")
greet("World")    # Hello World
greet("Python")   # Hello Python
greet("there", "!")  # Hello there !

Common uses:
• Creating logging functions with fixed prefixes
• Specialized output functions
• Debug printing with context

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
  // 65. partial — sorted with key=len
  (_i: number) => ({
    q: `What does this return?\nfrom functools import partial\nf = partial(sorted, key=len)\nf(["hi", "hello", "hey"])`,
    o: ['["hi", "hey", "hello"]', '["hello", "hey", "hi"]', '["hello", "hi", "hey"]', "Error"],
    c: 0,
    e: 'partial fixes key=len. Sorting by length: "hi"(2), "hey"(3), "hello"(5).',
    de: `partial with sorted and key=len creates a length-based sorter.

Key concepts:
• sorted(iterable, key=len) sorts by string length
• partial(sorted, key=len) pre-fills the key argument
• f(list) → sorted(list, key=len)
• Stable sort: equal-length items maintain their original order

How it works:
• "hi" has length 2, "hello" has length 5, "hey" has length 3
• Sorting by length (ascending): 2 < 3 < 5
• Result: ["hi", "hey", "hello"]

Example:
from functools import partial
f = partial(sorted, key=len)
f(["hi", "hello", "hey"])       # ["hi", "hey", "hello"]
f(["a", "ccc", "bb"])           # ["a", "bb", "ccc"]

Common uses:
• Creating reusable sorting strategies
• Parameterized sort functions
• Data processing pipelines

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
  // 66. partial — max with key=abs
  (_i: number) => ({
    q: `What does this return?\nfrom functools import partial\nf = partial(max, key=abs)\nf(-10, 5, -3)`,
    o: ["-10", "5", "-3", "10"],
    c: 0,
    e: "max with key=abs finds the element with the largest absolute value. |-10|=10 is largest, so -10 is returned.",
    de: `partial with max and key=abs creates a function that finds the value with the largest absolute value.

Key concepts:
• max(key=abs) compares elements by their absolute values
• abs(-10)=10, abs(5)=5, abs(-3)=3
• max returns the original element (not the key value)
• -10 is returned because |-10|=10 is the largest absolute value

How it works:
• f(-10, 5, -3) → max(-10, 5, -3, key=abs)
• Compares: abs(-10)=10, abs(5)=5, abs(-3)=3
• Largest absolute value is 10 (from -10)
• Returns -10 (the original element, not 10)

Example:
from functools import partial
f = partial(max, key=abs)
f(-10, 5, -3)     # -10
f(1, -2, 3)       # 3
f(-5, 5)           # -5 (or 5, depends on order — first max wins)

Common uses:
• Finding extremes by a derived property
• Signal processing (peak detection by magnitude)
• Custom comparison functions

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
  // 67. partial — conceptual question
  (_i: number) => ({
    q: `What does functools.partial do?`,
    o: ["Creates a new function with some arguments pre-filled", "Executes a function partially", "Splits a function into parts", "Removes arguments from a function"],
    c: 0,
    e: "partial creates a new callable with some arguments already set (partial application).",
    de: `functools.partial implements partial application — a core concept from functional programming.

Key concepts:
• Partial application fixes some arguments of a function, producing a new function with fewer parameters
• The original function is not modified
• Both positional and keyword arguments can be pre-filled
• The resulting object is a partial object (callable, with attributes func, args, keywords)

How it works:
• partial(func, *args, **kwargs) stores the function and the fixed arguments
• When called, it combines the fixed args with any new args
• New positional args are appended after fixed positional args
• New keyword args are merged with (and can override) fixed keyword args

Example:
from functools import partial
def power(base, exp):
    return base ** exp

square = partial(power, exp=2)
square(5)  # 25
cube = partial(power, exp=3)
cube(5)    # 125

Common uses:
• Creating specialized functions from general ones
• Callback configuration in event-driven programming
• Simplifying function signatures in APIs and pipelines

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
  // 68. partial — int with base=16
  (_i: number) => ({
    q: `What does this return?\nfrom functools import partial\nf = partial(int, base=16)\nf("ff")`,
    o: ["255", "16", "ff", "Error"],
    c: 0,
    e: 'partial(int, base=16) creates a hex parser. "ff" in hex = 15*16 + 15 = 255.',
    de: `partial(int, base=16) creates a hexadecimal string-to-integer converter.

Key concepts:
• int(string, base=16) interprets the string as a hexadecimal number
• "ff" in hex = 15*16 + 15 = 255
• f and F both represent 15 in hexadecimal
• partial fixes the base so you only need to pass the hex string

How it works:
• partial(int, base=16) creates a new function with base=16 pre-filled
• f("ff") → int("ff", base=16) → 255
• "f" = 15 in hex, so "ff" = 15*16 + 15 = 240 + 15 = 255

Example:
from functools import partial
f = partial(int, base=16)
f("ff")    # 255
f("a")     # 10
f("10")    # 16
f("1f")    # 31

Common uses:
• Parsing hexadecimal color codes
• Reading hex-encoded data
• Network protocol parsing

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
  // 69. partial — with multi-arg lambda
  (_i: number) => ({
    q: `What does this return?\nfrom functools import partial\nf = partial(lambda a, b, c: a + b + c, 1, 2)\nf(3)`,
    o: ["6", "3", "1", "Error"],
    c: 0,
    e: "partial fixes a=1 and b=2. f(3) → 1 + 2 + 3 = 6.",
    de: `partial can fix multiple positional arguments at once.

Key concepts:
• partial(func, 1, 2) fixes the first two positional arguments
• The resulting function only needs the remaining argument(s)
• Positional arguments are applied in order: a=1, b=2, and c is left open

How it works:
• The lambda takes three arguments: a, b, c
• partial(lambda, 1, 2) fixes a=1 and b=2
• f(3) → lambda(1, 2, 3) → 1 + 2 + 3 = 6

Example:
from functools import partial
f = partial(lambda a, b, c: a + b + c, 1, 2)
f(3)    # 6
f(10)   # 13
f(0)    # 3

Common uses:
• Progressively applying arguments to functions
• Building function pipelines
• Creating specialized functions from generic ones

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
  // 70. partial — .func attribute
  (_i: number) => ({
    q: `What does f.func return for a partial object?\nfrom functools import partial\nf = partial(pow, 2)`,
    o: ["The original function (pow)", "The partial function itself", "None", "Error"],
    c: 0,
    e: "partial objects have a .func attribute that references the original wrapped function.",
    de: `partial objects expose several useful attributes for introspection.

Key concepts:
• f.func — the original function that was wrapped
• f.args — the fixed positional arguments as a tuple
• f.keywords — the fixed keyword arguments as a dict
• These attributes allow inspection of what a partial object wraps

How it works:
• partial(pow, 2) creates a partial object
• f.func → pow (the original function)
• f.args → (2,) (the fixed positional arguments)
• f.keywords → {} (no keyword arguments were fixed)

Example:
from functools import partial
f = partial(pow, 2)
f.func        # <built-in function pow>
f.func is pow # True
f.args        # (2,)
f.keywords    # {}

g = partial(int, base=16)
g.func        # <class 'int'>
g.args        # ()
g.keywords    # {'base': 16}

Common uses:
• Debugging and introspecting partial objects
• Serialization of function configurations
• Testing that partial objects wrap the expected function

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
  // 71. lru_cache — fibonacci
  (_i: number) => ({
    q: `What does fib(10) return?\nfrom functools import lru_cache\n@lru_cache\ndef fib(n):\n    return n if n < 2 else fib(n-1) + fib(n-2)\nfib(10)`,
    o: ["55", "89", "10", "Error"],
    c: 0,
    e: "The Fibonacci sequence: fib(10) = 55. @lru_cache makes this efficient by caching results.",
    de: `@lru_cache transforms a naive recursive Fibonacci from O(2^n) to O(n) by caching results.

Key concepts:
• lru_cache caches function return values based on arguments
• LRU = Least Recently Used — evicts oldest entries when cache is full
• Without caching, fib(10) would make 177 function calls; with caching, only 11
• @lru_cache with no parentheses uses default maxsize=128

How it works:
• fib(10) calls fib(9) + fib(8)
• fib(9) calls fib(8) + fib(7) — but fib(8) is cached after first computation
• Each fib(n) is computed only once, then served from cache
• The Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

Example:
from functools import lru_cache
@lru_cache
def fib(n):
    return n if n < 2 else fib(n-1) + fib(n-2)
fib(10)  # 55
fib(20)  # 6765
fib(30)  # 832040

Common uses:
• Memoizing recursive functions
• Dynamic programming with top-down approach
• Caching expensive computations

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
  // 72. lru_cache — why it helps fibonacci
  (_i: number) => ({
    q: `Why does @lru_cache make recursive Fibonacci efficient?`,
    o: ["It caches previously computed results", "It uses iteration instead", "It reduces the call stack", "It parallelizes the computation"],
    c: 0,
    e: "lru_cache stores results of previous calls, avoiding redundant recomputation.",
    de: `@lru_cache (memoization) eliminates redundant recursive calls by storing already-computed results.

Key concepts:
• Without caching: fib(5) computes fib(3) twice, fib(2) three times, etc.
• Time complexity without cache: O(2^n) — exponential growth
• With @lru_cache: each fib(k) is computed once, then retrieved from cache
• Time complexity with cache: O(n) — linear

How it works:
• First call to fib(n) computes and stores the result
• Subsequent calls with the same n return the cached value immediately
• This turns the recursive tree into a linear chain of unique computations
• Memory usage: O(n) for storing cached results

Example:
# Without cache: fib(30) takes ~1 second, fib(40) takes ~1 minute
# With @lru_cache: fib(100) returns instantly

# Calls without cache for fib(5):
# fib(5) → fib(4) + fib(3)
# fib(4) → fib(3) + fib(2)   ← fib(3) computed again!
# ... total: 15 calls

# With cache: only 6 unique calls (fib(0) through fib(5))

Common uses:
• Recursive algorithms with overlapping subproblems
• Dynamic programming (top-down memoization)
• Any pure function called repeatedly with the same arguments

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
  // 73. lru_cache — maxsize parameter
  (_i: number) => ({
    q: `In @lru_cache(maxsize=32), what does maxsize control?`,
    o: ["Maximum number of cached results", "Maximum recursion depth", "Maximum argument size", "Maximum execution time"],
    c: 0,
    e: "maxsize sets the maximum number of entries stored in the cache.",
    de: `maxsize controls how many distinct results the LRU cache can hold before evicting old entries.

Key concepts:
• maxsize=128 is the default when using @lru_cache without arguments
• When the cache is full and a new result is computed, the Least Recently Used entry is evicted
• maxsize=None means unlimited cache (no eviction, same as @cache in 3.9+)
• Smaller maxsize uses less memory but may cause more cache misses

How it works:
• Each unique set of arguments maps to one cache entry
• When currsize reaches maxsize, adding a new entry evicts the least recently accessed one
• LRU ordering is updated on every cache hit (access moves entry to "most recent")
• cache_info() shows hits, misses, maxsize, and currsize

Example:
from functools import lru_cache

@lru_cache(maxsize=32)
def expensive(x):
    return x ** 2

expensive(5)
expensive.cache_info()  # hits=0, misses=1, maxsize=32, currsize=1

Common uses:
• Limiting memory usage for caching
• Tuning cache size based on expected working set
• Balancing memory vs. recomputation cost

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
  // 74. lru_cache — cache_info()
  (_i: number) => ({
    q: `What does f.cache_info() show after calling f(3) twice?\nfrom functools import lru_cache\n@lru_cache\ndef f(x): return x ** 2\nf(3); f(3); f.cache_info()`,
    o: ["hits=1, misses=1, maxsize=128, currsize=1", "hits=2, misses=0, maxsize=128, currsize=1", "hits=0, misses=2, maxsize=128, currsize=2", "Error"],
    c: 0,
    e: "First f(3) is a miss (computed and cached). Second f(3) is a hit (from cache). 1 unique value cached.",
    de: `cache_info() returns a named tuple with cache statistics.

Key concepts:
• hits — number of calls that found a cached result
• misses — number of calls that had to compute the result
• maxsize — maximum cache capacity
• currsize — current number of entries in the cache

How it works:
• f(3) first call: miss (3 not in cache) → computes 9, stores it → misses=1
• f(3) second call: hit (3 found in cache) → returns 9 from cache → hits=1
• currsize=1 because only one unique argument (3) has been cached
• maxsize=128 is the default

Example:
from functools import lru_cache
@lru_cache
def f(x): return x ** 2
f(3)               # 9 (miss)
f(3)               # 9 (hit)
f.cache_info()     # CacheInfo(hits=1, misses=1, maxsize=128, currsize=1)
f(4)               # 16 (miss)
f.cache_info()     # CacheInfo(hits=1, misses=2, maxsize=128, currsize=2)

Common uses:
• Monitoring cache effectiveness
• Tuning maxsize based on hit rates
• Debugging performance issues

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
  // 75. lru_cache — cache_clear()
  (_i: number) => ({
    q: `What does f.cache_clear() do on an @lru_cache decorated function?`,
    o: ["Clears all cached results", "Removes the decorator", "Resets the function", "Raises an error"],
    c: 0,
    e: "cache_clear() empties the cache, freeing memory and resetting statistics.",
    de: `cache_clear() removes all entries from the LRU cache and resets the statistics.

Key concepts:
• Calling cache_clear() empties the entire cache
• All statistics (hits, misses, currsize) are reset to 0
• The function continues to work and cache new results
• Useful when cached data becomes stale or memory needs to be freed

How it works:
• Before clear: cache may have many stored results
• After cache_clear(): currsize=0, hits=0, misses=0
• Next function call will be a cache miss and recompute the result
• The decorated function itself is not affected

Example:
from functools import lru_cache
@lru_cache
def f(x): return x ** 2

f(3); f(4); f(5)
f.cache_info()     # currsize=3
f.cache_clear()
f.cache_info()     # CacheInfo(hits=0, misses=0, maxsize=128, currsize=0)

Common uses:
• Invalidating stale cached data
• Freeing memory in long-running processes
• Testing and debugging cached functions

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
  // 76. lru_cache — mutable arguments restriction
  (_i: number) => ({
    q: `Can @lru_cache be used with functions that take mutable arguments like lists?`,
    o: ["No, arguments must be hashable", "Yes, it works with any type", "Yes, but only with maxsize=None", "Only with tuples"],
    c: 0,
    e: "lru_cache uses a dict internally, so all arguments must be hashable. Lists are not hashable.",
    de: `@lru_cache requires all arguments to be hashable because it uses them as dictionary keys internally.

Key concepts:
• The cache is implemented as a dictionary mapping argument tuples to results
• Dictionary keys must be hashable
• Lists, dicts, and sets are not hashable → TypeError if passed to a cached function
• Convert to tuples or frozensets before passing to cached functions

How it works:
• When you call f([1, 2, 3]), lru_cache tries to hash the arguments
• Lists are unhashable → TypeError: unhashable type: 'list'
• Workaround: use tuples instead of lists

Example:
from functools import lru_cache

@lru_cache
def f(x):
    return sum(x)

f([1, 2, 3])         # TypeError: unhashable type: 'list'
f((1, 2, 3))         # 6 — tuples are hashable
f(frozenset({1,2}))  # 3 — frozensets are hashable

Common uses:
• Understanding cache limitations
• Designing cacheable function signatures
• Converting mutable inputs to immutable for caching

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
  // 77. lru_cache — maxsize=None
  (_i: number) => ({
    q: `What does @lru_cache(maxsize=None) mean?`,
    o: ["Unlimited cache size (caches everything)", "No caching at all", "Cache size of 0", "Error"],
    c: 0,
    e: "maxsize=None means the cache grows without bound, storing all unique results forever.",
    de: `@lru_cache(maxsize=None) disables the LRU eviction policy, creating an unbounded cache.

Key concepts:
• maxsize=None → cache grows indefinitely, no entries are ever evicted
• More memory usage but guaranteed no recomputation
• In Python 3.9+, @functools.cache is shorthand for @lru_cache(maxsize=None)
• Without a maxsize limit, the "LRU" part is irrelevant — nothing is evicted

How it works:
• Every unique set of arguments is cached permanently
• No eviction occurs regardless of how many entries exist
• Faster than bounded cache (no LRU bookkeeping overhead)
• Memory usage grows linearly with the number of unique argument sets

Example:
from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n):
    return n if n < 2 else fib(n-1) + fib(n-2)

fib(1000)  # instant, all 1001 results cached
fib.cache_info()  # maxsize=None, currsize=1001

Common uses:
• Functions with bounded input domains (all results fit in memory)
• Recursive algorithms where you want all subproblems cached
• Lookup tables computed lazily

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
  // 78. functools.cache
  (_i: number) => ({
    q: `What is functools.cache (added in Python 3.9)?`,
    o: ["Same as lru_cache(maxsize=None)", "A different caching mechanism", "A cache decorator with maxsize=1", "A disk-based cache"],
    c: 0,
    e: "functools.cache is a simpler alias for lru_cache(maxsize=None) — unbounded memoization.",
    de: `functools.cache was added in Python 3.9 as a simpler, more readable alternative to lru_cache(maxsize=None).

Key concepts:
• @cache is equivalent to @lru_cache(maxsize=None)
• Provides unbounded memoization with no LRU eviction
• Slightly faster than lru_cache because it skips LRU ordering overhead
• Same interface: cache_info(), cache_clear() are available

How it works:
• Internally uses a simple dictionary (no LRU linked list)
• Stores every unique call result permanently
• Argument hashing and lookup is the same as lru_cache
• Added for convenience and readability

Example:
from functools import cache

@cache
def factorial(n):
    return 1 if n < 2 else n * factorial(n - 1)

factorial(10)   # 3628800
factorial.cache_info()  # CacheInfo(hits=0, misses=11, maxsize=None, currsize=11)

Common uses:
• Simple memoization without worrying about cache size
• Pure functions called with many unique arguments
• When readability of @cache is preferred over @lru_cache(maxsize=None)

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
  // 79. lru_cache — argument order matters
  (_i: number) => ({
    q: `Are f(1, 2) and f(2, 1) separate cache entries with @lru_cache?\n@lru_cache\ndef f(x, y): return x + y`,
    o: ["Yes, different argument tuples are cached separately", "No, they return the same result so one entry", "Only if maxsize > 1", "Error"],
    c: 0,
    e: "lru_cache treats (1, 2) and (2, 1) as different keys, even if the results are equal.",
    de: `@lru_cache uses the exact argument tuple as the cache key, so argument order matters.

Key concepts:
• Cache keys are based on the argument values and their positions
• f(1, 2) caches with key (1, 2), f(2, 1) caches with key (2, 1)
• Even though 1+2 == 2+1, they are separate cache entries
• Keyword vs positional also matters: f(1, y=2) and f(1, 2) are different keys

How it works:
• f(1, 2): key = (1, 2) → miss → computes 3, stores at key (1, 2)
• f(2, 1): key = (2, 1) → miss → computes 3, stores at key (2, 1)
• f(1, 2) again: key = (1, 2) → hit → returns cached 3
• currsize = 2 (two separate entries)

Example:
from functools import lru_cache
@lru_cache
def f(x, y): return x + y

f(1, 2)   # 3 (miss)
f(2, 1)   # 3 (miss — different key!)
f(1, 2)   # 3 (hit)
f.cache_info()  # hits=1, misses=2, currsize=2

Common uses:
• Understanding cache key semantics
• Designing functions for optimal cache usage
• Avoiding unexpected cache misses

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
  // 80. lru_cache — on methods
  (_i: number) => ({
    q: `Can @lru_cache be used on class methods? What is the caveat?`,
    o: ["Yes, but self is part of the cache key", "No, it only works on module-level functions", "Yes, with no caveats", "Only on static methods"],
    c: 0,
    e: "self is included in the cache key, so each instance has its own cache entries. This can prevent garbage collection of instances.",
    de: `@lru_cache on methods works but has important implications because self is part of the cache key.

Key concepts:
• self is an argument, so it becomes part of the cache key
• Each instance gets its own set of cache entries
• The cache holds a reference to self, preventing garbage collection of instances
• This can cause memory leaks if instances are short-lived

How it works:
• When you call obj.method(arg), the cache key is (obj, arg)
• Different instances create different cache entries even for the same arg
• The cache retains references to self, keeping instances alive
• Workaround: use __hash__ and __eq__, or use a per-instance cache

Example:
from functools import lru_cache

class MyClass:
    @lru_cache
    def compute(self, x):
        return x ** 2

a = MyClass()
b = MyClass()
a.compute(5)  # cached under key (a, 5)
b.compute(5)  # cached under key (b, 5) — separate entry!

Common uses:
• Caching expensive method computations (with caution)
• Understanding method-level caching pitfalls
• Using weakref-based alternatives for methods

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
  // 81. singledispatch — what is it
  (_i: number) => ({
    q: `What is functools.singledispatch?`,
    o: ["Generic function dispatch based on the type of the first argument", "A way to call functions asynchronously", "A method to dispatch events", "A decorator for class methods only"],
    c: 0,
    e: "singledispatch creates a generic function that dispatches to different implementations based on the type of the first argument.",
    de: `functools.singledispatch implements single-dispatch generic functions — a form of function overloading.

Key concepts:
• Dispatch is based on the type of the first argument
• The @singledispatch decorator marks the default (fallback) implementation
• @func.register(type) adds type-specific implementations
• Similar to method overloading in other languages, but for functions

How it works:
• The base function (decorated with @singledispatch) handles the default case
• Additional implementations are registered for specific types using @func.register
• At call time, Python checks the type of the first argument and dispatches accordingly
• If no registered type matches, the default implementation is used

Example:
from functools import singledispatch

@singledispatch
def process(x):
    return f"default: {x}"

@process.register(int)
def _(x):
    return f"integer: {x}"

@process.register(str)
def _(x):
    return f"string: {x}"

process(42)       # "integer: 42"
process("hello")  # "string: hello"
process([1, 2])   # "default: [1, 2]"

Common uses:
• Type-based function overloading
• Handling different types without if/elif chains
• Extensible processing pipelines

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
  // 82. singledispatch — int dispatch
  (_i: number) => ({
    q: `What does f(42) return?\nfrom functools import singledispatch\n@singledispatch\ndef f(x): return "other"\n@f.register(int)\ndef _(x): return "int"\nf(42)`,
    o: ['"int"', '"other"', "42", "Error"],
    c: 0,
    e: '42 is an int, so the int-registered implementation is dispatched. Returns "int".',
    de: `singledispatch routes f(42) to the int-registered implementation because 42 is an int.

Key concepts:
• @singledispatch marks the default implementation (returns "other")
• @f.register(int) registers a handler for int arguments
• When f(42) is called, Python checks type(42) → int → dispatches to the int handler
• The registered function name (_ here) doesn't matter — it's accessed through f

How it works:
• f(42) is called
• singledispatch checks type of first argument: type(42) = int
• int is registered → dispatches to the int handler
• The int handler returns "int"

Example:
from functools import singledispatch
@singledispatch
def f(x): return "other"

@f.register(int)
def _(x): return "int"

@f.register(str)
def _(x): return "str"

f(42)       # "int"
f("hello")  # "str"
f(3.14)     # "other" (float not registered)

Common uses:
• Type-specific processing without isinstance checks
• Clean separation of type-handling logic
• Extensible type dispatch systems

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
  // 83. singledispatch — fallback to default
  (_i: number) => ({
    q: `Continuing from singledispatch with int registered, what does f("hello") return?\n@singledispatch\ndef f(x): return "other"\n@f.register(int)\ndef _(x): return "int"`,
    o: ['"other"', '"int"', '"hello"', "Error"],
    c: 0,
    e: '"hello" is a str, which has no registered handler. Falls back to the default: "other".',
    de: `When no registered type matches, singledispatch falls back to the default (base) implementation.

Key concepts:
• The @singledispatch decorated function is the fallback for unregistered types
• "hello" is a str, and str has no registered handler
• The default implementation runs, returning "other"
• MRO (Method Resolution Order) is used for subclass matching

How it works:
• f("hello") is called
• singledispatch checks type("hello") = str
• str is not registered → no match found
• Falls back to the base @singledispatch function → returns "other"

Example:
from functools import singledispatch
@singledispatch
def f(x): return "other"

@f.register(int)
def _(x): return "int"

f("hello")  # "other" (str not registered)
f([1, 2])   # "other" (list not registered)
f(42)       # "int"  (int is registered)

Common uses:
• Providing sensible defaults for unhandled types
• Graceful degradation in type dispatch
• Ensuring all types are handled

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
  // 84. total_ordering — requirements
  (_i: number) => ({
    q: `What does functools.total_ordering require you to define?`,
    o: ["__eq__ and one of __lt__, __le__, __gt__, __ge__", "All comparison methods", "Only __eq__", "Only __lt__ and __gt__"],
    c: 0,
    e: "total_ordering auto-generates missing comparison methods from __eq__ and one ordering method.",
    de: `functools.total_ordering is a class decorator that fills in missing comparison methods.

Key concepts:
• You must define __eq__ and at least one of: __lt__, __le__, __gt__, __ge__
• total_ordering automatically generates the remaining comparison methods
• Without it, you'd need to define all 4 ordering methods manually
• The auto-generated methods are derived from the ones you provide

How it works:
• The decorator inspects which comparison methods are defined
• It generates the missing ones using logical equivalences
• For example, if you define __lt__: __le__ = __lt__ or __eq__, __gt__ = not __le__, __ge__ = not __lt__
• The generated methods may be slightly slower than hand-written ones

Example:
from functools import total_ordering

@total_ordering
class Student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade
    def __eq__(self, other):
        return self.grade == other.grade
    def __lt__(self, other):
        return self.grade < other.grade

s1 = Student("Alice", 90)
s2 = Student("Bob", 85)
s1 > s2   # True (auto-generated from __lt__ and __eq__)
s1 >= s2  # True (auto-generated)

Common uses:
• Custom classes that need full comparison support
• Reducing boilerplate in ordered types
• Sortable custom objects

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
  // 85. operator.add
  (_i: number) => ({
    q: `What does this return?\nfrom operator import add\nadd(3, 4)`,
    o: ["7", "12", "(3, 4)", "Error"],
    c: 0,
    e: "operator.add(a, b) returns a + b. add(3, 4) = 7.",
    de: `The operator module provides function equivalents of Python operators.

Key concepts:
• operator.add(a, b) is equivalent to a + b
• These are regular functions, unlike the + operator
• Useful when you need to pass an operator as a function argument
• Faster than lambda a, b: a + b because it's implemented in C

How it works:
• operator.add(3, 4) calls the __add__ method: 3 + 4 = 7
• No lambda needed — operator.add is already a callable
• Works with any types that support +

Example:
from operator import add, sub, mul
add(3, 4)    # 7
sub(10, 3)   # 7
mul(3, 4)    # 12

from functools import reduce
reduce(add, [1, 2, 3, 4])  # 10 (cleaner than lambda)

Common uses:
• Passing operators to higher-order functions like reduce, map
• Cleaner alternative to lambdas for simple operations
• Performance-critical code (C-implemented functions)

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
  // 86. operator.mul
  (_i: number) => ({
    q: `What does this return?\nfrom operator import mul\nmul(3, 4)`,
    o: ["12", "7", "(3, 4)", "Error"],
    c: 0,
    e: "operator.mul(a, b) returns a * b. mul(3, 4) = 12.",
    de: `operator.mul is the function equivalent of the * multiplication operator.

Key concepts:
• operator.mul(a, b) is equivalent to a * b
• Implemented in C for maximum performance
• Commonly used with reduce for product calculations
• Works with any types that support * (numbers, sequences)

How it works:
• mul(3, 4) → 3 * 4 → 12
• Can also do string/list repetition: mul("ab", 3) → "ababab"

Example:
from operator import mul
mul(3, 4)       # 12
mul(2.5, 4)     # 10.0
mul("ab", 3)    # "ababab"

from functools import reduce
reduce(mul, [1, 2, 3, 4])  # 24 (product)
reduce(mul, range(1, 6))   # 120 (5!)

Common uses:
• Product calculations with reduce
• Sequence repetition
• Cleaner than lambda a, b: a * b

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
  // 87. operator.itemgetter — single index
  (_i: number) => ({
    q: `What does this return?\nfrom operator import itemgetter\nf = itemgetter(1)\nf([10, 20, 30])`,
    o: ["20", "10", "(20,)", "[20]"],
    c: 0,
    e: "itemgetter(1) creates a callable that retrieves index 1. f([10, 20, 30]) → 20.",
    de: `operator.itemgetter creates a callable that fetches items by index or key.

Key concepts:
• itemgetter(index) returns a callable that does obj[index]
• With a single argument, it returns the single item directly (not a tuple)
• Works with any object supporting __getitem__ (lists, dicts, tuples)
• Commonly used as a key function for sorting

How it works:
• itemgetter(1) creates a function equivalent to lambda obj: obj[1]
• f([10, 20, 30]) → [10, 20, 30][1] → 20
• Returns the item directly (not wrapped in a tuple)

Example:
from operator import itemgetter
f = itemgetter(1)
f([10, 20, 30])     # 20
f("hello")          # "e"
f({"a": 1, 1: 99})  # 99

Common uses:
• Key function for sorted(): sorted(data, key=itemgetter(1))
• Extracting fields from records
• Cleaner and faster than lambda for item access

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
  // 88. operator.itemgetter — multiple indices
  (_i: number) => ({
    q: `What does this return?\nfrom operator import itemgetter\nf = itemgetter(0, 2)\nf([10, 20, 30])`,
    o: ["(10, 30)", "[10, 30]", "10", "Error"],
    c: 0,
    e: "itemgetter(0, 2) fetches indices 0 and 2, returning a tuple: (10, 30).",
    de: `When itemgetter is given multiple arguments, it returns a tuple of the fetched items.

Key concepts:
• itemgetter(i, j, ...) returns a tuple of items at those indices
• Single argument → returns the item directly
• Multiple arguments → returns a tuple of items
• This distinction is important for unpacking and key functions

How it works:
• itemgetter(0, 2) creates a function that does (obj[0], obj[2])
• f([10, 20, 30]) → ([10,20,30][0], [10,20,30][2]) → (10, 30)
• Returns a tuple, not a list

Example:
from operator import itemgetter
f = itemgetter(0, 2)
f([10, 20, 30])       # (10, 30)
f("abcdef")           # ("a", "c")

g = itemgetter("name", "age")
g({"name": "Alice", "age": 30, "city": "NYC"})  # ("Alice", 30)

Common uses:
• Extracting multiple fields from records
• Multi-key sorting: sorted(data, key=itemgetter(1, 2))
• Selecting columns from tabular data

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
  // 89. operator.attrgetter
  (_i: number) => ({
    q: `What does operator.attrgetter do?`,
    o: ["Gets object attributes by name", "Gets dictionary items by key", "Gets list elements by index", "Gets class methods"],
    c: 0,
    e: "attrgetter('name') creates a callable equivalent to lambda obj: obj.name.",
    de: `operator.attrgetter creates a callable that retrieves named attributes from objects.

Key concepts:
• attrgetter("attr") returns a function equivalent to lambda obj: obj.attr
• Multiple arguments return a tuple: attrgetter("a", "b")(obj) → (obj.a, obj.b)
• Supports dotted names: attrgetter("a.b") → obj.a.b (nested attribute access)
• Commonly used as a key function for sorting objects by attribute

How it works:
• attrgetter("name") creates a callable that accesses the name attribute
• When called on an object, it returns getattr(obj, "name")
• Faster than equivalent lambdas because it's implemented in C

Example:
from operator import attrgetter

class Student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade

students = [Student("Alice", 90), Student("Bob", 85)]
sorted(students, key=attrgetter("grade"))  # sorted by grade

get_info = attrgetter("name", "grade")
get_info(students[0])  # ("Alice", 90)

Common uses:
• Sorting objects by attribute
• Extracting attributes from collections of objects
• Functional-style attribute access

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
  // 90. operator.methodcaller
  (_i: number) => ({
    q: `What does this return?\nfrom operator import methodcaller\nf = methodcaller("upper")\nf("hello")`,
    o: ['"HELLO"', '"hello"', "Error", "None"],
    c: 0,
    e: 'methodcaller("upper") creates a callable that calls .upper() on its argument. "hello".upper() → "HELLO".',
    de: `operator.methodcaller creates a callable that calls a named method on objects.

Key concepts:
• methodcaller("method") returns a function equivalent to lambda obj: obj.method()
• Can also pass arguments: methodcaller("method", arg1, arg2)
• Useful as a key function or in map/filter operations
• Implemented in C for performance

How it works:
• methodcaller("upper") creates a callable that calls .upper()
• f("hello") → "hello".upper() → "HELLO"
• The method is called with no additional arguments in this case

Example:
from operator import methodcaller
f = methodcaller("upper")
f("hello")      # "HELLO"

g = methodcaller("replace", "o", "0")
g("hello world")  # "hell0 w0rld"

h = methodcaller("split", ",")
h("a,b,c")    # ["a", "b", "c"]

Common uses:
• Applying methods across collections: list(map(methodcaller("strip"), lines))
• Key functions for sorting: sorted(strings, key=methodcaller("lower"))
• Functional-style method invocation

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
  // 91. map with multiple iterables
  (_i: number) => ({
    q: `What does list(map(pow, [2, 3, 4], [3, 2, 1])) produce?`,
    o: ["[8, 9, 4]", "[6, 6, 4]", "[9, 8, 4]", "Error"],
    c: 0,
    e: "map with two iterables passes pairs: pow(2,3)=8, pow(3,2)=9, pow(4,1)=4.",
    de: `map can take multiple iterables, passing corresponding elements as arguments to the function.

Key concepts:
• map(func, iter1, iter2) calls func(a, b) for each pair (a, b) from the iterables
• Stops at the shortest iterable (like zip)
• pow(base, exp) computes base ** exp
• This is element-wise application across parallel iterables

How it works:
• pow(2, 3) = 2**3 = 8
• pow(3, 2) = 3**2 = 9
• pow(4, 1) = 4**1 = 4
• Result: [8, 9, 4]

Example:
list(map(pow, [2, 3, 4], [3, 2, 1]))     # [8, 9, 4]
list(map(max, [1, 5, 3], [4, 2, 6]))     # [4, 5, 6]
list(map(lambda a, b: a+b, [1,2], [3,4]))  # [4, 6]

Common uses:
• Element-wise operations on parallel sequences
• Applying binary functions across two lists
• Vector arithmetic and pairwise computations

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
  // 92. map with pow — explicit list conversion
  (_i: number) => ({
    q: `What type does map(pow, [2, 3, 4], [3, 2, 1]) return without list()?`,
    o: ["A map object (iterator)", "A list", "A tuple", "A generator"],
    c: 0,
    e: "map() returns a lazy map object (iterator), not a list. Use list() to materialize it.",
    de: `In Python 3, map() returns a lazy iterator, not a list.

Key concepts:
• map() returns a map object, which is an iterator
• Values are computed on demand (lazily), not all at once
• Must be consumed (with list(), for loop, etc.) to see the values
• In Python 2, map() returned a list directly (this changed in Python 3)

How it works:
• map(pow, [2,3,4], [3,2,1]) returns a map object
• The computations happen only when the iterator is consumed
• list(map(...)) forces all computations and collects results into a list
• The map object can only be iterated once

Example:
result = map(pow, [2, 3, 4], [3, 2, 1])
type(result)    # <class 'map'>
list(result)    # [8, 9, 4]
list(result)    # [] (iterator exhausted)

next(map(pow, [2], [3]))  # 8 (can use next() on iterators)

Common uses:
• Memory-efficient processing of large sequences
• Lazy evaluation pipelines
• Converting with list() when a concrete list is needed

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
  // 93. itertools.starmap
  (_i: number) => ({
    q: `What does this return?\nfrom itertools import starmap\nlist(starmap(pow, [(2,3), (3,2), (4,1)]))`,
    o: ["[8, 9, 4]", "[(2,3), (3,2), (4,1)]", "[6, 6, 4]", "Error"],
    c: 0,
    e: "starmap unpacks each tuple as arguments: pow(2,3)=8, pow(3,2)=9, pow(4,1)=4.",
    de: `itertools.starmap is like map, but unpacks each element of the iterable as separate arguments.

Key concepts:
• starmap(func, iterable) where each element of iterable is unpacked with *
• Equivalent to (func(*args) for args in iterable)
• Useful when arguments are already grouped as tuples
• The "star" in starmap refers to the * unpacking operator

How it works:
• starmap(pow, [(2,3), (3,2), (4,1)])
• Step 1: pow(*(2,3)) → pow(2, 3) = 8
• Step 2: pow(*(3,2)) → pow(3, 2) = 9
• Step 3: pow(*(4,1)) → pow(4, 1) = 4
• Result: [8, 9, 4]

Example:
from itertools import starmap
list(starmap(pow, [(2,3), (3,2), (4,1)]))  # [8, 9, 4]
list(starmap(max, [(1,5), (3,2), (4,6)]))  # [5, 3, 6]

# Contrast with map:
list(map(pow, [2,3,4], [3,2,1]))           # [8, 9, 4] (same result)

Common uses:
• Processing pre-paired arguments
• Working with zip() output: starmap(func, zip(a, b))
• Database query results or CSV rows

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
  // 94. functions are objects — reassignment
  (_i: number) => ({
    q: `What is f after this code?\ndef f(x): return x * 2\nf = None`,
    o: ["None", "A function", "Error", "Undefined"],
    c: 0,
    e: "Functions are first-class objects bound to variable names. Reassigning f = None makes f point to None.",
    de: `In Python, function names are just variables that reference function objects. They can be reassigned.

Key concepts:
• def f(x): ... creates a function object and binds the name f to it
• f = None reassigns the name f to None
• The original function object may still exist if other references point to it
• Functions are first-class objects — they can be assigned, passed, and deleted

How it works:
• def f(x): return x * 2 creates a function object and assigns it to name f
• f = None reassigns f to the None object
• The function object has no more references (may be garbage collected)
• f is now None, not a function

Example:
def f(x): return x * 2
print(f(5))    # 10
f = None
print(f)       # None
# f(5)         # TypeError: 'NoneType' is not callable

Common uses:
• Understanding that function names are just variables
• Cleanup: setting callbacks to None to disable them
• Dynamic function replacement

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
  // 95. functions are objects — aliasing
  (_i: number) => ({
    q: `What does g(5) return?\ndef f(x): return x * 2\ng = f\ndel f\ng(5)`,
    o: ["10", "Error", "None", "5"],
    c: 0,
    e: "g = f makes g reference the same function object. del f removes the name f, but g still works.",
    de: `Multiple names can reference the same function object. Deleting one name doesn't affect others.

Key concepts:
• g = f makes g point to the same function object as f
• del f removes the name f from the namespace, not the function object
• The function object survives because g still references it
• Python uses reference counting — objects are deleted only when no references remain

How it works:
• def f(x): return x * 2 creates a function object, f references it (refcount=1)
• g = f makes g reference the same object (refcount=2)
• del f removes the name f (refcount=1, g still holds a reference)
• g(5) → calls the function object → 5 * 2 = 10

Example:
def f(x): return x * 2
g = f
del f
g(5)         # 10 (function still exists via g)
# f(5)       # NameError: name 'f' is not defined

print(g.__name__)  # "f" (original name is stored in __name__)

Common uses:
• Understanding Python's reference model
• Function aliasing and renaming
• Safe function replacement patterns

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
  // 96. locals() inside a function
  (_i: number) => ({
    q: `What does locals() return when called inside a function?`,
    o: ["A dictionary of local variables", "A list of variable names", "A tuple of values", "None"],
    c: 0,
    e: "locals() returns a dict mapping local variable names to their current values.",
    de: `locals() returns a dictionary of the current local symbol table.

Key concepts:
• Inside a function, locals() contains all local variables and their values
• The returned dict is a snapshot — modifying it does NOT affect actual variables (in CPython)
• At module level, locals() behaves the same as globals()
• Parameters are included as local variables

How it works:
• Python maintains a local symbol table for each function call
• locals() creates a dict from this table
• The dict maps string names to current values
• It includes function parameters, local assignments, and comprehension variables

Example:
def example(a, b):
    c = a + b
    d = "hello"
    print(locals())

example(1, 2)
# {'a': 1, 'b': 2, 'c': 3, 'd': 'hello'}

Common uses:
• Debugging: inspecting variable state
• String formatting: "%(name)s" % locals()
• Logging and introspection
• Dynamic variable access (though generally discouraged)

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
  // 97. globals()
  (_i: number) => ({
    q: `What does globals() return?`,
    o: ["A dictionary of global variables", "A list of all defined functions", "A tuple of module names", "None"],
    c: 0,
    e: "globals() returns a dict of the current module's global symbol table.",
    de: `globals() returns a dictionary representing the current global symbol table.

Key concepts:
• globals() always refers to the module where the function is defined
• Unlike locals(), modifying the globals() dict DOES affect global variables
• Contains all module-level names: variables, functions, imports, classes
• Always includes __name__, __doc__, __builtins__

How it works:
• The global symbol table is maintained per module
• globals() returns the actual dict object (not a copy)
• globals()["x"] = 42 actually creates/modifies a global variable x
• Functions defined in the module see the same globals()

Example:
x = 10
def f():
    return globals()["x"]

f()            # 10
globals()["y"] = 20
print(y)       # 20 (actually creates the variable)

# Built-in keys always present:
"__name__" in globals()      # True
"__builtins__" in globals()  # True

Common uses:
• Accessing global variables dynamically by name
• Plugin/extension loading
• Debugging and introspection
• Serialization frameworks

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
  // 98. __code__.co_varnames
  (_i: number) => ({
    q: `What does f.__code__.co_varnames return?\ndef f(x): return x`,
    o: ['("x",)', '["x"]', '"x"', "Error"],
    c: 0,
    e: "__code__.co_varnames is a tuple of names of local variables (starting with arguments).",
    de: `The __code__ attribute of a function gives access to the compiled bytecode object, which contains metadata.

Key concepts:
• f.__code__ is the code object associated with function f
• co_varnames is a tuple of all local variable names (arguments first, then other locals)
• Arguments appear first in co_varnames, in order
• Other useful code attributes: co_argcount, co_filename, co_firstlineno

How it works:
• def f(x): return x has one parameter x and no other local variables
• f.__code__.co_varnames returns ("x",)
• The tuple includes ALL local names, not just parameters
• Parameters always come first in the tuple

Example:
def f(x): return x
f.__code__.co_varnames    # ("x",)

def g(a, b):
    c = a + b
    return c
g.__code__.co_varnames    # ("a", "b", "c")

Common uses:
• Function introspection and metaprogramming
• Debugging and analysis tools
• Code documentation generators
• Understanding Python internals

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
  // 99. __code__.co_argcount
  (_i: number) => ({
    q: `What does f.__code__.co_argcount return?\ndef f(x, y, z=3): pass`,
    o: ["3", "2", "1", "Error"],
    c: 0,
    e: "co_argcount counts all positional and keyword arguments (including those with defaults). x, y, z = 3 arguments.",
    de: `co_argcount reports the total number of positional-or-keyword parameters (excluding *args and **kwargs).

Key concepts:
• co_argcount counts regular parameters (positional and keyword)
• Parameters with default values are still counted
• *args is NOT counted in co_argcount (it's in co_flags)
• **kwargs is NOT counted either
• Positional-only parameters (before /) ARE counted

How it works:
• def f(x, y, z=3): has three parameters: x, y, and z
• z has a default value of 3, but it's still a regular parameter
• co_argcount = 3

Example:
def f(x, y, z=3): pass
f.__code__.co_argcount    # 3

def g(a): pass
g.__code__.co_argcount    # 1

def h(*args): pass
h.__code__.co_argcount    # 0 (*args not counted)

def k(a, b, *args, **kwargs): pass
k.__code__.co_argcount    # 2 (only a and b)

Common uses:
• Inspecting function signatures programmatically
• Framework code that adapts to function arity
• Debugging parameter issues
• Metaprogramming and decorators

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
  // 100. __code__.co_varnames with *args
  (_i: number) => ({
    q: `What does f.__code__.co_varnames return?\ndef f(*args): pass`,
    o: ['("args",)', '()', '"args"', "Error"],
    c: 0,
    e: '*args creates a local variable named "args". co_varnames includes it as ("args",).',
    de: `*args is a regular local variable in the function scope — it just receives its value from the packing mechanism.

Key concepts:
• *args in a function signature means "collect extra positional arguments into a tuple"
• The variable name is "args" (the * is syntax, not part of the name)
• co_varnames lists all local variable names including the args parameter
• co_argcount would be 0 because *args is not a regular positional parameter

How it works:
• def f(*args): pass defines a function with one variadic parameter
• Inside the function, args is a regular tuple variable
• f.__code__.co_varnames returns ("args",) — listing all local variable names
• The name "args" is a convention; you could use *items, *values, etc.

Example:
def f(*args): pass
f.__code__.co_varnames    # ("args",)
f.__code__.co_argcount    # 0 (no regular positional params)

def g(*items): pass
g.__code__.co_varnames    # ("items",)

def h(x, *args, **kwargs): pass
h.__code__.co_varnames    # ("x", "args", "kwargs")

Common uses:
• Understanding how *args is represented internally
• Function introspection tools
• Metaprogramming and decorator construction
• Code analysis and linting tools

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
