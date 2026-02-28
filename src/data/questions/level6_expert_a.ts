// --- LEVEL 6 EXPERT A: Counter Deep-Dive, defaultdict Advanced Patterns & OrderedDict — 50 TRULY UNIQUE QUESTIONS ---
export const level6ExpertA = [
  // ===== COUNTER DEEP-DIVE (1–25) =====

  // Q1: Counter basic construction from string
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import Counter\nCounter("hello")`,
    o: ["Counter({'l': 2, 'h': 1, 'e': 1, 'o': 1})", "Counter({'h': 1, 'e': 1, 'l': 2, 'o': 1})", "{'h': 1, 'e': 1, 'l': 2, 'o': 1}", "Error"],
    c: 0,
    e: "Counter counts each character. 'l' appears twice, others once. most_common ordering puts highest count first.",
    de: `Counter is a dict subclass from the collections module that counts hashable objects. Counter("hello") iterates through each character and tallies occurrences.

Key concepts:
• Counter("hello") counts: h→1, e→1, l→2, o→1
• The repr orders elements by count (highest first), then by insertion order for ties
• Counter is a subclass of dict, so it supports all dict operations
• Missing keys return 0 instead of raising KeyError

How it works:
• Iterates through "hello": h, e, l, l, o
• Builds internal dict: {'h': 1, 'e': 1, 'l': 2, 'o': 1}
• Display orders by count descending: l (2) first, then h, e, o (1 each)

Example:
>>> from collections import Counter
>>> Counter("hello")
Counter({'l': 2, 'h': 1, 'e': 1, 'o': 1})

Counter accepts any iterable: strings, lists, tuples, or keyword arguments like Counter(a=3, b=1).`
  }),

  // Q2: Accessing a count that exists
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import Counter\nCounter("hello")["l"]`,
    o: ["2", "1", "0", "KeyError"],
    c: 0,
    e: "The letter 'l' appears twice in 'hello', so Counter('hello')['l'] returns 2.",
    de: `Counter objects support subscript access just like dictionaries. Counter("hello")["l"] returns the count of 'l' in the string "hello".

Key concepts:
• Counter["key"] returns the count of that element
• 'l' appears at indices 2 and 3 in "hello"
• The count is 2
• This works like a regular dict lookup for existing keys

How it works:
• Counter("hello") builds {'h': 1, 'e': 1, 'l': 2, 'o': 1}
• Accessing ["l"] returns the stored count: 2

Example:
>>> Counter("hello")["l"]
2
>>> Counter("hello")["h"]
1

Unlike regular dicts, Counter returns 0 for missing keys rather than raising KeyError.`
  }),

  // Q3: Accessing a missing key returns 0
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import Counter\nCounter("hello")["z"]`,
    o: ["0", "KeyError", "None", "False"],
    c: 0,
    e: "Counter returns 0 for missing keys instead of raising KeyError — a key difference from regular dicts.",
    de: `Counter's __missing__ method returns 0 for any key not in the counter. This is one of the most important differences between Counter and a regular dict.

Key concepts:
• Regular dict["missing"] raises KeyError
• Counter["missing"] returns 0
• This makes counting operations seamless — no need to check membership first
• 'z' is not in "hello", so its count is 0

How it works:
• Counter("hello") has keys h, e, l, o only
• Accessing ["z"] triggers __missing__
• __missing__ returns 0 (not stored, just returned)
• No KeyError is raised

Example:
>>> Counter("hello")["z"]
0
>>> Counter("hello")["x"]
0

This enables patterns like: counter["new_item"] += 1 without initialization.`
  }),

  // Q4: most_common with argument
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import Counter\nCounter("hello").most_common(2)`,
    o: ["[('l', 2), ('h', 1)]", "[('h', 1), ('l', 2)]", "[('l', 2), ('e', 1)]", "Error"],
    c: 0,
    e: "most_common(2) returns the 2 most frequent elements as (element, count) tuples, highest count first.",
    de: `most_common(n) returns a list of the n most common elements and their counts, ordered from most to least common.

Key concepts:
• most_common(n) returns top n elements by count
• Results are (element, count) tuples
• Ordered from highest count to lowest
• Ties are broken by insertion order

How it works:
• Counter("hello") = {'h': 1, 'e': 1, 'l': 2, 'o': 1}
• most_common(2) picks top 2 by count
• 'l' has count 2 (highest) → first
• Among count-1 elements (h, e, o), 'h' was inserted first → second
• Result: [('l', 2), ('h', 1)]

Example:
>>> Counter("hello").most_common(2)
[('l', 2), ('h', 1)]
>>> Counter("hello").most_common(1)
[('l', 2)]

This is commonly used for finding the most frequent items in a dataset.`
  }),

  // Q5: most_common without argument returns all
  (_i: number) => ({
    q: `What does Counter("hello").most_common() return (no argument)?`,
    o: ["All elements sorted by count descending", "Only elements with count > 1", "The single most common element", "Error — argument required"],
    c: 0,
    e: "most_common() without an argument returns ALL elements sorted from most to least common.",
    de: `When most_common() is called without an argument (or with None), it returns all elements in the counter, sorted by count from highest to lowest.

Key concepts:
• No argument = return everything
• Still sorted by count descending
• Ties broken by insertion order
• Returns list of (element, count) tuples

How it works:
• Counter("hello").most_common() returns all 4 unique elements
• Sorted: [('l', 2), ('h', 1), ('e', 1), ('o', 1)]
• 'l' first (count 2), then h, e, o in insertion order (count 1 each)

Example:
>>> Counter("hello").most_common()
[('l', 2), ('h', 1), ('e', 1), ('o', 1)]

This is useful for getting a full frequency distribution sorted by popularity.`
  }),

  // Q6: most_common(1) on a list of numbers
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import Counter\nCounter([1, 1, 2, 3, 3, 3]).most_common(1)`,
    o: ["[(3, 3)]", "[(1, 2)]", "[3]", "3"],
    c: 0,
    e: "The number 3 appears 3 times — the most frequent. most_common(1) returns [(3, 3)] as (element, count).",
    de: `Counter works with any iterable, including lists of numbers. most_common(1) returns a list containing one tuple: the most frequent element and its count.

Key concepts:
• Counter([1, 1, 2, 3, 3, 3]) counts: {1: 2, 2: 1, 3: 3}
• most_common(1) returns the single most common element
• The number 3 appears 3 times — highest frequency
• Result is [(3, 3)] — the tuple (element=3, count=3)

How it works:
• Counter builds: {1: 2, 2: 1, 3: 3}
• most_common(1) finds element with highest count
• Element 3 has count 3 → [(3, 3)]

Example:
>>> Counter([1, 1, 2, 3, 3, 3]).most_common(1)
[(3, 3)]

