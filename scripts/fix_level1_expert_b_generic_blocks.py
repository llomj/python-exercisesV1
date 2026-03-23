#!/usr/bin/env python3
"""
Replace duplicated generic 10-section tails in level1_expert_b.ts.

ID 594 ("abc123".isalnum()) was fixed manually — this script replaces the other 49
occurrences in file order (same BLOCK_START/BLOCK_END as expert_a).

Do not use backticks inside replacement text (breaks TS template literals).
"""
from __future__ import annotations

from pathlib import Path

BLOCK_START = (
    "Key Concepts:\n"
    "• See the key concepts and explanation above for the main ideas and bullet points.\n\n"
    "Key Distinctions:"
)

BLOCK_END = (
    "Notes:\n"
    "• Use isinstance() when you need to allow subclasses; follow PEP 8 for naming and style; "
    "refer to the official docs for full details."
)

# 49 replacements in order of appearance in level1_expert_b.ts (skips Q44 = ID 594 already fixed).
TAILS: list[str] = [
    # 0  id(42)==id(42)
    """• id() returns the current object address; small ints may be cached so id(42)==id(42) is often True.
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
• Never use id() for equality checks in production code — use == for values.""",
    # 1  a=[]; b=[]; a is b
    """• Two separate [] constructs allocate two distinct list objects — a is b is False.
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
• Default-argument pitfall: def f(x=[]): mutates one list across calls.""",
    # 2  [1,2]==[1,2]
    """• == on lists compares elements pairwise: [1,2] == [1,2] → True.
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
• For numpy arrays, == behaves differently — this is plain list.""",
    # 3  [1,2] is [1,2] different objects
    """• Two list literals with same contents are still different objects — is is False.
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
• Copy with list(x) or x.copy() if you need a duplicate, not an alias.""",
    # 4  b = a ; a is b
    """• Assignment aliases the same list object — a is b is True.
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
• Use b = a.copy() or list(a) for a shallow duplicate.""",
    # 5  "hello" "hello" is
    """• CPython interns many short strings — identical "hello" literals may share identity; is can be True.
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
• PEP 8: use == for str equality, reserve is for None and sentinels.""",
    # 6  tuples (1,2)==(1,2)
    """• Tuple equality is elementwise like lists; (1,2)==(1,2) → True.
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
• Namedtuple adds field names but equality still value-based.""",
    # 7  type(42)==int
    """• type(42) returns the class int; comparing to int with == is True in Python 3.
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
• For API validation, isinstance(x, int) is usually better than type(x)==int.""",
    # 8  type(42) is int
    """• type(42) returns the int class object; comparing with is to int is True — same singleton class object.
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
• isinstance(True, int) is True but type(True) is int is False — use the right test.""",
    # 9  isinstance(True, int)
    """• bool subclasses int in Python; isinstance(True, int) is True.
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
• Explicitly filter bool when 0/1-only ints matter.""",
    # 10 isinstance(42, (int, float))
    """• Second argument can be a tuple of types — isinstance returns True if any matches.
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
• For static typing use Union[int, float] in annotations.""",
    # 11 issubclass(bool, int)
    """• bool is declared as subclass of int — historical compatibility (True+True==2).
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
• Avoid arithmetic on bool in real code even if it works.""",
    # 12 id("hello") return type
    """• id() always returns an int in Python 3 — the address-like identifier.
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
• id values are only unique among simultaneously live objects.""",
    # 13 what id returns
    """• id(obj) returns an integer identifier; in CPython it is typically the memory address of the PyObject.
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
• Never persist ids to disk as stable keys.""",
    # 14 None None is
    """• None is a singleton — a is b when both assigned None is always True.
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
• Use is None, not == None.""",
    # 15 int(3.9)
    """• int() truncates toward zero: int(3.9) → 3, not floor for negatives separately handled.
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
• For true floor use math.floor for positives/negatives semantics differ from trunc for negatives? int(-3.9) is -3, floor is -4.""",
    # 16 int(-3.9)
    """• Truncation toward zero: -3.9 → -3 (not floor -4).
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
• Document whether you need floor, ceil, or round — different semantics.""",
    # 17 int(True)
    """• bool subclasses int: True behaves as 1 in arithmetic; int(True) → 1.
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
• Style: avoid relying on bool as int in APIs.""",
    # 18 int(False)
    """• int(False) → 0 — the numeric value of the bool singleton False.

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
• Explicit 0/1 may be clearer than int(False) in tutorials.""",
    # 19 float("inf")
    """• float("inf") yields IEEE 754 positive infinity — special float value.
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
• Use math.inf in 3.5+ for clarity.""",
    # 20 float("-inf")
    """• Negative infinity — less than any finite float.

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
• Compare with math.isinf and sign.""",
    # 21 float("nan")
    """• Not-a-number: float("nan") creates a NaN value.
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
• Each float("nan") may be a distinct object; identity unstable.""",
    # 22 nan == nan
    """• IEEE rule: NaN compares unequal to itself — float("nan")==float("nan") is False.
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
• Never use == for NaN detection.""",
    # 23 inf > 1000000
    """• Positive infinity is greater than any finite float.

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
• Sorting lists with inf places them at ends depending on sign.""",
    # 24 bool(0.0)
    """• 0.0 is falsy — bool(0.0) → False.
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
• NaN is truthy — different from 0.0.""",
    # 25 bool(0j)
    """• Complex zero 0j has zero real and imag — falsy.
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
• Rare in beginner code — remember both parts.""",
    # 26 bool(())
    """• Empty tuple is falsy — bool(()) → False.
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
• For (0,) truthiness is True (non-empty).""",
    # 27 bool({})
    """• Empty dict is falsy — bool({}) → False.
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
• collections.Counter etc. follow len rule.""",
    # 28 bool(set())
    """• Empty set is falsy — same as empty dict/tuple logic by emptiness.

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
• frozenset() same falsy rule.""",
    # 29 bool(frozenset())
    """• Empty frozenset falsy; nonempty truthy.

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
• Hashable for dict keys when nonempty.""",
    # 30 "hello"[100:]
    """• Slice start past end returns empty string — no IndexError.
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
• Contrast s[100] IndexError.""",
    # 31 "hello"[-100:]
    """• Negative index start -100 clamps to beginning — whole string returned.
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
• Read slice semantics docs for step and omitted bounds.""",
    # 32 "hello"[2:100]
    """• Stop past end clamps to len — "hello"[2:100] == "hello"[2:5] == "llo".

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
• Slicing never raises for out-of-range — unlike indexing.""",
    # 33 "" + ""
    """• Concatenating two empty strings yields empty string.
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
• Prefer join for multiple pieces.""",
    # 34 "" * 1000
    """• Repetition of empty string 1000 times is still '' — len 0 * n is ''.
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
• Useful to remember mul identity for str.""",
    # 35 "a" * 0
    """• Zero repetitions yield empty string — any string * 0 → ''.

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
• str * negative raises ValueError in Python 3.""",
    # 36 "hello"[1:1]
    """• Empty slice when start==stop — ''.
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
• Useful for splice-like APIs.""",
    # 37 "hello"[3:1]
    """• Start > stop with positive step yields empty string — not an error.
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
• Use [::-1] for reverse.""",
    # 38 " ".isspace()
    """• Single space character is whitespace — .isspace() True.
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
• '\\n'.isspace() True

Notes:
• Do not use strip first if testing "only spaces".""",
    # 39 "\\n\\t".isspace()
    """• All characters are whitespace — True.
• Mixed whitespace still True if every char is whitespace.

How It Works:
• Each char must be whitespace.

Step-by-Step Execution:
1. "\\n\\t" two chars.
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
• ' \\t '.isspace() True

Notes:
• Different from empty string.""",
    # 40 "123".isdigit()
    """• All characters are decimal digits — True for "123".
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
• For strict ASCII, compare against charset or regex [0-9].""",
    # 41 "12.3".isdigit()
    """• Dot is not a digit — isdigit False for whole string.
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
• Use try/except float(s) for numeric input.""",
    # 42 "-5".isdigit()
    """• Minus sign is not a digit — isdigit False even though int("-5") works.
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
• For signed int validation, use regex or try int.""",
    # 43 — (placeholder; ID 594 fixed manually; not used)
    "",
    # 44 "abc 123".isalnum
    """• Space breaks alnum — every char must be letter or digit; space is neither.
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
• Normalize with replace(" ", "") if business rules allow — then test.""",
    # 45 "hello".isidentifier()
    """• Valid Python identifier: letters, digits, underscore; not starting with digit.
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
• "for" isidentifier True but reserved — check keyword module.""",
    # 46 "2hello".isidentifier()
    """• Cannot start with digit — False.

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
• Valid names vs valid identifiers differ from keywords.""",
    # 47 "for".isidentifier()
    """• "for" matches identifier pattern — isidentifier True.
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
• Always pair isidentifier with keyword check for safe codegen.""",
    # 48 keyword.iskeyword("for")
    """• keyword.iskeyword returns True for reserved words like "for".
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
• Keywords change between Python versions — test accordingly.""",
    # 49 type(1+2j)
    """• Complex literal type is complex — type(1+2j) is complex (display <class 'complex'>).
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
• Separate from float math — watch branch cuts in cmath.""",
]


def main() -> None:
    path = Path(__file__).resolve().parents[1] / "src/data/questions/level1_expert_b.ts"
    text = path.read_text(encoding="utf-8")
    # Remove placeholder entry (index 43) — not applied
    tails = [t for t in TAILS if t]
    count = text.count(BLOCK_START)
    if count != len(tails):
        raise SystemExit(f"Expected {len(tails)} generic blocks, found {count} in {path}")

    out = text
    for tail in tails:
        replacement = "Key Distinctions:\n" + tail
        idx = out.find(BLOCK_START)
        if idx == -1:
            raise SystemExit("BLOCK_START not found")
        end = out.find(BLOCK_END, idx)
        if end == -1:
            raise SystemExit("BLOCK_END not found")
        end += len(BLOCK_END)
        out = out[:idx] + replacement + out[end:]

    if BLOCK_START in out:
        raise SystemExit("Not all blocks replaced")

    path.write_text(out, encoding="utf-8")
    print(f"OK: patched {len(tails)} blocks in {path}")


if __name__ == "__main__":
    main()
