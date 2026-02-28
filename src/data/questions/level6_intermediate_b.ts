// --- LEVEL 6 INTERMEDIATE B: Advanced Dict Comprehensions, Dict Merging, ChainMap, Practical Dict Recipes (50 TRULY UNIQUE QUESTIONS) ---
// Topics 51-100: advanced dict comprehensions, dict merge operators, ChainMap, dict edge cases
export const level6IntermediateB = [
  // 51. Dict comprehension with list values built from range
  (_i: number) => ({
    q: `What is {x: [y for y in range(x)] for x in range(4)}?`,
    o: ['{0: [], 1: [0], 2: [0, 1], 3: [0, 1, 2]}', '{0: [0], 1: [0, 1], 2: [0, 1, 2], 3: [0, 1, 2, 3]}', '{1: [0], 2: [0, 1], 3: [0, 1, 2]}', 'Error'],
    c: 0,
    e: "Each key x maps to a list of numbers from 0 to x-1. range(0) is empty, range(1) is [0], etc.",
    de: `This nested comprehension builds a dict where each key x maps to a list of all integers from 0 up to (but not including) x.

Key concepts:
• Outer loop: x iterates over range(4) → 0, 1, 2, 3
• Inner comprehension: [y for y in range(x)] builds a list for each x
• range(0) → [] (empty), range(1) → [0], range(2) → [0, 1], range(3) → [0, 1, 2]

How it works:
1. x=0: range(0) produces nothing → key 0 maps to []
2. x=1: range(1) produces 0 → key 1 maps to [0]
3. x=2: range(2) produces 0,1 → key 2 maps to [0, 1]
4. x=3: range(3) produces 0,1,2 → key 3 maps to [0, 1, 2]

Result: {0: [], 1: [0], 2: [0, 1], 3: [0, 1, 2]}

Common uses:
• Building adjacency lists
• Creating lookup tables with computed values
• Generating test data structures`
  }),
  // 52. Dict comprehension computing string lengths
  (_i: number) => ({
    q: `What is {k: len(v) for k, v in {"a": "hello", "b": "hi"}.items()}?`,
    o: ['{"a": 5, "b": 2}', '{"a": "hello", "b": "hi"}', '{5: "a", 2: "b"}', '{"a": 4, "b": 1}'],
    c: 0,
    e: "The comprehension maps each key to the length of its string value. len('hello')=5, len('hi')=2.",
    de: `This dict comprehension iterates over key-value pairs and replaces each value with its length.

Key concepts:
• .items() yields (key, value) tuples: ("a", "hello"), ("b", "hi")
• len("hello") = 5, len("hi") = 2
• Original keys are preserved; values are transformed

How it works:
1. k="a", v="hello" → "a": len("hello") = 5
2. k="b", v="hi" → "b": len("hi") = 2
3. Result: {"a": 5, "b": 2}

Common uses:
• Transforming dict values while keeping keys
• Computing summary statistics from string data
• Data preprocessing pipelines`
  }),
  // 53. Character frequency via dict comprehension
  (_i: number) => ({
    q: `What value does "l" map to in {c: "hello".count(c) for c in set("hello")}?`,
    o: ['2', '1', '3', 'Error'],
    c: 0,
    e: "set('hello') gives unique chars. 'hello'.count('l') is 2 because 'l' appears twice in 'hello'.",
    de: `This comprehension builds a character frequency dict by iterating over unique characters and counting each one.

Key concepts:
• set("hello") → {'h', 'e', 'l', 'o'} (unique characters)
• "hello".count(c) counts occurrences of c in "hello"
• Result: {'h': 1, 'e': 1, 'l': 2, 'o': 1}

How it works:
1. set("hello") removes duplicates → {'h', 'e', 'l', 'o'}
2. For each unique char, count its occurrences in "hello"
3. 'l' appears at index 2 and 3 → count is 2
4. All other characters appear once

Common uses:
• Character frequency analysis
• Simple histogram building
• Text processing and analysis`
  }),
  // 54. enumerate to build index-to-char dict
  (_i: number) => ({
    q: `What is {i: c for i, c in enumerate("abc")}?`,
    o: ['{0: "a", 1: "b", 2: "c"}', '{"a": 0, "b": 1, "c": 2}', '{1: "a", 2: "b", 3: "c"}', 'Error'],
    c: 0,
    e: "enumerate('abc') yields (0,'a'), (1,'b'), (2,'c'). The comprehension maps index to character.",
    de: `This comprehension converts enumerate output into a dictionary mapping indices to characters.

Key concepts:
• enumerate("abc") yields tuples: (0, 'a'), (1, 'b'), (2, 'c')
• i gets the index, c gets the character
• Builds a positional lookup dictionary

How it works:
1. enumerate("abc") → (0, 'a'), (1, 'b'), (2, 'c')
2. Each (i, c) pair becomes a dict entry: i is key, c is value
3. Result: {0: "a", 1: "b", 2: "c"}

Common uses:
• Creating index-to-value mappings
• Building reverse lookups from sequences
• Converting enumerated data to dicts for O(1) access`
  }),
  // 55. zip two iterables into a dict
  (_i: number) => ({
    q: `What is {k: v for k, v in zip("abc", range(1, 4))}?`,
    o: ['{"a": 1, "b": 2, "c": 3}', '{"a": 0, "b": 1, "c": 2}', '[("a", 1), ("b", 2), ("c", 3)]', 'Error'],
    c: 0,
    e: "zip pairs 'a' with 1, 'b' with 2, 'c' with 3. The comprehension builds a dict from these pairs.",
    de: `This comprehension zips two iterables together and builds a dictionary from the paired elements.

Key concepts:
• zip("abc", range(1, 4)) pairs elements: ('a', 1), ('b', 2), ('c', 3)
• range(1, 4) produces 1, 2, 3 (not starting from 0)
• Equivalent to dict(zip("abc", range(1, 4)))

How it works:
1. zip pairs first elements: 'a' with 1
2. Then 'b' with 2, 'c' with 3
3. Comprehension builds dict: {"a": 1, "b": 2, "c": 3}

Common uses:
• Creating dicts from parallel lists
• Mapping labels to values
• Building configuration dicts from separate key/value sources`
  }),
  // 56. Transform keys and values simultaneously
  (_i: number) => ({
    q: `What is {k.upper(): v * 2 for k, v in {"a": 1, "b": 2}.items()}?`,
    o: ['{"A": 2, "B": 4}', '{"a": 2, "b": 4}', '{"A": 1, "B": 2}', '{"AA": 2, "BB": 4}'],
    c: 0,
    e: "Keys are uppercased and values are doubled. 'a'.upper()='A', 1*2=2, 'b'.upper()='B', 2*2=4.",
    de: `This comprehension transforms both keys and values simultaneously during dict construction.

Key concepts:
• k.upper() transforms each key to uppercase
• v * 2 doubles each value
• Both transformations happen in a single comprehension

How it works:
1. k="a", v=1 → "A": 2
2. k="b", v=2 → "B": 4
3. Result: {"A": 2, "B": 4}

Common uses:
• Normalizing dict keys (e.g., case-insensitive lookups)
• Applying transformations to both keys and values
• Data cleaning and preprocessing`
  }),
  // 57. Word frequency count using dict comprehension
  (_i: number) => ({
    q: `words = "the cat sat on the mat".split()\nWhat is {w: words.count(w) for w in set(words)}["the"]?`,
    o: ['2', '1', '3', 'Error'],
    c: 0,
    e: "'the' appears twice in the sentence. The comprehension counts each unique word's frequency.",
    de: `This builds a word frequency dictionary and then looks up the count for "the".

Key concepts:
• .split() breaks "the cat sat on the mat" into ['the', 'cat', 'sat', 'on', 'the', 'mat']
• set(words) gets unique words: {'the', 'cat', 'sat', 'on', 'mat'}
• words.count(w) counts occurrences of each word in the full list

How it works:
1. words = ['the', 'cat', 'sat', 'on', 'the', 'mat']
2. set(words) → unique words
3. words.count('the') = 2 (appears at index 0 and 4)
4. The lookup ["the"] returns 2

Common uses:
• Word frequency analysis in text processing
• Building histograms from data
• Simple text analytics without external libraries`
  }),
  // 58. Dict comprehension with boolean values
  (_i: number) => ({
    q: `What is {x: x % 2 == 0 for x in range(5)}?`,
    o: ['{0: True, 1: False, 2: True, 3: False, 4: True}', '{0: False, 1: True, 2: False, 3: True, 4: False}', '{True: [0, 2, 4], False: [1, 3]}', 'Error'],
    c: 0,
    e: "Each number maps to whether it is even. 0%2==0 is True, 1%2==0 is False, and so on.",
    de: `This comprehension creates a dict mapping each number to a boolean indicating whether it is even.

Key concepts:
• x % 2 == 0 checks if x is even
• 0 % 2 == 0 → True, 1 % 2 == 0 → False, etc.
• The value is a boolean expression result, not filtered

How it works:
1. x=0: 0%2==0 → True
2. x=1: 1%2==0 → False
3. x=2: 2%2==0 → True
4. x=3: 3%2==0 → False
5. x=4: 4%2==0 → True
Result: {0: True, 1: False, 2: True, 3: False, 4: True}

Common uses:
• Precomputing boolean properties for a range of inputs
• Creating classification mappings
• Lookup tables for conditions`
  }),
  // 59. String keys from int values
  (_i: number) => ({
    q: `What is {str(x): x for x in range(3)}?`,
    o: ['{"0": 0, "1": 1, "2": 2}', '{0: "0", 1: "1", 2: "2"}', '{"0": "0", "1": "1", "2": "2"}', 'Error'],
    c: 0,
    e: "str(x) converts each integer to its string form as the key, while the value stays an int.",
    de: `This comprehension creates a dict with string keys and integer values by converting each number to a string for the key.

Key concepts:
• str(0) → "0", str(1) → "1", str(2) → "2"
• Keys are strings, values remain integers
• Useful for JSON-compatible keys (JSON requires string keys)

How it works:
1. x=0: str(0)="0" → "0": 0
2. x=1: str(1)="1" → "1": 1
3. x=2: str(2)="2" → "2": 2
Result: {"0": 0, "1": 1, "2": 2}

Common uses:
• Preparing data for JSON serialization
• Creating string-keyed lookup tables
• Mapping between string and numeric representations`
  }),
  // 60. Tuple keys — product table without diagonal
  (_i: number) => ({
    q: `d = {(i,j): i*j for i in range(3) for j in range(3) if i != j}\nWhat is d[(1, 2)]?`,
    o: ['2', '0', '3', 'KeyError'],
    c: 0,
    e: "The comprehension builds a multiplication table skipping diagonal entries (i==j). 1*2=2.",
    de: `This comprehension creates a dict with tuple keys representing coordinate pairs, mapping to their product — but only for off-diagonal entries.

Key concepts:
• (i, j) tuple is used as a dict key (tuples are hashable)
• i * j computes the product
• if i != j excludes diagonal entries where i equals j

How it works:
1. i and j each range over 0, 1, 2
2. Pairs where i != j: (0,1), (0,2), (1,0), (1,2), (2,0), (2,1)
3. d[(1,2)] = 1*2 = 2
4. Excluded: (0,0), (1,1), (2,2) — these would give KeyError

Common uses:
• Sparse matrix representations
• Coordinate-based lookup tables
• Graph adjacency data with tuple keys`
  }),
  // 61. Filter dict by even values
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2, "c": 3, "d": 4}\nWhat is {k: v for k, v in d.items() if v % 2 == 0}?`,
    o: ['{"b": 2, "d": 4}', '{"a": 1, "c": 3}', '{"b": 2}', '{}'],
    c: 0,
    e: "The comprehension filters to keep only items where the value is even. 2 and 4 are even.",
    de: `This filtered dict comprehension keeps only key-value pairs where the value passes a condition.