Note the confusing-looking [(3, 3)] — the first 3 is the element, the second 3 is how many times it appeared.`
  }),

  // Q7: elements() method
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import Counter\nlist(Counter("aab").elements())`,
    o: ["['a', 'a', 'b']", "['a', 'b']", "[('a', 2), ('b', 1)]", "['a', 'b', 'a']"],
    c: 0,
    e: "elements() returns an iterator over elements, repeating each as many times as its count.",
    de: `The elements() method returns an iterator that yields each element repeated by its count. Elements are returned in the order they were first encountered.

Key concepts:
• Counter("aab") = Counter({'a': 2, 'b': 1})
• elements() yields 'a' twice (count 2), then 'b' once (count 1)
• Returns an iterator, so we wrap in list() to see the result
• Order follows insertion order of the Counter

How it works:
• Counter("aab") processes: a, a, b → {'a': 2, 'b': 1}
• elements() iterates: yield 'a', yield 'a', yield 'b'
• list() collects: ['a', 'a', 'b']

Example:
>>> list(Counter("aab").elements())
['a', 'a', 'b']
>>> list(Counter(a=3, b=1).elements())
['a', 'a', 'a', 'b']

Elements with zero or negative counts are not included in the output.`
  }),

  // Q8: Counter addition
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import Counter\nCounter("abc") + Counter("bcd")`,
    o: ["Counter({'b': 2, 'c': 2, 'a': 1, 'd': 1})", "Counter({'a': 1, 'b': 1, 'c': 1, 'd': 1})", "Error", "Counter({'a': 1, 'b': 2, 'c': 2, 'd': 1})"],
    c: 0,
    e: "Adding two Counters sums the counts. 'b' and 'c' appear in both, so their counts add to 2.",
    de: `The + operator on Counters adds corresponding counts together. Only positive counts are kept in the result.

Key concepts:
• Counter("abc") = {'a': 1, 'b': 1, 'c': 1}
• Counter("bcd") = {'b': 1, 'c': 1, 'd': 1}
• Addition sums counts: a: 0+1=1, b: 1+1=2, c: 1+1=2, d: 1+0=1
• Result ordered by count descending in repr

How it works:
• For each key, add counts from both Counters
• a: 1+0=1, b: 1+1=2, c: 1+1=2, d: 0+1=1
• Display: Counter({'b': 2, 'c': 2, 'a': 1, 'd': 1})

Example:
>>> Counter("abc") + Counter("bcd")
Counter({'b': 2, 'c': 2, 'a': 1, 'd': 1})

Counter addition is useful for combining frequency counts from multiple sources.`
  }),

  // Q9: Counter subtraction (drops zero/negative)
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import Counter\nCounter("abc") - Counter("bc")`,
    o: ["Counter({'a': 1})", "Counter({'a': 1, 'b': 0, 'c': 0})", "Counter({'a': 1, 'b': -1})", "Error"],
    c: 0,
    e: "Counter subtraction drops zero and negative counts. Only 'a' (count 1) remains.",
    de: `The - operator subtracts counts and drops results that are zero or negative. This is different from the subtract() method which keeps negative counts.

Key concepts:
• Counter("abc") = {'a': 1, 'b': 1, 'c': 1}
• Counter("bc") = {'b': 1, 'c': 1}
• Subtraction: a: 1-0=1, b: 1-1=0, c: 1-1=0
• Zero and negative counts are dropped from the result

How it works:
• a: 1 (only in first) → stays as 1
• b: 1-1=0 → dropped
• c: 1-1=0 → dropped
• Result: Counter({'a': 1})

Example:
>>> Counter("abc") - Counter("bc")
Counter({'a': 1})

Important: The - operator drops zero/negative, but subtract() method keeps them in-place.`
  }),

  // Q10: Counter intersection (min counts)
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import Counter\nCounter("abc") & Counter("bcd")`,
    o: ["Counter({'b': 1, 'c': 1})", "Counter({'a': 1, 'b': 1, 'c': 1, 'd': 1})", "Counter({'b': 2, 'c': 2})", "Error"],
    c: 0,
    e: "Counter intersection (&) takes the minimum count for each element. Only 'b' and 'c' appear in both.",
    de: `The & operator computes the intersection of two Counters by taking the minimum count for each element. Elements not present in both get count 0 and are excluded.

Key concepts:
• Counter("abc") = {'a': 1, 'b': 1, 'c': 1}
• Counter("bcd") = {'b': 1, 'c': 1, 'd': 1}
• Intersection takes min: a: min(1,0)=0, b: min(1,1)=1, c: min(1,1)=1, d: min(0,1)=0
• Zero counts are excluded

How it works:
• 'a' only in first → min(1, 0) = 0 → excluded
• 'b' in both → min(1, 1) = 1 → included
• 'c' in both → min(1, 1) = 1 → included
• 'd' only in second → min(0, 1) = 0 → excluded

Example:
>>> Counter("abc") & Counter("bcd")
Counter({'b': 1, 'c': 1})

This is useful for finding common elements with their minimum shared frequency.`
  }),

  // Q11: Counter union (max counts)
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import Counter\nCounter("aab") | Counter("bcc")`,
    o: ["Counter({'a': 2, 'c': 2, 'b': 1})", "Counter({'a': 2, 'b': 2, 'c': 2})", "Counter({'a': 2, 'b': 1, 'c': 2})", "Error"],
    c: 0,
    e: "Counter union (|) takes the maximum count for each element. 'a' max is 2, 'c' max is 2, 'b' max is 1.",
    de: `The | operator computes the union of two Counters by taking the maximum count for each element.

Key concepts:
• Counter("aab") = {'a': 2, 'b': 1}
• Counter("bcc") = {'b': 1, 'c': 2}
• Union takes max: a: max(2,0)=2, b: max(1,1)=1, c: max(0,2)=2
• All elements with positive max counts are included

How it works:
• 'a': max(2, 0) = 2
• 'b': max(1, 1) = 1
• 'c': max(0, 2) = 2
• Result: Counter({'a': 2, 'c': 2, 'b': 1})

Example:
>>> Counter("aab") | Counter("bcc")
Counter({'a': 2, 'c': 2, 'b': 1})

Union is like a "best of both" — for each element, keep the higher count.`
  }),

  // Q12: sum of Counter values
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import Counter\nc = Counter("aab")\nsum(c.values())`,
    o: ["3", "2", "{'a': 2, 'b': 1}", "Error"],
    c: 0,
    e: "c.values() returns [2, 1] (counts of 'a' and 'b'). sum() adds them: 2 + 1 = 3.",
    de: `Since Counter is a dict subclass, .values() returns the counts. Summing them gives the total number of elements counted.

Key concepts:
• Counter("aab") = {'a': 2, 'b': 1}
• c.values() returns dict_values([2, 1])
• sum([2, 1]) = 3
• This equals the length of the original iterable: len("aab") = 3

