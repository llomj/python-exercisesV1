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
    de: `Python's tuple swap a, b = b, a+b evaluates the right side fully before assigning. This generates the Fibonacci sequence: starting from (0,1), each step sets a to the old b and b to the old a+b. After 5 iterations: (1,1)→(1,2)→(2,3)→(3,5)→(5,8). The variable a holds 5, which is the 5th Fibonacci number (0-indexed).`
  }),
  // Q80: continue skipping multiples of 3
  (_i: number) => ({
    q: `What is count?\ni = 0\ncount = 0\nwhile i < 10:\n    i += 1\n    if i % 3 == 0:\n        continue\n    count += 1\ncount`,
    o: ["7", "10", "3", "6"],
    c: 0,
    e: "i goes 1-10. continue skips count for i=3,6,9. count = 10 - 3 = 7.",
    de: `The continue statement skips the rest of the loop body. Here i increments first (1 through 10), then if i is divisible by 3, continue skips count += 1. Values skipped: 3, 6, 9 (three values). Out of 10 iterations, 7 reach count += 1. Note that i += 1 is placed before the continue check to avoid an infinite loop.`
  }),
  // Q81: Manual atoi (string to int)
  (_i: number) => ({
    q: `What is result?\ns = "385"\nresult = 0\ni = 0\nwhile i < len(s):\n    result = result * 10 + int(s[i])\n    i += 1\nresult`,
    o: ["385", "16", "38", "Error"],
    c: 0,
    e: "Horner's method: 0→3→38→385. Builds the integer digit by digit.",
    de: `This implements atoi (ASCII to integer) using Horner's method. Each iteration multiplies the accumulator by 10 and adds the next digit: 0*10+3=3, 3*10+8=38, 38*10+5=385. This left-to-right processing avoids computing powers of 10 explicitly. It's the same algorithm Python's int() uses internally for decimal strings.`
  }),
  // Q82: Int to string conversion
  (_i: number) => ({
    q: `What is result?\nn = 407\nresult = ""\nwhile n > 0:\n    result = str(n % 10) + result\n    n //= 10\nresult`,
    o: ['"407"', '"704"', '"47"', "Error"],
    c: 0,
    e: "Extracts digits right-to-left and prepends: 7→07→407.",
    de: `This converts an integer to its string representation by extracting digits via modulo and prepending each one. 407%10=7→"7", 40%10=0→"07", 4%10=4→"407". Prepending (str(n%10) + result) reverses the extraction order so digits appear correctly. The zero in 407 is preserved because str(0)="0". Equivalent to str(407).`
  }),
  // Q83: Largest power of 2 not exceeding n
  (_i: number) => ({
    q: `What is p?\nn = 50\np = 1\nwhile p * 2 <= n:\n    p *= 2\np`,
    o: ["32", "64", "16", "50"],
    c: 0,
    e: "Doubling: 1→2→4→8→16→32. Next would be 64 > 50, so loop stops at p=32.",
    de: `This finds the largest power of 2 that doesn't exceed n. The condition p*2 <= n checks whether doubling would still fit. Sequence: 1→2→4→8→16→32. At p=32, p*2=64 > 50, so the loop exits. This is useful in binary algorithms and memory allocation. Here floor(log₂(50))=5, and 2⁵=32.`
  }),
  // Q84: Dutch national flag partition
  (_i: number) => ({
    q: `What is arr?\narr = [2, 0, 1, 2, 0]\nlo, mid, hi = 0, 0, 4\nwhile mid <= hi:\n    if arr[mid] == 0:\n        arr[lo], arr[mid] = arr[mid], arr[lo]\n        lo += 1\n        mid += 1\n    elif arr[mid] == 1:\n        mid += 1\n    else:\n        arr[mid], arr[hi] = arr[hi], arr[mid]\n        hi -= 1\narr`,
    o: ["[0, 0, 1, 2, 2]", "[0, 1, 0, 2, 2]", "[2, 2, 1, 0, 0]", "[0, 0, 2, 1, 2]"],
    c: 0,
    e: "Three-way partition sorts 0s left, 1s middle, 2s right in one pass.",
    de: `The Dutch national flag algorithm uses three pointers: lo (boundary of 0s), mid (current), hi (boundary of 2s). When arr[mid]==0, swap to lo region and advance both; when 2, swap to hi region and shrink hi; when 1, just advance mid. After processing [2,0,1,2,0]: all 0s end up before 1s before 2s in O(n) time. This is the partition step used in 3-way quicksort.`
  }),
  // Q85: Augmented assignment operators
  (_i: number) => ({
    q: `What is x?\nx = 2\nx **= 3\nx %= 5\nx *= 7\nx`,
    o: ["21", "56", "3", "8"],
    c: 0,
    e: "Step by step: x=2, x**=3→8, x%=5→3, x*=7→21.",
    de: `Augmented assignments modify a variable in place. x=2: x**=3 computes 2³=8. x%=5 computes 8%5=3 (remainder). x*=7 computes 3×7=21. Each operator (**=, %=, *=) combines an arithmetic operation with assignment. The evaluation order is strictly left-to-right, and changing the sequence changes the result entirely.`
  }),
  // Q86: LCM via Euclidean GCD
  (_i: number) => ({
    q: `What is lcm?\na, b = 12, 8\nx, y = a, b\nwhile y:\n    x, y = y, x % y\nlcm = a * b // x\nlcm`,
    o: ["24", "96", "48", "4"],
    c: 0,
    e: "GCD(12,8): 12,8→8,4→4,0. GCD=4. LCM = 12×8÷4 = 24.",
    de: `The Euclidean algorithm finds GCD by repeatedly replacing (x,y) with (y, x%y) until y=0. For 12,8: (12,8)→(8,4)→(4,0). GCD=4. The LCM formula is a*b//gcd(a,b) = 12*8//4 = 24. This works because LCM×GCD = a×b for any two positive integers. The while y: idiom leverages Python's truthiness — 0 is falsy, ending the loop.`
  }),
  // Q87: Digit frequency counter
  (_i: number) => ({
    q: `What is freq?\nn = 112233\nfreq = {}\nwhile n > 0:\n    d = n % 10\n    freq[d] = freq.get(d, 0) + 1\n    n //= 10\nfreq`,
    o: ["{3: 2, 2: 2, 1: 2}", "{1: 1, 2: 1, 3: 1}", "{112233: 1}", "Error"],
    c: 0,
    e: "Extracts digits right-to-left: 3,3,2,2,1,1. Each digit appears twice.",
    de: `This counts digit occurrences using dict.get(key, default). Processing 112233 from right: 3(×1), 3(×2), 2(×1), 2(×2), 1(×1), 1(×2). Dict insertion order reflects processing order: {3:2, 2:2, 1:2}. The get(d, 0) pattern safely handles the first occurrence by defaulting to 0. Equivalent to collections.Counter(str(n)) but with int keys.`
  }),
  // Q88: Short-circuit evaluation in while condition
  (_i: number) => ({
    q: `What is i?\nlst = [1, 2, 3, 0, 5]\ni = 0\nwhile i < len(lst) and lst[i] != 0:\n    i += 1\ni`,
    o: ["3", "4", "0", "5"],
    c: 0,
    e: "Scans until finding 0: indices 0(1), 1(2), 2(3) pass, index 3 has 0 → stop. i=3.",
    de: `Short-circuit evaluation means 'and' stops at the first False. The condition i < len(lst) is checked first — if False, lst[i] is never evaluated (preventing IndexError). The loop advances while elements are nonzero: lst[0]=1, lst[1]=2, lst[2]=3 all pass. At i=3, lst[3]=0 fails the !=0 check, so the loop exits with i=3. This is a safe sentinel-search pattern.`
  }),
  // Q89: Stack-based postfix evaluation
  (_i: number) => ({
    q: `What is stack?\ntokens = [3, 4, "+", 2, "*"]\nstack = []\ni = 0\nwhile i < len(tokens):\n    t = tokens[i]\n    if isinstance(t, int):\n        stack.append(t)\n    else:\n        b, a = stack.pop(), stack.pop()\n        if t == "+":\n            stack.append(a + b)\n        elif t == "*":\n            stack.append(a * b)\n    i += 1\nstack`,
    o: ["[14]", "[7, 2]", "[3, 4, 2]", "Error"],
    c: 0,
    e: "Push 3, push 4, '+': 3+4=7, push 2, '*': 7×2=14. stack=[14].",
    de: `Postfix (Reverse Polish) notation evaluates without parentheses using a stack. Numbers are pushed; operators pop two operands and push the result. Trace: push 3→[3], push 4→[3,4], '+'→pop 4 and 3, push 7→[7], push 2→[7,2], '*'→pop 2 and 7, push 14→[14]. Note b,a = pop(),pop() ensures correct operand order for non-commutative operations.`
  }),
  // Q90: Manual CSV parsing
  (_i: number) => ({
    q: `What is len(parts)?\ns = "a,bb,ccc"\nparts = []\nstart = 0\ni = 0\nwhile i <= len(s):\n    if i == len(s) or s[i] == ",":\n        parts.append(s[start:i])\n        start = i + 1\n    i += 1\nlen(parts)`,
    o: ["3", "7", "2", "Error"],
    c: 0,
    e: 'Splits at commas and end-of-string: "a", "bb", "ccc" → 3 parts.',
    de: `This CSV parser scans character by character, splitting at commas. The key trick is i <= len(s) with an i == len(s) check to capture the last field after the final comma. At i=1 (comma): s[0:1]="a". At i=4 (comma): s[2:4]="bb". At i=8 (end): s[5:8]="ccc". Result: ["a","bb","ccc"], length 3. This is how str.split(",") works internally.`
  }),
  // Q91: Substring pattern search
  (_i: number) => ({
    q: `What is found?\ntext = "abcabc"\npat = "cab"\ni = 0\nfound = -1\nwhile i <= len(text) - len(pat):\n    if text[i:i+len(pat)] == pat:\n        found = i\n        break\n    i += 1\nfound`,
    o: ["2", "3", "-1", "0"],
    c: 0,
    e: 'text[0:3]="abc"≠"cab", text[1:4]="bca"≠"cab", text[2:5]="cab"=="cab" → found=2.',
    de: `This naive string search slides a window of length len(pat) across text, comparing at each position. At i=0: "abc"≠"cab". At i=1: "bca"≠"cab". At i=2: "cab"=="cab" → found=2, break. This O(n×m) algorithm is equivalent to text.find(pat). More efficient algorithms like KMP or Boyer-Moore avoid re-checking characters after partial matches.`
  }),
  // Q92: De Morgan's law in while condition
  (_i: number) => ({
    q: `What is x?\nx = 1\nwhile not (x >= 4 or x <= 0):\n    x += 1\nx`,
    o: ["4", "5", "3", "0"],
    c: 0,
    e: "not(x>=4 or x<=0) ≡ x<4 and x>0. Loop runs while 0<x<4: x goes 1→2→3→4, then stops.",
    de: `De Morgan's law: not(A or B) ≡ (not A) and (not B). So not(x>=4 or x<=0) equals x<4 and x>0. The loop continues while x is in the open interval (0,4). Starting at x=1: increments to 2, 3, 4. At x=4: 4>=4 makes the 'or' True, so 'not' gives False and the loop exits. Understanding De Morgan's transforms helps simplify complex boolean conditions.`
  }),
  // Q93: Contiguous subsequence detection
  (_i: number) => ({
    q: `What is (found, i)?\ndata = [1, 3, 5, 3, 5, 3]\ntarget = [3, 5, 3]\ni = 0\nfound = False\nwhile i <= len(data) - len(target):\n    if data[i:i+len(target)] == target:\n        found = True\n        break\n    i += 1\n(found, i)`,
    o: ["(True, 1)", "(True, 3)", "(False, 4)", "(True, 0)"],
    c: 0,
    e: "data[0:3]=[1,3,5]≠target. data[1:4]=[3,5,3]==target → found=True at i=1.",
    de: `This searches for a contiguous subsequence using a sliding window. At i=0: [1,3,5]≠[3,5,3]. At i=1: [3,5,3]==[3,5,3] → match found, break with i=1. The condition i <= len(data)-len(target) ensures the window never exceeds list bounds. This is the list equivalent of str.find() and runs in O(n×m) time where n and m are the list and pattern lengths.`
  }),
  // Q94: Multiple accumulators in single pass
  (_i: number) => ({
    q: `What is (total, mx)?\nnums = [3, 1, 4, 1, 5]\ntotal = 0\nmx = nums[0]\ni = 0\nwhile i < len(nums):\n    total += nums[i]\n    if nums[i] > mx:\n        mx = nums[i]\n    i += 1\n(total, mx)`,
    o: ["(14, 5)", "(14, 3)", "(5, 14)", "(10, 5)"],
    c: 0,
    e: "total = 3+1+4+1+5 = 14. mx tracks max: 3→3→4→4→5. Result: (14, 5).",
    de: `Using multiple accumulators in a single pass computes several aggregates simultaneously. total sums all elements: 3+1+4+1+5=14. mx tracks the running maximum: starts at 3, updates to 4 at index 2, then to 5 at index 4. This single-pass approach is O(n) versus two separate traversals. Python's built-in equivalents are sum() and max().`
  }),
  // Q95: Polynomial rolling hash with modulo
  (_i: number) => ({
    q: `What is h?\ns = "abc"\nh = 0\ni = 0\nwhile i < len(s):\n    h = (h * 31 + ord(s[i])) % 1000\n    i += 1\nh`,
    o: ["354", "105", "97", "296"],
    c: 0,
    e: "h=97, then (97×31+98)%1000=105, then (105×31+99)%1000=354.",
    de: `This polynomial rolling hash multiplies by a prime (31) and adds each character's ordinal value, with modulo to prevent overflow. h=(0*31+97)%1000=97 for 'a'. h=(97*31+98)%1000=3105%1000=105 for 'b'. h=(105*31+99)%1000=3354%1000=354 for 'c'. The prime 31 is used by Java's String.hashCode(). Modulo keeps values bounded for hash table indexing.`
  }),
  // Q96: String reversal via index arithmetic
  (_i: number) => ({
    q: `What is result?\ns = "hello"\ni = 0\nresult = ""\nwhile i < len(s):\n    result += s[len(s)-1-i]\n    i += 1\nresult`,
    o: ['"olleh"', '"hello"', '"oellh"', '"lehol"'],
    c: 0,
    e: 'Reads from end: s[4]=\'o\', s[3]=\'l\', s[2]=\'l\', s[1]=\'e\', s[0]=\'h\' → "olleh".',
    de: `This reverses a string by reading characters from the end using len(s)-1-i as the index. When i=0: s[4]='o', i=1: s[3]='l', i=2: s[2]='l', i=3: s[1]='e', i=4: s[0]='h'. Appending builds "olleh". The Pythonic equivalent is s[::-1]. String concatenation in a loop is O(n²) due to immutability; using a list with ''.join() is the O(n) alternative.`
  }),
  // Q97: Decimal to hexadecimal conversion
  (_i: number) => ({
    q: `What is result?\nn = 255\nresult = ""\nwhile n > 0:\n    d = n % 16\n    result = "0123456789abcdef"[d] + result\n    n //= 16\nresult`,
    o: ['"ff"', '"f15"', '"255"', '"1f"'],
    c: 0,
    e: '255%16=15→\'f\', 255//16=15. 15%16=15→\'f\', 15//16=0. result="ff".',
    de: `Hex conversion uses base-16 division: n%16 gives the hex digit (0-15 mapped to '0'-'f' via string indexing), and n//16 removes the last hex digit. For 255: 255%16=15→'f', n=15. 15%16=15→'f', n=0. Prepending builds "f"→"ff". Verify: 15×16+15=255=0xFF. This lookup-string approach avoids if-else chains for digit mapping. Equivalent to hex(255)[2:].`
  }),
  // Q98: Nested while loops for matrix flattening
  (_i: number) => ({
    q: `What is flat?\nmatrix = [[1, 2], [3], [4, 5]]\nflat = []\ni = 0\nwhile i < len(matrix):\n    j = 0\n    while j < len(matrix[i]):\n        flat.append(matrix[i][j])\n        j += 1\n    i += 1\nflat`,
    o: ["[1, 2, 3, 4, 5]", "[[1, 2], [3], [4, 5]]", "[1, 2, 3, 4, 5, 6]", "Error"],
    c: 0,
    e: "Outer loop iterates rows, inner loop iterates elements: [1,2]+[3]+[4,5] = [1,2,3,4,5].",
    de: `Nested while loops flatten a 2D list by iterating each row (outer) and each element within the row (inner). Row 0: append 1, 2. Row 1: append 3. Row 2: append 4, 5. Result: [1,2,3,4,5]. The inner counter j resets to 0 for each new row, and rows can have different lengths (jagged array). The Pythonic equivalent is [x for row in matrix for x in row].`
  }),
  // Q99: Chained comparison in while condition
  (_i: number) => ({
    q: `What is x?\nx = 1\nwhile 1 <= x <= 5:\n    x *= 2\nx`,
    o: ["8", "16", "4", "6"],
    c: 0,
    e: "x=1: 1<=1<=5 True→x=2. 1<=2<=5→x=4. 1<=4<=5→x=8. 1<=8<=5 False→stop. x=8.",
    de: `Python's chained comparison 1 <= x <= 5 is equivalent to (1 <= x) and (x <= 5). The loop doubles x each iteration: 1→2→4→8. At x=8: 1<=8 is True but 8<=5 is False, so the chain evaluates to False and the loop exits. Chained comparisons are more readable than explicit 'and' conjunctions and are a unique Python feature not available in most other languages.`
  }),
  // Q100: Greedy coin change algorithm
  (_i: number) => ({
    q: `What is count?\namount = 67\ncoins = [25, 10, 5, 1]\ncount = 0\ni = 0\nwhile amount > 0:\n    if amount >= coins[i]:\n        amount -= coins[i]\n        count += 1\n    else:\n        i += 1\ncount`,
    o: ["6", "4", "7", "67"],
    c: 0,
    e: "67: two 25s(17 left), one 10(7), one 5(2), two 1s(0). Total coins: 2+1+1+2=6.",
    de: `The greedy coin change algorithm always picks the largest coin that fits. For 67 cents: two 25s (count=2, left=17), one 10 (count=3, left=7), one 5 (count=4, left=2), two 1s (count=6, left=0). Total 6 coins. Greedy works optimally for US denominations but fails for arbitrary coin sets — e.g., coins=[1,3,4] with amount=6 needs dynamic programming.`
  }),
  // Q101: Triangular number / pyramid row count
  (_i: number) => ({
    q: `What is rows?\nrows = 0\ntotal = 0\nwhile total + rows + 1 <= 15:\n    rows += 1\n    total += rows\nrows`,
    o: ["5", "4", "6", "15"],
    c: 0,
    e: "Row sums: 1, 3, 6, 10, 15. Adding row 6 would give 21 > 15. rows=5.",
    de: `This computes how many complete rows fit in a pyramid where row k has k items. The condition total+rows+1 <= 15 checks if the next row fits. Rows added: 1(total=1), 2(3), 3(6), 4(10), 5(15). Row 6 would need total=21 > 15, so the loop stops. The total after k rows is k(k+1)/2 — the kth triangular number. T(5)=15 fits exactly within the limit.`
  }),
  // Q102: Generator exhaustion with while/try/except
  (_i: number) => ({
    q: `What is total?\ndef gen():\n    yield 1\n    yield 2\n    yield 3\ng = gen()\ntotal = 0\nwhile True:\n    try:\n        total += next(g)\n    except StopIteration:\n        break\ntotal`,
    o: ["6", "3", "Error", "0"],
    c: 0,
    e: "Generator yields 1, 2, 3 then raises StopIteration → break. total = 1+2+3 = 6.",
    de: `Generators produce values lazily via yield. Calling next(g) resumes execution until the next yield. After all yields are exhausted, next() raises StopIteration. The while True + try/except pattern manually consumes the generator: 1+2+3=6. This is exactly what a for loop does internally — for x in gen() is syntactic sugar for this try/except/StopIteration protocol.`
  }),
  // Q103: Parenthesis nesting depth tracker
  (_i: number) => ({
    q: `What is max_d?\ns = "(()())"\ndepth = 0\nmax_d = 0\ni = 0\nwhile i < len(s):\n    if s[i] == "(":\n        depth += 1\n        max_d = max(max_d, depth)\n    else:\n        depth -= 1\n    i += 1\nmax_d`,
    o: ["2", "3", "1", "0"],
    c: 0,
    e: "Depth trace: 1, 2, 1, 2, 1, 0. Maximum depth reached is 2.",
    de: `This tracks parenthesis nesting by incrementing depth on '(' and decrementing on ')'. For "(()())": '('→1, '('→2, ')'→1, '('→2, ')'→1, ')'→0. max_d captures the peak depth of 2. This is used in expression parsers to determine nesting complexity. If depth ever goes negative, there's an unmatched closer; if it ends nonzero, there are unmatched openers.`
  }),
  // Q104: Round-robin task scheduling
  (_i: number) => ({
    q: `What is turns?\ntasks = [3, 2, 1]\nturns = 0\nwhile any(t > 0 for t in tasks):\n    for i in range(len(tasks)):\n        if tasks[i] > 0:\n            tasks[i] -= 1\n            turns += 1\nturns`,
    o: ["6", "3", "9", "5"],
    c: 0,
    e: "Round 1: 3 tasks done. Round 2: 2 done. Round 3: 1 done. Total = 3+2+1 = 6.",
    de: `Round-robin scheduling gives each task one unit of work per round. Round 1: all three tasks run → [2,1,0], turns=3. Round 2: first two run → [1,0,0], turns=5. Round 3: only first runs → [0,0,0], turns=6. Total turns equals sum(tasks) = 3+2+1 = 6. The any() generator checks if work remains. This models CPU time-slicing in operating systems.`
  }),
];
