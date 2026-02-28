import { PersonaStage } from '../../types';

// --- LEVEL 5 INTERMEDIATE A: List Comprehensions & Tuple Fundamentals ---
// 50 TRULY UNIQUE questions - NO number/variable variations
export const level5IntermediateA = [
  // 1-25: List Comprehensions Deep
  (_i: number) => ({
    q: `What is [x for x in range(5)]?`,
    o: ["[0, 1, 2, 3, 4]", "[1, 2, 3, 4, 5]", "[0, 1, 2, 3, 4, 5]", "Error"],
    c: 0,
    e: "A basic list comprehension iterates over the range and collects each element.",
    de: `This is the simplest list comprehension: [expression for variable in iterable]. It iterates over range(5) which produces 0, 1, 2, 3, 4, and collects each value x unchanged into a new list.

Key concepts:
• [x for x in iterable] copies elements into a new list
• range(5) produces integers 0 through 4
• The expression before 'for' determines what goes into the list

How it works:
• range(5) yields 0, 1, 2, 3, 4
• For each value, x is added to the result list
• Result: [0, 1, 2, 3, 4]

Examples:
• [x for x in range(5)] → [0, 1, 2, 3, 4]
• [x for x in range(3)] → [0, 1, 2]
• [x for x in [10, 20]] → [10, 20]

Common uses:
• Creating lists from iterables
• Foundation for filtered and transformed comprehensions
• More Pythonic than appending in a for loop`
  }),
  (_i: number) => ({
    q: `What is [x**2 for x in range(5)]?`,
    o: ["[0, 1, 4, 9, 16]", "[1, 4, 9, 16, 25]", "[0, 2, 4, 6, 8]", "Error"],
    c: 0,
    e: "The expression x**2 squares each element from range(5).",
    de: `This comprehension applies a transformation (squaring) to each element. The expression x**2 is evaluated for every x produced by range(5).

Key concepts:
• The expression before 'for' can be any valid Python expression
• x**2 squares each value
• Transformation comprehensions are equivalent to map()

How it works:
• x=0 → 0**2 = 0
• x=1 → 1**2 = 1
• x=2 → 2**2 = 4
• x=3 → 3**2 = 9
• x=4 → 4**2 = 16
• Result: [0, 1, 4, 9, 16]

Examples:
• [x**2 for x in range(5)] → [0, 1, 4, 9, 16]
• [x*10 for x in range(3)] → [0, 10, 20]

Common uses:
• Applying mathematical transformations
• Data processing pipelines
• Replacing map() with a more readable syntax`
  }),
  (_i: number) => ({
    q: `What is [x for x in range(10) if x % 2 == 0]?`,
    o: ["[0, 2, 4, 6, 8]", "[1, 3, 5, 7, 9]", "[0, 2, 4, 6, 8, 10]", "Error"],
    c: 0,
    e: "The if clause filters: only even numbers pass the condition.",
    de: `Adding an 'if' clause to a list comprehension filters elements. Only values where the condition is True are included in the result.

Key concepts:
• [expr for var in iterable if condition] — filtered comprehension
• x % 2 == 0 checks if x is even
• Elements failing the condition are excluded entirely

How it works:
• range(10) yields 0 through 9
• 0%2==0 → True → include 0
• 1%2==0 → False → skip
• 2%2==0 → True → include 2
• ... continues for all values
• Result: [0, 2, 4, 6, 8]

Examples:
• [x for x in range(10) if x % 2 == 0] → [0, 2, 4, 6, 8]
• [x for x in range(10) if x > 5] → [6, 7, 8, 9]

Common uses:
• Filtering data from sequences
• Selecting elements matching criteria
• Replacing filter() with more readable syntax`
  }),
  (_i: number) => ({
    q: `What is [x**2 for x in range(6) if x % 2 != 0]?`,
    o: ["[1, 9, 25]", "[0, 4, 16]", "[1, 4, 9, 16, 25]", "Error"],
    c: 0,
    e: "First filters odd numbers from range(6), then squares them.",
    de: `This comprehension combines filtering and transformation. First the if clause selects only odd numbers, then x**2 squares each selected value.

Key concepts:
• Filter happens before the expression is evaluated
• x % 2 != 0 selects odd numbers only
• The expression x**2 is applied only to values passing the filter

How it works:
• range(6) yields 0, 1, 2, 3, 4, 5
• Odd numbers: 1, 3, 5
• 1**2 = 1, 3**2 = 9, 5**2 = 25
• Result: [1, 9, 25]

Examples:
• [x**2 for x in range(6) if x % 2 != 0] → [1, 9, 25]
• [x*2 for x in range(5) if x > 2] → [6, 8]

Common uses:
• Selecting and transforming in a single expression
• Data cleaning and processing
• Building derived lists from filtered sources`
  }),
  (_i: number) => ({
    q: `What is [x.upper() for x in ["hello", "world"]]?`,
    o: ['["HELLO", "WORLD"]', '["Hello", "World"]', '["hello", "world"]', "Error"],
    c: 0,
    e: "upper() is called on each string, converting all to uppercase.",
    de: `List comprehensions can call methods on each element. Here .upper() converts every string to uppercase.

Key concepts:
• The expression can include method calls on the loop variable
• str.upper() returns a new uppercase string
• Original strings are unchanged; new strings are collected

How it works:
• x = "hello" → "hello".upper() → "HELLO"
• x = "world" → "world".upper() → "WORLD"
• Result: ["HELLO", "WORLD"]

Examples:
• [x.upper() for x in ["hello", "world"]] → ["HELLO", "WORLD"]
• [x.lower() for x in ["ABC", "DEF"]] → ["abc", "def"]
• [x.title() for x in ["hi there"]] → ["Hi There"]

Common uses:
• Normalizing text data (all upper/lower)
• Applying string transformations to lists
• Data preprocessing and cleaning`
  }),
  (_i: number) => ({
    q: `What is [len(w) for w in ["hi", "hello", "hey"]]?`,
    o: ["[2, 5, 3]", "[2, 4, 3]", "[3, 5, 3]", "Error"],
    c: 0,
    e: "len() returns the length of each string: 2, 5, and 3.",
    de: `This comprehension applies the built-in len() function to each string, collecting the lengths into a new list.

Key concepts:
• Any function can be used as the expression in a comprehension
• len() returns the number of characters in a string
• The result list has the same number of elements as the input

How it works:
• w = "hi" → len("hi") = 2
• w = "hello" → len("hello") = 5
• w = "hey" → len("hey") = 3
• Result: [2, 5, 3]

Examples:
• [len(w) for w in ["hi", "hello", "hey"]] → [2, 5, 3]
• [len(w) for w in ["a", "ab", "abc"]] → [1, 2, 3]

Common uses:
• Calculating properties of collection elements
• Extracting numeric features from text data
• Quick summary statistics on sequences`
  }),
  (_i: number) => ({
    q: `What is [i for i in range(20) if i % 3 == 0 and i % 5 == 0]?`,
    o: ["[0, 15]", "[0, 3, 5, 6, 9, 10, 12, 15, 18]", "[15]", "Error"],
    c: 0,
    e: "Only numbers divisible by both 3 and 5 pass: 0 and 15.",
    de: `The filter uses 'and' to require both conditions: divisible by 3 AND divisible by 5. This means divisible by 15.

Key concepts:
• Multiple conditions can be combined with 'and' / 'or' in the if clause
• i % 3 == 0 and i % 5 == 0 is equivalent to i % 15 == 0
• 0 is divisible by every nonzero integer

How it works:
• range(20) yields 0 through 19
• 0 % 3 == 0 and 0 % 5 == 0 → True (0 is divisible by everything)
• 15 % 3 == 0 and 15 % 5 == 0 → True
• No other value in 0–19 is divisible by both
• Result: [0, 15]

Examples:
• [i for i in range(20) if i % 3 == 0 and i % 5 == 0] → [0, 15]
• Classic FizzBuzz: numbers divisible by both 3 and 5

Common uses:
• Multi-condition filtering
• FizzBuzz-style problems
• Finding common multiples`
  }),
  (_i: number) => ({
    q: `What is [[j for j in range(3)] for i in range(2)]?`,
    o: ["[[0, 1, 2], [0, 1, 2]]", "[[0, 1], [0, 1], [0, 1]]", "[0, 1, 2, 0, 1, 2]", "Error"],
    c: 0,
    e: "A nested comprehension: the outer creates 2 elements, each being [0, 1, 2].",
    de: `This is a nested list comprehension where the outer comprehension runs twice and each iteration produces an inner list [0, 1, 2].

Key concepts:
• Nested comprehensions create lists of lists
• The outer loop runs for i in range(2) → 2 iterations
• Each iteration evaluates the inner comprehension [j for j in range(3)]
• i is not used in the inner expression (but controls how many inner lists are created)

How it works:
• Outer i=0 → inner [j for j in range(3)] → [0, 1, 2]
• Outer i=1 → inner [j for j in range(3)] → [0, 1, 2]
• Result: [[0, 1, 2], [0, 1, 2]]

Examples:
• [[j for j in range(3)] for i in range(2)] → [[0, 1, 2], [0, 1, 2]]
• [[0]*3 for _ in range(2)] → [[0, 0, 0], [0, 0, 0]]

Common uses:
• Creating 2D matrices
• Initializing grids
• Building tables of data`
  }),
  (_i: number) => ({
    q: `What is [x * y for x in [1, 2] for y in [10, 20]]?`,
    o: ["[10, 20, 20, 40]", "[[10, 20], [20, 40]]", "[10, 40]", "Error"],
    c: 0,
    e: "Two for clauses create a flat cross-product: 1×10, 1×20, 2×10, 2×20.",
    de: `Multiple for clauses in a single comprehension produce a flat list (not nested). The loops are evaluated left to right: the outer loop (x) runs first, then for each x the inner loop (y) runs completely.

Key concepts:
• Multiple for clauses = nested loops flattened into one list
• Left-to-right order: outer loop first, inner loop second
• Produces a Cartesian product of the iterables

How it works:
• x=1, y=10 → 1*10 = 10
• x=1, y=20 → 1*20 = 20
• x=2, y=10 → 2*10 = 20
• x=2, y=20 → 2*20 = 40
• Result: [10, 20, 20, 40]

Examples:
• [x * y for x in [1, 2] for y in [10, 20]] → [10, 20, 20, 40]
• [f"{a}{b}" for a in "ab" for b in "12"] → ["a1", "a2", "b1", "b2"]

Common uses:
• Generating combinations
• Flattening nested structures
• Creating coordinate pairs`
  }),
  (_i: number) => ({
    q: `What is [(x, y) for x in range(2) for y in range(2)]?`,
    o: ["[(0, 0), (0, 1), (1, 0), (1, 1)]", "[(0, 0), (1, 1)]", "[[0, 0], [0, 1], [1, 0], [1, 1]]", "Error"],
    c: 0,
    e: "Two for clauses produce all coordinate pairs as tuples.",
    de: `This comprehension creates tuples of all (x, y) pairs from two ranges. It produces the Cartesian product of range(2) × range(2).

Key concepts:
• The expression (x, y) creates a tuple for each combination
• Multiple for clauses produce all combinations (Cartesian product)
• Order: x iterates first (outer), y iterates second (inner)

How it works:
• x=0, y=0 → (0, 0)
• x=0, y=1 → (0, 1)
• x=1, y=0 → (1, 0)
• x=1, y=1 → (1, 1)
• Result: [(0, 0), (0, 1), (1, 0), (1, 1)]

Examples:
• [(x, y) for x in range(2) for y in range(2)] → 4 pairs
• Equivalent to: for x in range(2): for y in range(2): result.append((x, y))

Common uses:
• Generating coordinate grids
• Creating pair combinations
• Matrix index generation`
  }),
  (_i: number) => ({
    q: `What is [c for c in "hello" if c not in "aeiou"]?`,
    o: ['["h", "l", "l"]', '["e", "o"]', '["h", "e", "l", "l", "o"]', "Error"],
    c: 0,
    e: "Filters out vowels from the string, keeping only consonants.",
    de: `This comprehension iterates over each character in "hello" and keeps only those NOT in the vowel string "aeiou".

Key concepts:
• Strings are iterable — each character is yielded one at a time
• 'not in' checks membership and negates it
• The result is a list of individual characters (strings of length 1)

How it works:
• c='h' → 'h' not in "aeiou" → True → include
• c='e' → 'e' not in "aeiou" → False → skip
• c='l' → 'l' not in "aeiou" → True → include
• c='l' → 'l' not in "aeiou" → True → include
• c='o' → 'o' not in "aeiou" → False → skip
• Result: ["h", "l", "l"]

Examples:
• [c for c in "hello" if c not in "aeiou"] → ["h", "l", "l"]
• [c for c in "hello" if c in "aeiou"] → ["e", "o"]

Common uses:
• Filtering characters from strings
• Text processing and cleaning
• Extracting specific character classes`
  }),
  (_i: number) => ({
    q: `What is {x: x**2 for x in range(4)}?`,
    o: ["{0: 0, 1: 1, 2: 4, 3: 9}", "[0, 1, 4, 9]", "{0, 1, 4, 9}", "Error"],
    c: 0,
    e: "Curly braces with key: value syntax create a dictionary comprehension.",
    de: `Dictionary comprehensions use {key: value for ...} syntax. This creates a dict mapping each number to its square.

Key concepts:
• {key_expr: val_expr for var in iterable} creates a dict
• Uses curly braces {} like dict literals
• The colon separates key and value expressions
• Different from set comprehension (which has no colon)

How it works:
• x=0 → 0: 0**2 → 0: 0
• x=1 → 1: 1**2 → 1: 1
• x=2 → 2: 2**2 → 2: 4
• x=3 → 3: 3**2 → 3: 9
• Result: {0: 0, 1: 1, 2: 4, 3: 9}

Examples:
• {x: x**2 for x in range(4)} → {0: 0, 1: 1, 2: 4, 3: 9}
• {k: v for k, v in [("a", 1), ("b", 2)]} → {"a": 1, "b": 2}

Common uses:
• Building lookup tables
• Transforming or inverting dictionaries
• Creating mappings from sequences`
  }),
  (_i: number) => ({
    q: `What is {x % 3 for x in range(10)}?`,
    o: ["{0, 1, 2}", "{0, 1, 2, 0, 1, 2, 0, 1, 2, 0}", "[0, 1, 2]", "Error"],
    c: 0,
    e: "Curly braces without a colon create a set comprehension; duplicates are removed.",
    de: `Set comprehensions use {expr for var in iterable} — curly braces but NO colon. Since sets contain only unique values, duplicate remainders are automatically removed.

Key concepts:
• {expr for var in iterable} creates a set (not a dict)
• Sets automatically remove duplicates
• No colon means set, colon means dict

How it works:
• range(10) % 3 produces: 0, 1, 2, 0, 1, 2, 0, 1, 2, 0
• As a set, only unique values are kept: {0, 1, 2}
• Order in sets is not guaranteed (but the values are 0, 1, 2)

Examples:
• {x % 3 for x in range(10)} → {0, 1, 2}
• {x % 2 for x in range(10)} → {0, 1}

Common uses:
• Extracting unique values from computations
• Finding distinct categories or groups
• Removing duplicates while transforming data`
  }),
  (_i: number) => ({
    q: `What is [x if x > 0 else -x for x in [-1, 2, -3]]?`,
    o: ["[1, 2, 3]", "[-1, 2, -3]", "[1, -2, 3]", "Error"],
    c: 0,
    e: "The ternary expression x if x > 0 else -x computes the absolute value.",
    de: `This uses a ternary (conditional) expression INSIDE the comprehension. The syntax is: [true_val if condition else false_val for var in iterable]. Note: this is different from a filter — there is no separate 'if' at the end.

Key concepts:
• Ternary in comprehension: [A if cond else B for x in iterable]
• Every element produces a value (no filtering)
• x if x > 0 else -x is equivalent to abs(x)

How it works:
• x=-1 → -1 > 0 is False → -(-1) = 1
• x=2 → 2 > 0 is True → 2
• x=-3 → -3 > 0 is False → -(-3) = 3
• Result: [1, 2, 3]

Examples:
• [x if x > 0 else -x for x in [-1, 2, -3]] → [1, 2, 3]
• ["even" if x%2==0 else "odd" for x in [1,2,3]] → ["odd", "even", "odd"]

Common uses:
• Conditional transformations
• Replacing values based on conditions
• Implementing absolute value or clamping`
  }),
  (_i: number) => ({
    q: `What is [i for i, c in enumerate("hello") if c in "aeiou"]?`,
    o: ["[1, 4]", "[0, 2, 3]", '["e", "o"]', "Error"],
    c: 0,
    e: "enumerate gives (index, char) pairs; we collect indices where char is a vowel.",
    de: `This combines enumerate() with a filtered comprehension. enumerate("hello") produces (index, character) pairs, and we collect only the indices where the character is a vowel.

Key concepts:
• enumerate() yields (index, value) tuples
• Tuple unpacking in the for clause: i, c
• The expression is just i (the index), not c (the character)

How it works:
• (0, 'h') → 'h' in "aeiou" → False → skip
• (1, 'e') → 'e' in "aeiou" → True → include 1
• (2, 'l') → 'l' in "aeiou" → False → skip
• (3, 'l') → 'l' in "aeiou" → False → skip
• (4, 'o') → 'o' in "aeiou" → True → include 4
• Result: [1, 4]

Examples:
• [i for i, c in enumerate("hello") if c in "aeiou"] → [1, 4]
• [i for i, c in enumerate("abc") if c == "b"] → [1]

Common uses:
• Finding positions of specific elements
• Index-based filtering
• Locating characters or items in sequences`
  }),
  (_i: number) => ({
    q: `What is sum(x**2 for x in range(4))?`,
    o: ["14", "[0, 1, 4, 9]", "9", "Error"],
    c: 0,
    e: "A generator expression inside sum() computes 0 + 1 + 4 + 9 = 14.",
    de: `A generator expression (without square brackets) can be passed directly to functions like sum(). This avoids creating an intermediate list in memory.

Key concepts:
• sum(gen_expr) sums all values produced by the generator
• Generator expressions use parentheses (or none when inside a function call)
• More memory-efficient than creating a list first
• Syntax: sum(expr for var in iterable)

How it works:
• x=0 → 0**2 = 0
• x=1 → 1**2 = 1
• x=2 → 2**2 = 4
• x=3 → 3**2 = 9
• sum(0, 1, 4, 9) = 14

Examples:
• sum(x**2 for x in range(4)) → 14
• sum(x for x in range(5)) → 10
• max(x**2 for x in range(4)) → 9

Common uses:
• Aggregating computed values without intermediate lists
• Mathematical summations
• Efficient memory use for large datasets`
  }),
  (_i: number) => ({
    q: `What is list(filter(lambda x: x > 3, [1, 2, 3, 4, 5]))?`,
    o: ["[4, 5]", "[1, 2, 3]", "[3, 4, 5]", "Error"],
    c: 0,
    e: "filter() keeps elements where the lambda returns True: 4 and 5.",
    de: `filter(function, iterable) returns an iterator of elements for which the function returns True. Wrapping in list() materializes the result.

Key concepts:
• filter(func, iterable) keeps elements where func(element) is truthy
• Returns a filter object (iterator), not a list
• list() converts the iterator to a list
• Equivalent to [x for x in iterable if func(x)]

How it works:
• lambda x: x > 3 checks if x is greater than 3
• 1 > 3 → False → excluded
• 2 > 3 → False → excluded
• 3 > 3 → False → excluded
• 4 > 3 → True → included
• 5 > 3 → True → included
• Result: [4, 5]

Examples:
• list(filter(lambda x: x > 3, [1,2,3,4,5])) → [4, 5]
• list(filter(None, [0, 1, "", "a"])) → [1, "a"]

Common uses:
• Functional-style filtering
• Removing falsy values with filter(None, ...)
• Processing data streams`
  }),
  (_i: number) => ({
    q: `What is list(map(lambda x: x * 2, [1, 2, 3]))?`,
    o: ["[2, 4, 6]", "[1, 2, 3, 1, 2, 3]", "[[1, 1], [2, 2], [3, 3]]", "Error"],
    c: 0,
    e: "map() applies the lambda to each element: 1*2, 2*2, 3*2.",
    de: `map(function, iterable) applies the function to every element and returns an iterator of the results. list() converts that iterator to a list.

Key concepts:
• map(func, iterable) applies func to each element
• Returns a map object (iterator), not a list
• Equivalent to [func(x) for x in iterable]
• The function can be a lambda, named function, or built-in

How it works:
• lambda x: x * 2 doubles each value
• 1 * 2 = 2
• 2 * 2 = 4
• 3 * 2 = 6
• Result: [2, 4, 6]

Examples:
• list(map(lambda x: x * 2, [1, 2, 3])) → [2, 4, 6]
• list(map(str, [1, 2, 3])) → ["1", "2", "3"]

Common uses:
• Transforming every element in a sequence
• Applying a function across a dataset
• Type conversions on collections`
  }),
  (_i: number) => ({
    q: `What is list(map(str, [1, 2, 3]))?`,
    o: ['["1", "2", "3"]', "[1, 2, 3]", '["123"]', "Error"],
    c: 0,
    e: "map(str, ...) converts each integer to its string representation.",
    de: `map() can take any callable, including built-in functions like str. str(1) returns "1", str(2) returns "2", etc.

Key concepts:
• map(str, iterable) converts every element to a string
• str is a built-in type/function that converts to string
• No need for a lambda when using an existing function
• Result type changes from int to str for each element

How it works:
• str(1) → "1"
• str(2) → "2"
• str(3) → "3"
• Result: ["1", "2", "3"]

Examples:
• list(map(str, [1, 2, 3])) → ["1", "2", "3"]
• list(map(int, ["1", "2"])) → [1, 2]
• list(map(float, [1, 2])) → [1.0, 2.0]

Common uses:
• Type conversion across collections
• Preparing data for string operations (e.g., join)
• Converting user input to appropriate types`
  }),
  (_i: number) => ({
    q: `What is list(zip([1, 2, 3], ["a", "b", "c"]))?`,
    o: ['[(1, "a"), (2, "b"), (3, "c")]', '[[1, "a"], [2, "b"], [3, "c"]]', '{1: "a", 2: "b", 3: "c"}', "Error"],
    c: 0,
    e: "zip() pairs corresponding elements from two iterables into tuples.",
    de: `zip() takes multiple iterables and yields tuples of corresponding elements. The first element from each iterable forms the first tuple, and so on.

Key concepts:
• zip(iter1, iter2) pairs elements at the same position
• Returns a zip object (iterator of tuples)
• Stops at the shortest iterable
• Each tuple contains one element from each iterable

How it works:
• Position 0: (1, "a")
• Position 1: (2, "b")
• Position 2: (3, "c")
• Result: [(1, "a"), (2, "b"), (3, "c")]

Examples:
• list(zip([1,2,3], ["a","b","c"])) → [(1,"a"), (2,"b"), (3,"c")]
• list(zip([1,2], [3,4,5])) → [(1,3), (2,4)] (stops at shorter)

Common uses:
• Pairing related data from parallel sequences
• Creating dictionaries: dict(zip(keys, values))
• Iterating over multiple lists simultaneously`
  }),
  (_i: number) => ({
    q: `What is dict(zip(["a", "b"], [1, 2]))?`,
    o: ['{"a": 1, "b": 2}', '[("a", 1), ("b", 2)]', '{"a": "1", "b": "2"}', "Error"],
    c: 0,
    e: "dict() converts a list of (key, value) tuples into a dictionary.",
    de: `dict(zip(keys, values)) is an idiomatic way to create a dictionary from two separate lists — one of keys, one of values.

Key concepts:
• zip() pairs keys with values as tuples
• dict() converts an iterable of (key, value) pairs to a dict
• This is one of the most common dict construction patterns
• Keys must be hashable

How it works:
• zip(["a", "b"], [1, 2]) → [("a", 1), ("b", 2)]
• dict([("a", 1), ("b", 2)]) → {"a": 1, "b": 2}
• Result: {"a": 1, "b": 2}

Examples:
• dict(zip(["a", "b"], [1, 2])) → {"a": 1, "b": 2}
• dict(zip("abc", range(3))) → {"a": 0, "b": 1, "c": 2}

Common uses:
• Building dictionaries from parallel lists
• Converting CSV headers + rows to dicts
• Creating configuration mappings`
  }),
  (_i: number) => ({
    q: `What is list(enumerate("abc"))?`,
    o: ['[(0, "a"), (1, "b"), (2, "c")]', '["a", "b", "c"]', '[(1, "a"), (2, "b"), (3, "c")]', "Error"],
    c: 0,
    e: "enumerate() adds a counter to each element, starting from 0 by default.",
    de: `enumerate(iterable) yields (index, element) tuples. By default the index starts at 0.

Key concepts:
• enumerate() adds an automatic counter
• Returns (index, value) tuples
• Default start index is 0
• Works with any iterable (strings, lists, etc.)

How it works:
• Position 0: (0, "a")
• Position 1: (1, "b")
• Position 2: (2, "c")
• Result: [(0, "a"), (1, "b"), (2, "c")]

Examples:
• list(enumerate("abc")) → [(0, "a"), (1, "b"), (2, "c")]
• list(enumerate([10, 20])) → [(0, 10), (1, 20)]

Common uses:
• Getting index and value in for loops
• Numbering items in a sequence
• Tracking position while iterating`
  }),
  (_i: number) => ({
    q: `What is list(enumerate("abc", start=1))?`,
    o: ['[(1, "a"), (2, "b"), (3, "c")]', '[(0, "a"), (1, "b"), (2, "c")]', '["a", "b", "c"]', "Error"],
    c: 0,
    e: "The start parameter makes the counter begin at 1 instead of 0.",
    de: `enumerate() accepts a start parameter to change the initial counter value. start=1 means the first element gets index 1 instead of 0.

Key concepts:
• enumerate(iterable, start=N) begins counting from N
• Default start is 0
• Only changes the index, not which elements are yielded
• Useful for 1-based numbering

How it works:
• Position starts at 1: (1, "a")
• Next: (2, "b")
• Next: (3, "c")
• Result: [(1, "a"), (2, "b"), (3, "c")]

Examples:
• list(enumerate("abc", start=1)) → [(1, "a"), (2, "b"), (3, "c")]
• list(enumerate("abc", start=10)) → [(10, "a"), (11, "b"), (12, "c")]

Common uses:
• 1-based numbering for display
• Custom index starting points
• Numbering lines in files (starting from 1)`
  }),
  (_i: number) => ({
    q: `What is [v for k, v in {"a": 1, "b": 2, "c": 3}.items() if k != "b"]?`,
    o: ["[1, 3]", "[1, 2, 3]", '["a", "c"]', "Error"],
    c: 0,
    e: "Iterates over dict items, filters out key 'b', collects only the values.",
    de: `This comprehension iterates over dictionary items (key-value pairs), filters by key, and collects only the values.

Key concepts:
• dict.items() returns (key, value) pairs
• Tuple unpacking in the for clause: k, v
• The expression is v (value only), not k
• The filter condition checks the key

How it works:
• k="a", v=1 → "a" != "b" → True → include 1
• k="b", v=2 → "b" != "b" → False → skip
• k="c", v=3 → "c" != "b" → True → include 3
• Result: [1, 3]

Examples:
• [v for k, v in {"a":1,"b":2,"c":3}.items() if k != "b"] → [1, 3]
• [k for k, v in {"x":10,"y":20}.items() if v > 15] → ["y"]

Common uses:
• Extracting values based on key conditions
• Filtering dictionaries
• Transforming dict data into lists`
  }),
  (_i: number) => ({
    q: `What is " ".join([str(x) for x in range(5)])?`,
    o: ['"0 1 2 3 4"', '"01234"', '"0, 1, 2, 3, 4"', "Error"],
    c: 0,
    e: 'join() concatenates the string list with spaces: "0 1 2 3 4".',
    de: `This combines a list comprehension with str.join(). First, [str(x) for x in range(5)] creates ["0","1","2","3","4"], then " ".join() concatenates them with spaces.

Key concepts:
• str.join(iterable) joins strings with the separator
• The separator is " " (a space)
• range(5) values must be converted to strings first (via str(x))
• join() only works with strings

How it works:
• [str(x) for x in range(5)] → ["0", "1", "2", "3", "4"]
• " ".join(["0", "1", "2", "3", "4"]) → "0 1 2 3 4"

Examples:
• " ".join([str(x) for x in range(5)]) → "0 1 2 3 4"
• ",".join(["a", "b", "c"]) → "a,b,c"
• "".join([str(x) for x in range(3)]) → "012"

Common uses:
• Building formatted strings from sequences
• Creating CSV-like output
• Converting lists to readable strings`
  }),
  // 26-50: Tuple Fundamentals
  (_i: number) => ({
    q: `What is type((1, 2, 3))?`,
    o: ["<class 'tuple'>", "<class 'list'>", "<class 'set'>", "<class 'dict'>"],
    c: 0,
    e: "Parentheses with commas create a tuple.",
    de: `(1, 2, 3) is a tuple literal. Tuples are created using parentheses with comma-separated values. type() returns the type of the object.

Key concepts:
• Parentheses with commas create tuples
• Tuples are ordered, immutable sequences
• type() returns <class 'tuple'> for tuples
• Different from lists (square brackets) and sets (curly braces)

How it works:
• (1, 2, 3) creates a tuple object
• type() inspects the object and returns its type
• Result: <class 'tuple'>

Examples:
• type((1, 2, 3)) → <class 'tuple'>
• type([1, 2, 3]) → <class 'list'>
• type({1, 2, 3}) → <class 'set'>

Common uses:
• Verifying data types in debugging
• Understanding Python's type system
• Distinguishing between sequence types`
  }),
  (_i: number) => ({
    q: `Is (1,) a tuple?`,
    o: ["Yes, the trailing comma makes it a tuple", "No, it's an integer", "No, it's a syntax error", "Yes, the parentheses make it a tuple"],
    c: 0,
    e: "The trailing comma is what makes it a tuple, not the parentheses.",
    de: `In Python, it is the comma that creates a tuple, not the parentheses. (1,) is a tuple containing one element. The parentheses are optional grouping; the comma is mandatory for a single-element tuple.

Key concepts:
• The COMMA makes a tuple, not the parentheses
• (1,) is a tuple with one element: 1
• Without the comma, (1) is just the integer 1 with grouping parentheses
• Even 1, (without parens) creates a tuple

How it works:
• (1,) → Python sees the comma → creates a tuple
• type((1,)) → <class 'tuple'>
• len((1,)) → 1

Examples:
• (1,) → tuple with one element
• 1, → also a tuple (parentheses are optional)
• (1) → NOT a tuple, just int 1

Common uses:
• Creating single-element tuples
• Trailing commas in function calls for tuple args
• Understanding Python's tuple syntax`
  }),
  (_i: number) => ({
    q: `Is (1) a tuple?`,
    o: ["No, it's just the integer 1 with grouping parentheses", "Yes, it's a tuple with one element", "It's a syntax error", "It depends on the context"],
    c: 0,
    e: "Without a comma, parentheses are just grouping — (1) evaluates to int 1.",
    de: `(1) is NOT a tuple. Without a trailing comma, parentheses serve only as grouping operators (like in math expressions). The result is just the integer 1.

Key concepts:
• Parentheses without commas are grouping, not tuple creation
• (1) == 1 → True (they're the same thing)
• You need (1,) to create a single-element tuple
• This is a common Python gotcha

How it works:
• (1) → Python evaluates the expression inside parentheses → 1
• type((1)) → <class 'int'>
• Compare: (1,) → type is <class 'tuple'>

Examples:
• (1) → 1 (integer)
• (1 + 2) → 3 (grouping for math)
• (1,) → (1,) (tuple)

Common uses:
• Understanding the difference between grouping and tuple creation
• Avoiding bugs when creating single-element tuples
• Math expression grouping: (2 + 3) * 4`
  }),
  (_i: number) => ({
    q: `What is type((1,))?`,
    o: ["<class 'tuple'>", "<class 'int'>", "<class 'list'>", "Error"],
    c: 0,
    e: "The trailing comma creates a single-element tuple.",
    de: `(1,) is a single-element tuple. The trailing comma after 1 tells Python this is a tuple, not a grouped expression.

Key concepts:
• (1,) has a trailing comma → tuple
• type() confirms <class 'tuple'>
• This is the canonical way to write a single-element tuple
• The comma is the tuple-creating operator

How it works:
• (1,) → Python recognizes the comma → creates tuple
• type((1,)) → <class 'tuple'>
• len((1,)) → 1

Examples:
• type((1,)) → <class 'tuple'>
• type(("hello",)) → <class 'tuple'>
• type((1, 2)) → <class 'tuple'> (no trailing comma needed with 2+ elements)

Common uses:
• Verifying single-element tuple creation
• Type checking in conditionals
• Ensuring correct data structures`
  }),
  (_i: number) => ({
    q: `What is type((1))?`,
    o: ["<class 'int'>", "<class 'tuple'>", "<class 'list'>", "Error"],
    c: 0,
    e: "(1) is just parenthesized integer 1, not a tuple.",
    de: `Without a trailing comma, (1) is interpreted as a parenthesized expression, not a tuple. The parentheses act as mathematical grouping, and the result is simply the integer 1.

Key concepts:
• (1) evaluates to int 1 — no tuple is created
• Parentheses without commas = grouping operator
• type((1)) → <class 'int'>
• Contrast with type((1,)) → <class 'tuple'>

How it works:
• Python parses (1) as a grouped expression
• Evaluates to the integer 1
• type(1) → <class 'int'>

Examples:
• type((1)) → <class 'int'>
• type((1,)) → <class 'tuple'>
• type(()) → <class 'tuple'> (empty tuple is special)

Common uses:
• Demonstrating the comma-vs-parentheses distinction
• Common interview question
• Avoiding single-element tuple bugs`
  }),
  (_i: number) => ({
    q: `What is tuple([1, 2, 3])?`,
    o: ["(1, 2, 3)", "[1, 2, 3]", "{1, 2, 3}", "Error"],
    c: 0,
    e: "tuple() converts a list to a tuple.",
    de: `The tuple() constructor converts any iterable into a tuple. tuple([1, 2, 3]) takes the list [1, 2, 3] and returns the tuple (1, 2, 3).

Key concepts:
• tuple(iterable) creates a tuple from any iterable
• Lists, strings, ranges, sets can all be converted
• The result is an immutable sequence
• Original iterable is unchanged

How it works:
• tuple([1, 2, 3]) iterates over the list
• Collects elements 1, 2, 3 into a new tuple
• Returns (1, 2, 3)

Examples:
• tuple([1, 2, 3]) → (1, 2, 3)
• tuple("abc") → ("a", "b", "c")
• tuple(range(3)) → (0, 1, 2)

Common uses:
• Making an immutable copy of a list
• Converting to tuple for use as dict keys or set elements
• Freezing data to prevent modification`
  }),
  (_i: number) => ({
    q: `What is list((1, 2, 3))?`,
    o: ["[1, 2, 3]", "(1, 2, 3)", "{1, 2, 3}", "Error"],
    c: 0,
    e: "list() converts a tuple to a list.",
    de: `The list() constructor converts any iterable into a list. list((1, 2, 3)) takes the tuple (1, 2, 3) and returns the list [1, 2, 3].

Key concepts:
• list(iterable) creates a list from any iterable
• Converts immutable tuples to mutable lists
• Useful when you need to modify tuple data
• Original tuple is unchanged

How it works:
• list((1, 2, 3)) iterates over the tuple
• Collects elements 1, 2, 3 into a new list
• Returns [1, 2, 3]

Examples:
• list((1, 2, 3)) → [1, 2, 3]
• list(("a", "b")) → ["a", "b"]
• list(()) → []

Common uses:
• Converting tuples to lists for modification
• Working with function returns that give tuples
• Data transformation between types`
  }),
  (_i: number) => ({
    q: `What is (1, 2, 3)[0]?`,
    o: ["1", "(1)", "[1]", "Error"],
    c: 0,
    e: "Tuple indexing works like list indexing — index 0 returns the first element.",
    de: `Tuples support indexing with square brackets, just like lists. Index 0 returns the first element.

Key concepts:
• Tuples are indexed with [] just like lists
• Indexing starts at 0
• Returns the element at that position
• Tuples are sequences — indexing and slicing work the same as lists

How it works:
• (1, 2, 3)[0] → first element → 1
• The result is the element itself (an int), not a tuple

Examples:
• (1, 2, 3)[0] → 1
• (1, 2, 3)[1] → 2
• ("a", "b", "c")[0] → "a"

Common uses:
• Accessing specific elements in tuples
• Working with function return values (which are often tuples)
• Extracting data from coordinate pairs`
  }),
  (_i: number) => ({
    q: `What is (1, 2, 3)[-1]?`,
    o: ["3", "1", "-1", "Error"],
    c: 0,
    e: "Negative index -1 returns the last element of the tuple.",
    de: `Negative indexing works on tuples the same way as lists. Index -1 means the last element, -2 means second-to-last, etc.

Key concepts:
• Negative indices count from the end
• -1 is the last element, -2 is second-to-last
• Works identically to list negative indexing
• No wrapping — -(len+1) would be IndexError

How it works:
• (1, 2, 3)[-1] → last element → 3
• Equivalent to (1, 2, 3)[2]

Examples:
• (1, 2, 3)[-1] → 3
• (1, 2, 3)[-2] → 2
• (1, 2, 3)[-3] → 1

Common uses:
• Accessing the last element of a tuple
• Working with fixed-length tuples (e.g., coordinates)
• Quick access to tail elements`
  }),
  (_i: number) => ({
    q: `What is (1, 2, 3)[1:]?`,
    o: ["(2, 3)", "[2, 3]", "(1, 2)", "Error"],
    c: 0,
    e: "Slicing a tuple returns a new tuple with the selected elements.",
    de: `Tuple slicing returns a NEW tuple (not a list). The slice [1:] means "from index 1 to the end."

Key concepts:
• Slicing a tuple returns a tuple (not a list)
• [1:] means from index 1 to the end
• The original tuple is unchanged
• Same slice syntax as lists and strings

How it works:
• (1, 2, 3)[1:] → elements at index 1 and 2 → (2, 3)
• Returns a tuple, preserving the type

Examples:
• (1, 2, 3)[1:] → (2, 3)
• (1, 2, 3)[:2] → (1, 2)
• (1, 2, 3)[::2] → (1, 3)

Common uses:
• Extracting sub-sequences from tuples
• Splitting tuples into parts
• Tuple manipulation without mutation`
  }),
  (_i: number) => ({
    q: `What is len((1, 2, 3))?`,
    o: ["3", "2", "(3)", "Error"],
    c: 0,
    e: "len() returns the number of elements in the tuple.",
    de: `len() works on tuples just like on lists and strings. It returns the number of elements in the tuple.

Key concepts:
• len(tuple) returns the count of elements
• Works with any sequence type
• Returns an integer
• Empty tuple: len(()) → 0

How it works:
• (1, 2, 3) has three elements: 1, 2, and 3
• len((1, 2, 3)) → 3

Examples:
• len((1, 2, 3)) → 3
• len(()) → 0
• len((1,)) → 1
• len(("a", "b", "c", "d")) → 4

Common uses:
• Checking tuple size
• Loop bounds
• Validation of expected data length`
  }),
  (_i: number) => ({
    q: `What is (1, 2) + (3, 4)?`,
    o: ["(1, 2, 3, 4)", "[1, 2, 3, 4]", "(4, 6)", "Error"],
    c: 0,
    e: "The + operator concatenates two tuples into a new tuple.",
    de: `The + operator on tuples performs concatenation, creating a new tuple with all elements from both operands. Tuples are immutable, so this always creates a new object.

Key concepts:
• + concatenates tuples (like lists and strings)
• Returns a NEW tuple (originals unchanged)
• Both operands must be tuples (can't add tuple + list)
• Does NOT perform element-wise addition

How it works:
• (1, 2) + (3, 4) → new tuple with elements from both
• Result: (1, 2, 3, 4)

Examples:
• (1, 2) + (3, 4) → (1, 2, 3, 4)
• () + (1,) → (1,)
• ("a",) + ("b", "c") → ("a", "b", "c")

Common uses:
• Building tuples incrementally
• Combining fixed data sequences
• Extending tuples (since append doesn't exist for tuples)`
  }),
  (_i: number) => ({
    q: `What is (1, 2) * 3?`,
    o: ["(1, 2, 1, 2, 1, 2)", "(3, 6)", "(1, 2, 3)", "Error"],
    c: 0,
    e: "The * operator repeats the tuple 3 times.",
    de: `The * operator on tuples performs repetition, creating a new tuple that repeats the original tuple's elements the specified number of times.

Key concepts:
• tuple * n repeats the tuple n times
• Returns a NEW tuple
• Does NOT multiply element values
• Works the same as list * n and string * n

How it works:
• (1, 2) * 3 → (1, 2) repeated 3 times
• Result: (1, 2, 1, 2, 1, 2)

Examples:
• (1, 2) * 3 → (1, 2, 1, 2, 1, 2)
• (0,) * 5 → (0, 0, 0, 0, 0)
• ("a",) * 2 → ("a", "a")

Common uses:
• Creating tuples with repeated patterns
• Initializing fixed-size tuples
• Placeholder data structures`
  }),
  (_i: number) => ({
    q: `What is 2 in (1, 2, 3)?`,
    o: ["True", "False", "2", "Error"],
    c: 0,
    e: "The 'in' operator checks membership — 2 is in the tuple.",
    de: `The 'in' operator checks whether a value exists in a sequence. Since 2 is one of the elements in (1, 2, 3), the result is True.

Key concepts:
• 'in' checks for membership in any iterable
• Returns True if the value is found, False otherwise
• Works with tuples, lists, strings, sets, dicts
• Uses equality (==) for comparison

How it works:
• Check 2 == 1 → False
• Check 2 == 2 → True → return True
• Short-circuits on first match

Examples:
• 2 in (1, 2, 3) → True
• 5 in (1, 2, 3) → False
• "a" in ("a", "b") → True

Common uses:
• Checking if a value exists in a collection
• Conditional logic based on membership
• Validating input against allowed values`
  }),
  (_i: number) => ({
    q: `What is (1, 2, 3).count(2)?`,
    o: ["1", "2", "0", "Error"],
    c: 0,
    e: "count() returns how many times the value 2 appears in the tuple.",
    de: `tuple.count(value) returns the number of occurrences of the specified value. Since 2 appears exactly once in (1, 2, 3), the result is 1.

Key concepts:
• count() is one of only two tuple methods (count and index)
• Returns an integer count of occurrences
• Returns 0 if the value is not found (no error)
• Uses equality (==) for comparison

How it works:
• Scans through (1, 2, 3)
• Counts occurrences of 2
• Found once → returns 1

Examples:
• (1, 2, 3).count(2) → 1
• (1, 2, 2, 3).count(2) → 2
• (1, 2, 3).count(5) → 0

Common uses:
• Counting occurrences in immutable sequences
• Data frequency analysis
• Verifying uniqueness of elements`
  }),
  (_i: number) => ({
    q: `What is (1, 2, 3).index(2)?`,
    o: ["1", "2", "0", "Error"],
    c: 0,
    e: "index() returns the position of the first occurrence of 2, which is at index 1.",
    de: `tuple.index(value) returns the index of the first occurrence of the value. Since 2 is at position 1 (0-indexed) in (1, 2, 3), the result is 1.

Key concepts:
• index() is one of only two tuple methods (count and index)
• Returns the index of the FIRST occurrence
• Raises ValueError if the value is not found
• 0-indexed (first element is at index 0)

How it works:
• Scans (1, 2, 3) from left
• Index 0: 1 ≠ 2
• Index 1: 2 == 2 → return 1

Examples:
• (1, 2, 3).index(2) → 1
• (1, 2, 2, 3).index(2) → 1 (first occurrence)
• (1, 2, 3).index(5) → ValueError

Common uses:
• Finding position of an element
• Locating items in ordered data
• Working with tuple-based data structures`
  }),
  (_i: number) => ({
    q: `Can you assign a new value to an element of a tuple (e.g., t[0] = 5)?`,
    o: ["No, tuples are immutable", "Yes, like a list", "Only if the tuple has one element", "Only with integers"],
    c: 0,
    e: "Tuples are immutable — you cannot change, add, or remove elements.",
    de: `Tuples are immutable sequences. Once created, their elements cannot be changed, added, or removed. Attempting t[0] = 5 raises a TypeError.

Key concepts:
• Immutable = cannot be modified after creation
• t[0] = 5 raises TypeError: 'tuple' object does not support item assignment
• No append, insert, remove, pop methods on tuples
• To "modify" a tuple, you must create a new one

How it works:
• t = (1, 2, 3)
• t[0] = 5 → TypeError
• Tuples have no mutation methods

Examples:
• t = (1, 2, 3); t[0] = 5 → TypeError
• t = (1, 2, 3); t = (5,) + t[1:] → (5, 2, 3) (new tuple)

Common uses:
• Immutability guarantees data integrity
• Tuples can be dict keys and set elements (because immutable)
• Thread-safe data sharing
• Function return values (caller can't accidentally modify)`
  }),
  (_i: number) => ({
    q: `What is the value of t after: t = (1, [2, 3]); t[1].append(4)?`,
    o: ["(1, [2, 3, 4])", "TypeError", "(1, [2, 3], 4)", "(1, [2, 3])"],
    c: 0,
    e: "The tuple is immutable, but its mutable element (the list) can be modified in place.",
    de: `This is a classic Python gotcha. The tuple itself is immutable (you can't reassign t[1] to a different object), but the list INSIDE the tuple is still mutable. t[1].append(4) modifies the list object in place.

Key concepts:
• Tuple immutability means you can't change WHICH objects are in the tuple
• But mutable objects inside the tuple can still be modified
• The tuple holds a reference to the list, and that reference doesn't change
• The list's contents change, but the tuple still points to the same list object

How it works:
• t = (1, [2, 3]) → tuple with int and list
• t[1] → accesses the list [2, 3]
• t[1].append(4) → modifies the list in place → [2, 3, 4]
• t is now (1, [2, 3, 4])
• The tuple still references the same list object

Examples:
• t = (1, [2, 3]); t[1].append(4) → t is (1, [2, 3, 4])
• t = (1, [2, 3]); t[1] = [5] → TypeError (can't reassign the reference)

Common uses:
• Understanding mutability vs immutability
• Recognizing that immutability is shallow in Python
• Avoiding bugs with mutable objects in immutable containers`
  }),
  (_i: number) => ({
    q: `What is a after: a, b = (10, 20)?`,
    o: ["10", "20", "(10, 20)", "Error"],
    c: 0,
    e: "Tuple unpacking assigns 10 to a and 20 to b.",
    de: `Tuple unpacking (also called destructuring) assigns each element of a tuple to a corresponding variable. The number of variables must match the number of elements.

Key concepts:
• a, b = (10, 20) assigns a=10, b=20
• Number of variables must match tuple length
• Works with any iterable on the right side
• Parentheses on the right are optional: a, b = 10, 20

How it works:
• (10, 20) has 2 elements
• 2 variables on the left: a, b
• a gets 10, b gets 20

Examples:
• a, b = (10, 20) → a=10, b=20
• x, y, z = (1, 2, 3) → x=1, y=2, z=3
• a, b = (10, 20, 30) → ValueError (too many values)

Common uses:
• Extracting values from tuples
• Multiple assignment in one line
• Function return value unpacking`
  }),
  (_i: number) => ({
    q: `What does a, b = b, a do in Python?`,
    o: ["Swaps the values of a and b", "Sets both to b's value", "Raises an error", "Sets both to a's value"],
    c: 0,
    e: "Python evaluates the right side first as a tuple, then unpacks into the left side.",
    de: `This is Python's elegant swap idiom. The right side (b, a) is evaluated first as a tuple, then unpacked into (a, b). No temporary variable is needed.

Key concepts:
• Right side is fully evaluated before any assignment
• b, a creates a temporary tuple (b_value, a_value)
• Then a, b = (b_value, a_value) unpacks it
• This is tuple packing (right) and unpacking (left)

How it works:
• Suppose a=1, b=2
• Right side: b, a → (2, 1) (evaluated first)
• Left side: a, b = (2, 1)
• Now a=2, b=1 (swapped!)

Examples:
• a, b = 1, 2; a, b = b, a → a=2, b=1
• x, y, z = z, x, y → rotates three values

Common uses:
• Swapping variables without a temp variable
• Rotating values
• Clean, Pythonic code for value exchange`
  }),
  (_i: number) => ({
    q: `What is (1, 2, 3) == (1, 2, 3)?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "Tuples compare equal if they have the same elements in the same order.",
    de: `Tuple equality comparison checks element-by-element. Two tuples are equal if they have the same length and each corresponding pair of elements is equal.

Key concepts:
• == compares tuples element by element
• Both tuples must have the same length
• Each element is compared using ==
• Order matters: (1, 2) != (2, 1)

How it works:
• Compare lengths: both have 3 elements ✓
• 1 == 1 → True
• 2 == 2 → True
• 3 == 3 → True
• All match → True

Examples:
• (1, 2, 3) == (1, 2, 3) → True
• (1, 2) == (1, 2, 3) → False (different length)
• (1, 2) == (2, 1) → False (different order)

Common uses:
• Comparing tuples for equality
• Testing return values of functions
• Validating data structures`
  }),
  (_i: number) => ({
    q: `What is (1, 2) < (1, 3)?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "Tuples are compared lexicographically: first elements are equal, so second elements decide.",
    de: `Tuple comparison is lexicographic (element by element, left to right). It compares the first elements; if they're equal, it moves to the second elements, and so on.

Key concepts:
• Lexicographic comparison: compare first elements, then second, etc.
• Like alphabetical ordering but for sequences
• Stops at the first pair that differs
• Elements must be comparable with <

How it works:
• Compare first elements: 1 vs 1 → equal, continue
• Compare second elements: 2 vs 3 → 2 < 3 → True
• Result: True

Examples:
• (1, 2) < (1, 3) → True (2 < 3)
• (1, 2) < (2, 0) → True (1 < 2, second element irrelevant)
• (1, 2) < (1, 2) → False (they're equal, not less than)

Common uses:
• Sorting lists of tuples
• Priority comparisons
• Lexicographic ordering of records`
  }),
  (_i: number) => ({
    q: `What is (1, 2) < (1, 2, 3)?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "When all compared elements are equal, the shorter tuple is considered less.",
    de: `When comparing tuples of different lengths, Python compares element by element. If all elements of the shorter tuple match the prefix of the longer tuple, the shorter tuple is considered "less than" the longer one.

Key concepts:
• If all shared elements are equal, the shorter tuple is smaller
• Similar to how "ab" < "abc" in string comparison
• This follows lexicographic ordering rules
• Length only matters when all compared elements are equal

How it works:
• Compare first elements: 1 vs 1 → equal, continue
• Compare second elements: 2 vs 2 → equal, continue
• Left tuple has no more elements, right tuple does
• Shorter tuple is less → True

Examples:
• (1, 2) < (1, 2, 3) → True
• (1,) < (1, 0) → True (shorter is less when prefix matches)
• (1, 2, 3) < (1, 2) → False (longer is greater)

Common uses:
• Understanding Python's comparison protocol for sequences
• Sorting variable-length tuples
• Version number comparisons: (1, 0) < (1, 0, 1)`
  }),
  (_i: number) => ({
    q: `Does hash((1, 2, 3)) work without error?`,
    o: ["Yes, tuples of immutable elements are hashable", "No, tuples are not hashable", "Only if the tuple has one element", "Only in Python 3.10+"],
    c: 0,
    e: "Tuples are hashable as long as all their elements are also hashable.",
    de: `Tuples are hashable when all their elements are hashable (immutable). Since integers are hashable, (1, 2, 3) is hashable. This means tuples can be used as dictionary keys and set elements.

Key concepts:
• hash() computes a hash value for hashable objects
• Tuples are hashable IF all elements are hashable
• Immutable types (int, str, float, tuple) are generally hashable
• Mutable types (list, dict, set) are NOT hashable

How it works:
• (1, 2, 3) contains only ints (hashable)
• Therefore the tuple itself is hashable
• hash((1, 2, 3)) returns an integer hash value

Examples:
• hash((1, 2, 3)) → works (returns some integer)
• hash(("a", "b")) → works
• hash((1, [2, 3])) → TypeError (list is unhashable)

Common uses:
• Using tuples as dictionary keys: d = {(1, 2): "point"}
• Adding tuples to sets: s = {(1, 2), (3, 4)}
• Frozen coordinate pairs, composite keys`
  }),
  (_i: number) => ({
    q: `Does hash((1, [2, 3])) work without error?`,
    o: ["No, TypeError because the list inside is unhashable", "Yes, it returns a hash value", "Yes, tuples are always hashable", "No, only single-element tuples are hashable"],
    c: 0,
    e: "A tuple containing an unhashable element (list) is itself unhashable.",
    de: `hash((1, [2, 3])) raises TypeError: unhashable type: 'list'. A tuple is only hashable if ALL its elements are hashable. Since [2, 3] is a list (mutable, unhashable), the entire tuple becomes unhashable.

Key concepts:
• Tuple hashability depends on its contents
• If any element is unhashable, the tuple is unhashable
• Lists, dicts, and sets are unhashable (mutable)
• TypeError: unhashable type: 'list'

How it works:
• Python tries to hash (1, [2, 3])
• To hash a tuple, it must hash each element
• hash(1) → OK
• hash([2, 3]) → TypeError: unhashable type: 'list'
• The whole operation fails

Examples:
• hash((1, [2, 3])) → TypeError
• hash((1, (2, 3))) → works (nested tuple is fine)
• hash((1, {2: 3})) → TypeError (dict is unhashable)

Common uses:
• Understanding hashability requirements for dict keys
• Why (1, [2]) can't be a dict key but (1, (2,)) can
• Debugging TypeError with composite data structures`
  }),
];