Key concepts:
• if v % 2 == 0 filters for even values only
• 1 % 2 = 1 (odd, excluded), 2 % 2 = 0 (even, kept)
• 3 % 2 = 1 (odd, excluded), 4 % 2 = 0 (even, kept)

How it works:
1. "a": 1 → 1 is odd → excluded
2. "b": 2 → 2 is even → included
3. "c": 3 → 3 is odd → excluded
4. "d": 4 → 4 is even → included
Result: {"b": 2, "d": 4}

Common uses:
• Data filtering and cleaning
• Selecting subsets of configuration
• Extracting items meeting specific criteria`
  }),
  // 62. Dict comprehension from sorted items
  (_i: number) => ({
    q: `What is {k: v for k, v in sorted({"c": 3, "a": 1, "b": 2}.items())}?`,
    o: ['{"a": 1, "b": 2, "c": 3}', '{"c": 3, "a": 1, "b": 2}', '{"c": 3, "b": 2, "a": 1}', 'Error'],
    c: 0,
    e: "sorted() on items sorts by key alphabetically. The resulting dict preserves that insertion order.",
    de: `This comprehension sorts dictionary items before building a new dict, producing alphabetically ordered keys.

Key concepts:
• sorted() on dict items sorts by key (first element of each tuple) by default
• Python 3.7+ dicts preserve insertion order
• The result is a dict with keys in sorted order

