// --- LEVEL 4 EXPERT: WHILE-LOOP MASTERY - 26 QUESTIONS (27-52) ---
// Covers: Math algorithms, string processing, parsing, sorting steps,
// iterators, modular arithmetic, base conversion, command processing

// Questions 27-52: While-Loop Mastery (Math algorithms, string processing, parsing)

export const level4WhileLoopPatterns = [
  // Q27: While loop implementing Newton's method (integer sqrt)
  (_i: number) => ({
    q: `What is guess?\nn = 36\nguess = n\nwhile guess * guess > n:\n    guess = (guess + n // guess) // 2\nguess`,
    o: ["6", "36", "18", "Error"],
    c: 0,
    e: "Newton's method converges: 36→18→10→6. 6²=36, not >36, so loop stops.",
    de: `Newton's method for integer square root repeatedly refines a guess using the formula (guess + n // guess) // 2. Starting with guess=36: (36+1)//2=18, then (18+2)//2=10, then (10+3)//2=6. At guess=6, 6*6=36 which is NOT >36, so the loop exits. This converges in O(log n) steps and is how math.isqrt works internally.

Key Concepts:
• This converges in O(log n) steps and is how math.isqrt works internally.

Key Distinctions:
• This question’s focus is best captured by: Newton's method for integer square root repeatedly refines a guess using the formula (guess + n // guess) // 2.
• The contrast that matters for correctness is summarized by: Starting with guess=36: (36+1)//2=18, then (18+2)//2=10, then (10+3)//2=6.

How It Works:
• Python follows the rule implied by: Newton's method for integer square root repeatedly refines a guess using the formula (guess + n // guess) // 2.
• The outcome you observe follows from: This converges in O(log n) steps and is how math.isqrt works internally.

Step-by-Step Execution:
1. Start from the construct described in: Newton's method for integer square root repeatedly refines a guess using the formula (guess + n // guess) // 2.
2. Resolve the subparts implied by: Starting with guess=36: (36+1)//2=18, then (18+2)//2=10, then (10+3)//2=6.
3. Apply the core semantics highlighted in: At guess=6, 6*6=36 which is NOT >36, so the loop exits.
4. Confirm the final result aligns with: This converges in O(log n) steps and is how math.isqrt works internally.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Starting with guess=36: (36+1)//2=18, then (18+2)//2=10, then (10+3)//2=6.
2. Apply the construct’s main rule next, matching: Newton's method for integer square root repeatedly refines a guess using the formula (guess + n // guess) // 2.
3. Produce any intermediate values that This converges in O(log n) steps and is how math.isqrt works internally. relies on
4. Finish by returning/assembling the final output named by: This converges in O(log n) steps and is how math.isqrt works internally.
5. Use the result only after the full construct has completed, per: Newton's method for integer square root repeatedly refines a guess using the formula (guess + n // guess) // 2.

Common Use Cases:
• Teaching this behavior using the mental model: Newton's method for integer square root repeatedly refines a guess using the formula (guess + n // guess) // 2.
• Debugging when the observed value should match the expectation in: This converges in O(log n) steps and is how math.isqrt works internally.

Edge Cases:
• If inputs vary from the situation described in: Starting with guess=36: (36+1)//2=18, then (18+2)//2=10, then (10+3)//2=6., the behavior can change.
• When the construct’s assumptions differ, the rule in: At guess=6, 6*6=36 which is NOT >36, so the loop exits. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This converges in O(log n) steps and is how math.isqrt works internally..
• When performance matters, prefer the simplest pattern that still implements: Newton's method for integer square root repeatedly refines a guess using the formula (guess + n // guess) // 2..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Newton's method for integer square root repeatedly refines a guess using the formula (guess + n // guess) // 2..

Notes:
• For maintainable code, make the intent behind: Starting with guess=36: (36+1)//2=18, then (18+2)//2=10, then (10+3)//2=6. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q28: While loop with flag variable pattern
  (_i: number) => ({
    q: `What is (found, idx)?\nnums = [4, 7, 2, 9, 1]\nfound = False\nidx = 0\nwhile not found and idx < len(nums):\n    if nums[idx] > 8:\n        found = True\n    else:\n        idx += 1\n(found, idx)`,
    o: ["(True, 3)", "(True, 4)", "(False, 5)", "(True, 0)"],
    c: 0,
    e: "Scans until finding >8: 4(no), 7(no), 2(no), 9(yes) at index 3.",
    de: `The flag variable pattern uses a boolean to control loop termination. The loop checks two conditions: not found AND idx < len. Elements 4, 7, 2 fail the >8 test so idx increments. At idx=3, nums[3]=9 > 8, so found=True. Note: idx is NOT incremented in the True branch, so it stays at 3 — the index where the value was found.

Key Concepts:
• Note: idx is NOT incremented in the True branch, so it stays at 3 — the index where the value was found.

Key Distinctions:
• This question’s focus is best captured by: The flag variable pattern uses a boolean to control loop termination.
• The contrast that matters for correctness is summarized by: The loop checks two conditions: not found AND idx < len.

How It Works:
• Python follows the rule implied by: The flag variable pattern uses a boolean to control loop termination.
• The outcome you observe follows from: Note: idx is NOT incremented in the True branch, so it stays at 3 — the index where the value was found.

Step-by-Step Execution:
1. Start from the construct described in: The flag variable pattern uses a boolean to control loop termination.
2. Resolve the subparts implied by: The loop checks two conditions: not found AND idx < len.
3. Apply the core semantics highlighted in: Elements 4, 7, 2 fail the >8 test so idx increments.
4. Confirm the final result aligns with: Note: idx is NOT incremented in the True branch, so it stays at 3 — the index where the value was found.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The loop checks two conditions: not found AND idx < len.
2. Apply the construct’s main rule next, matching: The flag variable pattern uses a boolean to control loop termination.
3. Produce any intermediate values that Note: idx is NOT incremented in the True branch, so it stays at 3 — the index where the value was found. relies on
4. Finish by returning/assembling the final output named by: Note: idx is NOT incremented in the True branch, so it stays at 3 — the index where the value was found.
5. Use the result only after the full construct has completed, per: The flag variable pattern uses a boolean to control loop termination.

Common Use Cases:
• Teaching this behavior using the mental model: The flag variable pattern uses a boolean to control loop termination.
• Debugging when the observed value should match the expectation in: Note: idx is NOT incremented in the True branch, so it stays at 3 — the index where the value was found.

Edge Cases:
• If inputs vary from the situation described in: The loop checks two conditions: not found AND idx < len., the behavior can change.
• When the construct’s assumptions differ, the rule in: Elements 4, 7, 2 fail the >8 test so idx increments. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Note: idx is NOT incremented in the True branch, so it stays at 3 — the index where the value was found..
• When performance matters, prefer the simplest pattern that still implements: The flag variable pattern uses a boolean to control loop termination..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The flag variable pattern uses a boolean to control loop termination..

Notes:
• For maintainable code, make the intent behind: The loop checks two conditions: not found AND idx < len. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q29: While loop implementing exponential backoff steps
  (_i: number) => ({
    q: `What is total?\ndelay = 1\ntotal = 0\nwhile delay <= 16:\n    total += delay\n    delay *= 2\ntotal`,
    o: ["31", "16", "32", "15"],
    c: 0,
    e: "Adds 1+2+4+8+16=31. Each step doubles the delay.",
    de: `Exponential backoff doubles the wait time each iteration: 1, 2, 4, 8, 16. The sum 1+2+4+8+16 = 31 (which equals 2^5 - 1). After adding 16, delay becomes 32 which exceeds 16, ending the loop. This pattern is used in network retries and rate limiting — each failed attempt waits exponentially longer before retrying.

Key Concepts:
• This pattern is used in network retries and rate limiting — each failed attempt waits exponentially longer before retrying.

Key Distinctions:
• This question’s focus is best captured by: Exponential backoff doubles the wait time each iteration: 1, 2, 4, 8, 16.
• The contrast that matters for correctness is summarized by: The sum 1+2+4+8+16 = 31 (which equals 2^5 - 1).

How It Works:
• Python follows the rule implied by: Exponential backoff doubles the wait time each iteration: 1, 2, 4, 8, 16.
• The outcome you observe follows from: This pattern is used in network retries and rate limiting — each failed attempt waits exponentially longer before retrying.

Step-by-Step Execution:
1. Start from the construct described in: Exponential backoff doubles the wait time each iteration: 1, 2, 4, 8, 16.
2. Resolve the subparts implied by: The sum 1+2+4+8+16 = 31 (which equals 2^5 - 1).
3. Apply the core semantics highlighted in: After adding 16, delay becomes 32 which exceeds 16, ending the loop.
4. Confirm the final result aligns with: This pattern is used in network retries and rate limiting — each failed attempt waits exponentially longer before retrying.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The sum 1+2+4+8+16 = 31 (which equals 2^5 - 1).
2. Apply the construct’s main rule next, matching: Exponential backoff doubles the wait time each iteration: 1, 2, 4, 8, 16.
3. Produce any intermediate values that This pattern is used in network retries and rate limiting — each failed attempt waits exponentially longer before retrying. relies on
4. Finish by returning/assembling the final output named by: This pattern is used in network retries and rate limiting — each failed attempt waits exponentially longer before retrying.
5. Use the result only after the full construct has completed, per: Exponential backoff doubles the wait time each iteration: 1, 2, 4, 8, 16.

Common Use Cases:
• Teaching this behavior using the mental model: Exponential backoff doubles the wait time each iteration: 1, 2, 4, 8, 16.
• Debugging when the observed value should match the expectation in: This pattern is used in network retries and rate limiting — each failed attempt waits exponentially longer before retrying.

Edge Cases:
• If inputs vary from the situation described in: The sum 1+2+4+8+16 = 31 (which equals 2^5 - 1)., the behavior can change.
• When the construct’s assumptions differ, the rule in: After adding 16, delay becomes 32 which exceeds 16, ending the loop. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This pattern is used in network retries and rate limiting — each failed attempt waits exponentially longer before retrying..
• When performance matters, prefer the simplest pattern that still implements: Exponential backoff doubles the wait time each iteration: 1, 2, 4, 8, 16..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Exponential backoff doubles the wait time each iteration: 1, 2, 4, 8, 16..

Notes:
• For maintainable code, make the intent behind: The sum 1+2+4+8+16 = 31 (which equals 2^5 - 1). explicit (and test it with inputs like those in this prompt).`
  }),
  // Q30: While loop processing digits of a number (sum of digits)
  (_i: number) => ({
    q: `What is total?\nn = 9473\ntotal = 0\nwhile n > 0:\n    total += n % 10\n    n //= 10\ntotal`,
    o: ["23", "24", "9", "4"],
    c: 0,
    e: "Extracts digits right-to-left: 3+7+4+9 = 23.",
    de: `This extracts digits using modulo and integer division. n%10 gives the last digit, n//=10 removes it. Step by step: 9473%10=3 (total=3), 947%10=7 (total=10), 94%10=4 (total=14), 9%10=9 (total=23), 0>0 stops. This is the standard digit-processing pattern — works for any positive integer regardless of digit count.

Key Concepts:
• This is the standard digit-processing pattern — works for any positive integer regardless of digit count.

Key Distinctions:
• This question’s focus is best captured by: This extracts digits using modulo and integer division.
• The contrast that matters for correctness is summarized by: n%10 gives the last digit, n//=10 removes it.

How It Works:
• Python follows the rule implied by: This extracts digits using modulo and integer division.
• The outcome you observe follows from: This is the standard digit-processing pattern — works for any positive integer regardless of digit count.

Step-by-Step Execution:
1. Start from the construct described in: This extracts digits using modulo and integer division.
2. Resolve the subparts implied by: n%10 gives the last digit, n//=10 removes it.
3. Apply the core semantics highlighted in: Step by step: 9473%10=3 (total=3), 947%10=7 (total=10), 94%10=4 (total=14), 9%10=9 (total=23), 0>0 stops.
4. Confirm the final result aligns with: This is the standard digit-processing pattern — works for any positive integer regardless of digit count.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: n%10 gives the last digit, n//=10 removes it.
2. Apply the construct’s main rule next, matching: This extracts digits using modulo and integer division.
3. Produce any intermediate values that This is the standard digit-processing pattern — works for any positive integer regardless of digit count. relies on
4. Finish by returning/assembling the final output named by: This is the standard digit-processing pattern — works for any positive integer regardless of digit count.
5. Use the result only after the full construct has completed, per: This extracts digits using modulo and integer division.

Common Use Cases:
• Teaching this behavior using the mental model: This extracts digits using modulo and integer division.
• Debugging when the observed value should match the expectation in: This is the standard digit-processing pattern — works for any positive integer regardless of digit count.

Edge Cases:
• If inputs vary from the situation described in: n%10 gives the last digit, n//=10 removes it., the behavior can change.
• When the construct’s assumptions differ, the rule in: Step by step: 9473%10=3 (total=3), 947%10=7 (total=10), 94%10=4 (total=14), 9%10=9 (total=23), 0>0 stops. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This is the standard digit-processing pattern — works for any positive integer regardless of digit count..
• When performance matters, prefer the simplest pattern that still implements: This extracts digits using modulo and integer division..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This extracts digits using modulo and integer division..

Notes:
• For maintainable code, make the intent behind: n%10 gives the last digit, n//=10 removes it. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q31: While loop implementing repeated halving
  (_i: number) => ({
    q: `What is steps?\nn = 100\nsteps = 0\nwhile n > 1:\n    n //= 2\n    steps += 1\nsteps`,
    o: ["6", "7", "50", "100"],
    c: 0,
    e: "100→50→25→12→6→3→1 takes 6 halvings.",
    de: `Repeated halving with integer division: 100→50→25→12→6→3→1. Each step divides by 2 (rounding down). After 6 steps n=1, and 1>1 is False so the loop exits. This computes floor(log₂(n)), which is fundamental to binary search complexity. For n=100, floor(log₂(100)) = 6.

Key Concepts:
• For n=100, floor(log₂(100)) = 6.

Key Distinctions:
• This question’s focus is best captured by: Repeated halving with integer division: 100→50→25→12→6→3→1.
• The contrast that matters for correctness is summarized by: Each step divides by 2 (rounding down).

How It Works:
• Python follows the rule implied by: Repeated halving with integer division: 100→50→25→12→6→3→1.
• The outcome you observe follows from: For n=100, floor(log₂(100)) = 6.

Step-by-Step Execution:
1. Start from the construct described in: Repeated halving with integer division: 100→50→25→12→6→3→1.
2. Resolve the subparts implied by: Each step divides by 2 (rounding down).
3. Apply the core semantics highlighted in: After 6 steps n=1, and 1>1 is False so the loop exits.
4. Confirm the final result aligns with: For n=100, floor(log₂(100)) = 6.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Each step divides by 2 (rounding down).
2. Apply the construct’s main rule next, matching: Repeated halving with integer division: 100→50→25→12→6→3→1.
3. Produce any intermediate values that For n=100, floor(log₂(100)) = 6. relies on
4. Finish by returning/assembling the final output named by: For n=100, floor(log₂(100)) = 6.
5. Use the result only after the full construct has completed, per: Repeated halving with integer division: 100→50→25→12→6→3→1.

Common Use Cases:
• Teaching this behavior using the mental model: Repeated halving with integer division: 100→50→25→12→6→3→1.
• Debugging when the observed value should match the expectation in: For n=100, floor(log₂(100)) = 6.

Edge Cases:
• If inputs vary from the situation described in: Each step divides by 2 (rounding down)., the behavior can change.
• When the construct’s assumptions differ, the rule in: After 6 steps n=1, and 1>1 is False so the loop exits. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: For n=100, floor(log₂(100)) = 6..
• When performance matters, prefer the simplest pattern that still implements: Repeated halving with integer division: 100→50→25→12→6→3→1..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Repeated halving with integer division: 100→50→25→12→6→3→1..

Notes:
• For maintainable code, make the intent behind: Each step divides by 2 (rounding down). explicit (and test it with inputs like those in this prompt).`
  }),
  // Q32: While loop with walrus operator
  (_i: number) => ({
    q: `What is val?\ndata = [1, 3, 5, 7, 2, 4]\nidx = 0\nwhile (val := data[idx]) % 2 != 0:\n    idx += 1\nval`,
    o: ["2", "7", "4", "1"],
    c: 0,
    e: "The walrus operator assigns each element to val; first even value (2) stops the loop.",
    de: `The walrus operator (:=) assigns data[idx] to val inside the while condition. Each iteration: val=1 (odd, continue), val=3 (odd), val=5 (odd), val=7 (odd), val=2 (even, 2%2==0, condition False, loop exits). val retains the value 2 — the first even number. Without :=, you'd need to assign val before and inside the loop.

Key Concepts:
• Without :=, you'd need to assign val before and inside the loop.

Key Distinctions:
• This question’s focus is best captured by: The walrus operator (:=) assigns data[idx] to val inside the while condition.
• The contrast that matters for correctness is summarized by: Each iteration: val=1 (odd, continue), val=3 (odd), val=5 (odd), val=7 (odd), val=2 (even, 2%2==0, condition False, loop exits).

How It Works:
• Python follows the rule implied by: The walrus operator (:=) assigns data[idx] to val inside the while condition.
• The outcome you observe follows from: Without :=, you'd need to assign val before and inside the loop.

Step-by-Step Execution:
1. Start from the construct described in: The walrus operator (:=) assigns data[idx] to val inside the while condition.
2. Resolve the subparts implied by: Each iteration: val=1 (odd, continue), val=3 (odd), val=5 (odd), val=7 (odd), val=2 (even, 2%2==0, condition False, loop exits).
3. Apply the core semantics highlighted in: val retains the value 2 — the first even number.
4. Confirm the final result aligns with: Without :=, you'd need to assign val before and inside the loop.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Each iteration: val=1 (odd, continue), val=3 (odd), val=5 (odd), val=7 (odd), val=2 (even, 2%2==0, condition False, loop exits).
2. Apply the construct’s main rule next, matching: The walrus operator (:=) assigns data[idx] to val inside the while condition.
3. Produce any intermediate values that Without :=, you'd need to assign val before and inside the loop. relies on
4. Finish by returning/assembling the final output named by: Without :=, you'd need to assign val before and inside the loop.
5. Use the result only after the full construct has completed, per: The walrus operator (:=) assigns data[idx] to val inside the while condition.

Common Use Cases:
• Teaching this behavior using the mental model: The walrus operator (:=) assigns data[idx] to val inside the while condition.
• Debugging when the observed value should match the expectation in: Without :=, you'd need to assign val before and inside the loop.

Edge Cases:
• If inputs vary from the situation described in: Each iteration: val=1 (odd, continue), val=3 (odd), val=5 (odd), val=7 (odd), val=2 (even, 2%2==0, condition False, loop exits)., the behavior can change.
• When the construct’s assumptions differ, the rule in: val retains the value 2 — the first even number. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Without :=, you'd need to assign val before and inside the loop..
• When performance matters, prefer the simplest pattern that still implements: The walrus operator (:=) assigns data[idx] to val inside the while condition..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The walrus operator (:=) assigns data[idx] to val inside the while condition..

Notes:
• For maintainable code, make the intent behind: Each iteration: val=1 (odd, continue), val=3 (odd), val=5 (odd), val=7 (odd), val=2 (even, 2%2==0, condition False, loop exits). explicit (and test it with inputs like those in this prompt).`
  }),
  // Q33: While loop implementing Caesar cipher shift
  (_i: number) => ({
    q: `What is result?\ntext = "hello"\nresult = ""\ni = 0\nshift = 3\nwhile i < len(text):\n    ch = text[i]\n    result += chr((ord(ch) - 97 + shift) % 26 + 97)\n    i += 1\nresult`,
    o: ['"khoor"', '"ebiil"', '"lipps"', '"ifmmp"'],
    c: 0,
    e: "Each letter shifts +3: h→k, e→h, l→o, l→o, o→r.",
    de: `Caesar cipher shifts each letter by a fixed amount. The formula (ord(ch)-97+shift)%26+97 normalizes to 0-25, adds the shift, wraps with modulo, then converts back. h(7)→k(10), e(4)→h(7), l(11)→o(14), l→o, o(14)→r(17). The %26 ensures wrapping: z+3 would become c. This is one of the oldest encryption algorithms.

Key Concepts:
• This is one of the oldest encryption algorithms.

Key Distinctions:
• This question’s focus is best captured by: Caesar cipher shifts each letter by a fixed amount.
• The contrast that matters for correctness is summarized by: The formula (ord(ch)-97+shift)%26+97 normalizes to 0-25, adds the shift, wraps with modulo, then converts back.

How It Works:
• Python follows the rule implied by: Caesar cipher shifts each letter by a fixed amount.
• The outcome you observe follows from: This is one of the oldest encryption algorithms.

Step-by-Step Execution:
1. Start from the construct described in: Caesar cipher shifts each letter by a fixed amount.
2. Resolve the subparts implied by: The formula (ord(ch)-97+shift)%26+97 normalizes to 0-25, adds the shift, wraps with modulo, then converts back.
3. Apply the core semantics highlighted in: h(7)→k(10), e(4)→h(7), l(11)→o(14), l→o, o(14)→r(17).
4. Confirm the final result aligns with: This is one of the oldest encryption algorithms.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The formula (ord(ch)-97+shift)%26+97 normalizes to 0-25, adds the shift, wraps with modulo, then converts back.
2. Apply the construct’s main rule next, matching: Caesar cipher shifts each letter by a fixed amount.
3. Produce any intermediate values that This is one of the oldest encryption algorithms. relies on
4. Finish by returning/assembling the final output named by: This is one of the oldest encryption algorithms.
5. Use the result only after the full construct has completed, per: Caesar cipher shifts each letter by a fixed amount.

Common Use Cases:
• Teaching this behavior using the mental model: Caesar cipher shifts each letter by a fixed amount.
• Debugging when the observed value should match the expectation in: This is one of the oldest encryption algorithms.

Edge Cases:
• If inputs vary from the situation described in: The formula (ord(ch)-97+shift)%26+97 normalizes to 0-25, adds the shift, wraps with modulo, then converts back., the behavior can change.
• When the construct’s assumptions differ, the rule in: h(7)→k(10), e(4)→h(7), l(11)→o(14), l→o, o(14)→r(17). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This is one of the oldest encryption algorithms..
• When performance matters, prefer the simplest pattern that still implements: Caesar cipher shifts each letter by a fixed amount..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Caesar cipher shifts each letter by a fixed amount..

Notes:
• For maintainable code, make the intent behind: The formula (ord(ch)-97+shift)%26+97 normalizes to 0-25, adds the shift, wraps with modulo, then converts back. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q34: While loop converting decimal to binary string
  (_i: number) => ({
    q: `What is bits?\nn = 13\nbits = ""\nwhile n > 0:\n    bits = str(n % 2) + bits\n    n //= 2\nbits`,
    o: ['"1101"', '"1011"', '"1110"', '"1010"'],
    c: 0,
    e: "13 in binary: 13%2=1, 6%2=0, 3%2=1, 1%2=1 → prepend gives '1101'.",
    de: `Converting decimal to binary extracts bits via repeated %2 and //2. Crucially, each new digit is prepended (str(n%2) + bits) because we extract the least significant bit first. 13→1(rem), 6→0, 3→1, 1→1. Prepending builds "1"→"01"→"101"→"1101". Verify: 8+4+0+1=13. Equivalent to bin(13)[2:].

Key Concepts:
• Equivalent to bin(13)[2:].

Key Distinctions:
• This question’s focus is best captured by: Converting decimal to binary extracts bits via repeated %2 and //2.
• The contrast that matters for correctness is summarized by: Crucially, each new digit is prepended (str(n%2) + bits) because we extract the least significant bit first.

How It Works:
• Python follows the rule implied by: Converting decimal to binary extracts bits via repeated %2 and //2.
• The outcome you observe follows from: Equivalent to bin(13)[2:].

Step-by-Step Execution:
1. Start from the construct described in: Converting decimal to binary extracts bits via repeated %2 and //2.
2. Resolve the subparts implied by: Crucially, each new digit is prepended (str(n%2) + bits) because we extract the least significant bit first.
3. Apply the core semantics highlighted in: 13→1(rem), 6→0, 3→1, 1→1.
4. Confirm the final result aligns with: Equivalent to bin(13)[2:].

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Crucially, each new digit is prepended (str(n%2) + bits) because we extract the least significant bit first.
2. Apply the construct’s main rule next, matching: Converting decimal to binary extracts bits via repeated %2 and //2.
3. Produce any intermediate values that Equivalent to bin(13)[2:]. relies on
4. Finish by returning/assembling the final output named by: Equivalent to bin(13)[2:].
5. Use the result only after the full construct has completed, per: Converting decimal to binary extracts bits via repeated %2 and //2.

Common Use Cases:
• Teaching this behavior using the mental model: Converting decimal to binary extracts bits via repeated %2 and //2.
• Debugging when the observed value should match the expectation in: Equivalent to bin(13)[2:].

Edge Cases:
• If inputs vary from the situation described in: Crucially, each new digit is prepended (str(n%2) + bits) because we extract the least significant bit first., the behavior can change.
• When the construct’s assumptions differ, the rule in: 13→1(rem), 6→0, 3→1, 1→1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Equivalent to bin(13)[2:]..
• When performance matters, prefer the simplest pattern that still implements: Converting decimal to binary extracts bits via repeated %2 and //2..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Converting decimal to binary extracts bits via repeated %2 and //2..

Notes:
• For maintainable code, make the intent behind: Crucially, each new digit is prepended (str(n%2) + bits) because we extract the least significant bit first. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q35: While loop converting binary string to decimal
  (_i: number) => ({
    q: `What is decimal?\nbinary = "1011"\ndecimal = 0\ni = 0\nwhile i < len(binary):\n    decimal = decimal * 2 + int(binary[i])\n    i += 1\ndecimal`,
    o: ["11", "13", "1011", "8"],
    c: 0,
    e: "Horner's method: 0→1→2→5→11. Binary 1011 = 8+2+1 = 11.",
    de: `This uses Horner's method to convert binary to decimal by processing digits left-to-right. Each step: multiply accumulator by 2 and add the current bit. 0*2+1=1, 1*2+0=2, 2*2+1=5, 5*2+1=11. This avoids computing powers of 2 explicitly. Verify: 1*8 + 0*4 + 1*2 + 1*1 = 11. Equivalent to int("1011", 2).

Key Concepts:
• Equivalent to int("1011", 2).

Key Distinctions:
• This question’s focus is best captured by: This uses Horner's method to convert binary to decimal by processing digits left-to-right.
• The contrast that matters for correctness is summarized by: Each step: multiply accumulator by 2 and add the current bit.

How It Works:
• Python follows the rule implied by: This uses Horner's method to convert binary to decimal by processing digits left-to-right.
• The outcome you observe follows from: Equivalent to int("1011", 2).

Step-by-Step Execution:
1. Start from the construct described in: This uses Horner's method to convert binary to decimal by processing digits left-to-right.
2. Resolve the subparts implied by: Each step: multiply accumulator by 2 and add the current bit.
3. Apply the core semantics highlighted in: 0*2+1=1, 1*2+0=2, 2*2+1=5, 5*2+1=11.
4. Confirm the final result aligns with: Equivalent to int("1011", 2).

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Each step: multiply accumulator by 2 and add the current bit.
2. Apply the construct’s main rule next, matching: This uses Horner's method to convert binary to decimal by processing digits left-to-right.
3. Produce any intermediate values that Equivalent to int("1011", 2). relies on
4. Finish by returning/assembling the final output named by: Equivalent to int("1011", 2).
5. Use the result only after the full construct has completed, per: This uses Horner's method to convert binary to decimal by processing digits left-to-right.

Common Use Cases:
• Teaching this behavior using the mental model: This uses Horner's method to convert binary to decimal by processing digits left-to-right.
• Debugging when the observed value should match the expectation in: Equivalent to int("1011", 2).

Edge Cases:
• If inputs vary from the situation described in: Each step: multiply accumulator by 2 and add the current bit., the behavior can change.
• When the construct’s assumptions differ, the rule in: 0*2+1=1, 1*2+0=2, 2*2+1=5, 5*2+1=11. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Equivalent to int("1011", 2)..
• When performance matters, prefer the simplest pattern that still implements: This uses Horner's method to convert binary to decimal by processing digits left-to-right..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This uses Horner's method to convert binary to decimal by processing digits left-to-right..

Notes:
• For maintainable code, make the intent behind: Each step: multiply accumulator by 2 and add the current bit. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q36: While loop implementing run-length encoding
  (_i: number) => ({
    q: `What is result?\ns = "aaabbc"\nresult = ""\ni = 0\nwhile i < len(s):\n    ch = s[i]\n    count = 0\n    while i < len(s) and s[i] == ch:\n        count += 1\n        i += 1\n    result += ch + str(count)\nresult`,
    o: ['"a3b2c1"', '"abc321"', '"a3b2c"', '"3a2b1c"'],
    c: 0,
    e: "Inner loop counts consecutive chars: 3 a's, 2 b's, 1 c.",
    de: `Run-length encoding compresses by replacing runs with char+count. The outer loop picks the current character, the inner loop counts how many consecutive copies exist while advancing i. 'aaa'→a3, 'bb'→b2, 'c'→c1. Note i is shared between loops — the inner loop advances i, so the outer loop resumes at the next different character.

Key Concepts:
• Note i is shared between loops — the inner loop advances i, so the outer loop resumes at the next different character.

Key Distinctions:
• This question’s focus is best captured by: Run-length encoding compresses by replacing runs with char+count.
• The contrast that matters for correctness is summarized by: The outer loop picks the current character, the inner loop counts how many consecutive copies exist while advancing i.

How It Works:
• Python follows the rule implied by: Run-length encoding compresses by replacing runs with char+count.
• The outcome you observe follows from: Note i is shared between loops — the inner loop advances i, so the outer loop resumes at the next different character.

Step-by-Step Execution:
1. Start from the construct described in: Run-length encoding compresses by replacing runs with char+count.
2. Resolve the subparts implied by: The outer loop picks the current character, the inner loop counts how many consecutive copies exist while advancing i.
3. Apply the core semantics highlighted in: 'aaa'→a3, 'bb'→b2, 'c'→c1.
4. Confirm the final result aligns with: Note i is shared between loops — the inner loop advances i, so the outer loop resumes at the next different character.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The outer loop picks the current character, the inner loop counts how many consecutive copies exist while advancing i.
2. Apply the construct’s main rule next, matching: Run-length encoding compresses by replacing runs with char+count.
3. Produce any intermediate values that Note i is shared between loops — the inner loop advances i, so the outer loop resumes at the next different character. relies on
4. Finish by returning/assembling the final output named by: Note i is shared between loops — the inner loop advances i, so the outer loop resumes at the next different character.
5. Use the result only after the full construct has completed, per: Run-length encoding compresses by replacing runs with char+count.

Common Use Cases:
• Teaching this behavior using the mental model: Run-length encoding compresses by replacing runs with char+count.
• Debugging when the observed value should match the expectation in: Note i is shared between loops — the inner loop advances i, so the outer loop resumes at the next different character.

Edge Cases:
• If inputs vary from the situation described in: The outer loop picks the current character, the inner loop counts how many consecutive copies exist while advancing i., the behavior can change.
• When the construct’s assumptions differ, the rule in: 'aaa'→a3, 'bb'→b2, 'c'→c1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Note i is shared between loops — the inner loop advances i, so the outer loop resumes at the next different character..
• When performance matters, prefer the simplest pattern that still implements: Run-length encoding compresses by replacing runs with char+count..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Run-length encoding compresses by replacing runs with char+count..

Notes:
• For maintainable code, make the intent behind: The outer loop picks the current character, the inner loop counts how many consecutive copies exist while advancing i. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q37: While loop implementing simple parser (matching brackets)
  (_i: number) => ({
    q: `What is depth?\ns = "(()()" \ndepth = 0\ni = 0\nwhile i < len(s):\n    if s[i] == "(":\n        depth += 1\n    else:\n        depth -= 1\n    i += 1\ndepth`,
    o: ["1", "0", "2", "-1"],
    c: 0,
    e: "Tracking opens/closes: +1+1-1+1-1 = 1. One unmatched open bracket.",
    de: `This bracket parser tracks nesting depth: '(' increments, ')' decrements. Walking through "(()()": depth goes 1→2→1→2→1. Final depth=1 means one unmatched opening bracket. If depth were 0, brackets would be balanced. If depth went negative at any point, there would be a closing bracket without a matching opener.

Key Concepts:
• If depth went negative at any point, there would be a closing bracket without a matching opener.

Key Distinctions:
• This question’s focus is best captured by: This bracket parser tracks nesting depth: '(' increments, ')' decrements.
• The contrast that matters for correctness is summarized by: Walking through "(()()": depth goes 1→2→1→2→1.

How It Works:
• Python follows the rule implied by: This bracket parser tracks nesting depth: '(' increments, ')' decrements.
• The outcome you observe follows from: If depth went negative at any point, there would be a closing bracket without a matching opener.

Step-by-Step Execution:
1. Start from the construct described in: This bracket parser tracks nesting depth: '(' increments, ')' decrements.
2. Resolve the subparts implied by: Walking through "(()()": depth goes 1→2→1→2→1.
3. Apply the core semantics highlighted in: Final depth=1 means one unmatched opening bracket.
4. Confirm the final result aligns with: If depth went negative at any point, there would be a closing bracket without a matching opener.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Walking through "(()()": depth goes 1→2→1→2→1.
2. Apply the construct’s main rule next, matching: This bracket parser tracks nesting depth: '(' increments, ')' decrements.
3. Produce any intermediate values that If depth went negative at any point, there would be a closing bracket without a matching opener. relies on
4. Finish by returning/assembling the final output named by: If depth went negative at any point, there would be a closing bracket without a matching opener.
5. Use the result only after the full construct has completed, per: This bracket parser tracks nesting depth: '(' increments, ')' decrements.

Common Use Cases:
• Teaching this behavior using the mental model: This bracket parser tracks nesting depth: '(' increments, ')' decrements.
• Debugging when the observed value should match the expectation in: If depth went negative at any point, there would be a closing bracket without a matching opener.

Edge Cases:
• If inputs vary from the situation described in: Walking through "(()()": depth goes 1→2→1→2→1., the behavior can change.
• When the construct’s assumptions differ, the rule in: Final depth=1 means one unmatched opening bracket. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: If depth went negative at any point, there would be a closing bracket without a matching opener..
• When performance matters, prefer the simplest pattern that still implements: This bracket parser tracks nesting depth: '(' increments, ')' decrements..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This bracket parser tracks nesting depth: '(' increments, ')' decrements..

Notes:
• For maintainable code, make the intent behind: Walking through "(()()": depth goes 1→2→1→2→1. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q38: While loop with deque rotation
  (_i: number) => ({
    q: `What is list(d)?\nfrom collections import deque\nd = deque([1, 2, 3, 4, 5])\nsteps = 0\nwhile steps < 2:\n    d.appendleft(d.pop())\n    steps += 1\nlist(d)`,
    o: ["[4, 5, 1, 2, 3]", "[3, 4, 5, 1, 2]", "[5, 1, 2, 3, 4]", "[2, 3, 4, 5, 1]"],
    c: 0,
    e: "Each iteration moves the last element to the front. After 2 steps: [4,5,1,2,3].",
    de: `pop() removes the rightmost element and appendleft() inserts it at the left — a right rotation. Step 1: pop 5, prepend → [5,1,2,3,4]. Step 2: pop 4, prepend → [4,5,1,2,3]. This is equivalent to d.rotate(2). Deque operations are O(1) at both ends, unlike list.insert(0, x) which is O(n).

Key Concepts:
• Deque operations are O(1) at both ends, unlike list.insert(0, x) which is O(n).

Key Distinctions:
• This question’s focus is best captured by: pop() removes the rightmost element and appendleft() inserts it at the left — a right rotation.
• The contrast that matters for correctness is summarized by: Step 1: pop 5, prepend → [5,1,2,3,4].

How It Works:
• Python follows the rule implied by: pop() removes the rightmost element and appendleft() inserts it at the left — a right rotation.
• The outcome you observe follows from: Deque operations are O(1) at both ends, unlike list.insert(0, x) which is O(n).

Step-by-Step Execution:
1. Start from the construct described in: pop() removes the rightmost element and appendleft() inserts it at the left — a right rotation.
2. Resolve the subparts implied by: Step 1: pop 5, prepend → [5,1,2,3,4].
3. Apply the core semantics highlighted in: Step 2: pop 4, prepend → [4,5,1,2,3].
4. Confirm the final result aligns with: Deque operations are O(1) at both ends, unlike list.insert(0, x) which is O(n).

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Step 1: pop 5, prepend → [5,1,2,3,4].
2. Apply the construct’s main rule next, matching: pop() removes the rightmost element and appendleft() inserts it at the left — a right rotation.
3. Produce any intermediate values that Deque operations are O(1) at both ends, unlike list.insert(0, x) which is O(n). relies on
4. Finish by returning/assembling the final output named by: Deque operations are O(1) at both ends, unlike list.insert(0, x) which is O(n).
5. Use the result only after the full construct has completed, per: pop() removes the rightmost element and appendleft() inserts it at the left — a right rotation.

Common Use Cases:
• Teaching this behavior using the mental model: pop() removes the rightmost element and appendleft() inserts it at the left — a right rotation.
• Debugging when the observed value should match the expectation in: Deque operations are O(1) at both ends, unlike list.insert(0, x) which is O(n).

Edge Cases:
• If inputs vary from the situation described in: Step 1: pop 5, prepend → [5,1,2,3,4]., the behavior can change.
• When the construct’s assumptions differ, the rule in: Step 2: pop 4, prepend → [4,5,1,2,3]. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Deque operations are O(1) at both ends, unlike list.insert(0, x) which is O(n)..
• When performance matters, prefer the simplest pattern that still implements: pop() removes the rightmost element and appendleft() inserts it at the left — a right rotation..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: pop() removes the rightmost element and appendleft() inserts it at the left — a right rotation..

Notes:
• For maintainable code, make the intent behind: Step 1: pop 5, prepend → [5,1,2,3,4]. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q39: While loop implementing insertion sort step
  (_i: number) => ({
    q: `What is arr?\narr = [3, 1, 4, 1, 5]\nkey = arr[1]\nj = 0\nwhile j >= 0 and arr[j] > key:\n    arr[j + 1] = arr[j]\n    j -= 1\narr[j + 1] = key\narr`,
    o: ["[1, 3, 4, 1, 5]", "[1, 1, 3, 4, 5]", "[3, 1, 4, 1, 5]", "Error"],
    c: 0,
    e: "key=1, arr[0]=3>1 so shift right, then insert key at position 0.",
    de: `This is one step of insertion sort: inserting arr[1] into its correct position among sorted elements to the left. key=1, j=0: arr[0]=3 > 1, so shift 3 right (arr[1]=3), j=-1. Loop exits (j<0). arr[j+1]=arr[0]=key=1. Result: [1,3,4,1,5]. Only the first two elements are now sorted — full insertion sort repeats this for each position.

Key Concepts:
• Only the first two elements are now sorted — full insertion sort repeats this for each position.

Key Distinctions:
• This question’s focus is best captured by: This is one step of insertion sort: inserting arr[1] into its correct position among sorted elements to the left.
• The contrast that matters for correctness is summarized by: key=1, j=0: arr[0]=3 > 1, so shift 3 right (arr[1]=3), j=-1.

How It Works:
• Python follows the rule implied by: This is one step of insertion sort: inserting arr[1] into its correct position among sorted elements to the left.
• The outcome you observe follows from: Only the first two elements are now sorted — full insertion sort repeats this for each position.

Step-by-Step Execution:
1. Start from the construct described in: This is one step of insertion sort: inserting arr[1] into its correct position among sorted elements to the left.
2. Resolve the subparts implied by: key=1, j=0: arr[0]=3 > 1, so shift 3 right (arr[1]=3), j=-1.
3. Apply the core semantics highlighted in: Loop exits (j<0).
4. Confirm the final result aligns with: Only the first two elements are now sorted — full insertion sort repeats this for each position.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: key=1, j=0: arr[0]=3 > 1, so shift 3 right (arr[1]=3), j=-1.
2. Apply the construct’s main rule next, matching: This is one step of insertion sort: inserting arr[1] into its correct position among sorted elements to the left.
3. Produce any intermediate values that Only the first two elements are now sorted — full insertion sort repeats this for each position. relies on
4. Finish by returning/assembling the final output named by: Only the first two elements are now sorted — full insertion sort repeats this for each position.
5. Use the result only after the full construct has completed, per: This is one step of insertion sort: inserting arr[1] into its correct position among sorted elements to the left.

Common Use Cases:
• Teaching this behavior using the mental model: This is one step of insertion sort: inserting arr[1] into its correct position among sorted elements to the left.
• Debugging when the observed value should match the expectation in: Only the first two elements are now sorted — full insertion sort repeats this for each position.

Edge Cases:
• If inputs vary from the situation described in: key=1, j=0: arr[0]=3 > 1, so shift 3 right (arr[1]=3), j=-1., the behavior can change.
• When the construct’s assumptions differ, the rule in: Loop exits (j<0). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Only the first two elements are now sorted — full insertion sort repeats this for each position..
• When performance matters, prefer the simplest pattern that still implements: This is one step of insertion sort: inserting arr[1] into its correct position among sorted elements to the left..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This is one step of insertion sort: inserting arr[1] into its correct position among sorted elements to the left..

Notes:
• For maintainable code, make the intent behind: key=1, j=0: arr[0]=3 > 1, so shift 3 right (arr[1]=3), j=-1. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q40: While loop implementing selection of minimum
  (_i: number) => ({
    q: `What is min_idx?\nnums = [5, 2, 8, 1, 9]\nmin_idx = 0\ni = 1\nwhile i < len(nums):\n    if nums[i] < nums[min_idx]:\n        min_idx = i\n    i += 1\nmin_idx`,
    o: ["3", "1", "0", "4"],
    c: 0,
    e: "Scanning for minimum: 5, then 2<5 (idx 1), then 1<2 (idx 3). Min is at index 3.",
    de: `Selection sort's inner loop finds the index of the minimum element. Starting with min_idx=0 (value 5): i=1, 2<5 → min_idx=1. i=2, 8<2? No. i=3, 1<2 → min_idx=3. i=4, 9<1? No. The minimum value 1 is at index 3. Selection sort would then swap nums[0] with nums[3]. This linear scan is O(n).

Key Concepts:
• This linear scan is O(n).

Key Distinctions:
• This question’s focus is best captured by: Selection sort's inner loop finds the index of the minimum element.
• The contrast that matters for correctness is summarized by: Starting with min_idx=0 (value 5): i=1, 2<5 → min_idx=1.

How It Works:
• Python follows the rule implied by: Selection sort's inner loop finds the index of the minimum element.
• The outcome you observe follows from: This linear scan is O(n).

Step-by-Step Execution:
1. Start from the construct described in: Selection sort's inner loop finds the index of the minimum element.
2. Resolve the subparts implied by: Starting with min_idx=0 (value 5): i=1, 2<5 → min_idx=1.
3. Apply the core semantics highlighted in: i=2, 8<2?
4. Confirm the final result aligns with: This linear scan is O(n).

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Starting with min_idx=0 (value 5): i=1, 2<5 → min_idx=1.
2. Apply the construct’s main rule next, matching: Selection sort's inner loop finds the index of the minimum element.
3. Produce any intermediate values that This linear scan is O(n). relies on
4. Finish by returning/assembling the final output named by: This linear scan is O(n).
5. Use the result only after the full construct has completed, per: Selection sort's inner loop finds the index of the minimum element.

Common Use Cases:
• Teaching this behavior using the mental model: Selection sort's inner loop finds the index of the minimum element.
• Debugging when the observed value should match the expectation in: This linear scan is O(n).

Edge Cases:
• If inputs vary from the situation described in: Starting with min_idx=0 (value 5): i=1, 2<5 → min_idx=1., the behavior can change.
• When the construct’s assumptions differ, the rule in: i=2, 8<2? is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This linear scan is O(n)..
• When performance matters, prefer the simplest pattern that still implements: Selection sort's inner loop finds the index of the minimum element..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Selection sort's inner loop finds the index of the minimum element..

Notes:
• For maintainable code, make the intent behind: Starting with min_idx=0 (value 5): i=1, 2<5 → min_idx=1. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q41: While loop with timeout simulation (max iterations)
  (_i: number) => ({
    q: `What is (x, count)?\nx = 256\ncount = 0\nmax_iter = 20\nwhile x != 1 and count < max_iter:\n    if x % 2 == 0:\n        x //= 2\n    else:\n        x = 3 * x + 1\n    count += 1\n(x, count)`,
    o: ["(1, 8)", "(1, 20)", "(2, 7)", "(128, 1)"],
    c: 0,
    e: "256 is 2⁸, so halving 8 times reaches 1. The max_iter guard isn't triggered.",
    de: `This implements the Collatz sequence with a safety limit. Since 256=2⁸, only the even branch fires: 256→128→64→32→16→8→4→2→1, taking exactly 8 steps. The max_iter=20 guard prevents infinite loops for sequences that might not converge (the Collatz conjecture is unproven). With x=1, the condition x!=1 becomes False and the loop exits cleanly.

Key Concepts:
• With x=1, the condition x!=1 becomes False and the loop exits cleanly.

Key Distinctions:
• This question’s focus is best captured by: This implements the Collatz sequence with a safety limit.
• The contrast that matters for correctness is summarized by: Since 256=2⁸, only the even branch fires: 256→128→64→32→16→8→4→2→1, taking exactly 8 steps.

How It Works:
• Python follows the rule implied by: This implements the Collatz sequence with a safety limit.
• The outcome you observe follows from: With x=1, the condition x!=1 becomes False and the loop exits cleanly.

Step-by-Step Execution:
1. Start from the construct described in: This implements the Collatz sequence with a safety limit.
2. Resolve the subparts implied by: Since 256=2⁸, only the even branch fires: 256→128→64→32→16→8→4→2→1, taking exactly 8 steps.
3. Apply the core semantics highlighted in: The max_iter=20 guard prevents infinite loops for sequences that might not converge (the Collatz conjecture is unproven).
4. Confirm the final result aligns with: With x=1, the condition x!=1 becomes False and the loop exits cleanly.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Since 256=2⁸, only the even branch fires: 256→128→64→32→16→8→4→2→1, taking exactly 8 steps.
2. Apply the construct’s main rule next, matching: This implements the Collatz sequence with a safety limit.
3. Produce any intermediate values that With x=1, the condition x!=1 becomes False and the loop exits cleanly. relies on
4. Finish by returning/assembling the final output named by: With x=1, the condition x!=1 becomes False and the loop exits cleanly.
5. Use the result only after the full construct has completed, per: This implements the Collatz sequence with a safety limit.

Common Use Cases:
• Teaching this behavior using the mental model: This implements the Collatz sequence with a safety limit.
• Debugging when the observed value should match the expectation in: With x=1, the condition x!=1 becomes False and the loop exits cleanly.

Edge Cases:
• If inputs vary from the situation described in: Since 256=2⁸, only the even branch fires: 256→128→64→32→16→8→4→2→1, taking exactly 8 steps., the behavior can change.
• When the construct’s assumptions differ, the rule in: The max_iter=20 guard prevents infinite loops for sequences that might not converge (the Collatz conjecture is unproven). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: With x=1, the condition x!=1 becomes False and the loop exits cleanly..
• When performance matters, prefer the simplest pattern that still implements: This implements the Collatz sequence with a safety limit..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This implements the Collatz sequence with a safety limit..

Notes:
• For maintainable code, make the intent behind: Since 256=2⁸, only the even branch fires: 256→128→64→32→16→8→4→2→1, taking exactly 8 steps. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q42: While loop implementing string compression
  (_i: number) => ({
    q: `What is result?\ns = "aabcccdd"\nresult = ""\ni = 0\nwhile i < len(s):\n    j = i\n    while j < len(s) and s[j] == s[i]:\n        j += 1\n    count = j - i\n    result += s[i] + (str(count) if count > 1 else "")\n    i = j\nresult`,
    o: ['"a2bc3d2"', '"a2b1c3d2"', '"aabcccdd"', '"2a1b3c2d"'],
    c: 0,
    e: "Only appends count when >1: a×2→a2, b×1→b, c×3→c3, d×2→d2.",
    de: `This compression variant only includes the count when a run exceeds length 1 — the standard interview-style string compression. The inner while loop measures each run's length. For 'aa' (count=2): "a2". For 'b' (count=1): just "b" (no number). For 'ccc': "c3". For 'dd': "d2". If the compressed string is longer than the original, real implementations return the original.

Key Concepts:
• If the compressed string is longer than the original, real implementations return the original.

Key Distinctions:
• This question’s focus is best captured by: This compression variant only includes the count when a run exceeds length 1 — the standard interview-style string compression.
• The contrast that matters for correctness is summarized by: The inner while loop measures each run's length.

How It Works:
• Python follows the rule implied by: This compression variant only includes the count when a run exceeds length 1 — the standard interview-style string compression.
• The outcome you observe follows from: If the compressed string is longer than the original, real implementations return the original.

Step-by-Step Execution:
1. Start from the construct described in: This compression variant only includes the count when a run exceeds length 1 — the standard interview-style string compression.
2. Resolve the subparts implied by: The inner while loop measures each run's length.
3. Apply the core semantics highlighted in: For 'aa' (count=2): "a2".
4. Confirm the final result aligns with: If the compressed string is longer than the original, real implementations return the original.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The inner while loop measures each run's length.
2. Apply the construct’s main rule next, matching: This compression variant only includes the count when a run exceeds length 1 — the standard interview-style string compression.
3. Produce any intermediate values that If the compressed string is longer than the original, real implementations return the original. relies on
4. Finish by returning/assembling the final output named by: If the compressed string is longer than the original, real implementations return the original.
5. Use the result only after the full construct has completed, per: This compression variant only includes the count when a run exceeds length 1 — the standard interview-style string compression.

Common Use Cases:
• Teaching this behavior using the mental model: This compression variant only includes the count when a run exceeds length 1 — the standard interview-style string compression.
• Debugging when the observed value should match the expectation in: If the compressed string is longer than the original, real implementations return the original.

Edge Cases:
• If inputs vary from the situation described in: The inner while loop measures each run's length., the behavior can change.
• When the construct’s assumptions differ, the rule in: For 'aa' (count=2): "a2". is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: If the compressed string is longer than the original, real implementations return the original..
• When performance matters, prefer the simplest pattern that still implements: This compression variant only includes the count when a run exceeds length 1 — the standard interview-style string compression..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This compression variant only includes the count when a run exceeds length 1 — the standard interview-style string compression..

Notes:
• For maintainable code, make the intent behind: The inner while loop measures each run's length. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q43: While loop removing consecutive duplicates
  (_i: number) => ({
    q: `What is result?\ns = "aabbccaab"\nresult = ""\ni = 0\nwhile i < len(s):\n    if i == 0 or s[i] != s[i-1]:\n        result += s[i]\n    i += 1\nresult`,
    o: ['"abcab"', '"abc"', '"aabbccaab"', '"abca"'],
    c: 0,
    e: "Keeps only the first of each consecutive run: aa→a, bb→b, cc→c, aa→a, b→b.",
    de: `This removes consecutive duplicates by comparing each character with its predecessor. The first character always passes (i==0). After that, only characters different from the previous one are kept. 'aabbccaab' → a(keep), a(dup), b(keep), b(dup), c(keep), c(dup), a(keep), a(dup), b(keep) = "abcab". Note: non-consecutive duplicates like the second 'a' are preserved.

Key Concepts:
• Note: non-consecutive duplicates like the second 'a' are preserved.

Key Distinctions:
• This question’s focus is best captured by: This removes consecutive duplicates by comparing each character with its predecessor.
• The contrast that matters for correctness is summarized by: The first character always passes (i==0).

How It Works:
• Python follows the rule implied by: This removes consecutive duplicates by comparing each character with its predecessor.
• The outcome you observe follows from: Note: non-consecutive duplicates like the second 'a' are preserved.

Step-by-Step Execution:
1. Start from the construct described in: This removes consecutive duplicates by comparing each character with its predecessor.
2. Resolve the subparts implied by: The first character always passes (i==0).
3. Apply the core semantics highlighted in: After that, only characters different from the previous one are kept.
4. Confirm the final result aligns with: Note: non-consecutive duplicates like the second 'a' are preserved.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The first character always passes (i==0).
2. Apply the construct’s main rule next, matching: This removes consecutive duplicates by comparing each character with its predecessor.
3. Produce any intermediate values that Note: non-consecutive duplicates like the second 'a' are preserved. relies on
4. Finish by returning/assembling the final output named by: Note: non-consecutive duplicates like the second 'a' are preserved.
5. Use the result only after the full construct has completed, per: This removes consecutive duplicates by comparing each character with its predecessor.

Common Use Cases:
• Teaching this behavior using the mental model: This removes consecutive duplicates by comparing each character with its predecessor.
• Debugging when the observed value should match the expectation in: Note: non-consecutive duplicates like the second 'a' are preserved.

Edge Cases:
• If inputs vary from the situation described in: The first character always passes (i==0)., the behavior can change.
• When the construct’s assumptions differ, the rule in: After that, only characters different from the previous one are kept. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Note: non-consecutive duplicates like the second 'a' are preserved..
• When performance matters, prefer the simplest pattern that still implements: This removes consecutive duplicates by comparing each character with its predecessor..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This removes consecutive duplicates by comparing each character with its predecessor..

Notes:
• For maintainable code, make the intent behind: The first character always passes (i==0). explicit (and test it with inputs like those in this prompt).`
  }),
  // Q44: While loop implementing prime check
  (_i: number) => ({
    q: `What is is_prime?\nn = 29\nis_prime = n > 1\nd = 2\nwhile d * d <= n:\n    if n % d == 0:\n        is_prime = False\n        break\n    d += 1\nis_prime`,
    o: ["True", "False", "29", "Error"],
    c: 0,
    e: "29 is not divisible by 2, 3, 4, or 5. Since 6²=36>29, the loop ends. Prime!",
    de: `Trial division checks divisors up to √n. For n=29: d=2 (29%2≠0), d=3 (29%3≠0), d=4 (29%4≠0), d=5 (29%5≠0). At d=6, 36>29 so the loop exits without finding a factor. The d*d<=n optimization avoids computing sqrt — if n=a×b and a≤b, then a≤√n. This reduces the check from O(n) to O(√n) divisors.

Key Concepts:
• This reduces the check from O(n) to O(√n) divisors.

Key Distinctions:
• This question’s focus is best captured by: Trial division checks divisors up to √n.
• The contrast that matters for correctness is summarized by: For n=29: d=2 (29%2≠0), d=3 (29%3≠0), d=4 (29%4≠0), d=5 (29%5≠0).

How It Works:
• Python follows the rule implied by: Trial division checks divisors up to √n.
• The outcome you observe follows from: This reduces the check from O(n) to O(√n) divisors.

Step-by-Step Execution:
1. Start from the construct described in: Trial division checks divisors up to √n.
2. Resolve the subparts implied by: For n=29: d=2 (29%2≠0), d=3 (29%3≠0), d=4 (29%4≠0), d=5 (29%5≠0).
3. Apply the core semantics highlighted in: At d=6, 36>29 so the loop exits without finding a factor.
4. Confirm the final result aligns with: This reduces the check from O(n) to O(√n) divisors.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: For n=29: d=2 (29%2≠0), d=3 (29%3≠0), d=4 (29%4≠0), d=5 (29%5≠0).
2. Apply the construct’s main rule next, matching: Trial division checks divisors up to √n.
3. Produce any intermediate values that This reduces the check from O(n) to O(√n) divisors. relies on
4. Finish by returning/assembling the final output named by: This reduces the check from O(n) to O(√n) divisors.
5. Use the result only after the full construct has completed, per: Trial division checks divisors up to √n.

Common Use Cases:
• Teaching this behavior using the mental model: Trial division checks divisors up to √n.
• Debugging when the observed value should match the expectation in: This reduces the check from O(n) to O(√n) divisors.

Edge Cases:
• If inputs vary from the situation described in: For n=29: d=2 (29%2≠0), d=3 (29%3≠0), d=4 (29%4≠0), d=5 (29%5≠0)., the behavior can change.
• When the construct’s assumptions differ, the rule in: At d=6, 36>29 so the loop exits without finding a factor. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This reduces the check from O(n) to O(√n) divisors..
• When performance matters, prefer the simplest pattern that still implements: Trial division checks divisors up to √n..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Trial division checks divisors up to √n..

Notes:
• For maintainable code, make the intent behind: For n=29: d=2 (29%2≠0), d=3 (29%3≠0), d=4 (29%4≠0), d=5 (29%5≠0). explicit (and test it with inputs like those in this prompt).`
  }),
  // Q45: While loop implementing Sieve idea (marking composites)
  (_i: number) => ({
    q: `What is sum(sieve)?\nn = 20\nsieve = [True] * (n + 1)\nsieve[0] = sieve[1] = False\np = 2\nwhile p * p <= n:\n    if sieve[p]:\n        m = p * p\n        while m <= n:\n            sieve[m] = False\n            m += p\n    p += 1\nsum(sieve)`,
    o: ["8", "9", "10", "20"],
    c: 0,
    e: "Primes up to 20: 2, 3, 5, 7, 11, 13, 17, 19 — eight primes.",
    de: `The Sieve of Eratosthenes marks composite numbers as False. Starting from p=2, it marks multiples of each prime (starting at p²) as composite. p=2 marks 4,6,8,...,20. p=3 marks 9,12,15,18. p=4 is already False (skipped). p=5: 25>20, loop ends. The remaining True positions are primes: {2,3,5,7,11,13,17,19}. sum(sieve) counts True values = 8.

Key Concepts:
• sum(sieve) counts True values = 8.

Key Distinctions:
• This question’s focus is best captured by: The Sieve of Eratosthenes marks composite numbers as False.
• The contrast that matters for correctness is summarized by: Starting from p=2, it marks multiples of each prime (starting at p²) as composite.

How It Works:
• Python follows the rule implied by: The Sieve of Eratosthenes marks composite numbers as False.
• The outcome you observe follows from: sum(sieve) counts True values = 8.

Step-by-Step Execution:
1. Start from the construct described in: The Sieve of Eratosthenes marks composite numbers as False.
2. Resolve the subparts implied by: Starting from p=2, it marks multiples of each prime (starting at p²) as composite.
3. Apply the core semantics highlighted in: p=2 marks 4,6,8,...,20.
4. Confirm the final result aligns with: sum(sieve) counts True values = 8.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Starting from p=2, it marks multiples of each prime (starting at p²) as composite.
2. Apply the construct’s main rule next, matching: The Sieve of Eratosthenes marks composite numbers as False.
3. Produce any intermediate values that sum(sieve) counts True values = 8. relies on
4. Finish by returning/assembling the final output named by: sum(sieve) counts True values = 8.
5. Use the result only after the full construct has completed, per: The Sieve of Eratosthenes marks composite numbers as False.

Common Use Cases:
• Teaching this behavior using the mental model: The Sieve of Eratosthenes marks composite numbers as False.
• Debugging when the observed value should match the expectation in: sum(sieve) counts True values = 8.

Edge Cases:
• If inputs vary from the situation described in: Starting from p=2, it marks multiples of each prime (starting at p²) as composite., the behavior can change.
• When the construct’s assumptions differ, the rule in: p=2 marks 4,6,8,...,20. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: sum(sieve) counts True values = 8..
• When performance matters, prefer the simplest pattern that still implements: The Sieve of Eratosthenes marks composite numbers as False..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The Sieve of Eratosthenes marks composite numbers as False..

Notes:
• For maintainable code, make the intent behind: Starting from p=2, it marks multiples of each prime (starting at p²) as composite. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q46: While loop with enumerate-like counter
  (_i: number) => ({
    q: `What is result?\nitems = ["a", "b", "c", "d"]\nidx = 0\nresult = {}\nwhile idx < len(items):\n    result[idx] = items[idx]\n    idx += 1\nresult`,
    o: ["{0: 'a', 1: 'b', 2: 'c', 3: 'd'}", "{'a': 0, 'b': 1, 'c': 2, 'd': 3}", "['a', 'b', 'c', 'd']", "Error"],
    c: 0,
    e: "Manually pairs index with value: 0→'a', 1→'b', 2→'c', 3→'d'.",
    de: `This while loop manually replicates enumerate() by maintaining an index counter. Each iteration maps the integer index to the list element: {0:'a', 1:'b', 2:'c', 3:'d'}. Note the keys are integers, not the items themselves. The Pythonic equivalent is dict(enumerate(items)). While loops require explicit counter management unlike for+enumerate.

Key Concepts:
• While loops require explicit counter management unlike for+enumerate.

Key Distinctions:
• This question’s focus is best captured by: This while loop manually replicates enumerate() by maintaining an index counter.
• The contrast that matters for correctness is summarized by: Each iteration maps the integer index to the list element: {0:'a', 1:'b', 2:'c', 3:'d'}.

How It Works:
• Python follows the rule implied by: This while loop manually replicates enumerate() by maintaining an index counter.
• The outcome you observe follows from: While loops require explicit counter management unlike for+enumerate.

Step-by-Step Execution:
1. Start from the construct described in: This while loop manually replicates enumerate() by maintaining an index counter.
2. Resolve the subparts implied by: Each iteration maps the integer index to the list element: {0:'a', 1:'b', 2:'c', 3:'d'}.
3. Apply the core semantics highlighted in: Note the keys are integers, not the items themselves.
4. Confirm the final result aligns with: While loops require explicit counter management unlike for+enumerate.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Each iteration maps the integer index to the list element: {0:'a', 1:'b', 2:'c', 3:'d'}.
2. Apply the construct’s main rule next, matching: This while loop manually replicates enumerate() by maintaining an index counter.
3. Produce any intermediate values that While loops require explicit counter management unlike for+enumerate. relies on
4. Finish by returning/assembling the final output named by: While loops require explicit counter management unlike for+enumerate.
5. Use the result only after the full construct has completed, per: This while loop manually replicates enumerate() by maintaining an index counter.

Common Use Cases:
• Teaching this behavior using the mental model: This while loop manually replicates enumerate() by maintaining an index counter.
• Debugging when the observed value should match the expectation in: While loops require explicit counter management unlike for+enumerate.

Edge Cases:
• If inputs vary from the situation described in: Each iteration maps the integer index to the list element: {0:'a', 1:'b', 2:'c', 3:'d'}., the behavior can change.
• When the construct’s assumptions differ, the rule in: Note the keys are integers, not the items themselves. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: While loops require explicit counter management unlike for+enumerate..
• When performance matters, prefer the simplest pattern that still implements: This while loop manually replicates enumerate() by maintaining an index counter..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This while loop manually replicates enumerate() by maintaining an index counter..

Notes:
• For maintainable code, make the intent behind: Each iteration maps the integer index to the list element: {0:'a', 1:'b', 2:'c', 3:'d'}. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q47: While loop over iterator with next() and StopIteration
  (_i: number) => ({
    q: `What is total?\nit = iter([10, 20, 30])\ntotal = 0\nwhile True:\n    try:\n        total += next(it)\n    except StopIteration:\n        break\ntotal`,
    o: ["60", "30", "10", "Error"],
    c: 0,
    e: "next() yields 10, 20, 30 then raises StopIteration → break. Total = 60.",
    de: `This is the manual iteration protocol that for loops use internally. iter() creates an iterator, next() retrieves elements one at a time. After exhausting all elements, next() raises StopIteration which is caught to break. 10+20+30=60. This while-True-try-next-except pattern is equivalent to 'for x in [10,20,30]: total += x' and reveals how Python iteration works under the hood.

Key Concepts:
• This while-True-try-next-except pattern is equivalent to 'for x in [10,20,30]: total += x' and reveals how Python iteration works under the hood.

Key Distinctions:
• This question’s focus is best captured by: This is the manual iteration protocol that for loops use internally.
• The contrast that matters for correctness is summarized by: iter() creates an iterator, next() retrieves elements one at a time.

How It Works:
• Python follows the rule implied by: This is the manual iteration protocol that for loops use internally.
• The outcome you observe follows from: This while-True-try-next-except pattern is equivalent to 'for x in [10,20,30]: total += x' and reveals how Python iteration works under the hood.

Step-by-Step Execution:
1. Start from the construct described in: This is the manual iteration protocol that for loops use internally.
2. Resolve the subparts implied by: iter() creates an iterator, next() retrieves elements one at a time.
3. Apply the core semantics highlighted in: After exhausting all elements, next() raises StopIteration which is caught to break.
4. Confirm the final result aligns with: This while-True-try-next-except pattern is equivalent to 'for x in [10,20,30]: total += x' and reveals how Python iteration works under the hood.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: iter() creates an iterator, next() retrieves elements one at a time.
2. Apply the construct’s main rule next, matching: This is the manual iteration protocol that for loops use internally.
3. Produce any intermediate values that This while-True-try-next-except pattern is equivalent to 'for x in [10,20,30]: total += x' and reveals how Python iteration works under the hood. relies on
4. Finish by returning/assembling the final output named by: This while-True-try-next-except pattern is equivalent to 'for x in [10,20,30]: total += x' and reveals how Python iteration works under the hood.
5. Use the result only after the full construct has completed, per: This is the manual iteration protocol that for loops use internally.

Common Use Cases:
• Teaching this behavior using the mental model: This is the manual iteration protocol that for loops use internally.
• Debugging when the observed value should match the expectation in: This while-True-try-next-except pattern is equivalent to 'for x in [10,20,30]: total += x' and reveals how Python iteration works under the hood.

Edge Cases:
• If inputs vary from the situation described in: iter() creates an iterator, next() retrieves elements one at a time., the behavior can change.
• When the construct’s assumptions differ, the rule in: After exhausting all elements, next() raises StopIteration which is caught to break. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This while-True-try-next-except pattern is equivalent to 'for x in [10,20,30]: total += x' and reveals how Python iteration works under the hood..
• When performance matters, prefer the simplest pattern that still implements: This is the manual iteration protocol that for loops use internally..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This is the manual iteration protocol that for loops use internally..

Notes:
• For maintainable code, make the intent behind: iter() creates an iterator, next() retrieves elements one at a time. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q48: While loop implementing modular exponentiation
  (_i: number) => ({
    q: `What is result?\nbase, exp, mod = 3, 5, 7\nresult = 1\nwhile exp > 0:\n    if exp % 2 == 1:\n        result = (result * base) % mod\n    base = (base * base) % mod\n    exp //= 2\nresult`,
    o: ["5", "3", "1", "6"],
    c: 0,
    e: "Fast modular exponentiation: 3⁵ mod 7 = 243 mod 7 = 5.",
    de: `Binary exponentiation computes base^exp % mod efficiently by squaring the base and halving the exponent. exp=5(odd): result=3%7=3, base=9%7=2, exp=2. exp=2(even): base=4%7=4, exp=1. exp=1(odd): result=(3*4)%7=12%7=5, base=16%7=2, exp=0. Verify: 3⁵=243, 243%7=5. This O(log n) algorithm is critical for cryptography (RSA).

Key Concepts:
• This O(log n) algorithm is critical for cryptography (RSA).

Key Distinctions:
• This question’s focus is best captured by: Binary exponentiation computes base^exp % mod efficiently by squaring the base and halving the exponent.
• The contrast that matters for correctness is summarized by: exp=5(odd): result=3%7=3, base=9%7=2, exp=2.

How It Works:
• Python follows the rule implied by: Binary exponentiation computes base^exp % mod efficiently by squaring the base and halving the exponent.
• The outcome you observe follows from: This O(log n) algorithm is critical for cryptography (RSA).

Step-by-Step Execution:
1. Start from the construct described in: Binary exponentiation computes base^exp % mod efficiently by squaring the base and halving the exponent.
2. Resolve the subparts implied by: exp=5(odd): result=3%7=3, base=9%7=2, exp=2.
3. Apply the core semantics highlighted in: exp=2(even): base=4%7=4, exp=1.
4. Confirm the final result aligns with: This O(log n) algorithm is critical for cryptography (RSA).

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: exp=5(odd): result=3%7=3, base=9%7=2, exp=2.
2. Apply the construct’s main rule next, matching: Binary exponentiation computes base^exp % mod efficiently by squaring the base and halving the exponent.
3. Produce any intermediate values that This O(log n) algorithm is critical for cryptography (RSA). relies on
4. Finish by returning/assembling the final output named by: This O(log n) algorithm is critical for cryptography (RSA).
5. Use the result only after the full construct has completed, per: Binary exponentiation computes base^exp % mod efficiently by squaring the base and halving the exponent.

Common Use Cases:
• Teaching this behavior using the mental model: Binary exponentiation computes base^exp % mod efficiently by squaring the base and halving the exponent.
• Debugging when the observed value should match the expectation in: This O(log n) algorithm is critical for cryptography (RSA).

Edge Cases:
• If inputs vary from the situation described in: exp=5(odd): result=3%7=3, base=9%7=2, exp=2., the behavior can change.
• When the construct’s assumptions differ, the rule in: exp=2(even): base=4%7=4, exp=1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This O(log n) algorithm is critical for cryptography (RSA)..
• When performance matters, prefer the simplest pattern that still implements: Binary exponentiation computes base^exp % mod efficiently by squaring the base and halving the exponent..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Binary exponentiation computes base^exp % mod efficiently by squaring the base and halving the exponent..

Notes:
• For maintainable code, make the intent behind: exp=5(odd): result=3%7=3, base=9%7=2, exp=2. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q49: While loop implementing number base conversion
  (_i: number) => ({
    q: `What is result?\nn = 255\nbase = 16\ndigits = "0123456789ABCDEF"\nresult = ""\nwhile n > 0:\n    result = digits[n % base] + result\n    n //= base\nresult`,
    o: ['"FF"', '"255"', '"1111"', '"15F"'],
    c: 0,
    e: "255 in hex: 255%16=15→'F', 15%16=15→'F'. Prepending gives 'FF'.",
    de: `General base conversion uses the same %base and //base pattern as binary conversion but with an arbitrary base. 255%16=15 → digits[15]='F', n=255//16=15. 15%16=15 → 'F', n=15//16=0. Prepending builds "F"→"FF". Verify: 15×16+15=255=0xFF. This algorithm works for any base by changing the digits string and base value.

Key Concepts:
• This algorithm works for any base by changing the digits string and base value.

Key Distinctions:
• This question’s focus is best captured by: General base conversion uses the same %base and //base pattern as binary conversion but with an arbitrary base.
• The contrast that matters for correctness is summarized by: 255%16=15 → digits[15]='F', n=255//16=15.

How It Works:
• Python follows the rule implied by: General base conversion uses the same %base and //base pattern as binary conversion but with an arbitrary base.
• The outcome you observe follows from: This algorithm works for any base by changing the digits string and base value.

Step-by-Step Execution:
1. Start from the construct described in: General base conversion uses the same %base and //base pattern as binary conversion but with an arbitrary base.
2. Resolve the subparts implied by: 255%16=15 → digits[15]='F', n=255//16=15.
3. Apply the core semantics highlighted in: 15%16=15 → 'F', n=15//16=0.
4. Confirm the final result aligns with: This algorithm works for any base by changing the digits string and base value.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: 255%16=15 → digits[15]='F', n=255//16=15.
2. Apply the construct’s main rule next, matching: General base conversion uses the same %base and //base pattern as binary conversion but with an arbitrary base.
3. Produce any intermediate values that This algorithm works for any base by changing the digits string and base value. relies on
4. Finish by returning/assembling the final output named by: This algorithm works for any base by changing the digits string and base value.
5. Use the result only after the full construct has completed, per: General base conversion uses the same %base and //base pattern as binary conversion but with an arbitrary base.

Common Use Cases:
• Teaching this behavior using the mental model: General base conversion uses the same %base and //base pattern as binary conversion but with an arbitrary base.
• Debugging when the observed value should match the expectation in: This algorithm works for any base by changing the digits string and base value.

Edge Cases:
• If inputs vary from the situation described in: 255%16=15 → digits[15]='F', n=255//16=15., the behavior can change.
• When the construct’s assumptions differ, the rule in: 15%16=15 → 'F', n=15//16=0. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This algorithm works for any base by changing the digits string and base value..
• When performance matters, prefer the simplest pattern that still implements: General base conversion uses the same %base and //base pattern as binary conversion but with an arbitrary base..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: General base conversion uses the same %base and //base pattern as binary conversion but with an arbitrary base..

Notes:
• For maintainable code, make the intent behind: 255%16=15 → digits[15]='F', n=255//16=15. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q50: While loop processing command queue
  (_i: number) => ({
    q: `What is stack?\nqueue = ["push 5", "push 3", "pop", "push 7"]\nstack = []\ni = 0\nwhile i < len(queue):\n    cmd = queue[i].split()\n    if cmd[0] == "push":\n        stack.append(int(cmd[1]))\n    elif cmd[0] == "pop":\n        stack.pop()\n    i += 1\nstack`,
    o: ["[5, 7]", "[5, 3, 7]", "[7]", "[3, 7]"],
    c: 0,
    e: "push 5→[5], push 3→[5,3], pop→[5], push 7→[5,7].",
    de: `This simulates a stack-based command processor. Each string command is split into parts: cmd[0] is the operation, cmd[1] (if present) is the argument. The sequence: push 5 → [5], push 3 → [5,3], pop removes 3 → [5], push 7 → [5,7]. This pattern is used in interpreters, undo systems, and calculator implementations where commands arrive as text.

Key Concepts:
• This pattern is used in interpreters, undo systems, and calculator implementations where commands arrive as text.

Key Distinctions:
• This question’s focus is best captured by: This simulates a stack-based command processor.
• The contrast that matters for correctness is summarized by: Each string command is split into parts: cmd[0] is the operation, cmd[1] (if present) is the argument.

How It Works:
• Python follows the rule implied by: This simulates a stack-based command processor.
• The outcome you observe follows from: This pattern is used in interpreters, undo systems, and calculator implementations where commands arrive as text.

Step-by-Step Execution:
1. Start from the construct described in: This simulates a stack-based command processor.
2. Resolve the subparts implied by: Each string command is split into parts: cmd[0] is the operation, cmd[1] (if present) is the argument.
3. Apply the core semantics highlighted in: The sequence: push 5 → [5], push 3 → [5,3], pop removes 3 → [5], push 7 → [5,7].
4. Confirm the final result aligns with: This pattern is used in interpreters, undo systems, and calculator implementations where commands arrive as text.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Each string command is split into parts: cmd[0] is the operation, cmd[1] (if present) is the argument.
2. Apply the construct’s main rule next, matching: This simulates a stack-based command processor.
3. Produce any intermediate values that This pattern is used in interpreters, undo systems, and calculator implementations where commands arrive as text. relies on
4. Finish by returning/assembling the final output named by: This pattern is used in interpreters, undo systems, and calculator implementations where commands arrive as text.
5. Use the result only after the full construct has completed, per: This simulates a stack-based command processor.

Common Use Cases:
• Teaching this behavior using the mental model: This simulates a stack-based command processor.
• Debugging when the observed value should match the expectation in: This pattern is used in interpreters, undo systems, and calculator implementations where commands arrive as text.

Edge Cases:
• If inputs vary from the situation described in: Each string command is split into parts: cmd[0] is the operation, cmd[1] (if present) is the argument., the behavior can change.
• When the construct’s assumptions differ, the rule in: The sequence: push 5 → [5], push 3 → [5,3], pop removes 3 → [5], push 7 → [5,7]. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This pattern is used in interpreters, undo systems, and calculator implementations where commands arrive as text..
• When performance matters, prefer the simplest pattern that still implements: This simulates a stack-based command processor..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This simulates a stack-based command processor..

Notes:
• For maintainable code, make the intent behind: Each string command is split into parts: cmd[0] is the operation, cmd[1] (if present) is the argument. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q51: While loop implementing token scanner
  (_i: number) => ({
    q: `What is tokens?\nexpr = "3+42"\ntokens = []\ni = 0\nwhile i < len(expr):\n    if expr[i].isdigit():\n        num = ""\n        while i < len(expr) and expr[i].isdigit():\n            num += expr[i]\n            i += 1\n        tokens.append(int(num))\n    else:\n        tokens.append(expr[i])\n        i += 1\ntokens`,
    o: ["[3, '+', 42]", "['3', '+', '42']", "[3, '+', 4, 2]", "[345]"],
    c: 0,
    e: "Scanner groups consecutive digits: '3'→3, '+'→'+', '42'→42.",
    de: `A token scanner (lexer) groups characters into meaningful tokens. The inner while loop accumulates consecutive digits into multi-digit numbers. '3' is one digit→int(3). '+' is not a digit→kept as string. '4' and '2' are consecutive digits→grouped as "42"→int(42). Result has mixed types: [3, '+', 42]. This is the first stage of parsing mathematical expressions.

Key Concepts:
• This is the first stage of parsing mathematical expressions.

Key Distinctions:
• This question’s focus is best captured by: A token scanner (lexer) groups characters into meaningful tokens.
• The contrast that matters for correctness is summarized by: The inner while loop accumulates consecutive digits into multi-digit numbers.

How It Works:
• Python follows the rule implied by: A token scanner (lexer) groups characters into meaningful tokens.
• The outcome you observe follows from: This is the first stage of parsing mathematical expressions.

Step-by-Step Execution:
1. Start from the construct described in: A token scanner (lexer) groups characters into meaningful tokens.
2. Resolve the subparts implied by: The inner while loop accumulates consecutive digits into multi-digit numbers.
3. Apply the core semantics highlighted in: '3' is one digit→int(3).
4. Confirm the final result aligns with: This is the first stage of parsing mathematical expressions.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The inner while loop accumulates consecutive digits into multi-digit numbers.
2. Apply the construct’s main rule next, matching: A token scanner (lexer) groups characters into meaningful tokens.
3. Produce any intermediate values that This is the first stage of parsing mathematical expressions. relies on
4. Finish by returning/assembling the final output named by: This is the first stage of parsing mathematical expressions.
5. Use the result only after the full construct has completed, per: A token scanner (lexer) groups characters into meaningful tokens.

Common Use Cases:
• Teaching this behavior using the mental model: A token scanner (lexer) groups characters into meaningful tokens.
• Debugging when the observed value should match the expectation in: This is the first stage of parsing mathematical expressions.

Edge Cases:
• If inputs vary from the situation described in: The inner while loop accumulates consecutive digits into multi-digit numbers., the behavior can change.
• When the construct’s assumptions differ, the rule in: '3' is one digit→int(3). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This is the first stage of parsing mathematical expressions..
• When performance matters, prefer the simplest pattern that still implements: A token scanner (lexer) groups characters into meaningful tokens..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: A token scanner (lexer) groups characters into meaningful tokens..

Notes:
• For maintainable code, make the intent behind: The inner while loop accumulates consecutive digits into multi-digit numbers. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q52: While loop with nested while loop
  (_i: number) => ({
    q: `What is result?\ni = 1\nresult = []\nwhile i <= 3:\n    j = 1\n    row = []\n    while j <= i:\n        row.append(i * j)\n        j += 1\n    result.append(row)\n    i += 1\nresult`,
    o: ["[[1], [2, 4], [3, 6, 9]]", "[[1, 2, 3], [2, 4, 6]]", "[[1], [1, 2], [1, 2, 3]]", "[[1, 1], [2, 4], [3, 9]]"],
    c: 0,
    e: "Nested loops build a triangular multiplication table: row i has products i×1 through i×i.",
    de: `The outer while loop controls rows (i=1,2,3) and the inner loop generates columns (j=1 to i). Row 1: 1×1=[1]. Row 2: 2×1=2, 2×2=4→[2,4]. Row 3: 3×1=3, 3×2=6, 3×3=9→[3,6,9]. Each row grows longer, forming a triangle. This is a partial multiplication table. Nested while loops require careful manual counter management (j is reset to 1 each outer iteration).

Key Concepts:
• Nested while loops require careful manual counter management (j is reset to 1 each outer iteration).

Key Distinctions:
• This question’s focus is best captured by: The outer while loop controls rows (i=1,2,3) and the inner loop generates columns (j=1 to i).
• The contrast that matters for correctness is summarized by: Row 1: 1×1=[1].

How It Works:
• Python follows the rule implied by: The outer while loop controls rows (i=1,2,3) and the inner loop generates columns (j=1 to i).
• The outcome you observe follows from: Nested while loops require careful manual counter management (j is reset to 1 each outer iteration).

Step-by-Step Execution:
1. Start from the construct described in: The outer while loop controls rows (i=1,2,3) and the inner loop generates columns (j=1 to i).
2. Resolve the subparts implied by: Row 1: 1×1=[1].
3. Apply the core semantics highlighted in: Row 2: 2×1=2, 2×2=4→[2,4].
4. Confirm the final result aligns with: Nested while loops require careful manual counter management (j is reset to 1 each outer iteration).

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Row 1: 1×1=[1].
2. Apply the construct’s main rule next, matching: The outer while loop controls rows (i=1,2,3) and the inner loop generates columns (j=1 to i).
3. Produce any intermediate values that Nested while loops require careful manual counter management (j is reset to 1 each outer iteration). relies on
4. Finish by returning/assembling the final output named by: Nested while loops require careful manual counter management (j is reset to 1 each outer iteration).
5. Use the result only after the full construct has completed, per: The outer while loop controls rows (i=1,2,3) and the inner loop generates columns (j=1 to i).

Common Use Cases:
• Teaching this behavior using the mental model: The outer while loop controls rows (i=1,2,3) and the inner loop generates columns (j=1 to i).
• Debugging when the observed value should match the expectation in: Nested while loops require careful manual counter management (j is reset to 1 each outer iteration).

Edge Cases:
• If inputs vary from the situation described in: Row 1: 1×1=[1]., the behavior can change.
• When the construct’s assumptions differ, the rule in: Row 2: 2×1=2, 2×2=4→[2,4]. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Nested while loops require careful manual counter management (j is reset to 1 each outer iteration)..
• When performance matters, prefer the simplest pattern that still implements: The outer while loop controls rows (i=1,2,3) and the inner loop generates columns (j=1 to i)..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The outer while loop controls rows (i=1,2,3) and the inner loop generates columns (j=1 to i)..

Notes:
• For maintainable code, make the intent behind: Row 1: 1×1=[1]. explicit (and test it with inputs like those in this prompt).`
  }),
];
