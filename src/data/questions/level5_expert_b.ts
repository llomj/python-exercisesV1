// --- LEVEL 5 EXPERT B: Advanced Collections, itertools, namedtuple, Counter, Edge Cases (50 Questions) ---
// Questions 51-100 of expert set. Each is TRULY UNIQUE.
export const level5ExpertB = [
  // 51. namedtuple field access via attribute
  (_i: number) => ({
    q: `from collections import namedtuple\nPoint = namedtuple("Point", ["x", "y"])\np = Point(1, 2)\nWhat is p.x?`,
    o: ["1", "2", "Error", "(1, 2)"],
    c: 0,
    e: "namedtuple fields are accessed by name. p.x returns the first field value, 1.",
    de: `namedtuple creates a tuple subclass with named fields, allowing attribute-style access.

Key concepts:
• namedtuple("Point", ["x", "y"]) creates a new class with fields x and y
• Point(1, 2) creates an instance with x=1, y=2
• p.x accesses the first field by name → 1
• Fields are defined by the second argument (list of strings or space-separated string)

How it works:
• namedtuple dynamically creates a class that extends tuple
• Each field name becomes a property that maps to a positional index
• p.x is equivalent to p[0]
• The instance is still immutable like a regular tuple

Example:
from collections import namedtuple
Point = namedtuple("Point", ["x", "y"])
p = Point(1, 2)
p.x        # 1
p.y        # 2

Common uses:
• Lightweight data classes without defining a full class
• Readable alternative to plain tuples
• Database rows, CSV records, coordinate systems

Example: p.x returns 1 because 'x' is the first field of the namedtuple, mapped to index 0.`
  }),
  // 52. namedtuple supports indexing like a regular tuple
  (_i: number) => ({
    q: `from collections import namedtuple\nPoint = namedtuple("Point", "x y")\np = Point(3, 4)\nWhat is p[0]?`,
    o: ["3", "4", "Error", "(3, 4)"],
    c: 0,
    e: "namedtuples support indexing. p[0] returns the first element, 3.",
    de: `namedtuples are tuple subclasses, so they support all regular tuple operations including indexing.

Key concepts:
• namedtuple("Point", "x y") — fields can be a space-separated string
• p[0] returns 3, same as p.x
• p[1] returns 4, same as p.y
• Indexing works because namedtuple IS a tuple

How it works:
• namedtuple creates a subclass of tuple
• isinstance(p, tuple) is True
• All tuple operations work: indexing, slicing, iteration, unpacking
• Named access (p.x) is an addition, not a replacement

Example:
Point = namedtuple("Point", "x y")
p = Point(3, 4)
p[0]       # 3 (same as p.x)
p[1]       # 4 (same as p.y)
p[::-1]    # (4, 3) — slicing works too
x, y = p   # unpacking works

Example: p[0] returns 3 because namedtuples are tuples, and index 0 holds the first field value.`
  }),
  // 53. namedtuple _asdict() converts to dictionary
  (_i: number) => ({
    q: `from collections import namedtuple\nPoint = namedtuple("Point", "x y")\np = Point(1, 2)\nWhat does p._asdict() return?`,
    o: ['{"x": 1, "y": 2}', '("x", "y")', "[1, 2]", "Error"],
    c: 0,
    e: "_asdict() returns a dictionary mapping field names to values.",
    de: `The _asdict() method converts a namedtuple instance into a dictionary.

Key concepts:
• p._asdict() returns {"x": 1, "y": 2}
• In Python 3.8+, it returns a regular dict (previously OrderedDict)
• Keys are the field names, values are the field values
• The underscore prefix prevents conflicts with user-defined field names

How it works:
• _asdict() iterates over field names and values
• Creates a dict with field_name: value pairs
• Result is a regular dict in modern Python
• Useful for serialization (JSON, etc.)

Example:
Point = namedtuple("Point", "x y")
p = Point(1, 2)
p._asdict()     # {'x': 1, 'y': 2}
dict(p._asdict())  # same result

Common uses:
• Converting namedtuples to JSON-serializable dicts
• Inspecting field names and values together
• Passing namedtuple data to functions expecting dicts

Example: p._asdict() returns {'x': 1, 'y': 2} — a dictionary mapping each field name to its value.`
  }),
  // 54. namedtuple is an instance of tuple
  (_i: number) => ({
    q: `from collections import namedtuple\nPoint = namedtuple("Point", "x y")\np = Point(1, 2)\nWhat is isinstance(p, tuple)?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "namedtuple creates a tuple subclass, so isinstance returns True.",
    de: `namedtuple creates a class that inherits from tuple, so all namedtuple instances are also tuples.

Key concepts:
• isinstance(p, tuple) → True
• namedtuple classes are subclasses of tuple
• This means p works everywhere a tuple is accepted
• issubclass(Point, tuple) is also True

How it works:
• namedtuple("Point", "x y") generates a new class
• This class inherits from tuple
• Point.__bases__ is (tuple,)
• All tuple methods work: len(), indexing, iteration, hashing

Example:
Point = namedtuple("Point", "x y")
p = Point(1, 2)
isinstance(p, tuple)  # True
type(p)               # <class '__main__.Point'>
len(p)                # 2 (tuple behavior)
hash(p)               # works (tuples are hashable)

Example: isinstance(p, tuple) returns True because namedtuple creates a subclass of tuple.`
  }),
  // 55. Counter counts character occurrences
  (_i: number) => ({
    q: `from collections import Counter\nc = Counter("abracadabra")\nWhat is c["a"]?`,
    o: ["5", "4", "3", "2"],
    c: 0,
    e: "Counter counts occurrences. 'a' appears 5 times in 'abracadabra'.",
    de: `Counter is a dict subclass for counting hashable objects. It maps elements to their counts.

Key concepts:
• Counter("abracadabra") counts each character
• "a" appears at positions 0, 3, 5, 7, 10 → count is 5
• Counter works with any iterable (strings, lists, etc.)
• Accessing a key returns its count (0 for missing keys, no KeyError)

How it works:
• Counter iterates through the string
• For each character, increments its count
• Result: Counter({'a': 5, 'b': 2, 'r': 2, 'c': 1, 'd': 1})
• c["a"] returns 5

Example:
Counter("abracadabra")
# Counter({'a': 5, 'b': 2, 'r': 2, 'c': 1, 'd': 1})
c["a"]  # 5
c["b"]  # 2
c["z"]  # 0 (missing keys return 0, not KeyError!)

Example: c["a"] returns 5 because the letter 'a' appears 5 times in "abracadabra".`
  }),
  // 56. Counter.most_common(1)
  (_i: number) => ({
    q: `from collections import Counter\nWhat is Counter([1, 1, 2, 3, 3, 3]).most_common(1)?`,
    o: ["[(3, 3)]", "[(1, 2)]", "[3]", "3"],
    c: 0,
    e: "most_common(1) returns the single most frequent element as a list of (element, count) tuples.",
    de: `most_common(n) returns the n most common elements and their counts, from most to least common.

Key concepts:
• Counter([1, 1, 2, 3, 3, 3]) → Counter({3: 3, 1: 2, 2: 1})
• most_common(1) returns [(3, 3)] — element 3 appears 3 times
• The result is a list of (element, count) tuples
• The first 3 is the element, the second 3 is the count

How it works:
• Counter counts occurrences: 1→2, 2→1, 3→3
• most_common(1) sorts by count descending
• Returns the top 1 as a list of tuples
• Format: [(element, count)]

Example:
c = Counter([1, 1, 2, 3, 3, 3])
c.most_common(1)    # [(3, 3)] — 3 appears 3 times
c.most_common(2)    # [(3, 3), (1, 2)]
c.most_common()     # all elements sorted by count

Example: [(3, 3)] means element 3 appears 3 times, and it's the most common.`
  }),
  // 57. Counter.most_common(2) with string
  (_i: number) => ({
    q: `from collections import Counter\nWhat is Counter("hello").most_common(2)?`,
    o: [`[("l", 2), ("h", 1)]`, `[("h", 1), ("l", 2)]`, `[("l", 2), ("e", 1)]`, `["l", "h"]`],
    c: 0,
    e: "most_common(2) returns the 2 most frequent: 'l' (2 times), then 'h' (1 time, first by insertion order).",
    de: `most_common(n) returns the n most frequent elements. Ties are broken by insertion order.

Key concepts:
• Counter("hello") → Counter({'l': 2, 'h': 1, 'e': 1, 'o': 1})
• 'l' appears 2 times — the most common
• Among elements with count 1, insertion order determines ranking
• 'h' was encountered first, so it ranks second
• most_common(2) → [('l', 2), ('h', 1)]

How it works:
• "hello" → h:1, e:1, l:2, o:1
• Sort by count descending: l(2), then h(1), e(1), o(1) in insertion order
• Take first 2: [('l', 2), ('h', 1)]
• Ties use the order elements were first seen

Example:
Counter("hello").most_common(2)  # [('l', 2), ('h', 1)]
Counter("hello").most_common()   # [('l', 2), ('h', 1), ('e', 1), ('o', 1)]

Example: [('l', 2), ('h', 1)] — 'l' is most common (2), 'h' is next (first among count-1 elements).`
  }),
  // 58. Counter addition combines counts
  (_i: number) => ({
    q: `from collections import Counter\nWhat is Counter("abc") + Counter("bcd")?`,
    o: [`Counter({"b": 2, "c": 2, "a": 1, "d": 1})`, `Counter({"a": 1, "b": 1, "c": 1, "d": 1})`, `{"abcbcd"}`, "Error"],
    c: 0,
    e: "Adding Counters combines counts. 'b' and 'c' appear in both, so their counts add up.",
    de: `Counter supports arithmetic operations. Addition combines counts from both Counters.

Key concepts:
• Counter("abc") → Counter({'a': 1, 'b': 1, 'c': 1})
• Counter("bcd") → Counter({'b': 1, 'c': 1, 'd': 1})
• Adding them: counts for shared keys are summed
• Result: Counter({'b': 2, 'c': 2, 'a': 1, 'd': 1})

How it works:
• + operator adds corresponding counts
• a: 1+0=1, b: 1+1=2, c: 1+1=2, d: 0+1=1
• Non-overlapping keys get their original count
• Result only includes positive counts

Example:
Counter("abc") + Counter("bcd")
# Counter({'b': 2, 'c': 2, 'a': 1, 'd': 1})

Counter also supports -, &, |:
• - subtracts counts (drops zero/negative)
• & takes minimum of counts
• | takes maximum of counts

Example: Counter("abc") + Counter("bcd") sums counts: 'b' and 'c' each appear once in both, so they become 2.`
  }),
  // 59. Counter.elements() repeats elements by count
  (_i: number) => ({
    q: `from collections import Counter\nWhat is list(Counter(a=2, b=3).elements())?`,
    o: [`["a", "a", "b", "b", "b"]`, `["a", "b"]`, `[2, 3]`, `[("a", 2), ("b", 3)]`],
    c: 0,
    e: "elements() returns each element repeated by its count: 'a' twice, 'b' three times.",
    de: `elements() returns an iterator over elements, repeating each as many times as its count.

Key concepts:
• Counter(a=2, b=3) → Counter with a:2, b:3
• elements() yields 'a' twice, then 'b' three times
• list() materializes the iterator → ["a", "a", "b", "b", "b"]
• Elements with count ≤ 0 are excluded
• Order follows insertion order

How it works:
• elements() iterates over each key
• For each key, yields it count times
• Counter(a=2, b=3).elements() → a, a, b, b, b
• Wrapping in list() gives the full sequence

Example:
list(Counter(a=2, b=3).elements())
# ['a', 'a', 'b', 'b', 'b']
list(Counter(x=0, y=1).elements())
# ['y']  — x has count 0, excluded

Example: list(Counter(a=2, b=3).elements()) produces ["a", "a", "b", "b", "b"] by repeating each element by its count.`
  }),
  // 60. Counter returns 0 for missing keys, no KeyError
  (_i: number) => ({
    q: `from collections import Counter\nc = Counter([1, 2, 2, 3, 3, 3])\nWhat is c[4]?`,
    o: ["0", "KeyError", "None", "False"],
    c: 0,
    e: "Counter returns 0 for missing keys instead of raising KeyError.",
    de: `Unlike regular dicts, Counter returns 0 for missing keys instead of raising KeyError.

Key concepts:
• Counter is a dict subclass with a special __missing__ method
• c[4] → 0 because 4 was never counted
• Regular dict would raise KeyError for a missing key
• This makes Counter safe to query without checking existence

How it works:
• Counter overrides __missing__ to return 0
• When you access c[4], Python calls __missing__(4)
• __missing__ returns 0 instead of raising KeyError
• The key is NOT added to the Counter (unlike defaultdict)

Example:
c = Counter([1, 2, 2, 3, 3, 3])
c[3]     # 3 (exists)
c[4]     # 0 (missing → 0, no error)
c[999]   # 0 (missing → 0)
4 in c   # False (key not in Counter)

Common pitfall:
• c[4] returns 0 but does NOT add 4 to the Counter
• 4 in c is still False after accessing c[4]

Example: c[4] returns 0 because Counter's __missing__ method returns 0 for uncounted elements.`
  }),
  // 61. Counter subtraction drops zero/negative counts
  (_i: number) => ({
    q: `from collections import Counter\nWhat is Counter("aab") - Counter("ab")?`,
    o: [`Counter({"a": 1})`, `Counter({"a": 1, "b": 0})`, `Counter({"a": 2})`, "Error"],
    c: 0,
    e: "Counter subtraction removes counts. 'b' drops to 0 and is excluded from the result.",
    de: `Counter subtraction subtracts counts and drops zero or negative results.

Key concepts:
• Counter("aab") → Counter({'a': 2, 'b': 1})
• Counter("ab") → Counter({'a': 1, 'b': 1})
• Subtraction: a: 2-1=1, b: 1-1=0
• Zero and negative counts are dropped from result
• Result: Counter({'a': 1})

How it works:
• - operator subtracts corresponding counts
• Only positive results are kept
• b had count 0 after subtraction → excluded
• This is "multiset subtraction" — removes elements

Example:
Counter("aab") - Counter("ab")  # Counter({'a': 1})
Counter("ab") - Counter("aab")  # Counter() — empty, all results ≤ 0

If you need to keep zero/negative counts, use subtract():
c = Counter("aab")
c.subtract(Counter("ab"))  # Counter({'a': 1, 'b': 0}) — keeps zero

Example: Counter({"a": 1}) because 'a' had 2-1=1 (kept), 'b' had 1-1=0 (dropped).`
  }),
  // 62. Regular dict is ordered since Python 3.7
  (_i: number) => ({
    q: `Since Python 3.7, does a regular dict maintain insertion order?`,
    o: ["Yes", "No", "Only for string keys", "Only for integer keys"],
    c: 0,
    e: "Since Python 3.7, regular dicts are guaranteed to maintain insertion order.",
    de: `Starting with Python 3.7, dict officially preserves insertion order as part of the language spec.

Key concepts:
• Before 3.7: dict order was implementation-dependent
• CPython 3.6: dict was ordered as an implementation detail
• Python 3.7+: insertion order is guaranteed by the language spec
• collections.OrderedDict is now mostly redundant for ordering

How it works:
• Python 3.7+ dicts use a compact representation
• Keys are stored in insertion order internally
• Iteration, keys(), values(), items() all follow insertion order
• This is a language guarantee, not just an implementation detail

Example:
d = {"c": 3, "a": 1, "b": 2}
list(d.keys())    # ['c', 'a', 'b'] — insertion order
list(d.values())  # [3, 1, 2]

OrderedDict still differs in:
• == comparison is order-sensitive for OrderedDict
• OrderedDict has move_to_end() method
• reversed() worked on OrderedDict before 3.8

Example: Yes — since Python 3.7, dict insertion order is part of the language specification.`
  }),
  // 63. defaultdict(int) auto-creates missing keys with 0
  (_i: number) => ({
    q: `from collections import defaultdict\nd = defaultdict(int)\nd["x"] += 1\nWhat is d["x"]?`,
    o: ["1", "0", "KeyError", "None"],
    c: 0,
    e: "defaultdict(int) creates missing keys with int() = 0. Then += 1 makes it 1.",
    de: `defaultdict auto-creates missing keys using the provided factory function.

Key concepts:
• defaultdict(int) uses int() as the default factory
• int() returns 0, so missing keys start at 0
• d["x"] += 1 first creates d["x"] = 0, then adds 1
• Result: d["x"] is 1

How it works:
• When accessing a missing key, defaultdict calls the factory
• int() → 0, so d["x"] is created with value 0
• Then += 1 increments it to 1
• Unlike Counter, defaultdict actually inserts the key

Example:
d = defaultdict(int)
d["x"] += 1    # d["x"] = 0 + 1 = 1
d["y"] += 5    # d["y"] = 0 + 5 = 5
d["z"]         # 0 (auto-created but not incremented)

Common uses:
• Counting: defaultdict(int) as a manual counter
• Grouping: defaultdict(list) for grouping items
• Accumulating: defaultdict(set) for collecting unique items

Example: d["x"] is 1 because defaultdict(int) auto-creates d["x"]=0, then += 1 makes it 1.`
  }),
  // 64. defaultdict(list) auto-creates empty lists
  (_i: number) => ({
    q: `from collections import defaultdict\nd = defaultdict(list)\nd["a"].append(1)\nWhat is d["a"]?`,
    o: ["[1]", "1", "Error", "None"],
    c: 0,
    e: "defaultdict(list) creates missing keys with an empty list. Then append(1) adds 1 to it.",
    de: `defaultdict(list) uses list() as the factory — missing keys get an empty list.

Key concepts:
• defaultdict(list) → missing keys auto-create as []
• d["a"].append(1) → first creates d["a"] = [], then appends 1
• Result: d["a"] is [1]
• No need to check if key exists before appending

How it works:
• Accessing d["a"] triggers the default factory (list)
• list() returns [] — an empty list
• .append(1) is called on that empty list
• d["a"] now holds [1]

Example:
d = defaultdict(list)
d["a"].append(1)    # d["a"] = [1]
d["a"].append(2)    # d["a"] = [1, 2]
d["b"].append(10)   # d["b"] = [10]

Without defaultdict (verbose):
d = {}
if "a" not in d:
    d["a"] = []
d["a"].append(1)

Example: d["a"] is [1] because defaultdict(list) auto-creates an empty list, and append(1) adds 1 to it.`
  }),
  // 65. defaultdict auto-creates with default even without assignment
  (_i: number) => ({
    q: `from collections import defaultdict\nd = defaultdict(int)\nWhat is d["missing"]?`,
    o: ["0", "KeyError", "None", '""'],
    c: 0,
    e: "defaultdict(int) auto-creates missing keys with int() = 0. Just accessing the key creates it.",
    de: `Accessing a missing key in a defaultdict auto-creates it with the factory's default value.

Key concepts:
• defaultdict(int) uses int() as factory → returns 0
• d["missing"] → creates the key with value 0 and returns 0
• This is different from a regular dict (which raises KeyError)
• The key IS added to the dict after access

How it works:
• d["missing"] triggers __missing__ method
• __missing__ calls the factory function: int() → 0
• Stores d["missing"] = 0
• Returns 0
• The key now exists in d

Example:
d = defaultdict(int)
d["missing"]    # 0 (auto-created)
"missing" in d  # True (key was added!)

d2 = defaultdict(str)
d2["x"]         # "" (str() returns empty string)

d3 = defaultdict(bool)
d3["x"]         # False (bool() returns False)

Key difference from Counter:
• Counter: c[key] returns 0 but does NOT add the key
• defaultdict: d[key] returns default AND adds the key

Example: d["missing"] returns 0 because defaultdict(int) calls int() → 0 for missing keys.`
  }),
  // 66. itertools.chain flattens iterables
  (_i: number) => ({
    q: `from itertools import chain\nWhat is list(chain([1, 2], [3, 4]))?`,
    o: ["[1, 2, 3, 4]", "[[1, 2], [3, 4]]", "[(1, 3), (2, 4)]", "Error"],
    c: 0,
    e: "chain() joins multiple iterables into one continuous sequence.",
    de: `itertools.chain takes multiple iterables and chains them together into a single iterable.

Key concepts:
• chain([1, 2], [3, 4]) → yields 1, 2, 3, 4
• It "flattens" multiple iterables into one sequence
• Does not nest them — just concatenates
• Works lazily (returns an iterator, not a list)

How it works:
• chain iterates through the first iterable completely
• Then moves to the next iterable, and so on
• Yields elements one by one from each iterable in order
• Equivalent to: [x for it in iterables for x in it]

Example:
list(chain([1, 2], [3, 4]))       # [1, 2, 3, 4]
list(chain("ab", "cd", "ef"))     # ['a', 'b', 'c', 'd', 'e', 'f']
list(chain(range(3), range(3)))   # [0, 1, 2, 0, 1, 2]

Use chain.from_iterable for a list of iterables:
list(chain.from_iterable([[1, 2], [3, 4]]))  # [1, 2, 3, 4]

Example: list(chain([1, 2], [3, 4])) returns [1, 2, 3, 4] — elements from both lists in order.`
  }),
  // 67. chain works with strings (iterates characters)
  (_i: number) => ({
    q: `from itertools import chain\nWhat is list(chain("ab", "cd"))?`,
    o: [`["a", "b", "c", "d"]`, `["ab", "cd"]`, `["abcd"]`, "Error"],
    c: 0,
    e: "chain iterates each string character by character, yielding 'a', 'b', 'c', 'd'.",
    de: `When chain receives strings, it iterates them character by character (strings are iterables of characters).

Key concepts:
• "ab" is iterable → yields 'a', 'b'
• "cd" is iterable → yields 'c', 'd'
• chain("ab", "cd") → 'a', 'b', 'c', 'd'
• Strings are not treated as atomic elements

How it works:
• chain treats each argument as an iterable
• Strings iterate character by character
• So chain("ab", "cd") chains individual characters
• Result: ['a', 'b', 'c', 'd']

Example:
list(chain("ab", "cd"))    # ['a', 'b', 'c', 'd']
list(chain("hello"))       # ['h', 'e', 'l', 'l', 'o']

If you want to keep strings intact, don't use chain:
["ab"] + ["cd"]            # ['ab', 'cd']

Example: list(chain("ab", "cd")) returns ['a', 'b', 'c', 'd'] because strings are iterated character by character.`
  }),
  // 68. itertools.repeat creates repeated values
  (_i: number) => ({
    q: `from itertools import repeat\nWhat is list(repeat(5, 3))?`,
    o: ["[5, 5, 5]", "[5, 3]", "[15]", "[3, 3, 3, 3, 3]"],
    c: 0,
    e: "repeat(5, 3) yields the value 5 exactly 3 times.",
    de: `itertools.repeat yields an object a specified number of times (or indefinitely if no count).

Key concepts:
• repeat(5, 3) → yields 5, 5, 5 (value 5, repeated 3 times)
• First argument: the value to repeat
• Second argument: how many times (optional — infinite if omitted)
• Returns an iterator, not a list

How it works:
• repeat(value, times) yields value exactly times times
• Without times argument, it repeats forever
• Each yield returns the same object (not copies)
• Useful with map, zip, and other itertools functions

Example:
list(repeat(5, 3))       # [5, 5, 5]
list(repeat("x", 4))     # ['x', 'x', 'x', 'x']
list(repeat([1], 2))     # [[1], [1]] — same list object!

# Without count — infinite (use islice to limit):
from itertools import islice
list(islice(repeat(0), 5))  # [0, 0, 0, 0, 0]

Example: list(repeat(5, 3)) returns [5, 5, 5] — the value 5 repeated 3 times.`
  }),
  // 69. itertools.count creates an infinite counter
  (_i: number) => ({
    q: `from itertools import count\nc = count(10)\nWhat is [next(c) for _ in range(3)]?`,
    o: ["[10, 11, 12]", "[10, 10, 10]", "[0, 1, 2]", "[10, 20, 30]"],
    c: 0,
    e: "count(10) starts at 10 and increments by 1. Three next() calls give [10, 11, 12].",
    de: `itertools.count creates an infinite iterator that counts up from a start value.

Key concepts:
• count(10) starts at 10, increments by 1 each time
• next(c) returns the next value: 10, then 11, then 12
• count() is infinite — it never stops on its own
• Default step is 1; can be changed: count(10, 2) → 10, 12, 14, ...

How it works:
• count(10) creates an iterator starting at 10
• Each next() call returns current value and increments
• First next() → 10, second → 11, third → 12
• The comprehension collects 3 values: [10, 11, 12]

Example:
c = count(10)
next(c)    # 10
next(c)    # 11
next(c)    # 12

c2 = count(0, 5)  # step of 5
next(c2)   # 0
next(c2)   # 5
next(c2)   # 10

Common use: often paired with zip() or islice() to limit the infinite sequence.

Example: [next(c) for _ in range(3)] returns [10, 11, 12] — three consecutive values starting from 10.`
  }),
  // 70. itertools.cycle repeats an iterable endlessly
  (_i: number) => ({
    q: `from itertools import cycle\nc = cycle([1, 2, 3])\nWhat is [next(c) for _ in range(7)]?`,
    o: ["[1, 2, 3, 1, 2, 3, 1]", "[1, 2, 3, 1, 2, 3, 7]", "[1, 1, 1, 1, 1, 1, 1]", "[1, 2, 3]"],
    c: 0,
    e: "cycle repeats the iterable endlessly: 1,2,3,1,2,3,1,... Taking 7 gives [1,2,3,1,2,3,1].",
    de: `itertools.cycle repeats an iterable indefinitely, looping back to the start when exhausted.

Key concepts:
• cycle([1, 2, 3]) → 1, 2, 3, 1, 2, 3, 1, 2, 3, ...
• It memorizes the entire iterable and replays it forever
• 7 calls to next() give [1, 2, 3, 1, 2, 3, 1]
• cycle is infinite — always use with a limiter

How it works:
• cycle saves a copy of the iterable internally
• Yields each element in order
• When the end is reached, restarts from the beginning
• This repeats indefinitely

Example:
c = cycle([1, 2, 3])
[next(c) for _ in range(7)]
# [1, 2, 3, 1, 2, 3, 1]

c2 = cycle("AB")
[next(c2) for _ in range(5)]
# ['A', 'B', 'A', 'B', 'A']

Common uses:
• Round-robin scheduling
• Alternating patterns
• Repeating sequences in games/animations

Example: cycle([1, 2, 3]) cycles through 1→2→3→1→2→3→1... Taking 7 values wraps around twice plus one.`
  }),
  // 71. itertools.islice slices an iterator
  (_i: number) => ({
    q: `from itertools import islice\nWhat is list(islice(range(100), 5))?`,
    o: ["[0, 1, 2, 3, 4]", "[0, 1, 2, 3, 4, 5]", "[5]", "[95, 96, 97, 98, 99]"],
    c: 0,
    e: "islice(iterable, 5) takes the first 5 elements, like iterable[:5] but for any iterator.",
    de: `itertools.islice slices an iterator without materializing the whole thing.

Key concepts:
• islice(range(100), 5) → takes first 5 elements: 0, 1, 2, 3, 4
• Works like sequence slicing but for any iterable/iterator
• islice(it, stop) is equivalent to it[:stop]
• Does not support negative indices (unlike list slicing)

How it works:
• islice takes elements up to the stop value
• range(100) generates 0-99, but islice stops at 5
• Only 5 elements are consumed from the iterator
• This is memory-efficient for large/infinite iterables

Example:
list(islice(range(100), 5))      # [0, 1, 2, 3, 4]
list(islice(range(100), 3))      # [0, 1, 2]
list(islice(count(), 5))         # [0, 1, 2, 3, 4] — works on infinite!

Signatures:
• islice(iterable, stop)
• islice(iterable, start, stop)
• islice(iterable, start, stop, step)

Example: list(islice(range(100), 5)) returns [0, 1, 2, 3, 4] — the first 5 elements of range(100).`
  }),
  // 72. islice with start and stop
  (_i: number) => ({
    q: `from itertools import islice\nWhat is list(islice(range(100), 2, 7))?`,
    o: ["[2, 3, 4, 5, 6]", "[2, 3, 4, 5, 6, 7]", "[0, 1, 2, 3, 4]", "[2, 7]"],
    c: 0,
    e: "islice(range(100), 2, 7) skips the first 2 elements and takes up to index 7 (exclusive).",
    de: `islice with start and stop parameters works like slicing: start is inclusive, stop is exclusive.

Key concepts:
• islice(range(100), 2, 7) → elements at indices 2, 3, 4, 5, 6
• Equivalent to list(range(100))[2:7]
• start=2 means skip the first 2 elements
• stop=7 means stop before index 7
• Result: [2, 3, 4, 5, 6]

How it works:
• islice skips the first 2 elements (indices 0 and 1)
• Then yields elements at indices 2 through 6
• Stops before index 7
• 7 - 2 = 5 elements returned

Example:
list(islice(range(100), 2, 7))     # [2, 3, 4, 5, 6]
list(islice(range(100), 0, 10, 2)) # [0, 2, 4, 6, 8] — with step

Key difference from list slicing:
• islice works on any iterator, not just sequences
• islice does NOT support negative indices
• islice is lazy — doesn't build the full sequence

Example: list(islice(range(100), 2, 7)) returns [2, 3, 4, 5, 6] — from index 2 up to (not including) 7.`
  }),
  // 73. itertools.product gives Cartesian product
  (_i: number) => ({
    q: `from itertools import product\nWhat is list(product([1, 2], [3, 4]))?`,
    o: ["[(1,3),(1,4),(2,3),(2,4)]", "[(1,3),(2,4)]", "[[1,3],[2,4]]", "[1,2,3,4]"],
    c: 0,
    e: "product computes the Cartesian product: every combination of one element from each iterable.",
    de: `itertools.product computes the Cartesian product of input iterables — all possible ordered pairs.

Key concepts:
• product([1, 2], [3, 4]) → (1,3), (1,4), (2,3), (2,4)
• Equivalent to nested for loops
• Order: first iterable varies slowest, last varies fastest
• Returns tuples of one element from each input

How it works:
• For each element in [1, 2]:
•   For each element in [3, 4]:
•     Yield the pair
• 1 pairs with 3 and 4, then 2 pairs with 3 and 4
• Result: [(1,3), (1,4), (2,3), (2,4)]

Example:
list(product([1, 2], [3, 4]))
# [(1, 3), (1, 4), (2, 3), (2, 4)]

list(product("AB", "12"))
# [('A','1'), ('A','2'), ('B','1'), ('B','2')]

list(product([0, 1], repeat=3))
# All 3-bit binary: [(0,0,0), (0,0,1), ..., (1,1,1)]

Example: product([1,2], [3,4]) yields all 4 pairs: (1,3), (1,4), (2,3), (2,4).`
  }),
  // 74. itertools.permutations gives ordered arrangements
  (_i: number) => ({
    q: `from itertools import permutations\nWhat is list(permutations([1, 2, 3], 2))?`,
    o: ["[(1,2),(1,3),(2,1),(2,3),(3,1),(3,2)]", "[(1,2),(1,3),(2,3)]", "[(1,2),(2,3),(3,1)]", "Error"],
    c: 0,
    e: "permutations([1,2,3], 2) gives all 2-element ordered arrangements: 6 results (order matters).",
    de: `itertools.permutations returns all possible orderings of r elements from the input.

Key concepts:
• permutations([1, 2, 3], 2) → all 2-element orderings
• Order matters: (1, 2) and (2, 1) are different permutations
• No repeated elements within a single permutation
• Count: P(n, r) = n! / (n-r)! = 3! / 1! = 6

How it works:
• Take each element as first: 1, 2, 3
• For each first element, pair with remaining elements
• 1→(1,2),(1,3); 2→(2,1),(2,3); 3→(3,1),(3,2)
• Total: 6 permutations

Example:
list(permutations([1, 2, 3], 2))
# [(1,2), (1,3), (2,1), (2,3), (3,1), (3,2)]

list(permutations("AB"))
# [('A','B'), ('B','A')]

Key difference from combinations:
• permutations: order matters → (1,2) ≠ (2,1)
• combinations: order doesn't matter → only (1,2)

Example: 6 permutations because from 3 elements taken 2 at a time, order matters: P(3,2) = 6.`
  }),
  // 75. itertools.combinations gives unordered selections
  (_i: number) => ({
    q: `from itertools import combinations\nWhat is list(combinations([1, 2, 3], 2))?`,
    o: ["[(1,2),(1,3),(2,3)]", "[(1,2),(2,1),(1,3),(3,1),(2,3),(3,2)]", "[(1,2),(2,3)]", "Error"],
    c: 0,
    e: "combinations([1,2,3], 2) gives all 2-element subsets: (1,2), (1,3), (2,3). Order doesn't matter.",
    de: `itertools.combinations returns all unique subsets of r elements (order doesn't matter).

Key concepts:
• combinations([1, 2, 3], 2) → all 2-element subsets
• Order does NOT matter: (1, 2) and (2, 1) are the same → only (1, 2) is returned
• Elements are in sorted order within each combination
• Count: C(n, r) = n! / (r! × (n-r)!) = 3! / (2! × 1!) = 3

How it works:
• Select 2 elements from [1, 2, 3] without regard to order
• (1,2), (1,3), (2,3) — each subset appears once
• Elements within each tuple follow the input order
• No element is repeated within a combination

Example:
list(combinations([1, 2, 3], 2))
# [(1, 2), (1, 3), (2, 3)]

list(combinations("ABCD", 3))
# [('A','B','C'), ('A','B','D'), ('A','C','D'), ('B','C','D')]

Key difference from permutations:
• combinations: 3 results (order doesn't matter)
• permutations: 6 results (order matters)

Example: 3 combinations because C(3,2) = 3 — only unique subsets, not orderings.`
  }),
  // 76. permutations count: n! for full permutations
  (_i: number) => ({
    q: `from itertools import permutations\nWhat is len(list(permutations([1, 2, 3])))?`,
    o: ["6", "3", "9", "27"],
    c: 0,
    e: "Full permutations of 3 elements = 3! = 3 × 2 × 1 = 6.",
    de: `When no r is specified, permutations returns all full-length orderings: n! total.

Key concepts:
• permutations([1, 2, 3]) → all orderings of all 3 elements
• 3! = 3 × 2 × 1 = 6 total permutations
• Each permutation uses every element exactly once
• This is the same as len(r) defaults to len(iterable)

How it works:
• First position: 3 choices (1, 2, or 3)
• Second position: 2 remaining choices
• Third position: 1 remaining choice
• Total: 3 × 2 × 1 = 6

All 6 permutations:
(1, 2, 3), (1, 3, 2),
(2, 1, 3), (2, 3, 1),
(3, 1, 2), (3, 2, 1)

Example:
len(list(permutations([1, 2, 3])))      # 6 (3!)
len(list(permutations([1, 2, 3, 4])))   # 24 (4!)
len(list(permutations([1, 2])))         # 2 (2!)

Example: len is 6 because 3! = 6 — there are 6 ways to arrange 3 distinct elements.`
  }),
  // 77. combinations count: C(4,2) = 6
  (_i: number) => ({
    q: `from itertools import combinations\nWhat is len(list(combinations([1, 2, 3, 4], 2)))?`,
    o: ["6", "12", "4", "8"],
    c: 0,
    e: "C(4, 2) = 4! / (2! × 2!) = 6. There are 6 ways to choose 2 items from 4.",
    de: `The number of 2-element combinations from 4 elements is C(4,2) = 6.

Key concepts:
• C(n, r) = n! / (r! × (n-r)!)
• C(4, 2) = 4! / (2! × 2!) = 24 / 4 = 6
• This counts unordered selections (subsets)
• Each pair appears exactly once

All 6 combinations:
(1, 2), (1, 3), (1, 4),
(2, 3), (2, 4),
(3, 4)

How it works:
• Element 1 pairs with: 2, 3, 4 → 3 combinations
• Element 2 pairs with: 3, 4 → 2 combinations (1,2 already counted)
• Element 3 pairs with: 4 → 1 combination
• Total: 3 + 2 + 1 = 6

Example:
len(list(combinations([1, 2, 3, 4], 2)))  # 6
len(list(combinations([1, 2, 3, 4], 3)))  # 4 (C(4,3))
len(list(combinations([1, 2, 3, 4], 1)))  # 4 (C(4,1))

Example: C(4, 2) = 6. Six unique pairs can be formed from four elements.`
  }),
  // 78. itertools.accumulate gives running totals
  (_i: number) => ({
    q: `from itertools import accumulate\nWhat is list(accumulate([1, 2, 3, 4]))?`,
    o: ["[1, 3, 6, 10]", "[1, 2, 3, 4]", "[10]", "[10, 9, 7, 4]"],
    c: 0,
    e: "accumulate gives running sums: 1, 1+2=3, 3+3=6, 6+4=10.",
    de: `itertools.accumulate returns running (cumulative) totals. Default operation is addition.

Key concepts:
• accumulate([1, 2, 3, 4]) → running sums
• Step 1: 1
• Step 2: 1 + 2 = 3
• Step 3: 3 + 3 = 6
• Step 4: 6 + 4 = 10
• Result: [1, 3, 6, 10]

How it works:
• First element is yielded as-is
• Each subsequent element is combined with the running total
• Default function is operator.add (addition)
• Can use any binary function

Example:
list(accumulate([1, 2, 3, 4]))
# [1, 3, 6, 10]

import operator
list(accumulate([1, 2, 3, 4], operator.mul))
# [1, 2, 6, 24] — running product

list(accumulate([3, 1, 4, 1, 5], max))
# [3, 3, 4, 4, 5] — running maximum

Example: [1, 3, 6, 10] — each element is the cumulative sum up to that point.`
  }),
  // 79. itertools.groupby groups consecutive identical elements
  (_i: number) => ({
    q: `from itertools import groupby\nWhat is [(k, list(g)) for k, g in groupby("AAABBC")]?`,
    o: [`[("A",["A","A","A"]),("B",["B","B"]),("C",["C"])]`, `[("A",3),("B",2),("C",1)]`, `{"A":3,"B":2,"C":1}`, "Error"],
    c: 0,
    e: "groupby groups consecutive identical elements. Each group has a key and an iterator of matching elements.",
    de: `itertools.groupby groups consecutive elements that share the same key.

Key concepts:
• groupby("AAABBC") groups consecutive identical characters
• Yields (key, group_iterator) pairs
• "AAA" → key='A', group=['A','A','A']
• "BB" → key='B', group=['B','B']
• "C" → key='C', group=['C']
• IMPORTANT: only groups consecutive elements, not all occurrences

How it works:
• groupby iterates through the string
• When the value changes, a new group starts
• Each group has a key and an iterator of the group's elements
• list(g) materializes the group iterator

Example:
[(k, list(g)) for k, g in groupby("AAABBC")]
# [('A', ['A', 'A', 'A']), ('B', ['B', 'B']), ('C', ['C'])]

Gotcha — data must be sorted for full grouping:
[(k, list(g)) for k, g in groupby("ABAB")]
# [('A',['A']), ('B',['B']), ('A',['A']), ('B',['B'])]
# NOT [('A',['A','A']), ('B',['B','B'])]

Sort first: groupby(sorted("ABAB")) for full grouping.

Example: Three groups of consecutive characters: 3 A's, 2 B's, 1 C.`
  }),
  // 80. itertools.starmap unpacks arguments
  (_i: number) => ({
    q: `from itertools import starmap\nWhat is list(starmap(pow, [(2, 3), (3, 2)]))?`,
    o: ["[8, 9]", "[6, 6]", "[(2,3), (3,2)]", "Error"],
    c: 0,
    e: "starmap unpacks each tuple as arguments: pow(2,3)=8, pow(3,2)=9.",
    de: `itertools.starmap applies a function to each element, unpacking tuples as arguments.

Key concepts:
• starmap(pow, [(2, 3), (3, 2)]) calls pow(*args) for each tuple
• pow(2, 3) = 2³ = 8
• pow(3, 2) = 3² = 9
• Result: [8, 9]
• "star" refers to the * unpacking operator

How it works:
• For each tuple in the iterable:
•   Unpack the tuple as function arguments
•   pow(2, 3) → 8
•   pow(3, 2) → 9
• Yields each result

Difference from map:
• map(func, iterable) → func(item)
• starmap(func, iterable) → func(*item)

Example:
list(starmap(pow, [(2, 3), (3, 2)]))  # [8, 9]
list(starmap(max, [(1, 5), (3, 2)]))  # [5, 3]
list(starmap(lambda a, b: a + b, [(1, 2), (3, 4)]))  # [3, 7]

Example: starmap applies pow to unpacked tuples: pow(2,3)=8, pow(3,2)=9 → [8, 9].`
  }),
  // 81. Self-referencing list
  (_i: number) => ({
    q: `a = []\na.append(a)\nWhat is len(a)?`,
    o: ["1", "0", "Error", "Infinite"],
    c: 0,
    e: "a.append(a) adds a single element (a reference to itself). len(a) is 1.",
    de: `A list can contain a reference to itself. a.append(a) creates a self-referential list.

Key concepts:
• a = [] creates an empty list
• a.append(a) adds one element: a reference to a itself
• len(a) is 1 — there's exactly one element (which happens to be a)
• The list is now recursive: a[0] is a, a[0][0] is a, etc.
• Python displays this as [[...]] to avoid infinite recursion

How it works:
• Lists store references, not copies
• a.append(a) stores a reference to the same list object
• The list now has one element, so len(a) = 1
• The element happens to be the list itself

Example:
a = []
a.append(a)
len(a)        # 1
print(a)      # [[...]]  — Python detects the cycle
a[0] is a     # True
a[0][0] is a  # True — infinite recursion in structure

This is a classic Python curiosity — lists are reference-based.

Example: len(a) is 1 because append added exactly one element (a reference to a itself).`
  }),
  // 82. Self-referencing list identity check
  (_i: number) => ({
    q: `a = []\na.append(a)\nWhat is a[0] is a?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "a[0] is the same object as a (self-reference). The 'is' check confirms identity.",
    de: `When a list contains itself, a[0] and a are the same object in memory.

Key concepts:
• a.append(a) stores a reference to a inside itself
• a[0] retrieves that reference — it's the same object as a
• 'is' checks identity (same object), not equality
• a[0] is a → True because they're literally the same object

How it works:
• a = [] creates a list object at some memory address
• a.append(a) stores a reference to that same address
• a[0] dereferences index 0, getting back the same object
• id(a) == id(a[0]) — same identity

Example:
a = []
a.append(a)
a[0] is a      # True — same object
a[0][0] is a   # True — still the same object
id(a) == id(a[0])  # True

This demonstrates Python's reference semantics — variables and list elements hold references, not copies.

Example: a[0] is a returns True because a[0] is a reference back to the same list object.`
  }),
  // 83. Dunder __len__ method
  (_i: number) => ({
    q: `What is [1, 2, 3].__len__()?`,
    o: ["3", "Error", "[1, 2, 3]", "None"],
    c: 0,
    e: "__len__() is the dunder method behind len(). [1,2,3].__len__() returns 3.",
    de: `__len__() is the "dunder" (double underscore) method that len() calls internally.

Key concepts:
• len(obj) actually calls obj.__len__()
• [1, 2, 3].__len__() → 3
• This is Python's "data model" — operators and built-ins use dunder methods
• You can define __len__ in your own classes to support len()

How it works:
• len([1, 2, 3]) is equivalent to [1, 2, 3].__len__()
• The list class defines __len__ to return the number of elements
• Python calls __len__ behind the scenes
• Calling it directly also works

Example:
[1, 2, 3].__len__()    # 3
"hello".__len__()      # 5
len([1, 2, 3])         # 3 (same result)

Custom class:
class MyList:
    def __len__(self):
        return 42
len(MyList())  # 42

Example: [1, 2, 3].__len__() returns 3 — it's the direct call to the method len() uses.`
  }),
  // 84. Dunder __contains__ method
  (_i: number) => ({
    q: `What is [1, 2, 3].__contains__(2)?`,
    o: ["True", "False", "Error", "2"],
    c: 0,
    e: "__contains__ is the dunder method behind the 'in' operator. 2 is in the list → True.",
    de: `__contains__() is the dunder method that the 'in' operator calls.

Key concepts:
• 2 in [1, 2, 3] actually calls [1, 2, 3].__contains__(2)
• Returns True because 2 is in the list
• This is part of Python's data model
• Any class with __contains__ supports the 'in' operator

How it works:
• x in obj calls obj.__contains__(x)
• The list implementation checks each element for equality
• 2 == 1? No. 2 == 2? Yes → return True
• If no __contains__, Python falls back to __iter__

Example:
[1, 2, 3].__contains__(2)     # True
[1, 2, 3].__contains__(5)     # False
2 in [1, 2, 3]                # True (same thing)
"h" in "hello"                # True (str.__contains__)

Example: [1, 2, 3].__contains__(2) returns True — 2 is found in the list.`
  }),
  // 85. Dunder __getitem__ method
  (_i: number) => ({
    q: `What is [1, 2, 3].__getitem__(0)?`,
    o: ["1", "[1, 2, 3]", "Error", "0"],
    c: 0,
    e: "__getitem__ is the dunder method behind indexing. [1,2,3][0] calls __getitem__(0) → 1.",
    de: `__getitem__() is the dunder method that indexing (obj[key]) calls.

Key concepts:
• obj[key] calls obj.__getitem__(key)
• [1, 2, 3].__getitem__(0) → 1 (first element)
• This powers all indexing and slicing in Python
• Define __getitem__ in your classes to support bracket notation

How it works:
• [1, 2, 3][0] is equivalent to [1, 2, 3].__getitem__(0)
• The list implementation returns the element at index 0
• Also handles negative indices: __getitem__(-1) → 3
• Slicing: __getitem__(slice(0, 2)) → [1, 2]

Example:
[1, 2, 3].__getitem__(0)     # 1
[1, 2, 3].__getitem__(-1)    # 3
[1, 2, 3][0]                 # 1 (same thing)

Custom class:
class MyObj:
    def __getitem__(self, key):
        return key * 2
MyObj()[5]  # 10

Example: [1, 2, 3].__getitem__(0) returns 1 — same as [1, 2, 3][0].`
  }),
  // 86. __reversed__ returns an iterator type
  (_i: number) => ({
    q: `What is type([1, 2, 3].__reversed__())?`,
    o: ["<class 'list_reverseiterator'>", "<class 'list'>", "<class 'iterator'>", "Error"],
    c: 0,
    e: "__reversed__() returns a list_reverseiterator, not a list. You need list() to get a list.",
    de: `__reversed__() returns a reverse iterator object, not a reversed list.

Key concepts:
• [1, 2, 3].__reversed__() returns a list_reverseiterator
• reversed([1, 2, 3]) also calls __reversed__ internally
• The result is lazy — it doesn't create a reversed list in memory
• Use list() to materialize: list(reversed([1, 2, 3])) → [3, 2, 1]

How it works:
• __reversed__ creates an iterator that traverses the list backwards
• The iterator yields elements on demand (lazy evaluation)
• type() shows <class 'list_reverseiterator'>
• This is memory-efficient — no new list is created

Example:
r = [1, 2, 3].__reversed__()
type(r)        # <class 'list_reverseiterator'>
list(r)        # [3, 2, 1]
next(r)        # 3 (first element from reverse)

reversed() vs [::-1]:
• reversed() → lazy iterator (memory-efficient)
• [::-1] → creates a new reversed list (uses memory)

Example: type is list_reverseiterator — a specialized iterator, not a list.`
  }),
  // 87. list.__add__ as direct dunder call
  (_i: number) => ({
    q: `What is list.__add__([1, 2], [3, 4])?`,
    o: ["[1, 2, 3, 4]", "Error", "6", "[[1,2],[3,4]]"],
    c: 0,
    e: "list.__add__ is the dunder behind +. [1,2] + [3,4] = [1,2,3,4].",
    de: `list.__add__ is the dunder method that the + operator calls for list concatenation.

Key concepts:
• [1, 2] + [3, 4] calls [1, 2].__add__([3, 4])
• Calling list.__add__([1, 2], [3, 4]) is the unbound method form
• First argument is self (the left list), second is the other list
• Result: [1, 2, 3, 4] — a new concatenated list

How it works:
• list.__add__(a, b) is equivalent to a + b for lists
• Creates a new list containing elements of both
• Original lists are not modified
• Only works with list + list (not list + tuple)

Example:
list.__add__([1, 2], [3, 4])    # [1, 2, 3, 4]
[1, 2].__add__([3, 4])          # [1, 2, 3, 4]
[1, 2] + [3, 4]                 # [1, 2, 3, 4] (same)

Unbound vs bound method:
• list.__add__(a, b) — unbound (class method with explicit self)
• a.__add__(b) — bound (instance method)

Example: list.__add__([1, 2], [3, 4]) returns [1, 2, 3, 4] — same as [1, 2] + [3, 4].`
  }),
  // 88. In-place multiply by 0 empties the list
  (_i: number) => ({
    q: `a = [1, 2, 3]\na *= 0\nWhat is a?`,
    o: ["[]", "[1, 2, 3]", "[0, 0, 0]", "Error"],
    c: 0,
    e: "a *= 0 multiplies the list by 0 in place, resulting in an empty list.",
    de: `The *= operator with 0 empties a list in place. It modifies the original list.

Key concepts:
• a *= 0 calls a.__imul__(0)
• Multiplying a list by 0 produces an empty list
• *= is in-place — it modifies a directly
• After a *= 0, a is [] (same object, now empty)

How it works:
• List repetition: [1, 2, 3] * n repeats the list n times
• n=0 means zero repetitions → empty list
• *= modifies in place (unlike * which creates a new list)
• id(a) stays the same — same object, just emptied

Example:
a = [1, 2, 3]
old_id = id(a)
a *= 0
a              # []
id(a) == old_id  # True — same object!

Compare with * (not in-place):
a = [1, 2, 3]
b = a * 0      # b = [], a unchanged
a              # [1, 2, 3] — still intact

Example: a *= 0 empties the list in place. a is now [].`
  }),
  // 89. Non-mutating multiply by 0 — original unchanged
  (_i: number) => ({
    q: `a = [1, 2, 3]\nb = a * 0\nWhat is a?`,
    o: ["[1, 2, 3]", "[]", "[0, 0, 0]", "Error"],
    c: 0,
    e: "a * 0 creates a NEW empty list (b). The original list a is unchanged.",
    de: `The * operator creates a new list. The original is not modified.

Key concepts:
• a * 0 creates a new empty list, assigned to b
• a is NOT modified — still [1, 2, 3]
• * creates a copy; *= modifies in place
• b is [] (a new, separate object)

How it works:
• a * 0 calls a.__mul__(0)
• __mul__ returns a new list (does not modify a)
• b gets the new empty list
• a retains its original contents

Example:
a = [1, 2, 3]
b = a * 0
a    # [1, 2, 3] — unchanged
b    # [] — new empty list

Key distinction:
• a * 0 → new list, a unchanged (uses __mul__)
• a *= 0 → a modified in place (uses __imul__)

Example: a is still [1, 2, 3] because * creates a new list; the original is untouched.`
  }),
  // 90. "".join() concatenates a list of strings
  (_i: number) => ({
    q: `What is "".join(["a", "b", "c"])?`,
    o: ['"abc"', '["a", "b", "c"]', '"a b c"', "Error"],
    c: 0,
    e: '"".join() concatenates strings with no separator, producing "abc".',
    de: `str.join() concatenates an iterable of strings using the string as a separator.

Key concepts:
• "".join(["a", "b", "c"]) → "abc"
• The separator is "" (empty string) → no separator between elements
• join() only works with strings — all elements must be str
• It's the most efficient way to concatenate strings in Python

How it works:
• "" is the separator (empty = no gap between elements)
• join iterates through ["a", "b", "c"]
• Concatenates: "a" + "" + "b" + "" + "c" = "abc"
• Returns a single string

Example:
"".join(["a", "b", "c"])    # "abc"
" ".join(["a", "b", "c"])   # "a b c"
"-".join(["a", "b", "c"])   # "a-b-c"
"".join(["hello"])           # "hello"

Common use:
• Building strings from character lists
• Much faster than repeated + concatenation
• join() with non-strings raises TypeError

Example: "".join(["a", "b", "c"]) returns "abc" — elements joined with no separator.`
  }),
  // 91. join with map to convert non-strings
  (_i: number) => ({
    q: `What is ",".join(map(str, [1, 2, 3]))?`,
    o: ['"1,2,3"', '"123"', '[1, 2, 3]', "Error"],
    c: 0,
    e: 'map(str, ...) converts each int to string, then join combines them with commas.',
    de: `map(str, iterable) converts each element to a string, enabling join() to work on non-strings.

Key concepts:
• map(str, [1, 2, 3]) → "1", "2", "3" (lazy iterator)
• ",".join(...) joins with comma separator
• Result: "1,2,3"
• join() requires all elements to be strings — map(str, ...) handles conversion

How it works:
• map(str, [1, 2, 3]) applies str() to each element
• str(1) = "1", str(2) = "2", str(3) = "3"
• join concatenates with "," between each
• "1" + "," + "2" + "," + "3" = "1,2,3"

Example:
",".join(map(str, [1, 2, 3]))    # "1,2,3"
" ".join(map(str, [1, 2, 3]))    # "1 2 3"

Alternative with list comprehension:
",".join([str(x) for x in [1, 2, 3]])  # "1,2,3"

Without map(str, ...), join would fail:
",".join([1, 2, 3])  # TypeError: sequence item 0: expected str instance, int found

Example: ",".join(map(str, [1, 2, 3])) returns "1,2,3" — integers converted to strings, then joined.`
  }),
  // 92. List repetition with None
  (_i: number) => ({
    q: `What is [None] * 5?`,
    o: ["[None, None, None, None, None]", "[5]", "None", "Error"],
    c: 0,
    e: "[None] * 5 repeats the single-element list 5 times.",
    de: `List repetition with * creates a new list with the elements repeated n times.

Key concepts:
• [None] * 5 → [None, None, None, None, None]
• Creates 5 copies of the None reference
• This is a common pattern for initializing lists
• All elements are None — Python's null/nothing value

How it works:
• [None] is a list with one element
• * 5 repeats that element 5 times
• Creates a new list with 5 None references
• All 5 references point to the same None object (which is fine since None is immutable)

Example:
[None] * 5    # [None, None, None, None, None]
[0] * 3       # [0, 0, 0]

Gotcha with mutable elements:
a = [[]] * 3  # [[], [], []] — but all three are THE SAME list!
a[0].append(1)
a             # [[1], [1], [1]] — all modified!

Safe alternative:
a = [[] for _ in range(3)]  # three independent lists

Example: [None] * 5 creates a list of five None values — a common initialization pattern.`
  }),
  // 93. sorted() with None raises TypeError in Python 3
  (_i: number) => ({
    q: `What happens when you run sorted([3, 1, None, 2])?`,
    o: ["TypeError", "[None, 1, 2, 3]", "[1, 2, 3, None]", "[3, 2, 1, None]"],
    c: 0,
    e: "Python 3 can't compare int and None with <. sorted() raises TypeError.",
    de: `In Python 3, comparing incompatible types raises TypeError. sorted() needs to compare elements.

Key concepts:
• sorted() uses < comparisons to order elements
• int < None is not defined in Python 3
• TypeError: '<' not supported between instances of 'NoneType' and 'int'
• Python 2 allowed mixed-type comparisons; Python 3 does not

How it works:
• sorted() tries to compare elements pairwise
• When comparing 1 and None: 1 < None → TypeError
• Python 3 enforces strict type checking for comparisons
• No implicit ordering between different types

Example:
sorted([3, 1, None, 2])
# TypeError: '<' not supported between instances of 'NoneType' and 'int'

sorted([3, 1, 2])        # [1, 2, 3] — works fine
sorted(["b", "a", "c"])  # ['a', 'b', 'c'] — same type works

Workaround:
sorted([3, 1, None, 2], key=lambda x: (x is None, x or 0))
# [1, 2, 3, None]

Example: TypeError because Python 3 cannot compare int and NoneType with < operator.`
  }),
  // 94. Tuple identity — constructor always creates new object
  (_i: number) => ({
    q: `a = tuple([1, 2])\nb = tuple([1, 2])\nWhat is a is b?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "tuple() constructor creates new objects each time. a and b are equal but not the same object.",
    de: `The tuple() constructor creates a new tuple object from an iterable. Two separate calls produce different objects.

Key concepts:
• tuple([1, 2]) creates a new tuple (1, 2) each time
• a and b are equal (a == b → True)
• a and b are NOT the same object (a is b → False)
• 'is' checks identity (same memory address), not equality

How it works:
• tuple([1, 2]) converts the list to a new tuple
• Each call allocates a new tuple object
• a and b have the same values but different identities
• id(a) ≠ id(b)

Example:
a = tuple([1, 2])
b = tuple([1, 2])
a == b     # True (same values)
a is b     # False (different objects)
id(a) == id(b)  # False

Note: CPython may intern some tuples as a constant-folding optimization,
but this is an implementation detail and not guaranteed. Constructor calls
from lists always create new objects.

Example: a is b returns False because tuple() creates a new tuple object each call — equal but not identical.`
  }),
  // 95. Comma creates a tuple, no parentheses needed
  (_i: number) => ({
    q: `a = 1, 2, 3\nWhat is type(a)?`,
    o: ["<class 'tuple'>", "<class 'list'>", "<class 'int'>", "Error"],
    c: 0,
    e: "Commas create a tuple. a = 1, 2, 3 is the same as a = (1, 2, 3).",
    de: `In Python, it's the comma that creates a tuple, not the parentheses.

Key concepts:
• a = 1, 2, 3 creates a tuple (1, 2, 3)
• Parentheses are optional for tuple creation
• The comma is what makes it a tuple
• type(a) → <class 'tuple'>

How it works:
• Python sees comma-separated values and creates a tuple
• 1, 2, 3 is syntactic sugar for (1, 2, 3)
• Parentheses are only needed for clarity or in function calls
• Single-element tuple: x = 1, or x = (1,) — trailing comma required

Example:
a = 1, 2, 3
type(a)     # <class 'tuple'>
a           # (1, 2, 3)

b = 1,      # single-element tuple
type(b)     # <class 'tuple'>
b           # (1,)

c = (1)     # NOT a tuple! Just grouping — c is int 1
type(c)     # <class 'int'>

Example: type(a) is <class 'tuple'> because commas create tuples — parentheses are optional.`
  }),
  // 96. Starred assignment to single variable becomes a list
  (_i: number) => ({
    q: `*a, = [1, 2, 3]\nWhat is a?`,
    o: ["[1, 2, 3]", "(1, 2, 3)", "1", "Error"],
    c: 0,
    e: "Starred assignment *a catches all elements as a list. The trailing comma makes it an unpacking.",
    de: `The starred expression *a in an assignment captures remaining elements as a list.

Key concepts:
• *a, = [1, 2, 3] unpacks the list into a
• The * prefix means "collect remaining elements"
• The trailing comma is required (makes it a tuple target)
• a becomes [1, 2, 3] — always a list, even from a tuple

How it works:
• The left side *a, is an unpacking target
• * before a means "collect everything into a list"
• The comma makes it a tuple of targets (required for unpacking)
• All elements go into a as a list: [1, 2, 3]

Example:
*a, = [1, 2, 3]     # a = [1, 2, 3]
*a, = (1, 2, 3)     # a = [1, 2, 3] — always a list!
*a, = "hello"        # a = ['h', 'e', 'l', 'l', 'o']

With other targets:
first, *rest = [1, 2, 3, 4]  # first=1, rest=[2, 3, 4]
*init, last = [1, 2, 3, 4]   # init=[1, 2, 3], last=4

Example: *a, = [1, 2, 3] assigns a = [1, 2, 3]. Starred unpacking always produces a list.`
  }),
  // 97. Spread into new list with [*a, ...]
  (_i: number) => ({
    q: `a = [1, 2, 3]\nWhat is [*a, 4]?`,
    o: ["[1, 2, 3, 4]", "[[1, 2, 3], 4]", "Error", "[4, 1, 2, 3]"],
    c: 0,
    e: "[*a, 4] unpacks a into a new list and appends 4.",
    de: `The * operator inside a list literal unpacks an iterable, spreading its elements.

Key concepts:
• [*a, 4] creates a new list by unpacking a and adding 4
• * spreads elements of a into the new list
• Result: [1, 2, 3, 4]
• The original list a is not modified

How it works:
• [*a, 4] starts a new list literal
• *a unpacks [1, 2, 3] → elements 1, 2, 3 placed individually
• 4 is appended after the unpacked elements
• Creates [1, 2, 3, 4]

Example:
a = [1, 2, 3]
[*a, 4]          # [1, 2, 3, 4]
[0, *a]          # [0, 1, 2, 3]
[*a, *a]         # [1, 2, 3, 1, 2, 3]

Without *:
[a, 4]           # [[1, 2, 3], 4] — nested, not spread!

This is PEP 448 (Python 3.5+) generalized unpacking.

Example: [*a, 4] unpacks a's elements into a new list and adds 4 at the end → [1, 2, 3, 4].`
  }),
  // 98. Spread into set deduplicates
  (_i: number) => ({
    q: `What is {*[1, 2], *[2, 3]}?`,
    o: ["{1, 2, 3}", "{1, 2, 2, 3}", "[1, 2, 2, 3]", "Error"],
    c: 0,
    e: "Spreading into a set unpacks both lists, and the set deduplicates: {1, 2, 3}.",
    de: `The * operator can unpack into a set literal, and sets automatically deduplicate.

Key concepts:
• {*[1, 2], *[2, 3]} unpacks both lists into a set
• Sets only keep unique elements
• 2 appears in both lists but only once in the set
• Result: {1, 2, 3}

How it works:
• {*[1, 2], *[2, 3]} is a set literal with unpacking
• *[1, 2] spreads 1, 2 into the set
• *[2, 3] spreads 2, 3 into the set
• Set deduplication: {1, 2, 2, 3} → {1, 2, 3}

Example:
{*[1, 2], *[2, 3]}       # {1, 2, 3}
{*"hello"}                # {'h', 'e', 'l', 'o'} — deduplicated
{*range(3), *range(2, 5)} # {0, 1, 2, 3, 4}

This is PEP 448 generalized unpacking in set literals.
Note: {} without * creates a dict, not a set. Use set() for empty sets.

Example: {*[1, 2], *[2, 3]} unpacks into a set → {1, 2, 3}. The duplicate 2 is removed.`
  }),
  // 99. Spread range into tuple
  (_i: number) => ({
    q: `What is (*range(5),)?`,
    o: ["(0, 1, 2, 3, 4)", "[0, 1, 2, 3, 4]", "range(0, 5)", "Error"],
    c: 0,
    e: "(*range(5),) unpacks range(5) into a tuple. The trailing comma ensures it's a tuple.",
    de: `The * operator unpacks an iterable inside a tuple literal, and the trailing comma creates the tuple.

Key concepts:
• (*range(5),) unpacks range(5) into a tuple
• range(5) generates 0, 1, 2, 3, 4
• * spreads these into the tuple literal
• The trailing comma is critical — without it, it would be grouping, not a tuple
• Result: (0, 1, 2, 3, 4)

How it works:
• The outer () with trailing , creates a tuple
• *range(5) unpacks the range into individual elements
• Elements 0, 1, 2, 3, 4 are placed into the tuple
• This is equivalent to tuple(range(5))

Example:
(*range(5),)         # (0, 1, 2, 3, 4)
tuple(range(5))      # (0, 1, 2, 3, 4) — equivalent

(*"hello",)          # ('h', 'e', 'l', 'l', 'o')
(*[1, 2], *[3, 4],)  # (1, 2, 3, 4) — multiple unpacks

Without trailing comma:
(*range(5))   # SyntaxError — not a valid expression

Example: (*range(5),) creates tuple (0, 1, 2, 3, 4) by unpacking range into a tuple literal.`
  }),
  // 100. list.index() raises ValueError when not found
  (_i: number) => ({
    q: `What happens when you run [1, 2, 3].index(4)?`,
    o: ["ValueError", "-1", "None", "False"],
    c: 0,
    e: "list.index() raises ValueError when the element is not found in the list.",
    de: `list.index(x) searches for x and returns its index, but raises ValueError if not found.

Key concepts:
• [1, 2, 3].index(4) → ValueError: 4 is not in list
• Unlike dict.get() which returns None for missing keys, index() raises an error
• This is different from JavaScript's indexOf() which returns -1
• Use 'in' to check before calling index()

How it works:
• index() searches the list sequentially for the value
• If found, returns the index of the first occurrence
• If not found, raises ValueError
• There is no "not found" return value

Example:
[1, 2, 3].index(2)    # 1 (found at index 1)
[1, 2, 3].index(4)    # ValueError: 4 is not in list

Safe pattern:
lst = [1, 2, 3]
if 4 in lst:
    idx = lst.index(4)
else:
    idx = -1  # or handle the missing case

Alternative:
try:
    idx = lst.index(4)
except ValueError:
    idx = -1

Example: ValueError is raised because 4 is not in [1, 2, 3]. Use 'in' to check first.`
  }),
];
