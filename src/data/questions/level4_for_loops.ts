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
    de: `In nested for loops, the inner loop completes fully for each iteration of the outer loop. Here i takes 0 then 1, and for each i, j takes 0, 1, 2. So the pairs (i,j) are: (0,0),(0,1),(0,2),(1,0),(1,1),(1,2), producing sums [0,1,2,1,2,3]. Nested loops produce the Cartesian product of their ranges.`
  }),
  // Q2: Nested for loops - counting iterations
  (_i: number) => ({
    q: `How many times does the inner print execute?\nfor i in range(4):\n    for j in range(3):\n        print(i, j)`,
    o: ["12", "7", "4", "3"],
    c: 0,
    e: "Total iterations = outer × inner = 4 × 3 = 12.",
    de: `The total number of iterations in nested loops is the product of the individual loop counts. The outer loop runs 4 times, and for each outer iteration, the inner loop runs 3 times. Total = 4 × 3 = 12. This multiplicative relationship is important for understanding time complexity — two nested loops over n elements give O(n²).`
  }),
  // Q3: Nested for loops - building 2D structures
  (_i: number) => ({
    q: `What is [[i * j for j in range(1, 4)] for i in range(1, 3)]?`,
    o: ["[[1, 2, 3], [2, 4, 6]]", "[[0, 0, 0], [0, 1, 2]]", "[[1, 2, 3], [4, 5, 6]]", "Error"],
    c: 0,
    e: "Outer comp builds rows: i=1→[1,2,3], i=2→[2,4,6].",
    de: `This nested list comprehension builds a 2D list. The outer comprehension iterates i over 1,2. For each i, the inner comprehension computes i*j for j in 1,2,3. Row 1: [1*1, 1*2, 1*3] = [1,2,3], row 2: [2*1, 2*2, 2*3] = [2,4,6]. Nested comprehensions read left-to-right as nested loops.`
  }),
  // Q4: For-else clause - normal completion
  (_i: number) => ({
    q: `What does this print?\nfor i in range(3):\n    pass\nelse:\n    print("done")`,
    o: ['"done"', "Nothing", "Error", "None"],
    c: 0,
    e: "The else clause executes when the loop completes without hitting break.",
    de: `Python's for-else is unique: the else block runs when the loop finishes normally without encountering a break. Here the loop completes normally (pass does nothing), so "done" is printed. Think of else as "else no break occurred."`
  }),
  // Q5: For-else clause - break prevents else
  (_i: number) => ({
    q: `What does this print?\nfor i in range(5):\n    if i == 2:\n        break\nelse:\n    print("completed")`,
    o: ["Nothing", '"completed"', "2", "Error"],
    c: 0,
    e: "The else block is skipped when the loop exits via break.",
    de: `When a for loop is terminated by break, the else clause does NOT execute. Here the loop breaks at i=2, so "completed" is never printed. The mnemonic: else means "else the loop was not broken out of." If break fires → else skipped.`
  }),
  // Q6: For-else - practical search pattern
  (_i: number) => ({
    q: `What does this print?\nnums = [1, 3, 5, 7]\nfor n in nums:\n    if n % 2 == 0:\n        print("even found")\n        break\nelse:\n    print("all odd")`,
    o: ['"all odd"', '"even found"', "Nothing", "Error"],
    c: 0,
    e: "No even number found → no break → else executes.",
    de: `This is the classic for-else search pattern. All values [1,3,5,7] are odd, so n%2==0 is never True, break never fires, and the else clause executes. This pattern replaces the common "found = False" flag approach.`
  }),
  // Q7: Loop variable after loop
  (_i: number) => ({
    q: `What does this print?\nfor x in range(5):\n    pass\nprint(x)`,
    o: ["4", "5", "0", "NameError"],
    c: 0,
    e: "After the loop, x retains its last value: 4.",
    de: `In Python, the loop variable persists after the loop ends. The last value from range(5) is 4. This is different from languages like C++ where loop variables are scoped to the loop block. In Python, x "leaks" out into the enclosing scope.`
  }),
  // Q8: Loop variable with empty iterable
  (_i: number) => ({
    q: `What happens if x was never defined?\nfor x in []:\n    pass\nprint(x)`,
    o: ["NameError", "None", "0", "Empty string"],
    c: 0,
    e: "With an empty iterable, the loop body never runs, so x is never assigned.",
    de: `When the iterable is empty, the loop body never executes, so x is never created. If x wasn't defined before the loop, print(x) raises NameError. Defensive code should initialize the variable before the loop (x = None) or check the iterable's length.`
  }),
  // Q9: Modifying loop variable
  (_i: number) => ({
    q: `What is result?\nresult = []\nfor i in range(3):\n    i += 100\n    result.append(i)\nresult`,
    o: ["[100, 101, 102]", "[100, 200, 300]", "[0, 1, 2]", "Error"],
    c: 0,
    e: "Modifying i doesn't affect iteration — range still provides 0, 1, 2 as the next values.",
    de: `In a Python for loop, the loop variable is reassigned from the iterator at the start of each iteration, regardless of modifications during the loop body. i is set to 0, then i+=100 makes 100; next iteration i is reset to 1, then +100 makes 101. The range iterator is unaffected.`
  }),
  // Q10: For loop over dict.items()
  (_i: number) => ({
    q: `What is [k + str(v) for k, v in {"a": 1, "b": 2}.items()]?`,
    o: ['["a1", "b2"]', '["a", "b"]', '[("a", 1), ("b", 2)]', "Error"],
    c: 0,
    e: "dict.items() yields (key, value) tuples; k+str(v) concatenates each.",
    de: `dict.items() returns (key, value) pairs. Tuple unpacking splits each pair into k and v. The expression k + str(v) concatenates the string key with the stringified integer value: "a"+"1"→"a1". Note str(v) is needed because Python doesn't allow str + int concatenation.`
  }),
  // Q11: For loop summing dict values
  (_i: number) => ({
    q: `What is sum({"x": 10, "y": 20, "z": 30}.values())?`,
    o: ["60", "3", "10", "Error"],
    c: 0,
    e: "dict.values() returns [10, 20, 30]; sum adds them to 60.",
    de: `dict.values() returns a view over the dictionary's values. sum() takes any iterable of numbers and returns their total: 10 + 20 + 30 = 60. This pattern is commonly used for aggregating dictionary data — totaling prices, counting occurrences.`
  }),
  // Q12: Modifying dict during iteration
  (_i: number) => ({
    q: `What happens?\nd = {"a": 1, "b": 2}\nfor k in d:\n    d["c"] = 3`,
    o: ["RuntimeError", "d becomes {'a':1,'b':2,'c':3}", "Infinite loop", "Nothing"],
    c: 0,
    e: "Modifying a dict's size during iteration raises RuntimeError.",
    de: `Python dicts detect size changes during iteration and raise RuntimeError. Adding d["c"] changes the dict's size, triggering the error. To safely modify, iterate over a copy: for k in list(d.keys()): d["c"] = 3. The list() creates a snapshot so changes don't affect iteration.`
  }),
  // Q13: Tuple unpacking in for loops
  (_i: number) => ({
    q: `What is result?\npairs = [(1, "a"), (2, "b"), (3, "c")]\nresult = ""\nfor num, letter in pairs:\n    result += letter\nresult`,
    o: ['"abc"', '"123"', '"a b c"', "Error"],
    c: 0,
    e: "Tuple unpacking splits each pair; only letter is appended.",
    de: `When iterating over a list of tuples, Python can unpack each tuple into multiple loop variables. Here (num, letter) receives each tuple's elements. Since only letter is used, the output accumulates "a"+"b"+"c" = "abc". The number of variables must match the tuple length.`
  }),
  // Q14: Nested unpacking
  (_i: number) => ({
    q: `What is result?\ndata = [(1, (2, 3)), (4, (5, 6))]\nresult = []\nfor a, (b, c) in data:\n    result.append(a + b + c)\nresult`,
    o: ["[6, 15]", "[1, 4]", "[(2, 3), (5, 6)]", "Error"],
    c: 0,
    e: "Nested unpacking: a gets the first element, (b, c) unpacks the inner tuple.",
    de: `Python supports nested unpacking in for loops. Each element is a tuple like (1, (2, 3)). The pattern a, (b, c) unpacks the outer tuple: a=1, inner tuple: b=2, c=3. So a+b+c = 6 for the first element, 4+5+6 = 15 for the second. Nested unpacking works to any depth.`
  }),
  // Q15: String iteration - counting vowels
  (_i: number) => ({
    q: `What is count?\ncount = 0\nfor ch in "hello":\n    if ch in "aeiou":\n        count += 1\ncount`,
    o: ["2", "3", "1", "5"],
    c: 0,
    e: "Vowels in 'hello': 'e' and 'o' → count = 2.",
    de: `Strings are iterable — a for loop visits each character one at a time. Checking each character of "hello" against vowels: h(no), e(yes), l(no), l(no), o(yes). Two vowels found, count = 2. The 'in' operator performs membership testing on a string.`
  }),
  // Q16: Building reversed string
  (_i: number) => ({
    q: `What is rev?\ns = "abc"\nrev = ""\nfor ch in s:\n    rev = ch + rev\nrev`,
    o: ['"cba"', '"abc"', '"cab"', '"bca"'],
    c: 0,
    e: 'Each character is prepended: "a"→"a", "b"+"a"→"ba", "c"+"ba"→"cba".',
    de: `This reverses a string by prepending each character. Step by step: rev="" → ch="a": rev="a" → ch="b": rev="b"+"a"="ba" → ch="c": rev="c"+"ba"="cba". The key is rev = ch + rev (prepending). While s[::-1] is the Pythonic one-liner, this pattern illustrates string building.`
  }),
  // Q17: zip with unequal lengths
  (_i: number) => ({
    q: `What is list(zip([1, 2, 3], ["x", "y"]))?`,
    o: ['[(1, "x"), (2, "y")]', '[(1, "x"), (2, "y"), (3, None)]', "Error", '[(1, "x")]'],
    c: 0,
    e: "zip() stops at the shortest iterable.",
    de: `zip() pairs elements position by position but stops when the shortest iterable is exhausted. Here the first list has 3 elements and the second has 2, so only 2 pairs are produced. Element 3 is silently dropped. Use itertools.zip_longest for padding shorter iterables.`
  }),
  // Q18: enumerate with custom start
  (_i: number) => ({
    q: `What is list(enumerate(["a", "b", "c"], start=10))?`,
    o: ['[(10, "a"), (11, "b"), (12, "c")]', '[(0, "a"), (1, "b"), (2, "c")]', '[(10, "a"), (10, "b"), (10, "c")]', "Error"],
    c: 0,
    e: "enumerate with start=10 begins counting at 10.",
    de: `enumerate() takes an optional start parameter that sets the initial counter value. With start=10, the first item gets index 10, then 11, 12. The start parameter only affects the counter — it doesn't skip elements in the iterable. Default is start=0.`
  }),
  // Q19: range with negative step
  (_i: number) => ({
    q: `What is list(range(10, 0, -3))?`,
    o: ["[10, 7, 4, 1]", "[10, 7, 4]", "[10, 8, 6, 4, 2]", "[]"],
    c: 0,
    e: "range(10, 0, -3) counts down by 3: 10, 7, 4, 1.",
    de: `range(start, stop, step) with negative step counts downward. Starting at 10, subtracting 3: 10, 7, 4, 1. The next value would be -2, past stop=0, so it stops. The stop value is always exclusive. If start < stop with negative step, the result is empty.`
  }),
  // Q20: range(len()) pattern
  (_i: number) => ({
    q: `What is [items[i] * i for i in range(len(items))] where items = [10, 20, 30]?`,
    o: ["[0, 20, 60]", "[10, 20, 30]", "[10, 40, 90]", "Error"],
    c: 0,
    e: "i=0: 10*0=0, i=1: 20*1=20, i=2: 30*2=60.",
    de: `range(len(items)) generates indices 0, 1, 2. Each index accesses items[i] and multiplies by i. While range(len()) works, Python style prefers enumerate() when you need both index and value: [v*i for i,v in enumerate(items)].`
  }),
  // Q21: Flatten 2D list with comprehension
  (_i: number) => ({
    q: `What is [x for row in [[1, 2], [3, 4], [5, 6]] for x in row]?`,
    o: ["[1, 2, 3, 4, 5, 6]", "[[1, 2], [3, 4], [5, 6]]", "[1, 3, 5]", "Error"],
    c: 0,
    e: "Nested comprehension reads left-to-right: for each row, then for each x in that row.",
    de: `This nested comprehension flattens a 2D list. Reading left to right: the outer loop 'for row in matrix' iterates sub-lists, the inner 'for x in row' extracts elements. The leftmost for is the outer loop. This is the standard pattern for flattening one level of nesting.`
  }),
  // Q22: break + else + variable persistence
  (_i: number) => ({
    q: `What does print(i) output?\nfor i in range(2, 10):\n    if i % 3 == 0:\n        break\nelse:\n    print("no break")\nprint(i)`,
    o: ["3", "2", '"no break" then 2', "Error"],
    c: 0,
    e: "i=2: 2%3≠0; i=3: 3%3==0 → break. Else skipped. print(i) outputs 3.",
    de: `The loop starts at i=2 (2%3≠0, no break), then i=3 (3%3==0, break fires). The else clause is skipped because break was used. After the loop, i retains its value of 3 (where break occurred). This combines for-else behavior, loop variable persistence, and break semantics.`
  }),
  // Q23: Set iteration order
  (_i: number) => ({
    q: `What is guaranteed about for x in {3, 1, 2}?`,
    o: ["Iteration order is not guaranteed", "Elements appear sorted", "Elements appear in insertion order", "Sets cannot be iterated"],
    c: 0,
    e: "Sets are unordered collections — iteration order is implementation-dependent.",
    de: `Sets provide no guarantee about iteration order. Unlike lists (ordered) and dicts (insertion-ordered since 3.7), sets are unordered. Never write code that depends on set iteration order. Use sorted(my_set) if you need ordered iteration over unique elements.`
  }),
  // Q24: Iterating over bytes
  (_i: number) => ({
    q: `What is [b for b in b"Hi"]?`,
    o: ["[72, 105]", '["H", "i"]', "[b'H', b'i']", "Error"],
    c: 0,
    e: "Iterating bytes yields integers (ASCII values): H=72, i=105.",
    de: `When you iterate over a bytes object, each element is an integer (0-255), not a character. b"Hi" contains H (ASCII 72) and i (ASCII 105). This differs from string iteration which yields single-character strings. To get characters, decode first: b"Hi".decode().`
  }),
  // Q25: Cartesian product with nested comprehension
  (_i: number) => ({
    q: `What is len([(i, j) for i in range(3) for j in range(4)])?`,
    o: ["12", "7", "3", "4"],
    c: 0,
    e: "Nested comprehension: 3 × 4 = 12 combinations.",
    de: `A nested list comprehension with two for clauses generates the Cartesian product. range(3) has 3 values, range(4) has 4. Every combination is produced: 3×4 = 12 tuples. This is equivalent to itertools.product(range(3), range(4)).`
  }),
  // Q26: enumerate on dict
  (_i: number) => ({
    q: `What is list(enumerate({"x": 10, "y": 20}))?`,
    o: ["[(0, 'x'), (1, 'y')]", "[(0, 10), (1, 20)]", "[('x', 10), ('y', 20)]", "Error"],
    c: 0,
    e: "enumerate() on a dict iterates over its keys with an index counter.",
    de: `When you call enumerate() on a dictionary, it iterates over the dictionary's keys (not values or items) and pairs each key with a positional index. To enumerate key-value pairs, use enumerate(d.items()) instead. Dicts iterate over keys by default.`
  }),
  // Q27: reversed() on list
  (_i: number) => ({
    q: `What is list(reversed([1, 2, 3]))?`,
    o: ["[3, 2, 1]", "[1, 2, 3]", "[3, 1, 2]", "Error"],
    c: 0,
    e: "reversed() returns an iterator yielding items in reverse order.",
    de: `reversed() returns a reverse iterator without modifying the original list. Unlike .reverse() which mutates in place and returns None, reversed() creates a new iterator. It works on any sequence (list, tuple, string, range) but not on sets or dicts directly.`
  }),
  // Q28: sorted() on dict
  (_i: number) => ({
    q: `What does sorted({"c": 3, "a": 1, "b": 2}) return?`,
    o: ["['a', 'b', 'c']", "[1, 2, 3]", "[('a', 1), ('b', 2), ('c', 3)]", "Error"],
    c: 0,
    e: "sorted() on a dict returns a sorted list of its keys.",
    de: `When sorted() is called on a dictionary, it iterates over the dict's keys and returns them in sorted order as a list. To sort by values, use sorted(d, key=d.get). To get sorted key-value pairs, use sorted(d.items()).`
  }),
  // Q29: Starred unpacking in loop
  (_i: number) => ({
    q: `What is result?\nresult = []\nfor first, *rest in [(1, 2, 3), (4, 5)]:\n    result.append(rest)\nresult`,
    o: ["[[2, 3], [5]]", "[(2, 3), (5,)]", "[[1, 4]]", "Error"],
    c: 0,
    e: "The * operator captures remaining elements into a list.",
    de: `Starred unpacking with *rest collects all leftover elements into a list. In (1, 2, 3), first=1 and rest=[2, 3]. In (4, 5), first=4 and rest=[5]. Note rest is always a list, even with a single element. Useful for processing records with variable-length fields.`
  }),
  // Q30: Building dict from two lists with zip
  (_i: number) => ({
    q: `What is d?\nkeys = ["a", "b"]\nvals = [1, 2]\nd = {}\nfor k, v in zip(keys, vals):\n    d[k] = v\nd`,
    o: ["{'a': 1, 'b': 2}", "{1: 'a', 2: 'b'}", "[('a', 1), ('b', 2)]", "Error"],
    c: 0,
    e: "zip() pairs elements from two lists; the loop builds a dict.",
    de: `zip(keys, vals) produces pairs ('a', 1) and ('b', 2). The loop unpacks each pair and assigns d[k] = v. The shorter equivalent is dict(zip(keys, vals)). This pattern is fundamental for combining parallel sequences into mappings.`
  }),
  // Q31: Slicing with step in loop
  (_i: number) => ({
    q: `What is result?\ns = "Python"\nresult = ""\nfor i in range(0, len(s), 2):\n    result += s[i]\nresult`,
    o: ["'Pto'", "'yhn'", "'Pyt'", "'Python'"],
    c: 0,
    e: "range(0, 6, 2) gives indices 0, 2, 4 — every other character.",
    de: `range(0, len('Python'), 2) produces indices 0, 2, 4. Indexing 'Python' at those positions: 'P', 't', 'o' → 'Pto'. This step-based indexing pattern is useful for sampling every Nth element. The equivalent slice is s[::2].`
  }),
  // Q32: Counting occurrences manually
  (_i: number) => ({
    q: `What is count?\ncount = 0\nfor ch in "banana":\n    if ch == "a":\n        count += 1\ncount`,
    o: ["3", "2", "1", "6"],
    c: 0,
    e: "'banana' has three 'a' characters.",
    de: `The loop iterates each character in 'banana': b, a, n, a, n, a. Each time ch equals 'a', count increments. There are 3 occurrences. This manual counting is equivalent to 'banana'.count('a'). Understanding it helps when you need conditional or complex counting.`
  }),
  // Q33: Finding max without max()
  (_i: number) => ({
    q: `What is m?\nnums = [3, 7, 2, 9, 4]\nm = nums[0]\nfor n in nums:\n    if n > m:\n        m = n\nm`,
    o: ["9", "3", "7", "4"],
    c: 0,
    e: "The loop tracks the largest value: 3→7→9.",
    de: `The classic find-max algorithm. m starts at 3 (first element). The loop compares each element: 3 (no change), 7>3 (m=7), 2 (no), 9>7 (m=9), 4 (no). Initializing m to nums[0] (not 0) is important — if all values were negative, starting at 0 would give the wrong result.`
  }),
  // Q34: Flattening nested list with loops
  (_i: number) => ({
    q: `What is flat?\nnested = [[1, 2], [3], [4, 5]]\nflat = []\nfor sub in nested:\n    for x in sub:\n        flat.append(x)\nflat`,
    o: ["[1, 2, 3, 4, 5]", "[[1, 2], [3], [4, 5]]", "[3, 1, 2]", "Error"],
    c: 0,
    e: "Nested loops visit every element in every sublist, flattening the structure.",
    de: `The outer loop iterates sublists [1,2], [3], [4,5]. The inner loop iterates elements within each and appends to flat. Result: [1, 2, 3, 4, 5]. One-liner equivalent: [x for sub in nested for x in sub]. This only flattens one level deep.`
  }),
  // Q35: Tuple unpacking sums
  (_i: number) => ({
    q: `What is result?\npairs = [(1, 2), (3, 4), (5, 6)]\nresult = []\nfor x, y in pairs:\n    result.append(x + y)\nresult`,
    o: ["[3, 7, 11]", "[(1, 2), (3, 4), (5, 6)]", "[1, 3, 5]", "Error"],
    c: 0,
    e: "Each tuple is unpacked: 1+2=3, 3+4=7, 5+6=11.",
    de: `The for loop uses tuple unpacking to assign x and y from each pair. The sums are: (1,2)→3, (3,4)→7, (5,6)→11. This multiple assignment target pattern is widely used when iterating over structured data like coordinates, key-value pairs, or database rows.`
  }),
  // Q36: Accumulating sum
  (_i: number) => ({
    q: `What is total?\ntotal = 0\nfor n in [10, 20, 30]:\n    total += n\ntotal`,
    o: ["60", "30", "10", "0"],
    c: 0,
    e: "The loop accumulates 10 + 20 + 30 = 60.",
    de: `This is the accumulator pattern: initialize total to 0, then add each element. After iteration: 0+10=10, 10+20=30, 30+30=60. The built-in sum() does the same thing. The manual pattern is essential when you need custom logic during accumulation.`
  }),
  // Q37: Early return pattern
  (_i: number) => ({
    q: `What does f([1, 3, 4, 6]) return?\ndef f(lst):\n    for x in lst:\n        if x % 2 == 0:\n            return x\n    return None`,
    o: ["4", "6", "None", "[4, 6]"],
    c: 0,
    e: "return inside a loop exits the function immediately on the first even number.",
    de: `The early return pattern exits the function as soon as a condition is met. The loop checks 1 (odd), 3 (odd), 4 (even) → returns 4 immediately without checking 6. This is more efficient than collecting all matches when you only need the first.`
  }),
  // Q38: Filtering with comprehension
  (_i: number) => ({
    q: `What is [x for x in range(10) if x % 3 == 0]?`,
    o: ["[0, 3, 6, 9]", "[3, 6, 9]", "[1, 2, 4, 5, 7, 8]", "[0, 3, 6]"],
    c: 0,
    e: "Multiples of 3 from 0-9: 0, 3, 6, 9.",
    de: `List comprehensions with an if clause filter elements. range(10) produces 0-9; x % 3 == 0 keeps multiples of 3. Note that 0 is included because 0 % 3 == 0. Comprehensions are more concise and slightly faster than the equivalent loop-and-append.`
  }),
  // Q39: Processing text lines
  (_i: number) => ({
    q: `What is total?\nlines = ["3", "5", "7"]\ntotal = 0\nfor line in lines:\n    total += int(line)\ntotal`,
    o: ["15", "'357'", "3", "Error"],
    c: 0,
    e: "Each string is converted to int: 3 + 5 + 7 = 15.",
    de: `This simulates reading numeric data from text lines. Each string is converted with int() before accumulation. Without int(), using += on strings would concatenate to '357'. This parse-and-accumulate pattern is fundamental for text-based data processing.`
  }),
  // Q40: Creating adjacent pairs
  (_i: number) => ({
    q: `What is pairs?\nnums = [10, 20, 30, 40]\npairs = []\nfor i in range(len(nums) - 1):\n    pairs.append((nums[i], nums[i+1]))\npairs`,
    o: ["[(10, 20), (20, 30), (30, 40)]", "[(10, 40)]", "[(10, 20), (30, 40)]", "Error"],
    c: 0,
    e: "Each element is paired with its neighbor, producing sliding pairs.",
    de: `range(len(nums) - 1) gives indices 0, 1, 2 (stopping one short to avoid IndexError). At each index, adjacent elements are paired: (10,20), (20,30), (30,40). This sliding window pattern is useful for computing differences or comparing consecutive elements.`
  }),
  // Q41: Linear search with enumerate
  (_i: number) => ({
    q: `What does f(["cat", "dog", "bird"], "dog") return?\ndef f(lst, val):\n    for i, x in enumerate(lst):\n        if x == val:\n            return i\n    return -1`,
    o: ["1", "0", "2", "-1"],
    c: 0,
    e: "enumerate gives (0,'cat'), (1,'dog') — 'dog' found at index 1.",
    de: `This implements linear search using enumerate to track the index. When x == 'dog' at i=1, it returns 1 immediately. If no match, -1 is returned. This is equivalent to lst.index(val) except it returns -1 instead of raising ValueError on missing items.`
  }),
  // Q42: Walrus operator in loop
  (_i: number) => ({
    q: `What is results?\nresults = []\nfor x in range(6):\n    if (y := x ** 2) > 10:\n        results.append(y)\nresults`,
    o: ["[16, 25]", "[9, 16, 25]", "[4, 5]", "[0, 1, 4, 9, 16, 25]"],
    c: 0,
    e: "The walrus operator assigns x² to y; only 16 (x=4) and 25 (x=5) exceed 10.",
    de: `The walrus operator (:=) assigns and evaluates in one expression. For each x in 0-5, y is assigned x²: 0, 1, 4, 9, 16, 25. Only 16 and 25 exceed 10, so results = [16, 25]. The walrus operator (Python 3.8+) is ideal for compute-then-test patterns.`
  }),
  // Q43: Calculated range bounds
  (_i: number) => ({
    q: `What is result?\nn = 3\nresult = []\nfor i in range(n * n):\n    if i % n == 0:\n        result.append(i)\nresult`,
    o: ["[0, 3, 6]", "[3, 6, 9]", "[0, 1, 2]", "[1, 4, 7]"],
    c: 0,
    e: "range(9): only 0, 3, 6 are divisible by 3.",
    de: `n*n = 9, so range(9) yields 0-8. The filter i%3==0 keeps multiples of 3: 0, 3, 6. Note 9 is excluded because range is exclusive. Using calculated bounds with modulo filter is common for generating grid coordinates or periodic sequences.`
  }),
  // Q44: try/except inside loop
  (_i: number) => ({
    q: `What is nums?\nvalues = ["1", "two", "3"]\nnums = []\nfor v in values:\n    try:\n        nums.append(int(v))\n    except ValueError:\n        pass\nnums`,
    o: ["[1, 3]", "['1', '3']", "[1, 'two', 3]", "Error"],
    c: 0,
    e: "int('two') raises ValueError which is caught; only valid ints kept.",
    de: `try/except inside a loop provides per-element error handling. int('1')=1 succeeds, int('two') raises ValueError (caught, skipped), int('3')=3 succeeds. Result: [1, 3]. This pattern is essential for processing dirty data where some values may be invalid.`
  }),
  // Q45: enumerate to build dict
  (_i: number) => ({
    q: `What is result?\nresult = {}\nfor idx, char in enumerate("abc"):\n    result[char] = idx\nresult`,
    o: ["{'a': 0, 'b': 1, 'c': 2}", "{0: 'a', 1: 'b', 2: 'c'}", "['a', 'b', 'c']", "Error"],
    c: 0,
    e: "enumerate gives (0,'a'), (1,'b'), (2,'c'); maps each char to its index.",
    de: `enumerate('abc') yields (0,'a'), (1,'b'), (2,'c'). The unpacking assigns idx and char, then result[char] = idx builds a dict mapping characters to their indices. Swapping to result[idx] = char would produce {0:'a', 1:'b', 2:'c'}.`
  }),
  // Q46: join vs concatenation
  (_i: number) => ({
    q: `What is "-".join(["hello", "world"])?`,
    o: ["'hello-world'", "'helloworld'", "'hello - world'", "'hello, world'"],
    c: 0,
    e: "join() inserts the separator between each element.",
    de: `str.join() concatenates list elements with the separator between them. '-'.join(['hello', 'world']) produces 'hello-world'. join() is significantly faster than += in a loop because strings are immutable — each += creates a new object, while join allocates once.`
  }),
  // Q47: Nested break exits only inner loop
  (_i: number) => ({
    q: `What is count?\ncount = 0\nfor i in range(3):\n    for j in range(3):\n        if j == 1:\n            break\n    count += 1\ncount`,
    o: ["3", "1", "9", "0"],
    c: 0,
    e: "break exits only the inner loop; the outer loop runs all 3 iterations.",
    de: `break only exits the innermost enclosing loop. The inner for-j loop breaks at j==1, but count += 1 is in the outer loop, so it runs every outer iteration. The outer loop runs 3 times, so count = 3. Python's break never exits more than one loop level.`
  }),
  // Q48: continue in nested loop
  (_i: number) => ({
    q: `What is count?\ncount = 0\nfor i in range(2):\n    for j in range(3):\n        if j == 1:\n            continue\n        count += 1\ncount`,
    o: ["4", "6", "2", "5"],
    c: 0,
    e: "continue skips j==1. Each outer iteration counts 2 (j=0 and j=2), total 2×2=4.",
    de: `continue skips the rest of the current iteration of the innermost loop. For each i (0 and 1), the inner loop: j=0 (count+1), j=1 (skip), j=2 (count+1) — 2 increments per outer iteration. 2 × 2 = 4. Like break, continue only affects the innermost loop.`
  }),
  // Q49: Sorted tuples with unpacking
  (_i: number) => ({
    q: `What is result?\npairs = [(3, "c"), (1, "a"), (2, "b")]\nresult = []\nfor k, v in sorted(pairs):\n    result.append(v)\nresult`,
    o: ["['a', 'b', 'c']", "['c', 'a', 'b']", "[(1,'a'),(2,'b'),(3,'c')]", "Error"],
    c: 0,
    e: "sorted() sorts tuples by first element; unpacking extracts values in order.",
    de: `sorted() sorts a list of tuples by the first element by default. sorted([(3,'c'),(1,'a'),(2,'b')]) → [(1,'a'),(2,'b'),(3,'c')]. Unpacking in the for loop extracts values 'a', 'b', 'c' in sorted order.`
  }),
  // Q50: Matrix transpose
  (_i: number) => ({
    q: `What is t?\nmatrix = [[1, 2], [3, 4]]\nt = []\nfor i in range(2):\n    row = []\n    for j in range(2):\n        row.append(matrix[j][i])\n    t.append(row)\nt`,
    o: ["[[1, 3], [2, 4]]", "[[1, 2], [3, 4]]", "[[4, 3], [2, 1]]", "Error"],
    c: 0,
    e: "Transpose swaps rows and columns: matrix[j][i] flips the indices.",
    de: `Matrix transpose swaps rows and columns. By iterating columns (i) then rows (j) and reading matrix[j][i], we flip the axes. Column 0: [matrix[0][0], matrix[1][0]] = [1, 3]. Column 1: [matrix[0][1], matrix[1][1]] = [2, 4]. Result: [[1, 3], [2, 4]].`
  }),
  // Q51: Multiple if clauses in comprehension
  (_i: number) => ({
    q: `What is [x for x in range(20) if x % 2 == 0 if x % 3 == 0]?`,
    o: ["[0, 6, 12, 18]", "[0, 2, 3, 6, 12, 18]", "[6, 12, 18]", "[0, 6, 12]"],
    c: 0,
    e: "Multiple if clauses act as AND: divisible by both 2 and 3.",
    de: `Multiple if clauses in a comprehension are combined with AND logic. Both conditions must be satisfied. x%2==0 AND x%3==0 means divisible by 6 (plus 0). From range(20): 0, 6, 12, 18 qualify.`
  }),
  // Q52: Ternary expression in comprehension
  (_i: number) => ({
    q: `What is ["even" if x%2==0 else "odd" for x in range(4)]?`,
    o: ["['even','odd','even','odd']", "['odd','even','odd','even']", "['even','even','odd','odd']", "Error"],
    c: 0,
    e: "Ternary transforms each element: 0→even, 1→odd, 2→even, 3→odd.",
    de: `A ternary expression inside a comprehension transforms each element. 'even' if x%2==0 else 'odd' is placed BEFORE the for clause. If/else before for transforms; if after for filters. 0→even, 1→odd, 2→even, 3→odd.`
  }),
  // Q53: Running total
  (_i: number) => ({
    q: `What is running?\nnums = [1, 2, 3, 4]\ntotal = 0\nrunning = []\nfor n in nums:\n    total += n\n    running.append(total)\nrunning`,
    o: ["[1, 3, 6, 10]", "[1, 2, 3, 4]", "[10, 10, 10, 10]", "[4, 3, 2, 1]"],
    c: 0,
    e: "Cumulative sum: 1, 1+2=3, 3+3=6, 6+4=10.",
    de: `A running total accumulates values as the loop progresses. Each step: total adds the next element and appends the snapshot. 1→3→6→10. Also called prefix sum or cumulative sum. Used in financial balances, statistics, and prefix sum arrays.`
  }),
  // Q54: Boolean flag pattern
  (_i: number) => ({
    q: `What is all_even?\nnums = [2, 4, 7, 8]\nall_even = True\nfor n in nums:\n    if n % 2 != 0:\n        all_even = False\n        break\nall_even`,
    o: ["False", "True", "None", "Error"],
    c: 0,
    e: "7 is odd → flag flipped to False and loop breaks.",
    de: `The boolean flag pattern starts with an assumption (all_even = True) and flips it when a counterexample is found. 2 and 4 pass, but 7 is odd → all_even = False, break. Element 8 is never checked. Equivalent to all(n%2==0 for n in nums).`
  }),
  // Q55: Counter dict with get()
  (_i: number) => ({
    q: `What is counts["a"]?\nword = "banana"\ncounts = {}\nfor ch in word:\n    counts[ch] = counts.get(ch, 0) + 1\ncounts["a"]`,
    o: ["3", "2", "1", "Error"],
    c: 0,
    e: "'banana' has 3 letter 'a's. dict.get(key, 0) avoids KeyError.",
    de: `The counter dict pattern uses dict.get(key, default) to safely initialize and increment. 'banana' has b=1, a=3, n=2. get() returns 0 for new keys, avoiding KeyError. Equivalent to collections.Counter(word). The most common dict building pattern in Python.`
  }),
  // Q56: Skip every other element
  (_i: number) => ({
    q: `What is result?\nlst = [10, 20, 30, 40, 50]\nresult = []\nfor i in range(0, len(lst), 2):\n    result.append(lst[i])\nresult`,
    o: ["[10, 30, 50]", "[20, 40]", "[10, 20, 30]", "[10, 50]"],
    c: 0,
    e: "range(0, 5, 2) gives indices 0, 2, 4.",
    de: `Using range() with step 2 generates every other index: 0, 2, 4. This selects alternating elements. Equivalent to lst[::2] (slice with step 2). Useful for processing alternating elements or downsampling data.`
  }),
  // Q57: Reversed range
  (_i: number) => ({
    q: `What is list(range(5, 0, -1))?`,
    o: ["[5, 4, 3, 2, 1]", "[5, 4, 3, 2, 1, 0]", "[0, 1, 2, 3, 4, 5]", "[4, 3, 2, 1, 0]"],
    c: 0,
    e: "range(5, 0, -1) counts down from 5, stopping before 0.",
    de: `range(5, 0, -1) starts at 5, decrements by 1, stops before 0. Result: [5, 4, 3, 2, 1]. Note 0 is excluded. Equivalent to reversed(range(1, 6)). Common for countdown loops and reverse iteration.`
  }),
  // Q58: Word capitalization
  (_i: number) => ({
    q: `What is " ".join([w.capitalize() for w in "hello world".split()])?`,
    o: ["'Hello World'", "'HELLO WORLD'", "'hello world'", "'hELLO wORLD'"],
    c: 0,
    e: "capitalize() uppercases first letter of each word.",
    de: `split() breaks 'hello world' into ['hello', 'world']. capitalize() returns a copy with the first character uppercased: 'Hello', 'World'. join reconnects with space. Equivalent to 'hello world'.title(). A common text normalization pattern.`
  }),
  // Q59: List intersection
  (_i: number) => ({
    q: `What is result?\na = [1, 2, 3, 4]\nb = [3, 4, 5, 6]\nresult = [x for x in a if x in b]\nresult`,
    o: ["[3, 4]", "[1, 2, 3, 4, 5, 6]", "[1, 2]", "[5, 6]"],
    c: 0,
    e: "Only elements in both lists: 3 and 4.",
    de: `List intersection finds common elements. Iterating a and checking membership in b keeps only shared values. Order follows the first list. Equivalent to list(set(a) & set(b)) but preserves order. Common for data matching and comparing datasets.`
  }),
  // Q60: Union without duplicates
  (_i: number) => ({
    q: `What is result?\na = [1, 2, 3]\nb = [3, 4, 5]\nresult = list(a)\nfor x in b:\n    if x not in result:\n        result.append(x)\nresult`,
    o: ["[1, 2, 3, 4, 5]", "[1, 2, 3, 3, 4, 5]", "[3]", "[4, 5]"],
    c: 0,
    e: "Starts with a's elements, adds from b only if not present.",
    de: `List union without duplicates starts with a copy of one list and adds elements from the second only if they don't already exist. list(a) creates a copy. 3 is skipped (already present), 4 and 5 are added. Equivalent to list(dict.fromkeys(a + b)).`
  }),
  // Q61: del during iteration pitfall
  (_i: number) => ({
    q: `What happens?\nnums = [1, 2, 3, 4, 5]\nfor i in range(len(nums)):\n    if nums[i] % 2 == 0:\n        del nums[i]`,
    o: ["IndexError", "[1, 3, 5]", "[1, 2, 3, 4, 5]", "[2, 4]"],
    c: 0,
    e: "del shrinks the list, but range uses the original length → IndexError.",
    de: `Deleting from a list while iterating by index is a classic pitfall. range(len(nums)) is computed once as range(5). After del, the list shrinks, but later indices exceed the new length → IndexError. Fix: iterate over a copy (nums[:]) or use a comprehension.`
  }),
  // Q62: Safe iteration over copy
  (_i: number) => ({
    q: `What is nums after?\nnums = [1, 2, 3, 4, 5]\nfor x in nums[:]:\n    if x % 2 == 0:\n        nums.remove(x)\nnums`,
    o: ["[1, 3, 5]", "IndexError", "[2, 4]", "[1, 2, 3, 4, 5]"],
    c: 0,
    e: "nums[:] creates a stable copy to iterate; removing from original is safe.",
    de: `Iterating over a shallow copy (nums[:]) while modifying the original is the safe pattern. The copy drives the loop (unchanged). remove() modifies the original list. No IndexError because the iteration source is stable. This is the standard pattern for in-place filtering.`
  }),
  // Q63: Building nested list
  (_i: number) => ({
    q: `What is result?\nresult = []\nfor i in range(3):\n    result.append([i] * (i + 1))\nresult`,
    o: ["[[0], [1, 1], [2, 2, 2]]", "[[0, 1, 2], [0, 1, 2]]", "[[1], [2, 2], [3, 3, 3]]", "Error"],
    c: 0,
    e: "[i] * (i+1): [0]*1=[0], [1]*2=[1,1], [2]*3=[2,2,2].",
    de: `Multiplying a list by an integer repeats its contents. [0]*1=[0], [1]*2=[1,1], [2]*3=[2,2,2]. Each iteration builds a sublist of increasing length. Common for creating triangular structures and pattern generation.`
  }),
  // Q64: isinstance with bool subclass gotcha
  (_i: number) => ({
    q: `What is nums?\nmixed = [1, "a", 2.5, True, "b"]\nnums = [x for x in mixed if isinstance(x, int)]\nnums`,
    o: ["[1, True]", "[1]", "[1, 2.5]", "[1, 2.5, True]"],
    c: 0,
    e: "bool is a subclass of int: isinstance(True, int) is True.",
    de: `isinstance() checks if an object is an instance of a class or its subclasses. Since bool is a subclass of int in Python, isinstance(True, int) returns True. So both 1 and True pass the filter. To exclude bools, use type(x) is int instead of isinstance.`
  }),
  // Q65: Manual map (squaring)
  (_i: number) => ({
    q: `What is squared?\nnums = [1, 2, 3, 4]\nsquared = []\nfor x in nums:\n    squared.append(x ** 2)\nsquared`,
    o: ["[1, 4, 9, 16]", "[2, 4, 6, 8]", "[1, 2, 3, 4]", "[0, 1, 4, 9]"],
    c: 0,
    e: "Each element is squared: 1²=1, 2²=4, 3²=9, 4²=16.",
    de: `The map pattern applies a transformation to every element. Equivalent to list(map(lambda x: x**2, nums)) or [x**2 for x in nums]. The loop version is more explicit but the comprehension is preferred in Python for readability and performance.`
  }),
  // Q66: Manual filter
  (_i: number) => ({
    q: `What is [x for x in [1, 2, 3, 4, 5, 6] if x > 3]?`,
    o: ["[4, 5, 6]", "[1, 2, 3]", "[3, 4, 5, 6]", "[1, 2, 3, 4, 5, 6]"],
    c: 0,
    e: "Only elements strictly greater than 3 pass: 4, 5, 6.",
    de: `Comprehension with a filter condition selects elements satisfying x > 3. Note that 3 itself doesn't pass (strictly greater). Equivalent to list(filter(lambda x: x > 3, lst)). Comprehensions are the preferred Pythonic approach for filtering.`
  }),
  // Q67: List of tuples (value, square)
  (_i: number) => ({
    q: `What is [(i, i**2) for i in range(3)]?`,
    o: ["[(0, 0), (1, 1), (2, 4)]", "[(1, 1), (2, 4), (3, 9)]", "[[0,0], [1,1], [2,4]]", "Error"],
    c: 0,
    e: "Each iteration creates (value, value²): (0,0), (1,1), (2,4).",
    de: `Building a list of tuples pairs related values. (i, i**2) creates a tuple of each value with its square. Tuples are immutable, ordered pairs. This pattern is common for pairing keys with computed values.`
  }),
  // Q68: Generator exhaustion
  (_i: number) => ({
    q: `What is list(gen) after the loop?\ngen = (x for x in range(3))\nfor _ in gen:\n    pass\nlist(gen)`,
    o: ["[]", "[0, 1, 2]", "Error", "None"],
    c: 0,
    e: "Generators are single-use: once exhausted by the loop, list(gen) returns empty.",
    de: `Generators are lazy, single-use iterators. Once fully consumed by the for loop, they produce no more values — they are exhausted. list(gen) on an exhausted generator returns []. To reuse, create a new generator. This is a key difference from lists and other reusable iterables.`
  }),
  // Q69: Dict comprehension then iteration
  (_i: number) => ({
    q: `What is total?\nd = {x: x**2 for x in range(4)}\ntotal = 0\nfor k, v in d.items():\n    total += v\ntotal`,
    o: ["14", "6", "9", "10"],
    c: 0,
    e: "Sum of squared values: 0+1+4+9 = 14.",
    de: `Dict comprehension creates {0:0, 1:1, 2:4, 3:9}. Iterating .items() and summing values: 0+1+4+9 = 14. Common pattern for aggregating dictionary data. Could also use sum(d.values()).`
  }),
  // Q70: Reduce pattern (product)
  (_i: number) => ({
    q: `What is product?\nnums = [2, 3, 4]\nproduct = 1\nfor n in nums:\n    product *= n\nproduct`,
    o: ["24", "9", "12", "6"],
    c: 0,
    e: "Running product: 1×2=2, 2×3=6, 6×4=24.",
    de: `The reduce pattern collapses a list into a single value. Starting with 1 (multiplicative identity), each element updates the accumulator. 1×2=2, 2×3=6, 6×4=24. Equivalent to functools.reduce(lambda a,b: a*b, nums) or math.prod(nums) (Python 3.8+).`
  }),
  // Q71: Fibonacci generation
  (_i: number) => ({
    q: `What is fib?\nfib = [0, 1]\nfor _ in range(4):\n    fib.append(fib[-1] + fib[-2])\nfib`,
    o: ["[0, 1, 1, 2, 3, 5]", "[0, 1, 2, 3, 5, 8]", "[1, 1, 2, 3, 5]", "Error"],
    c: 0,
    e: "Each iteration appends the sum of the last two: 1, 2, 3, 5.",
    de: `Starting with [0, 1], each iteration appends fib[-1] + fib[-2]. Step by step: 1+0=1→[0,1,1], 1+1=2→[0,1,1,2], 2+1=3→[0,1,1,2,3], 3+2=5→[0,1,1,2,3,5]. This is the standard iterative Fibonacci approach.`
  }),
  // Q72: zip with star unpacking for column ops
  (_i: number) => ({
    q: `What is [a + b for a, b in zip(*[[1, 2, 3], [4, 5, 6]])]?`,
    o: ["[5, 7, 9]", "[[1, 4], [2, 5], [3, 6]]", "[1, 2, 3, 4, 5, 6]", "Error"],
    c: 0,
    e: "zip(*data) unpacks rows into zip, pairing columns: (1,4), (2,5), (3,6).",
    de: `The * operator unpacks the list into zip's arguments: zip([1,2,3], [4,5,6]). This pairs elements column-wise: (1,4), (2,5), (3,6). Each pair is summed: 5, 7, 9. This pattern is used for transposing rows to columns and element-wise operations.`
  }),
  // Q73: setdefault for first occurrence tracking
  (_i: number) => ({
    q: `What is result["l"]?\nresult = {}\nfor i, ch in enumerate("hello"):\n    result.setdefault(ch, i)\nresult["l"]`,
    o: ["2", "3", "0", "Error"],
    c: 0,
    e: "setdefault keeps the first index: 'l' first appears at index 2.",
    de: `enumerate("hello") yields (0,'h'), (1,'e'), (2,'l'), (3,'l'), (4,'o'). setdefault(ch, i) only inserts if the key is absent. 'l' is first seen at index 2, so setdefault sets it to 2. When 'l' appears again at index 3, setdefault does nothing because the key already exists.`
  }),
  // Q74: Bubble sort single pass
  (_i: number) => ({
    q: `What is nums after one pass?\nnums = [4, 2, 7, 1]\nfor i in range(len(nums)-1):\n    if nums[i] > nums[i+1]:\n        nums[i], nums[i+1] = nums[i+1], nums[i]\nnums`,
    o: ["[2, 4, 1, 7]", "[1, 2, 4, 7]", "[2, 4, 7, 1]", "[4, 2, 1, 7]"],
    c: 0,
    e: "One pass: 4↔2 swap, 7↔1 swap. Largest bubbles to end.",
    de: `One bubble sort pass compares adjacent pairs and swaps if out of order. [4,2,7,1]: 4>2→swap→[2,4,7,1], 4>7?no, 7>1→swap→[2,4,1,7]. One pass guarantees the largest element reaches the end. Full sort requires multiple passes.`
  }),
  // Q75: Dict accumulation with get()
  (_i: number) => ({
    q: `What is d?\nd = {}\nfor k, v in [("a", 1), ("b", 2), ("a", 3)]:\n    d[k] = d.get(k, 0) + v\nd`,
    o: ["{'a': 4, 'b': 2}", "{'a': 3, 'b': 2}", "{'a': 1, 'b': 2}", "Error"],
    c: 0,
    e: "d.get(k, 0) returns current value or 0, then adds v. 'a' accumulates 1+3=4.",
    de: `This pattern accumulates values for duplicate keys. For ('a',1): d.get('a',0)=0, d['a']=0+1=1. For ('b',2): d['b']=0+2=2. For ('a',3): d.get('a',0)=1, d['a']=1+3=4. This is a manual alternative to collections.Counter or defaultdict(int).`
  }),
  // Q76: Merging dicts via update
  (_i: number) => ({
    q: `What is result?\nd1 = {"a": 1}\nd2 = {"b": 2, "a": 3}\nresult = {}\nresult.update(d1)\nresult.update(d2)\nresult`,
    o: ["{'a': 3, 'b': 2}", "{'a': 1, 'b': 2}", "{'b': 2, 'a': 3}", "Error"],
    c: 0,
    e: "update() merges; later values overwrite: 'a' becomes 3.",
    de: `dict.update() merges another dict into the target. When keys conflict, the last value wins. result gets d1 first ({'a': 1}), then d2 overwrites 'a' to 3 and adds 'b'. Equivalent to {**d1, **d2} or d1 | d2 (Python 3.9+).`
  }),
  // Q77: Group-by with setdefault
  (_i: number) => ({
    q: `What is groups["a"]?\nitems = [("a", 1), ("b", 2), ("a", 3)]\ngroups = {}\nfor k, v in items:\n    groups.setdefault(k, []).append(v)\ngroups["a"]`,
    o: ["[1, 3]", "[3]", "[1]", "Error"],
    c: 0,
    e: "setdefault creates a list on first access; append adds values. 'a' collects 1 and 3.",
    de: `The group-by pattern collects values sharing the same key. setdefault(k, []) returns the existing list or creates a new empty one. For 'a': first call creates [], appends 1→[1]. Second call returns existing [1], appends 3→[1,3]. Alternative: collections.defaultdict(list).`
  }),
  // Q78: Sliding window sum
  (_i: number) => ({
    q: `What is sums?\nnums = [1, 2, 3, 4, 5]\nsums = []\nfor i in range(len(nums) - 2):\n    sums.append(sum(nums[i:i+3]))\nsums`,
    o: ["[6, 9, 12]", "[6, 9, 12, 15]", "[3, 6, 9, 12]", "Error"],
    c: 0,
    e: "Window of size 3: sum([1,2,3])=6, sum([2,3,4])=9, sum([3,4,5])=12.",
    de: `A sliding window moves a fixed-size window across a sequence. Window size 3: nums[0:3]=[1,2,3]→6, nums[1:4]=[2,3,4]→9, nums[2:5]=[3,4,5]→12. Window count = len(nums) - window_size + 1 = 3. Used in moving averages and signal processing.`
  }),
  // Q79: Left rotation
  (_i: number) => ({
    q: `What is lst after?\nlst = [1, 2, 3, 4, 5]\nfor _ in range(2):\n    lst.append(lst.pop(0))\nlst`,
    o: ["[3, 4, 5, 1, 2]", "[2, 3, 4, 5, 1]", "[5, 1, 2, 3, 4]", "Error"],
    c: 0,
    e: "Each iteration moves the first element to the end. After 2 rotations: [3,4,5,1,2].",
    de: `This simulates left rotation by popping the front and appending to back. Iter 0: pop 1→[2,3,4,5]+append 1→[2,3,4,5,1]. Iter 1: pop 2→[3,4,5,1]+append 2→[3,4,5,1,2]. Note lst.pop(0) is O(n). For efficiency, use collections.deque with rotate() or slicing: lst[k:] + lst[:k].`
  }),
  // Q80: Nested dict value extraction
  (_i: number) => ({
    q: `What is vals?\ndata = {"x": {"a": 1}, "y": {"b": 2}}\nvals = []\nfor inner in data.values():\n    vals.extend(inner.values())\nvals`,
    o: ["[1, 2]", "[{'a': 1}, {'b': 2}]", "['a', 'b']", "Error"],
    c: 0,
    e: "Outer loop gets inner dicts; inner .values() extracts 1 and 2.",
    de: `Iterating a nested dict requires accessing inner dicts first. data.values() yields {'a': 1} and {'b': 2}. inner.values() extracts [1] and [2]. extend() adds each to vals. Result: [1, 2]. Common pattern for flattening nested data structures.`
  }),
  // Q81: Simple character classifier
  (_i: number) => ({
    q: `What is ["op" if ch in "+-*" else "num" for ch in "3+5"]?`,
    o: ["['num', 'op', 'num']", "['3', '+', '5']", "['op', 'num', 'op']", "Error"],
    c: 0,
    e: "'3' → 'num', '+' → 'op', '5' → 'num'.",
    de: `Each character is classified: '3' is not in '+-*' → 'num', '+' is → 'op', '5' → 'num'. This is a simple tokenizer that classifies characters as operators or numbers. Foundation concept for parsers and expression evaluators.`
  }),
  // Q82: Sentinel-based early termination
  (_i: number) => ({
    q: `What is total?\ndata = [3, 7, 0, 5, 2]\ntotal = 0\nfor x in data:\n    if x == 0:\n        break\n    total += x\ntotal`,
    o: ["10", "17", "0", "15"],
    c: 0,
    e: "Adds 3 and 7 (total=10), then hits 0 (sentinel) and breaks.",
    de: `The sentinel pattern uses a special value (0) to signal early termination. 3→total=3, 7→total=10, 0→break. Elements 5 and 2 are never processed. Sentinel values signal "end of useful data." Common sentinels: 0, -1, None, "".`
  }),
  // Q83: Pairwise comparison
  (_i: number) => ({
    q: `What is [nums[i] < nums[i+1] for i in range(len(nums)-1)] where nums = [1, 3, 2, 4]?`,
    o: ["[True, False, True]", "[True, True, True]", "[False, True, False]", "Error"],
    c: 0,
    e: "1<3=True, 3<2=False, 2<4=True.",
    de: `Pairwise comparison checks consecutive elements. 1<3→True, 3<2→False, 2<4→True. If all True, the list is sorted ascending. range(len-1) prevents IndexError on the last element. Alternative: [a < b for a, b in zip(nums, nums[1:])].`
  }),
  // Q84: Powers of 2
  (_i: number) => ({
    q: `What is [2 ** i for i in range(6)]?`,
    o: ["[1, 2, 4, 8, 16, 32]", "[2, 4, 8, 16, 32, 64]", "[0, 2, 4, 8, 16, 32]", "Error"],
    c: 0,
    e: "2**0=1, 2**1=2, 2**2=4, ..., 2**5=32.",
    de: `Powers of 2 are generated with the ** operator. 2**0=1 (any number to the power 0 is 1). Sequence: 1, 2, 4, 8, 16, 32. Powers of 2 appear throughout CS: memory sizes, hash table capacities. Bit shifting equivalent: 1 << i.`
  }),
  // Q85: Formatted output with enumerate + join
  (_i: number) => ({
    q: `What is "-".join([f"{i}:{v}" for i, v in enumerate(["a", "b", "c"])])?`,
    o: ["'0:a-1:b-2:c'", "'a:0-b:1-c:2'", "'0-a-1-b-2-c'", "Error"],
    c: 0,
    e: "enumerate gives (0,'a'), (1,'b'), (2,'c'); f-string formats, join connects.",
    de: `Combining enumerate, f-strings, and join builds formatted output. enumerate yields index-value pairs. f'{i}:{v}' formats each as '0:a', '1:b', '2:c'. join connects them with '-'. This pattern is common for generating CSV, logs, and display strings.`
  }),
  // Q86: Default dict string accumulation
  (_i: number) => ({
    q: `What is d[1]?\ndata = [(1, "a"), (2, "b"), (1, "c")]\nd = {}\nfor k, v in data:\n    d[k] = d.get(k, "") + v\nd[1]`,
    o: ["'ac'", "'a'", "'c'", "Error"],
    c: 0,
    e: "d.get(1,'')='', +'a'='a'. Then d.get(1,'')='a', +'c'='ac'.",
    de: `Same accumulation pattern as numeric summing but with string concatenation. get(k, '') returns empty string for new keys. First: ''+'a'='a'. Second: 'a'+'c'='ac'. Equivalent to defaultdict(str). Useful for building composite strings from grouped records.`
  }),
  // Q87: ASCII character generation
  (_i: number) => ({
    q: `What is "".join([chr(i) for i in range(65, 70)])?`,
    o: ["'ABCDE'", "'abcde'", "'65666768'", "Error"],
    c: 0,
    e: "chr(65)='A' through chr(69)='E'. ASCII uppercase starts at 65.",
    de: `chr() converts an integer ASCII code to its character. Uppercase A-Z are codes 65-90. chr(65)='A', chr(66)='B', ..., chr(69)='E'. The inverse function is ord(): ord('A')=65. Useful for generating character ranges and simple encodings.`
  }),
  // Q88: Order-preserving unique
  (_i: number) => ({
    q: `What is unique?\nitems = [3, 1, 2, 1, 3, 4]\nseen = set()\nunique = []\nfor x in items:\n    if x not in seen:\n        seen.add(x)\n        unique.append(x)\nunique`,
    o: ["[3, 1, 2, 4]", "[1, 2, 3, 4]", "[3, 1, 2, 1, 3, 4]", "Error"],
    c: 0,
    e: "Duplicates skipped via set lookup; insertion order preserved.",
    de: `This removes duplicates while preserving original order of first appearances. set() provides O(1) membership testing. Unlike list(set(items)) which returns [1,2,3,4] (sorted-like), this gives [3,1,2,4] (insertion order). In Python 3.7+, list(dict.fromkeys(items)) is a shortcut.`
  }),
  // Q89: Cumulative product
  (_i: number) => ({
    q: `What is product?\nnums = [1, 2, 3, 4]\nproduct = 1\nfor x in nums:\n    product *= x\nproduct`,
    o: ["24", "10", "12", "0"],
    c: 0,
    e: "1×1=1, 1×2=2, 2×3=6, 6×4=24.",
    de: `Cumulative product multiplies all elements. Start with 1 (identity for multiplication). 1×1=1, 1×2=2, 2×3=6, 6×4=24. Starting with 0 would always give 0 (common bug). Equivalent to math.prod([1,2,3,4]) in Python 3.8+.`
  }),
  // Q90: Multiple ranges concatenated
  (_i: number) => ({
    q: `What is result?\nresult = []\nfor r in [range(3), range(10, 13)]:\n    for x in r:\n        result.append(x)\nresult`,
    o: ["[0, 1, 2, 10, 11, 12]", "[0, 1, 2, 3, 10, 11, 12, 13]", "[10, 11, 12, 0, 1, 2]", "Error"],
    c: 0,
    e: "Iterates range(3) then range(10,13), concatenating both sequences.",
    de: `This concatenates multiple ranges by iterating over a list of range objects. range(3)→0,1,2 then range(10,13)→10,11,12. Equivalent to itertools.chain(range(3), range(10, 13)). Useful for processing non-contiguous index ranges.`
  }),
  // Q91: Chunking/batching a list
  (_i: number) => ({
    q: `What is chunks?\ndata = [1, 2, 3, 4, 5, 6]\nchunks = []\nfor i in range(0, len(data), 2):\n    chunks.append(data[i:i+2])\nchunks`,
    o: ["[[1, 2], [3, 4], [5, 6]]", "[[1, 2], [3, 4], [5, 6], []]", "[[1, 2, 3], [4, 5, 6]]", "Error"],
    c: 0,
    e: "range(0, 6, 2) → i=0,2,4. Each slice takes 2 elements.",
    de: `Chunking splits a sequence into fixed-size sub-lists. range step matches chunk size. i=0: [1,2], i=2: [3,4], i=4: [5,6]. If length isn't divisible by chunk size, the last chunk is simply shorter (no error). Pattern: [data[i:i+n] for i in range(0, len(data), n)].`
  }),
  // Q92: Grouping words by first letter
  (_i: number) => ({
    q: `What is d["h"]?\nwords = ["hi", "hey", "bye"]\nd = {}\nfor w in words:\n    d.setdefault(w[0], []).append(w)\nd["h"]`,
    o: ["['hi', 'hey']", "['hi']", "['hey']", "Error"],
    c: 0,
    e: "Groups by first letter: 'hi' and 'hey' both start with 'h'.",
    de: `This builds a dict mapping first letters to words starting with that letter. w[0] extracts the first character. setdefault creates or retrieves the list. 'hi'→d['h']=['hi'], then 'hey'→d['h']=['hi','hey']. Common for building prefix indexes.`
  }),
  // Q93: Interleaving two sequences
  (_i: number) => ({
    q: `What is result?\na = [1, 2, 3]\nb = ["x", "y", "z"]\nresult = []\nfor i in range(len(a)):\n    result.extend([a[i], b[i]])\nresult`,
    o: ["[1, 'x', 2, 'y', 3, 'z']", "[[1, 'x'], [2, 'y'], [3, 'z']]", "[1, 2, 3, 'x', 'y', 'z']", "Error"],
    c: 0,
    e: "extend adds both a[i] and b[i] each iteration, interleaving.",
    de: `Interleaving alternates elements from two sequences. extend([a[i], b[i]]) adds both elements each iteration. Alternative: [v for pair in zip(a, b) for v in pair]. Used in merge operations and round-robin scheduling.`
  }),
  // Q94: Histogram counting
  (_i: number) => ({
    q: `What is hist["a"]?\nhist = {}\nfor ch in "banana":\n    hist[ch] = hist.get(ch, 0) + 1\nhist["a"]`,
    o: ["3", "2", "1", "6"],
    c: 0,
    e: "'banana' has 3 a's at positions 1, 3, 5.",
    de: `Histogram counting tallies occurrences using dict.get(ch, 0) to return 0 for new keys. 'banana': b→1, a→1, n→1, a→2, n→2, a→3. hist = {'b':1, 'a':3, 'n':2}. Equivalent to collections.Counter('banana'). Foundation for frequency analysis.`
  }),
  // Q95: Conditional multiple conditions
  (_i: number) => ({
    q: `What is [x for x in range(10) if x % 2 == 0 and x % 3 == 0]?`,
    o: ["[0, 6]", "[0, 2, 3, 6]", "[6]", "[0, 3, 6, 9]"],
    c: 0,
    e: "Divisible by both 2 and 3 (i.e., by 6): 0 and 6.",
    de: `The 'and' operator requires both conditions to be True. From 0-9, only 0 and 6 are divisible by both 2 and 3 (LCM=6). 'and' short-circuits: if x%2!=0, Python skips the x%3 check. Chained conditions are cleaner than nested if statements.`
  }),
  // Q96: Dict comprehension with conditional
  (_i: number) => ({
    q: `What is {k: v for k, v in {"a": 1, "b": 2, "c": 3}.items() if v > 1}?`,
    o: ["{'b': 2, 'c': 3}", "{'a': 1}", "{'a': 1, 'b': 2, 'c': 3}", "Error"],
    c: 0,
    e: "Dict comprehension with filter: only values > 1 are kept.",
    de: `Dict comprehensions support if clauses for filtering. .items() yields ('a',1), ('b',2), ('c',3). Only pairs where v > 1 are included: ('b',2) and ('c',3). This is the dict equivalent of list comprehension filtering. Common for creating subsets of dictionaries.`
  }),
  // Q97: Nested list with enumerate
  (_i: number) => ({
    q: `What is [(i, c) for i, c in enumerate("xyz")]?`,
    o: ["[(0, 'x'), (1, 'y'), (2, 'z')]", "[('x', 0), ('y', 1), ('z', 2)]", "['x', 'y', 'z']", "Error"],
    c: 0,
    e: "enumerate yields (index, char) pairs: (0,'x'), (1,'y'), (2,'z').",
    de: `enumerate() on a string yields (index, character) tuples. The comprehension collects them into a list. This is a concise way to pair each character with its position. Useful for building index maps and position-aware processing.`
  }),
  // Q98: String to list of words with processing
  (_i: number) => ({
    q: `What is [w.upper() for w in "hello world".split()]?`,
    o: ["['HELLO', 'WORLD']", "['Hello', 'World']", "['hello', 'world']", "Error"],
    c: 0,
    e: "split() separates words; upper() converts each to uppercase.",
    de: `split() breaks 'hello world' into ['hello', 'world']. The comprehension applies upper() to each word: 'HELLO', 'WORLD'. This chain of split → transform → collect is the standard pattern for text processing in Python. join() can reassemble if needed.`
  }),
  // Q99: zip to create dict directly
  (_i: number) => ({
    q: `What is dict(zip(["name", "age"], ["Alice", 30]))?`,
    o: ["{'name': 'Alice', 'age': 30}", "{'Alice': 'name', 30: 'age'}", "[('name', 'Alice'), ('age', 30)]", "Error"],
    c: 0,
    e: "dict(zip(keys, values)) creates a dictionary from parallel sequences.",
    de: `dict(zip(keys, values)) is the one-liner for building a dictionary from two parallel sequences. zip pairs them: ('name','Alice'), ('age',30). dict() converts the pairs into a dictionary. This is more concise than the loop equivalent and a very common Python idiom.`
  }),
  // Q100: Nested list comprehension with condition
  (_i: number) => ({
    q: `What is [[j for j in range(i)] for i in range(1, 5)]?`,
    o: ["[[0], [0, 1], [0, 1, 2], [0, 1, 2, 3]]", "[[1], [1, 2], [1, 2, 3], [1, 2, 3, 4]]", "[[0, 1, 2, 3]]", "Error"],
    c: 0,
    e: "i=1: [0], i=2: [0,1], i=3: [0,1,2], i=4: [0,1,2,3].",
    de: `Nested comprehension where the inner range depends on the outer variable. For i=1: range(1)=[0]. For i=2: range(2)=[0,1]. For i=3: range(3)=[0,1,2]. For i=4: range(4)=[0,1,2,3]. This builds a triangular structure. Common for creating staircase patterns and Pascal's triangle-like structures.`
  }),
];
