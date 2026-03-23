// --- LEVEL 4: WHILE-LOOP BATCH 1 - 26 QUESTIONS ---
// Covers: digit ops, math algorithms, data structures, string processing,
// state machines, two pointers, merge, palindrome, FizzBuzz, Collatz

export const level4WhileBatch1 = [
  // Q1: Counting digits in a number
  (_i: number) => ({
    q: `What is count?\nn = 1234\ncount = 0\nwhile n > 0:\n    count += 1\n    n //= 10`,
    o: ["4", "3", "1234", "0"],
    c: 0,
    e: "Each iteration strips one digit: 1234→123→12→1→0. Four iterations, so count = 4.",
    de: `The loop extracts digits by repeatedly integer-dividing by 10. n=1234→count=1, n=123→count=2, n=12→count=3, n=1→count=4, n=0→loop exits. This is the standard way to count digits without converting to a string. Equivalent to len(str(1234)) but works purely with arithmetic.

Key Concepts:
• Equivalent to len(str(1234)) but works purely with arithmetic.

Key Distinctions:
• This question’s focus is best captured by: The loop extracts digits by repeatedly integer-dividing by 10.
• The contrast that matters for correctness is summarized by: n=1234→count=1, n=123→count=2, n=12→count=3, n=1→count=4, n=0→loop exits.

How It Works:
• Python follows the rule implied by: The loop extracts digits by repeatedly integer-dividing by 10.
• The outcome you observe follows from: Equivalent to len(str(1234)) but works purely with arithmetic.

Step-by-Step Execution:
1. Start from the construct described in: The loop extracts digits by repeatedly integer-dividing by 10.
2. Resolve the subparts implied by: n=1234→count=1, n=123→count=2, n=12→count=3, n=1→count=4, n=0→loop exits.
3. Apply the core semantics highlighted in: This is the standard way to count digits without converting to a string.
4. Confirm the final result aligns with: Equivalent to len(str(1234)) but works purely with arithmetic.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: n=1234→count=1, n=123→count=2, n=12→count=3, n=1→count=4, n=0→loop exits.
2. Apply the construct’s main rule next, matching: The loop extracts digits by repeatedly integer-dividing by 10.
3. Produce any intermediate values that Equivalent to len(str(1234)) but works purely with arithmetic. relies on
4. Finish by returning/assembling the final output named by: Equivalent to len(str(1234)) but works purely with arithmetic.
5. Use the result only after the full construct has completed, per: The loop extracts digits by repeatedly integer-dividing by 10.

Common Use Cases:
• Teaching this behavior using the mental model: The loop extracts digits by repeatedly integer-dividing by 10.
• Debugging when the observed value should match the expectation in: Equivalent to len(str(1234)) but works purely with arithmetic.

Edge Cases:
• If inputs vary from the situation described in: n=1234→count=1, n=123→count=2, n=12→count=3, n=1→count=4, n=0→loop exits., the behavior can change.
• When the construct’s assumptions differ, the rule in: This is the standard way to count digits without converting to a string. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Equivalent to len(str(1234)) but works purely with arithmetic..
• When performance matters, prefer the simplest pattern that still implements: The loop extracts digits by repeatedly integer-dividing by 10..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The loop extracts digits by repeatedly integer-dividing by 10..

Notes:
• For maintainable code, make the intent behind: n=1234→count=1, n=123→count=2, n=12→count=3, n=1→count=4, n=0→loop exits. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q2: Reversing a number
  (_i: number) => ({
    q: `What is rev?\nn = 1234\nrev = 0\nwhile n > 0:\n    rev = rev * 10 + n % 10\n    n //= 10`,
    o: ["4321", "1234", "4312", "Error"],
    c: 0,
    e: "Builds reversed number: 4→43→432→4321 by extracting digits right-to-left.",
    de: `Each iteration peels off the last digit with n%10 and appends it to rev by shifting rev left (×10). Step by step: rev=0*10+4=4, n=123. rev=4*10+3=43, n=12. rev=43*10+2=432, n=1. rev=432*10+1=4321, n=0. This is a classic digit-manipulation pattern used in palindrome number checks.

Key Concepts:
• This is a classic digit-manipulation pattern used in palindrome number checks.

Key Distinctions:
• This question’s focus is best captured by: Each iteration peels off the last digit with n%10 and appends it to rev by shifting rev left (×10).
• The contrast that matters for correctness is summarized by: Step by step: rev=0*10+4=4, n=123.

How It Works:
• Python follows the rule implied by: Each iteration peels off the last digit with n%10 and appends it to rev by shifting rev left (×10).
• The outcome you observe follows from: This is a classic digit-manipulation pattern used in palindrome number checks.

Step-by-Step Execution:
1. Start from the construct described in: Each iteration peels off the last digit with n%10 and appends it to rev by shifting rev left (×10).
2. Resolve the subparts implied by: Step by step: rev=0*10+4=4, n=123.
3. Apply the core semantics highlighted in: rev=4*10+3=43, n=12.
4. Confirm the final result aligns with: This is a classic digit-manipulation pattern used in palindrome number checks.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Step by step: rev=0*10+4=4, n=123.
2. Apply the construct’s main rule next, matching: Each iteration peels off the last digit with n%10 and appends it to rev by shifting rev left (×10).
3. Produce any intermediate values that This is a classic digit-manipulation pattern used in palindrome number checks. relies on
4. Finish by returning/assembling the final output named by: This is a classic digit-manipulation pattern used in palindrome number checks.
5. Use the result only after the full construct has completed, per: Each iteration peels off the last digit with n%10 and appends it to rev by shifting rev left (×10).

Common Use Cases:
• Teaching this behavior using the mental model: Each iteration peels off the last digit with n%10 and appends it to rev by shifting rev left (×10).
• Debugging when the observed value should match the expectation in: This is a classic digit-manipulation pattern used in palindrome number checks.

Edge Cases:
• If inputs vary from the situation described in: Step by step: rev=0*10+4=4, n=123., the behavior can change.
• When the construct’s assumptions differ, the rule in: rev=4*10+3=43, n=12. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This is a classic digit-manipulation pattern used in palindrome number checks..
• When performance matters, prefer the simplest pattern that still implements: Each iteration peels off the last digit with n%10 and appends it to rev by shifting rev left (×10)..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Each iteration peels off the last digit with n%10 and appends it to rev by shifting rev left (×10)..

Notes:
• For maintainable code, make the intent behind: Step by step: rev=0*10+4=4, n=123. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q3: GCD using Euclidean algorithm
  (_i: number) => ({
    q: `What is a?\na, b = 48, 18\nwhile b:\n    a, b = b, a % b`,
    o: ["6", "18", "48", "0"],
    c: 0,
    e: "Euclidean algorithm: (48,18)→(18,12)→(12,6)→(6,0). GCD is 6.",
    de: `The Euclidean algorithm finds the greatest common divisor by repeatedly replacing (a, b) with (b, a%b) until b is 0. 48%18=12→(18,12). 18%12=6→(12,6). 12%6=0→(6,0). When b=0 (falsy), the loop exits and a=6 is the GCD. This O(log(min(a,b))) algorithm is one of the oldest known algorithms.

Key Concepts:
• This O(log(min(a,b))) algorithm is one of the oldest known algorithms.

Key Distinctions:
• This question’s focus is best captured by: The Euclidean algorithm finds the greatest common divisor by repeatedly replacing (a, b) with (b, a%b) until b is 0.
• The contrast that matters for correctness is summarized by: 48%18=12→(18,12).

How It Works:
• Python follows the rule implied by: The Euclidean algorithm finds the greatest common divisor by repeatedly replacing (a, b) with (b, a%b) until b is 0.
• The outcome you observe follows from: This O(log(min(a,b))) algorithm is one of the oldest known algorithms.

Step-by-Step Execution:
1. Start from the construct described in: The Euclidean algorithm finds the greatest common divisor by repeatedly replacing (a, b) with (b, a%b) until b is 0.
2. Resolve the subparts implied by: 48%18=12→(18,12).
3. Apply the core semantics highlighted in: 18%12=6→(12,6).
4. Confirm the final result aligns with: This O(log(min(a,b))) algorithm is one of the oldest known algorithms.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: 48%18=12→(18,12).
2. Apply the construct’s main rule next, matching: The Euclidean algorithm finds the greatest common divisor by repeatedly replacing (a, b) with (b, a%b) until b is 0.
3. Produce any intermediate values that This O(log(min(a,b))) algorithm is one of the oldest known algorithms. relies on
4. Finish by returning/assembling the final output named by: This O(log(min(a,b))) algorithm is one of the oldest known algorithms.
5. Use the result only after the full construct has completed, per: The Euclidean algorithm finds the greatest common divisor by repeatedly replacing (a, b) with (b, a%b) until b is 0.

Common Use Cases:
• Teaching this behavior using the mental model: The Euclidean algorithm finds the greatest common divisor by repeatedly replacing (a, b) with (b, a%b) until b is 0.
• Debugging when the observed value should match the expectation in: This O(log(min(a,b))) algorithm is one of the oldest known algorithms.

Edge Cases:
• If inputs vary from the situation described in: 48%18=12→(18,12)., the behavior can change.
• When the construct’s assumptions differ, the rule in: 18%12=6→(12,6). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This O(log(min(a,b))) algorithm is one of the oldest known algorithms..
• When performance matters, prefer the simplest pattern that still implements: The Euclidean algorithm finds the greatest common divisor by repeatedly replacing (a, b) with (b, a%b) until b is 0..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The Euclidean algorithm finds the greatest common divisor by repeatedly replacing (a, b) with (b, a%b) until b is 0..

Notes:
• For maintainable code, make the intent behind: 48%18=12→(18,12). explicit (and test it with inputs like those in this prompt).`
  }),
  // Q4: Binary search finding target 7
  (_i: number) => ({
    q: `What is mid?\nnums = [1, 3, 5, 7, 9]\nlo, hi = 0, 4\nwhile lo <= hi:\n    mid = (lo + hi) // 2\n    if nums[mid] < 7:\n        lo = mid + 1\n    elif nums[mid] > 7:\n        hi = mid - 1\n    else:\n        break`,
    o: ["3", "2", "4", "1"],
    c: 0,
    e: "mid=2 (val 5<7→lo=3), mid=3 (val 7==7→break). Found at index 3.",
    de: `Binary search halves the search space each step. lo=0, hi=4: mid=2, nums[2]=5<7 so lo=3. lo=3, hi=4: mid=3, nums[3]=7==7 so break. The target is found at index 3 in just 2 comparisons. Binary search requires a sorted array and runs in O(log n) time — far faster than linear scan for large datasets.

Key Concepts:
• Binary search requires a sorted array and runs in O(log n) time — far faster than linear scan for large datasets.

Key Distinctions:
• This question’s focus is best captured by: Binary search halves the search space each step.
• The contrast that matters for correctness is summarized by: lo=0, hi=4: mid=2, nums[2]=5<7 so lo=3.

How It Works:
• Python follows the rule implied by: Binary search halves the search space each step.
• The outcome you observe follows from: Binary search requires a sorted array and runs in O(log n) time — far faster than linear scan for large datasets.

Step-by-Step Execution:
1. Start from the construct described in: Binary search halves the search space each step.
2. Resolve the subparts implied by: lo=0, hi=4: mid=2, nums[2]=5<7 so lo=3.
3. Apply the core semantics highlighted in: lo=3, hi=4: mid=3, nums[3]=7==7 so break.
4. Confirm the final result aligns with: Binary search requires a sorted array and runs in O(log n) time — far faster than linear scan for large datasets.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: lo=0, hi=4: mid=2, nums[2]=5<7 so lo=3.
2. Apply the construct’s main rule next, matching: Binary search halves the search space each step.
3. Produce any intermediate values that Binary search requires a sorted array and runs in O(log n) time — far faster than linear scan for large datasets. relies on
4. Finish by returning/assembling the final output named by: Binary search requires a sorted array and runs in O(log n) time — far faster than linear scan for large datasets.
5. Use the result only after the full construct has completed, per: Binary search halves the search space each step.

Common Use Cases:
• Teaching this behavior using the mental model: Binary search halves the search space each step.
• Debugging when the observed value should match the expectation in: Binary search requires a sorted array and runs in O(log n) time — far faster than linear scan for large datasets.

Edge Cases:
• If inputs vary from the situation described in: lo=0, hi=4: mid=2, nums[2]=5<7 so lo=3., the behavior can change.
• When the construct’s assumptions differ, the rule in: lo=3, hi=4: mid=3, nums[3]=7==7 so break. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Binary search requires a sorted array and runs in O(log n) time — far faster than linear scan for large datasets..
• When performance matters, prefer the simplest pattern that still implements: Binary search halves the search space each step..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Binary search halves the search space each step..

Notes:
• For maintainable code, make the intent behind: lo=0, hi=4: mid=2, nums[2]=5<7 so lo=3. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q5: Iterative exponentiation
  (_i: number) => ({
    q: `What is result?\nbase, exp, result = 2, 5, 1\nwhile exp > 0:\n    result *= base\n    exp -= 1`,
    o: ["32", "10", "25", "64"],
    c: 0,
    e: "Multiplies base 5 times: 1→2→4→8→16→32. Equivalent to 2**5.",
    de: `This iterative approach computes base^exp by multiplying result by base in each iteration. result goes: 1*2=2, 2*2=4, 4*2=8, 8*2=16, 16*2=32 over 5 iterations. When exp reaches 0 the loop stops. This is the O(n) naive approach — fast modular exponentiation uses squaring to achieve O(log n).

Key Concepts:
• This is the O(n) naive approach — fast modular exponentiation uses squaring to achieve O(log n).

Key Distinctions:
• This question’s focus is best captured by: This iterative approach computes base^exp by multiplying result by base in each iteration.
• The contrast that matters for correctness is summarized by: result goes: 1*2=2, 2*2=4, 4*2=8, 8*2=16, 16*2=32 over 5 iterations.

How It Works:
• Python follows the rule implied by: This iterative approach computes base^exp by multiplying result by base in each iteration.
• The outcome you observe follows from: This is the O(n) naive approach — fast modular exponentiation uses squaring to achieve O(log n).

Step-by-Step Execution:
1. Start from the construct described in: This iterative approach computes base^exp by multiplying result by base in each iteration.
2. Resolve the subparts implied by: result goes: 1*2=2, 2*2=4, 4*2=8, 8*2=16, 16*2=32 over 5 iterations.
3. Apply the core semantics highlighted in: When exp reaches 0 the loop stops.
4. Confirm the final result aligns with: This is the O(n) naive approach — fast modular exponentiation uses squaring to achieve O(log n).

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: result goes: 1*2=2, 2*2=4, 4*2=8, 8*2=16, 16*2=32 over 5 iterations.
2. Apply the construct’s main rule next, matching: This iterative approach computes base^exp by multiplying result by base in each iteration.
3. Produce any intermediate values that This is the O(n) naive approach — fast modular exponentiation uses squaring to achieve O(log n). relies on
4. Finish by returning/assembling the final output named by: This is the O(n) naive approach — fast modular exponentiation uses squaring to achieve O(log n).
5. Use the result only after the full construct has completed, per: This iterative approach computes base^exp by multiplying result by base in each iteration.

Common Use Cases:
• Teaching this behavior using the mental model: This iterative approach computes base^exp by multiplying result by base in each iteration.
• Debugging when the observed value should match the expectation in: This is the O(n) naive approach — fast modular exponentiation uses squaring to achieve O(log n).

Edge Cases:
• If inputs vary from the situation described in: result goes: 1*2=2, 2*2=4, 4*2=8, 8*2=16, 16*2=32 over 5 iterations., the behavior can change.
• When the construct’s assumptions differ, the rule in: When exp reaches 0 the loop stops. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This is the O(n) naive approach — fast modular exponentiation uses squaring to achieve O(log n)..
• When performance matters, prefer the simplest pattern that still implements: This iterative approach computes base^exp by multiplying result by base in each iteration..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This iterative approach computes base^exp by multiplying result by base in each iteration..

Notes:
• For maintainable code, make the intent behind: result goes: 1*2=2, 2*2=4, 4*2=8, 8*2=16, 16*2=32 over 5 iterations. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q6: Multiple conditions with and
  (_i: number) => ({
    q: `What is (x, y)?\nx, y = 0, 15\nwhile x < 10 and y > 5:\n    x += 3\n    y -= 4`,
    o: ["(9, 3)", "(12, -1)", "(6, 7)", "(10, 5)"],
    c: 0,
    e: "Trace: (0,15)→(3,11)→(6,7)→(9,3). Then 9<10 but 3>5 is False → stop.",
    de: `Both conditions must be True to continue. (0,15): 0<10 and 15>5 → body: (3,11). (3,11): True and True → (6,7). (6,7): True and True → (9,3). (9,3): 9<10 is True but 3>5 is False → loop exits. The 'and' operator short-circuits: once either condition is False the loop won't execute again.

Key Concepts:
• The 'and' operator short-circuits: once either condition is False the loop won't execute again.

Key Distinctions:
• This question’s focus is best captured by: Both conditions must be True to continue.
• The contrast that matters for correctness is summarized by: (0,15): 0<10 and 15>5 → body: (3,11).

How It Works:
• Python follows the rule implied by: Both conditions must be True to continue.
• The outcome you observe follows from: The 'and' operator short-circuits: once either condition is False the loop won't execute again.

Step-by-Step Execution:
1. Start from the construct described in: Both conditions must be True to continue.
2. Resolve the subparts implied by: (0,15): 0<10 and 15>5 → body: (3,11).
3. Apply the core semantics highlighted in: (3,11): True and True → (6,7).
4. Confirm the final result aligns with: The 'and' operator short-circuits: once either condition is False the loop won't execute again.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: (0,15): 0<10 and 15>5 → body: (3,11).
2. Apply the construct’s main rule next, matching: Both conditions must be True to continue.
3. Produce any intermediate values that The 'and' operator short-circuits: once either condition is False the loop won't execute again. relies on
4. Finish by returning/assembling the final output named by: The 'and' operator short-circuits: once either condition is False the loop won't execute again.
5. Use the result only after the full construct has completed, per: Both conditions must be True to continue.

Common Use Cases:
• Teaching this behavior using the mental model: Both conditions must be True to continue.
• Debugging when the observed value should match the expectation in: The 'and' operator short-circuits: once either condition is False the loop won't execute again.

Edge Cases:
• If inputs vary from the situation described in: (0,15): 0<10 and 15>5 → body: (3,11)., the behavior can change.
• When the construct’s assumptions differ, the rule in: (3,11): True and True → (6,7). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: The 'and' operator short-circuits: once either condition is False the loop won't execute again..
• When performance matters, prefer the simplest pattern that still implements: Both conditions must be True to continue..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Both conditions must be True to continue..

Notes:
• For maintainable code, make the intent behind: (0,15): 0<10 and 15>5 → body: (3,11). explicit (and test it with inputs like those in this prompt).`
  }),
  // Q7: Scan alphabetic prefix
  (_i: number) => ({
    q: `What is i?\ns = "ab3cd"\ni = 0\nwhile i < len(s) and s[i].isalpha():\n    i += 1`,
    o: ["2", "3", "4", "0"],
    c: 0,
    e: "s[0]='a'(alpha), s[1]='b'(alpha), s[2]='3'(not alpha) → stops at i=2.",
    de: `The loop advances i while the current character is alphabetic. s[0]='a' passes, s[1]='b' passes, s[2]='3' fails isalpha() so the loop exits with i=2. The short-circuit 'and' ensures s[i] is only checked when i is in bounds. This pattern is used in tokenizers to extract identifiers or words from mixed input.

Key Concepts:
• This pattern is used in tokenizers to extract identifiers or words from mixed input.

Key Distinctions:
• This question’s focus is best captured by: The loop advances i while the current character is alphabetic.
• The contrast that matters for correctness is summarized by: s[0]='a' passes, s[1]='b' passes, s[2]='3' fails isalpha() so the loop exits with i=2.

How It Works:
• Python follows the rule implied by: The loop advances i while the current character is alphabetic.
• The outcome you observe follows from: This pattern is used in tokenizers to extract identifiers or words from mixed input.

Step-by-Step Execution:
1. Start from the construct described in: The loop advances i while the current character is alphabetic.
2. Resolve the subparts implied by: s[0]='a' passes, s[1]='b' passes, s[2]='3' fails isalpha() so the loop exits with i=2.
3. Apply the core semantics highlighted in: The short-circuit 'and' ensures s[i] is only checked when i is in bounds.
4. Confirm the final result aligns with: This pattern is used in tokenizers to extract identifiers or words from mixed input.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: s[0]='a' passes, s[1]='b' passes, s[2]='3' fails isalpha() so the loop exits with i=2.
2. Apply the construct’s main rule next, matching: The loop advances i while the current character is alphabetic.
3. Produce any intermediate values that This pattern is used in tokenizers to extract identifiers or words from mixed input. relies on
4. Finish by returning/assembling the final output named by: This pattern is used in tokenizers to extract identifiers or words from mixed input.
5. Use the result only after the full construct has completed, per: The loop advances i while the current character is alphabetic.

Common Use Cases:
• Teaching this behavior using the mental model: The loop advances i while the current character is alphabetic.
• Debugging when the observed value should match the expectation in: This pattern is used in tokenizers to extract identifiers or words from mixed input.

Edge Cases:
• If inputs vary from the situation described in: s[0]='a' passes, s[1]='b' passes, s[2]='3' fails isalpha() so the loop exits with i=2., the behavior can change.
• When the construct’s assumptions differ, the rule in: The short-circuit 'and' ensures s[i] is only checked when i is in bounds. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This pattern is used in tokenizers to extract identifiers or words from mixed input..
• When performance matters, prefer the simplest pattern that still implements: The loop advances i while the current character is alphabetic..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The loop advances i while the current character is alphabetic..

Notes:
• For maintainable code, make the intent behind: s[0]='a' passes, s[1]='b' passes, s[2]='3' fails isalpha() so the loop exits with i=2. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q8: Pop all elements from list
  (_i: number) => ({
    q: `What is total?\nnums = [1, 2, 3, 4, 5]\ntotal = 0\nwhile nums:\n    total += nums.pop()`,
    o: ["15", "5", "1", "10"],
    c: 0,
    e: "pop() removes from the end: 5+4+3+2+1 = 15. Empty list is falsy.",
    de: `An empty list is falsy, so "while nums" continues until the list is empty. pop() without arguments removes and returns the last element. Order: 5, 4, 3, 2, 1. Sum = 5+4+3+2+1 = 15. This drains the list completely. Note that pop() is O(1) from the end, making this an efficient pattern for processing all elements.

Key Concepts:
• Note that pop() is O(1) from the end, making this an efficient pattern for processing all elements.

Key Distinctions:
• This question’s focus is best captured by: An empty list is falsy, so "while nums" continues until the list is empty.
• The contrast that matters for correctness is summarized by: pop() without arguments removes and returns the last element.

How It Works:
• Python follows the rule implied by: An empty list is falsy, so "while nums" continues until the list is empty.
• The outcome you observe follows from: Note that pop() is O(1) from the end, making this an efficient pattern for processing all elements.

Step-by-Step Execution:
1. Start from the construct described in: An empty list is falsy, so "while nums" continues until the list is empty.
2. Resolve the subparts implied by: pop() without arguments removes and returns the last element.
3. Apply the core semantics highlighted in: Order: 5, 4, 3, 2, 1.
4. Confirm the final result aligns with: Note that pop() is O(1) from the end, making this an efficient pattern for processing all elements.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: pop() without arguments removes and returns the last element.
2. Apply the construct’s main rule next, matching: An empty list is falsy, so "while nums" continues until the list is empty.
3. Produce any intermediate values that Note that pop() is O(1) from the end, making this an efficient pattern for processing all elements. relies on
4. Finish by returning/assembling the final output named by: Note that pop() is O(1) from the end, making this an efficient pattern for processing all elements.
5. Use the result only after the full construct has completed, per: An empty list is falsy, so "while nums" continues until the list is empty.

Common Use Cases:
• Teaching this behavior using the mental model: An empty list is falsy, so "while nums" continues until the list is empty.
• Debugging when the observed value should match the expectation in: Note that pop() is O(1) from the end, making this an efficient pattern for processing all elements.

Edge Cases:
• If inputs vary from the situation described in: pop() without arguments removes and returns the last element., the behavior can change.
• When the construct’s assumptions differ, the rule in: Order: 5, 4, 3, 2, 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Note that pop() is O(1) from the end, making this an efficient pattern for processing all elements..
• When performance matters, prefer the simplest pattern that still implements: An empty list is falsy, so "while nums" continues until the list is empty..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: An empty list is falsy, so "while nums" continues until the list is empty..

Notes:
• For maintainable code, make the intent behind: pop() without arguments removes and returns the last element. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q9: Stack LIFO reversal
  (_i: number) => ({
    q: `What is result?\nstack = [10, 20, 30]\nresult = []\nwhile stack:\n    result.append(stack.pop())`,
    o: ["[30, 20, 10]", "[10, 20, 30]", "[30]", "[10]"],
    c: 0,
    e: "pop() gives 30, then 20, then 10. LIFO order reverses the original list.",
    de: `A stack follows Last-In-First-Out (LIFO). pop() removes the top (last appended): 30 first, then 20, then 10. Appending to result in that order gives [30, 20, 10] — the reverse of the original. This is how stacks are used for reversal in algorithms like reversing a string or checking balanced brackets.

Key Concepts:
• This is how stacks are used for reversal in algorithms like reversing a string or checking balanced brackets.

Key Distinctions:
• This question’s focus is best captured by: A stack follows Last-In-First-Out (LIFO).
• The contrast that matters for correctness is summarized by: pop() removes the top (last appended): 30 first, then 20, then 10.

How It Works:
• Python follows the rule implied by: A stack follows Last-In-First-Out (LIFO).
• The outcome you observe follows from: This is how stacks are used for reversal in algorithms like reversing a string or checking balanced brackets.

Step-by-Step Execution:
1. Start from the construct described in: A stack follows Last-In-First-Out (LIFO).
2. Resolve the subparts implied by: pop() removes the top (last appended): 30 first, then 20, then 10.
3. Apply the core semantics highlighted in: Appending to result in that order gives [30, 20, 10] — the reverse of the original.
4. Confirm the final result aligns with: This is how stacks are used for reversal in algorithms like reversing a string or checking balanced brackets.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: pop() removes the top (last appended): 30 first, then 20, then 10.
2. Apply the construct’s main rule next, matching: A stack follows Last-In-First-Out (LIFO).
3. Produce any intermediate values that This is how stacks are used for reversal in algorithms like reversing a string or checking balanced brackets. relies on
4. Finish by returning/assembling the final output named by: This is how stacks are used for reversal in algorithms like reversing a string or checking balanced brackets.
5. Use the result only after the full construct has completed, per: A stack follows Last-In-First-Out (LIFO).

Common Use Cases:
• Teaching this behavior using the mental model: A stack follows Last-In-First-Out (LIFO).
• Debugging when the observed value should match the expectation in: This is how stacks are used for reversal in algorithms like reversing a string or checking balanced brackets.

Edge Cases:
• If inputs vary from the situation described in: pop() removes the top (last appended): 30 first, then 20, then 10., the behavior can change.
• When the construct’s assumptions differ, the rule in: Appending to result in that order gives [30, 20, 10] — the reverse of the original. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This is how stacks are used for reversal in algorithms like reversing a string or checking balanced brackets..
• When performance matters, prefer the simplest pattern that still implements: A stack follows Last-In-First-Out (LIFO)..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: A stack follows Last-In-First-Out (LIFO)..

Notes:
• For maintainable code, make the intent behind: pop() removes the top (last appended): 30 first, then 20, then 10. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q10: Queue FIFO ordering
  (_i: number) => ({
    q: `What is result?\nq = [10, 20, 30]\nresult = []\nwhile q:\n    result.append(q.pop(0))`,
    o: ["[10, 20, 30]", "[30, 20, 10]", "[10]", "[30]"],
    c: 0,
    e: "pop(0) removes from the front: 10, then 20, then 30. FIFO preserves order.",
    de: `A queue follows First-In-First-Out (FIFO). pop(0) removes the first element: 10, then 20, then 30. The result preserves the original order [10, 20, 30]. Note that list.pop(0) is O(n) because remaining elements shift left. For performance-critical code, use collections.deque with popleft() which is O(1).

Key Concepts:
• For performance-critical code, use collections.deque with popleft() which is O(1).

Key Distinctions:
• This question’s focus is best captured by: A queue follows First-In-First-Out (FIFO).
• The contrast that matters for correctness is summarized by: pop(0) removes the first element: 10, then 20, then 30.

How It Works:
• Python follows the rule implied by: A queue follows First-In-First-Out (FIFO).
• The outcome you observe follows from: For performance-critical code, use collections.deque with popleft() which is O(1).

Step-by-Step Execution:
1. Start from the construct described in: A queue follows First-In-First-Out (FIFO).
2. Resolve the subparts implied by: pop(0) removes the first element: 10, then 20, then 30.
3. Apply the core semantics highlighted in: The result preserves the original order [10, 20, 30].
4. Confirm the final result aligns with: For performance-critical code, use collections.deque with popleft() which is O(1).

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: pop(0) removes the first element: 10, then 20, then 30.
2. Apply the construct’s main rule next, matching: A queue follows First-In-First-Out (FIFO).
3. Produce any intermediate values that For performance-critical code, use collections.deque with popleft() which is O(1). relies on
4. Finish by returning/assembling the final output named by: For performance-critical code, use collections.deque with popleft() which is O(1).
5. Use the result only after the full construct has completed, per: A queue follows First-In-First-Out (FIFO).

Common Use Cases:
• Teaching this behavior using the mental model: A queue follows First-In-First-Out (FIFO).
• Debugging when the observed value should match the expectation in: For performance-critical code, use collections.deque with popleft() which is O(1).

Edge Cases:
• If inputs vary from the situation described in: pop(0) removes the first element: 10, then 20, then 30., the behavior can change.
• When the construct’s assumptions differ, the rule in: The result preserves the original order [10, 20, 30]. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: For performance-critical code, use collections.deque with popleft() which is O(1)..
• When performance matters, prefer the simplest pattern that still implements: A queue follows First-In-First-Out (FIFO)..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: A queue follows First-In-First-Out (FIFO)..

Notes:
• For maintainable code, make the intent behind: pop(0) removes the first element: 10, then 20, then 30. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q11: Sentinel value loop
  (_i: number) => ({
    q: `What is total?\ndata = [3, 7, -1, 5]\ntotal = 0\ni = 0\nwhile data[i] != -1:\n    total += data[i]\n    i += 1`,
    o: ["10", "14", "3", "15"],
    c: 0,
    e: "Adds 3 + 7 = 10, then hits sentinel -1 and stops. The 5 is never reached.",
    de: `A sentinel value is a special marker that signals the end of meaningful data. Here -1 acts as the sentinel. data[0]=3 (add, total=3), data[1]=7 (add, total=10), data[2]=-1 (sentinel, stop). The value 5 after the sentinel is never processed. This pattern is common in C-style programming and stream processing where the data length is unknown.

Key Concepts:
• This pattern is common in C-style programming and stream processing where the data length is unknown.

Key Distinctions:
• This question’s focus is best captured by: A sentinel value is a special marker that signals the end of meaningful data.
• The contrast that matters for correctness is summarized by: Here -1 acts as the sentinel.

How It Works:
• Python follows the rule implied by: A sentinel value is a special marker that signals the end of meaningful data.
• The outcome you observe follows from: This pattern is common in C-style programming and stream processing where the data length is unknown.

Step-by-Step Execution:
1. Start from the construct described in: A sentinel value is a special marker that signals the end of meaningful data.
2. Resolve the subparts implied by: Here -1 acts as the sentinel.
3. Apply the core semantics highlighted in: data[0]=3 (add, total=3), data[1]=7 (add, total=10), data[2]=-1 (sentinel, stop).
4. Confirm the final result aligns with: This pattern is common in C-style programming and stream processing where the data length is unknown.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Here -1 acts as the sentinel.
2. Apply the construct’s main rule next, matching: A sentinel value is a special marker that signals the end of meaningful data.
3. Produce any intermediate values that This pattern is common in C-style programming and stream processing where the data length is unknown. relies on
4. Finish by returning/assembling the final output named by: This pattern is common in C-style programming and stream processing where the data length is unknown.
5. Use the result only after the full construct has completed, per: A sentinel value is a special marker that signals the end of meaningful data.

Common Use Cases:
• Teaching this behavior using the mental model: A sentinel value is a special marker that signals the end of meaningful data.
• Debugging when the observed value should match the expectation in: This pattern is common in C-style programming and stream processing where the data length is unknown.

Edge Cases:
• If inputs vary from the situation described in: Here -1 acts as the sentinel., the behavior can change.
• When the construct’s assumptions differ, the rule in: data[0]=3 (add, total=3), data[1]=7 (add, total=10), data[2]=-1 (sentinel, stop). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This pattern is common in C-style programming and stream processing where the data length is unknown..
• When performance matters, prefer the simplest pattern that still implements: A sentinel value is a special marker that signals the end of meaningful data..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: A sentinel value is a special marker that signals the end of meaningful data..

Notes:
• For maintainable code, make the intent behind: Here -1 acts as the sentinel. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q12: Remove spaces from string
  (_i: number) => ({
    q: `What is result?\ns = "h e l l o"\nresult = ""\ni = 0\nwhile i < len(s):\n    if s[i] != " ":\n        result += s[i]\n    i += 1`,
    o: ['"hello"', '"h e l l o"', '"h"', '""'],
    c: 0,
    e: "Skips space characters, keeps h, e, l, l, o → \"hello\".",
    de: `The loop iterates through every character. When the character is not a space, it's appended to result. Characters processed: 'h'(keep), ' '(skip), 'e'(keep), ' '(skip), 'l'(keep), ' '(skip), 'l'(keep), ' '(skip), 'o'(keep). Result = "hello". The Pythonic equivalent is s.replace(" ", "") or "".join(s.split()).

Key Concepts:
• The Pythonic equivalent is s.replace(" ", "") or "".join(s.split()).

Key Distinctions:
• This question’s focus is best captured by: The loop iterates through every character.
• The contrast that matters for correctness is summarized by: When the character is not a space, it's appended to result.

How It Works:
• Python follows the rule implied by: The loop iterates through every character.
• The outcome you observe follows from: The Pythonic equivalent is s.replace(" ", "") or "".join(s.split()).

Step-by-Step Execution:
1. Start from the construct described in: The loop iterates through every character.
2. Resolve the subparts implied by: When the character is not a space, it's appended to result.
3. Apply the core semantics highlighted in: Characters processed: 'h'(keep), ' '(skip), 'e'(keep), ' '(skip), 'l'(keep), ' '(skip), 'l'(keep), ' '(skip), 'o'(keep).
4. Confirm the final result aligns with: The Pythonic equivalent is s.replace(" ", "") or "".join(s.split()).

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: When the character is not a space, it's appended to result.
2. Apply the construct’s main rule next, matching: The loop iterates through every character.
3. Produce any intermediate values that The Pythonic equivalent is s.replace(" ", "") or "".join(s.split()). relies on
4. Finish by returning/assembling the final output named by: The Pythonic equivalent is s.replace(" ", "") or "".join(s.split()).
5. Use the result only after the full construct has completed, per: The loop iterates through every character.

Common Use Cases:
• Teaching this behavior using the mental model: The loop iterates through every character.
• Debugging when the observed value should match the expectation in: The Pythonic equivalent is s.replace(" ", "") or "".join(s.split()).

Edge Cases:
• If inputs vary from the situation described in: When the character is not a space, it's appended to result., the behavior can change.
• When the construct’s assumptions differ, the rule in: Characters processed: 'h'(keep), ' '(skip), 'e'(keep), ' '(skip), 'l'(keep), ' '(skip), 'l'(keep), ' '(skip), 'o'(keep). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: The Pythonic equivalent is s.replace(" ", "") or "".join(s.split())..
• When performance matters, prefer the simplest pattern that still implements: The loop iterates through every character..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The loop iterates through every character..

Notes:
• For maintainable code, make the intent behind: When the character is not a space, it's appended to result. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q13: Collatz sequence steps
  (_i: number) => ({
    q: `What is steps?\nn = 6\nsteps = 0\nwhile n != 1:\n    n = n // 2 if n % 2 == 0 else 3 * n + 1\n    steps += 1`,
    o: ["8", "6", "10", "3"],
    c: 0,
    e: "Sequence: 6→3→10→5→16→8→4→2→1. Eight steps to reach 1.",
    de: `The Collatz conjecture states every positive integer eventually reaches 1 under this rule: if even, halve; if odd, triple and add 1. From 6: 6→3(odd:10)→10→5(odd:16)→16→8→4→2→1. That's 8 transformations. Whether this always terminates is one of mathematics' most famous unsolved problems.

Key Concepts:
• Whether this always terminates is one of mathematics' most famous unsolved problems.

Key Distinctions:
• This question’s focus is best captured by: The Collatz conjecture states every positive integer eventually reaches 1 under this rule: if even, halve; if odd, triple and add 1.
• The contrast that matters for correctness is summarized by: From 6: 6→3(odd:10)→10→5(odd:16)→16→8→4→2→1.

How It Works:
• Python follows the rule implied by: The Collatz conjecture states every positive integer eventually reaches 1 under this rule: if even, halve; if odd, triple and add 1.
• The outcome you observe follows from: Whether this always terminates is one of mathematics' most famous unsolved problems.

Step-by-Step Execution:
1. Start from the construct described in: The Collatz conjecture states every positive integer eventually reaches 1 under this rule: if even, halve; if odd, triple and add 1.
2. Resolve the subparts implied by: From 6: 6→3(odd:10)→10→5(odd:16)→16→8→4→2→1.
3. Apply the core semantics highlighted in: That's 8 transformations.
4. Confirm the final result aligns with: Whether this always terminates is one of mathematics' most famous unsolved problems.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: From 6: 6→3(odd:10)→10→5(odd:16)→16→8→4→2→1.
2. Apply the construct’s main rule next, matching: The Collatz conjecture states every positive integer eventually reaches 1 under this rule: if even, halve; if odd, triple and add 1.
3. Produce any intermediate values that Whether this always terminates is one of mathematics' most famous unsolved problems. relies on
4. Finish by returning/assembling the final output named by: Whether this always terminates is one of mathematics' most famous unsolved problems.
5. Use the result only after the full construct has completed, per: The Collatz conjecture states every positive integer eventually reaches 1 under this rule: if even, halve; if odd, triple and add 1.

Common Use Cases:
• Teaching this behavior using the mental model: The Collatz conjecture states every positive integer eventually reaches 1 under this rule: if even, halve; if odd, triple and add 1.
• Debugging when the observed value should match the expectation in: Whether this always terminates is one of mathematics' most famous unsolved problems.

Edge Cases:
• If inputs vary from the situation described in: From 6: 6→3(odd:10)→10→5(odd:16)→16→8→4→2→1., the behavior can change.
• When the construct’s assumptions differ, the rule in: That's 8 transformations. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Whether this always terminates is one of mathematics' most famous unsolved problems..
• When performance matters, prefer the simplest pattern that still implements: The Collatz conjecture states every positive integer eventually reaches 1 under this rule: if even, halve; if odd, triple and add 1..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The Collatz conjecture states every positive integer eventually reaches 1 under this rule: if even, halve; if odd, triple and add 1..

Notes:
• For maintainable code, make the intent behind: From 6: 6→3(odd:10)→10→5(odd:16)→16→8→4→2→1. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q14: Try/except retry pattern
  (_i: number) => ({
    q: `What is result?\nvals = ["x", "y", "5"]\ni = 0\nresult = None\nwhile result is None:\n    try:\n        result = int(vals[i])\n    except:\n        i += 1`,
    o: ["5", "None", '"5"', "Error"],
    c: 0,
    e: "int('x') fails → i=1, int('y') fails → i=2, int('5') succeeds → result=5.",
    de: `This retry pattern keeps trying until success. int("x") raises ValueError, caught by except, i advances to 1. int("y") also fails, i=2. int("5") succeeds, setting result=5. The while condition "result is None" becomes False and the loop exits. This pattern is used for input validation, network retries, and parsing fallback chains.

Key Concepts:
• This pattern is used for input validation, network retries, and parsing fallback chains.

Key Distinctions:
• This question’s focus is best captured by: This retry pattern keeps trying until success.
• The contrast that matters for correctness is summarized by: int("x") raises ValueError, caught by except, i advances to 1.

How It Works:
• Python follows the rule implied by: This retry pattern keeps trying until success.
• The outcome you observe follows from: This pattern is used for input validation, network retries, and parsing fallback chains.

Step-by-Step Execution:
1. Start from the construct described in: This retry pattern keeps trying until success.
2. Resolve the subparts implied by: int("x") raises ValueError, caught by except, i advances to 1.
3. Apply the core semantics highlighted in: int("y") also fails, i=2.
4. Confirm the final result aligns with: This pattern is used for input validation, network retries, and parsing fallback chains.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: int("x") raises ValueError, caught by except, i advances to 1.
2. Apply the construct’s main rule next, matching: This retry pattern keeps trying until success.
3. Produce any intermediate values that This pattern is used for input validation, network retries, and parsing fallback chains. relies on
4. Finish by returning/assembling the final output named by: This pattern is used for input validation, network retries, and parsing fallback chains.
5. Use the result only after the full construct has completed, per: This retry pattern keeps trying until success.

Common Use Cases:
• Teaching this behavior using the mental model: This retry pattern keeps trying until success.
• Debugging when the observed value should match the expectation in: This pattern is used for input validation, network retries, and parsing fallback chains.

Edge Cases:
• If inputs vary from the situation described in: int("x") raises ValueError, caught by except, i advances to 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: int("y") also fails, i=2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This pattern is used for input validation, network retries, and parsing fallback chains..
• When performance matters, prefer the simplest pattern that still implements: This retry pattern keeps trying until success..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This retry pattern keeps trying until success..

Notes:
• For maintainable code, make the intent behind: int("x") raises ValueError, caught by except, i advances to 1. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q15: Nested if/elif classification
  (_i: number) => ({
    q: `What is labels?\nnums = [15, 5, 25]\nlabels = []\ni = 0\nwhile i < len(nums):\n    if nums[i] >= 20:\n        labels.append("high")\n    elif nums[i] >= 10:\n        labels.append("mid")\n    else:\n        labels.append("low")\n    i += 1`,
    o: ['["mid", "low", "high"]', '["high", "low", "mid"]', '["mid", "mid", "high"]', '["low", "low", "high"]'],
    c: 0,
    e: "15→mid (>=10), 5→low (<10), 25→high (>=20).",
    de: `Each element is classified using chained if/elif/else. 15: >=20? No. >=10? Yes → "mid". 5: >=20? No. >=10? No → "low". 25: >=20? Yes → "high". Order matters in elif chains: the >=20 check must come before >=10, otherwise 25 would match >=10 first. Result: ["mid", "low", "high"].

Key Concepts:
• Result: ["mid", "low", "high"].

Key Distinctions:
• This question’s focus is best captured by: Each element is classified using chained if/elif/else.
• The contrast that matters for correctness is summarized by: 15: >=20?

How It Works:
• Python follows the rule implied by: Each element is classified using chained if/elif/else.
• The outcome you observe follows from: Result: ["mid", "low", "high"].

Step-by-Step Execution:
1. Start from the construct described in: Each element is classified using chained if/elif/else.
2. Resolve the subparts implied by: 15: >=20?
3. Apply the core semantics highlighted in: No.
4. Confirm the final result aligns with: Result: ["mid", "low", "high"].

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: 15: >=20?
2. Apply the construct’s main rule next, matching: Each element is classified using chained if/elif/else.
3. Produce any intermediate values that Result: ["mid", "low", "high"]. relies on
4. Finish by returning/assembling the final output named by: Result: ["mid", "low", "high"].
5. Use the result only after the full construct has completed, per: Each element is classified using chained if/elif/else.

Common Use Cases:
• Teaching this behavior using the mental model: Each element is classified using chained if/elif/else.
• Debugging when the observed value should match the expectation in: Result: ["mid", "low", "high"].

Edge Cases:
• If inputs vary from the situation described in: 15: >=20?, the behavior can change.
• When the construct’s assumptions differ, the rule in: No. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Result: ["mid", "low", "high"]..
• When performance matters, prefer the simplest pattern that still implements: Each element is classified using chained if/elif/else..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Each element is classified using chained if/elif/else..

Notes:
• For maintainable code, make the intent behind: 15: >=20? explicit (and test it with inputs like those in this prompt).`
  }),
  // Q16: Simple state machine
  (_i: number) => ({
    q: `What is state?\ns = "xax"\nstate = "start"\ni = 0\nwhile i < len(s) and state != "done":\n    if state == "start" and s[i] == "a":\n        state = "found_a"\n    elif state == "found_a" and s[i] == "x":\n        state = "done"\n    i += 1`,
    o: ['"done"', '"start"', '"found_a"', "Error"],
    c: 0,
    e: "i=0: 'x'≠'a' (stay start). i=1: 'a' → found_a. i=2: 'x' → done.",
    de: `A state machine transitions between named states based on input. Starting in "start": s[0]='x' doesn't match any transition, stay in "start". s[1]='a' with state "start" → transition to "found_a". s[2]='x' with state "found_a" → transition to "done". The loop also exits because state=="done". This pattern recognizes the substring "ax" in the input.

Key Concepts:
• This pattern recognizes the substring "ax" in the input.

Key Distinctions:
• This question’s focus is best captured by: A state machine transitions between named states based on input.
• The contrast that matters for correctness is summarized by: Starting in "start": s[0]='x' doesn't match any transition, stay in "start".

How It Works:
• Python follows the rule implied by: A state machine transitions between named states based on input.
• The outcome you observe follows from: This pattern recognizes the substring "ax" in the input.

Step-by-Step Execution:
1. Start from the construct described in: A state machine transitions between named states based on input.
2. Resolve the subparts implied by: Starting in "start": s[0]='x' doesn't match any transition, stay in "start".
3. Apply the core semantics highlighted in: s[1]='a' with state "start" → transition to "found_a".
4. Confirm the final result aligns with: This pattern recognizes the substring "ax" in the input.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Starting in "start": s[0]='x' doesn't match any transition, stay in "start".
2. Apply the construct’s main rule next, matching: A state machine transitions between named states based on input.
3. Produce any intermediate values that This pattern recognizes the substring "ax" in the input. relies on
4. Finish by returning/assembling the final output named by: This pattern recognizes the substring "ax" in the input.
5. Use the result only after the full construct has completed, per: A state machine transitions between named states based on input.

Common Use Cases:
• Teaching this behavior using the mental model: A state machine transitions between named states based on input.
• Debugging when the observed value should match the expectation in: This pattern recognizes the substring "ax" in the input.

Edge Cases:
• If inputs vary from the situation described in: Starting in "start": s[0]='x' doesn't match any transition, stay in "start"., the behavior can change.
• When the construct’s assumptions differ, the rule in: s[1]='a' with state "start" → transition to "found_a". is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This pattern recognizes the substring "ax" in the input..
• When performance matters, prefer the simplest pattern that still implements: A state machine transitions between named states based on input..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: A state machine transitions between named states based on input..

Notes:
• For maintainable code, make the intent behind: Starting in "start": s[0]='x' doesn't match any transition, stay in "start". explicit (and test it with inputs like those in this prompt).`
  }),
  // Q17: Scan until threshold
  (_i: number) => ({
    q: `What is i?\nnums = [2, 5, 3, 8, 1]\ni = 0\nwhile i < len(nums) and nums[i] < 8:\n    i += 1`,
    o: ["3", "4", "2", "0"],
    c: 0,
    e: "2<8, 5<8, 3<8 pass. nums[3]=8: 8<8 is False → stops at i=3.",
    de: `The loop scans forward until finding a value that is NOT less than 8. i=0: 2<8 (continue). i=1: 5<8 (continue). i=2: 3<8 (continue). i=3: 8<8 is False → exit. i=3 is the index of the first element ≥ 8. Short-circuit evaluation prevents index-out-of-bounds when i reaches len(nums).

Key Concepts:
• Short-circuit evaluation prevents index-out-of-bounds when i reaches len(nums).

Key Distinctions:
• This question’s focus is best captured by: The loop scans forward until finding a value that is NOT less than 8.
• The contrast that matters for correctness is summarized by: i=0: 2<8 (continue).

How It Works:
• Python follows the rule implied by: The loop scans forward until finding a value that is NOT less than 8.
• The outcome you observe follows from: Short-circuit evaluation prevents index-out-of-bounds when i reaches len(nums).

Step-by-Step Execution:
1. Start from the construct described in: The loop scans forward until finding a value that is NOT less than 8.
2. Resolve the subparts implied by: i=0: 2<8 (continue).
3. Apply the core semantics highlighted in: i=1: 5<8 (continue).
4. Confirm the final result aligns with: Short-circuit evaluation prevents index-out-of-bounds when i reaches len(nums).

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: i=0: 2<8 (continue).
2. Apply the construct’s main rule next, matching: The loop scans forward until finding a value that is NOT less than 8.
3. Produce any intermediate values that Short-circuit evaluation prevents index-out-of-bounds when i reaches len(nums). relies on
4. Finish by returning/assembling the final output named by: Short-circuit evaluation prevents index-out-of-bounds when i reaches len(nums).
5. Use the result only after the full construct has completed, per: The loop scans forward until finding a value that is NOT less than 8.

Common Use Cases:
• Teaching this behavior using the mental model: The loop scans forward until finding a value that is NOT less than 8.
• Debugging when the observed value should match the expectation in: Short-circuit evaluation prevents index-out-of-bounds when i reaches len(nums).

Edge Cases:
• If inputs vary from the situation described in: i=0: 2<8 (continue)., the behavior can change.
• When the construct’s assumptions differ, the rule in: i=1: 5<8 (continue). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Short-circuit evaluation prevents index-out-of-bounds when i reaches len(nums)..
• When performance matters, prefer the simplest pattern that still implements: The loop scans forward until finding a value that is NOT less than 8..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The loop scans forward until finding a value that is NOT less than 8..

Notes:
• For maintainable code, make the intent behind: i=0: 2<8 (continue). explicit (and test it with inputs like those in this prompt).`
  }),
  // Q18: Conditional accumulator (positives only)
  (_i: number) => ({
    q: `What is total?\nnums = [3, -2, 5, -1, 4]\ntotal = 0\ni = 0\nwhile i < len(nums):\n    if nums[i] > 0:\n        total += nums[i]\n    i += 1`,
    o: ["12", "9", "15", "7"],
    c: 0,
    e: "Only positive values: 3 + 5 + 4 = 12. Negatives (-2, -1) are skipped.",
    de: `The loop visits every element but the if-guard only accumulates positive values. 3>0 → total=3. -2>0? No. 5>0 → total=8. -1>0? No. 4>0 → total=12. This selective accumulation pattern is equivalent to sum(x for x in nums if x > 0). The while loop processes all elements; the if controls which ones contribute to the sum.

Key Concepts:
• The while loop processes all elements; the if controls which ones contribute to the sum.

Key Distinctions:
• This question’s focus is best captured by: The loop visits every element but the if-guard only accumulates positive values.
• The contrast that matters for correctness is summarized by: 3>0 → total=3.

How It Works:
• Python follows the rule implied by: The loop visits every element but the if-guard only accumulates positive values.
• The outcome you observe follows from: The while loop processes all elements; the if controls which ones contribute to the sum.

Step-by-Step Execution:
1. Start from the construct described in: The loop visits every element but the if-guard only accumulates positive values.
2. Resolve the subparts implied by: 3>0 → total=3.
3. Apply the core semantics highlighted in: -2>0?
4. Confirm the final result aligns with: The while loop processes all elements; the if controls which ones contribute to the sum.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: 3>0 → total=3.
2. Apply the construct’s main rule next, matching: The loop visits every element but the if-guard only accumulates positive values.
3. Produce any intermediate values that The while loop processes all elements; the if controls which ones contribute to the sum. relies on
4. Finish by returning/assembling the final output named by: The while loop processes all elements; the if controls which ones contribute to the sum.
5. Use the result only after the full construct has completed, per: The loop visits every element but the if-guard only accumulates positive values.

Common Use Cases:
• Teaching this behavior using the mental model: The loop visits every element but the if-guard only accumulates positive values.
• Debugging when the observed value should match the expectation in: The while loop processes all elements; the if controls which ones contribute to the sum.

Edge Cases:
• If inputs vary from the situation described in: 3>0 → total=3., the behavior can change.
• When the construct’s assumptions differ, the rule in: -2>0? is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: The while loop processes all elements; the if controls which ones contribute to the sum..
• When performance matters, prefer the simplest pattern that still implements: The loop visits every element but the if-guard only accumulates positive values..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The loop visits every element but the if-guard only accumulates positive values..

Notes:
• For maintainable code, make the intent behind: 3>0 → total=3. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q19: Factorial computation
  (_i: number) => ({
    q: `What is result?\nn = 5\nresult = 1\nwhile n > 1:\n    result *= n\n    n -= 1`,
    o: ["120", "24", "60", "5"],
    c: 0,
    e: "5! = 5×4×3×2 = 120. Loop stops when n=1 (1>1 is False).",
    de: `The loop computes n! by multiplying result by n and decrementing. result: 1*5=5, 5*4=20, 20*3=60, 60*2=120. At n=1, the condition n>1 is False so the loop stops. Note the loop doesn't multiply by 1 (unnecessary since x*1=x). This iterative approach avoids the stack overhead of recursive factorial.

Key Concepts:
• This iterative approach avoids the stack overhead of recursive factorial.

Key Distinctions:
• This question’s focus is best captured by: The loop computes n!
• The contrast that matters for correctness is summarized by: by multiplying result by n and decrementing.

How It Works:
• Python follows the rule implied by: The loop computes n!
• The outcome you observe follows from: This iterative approach avoids the stack overhead of recursive factorial.

Step-by-Step Execution:
1. Start from the construct described in: The loop computes n!
2. Resolve the subparts implied by: by multiplying result by n and decrementing.
3. Apply the core semantics highlighted in: result: 1*5=5, 5*4=20, 20*3=60, 60*2=120.
4. Confirm the final result aligns with: This iterative approach avoids the stack overhead of recursive factorial.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: by multiplying result by n and decrementing.
2. Apply the construct’s main rule next, matching: The loop computes n!
3. Produce any intermediate values that This iterative approach avoids the stack overhead of recursive factorial. relies on
4. Finish by returning/assembling the final output named by: This iterative approach avoids the stack overhead of recursive factorial.
5. Use the result only after the full construct has completed, per: The loop computes n!

Common Use Cases:
• Teaching this behavior using the mental model: The loop computes n!
• Debugging when the observed value should match the expectation in: This iterative approach avoids the stack overhead of recursive factorial.

Edge Cases:
• If inputs vary from the situation described in: by multiplying result by n and decrementing., the behavior can change.
• When the construct’s assumptions differ, the rule in: result: 1*5=5, 5*4=20, 20*3=60, 60*2=120. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This iterative approach avoids the stack overhead of recursive factorial..
• When performance matters, prefer the simplest pattern that still implements: The loop computes n!.

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The loop computes n!.

Notes:
• For maintainable code, make the intent behind: by multiplying result by n and decrementing. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q20: Manual integer division
  (_i: number) => ({
    q: `What is (count, a)?\na, b = 17, 5\ncount = 0\nwhile a >= b:\n    a -= b\n    count += 1`,
    o: ["(3, 2)", "(3, 0)", "(2, 7)", "(4, -3)"],
    c: 0,
    e: "17-5=12(1), 12-5=7(2), 7-5=2(3). 2<5 → stop. Quotient=3, remainder=2.",
    de: `This implements division via repeated subtraction. 17-5=12 (count=1), 12-5=7 (count=2), 7-5=2 (count=3). Now 2<5 so the loop exits. count=3 is the quotient (17//5=3) and a=2 is the remainder (17%5=2). This is how early computers performed division before hardware dividers existed. Verify: 5*3+2=17.

Key Concepts:
• Verify: 5*3+2=17.

Key Distinctions:
• This question’s focus is best captured by: This implements division via repeated subtraction.
• The contrast that matters for correctness is summarized by: 17-5=12 (count=1), 12-5=7 (count=2), 7-5=2 (count=3).

How It Works:
• Python follows the rule implied by: This implements division via repeated subtraction.
• The outcome you observe follows from: Verify: 5*3+2=17.

Step-by-Step Execution:
1. Start from the construct described in: This implements division via repeated subtraction.
2. Resolve the subparts implied by: 17-5=12 (count=1), 12-5=7 (count=2), 7-5=2 (count=3).
3. Apply the core semantics highlighted in: Now 2<5 so the loop exits.
4. Confirm the final result aligns with: Verify: 5*3+2=17.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: 17-5=12 (count=1), 12-5=7 (count=2), 7-5=2 (count=3).
2. Apply the construct’s main rule next, matching: This implements division via repeated subtraction.
3. Produce any intermediate values that Verify: 5*3+2=17. relies on
4. Finish by returning/assembling the final output named by: Verify: 5*3+2=17.
5. Use the result only after the full construct has completed, per: This implements division via repeated subtraction.

Common Use Cases:
• Teaching this behavior using the mental model: This implements division via repeated subtraction.
• Debugging when the observed value should match the expectation in: Verify: 5*3+2=17.

Edge Cases:
• If inputs vary from the situation described in: 17-5=12 (count=1), 12-5=7 (count=2), 7-5=2 (count=3)., the behavior can change.
• When the construct’s assumptions differ, the rule in: Now 2<5 so the loop exits. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Verify: 5*3+2=17..
• When performance matters, prefer the simplest pattern that still implements: This implements division via repeated subtraction..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This implements division via repeated subtraction..

Notes:
• For maintainable code, make the intent behind: 17-5=12 (count=1), 12-5=7 (count=2), 7-5=2 (count=3). explicit (and test it with inputs like those in this prompt).`
  }),
  // Q21: Manual character find
  (_i: number) => ({
    q: `What is i?\ns = "abcdefg"\nch = "e"\ni = 0\nwhile i < len(s) and s[i] != ch:\n    i += 1`,
    o: ["4", "3", "5", "6"],
    c: 0,
    e: "Scans a(0), b(1), c(2), d(3) — none match 'e'. s[4]='e' → stop at i=4.",
    de: `This manually implements str.find(). The loop advances i while s[i] doesn't equal the target character. 'a'≠'e' (i=1), 'b'≠'e' (i=2), 'c'≠'e' (i=3), 'd'≠'e' (i=4). At i=4, s[4]='e'==ch so the condition s[i]!=ch is False and the loop exits. If ch weren't found, i would equal len(s). Equivalent to s.index("e").

Key Concepts:
• Equivalent to s.index("e").

Key Distinctions:
• This question’s focus is best captured by: This manually implements str.find().
• The contrast that matters for correctness is summarized by: The loop advances i while s[i] doesn't equal the target character.

How It Works:
• Python follows the rule implied by: This manually implements str.find().
• The outcome you observe follows from: Equivalent to s.index("e").

Step-by-Step Execution:
1. Start from the construct described in: This manually implements str.find().
2. Resolve the subparts implied by: The loop advances i while s[i] doesn't equal the target character.
3. Apply the core semantics highlighted in: 'a'≠'e' (i=1), 'b'≠'e' (i=2), 'c'≠'e' (i=3), 'd'≠'e' (i=4).
4. Confirm the final result aligns with: Equivalent to s.index("e").

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The loop advances i while s[i] doesn't equal the target character.
2. Apply the construct’s main rule next, matching: This manually implements str.find().
3. Produce any intermediate values that Equivalent to s.index("e"). relies on
4. Finish by returning/assembling the final output named by: Equivalent to s.index("e").
5. Use the result only after the full construct has completed, per: This manually implements str.find().

Common Use Cases:
• Teaching this behavior using the mental model: This manually implements str.find().
• Debugging when the observed value should match the expectation in: Equivalent to s.index("e").

Edge Cases:
• If inputs vary from the situation described in: The loop advances i while s[i] doesn't equal the target character., the behavior can change.
• When the construct’s assumptions differ, the rule in: 'a'≠'e' (i=1), 'b'≠'e' (i=2), 'c'≠'e' (i=3), 'd'≠'e' (i=4). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Equivalent to s.index("e")..
• When performance matters, prefer the simplest pattern that still implements: This manually implements str.find()..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This manually implements str.find()..

Notes:
• For maintainable code, make the intent behind: The loop advances i while s[i] doesn't equal the target character. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q22: Decrementing countdown
  (_i: number) => ({
    q: `What is result?\nn = 5\nresult = []\nwhile n > 0:\n    result.append(n)\n    n -= 1`,
    o: ["[5, 4, 3, 2, 1]", "[1, 2, 3, 4, 5]", "[5, 4, 3, 2]", "[4, 3, 2, 1, 0]"],
    c: 0,
    e: "Appends 5, 4, 3, 2, 1 then n=0 exits. Counts down from 5.",
    de: `The loop appends n before decrementing. n=5→append 5, n=4→append 4, n=3→append 3, n=2→append 2, n=1→append 1, n=0→loop exits. Result is [5,4,3,2,1]. Note that 0 is NOT appended because the check n>0 happens before the body. Equivalent to list(range(5, 0, -1)).

Key Concepts:
• Equivalent to list(range(5, 0, -1)).

Key Distinctions:
• This question’s focus is best captured by: The loop appends n before decrementing.
• The contrast that matters for correctness is summarized by: n=5→append 5, n=4→append 4, n=3→append 3, n=2→append 2, n=1→append 1, n=0→loop exits.

How It Works:
• Python follows the rule implied by: The loop appends n before decrementing.
• The outcome you observe follows from: Equivalent to list(range(5, 0, -1)).

Step-by-Step Execution:
1. Start from the construct described in: The loop appends n before decrementing.
2. Resolve the subparts implied by: n=5→append 5, n=4→append 4, n=3→append 3, n=2→append 2, n=1→append 1, n=0→loop exits.
3. Apply the core semantics highlighted in: Result is [5,4,3,2,1].
4. Confirm the final result aligns with: Equivalent to list(range(5, 0, -1)).

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: n=5→append 5, n=4→append 4, n=3→append 3, n=2→append 2, n=1→append 1, n=0→loop exits.
2. Apply the construct’s main rule next, matching: The loop appends n before decrementing.
3. Produce any intermediate values that Equivalent to list(range(5, 0, -1)). relies on
4. Finish by returning/assembling the final output named by: Equivalent to list(range(5, 0, -1)).
5. Use the result only after the full construct has completed, per: The loop appends n before decrementing.

Common Use Cases:
• Teaching this behavior using the mental model: The loop appends n before decrementing.
• Debugging when the observed value should match the expectation in: Equivalent to list(range(5, 0, -1)).

Edge Cases:
• If inputs vary from the situation described in: n=5→append 5, n=4→append 4, n=3→append 3, n=2→append 2, n=1→append 1, n=0→loop exits., the behavior can change.
• When the construct’s assumptions differ, the rule in: Result is [5,4,3,2,1]. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Equivalent to list(range(5, 0, -1))..
• When performance matters, prefer the simplest pattern that still implements: The loop appends n before decrementing..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The loop appends n before decrementing..

Notes:
• For maintainable code, make the intent behind: n=5→append 5, n=4→append 4, n=3→append 3, n=2→append 2, n=1→append 1, n=0→loop exits. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q23: FizzBuzz 1-5
  (_i: number) => ({
    q: `What is result?\nresult = []\ni = 1\nwhile i <= 5:\n    if i % 3 == 0:\n        result.append("Fizz")\n    elif i % 5 == 0:\n        result.append("Buzz")\n    else:\n        result.append(str(i))\n    i += 1`,
    o: ['["1", "2", "Fizz", "4", "Buzz"]', '["1", "2", "3", "4", "5"]', '["Fizz", "Buzz", "Fizz", "Buzz", "FizzBuzz"]', '["1", "2", "Fizz", "4", "5"]'],
    c: 0,
    e: "1→'1', 2→'2', 3%3==0→'Fizz', 4→'4', 5%5==0→'Buzz'.",
    de: `Classic FizzBuzz: divisible by 3 → "Fizz", by 5 → "Buzz", otherwise the number as string. i=1: neither → "1". i=2: neither → "2". i=3: 3%3==0 → "Fizz". i=4: neither → "4". i=5: 5%5==0 → "Buzz". Note: 15 would match both, but elif means only "Fizz" fires. A full FizzBuzz usually checks divisible-by-15 first for "FizzBuzz".

Key Concepts:
• A full FizzBuzz usually checks divisible-by-15 first for "FizzBuzz".

Key Distinctions:
• This question’s focus is best captured by: Classic FizzBuzz: divisible by 3 → "Fizz", by 5 → "Buzz", otherwise the number as string.
• The contrast that matters for correctness is summarized by: i=1: neither → "1".

How It Works:
• Python follows the rule implied by: Classic FizzBuzz: divisible by 3 → "Fizz", by 5 → "Buzz", otherwise the number as string.
• The outcome you observe follows from: A full FizzBuzz usually checks divisible-by-15 first for "FizzBuzz".

Step-by-Step Execution:
1. Start from the construct described in: Classic FizzBuzz: divisible by 3 → "Fizz", by 5 → "Buzz", otherwise the number as string.
2. Resolve the subparts implied by: i=1: neither → "1".
3. Apply the core semantics highlighted in: i=2: neither → "2".
4. Confirm the final result aligns with: A full FizzBuzz usually checks divisible-by-15 first for "FizzBuzz".

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: i=1: neither → "1".
2. Apply the construct’s main rule next, matching: Classic FizzBuzz: divisible by 3 → "Fizz", by 5 → "Buzz", otherwise the number as string.
3. Produce any intermediate values that A full FizzBuzz usually checks divisible-by-15 first for "FizzBuzz". relies on
4. Finish by returning/assembling the final output named by: A full FizzBuzz usually checks divisible-by-15 first for "FizzBuzz".
5. Use the result only after the full construct has completed, per: Classic FizzBuzz: divisible by 3 → "Fizz", by 5 → "Buzz", otherwise the number as string.

Common Use Cases:
• Teaching this behavior using the mental model: Classic FizzBuzz: divisible by 3 → "Fizz", by 5 → "Buzz", otherwise the number as string.
• Debugging when the observed value should match the expectation in: A full FizzBuzz usually checks divisible-by-15 first for "FizzBuzz".

Edge Cases:
• If inputs vary from the situation described in: i=1: neither → "1"., the behavior can change.
• When the construct’s assumptions differ, the rule in: i=2: neither → "2". is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: A full FizzBuzz usually checks divisible-by-15 first for "FizzBuzz"..
• When performance matters, prefer the simplest pattern that still implements: Classic FizzBuzz: divisible by 3 → "Fizz", by 5 → "Buzz", otherwise the number as string..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Classic FizzBuzz: divisible by 3 → "Fizz", by 5 → "Buzz", otherwise the number as string..

Notes:
• For maintainable code, make the intent behind: i=1: neither → "1". explicit (and test it with inputs like those in this prompt).`
  }),
  // Q24: Two-pointer sum search
  (_i: number) => ({
    q: `What is (nums[lo], nums[hi])?\nnums = [1, 3, 5, 7, 9]\nlo, hi = 0, 4\ntarget = 8\nwhile lo < hi:\n    s = nums[lo] + nums[hi]\n    if s == target:\n        break\n    elif s < target:\n        lo += 1\n    else:\n        hi -= 1`,
    o: ["(1, 7)", "(3, 5)", "(1, 9)", "(5, 7)"],
    c: 0,
    e: "s=1+9=10>8→hi=3. s=1+7=8==target→break. Pair is (1, 7).",
    de: `The two-pointer technique works on sorted arrays. Start with lo=0, hi=4: sum=1+9=10>8, so hi decrements to 3. Now sum=1+7=8==target, so break. The pair (nums[0], nums[3]) = (1, 7) sums to 8. This O(n) algorithm avoids the O(n²) brute force of checking all pairs. It works because increasing lo raises the sum and decreasing hi lowers it.

Key Concepts:
• It works because increasing lo raises the sum and decreasing hi lowers it.

Key Distinctions:
• This question’s focus is best captured by: The two-pointer technique works on sorted arrays.
• The contrast that matters for correctness is summarized by: Start with lo=0, hi=4: sum=1+9=10>8, so hi decrements to 3.

How It Works:
• Python follows the rule implied by: The two-pointer technique works on sorted arrays.
• The outcome you observe follows from: It works because increasing lo raises the sum and decreasing hi lowers it.

Step-by-Step Execution:
1. Start from the construct described in: The two-pointer technique works on sorted arrays.
2. Resolve the subparts implied by: Start with lo=0, hi=4: sum=1+9=10>8, so hi decrements to 3.
3. Apply the core semantics highlighted in: Now sum=1+7=8==target, so break.
4. Confirm the final result aligns with: It works because increasing lo raises the sum and decreasing hi lowers it.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Start with lo=0, hi=4: sum=1+9=10>8, so hi decrements to 3.
2. Apply the construct’s main rule next, matching: The two-pointer technique works on sorted arrays.
3. Produce any intermediate values that It works because increasing lo raises the sum and decreasing hi lowers it. relies on
4. Finish by returning/assembling the final output named by: It works because increasing lo raises the sum and decreasing hi lowers it.
5. Use the result only after the full construct has completed, per: The two-pointer technique works on sorted arrays.

Common Use Cases:
• Teaching this behavior using the mental model: The two-pointer technique works on sorted arrays.
• Debugging when the observed value should match the expectation in: It works because increasing lo raises the sum and decreasing hi lowers it.

Edge Cases:
• If inputs vary from the situation described in: Start with lo=0, hi=4: sum=1+9=10>8, so hi decrements to 3., the behavior can change.
• When the construct’s assumptions differ, the rule in: Now sum=1+7=8==target, so break. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: It works because increasing lo raises the sum and decreasing hi lowers it..
• When performance matters, prefer the simplest pattern that still implements: The two-pointer technique works on sorted arrays..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The two-pointer technique works on sorted arrays..

Notes:
• For maintainable code, make the intent behind: Start with lo=0, hi=4: sum=1+9=10>8, so hi decrements to 3. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q25: Merge two sorted lists
  (_i: number) => ({
    q: `What is result?\na = [1, 3, 5]\nb = [2, 4, 6]\nresult = []\ni = j = 0\nwhile i < len(a) and j < len(b):\n    if a[i] <= b[j]:\n        result.append(a[i])\n        i += 1\n    else:\n        result.append(b[j])\n        j += 1\nresult += a[i:] + b[j:]`,
    o: ["[1, 2, 3, 4, 5, 6]", "[1, 3, 5, 2, 4, 6]", "[2, 4, 6, 1, 3, 5]", "[1, 2, 3, 4, 5]"],
    c: 0,
    e: "Interleaves by comparing heads: 1,2,3,4,5 then appends remaining [6].",
    de: `Merge step of merge sort. Compare front elements of both lists, take the smaller. 1<=2→take 1. 3>2→take 2. 3<=4→take 3. 5>4→take 4. 5<=6→take 5. Now i=3 exits the loop (i<3 is False). Append remaining: a[3:]=[] and b[2:]=[6]. Final: [1,2,3,4,5,6]. This merge runs in O(n+m) time and is the key to merge sort's O(n log n) performance.

Key Concepts:
• This merge runs in O(n+m) time and is the key to merge sort's O(n log n) performance.

Key Distinctions:
• This question’s focus is best captured by: Merge step of merge sort.
• The contrast that matters for correctness is summarized by: Compare front elements of both lists, take the smaller.

How It Works:
• Python follows the rule implied by: Merge step of merge sort.
• The outcome you observe follows from: This merge runs in O(n+m) time and is the key to merge sort's O(n log n) performance.

Step-by-Step Execution:
1. Start from the construct described in: Merge step of merge sort.
2. Resolve the subparts implied by: Compare front elements of both lists, take the smaller.
3. Apply the core semantics highlighted in: 1<=2→take 1.
4. Confirm the final result aligns with: This merge runs in O(n+m) time and is the key to merge sort's O(n log n) performance.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Compare front elements of both lists, take the smaller.
2. Apply the construct’s main rule next, matching: Merge step of merge sort.
3. Produce any intermediate values that This merge runs in O(n+m) time and is the key to merge sort's O(n log n) performance. relies on
4. Finish by returning/assembling the final output named by: This merge runs in O(n+m) time and is the key to merge sort's O(n log n) performance.
5. Use the result only after the full construct has completed, per: Merge step of merge sort.

Common Use Cases:
• Teaching this behavior using the mental model: Merge step of merge sort.
• Debugging when the observed value should match the expectation in: This merge runs in O(n+m) time and is the key to merge sort's O(n log n) performance.

Edge Cases:
• If inputs vary from the situation described in: Compare front elements of both lists, take the smaller., the behavior can change.
• When the construct’s assumptions differ, the rule in: 1<=2→take 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This merge runs in O(n+m) time and is the key to merge sort's O(n log n) performance..
• When performance matters, prefer the simplest pattern that still implements: Merge step of merge sort..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Merge step of merge sort..

Notes:
• For maintainable code, make the intent behind: Compare front elements of both lists, take the smaller. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q26: Palindrome check
  (_i: number) => ({
    q: `What is is_pal?\ns = "racecar"\nlo, hi = 0, len(s) - 1\nis_pal = True\nwhile lo < hi:\n    if s[lo] != s[hi]:\n        is_pal = False\n        break\n    lo += 1\n    hi -= 1`,
    o: ["True", "False", '"racecar"', "Error"],
    c: 0,
    e: "r==r, a==a, c==c, then lo=hi=3 → loop exits. All matched → True.",
    de: `Two pointers move inward comparing characters. lo=0,hi=6: 'r'=='r' ✓. lo=1,hi=5: 'a'=='a' ✓. lo=2,hi=4: 'c'=='c' ✓. lo=3,hi=3: 3<3 is False → loop exits. No mismatch was found, so is_pal stays True. If any pair differed, is_pal would be set False and break would exit early. This O(n) algorithm checks palindromes in-place without reversing.

Key Concepts:
• This O(n) algorithm checks palindromes in-place without reversing.

Key Distinctions:
• This question’s focus is best captured by: Two pointers move inward comparing characters.
• The contrast that matters for correctness is summarized by: lo=0,hi=6: 'r'=='r' ✓.

How It Works:
• Python follows the rule implied by: Two pointers move inward comparing characters.
• The outcome you observe follows from: This O(n) algorithm checks palindromes in-place without reversing.

Step-by-Step Execution:
1. Start from the construct described in: Two pointers move inward comparing characters.
2. Resolve the subparts implied by: lo=0,hi=6: 'r'=='r' ✓.
3. Apply the core semantics highlighted in: lo=1,hi=5: 'a'=='a' ✓.
4. Confirm the final result aligns with: This O(n) algorithm checks palindromes in-place without reversing.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: lo=0,hi=6: 'r'=='r' ✓.
2. Apply the construct’s main rule next, matching: Two pointers move inward comparing characters.
3. Produce any intermediate values that This O(n) algorithm checks palindromes in-place without reversing. relies on
4. Finish by returning/assembling the final output named by: This O(n) algorithm checks palindromes in-place without reversing.
5. Use the result only after the full construct has completed, per: Two pointers move inward comparing characters.

Common Use Cases:
• Teaching this behavior using the mental model: Two pointers move inward comparing characters.
• Debugging when the observed value should match the expectation in: This O(n) algorithm checks palindromes in-place without reversing.

Edge Cases:
• If inputs vary from the situation described in: lo=0,hi=6: 'r'=='r' ✓., the behavior can change.
• When the construct’s assumptions differ, the rule in: lo=1,hi=5: 'a'=='a' ✓. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This O(n) algorithm checks palindromes in-place without reversing..
• When performance matters, prefer the simplest pattern that still implements: Two pointers move inward comparing characters..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Two pointers move inward comparing characters..

Notes:
• For maintainable code, make the intent behind: lo=0,hi=6: 'r'=='r' ✓. explicit (and test it with inputs like those in this prompt).`
  }),
];
