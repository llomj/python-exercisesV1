// --- LEVEL 6 EXPERT B: Hashability Edge Cases, __missing__, Dict Subclassing, MappingProxyType, Advanced Dict Patterns (50 Questions) ---
// Questions 51-100 of expert set. Each is TRULY UNIQUE.
export const level6ExpertB = [
  // 51. hash(42) — ints are hashable
  (_i: number) => ({
    q: `Does hash(42) raise an error?`,
    o: ["No, integers are hashable", "Yes, TypeError", "No, but returns None", "Depends on the value"],
    c: 0,
    e: "Integers are immutable and hashable. hash(42) returns a valid hash value.",
    de: `All immutable built-in types in Python are hashable, including integers.

Key concepts:
• Hashable means an object has a __hash__() method and can be used as a dict key or set element
• Integers are immutable → they are hashable
• hash(42) returns an integer hash value (in CPython, hash(42) == 42 for small ints)
• All numeric types (int, float, complex) are hashable

How it works:
• Python calls 42.__hash__() internally
• For small integers, CPython returns the integer itself as its hash
• The hash value is used for O(1) lookups in dicts and sets

Example:
hash(42)       # 42 (in CPython)
hash(0)        # 0
hash(-1)       # -2 (special case in CPython, -1 is reserved)
{42: "value"}  # works — int as dict key

Common uses:
• Using integers as dictionary keys
• Adding integers to sets
• Any context requiring hashable objects

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 52. hash("hello") — strings are hashable
  (_i: number) => ({
    q: `Does hash("hello") raise an error?`,
    o: ["No, strings are hashable", "Yes, TypeError", "Only for short strings", "Returns None"],
    c: 0,
    e: "Strings are immutable and hashable. hash(\"hello\") returns a valid hash value.",
    de: `Strings in Python are immutable sequences and are therefore hashable.

Key concepts:
• Strings are immutable — once created, their content cannot change
• Immutability is a prerequisite for hashability in Python
• hash("hello") returns a consistent integer for the lifetime of the process
• String hashes may differ between Python sessions (hash randomization since 3.3)

How it works:
• Python computes a hash based on the string's characters
• The hash is cached after first computation (optimization)
• PYTHONHASHSEED controls randomization for security against hash-collision attacks

Example:
hash("hello")     # some integer (varies between sessions)
hash("")           # 0
{"hello": 1}       # works — string as dict key

Common uses:
• Strings as dictionary keys (the most common dict key type)
• Strings in sets for membership testing
• String interning relies on hashing

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 53. hash((1,2,3)) — tuples of hashables are hashable
  (_i: number) => ({
    q: `Does hash((1, 2, 3)) raise an error?`,
    o: ["No, tuples of hashable elements are hashable", "Yes, TypeError", "Only if the tuple has < 3 elements", "Returns None"],
    c: 0,
    e: "Tuples containing only hashable elements are themselves hashable.",
    de: `A tuple is hashable if and only if all of its elements are hashable.

Key concepts:
• Tuples are immutable sequences
• (1, 2, 3) contains only integers, which are hashable
• Therefore the tuple itself is hashable
• The hash is computed from all elements combined

How it works:
• Python's tuple.__hash__() iterates over each element
• It calls hash() on each element and combines the results
• If any element raises TypeError (unhashable), the tuple is also unhashable
• The combination algorithm uses XOR with constants for good distribution

Example:
hash((1, 2, 3))        # works — all elements hashable
hash(("a", "b"))       # works — strings are hashable
hash((1, (2, 3)))      # works — nested tuple of hashables
{(1, 2): "value"}      # tuple as dict key

Common uses:
• Tuples as dictionary keys (e.g., coordinate pairs)
• Tuples in sets for unique combinations
• Multi-value keys: cache[(arg1, arg2)] = result

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 54. hash((1,[2,3])) → TypeError
  (_i: number) => ({
    q: `What happens with hash((1, [2, 3]))?`,
    o: ["TypeError: unhashable type: 'list'", "Returns a valid hash", "Returns None", "Returns 0"],
    c: 0,
    e: "A tuple containing a list is unhashable because lists are mutable and unhashable.",
    de: `A tuple is only hashable if ALL its elements are hashable. Lists are mutable and unhashable.

Key concepts:
• Lists are mutable → they don't have __hash__ → unhashable
• (1, [2, 3]) contains a list as its second element
• When Python tries to hash the tuple, it attempts to hash each element
• hash([2, 3]) raises TypeError → the whole tuple is unhashable

How it works:
• tuple.__hash__() calls hash() on element 0: hash(1) → OK
• Then calls hash() on element 1: hash([2, 3]) → TypeError!
• The TypeError propagates up — the tuple cannot be hashed
• This means the tuple cannot be a dict key or set element

Example:
hash((1, [2, 3]))     # TypeError: unhashable type: 'list'
hash((1, (2, 3)))     # works — nested tuple is hashable
{(1, [2, 3]): "x"}   # TypeError — can't use as dict key

Common uses:
• This is a common gotcha when trying to use tuples as dict keys
• Convert inner lists to tuples first: (1, tuple([2, 3]))
• Use frozenset for set-like elements in tuples

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 55. hash(frozenset({1,2})) — frozensets are hashable
  (_i: number) => ({
    q: `Does hash(frozenset({1, 2})) raise an error?`,
    o: ["No, frozensets are hashable", "Yes, TypeError", "Only for small frozensets", "Returns None"],
    c: 0,
    e: "Frozensets are immutable and hashable, unlike regular sets.",
    de: `frozenset is the immutable counterpart of set, and it is hashable.

Key concepts:
• set is mutable → unhashable
• frozenset is immutable → hashable
• hash(frozenset({1, 2})) returns a valid integer
• frozensets can be dict keys or elements of other sets

How it works:
• frozenset.__hash__() computes a hash from all elements
• The algorithm uses XOR of element hashes with mixing
• Order doesn't matter: frozenset({1, 2}) == frozenset({2, 1}) and same hash
• This is why frozenset exists — to provide a hashable set type

Example:
hash(frozenset({1, 2}))       # valid hash
hash(set({1, 2}))             # TypeError: unhashable type: 'set'
{frozenset({1, 2}): "value"}  # frozenset as dict key
s = {frozenset({1}), frozenset({2})}  # set of frozensets

Common uses:
• Using sets as dictionary keys (convert to frozenset first)
• Sets of sets (inner sets must be frozensets)
• Immutable set constants

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 56. hash(None) — None is hashable
  (_i: number) => ({
    q: `Does hash(None) raise an error?`,
    o: ["No, None is hashable", "Yes, TypeError", "Returns 0", "Returns None"],
    c: 0,
    e: "None is a singleton immutable object and is hashable.",
    de: `None is Python's null/nothing value. It is immutable and hashable.

Key concepts:
• None is a singleton — there's only one None object
• None is immutable — its value never changes
• hash(None) returns a valid integer (implementation-dependent)
• None can be used as a dict key or set element

How it works:
• NoneType has a __hash__ method
• hash(None) returns a consistent value during a session
• Since None is a singleton, its hash is always the same within a process
• {None: "value"} is perfectly valid

Example:
hash(None)          # some integer
{None: "no key"}    # None as dict key — valid!
d = {None: 0, "a": 1}
d[None]             # 0
None in {None, 1}   # True

Common uses:
• None as a sentinel dict key
• Checking if None is in a set
• Default dictionary values with None keys

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 57. hash(True) == hash(1) → True
  (_i: number) => ({
    q: `What is hash(True) == hash(1)?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "True == 1 in Python (bool is a subclass of int), so they must have the same hash.",
    de: `In Python, bool is a subclass of int. True == 1, so hash(True) must equal hash(1).

Key concepts:
• bool is a subclass of int: isinstance(True, int) → True
• True == 1 evaluates to True
• Python's hash contract: if a == b, then hash(a) == hash(b)
• Therefore hash(True) == hash(1) must be True

How it works:
• True is essentially the integer 1 with a different repr
• hash(True) calls int.__hash__(1) → returns 1
• hash(1) also returns 1
• They are equal because the hash contract requires it

Example:
hash(True)           # 1
hash(1)              # 1
hash(True) == hash(1)  # True
True == 1            # True
True + True          # 2 (because True is 1)

Common uses:
• This equality means {True: "a", 1: "b"} has only ONE key
• Be careful mixing bools and ints as dict keys
• Understanding bool/int relationship prevents subtle bugs

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 58. hash(0) == hash(False) → True
  (_i: number) => ({
    q: `What is hash(0) == hash(False)?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "False == 0 in Python, so they share the same hash by the hash contract.",
    de: `False is the boolean equivalent of 0 in Python's type hierarchy.

Key concepts:
• bool is a subclass of int
• False == 0 evaluates to True
• Hash contract: equal objects must have equal hashes
• hash(0) == hash(False) → True

How it works:
• False is internally stored as integer 0
• hash(False) calls int.__hash__(0) → returns 0
• hash(0) also returns 0
• Both are equal, satisfying the hash contract

Example:
hash(False)          # 0
hash(0)              # 0
False == 0           # True
False + 1            # 1 (because False is 0)
int(False)           # 0

Common uses:
• {0: "zero", False: "false"} → only one key (0 or False)
• Avoid mixing 0 and False as dict keys
• Understanding this prevents unexpected dict behavior

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 59. hash(0) == hash(0.0) → True
  (_i: number) => ({
    q: `What is hash(0) == hash(0.0)?`,
    o: ["True", "False", "Error", "Depends on platform"],
    c: 0,
    e: "0 == 0.0 in Python, so their hashes must be equal by the hash contract.",
    de: `Python guarantees that numerically equal values have equal hashes, even across types.

Key concepts:
• 0 == 0.0 is True (int and float comparison)
• Hash contract: if a == b, then hash(a) == hash(b)
• hash(0) and hash(0.0) are both 0
• This extends to all numeric types: int, float, Decimal, Fraction

How it works:
• Python's numeric tower ensures cross-type equality
• int.__hash__ and float.__hash__ are designed to produce the same hash for equal values
• hash(0) → 0, hash(0.0) → 0
• hash(1) → 1, hash(1.0) → 1 (same pattern for all equal numerics)

Example:
hash(0) == hash(0.0)     # True
hash(1) == hash(1.0)     # True
0 == 0.0                 # True
{0: "int", 0.0: "float"} # {0: "float"} — one key, last value

Common uses:
• Be aware when mixing int and float keys in dicts
• Numeric hash consistency is a language guarantee
• Decimal and Fraction also follow this rule

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 60. {True: "a", 1: "b", 1.0: "c"} → {True: "c"}
  (_i: number) => ({
    q: `What is {True: "a", 1: "b", 1.0: "c"}?`,
    o: ['{True: "c"}', '{True: "a", 1: "b", 1.0: "c"}', '{1: "c"}', "Error"],
    c: 0,
    e: "True == 1 == 1.0, so they are the same key. The first key (True) is kept, last value (\"c\") wins.",
    de: `When equal values are used as dict keys, only one key is stored — the first one seen — but the value is updated.

Key concepts:
• True == 1 == 1.0 — all three are numerically equal
• In a dict literal, each subsequent equal key overwrites the previous value
• The key object is NOT replaced — first key stays (True)
• Only the value is updated with each assignment

How it works:
• {True: "a"} → dict has key True with value "a"
• 1: "b" → 1 == True, so value updates to "b", key stays True
• 1.0: "c" → 1.0 == True, so value updates to "c", key stays True
• Result: {True: "c"} — one key-value pair

Example:
{True: "a", 1: "b", 1.0: "c"}   # {True: "c"}
len({True: "a", 1: "b", 1.0: "c"})  # 1
{1: "a", True: "b"}              # {1: "b"}
{1.0: "a", 1: "b", True: "c"}   # {1.0: "c"}

Common uses:
• This is a classic Python gotcha in interviews
• Demonstrates the hash/equality contract in action
• Warns against mixing bool/int/float as dict keys

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 61. d={0:"zero", False:"false", 0.0:"float_zero"}; len(d) → 1
  (_i: number) => ({
    q: `d = {0: "zero", False: "false", 0.0: "float_zero"}\nWhat is len(d)?`,
    o: ["1", "2", "3", "Error"],
    c: 0,
    e: "0 == False == 0.0, so all three are the same key. The dict has only 1 entry.",
    de: `Since 0, False, and 0.0 are all equal, they hash to the same value and count as one key.

Key concepts:
• 0 == False → True (bool subclass of int)
• 0 == 0.0 → True (numeric equality)
• All three map to the same dict slot
• len(d) is 1 — only one key exists

How it works:
• d = {0: "zero"} → key 0, value "zero"
• False: "false" → False == 0, so value updates to "false", key stays 0
• 0.0: "float_zero" → 0.0 == 0, so value updates to "float_zero", key stays 0
• Result: {0: "float_zero"} — len is 1

Example:
d = {0: "zero", False: "false", 0.0: "float_zero"}
len(d)      # 1
d           # {0: "float_zero"}
d[0]        # "float_zero"
d[False]    # "float_zero"
d[0.0]      # "float_zero"

Common uses:
• Illustrates why mixing 0/False/0.0 as keys is dangerous
• All three access the same value
• Important for understanding Python's numeric hash contract

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 62. NaN as dict key — different NaN objects create different keys
  (_i: number) => ({
    q: `d = {}\nd[float("nan")] = 1\nd[float("nan")] = 2\nWhat is len(d)?`,
    o: ["2", "1", "0", "Error"],
    c: 0,
    e: "Each float(\"nan\") creates a new object. NaN != NaN, so they are different keys.",
    de: `NaN (Not a Number) has the special property that it is not equal to itself: NaN != NaN.

Key concepts:
• float("nan") creates a new NaN object each time
• NaN != NaN is True (IEEE 754 standard)
• Two different NaN objects are different dict keys
• Each call to float("nan") produces a distinct object with a distinct id

How it works:
• d[float("nan")] = 1 → creates NaN object A, adds to dict
• d[float("nan")] = 2 → creates NaN object B (different id)
• Python checks: hash(A) may equal hash(B), but A == B is False (NaN != NaN)
• Since they're not equal, they're treated as different keys
• len(d) is 2

Example:
a = float("nan")
b = float("nan")
a == b          # False (NaN != NaN)
a is b          # False (different objects)
d = {}
d[a] = 1; d[b] = 2
len(d)          # 2

Common uses:
• NaN behavior is one of Python's most surprising edge cases
• Important in data science when handling missing values
• Contrast with the same-object NaN case (question 63)

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 63. Same NaN object as dict key — only one key
  (_i: number) => ({
    q: `n = float("nan")\nd = {}\nd[n] = 1\nd[n] = 2\nWhat is len(d)?`,
    o: ["1", "2", "0", "Error"],
    c: 0,
    e: "Same object reference: Python checks identity (is) before equality. n is n → True, so same key.",
    de: `When the same NaN object is used twice, Python's identity check (is) short-circuits the equality check.

Key concepts:
• n = float("nan") creates ONE NaN object
• d[n] = 1 then d[n] = 2 uses the SAME object both times
• Python dict lookup: first checks identity (is), then equality (==)
• n is n → True, so Python treats it as the same key
• The value is updated, not a new key added

How it works:
• d[n] = 1 → adds key n with value 1
• d[n] = 2 → checks if n is already a key: hash matches, n is n → True
• Since identity matches, it's the same key → value updated to 2
• len(d) is 1

Example:
n = float("nan")
n == n        # False (NaN != NaN)
n is n        # True (same object!)
d = {n: 1}
d[n] = 2
len(d)        # 1
d[n]          # 2

Common uses:
• Shows Python dicts use identity check before equality
• Same NaN object → same key (identity short-circuit)
• Different NaN objects → different keys (no identity, equality is False)

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 64. Class instances as dict keys
  (_i: number) => ({
    q: `Can a class instance be used as a dict key by default?`,
    o: ["Yes, using id() for hash", "No, instances are unhashable", "Only with __hash__ defined", "Only immutable instances"],
    c: 0,
    e: "By default, class instances are hashable using their id() (memory address) as the hash.",
    de: `Python objects are hashable by default. Their hash is based on their identity (id).

Key concepts:
• By default, object.__hash__ returns a value derived from id()
• By default, object.__eq__ checks identity (is)
• So every instance is unique as a dict key
• This changes if you define __eq__ without __hash__

How it works:
• class C: pass creates a class with default __hash__ and __eq__
• a = C() — a has a unique id
• hash(a) is based on id(a)
• a == a is True (identity), a == C() is False (different objects)
• {a: 1} works perfectly

Example:
class C: pass
a = C()
hash(a)         # some integer based on id(a)
d = {a: "val"}  # works fine
d[a]            # "val"

Common uses:
• Object tracking: visited = {obj: True}
• Object-to-data mappings
• Default behavior — no __hash__ definition needed

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 65. Two different instances → two different dict keys
  (_i: number) => ({
    q: `class C: pass\na = C()\nb = C()\nd = {a: 1, b: 2}\nWhat is len(d)?`,
    o: ["2", "1", "Error", "0"],
    c: 0,
    e: "Different instances have different id() values, so they are different dict keys.",
    de: `Each class instance is a unique object with a unique identity, so each is a distinct dict key.

Key concepts:
• a = C() and b = C() are two different objects
• a is b → False (different identity)
• hash(a) != hash(b) (different id-based hashes)
• Both can coexist as separate keys in the dict

How it works:
• d = {a: 1, b: 2} → two entries
• a and b have different id() values
• hash(a) and hash(b) differ (based on id)
• a == b is False (default __eq__ checks identity)
• len(d) is 2

Example:
class C: pass
a, b = C(), C()
a is b       # False
d = {a: 1, b: 2}
len(d)       # 2
d[a]         # 1
d[b]         # 2

Common uses:
• Tracking individual objects in dicts
• Object registries and caches
• Each instance is naturally a unique key

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 66. What makes an object hashable?
  (_i: number) => ({
    q: `What two methods must an object have to be hashable?`,
    o: ["__hash__ and __eq__", "__hash__ and __str__", "__eq__ and __repr__", "__hash__ and __lt__"],
    c: 0,
    e: "An object needs both __hash__ (to compute hash) and __eq__ (for equality comparison) to be hashable.",
    de: `Hashability in Python requires two special methods working together.

Key concepts:
• __hash__() returns an integer hash value
• __eq__() checks equality between objects
• Both are needed for correct dict/set behavior
• The hash contract: if a == b, then hash(a) == hash(b)

How it works:
• When inserting into a dict: hash(key) determines the bucket
• When looking up: hash(key) finds candidate bucket, then __eq__ confirms match
• Without __hash__: can't compute bucket → unhashable
• Without __eq__: can't confirm matches → incorrect behavior
• All built-in immutable types define both correctly

Example:
class Point:
    def __init__(self, x, y):
        self.x, self.y = x, y
    def __hash__(self):
        return hash((self.x, self.y))
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

p1 = Point(1, 2)
{p1: "origin"}  # works — has both __hash__ and __eq__

Common uses:
• Custom classes as dict keys or set elements
• Value-based equality (not identity-based)
• Data classes with frozen=True auto-generate both

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 67. Defining __eq__ without __hash__ makes class unhashable
  (_i: number) => ({
    q: `class C:\n    def __eq__(self, other): return True\na = C()\nWhat happens with hash(a)?`,
    o: ["TypeError: unhashable type", "Returns 0", "Returns id(a)", "Returns None"],
    c: 0,
    e: "Defining __eq__ without __hash__ sets __hash__ to None, making instances unhashable.",
    de: `Python automatically sets __hash__ = None when you define __eq__ without defining __hash__.

Key concepts:
• By default, classes inherit __hash__ from object (based on id)
• If you define __eq__, Python assumes the default __hash__ is no longer valid
• Python sets __hash__ = None → instances become unhashable
• You must explicitly define __hash__ to keep instances hashable

How it works:
• class C with __eq__ but no __hash__: C.__hash__ is None
• hash(a) raises TypeError: unhashable type: 'C'
• This is a safety measure — if equality changed, the old hash may violate the contract
• To fix: define __hash__ consistent with __eq__

Example:
class C:
    def __eq__(self, other): return True

a = C()
hash(a)          # TypeError: unhashable type: 'C'
{a: 1}           # TypeError

class D:
    def __eq__(self, other): return True
    def __hash__(self): return 0  # must be consistent with __eq__

hash(D())        # 0 — works

Common uses:
• Understanding why custom classes become unhashable
• Always define __hash__ alongside __eq__
• Use @dataclass(frozen=True) for automatic correct implementation

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 68. dict_keys set intersection
  (_i: number) => ({
    q: `d = {"a": 1}\nWhat is d.keys() & {"a", "b"}?`,
    o: ['{"a"}', '{"a", "b"}', "Error", '{"b"}'],
    c: 0,
    e: "dict_keys views support set operations. & is intersection, returning common elements.",
    de: `Dictionary keys views support set-like operations including intersection (&).

Key concepts:
• d.keys() returns a dict_keys view object
• dict_keys supports set operations: &, |, -, ^
• d.keys() & {"a", "b"} computes the intersection
• Only keys present in both are included

How it works:
• d.keys() is {"a"} (view of dict keys)
• {"a", "b"} is a set
• & computes intersection: elements in both
• "a" is in both → included
• "b" is only in the set → excluded
• Result: {"a"}

Example:
d = {"a": 1, "b": 2, "c": 3}
d.keys() & {"a", "b", "d"}    # {"a", "b"}
d.keys() & {"x", "y"}          # set() (empty — no overlap)
d.keys() & d.keys()            # {"a", "b", "c"}

Common uses:
• Finding common keys between dicts and sets
• Checking which expected keys exist: expected & d.keys()
• Filtering dictionaries by key sets

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 69. dict_keys set union
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2}\nWhat is d.keys() | {"c"}?`,
    o: ['{"a", "b", "c"}', '{"c"}', "Error", '{"a", "b"}'],
    c: 0,
    e: "dict_keys views support | (union). All unique elements from both sides are combined.",
    de: `The | operator on dict_keys computes the set union with another iterable.

Key concepts:
• d.keys() returns a set-like view
• | computes the union — all unique elements from both sides
• d.keys() | {"c"} combines {"a", "b"} with {"c"}
• Result: {"a", "b", "c"}

How it works:
• d.keys() yields "a" and "b"
• {"c"} contributes "c"
• Union includes all unique elements: "a", "b", "c"
• Returns a set (not a dict_keys view)

Example:
d = {"a": 1, "b": 2}
d.keys() | {"c"}          # {"a", "b", "c"}
d.keys() | {"a"}          # {"a", "b"} (no duplicates)
d.keys() | set()          # {"a", "b"}

Common uses:
• Combining key sets from multiple dicts
• Adding expected keys to existing key views
• Set operations on dict keys without explicit conversion

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 70. dict_keys set difference
  (_i: number) => ({
    q: `d = {"a": 1}\nWhat is d.keys() - {"a"}?`,
    o: ["set()", '{"a"}', "Error", "0"],
    c: 0,
    e: "Set difference removes elements found in the right operand. 'a' is removed, leaving an empty set.",
    de: `The - operator on dict_keys computes the set difference.

Key concepts:
• d.keys() - {"a"} removes "a" from the keys view
• d.keys() is {"a"}, minus {"a"} leaves nothing
• Result: set() (empty set)
• Returns a set object

How it works:
• d.keys() contains "a"
• Subtract {"a"} — remove all elements in the right operand
• "a" is removed → nothing remains
• Result is an empty set: set()

Example:
d = {"a": 1, "b": 2, "c": 3}
d.keys() - {"a"}         # {"b", "c"}
d.keys() - {"a", "b", "c"}  # set()
d.keys() - {"x"}         # {"a", "b", "c"} (nothing to remove)
d.keys() - set()         # {"a", "b", "c"}

Common uses:
• Finding keys NOT in a given set
• Detecting missing keys: required - d.keys()
• Filtering out unwanted keys

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 71. __missing__ in dict subclass
  (_i: number) => ({
    q: `class MyDict(dict):\n    def __missing__(self, key):\n        return f"no {key}"\nd = MyDict(a=1)\nWhat is d["b"]?`,
    o: ['"no b"', "KeyError", "None", '""'],
    c: 0,
    e: "__missing__ is called when a key is not found in __getitem__. It returns \"no b\" for missing key \"b\".",
    de: `The __missing__ method is called by dict.__getitem__() when a key is not found.

Key concepts:
• __missing__(self, key) is called only by __getitem__ (d[key])
• It is NOT called by .get(), .setdefault(), or "in" checks
• It allows custom behavior for missing keys instead of KeyError
• The return value of __missing__ becomes the return value of d[key]

How it works:
• d["b"] calls dict.__getitem__(d, "b")
• "b" is not in d → __getitem__ calls self.__missing__("b")
• __missing__ returns f"no b" → "no b"
• d["b"] returns "no b"
• But "b" is NOT added to the dict — d still has only {"a": 1}

Example:
class MyDict(dict):
    def __missing__(self, key):
        return f"no {key}"

d = MyDict(a=1)
d["a"]    # 1 (key exists, __missing__ not called)
d["b"]    # "no b" (__missing__ called)
d["xyz"]  # "no xyz"
"b" in d  # False (key was never added)

Common uses:
• Custom default values for missing keys
• Logging access to missing keys
• Basis for collections.defaultdict

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 72. __missing__ does NOT add the key
  (_i: number) => ({
    q: `class MyDict(dict):\n    def __missing__(self, key):\n        return 0\nd = MyDict()\nd["x"]\nIs "x" in d?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "__missing__ returns a value but does NOT add the key to the dict. 'x' is not in d.",
    de: `By default, __missing__ only returns a value — it does not modify the dictionary.

Key concepts:
• __missing__ is called, returns 0 for d["x"]
• But it does NOT do self[key] = 0 — the key is not stored
• "x" in d → False (the key was never inserted)
• To auto-insert, you must explicitly do self[key] = value in __missing__

How it works:
• d["x"] triggers __missing__("x")
• __missing__ returns 0 → d["x"] evaluates to 0
• The dict itself is unchanged — still empty
• "x" in d checks the dict contents → False

Example:
class MyDict(dict):
    def __missing__(self, key):
        return 0

d = MyDict()
d["x"]         # 0 (returned by __missing__)
"x" in d       # False (not added)
len(d)         # 0 (still empty)
d.get("x")     # None (__missing__ is NOT called by .get())

Common uses:
• Understanding the difference between returning and storing
• __missing__ is read-only by default
• Compare with defaultdict which DOES store the default value

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 73. __missing__ that also inserts the key
  (_i: number) => ({
    q: `class MyDict(dict):\n    def __missing__(self, key):\n        self[key] = 0\n        return 0\nd = MyDict()\nd["x"]\nIs "x" in d?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "This __missing__ explicitly inserts the key with self[key]=0 before returning, so 'x' IS in d.",
    de: `If __missing__ does self[key] = value, the key IS added to the dictionary.

Key concepts:
• self[key] = 0 inside __missing__ inserts the key into the dict
• return 0 returns the value to the caller
• After d["x"], d now contains {"x": 0}
• "x" in d → True

How it works:
• d["x"] → key not found → __missing__("x") called
• __missing__ does self["x"] = 0 → adds "x" to dict
• __missing__ returns 0 → d["x"] evaluates to 0
• Now d == {"x": 0}
• "x" in d → True

Example:
class MyDict(dict):
    def __missing__(self, key):
        self[key] = 0
        return 0

d = MyDict()
d["x"]          # 0
"x" in d        # True
len(d)          # 1
d               # {"x": 0}

Common uses:
• This is essentially what collections.defaultdict does
• Auto-populating dictionaries
• Lazy initialization of dict values

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 74. Regular dict does NOT have __missing__
  (_i: number) => ({
    q: `d = {"a": 1}\nWhat happens when you access d["b"]?`,
    o: ["KeyError", "None", "0", 'Calls __missing__'],
    c: 0,
    e: "Regular dict raises KeyError for missing keys. Only dict subclasses can define __missing__.",
    de: `The built-in dict class raises KeyError when accessing a non-existent key with [].

Key concepts:
• dict.__getitem__ raises KeyError if the key is not found
• dict does NOT define __missing__ — only subclasses can
• d["b"] with no "b" key → KeyError: 'b'
• Use d.get("b") for safe access (returns None) or d.get("b", default)

How it works:
• d["b"] calls dict.__getitem__(d, "b")
• __getitem__ looks up "b" in the hash table
• Not found → checks if __missing__ exists on the class
• For plain dict, __missing__ is not defined → raises KeyError
• Subclasses can define __missing__ to customize this behavior

Example:
d = {"a": 1}
d["b"]           # KeyError: 'b'
d.get("b")       # None (safe access)
d.get("b", 0)    # 0 (with default)

Common uses:
• Always use .get() or try/except for safe dict access
• Use defaultdict or custom __missing__ for auto-defaults
• KeyError is the standard behavior for missing dict keys

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 75. defaultdict uses __missing__ with default_factory
  (_i: number) => ({
    q: `Is defaultdict essentially a dict subclass that uses __missing__ to call its default_factory?`,
    o: ["Yes", "No, it uses __getitem__", "No, it uses __init__", "No, it modifies get()"],
    c: 0,
    e: "defaultdict subclasses dict and defines __missing__ to call the default_factory.",
    de: `collections.defaultdict is a dict subclass that overrides __missing__ to provide default values.

Key concepts:
• defaultdict(factory) stores a default_factory callable
• When d[key] misses, __missing__ calls self.default_factory()
• The result is stored: self[key] = default_factory()
• This is why defaultdict(list) auto-creates empty lists

How it works:
• d = defaultdict(int) → default_factory is int
• d["x"] → key not found → __missing__("x") called
• __missing__ calls int() → 0
• Stores: self["x"] = 0
• Returns 0
• Now "x" is in the dict with value 0

Example:
from collections import defaultdict
d = defaultdict(int)
d["x"]          # 0 (int() called)
d["x"] += 1     # works: d["x"] is now 1
d               # defaultdict(int, {"x": 1})

d2 = defaultdict(list)
d2["a"].append(1)  # auto-creates list, appends 1
d2                  # {"a": [1]}

Common uses:
• Counting: defaultdict(int)
• Grouping: defaultdict(list)
• Nested dicts: defaultdict(dict)
• Any pattern needing auto-initialization

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 76. MappingProxyType — read-only view, access works
  (_i: number) => ({
    q: `from types import MappingProxyType\nd = {"a": 1}\np = MappingProxyType(d)\nWhat is p["a"]?`,
    o: ["1", "Error", "None", '{"a": 1}'],
    c: 0,
    e: "MappingProxyType creates a read-only view of a dict. Reading values works normally.",
    de: `MappingProxyType provides a read-only proxy to a dictionary.

Key concepts:
• MappingProxyType(d) wraps dict d in a read-only view
• Reading is allowed: p["a"] returns 1
• Writing is blocked: p["a"] = 2 raises TypeError
• The proxy reflects changes made to the original dict

How it works:
• MappingProxyType stores a reference to the original dict
• p["a"] delegates to d["a"] → returns 1
• All read operations work: p["a"], p.get("a"), "a" in p, len(p)
• Write operations raise TypeError

Example:
from types import MappingProxyType
d = {"a": 1}
p = MappingProxyType(d)
p["a"]         # 1
p.get("a")     # 1
"a" in p       # True
len(p)         # 1

Common uses:
• Exposing internal dicts as read-only APIs
• Preventing accidental modification of shared state
• class.__dict__ returns a mappingproxy in Python 3

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 77. MappingProxyType — writing raises TypeError
  (_i: number) => ({
    q: `from types import MappingProxyType\nd = {"a": 1}\np = MappingProxyType(d)\nWhat happens with p["b"] = 2?`,
    o: ["TypeError", "Adds 'b' to both p and d", "Adds 'b' only to p", "KeyError"],
    c: 0,
    e: "MappingProxyType is read-only. Any attempt to modify it raises TypeError.",
    de: `MappingProxyType deliberately blocks all write operations.

Key concepts:
• p["b"] = 2 → TypeError: 'mappingproxy' object does not support item assignment
• del p["a"] → TypeError
• p.update({"b": 2}) → AttributeError (no update method)
• The proxy enforces immutability of the view

How it works:
• MappingProxyType does not implement __setitem__ or __delitem__
• Any assignment triggers TypeError
• This is by design — the proxy is meant to be read-only
• To modify the data, modify the original dict d directly

Example:
from types import MappingProxyType
d = {"a": 1}
p = MappingProxyType(d)
p["b"] = 2     # TypeError!
del p["a"]     # TypeError!
d["b"] = 2     # OK — modify original dict
p["b"]         # 2 — proxy reflects the change

Common uses:
• Protecting configuration dicts from modification
• API design: expose read-only mappings
• Simulating frozen/immutable dicts

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 78. MappingProxyType reflects changes to original dict
  (_i: number) => ({
    q: `from types import MappingProxyType\nd = {"a": 1}\np = MappingProxyType(d)\nd["b"] = 2\nWhat is p["b"]?`,
    o: ["2", "KeyError", "None", "TypeError"],
    c: 0,
    e: "MappingProxyType is a live view. Changes to the original dict are visible through the proxy.",
    de: `MappingProxyType does not copy the dict — it wraps it. Changes to the original are reflected.

Key concepts:
• p is a view of d, not a copy
• Modifying d affects what p sees
• d["b"] = 2 → p["b"] is now 2
• The proxy always reflects the current state of the original dict

How it works:
• MappingProxyType stores a reference to d internally
• When you access p["b"], it reads from d["b"]
• d["b"] = 2 modifies d → p["b"] now returns 2
• The proxy has no independent state — it's purely a wrapper

Example:
from types import MappingProxyType
d = {"a": 1}
p = MappingProxyType(d)
d["b"] = 2
p["b"]          # 2
d["a"] = 99
p["a"]          # 99
del d["a"]
"a" in p        # False

Common uses:
• Understanding that MappingProxyType is a live view, not a snapshot
• Read-only access that stays in sync with the source
• Used internally by Python for class.__dict__

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 79. dict.copy() creates independent shallow copy
  (_i: number) => ({
    q: `d = {"a": 1}\nd2 = d.copy()\nd2["b"] = 2\nWhat is d?`,
    o: ['{"a": 1}', '{"a": 1, "b": 2}', "Error", "None"],
    c: 0,
    e: "dict.copy() creates a shallow copy. Modifying d2 does not affect d for top-level keys.",
    de: `dict.copy() creates a new dictionary with the same top-level key-value pairs.

Key concepts:
• d.copy() returns a new dict with the same entries
• d2 is a separate object from d
• Adding d2["b"] = 2 only affects d2, not d
• d remains {"a": 1}

How it works:
• d.copy() creates a new dict and copies all key-value pairs
• d2 is independent at the top level
• d2["b"] = 2 adds to d2 only
• d is unchanged: {"a": 1}

Example:
d = {"a": 1}
d2 = d.copy()
d2["b"] = 2
d          # {"a": 1} (unchanged)
d2         # {"a": 1, "b": 2}
d is d2    # False (different objects)

Common uses:
• Creating independent copies of dicts
• Modifying a copy without affecting the original
• Snapshot of dict state at a point in time

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 80. Shallow copy shares nested mutable objects
  (_i: number) => ({
    q: `d = {"a": {"x": 1}}\nd2 = d.copy()\nd2["a"]["y"] = 2\nWhat is d["a"]?`,
    o: ['{"x": 1, "y": 2}', '{"x": 1}', "Error", "None"],
    c: 0,
    e: "Shallow copy: the nested dict is shared. Modifying it through d2 also changes d.",
    de: `dict.copy() is a SHALLOW copy — nested mutable objects are shared, not duplicated.

Key concepts:
• d.copy() copies references to values, not the values themselves
• d["a"] and d2["a"] point to the SAME inner dict object
• Modifying the inner dict through d2 also affects d
• For independent nested copies, use copy.deepcopy()

How it works:
• d = {"a": {"x": 1}} — d["a"] points to inner dict {"x": 1}
• d2 = d.copy() — d2["a"] points to the SAME inner dict
• d2["a"]["y"] = 2 — modifies the shared inner dict
• d["a"] is the same object → now {"x": 1, "y": 2}

Example:
d = {"a": {"x": 1}}
d2 = d.copy()
d["a"] is d2["a"]       # True (same object!)
d2["a"]["y"] = 2
d["a"]                  # {"x": 1, "y": 2} (modified!)

import copy
d3 = copy.deepcopy(d)
d3["a"]["z"] = 3
d["a"]                  # {"x": 1, "y": 2} (NOT affected)

Common uses:
• Understanding shallow vs deep copy is critical for mutable data
• Use copy.deepcopy() when nested independence is needed
• Common source of bugs in Python

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 81. d.__class__ for a dict
  (_i: number) => ({
    q: `d = {"a": 1}\nWhat is d.__class__?`,
    o: ["<class 'dict'>", "<class 'object'>", "<class 'mapping'>", "Error"],
    c: 0,
    e: "d.__class__ returns the type of the object. For a dict literal, it's <class 'dict'>.",
    de: `Every Python object has a __class__ attribute that refers to its type.

Key concepts:
• __class__ is equivalent to type(obj)
• For a dict literal, __class__ is <class 'dict'>
• This works for all objects: lists, strings, custom classes, etc.
• __class__ is the class that created the instance

How it works:
• d = {"a": 1} creates a dict instance
• d.__class__ returns dict (the built-in dict type)
• type(d) also returns dict
• d.__class__ is dict → True

Example:
d = {"a": 1}
d.__class__        # <class 'dict'>
type(d)            # <class 'dict'>
d.__class__ is dict  # True
d.__class__.__name__  # "dict"

Common uses:
• Type checking: obj.__class__ is SomeType
• Introspection and debugging
• Getting the class name: obj.__class__.__name__

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 82. isinstance(True, int) → True
  (_i: number) => ({
    q: `What is isinstance(True, int)?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "bool is a subclass of int. isinstance checks the entire MRO, so True (a bool) is an int.",
    de: `bool is a subclass of int in Python, so all bools are also ints.

Key concepts:
• isinstance(obj, cls) checks if obj is an instance of cls or any subclass
• bool inherits from int: class bool(int)
• True is a bool, and bool is a subclass of int
• Therefore isinstance(True, int) is True

How it works:
• isinstance checks the method resolution order (MRO)
• bool.__mro__ = (bool, int, object)
• int is in bool's MRO → isinstance returns True
• This is why True + True == 2 and True == 1

Example:
isinstance(True, bool)     # True (directly)
isinstance(True, int)      # True (bool subclasses int)
isinstance(True, object)   # True (everything subclasses object)
isinstance(1, bool)        # False (int is NOT a bool)
type(True) is int          # False (type gives exact class)

Common uses:
• Explains why True/False behave as 1/0 in arithmetic
• Explains why True and 1 are the same dict key
• Important for understanding Python's type hierarchy

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 83. setdefault with a missing key
  (_i: number) => ({
    q: `d = {"a": 1}\nd.setdefault("b", [])\nWhat is d?`,
    o: ['{"a": 1, "b": []}', '{"a": 1}', "Error", '{"a": 1, "b": None}'],
    c: 0,
    e: "setdefault inserts the key with the given default if the key is not present. 'b' gets [].",
    de: `dict.setdefault(key, default) inserts key with default if key is missing, then returns the value.

Key concepts:
• If key is not in dict: inserts key with default value, returns default
• If key is already in dict: returns existing value, no modification
• Unlike .get(), setdefault MODIFIES the dict for missing keys
• Returns the value (new or existing)

How it works:
• d.setdefault("b", []) — "b" is not in d
• Inserts "b": [] into d
• Returns []
• d is now {"a": 1, "b": []}

Example:
d = {"a": 1}
d.setdefault("b", [])    # [] (inserted and returned)
d                        # {"a": 1, "b": []}
d.setdefault("a", 99)    # 1 (key exists, not modified)
d                        # {"a": 1, "b": []}

Common uses:
• Building lists in dicts: d.setdefault(key, []).append(value)
• Initializing missing keys with defaults
• Alternative to defaultdict for one-off defaults

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 84. dict constructor with extra kwargs
  (_i: number) => ({
    q: `d = {"a": 1}\ne = dict(d, b=2)\nWhat is e?`,
    o: ['{"a": 1, "b": 2}', '{"a": 1}', "Error", '{"b": 2}'],
    c: 0,
    e: "dict() accepts another dict plus keyword arguments. Both are merged into the new dict.",
    de: `The dict constructor can combine a mapping argument with keyword arguments.

Key concepts:
• dict(mapping, **kwargs) creates a new dict from mapping and adds kwargs
• dict(d, b=2) copies d and adds b=2
• If a key appears in both, the kwarg wins
• Returns a new dict — d is not modified

How it works:
• dict(d, b=2) first copies all entries from d: {"a": 1}
• Then adds keyword argument: b=2
• Result: {"a": 1, "b": 2}
• d remains unchanged: {"a": 1}

Example:
d = {"a": 1}
e = dict(d, b=2)       # {"a": 1, "b": 2}
f = dict(d, a=99)      # {"a": 99} — kwarg overrides
d                       # {"a": 1} (unchanged)

Common uses:
• Creating modified copies of dicts
• Adding/overriding specific keys in a new dict
• Alternative to {**d, "b": 2} (dict unpacking)

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 85. Remove key via dict comprehension
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2}\ne = {k: v for k, v in d.items() if k != "a"}\nWhat is e?`,
    o: ['{"b": 2}', '{"a": 1, "b": 2}', '{"a": 1}', "Error"],
    c: 0,
    e: "Dict comprehension with a filter: only keys where k != 'a' are included. Result: {'b': 2}.",
    de: `Dict comprehensions with conditions can filter out specific keys.

Key concepts:
• {k: v for k, v in d.items() if condition} filters entries
• if k != "a" excludes the key "a"
• Only "b": 2 passes the filter
• Result: {"b": 2}

How it works:
• Iterates over d.items(): ("a", 1), ("b", 2)
• For ("a", 1): k != "a" is False → excluded
• For ("b", 2): k != "a" is True → included
• Result: {"b": 2}

Example:
d = {"a": 1, "b": 2, "c": 3}
{k: v for k, v in d.items() if k != "a"}     # {"b": 2, "c": 3}
{k: v for k, v in d.items() if v > 1}        # {"b": 2, "c": 3}
{k: v for k, v in d.items() if k in "ac"}    # {"a": 1, "c": 3}

Common uses:
• Non-destructive key removal (original dict unchanged)
• Filtering dicts by key or value conditions
• Creating subsets of dictionaries

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 86. Popping multiple keys with list comprehension
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2, "c": 3}\n[d.pop(k) for k in ["a", "c"]]\nWhat is d?`,
    o: ['{"b": 2}', '{"a": 1, "b": 2, "c": 3}', "Error", '{"a": 1}'],
    c: 0,
    e: "d.pop(k) removes key k and returns its value. After popping 'a' and 'c', only 'b' remains.",
    de: `Using a list comprehension with d.pop(k) removes multiple keys and collects their values.

Key concepts:
• d.pop(k) removes key k from dict d and returns its value
• [d.pop(k) for k in ["a", "c"]] pops "a" and "c" sequentially
• The list comprehension returns [1, 3] (the popped values)
• d is left with only {"b": 2}

How it works:
• d.pop("a") removes "a", returns 1 → d is {"b": 2, "c": 3}
• d.pop("c") removes "c", returns 3 → d is {"b": 2}
• List comprehension result: [1, 3]
• d is now {"b": 2}

Example:
d = {"a": 1, "b": 2, "c": 3}
removed = [d.pop(k) for k in ["a", "c"]]
removed    # [1, 3]
d          # {"b": 2}

Common uses:
• Removing multiple known keys from a dict
• Collecting removed values for processing
• Batch key removal

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 87. dict_keys equality with a set
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2}\nWhat is d.keys() == {"a", "b"}?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "dict_keys views support equality comparison with sets. Same elements → True.",
    de: `Dictionary keys views are set-like and support equality comparison with sets.

Key concepts:
• d.keys() returns a dict_keys view
• dict_keys supports == comparison with sets
• {"a", "b"} == {"a", "b"} → the contents match → True
• Order doesn't matter in set comparison

How it works:
• d.keys() contains "a" and "b"
• {"a", "b"} is a set containing "a" and "b"
• Python checks: same elements in both? Yes
• Returns True

Example:
d = {"a": 1, "b": 2}
d.keys() == {"a", "b"}      # True
d.keys() == {"b", "a"}      # True (order irrelevant)
d.keys() == {"a"}            # False (missing "b")
d.keys() == {"a", "b", "c"} # False (extra "c")

Common uses:
• Validating expected keys in a dict
• Checking dict schema: d.keys() == required_keys
• Set-like comparisons without explicit conversion

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 88. dict_keys inequality with a set
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2}\nWhat is d.keys() == {"a", "c"}?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "The keys are {'a', 'b'} but the set is {'a', 'c'} — different elements, so False.",
    de: `When dict keys and a set have different elements, equality returns False.

Key concepts:
• d.keys() is {"a", "b"}
• {"a", "c"} has "c" instead of "b"
• They are not equal → False
• Both must have exactly the same elements for True

How it works:
• Compares elements: "a" is in both, "b" is only in keys, "c" is only in set
• Not all elements match → False

Example:
d = {"a": 1, "b": 2}
d.keys() == {"a", "c"}    # False
d.keys() == {"a", "b"}    # True
d.keys() == set()          # False (unless dict is empty)

Common uses:
• Detecting unexpected keys: if d.keys() != expected
• Schema validation
• Comparing key sets between dicts

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 89. Counter.most_common
  (_i: number) => ({
    q: `from collections import Counter\nWhat is Counter("abracadabra").most_common(3)?`,
    o: ['[("a", 5), ("b", 2), ("r", 2)]', '[("a", 5), ("b", 2), ("c", 1)]', '[("a", 5)]', "Error"],
    c: 0,
    e: "Counter counts each character. 'a' appears 5 times. most_common(3) returns the 3 most frequent.",
    de: `Counter is a dict subclass that counts hashable elements. most_common(n) returns the n most frequent.

Key concepts:
• Counter("abracadabra") counts each character: a=5, b=2, r=2, c=1, d=1
• .most_common(3) returns the 3 elements with highest counts
• Returns list of (element, count) tuples in descending order
• Ties are broken by insertion order (Python 3.7+)

How it works:
• "abracadabra" → Counter({'a': 5, 'b': 2, 'r': 2, 'c': 1, 'd': 1})
• .most_common(3) → [('a', 5), ('b', 2), ('r', 2)]
• 'a' has 5 occurrences (most frequent)
• 'b' and 'r' both have 2 (tied, order depends on first appearance)

Example:
from collections import Counter
c = Counter("abracadabra")
c.most_common(3)     # [('a', 5), ('b', 2), ('r', 2)]
c.most_common(1)     # [('a', 5)]
c.most_common()      # all elements, sorted by count

Common uses:
• Finding most frequent elements in sequences
• Word frequency analysis
• Top-N queries on data

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 90. Converting dict items to list, accessing first pair
  (_i: number) => ({
    q: `d = {"a": 1}\nWhat is list(d.items())[0]?`,
    o: ['("a", 1)', '"a"', "1", "Error"],
    c: 0,
    e: "d.items() returns key-value pairs as tuples. The first (and only) item is ('a', 1).",
    de: `dict.items() returns a view of (key, value) tuples. Converting to list and indexing retrieves a specific pair.

Key concepts:
• d.items() returns dict_items view: [("a", 1)]
• list(d.items()) converts to a list of tuples
• [0] gets the first tuple: ("a", 1)
• Each item is a (key, value) tuple

How it works:
• d = {"a": 1} has one entry
• d.items() → dict_items([("a", 1)])
• list(...) → [("a", 1)]
• [0] → ("a", 1) — a tuple

Example:
d = {"a": 1, "b": 2}
list(d.items())[0]    # ("a", 1)
list(d.items())[1]    # ("b", 2)
list(d.items())       # [("a", 1), ("b", 2)]

Common uses:
• Accessing dict items by position (Python 3.7+ preserves order)
• Iterating with index over dict items
• Converting dict to list of tuples for processing

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 91. Unpacking creates an equal dict
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2}\nWhat is {**d} == d?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "Dict unpacking {**d} creates a new dict with the same contents. Equal contents → True.",
    de: `The ** unpacking operator creates a new dictionary with identical key-value pairs.

Key concepts:
• {**d} creates a new dict with all entries from d
• The new dict has the same keys and values
• == compares contents: same contents → True
• The objects are different (not the same identity)

How it works:
• {**d} unpacks d into a new dict literal
• {"a": 1, "b": 2} is created
• == checks if all key-value pairs match → True

Example:
d = {"a": 1, "b": 2}
e = {**d}
e == d       # True (same contents)
e is d       # False (different objects)
{**d, "c": 3}  # {"a": 1, "b": 2, "c": 3}

Common uses:
• Shallow copying: e = {**d}
• Merging dicts: {**d1, **d2}
• Adding entries: {**d, "new_key": value}

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 92. Unpacking creates a different object
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2}\nWhat is {**d} is d?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "{**d} creates a NEW dict object. 'is' checks identity, not equality. Different objects → False.",
    de: `The 'is' operator checks if two variables refer to the exact same object in memory.

Key concepts:
• {**d} creates a new dict — a different object from d
• 'is' checks identity (same object in memory)
• Different objects → is returns False
• Even though {**d} == d is True, {**d} is d is False

How it works:
• {**d} allocates a new dict object and copies entries
• id({**d}) != id(d) — different memory addresses
• 'is' compares id() values → False

Example:
d = {"a": 1, "b": 2}
e = {**d}
e is d        # False (different objects)
e == d        # True (same contents)
id(e) == id(d)  # False

Common uses:
• Understanding == vs is for containers
• Confirming that unpacking creates independent copies
• Avoiding aliasing bugs by creating new dicts

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 93. exec modifying a dict
  (_i: number) => ({
    q: `d = {}\nexec("d['a'] = 1")\nWhat is d?`,
    o: ['{"a": 1}', '{}', "Error", "None"],
    c: 0,
    e: "exec() executes the string as Python code. It modifies d in the current scope.",
    de: `exec() dynamically executes Python code from a string, and can modify variables in scope.

Key concepts:
• exec("d['a'] = 1") executes d['a'] = 1 as Python code
• d is accessible in the exec'd code's scope
• The assignment modifies d in place
• d becomes {"a": 1}

How it works:
• exec receives the string "d['a'] = 1"
• It compiles and executes this as Python code
• d is found in the enclosing scope (locals/globals)
• d['a'] = 1 adds the key-value pair to d
• After exec, d is {"a": 1}

Example:
d = {}
exec("d['a'] = 1")
d          # {"a": 1}
exec("d['b'] = d['a'] + 1")
d          # {"a": 1, "b": 2}

Common uses:
• Dynamic code execution (use with caution!)
• Code generation and evaluation
• Security risk: never exec untrusted input

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 94. json.loads returns a dict
  (_i: number) => ({
    q: `What type does json.loads('{"a": 1}') return?`,
    o: ["dict", "str", "list", "JSON object"],
    c: 0,
    e: "json.loads() parses a JSON string and returns a Python dict for JSON objects.",
    de: `The json module converts JSON strings to Python objects. JSON objects become Python dicts.

Key concepts:
• json.loads(s) parses a JSON string into Python objects
• JSON objects ({...}) → Python dict
• JSON arrays ([...]) → Python list
• JSON strings → Python str, numbers → int/float, true/false → True/False, null → None

How it works:
• json.loads('{"a": 1}') parses the JSON string
• {"a": 1} is a JSON object
• Converted to Python dict: {"a": 1}
• type(result) is dict

Example:
import json
result = json.loads('{"a": 1}')
type(result)     # <class 'dict'>
result           # {"a": 1}
result["a"]      # 1

json.loads('[1, 2, 3]')      # [1, 2, 3] (list)
json.loads('"hello"')        # "hello" (str)
json.loads('null')           # None

Common uses:
• Parsing API responses
• Reading JSON configuration files
• Data exchange between systems

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 95. next(iter(d)) — first key
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2, "c": 3}\nWhat is next(iter(d))?`,
    o: ['"a"', '"c"', '("a", 1)', "Error"],
    c: 0,
    e: "iter(d) iterates over keys. next() returns the first key: 'a' (insertion order in Python 3.7+).",
    de: `Iterating over a dict yields its keys. next(iter(d)) returns the first key.

Key concepts:
• iter(d) creates an iterator over d's keys
• next() returns the first element from the iterator
• In Python 3.7+, dicts preserve insertion order
• The first key inserted is "a"

How it works:
• iter(d) yields keys: "a", "b", "c" (in insertion order)
• next() retrieves the first yielded value: "a"
• Only the key is returned, not the value or a tuple

Example:
d = {"a": 1, "b": 2, "c": 3}
next(iter(d))           # "a"
next(iter(d.values()))  # 1
next(iter(d.items()))   # ("a", 1)

Common uses:
• Getting the first key without converting to list
• Efficient — O(1), doesn't create a list of all keys
• Peeking at dict contents

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 96. next(reversed(d)) — last key (Python 3.8+)
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2, "c": 3}\nWhat is next(reversed(d))?`,
    o: ['"c"', '"a"', '("c", 3)', "Error"],
    c: 0,
    e: "reversed(d) iterates keys in reverse insertion order. next() returns the last key: 'c' (Python 3.8+).",
    de: `Since Python 3.8, dicts support reversed() which iterates keys in reverse insertion order.

Key concepts:
• reversed(d) yields keys in reverse order: "c", "b", "a"
• next() returns the first from the reversed iterator: "c"
• This is the last key that was inserted
• Only works in Python 3.8+ (dict.__reversed__ was added)

How it works:
• reversed(d) creates a reverse iterator over d's keys
• next() retrieves the first element: "c" (last inserted key)
• Efficient — doesn't need to build a list

Example:
d = {"a": 1, "b": 2, "c": 3}
next(reversed(d))            # "c" (last key)
list(reversed(d))            # ["c", "b", "a"]
next(reversed(d.values()))   # 3 (last value)
next(reversed(d.items()))    # ("c", 3) (last item)

Common uses:
• Getting the last inserted key efficiently
• Iterating dicts in reverse order
• Stack-like access to dict entries (LIFO)

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 97. enumerate as dict via comprehension
  (_i: number) => ({
    q: `What is {k: v for k, v in enumerate("abc")}?`,
    o: ['{0: "a", 1: "b", 2: "c"}', '{"a": 0, "b": 1, "c": 2}', "Error", '{("a",): 0}'],
    c: 0,
    e: "enumerate yields (index, value) pairs. The comprehension maps index → character.",
    de: `enumerate produces (index, element) pairs, which can be unpacked in a dict comprehension.

Key concepts:
• enumerate("abc") yields (0, "a"), (1, "b"), (2, "c")
• k, v unpacks each tuple: k=index, v=character
• {k: v ...} creates a dict mapping index to character
• Result: {0: "a", 1: "b", 2: "c"}

How it works:
• enumerate("abc"):
  - (0, "a") → k=0, v="a"
  - (1, "b") → k=1, v="b"
  - (2, "c") → k=2, v="c"
• Dict comprehension: {0: "a", 1: "b", 2: "c"}

Example:
{k: v for k, v in enumerate("abc")}
# {0: "a", 1: "b", 2: "c"}

dict(enumerate("abc"))  # same result
{v: k for k, v in enumerate("abc")}  # reversed: {"a": 0, "b": 1, "c": 2}

Common uses:
• Creating index-to-element mappings
• dict(enumerate(seq)) is equivalent
• Building lookup tables from sequences

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 98. tuple(d.items())
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2}\nWhat is tuple(d.items())?`,
    o: ['(("a", 1), ("b", 2))', '("a", "b")', "(1, 2)", "Error"],
    c: 0,
    e: "d.items() yields (key, value) tuples. tuple() converts the view to a tuple of tuples.",
    de: `Converting dict.items() to a tuple creates a tuple of (key, value) pairs.

Key concepts:
• d.items() returns dict_items([("a", 1), ("b", 2)])
• tuple() converts this view to a tuple
• Result: (("a", 1), ("b", 2))
• Each inner element is a (key, value) tuple

How it works:
• d.items() is a view of key-value pairs
• tuple(view) creates a tuple from the iterable
• Each pair becomes a tuple inside the outer tuple

Example:
d = {"a": 1, "b": 2}
tuple(d.items())    # (("a", 1), ("b", 2))
tuple(d.keys())     # ("a", "b")
tuple(d.values())   # (1, 2)
list(d.items())     # [("a", 1), ("b", 2)]

Common uses:
• Converting dict to hashable form (for use as dict key or set element)
• Serializing dict structure
• Comparing dict contents as ordered sequences

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 99. Multiple updates — last wins
  (_i: number) => ({
    q: `d = {"a": 1}\nd.update({"a": 2})\nd.update(a=3)\nWhat is d?`,
    o: ['{"a": 3}', '{"a": 1}', '{"a": 2}', "Error"],
    c: 0,
    e: "Each update overwrites 'a'. First to 2, then to 3. Final value: {'a': 3}.",
    de: `dict.update() modifies the dict in place, overwriting existing keys with new values.

Key concepts:
• d.update({"a": 2}) sets d["a"] to 2
• d.update(a=3) sets d["a"] to 3 (keyword argument syntax)
• Each call overwrites the previous value
• Final state: {"a": 3} — last update wins

How it works:
• d starts as {"a": 1}
• d.update({"a": 2}) → d is {"a": 2}
• d.update(a=3) → d is {"a": 3}
• update() accepts both dict arguments and keyword arguments

Example:
d = {"a": 1}
d.update({"a": 2})     # d = {"a": 2}
d.update(a=3)          # d = {"a": 3}
d.update({"a": 4}, a=5)  # d = {"a": 5} — kwarg overrides dict arg

Common uses:
• Merging data from multiple sources
• Configuration override chains
• Understanding that update() is in-place and last-write-wins

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 100. all() with dict keys
  (_i: number) => ({
    q: `What is all(k == k.lower() for k in {"abc": 1, "def": 2})?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "Iterating a dict yields keys. Both 'abc' and 'def' are lowercase, so all() returns True.",
    de: `all() returns True if all elements of the iterable are truthy.

Key concepts:
• Iterating over a dict yields its keys: "abc", "def"
• k == k.lower() checks if each key is already lowercase
• "abc" == "abc".lower() → "abc" == "abc" → True
• "def" == "def".lower() → "def" == "def" → True
• all([True, True]) → True

How it works:
• Generator: (k == k.lower() for k in {"abc": 1, "def": 2})
• k = "abc": "abc" == "abc" → True
• k = "def": "def" == "def" → True
• all() receives True, True → returns True

Example:
all(k == k.lower() for k in {"abc": 1, "def": 2})  # True
all(k == k.lower() for k in {"ABC": 1, "def": 2})  # False
all(k == k.lower() for k in {})                     # True (vacuous truth)
any(k == k.upper() for k in {"ABC": 1, "def": 2})  # True

Common uses:
• Validating that all dict keys meet a condition
• Schema validation: all keys lowercase, all values positive, etc.
• Data quality checks on dictionaries

Key Concepts:
• See the key concepts and explanation above for the main ideas and bullet points.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
];