How it works:
1. {"c": 3, "a": 1, "b": 2}.items() → dict_items
2. sorted(...) → [("a", 1), ("b", 2), ("c", 3)]
3. Comprehension builds dict in sorted order
Result: {"a": 1, "b": 2, "c": 3}

Common uses:
• Creating ordered configurations
• Preparing dicts for consistent display
• Canonical representations for comparison`
  }),
  // 63. Negate all values in a dict
  (_i: number) => ({
    q: `What is {k: -v for k, v in {"a": 1, "b": -2, "c": 3}.items()}?`,
    o: ['{"a": -1, "b": 2, "c": -3}', '{"a": 1, "b": 2, "c": 3}', '{"a": -1, "b": -2, "c": -3}', 'Error'],
    c: 0,
    e: "The unary minus negates each value: -1→-1 is wrong — it's -(1)=-1, -(-2)=2, -(3)=-3.",
    de: `This comprehension negates every value in the dictionary using the unary minus operator.

Key concepts:
• -v applies unary negation to each value
• -(1) = -1, -(-2) = 2 (double negative), -(3) = -3
• Keys remain unchanged

How it works:
1. "a": -(1) = -1
2. "b": -(-2) = 2 (negating a negative gives positive)
3. "c": -(3) = -3
Result: {"a": -1, "b": 2, "c": -3}

Common uses:
• Inverting numeric values (e.g., credits to debits)
• Mathematical transformations on dict data
• Flipping sign conventions`
  }),
  // 64. Absolute values in a dict
  (_i: number) => ({
    q: `What is {k: abs(v) for k, v in {"a": -1, "b": -2}.items()}?`,
    o: ['{"a": 1, "b": 2}', '{"a": -1, "b": -2}', '{"a": 1, "b": -2}', 'Error'],
    c: 0,
    e: "abs() returns the absolute value. abs(-1)=1, abs(-2)=2.",
    de: `This comprehension applies abs() to each value, converting negative numbers to positive.

Key concepts:
• abs(-1) = 1, abs(-2) = 2
• abs() removes the sign, returning the magnitude
• Keys are unchanged, only values are transformed

How it works:
1. "a": abs(-1) = 1
2. "b": abs(-2) = 2
Result: {"a": 1, "b": 2}