How it works:
• Counter counts: a→2, b→1
• .values() extracts just the counts: [2, 1]
• sum() adds them: 2 + 1 = 3

Example:
>>> c = Counter("aab")
>>> sum(c.values())
3
>>> len("aab")
3

In Python 3.10+, Counter has a .total() method that does this directly.`
  }),

  // Q13: Converting Counter to regular dict
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import Counter\ndict(Counter("aab"))`,
    o: ["{'a': 2, 'b': 1}", "Counter({'a': 2, 'b': 1})", "[('a', 2), ('b', 1)]", "Error"],
    c: 0,
    e: "dict() converts a Counter to a plain dictionary, losing the Counter-specific behavior.",
    de: `Since Counter is a dict subclass, passing it to dict() creates a regular dictionary with the same key-value pairs (element-count pairs).

Key concepts:
• Counter("aab") = Counter({'a': 2, 'b': 1})
• dict() strips the Counter wrapper
• Result is a plain dict: {'a': 2, 'b': 1}
• Loses Counter features like missing-key-returns-0 and arithmetic operators

How it works:
• Counter("aab") stores {'a': 2, 'b': 1} internally
• dict() copies key-value pairs into a new regular dict
• Result: {'a': 2, 'b': 1}

Example:
>>> dict(Counter("aab"))
{'a': 2, 'b': 1}
>>> type(dict(Counter("aab")))
<class 'dict'>

Converting to dict is useful when you need a plain dict for JSON serialization or APIs that don't accept Counter.`
  }),

  // Q14: update() adds counts
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import Counter\nc = Counter("hello")\nc.update("world")\nc["l"]`,
    o: ["3", "2", "1", "Error"],
    c: 0,
    e: "Counter('hello') has l:2. update('world') adds l:1 from 'world'. Total l count: 2+1=3.",
    de: `Counter.update() adds counts from another iterable (or Counter or mapping). It does not replace — it adds to existing counts.

Key concepts:
• Counter("hello") = {'h': 1, 'e': 1, 'l': 2, 'o': 1}
• "world" contains one 'l'
• update() adds: l count goes from 2 to 2+1=3
• This is different from dict.update() which replaces values

How it works:
• Start: c = {'h': 1, 'e': 1, 'l': 2, 'o': 1}
• update("world") counts w:1, o:1, r:1, l:1, d:1
• Adds to existing: l: 2+1=3, o: 1+1=2, plus new keys w, r, d
• c["l"] = 3

Example:
>>> c = Counter("hello")
>>> c.update("world")
>>> c["l"]
3

Key difference: dict.update() replaces values, but Counter.update() adds counts.`
  }),

  // Q15: subtract() reduces counts
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import Counter\nc = Counter("hello")\nc.subtract("lo")\nc["l"]`,
    o: ["1", "2", "0", "Error"],
    c: 0,
    e: "Counter('hello') has l:2. subtract('lo') removes one 'l'. Result: 2-1=1.",
    de: `Counter.subtract() reduces counts by the amounts in another iterable. Unlike the - operator, subtract() keeps zero and negative counts in place.

Key concepts:
• Counter("hello") = {'h': 1, 'e': 1, 'l': 2, 'o': 1}
• "lo" has l:1, o:1
• subtract() reduces: l: 2-1=1, o: 1-1=0
• Counts can go to zero or negative (kept in the Counter)

How it works:
• Start: c['l'] = 2
• subtract("lo") subtracts l:1
• c['l'] = 2 - 1 = 1

Example:
>>> c = Counter("hello")
>>> c.subtract("lo")
>>> c["l"]
1

subtract() modifies the Counter in place and does not drop zero/negative counts.`
  }),

  // Q16: subtract() can produce zero counts
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import Counter\nc = Counter("hello")\nc.subtract("lo")\nc["o"]`,
    o: ["0", "1", "-1", "KeyError"],
    c: 0,
    e: "Counter('hello') has o:1. subtract('lo') removes one 'o'. Result: 1-1=0. Zero counts are kept.",
    de: `After subtract(), counts can become zero. The key remains in the Counter with a count of 0 — it is not removed.

Key concepts:
• Counter("hello") has 'o': 1
• "lo" has 'o': 1
• After subtract: o: 1-1=0
• The key 'o' stays in the Counter with count 0
• Accessing it returns 0 (same as a missing key, but 'o' is actually present)

How it works:
• c["o"] was 1
• subtract("lo") subtracts 1 from 'o'
• c["o"] = 0
• 'o' is still a key in c, just with count 0

Example:
>>> c = Counter("hello")
>>> c.subtract("lo")
>>> c["o"]
0
>>> "o" in c
True

Zero-count elements are kept by subtract() but would be excluded by the - operator.`
  }),

  // Q17: Unary + strips zero and negative counts
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import Counter\nc = Counter(a=4, b=2, c=0, d=-2)\n+c`,
    o: ["Counter({'a': 4, 'b': 2})", "Counter({'a': 4, 'b': 2, 'c': 0, 'd': -2})", "Counter({'a': 4, 'b': 2, 'c': 0})", "Error"],
    c: 0,
    e: "Unary + on a Counter strips elements with zero or negative counts, keeping only positive ones.",
    de: `The unary + operator on a Counter returns a new Counter with only the positive counts. Zero and negative counts are removed.

Key concepts:
• c = Counter(a=4, b=2, c=0, d=-2)
• +c creates a new Counter keeping only positive counts
• a: 4 (positive → kept), b: 2 (positive → kept)
• c: 0 (zero → removed), d: -2 (negative → removed)

How it works:
• Unary + iterates through the Counter
• Keeps only elements where count > 0
• Returns a new Counter: Counter({'a': 4, 'b': 2})
• Original Counter is not modified

Example:
>>> c = Counter(a=4, b=2, c=0, d=-2)
>>> +c
Counter({'a': 4, 'b': 2})

This is useful for cleaning up a Counter after subtract() operations that may have created zero/negative counts.`
  }),

  // Q18: Unary - negates and keeps positive results
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import Counter\nc = Counter(a=4, b=2, c=0, d=-2)\n-c`,
    o: ["Counter({'d': 2})", "Counter({'a': -4, 'b': -2, 'd': 2})", "Counter({'a': 4, 'b': 2})", "Error"],
    c: 0,
    e: "Unary - negates all counts, then keeps only the positive results. d: -(-2) = 2 is the only positive.",
    de: `The unary - operator negates all counts and returns a new Counter with only the positive results (those that were originally negative).

Key concepts:
• c = Counter(a=4, b=2, c=0, d=-2)
• -c negates each count: a→-4, b→-2, c→0, d→2
• Then keeps only positive: d→2
• Result: Counter({'d': 2})

