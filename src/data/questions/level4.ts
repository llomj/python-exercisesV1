import { PersonaStage } from '../../types';

// --- LEVEL 4: SMALL FISH (Loops & Iterables) - 100 TRULY UNIQUE QUESTIONS ---
// Each question tests a DIFFERENT concept - NO number/variable variations of the same question
export const level4Patterns = [
  // 1-10: Range Basics
  (_i: number) => ({ 
    q: `How many times does range(5) loop?`, 
    o: ["5", "4", "1", "0"], 
    c: 0, 
    e: "range(n) iterates from 0 to n-1 (5 times).",
    de: `The range(n) function creates a sequence of numbers from 0 to n-1 (exclusive of n). range(5) generates the numbers 0, 1, 2, 3, 4, which means a loop using range(5) will iterate 5 times. Understanding range() is fundamental for Python loops.

range(n) behavior:
• range(5) generates: 0, 1, 2, 3, 4
• Starts at 0 (default start)
• Stops before n (exclusive)
• Total iterations: n times

How it works:
• range(5) = 0, 1, 2, 3, 4 (5 numbers)
• for i in range(5): loops 5 times
• i takes values: 0, 1, 2, 3, 4
• Common pattern for fixed iterations

Examples:
• range(5) = 0, 1, 2, 3, 4 (5 iterations)
• range(3) = 0, 1, 2 (3 iterations)
• range(10) = 0, 1, 2, ..., 9 (10 iterations)

Common uses:
• Fixed iterations: for i in range(5):
• Index-based loops
• Repeating operations
• Generating sequences

Example: range(5) loops 5 times because it generates the numbers 0, 1, 2, 3, 4 (5 values total). This is the most common use of range() in for loops.

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
  (_i: number) => ({ 
    q: `What is list(range(5))?`, 
    o: ["[0, 1, 2, 3, 4]", "[1, 2, 3, 4, 5]", "[0, 1, 2, 3, 4, 5]", "Error"], 
    c: 0, 
    e: "range(n) goes from 0 to n-1.",
    de: `The range(n) function generates numbers from 0 to n-1 (exclusive of n). Converting it to a list with list(range(5)) creates [0, 1, 2, 3, 4]. The range object itself is an iterable, and list() converts it to a list for inspection or manipulation.

range(n) to list:
• list(range(5)) = [0, 1, 2, 3, 4]
• range(5) generates: 0, 1, 2, 3, 4
• Starts at 0, stops before 5
• Total: 5 elements

How it works:
• range(5) creates iterable: 0, 1, 2, 3, 4
• list() converts iterable to list
• Result: [0, 1, 2, 3, 4]
• Note: 5 is NOT included (exclusive)

Examples:
• list(range(5)) = [0, 1, 2, 3, 4]
• list(range(3)) = [0, 1, 2]
• list(range(1)) = [0]

Common uses:
• Converting range to list: numbers = list(range(5))
• Inspecting range contents
• Creating number sequences
• List generation

Example: list(range(5)) returns [0, 1, 2, 3, 4] because range(5) generates numbers from 0 to 4 (5 numbers total, exclusive of 5).

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
  (_i: number) => ({ 
    q: `What is list(range(1, 4))?`, 
    o: ["[1, 2, 3]", "[1, 2, 3, 4]", "[0, 1, 2, 3]", "[1, 4]"], 
    c: 0, 
    e: "range(start, stop) excludes stop value.",
    de: `The range(start, stop) function generates numbers from start to stop-1 (exclusive of stop). list(range(1, 4)) creates [1, 2, 3] because it starts at 1 and stops before 4. The stop value is always exclusive in range().

range(start, stop):
• list(range(1, 4)) = [1, 2, 3]
• Starts at 1 (inclusive)
• Stops before 4 (exclusive)
• Generates: 1, 2, 3

How it works:
• range(1, 4) creates iterable: 1, 2, 3
• Starts at start value (1)
• Stops before stop value (4)
• list() converts to [1, 2, 3]

Examples:
• list(range(1, 4)) = [1, 2, 3]
• list(range(2, 5)) = [2, 3, 4]
• list(range(0, 3)) = [0, 1, 2]

Important note:
• Stop value is exclusive (not included)
• range(1, 4) does NOT include 4
• This is consistent with Python's half-open interval convention

Common uses:
• Custom ranges: for i in range(1, 10):
• Starting from non-zero: range(5, 10)
• Creating specific sequences
• Loop iterations

Example: list(range(1, 4)) returns [1, 2, 3] because range(1, 4) starts at 1 and stops before 4 (exclusive), generating 1, 2, 3.

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
  (_i: number) => ({ 
    q: `What is list(range(0, 10, 2))?`, 
    o: ["[0, 2, 4, 6, 8]", "[0, 2, 4, 6, 8, 10]", "[2, 4, 6, 8]", "Error"], 
    c: 0, 
    e: "range with step 2: 0, 2, 4, 6, 8.",
    de: `The range(start, stop, step) function generates numbers with a specified step size. list(range(0, 10, 2)) creates [0, 2, 4, 6, 8] because it starts at 0, increments by 2, and stops before 10. The step parameter controls the increment between values.

range with step:
• list(range(0, 10, 2)) = [0, 2, 4, 6, 8]
• Starts at 0
• Step size: 2 (increments by 2)
• Stops before 10 (exclusive)
• Generates: 0, 2, 4, 6, 8

How it works:
• range(0, 10, 2) creates iterable
• Starts at 0, adds 2 each time
• 0, 2, 4, 6, 8 (stops before 10)
• list() converts to [0, 2, 4, 6, 8]

Examples:
• list(range(0, 10, 2)) = [0, 2, 4, 6, 8]
• list(range(0, 10, 3)) = [0, 3, 6, 9]
• list(range(1, 10, 2)) = [1, 3, 5, 7, 9] (odd numbers)

Common uses:
• Even numbers: range(0, 10, 2)
• Odd numbers: range(1, 10, 2)
• Custom increments
• Skipping values

Example: list(range(0, 10, 2)) returns [0, 2, 4, 6, 8] because it starts at 0, increments by 2, and stops before 10, generating even numbers.

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
  (_i: number) => ({ 
    q: `What is list(range(1, 6, 2))?`, 
    o: ["[1, 3, 5]", "[1, 2, 3, 4, 5]", "[1, 3]", "Error"], 
    c: 0, 
    e: "range with step 2: 1, 3, 5.",
    de: `The range(start, stop, step) function with step=2 generates numbers starting from start, incrementing by 2, and stopping before stop. list(range(1, 6, 2)) creates [1, 3, 5] because it starts at 1, increments by 2, and stops before 6. This is useful for generating odd numbers.

range with step:
• list(range(1, 6, 2)) = [1, 3, 5]
• Starts at 1
• Step size: 2 (increments by 2)
• Stops before 6 (exclusive)
• Generates: 1, 3, 5

How it works:
• range(1, 6, 2) creates iterable
• Starts at 1, adds 2 each time
• 1, 3, 5 (stops before 6)
• list() converts to [1, 3, 5]

Examples:
• list(range(1, 6, 2)) = [1, 3, 5] (odd numbers)
• list(range(1, 10, 2)) = [1, 3, 5, 7, 9]
• list(range(2, 10, 2)) = [2, 4, 6, 8] (even numbers)

Common uses:
• Odd numbers: range(1, n, 2)
• Even numbers: range(0, n, 2) or range(2, n, 2)
• Custom increments
• Skipping values

Example: list(range(1, 6, 2)) returns [1, 3, 5] because it starts at 1, increments by 2, and stops before 6, generating odd numbers.

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
  (_i: number) => ({ 
    q: `What is list(range(5, 1, -1))?`, 
    o: ["[5, 4, 3, 2]", "[5, 4, 3, 2, 1]", "[4, 3, 2, 1]", "Error"], 
    c: 0, 
    e: "Negative step creates reverse range.",
    de: `The range() function with a negative step creates a reverse sequence. list(range(5, 1, -1)) creates [5, 4, 3, 2] because it starts at 5, decrements by 1 (step=-1), and stops before 1. Negative steps allow counting backwards, which is useful for reverse iteration.

range with negative step:
• list(range(5, 1, -1)) = [5, 4, 3, 2]
• Starts at 5
• Step size: -1 (decrements by 1)
• Stops before 1 (exclusive)
• Generates: 5, 4, 3, 2

How it works:
• range(5, 1, -1) creates iterable
• Starts at 5, subtracts 1 each time
• 5, 4, 3, 2 (stops before 1)
• list() converts to [5, 4, 3, 2]

Examples:
• list(range(5, 1, -1)) = [5, 4, 3, 2]
• list(range(10, 0, -2)) = [10, 8, 6, 4, 2]
• list(range(5, 0, -1)) = [5, 4, 3, 2, 1]

Common uses:
• Reverse iteration: for i in range(5, 0, -1):
• Counting backwards
• Reverse sequences
• Decrementing loops

Example: list(range(5, 1, -1)) returns [5, 4, 3, 2] because it starts at 5, decrements by 1 (negative step), and stops before 1, creating a reverse sequence.

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
  (_i: number) => ({ 
    q: `What is list(range(0))?`, 
    o: ["[]", "[0]", "Error", "None"], 
    c: 0, 
    e: "range(0) is empty.",
    de: `The range(0) function creates an empty range because it starts at 0 and stops before 0 (exclusive), which means no values are generated. list(range(0)) returns an empty list []. This is useful for edge cases and conditional loops.

Empty range:
• list(range(0)) = [] (empty list)
• range(0) generates no values
• Starts at 0, stops before 0 (impossible)
• Result: empty sequence

How it works:
• range(0) creates iterable
• Starts at 0, stops before 0
• No values can be generated
• list() converts to []

Examples:
• list(range(0)) = [] (empty)
• list(range(1)) = [0] (one value)
• for i in range(0): ... (loop never executes)

Common uses:
• Edge case handling
• Conditional loops: if n > 0: for i in range(n):
• Empty iterations
• Default empty sequences

Example: list(range(0)) returns [] because range(0) starts at 0 and stops before 0, which means no values are generated, resulting in an empty list.

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
  (_i: number) => ({ 
    q: `What is list(range(1, 1))?`, 
    o: ["[]", "[1]", "[0]", "Error"], 
    c: 0, 
    e: "When start equals stop, range is empty.",
    de: `When the start value equals the stop value in range(start, stop), the range is empty because it starts at start and stops before stop (exclusive). Since start equals stop, no values can be generated. list(range(1, 1)) returns an empty list [].

Empty range (start == stop):
• list(range(1, 1)) = [] (empty list)
• Starts at 1, stops before 1 (exclusive)
• No values generated
• Result: empty sequence

How it works:
• range(1, 1) creates iterable
• Starts at 1, stops before 1
• Since start == stop, no values possible
• list() converts to []

Examples:
• list(range(1, 1)) = [] (empty)
• list(range(5, 5)) = [] (empty)
• list(range(1, 2)) = [1] (one value)

Common uses:
• Edge case handling
• Conditional loops
• Empty iterations
• Default empty sequences

Example: list(range(1, 1)) returns [] because when start equals stop, range() generates no values (stop is exclusive), resulting in an empty list.

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
  (_i: number) => ({ 
    q: `What is range(5)[0]?`, 
    o: ["0", "1", "5", "Error"], 
    c: 0, 
    e: "range objects support indexing.",
    de: `Range objects support indexing, allowing you to access specific elements by index. range(5)[0] returns 0 because range(5) generates [0, 1, 2, 3, 4], and index 0 is the first element (0). Range objects behave like sequences and support indexing operations.

Range indexing:
• range(5)[0] = 0 (first element)
• range(5) generates: 0, 1, 2, 3, 4
• Index 0 = first element = 0
• Range objects support indexing

How it works:
• range(5) creates sequence: 0, 1, 2, 3, 4
• Index 0 accesses first element
• Returns 0
• Works like list indexing

Examples:
• range(5)[0] = 0 (first)
• range(5)[1] = 1 (second)
• range(5)[4] = 4 (last)
• range(5)[5] = IndexError (out of range)

Common uses:
• Accessing specific range values
• Random access to range elements
• Index-based operations
• Sequence-like behavior

Example: range(5)[0] returns 0 because range(5) generates the sequence [0, 1, 2, 3, 4], and index 0 is the first element (0).

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
  (_i: number) => ({ 
    q: `What is range(5)[-1]?`, 
    o: ["4", "5", "0", "Error"], 
    c: 0, 
    e: "Negative indexing works with range.",
    de: `Range objects support negative indexing, allowing you to access elements from the end. range(5)[-1] returns 4 because range(5) generates [0, 1, 2, 3, 4], and index -1 is the last element (4). Negative indexing counts backwards from the end.

Range negative indexing:
• range(5)[-1] = 4 (last element)
• range(5) generates: 0, 1, 2, 3, 4
• Index -1 = last element = 4
• Negative indexing works with range

How it works:
• range(5) creates sequence: 0, 1, 2, 3, 4
• Index -1 accesses last element
• Returns 4
• Works like list negative indexing

Examples:
• range(5)[-1] = 4 (last)
• range(5)[-2] = 3 (second from end)
• range(5)[-5] = 0 (first)
• range(5)[-6] = IndexError (out of range)

Common uses:
• Accessing last element: range(n)[-1]
• Reverse access
• End-based operations
• Sequence-like behavior

Example: range(5)[-1] returns 4 because range(5) generates the sequence [0, 1, 2, 3, 4], and index -1 is the last element (4).

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
  
  // 11-20: Range Operations
  (_i: number) => ({ 
    q: `What is len(range(5))?`, 
    o: ["5", "4", "6", "Error"], 
    c: 0, 
    e: "len() works with range objects.",
    de: `The len() function works with range objects and returns the number of elements in the range. len(range(5)) returns 5 because range(5) generates 5 values (0, 1, 2, 3, 4). Range objects support len() just like lists and other sequences.

len() with range:
• len(range(5)) = 5
• range(5) generates: 0, 1, 2, 3, 4
• Total elements: 5
• len() returns count of elements

How it works:
• range(5) creates sequence of 5 elements
• len() counts the elements
• Returns 5
• Works with any range

Examples:
• len(range(5)) = 5
• len(range(1, 5)) = 4
• len(range(0)) = 0 (empty)

Common uses:
• Getting range length: n = len(range(5))
• Counting iterations
• Sequence length
• Loop planning

Example: len(range(5)) returns 5 because range(5) generates 5 values (0, 1, 2, 3, 4), so len() returns 5.

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
  (_i: number) => ({ 
    q: `What is sum(range(5))?`, 
    o: ["10", "5", "0", "Error"], 
    c: 0, 
    e: "sum() works with range: 0+1+2+3+4 = 10.",
    de: `The sum() function works with range objects and adds all elements together. sum(range(5)) returns 10 because range(5) generates [0, 1, 2, 3, 4], and 0 + 1 + 2 + 3 + 4 = 10. Range objects are iterables, so sum() can iterate over them.

sum() with range:
• sum(range(5)) = 10
• range(5) generates: 0, 1, 2, 3, 4
• Sum: 0 + 1 + 2 + 3 + 4 = 10
• sum() adds all elements

How it works:
• range(5) creates iterable: 0, 1, 2, 3, 4
• sum() iterates and adds all values
• 0 + 1 + 2 + 3 + 4 = 10
• Returns total sum

Examples:
• sum(range(5)) = 10 (0+1+2+3+4)
• sum(range(1, 5)) = 10 (1+2+3+4)
• sum(range(0)) = 0 (empty range)

Common uses:
• Summing sequences: total = sum(range(n))
• Calculating totals
• Arithmetic progressions
• Number series

Example: sum(range(5)) returns 10 because range(5) generates [0, 1, 2, 3, 4], and sum() adds them: 0 + 1 + 2 + 3 + 4 = 10.

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
  (_i: number) => ({ 
    q: `What is min(range(5))?`, 
    o: ["0", "1", "4", "Error"], 
    c: 0, 
    e: "min() works with range objects.",
    de: `The min() function works with range objects and returns the smallest value. min(range(5)) returns 0 because range(5) generates [0, 1, 2, 3, 4], and 0 is the minimum value. Range objects are iterables, so min() can find the minimum.

min() with range:
• min(range(5)) = 0
• range(5) generates: 0, 1, 2, 3, 4
• Minimum value: 0
• min() finds smallest element

How it works:
• range(5) creates iterable: 0, 1, 2, 3, 4
• min() iterates and finds minimum
• 0 is the smallest value
• Returns 0

Examples:
• min(range(5)) = 0 (minimum)
• min(range(1, 5)) = 1 (minimum)
• min(range(5, 0, -1)) = 1 (minimum of reverse)

Common uses:
• Finding minimum: smallest = min(range(n))
• Range analysis
• Sequence operations
• Value finding

Example: min(range(5)) returns 0 because range(5) generates [0, 1, 2, 3, 4], and 0 is the smallest value in that sequence.

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
  (_i: number) => ({ 
    q: `What is max(range(5))?`, 
    o: ["4", "5", "0", "Error"], 
    c: 0, 
    e: "max() works with range objects.",
    de: `The max() function works with range objects and returns the largest value. max(range(5)) returns 4 because range(5) generates [0, 1, 2, 3, 4], and 4 is the maximum value. Range objects are iterables, so max() can find the maximum.

max() with range:
• max(range(5)) = 4
• range(5) generates: 0, 1, 2, 3, 4
• Maximum value: 4
• max() finds largest element

How it works:
• range(5) creates iterable: 0, 1, 2, 3, 4
• max() iterates and finds maximum
• 4 is the largest value
• Returns 4

Examples:
• max(range(5)) = 4 (maximum)
• max(range(1, 5)) = 4 (maximum)
• max(range(5, 0, -1)) = 5 (maximum of reverse)

Common uses:
• Finding maximum: largest = max(range(n))
• Range analysis
• Sequence operations
• Value finding

Example: max(range(5)) returns 4 because range(5) generates [0, 1, 2, 3, 4], and 4 is the largest value in that sequence.

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
  (_i: number) => ({ 
    q: `What is 3 in range(5)?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "in operator works with range.",
    de: `The in operator works with range objects to check membership. 3 in range(5) returns True because range(5) generates [0, 1, 2, 3, 4], and 3 is present in that sequence. Range objects support membership testing efficiently.

Membership with range:
• 3 in range(5) = True
• range(5) generates: 0, 1, 2, 3, 4
• 3 is in the sequence
• in operator checks membership

How it works:
• range(5) creates sequence: 0, 1, 2, 3, 4
• in operator checks if 3 is in sequence
• 3 is found, returns True
• Efficient membership testing

Examples:
• 3 in range(5) = True (found)
• 5 in range(5) = False (not found, exclusive)
• 0 in range(5) = True (found)

Common uses:
• Membership checking: if value in range(n):
• Validation
• Range testing
• Conditional logic

Example: 3 in range(5) returns True because range(5) generates [0, 1, 2, 3, 4], and 3 is present in that sequence.

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
  (_i: number) => ({ 
    q: `What is 10 in range(5)?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "in operator - value not in range.",
    de: `The in operator checks if a value is in a range. 10 in range(5) returns False because range(5) generates [0, 1, 2, 3, 4], and 10 is not present in that sequence. The value 10 is outside the range, so membership check returns False.

Membership check:
• 10 in range(5) = False
• range(5) generates: 0, 1, 2, 3, 4
• 10 is not in the sequence
• in operator returns False

How it works:
• range(5) creates sequence: 0, 1, 2, 3, 4
• in operator checks if 10 is in sequence
• 10 is not found, returns False
• Value is outside range

Examples:
• 10 in range(5) = False (not found)
• 5 in range(5) = False (exclusive, not included)
• 0 in range(5) = True (found)

Common uses:
• Membership checking: if value not in range(n):
• Validation
• Range testing
• Conditional logic

Example: 10 in range(5) returns False because range(5) generates [0, 1, 2, 3, 4], and 10 is not present in that sequence (it's outside the range).

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
  (_i: number) => ({ 
    q: `What is 3 not in range(5)?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "not in operator - value is in range.",
    de: `The not in operator is the opposite of in - it returns True if the value is NOT in the range. 3 not in range(5) returns False because range(5) generates [0, 1, 2, 3, 4], and 3 IS present, so not in returns False. The not in operator inverts the membership check.

not in with range:
• 3 not in range(5) = False
• range(5) generates: 0, 1, 2, 3, 4
• 3 is in the sequence
• not in returns False (value is present)

How it works:
• range(5) creates sequence: 0, 1, 2, 3, 4
• not in checks if 3 is NOT in sequence
• 3 is found, so not in returns False
• Inverts membership check

Examples:
• 3 not in range(5) = False (3 is in range)
• 10 not in range(5) = True (10 is not in range)
• 0 not in range(5) = False (0 is in range)

Common uses:
• Negative membership checking: if value not in range(n):
• Validation
• Range testing
• Conditional logic

Example: 3 not in range(5) returns False because 3 is present in range(5) (which generates [0, 1, 2, 3, 4]), so not in returns False.

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
  (_i: number) => ({ 
    q: `What is 10 not in range(5)?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "not in operator - value not in range.",
    de: `The not in operator returns True if the value is NOT in the range. 10 not in range(5) returns True because range(5) generates [0, 1, 2, 3, 4], and 10 is NOT present, so not in returns True. The not in operator is useful for negative membership checks.

not in with range:
• 10 not in range(5) = True
• range(5) generates: 0, 1, 2, 3, 4
• 10 is not in the sequence
• not in returns True (value is absent)

How it works:
• range(5) creates sequence: 0, 1, 2, 3, 4
• not in checks if 10 is NOT in sequence
• 10 is not found, so not in returns True
• Inverts membership check

Examples:
• 10 not in range(5) = True (10 is not in range)
• 3 not in range(5) = False (3 is in range)
• 5 not in range(5) = True (5 is exclusive, not included)

Common uses:
• Negative membership checking: if value not in range(n):
• Validation
• Range testing
• Conditional logic

Example: 10 not in range(5) returns True because 10 is not present in range(5) (which generates [0, 1, 2, 3, 4]), so not in returns True.

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
  (_i: number) => ({ 
    q: `What is list(reversed(range(5)))?`, 
    o: ["[4, 3, 2, 1, 0]", "[0, 1, 2, 3, 4]", "[5, 4, 3, 2, 1]", "Error"], 
    c: 0, 
    e: "reversed() reverses the range.",
    de: `The reversed() function reverses any iterable, including range objects. list(reversed(range(5))) creates [4, 3, 2, 1, 0] because range(5) generates [0, 1, 2, 3, 4], and reversed() reverses it. This is useful for reverse iteration without using negative steps.

reversed() with range:
• list(reversed(range(5))) = [4, 3, 2, 1, 0]
• range(5) generates: 0, 1, 2, 3, 4
• reversed() reverses the sequence
• Result: [4, 3, 2, 1, 0]

How it works:
• range(5) creates sequence: 0, 1, 2, 3, 4
• reversed() creates reverse iterator
• Iterates backwards: 4, 3, 2, 1, 0
• list() converts to [4, 3, 2, 1, 0]

Examples:
• list(reversed(range(5))) = [4, 3, 2, 1, 0]
• list(reversed(range(1, 5))) = [4, 3, 2, 1]
• for i in reversed(range(5)): ... (reverse iteration)

Common uses:
• Reverse iteration: for i in reversed(range(n)):
• Creating reverse sequences
• Backwards loops
• Reverse order processing

Example: list(reversed(range(5))) returns [4, 3, 2, 1, 0] because reversed() reverses the sequence generated by range(5) ([0, 1, 2, 3, 4]), creating [4, 3, 2, 1, 0].

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
  (_i: number) => ({ 
    q: `What is sorted(range(5, 0, -1))?`, 
    o: ["[1, 2, 3, 4, 5]", "[5, 4, 3, 2, 1]", "[0, 1, 2, 3, 4]", "Error"], 
    c: 0, 
    e: "sorted() works with range objects.",
    de: `The sorted() function works with range objects and returns a sorted list. sorted(range(5, 0, -1)) creates [1, 2, 3, 4, 5] because range(5, 0, -1) generates [5, 4, 3, 2, 1] (reverse), and sorted() sorts it in ascending order. This is useful for sorting any iterable, including ranges.

sorted() with range:
• sorted(range(5, 0, -1)) = [1, 2, 3, 4, 5]
• range(5, 0, -1) generates: 5, 4, 3, 2, 1
• sorted() sorts in ascending order
• Result: [1, 2, 3, 4, 5]

How it works:
• range(5, 0, -1) creates sequence: 5, 4, 3, 2, 1
• sorted() sorts the sequence
• Ascending order: 1, 2, 3, 4, 5
• Returns sorted list

Examples:
• sorted(range(5, 0, -1)) = [1, 2, 3, 4, 5]
• sorted(range(5)) = [0, 1, 2, 3, 4] (already sorted)
• sorted(range(1, 6, 2)) = [1, 3, 5] (already sorted)

Common uses:
• Sorting ranges: numbers = sorted(range(5, 0, -1))
• Creating sorted sequences
• Ordering values
• Sequence manipulation

Example: sorted(range(5, 0, -1)) returns [1, 2, 3, 4, 5] because range(5, 0, -1) generates [5, 4, 3, 2, 1], and sorted() sorts it in ascending order to [1, 2, 3, 4, 5].

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
  
  // 21-30: Loop Keywords
  (_i: number) => ({ 
    q: `Which keyword skips the rest of a loop cycle?`, 
    o: ["continue", "break", "pass", "skip"], 
    c: 0, 
    e: "continue jumps to the next iteration.",
    de: `The continue keyword skips the rest of the current loop iteration and jumps to the next iteration. When continue is encountered, the remaining code in the loop body is skipped, and the loop continues with the next iteration. This is useful for skipping certain iterations based on conditions.

continue keyword:
• Skips rest of current iteration
• Jumps to next iteration
• Loop continues normally
• Useful for conditional skipping

How it works:
• When continue is executed, remaining code skipped
• Loop moves to next iteration
• Loop doesn't terminate (unlike break)
• Useful in conditional blocks

Example:
for i in range(5):
    if i == 2:
        continue  # Skip rest, go to next
    print(i)  # Prints 0, 1, 3, 4 (skips 2)

Common uses:
• Skipping invalid values: if not valid: continue
• Filtering iterations
• Conditional processing
• Error handling in loops

Example: The continue keyword skips the rest of the current loop cycle and jumps to the next iteration. It's used to skip certain iterations while keeping the loop running.

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
  (_i: number) => ({ 
    q: `Which keyword terminates a loop?`, 
    o: ["break", "stop", "end", "exit"], 
    c: 0, 
    e: "break exits the loop entirely.",
    de: `The break keyword terminates a loop immediately, exiting the loop entirely. When break is encountered, the loop stops executing and control moves to the statement after the loop. This is useful for exiting loops early when a condition is met.

break keyword:
• Terminates loop immediately
• Exits loop entirely
• Control moves to after loop
• Useful for early exit

How it works:
• When break is executed, loop terminates
• Remaining iterations are skipped
• Control moves to code after loop
• Loop doesn't continue

Example:
for i in range(5):
    if i == 3:
        break  # Exit loop
    print(i)  # Prints 0, 1, 2 (stops at 3)

Common uses:
• Early exit: if found: break
• Condition-based termination
• Search operations
• Error handling

Example: The break keyword terminates a loop entirely, exiting immediately when encountered. It's used to exit loops early when a condition is met.

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
  (_i: number) => ({ 
    q: `What does 'pass' do?`, 
    o: ["Nothing", "Exits loop", "Skips cycle", "Restarts loop"], 
    c: 0, 
    e: "pass is a null operation placeholder.",
    de: `The pass keyword is a null operation - it does nothing. It's used as a placeholder where syntactically some code is required but no action is needed. pass is useful for empty function bodies, empty loops, or incomplete code that needs to be valid Python syntax.

pass keyword:
• Does nothing (null operation)
• Placeholder for empty code
• Required for syntax validity
• No effect on execution

How it works:
• pass is executed but does nothing
• Code continues normally after pass
• Used where code is syntactically required
• No effect on loop or program flow

Example:
for i in range(5):
    pass  # Does nothing, loop runs 5 times
# Loop completes normally

Common uses:
• Empty loops: for i in range(5): pass
• Placeholder code
• Incomplete implementations
• Syntax requirements

Example: The pass keyword does nothing - it's a null operation placeholder. It's used where code is syntactically required but no action is needed.

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
  (_i: number) => ({ 
    q: `What is 'while True:'?`, 
    o: ["An infinite loop", "A syntax error", "A loop that runs once", "None"], 
    c: 0, 
    e: "Always True means it never stops on its own.",
    de: `A while True: loop is an infinite loop because the condition is always True, so the loop never stops on its own. The loop will run indefinitely unless a break statement is used to exit it. This pattern is common for event loops, user input, or continuous processing.

while True loop:
• Infinite loop (condition always True)
• Never stops on its own
• Requires break to exit
• Common pattern for continuous processing

How it works:
• Condition True is always True
• Loop body executes repeatedly
• Continues forever unless break
• Must have exit condition inside

Example:
while True:
    user_input = input("Enter command: ")
    if user_input == "quit":
        break  # Exit loop
    # Process input

Common uses:
• Event loops: while True: process_events()
• User input: while True: get_input()
• Continuous processing
• Server loops

Example: while True: is an infinite loop because the condition is always True, so it never stops on its own. It requires a break statement to exit.

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
  (_i: number) => ({ 
    q: `What is 'for i in range(5): pass'?`, 
    o: ["Loop that does nothing", "Syntax error", "Infinite loop", "Error"], 
    c: 0, 
    e: "pass is a placeholder that does nothing.",
    de: `A for loop with pass is a loop that does nothing - it iterates through the range but performs no action. for i in range(5): pass will loop 5 times (i takes values 0, 1, 2, 3, 4), but pass does nothing, so no code executes in the loop body. This is useful for placeholder code or empty loops.

for loop with pass:
• Loops 5 times (range(5))
• pass does nothing
• No action performed
• Valid Python syntax

How it works:
• for i in range(5): iterates 5 times
• i takes values: 0, 1, 2, 3, 4
• pass executes but does nothing
• Loop completes normally

Example:
for i in range(5):
    pass  # Loop runs 5 times, does nothing
# Loop completes, i = 4

Common uses:
• Placeholder loops
• Empty loop bodies
• Incomplete code
• Syntax requirements

Example: for i in range(5): pass is a loop that does nothing - it iterates 5 times but pass performs no action. It's valid Python syntax used for placeholder code.

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
  (_i: number) => ({ 
    q: `Can you use 'break' outside a loop?`, 
    o: ["No, SyntaxError", "Yes", "Only in functions", "Only in classes"], 
    c: 0, 
    e: "break can only be used inside loops.",
    de: `The break keyword can only be used inside loops (for or while). Using break outside a loop causes a SyntaxError because break is specifically designed to exit loops. It cannot be used in regular code, functions, or classes - only within loop bodies.

break usage:
• Only inside loops (for/while)
• SyntaxError if used outside
• Cannot be used in functions (unless in loop)
• Cannot be used in classes (unless in loop)

How it works:
• break must be inside loop body
• Python checks syntax at parse time
• SyntaxError raised if outside loop
• Must be indented within loop

Example:
# Valid:
for i in range(5):
    if i == 3:
        break  # OK, inside loop

# Invalid:
break  # SyntaxError: 'break' outside loop

Common uses:
• Exiting loops early
• Condition-based termination
• Search operations
• Error handling in loops

Example: No, you cannot use break outside a loop. Using break outside a loop causes a SyntaxError because break can only be used inside for or while loops.

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
  (_i: number) => ({ 
    q: `Can you use 'continue' outside a loop?`, 
    o: ["No, SyntaxError", "Yes", "Only in functions", "Only in classes"], 
    c: 0, 
    e: "continue can only be used inside loops.",
    de: `The continue keyword can only be used inside loops (for or while). Using continue outside a loop causes a SyntaxError because continue is specifically designed to skip to the next iteration of loops. It cannot be used in regular code, functions, or classes - only within loop bodies.

continue usage:
• Only inside loops (for/while)
• SyntaxError if used outside
• Cannot be used in functions (unless in loop)
• Cannot be used in classes (unless in loop)

How it works:
• continue must be inside loop body
• Python checks syntax at parse time
• SyntaxError raised if outside loop
• Must be indented within loop

Example:
# Valid:
for i in range(5):
    if i == 2:
        continue  # OK, inside loop

# Invalid:
continue  # SyntaxError: 'continue' outside loop

Common uses:
• Skipping iterations
• Conditional processing
• Filtering in loops
• Error handling in loops

Example: No, you cannot use continue outside a loop. Using continue outside a loop causes a SyntaxError because continue can only be used inside for or while loops.

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
  (_i: number) => ({ 
    q: `What happens if 'break' is in a nested loop?`, 
    o: ["Breaks only inner loop", "Breaks all loops", "Error", "Breaks outer loop"], 
    c: 0, 
    e: "break only exits the innermost loop.",
    de: `When break is used in a nested loop, it only exits the innermost loop (the loop that contains the break statement). The outer loop continues normally. This is important to understand when working with nested loops - break doesn't exit all loops, only the one it's directly in.

Nested loop break:
• break exits only innermost loop
• Outer loop continues
• Doesn't exit all loops
• Only affects containing loop

How it works:
• break in inner loop exits inner loop
• Outer loop continues next iteration
• Control moves to outer loop
• Outer loop doesn't break

Example:
for i in range(3):
    for j in range(3):
        if j == 1:
            break  # Exits inner loop only
    print(i)  # Outer loop continues
# Prints 0, 1, 2 (outer loop continues)

Common uses:
• Exiting inner loops
• Nested loop control
• Multi-level iteration
• Complex loop structures

Example: If break is in a nested loop, it breaks only the innermost loop. The outer loop continues normally with its next iteration.

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
  (_i: number) => ({ 
    q: `What happens if 'continue' is in a nested loop?`, 
    o: ["Continues only inner loop", "Continues all loops", "Error", "Continues outer loop"], 
    c: 0, 
    e: "continue only affects the innermost loop.",
    de: `When continue is used in a nested loop, it only affects the innermost loop (the loop that contains the continue statement). The continue skips to the next iteration of the inner loop, but the outer loop continues normally. This is important for nested loop control flow.

Nested loop continue:
• continue affects only innermost loop
• Skips to next iteration of inner loop
• Outer loop continues normally
• Only affects containing loop

How it works:
• continue in inner loop skips inner iteration
• Inner loop moves to next iteration
• Outer loop continues normally
• Outer loop doesn't skip

Example:
for i in range(3):
    for j in range(3):
        if j == 1:
            continue  # Skips inner iteration only
        print(j)  # Prints 0, 2 for each i
    print(i)  # Outer loop continues normally

Common uses:
• Skipping inner iterations
• Nested loop control
• Multi-level filtering
• Complex loop structures

Example: If continue is in a nested loop, it continues only the innermost loop (skips to next iteration). The outer loop continues normally.

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
  (_i: number) => ({ 
    q: `Can 'else' be used with 'for' loops?`, 
    o: ["Yes", "No", "Only in Python 2", "Only with while"], 
    c: 0, 
    e: "for loops can have else clauses.",
    de: `Yes, for loops can have else clauses in Python. The else block executes when the for loop completes normally (without being terminated by break). If the loop is exited with break, the else block does not execute. This is a unique Python feature that's useful for search operations.

for loop else:
• for loops can have else clauses
• else executes if loop completes normally
• else does NOT execute if break is used
• Useful for search operations

How it works:
• for loop iterates through items
• If loop completes without break, else executes
• If break is used, else is skipped
• else is part of loop structure

Example:
for i in range(5):
    if i == 10:
        break
else:
    print("Loop completed normally")  # Executes

for i in range(5):
    if i == 3:
        break
else:
    print("This won't print")  # Doesn't execute

Common uses:
• Search operations: for item in items: if found: break; else: not_found()
• Validation
• Completion handling
• Loop result checking

Example: Yes, for loops can have else clauses. The else block executes when the loop completes normally (without break), which is useful for search operations.

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
  
  // 31-40: For Loop Basics
  (_i: number) => ({ 
    q: `Can you loop over a string?`, 
    o: ["Yes", "No", "Only if numeric", "Error"], 
    c: 0, 
    e: "Strings are iterables.",
    de: `Yes, you can loop over a string because strings are iterables in Python. When you iterate over a string, you get each character one at a time. This is useful for processing text character by character, checking for patterns, or transforming strings.

String iteration:
• Strings are iterables
• for char in "abc": iterates over characters
• Each iteration gives one character
• Useful for character processing

How it works:
• String is iterable sequence
• for loop iterates character by character
• Each character is a string of length 1
• Loop variable gets each character

Example:
for char in "abc":
    print(char)  # Prints: a, b, c (one per line)

Common uses:
• Character processing: for char in text:
• Pattern matching
• String transformation
• Character analysis

Example: Yes, you can loop over a string. Strings are iterables, so for char in "abc": iterates over the characters 'a', 'b', 'c'.

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
  (_i: number) => ({ 
    q: `What does 'for char in "abc":' iterate over?`, 
    o: ["'a', 'b', 'c'", "'abc'", "Error", "Nothing"], 
    c: 0, 
    e: "Strings iterate character by character.",
    de: `When you loop over a string with for char in "abc":, it iterates over each character individually: 'a', 'b', 'c'. The loop variable char takes each character as its value, one at a time. This is how string iteration works in Python.

String iteration:
• for char in "abc": iterates over 'a', 'b', 'c'
• Each iteration: char = 'a', then 'b', then 'c'
• Characters are strings of length 1
• Loop runs 3 times

How it works:
• String "abc" has 3 characters
• Loop iterates 3 times
• char takes values: 'a', 'b', 'c'
• Each character is a string

Example:
for char in "abc":
    print(char)  # Prints: a, b, c

Common uses:
• Character processing
• String analysis
• Pattern matching
• Character transformation

Example: for char in "abc": iterates over the characters 'a', 'b', 'c' (one character per iteration).

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
  (_i: number) => ({ 
    q: `Can you loop over a list?`, 
    o: ["Yes", "No", "Only if numeric", "Error"], 
    c: 0, 
    e: "Lists are iterables.",
    de: `Yes, you can loop over a list because lists are iterables in Python. When you iterate over a list, you get each element one at a time. This is the most common use of for loops - iterating through collections to process each item.

List iteration:
• Lists are iterables
• for item in [1, 2, 3]: iterates over elements
• Each iteration gives one element
• Useful for processing collections

How it works:
• List is iterable sequence
• for loop iterates element by element
• Each element can be any type
• Loop variable gets each element

Example:
for item in [1, 2, 3]:
    print(item)  # Prints: 1, 2, 3 (one per line)

Common uses:
• Processing collections: for item in items:
• Element transformation
• Filtering
• Aggregation

Example: Yes, you can loop over a list. Lists are iterables, so for item in [1, 2, 3]: iterates over the elements 1, 2, 3.

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
  (_i: number) => ({ 
    q: `What does 'for item in [1, 2, 3]:' iterate over?`, 
    o: ["1, 2, 3", "[1, 2, 3]", "Error", "Nothing"], 
    c: 0, 
    e: "Lists iterate element by element.",
    de: `When you loop over a list with for item in [1, 2, 3]:, it iterates over each element individually: 1, 2, 3. The loop variable item takes each element as its value, one at a time. This is how list iteration works in Python.

List iteration:
• for item in [1, 2, 3]: iterates over 1, 2, 3
• Each iteration: item = 1, then 2, then 3
• Elements are accessed one by one
• Loop runs 3 times

How it works:
• List [1, 2, 3] has 3 elements
• Loop iterates 3 times
• item takes values: 1, 2, 3
• Each element can be any type

Example:
for item in [1, 2, 3]:
    print(item)  # Prints: 1, 2, 3

Common uses:
• Processing elements
• Element transformation
• Filtering
• Aggregation

Example: for item in [1, 2, 3]: iterates over the elements 1, 2, 3 (one element per iteration).

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
  (_i: number) => ({ 
    q: `Can you loop over a dictionary?`, 
    o: ["Yes", "No", "Only keys", "Error"], 
    c: 0, 
    e: "Dictionaries are iterables (iterates over keys).",
    de: `Yes, you can loop over a dictionary because dictionaries are iterables in Python. When you iterate over a dictionary directly, you iterate over its keys. To get values or key-value pairs, you use .values() or .items() methods.

Dictionary iteration:
• Dictionaries are iterables
• for key in dict: iterates over keys
• Default iteration is over keys
• Use .items() for key-value pairs

How it works:
• Dictionary is iterable
• Default iteration gives keys
• for key in dict: gets each key
• Use dict[key] to access values

Example:
d = {"a": 1, "b": 2}
for key in d:
    print(key)  # Prints: a, b (keys)

Common uses:
• Iterating keys: for key in dict:
• Iterating values: for value in dict.values():
• Iterating pairs: for key, value in dict.items():

Example: Yes, you can loop over a dictionary. By default, for key in dict: iterates over the dictionary's keys.

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
  (_i: number) => ({ 
    q: `What does 'for key in {"a": 1, "b": 2}:' iterate over?`, 
    o: ["'a', 'b'", "1, 2", "('a', 1), ('b', 2)", "Error"], 
    c: 0, 
    e: "Dictionaries iterate over keys by default.",
    de: `When you loop over a dictionary with for key in {"a": 1, "b": 2}:, it iterates over the keys: 'a', 'b'. The loop variable key takes each key as its value. Dictionary iteration defaults to keys, not values or pairs.

Dictionary key iteration:
• for key in {"a": 1, "b": 2}: iterates over 'a', 'b'
• Each iteration: key = 'a', then 'b'
• Keys are accessed, not values
• Loop runs 2 times (one per key)

How it works:
• Dictionary {"a": 1, "b": 2} has 2 keys
• Loop iterates 2 times
• key takes values: 'a', 'b'
• Default iteration is over keys

Example:
for key in {"a": 1, "b": 2}:
    print(key)  # Prints: a, b

To get values:
for key in {"a": 1, "b": 2}:
    print({"a": 1, "b": 2}[key])  # Prints: 1, 2

Common uses:
• Iterating keys: for key in dict:
• Key-based processing
• Dictionary traversal
• Key operations

Example: for key in {"a": 1, "b": 2}: iterates over the keys 'a', 'b' (one key per iteration).

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
  (_i: number) => ({ 
    q: `Which loop is better for a fixed collection?`, 
    o: ["for loop", "while loop", "do-while", "if loop"], 
    c: 0, 
    e: "for loops are designed for iteration.",
    de: `For loops are better for iterating over fixed collections (lists, strings, tuples, dictionaries, etc.) because they are specifically designed for iteration. For loops automatically handle the iteration, don't require manual index management, and are more Pythonic and readable for collection iteration.

for loop advantages:
• Designed for iteration
• Automatic iteration handling
• No manual index management
• More readable and Pythonic

How it works:
• for item in collection: automatically iterates
• Handles iteration internally
• Cleaner and simpler code
• Less error-prone

Example:
# for loop (better):
for item in [1, 2, 3]:
    print(item)

# while loop (more complex):
i = 0
items = [1, 2, 3]
while i < len(items):
    print(items[i])
    i += 1

Common uses:
• Iterating collections: for item in collection:
• Processing sequences
• Element transformation
• Collection operations

Example: For loops are better for fixed collections because they're designed for iteration, automatically handle the iteration process, and are more readable and Pythonic.

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
  (_i: number) => ({ 
    q: `Which loop is better when iterations are unknown?`, 
    o: ["while loop", "for loop", "do-while", "if loop"], 
    c: 0, 
    e: "while loops for unknown iterations.",
    de: `While loops are better when the number of iterations is unknown because they check a condition each iteration and continue as long as the condition is True. While loops are ideal for situations where you don't know in advance how many times the loop should run, such as user input, event processing, or condition-based repetition.

while loop advantages:
• Condition-based iteration
• Unknown iteration count
• Flexible termination
• Event-driven loops

How it works:
• while condition: checks condition each iteration
• Continues as long as condition is True
• Can terminate based on changing conditions
• Flexible iteration control

Example:
# while loop (better for unknown):
user_input = ""
while user_input != "quit":
    user_input = input("Enter command: ")
    # Process input

# for loop (requires known count):
for i in range(10):  # Must know count
    # Process

Common uses:
• User input: while input != "quit":
• Event loops: while not done:
• Condition-based: while x > 0:
• Unknown iterations

Example: While loops are better when iterations are unknown because they check a condition each iteration and continue as long as the condition is True, making them ideal for condition-based repetition.

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
  (_i: number) => ({ 
    q: `What is 'for i in range(3): print(i)' output?`, 
    o: ["0\\n1\\n2", "1\\n2\\n3", "3\\n3\\n3", "Error"], 
    c: 0, 
    e: "range(3) gives 0, 1, 2.",
    de: `The output of for i in range(3): print(i) is "0\\n1\\n2" (three lines: 0, then 1, then 2). range(3) generates the numbers 0, 1, 2 (starting at 0, exclusive of 3), so the loop runs 3 times, printing each value on a separate line.

for loop with range:
• for i in range(3): iterates 3 times
• i takes values: 0, 1, 2
• print(i) prints each value
• Output: 0, 1, 2 (one per line)

How it works:
• range(3) generates: 0, 1, 2
• Loop runs 3 times
• Each iteration: i = 0, then 1, then 2
• print(i) outputs each value

Example:
for i in range(3):
    print(i)
# Output:
# 0
# 1
# 2

Common uses:
• Fixed iterations: for i in range(n):
• Index-based loops
• Repeating operations
• Number sequences

Example: for i in range(3): print(i) outputs "0\\n1\\n2" because range(3) generates 0, 1, 2, and each value is printed on a separate line.

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
  (_i: number) => ({ 
    q: `What is 'for i in range(1, 4): print(i)' output?`, 
    o: ["1\\n2\\n3", "0\\n1\\n2", "1\\n2\\n3\\n4", "Error"], 
    c: 0, 
    e: "range(1, 4) gives 1, 2, 3.",
    de: `The output of for i in range(1, 4): print(i) is "1\\n2\\n3" (three lines: 1, then 2, then 3). range(1, 4) generates the numbers 1, 2, 3 (starting at 1, exclusive of 4), so the loop runs 3 times, printing each value on a separate line.

for loop with range(start, stop):
• for i in range(1, 4): iterates 3 times
• i takes values: 1, 2, 3
• print(i) prints each value
• Output: 1, 2, 3 (one per line)

How it works:
• range(1, 4) generates: 1, 2, 3
• Loop runs 3 times
• Each iteration: i = 1, then 2, then 3
• print(i) outputs each value

Example:
for i in range(1, 4):
    print(i)
# Output:
# 1
# 2
# 3

Common uses:
• Custom ranges: for i in range(start, stop):
• Starting from non-zero
• Specific number sequences
• Range-based loops

Example: for i in range(1, 4): print(i) outputs "1\\n2\\n3" because range(1, 4) generates 1, 2, 3, and each value is printed on a separate line.

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
  
  // 41-50: While Loop Basics
  (_i: number) => ({ 
    q: `What is 'while True: break'?`, 
    o: ["Loop that runs once then breaks", "Infinite loop", "Syntax error", "Error"], 
    c: 0, 
    e: "break exits immediately.",
    de: `A while True: break loop runs once then breaks. The condition True is checked, the loop body executes (which contains break), and break immediately exits the loop. This is a loop that executes exactly once before terminating.

while True: break:
• Condition True is checked
• Loop body executes once
• break exits immediately
• Result: loop runs once then exits

How it works:
• while True: condition is True
• Loop body executes: break
• break exits loop immediately
• Loop terminates after one iteration

Example:
while True:
    break  # Exits immediately
    print("This never prints")
# Loop completes after one iteration

Common uses:
• One-time execution with loop structure
• Placeholder loops
• Conditional exit patterns
• Loop initialization

Example: while True: break is a loop that runs once then breaks. The condition is True, so the loop body executes, but break exits immediately, resulting in exactly one iteration.

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
  (_i: number) => ({ 
    q: `What is 'while False: pass'?`, 
    o: ["Loop that never runs", "Infinite loop", "Syntax error", "Error"], 
    c: 0, 
    e: "False condition means loop never executes.",
    de: `A while False: pass loop never runs because the condition False is always False, so the loop body never executes. The condition is checked first, and since it's False, the loop body (pass) is skipped entirely. This is a loop that never executes.

while False: pass:
• Condition False is checked
• Condition is always False
• Loop body never executes
• Result: loop never runs

How it works:
• while False: condition is False
• Condition check fails immediately
• Loop body (pass) is never executed
• Loop terminates without running

Example:
while False:
    pass  # Never executes
    print("This never prints")
# Loop never runs, code continues

Common uses:
• Disabled code blocks
• Conditional execution (with variable condition)
• Placeholder loops
• Code structure

Example: while False: pass is a loop that never runs because the condition False is always False, so the loop body never executes.

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
  (_i: number) => ({ 
    q: `What is 'x = 0; while x < 3: x += 1' result?`, 
    o: ["x = 3", "x = 0", "Infinite loop", "Error"], 
    c: 0, 
    e: "Loop runs 3 times: x becomes 3.",
    de: `The result of x = 0; while x < 3: x += 1 is x = 3. The loop runs 3 times: first iteration (x=0, becomes 1), second iteration (x=1, becomes 2), third iteration (x=2, becomes 3). When x becomes 3, the condition x < 3 is False, so the loop exits with x = 3.

while loop with increment:
• Initial: x = 0
• Iteration 1: x < 3 (True), x += 1 → x = 1
• Iteration 2: x < 3 (True), x += 1 → x = 2
• Iteration 3: x < 3 (True), x += 1 → x = 3
• Condition check: x < 3 (False), exit
• Result: x = 3

How it works:
• x starts at 0
• Each iteration: check condition, increment x
• Loop runs while x < 3
• When x = 3, condition False, exit
• Final value: x = 3

Example:
x = 0
while x < 3:
    x += 1
# x = 3 after loop

Common uses:
• Counting loops: while x < n: x += 1
• Incrementing variables
• Condition-based iteration
• Counter loops

Example: x = 0; while x < 3: x += 1 results in x = 3 because the loop runs 3 times, incrementing x each time until x = 3, at which point the condition x < 3 is False and the loop exits.

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
  (_i: number) => ({ 
    q: `What is 'x = 0; while x < 3: x = x + 1' result?`, 
    o: ["x = 3", "x = 0", "Infinite loop", "Error"], 
    c: 0, 
    e: "Same as +=, x becomes 3.",
    de: `The result of x = 0; while x < 3: x = x + 1 is x = 3. This is equivalent to using += (x += 1). The loop runs 3 times, incrementing x each time. When x becomes 3, the condition x < 3 is False, so the loop exits with x = 3.

while loop with explicit increment:
• Initial: x = 0
• Iteration 1: x < 3 (True), x = x + 1 → x = 1
• Iteration 2: x < 3 (True), x = x + 1 → x = 2
• Iteration 3: x < 3 (True), x = x + 1 → x = 3
• Condition check: x < 3 (False), exit
• Result: x = 3

How it works:
• x starts at 0
• Each iteration: check condition, x = x + 1
• Loop runs while x < 3
• When x = 3, condition False, exit
• Final value: x = 3

Note:
• x = x + 1 is equivalent to x += 1
• Both increment x by 1
• Same result in this context

Example:
x = 0
while x < 3:
    x = x + 1  # Same as x += 1
# x = 3 after loop

Common uses:
• Counting loops: while x < n: x = x + 1
• Incrementing variables
• Condition-based iteration
• Counter loops

Example: x = 0; while x < 3: x = x + 1 results in x = 3 because it's equivalent to x += 1, and the loop runs 3 times until x = 3.

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
  (_i: number) => ({ 
    q: `What is 'x = 0; while x < 0: x += 1' result?`, 
    o: ["x = 0", "x = 1", "Infinite loop", "Error"], 
    c: 0, 
    e: "Condition False initially, loop never runs.",
    de: `The result of x = 0; while x < 0: x += 1 is x = 0. The condition x < 0 is False initially (0 < 0 is False), so the loop body never executes. The loop is skipped entirely, and x remains 0.

while loop with False condition:
• Initial: x = 0
• Condition check: x < 0 → 0 < 0 → False
• Loop body never executes
• x remains 0
• Result: x = 0

How it works:
• x starts at 0
• Condition x < 0 is checked
• 0 < 0 is False
• Loop body (x += 1) never executes
• x remains 0

Example:
x = 0
while x < 0:
    x += 1  # Never executes
# x = 0 after (loop never ran)

Common uses:
• Conditional loops that may not run
• Guard clauses
• Condition-based execution
• Initial state preservation

Example: x = 0; while x < 0: x += 1 results in x = 0 because the condition x < 0 is False initially (0 < 0 is False), so the loop never runs and x remains 0.

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
  (_i: number) => ({ 
    q: `Can 'else' be used with 'while' loops?`, 
    o: ["Yes", "No", "Only in Python 2", "Only with for"], 
    c: 0, 
    e: "while loops can have else clauses.",
    de: `Yes, while loops can have else clauses in Python. The else block executes when the while loop completes normally (without being terminated by break). If the loop is exited with break, the else block does not execute. This is a unique Python feature useful for search operations and validation.

while loop else:
• while loops can have else clauses
• else executes if loop completes normally
• else does NOT execute if break is used
• Useful for search operations

How it works:
• while loop iterates while condition True
• If loop completes without break, else executes
• If break is used, else is skipped
• else is part of loop structure

Example:
x = 0
while x < 5:
    if x == 10:
        break
    x += 1
else:
    print("Loop completed normally")  # Executes

x = 0
while x < 5:
    if x == 3:
        break
    x += 1
else:
    print("This won't print")  # Doesn't execute

Common uses:
• Search operations: while condition: if found: break; else: not_found()
• Validation
• Completion handling
• Loop result checking

Example: Yes, while loops can have else clauses. The else block executes when the loop completes normally (without break), which is useful for search operations and validation.

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
  (_i: number) => ({ 
    q: `What happens if 'while' condition is always True?`, 
    o: ["Infinite loop", "Runs once", "Error", "Nothing"], 
    c: 0, 
    e: "Loop runs forever unless break is used.",
    de: `If a while loop's condition is always True, the loop runs forever (infinite loop) unless a break statement is used to exit it. The condition is checked each iteration, and since it's always True, the loop continues indefinitely. This is why while True: loops require break to exit.

Infinite while loop:
• Condition always True
• Loop runs forever
• Requires break to exit
• Common pattern for event loops

How it works:
• Condition is checked each iteration
• If always True, loop continues
• Loop body executes repeatedly
• Must have break to exit

Example:
while True:
    user_input = input("Enter command: ")
    if user_input == "quit":
        break  # Exit loop
    # Process input
# Without break, this would run forever

Common uses:
• Event loops: while True: process_events()
• User input: while True: get_input()
• Continuous processing
• Server loops

Example: If a while loop's condition is always True, the loop runs forever (infinite loop) unless a break statement is used to exit it. This is why while True: loops require break.

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
  (_i: number) => ({ 
    q: `What happens if 'while' condition is always False?`, 
    o: ["Loop never runs", "Runs once", "Error", "Infinite loop"], 
    c: 0, 
    e: "Loop body never executes.",
    de: `If a while loop's condition is always False, the loop never runs - the loop body never executes. The condition is checked first, and since it's False, the loop body is skipped entirely, and execution continues after the loop. This is useful for conditional loops that may not need to run.

while loop with False condition:
• Condition always False
• Loop body never executes
• Loop is skipped
• Execution continues after loop

How it works:
• Condition is checked first
• If False, loop body is skipped
• Loop doesn't execute
• Code continues after loop

Example:
x = 0
while x < 0:  # Always False
    print("This never prints")
    x += 1
# Loop never runs, code continues here

Common uses:
• Conditional loops: while condition: ... (may not run)
• Guard clauses
• Conditional execution
• Initial state checks

Example: If a while loop's condition is always False, the loop never runs - the loop body never executes, and execution continues after the loop.

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
  (_i: number) => ({ 
    q: `Can you modify the loop variable in a 'for' loop?`, 
    o: ["Yes, but it doesn't affect iteration", "No", "Only in Python 2", "Error"], 
    c: 0, 
    e: "Modifying loop variable doesn't change iteration.",
    de: `Yes, you can modify the loop variable in a for loop, but it doesn't affect the iteration. The loop variable is reassigned from the iterable at the start of each iteration, so modifying it during the loop body doesn't change which values are iterated over. The iteration sequence is determined by the iterable, not the loop variable.

Modifying for loop variable:
• You can modify the loop variable
• But it doesn't affect iteration
• Variable is reassigned each iteration
• Iteration sequence is fixed

How it works:
• Loop variable is assigned from iterable each iteration
• Modifying it in loop body doesn't change next iteration
• Next iteration reassigns from iterable
• Iteration sequence is predetermined

Example:
for i in range(5):
    i = 10  # Modifies i, but doesn't affect iteration
    print(i)  # Prints 10, 10, 10, 10, 10
    # But next iteration still gets next value from range(5)

Common uses:
• Variable modification (though usually not recommended)
• Temporary assignments
• Value transformation
• Loop variable reuse

Example: Yes, you can modify the loop variable in a for loop, but it doesn't affect the iteration. The loop variable is reassigned from the iterable each iteration, so modifying it doesn't change which values are iterated over.

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
  (_i: number) => ({ 
    q: `Can you modify the condition variable in a 'while' loop?`, 
    o: ["Yes", "No", "Only in Python 2", "Error"], 
    c: 0, 
    e: "You can modify variables in while loop condition.",
    de: `Yes, you can modify the condition variable in a while loop, and this is how while loops typically work. The condition is re-evaluated each iteration, so modifying the variables used in the condition can change whether the loop continues or exits. This is the standard way to control while loop termination.

Modifying while loop condition variable:
• You can modify condition variables
• Condition is re-evaluated each iteration
• Modifying variables affects loop continuation
• This is how while loops work

How it works:
• Condition is checked each iteration
• Variables in condition can be modified
• Modified values affect next condition check
• Loop continues or exits based on updated condition

Example:
x = 0
while x < 5:
    x += 1  # Modifies condition variable
    print(x)  # Prints 1, 2, 3, 4, 5
    # Condition x < 5 is re-evaluated each iteration

Common uses:
• Counter loops: while x < n: x += 1
• Condition-based termination
• Variable-based loop control
• Standard while loop pattern

Example: Yes, you can modify the condition variable in a while loop. The condition is re-evaluated each iteration, so modifying the variables affects whether the loop continues or exits. This is how while loops typically work.

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
  
  // 51-60: Enumerate and Zip
  (_i: number) => ({ 
    q: `What is list(enumerate(['a', 'b', 'c']))?`, 
    o: ["[(0, 'a'), (1, 'b'), (2, 'c')]", "['a', 'b', 'c']", "Error", "None"], 
    c: 0, 
    e: "enumerate() adds index to each element.",
    de: `The enumerate() function adds an index to each element of an iterable, returning tuples of (index, element). list(enumerate(['a', 'b', 'c'])) creates [(0, 'a'), (1, 'b'), (2, 'c')] because enumerate() pairs each element with its index, starting from 0 by default.

enumerate() function:
• Adds index to each element
• Returns (index, element) tuples
• Default start index is 0
• Useful for indexed iteration

How it works:
• enumerate(['a', 'b', 'c']) creates iterator
• Pairs each element with its index
• (0, 'a'), (1, 'b'), (2, 'c')
• list() converts to list of tuples

Example:
for index, value in enumerate(['a', 'b', 'c']):
    print(f"{index}: {value}")
# Output:
# 0: a
# 1: b
# 2: c

Common uses:
• Indexed iteration: for i, item in enumerate(items):
• Getting both index and value
• Position tracking
• Index-based operations

Example: list(enumerate(['a', 'b', 'c'])) returns [(0, 'a'), (1, 'b'), (2, 'c')] because enumerate() pairs each element with its index, starting from 0.

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
  (_i: number) => ({ 
    q: `What is list(enumerate(['a', 'b'], start=1))?`, 
    o: ["[(1, 'a'), (2, 'b')]", "[(0, 'a'), (1, 'b')]", "Error", "None"], 
    c: 0, 
    e: "start parameter changes starting index.",
    de: `The enumerate() function's start parameter allows you to specify the starting index. list(enumerate(['a', 'b'], start=1)) creates [(1, 'a'), (2, 'b')] because enumerate() pairs each element with its index, starting from 1 instead of the default 0.

enumerate() with start:
• start parameter sets starting index
• enumerate(['a', 'b'], start=1) starts at 1
• Returns (1, 'a'), (2, 'b')
• Useful for 1-based indexing

How it works:
• enumerate(['a', 'b'], start=1) creates iterator
• Pairs each element with index starting at 1
• (1, 'a'), (2, 'b')
• list() converts to list of tuples

Example:
for index, value in enumerate(['a', 'b'], start=1):
    print(f"{index}: {value}")
# Output:
# 1: a
# 2: b

Common uses:
• 1-based indexing: for i, item in enumerate(items, start=1):
• Custom starting index
• Human-readable numbering
• Position tracking

Example: list(enumerate(['a', 'b'], start=1)) returns [(1, 'a'), (2, 'b')] because the start=1 parameter makes enumerate() start indexing at 1 instead of 0.

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
  (_i: number) => ({ 
    q: `What is list(zip([1, 2], ['a', 'b']))?`, 
    o: ["[(1, 'a'), (2, 'b')]", "[1, 2, 'a', 'b']", "Error", "None"], 
    c: 0, 
    e: "zip() pairs elements from iterables.",
    de: `The zip() function pairs corresponding elements from multiple iterables, returning tuples. list(zip([1, 2], ['a', 'b'])) creates [(1, 'a'), (2, 'b')] because zip() pairs the first element of each iterable, then the second, and so on. This is useful for iterating over multiple sequences simultaneously.

zip() function:
• Pairs elements from multiple iterables
• Returns tuples of corresponding elements
• Stops at shortest iterable
• Useful for parallel iteration

How it works:
• zip([1, 2], ['a', 'b']) creates iterator
• Pairs corresponding elements: (1, 'a'), (2, 'b')
• Returns tuples
• list() converts to list of tuples

Example:
for num, letter in zip([1, 2], ['a', 'b']):
    print(f"{num}: {letter}")
# Output:
# 1: a
# 2: b

Common uses:
• Parallel iteration: for x, y in zip(list1, list2):
• Pairing elements
• Combining sequences
• Multi-sequence processing

Example: list(zip([1, 2], ['a', 'b'])) returns [(1, 'a'), (2, 'b')] because zip() pairs corresponding elements from both iterables.

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
  (_i: number) => ({ 
    q: `What is list(zip([1, 2], ['a', 'b', 'c']))?`, 
    o: ["[(1, 'a'), (2, 'b')]", "[(1, 'a'), (2, 'b'), (None, 'c')]", "Error", "None"], 
    c: 0, 
    e: "zip() stops at shortest iterable.",
    de: `The zip() function stops at the shortest iterable when given iterables of different lengths. list(zip([1, 2], ['a', 'b', 'c'])) creates [(1, 'a'), (2, 'b')] because zip() pairs elements until the shortest iterable is exhausted, ignoring the extra 'c' in the second iterable.

zip() with different lengths:
• zip() stops at shortest iterable
• Extra elements are ignored
• No None values inserted
• Result length equals shortest input

How it works:
• zip([1, 2], ['a', 'b', 'c']) creates iterator
• Pairs until shortest iterable exhausted
• (1, 'a'), (2, 'b') - stops here
• 'c' is ignored (no pair available)

Example:
list(zip([1, 2], ['a', 'b', 'c']))  # [(1, 'a'), (2, 'b')]
list(zip([1, 2, 3], ['a', 'b']))     # [(1, 'a'), (2, 'b')]

Common uses:
• Parallel iteration with different lengths
• Pairing until shortest exhausted
• Combining sequences
• Multi-sequence processing

Example: list(zip([1, 2], ['a', 'b', 'c'])) returns [(1, 'a'), (2, 'b')] because zip() stops at the shortest iterable, ignoring the extra 'c'.

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
  (_i: number) => ({ 
    q: `What is list(zip([1, 2, 3], ['a', 'b']))?`, 
    o: ["[(1, 'a'), (2, 'b')]", "[(1, 'a'), (2, 'b'), (3, None)]", "Error", "None"], 
    c: 0, 
    e: "zip() stops at shortest iterable.",
    de: `The zip() function stops at the shortest iterable when given iterables of different lengths. list(zip([1, 2, 3], ['a', 'b'])) creates [(1, 'a'), (2, 'b')] because zip() pairs elements until the shortest iterable is exhausted, ignoring the extra 3 in the first iterable. No None values are inserted.

zip() with different lengths:
• zip() stops at shortest iterable
• Extra elements are ignored
• No None values inserted
• Result length equals shortest input

How it works:
• zip([1, 2, 3], ['a', 'b']) creates iterator
• Pairs until shortest iterable exhausted
• (1, 'a'), (2, 'b') - stops here
• 3 is ignored (no pair available)

Example:
list(zip([1, 2, 3], ['a', 'b']))     # [(1, 'a'), (2, 'b')]
list(zip([1, 2], ['a', 'b', 'c']))   # [(1, 'a'), (2, 'b')]

Common uses:
• Parallel iteration with different lengths
• Pairing until shortest exhausted
• Combining sequences
• Multi-sequence processing

Example: list(zip([1, 2, 3], ['a', 'b'])) returns [(1, 'a'), (2, 'b')] because zip() stops at the shortest iterable, ignoring the extra 3.

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
  (_i: number) => ({ 
    q: `What is list(zip([1], [2], [3]))?`, 
    o: ["[(1, 2, 3)]", "[1, 2, 3]", "Error", "None"], 
    c: 0, 
    e: "zip() can combine multiple iterables.",
    de: `The zip() function can combine multiple iterables, not just two. list(zip([1], [2], [3])) creates [(1, 2, 3)] because zip() pairs corresponding elements from all iterables, creating tuples with as many elements as there are input iterables. This is useful for combining three or more sequences.

zip() with multiple iterables:
• zip() can combine any number of iterables
• Returns tuples with elements from all iterables
• Stops at shortest iterable
• Useful for multi-sequence pairing

How it works:
• zip([1], [2], [3]) creates iterator
• Pairs corresponding elements from all three
• (1, 2, 3) - single tuple with three elements
• list() converts to list of tuples

Example:
for x, y, z in zip([1], [2], [3]):
    print(f"{x}, {y}, {z}")  # Output: 1, 2, 3

Common uses:
• Multi-sequence iteration: for a, b, c in zip(list1, list2, list3):
• Combining multiple sequences
• Parallel processing
• Multi-dimensional pairing

Example: list(zip([1], [2], [3])) returns [(1, 2, 3)] because zip() can combine multiple iterables, pairing corresponding elements from all of them.

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
  (_i: number) => ({ 
    q: `What is list(zip([]))?`, 
    o: ["[]", "Error", "None", "[()]"], 
    c: 0, 
    e: "zip() with empty iterable returns empty list.",
    de: `When zip() is called with an empty iterable, it returns an empty iterator, which converts to an empty list. list(zip([])) creates [] because there are no elements to pair. zip() with any empty iterable results in an empty result, regardless of other arguments.

zip() with empty iterable:
• zip([]) returns empty iterator
• No elements to pair
• Result is empty
• Works with any empty iterable

How it works:
• zip([]) creates iterator
• No elements to process
• Iterator is empty
• list() converts to []

Example:
list(zip([]))              # []
list(zip([], [1, 2]))      # [] (empty first iterable)
list(zip([1, 2], []))      # [] (empty second iterable)

Common uses:
• Edge case handling
• Conditional zipping
• Empty sequence handling
• Default empty results

Example: list(zip([])) returns [] because zip() with an empty iterable has no elements to pair, resulting in an empty list.

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
  (_i: number) => ({ 
    q: `Can you use enumerate() with strings?`, 
    o: ["Yes", "No", "Only in Python 2", "Error"], 
    c: 0, 
    e: "enumerate() works with any iterable.",
    de: `Yes, you can use enumerate() with strings because enumerate() works with any iterable, including strings. enumerate("abc") pairs each character with its index, creating (0, 'a'), (1, 'b'), (2, 'c'). This is useful for character-by-character processing with position tracking.

enumerate() with strings:
• enumerate() works with any iterable
• Strings are iterables
• Pairs each character with its index
• Useful for character processing

How it works:
• enumerate("abc") creates iterator
• Pairs each character with its index
• (0, 'a'), (1, 'b'), (2, 'c')
• Works like enumerate() with lists

Example:
for index, char in enumerate("abc"):
    print(f"{index}: {char}")
# Output:
# 0: a
# 1: b
# 2: c

Common uses:
• Character processing: for i, char in enumerate(text):
• Position tracking in strings
• Indexed character operations
• String analysis

Example: Yes, you can use enumerate() with strings. enumerate() works with any iterable, so enumerate("abc") pairs each character with its index: (0, 'a'), (1, 'b'), (2, 'c').

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
  (_i: number) => ({ 
    q: `Can you use zip() with strings?`, 
    o: ["Yes", "No", "Only in Python 2", "Error"], 
    c: 0, 
    e: "zip() works with any iterables.",
    de: `Yes, you can use zip() with strings because zip() works with any iterables, including strings. zip("ab", "cd") pairs corresponding characters, creating ('a', 'c'), ('b', 'd'). This is useful for character-by-character pairing and parallel string processing.

zip() with strings:
• zip() works with any iterables
• Strings are iterables
• Pairs corresponding characters
• Useful for parallel string processing

How it works:
• zip("ab", "cd") creates iterator
• Pairs corresponding characters
• ('a', 'c'), ('b', 'd')
• Works like zip() with lists

Example:
for char1, char2 in zip("ab", "cd"):
    print(f"{char1}, {char2}")
# Output:
# a, c
# b, d

Common uses:
• Parallel string processing: for c1, c2 in zip(str1, str2):
• Character pairing
• String comparison
• Multi-string operations

Example: Yes, you can use zip() with strings. zip() works with any iterables, so zip("ab", "cd") pairs corresponding characters: ('a', 'c'), ('b', 'd').

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
  (_i: number) => ({ 
    q: `What is list(zip('ab', 'cd'))?`, 
    o: ["[('a', 'c'), ('b', 'd')]", "['a', 'b', 'c', 'd']", "Error", "None"], 
    c: 0, 
    e: "zip() works with strings.",
    de: `The zip() function works with strings, pairing corresponding characters. list(zip('ab', 'cd')) creates [('a', 'c'), ('b', 'd')] because zip() pairs the first character of each string, then the second, and so on. This is useful for character-by-character pairing and parallel string processing.

zip() with strings:
• zip('ab', 'cd') pairs corresponding characters
• ('a', 'c') - first characters paired
• ('b', 'd') - second characters paired
• Returns list of character tuples

How it works:
• zip('ab', 'cd') creates iterator
• Pairs corresponding characters
• ('a', 'c'), ('b', 'd')
• list() converts to list of tuples

Example:
for char1, char2 in zip('ab', 'cd'):
    print(f"{char1}, {char2}")
# Output:
# a, c
# b, d

Common uses:
• Parallel string processing: for c1, c2 in zip(str1, str2):
• Character pairing
• String comparison
• Multi-string operations

Example: list(zip('ab', 'cd')) returns [('a', 'c'), ('b', 'd')] because zip() pairs corresponding characters from both strings.

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
  
  // 61-70: List Comprehensions Basics
  (_i: number) => ({ 
    q: `What is [x for x in range(3)]?`, 
    o: ["[0, 1, 2]", "[1, 2, 3]", "[0, 1, 2, 3]", "Error"], 
    c: 0, 
    e: "List comprehension creates list from range.",
    de: `A list comprehension is a concise way to create lists. [x for x in range(3)] creates [0, 1, 2] because it iterates over range(3) (which generates 0, 1, 2) and includes each value x in the resulting list. This is equivalent to list(range(3)) but demonstrates the basic list comprehension syntax.

List comprehension syntax:
• [x for x in range(3)] = [0, 1, 2]
• Syntax: [expression for item in iterable]
• Iterates over range(3): 0, 1, 2
• Includes each value in list

How it works:
• for x in range(3) iterates: x = 0, 1, 2
• Expression x is evaluated for each iteration
• Results collected into list: [0, 1, 2]
• Equivalent to: list(range(3))

Example:
[x for x in range(3)]  # [0, 1, 2]
[x for x in range(5)]  # [0, 1, 2, 3, 4]

Common uses:
• Creating lists: numbers = [x for x in range(n)]
• List generation
• Iterable conversion
• Concise list creation

Example: [x for x in range(3)] returns [0, 1, 2] because it iterates over range(3) and includes each value in the resulting list.

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
  (_i: number) => ({ 
    q: `What is [x * 2 for x in range(3)]?`, 
    o: ["[0, 2, 4]", "[2, 4, 6]", "[0, 1, 2]", "Error"], 
    c: 0, 
    e: "List comprehension with transformation.",
    de: `List comprehensions can transform elements using expressions. [x * 2 for x in range(3)] creates [0, 2, 4] because it iterates over range(3) (0, 1, 2) and multiplies each value by 2. The expression x * 2 is evaluated for each element, transforming the values.

List comprehension with transformation:
• [x * 2 for x in range(3)] = [0, 2, 4]
• Expression: x * 2 (transforms each element)
• Iterates: x = 0, 1, 2
• Transforms: 0*2=0, 1*2=2, 2*2=4

How it works:
• for x in range(3) iterates: x = 0, 1, 2
• Expression x * 2 evaluated for each: 0, 2, 4
• Results collected: [0, 2, 4]
• Transformation applied to each element

Example:
[x * 2 for x in range(3)]     # [0, 2, 4]
[x + 1 for x in range(3)]     # [1, 2, 3]
[x ** 2 for x in range(3)]    # [0, 1, 4]

Common uses:
• Transforming elements: doubled = [x * 2 for x in numbers]
• Element modification
• Value calculation
• List transformation

Example: [x * 2 for x in range(3)] returns [0, 2, 4] because it multiplies each element from range(3) by 2.

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
  (_i: number) => ({ 
    q: `What is [x for x in range(5) if x % 2 == 0]?`, 
    o: ["[0, 2, 4]", "[1, 3]", "[0, 1, 2, 3, 4]", "Error"], 
    c: 0, 
    e: "List comprehension with filter (even numbers).",
    de: `List comprehensions can filter elements using if conditions. [x for x in range(5) if x % 2 == 0] creates [0, 2, 4] because it iterates over range(5) (0, 1, 2, 3, 4) and includes only elements where x % 2 == 0 (even numbers). The if clause filters the elements.

List comprehension with filter:
• [x for x in range(5) if x % 2 == 0] = [0, 2, 4]
• Condition: x % 2 == 0 (even numbers)
• Iterates: x = 0, 1, 2, 3, 4
• Filters: includes only 0, 2, 4 (even)

How it works:
• for x in range(5) iterates: x = 0, 1, 2, 3, 4
• if x % 2 == 0 filters: keeps 0, 2, 4
• Results collected: [0, 2, 4]
• Only elements matching condition included

Example:
[x for x in range(5) if x % 2 == 0]  # [0, 2, 4] (even)
[x for x in range(5) if x > 2]        # [3, 4] (greater than 2)

Common uses:
• Filtering: evens = [x for x in numbers if x % 2 == 0]
• Conditional inclusion
• Element selection
• List filtering

Example: [x for x in range(5) if x % 2 == 0] returns [0, 2, 4] because it filters range(5) to include only even numbers.

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
  (_i: number) => ({ 
    q: `What is [x for x in range(5) if x % 2 == 1]?`, 
    o: ["[1, 3]", "[0, 2, 4]", "[0, 1, 2, 3, 4]", "Error"], 
    c: 0, 
    e: "List comprehension with filter (odd numbers).",
    de: `List comprehensions can filter elements using if conditions. [x for x in range(5) if x % 2 == 1] creates [1, 3] because it iterates over range(5) (0, 1, 2, 3, 4) and includes only elements where x % 2 == 1 (odd numbers). The if clause filters the elements.

List comprehension with filter:
• [x for x in range(5) if x % 2 == 1] = [1, 3]
• Condition: x % 2 == 1 (odd numbers)
• Iterates: x = 0, 1, 2, 3, 4
• Filters: includes only 1, 3 (odd)

How it works:
• for x in range(5) iterates: x = 0, 1, 2, 3, 4
• if x % 2 == 1 filters: keeps 1, 3
• Results collected: [1, 3]
• Only elements matching condition included

Example:
[x for x in range(5) if x % 2 == 1]  # [1, 3] (odd)
[x for x in range(5) if x < 3]       # [0, 1, 2] (less than 3)

Common uses:
• Filtering: odds = [x for x in numbers if x % 2 == 1]
• Conditional inclusion
• Element selection
• List filtering

Example: [x for x in range(5) if x % 2 == 1] returns [1, 3] because it filters range(5) to include only odd numbers.

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
  (_i: number) => ({ 
    q: `What is [x ** 2 for x in range(3)]?`, 
    o: ["[0, 1, 4]", "[1, 4, 9]", "[0, 1, 2]", "Error"], 
    c: 0, 
    e: "List comprehension with exponentiation.",
    de: `List comprehensions can use any expression, including exponentiation. [x ** 2 for x in range(3)] creates [0, 1, 4] because it iterates over range(3) (0, 1, 2) and squares each value. The expression x ** 2 calculates the square of each element.

List comprehension with exponentiation:
• [x ** 2 for x in range(3)] = [0, 1, 4]
• Expression: x ** 2 (squares each element)
• Iterates: x = 0, 1, 2
• Transforms: 0**2=0, 1**2=1, 2**2=4

How it works:
• for x in range(3) iterates: x = 0, 1, 2
• Expression x ** 2 evaluated: 0, 1, 4
• Results collected: [0, 1, 4]
• Exponentiation applied to each element

Example:
[x ** 2 for x in range(3)]    # [0, 1, 4] (squares)
[x ** 3 for x in range(3)]     # [0, 1, 8] (cubes)
[x ** 0.5 for x in [4, 9, 16]] # [2.0, 3.0, 4.0] (square roots)

Common uses:
• Squaring: squares = [x ** 2 for x in numbers]
• Mathematical transformations
• Power operations
• Value calculation

Example: [x ** 2 for x in range(3)] returns [0, 1, 4] because it squares each element from range(3).

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
  (_i: number) => ({
    q: `What is [x if x % 2 == 0 else x * 2 for x in range(3)]?`,
    o: ["[0, 2, 4]", "[0, 1, 4]", "[0, 2, 2]", "Error"],
    c: 2,
    e: "List comprehension with conditional expression.",
    de: `List comprehensions can use conditional expressions (ternary operators) in the expression part. [x if x % 2 == 0 else x * 2 for x in range(3)] creates [0, 2, 2] because it iterates over range(3) (0, 1, 2) and uses conditional logic to transform elements. For even x, the value is kept; for odd x, it is doubled. The conditional expression evaluates as written, and the result is [0, 2, 2].

List comprehension with conditional:
• [x if x % 2 == 0 else x * 2 for x in range(3)] = [0, 2, 2]
• Conditional expression: value_if_true if condition else value_if_false
• Condition: x % 2 == 0 (even check)
• Iterates: x = 0, 1, 2

Step-by-step:
• x=0: 0 % 2 == 0 is True → use x = 0
• x=1: 1 % 2 == 0 is False → use x * 2 = 2
• x=2: 2 % 2 == 0 is True → use x = 2
• Results: [0, 2, 2]

How it works:
• for x in range(3) iterates: x = 0, 1, 2
• Conditional: x if x % 2 == 0 else x * 2
• For each x, evaluates conditional expression
• Results collected into list: [0, 2, 2]

Examples:
• [x if x % 2 == 0 else x * 2 for x in range(3)]  # [0, 2, 2]
• [x * 2 if x > 0 else x for x in range(3)]      # [0, 2, 4]

Common uses:
• Conditional transformation: [x if condition else transform(x) for x in items]
• Element modification based on conditions
• Value selection
• Conditional list creation

Example: [x if x % 2 == 0 else x * 2 for x in range(3)] uses a conditional expression to transform elements based on whether they're even or odd, resulting in [0, 2, 2].

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
  
  // 71-80: Dictionary and Set Comprehensions
  (_i: number) => ({ 
    q: `What is {x: x**2 for x in range(3)}?`, 
    o: ["{0: 0, 1: 1, 2: 4}", "{0, 1, 4}", "Error", "None"], 
    c: 0, 
    e: "Dictionary comprehension.",
    de: `Dictionary comprehensions create dictionaries concisely, similar to list comprehensions. {x: x**2 for x in range(3)} creates {0: 0, 1: 1, 2: 4} because it iterates over range(3) (0, 1, 2) and creates key-value pairs where the key is x and the value is x**2 (squared). This is useful for creating dictionaries from iterables.

Dictionary comprehension syntax:
• {x: x**2 for x in range(3)} = {0: 0, 1: 1, 2: 4}
• Syntax: {key: value for item in iterable}
• Iterates over range(3): x = 0, 1, 2
• Creates pairs: key=x, value=x**2

How it works:
• for x in range(3) iterates: x = 0, 1, 2
• For each x, creates key-value pair: x: x**2
• 0: 0**2=0, 1: 1**2=1, 2: 2**2=4
• Results collected: {0: 0, 1: 1, 2: 4}

Example:
{x: x**2 for x in range(3)}    # {0: 0, 1: 1, 2: 4}
{x: x*2 for x in range(3)}     # {0: 0, 1: 2, 2: 4}

Common uses:
• Creating dictionaries: squares = {x: x**2 for x in range(n)}
• Key-value mappings
• Dictionary transformations
• Efficient dictionary creation

Example: {x: x**2 for x in range(3)} returns {0: 0, 1: 1, 2: 4} because it creates a dictionary with keys from range(3) and values as their squares.

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
  (_i: number) => ({ 
    q: `What is {x**2 for x in range(3)}?`, 
    o: ["{0, 1, 4}", "{0: 0, 1: 1, 2: 4}", "Error", "None"], 
    c: 0, 
    e: "Set comprehension.",
    de: `Set comprehensions create sets concisely, similar to list comprehensions but with curly braces and no colons. {x**2 for x in range(3)} creates {0, 1, 4} because it iterates over range(3) (0, 1, 2) and creates a set with x**2 (squared) values. Sets automatically remove duplicates and are unordered.

Set comprehension syntax:
• {x**2 for x in range(3)} = {0, 1, 4}
• Syntax: {expression for item in iterable}
• Note: No colon (:) - that's for dictionaries
• Iterates over range(3): x = 0, 1, 2
• Creates set with x**2 values

How it works:
• for x in range(3) iterates: x = 0, 1, 2
• For each x, evaluates expression x**2
• 0**2=0, 1**2=1, 2**2=4
• Results collected into set: {0, 1, 4}
• Sets remove duplicates (if any)

Example:
{x**2 for x in range(3)}    # {0, 1, 4} (set)
{x**2 for x in [-1, 0, 1]}  # {0, 1} (duplicates removed)

Common uses:
• Creating sets: squares = {x**2 for x in range(n)}
• Unique value sets
• Set transformations
• Efficient set creation

Example: {x**2 for x in range(3)} returns {0, 1, 4} because it creates a set with the squared values from range(3).

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
  (_i: number) => ({ 
    q: `What is {x: x*2 for x in range(3)}?`, 
    o: ["{0: 0, 1: 2, 2: 4}", "{0, 2, 4}", "Error", "None"], 
    c: 0, 
    e: "Dictionary comprehension with multiplication.",
    de: `Dictionary comprehensions can use any expression for both keys and values. {x: x*2 for x in range(3)} creates {0: 0, 1: 2, 2: 4} because it iterates over range(3) (0, 1, 2) and creates key-value pairs where the key is x and the value is x*2 (doubled). This demonstrates dictionary comprehensions with transformations.

Dictionary comprehension with transformation:
• {x: x*2 for x in range(3)} = {0: 0, 1: 2, 2: 4}
• Key: x (from range)
• Value: x*2 (doubled)
• Iterates: x = 0, 1, 2
• Creates pairs: 0:0, 1:2, 2:4

How it works:
• for x in range(3) iterates: x = 0, 1, 2
• For each x, creates key-value pair: x: x*2
• 0: 0*2=0, 1: 1*2=2, 2: 2*2=4
• Results collected: {0: 0, 1: 2, 2: 4}

Example:
{x: x*2 for x in range(3)}     # {0: 0, 1: 2, 2: 4}
{x: x+1 for x in range(3)}     # {0: 1, 1: 2, 2: 3}

Common uses:
• Creating dictionaries: doubled = {x: x*2 for x in numbers}
• Value transformations
• Key-value mappings
• Dictionary generation

Example: {x: x*2 for x in range(3)} returns {0: 0, 1: 2, 2: 4} because it creates a dictionary with keys from range(3) and values as their doubles.

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
  (_i: number) => ({ 
    q: `What is {x for x in range(5) if x % 2 == 0}?`, 
    o: ["{0, 2, 4}", "{1, 3}", "{0, 1, 2, 3, 4}", "Error"], 
    c: 0, 
    e: "Set comprehension with filter.",
    de: `Set comprehensions can filter elements using if conditions, just like list comprehensions. {x for x in range(5) if x % 2 == 0} creates {0, 2, 4} because it iterates over range(5) (0, 1, 2, 3, 4) and includes only elements where x % 2 == 0 (even numbers). The if clause filters the elements before they're added to the set.

Set comprehension with filter:
• {x for x in range(5) if x % 2 == 0} = {0, 2, 4}
• Condition: x % 2 == 0 (even numbers)
• Iterates: x = 0, 1, 2, 3, 4
• Filters: includes only 0, 2, 4 (even)
• Results collected into set: {0, 2, 4}

How it works:
• for x in range(5) iterates: x = 0, 1, 2, 3, 4
• if x % 2 == 0 filters: keeps 0, 2, 4
• Results collected into set: {0, 2, 4}
• Only elements matching condition included

Example:
{x for x in range(5) if x % 2 == 0}  # {0, 2, 4} (even)
{x for x in range(5) if x > 2}        # {3, 4} (greater than 2)

Common uses:
• Filtering sets: evens = {x for x in numbers if x % 2 == 0}
• Conditional inclusion
• Element selection
• Set filtering

Example: {x for x in range(5) if x % 2 == 0} returns {0, 2, 4} because it filters range(5) to include only even numbers in the set.

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
  (_i: number) => ({ 
    q: `What is {x: x for x in 'abc'}?`, 
    o: ["{'a': 'a', 'b': 'b', 'c': 'c'}", "{'a', 'b', 'c'}", "Error", "None"], 
    c: 0, 
    e: "Dictionary comprehension with string.",
    de: `Dictionary comprehensions work with any iterable, including strings. {x: x for x in 'abc'} creates {'a': 'a', 'b': 'b', 'c': 'c'} because it iterates over the string 'abc' character by character, creating key-value pairs where both the key and value are the same character. This is useful for creating character-to-character mappings.

Dictionary comprehension with string:
• {x: x for x in 'abc'} = {'a': 'a', 'b': 'b', 'c': 'c'}
• Iterates over string 'abc': characters 'a', 'b', 'c'
• Creates pairs: key=x, value=x
• Each character becomes both key and value

How it works:
• for x in 'abc' iterates: x = 'a', 'b', 'c'
• For each character x, creates pair: x: x
• 'a': 'a', 'b': 'b', 'c': 'c'
• Results collected: {'a': 'a', 'b': 'b', 'c': 'c'}

Example:
{x: x for x in 'abc'}         # {'a': 'a', 'b': 'b', 'c': 'c'}
{x: x.upper() for x in 'abc'} # {'a': 'A', 'b': 'B', 'c': 'C'}

Common uses:
• Character mappings: identity = {c: c for c in string}
• String transformations
• Character-to-character mappings
• Dictionary generation from strings

Example: {x: x for x in 'abc'} returns {'a': 'a', 'b': 'b', 'c': 'c'} because it creates a dictionary with characters as both keys and values.

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
  (_i: number) => ({ 
    q: `What is {x.upper() for x in 'abc'}?`, 
    o: ["{'A', 'B', 'C'}", "{'a', 'b', 'c'}", "Error", "None"], 
    c: 0, 
    e: "Set comprehension with string method.",
    de: `Set comprehensions work with any iterable and can use method calls in the expression. {x.upper() for x in 'abc'} creates {'A', 'B', 'C'} because it iterates over the string 'abc' character by character, applies the .upper() method to each character (converting to uppercase), and collects the results into a set. This demonstrates set comprehensions with string transformations.

Set comprehension with string method:
• {x.upper() for x in 'abc'} = {'A', 'B', 'C'}
• Iterates over string 'abc': characters 'a', 'b', 'c'
• Applies .upper() to each: 'A', 'B', 'C'
• Results collected into set: {'A', 'B', 'C'}

How it works:
• for x in 'abc' iterates: x = 'a', 'b', 'c'
• For each character x, evaluates x.upper()
• 'a'.upper()='A', 'b'.upper()='B', 'c'.upper()='C'
• Results collected into set: {'A', 'B', 'C'}

Example:
{x.upper() for x in 'abc'}    # {'A', 'B', 'C'}
{x.lower() for x in 'ABC'}    # {'a', 'b', 'c'}

Common uses:
• String transformations: uppercase = {c.upper() for c in text}
• Character transformations
• Set generation from strings
• Method-based transformations

Example: {x.upper() for x in 'abc'} returns {'A', 'B', 'C'} because it creates a set with uppercase versions of each character.

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
  (_i: number) => ({ 
    q: `What is {x: len(x) for x in ['a', 'ab', 'abc']}?`, 
    o: ["{'a': 1, 'ab': 2, 'abc': 3}", "{1, 2, 3}", "Error", "None"], 
    c: 0, 
    e: "Dictionary comprehension with len().",
    de: `Dictionary comprehensions can use function calls in expressions. {x: len(x) for x in ['a', 'ab', 'abc']} creates {'a': 1, 'ab': 2, 'abc': 3} because it iterates over the list ['a', 'ab', 'abc'], creating key-value pairs where the key is the string and the value is its length. This is useful for creating mappings from strings to their lengths.

Dictionary comprehension with len():
• {x: len(x) for x in ['a', 'ab', 'abc']} = {'a': 1, 'ab': 2, 'abc': 3}
• Iterates over list: 'a', 'ab', 'abc'
• Creates pairs: key=x (string), value=len(x) (length)
• Maps each string to its length

How it works:
• for x in ['a', 'ab', 'abc'] iterates: x = 'a', 'ab', 'abc'
• For each string x, creates pair: x: len(x)
• 'a': len('a')=1, 'ab': len('ab')=2, 'abc': len('abc')=3
• Results collected: {'a': 1, 'ab': 2, 'abc': 3}

Example:
{x: len(x) for x in ['a', 'ab', 'abc']}  # {'a': 1, 'ab': 2, 'abc': 3}
{x: len(x) for x in ['hello', 'hi']}     # {'hello': 5, 'hi': 2}

Common uses:
• Length mappings: lengths = {s: len(s) for s in strings}
• String-to-number mappings
• Function-based transformations
• Dictionary generation with functions

Example: {x: len(x) for x in ['a', 'ab', 'abc']} returns {'a': 1, 'ab': 2, 'abc': 3} because it creates a dictionary mapping each string to its length.

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
  (_i: number) => ({ 
    q: `What is {x for x in 'hello'}?`, 
    o: ["{'h', 'e', 'l', 'o'}", "{'hello'}", "Error", "None"], 
    c: 0, 
    e: "Set comprehension removes duplicates.",
    de: `Set comprehensions automatically remove duplicate values because sets only contain unique elements. {x for x in 'hello'} creates {'h', 'e', 'l', 'o'} because it iterates over the string 'hello' character by character, but the set only contains unique characters. The string 'hello' has two 'l's, but the set contains only one 'l'. This is a key feature of sets.

Set comprehension removes duplicates:
• {x for x in 'hello'} = {'h', 'e', 'l', 'o'}
• String 'hello' has characters: 'h', 'e', 'l', 'l', 'o'
• Set contains unique characters only
• Duplicate 'l' is removed

How it works:
• for x in 'hello' iterates: x = 'h', 'e', 'l', 'l', 'o'
• Creates set with each character
• Sets only contain unique elements
• Duplicate 'l' appears only once: {'h', 'e', 'l', 'o'}

Example:
{x for x in 'hello'}     # {'h', 'e', 'l', 'o'} (duplicates removed)
{x for x in 'hello'}     # {'h', 'e', 'l', 'o'} (not {'h', 'e', 'l', 'l', 'o'})

Common uses:
• Removing duplicates: unique = {x for x in items}
• Finding unique values
• Deduplication
• Set generation with automatic deduplication

Example: {x for x in 'hello'} returns {'h', 'e', 'l', 'o'} because sets automatically remove duplicate values, so the two 'l's in 'hello' become one 'l' in the set.

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
  (_i: number) => ({ 
    q: `What is {x: x*2 for x in range(3) if x > 0}?`, 
    o: ["{1: 2, 2: 4}", "{0: 0, 1: 2, 2: 4}", "Error", "None"], 
    c: 0, 
    e: "Dictionary comprehension with filter.",
    de: `Dictionary comprehensions can combine filters with transformations. {x: x*2 for x in range(3) if x > 0} creates {1: 2, 2: 4} because it iterates over range(3) (0, 1, 2), filters to include only x > 0 (1, 2), and creates key-value pairs where the key is x and the value is x*2. The if clause filters elements before creating pairs.

Dictionary comprehension with filter:
• {x: x*2 for x in range(3) if x > 0} = {1: 2, 2: 4}
• Condition: x > 0 (positive numbers)
• Iterates: x = 0, 1, 2
• Filters: includes only 1, 2 (x > 0)
• Creates pairs: 1: 2, 2: 4

How it works:
• for x in range(3) iterates: x = 0, 1, 2
• if x > 0 filters: keeps 1, 2 (excludes 0)
• For each remaining x, creates pair: x: x*2
• 1: 2, 2: 4
• Results collected: {1: 2, 2: 4}

Example:
{x: x*2 for x in range(3) if x > 0}   # {1: 2, 2: 4}
{x: x**2 for x in range(5) if x % 2 == 0}  # {0: 0, 2: 4, 4: 16}

Common uses:
• Filtered dictionaries: positive_doubled = {x: x*2 for x in numbers if x > 0}
• Conditional dictionary creation
• Filtered transformations
• Dictionary generation with filters

Example: {x: x*2 for x in range(3) if x > 0} returns {1: 2, 2: 4} because it filters range(3) to include only positive numbers, then creates pairs with doubled values.

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
  (_i: number) => ({ 
    q: `What is {x if x % 2 == 0 else x*2 for x in range(3)}?`, 
    o: ["{0, 2}", "{0, 2, 4}", "Error", "None"], 
    c: 0, 
    e: "Set comprehension with conditional.",
    de: `Set comprehensions can use conditional expressions (ternary operators) in the expression part. {x if x % 2 == 0 else x*2 for x in range(3)} creates {0, 2} because it iterates over range(3) (0, 1, 2) and uses conditional logic: if x is even (x % 2 == 0), use x, otherwise use x*2. The results are collected into a set, and duplicates are removed. This demonstrates set comprehensions with conditional transformations.

Set comprehension with conditional:
• {x if x % 2 == 0 else x*2 for x in range(3)} = {0, 2}
• Conditional: x if x % 2 == 0 else x*2
• Iterates: x = 0, 1, 2
• Applies conditional to each
• Results collected into set: {0, 2} (duplicates removed)

How it works:
• for x in range(3) iterates: x = 0, 1, 2
• Conditional evaluated for each:
  - x=0: 0 % 2 == 0 → True → x = 0 → result: 0
  - x=1: 1 % 2 == 0 → False → x*2 = 2 → result: 2
  - x=2: 2 % 2 == 0 → True → x = 2 → result: 2
• Results: 0, 2, 2
• Set removes duplicates: {0, 2}

Example:
{x if x % 2 == 0 else x*2 for x in range(3)}  # {0, 2}
{x*2 if x > 0 else x for x in range(3)}       # {0, 2, 4}

Common uses:
• Conditional sets: transformed = {x if condition else transform(x) for x in items}
• Element modification based on conditions
• Value selection
• Conditional set creation

Example: {x if x % 2 == 0 else x*2 for x in range(3)} returns {0, 2} because it applies conditional logic to each element (0→0, 1→2, 2→2), and sets remove duplicates, resulting in {0, 2}.

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
  
  // 81-90: Generator Expressions
  (_i: number) => ({ 
    q: `What is (x for x in range(3))?`, 
    o: ["generator object", "[0, 1, 2]", "Error", "None"], 
    c: 0, 
    e: "Generator expression syntax.",
    de: `Generator expressions create generator objects, similar to list comprehensions but using parentheses instead of square brackets. (x for x in range(3)) creates a generator object because it uses parentheses, not square brackets. Generator expressions are lazy - they don't create all values immediately, saving memory. They're useful for large sequences.

Generator expression syntax:
• (x for x in range(3)) = generator object
• Syntax: (expression for item in iterable)
• Uses parentheses (not square brackets)
• Creates generator object (not list)

How it works:
• (x for x in range(3)) creates generator
• Generator is lazy - doesn't compute values yet
• Values computed on-demand when iterated
• More memory-efficient than lists

Example:
gen = (x for x in range(3))
list(gen)  # [0, 1, 2] (consumes generator)

Common uses:
• Memory efficiency: gen = (x**2 for x in range(1000))
• Large sequences
• On-demand computation
• Lazy evaluation

Example: (x for x in range(3)) returns a generator object because it uses parentheses, creating a lazy iterator rather than a list.

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
  (_i: number) => ({ 
    q: `What is list((x for x in range(3)))?`, 
    o: ["[0, 1, 2]", "(0, 1, 2)", "Error", "None"], 
    c: 0, 
    e: "Generator expression converted to list.",
    de: `You can convert generator expressions to lists using list(). list((x for x in range(3))) creates [0, 1, 2] because it takes the generator expression (x for x in range(3)), which would generate 0, 1, 2, and converts it to a list by consuming all values from the generator. This is useful when you need an actual list instead of a generator.

Generator to list conversion:
• list((x for x in range(3))) = [0, 1, 2]
• Generator expression: (x for x in range(3))
• list() consumes generator
• Creates list with all values: [0, 1, 2]

How it works:
• (x for x in range(3)) creates generator
• list() iterates through generator
• Values generated: 0, 1, 2
• Results collected into list: [0, 1, 2]

Example:
list((x for x in range(3)))    # [0, 1, 2]
list((x**2 for x in range(3))) # [0, 1, 4]

Common uses:
• Converting generators to lists: numbers = list((x for x in range(n)))
• Materializing lazy sequences
• Getting all values from generator
• List creation from generators

Example: list((x for x in range(3))) returns [0, 1, 2] because list() consumes the generator expression and collects all values into a list.

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
  (_i: number) => ({ 
    q: `What is tuple((x for x in range(3)))?`, 
    o: ["(0, 1, 2)", "[0, 1, 2]", "Error", "None"], 
    c: 0, 
    e: "Generator expression converted to tuple.",
    de: `You can convert generator expressions to tuples using tuple(). tuple((x for x in range(3))) creates (0, 1, 2) because it takes the generator expression (x for x in range(3)), which would generate 0, 1, 2, and converts it to a tuple by consuming all values from the generator. This is useful when you need an immutable sequence instead of a list.

Generator to tuple conversion:
• tuple((x for x in range(3))) = (0, 1, 2)
• Generator expression: (x for x in range(3))
• tuple() consumes generator
• Creates tuple with all values: (0, 1, 2)

How it works:
• (x for x in range(3)) creates generator
• tuple() iterates through generator
• Values generated: 0, 1, 2
• Results collected into tuple: (0, 1, 2)

Example:
tuple((x for x in range(3)))    # (0, 1, 2)
tuple((x**2 for x in range(3))) # (0, 1, 4)

Common uses:
• Converting generators to tuples: numbers = tuple((x for x in range(n)))
• Materializing lazy sequences into tuples
• Creating immutable sequences
• Tuple creation from generators

Example: tuple((x for x in range(3))) returns (0, 1, 2) because tuple() consumes the generator expression and collects all values into a tuple.

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
  (_i: number) => ({ 
    q: `What is sum(x for x in range(3))?`, 
    o: ["3", "0", "Error", "None"], 
    c: 0, 
    e: "sum() with generator expression.",
    de: `The sum() function works with generator expressions directly, without converting to a list first. sum(x for x in range(3)) returns 3 because it iterates over the generator expression (x for x in range(3)), which generates 0, 1, 2, and sums them: 0 + 1 + 2 = 3. This is memory-efficient because it doesn't create an intermediate list.

sum() with generator:
• sum(x for x in range(3)) = 3
• Generator expression: (x for x in range(3))
• Generates values: 0, 1, 2
• Sum: 0 + 1 + 2 = 3
• No intermediate list created

How it works:
• (x for x in range(3)) creates generator
• sum() iterates through generator
• Values generated: 0, 1, 2
• Sum calculated: 0 + 1 + 2 = 3
• Returns 3

Example:
sum(x for x in range(3))      # 3 (0+1+2)
sum(x**2 for x in range(3))   # 5 (0+1+4)

Common uses:
• Summing sequences: total = sum(x for x in numbers)
• Memory-efficient summation
• Large sequence operations
• Direct generator consumption

Example: sum(x for x in range(3)) returns 3 because it sums the values generated by the generator expression (0 + 1 + 2 = 3).

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
  (_i: number) => ({ 
    q: `What is max(x for x in range(3))?`, 
    o: ["2", "3", "0", "Error"], 
    c: 0, 
    e: "max() with generator expression.",
    de: `The max() function works with generator expressions directly, without converting to a list first. max(x for x in range(3)) returns 2 because it iterates over the generator expression (x for x in range(3)), which generates 0, 1, 2, and finds the maximum: 2. This is memory-efficient because it doesn't create an intermediate list.

max() with generator:
• max(x for x in range(3)) = 2
• Generator expression: (x for x in range(3))
• Generates values: 0, 1, 2
• Maximum: 2
• No intermediate list created

How it works:
• (x for x in range(3)) creates generator
• max() iterates through generator
• Values generated: 0, 1, 2
• Maximum found: 2
• Returns 2

Example:
max(x for x in range(3))      # 2 (maximum)
max(x**2 for x in range(3))   # 4 (maximum square)

Common uses:
• Finding maximum: largest = max(x for x in numbers)
• Memory-efficient maximum finding
• Large sequence operations
• Direct generator consumption

Example: max(x for x in range(3)) returns 2 because it finds the maximum value generated by the generator expression (0, 1, 2).

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
  (_i: number) => ({ 
    q: `What is min(x for x in range(3))?`, 
    o: ["0", "1", "2", "Error"], 
    c: 0, 
    e: "min() with generator expression.",
    de: `The min() function works with generator expressions directly, without converting to a list first. min(x for x in range(3)) returns 0 because it iterates over the generator expression (x for x in range(3)), which generates 0, 1, 2, and finds the minimum: 0. This is memory-efficient because it doesn't create an intermediate list.

min() with generator:
• min(x for x in range(3)) = 0
• Generator expression: (x for x in range(3))
• Generates values: 0, 1, 2
• Minimum: 0
• No intermediate list created

How it works:
• (x for x in range(3)) creates generator
• min() iterates through generator
• Values generated: 0, 1, 2
• Minimum found: 0
• Returns 0

Example:
min(x for x in range(3))      # 0 (minimum)
min(x**2 for x in range(1, 4)) # 1 (minimum square)

Common uses:
• Finding minimum: smallest = min(x for x in numbers)
• Memory-efficient minimum finding
• Large sequence operations
• Direct generator consumption

Example: min(x for x in range(3)) returns 0 because it finds the minimum value generated by the generator expression (0, 1, 2).

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
  (_i: number) => ({ 
    q: `What is all(x > 0 for x in range(1, 3))?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "all() with generator expression.",
    de: `The all() function works with generator expressions and returns True only if all elements in the generator are truthy. all(x > 0 for x in range(1, 3)) returns True because it iterates over the generator expression (x > 0 for x in range(1, 3)), which generates True, True (since 1 > 0 and 2 > 0), and all() returns True when all values are truthy. This is memory-efficient.

all() with generator:
• all(x > 0 for x in range(1, 3)) = True
• Generator expression: (x > 0 for x in range(1, 3))
• Generates values: True, True (1>0, 2>0)
• all() checks if all are truthy: True
• Returns True

How it works:
• (x > 0 for x in range(1, 3)) creates generator
• Generates boolean values: True, True
• all() checks if all are truthy
• All are True, returns True
• Returns True

Example:
all(x > 0 for x in range(1, 3))  # True (all > 0)
all(x > 0 for x in range(0, 3))  # False (0 is not > 0)

Common uses:
• Validation: if all(x > 0 for x in numbers):
• Checking conditions
• Memory-efficient validation
• Large sequence validation

Example: all(x > 0 for x in range(1, 3)) returns True because all values in range(1, 3) (1, 2) are greater than 0.

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
  (_i: number) => ({ 
    q: `What is any(x > 2 for x in range(3))?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "any() with generator expression.",
    de: `The any() function works with generator expressions and returns True if any element in the generator is truthy. any(x > 2 for x in range(3)) returns False because it iterates over the generator expression (x > 2 for x in range(3)), which generates False, False, False (since 0 > 2, 1 > 2, and 2 > 2 are all False), and any() returns False when no values are truthy. This is memory-efficient.

any() with generator:
• any(x > 2 for x in range(3)) = False
• Generator expression: (x > 2 for x in range(3))
• Generates values: False, False, False (0>2, 1>2, 2>2)
• any() checks if any is truthy: False
• Returns False

How it works:
• (x > 2 for x in range(3)) creates generator
• Generates boolean values: False, False, False
• any() checks if any is truthy
• None are True, returns False
• Returns False

Example:
any(x > 2 for x in range(3))  # False (none > 2)
any(x > 1 for x in range(3))  # True (2 > 1)

Common uses:
• Checking existence: if any(x > 10 for x in numbers):
• Finding matches
• Memory-efficient checking
• Large sequence checking

Example: any(x > 2 for x in range(3)) returns False because none of the values in range(3) (0, 1, 2) are greater than 2.

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
  (_i: number) => ({ 
    q: `What is (x*2 for x in range(3))?`, 
    o: ["generator object", "[0, 2, 4]", "Error", "None"], 
    c: 0, 
    e: "Generator expression with transformation.",
    de: `Generator expressions can transform elements using expressions. (x*2 for x in range(3)) creates a generator object because it uses parentheses. When iterated, it generates 0, 2, 4 because it multiplies each element from range(3) (0, 1, 2) by 2. The transformation is applied lazily - values are computed on-demand, saving memory.

Generator expression with transformation:
• (x*2 for x in range(3)) = generator object
• Expression: x*2 (doubles each element)
• Iterates: x = 0, 1, 2
• Generates: 0, 2, 4 (on-demand)
• Creates generator (not list)

How it works:
• (x*2 for x in range(3)) creates generator
• Generator is lazy - doesn't compute values yet
• When iterated, generates: 0, 2, 4
• Transformation applied on-demand
• More memory-efficient than list

Example:
gen = (x*2 for x in range(3))
list(gen)  # [0, 2, 4] (consumes generator)

Common uses:
• Memory-efficient transformations: gen = (x*2 for x in large_sequence)
• Large sequence transformations
• On-demand computation
• Lazy evaluation

Example: (x*2 for x in range(3)) returns a generator object that, when iterated, generates 0, 2, 4 because it doubles each element from range(3).

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
  (_i: number) => ({ 
    q: `What is list((x*2 for x in range(3)))?`, 
    o: ["[0, 2, 4]", "(0, 2, 4)", "Error", "None"], 
    c: 0, 
    e: "Generator expression with transformation converted to list.",
    de: `You can convert generator expressions with transformations to lists. list((x*2 for x in range(3))) creates [0, 2, 4] because it takes the generator expression (x*2 for x in range(3)), which generates doubled values (0, 2, 4), and converts it to a list by consuming all values from the generator. This materializes the lazy generator into a concrete list.

Generator to list with transformation:
• list((x*2 for x in range(3))) = [0, 2, 4]
• Generator expression: (x*2 for x in range(3))
• Generates transformed values: 0, 2, 4
• list() consumes generator
• Creates list: [0, 2, 4]

How it works:
• (x*2 for x in range(3)) creates generator
• Generator transforms: 0→0, 1→2, 2→4
• list() iterates through generator
• Values collected: [0, 2, 4]
• Returns list

Example:
list((x*2 for x in range(3)))    # [0, 2, 4]
list((x**2 for x in range(3)))   # [0, 1, 4]

Common uses:
• Materializing generators: doubled = list((x*2 for x in numbers))
• Converting lazy sequences to lists
• Getting all transformed values
• List creation from generators

Example: list((x*2 for x in range(3))) returns [0, 2, 4] because list() consumes the generator expression and collects all doubled values into a list.

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
  
  // 91-100: Advanced Iteration
  (_i: number) => ({ 
    q: `What is list(map(lambda x: x*2, range(3)))?`, 
    o: ["[0, 2, 4]", "[0, 1, 2]", "Error", "None"], 
    c: 0, 
    e: "map() applies function to iterable.",
    de: `The map() function applies a function to every element of an iterable. list(map(lambda x: x*2, range(3))) creates [0, 2, 4] because map() applies the lambda function lambda x: x*2 (which doubles each value) to each element of range(3) (0, 1, 2). map() returns a map object, which list() converts to a list. This is equivalent to a list comprehension but using functional programming style.

map() function:
• list(map(lambda x: x*2, range(3))) = [0, 2, 4]
• map() applies function to each element
• Lambda: lambda x: x*2 (doubles each value)
• Iterates over range(3): 0, 1, 2
• Transforms: 0→0, 1→2, 2→4

How it works:
• map(lambda x: x*2, range(3)) creates map object
• Applies lambda to each element: 0*2=0, 1*2=2, 2*2=4
• Returns map object
• list() converts map to list: [0, 2, 4]

Example:
list(map(lambda x: x*2, range(3)))     # [0, 2, 4]
list(map(lambda x: x**2, range(3)))    # [0, 1, 4]
list(map(str, range(3)))               # ['0', '1', '2']

Common uses:
• Applying functions: doubled = list(map(lambda x: x*2, numbers))
• Function-based transformations
• Functional programming style
• Iterable transformations

Example: list(map(lambda x: x*2, range(3))) returns [0, 2, 4] because map() applies the lambda function (doubling) to each element of range(3).

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
  (_i: number) => ({ 
    q: `What is list(filter(lambda x: x % 2 == 0, range(5)))?`, 
    o: ["[0, 2, 4]", "[1, 3]", "[0, 1, 2, 3, 4]", "Error"], 
    c: 0, 
    e: "filter() keeps elements matching condition.",
    de: `The filter() function keeps only elements from an iterable that satisfy a condition. list(filter(lambda x: x % 2 == 0, range(5))) creates [0, 2, 4] because filter() applies the lambda function lambda x: x % 2 == 0 (which checks if a number is even) to each element of range(5) (0, 1, 2, 3, 4) and keeps only those where the condition is True. filter() returns a filter object, which list() converts to a list.

filter() function:
• list(filter(lambda x: x % 2 == 0, range(5))) = [0, 2, 4]
• filter() keeps elements where condition is True
• Lambda: lambda x: x % 2 == 0 (even check)
• Iterates over range(5): 0, 1, 2, 3, 4
• Filters: keeps 0, 2, 4 (even)

How it works:
• filter(lambda x: x % 2 == 0, range(5)) creates filter object
• Checks each element: 0%2==0→True, 1%2==0→False, 2%2==0→True, 3%2==0→False, 4%2==0→True
• Keeps only True cases: 0, 2, 4
• list() converts filter to list: [0, 2, 4]

Example:
list(filter(lambda x: x % 2 == 0, range(5)))  # [0, 2, 4] (even)
list(filter(lambda x: x > 2, range(5)))        # [3, 4] (greater than 2)

Common uses:
• Filtering elements: evens = list(filter(lambda x: x % 2 == 0, numbers))
• Conditional filtering
• Functional programming style
• Iterable filtering

Example: list(filter(lambda x: x % 2 == 0, range(5))) returns [0, 2, 4] because filter() keeps only elements from range(5) where x % 2 == 0 (even numbers).

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
  (_i: number) => ({ 
    q: `What is list(map(str, range(3)))?`, 
    o: ["['0', '1', '2']", "[0, 1, 2]", "Error", "None"], 
    c: 0, 
    e: "map() with type conversion.",
    de: `The map() function can use built-in functions like str() to convert types. list(map(str, range(3))) creates ['0', '1', '2'] because map() applies the str() function (which converts values to strings) to each element of range(3) (0, 1, 2). This converts each integer to its string representation. map() returns a map object, which list() converts to a list.

map() with type conversion:
• list(map(str, range(3))) = ['0', '1', '2']
• map() applies str() to each element
• str() converts integers to strings
• Iterates over range(3): 0, 1, 2
• Converts: 0→'0', 1→'1', 2→'2'

How it works:
• map(str, range(3)) creates map object
• Applies str() to each element: str(0)='0', str(1)='1', str(2)='2'
• Returns map object
• list() converts map to list: ['0', '1', '2']

Example:
list(map(str, range(3)))        # ['0', '1', '2']
list(map(int, ['1', '2', '3'])) # [1, 2, 3]

Common uses:
• Type conversion: strings = list(map(str, numbers))
• Converting types
• Functional programming style
• Iterable type conversion

Example: list(map(str, range(3))) returns ['0', '1', '2'] because map() applies str() to each element of range(3), converting integers to strings.

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
  (_i: number) => ({ 
    q: `What is list(filter(None, [0, 1, 2, '', 'a']))?`, 
    o: ["[1, 2, 'a']", "[0, 1, 2, '', 'a']", "Error", "None"], 
    c: 0, 
    e: "filter(None) removes Falsy values.",
    de: `When filter() is called with None as the first argument, it removes all falsy values from the iterable. list(filter(None, [0, 1, 2, '', 'a'])) creates [1, 2, 'a'] because filter(None, ...) removes falsy values (0, '', etc.) and keeps only truthy values (1, 2, 'a'). This is a common pattern for removing falsy values without writing a lambda.

filter(None) behavior:
• list(filter(None, [0, 1, 2, '', 'a'])) = [1, 2, 'a']
• filter(None, ...) removes falsy values
• Falsy values: 0, '' (empty string)
• Truthy values: 1, 2, 'a'
• Keeps only truthy values

How it works:
• filter(None, [0, 1, 2, '', 'a']) creates filter object
• Checks each element: 0→False, 1→True, 2→True, ''→False, 'a'→True
• Keeps only truthy: 1, 2, 'a'
• list() converts filter to list: [1, 2, 'a']

Example:
list(filter(None, [0, 1, 2, '', 'a']))  # [1, 2, 'a'] (falsy removed)
list(filter(None, [0, None, '', 'a']))   # ['a'] (falsy removed)

Common uses:
• Removing falsy values: truthy = list(filter(None, items))
• Cleaning data
• Removing None/empty values
• Quick falsy filtering

Example: list(filter(None, [0, 1, 2, '', 'a'])) returns [1, 2, 'a'] because filter(None, ...) removes falsy values (0, '') and keeps only truthy values (1, 2, 'a').

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
  (_i: number) => ({ 
    q: `What is next(iter(range(3)))?`, 
    o: ["0", "1", "Error", "None"], 
    c: 0, 
    e: "next() gets next value from iterator.",
    de: `The next() function retrieves the next value from an iterator. next(iter(range(3))) returns 0 because iter(range(3)) creates an iterator from range(3), and next() retrieves the first value from that iterator (0). Each call to next() advances the iterator to the next value. This is useful for manual iteration and consuming values one at a time.

next() function:
• next(iter(range(3))) = 0
• iter(range(3)) creates iterator from range(3)
• next() retrieves first value from iterator
• Returns 0 (first value)
• Iterator advances to next value

How it works:
• iter(range(3)) creates iterator
• Iterator points to first value: 0
• next() retrieves current value: 0
• Iterator advances to next value: 1
• Returns 0

Example:
it = iter(range(3))
next(it)  # 0 (first value)
next(it)  # 1 (second value)
next(it)  # 2 (third value)

Common uses:
• Manual iteration: value = next(iterator)
• Consuming values one at a time
• Iterator control
• Step-by-step iteration

Example: next(iter(range(3))) returns 0 because next() retrieves the first value from the iterator created from range(3).

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
  (_i: number) => ({ 
    q: `What is iter([1, 2, 3])?`, 
    o: ["list_iterator object", "[1, 2, 3]", "Error", "None"], 
    c: 0, 
    e: "iter() creates iterator from iterable.",
    de: `The iter() function creates an iterator from an iterable. iter([1, 2, 3]) returns a list_iterator object because it takes the list [1, 2, 3] and creates an iterator object that can be used to iterate over the list one element at a time. Iterators allow manual control over iteration and are used by for loops internally. The iterator remembers its position and can be advanced with next().

iter() function:
• iter([1, 2, 3]) = list_iterator object
• Creates iterator from iterable [1, 2, 3]
• Returns iterator object (not list)
• Iterator can be used with next() or for loop

How it works:
• iter([1, 2, 3]) takes list
• Creates iterator object
• Iterator points to first element: 1
• Iterator remembers position
• Can be advanced with next()

Example:
it = iter([1, 2, 3])
type(it)  # <class 'list_iterator'>
next(it)  # 1 (first element)
next(it)  # 2 (second element)

Common uses:
• Creating iterators: it = iter(collection)
• Manual iteration control
• Iterator objects
• Step-by-step iteration

Example: iter([1, 2, 3]) returns a list_iterator object because it creates an iterator from the list [1, 2, 3] that can be used for manual iteration.

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
  (_i: number) => ({ 
    q: `What is list(iter([1, 2, 3]))?`, 
    o: ["[1, 2, 3]", "list_iterator object", "Error", "None"], 
    c: 0, 
    e: "list() consumes iterator.",
    de: `The list() function can consume an iterator, creating a list with all remaining values from the iterator. list(iter([1, 2, 3])) creates [1, 2, 3] because it takes the iterator created from [1, 2, 3], iterates through it completely, and collects all values into a list. This exhausts the iterator (consumes all values), which is useful for converting iterators back to lists.

list() with iterator:
• list(iter([1, 2, 3])) = [1, 2, 3]
• iter([1, 2, 3]) creates iterator
• list() iterates through iterator
• Collects all values: 1, 2, 3
• Creates list: [1, 2, 3]

How it works:
• iter([1, 2, 3]) creates iterator
• list() iterates through iterator completely
• Values retrieved: 1, 2, 3
• Results collected into list: [1, 2, 3]
• Iterator is exhausted

Example:
it = iter([1, 2, 3])
list(it)  # [1, 2, 3] (consumes iterator)
list(it)  # [] (iterator exhausted)

Common uses:
• Converting iterators to lists: items = list(iter(collection))
• Materializing iterators
• Getting all values from iterator
• Iterator consumption

Example: list(iter([1, 2, 3])) returns [1, 2, 3] because list() consumes the iterator and collects all values into a list.

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
  (_i: number) => ({ 
    q: `What is sum([1, 2, 3])?`, 
    o: ["6", "0", "Error", "None"], 
    c: 0, 
    e: "sum() adds all elements in iterable.",
    de: `The sum() function adds all elements in an iterable (list, tuple, range, etc.) and returns the total. sum([1, 2, 3]) returns 6 because it iterates over the list [1, 2, 3] and adds all values: 1 + 2 + 3 = 6. sum() works with any iterable containing numbers and is commonly used for calculating totals.

sum() function:
• sum([1, 2, 3]) = 6
• Iterates over list [1, 2, 3]
• Adds all values: 1 + 2 + 3 = 6
• Returns total: 6

How it works:
• sum([1, 2, 3]) takes list
• Iterates through elements: 1, 2, 3
• Adds values: 1 + 2 + 3
• Returns total: 6

Example:
sum([1, 2, 3])       # 6 (1+2+3)
sum(range(5))        # 10 (0+1+2+3+4)
sum([1.5, 2.5, 3.5]) # 7.5 (floats work)

Common uses:
• Summing numbers: total = sum(numbers)
• Calculating totals
• Aggregating values
• Number operations

Example: sum([1, 2, 3]) returns 6 because it adds all elements in the list (1 + 2 + 3 = 6).

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
  (_i: number) => ({ 
    q: `What is all([True, True, False])?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "all() returns True only if all elements are Truthy.",
    de: `The all() function returns True only if all elements in an iterable are truthy. all([True, True, False]) returns False because it checks each element: True (truthy), True (truthy), False (falsy). Since not all elements are truthy (False is falsy), all() returns False. If all elements were truthy, it would return True.

all() function:
• all([True, True, False]) = False
• Checks each element: True, True, False
• All must be truthy for True result
• False is falsy, so returns False
• Returns False

How it works:
• all([True, True, False]) takes list
• Checks each element: True (truthy), True (truthy), False (falsy)
• Short-circuits at first falsy value
• Returns False (not all truthy)

Example:
all([True, True, False])  # False (not all truthy)
all([True, True, True])   # True (all truthy)
all([1, 2, 3])            # True (all numbers are truthy)

Common uses:
• Validation: if all(conditions): ...
• Checking if all elements satisfy condition
• Boolean logic
• Iterable validation

Example: all([True, True, False]) returns False because not all elements are truthy (False is falsy).

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
  (_i: number) => ({ 
    q: `What is any([False, False, True])?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "any() returns True if any element is Truthy.",
    de: `The any() function returns True if any element in an iterable is truthy. any([False, False, True]) returns True because it checks each element: False (falsy), False (falsy), True (truthy). Since at least one element is truthy (True is truthy), any() returns True. If all elements were falsy, it would return False.

any() function:
• any([False, False, True]) = True
• Checks each element: False, False, True
• At least one must be truthy for True result
• True is truthy, so returns True
• Returns True

How it works:
• any([False, False, True]) takes list
• Checks each element: False (falsy), False (falsy), True (truthy)
• Short-circuits at first truthy value
• Returns True (at least one truthy)

Example:
any([False, False, True])  # True (at least one truthy)
any([False, False, False]) # False (all falsy)
any([0, 0, 1])             # True (1 is truthy)

Common uses:
• Checking existence: if any(conditions): ...
• Finding if any element satisfies condition
• Boolean logic
• Iterable checking

Example: any([False, False, True]) returns True because at least one element is truthy (True is truthy).

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