Common uses:
• Normalizing signed data
• Computing magnitudes or distances
• Data cleaning where sign doesn't matter`
  }),
  // 65. Dict deduplication preserving order
  (_i: number) => ({
    q: `What is list({x: x for x in [1, 2, 2, 3, 3]})?`,
    o: ['[1, 2, 3]', '[1, 2, 2, 3, 3]', '[1, 2, 3, 2, 3]', 'Error'],
    c: 0,
    e: "Dict keys are unique, so duplicate values collapse. list() on a dict returns its keys: [1, 2, 3].",
    de: `Building a dict from a list with duplicates automatically deduplicates the keys, and list() extracts them.

Key concepts:
• Dict keys must be unique — duplicates overwrite previous entries
• {x: x for x in [1, 2, 2, 3, 3]} → {1: 1, 2: 2, 3: 3}
• list(dict) returns the keys as a list
• Python 3.7+ preserves insertion order

How it works:
1. x=1 → {1: 1}
2. x=2 → {1: 1, 2: 2}
3. x=2 again → key 2 already exists, value overwritten (same value)
4. x=3 → {1: 1, 2: 2, 3: 3}
5. x=3 again → key 3 already exists, overwritten
6. list({1: 1, 2: 2, 3: 3}) → [1, 2, 3]

Common uses:
• Order-preserving deduplication: list(dict.fromkeys(seq))
• Removing duplicates while maintaining first-seen order
• Alternative to set() when order matters`
  }),
  // 66. Filter out None values
  (_i: number) => ({
    q: `What is {k: v for k, v in {"a": 1, "b": None, "c": 3}.items() if v is not None}?`,
    o: ['{"a": 1, "c": 3}', '{"a": 1, "b": None, "c": 3}', '{"b": None}', 'Error'],
    c: 0,
    e: "The filter 'if v is not None' excludes 'b' whose value is None. Only 'a' and 'c' remain.",
    de: `This filtered comprehension removes key-value pairs where the value is None.

Key concepts:
• "is not None" is the idiomatic way to check for non-None values
• Different from "if v" which would also exclude 0, "", [], etc.
• Only None values are filtered out

How it works:
1. "a": 1 → 1 is not None → included
2. "b": None → None is not None is False → excluded
3. "c": 3 → 3 is not None → included
Result: {"a": 1, "c": 3}

Common uses:
• Cleaning data with missing values
• Removing optional fields that weren't set
• Filtering API responses with null/None fields`
  }),
  // 67. Dict unpacking merge with **
  (_i: number) => ({
    q: `What is {**{"a": 1}, **{"b": 2}, "c": 3}?`,
    o: ['{"a": 1, "b": 2, "c": 3}', '{"c": 3}', 'Error', '{"a": 1, "b": 2}'],
    c: 0,
    e: "** unpacks each dict into the new dict literal. All three sources merge into one dict.",
    de: `The ** operator unpacks dictionaries inside a dict literal, merging multiple dicts and additional key-value pairs.

Key concepts:
• **{"a": 1} unpacks to a=1 inside the dict literal
• **{"b": 2} unpacks to b=2
• "c": 3 adds a third pair directly
• Later values overwrite earlier ones for duplicate keys

How it works:
1. Start building dict literal
2. **{"a": 1} inserts "a": 1
3. **{"b": 2} inserts "b": 2
4. "c": 3 inserts "c": 3
Result: {"a": 1, "b": 2, "c": 3}

Common uses:
• Merging multiple dicts in a single expression
• Adding extra keys while merging: {**defaults, **user_config, "debug": True}
• Creating modified copies of dicts`
  }),
  // 68. Dict merge operator | (Python 3.9+)
  (_i: number) => ({
    q: `What is dict(a=1) | dict(b=2)?`,
    o: ['{"a": 1, "b": 2}', '{"b": 2}', 'Error', '{"a": 1}'],
    c: 0,
    e: "The | operator (Python 3.9+) merges two dicts into a new dict containing all key-value pairs.",
    de: `Python 3.9 introduced the | (pipe) operator for dict merging, creating a new dict from two source dicts.

Key concepts:
• d1 | d2 creates a new dict with all pairs from both
• If keys overlap, the right-hand dict's values win
• Neither d1 nor d2 is modified
• dict(a=1) creates {"a": 1}, dict(b=2) creates {"b": 2}

How it works:
1. dict(a=1) → {"a": 1}
2. dict(b=2) → {"b": 2}
3. {"a": 1} | {"b": 2} → {"a": 1, "b": 2}
4. No overlapping keys, so all pairs are included

Common uses:
• Clean dict merging syntax (replaces {**d1, **d2})
• Combining configuration dicts
• Building composite dicts from partial sources`
  }),
  // 69. Chained dict merge with |
  (_i: number) => ({
    q: `What is {"a": 1, "b": 2} | {"b": 3} | {"c": 4}?`,
    o: ['{"a": 1, "b": 3, "c": 4}', '{"a": 1, "b": 2, "c": 4}', '{"b": 3, "c": 4}', 'Error'],
    c: 0,
    e: "Chained | merges left to right. 'b' appears in two dicts; the rightmost value (3) wins.",
    de: `Multiple | operators chain left to right, with later dicts overwriting earlier values for duplicate keys.

Key concepts:
• d1 | d2 | d3 evaluates as (d1 | d2) | d3
• For duplicate keys, the rightmost value wins
• "b" exists in both the first and second dict

How it works:
1. {"a": 1, "b": 2} | {"b": 3} → {"a": 1, "b": 3} (b overwritten to 3)
2. {"a": 1, "b": 3} | {"c": 4} → {"a": 1, "b": 3, "c": 4}
Result: {"a": 1, "b": 3, "c": 4}

Common uses:
• Layered configuration: base | env_config | cli_overrides
• Priority-based merging where later sources win
• Building up dicts incrementally`
  }),
  // 70. In-place merge with |=
  (_i: number) => ({
    q: `d = {"a": 1}\nd |= {"a": 2, "b": 3}\nWhat is d?`,
    o: ['{"a": 2, "b": 3}', '{"a": 1, "b": 3}', '{"a": 1}', 'Error'],
    c: 0,
    e: "|= merges in-place. 'a' is overwritten to 2, and 'b': 3 is added. Result: {'a': 2, 'b': 3}.",
    de: `The |= operator merges another dict into the existing dict in-place, similar to how += works for addition.

Key concepts:
• d |= other modifies d directly (in-place)
• New keys are added, existing keys are overwritten
• Equivalent to d.update(other) but more readable

How it works:
1. d starts as {"a": 1}
2. d |= {"a": 2, "b": 3}
3. "a" already exists → overwritten from 1 to 2
4. "b" is new → added with value 3
5. d is now {"a": 2, "b": 3}

Common uses:
• Updating configs in-place: config |= new_settings
• Accumulating data from multiple sources
• Replacing d.update() with cleaner syntax`
  }),
  // 71. ChainMap basic lookup
  (_i: number) => ({
    q: `from collections import ChainMap\na = {"x": 1}; b = {"y": 2}\nc = ChainMap(a, b)\nWhat is c["x"]?`,
    o: ['1', '2', 'KeyError', 'None'],
    c: 0,
    e: "ChainMap searches through its maps in order. 'x' is found in the first map 'a' with value 1.",
    de: `ChainMap groups multiple dicts together and searches them in order when looking up a key.

Key concepts:
• ChainMap(a, b) creates a view over dicts a and b
• Lookups search a first, then b
• No data is copied — it's a view over the original dicts
• "x" is in a (the first map) → returns 1

How it works:
1. ChainMap(a, b) links a={"x": 1} and b={"y": 2}
2. c["x"] → search a first → found "x": 1 → return 1
3. If "x" weren't in a, it would search b next

Common uses:
• Layered configuration (defaults < env < CLI args)
• Scope chains (like variable lookups in nested functions)
• Combining multiple dicts without copying`
  }),
  // 72. ChainMap first-map-wins for duplicate keys
  (_i: number) => ({
    q: `from collections import ChainMap\na = {"x": 1}; b = {"x": 2}\nc = ChainMap(a, b)\nWhat is c["x"]?`,
    o: ['1', '2', 'KeyError', '3'],
    c: 0,
    e: "When the same key exists in multiple maps, ChainMap returns the value from the first map. First wins!",
    de: `ChainMap's key lookup follows a first-match-wins policy: the first map containing the key determines the result.

Key concepts:
• ChainMap(a, b) searches a before b
• "x" exists in both a (value 1) and b (value 2)
• First map wins: a is checked first → c["x"] = 1
• b's "x": 2 is shadowed, never reached

How it works:
1. c["x"] → check a → "x" found with value 1 → return 1
2. b is never checked because a already had "x"
3. This is different from | merge where the last dict wins

Common uses:
• Override chains: user settings shadow defaults
• Variable scoping: local scope shadows enclosing scope
• Template contexts with fallback layers`
  }),
  // 73. ChainMap lookup from second map
  (_i: number) => ({
    q: `from collections import ChainMap\na = {"x": 1}; b = {"y": 2}\nc = ChainMap(a, b)\nWhat is c["y"]?`,
    o: ['2', '1', 'KeyError', 'None'],
    c: 0,
    e: "ChainMap searches maps in order. 'y' isn't in a, so it checks b and finds 'y': 2.",
    de: `When a key isn't in the first map, ChainMap continues searching subsequent maps until it finds a match.

Key concepts:
• c["y"] → check a={"x": 1} → "y" not found
• Continue to b={"y": 2} → "y" found → return 2
• ChainMap only raises KeyError if the key is in none of the maps

How it works:
1. c["y"] starts searching in a
2. a only has "x", not "y" → move to next map
3. b has "y": 2 → return 2
4. Search complete

Common uses:
• Fallback lookups: try specific config, fall back to defaults
• Namespace resolution: local → enclosing → global → builtin`
  }),
  // 74. ChainMap iteration order
  (_i: number) => ({
    q: `from collections import ChainMap\nc = ChainMap({"a": 1}, {"b": 2})\nWhat is list(c)?`,
    o: ['["b", "a"]', '["a", "b"]', '[("a", 1), ("b", 2)]', 'Error'],
    c: 0,
    e: "list() on a ChainMap gives all unique keys. The internal iteration reverses maps then updates, producing ['b', 'a'].",
    de: `Iterating over a ChainMap yields all unique keys from all maps, but the order may be surprising.

Key concepts:
• list(chainmap) returns a list of all unique keys
• ChainMap internally builds a temporary dict from reversed maps
• It processes last map first, then updates with earlier maps
• This produces an order based on the internal merge process

How it works:
1. Internally: start with {}, update with {"b": 2} → {"b": 2}
2. Then update with {"a": 1} → {"b": 2, "a": 1}
3. iter() on this gives ["b", "a"]
4. Keys from later maps appear first in iteration

Common uses:
• Getting all available keys across scoped configurations
• Inspecting which keys exist in a layered namespace`
  }),
  // 75. max() on dict by value using key function
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2, "c": 3}\nWhat is max(d, key=lambda k: d[k])?`,
    o: ['"c"', '3', '"a"', '("c", 3)'],
    c: 0,
    e: "max() iterates over dict keys. The key function looks up each value. 'c' has the max value (3).",
    de: `Using max() on a dict iterates over keys by default. The key function lets you compare by values instead.