How it works:
• a: -4 (negative after negation → removed)
• b: -2 (negative after negation → removed)
• c: 0 (zero after negation → removed)
• d: -(-2) = 2 (positive → kept)
• Result: Counter({'d': 2})

Example:
>>> c = Counter(a=4, b=2, c=0, d=-2)
>>> -c
Counter({'d': 2})

Unary - effectively extracts the "deficit" elements from a Counter.`
  }),

  // Q19: Counter equality ignores order
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import Counter\nCounter("abcabc") == Counter("aabbcc")`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "Both strings have the same character counts (a:2, b:2, c:2), so the Counters are equal.",
    de: `Counter equality compares counts, not the order of the original elements. Two Counters are equal if and only if they have the same elements with the same counts.

Key concepts:
• Counter("abcabc") = {'a': 2, 'b': 2, 'c': 2}
• Counter("aabbcc") = {'a': 2, 'b': 2, 'c': 2}
• Same counts for every element → equal
• Order of the original string doesn't matter

How it works:
• "abcabc" has: a×2, b×2, c×2
• "aabbcc" has: a×2, b×2, c×2
• Identical counts → True

Example:
>>> Counter("abcabc") == Counter("aabbcc")
True

This is why Counter is great for anagram detection — two strings are anagrams if their Counters are equal.`
  }),

  // Q20: Counter inequality
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import Counter\nCounter("abc") == Counter("ab")`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "Counter('abc') has 3 elements, Counter('ab') has 2. Different counts means not equal.",
    de: `Two Counters are equal only if they have the exact same elements with the exact same counts. Missing an element is equivalent to having count 0.

Key concepts:
• Counter("abc") = {'a': 1, 'b': 1, 'c': 1}
• Counter("ab") = {'a': 1, 'b': 1}
• 'c' has count 1 in first but 0 in second
• Different counts → not equal → False

How it works:
• Compare each element's count
• 'a': 1 == 1 ✓, 'b': 1 == 1 ✓, 'c': 1 != 0 ✗
• At least one mismatch → False

Example:
>>> Counter("abc") == Counter("ab")
False
>>> Counter("ab") == Counter("ba")
True

The equality check considers all elements from both Counters.`
  }),

  // Q21: Incrementing Counter via subscript
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import Counter\nc = Counter()\nc["a"] += 1\nc["a"] += 1\nc["a"]`,
    o: ["2", "1", "0", "KeyError"],
    c: 0,
    e: "Starting from 0 (missing key default), two increments give c['a'] = 2.",
    de: `Since Counter returns 0 for missing keys, you can increment directly without initialization. c["a"] += 1 is equivalent to c["a"] = c["a"] + 1 = 0 + 1 = 1.

Key concepts:
• Counter() creates an empty Counter
• c["a"] returns 0 (missing key default)
• c["a"] += 1 sets c["a"] = 0 + 1 = 1
• Second c["a"] += 1 sets c["a"] = 1 + 1 = 2

How it works:
• Start: c = Counter() (empty)
• c["a"] += 1 → c["a"] = 0 + 1 = 1
• c["a"] += 1 → c["a"] = 1 + 1 = 2
• c["a"] = 2

Example:
>>> c = Counter()
>>> c["a"] += 1
>>> c["a"] += 1
>>> c["a"]
2

This pattern is simpler than using a regular dict where you'd need c.setdefault("a", 0) or c.get("a", 0).`
  }),

  // Q22: sorted items of Counter
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import Counter\nsorted(Counter("banana").items())`,
    o: ["[('a', 3), ('b', 1), ('n', 2)]", "[('b', 1), ('a', 3), ('n', 2)]", "[('a', 3), ('n', 2), ('b', 1)]", "Error"],
    c: 0,
    e: "sorted() on Counter.items() sorts by key alphabetically: ('a',3), ('b',1), ('n',2).",
    de: `Counter.items() returns (element, count) pairs like any dict. sorted() on these tuples sorts by the first element of each tuple (the key) alphabetically.

Key concepts:
• Counter("banana") = {'b': 1, 'a': 3, 'n': 2}
• .items() returns dict_items([('b', 1), ('a', 3), ('n', 2)])
• sorted() sorts tuples by first element (the key): 'a' < 'b' < 'n'
• Result: [('a', 3), ('b', 1), ('n', 2)]

How it works:
• Items: ('b', 1), ('a', 3), ('n', 2)
• Sort by key: 'a' → ('a', 3), 'b' → ('b', 1), 'n' → ('n', 2)
• Result: [('a', 3), ('b', 1), ('n', 2)]

Example:
>>> sorted(Counter("banana").items())
[('a', 3), ('b', 1), ('n', 2)]

To sort by count instead, use: sorted(c.items(), key=lambda x: x[1], reverse=True).`
  }),

  // Q23: Subtracting identical Counters
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import Counter\nCounter("hello") - Counter("hello")`,
    o: ["Counter()", "Counter({'h': 0, 'e': 0, 'l': 0, 'o': 0})", "{}", "Error"],
    c: 0,
    e: "Subtracting identical Counters gives all zeros. The - operator drops zeros, resulting in Counter().",
    de: `When you subtract a Counter from itself, all counts become zero. The - operator drops zero and negative counts, so the result is an empty Counter().

Key concepts:
• Counter("hello") - Counter("hello")
• Every element: count - count = 0
• The - operator removes zero counts
• Result: Counter() — an empty Counter

How it works:
• h: 1-1=0 → dropped
• e: 1-1=0 → dropped
• l: 2-2=0 → dropped
• o: 1-1=0 → dropped
• All dropped → Counter()

Example:
>>> Counter("hello") - Counter("hello")
Counter()
>>> bool(Counter("hello") - Counter("hello"))
False

An empty Counter is falsy in boolean context.`
  }),

  // Q24: len of Counter counts unique elements
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import Counter\nlen(Counter("hello"))`,
    o: ["4", "5", "3", "2"],
    c: 0,
    e: "len() returns the number of unique elements. 'hello' has 4 unique characters: h, e, l, o.",
    de: `len() on a Counter returns the number of distinct elements (unique keys), not the total count of all elements.

Key concepts:
• Counter("hello") = {'h': 1, 'e': 1, 'l': 2, 'o': 1}
• len() counts keys: h, e, l, o → 4 keys
• This is the number of unique characters, not the string length
• "hello" has 5 characters but only 4 unique ones

How it works:
• Counter has 4 keys: 'h', 'e', 'l', 'o'
• len() returns 4
• Note: len("hello") = 5, but len(Counter("hello")) = 4

Example:
>>> len(Counter("hello"))
4
>>> len("hello")
5

