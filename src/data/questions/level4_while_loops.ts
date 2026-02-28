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
    de: `Newton's method for integer square root repeatedly refines a guess using the formula (guess + n // guess) // 2. Starting with guess=36: (36+1)//2=18, then (18+2)//2=10, then (10+3)//2=6. At guess=6, 6*6=36 which is NOT >36, so the loop exits. This converges in O(log n) steps and is how math.isqrt works internally.`
  }),
  // Q28: While loop with flag variable pattern
  (_i: number) => ({
    q: `What is (found, idx)?\nnums = [4, 7, 2, 9, 1]\nfound = False\nidx = 0\nwhile not found and idx < len(nums):\n    if nums[idx] > 8:\n        found = True\n    else:\n        idx += 1\n(found, idx)`,
    o: ["(True, 3)", "(True, 4)", "(False, 5)", "(True, 0)"],
    c: 0,
    e: "Scans until finding >8: 4(no), 7(no), 2(no), 9(yes) at index 3.",
    de: `The flag variable pattern uses a boolean to control loop termination. The loop checks two conditions: not found AND idx < len. Elements 4, 7, 2 fail the >8 test so idx increments. At idx=3, nums[3]=9 > 8, so found=True. Note: idx is NOT incremented in the True branch, so it stays at 3 — the index where the value was found.`
  }),
  // Q29: While loop implementing exponential backoff steps
  (_i: number) => ({
    q: `What is total?\ndelay = 1\ntotal = 0\nwhile delay <= 16:\n    total += delay\n    delay *= 2\ntotal`,
    o: ["31", "16", "32", "15"],
    c: 0,
    e: "Adds 1+2+4+8+16=31. Each step doubles the delay.",
    de: `Exponential backoff doubles the wait time each iteration: 1, 2, 4, 8, 16. The sum 1+2+4+8+16 = 31 (which equals 2^5 - 1). After adding 16, delay becomes 32 which exceeds 16, ending the loop. This pattern is used in network retries and rate limiting — each failed attempt waits exponentially longer before retrying.`
  }),
  // Q30: While loop processing digits of a number (sum of digits)
  (_i: number) => ({
    q: `What is total?\nn = 9473\ntotal = 0\nwhile n > 0:\n    total += n % 10\n    n //= 10\ntotal`,
    o: ["23", "24", "9", "4"],
    c: 0,
    e: "Extracts digits right-to-left: 3+7+4+9 = 23.",
    de: `This extracts digits using modulo and integer division. n%10 gives the last digit, n//=10 removes it. Step by step: 9473%10=3 (total=3), 947%10=7 (total=10), 94%10=4 (total=14), 9%10=9 (total=23), 0>0 stops. This is the standard digit-processing pattern — works for any positive integer regardless of digit count.`
  }),
  // Q31: While loop implementing repeated halving
  (_i: number) => ({
    q: `What is steps?\nn = 100\nsteps = 0\nwhile n > 1:\n    n //= 2\n    steps += 1\nsteps`,
    o: ["6", "7", "50", "100"],
    c: 0,
    e: "100→50→25→12→6→3→1 takes 6 halvings.",
    de: `Repeated halving with integer division: 100→50→25→12→6→3→1. Each step divides by 2 (rounding down). After 6 steps n=1, and 1>1 is False so the loop exits. This computes floor(log₂(n)), which is fundamental to binary search complexity. For n=100, floor(log₂(100)) = 6.`
  }),
  // Q32: While loop with walrus operator
  (_i: number) => ({
    q: `What is val?\ndata = [1, 3, 5, 7, 2, 4]\nidx = 0\nwhile (val := data[idx]) % 2 != 0:\n    idx += 1\nval`,
    o: ["2", "7", "4", "1"],
    c: 0,
    e: "The walrus operator assigns each element to val; first even value (2) stops the loop.",
    de: `The walrus operator (:=) assigns data[idx] to val inside the while condition. Each iteration: val=1 (odd, continue), val=3 (odd), val=5 (odd), val=7 (odd), val=2 (even, 2%2==0, condition False, loop exits). val retains the value 2 — the first even number. Without :=, you'd need to assign val before and inside the loop.`
  }),
  // Q33: While loop implementing Caesar cipher shift
  (_i: number) => ({
    q: `What is result?\ntext = "hello"\nresult = ""\ni = 0\nshift = 3\nwhile i < len(text):\n    ch = text[i]\n    result += chr((ord(ch) - 97 + shift) % 26 + 97)\n    i += 1\nresult`,
    o: ['"khoor"', '"ebiil"', '"lipps"', '"ifmmp"'],
    c: 0,
    e: "Each letter shifts +3: h→k, e→h, l→o, l→o, o→r.",
    de: `Caesar cipher shifts each letter by a fixed amount. The formula (ord(ch)-97+shift)%26+97 normalizes to 0-25, adds the shift, wraps with modulo, then converts back. h(7)→k(10), e(4)→h(7), l(11)→o(14), l→o, o(14)→r(17). The %26 ensures wrapping: z+3 would become c. This is one of the oldest encryption algorithms.`
  }),
  // Q34: While loop converting decimal to binary string
  (_i: number) => ({
    q: `What is bits?\nn = 13\nbits = ""\nwhile n > 0:\n    bits = str(n % 2) + bits\n    n //= 2\nbits`,
    o: ['"1101"', '"1011"', '"1110"', '"1010"'],
    c: 0,
    e: "13 in binary: 13%2=1, 6%2=0, 3%2=1, 1%2=1 → prepend gives '1101'.",
    de: `Converting decimal to binary extracts bits via repeated %2 and //2. Crucially, each new digit is prepended (str(n%2) + bits) because we extract the least significant bit first. 13→1(rem), 6→0, 3→1, 1→1. Prepending builds "1"→"01"→"101"→"1101". Verify: 8+4+0+1=13. Equivalent to bin(13)[2:].`
  }),
  // Q35: While loop converting binary string to decimal
  (_i: number) => ({
    q: `What is decimal?\nbinary = "1011"\ndecimal = 0\ni = 0\nwhile i < len(binary):\n    decimal = decimal * 2 + int(binary[i])\n    i += 1\ndecimal`,
    o: ["11", "13", "1011", "8"],
    c: 0,
    e: "Horner's method: 0→1→2→5→11. Binary 1011 = 8+2+1 = 11.",
    de: `This uses Horner's method to convert binary to decimal by processing digits left-to-right. Each step: multiply accumulator by 2 and add the current bit. 0*2+1=1, 1*2+0=2, 2*2+1=5, 5*2+1=11. This avoids computing powers of 2 explicitly. Verify: 1*8 + 0*4 + 1*2 + 1*1 = 11. Equivalent to int("1011", 2).`
  }),
  // Q36: While loop implementing run-length encoding
  (_i: number) => ({
    q: `What is result?\ns = "aaabbc"\nresult = ""\ni = 0\nwhile i < len(s):\n    ch = s[i]\n    count = 0\n    while i < len(s) and s[i] == ch:\n        count += 1\n        i += 1\n    result += ch + str(count)\nresult`,
    o: ['"a3b2c1"', '"abc321"', '"a3b2c"', '"3a2b1c"'],
    c: 0,
    e: "Inner loop counts consecutive chars: 3 a's, 2 b's, 1 c.",
    de: `Run-length encoding compresses by replacing runs with char+count. The outer loop picks the current character, the inner loop counts how many consecutive copies exist while advancing i. 'aaa'→a3, 'bb'→b2, 'c'→c1. Note i is shared between loops — the inner loop advances i, so the outer loop resumes at the next different character.`
  }),
  // Q37: While loop implementing simple parser (matching brackets)
  (_i: number) => ({
    q: `What is depth?\ns = "(()()" \ndepth = 0\ni = 0\nwhile i < len(s):\n    if s[i] == "(":\n        depth += 1\n    else:\n        depth -= 1\n    i += 1\ndepth`,
    o: ["1", "0", "2", "-1"],
    c: 0,
    e: "Tracking opens/closes: +1+1-1+1-1 = 1. One unmatched open bracket.",
    de: `This bracket parser tracks nesting depth: '(' increments, ')' decrements. Walking through "(()()": depth goes 1→2→1→2→1. Final depth=1 means one unmatched opening bracket. If depth were 0, brackets would be balanced. If depth went negative at any point, there would be a closing bracket without a matching opener.`
  }),
  // Q38: While loop with deque rotation
  (_i: number) => ({
    q: `What is list(d)?\nfrom collections import deque\nd = deque([1, 2, 3, 4, 5])\nsteps = 0\nwhile steps < 2:\n    d.appendleft(d.pop())\n    steps += 1\nlist(d)`,
    o: ["[4, 5, 1, 2, 3]", "[3, 4, 5, 1, 2]", "[5, 1, 2, 3, 4]", "[2, 3, 4, 5, 1]"],
    c: 0,
    e: "Each iteration moves the last element to the front. After 2 steps: [4,5,1,2,3].",
    de: `pop() removes the rightmost element and appendleft() inserts it at the left — a right rotation. Step 1: pop 5, prepend → [5,1,2,3,4]. Step 2: pop 4, prepend → [4,5,1,2,3]. This is equivalent to d.rotate(2). Deque operations are O(1) at both ends, unlike list.insert(0, x) which is O(n).`
  }),
  // Q39: While loop implementing insertion sort step
  (_i: number) => ({
    q: `What is arr?\narr = [3, 1, 4, 1, 5]\nkey = arr[1]\nj = 0\nwhile j >= 0 and arr[j] > key:\n    arr[j + 1] = arr[j]\n    j -= 1\narr[j + 1] = key\narr`,
    o: ["[1, 3, 4, 1, 5]", "[1, 1, 3, 4, 5]", "[3, 1, 4, 1, 5]", "Error"],
    c: 0,
    e: "key=1, arr[0]=3>1 so shift right, then insert key at position 0.",
    de: `This is one step of insertion sort: inserting arr[1] into its correct position among sorted elements to the left. key=1, j=0: arr[0]=3 > 1, so shift 3 right (arr[1]=3), j=-1. Loop exits (j<0). arr[j+1]=arr[0]=key=1. Result: [1,3,4,1,5]. Only the first two elements are now sorted — full insertion sort repeats this for each position.`
  }),
  // Q40: While loop implementing selection of minimum
  (_i: number) => ({
    q: `What is min_idx?\nnums = [5, 2, 8, 1, 9]\nmin_idx = 0\ni = 1\nwhile i < len(nums):\n    if nums[i] < nums[min_idx]:\n        min_idx = i\n    i += 1\nmin_idx`,
    o: ["3", "1", "0", "4"],
    c: 0,
    e: "Scanning for minimum: 5, then 2<5 (idx 1), then 1<2 (idx 3). Min is at index 3.",
    de: `Selection sort's inner loop finds the index of the minimum element. Starting with min_idx=0 (value 5): i=1, 2<5 → min_idx=1. i=2, 8<2? No. i=3, 1<2 → min_idx=3. i=4, 9<1? No. The minimum value 1 is at index 3. Selection sort would then swap nums[0] with nums[3]. This linear scan is O(n).`
  }),
  // Q41: While loop with timeout simulation (max iterations)
  (_i: number) => ({
    q: `What is (x, count)?\nx = 256\ncount = 0\nmax_iter = 20\nwhile x != 1 and count < max_iter:\n    if x % 2 == 0:\n        x //= 2\n    else:\n        x = 3 * x + 1\n    count += 1\n(x, count)`,
    o: ["(1, 8)", "(1, 20)", "(2, 7)", "(128, 1)"],
    c: 0,
    e: "256 is 2⁸, so halving 8 times reaches 1. The max_iter guard isn't triggered.",
    de: `This implements the Collatz sequence with a safety limit. Since 256=2⁸, only the even branch fires: 256→128→64→32→16→8→4→2→1, taking exactly 8 steps. The max_iter=20 guard prevents infinite loops for sequences that might not converge (the Collatz conjecture is unproven). With x=1, the condition x!=1 becomes False and the loop exits cleanly.`
  }),
  // Q42: While loop implementing string compression
  (_i: number) => ({
    q: `What is result?\ns = "aabcccdd"\nresult = ""\ni = 0\nwhile i < len(s):\n    j = i\n    while j < len(s) and s[j] == s[i]:\n        j += 1\n    count = j - i\n    result += s[i] + (str(count) if count > 1 else "")\n    i = j\nresult`,
    o: ['"a2bc3d2"', '"a2b1c3d2"', '"aabcccdd"', '"2a1b3c2d"'],
    c: 0,
    e: "Only appends count when >1: a×2→a2, b×1→b, c×3→c3, d×2→d2.",
    de: `This compression variant only includes the count when a run exceeds length 1 — the standard interview-style string compression. The inner while loop measures each run's length. For 'aa' (count=2): "a2". For 'b' (count=1): just "b" (no number). For 'ccc': "c3". For 'dd': "d2". If the compressed string is longer than the original, real implementations return the original.`
  }),
  // Q43: While loop removing consecutive duplicates
  (_i: number) => ({
    q: `What is result?\ns = "aabbccaab"\nresult = ""\ni = 0\nwhile i < len(s):\n    if i == 0 or s[i] != s[i-1]:\n        result += s[i]\n    i += 1\nresult`,
    o: ['"abcab"', '"abc"', '"aabbccaab"', '"abca"'],
    c: 0,
    e: "Keeps only the first of each consecutive run: aa→a, bb→b, cc→c, aa→a, b→b.",
    de: `This removes consecutive duplicates by comparing each character with its predecessor. The first character always passes (i==0). After that, only characters different from the previous one are kept. 'aabbccaab' → a(keep), a(dup), b(keep), b(dup), c(keep), c(dup), a(keep), a(dup), b(keep) = "abcab". Note: non-consecutive duplicates like the second 'a' are preserved.`
  }),
  // Q44: While loop implementing prime check
  (_i: number) => ({
    q: `What is is_prime?\nn = 29\nis_prime = n > 1\nd = 2\nwhile d * d <= n:\n    if n % d == 0:\n        is_prime = False\n        break\n    d += 1\nis_prime`,
    o: ["True", "False", "29", "Error"],
    c: 0,
    e: "29 is not divisible by 2, 3, 4, or 5. Since 6²=36>29, the loop ends. Prime!",
    de: `Trial division checks divisors up to √n. For n=29: d=2 (29%2≠0), d=3 (29%3≠0), d=4 (29%4≠0), d=5 (29%5≠0). At d=6, 36>29 so the loop exits without finding a factor. The d*d<=n optimization avoids computing sqrt — if n=a×b and a≤b, then a≤√n. This reduces the check from O(n) to O(√n) divisors.`
  }),
  // Q45: While loop implementing Sieve idea (marking composites)
  (_i: number) => ({
    q: `What is sum(sieve)?\nn = 20\nsieve = [True] * (n + 1)\nsieve[0] = sieve[1] = False\np = 2\nwhile p * p <= n:\n    if sieve[p]:\n        m = p * p\n        while m <= n:\n            sieve[m] = False\n            m += p\n    p += 1\nsum(sieve)`,
    o: ["8", "9", "10", "20"],
    c: 0,
    e: "Primes up to 20: 2, 3, 5, 7, 11, 13, 17, 19 — eight primes.",
    de: `The Sieve of Eratosthenes marks composite numbers as False. Starting from p=2, it marks multiples of each prime (starting at p²) as composite. p=2 marks 4,6,8,...,20. p=3 marks 9,12,15,18. p=4 is already False (skipped). p=5: 25>20, loop ends. The remaining True positions are primes: {2,3,5,7,11,13,17,19}. sum(sieve) counts True values = 8.`
  }),
  // Q46: While loop with enumerate-like counter
  (_i: number) => ({
    q: `What is result?\nitems = ["a", "b", "c", "d"]\nidx = 0\nresult = {}\nwhile idx < len(items):\n    result[idx] = items[idx]\n    idx += 1\nresult`,
    o: ["{0: 'a', 1: 'b', 2: 'c', 3: 'd'}", "{'a': 0, 'b': 1, 'c': 2, 'd': 3}", "['a', 'b', 'c', 'd']", "Error"],
    c: 0,
    e: "Manually pairs index with value: 0→'a', 1→'b', 2→'c', 3→'d'.",
    de: `This while loop manually replicates enumerate() by maintaining an index counter. Each iteration maps the integer index to the list element: {0:'a', 1:'b', 2:'c', 3:'d'}. Note the keys are integers, not the items themselves. The Pythonic equivalent is dict(enumerate(items)). While loops require explicit counter management unlike for+enumerate.`
  }),
  // Q47: While loop over iterator with next() and StopIteration
  (_i: number) => ({
    q: `What is total?\nit = iter([10, 20, 30])\ntotal = 0\nwhile True:\n    try:\n        total += next(it)\n    except StopIteration:\n        break\ntotal`,
    o: ["60", "30", "10", "Error"],
    c: 0,
    e: "next() yields 10, 20, 30 then raises StopIteration → break. Total = 60.",
    de: `This is the manual iteration protocol that for loops use internally. iter() creates an iterator, next() retrieves elements one at a time. After exhausting all elements, next() raises StopIteration which is caught to break. 10+20+30=60. This while-True-try-next-except pattern is equivalent to 'for x in [10,20,30]: total += x' and reveals how Python iteration works under the hood.`
  }),
  // Q48: While loop implementing modular exponentiation
  (_i: number) => ({
    q: `What is result?\nbase, exp, mod = 3, 5, 7\nresult = 1\nwhile exp > 0:\n    if exp % 2 == 1:\n        result = (result * base) % mod\n    base = (base * base) % mod\n    exp //= 2\nresult`,
    o: ["5", "3", "1", "6"],
    c: 0,
    e: "Fast modular exponentiation: 3⁵ mod 7 = 243 mod 7 = 5.",
    de: `Binary exponentiation computes base^exp % mod efficiently by squaring the base and halving the exponent. exp=5(odd): result=3%7=3, base=9%7=2, exp=2. exp=2(even): base=4%7=4, exp=1. exp=1(odd): result=(3*4)%7=12%7=5, base=16%7=2, exp=0. Verify: 3⁵=243, 243%7=5. This O(log n) algorithm is critical for cryptography (RSA).`
  }),
  // Q49: While loop implementing number base conversion
  (_i: number) => ({
    q: `What is result?\nn = 255\nbase = 16\ndigits = "0123456789ABCDEF"\nresult = ""\nwhile n > 0:\n    result = digits[n % base] + result\n    n //= base\nresult`,
    o: ['"FF"', '"255"', '"1111"', '"15F"'],
    c: 0,
    e: "255 in hex: 255%16=15→'F', 15%16=15→'F'. Prepending gives 'FF'.",
    de: `General base conversion uses the same %base and //base pattern as binary conversion but with an arbitrary base. 255%16=15 → digits[15]='F', n=255//16=15. 15%16=15 → 'F', n=15//16=0. Prepending builds "F"→"FF". Verify: 15×16+15=255=0xFF. This algorithm works for any base by changing the digits string and base value.`
  }),
  // Q50: While loop processing command queue
  (_i: number) => ({
    q: `What is stack?\nqueue = ["push 5", "push 3", "pop", "push 7"]\nstack = []\ni = 0\nwhile i < len(queue):\n    cmd = queue[i].split()\n    if cmd[0] == "push":\n        stack.append(int(cmd[1]))\n    elif cmd[0] == "pop":\n        stack.pop()\n    i += 1\nstack`,
    o: ["[5, 7]", "[5, 3, 7]", "[7]", "[3, 7]"],
    c: 0,
    e: "push 5→[5], push 3→[5,3], pop→[5], push 7→[5,7].",
    de: `This simulates a stack-based command processor. Each string command is split into parts: cmd[0] is the operation, cmd[1] (if present) is the argument. The sequence: push 5 → [5], push 3 → [5,3], pop removes 3 → [5], push 7 → [5,7]. This pattern is used in interpreters, undo systems, and calculator implementations where commands arrive as text.`
  }),
  // Q51: While loop implementing token scanner
  (_i: number) => ({
    q: `What is tokens?\nexpr = "3+42"\ntokens = []\ni = 0\nwhile i < len(expr):\n    if expr[i].isdigit():\n        num = ""\n        while i < len(expr) and expr[i].isdigit():\n            num += expr[i]\n            i += 1\n        tokens.append(int(num))\n    else:\n        tokens.append(expr[i])\n        i += 1\ntokens`,
    o: ["[3, '+', 42]", "['3', '+', '42']", "[3, '+', 4, 2]", "[345]"],
    c: 0,
    e: "Scanner groups consecutive digits: '3'→3, '+'→'+', '42'→42.",
    de: `A token scanner (lexer) groups characters into meaningful tokens. The inner while loop accumulates consecutive digits into multi-digit numbers. '3' is one digit→int(3). '+' is not a digit→kept as string. '4' and '2' are consecutive digits→grouped as "42"→int(42). Result has mixed types: [3, '+', 42]. This is the first stage of parsing mathematical expressions.`
  }),
  // Q52: While loop with nested while loop
  (_i: number) => ({
    q: `What is result?\ni = 1\nresult = []\nwhile i <= 3:\n    j = 1\n    row = []\n    while j <= i:\n        row.append(i * j)\n        j += 1\n    result.append(row)\n    i += 1\nresult`,
    o: ["[[1], [2, 4], [3, 6, 9]]", "[[1, 2, 3], [2, 4, 6]]", "[[1], [1, 2], [1, 2, 3]]", "[[1, 1], [2, 4], [3, 9]]"],
    c: 0,
    e: "Nested loops build a triangular multiplication table: row i has products i×1 through i×i.",
    de: `The outer while loop controls rows (i=1,2,3) and the inner loop generates columns (j=1 to i). Row 1: 1×1=[1]. Row 2: 2×1=2, 2×2=4→[2,4]. Row 3: 3×1=3, 3×2=6, 3×3=9→[3,6,9]. Each row grows longer, forming a triangle. This is a partial multiplication table. Nested while loops require careful manual counter management (j is reset to 1 each outer iteration).`
  }),
];