Key concepts:
• max(d) iterates over d's keys: "a", "b", "c"
• key=lambda k: d[k] compares keys by their values: 1, 2, 3
• max returns the key with the highest value, not the value itself
• d["c"] = 3 is the largest → returns "c"

How it works:
1. max compares: d["a"]=1, d["b"]=2, d["c"]=3
2. Maximum value is 3, belonging to key "c"
3. Returns the key "c" (not the value 3)

Common uses:
• Finding the key with the highest/lowest value
• Identifying top-performing items in a dataset
• Selecting best candidates from scored options`
  }),
  // 76. min() on dict by value
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2, "c": 3}\nWhat is min(d, key=lambda k: d[k])?`,
    o: ['"a"', '1', '"c"', '("a", 1)'],
    c: 0,
    e: "min() with key=lambda k: d[k] finds the key with the smallest value. d['a']=1 is the minimum.",
    de: `min() on a dict with a key function finds the key whose corresponding value is smallest.

Key concepts:
• min(d) iterates over keys: "a", "b", "c"
• key function maps each key to its value for comparison
• Returns the key (not the value) with the minimum

How it works:
1. Compare: d["a"]=1, d["b"]=2, d["c"]=3
2. Minimum value is 1, belonging to key "a"
3. Returns "a"

Common uses:
• Finding the key with the lowest value
• Identifying worst-performing or cheapest items
• Paired with max() for range analysis`
  }),
  // 77. Sort dict keys by their values
  (_i: number) => ({
    q: `d = {"a": 3, "b": 1, "c": 2}\nWhat is sorted(d, key=d.get)?`,
    o: ['["b", "c", "a"]', '["a", "c", "b"]', '["a", "b", "c"]', '[1, 2, 3]'],
    c: 0,
    e: "sorted() sorts dict keys. d.get returns each key's value: b→1, c→2, a→3. Ascending: ['b','c','a'].",
    de: `sorted() on a dict iterates over keys and sorts them. Using d.get as the key function sorts keys by their values.

Key concepts:
• sorted(d) sorts dict keys
• key=d.get passes each key to d.get(), which returns its value
• d.get is a bound method — equivalent to lambda k: d[k]
• Sort ascending by value: 1 < 2 < 3 → "b" < "c" < "a"

How it works:
1. Keys: "a", "b", "c"
2. d.get("a")=3, d.get("b")=1, d.get("c")=2
3. Sort by these values: 1("b"), 2("c"), 3("a")
Result: ["b", "c", "a"]

Common uses:
• Ranking items by score
• Displaying data sorted by value
• Creating leaderboards or priority lists`
  }),
  // 78. Sort dict keys by values descending
  (_i: number) => ({
    q: `d = {"a": 3, "b": 1, "c": 2}\nWhat is sorted(d, key=d.get, reverse=True)?`,
    o: ['["a", "c", "b"]', '["b", "c", "a"]', '["a", "b", "c"]', '[3, 2, 1]'],
    c: 0,
    e: "reverse=True sorts descending. By value: a→3, c→2, b→1. Result: ['a', 'c', 'b'].",
    de: `Adding reverse=True to sorted() reverses the sort order, giving keys from highest to lowest value.

Key concepts:
• reverse=True flips the sort to descending
• d.get("a")=3 is largest → first
• d.get("b")=1 is smallest → last

How it works:
1. Values: d.get("a")=3, d.get("b")=1, d.get("c")=2
2. Descending sort: 3("a"), 2("c"), 1("b")
Result: ["a", "c", "b"]

Common uses:
• Top-N rankings
• Displaying results from best to worst
• Priority queues based on dict values`
  }),
  // 79. Sum of lengths of list values
  (_i: number) => ({
    q: `d = {"a": [1, 2], "b": [3]}\nWhat is sum(len(v) for v in d.values())?`,
    o: ['3', '2', '6', 'Error'],
    c: 0,
    e: "len([1,2])=2, len([3])=1. sum(2, 1) = 3. Counts total items across all list values.",
    de: `This generator expression computes the total number of elements across all list values in the dict.

Key concepts:
• d.values() → dict_values([[1, 2], [3]])
• len([1, 2]) = 2, len([3]) = 1
• sum(2, 1) = 3
• Generator expression avoids creating an intermediate list

How it works:
1. Iterate over values: [1, 2] and [3]
2. len([1, 2]) = 2
3. len([3]) = 1
4. sum(2, 1) = 3

Common uses:
• Counting total items in grouped data
• Measuring aggregate size of nested structures
• Data validation (checking total element counts)`
  }),
  // 80. Dict keys intersection
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2}\ne = {"b": 3, "c": 4}\nWhat is list(d.keys() & e.keys())?`,
    o: ['["b"]', '["a", "b", "c"]', '["a", "c"]', 'Error'],
    c: 0,
    e: "dict keys support set operations. & finds the intersection: only 'b' is in both dicts.",
    de: `Dict keys views support set operations like intersection (&), union (|), and difference (-).

Key concepts:
• d.keys() returns a dict_keys view object
• dict_keys supports set operations directly
• d.keys() & e.keys() → keys present in both dicts
• Only "b" appears in both d and e

How it works:
1. d.keys() → {"a", "b"}
2. e.keys() → {"b", "c"}
3. {"a", "b"} & {"b", "c"} → {"b"}
4. list({"b"}) → ["b"]

Common uses:
• Finding shared keys between configurations
• Computing overlap between datasets
• Checking which fields two records have in common`
  }),
  // 81. Find all keys with a specific value
  (_i: number) => ({
    q: `What is [k for k, v in {"a": 1, "b": 2, "c": 1}.items() if v == 1]?`,
    o: ['["a", "c"]', '["a"]', '["c"]', '[1, 1]'],
    c: 0,
    e: "The list comprehension filters items where value equals 1. Both 'a' and 'c' have value 1.",
    de: `This list comprehension performs a reverse lookup: finding all keys that map to a specific value.

