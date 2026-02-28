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
    de: `The loop extracts digits by repeatedly integer-dividing by 10. n=1234→count=1, n=123→count=2, n=12→count=3, n=1→count=4, n=0→loop exits. This is the standard way to count digits without converting to a string. Equivalent to len(str(1234)) but works purely with arithmetic.`
  }),
  // Q2: Reversing a number
  (_i: number) => ({
    q: `What is rev?\nn = 1234\nrev = 0\nwhile n > 0:\n    rev = rev * 10 + n % 10\n    n //= 10`,
    o: ["4321", "1234", "4312", "Error"],
    c: 0,
    e: "Builds reversed number: 4→43→432→4321 by extracting digits right-to-left.",
    de: `Each iteration peels off the last digit with n%10 and appends it to rev by shifting rev left (×10). Step by step: rev=0*10+4=4, n=123. rev=4*10+3=43, n=12. rev=43*10+2=432, n=1. rev=432*10+1=4321, n=0. This is a classic digit-manipulation pattern used in palindrome number checks.`
  }),
  // Q3: GCD using Euclidean algorithm
  (_i: number) => ({
    q: `What is a?\na, b = 48, 18\nwhile b:\n    a, b = b, a % b`,
    o: ["6", "18", "48", "0"],
    c: 0,
    e: "Euclidean algorithm: (48,18)→(18,12)→(12,6)→(6,0). GCD is 6.",
    de: `The Euclidean algorithm finds the greatest common divisor by repeatedly replacing (a, b) with (b, a%b) until b is 0. 48%18=12→(18,12). 18%12=6→(12,6). 12%6=0→(6,0). When b=0 (falsy), the loop exits and a=6 is the GCD. This O(log(min(a,b))) algorithm is one of the oldest known algorithms.`
  }),
  // Q4: Binary search finding target 7
  (_i: number) => ({
    q: `What is mid?\nnums = [1, 3, 5, 7, 9]\nlo, hi = 0, 4\nwhile lo <= hi:\n    mid = (lo + hi) // 2\n    if nums[mid] < 7:\n        lo = mid + 1\n    elif nums[mid] > 7:\n        hi = mid - 1\n    else:\n        break`,
    o: ["3", "2", "4", "1"],
    c: 0,
    e: "mid=2 (val 5<7→lo=3), mid=3 (val 7==7→break). Found at index 3.",
    de: `Binary search halves the search space each step. lo=0, hi=4: mid=2, nums[2]=5<7 so lo=3. lo=3, hi=4: mid=3, nums[3]=7==7 so break. The target is found at index 3 in just 2 comparisons. Binary search requires a sorted array and runs in O(log n) time — far faster than linear scan for large datasets.`
  }),
  // Q5: Iterative exponentiation
  (_i: number) => ({
    q: `What is result?\nbase, exp, result = 2, 5, 1\nwhile exp > 0:\n    result *= base\n    exp -= 1`,
    o: ["32", "10", "25", "64"],
    c: 0,
    e: "Multiplies base 5 times: 1→2→4→8→16→32. Equivalent to 2**5.",
    de: `This iterative approach computes base^exp by multiplying result by base in each iteration. result goes: 1*2=2, 2*2=4, 4*2=8, 8*2=16, 16*2=32 over 5 iterations. When exp reaches 0 the loop stops. This is the O(n) naive approach — fast modular exponentiation uses squaring to achieve O(log n).`
  }),
  // Q6: Multiple conditions with and
  (_i: number) => ({
    q: `What is (x, y)?\nx, y = 0, 15\nwhile x < 10 and y > 5:\n    x += 3\n    y -= 4`,
    o: ["(9, 3)", "(12, -1)", "(6, 7)", "(10, 5)"],
    c: 0,
    e: "Trace: (0,15)→(3,11)→(6,7)→(9,3). Then 9<10 but 3>5 is False → stop.",
    de: `Both conditions must be True to continue. (0,15): 0<10 and 15>5 → body: (3,11). (3,11): True and True → (6,7). (6,7): True and True → (9,3). (9,3): 9<10 is True but 3>5 is False → loop exits. The 'and' operator short-circuits: once either condition is False the loop won't execute again.`
  }),
  // Q7: Scan alphabetic prefix
  (_i: number) => ({
    q: `What is i?\ns = "ab3cd"\ni = 0\nwhile i < len(s) and s[i].isalpha():\n    i += 1`,
    o: ["2", "3", "4", "0"],
    c: 0,
    e: "s[0]='a'(alpha), s[1]='b'(alpha), s[2]='3'(not alpha) → stops at i=2.",
    de: `The loop advances i while the current character is alphabetic. s[0]='a' passes, s[1]='b' passes, s[2]='3' fails isalpha() so the loop exits with i=2. The short-circuit 'and' ensures s[i] is only checked when i is in bounds. This pattern is used in tokenizers to extract identifiers or words from mixed input.`
  }),
  // Q8: Pop all elements from list
  (_i: number) => ({
    q: `What is total?\nnums = [1, 2, 3, 4, 5]\ntotal = 0\nwhile nums:\n    total += nums.pop()`,
    o: ["15", "5", "1", "10"],
    c: 0,
    e: "pop() removes from the end: 5+4+3+2+1 = 15. Empty list is falsy.",
    de: `An empty list is falsy, so "while nums" continues until the list is empty. pop() without arguments removes and returns the last element. Order: 5, 4, 3, 2, 1. Sum = 5+4+3+2+1 = 15. This drains the list completely. Note that pop() is O(1) from the end, making this an efficient pattern for processing all elements.`
  }),
  // Q9: Stack LIFO reversal
  (_i: number) => ({
    q: `What is result?\nstack = [10, 20, 30]\nresult = []\nwhile stack:\n    result.append(stack.pop())`,
    o: ["[30, 20, 10]", "[10, 20, 30]", "[30]", "[10]"],
    c: 0,
    e: "pop() gives 30, then 20, then 10. LIFO order reverses the original list.",
    de: `A stack follows Last-In-First-Out (LIFO). pop() removes the top (last appended): 30 first, then 20, then 10. Appending to result in that order gives [30, 20, 10] — the reverse of the original. This is how stacks are used for reversal in algorithms like reversing a string or checking balanced brackets.`
  }),
  // Q10: Queue FIFO ordering
  (_i: number) => ({
    q: `What is result?\nq = [10, 20, 30]\nresult = []\nwhile q:\n    result.append(q.pop(0))`,
    o: ["[10, 20, 30]", "[30, 20, 10]", "[10]", "[30]"],
    c: 0,
    e: "pop(0) removes from the front: 10, then 20, then 30. FIFO preserves order.",
    de: `A queue follows First-In-First-Out (FIFO). pop(0) removes the first element: 10, then 20, then 30. The result preserves the original order [10, 20, 30]. Note that list.pop(0) is O(n) because remaining elements shift left. For performance-critical code, use collections.deque with popleft() which is O(1).`
  }),
  // Q11: Sentinel value loop
  (_i: number) => ({
    q: `What is total?\ndata = [3, 7, -1, 5]\ntotal = 0\ni = 0\nwhile data[i] != -1:\n    total += data[i]\n    i += 1`,
    o: ["10", "14", "3", "15"],
    c: 0,
    e: "Adds 3 + 7 = 10, then hits sentinel -1 and stops. The 5 is never reached.",
    de: `A sentinel value is a special marker that signals the end of meaningful data. Here -1 acts as the sentinel. data[0]=3 (add, total=3), data[1]=7 (add, total=10), data[2]=-1 (sentinel, stop). The value 5 after the sentinel is never processed. This pattern is common in C-style programming and stream processing where the data length is unknown.`
  }),
  // Q12: Remove spaces from string
  (_i: number) => ({
    q: `What is result?\ns = "h e l l o"\nresult = ""\ni = 0\nwhile i < len(s):\n    if s[i] != " ":\n        result += s[i]\n    i += 1`,
    o: ['"hello"', '"h e l l o"', '"h"', '""'],
    c: 0,
    e: "Skips space characters, keeps h, e, l, l, o → \"hello\".",
    de: `The loop iterates through every character. When the character is not a space, it's appended to result. Characters processed: 'h'(keep), ' '(skip), 'e'(keep), ' '(skip), 'l'(keep), ' '(skip), 'l'(keep), ' '(skip), 'o'(keep). Result = "hello". The Pythonic equivalent is s.replace(" ", "") or "".join(s.split()).`
  }),
  // Q13: Collatz sequence steps
  (_i: number) => ({
    q: `What is steps?\nn = 6\nsteps = 0\nwhile n != 1:\n    n = n // 2 if n % 2 == 0 else 3 * n + 1\n    steps += 1`,
    o: ["8", "6", "10", "3"],
    c: 0,
    e: "Sequence: 6→3→10→5→16→8→4→2→1. Eight steps to reach 1.",
    de: `The Collatz conjecture states every positive integer eventually reaches 1 under this rule: if even, halve; if odd, triple and add 1. From 6: 6→3(odd:10)→10→5(odd:16)→16→8→4→2→1. That's 8 transformations. Whether this always terminates is one of mathematics' most famous unsolved problems.`
  }),
  // Q14: Try/except retry pattern
  (_i: number) => ({
    q: `What is result?\nvals = ["x", "y", "5"]\ni = 0\nresult = None\nwhile result is None:\n    try:\n        result = int(vals[i])\n    except:\n        i += 1`,
    o: ["5", "None", '"5"', "Error"],
    c: 0,
    e: "int('x') fails → i=1, int('y') fails → i=2, int('5') succeeds → result=5.",
    de: `This retry pattern keeps trying until success. int("x") raises ValueError, caught by except, i advances to 1. int("y") also fails, i=2. int("5") succeeds, setting result=5. The while condition "result is None" becomes False and the loop exits. This pattern is used for input validation, network retries, and parsing fallback chains.`
  }),
  // Q15: Nested if/elif classification
  (_i: number) => ({
    q: `What is labels?\nnums = [15, 5, 25]\nlabels = []\ni = 0\nwhile i < len(nums):\n    if nums[i] >= 20:\n        labels.append("high")\n    elif nums[i] >= 10:\n        labels.append("mid")\n    else:\n        labels.append("low")\n    i += 1`,
    o: ['["mid", "low", "high"]', '["high", "low", "mid"]', '["mid", "mid", "high"]', '["low", "low", "high"]'],
    c: 0,
    e: "15→mid (>=10), 5→low (<10), 25→high (>=20).",
    de: `Each element is classified using chained if/elif/else. 15: >=20? No. >=10? Yes → "mid". 5: >=20? No. >=10? No → "low". 25: >=20? Yes → "high". Order matters in elif chains: the >=20 check must come before >=10, otherwise 25 would match >=10 first. Result: ["mid", "low", "high"].`
  }),
  // Q16: Simple state machine
  (_i: number) => ({
    q: `What is state?\ns = "xax"\nstate = "start"\ni = 0\nwhile i < len(s) and state != "done":\n    if state == "start" and s[i] == "a":\n        state = "found_a"\n    elif state == "found_a" and s[i] == "x":\n        state = "done"\n    i += 1`,
    o: ['"done"', '"start"', '"found_a"', "Error"],
    c: 0,
    e: "i=0: 'x'≠'a' (stay start). i=1: 'a' → found_a. i=2: 'x' → done.",
    de: `A state machine transitions between named states based on input. Starting in "start": s[0]='x' doesn't match any transition, stay in "start". s[1]='a' with state "start" → transition to "found_a". s[2]='x' with state "found_a" → transition to "done". The loop also exits because state=="done". This pattern recognizes the substring "ax" in the input.`
  }),
  // Q17: Scan until threshold
  (_i: number) => ({
    q: `What is i?\nnums = [2, 5, 3, 8, 1]\ni = 0\nwhile i < len(nums) and nums[i] < 8:\n    i += 1`,
    o: ["3", "4", "2", "0"],
    c: 0,
    e: "2<8, 5<8, 3<8 pass. nums[3]=8: 8<8 is False → stops at i=3.",
    de: `The loop scans forward until finding a value that is NOT less than 8. i=0: 2<8 (continue). i=1: 5<8 (continue). i=2: 3<8 (continue). i=3: 8<8 is False → exit. i=3 is the index of the first element ≥ 8. Short-circuit evaluation prevents index-out-of-bounds when i reaches len(nums).`
  }),
  // Q18: Conditional accumulator (positives only)
  (_i: number) => ({
    q: `What is total?\nnums = [3, -2, 5, -1, 4]\ntotal = 0\ni = 0\nwhile i < len(nums):\n    if nums[i] > 0:\n        total += nums[i]\n    i += 1`,
    o: ["12", "9", "15", "7"],
    c: 0,
    e: "Only positive values: 3 + 5 + 4 = 12. Negatives (-2, -1) are skipped.",
    de: `The loop visits every element but the if-guard only accumulates positive values. 3>0 → total=3. -2>0? No. 5>0 → total=8. -1>0? No. 4>0 → total=12. This selective accumulation pattern is equivalent to sum(x for x in nums if x > 0). The while loop processes all elements; the if controls which ones contribute to the sum.`
  }),
  // Q19: Factorial computation
  (_i: number) => ({
    q: `What is result?\nn = 5\nresult = 1\nwhile n > 1:\n    result *= n\n    n -= 1`,
    o: ["120", "24", "60", "5"],
    c: 0,
    e: "5! = 5×4×3×2 = 120. Loop stops when n=1 (1>1 is False).",
    de: `The loop computes n! by multiplying result by n and decrementing. result: 1*5=5, 5*4=20, 20*3=60, 60*2=120. At n=1, the condition n>1 is False so the loop stops. Note the loop doesn't multiply by 1 (unnecessary since x*1=x). This iterative approach avoids the stack overhead of recursive factorial.`
  }),
  // Q20: Manual integer division
  (_i: number) => ({
    q: `What is (count, a)?\na, b = 17, 5\ncount = 0\nwhile a >= b:\n    a -= b\n    count += 1`,
    o: ["(3, 2)", "(3, 0)", "(2, 7)", "(4, -3)"],
    c: 0,
    e: "17-5=12(1), 12-5=7(2), 7-5=2(3). 2<5 → stop. Quotient=3, remainder=2.",
    de: `This implements division via repeated subtraction. 17-5=12 (count=1), 12-5=7 (count=2), 7-5=2 (count=3). Now 2<5 so the loop exits. count=3 is the quotient (17//5=3) and a=2 is the remainder (17%5=2). This is how early computers performed division before hardware dividers existed. Verify: 5*3+2=17.`
  }),
  // Q21: Manual character find
  (_i: number) => ({
    q: `What is i?\ns = "abcdefg"\nch = "e"\ni = 0\nwhile i < len(s) and s[i] != ch:\n    i += 1`,
    o: ["4", "3", "5", "6"],
    c: 0,
    e: "Scans a(0), b(1), c(2), d(3) — none match 'e'. s[4]='e' → stop at i=4.",
    de: `This manually implements str.find(). The loop advances i while s[i] doesn't equal the target character. 'a'≠'e' (i=1), 'b'≠'e' (i=2), 'c'≠'e' (i=3), 'd'≠'e' (i=4). At i=4, s[4]='e'==ch so the condition s[i]!=ch is False and the loop exits. If ch weren't found, i would equal len(s). Equivalent to s.index("e").`
  }),
  // Q22: Decrementing countdown
  (_i: number) => ({
    q: `What is result?\nn = 5\nresult = []\nwhile n > 0:\n    result.append(n)\n    n -= 1`,
    o: ["[5, 4, 3, 2, 1]", "[1, 2, 3, 4, 5]", "[5, 4, 3, 2]", "[4, 3, 2, 1, 0]"],
    c: 0,
    e: "Appends 5, 4, 3, 2, 1 then n=0 exits. Counts down from 5.",
    de: `The loop appends n before decrementing. n=5→append 5, n=4→append 4, n=3→append 3, n=2→append 2, n=1→append 1, n=0→loop exits. Result is [5,4,3,2,1]. Note that 0 is NOT appended because the check n>0 happens before the body. Equivalent to list(range(5, 0, -1)).`
  }),
  // Q23: FizzBuzz 1-5
  (_i: number) => ({
    q: `What is result?\nresult = []\ni = 1\nwhile i <= 5:\n    if i % 3 == 0:\n        result.append("Fizz")\n    elif i % 5 == 0:\n        result.append("Buzz")\n    else:\n        result.append(str(i))\n    i += 1`,
    o: ['["1", "2", "Fizz", "4", "Buzz"]', '["1", "2", "3", "4", "5"]', '["Fizz", "Buzz", "Fizz", "Buzz", "FizzBuzz"]', '["1", "2", "Fizz", "4", "5"]'],
    c: 0,
    e: "1→'1', 2→'2', 3%3==0→'Fizz', 4→'4', 5%5==0→'Buzz'.",
    de: `Classic FizzBuzz: divisible by 3 → "Fizz", by 5 → "Buzz", otherwise the number as string. i=1: neither → "1". i=2: neither → "2". i=3: 3%3==0 → "Fizz". i=4: neither → "4". i=5: 5%5==0 → "Buzz". Note: 15 would match both, but elif means only "Fizz" fires. A full FizzBuzz usually checks divisible-by-15 first for "FizzBuzz".`
  }),
  // Q24: Two-pointer sum search
  (_i: number) => ({
    q: `What is (nums[lo], nums[hi])?\nnums = [1, 3, 5, 7, 9]\nlo, hi = 0, 4\ntarget = 8\nwhile lo < hi:\n    s = nums[lo] + nums[hi]\n    if s == target:\n        break\n    elif s < target:\n        lo += 1\n    else:\n        hi -= 1`,
    o: ["(1, 7)", "(3, 5)", "(1, 9)", "(5, 7)"],
    c: 0,
    e: "s=1+9=10>8→hi=3. s=1+7=8==target→break. Pair is (1, 7).",
    de: `The two-pointer technique works on sorted arrays. Start with lo=0, hi=4: sum=1+9=10>8, so hi decrements to 3. Now sum=1+7=8==target, so break. The pair (nums[0], nums[3]) = (1, 7) sums to 8. This O(n) algorithm avoids the O(n²) brute force of checking all pairs. It works because increasing lo raises the sum and decreasing hi lowers it.`
  }),
  // Q25: Merge two sorted lists
  (_i: number) => ({
    q: `What is result?\na = [1, 3, 5]\nb = [2, 4, 6]\nresult = []\ni = j = 0\nwhile i < len(a) and j < len(b):\n    if a[i] <= b[j]:\n        result.append(a[i])\n        i += 1\n    else:\n        result.append(b[j])\n        j += 1\nresult += a[i:] + b[j:]`,
    o: ["[1, 2, 3, 4, 5, 6]", "[1, 3, 5, 2, 4, 6]", "[2, 4, 6, 1, 3, 5]", "[1, 2, 3, 4, 5]"],
    c: 0,
    e: "Interleaves by comparing heads: 1,2,3,4,5 then appends remaining [6].",
    de: `Merge step of merge sort. Compare front elements of both lists, take the smaller. 1<=2→take 1. 3>2→take 2. 3<=4→take 3. 5>4→take 4. 5<=6→take 5. Now i=3 exits the loop (i<3 is False). Append remaining: a[3:]=[] and b[2:]=[6]. Final: [1,2,3,4,5,6]. This merge runs in O(n+m) time and is the key to merge sort's O(n log n) performance.`
  }),
  // Q26: Palindrome check
  (_i: number) => ({
    q: `What is is_pal?\ns = "racecar"\nlo, hi = 0, len(s) - 1\nis_pal = True\nwhile lo < hi:\n    if s[lo] != s[hi]:\n        is_pal = False\n        break\n    lo += 1\n    hi -= 1`,
    o: ["True", "False", '"racecar"', "Error"],
    c: 0,
    e: "r==r, a==a, c==c, then lo=hi=3 → loop exits. All matched → True.",
    de: `Two pointers move inward comparing characters. lo=0,hi=6: 'r'=='r' ✓. lo=1,hi=5: 'a'=='a' ✓. lo=2,hi=4: 'c'=='c' ✓. lo=3,hi=3: 3<3 is False → loop exits. No mismatch was found, so is_pal stays True. If any pair differed, is_pal would be set False and break would exit early. This O(n) algorithm checks palindromes in-place without reversing.`
  }),
];