To get total count of all elements, use sum(c.values()) instead.`
  }),

  // Q25: sorted elements() output
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import Counter\nc = Counter(a=2, b=3)\nsorted(c.elements())`,
    o: ["['a', 'a', 'b', 'b', 'b']", "['a', 'b', 'b', 'b', 'a']", "[('a', 2), ('b', 3)]", "['a', 'b']"],
    c: 0,
    e: "elements() yields 'a' twice and 'b' three times. sorted() arranges them alphabetically.",
    de: `elements() returns each element repeated by its count. sorted() then arranges all elements alphabetically.

Key concepts:
• Counter(a=2, b=3) has 'a' with count 2, 'b' with count 3
• elements() yields: 'a', 'a', 'b', 'b', 'b'
• sorted() arranges alphabetically: 'a', 'a', 'b', 'b', 'b'
• Result: ['a', 'a', 'b', 'b', 'b']

How it works:
• elements() produces: a, a, b, b, b (in insertion order)
• sorted() sorts alphabetically (already in order here)
• Result: ['a', 'a', 'b', 'b', 'b']

Example:
>>> c = Counter(a=2, b=3)
>>> sorted(c.elements())
['a', 'a', 'b', 'b', 'b']

elements() is useful for reconstructing the original data from a frequency count.`
  }),

  // ===== DEFAULTDICT ADVANCED PATTERNS (26–40) =====

  // Q26: defaultdict(int) auto-creates 0
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import defaultdict\nd = defaultdict(int)\nd["x"]`,
    o: ["0", "None", "KeyError", "''"],
    c: 0,
    e: "defaultdict(int) calls int() for missing keys. int() returns 0.",
    de: `defaultdict takes a factory function that is called to provide a default value for missing keys. When the factory is int, it calls int() which returns 0.

Key concepts:
• defaultdict(int) uses int as the default_factory
• Accessing a missing key triggers the factory: int() → 0
• The value is stored in the dict, not just returned
• After d["x"], d now contains {"x": 0}

How it works:
• d = defaultdict(int) — factory is int
• d["x"] — "x" not found
• Calls int() → 0
• Stores d["x"] = 0
• Returns 0

Example:
>>> d = defaultdict(int)
>>> d["x"]
0
>>> d
defaultdict(<class 'int'>, {'x': 0})

This makes defaultdict(int) perfect for counting without initialization.`
  }),

  // Q27: defaultdict(list) auto-creates empty list
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import defaultdict\nd = defaultdict(list)\nd["a"]`,
    o: ["[]", "None", "KeyError", "0"],
    c: 0,
    e: "defaultdict(list) calls list() for missing keys. list() returns an empty list [].",
    de: `When the factory function is list, accessing a missing key calls list() which returns a new empty list [].

Key concepts:
• defaultdict(list) uses list as the default_factory
• Accessing missing "a" triggers: list() → []
• A new empty list is created and stored at d["a"]
• Subsequent accesses return the same list object

How it works:
• d["a"] not found → calls list() → []
• d["a"] = [] is stored
• Returns []

Example:
>>> d = defaultdict(list)
>>> d["a"]
[]
>>> d["a"].append(1)
>>> d["a"]
[1]

This pattern eliminates the need for d.setdefault("a", []).append(item).`
  }),

  // Q28: defaultdict(set) with add operations
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import defaultdict\nd = defaultdict(set)\nd["a"].add(1)\nd["a"].add(2)\nd["a"]`,
    o: ["{1, 2}", "set()", "[1, 2]", "Error"],
    c: 0,
    e: "defaultdict(set) creates empty sets for missing keys. Adding 1 and 2 gives {1, 2}.",
    de: `defaultdict(set) uses set as the factory, creating new empty sets for missing keys. You can then add elements directly without manual initialization.

Key concepts:
• defaultdict(set) creates empty set() for missing keys
• d["a"] auto-creates set() on first access
• .add(1) adds 1 to the set
• .add(2) adds 2 to the set
• Result: {1, 2}

How it works:
• d["a"] not found → set() → set stored at d["a"]
• d["a"].add(1) → {1}
• d["a"].add(2) → {1, 2}

Example:
>>> d = defaultdict(set)
>>> d["a"].add(1)
>>> d["a"].add(2)
>>> d["a"]
{1, 2}

This pattern is ideal for grouping unique values by key.`
  }),

  // Q29: Using defaultdict(int) for character counting
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import defaultdict\nd = defaultdict(int)\nfor c in "hello":\n    d[c] += 1\nd["l"]`,
    o: ["2", "1", "0", "Error"],
    c: 0,
    e: "The loop counts each character. 'l' appears twice in 'hello', so d['l'] is 2.",
    de: `defaultdict(int) is the classic pattern for manual counting. Each missing key starts at 0, so += 1 works immediately.

Key concepts:
• defaultdict(int) provides 0 for missing keys
• For each character in "hello": h, e, l, l, o
• d[c] += 1 increments the count
• 'l' is incremented twice

How it works:
• h: 0+1=1, e: 0+1=1, l: 0+1=1, l: 1+1=2, o: 0+1=1
• d["l"] = 2

Example:
>>> d = defaultdict(int)
>>> for c in "hello":
...     d[c] += 1
>>> d["l"]
2

This achieves the same result as Counter("hello") but with more manual control.`
  }),

  // Q30: defaultdict(list) with append
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import defaultdict\nd = defaultdict(list)\nd["a"].append(1)\nd["a"].append(2)\nd["a"]`,
    o: ["[1, 2]", "[[1], [2]]", "[1]", "Error"],
    c: 0,
    e: "defaultdict(list) creates one list per key. Both appends add to the same list: [1, 2].",
    de: `defaultdict(list) creates a single list for each key on first access. Subsequent operations on the same key use that same list object.

Key concepts:
• d["a"] on first access creates [] and stores it
• .append(1) modifies that list in place: [1]
• .append(2) modifies the same list: [1, 2]
• Both appends target the same list object

How it works:
• d["a"] → [] (created by list())
• d["a"].append(1) → [1]
• d["a"].append(2) → [1, 2]
• d["a"] returns [1, 2]

Example:
>>> d = defaultdict(list)
>>> d["a"].append(1)
>>> d["a"].append(2)
>>> d["a"]
[1, 2]

This is the standard grouping pattern — group items by key into lists.`
  }),

  // Q31: defaultdict with lambda for custom default
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import defaultdict\nd = defaultdict(lambda: "N/A")\nd["missing"]`,
    o: ['"N/A"', "None", "KeyError", '""'],
    c: 0,
    e: 'A lambda returning "N/A" is used as factory. Missing keys get "N/A" as their default value.',
    de: `defaultdict accepts any callable as the factory function. A lambda allows you to return any custom default value.

Key concepts:
• lambda: "N/A" is a callable that returns "N/A"
• Accessing missing "missing" key triggers the lambda
• Returns "N/A" and stores it at d["missing"]
• Any callable works: lambda, function, class

How it works:
• d["missing"] not found
• Calls lambda: "N/A" → returns "N/A"
• d["missing"] = "N/A"
• Returns "N/A"

Example:
>>> d = defaultdict(lambda: "N/A")
>>> d["missing"]
'N/A'
>>> d["also_missing"]
'N/A'

Lambdas are useful when the built-in types (int, list, set) don't provide the default you need.`
  }),

  // Q32: Accessing creates keys in defaultdict
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import defaultdict\nd = defaultdict(int)\nd["a"]\nd["b"]\nlen(d)`,
    o: ["2", "0", "1", "Error"],
    c: 0,
    e: 'Accessing d["a"] and d["b"] each triggers the default factory, creating both keys. len(d) is 2.',
    de: `A critical behavior of defaultdict: merely accessing a missing key via d[key] creates that key with the default value. This is a common source of bugs.

