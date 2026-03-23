// --- LEVEL 1 EXPERT B: Object Identity, Advanced Types, Edge Cases (50 Questions) ---
// Questions 51-100 of expert set. Each is TRULY UNIQUE.
export const level1ExpertB = [
  // 51. Small integer caching: id(42) == id(42)
  (_i: number) => ({
    q: `What is the result of: id(42) == id(42)?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "CPython caches small integers (-5 to 256), so id() returns the same value for 42.",
    de: `In CPython, small integers from -5 to 256 are cached (interned) as singleton objects. This means every reference to 42 points to the exact same object in memory, so id(42) returns the same integer both times.

Key Concepts:
• id() returns the unique identity (memory address) of an object
• Small integer caching is a CPython optimization, not a language guarantee
• The cache range is -5 to 256 inclusive
• Outside this range, integers may or may not be the same object

Example: id(42) == id(42) → True because 42 is within the cached range.

Key Distinctions:
• id() returns the current object address; small ints may be cached so id(42)==id(42) is often True.
• This is about identity of int objects, not value equality across separate literals in all implementations.

How It Works:
• CPython may reuse the same int object for small integers; two id(42) calls can see the same address.

Step-by-Step Execution:
1. Evaluate left id(42) → integer address A.
2. Evaluate right id(42) → possibly same address A.
3. == compares integers A==A → True.

Order of Operations:
• Calls happen left then right; then equality.

Common Use Cases:
• Teaching that identity and value differ; debugging "is" vs == for ints.

Edge Cases:
• Huge integers or different interpreters: do not rely on id equality for logic.

Performance Considerations:
• id() is a fast C pointer read.

Examples:
• x = 42; id(x) == id(x)  # True
• id([]) == id([])  # False (new lists)

Notes:
• Never use id() for equality checks in production code — use == for values.`
  }),
  // 52. Mutable objects are never identical when created separately
  (_i: number) => ({
    q: `a = []; b = []; what is a is b?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "Each [] creates a new list object, so they are not the same object.",
    de: `Every time you write [], Python creates a brand-new list object in memory. Even though both a and b are empty lists and a == b is True (equal values), they are distinct objects with different identities.

Key Concepts:
• 'is' checks identity (same object in memory), not equality
• '==' checks value equality
• Mutable objects (lists, dicts, sets) are always distinct when created separately
• Each constructor call or literal creates a new object

Example: a = []; b = []; a is b → False. But a == b → True because both are empty lists.

Key Distinctions:
• Two separate [] constructs allocate two distinct list objects — a is b is False.
• Both are empty but not the same object in memory.

How It Works:
• Each list literal runs list.__new__ and fills; identities differ.

Step-by-Step Execution:
1. Create first empty list, bind a.
2. Create second empty list, bind b.
3. a is b → False.

Order of Operations:
• Assignments left to right; then is comparison.

Common Use Cases:
• Avoid assuming two fresh [] share identity; use a.clear() or one shared variable if you need one list.

Edge Cases:
• a = b = [] makes one list — different question.

Performance Considerations:
• Two small empty list allocations are cheap but not free.

Examples:
• [] is []  # typically False

Notes:
• Default-argument pitfall: def f(x=[]): mutates one list across calls.`
  }),
  // 53. List equality with ==
  (_i: number) => ({
    q: `a = [1, 2]; b = [1, 2]; what is a == b?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "== compares values: both lists contain the same elements.",
    de: `The == operator compares values, not identity. Two lists are equal if they have the same length and all corresponding elements are equal.

Key Concepts:
• == performs value comparison for all built-in types
• Lists are equal if they contain the same elements in the same order
• This is different from 'is' which checks if two names reference the same object
• Python calls the __eq__ method internally for == comparisons

Example: [1, 2] == [1, 2] → True because both lists have identical elements.

Key Distinctions:
• == on lists compares elements pairwise: [1,2] == [1,2] → True.
• Structural equality does not require the same object identity.

How It Works:
• list.__eq__ walks indices; int 1==1 and 2==2.

Step-by-Step Execution:
1. Build left list [1,2].
2. Build right list [1,2].
3. Elementwise == → True.

Order of Operations:
• Lists evaluated, then ==.

Common Use Cases:
• Comparing sequences from different sources (copy vs original).

Edge Cases:
• Nested lists: deep equality rules; NaN breaks reflexivity in floats.

Performance Considerations:
• O(n); early exit on first mismatch.

Examples:
• [1] == [1.0]  # True in Python 3 for this int/float pair

Notes:
• For numpy arrays, == behaves differently — this is plain list.`
  }),
  // 54. List identity with is
  (_i: number) => ({
    q: `a = [1, 2]; b = [1, 2]; what is a is b?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "Each list literal creates a separate object in memory.",
    de: `Even though a and b have the same values, they are two separate list objects. The 'is' operator checks whether both variables point to the exact same object in memory.

Key Concepts:
• 'is' checks object identity (same memory address)
• Two list literals always create two distinct objects
• a is b → False, but a == b → True
• Only assignment (b = a) makes two variables reference the same object

Example: a = [1, 2]; b = [1, 2]; a is b → False. id(a) != id(b).

Key Distinctions:
• Two list literals with same contents are still different objects — is is False.
• == can be True while is is False.

How It Works:
• is compares object identity; two constructions → two ids.

Step-by-Step Execution:
1. First [1,2] object.
2. Second [1,2] object.
3. is → False.

Order of Operations:
• Build both lists, then is.

Common Use Cases:
• Caching: detect if two names refer to same underlying list.

Edge Cases:
• Interning does not apply to lists.

Performance Considerations:
• Two allocations vs one — memory aware in hot loops.

Examples:
• a=[1,2]; b=[1,2]; a==b, a is b

Notes:
• Copy with list(x) or x.copy() if you need a duplicate, not an alias.`
  }),
  // 55. Same reference via assignment
  (_i: number) => ({
    q: `a = [1, 2]; b = a; what is a is b?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "b = a makes b reference the same object as a.",
    de: `When you write b = a, you're not copying the list — you're making b point to the exact same list object that a points to. Both names now reference one object.

Key Concepts:
• Assignment with = creates a new reference, not a copy
• After b = a, both variables point to the same object
• Modifying through one name affects the other: a.append(3) also changes b
• To create an independent copy, use b = a.copy() or b = a[:]

Example: a = [1, 2]; b = a; a is b → True. a.append(3) makes b == [1, 2, 3] too.

Key Distinctions:
• Assignment aliases the same list object — a is b is True.
• Mutating a mutates b.

How It Works:
• b binds to the object already bound to a.

Step-by-Step Execution:
1. Create [1,2], bind a.
2. b = a binds same object.
3. a is b → True.

Order of Operations:
• Assignment then comparison.

Common Use Cases:
• Passing lists to functions — shared mutable state.

Edge Cases:
• Rebinding a or b breaks sharing.

Performance Considerations:
• No copy — O(1) alias.

Examples:
• a=[1]; b=a; b.append(2); a  # [1,2]

Notes:
• Use b = a.copy() or list(a) for a shallow duplicate.`
  }),
  // 56. String interning
  (_i: number) => ({
    q: `a = "hello"; b = "hello"; what is a is b?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "Python interns short string literals, so they share the same object.",
    de: `CPython automatically interns (caches) string literals that look like identifiers. Since "hello" is a simple alphanumeric string, Python reuses the same object for both a and b.

Key Concepts:
• String interning means identical string literals share one object
• CPython interns strings that look like identifiers (letters, digits, underscores)
• Strings with spaces or special characters may not be interned
• This is an implementation optimization, not a language guarantee
• Always use == for string comparison, never 'is'

Example: a = "hello"; b = "hello"; a is b → True due to interning. But rely on == for correctness.

Key Distinctions:
• CPython interns many short strings — identical "hello" literals may share identity; is can be True.
• Do not rely on string interning for program logic across versions.

How It Works:
• Implementation may reuse str objects for compile-time constants.

Step-by-Step Execution:
1. Bind a and b to str "hello".
2. a is b → often True for literals in CPython.

Order of Operations:
• Assignments then is.

Common Use Cases:
• Micro-optimization curiosity only.

Edge Cases:
• Strings built at runtime: "".join(...) may not intern.

Performance Considerations:
• == for str compares content and is the portable choice.

Examples:
• ("hello" + "") is "hello"  # implementation-dependent

Notes:
• PEP 8: use == for str equality, reserve is for None and sentinels.`
  }),
  // 57. Tuple equality
  (_i: number) => ({
    q: `a = (1, 2); b = (1, 2); what is a == b?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "Tuples with the same elements in the same order are equal.",
    de: `The == operator compares tuples element by element. If all corresponding elements are equal and the tuples have the same length, they are considered equal.

Key Concepts:
• Tuple equality checks each element pair
• Order matters: (1, 2) != (2, 1)
• Tuples can contain any types: (1, "a", True) == (1, "a", True)
• Unlike lists, tuples are immutable — but equality comparison works the same way

Example: (1, 2) == (1, 2) → True. (1, 2) == (2, 1) → False.

Key Distinctions:
• Tuple equality is elementwise like lists; (1,2)==(1,2) → True.
• Tuples are immutable but two literals still can be distinct objects — == ignores identity here.

How It Works:
• tuple.__eq__ compares each slot.

Step-by-Step Execution:
1. Build (1,2) and (1,2).
2. == → True.

Order of Operations:
• Tuple literals then ==.

Common Use Cases:
• Keys in dict when hashable; comparing records.

Edge Cases:
• Single-element tuple needs comma: (1,) not (1).

Performance Considerations:
• Small tuples compare very fast.

Examples:
• (1,2) == [1,2]  # False (different types)

Notes:
• Namedtuple adds field names but equality still value-based.`
  }),
  // 58. type() equality with ==
  (_i: number) => ({
    q: `What is the result of: type(42) == int?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "type(42) returns the int class, which equals int.",
    de: `type(42) returns <class 'int'>, which is the int class itself. Comparing it with == to int checks if they are the same type object, and they are.

Key Concepts:
• type() returns the class/type of an object
• int, str, float, etc. are type objects in Python
• type(42) == int is True because type(42) IS int
• This works for all built-in types: type("hi") == str → True

Example: type(42) == int → True. type(42) == float → False.

Key Distinctions:
• type(42) returns the class int; comparing to int with == is True in Python 3.
• Prefer isinstance for subclass checks.

How It Works:
• type() returns the class object; int is that same object for plain int instances.

Step-by-Step Execution:
1. type(42) → <class 'int'> (the int class).
2. Compare to name int → True.

Order of Operations:
• type call, then ==.

Common Use Cases:
• REPL exploration of types.

Edge Cases:
• bool is subclass of int — type(True) is bool, not int.

Performance Considerations:
• type() is cheap; repeated checks in hot paths: consider isinstance.

Examples:
• type(42) == int  # True
• isinstance(True, int)  # True

Notes:
• For API validation, isinstance(x, int) is usually better than type(x)==int.`
  }),
  // 59. type() identity with is
  (_i: number) => ({
    q: `What is the result of: type(42) is int?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "type(42) returns the exact int class object.",
    de: `type(42) returns the int type object itself, not a copy. Since there's only one int type object in Python, type(42) is int checks identity and returns True.

Key Concepts:
• Built-in types like int, str, float are singleton type objects
• type(x) is SomeType is a common (and slightly faster) way to check types
• However, isinstance() is usually preferred because it handles inheritance
• type(True) is int → False (it's bool, a subclass), but isinstance(True, int) → True

Example: type(42) is int → True. But prefer isinstance(42, int) in most cases.

Key Distinctions:
• type(42) returns the int class object; comparing with is to int is True — same singleton class object.
• Works because int is the exact class of 42.

How It Works:
• type(o) is cls checks exact type, no subclasses matched unless cls is the metaclass story.

Step-by-Step Execution:
1. type(42) yields int class.
2. int is int → True.

Order of Operations:
• type then is.

Common Use Cases:
• Exact-type checks (reject bool if you need type(x) is int — rare).

Edge Cases:
• Subclass instances: type may differ from base.

Performance Considerations:
• is on class objects is pointer compare.

Examples:
• type(3.14) is float  # True

Notes:
• isinstance(True, int) is True but type(True) is int is False — use the right test.`
  }),
  // 60. bool is subclass of int
  (_i: number) => ({
    q: `What is isinstance(True, int)?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "bool is a subclass of int, so True is an instance of int.",
    de: `In Python, bool is a subclass of int. This means True and False are technically integers. isinstance() checks if an object is an instance of a class or any of its subclasses.

Key Concepts:
• bool inherits from int: class bool(int)
• True == 1 and False == 0 in all numeric contexts
• isinstance(True, int) → True because bool is a subclass of int
• type(True) is int → False (type() doesn't check subclasses)
• This is why you can do math with booleans: True + True == 2

Example: isinstance(True, int) → True. isinstance(True, bool) → True too.

Key Distinctions:
• bool subclasses int in Python; isinstance(True, int) is True.
• type(True) is bool, not int — isinstance vs type difference.

How It Works:
• isinstance walks the MRO; bool → int → object.

Step-by-Step Execution:
1. Check True against int — bool is subclass of int.
2. True.

Order of Operations:
• Function call isinstance(True, int).

Common Use Cases:
• Accepting bool where int allowed in numeric APIs (sometimes undesirable).

Edge Cases:
• If you need to exclude bool: isinstance(x, int) and not isinstance(x, bool).

Performance Considerations:
• isinstance is slightly heavier than type== but usually negligible.

Examples:
• isinstance(1, int)  # True

Notes:
• Explicitly filter bool when 0/1-only ints matter.`
  }),
  // 61. isinstance with tuple of types
  (_i: number) => ({
    q: `What is isinstance(42, (int, float))?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "isinstance() accepts a tuple of types and returns True if the object matches any.",
    de: `isinstance() can take a tuple of types as its second argument. It returns True if the object is an instance of any of the types in the tuple.

Key Concepts:
• isinstance(obj, (type1, type2, ...)) checks against multiple types
• Returns True if obj is an instance of any type in the tuple
• This is cleaner than: isinstance(x, int) or isinstance(x, float)
• Works with any number of types in the tuple

Example: isinstance(42, (int, float)) → True because 42 is an int. isinstance("hi", (int, float)) → False.

Key Distinctions:
• Second argument can be a tuple of types — isinstance returns True if any matches.
• 42 matches int.

How It Works:
• isinstance iterates the tuple internally (conceptually).

Step-by-Step Execution:
1. isinstance(42, (int, float)).
2. int matches first — True.

Order of Operations:
• Single call.

Common Use Cases:
• Numeric union typing at runtime validation.

Edge Cases:
• Empty tuple of types is invalid.

Performance Considerations:
• Short-circuits on first match.

Examples:
• isinstance(3.0, (int, float))  # True

Notes:
• For static typing use Union[int, float] in annotations.`
  }),
  // 62. issubclass(bool, int)
  (_i: number) => ({
    q: `What is issubclass(bool, int)?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "bool is defined as a subclass of int in Python.",
    de: `issubclass() checks if the first class is a subclass of the second. In Python, bool is explicitly defined as a subclass of int, inheriting all integer operations.

Key Concepts:
• issubclass(A, B) returns True if A is a subclass of B
• bool inherits from int — this is by design, not accident
• issubclass(int, int) → True (a class is considered a subclass of itself)
• issubclass(int, bool) → False (int is not a subclass of bool)

Example: issubclass(bool, int) → True. issubclass(bool, object) → True (everything inherits from object).

Key Distinctions:
• bool is declared as subclass of int — historical compatibility (True+True==2).
• issubclass(bool, int) → True.

How It Works:
• Checks the class hierarchy flag on bool.

Step-by-Step Execution:
1. issubclass(bool, int).
2. True.

Order of Operations:
• Builtin call.

Common Use Cases:
• Understanding why isinstance(True, int) works.

Edge Cases:
• issubclass(int, bool) is False.

Performance Considerations:
• Cheap hierarchy lookup.

Examples:
• issubclass(bool, object)  # True

Notes:
• Avoid arithmetic on bool in real code even if it works.`
  }),
  // 63. id() returns an integer
  (_i: number) => ({
    q: `What type does id("hello") return?`,
    o: ["int", "str", "float", "NoneType"],
    c: 0,
    e: "id() always returns an integer representing the object's unique identity.",
    de: `The id() function returns an integer that uniquely identifies an object during its lifetime. In CPython, this is the memory address of the object.

Key Concepts:
• id() always returns an int
• The returned integer is unique for each living object
• In CPython, id() returns the memory address
• Two objects with non-overlapping lifetimes may have the same id()
• id() is used internally by the 'is' operator: (a is b) ≡ (id(a) == id(b))

Example: id("hello") returns something like 140234866534192 — always an integer.

Key Distinctions:
• id() always returns an int in Python 3 — the address-like identifier.
• The quiz asks type of that value — int.

How It Works:
• id returns Py_ssize_t wrapped as int.

Step-by-Step Execution:
1. id("hello") → some int.
2. type(that) → int.

Order of Operations:
• Inner id, outer type.

Common Use Cases:
• Debugging object identity.

Edge Cases:
• IDs can be reused after GC — do not store long-term.

Performance Considerations:
• id is O(1).

Examples:
• type(id([]))  # int

Notes:
• id values are only unique among simultaneously live objects.`
  }),
  // 64. What id() represents
  (_i: number) => ({
    q: `What does the id() function return for an object?`,
    o: ["A unique integer identifier", "The object's value", "The object's type", "The object's size in bytes"],
    c: 0,
    e: "id() returns a unique integer that identifies the object during its lifetime.",
    de: `id() is a built-in function that returns the identity of an object — a unique integer guaranteed to be unique among simultaneously existing objects.

Key Concepts:
• id() returns an integer, not a string or type
• The identity is unique for the object's lifetime
• In CPython, it corresponds to the memory address
• Two variables with the same id() are the same object (a is b)
• id() is not the same as hash() — hash is for dictionary keys

Example: x = [1, 2]; id(x) might return 140234866534192. This number uniquely identifies that specific list object.

Key Distinctions:
• id(obj) returns an integer identifier; in CPython it is typically the memory address of the PyObject.
• It is an implementation detail exposed as int.

How It Works:
• Calls PyObject pointer cast to int in CPython.

Step-by-Step Execution:
1. Pass object to id.
2. Return integer.

Order of Operations:
• Call.

Common Use Cases:
• Debugging "is this the same object".

Edge Cases:
• After del, id may theoretically repeat for new objects.

Performance Considerations:
• Very fast.

Examples:
• hex(id(a))  # sometimes seen in tutorials

Notes:
• Never persist ids to disk as stable keys.`
  }),
  // 65. None is a singleton
  (_i: number) => ({
    q: `a = None; b = None; what is a is b?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "None is a singleton — there is only one None object in Python.",
    de: `Python guarantees that None is a singleton: there is exactly one None object. Every variable assigned None points to that same object, so 'is' always returns True.

Key Concepts:
• None is a singleton — only one instance exists
• Always use 'is' to compare with None, not ==
• PEP 8 recommends: if x is None, not if x == None
• None is the return value of functions that don't explicitly return anything
• None is falsy: bool(None) → False

Example: a = None; b = None; a is b → True. id(a) == id(b) → True.

Key Distinctions:
• None is a singleton — a is b when both assigned None is always True.
• Same as None is None.

How It Works:
• Single None object in process.

Step-by-Step Execution:
1. a = None; b = None.
2. a is b → True.

Order of Operations:
• Assignments then is.

Common Use Cases:
• Optional parameter defaults.

Edge Cases:
• Only one None exists.

Performance Considerations:
• Identity check fastest.

Examples:
• x = None; x is None

Notes:
• Use is None, not == None.`
  }),
  // 66. int() truncates toward zero (positive)
  (_i: number) => ({
    q: `What is int(3.9)?`,
    o: ["3", "4", "3.9", "Error"],
    c: 0,
    e: "int() truncates the decimal part — it does not round.",
    de: `int() converts a float to an integer by truncating toward zero. It simply removes the decimal part without rounding.

Key Concepts:
• int() truncates, it does NOT round
• int(3.9) → 3 (not 4)
• int(3.1) → 3
• For rounding, use round(): round(3.9) → 4
• For floor/ceiling, use math.floor() / math.ceil()

Example: int(3.9) → 3. The .9 is simply discarded.

Key Distinctions:
• int() truncates toward zero: int(3.9) → 3, not floor for negatives separately handled.
• For positive floats, same as math.trunc.

How It Works:
• Converts float to int by dropping fractional part toward zero.

Step-by-Step Execution:
1. Float 3.9.
2. Truncate → 3.

Order of Operations:
• Call int with one argument.

Common Use Cases:
• Quick coercion; beware loss of information.

Edge Cases:
• int(1e23) may lose precision — float issues.

Performance Considerations:
• C-level conversion.

Examples:
• int(-3.9)  # -3

Notes:
• For true floor use math.floor for positives/negatives semantics differ from trunc for negatives? int(-3.9) is -3, floor is -4.`
  }),
  // 67. int() truncates toward zero (negative)
  (_i: number) => ({
    q: `What is int(-3.9)?`,
    o: ["-3", "-4", "3", "Error"],
    c: 0,
    e: "int() truncates toward zero, so -3.9 becomes -3, not -4.",
    de: `int() truncates toward zero for negative numbers too. This means int(-3.9) gives -3, not -4. This is different from math.floor(-3.9) which gives -4.

Key Concepts:
• int() always truncates toward zero
• int(-3.9) → -3 (closer to zero than -4)
• math.floor(-3.9) → -4 (toward negative infinity)
• math.ceil(-3.9) → -3 (toward positive infinity)
• The // operator floors, not truncates: -7 // 2 → -4

Example: int(-3.9) → -3. int(-0.5) → 0. The decimal is always dropped toward zero.

Key Distinctions:
• Truncation toward zero: -3.9 → -3 (not floor -4).
• Distinct from math.floor.

How It Works:
• Drop fractional part moving toward 0.

Step-by-Step Execution:
1. -3.9 float.
2. int → -3.

Order of Operations:
• int call.

Common Use Cases:
• Converting measurements with sign.

Edge Cases:
• Very small negatives near zero.

Performance Considerations:
• Fast.

Examples:
• math.floor(-3.9)  # -4

Notes:
• Document whether you need floor, ceil, or round — different semantics.`
  }),
  // 68. int(True) → 1
  (_i: number) => ({
    q: `What is int(True)?`,
    o: ["1", "True", "Error", "0"],
    c: 0,
    e: "True is equivalent to 1 when converted to int.",
    de: `Since bool is a subclass of int in Python, True is already an integer with value 1. int(True) simply returns 1.

Key Concepts:
• True == 1 and False == 0 in numeric contexts
• bool inherits from int, so conversion is trivial
• int(True) → 1, int(False) → 0
• This allows arithmetic: True + True → 2, True * 5 → 5
• sum([True, False, True]) → 2 (counts True values)

Example: int(True) → 1. This is because True IS 1 in Python's type hierarchy.

Key Distinctions:
• bool subclasses int: True behaves as 1 in arithmetic; int(True) → 1.
• int(False) → 0.

How It Works:
• bool.__int__ or numeric conversion path.

Step-by-Step Execution:
1. True.
2. int → 1.

Order of Operations:
• int().

Common Use Cases:
• Counting flags as 0/1.

Edge Cases:
• Prefer explicit int(x) if types must be int not bool.

Performance Considerations:
• Trivial.

Examples:
• True + True  # 2

Notes:
• Style: avoid relying on bool as int in APIs.`
  }),
  // 69. int(False) → 0
  (_i: number) => ({
    q: `What is int(False)?`,
    o: ["0", "False", "Error", "1"],
    c: 0,
    e: "False is equivalent to 0 when converted to int.",
    de: `False is the boolean representation of zero. Since bool is a subclass of int, False is already an integer with value 0.

Key Concepts:
• False == 0 in all numeric contexts
• int(False) → 0
• False + False → 0, False * 100 → 0
• This is why bool values can be used in arithmetic
• bool(0) → False (the reverse conversion)

Example: int(False) → 0. Just as int(True) → 1.

Key Distinctions:
• int(False) → 0 — the numeric value of the bool singleton False.

How It Works:
• Same as int for bool subclass mapping to 0.

Step-by-Step Execution:
1. False → 0.

Order of Operations:
• int call.

Common Use Cases:
• Summing boolean masks (sum of bool list counts True).

Edge Cases:
• None is not False — int(None) errors.

Performance Considerations:
• Trivial.

Examples:
• sum([True, False, True])  # 2

Notes:
• Explicit 0/1 may be clearer than int(False) in tutorials.`
  }),
  // 70. float("inf")
  (_i: number) => ({
    q: `What is float("inf")?`,
    o: ["inf", "Error", "None", "0"],
    c: 0,
    e: 'float("inf") creates positive infinity.',
    de: `Python supports special float values including positive infinity. You can create it by calling float("inf") or float("infinity"). It's greater than any finite number.

Key Concepts:
• float("inf") → positive infinity (inf)
• float("-inf") → negative infinity (-inf)
• inf > any finite number → True
• inf + 1 → inf (still infinity)
• inf - inf → nan (undefined)
• math.isinf() tests for infinity

Example: float("inf") → inf. float("inf") > 10**100 → True.

Key Distinctions:
• float("inf") yields IEEE 754 positive infinity — special float value.
• Comparisons: inf > any finite number.

How It Works:
• Parses special string case in float constructor.

Step-by-Step Execution:
1. Parse "inf".
2. Return inf object.

Order of Operations:
• float().

Common Use Cases:
• Algorithms init min to +inf, max to -inf.

Edge Cases:
• inf - inf is nan.

Performance Considerations:
• Parsing string once.

Examples:
• math.isinf(float("inf"))  # True

Notes:
• Use math.inf in 3.5+ for clarity.`
  }),
  // 71. float("-inf")
  (_i: number) => ({
    q: `What is float("-inf")?`,
    o: ["-inf", "inf", "Error", "None"],
    c: 0,
    e: 'float("-inf") creates negative infinity.',
    de: `Negative infinity is the smallest possible float value. It's less than any finite number. You create it with float("-inf").

Key Concepts:
• float("-inf") → -inf (negative infinity)
• -inf < any finite number → True
• -inf + 1 → -inf (still negative infinity)
• -inf < inf → True
• -inf == -inf → True
• float("-infinity") also works

Example: float("-inf") → -inf. float("-inf") < -10**100 → True.

Key Distinctions:
• Negative infinity — less than any finite float.

How It Works:
• Same special float family as +inf.

Step-by-Step Execution:
1. Parse "-inf".
2. Return -inf.

Order of Operations:
• float().

Common Use Cases:
• Sentinel min values.

Edge Cases:
• -inf + inf → nan.

Performance Considerations:
• Trivial.

Examples:
• float("-inf") < -1e308

Notes:
• Compare with math.isinf and sign.`
  }),
  // 72. float("nan")
  (_i: number) => ({
    q: `What is float("nan")?`,
    o: ["nan", "0", "Error", "None"],
    c: 0,
    e: 'float("nan") creates a Not-a-Number value.',
    de: `NaN (Not a Number) is a special float value representing an undefined or unrepresentable result. It's part of the IEEE 754 standard.

Key Concepts:
• float("nan") → nan
• NaN represents undefined results (like 0/0 in math)
• NaN has unusual comparison behavior (see next questions)
• math.isnan() tests for NaN
• NaN propagates: nan + 1 → nan, nan * 5 → nan

Example: float("nan") → nan. type(float("nan")) → <class 'float'>.

Key Distinctions:
• Not-a-number: float("nan") creates a NaN value.
• nan != nan always.

How It Works:
• IEEE 754 quiet NaN.

Step-by-Step Execution:
1. Parse "nan".
2. nan object.

Order of Operations:
• float().

Common Use Cases:
• Missing data placeholders in numeric code.

Edge Cases:
• Use math.isnan for tests, not ==.

Performance Considerations:
• Trivial.

Examples:
• import math; math.isnan(float("nan"))

Notes:
• Each float("nan") may be a distinct object; identity unstable.`
  }),
  // 73. NaN is not equal to itself
  (_i: number) => ({
    q: `What is float("nan") == float("nan")?`,
    o: ["False", "True", "Error", "nan"],
    c: 0,
    e: "NaN is never equal to anything, including itself — this is by IEEE 754 design.",
    de: `One of the most surprising facts in programming: NaN is not equal to itself. This is defined by the IEEE 754 floating-point standard and is consistent across all programming languages.

Key Concepts:
• nan == nan → False (NaN is NEVER equal to anything)
• nan != nan → True
• nan is nan → may be True (identity, not value)
• To check for NaN, use math.isnan(x), not x == float("nan")
• This is the ONLY value in Python where x != x is True

Example: x = float("nan"); x == x → False. Use math.isnan(x) → True instead.

Key Distinctions:
• IEEE rule: NaN compares unequal to itself — float("nan")==float("nan") is False.
• Use math.isnan.

How It Works:
• __eq__ for float returns False for NaN pairs.

Step-by-Step Execution:
1. Two nan values.
2. == → False.

Order of Operations:
• Equality.

Common Use Cases:
• Highlighting why isnan exists.

Edge Cases:
• nan in sets: NaN is hashable with quirks — advanced.

Performance Considerations:
• Trivial.

Examples:
• math.isnan(x)

Notes:
• Never use == for NaN detection.`
  }),
  // 74. Infinity comparison
  (_i: number) => ({
    q: `What is float("inf") > 1000000?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "Infinity is greater than any finite number.",
    de: `Positive infinity is by definition larger than every finite number, no matter how large. This makes it useful as a sentinel value for algorithms.

Key Concepts:
• inf > any finite number → True
• inf is commonly used as an initial value in min-finding algorithms
• float("inf") works in comparisons with all numeric types
• inf > inf → False (not strictly greater)
• inf == inf → True

Example: float("inf") > 1000000 → True. float("inf") > 10**1000 → True.

Key Distinctions:
• Positive infinity is greater than any finite float.

How It Works:
• Float ordering special-cases inf.

Step-by-Step Execution:
1. inf compared to 1000000.0.
2. True.

Order of Operations:
• Comparison.

Common Use Cases:
• Bounds checking.

Edge Cases:
• inf == inf True.

Performance Considerations:
• Trivial.

Examples:
• float("inf") > float("inf")  # False

Notes:
• Sorting lists with inf places them at ends depending on sign.`
  }),
  // 75. bool(0.0) is False
  (_i: number) => ({
    q: `What is bool(0.0)?`,
    o: ["False", "True", "0", "Error"],
    c: 0,
    e: "Zero in any numeric type is falsy: 0, 0.0, 0j are all False.",
    de: `In Python, zero values of any numeric type are falsy. This includes integer 0, float 0.0, and complex 0j.

Key Concepts:
• bool(0.0) → False (zero float is falsy)
• bool(0) → False (zero int is falsy)
• bool(0.1) → True (any non-zero number is truthy)
• bool(-0.0) → False (-0.0 equals 0.0 in Python)
• This applies in if statements: if 0.0: won't execute

Example: bool(0.0) → False. bool(0.001) → True.

Key Distinctions:
• 0.0 is falsy — bool(0.0) → False.
• Only zero float is falsy among finite floats.

How It Works:
• float.__bool__ returns False for exact zero.

Step-by-Step Execution:
1. 0.0.
2. bool → False.

Order of Operations:
• bool().

Common Use Cases:
• Filtering zero-like floats.

Edge Cases:
• -0.0 is also falsy.

Performance Considerations:
• Trivial.

Examples:
• bool(0.1)  # True

Notes:
• NaN is truthy — different from 0.0.`
  }),
  // 76. bool(0j) is False
  (_i: number) => ({
    q: `What is bool(0j)?`,
    o: ["False", "True", "Error", "0j"],
    c: 0,
    e: "0j is the zero complex number, which is falsy.",
    de: `0j is the complex number zero (0+0j). Like all zero numeric values in Python, it is falsy.

Key Concepts:
• 0j represents the complex number 0+0j
• bool(0j) → False (zero complex is falsy)
• bool(1j) → True (non-zero complex is truthy)
• bool(0+0j) → False
• Complex numbers with any non-zero part are truthy: bool(0+1j) → True

Example: bool(0j) → False. bool(1+0j) → True. bool(0+0.1j) → True.

Key Distinctions:
• Complex zero 0j has zero real and imag — falsy.
• Any nonzero real or imag makes truthy.

How It Works:
• complex.__bool__ checks both parts.

Step-by-Step Execution:
1. 0j.
2. bool → False.

Order of Operations:
• bool().

Common Use Cases:
• Signal processing defaults.

Edge Cases:
• 0+1j is truthy.

Performance Considerations:
• Trivial.

Examples:
• bool(3+4j)  # True

Notes:
• Rare in beginner code — remember both parts.`
  }),
  // 77. bool(()) empty tuple is False
  (_i: number) => ({
    q: `What is bool(())?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "An empty tuple is falsy, just like any empty container.",
    de: `In Python, all empty containers are falsy. An empty tuple () has length 0, so bool(()) returns False.

Key Concepts:
• Empty containers are falsy: (), [], {}, set(), frozenset()
• Non-empty containers are truthy: (1,), [0], {"a": 1}
• This is why you can write: if my_tuple: (checks if non-empty)
• The truthiness of a container depends only on its length
• A tuple with a single falsy element is still truthy: bool((0,)) → True

Example: bool(()) → False. bool((0,)) → True (contains one element).

Key Distinctions:
• Empty tuple is falsy — bool(()) → False.
• Non-empty tuple truthy if any element truthy — () has no elements → falsy.

How It Works:
• len 0 container is falsy.

Step-by-Step Execution:
1. ().
2. bool → False.

Order of Operations:
• bool().

Common Use Cases:
• Default empty record.

Edge Cases:
• (0,) is truthy (one element 0 is falsy? (0,) is truthy because tuple nonempty — actually bool((0,)) is True because tuple with elements: empty is falsy, non-empty uses element truth? Actually bool((0,)) is True because the tuple is non-empty. Wait: bool(()) is False. bool((0,)) is True because non-empty tuple — the element 0 is falsy but for tuple, __bool__ is len!=0. So (0,) is True.

Performance Considerations:
• Trivial.

Examples:
• if (): ...

Notes:
• For (0,) truthiness is True (non-empty).`
  }),
  // 78. bool({}) empty dict is False
  (_i: number) => ({
    q: `What is bool({})?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "An empty dictionary is falsy.",
    de: `An empty dictionary {} has no key-value pairs, so it is falsy. Any dictionary with at least one entry is truthy.

Key Concepts:
• bool({}) → False (empty dict)
• bool({"a": 1}) → True (non-empty dict)
• {} creates an empty dict, NOT an empty set (use set() for that)
• Common pattern: if my_dict: checks if dict has entries
• len({}) == 0, which is why it's falsy

Example: bool({}) → False. bool({0: 0}) → True (has one key-value pair).

Key Distinctions:
• Empty dict is falsy — bool({}) → False.
• Any key makes dict truthy.

How It Works:
• Mapping __len__ 0 → False.

Step-by-Step Execution:
1. {}.
2. bool → False.

Order of Operations:
• bool().

Common Use Cases:
• if not config: load defaults.

Edge Cases:
• Keys with falsy values still truthy dict if len>0.

Performance Considerations:
• Trivial.

Examples:
• bool({0:0})  # True

Notes:
• collections.Counter etc. follow len rule.`
  }),
  // 79. bool(set()) empty set is False
  (_i: number) => ({
    q: `What is bool(set())?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "An empty set is falsy, like all empty containers.",
    de: `set() creates an empty set, which is falsy because it contains no elements. Note that you cannot use {} for an empty set — that creates an empty dict.

Key Concepts:
• bool(set()) → False (empty set)
• bool({1, 2, 3}) → True (non-empty set)
• {} is an empty dict, NOT an empty set
• You must use set() to create an empty set
• Empty set has length 0: len(set()) == 0

Example: bool(set()) → False. bool({0}) → True (set with one element).

Key Distinctions:
• Empty set is falsy — same as empty dict/tuple logic by emptiness.

How It Works:
• set.__len__ 0.

Step-by-Step Execution:
1. set().
2. bool False.

Order of Operations:
• bool().

Common Use Cases:
• if not seen: ...

Edge Cases:
• set with None element still truthy.

Performance Considerations:
• Trivial.

Examples:
• bool({1})  # True

Notes:
• frozenset() same falsy rule.`
  }),
  // 80. bool(frozenset()) empty frozenset is False
  (_i: number) => ({
    q: `What is bool(frozenset())?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "An empty frozenset is falsy, like all empty containers.",
    de: `frozenset() creates an empty immutable set, which is falsy. A frozenset is like a set but cannot be modified after creation.

Key Concepts:
• bool(frozenset()) → False (empty frozenset)
• bool(frozenset([1])) → True (non-empty frozenset)
• frozenset is the immutable version of set
• frozenset can be used as a dictionary key (because it's hashable)
• Falsy rule: ALL empty containers are falsy, regardless of type

Example: bool(frozenset()) → False. bool(frozenset("abc")) → True.

Key Distinctions:
• Empty frozenset falsy; nonempty truthy.

How It Works:
• Like set.

Step-by-Step Execution:
1. frozenset().
2. False.

Order of Operations:
• bool().

Common Use Cases:
• Immutable empty set sentinel.

Edge Cases:
• Singleton frozenset() empty.

Performance Considerations:
• Trivial.

Examples:
• bool(frozenset([0]))  # True

Notes:
• Hashable for dict keys when nonempty.`
  }),
  // 81. Slicing past the end returns empty string
  (_i: number) => ({
    q: `What is "hello"[100:]?`,
    o: ['""', "Error", '"hello"', "None"],
    c: 0,
    e: "Slicing past the end returns an empty string — no IndexError.",
    de: `Unlike indexing, slicing never raises an IndexError. If the start index is beyond the string length, you simply get an empty string.

Key Concepts:
• Slicing is forgiving — out-of-range indices are silently clamped
• "hello"[100:] → "" (start is past the end)
• "hello"[0:100] → "hello" (end is past the end, clamped to len)
• But indexing IS strict: "hello"[100] → IndexError
• This is a key difference between indexing and slicing in Python

Example: "hello"[100:] → "". No error, just an empty string.

Key Distinctions:
• Slice start past end returns empty string — no IndexError.
• Slicing is forgiving; indexing [100] would error.

How It Works:
• Slice adjusts to string length.

Step-by-Step Execution:
1. "hello" length 5.
2. [100:] → ''.

Order of Operations:
• Slice.

Common Use Cases:
• Safe suffix without len checks.

Edge Cases:
• Negative start still clamped.

Performance Considerations:
• O(1) to create empty str sometimes.

Examples:
• s[n:] when n>=len(s)

Notes:
• Contrast s[100] IndexError.`
  }),
  // 82. Negative slice past the start
  (_i: number) => ({
    q: `What is "hello"[-100:]?`,
    o: ['"hello"', '""', "Error", "None"],
    c: 0,
    e: "A negative start index past the beginning is clamped to 0, returning the whole string.",
    de: `When a negative slice index goes beyond the start of the string, Python clamps it to 0. So "hello"[-100:] is equivalent to "hello"[0:], which returns the full string.

Key Concepts:
• Negative indices past the start are clamped to 0
• "hello"[-100:] → "hello" (same as "hello"[0:])
• This is part of Python's forgiving slice behavior
• Works the same for lists: [1,2,3][-100:] → [1,2,3]

Example: "hello"[-100:] → "hello". The -100 is treated as 0.

Key Distinctions:
• Negative index start -100 clamps to beginning — whole string returned.
• [-100:] on len-5 string is "hello".

How It Works:
• Slice normalization walks from end then clamps to [0,len].

Step-by-Step Execution:
1. Start index -100 → treated as before start → 0.
2. Slice [0:5] effectively.

Order of Operations:
• Slice.

Common Use Cases:
• "Last up to k chars" patterns with safe negative.

Edge Cases:
• Step -1 reverses — different question.

Performance Considerations:
• May copy substring.

Examples:
• "hi"[-100:]  # "hi"

Notes:
• Read slice semantics docs for step and omitted bounds.`
  }),
  // 83. Slice with end past length
  (_i: number) => ({
    q: `What is "hello"[2:100]?`,
    o: ['"llo"', "Error", '"hello"', '""'],
    c: 0,
    e: "The end index is clamped to the string length, so you get from index 2 to the end.",
    de: `When the end index exceeds the string length, Python clamps it to len(s). So "hello"[2:100] behaves like "hello"[2:5], giving "llo".

Key Concepts:
• Out-of-range end indices are clamped to the sequence length
• "hello"[2:100] → "llo" (same as "hello"[2:5])
• This makes slicing safe — you never get an IndexError
• Works for all sequence types: lists, tuples, strings

Example: "hello"[2:100] → "llo". Characters at indices 2, 3, 4.

Key Distinctions:
• Stop past end clamps to len — "hello"[2:100] == "hello"[2:5] == "llo".

How It Works:
• Slice stop min(len, 100).

Step-by-Step Execution:
1. Indices 2..5 exclusive.
2. "llo".

Order of Operations:
• Slice.

Common Use Cases:
• Substring without min(len, end) boilerplate.

Edge Cases:
• Start beyond len → ''.

Performance Considerations:
• Linear in slice length.

Examples:
• "abc"[1:1000]  # "bc"

Notes:
• Slicing never raises for out-of-range — unlike indexing.`
  }),
  // 84. Empty string concatenation
  (_i: number) => ({
    q: `What is "" + ""?`,
    o: ['""', "Error", "None", "0"],
    c: 0,
    e: "Concatenating two empty strings produces an empty string.",
    de: `String concatenation with + joins two strings together. Two empty strings joined produce an empty string.

Key Concepts:
• "" + "" → "" (empty + empty = empty)
• "" is the identity element for string concatenation
• "hello" + "" → "hello" (appending empty does nothing)
• "" + "hello" → "hello" (prepending empty does nothing)
• len("" + "") → 0

Example: "" + "" → "". This is consistent: an empty string has no characters to add.

Key Distinctions:
• Concatenating two empty strings yields empty string.
• Identity: often interned empty str.

How It Works:
• str.__add__ with '' + ''.

Step-by-Step Execution:
1. '' + ''.
2. ''.

Order of Operations:
• Binary +.

Common Use Cases:
• Building strings in loops starting with ''.

Edge Cases:
• Many concatenations → use join.

Performance Considerations:
• O(n) total for repeated + in loop — bad; single + of '' cheap.

Examples:
• "".join(parts)

Notes:
• Prefer join for multiple pieces.`
  }),
  // 85. Empty string repetition
  (_i: number) => ({
    q: `What is "" * 1000?`,
    o: ['""', "Error", "None", "0"],
    c: 0,
    e: "Repeating an empty string any number of times still gives an empty string.",
    de: `Multiplying a string by n repeats it n times. But repeating nothing gives nothing, no matter how many times.

Key Concepts:
• "" * n → "" for any n (repeating empty = empty)
• "a" * 3 → "aaa" (non-empty repetition works normally)
• "" * 0 → "" (zero repetitions also empty)
• len("" * 1000) → 0

Example: "" * 1000 → "". Zero characters repeated 1000 times is still zero characters.

Key Distinctions:
• Repetition of empty string 1000 times is still '' — len 0 * n is ''.
• 0 times any string is ''.

How It Works:
• str.__mul__ special case empty.

Step-by-Step Execution:
1. '' * 1000.
2. ''.

Order of Operations:
• *.

Common Use Cases:
• Edge case in generic repeat code.

Edge Cases:
• "a"*0 → ''.

Performance Considerations:
• Fast.

Examples:
• "x"*0

Notes:
• Useful to remember mul identity for str.`
  }),
  // 86. String times zero
  (_i: number) => ({
    q: `What is "a" * 0?`,
    o: ['""', '"a"', "Error", "None"],
    c: 0,
    e: "Any string multiplied by 0 produces an empty string.",
    de: `Multiplying a string by 0 (or any negative number) results in an empty string. You need at least 1 repetition to get content.

Key Concepts:
• "a" * 0 → "" (zero repetitions = empty)
• "hello" * 0 → "" (same for any string)
• "a" * -5 → "" (negative repetitions = empty)
• "a" * 1 → "a" (one repetition = the string itself)
• This follows mathematical logic: 0 copies of anything is nothing

Example: "a" * 0 → "". "abc" * 0 → "". "x" * -1 → "".

Key Distinctions:
• Zero repetitions yield empty string — any string * 0 → ''.

How It Works:
• str.__mul__ returns '' for n==0.

Step-by-Step Execution:
1. "a" * 0.
2. ''.

Order of Operations:
• *.

Common Use Cases:
• Clearing builder pattern.

Edge Cases:
• Negative repeat errors in Python 3 for str.

Performance Considerations:
• Trivial.

Examples:
• sep * (n-1) when n=0 edge.

Notes:
• str * negative raises ValueError in Python 3.`
  }),
  // 87. Equal start and end in slice
  (_i: number) => ({
    q: `What is "hello"[1:1]?`,
    o: ['""', '"e"', '"h"', "Error"],
    c: 0,
    e: "When start equals end in a slice, the result is an empty string.",
    de: `A slice [n:n] always returns an empty sequence because there are zero elements between index n and index n.

Key Concepts:
• s[n:n] → "" for any valid n (zero-width slice)
• "hello"[1:1] → "" (nothing between index 1 and index 1)
• "hello"[0:0] → "" (nothing before index 0)
• This is consistent: the slice includes start but excludes end
• Works the same for lists: [1,2,3][1:1] → []

Example: "hello"[1:1] → "". The range from 1 to 1 contains no characters.

Key Distinctions:
• Empty slice when start==stop — ''.
• [1:1] takes zero characters at index 1.

How It Works:
• Slice length max(0, stop-start).

Step-by-Step Execution:
1. "hello".
2. [1:1] → ''.

Order of Operations:
• Slice.

Common Use Cases:
• Insert point representation.

Edge Cases:
• [5:5] at end → ''.

Performance Considerations:
• Returns empty str quickly.

Examples:
• s[i:i] always ''

Notes:
• Useful for splice-like APIs.`
  }),
  // 88. Start greater than end in slice
  (_i: number) => ({
    q: `What is "hello"[3:1]?`,
    o: ['""', '"ll"', "Error", '"ello"'],
    c: 0,
    e: "When start > end in a slice (with positive step), the result is empty.",
    de: `When the start index is greater than the end index with a positive step (default), there are no elements to include, so the result is empty.

Key Concepts:
• s[3:1] → "" when step is positive (going forward but start is ahead of end)
• This doesn't raise an error — Python just returns empty
• To go backwards, use a negative step: "hello"[3:1:-1] → "ll"
• Default step is +1, meaning left to right

Example: "hello"[3:1] → "". "hello"[3:1:-1] → "ll" (reversed).

Key Distinctions:
• Start > stop with positive step yields empty string — not an error.
• Unlike some languages, no reverse without negative step.

How It Works:
• Slice with step 1: empty range.

Step-by-Step Execution:
1. [3:1] step 1 → empty.

Order of Operations:
• Slice.

Common Use Cases:
• Accidental reversed indices — debug empty results.

Edge Cases:
• [3:1:-1] would give "l" — step matters.

Performance Considerations:
• Returns '' fast.

Examples:
• "abc"[2:0]  # ''

Notes:
• Use [::-1] for reverse.`
  }),
  // 89. Space is whitespace
  (_i: number) => ({
    q: `What is " ".isspace()?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "A space character is whitespace, so isspace() returns True.",
    de: `The isspace() method returns True if all characters in the string are whitespace characters and the string is not empty.

Key Concepts:
• " ".isspace() → True (space is whitespace)
• Whitespace characters include: space, tab, newline, carriage return, form feed, vertical tab
• "".isspace() → False (empty string returns False)
• " a ".isspace() → False (contains non-whitespace)
• "   ".isspace() → True (all spaces)

Example: " ".isspace() → True. "  \\n  ".isspace() → True.

Key Distinctions:
• Single space character is whitespace — .isspace() True.
• Other Unicode separators may count per Unicode rules.

How It Works:
• str.isspace checks category.

Step-by-Step Execution:
1. ' '.
2. isspace → True.

Order of Operations:
• Method call.

Common Use Cases:
• Validating blank-only strings.

Edge Cases:
• '' .isspace() False.

Performance Considerations:
• O(n) on string length.

Examples:
• '\n'.isspace() True

Notes:
• Do not use strip first if testing "only spaces".`
  }),
  // 90. Newline and tab are whitespace
  (_i: number) => ({
    q: `What is "\\n\\t".isspace()?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "Newline (\\n) and tab (\\t) are whitespace characters.",
    de: `Both \\n (newline) and \\t (tab) are whitespace characters. isspace() returns True because every character in the string is whitespace.

Key Concepts:
• \\n (newline) is whitespace
• \\t (tab) is whitespace
• \\r (carriage return) is whitespace
• \\f (form feed) is whitespace
• \\v (vertical tab) is whitespace
• All Unicode whitespace characters are recognized

Example: "\\n\\t".isspace() → True. "\\n\\t ".isspace() → True. "\\na".isspace() → False.

Key Distinctions:
• All characters are whitespace — True.
• Mixed whitespace still True if every char is whitespace.

How It Works:
• Each char must be whitespace.

Step-by-Step Execution:
1. "\n\t" two chars.
2. Both whitespace → True.

Order of Operations:
• Method.

Common Use Cases:
• Stripping multiline blanks.

Edge Cases:
• If one non-space — False.

Performance Considerations:
• Short strings trivial.

Examples:
• ' \t '.isspace() True

Notes:
• Different from empty string.`
  }),
  // 91. isdigit() with digit string
  (_i: number) => ({
    q: `What is "123".isdigit()?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "All characters are digits (0-9), so isdigit() returns True.",
    de: `isdigit() returns True if all characters in the string are digits and the string is not empty. The characters 0-9 are all digits.

Key Concepts:
• "123".isdigit() → True (all are digit characters)
• isdigit() requires ALL characters to be digits
• "".isdigit() → False (empty string)
• isdigit() also recognizes Unicode digit characters (e.g., superscripts)
• For strictly 0-9, you might prefer str.isdecimal()

Example: "123".isdigit() → True. "0".isdigit() → True. "42".isdigit() → True.

Key Distinctions:
• All characters are decimal digits — True for "123".
• isdigit includes more than 0-9 in Unicode; for ASCII digits, True.

How It Works:
• Per-character digit test.

Step-by-Step Execution:
1. "123".
2. isdigit → True.

Order of Operations:
• Method.

Common Use Cases:
• Quick validation before int().

Edge Cases:
• "²" may be digit in Unicode — isdigit True.

Performance Considerations:
• O(n).

Examples:
• "12a".isdigit() False

Notes:
• For strict ASCII, compare against charset or regex [0-9].`
  }),
  // 92. isdigit() with decimal point
  (_i: number) => ({
    q: `What is "12.3".isdigit()?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "The dot (.) is not a digit, so isdigit() returns False.",
    de: `isdigit() returns False if any character is not a digit. The decimal point '.' is not a digit character, so "12.3".isdigit() returns False.

Key Concepts:
• '.' is not a digit — isdigit() returns False
• There is no built-in method to check if a string is a valid float
• To check for numeric strings with decimals, use a try/except with float()
• "12.3".isnumeric() → False (dot is not numeric either)

Example: "12.3".isdigit() → False. Only pure digit strings return True.

Key Distinctions:
• Dot is not a digit — isdigit False for whole string.
• isdecimal even stricter in some cases.

How It Works:
• '.' fails digit test.

Step-by-Step Execution:
1. "12.3".
2. False.

Order of Operations:
• Method.

Common Use Cases:
• Catching decimal points before float parse.

Edge Cases:
• Superscript digits — Unicode categories.

Performance Considerations:
• O(n) may stop early.

Examples:
• float("12.3") works but isdigit false.

Notes:
• Use try/except float(s) for numeric input.`
  }),
  // 93. isdigit() with negative sign
  (_i: number) => ({
    q: `What is "-5".isdigit()?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "The minus sign (-) is not a digit, so isdigit() returns False.",
    de: `The minus sign '-' is not a digit character. isdigit() checks every character, and since '-' fails the check, the whole string returns False.

Key Concepts:
• '-' is not a digit character
• isdigit() doesn't understand negative numbers as a concept
• It only checks individual characters
• To validate a negative integer string: s.lstrip('-').isdigit() and s.count('-') <= 1

Example: "-5".isdigit() → False. "5".isdigit() → True.

Key Distinctions:
• Minus sign is not a digit — isdigit False even though int("-5") works.
• isdigit does not parse integers — only tests characters.

How It Works:
• '-' fails.

Step-by-Step Execution:
1. "-5".
2. isdigit → False.

Order of Operations:
• Method.

Common Use Cases:
• Explaining difference between string property and numeric parsing.

Edge Cases:
• "+5" also False for isdigit.

Performance Considerations:
• Trivial.

Examples:
• s.lstrip("-").isdigit() pattern — careful with negatives.

Notes:
• For signed int validation, use regex or try int.`
  }),
  // 94. isalnum() with mixed letters and digits
  (_i: number) => ({
    q: `What is "abc123".isalnum()?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "All characters are either letters or digits, so isalnum() returns True.",
    de: `isalnum() returns True if all characters are alphanumeric (either letters or digits) and the string is not empty.

Key Concepts:
• isalnum() = isalpha() or isdigit() for each character
• "abc123".isalnum() → True (letters and digits are alphanumeric)
• "abc".isalnum() → True (letters only — still alphanumeric)
• "123".isalnum() → True (digits only — still alphanumeric)
• "".isalnum() → False (empty string)

Example: "abc123".isalnum() → True. "Hello2025".isalnum() → True.

Key Distinctions:
• isalnum() vs isalpha(): digits make isalnum True even when isalpha is False for the whole string (e.g. "123").
• isalnum() vs isdigit(): letters make isalnum True even when isdigit is False (e.g. "abc").
• Underscore "_" is not alphanumeric: "a_b".isalnum() is False.
• str.isalnum() follows Unicode rules: accented letters still count as letters.

How It Works:
• CPython walks the string once, classifying each code point as letter, decimal digit, or other using Unicode tables.
• If any character is "other" (space, punctuation, underscore), it returns False immediately.

Step-by-Step Execution:
1. Build the str "abc123".
2. Call the bound method .isalnum() (no arguments).
3. Check 'a','b','c' as letters; '1','2','3' as digits — all pass.
4. Return True.

Order of Operations:
• Only a literal and a method call: the literal is evaluated, then the method runs.

Common Use Cases:
• Loose validation of usernames or tokens that must be letters+digits only (no spaces).
• Quick screen of user input before stricter regex or schema checks.

Edge Cases:
• Empty string: "".isalnum() → False (must be non-empty for True).
• Strings with only digits or only letters still return True; combining both is fine as here.

Performance Considerations:
• O(n) in string length; stops early on first failing character; fine for typical short identifiers.

Examples:
• "café2".isalnum()  # True if é is a letter in Unicode (it is)
• "12.3".isalnum()   # False (dot is not alnum)

Notes:
• For passwords, alnum-only is usually too weak — combine with length and entropy rules; this method is only a coarse filter.`
  }),
  // 95. isalnum() with space
  (_i: number) => ({
    q: `What is "abc 123".isalnum()?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "The space character is not alphanumeric, so isalnum() returns False.",
    de: `Spaces are not alphanumeric characters. isalnum() requires ALL characters to be letters or digits, so "abc 123" fails because of the space.

Key Concepts:
• Space ' ' is not alphanumeric
• Punctuation (!, @, #) is not alphanumeric
• Underscores '_' are not alphanumeric
• Only Unicode letters and digit characters pass
• To allow spaces, you'd need a custom check

Example: "abc 123".isalnum() → False. "abc123".isalnum() → True.

Key Distinctions:
• Space breaks alnum — every char must be letter or digit; space is neither.
• "abc 123".isalnum() → False.

How It Works:
• Scan finds space at position 3.

Step-by-Step Execution:
1. String with space.
2. isalnum → False.

Order of Operations:
• Method.

Common Use Cases:
• Rejecting tokens with separators.

Edge Cases:
• Underscore not alnum.

Performance Considerations:
• Stops at first bad char.

Examples:
• "abc123".isalnum() True

Notes:
• Normalize with replace(" ", "") if business rules allow — then test.`
  }),
  // 96. isidentifier() with valid identifier
  (_i: number) => ({
    q: `What is "hello".isidentifier()?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: '"hello" is a valid Python identifier (starts with letter, all alphanumeric).',
    de: `isidentifier() checks if a string is a valid Python identifier. Valid identifiers start with a letter or underscore and contain only letters, digits, and underscores.

Key Concepts:
• Valid identifiers: start with letter or _, followed by letters, digits, or _
• "hello".isidentifier() → True
• "_var".isidentifier() → True (underscore start is valid)
• "my_var2".isidentifier() → True
• "".isidentifier() → False (empty string)
• Note: isidentifier() does NOT check if the name is a keyword

Example: "hello".isidentifier() → True. It's a valid variable name.

Key Distinctions:
• Valid Python identifier: letters, digits, underscore; not starting with digit.
• "hello" → True.

How It Works:
• str.isidentifier uses Unicode ID_Start/ID_Continue rules.

Step-by-Step Execution:
1. "hello".
2. True.

Order of Operations:
• Method.

Common Use Cases:
• Checking user input before setattr.

Edge Cases:
• Keywords still "identifiers" syntactically — use keyword.iskeyword separately.

Performance Considerations:
• O(n).

Examples:
• "_x".isidentifier() True

Notes:
• "for" isidentifier True but reserved — check keyword module.`
  }),
  // 97. isidentifier() with digit start
  (_i: number) => ({
    q: `What is "2hello".isidentifier()?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "Python identifiers cannot start with a digit.",
    de: `A Python identifier must start with a letter (a-z, A-Z) or underscore (_). Starting with a digit makes it invalid.

Key Concepts:
• Identifiers cannot start with a digit (0-9)
• "2hello".isidentifier() → False
• "hello2".isidentifier() → True (digits allowed after first char)
• "2".isidentifier() → False
• This rule prevents confusion between variable names and numeric literals

Example: "2hello".isidentifier() → False. "hello2".isidentifier() → True.

Key Distinctions:
• Cannot start with digit — False.

How It Works:
• First char '2' invalid start.

Step-by-Step Execution:
1. "2hello".
2. False.

Order of Operations:
• Method.

Common Use Cases:
• Rejecting invalid variable name suggestions.

Edge Cases:
• Unicode letters OK after first char rules.

Performance Considerations:
• Early exit.

Examples:
• "h2".isidentifier() True

Notes:
• Valid names vs valid identifiers differ from keywords.`
  }),
  // 98. isidentifier() doesn't check keywords
  (_i: number) => ({
    q: `What is "for".isidentifier()?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: 'isidentifier() only checks syntax validity — "for" is syntactically valid, even though it\'s a keyword.',
    de: `Surprisingly, "for".isidentifier() returns True. isidentifier() only checks if the string follows identifier naming rules — it does NOT check whether the name is a reserved keyword.

Key Concepts:
• isidentifier() checks syntax only, not semantics
• "for" follows identifier rules (letters only, starts with letter)
• But "for" is a reserved keyword — you can't use it as a variable name
• Use keyword.iskeyword("for") to check if it's a keyword
• To fully validate: s.isidentifier() and not keyword.iskeyword(s)

Example: "for".isidentifier() → True. keyword.iskeyword("for") → True. You need both checks.

Key Distinctions:
• "for" matches identifier pattern — isidentifier True.
• Still a reserved keyword — cannot use as name without context.

How It Works:
• Lexical rules allow letters; "for" is valid identifier characters.

Step-by-Step Execution:
1. "for".
2. isidentifier → True.

Order of Operations:
• Method.

Common Use Cases:
• Contrasting isidentifier vs iskeyword.

Edge Cases:
• keyword.iskeyword("for") True.

Performance Considerations:
• Trivial.

Examples:
• import keyword; keyword.iskeyword("for")

Notes:
• Always pair isidentifier with keyword check for safe codegen.`
  }),
  // 99. keyword.iskeyword() recognizes keywords
  (_i: number) => ({
    q: `What does keyword.iskeyword("for") return? (import keyword)`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: '"for" is a reserved Python keyword.',
    de: `The keyword module provides iskeyword() to check if a string is a Python reserved keyword. "for" is used for for-loops and cannot be used as a variable name.

Key Concepts:
• keyword.iskeyword("for") → True
• Python has ~35 keywords: if, else, for, while, def, class, return, import, etc.
• Keywords cannot be used as variable names or function names
• keyword.kwlist returns the full list of keywords
• Some words like "print" are NOT keywords (they're built-in functions)

Example: keyword.iskeyword("for") → True. keyword.iskeyword("print") → False (print is a built-in, not a keyword).

Key Distinctions:
• keyword.iskeyword returns True for reserved words like "for".
• import keyword required.

How It Works:
• Looks up frozen keyword set for current Python version.

Step-by-Step Execution:
1. import keyword (assumed).
2. iskeyword("for") → True.

Order of Operations:
• Function call after import.

Common Use Cases:
• Sanitizing dynamic attribute names.

Edge Cases:
• Soft keywords may differ by version (3.10+ match).

Performance Considerations:
• Set lookup O(1).

Examples:
• keyword.iskeyword("async")

Notes:
• Keywords change between Python versions — test accordingly.`
  }),
  // 100. Complex number type
  (_i: number) => ({
    q: `What is type(1+2j)?`,
    o: ["<class 'complex'>", "<class 'float'>", "<class 'int'>", "Error"],
    c: 0,
    e: "1+2j is a complex number literal in Python.",
    de: `Python has built-in support for complex numbers. The literal 1+2j represents a complex number with real part 1 and imaginary part 2. The 'j' suffix denotes the imaginary unit.

Key Concepts:
• Complex numbers have real and imaginary parts
• j (or J) is used for the imaginary unit (not i like in math)
• type(1+2j) → <class 'complex'>
• Access parts: (1+2j).real → 1.0, (1+2j).imag → 2.0
• Complex supports arithmetic: (1+2j) * (3+4j) → (-5+10j)
• complex(1, 2) also creates 1+2j

Example: type(1+2j) → <class 'complex'>. Python is one of few languages with built-in complex number support.

Key Distinctions:
• Complex literal type is complex — type(1+2j) is complex (display <class 'complex'>).
• j suffix creates imaginary part.

How It Works:
• 1+2j builds complex number; type returns complex class.

Step-by-Step Execution:
1. Evaluate 1+2j → complex.
2. type → complex class.

Order of Operations:
• Literal, then type().

Common Use Cases:
• Signal processing, math with imaginary unit.

Edge Cases:
• 2j alone is imaginary; 1+2j combines.

Performance Considerations:
• Built-in type fast.

Examples:
• isinstance(1j, complex) True

Notes:
• Separate from float math — watch branch cuts in cmath.`
  }),
];
