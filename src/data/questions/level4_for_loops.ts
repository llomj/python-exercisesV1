// --- LEVEL 4 INTERMEDIATE: FOR-LOOP MASTERY - 100 TRULY UNIQUE QUESTIONS ---
// Covers: nested loops, for-else, loop variables, dict iteration, unpacking,
// string processing, algorithms, accumulation, search, functional patterns

export const level4ForLoopPatterns = [
  // Q1: Nested for loops - output prediction
  (_i: number) => ({
    q: `What does this produce?\nresult = []\nfor i in range(2):\n    for j in range(3):\n        result.append(i + j)\nresult`,
    o: ["[0, 1, 2, 1, 2, 3]", "[0, 1, 2, 3, 4, 5]", "[0, 1, 1, 2, 2, 3]", "[1, 2, 3, 2, 3, 4]"],
    c: 0,
    e: "Nested loops iterate over all combinations: i=0 adds 0+0,0+1,0+2; i=1 adds 1+0,1+1,1+2.",
    de: `In nested for loops, the inner loop completes fully for each iteration of the outer loop. Here i takes 0 then 1, and for each i, j takes 0, 1, 2. So the pairs (i,j) are: (0,0),(0,1),(0,2),(1,0),(1,1),(1,2), producing sums [0,1,2,1,2,3]. Nested loops produce the Cartesian product of their ranges.

Key Concepts:
• Nested loops produce the Cartesian product of their ranges.

Key Distinctions:
• This question’s focus is best captured by: In nested for loops, the inner loop completes fully for each iteration of the outer loop.
• The contrast that matters for correctness is summarized by: Here i takes 0 then 1, and for each i, j takes 0, 1, 2.

How It Works:
• Python follows the rule implied by: In nested for loops, the inner loop completes fully for each iteration of the outer loop.
• The outcome you observe follows from: Nested loops produce the Cartesian product of their ranges.

Step-by-Step Execution:
1. Start from the construct described in: In nested for loops, the inner loop completes fully for each iteration of the outer loop.
2. Resolve the subparts implied by: Here i takes 0 then 1, and for each i, j takes 0, 1, 2.
3. Apply the core semantics highlighted in: So the pairs (i,j) are: (0,0),(0,1),(0,2),(1,0),(1,1),(1,2), producing sums [0,1,2,1,2,3].
4. Confirm the final result aligns with: Nested loops produce the Cartesian product of their ranges.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Here i takes 0 then 1, and for each i, j takes 0, 1, 2.
2. Apply the construct’s main rule next, matching: In nested for loops, the inner loop completes fully for each iteration of the outer loop.
3. Produce any intermediate values that Nested loops produce the Cartesian product of their ranges. relies on
4. Finish by returning/assembling the final output named by: Nested loops produce the Cartesian product of their ranges.
5. Use the result only after the full construct has completed, per: In nested for loops, the inner loop completes fully for each iteration of the outer loop.

Common Use Cases:
• Teaching this behavior using the mental model: In nested for loops, the inner loop completes fully for each iteration of the outer loop.
• Debugging when the observed value should match the expectation in: Nested loops produce the Cartesian product of their ranges.

Edge Cases:
• If inputs vary from the situation described in: Here i takes 0 then 1, and for each i, j takes 0, 1, 2., the behavior can change.
• When the construct’s assumptions differ, the rule in: So the pairs (i,j) are: (0,0),(0,1),(0,2),(1,0),(1,1),(1,2), producing sums [0,1,2,1,2,3]. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Nested loops produce the Cartesian product of their ranges..
• When performance matters, prefer the simplest pattern that still implements: In nested for loops, the inner loop completes fully for each iteration of the outer loop..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: In nested for loops, the inner loop completes fully for each iteration of the outer loop..

Notes:
• For maintainable code, make the intent behind: Here i takes 0 then 1, and for each i, j takes 0, 1, 2. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q2: Nested for loops - counting iterations
  (_i: number) => ({
    q: `How many times does the inner print execute?\nfor i in range(4):\n    for j in range(3):\n        print(i, j)`,
    o: ["12", "7", "4", "3"],
    c: 0,
    e: "Total iterations = outer × inner = 4 × 3 = 12.",
    de: `The total number of iterations in nested loops is the product of the individual loop counts. The outer loop runs 4 times, and for each outer iteration, the inner loop runs 3 times. Total = 4 × 3 = 12. This multiplicative relationship is important for understanding time complexity — two nested loops over n elements give O(n²).

Key Concepts:
• This multiplicative relationship is important for understanding time complexity — two nested loops over n elements give O(n²).

Key Distinctions:
• This question’s focus is best captured by: The total number of iterations in nested loops is the product of the individual loop counts.
• The contrast that matters for correctness is summarized by: The outer loop runs 4 times, and for each outer iteration, the inner loop runs 3 times.

How It Works:
• Python follows the rule implied by: The total number of iterations in nested loops is the product of the individual loop counts.
• The outcome you observe follows from: This multiplicative relationship is important for understanding time complexity — two nested loops over n elements give O(n²).

Step-by-Step Execution:
1. Start from the construct described in: The total number of iterations in nested loops is the product of the individual loop counts.
2. Resolve the subparts implied by: The outer loop runs 4 times, and for each outer iteration, the inner loop runs 3 times.
3. Apply the core semantics highlighted in: Total = 4 × 3 = 12.
4. Confirm the final result aligns with: This multiplicative relationship is important for understanding time complexity — two nested loops over n elements give O(n²).

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The outer loop runs 4 times, and for each outer iteration, the inner loop runs 3 times.
2. Apply the construct’s main rule next, matching: The total number of iterations in nested loops is the product of the individual loop counts.
3. Produce any intermediate values that This multiplicative relationship is important for understanding time complexity — two nested loops over n elements give O(n²). relies on
4. Finish by returning/assembling the final output named by: This multiplicative relationship is important for understanding time complexity — two nested loops over n elements give O(n²).
5. Use the result only after the full construct has completed, per: The total number of iterations in nested loops is the product of the individual loop counts.

Common Use Cases:
• Teaching this behavior using the mental model: The total number of iterations in nested loops is the product of the individual loop counts.
• Debugging when the observed value should match the expectation in: This multiplicative relationship is important for understanding time complexity — two nested loops over n elements give O(n²).

Edge Cases:
• If inputs vary from the situation described in: The outer loop runs 4 times, and for each outer iteration, the inner loop runs 3 times., the behavior can change.
• When the construct’s assumptions differ, the rule in: Total = 4 × 3 = 12. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This multiplicative relationship is important for understanding time complexity — two nested loops over n elements give O(n²)..
• When performance matters, prefer the simplest pattern that still implements: The total number of iterations in nested loops is the product of the individual loop counts..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The total number of iterations in nested loops is the product of the individual loop counts..

Notes:
• For maintainable code, make the intent behind: The outer loop runs 4 times, and for each outer iteration, the inner loop runs 3 times. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q3: Nested for loops - building 2D structures
  (_i: number) => ({
    q: `What is [[i * j for j in range(1, 4)] for i in range(1, 3)]?`,
    o: ["[[1, 2, 3], [2, 4, 6]]", "[[0, 0, 0], [0, 1, 2]]", "[[1, 2, 3], [4, 5, 6]]", "Error"],
    c: 0,
    e: "Outer comp builds rows: i=1→[1,2,3], i=2→[2,4,6].",
    de: `This nested list comprehension builds a 2D list. The outer comprehension iterates i over 1,2. For each i, the inner comprehension computes i*j for j in 1,2,3. Row 1: [1*1, 1*2, 1*3] = [1,2,3], row 2: [2*1, 2*2, 2*3] = [2,4,6]. Nested comprehensions read left-to-right as nested loops.

Key Concepts:
• Nested comprehensions read left-to-right as nested loops.

Key Distinctions:
• This question’s focus is best captured by: This nested list comprehension builds a 2D list.
• The contrast that matters for correctness is summarized by: The outer comprehension iterates i over 1,2.

How It Works:
• Python follows the rule implied by: This nested list comprehension builds a 2D list.
• The outcome you observe follows from: Nested comprehensions read left-to-right as nested loops.

Step-by-Step Execution:
1. Start from the construct described in: This nested list comprehension builds a 2D list.
2. Resolve the subparts implied by: The outer comprehension iterates i over 1,2.
3. Apply the core semantics highlighted in: For each i, the inner comprehension computes i*j for j in 1,2,3.
4. Confirm the final result aligns with: Nested comprehensions read left-to-right as nested loops.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The outer comprehension iterates i over 1,2.
2. Apply the construct’s main rule next, matching: This nested list comprehension builds a 2D list.
3. Produce any intermediate values that Nested comprehensions read left-to-right as nested loops. relies on
4. Finish by returning/assembling the final output named by: Nested comprehensions read left-to-right as nested loops.
5. Use the result only after the full construct has completed, per: This nested list comprehension builds a 2D list.

Common Use Cases:
• Teaching this behavior using the mental model: This nested list comprehension builds a 2D list.
• Debugging when the observed value should match the expectation in: Nested comprehensions read left-to-right as nested loops.

Edge Cases:
• If inputs vary from the situation described in: The outer comprehension iterates i over 1,2., the behavior can change.
• When the construct’s assumptions differ, the rule in: For each i, the inner comprehension computes i*j for j in 1,2,3. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Nested comprehensions read left-to-right as nested loops..
• When performance matters, prefer the simplest pattern that still implements: This nested list comprehension builds a 2D list..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This nested list comprehension builds a 2D list..

Notes:
• For maintainable code, make the intent behind: The outer comprehension iterates i over 1,2. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q4: For-else clause - normal completion
  (_i: number) => ({
    q: `What does this print?\nfor i in range(3):\n    pass\nelse:\n    print("done")`,
    o: ['"done"', "Nothing", "Error", "None"],
    c: 0,
    e: "The else clause executes when the loop completes without hitting break.",
    de: `Python's for-else is unique: the else block runs when the loop finishes normally without encountering a break. Here the loop completes normally (pass does nothing), so "done" is printed. Think of else as "else no break occurred."

Key Concepts:
• Think of else as "else no break occurred."

Key Distinctions:
• This question’s focus is best captured by: Python's for-else is unique: the else block runs when the loop finishes normally without encountering a break.
• The contrast that matters for correctness is summarized by: Here the loop completes normally (pass does nothing), so "done" is printed.

How It Works:
• Python follows the rule implied by: Python's for-else is unique: the else block runs when the loop finishes normally without encountering a break.
• The outcome you observe follows from: Think of else as "else no break occurred."

Step-by-Step Execution:
1. Start from the construct described in: Python's for-else is unique: the else block runs when the loop finishes normally without encountering a break.
2. Resolve the subparts implied by: Here the loop completes normally (pass does nothing), so "done" is printed.
3. Apply the core semantics highlighted in: Think of else as "else no break occurred."
4. Confirm the final result aligns with: Think of else as "else no break occurred."

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Here the loop completes normally (pass does nothing), so "done" is printed.
2. Apply the construct’s main rule next, matching: Python's for-else is unique: the else block runs when the loop finishes normally without encountering a break.
3. Produce any intermediate values that Think of else as "else no break occurred." relies on
4. Finish by returning/assembling the final output named by: Think of else as "else no break occurred."
5. Use the result only after the full construct has completed, per: Python's for-else is unique: the else block runs when the loop finishes normally without encountering a break.

Common Use Cases:
• Teaching this behavior using the mental model: Python's for-else is unique: the else block runs when the loop finishes normally without encountering a break.
• Debugging when the observed value should match the expectation in: Think of else as "else no break occurred."

Edge Cases:
• If inputs vary from the situation described in: Here the loop completes normally (pass does nothing), so "done" is printed., the behavior can change.
• When the construct’s assumptions differ, the rule in: Think of else as "else no break occurred." is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Think of else as "else no break occurred.".
• When performance matters, prefer the simplest pattern that still implements: Python's for-else is unique: the else block runs when the loop finishes normally without encountering a break..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Python's for-else is unique: the else block runs when the loop finishes normally without encountering a break..

Notes:
• For maintainable code, make the intent behind: Here the loop completes normally (pass does nothing), so "done" is printed. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q5: For-else clause - break prevents else
  (_i: number) => ({
    q: `What does this print?\nfor i in range(5):\n    if i == 2:\n        break\nelse:\n    print("completed")`,
    o: ["Nothing", '"completed"', "2", "Error"],
    c: 0,
    e: "The else block is skipped when the loop exits via break.",
    de: `When a for loop is terminated by break, the else clause does NOT execute. Here the loop breaks at i=2, so "completed" is never printed. The mnemonic: else means "else the loop was not broken out of." If break fires → else skipped.

Key Concepts:
• The mnemonic: else means "else the loop was not broken out of." If break fires → else skipped.

Key Distinctions:
• This question’s focus is best captured by: When a for loop is terminated by break, the else clause does NOT execute.
• The contrast that matters for correctness is summarized by: Here the loop breaks at i=2, so "completed" is never printed.

How It Works:
• Python follows the rule implied by: When a for loop is terminated by break, the else clause does NOT execute.
• The outcome you observe follows from: The mnemonic: else means "else the loop was not broken out of." If break fires → else skipped.

Step-by-Step Execution:
1. Start from the construct described in: When a for loop is terminated by break, the else clause does NOT execute.
2. Resolve the subparts implied by: Here the loop breaks at i=2, so "completed" is never printed.
3. Apply the core semantics highlighted in: The mnemonic: else means "else the loop was not broken out of." If break fires → else skipped.
4. Confirm the final result aligns with: The mnemonic: else means "else the loop was not broken out of." If break fires → else skipped.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Here the loop breaks at i=2, so "completed" is never printed.
2. Apply the construct’s main rule next, matching: When a for loop is terminated by break, the else clause does NOT execute.
3. Produce any intermediate values that The mnemonic: else means "else the loop was not broken out of." If break fires → else skipped. relies on
4. Finish by returning/assembling the final output named by: The mnemonic: else means "else the loop was not broken out of." If break fires → else skipped.
5. Use the result only after the full construct has completed, per: When a for loop is terminated by break, the else clause does NOT execute.

Common Use Cases:
• Teaching this behavior using the mental model: When a for loop is terminated by break, the else clause does NOT execute.
• Debugging when the observed value should match the expectation in: The mnemonic: else means "else the loop was not broken out of." If break fires → else skipped.

Edge Cases:
• If inputs vary from the situation described in: Here the loop breaks at i=2, so "completed" is never printed., the behavior can change.
• When the construct’s assumptions differ, the rule in: The mnemonic: else means "else the loop was not broken out of." If break fires → else skipped. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: The mnemonic: else means "else the loop was not broken out of." If break fires → else skipped..
• When performance matters, prefer the simplest pattern that still implements: When a for loop is terminated by break, the else clause does NOT execute..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: When a for loop is terminated by break, the else clause does NOT execute..

Notes:
• For maintainable code, make the intent behind: Here the loop breaks at i=2, so "completed" is never printed. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q6: For-else - practical search pattern
  (_i: number) => ({
    q: `What does this print?\nnums = [1, 3, 5, 7]\nfor n in nums:\n    if n % 2 == 0:\n        print("even found")\n        break\nelse:\n    print("all odd")`,
    o: ['"all odd"', '"even found"', "Nothing", "Error"],
    c: 0,
    e: "No even number found → no break → else executes.",
    de: `This is the classic for-else search pattern. All values [1,3,5,7] are odd, so n%2==0 is never True, break never fires, and the else clause executes. This pattern replaces the common "found = False" flag approach.

Key Concepts:
• This pattern replaces the common "found = False" flag approach.

Key Distinctions:
• This question’s focus is best captured by: This is the classic for-else search pattern.
• The contrast that matters for correctness is summarized by: All values [1,3,5,7] are odd, so n%2==0 is never True, break never fires, and the else clause executes.

How It Works:
• Python follows the rule implied by: This is the classic for-else search pattern.
• The outcome you observe follows from: This pattern replaces the common "found = False" flag approach.

Step-by-Step Execution:
1. Start from the construct described in: This is the classic for-else search pattern.
2. Resolve the subparts implied by: All values [1,3,5,7] are odd, so n%2==0 is never True, break never fires, and the else clause executes.
3. Apply the core semantics highlighted in: This pattern replaces the common "found = False" flag approach.
4. Confirm the final result aligns with: This pattern replaces the common "found = False" flag approach.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: All values [1,3,5,7] are odd, so n%2==0 is never True, break never fires, and the else clause executes.
2. Apply the construct’s main rule next, matching: This is the classic for-else search pattern.
3. Produce any intermediate values that This pattern replaces the common "found = False" flag approach. relies on
4. Finish by returning/assembling the final output named by: This pattern replaces the common "found = False" flag approach.
5. Use the result only after the full construct has completed, per: This is the classic for-else search pattern.

Common Use Cases:
• Teaching this behavior using the mental model: This is the classic for-else search pattern.
• Debugging when the observed value should match the expectation in: This pattern replaces the common "found = False" flag approach.

Edge Cases:
• If inputs vary from the situation described in: All values [1,3,5,7] are odd, so n%2==0 is never True, break never fires, and the else clause executes., the behavior can change.
• When the construct’s assumptions differ, the rule in: This pattern replaces the common "found = False" flag approach. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This pattern replaces the common "found = False" flag approach..
• When performance matters, prefer the simplest pattern that still implements: This is the classic for-else search pattern..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This is the classic for-else search pattern..

Notes:
• For maintainable code, make the intent behind: All values [1,3,5,7] are odd, so n%2==0 is never True, break never fires, and the else clause executes. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q7: Loop variable after loop
  (_i: number) => ({
    q: `What does this print?\nfor x in range(5):\n    pass\nprint(x)`,
    o: ["4", "5", "0", "NameError"],
    c: 0,
    e: "After the loop, x retains its last value: 4.",
    de: `In Python, the loop variable persists after the loop ends. The last value from range(5) is 4. This is different from languages like C++ where loop variables are scoped to the loop block. In Python, x "leaks" out into the enclosing scope.

Key Concepts:
• In Python, x "leaks" out into the enclosing scope.

Key Distinctions:
• This question’s focus is best captured by: In Python, the loop variable persists after the loop ends.
• The contrast that matters for correctness is summarized by: The last value from range(5) is 4.

How It Works:
• Python follows the rule implied by: In Python, the loop variable persists after the loop ends.
• The outcome you observe follows from: In Python, x "leaks" out into the enclosing scope.

Step-by-Step Execution:
1. Start from the construct described in: In Python, the loop variable persists after the loop ends.
2. Resolve the subparts implied by: The last value from range(5) is 4.
3. Apply the core semantics highlighted in: This is different from languages like C++ where loop variables are scoped to the loop block.
4. Confirm the final result aligns with: In Python, x "leaks" out into the enclosing scope.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The last value from range(5) is 4.
2. Apply the construct’s main rule next, matching: In Python, the loop variable persists after the loop ends.
3. Produce any intermediate values that In Python, x "leaks" out into the enclosing scope. relies on
4. Finish by returning/assembling the final output named by: In Python, x "leaks" out into the enclosing scope.
5. Use the result only after the full construct has completed, per: In Python, the loop variable persists after the loop ends.

Common Use Cases:
• Teaching this behavior using the mental model: In Python, the loop variable persists after the loop ends.
• Debugging when the observed value should match the expectation in: In Python, x "leaks" out into the enclosing scope.

Edge Cases:
• If inputs vary from the situation described in: The last value from range(5) is 4., the behavior can change.
• When the construct’s assumptions differ, the rule in: This is different from languages like C++ where loop variables are scoped to the loop block. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: In Python, x "leaks" out into the enclosing scope..
• When performance matters, prefer the simplest pattern that still implements: In Python, the loop variable persists after the loop ends..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: In Python, the loop variable persists after the loop ends..

Notes:
• For maintainable code, make the intent behind: The last value from range(5) is 4. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q8: Loop variable with empty iterable
  (_i: number) => ({
    q: `What happens if x was never defined?\nfor x in []:\n    pass\nprint(x)`,
    o: ["NameError", "None", "0", "Empty string"],
    c: 0,
    e: "With an empty iterable, the loop body never runs, so x is never assigned.",
    de: `When the iterable is empty, the loop body never executes, so x is never created. If x wasn't defined before the loop, print(x) raises NameError. Defensive code should initialize the variable before the loop (x = None) or check the iterable's length.

Key Concepts:
• Defensive code should initialize the variable before the loop (x = None) or check the iterable's length.

Key Distinctions:
• This question’s focus is best captured by: When the iterable is empty, the loop body never executes, so x is never created.
• The contrast that matters for correctness is summarized by: If x wasn't defined before the loop, print(x) raises NameError.

How It Works:
• Python follows the rule implied by: When the iterable is empty, the loop body never executes, so x is never created.
• The outcome you observe follows from: Defensive code should initialize the variable before the loop (x = None) or check the iterable's length.

Step-by-Step Execution:
1. Start from the construct described in: When the iterable is empty, the loop body never executes, so x is never created.
2. Resolve the subparts implied by: If x wasn't defined before the loop, print(x) raises NameError.
3. Apply the core semantics highlighted in: Defensive code should initialize the variable before the loop (x = None) or check the iterable's length.
4. Confirm the final result aligns with: Defensive code should initialize the variable before the loop (x = None) or check the iterable's length.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: If x wasn't defined before the loop, print(x) raises NameError.
2. Apply the construct’s main rule next, matching: When the iterable is empty, the loop body never executes, so x is never created.
3. Produce any intermediate values that Defensive code should initialize the variable before the loop (x = None) or check the iterable's length. relies on
4. Finish by returning/assembling the final output named by: Defensive code should initialize the variable before the loop (x = None) or check the iterable's length.
5. Use the result only after the full construct has completed, per: When the iterable is empty, the loop body never executes, so x is never created.

Common Use Cases:
• Teaching this behavior using the mental model: When the iterable is empty, the loop body never executes, so x is never created.
• Debugging when the observed value should match the expectation in: Defensive code should initialize the variable before the loop (x = None) or check the iterable's length.

Edge Cases:
• If inputs vary from the situation described in: If x wasn't defined before the loop, print(x) raises NameError., the behavior can change.
• When the construct’s assumptions differ, the rule in: Defensive code should initialize the variable before the loop (x = None) or check the iterable's length. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Defensive code should initialize the variable before the loop (x = None) or check the iterable's length..
• When performance matters, prefer the simplest pattern that still implements: When the iterable is empty, the loop body never executes, so x is never created..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: When the iterable is empty, the loop body never executes, so x is never created..

Notes:
• For maintainable code, make the intent behind: If x wasn't defined before the loop, print(x) raises NameError. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q9: Modifying loop variable
  (_i: number) => ({
    q: `What is result?\nresult = []\nfor i in range(3):\n    i += 100\n    result.append(i)\nresult`,
    o: ["[100, 101, 102]", "[100, 200, 300]", "[0, 1, 2]", "Error"],
    c: 0,
    e: "Modifying i doesn't affect iteration — range still provides 0, 1, 2 as the next values.",
    de: `In a Python for loop, the loop variable is reassigned from the iterator at the start of each iteration, regardless of modifications during the loop body. i is set to 0, then i+=100 makes 100; next iteration i is reset to 1, then +100 makes 101. The range iterator is unaffected.

Key Concepts:
• The range iterator is unaffected.

Key Distinctions:
• This question’s focus is best captured by: In a Python for loop, the loop variable is reassigned from the iterator at the start of each iteration, regardless of modifications during the loop body.
• The contrast that matters for correctness is summarized by: i is set to 0, then i+=100 makes 100; next iteration i is reset to 1, then +100 makes 101.

How It Works:
• Python follows the rule implied by: In a Python for loop, the loop variable is reassigned from the iterator at the start of each iteration, regardless of modifications during the loop body.
• The outcome you observe follows from: The range iterator is unaffected.

Step-by-Step Execution:
1. Start from the construct described in: In a Python for loop, the loop variable is reassigned from the iterator at the start of each iteration, regardless of modifications during the loop body.
2. Resolve the subparts implied by: i is set to 0, then i+=100 makes 100; next iteration i is reset to 1, then +100 makes 101.
3. Apply the core semantics highlighted in: The range iterator is unaffected.
4. Confirm the final result aligns with: The range iterator is unaffected.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: i is set to 0, then i+=100 makes 100; next iteration i is reset to 1, then +100 makes 101.
2. Apply the construct’s main rule next, matching: In a Python for loop, the loop variable is reassigned from the iterator at the start of each iteration, regardless of modifications during the loop body.
3. Produce any intermediate values that The range iterator is unaffected. relies on
4. Finish by returning/assembling the final output named by: The range iterator is unaffected.
5. Use the result only after the full construct has completed, per: In a Python for loop, the loop variable is reassigned from the iterator at the start of each iteration, regardless of modifications during the loop body.

Common Use Cases:
• Teaching this behavior using the mental model: In a Python for loop, the loop variable is reassigned from the iterator at the start of each iteration, regardless of modifications during the loop body.
• Debugging when the observed value should match the expectation in: The range iterator is unaffected.

Edge Cases:
• If inputs vary from the situation described in: i is set to 0, then i+=100 makes 100; next iteration i is reset to 1, then +100 makes 101., the behavior can change.
• When the construct’s assumptions differ, the rule in: The range iterator is unaffected. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: The range iterator is unaffected..
• When performance matters, prefer the simplest pattern that still implements: In a Python for loop, the loop variable is reassigned from the iterator at the start of each iteration, regardless of modifications during the loop body..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: In a Python for loop, the loop variable is reassigned from the iterator at the start of each iteration, regardless of modifications during the loop body..

Notes:
• For maintainable code, make the intent behind: i is set to 0, then i+=100 makes 100; next iteration i is reset to 1, then +100 makes 101. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q10: For loop over dict.items()
  (_i: number) => ({
    q: `What is [k + str(v) for k, v in {"a": 1, "b": 2}.items()]?`,
    o: ['["a1", "b2"]', '["a", "b"]', '[("a", 1), ("b", 2)]', "Error"],
    c: 0,
    e: "dict.items() yields (key, value) tuples; k+str(v) concatenates each.",
    de: `dict.items() returns (key, value) pairs. Tuple unpacking splits each pair into k and v. The expression k + str(v) concatenates the string key with the stringified integer value: "a"+"1"→"a1". Note str(v) is needed because Python doesn't allow str + int concatenation.

Key Concepts:
• Note str(v) is needed because Python doesn't allow str + int concatenation.

Key Distinctions:
• This question’s focus is best captured by: dict.items() returns (key, value) pairs.
• The contrast that matters for correctness is summarized by: Tuple unpacking splits each pair into k and v.

How It Works:
• Python follows the rule implied by: dict.items() returns (key, value) pairs.
• The outcome you observe follows from: Note str(v) is needed because Python doesn't allow str + int concatenation.

Step-by-Step Execution:
1. Start from the construct described in: dict.items() returns (key, value) pairs.
2. Resolve the subparts implied by: Tuple unpacking splits each pair into k and v.
3. Apply the core semantics highlighted in: The expression k + str(v) concatenates the string key with the stringified integer value: "a"+"1"→"a1".
4. Confirm the final result aligns with: Note str(v) is needed because Python doesn't allow str + int concatenation.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Tuple unpacking splits each pair into k and v.
2. Apply the construct’s main rule next, matching: dict.items() returns (key, value) pairs.
3. Produce any intermediate values that Note str(v) is needed because Python doesn't allow str + int concatenation. relies on
4. Finish by returning/assembling the final output named by: Note str(v) is needed because Python doesn't allow str + int concatenation.
5. Use the result only after the full construct has completed, per: dict.items() returns (key, value) pairs.

Common Use Cases:
• Teaching this behavior using the mental model: dict.items() returns (key, value) pairs.
• Debugging when the observed value should match the expectation in: Note str(v) is needed because Python doesn't allow str + int concatenation.

Edge Cases:
• If inputs vary from the situation described in: Tuple unpacking splits each pair into k and v., the behavior can change.
• When the construct’s assumptions differ, the rule in: The expression k + str(v) concatenates the string key with the stringified integer value: "a"+"1"→"a1". is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Note str(v) is needed because Python doesn't allow str + int concatenation..
• When performance matters, prefer the simplest pattern that still implements: dict.items() returns (key, value) pairs..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: dict.items() returns (key, value) pairs..

Notes:
• For maintainable code, make the intent behind: Tuple unpacking splits each pair into k and v. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q11: For loop summing dict values
  (_i: number) => ({
    q: `What is sum({"x": 10, "y": 20, "z": 30}.values())?`,
    o: ["60", "3", "10", "Error"],
    c: 0,
    e: "dict.values() returns [10, 20, 30]; sum adds them to 60.",
    de: `dict.values() returns a view over the dictionary's values. sum() takes any iterable of numbers and returns their total: 10 + 20 + 30 = 60. This pattern is commonly used for aggregating dictionary data — totaling prices, counting occurrences.

Key Concepts:
• This pattern is commonly used for aggregating dictionary data — totaling prices, counting occurrences.

Key Distinctions:
• This question’s focus is best captured by: dict.values() returns a view over the dictionary's values.
• The contrast that matters for correctness is summarized by: sum() takes any iterable of numbers and returns their total: 10 + 20 + 30 = 60.

How It Works:
• Python follows the rule implied by: dict.values() returns a view over the dictionary's values.
• The outcome you observe follows from: This pattern is commonly used for aggregating dictionary data — totaling prices, counting occurrences.

Step-by-Step Execution:
1. Start from the construct described in: dict.values() returns a view over the dictionary's values.
2. Resolve the subparts implied by: sum() takes any iterable of numbers and returns their total: 10 + 20 + 30 = 60.
3. Apply the core semantics highlighted in: This pattern is commonly used for aggregating dictionary data — totaling prices, counting occurrences.
4. Confirm the final result aligns with: This pattern is commonly used for aggregating dictionary data — totaling prices, counting occurrences.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: sum() takes any iterable of numbers and returns their total: 10 + 20 + 30 = 60.
2. Apply the construct’s main rule next, matching: dict.values() returns a view over the dictionary's values.
3. Produce any intermediate values that This pattern is commonly used for aggregating dictionary data — totaling prices, counting occurrences. relies on
4. Finish by returning/assembling the final output named by: This pattern is commonly used for aggregating dictionary data — totaling prices, counting occurrences.
5. Use the result only after the full construct has completed, per: dict.values() returns a view over the dictionary's values.

Common Use Cases:
• Teaching this behavior using the mental model: dict.values() returns a view over the dictionary's values.
• Debugging when the observed value should match the expectation in: This pattern is commonly used for aggregating dictionary data — totaling prices, counting occurrences.

Edge Cases:
• If inputs vary from the situation described in: sum() takes any iterable of numbers and returns their total: 10 + 20 + 30 = 60., the behavior can change.
• When the construct’s assumptions differ, the rule in: This pattern is commonly used for aggregating dictionary data — totaling prices, counting occurrences. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This pattern is commonly used for aggregating dictionary data — totaling prices, counting occurrences..
• When performance matters, prefer the simplest pattern that still implements: dict.values() returns a view over the dictionary's values..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: dict.values() returns a view over the dictionary's values..

Notes:
• For maintainable code, make the intent behind: sum() takes any iterable of numbers and returns their total: 10 + 20 + 30 = 60. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q12: Modifying dict during iteration
  (_i: number) => ({
    q: `What happens?\nd = {"a": 1, "b": 2}\nfor k in d:\n    d["c"] = 3`,
    o: ["RuntimeError", "d becomes {'a':1,'b':2,'c':3}", "Infinite loop", "Nothing"],
    c: 0,
    e: "Modifying a dict's size during iteration raises RuntimeError.",
    de: `Python dicts detect size changes during iteration and raise RuntimeError. Adding d["c"] changes the dict's size, triggering the error. To safely modify, iterate over a copy: for k in list(d.keys()): d["c"] = 3. The list() creates a snapshot so changes don't affect iteration.

Key Concepts:
• The list() creates a snapshot so changes don't affect iteration.

Key Distinctions:
• This question’s focus is best captured by: Python dicts detect size changes during iteration and raise RuntimeError.
• The contrast that matters for correctness is summarized by: Adding d["c"] changes the dict's size, triggering the error.

How It Works:
• Python follows the rule implied by: Python dicts detect size changes during iteration and raise RuntimeError.
• The outcome you observe follows from: The list() creates a snapshot so changes don't affect iteration.

Step-by-Step Execution:
1. Start from the construct described in: Python dicts detect size changes during iteration and raise RuntimeError.
2. Resolve the subparts implied by: Adding d["c"] changes the dict's size, triggering the error.
3. Apply the core semantics highlighted in: To safely modify, iterate over a copy: for k in list(d.keys()): d["c"] = 3.
4. Confirm the final result aligns with: The list() creates a snapshot so changes don't affect iteration.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Adding d["c"] changes the dict's size, triggering the error.
2. Apply the construct’s main rule next, matching: Python dicts detect size changes during iteration and raise RuntimeError.
3. Produce any intermediate values that The list() creates a snapshot so changes don't affect iteration. relies on
4. Finish by returning/assembling the final output named by: The list() creates a snapshot so changes don't affect iteration.
5. Use the result only after the full construct has completed, per: Python dicts detect size changes during iteration and raise RuntimeError.

Common Use Cases:
• Teaching this behavior using the mental model: Python dicts detect size changes during iteration and raise RuntimeError.
• Debugging when the observed value should match the expectation in: The list() creates a snapshot so changes don't affect iteration.

Edge Cases:
• If inputs vary from the situation described in: Adding d["c"] changes the dict's size, triggering the error., the behavior can change.
• When the construct’s assumptions differ, the rule in: To safely modify, iterate over a copy: for k in list(d.keys()): d["c"] = 3. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: The list() creates a snapshot so changes don't affect iteration..
• When performance matters, prefer the simplest pattern that still implements: Python dicts detect size changes during iteration and raise RuntimeError..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Python dicts detect size changes during iteration and raise RuntimeError..

Notes:
• For maintainable code, make the intent behind: Adding d["c"] changes the dict's size, triggering the error. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q13: Tuple unpacking in for loops
  (_i: number) => ({
    q: `What is result?\npairs = [(1, "a"), (2, "b"), (3, "c")]\nresult = ""\nfor num, letter in pairs:\n    result += letter\nresult`,
    o: ['"abc"', '"123"', '"a b c"', "Error"],
    c: 0,
    e: "Tuple unpacking splits each pair; only letter is appended.",
    de: `When iterating over a list of tuples, Python can unpack each tuple into multiple loop variables. Here (num, letter) receives each tuple's elements. Since only letter is used, the output accumulates "a"+"b"+"c" = "abc". The number of variables must match the tuple length.

Key Concepts:
• The number of variables must match the tuple length.

Key Distinctions:
• This question’s focus is best captured by: When iterating over a list of tuples, Python can unpack each tuple into multiple loop variables.
• The contrast that matters for correctness is summarized by: Here (num, letter) receives each tuple's elements.

How It Works:
• Python follows the rule implied by: When iterating over a list of tuples, Python can unpack each tuple into multiple loop variables.
• The outcome you observe follows from: The number of variables must match the tuple length.

Step-by-Step Execution:
1. Start from the construct described in: When iterating over a list of tuples, Python can unpack each tuple into multiple loop variables.
2. Resolve the subparts implied by: Here (num, letter) receives each tuple's elements.
3. Apply the core semantics highlighted in: Since only letter is used, the output accumulates "a"+"b"+"c" = "abc".
4. Confirm the final result aligns with: The number of variables must match the tuple length.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Here (num, letter) receives each tuple's elements.
2. Apply the construct’s main rule next, matching: When iterating over a list of tuples, Python can unpack each tuple into multiple loop variables.
3. Produce any intermediate values that The number of variables must match the tuple length. relies on
4. Finish by returning/assembling the final output named by: The number of variables must match the tuple length.
5. Use the result only after the full construct has completed, per: When iterating over a list of tuples, Python can unpack each tuple into multiple loop variables.

Common Use Cases:
• Teaching this behavior using the mental model: When iterating over a list of tuples, Python can unpack each tuple into multiple loop variables.
• Debugging when the observed value should match the expectation in: The number of variables must match the tuple length.

Edge Cases:
• If inputs vary from the situation described in: Here (num, letter) receives each tuple's elements., the behavior can change.
• When the construct’s assumptions differ, the rule in: Since only letter is used, the output accumulates "a"+"b"+"c" = "abc". is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: The number of variables must match the tuple length..
• When performance matters, prefer the simplest pattern that still implements: When iterating over a list of tuples, Python can unpack each tuple into multiple loop variables..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: When iterating over a list of tuples, Python can unpack each tuple into multiple loop variables..

Notes:
• For maintainable code, make the intent behind: Here (num, letter) receives each tuple's elements. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q14: Nested unpacking
  (_i: number) => ({
    q: `What is result?\ndata = [(1, (2, 3)), (4, (5, 6))]\nresult = []\nfor a, (b, c) in data:\n    result.append(a + b + c)\nresult`,
    o: ["[6, 15]", "[1, 4]", "[(2, 3), (5, 6)]", "Error"],
    c: 0,
    e: "Nested unpacking: a gets the first element, (b, c) unpacks the inner tuple.",
    de: `Python supports nested unpacking in for loops. Each element is a tuple like (1, (2, 3)). The pattern a, (b, c) unpacks the outer tuple: a=1, inner tuple: b=2, c=3. So a+b+c = 6 for the first element, 4+5+6 = 15 for the second. Nested unpacking works to any depth.

Key Concepts:
• Nested unpacking works to any depth.

Key Distinctions:
• This question’s focus is best captured by: Python supports nested unpacking in for loops.
• The contrast that matters for correctness is summarized by: Each element is a tuple like (1, (2, 3)).

How It Works:
• Python follows the rule implied by: Python supports nested unpacking in for loops.
• The outcome you observe follows from: Nested unpacking works to any depth.

Step-by-Step Execution:
1. Start from the construct described in: Python supports nested unpacking in for loops.
2. Resolve the subparts implied by: Each element is a tuple like (1, (2, 3)).
3. Apply the core semantics highlighted in: The pattern a, (b, c) unpacks the outer tuple: a=1, inner tuple: b=2, c=3.
4. Confirm the final result aligns with: Nested unpacking works to any depth.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Each element is a tuple like (1, (2, 3)).
2. Apply the construct’s main rule next, matching: Python supports nested unpacking in for loops.
3. Produce any intermediate values that Nested unpacking works to any depth. relies on
4. Finish by returning/assembling the final output named by: Nested unpacking works to any depth.
5. Use the result only after the full construct has completed, per: Python supports nested unpacking in for loops.

Common Use Cases:
• Teaching this behavior using the mental model: Python supports nested unpacking in for loops.
• Debugging when the observed value should match the expectation in: Nested unpacking works to any depth.

Edge Cases:
• If inputs vary from the situation described in: Each element is a tuple like (1, (2, 3))., the behavior can change.
• When the construct’s assumptions differ, the rule in: The pattern a, (b, c) unpacks the outer tuple: a=1, inner tuple: b=2, c=3. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Nested unpacking works to any depth..
• When performance matters, prefer the simplest pattern that still implements: Python supports nested unpacking in for loops..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Python supports nested unpacking in for loops..

Notes:
• For maintainable code, make the intent behind: Each element is a tuple like (1, (2, 3)). explicit (and test it with inputs like those in this prompt).`
  }),
  // Q15: String iteration - counting vowels
  (_i: number) => ({
    q: `What is count?\ncount = 0\nfor ch in "hello":\n    if ch in "aeiou":\n        count += 1\ncount`,
    o: ["2", "3", "1", "5"],
    c: 0,
    e: "Vowels in 'hello': 'e' and 'o' → count = 2.",
    de: `Strings are iterable — a for loop visits each character one at a time. Checking each character of "hello" against vowels: h(no), e(yes), l(no), l(no), o(yes). Two vowels found, count = 2. The 'in' operator performs membership testing on a string.

Key Concepts:
• The 'in' operator performs membership testing on a string.

Key Distinctions:
• This question’s focus is best captured by: Strings are iterable — a for loop visits each character one at a time.
• The contrast that matters for correctness is summarized by: Checking each character of "hello" against vowels: h(no), e(yes), l(no), l(no), o(yes).

How It Works:
• Python follows the rule implied by: Strings are iterable — a for loop visits each character one at a time.
• The outcome you observe follows from: The 'in' operator performs membership testing on a string.

Step-by-Step Execution:
1. Start from the construct described in: Strings are iterable — a for loop visits each character one at a time.
2. Resolve the subparts implied by: Checking each character of "hello" against vowels: h(no), e(yes), l(no), l(no), o(yes).
3. Apply the core semantics highlighted in: Two vowels found, count = 2.
4. Confirm the final result aligns with: The 'in' operator performs membership testing on a string.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Checking each character of "hello" against vowels: h(no), e(yes), l(no), l(no), o(yes).
2. Apply the construct’s main rule next, matching: Strings are iterable — a for loop visits each character one at a time.
3. Produce any intermediate values that The 'in' operator performs membership testing on a string. relies on
4. Finish by returning/assembling the final output named by: The 'in' operator performs membership testing on a string.
5. Use the result only after the full construct has completed, per: Strings are iterable — a for loop visits each character one at a time.

Common Use Cases:
• Teaching this behavior using the mental model: Strings are iterable — a for loop visits each character one at a time.
• Debugging when the observed value should match the expectation in: The 'in' operator performs membership testing on a string.

Edge Cases:
• If inputs vary from the situation described in: Checking each character of "hello" against vowels: h(no), e(yes), l(no), l(no), o(yes)., the behavior can change.
• When the construct’s assumptions differ, the rule in: Two vowels found, count = 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: The 'in' operator performs membership testing on a string..
• When performance matters, prefer the simplest pattern that still implements: Strings are iterable — a for loop visits each character one at a time..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Strings are iterable — a for loop visits each character one at a time..

Notes:
• For maintainable code, make the intent behind: Checking each character of "hello" against vowels: h(no), e(yes), l(no), l(no), o(yes). explicit (and test it with inputs like those in this prompt).`
  }),
  // Q16: Building reversed string
  (_i: number) => ({
    q: `What is rev?\ns = "abc"\nrev = ""\nfor ch in s:\n    rev = ch + rev\nrev`,
    o: ['"cba"', '"abc"', '"cab"', '"bca"'],
    c: 0,
    e: 'Each character is prepended: "a"→"a", "b"+"a"→"ba", "c"+"ba"→"cba".',
    de: `This reverses a string by prepending each character. Step by step: rev="" → ch="a": rev="a" → ch="b": rev="b"+"a"="ba" → ch="c": rev="c"+"ba"="cba". The key is rev = ch + rev (prepending). While s[::-1] is the Pythonic one-liner, this pattern illustrates string building.

Key Concepts:
• While s[::-1] is the Pythonic one-liner, this pattern illustrates string building.

Key Distinctions:
• This question’s focus is best captured by: This reverses a string by prepending each character.
• The contrast that matters for correctness is summarized by: Step by step: rev="" → ch="a": rev="a" → ch="b": rev="b"+"a"="ba" → ch="c": rev="c"+"ba"="cba".

How It Works:
• Python follows the rule implied by: This reverses a string by prepending each character.
• The outcome you observe follows from: While s[::-1] is the Pythonic one-liner, this pattern illustrates string building.

Step-by-Step Execution:
1. Start from the construct described in: This reverses a string by prepending each character.
2. Resolve the subparts implied by: Step by step: rev="" → ch="a": rev="a" → ch="b": rev="b"+"a"="ba" → ch="c": rev="c"+"ba"="cba".
3. Apply the core semantics highlighted in: The key is rev = ch + rev (prepending).
4. Confirm the final result aligns with: While s[::-1] is the Pythonic one-liner, this pattern illustrates string building.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Step by step: rev="" → ch="a": rev="a" → ch="b": rev="b"+"a"="ba" → ch="c": rev="c"+"ba"="cba".
2. Apply the construct’s main rule next, matching: This reverses a string by prepending each character.
3. Produce any intermediate values that While s[::-1] is the Pythonic one-liner, this pattern illustrates string building. relies on
4. Finish by returning/assembling the final output named by: While s[::-1] is the Pythonic one-liner, this pattern illustrates string building.
5. Use the result only after the full construct has completed, per: This reverses a string by prepending each character.

Common Use Cases:
• Teaching this behavior using the mental model: This reverses a string by prepending each character.
• Debugging when the observed value should match the expectation in: While s[::-1] is the Pythonic one-liner, this pattern illustrates string building.

Edge Cases:
• If inputs vary from the situation described in: Step by step: rev="" → ch="a": rev="a" → ch="b": rev="b"+"a"="ba" → ch="c": rev="c"+"ba"="cba"., the behavior can change.
• When the construct’s assumptions differ, the rule in: The key is rev = ch + rev (prepending). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: While s[::-1] is the Pythonic one-liner, this pattern illustrates string building..
• When performance matters, prefer the simplest pattern that still implements: This reverses a string by prepending each character..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This reverses a string by prepending each character..

Notes:
• For maintainable code, make the intent behind: Step by step: rev="" → ch="a": rev="a" → ch="b": rev="b"+"a"="ba" → ch="c": rev="c"+"ba"="cba". explicit (and test it with inputs like those in this prompt).`
  }),
  // Q17: zip with unequal lengths
  (_i: number) => ({
    q: `What is list(zip([1, 2, 3], ["x", "y"]))?`,
    o: ['[(1, "x"), (2, "y")]', '[(1, "x"), (2, "y"), (3, None)]', "Error", '[(1, "x")]'],
    c: 0,
    e: "zip() stops at the shortest iterable.",
    de: `zip() pairs elements position by position but stops when the shortest iterable is exhausted. Here the first list has 3 elements and the second has 2, so only 2 pairs are produced. Element 3 is silently dropped. Use itertools.zip_longest for padding shorter iterables.

Key Concepts:
• Use itertools.zip_longest for padding shorter iterables.

Key Distinctions:
• This question’s focus is best captured by: zip() pairs elements position by position but stops when the shortest iterable is exhausted.
• The contrast that matters for correctness is summarized by: Here the first list has 3 elements and the second has 2, so only 2 pairs are produced.

How It Works:
• Python follows the rule implied by: zip() pairs elements position by position but stops when the shortest iterable is exhausted.
• The outcome you observe follows from: Use itertools.zip_longest for padding shorter iterables.

Step-by-Step Execution:
1. Start from the construct described in: zip() pairs elements position by position but stops when the shortest iterable is exhausted.
2. Resolve the subparts implied by: Here the first list has 3 elements and the second has 2, so only 2 pairs are produced.
3. Apply the core semantics highlighted in: Element 3 is silently dropped.
4. Confirm the final result aligns with: Use itertools.zip_longest for padding shorter iterables.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Here the first list has 3 elements and the second has 2, so only 2 pairs are produced.
2. Apply the construct’s main rule next, matching: zip() pairs elements position by position but stops when the shortest iterable is exhausted.
3. Produce any intermediate values that Use itertools.zip_longest for padding shorter iterables. relies on
4. Finish by returning/assembling the final output named by: Use itertools.zip_longest for padding shorter iterables.
5. Use the result only after the full construct has completed, per: zip() pairs elements position by position but stops when the shortest iterable is exhausted.

Common Use Cases:
• Teaching this behavior using the mental model: zip() pairs elements position by position but stops when the shortest iterable is exhausted.
• Debugging when the observed value should match the expectation in: Use itertools.zip_longest for padding shorter iterables.

Edge Cases:
• If inputs vary from the situation described in: Here the first list has 3 elements and the second has 2, so only 2 pairs are produced., the behavior can change.
• When the construct’s assumptions differ, the rule in: Element 3 is silently dropped. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Use itertools.zip_longest for padding shorter iterables..
• When performance matters, prefer the simplest pattern that still implements: zip() pairs elements position by position but stops when the shortest iterable is exhausted..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: zip() pairs elements position by position but stops when the shortest iterable is exhausted..

Notes:
• For maintainable code, make the intent behind: Here the first list has 3 elements and the second has 2, so only 2 pairs are produced. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q18: enumerate with custom start
  (_i: number) => ({
    q: `What is list(enumerate(["a", "b", "c"], start=10))?`,
    o: ['[(10, "a"), (11, "b"), (12, "c")]', '[(0, "a"), (1, "b"), (2, "c")]', '[(10, "a"), (10, "b"), (10, "c")]', "Error"],
    c: 0,
    e: "enumerate with start=10 begins counting at 10.",
    de: `enumerate() takes an optional start parameter that sets the initial counter value. With start=10, the first item gets index 10, then 11, 12. The start parameter only affects the counter — it doesn't skip elements in the iterable. Default is start=0.

Key Concepts:
• Default is start=0.

Key Distinctions:
• This question’s focus is best captured by: enumerate() takes an optional start parameter that sets the initial counter value.
• The contrast that matters for correctness is summarized by: With start=10, the first item gets index 10, then 11, 12.

How It Works:
• Python follows the rule implied by: enumerate() takes an optional start parameter that sets the initial counter value.
• The outcome you observe follows from: Default is start=0.

Step-by-Step Execution:
1. Start from the construct described in: enumerate() takes an optional start parameter that sets the initial counter value.
2. Resolve the subparts implied by: With start=10, the first item gets index 10, then 11, 12.
3. Apply the core semantics highlighted in: The start parameter only affects the counter — it doesn't skip elements in the iterable.
4. Confirm the final result aligns with: Default is start=0.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: With start=10, the first item gets index 10, then 11, 12.
2. Apply the construct’s main rule next, matching: enumerate() takes an optional start parameter that sets the initial counter value.
3. Produce any intermediate values that Default is start=0. relies on
4. Finish by returning/assembling the final output named by: Default is start=0.
5. Use the result only after the full construct has completed, per: enumerate() takes an optional start parameter that sets the initial counter value.

Common Use Cases:
• Teaching this behavior using the mental model: enumerate() takes an optional start parameter that sets the initial counter value.
• Debugging when the observed value should match the expectation in: Default is start=0.

Edge Cases:
• If inputs vary from the situation described in: With start=10, the first item gets index 10, then 11, 12., the behavior can change.
• When the construct’s assumptions differ, the rule in: The start parameter only affects the counter — it doesn't skip elements in the iterable. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Default is start=0..
• When performance matters, prefer the simplest pattern that still implements: enumerate() takes an optional start parameter that sets the initial counter value..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: enumerate() takes an optional start parameter that sets the initial counter value..

Notes:
• For maintainable code, make the intent behind: With start=10, the first item gets index 10, then 11, 12. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q19: range with negative step
  (_i: number) => ({
    q: `What is list(range(10, 0, -3))?`,
    o: ["[10, 7, 4, 1]", "[10, 7, 4]", "[10, 8, 6, 4, 2]", "[]"],
    c: 0,
    e: "range(10, 0, -3) counts down by 3: 10, 7, 4, 1.",
    de: `range(start, stop, step) with negative step counts downward. Starting at 10, subtracting 3: 10, 7, 4, 1. The next value would be -2, past stop=0, so it stops. The stop value is always exclusive. If start < stop with negative step, the result is empty.

Key Concepts:
• If start < stop with negative step, the result is empty.

Key Distinctions:
• This question’s focus is best captured by: range(start, stop, step) with negative step counts downward.
• The contrast that matters for correctness is summarized by: Starting at 10, subtracting 3: 10, 7, 4, 1.

How It Works:
• Python follows the rule implied by: range(start, stop, step) with negative step counts downward.
• The outcome you observe follows from: If start < stop with negative step, the result is empty.

Step-by-Step Execution:
1. Start from the construct described in: range(start, stop, step) with negative step counts downward.
2. Resolve the subparts implied by: Starting at 10, subtracting 3: 10, 7, 4, 1.
3. Apply the core semantics highlighted in: The next value would be -2, past stop=0, so it stops.
4. Confirm the final result aligns with: If start < stop with negative step, the result is empty.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Starting at 10, subtracting 3: 10, 7, 4, 1.
2. Apply the construct’s main rule next, matching: range(start, stop, step) with negative step counts downward.
3. Produce any intermediate values that If start < stop with negative step, the result is empty. relies on
4. Finish by returning/assembling the final output named by: If start < stop with negative step, the result is empty.
5. Use the result only after the full construct has completed, per: range(start, stop, step) with negative step counts downward.

Common Use Cases:
• Teaching this behavior using the mental model: range(start, stop, step) with negative step counts downward.
• Debugging when the observed value should match the expectation in: If start < stop with negative step, the result is empty.

Edge Cases:
• If inputs vary from the situation described in: Starting at 10, subtracting 3: 10, 7, 4, 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: The next value would be -2, past stop=0, so it stops. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: If start < stop with negative step, the result is empty..
• When performance matters, prefer the simplest pattern that still implements: range(start, stop, step) with negative step counts downward..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: range(start, stop, step) with negative step counts downward..

Notes:
• For maintainable code, make the intent behind: Starting at 10, subtracting 3: 10, 7, 4, 1. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q20: range(len()) pattern
  (_i: number) => ({
    q: `What is [items[i] * i for i in range(len(items))] where items = [10, 20, 30]?`,
    o: ["[0, 20, 60]", "[10, 20, 30]", "[10, 40, 90]", "Error"],
    c: 0,
    e: "i=0: 10*0=0, i=1: 20*1=20, i=2: 30*2=60.",
    de: `range(len(items)) generates indices 0, 1, 2. Each index accesses items[i] and multiplies by i. While range(len()) works, Python style prefers enumerate() when you need both index and value: [v*i for i,v in enumerate(items)].

Key Concepts:
• While range(len()) works, Python style prefers enumerate() when you need both index and value: [v*i for i,v in enumerate(items)].

Key Distinctions:
• This question’s focus is best captured by: range(len(items)) generates indices 0, 1, 2.
• The contrast that matters for correctness is summarized by: Each index accesses items[i] and multiplies by i.

How It Works:
• Python follows the rule implied by: range(len(items)) generates indices 0, 1, 2.
• The outcome you observe follows from: While range(len()) works, Python style prefers enumerate() when you need both index and value: [v*i for i,v in enumerate(items)].

Step-by-Step Execution:
1. Start from the construct described in: range(len(items)) generates indices 0, 1, 2.
2. Resolve the subparts implied by: Each index accesses items[i] and multiplies by i.
3. Apply the core semantics highlighted in: While range(len()) works, Python style prefers enumerate() when you need both index and value: [v*i for i,v in enumerate(items)].
4. Confirm the final result aligns with: While range(len()) works, Python style prefers enumerate() when you need both index and value: [v*i for i,v in enumerate(items)].

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Each index accesses items[i] and multiplies by i.
2. Apply the construct’s main rule next, matching: range(len(items)) generates indices 0, 1, 2.
3. Produce any intermediate values that While range(len()) works, Python style prefers enumerate() when you need both index and value: [v*i for i,v in enumerate(items)]. relies on
4. Finish by returning/assembling the final output named by: While range(len()) works, Python style prefers enumerate() when you need both index and value: [v*i for i,v in enumerate(items)].
5. Use the result only after the full construct has completed, per: range(len(items)) generates indices 0, 1, 2.

Common Use Cases:
• Teaching this behavior using the mental model: range(len(items)) generates indices 0, 1, 2.
• Debugging when the observed value should match the expectation in: While range(len()) works, Python style prefers enumerate() when you need both index and value: [v*i for i,v in enumerate(items)].

Edge Cases:
• If inputs vary from the situation described in: Each index accesses items[i] and multiplies by i., the behavior can change.
• When the construct’s assumptions differ, the rule in: While range(len()) works, Python style prefers enumerate() when you need both index and value: [v*i for i,v in enumerate(items)]. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: While range(len()) works, Python style prefers enumerate() when you need both index and value: [v*i for i,v in enumerate(items)]..
• When performance matters, prefer the simplest pattern that still implements: range(len(items)) generates indices 0, 1, 2..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: range(len(items)) generates indices 0, 1, 2..

Notes:
• For maintainable code, make the intent behind: Each index accesses items[i] and multiplies by i. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q21: Flatten 2D list with comprehension
  (_i: number) => ({
    q: `What is [x for row in [[1, 2], [3, 4], [5, 6]] for x in row]?`,
    o: ["[1, 2, 3, 4, 5, 6]", "[[1, 2], [3, 4], [5, 6]]", "[1, 3, 5]", "Error"],
    c: 0,
    e: "Nested comprehension reads left-to-right: for each row, then for each x in that row.",
    de: `This nested comprehension flattens a 2D list. Reading left to right: the outer loop 'for row in matrix' iterates sub-lists, the inner 'for x in row' extracts elements. The leftmost for is the outer loop. This is the standard pattern for flattening one level of nesting.

Key Concepts:
• This is the standard pattern for flattening one level of nesting.

Key Distinctions:
• This question’s focus is best captured by: This nested comprehension flattens a 2D list.
• The contrast that matters for correctness is summarized by: Reading left to right: the outer loop 'for row in matrix' iterates sub-lists, the inner 'for x in row' extracts elements.

How It Works:
• Python follows the rule implied by: This nested comprehension flattens a 2D list.
• The outcome you observe follows from: This is the standard pattern for flattening one level of nesting.

Step-by-Step Execution:
1. Start from the construct described in: This nested comprehension flattens a 2D list.
2. Resolve the subparts implied by: Reading left to right: the outer loop 'for row in matrix' iterates sub-lists, the inner 'for x in row' extracts elements.
3. Apply the core semantics highlighted in: The leftmost for is the outer loop.
4. Confirm the final result aligns with: This is the standard pattern for flattening one level of nesting.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Reading left to right: the outer loop 'for row in matrix' iterates sub-lists, the inner 'for x in row' extracts elements.
2. Apply the construct’s main rule next, matching: This nested comprehension flattens a 2D list.
3. Produce any intermediate values that This is the standard pattern for flattening one level of nesting. relies on
4. Finish by returning/assembling the final output named by: This is the standard pattern for flattening one level of nesting.
5. Use the result only after the full construct has completed, per: This nested comprehension flattens a 2D list.

Common Use Cases:
• Teaching this behavior using the mental model: This nested comprehension flattens a 2D list.
• Debugging when the observed value should match the expectation in: This is the standard pattern for flattening one level of nesting.

Edge Cases:
• If inputs vary from the situation described in: Reading left to right: the outer loop 'for row in matrix' iterates sub-lists, the inner 'for x in row' extracts elements., the behavior can change.
• When the construct’s assumptions differ, the rule in: The leftmost for is the outer loop. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This is the standard pattern for flattening one level of nesting..
• When performance matters, prefer the simplest pattern that still implements: This nested comprehension flattens a 2D list..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This nested comprehension flattens a 2D list..

Notes:
• For maintainable code, make the intent behind: Reading left to right: the outer loop 'for row in matrix' iterates sub-lists, the inner 'for x in row' extracts elements. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q22: break + else + variable persistence
  (_i: number) => ({
    q: `What does print(i) output?\nfor i in range(2, 10):\n    if i % 3 == 0:\n        break\nelse:\n    print("no break")\nprint(i)`,
    o: ["3", "2", '"no break" then 2', "Error"],
    c: 0,
    e: "i=2: 2%3≠0; i=3: 3%3==0 → break. Else skipped. print(i) outputs 3.",
    de: `The loop starts at i=2 (2%3≠0, no break), then i=3 (3%3==0, break fires). The else clause is skipped because break was used. After the loop, i retains its value of 3 (where break occurred). This combines for-else behavior, loop variable persistence, and break semantics.

Key Concepts:
• This combines for-else behavior, loop variable persistence, and break semantics.

Key Distinctions:
• This question’s focus is best captured by: The loop starts at i=2 (2%3≠0, no break), then i=3 (3%3==0, break fires).
• The contrast that matters for correctness is summarized by: The else clause is skipped because break was used.

How It Works:
• Python follows the rule implied by: The loop starts at i=2 (2%3≠0, no break), then i=3 (3%3==0, break fires).
• The outcome you observe follows from: This combines for-else behavior, loop variable persistence, and break semantics.

Step-by-Step Execution:
1. Start from the construct described in: The loop starts at i=2 (2%3≠0, no break), then i=3 (3%3==0, break fires).
2. Resolve the subparts implied by: The else clause is skipped because break was used.
3. Apply the core semantics highlighted in: After the loop, i retains its value of 3 (where break occurred).
4. Confirm the final result aligns with: This combines for-else behavior, loop variable persistence, and break semantics.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The else clause is skipped because break was used.
2. Apply the construct’s main rule next, matching: The loop starts at i=2 (2%3≠0, no break), then i=3 (3%3==0, break fires).
3. Produce any intermediate values that This combines for-else behavior, loop variable persistence, and break semantics. relies on
4. Finish by returning/assembling the final output named by: This combines for-else behavior, loop variable persistence, and break semantics.
5. Use the result only after the full construct has completed, per: The loop starts at i=2 (2%3≠0, no break), then i=3 (3%3==0, break fires).

Common Use Cases:
• Teaching this behavior using the mental model: The loop starts at i=2 (2%3≠0, no break), then i=3 (3%3==0, break fires).
• Debugging when the observed value should match the expectation in: This combines for-else behavior, loop variable persistence, and break semantics.

Edge Cases:
• If inputs vary from the situation described in: The else clause is skipped because break was used., the behavior can change.
• When the construct’s assumptions differ, the rule in: After the loop, i retains its value of 3 (where break occurred). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This combines for-else behavior, loop variable persistence, and break semantics..
• When performance matters, prefer the simplest pattern that still implements: The loop starts at i=2 (2%3≠0, no break), then i=3 (3%3==0, break fires)..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The loop starts at i=2 (2%3≠0, no break), then i=3 (3%3==0, break fires)..

Notes:
• For maintainable code, make the intent behind: The else clause is skipped because break was used. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q23: Set iteration order
  (_i: number) => ({
    q: `What is guaranteed about for x in {3, 1, 2}?`,
    o: ["Iteration order is not guaranteed", "Elements appear sorted", "Elements appear in insertion order", "Sets cannot be iterated"],
    c: 0,
    e: "Sets are unordered collections — iteration order is implementation-dependent.",
    de: `Sets provide no guarantee about iteration order. Unlike lists (ordered) and dicts (insertion-ordered since 3.7), sets are unordered. Never write code that depends on set iteration order. Use sorted(my_set) if you need ordered iteration over unique elements.

Key Concepts:
• Use sorted(my_set) if you need ordered iteration over unique elements.

Key Distinctions:
• This question’s focus is best captured by: Sets provide no guarantee about iteration order.
• The contrast that matters for correctness is summarized by: Unlike lists (ordered) and dicts (insertion-ordered since 3.7), sets are unordered.

How It Works:
• Python follows the rule implied by: Sets provide no guarantee about iteration order.
• The outcome you observe follows from: Use sorted(my_set) if you need ordered iteration over unique elements.

Step-by-Step Execution:
1. Start from the construct described in: Sets provide no guarantee about iteration order.
2. Resolve the subparts implied by: Unlike lists (ordered) and dicts (insertion-ordered since 3.7), sets are unordered.
3. Apply the core semantics highlighted in: Never write code that depends on set iteration order.
4. Confirm the final result aligns with: Use sorted(my_set) if you need ordered iteration over unique elements.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Unlike lists (ordered) and dicts (insertion-ordered since 3.7), sets are unordered.
2. Apply the construct’s main rule next, matching: Sets provide no guarantee about iteration order.
3. Produce any intermediate values that Use sorted(my_set) if you need ordered iteration over unique elements. relies on
4. Finish by returning/assembling the final output named by: Use sorted(my_set) if you need ordered iteration over unique elements.
5. Use the result only after the full construct has completed, per: Sets provide no guarantee about iteration order.

Common Use Cases:
• Teaching this behavior using the mental model: Sets provide no guarantee about iteration order.
• Debugging when the observed value should match the expectation in: Use sorted(my_set) if you need ordered iteration over unique elements.

Edge Cases:
• If inputs vary from the situation described in: Unlike lists (ordered) and dicts (insertion-ordered since 3.7), sets are unordered., the behavior can change.
• When the construct’s assumptions differ, the rule in: Never write code that depends on set iteration order. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Use sorted(my_set) if you need ordered iteration over unique elements..
• When performance matters, prefer the simplest pattern that still implements: Sets provide no guarantee about iteration order..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Sets provide no guarantee about iteration order..

Notes:
• For maintainable code, make the intent behind: Unlike lists (ordered) and dicts (insertion-ordered since 3.7), sets are unordered. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q24: Iterating over bytes
  (_i: number) => ({
    q: `What is [b for b in b"Hi"]?`,
    o: ["[72, 105]", '["H", "i"]', "[b'H', b'i']", "Error"],
    c: 0,
    e: "Iterating bytes yields integers (ASCII values): H=72, i=105.",
    de: `When you iterate over a bytes object, each element is an integer (0-255), not a character. b"Hi" contains H (ASCII 72) and i (ASCII 105). This differs from string iteration which yields single-character strings. To get characters, decode first: b"Hi".decode().

Key Concepts:
• To get characters, decode first: b"Hi".decode().

Key Distinctions:
• This question’s focus is best captured by: When you iterate over a bytes object, each element is an integer (0-255), not a character.
• The contrast that matters for correctness is summarized by: b"Hi" contains H (ASCII 72) and i (ASCII 105).

How It Works:
• Python follows the rule implied by: When you iterate over a bytes object, each element is an integer (0-255), not a character.
• The outcome you observe follows from: To get characters, decode first: b"Hi".decode().

Step-by-Step Execution:
1. Start from the construct described in: When you iterate over a bytes object, each element is an integer (0-255), not a character.
2. Resolve the subparts implied by: b"Hi" contains H (ASCII 72) and i (ASCII 105).
3. Apply the core semantics highlighted in: This differs from string iteration which yields single-character strings.
4. Confirm the final result aligns with: To get characters, decode first: b"Hi".decode().

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: b"Hi" contains H (ASCII 72) and i (ASCII 105).
2. Apply the construct’s main rule next, matching: When you iterate over a bytes object, each element is an integer (0-255), not a character.
3. Produce any intermediate values that To get characters, decode first: b"Hi".decode(). relies on
4. Finish by returning/assembling the final output named by: To get characters, decode first: b"Hi".decode().
5. Use the result only after the full construct has completed, per: When you iterate over a bytes object, each element is an integer (0-255), not a character.

Common Use Cases:
• Teaching this behavior using the mental model: When you iterate over a bytes object, each element is an integer (0-255), not a character.
• Debugging when the observed value should match the expectation in: To get characters, decode first: b"Hi".decode().

Edge Cases:
• If inputs vary from the situation described in: b"Hi" contains H (ASCII 72) and i (ASCII 105)., the behavior can change.
• When the construct’s assumptions differ, the rule in: This differs from string iteration which yields single-character strings. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: To get characters, decode first: b"Hi".decode()..
• When performance matters, prefer the simplest pattern that still implements: When you iterate over a bytes object, each element is an integer (0-255), not a character..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: When you iterate over a bytes object, each element is an integer (0-255), not a character..

Notes:
• For maintainable code, make the intent behind: b"Hi" contains H (ASCII 72) and i (ASCII 105). explicit (and test it with inputs like those in this prompt).`
  }),
  // Q25: Cartesian product with nested comprehension
  (_i: number) => ({
    q: `What is len([(i, j) for i in range(3) for j in range(4)])?`,
    o: ["12", "7", "3", "4"],
    c: 0,
    e: "Nested comprehension: 3 × 4 = 12 combinations.",
    de: `A nested list comprehension with two for clauses generates the Cartesian product. range(3) has 3 values, range(4) has 4. Every combination is produced: 3×4 = 12 tuples. This is equivalent to itertools.product(range(3), range(4)).

Key Concepts:
• This is equivalent to itertools.product(range(3), range(4)).

Key Distinctions:
• This question’s focus is best captured by: A nested list comprehension with two for clauses generates the Cartesian product.
• The contrast that matters for correctness is summarized by: range(3) has 3 values, range(4) has 4.

How It Works:
• Python follows the rule implied by: A nested list comprehension with two for clauses generates the Cartesian product.
• The outcome you observe follows from: This is equivalent to itertools.product(range(3), range(4)).

Step-by-Step Execution:
1. Start from the construct described in: A nested list comprehension with two for clauses generates the Cartesian product.
2. Resolve the subparts implied by: range(3) has 3 values, range(4) has 4.
3. Apply the core semantics highlighted in: Every combination is produced: 3×4 = 12 tuples.
4. Confirm the final result aligns with: This is equivalent to itertools.product(range(3), range(4)).

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: range(3) has 3 values, range(4) has 4.
2. Apply the construct’s main rule next, matching: A nested list comprehension with two for clauses generates the Cartesian product.
3. Produce any intermediate values that This is equivalent to itertools.product(range(3), range(4)). relies on
4. Finish by returning/assembling the final output named by: This is equivalent to itertools.product(range(3), range(4)).
5. Use the result only after the full construct has completed, per: A nested list comprehension with two for clauses generates the Cartesian product.

Common Use Cases:
• Teaching this behavior using the mental model: A nested list comprehension with two for clauses generates the Cartesian product.
• Debugging when the observed value should match the expectation in: This is equivalent to itertools.product(range(3), range(4)).

Edge Cases:
• If inputs vary from the situation described in: range(3) has 3 values, range(4) has 4., the behavior can change.
• When the construct’s assumptions differ, the rule in: Every combination is produced: 3×4 = 12 tuples. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This is equivalent to itertools.product(range(3), range(4))..
• When performance matters, prefer the simplest pattern that still implements: A nested list comprehension with two for clauses generates the Cartesian product..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: A nested list comprehension with two for clauses generates the Cartesian product..

Notes:
• For maintainable code, make the intent behind: range(3) has 3 values, range(4) has 4. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q26: enumerate on dict
  (_i: number) => ({
    q: `What is list(enumerate({"x": 10, "y": 20}))?`,
    o: ["[(0, 'x'), (1, 'y')]", "[(0, 10), (1, 20)]", "[('x', 10), ('y', 20)]", "Error"],
    c: 0,
    e: "enumerate() on a dict iterates over its keys with an index counter.",
    de: `When you call enumerate() on a dictionary, it iterates over the dictionary's keys (not values or items) and pairs each key with a positional index. To enumerate key-value pairs, use enumerate(d.items()) instead. Dicts iterate over keys by default.

Key Concepts:
• Dicts iterate over keys by default.

Key Distinctions:
• This question’s focus is best captured by: When you call enumerate() on a dictionary, it iterates over the dictionary's keys (not values or items) and pairs each key with a positional index.
• The contrast that matters for correctness is summarized by: To enumerate key-value pairs, use enumerate(d.items()) instead.

How It Works:
• Python follows the rule implied by: When you call enumerate() on a dictionary, it iterates over the dictionary's keys (not values or items) and pairs each key with a positional index.
• The outcome you observe follows from: Dicts iterate over keys by default.

Step-by-Step Execution:
1. Start from the construct described in: When you call enumerate() on a dictionary, it iterates over the dictionary's keys (not values or items) and pairs each key with a positional index.
2. Resolve the subparts implied by: To enumerate key-value pairs, use enumerate(d.items()) instead.
3. Apply the core semantics highlighted in: Dicts iterate over keys by default.
4. Confirm the final result aligns with: Dicts iterate over keys by default.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: To enumerate key-value pairs, use enumerate(d.items()) instead.
2. Apply the construct’s main rule next, matching: When you call enumerate() on a dictionary, it iterates over the dictionary's keys (not values or items) and pairs each key with a positional index.
3. Produce any intermediate values that Dicts iterate over keys by default. relies on
4. Finish by returning/assembling the final output named by: Dicts iterate over keys by default.
5. Use the result only after the full construct has completed, per: When you call enumerate() on a dictionary, it iterates over the dictionary's keys (not values or items) and pairs each key with a positional index.

Common Use Cases:
• Teaching this behavior using the mental model: When you call enumerate() on a dictionary, it iterates over the dictionary's keys (not values or items) and pairs each key with a positional index.
• Debugging when the observed value should match the expectation in: Dicts iterate over keys by default.

Edge Cases:
• If inputs vary from the situation described in: To enumerate key-value pairs, use enumerate(d.items()) instead., the behavior can change.
• When the construct’s assumptions differ, the rule in: Dicts iterate over keys by default. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Dicts iterate over keys by default..
• When performance matters, prefer the simplest pattern that still implements: When you call enumerate() on a dictionary, it iterates over the dictionary's keys (not values or items) and pairs each key with a positional index..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: When you call enumerate() on a dictionary, it iterates over the dictionary's keys (not values or items) and pairs each key with a positional index..

Notes:
• For maintainable code, make the intent behind: To enumerate key-value pairs, use enumerate(d.items()) instead. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q27: reversed() on list
  (_i: number) => ({
    q: `What is list(reversed([1, 2, 3]))?`,
    o: ["[3, 2, 1]", "[1, 2, 3]", "[3, 1, 2]", "Error"],
    c: 0,
    e: "reversed() returns an iterator yielding items in reverse order.",
    de: `reversed() returns a reverse iterator without modifying the original list. Unlike .reverse() which mutates in place and returns None, reversed() creates a new iterator. It works on any sequence (list, tuple, string, range) but not on sets or dicts directly.

Key Concepts:
• It works on any sequence (list, tuple, string, range) but not on sets or dicts directly.

Key Distinctions:
• This question’s focus is best captured by: reversed() returns a reverse iterator without modifying the original list.
• The contrast that matters for correctness is summarized by: Unlike .reverse() which mutates in place and returns None, reversed() creates a new iterator.

How It Works:
• Python follows the rule implied by: reversed() returns a reverse iterator without modifying the original list.
• The outcome you observe follows from: It works on any sequence (list, tuple, string, range) but not on sets or dicts directly.

Step-by-Step Execution:
1. Start from the construct described in: reversed() returns a reverse iterator without modifying the original list.
2. Resolve the subparts implied by: Unlike .reverse() which mutates in place and returns None, reversed() creates a new iterator.
3. Apply the core semantics highlighted in: It works on any sequence (list, tuple, string, range) but not on sets or dicts directly.
4. Confirm the final result aligns with: It works on any sequence (list, tuple, string, range) but not on sets or dicts directly.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Unlike .reverse() which mutates in place and returns None, reversed() creates a new iterator.
2. Apply the construct’s main rule next, matching: reversed() returns a reverse iterator without modifying the original list.
3. Produce any intermediate values that It works on any sequence (list, tuple, string, range) but not on sets or dicts directly. relies on
4. Finish by returning/assembling the final output named by: It works on any sequence (list, tuple, string, range) but not on sets or dicts directly.
5. Use the result only after the full construct has completed, per: reversed() returns a reverse iterator without modifying the original list.

Common Use Cases:
• Teaching this behavior using the mental model: reversed() returns a reverse iterator without modifying the original list.
• Debugging when the observed value should match the expectation in: It works on any sequence (list, tuple, string, range) but not on sets or dicts directly.

Edge Cases:
• If inputs vary from the situation described in: Unlike .reverse() which mutates in place and returns None, reversed() creates a new iterator., the behavior can change.
• When the construct’s assumptions differ, the rule in: It works on any sequence (list, tuple, string, range) but not on sets or dicts directly. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: It works on any sequence (list, tuple, string, range) but not on sets or dicts directly..
• When performance matters, prefer the simplest pattern that still implements: reversed() returns a reverse iterator without modifying the original list..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: reversed() returns a reverse iterator without modifying the original list..

Notes:
• For maintainable code, make the intent behind: Unlike .reverse() which mutates in place and returns None, reversed() creates a new iterator. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q28: sorted() on dict
  (_i: number) => ({
    q: `What does sorted({"c": 3, "a": 1, "b": 2}) return?`,
    o: ["['a', 'b', 'c']", "[1, 2, 3]", "[('a', 1), ('b', 2), ('c', 3)]", "Error"],
    c: 0,
    e: "sorted() on a dict returns a sorted list of its keys.",
    de: `When sorted() is called on a dictionary, it iterates over the dict's keys and returns them in sorted order as a list. To sort by values, use sorted(d, key=d.get). To get sorted key-value pairs, use sorted(d.items()).

Key Concepts:
• To get sorted key-value pairs, use sorted(d.items()).

Key Distinctions:
• This question’s focus is best captured by: When sorted() is called on a dictionary, it iterates over the dict's keys and returns them in sorted order as a list.
• The contrast that matters for correctness is summarized by: To sort by values, use sorted(d, key=d.get).

How It Works:
• Python follows the rule implied by: When sorted() is called on a dictionary, it iterates over the dict's keys and returns them in sorted order as a list.
• The outcome you observe follows from: To get sorted key-value pairs, use sorted(d.items()).

Step-by-Step Execution:
1. Start from the construct described in: When sorted() is called on a dictionary, it iterates over the dict's keys and returns them in sorted order as a list.
2. Resolve the subparts implied by: To sort by values, use sorted(d, key=d.get).
3. Apply the core semantics highlighted in: To get sorted key-value pairs, use sorted(d.items()).
4. Confirm the final result aligns with: To get sorted key-value pairs, use sorted(d.items()).

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: To sort by values, use sorted(d, key=d.get).
2. Apply the construct’s main rule next, matching: When sorted() is called on a dictionary, it iterates over the dict's keys and returns them in sorted order as a list.
3. Produce any intermediate values that To get sorted key-value pairs, use sorted(d.items()). relies on
4. Finish by returning/assembling the final output named by: To get sorted key-value pairs, use sorted(d.items()).
5. Use the result only after the full construct has completed, per: When sorted() is called on a dictionary, it iterates over the dict's keys and returns them in sorted order as a list.

Common Use Cases:
• Teaching this behavior using the mental model: When sorted() is called on a dictionary, it iterates over the dict's keys and returns them in sorted order as a list.
• Debugging when the observed value should match the expectation in: To get sorted key-value pairs, use sorted(d.items()).

Edge Cases:
• If inputs vary from the situation described in: To sort by values, use sorted(d, key=d.get)., the behavior can change.
• When the construct’s assumptions differ, the rule in: To get sorted key-value pairs, use sorted(d.items()). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: To get sorted key-value pairs, use sorted(d.items())..
• When performance matters, prefer the simplest pattern that still implements: When sorted() is called on a dictionary, it iterates over the dict's keys and returns them in sorted order as a list..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: When sorted() is called on a dictionary, it iterates over the dict's keys and returns them in sorted order as a list..

Notes:
• For maintainable code, make the intent behind: To sort by values, use sorted(d, key=d.get). explicit (and test it with inputs like those in this prompt).`
  }),
  // Q29: Starred unpacking in loop
  (_i: number) => ({
    q: `What is result?\nresult = []\nfor first, *rest in [(1, 2, 3), (4, 5)]:\n    result.append(rest)\nresult`,
    o: ["[[2, 3], [5]]", "[(2, 3), (5,)]", "[[1, 4]]", "Error"],
    c: 0,
    e: "The * operator captures remaining elements into a list.",
    de: `Starred unpacking with *rest collects all leftover elements into a list. In (1, 2, 3), first=1 and rest=[2, 3]. In (4, 5), first=4 and rest=[5]. Note rest is always a list, even with a single element. Useful for processing records with variable-length fields.

Key Concepts:
• Useful for processing records with variable-length fields.

Key Distinctions:
• This question’s focus is best captured by: Starred unpacking with *rest collects all leftover elements into a list.
• The contrast that matters for correctness is summarized by: In (1, 2, 3), first=1 and rest=[2, 3].

How It Works:
• Python follows the rule implied by: Starred unpacking with *rest collects all leftover elements into a list.
• The outcome you observe follows from: Useful for processing records with variable-length fields.

Step-by-Step Execution:
1. Start from the construct described in: Starred unpacking with *rest collects all leftover elements into a list.
2. Resolve the subparts implied by: In (1, 2, 3), first=1 and rest=[2, 3].
3. Apply the core semantics highlighted in: In (4, 5), first=4 and rest=[5].
4. Confirm the final result aligns with: Useful for processing records with variable-length fields.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: In (1, 2, 3), first=1 and rest=[2, 3].
2. Apply the construct’s main rule next, matching: Starred unpacking with *rest collects all leftover elements into a list.
3. Produce any intermediate values that Useful for processing records with variable-length fields. relies on
4. Finish by returning/assembling the final output named by: Useful for processing records with variable-length fields.
5. Use the result only after the full construct has completed, per: Starred unpacking with *rest collects all leftover elements into a list.

Common Use Cases:
• Teaching this behavior using the mental model: Starred unpacking with *rest collects all leftover elements into a list.
• Debugging when the observed value should match the expectation in: Useful for processing records with variable-length fields.

Edge Cases:
• If inputs vary from the situation described in: In (1, 2, 3), first=1 and rest=[2, 3]., the behavior can change.
• When the construct’s assumptions differ, the rule in: In (4, 5), first=4 and rest=[5]. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Useful for processing records with variable-length fields..
• When performance matters, prefer the simplest pattern that still implements: Starred unpacking with *rest collects all leftover elements into a list..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Starred unpacking with *rest collects all leftover elements into a list..

Notes:
• For maintainable code, make the intent behind: In (1, 2, 3), first=1 and rest=[2, 3]. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q30: Building dict from two lists with zip
  (_i: number) => ({
    q: `What is d?\nkeys = ["a", "b"]\nvals = [1, 2]\nd = {}\nfor k, v in zip(keys, vals):\n    d[k] = v\nd`,
    o: ["{'a': 1, 'b': 2}", "{1: 'a', 2: 'b'}", "[('a', 1), ('b', 2)]", "Error"],
    c: 0,
    e: "zip() pairs elements from two lists; the loop builds a dict.",
    de: `zip(keys, vals) produces pairs ('a', 1) and ('b', 2). The loop unpacks each pair and assigns d[k] = v. The shorter equivalent is dict(zip(keys, vals)). This pattern is fundamental for combining parallel sequences into mappings.

Key Concepts:
• This pattern is fundamental for combining parallel sequences into mappings.

Key Distinctions:
• This question’s focus is best captured by: zip(keys, vals) produces pairs ('a', 1) and ('b', 2).
• The contrast that matters for correctness is summarized by: The loop unpacks each pair and assigns d[k] = v.

How It Works:
• Python follows the rule implied by: zip(keys, vals) produces pairs ('a', 1) and ('b', 2).
• The outcome you observe follows from: This pattern is fundamental for combining parallel sequences into mappings.

Step-by-Step Execution:
1. Start from the construct described in: zip(keys, vals) produces pairs ('a', 1) and ('b', 2).
2. Resolve the subparts implied by: The loop unpacks each pair and assigns d[k] = v.
3. Apply the core semantics highlighted in: The shorter equivalent is dict(zip(keys, vals)).
4. Confirm the final result aligns with: This pattern is fundamental for combining parallel sequences into mappings.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The loop unpacks each pair and assigns d[k] = v.
2. Apply the construct’s main rule next, matching: zip(keys, vals) produces pairs ('a', 1) and ('b', 2).
3. Produce any intermediate values that This pattern is fundamental for combining parallel sequences into mappings. relies on
4. Finish by returning/assembling the final output named by: This pattern is fundamental for combining parallel sequences into mappings.
5. Use the result only after the full construct has completed, per: zip(keys, vals) produces pairs ('a', 1) and ('b', 2).

Common Use Cases:
• Teaching this behavior using the mental model: zip(keys, vals) produces pairs ('a', 1) and ('b', 2).
• Debugging when the observed value should match the expectation in: This pattern is fundamental for combining parallel sequences into mappings.

Edge Cases:
• If inputs vary from the situation described in: The loop unpacks each pair and assigns d[k] = v., the behavior can change.
• When the construct’s assumptions differ, the rule in: The shorter equivalent is dict(zip(keys, vals)). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This pattern is fundamental for combining parallel sequences into mappings..
• When performance matters, prefer the simplest pattern that still implements: zip(keys, vals) produces pairs ('a', 1) and ('b', 2)..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: zip(keys, vals) produces pairs ('a', 1) and ('b', 2)..

Notes:
• For maintainable code, make the intent behind: The loop unpacks each pair and assigns d[k] = v. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q31: Slicing with step in loop
  (_i: number) => ({
    q: `What is result?\ns = "Python"\nresult = ""\nfor i in range(0, len(s), 2):\n    result += s[i]\nresult`,
    o: ["'Pto'", "'yhn'", "'Pyt'", "'Python'"],
    c: 0,
    e: "range(0, 6, 2) gives indices 0, 2, 4 — every other character.",
    de: `range(0, len('Python'), 2) produces indices 0, 2, 4. Indexing 'Python' at those positions: 'P', 't', 'o' → 'Pto'. This step-based indexing pattern is useful for sampling every Nth element. The equivalent slice is s[::2].

Key Concepts:
• The equivalent slice is s[::2].

Key Distinctions:
• This question’s focus is best captured by: range(0, len('Python'), 2) produces indices 0, 2, 4.
• The contrast that matters for correctness is summarized by: Indexing 'Python' at those positions: 'P', 't', 'o' → 'Pto'.

How It Works:
• Python follows the rule implied by: range(0, len('Python'), 2) produces indices 0, 2, 4.
• The outcome you observe follows from: The equivalent slice is s[::2].

Step-by-Step Execution:
1. Start from the construct described in: range(0, len('Python'), 2) produces indices 0, 2, 4.
2. Resolve the subparts implied by: Indexing 'Python' at those positions: 'P', 't', 'o' → 'Pto'.
3. Apply the core semantics highlighted in: This step-based indexing pattern is useful for sampling every Nth element.
4. Confirm the final result aligns with: The equivalent slice is s[::2].

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Indexing 'Python' at those positions: 'P', 't', 'o' → 'Pto'.
2. Apply the construct’s main rule next, matching: range(0, len('Python'), 2) produces indices 0, 2, 4.
3. Produce any intermediate values that The equivalent slice is s[::2]. relies on
4. Finish by returning/assembling the final output named by: The equivalent slice is s[::2].
5. Use the result only after the full construct has completed, per: range(0, len('Python'), 2) produces indices 0, 2, 4.

Common Use Cases:
• Teaching this behavior using the mental model: range(0, len('Python'), 2) produces indices 0, 2, 4.
• Debugging when the observed value should match the expectation in: The equivalent slice is s[::2].

Edge Cases:
• If inputs vary from the situation described in: Indexing 'Python' at those positions: 'P', 't', 'o' → 'Pto'., the behavior can change.
• When the construct’s assumptions differ, the rule in: This step-based indexing pattern is useful for sampling every Nth element. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: The equivalent slice is s[::2]..
• When performance matters, prefer the simplest pattern that still implements: range(0, len('Python'), 2) produces indices 0, 2, 4..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: range(0, len('Python'), 2) produces indices 0, 2, 4..

Notes:
• For maintainable code, make the intent behind: Indexing 'Python' at those positions: 'P', 't', 'o' → 'Pto'. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q32: Counting occurrences manually
  (_i: number) => ({
    q: `What is count?\ncount = 0\nfor ch in "banana":\n    if ch == "a":\n        count += 1\ncount`,
    o: ["3", "2", "1", "6"],
    c: 0,
    e: "'banana' has three 'a' characters.",
    de: `The loop iterates each character in 'banana': b, a, n, a, n, a. Each time ch equals 'a', count increments. There are 3 occurrences. This manual counting is equivalent to 'banana'.count('a'). Understanding it helps when you need conditional or complex counting.

Key Concepts:
• Understanding it helps when you need conditional or complex counting.

Key Distinctions:
• This question’s focus is best captured by: The loop iterates each character in 'banana': b, a, n, a, n, a.
• The contrast that matters for correctness is summarized by: Each time ch equals 'a', count increments.

How It Works:
• Python follows the rule implied by: The loop iterates each character in 'banana': b, a, n, a, n, a.
• The outcome you observe follows from: Understanding it helps when you need conditional or complex counting.

Step-by-Step Execution:
1. Start from the construct described in: The loop iterates each character in 'banana': b, a, n, a, n, a.
2. Resolve the subparts implied by: Each time ch equals 'a', count increments.
3. Apply the core semantics highlighted in: There are 3 occurrences.
4. Confirm the final result aligns with: Understanding it helps when you need conditional or complex counting.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Each time ch equals 'a', count increments.
2. Apply the construct’s main rule next, matching: The loop iterates each character in 'banana': b, a, n, a, n, a.
3. Produce any intermediate values that Understanding it helps when you need conditional or complex counting. relies on
4. Finish by returning/assembling the final output named by: Understanding it helps when you need conditional or complex counting.
5. Use the result only after the full construct has completed, per: The loop iterates each character in 'banana': b, a, n, a, n, a.

Common Use Cases:
• Teaching this behavior using the mental model: The loop iterates each character in 'banana': b, a, n, a, n, a.
• Debugging when the observed value should match the expectation in: Understanding it helps when you need conditional or complex counting.

Edge Cases:
• If inputs vary from the situation described in: Each time ch equals 'a', count increments., the behavior can change.
• When the construct’s assumptions differ, the rule in: There are 3 occurrences. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Understanding it helps when you need conditional or complex counting..
• When performance matters, prefer the simplest pattern that still implements: The loop iterates each character in 'banana': b, a, n, a, n, a..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The loop iterates each character in 'banana': b, a, n, a, n, a..

Notes:
• For maintainable code, make the intent behind: Each time ch equals 'a', count increments. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q33: Finding max without max()
  (_i: number) => ({
    q: `What is m?\nnums = [3, 7, 2, 9, 4]\nm = nums[0]\nfor n in nums:\n    if n > m:\n        m = n\nm`,
    o: ["9", "3", "7", "4"],
    c: 0,
    e: "The loop tracks the largest value: 3→7→9.",
    de: `The classic find-max algorithm. m starts at 3 (first element). The loop compares each element: 3 (no change), 7>3 (m=7), 2 (no), 9>7 (m=9), 4 (no). Initializing m to nums[0] (not 0) is important — if all values were negative, starting at 0 would give the wrong result.

Key Concepts:
• Initializing m to nums[0] (not 0) is important — if all values were negative, starting at 0 would give the wrong result.

Key Distinctions:
• This question’s focus is best captured by: The classic find-max algorithm.
• The contrast that matters for correctness is summarized by: m starts at 3 (first element).

How It Works:
• Python follows the rule implied by: The classic find-max algorithm.
• The outcome you observe follows from: Initializing m to nums[0] (not 0) is important — if all values were negative, starting at 0 would give the wrong result.

Step-by-Step Execution:
1. Start from the construct described in: The classic find-max algorithm.
2. Resolve the subparts implied by: m starts at 3 (first element).
3. Apply the core semantics highlighted in: The loop compares each element: 3 (no change), 7>3 (m=7), 2 (no), 9>7 (m=9), 4 (no).
4. Confirm the final result aligns with: Initializing m to nums[0] (not 0) is important — if all values were negative, starting at 0 would give the wrong result.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: m starts at 3 (first element).
2. Apply the construct’s main rule next, matching: The classic find-max algorithm.
3. Produce any intermediate values that Initializing m to nums[0] (not 0) is important — if all values were negative, starting at 0 would give the wrong result. relies on
4. Finish by returning/assembling the final output named by: Initializing m to nums[0] (not 0) is important — if all values were negative, starting at 0 would give the wrong result.
5. Use the result only after the full construct has completed, per: The classic find-max algorithm.

Common Use Cases:
• Teaching this behavior using the mental model: The classic find-max algorithm.
• Debugging when the observed value should match the expectation in: Initializing m to nums[0] (not 0) is important — if all values were negative, starting at 0 would give the wrong result.

Edge Cases:
• If inputs vary from the situation described in: m starts at 3 (first element)., the behavior can change.
• When the construct’s assumptions differ, the rule in: The loop compares each element: 3 (no change), 7>3 (m=7), 2 (no), 9>7 (m=9), 4 (no). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Initializing m to nums[0] (not 0) is important — if all values were negative, starting at 0 would give the wrong result..
• When performance matters, prefer the simplest pattern that still implements: The classic find-max algorithm..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The classic find-max algorithm..

Notes:
• For maintainable code, make the intent behind: m starts at 3 (first element). explicit (and test it with inputs like those in this prompt).`
  }),
  // Q34: Flattening nested list with loops
  (_i: number) => ({
    q: `What is flat?\nnested = [[1, 2], [3], [4, 5]]\nflat = []\nfor sub in nested:\n    for x in sub:\n        flat.append(x)\nflat`,
    o: ["[1, 2, 3, 4, 5]", "[[1, 2], [3], [4, 5]]", "[3, 1, 2]", "Error"],
    c: 0,
    e: "Nested loops visit every element in every sublist, flattening the structure.",
    de: `The outer loop iterates sublists [1,2], [3], [4,5]. The inner loop iterates elements within each and appends to flat. Result: [1, 2, 3, 4, 5]. One-liner equivalent: [x for sub in nested for x in sub]. This only flattens one level deep.

Key Concepts:
• This only flattens one level deep.

Key Distinctions:
• This question’s focus is best captured by: The outer loop iterates sublists [1,2], [3], [4,5].
• The contrast that matters for correctness is summarized by: The inner loop iterates elements within each and appends to flat.

How It Works:
• Python follows the rule implied by: The outer loop iterates sublists [1,2], [3], [4,5].
• The outcome you observe follows from: This only flattens one level deep.

Step-by-Step Execution:
1. Start from the construct described in: The outer loop iterates sublists [1,2], [3], [4,5].
2. Resolve the subparts implied by: The inner loop iterates elements within each and appends to flat.
3. Apply the core semantics highlighted in: Result: [1, 2, 3, 4, 5].
4. Confirm the final result aligns with: This only flattens one level deep.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The inner loop iterates elements within each and appends to flat.
2. Apply the construct’s main rule next, matching: The outer loop iterates sublists [1,2], [3], [4,5].
3. Produce any intermediate values that This only flattens one level deep. relies on
4. Finish by returning/assembling the final output named by: This only flattens one level deep.
5. Use the result only after the full construct has completed, per: The outer loop iterates sublists [1,2], [3], [4,5].

Common Use Cases:
• Teaching this behavior using the mental model: The outer loop iterates sublists [1,2], [3], [4,5].
• Debugging when the observed value should match the expectation in: This only flattens one level deep.

Edge Cases:
• If inputs vary from the situation described in: The inner loop iterates elements within each and appends to flat., the behavior can change.
• When the construct’s assumptions differ, the rule in: Result: [1, 2, 3, 4, 5]. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This only flattens one level deep..
• When performance matters, prefer the simplest pattern that still implements: The outer loop iterates sublists [1,2], [3], [4,5]..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The outer loop iterates sublists [1,2], [3], [4,5]..

Notes:
• For maintainable code, make the intent behind: The inner loop iterates elements within each and appends to flat. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q35: Tuple unpacking sums
  (_i: number) => ({
    q: `What is result?\npairs = [(1, 2), (3, 4), (5, 6)]\nresult = []\nfor x, y in pairs:\n    result.append(x + y)\nresult`,
    o: ["[3, 7, 11]", "[(1, 2), (3, 4), (5, 6)]", "[1, 3, 5]", "Error"],
    c: 0,
    e: "Each tuple is unpacked: 1+2=3, 3+4=7, 5+6=11.",
    de: `The for loop uses tuple unpacking to assign x and y from each pair. The sums are: (1,2)→3, (3,4)→7, (5,6)→11. This multiple assignment target pattern is widely used when iterating over structured data like coordinates, key-value pairs, or database rows.

Key Concepts:
• This multiple assignment target pattern is widely used when iterating over structured data like coordinates, key-value pairs, or database rows.

Key Distinctions:
• This question’s focus is best captured by: The for loop uses tuple unpacking to assign x and y from each pair.
• The contrast that matters for correctness is summarized by: The sums are: (1,2)→3, (3,4)→7, (5,6)→11.

How It Works:
• Python follows the rule implied by: The for loop uses tuple unpacking to assign x and y from each pair.
• The outcome you observe follows from: This multiple assignment target pattern is widely used when iterating over structured data like coordinates, key-value pairs, or database rows.

Step-by-Step Execution:
1. Start from the construct described in: The for loop uses tuple unpacking to assign x and y from each pair.
2. Resolve the subparts implied by: The sums are: (1,2)→3, (3,4)→7, (5,6)→11.
3. Apply the core semantics highlighted in: This multiple assignment target pattern is widely used when iterating over structured data like coordinates, key-value pairs, or database rows.
4. Confirm the final result aligns with: This multiple assignment target pattern is widely used when iterating over structured data like coordinates, key-value pairs, or database rows.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The sums are: (1,2)→3, (3,4)→7, (5,6)→11.
2. Apply the construct’s main rule next, matching: The for loop uses tuple unpacking to assign x and y from each pair.
3. Produce any intermediate values that This multiple assignment target pattern is widely used when iterating over structured data like coordinates, key-value pairs, or database rows. relies on
4. Finish by returning/assembling the final output named by: This multiple assignment target pattern is widely used when iterating over structured data like coordinates, key-value pairs, or database rows.
5. Use the result only after the full construct has completed, per: The for loop uses tuple unpacking to assign x and y from each pair.

Common Use Cases:
• Teaching this behavior using the mental model: The for loop uses tuple unpacking to assign x and y from each pair.
• Debugging when the observed value should match the expectation in: This multiple assignment target pattern is widely used when iterating over structured data like coordinates, key-value pairs, or database rows.

Edge Cases:
• If inputs vary from the situation described in: The sums are: (1,2)→3, (3,4)→7, (5,6)→11., the behavior can change.
• When the construct’s assumptions differ, the rule in: This multiple assignment target pattern is widely used when iterating over structured data like coordinates, key-value pairs, or database rows. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This multiple assignment target pattern is widely used when iterating over structured data like coordinates, key-value pairs, or database rows..
• When performance matters, prefer the simplest pattern that still implements: The for loop uses tuple unpacking to assign x and y from each pair..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The for loop uses tuple unpacking to assign x and y from each pair..

Notes:
• For maintainable code, make the intent behind: The sums are: (1,2)→3, (3,4)→7, (5,6)→11. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q36: Accumulating sum
  (_i: number) => ({
    q: `What is total?\ntotal = 0\nfor n in [10, 20, 30]:\n    total += n\ntotal`,
    o: ["60", "30", "10", "0"],
    c: 0,
    e: "The loop accumulates 10 + 20 + 30 = 60.",
    de: `This is the accumulator pattern: initialize total to 0, then add each element. After iteration: 0+10=10, 10+20=30, 30+30=60. The built-in sum() does the same thing. The manual pattern is essential when you need custom logic during accumulation.

Key Concepts:
• The manual pattern is essential when you need custom logic during accumulation.

Key Distinctions:
• This question’s focus is best captured by: This is the accumulator pattern: initialize total to 0, then add each element.
• The contrast that matters for correctness is summarized by: After iteration: 0+10=10, 10+20=30, 30+30=60.

How It Works:
• Python follows the rule implied by: This is the accumulator pattern: initialize total to 0, then add each element.
• The outcome you observe follows from: The manual pattern is essential when you need custom logic during accumulation.

Step-by-Step Execution:
1. Start from the construct described in: This is the accumulator pattern: initialize total to 0, then add each element.
2. Resolve the subparts implied by: After iteration: 0+10=10, 10+20=30, 30+30=60.
3. Apply the core semantics highlighted in: The built-in sum() does the same thing.
4. Confirm the final result aligns with: The manual pattern is essential when you need custom logic during accumulation.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: After iteration: 0+10=10, 10+20=30, 30+30=60.
2. Apply the construct’s main rule next, matching: This is the accumulator pattern: initialize total to 0, then add each element.
3. Produce any intermediate values that The manual pattern is essential when you need custom logic during accumulation. relies on
4. Finish by returning/assembling the final output named by: The manual pattern is essential when you need custom logic during accumulation.
5. Use the result only after the full construct has completed, per: This is the accumulator pattern: initialize total to 0, then add each element.

Common Use Cases:
• Teaching this behavior using the mental model: This is the accumulator pattern: initialize total to 0, then add each element.
• Debugging when the observed value should match the expectation in: The manual pattern is essential when you need custom logic during accumulation.

Edge Cases:
• If inputs vary from the situation described in: After iteration: 0+10=10, 10+20=30, 30+30=60., the behavior can change.
• When the construct’s assumptions differ, the rule in: The built-in sum() does the same thing. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: The manual pattern is essential when you need custom logic during accumulation..
• When performance matters, prefer the simplest pattern that still implements: This is the accumulator pattern: initialize total to 0, then add each element..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This is the accumulator pattern: initialize total to 0, then add each element..

Notes:
• For maintainable code, make the intent behind: After iteration: 0+10=10, 10+20=30, 30+30=60. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q37: Early return pattern
  (_i: number) => ({
    q: `What does f([1, 3, 4, 6]) return?\ndef f(lst):\n    for x in lst:\n        if x % 2 == 0:\n            return x\n    return None`,
    o: ["4", "6", "None", "[4, 6]"],
    c: 0,
    e: "return inside a loop exits the function immediately on the first even number.",
    de: `The early return pattern exits the function as soon as a condition is met. The loop checks 1 (odd), 3 (odd), 4 (even) → returns 4 immediately without checking 6. This is more efficient than collecting all matches when you only need the first.

Key Concepts:
• This is more efficient than collecting all matches when you only need the first.

Key Distinctions:
• This question’s focus is best captured by: The early return pattern exits the function as soon as a condition is met.
• The contrast that matters for correctness is summarized by: The loop checks 1 (odd), 3 (odd), 4 (even) → returns 4 immediately without checking 6.

How It Works:
• Python follows the rule implied by: The early return pattern exits the function as soon as a condition is met.
• The outcome you observe follows from: This is more efficient than collecting all matches when you only need the first.

Step-by-Step Execution:
1. Start from the construct described in: The early return pattern exits the function as soon as a condition is met.
2. Resolve the subparts implied by: The loop checks 1 (odd), 3 (odd), 4 (even) → returns 4 immediately without checking 6.
3. Apply the core semantics highlighted in: This is more efficient than collecting all matches when you only need the first.
4. Confirm the final result aligns with: This is more efficient than collecting all matches when you only need the first.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The loop checks 1 (odd), 3 (odd), 4 (even) → returns 4 immediately without checking 6.
2. Apply the construct’s main rule next, matching: The early return pattern exits the function as soon as a condition is met.
3. Produce any intermediate values that This is more efficient than collecting all matches when you only need the first. relies on
4. Finish by returning/assembling the final output named by: This is more efficient than collecting all matches when you only need the first.
5. Use the result only after the full construct has completed, per: The early return pattern exits the function as soon as a condition is met.

Common Use Cases:
• Teaching this behavior using the mental model: The early return pattern exits the function as soon as a condition is met.
• Debugging when the observed value should match the expectation in: This is more efficient than collecting all matches when you only need the first.

Edge Cases:
• If inputs vary from the situation described in: The loop checks 1 (odd), 3 (odd), 4 (even) → returns 4 immediately without checking 6., the behavior can change.
• When the construct’s assumptions differ, the rule in: This is more efficient than collecting all matches when you only need the first. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This is more efficient than collecting all matches when you only need the first..
• When performance matters, prefer the simplest pattern that still implements: The early return pattern exits the function as soon as a condition is met..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The early return pattern exits the function as soon as a condition is met..

Notes:
• For maintainable code, make the intent behind: The loop checks 1 (odd), 3 (odd), 4 (even) → returns 4 immediately without checking 6. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q38: Filtering with comprehension
  (_i: number) => ({
    q: `What is [x for x in range(10) if x % 3 == 0]?`,
    o: ["[0, 3, 6, 9]", "[3, 6, 9]", "[1, 2, 4, 5, 7, 8]", "[0, 3, 6]"],
    c: 0,
    e: "Multiples of 3 from 0-9: 0, 3, 6, 9.",
    de: `List comprehensions with an if clause filter elements. range(10) produces 0-9; x % 3 == 0 keeps multiples of 3. Note that 0 is included because 0 % 3 == 0. Comprehensions are more concise and slightly faster than the equivalent loop-and-append.

Key Concepts:
• Comprehensions are more concise and slightly faster than the equivalent loop-and-append.

Key Distinctions:
• This question’s focus is best captured by: List comprehensions with an if clause filter elements.
• The contrast that matters for correctness is summarized by: range(10) produces 0-9; x % 3 == 0 keeps multiples of 3.

How It Works:
• Python follows the rule implied by: List comprehensions with an if clause filter elements.
• The outcome you observe follows from: Comprehensions are more concise and slightly faster than the equivalent loop-and-append.

Step-by-Step Execution:
1. Start from the construct described in: List comprehensions with an if clause filter elements.
2. Resolve the subparts implied by: range(10) produces 0-9; x % 3 == 0 keeps multiples of 3.
3. Apply the core semantics highlighted in: Note that 0 is included because 0 % 3 == 0.
4. Confirm the final result aligns with: Comprehensions are more concise and slightly faster than the equivalent loop-and-append.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: range(10) produces 0-9; x % 3 == 0 keeps multiples of 3.
2. Apply the construct’s main rule next, matching: List comprehensions with an if clause filter elements.
3. Produce any intermediate values that Comprehensions are more concise and slightly faster than the equivalent loop-and-append. relies on
4. Finish by returning/assembling the final output named by: Comprehensions are more concise and slightly faster than the equivalent loop-and-append.
5. Use the result only after the full construct has completed, per: List comprehensions with an if clause filter elements.

Common Use Cases:
• Teaching this behavior using the mental model: List comprehensions with an if clause filter elements.
• Debugging when the observed value should match the expectation in: Comprehensions are more concise and slightly faster than the equivalent loop-and-append.

Edge Cases:
• If inputs vary from the situation described in: range(10) produces 0-9; x % 3 == 0 keeps multiples of 3., the behavior can change.
• When the construct’s assumptions differ, the rule in: Note that 0 is included because 0 % 3 == 0. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Comprehensions are more concise and slightly faster than the equivalent loop-and-append..
• When performance matters, prefer the simplest pattern that still implements: List comprehensions with an if clause filter elements..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: List comprehensions with an if clause filter elements..

Notes:
• For maintainable code, make the intent behind: range(10) produces 0-9; x % 3 == 0 keeps multiples of 3. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q39: Processing text lines
  (_i: number) => ({
    q: `What is total?\nlines = ["3", "5", "7"]\ntotal = 0\nfor line in lines:\n    total += int(line)\ntotal`,
    o: ["15", "'357'", "3", "Error"],
    c: 0,
    e: "Each string is converted to int: 3 + 5 + 7 = 15.",
    de: `This simulates reading numeric data from text lines. Each string is converted with int() before accumulation. Without int(), using += on strings would concatenate to '357'. This parse-and-accumulate pattern is fundamental for text-based data processing.

Key Concepts:
• This parse-and-accumulate pattern is fundamental for text-based data processing.

Key Distinctions:
• This question’s focus is best captured by: This simulates reading numeric data from text lines.
• The contrast that matters for correctness is summarized by: Each string is converted with int() before accumulation.

How It Works:
• Python follows the rule implied by: This simulates reading numeric data from text lines.
• The outcome you observe follows from: This parse-and-accumulate pattern is fundamental for text-based data processing.

Step-by-Step Execution:
1. Start from the construct described in: This simulates reading numeric data from text lines.
2. Resolve the subparts implied by: Each string is converted with int() before accumulation.
3. Apply the core semantics highlighted in: Without int(), using += on strings would concatenate to '357'.
4. Confirm the final result aligns with: This parse-and-accumulate pattern is fundamental for text-based data processing.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Each string is converted with int() before accumulation.
2. Apply the construct’s main rule next, matching: This simulates reading numeric data from text lines.
3. Produce any intermediate values that This parse-and-accumulate pattern is fundamental for text-based data processing. relies on
4. Finish by returning/assembling the final output named by: This parse-and-accumulate pattern is fundamental for text-based data processing.
5. Use the result only after the full construct has completed, per: This simulates reading numeric data from text lines.

Common Use Cases:
• Teaching this behavior using the mental model: This simulates reading numeric data from text lines.
• Debugging when the observed value should match the expectation in: This parse-and-accumulate pattern is fundamental for text-based data processing.

Edge Cases:
• If inputs vary from the situation described in: Each string is converted with int() before accumulation., the behavior can change.
• When the construct’s assumptions differ, the rule in: Without int(), using += on strings would concatenate to '357'. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This parse-and-accumulate pattern is fundamental for text-based data processing..
• When performance matters, prefer the simplest pattern that still implements: This simulates reading numeric data from text lines..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This simulates reading numeric data from text lines..

Notes:
• For maintainable code, make the intent behind: Each string is converted with int() before accumulation. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q40: Creating adjacent pairs
  (_i: number) => ({
    q: `What is pairs?\nnums = [10, 20, 30, 40]\npairs = []\nfor i in range(len(nums) - 1):\n    pairs.append((nums[i], nums[i+1]))\npairs`,
    o: ["[(10, 20), (20, 30), (30, 40)]", "[(10, 40)]", "[(10, 20), (30, 40)]", "Error"],
    c: 0,
    e: "Each element is paired with its neighbor, producing sliding pairs.",
    de: `range(len(nums) - 1) gives indices 0, 1, 2 (stopping one short to avoid IndexError). At each index, adjacent elements are paired: (10,20), (20,30), (30,40). This sliding window pattern is useful for computing differences or comparing consecutive elements.

Key Concepts:
• This sliding window pattern is useful for computing differences or comparing consecutive elements.

Key Distinctions:
• This question’s focus is best captured by: range(len(nums) - 1) gives indices 0, 1, 2 (stopping one short to avoid IndexError).
• The contrast that matters for correctness is summarized by: At each index, adjacent elements are paired: (10,20), (20,30), (30,40).

How It Works:
• Python follows the rule implied by: range(len(nums) - 1) gives indices 0, 1, 2 (stopping one short to avoid IndexError).
• The outcome you observe follows from: This sliding window pattern is useful for computing differences or comparing consecutive elements.

Step-by-Step Execution:
1. Start from the construct described in: range(len(nums) - 1) gives indices 0, 1, 2 (stopping one short to avoid IndexError).
2. Resolve the subparts implied by: At each index, adjacent elements are paired: (10,20), (20,30), (30,40).
3. Apply the core semantics highlighted in: This sliding window pattern is useful for computing differences or comparing consecutive elements.
4. Confirm the final result aligns with: This sliding window pattern is useful for computing differences or comparing consecutive elements.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: At each index, adjacent elements are paired: (10,20), (20,30), (30,40).
2. Apply the construct’s main rule next, matching: range(len(nums) - 1) gives indices 0, 1, 2 (stopping one short to avoid IndexError).
3. Produce any intermediate values that This sliding window pattern is useful for computing differences or comparing consecutive elements. relies on
4. Finish by returning/assembling the final output named by: This sliding window pattern is useful for computing differences or comparing consecutive elements.
5. Use the result only after the full construct has completed, per: range(len(nums) - 1) gives indices 0, 1, 2 (stopping one short to avoid IndexError).

Common Use Cases:
• Teaching this behavior using the mental model: range(len(nums) - 1) gives indices 0, 1, 2 (stopping one short to avoid IndexError).
• Debugging when the observed value should match the expectation in: This sliding window pattern is useful for computing differences or comparing consecutive elements.

Edge Cases:
• If inputs vary from the situation described in: At each index, adjacent elements are paired: (10,20), (20,30), (30,40)., the behavior can change.
• When the construct’s assumptions differ, the rule in: This sliding window pattern is useful for computing differences or comparing consecutive elements. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This sliding window pattern is useful for computing differences or comparing consecutive elements..
• When performance matters, prefer the simplest pattern that still implements: range(len(nums) - 1) gives indices 0, 1, 2 (stopping one short to avoid IndexError)..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: range(len(nums) - 1) gives indices 0, 1, 2 (stopping one short to avoid IndexError)..

Notes:
• For maintainable code, make the intent behind: At each index, adjacent elements are paired: (10,20), (20,30), (30,40). explicit (and test it with inputs like those in this prompt).`
  }),
  // Q41: Linear search with enumerate
  (_i: number) => ({
    q: `What does f(["cat", "dog", "bird"], "dog") return?\ndef f(lst, val):\n    for i, x in enumerate(lst):\n        if x == val:\n            return i\n    return -1`,
    o: ["1", "0", "2", "-1"],
    c: 0,
    e: "enumerate gives (0,'cat'), (1,'dog') — 'dog' found at index 1.",
    de: `This implements linear search using enumerate to track the index. When x == 'dog' at i=1, it returns 1 immediately. If no match, -1 is returned. This is equivalent to lst.index(val) except it returns -1 instead of raising ValueError on missing items.

Key Concepts:
• This is equivalent to lst.index(val) except it returns -1 instead of raising ValueError on missing items.

Key Distinctions:
• This question’s focus is best captured by: This implements linear search using enumerate to track the index.
• The contrast that matters for correctness is summarized by: When x == 'dog' at i=1, it returns 1 immediately.

How It Works:
• Python follows the rule implied by: This implements linear search using enumerate to track the index.
• The outcome you observe follows from: This is equivalent to lst.index(val) except it returns -1 instead of raising ValueError on missing items.

Step-by-Step Execution:
1. Start from the construct described in: This implements linear search using enumerate to track the index.
2. Resolve the subparts implied by: When x == 'dog' at i=1, it returns 1 immediately.
3. Apply the core semantics highlighted in: If no match, -1 is returned.
4. Confirm the final result aligns with: This is equivalent to lst.index(val) except it returns -1 instead of raising ValueError on missing items.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: When x == 'dog' at i=1, it returns 1 immediately.
2. Apply the construct’s main rule next, matching: This implements linear search using enumerate to track the index.
3. Produce any intermediate values that This is equivalent to lst.index(val) except it returns -1 instead of raising ValueError on missing items. relies on
4. Finish by returning/assembling the final output named by: This is equivalent to lst.index(val) except it returns -1 instead of raising ValueError on missing items.
5. Use the result only after the full construct has completed, per: This implements linear search using enumerate to track the index.

Common Use Cases:
• Teaching this behavior using the mental model: This implements linear search using enumerate to track the index.
• Debugging when the observed value should match the expectation in: This is equivalent to lst.index(val) except it returns -1 instead of raising ValueError on missing items.

Edge Cases:
• If inputs vary from the situation described in: When x == 'dog' at i=1, it returns 1 immediately., the behavior can change.
• When the construct’s assumptions differ, the rule in: If no match, -1 is returned. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This is equivalent to lst.index(val) except it returns -1 instead of raising ValueError on missing items..
• When performance matters, prefer the simplest pattern that still implements: This implements linear search using enumerate to track the index..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This implements linear search using enumerate to track the index..

Notes:
• For maintainable code, make the intent behind: When x == 'dog' at i=1, it returns 1 immediately. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q42: Walrus operator in loop
  (_i: number) => ({
    q: `What is results?\nresults = []\nfor x in range(6):\n    if (y := x ** 2) > 10:\n        results.append(y)\nresults`,
    o: ["[16, 25]", "[9, 16, 25]", "[4, 5]", "[0, 1, 4, 9, 16, 25]"],
    c: 0,
    e: "The walrus operator assigns x² to y; only 16 (x=4) and 25 (x=5) exceed 10.",
    de: `The walrus operator (:=) assigns and evaluates in one expression. For each x in 0-5, y is assigned x²: 0, 1, 4, 9, 16, 25. Only 16 and 25 exceed 10, so results = [16, 25]. The walrus operator (Python 3.8+) is ideal for compute-then-test patterns.

Key Concepts:
• The walrus operator (Python 3.8+) is ideal for compute-then-test patterns.

Key Distinctions:
• This question’s focus is best captured by: The walrus operator (:=) assigns and evaluates in one expression.
• The contrast that matters for correctness is summarized by: For each x in 0-5, y is assigned x²: 0, 1, 4, 9, 16, 25.

How It Works:
• Python follows the rule implied by: The walrus operator (:=) assigns and evaluates in one expression.
• The outcome you observe follows from: The walrus operator (Python 3.8+) is ideal for compute-then-test patterns.

Step-by-Step Execution:
1. Start from the construct described in: The walrus operator (:=) assigns and evaluates in one expression.
2. Resolve the subparts implied by: For each x in 0-5, y is assigned x²: 0, 1, 4, 9, 16, 25.
3. Apply the core semantics highlighted in: Only 16 and 25 exceed 10, so results = [16, 25].
4. Confirm the final result aligns with: The walrus operator (Python 3.8+) is ideal for compute-then-test patterns.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: For each x in 0-5, y is assigned x²: 0, 1, 4, 9, 16, 25.
2. Apply the construct’s main rule next, matching: The walrus operator (:=) assigns and evaluates in one expression.
3. Produce any intermediate values that The walrus operator (Python 3.8+) is ideal for compute-then-test patterns. relies on
4. Finish by returning/assembling the final output named by: The walrus operator (Python 3.8+) is ideal for compute-then-test patterns.
5. Use the result only after the full construct has completed, per: The walrus operator (:=) assigns and evaluates in one expression.

Common Use Cases:
• Teaching this behavior using the mental model: The walrus operator (:=) assigns and evaluates in one expression.
• Debugging when the observed value should match the expectation in: The walrus operator (Python 3.8+) is ideal for compute-then-test patterns.

Edge Cases:
• If inputs vary from the situation described in: For each x in 0-5, y is assigned x²: 0, 1, 4, 9, 16, 25., the behavior can change.
• When the construct’s assumptions differ, the rule in: Only 16 and 25 exceed 10, so results = [16, 25]. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: The walrus operator (Python 3.8+) is ideal for compute-then-test patterns..
• When performance matters, prefer the simplest pattern that still implements: The walrus operator (:=) assigns and evaluates in one expression..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The walrus operator (:=) assigns and evaluates in one expression..

Notes:
• For maintainable code, make the intent behind: For each x in 0-5, y is assigned x²: 0, 1, 4, 9, 16, 25. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q43: Calculated range bounds
  (_i: number) => ({
    q: `What is result?\nn = 3\nresult = []\nfor i in range(n * n):\n    if i % n == 0:\n        result.append(i)\nresult`,
    o: ["[0, 3, 6]", "[3, 6, 9]", "[0, 1, 2]", "[1, 4, 7]"],
    c: 0,
    e: "range(9): only 0, 3, 6 are divisible by 3.",
    de: `n*n = 9, so range(9) yields 0-8. The filter i%3==0 keeps multiples of 3: 0, 3, 6. Note 9 is excluded because range is exclusive. Using calculated bounds with modulo filter is common for generating grid coordinates or periodic sequences.

Key Concepts:
• Using calculated bounds with modulo filter is common for generating grid coordinates or periodic sequences.

Key Distinctions:
• This question’s focus is best captured by: n*n = 9, so range(9) yields 0-8.
• The contrast that matters for correctness is summarized by: The filter i%3==0 keeps multiples of 3: 0, 3, 6.

How It Works:
• Python follows the rule implied by: n*n = 9, so range(9) yields 0-8.
• The outcome you observe follows from: Using calculated bounds with modulo filter is common for generating grid coordinates or periodic sequences.

Step-by-Step Execution:
1. Start from the construct described in: n*n = 9, so range(9) yields 0-8.
2. Resolve the subparts implied by: The filter i%3==0 keeps multiples of 3: 0, 3, 6.
3. Apply the core semantics highlighted in: Note 9 is excluded because range is exclusive.
4. Confirm the final result aligns with: Using calculated bounds with modulo filter is common for generating grid coordinates or periodic sequences.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The filter i%3==0 keeps multiples of 3: 0, 3, 6.
2. Apply the construct’s main rule next, matching: n*n = 9, so range(9) yields 0-8.
3. Produce any intermediate values that Using calculated bounds with modulo filter is common for generating grid coordinates or periodic sequences. relies on
4. Finish by returning/assembling the final output named by: Using calculated bounds with modulo filter is common for generating grid coordinates or periodic sequences.
5. Use the result only after the full construct has completed, per: n*n = 9, so range(9) yields 0-8.

Common Use Cases:
• Teaching this behavior using the mental model: n*n = 9, so range(9) yields 0-8.
• Debugging when the observed value should match the expectation in: Using calculated bounds with modulo filter is common for generating grid coordinates or periodic sequences.

Edge Cases:
• If inputs vary from the situation described in: The filter i%3==0 keeps multiples of 3: 0, 3, 6., the behavior can change.
• When the construct’s assumptions differ, the rule in: Note 9 is excluded because range is exclusive. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Using calculated bounds with modulo filter is common for generating grid coordinates or periodic sequences..
• When performance matters, prefer the simplest pattern that still implements: n*n = 9, so range(9) yields 0-8..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: n*n = 9, so range(9) yields 0-8..

Notes:
• For maintainable code, make the intent behind: The filter i%3==0 keeps multiples of 3: 0, 3, 6. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q44: try/except inside loop
  (_i: number) => ({
    q: `What is nums?\nvalues = ["1", "two", "3"]\nnums = []\nfor v in values:\n    try:\n        nums.append(int(v))\n    except ValueError:\n        pass\nnums`,
    o: ["[1, 3]", "['1', '3']", "[1, 'two', 3]", "Error"],
    c: 0,
    e: "int('two') raises ValueError which is caught; only valid ints kept.",
    de: `try/except inside a loop provides per-element error handling. int('1')=1 succeeds, int('two') raises ValueError (caught, skipped), int('3')=3 succeeds. Result: [1, 3]. This pattern is essential for processing dirty data where some values may be invalid.

Key Concepts:
• This pattern is essential for processing dirty data where some values may be invalid.

Key Distinctions:
• This question’s focus is best captured by: try/except inside a loop provides per-element error handling.
• The contrast that matters for correctness is summarized by: int('1')=1 succeeds, int('two') raises ValueError (caught, skipped), int('3')=3 succeeds.

How It Works:
• Python follows the rule implied by: try/except inside a loop provides per-element error handling.
• The outcome you observe follows from: This pattern is essential for processing dirty data where some values may be invalid.

Step-by-Step Execution:
1. Start from the construct described in: try/except inside a loop provides per-element error handling.
2. Resolve the subparts implied by: int('1')=1 succeeds, int('two') raises ValueError (caught, skipped), int('3')=3 succeeds.
3. Apply the core semantics highlighted in: Result: [1, 3].
4. Confirm the final result aligns with: This pattern is essential for processing dirty data where some values may be invalid.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: int('1')=1 succeeds, int('two') raises ValueError (caught, skipped), int('3')=3 succeeds.
2. Apply the construct’s main rule next, matching: try/except inside a loop provides per-element error handling.
3. Produce any intermediate values that This pattern is essential for processing dirty data where some values may be invalid. relies on
4. Finish by returning/assembling the final output named by: This pattern is essential for processing dirty data where some values may be invalid.
5. Use the result only after the full construct has completed, per: try/except inside a loop provides per-element error handling.

Common Use Cases:
• Teaching this behavior using the mental model: try/except inside a loop provides per-element error handling.
• Debugging when the observed value should match the expectation in: This pattern is essential for processing dirty data where some values may be invalid.

Edge Cases:
• If inputs vary from the situation described in: int('1')=1 succeeds, int('two') raises ValueError (caught, skipped), int('3')=3 succeeds., the behavior can change.
• When the construct’s assumptions differ, the rule in: Result: [1, 3]. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This pattern is essential for processing dirty data where some values may be invalid..
• When performance matters, prefer the simplest pattern that still implements: try/except inside a loop provides per-element error handling..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: try/except inside a loop provides per-element error handling..

Notes:
• For maintainable code, make the intent behind: int('1')=1 succeeds, int('two') raises ValueError (caught, skipped), int('3')=3 succeeds. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q45: enumerate to build dict
  (_i: number) => ({
    q: `What is result?\nresult = {}\nfor idx, char in enumerate("abc"):\n    result[char] = idx\nresult`,
    o: ["{'a': 0, 'b': 1, 'c': 2}", "{0: 'a', 1: 'b', 2: 'c'}", "['a', 'b', 'c']", "Error"],
    c: 0,
    e: "enumerate gives (0,'a'), (1,'b'), (2,'c'); maps each char to its index.",
    de: `enumerate('abc') yields (0,'a'), (1,'b'), (2,'c'). The unpacking assigns idx and char, then result[char] = idx builds a dict mapping characters to their indices. Swapping to result[idx] = char would produce {0:'a', 1:'b', 2:'c'}.

Key Concepts:
• Swapping to result[idx] = char would produce {0:'a', 1:'b', 2:'c'}.

Key Distinctions:
• This question’s focus is best captured by: enumerate('abc') yields (0,'a'), (1,'b'), (2,'c').
• The contrast that matters for correctness is summarized by: The unpacking assigns idx and char, then result[char] = idx builds a dict mapping characters to their indices.

How It Works:
• Python follows the rule implied by: enumerate('abc') yields (0,'a'), (1,'b'), (2,'c').
• The outcome you observe follows from: Swapping to result[idx] = char would produce {0:'a', 1:'b', 2:'c'}.

Step-by-Step Execution:
1. Start from the construct described in: enumerate('abc') yields (0,'a'), (1,'b'), (2,'c').
2. Resolve the subparts implied by: The unpacking assigns idx and char, then result[char] = idx builds a dict mapping characters to their indices.
3. Apply the core semantics highlighted in: Swapping to result[idx] = char would produce {0:'a', 1:'b', 2:'c'}.
4. Confirm the final result aligns with: Swapping to result[idx] = char would produce {0:'a', 1:'b', 2:'c'}.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The unpacking assigns idx and char, then result[char] = idx builds a dict mapping characters to their indices.
2. Apply the construct’s main rule next, matching: enumerate('abc') yields (0,'a'), (1,'b'), (2,'c').
3. Produce any intermediate values that Swapping to result[idx] = char would produce {0:'a', 1:'b', 2:'c'}. relies on
4. Finish by returning/assembling the final output named by: Swapping to result[idx] = char would produce {0:'a', 1:'b', 2:'c'}.
5. Use the result only after the full construct has completed, per: enumerate('abc') yields (0,'a'), (1,'b'), (2,'c').

Common Use Cases:
• Teaching this behavior using the mental model: enumerate('abc') yields (0,'a'), (1,'b'), (2,'c').
• Debugging when the observed value should match the expectation in: Swapping to result[idx] = char would produce {0:'a', 1:'b', 2:'c'}.

Edge Cases:
• If inputs vary from the situation described in: The unpacking assigns idx and char, then result[char] = idx builds a dict mapping characters to their indices., the behavior can change.
• When the construct’s assumptions differ, the rule in: Swapping to result[idx] = char would produce {0:'a', 1:'b', 2:'c'}. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Swapping to result[idx] = char would produce {0:'a', 1:'b', 2:'c'}..
• When performance matters, prefer the simplest pattern that still implements: enumerate('abc') yields (0,'a'), (1,'b'), (2,'c')..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: enumerate('abc') yields (0,'a'), (1,'b'), (2,'c')..

Notes:
• For maintainable code, make the intent behind: The unpacking assigns idx and char, then result[char] = idx builds a dict mapping characters to their indices. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q46: join vs concatenation
  (_i: number) => ({
    q: `What is "-".join(["hello", "world"])?`,
    o: ["'hello-world'", "'helloworld'", "'hello - world'", "'hello, world'"],
    c: 0,
    e: "join() inserts the separator between each element.",
    de: `str.join() concatenates list elements with the separator between them. '-'.join(['hello', 'world']) produces 'hello-world'. join() is significantly faster than += in a loop because strings are immutable — each += creates a new object, while join allocates once.

Key Concepts:
• join() is significantly faster than += in a loop because strings are immutable — each += creates a new object, while join allocates once.

Key Distinctions:
• This question’s focus is best captured by: str.join() concatenates list elements with the separator between them.
• The contrast that matters for correctness is summarized by: '-'.join(['hello', 'world']) produces 'hello-world'.

How It Works:
• Python follows the rule implied by: str.join() concatenates list elements with the separator between them.
• The outcome you observe follows from: join() is significantly faster than += in a loop because strings are immutable — each += creates a new object, while join allocates once.

Step-by-Step Execution:
1. Start from the construct described in: str.join() concatenates list elements with the separator between them.
2. Resolve the subparts implied by: '-'.join(['hello', 'world']) produces 'hello-world'.
3. Apply the core semantics highlighted in: join() is significantly faster than += in a loop because strings are immutable — each += creates a new object, while join allocates once.
4. Confirm the final result aligns with: join() is significantly faster than += in a loop because strings are immutable — each += creates a new object, while join allocates once.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: '-'.join(['hello', 'world']) produces 'hello-world'.
2. Apply the construct’s main rule next, matching: str.join() concatenates list elements with the separator between them.
3. Produce any intermediate values that join() is significantly faster than += in a loop because strings are immutable — each += creates a new object, while join allocates once. relies on
4. Finish by returning/assembling the final output named by: join() is significantly faster than += in a loop because strings are immutable — each += creates a new object, while join allocates once.
5. Use the result only after the full construct has completed, per: str.join() concatenates list elements with the separator between them.

Common Use Cases:
• Teaching this behavior using the mental model: str.join() concatenates list elements with the separator between them.
• Debugging when the observed value should match the expectation in: join() is significantly faster than += in a loop because strings are immutable — each += creates a new object, while join allocates once.

Edge Cases:
• If inputs vary from the situation described in: '-'.join(['hello', 'world']) produces 'hello-world'., the behavior can change.
• When the construct’s assumptions differ, the rule in: join() is significantly faster than += in a loop because strings are immutable — each += creates a new object, while join allocates once. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: join() is significantly faster than += in a loop because strings are immutable — each += creates a new object, while join allocates once..
• When performance matters, prefer the simplest pattern that still implements: str.join() concatenates list elements with the separator between them..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: str.join() concatenates list elements with the separator between them..

Notes:
• For maintainable code, make the intent behind: '-'.join(['hello', 'world']) produces 'hello-world'. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q47: Nested break exits only inner loop
  (_i: number) => ({
    q: `What is count?\ncount = 0\nfor i in range(3):\n    for j in range(3):\n        if j == 1:\n            break\n    count += 1\ncount`,
    o: ["3", "1", "9", "0"],
    c: 0,
    e: "break exits only the inner loop; the outer loop runs all 3 iterations.",
    de: `break only exits the innermost enclosing loop. The inner for-j loop breaks at j==1, but count += 1 is in the outer loop, so it runs every outer iteration. The outer loop runs 3 times, so count = 3. Python's break never exits more than one loop level.

Key Concepts:
• Python's break never exits more than one loop level.

Key Distinctions:
• This question’s focus is best captured by: break only exits the innermost enclosing loop.
• The contrast that matters for correctness is summarized by: The inner for-j loop breaks at j==1, but count += 1 is in the outer loop, so it runs every outer iteration.

How It Works:
• Python follows the rule implied by: break only exits the innermost enclosing loop.
• The outcome you observe follows from: Python's break never exits more than one loop level.

Step-by-Step Execution:
1. Start from the construct described in: break only exits the innermost enclosing loop.
2. Resolve the subparts implied by: The inner for-j loop breaks at j==1, but count += 1 is in the outer loop, so it runs every outer iteration.
3. Apply the core semantics highlighted in: The outer loop runs 3 times, so count = 3.
4. Confirm the final result aligns with: Python's break never exits more than one loop level.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The inner for-j loop breaks at j==1, but count += 1 is in the outer loop, so it runs every outer iteration.
2. Apply the construct’s main rule next, matching: break only exits the innermost enclosing loop.
3. Produce any intermediate values that Python's break never exits more than one loop level. relies on
4. Finish by returning/assembling the final output named by: Python's break never exits more than one loop level.
5. Use the result only after the full construct has completed, per: break only exits the innermost enclosing loop.

Common Use Cases:
• Teaching this behavior using the mental model: break only exits the innermost enclosing loop.
• Debugging when the observed value should match the expectation in: Python's break never exits more than one loop level.

Edge Cases:
• If inputs vary from the situation described in: The inner for-j loop breaks at j==1, but count += 1 is in the outer loop, so it runs every outer iteration., the behavior can change.
• When the construct’s assumptions differ, the rule in: The outer loop runs 3 times, so count = 3. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Python's break never exits more than one loop level..
• When performance matters, prefer the simplest pattern that still implements: break only exits the innermost enclosing loop..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: break only exits the innermost enclosing loop..

Notes:
• For maintainable code, make the intent behind: The inner for-j loop breaks at j==1, but count += 1 is in the outer loop, so it runs every outer iteration. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q48: continue in nested loop
  (_i: number) => ({
    q: `What is count?\ncount = 0\nfor i in range(2):\n    for j in range(3):\n        if j == 1:\n            continue\n        count += 1\ncount`,
    o: ["4", "6", "2", "5"],
    c: 0,
    e: "continue skips j==1. Each outer iteration counts 2 (j=0 and j=2), total 2×2=4.",
    de: `continue skips the rest of the current iteration of the innermost loop. For each i (0 and 1), the inner loop: j=0 (count+1), j=1 (skip), j=2 (count+1) — 2 increments per outer iteration. 2 × 2 = 4. Like break, continue only affects the innermost loop.

Key Concepts:
• Like break, continue only affects the innermost loop.

Key Distinctions:
• This question’s focus is best captured by: continue skips the rest of the current iteration of the innermost loop.
• The contrast that matters for correctness is summarized by: For each i (0 and 1), the inner loop: j=0 (count+1), j=1 (skip), j=2 (count+1) — 2 increments per outer iteration.

How It Works:
• Python follows the rule implied by: continue skips the rest of the current iteration of the innermost loop.
• The outcome you observe follows from: Like break, continue only affects the innermost loop.

Step-by-Step Execution:
1. Start from the construct described in: continue skips the rest of the current iteration of the innermost loop.
2. Resolve the subparts implied by: For each i (0 and 1), the inner loop: j=0 (count+1), j=1 (skip), j=2 (count+1) — 2 increments per outer iteration.
3. Apply the core semantics highlighted in: 2 × 2 = 4.
4. Confirm the final result aligns with: Like break, continue only affects the innermost loop.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: For each i (0 and 1), the inner loop: j=0 (count+1), j=1 (skip), j=2 (count+1) — 2 increments per outer iteration.
2. Apply the construct’s main rule next, matching: continue skips the rest of the current iteration of the innermost loop.
3. Produce any intermediate values that Like break, continue only affects the innermost loop. relies on
4. Finish by returning/assembling the final output named by: Like break, continue only affects the innermost loop.
5. Use the result only after the full construct has completed, per: continue skips the rest of the current iteration of the innermost loop.

Common Use Cases:
• Teaching this behavior using the mental model: continue skips the rest of the current iteration of the innermost loop.
• Debugging when the observed value should match the expectation in: Like break, continue only affects the innermost loop.

Edge Cases:
• If inputs vary from the situation described in: For each i (0 and 1), the inner loop: j=0 (count+1), j=1 (skip), j=2 (count+1) — 2 increments per outer iteration., the behavior can change.
• When the construct’s assumptions differ, the rule in: 2 × 2 = 4. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Like break, continue only affects the innermost loop..
• When performance matters, prefer the simplest pattern that still implements: continue skips the rest of the current iteration of the innermost loop..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: continue skips the rest of the current iteration of the innermost loop..

Notes:
• For maintainable code, make the intent behind: For each i (0 and 1), the inner loop: j=0 (count+1), j=1 (skip), j=2 (count+1) — 2 increments per outer iteration. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q49: Sorted tuples with unpacking
  (_i: number) => ({
    q: `What is result?\npairs = [(3, "c"), (1, "a"), (2, "b")]\nresult = []\nfor k, v in sorted(pairs):\n    result.append(v)\nresult`,
    o: ["['a', 'b', 'c']", "['c', 'a', 'b']", "[(1,'a'),(2,'b'),(3,'c')]", "Error"],
    c: 0,
    e: "sorted() sorts tuples by first element; unpacking extracts values in order.",
    de: `sorted() sorts a list of tuples by the first element by default. sorted([(3,'c'),(1,'a'),(2,'b')]) → [(1,'a'),(2,'b'),(3,'c')]. Unpacking in the for loop extracts values 'a', 'b', 'c' in sorted order.

Key Concepts:
• Unpacking in the for loop extracts values 'a', 'b', 'c' in sorted order.

Key Distinctions:
• This question’s focus is best captured by: sorted() sorts a list of tuples by the first element by default.
• The contrast that matters for correctness is summarized by: sorted([(3,'c'),(1,'a'),(2,'b')]) → [(1,'a'),(2,'b'),(3,'c')].

How It Works:
• Python follows the rule implied by: sorted() sorts a list of tuples by the first element by default.
• The outcome you observe follows from: Unpacking in the for loop extracts values 'a', 'b', 'c' in sorted order.

Step-by-Step Execution:
1. Start from the construct described in: sorted() sorts a list of tuples by the first element by default.
2. Resolve the subparts implied by: sorted([(3,'c'),(1,'a'),(2,'b')]) → [(1,'a'),(2,'b'),(3,'c')].
3. Apply the core semantics highlighted in: Unpacking in the for loop extracts values 'a', 'b', 'c' in sorted order.
4. Confirm the final result aligns with: Unpacking in the for loop extracts values 'a', 'b', 'c' in sorted order.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: sorted([(3,'c'),(1,'a'),(2,'b')]) → [(1,'a'),(2,'b'),(3,'c')].
2. Apply the construct’s main rule next, matching: sorted() sorts a list of tuples by the first element by default.
3. Produce any intermediate values that Unpacking in the for loop extracts values 'a', 'b', 'c' in sorted order. relies on
4. Finish by returning/assembling the final output named by: Unpacking in the for loop extracts values 'a', 'b', 'c' in sorted order.
5. Use the result only after the full construct has completed, per: sorted() sorts a list of tuples by the first element by default.

Common Use Cases:
• Teaching this behavior using the mental model: sorted() sorts a list of tuples by the first element by default.
• Debugging when the observed value should match the expectation in: Unpacking in the for loop extracts values 'a', 'b', 'c' in sorted order.

Edge Cases:
• If inputs vary from the situation described in: sorted([(3,'c'),(1,'a'),(2,'b')]) → [(1,'a'),(2,'b'),(3,'c')]., the behavior can change.
• When the construct’s assumptions differ, the rule in: Unpacking in the for loop extracts values 'a', 'b', 'c' in sorted order. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Unpacking in the for loop extracts values 'a', 'b', 'c' in sorted order..
• When performance matters, prefer the simplest pattern that still implements: sorted() sorts a list of tuples by the first element by default..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: sorted() sorts a list of tuples by the first element by default..

Notes:
• For maintainable code, make the intent behind: sorted([(3,'c'),(1,'a'),(2,'b')]) → [(1,'a'),(2,'b'),(3,'c')]. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q50: Matrix transpose
  (_i: number) => ({
    q: `What is t?\nmatrix = [[1, 2], [3, 4]]\nt = []\nfor i in range(2):\n    row = []\n    for j in range(2):\n        row.append(matrix[j][i])\n    t.append(row)\nt`,
    o: ["[[1, 3], [2, 4]]", "[[1, 2], [3, 4]]", "[[4, 3], [2, 1]]", "Error"],
    c: 0,
    e: "Transpose swaps rows and columns: matrix[j][i] flips the indices.",
    de: `Matrix transpose swaps rows and columns. By iterating columns (i) then rows (j) and reading matrix[j][i], we flip the axes. Column 0: [matrix[0][0], matrix[1][0]] = [1, 3]. Column 1: [matrix[0][1], matrix[1][1]] = [2, 4]. Result: [[1, 3], [2, 4]].

Key Concepts:
• Result: [[1, 3], [2, 4]].

Key Distinctions:
• This question’s focus is best captured by: Matrix transpose swaps rows and columns.
• The contrast that matters for correctness is summarized by: By iterating columns (i) then rows (j) and reading matrix[j][i], we flip the axes.

How It Works:
• Python follows the rule implied by: Matrix transpose swaps rows and columns.
• The outcome you observe follows from: Result: [[1, 3], [2, 4]].

Step-by-Step Execution:
1. Start from the construct described in: Matrix transpose swaps rows and columns.
2. Resolve the subparts implied by: By iterating columns (i) then rows (j) and reading matrix[j][i], we flip the axes.
3. Apply the core semantics highlighted in: Column 0: [matrix[0][0], matrix[1][0]] = [1, 3].
4. Confirm the final result aligns with: Result: [[1, 3], [2, 4]].

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: By iterating columns (i) then rows (j) and reading matrix[j][i], we flip the axes.
2. Apply the construct’s main rule next, matching: Matrix transpose swaps rows and columns.
3. Produce any intermediate values that Result: [[1, 3], [2, 4]]. relies on
4. Finish by returning/assembling the final output named by: Result: [[1, 3], [2, 4]].
5. Use the result only after the full construct has completed, per: Matrix transpose swaps rows and columns.

Common Use Cases:
• Teaching this behavior using the mental model: Matrix transpose swaps rows and columns.
• Debugging when the observed value should match the expectation in: Result: [[1, 3], [2, 4]].

Edge Cases:
• If inputs vary from the situation described in: By iterating columns (i) then rows (j) and reading matrix[j][i], we flip the axes., the behavior can change.
• When the construct’s assumptions differ, the rule in: Column 0: [matrix[0][0], matrix[1][0]] = [1, 3]. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Result: [[1, 3], [2, 4]]..
• When performance matters, prefer the simplest pattern that still implements: Matrix transpose swaps rows and columns..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Matrix transpose swaps rows and columns..

Notes:
• For maintainable code, make the intent behind: By iterating columns (i) then rows (j) and reading matrix[j][i], we flip the axes. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q51: Multiple if clauses in comprehension
  (_i: number) => ({
    q: `What is [x for x in range(20) if x % 2 == 0 if x % 3 == 0]?`,
    o: ["[0, 6, 12, 18]", "[0, 2, 3, 6, 12, 18]", "[6, 12, 18]", "[0, 6, 12]"],
    c: 0,
    e: "Multiple if clauses act as AND: divisible by both 2 and 3.",
    de: `Multiple if clauses in a comprehension are combined with AND logic. Both conditions must be satisfied. x%2==0 AND x%3==0 means divisible by 6 (plus 0). From range(20): 0, 6, 12, 18 qualify.

Key Concepts:
• From range(20): 0, 6, 12, 18 qualify.

Key Distinctions:
• This question’s focus is best captured by: Multiple if clauses in a comprehension are combined with AND logic.
• The contrast that matters for correctness is summarized by: Both conditions must be satisfied.

How It Works:
• Python follows the rule implied by: Multiple if clauses in a comprehension are combined with AND logic.
• The outcome you observe follows from: From range(20): 0, 6, 12, 18 qualify.

Step-by-Step Execution:
1. Start from the construct described in: Multiple if clauses in a comprehension are combined with AND logic.
2. Resolve the subparts implied by: Both conditions must be satisfied.
3. Apply the core semantics highlighted in: x%2==0 AND x%3==0 means divisible by 6 (plus 0).
4. Confirm the final result aligns with: From range(20): 0, 6, 12, 18 qualify.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Both conditions must be satisfied.
2. Apply the construct’s main rule next, matching: Multiple if clauses in a comprehension are combined with AND logic.
3. Produce any intermediate values that From range(20): 0, 6, 12, 18 qualify. relies on
4. Finish by returning/assembling the final output named by: From range(20): 0, 6, 12, 18 qualify.
5. Use the result only after the full construct has completed, per: Multiple if clauses in a comprehension are combined with AND logic.

Common Use Cases:
• Teaching this behavior using the mental model: Multiple if clauses in a comprehension are combined with AND logic.
• Debugging when the observed value should match the expectation in: From range(20): 0, 6, 12, 18 qualify.

Edge Cases:
• If inputs vary from the situation described in: Both conditions must be satisfied., the behavior can change.
• When the construct’s assumptions differ, the rule in: x%2==0 AND x%3==0 means divisible by 6 (plus 0). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: From range(20): 0, 6, 12, 18 qualify..
• When performance matters, prefer the simplest pattern that still implements: Multiple if clauses in a comprehension are combined with AND logic..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Multiple if clauses in a comprehension are combined with AND logic..

Notes:
• For maintainable code, make the intent behind: Both conditions must be satisfied. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q52: Ternary expression in comprehension
  (_i: number) => ({
    q: `What is ["even" if x%2==0 else "odd" for x in range(4)]?`,
    o: ["['even','odd','even','odd']", "['odd','even','odd','even']", "['even','even','odd','odd']", "Error"],
    c: 0,
    e: "Ternary transforms each element: 0→even, 1→odd, 2→even, 3→odd.",
    de: `A ternary expression inside a comprehension transforms each element. 'even' if x%2==0 else 'odd' is placed BEFORE the for clause. If/else before for transforms; if after for filters. 0→even, 1→odd, 2→even, 3→odd.

Key Concepts:
• 0→even, 1→odd, 2→even, 3→odd.

Key Distinctions:
• This question’s focus is best captured by: A ternary expression inside a comprehension transforms each element.
• The contrast that matters for correctness is summarized by: 'even' if x%2==0 else 'odd' is placed BEFORE the for clause.

How It Works:
• Python follows the rule implied by: A ternary expression inside a comprehension transforms each element.
• The outcome you observe follows from: 0→even, 1→odd, 2→even, 3→odd.

Step-by-Step Execution:
1. Start from the construct described in: A ternary expression inside a comprehension transforms each element.
2. Resolve the subparts implied by: 'even' if x%2==0 else 'odd' is placed BEFORE the for clause.
3. Apply the core semantics highlighted in: If/else before for transforms; if after for filters.
4. Confirm the final result aligns with: 0→even, 1→odd, 2→even, 3→odd.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: 'even' if x%2==0 else 'odd' is placed BEFORE the for clause.
2. Apply the construct’s main rule next, matching: A ternary expression inside a comprehension transforms each element.
3. Produce any intermediate values that 0→even, 1→odd, 2→even, 3→odd. relies on
4. Finish by returning/assembling the final output named by: 0→even, 1→odd, 2→even, 3→odd.
5. Use the result only after the full construct has completed, per: A ternary expression inside a comprehension transforms each element.

Common Use Cases:
• Teaching this behavior using the mental model: A ternary expression inside a comprehension transforms each element.
• Debugging when the observed value should match the expectation in: 0→even, 1→odd, 2→even, 3→odd.

Edge Cases:
• If inputs vary from the situation described in: 'even' if x%2==0 else 'odd' is placed BEFORE the for clause., the behavior can change.
• When the construct’s assumptions differ, the rule in: If/else before for transforms; if after for filters. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: 0→even, 1→odd, 2→even, 3→odd..
• When performance matters, prefer the simplest pattern that still implements: A ternary expression inside a comprehension transforms each element..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: A ternary expression inside a comprehension transforms each element..

Notes:
• For maintainable code, make the intent behind: 'even' if x%2==0 else 'odd' is placed BEFORE the for clause. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q53: Running total
  (_i: number) => ({
    q: `What is running?\nnums = [1, 2, 3, 4]\ntotal = 0\nrunning = []\nfor n in nums:\n    total += n\n    running.append(total)\nrunning`,
    o: ["[1, 3, 6, 10]", "[1, 2, 3, 4]", "[10, 10, 10, 10]", "[4, 3, 2, 1]"],
    c: 0,
    e: "Cumulative sum: 1, 1+2=3, 3+3=6, 6+4=10.",
    de: `A running total accumulates values as the loop progresses. Each step: total adds the next element and appends the snapshot. 1→3→6→10. Also called prefix sum or cumulative sum. Used in financial balances, statistics, and prefix sum arrays.

Key Concepts:
• Used in financial balances, statistics, and prefix sum arrays.

Key Distinctions:
• This question’s focus is best captured by: A running total accumulates values as the loop progresses.
• The contrast that matters for correctness is summarized by: Each step: total adds the next element and appends the snapshot.

How It Works:
• Python follows the rule implied by: A running total accumulates values as the loop progresses.
• The outcome you observe follows from: Used in financial balances, statistics, and prefix sum arrays.

Step-by-Step Execution:
1. Start from the construct described in: A running total accumulates values as the loop progresses.
2. Resolve the subparts implied by: Each step: total adds the next element and appends the snapshot.
3. Apply the core semantics highlighted in: 1→3→6→10.
4. Confirm the final result aligns with: Used in financial balances, statistics, and prefix sum arrays.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Each step: total adds the next element and appends the snapshot.
2. Apply the construct’s main rule next, matching: A running total accumulates values as the loop progresses.
3. Produce any intermediate values that Used in financial balances, statistics, and prefix sum arrays. relies on
4. Finish by returning/assembling the final output named by: Used in financial balances, statistics, and prefix sum arrays.
5. Use the result only after the full construct has completed, per: A running total accumulates values as the loop progresses.

Common Use Cases:
• Teaching this behavior using the mental model: A running total accumulates values as the loop progresses.
• Debugging when the observed value should match the expectation in: Used in financial balances, statistics, and prefix sum arrays.

Edge Cases:
• If inputs vary from the situation described in: Each step: total adds the next element and appends the snapshot., the behavior can change.
• When the construct’s assumptions differ, the rule in: 1→3→6→10. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Used in financial balances, statistics, and prefix sum arrays..
• When performance matters, prefer the simplest pattern that still implements: A running total accumulates values as the loop progresses..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: A running total accumulates values as the loop progresses..

Notes:
• For maintainable code, make the intent behind: Each step: total adds the next element and appends the snapshot. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q54: Boolean flag pattern
  (_i: number) => ({
    q: `What is all_even?\nnums = [2, 4, 7, 8]\nall_even = True\nfor n in nums:\n    if n % 2 != 0:\n        all_even = False\n        break\nall_even`,
    o: ["False", "True", "None", "Error"],
    c: 0,
    e: "7 is odd → flag flipped to False and loop breaks.",
    de: `The boolean flag pattern starts with an assumption (all_even = True) and flips it when a counterexample is found. 2 and 4 pass, but 7 is odd → all_even = False, break. Element 8 is never checked. Equivalent to all(n%2==0 for n in nums).

Key Concepts:
• Equivalent to all(n%2==0 for n in nums).

Key Distinctions:
• This question’s focus is best captured by: The boolean flag pattern starts with an assumption (all_even = True) and flips it when a counterexample is found.
• The contrast that matters for correctness is summarized by: 2 and 4 pass, but 7 is odd → all_even = False, break.

How It Works:
• Python follows the rule implied by: The boolean flag pattern starts with an assumption (all_even = True) and flips it when a counterexample is found.
• The outcome you observe follows from: Equivalent to all(n%2==0 for n in nums).

Step-by-Step Execution:
1. Start from the construct described in: The boolean flag pattern starts with an assumption (all_even = True) and flips it when a counterexample is found.
2. Resolve the subparts implied by: 2 and 4 pass, but 7 is odd → all_even = False, break.
3. Apply the core semantics highlighted in: Element 8 is never checked.
4. Confirm the final result aligns with: Equivalent to all(n%2==0 for n in nums).

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: 2 and 4 pass, but 7 is odd → all_even = False, break.
2. Apply the construct’s main rule next, matching: The boolean flag pattern starts with an assumption (all_even = True) and flips it when a counterexample is found.
3. Produce any intermediate values that Equivalent to all(n%2==0 for n in nums). relies on
4. Finish by returning/assembling the final output named by: Equivalent to all(n%2==0 for n in nums).
5. Use the result only after the full construct has completed, per: The boolean flag pattern starts with an assumption (all_even = True) and flips it when a counterexample is found.

Common Use Cases:
• Teaching this behavior using the mental model: The boolean flag pattern starts with an assumption (all_even = True) and flips it when a counterexample is found.
• Debugging when the observed value should match the expectation in: Equivalent to all(n%2==0 for n in nums).

Edge Cases:
• If inputs vary from the situation described in: 2 and 4 pass, but 7 is odd → all_even = False, break., the behavior can change.
• When the construct’s assumptions differ, the rule in: Element 8 is never checked. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Equivalent to all(n%2==0 for n in nums)..
• When performance matters, prefer the simplest pattern that still implements: The boolean flag pattern starts with an assumption (all_even = True) and flips it when a counterexample is found..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The boolean flag pattern starts with an assumption (all_even = True) and flips it when a counterexample is found..

Notes:
• For maintainable code, make the intent behind: 2 and 4 pass, but 7 is odd → all_even = False, break. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q55: Counter dict with get()
  (_i: number) => ({
    q: `What is counts["a"]?\nword = "banana"\ncounts = {}\nfor ch in word:\n    counts[ch] = counts.get(ch, 0) + 1\ncounts["a"]`,
    o: ["3", "2", "1", "Error"],
    c: 0,
    e: "'banana' has 3 letter 'a's. dict.get(key, 0) avoids KeyError.",
    de: `The counter dict pattern uses dict.get(key, default) to safely initialize and increment. 'banana' has b=1, a=3, n=2. get() returns 0 for new keys, avoiding KeyError. Equivalent to collections.Counter(word). The most common dict building pattern in Python.

Key Concepts:
• The most common dict building pattern in Python.

Key Distinctions:
• This question’s focus is best captured by: The counter dict pattern uses dict.get(key, default) to safely initialize and increment.
• The contrast that matters for correctness is summarized by: 'banana' has b=1, a=3, n=2.

How It Works:
• Python follows the rule implied by: The counter dict pattern uses dict.get(key, default) to safely initialize and increment.
• The outcome you observe follows from: The most common dict building pattern in Python.

Step-by-Step Execution:
1. Start from the construct described in: The counter dict pattern uses dict.get(key, default) to safely initialize and increment.
2. Resolve the subparts implied by: 'banana' has b=1, a=3, n=2.
3. Apply the core semantics highlighted in: get() returns 0 for new keys, avoiding KeyError.
4. Confirm the final result aligns with: The most common dict building pattern in Python.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: 'banana' has b=1, a=3, n=2.
2. Apply the construct’s main rule next, matching: The counter dict pattern uses dict.get(key, default) to safely initialize and increment.
3. Produce any intermediate values that The most common dict building pattern in Python. relies on
4. Finish by returning/assembling the final output named by: The most common dict building pattern in Python.
5. Use the result only after the full construct has completed, per: The counter dict pattern uses dict.get(key, default) to safely initialize and increment.

Common Use Cases:
• Teaching this behavior using the mental model: The counter dict pattern uses dict.get(key, default) to safely initialize and increment.
• Debugging when the observed value should match the expectation in: The most common dict building pattern in Python.

Edge Cases:
• If inputs vary from the situation described in: 'banana' has b=1, a=3, n=2., the behavior can change.
• When the construct’s assumptions differ, the rule in: get() returns 0 for new keys, avoiding KeyError. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: The most common dict building pattern in Python..
• When performance matters, prefer the simplest pattern that still implements: The counter dict pattern uses dict.get(key, default) to safely initialize and increment..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The counter dict pattern uses dict.get(key, default) to safely initialize and increment..

Notes:
• For maintainable code, make the intent behind: 'banana' has b=1, a=3, n=2. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q56: Skip every other element
  (_i: number) => ({
    q: `What is result?\nlst = [10, 20, 30, 40, 50]\nresult = []\nfor i in range(0, len(lst), 2):\n    result.append(lst[i])\nresult`,
    o: ["[10, 30, 50]", "[20, 40]", "[10, 20, 30]", "[10, 50]"],
    c: 0,
    e: "range(0, 5, 2) gives indices 0, 2, 4.",
    de: `Using range() with step 2 generates every other index: 0, 2, 4. This selects alternating elements. Equivalent to lst[::2] (slice with step 2). Useful for processing alternating elements or downsampling data.

Key Concepts:
• Useful for processing alternating elements or downsampling data.

Key Distinctions:
• This question’s focus is best captured by: Using range() with step 2 generates every other index: 0, 2, 4.
• The contrast that matters for correctness is summarized by: This selects alternating elements.

How It Works:
• Python follows the rule implied by: Using range() with step 2 generates every other index: 0, 2, 4.
• The outcome you observe follows from: Useful for processing alternating elements or downsampling data.

Step-by-Step Execution:
1. Start from the construct described in: Using range() with step 2 generates every other index: 0, 2, 4.
2. Resolve the subparts implied by: This selects alternating elements.
3. Apply the core semantics highlighted in: Equivalent to lst[::2] (slice with step 2).
4. Confirm the final result aligns with: Useful for processing alternating elements or downsampling data.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: This selects alternating elements.
2. Apply the construct’s main rule next, matching: Using range() with step 2 generates every other index: 0, 2, 4.
3. Produce any intermediate values that Useful for processing alternating elements or downsampling data. relies on
4. Finish by returning/assembling the final output named by: Useful for processing alternating elements or downsampling data.
5. Use the result only after the full construct has completed, per: Using range() with step 2 generates every other index: 0, 2, 4.

Common Use Cases:
• Teaching this behavior using the mental model: Using range() with step 2 generates every other index: 0, 2, 4.
• Debugging when the observed value should match the expectation in: Useful for processing alternating elements or downsampling data.

Edge Cases:
• If inputs vary from the situation described in: This selects alternating elements., the behavior can change.
• When the construct’s assumptions differ, the rule in: Equivalent to lst[::2] (slice with step 2). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Useful for processing alternating elements or downsampling data..
• When performance matters, prefer the simplest pattern that still implements: Using range() with step 2 generates every other index: 0, 2, 4..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Using range() with step 2 generates every other index: 0, 2, 4..

Notes:
• For maintainable code, make the intent behind: This selects alternating elements. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q57: Reversed range
  (_i: number) => ({
    q: `What is list(range(5, 0, -1))?`,
    o: ["[5, 4, 3, 2, 1]", "[5, 4, 3, 2, 1, 0]", "[0, 1, 2, 3, 4, 5]", "[4, 3, 2, 1, 0]"],
    c: 0,
    e: "range(5, 0, -1) counts down from 5, stopping before 0.",
    de: `range(5, 0, -1) starts at 5, decrements by 1, stops before 0. Result: [5, 4, 3, 2, 1]. Note 0 is excluded. Equivalent to reversed(range(1, 6)). Common for countdown loops and reverse iteration.

Key Concepts:
• Common for countdown loops and reverse iteration.

Key Distinctions:
• This question’s focus is best captured by: range(5, 0, -1) starts at 5, decrements by 1, stops before 0.
• The contrast that matters for correctness is summarized by: Result: [5, 4, 3, 2, 1].

How It Works:
• Python follows the rule implied by: range(5, 0, -1) starts at 5, decrements by 1, stops before 0.
• The outcome you observe follows from: Common for countdown loops and reverse iteration.

Step-by-Step Execution:
1. Start from the construct described in: range(5, 0, -1) starts at 5, decrements by 1, stops before 0.
2. Resolve the subparts implied by: Result: [5, 4, 3, 2, 1].
3. Apply the core semantics highlighted in: Note 0 is excluded.
4. Confirm the final result aligns with: Common for countdown loops and reverse iteration.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Result: [5, 4, 3, 2, 1].
2. Apply the construct’s main rule next, matching: range(5, 0, -1) starts at 5, decrements by 1, stops before 0.
3. Produce any intermediate values that Common for countdown loops and reverse iteration. relies on
4. Finish by returning/assembling the final output named by: Common for countdown loops and reverse iteration.
5. Use the result only after the full construct has completed, per: range(5, 0, -1) starts at 5, decrements by 1, stops before 0.

Common Use Cases:
• Teaching this behavior using the mental model: range(5, 0, -1) starts at 5, decrements by 1, stops before 0.
• Debugging when the observed value should match the expectation in: Common for countdown loops and reverse iteration.

Edge Cases:
• If inputs vary from the situation described in: Result: [5, 4, 3, 2, 1]., the behavior can change.
• When the construct’s assumptions differ, the rule in: Note 0 is excluded. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Common for countdown loops and reverse iteration..
• When performance matters, prefer the simplest pattern that still implements: range(5, 0, -1) starts at 5, decrements by 1, stops before 0..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: range(5, 0, -1) starts at 5, decrements by 1, stops before 0..

Notes:
• For maintainable code, make the intent behind: Result: [5, 4, 3, 2, 1]. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q58: Word capitalization
  (_i: number) => ({
    q: `What is " ".join([w.capitalize() for w in "hello world".split()])?`,
    o: ["'Hello World'", "'HELLO WORLD'", "'hello world'", "'hELLO wORLD'"],
    c: 0,
    e: "capitalize() uppercases first letter of each word.",
    de: `split() breaks 'hello world' into ['hello', 'world']. capitalize() returns a copy with the first character uppercased: 'Hello', 'World'. join reconnects with space. Equivalent to 'hello world'.title(). A common text normalization pattern.

Key Concepts:
• A common text normalization pattern.

Key Distinctions:
• This question’s focus is best captured by: split() breaks 'hello world' into ['hello', 'world'].
• The contrast that matters for correctness is summarized by: capitalize() returns a copy with the first character uppercased: 'Hello', 'World'.

How It Works:
• Python follows the rule implied by: split() breaks 'hello world' into ['hello', 'world'].
• The outcome you observe follows from: A common text normalization pattern.

Step-by-Step Execution:
1. Start from the construct described in: split() breaks 'hello world' into ['hello', 'world'].
2. Resolve the subparts implied by: capitalize() returns a copy with the first character uppercased: 'Hello', 'World'.
3. Apply the core semantics highlighted in: join reconnects with space.
4. Confirm the final result aligns with: A common text normalization pattern.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: capitalize() returns a copy with the first character uppercased: 'Hello', 'World'.
2. Apply the construct’s main rule next, matching: split() breaks 'hello world' into ['hello', 'world'].
3. Produce any intermediate values that A common text normalization pattern. relies on
4. Finish by returning/assembling the final output named by: A common text normalization pattern.
5. Use the result only after the full construct has completed, per: split() breaks 'hello world' into ['hello', 'world'].

Common Use Cases:
• Teaching this behavior using the mental model: split() breaks 'hello world' into ['hello', 'world'].
• Debugging when the observed value should match the expectation in: A common text normalization pattern.

Edge Cases:
• If inputs vary from the situation described in: capitalize() returns a copy with the first character uppercased: 'Hello', 'World'., the behavior can change.
• When the construct’s assumptions differ, the rule in: join reconnects with space. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: A common text normalization pattern..
• When performance matters, prefer the simplest pattern that still implements: split() breaks 'hello world' into ['hello', 'world']..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: split() breaks 'hello world' into ['hello', 'world']..

Notes:
• For maintainable code, make the intent behind: capitalize() returns a copy with the first character uppercased: 'Hello', 'World'. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q59: List intersection
  (_i: number) => ({
    q: `What is result?\na = [1, 2, 3, 4]\nb = [3, 4, 5, 6]\nresult = [x for x in a if x in b]\nresult`,
    o: ["[3, 4]", "[1, 2, 3, 4, 5, 6]", "[1, 2]", "[5, 6]"],
    c: 0,
    e: "Only elements in both lists: 3 and 4.",
    de: `List intersection finds common elements. Iterating a and checking membership in b keeps only shared values. Order follows the first list. Equivalent to list(set(a) & set(b)) but preserves order. Common for data matching and comparing datasets.

Key Concepts:
• Common for data matching and comparing datasets.

Key Distinctions:
• This question’s focus is best captured by: List intersection finds common elements.
• The contrast that matters for correctness is summarized by: Iterating a and checking membership in b keeps only shared values.

How It Works:
• Python follows the rule implied by: List intersection finds common elements.
• The outcome you observe follows from: Common for data matching and comparing datasets.

Step-by-Step Execution:
1. Start from the construct described in: List intersection finds common elements.
2. Resolve the subparts implied by: Iterating a and checking membership in b keeps only shared values.
3. Apply the core semantics highlighted in: Order follows the first list.
4. Confirm the final result aligns with: Common for data matching and comparing datasets.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Iterating a and checking membership in b keeps only shared values.
2. Apply the construct’s main rule next, matching: List intersection finds common elements.
3. Produce any intermediate values that Common for data matching and comparing datasets. relies on
4. Finish by returning/assembling the final output named by: Common for data matching and comparing datasets.
5. Use the result only after the full construct has completed, per: List intersection finds common elements.

Common Use Cases:
• Teaching this behavior using the mental model: List intersection finds common elements.
• Debugging when the observed value should match the expectation in: Common for data matching and comparing datasets.

Edge Cases:
• If inputs vary from the situation described in: Iterating a and checking membership in b keeps only shared values., the behavior can change.
• When the construct’s assumptions differ, the rule in: Order follows the first list. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Common for data matching and comparing datasets..
• When performance matters, prefer the simplest pattern that still implements: List intersection finds common elements..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: List intersection finds common elements..

Notes:
• For maintainable code, make the intent behind: Iterating a and checking membership in b keeps only shared values. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q60: Union without duplicates
  (_i: number) => ({
    q: `What is result?\na = [1, 2, 3]\nb = [3, 4, 5]\nresult = list(a)\nfor x in b:\n    if x not in result:\n        result.append(x)\nresult`,
    o: ["[1, 2, 3, 4, 5]", "[1, 2, 3, 3, 4, 5]", "[3]", "[4, 5]"],
    c: 0,
    e: "Starts with a's elements, adds from b only if not present.",
    de: `List union without duplicates starts with a copy of one list and adds elements from the second only if they don't already exist. list(a) creates a copy. 3 is skipped (already present), 4 and 5 are added. Equivalent to list(dict.fromkeys(a + b)).

Key Concepts:
• Equivalent to list(dict.fromkeys(a + b)).

Key Distinctions:
• This question’s focus is best captured by: List union without duplicates starts with a copy of one list and adds elements from the second only if they don't already exist.
• The contrast that matters for correctness is summarized by: list(a) creates a copy.

How It Works:
• Python follows the rule implied by: List union without duplicates starts with a copy of one list and adds elements from the second only if they don't already exist.
• The outcome you observe follows from: Equivalent to list(dict.fromkeys(a + b)).

Step-by-Step Execution:
1. Start from the construct described in: List union without duplicates starts with a copy of one list and adds elements from the second only if they don't already exist.
2. Resolve the subparts implied by: list(a) creates a copy.
3. Apply the core semantics highlighted in: 3 is skipped (already present), 4 and 5 are added.
4. Confirm the final result aligns with: Equivalent to list(dict.fromkeys(a + b)).

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: list(a) creates a copy.
2. Apply the construct’s main rule next, matching: List union without duplicates starts with a copy of one list and adds elements from the second only if they don't already exist.
3. Produce any intermediate values that Equivalent to list(dict.fromkeys(a + b)). relies on
4. Finish by returning/assembling the final output named by: Equivalent to list(dict.fromkeys(a + b)).
5. Use the result only after the full construct has completed, per: List union without duplicates starts with a copy of one list and adds elements from the second only if they don't already exist.

Common Use Cases:
• Teaching this behavior using the mental model: List union without duplicates starts with a copy of one list and adds elements from the second only if they don't already exist.
• Debugging when the observed value should match the expectation in: Equivalent to list(dict.fromkeys(a + b)).

Edge Cases:
• If inputs vary from the situation described in: list(a) creates a copy., the behavior can change.
• When the construct’s assumptions differ, the rule in: 3 is skipped (already present), 4 and 5 are added. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Equivalent to list(dict.fromkeys(a + b))..
• When performance matters, prefer the simplest pattern that still implements: List union without duplicates starts with a copy of one list and adds elements from the second only if they don't already exist..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: List union without duplicates starts with a copy of one list and adds elements from the second only if they don't already exist..

Notes:
• For maintainable code, make the intent behind: list(a) creates a copy. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q61: del during iteration pitfall
  (_i: number) => ({
    q: `What happens?\nnums = [1, 2, 3, 4, 5]\nfor i in range(len(nums)):\n    if nums[i] % 2 == 0:\n        del nums[i]`,
    o: ["IndexError", "[1, 3, 5]", "[1, 2, 3, 4, 5]", "[2, 4]"],
    c: 0,
    e: "del shrinks the list, but range uses the original length → IndexError.",
    de: `Deleting from a list while iterating by index is a classic pitfall. range(len(nums)) is computed once as range(5). After del, the list shrinks, but later indices exceed the new length → IndexError. Fix: iterate over a copy (nums[:]) or use a comprehension.

Key Concepts:
• Fix: iterate over a copy (nums[:]) or use a comprehension.

Key Distinctions:
• This question’s focus is best captured by: Deleting from a list while iterating by index is a classic pitfall.
• The contrast that matters for correctness is summarized by: range(len(nums)) is computed once as range(5).

How It Works:
• Python follows the rule implied by: Deleting from a list while iterating by index is a classic pitfall.
• The outcome you observe follows from: Fix: iterate over a copy (nums[:]) or use a comprehension.

Step-by-Step Execution:
1. Start from the construct described in: Deleting from a list while iterating by index is a classic pitfall.
2. Resolve the subparts implied by: range(len(nums)) is computed once as range(5).
3. Apply the core semantics highlighted in: After del, the list shrinks, but later indices exceed the new length → IndexError.
4. Confirm the final result aligns with: Fix: iterate over a copy (nums[:]) or use a comprehension.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: range(len(nums)) is computed once as range(5).
2. Apply the construct’s main rule next, matching: Deleting from a list while iterating by index is a classic pitfall.
3. Produce any intermediate values that Fix: iterate over a copy (nums[:]) or use a comprehension. relies on
4. Finish by returning/assembling the final output named by: Fix: iterate over a copy (nums[:]) or use a comprehension.
5. Use the result only after the full construct has completed, per: Deleting from a list while iterating by index is a classic pitfall.

Common Use Cases:
• Teaching this behavior using the mental model: Deleting from a list while iterating by index is a classic pitfall.
• Debugging when the observed value should match the expectation in: Fix: iterate over a copy (nums[:]) or use a comprehension.

Edge Cases:
• If inputs vary from the situation described in: range(len(nums)) is computed once as range(5)., the behavior can change.
• When the construct’s assumptions differ, the rule in: After del, the list shrinks, but later indices exceed the new length → IndexError. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Fix: iterate over a copy (nums[:]) or use a comprehension..
• When performance matters, prefer the simplest pattern that still implements: Deleting from a list while iterating by index is a classic pitfall..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Deleting from a list while iterating by index is a classic pitfall..

Notes:
• For maintainable code, make the intent behind: range(len(nums)) is computed once as range(5). explicit (and test it with inputs like those in this prompt).`
  }),
  // Q62: Safe iteration over copy
  (_i: number) => ({
    q: `What is nums after?\nnums = [1, 2, 3, 4, 5]\nfor x in nums[:]:\n    if x % 2 == 0:\n        nums.remove(x)\nnums`,
    o: ["[1, 3, 5]", "IndexError", "[2, 4]", "[1, 2, 3, 4, 5]"],
    c: 0,
    e: "nums[:] creates a stable copy to iterate; removing from original is safe.",
    de: `Iterating over a shallow copy (nums[:]) while modifying the original is the safe pattern. The copy drives the loop (unchanged). remove() modifies the original list. No IndexError because the iteration source is stable. This is the standard pattern for in-place filtering.

Key Concepts:
• This is the standard pattern for in-place filtering.

Key Distinctions:
• This question’s focus is best captured by: Iterating over a shallow copy (nums[:]) while modifying the original is the safe pattern.
• The contrast that matters for correctness is summarized by: The copy drives the loop (unchanged).

How It Works:
• Python follows the rule implied by: Iterating over a shallow copy (nums[:]) while modifying the original is the safe pattern.
• The outcome you observe follows from: This is the standard pattern for in-place filtering.

Step-by-Step Execution:
1. Start from the construct described in: Iterating over a shallow copy (nums[:]) while modifying the original is the safe pattern.
2. Resolve the subparts implied by: The copy drives the loop (unchanged).
3. Apply the core semantics highlighted in: remove() modifies the original list.
4. Confirm the final result aligns with: This is the standard pattern for in-place filtering.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The copy drives the loop (unchanged).
2. Apply the construct’s main rule next, matching: Iterating over a shallow copy (nums[:]) while modifying the original is the safe pattern.
3. Produce any intermediate values that This is the standard pattern for in-place filtering. relies on
4. Finish by returning/assembling the final output named by: This is the standard pattern for in-place filtering.
5. Use the result only after the full construct has completed, per: Iterating over a shallow copy (nums[:]) while modifying the original is the safe pattern.

Common Use Cases:
• Teaching this behavior using the mental model: Iterating over a shallow copy (nums[:]) while modifying the original is the safe pattern.
• Debugging when the observed value should match the expectation in: This is the standard pattern for in-place filtering.

Edge Cases:
• If inputs vary from the situation described in: The copy drives the loop (unchanged)., the behavior can change.
• When the construct’s assumptions differ, the rule in: remove() modifies the original list. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This is the standard pattern for in-place filtering..
• When performance matters, prefer the simplest pattern that still implements: Iterating over a shallow copy (nums[:]) while modifying the original is the safe pattern..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Iterating over a shallow copy (nums[:]) while modifying the original is the safe pattern..

Notes:
• For maintainable code, make the intent behind: The copy drives the loop (unchanged). explicit (and test it with inputs like those in this prompt).`
  }),
  // Q63: Building nested list
  (_i: number) => ({
    q: `What is result?\nresult = []\nfor i in range(3):\n    result.append([i] * (i + 1))\nresult`,
    o: ["[[0], [1, 1], [2, 2, 2]]", "[[0, 1, 2], [0, 1, 2]]", "[[1], [2, 2], [3, 3, 3]]", "Error"],
    c: 0,
    e: "[i] * (i+1): [0]*1=[0], [1]*2=[1,1], [2]*3=[2,2,2].",
    de: `Multiplying a list by an integer repeats its contents. [0]*1=[0], [1]*2=[1,1], [2]*3=[2,2,2]. Each iteration builds a sublist of increasing length. Common for creating triangular structures and pattern generation.

Key Concepts:
• Common for creating triangular structures and pattern generation.

Key Distinctions:
• This question’s focus is best captured by: Multiplying a list by an integer repeats its contents.
• The contrast that matters for correctness is summarized by: [0]*1=[0], [1]*2=[1,1], [2]*3=[2,2,2].

How It Works:
• Python follows the rule implied by: Multiplying a list by an integer repeats its contents.
• The outcome you observe follows from: Common for creating triangular structures and pattern generation.

Step-by-Step Execution:
1. Start from the construct described in: Multiplying a list by an integer repeats its contents.
2. Resolve the subparts implied by: [0]*1=[0], [1]*2=[1,1], [2]*3=[2,2,2].
3. Apply the core semantics highlighted in: Each iteration builds a sublist of increasing length.
4. Confirm the final result aligns with: Common for creating triangular structures and pattern generation.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: [0]*1=[0], [1]*2=[1,1], [2]*3=[2,2,2].
2. Apply the construct’s main rule next, matching: Multiplying a list by an integer repeats its contents.
3. Produce any intermediate values that Common for creating triangular structures and pattern generation. relies on
4. Finish by returning/assembling the final output named by: Common for creating triangular structures and pattern generation.
5. Use the result only after the full construct has completed, per: Multiplying a list by an integer repeats its contents.

Common Use Cases:
• Teaching this behavior using the mental model: Multiplying a list by an integer repeats its contents.
• Debugging when the observed value should match the expectation in: Common for creating triangular structures and pattern generation.

Edge Cases:
• If inputs vary from the situation described in: [0]*1=[0], [1]*2=[1,1], [2]*3=[2,2,2]., the behavior can change.
• When the construct’s assumptions differ, the rule in: Each iteration builds a sublist of increasing length. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Common for creating triangular structures and pattern generation..
• When performance matters, prefer the simplest pattern that still implements: Multiplying a list by an integer repeats its contents..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Multiplying a list by an integer repeats its contents..

Notes:
• For maintainable code, make the intent behind: [0]*1=[0], [1]*2=[1,1], [2]*3=[2,2,2]. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q64: isinstance with bool subclass gotcha
  (_i: number) => ({
    q: `What is nums?\nmixed = [1, "a", 2.5, True, "b"]\nnums = [x for x in mixed if isinstance(x, int)]\nnums`,
    o: ["[1, True]", "[1]", "[1, 2.5]", "[1, 2.5, True]"],
    c: 0,
    e: "bool is a subclass of int: isinstance(True, int) is True.",
    de: `isinstance() checks if an object is an instance of a class or its subclasses. Since bool is a subclass of int in Python, isinstance(True, int) returns True. So both 1 and True pass the filter. To exclude bools, use type(x) is int instead of isinstance.

Key Concepts:
• To exclude bools, use type(x) is int instead of isinstance.

Key Distinctions:
• This question’s focus is best captured by: isinstance() checks if an object is an instance of a class or its subclasses.
• The contrast that matters for correctness is summarized by: Since bool is a subclass of int in Python, isinstance(True, int) returns True.

How It Works:
• Python follows the rule implied by: isinstance() checks if an object is an instance of a class or its subclasses.
• The outcome you observe follows from: To exclude bools, use type(x) is int instead of isinstance.

Step-by-Step Execution:
1. Start from the construct described in: isinstance() checks if an object is an instance of a class or its subclasses.
2. Resolve the subparts implied by: Since bool is a subclass of int in Python, isinstance(True, int) returns True.
3. Apply the core semantics highlighted in: So both 1 and True pass the filter.
4. Confirm the final result aligns with: To exclude bools, use type(x) is int instead of isinstance.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Since bool is a subclass of int in Python, isinstance(True, int) returns True.
2. Apply the construct’s main rule next, matching: isinstance() checks if an object is an instance of a class or its subclasses.
3. Produce any intermediate values that To exclude bools, use type(x) is int instead of isinstance. relies on
4. Finish by returning/assembling the final output named by: To exclude bools, use type(x) is int instead of isinstance.
5. Use the result only after the full construct has completed, per: isinstance() checks if an object is an instance of a class or its subclasses.

Common Use Cases:
• Teaching this behavior using the mental model: isinstance() checks if an object is an instance of a class or its subclasses.
• Debugging when the observed value should match the expectation in: To exclude bools, use type(x) is int instead of isinstance.

Edge Cases:
• If inputs vary from the situation described in: Since bool is a subclass of int in Python, isinstance(True, int) returns True., the behavior can change.
• When the construct’s assumptions differ, the rule in: So both 1 and True pass the filter. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: To exclude bools, use type(x) is int instead of isinstance..
• When performance matters, prefer the simplest pattern that still implements: isinstance() checks if an object is an instance of a class or its subclasses..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: isinstance() checks if an object is an instance of a class or its subclasses..

Notes:
• For maintainable code, make the intent behind: Since bool is a subclass of int in Python, isinstance(True, int) returns True. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q65: Manual map (squaring)
  (_i: number) => ({
    q: `What is squared?\nnums = [1, 2, 3, 4]\nsquared = []\nfor x in nums:\n    squared.append(x ** 2)\nsquared`,
    o: ["[1, 4, 9, 16]", "[2, 4, 6, 8]", "[1, 2, 3, 4]", "[0, 1, 4, 9]"],
    c: 0,
    e: "Each element is squared: 1²=1, 2²=4, 3²=9, 4²=16.",
    de: `The map pattern applies a transformation to every element. Equivalent to list(map(lambda x: x**2, nums)) or [x**2 for x in nums]. The loop version is more explicit but the comprehension is preferred in Python for readability and performance.

Key Concepts:
• The loop version is more explicit but the comprehension is preferred in Python for readability and performance.

Key Distinctions:
• This question’s focus is best captured by: The map pattern applies a transformation to every element.
• The contrast that matters for correctness is summarized by: Equivalent to list(map(lambda x: x**2, nums)) or [x**2 for x in nums].

How It Works:
• Python follows the rule implied by: The map pattern applies a transformation to every element.
• The outcome you observe follows from: The loop version is more explicit but the comprehension is preferred in Python for readability and performance.

Step-by-Step Execution:
1. Start from the construct described in: The map pattern applies a transformation to every element.
2. Resolve the subparts implied by: Equivalent to list(map(lambda x: x**2, nums)) or [x**2 for x in nums].
3. Apply the core semantics highlighted in: The loop version is more explicit but the comprehension is preferred in Python for readability and performance.
4. Confirm the final result aligns with: The loop version is more explicit but the comprehension is preferred in Python for readability and performance.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Equivalent to list(map(lambda x: x**2, nums)) or [x**2 for x in nums].
2. Apply the construct’s main rule next, matching: The map pattern applies a transformation to every element.
3. Produce any intermediate values that The loop version is more explicit but the comprehension is preferred in Python for readability and performance. relies on
4. Finish by returning/assembling the final output named by: The loop version is more explicit but the comprehension is preferred in Python for readability and performance.
5. Use the result only after the full construct has completed, per: The map pattern applies a transformation to every element.

Common Use Cases:
• Teaching this behavior using the mental model: The map pattern applies a transformation to every element.
• Debugging when the observed value should match the expectation in: The loop version is more explicit but the comprehension is preferred in Python for readability and performance.

Edge Cases:
• If inputs vary from the situation described in: Equivalent to list(map(lambda x: x**2, nums)) or [x**2 for x in nums]., the behavior can change.
• When the construct’s assumptions differ, the rule in: The loop version is more explicit but the comprehension is preferred in Python for readability and performance. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: The loop version is more explicit but the comprehension is preferred in Python for readability and performance..
• When performance matters, prefer the simplest pattern that still implements: The map pattern applies a transformation to every element..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The map pattern applies a transformation to every element..

Notes:
• For maintainable code, make the intent behind: Equivalent to list(map(lambda x: x**2, nums)) or [x**2 for x in nums]. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q66: Manual filter
  (_i: number) => ({
    q: `What is [x for x in [1, 2, 3, 4, 5, 6] if x > 3]?`,
    o: ["[4, 5, 6]", "[1, 2, 3]", "[3, 4, 5, 6]", "[1, 2, 3, 4, 5, 6]"],
    c: 0,
    e: "Only elements strictly greater than 3 pass: 4, 5, 6.",
    de: `Comprehension with a filter condition selects elements satisfying x > 3. Note that 3 itself doesn't pass (strictly greater). Equivalent to list(filter(lambda x: x > 3, lst)). Comprehensions are the preferred Pythonic approach for filtering.

Key Concepts:
• Comprehensions are the preferred Pythonic approach for filtering.

Key Distinctions:
• This question’s focus is best captured by: Comprehension with a filter condition selects elements satisfying x > 3.
• The contrast that matters for correctness is summarized by: Note that 3 itself doesn't pass (strictly greater).

How It Works:
• Python follows the rule implied by: Comprehension with a filter condition selects elements satisfying x > 3.
• The outcome you observe follows from: Comprehensions are the preferred Pythonic approach for filtering.

Step-by-Step Execution:
1. Start from the construct described in: Comprehension with a filter condition selects elements satisfying x > 3.
2. Resolve the subparts implied by: Note that 3 itself doesn't pass (strictly greater).
3. Apply the core semantics highlighted in: Equivalent to list(filter(lambda x: x > 3, lst)).
4. Confirm the final result aligns with: Comprehensions are the preferred Pythonic approach for filtering.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Note that 3 itself doesn't pass (strictly greater).
2. Apply the construct’s main rule next, matching: Comprehension with a filter condition selects elements satisfying x > 3.
3. Produce any intermediate values that Comprehensions are the preferred Pythonic approach for filtering. relies on
4. Finish by returning/assembling the final output named by: Comprehensions are the preferred Pythonic approach for filtering.
5. Use the result only after the full construct has completed, per: Comprehension with a filter condition selects elements satisfying x > 3.

Common Use Cases:
• Teaching this behavior using the mental model: Comprehension with a filter condition selects elements satisfying x > 3.
• Debugging when the observed value should match the expectation in: Comprehensions are the preferred Pythonic approach for filtering.

Edge Cases:
• If inputs vary from the situation described in: Note that 3 itself doesn't pass (strictly greater)., the behavior can change.
• When the construct’s assumptions differ, the rule in: Equivalent to list(filter(lambda x: x > 3, lst)). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Comprehensions are the preferred Pythonic approach for filtering..
• When performance matters, prefer the simplest pattern that still implements: Comprehension with a filter condition selects elements satisfying x > 3..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Comprehension with a filter condition selects elements satisfying x > 3..

Notes:
• For maintainable code, make the intent behind: Note that 3 itself doesn't pass (strictly greater). explicit (and test it with inputs like those in this prompt).`
  }),
  // Q67: List of tuples (value, square)
  (_i: number) => ({
    q: `What is [(i, i**2) for i in range(3)]?`,
    o: ["[(0, 0), (1, 1), (2, 4)]", "[(1, 1), (2, 4), (3, 9)]", "[[0,0], [1,1], [2,4]]", "Error"],
    c: 0,
    e: "Each iteration creates (value, value²): (0,0), (1,1), (2,4).",
    de: `Building a list of tuples pairs related values. (i, i**2) creates a tuple of each value with its square. Tuples are immutable, ordered pairs. This pattern is common for pairing keys with computed values.

Key Concepts:
• This pattern is common for pairing keys with computed values.

Key Distinctions:
• This question’s focus is best captured by: Building a list of tuples pairs related values.
• The contrast that matters for correctness is summarized by: (i, i**2) creates a tuple of each value with its square.

How It Works:
• Python follows the rule implied by: Building a list of tuples pairs related values.
• The outcome you observe follows from: This pattern is common for pairing keys with computed values.

Step-by-Step Execution:
1. Start from the construct described in: Building a list of tuples pairs related values.
2. Resolve the subparts implied by: (i, i**2) creates a tuple of each value with its square.
3. Apply the core semantics highlighted in: Tuples are immutable, ordered pairs.
4. Confirm the final result aligns with: This pattern is common for pairing keys with computed values.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: (i, i**2) creates a tuple of each value with its square.
2. Apply the construct’s main rule next, matching: Building a list of tuples pairs related values.
3. Produce any intermediate values that This pattern is common for pairing keys with computed values. relies on
4. Finish by returning/assembling the final output named by: This pattern is common for pairing keys with computed values.
5. Use the result only after the full construct has completed, per: Building a list of tuples pairs related values.

Common Use Cases:
• Teaching this behavior using the mental model: Building a list of tuples pairs related values.
• Debugging when the observed value should match the expectation in: This pattern is common for pairing keys with computed values.

Edge Cases:
• If inputs vary from the situation described in: (i, i**2) creates a tuple of each value with its square., the behavior can change.
• When the construct’s assumptions differ, the rule in: Tuples are immutable, ordered pairs. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This pattern is common for pairing keys with computed values..
• When performance matters, prefer the simplest pattern that still implements: Building a list of tuples pairs related values..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Building a list of tuples pairs related values..

Notes:
• For maintainable code, make the intent behind: (i, i**2) creates a tuple of each value with its square. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q68: Generator exhaustion
  (_i: number) => ({
    q: `What is list(gen) after the loop?\ngen = (x for x in range(3))\nfor _ in gen:\n    pass\nlist(gen)`,
    o: ["[]", "[0, 1, 2]", "Error", "None"],
    c: 0,
    e: "Generators are single-use: once exhausted by the loop, list(gen) returns empty.",
    de: `Generators are lazy, single-use iterators. Once fully consumed by the for loop, they produce no more values — they are exhausted. list(gen) on an exhausted generator returns []. To reuse, create a new generator. This is a key difference from lists and other reusable iterables.

Key Concepts:
• This is a key difference from lists and other reusable iterables.

Key Distinctions:
• This question’s focus is best captured by: Generators are lazy, single-use iterators.
• The contrast that matters for correctness is summarized by: Once fully consumed by the for loop, they produce no more values — they are exhausted.

How It Works:
• Python follows the rule implied by: Generators are lazy, single-use iterators.
• The outcome you observe follows from: This is a key difference from lists and other reusable iterables.

Step-by-Step Execution:
1. Start from the construct described in: Generators are lazy, single-use iterators.
2. Resolve the subparts implied by: Once fully consumed by the for loop, they produce no more values — they are exhausted.
3. Apply the core semantics highlighted in: list(gen) on an exhausted generator returns [].
4. Confirm the final result aligns with: This is a key difference from lists and other reusable iterables.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Once fully consumed by the for loop, they produce no more values — they are exhausted.
2. Apply the construct’s main rule next, matching: Generators are lazy, single-use iterators.
3. Produce any intermediate values that This is a key difference from lists and other reusable iterables. relies on
4. Finish by returning/assembling the final output named by: This is a key difference from lists and other reusable iterables.
5. Use the result only after the full construct has completed, per: Generators are lazy, single-use iterators.

Common Use Cases:
• Teaching this behavior using the mental model: Generators are lazy, single-use iterators.
• Debugging when the observed value should match the expectation in: This is a key difference from lists and other reusable iterables.

Edge Cases:
• If inputs vary from the situation described in: Once fully consumed by the for loop, they produce no more values — they are exhausted., the behavior can change.
• When the construct’s assumptions differ, the rule in: list(gen) on an exhausted generator returns []. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This is a key difference from lists and other reusable iterables..
• When performance matters, prefer the simplest pattern that still implements: Generators are lazy, single-use iterators..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Generators are lazy, single-use iterators..

Notes:
• For maintainable code, make the intent behind: Once fully consumed by the for loop, they produce no more values — they are exhausted. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q69: Dict comprehension then iteration
  (_i: number) => ({
    q: `What is total?\nd = {x: x**2 for x in range(4)}\ntotal = 0\nfor k, v in d.items():\n    total += v\ntotal`,
    o: ["14", "6", "9", "10"],
    c: 0,
    e: "Sum of squared values: 0+1+4+9 = 14.",
    de: `Dict comprehension creates {0:0, 1:1, 2:4, 3:9}. Iterating .items() and summing values: 0+1+4+9 = 14. Common pattern for aggregating dictionary data. Could also use sum(d.values()).

Key Concepts:
• Could also use sum(d.values()).

Key Distinctions:
• This question’s focus is best captured by: Dict comprehension creates {0:0, 1:1, 2:4, 3:9}.
• The contrast that matters for correctness is summarized by: Iterating .items() and summing values: 0+1+4+9 = 14.

How It Works:
• Python follows the rule implied by: Dict comprehension creates {0:0, 1:1, 2:4, 3:9}.
• The outcome you observe follows from: Could also use sum(d.values()).

Step-by-Step Execution:
1. Start from the construct described in: Dict comprehension creates {0:0, 1:1, 2:4, 3:9}.
2. Resolve the subparts implied by: Iterating .items() and summing values: 0+1+4+9 = 14.
3. Apply the core semantics highlighted in: Common pattern for aggregating dictionary data.
4. Confirm the final result aligns with: Could also use sum(d.values()).

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Iterating .items() and summing values: 0+1+4+9 = 14.
2. Apply the construct’s main rule next, matching: Dict comprehension creates {0:0, 1:1, 2:4, 3:9}.
3. Produce any intermediate values that Could also use sum(d.values()). relies on
4. Finish by returning/assembling the final output named by: Could also use sum(d.values()).
5. Use the result only after the full construct has completed, per: Dict comprehension creates {0:0, 1:1, 2:4, 3:9}.

Common Use Cases:
• Teaching this behavior using the mental model: Dict comprehension creates {0:0, 1:1, 2:4, 3:9}.
• Debugging when the observed value should match the expectation in: Could also use sum(d.values()).

Edge Cases:
• If inputs vary from the situation described in: Iterating .items() and summing values: 0+1+4+9 = 14., the behavior can change.
• When the construct’s assumptions differ, the rule in: Common pattern for aggregating dictionary data. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Could also use sum(d.values())..
• When performance matters, prefer the simplest pattern that still implements: Dict comprehension creates {0:0, 1:1, 2:4, 3:9}..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Dict comprehension creates {0:0, 1:1, 2:4, 3:9}..

Notes:
• For maintainable code, make the intent behind: Iterating .items() and summing values: 0+1+4+9 = 14. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q70: Reduce pattern (product)
  (_i: number) => ({
    q: `What is product?\nnums = [2, 3, 4]\nproduct = 1\nfor n in nums:\n    product *= n\nproduct`,
    o: ["24", "9", "12", "6"],
    c: 0,
    e: "Running product: 1×2=2, 2×3=6, 6×4=24.",
    de: `The reduce pattern collapses a list into a single value. Starting with 1 (multiplicative identity), each element updates the accumulator. 1×2=2, 2×3=6, 6×4=24. Equivalent to functools.reduce(lambda a,b: a*b, nums) or math.prod(nums) (Python 3.8+).

Key Concepts:
• Equivalent to functools.reduce(lambda a,b: a*b, nums) or math.prod(nums) (Python 3.8+).

Key Distinctions:
• This question’s focus is best captured by: The reduce pattern collapses a list into a single value.
• The contrast that matters for correctness is summarized by: Starting with 1 (multiplicative identity), each element updates the accumulator.

How It Works:
• Python follows the rule implied by: The reduce pattern collapses a list into a single value.
• The outcome you observe follows from: Equivalent to functools.reduce(lambda a,b: a*b, nums) or math.prod(nums) (Python 3.8+).

Step-by-Step Execution:
1. Start from the construct described in: The reduce pattern collapses a list into a single value.
2. Resolve the subparts implied by: Starting with 1 (multiplicative identity), each element updates the accumulator.
3. Apply the core semantics highlighted in: 1×2=2, 2×3=6, 6×4=24.
4. Confirm the final result aligns with: Equivalent to functools.reduce(lambda a,b: a*b, nums) or math.prod(nums) (Python 3.8+).

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Starting with 1 (multiplicative identity), each element updates the accumulator.
2. Apply the construct’s main rule next, matching: The reduce pattern collapses a list into a single value.
3. Produce any intermediate values that Equivalent to functools.reduce(lambda a,b: a*b, nums) or math.prod(nums) (Python 3.8+). relies on
4. Finish by returning/assembling the final output named by: Equivalent to functools.reduce(lambda a,b: a*b, nums) or math.prod(nums) (Python 3.8+).
5. Use the result only after the full construct has completed, per: The reduce pattern collapses a list into a single value.

Common Use Cases:
• Teaching this behavior using the mental model: The reduce pattern collapses a list into a single value.
• Debugging when the observed value should match the expectation in: Equivalent to functools.reduce(lambda a,b: a*b, nums) or math.prod(nums) (Python 3.8+).

Edge Cases:
• If inputs vary from the situation described in: Starting with 1 (multiplicative identity), each element updates the accumulator., the behavior can change.
• When the construct’s assumptions differ, the rule in: 1×2=2, 2×3=6, 6×4=24. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Equivalent to functools.reduce(lambda a,b: a*b, nums) or math.prod(nums) (Python 3.8+)..
• When performance matters, prefer the simplest pattern that still implements: The reduce pattern collapses a list into a single value..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The reduce pattern collapses a list into a single value..

Notes:
• For maintainable code, make the intent behind: Starting with 1 (multiplicative identity), each element updates the accumulator. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q71: Fibonacci generation
  (_i: number) => ({
    q: `What is fib?\nfib = [0, 1]\nfor _ in range(4):\n    fib.append(fib[-1] + fib[-2])\nfib`,
    o: ["[0, 1, 1, 2, 3, 5]", "[0, 1, 2, 3, 5, 8]", "[1, 1, 2, 3, 5]", "Error"],
    c: 0,
    e: "Each iteration appends the sum of the last two: 1, 2, 3, 5.",
    de: `Starting with [0, 1], each iteration appends fib[-1] + fib[-2]. Step by step: 1+0=1→[0,1,1], 1+1=2→[0,1,1,2], 2+1=3→[0,1,1,2,3], 3+2=5→[0,1,1,2,3,5]. This is the standard iterative Fibonacci approach.

Key Concepts:
• This is the standard iterative Fibonacci approach.

Key Distinctions:
• This question’s focus is best captured by: Starting with [0, 1], each iteration appends fib[-1] + fib[-2].
• The contrast that matters for correctness is summarized by: Step by step: 1+0=1→[0,1,1], 1+1=2→[0,1,1,2], 2+1=3→[0,1,1,2,3], 3+2=5→[0,1,1,2,3,5].

How It Works:
• Python follows the rule implied by: Starting with [0, 1], each iteration appends fib[-1] + fib[-2].
• The outcome you observe follows from: This is the standard iterative Fibonacci approach.

Step-by-Step Execution:
1. Start from the construct described in: Starting with [0, 1], each iteration appends fib[-1] + fib[-2].
2. Resolve the subparts implied by: Step by step: 1+0=1→[0,1,1], 1+1=2→[0,1,1,2], 2+1=3→[0,1,1,2,3], 3+2=5→[0,1,1,2,3,5].
3. Apply the core semantics highlighted in: This is the standard iterative Fibonacci approach.
4. Confirm the final result aligns with: This is the standard iterative Fibonacci approach.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Step by step: 1+0=1→[0,1,1], 1+1=2→[0,1,1,2], 2+1=3→[0,1,1,2,3], 3+2=5→[0,1,1,2,3,5].
2. Apply the construct’s main rule next, matching: Starting with [0, 1], each iteration appends fib[-1] + fib[-2].
3. Produce any intermediate values that This is the standard iterative Fibonacci approach. relies on
4. Finish by returning/assembling the final output named by: This is the standard iterative Fibonacci approach.
5. Use the result only after the full construct has completed, per: Starting with [0, 1], each iteration appends fib[-1] + fib[-2].

Common Use Cases:
• Teaching this behavior using the mental model: Starting with [0, 1], each iteration appends fib[-1] + fib[-2].
• Debugging when the observed value should match the expectation in: This is the standard iterative Fibonacci approach.

Edge Cases:
• If inputs vary from the situation described in: Step by step: 1+0=1→[0,1,1], 1+1=2→[0,1,1,2], 2+1=3→[0,1,1,2,3], 3+2=5→[0,1,1,2,3,5]., the behavior can change.
• When the construct’s assumptions differ, the rule in: This is the standard iterative Fibonacci approach. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This is the standard iterative Fibonacci approach..
• When performance matters, prefer the simplest pattern that still implements: Starting with [0, 1], each iteration appends fib[-1] + fib[-2]..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Starting with [0, 1], each iteration appends fib[-1] + fib[-2]..

Notes:
• For maintainable code, make the intent behind: Step by step: 1+0=1→[0,1,1], 1+1=2→[0,1,1,2], 2+1=3→[0,1,1,2,3], 3+2=5→[0,1,1,2,3,5]. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q72: zip with star unpacking for column ops
  (_i: number) => ({
    q: `What is [a + b for a, b in zip(*[[1, 2, 3], [4, 5, 6]])]?`,
    o: ["[5, 7, 9]", "[[1, 4], [2, 5], [3, 6]]", "[1, 2, 3, 4, 5, 6]", "Error"],
    c: 0,
    e: "zip(*data) unpacks rows into zip, pairing columns: (1,4), (2,5), (3,6).",
    de: `The * operator unpacks the list into zip's arguments: zip([1,2,3], [4,5,6]). This pairs elements column-wise: (1,4), (2,5), (3,6). Each pair is summed: 5, 7, 9. This pattern is used for transposing rows to columns and element-wise operations.

Key Concepts:
• This pattern is used for transposing rows to columns and element-wise operations.

Key Distinctions:
• This question’s focus is best captured by: The * operator unpacks the list into zip's arguments: zip([1,2,3], [4,5,6]).
• The contrast that matters for correctness is summarized by: This pairs elements column-wise: (1,4), (2,5), (3,6).

How It Works:
• Python follows the rule implied by: The * operator unpacks the list into zip's arguments: zip([1,2,3], [4,5,6]).
• The outcome you observe follows from: This pattern is used for transposing rows to columns and element-wise operations.

Step-by-Step Execution:
1. Start from the construct described in: The * operator unpacks the list into zip's arguments: zip([1,2,3], [4,5,6]).
2. Resolve the subparts implied by: This pairs elements column-wise: (1,4), (2,5), (3,6).
3. Apply the core semantics highlighted in: Each pair is summed: 5, 7, 9.
4. Confirm the final result aligns with: This pattern is used for transposing rows to columns and element-wise operations.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: This pairs elements column-wise: (1,4), (2,5), (3,6).
2. Apply the construct’s main rule next, matching: The * operator unpacks the list into zip's arguments: zip([1,2,3], [4,5,6]).
3. Produce any intermediate values that This pattern is used for transposing rows to columns and element-wise operations. relies on
4. Finish by returning/assembling the final output named by: This pattern is used for transposing rows to columns and element-wise operations.
5. Use the result only after the full construct has completed, per: The * operator unpacks the list into zip's arguments: zip([1,2,3], [4,5,6]).

Common Use Cases:
• Teaching this behavior using the mental model: The * operator unpacks the list into zip's arguments: zip([1,2,3], [4,5,6]).
• Debugging when the observed value should match the expectation in: This pattern is used for transposing rows to columns and element-wise operations.

Edge Cases:
• If inputs vary from the situation described in: This pairs elements column-wise: (1,4), (2,5), (3,6)., the behavior can change.
• When the construct’s assumptions differ, the rule in: Each pair is summed: 5, 7, 9. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This pattern is used for transposing rows to columns and element-wise operations..
• When performance matters, prefer the simplest pattern that still implements: The * operator unpacks the list into zip's arguments: zip([1,2,3], [4,5,6])..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The * operator unpacks the list into zip's arguments: zip([1,2,3], [4,5,6])..

Notes:
• For maintainable code, make the intent behind: This pairs elements column-wise: (1,4), (2,5), (3,6). explicit (and test it with inputs like those in this prompt).`
  }),
  // Q73: setdefault for first occurrence tracking
  (_i: number) => ({
    q: `What is result["l"]?\nresult = {}\nfor i, ch in enumerate("hello"):\n    result.setdefault(ch, i)\nresult["l"]`,
    o: ["2", "3", "0", "Error"],
    c: 0,
    e: "setdefault keeps the first index: 'l' first appears at index 2.",
    de: `enumerate("hello") yields (0,'h'), (1,'e'), (2,'l'), (3,'l'), (4,'o'). setdefault(ch, i) only inserts if the key is absent. 'l' is first seen at index 2, so setdefault sets it to 2. When 'l' appears again at index 3, setdefault does nothing because the key already exists.

Key Concepts:
• When 'l' appears again at index 3, setdefault does nothing because the key already exists.

Key Distinctions:
• This question’s focus is best captured by: enumerate("hello") yields (0,'h'), (1,'e'), (2,'l'), (3,'l'), (4,'o').
• The contrast that matters for correctness is summarized by: setdefault(ch, i) only inserts if the key is absent.

How It Works:
• Python follows the rule implied by: enumerate("hello") yields (0,'h'), (1,'e'), (2,'l'), (3,'l'), (4,'o').
• The outcome you observe follows from: When 'l' appears again at index 3, setdefault does nothing because the key already exists.

Step-by-Step Execution:
1. Start from the construct described in: enumerate("hello") yields (0,'h'), (1,'e'), (2,'l'), (3,'l'), (4,'o').
2. Resolve the subparts implied by: setdefault(ch, i) only inserts if the key is absent.
3. Apply the core semantics highlighted in: 'l' is first seen at index 2, so setdefault sets it to 2.
4. Confirm the final result aligns with: When 'l' appears again at index 3, setdefault does nothing because the key already exists.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: setdefault(ch, i) only inserts if the key is absent.
2. Apply the construct’s main rule next, matching: enumerate("hello") yields (0,'h'), (1,'e'), (2,'l'), (3,'l'), (4,'o').
3. Produce any intermediate values that When 'l' appears again at index 3, setdefault does nothing because the key already exists. relies on
4. Finish by returning/assembling the final output named by: When 'l' appears again at index 3, setdefault does nothing because the key already exists.
5. Use the result only after the full construct has completed, per: enumerate("hello") yields (0,'h'), (1,'e'), (2,'l'), (3,'l'), (4,'o').

Common Use Cases:
• Teaching this behavior using the mental model: enumerate("hello") yields (0,'h'), (1,'e'), (2,'l'), (3,'l'), (4,'o').
• Debugging when the observed value should match the expectation in: When 'l' appears again at index 3, setdefault does nothing because the key already exists.

Edge Cases:
• If inputs vary from the situation described in: setdefault(ch, i) only inserts if the key is absent., the behavior can change.
• When the construct’s assumptions differ, the rule in: 'l' is first seen at index 2, so setdefault sets it to 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: When 'l' appears again at index 3, setdefault does nothing because the key already exists..
• When performance matters, prefer the simplest pattern that still implements: enumerate("hello") yields (0,'h'), (1,'e'), (2,'l'), (3,'l'), (4,'o')..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: enumerate("hello") yields (0,'h'), (1,'e'), (2,'l'), (3,'l'), (4,'o')..

Notes:
• For maintainable code, make the intent behind: setdefault(ch, i) only inserts if the key is absent. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q74: Bubble sort single pass
  (_i: number) => ({
    q: `What is nums after one pass?\nnums = [4, 2, 7, 1]\nfor i in range(len(nums)-1):\n    if nums[i] > nums[i+1]:\n        nums[i], nums[i+1] = nums[i+1], nums[i]\nnums`,
    o: ["[2, 4, 1, 7]", "[1, 2, 4, 7]", "[2, 4, 7, 1]", "[4, 2, 1, 7]"],
    c: 0,
    e: "One pass: 4↔2 swap, 7↔1 swap. Largest bubbles to end.",
    de: `One bubble sort pass compares adjacent pairs and swaps if out of order. [4,2,7,1]: 4>2→swap→[2,4,7,1], 4>7?no, 7>1→swap→[2,4,1,7]. One pass guarantees the largest element reaches the end. Full sort requires multiple passes.

Key Concepts:
• Full sort requires multiple passes.

Key Distinctions:
• This question’s focus is best captured by: One bubble sort pass compares adjacent pairs and swaps if out of order.
• The contrast that matters for correctness is summarized by: [4,2,7,1]: 4>2→swap→[2,4,7,1], 4>7?no, 7>1→swap→[2,4,1,7].

How It Works:
• Python follows the rule implied by: One bubble sort pass compares adjacent pairs and swaps if out of order.
• The outcome you observe follows from: Full sort requires multiple passes.

Step-by-Step Execution:
1. Start from the construct described in: One bubble sort pass compares adjacent pairs and swaps if out of order.
2. Resolve the subparts implied by: [4,2,7,1]: 4>2→swap→[2,4,7,1], 4>7?no, 7>1→swap→[2,4,1,7].
3. Apply the core semantics highlighted in: One pass guarantees the largest element reaches the end.
4. Confirm the final result aligns with: Full sort requires multiple passes.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: [4,2,7,1]: 4>2→swap→[2,4,7,1], 4>7?no, 7>1→swap→[2,4,1,7].
2. Apply the construct’s main rule next, matching: One bubble sort pass compares adjacent pairs and swaps if out of order.
3. Produce any intermediate values that Full sort requires multiple passes. relies on
4. Finish by returning/assembling the final output named by: Full sort requires multiple passes.
5. Use the result only after the full construct has completed, per: One bubble sort pass compares adjacent pairs and swaps if out of order.

Common Use Cases:
• Teaching this behavior using the mental model: One bubble sort pass compares adjacent pairs and swaps if out of order.
• Debugging when the observed value should match the expectation in: Full sort requires multiple passes.

Edge Cases:
• If inputs vary from the situation described in: [4,2,7,1]: 4>2→swap→[2,4,7,1], 4>7?no, 7>1→swap→[2,4,1,7]., the behavior can change.
• When the construct’s assumptions differ, the rule in: One pass guarantees the largest element reaches the end. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Full sort requires multiple passes..
• When performance matters, prefer the simplest pattern that still implements: One bubble sort pass compares adjacent pairs and swaps if out of order..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: One bubble sort pass compares adjacent pairs and swaps if out of order..

Notes:
• For maintainable code, make the intent behind: [4,2,7,1]: 4>2→swap→[2,4,7,1], 4>7?no, 7>1→swap→[2,4,1,7]. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q75: Dict accumulation with get()
  (_i: number) => ({
    q: `What is d?\nd = {}\nfor k, v in [("a", 1), ("b", 2), ("a", 3)]:\n    d[k] = d.get(k, 0) + v\nd`,
    o: ["{'a': 4, 'b': 2}", "{'a': 3, 'b': 2}", "{'a': 1, 'b': 2}", "Error"],
    c: 0,
    e: "d.get(k, 0) returns current value or 0, then adds v. 'a' accumulates 1+3=4.",
    de: `This pattern accumulates values for duplicate keys. For ('a',1): d.get('a',0)=0, d['a']=0+1=1. For ('b',2): d['b']=0+2=2. For ('a',3): d.get('a',0)=1, d['a']=1+3=4. This is a manual alternative to collections.Counter or defaultdict(int).

Key Concepts:
• This is a manual alternative to collections.Counter or defaultdict(int).

Key Distinctions:
• This question’s focus is best captured by: This pattern accumulates values for duplicate keys.
• The contrast that matters for correctness is summarized by: For ('a',1): d.get('a',0)=0, d['a']=0+1=1.

How It Works:
• Python follows the rule implied by: This pattern accumulates values for duplicate keys.
• The outcome you observe follows from: This is a manual alternative to collections.Counter or defaultdict(int).

Step-by-Step Execution:
1. Start from the construct described in: This pattern accumulates values for duplicate keys.
2. Resolve the subparts implied by: For ('a',1): d.get('a',0)=0, d['a']=0+1=1.
3. Apply the core semantics highlighted in: For ('b',2): d['b']=0+2=2.
4. Confirm the final result aligns with: This is a manual alternative to collections.Counter or defaultdict(int).

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: For ('a',1): d.get('a',0)=0, d['a']=0+1=1.
2. Apply the construct’s main rule next, matching: This pattern accumulates values for duplicate keys.
3. Produce any intermediate values that This is a manual alternative to collections.Counter or defaultdict(int). relies on
4. Finish by returning/assembling the final output named by: This is a manual alternative to collections.Counter or defaultdict(int).
5. Use the result only after the full construct has completed, per: This pattern accumulates values for duplicate keys.

Common Use Cases:
• Teaching this behavior using the mental model: This pattern accumulates values for duplicate keys.
• Debugging when the observed value should match the expectation in: This is a manual alternative to collections.Counter or defaultdict(int).

Edge Cases:
• If inputs vary from the situation described in: For ('a',1): d.get('a',0)=0, d['a']=0+1=1., the behavior can change.
• When the construct’s assumptions differ, the rule in: For ('b',2): d['b']=0+2=2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This is a manual alternative to collections.Counter or defaultdict(int)..
• When performance matters, prefer the simplest pattern that still implements: This pattern accumulates values for duplicate keys..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This pattern accumulates values for duplicate keys..

Notes:
• For maintainable code, make the intent behind: For ('a',1): d.get('a',0)=0, d['a']=0+1=1. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q76: Merging dicts via update
  (_i: number) => ({
    q: `What is result?\nd1 = {"a": 1}\nd2 = {"b": 2, "a": 3}\nresult = {}\nresult.update(d1)\nresult.update(d2)\nresult`,
    o: ["{'a': 3, 'b': 2}", "{'a': 1, 'b': 2}", "{'b': 2, 'a': 3}", "Error"],
    c: 0,
    e: "update() merges; later values overwrite: 'a' becomes 3.",
    de: `dict.update() merges another dict into the target. When keys conflict, the last value wins. result gets d1 first ({'a': 1}), then d2 overwrites 'a' to 3 and adds 'b'. Equivalent to {**d1, **d2} or d1 | d2 (Python 3.9+).

Key Concepts:
• Equivalent to {**d1, **d2} or d1 | d2 (Python 3.9+).

Key Distinctions:
• This question’s focus is best captured by: dict.update() merges another dict into the target.
• The contrast that matters for correctness is summarized by: When keys conflict, the last value wins.

How It Works:
• Python follows the rule implied by: dict.update() merges another dict into the target.
• The outcome you observe follows from: Equivalent to {**d1, **d2} or d1 | d2 (Python 3.9+).

Step-by-Step Execution:
1. Start from the construct described in: dict.update() merges another dict into the target.
2. Resolve the subparts implied by: When keys conflict, the last value wins.
3. Apply the core semantics highlighted in: result gets d1 first ({'a': 1}), then d2 overwrites 'a' to 3 and adds 'b'.
4. Confirm the final result aligns with: Equivalent to {**d1, **d2} or d1 | d2 (Python 3.9+).

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: When keys conflict, the last value wins.
2. Apply the construct’s main rule next, matching: dict.update() merges another dict into the target.
3. Produce any intermediate values that Equivalent to {**d1, **d2} or d1 | d2 (Python 3.9+). relies on
4. Finish by returning/assembling the final output named by: Equivalent to {**d1, **d2} or d1 | d2 (Python 3.9+).
5. Use the result only after the full construct has completed, per: dict.update() merges another dict into the target.

Common Use Cases:
• Teaching this behavior using the mental model: dict.update() merges another dict into the target.
• Debugging when the observed value should match the expectation in: Equivalent to {**d1, **d2} or d1 | d2 (Python 3.9+).

Edge Cases:
• If inputs vary from the situation described in: When keys conflict, the last value wins., the behavior can change.
• When the construct’s assumptions differ, the rule in: result gets d1 first ({'a': 1}), then d2 overwrites 'a' to 3 and adds 'b'. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Equivalent to {**d1, **d2} or d1 | d2 (Python 3.9+)..
• When performance matters, prefer the simplest pattern that still implements: dict.update() merges another dict into the target..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: dict.update() merges another dict into the target..

Notes:
• For maintainable code, make the intent behind: When keys conflict, the last value wins. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q77: Group-by with setdefault
  (_i: number) => ({
    q: `What is groups["a"]?\nitems = [("a", 1), ("b", 2), ("a", 3)]\ngroups = {}\nfor k, v in items:\n    groups.setdefault(k, []).append(v)\ngroups["a"]`,
    o: ["[1, 3]", "[3]", "[1]", "Error"],
    c: 0,
    e: "setdefault creates a list on first access; append adds values. 'a' collects 1 and 3.",
    de: `The group-by pattern collects values sharing the same key. setdefault(k, []) returns the existing list or creates a new empty one. For 'a': first call creates [], appends 1→[1]. Second call returns existing [1], appends 3→[1,3]. Alternative: collections.defaultdict(list).

Key Concepts:
• Alternative: collections.defaultdict(list).

Key Distinctions:
• This question’s focus is best captured by: The group-by pattern collects values sharing the same key.
• The contrast that matters for correctness is summarized by: setdefault(k, []) returns the existing list or creates a new empty one.

How It Works:
• Python follows the rule implied by: The group-by pattern collects values sharing the same key.
• The outcome you observe follows from: Alternative: collections.defaultdict(list).

Step-by-Step Execution:
1. Start from the construct described in: The group-by pattern collects values sharing the same key.
2. Resolve the subparts implied by: setdefault(k, []) returns the existing list or creates a new empty one.
3. Apply the core semantics highlighted in: For 'a': first call creates [], appends 1→[1].
4. Confirm the final result aligns with: Alternative: collections.defaultdict(list).

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: setdefault(k, []) returns the existing list or creates a new empty one.
2. Apply the construct’s main rule next, matching: The group-by pattern collects values sharing the same key.
3. Produce any intermediate values that Alternative: collections.defaultdict(list). relies on
4. Finish by returning/assembling the final output named by: Alternative: collections.defaultdict(list).
5. Use the result only after the full construct has completed, per: The group-by pattern collects values sharing the same key.

Common Use Cases:
• Teaching this behavior using the mental model: The group-by pattern collects values sharing the same key.
• Debugging when the observed value should match the expectation in: Alternative: collections.defaultdict(list).

Edge Cases:
• If inputs vary from the situation described in: setdefault(k, []) returns the existing list or creates a new empty one., the behavior can change.
• When the construct’s assumptions differ, the rule in: For 'a': first call creates [], appends 1→[1]. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Alternative: collections.defaultdict(list)..
• When performance matters, prefer the simplest pattern that still implements: The group-by pattern collects values sharing the same key..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The group-by pattern collects values sharing the same key..

Notes:
• For maintainable code, make the intent behind: setdefault(k, []) returns the existing list or creates a new empty one. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q78: Sliding window sum
  (_i: number) => ({
    q: `What is sums?\nnums = [1, 2, 3, 4, 5]\nsums = []\nfor i in range(len(nums) - 2):\n    sums.append(sum(nums[i:i+3]))\nsums`,
    o: ["[6, 9, 12]", "[6, 9, 12, 15]", "[3, 6, 9, 12]", "Error"],
    c: 0,
    e: "Window of size 3: sum([1,2,3])=6, sum([2,3,4])=9, sum([3,4,5])=12.",
    de: `A sliding window moves a fixed-size window across a sequence. Window size 3: nums[0:3]=[1,2,3]→6, nums[1:4]=[2,3,4]→9, nums[2:5]=[3,4,5]→12. Window count = len(nums) - window_size + 1 = 3. Used in moving averages and signal processing.

Key Concepts:
• Used in moving averages and signal processing.

Key Distinctions:
• This question’s focus is best captured by: A sliding window moves a fixed-size window across a sequence.
• The contrast that matters for correctness is summarized by: Window size 3: nums[0:3]=[1,2,3]→6, nums[1:4]=[2,3,4]→9, nums[2:5]=[3,4,5]→12.

How It Works:
• Python follows the rule implied by: A sliding window moves a fixed-size window across a sequence.
• The outcome you observe follows from: Used in moving averages and signal processing.

Step-by-Step Execution:
1. Start from the construct described in: A sliding window moves a fixed-size window across a sequence.
2. Resolve the subparts implied by: Window size 3: nums[0:3]=[1,2,3]→6, nums[1:4]=[2,3,4]→9, nums[2:5]=[3,4,5]→12.
3. Apply the core semantics highlighted in: Window count = len(nums) - window_size + 1 = 3.
4. Confirm the final result aligns with: Used in moving averages and signal processing.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Window size 3: nums[0:3]=[1,2,3]→6, nums[1:4]=[2,3,4]→9, nums[2:5]=[3,4,5]→12.
2. Apply the construct’s main rule next, matching: A sliding window moves a fixed-size window across a sequence.
3. Produce any intermediate values that Used in moving averages and signal processing. relies on
4. Finish by returning/assembling the final output named by: Used in moving averages and signal processing.
5. Use the result only after the full construct has completed, per: A sliding window moves a fixed-size window across a sequence.

Common Use Cases:
• Teaching this behavior using the mental model: A sliding window moves a fixed-size window across a sequence.
• Debugging when the observed value should match the expectation in: Used in moving averages and signal processing.

Edge Cases:
• If inputs vary from the situation described in: Window size 3: nums[0:3]=[1,2,3]→6, nums[1:4]=[2,3,4]→9, nums[2:5]=[3,4,5]→12., the behavior can change.
• When the construct’s assumptions differ, the rule in: Window count = len(nums) - window_size + 1 = 3. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Used in moving averages and signal processing..
• When performance matters, prefer the simplest pattern that still implements: A sliding window moves a fixed-size window across a sequence..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: A sliding window moves a fixed-size window across a sequence..

Notes:
• For maintainable code, make the intent behind: Window size 3: nums[0:3]=[1,2,3]→6, nums[1:4]=[2,3,4]→9, nums[2:5]=[3,4,5]→12. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q79: Left rotation
  (_i: number) => ({
    q: `What is lst after?\nlst = [1, 2, 3, 4, 5]\nfor _ in range(2):\n    lst.append(lst.pop(0))\nlst`,
    o: ["[3, 4, 5, 1, 2]", "[2, 3, 4, 5, 1]", "[5, 1, 2, 3, 4]", "Error"],
    c: 0,
    e: "Each iteration moves the first element to the end. After 2 rotations: [3,4,5,1,2].",
    de: `This simulates left rotation by popping the front and appending to back. Iter 0: pop 1→[2,3,4,5]+append 1→[2,3,4,5,1]. Iter 1: pop 2→[3,4,5,1]+append 2→[3,4,5,1,2]. Note lst.pop(0) is O(n). For efficiency, use collections.deque with rotate() or slicing: lst[k:] + lst[:k].

Key Concepts:
• For efficiency, use collections.deque with rotate() or slicing: lst[k:] + lst[:k].

Key Distinctions:
• This question’s focus is best captured by: This simulates left rotation by popping the front and appending to back.
• The contrast that matters for correctness is summarized by: Iter 0: pop 1→[2,3,4,5]+append 1→[2,3,4,5,1].

How It Works:
• Python follows the rule implied by: This simulates left rotation by popping the front and appending to back.
• The outcome you observe follows from: For efficiency, use collections.deque with rotate() or slicing: lst[k:] + lst[:k].

Step-by-Step Execution:
1. Start from the construct described in: This simulates left rotation by popping the front and appending to back.
2. Resolve the subparts implied by: Iter 0: pop 1→[2,3,4,5]+append 1→[2,3,4,5,1].
3. Apply the core semantics highlighted in: Iter 1: pop 2→[3,4,5,1]+append 2→[3,4,5,1,2].
4. Confirm the final result aligns with: For efficiency, use collections.deque with rotate() or slicing: lst[k:] + lst[:k].

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Iter 0: pop 1→[2,3,4,5]+append 1→[2,3,4,5,1].
2. Apply the construct’s main rule next, matching: This simulates left rotation by popping the front and appending to back.
3. Produce any intermediate values that For efficiency, use collections.deque with rotate() or slicing: lst[k:] + lst[:k]. relies on
4. Finish by returning/assembling the final output named by: For efficiency, use collections.deque with rotate() or slicing: lst[k:] + lst[:k].
5. Use the result only after the full construct has completed, per: This simulates left rotation by popping the front and appending to back.

Common Use Cases:
• Teaching this behavior using the mental model: This simulates left rotation by popping the front and appending to back.
• Debugging when the observed value should match the expectation in: For efficiency, use collections.deque with rotate() or slicing: lst[k:] + lst[:k].

Edge Cases:
• If inputs vary from the situation described in: Iter 0: pop 1→[2,3,4,5]+append 1→[2,3,4,5,1]., the behavior can change.
• When the construct’s assumptions differ, the rule in: Iter 1: pop 2→[3,4,5,1]+append 2→[3,4,5,1,2]. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: For efficiency, use collections.deque with rotate() or slicing: lst[k:] + lst[:k]..
• When performance matters, prefer the simplest pattern that still implements: This simulates left rotation by popping the front and appending to back..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This simulates left rotation by popping the front and appending to back..

Notes:
• For maintainable code, make the intent behind: Iter 0: pop 1→[2,3,4,5]+append 1→[2,3,4,5,1]. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q80: Nested dict value extraction
  (_i: number) => ({
    q: `What is vals?\ndata = {"x": {"a": 1}, "y": {"b": 2}}\nvals = []\nfor inner in data.values():\n    vals.extend(inner.values())\nvals`,
    o: ["[1, 2]", "[{'a': 1}, {'b': 2}]", "['a', 'b']", "Error"],
    c: 0,
    e: "Outer loop gets inner dicts; inner .values() extracts 1 and 2.",
    de: `Iterating a nested dict requires accessing inner dicts first. data.values() yields {'a': 1} and {'b': 2}. inner.values() extracts [1] and [2]. extend() adds each to vals. Result: [1, 2]. Common pattern for flattening nested data structures.

Key Concepts:
• Common pattern for flattening nested data structures.

Key Distinctions:
• This question’s focus is best captured by: Iterating a nested dict requires accessing inner dicts first.
• The contrast that matters for correctness is summarized by: data.values() yields {'a': 1} and {'b': 2}.

How It Works:
• Python follows the rule implied by: Iterating a nested dict requires accessing inner dicts first.
• The outcome you observe follows from: Common pattern for flattening nested data structures.

Step-by-Step Execution:
1. Start from the construct described in: Iterating a nested dict requires accessing inner dicts first.
2. Resolve the subparts implied by: data.values() yields {'a': 1} and {'b': 2}.
3. Apply the core semantics highlighted in: inner.values() extracts [1] and [2].
4. Confirm the final result aligns with: Common pattern for flattening nested data structures.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: data.values() yields {'a': 1} and {'b': 2}.
2. Apply the construct’s main rule next, matching: Iterating a nested dict requires accessing inner dicts first.
3. Produce any intermediate values that Common pattern for flattening nested data structures. relies on
4. Finish by returning/assembling the final output named by: Common pattern for flattening nested data structures.
5. Use the result only after the full construct has completed, per: Iterating a nested dict requires accessing inner dicts first.

Common Use Cases:
• Teaching this behavior using the mental model: Iterating a nested dict requires accessing inner dicts first.
• Debugging when the observed value should match the expectation in: Common pattern for flattening nested data structures.

Edge Cases:
• If inputs vary from the situation described in: data.values() yields {'a': 1} and {'b': 2}., the behavior can change.
• When the construct’s assumptions differ, the rule in: inner.values() extracts [1] and [2]. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Common pattern for flattening nested data structures..
• When performance matters, prefer the simplest pattern that still implements: Iterating a nested dict requires accessing inner dicts first..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Iterating a nested dict requires accessing inner dicts first..

Notes:
• For maintainable code, make the intent behind: data.values() yields {'a': 1} and {'b': 2}. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q81: Simple character classifier
  (_i: number) => ({
    q: `What is ["op" if ch in "+-*" else "num" for ch in "3+5"]?`,
    o: ["['num', 'op', 'num']", "['3', '+', '5']", "['op', 'num', 'op']", "Error"],
    c: 0,
    e: "'3' → 'num', '+' → 'op', '5' → 'num'.",
    de: `Each character is classified: '3' is not in '+-*' → 'num', '+' is → 'op', '5' → 'num'. This is a simple tokenizer that classifies characters as operators or numbers. Foundation concept for parsers and expression evaluators.

Key Concepts:
• Foundation concept for parsers and expression evaluators.

Key Distinctions:
• This question’s focus is best captured by: Each character is classified: '3' is not in '+-*' → 'num', '+' is → 'op', '5' → 'num'.
• The contrast that matters for correctness is summarized by: This is a simple tokenizer that classifies characters as operators or numbers.

How It Works:
• Python follows the rule implied by: Each character is classified: '3' is not in '+-*' → 'num', '+' is → 'op', '5' → 'num'.
• The outcome you observe follows from: Foundation concept for parsers and expression evaluators.

Step-by-Step Execution:
1. Start from the construct described in: Each character is classified: '3' is not in '+-*' → 'num', '+' is → 'op', '5' → 'num'.
2. Resolve the subparts implied by: This is a simple tokenizer that classifies characters as operators or numbers.
3. Apply the core semantics highlighted in: Foundation concept for parsers and expression evaluators.
4. Confirm the final result aligns with: Foundation concept for parsers and expression evaluators.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: This is a simple tokenizer that classifies characters as operators or numbers.
2. Apply the construct’s main rule next, matching: Each character is classified: '3' is not in '+-*' → 'num', '+' is → 'op', '5' → 'num'.
3. Produce any intermediate values that Foundation concept for parsers and expression evaluators. relies on
4. Finish by returning/assembling the final output named by: Foundation concept for parsers and expression evaluators.
5. Use the result only after the full construct has completed, per: Each character is classified: '3' is not in '+-*' → 'num', '+' is → 'op', '5' → 'num'.

Common Use Cases:
• Teaching this behavior using the mental model: Each character is classified: '3' is not in '+-*' → 'num', '+' is → 'op', '5' → 'num'.
• Debugging when the observed value should match the expectation in: Foundation concept for parsers and expression evaluators.

Edge Cases:
• If inputs vary from the situation described in: This is a simple tokenizer that classifies characters as operators or numbers., the behavior can change.
• When the construct’s assumptions differ, the rule in: Foundation concept for parsers and expression evaluators. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Foundation concept for parsers and expression evaluators..
• When performance matters, prefer the simplest pattern that still implements: Each character is classified: '3' is not in '+-*' → 'num', '+' is → 'op', '5' → 'num'..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Each character is classified: '3' is not in '+-*' → 'num', '+' is → 'op', '5' → 'num'..

Notes:
• For maintainable code, make the intent behind: This is a simple tokenizer that classifies characters as operators or numbers. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q82: Sentinel-based early termination
  (_i: number) => ({
    q: `What is total?\ndata = [3, 7, 0, 5, 2]\ntotal = 0\nfor x in data:\n    if x == 0:\n        break\n    total += x\ntotal`,
    o: ["10", "17", "0", "15"],
    c: 0,
    e: "Adds 3 and 7 (total=10), then hits 0 (sentinel) and breaks.",
    de: `The sentinel pattern uses a special value (0) to signal early termination. 3→total=3, 7→total=10, 0→break. Elements 5 and 2 are never processed. Sentinel values signal "end of useful data." Common sentinels: 0, -1, None, "".

Key Concepts:
• Sentinel values signal "end of useful data." Common sentinels: 0, -1, None, "".

Key Distinctions:
• This question’s focus is best captured by: The sentinel pattern uses a special value (0) to signal early termination.
• The contrast that matters for correctness is summarized by: 3→total=3, 7→total=10, 0→break.

How It Works:
• Python follows the rule implied by: The sentinel pattern uses a special value (0) to signal early termination.
• The outcome you observe follows from: Sentinel values signal "end of useful data." Common sentinels: 0, -1, None, "".

Step-by-Step Execution:
1. Start from the construct described in: The sentinel pattern uses a special value (0) to signal early termination.
2. Resolve the subparts implied by: 3→total=3, 7→total=10, 0→break.
3. Apply the core semantics highlighted in: Elements 5 and 2 are never processed.
4. Confirm the final result aligns with: Sentinel values signal "end of useful data." Common sentinels: 0, -1, None, "".

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: 3→total=3, 7→total=10, 0→break.
2. Apply the construct’s main rule next, matching: The sentinel pattern uses a special value (0) to signal early termination.
3. Produce any intermediate values that Sentinel values signal "end of useful data." Common sentinels: 0, -1, None, "". relies on
4. Finish by returning/assembling the final output named by: Sentinel values signal "end of useful data." Common sentinels: 0, -1, None, "".
5. Use the result only after the full construct has completed, per: The sentinel pattern uses a special value (0) to signal early termination.

Common Use Cases:
• Teaching this behavior using the mental model: The sentinel pattern uses a special value (0) to signal early termination.
• Debugging when the observed value should match the expectation in: Sentinel values signal "end of useful data." Common sentinels: 0, -1, None, "".

Edge Cases:
• If inputs vary from the situation described in: 3→total=3, 7→total=10, 0→break., the behavior can change.
• When the construct’s assumptions differ, the rule in: Elements 5 and 2 are never processed. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Sentinel values signal "end of useful data." Common sentinels: 0, -1, None, ""..
• When performance matters, prefer the simplest pattern that still implements: The sentinel pattern uses a special value (0) to signal early termination..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The sentinel pattern uses a special value (0) to signal early termination..

Notes:
• For maintainable code, make the intent behind: 3→total=3, 7→total=10, 0→break. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q83: Pairwise comparison
  (_i: number) => ({
    q: `What is [nums[i] < nums[i+1] for i in range(len(nums)-1)] where nums = [1, 3, 2, 4]?`,
    o: ["[True, False, True]", "[True, True, True]", "[False, True, False]", "Error"],
    c: 0,
    e: "1<3=True, 3<2=False, 2<4=True.",
    de: `Pairwise comparison checks consecutive elements. 1<3→True, 3<2→False, 2<4→True. If all True, the list is sorted ascending. range(len-1) prevents IndexError on the last element. Alternative: [a < b for a, b in zip(nums, nums[1:])].

Key Concepts:
• Alternative: [a < b for a, b in zip(nums, nums[1:])].

Key Distinctions:
• This question’s focus is best captured by: Pairwise comparison checks consecutive elements.
• The contrast that matters for correctness is summarized by: 1<3→True, 3<2→False, 2<4→True.

How It Works:
• Python follows the rule implied by: Pairwise comparison checks consecutive elements.
• The outcome you observe follows from: Alternative: [a < b for a, b in zip(nums, nums[1:])].

Step-by-Step Execution:
1. Start from the construct described in: Pairwise comparison checks consecutive elements.
2. Resolve the subparts implied by: 1<3→True, 3<2→False, 2<4→True.
3. Apply the core semantics highlighted in: If all True, the list is sorted ascending.
4. Confirm the final result aligns with: Alternative: [a < b for a, b in zip(nums, nums[1:])].

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: 1<3→True, 3<2→False, 2<4→True.
2. Apply the construct’s main rule next, matching: Pairwise comparison checks consecutive elements.
3. Produce any intermediate values that Alternative: [a < b for a, b in zip(nums, nums[1:])]. relies on
4. Finish by returning/assembling the final output named by: Alternative: [a < b for a, b in zip(nums, nums[1:])].
5. Use the result only after the full construct has completed, per: Pairwise comparison checks consecutive elements.

Common Use Cases:
• Teaching this behavior using the mental model: Pairwise comparison checks consecutive elements.
• Debugging when the observed value should match the expectation in: Alternative: [a < b for a, b in zip(nums, nums[1:])].

Edge Cases:
• If inputs vary from the situation described in: 1<3→True, 3<2→False, 2<4→True., the behavior can change.
• When the construct’s assumptions differ, the rule in: If all True, the list is sorted ascending. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Alternative: [a < b for a, b in zip(nums, nums[1:])]..
• When performance matters, prefer the simplest pattern that still implements: Pairwise comparison checks consecutive elements..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Pairwise comparison checks consecutive elements..

Notes:
• For maintainable code, make the intent behind: 1<3→True, 3<2→False, 2<4→True. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q84: Powers of 2
  (_i: number) => ({
    q: `What is [2 ** i for i in range(6)]?`,
    o: ["[1, 2, 4, 8, 16, 32]", "[2, 4, 8, 16, 32, 64]", "[0, 2, 4, 8, 16, 32]", "Error"],
    c: 0,
    e: "2**0=1, 2**1=2, 2**2=4, ..., 2**5=32.",
    de: `Powers of 2 are generated with the ** operator. 2**0=1 (any number to the power 0 is 1). Sequence: 1, 2, 4, 8, 16, 32. Powers of 2 appear throughout CS: memory sizes, hash table capacities. Bit shifting equivalent: 1 << i.

Key Concepts:
• Bit shifting equivalent: 1 << i.

Key Distinctions:
• This question’s focus is best captured by: Powers of 2 are generated with the ** operator.
• The contrast that matters for correctness is summarized by: 2**0=1 (any number to the power 0 is 1).

How It Works:
• Python follows the rule implied by: Powers of 2 are generated with the ** operator.
• The outcome you observe follows from: Bit shifting equivalent: 1 << i.

Step-by-Step Execution:
1. Start from the construct described in: Powers of 2 are generated with the ** operator.
2. Resolve the subparts implied by: 2**0=1 (any number to the power 0 is 1).
3. Apply the core semantics highlighted in: Sequence: 1, 2, 4, 8, 16, 32.
4. Confirm the final result aligns with: Bit shifting equivalent: 1 << i.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: 2**0=1 (any number to the power 0 is 1).
2. Apply the construct’s main rule next, matching: Powers of 2 are generated with the ** operator.
3. Produce any intermediate values that Bit shifting equivalent: 1 << i. relies on
4. Finish by returning/assembling the final output named by: Bit shifting equivalent: 1 << i.
5. Use the result only after the full construct has completed, per: Powers of 2 are generated with the ** operator.

Common Use Cases:
• Teaching this behavior using the mental model: Powers of 2 are generated with the ** operator.
• Debugging when the observed value should match the expectation in: Bit shifting equivalent: 1 << i.

Edge Cases:
• If inputs vary from the situation described in: 2**0=1 (any number to the power 0 is 1)., the behavior can change.
• When the construct’s assumptions differ, the rule in: Sequence: 1, 2, 4, 8, 16, 32. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Bit shifting equivalent: 1 << i..
• When performance matters, prefer the simplest pattern that still implements: Powers of 2 are generated with the ** operator..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Powers of 2 are generated with the ** operator..

Notes:
• For maintainable code, make the intent behind: 2**0=1 (any number to the power 0 is 1). explicit (and test it with inputs like those in this prompt).`
  }),
  // Q85: Formatted output with enumerate + join
  (_i: number) => ({
    q: `What is "-".join([f"{i}:{v}" for i, v in enumerate(["a", "b", "c"])])?`,
    o: ["'0:a-1:b-2:c'", "'a:0-b:1-c:2'", "'0-a-1-b-2-c'", "Error"],
    c: 0,
    e: "enumerate gives (0,'a'), (1,'b'), (2,'c'); f-string formats, join connects.",
    de: `Combining enumerate, f-strings, and join builds formatted output. enumerate yields index-value pairs. f'{i}:{v}' formats each as '0:a', '1:b', '2:c'. join connects them with '-'. This pattern is common for generating CSV, logs, and display strings.

Key Concepts:
• This pattern is common for generating CSV, logs, and display strings.

Key Distinctions:
• This question’s focus is best captured by: Combining enumerate, f-strings, and join builds formatted output.
• The contrast that matters for correctness is summarized by: enumerate yields index-value pairs.

How It Works:
• Python follows the rule implied by: Combining enumerate, f-strings, and join builds formatted output.
• The outcome you observe follows from: This pattern is common for generating CSV, logs, and display strings.

Step-by-Step Execution:
1. Start from the construct described in: Combining enumerate, f-strings, and join builds formatted output.
2. Resolve the subparts implied by: enumerate yields index-value pairs.
3. Apply the core semantics highlighted in: f'{i}:{v}' formats each as '0:a', '1:b', '2:c'.
4. Confirm the final result aligns with: This pattern is common for generating CSV, logs, and display strings.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: enumerate yields index-value pairs.
2. Apply the construct’s main rule next, matching: Combining enumerate, f-strings, and join builds formatted output.
3. Produce any intermediate values that This pattern is common for generating CSV, logs, and display strings. relies on
4. Finish by returning/assembling the final output named by: This pattern is common for generating CSV, logs, and display strings.
5. Use the result only after the full construct has completed, per: Combining enumerate, f-strings, and join builds formatted output.

Common Use Cases:
• Teaching this behavior using the mental model: Combining enumerate, f-strings, and join builds formatted output.
• Debugging when the observed value should match the expectation in: This pattern is common for generating CSV, logs, and display strings.

Edge Cases:
• If inputs vary from the situation described in: enumerate yields index-value pairs., the behavior can change.
• When the construct’s assumptions differ, the rule in: f'{i}:{v}' formats each as '0:a', '1:b', '2:c'. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This pattern is common for generating CSV, logs, and display strings..
• When performance matters, prefer the simplest pattern that still implements: Combining enumerate, f-strings, and join builds formatted output..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Combining enumerate, f-strings, and join builds formatted output..

Notes:
• For maintainable code, make the intent behind: enumerate yields index-value pairs. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q86: Default dict string accumulation
  (_i: number) => ({
    q: `What is d[1]?\ndata = [(1, "a"), (2, "b"), (1, "c")]\nd = {}\nfor k, v in data:\n    d[k] = d.get(k, "") + v\nd[1]`,
    o: ["'ac'", "'a'", "'c'", "Error"],
    c: 0,
    e: "d.get(1,'')='', +'a'='a'. Then d.get(1,'')='a', +'c'='ac'.",
    de: `Same accumulation pattern as numeric summing but with string concatenation. get(k, '') returns empty string for new keys. First: ''+'a'='a'. Second: 'a'+'c'='ac'. Equivalent to defaultdict(str). Useful for building composite strings from grouped records.

Key Concepts:
• Useful for building composite strings from grouped records.

Key Distinctions:
• This question’s focus is best captured by: Same accumulation pattern as numeric summing but with string concatenation.
• The contrast that matters for correctness is summarized by: get(k, '') returns empty string for new keys.

How It Works:
• Python follows the rule implied by: Same accumulation pattern as numeric summing but with string concatenation.
• The outcome you observe follows from: Useful for building composite strings from grouped records.

Step-by-Step Execution:
1. Start from the construct described in: Same accumulation pattern as numeric summing but with string concatenation.
2. Resolve the subparts implied by: get(k, '') returns empty string for new keys.
3. Apply the core semantics highlighted in: First: ''+'a'='a'.
4. Confirm the final result aligns with: Useful for building composite strings from grouped records.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: get(k, '') returns empty string for new keys.
2. Apply the construct’s main rule next, matching: Same accumulation pattern as numeric summing but with string concatenation.
3. Produce any intermediate values that Useful for building composite strings from grouped records. relies on
4. Finish by returning/assembling the final output named by: Useful for building composite strings from grouped records.
5. Use the result only after the full construct has completed, per: Same accumulation pattern as numeric summing but with string concatenation.

Common Use Cases:
• Teaching this behavior using the mental model: Same accumulation pattern as numeric summing but with string concatenation.
• Debugging when the observed value should match the expectation in: Useful for building composite strings from grouped records.

Edge Cases:
• If inputs vary from the situation described in: get(k, '') returns empty string for new keys., the behavior can change.
• When the construct’s assumptions differ, the rule in: First: ''+'a'='a'. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Useful for building composite strings from grouped records..
• When performance matters, prefer the simplest pattern that still implements: Same accumulation pattern as numeric summing but with string concatenation..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Same accumulation pattern as numeric summing but with string concatenation..

Notes:
• For maintainable code, make the intent behind: get(k, '') returns empty string for new keys. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q87: ASCII character generation
  (_i: number) => ({
    q: `What is "".join([chr(i) for i in range(65, 70)])?`,
    o: ["'ABCDE'", "'abcde'", "'65666768'", "Error"],
    c: 0,
    e: "chr(65)='A' through chr(69)='E'. ASCII uppercase starts at 65.",
    de: `chr() converts an integer ASCII code to its character. Uppercase A-Z are codes 65-90. chr(65)='A', chr(66)='B', ..., chr(69)='E'. The inverse function is ord(): ord('A')=65. Useful for generating character ranges and simple encodings.

Key Concepts:
• Useful for generating character ranges and simple encodings.

Key Distinctions:
• This question’s focus is best captured by: chr() converts an integer ASCII code to its character.
• The contrast that matters for correctness is summarized by: Uppercase A-Z are codes 65-90.

How It Works:
• Python follows the rule implied by: chr() converts an integer ASCII code to its character.
• The outcome you observe follows from: Useful for generating character ranges and simple encodings.

Step-by-Step Execution:
1. Start from the construct described in: chr() converts an integer ASCII code to its character.
2. Resolve the subparts implied by: Uppercase A-Z are codes 65-90.
3. Apply the core semantics highlighted in: chr(65)='A', chr(66)='B', ..., chr(69)='E'.
4. Confirm the final result aligns with: Useful for generating character ranges and simple encodings.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Uppercase A-Z are codes 65-90.
2. Apply the construct’s main rule next, matching: chr() converts an integer ASCII code to its character.
3. Produce any intermediate values that Useful for generating character ranges and simple encodings. relies on
4. Finish by returning/assembling the final output named by: Useful for generating character ranges and simple encodings.
5. Use the result only after the full construct has completed, per: chr() converts an integer ASCII code to its character.

Common Use Cases:
• Teaching this behavior using the mental model: chr() converts an integer ASCII code to its character.
• Debugging when the observed value should match the expectation in: Useful for generating character ranges and simple encodings.

Edge Cases:
• If inputs vary from the situation described in: Uppercase A-Z are codes 65-90., the behavior can change.
• When the construct’s assumptions differ, the rule in: chr(65)='A', chr(66)='B', ..., chr(69)='E'. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Useful for generating character ranges and simple encodings..
• When performance matters, prefer the simplest pattern that still implements: chr() converts an integer ASCII code to its character..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: chr() converts an integer ASCII code to its character..

Notes:
• For maintainable code, make the intent behind: Uppercase A-Z are codes 65-90. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q88: Order-preserving unique
  (_i: number) => ({
    q: `What is unique?\nitems = [3, 1, 2, 1, 3, 4]\nseen = set()\nunique = []\nfor x in items:\n    if x not in seen:\n        seen.add(x)\n        unique.append(x)\nunique`,
    o: ["[3, 1, 2, 4]", "[1, 2, 3, 4]", "[3, 1, 2, 1, 3, 4]", "Error"],
    c: 0,
    e: "Duplicates skipped via set lookup; insertion order preserved.",
    de: `This removes duplicates while preserving original order of first appearances. set() provides O(1) membership testing. Unlike list(set(items)) which returns [1,2,3,4] (sorted-like), this gives [3,1,2,4] (insertion order). In Python 3.7+, list(dict.fromkeys(items)) is a shortcut.

Key Concepts:
• In Python 3.7+, list(dict.fromkeys(items)) is a shortcut.

Key Distinctions:
• This question’s focus is best captured by: This removes duplicates while preserving original order of first appearances.
• The contrast that matters for correctness is summarized by: set() provides O(1) membership testing.

How It Works:
• Python follows the rule implied by: This removes duplicates while preserving original order of first appearances.
• The outcome you observe follows from: In Python 3.7+, list(dict.fromkeys(items)) is a shortcut.

Step-by-Step Execution:
1. Start from the construct described in: This removes duplicates while preserving original order of first appearances.
2. Resolve the subparts implied by: set() provides O(1) membership testing.
3. Apply the core semantics highlighted in: Unlike list(set(items)) which returns [1,2,3,4] (sorted-like), this gives [3,1,2,4] (insertion order).
4. Confirm the final result aligns with: In Python 3.7+, list(dict.fromkeys(items)) is a shortcut.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: set() provides O(1) membership testing.
2. Apply the construct’s main rule next, matching: This removes duplicates while preserving original order of first appearances.
3. Produce any intermediate values that In Python 3.7+, list(dict.fromkeys(items)) is a shortcut. relies on
4. Finish by returning/assembling the final output named by: In Python 3.7+, list(dict.fromkeys(items)) is a shortcut.
5. Use the result only after the full construct has completed, per: This removes duplicates while preserving original order of first appearances.

Common Use Cases:
• Teaching this behavior using the mental model: This removes duplicates while preserving original order of first appearances.
• Debugging when the observed value should match the expectation in: In Python 3.7+, list(dict.fromkeys(items)) is a shortcut.

Edge Cases:
• If inputs vary from the situation described in: set() provides O(1) membership testing., the behavior can change.
• When the construct’s assumptions differ, the rule in: Unlike list(set(items)) which returns [1,2,3,4] (sorted-like), this gives [3,1,2,4] (insertion order). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: In Python 3.7+, list(dict.fromkeys(items)) is a shortcut..
• When performance matters, prefer the simplest pattern that still implements: This removes duplicates while preserving original order of first appearances..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This removes duplicates while preserving original order of first appearances..

Notes:
• For maintainable code, make the intent behind: set() provides O(1) membership testing. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q89: Cumulative product
  (_i: number) => ({
    q: `What is product?\nnums = [1, 2, 3, 4]\nproduct = 1\nfor x in nums:\n    product *= x\nproduct`,
    o: ["24", "10", "12", "0"],
    c: 0,
    e: "1×1=1, 1×2=2, 2×3=6, 6×4=24.",
    de: `Cumulative product multiplies all elements. Start with 1 (identity for multiplication). 1×1=1, 1×2=2, 2×3=6, 6×4=24. Starting with 0 would always give 0 (common bug). Equivalent to math.prod([1,2,3,4]) in Python 3.8+.

Key Concepts:
• Equivalent to math.prod([1,2,3,4]) in Python 3.8+.

Key Distinctions:
• This question’s focus is best captured by: Cumulative product multiplies all elements.
• The contrast that matters for correctness is summarized by: Start with 1 (identity for multiplication).

How It Works:
• Python follows the rule implied by: Cumulative product multiplies all elements.
• The outcome you observe follows from: Equivalent to math.prod([1,2,3,4]) in Python 3.8+.

Step-by-Step Execution:
1. Start from the construct described in: Cumulative product multiplies all elements.
2. Resolve the subparts implied by: Start with 1 (identity for multiplication).
3. Apply the core semantics highlighted in: 1×1=1, 1×2=2, 2×3=6, 6×4=24.
4. Confirm the final result aligns with: Equivalent to math.prod([1,2,3,4]) in Python 3.8+.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Start with 1 (identity for multiplication).
2. Apply the construct’s main rule next, matching: Cumulative product multiplies all elements.
3. Produce any intermediate values that Equivalent to math.prod([1,2,3,4]) in Python 3.8+. relies on
4. Finish by returning/assembling the final output named by: Equivalent to math.prod([1,2,3,4]) in Python 3.8+.
5. Use the result only after the full construct has completed, per: Cumulative product multiplies all elements.

Common Use Cases:
• Teaching this behavior using the mental model: Cumulative product multiplies all elements.
• Debugging when the observed value should match the expectation in: Equivalent to math.prod([1,2,3,4]) in Python 3.8+.

Edge Cases:
• If inputs vary from the situation described in: Start with 1 (identity for multiplication)., the behavior can change.
• When the construct’s assumptions differ, the rule in: 1×1=1, 1×2=2, 2×3=6, 6×4=24. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Equivalent to math.prod([1,2,3,4]) in Python 3.8+..
• When performance matters, prefer the simplest pattern that still implements: Cumulative product multiplies all elements..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Cumulative product multiplies all elements..

Notes:
• For maintainable code, make the intent behind: Start with 1 (identity for multiplication). explicit (and test it with inputs like those in this prompt).`
  }),
  // Q90: Multiple ranges concatenated
  (_i: number) => ({
    q: `What is result?\nresult = []\nfor r in [range(3), range(10, 13)]:\n    for x in r:\n        result.append(x)\nresult`,
    o: ["[0, 1, 2, 10, 11, 12]", "[0, 1, 2, 3, 10, 11, 12, 13]", "[10, 11, 12, 0, 1, 2]", "Error"],
    c: 0,
    e: "Iterates range(3) then range(10,13), concatenating both sequences.",
    de: `This concatenates multiple ranges by iterating over a list of range objects. range(3)→0,1,2 then range(10,13)→10,11,12. Equivalent to itertools.chain(range(3), range(10, 13)). Useful for processing non-contiguous index ranges.

Key Concepts:
• Useful for processing non-contiguous index ranges.

Key Distinctions:
• This question’s focus is best captured by: This concatenates multiple ranges by iterating over a list of range objects.
• The contrast that matters for correctness is summarized by: range(3)→0,1,2 then range(10,13)→10,11,12.

How It Works:
• Python follows the rule implied by: This concatenates multiple ranges by iterating over a list of range objects.
• The outcome you observe follows from: Useful for processing non-contiguous index ranges.

Step-by-Step Execution:
1. Start from the construct described in: This concatenates multiple ranges by iterating over a list of range objects.
2. Resolve the subparts implied by: range(3)→0,1,2 then range(10,13)→10,11,12.
3. Apply the core semantics highlighted in: Equivalent to itertools.chain(range(3), range(10, 13)).
4. Confirm the final result aligns with: Useful for processing non-contiguous index ranges.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: range(3)→0,1,2 then range(10,13)→10,11,12.
2. Apply the construct’s main rule next, matching: This concatenates multiple ranges by iterating over a list of range objects.
3. Produce any intermediate values that Useful for processing non-contiguous index ranges. relies on
4. Finish by returning/assembling the final output named by: Useful for processing non-contiguous index ranges.
5. Use the result only after the full construct has completed, per: This concatenates multiple ranges by iterating over a list of range objects.

Common Use Cases:
• Teaching this behavior using the mental model: This concatenates multiple ranges by iterating over a list of range objects.
• Debugging when the observed value should match the expectation in: Useful for processing non-contiguous index ranges.

Edge Cases:
• If inputs vary from the situation described in: range(3)→0,1,2 then range(10,13)→10,11,12., the behavior can change.
• When the construct’s assumptions differ, the rule in: Equivalent to itertools.chain(range(3), range(10, 13)). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Useful for processing non-contiguous index ranges..
• When performance matters, prefer the simplest pattern that still implements: This concatenates multiple ranges by iterating over a list of range objects..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This concatenates multiple ranges by iterating over a list of range objects..

Notes:
• For maintainable code, make the intent behind: range(3)→0,1,2 then range(10,13)→10,11,12. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q91: Chunking/batching a list
  (_i: number) => ({
    q: `What is chunks?\ndata = [1, 2, 3, 4, 5, 6]\nchunks = []\nfor i in range(0, len(data), 2):\n    chunks.append(data[i:i+2])\nchunks`,
    o: ["[[1, 2], [3, 4], [5, 6]]", "[[1, 2], [3, 4], [5, 6], []]", "[[1, 2, 3], [4, 5, 6]]", "Error"],
    c: 0,
    e: "range(0, 6, 2) → i=0,2,4. Each slice takes 2 elements.",
    de: `Chunking splits a sequence into fixed-size sub-lists. range step matches chunk size. i=0: [1,2], i=2: [3,4], i=4: [5,6]. If length isn't divisible by chunk size, the last chunk is simply shorter (no error). Pattern: [data[i:i+n] for i in range(0, len(data), n)].

Key Concepts:
• Pattern: [data[i:i+n] for i in range(0, len(data), n)].

Key Distinctions:
• This question’s focus is best captured by: Chunking splits a sequence into fixed-size sub-lists.
• The contrast that matters for correctness is summarized by: range step matches chunk size.

How It Works:
• Python follows the rule implied by: Chunking splits a sequence into fixed-size sub-lists.
• The outcome you observe follows from: Pattern: [data[i:i+n] for i in range(0, len(data), n)].

Step-by-Step Execution:
1. Start from the construct described in: Chunking splits a sequence into fixed-size sub-lists.
2. Resolve the subparts implied by: range step matches chunk size.
3. Apply the core semantics highlighted in: i=0: [1,2], i=2: [3,4], i=4: [5,6].
4. Confirm the final result aligns with: Pattern: [data[i:i+n] for i in range(0, len(data), n)].

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: range step matches chunk size.
2. Apply the construct’s main rule next, matching: Chunking splits a sequence into fixed-size sub-lists.
3. Produce any intermediate values that Pattern: [data[i:i+n] for i in range(0, len(data), n)]. relies on
4. Finish by returning/assembling the final output named by: Pattern: [data[i:i+n] for i in range(0, len(data), n)].
5. Use the result only after the full construct has completed, per: Chunking splits a sequence into fixed-size sub-lists.

Common Use Cases:
• Teaching this behavior using the mental model: Chunking splits a sequence into fixed-size sub-lists.
• Debugging when the observed value should match the expectation in: Pattern: [data[i:i+n] for i in range(0, len(data), n)].

Edge Cases:
• If inputs vary from the situation described in: range step matches chunk size., the behavior can change.
• When the construct’s assumptions differ, the rule in: i=0: [1,2], i=2: [3,4], i=4: [5,6]. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Pattern: [data[i:i+n] for i in range(0, len(data), n)]..
• When performance matters, prefer the simplest pattern that still implements: Chunking splits a sequence into fixed-size sub-lists..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Chunking splits a sequence into fixed-size sub-lists..

Notes:
• For maintainable code, make the intent behind: range step matches chunk size. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q92: Grouping words by first letter
  (_i: number) => ({
    q: `What is d["h"]?\nwords = ["hi", "hey", "bye"]\nd = {}\nfor w in words:\n    d.setdefault(w[0], []).append(w)\nd["h"]`,
    o: ["['hi', 'hey']", "['hi']", "['hey']", "Error"],
    c: 0,
    e: "Groups by first letter: 'hi' and 'hey' both start with 'h'.",
    de: `This builds a dict mapping first letters to words starting with that letter. w[0] extracts the first character. setdefault creates or retrieves the list. 'hi'→d['h']=['hi'], then 'hey'→d['h']=['hi','hey']. Common for building prefix indexes.

Key Concepts:
• Common for building prefix indexes.

Key Distinctions:
• This question’s focus is best captured by: This builds a dict mapping first letters to words starting with that letter.
• The contrast that matters for correctness is summarized by: w[0] extracts the first character.

How It Works:
• Python follows the rule implied by: This builds a dict mapping first letters to words starting with that letter.
• The outcome you observe follows from: Common for building prefix indexes.

Step-by-Step Execution:
1. Start from the construct described in: This builds a dict mapping first letters to words starting with that letter.
2. Resolve the subparts implied by: w[0] extracts the first character.
3. Apply the core semantics highlighted in: setdefault creates or retrieves the list.
4. Confirm the final result aligns with: Common for building prefix indexes.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: w[0] extracts the first character.
2. Apply the construct’s main rule next, matching: This builds a dict mapping first letters to words starting with that letter.
3. Produce any intermediate values that Common for building prefix indexes. relies on
4. Finish by returning/assembling the final output named by: Common for building prefix indexes.
5. Use the result only after the full construct has completed, per: This builds a dict mapping first letters to words starting with that letter.

Common Use Cases:
• Teaching this behavior using the mental model: This builds a dict mapping first letters to words starting with that letter.
• Debugging when the observed value should match the expectation in: Common for building prefix indexes.

Edge Cases:
• If inputs vary from the situation described in: w[0] extracts the first character., the behavior can change.
• When the construct’s assumptions differ, the rule in: setdefault creates or retrieves the list. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Common for building prefix indexes..
• When performance matters, prefer the simplest pattern that still implements: This builds a dict mapping first letters to words starting with that letter..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This builds a dict mapping first letters to words starting with that letter..

Notes:
• For maintainable code, make the intent behind: w[0] extracts the first character. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q93: Interleaving two sequences
  (_i: number) => ({
    q: `What is result?\na = [1, 2, 3]\nb = ["x", "y", "z"]\nresult = []\nfor i in range(len(a)):\n    result.extend([a[i], b[i]])\nresult`,
    o: ["[1, 'x', 2, 'y', 3, 'z']", "[[1, 'x'], [2, 'y'], [3, 'z']]", "[1, 2, 3, 'x', 'y', 'z']", "Error"],
    c: 0,
    e: "extend adds both a[i] and b[i] each iteration, interleaving.",
    de: `Interleaving alternates elements from two sequences. extend([a[i], b[i]]) adds both elements each iteration. Alternative: [v for pair in zip(a, b) for v in pair]. Used in merge operations and round-robin scheduling.

Key Concepts:
• Used in merge operations and round-robin scheduling.

Key Distinctions:
• This question’s focus is best captured by: Interleaving alternates elements from two sequences.
• The contrast that matters for correctness is summarized by: extend([a[i], b[i]]) adds both elements each iteration.

How It Works:
• Python follows the rule implied by: Interleaving alternates elements from two sequences.
• The outcome you observe follows from: Used in merge operations and round-robin scheduling.

Step-by-Step Execution:
1. Start from the construct described in: Interleaving alternates elements from two sequences.
2. Resolve the subparts implied by: extend([a[i], b[i]]) adds both elements each iteration.
3. Apply the core semantics highlighted in: Alternative: [v for pair in zip(a, b) for v in pair].
4. Confirm the final result aligns with: Used in merge operations and round-robin scheduling.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: extend([a[i], b[i]]) adds both elements each iteration.
2. Apply the construct’s main rule next, matching: Interleaving alternates elements from two sequences.
3. Produce any intermediate values that Used in merge operations and round-robin scheduling. relies on
4. Finish by returning/assembling the final output named by: Used in merge operations and round-robin scheduling.
5. Use the result only after the full construct has completed, per: Interleaving alternates elements from two sequences.

Common Use Cases:
• Teaching this behavior using the mental model: Interleaving alternates elements from two sequences.
• Debugging when the observed value should match the expectation in: Used in merge operations and round-robin scheduling.

Edge Cases:
• If inputs vary from the situation described in: extend([a[i], b[i]]) adds both elements each iteration., the behavior can change.
• When the construct’s assumptions differ, the rule in: Alternative: [v for pair in zip(a, b) for v in pair]. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Used in merge operations and round-robin scheduling..
• When performance matters, prefer the simplest pattern that still implements: Interleaving alternates elements from two sequences..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Interleaving alternates elements from two sequences..

Notes:
• For maintainable code, make the intent behind: extend([a[i], b[i]]) adds both elements each iteration. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q94: Histogram counting
  (_i: number) => ({
    q: `What is hist["a"]?\nhist = {}\nfor ch in "banana":\n    hist[ch] = hist.get(ch, 0) + 1\nhist["a"]`,
    o: ["3", "2", "1", "6"],
    c: 0,
    e: "'banana' has 3 a's at positions 1, 3, 5.",
    de: `Histogram counting tallies occurrences using dict.get(ch, 0) to return 0 for new keys. 'banana': b→1, a→1, n→1, a→2, n→2, a→3. hist = {'b':1, 'a':3, 'n':2}. Equivalent to collections.Counter('banana'). Foundation for frequency analysis.

Key Concepts:
• Foundation for frequency analysis.

Key Distinctions:
• This question’s focus is best captured by: Histogram counting tallies occurrences using dict.get(ch, 0) to return 0 for new keys.
• The contrast that matters for correctness is summarized by: 'banana': b→1, a→1, n→1, a→2, n→2, a→3.

How It Works:
• Python follows the rule implied by: Histogram counting tallies occurrences using dict.get(ch, 0) to return 0 for new keys.
• The outcome you observe follows from: Foundation for frequency analysis.

Step-by-Step Execution:
1. Start from the construct described in: Histogram counting tallies occurrences using dict.get(ch, 0) to return 0 for new keys.
2. Resolve the subparts implied by: 'banana': b→1, a→1, n→1, a→2, n→2, a→3.
3. Apply the core semantics highlighted in: hist = {'b':1, 'a':3, 'n':2}.
4. Confirm the final result aligns with: Foundation for frequency analysis.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: 'banana': b→1, a→1, n→1, a→2, n→2, a→3.
2. Apply the construct’s main rule next, matching: Histogram counting tallies occurrences using dict.get(ch, 0) to return 0 for new keys.
3. Produce any intermediate values that Foundation for frequency analysis. relies on
4. Finish by returning/assembling the final output named by: Foundation for frequency analysis.
5. Use the result only after the full construct has completed, per: Histogram counting tallies occurrences using dict.get(ch, 0) to return 0 for new keys.

Common Use Cases:
• Teaching this behavior using the mental model: Histogram counting tallies occurrences using dict.get(ch, 0) to return 0 for new keys.
• Debugging when the observed value should match the expectation in: Foundation for frequency analysis.

Edge Cases:
• If inputs vary from the situation described in: 'banana': b→1, a→1, n→1, a→2, n→2, a→3., the behavior can change.
• When the construct’s assumptions differ, the rule in: hist = {'b':1, 'a':3, 'n':2}. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Foundation for frequency analysis..
• When performance matters, prefer the simplest pattern that still implements: Histogram counting tallies occurrences using dict.get(ch, 0) to return 0 for new keys..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Histogram counting tallies occurrences using dict.get(ch, 0) to return 0 for new keys..

Notes:
• For maintainable code, make the intent behind: 'banana': b→1, a→1, n→1, a→2, n→2, a→3. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q95: Conditional multiple conditions
  (_i: number) => ({
    q: `What is [x for x in range(10) if x % 2 == 0 and x % 3 == 0]?`,
    o: ["[0, 6]", "[0, 2, 3, 6]", "[6]", "[0, 3, 6, 9]"],
    c: 0,
    e: "Divisible by both 2 and 3 (i.e., by 6): 0 and 6.",
    de: `The 'and' operator requires both conditions to be True. From 0-9, only 0 and 6 are divisible by both 2 and 3 (LCM=6). 'and' short-circuits: if x%2!=0, Python skips the x%3 check. Chained conditions are cleaner than nested if statements.

Key Concepts:
• Chained conditions are cleaner than nested if statements.

Key Distinctions:
• This question’s focus is best captured by: The 'and' operator requires both conditions to be True.
• The contrast that matters for correctness is summarized by: From 0-9, only 0 and 6 are divisible by both 2 and 3 (LCM=6).

How It Works:
• Python follows the rule implied by: The 'and' operator requires both conditions to be True.
• The outcome you observe follows from: Chained conditions are cleaner than nested if statements.

Step-by-Step Execution:
1. Start from the construct described in: The 'and' operator requires both conditions to be True.
2. Resolve the subparts implied by: From 0-9, only 0 and 6 are divisible by both 2 and 3 (LCM=6).
3. Apply the core semantics highlighted in: 'and' short-circuits: if x%2!=0, Python skips the x%3 check.
4. Confirm the final result aligns with: Chained conditions are cleaner than nested if statements.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: From 0-9, only 0 and 6 are divisible by both 2 and 3 (LCM=6).
2. Apply the construct’s main rule next, matching: The 'and' operator requires both conditions to be True.
3. Produce any intermediate values that Chained conditions are cleaner than nested if statements. relies on
4. Finish by returning/assembling the final output named by: Chained conditions are cleaner than nested if statements.
5. Use the result only after the full construct has completed, per: The 'and' operator requires both conditions to be True.

Common Use Cases:
• Teaching this behavior using the mental model: The 'and' operator requires both conditions to be True.
• Debugging when the observed value should match the expectation in: Chained conditions are cleaner than nested if statements.

Edge Cases:
• If inputs vary from the situation described in: From 0-9, only 0 and 6 are divisible by both 2 and 3 (LCM=6)., the behavior can change.
• When the construct’s assumptions differ, the rule in: 'and' short-circuits: if x%2!=0, Python skips the x%3 check. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Chained conditions are cleaner than nested if statements..
• When performance matters, prefer the simplest pattern that still implements: The 'and' operator requires both conditions to be True..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The 'and' operator requires both conditions to be True..

Notes:
• For maintainable code, make the intent behind: From 0-9, only 0 and 6 are divisible by both 2 and 3 (LCM=6). explicit (and test it with inputs like those in this prompt).`
  }),
  // Q96: Dict comprehension with conditional
  (_i: number) => ({
    q: `What is {k: v for k, v in {"a": 1, "b": 2, "c": 3}.items() if v > 1}?`,
    o: ["{'b': 2, 'c': 3}", "{'a': 1}", "{'a': 1, 'b': 2, 'c': 3}", "Error"],
    c: 0,
    e: "Dict comprehension with filter: only values > 1 are kept.",
    de: `Dict comprehensions support if clauses for filtering. .items() yields ('a',1), ('b',2), ('c',3). Only pairs where v > 1 are included: ('b',2) and ('c',3). This is the dict equivalent of list comprehension filtering. Common for creating subsets of dictionaries.

Key Concepts:
• Common for creating subsets of dictionaries.

Key Distinctions:
• This question’s focus is best captured by: Dict comprehensions support if clauses for filtering.
• The contrast that matters for correctness is summarized by: .items() yields ('a',1), ('b',2), ('c',3).

How It Works:
• Python follows the rule implied by: Dict comprehensions support if clauses for filtering.
• The outcome you observe follows from: Common for creating subsets of dictionaries.

Step-by-Step Execution:
1. Start from the construct described in: Dict comprehensions support if clauses for filtering.
2. Resolve the subparts implied by: .items() yields ('a',1), ('b',2), ('c',3).
3. Apply the core semantics highlighted in: Only pairs where v > 1 are included: ('b',2) and ('c',3).
4. Confirm the final result aligns with: Common for creating subsets of dictionaries.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: .items() yields ('a',1), ('b',2), ('c',3).
2. Apply the construct’s main rule next, matching: Dict comprehensions support if clauses for filtering.
3. Produce any intermediate values that Common for creating subsets of dictionaries. relies on
4. Finish by returning/assembling the final output named by: Common for creating subsets of dictionaries.
5. Use the result only after the full construct has completed, per: Dict comprehensions support if clauses for filtering.

Common Use Cases:
• Teaching this behavior using the mental model: Dict comprehensions support if clauses for filtering.
• Debugging when the observed value should match the expectation in: Common for creating subsets of dictionaries.

Edge Cases:
• If inputs vary from the situation described in: .items() yields ('a',1), ('b',2), ('c',3)., the behavior can change.
• When the construct’s assumptions differ, the rule in: Only pairs where v > 1 are included: ('b',2) and ('c',3). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Common for creating subsets of dictionaries..
• When performance matters, prefer the simplest pattern that still implements: Dict comprehensions support if clauses for filtering..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Dict comprehensions support if clauses for filtering..

Notes:
• For maintainable code, make the intent behind: .items() yields ('a',1), ('b',2), ('c',3). explicit (and test it with inputs like those in this prompt).`
  }),
  // Q97: Nested list with enumerate
  (_i: number) => ({
    q: `What is [(i, c) for i, c in enumerate("xyz")]?`,
    o: ["[(0, 'x'), (1, 'y'), (2, 'z')]", "[('x', 0), ('y', 1), ('z', 2)]", "['x', 'y', 'z']", "Error"],
    c: 0,
    e: "enumerate yields (index, char) pairs: (0,'x'), (1,'y'), (2,'z').",
    de: `enumerate() on a string yields (index, character) tuples. The comprehension collects them into a list. This is a concise way to pair each character with its position. Useful for building index maps and position-aware processing.

Key Concepts:
• Useful for building index maps and position-aware processing.

Key Distinctions:
• This question’s focus is best captured by: enumerate() on a string yields (index, character) tuples.
• The contrast that matters for correctness is summarized by: The comprehension collects them into a list.

How It Works:
• Python follows the rule implied by: enumerate() on a string yields (index, character) tuples.
• The outcome you observe follows from: Useful for building index maps and position-aware processing.

Step-by-Step Execution:
1. Start from the construct described in: enumerate() on a string yields (index, character) tuples.
2. Resolve the subparts implied by: The comprehension collects them into a list.
3. Apply the core semantics highlighted in: This is a concise way to pair each character with its position.
4. Confirm the final result aligns with: Useful for building index maps and position-aware processing.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The comprehension collects them into a list.
2. Apply the construct’s main rule next, matching: enumerate() on a string yields (index, character) tuples.
3. Produce any intermediate values that Useful for building index maps and position-aware processing. relies on
4. Finish by returning/assembling the final output named by: Useful for building index maps and position-aware processing.
5. Use the result only after the full construct has completed, per: enumerate() on a string yields (index, character) tuples.

Common Use Cases:
• Teaching this behavior using the mental model: enumerate() on a string yields (index, character) tuples.
• Debugging when the observed value should match the expectation in: Useful for building index maps and position-aware processing.

Edge Cases:
• If inputs vary from the situation described in: The comprehension collects them into a list., the behavior can change.
• When the construct’s assumptions differ, the rule in: This is a concise way to pair each character with its position. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Useful for building index maps and position-aware processing..
• When performance matters, prefer the simplest pattern that still implements: enumerate() on a string yields (index, character) tuples..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: enumerate() on a string yields (index, character) tuples..

Notes:
• For maintainable code, make the intent behind: The comprehension collects them into a list. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q98: String to list of words with processing
  (_i: number) => ({
    q: `What is [w.upper() for w in "hello world".split()]?`,
    o: ["['HELLO', 'WORLD']", "['Hello', 'World']", "['hello', 'world']", "Error"],
    c: 0,
    e: "split() separates words; upper() converts each to uppercase.",
    de: `split() breaks 'hello world' into ['hello', 'world']. The comprehension applies upper() to each word: 'HELLO', 'WORLD'. This chain of split → transform → collect is the standard pattern for text processing in Python. join() can reassemble if needed.

Key Concepts:
• join() can reassemble if needed.

Key Distinctions:
• This question’s focus is best captured by: split() breaks 'hello world' into ['hello', 'world'].
• The contrast that matters for correctness is summarized by: The comprehension applies upper() to each word: 'HELLO', 'WORLD'.

How It Works:
• Python follows the rule implied by: split() breaks 'hello world' into ['hello', 'world'].
• The outcome you observe follows from: join() can reassemble if needed.

Step-by-Step Execution:
1. Start from the construct described in: split() breaks 'hello world' into ['hello', 'world'].
2. Resolve the subparts implied by: The comprehension applies upper() to each word: 'HELLO', 'WORLD'.
3. Apply the core semantics highlighted in: This chain of split → transform → collect is the standard pattern for text processing in Python.
4. Confirm the final result aligns with: join() can reassemble if needed.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The comprehension applies upper() to each word: 'HELLO', 'WORLD'.
2. Apply the construct’s main rule next, matching: split() breaks 'hello world' into ['hello', 'world'].
3. Produce any intermediate values that join() can reassemble if needed. relies on
4. Finish by returning/assembling the final output named by: join() can reassemble if needed.
5. Use the result only after the full construct has completed, per: split() breaks 'hello world' into ['hello', 'world'].

Common Use Cases:
• Teaching this behavior using the mental model: split() breaks 'hello world' into ['hello', 'world'].
• Debugging when the observed value should match the expectation in: join() can reassemble if needed.

Edge Cases:
• If inputs vary from the situation described in: The comprehension applies upper() to each word: 'HELLO', 'WORLD'., the behavior can change.
• When the construct’s assumptions differ, the rule in: This chain of split → transform → collect is the standard pattern for text processing in Python. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: join() can reassemble if needed..
• When performance matters, prefer the simplest pattern that still implements: split() breaks 'hello world' into ['hello', 'world']..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: split() breaks 'hello world' into ['hello', 'world']..

Notes:
• For maintainable code, make the intent behind: The comprehension applies upper() to each word: 'HELLO', 'WORLD'. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q99: zip to create dict directly
  (_i: number) => ({
    q: `What is dict(zip(["name", "age"], ["Alice", 30]))?`,
    o: ["{'name': 'Alice', 'age': 30}", "{'Alice': 'name', 30: 'age'}", "[('name', 'Alice'), ('age', 30)]", "Error"],
    c: 0,
    e: "dict(zip(keys, values)) creates a dictionary from parallel sequences.",
    de: `dict(zip(keys, values)) is the one-liner for building a dictionary from two parallel sequences. zip pairs them: ('name','Alice'), ('age',30). dict() converts the pairs into a dictionary. This is more concise than the loop equivalent and a very common Python idiom.

Key Concepts:
• This is more concise than the loop equivalent and a very common Python idiom.

Key Distinctions:
• This question’s focus is best captured by: dict(zip(keys, values)) is the one-liner for building a dictionary from two parallel sequences.
• The contrast that matters for correctness is summarized by: zip pairs them: ('name','Alice'), ('age',30).

How It Works:
• Python follows the rule implied by: dict(zip(keys, values)) is the one-liner for building a dictionary from two parallel sequences.
• The outcome you observe follows from: This is more concise than the loop equivalent and a very common Python idiom.

Step-by-Step Execution:
1. Start from the construct described in: dict(zip(keys, values)) is the one-liner for building a dictionary from two parallel sequences.
2. Resolve the subparts implied by: zip pairs them: ('name','Alice'), ('age',30).
3. Apply the core semantics highlighted in: dict() converts the pairs into a dictionary.
4. Confirm the final result aligns with: This is more concise than the loop equivalent and a very common Python idiom.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: zip pairs them: ('name','Alice'), ('age',30).
2. Apply the construct’s main rule next, matching: dict(zip(keys, values)) is the one-liner for building a dictionary from two parallel sequences.
3. Produce any intermediate values that This is more concise than the loop equivalent and a very common Python idiom. relies on
4. Finish by returning/assembling the final output named by: This is more concise than the loop equivalent and a very common Python idiom.
5. Use the result only after the full construct has completed, per: dict(zip(keys, values)) is the one-liner for building a dictionary from two parallel sequences.

Common Use Cases:
• Teaching this behavior using the mental model: dict(zip(keys, values)) is the one-liner for building a dictionary from two parallel sequences.
• Debugging when the observed value should match the expectation in: This is more concise than the loop equivalent and a very common Python idiom.

Edge Cases:
• If inputs vary from the situation described in: zip pairs them: ('name','Alice'), ('age',30)., the behavior can change.
• When the construct’s assumptions differ, the rule in: dict() converts the pairs into a dictionary. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This is more concise than the loop equivalent and a very common Python idiom..
• When performance matters, prefer the simplest pattern that still implements: dict(zip(keys, values)) is the one-liner for building a dictionary from two parallel sequences..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: dict(zip(keys, values)) is the one-liner for building a dictionary from two parallel sequences..

Notes:
• For maintainable code, make the intent behind: zip pairs them: ('name','Alice'), ('age',30). explicit (and test it with inputs like those in this prompt).`
  }),
  // Q100: Nested list comprehension with condition
  (_i: number) => ({
    q: `What is [[j for j in range(i)] for i in range(1, 5)]?`,
    o: ["[[0], [0, 1], [0, 1, 2], [0, 1, 2, 3]]", "[[1], [1, 2], [1, 2, 3], [1, 2, 3, 4]]", "[[0, 1, 2, 3]]", "Error"],
    c: 0,
    e: "i=1: [0], i=2: [0,1], i=3: [0,1,2], i=4: [0,1,2,3].",
    de: `Nested comprehension where the inner range depends on the outer variable. For i=1: range(1)=[0]. For i=2: range(2)=[0,1]. For i=3: range(3)=[0,1,2]. For i=4: range(4)=[0,1,2,3]. This builds a triangular structure. Common for creating staircase patterns and Pascal's triangle-like structures.

Key Concepts:
• Common for creating staircase patterns and Pascal's triangle-like structures.

Key Distinctions:
• This question’s focus is best captured by: Nested comprehension where the inner range depends on the outer variable.
• The contrast that matters for correctness is summarized by: For i=1: range(1)=[0].

How It Works:
• Python follows the rule implied by: Nested comprehension where the inner range depends on the outer variable.
• The outcome you observe follows from: Common for creating staircase patterns and Pascal's triangle-like structures.

Step-by-Step Execution:
1. Start from the construct described in: Nested comprehension where the inner range depends on the outer variable.
2. Resolve the subparts implied by: For i=1: range(1)=[0].
3. Apply the core semantics highlighted in: For i=2: range(2)=[0,1].
4. Confirm the final result aligns with: Common for creating staircase patterns and Pascal's triangle-like structures.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: For i=1: range(1)=[0].
2. Apply the construct’s main rule next, matching: Nested comprehension where the inner range depends on the outer variable.
3. Produce any intermediate values that Common for creating staircase patterns and Pascal's triangle-like structures. relies on
4. Finish by returning/assembling the final output named by: Common for creating staircase patterns and Pascal's triangle-like structures.
5. Use the result only after the full construct has completed, per: Nested comprehension where the inner range depends on the outer variable.

Common Use Cases:
• Teaching this behavior using the mental model: Nested comprehension where the inner range depends on the outer variable.
• Debugging when the observed value should match the expectation in: Common for creating staircase patterns and Pascal's triangle-like structures.

Edge Cases:
• If inputs vary from the situation described in: For i=1: range(1)=[0]., the behavior can change.
• When the construct’s assumptions differ, the rule in: For i=2: range(2)=[0,1]. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Common for creating staircase patterns and Pascal's triangle-like structures..
• When performance matters, prefer the simplest pattern that still implements: Nested comprehension where the inner range depends on the outer variable..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Nested comprehension where the inner range depends on the outer variable..

Notes:
• For maintainable code, make the intent behind: For i=1: range(1)=[0]. explicit (and test it with inputs like those in this prompt).`
  }),
];