Key concepts:
• d["a"] accesses missing "a" → creates d["a"] = 0
• d["b"] accesses missing "b" → creates d["b"] = 0
• Both keys now exist in d
• len(d) = 2

How it works:
• d = defaultdict(int) — empty
• d["a"] → triggers __missing__, stores {"a": 0}
• d["b"] → triggers __missing__, stores {"a": 0, "b": 0}
• len(d) = 2

Example:
>>> d = defaultdict(int)
>>> d["a"]
0
>>> d["b"]
0
>>> len(d)
2

This side effect means you should use "key in d" or d.get() if you don't want to create keys.`
  }),

  // Q33: "in" operator does NOT trigger default
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import defaultdict\nd = defaultdict(int)\n"x" in d`,
    o: ["False", "True", "0", "Error"],
    c: 0,
    e: '"in" checks membership without triggering the default factory. "x" was never added, so False.',
    de: `The "in" operator checks if a key exists in the defaultdict without triggering the default factory. This is different from d["x"] which would create the key.

Key concepts:
• "x" in d uses __contains__, not __getitem__
• __contains__ does not trigger __missing__
• d is empty, so "x" is not present → False
• The key "x" is NOT created by this check

How it works:
• "x" in d → calls d.__contains__("x")
• Checks if "x" is a key → No
• Returns False
• d remains empty — no side effect

Example:
>>> d = defaultdict(int)
>>> "x" in d
False
>>> len(d)
0

Always use "in" to check membership when you don't want to accidentally create keys.`
  }),

  // Q34: .get() does NOT trigger default
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import defaultdict\nd = defaultdict(int)\nd.get("x")`,
    o: ["None", "0", "KeyError", "False"],
    c: 0,
    e: '.get() returns None for missing keys without triggering the default factory. It does NOT return 0.',
    de: `dict.get() bypasses __missing__ entirely. Even though defaultdict(int) would return 0 via d["x"], d.get("x") returns None (the standard dict.get default).

Key concepts:
• d.get("x") uses dict.get(), not __getitem__
• dict.get() does not trigger __missing__
• Returns None (the default for .get() with no second argument)
• The key "x" is NOT created

How it works:
• d.get("x") checks if "x" exists → No
• Returns None (standard dict.get behavior)
• Does NOT call default_factory
• d remains empty

Example:
>>> d = defaultdict(int)
>>> d.get("x")     # None, not 0!
>>> d.get("x", 42) # 42 (explicit default)
>>> d["x"]          # 0 (triggers factory)

This is a common gotcha: d["x"] returns 0 but d.get("x") returns None.`
  }),

  // Q35: Only subscript access creates keys
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import defaultdict\nd = defaultdict(int)\nd["x"]\nd.get("y")\nlen(d)`,
    o: ["1", "2", "0", "Error"],
    c: 0,
    e: 'd["x"] creates the key (triggers factory). d.get("y") does NOT create a key. Only 1 key exists.',
    de: `This question tests the crucial difference between d[key] and d.get(key) in defaultdict: only subscript access triggers the default factory.

Key concepts:
• d["x"] triggers __missing__ → creates d["x"] = 0
• d.get("y") uses dict.get → returns None, no key created
• Only "x" exists as a key
• len(d) = 1

How it works:
• d["x"] → key not found → __missing__ → d["x"] = int() = 0 → key created
• d.get("y") → key not found → returns None → NO key created
• d has one key: {"x": 0}
• len(d) = 1

Example:
>>> d = defaultdict(int)
>>> d["x"]
0
>>> d.get("y") is None
True
>>> len(d)
1

Rule of thumb: d[key] creates, d.get(key) and "key in d" do not.`
  }),

  // Q36: defaultdict is a dict subclass
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import defaultdict\nisinstance(defaultdict(int), dict)`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "defaultdict is a subclass of dict, so isinstance returns True.",
    de: `defaultdict inherits from dict, making it a full dict subclass. It supports all dict methods and passes isinstance checks.

Key concepts:
• defaultdict is defined as: class defaultdict(dict)
• isinstance checks the inheritance chain
• defaultdict(int) IS a dict → True
• All dict methods work: .keys(), .values(), .items(), .update(), etc.

How it works:
• defaultdict(int) creates an instance of defaultdict
• isinstance checks: is defaultdict a subclass of dict? Yes
• Returns True

Example:
>>> isinstance(defaultdict(int), dict)
True
>>> isinstance(defaultdict(int), defaultdict)
True
>>> issubclass(defaultdict, dict)
True

This means defaultdict can be used anywhere a dict is expected.`
  }),

  // Q37: defaultdict with initial values and auto-default
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import defaultdict\nd = defaultdict(int, a=1, b=2)\nd["c"] += 5\nd["c"]`,
    o: ["5", "0", "KeyError", "Error"],
    c: 0,
    e: 'd["c"] starts at 0 (default from int()), then += 5 makes it 5.',
    de: `defaultdict can be initialized with both a factory and initial key-value pairs. Existing keys use their given values; missing keys use the factory.

Key concepts:
• defaultdict(int, a=1, b=2) has factory=int, initial keys a=1, b=2
• d["c"] is missing → factory int() → 0
• d["c"] += 5 → 0 + 5 = 5
• d now has: {"a": 1, "b": 2, "c": 5}

How it works:
• d starts as {"a": 1, "b": 2} with factory int
• d["c"] not found → int() = 0
• d["c"] += 5 → d["c"] = 0 + 5 = 5
• d["c"] = 5

Example:
>>> d = defaultdict(int, a=1, b=2)
>>> d["c"] += 5
>>> d["c"]
5
>>> d["a"]
1

The factory only applies to missing keys; pre-initialized keys keep their values.`
  }),

  // Q38: Inspecting default_factory attribute
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import defaultdict\nd = defaultdict(int)\nd.default_factory`,
    o: ["<class 'int'>", "0", "int", "None"],
    c: 0,
    e: "default_factory stores the factory callable itself. For int, it displays as <class 'int'>.",
    de: `Every defaultdict has a default_factory attribute that stores the callable used to generate default values. You can inspect or change it at runtime.