Key concepts:
• Iterates over all (key, value) pairs
• Filters where v == 1
• Returns a list of keys, not values
• Multiple keys can share the same value

How it works:
1. "a": 1 → v==1 → include "a"
2. "b": 2 → v!=1 → skip
3. "c": 1 → v==1 → include "c"
Result: ["a", "c"]

Common uses:
• Reverse lookups (value → keys)
• Finding duplicates in value space
• Grouping keys by their values`
  }),
  // 82. Reverse mapping (swap keys and values)
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2}\nWhat is {v: k for k, v in d.items()}?`,
    o: ['{1: "a", 2: "b"}', '{"a": 1, "b": 2}', '{("a", 1), ("b", 2)}', 'Error'],
    c: 0,
    e: "The comprehension swaps keys and values. 'a'→1 becomes 1→'a', 'b'→2 becomes 2→'b'.",
    de: `This comprehension creates an inverted/reverse mapping by swapping each key-value pair.

Key concepts:
• v becomes the new key, k becomes the new value
• Only works correctly when original values are unique and hashable
• If values aren't unique, later entries overwrite earlier ones

How it works:
1. k="a", v=1 → 1: "a"
2. k="b", v=2 → 2: "b"
Result: {1: "a", 2: "b"}

Common uses:
• Creating bidirectional lookups
• Decoding encoded values
• Building index-to-name mappings from name-to-index dicts`
  }),
  // 83. Dict assignment creates alias, not copy
  (_i: number) => ({
    q: `d1 = {"a": 1}\nd2 = d1\nWhat is d2 is d1?`,
    o: ['True', 'False', 'Error', 'None'],
    c: 0,
    e: "Assignment (=) creates an alias — d2 points to the same object as d1, so 'is' returns True.",
    de: `In Python, assigning a dict to a new variable does not create a copy — both names reference the same object.

Key concepts:
• d2 = d1 makes d2 an alias for d1 (same object in memory)
• "is" checks identity (same object), not equality
• Modifying d2 will also modify d1 (and vice versa)
• Use d1.copy() or dict(d1) for a shallow copy

How it works:
1. d1 = {"a": 1} creates a dict object
2. d2 = d1 makes d2 point to the same object
3. d2 is d1 → True (same memory address)
4. id(d1) == id(d2) would also be True

Common uses:
• Understanding Python's reference semantics
• Avoiding accidental mutation through aliases
• Knowing when to use .copy() vs assignment`
  }),
  // 84. dict.fromkeys with default value
  (_i: number) => ({
    q: `What is dict.fromkeys(range(5), 0)?`,
    o: ['{0: 0, 1: 0, 2: 0, 3: 0, 4: 0}', '{0: 1, 1: 2, 2: 3, 3: 4, 4: 5}', '[0, 0, 0, 0, 0]', 'Error'],
    c: 0,
    e: "dict.fromkeys(iterable, value) creates a dict with keys from the iterable, all set to the given value.",
    de: `dict.fromkeys() creates a new dict with keys from an iterable, all sharing the same default value.

Key concepts:
• First argument: iterable of keys (range(5) → 0, 1, 2, 3, 4)
• Second argument: default value for all keys (0)
• All keys initially share the exact same value object

How it works:
1. range(5) produces keys: 0, 1, 2, 3, 4
2. Each key is assigned the value 0
3. Result: {0: 0, 1: 0, 2: 0, 3: 0, 4: 0}

Caution with mutable defaults:
• dict.fromkeys(range(3), []) — all keys share the SAME list object
• Modifying one list affects all keys
• Use a dict comprehension instead: {k: [] for k in range(3)}`
  }),
  // 85. isinstance check for dict
  (_i: number) => ({
    q: `What is isinstance({}, dict)?`,
    o: ['True', 'False', 'Error', 'None'],
    c: 0,
    e: "isinstance checks if an object is an instance of a type. {} is a dict, so isinstance({}, dict) is True.",
    de: `isinstance() checks whether an object is an instance of a specified class or its subclasses.

Key concepts:
• {} creates an empty dict
• dict is the built-in dictionary type
• isinstance({}, dict) → True because {} is a dict instance
• isinstance also returns True for subclasses

How it works:
1. {} is an instance of dict (created by dict literal syntax)
2. isinstance checks the type hierarchy
3. Returns True because the object's type matches

Related checks:
• type({}) == dict → True (exact type check)
• isinstance({}, (dict, list)) → True (check against multiple types)
• isinstance({"a": 1}, dict) → True (non-empty dicts too)`
  }),
  // 86. Type of dict.keys() is dict_keys
  (_i: number) => ({
    q: `d = {"a": 1}\nWhat is type(d.keys())?`,
    o: ["<class 'dict_keys'>", "<class 'list'>", "<class 'set'>", "<class 'tuple'>"],
    c: 0,
    e: "d.keys() returns a dict_keys view object, not a list. Views are live and reflect changes to the dict.",
    de: `dict.keys() returns a special view object of type dict_keys, not a list.

Key concepts:
• dict_keys is a view object — it reflects the current state of the dict
• If the dict changes, the view updates automatically
• Views are iterable but not indexable (no d.keys()[0])
• Convert to list with list(d.keys()) if needed

How it works:
1. d.keys() returns a dict_keys view
2. type() reveals it is <class 'dict_keys'>
3. The view is backed by the original dict
4. Adding/removing keys from d is reflected in the view

Key difference from lists:
• Views don't copy data — they reference the original dict
• More memory efficient than creating a separate list
• Support set operations (& | - ^)`
  }),
  // 87. Type of dict.items() is dict_items
  (_i: number) => ({
    q: `d = {"a": 1}\nWhat is type(d.items())?`,
    o: ["<class 'dict_items'>", "<class 'list'>", "<class 'set'>", "<class 'dict_keys'>"],
    c: 0,
    e: "d.items() returns a dict_items view object containing (key, value) tuples.",
    de: `dict.items() returns a dict_items view — a live view of the dict's key-value pairs.

Key concepts:
• dict_items is a view type, similar to dict_keys
• Each element is a (key, value) tuple
• The view updates when the dict changes
• Supports set operations if all values are hashable

How it works:
1. d.items() returns dict_items([("a", 1)])
2. type() reveals <class 'dict_items'>
3. Iterating yields tuples: for k, v in d.items()

Comparison of view types:
• d.keys() → dict_keys view of keys only
• d.values() → dict_values view of values only
• d.items() → dict_items view of (key, value) tuples`
  }),
  // 88. Converting items view to set
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2}\nWhat is set(d.items())?`,
    o: ['{("a", 1), ("b", 2)}', '{"a", "b"}', '{1, 2}', 'Error'],
    c: 0,
    e: "d.items() yields (key, value) tuples. Since both keys and values are hashable, set() works.",
    de: `dict.items() returns pairs as tuples, and if the values are hashable, the items view can be converted to a set.

