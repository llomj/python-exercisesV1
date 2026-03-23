// --- LEVEL 4 EXPERT: WHILE-LOOP MASTERY BATCH 4 - 26 QUESTIONS (79-104) ---
// Covers: Fibonacci, continue patterns, atoi/itoa, powers of 2, Dutch flag,
// LCM/GCD, hashing, postfix eval, pattern matching, coin change, generators

export const level4WhileBatch4 = [
  // Q79: Fibonacci via tuple swap
  (_i: number) => ({
    q: `What is a?\na, b = 0, 1\ni = 0\nwhile i < 5:\n    a, b = b, a + b\n    i += 1\na`,
    o: ["5", "8", "3", "13"],
    c: 0,
    e: "Tuple swap generates Fibonacci: (0,1)→(1,1)→(1,2)→(2,3)→(3,5)→(5,8). After 5 iterations a=5.",
    de: `Python's tuple swap a, b = b, a+b evaluates the right side fully before assigning. This generates the Fibonacci sequence: starting from (0,1), each step sets a to the old b and b to the old a+b. After 5 iterations: (1,1)→(1,2)→(2,3)→(3,5)→(5,8). The variable a holds 5, which is the 5th Fibonacci number (0-indexed).

Key Concepts:
• The variable a holds 5, which is the 5th Fibonacci number (0-indexed).

Key Distinctions:
• This question’s focus is best captured by: Python's tuple swap a, b = b, a+b evaluates the right side fully before assigning.
• The contrast that matters for correctness is summarized by: This generates the Fibonacci sequence: starting from (0,1), each step sets a to the old b and b to the old a+b.

How It Works:
• Python follows the rule implied by: Python's tuple swap a, b = b, a+b evaluates the right side fully before assigning.
• The outcome you observe follows from: The variable a holds 5, which is the 5th Fibonacci number (0-indexed).

Step-by-Step Execution:
1. Start from the construct described in: Python's tuple swap a, b = b, a+b evaluates the right side fully before assigning.
2. Resolve the subparts implied by: This generates the Fibonacci sequence: starting from (0,1), each step sets a to the old b and b to the old a+b.
3. Apply the core semantics highlighted in: After 5 iterations: (1,1)→(1,2)→(2,3)→(3,5)→(5,8).
4. Confirm the final result aligns with: The variable a holds 5, which is the 5th Fibonacci number (0-indexed).

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: This generates the Fibonacci sequence: starting from (0,1), each step sets a to the old b and b to the old a+b.
2. Apply the construct’s main rule next, matching: Python's tuple swap a, b = b, a+b evaluates the right side fully before assigning.
3. Produce any intermediate values that The variable a holds 5, which is the 5th Fibonacci number (0-indexed). relies on
4. Finish by returning/assembling the final output named by: The variable a holds 5, which is the 5th Fibonacci number (0-indexed).
5. Use the result only after the full construct has completed, per: Python's tuple swap a, b = b, a+b evaluates the right side fully before assigning.

Common Use Cases:
• Teaching this behavior using the mental model: Python's tuple swap a, b = b, a+b evaluates the right side fully before assigning.
• Debugging when the observed value should match the expectation in: The variable a holds 5, which is the 5th Fibonacci number (0-indexed).

Edge Cases:
• If inputs vary from the situation described in: This generates the Fibonacci sequence: starting from (0,1), each step sets a to the old b and b to the old a+b., the behavior can change.
• When the construct’s assumptions differ, the rule in: After 5 iterations: (1,1)→(1,2)→(2,3)→(3,5)→(5,8). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: The variable a holds 5, which is the 5th Fibonacci number (0-indexed)..
• When performance matters, prefer the simplest pattern that still implements: Python's tuple swap a, b = b, a+b evaluates the right side fully before assigning..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Python's tuple swap a, b = b, a+b evaluates the right side fully before assigning..

Notes:
• For maintainable code, make the intent behind: This generates the Fibonacci sequence: starting from (0,1), each step sets a to the old b and b to the old a+b. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q80: continue skipping multiples of 3
  (_i: number) => ({
    q: `What is count?\ni = 0\ncount = 0\nwhile i < 10:\n    i += 1\n    if i % 3 == 0:\n        continue\n    count += 1\ncount`,
    o: ["7", "10", "3", "6"],
    c: 0,
    e: "i goes 1-10. continue skips count for i=3,6,9. count = 10 - 3 = 7.",
    de: `The continue statement skips the rest of the loop body. Here i increments first (1 through 10), then if i is divisible by 3, continue skips count += 1. Values skipped: 3, 6, 9 (three values). Out of 10 iterations, 7 reach count += 1. Note that i += 1 is placed before the continue check to avoid an infinite loop.

Key Concepts:
• Note that i += 1 is placed before the continue check to avoid an infinite loop.

Key Distinctions:
• This question’s focus is best captured by: The continue statement skips the rest of the loop body.
• The contrast that matters for correctness is summarized by: Here i increments first (1 through 10), then if i is divisible by 3, continue skips count += 1.

How It Works:
• Python follows the rule implied by: The continue statement skips the rest of the loop body.
• The outcome you observe follows from: Note that i += 1 is placed before the continue check to avoid an infinite loop.

Step-by-Step Execution:
1. Start from the construct described in: The continue statement skips the rest of the loop body.
2. Resolve the subparts implied by: Here i increments first (1 through 10), then if i is divisible by 3, continue skips count += 1.
3. Apply the core semantics highlighted in: Values skipped: 3, 6, 9 (three values).
4. Confirm the final result aligns with: Note that i += 1 is placed before the continue check to avoid an infinite loop.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Here i increments first (1 through 10), then if i is divisible by 3, continue skips count += 1.
2. Apply the construct’s main rule next, matching: The continue statement skips the rest of the loop body.
3. Produce any intermediate values that Note that i += 1 is placed before the continue check to avoid an infinite loop. relies on
4. Finish by returning/assembling the final output named by: Note that i += 1 is placed before the continue check to avoid an infinite loop.
5. Use the result only after the full construct has completed, per: The continue statement skips the rest of the loop body.

Common Use Cases:
• Teaching this behavior using the mental model: The continue statement skips the rest of the loop body.
• Debugging when the observed value should match the expectation in: Note that i += 1 is placed before the continue check to avoid an infinite loop.

Edge Cases:
• If inputs vary from the situation described in: Here i increments first (1 through 10), then if i is divisible by 3, continue skips count += 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: Values skipped: 3, 6, 9 (three values). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Note that i += 1 is placed before the continue check to avoid an infinite loop..
• When performance matters, prefer the simplest pattern that still implements: The continue statement skips the rest of the loop body..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The continue statement skips the rest of the loop body..

Notes:
• For maintainable code, make the intent behind: Here i increments first (1 through 10), then if i is divisible by 3, continue skips count += 1. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q81: Manual atoi (string to int)
  (_i: number) => ({
    q: `What is result?\ns = "385"\nresult = 0\ni = 0\nwhile i < len(s):\n    result = result * 10 + int(s[i])\n    i += 1\nresult`,
    o: ["385", "16", "38", "Error"],
    c: 0,
    e: "Horner's method: 0→3→38→385. Builds the integer digit by digit.",
    de: `This implements atoi (ASCII to integer) using Horner's method. Each iteration multiplies the accumulator by 10 and adds the next digit: 0*10+3=3, 3*10+8=38, 38*10+5=385. This left-to-right processing avoids computing powers of 10 explicitly. It's the same algorithm Python's int() uses internally for decimal strings.

Key Concepts:
• It's the same algorithm Python's int() uses internally for decimal strings.

Key Distinctions:
• This question’s focus is best captured by: This implements atoi (ASCII to integer) using Horner's method.
• The contrast that matters for correctness is summarized by: Each iteration multiplies the accumulator by 10 and adds the next digit: 0*10+3=3, 3*10+8=38, 38*10+5=385.

How It Works:
• Python follows the rule implied by: This implements atoi (ASCII to integer) using Horner's method.
• The outcome you observe follows from: It's the same algorithm Python's int() uses internally for decimal strings.

Step-by-Step Execution:
1. Start from the construct described in: This implements atoi (ASCII to integer) using Horner's method.
2. Resolve the subparts implied by: Each iteration multiplies the accumulator by 10 and adds the next digit: 0*10+3=3, 3*10+8=38, 38*10+5=385.
3. Apply the core semantics highlighted in: This left-to-right processing avoids computing powers of 10 explicitly.
4. Confirm the final result aligns with: It's the same algorithm Python's int() uses internally for decimal strings.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Each iteration multiplies the accumulator by 10 and adds the next digit: 0*10+3=3, 3*10+8=38, 38*10+5=385.
2. Apply the construct’s main rule next, matching: This implements atoi (ASCII to integer) using Horner's method.
3. Produce any intermediate values that It's the same algorithm Python's int() uses internally for decimal strings. relies on
4. Finish by returning/assembling the final output named by: It's the same algorithm Python's int() uses internally for decimal strings.
5. Use the result only after the full construct has completed, per: This implements atoi (ASCII to integer) using Horner's method.

Common Use Cases:
• Teaching this behavior using the mental model: This implements atoi (ASCII to integer) using Horner's method.
• Debugging when the observed value should match the expectation in: It's the same algorithm Python's int() uses internally for decimal strings.

Edge Cases:
• If inputs vary from the situation described in: Each iteration multiplies the accumulator by 10 and adds the next digit: 0*10+3=3, 3*10+8=38, 38*10+5=385., the behavior can change.
• When the construct’s assumptions differ, the rule in: This left-to-right processing avoids computing powers of 10 explicitly. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: It's the same algorithm Python's int() uses internally for decimal strings..
• When performance matters, prefer the simplest pattern that still implements: This implements atoi (ASCII to integer) using Horner's method..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This implements atoi (ASCII to integer) using Horner's method..

Notes:
• For maintainable code, make the intent behind: Each iteration multiplies the accumulator by 10 and adds the next digit: 0*10+3=3, 3*10+8=38, 38*10+5=385. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q82: Int to string conversion
  (_i: number) => ({
    q: `What is result?\nn = 407\nresult = ""\nwhile n > 0:\n    result = str(n % 10) + result\n    n //= 10\nresult`,
    o: ['"407"', '"704"', '"47"', "Error"],
    c: 0,
    e: "Extracts digits right-to-left and prepends: 7→07→407.",
    de: `This converts an integer to its string representation by extracting digits via modulo and prepending each one. 407%10=7→"7", 40%10=0→"07", 4%10=4→"407". Prepending (str(n%10) + result) reverses the extraction order so digits appear correctly. The zero in 407 is preserved because str(0)="0". Equivalent to str(407).

Key Concepts:
• Equivalent to str(407).

Key Distinctions:
• This question’s focus is best captured by: This converts an integer to its string representation by extracting digits via modulo and prepending each one.
• The contrast that matters for correctness is summarized by: 407%10=7→"7", 40%10=0→"07", 4%10=4→"407".

How It Works:
• Python follows the rule implied by: This converts an integer to its string representation by extracting digits via modulo and prepending each one.
• The outcome you observe follows from: Equivalent to str(407).

Step-by-Step Execution:
1. Start from the construct described in: This converts an integer to its string representation by extracting digits via modulo and prepending each one.
2. Resolve the subparts implied by: 407%10=7→"7", 40%10=0→"07", 4%10=4→"407".
3. Apply the core semantics highlighted in: Prepending (str(n%10) + result) reverses the extraction order so digits appear correctly.
4. Confirm the final result aligns with: Equivalent to str(407).

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: 407%10=7→"7", 40%10=0→"07", 4%10=4→"407".
2. Apply the construct’s main rule next, matching: This converts an integer to its string representation by extracting digits via modulo and prepending each one.
3. Produce any intermediate values that Equivalent to str(407). relies on
4. Finish by returning/assembling the final output named by: Equivalent to str(407).
5. Use the result only after the full construct has completed, per: This converts an integer to its string representation by extracting digits via modulo and prepending each one.

Common Use Cases:
• Teaching this behavior using the mental model: This converts an integer to its string representation by extracting digits via modulo and prepending each one.
• Debugging when the observed value should match the expectation in: Equivalent to str(407).

Edge Cases:
• If inputs vary from the situation described in: 407%10=7→"7", 40%10=0→"07", 4%10=4→"407"., the behavior can change.
• When the construct’s assumptions differ, the rule in: Prepending (str(n%10) + result) reverses the extraction order so digits appear correctly. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Equivalent to str(407)..
• When performance matters, prefer the simplest pattern that still implements: This converts an integer to its string representation by extracting digits via modulo and prepending each one..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This converts an integer to its string representation by extracting digits via modulo and prepending each one..

Notes:
• For maintainable code, make the intent behind: 407%10=7→"7", 40%10=0→"07", 4%10=4→"407". explicit (and test it with inputs like those in this prompt).`
  }),
  // Q83: Largest power of 2 not exceeding n
  (_i: number) => ({
    q: `What is p?\nn = 50\np = 1\nwhile p * 2 <= n:\n    p *= 2\np`,
    o: ["32", "64", "16", "50"],
    c: 0,
    e: "Doubling: 1→2→4→8→16→32. Next would be 64 > 50, so loop stops at p=32.",
    de: `This finds the largest power of 2 that doesn't exceed n. The condition p*2 <= n checks whether doubling would still fit. Sequence: 1→2→4→8→16→32. At p=32, p*2=64 > 50, so the loop exits. This is useful in binary algorithms and memory allocation. Here floor(log₂(50))=5, and 2⁵=32.

Key Concepts:
• Here floor(log₂(50))=5, and 2⁵=32.

Key Distinctions:
• This question’s focus is best captured by: This finds the largest power of 2 that doesn't exceed n.
• The contrast that matters for correctness is summarized by: The condition p*2 <= n checks whether doubling would still fit.

How It Works:
• Python follows the rule implied by: This finds the largest power of 2 that doesn't exceed n.
• The outcome you observe follows from: Here floor(log₂(50))=5, and 2⁵=32.

Step-by-Step Execution:
1. Start from the construct described in: This finds the largest power of 2 that doesn't exceed n.
2. Resolve the subparts implied by: The condition p*2 <= n checks whether doubling would still fit.
3. Apply the core semantics highlighted in: Sequence: 1→2→4→8→16→32.
4. Confirm the final result aligns with: Here floor(log₂(50))=5, and 2⁵=32.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The condition p*2 <= n checks whether doubling would still fit.
2. Apply the construct’s main rule next, matching: This finds the largest power of 2 that doesn't exceed n.
3. Produce any intermediate values that Here floor(log₂(50))=5, and 2⁵=32. relies on
4. Finish by returning/assembling the final output named by: Here floor(log₂(50))=5, and 2⁵=32.
5. Use the result only after the full construct has completed, per: This finds the largest power of 2 that doesn't exceed n.

Common Use Cases:
• Teaching this behavior using the mental model: This finds the largest power of 2 that doesn't exceed n.
• Debugging when the observed value should match the expectation in: Here floor(log₂(50))=5, and 2⁵=32.

Edge Cases:
• If inputs vary from the situation described in: The condition p*2 <= n checks whether doubling would still fit., the behavior can change.
• When the construct’s assumptions differ, the rule in: Sequence: 1→2→4→8→16→32. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Here floor(log₂(50))=5, and 2⁵=32..
• When performance matters, prefer the simplest pattern that still implements: This finds the largest power of 2 that doesn't exceed n..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This finds the largest power of 2 that doesn't exceed n..

Notes:
• For maintainable code, make the intent behind: The condition p*2 <= n checks whether doubling would still fit. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q84: Dutch national flag partition
  (_i: number) => ({
    q: `What is arr?\narr = [2, 0, 1, 2, 0]\nlo, mid, hi = 0, 0, 4\nwhile mid <= hi:\n    if arr[mid] == 0:\n        arr[lo], arr[mid] = arr[mid], arr[lo]\n        lo += 1\n        mid += 1\n    elif arr[mid] == 1:\n        mid += 1\n    else:\n        arr[mid], arr[hi] = arr[hi], arr[mid]\n        hi -= 1\narr`,
    o: ["[0, 0, 1, 2, 2]", "[0, 1, 0, 2, 2]", "[2, 2, 1, 0, 0]", "[0, 0, 2, 1, 2]"],
    c: 0,
    e: "Three-way partition sorts 0s left, 1s middle, 2s right in one pass.",
    de: `The Dutch national flag algorithm uses three pointers: lo (boundary of 0s), mid (current), hi (boundary of 2s). When arr[mid]==0, swap to lo region and advance both; when 2, swap to hi region and shrink hi; when 1, just advance mid. After processing [2,0,1,2,0]: all 0s end up before 1s before 2s in O(n) time. This is the partition step used in 3-way quicksort.

Key Concepts:
• This is the partition step used in 3-way quicksort.

Key Distinctions:
• This question’s focus is best captured by: The Dutch national flag algorithm uses three pointers: lo (boundary of 0s), mid (current), hi (boundary of 2s).
• The contrast that matters for correctness is summarized by: When arr[mid]==0, swap to lo region and advance both; when 2, swap to hi region and shrink hi; when 1, just advance mid.

How It Works:
• Python follows the rule implied by: The Dutch national flag algorithm uses three pointers: lo (boundary of 0s), mid (current), hi (boundary of 2s).
• The outcome you observe follows from: This is the partition step used in 3-way quicksort.

Step-by-Step Execution:
1. Start from the construct described in: The Dutch national flag algorithm uses three pointers: lo (boundary of 0s), mid (current), hi (boundary of 2s).
2. Resolve the subparts implied by: When arr[mid]==0, swap to lo region and advance both; when 2, swap to hi region and shrink hi; when 1, just advance mid.
3. Apply the core semantics highlighted in: After processing [2,0,1,2,0]: all 0s end up before 1s before 2s in O(n) time.
4. Confirm the final result aligns with: This is the partition step used in 3-way quicksort.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: When arr[mid]==0, swap to lo region and advance both; when 2, swap to hi region and shrink hi; when 1, just advance mid.
2. Apply the construct’s main rule next, matching: The Dutch national flag algorithm uses three pointers: lo (boundary of 0s), mid (current), hi (boundary of 2s).
3. Produce any intermediate values that This is the partition step used in 3-way quicksort. relies on
4. Finish by returning/assembling the final output named by: This is the partition step used in 3-way quicksort.
5. Use the result only after the full construct has completed, per: The Dutch national flag algorithm uses three pointers: lo (boundary of 0s), mid (current), hi (boundary of 2s).

Common Use Cases:
• Teaching this behavior using the mental model: The Dutch national flag algorithm uses three pointers: lo (boundary of 0s), mid (current), hi (boundary of 2s).
• Debugging when the observed value should match the expectation in: This is the partition step used in 3-way quicksort.

Edge Cases:
• If inputs vary from the situation described in: When arr[mid]==0, swap to lo region and advance both; when 2, swap to hi region and shrink hi; when 1, just advance mid., the behavior can change.
• When the construct’s assumptions differ, the rule in: After processing [2,0,1,2,0]: all 0s end up before 1s before 2s in O(n) time. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This is the partition step used in 3-way quicksort..
• When performance matters, prefer the simplest pattern that still implements: The Dutch national flag algorithm uses three pointers: lo (boundary of 0s), mid (current), hi (boundary of 2s)..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The Dutch national flag algorithm uses three pointers: lo (boundary of 0s), mid (current), hi (boundary of 2s)..

Notes:
• For maintainable code, make the intent behind: When arr[mid]==0, swap to lo region and advance both; when 2, swap to hi region and shrink hi; when 1, just advance mid. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q85: Augmented assignment operators
  (_i: number) => ({
    q: `What is x?\nx = 2\nx **= 3\nx %= 5\nx *= 7\nx`,
    o: ["21", "56", "3", "8"],
    c: 0,
    e: "Step by step: x=2, x**=3→8, x%=5→3, x*=7→21.",
    de: `Augmented assignments modify a variable in place. x=2: x**=3 computes 2³=8. x%=5 computes 8%5=3 (remainder). x*=7 computes 3×7=21. Each operator (**=, %=, *=) combines an arithmetic operation with assignment. The evaluation order is strictly left-to-right, and changing the sequence changes the result entirely.

Key Concepts:
• The evaluation order is strictly left-to-right, and changing the sequence changes the result entirely.

Key Distinctions:
• This question’s focus is best captured by: Augmented assignments modify a variable in place.
• The contrast that matters for correctness is summarized by: x=2: x**=3 computes 2³=8.

How It Works:
• Python follows the rule implied by: Augmented assignments modify a variable in place.
• The outcome you observe follows from: The evaluation order is strictly left-to-right, and changing the sequence changes the result entirely.

Step-by-Step Execution:
1. Start from the construct described in: Augmented assignments modify a variable in place.
2. Resolve the subparts implied by: x=2: x**=3 computes 2³=8.
3. Apply the core semantics highlighted in: x%=5 computes 8%5=3 (remainder).
4. Confirm the final result aligns with: The evaluation order is strictly left-to-right, and changing the sequence changes the result entirely.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: x=2: x**=3 computes 2³=8.
2. Apply the construct’s main rule next, matching: Augmented assignments modify a variable in place.
3. Produce any intermediate values that The evaluation order is strictly left-to-right, and changing the sequence changes the result entirely. relies on
4. Finish by returning/assembling the final output named by: The evaluation order is strictly left-to-right, and changing the sequence changes the result entirely.
5. Use the result only after the full construct has completed, per: Augmented assignments modify a variable in place.

Common Use Cases:
• Teaching this behavior using the mental model: Augmented assignments modify a variable in place.
• Debugging when the observed value should match the expectation in: The evaluation order is strictly left-to-right, and changing the sequence changes the result entirely.

Edge Cases:
• If inputs vary from the situation described in: x=2: x**=3 computes 2³=8., the behavior can change.
• When the construct’s assumptions differ, the rule in: x%=5 computes 8%5=3 (remainder). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: The evaluation order is strictly left-to-right, and changing the sequence changes the result entirely..
• When performance matters, prefer the simplest pattern that still implements: Augmented assignments modify a variable in place..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Augmented assignments modify a variable in place..

Notes:
• For maintainable code, make the intent behind: x=2: x**=3 computes 2³=8. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q86: LCM via Euclidean GCD
  (_i: number) => ({
    q: `What is lcm?\na, b = 12, 8\nx, y = a, b\nwhile y:\n    x, y = y, x % y\nlcm = a * b // x\nlcm`,
    o: ["24", "96", "48", "4"],
    c: 0,
    e: "GCD(12,8): 12,8→8,4→4,0. GCD=4. LCM = 12×8÷4 = 24.",
    de: `The Euclidean algorithm finds GCD by repeatedly replacing (x,y) with (y, x%y) until y=0. For 12,8: (12,8)→(8,4)→(4,0). GCD=4. The LCM formula is a*b//gcd(a,b) = 12*8//4 = 24. This works because LCM×GCD = a×b for any two positive integers. The while y: idiom leverages Python's truthiness — 0 is falsy, ending the loop.

Key Concepts:
• The while y: idiom leverages Python's truthiness — 0 is falsy, ending the loop.

Key Distinctions:
• This question’s focus is best captured by: The Euclidean algorithm finds GCD by repeatedly replacing (x,y) with (y, x%y) until y=0.
• The contrast that matters for correctness is summarized by: For 12,8: (12,8)→(8,4)→(4,0).

How It Works:
• Python follows the rule implied by: The Euclidean algorithm finds GCD by repeatedly replacing (x,y) with (y, x%y) until y=0.
• The outcome you observe follows from: The while y: idiom leverages Python's truthiness — 0 is falsy, ending the loop.

Step-by-Step Execution:
1. Start from the construct described in: The Euclidean algorithm finds GCD by repeatedly replacing (x,y) with (y, x%y) until y=0.
2. Resolve the subparts implied by: For 12,8: (12,8)→(8,4)→(4,0).
3. Apply the core semantics highlighted in: GCD=4.
4. Confirm the final result aligns with: The while y: idiom leverages Python's truthiness — 0 is falsy, ending the loop.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: For 12,8: (12,8)→(8,4)→(4,0).
2. Apply the construct’s main rule next, matching: The Euclidean algorithm finds GCD by repeatedly replacing (x,y) with (y, x%y) until y=0.
3. Produce any intermediate values that The while y: idiom leverages Python's truthiness — 0 is falsy, ending the loop. relies on
4. Finish by returning/assembling the final output named by: The while y: idiom leverages Python's truthiness — 0 is falsy, ending the loop.
5. Use the result only after the full construct has completed, per: The Euclidean algorithm finds GCD by repeatedly replacing (x,y) with (y, x%y) until y=0.

Common Use Cases:
• Teaching this behavior using the mental model: The Euclidean algorithm finds GCD by repeatedly replacing (x,y) with (y, x%y) until y=0.
• Debugging when the observed value should match the expectation in: The while y: idiom leverages Python's truthiness — 0 is falsy, ending the loop.

Edge Cases:
• If inputs vary from the situation described in: For 12,8: (12,8)→(8,4)→(4,0)., the behavior can change.
• When the construct’s assumptions differ, the rule in: GCD=4. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: The while y: idiom leverages Python's truthiness — 0 is falsy, ending the loop..
• When performance matters, prefer the simplest pattern that still implements: The Euclidean algorithm finds GCD by repeatedly replacing (x,y) with (y, x%y) until y=0..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The Euclidean algorithm finds GCD by repeatedly replacing (x,y) with (y, x%y) until y=0..

Notes:
• For maintainable code, make the intent behind: For 12,8: (12,8)→(8,4)→(4,0). explicit (and test it with inputs like those in this prompt).`
  }),
  // Q87: Digit frequency counter
  (_i: number) => ({
    q: `What is freq?\nn = 112233\nfreq = {}\nwhile n > 0:\n    d = n % 10\n    freq[d] = freq.get(d, 0) + 1\n    n //= 10\nfreq`,
    o: ["{3: 2, 2: 2, 1: 2}", "{1: 1, 2: 1, 3: 1}", "{112233: 1}", "Error"],
    c: 0,
    e: "Extracts digits right-to-left: 3,3,2,2,1,1. Each digit appears twice.",
    de: `This counts digit occurrences using dict.get(key, default). Processing 112233 from right: 3(×1), 3(×2), 2(×1), 2(×2), 1(×1), 1(×2). Dict insertion order reflects processing order: {3:2, 2:2, 1:2}. The get(d, 0) pattern safely handles the first occurrence by defaulting to 0. Equivalent to collections.Counter(str(n)) but with int keys.

Key Concepts:
• Equivalent to collections.Counter(str(n)) but with int keys.

Key Distinctions:
• This question’s focus is best captured by: This counts digit occurrences using dict.get(key, default).
• The contrast that matters for correctness is summarized by: Processing 112233 from right: 3(×1), 3(×2), 2(×1), 2(×2), 1(×1), 1(×2).

How It Works:
• Python follows the rule implied by: This counts digit occurrences using dict.get(key, default).
• The outcome you observe follows from: Equivalent to collections.Counter(str(n)) but with int keys.

Step-by-Step Execution:
1. Start from the construct described in: This counts digit occurrences using dict.get(key, default).
2. Resolve the subparts implied by: Processing 112233 from right: 3(×1), 3(×2), 2(×1), 2(×2), 1(×1), 1(×2).
3. Apply the core semantics highlighted in: Dict insertion order reflects processing order: {3:2, 2:2, 1:2}.
4. Confirm the final result aligns with: Equivalent to collections.Counter(str(n)) but with int keys.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Processing 112233 from right: 3(×1), 3(×2), 2(×1), 2(×2), 1(×1), 1(×2).
2. Apply the construct’s main rule next, matching: This counts digit occurrences using dict.get(key, default).
3. Produce any intermediate values that Equivalent to collections.Counter(str(n)) but with int keys. relies on
4. Finish by returning/assembling the final output named by: Equivalent to collections.Counter(str(n)) but with int keys.
5. Use the result only after the full construct has completed, per: This counts digit occurrences using dict.get(key, default).

Common Use Cases:
• Teaching this behavior using the mental model: This counts digit occurrences using dict.get(key, default).
• Debugging when the observed value should match the expectation in: Equivalent to collections.Counter(str(n)) but with int keys.

Edge Cases:
• If inputs vary from the situation described in: Processing 112233 from right: 3(×1), 3(×2), 2(×1), 2(×2), 1(×1), 1(×2)., the behavior can change.
• When the construct’s assumptions differ, the rule in: Dict insertion order reflects processing order: {3:2, 2:2, 1:2}. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Equivalent to collections.Counter(str(n)) but with int keys..
• When performance matters, prefer the simplest pattern that still implements: This counts digit occurrences using dict.get(key, default)..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This counts digit occurrences using dict.get(key, default)..

Notes:
• For maintainable code, make the intent behind: Processing 112233 from right: 3(×1), 3(×2), 2(×1), 2(×2), 1(×1), 1(×2). explicit (and test it with inputs like those in this prompt).`
  }),
  // Q88: Short-circuit evaluation in while condition
  (_i: number) => ({
    q: `What is i?\nlst = [1, 2, 3, 0, 5]\ni = 0\nwhile i < len(lst) and lst[i] != 0:\n    i += 1\ni`,
    o: ["3", "4", "0", "5"],
    c: 0,
    e: "Scans until finding 0: indices 0(1), 1(2), 2(3) pass, index 3 has 0 → stop. i=3.",
    de: `Short-circuit evaluation means 'and' stops at the first False. The condition i < len(lst) is checked first — if False, lst[i] is never evaluated (preventing IndexError). The loop advances while elements are nonzero: lst[0]=1, lst[1]=2, lst[2]=3 all pass. At i=3, lst[3]=0 fails the !=0 check, so the loop exits with i=3. This is a safe sentinel-search pattern.

Key Concepts:
• This is a safe sentinel-search pattern.

Key Distinctions:
• This question’s focus is best captured by: Short-circuit evaluation means 'and' stops at the first False.
• The contrast that matters for correctness is summarized by: The condition i < len(lst) is checked first — if False, lst[i] is never evaluated (preventing IndexError).

How It Works:
• Python follows the rule implied by: Short-circuit evaluation means 'and' stops at the first False.
• The outcome you observe follows from: This is a safe sentinel-search pattern.

Step-by-Step Execution:
1. Start from the construct described in: Short-circuit evaluation means 'and' stops at the first False.
2. Resolve the subparts implied by: The condition i < len(lst) is checked first — if False, lst[i] is never evaluated (preventing IndexError).
3. Apply the core semantics highlighted in: The loop advances while elements are nonzero: lst[0]=1, lst[1]=2, lst[2]=3 all pass.
4. Confirm the final result aligns with: This is a safe sentinel-search pattern.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The condition i < len(lst) is checked first — if False, lst[i] is never evaluated (preventing IndexError).
2. Apply the construct’s main rule next, matching: Short-circuit evaluation means 'and' stops at the first False.
3. Produce any intermediate values that This is a safe sentinel-search pattern. relies on
4. Finish by returning/assembling the final output named by: This is a safe sentinel-search pattern.
5. Use the result only after the full construct has completed, per: Short-circuit evaluation means 'and' stops at the first False.

Common Use Cases:
• Teaching this behavior using the mental model: Short-circuit evaluation means 'and' stops at the first False.
• Debugging when the observed value should match the expectation in: This is a safe sentinel-search pattern.

Edge Cases:
• If inputs vary from the situation described in: The condition i < len(lst) is checked first — if False, lst[i] is never evaluated (preventing IndexError)., the behavior can change.
• When the construct’s assumptions differ, the rule in: The loop advances while elements are nonzero: lst[0]=1, lst[1]=2, lst[2]=3 all pass. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This is a safe sentinel-search pattern..
• When performance matters, prefer the simplest pattern that still implements: Short-circuit evaluation means 'and' stops at the first False..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Short-circuit evaluation means 'and' stops at the first False..

Notes:
• For maintainable code, make the intent behind: The condition i < len(lst) is checked first — if False, lst[i] is never evaluated (preventing IndexError). explicit (and test it with inputs like those in this prompt).`
  }),
  // Q89: Stack-based postfix evaluation
  (_i: number) => ({
    q: `What is stack?\ntokens = [3, 4, "+", 2, "*"]\nstack = []\ni = 0\nwhile i < len(tokens):\n    t = tokens[i]\n    if isinstance(t, int):\n        stack.append(t)\n    else:\n        b, a = stack.pop(), stack.pop()\n        if t == "+":\n            stack.append(a + b)\n        elif t == "*":\n            stack.append(a * b)\n    i += 1\nstack`,
    o: ["[14]", "[7, 2]", "[3, 4, 2]", "Error"],
    c: 0,
    e: "Push 3, push 4, '+': 3+4=7, push 2, '*': 7×2=14. stack=[14].",
    de: `Postfix (Reverse Polish) notation evaluates without parentheses using a stack. Numbers are pushed; operators pop two operands and push the result. Trace: push 3→[3], push 4→[3,4], '+'→pop 4 and 3, push 7→[7], push 2→[7,2], '*'→pop 2 and 7, push 14→[14]. Note b,a = pop(),pop() ensures correct operand order for non-commutative operations.

Key Concepts:
• Note b,a = pop(),pop() ensures correct operand order for non-commutative operations.

Key Distinctions:
• This question’s focus is best captured by: Postfix (Reverse Polish) notation evaluates without parentheses using a stack.
• The contrast that matters for correctness is summarized by: Numbers are pushed; operators pop two operands and push the result.

How It Works:
• Python follows the rule implied by: Postfix (Reverse Polish) notation evaluates without parentheses using a stack.
• The outcome you observe follows from: Note b,a = pop(),pop() ensures correct operand order for non-commutative operations.

Step-by-Step Execution:
1. Start from the construct described in: Postfix (Reverse Polish) notation evaluates without parentheses using a stack.
2. Resolve the subparts implied by: Numbers are pushed; operators pop two operands and push the result.
3. Apply the core semantics highlighted in: Trace: push 3→[3], push 4→[3,4], '+'→pop 4 and 3, push 7→[7], push 2→[7,2], '*'→pop 2 and 7, push 14→[14].
4. Confirm the final result aligns with: Note b,a = pop(),pop() ensures correct operand order for non-commutative operations.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Numbers are pushed; operators pop two operands and push the result.
2. Apply the construct’s main rule next, matching: Postfix (Reverse Polish) notation evaluates without parentheses using a stack.
3. Produce any intermediate values that Note b,a = pop(),pop() ensures correct operand order for non-commutative operations. relies on
4. Finish by returning/assembling the final output named by: Note b,a = pop(),pop() ensures correct operand order for non-commutative operations.
5. Use the result only after the full construct has completed, per: Postfix (Reverse Polish) notation evaluates without parentheses using a stack.

Common Use Cases:
• Teaching this behavior using the mental model: Postfix (Reverse Polish) notation evaluates without parentheses using a stack.
• Debugging when the observed value should match the expectation in: Note b,a = pop(),pop() ensures correct operand order for non-commutative operations.

Edge Cases:
• If inputs vary from the situation described in: Numbers are pushed; operators pop two operands and push the result., the behavior can change.
• When the construct’s assumptions differ, the rule in: Trace: push 3→[3], push 4→[3,4], '+'→pop 4 and 3, push 7→[7], push 2→[7,2], '*'→pop 2 and 7, push 14→[14]. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Note b,a = pop(),pop() ensures correct operand order for non-commutative operations..
• When performance matters, prefer the simplest pattern that still implements: Postfix (Reverse Polish) notation evaluates without parentheses using a stack..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Postfix (Reverse Polish) notation evaluates without parentheses using a stack..

Notes:
• For maintainable code, make the intent behind: Numbers are pushed; operators pop two operands and push the result. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q90: Manual CSV parsing
  (_i: number) => ({
    q: `What is len(parts)?\ns = "a,bb,ccc"\nparts = []\nstart = 0\ni = 0\nwhile i <= len(s):\n    if i == len(s) or s[i] == ",":\n        parts.append(s[start:i])\n        start = i + 1\n    i += 1\nlen(parts)`,
    o: ["3", "7", "2", "Error"],
    c: 0,
    e: 'Splits at commas and end-of-string: "a", "bb", "ccc" → 3 parts.',
    de: `This CSV parser scans character by character, splitting at commas. The key trick is i <= len(s) with an i == len(s) check to capture the last field after the final comma. At i=1 (comma): s[0:1]="a". At i=4 (comma): s[2:4]="bb". At i=8 (end): s[5:8]="ccc". Result: ["a","bb","ccc"], length 3. This is how str.split(",") works internally.

Key Concepts:
• This is how str.split(",") works internally.

Key Distinctions:
• This question’s focus is best captured by: This CSV parser scans character by character, splitting at commas.
• The contrast that matters for correctness is summarized by: The key trick is i <= len(s) with an i == len(s) check to capture the last field after the final comma.

How It Works:
• Python follows the rule implied by: This CSV parser scans character by character, splitting at commas.
• The outcome you observe follows from: This is how str.split(",") works internally.

Step-by-Step Execution:
1. Start from the construct described in: This CSV parser scans character by character, splitting at commas.
2. Resolve the subparts implied by: The key trick is i <= len(s) with an i == len(s) check to capture the last field after the final comma.
3. Apply the core semantics highlighted in: At i=1 (comma): s[0:1]="a".
4. Confirm the final result aligns with: This is how str.split(",") works internally.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The key trick is i <= len(s) with an i == len(s) check to capture the last field after the final comma.
2. Apply the construct’s main rule next, matching: This CSV parser scans character by character, splitting at commas.
3. Produce any intermediate values that This is how str.split(",") works internally. relies on
4. Finish by returning/assembling the final output named by: This is how str.split(",") works internally.
5. Use the result only after the full construct has completed, per: This CSV parser scans character by character, splitting at commas.

Common Use Cases:
• Teaching this behavior using the mental model: This CSV parser scans character by character, splitting at commas.
• Debugging when the observed value should match the expectation in: This is how str.split(",") works internally.

Edge Cases:
• If inputs vary from the situation described in: The key trick is i <= len(s) with an i == len(s) check to capture the last field after the final comma., the behavior can change.
• When the construct’s assumptions differ, the rule in: At i=1 (comma): s[0:1]="a". is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This is how str.split(",") works internally..
• When performance matters, prefer the simplest pattern that still implements: This CSV parser scans character by character, splitting at commas..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This CSV parser scans character by character, splitting at commas..

Notes:
• For maintainable code, make the intent behind: The key trick is i <= len(s) with an i == len(s) check to capture the last field after the final comma. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q91: Substring pattern search
  (_i: number) => ({
    q: `What is found?\ntext = "abcabc"\npat = "cab"\ni = 0\nfound = -1\nwhile i <= len(text) - len(pat):\n    if text[i:i+len(pat)] == pat:\n        found = i\n        break\n    i += 1\nfound`,
    o: ["2", "3", "-1", "0"],
    c: 0,
    e: 'text[0:3]="abc"≠"cab", text[1:4]="bca"≠"cab", text[2:5]="cab"=="cab" → found=2.',
    de: `This naive string search slides a window of length len(pat) across text, comparing at each position. At i=0: "abc"≠"cab". At i=1: "bca"≠"cab". At i=2: "cab"=="cab" → found=2, break. This O(n×m) algorithm is equivalent to text.find(pat). More efficient algorithms like KMP or Boyer-Moore avoid re-checking characters after partial matches.

Key Concepts:
• More efficient algorithms like KMP or Boyer-Moore avoid re-checking characters after partial matches.

Key Distinctions:
• This question’s focus is best captured by: This naive string search slides a window of length len(pat) across text, comparing at each position.
• The contrast that matters for correctness is summarized by: At i=0: "abc"≠"cab".

How It Works:
• Python follows the rule implied by: This naive string search slides a window of length len(pat) across text, comparing at each position.
• The outcome you observe follows from: More efficient algorithms like KMP or Boyer-Moore avoid re-checking characters after partial matches.

Step-by-Step Execution:
1. Start from the construct described in: This naive string search slides a window of length len(pat) across text, comparing at each position.
2. Resolve the subparts implied by: At i=0: "abc"≠"cab".
3. Apply the core semantics highlighted in: At i=1: "bca"≠"cab".
4. Confirm the final result aligns with: More efficient algorithms like KMP or Boyer-Moore avoid re-checking characters after partial matches.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: At i=0: "abc"≠"cab".
2. Apply the construct’s main rule next, matching: This naive string search slides a window of length len(pat) across text, comparing at each position.
3. Produce any intermediate values that More efficient algorithms like KMP or Boyer-Moore avoid re-checking characters after partial matches. relies on
4. Finish by returning/assembling the final output named by: More efficient algorithms like KMP or Boyer-Moore avoid re-checking characters after partial matches.
5. Use the result only after the full construct has completed, per: This naive string search slides a window of length len(pat) across text, comparing at each position.

Common Use Cases:
• Teaching this behavior using the mental model: This naive string search slides a window of length len(pat) across text, comparing at each position.
• Debugging when the observed value should match the expectation in: More efficient algorithms like KMP or Boyer-Moore avoid re-checking characters after partial matches.

Edge Cases:
• If inputs vary from the situation described in: At i=0: "abc"≠"cab"., the behavior can change.
• When the construct’s assumptions differ, the rule in: At i=1: "bca"≠"cab". is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: More efficient algorithms like KMP or Boyer-Moore avoid re-checking characters after partial matches..
• When performance matters, prefer the simplest pattern that still implements: This naive string search slides a window of length len(pat) across text, comparing at each position..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This naive string search slides a window of length len(pat) across text, comparing at each position..

Notes:
• For maintainable code, make the intent behind: At i=0: "abc"≠"cab". explicit (and test it with inputs like those in this prompt).`
  }),
  // Q92: De Morgan's law in while condition
  (_i: number) => ({
    q: `What is x?\nx = 1\nwhile not (x >= 4 or x <= 0):\n    x += 1\nx`,
    o: ["4", "5", "3", "0"],
    c: 0,
    e: "not(x>=4 or x<=0) ≡ x<4 and x>0. Loop runs while 0<x<4: x goes 1→2→3→4, then stops.",
    de: `De Morgan's law: not(A or B) ≡ (not A) and (not B). So not(x>=4 or x<=0) equals x<4 and x>0. The loop continues while x is in the open interval (0,4). Starting at x=1: increments to 2, 3, 4. At x=4: 4>=4 makes the 'or' True, so 'not' gives False and the loop exits. Understanding De Morgan's transforms helps simplify complex boolean conditions.

Key Concepts:
• Understanding De Morgan's transforms helps simplify complex boolean conditions.

Key Distinctions:
• This question’s focus is best captured by: De Morgan's law: not(A or B) ≡ (not A) and (not B).
• The contrast that matters for correctness is summarized by: So not(x>=4 or x<=0) equals x<4 and x>0.

How It Works:
• Python follows the rule implied by: De Morgan's law: not(A or B) ≡ (not A) and (not B).
• The outcome you observe follows from: Understanding De Morgan's transforms helps simplify complex boolean conditions.

Step-by-Step Execution:
1. Start from the construct described in: De Morgan's law: not(A or B) ≡ (not A) and (not B).
2. Resolve the subparts implied by: So not(x>=4 or x<=0) equals x<4 and x>0.
3. Apply the core semantics highlighted in: The loop continues while x is in the open interval (0,4).
4. Confirm the final result aligns with: Understanding De Morgan's transforms helps simplify complex boolean conditions.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: So not(x>=4 or x<=0) equals x<4 and x>0.
2. Apply the construct’s main rule next, matching: De Morgan's law: not(A or B) ≡ (not A) and (not B).
3. Produce any intermediate values that Understanding De Morgan's transforms helps simplify complex boolean conditions. relies on
4. Finish by returning/assembling the final output named by: Understanding De Morgan's transforms helps simplify complex boolean conditions.
5. Use the result only after the full construct has completed, per: De Morgan's law: not(A or B) ≡ (not A) and (not B).

Common Use Cases:
• Teaching this behavior using the mental model: De Morgan's law: not(A or B) ≡ (not A) and (not B).
• Debugging when the observed value should match the expectation in: Understanding De Morgan's transforms helps simplify complex boolean conditions.

Edge Cases:
• If inputs vary from the situation described in: So not(x>=4 or x<=0) equals x<4 and x>0., the behavior can change.
• When the construct’s assumptions differ, the rule in: The loop continues while x is in the open interval (0,4). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Understanding De Morgan's transforms helps simplify complex boolean conditions..
• When performance matters, prefer the simplest pattern that still implements: De Morgan's law: not(A or B) ≡ (not A) and (not B)..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: De Morgan's law: not(A or B) ≡ (not A) and (not B)..

Notes:
• For maintainable code, make the intent behind: So not(x>=4 or x<=0) equals x<4 and x>0. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q93: Contiguous subsequence detection
  (_i: number) => ({
    q: `What is (found, i)?\ndata = [1, 3, 5, 3, 5, 3]\ntarget = [3, 5, 3]\ni = 0\nfound = False\nwhile i <= len(data) - len(target):\n    if data[i:i+len(target)] == target:\n        found = True\n        break\n    i += 1\n(found, i)`,
    o: ["(True, 1)", "(True, 3)", "(False, 4)", "(True, 0)"],
    c: 0,
    e: "data[0:3]=[1,3,5]≠target. data[1:4]=[3,5,3]==target → found=True at i=1.",
    de: `This searches for a contiguous subsequence using a sliding window. At i=0: [1,3,5]≠[3,5,3]. At i=1: [3,5,3]==[3,5,3] → match found, break with i=1. The condition i <= len(data)-len(target) ensures the window never exceeds list bounds. This is the list equivalent of str.find() and runs in O(n×m) time where n and m are the list and pattern lengths.

Key Concepts:
• This is the list equivalent of str.find() and runs in O(n×m) time where n and m are the list and pattern lengths.

Key Distinctions:
• This question’s focus is best captured by: This searches for a contiguous subsequence using a sliding window.
• The contrast that matters for correctness is summarized by: At i=0: [1,3,5]≠[3,5,3].

How It Works:
• Python follows the rule implied by: This searches for a contiguous subsequence using a sliding window.
• The outcome you observe follows from: This is the list equivalent of str.find() and runs in O(n×m) time where n and m are the list and pattern lengths.

Step-by-Step Execution:
1. Start from the construct described in: This searches for a contiguous subsequence using a sliding window.
2. Resolve the subparts implied by: At i=0: [1,3,5]≠[3,5,3].
3. Apply the core semantics highlighted in: At i=1: [3,5,3]==[3,5,3] → match found, break with i=1.
4. Confirm the final result aligns with: This is the list equivalent of str.find() and runs in O(n×m) time where n and m are the list and pattern lengths.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: At i=0: [1,3,5]≠[3,5,3].
2. Apply the construct’s main rule next, matching: This searches for a contiguous subsequence using a sliding window.
3. Produce any intermediate values that This is the list equivalent of str.find() and runs in O(n×m) time where n and m are the list and pattern lengths. relies on
4. Finish by returning/assembling the final output named by: This is the list equivalent of str.find() and runs in O(n×m) time where n and m are the list and pattern lengths.
5. Use the result only after the full construct has completed, per: This searches for a contiguous subsequence using a sliding window.

Common Use Cases:
• Teaching this behavior using the mental model: This searches for a contiguous subsequence using a sliding window.
• Debugging when the observed value should match the expectation in: This is the list equivalent of str.find() and runs in O(n×m) time where n and m are the list and pattern lengths.

Edge Cases:
• If inputs vary from the situation described in: At i=0: [1,3,5]≠[3,5,3]., the behavior can change.
• When the construct’s assumptions differ, the rule in: At i=1: [3,5,3]==[3,5,3] → match found, break with i=1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This is the list equivalent of str.find() and runs in O(n×m) time where n and m are the list and pattern lengths..
• When performance matters, prefer the simplest pattern that still implements: This searches for a contiguous subsequence using a sliding window..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This searches for a contiguous subsequence using a sliding window..

Notes:
• For maintainable code, make the intent behind: At i=0: [1,3,5]≠[3,5,3]. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q94: Multiple accumulators in single pass
  (_i: number) => ({
    q: `What is (total, mx)?\nnums = [3, 1, 4, 1, 5]\ntotal = 0\nmx = nums[0]\ni = 0\nwhile i < len(nums):\n    total += nums[i]\n    if nums[i] > mx:\n        mx = nums[i]\n    i += 1\n(total, mx)`,
    o: ["(14, 5)", "(14, 3)", "(5, 14)", "(10, 5)"],
    c: 0,
    e: "total = 3+1+4+1+5 = 14. mx tracks max: 3→3→4→4→5. Result: (14, 5).",
    de: `Using multiple accumulators in a single pass computes several aggregates simultaneously. total sums all elements: 3+1+4+1+5=14. mx tracks the running maximum: starts at 3, updates to 4 at index 2, then to 5 at index 4. This single-pass approach is O(n) versus two separate traversals. Python's built-in equivalents are sum() and max().

Key Concepts:
• Python's built-in equivalents are sum() and max().

Key Distinctions:
• This question’s focus is best captured by: Using multiple accumulators in a single pass computes several aggregates simultaneously.
• The contrast that matters for correctness is summarized by: total sums all elements: 3+1+4+1+5=14.

How It Works:
• Python follows the rule implied by: Using multiple accumulators in a single pass computes several aggregates simultaneously.
• The outcome you observe follows from: Python's built-in equivalents are sum() and max().

Step-by-Step Execution:
1. Start from the construct described in: Using multiple accumulators in a single pass computes several aggregates simultaneously.
2. Resolve the subparts implied by: total sums all elements: 3+1+4+1+5=14.
3. Apply the core semantics highlighted in: mx tracks the running maximum: starts at 3, updates to 4 at index 2, then to 5 at index 4.
4. Confirm the final result aligns with: Python's built-in equivalents are sum() and max().

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: total sums all elements: 3+1+4+1+5=14.
2. Apply the construct’s main rule next, matching: Using multiple accumulators in a single pass computes several aggregates simultaneously.
3. Produce any intermediate values that Python's built-in equivalents are sum() and max(). relies on
4. Finish by returning/assembling the final output named by: Python's built-in equivalents are sum() and max().
5. Use the result only after the full construct has completed, per: Using multiple accumulators in a single pass computes several aggregates simultaneously.

Common Use Cases:
• Teaching this behavior using the mental model: Using multiple accumulators in a single pass computes several aggregates simultaneously.
• Debugging when the observed value should match the expectation in: Python's built-in equivalents are sum() and max().

Edge Cases:
• If inputs vary from the situation described in: total sums all elements: 3+1+4+1+5=14., the behavior can change.
• When the construct’s assumptions differ, the rule in: mx tracks the running maximum: starts at 3, updates to 4 at index 2, then to 5 at index 4. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Python's built-in equivalents are sum() and max()..
• When performance matters, prefer the simplest pattern that still implements: Using multiple accumulators in a single pass computes several aggregates simultaneously..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Using multiple accumulators in a single pass computes several aggregates simultaneously..

Notes:
• For maintainable code, make the intent behind: total sums all elements: 3+1+4+1+5=14. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q95: Polynomial rolling hash with modulo
  (_i: number) => ({
    q: `What is h?\ns = "abc"\nh = 0\ni = 0\nwhile i < len(s):\n    h = (h * 31 + ord(s[i])) % 1000\n    i += 1\nh`,
    o: ["354", "105", "97", "296"],
    c: 0,
    e: "h=97, then (97×31+98)%1000=105, then (105×31+99)%1000=354.",
    de: `This polynomial rolling hash multiplies by a prime (31) and adds each character's ordinal value, with modulo to prevent overflow. h=(0*31+97)%1000=97 for 'a'. h=(97*31+98)%1000=3105%1000=105 for 'b'. h=(105*31+99)%1000=3354%1000=354 for 'c'. The prime 31 is used by Java's String.hashCode(). Modulo keeps values bounded for hash table indexing.

Key Concepts:
• Modulo keeps values bounded for hash table indexing.

Key Distinctions:
• This question’s focus is best captured by: This polynomial rolling hash multiplies by a prime (31) and adds each character's ordinal value, with modulo to prevent overflow.
• The contrast that matters for correctness is summarized by: h=(0*31+97)%1000=97 for 'a'.

How It Works:
• Python follows the rule implied by: This polynomial rolling hash multiplies by a prime (31) and adds each character's ordinal value, with modulo to prevent overflow.
• The outcome you observe follows from: Modulo keeps values bounded for hash table indexing.

Step-by-Step Execution:
1. Start from the construct described in: This polynomial rolling hash multiplies by a prime (31) and adds each character's ordinal value, with modulo to prevent overflow.
2. Resolve the subparts implied by: h=(0*31+97)%1000=97 for 'a'.
3. Apply the core semantics highlighted in: h=(97*31+98)%1000=3105%1000=105 for 'b'.
4. Confirm the final result aligns with: Modulo keeps values bounded for hash table indexing.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: h=(0*31+97)%1000=97 for 'a'.
2. Apply the construct’s main rule next, matching: This polynomial rolling hash multiplies by a prime (31) and adds each character's ordinal value, with modulo to prevent overflow.
3. Produce any intermediate values that Modulo keeps values bounded for hash table indexing. relies on
4. Finish by returning/assembling the final output named by: Modulo keeps values bounded for hash table indexing.
5. Use the result only after the full construct has completed, per: This polynomial rolling hash multiplies by a prime (31) and adds each character's ordinal value, with modulo to prevent overflow.

Common Use Cases:
• Teaching this behavior using the mental model: This polynomial rolling hash multiplies by a prime (31) and adds each character's ordinal value, with modulo to prevent overflow.
• Debugging when the observed value should match the expectation in: Modulo keeps values bounded for hash table indexing.

Edge Cases:
• If inputs vary from the situation described in: h=(0*31+97)%1000=97 for 'a'., the behavior can change.
• When the construct’s assumptions differ, the rule in: h=(97*31+98)%1000=3105%1000=105 for 'b'. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Modulo keeps values bounded for hash table indexing..
• When performance matters, prefer the simplest pattern that still implements: This polynomial rolling hash multiplies by a prime (31) and adds each character's ordinal value, with modulo to prevent overflow..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This polynomial rolling hash multiplies by a prime (31) and adds each character's ordinal value, with modulo to prevent overflow..

Notes:
• For maintainable code, make the intent behind: h=(0*31+97)%1000=97 for 'a'. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q96: String reversal via index arithmetic
  (_i: number) => ({
    q: `What is result?\ns = "hello"\ni = 0\nresult = ""\nwhile i < len(s):\n    result += s[len(s)-1-i]\n    i += 1\nresult`,
    o: ['"olleh"', '"hello"', '"oellh"', '"lehol"'],
    c: 0,
    e: 'Reads from end: s[4]=\'o\', s[3]=\'l\', s[2]=\'l\', s[1]=\'e\', s[0]=\'h\' → "olleh".',
    de: `This reverses a string by reading characters from the end using len(s)-1-i as the index. When i=0: s[4]='o', i=1: s[3]='l', i=2: s[2]='l', i=3: s[1]='e', i=4: s[0]='h'. Appending builds "olleh". The Pythonic equivalent is s[::-1]. String concatenation in a loop is O(n²) due to immutability; using a list with ''.join() is the O(n) alternative.

Key Concepts:
• String concatenation in a loop is O(n²) due to immutability; using a list with ''.join() is the O(n) alternative.

Key Distinctions:
• This question’s focus is best captured by: This reverses a string by reading characters from the end using len(s)-1-i as the index.
• The contrast that matters for correctness is summarized by: When i=0: s[4]='o', i=1: s[3]='l', i=2: s[2]='l', i=3: s[1]='e', i=4: s[0]='h'.

How It Works:
• Python follows the rule implied by: This reverses a string by reading characters from the end using len(s)-1-i as the index.
• The outcome you observe follows from: String concatenation in a loop is O(n²) due to immutability; using a list with ''.join() is the O(n) alternative.

Step-by-Step Execution:
1. Start from the construct described in: This reverses a string by reading characters from the end using len(s)-1-i as the index.
2. Resolve the subparts implied by: When i=0: s[4]='o', i=1: s[3]='l', i=2: s[2]='l', i=3: s[1]='e', i=4: s[0]='h'.
3. Apply the core semantics highlighted in: Appending builds "olleh".
4. Confirm the final result aligns with: String concatenation in a loop is O(n²) due to immutability; using a list with ''.join() is the O(n) alternative.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: When i=0: s[4]='o', i=1: s[3]='l', i=2: s[2]='l', i=3: s[1]='e', i=4: s[0]='h'.
2. Apply the construct’s main rule next, matching: This reverses a string by reading characters from the end using len(s)-1-i as the index.
3. Produce any intermediate values that String concatenation in a loop is O(n²) due to immutability; using a list with ''.join() is the O(n) alternative. relies on
4. Finish by returning/assembling the final output named by: String concatenation in a loop is O(n²) due to immutability; using a list with ''.join() is the O(n) alternative.
5. Use the result only after the full construct has completed, per: This reverses a string by reading characters from the end using len(s)-1-i as the index.

Common Use Cases:
• Teaching this behavior using the mental model: This reverses a string by reading characters from the end using len(s)-1-i as the index.
• Debugging when the observed value should match the expectation in: String concatenation in a loop is O(n²) due to immutability; using a list with ''.join() is the O(n) alternative.

Edge Cases:
• If inputs vary from the situation described in: When i=0: s[4]='o', i=1: s[3]='l', i=2: s[2]='l', i=3: s[1]='e', i=4: s[0]='h'., the behavior can change.
• When the construct’s assumptions differ, the rule in: Appending builds "olleh". is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: String concatenation in a loop is O(n²) due to immutability; using a list with ''.join() is the O(n) alternative..
• When performance matters, prefer the simplest pattern that still implements: This reverses a string by reading characters from the end using len(s)-1-i as the index..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This reverses a string by reading characters from the end using len(s)-1-i as the index..

Notes:
• For maintainable code, make the intent behind: When i=0: s[4]='o', i=1: s[3]='l', i=2: s[2]='l', i=3: s[1]='e', i=4: s[0]='h'. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q97: Decimal to hexadecimal conversion
  (_i: number) => ({
    q: `What is result?\nn = 255\nresult = ""\nwhile n > 0:\n    d = n % 16\n    result = "0123456789abcdef"[d] + result\n    n //= 16\nresult`,
    o: ['"ff"', '"f15"', '"255"', '"1f"'],
    c: 0,
    e: '255%16=15→\'f\', 255//16=15. 15%16=15→\'f\', 15//16=0. result="ff".',
    de: `Hex conversion uses base-16 division: n%16 gives the hex digit (0-15 mapped to '0'-'f' via string indexing), and n//16 removes the last hex digit. For 255: 255%16=15→'f', n=15. 15%16=15→'f', n=0. Prepending builds "f"→"ff". Verify: 15×16+15=255=0xFF. This lookup-string approach avoids if-else chains for digit mapping. Equivalent to hex(255)[2:].

Key Concepts:
• Equivalent to hex(255)[2:].

Key Distinctions:
• This question’s focus is best captured by: Hex conversion uses base-16 division: n%16 gives the hex digit (0-15 mapped to '0'-'f' via string indexing), and n//16 removes the last hex digit.
• The contrast that matters for correctness is summarized by: For 255: 255%16=15→'f', n=15.

How It Works:
• Python follows the rule implied by: Hex conversion uses base-16 division: n%16 gives the hex digit (0-15 mapped to '0'-'f' via string indexing), and n//16 removes the last hex digit.
• The outcome you observe follows from: Equivalent to hex(255)[2:].

Step-by-Step Execution:
1. Start from the construct described in: Hex conversion uses base-16 division: n%16 gives the hex digit (0-15 mapped to '0'-'f' via string indexing), and n//16 removes the last hex digit.
2. Resolve the subparts implied by: For 255: 255%16=15→'f', n=15.
3. Apply the core semantics highlighted in: 15%16=15→'f', n=0.
4. Confirm the final result aligns with: Equivalent to hex(255)[2:].

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: For 255: 255%16=15→'f', n=15.
2. Apply the construct’s main rule next, matching: Hex conversion uses base-16 division: n%16 gives the hex digit (0-15 mapped to '0'-'f' via string indexing), and n//16 removes the last hex digit.
3. Produce any intermediate values that Equivalent to hex(255)[2:]. relies on
4. Finish by returning/assembling the final output named by: Equivalent to hex(255)[2:].
5. Use the result only after the full construct has completed, per: Hex conversion uses base-16 division: n%16 gives the hex digit (0-15 mapped to '0'-'f' via string indexing), and n//16 removes the last hex digit.

Common Use Cases:
• Teaching this behavior using the mental model: Hex conversion uses base-16 division: n%16 gives the hex digit (0-15 mapped to '0'-'f' via string indexing), and n//16 removes the last hex digit.
• Debugging when the observed value should match the expectation in: Equivalent to hex(255)[2:].

Edge Cases:
• If inputs vary from the situation described in: For 255: 255%16=15→'f', n=15., the behavior can change.
• When the construct’s assumptions differ, the rule in: 15%16=15→'f', n=0. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Equivalent to hex(255)[2:]..
• When performance matters, prefer the simplest pattern that still implements: Hex conversion uses base-16 division: n%16 gives the hex digit (0-15 mapped to '0'-'f' via string indexing), and n//16 removes the last hex digit..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Hex conversion uses base-16 division: n%16 gives the hex digit (0-15 mapped to '0'-'f' via string indexing), and n//16 removes the last hex digit..

Notes:
• For maintainable code, make the intent behind: For 255: 255%16=15→'f', n=15. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q98: Nested while loops for matrix flattening
  (_i: number) => ({
    q: `What is flat?\nmatrix = [[1, 2], [3], [4, 5]]\nflat = []\ni = 0\nwhile i < len(matrix):\n    j = 0\n    while j < len(matrix[i]):\n        flat.append(matrix[i][j])\n        j += 1\n    i += 1\nflat`,
    o: ["[1, 2, 3, 4, 5]", "[[1, 2], [3], [4, 5]]", "[1, 2, 3, 4, 5, 6]", "Error"],
    c: 0,
    e: "Outer loop iterates rows, inner loop iterates elements: [1,2]+[3]+[4,5] = [1,2,3,4,5].",
    de: `Nested while loops flatten a 2D list by iterating each row (outer) and each element within the row (inner). Row 0: append 1, 2. Row 1: append 3. Row 2: append 4, 5. Result: [1,2,3,4,5]. The inner counter j resets to 0 for each new row, and rows can have different lengths (jagged array). The Pythonic equivalent is [x for row in matrix for x in row].

Key Concepts:
• The Pythonic equivalent is [x for row in matrix for x in row].

Key Distinctions:
• This question’s focus is best captured by: Nested while loops flatten a 2D list by iterating each row (outer) and each element within the row (inner).
• The contrast that matters for correctness is summarized by: Row 0: append 1, 2.

How It Works:
• Python follows the rule implied by: Nested while loops flatten a 2D list by iterating each row (outer) and each element within the row (inner).
• The outcome you observe follows from: The Pythonic equivalent is [x for row in matrix for x in row].

Step-by-Step Execution:
1. Start from the construct described in: Nested while loops flatten a 2D list by iterating each row (outer) and each element within the row (inner).
2. Resolve the subparts implied by: Row 0: append 1, 2.
3. Apply the core semantics highlighted in: Row 1: append 3.
4. Confirm the final result aligns with: The Pythonic equivalent is [x for row in matrix for x in row].

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Row 0: append 1, 2.
2. Apply the construct’s main rule next, matching: Nested while loops flatten a 2D list by iterating each row (outer) and each element within the row (inner).
3. Produce any intermediate values that The Pythonic equivalent is [x for row in matrix for x in row]. relies on
4. Finish by returning/assembling the final output named by: The Pythonic equivalent is [x for row in matrix for x in row].
5. Use the result only after the full construct has completed, per: Nested while loops flatten a 2D list by iterating each row (outer) and each element within the row (inner).

Common Use Cases:
• Teaching this behavior using the mental model: Nested while loops flatten a 2D list by iterating each row (outer) and each element within the row (inner).
• Debugging when the observed value should match the expectation in: The Pythonic equivalent is [x for row in matrix for x in row].

Edge Cases:
• If inputs vary from the situation described in: Row 0: append 1, 2., the behavior can change.
• When the construct’s assumptions differ, the rule in: Row 1: append 3. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: The Pythonic equivalent is [x for row in matrix for x in row]..
• When performance matters, prefer the simplest pattern that still implements: Nested while loops flatten a 2D list by iterating each row (outer) and each element within the row (inner)..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Nested while loops flatten a 2D list by iterating each row (outer) and each element within the row (inner)..

Notes:
• For maintainable code, make the intent behind: Row 0: append 1, 2. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q99: Chained comparison in while condition
  (_i: number) => ({
    q: `What is x?\nx = 1\nwhile 1 <= x <= 5:\n    x *= 2\nx`,
    o: ["8", "16", "4", "6"],
    c: 0,
    e: "x=1: 1<=1<=5 True→x=2. 1<=2<=5→x=4. 1<=4<=5→x=8. 1<=8<=5 False→stop. x=8.",
    de: `Python's chained comparison 1 <= x <= 5 is equivalent to (1 <= x) and (x <= 5). The loop doubles x each iteration: 1→2→4→8. At x=8: 1<=8 is True but 8<=5 is False, so the chain evaluates to False and the loop exits. Chained comparisons are more readable than explicit 'and' conjunctions and are a unique Python feature not available in most other languages.

Key Concepts:
• Chained comparisons are more readable than explicit 'and' conjunctions and are a unique Python feature not available in most other languages.

Key Distinctions:
• This question’s focus is best captured by: Python's chained comparison 1 <= x <= 5 is equivalent to (1 <= x) and (x <= 5).
• The contrast that matters for correctness is summarized by: The loop doubles x each iteration: 1→2→4→8.

How It Works:
• Python follows the rule implied by: Python's chained comparison 1 <= x <= 5 is equivalent to (1 <= x) and (x <= 5).
• The outcome you observe follows from: Chained comparisons are more readable than explicit 'and' conjunctions and are a unique Python feature not available in most other languages.

Step-by-Step Execution:
1. Start from the construct described in: Python's chained comparison 1 <= x <= 5 is equivalent to (1 <= x) and (x <= 5).
2. Resolve the subparts implied by: The loop doubles x each iteration: 1→2→4→8.
3. Apply the core semantics highlighted in: At x=8: 1<=8 is True but 8<=5 is False, so the chain evaluates to False and the loop exits.
4. Confirm the final result aligns with: Chained comparisons are more readable than explicit 'and' conjunctions and are a unique Python feature not available in most other languages.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The loop doubles x each iteration: 1→2→4→8.
2. Apply the construct’s main rule next, matching: Python's chained comparison 1 <= x <= 5 is equivalent to (1 <= x) and (x <= 5).
3. Produce any intermediate values that Chained comparisons are more readable than explicit 'and' conjunctions and are a unique Python feature not available in most other languages. relies on
4. Finish by returning/assembling the final output named by: Chained comparisons are more readable than explicit 'and' conjunctions and are a unique Python feature not available in most other languages.
5. Use the result only after the full construct has completed, per: Python's chained comparison 1 <= x <= 5 is equivalent to (1 <= x) and (x <= 5).

Common Use Cases:
• Teaching this behavior using the mental model: Python's chained comparison 1 <= x <= 5 is equivalent to (1 <= x) and (x <= 5).
• Debugging when the observed value should match the expectation in: Chained comparisons are more readable than explicit 'and' conjunctions and are a unique Python feature not available in most other languages.

Edge Cases:
• If inputs vary from the situation described in: The loop doubles x each iteration: 1→2→4→8., the behavior can change.
• When the construct’s assumptions differ, the rule in: At x=8: 1<=8 is True but 8<=5 is False, so the chain evaluates to False and the loop exits. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Chained comparisons are more readable than explicit 'and' conjunctions and are a unique Python feature not available in most other languages..
• When performance matters, prefer the simplest pattern that still implements: Python's chained comparison 1 <= x <= 5 is equivalent to (1 <= x) and (x <= 5)..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Python's chained comparison 1 <= x <= 5 is equivalent to (1 <= x) and (x <= 5)..

Notes:
• For maintainable code, make the intent behind: The loop doubles x each iteration: 1→2→4→8. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q100: Greedy coin change algorithm
  (_i: number) => ({
    q: `What is count?\namount = 67\ncoins = [25, 10, 5, 1]\ncount = 0\ni = 0\nwhile amount > 0:\n    if amount >= coins[i]:\n        amount -= coins[i]\n        count += 1\n    else:\n        i += 1\ncount`,
    o: ["6", "4", "7", "67"],
    c: 0,
    e: "67: two 25s(17 left), one 10(7), one 5(2), two 1s(0). Total coins: 2+1+1+2=6.",
    de: `The greedy coin change algorithm always picks the largest coin that fits. For 67 cents: two 25s (count=2, left=17), one 10 (count=3, left=7), one 5 (count=4, left=2), two 1s (count=6, left=0). Total 6 coins. Greedy works optimally for US denominations but fails for arbitrary coin sets — e.g., coins=[1,3,4] with amount=6 needs dynamic programming.

Key Concepts:
• Greedy works optimally for US denominations but fails for arbitrary coin sets — e.g., coins=[1,3,4] with amount=6 needs dynamic programming.

Key Distinctions:
• This question’s focus is best captured by: The greedy coin change algorithm always picks the largest coin that fits.
• The contrast that matters for correctness is summarized by: For 67 cents: two 25s (count=2, left=17), one 10 (count=3, left=7), one 5 (count=4, left=2), two 1s (count=6, left=0).

How It Works:
• Python follows the rule implied by: The greedy coin change algorithm always picks the largest coin that fits.
• The outcome you observe follows from: Greedy works optimally for US denominations but fails for arbitrary coin sets — e.g., coins=[1,3,4] with amount=6 needs dynamic programming.

Step-by-Step Execution:
1. Start from the construct described in: The greedy coin change algorithm always picks the largest coin that fits.
2. Resolve the subparts implied by: For 67 cents: two 25s (count=2, left=17), one 10 (count=3, left=7), one 5 (count=4, left=2), two 1s (count=6, left=0).
3. Apply the core semantics highlighted in: Total 6 coins.
4. Confirm the final result aligns with: Greedy works optimally for US denominations but fails for arbitrary coin sets — e.g., coins=[1,3,4] with amount=6 needs dynamic programming.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: For 67 cents: two 25s (count=2, left=17), one 10 (count=3, left=7), one 5 (count=4, left=2), two 1s (count=6, left=0).
2. Apply the construct’s main rule next, matching: The greedy coin change algorithm always picks the largest coin that fits.
3. Produce any intermediate values that Greedy works optimally for US denominations but fails for arbitrary coin sets — e.g., coins=[1,3,4] with amount=6 needs dynamic programming. relies on
4. Finish by returning/assembling the final output named by: Greedy works optimally for US denominations but fails for arbitrary coin sets — e.g., coins=[1,3,4] with amount=6 needs dynamic programming.
5. Use the result only after the full construct has completed, per: The greedy coin change algorithm always picks the largest coin that fits.

Common Use Cases:
• Teaching this behavior using the mental model: The greedy coin change algorithm always picks the largest coin that fits.
• Debugging when the observed value should match the expectation in: Greedy works optimally for US denominations but fails for arbitrary coin sets — e.g., coins=[1,3,4] with amount=6 needs dynamic programming.

Edge Cases:
• If inputs vary from the situation described in: For 67 cents: two 25s (count=2, left=17), one 10 (count=3, left=7), one 5 (count=4, left=2), two 1s (count=6, left=0)., the behavior can change.
• When the construct’s assumptions differ, the rule in: Total 6 coins. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Greedy works optimally for US denominations but fails for arbitrary coin sets — e.g., coins=[1,3,4] with amount=6 needs dynamic programming..
• When performance matters, prefer the simplest pattern that still implements: The greedy coin change algorithm always picks the largest coin that fits..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The greedy coin change algorithm always picks the largest coin that fits..

Notes:
• For maintainable code, make the intent behind: For 67 cents: two 25s (count=2, left=17), one 10 (count=3, left=7), one 5 (count=4, left=2), two 1s (count=6, left=0). explicit (and test it with inputs like those in this prompt).`
  }),
  // Q101: Triangular number / pyramid row count
  (_i: number) => ({
    q: `What is rows?\nrows = 0\ntotal = 0\nwhile total + rows + 1 <= 15:\n    rows += 1\n    total += rows\nrows`,
    o: ["5", "4", "6", "15"],
    c: 0,
    e: "Row sums: 1, 3, 6, 10, 15. Adding row 6 would give 21 > 15. rows=5.",
    de: `This computes how many complete rows fit in a pyramid where row k has k items. The condition total+rows+1 <= 15 checks if the next row fits. Rows added: 1(total=1), 2(3), 3(6), 4(10), 5(15). Row 6 would need total=21 > 15, so the loop stops. The total after k rows is k(k+1)/2 — the kth triangular number. T(5)=15 fits exactly within the limit.

Key Concepts:
• T(5)=15 fits exactly within the limit.

Key Distinctions:
• This question’s focus is best captured by: This computes how many complete rows fit in a pyramid where row k has k items.
• The contrast that matters for correctness is summarized by: The condition total+rows+1 <= 15 checks if the next row fits.

How It Works:
• Python follows the rule implied by: This computes how many complete rows fit in a pyramid where row k has k items.
• The outcome you observe follows from: T(5)=15 fits exactly within the limit.

Step-by-Step Execution:
1. Start from the construct described in: This computes how many complete rows fit in a pyramid where row k has k items.
2. Resolve the subparts implied by: The condition total+rows+1 <= 15 checks if the next row fits.
3. Apply the core semantics highlighted in: Rows added: 1(total=1), 2(3), 3(6), 4(10), 5(15).
4. Confirm the final result aligns with: T(5)=15 fits exactly within the limit.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The condition total+rows+1 <= 15 checks if the next row fits.
2. Apply the construct’s main rule next, matching: This computes how many complete rows fit in a pyramid where row k has k items.
3. Produce any intermediate values that T(5)=15 fits exactly within the limit. relies on
4. Finish by returning/assembling the final output named by: T(5)=15 fits exactly within the limit.
5. Use the result only after the full construct has completed, per: This computes how many complete rows fit in a pyramid where row k has k items.

Common Use Cases:
• Teaching this behavior using the mental model: This computes how many complete rows fit in a pyramid where row k has k items.
• Debugging when the observed value should match the expectation in: T(5)=15 fits exactly within the limit.

Edge Cases:
• If inputs vary from the situation described in: The condition total+rows+1 <= 15 checks if the next row fits., the behavior can change.
• When the construct’s assumptions differ, the rule in: Rows added: 1(total=1), 2(3), 3(6), 4(10), 5(15). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: T(5)=15 fits exactly within the limit..
• When performance matters, prefer the simplest pattern that still implements: This computes how many complete rows fit in a pyramid where row k has k items..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This computes how many complete rows fit in a pyramid where row k has k items..

Notes:
• For maintainable code, make the intent behind: The condition total+rows+1 <= 15 checks if the next row fits. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q102: Generator exhaustion with while/try/except
  (_i: number) => ({
    q: `What is total?\ndef gen():\n    yield 1\n    yield 2\n    yield 3\ng = gen()\ntotal = 0\nwhile True:\n    try:\n        total += next(g)\n    except StopIteration:\n        break\ntotal`,
    o: ["6", "3", "Error", "0"],
    c: 0,
    e: "Generator yields 1, 2, 3 then raises StopIteration → break. total = 1+2+3 = 6.",
    de: `Generators produce values lazily via yield. Calling next(g) resumes execution until the next yield. After all yields are exhausted, next() raises StopIteration. The while True + try/except pattern manually consumes the generator: 1+2+3=6. This is exactly what a for loop does internally — for x in gen() is syntactic sugar for this try/except/StopIteration protocol.

Key Concepts:
• This is exactly what a for loop does internally — for x in gen() is syntactic sugar for this try/except/StopIteration protocol.

Key Distinctions:
• This question’s focus is best captured by: Generators produce values lazily via yield.
• The contrast that matters for correctness is summarized by: Calling next(g) resumes execution until the next yield.

How It Works:
• Python follows the rule implied by: Generators produce values lazily via yield.
• The outcome you observe follows from: This is exactly what a for loop does internally — for x in gen() is syntactic sugar for this try/except/StopIteration protocol.

Step-by-Step Execution:
1. Start from the construct described in: Generators produce values lazily via yield.
2. Resolve the subparts implied by: Calling next(g) resumes execution until the next yield.
3. Apply the core semantics highlighted in: After all yields are exhausted, next() raises StopIteration.
4. Confirm the final result aligns with: This is exactly what a for loop does internally — for x in gen() is syntactic sugar for this try/except/StopIteration protocol.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Calling next(g) resumes execution until the next yield.
2. Apply the construct’s main rule next, matching: Generators produce values lazily via yield.
3. Produce any intermediate values that This is exactly what a for loop does internally — for x in gen() is syntactic sugar for this try/except/StopIteration protocol. relies on
4. Finish by returning/assembling the final output named by: This is exactly what a for loop does internally — for x in gen() is syntactic sugar for this try/except/StopIteration protocol.
5. Use the result only after the full construct has completed, per: Generators produce values lazily via yield.

Common Use Cases:
• Teaching this behavior using the mental model: Generators produce values lazily via yield.
• Debugging when the observed value should match the expectation in: This is exactly what a for loop does internally — for x in gen() is syntactic sugar for this try/except/StopIteration protocol.

Edge Cases:
• If inputs vary from the situation described in: Calling next(g) resumes execution until the next yield., the behavior can change.
• When the construct’s assumptions differ, the rule in: After all yields are exhausted, next() raises StopIteration. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This is exactly what a for loop does internally — for x in gen() is syntactic sugar for this try/except/StopIteration protocol..
• When performance matters, prefer the simplest pattern that still implements: Generators produce values lazily via yield..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Generators produce values lazily via yield..

Notes:
• For maintainable code, make the intent behind: Calling next(g) resumes execution until the next yield. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q103: Parenthesis nesting depth tracker
  (_i: number) => ({
    q: `What is max_d?\ns = "(()())"\ndepth = 0\nmax_d = 0\ni = 0\nwhile i < len(s):\n    if s[i] == "(":\n        depth += 1\n        max_d = max(max_d, depth)\n    else:\n        depth -= 1\n    i += 1\nmax_d`,
    o: ["2", "3", "1", "0"],
    c: 0,
    e: "Depth trace: 1, 2, 1, 2, 1, 0. Maximum depth reached is 2.",
    de: `This tracks parenthesis nesting by incrementing depth on '(' and decrementing on ')'. For "(()())": '('→1, '('→2, ')'→1, '('→2, ')'→1, ')'→0. max_d captures the peak depth of 2. This is used in expression parsers to determine nesting complexity. If depth ever goes negative, there's an unmatched closer; if it ends nonzero, there are unmatched openers.

Key Concepts:
• If depth ever goes negative, there's an unmatched closer; if it ends nonzero, there are unmatched openers.

Key Distinctions:
• This question’s focus is best captured by: This tracks parenthesis nesting by incrementing depth on '(' and decrementing on ')'.
• The contrast that matters for correctness is summarized by: For "(()())": '('→1, '('→2, ')'→1, '('→2, ')'→1, ')'→0.

How It Works:
• Python follows the rule implied by: This tracks parenthesis nesting by incrementing depth on '(' and decrementing on ')'.
• The outcome you observe follows from: If depth ever goes negative, there's an unmatched closer; if it ends nonzero, there are unmatched openers.

Step-by-Step Execution:
1. Start from the construct described in: This tracks parenthesis nesting by incrementing depth on '(' and decrementing on ')'.
2. Resolve the subparts implied by: For "(()())": '('→1, '('→2, ')'→1, '('→2, ')'→1, ')'→0.
3. Apply the core semantics highlighted in: max_d captures the peak depth of 2.
4. Confirm the final result aligns with: If depth ever goes negative, there's an unmatched closer; if it ends nonzero, there are unmatched openers.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: For "(()())": '('→1, '('→2, ')'→1, '('→2, ')'→1, ')'→0.
2. Apply the construct’s main rule next, matching: This tracks parenthesis nesting by incrementing depth on '(' and decrementing on ')'.
3. Produce any intermediate values that If depth ever goes negative, there's an unmatched closer; if it ends nonzero, there are unmatched openers. relies on
4. Finish by returning/assembling the final output named by: If depth ever goes negative, there's an unmatched closer; if it ends nonzero, there are unmatched openers.
5. Use the result only after the full construct has completed, per: This tracks parenthesis nesting by incrementing depth on '(' and decrementing on ')'.

Common Use Cases:
• Teaching this behavior using the mental model: This tracks parenthesis nesting by incrementing depth on '(' and decrementing on ')'.
• Debugging when the observed value should match the expectation in: If depth ever goes negative, there's an unmatched closer; if it ends nonzero, there are unmatched openers.

Edge Cases:
• If inputs vary from the situation described in: For "(()())": '('→1, '('→2, ')'→1, '('→2, ')'→1, ')'→0., the behavior can change.
• When the construct’s assumptions differ, the rule in: max_d captures the peak depth of 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: If depth ever goes negative, there's an unmatched closer; if it ends nonzero, there are unmatched openers..
• When performance matters, prefer the simplest pattern that still implements: This tracks parenthesis nesting by incrementing depth on '(' and decrementing on ')'..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This tracks parenthesis nesting by incrementing depth on '(' and decrementing on ')'..

Notes:
• For maintainable code, make the intent behind: For "(()())": '('→1, '('→2, ')'→1, '('→2, ')'→1, ')'→0. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q104: Round-robin task scheduling
  (_i: number) => ({
    q: `What is turns?\ntasks = [3, 2, 1]\nturns = 0\nwhile any(t > 0 for t in tasks):\n    for i in range(len(tasks)):\n        if tasks[i] > 0:\n            tasks[i] -= 1\n            turns += 1\nturns`,
    o: ["6", "3", "9", "5"],
    c: 0,
    e: "Round 1: 3 tasks done. Round 2: 2 done. Round 3: 1 done. Total = 3+2+1 = 6.",
    de: `Round-robin scheduling gives each task one unit of work per round. Round 1: all three tasks run → [2,1,0], turns=3. Round 2: first two run → [1,0,0], turns=5. Round 3: only first runs → [0,0,0], turns=6. Total turns equals sum(tasks) = 3+2+1 = 6. The any() generator checks if work remains. This models CPU time-slicing in operating systems.

Key Concepts:
• This models CPU time-slicing in operating systems.

Key Distinctions:
• This question’s focus is best captured by: Round-robin scheduling gives each task one unit of work per round.
• The contrast that matters for correctness is summarized by: Round 1: all three tasks run → [2,1,0], turns=3.

How It Works:
• Python follows the rule implied by: Round-robin scheduling gives each task one unit of work per round.
• The outcome you observe follows from: This models CPU time-slicing in operating systems.

Step-by-Step Execution:
1. Start from the construct described in: Round-robin scheduling gives each task one unit of work per round.
2. Resolve the subparts implied by: Round 1: all three tasks run → [2,1,0], turns=3.
3. Apply the core semantics highlighted in: Round 2: first two run → [1,0,0], turns=5.
4. Confirm the final result aligns with: This models CPU time-slicing in operating systems.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Round 1: all three tasks run → [2,1,0], turns=3.
2. Apply the construct’s main rule next, matching: Round-robin scheduling gives each task one unit of work per round.
3. Produce any intermediate values that This models CPU time-slicing in operating systems. relies on
4. Finish by returning/assembling the final output named by: This models CPU time-slicing in operating systems.
5. Use the result only after the full construct has completed, per: Round-robin scheduling gives each task one unit of work per round.

Common Use Cases:
• Teaching this behavior using the mental model: Round-robin scheduling gives each task one unit of work per round.
• Debugging when the observed value should match the expectation in: This models CPU time-slicing in operating systems.

Edge Cases:
• If inputs vary from the situation described in: Round 1: all three tasks run → [2,1,0], turns=3., the behavior can change.
• When the construct’s assumptions differ, the rule in: Round 2: first two run → [1,0,0], turns=5. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This models CPU time-slicing in operating systems..
• When performance matters, prefer the simplest pattern that still implements: Round-robin scheduling gives each task one unit of work per round..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Round-robin scheduling gives each task one unit of work per round..

Notes:
• For maintainable code, make the intent behind: Round 1: all three tasks run → [2,1,0], turns=3. explicit (and test it with inputs like those in this prompt).`
  }),
];