Key concepts:
• d.default_factory holds the factory callable
• For defaultdict(int), it holds the int class itself
• Printing it shows <class 'int'>
• It's the actual type object, not a string or the result of calling it

How it works:
• defaultdict(int) stores int as default_factory
• d.default_factory returns the int type object
• repr(int) = "<class 'int'>"
• It's the factory itself, not the default value (0)

Example:
>>> d = defaultdict(int)
>>> d.default_factory
<class 'int'>
>>> d.default_factory()
0

You can call d.default_factory() manually to see what value it would produce.`
  }),

  // Q39: Changing default_factory at runtime
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import defaultdict\nd = defaultdict(int)\nd.default_factory = list\nd["a"]`,
    o: ["[]", "0", "None", "Error"],
    c: 0,
    e: "default_factory can be changed at runtime. After setting it to list, missing keys get [] instead of 0.",
    de: `The default_factory attribute is mutable — you can reassign it to change the default value behavior at any time.

Key concepts:
• Initially d.default_factory = int (returns 0)
• Reassigned to list (returns [])
• d["a"] now triggers list() → []
• Previously created keys are unaffected

How it works:
• d = defaultdict(int) — factory is int
• d.default_factory = list — factory changed to list
• d["a"] not found → calls list() → []
• d["a"] = []

Example:
>>> d = defaultdict(int)
>>> d["x"]
0
>>> d.default_factory = list
>>> d["y"]
[]

Changing the factory doesn't affect existing keys — only new missing-key accesses use the new factory.`
  }),

  // Q40: Converting empty defaultdict to regular dict
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import defaultdict\nd = defaultdict(int)\ndict(d)`,
    o: ["{}", "defaultdict(<class 'int'>, {})", "0", "Error"],
    c: 0,
    e: "dict() converts defaultdict to a regular dict. An empty defaultdict becomes an empty dict {}.",
    de: `dict() creates a regular dictionary from a defaultdict, stripping the default_factory behavior. The resulting dict will raise KeyError for missing keys.

Key concepts:
• d = defaultdict(int) is empty (no keys added)
• dict(d) copies all key-value pairs into a regular dict
• Since d is empty, dict(d) = {}
• The result is a plain dict with no default_factory

How it works:
• defaultdict(int) has no keys yet
• dict() copies nothing → {}
• Result is a regular dict, not a defaultdict
• Missing key access will now raise KeyError

Example:
>>> d = defaultdict(int)
>>> dict(d)
{}
>>> type(dict(d))
<class 'dict'>

Converting to dict is useful when passing data to code that expects a regular dict or for serialization.`
  }),

  // ===== ORDEREDDICT AND DICT ORDERING (41–50) =====

  // Q41: Regular dicts are ordered in Python 3.7+
  (_i: number) => ({
    q: `In Python 3.7+, are regular dictionaries ordered by insertion order?`,
    o: ["Yes", "No", "Only in CPython", "Only with string keys"],
    c: 0,
    e: "Since Python 3.7, dict insertion order is guaranteed by the language specification.",
    de: `Starting with Python 3.7, regular dictionaries maintain insertion order as part of the language specification. This was an implementation detail in CPython 3.6, but became official in 3.7.

Key concepts:
• Python 3.7+ dicts preserve insertion order (guaranteed)
• Python 3.6 CPython preserved order (implementation detail, not guaranteed)
• Python 3.5 and earlier: no order guarantee
• This applies to all key types, not just strings

How it works:
• dict stores keys in the order they were first inserted
• Updating an existing key's value does NOT change its position
• Deleting and re-inserting moves the key to the end
• Iteration order matches insertion order

Example:
>>> d = {"b": 2, "a": 1, "c": 3}
>>> list(d)
['b', 'a', 'c']

Despite this, OrderedDict still has unique features: order-sensitive equality, move_to_end(), and popitem(last=False).`
  }),

  // Q42: OrderedDict basic key order
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import OrderedDict\nod = OrderedDict(a=1, b=2)\nlist(od)`,
    o: ["['a', 'b']", "['b', 'a']", "[('a', 1), ('b', 2)]", "Error"],
    c: 0,
    e: "list() on a dict (or OrderedDict) returns its keys. Insertion order is a, b.",
    de: `list() on a dictionary returns its keys in insertion order. OrderedDict(a=1, b=2) inserts 'a' first, then 'b'.

Key concepts:
• OrderedDict(a=1, b=2) creates an ordered dict with keys 'a', 'b'
• list(od) extracts just the keys (like list(dict))
• Order is insertion order: 'a' was added before 'b'
• Result: ['a', 'b']

How it works:
• OrderedDict stores: a→1, b→2 in that order
• list() iterates over keys: 'a', 'b'
• Returns ['a', 'b']

Example:
>>> od = OrderedDict(a=1, b=2)
>>> list(od)
['a', 'b']
>>> list(od.values())
[1, 2]

Note: In Python 3.7+, regular dicts also preserve insertion order, so this behavior is the same.`
  }),

  // Q43: move_to_end() default (moves to end)
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import OrderedDict\nod = OrderedDict(a=1, b=2)\nod.move_to_end("a")\nlist(od)`,
    o: ["['b', 'a']", "['a', 'b']", "Error", "['a']"],
    c: 0,
    e: 'move_to_end("a") moves key "a" to the end. New order: b, a.',
    de: `OrderedDict.move_to_end(key) moves an existing key to either end of the ordered dict. By default (last=True), it moves to the right end.

Key concepts:
• od starts with order: a, b
• move_to_end("a") moves 'a' to the end (last=True by default)
• New order: b, a
• This is an O(1) operation

How it works:
• Before: ['a', 'b']
• move_to_end("a", last=True) — moves 'a' after 'b'
• After: ['b', 'a']

Example:
>>> od = OrderedDict(a=1, b=2)
>>> od.move_to_end("a")
>>> list(od)
['b', 'a']

move_to_end() is unique to OrderedDict — regular dicts don't have this method.`
  }),

  // Q44: move_to_end with last=False (moves to beginning)
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import OrderedDict\nod = OrderedDict(a=1, b=2)\nod.move_to_end("b", last=False)\nlist(od)`,
    o: ["['b', 'a']", "['a', 'b']", "Error", "['b']"],
    c: 0,
    e: 'move_to_end("b", last=False) moves "b" to the beginning. New order: b, a.',
    de: `When last=False, move_to_end() moves the key to the beginning (left end) of the OrderedDict instead of the default right end.

Key concepts:
• od starts with order: a, b
• move_to_end("b", last=False) moves 'b' to the front
• New order: b, a
• last=False means "move to the start"

How it works:
• Before: ['a', 'b']
• move_to_end("b", last=False) — moves 'b' before 'a'
• After: ['b', 'a']