Key concepts:
• d.items() → dict_items([("a", 1), ("b", 2)])
• Tuples of hashable elements are themselves hashable
• set() can contain hashable elements → works here
• Result is a set of (key, value) tuples

How it works:
1. d.items() yields ("a", 1) and ("b", 2)
2. Both are tuples of hashable types (str, int)
3. set({("a", 1), ("b", 2)}) created successfully

Common uses:
• Computing symmetric difference between two dicts' items
• Finding common key-value pairs: set(d1.items()) & set(d2.items())
• Checking if all items from one dict exist in another`
  }),
  // 89. TypeError when items contain unhashable values
  (_i: number) => ({
    q: `d = {"a": [1]}\nWhat happens with set(d.items())?`,
    o: ['TypeError', '{("a", [1])}', '{"a"}', '{[1]}'],
    c: 0,
    e: "d.items() yields ('a', [1]). Lists are unhashable, so the tuple ('a', [1]) can't go in a set → TypeError.",
    de: `Converting dict items to a set fails when values contain unhashable types like lists.

Key concepts:
• d.items() yields ("a", [1])
• To go into a set, elements must be hashable
• Tuples are hashable ONLY if all their elements are hashable
• [1] is a list → unhashable → the tuple ("a", [1]) is also unhashable

How it works:
1. d.items() → dict_items([("a", [1])])
2. set() tries to hash ("a", [1])
3. Hashing the tuple requires hashing each element
4. hash([1]) → TypeError: unhashable type: 'list'

Workaround:
• Convert lists to tuples first: set((k, tuple(v)) for k, v in d.items())
• Or use frozenset for set values`
  }),
  // 90. f-string with dict lookups
  (_i: number) => ({
    q: `d = {"name": "Alice", "age": 30}\nWhat is f"Name: {d['name']}, Age: {d['age']}"?`,
    o: ['"Name: Alice, Age: 30"', '"Name: name, Age: age"', 'KeyError', 'SyntaxError'],
    c: 0,
    e: "f-strings can embed dict lookups. d['name'] evaluates to 'Alice', d['age'] to 30.",
    de: `f-strings support arbitrary expressions inside {}, including dictionary lookups with bracket notation.

Key concepts:
• f"...{expr}..." evaluates expr and inserts the result
• d['name'] inside an f-string works just like anywhere else
• Use single quotes inside {} when the f-string uses double quotes (or vice versa)
• The expression is evaluated at runtime

How it works:
1. f-string encounters {d['name']} → evaluates d['name'] → "Alice"
2. Encounters {d['age']} → evaluates d['age'] → 30
3. Result: "Name: Alice, Age: 30"

Common uses:
• Formatting structured data for display
• Building log messages from dict data
• Template-style string construction from configs`
  }),
  // 91. Tuples as dict keys
  (_i: number) => ({
    q: `d = {}\nd[(1, 2)] = "tuple key"\nWhat is d[(1, 2)]?`,
    o: ['"tuple key"', 'TypeError', 'KeyError', 'None'],
    c: 0,
    e: "Tuples are hashable and can be used as dict keys. d[(1,2)] stores and retrieves the value.",
    de: `Tuples are immutable and hashable, making them valid dictionary keys — unlike lists.

Key concepts:
• Dict keys must be hashable (immutable types)
• Tuples are immutable → hashable → valid as keys
• Lists are mutable → unhashable → cannot be keys
• (1, 2) works as a key because both elements are hashable

How it works:
1. d[(1, 2)] = "tuple key" → stores "tuple key" at key (1, 2)
2. d[(1, 2)] → looks up key (1, 2) → returns "tuple key"
3. hash((1, 2)) works because ints are hashable

Common uses:
• Coordinate-based lookups: grid[(x, y)] = value
• Multi-dimensional keys: cache[(func_name, arg1, arg2)]
• Sparse matrix implementations`
  }),
  // 92. frozenset as dict key
  (_i: number) => ({
    q: `d = {}\nd[frozenset({1, 2})] = "fs key"\nWhat is d[frozenset({1, 2})]?`,
    o: ['"fs key"', 'TypeError', 'KeyError', 'Error'],
    c: 0,
    e: "frozenset is immutable and hashable, so it can be a dict key. Regular sets cannot.",
    de: `frozenset is the immutable version of set, making it hashable and usable as a dict key.

