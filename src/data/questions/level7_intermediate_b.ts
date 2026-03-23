// --- LEVEL 7 INTERMEDIATE B: Generators, Scope Mastery, Advanced Function Patterns (50 TRULY UNIQUE QUESTIONS) ---
// Topics 51-100: generator functions, yield/yield from, generator expressions, LEGB scope, closures, function introspection, positional-only/keyword-only params
export const level7IntermediateB = [
  // 51. Basic generator with three yields collected into a list
  (_i: number) => ({
    q: `def gen(): yield 1; yield 2; yield 3\nWhat is list(gen())?`,
    o: ['[1, 2, 3]', '[1]', '(1, 2, 3)', 'Error'],
    c: 0,
    e: "Each yield produces one value. list() collects all yielded values into [1, 2, 3].",
    de: `A generator function contains one or more yield expressions. Calling gen() returns a generator object, not the results directly. Wrapping it in list() iterates the generator to exhaustion, collecting every yielded value.

Key concepts:
• yield pauses the function and emits a value
• Each call to next() resumes until the next yield
• list() calls next() repeatedly until StopIteration

How it works:
1. gen() returns a generator object
2. list() calls next() three times, getting 1, 2, 3
3. Fourth next() raises StopIteration → list() stops
4. Result: [1, 2, 3]

Common uses:
• Lazy sequences — produce values on demand
• Memory-efficient iteration over large data
• Pipeline processing with chained generators

Key Concepts:
• Result: [1, 2, 3] Common uses: • Lazy sequences — produce values on demand • Memory-efficient iteration over large data • Pipeline processing with chained generators

Key Distinctions:
• This question’s focus is best captured by: A generator function contains one or more yield expressions.
• The contrast that matters for correctness is summarized by: Calling gen() returns a generator object, not the results directly.

How It Works:
• Python follows the rule implied by: A generator function contains one or more yield expressions.
• The outcome you observe follows from: Result: [1, 2, 3] Common uses: • Lazy sequences — produce values on demand • Memory-efficient iteration over large data • Pipeline processing with chained generators

Step-by-Step Execution:
1. Start from the construct described in: A generator function contains one or more yield expressions.
2. Resolve the subparts implied by: Calling gen() returns a generator object, not the results directly.
3. Apply the core semantics highlighted in: Wrapping it in list() iterates the generator to exhaustion, collecting every yielded value.
4. Confirm the final result aligns with: Result: [1, 2, 3] Common uses: • Lazy sequences — produce values on demand • Memory-efficient iteration over large data • Pipeline processing with chained generators

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Calling gen() returns a generator object, not the results directly.
2. Apply the construct’s main rule next, matching: A generator function contains one or more yield expressions.
3. Produce any intermediate values that Result: [1, 2, 3] Common uses: • Lazy sequences — produce values on demand • Memory-efficient iteration over large data • Pipeline processing with chained generators relies on
4. Finish by returning/assembling the final output named by: Result: [1, 2, 3] Common uses: • Lazy sequences — produce values on demand • Memory-efficient iteration over large data • Pipeline processing with chained generators
5. Use the result only after the full construct has completed, per: A generator function contains one or more yield expressions.

Common Use Cases:
• Teaching this behavior using the mental model: A generator function contains one or more yield expressions.
• Debugging when the observed value should match the expectation in: Result: [1, 2, 3] Common uses: • Lazy sequences — produce values on demand • Memory-efficient iteration over large data • Pipeline processing with chained generators

Edge Cases:
• If inputs vary from the situation described in: Calling gen() returns a generator object, not the results directly., the behavior can change.
• When the construct’s assumptions differ, the rule in: Wrapping it in list() iterates the generator to exhaustion, collecting every yielded value. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Result: [1, 2, 3] Common uses: • Lazy sequences — produce values on demand • Memory-efficient iteration over large data • Pipeline processing with chained generators.
• When performance matters, prefer the simplest pattern that still implements: A generator function contains one or more yield expressions..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: A generator function contains one or more yield expressions..

Notes:
• For maintainable code, make the intent behind: Calling gen() returns a generator object, not the results directly. explicit (and test it with inputs like those in this prompt).`
  }),
  // 52. next() on generator returns first yielded value
  (_i: number) => ({
    q: `def gen(): yield 1; yield 2\ng = gen()\nWhat is next(g)?`,
    o: ['1', '2', '[1, 2]', 'Error'],
    c: 0,
    e: "next(g) advances the generator to its first yield and returns 1.",
    de: `Calling next() on a generator resumes execution until the next yield statement, then returns the yielded value and pauses.

Key concepts:
• next(g) drives the generator forward one step
• The generator pauses at each yield
• State (local variables, instruction pointer) is preserved between calls

How it works:
1. g = gen() creates the generator (body not yet executed)
2. next(g) runs the body up to "yield 1" → returns 1
3. Generator is now paused right after the first yield
4. A subsequent next(g) would resume and hit "yield 2"

Example:
g = gen()
next(g)  # 1  — first yield
next(g)  # 2  — second yield

Key Concepts:
• A subsequent next(g) would resume and hit "yield 2" Example: g = gen() next(g) # 1 — first yield next(g) # 2 — second yield

Key Distinctions:
• This question’s focus is best captured by: Calling next() on a generator resumes execution until the next yield statement, then returns the yielded value and pauses.
• The contrast that matters for correctness is summarized by: Key concepts: • next(g) drives the generator forward one step • The generator pauses at each yield • State (local variables, instruction pointer) is preserved between calls How it works: 1.

How It Works:
• Python follows the rule implied by: Calling next() on a generator resumes execution until the next yield statement, then returns the yielded value and pauses.
• The outcome you observe follows from: A subsequent next(g) would resume and hit "yield 2" Example: g = gen() next(g) # 1 — first yield next(g) # 2 — second yield

Step-by-Step Execution:
1. Start from the construct described in: Calling next() on a generator resumes execution until the next yield statement, then returns the yielded value and pauses.
2. Resolve the subparts implied by: Key concepts: • next(g) drives the generator forward one step • The generator pauses at each yield • State (local variables, instruction pointer) is preserved between calls How it works: 1.
3. Apply the core semantics highlighted in: g = gen() creates the generator (body not yet executed) 2.
4. Confirm the final result aligns with: A subsequent next(g) would resume and hit "yield 2" Example: g = gen() next(g) # 1 — first yield next(g) # 2 — second yield

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • next(g) drives the generator forward one step • The generator pauses at each yield • State (local variables, instruction pointer) is preserved between calls How it works: 1.
2. Apply the construct’s main rule next, matching: Calling next() on a generator resumes execution until the next yield statement, then returns the yielded value and pauses.
3. Produce any intermediate values that A subsequent next(g) would resume and hit "yield 2" Example: g = gen() next(g) # 1 — first yield next(g) # 2 — second yield relies on
4. Finish by returning/assembling the final output named by: A subsequent next(g) would resume and hit "yield 2" Example: g = gen() next(g) # 1 — first yield next(g) # 2 — second yield
5. Use the result only after the full construct has completed, per: Calling next() on a generator resumes execution until the next yield statement, then returns the yielded value and pauses.

Common Use Cases:
• Teaching this behavior using the mental model: Calling next() on a generator resumes execution until the next yield statement, then returns the yielded value and pauses.
• Debugging when the observed value should match the expectation in: A subsequent next(g) would resume and hit "yield 2" Example: g = gen() next(g) # 1 — first yield next(g) # 2 — second yield

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • next(g) drives the generator forward one step • The generator pauses at each yield • State (local variables, instruction pointer) is preserved between calls How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: g = gen() creates the generator (body not yet executed) 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: A subsequent next(g) would resume and hit "yield 2" Example: g = gen() next(g) # 1 — first yield next(g) # 2 — second yield.
• When performance matters, prefer the simplest pattern that still implements: Calling next() on a generator resumes execution until the next yield statement, then returns the yielded value and pauses..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Calling next() on a generator resumes execution until the next yield statement, then returns the yielded value and pauses..

Notes:
• For maintainable code, make the intent behind: Key concepts: • next(g) drives the generator forward one step • The generator pauses at each yield • State (local variables, instruction pointer) is preserved between calls How it works: 1. explicit (and test it with inputs like those in this prompt).`
  }),
  // 53. Second next() returns second yielded value
  (_i: number) => ({
    q: `def gen(): yield 1; yield 2\ng = gen(); next(g)\nWhat is next(g)?`,
    o: ['2', '1', '[1, 2]', 'StopIteration'],
    c: 0,
    e: "The first next(g) consumed 1. The second next(g) resumes and yields 2.",
    de: `Each next() call resumes the generator from where it last paused. The generator remembers its position between calls.

Key concepts:
• Generator state is preserved across next() calls
• First next() → yield 1 (pauses), second next() → yield 2 (pauses)
• Values are produced lazily, one at a time

How it works:
1. next(g) first call: runs to "yield 1", returns 1, pauses
2. next(g) second call: resumes after first yield, runs to "yield 2", returns 2, pauses
3. Generator is now paused after the second yield

Example:
g = gen()
next(g)  # 1
next(g)  # 2  — generator resumes from where it paused

Key Concepts:
• Generator is now paused after the second yield Example: g = gen() next(g) # 1 next(g) # 2 — generator resumes from where it paused

Key Distinctions:
• This question’s focus is best captured by: Each next() call resumes the generator from where it last paused.
• The contrast that matters for correctness is summarized by: The generator remembers its position between calls.

How It Works:
• Python follows the rule implied by: Each next() call resumes the generator from where it last paused.
• The outcome you observe follows from: Generator is now paused after the second yield Example: g = gen() next(g) # 1 next(g) # 2 — generator resumes from where it paused

Step-by-Step Execution:
1. Start from the construct described in: Each next() call resumes the generator from where it last paused.
2. Resolve the subparts implied by: The generator remembers its position between calls.
3. Apply the core semantics highlighted in: Key concepts: • Generator state is preserved across next() calls • First next() → yield 1 (pauses), second next() → yield 2 (pauses) • Values are produced lazily, one at a time How it works: 1.
4. Confirm the final result aligns with: Generator is now paused after the second yield Example: g = gen() next(g) # 1 next(g) # 2 — generator resumes from where it paused

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The generator remembers its position between calls.
2. Apply the construct’s main rule next, matching: Each next() call resumes the generator from where it last paused.
3. Produce any intermediate values that Generator is now paused after the second yield Example: g = gen() next(g) # 1 next(g) # 2 — generator resumes from where it paused relies on
4. Finish by returning/assembling the final output named by: Generator is now paused after the second yield Example: g = gen() next(g) # 1 next(g) # 2 — generator resumes from where it paused
5. Use the result only after the full construct has completed, per: Each next() call resumes the generator from where it last paused.

Common Use Cases:
• Teaching this behavior using the mental model: Each next() call resumes the generator from where it last paused.
• Debugging when the observed value should match the expectation in: Generator is now paused after the second yield Example: g = gen() next(g) # 1 next(g) # 2 — generator resumes from where it paused

Edge Cases:
• If inputs vary from the situation described in: The generator remembers its position between calls., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • Generator state is preserved across next() calls • First next() → yield 1 (pauses), second next() → yield 2 (pauses) • Values are produced lazily, one at a time How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Generator is now paused after the second yield Example: g = gen() next(g) # 1 next(g) # 2 — generator resumes from where it paused.
• When performance matters, prefer the simplest pattern that still implements: Each next() call resumes the generator from where it last paused..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Each next() call resumes the generator from where it last paused..

Notes:
• For maintainable code, make the intent behind: The generator remembers its position between calls. explicit (and test it with inputs like those in this prompt).`
  }),
  // 54. next() past all yields raises StopIteration
  (_i: number) => ({
    q: `def gen(): yield 1; yield 2\ng = gen(); next(g); next(g)\nWhat happens with next(g)?`,
    o: ['StopIteration is raised', '2', 'None', '1'],
    c: 0,
    e: "Both yields are exhausted. A third next() raises StopIteration.",
    de: `When a generator has no more yield statements to execute, calling next() raises a StopIteration exception. This signals that the generator is exhausted.

Key concepts:
• StopIteration is the standard signal for iterator exhaustion
• for loops and list() catch StopIteration automatically
• Manual next() calls must handle it with try/except or a default value

How it works:
1. next(g) → 1 (first yield)
2. next(g) → 2 (second yield)
3. next(g) → generator body ends → StopIteration raised
4. Once exhausted, the generator cannot be restarted

Tip: next(g, default) returns default instead of raising StopIteration:
next(g, "done")  # "done" instead of exception

Key Concepts:
• Once exhausted, the generator cannot be restarted Tip: next(g, default) returns default instead of raising StopIteration: next(g, "done") # "done" instead of exception

Key Distinctions:
• This question’s focus is best captured by: When a generator has no more yield statements to execute, calling next() raises a StopIteration exception.
• The contrast that matters for correctness is summarized by: This signals that the generator is exhausted.

How It Works:
• Python follows the rule implied by: When a generator has no more yield statements to execute, calling next() raises a StopIteration exception.
• The outcome you observe follows from: Once exhausted, the generator cannot be restarted Tip: next(g, default) returns default instead of raising StopIteration: next(g, "done") # "done" instead of exception

Step-by-Step Execution:
1. Start from the construct described in: When a generator has no more yield statements to execute, calling next() raises a StopIteration exception.
2. Resolve the subparts implied by: This signals that the generator is exhausted.
3. Apply the core semantics highlighted in: Key concepts: • StopIteration is the standard signal for iterator exhaustion • for loops and list() catch StopIteration automatically • Manual next() calls must handle it with try/except or a default value How it works: 1.
4. Confirm the final result aligns with: Once exhausted, the generator cannot be restarted Tip: next(g, default) returns default instead of raising StopIteration: next(g, "done") # "done" instead of exception

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: This signals that the generator is exhausted.
2. Apply the construct’s main rule next, matching: When a generator has no more yield statements to execute, calling next() raises a StopIteration exception.
3. Produce any intermediate values that Once exhausted, the generator cannot be restarted Tip: next(g, default) returns default instead of raising StopIteration: next(g, "done") # "done" instead of exception relies on
4. Finish by returning/assembling the final output named by: Once exhausted, the generator cannot be restarted Tip: next(g, default) returns default instead of raising StopIteration: next(g, "done") # "done" instead of exception
5. Use the result only after the full construct has completed, per: When a generator has no more yield statements to execute, calling next() raises a StopIteration exception.

Common Use Cases:
• Teaching this behavior using the mental model: When a generator has no more yield statements to execute, calling next() raises a StopIteration exception.
• Debugging when the observed value should match the expectation in: Once exhausted, the generator cannot be restarted Tip: next(g, default) returns default instead of raising StopIteration: next(g, "done") # "done" instead of exception

Edge Cases:
• If inputs vary from the situation described in: This signals that the generator is exhausted., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • StopIteration is the standard signal for iterator exhaustion • for loops and list() catch StopIteration automatically • Manual next() calls must handle it with try/except or a default value How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Once exhausted, the generator cannot be restarted Tip: next(g, default) returns default instead of raising StopIteration: next(g, "done") # "done" instead of exception.
• When performance matters, prefer the simplest pattern that still implements: When a generator has no more yield statements to execute, calling next() raises a StopIteration exception..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: When a generator has no more yield statements to execute, calling next() raises a StopIteration exception..

Notes:
• For maintainable code, make the intent behind: This signals that the generator is exhausted. explicit (and test it with inputs like those in this prompt).`
  }),
  // 55. Generator yielding computed values from a loop
  (_i: number) => ({
    q: `def gen():\n    for i in range(3):\n        yield i ** 2\nWhat is list(gen())?`,
    o: ['[0, 1, 4]', '[0, 1, 2]', '[1, 4, 9]', '[0, 2, 4]'],
    c: 0,
    e: "range(3) gives 0, 1, 2. Squaring each: 0**2=0, 1**2=1, 2**2=4.",
    de: `Generators can contain loops. Each iteration of the loop hits the yield, pauses, and resumes on the next next() call.

Key concepts:
• yield inside a loop produces one value per iteration
• The loop state (variable i) is preserved across pauses
• list() drives the generator through all loop iterations

How it works:
1. i=0: yield 0**2 → yields 0
2. i=1: yield 1**2 → yields 1
3. i=2: yield 2**2 → yields 4
4. Loop ends → StopIteration
5. list() collects [0, 1, 4]

Common uses:
• Transforming sequences lazily
• Processing large datasets element by element

Key Concepts:
• list() collects [0, 1, 4] Common uses: • Transforming sequences lazily • Processing large datasets element by element

Key Distinctions:
• This question’s focus is best captured by: Generators can contain loops.
• The contrast that matters for correctness is summarized by: Each iteration of the loop hits the yield, pauses, and resumes on the next next() call.

How It Works:
• Python follows the rule implied by: Generators can contain loops.
• The outcome you observe follows from: list() collects [0, 1, 4] Common uses: • Transforming sequences lazily • Processing large datasets element by element

Step-by-Step Execution:
1. Start from the construct described in: Generators can contain loops.
2. Resolve the subparts implied by: Each iteration of the loop hits the yield, pauses, and resumes on the next next() call.
3. Apply the core semantics highlighted in: Key concepts: • yield inside a loop produces one value per iteration • The loop state (variable i) is preserved across pauses • list() drives the generator through all loop iterations How it works: 1.
4. Confirm the final result aligns with: list() collects [0, 1, 4] Common uses: • Transforming sequences lazily • Processing large datasets element by element

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Each iteration of the loop hits the yield, pauses, and resumes on the next next() call.
2. Apply the construct’s main rule next, matching: Generators can contain loops.
3. Produce any intermediate values that list() collects [0, 1, 4] Common uses: • Transforming sequences lazily • Processing large datasets element by element relies on
4. Finish by returning/assembling the final output named by: list() collects [0, 1, 4] Common uses: • Transforming sequences lazily • Processing large datasets element by element
5. Use the result only after the full construct has completed, per: Generators can contain loops.

Common Use Cases:
• Teaching this behavior using the mental model: Generators can contain loops.
• Debugging when the observed value should match the expectation in: list() collects [0, 1, 4] Common uses: • Transforming sequences lazily • Processing large datasets element by element

Edge Cases:
• If inputs vary from the situation described in: Each iteration of the loop hits the yield, pauses, and resumes on the next next() call., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • yield inside a loop produces one value per iteration • The loop state (variable i) is preserved across pauses • list() drives the generator through all loop iterations How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: list() collects [0, 1, 4] Common uses: • Transforming sequences lazily • Processing large datasets element by element.
• When performance matters, prefer the simplest pattern that still implements: Generators can contain loops..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Generators can contain loops..

Notes:
• For maintainable code, make the intent behind: Each iteration of the loop hits the yield, pauses, and resumes on the next next() call. explicit (and test it with inputs like those in this prompt).`
  }),
  // 56. What does the yield keyword do?
  (_i: number) => ({
    q: `What does the yield keyword do in a Python function?`,
    o: ['Pauses the function and produces a value', 'Terminates the function permanently', 'Returns a list of values', 'Imports a module'],
    c: 0,
    e: "yield pauses the function, produces a value, and resumes execution on the next next() call.",
    de: `The yield keyword transforms a regular function into a generator function. When the function is called, it returns a generator object instead of executing the body immediately.

Key concepts:
• yield pauses execution and sends a value to the caller
• The function's state (local variables, position) is frozen
• Calling next() resumes from exactly where it paused
• When the function ends, StopIteration is raised

How it works:
1. def gen(): yield value — defines a generator function
2. g = gen() — creates generator object (body not executed yet)
3. next(g) — runs body until yield, returns yielded value, pauses
4. next(g) — resumes from pause point, runs until next yield or end

yield vs return:
• return exits the function permanently
• yield pauses the function and can resume later
• A function can yield multiple values across multiple calls

Key Concepts:
• next(g) — resumes from pause point, runs until next yield or end yield vs return: • return exits the function permanently • yield pauses the function and can resume later • A function can yield multiple values across multiple calls

Key Distinctions:
• This question’s focus is best captured by: The yield keyword transforms a regular function into a generator function.
• The contrast that matters for correctness is summarized by: When the function is called, it returns a generator object instead of executing the body immediately.

How It Works:
• Python follows the rule implied by: The yield keyword transforms a regular function into a generator function.
• The outcome you observe follows from: next(g) — resumes from pause point, runs until next yield or end yield vs return: • return exits the function permanently • yield pauses the function and can resume later • A function can yield multiple values across multiple calls

Step-by-Step Execution:
1. Start from the construct described in: The yield keyword transforms a regular function into a generator function.
2. Resolve the subparts implied by: When the function is called, it returns a generator object instead of executing the body immediately.
3. Apply the core semantics highlighted in: Key concepts: • yield pauses execution and sends a value to the caller • The function's state (local variables, position) is frozen • Calling next() resumes from exactly where it paused • When the function ends, StopIteration is raised How it works: 1.
4. Confirm the final result aligns with: next(g) — resumes from pause point, runs until next yield or end yield vs return: • return exits the function permanently • yield pauses the function and can resume later • A function can yield multiple values across multiple calls

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: When the function is called, it returns a generator object instead of executing the body immediately.
2. Apply the construct’s main rule next, matching: The yield keyword transforms a regular function into a generator function.
3. Produce any intermediate values that next(g) — resumes from pause point, runs until next yield or end yield vs return: • return exits the function permanently • yield pauses the function and can resume later • A function can yield multiple values across multiple calls relies on
4. Finish by returning/assembling the final output named by: next(g) — resumes from pause point, runs until next yield or end yield vs return: • return exits the function permanently • yield pauses the function and can resume later • A function can yield multiple values across multiple calls
5. Use the result only after the full construct has completed, per: The yield keyword transforms a regular function into a generator function.

Common Use Cases:
• Teaching this behavior using the mental model: The yield keyword transforms a regular function into a generator function.
• Debugging when the observed value should match the expectation in: next(g) — resumes from pause point, runs until next yield or end yield vs return: • return exits the function permanently • yield pauses the function and can resume later • A function can yield multiple values across multiple calls

Edge Cases:
• If inputs vary from the situation described in: When the function is called, it returns a generator object instead of executing the body immediately., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • yield pauses execution and sends a value to the caller • The function's state (local variables, position) is frozen • Calling next() resumes from exactly where it paused • When the function ends, StopIteration is raised How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: next(g) — resumes from pause point, runs until next yield or end yield vs return: • return exits the function permanently • yield pauses the function and can resume later • A function can yield multiple values across multiple calls.
• When performance matters, prefer the simplest pattern that still implements: The yield keyword transforms a regular function into a generator function..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The yield keyword transforms a regular function into a generator function..

Notes:
• For maintainable code, make the intent behind: When the function is called, it returns a generator object instead of executing the body immediately. explicit (and test it with inputs like those in this prompt).`
  }),
  // 57. yield from delegates to a sub-iterable
  (_i: number) => ({
    q: `def gen(): yield from [1, 2, 3]\nWhat is list(gen())?`,
    o: ['[1, 2, 3]', '[[1, 2, 3]]', '[1]', 'Error'],
    c: 0,
    e: "yield from iterates over the list and yields each element individually.",
    de: `yield from delegates iteration to another iterable, yielding each of its elements one by one. It is equivalent to writing a for loop with yield inside.

Key concepts:
• yield from iterable yields every item from that iterable
• Equivalent to: for item in iterable: yield item
• Works with any iterable: lists, ranges, strings, other generators

How it works:
1. yield from [1, 2, 3] iterates over the list
2. Yields 1, then 2, then 3 individually
3. list(gen()) collects all three → [1, 2, 3]

Without yield from:
def gen():
    for item in [1, 2, 3]:
        yield item  # same result

Common uses:
• Flattening nested generators
• Delegating to sub-generators
• Simplifying recursive generators

Key Concepts:
• list(gen()) collects all three → [1, 2, 3] Without yield from: def gen(): for item in [1, 2, 3]: yield item # same result Common uses: • Flattening nested generators • Delegating to sub-generators • Simplifying recursive generators

Key Distinctions:
• This question’s focus is best captured by: yield from delegates iteration to another iterable, yielding each of its elements one by one.
• The contrast that matters for correctness is summarized by: It is equivalent to writing a for loop with yield inside.

How It Works:
• Python follows the rule implied by: yield from delegates iteration to another iterable, yielding each of its elements one by one.
• The outcome you observe follows from: list(gen()) collects all three → [1, 2, 3] Without yield from: def gen(): for item in [1, 2, 3]: yield item # same result Common uses: • Flattening nested generators • Delegating to sub-generators • Simplifying recursive generators

Step-by-Step Execution:
1. Start from the construct described in: yield from delegates iteration to another iterable, yielding each of its elements one by one.
2. Resolve the subparts implied by: It is equivalent to writing a for loop with yield inside.
3. Apply the core semantics highlighted in: Key concepts: • yield from iterable yields every item from that iterable • Equivalent to: for item in iterable: yield item • Works with any iterable: lists, ranges, strings, other generators How it works: 1.
4. Confirm the final result aligns with: list(gen()) collects all three → [1, 2, 3] Without yield from: def gen(): for item in [1, 2, 3]: yield item # same result Common uses: • Flattening nested generators • Delegating to sub-generators • Simplifying recursive generators

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: It is equivalent to writing a for loop with yield inside.
2. Apply the construct’s main rule next, matching: yield from delegates iteration to another iterable, yielding each of its elements one by one.
3. Produce any intermediate values that list(gen()) collects all three → [1, 2, 3] Without yield from: def gen(): for item in [1, 2, 3]: yield item # same result Common uses: • Flattening nested generators • Delegating to sub-generators • Simplifying recursive generators relies on
4. Finish by returning/assembling the final output named by: list(gen()) collects all three → [1, 2, 3] Without yield from: def gen(): for item in [1, 2, 3]: yield item # same result Common uses: • Flattening nested generators • Delegating to sub-generators • Simplifying recursive generators
5. Use the result only after the full construct has completed, per: yield from delegates iteration to another iterable, yielding each of its elements one by one.

Common Use Cases:
• Teaching this behavior using the mental model: yield from delegates iteration to another iterable, yielding each of its elements one by one.
• Debugging when the observed value should match the expectation in: list(gen()) collects all three → [1, 2, 3] Without yield from: def gen(): for item in [1, 2, 3]: yield item # same result Common uses: • Flattening nested generators • Delegating to sub-generators • Simplifying recursive generators

Edge Cases:
• If inputs vary from the situation described in: It is equivalent to writing a for loop with yield inside., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • yield from iterable yields every item from that iterable • Equivalent to: for item in iterable: yield item • Works with any iterable: lists, ranges, strings, other generators How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: list(gen()) collects all three → [1, 2, 3] Without yield from: def gen(): for item in [1, 2, 3]: yield item # same result Common uses: • Flattening nested generators • Delegating to sub-generators • Simplifying recursive generators.
• When performance matters, prefer the simplest pattern that still implements: yield from delegates iteration to another iterable, yielding each of its elements one by one..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: yield from delegates iteration to another iterable, yielding each of its elements one by one..

Notes:
• For maintainable code, make the intent behind: It is equivalent to writing a for loop with yield inside. explicit (and test it with inputs like those in this prompt).`
  }),
  // 58. yield from with range
  (_i: number) => ({
    q: `def gen(): yield from range(5)\nWhat is list(gen())?`,
    o: ['[0, 1, 2, 3, 4]', '[1, 2, 3, 4, 5]', 'range(0, 5)', '[0, 1, 2, 3, 4, 5]'],
    c: 0,
    e: "yield from range(5) yields each number from 0 to 4 individually.",
    de: `yield from works with any iterable, including range objects. It iterates over the range and yields each value.

Key concepts:
• range(5) produces 0, 1, 2, 3, 4
• yield from range(5) yields each of those values one at a time
• The generator acts as a transparent wrapper around the range

How it works:
1. yield from range(5) starts iterating range(5)
2. Yields: 0, 1, 2, 3, 4 (one per next() call)
3. When range is exhausted, generator continues to next statement (or ends)
4. list() collects all values → [0, 1, 2, 3, 4]

Example:
def gen(): yield from range(5)
list(gen())  # [0, 1, 2, 3, 4]

Key Concepts:
• list() collects all values → [0, 1, 2, 3, 4] Example: def gen(): yield from range(5) list(gen()) # [0, 1, 2, 3, 4]

Key Distinctions:
• This question’s focus is best captured by: yield from works with any iterable, including range objects.
• The contrast that matters for correctness is summarized by: It iterates over the range and yields each value.

How It Works:
• Python follows the rule implied by: yield from works with any iterable, including range objects.
• The outcome you observe follows from: list() collects all values → [0, 1, 2, 3, 4] Example: def gen(): yield from range(5) list(gen()) # [0, 1, 2, 3, 4]

Step-by-Step Execution:
1. Start from the construct described in: yield from works with any iterable, including range objects.
2. Resolve the subparts implied by: It iterates over the range and yields each value.
3. Apply the core semantics highlighted in: Key concepts: • range(5) produces 0, 1, 2, 3, 4 • yield from range(5) yields each of those values one at a time • The generator acts as a transparent wrapper around the range How it works: 1.
4. Confirm the final result aligns with: list() collects all values → [0, 1, 2, 3, 4] Example: def gen(): yield from range(5) list(gen()) # [0, 1, 2, 3, 4]

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: It iterates over the range and yields each value.
2. Apply the construct’s main rule next, matching: yield from works with any iterable, including range objects.
3. Produce any intermediate values that list() collects all values → [0, 1, 2, 3, 4] Example: def gen(): yield from range(5) list(gen()) # [0, 1, 2, 3, 4] relies on
4. Finish by returning/assembling the final output named by: list() collects all values → [0, 1, 2, 3, 4] Example: def gen(): yield from range(5) list(gen()) # [0, 1, 2, 3, 4]
5. Use the result only after the full construct has completed, per: yield from works with any iterable, including range objects.

Common Use Cases:
• Teaching this behavior using the mental model: yield from works with any iterable, including range objects.
• Debugging when the observed value should match the expectation in: list() collects all values → [0, 1, 2, 3, 4] Example: def gen(): yield from range(5) list(gen()) # [0, 1, 2, 3, 4]

Edge Cases:
• If inputs vary from the situation described in: It iterates over the range and yields each value., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • range(5) produces 0, 1, 2, 3, 4 • yield from range(5) yields each of those values one at a time • The generator acts as a transparent wrapper around the range How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: list() collects all values → [0, 1, 2, 3, 4] Example: def gen(): yield from range(5) list(gen()) # [0, 1, 2, 3, 4].
• When performance matters, prefer the simplest pattern that still implements: yield from works with any iterable, including range objects..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: yield from works with any iterable, including range objects..

Notes:
• For maintainable code, make the intent behind: It iterates over the range and yields each value. explicit (and test it with inputs like those in this prompt).`
  }),
  // 59. yield from with a string yields individual characters
  (_i: number) => ({
    q: `def gen(): yield from "abc"\nWhat is list(gen())?`,
    o: ['["a", "b", "c"]', '["abc"]', '[("a", "b", "c")]', 'Error'],
    c: 0,
    e: "Strings are iterable. yield from 'abc' yields each character: 'a', 'b', 'c'.",
    de: `Strings in Python are iterable — iterating over a string produces individual characters. yield from a string therefore yields one character at a time.

Key concepts:
• Strings are sequences of characters
• Iterating "abc" gives "a", "b", "c"
• yield from "abc" is equivalent to: for ch in "abc": yield ch

How it works:
1. yield from "abc" iterates over the string
2. Yields "a", then "b", then "c"
3. list() collects them → ["a", "b", "c"]

Contrast with yield (no from):
def gen(): yield "abc"
list(gen())  # ["abc"] — yields the whole string as one item

Key Concepts:
• list() collects them → ["a", "b", "c"] Contrast with yield (no from): def gen(): yield "abc" list(gen()) # ["abc"] — yields the whole string as one item

Key Distinctions:
• This question’s focus is best captured by: Strings in Python are iterable — iterating over a string produces individual characters.
• The contrast that matters for correctness is summarized by: yield from a string therefore yields one character at a time.

How It Works:
• Python follows the rule implied by: Strings in Python are iterable — iterating over a string produces individual characters.
• The outcome you observe follows from: list() collects them → ["a", "b", "c"] Contrast with yield (no from): def gen(): yield "abc" list(gen()) # ["abc"] — yields the whole string as one item

Step-by-Step Execution:
1. Start from the construct described in: Strings in Python are iterable — iterating over a string produces individual characters.
2. Resolve the subparts implied by: yield from a string therefore yields one character at a time.
3. Apply the core semantics highlighted in: Key concepts: • Strings are sequences of characters • Iterating "abc" gives "a", "b", "c" • yield from "abc" is equivalent to: for ch in "abc": yield ch How it works: 1.
4. Confirm the final result aligns with: list() collects them → ["a", "b", "c"] Contrast with yield (no from): def gen(): yield "abc" list(gen()) # ["abc"] — yields the whole string as one item

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: yield from a string therefore yields one character at a time.
2. Apply the construct’s main rule next, matching: Strings in Python are iterable — iterating over a string produces individual characters.
3. Produce any intermediate values that list() collects them → ["a", "b", "c"] Contrast with yield (no from): def gen(): yield "abc" list(gen()) # ["abc"] — yields the whole string as one item relies on
4. Finish by returning/assembling the final output named by: list() collects them → ["a", "b", "c"] Contrast with yield (no from): def gen(): yield "abc" list(gen()) # ["abc"] — yields the whole string as one item
5. Use the result only after the full construct has completed, per: Strings in Python are iterable — iterating over a string produces individual characters.

Common Use Cases:
• Teaching this behavior using the mental model: Strings in Python are iterable — iterating over a string produces individual characters.
• Debugging when the observed value should match the expectation in: list() collects them → ["a", "b", "c"] Contrast with yield (no from): def gen(): yield "abc" list(gen()) # ["abc"] — yields the whole string as one item

Edge Cases:
• If inputs vary from the situation described in: yield from a string therefore yields one character at a time., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • Strings are sequences of characters • Iterating "abc" gives "a", "b", "c" • yield from "abc" is equivalent to: for ch in "abc": yield ch How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: list() collects them → ["a", "b", "c"] Contrast with yield (no from): def gen(): yield "abc" list(gen()) # ["abc"] — yields the whole string as one item.
• When performance matters, prefer the simplest pattern that still implements: Strings in Python are iterable — iterating over a string produces individual characters..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Strings in Python are iterable — iterating over a string produces individual characters..

Notes:
• For maintainable code, make the intent behind: yield from a string therefore yields one character at a time. explicit (and test it with inputs like those in this prompt).`
  }),
  // 60. Generator expression inside sum()
  (_i: number) => ({
    q: `What is sum(x**2 for x in range(4))?`,
    o: ['14', '9', '30', '5'],
    c: 0,
    e: "range(4) gives 0,1,2,3. Squares: 0+1+4+9 = 14.",
    de: `A generator expression inside a function call avoids creating an intermediate list. sum() consumes the generated values one at a time.

Key concepts:
• (x**2 for x in range(4)) is a generator expression
• It produces 0, 1, 4, 9 lazily
• sum() adds them: 0 + 1 + 4 + 9 = 14
• No list is created in memory — values are consumed as generated

How it works:
1. range(4) → 0, 1, 2, 3
2. x**2 for each: 0, 1, 4, 9
3. sum() accumulates: 0 + 1 + 4 + 9 = 14

Generator expression vs list comprehension:
sum([x**2 for x in range(4)])  # creates list first, then sums — same result but uses more memory
sum(x**2 for x in range(4))    # no intermediate list — more memory efficient

Key Concepts:
• sum() accumulates: 0 + 1 + 4 + 9 = 14 Generator expression vs list comprehension: sum([x**2 for x in range(4)]) # creates list first, then sums — same result but uses more memory sum(x**2 for x in range(4)) # no intermediate list — more memory efficient

Key Distinctions:
• This question’s focus is best captured by: A generator expression inside a function call avoids creating an intermediate list.
• The contrast that matters for correctness is summarized by: sum() consumes the generated values one at a time.

How It Works:
• Python follows the rule implied by: A generator expression inside a function call avoids creating an intermediate list.
• The outcome you observe follows from: sum() accumulates: 0 + 1 + 4 + 9 = 14 Generator expression vs list comprehension: sum([x**2 for x in range(4)]) # creates list first, then sums — same result but uses more memory sum(x**2 for x in range(4)) # no intermediate list — more memory efficient

Step-by-Step Execution:
1. Start from the construct described in: A generator expression inside a function call avoids creating an intermediate list.
2. Resolve the subparts implied by: sum() consumes the generated values one at a time.
3. Apply the core semantics highlighted in: Key concepts: • (x**2 for x in range(4)) is a generator expression • It produces 0, 1, 4, 9 lazily • sum() adds them: 0 + 1 + 4 + 9 = 14 • No list is created in memory — values are consumed as generated How it works: 1.
4. Confirm the final result aligns with: sum() accumulates: 0 + 1 + 4 + 9 = 14 Generator expression vs list comprehension: sum([x**2 for x in range(4)]) # creates list first, then sums — same result but uses more memory sum(x**2 for x in range(4)) # no intermediate list — more memory efficient

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: sum() consumes the generated values one at a time.
2. Apply the construct’s main rule next, matching: A generator expression inside a function call avoids creating an intermediate list.
3. Produce any intermediate values that sum() accumulates: 0 + 1 + 4 + 9 = 14 Generator expression vs list comprehension: sum([x**2 for x in range(4)]) # creates list first, then sums — same result but uses more memory sum(x**2 for x in range(4)) # no intermediate list — more memory efficient relies on
4. Finish by returning/assembling the final output named by: sum() accumulates: 0 + 1 + 4 + 9 = 14 Generator expression vs list comprehension: sum([x**2 for x in range(4)]) # creates list first, then sums — same result but uses more memory sum(x**2 for x in range(4)) # no intermediate list — more memory efficient
5. Use the result only after the full construct has completed, per: A generator expression inside a function call avoids creating an intermediate list.

Common Use Cases:
• Teaching this behavior using the mental model: A generator expression inside a function call avoids creating an intermediate list.
• Debugging when the observed value should match the expectation in: sum() accumulates: 0 + 1 + 4 + 9 = 14 Generator expression vs list comprehension: sum([x**2 for x in range(4)]) # creates list first, then sums — same result but uses more memory sum(x**2 for x in range(4)) # no intermediate list — more memory efficient

Edge Cases:
• If inputs vary from the situation described in: sum() consumes the generated values one at a time., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • (x**2 for x in range(4)) is a generator expression • It produces 0, 1, 4, 9 lazily • sum() adds them: 0 + 1 + 4 + 9 = 14 • No list is created in memory — values are consumed as generated How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: sum() accumulates: 0 + 1 + 4 + 9 = 14 Generator expression vs list comprehension: sum([x**2 for x in range(4)]) # creates list first, then sums — same result but uses more memory sum(x**2 for x in range(4)) # no intermediate list — more memory efficient.
• When performance matters, prefer the simplest pattern that still implements: A generator expression inside a function call avoids creating an intermediate list..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: A generator expression inside a function call avoids creating an intermediate list..

Notes:
• For maintainable code, make the intent behind: sum() consumes the generated values one at a time. explicit (and test it with inputs like those in this prompt).`
  }),
  // 61. Generator expression with max()
  (_i: number) => ({
    q: `What is max(x**2 for x in range(4))?`,
    o: ['9', '14', '4', '3'],
    c: 0,
    e: "range(4) gives 0,1,2,3. Squares: 0,1,4,9. Maximum is 9.",
    de: `max() accepts a generator expression and finds the largest value without building a list in memory.

Key concepts:
• range(4) → 0, 1, 2, 3
• Squares: 0, 1, 4, 9
• max() returns the largest: 9

How it works:
1. Generator produces 0**2=0, 1**2=1, 2**2=4, 3**2=9
2. max() tracks the largest value seen
3. After consuming all values, returns 9

Similar patterns:
min(x**2 for x in range(4))  # 0
sum(x**2 for x in range(4))  # 14
max(x**2 for x in range(4))  # 9

Key Concepts:
• After consuming all values, returns 9 Similar patterns: min(x**2 for x in range(4)) # 0 sum(x**2 for x in range(4)) # 14 max(x**2 for x in range(4)) # 9

Key Distinctions:
• This question’s focus is best captured by: max() accepts a generator expression and finds the largest value without building a list in memory.
• The contrast that matters for correctness is summarized by: Key concepts: • range(4) → 0, 1, 2, 3 • Squares: 0, 1, 4, 9 • max() returns the largest: 9 How it works: 1.

How It Works:
• Python follows the rule implied by: max() accepts a generator expression and finds the largest value without building a list in memory.
• The outcome you observe follows from: After consuming all values, returns 9 Similar patterns: min(x**2 for x in range(4)) # 0 sum(x**2 for x in range(4)) # 14 max(x**2 for x in range(4)) # 9

Step-by-Step Execution:
1. Start from the construct described in: max() accepts a generator expression and finds the largest value without building a list in memory.
2. Resolve the subparts implied by: Key concepts: • range(4) → 0, 1, 2, 3 • Squares: 0, 1, 4, 9 • max() returns the largest: 9 How it works: 1.
3. Apply the core semantics highlighted in: Generator produces 0**2=0, 1**2=1, 2**2=4, 3**2=9 2.
4. Confirm the final result aligns with: After consuming all values, returns 9 Similar patterns: min(x**2 for x in range(4)) # 0 sum(x**2 for x in range(4)) # 14 max(x**2 for x in range(4)) # 9

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • range(4) → 0, 1, 2, 3 • Squares: 0, 1, 4, 9 • max() returns the largest: 9 How it works: 1.
2. Apply the construct’s main rule next, matching: max() accepts a generator expression and finds the largest value without building a list in memory.
3. Produce any intermediate values that After consuming all values, returns 9 Similar patterns: min(x**2 for x in range(4)) # 0 sum(x**2 for x in range(4)) # 14 max(x**2 for x in range(4)) # 9 relies on
4. Finish by returning/assembling the final output named by: After consuming all values, returns 9 Similar patterns: min(x**2 for x in range(4)) # 0 sum(x**2 for x in range(4)) # 14 max(x**2 for x in range(4)) # 9
5. Use the result only after the full construct has completed, per: max() accepts a generator expression and finds the largest value without building a list in memory.

Common Use Cases:
• Teaching this behavior using the mental model: max() accepts a generator expression and finds the largest value without building a list in memory.
• Debugging when the observed value should match the expectation in: After consuming all values, returns 9 Similar patterns: min(x**2 for x in range(4)) # 0 sum(x**2 for x in range(4)) # 14 max(x**2 for x in range(4)) # 9

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • range(4) → 0, 1, 2, 3 • Squares: 0, 1, 4, 9 • max() returns the largest: 9 How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: Generator produces 0**2=0, 1**2=1, 2**2=4, 3**2=9 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: After consuming all values, returns 9 Similar patterns: min(x**2 for x in range(4)) # 0 sum(x**2 for x in range(4)) # 14 max(x**2 for x in range(4)) # 9.
• When performance matters, prefer the simplest pattern that still implements: max() accepts a generator expression and finds the largest value without building a list in memory..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: max() accepts a generator expression and finds the largest value without building a list in memory..

Notes:
• For maintainable code, make the intent behind: Key concepts: • range(4) → 0, 1, 2, 3 • Squares: 0, 1, 4, 9 • max() returns the largest: 9 How it works: 1. explicit (and test it with inputs like those in this prompt).`
  }),
  // 62. any() with generator expression
  (_i: number) => ({
    q: `What is any(x > 3 for x in range(5))?`,
    o: ['True', 'False', '4', 'Error'],
    c: 0,
    e: "range(5) includes 4, and 4 > 3 is True. any() returns True if at least one element is True.",
    de: `any() returns True if at least one element of the iterable is truthy. It short-circuits — stops as soon as it finds a True value.

Key concepts:
• range(5) → 0, 1, 2, 3, 4
• x > 3 is False for 0, 1, 2, 3 and True for 4
• any() finds the True at x=4 and returns True immediately

How it works:
1. x=0: 0 > 3 → False
2. x=1: 1 > 3 → False
3. x=2: 2 > 3 → False
4. x=3: 3 > 3 → False (not strictly greater)
5. x=4: 4 > 3 → True → any() returns True (short-circuits)

Short-circuit behavior:
• any() stops iterating as soon as it finds True
• Efficient for large iterables — no need to check everything

Key Concepts:
• x=4: 4 > 3 → True → any() returns True (short-circuits) Short-circuit behavior: • any() stops iterating as soon as it finds True • Efficient for large iterables — no need to check everything

Key Distinctions:
• This question’s focus is best captured by: any() returns True if at least one element of the iterable is truthy.
• The contrast that matters for correctness is summarized by: It short-circuits — stops as soon as it finds a True value.

How It Works:
• Python follows the rule implied by: any() returns True if at least one element of the iterable is truthy.
• The outcome you observe follows from: x=4: 4 > 3 → True → any() returns True (short-circuits) Short-circuit behavior: • any() stops iterating as soon as it finds True • Efficient for large iterables — no need to check everything

Step-by-Step Execution:
1. Start from the construct described in: any() returns True if at least one element of the iterable is truthy.
2. Resolve the subparts implied by: It short-circuits — stops as soon as it finds a True value.
3. Apply the core semantics highlighted in: Key concepts: • range(5) → 0, 1, 2, 3, 4 • x > 3 is False for 0, 1, 2, 3 and True for 4 • any() finds the True at x=4 and returns True immediately How it works: 1.
4. Confirm the final result aligns with: x=4: 4 > 3 → True → any() returns True (short-circuits) Short-circuit behavior: • any() stops iterating as soon as it finds True • Efficient for large iterables — no need to check everything

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: It short-circuits — stops as soon as it finds a True value.
2. Apply the construct’s main rule next, matching: any() returns True if at least one element of the iterable is truthy.
3. Produce any intermediate values that x=4: 4 > 3 → True → any() returns True (short-circuits) Short-circuit behavior: • any() stops iterating as soon as it finds True • Efficient for large iterables — no need to check everything relies on
4. Finish by returning/assembling the final output named by: x=4: 4 > 3 → True → any() returns True (short-circuits) Short-circuit behavior: • any() stops iterating as soon as it finds True • Efficient for large iterables — no need to check everything
5. Use the result only after the full construct has completed, per: any() returns True if at least one element of the iterable is truthy.

Common Use Cases:
• Teaching this behavior using the mental model: any() returns True if at least one element of the iterable is truthy.
• Debugging when the observed value should match the expectation in: x=4: 4 > 3 → True → any() returns True (short-circuits) Short-circuit behavior: • any() stops iterating as soon as it finds True • Efficient for large iterables — no need to check everything

Edge Cases:
• If inputs vary from the situation described in: It short-circuits — stops as soon as it finds a True value., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • range(5) → 0, 1, 2, 3, 4 • x > 3 is False for 0, 1, 2, 3 and True for 4 • any() finds the True at x=4 and returns True immediately How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: x=4: 4 > 3 → True → any() returns True (short-circuits) Short-circuit behavior: • any() stops iterating as soon as it finds True • Efficient for large iterables — no need to check everything.
• When performance matters, prefer the simplest pattern that still implements: any() returns True if at least one element of the iterable is truthy..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: any() returns True if at least one element of the iterable is truthy..

Notes:
• For maintainable code, make the intent behind: It short-circuits — stops as soon as it finds a True value. explicit (and test it with inputs like those in this prompt).`
  }),
  // 63. all() with generator — False because 0 is not > 0
  (_i: number) => ({
    q: `What is all(x > 0 for x in range(5))?`,
    o: ['False', 'True', '0', 'Error'],
    c: 0,
    e: "range(5) starts at 0. Since 0 > 0 is False, all() returns False.",
    de: `all() returns True only if every element of the iterable is truthy. It short-circuits on the first False value.

Key concepts:
• range(5) → 0, 1, 2, 3, 4
• x > 0 for x=0 is False (0 is not strictly greater than 0)
• all() encounters False immediately and returns False

How it works:
1. x=0: 0 > 0 → False → all() returns False immediately
2. Does not even check x=1, 2, 3, 4

Short-circuit behavior:
• all() stops as soon as it finds a False value
• For all(x > 0 for x in range(1, 5)), result would be True (starts at 1)

Contrast:
all(x >= 0 for x in range(5))  # True — 0 >= 0 is True

Key Concepts:
• Does not even check x=1, 2, 3, 4 Short-circuit behavior: • all() stops as soon as it finds a False value • For all(x > 0 for x in range(1, 5)), result would be True (starts at 1) Contrast: all(x >= 0 for x in range(5)) # True — 0 >= 0 is True

Key Distinctions:
• This question’s focus is best captured by: all() returns True only if every element of the iterable is truthy.
• The contrast that matters for correctness is summarized by: It short-circuits on the first False value.

How It Works:
• Python follows the rule implied by: all() returns True only if every element of the iterable is truthy.
• The outcome you observe follows from: Does not even check x=1, 2, 3, 4 Short-circuit behavior: • all() stops as soon as it finds a False value • For all(x > 0 for x in range(1, 5)), result would be True (starts at 1) Contrast: all(x >= 0 for x in range(5)) # True — 0 >= 0 is True

Step-by-Step Execution:
1. Start from the construct described in: all() returns True only if every element of the iterable is truthy.
2. Resolve the subparts implied by: It short-circuits on the first False value.
3. Apply the core semantics highlighted in: Key concepts: • range(5) → 0, 1, 2, 3, 4 • x > 0 for x=0 is False (0 is not strictly greater than 0) • all() encounters False immediately and returns False How it works: 1.
4. Confirm the final result aligns with: Does not even check x=1, 2, 3, 4 Short-circuit behavior: • all() stops as soon as it finds a False value • For all(x > 0 for x in range(1, 5)), result would be True (starts at 1) Contrast: all(x >= 0 for x in range(5)) # True — 0 >= 0 is True

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: It short-circuits on the first False value.
2. Apply the construct’s main rule next, matching: all() returns True only if every element of the iterable is truthy.
3. Produce any intermediate values that Does not even check x=1, 2, 3, 4 Short-circuit behavior: • all() stops as soon as it finds a False value • For all(x > 0 for x in range(1, 5)), result would be True (starts at 1) Contrast: all(x >= 0 for x in range(5)) # True — 0 >= 0 is True relies on
4. Finish by returning/assembling the final output named by: Does not even check x=1, 2, 3, 4 Short-circuit behavior: • all() stops as soon as it finds a False value • For all(x > 0 for x in range(1, 5)), result would be True (starts at 1) Contrast: all(x >= 0 for x in range(5)) # True — 0 >= 0 is True
5. Use the result only after the full construct has completed, per: all() returns True only if every element of the iterable is truthy.

Common Use Cases:
• Teaching this behavior using the mental model: all() returns True only if every element of the iterable is truthy.
• Debugging when the observed value should match the expectation in: Does not even check x=1, 2, 3, 4 Short-circuit behavior: • all() stops as soon as it finds a False value • For all(x > 0 for x in range(1, 5)), result would be True (starts at 1) Contrast: all(x >= 0 for x in range(5)) # True — 0 >= 0 is True

Edge Cases:
• If inputs vary from the situation described in: It short-circuits on the first False value., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • range(5) → 0, 1, 2, 3, 4 • x > 0 for x=0 is False (0 is not strictly greater than 0) • all() encounters False immediately and returns False How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Does not even check x=1, 2, 3, 4 Short-circuit behavior: • all() stops as soon as it finds a False value • For all(x > 0 for x in range(1, 5)), result would be True (starts at 1) Contrast: all(x >= 0 for x in range(5)) # True — 0 >= 0 is True.
• When performance matters, prefer the simplest pattern that still implements: all() returns True only if every element of the iterable is truthy..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: all() returns True only if every element of the iterable is truthy..

Notes:
• For maintainable code, make the intent behind: It short-circuits on the first False value. explicit (and test it with inputs like those in this prompt).`
  }),
  // 64. Generator expression with filter condition
  (_i: number) => ({
    q: `What is list(x for x in range(10) if x % 2 == 0)?`,
    o: ['[0, 2, 4, 6, 8]', '[1, 3, 5, 7, 9]', '[0, 2, 4, 6, 8, 10]', '[2, 4, 6, 8]'],
    c: 0,
    e: "Filters range(10) to keep only even numbers: 0, 2, 4, 6, 8.",
    de: `A generator expression can include an if clause to filter values. Only values where the condition is True are yielded.

Key concepts:
• range(10) → 0 through 9
• x % 2 == 0 keeps only even numbers
• list() collects the filtered results

How it works:
1. x=0: 0%2==0 → True → include 0
2. x=1: 1%2==0 → False → skip
3. x=2: 2%2==0 → True → include 2
4. ...continues for all values
5. Result: [0, 2, 4, 6, 8]

Equivalent list comprehension:
[x for x in range(10) if x % 2 == 0]  # same result but creates a list immediately

Key Concepts:
• Result: [0, 2, 4, 6, 8] Equivalent list comprehension: [x for x in range(10) if x % 2 == 0] # same result but creates a list immediately

Key Distinctions:
• This question’s focus is best captured by: A generator expression can include an if clause to filter values.
• The contrast that matters for correctness is summarized by: Only values where the condition is True are yielded.

How It Works:
• Python follows the rule implied by: A generator expression can include an if clause to filter values.
• The outcome you observe follows from: Result: [0, 2, 4, 6, 8] Equivalent list comprehension: [x for x in range(10) if x % 2 == 0] # same result but creates a list immediately

Step-by-Step Execution:
1. Start from the construct described in: A generator expression can include an if clause to filter values.
2. Resolve the subparts implied by: Only values where the condition is True are yielded.
3. Apply the core semantics highlighted in: Key concepts: • range(10) → 0 through 9 • x % 2 == 0 keeps only even numbers • list() collects the filtered results How it works: 1.
4. Confirm the final result aligns with: Result: [0, 2, 4, 6, 8] Equivalent list comprehension: [x for x in range(10) if x % 2 == 0] # same result but creates a list immediately

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Only values where the condition is True are yielded.
2. Apply the construct’s main rule next, matching: A generator expression can include an if clause to filter values.
3. Produce any intermediate values that Result: [0, 2, 4, 6, 8] Equivalent list comprehension: [x for x in range(10) if x % 2 == 0] # same result but creates a list immediately relies on
4. Finish by returning/assembling the final output named by: Result: [0, 2, 4, 6, 8] Equivalent list comprehension: [x for x in range(10) if x % 2 == 0] # same result but creates a list immediately
5. Use the result only after the full construct has completed, per: A generator expression can include an if clause to filter values.

Common Use Cases:
• Teaching this behavior using the mental model: A generator expression can include an if clause to filter values.
• Debugging when the observed value should match the expectation in: Result: [0, 2, 4, 6, 8] Equivalent list comprehension: [x for x in range(10) if x % 2 == 0] # same result but creates a list immediately

Edge Cases:
• If inputs vary from the situation described in: Only values where the condition is True are yielded., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • range(10) → 0 through 9 • x % 2 == 0 keeps only even numbers • list() collects the filtered results How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Result: [0, 2, 4, 6, 8] Equivalent list comprehension: [x for x in range(10) if x % 2 == 0] # same result but creates a list immediately.
• When performance matters, prefer the simplest pattern that still implements: A generator expression can include an if clause to filter values..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: A generator expression can include an if clause to filter values..

Notes:
• For maintainable code, make the intent behind: Only values where the condition is True are yielded. explicit (and test it with inputs like those in this prompt).`
  }),
  // 65. type() of a generator expression
  (_i: number) => ({
    q: `What is type(x for x in range(3))?`,
    o: ["<class 'generator'>", "<class 'list'>", "<class 'tuple'>", "<class 'range'>"],
    c: 0,
    e: "A generator expression (without square brackets) creates a generator object, not a list.",
    de: `Parenthesized comprehension syntax creates a generator object, not a list or tuple. The type is 'generator'.

Key concepts:
• (x for x in range(3)) is a generator expression
• [x for x in range(3)] would be a list comprehension
• Generator expressions are lazy — values computed on demand

How it works:
1. (x for x in range(3)) creates a generator object
2. type() returns <class 'generator'>
3. No values have been computed yet — they are produced only when iterated

Key distinction:
type([x for x in range(3)])  # <class 'list'>
type((x for x in range(3)))  # <class 'generator'>
type(x for x in range(3))    # <class 'generator'> (parens from function call)

Key Concepts:
• No values have been computed yet — they are produced only when iterated Key distinction: type([x for x in range(3)]) # <class 'list'> type((x for x in range(3))) # <class 'generator'> type(x for x in range(3)) # <class 'generator'> (parens from function call)

Key Distinctions:
• This question’s focus is best captured by: Parenthesized comprehension syntax creates a generator object, not a list or tuple.
• The contrast that matters for correctness is summarized by: The type is 'generator'.

How It Works:
• Python follows the rule implied by: Parenthesized comprehension syntax creates a generator object, not a list or tuple.
• The outcome you observe follows from: No values have been computed yet — they are produced only when iterated Key distinction: type([x for x in range(3)]) # <class 'list'> type((x for x in range(3))) # <class 'generator'> type(x for x in range(3)) # <class 'generator'> (parens from function call)

Step-by-Step Execution:
1. Start from the construct described in: Parenthesized comprehension syntax creates a generator object, not a list or tuple.
2. Resolve the subparts implied by: The type is 'generator'.
3. Apply the core semantics highlighted in: Key concepts: • (x for x in range(3)) is a generator expression • [x for x in range(3)] would be a list comprehension • Generator expressions are lazy — values computed on demand How it works: 1.
4. Confirm the final result aligns with: No values have been computed yet — they are produced only when iterated Key distinction: type([x for x in range(3)]) # <class 'list'> type((x for x in range(3))) # <class 'generator'> type(x for x in range(3)) # <class 'generator'> (parens from function call)

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The type is 'generator'.
2. Apply the construct’s main rule next, matching: Parenthesized comprehension syntax creates a generator object, not a list or tuple.
3. Produce any intermediate values that No values have been computed yet — they are produced only when iterated Key distinction: type([x for x in range(3)]) # <class 'list'> type((x for x in range(3))) # <class 'generator'> type(x for x in range(3)) # <class 'generator'> (parens from function call) relies on
4. Finish by returning/assembling the final output named by: No values have been computed yet — they are produced only when iterated Key distinction: type([x for x in range(3)]) # <class 'list'> type((x for x in range(3))) # <class 'generator'> type(x for x in range(3)) # <class 'generator'> (parens from function call)
5. Use the result only after the full construct has completed, per: Parenthesized comprehension syntax creates a generator object, not a list or tuple.

Common Use Cases:
• Teaching this behavior using the mental model: Parenthesized comprehension syntax creates a generator object, not a list or tuple.
• Debugging when the observed value should match the expectation in: No values have been computed yet — they are produced only when iterated Key distinction: type([x for x in range(3)]) # <class 'list'> type((x for x in range(3))) # <class 'generator'> type(x for x in range(3)) # <class 'generator'> (parens from function call)

Edge Cases:
• If inputs vary from the situation described in: The type is 'generator'., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • (x for x in range(3)) is a generator expression • [x for x in range(3)] would be a list comprehension • Generator expressions are lazy — values computed on demand How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: No values have been computed yet — they are produced only when iterated Key distinction: type([x for x in range(3)]) # <class 'list'> type((x for x in range(3))) # <class 'generator'> type(x for x in range(3)) # <class 'generator'> (parens from function call).
• When performance matters, prefer the simplest pattern that still implements: Parenthesized comprehension syntax creates a generator object, not a list or tuple..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Parenthesized comprehension syntax creates a generator object, not a list or tuple..

Notes:
• For maintainable code, make the intent behind: The type is 'generator'. explicit (and test it with inputs like those in this prompt).`
  }),
  // 66. Generator exhaustion — second list() returns empty
  (_i: number) => ({
    q: `g = (x**2 for x in range(3))\na = list(g)\nb = list(g)\nWhat is b?`,
    o: ['[]', '[0, 1, 4]', '[0, 0, 0]', 'Error'],
    c: 0,
    e: "Generators are single-use. The first list(g) exhausts it. The second list(g) gets an empty list.",
    de: `Generators can only be iterated once. After all values are consumed, the generator is exhausted and produces no more values.

Key concepts:
• Generators are single-pass iterators
• Once exhausted, they cannot be reset or restarted
• list(g) the second time gets an empty iterator → []

How it works:
1. g = (x**2 for x in range(3)) — creates generator
2. a = list(g) — consumes all values → a = [0, 1, 4], g is now exhausted
3. b = list(g) — generator has nothing left → b = []

Contrast with lists:
lst = [0, 1, 4]
list(lst)  # [0, 1, 4]
list(lst)  # [0, 1, 4] — lists can be iterated multiple times

Key Concepts:
• b = list(g) — generator has nothing left → b = [] Contrast with lists: lst = [0, 1, 4] list(lst) # [0, 1, 4] list(lst) # [0, 1, 4] — lists can be iterated multiple times

Key Distinctions:
• This question’s focus is best captured by: Generators can only be iterated once.
• The contrast that matters for correctness is summarized by: After all values are consumed, the generator is exhausted and produces no more values.

How It Works:
• Python follows the rule implied by: Generators can only be iterated once.
• The outcome you observe follows from: b = list(g) — generator has nothing left → b = [] Contrast with lists: lst = [0, 1, 4] list(lst) # [0, 1, 4] list(lst) # [0, 1, 4] — lists can be iterated multiple times

Step-by-Step Execution:
1. Start from the construct described in: Generators can only be iterated once.
2. Resolve the subparts implied by: After all values are consumed, the generator is exhausted and produces no more values.
3. Apply the core semantics highlighted in: Key concepts: • Generators are single-pass iterators • Once exhausted, they cannot be reset or restarted • list(g) the second time gets an empty iterator → [] How it works: 1.
4. Confirm the final result aligns with: b = list(g) — generator has nothing left → b = [] Contrast with lists: lst = [0, 1, 4] list(lst) # [0, 1, 4] list(lst) # [0, 1, 4] — lists can be iterated multiple times

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: After all values are consumed, the generator is exhausted and produces no more values.
2. Apply the construct’s main rule next, matching: Generators can only be iterated once.
3. Produce any intermediate values that b = list(g) — generator has nothing left → b = [] Contrast with lists: lst = [0, 1, 4] list(lst) # [0, 1, 4] list(lst) # [0, 1, 4] — lists can be iterated multiple times relies on
4. Finish by returning/assembling the final output named by: b = list(g) — generator has nothing left → b = [] Contrast with lists: lst = [0, 1, 4] list(lst) # [0, 1, 4] list(lst) # [0, 1, 4] — lists can be iterated multiple times
5. Use the result only after the full construct has completed, per: Generators can only be iterated once.

Common Use Cases:
• Teaching this behavior using the mental model: Generators can only be iterated once.
• Debugging when the observed value should match the expectation in: b = list(g) — generator has nothing left → b = [] Contrast with lists: lst = [0, 1, 4] list(lst) # [0, 1, 4] list(lst) # [0, 1, 4] — lists can be iterated multiple times

Edge Cases:
• If inputs vary from the situation described in: After all values are consumed, the generator is exhausted and produces no more values., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • Generators are single-pass iterators • Once exhausted, they cannot be reset or restarted • list(g) the second time gets an empty iterator → [] How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: b = list(g) — generator has nothing left → b = [] Contrast with lists: lst = [0, 1, 4] list(lst) # [0, 1, 4] list(lst) # [0, 1, 4] — lists can be iterated multiple times.
• When performance matters, prefer the simplest pattern that still implements: Generators can only be iterated once..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Generators can only be iterated once..

Notes:
• For maintainable code, make the intent behind: After all values are consumed, the generator is exhausted and produces no more values. explicit (and test it with inputs like those in this prompt).`
  }),
  // 67. Infinite generator with manual next() calls
  (_i: number) => ({
    q: `def infinite():\n    n = 0\n    while True:\n        yield n\n        n += 1\ng = infinite()\nWhat is [next(g) for _ in range(5)]?`,
    o: ['[0, 1, 2, 3, 4]', '[1, 2, 3, 4, 5]', 'Infinite loop', 'Error'],
    c: 0,
    e: "The generator yields 0, 1, 2, 3, ... Each next(g) gets the next number. Five calls give [0,1,2,3,4].",
    de: `Generators can represent infinite sequences because they produce values lazily. The while True loop runs forever, but yield pauses between each value.

Key concepts:
• while True: yield n creates an infinite stream
• Each next() call resumes, yields n, increments n, then pauses again
• The generator never runs to completion — we take only what we need

How it works:
1. next(g): n=0 → yield 0, n becomes 1
2. next(g): n=1 → yield 1, n becomes 2
3. next(g): n=2 → yield 2, n becomes 3
4. next(g): n=3 → yield 3, n becomes 4
5. next(g): n=4 → yield 4, n becomes 5
6. List comprehension collects [0, 1, 2, 3, 4]

Common uses:
• Infinite counters, ID generators
• Lazy streams of data
• itertools.count(0) does the same thing

Key Concepts:
• List comprehension collects [0, 1, 2, 3, 4] Common uses: • Infinite counters, ID generators • Lazy streams of data • itertools.count(0) does the same thing

Key Distinctions:
• This question’s focus is best captured by: Generators can represent infinite sequences because they produce values lazily.
• The contrast that matters for correctness is summarized by: The while True loop runs forever, but yield pauses between each value.

How It Works:
• Python follows the rule implied by: Generators can represent infinite sequences because they produce values lazily.
• The outcome you observe follows from: List comprehension collects [0, 1, 2, 3, 4] Common uses: • Infinite counters, ID generators • Lazy streams of data • itertools.count(0) does the same thing

Step-by-Step Execution:
1. Start from the construct described in: Generators can represent infinite sequences because they produce values lazily.
2. Resolve the subparts implied by: The while True loop runs forever, but yield pauses between each value.
3. Apply the core semantics highlighted in: Key concepts: • while True: yield n creates an infinite stream • Each next() call resumes, yields n, increments n, then pauses again • The generator never runs to completion — we take only what we need How it works: 1.
4. Confirm the final result aligns with: List comprehension collects [0, 1, 2, 3, 4] Common uses: • Infinite counters, ID generators • Lazy streams of data • itertools.count(0) does the same thing

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The while True loop runs forever, but yield pauses between each value.
2. Apply the construct’s main rule next, matching: Generators can represent infinite sequences because they produce values lazily.
3. Produce any intermediate values that List comprehension collects [0, 1, 2, 3, 4] Common uses: • Infinite counters, ID generators • Lazy streams of data • itertools.count(0) does the same thing relies on
4. Finish by returning/assembling the final output named by: List comprehension collects [0, 1, 2, 3, 4] Common uses: • Infinite counters, ID generators • Lazy streams of data • itertools.count(0) does the same thing
5. Use the result only after the full construct has completed, per: Generators can represent infinite sequences because they produce values lazily.

Common Use Cases:
• Teaching this behavior using the mental model: Generators can represent infinite sequences because they produce values lazily.
• Debugging when the observed value should match the expectation in: List comprehension collects [0, 1, 2, 3, 4] Common uses: • Infinite counters, ID generators • Lazy streams of data • itertools.count(0) does the same thing

Edge Cases:
• If inputs vary from the situation described in: The while True loop runs forever, but yield pauses between each value., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • while True: yield n creates an infinite stream • Each next() call resumes, yields n, increments n, then pauses again • The generator never runs to completion — we take only what we need How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: List comprehension collects [0, 1, 2, 3, 4] Common uses: • Infinite counters, ID generators • Lazy streams of data • itertools.count(0) does the same thing.
• When performance matters, prefer the simplest pattern that still implements: Generators can represent infinite sequences because they produce values lazily..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Generators can represent infinite sequences because they produce values lazily..

Notes:
• For maintainable code, make the intent behind: The while True loop runs forever, but yield pauses between each value. explicit (and test it with inputs like those in this prompt).`
  }),
  // 68. Generator with return value attached to StopIteration
  (_i: number) => ({
    q: `def gen():\n    yield 1\n    return "done"\ng = gen()\nWhat is next(g)?`,
    o: ['1', '"done"', 'StopIteration', 'Error'],
    c: 0,
    e: "next(g) returns the first yielded value: 1. The return value 'done' is attached to StopIteration when the generator ends.",
    de: `A generator function can have a return statement with a value. That value becomes the value attribute of the StopIteration exception when the generator is exhausted.

Key concepts:
• yield 1 produces 1 on the first next() call
• return "done" ends the generator on the second next() call
• The return value is stored in StopIteration.value
• next(g) only returns yielded values, not the return value

How it works:
1. next(g) → executes to "yield 1" → returns 1
2. next(g) → resumes, hits "return 'done'" → raises StopIteration
3. The StopIteration exception has .value = "done"

Accessing the return value:
try:
    next(g)  # StopIteration
except StopIteration as e:
    print(e.value)  # "done"

Key Concepts:
• The StopIteration exception has .value = "done" Accessing the return value: try: next(g) # StopIteration except StopIteration as e: print(e.value) # "done"

Key Distinctions:
• This question’s focus is best captured by: A generator function can have a return statement with a value.
• The contrast that matters for correctness is summarized by: That value becomes the value attribute of the StopIteration exception when the generator is exhausted.

How It Works:
• Python follows the rule implied by: A generator function can have a return statement with a value.
• The outcome you observe follows from: The StopIteration exception has .value = "done" Accessing the return value: try: next(g) # StopIteration except StopIteration as e: print(e.value) # "done"

Step-by-Step Execution:
1. Start from the construct described in: A generator function can have a return statement with a value.
2. Resolve the subparts implied by: That value becomes the value attribute of the StopIteration exception when the generator is exhausted.
3. Apply the core semantics highlighted in: Key concepts: • yield 1 produces 1 on the first next() call • return "done" ends the generator on the second next() call • The return value is stored in StopIteration.value • next(g) only returns yielded values, not the return value How it works: 1.
4. Confirm the final result aligns with: The StopIteration exception has .value = "done" Accessing the return value: try: next(g) # StopIteration except StopIteration as e: print(e.value) # "done"

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: That value becomes the value attribute of the StopIteration exception when the generator is exhausted.
2. Apply the construct’s main rule next, matching: A generator function can have a return statement with a value.
3. Produce any intermediate values that The StopIteration exception has .value = "done" Accessing the return value: try: next(g) # StopIteration except StopIteration as e: print(e.value) # "done" relies on
4. Finish by returning/assembling the final output named by: The StopIteration exception has .value = "done" Accessing the return value: try: next(g) # StopIteration except StopIteration as e: print(e.value) # "done"
5. Use the result only after the full construct has completed, per: A generator function can have a return statement with a value.

Common Use Cases:
• Teaching this behavior using the mental model: A generator function can have a return statement with a value.
• Debugging when the observed value should match the expectation in: The StopIteration exception has .value = "done" Accessing the return value: try: next(g) # StopIteration except StopIteration as e: print(e.value) # "done"

Edge Cases:
• If inputs vary from the situation described in: That value becomes the value attribute of the StopIteration exception when the generator is exhausted., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • yield 1 produces 1 on the first next() call • return "done" ends the generator on the second next() call • The return value is stored in StopIteration.value • next(g) only returns yielded values, not the return value How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: The StopIteration exception has .value = "done" Accessing the return value: try: next(g) # StopIteration except StopIteration as e: print(e.value) # "done".
• When performance matters, prefer the simplest pattern that still implements: A generator function can have a return statement with a value..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: A generator function can have a return statement with a value..

Notes:
• For maintainable code, make the intent behind: That value becomes the value attribute of the StopIteration exception when the generator is exhausted. explicit (and test it with inputs like those in this prompt).`
  }),
  // 69. Fibonacci generator
  (_i: number) => ({
    q: `def fibonacci():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\ng = fibonacci()\nWhat is [next(g) for _ in range(7)]?`,
    o: ['[0, 1, 1, 2, 3, 5, 8]', '[1, 1, 2, 3, 5, 8, 13]', '[0, 1, 2, 3, 5, 8, 13]', '[1, 2, 3, 5, 8, 13, 21]'],
    c: 0,
    e: "Classic Fibonacci: each number is the sum of the two before it. Starting with 0, 1: 0, 1, 1, 2, 3, 5, 8.",
    de: `This infinite generator produces the Fibonacci sequence using tuple unpacking to swap values.

Key concepts:
• a, b = 0, 1 initializes the first two Fibonacci numbers
• yield a produces the current number
• a, b = b, a + b simultaneously updates both variables

How it works step by step:
1. a=0, b=1 → yield 0 → a,b = 1,1
2. a=1, b=1 → yield 1 → a,b = 1,2
3. a=1, b=2 → yield 1 → a,b = 2,3
4. a=2, b=3 → yield 2 → a,b = 3,5
5. a=3, b=5 → yield 3 → a,b = 5,8
6. a=5, b=8 → yield 5 → a,b = 8,13
7. a=8, b=13 → yield 8
Result: [0, 1, 1, 2, 3, 5, 8]

The tuple assignment a, b = b, a + b is crucial — it evaluates both right-hand values before assigning, so the old a is used in a + b.

Key Concepts:
• a=8, b=13 → yield 8 Result: [0, 1, 1, 2, 3, 5, 8] The tuple assignment a, b = b, a + b is crucial — it evaluates both right-hand values before assigning, so the old a is used in a + b.

Key Distinctions:
• This question’s focus is best captured by: This infinite generator produces the Fibonacci sequence using tuple unpacking to swap values.
• The contrast that matters for correctness is summarized by: Key concepts: • a, b = 0, 1 initializes the first two Fibonacci numbers • yield a produces the current number • a, b = b, a + b simultaneously updates both variables How it works step by step: 1.

How It Works:
• Python follows the rule implied by: This infinite generator produces the Fibonacci sequence using tuple unpacking to swap values.
• The outcome you observe follows from: a=8, b=13 → yield 8 Result: [0, 1, 1, 2, 3, 5, 8] The tuple assignment a, b = b, a + b is crucial — it evaluates both right-hand values before assigning, so the old a is used in a + b.

Step-by-Step Execution:
1. Start from the construct described in: This infinite generator produces the Fibonacci sequence using tuple unpacking to swap values.
2. Resolve the subparts implied by: Key concepts: • a, b = 0, 1 initializes the first two Fibonacci numbers • yield a produces the current number • a, b = b, a + b simultaneously updates both variables How it works step by step: 1.
3. Apply the core semantics highlighted in: a=0, b=1 → yield 0 → a,b = 1,1 2.
4. Confirm the final result aligns with: a=8, b=13 → yield 8 Result: [0, 1, 1, 2, 3, 5, 8] The tuple assignment a, b = b, a + b is crucial — it evaluates both right-hand values before assigning, so the old a is used in a + b.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • a, b = 0, 1 initializes the first two Fibonacci numbers • yield a produces the current number • a, b = b, a + b simultaneously updates both variables How it works step by step: 1.
2. Apply the construct’s main rule next, matching: This infinite generator produces the Fibonacci sequence using tuple unpacking to swap values.
3. Produce any intermediate values that a=8, b=13 → yield 8 Result: [0, 1, 1, 2, 3, 5, 8] The tuple assignment a, b = b, a + b is crucial — it evaluates both right-hand values before assigning, so the old a is used in a + b. relies on
4. Finish by returning/assembling the final output named by: a=8, b=13 → yield 8 Result: [0, 1, 1, 2, 3, 5, 8] The tuple assignment a, b = b, a + b is crucial — it evaluates both right-hand values before assigning, so the old a is used in a + b.
5. Use the result only after the full construct has completed, per: This infinite generator produces the Fibonacci sequence using tuple unpacking to swap values.

Common Use Cases:
• Teaching this behavior using the mental model: This infinite generator produces the Fibonacci sequence using tuple unpacking to swap values.
• Debugging when the observed value should match the expectation in: a=8, b=13 → yield 8 Result: [0, 1, 1, 2, 3, 5, 8] The tuple assignment a, b = b, a + b is crucial — it evaluates both right-hand values before assigning, so the old a is used in a + b.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • a, b = 0, 1 initializes the first two Fibonacci numbers • yield a produces the current number • a, b = b, a + b simultaneously updates both variables How it works step by step: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: a=0, b=1 → yield 0 → a,b = 1,1 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: a=8, b=13 → yield 8 Result: [0, 1, 1, 2, 3, 5, 8] The tuple assignment a, b = b, a + b is crucial — it evaluates both right-hand values before assigning, so the old a is used in a + b..
• When performance matters, prefer the simplest pattern that still implements: This infinite generator produces the Fibonacci sequence using tuple unpacking to swap values..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This infinite generator produces the Fibonacci sequence using tuple unpacking to swap values..

Notes:
• For maintainable code, make the intent behind: Key concepts: • a, b = 0, 1 initializes the first two Fibonacci numbers • yield a produces the current number • a, b = b, a + b simultaneously updates both variables How it works step by step: 1. explicit (and test it with inputs like those in this prompt).`
  }),
  // 70. yield from twice concatenates sequences
  (_i: number) => ({
    q: `def gen(n):\n    yield from range(n)\n    yield from range(n)\nWhat is list(gen(3))?`,
    o: ['[0, 1, 2, 0, 1, 2]', '[0, 1, 2]', '[0, 0, 1, 1, 2, 2]', '[0, 1, 2, 3, 4, 5]'],
    c: 0,
    e: "yield from range(3) yields 0,1,2. Doing it twice concatenates: [0,1,2,0,1,2].",
    de: `Multiple yield from statements execute sequentially. The first one yields all its values, then the second one yields all of its values.

Key concepts:
• yield from range(3) yields 0, 1, 2
• After the first yield from completes, execution continues to the next statement
• The second yield from range(3) yields 0, 1, 2 again

How it works:
1. yield from range(3) → yields 0, 1, 2
2. First range exhausted → execution continues
3. yield from range(3) → yields 0, 1, 2 again
4. Result: [0, 1, 2, 0, 1, 2]

This is equivalent to:
import itertools
list(itertools.chain(range(3), range(3)))  # [0, 1, 2, 0, 1, 2]

Key Concepts:
• Result: [0, 1, 2, 0, 1, 2] This is equivalent to: import itertools list(itertools.chain(range(3), range(3))) # [0, 1, 2, 0, 1, 2]

Key Distinctions:
• This question’s focus is best captured by: Multiple yield from statements execute sequentially.
• The contrast that matters for correctness is summarized by: The first one yields all its values, then the second one yields all of its values.

How It Works:
• Python follows the rule implied by: Multiple yield from statements execute sequentially.
• The outcome you observe follows from: Result: [0, 1, 2, 0, 1, 2] This is equivalent to: import itertools list(itertools.chain(range(3), range(3))) # [0, 1, 2, 0, 1, 2]

Step-by-Step Execution:
1. Start from the construct described in: Multiple yield from statements execute sequentially.
2. Resolve the subparts implied by: The first one yields all its values, then the second one yields all of its values.
3. Apply the core semantics highlighted in: Key concepts: • yield from range(3) yields 0, 1, 2 • After the first yield from completes, execution continues to the next statement • The second yield from range(3) yields 0, 1, 2 again How it works: 1.
4. Confirm the final result aligns with: Result: [0, 1, 2, 0, 1, 2] This is equivalent to: import itertools list(itertools.chain(range(3), range(3))) # [0, 1, 2, 0, 1, 2]

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The first one yields all its values, then the second one yields all of its values.
2. Apply the construct’s main rule next, matching: Multiple yield from statements execute sequentially.
3. Produce any intermediate values that Result: [0, 1, 2, 0, 1, 2] This is equivalent to: import itertools list(itertools.chain(range(3), range(3))) # [0, 1, 2, 0, 1, 2] relies on
4. Finish by returning/assembling the final output named by: Result: [0, 1, 2, 0, 1, 2] This is equivalent to: import itertools list(itertools.chain(range(3), range(3))) # [0, 1, 2, 0, 1, 2]
5. Use the result only after the full construct has completed, per: Multiple yield from statements execute sequentially.

Common Use Cases:
• Teaching this behavior using the mental model: Multiple yield from statements execute sequentially.
• Debugging when the observed value should match the expectation in: Result: [0, 1, 2, 0, 1, 2] This is equivalent to: import itertools list(itertools.chain(range(3), range(3))) # [0, 1, 2, 0, 1, 2]

Edge Cases:
• If inputs vary from the situation described in: The first one yields all its values, then the second one yields all of its values., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • yield from range(3) yields 0, 1, 2 • After the first yield from completes, execution continues to the next statement • The second yield from range(3) yields 0, 1, 2 again How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Result: [0, 1, 2, 0, 1, 2] This is equivalent to: import itertools list(itertools.chain(range(3), range(3))) # [0, 1, 2, 0, 1, 2].
• When performance matters, prefer the simplest pattern that still implements: Multiple yield from statements execute sequentially..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Multiple yield from statements execute sequentially..

Notes:
• For maintainable code, make the intent behind: The first one yields all its values, then the second one yields all of its values. explicit (and test it with inputs like those in this prompt).`
  }),
  // 71. Reading a global variable inside a function
  (_i: number) => ({
    q: `x = 1\ndef f():\n    return x\nWhat is f()?`,
    o: ['1', 'Error', 'None', '0'],
    c: 0,
    e: "Functions can read variables from the enclosing/global scope. x is 1 at module level.",
    de: `Python's LEGB rule allows functions to read variables from outer scopes. When x is not found locally, Python searches enclosing, then global scope.

Key concepts:
• LEGB: Local → Enclosing → Global → Built-in
• f() has no local x, so Python looks in the global scope
• x = 1 is in the global (module) scope → found and returned

How it works:
1. x = 1 defined at module level (global scope)
2. f() is called — Python looks for x in local scope → not found
3. Python looks in global scope → x = 1 found
4. Returns 1

Important distinction:
• Reading a global variable works without any special keyword
• Modifying (assigning to) a global variable requires the global keyword

Key Concepts:
• Returns 1 Important distinction: • Reading a global variable works without any special keyword • Modifying (assigning to) a global variable requires the global keyword

Key Distinctions:
• This question’s focus is best captured by: Python's LEGB rule allows functions to read variables from outer scopes.
• The contrast that matters for correctness is summarized by: When x is not found locally, Python searches enclosing, then global scope.

How It Works:
• Python follows the rule implied by: Python's LEGB rule allows functions to read variables from outer scopes.
• The outcome you observe follows from: Returns 1 Important distinction: • Reading a global variable works without any special keyword • Modifying (assigning to) a global variable requires the global keyword

Step-by-Step Execution:
1. Start from the construct described in: Python's LEGB rule allows functions to read variables from outer scopes.
2. Resolve the subparts implied by: When x is not found locally, Python searches enclosing, then global scope.
3. Apply the core semantics highlighted in: Key concepts: • LEGB: Local → Enclosing → Global → Built-in • f() has no local x, so Python looks in the global scope • x = 1 is in the global (module) scope → found and returned How it works: 1.
4. Confirm the final result aligns with: Returns 1 Important distinction: • Reading a global variable works without any special keyword • Modifying (assigning to) a global variable requires the global keyword

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: When x is not found locally, Python searches enclosing, then global scope.
2. Apply the construct’s main rule next, matching: Python's LEGB rule allows functions to read variables from outer scopes.
3. Produce any intermediate values that Returns 1 Important distinction: • Reading a global variable works without any special keyword • Modifying (assigning to) a global variable requires the global keyword relies on
4. Finish by returning/assembling the final output named by: Returns 1 Important distinction: • Reading a global variable works without any special keyword • Modifying (assigning to) a global variable requires the global keyword
5. Use the result only after the full construct has completed, per: Python's LEGB rule allows functions to read variables from outer scopes.

Common Use Cases:
• Teaching this behavior using the mental model: Python's LEGB rule allows functions to read variables from outer scopes.
• Debugging when the observed value should match the expectation in: Returns 1 Important distinction: • Reading a global variable works without any special keyword • Modifying (assigning to) a global variable requires the global keyword

Edge Cases:
• If inputs vary from the situation described in: When x is not found locally, Python searches enclosing, then global scope., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • LEGB: Local → Enclosing → Global → Built-in • f() has no local x, so Python looks in the global scope • x = 1 is in the global (module) scope → found and returned How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Returns 1 Important distinction: • Reading a global variable works without any special keyword • Modifying (assigning to) a global variable requires the global keyword.
• When performance matters, prefer the simplest pattern that still implements: Python's LEGB rule allows functions to read variables from outer scopes..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Python's LEGB rule allows functions to read variables from outer scopes..

Notes:
• For maintainable code, make the intent behind: When x is not found locally, Python searches enclosing, then global scope. explicit (and test it with inputs like those in this prompt).`
  }),
  // 72. Local variable doesn't affect global
  (_i: number) => ({
    q: `x = 1\ndef f():\n    x = 2\nf()\nWhat is x?`,
    o: ['1', '2', 'None', 'Error'],
    c: 0,
    e: "x = 2 inside f() creates a local variable. The global x remains 1.",
    de: `Assignment inside a function creates a local variable that shadows the global one. The global variable is unaffected.

Key concepts:
• x = 2 inside f() creates a new local variable named x
• This local x is separate from the global x
• The global x remains 1 after f() returns

How it works:
1. x = 1 at module level (global)
2. f() executes: x = 2 creates a local x (value 2)
3. f() returns — its local x is discarded
4. Global x is still 1

Why this happens:
• Python treats any assignment in a function as creating a local variable
• The local x and global x are different objects in different namespaces
• To modify the global x, you need the global keyword

Key Concepts:
• Global x is still 1 Why this happens: • Python treats any assignment in a function as creating a local variable • The local x and global x are different objects in different namespaces • To modify the global x, you need the global keyword

Key Distinctions:
• This question’s focus is best captured by: Assignment inside a function creates a local variable that shadows the global one.
• The contrast that matters for correctness is summarized by: The global variable is unaffected.

How It Works:
• Python follows the rule implied by: Assignment inside a function creates a local variable that shadows the global one.
• The outcome you observe follows from: Global x is still 1 Why this happens: • Python treats any assignment in a function as creating a local variable • The local x and global x are different objects in different namespaces • To modify the global x, you need the global keyword

Step-by-Step Execution:
1. Start from the construct described in: Assignment inside a function creates a local variable that shadows the global one.
2. Resolve the subparts implied by: The global variable is unaffected.
3. Apply the core semantics highlighted in: Key concepts: • x = 2 inside f() creates a new local variable named x • This local x is separate from the global x • The global x remains 1 after f() returns How it works: 1.
4. Confirm the final result aligns with: Global x is still 1 Why this happens: • Python treats any assignment in a function as creating a local variable • The local x and global x are different objects in different namespaces • To modify the global x, you need the global keyword

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The global variable is unaffected.
2. Apply the construct’s main rule next, matching: Assignment inside a function creates a local variable that shadows the global one.
3. Produce any intermediate values that Global x is still 1 Why this happens: • Python treats any assignment in a function as creating a local variable • The local x and global x are different objects in different namespaces • To modify the global x, you need the global keyword relies on
4. Finish by returning/assembling the final output named by: Global x is still 1 Why this happens: • Python treats any assignment in a function as creating a local variable • The local x and global x are different objects in different namespaces • To modify the global x, you need the global keyword
5. Use the result only after the full construct has completed, per: Assignment inside a function creates a local variable that shadows the global one.

Common Use Cases:
• Teaching this behavior using the mental model: Assignment inside a function creates a local variable that shadows the global one.
• Debugging when the observed value should match the expectation in: Global x is still 1 Why this happens: • Python treats any assignment in a function as creating a local variable • The local x and global x are different objects in different namespaces • To modify the global x, you need the global keyword

Edge Cases:
• If inputs vary from the situation described in: The global variable is unaffected., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • x = 2 inside f() creates a new local variable named x • This local x is separate from the global x • The global x remains 1 after f() returns How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Global x is still 1 Why this happens: • Python treats any assignment in a function as creating a local variable • The local x and global x are different objects in different namespaces • To modify the global x, you need the global keyword.
• When performance matters, prefer the simplest pattern that still implements: Assignment inside a function creates a local variable that shadows the global one..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Assignment inside a function creates a local variable that shadows the global one..

Notes:
• For maintainable code, make the intent behind: The global variable is unaffected. explicit (and test it with inputs like those in this prompt).`
  }),
  // 73. global keyword modifies module-level variable
  (_i: number) => ({
    q: `x = 1\ndef f():\n    global x\n    x = 2\nf()\nWhat is x?`,
    o: ['2', '1', 'None', 'Error'],
    c: 0,
    e: "The global keyword tells Python that x refers to the module-level variable. f() changes it to 2.",
    de: `The global keyword declares that a variable inside a function refers to the module-level (global) variable, allowing modification.

Key concepts:
• global x tells Python: "x in this function is the global x"
• Without global, x = 2 would create a local variable
• With global, x = 2 modifies the module-level x

How it works:
1. x = 1 at module level
2. f() declares global x — no local x will be created
3. x = 2 modifies the global x
4. After f() returns, global x is now 2

When to use global:
• Rarely — global mutable state is generally discouraged
• Prefer passing values as arguments and returning results
• Acceptable for simple scripts or module-level configuration

Key Concepts:
• After f() returns, global x is now 2 When to use global: • Rarely — global mutable state is generally discouraged • Prefer passing values as arguments and returning results • Acceptable for simple scripts or module-level configuration

Key Distinctions:
• This question’s focus is best captured by: The global keyword declares that a variable inside a function refers to the module-level (global) variable, allowing modification.
• The contrast that matters for correctness is summarized by: Key concepts: • global x tells Python: "x in this function is the global x" • Without global, x = 2 would create a local variable • With global, x = 2 modifies the module-level x How it works: 1.

How It Works:
• Python follows the rule implied by: The global keyword declares that a variable inside a function refers to the module-level (global) variable, allowing modification.
• The outcome you observe follows from: After f() returns, global x is now 2 When to use global: • Rarely — global mutable state is generally discouraged • Prefer passing values as arguments and returning results • Acceptable for simple scripts or module-level configuration

Step-by-Step Execution:
1. Start from the construct described in: The global keyword declares that a variable inside a function refers to the module-level (global) variable, allowing modification.
2. Resolve the subparts implied by: Key concepts: • global x tells Python: "x in this function is the global x" • Without global, x = 2 would create a local variable • With global, x = 2 modifies the module-level x How it works: 1.
3. Apply the core semantics highlighted in: x = 1 at module level 2.
4. Confirm the final result aligns with: After f() returns, global x is now 2 When to use global: • Rarely — global mutable state is generally discouraged • Prefer passing values as arguments and returning results • Acceptable for simple scripts or module-level configuration

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • global x tells Python: "x in this function is the global x" • Without global, x = 2 would create a local variable • With global, x = 2 modifies the module-level x How it works: 1.
2. Apply the construct’s main rule next, matching: The global keyword declares that a variable inside a function refers to the module-level (global) variable, allowing modification.
3. Produce any intermediate values that After f() returns, global x is now 2 When to use global: • Rarely — global mutable state is generally discouraged • Prefer passing values as arguments and returning results • Acceptable for simple scripts or module-level configuration relies on
4. Finish by returning/assembling the final output named by: After f() returns, global x is now 2 When to use global: • Rarely — global mutable state is generally discouraged • Prefer passing values as arguments and returning results • Acceptable for simple scripts or module-level configuration
5. Use the result only after the full construct has completed, per: The global keyword declares that a variable inside a function refers to the module-level (global) variable, allowing modification.

Common Use Cases:
• Teaching this behavior using the mental model: The global keyword declares that a variable inside a function refers to the module-level (global) variable, allowing modification.
• Debugging when the observed value should match the expectation in: After f() returns, global x is now 2 When to use global: • Rarely — global mutable state is generally discouraged • Prefer passing values as arguments and returning results • Acceptable for simple scripts or module-level configuration

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • global x tells Python: "x in this function is the global x" • Without global, x = 2 would create a local variable • With global, x = 2 modifies the module-level x How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: x = 1 at module level 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: After f() returns, global x is now 2 When to use global: • Rarely — global mutable state is generally discouraged • Prefer passing values as arguments and returning results • Acceptable for simple scripts or module-level configuration.
• When performance matters, prefer the simplest pattern that still implements: The global keyword declares that a variable inside a function refers to the module-level (global) variable, allowing modification..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The global keyword declares that a variable inside a function refers to the module-level (global) variable, allowing modification..

Notes:
• For maintainable code, make the intent behind: Key concepts: • global x tells Python: "x in this function is the global x" • Without global, x = 2 would create a local variable • With global, x = 2 modifies the module-level x How it works: 1. explicit (and test it with inputs like those in this prompt).`
  }),
  // 74. nonlocal modifies enclosing function's variable
  (_i: number) => ({
    q: `def f():\n    x = 1\n    def g():\n        nonlocal x\n        x = 2\n    g()\n    return x\nWhat is f()?`,
    o: ['2', '1', 'None', 'Error'],
    c: 0,
    e: "nonlocal x in g() tells Python to modify the enclosing function's x. After g(), x is 2.",
    de: `The nonlocal keyword allows a nested function to modify a variable in its enclosing (non-global) scope.

Key concepts:
• nonlocal x binds x to the enclosing function's variable
• Without nonlocal, x = 2 in g() would create a new local variable in g
• With nonlocal, g() modifies f()'s x directly

How it works:
1. f() sets x = 1 (local to f)
2. g() declares nonlocal x — references f()'s x
3. g() sets x = 2 — modifies f()'s x
4. g() returns
5. f() returns x → 2 (modified by g)

nonlocal vs global:
• global: refers to module-level variable
• nonlocal: refers to the nearest enclosing function's variable (not global)

Key Concepts:
• f() returns x → 2 (modified by g) nonlocal vs global: • global: refers to module-level variable • nonlocal: refers to the nearest enclosing function's variable (not global)

Key Distinctions:
• This question’s focus is best captured by: The nonlocal keyword allows a nested function to modify a variable in its enclosing (non-global) scope.
• The contrast that matters for correctness is summarized by: Key concepts: • nonlocal x binds x to the enclosing function's variable • Without nonlocal, x = 2 in g() would create a new local variable in g • With nonlocal, g() modifies f()'s x directly How it works: 1.

How It Works:
• Python follows the rule implied by: The nonlocal keyword allows a nested function to modify a variable in its enclosing (non-global) scope.
• The outcome you observe follows from: f() returns x → 2 (modified by g) nonlocal vs global: • global: refers to module-level variable • nonlocal: refers to the nearest enclosing function's variable (not global)

Step-by-Step Execution:
1. Start from the construct described in: The nonlocal keyword allows a nested function to modify a variable in its enclosing (non-global) scope.
2. Resolve the subparts implied by: Key concepts: • nonlocal x binds x to the enclosing function's variable • Without nonlocal, x = 2 in g() would create a new local variable in g • With nonlocal, g() modifies f()'s x directly How it works: 1.
3. Apply the core semantics highlighted in: f() sets x = 1 (local to f) 2.
4. Confirm the final result aligns with: f() returns x → 2 (modified by g) nonlocal vs global: • global: refers to module-level variable • nonlocal: refers to the nearest enclosing function's variable (not global)

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • nonlocal x binds x to the enclosing function's variable • Without nonlocal, x = 2 in g() would create a new local variable in g • With nonlocal, g() modifies f()'s x directly How it works: 1.
2. Apply the construct’s main rule next, matching: The nonlocal keyword allows a nested function to modify a variable in its enclosing (non-global) scope.
3. Produce any intermediate values that f() returns x → 2 (modified by g) nonlocal vs global: • global: refers to module-level variable • nonlocal: refers to the nearest enclosing function's variable (not global) relies on
4. Finish by returning/assembling the final output named by: f() returns x → 2 (modified by g) nonlocal vs global: • global: refers to module-level variable • nonlocal: refers to the nearest enclosing function's variable (not global)
5. Use the result only after the full construct has completed, per: The nonlocal keyword allows a nested function to modify a variable in its enclosing (non-global) scope.

Common Use Cases:
• Teaching this behavior using the mental model: The nonlocal keyword allows a nested function to modify a variable in its enclosing (non-global) scope.
• Debugging when the observed value should match the expectation in: f() returns x → 2 (modified by g) nonlocal vs global: • global: refers to module-level variable • nonlocal: refers to the nearest enclosing function's variable (not global)

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • nonlocal x binds x to the enclosing function's variable • Without nonlocal, x = 2 in g() would create a new local variable in g • With nonlocal, g() modifies f()'s x directly How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: f() sets x = 1 (local to f) 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: f() returns x → 2 (modified by g) nonlocal vs global: • global: refers to module-level variable • nonlocal: refers to the nearest enclosing function's variable (not global).
• When performance matters, prefer the simplest pattern that still implements: The nonlocal keyword allows a nested function to modify a variable in its enclosing (non-global) scope..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The nonlocal keyword allows a nested function to modify a variable in its enclosing (non-global) scope..

Notes:
• For maintainable code, make the intent behind: Key concepts: • nonlocal x binds x to the enclosing function's variable • Without nonlocal, x = 2 in g() would create a new local variable in g • With nonlocal, g() modifies f()'s x directly How it works: 1. explicit (and test it with inputs like those in this prompt).`
  }),
  // 75. Without nonlocal, inner function's x is separate
  (_i: number) => ({
    q: `def f():\n    x = 1\n    def g():\n        x = 2\n    g()\n    return x\nWhat is f()?`,
    o: ['1', '2', 'None', 'Error'],
    c: 0,
    e: "Without nonlocal, x = 2 in g() creates a local variable in g. f()'s x stays 1.",
    de: `Without the nonlocal keyword, assignment in a nested function creates a new local variable that shadows the outer one.

Key concepts:
• x = 2 inside g() creates g's own local x
• f()'s x = 1 is untouched
• g()'s local x is discarded when g() returns

How it works:
1. f() sets x = 1 (local to f)
2. g() executes x = 2 — creates a local x in g's scope
3. g() returns — g's local x (value 2) is discarded
4. f() returns x → 1 (f's x was never modified)

Contrast with Q74:
• With nonlocal x: g() modifies f()'s x → f() returns 2
• Without nonlocal: g() has its own x → f() returns 1

Key Concepts:
• f() returns x → 1 (f's x was never modified) Contrast with Q74: • With nonlocal x: g() modifies f()'s x → f() returns 2 • Without nonlocal: g() has its own x → f() returns 1

Key Distinctions:
• This question’s focus is best captured by: Without the nonlocal keyword, assignment in a nested function creates a new local variable that shadows the outer one.
• The contrast that matters for correctness is summarized by: Key concepts: • x = 2 inside g() creates g's own local x • f()'s x = 1 is untouched • g()'s local x is discarded when g() returns How it works: 1.

How It Works:
• Python follows the rule implied by: Without the nonlocal keyword, assignment in a nested function creates a new local variable that shadows the outer one.
• The outcome you observe follows from: f() returns x → 1 (f's x was never modified) Contrast with Q74: • With nonlocal x: g() modifies f()'s x → f() returns 2 • Without nonlocal: g() has its own x → f() returns 1

Step-by-Step Execution:
1. Start from the construct described in: Without the nonlocal keyword, assignment in a nested function creates a new local variable that shadows the outer one.
2. Resolve the subparts implied by: Key concepts: • x = 2 inside g() creates g's own local x • f()'s x = 1 is untouched • g()'s local x is discarded when g() returns How it works: 1.
3. Apply the core semantics highlighted in: f() sets x = 1 (local to f) 2.
4. Confirm the final result aligns with: f() returns x → 1 (f's x was never modified) Contrast with Q74: • With nonlocal x: g() modifies f()'s x → f() returns 2 • Without nonlocal: g() has its own x → f() returns 1

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • x = 2 inside g() creates g's own local x • f()'s x = 1 is untouched • g()'s local x is discarded when g() returns How it works: 1.
2. Apply the construct’s main rule next, matching: Without the nonlocal keyword, assignment in a nested function creates a new local variable that shadows the outer one.
3. Produce any intermediate values that f() returns x → 1 (f's x was never modified) Contrast with Q74: • With nonlocal x: g() modifies f()'s x → f() returns 2 • Without nonlocal: g() has its own x → f() returns 1 relies on
4. Finish by returning/assembling the final output named by: f() returns x → 1 (f's x was never modified) Contrast with Q74: • With nonlocal x: g() modifies f()'s x → f() returns 2 • Without nonlocal: g() has its own x → f() returns 1
5. Use the result only after the full construct has completed, per: Without the nonlocal keyword, assignment in a nested function creates a new local variable that shadows the outer one.

Common Use Cases:
• Teaching this behavior using the mental model: Without the nonlocal keyword, assignment in a nested function creates a new local variable that shadows the outer one.
• Debugging when the observed value should match the expectation in: f() returns x → 1 (f's x was never modified) Contrast with Q74: • With nonlocal x: g() modifies f()'s x → f() returns 2 • Without nonlocal: g() has its own x → f() returns 1

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • x = 2 inside g() creates g's own local x • f()'s x = 1 is untouched • g()'s local x is discarded when g() returns How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: f() sets x = 1 (local to f) 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: f() returns x → 1 (f's x was never modified) Contrast with Q74: • With nonlocal x: g() modifies f()'s x → f() returns 2 • Without nonlocal: g() has its own x → f() returns 1.
• When performance matters, prefer the simplest pattern that still implements: Without the nonlocal keyword, assignment in a nested function creates a new local variable that shadows the outer one..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Without the nonlocal keyword, assignment in a nested function creates a new local variable that shadows the outer one..

Notes:
• For maintainable code, make the intent behind: Key concepts: • x = 2 inside g() creates g's own local x • f()'s x = 1 is untouched • g()'s local x is discarded when g() returns How it works: 1. explicit (and test it with inputs like those in this prompt).`
  }),
  // 76. LEGB rule
  (_i: number) => ({
    q: `What does the LEGB rule in Python stand for?`,
    o: ['Local, Enclosing, Global, Built-in', 'List, Element, Generator, Boolean', 'Load, Execute, Generate, Build', 'Lexical, Enclosed, General, Base'],
    c: 0,
    e: "LEGB is Python's scope resolution order: Local → Enclosing → Global → Built-in.",
    de: `LEGB defines the order in which Python searches for variable names. When you reference a name, Python looks through these scopes in order.

Key concepts:
• L — Local: variables defined inside the current function
• E — Enclosing: variables in any enclosing (outer) functions
• G — Global: variables defined at module level
• B — Built-in: names in the builtins module (print, len, int, etc.)

How it works:
1. Python encounters a name like x
2. First checks the local scope (current function)
3. If not found, checks enclosing function scopes (for nested functions)
4. If not found, checks the global (module) scope
5. If not found, checks built-in names
6. If still not found: NameError

Example:
x = "global"           # G scope
def outer():
    x = "enclosing"    # E scope
    def inner():
        x = "local"    # L scope
        print(x)       # "local" — L found first
    inner()

Key Concepts:
• If still not found: NameError Example: x = "global" # G scope def outer(): x = "enclosing" # E scope def inner(): x = "local" # L scope print(x) # "local" — L found first inner()

Key Distinctions:
• This question’s focus is best captured by: LEGB defines the order in which Python searches for variable names.
• The contrast that matters for correctness is summarized by: When you reference a name, Python looks through these scopes in order.

How It Works:
• Python follows the rule implied by: LEGB defines the order in which Python searches for variable names.
• The outcome you observe follows from: If still not found: NameError Example: x = "global" # G scope def outer(): x = "enclosing" # E scope def inner(): x = "local" # L scope print(x) # "local" — L found first inner()

Step-by-Step Execution:
1. Start from the construct described in: LEGB defines the order in which Python searches for variable names.
2. Resolve the subparts implied by: When you reference a name, Python looks through these scopes in order.
3. Apply the core semantics highlighted in: Key concepts: • L — Local: variables defined inside the current function • E — Enclosing: variables in any enclosing (outer) functions • G — Global: variables defined at module level • B — Built-in: names in the builtins module (print, len, int, etc.) How it works: 1.
4. Confirm the final result aligns with: If still not found: NameError Example: x = "global" # G scope def outer(): x = "enclosing" # E scope def inner(): x = "local" # L scope print(x) # "local" — L found first inner()

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: When you reference a name, Python looks through these scopes in order.
2. Apply the construct’s main rule next, matching: LEGB defines the order in which Python searches for variable names.
3. Produce any intermediate values that If still not found: NameError Example: x = "global" # G scope def outer(): x = "enclosing" # E scope def inner(): x = "local" # L scope print(x) # "local" — L found first inner() relies on
4. Finish by returning/assembling the final output named by: If still not found: NameError Example: x = "global" # G scope def outer(): x = "enclosing" # E scope def inner(): x = "local" # L scope print(x) # "local" — L found first inner()
5. Use the result only after the full construct has completed, per: LEGB defines the order in which Python searches for variable names.

Common Use Cases:
• Teaching this behavior using the mental model: LEGB defines the order in which Python searches for variable names.
• Debugging when the observed value should match the expectation in: If still not found: NameError Example: x = "global" # G scope def outer(): x = "enclosing" # E scope def inner(): x = "local" # L scope print(x) # "local" — L found first inner()

Edge Cases:
• If inputs vary from the situation described in: When you reference a name, Python looks through these scopes in order., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • L — Local: variables defined inside the current function • E — Enclosing: variables in any enclosing (outer) functions • G — Global: variables defined at module level • B — Built-in: names in the builtins module (print, len, int, etc.) How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: If still not found: NameError Example: x = "global" # G scope def outer(): x = "enclosing" # E scope def inner(): x = "local" # L scope print(x) # "local" — L found first inner().
• When performance matters, prefer the simplest pattern that still implements: LEGB defines the order in which Python searches for variable names..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: LEGB defines the order in which Python searches for variable names..

Notes:
• For maintainable code, make the intent behind: When you reference a name, Python looks through these scopes in order. explicit (and test it with inputs like those in this prompt).`
  }),
  // 77. Variable lookup happens at call time, not definition time
  (_i: number) => ({
    q: `x = 10\ndef f():\n    return x\nx = 20\nWhat is f()?`,
    o: ['20', '10', 'Error', 'None'],
    c: 0,
    e: "Python looks up x when f() is called, not when f is defined. At call time, x is 20.",
    de: `Variable references in functions are resolved at call time (late binding), not at definition time. The function does not capture the value of x when defined.

Key concepts:
• f is defined when x = 10, but does not store x's value
• x = 20 changes the global x before f() is called
• When f() is called, it looks up x and finds 20

How it works:
1. x = 10 — global x is 10
2. def f(): return x — f is defined (no lookup yet)
3. x = 20 — global x is now 20
4. f() is called — looks up x in global scope → 20

This is called late binding:
• The function stores a reference to the name "x", not its value
• Each time f() is called, it looks up the current value of x
• This is why closures in loops can behave unexpectedly

Key Concepts:
• f() is called — looks up x in global scope → 20 This is called late binding: • The function stores a reference to the name "x", not its value • Each time f() is called, it looks up the current value of x • This is why closures in loops can behave unexpectedly

Key Distinctions:
• This question’s focus is best captured by: Variable references in functions are resolved at call time (late binding), not at definition time.
• The contrast that matters for correctness is summarized by: The function does not capture the value of x when defined.

How It Works:
• Python follows the rule implied by: Variable references in functions are resolved at call time (late binding), not at definition time.
• The outcome you observe follows from: f() is called — looks up x in global scope → 20 This is called late binding: • The function stores a reference to the name "x", not its value • Each time f() is called, it looks up the current value of x • This is why closures in loops can behave unexpectedly

Step-by-Step Execution:
1. Start from the construct described in: Variable references in functions are resolved at call time (late binding), not at definition time.
2. Resolve the subparts implied by: The function does not capture the value of x when defined.
3. Apply the core semantics highlighted in: Key concepts: • f is defined when x = 10, but does not store x's value • x = 20 changes the global x before f() is called • When f() is called, it looks up x and finds 20 How it works: 1.
4. Confirm the final result aligns with: f() is called — looks up x in global scope → 20 This is called late binding: • The function stores a reference to the name "x", not its value • Each time f() is called, it looks up the current value of x • This is why closures in loops can behave unexpectedly

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The function does not capture the value of x when defined.
2. Apply the construct’s main rule next, matching: Variable references in functions are resolved at call time (late binding), not at definition time.
3. Produce any intermediate values that f() is called — looks up x in global scope → 20 This is called late binding: • The function stores a reference to the name "x", not its value • Each time f() is called, it looks up the current value of x • This is why closures in loops can behave unexpectedly relies on
4. Finish by returning/assembling the final output named by: f() is called — looks up x in global scope → 20 This is called late binding: • The function stores a reference to the name "x", not its value • Each time f() is called, it looks up the current value of x • This is why closures in loops can behave unexpectedly
5. Use the result only after the full construct has completed, per: Variable references in functions are resolved at call time (late binding), not at definition time.

Common Use Cases:
• Teaching this behavior using the mental model: Variable references in functions are resolved at call time (late binding), not at definition time.
• Debugging when the observed value should match the expectation in: f() is called — looks up x in global scope → 20 This is called late binding: • The function stores a reference to the name "x", not its value • Each time f() is called, it looks up the current value of x • This is why closures in loops can behave unexpectedly

Edge Cases:
• If inputs vary from the situation described in: The function does not capture the value of x when defined., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • f is defined when x = 10, but does not store x's value • x = 20 changes the global x before f() is called • When f() is called, it looks up x and finds 20 How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: f() is called — looks up x in global scope → 20 This is called late binding: • The function stores a reference to the name "x", not its value • Each time f() is called, it looks up the current value of x • This is why closures in loops can behave unexpectedly.
• When performance matters, prefer the simplest pattern that still implements: Variable references in functions are resolved at call time (late binding), not at definition time..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Variable references in functions are resolved at call time (late binding), not at definition time..

Notes:
• For maintainable code, make the intent behind: The function does not capture the value of x when defined. explicit (and test it with inputs like those in this prompt).`
  }),
  // 78. f() sees global x, not g()'s local x
  (_i: number) => ({
    q: `x = 10\ndef f():\n    return x\ndef g():\n    x = 99\n    return f()\nWhat is g()?`,
    o: ['10', '99', 'Error', 'None'],
    c: 0,
    e: "f() looks up x in its own global scope, not in g()'s local scope. Global x is 10.",
    de: `Each function's scope chain is determined by where it is defined, not where it is called. This is called lexical (static) scoping.

Key concepts:
• f() is defined at module level — its scope chain is: local → global → built-in
• g()'s local x = 99 is not in f()'s scope chain
• f() looks up x in the global scope and finds 10

How it works:
1. x = 10 in global scope
2. f() is defined at module level — sees global scope
3. g() is called, sets local x = 99
4. g() calls f() — but f() has its own scope chain
5. f() looks up x: not local → global → x = 10
6. g() returns f()'s result: 10

This is lexical scoping:
• Python uses the scope where the function is written (defined), not where it is called
• f()'s enclosing scope is the module, regardless of who calls it

Key Concepts:
• g() returns f()'s result: 10 This is lexical scoping: • Python uses the scope where the function is written (defined), not where it is called • f()'s enclosing scope is the module, regardless of who calls it

Key Distinctions:
• This question’s focus is best captured by: Each function's scope chain is determined by where it is defined, not where it is called.
• The contrast that matters for correctness is summarized by: This is called lexical (static) scoping.

How It Works:
• Python follows the rule implied by: Each function's scope chain is determined by where it is defined, not where it is called.
• The outcome you observe follows from: g() returns f()'s result: 10 This is lexical scoping: • Python uses the scope where the function is written (defined), not where it is called • f()'s enclosing scope is the module, regardless of who calls it

Step-by-Step Execution:
1. Start from the construct described in: Each function's scope chain is determined by where it is defined, not where it is called.
2. Resolve the subparts implied by: This is called lexical (static) scoping.
3. Apply the core semantics highlighted in: Key concepts: • f() is defined at module level — its scope chain is: local → global → built-in • g()'s local x = 99 is not in f()'s scope chain • f() looks up x in the global scope and finds 10 How it works: 1.
4. Confirm the final result aligns with: g() returns f()'s result: 10 This is lexical scoping: • Python uses the scope where the function is written (defined), not where it is called • f()'s enclosing scope is the module, regardless of who calls it

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: This is called lexical (static) scoping.
2. Apply the construct’s main rule next, matching: Each function's scope chain is determined by where it is defined, not where it is called.
3. Produce any intermediate values that g() returns f()'s result: 10 This is lexical scoping: • Python uses the scope where the function is written (defined), not where it is called • f()'s enclosing scope is the module, regardless of who calls it relies on
4. Finish by returning/assembling the final output named by: g() returns f()'s result: 10 This is lexical scoping: • Python uses the scope where the function is written (defined), not where it is called • f()'s enclosing scope is the module, regardless of who calls it
5. Use the result only after the full construct has completed, per: Each function's scope chain is determined by where it is defined, not where it is called.

Common Use Cases:
• Teaching this behavior using the mental model: Each function's scope chain is determined by where it is defined, not where it is called.
• Debugging when the observed value should match the expectation in: g() returns f()'s result: 10 This is lexical scoping: • Python uses the scope where the function is written (defined), not where it is called • f()'s enclosing scope is the module, regardless of who calls it

Edge Cases:
• If inputs vary from the situation described in: This is called lexical (static) scoping., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • f() is defined at module level — its scope chain is: local → global → built-in • g()'s local x = 99 is not in f()'s scope chain • f() looks up x in the global scope and finds 10 How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: g() returns f()'s result: 10 This is lexical scoping: • Python uses the scope where the function is written (defined), not where it is called • f()'s enclosing scope is the module, regardless of who calls it.
• When performance matters, prefer the simplest pattern that still implements: Each function's scope chain is determined by where it is defined, not where it is called..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Each function's scope chain is determined by where it is defined, not where it is called..

Notes:
• For maintainable code, make the intent behind: This is called lexical (static) scoping. explicit (and test it with inputs like those in this prompt).`
  }),
  // 79. Deleting a global variable from inside a function
  (_i: number) => ({
    q: `Can you delete a global variable from inside a function?`,
    o: ['Yes, with global keyword then del', 'No, never possible', 'Yes, del alone works', 'Only in Python 2'],
    c: 0,
    e: "You must declare global x first, then del x will remove it from the global namespace.",
    de: `To delete a global variable from inside a function, you need the global keyword to indicate you are referring to the global variable, then use del.

Key concepts:
• global x tells Python that x refers to the global variable
• del x then removes x from the global namespace
• Without the global declaration, del x would try to delete a local variable

How it works:
x = 42
def remove():
    global x
    del x
remove()
# x is now deleted from globals
# Accessing x would raise NameError

Without global:
x = 42
def remove():
    del x  # UnboundLocalError — no local x exists

Important: Deleting global variables is rarely good practice. Prefer setting to None or restructuring code.

Key Concepts:
• Prefer setting to None or restructuring code.

Key Distinctions:
• This question’s focus is best captured by: To delete a global variable from inside a function, you need the global keyword to indicate you are referring to the global variable, then use del.
• The contrast that matters for correctness is summarized by: Key concepts: • global x tells Python that x refers to the global variable • del x then removes x from the global namespace • Without the global declaration, del x would try to delete a local variable How it works: x = 42 def remove(): global x del x remove() # x is now deleted from globals # Accessing x would raise NameError Without global: x = 42 def remove(): del x # UnboundLocalError — no local x exists Important: Deleting global variables is rarely good practice.

How It Works:
• Python follows the rule implied by: To delete a global variable from inside a function, you need the global keyword to indicate you are referring to the global variable, then use del.
• The outcome you observe follows from: Prefer setting to None or restructuring code.

Step-by-Step Execution:
1. Start from the construct described in: To delete a global variable from inside a function, you need the global keyword to indicate you are referring to the global variable, then use del.
2. Resolve the subparts implied by: Key concepts: • global x tells Python that x refers to the global variable • del x then removes x from the global namespace • Without the global declaration, del x would try to delete a local variable How it works: x = 42 def remove(): global x del x remove() # x is now deleted from globals # Accessing x would raise NameError Without global: x = 42 def remove(): del x # UnboundLocalError — no local x exists Important: Deleting global variables is rarely good practice.
3. Apply the core semantics highlighted in: Prefer setting to None or restructuring code.
4. Confirm the final result aligns with: Prefer setting to None or restructuring code.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • global x tells Python that x refers to the global variable • del x then removes x from the global namespace • Without the global declaration, del x would try to delete a local variable How it works: x = 42 def remove(): global x del x remove() # x is now deleted from globals # Accessing x would raise NameError Without global: x = 42 def remove(): del x # UnboundLocalError — no local x exists Important: Deleting global variables is rarely good practice.
2. Apply the construct’s main rule next, matching: To delete a global variable from inside a function, you need the global keyword to indicate you are referring to the global variable, then use del.
3. Produce any intermediate values that Prefer setting to None or restructuring code. relies on
4. Finish by returning/assembling the final output named by: Prefer setting to None or restructuring code.
5. Use the result only after the full construct has completed, per: To delete a global variable from inside a function, you need the global keyword to indicate you are referring to the global variable, then use del.

Common Use Cases:
• Teaching this behavior using the mental model: To delete a global variable from inside a function, you need the global keyword to indicate you are referring to the global variable, then use del.
• Debugging when the observed value should match the expectation in: Prefer setting to None or restructuring code.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • global x tells Python that x refers to the global variable • del x then removes x from the global namespace • Without the global declaration, del x would try to delete a local variable How it works: x = 42 def remove(): global x del x remove() # x is now deleted from globals # Accessing x would raise NameError Without global: x = 42 def remove(): del x # UnboundLocalError — no local x exists Important: Deleting global variables is rarely good practice., the behavior can change.
• When the construct’s assumptions differ, the rule in: Prefer setting to None or restructuring code. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Prefer setting to None or restructuring code..
• When performance matters, prefer the simplest pattern that still implements: To delete a global variable from inside a function, you need the global keyword to indicate you are referring to the global variable, then use del..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: To delete a global variable from inside a function, you need the global keyword to indicate you are referring to the global variable, then use del..

Notes:
• For maintainable code, make the intent behind: Key concepts: • global x tells Python that x refers to the global variable • del x then removes x from the global namespace • Without the global declaration, del x would try to delete a local variable How it works: x = 42 def remove(): global x del x remove() # x is now deleted from globals # Accessing x would raise NameError Without global: x = 42 def remove(): del x # UnboundLocalError — no local x exists Important: Deleting global variables is rarely good practice. explicit (and test it with inputs like those in this prompt).`
  }),
  // 80. Built-in functions come from the builtins module
  (_i: number) => ({
    q: `What is len.__module__?`,
    o: ['"builtins"', '"__main__"', '"sys"', '"types"'],
    c: 0,
    e: "Built-in functions like len belong to the builtins module.",
    de: `Every built-in function in Python (len, print, int, etc.) is defined in the builtins module. The __module__ attribute tells you which module a function belongs to.

Key concepts:
• len.__module__ returns "builtins"
• The builtins module is the "B" in LEGB
• All built-in names (print, len, type, int, str, etc.) come from this module

How it works:
1. len is a built-in function
2. len.__module__ → "builtins"
3. This is the same module accessible via import builtins

You can even override built-ins (not recommended):
import builtins
builtins.len = lambda x: 42  # replaces len globally!

Other examples:
print.__module__   # "builtins"
int.__module__     # "builtins"
type.__module__    # "builtins"

Key Concepts:
• Other examples: print.__module__ # "builtins" int.__module__ # "builtins" type.__module__ # "builtins"

Key Distinctions:
• This question’s focus is best captured by: Every built-in function in Python (len, print, int, etc.) is defined in the builtins module.
• The contrast that matters for correctness is summarized by: The __module__ attribute tells you which module a function belongs to.

How It Works:
• Python follows the rule implied by: Every built-in function in Python (len, print, int, etc.) is defined in the builtins module.
• The outcome you observe follows from: Other examples: print.__module__ # "builtins" int.__module__ # "builtins" type.__module__ # "builtins"

Step-by-Step Execution:
1. Start from the construct described in: Every built-in function in Python (len, print, int, etc.) is defined in the builtins module.
2. Resolve the subparts implied by: The __module__ attribute tells you which module a function belongs to.
3. Apply the core semantics highlighted in: Key concepts: • len.__module__ returns "builtins" • The builtins module is the "B" in LEGB • All built-in names (print, len, type, int, str, etc.) come from this module How it works: 1.
4. Confirm the final result aligns with: Other examples: print.__module__ # "builtins" int.__module__ # "builtins" type.__module__ # "builtins"

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The __module__ attribute tells you which module a function belongs to.
2. Apply the construct’s main rule next, matching: Every built-in function in Python (len, print, int, etc.) is defined in the builtins module.
3. Produce any intermediate values that Other examples: print.__module__ # "builtins" int.__module__ # "builtins" type.__module__ # "builtins" relies on
4. Finish by returning/assembling the final output named by: Other examples: print.__module__ # "builtins" int.__module__ # "builtins" type.__module__ # "builtins"
5. Use the result only after the full construct has completed, per: Every built-in function in Python (len, print, int, etc.) is defined in the builtins module.

Common Use Cases:
• Teaching this behavior using the mental model: Every built-in function in Python (len, print, int, etc.) is defined in the builtins module.
• Debugging when the observed value should match the expectation in: Other examples: print.__module__ # "builtins" int.__module__ # "builtins" type.__module__ # "builtins"

Edge Cases:
• If inputs vary from the situation described in: The __module__ attribute tells you which module a function belongs to., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • len.__module__ returns "builtins" • The builtins module is the "B" in LEGB • All built-in names (print, len, type, int, str, etc.) come from this module How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Other examples: print.__module__ # "builtins" int.__module__ # "builtins" type.__module__ # "builtins".
• When performance matters, prefer the simplest pattern that still implements: Every built-in function in Python (len, print, int, etc.) is defined in the builtins module..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Every built-in function in Python (len, print, int, etc.) is defined in the builtins module..

Notes:
• For maintainable code, make the intent behind: The __module__ attribute tells you which module a function belongs to. explicit (and test it with inputs like those in this prompt).`
  }),
  // 81. Inspecting closure cell contents
  (_i: number) => ({
    q: `def f():\n    x = 1\n    def g():\n        return x\n    return g.__closure__[0].cell_contents\nWhat is f()?`,
    o: ['1', 'None', 'Error', '0'],
    c: 0,
    e: "g captures x from f's scope. The closure cell stores x=1, accessible via cell_contents.",
    de: `When a nested function references a variable from its enclosing scope, Python creates a closure. The captured variables are stored in cell objects accessible via __closure__.

Key concepts:
• g references x from f, so g has a closure
• __closure__ is a tuple of cell objects
• Each cell has a cell_contents attribute with the captured value

How it works:
1. f() defines x = 1
2. g references x → Python creates a closure for g
3. g.__closure__ is a tuple of cell objects: (cell for x,)
4. g.__closure__[0].cell_contents → 1 (the value of x)

Closure inspection:
def f():
    x = 1
    y = 2
    def g():
        return x + y
    print(g.__closure__)         # (<cell ...>, <cell ...>)
    print(g.__code__.co_freevars)  # ('x', 'y')

Key Concepts:
• g.__closure__[0].cell_contents → 1 (the value of x) Closure inspection: def f(): x = 1 y = 2 def g(): return x + y print(g.__closure__) # (<cell ...>, <cell ...>) print(g.__code__.co_freevars) # ('x', 'y')

Key Distinctions:
• This question’s focus is best captured by: When a nested function references a variable from its enclosing scope, Python creates a closure.
• The contrast that matters for correctness is summarized by: The captured variables are stored in cell objects accessible via __closure__.

How It Works:
• Python follows the rule implied by: When a nested function references a variable from its enclosing scope, Python creates a closure.
• The outcome you observe follows from: g.__closure__[0].cell_contents → 1 (the value of x) Closure inspection: def f(): x = 1 y = 2 def g(): return x + y print(g.__closure__) # (<cell ...>, <cell ...>) print(g.__code__.co_freevars) # ('x', 'y')

Step-by-Step Execution:
1. Start from the construct described in: When a nested function references a variable from its enclosing scope, Python creates a closure.
2. Resolve the subparts implied by: The captured variables are stored in cell objects accessible via __closure__.
3. Apply the core semantics highlighted in: Key concepts: • g references x from f, so g has a closure • __closure__ is a tuple of cell objects • Each cell has a cell_contents attribute with the captured value How it works: 1.
4. Confirm the final result aligns with: g.__closure__[0].cell_contents → 1 (the value of x) Closure inspection: def f(): x = 1 y = 2 def g(): return x + y print(g.__closure__) # (<cell ...>, <cell ...>) print(g.__code__.co_freevars) # ('x', 'y')

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The captured variables are stored in cell objects accessible via __closure__.
2. Apply the construct’s main rule next, matching: When a nested function references a variable from its enclosing scope, Python creates a closure.
3. Produce any intermediate values that g.__closure__[0].cell_contents → 1 (the value of x) Closure inspection: def f(): x = 1 y = 2 def g(): return x + y print(g.__closure__) # (<cell ...>, <cell ...>) print(g.__code__.co_freevars) # ('x', 'y') relies on
4. Finish by returning/assembling the final output named by: g.__closure__[0].cell_contents → 1 (the value of x) Closure inspection: def f(): x = 1 y = 2 def g(): return x + y print(g.__closure__) # (<cell ...>, <cell ...>) print(g.__code__.co_freevars) # ('x', 'y')
5. Use the result only after the full construct has completed, per: When a nested function references a variable from its enclosing scope, Python creates a closure.

Common Use Cases:
• Teaching this behavior using the mental model: When a nested function references a variable from its enclosing scope, Python creates a closure.
• Debugging when the observed value should match the expectation in: g.__closure__[0].cell_contents → 1 (the value of x) Closure inspection: def f(): x = 1 y = 2 def g(): return x + y print(g.__closure__) # (<cell ...>, <cell ...>) print(g.__code__.co_freevars) # ('x', 'y')

Edge Cases:
• If inputs vary from the situation described in: The captured variables are stored in cell objects accessible via __closure__., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • g references x from f, so g has a closure • __closure__ is a tuple of cell objects • Each cell has a cell_contents attribute with the captured value How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: g.__closure__[0].cell_contents → 1 (the value of x) Closure inspection: def f(): x = 1 y = 2 def g(): return x + y print(g.__closure__) # (<cell ...>, <cell ...>) print(g.__code__.co_freevars) # ('x', 'y').
• When performance matters, prefer the simplest pattern that still implements: When a nested function references a variable from its enclosing scope, Python creates a closure..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: When a nested function references a variable from its enclosing scope, Python creates a closure..

Notes:
• For maintainable code, make the intent behind: The captured variables are stored in cell objects accessible via __closure__. explicit (and test it with inputs like those in this prompt).`
  }),
  // 82. Closure is not None when variable is captured
  (_i: number) => ({
    q: `def f():\n    x = 1\n    def g():\n        return x\n    return g.__closure__ is not None\nWhat is f()?`,
    o: ['True', 'False', 'None', 'Error'],
    c: 0,
    e: "g captures x from f, so g has a closure. __closure__ is a non-None tuple of cells.",
    de: `A function's __closure__ attribute is None when the function captures no variables, and a tuple of cell objects when it does.

Key concepts:
• g references x from f's scope → closure is created
• __closure__ is a tuple of cell objects (not None)
• g.__closure__ is not None evaluates to True

How it works:
1. g references x (a free variable from f's scope)
2. Python creates a closure to capture x
3. g.__closure__ = (<cell object for x>,) — a tuple with one cell
4. g.__closure__ is not None → True

Testing for closures:
• __closure__ is None → function has no free variables
• __closure__ is not None → function captures variables from enclosing scope

Key Concepts:
• g.__closure__ is not None → True Testing for closures: • __closure__ is None → function has no free variables • __closure__ is not None → function captures variables from enclosing scope

Key Distinctions:
• This question’s focus is best captured by: A function's __closure__ attribute is None when the function captures no variables, and a tuple of cell objects when it does.
• The contrast that matters for correctness is summarized by: Key concepts: • g references x from f's scope → closure is created • __closure__ is a tuple of cell objects (not None) • g.__closure__ is not None evaluates to True How it works: 1.

How It Works:
• Python follows the rule implied by: A function's __closure__ attribute is None when the function captures no variables, and a tuple of cell objects when it does.
• The outcome you observe follows from: g.__closure__ is not None → True Testing for closures: • __closure__ is None → function has no free variables • __closure__ is not None → function captures variables from enclosing scope

Step-by-Step Execution:
1. Start from the construct described in: A function's __closure__ attribute is None when the function captures no variables, and a tuple of cell objects when it does.
2. Resolve the subparts implied by: Key concepts: • g references x from f's scope → closure is created • __closure__ is a tuple of cell objects (not None) • g.__closure__ is not None evaluates to True How it works: 1.
3. Apply the core semantics highlighted in: g references x (a free variable from f's scope) 2.
4. Confirm the final result aligns with: g.__closure__ is not None → True Testing for closures: • __closure__ is None → function has no free variables • __closure__ is not None → function captures variables from enclosing scope

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • g references x from f's scope → closure is created • __closure__ is a tuple of cell objects (not None) • g.__closure__ is not None evaluates to True How it works: 1.
2. Apply the construct’s main rule next, matching: A function's __closure__ attribute is None when the function captures no variables, and a tuple of cell objects when it does.
3. Produce any intermediate values that g.__closure__ is not None → True Testing for closures: • __closure__ is None → function has no free variables • __closure__ is not None → function captures variables from enclosing scope relies on
4. Finish by returning/assembling the final output named by: g.__closure__ is not None → True Testing for closures: • __closure__ is None → function has no free variables • __closure__ is not None → function captures variables from enclosing scope
5. Use the result only after the full construct has completed, per: A function's __closure__ attribute is None when the function captures no variables, and a tuple of cell objects when it does.

Common Use Cases:
• Teaching this behavior using the mental model: A function's __closure__ attribute is None when the function captures no variables, and a tuple of cell objects when it does.
• Debugging when the observed value should match the expectation in: g.__closure__ is not None → True Testing for closures: • __closure__ is None → function has no free variables • __closure__ is not None → function captures variables from enclosing scope

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • g references x from f's scope → closure is created • __closure__ is a tuple of cell objects (not None) • g.__closure__ is not None evaluates to True How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: g references x (a free variable from f's scope) 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: g.__closure__ is not None → True Testing for closures: • __closure__ is None → function has no free variables • __closure__ is not None → function captures variables from enclosing scope.
• When performance matters, prefer the simplest pattern that still implements: A function's __closure__ attribute is None when the function captures no variables, and a tuple of cell objects when it does..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: A function's __closure__ attribute is None when the function captures no variables, and a tuple of cell objects when it does..

Notes:
• For maintainable code, make the intent behind: Key concepts: • g references x from f's scope → closure is created • __closure__ is a tuple of cell objects (not None) • g.__closure__ is not None evaluates to True How it works: 1. explicit (and test it with inputs like those in this prompt).`
  }),
  // 83. No closure when nested function doesn't capture anything
  (_i: number) => ({
    q: `def f():\n    def g():\n        return 42\n    return g.__closure__\nWhat is f()?`,
    o: ['None', '()', 'True', 'Error'],
    c: 0,
    e: "g does not reference any variable from f, so no closure is created. __closure__ is None.",
    de: `When a nested function does not reference any variables from its enclosing scope, no closure is created and __closure__ is None.

Key concepts:
• g returns a literal 42 — no free variables
• No variables captured from f's scope
• __closure__ is None (not an empty tuple)

How it works:
1. g is defined inside f but only uses the literal 42
2. g has no free variables (nothing from f's scope)
3. Python does not create a closure
4. g.__closure__ → None

Contrast:
def f():
    x = 1
    def g(): return x      # captures x → __closure__ is not None
    def h(): return 42     # no capture → __closure__ is None

Key Concepts:
• g.__closure__ → None Contrast: def f(): x = 1 def g(): return x # captures x → __closure__ is not None def h(): return 42 # no capture → __closure__ is None

Key Distinctions:
• This question’s focus is best captured by: When a nested function does not reference any variables from its enclosing scope, no closure is created and __closure__ is None.
• The contrast that matters for correctness is summarized by: Key concepts: • g returns a literal 42 — no free variables • No variables captured from f's scope • __closure__ is None (not an empty tuple) How it works: 1.

How It Works:
• Python follows the rule implied by: When a nested function does not reference any variables from its enclosing scope, no closure is created and __closure__ is None.
• The outcome you observe follows from: g.__closure__ → None Contrast: def f(): x = 1 def g(): return x # captures x → __closure__ is not None def h(): return 42 # no capture → __closure__ is None

Step-by-Step Execution:
1. Start from the construct described in: When a nested function does not reference any variables from its enclosing scope, no closure is created and __closure__ is None.
2. Resolve the subparts implied by: Key concepts: • g returns a literal 42 — no free variables • No variables captured from f's scope • __closure__ is None (not an empty tuple) How it works: 1.
3. Apply the core semantics highlighted in: g is defined inside f but only uses the literal 42 2.
4. Confirm the final result aligns with: g.__closure__ → None Contrast: def f(): x = 1 def g(): return x # captures x → __closure__ is not None def h(): return 42 # no capture → __closure__ is None

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • g returns a literal 42 — no free variables • No variables captured from f's scope • __closure__ is None (not an empty tuple) How it works: 1.
2. Apply the construct’s main rule next, matching: When a nested function does not reference any variables from its enclosing scope, no closure is created and __closure__ is None.
3. Produce any intermediate values that g.__closure__ → None Contrast: def f(): x = 1 def g(): return x # captures x → __closure__ is not None def h(): return 42 # no capture → __closure__ is None relies on
4. Finish by returning/assembling the final output named by: g.__closure__ → None Contrast: def f(): x = 1 def g(): return x # captures x → __closure__ is not None def h(): return 42 # no capture → __closure__ is None
5. Use the result only after the full construct has completed, per: When a nested function does not reference any variables from its enclosing scope, no closure is created and __closure__ is None.

Common Use Cases:
• Teaching this behavior using the mental model: When a nested function does not reference any variables from its enclosing scope, no closure is created and __closure__ is None.
• Debugging when the observed value should match the expectation in: g.__closure__ → None Contrast: def f(): x = 1 def g(): return x # captures x → __closure__ is not None def h(): return 42 # no capture → __closure__ is None

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • g returns a literal 42 — no free variables • No variables captured from f's scope • __closure__ is None (not an empty tuple) How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: g is defined inside f but only uses the literal 42 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: g.__closure__ → None Contrast: def f(): x = 1 def g(): return x # captures x → __closure__ is not None def h(): return 42 # no capture → __closure__ is None.
• When performance matters, prefer the simplest pattern that still implements: When a nested function does not reference any variables from its enclosing scope, no closure is created and __closure__ is None..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: When a nested function does not reference any variables from its enclosing scope, no closure is created and __closure__ is None..

Notes:
• For maintainable code, make the intent behind: Key concepts: • g returns a literal 42 — no free variables • No variables captured from f's scope • __closure__ is None (not an empty tuple) How it works: 1. explicit (and test it with inputs like those in this prompt).`
  }),
  // 84. Enclosing scope variable wins over global
  (_i: number) => ({
    q: `x = "global"\ndef f():\n    x = "local"\n    def g():\n        return x\n    return g()\nWhat is f()?`,
    o: ['"local"', '"global"', 'None', 'Error'],
    c: 0,
    e: "g() finds x in f()'s scope (Enclosing) before checking the global scope. Returns 'local'.",
    de: `The LEGB rule means the enclosing scope (E) is checked before the global scope (G). g()'s enclosing scope is f(), which has x = "local".

Key concepts:
• x = "global" is in the Global scope
• x = "local" is in f()'s scope (Enclosing for g)
• g() looks up x: Local (none) → Enclosing (found: "local") → stops

How it works:
1. x = "global" at module level
2. f() sets x = "local" (local to f)
3. g() is defined inside f, references x
4. g() looks up x: not in g's local scope → checks enclosing (f's scope) → "local"
5. Returns "local"

LEGB in action:
L: g has no local x
E: f has x = "local" ← found here
G: module has x = "global" (not reached)
B: built-ins (not reached)

Key Concepts:
• Returns "local" LEGB in action: L: g has no local x E: f has x = "local" ← found here G: module has x = "global" (not reached) B: built-ins (not reached)

Key Distinctions:
• This question’s focus is best captured by: The LEGB rule means the enclosing scope (E) is checked before the global scope (G).
• The contrast that matters for correctness is summarized by: g()'s enclosing scope is f(), which has x = "local".

How It Works:
• Python follows the rule implied by: The LEGB rule means the enclosing scope (E) is checked before the global scope (G).
• The outcome you observe follows from: Returns "local" LEGB in action: L: g has no local x E: f has x = "local" ← found here G: module has x = "global" (not reached) B: built-ins (not reached)

Step-by-Step Execution:
1. Start from the construct described in: The LEGB rule means the enclosing scope (E) is checked before the global scope (G).
2. Resolve the subparts implied by: g()'s enclosing scope is f(), which has x = "local".
3. Apply the core semantics highlighted in: Key concepts: • x = "global" is in the Global scope • x = "local" is in f()'s scope (Enclosing for g) • g() looks up x: Local (none) → Enclosing (found: "local") → stops How it works: 1.
4. Confirm the final result aligns with: Returns "local" LEGB in action: L: g has no local x E: f has x = "local" ← found here G: module has x = "global" (not reached) B: built-ins (not reached)

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: g()'s enclosing scope is f(), which has x = "local".
2. Apply the construct’s main rule next, matching: The LEGB rule means the enclosing scope (E) is checked before the global scope (G).
3. Produce any intermediate values that Returns "local" LEGB in action: L: g has no local x E: f has x = "local" ← found here G: module has x = "global" (not reached) B: built-ins (not reached) relies on
4. Finish by returning/assembling the final output named by: Returns "local" LEGB in action: L: g has no local x E: f has x = "local" ← found here G: module has x = "global" (not reached) B: built-ins (not reached)
5. Use the result only after the full construct has completed, per: The LEGB rule means the enclosing scope (E) is checked before the global scope (G).

Common Use Cases:
• Teaching this behavior using the mental model: The LEGB rule means the enclosing scope (E) is checked before the global scope (G).
• Debugging when the observed value should match the expectation in: Returns "local" LEGB in action: L: g has no local x E: f has x = "local" ← found here G: module has x = "global" (not reached) B: built-ins (not reached)

Edge Cases:
• If inputs vary from the situation described in: g()'s enclosing scope is f(), which has x = "local"., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • x = "global" is in the Global scope • x = "local" is in f()'s scope (Enclosing for g) • g() looks up x: Local (none) → Enclosing (found: "local") → stops How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Returns "local" LEGB in action: L: g has no local x E: f has x = "local" ← found here G: module has x = "global" (not reached) B: built-ins (not reached).
• When performance matters, prefer the simplest pattern that still implements: The LEGB rule means the enclosing scope (E) is checked before the global scope (G)..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The LEGB rule means the enclosing scope (E) is checked before the global scope (G)..

Notes:
• For maintainable code, make the intent behind: g()'s enclosing scope is f(), which has x = "local". explicit (and test it with inputs like those in this prompt).`
  }),
  // 85. Counting free variables with co_freevars
  (_i: number) => ({
    q: `def f():\n    x = 1\n    y = 2\n    def g():\n        return x + y\n    return len(g.__code__.co_freevars)\nWhat is f()?`,
    o: ['2', '1', '0', 'Error'],
    c: 0,
    e: "g captures x and y from f. co_freevars lists them, so len() returns 2.",
    de: `The __code__.co_freevars attribute is a tuple of variable names that a function captures from enclosing scopes (free variables).

Key concepts:
• g references x and y from f's scope
• co_freevars = ("x", "y") — tuple of captured variable names
• len(("x", "y")) = 2

How it works:
1. f() defines x = 1 and y = 2
2. g references both x and y (free variables)
3. g.__code__.co_freevars → ("x", "y")
4. len(("x", "y")) → 2

Related attributes:
• co_freevars: names of captured variables (free variables)
• co_varnames: names of local variables and parameters
• __closure__: tuple of cell objects containing the actual values

Key Concepts:
• len(("x", "y")) → 2 Related attributes: • co_freevars: names of captured variables (free variables) • co_varnames: names of local variables and parameters • __closure__: tuple of cell objects containing the actual values

Key Distinctions:
• This question’s focus is best captured by: The __code__.co_freevars attribute is a tuple of variable names that a function captures from enclosing scopes (free variables).
• The contrast that matters for correctness is summarized by: Key concepts: • g references x and y from f's scope • co_freevars = ("x", "y") — tuple of captured variable names • len(("x", "y")) = 2 How it works: 1.

How It Works:
• Python follows the rule implied by: The __code__.co_freevars attribute is a tuple of variable names that a function captures from enclosing scopes (free variables).
• The outcome you observe follows from: len(("x", "y")) → 2 Related attributes: • co_freevars: names of captured variables (free variables) • co_varnames: names of local variables and parameters • __closure__: tuple of cell objects containing the actual values

Step-by-Step Execution:
1. Start from the construct described in: The __code__.co_freevars attribute is a tuple of variable names that a function captures from enclosing scopes (free variables).
2. Resolve the subparts implied by: Key concepts: • g references x and y from f's scope • co_freevars = ("x", "y") — tuple of captured variable names • len(("x", "y")) = 2 How it works: 1.
3. Apply the core semantics highlighted in: f() defines x = 1 and y = 2 2.
4. Confirm the final result aligns with: len(("x", "y")) → 2 Related attributes: • co_freevars: names of captured variables (free variables) • co_varnames: names of local variables and parameters • __closure__: tuple of cell objects containing the actual values

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • g references x and y from f's scope • co_freevars = ("x", "y") — tuple of captured variable names • len(("x", "y")) = 2 How it works: 1.
2. Apply the construct’s main rule next, matching: The __code__.co_freevars attribute is a tuple of variable names that a function captures from enclosing scopes (free variables).
3. Produce any intermediate values that len(("x", "y")) → 2 Related attributes: • co_freevars: names of captured variables (free variables) • co_varnames: names of local variables and parameters • __closure__: tuple of cell objects containing the actual values relies on
4. Finish by returning/assembling the final output named by: len(("x", "y")) → 2 Related attributes: • co_freevars: names of captured variables (free variables) • co_varnames: names of local variables and parameters • __closure__: tuple of cell objects containing the actual values
5. Use the result only after the full construct has completed, per: The __code__.co_freevars attribute is a tuple of variable names that a function captures from enclosing scopes (free variables).

Common Use Cases:
• Teaching this behavior using the mental model: The __code__.co_freevars attribute is a tuple of variable names that a function captures from enclosing scopes (free variables).
• Debugging when the observed value should match the expectation in: len(("x", "y")) → 2 Related attributes: • co_freevars: names of captured variables (free variables) • co_varnames: names of local variables and parameters • __closure__: tuple of cell objects containing the actual values

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • g references x and y from f's scope • co_freevars = ("x", "y") — tuple of captured variable names • len(("x", "y")) = 2 How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: f() defines x = 1 and y = 2 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: len(("x", "y")) → 2 Related attributes: • co_freevars: names of captured variables (free variables) • co_varnames: names of local variables and parameters • __closure__: tuple of cell objects containing the actual values.
• When performance matters, prefer the simplest pattern that still implements: The __code__.co_freevars attribute is a tuple of variable names that a function captures from enclosing scopes (free variables)..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The __code__.co_freevars attribute is a tuple of variable names that a function captures from enclosing scopes (free variables)..

Notes:
• For maintainable code, make the intent behind: Key concepts: • g references x and y from f's scope • co_freevars = ("x", "y") — tuple of captured variable names • len(("x", "y")) = 2 How it works: 1. explicit (and test it with inputs like those in this prompt).`
  }),
  // 86. Function __name__ attribute
  (_i: number) => ({
    q: `def f(x):\n    return x\nWhat is f.__name__?`,
    o: ['"f"', '"function"', '"x"', 'Error'],
    c: 0,
    e: "Every function has a __name__ attribute that holds its name as defined with def.",
    de: `Functions in Python are objects with attributes. The __name__ attribute stores the function's name as a string, matching the name used in the def statement.

Key concepts:
• f.__name__ returns "f" — the name from def f(x)
• __name__ is set automatically when the function is defined
• Useful for debugging, logging, and introspection

How it works:
1. def f(x): return x — creates a function named "f"
2. f.__name__ → "f"

Other function attributes:
• __name__: function name (string)
• __doc__: docstring (or None)
• __module__: module where function is defined
• __defaults__: tuple of default argument values
• __code__: code object with bytecode details

Key Concepts:
• f.__name__ → "f" Other function attributes: • __name__: function name (string) • __doc__: docstring (or None) • __module__: module where function is defined • __defaults__: tuple of default argument values • __code__: code object with bytecode details

Key Distinctions:
• This question’s focus is best captured by: Functions in Python are objects with attributes.
• The contrast that matters for correctness is summarized by: The __name__ attribute stores the function's name as a string, matching the name used in the def statement.

How It Works:
• Python follows the rule implied by: Functions in Python are objects with attributes.
• The outcome you observe follows from: f.__name__ → "f" Other function attributes: • __name__: function name (string) • __doc__: docstring (or None) • __module__: module where function is defined • __defaults__: tuple of default argument values • __code__: code object with bytecode details

Step-by-Step Execution:
1. Start from the construct described in: Functions in Python are objects with attributes.
2. Resolve the subparts implied by: The __name__ attribute stores the function's name as a string, matching the name used in the def statement.
3. Apply the core semantics highlighted in: Key concepts: • f.__name__ returns "f" — the name from def f(x) • __name__ is set automatically when the function is defined • Useful for debugging, logging, and introspection How it works: 1.
4. Confirm the final result aligns with: f.__name__ → "f" Other function attributes: • __name__: function name (string) • __doc__: docstring (or None) • __module__: module where function is defined • __defaults__: tuple of default argument values • __code__: code object with bytecode details

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The __name__ attribute stores the function's name as a string, matching the name used in the def statement.
2. Apply the construct’s main rule next, matching: Functions in Python are objects with attributes.
3. Produce any intermediate values that f.__name__ → "f" Other function attributes: • __name__: function name (string) • __doc__: docstring (or None) • __module__: module where function is defined • __defaults__: tuple of default argument values • __code__: code object with bytecode details relies on
4. Finish by returning/assembling the final output named by: f.__name__ → "f" Other function attributes: • __name__: function name (string) • __doc__: docstring (or None) • __module__: module where function is defined • __defaults__: tuple of default argument values • __code__: code object with bytecode details
5. Use the result only after the full construct has completed, per: Functions in Python are objects with attributes.

Common Use Cases:
• Teaching this behavior using the mental model: Functions in Python are objects with attributes.
• Debugging when the observed value should match the expectation in: f.__name__ → "f" Other function attributes: • __name__: function name (string) • __doc__: docstring (or None) • __module__: module where function is defined • __defaults__: tuple of default argument values • __code__: code object with bytecode details

Edge Cases:
• If inputs vary from the situation described in: The __name__ attribute stores the function's name as a string, matching the name used in the def statement., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • f.__name__ returns "f" — the name from def f(x) • __name__ is set automatically when the function is defined • Useful for debugging, logging, and introspection How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: f.__name__ → "f" Other function attributes: • __name__: function name (string) • __doc__: docstring (or None) • __module__: module where function is defined • __defaults__: tuple of default argument values • __code__: code object with bytecode details.
• When performance matters, prefer the simplest pattern that still implements: Functions in Python are objects with attributes..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Functions in Python are objects with attributes..

Notes:
• For maintainable code, make the intent behind: The __name__ attribute stores the function's name as a string, matching the name used in the def statement. explicit (and test it with inputs like those in this prompt).`
  }),
  // 87. Function __doc__ attribute (docstring)
  (_i: number) => ({
    q: `def f(x):\n    """My function"""\n    return x\nWhat is f.__doc__?`,
    o: ['"My function"', 'None', '"f"', 'Error'],
    c: 0,
    e: "The first string literal in a function body becomes the docstring, accessible via __doc__.",
    de: `Python treats the first expression in a function body as the docstring if it is a string literal. This string is stored in the __doc__ attribute.

Key concepts:
• """My function""" as the first statement is the docstring
• Accessible via f.__doc__ or help(f)
• Used for documentation and introspection

How it works:
1. def f(x): """My function""" — docstring set
2. f.__doc__ → "My function"
3. help(f) would display this docstring

Docstring conventions (PEP 257):
• First line: brief summary
• Blank line, then detailed description
• Use triple quotes for multi-line docstrings

def f(x):
    """Multiply x by 2.

    Args:
        x: A number to multiply.

    Returns:
        x times 2.
    """
    return x * 2

Key Concepts:
• """ return x * 2

Key Distinctions:
• This question’s focus is best captured by: Python treats the first expression in a function body as the docstring if it is a string literal.
• The contrast that matters for correctness is summarized by: This string is stored in the __doc__ attribute.

How It Works:
• Python follows the rule implied by: Python treats the first expression in a function body as the docstring if it is a string literal.
• The outcome you observe follows from: """ return x * 2

Step-by-Step Execution:
1. Start from the construct described in: Python treats the first expression in a function body as the docstring if it is a string literal.
2. Resolve the subparts implied by: This string is stored in the __doc__ attribute.
3. Apply the core semantics highlighted in: Key concepts: • """My function""" as the first statement is the docstring • Accessible via f.__doc__ or help(f) • Used for documentation and introspection How it works: 1.
4. Confirm the final result aligns with: """ return x * 2

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: This string is stored in the __doc__ attribute.
2. Apply the construct’s main rule next, matching: Python treats the first expression in a function body as the docstring if it is a string literal.
3. Produce any intermediate values that """ return x * 2 relies on
4. Finish by returning/assembling the final output named by: """ return x * 2
5. Use the result only after the full construct has completed, per: Python treats the first expression in a function body as the docstring if it is a string literal.

Common Use Cases:
• Teaching this behavior using the mental model: Python treats the first expression in a function body as the docstring if it is a string literal.
• Debugging when the observed value should match the expectation in: """ return x * 2

Edge Cases:
• If inputs vary from the situation described in: This string is stored in the __doc__ attribute., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • """My function""" as the first statement is the docstring • Accessible via f.__doc__ or help(f) • Used for documentation and introspection How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: """ return x * 2.
• When performance matters, prefer the simplest pattern that still implements: Python treats the first expression in a function body as the docstring if it is a string literal..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Python treats the first expression in a function body as the docstring if it is a string literal..

Notes:
• For maintainable code, make the intent behind: This string is stored in the __doc__ attribute. explicit (and test it with inputs like those in this prompt).`
  }),
  // 88. Function __annotations__ with type hints
  (_i: number) => ({
    q: `def f(x: int, y: str) -> bool:\n    return True\nWhat is f.__annotations__?`,
    o: ['{"x": int, "y": str, "return": bool}', '{"x": "int", "y": "str"}', '(int, str, bool)', 'Error'],
    c: 0,
    e: "Type hints are stored in __annotations__ as a dict mapping parameter names and 'return' to their types.",
    de: `Python stores type annotations in the __annotations__ dictionary. Parameter annotations and return type annotations are all included.

Key concepts:
• x: int annotates parameter x with type int
• y: str annotates parameter y with type str
• -> bool annotates the return type as bool
• All stored in f.__annotations__ as a dictionary

How it works:
1. def f(x: int, y: str) -> bool: — annotations defined
2. f.__annotations__ → {"x": int, "y": str, "return": bool}
3. The key "return" (string) stores the return annotation
4. Values are the actual type objects (int, str, bool), not strings

Important notes:
• Annotations are not enforced at runtime — Python does not check types
• They are metadata for tools like mypy, IDEs, and documentation
• Available since Python 3.0, widely adopted since 3.5+

Key Concepts:
• Values are the actual type objects (int, str, bool), not strings Important notes: • Annotations are not enforced at runtime — Python does not check types • They are metadata for tools like mypy, IDEs, and documentation • Available since Python 3.0, widely adopted since 3.5+

Key Distinctions:
• This question’s focus is best captured by: Python stores type annotations in the __annotations__ dictionary.
• The contrast that matters for correctness is summarized by: Parameter annotations and return type annotations are all included.

How It Works:
• Python follows the rule implied by: Python stores type annotations in the __annotations__ dictionary.
• The outcome you observe follows from: Values are the actual type objects (int, str, bool), not strings Important notes: • Annotations are not enforced at runtime — Python does not check types • They are metadata for tools like mypy, IDEs, and documentation • Available since Python 3.0, widely adopted since 3.5+

Step-by-Step Execution:
1. Start from the construct described in: Python stores type annotations in the __annotations__ dictionary.
2. Resolve the subparts implied by: Parameter annotations and return type annotations are all included.
3. Apply the core semantics highlighted in: Key concepts: • x: int annotates parameter x with type int • y: str annotates parameter y with type str • -> bool annotates the return type as bool • All stored in f.__annotations__ as a dictionary How it works: 1.
4. Confirm the final result aligns with: Values are the actual type objects (int, str, bool), not strings Important notes: • Annotations are not enforced at runtime — Python does not check types • They are metadata for tools like mypy, IDEs, and documentation • Available since Python 3.0, widely adopted since 3.5+

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Parameter annotations and return type annotations are all included.
2. Apply the construct’s main rule next, matching: Python stores type annotations in the __annotations__ dictionary.
3. Produce any intermediate values that Values are the actual type objects (int, str, bool), not strings Important notes: • Annotations are not enforced at runtime — Python does not check types • They are metadata for tools like mypy, IDEs, and documentation • Available since Python 3.0, widely adopted since 3.5+ relies on
4. Finish by returning/assembling the final output named by: Values are the actual type objects (int, str, bool), not strings Important notes: • Annotations are not enforced at runtime — Python does not check types • They are metadata for tools like mypy, IDEs, and documentation • Available since Python 3.0, widely adopted since 3.5+
5. Use the result only after the full construct has completed, per: Python stores type annotations in the __annotations__ dictionary.

Common Use Cases:
• Teaching this behavior using the mental model: Python stores type annotations in the __annotations__ dictionary.
• Debugging when the observed value should match the expectation in: Values are the actual type objects (int, str, bool), not strings Important notes: • Annotations are not enforced at runtime — Python does not check types • They are metadata for tools like mypy, IDEs, and documentation • Available since Python 3.0, widely adopted since 3.5+

Edge Cases:
• If inputs vary from the situation described in: Parameter annotations and return type annotations are all included., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • x: int annotates parameter x with type int • y: str annotates parameter y with type str • -> bool annotates the return type as bool • All stored in f.__annotations__ as a dictionary How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Values are the actual type objects (int, str, bool), not strings Important notes: • Annotations are not enforced at runtime — Python does not check types • They are metadata for tools like mypy, IDEs, and documentation • Available since Python 3.0, widely adopted since 3.5+.
• When performance matters, prefer the simplest pattern that still implements: Python stores type annotations in the __annotations__ dictionary..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Python stores type annotations in the __annotations__ dictionary..

Notes:
• For maintainable code, make the intent behind: Parameter annotations and return type annotations are all included. explicit (and test it with inputs like those in this prompt).`
  }),
  // 89. Functions can have custom attributes
  (_i: number) => ({
    q: `def f(x):\n    return x\nf.custom_attr = 42\nWhat is f.custom_attr?`,
    o: ['42', 'Error', 'None', '"custom_attr"'],
    c: 0,
    e: "Functions are objects and can have arbitrary attributes assigned to them.",
    de: `In Python, functions are first-class objects. You can set arbitrary attributes on them just like any other object.

Key concepts:
• Functions are instances of the function type
• You can assign custom attributes: f.custom_attr = 42
• These attributes persist on the function object

How it works:
1. def f(x): return x — creates a function object
2. f.custom_attr = 42 — sets a custom attribute on f
3. f.custom_attr → 42

Practical uses:
• Attaching metadata: f.version = "1.0"
• Counting calls: f.call_count = 0 (incremented inside f)
• Memoization caches: f.cache = {}

This works because functions have a __dict__:
f.__dict__  # {"custom_attr": 42}

Key Concepts:
• f.custom_attr → 42 Practical uses: • Attaching metadata: f.version = "1.0" • Counting calls: f.call_count = 0 (incremented inside f) • Memoization caches: f.cache = {} This works because functions have a __dict__: f.__dict__ # {"custom_attr": 42}

Key Distinctions:
• This question’s focus is best captured by: In Python, functions are first-class objects.
• The contrast that matters for correctness is summarized by: You can set arbitrary attributes on them just like any other object.

How It Works:
• Python follows the rule implied by: In Python, functions are first-class objects.
• The outcome you observe follows from: f.custom_attr → 42 Practical uses: • Attaching metadata: f.version = "1.0" • Counting calls: f.call_count = 0 (incremented inside f) • Memoization caches: f.cache = {} This works because functions have a __dict__: f.__dict__ # {"custom_attr": 42}

Step-by-Step Execution:
1. Start from the construct described in: In Python, functions are first-class objects.
2. Resolve the subparts implied by: You can set arbitrary attributes on them just like any other object.
3. Apply the core semantics highlighted in: Key concepts: • Functions are instances of the function type • You can assign custom attributes: f.custom_attr = 42 • These attributes persist on the function object How it works: 1.
4. Confirm the final result aligns with: f.custom_attr → 42 Practical uses: • Attaching metadata: f.version = "1.0" • Counting calls: f.call_count = 0 (incremented inside f) • Memoization caches: f.cache = {} This works because functions have a __dict__: f.__dict__ # {"custom_attr": 42}

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: You can set arbitrary attributes on them just like any other object.
2. Apply the construct’s main rule next, matching: In Python, functions are first-class objects.
3. Produce any intermediate values that f.custom_attr → 42 Practical uses: • Attaching metadata: f.version = "1.0" • Counting calls: f.call_count = 0 (incremented inside f) • Memoization caches: f.cache = {} This works because functions have a __dict__: f.__dict__ # {"custom_attr": 42} relies on
4. Finish by returning/assembling the final output named by: f.custom_attr → 42 Practical uses: • Attaching metadata: f.version = "1.0" • Counting calls: f.call_count = 0 (incremented inside f) • Memoization caches: f.cache = {} This works because functions have a __dict__: f.__dict__ # {"custom_attr": 42}
5. Use the result only after the full construct has completed, per: In Python, functions are first-class objects.

Common Use Cases:
• Teaching this behavior using the mental model: In Python, functions are first-class objects.
• Debugging when the observed value should match the expectation in: f.custom_attr → 42 Practical uses: • Attaching metadata: f.version = "1.0" • Counting calls: f.call_count = 0 (incremented inside f) • Memoization caches: f.cache = {} This works because functions have a __dict__: f.__dict__ # {"custom_attr": 42}

Edge Cases:
• If inputs vary from the situation described in: You can set arbitrary attributes on them just like any other object., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • Functions are instances of the function type • You can assign custom attributes: f.custom_attr = 42 • These attributes persist on the function object How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: f.custom_attr → 42 Practical uses: • Attaching metadata: f.version = "1.0" • Counting calls: f.call_count = 0 (incremented inside f) • Memoization caches: f.cache = {} This works because functions have a __dict__: f.__dict__ # {"custom_attr": 42}.
• When performance matters, prefer the simplest pattern that still implements: In Python, functions are first-class objects..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: In Python, functions are first-class objects..

Notes:
• For maintainable code, make the intent behind: You can set arbitrary attributes on them just like any other object. explicit (and test it with inputs like those in this prompt).`
  }),
  // 90. Function dispatch table using dict of lambdas
  (_i: number) => ({
    q: `def dispatch(op):\n    return {"+": lambda a,b: a+b, "-": lambda a,b: a-b}[op]\nWhat is dispatch("+")(3, 2)?`,
    o: ['5', '1', '"+"', 'Error'],
    c: 0,
    e: "dispatch('+') returns lambda a,b: a+b. Calling it with (3,2) returns 3+2 = 5.",
    de: `A dispatch table maps keys to callable functions. This pattern replaces if/elif chains with dictionary lookups.

Key concepts:
• The dict maps operator strings to lambda functions
• dispatch("+") looks up "+" → returns lambda a,b: a+b
• The returned lambda is called with (3, 2) → 5

How it works:
1. dispatch("+") looks up "+" in the dict
2. Returns lambda a,b: a+b
3. (lambda a,b: a+b)(3, 2) → 3 + 2 → 5

Dispatch table pattern:
operations = {
    "+": lambda a, b: a + b,
    "-": lambda a, b: a - b,
    "*": lambda a, b: a * b,
    "/": lambda a, b: a / b,
}
result = operations["*"](4, 3)  # 12

Common uses:
• Command pattern implementation
• Replacing long if/elif chains
• Plugin/extension systems

Key Concepts:
• (lambda a,b: a+b)(3, 2) → 3 + 2 → 5 Dispatch table pattern: operations = { "+": lambda a, b: a + b, "-": lambda a, b: a - b, "*": lambda a, b: a * b, "/": lambda a, b: a / b, } result = operations["*"](4, 3) # 12 Common uses: • Command pattern implementation • Replacing long if/elif chains • Plugin/extension systems

Key Distinctions:
• This question’s focus is best captured by: A dispatch table maps keys to callable functions.
• The contrast that matters for correctness is summarized by: This pattern replaces if/elif chains with dictionary lookups.

How It Works:
• Python follows the rule implied by: A dispatch table maps keys to callable functions.
• The outcome you observe follows from: (lambda a,b: a+b)(3, 2) → 3 + 2 → 5 Dispatch table pattern: operations = { "+": lambda a, b: a + b, "-": lambda a, b: a - b, "*": lambda a, b: a * b, "/": lambda a, b: a / b, } result = operations["*"](4, 3) # 12 Common uses: • Command pattern implementation • Replacing long if/elif chains • Plugin/extension systems

Step-by-Step Execution:
1. Start from the construct described in: A dispatch table maps keys to callable functions.
2. Resolve the subparts implied by: This pattern replaces if/elif chains with dictionary lookups.
3. Apply the core semantics highlighted in: Key concepts: • The dict maps operator strings to lambda functions • dispatch("+") looks up "+" → returns lambda a,b: a+b • The returned lambda is called with (3, 2) → 5 How it works: 1.
4. Confirm the final result aligns with: (lambda a,b: a+b)(3, 2) → 3 + 2 → 5 Dispatch table pattern: operations = { "+": lambda a, b: a + b, "-": lambda a, b: a - b, "*": lambda a, b: a * b, "/": lambda a, b: a / b, } result = operations["*"](4, 3) # 12 Common uses: • Command pattern implementation • Replacing long if/elif chains • Plugin/extension systems

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: This pattern replaces if/elif chains with dictionary lookups.
2. Apply the construct’s main rule next, matching: A dispatch table maps keys to callable functions.
3. Produce any intermediate values that (lambda a,b: a+b)(3, 2) → 3 + 2 → 5 Dispatch table pattern: operations = { "+": lambda a, b: a + b, "-": lambda a, b: a - b, "*": lambda a, b: a * b, "/": lambda a, b: a / b, } result = operations["*"](4, 3) # 12 Common uses: • Command pattern implementation • Replacing long if/elif chains • Plugin/extension systems relies on
4. Finish by returning/assembling the final output named by: (lambda a,b: a+b)(3, 2) → 3 + 2 → 5 Dispatch table pattern: operations = { "+": lambda a, b: a + b, "-": lambda a, b: a - b, "*": lambda a, b: a * b, "/": lambda a, b: a / b, } result = operations["*"](4, 3) # 12 Common uses: • Command pattern implementation • Replacing long if/elif chains • Plugin/extension systems
5. Use the result only after the full construct has completed, per: A dispatch table maps keys to callable functions.

Common Use Cases:
• Teaching this behavior using the mental model: A dispatch table maps keys to callable functions.
• Debugging when the observed value should match the expectation in: (lambda a,b: a+b)(3, 2) → 3 + 2 → 5 Dispatch table pattern: operations = { "+": lambda a, b: a + b, "-": lambda a, b: a - b, "*": lambda a, b: a * b, "/": lambda a, b: a / b, } result = operations["*"](4, 3) # 12 Common uses: • Command pattern implementation • Replacing long if/elif chains • Plugin/extension systems

Edge Cases:
• If inputs vary from the situation described in: This pattern replaces if/elif chains with dictionary lookups., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • The dict maps operator strings to lambda functions • dispatch("+") looks up "+" → returns lambda a,b: a+b • The returned lambda is called with (3, 2) → 5 How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: (lambda a,b: a+b)(3, 2) → 3 + 2 → 5 Dispatch table pattern: operations = { "+": lambda a, b: a + b, "-": lambda a, b: a - b, "*": lambda a, b: a * b, "/": lambda a, b: a / b, } result = operations["*"](4, 3) # 12 Common uses: • Command pattern implementation • Replacing long if/elif chains • Plugin/extension systems.
• When performance matters, prefer the simplest pattern that still implements: A dispatch table maps keys to callable functions..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: A dispatch table maps keys to callable functions..

Notes:
• For maintainable code, make the intent behind: This pattern replaces if/elif chains with dictionary lookups. explicit (and test it with inputs like those in this prompt).`
  }),
  // 91. @once decorator — function runs only on first call
  (_i: number) => ({
    q: `def once(f):\n    called = [False]\n    def wrapper(*a):\n        if not called[0]:\n            called[0] = True\n            return f(*a)\n    return wrapper\nWhat does @once do to a function?`,
    o: ['Makes it run only on the first call', 'Makes it run twice', 'Caches all return values', 'Raises an error on second call'],
    c: 0,
    e: "The once decorator uses a mutable flag to ensure the wrapped function only executes on the first call.",
    de: `This decorator pattern ensures a function can only execute once. Subsequent calls return None because the body is skipped.

Key concepts:
• called = [False] uses a list (mutable) to track state
• First call: called[0] is False → runs f(*a), sets called[0] = True
• Subsequent calls: called[0] is True → if-block skipped → returns None

How it works:
@once
def greet(name):
    print(f"Hello, {name}")

greet("Alice")  # prints "Hello, Alice"
greet("Bob")    # does nothing (returns None)

Why a list instead of a boolean?
• called = [False] is a mutable container
• The nested function can modify called[0] without nonlocal
• Alternative: use nonlocal called (Python 3+)

Common uses:
• Initialization functions that should run exactly once
• One-time setup or teardown
• Ensuring idempotent operations

Key Concepts:
• • called = [False] is a mutable container • The nested function can modify called[0] without nonlocal • Alternative: use nonlocal called (Python 3+) Common uses: • Initialization functions that should run exactly once • One-time setup or teardown • Ensuring idempotent operations

Key Distinctions:
• This question’s focus is best captured by: This decorator pattern ensures a function can only execute once.
• The contrast that matters for correctness is summarized by: Subsequent calls return None because the body is skipped.

How It Works:
• Python follows the rule implied by: This decorator pattern ensures a function can only execute once.
• The outcome you observe follows from: • called = [False] is a mutable container • The nested function can modify called[0] without nonlocal • Alternative: use nonlocal called (Python 3+) Common uses: • Initialization functions that should run exactly once • One-time setup or teardown • Ensuring idempotent operations

Step-by-Step Execution:
1. Start from the construct described in: This decorator pattern ensures a function can only execute once.
2. Resolve the subparts implied by: Subsequent calls return None because the body is skipped.
3. Apply the core semantics highlighted in: Key concepts: • called = [False] uses a list (mutable) to track state • First call: called[0] is False → runs f(*a), sets called[0] = True • Subsequent calls: called[0] is True → if-block skipped → returns None How it works: @once def greet(name): print(f"Hello, {name}") greet("Alice") # prints "Hello, Alice" greet("Bob") # does nothing (returns None) Why a list instead of a boolean?
4. Confirm the final result aligns with: • called = [False] is a mutable container • The nested function can modify called[0] without nonlocal • Alternative: use nonlocal called (Python 3+) Common uses: • Initialization functions that should run exactly once • One-time setup or teardown • Ensuring idempotent operations

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Subsequent calls return None because the body is skipped.
2. Apply the construct’s main rule next, matching: This decorator pattern ensures a function can only execute once.
3. Produce any intermediate values that • called = [False] is a mutable container • The nested function can modify called[0] without nonlocal • Alternative: use nonlocal called (Python 3+) Common uses: • Initialization functions that should run exactly once • One-time setup or teardown • Ensuring idempotent operations relies on
4. Finish by returning/assembling the final output named by: • called = [False] is a mutable container • The nested function can modify called[0] without nonlocal • Alternative: use nonlocal called (Python 3+) Common uses: • Initialization functions that should run exactly once • One-time setup or teardown • Ensuring idempotent operations
5. Use the result only after the full construct has completed, per: This decorator pattern ensures a function can only execute once.

Common Use Cases:
• Teaching this behavior using the mental model: This decorator pattern ensures a function can only execute once.
• Debugging when the observed value should match the expectation in: • called = [False] is a mutable container • The nested function can modify called[0] without nonlocal • Alternative: use nonlocal called (Python 3+) Common uses: • Initialization functions that should run exactly once • One-time setup or teardown • Ensuring idempotent operations

Edge Cases:
• If inputs vary from the situation described in: Subsequent calls return None because the body is skipped., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • called = [False] uses a list (mutable) to track state • First call: called[0] is False → runs f(*a), sets called[0] = True • Subsequent calls: called[0] is True → if-block skipped → returns None How it works: @once def greet(name): print(f"Hello, {name}") greet("Alice") # prints "Hello, Alice" greet("Bob") # does nothing (returns None) Why a list instead of a boolean? is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: • called = [False] is a mutable container • The nested function can modify called[0] without nonlocal • Alternative: use nonlocal called (Python 3+) Common uses: • Initialization functions that should run exactly once • One-time setup or teardown • Ensuring idempotent operations.
• When performance matters, prefer the simplest pattern that still implements: This decorator pattern ensures a function can only execute once..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This decorator pattern ensures a function can only execute once..

Notes:
• For maintainable code, make the intent behind: Subsequent calls return None because the body is skipped. explicit (and test it with inputs like those in this prompt).`
  }),
  // 92. Memoize decorator caches results
  (_i: number) => ({
    q: `def memoize(f):\n    cache = {}\n    def wrapper(n):\n        if n not in cache:\n            cache[n] = f(n)\n        return cache[n]\n    return wrapper\nWhat does memoize do?`,
    o: ['Caches results to avoid recomputation', 'Limits function to one call', 'Adds type checking', 'Converts to a generator'],
    c: 0,
    e: "memoize stores results in a dict. If the same argument is passed again, it returns the cached result.",
    de: `Memoization is a caching technique that stores function results for previously seen inputs, avoiding redundant computation.

Key concepts:
• cache = {} stores argument → result mappings
• First call with n: computes f(n), stores in cache[n], returns it
• Subsequent calls with same n: returns cache[n] directly (no recomputation)

How it works:
@memoize
def fib(n):
    if n < 2: return n
    return fib(n-1) + fib(n-2)

fib(10)  # Computes once, caches intermediate results
fib(10)  # Returns cached result instantly

Performance impact:
• Without memoization: fib(30) makes ~2.7 million calls
• With memoization: fib(30) makes only 31 calls

Standard library equivalent:
from functools import lru_cache
@lru_cache(maxsize=None)
def fib(n): ...

Key Concepts:
• Key concepts: • cache = {} stores argument → result mappings • First call with n: computes f(n), stores in cache[n], returns it • Subsequent calls with same n: returns cache[n] directly (no recomputation) How it works: @memoize def fib(n): if n < 2: return n return fib(n-1) + fib(n-2) fib(10) # Computes once, caches intermediate results fib(10) # Returns cached result instantly Performance impact: • Without memoization: fib(30) makes ~2.7 million calls • With memoization: fib(30) makes only 31 calls Standard library equivalent: from functools import lru_cache @lru_cache(maxsize=None) def fib(n): ...

Key Distinctions:
• This question’s focus is best captured by: Memoization is a caching technique that stores function results for previously seen inputs, avoiding redundant computation.
• The contrast that matters for correctness is summarized by: Key concepts: • cache = {} stores argument → result mappings • First call with n: computes f(n), stores in cache[n], returns it • Subsequent calls with same n: returns cache[n] directly (no recomputation) How it works: @memoize def fib(n): if n < 2: return n return fib(n-1) + fib(n-2) fib(10) # Computes once, caches intermediate results fib(10) # Returns cached result instantly Performance impact: • Without memoization: fib(30) makes ~2.7 million calls • With memoization: fib(30) makes only 31 calls Standard library equivalent: from functools import lru_cache @lru_cache(maxsize=None) def fib(n): ...

How It Works:
• Python follows the rule implied by: Memoization is a caching technique that stores function results for previously seen inputs, avoiding redundant computation.
• The outcome you observe follows from: Key concepts: • cache = {} stores argument → result mappings • First call with n: computes f(n), stores in cache[n], returns it • Subsequent calls with same n: returns cache[n] directly (no recomputation) How it works: @memoize def fib(n): if n < 2: return n return fib(n-1) + fib(n-2) fib(10) # Computes once, caches intermediate results fib(10) # Returns cached result instantly Performance impact: • Without memoization: fib(30) makes ~2.7 million calls • With memoization: fib(30) makes only 31 calls Standard library equivalent: from functools import lru_cache @lru_cache(maxsize=None) def fib(n): ...

Step-by-Step Execution:
1. Start from the construct described in: Memoization is a caching technique that stores function results for previously seen inputs, avoiding redundant computation.
2. Resolve the subparts implied by: Key concepts: • cache = {} stores argument → result mappings • First call with n: computes f(n), stores in cache[n], returns it • Subsequent calls with same n: returns cache[n] directly (no recomputation) How it works: @memoize def fib(n): if n < 2: return n return fib(n-1) + fib(n-2) fib(10) # Computes once, caches intermediate results fib(10) # Returns cached result instantly Performance impact: • Without memoization: fib(30) makes ~2.7 million calls • With memoization: fib(30) makes only 31 calls Standard library equivalent: from functools import lru_cache @lru_cache(maxsize=None) def fib(n): ...
3. Apply the core semantics highlighted in: Key concepts: • cache = {} stores argument → result mappings • First call with n: computes f(n), stores in cache[n], returns it • Subsequent calls with same n: returns cache[n] directly (no recomputation) How it works: @memoize def fib(n): if n < 2: return n return fib(n-1) + fib(n-2) fib(10) # Computes once, caches intermediate results fib(10) # Returns cached result instantly Performance impact: • Without memoization: fib(30) makes ~2.7 million calls • With memoization: fib(30) makes only 31 calls Standard library equivalent: from functools import lru_cache @lru_cache(maxsize=None) def fib(n): ...
4. Confirm the final result aligns with: Key concepts: • cache = {} stores argument → result mappings • First call with n: computes f(n), stores in cache[n], returns it • Subsequent calls with same n: returns cache[n] directly (no recomputation) How it works: @memoize def fib(n): if n < 2: return n return fib(n-1) + fib(n-2) fib(10) # Computes once, caches intermediate results fib(10) # Returns cached result instantly Performance impact: • Without memoization: fib(30) makes ~2.7 million calls • With memoization: fib(30) makes only 31 calls Standard library equivalent: from functools import lru_cache @lru_cache(maxsize=None) def fib(n): ...

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • cache = {} stores argument → result mappings • First call with n: computes f(n), stores in cache[n], returns it • Subsequent calls with same n: returns cache[n] directly (no recomputation) How it works: @memoize def fib(n): if n < 2: return n return fib(n-1) + fib(n-2) fib(10) # Computes once, caches intermediate results fib(10) # Returns cached result instantly Performance impact: • Without memoization: fib(30) makes ~2.7 million calls • With memoization: fib(30) makes only 31 calls Standard library equivalent: from functools import lru_cache @lru_cache(maxsize=None) def fib(n): ...
2. Apply the construct’s main rule next, matching: Memoization is a caching technique that stores function results for previously seen inputs, avoiding redundant computation.
3. Produce any intermediate values that Key concepts: • cache = {} stores argument → result mappings • First call with n: computes f(n), stores in cache[n], returns it • Subsequent calls with same n: returns cache[n] directly (no recomputation) How it works: @memoize def fib(n): if n < 2: return n return fib(n-1) + fib(n-2) fib(10) # Computes once, caches intermediate results fib(10) # Returns cached result instantly Performance impact: • Without memoization: fib(30) makes ~2.7 million calls • With memoization: fib(30) makes only 31 calls Standard library equivalent: from functools import lru_cache @lru_cache(maxsize=None) def fib(n): ... relies on
4. Finish by returning/assembling the final output named by: Key concepts: • cache = {} stores argument → result mappings • First call with n: computes f(n), stores in cache[n], returns it • Subsequent calls with same n: returns cache[n] directly (no recomputation) How it works: @memoize def fib(n): if n < 2: return n return fib(n-1) + fib(n-2) fib(10) # Computes once, caches intermediate results fib(10) # Returns cached result instantly Performance impact: • Without memoization: fib(30) makes ~2.7 million calls • With memoization: fib(30) makes only 31 calls Standard library equivalent: from functools import lru_cache @lru_cache(maxsize=None) def fib(n): ...
5. Use the result only after the full construct has completed, per: Memoization is a caching technique that stores function results for previously seen inputs, avoiding redundant computation.

Common Use Cases:
• Teaching this behavior using the mental model: Memoization is a caching technique that stores function results for previously seen inputs, avoiding redundant computation.
• Debugging when the observed value should match the expectation in: Key concepts: • cache = {} stores argument → result mappings • First call with n: computes f(n), stores in cache[n], returns it • Subsequent calls with same n: returns cache[n] directly (no recomputation) How it works: @memoize def fib(n): if n < 2: return n return fib(n-1) + fib(n-2) fib(10) # Computes once, caches intermediate results fib(10) # Returns cached result instantly Performance impact: • Without memoization: fib(30) makes ~2.7 million calls • With memoization: fib(30) makes only 31 calls Standard library equivalent: from functools import lru_cache @lru_cache(maxsize=None) def fib(n): ...

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • cache = {} stores argument → result mappings • First call with n: computes f(n), stores in cache[n], returns it • Subsequent calls with same n: returns cache[n] directly (no recomputation) How it works: @memoize def fib(n): if n < 2: return n return fib(n-1) + fib(n-2) fib(10) # Computes once, caches intermediate results fib(10) # Returns cached result instantly Performance impact: • Without memoization: fib(30) makes ~2.7 million calls • With memoization: fib(30) makes only 31 calls Standard library equivalent: from functools import lru_cache @lru_cache(maxsize=None) def fib(n): ..., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • cache = {} stores argument → result mappings • First call with n: computes f(n), stores in cache[n], returns it • Subsequent calls with same n: returns cache[n] directly (no recomputation) How it works: @memoize def fib(n): if n < 2: return n return fib(n-1) + fib(n-2) fib(10) # Computes once, caches intermediate results fib(10) # Returns cached result instantly Performance impact: • Without memoization: fib(30) makes ~2.7 million calls • With memoization: fib(30) makes only 31 calls Standard library equivalent: from functools import lru_cache @lru_cache(maxsize=None) def fib(n): ... is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Key concepts: • cache = {} stores argument → result mappings • First call with n: computes f(n), stores in cache[n], returns it • Subsequent calls with same n: returns cache[n] directly (no recomputation) How it works: @memoize def fib(n): if n < 2: return n return fib(n-1) + fib(n-2) fib(10) # Computes once, caches intermediate results fib(10) # Returns cached result instantly Performance impact: • Without memoization: fib(30) makes ~2.7 million calls • With memoization: fib(30) makes only 31 calls Standard library equivalent: from functools import lru_cache @lru_cache(maxsize=None) def fib(n): ....
• When performance matters, prefer the simplest pattern that still implements: Memoization is a caching technique that stores function results for previously seen inputs, avoiding redundant computation..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Memoization is a caching technique that stores function results for previously seen inputs, avoiding redundant computation..

Notes:
• For maintainable code, make the intent behind: Key concepts: • cache = {} stores argument → result mappings • First call with n: computes f(n), stores in cache[n], returns it • Subsequent calls with same n: returns cache[n] directly (no recomputation) How it works: @memoize def fib(n): if n < 2: return n return fib(n-1) + fib(n-2) fib(10) # Computes once, caches intermediate results fib(10) # Returns cached result instantly Performance impact: • Without memoization: fib(30) makes ~2.7 million calls • With memoization: fib(30) makes only 31 calls Standard library equivalent: from functools import lru_cache @lru_cache(maxsize=None) def fib(n): ... explicit (and test it with inputs like those in this prompt).`
  }),
  // 93. Lambda function __name__ is "<lambda>"
  (_i: number) => ({
    q: `What is (lambda x: x * 2).__name__?`,
    o: ['"<lambda>"', '"lambda"', 'None', 'Error'],
    c: 0,
    e: "Lambda functions have the name '<lambda>' since they are anonymous (not given a name with def).",
    de: `Lambda functions are anonymous — they are not bound to a name via def. Python assigns them the generic name "<lambda>".

Key concepts:
• Lambda functions have __name__ = "<lambda>"
• def-defined functions have their actual name
• This is why lambdas are harder to debug — tracebacks show "<lambda>"

How it works:
1. lambda x: x * 2 creates an anonymous function object
2. Its __name__ attribute is "<lambda>"
3. Contrast: def double(x): return x * 2 → double.__name__ is "double"

Debugging implication:
f = lambda x: x * 2
f.__name__  # "<lambda>" — not "f"!

Even when assigned to a variable, the __name__ stays "<lambda>":
square = lambda x: x ** 2
square.__name__  # "<lambda>"

Key Concepts:
• Even when assigned to a variable, the __name__ stays "<lambda>": square = lambda x: x ** 2 square.__name__ # "<lambda>"

Key Distinctions:
• This question’s focus is best captured by: Lambda functions are anonymous — they are not bound to a name via def.
• The contrast that matters for correctness is summarized by: Python assigns them the generic name "<lambda>".

How It Works:
• Python follows the rule implied by: Lambda functions are anonymous — they are not bound to a name via def.
• The outcome you observe follows from: Even when assigned to a variable, the __name__ stays "<lambda>": square = lambda x: x ** 2 square.__name__ # "<lambda>"

Step-by-Step Execution:
1. Start from the construct described in: Lambda functions are anonymous — they are not bound to a name via def.
2. Resolve the subparts implied by: Python assigns them the generic name "<lambda>".
3. Apply the core semantics highlighted in: Key concepts: • Lambda functions have __name__ = "<lambda>" • def-defined functions have their actual name • This is why lambdas are harder to debug — tracebacks show "<lambda>" How it works: 1.
4. Confirm the final result aligns with: Even when assigned to a variable, the __name__ stays "<lambda>": square = lambda x: x ** 2 square.__name__ # "<lambda>"

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Python assigns them the generic name "<lambda>".
2. Apply the construct’s main rule next, matching: Lambda functions are anonymous — they are not bound to a name via def.
3. Produce any intermediate values that Even when assigned to a variable, the __name__ stays "<lambda>": square = lambda x: x ** 2 square.__name__ # "<lambda>" relies on
4. Finish by returning/assembling the final output named by: Even when assigned to a variable, the __name__ stays "<lambda>": square = lambda x: x ** 2 square.__name__ # "<lambda>"
5. Use the result only after the full construct has completed, per: Lambda functions are anonymous — they are not bound to a name via def.

Common Use Cases:
• Teaching this behavior using the mental model: Lambda functions are anonymous — they are not bound to a name via def.
• Debugging when the observed value should match the expectation in: Even when assigned to a variable, the __name__ stays "<lambda>": square = lambda x: x ** 2 square.__name__ # "<lambda>"

Edge Cases:
• If inputs vary from the situation described in: Python assigns them the generic name "<lambda>"., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • Lambda functions have __name__ = "<lambda>" • def-defined functions have their actual name • This is why lambdas are harder to debug — tracebacks show "<lambda>" How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Even when assigned to a variable, the __name__ stays "<lambda>": square = lambda x: x ** 2 square.__name__ # "<lambda>".
• When performance matters, prefer the simplest pattern that still implements: Lambda functions are anonymous — they are not bound to a name via def..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Lambda functions are anonymous — they are not bound to a name via def..

Notes:
• For maintainable code, make the intent behind: Python assigns them the generic name "<lambda>". explicit (and test it with inputs like those in this prompt).`
  }),
  // 94. Calling a generator function returns a generator object
  (_i: number) => ({
    q: `def f():\n    yield 1\nWhat is type(f())?`,
    o: ["<class 'generator'>", "<class 'function'>", "<class 'int'>", "<class 'NoneType'>"],
    c: 0,
    e: "Calling a generator function returns a generator object, not the yielded value.",
    de: `A function containing yield is a generator function. Calling it does not execute the body — instead, it returns a generator object.

Key concepts:
• def f(): yield 1 — f is a generator function
• f() returns a generator object (body not yet executed)
• type(f()) → <class 'generator'>
• To get values, iterate or use next()

How it works:
1. f() is called — Python sees yield in the body
2. Instead of executing, returns a generator object
3. type(f()) → <class 'generator'>
4. next(f()) would return 1

Key distinction:
• type(f) → <class 'function'> (f itself is a function)
• type(f()) → <class 'generator'> (calling f returns a generator)

Key Concepts:
• next(f()) would return 1 Key distinction: • type(f) → <class 'function'> (f itself is a function) • type(f()) → <class 'generator'> (calling f returns a generator)

Key Distinctions:
• This question’s focus is best captured by: A function containing yield is a generator function.
• The contrast that matters for correctness is summarized by: Calling it does not execute the body — instead, it returns a generator object.

How It Works:
• Python follows the rule implied by: A function containing yield is a generator function.
• The outcome you observe follows from: next(f()) would return 1 Key distinction: • type(f) → <class 'function'> (f itself is a function) • type(f()) → <class 'generator'> (calling f returns a generator)

Step-by-Step Execution:
1. Start from the construct described in: A function containing yield is a generator function.
2. Resolve the subparts implied by: Calling it does not execute the body — instead, it returns a generator object.
3. Apply the core semantics highlighted in: Key concepts: • def f(): yield 1 — f is a generator function • f() returns a generator object (body not yet executed) • type(f()) → <class 'generator'> • To get values, iterate or use next() How it works: 1.
4. Confirm the final result aligns with: next(f()) would return 1 Key distinction: • type(f) → <class 'function'> (f itself is a function) • type(f()) → <class 'generator'> (calling f returns a generator)

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Calling it does not execute the body — instead, it returns a generator object.
2. Apply the construct’s main rule next, matching: A function containing yield is a generator function.
3. Produce any intermediate values that next(f()) would return 1 Key distinction: • type(f) → <class 'function'> (f itself is a function) • type(f()) → <class 'generator'> (calling f returns a generator) relies on
4. Finish by returning/assembling the final output named by: next(f()) would return 1 Key distinction: • type(f) → <class 'function'> (f itself is a function) • type(f()) → <class 'generator'> (calling f returns a generator)
5. Use the result only after the full construct has completed, per: A function containing yield is a generator function.

Common Use Cases:
• Teaching this behavior using the mental model: A function containing yield is a generator function.
• Debugging when the observed value should match the expectation in: next(f()) would return 1 Key distinction: • type(f) → <class 'function'> (f itself is a function) • type(f()) → <class 'generator'> (calling f returns a generator)

Edge Cases:
• If inputs vary from the situation described in: Calling it does not execute the body — instead, it returns a generator object., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • def f(): yield 1 — f is a generator function • f() returns a generator object (body not yet executed) • type(f()) → <class 'generator'> • To get values, iterate or use next() How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: next(f()) would return 1 Key distinction: • type(f) → <class 'function'> (f itself is a function) • type(f()) → <class 'generator'> (calling f returns a generator).
• When performance matters, prefer the simplest pattern that still implements: A function containing yield is a generator function..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: A function containing yield is a generator function..

Notes:
• For maintainable code, make the intent behind: Calling it does not execute the body — instead, it returns a generator object. explicit (and test it with inputs like those in this prompt).`
  }),
  // 95. The generator function itself is still type 'function'
  (_i: number) => ({
    q: `def f():\n    yield 1\nWhat is type(f)?`,
    o: ["<class 'function'>", "<class 'generator'>", "<class 'method'>", "<class 'builtin_function_or_method'>"],
    c: 0,
    e: "f itself is a function. Only calling f() produces a generator object.",
    de: `The generator function itself is of type 'function'. It is only when you call it that a generator object is created.

Key concepts:
• type(f) → <class 'function'> — f is a function
• type(f()) → <class 'generator'> — f() is a generator
• The function and its return value have different types

How it works:
1. def f(): yield 1 — defines f as a function
2. type(f) → <class 'function'>
3. f() → creates and returns a generator object
4. type(f()) → <class 'generator'>

Checking if a function is a generator function:
import inspect
inspect.isgeneratorfunction(f)  # True
inspect.isgenerator(f())         # True

Key Concepts:
• type(f()) → <class 'generator'> Checking if a function is a generator function: import inspect inspect.isgeneratorfunction(f) # True inspect.isgenerator(f()) # True

Key Distinctions:
• This question’s focus is best captured by: The generator function itself is of type 'function'.
• The contrast that matters for correctness is summarized by: It is only when you call it that a generator object is created.

How It Works:
• Python follows the rule implied by: The generator function itself is of type 'function'.
• The outcome you observe follows from: type(f()) → <class 'generator'> Checking if a function is a generator function: import inspect inspect.isgeneratorfunction(f) # True inspect.isgenerator(f()) # True

Step-by-Step Execution:
1. Start from the construct described in: The generator function itself is of type 'function'.
2. Resolve the subparts implied by: It is only when you call it that a generator object is created.
3. Apply the core semantics highlighted in: Key concepts: • type(f) → <class 'function'> — f is a function • type(f()) → <class 'generator'> — f() is a generator • The function and its return value have different types How it works: 1.
4. Confirm the final result aligns with: type(f()) → <class 'generator'> Checking if a function is a generator function: import inspect inspect.isgeneratorfunction(f) # True inspect.isgenerator(f()) # True

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: It is only when you call it that a generator object is created.
2. Apply the construct’s main rule next, matching: The generator function itself is of type 'function'.
3. Produce any intermediate values that type(f()) → <class 'generator'> Checking if a function is a generator function: import inspect inspect.isgeneratorfunction(f) # True inspect.isgenerator(f()) # True relies on
4. Finish by returning/assembling the final output named by: type(f()) → <class 'generator'> Checking if a function is a generator function: import inspect inspect.isgeneratorfunction(f) # True inspect.isgenerator(f()) # True
5. Use the result only after the full construct has completed, per: The generator function itself is of type 'function'.

Common Use Cases:
• Teaching this behavior using the mental model: The generator function itself is of type 'function'.
• Debugging when the observed value should match the expectation in: type(f()) → <class 'generator'> Checking if a function is a generator function: import inspect inspect.isgeneratorfunction(f) # True inspect.isgenerator(f()) # True

Edge Cases:
• If inputs vary from the situation described in: It is only when you call it that a generator object is created., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • type(f) → <class 'function'> — f is a function • type(f()) → <class 'generator'> — f() is a generator • The function and its return value have different types How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: type(f()) → <class 'generator'> Checking if a function is a generator function: import inspect inspect.isgeneratorfunction(f) # True inspect.isgenerator(f()) # True.
• When performance matters, prefer the simplest pattern that still implements: The generator function itself is of type 'function'..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The generator function itself is of type 'function'..

Notes:
• For maintainable code, make the intent behind: It is only when you call it that a generator object is created. explicit (and test it with inputs like those in this prompt).`
  }),
  // 96. Keyword-only parameters after bare *
  (_i: number) => ({
    q: `def f(*, x, y):\n    return x + y\nWhat is f(x=1, y=2)?`,
    o: ['3', 'Error', '(1, 2)', 'None'],
    c: 0,
    e: "After bare *, all parameters are keyword-only. f(x=1, y=2) works and returns 3.",
    de: `A bare * in the parameter list means all following parameters must be passed as keyword arguments. Positional arguments are not allowed for them.

Key concepts:
• def f(*, x, y): — x and y are keyword-only
• f(x=1, y=2) works → 1 + 2 = 3
• f(1, 2) would raise TypeError

How it works:
1. * separates positional parameters (none here) from keyword-only ones
2. x and y must be specified by name
3. f(x=1, y=2) → x=1, y=2 → 1 + 2 → 3

Why keyword-only parameters?
• Improve readability at the call site
• Prevent accidental positional argument ordering bugs
• Common in APIs: def connect(*, host, port, timeout=30)

Key Concepts:
• • Improve readability at the call site • Prevent accidental positional argument ordering bugs • Common in APIs: def connect(*, host, port, timeout=30)

Key Distinctions:
• This question’s focus is best captured by: A bare * in the parameter list means all following parameters must be passed as keyword arguments.
• The contrast that matters for correctness is summarized by: Positional arguments are not allowed for them.

How It Works:
• Python follows the rule implied by: A bare * in the parameter list means all following parameters must be passed as keyword arguments.
• The outcome you observe follows from: • Improve readability at the call site • Prevent accidental positional argument ordering bugs • Common in APIs: def connect(*, host, port, timeout=30)

Step-by-Step Execution:
1. Start from the construct described in: A bare * in the parameter list means all following parameters must be passed as keyword arguments.
2. Resolve the subparts implied by: Positional arguments are not allowed for them.
3. Apply the core semantics highlighted in: Key concepts: • def f(*, x, y): — x and y are keyword-only • f(x=1, y=2) works → 1 + 2 = 3 • f(1, 2) would raise TypeError How it works: 1.
4. Confirm the final result aligns with: • Improve readability at the call site • Prevent accidental positional argument ordering bugs • Common in APIs: def connect(*, host, port, timeout=30)

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Positional arguments are not allowed for them.
2. Apply the construct’s main rule next, matching: A bare * in the parameter list means all following parameters must be passed as keyword arguments.
3. Produce any intermediate values that • Improve readability at the call site • Prevent accidental positional argument ordering bugs • Common in APIs: def connect(*, host, port, timeout=30) relies on
4. Finish by returning/assembling the final output named by: • Improve readability at the call site • Prevent accidental positional argument ordering bugs • Common in APIs: def connect(*, host, port, timeout=30)
5. Use the result only after the full construct has completed, per: A bare * in the parameter list means all following parameters must be passed as keyword arguments.

Common Use Cases:
• Teaching this behavior using the mental model: A bare * in the parameter list means all following parameters must be passed as keyword arguments.
• Debugging when the observed value should match the expectation in: • Improve readability at the call site • Prevent accidental positional argument ordering bugs • Common in APIs: def connect(*, host, port, timeout=30)

Edge Cases:
• If inputs vary from the situation described in: Positional arguments are not allowed for them., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • def f(*, x, y): — x and y are keyword-only • f(x=1, y=2) works → 1 + 2 = 3 • f(1, 2) would raise TypeError How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: • Improve readability at the call site • Prevent accidental positional argument ordering bugs • Common in APIs: def connect(*, host, port, timeout=30).
• When performance matters, prefer the simplest pattern that still implements: A bare * in the parameter list means all following parameters must be passed as keyword arguments..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: A bare * in the parameter list means all following parameters must be passed as keyword arguments..

Notes:
• For maintainable code, make the intent behind: Positional arguments are not allowed for them. explicit (and test it with inputs like those in this prompt).`
  }),
  // 97. Passing positional args to keyword-only params raises TypeError
  (_i: number) => ({
    q: `def f(*, x, y):\n    return x + y\nWhat happens with f(1, 2)?`,
    o: ['TypeError', '3', '(1, 2)', 'None'],
    c: 0,
    e: "x and y are keyword-only (after *). Passing positional arguments raises TypeError.",
    de: `When parameters are defined after a bare *, they cannot accept positional arguments. Python raises TypeError if you try.

Key concepts:
• def f(*, x, y): — x and y are keyword-only
• f(1, 2) tries to pass 1 and 2 positionally → TypeError
• Error message: "f() takes 0 positional arguments but 2 were given"

How it works:
1. * consumes all positional arguments (there is no *args name, so zero positional args allowed)
2. f(1, 2) provides 2 positional arguments
3. TypeError: f() takes 0 positional arguments but 2 were given

Correct usage:
f(x=1, y=2)  # 3 — must use keyword arguments

Mixed example:
def f(a, b, *, x, y):
    ...
f(1, 2, x=3, y=4)  # OK — a,b positional, x,y keyword-only

Key Concepts:
• f(1, 2, x=3, y=4) # OK — a,b positional, x,y keyword-only

Key Distinctions:
• This question’s focus is best captured by: When parameters are defined after a bare *, they cannot accept positional arguments.
• The contrast that matters for correctness is summarized by: Python raises TypeError if you try.

How It Works:
• Python follows the rule implied by: When parameters are defined after a bare *, they cannot accept positional arguments.
• The outcome you observe follows from: f(1, 2, x=3, y=4) # OK — a,b positional, x,y keyword-only

Step-by-Step Execution:
1. Start from the construct described in: When parameters are defined after a bare *, they cannot accept positional arguments.
2. Resolve the subparts implied by: Python raises TypeError if you try.
3. Apply the core semantics highlighted in: Key concepts: • def f(*, x, y): — x and y are keyword-only • f(1, 2) tries to pass 1 and 2 positionally → TypeError • Error message: "f() takes 0 positional arguments but 2 were given" How it works: 1.
4. Confirm the final result aligns with: f(1, 2, x=3, y=4) # OK — a,b positional, x,y keyword-only

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Python raises TypeError if you try.
2. Apply the construct’s main rule next, matching: When parameters are defined after a bare *, they cannot accept positional arguments.
3. Produce any intermediate values that f(1, 2, x=3, y=4) # OK — a,b positional, x,y keyword-only relies on
4. Finish by returning/assembling the final output named by: f(1, 2, x=3, y=4) # OK — a,b positional, x,y keyword-only
5. Use the result only after the full construct has completed, per: When parameters are defined after a bare *, they cannot accept positional arguments.

Common Use Cases:
• Teaching this behavior using the mental model: When parameters are defined after a bare *, they cannot accept positional arguments.
• Debugging when the observed value should match the expectation in: f(1, 2, x=3, y=4) # OK — a,b positional, x,y keyword-only

Edge Cases:
• If inputs vary from the situation described in: Python raises TypeError if you try., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • def f(*, x, y): — x and y are keyword-only • f(1, 2) tries to pass 1 and 2 positionally → TypeError • Error message: "f() takes 0 positional arguments but 2 were given" How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: f(1, 2, x=3, y=4) # OK — a,b positional, x,y keyword-only.
• When performance matters, prefer the simplest pattern that still implements: When parameters are defined after a bare *, they cannot accept positional arguments..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: When parameters are defined after a bare *, they cannot accept positional arguments..

Notes:
• For maintainable code, make the intent behind: Python raises TypeError if you try. explicit (and test it with inputs like those in this prompt).`
  }),
  // 98. Positional-only + regular + keyword-only parameters
  (_i: number) => ({
    q: `def f(a, b, /, c, *, d):\n    return a + b + c + d\nWhat is f(1, 2, 3, d=4)?`,
    o: ['10', 'Error', '(1, 2, 3, 4)', 'None'],
    c: 0,
    e: "a,b are positional-only (/), c is regular, d is keyword-only (*). f(1,2,3,d=4) = 1+2+3+4 = 10.",
    de: `Python 3.8+ supports positional-only parameters (before /) and keyword-only parameters (after *) in the same function.

Key concepts:
• a, b: positional-only (before /) — must be passed positionally
• c: regular parameter — can be positional or keyword
• d: keyword-only (after *) — must be passed as keyword argument

How it works:
1. f(1, 2, 3, d=4)
2. a=1 (positional-only) ✓
3. b=2 (positional-only) ✓
4. c=3 (regular, passed positionally) ✓
5. d=4 (keyword-only, passed as keyword) ✓
6. 1 + 2 + 3 + 4 = 10

Parameter order in Python:
def f(positional_only, /, regular, *, keyword_only): ...

Key Concepts:
• 1 + 2 + 3 + 4 = 10 Parameter order in Python: def f(positional_only, /, regular, *, keyword_only): ...

Key Distinctions:
• This question’s focus is best captured by: Python 3.8+ supports positional-only parameters (before /) and keyword-only parameters (after *) in the same function.
• The contrast that matters for correctness is summarized by: Key concepts: • a, b: positional-only (before /) — must be passed positionally • c: regular parameter — can be positional or keyword • d: keyword-only (after *) — must be passed as keyword argument How it works: 1.

How It Works:
• Python follows the rule implied by: Python 3.8+ supports positional-only parameters (before /) and keyword-only parameters (after *) in the same function.
• The outcome you observe follows from: 1 + 2 + 3 + 4 = 10 Parameter order in Python: def f(positional_only, /, regular, *, keyword_only): ...

Step-by-Step Execution:
1. Start from the construct described in: Python 3.8+ supports positional-only parameters (before /) and keyword-only parameters (after *) in the same function.
2. Resolve the subparts implied by: Key concepts: • a, b: positional-only (before /) — must be passed positionally • c: regular parameter — can be positional or keyword • d: keyword-only (after *) — must be passed as keyword argument How it works: 1.
3. Apply the core semantics highlighted in: f(1, 2, 3, d=4) 2.
4. Confirm the final result aligns with: 1 + 2 + 3 + 4 = 10 Parameter order in Python: def f(positional_only, /, regular, *, keyword_only): ...

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • a, b: positional-only (before /) — must be passed positionally • c: regular parameter — can be positional or keyword • d: keyword-only (after *) — must be passed as keyword argument How it works: 1.
2. Apply the construct’s main rule next, matching: Python 3.8+ supports positional-only parameters (before /) and keyword-only parameters (after *) in the same function.
3. Produce any intermediate values that 1 + 2 + 3 + 4 = 10 Parameter order in Python: def f(positional_only, /, regular, *, keyword_only): ... relies on
4. Finish by returning/assembling the final output named by: 1 + 2 + 3 + 4 = 10 Parameter order in Python: def f(positional_only, /, regular, *, keyword_only): ...
5. Use the result only after the full construct has completed, per: Python 3.8+ supports positional-only parameters (before /) and keyword-only parameters (after *) in the same function.

Common Use Cases:
• Teaching this behavior using the mental model: Python 3.8+ supports positional-only parameters (before /) and keyword-only parameters (after *) in the same function.
• Debugging when the observed value should match the expectation in: 1 + 2 + 3 + 4 = 10 Parameter order in Python: def f(positional_only, /, regular, *, keyword_only): ...

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • a, b: positional-only (before /) — must be passed positionally • c: regular parameter — can be positional or keyword • d: keyword-only (after *) — must be passed as keyword argument How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: f(1, 2, 3, d=4) 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: 1 + 2 + 3 + 4 = 10 Parameter order in Python: def f(positional_only, /, regular, *, keyword_only): ....
• When performance matters, prefer the simplest pattern that still implements: Python 3.8+ supports positional-only parameters (before /) and keyword-only parameters (after *) in the same function..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Python 3.8+ supports positional-only parameters (before /) and keyword-only parameters (after *) in the same function..

Notes:
• For maintainable code, make the intent behind: Key concepts: • a, b: positional-only (before /) — must be passed positionally • c: regular parameter — can be positional or keyword • d: keyword-only (after *) — must be passed as keyword argument How it works: 1. explicit (and test it with inputs like those in this prompt).`
  }),
  // 99. Regular parameter can be passed as keyword
  (_i: number) => ({
    q: `def f(a, b, /, c, *, d):\n    return a + b + c + d\nWhat is f(1, 2, c=3, d=4)?`,
    o: ['10', 'Error', '(1, 2, 3, 4)', 'None'],
    c: 0,
    e: "c is a regular parameter and can be passed as a keyword argument. Result: 1+2+3+4 = 10.",
    de: `Parameters between / and * are regular parameters — they can be passed either positionally or as keyword arguments.

Key concepts:
• a, b (before /) are positional-only → must be positional
• c (between / and *) is regular → can be positional OR keyword
• d (after *) is keyword-only → must be keyword

How it works:
1. f(1, 2, c=3, d=4)
2. a=1 (positional) ✓
3. b=2 (positional) ✓
4. c=3 (keyword — allowed for regular param) ✓
5. d=4 (keyword) ✓
6. 1 + 2 + 3 + 4 = 10

Both calls are valid:
f(1, 2, 3, d=4)     # c passed positionally
f(1, 2, c=3, d=4)   # c passed as keyword

Key Concepts:
• 1 + 2 + 3 + 4 = 10 Both calls are valid: f(1, 2, 3, d=4) # c passed positionally f(1, 2, c=3, d=4) # c passed as keyword

Key Distinctions:
• This question’s focus is best captured by: Parameters between / and * are regular parameters — they can be passed either positionally or as keyword arguments.
• The contrast that matters for correctness is summarized by: Key concepts: • a, b (before /) are positional-only → must be positional • c (between / and *) is regular → can be positional OR keyword • d (after *) is keyword-only → must be keyword How it works: 1.

How It Works:
• Python follows the rule implied by: Parameters between / and * are regular parameters — they can be passed either positionally or as keyword arguments.
• The outcome you observe follows from: 1 + 2 + 3 + 4 = 10 Both calls are valid: f(1, 2, 3, d=4) # c passed positionally f(1, 2, c=3, d=4) # c passed as keyword

Step-by-Step Execution:
1. Start from the construct described in: Parameters between / and * are regular parameters — they can be passed either positionally or as keyword arguments.
2. Resolve the subparts implied by: Key concepts: • a, b (before /) are positional-only → must be positional • c (between / and *) is regular → can be positional OR keyword • d (after *) is keyword-only → must be keyword How it works: 1.
3. Apply the core semantics highlighted in: f(1, 2, c=3, d=4) 2.
4. Confirm the final result aligns with: 1 + 2 + 3 + 4 = 10 Both calls are valid: f(1, 2, 3, d=4) # c passed positionally f(1, 2, c=3, d=4) # c passed as keyword

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • a, b (before /) are positional-only → must be positional • c (between / and *) is regular → can be positional OR keyword • d (after *) is keyword-only → must be keyword How it works: 1.
2. Apply the construct’s main rule next, matching: Parameters between / and * are regular parameters — they can be passed either positionally or as keyword arguments.
3. Produce any intermediate values that 1 + 2 + 3 + 4 = 10 Both calls are valid: f(1, 2, 3, d=4) # c passed positionally f(1, 2, c=3, d=4) # c passed as keyword relies on
4. Finish by returning/assembling the final output named by: 1 + 2 + 3 + 4 = 10 Both calls are valid: f(1, 2, 3, d=4) # c passed positionally f(1, 2, c=3, d=4) # c passed as keyword
5. Use the result only after the full construct has completed, per: Parameters between / and * are regular parameters — they can be passed either positionally or as keyword arguments.

Common Use Cases:
• Teaching this behavior using the mental model: Parameters between / and * are regular parameters — they can be passed either positionally or as keyword arguments.
• Debugging when the observed value should match the expectation in: 1 + 2 + 3 + 4 = 10 Both calls are valid: f(1, 2, 3, d=4) # c passed positionally f(1, 2, c=3, d=4) # c passed as keyword

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • a, b (before /) are positional-only → must be positional • c (between / and *) is regular → can be positional OR keyword • d (after *) is keyword-only → must be keyword How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: f(1, 2, c=3, d=4) 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: 1 + 2 + 3 + 4 = 10 Both calls are valid: f(1, 2, 3, d=4) # c passed positionally f(1, 2, c=3, d=4) # c passed as keyword.
• When performance matters, prefer the simplest pattern that still implements: Parameters between / and * are regular parameters — they can be passed either positionally or as keyword arguments..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Parameters between / and * are regular parameters — they can be passed either positionally or as keyword arguments..

Notes:
• For maintainable code, make the intent behind: Key concepts: • a, b (before /) are positional-only → must be positional • c (between / and *) is regular → can be positional OR keyword • d (after *) is keyword-only → must be keyword How it works: 1. explicit (and test it with inputs like those in this prompt).`
  }),
  // 100. Positional-only parameters cannot be passed as keywords
  (_i: number) => ({
    q: `def f(a, b, /, c, *, d):\n    return a + b + c + d\nWhat happens with f(a=1, b=2, c=3, d=4)?`,
    o: ['TypeError', '10', '(1, 2, 3, 4)', 'None'],
    c: 0,
    e: "a and b are positional-only (before /). Passing them as keyword arguments raises TypeError.",
    de: `Parameters before / are positional-only. They cannot be passed using their names as keyword arguments.

Key concepts:
• a and b are before / → positional-only
• f(a=1, b=2, ...) uses keyword syntax for positional-only params → TypeError
• Error: "f() got some positional-only arguments passed as keyword arguments: 'a', 'b'"

How it works:
1. f(a=1, b=2, c=3, d=4) tries to pass a and b as keyword arguments
2. Python sees a and b are positional-only (before /)
3. Raises TypeError

Correct usage:
f(1, 2, 3, d=4)     # all positional-only params passed positionally ✓
f(1, 2, c=3, d=4)   # also valid ✓

Why positional-only?
• Allows renaming parameters without breaking callers
• Prevents keyword argument conflicts with **kwargs
• Used in many built-in functions: len(obj) not len(obj=x)

Key Concepts:
• • Allows renaming parameters without breaking callers • Prevents keyword argument conflicts with **kwargs • Used in many built-in functions: len(obj) not len(obj=x)

Key Distinctions:
• This question’s focus is best captured by: Parameters before / are positional-only.
• The contrast that matters for correctness is summarized by: They cannot be passed using their names as keyword arguments.

How It Works:
• Python follows the rule implied by: Parameters before / are positional-only.
• The outcome you observe follows from: • Allows renaming parameters without breaking callers • Prevents keyword argument conflicts with **kwargs • Used in many built-in functions: len(obj) not len(obj=x)

Step-by-Step Execution:
1. Start from the construct described in: Parameters before / are positional-only.
2. Resolve the subparts implied by: They cannot be passed using their names as keyword arguments.
3. Apply the core semantics highlighted in: Key concepts: • a and b are before / → positional-only • f(a=1, b=2, ...) uses keyword syntax for positional-only params → TypeError • Error: "f() got some positional-only arguments passed as keyword arguments: 'a', 'b'" How it works: 1.
4. Confirm the final result aligns with: • Allows renaming parameters without breaking callers • Prevents keyword argument conflicts with **kwargs • Used in many built-in functions: len(obj) not len(obj=x)

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: They cannot be passed using their names as keyword arguments.
2. Apply the construct’s main rule next, matching: Parameters before / are positional-only.
3. Produce any intermediate values that • Allows renaming parameters without breaking callers • Prevents keyword argument conflicts with **kwargs • Used in many built-in functions: len(obj) not len(obj=x) relies on
4. Finish by returning/assembling the final output named by: • Allows renaming parameters without breaking callers • Prevents keyword argument conflicts with **kwargs • Used in many built-in functions: len(obj) not len(obj=x)
5. Use the result only after the full construct has completed, per: Parameters before / are positional-only.

Common Use Cases:
• Teaching this behavior using the mental model: Parameters before / are positional-only.
• Debugging when the observed value should match the expectation in: • Allows renaming parameters without breaking callers • Prevents keyword argument conflicts with **kwargs • Used in many built-in functions: len(obj) not len(obj=x)

Edge Cases:
• If inputs vary from the situation described in: They cannot be passed using their names as keyword arguments., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • a and b are before / → positional-only • f(a=1, b=2, ...) uses keyword syntax for positional-only params → TypeError • Error: "f() got some positional-only arguments passed as keyword arguments: 'a', 'b'" How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: • Allows renaming parameters without breaking callers • Prevents keyword argument conflicts with **kwargs • Used in many built-in functions: len(obj) not len(obj=x).
• When performance matters, prefer the simplest pattern that still implements: Parameters before / are positional-only..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Parameters before / are positional-only..

Notes:
• For maintainable code, make the intent behind: They cannot be passed using their names as keyword arguments. explicit (and test it with inputs like those in this prompt).`
  }),
];