Example:
>>> od = OrderedDict(a=1, b=2)
>>> od.move_to_end("b", last=False)
>>> list(od)
['b', 'a']

This is useful for implementing LRU caches where you need to move items to the front.`
  }),

  // Q45: OrderedDict equality is order-sensitive
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import OrderedDict\nOrderedDict(a=1, b=2) == OrderedDict(b=2, a=1)`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "OrderedDict equality considers order. Same keys/values but different order → False.",
    de: `This is the key behavioral difference between OrderedDict and regular dict: OrderedDict equality checks consider insertion order, while regular dict equality does not.

Key concepts:
• OrderedDict(a=1, b=2) has order: a, b
• OrderedDict(b=2, a=1) has order: b, a
• Same key-value pairs but different order
• OrderedDict == OrderedDict: order matters → False

How it works:
• Compare keys and values AND their order
• First: a=1, b=2 (order: a, b)
• Second: b=2, a=1 (order: b, a)
• Values match but order differs → False

Example:
>>> OrderedDict(a=1, b=2) == OrderedDict(b=2, a=1)
False
>>> OrderedDict(a=1, b=2) == OrderedDict(a=1, b=2)
True

Compare with regular dict: {"a": 1, "b": 2} == {"b": 2, "a": 1} is True.`
  }),

  // Q46: Regular dict equality ignores order
  (_i: number) => ({
    q: `What is the result of:\n{"a": 1, "b": 2} == {"b": 2, "a": 1}`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "Regular dict equality only checks keys and values, not insertion order. Same pairs → True.",
    de: `Regular dictionary equality in Python only compares the key-value pairs, completely ignoring the insertion order.

Key concepts:
• {"a": 1, "b": 2} has pairs: a→1, b→2
• {"b": 2, "a": 1} has pairs: b→2, a→1
• Same key-value pairs → True
• Order does not matter for regular dict ==

How it works:
• Python checks: do both dicts have the same keys?
• For each key, do the values match?
• a: 1==1 ✓, b: 2==2 ✓
• All match → True

Example:
>>> {"a": 1, "b": 2} == {"b": 2, "a": 1}
True

This is different from OrderedDict where the same comparison returns False because order matters.`
  }),

  // Q47: OrderedDict popitem(last=True)
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import OrderedDict\nod = OrderedDict(a=1, b=2)\nod.popitem(last=True)`,
    o: ["('b', 2)", "('a', 1)", "2", "Error"],
    c: 0,
    e: "popitem(last=True) removes and returns the last inserted item: ('b', 2).",
    de: `OrderedDict.popitem() accepts a last parameter. When last=True (the default), it removes and returns the last (most recently inserted) key-value pair as a tuple.

Key concepts:
• od has order: a=1, b=2
• popitem(last=True) removes the last item: ('b', 2)
• Returns the removed item as a (key, value) tuple
• od now contains only {'a': 1}

How it works:
• Last item in order is ('b', 2)
• popitem(last=True) removes it
• Returns ('b', 2)
• od is now OrderedDict([('a', 1)])

Example:
>>> od = OrderedDict(a=1, b=2)
>>> od.popitem(last=True)
('b', 2)
>>> od
OrderedDict([('a', 1)])

This is like a stack (LIFO) operation on the ordered dict.`
  }),

  // Q48: OrderedDict popitem(last=False)
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import OrderedDict\nod = OrderedDict(a=1, b=2)\nod.popitem(last=False)`,
    o: ["('a', 1)", "('b', 2)", "1", "Error"],
    c: 0,
    e: "popitem(last=False) removes and returns the first inserted item: ('a', 1).",
    de: `When last=False, OrderedDict.popitem() removes and returns the first (oldest) key-value pair. This FIFO behavior is unique to OrderedDict.

Key concepts:
• od has order: a=1, b=2
• popitem(last=False) removes the first item: ('a', 1)
• Returns ('a', 1) as a tuple
• od now contains only {'b': 2}

How it works:
• First item in order is ('a', 1)
• popitem(last=False) removes it
• Returns ('a', 1)
• od is now OrderedDict([('b', 2)])

Example:
>>> od = OrderedDict(a=1, b=2)
>>> od.popitem(last=False)
('a', 1)
>>> od
OrderedDict([('b', 2)])

Regular dict.popitem() does not support the last parameter — it always removes LIFO.`
  }),

  // Q49: Regular dict popitem is LIFO since 3.7
  (_i: number) => ({
    q: `What is the result of:\nd = {"a": 1, "b": 2, "c": 3}\nd.popitem()`,
    o: ["('c', 3)", "('a', 1)", "3", "Error"],
    c: 0,
    e: "In Python 3.7+, dict.popitem() removes the last inserted item (LIFO). Last item is ('c', 3).",
    de: `In Python 3.7+, regular dict.popitem() removes and returns the last inserted key-value pair in LIFO (Last In, First Out) order.

Key concepts:
• d = {"a": 1, "b": 2, "c": 3} — insertion order: a, b, c
• popitem() removes the last inserted: ('c', 3)
• Returns a (key, value) tuple
• d is now {"a": 1, "b": 2}

How it works:
• Last inserted key is 'c'
• popitem() removes ('c', 3)
• Returns ('c', 3)
• d becomes {"a": 1, "b": 2}

Example:
>>> d = {"a": 1, "b": 2, "c": 3}
>>> d.popitem()
('c', 3)
>>> d
{'a': 1, 'b': 2}

Unlike OrderedDict.popitem(), regular dict.popitem() does not accept a last parameter — it always pops from the end.`
  }),

  // Q50: Updating value doesn't change OrderedDict key position
  (_i: number) => ({
    q: `What is the result of:\nfrom collections import OrderedDict\nod = OrderedDict(a=1, b=2)\nod["a"] = 10\nlist(od)`,
    o: ["['a', 'b']", "['b', 'a']", "['a', 'b', 'a']", "Error"],
    c: 0,
    e: 'Updating an existing key\'s value does NOT change its position. "a" stays first.',
    de: `Updating the value of an existing key in an OrderedDict (or regular dict) does not change its position in the insertion order. Only new keys are added at the end.

Key concepts:
• od starts with order: a=1, b=2
• od["a"] = 10 updates the value of 'a' to 10
• 'a' stays at its original position (first)
• Order remains: a, b

How it works:
• Before: OrderedDict([('a', 1), ('b', 2)])
• od["a"] = 10 — key 'a' already exists, just update value
• After: OrderedDict([('a', 10), ('b', 2)])
• list(od) = ['a', 'b'] — order unchanged

Example:
>>> od = OrderedDict(a=1, b=2)
>>> od["a"] = 10
>>> list(od)
['a', 'b']
>>> od["a"]
10

To move a key to the end after updating, you'd need to explicitly call od.move_to_end("a").`
  }),
];