Key concepts:
• set is mutable → unhashable → cannot be a dict key
• frozenset is immutable → hashable → valid as a dict key
• frozenset({1, 2}) == frozenset({2, 1}) (order doesn't matter)
• Two frozensets with the same elements hash to the same value

How it works:
1. frozenset({1, 2}) creates an immutable set
2. d[frozenset({1, 2})] = "fs key" → stores the value
3. d[frozenset({1, 2})] → same frozenset → same hash → retrieves "fs key"

Common uses:
• Using sets of items as dict keys (e.g., graph edges)
• Caching results for unordered argument sets
• Group-by operations where the group key is a set of attributes`
  }),
  // 93. dict.get returns existing value, not default
  (_i: number) => ({
    q: `d = {"a": 1}\nWhat is d.get("a", 0)?`,
    o: ['1', '0', 'None', 'KeyError'],
    c: 0,
    e: "get() returns the existing value when the key exists. 'a' maps to 1, so the default 0 is ignored.",
    de: `dict.get(key, default) returns the value for key if it exists; the default is only used when the key is missing.

Key concepts:
• d.get("a", 0) checks if "a" is in d
• "a" exists with value 1 → returns 1
• The default value 0 is never used
• If "a" didn't exist, it would return 0

How it works:
1. Check: is "a" in d? → Yes
2. Return d["a"] → 1
3. The default parameter (0) is ignored

Common mistake:
• Thinking get() always returns the default
• get() only uses the default when the key is MISSING
• d.get("z", 0) → 0 (because "z" is not in d)`
  }),
  // 94. True and 1 are the same dict key
  (_i: number) => ({
    q: `What is {True: "yes", 1: "one"}?`,
    o: ['{True: "one"}', '{True: "yes", 1: "one"}', '{1: "one"}', 'Error'],
    c: 0,
    e: "True == 1 and hash(True) == hash(1), so they're the same key. The first key is kept, last value wins.",
    de: `In Python, True and 1 are considered equal and have the same hash, so they collide as dictionary keys.

Key concepts:
• True == 1 is True (bool is a subclass of int)
• hash(True) == hash(1) → same hash bucket
• When keys collide: the first key object is kept, the last value overwrites
• Result: {True: "one"} — key is True (set first), value is "one" (set last)

How it works:
1. {True: "yes"} → dict has key True with value "yes"
2. 1: "one" → 1 == True and hash(1) == hash(True)
3. Key collision: key stays as True (first seen), value updated to "one"
4. Result: {True: "one"}

Related edge cases:
• {0: "zero", False: "false"} → {0: "false"} (same principle)
• {1: "a", True: "b", 1.0: "c"} → {1: "c"} (all three are equal)`
  }),
  // 95. 0 and False are the same dict key
  (_i: number) => ({
    q: `What is {0: "zero", False: "false"}?`,
    o: ['{0: "false"}', '{0: "zero", False: "false"}', '{False: "false"}', 'Error'],
    c: 0,
    e: "0 == False and hash(0) == hash(False). Same key collision: first key (0) kept, last value ('false') wins.",
    de: `Just like True/1, the values 0 and False are equal and hash-equivalent, causing a key collision.

Key concepts:
• False == 0 is True (bool inherits from int)
• hash(False) == hash(0) → same hash bucket
• First key object (0) is retained, last value ("false") overwrites

How it works:
1. {0: "zero"} → key 0 with value "zero"
2. False: "false" → False == 0 → key collision
3. Key stays as 0 (first seen), value updated to "false"
4. Result: {0: "false"}

Why this happens:
• bool is a subclass of int: issubclass(bool, int) → True
• True is literally 1, False is literally 0
• This is by design in Python, not a bug`
  }),
  // 96. del removes a key from dict
  (_i: number) => ({
    q: `d = {"a": 1}\ndel d["a"]\nWhat is d?`,
    o: ['{}', '{"a": None}', 'Error', '{"a": 1}'],
    c: 0,
    e: "del d['a'] removes the key 'a' and its value entirely from the dict, leaving an empty dict.",
    de: `The del statement removes a key-value pair from a dictionary entirely.

Key concepts:
• del d[key] removes the key and its associated value
• The key is completely gone — not set to None
• Raises KeyError if the key doesn't exist
• Different from d["a"] = None (which keeps the key with value None)

How it works:
1. d = {"a": 1} — dict with one pair
2. del d["a"] — removes "a" and its value
3. d is now {} — empty dict

Alternatives:
• d.pop("a") — removes and returns the value (1)
• d.pop("a", default) — removes or returns default if missing
• d.clear() — removes all keys`
  }),
  // 97. __contains__ dunder method (in operator)
  (_i: number) => ({
    q: `d = {"a": 1}\nWhat is d.__contains__("a")?`,
    o: ['True', 'False', 'Error', '1'],
    c: 0,
    e: "__contains__ is the dunder method behind the 'in' operator. 'a' in d calls d.__contains__('a').",
    de: `__contains__ is the special method that Python calls when you use the "in" operator on a dict.

Key concepts:
• "a" in d is equivalent to d.__contains__("a")
• Returns True if the key exists in the dict
• Only checks keys, not values
• This is a dunder (double underscore) method

How it works:
1. d.__contains__("a") checks if "a" is a key in d
2. "a" is present → returns True
3. Same as writing "a" in d

Dunder methods:
• __contains__ → in operator
• __getitem__ → d[key]
• __setitem__ → d[key] = value
• __delitem__ → del d[key]`
  }),
  // 98. __getitem__ dunder method (bracket access)
  (_i: number) => ({
    q: `d = {"a": 1}\nWhat is d.__getitem__("a")?`,
    o: ['1', 'True', '"a"', 'Error'],
    c: 0,
    e: "__getitem__ is the dunder method behind d['a']. It returns the value associated with the key.",
    de: `__getitem__ is the special method that Python calls when you use bracket notation to access a dict value.

Key concepts:
• d["a"] is equivalent to d.__getitem__("a")
• Returns the value associated with the key
• Raises KeyError if key is not found
• You rarely call this directly — use d[key] instead

How it works:
1. d.__getitem__("a") looks up key "a" in d
2. Found: returns the value 1
3. Same result as d["a"]

Related dunder methods:
• __setitem__(key, value) → d[key] = value
• __delitem__(key) → del d[key]
• __contains__(key) → key in d
• __len__() → len(d)`
  }),
  // 99. __setitem__ dunder method
  (_i: number) => ({
    q: `d = {"a": 1}\nd.__setitem__("b", 2)\nWhat is d?`,
    o: ['{"a": 1, "b": 2}', '{"b": 2}', '{"a": 1}', 'Error'],
    c: 0,
    e: "__setitem__ is the dunder behind d['b'] = 2. It adds or updates a key-value pair in the dict.",
    de: `__setitem__ is the special method behind bracket assignment, used to set or update dict entries.

Key concepts:
• d["b"] = 2 is equivalent to d.__setitem__("b", 2)
• If key exists: value is updated
• If key doesn't exist: new key-value pair is added
• Returns None (assignment doesn't return a value)

How it works:
1. d starts as {"a": 1}
2. d.__setitem__("b", 2) adds "b": 2
3. d is now {"a": 1, "b": 2}

Related:
• __getitem__ → d[key] (read)
• __setitem__ → d[key] = value (write)
• __delitem__ → del d[key] (delete)
• These dunder methods enable custom dict-like classes`
  }),
  // 100. Reversed list of dict values
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2}\nWhat is list(d.values())[::-1]?`,
    o: ['[2, 1]', '[1, 2]', '["b", "a"]', 'Error'],
    c: 0,
    e: "d.values() gives [1, 2]. [::-1] reverses the list to [2, 1].",
    de: `This combines dict.values() with slice reversal to get values in reverse insertion order.

Key concepts:
• d.values() → dict_values([1, 2]) (insertion order in Python 3.7+)
• list() converts the view to a list: [1, 2]
• [::-1] slice reverses the list: [2, 1]

How it works:
1. d = {"a": 1, "b": 2} — insertion order: a first, b second
2. d.values() → dict_values([1, 2])
3. list(d.values()) → [1, 2]
4. [1, 2][::-1] → [2, 1]

Common uses:
• Processing dict values in reverse order
• Getting the most recently added values first
• Reversing priority order of dict entries`
  }),
];
