import { PersonaStage } from '../../types';

// --- LEVEL 3 INTERMEDIATE A: any(), all(), nested conditionals, guard clauses, advanced boolean logic ---
// 50 TRULY UNIQUE questions - NO number/variable variations
export const level3IntermediateA = [
  // 1-20: any() and all()
  (_i: number) => ({
    q: `What is any([True, False, False])?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "any() returns True if at least one element is truthy.",
    de: `any() iterates through the iterable and returns True as soon as it finds a truthy element. In [True, False, False], the first element is True, so any() returns True immediately.

Key concepts:
• any() checks if ANY element is truthy
• Short-circuits on first truthy value
• Returns False only if ALL elements are falsy

How it works:
• Checks True → truthy → returns True immediately
• Never needs to check False, False

Examples:
• any([True, False, False]) → True
• any([False, True]) → True
• any([False, False]) → False

Common uses:
• Check if any condition in a list is met
• Validate that at least one item passes a test
• Combined with generator expressions for filtering

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is any([False, False, False])?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "any() returns False when all elements are falsy.",
    de: `any() iterates through every element looking for a truthy value. When all elements are False, it exhausts the iterable without finding any truthy value and returns False.

Key concepts:
• any() returns False only if every element is falsy
• Must check all elements before returning False
• No short-circuit possible when result is False

How it works:
• Checks False → falsy, continue
• Checks False → falsy, continue
• Checks False → falsy, exhausted → returns False

Examples:
• any([False, False, False]) → False
• any([0, 0, 0]) → False (0 is falsy)
• any([None, False, 0]) → False (all falsy)

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is all([True, True, True])?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "all() returns True when every element is truthy.",
    de: `all() checks that every element in the iterable is truthy. With [True, True, True], all three elements are True, so all() returns True.

Key concepts:
• all() requires EVERY element to be truthy
• Returns False as soon as it finds a falsy value
• Returns True only after checking all elements

How it works:
• Checks True → truthy, continue
• Checks True → truthy, continue
• Checks True → truthy, exhausted → returns True

Examples:
• all([True, True, True]) → True
• all([1, 2, 3]) → True (all truthy)
• all(["a", "b"]) → True (non-empty strings)

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is all([True, False, True])?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "all() returns False if any element is falsy.",
    de: `all() short-circuits and returns False as soon as it encounters a falsy value. In [True, False, True], the second element is False, so all() returns False without checking the third element.

Key concepts:
• all() short-circuits on first falsy value
• Does not need to check remaining elements
• One False is enough to make all() return False

How it works:
• Checks True → truthy, continue
• Checks False → falsy → returns False immediately
• Third element never checked

Examples:
• all([True, False, True]) → False
• all([True, True, False]) → False
• all([False, True, True]) → False

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is any([])?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "any() on an empty iterable returns False — no truthy elements exist.",
    de: `any([]) returns False because there are no elements to be truthy. Since any() looks for at least one truthy value and finds none, it returns False.

Key concepts:
• Empty iterable has no truthy elements
• any() defaults to False for empty input
• This is the logical convention: "does anything satisfy?" → no items → no

How it works:
• Iterates through [] → no elements to check
• No truthy element found → returns False

Edge case:
• any([]) → False (no elements)
• This is consistent: "is any element truthy?" with no elements → False
• Contrast with all([]) → True (vacuous truth)

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is all([])?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "all() on an empty iterable returns True — vacuous truth!",
    de: `all([]) returns True because of vacuous truth: when there are no elements, it's trivially true that "all elements satisfy the condition" — there are no counterexamples.

Key concepts:
• Vacuous truth: a statement about nothing is True by convention
• all() returns True for empty iterables
• This is consistent with mathematical logic

How it works:
• Iterates through [] → no elements to check
• No falsy element found → returns True
• "Are all elements truthy?" with no elements → True (no counterexample)

Edge case:
• all([]) → True (vacuous truth)
• This surprises many beginners
• Mnemonic: all() looks for a reason to return False; no elements = no reason
• Contrast with any([]) → False

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is any([0, 0, 0])?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "0 is falsy in Python, so any() finds no truthy element.",
    de: `any() checks truthiness, not just True/False literals. In Python, 0 is falsy. Since every element in [0, 0, 0] is falsy, any() returns False.

Key concepts:
• any() uses truthiness, not just boolean values
• 0, 0.0, None, "", [], {} are all falsy
• any() treats these the same as False

How it works:
• Checks 0 → falsy (bool(0) is False), continue
• Checks 0 → falsy, continue
• Checks 0 → falsy, exhausted → returns False

Examples:
• any([0, 0, 0]) → False
• any([None, None]) → False
• any(["", 0, []]) → False (all falsy)

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is any([0, 1, 0])?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "1 is truthy, so any() returns True.",
    de: `any() finds the element 1, which is truthy (any non-zero number is truthy), and immediately returns True via short-circuiting.

Key concepts:
• Non-zero integers are truthy
• any() short-circuits on first truthy value
• Doesn't matter that other elements are falsy

How it works:
• Checks 0 → falsy, continue
• Checks 1 → truthy → returns True immediately
• Third element never checked

Examples:
• any([0, 1, 0]) → True
• any([0, 0, 5]) → True (5 is truthy)
• any([0, -1, 0]) → True (-1 is truthy)

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is all([1, 2, 3])?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "All non-zero numbers are truthy, so all() returns True.",
    de: `all() checks that every element is truthy. Since 1, 2, and 3 are all non-zero integers (and therefore truthy), all() returns True.

Key concepts:
• Non-zero integers are truthy
• all() checks truthiness of every element
• All non-zero → all truthy → True

How it works:
• Checks 1 → truthy, continue
• Checks 2 → truthy, continue
• Checks 3 → truthy, exhausted → returns True

Examples:
• all([1, 2, 3]) → True
• all([-1, 5, 100]) → True
• all([1, 0, 3]) → False (0 is falsy)

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is all([1, 0, 3])?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "0 is falsy, so all() short-circuits and returns False.",
    de: `all() encounters 0 (which is falsy) and immediately returns False. It doesn't matter that 1 and 3 are truthy — one falsy element is enough.

Key concepts:
• all() short-circuits at first falsy value
• 0 is falsy in Python
• One falsy element makes all() return False

How it works:
• Checks 1 → truthy, continue
• Checks 0 → falsy → returns False immediately
• 3 is never checked

Examples:
• all([1, 0, 3]) → False
• all([0, 1, 2]) → False (0 first)
• all([1, 2, 0]) → False (0 at end)

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is any(x > 3 for x in [1, 2, 5])?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "5 > 3 is True, so any() with the generator returns True.",
    de: `any() can take a generator expression. The generator yields True/False for each element: 1>3→False, 2>3→False, 5>3→True. When any() sees True from 5>3, it short-circuits and returns True.

Key concepts:
• any() works with generator expressions
• Generator evaluates lazily — one element at a time
• Short-circuits when first True is yielded

How it works:
• Generator yields: 1 > 3 → False
• Generator yields: 2 > 3 → False
• Generator yields: 5 > 3 → True → any() returns True

Common pattern:
• any(condition for item in iterable)
• Checks if any item satisfies the condition
• More memory-efficient than building a list first

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is all(x > 0 for x in [1, 2, 3])?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "All values (1, 2, 3) are greater than 0.",
    de: `all() with a generator expression checks that every yielded value is truthy. The generator yields: 1>0→True, 2>0→True, 3>0→True. All are True, so all() returns True.

Key concepts:
• all() with generators checks every condition
• Must exhaust all elements to return True
• Useful for validation of entire collections

How it works:
• Generator yields: 1 > 0 → True, continue
• Generator yields: 2 > 0 → True, continue
• Generator yields: 3 > 0 → True, exhausted → returns True

Common uses:
• all(x > 0 for x in numbers) — check all positive
• all(isinstance(x, int) for x in items) — type validation
• all(len(s) > 0 for s in strings) — no empty strings

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is all(x > 0 for x in [1, -2, 3])?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "-2 > 0 is False, so all() returns False.",
    de: `all() short-circuits when the generator yields False for -2 > 0. Since not all elements are greater than 0, all() returns False.

Key concepts:
• all() short-circuits on first False from generator
• -2 > 0 is False, which is enough to return False
• The value 3 is never checked

How it works:
• Generator yields: 1 > 0 → True, continue
• Generator yields: -2 > 0 → False → all() returns False
• Generator for 3 never evaluated

Examples:
• all(x > 0 for x in [1, -2, 3]) → False
• all(x > 0 for x in [-1, 2, 3]) → False
• all(x > 0 for x in [1, 2, 3]) → True

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is any(c.isupper() for c in "Hello")?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "'H' is uppercase, so any() returns True.",
    de: `any() with a generator checks each character of "Hello" for uppercase. 'H'.isupper() is True, so any() short-circuits and returns True immediately.

Key concepts:
• String iteration yields individual characters
• isupper() checks if a character is uppercase
• any() finds 'H' is uppercase and returns True

How it works:
• 'H'.isupper() → True → any() returns True
• Remaining characters never checked
• Short-circuit makes this efficient for long strings

Practical use:
• Checking if a string contains any uppercase: any(c.isupper() for c in s)
• Password validation: must contain at least one uppercase letter
• Input validation patterns

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is all(c.islower() for c in "hello")?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "Every character in 'hello' is lowercase.",
    de: `all() checks that every character in "hello" is lowercase. Each character ('h', 'e', 'l', 'l', 'o') passes the islower() check, so all() returns True.

Key concepts:
• all() requires every element to satisfy the condition
• islower() returns True for lowercase letters
• "hello" contains only lowercase letters

How it works:
• 'h'.islower() → True, continue
• 'e'.islower() → True, continue
• 'l'.islower() → True, continue
• 'l'.islower() → True, continue
• 'o'.islower() → True, exhausted → returns True

Practical use:
• Validate all characters are lowercase
• Check string formatting rules
• Input normalization checks

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is all(c.islower() for c in "Hello")?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "'H' is not lowercase, so all() returns False.",
    de: `all() short-circuits when it finds 'H'.islower() is False. Since 'H' is uppercase, not all characters are lowercase, so all() returns False.

Key concepts:
• all() short-circuits at first failure
• 'H'.islower() → False → all() returns False immediately
• Remaining characters never checked

How it works:
• 'H'.islower() → False → all() returns False
• 'e', 'l', 'l', 'o' never checked

Contrast:
• all(c.islower() for c in "hello") → True
• all(c.islower() for c in "Hello") → False
• any(c.isupper() for c in "Hello") → True

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is any(isinstance(x, str) for x in [1, "a", 3])?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "\"a\" is a string, so any() finds a match and returns True.",
    de: `any() checks each element with isinstance(x, str). When it reaches "a", isinstance("a", str) returns True, so any() short-circuits and returns True.

Key concepts:
• isinstance() checks if an object is of a given type
• any() with isinstance() checks if any element matches a type
• Useful for mixed-type collections

How it works:
• isinstance(1, str) → False, continue
• isinstance("a", str) → True → any() returns True
• 3 never checked

Practical use:
• Check if a list contains any strings
• Type validation in mixed collections
• Data cleaning: finding unexpected types

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is all(isinstance(x, int) for x in [1, 2, 3])?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "All elements are integers.",
    de: `all() verifies that every element in [1, 2, 3] is an instance of int. Since 1, 2, and 3 are all integers, all() returns True.

Key concepts:
• isinstance() checks type membership
• all() with isinstance() validates homogeneous types
• Common pattern for type safety

How it works:
• isinstance(1, int) → True, continue
• isinstance(2, int) → True, continue
• isinstance(3, int) → True, exhausted → returns True

Practical use:
• Validate all elements are the expected type
• Input validation before processing
• Ensure list homogeneity

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is any([None, 0, "", [], False])?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "None, 0, empty string, empty list, and False are all falsy.",
    de: `any() checks each element for truthiness. Every element in this list is falsy: None, 0, "" (empty string), [] (empty list), and False. Since no element is truthy, any() returns False.

Key concepts:
• Python's falsy values: None, 0, 0.0, "", [], {}, set(), False
• any() treats all falsy values the same
• No truthy element → any() returns False

How it works:
• None → falsy, continue
• 0 → falsy, continue
• "" → falsy, continue
• [] → falsy, continue
• False → falsy, exhausted → returns False

Important:
• All of Python's falsy values are represented here
• This is a common interview question
• Understanding falsy values is essential for Python

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is all([1, "hello", [1], True])?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "1, non-empty string, non-empty list, and True are all truthy.",
    de: `all() checks that every element is truthy. 1 is truthy (non-zero), "hello" is truthy (non-empty string), [1] is truthy (non-empty list), and True is truthy. All pass, so all() returns True.

Key concepts:
• Truthy values: non-zero numbers, non-empty strings, non-empty containers, True
• all() requires every element to be truthy
• Mixed types are fine — truthiness is universal

How it works:
• 1 → truthy (non-zero), continue
• "hello" → truthy (non-empty string), continue
• [1] → truthy (non-empty list), continue
• True → truthy, exhausted → returns True

Contrast with falsy:
• 0, "", [], {}, None, False → all falsy
• Any non-zero, non-empty value → truthy

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // 21-35: Nested conditionals and guard clauses
  (_i: number) => ({
    q: `x = 15\nWhat is "big" if x > 10 else ("mid" if x > 5 else "small")?`,
    o: ['"big"', '"mid"', '"small"', "Error"],
    c: 0,
    e: "x is 15, which is > 10, so the outer ternary returns \"big\".",
    de: `This is a nested ternary expression. Python evaluates the outer condition first: x > 10 → 15 > 10 → True, so it returns "big" without evaluating the inner ternary.

Key concepts:
• Nested ternary: condition1 ? value1 : (condition2 ? value2 : value3)
• Python syntax: value_if_true if condition else value_if_false
• Outer condition evaluated first

How it works:
• x = 15
• x > 10 → 15 > 10 → True
• Returns "big" (the if-true value)
• Inner ternary ("mid" if x > 5 else "small") never evaluated

Best practice:
• Nested ternaries can be hard to read
• Consider using if/elif/else for clarity
• Limit nesting to 2 levels maximum

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `x = 7\nWhat is "big" if x > 10 else ("mid" if x > 5 else "small")?`,
    o: ['"mid"', '"big"', '"small"', "Error"],
    c: 0,
    e: "x is 7: not > 10, but > 5, so the inner ternary returns \"mid\".",
    de: `The outer condition x > 10 is False (7 > 10 is False), so Python evaluates the else branch, which is another ternary. The inner condition x > 5 is True (7 > 5), so it returns "mid".

Key concepts:
• When outer condition is False, the else branch is evaluated
• The else branch contains another ternary expression
• Inner ternary is only evaluated when outer is False

How it works:
• x = 7
• x > 10 → 7 > 10 → False → evaluate else branch
• Inner ternary: "mid" if x > 5 else "small"
• x > 5 → 7 > 5 → True → returns "mid"

Evaluation flow:
• Outer: False → go to else
• Inner: True → return "mid"

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `x = 3\nWhat is "big" if x > 10 else ("mid" if x > 5 else "small")?`,
    o: ['"small"', '"big"', '"mid"', "Error"],
    c: 0,
    e: "x is 3: not > 10, not > 5, so it returns \"small\".",
    de: `Both conditions fail. The outer condition x > 10 is False (3 > 10), so we evaluate the else branch. The inner condition x > 5 is also False (3 > 5), so we return "small".

Key concepts:
• Both ternary conditions can be False
• Falls through to the final else value
• Similar to if/elif/else chain

How it works:
• x = 3
• x > 10 → 3 > 10 → False → evaluate else branch
• Inner ternary: "mid" if x > 5 else "small"
• x > 5 → 3 > 5 → False → returns "small"

Equivalent if/elif/else:
• if x > 10: return "big"
• elif x > 5: return "mid"
• else: return "small"

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What does a guard clause do in a function?`,
    o: ["Returns early to avoid deep nesting", "Catches exceptions", "Loops until valid", "Imports modules"],
    c: 0,
    e: "A guard clause returns or exits early when a condition isn't met, keeping code flat.",
    de: `A guard clause is a conditional check at the beginning of a function that returns early if a condition is not met. This avoids deeply nested if/else blocks and keeps the main logic at a low indentation level.

Key concepts:
• Guard clause = early return for invalid/edge cases
• Reduces nesting and improves readability
• Handles edge cases first, then proceeds with main logic

Example without guard clause (deeply nested):
def process(data):
    if data is not None:
        if len(data) > 0:
            if data.is_valid():
                # main logic here
                return result

Example with guard clauses (flat):
def process(data):
    if data is None:
        return None
    if len(data) == 0:
        return []
    if not data.is_valid():
        raise ValueError("Invalid data")
    # main logic here — no nesting!
    return result

Benefits:
• Easier to read and maintain
• Clear separation of edge cases and main logic
• Reduces cognitive complexity

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `x = 5; y = 10\nWhat is "both" if x > 0 and y > 0 else "not both"?`,
    o: ['"both"', '"not both"', "Error", "None"],
    c: 0,
    e: "Both x (5) and y (10) are > 0, so the condition is True.",
    de: `The ternary condition uses 'and' to combine two comparisons. Both x > 0 (5 > 0 → True) and y > 0 (10 > 0 → True) are True, so the 'and' evaluates to True, returning "both".

Key concepts:
• Ternary with compound condition using 'and'
• Both conditions must be True for 'and' to be True
• Combines multiple checks in a single expression

How it works:
• x > 0 → 5 > 0 → True
• y > 0 → 10 > 0 → True
• True and True → True
• Returns "both"

Equivalent:
• if x > 0 and y > 0: result = "both"
• else: result = "not both"

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `x = -1; y = 10\nWhat is "both" if x > 0 and y > 0 else "not both"?`,
    o: ['"not both"', '"both"', "Error", "None"],
    c: 0,
    e: "x is -1, which is not > 0, so the 'and' is False.",
    de: `The 'and' operator short-circuits: x > 0 is False (-1 > 0), so the entire 'and' expression is False without evaluating y > 0. The ternary returns "not both".

Key concepts:
• 'and' short-circuits when left side is False
• y > 0 is never evaluated
• One False makes the whole 'and' False

How it works:
• x > 0 → -1 > 0 → False
• Short-circuit: False and (anything) → False
• Returns "not both"

Short-circuit benefit:
• Avoids unnecessary computation
• Safe to use: x is not None and x.method()
• The method call is skipped if x is None

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `x = 0\nWhat is "pos" if x > 0 else ("neg" if x < 0 else "zero")?`,
    o: ['"zero"', '"pos"', '"neg"', "Error"],
    c: 0,
    e: "x is 0: not positive, not negative, so it's \"zero\".",
    de: `This nested ternary handles three cases: positive, negative, and zero. x = 0 fails both x > 0 and x < 0, so the final else value "zero" is returned.

Key concepts:
• Three-way branching with nested ternary
• Covers positive, negative, and zero cases
• Equivalent to if/elif/else

How it works:
• x > 0 → 0 > 0 → False → evaluate else
• x < 0 → 0 < 0 → False → return "zero"

Equivalent:
• if x > 0: "pos"
• elif x < 0: "neg"
• else: "zero"

Common pattern for sign checking:
• math.copysign and similar functions use this logic internally

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `x = None\nWhat is x if x is not None else "default"?`,
    o: ['"default"', "None", "Error", "True"],
    c: 0,
    e: "x is None, so 'x is not None' is False, returning \"default\".",
    de: `This is a common pattern for providing default values. The condition 'x is not None' checks identity with None. Since x IS None, the condition is False, and the else branch returns "default".

Key concepts:
• 'is not None' checks identity, not equality
• Common pattern for default values
• Ternary used as null-coalescing operator

How it works:
• x = None
• x is not None → None is not None → False
• Returns "default"

Common uses:
• def func(arg=None): value = arg if arg is not None else default_value
• Configuration fallbacks
• Optional parameter handling

Note:
• Use 'is not None' instead of '!= None' for None checks
• 'is' checks identity (same object), '==' checks equality

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `x = 42\nWhat is x if x is not None else "default"?`,
    o: ["42", '"default"', "None", "Error"],
    c: 0,
    e: "x is 42 (not None), so 'x is not None' is True, returning 42.",
    de: `The condition 'x is not None' is True because x holds 42, not None. So the ternary returns x itself, which is 42.

Key concepts:
• When the condition is True, the if-value is returned
• x = 42, so x is returned directly
• The "default" fallback is not used

How it works:
• x = 42
• x is not None → 42 is not None → True
• Returns x → returns 42

Pattern:
• value = user_input if user_input is not None else default
• Only uses default when the value is actually None
• Preserves falsy values like 0 or "" (unlike 'or' pattern)

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is [x for x in range(10) if x % 2 == 0 if x % 3 == 0]?`,
    o: ["[0, 6]", "[0, 2, 3, 6]", "[6]", "Error"],
    c: 0,
    e: "Multiple if clauses in a list comprehension act as AND: both conditions must be true.",
    de: `List comprehensions can have multiple 'if' clauses, which act as logical AND. An element is included only if ALL conditions are True. Here, x must be divisible by both 2 AND 3.

Key concepts:
• Multiple if in comprehension = AND logic
• [expr for x in iter if cond1 if cond2] ≡ [expr for x in iter if cond1 and cond2]
• Each condition filters independently

How it works:
• x=0: 0%2==0 ✓ and 0%3==0 ✓ → included
• x=1: 1%2==0 ✗ → excluded
• x=2: 2%2==0 ✓ but 2%3==0 ✗ → excluded
• x=3: 3%2==0 ✗ → excluded
• x=4: 4%2==0 ✓ but 4%3==0 ✗ → excluded
• x=5: 5%2==0 ✗ → excluded
• x=6: 6%2==0 ✓ and 6%3==0 ✓ → included
• x=7-9: fail at least one condition → excluded
• Result: [0, 6]

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is bool([False])?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "A list with one element is truthy, even if that element is False!",
    de: `bool() on a container checks if the container is non-empty, NOT the truthiness of its contents. [False] has one element (length 1), so it's truthy. The value of the element doesn't matter.

Key concepts:
• Container truthiness = is it non-empty?
• [False] has length 1 → non-empty → truthy
• The False inside is irrelevant to the container's truthiness

How it works:
• bool([False]) → len([False]) > 0 → True
• Python calls __len__ on the list
• Length is 1 → truthy

Tricky cases:
• bool([False]) → True (has one element)
• bool([0]) → True (has one element)
• bool([None]) → True (has one element)
• bool([]) → False (empty list)
• bool([[]]) → True (has one element, even though it's empty list)

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is bool("False")?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "\"False\" is a non-empty string, so it's truthy!",
    de: `bool() on a string checks if the string is non-empty, not its content. "False" has 5 characters, making it a non-empty string, which is truthy. The word "False" is just text.

Key concepts:
• String truthiness = is it non-empty?
• "False" is 5 characters long → non-empty → truthy
• Only "" (empty string) is falsy

How it works:
• bool("False") → len("False") > 0 → True
• The string content doesn't matter for truthiness
• "False", "0", "None" are all truthy strings!

Common mistake:
• bool("False") is True, not False
• bool("0") is True, not False
• bool("") is False (empty string)
• To convert string "False" to boolean False, you need custom logic

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is bool(" ")?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "A single space is a non-empty string, so it's truthy.",
    de: `bool(" ") is True because " " is a non-empty string containing one space character. Whitespace characters are still characters — the string is not empty.

Key concepts:
• " " (space) has length 1 → non-empty → truthy
• Only "" (truly empty, length 0) is falsy
• Whitespace is not the same as empty

How it works:
• bool(" ") → len(" ") > 0 → 1 > 0 → True
• Space, tab, newline — all are characters
• "  " (multiple spaces) is also truthy

Practical note:
• To check for "blank" strings, use .strip():
• if not s.strip(): handles both "" and "   "
• bool("   ".strip()) → bool("") → False

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is bool(0.0)?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "0.0 (zero float) is falsy in Python.",
    de: `All numeric zeros are falsy in Python: 0 (int), 0.0 (float), 0j (complex). bool(0.0) returns False because zero is the numeric "nothing" value.

Key concepts:
• 0.0 is falsy (zero float)
• All numeric zeros are falsy: 0, 0.0, 0j
• Any non-zero number is truthy

How it works:
• bool(0.0) → 0.0 == 0 → False
• Python treats all zero numerics as falsy
• This is consistent across int, float, complex

Examples:
• bool(0.0) → False
• bool(0.1) → True
• bool(-0.0) → False (negative zero is still zero)
• bool(float('inf')) → True (infinity is non-zero)

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is bool(0j)?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "0j (zero complex number) is falsy in Python.",
    de: `0j is a complex number with both real and imaginary parts equal to zero. Like 0 and 0.0, it is falsy. Complex numbers are falsy only when both parts are zero.

Key concepts:
• 0j = complex(0, 0) → zero complex number
• All numeric zeros are falsy: 0, 0.0, 0j
• A complex number is truthy if either part is non-zero

How it works:
• bool(0j) → 0j == 0 → False
• 0j has real=0 and imag=0

Examples:
• bool(0j) → False
• bool(1j) → True (imaginary part is non-zero)
• bool(0+0j) → False
• bool(1+0j) → True (real part is non-zero)
• bool(0+1j) → True (imaginary part is non-zero)

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // 36-50: Advanced short-circuit and operator behavior
  (_i: number) => ({
    q: `What is None or "default"?`,
    o: ['"default"', "None", "True", "False"],
    c: 0,
    e: "None is falsy, so 'or' continues and returns \"default\".",
    de: `The 'or' operator returns the first truthy operand, or the last operand if all are falsy. None is falsy, so Python continues to "default" (which is truthy) and returns it.

Key concepts:
• 'or' returns the first truthy operand (not True/False!)
• Returns the actual value, not a boolean
• If all falsy, returns the last operand

How it works:
• None → falsy, continue
• "default" → truthy → return "default"

Common pattern:
• value = user_input or "default"
• Provides fallback when value is None, 0, "", etc.
• Caution: also replaces 0, "", [] with default

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is "value" or "default"?`,
    o: ['"value"', '"default"', "True", "False"],
    c: 0,
    e: "\"value\" is truthy, so 'or' short-circuits and returns it.",
    de: `The 'or' operator short-circuits: since "value" is truthy (non-empty string), it returns "value" immediately without evaluating "default".

Key concepts:
• 'or' short-circuits on first truthy value
• Returns the actual operand, not True
• "default" is never evaluated

How it works:
• "value" → truthy → return "value" immediately
• "default" never reached

Important:
• "value" or "default" returns "value" (the string, not True)
• Python's or/and return operands, not booleans
• This is different from many other languages

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is "" or "fallback"?`,
    o: ['"fallback"', '""', "True", "False"],
    c: 0,
    e: "Empty string is falsy, so 'or' continues to \"fallback\".",
    de: `The empty string "" is falsy in Python. The 'or' operator skips it and returns "fallback", which is the next (and truthy) operand.

Key concepts:
• "" (empty string) is falsy
• 'or' skips falsy values and continues
• Returns first truthy operand found

How it works:
• "" → falsy, continue
• "fallback" → truthy → return "fallback"

Common use:
• name = user_name or "Anonymous"
• If user_name is "", uses "Anonymous"
• Caution: this also replaces 0 and False

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is 0 or None or "" or "found"?`,
    o: ['"found"', "0", "None", '""'],
    c: 0,
    e: "All values before \"found\" are falsy; 'or' chains until it finds a truthy value.",
    de: `The 'or' operator chains through multiple operands, returning the first truthy one. 0, None, and "" are all falsy, so Python keeps going until it reaches "found" (truthy).

Key concepts:
• 'or' can chain multiple operands
• Evaluates left to right
• Returns first truthy value, or last value if all falsy

How it works:
• 0 → falsy, continue
• None → falsy, continue
• "" → falsy, continue
• "found" → truthy → return "found"

If all were falsy:
• 0 or None or "" or False → returns False (last value)
• Returns last operand when all are falsy

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is 1 and 2 and 3?`,
    o: ["3", "1", "True", "Error"],
    c: 0,
    e: "'and' returns the last value when all are truthy.",
    de: `The 'and' operator returns the first falsy operand, or the last operand if all are truthy. Since 1, 2, and 3 are all truthy, 'and' returns 3 (the last value).

Key concepts:
• 'and' returns first falsy, or last if all truthy
• Returns actual values, not booleans
• Must evaluate all operands to confirm all are truthy

How it works:
• 1 → truthy, continue
• 2 → truthy, continue
• 3 → truthy, last value → return 3

Contrast with 'or':
• 1 or 2 or 3 → 1 (first truthy)
• 1 and 2 and 3 → 3 (last if all truthy)
• 'or' returns first truthy, 'and' returns last truthy

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is 1 and 0 and 3?`,
    o: ["0", "1", "3", "False"],
    c: 0,
    e: "'and' short-circuits at 0 (falsy) and returns it.",
    de: `The 'and' operator short-circuits: when it encounters 0 (falsy), it returns 0 immediately without evaluating 3.

Key concepts:
• 'and' returns the first falsy operand
• 0 is falsy → returned immediately
• Remaining operands are not evaluated

How it works:
• 1 → truthy, continue
• 0 → falsy → return 0 immediately
• 3 is never evaluated

Important:
• Returns 0 (the actual value), not False
• 'and' returns operands, not boolean conversions
• Short-circuiting saves computation

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is "" or [] or {} or "yes"?`,
    o: ['"yes"', '""', "[]", "{}"],
    c: 0,
    e: "All values before \"yes\" are falsy; 'or' returns the first truthy value.",
    de: `The 'or' operator chains through "", [], and {} — all of which are falsy (empty containers/string). It finally reaches "yes" which is truthy, and returns it.

Key concepts:
• Empty string, empty list, empty dict are all falsy
• 'or' skips all falsy values
• Returns first truthy operand

How it works:
• "" → falsy (empty string), continue
• [] → falsy (empty list), continue
• {} → falsy (empty dict), continue
• "yes" → truthy → return "yes"

Falsy containers:
• "" (empty string)
• [] (empty list)
• {} (empty dict)
• set() (empty set)
• () (empty tuple)

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is [] and "hello"?`,
    o: ["[]", '"hello"', "False", "Error"],
    c: 0,
    e: "[] is falsy, so 'and' short-circuits and returns [].",
    de: `The 'and' operator evaluates the left operand first. [] is falsy (empty list), so 'and' short-circuits and returns [] without evaluating "hello".

Key concepts:
• 'and' returns first falsy operand
• [] is falsy → returned immediately
• "hello" is never evaluated

How it works:
• [] → falsy → return [] immediately
• "hello" never reached

Important:
• Returns [] (the actual empty list), not False
• 'and' preserves the original value
• This is different from boolean False

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is [1] and "hello"?`,
    o: ['"hello"', "[1]", "True", "Error"],
    c: 0,
    e: "[1] is truthy, so 'and' continues and returns \"hello\" (last value).",
    de: `[1] is truthy (non-empty list), so 'and' continues to the next operand. "hello" is the last operand, and since all operands are truthy, 'and' returns the last value: "hello".

Key concepts:
• 'and' returns last value when all are truthy
• [1] is truthy → continue evaluating
• "hello" is the last operand → returned

How it works:
• [1] → truthy (non-empty list), continue
• "hello" → last operand → return "hello"

Contrast:
• [] and "hello" → [] (short-circuits at falsy)
• [1] and "hello" → "hello" (all truthy, returns last)

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is not 0?`,
    o: ["True", "False", "Error", "0"],
    c: 0,
    e: "0 is falsy, and 'not' inverts it to True.",
    de: `The 'not' operator returns the boolean inverse of its operand's truthiness. 0 is falsy (bool(0) is False), so not 0 returns True.

Key concepts:
• 'not' always returns a boolean (True or False)
• Unlike 'and'/'or', 'not' never returns the operand
• not falsy → True, not truthy → False

How it works:
• 0 → falsy (bool(0) is False)
• not False → True

Examples:
• not 0 → True
• not 1 → False
• not None → True
• not "" → True

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is not ""?`,
    o: ["True", "False", "Error", '""'],
    c: 0,
    e: "Empty string is falsy, and 'not' inverts it to True.",
    de: `The 'not' operator converts the operand to boolean and inverts it. "" (empty string) is falsy, so not "" returns True.

Key concepts:
• "" is falsy → not "" is True
• 'not' always returns True or False
• Commonly used for empty string checks

How it works:
• "" → falsy (bool("") is False)
• not False → True

Common pattern:
• if not s: → checks if string is empty
• Equivalent to: if s == "": or if len(s) == 0:
• Pythonic way to check for empty strings

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is not "hello"?`,
    o: ["False", "True", "Error", '"hello"'],
    c: 0,
    e: "\"hello\" is truthy, and 'not' inverts it to False.",
    de: `"hello" is a non-empty string, which is truthy. The 'not' operator inverts it to False.

Key concepts:
• Non-empty strings are truthy
• not truthy → False
• 'not' always returns boolean

How it works:
• "hello" → truthy (bool("hello") is True)
• not True → False

Contrast:
• not "" → True (empty string is falsy)
• not "hello" → False (non-empty string is truthy)
• not "False" → False ("False" is a non-empty string, truthy!)

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is not []?`,
    o: ["True", "False", "Error", "[]"],
    c: 0,
    e: "Empty list is falsy, and 'not' inverts it to True.",
    de: `[] (empty list) is falsy in Python. The 'not' operator inverts it to True.

Key concepts:
• Empty containers ([], {}, set(), ()) are falsy
• not [] → True
• Pythonic way to check for empty lists

How it works:
• [] → falsy (bool([]) is False)
• not False → True

Common pattern:
• if not my_list: → checks if list is empty
• Equivalent to: if len(my_list) == 0:
• Preferred Pythonic style over len() check

Contrast:
• not [] → True (empty)
• not [1] → False (non-empty)
• not [False] → False (has one element, truthy container)

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is not not True?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "Double negation: not True → False, then not False → True.",
    de: `Double negation cancels out. not True gives False, then not False gives True. The result is the original boolean value.

Key concepts:
• not not x is equivalent to bool(x)
• Double negation returns to original truthiness
• Always results in True or False (boolean)

How it works:
• not True → False
• not False → True
• Result: True

Practical use:
• not not x is sometimes used as bool(x)
• Converts any value to its boolean equivalent
• bool(x) is clearer and preferred

Examples:
• not not True → True
• not not False → False
• not not 42 → True (42 is truthy)
• not not 0 → False (0 is falsy)

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is not not []?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "Double negation of falsy: not [] → True, then not True → False.",
    de: `[] is falsy. Double negation converts it to its boolean equivalent: not [] → True, not True → False. The result shows that [] is falsy.

Key concepts:
• not not [] ≡ bool([]) ≡ False
• Double negation reveals truthiness as boolean
• [] is falsy, so not not [] is False

How it works:
• [] → falsy
• not [] → True (inverting falsy)
• not True → False (inverting back)
• Result: False

Equivalent:
• not not [] → False
• bool([]) → False
• Both convert [] to its boolean truthiness

Practical note:
• not not x is a way to get bool(x)
• bool() is clearer and more Pythonic
• not not [] → False confirms [] is falsy

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
