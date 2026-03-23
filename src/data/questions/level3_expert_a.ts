// --- LEVEL 3 EXPERT A: match/case (Structural Pattern Matching) & Walrus Operator (:=) — 50 TRULY UNIQUE QUESTIONS ---
export const level3ExpertA = [
  // ===== MATCH/CASE BASICS (1–15) =====

  // Q1
  (_i: number) => ({
    q: `What Python version introduced match/case (structural pattern matching)?`,
    o: ["3.10", "3.8", "3.9", "3.11"],
    c: 0,
    e: "Structural pattern matching with match/case was introduced in Python 3.10 (PEP 634).",
    de: `Python 3.10 introduced structural pattern matching via PEP 634, 635, and 636. This feature adds the match and case keywords to Python.

Key concepts:
• match/case is NOT the same as a switch/case from C or Java
• It performs structural pattern matching — matching the shape and content of data
• PEP 634 defines the syntax, PEP 635 the motivation, PEP 636 is a tutorial
• The keywords match and case are "soft keywords" — they only act as keywords inside match statements

Example:
>>> match command:
...     case "quit":
...         print("Goodbye")
...     case "hello":
...         print("Hi there")

Python versions: 3.10 (Oct 2021) and later support match/case.

Key Distinctions:
• PEP 634 introduced match/case in Python 3.10; earlier interpreters cannot parse the statement.
• Soft keywords match and case only act as keywords inside match grammar.

How It Works:
• Version gates belong in packaging (python_requires) and CI before using structural patterns.

Step-by-Step Execution:
1. Confirm sys.version_info >= (3, 10).
2. Only then ship modules that contain match statements.

Order of Operations:
• Syntax validity is decided at parse time — not a runtime flag.

Common Use Cases:
• Teaching modern control flow and pattern-rich APIs.

Edge Cases:
• Alternate implementations (older PyPy builds) may lag; test your matrix.

Performance Considerations:
• No runtime cost comparison needed — wrong version fails at import.

Examples:
• if sys.version_info < (3, 10): raise RuntimeError("need 3.10+")

Notes:
• Document minimum Python in pyproject.toml when adopting match/case.`
  }),

  // Q2
  (_i: number) => ({
    q: `What is result after:\nmatch 42:\n    case 42:\n        result = "found"`,
    o: ['result = "found"', 'result = 42', "SyntaxError", "No match"],
    c: 0,
    e: "The literal 42 matches case 42 exactly, so result is assigned \"found\".",
    de: `This is the simplest form of pattern matching — matching a literal value. When the subject (42) equals the case pattern (42), the block executes.

Key concepts:
• match evaluates the subject expression once
• Each case is tested in order from top to bottom
• Literal patterns match by equality (==)
• Once a case matches, its block runs and no further cases are checked

Example:
>>> match 42:
...     case 42:
...         result = "found"
>>> result
'found'

Literal patterns work with int, float, str, bytes, True, False, and None.

Key Distinctions:
• Literal value patterns use equality; case 42 matches an int subject equal to 42.
• No binding occurs unless you use capture patterns (bare names).

How It Works:
• Cases are tried in order; the first successful pattern runs its suite.

Step-by-Step Execution:
1. Evaluate subject 42.
2. Compare to pattern 42.
3. Execute assignment to result.

Order of Operations:
• Earlier cases win; keep specific literals before wildcards.

Common Use Cases:
• Numeric status codes and tokenized commands.

Edge Cases:
• Mixed float/int subjects need consistent patterns.

Performance Considerations:
• Small literal compares are O(1).

Examples:
• match n: case 0: ... case 1: ...

Notes:
• Add guards (if) when a range is better than many literals.`
  }),

  // Q3
  (_i: number) => ({
    q: `What is result after:\nmatch "hello":\n    case "hello":\n        result = "match"`,
    o: ['result = "match"', 'result = "hello"', "SyntaxError", "No match"],
    c: 0,
    e: "The string literal \"hello\" matches case \"hello\" exactly.",
    de: `String literals can be used directly as match patterns. The match works by equality — the subject string must be identical to the pattern string.

Key concepts:
• String matching is case-sensitive: "hello" matches "hello" but NOT "Hello"
• The match is exact — no partial matching with literals
• String patterns are one of the simplest literal patterns
• After matching, the case block executes and control moves past the match

Example:
>>> match "hello":
...     case "hello":
...         result = "match"
>>> result
'match'

Key Distinctions:
• String literal patterns require the whole subject string to equal the pattern value.
• This is not substring matching — use other tools for partial strings.

How It Works:
• str equality semantics apply between subject and pattern literal.

Step-by-Step Execution:
1. Subject is "hello".
2. Pattern "hello" matches.
3. Bind result in the case suite.

Order of Operations:
• Case order matters if multiple patterns could match.

Common Use Cases:
• CLI verbs and fixed protocol tokens.

Edge Cases:
• Unicode normalization can break naive equality — normalize first if needed.

Performance Compares:
• Short string compare is fast.

Examples:
• match cmd: case "start": ...

Notes:
• Use casefold() before match if you need case-insensitive commands.`
  }),

  // Q4
  (_i: number) => ({
    q: `What is r after:\nmatch 5:\n    case 1:\n        r = "one"\n    case 5:\n        r = "five"\n    case _:\n        r = "other"`,
    o: ['r = "five"', 'r = "one"', 'r = "other"', "SyntaxError"],
    c: 0,
    e: "The value 5 matches case 5, so r is \"five\". Cases are checked top to bottom and 5 matches the second case.",
    de: `When multiple cases are present, they are checked in order. The first matching case executes, then the entire match block is done.

Key concepts:
• case 1 does not match 5 — skipped
• case 5 matches 5 — r = "five" executes
• case _ is never reached because case 5 already matched
• There is no "fall-through" like in C/Java — only one case runs

Example:
>>> match 5:
...     case 1: r = "one"
...     case 5: r = "five"
...     case _: r = "other"
>>> r
'five'

Key Distinctions:
• Cases are evaluated top to bottom; the first matching pattern wins.
• Later cases are skipped after a match — order is part of the program logic.

How It Works:
• Subject 5 matches case 5 after case 1 fails.

Step-by-Step Execution:
1. Test case 1 (fails).
2. Test case 5 (succeeds).
3. Assign r = "five".

Order of Operations:
• Put cheaper or more specific tests first when readability allows.

Common Use Cases:
• Priority-based routing of small integer codes.

Edge Cases:
• Unreachable cases below an always-true pattern indicate a bug.

Performance Considerations:
• Linear scan of cases — keep ladders readable.

Examples:
• match x: case 0: ... case 1: ... case _: ...

Notes:
• Refactor huge ladders into dict dispatch when patterns repeat.`
  }),

  // Q5
  (_i: number) => ({
    q: `What does case _: mean in a match/case statement?`,
    o: ["Wildcard/default — matches anything", "Matches the underscore character", "Matches None", "Raises an error"],
    c: 0,
    e: "case _: is the wildcard/default case that matches any value, like a catch-all.",
    de: `The underscore _ in a case pattern is the wildcard pattern. It matches any value without binding it to a name.

Key concepts:
• case _: acts as a catch-all / default case
• It matches anything that didn't match previous cases
• The value is NOT captured — you can't use _ to refer to it
• It should typically be the last case (anything after it is unreachable)
• _ is special ONLY in match/case — elsewhere it's a normal variable

Example:
>>> match "unknown":
...     case "hello":
...         print("greeting")
...     case _:
...         print("something else")
something else

Unlike a variable pattern (case x:), the wildcard _ doesn't bind the matched value.

Key Distinctions:
• case _ is a wildcard that matches any subject and does not bind a name to it.
• It is the conventional default branch when you ignore the value.

How It Works:
• After other patterns fail, _ accepts anything.

Step-by-Step Execution:
1. Try explicit patterns.
2. Fall through to _ when nothing else fits.

Order of Operations:
• Typically place _ last to avoid masking specific cases.

Common Use Cases:
• Fallback logging and "else" behavior inside match.

Edge Cases:
• If no case matches and there is no _, Python raises MatchError.

Performance Considerations:
• Wildcard acceptance is O(1).

Examples:
• case _: pass

Notes:
• For enums, consider covering all members explicitly for maintainability.`
  }),

  // Q6
  (_i: number) => ({
    q: `What is r after:\nmatch 99:\n    case 1:\n        r = "one"\n    case _:\n        r = "other"`,
    o: ['r = "other"', 'r = "one"', "NameError", "None"],
    c: 0,
    e: "99 doesn't match case 1, so the wildcard case _: catches it and r = \"other\".",
    de: `When no specific case matches the subject, the wildcard case _: acts as a default handler and catches everything else.

Key concepts:
• match 99 — the subject is 99
• case 1: does not match (99 != 1), so it's skipped
• case _: matches everything — r = "other" executes
• Without case _:, if nothing matches, nothing happens (no error)

Example:
>>> match 99:
...     case 1: r = "one"
...     case _: r = "other"
>>> r
'other'

Key Distinctions:
• Subject 99 fails case 1; wildcard case _ runs and assigns r = "other".
• Guards are optional; here patterns alone decide.

How It Works:
• Linear search stops at the first successful pattern.

Step-by-Step Execution:
1. 99 == 1 is false.
2. _ matches 99.
3. r becomes "other".

Order of Operations:
• Specific patterns before catch-all.

Common Use Cases:
• Default bucket for unexpected enum-like ints.

Edge Cases:
• Forgetting _ yields MatchError on unexpected input.

Performance Considerations:
• Few comparisons for small ladders.

Examples:
• match code: case 200: ... case _: ...

Notes:
• Log inside _ during development to spot unexpected values.`
  }),

  // Q7
  (_i: number) => ({
    q: `What is r after:\nmatch (1, 2):\n    case (1, 2):\n        r = "tuple match"`,
    o: ['r = "tuple match"', "SyntaxError", "No match", "TypeError"],
    c: 0,
    e: "Tuples can be matched structurally — (1, 2) matches the pattern (1, 2).",
    de: `match/case supports sequence patterns that can match tuples and lists. A tuple pattern matches if the subject is a sequence of the same length with matching elements.

Key concepts:
• (1, 2) as a pattern matches any sequence of length 2 where elements are 1 and 2
• The pattern matches both tuples and lists: [1, 2] would also match (1, 2)
• Sequence patterns check length first, then each element
• Nested tuples work too: (1, (2, 3)) matches a nested structure

Example:
>>> match (1, 2):
...     case (1, 2):
...         r = "tuple match"
>>> r
'tuple match'

Key Distinctions:
• Tuple patterns require the same length and matching elements position-wise.
• (1, 2) matches a two-tuple with those exact values.

How It Works:
• Structural recursion compares nested patterns element by element.

Step-by-Step Execution:
1. Subject (1, 2).
2. Pattern (1, 2) succeeds.
3. Assign r.

Order of Operations:
• Fixed-length tuple patterns differ from open patterns with *.

Common Use Cases:
• Points, pairs returned from functions.

Edge Cases:
• Single-element tuple pattern syntax differs from expression syntax.

Performance Considerations:
• Small tuples compare quickly.

Examples:
• case (x, y): ...

Notes:
• Use *rest in patterns for longer sequences when needed.`
  }),

  // Q8
  (_i: number) => ({
    q: `What is r after:\nmatch [1, 2, 3]:\n    case [1, 2, 3]:\n        r = "list match"`,
    o: ['r = "list match"', "SyntaxError", "No match — lists can't be matched", "TypeError"],
    c: 0,
    e: "Lists can be matched structurally — [1, 2, 3] matches the pattern [1, 2, 3].",
    de: `Sequence patterns in match/case work with both lists and tuples. The pattern [1, 2, 3] will match any sequence of length 3 with those exact elements.

Key concepts:
• Sequence patterns use [] or () syntax interchangeably
• [1, 2, 3] as a pattern matches lists AND tuples with those elements
• The match checks: correct length, then each element by position
• A pattern [1, 2, 3] matches (1, 2, 3), [1, 2, 3], or any other Sequence

Example:
>>> match [1, 2, 3]:
...     case [1, 2, 3]:
...         r = "list match"
>>> r
'list match'

Key Distinctions:
• List patterns mirror list structure; elements must match in order.
• Length must match for fixed patterns like [1, 2, 3].

How It Works:
• Sequence patterns delegate to element subpatterns.

Step-by-Step Execution:
1. Subject [1, 2, 3].
2. Pattern [1, 2, 3] matches.
3. Bind r.

Order of Operations:
• Nested lists recurse — mind stack depth on deep trees.

Common Use Cases:
• Parsed JSON-like lists with known arity.

Edge Cases:
• Heterogeneous lists still match if literals align.

Performance Considerations:
• O(n) in matched length.

Examples:
• case [a, b, c]: ...

Notes:
• Prefer *rest or *middle patterns for variable-length lists.`
  }),

  // Q9
  (_i: number) => ({
    q: `Can match/case match on type? For example: case int()`,
    o: ["Yes — case int() matches any integer", "No — type matching is not supported", "Only with isinstance()", "Only for str and int"],
    c: 0,
    e: "Yes, class patterns like case int(): match objects of that type.",
    de: `Class patterns allow you to match by type. Writing case int(): matches any integer value, case str(): matches any string, and so on.

Key concepts:
• case int(): matches any int value (42, 0, -5, etc.)
• case str(): matches any string value ("hello", "", etc.)
• case float(): matches any float value (3.14, 0.0, etc.)
• You can combine with capture: case int(x) is NOT valid for built-ins — use case int() as x:
• Custom classes can define __match_args__ for positional patterns

Example:
>>> match 42:
...     case int():
...         print("It's an integer!")
It's an integer!

Class patterns are powerful for type-based dispatching.

Key Distinctions:
• case int() is a class pattern that succeeds when isinstance(subject, int) (without capture).
• It differs from a literal int pattern like case 0.

How It Works:
• Class patterns can include arguments for positional/keyword captures.

Step-by-Step Execution:
1. isinstance(subject, int) for int().
2. Branch runs if true.

Order of Operations:
• Put bool before int if you must separate bool from int — bool subclasses int.

Common Use Cases:
• Type-based dispatch on simple scalars.

Edge Cases:
• Custom classes need __match_args__ for positional class patterns.

Performance Considerations:
• isinstance checks are cheap for built-ins.

Examples:
• case int(x): ... binds x.

Notes:
• Read PEP 634 class pattern details before emulating C++ overloads.`
  }),

  // Q10
  (_i: number) => ({
    q: `What is r after:\nmatch 42:\n    case int():\n        r = "int"\n    case str():\n        r = "str"`,
    o: ['r = "int"', 'r = "str"', "SyntaxError", "No match"],
    c: 0,
    e: "42 is an int, so case int(): matches and r = \"int\".",
    de: `Class patterns match the type of the subject. Since 42 is an integer, case int(): matches it. The str() pattern is never reached.

Key concepts:
• case int() matches any value of type int
• 42 is an int, so the first case matches
• case str() is skipped because the first case already matched
• Bool is a subclass of int: True and False would also match case int()

Example:
>>> match 42:
...     case int(): r = "int"
...     case str(): r = "str"
>>> r
'int'

Note: True/False match int() because bool is a subclass of int in Python.

Key Distinctions:
• Subject 42 matches case int() first; str() is never attempted for this subject.
• Pattern order fixes which branch runs for isinstance-compatible types.

How It Works:
• First successful pattern wins; later branches are skipped.

Step-by-Step Execution:
1. int pattern matches 42.
2. r = "int".

Order of Operations:
• Arrange from narrow to broad when overlaps exist.

Common Use Cases:
• Union-like values without explicit Union objects.

Edge Cases:
• Reordering cases changes behavior — document intent.

Performance Considerations:
• One successful isinstance stops the ladder.

Examples:
• match v: case int(): ... case str(): ...

Notes:
• Combine with guards for numeric ranges inside int.`
  }),

  // Q11
  (_i: number) => ({
    q: `What is r after:\nmatch "hi":\n    case int():\n        r = "int"\n    case str():\n        r = "str"`,
    o: ['r = "str"', 'r = "int"', "SyntaxError", "No match"],
    c: 0,
    e: "\"hi\" is a string, so case str(): matches and r = \"str\".",
    de: `The string "hi" does not match case int(), so that case is skipped. It does match case str(), so r is assigned "str".

Key concepts:
• "hi" is of type str, not int
• case int() does not match — skipped
• case str() matches — r = "str" executes
• Class patterns perform an isinstance() check under the hood

Example:
>>> match "hi":
...     case int(): r = "int"
...     case str(): r = "str"
>>> r
'str'

Key Distinctions:
• Subject "hi" matches str() class pattern; int() fails first in typical ordering.
• Pattern order must list int() before str() only if you want ints first — here str wins for "hi".

How It Works:
• isinstance("hi", str) satisfies str() pattern.

Step-by-Step Execution:
1. Try int() — false.
2. Try str() — true.
3. r = "str".

Order of Operations:
• Class patterns use isinstance semantics.

Common Use Cases:
• Accepting either numeric or textual payloads.

Edge Cases:
• bool subclassing int can surprise — order bool cases first if needed.

Performance Considerations:
• Two isinstance checks worst case.

Examples:
• match v: case int(): ... case str(): ...

Notes:
• Capture with case str(s) when you need the value.`
  }),

  // Q12
  (_i: number) => ({
    q: `Does match/case use == comparison or structural pattern matching?`,
    o: ["Structural pattern matching", "== comparison only", "is comparison", "hash comparison"],
    c: 0,
    e: "match/case uses structural pattern matching, not simple == comparison.",
    de: `Although literal patterns look like equality checks, match/case is fundamentally structural pattern matching — it inspects the shape and content of data.

Key concepts:
• Literal patterns (case 42:) do use equality for matching
• But the system is much more powerful than just ==
• Sequence patterns destructure lists/tuples: case [x, y, z]:
• Mapping patterns destructure dicts: case {"key": value}:
• Class patterns check type and attributes: case Point(x=0):
• Guard clauses add conditions: case x if x > 0:
• OR patterns combine options: case 0 | 1:

The name "structural pattern matching" means it matches the STRUCTURE of data, not just its value. You can decompose complex nested objects in a single pattern.

Key Distinctions:
• Structural pattern matching compares shape recursively; it is not a single == on the whole object.
• Literal and class patterns combine to express richer shapes than one equality check.

How It Works:
• The match protocol dispatches on pattern kinds defined in PEP 634.

Step-by-Step Execution:
1. Classify subject structure.
2. Compare to pattern tree.
3. Run suite or fail.

Order of Operations:
• Patterns may bind names while == on arbitrary objects does not.

Common Use Cases:
• AST-like trees and nested JSON.

Edge Cases:
• Objects without match support may fall back to limited behavior.

Performance Considerations:
• Deep patterns cost more than flat ==.

Examples:
• case {"k": v}: ...

Notes:
• Use match when shape matters; use == for simple scalar equality.`
  }),

  // Q13
  (_i: number) => ({
    q: `What is r after:\nmatch {"a": 1}:\n    case {"a": 1}:\n        r = "match"`,
    o: ['r = "match"', "SyntaxError", "No match — dicts can't be matched", "TypeError"],
    c: 0,
    e: "Mapping patterns can match dictionaries — {\"a\": 1} matches the pattern.",
    de: `Mapping patterns match dictionaries by checking for the presence of specific keys with specific values. Extra keys in the subject are allowed.

Key concepts:
• case {"a": 1}: matches any dict that has key "a" with value 1
• Extra keys in the subject dict are ignored (partial matching)
• Keys must be literals or dotted names (not variables)
• Values can be patterns (literals, captures, nested patterns)

Example:
>>> match {"a": 1}:
...     case {"a": 1}:
...         r = "match"
>>> r
'match'

This also works: match {"a": 1, "b": 2}: case {"a": 1}: matches (extra key "b" is ignored).

Key Distinctions:
• Mapping patterns match dict keys and values; {"a": 1} requires key "a" with value 1.
• Extra keys in the subject may or may not be allowed — full mapping requires exact keys unless using ** captures.

How It Works:
• Keys are checked for presence and subpatterns match values.

Step-by-Step Execution:
1. Subject dict has "a":1.
2. Pattern {"a":1} matches.
3. r = "match".

Order of Operations:
• Partial dict patterns are a separate feature — read PEP 634 mapping rules.

Common Use Cases:
• JSON event payloads with known required fields.

Edge Cases:
• Key order is irrelevant for equality; matching uses key lookup.

Performance Considerations:
• O(k) in number of pattern keys.

Examples:
• case {"status": code}: ...

Notes:
• Use **rest to accept additional keys explicitly.`
  }),

  // Q14
  (_i: number) => ({
    q: `Can match/case match partial dictionaries?\nFor example: case {"a": x} matching {"a": 1, "b": 2}`,
    o: ["Yes — extra keys are ignored", "No — all keys must be present", "Only with **rest", "Raises KeyError"],
    c: 0,
    e: "Yes — mapping patterns match partial dicts. Extra keys in the subject are ignored.",
    de: `Mapping patterns perform partial matching by default. The pattern only needs to specify the keys it cares about — any additional keys in the subject are silently ignored.

Key concepts:
• case {"a": x}: matches any dict containing key "a", regardless of other keys
• x captures the value associated with "a"
• {"a": 1, "b": 2, "c": 3} would match case {"a": x}: with x = 1
• To capture remaining keys, use **rest: case {"a": x, **rest}:
• This is different from sequences, which require exact length (unless using *)

Example:
>>> match {"a": 1, "b": 2}:
...     case {"a": x}:
...         print(x)
1

The pattern only required key "a" — key "b" was ignored.

Key Distinctions:
• Partial mapping patterns can match when required keys exist even if extra keys are present.
• PEP 634 allows partial matching — not a full dict equality.

How It Works:
• Specified keys must exist and subpatterns must match; others ignored unless ** forbids them.

Step-by-Step Execution:
1. Check keys in pattern exist in subject.
2. Match subpatterns for values.

Order of Operations:
• Contrast with == on dicts which compares full contents.

Common Use Cases:
• Evolving APIs where clients send superset fields.

Edge Cases:
• Versioning: new keys should not break partial patterns.

Performance Considerations:
• Hash lookups per pattern key.

Examples:
• case {"a": x}: ... with subject {"a":1,"b":2}

Notes:
• Document whether your pattern is partial or exact for readers.`
  }),

  // Q15
  (_i: number) => ({
    q: `What is r after:\nmatch {"a": 1, "b": 2}:\n    case {"a": x}:\n        r = x`,
    o: ["r = 1", "r = 2", 'r = {"a": 1}', "KeyError"],
    c: 0,
    e: "The mapping pattern captures the value of key \"a\" into x. Extra key \"b\" is ignored.",
    de: `Mapping patterns can capture values using variable names. Here, x in {"a": x} captures whatever value is associated with key "a".

Key concepts:
• case {"a": x}: matches any dict with key "a" and captures its value in x
• The subject {"a": 1, "b": 2} has key "a" with value 1
• x is bound to 1
• Key "b" is ignored because the pattern doesn't mention it
• r = x assigns 1 to r

Example:
>>> match {"a": 1, "b": 2}:
...     case {"a": x}:
...         r = x
>>> r
1

To also capture "b", use: case {"a": x, "b": y}:

Key Distinctions:
• Binding pattern {"a": x} captures the value at key "a" into name x.
• Here x becomes 1 from {"a":1,"b":2}.

How It Works:
• Mapping pattern with a capture name assigns the matched value.

Step-by-Step Execution:
1. Key "a" present.
2. Value 1 matches subpattern (capture).
3. r = x which is 1.

Order of Operations:
• Name binding is local to the case suite.

Common Use Cases:
• Extracting fields from records.

Edge Cases:
• Missing keys cause pattern failure, not KeyError in match.

Performance Considerations:
• Dict lookup per key.

Examples:
• case {"user": u}: ...

Notes:
• Combine guards to validate captured values.`
  }),

  // ===== MATCH/CASE ADVANCED PATTERNS (16–30) =====

  // Q16
  (_i: number) => ({
    q: `What is r after:\nmatch [1, 2, 3]:\n    case [1, *rest]:\n        r = rest`,
    o: ["r = [2, 3]", "r = (2, 3)", "r = [1, 2, 3]", "SyntaxError"],
    c: 0,
    e: "The star pattern *rest captures remaining elements as a list: [2, 3].",
    de: `The star pattern (*name) in sequence matching captures zero or more remaining elements into a list. It works like unpacking in assignments.

Key concepts:
• case [1, *rest]: matches any sequence starting with 1
• *rest captures everything after the first element as a list
• For [1, 2, 3]: first element is 1 (matches), rest = [2, 3]
• The captured variable is always a list, even if the subject is a tuple
• You can have at most one starred pattern per sequence

Example:
>>> match [1, 2, 3]:
...     case [1, *rest]:
...         r = rest
>>> r
[2, 3]

Key Distinctions:
• Sequence patterns with star capture: [1, *rest] binds rest to the tail after the fixed prefix.
• Subject [1,2,3] yields rest = [2,3].

How It Works:
• *rest collects remaining elements matching the star pattern rules.

Step-by-Step Execution:
1. Match fixed leading 1.
2. Bind rest to remaining list.

Order of Operations:
• Fixed elements must align before star absorption.

Common Use Cases:
• Command args where head is opcode and tail is operands.

Edge Cases:
• Empty tail if nothing follows fixed prefix.

Performance Considerations:
• O(n) to build rest.

Examples:
• case [cmd, *args]: ...

Notes:
• Use *middle between stars for splitting three parts.`
  }),

  // Q17
  (_i: number) => ({
    q: `What is r after:\nmatch [1]:\n    case [1, *rest]:\n        r = rest`,
    o: ["r = []", "No match", "r = [1]", "SyntaxError"],
    c: 0,
    e: "The star pattern captures zero elements when there's nothing after 1, resulting in an empty list.",
    de: `A starred pattern can capture zero elements. If the sequence has only the explicitly matched parts, the star variable gets an empty list.

Key concepts:
• case [1, *rest]: requires the sequence to start with 1
• [1] starts with 1 — the pattern matches
• There are no remaining elements after 1, so rest = []
• The star pattern captures zero or more — zero is valid
• This is analogous to: first, *rest = [1] gives rest = []

Example:
>>> match [1]:
...     case [1, *rest]:
...         r = rest
>>> r
[]

Key Distinctions:
• Single-element list [1] with pattern [1, *rest] binds rest to [] — star may be empty.
• Star patterns allow zero-or-more semantics for the captured slice.

How It Works:
• After matching literal 1, no elements remain so rest is empty.

Step-by-Step Execution:
1. Match 1 at head.
2. rest defaults to [].

Order of Operations:
• Contrast with requiring at least one tail element — use extra literal checks.

Common Use Cases:
• Optional trailing arguments.

Edge Cases:
• Clarify whether empty rest is valid for your domain.

Performance Considerations:
• Allocates small list for rest.

Examples:
• case [first, *rest]: ...

Notes:
• Test len(rest) in guard if a minimum arity is required.`
  }),

  // Q18
  (_i: number) => ({
    q: `What is r after:\nmatch [1, 2, 3, 4]:\n    case [first, *middle, last]:\n        r = middle`,
    o: ["r = [2, 3]", "r = [1, 2, 3]", "r = [3, 4]", "SyntaxError"],
    c: 0,
    e: "Star in the middle captures everything between first and last: [2, 3].",
    de: `The star pattern can appear at any position in a sequence pattern — beginning, middle, or end. When in the middle, it captures everything between the explicitly matched elements.

Key concepts:
• case [first, *middle, last]: matches sequences of length >= 2
• first = 1 (first element), last = 4 (last element)
• *middle captures everything in between: [2, 3]
• This is equivalent to: first, *middle, last = [1, 2, 3, 4]

Example:
>>> match [1, 2, 3, 4]:
...     case [first, *middle, last]:
...         r = middle
>>> r
[2, 3]

Also: first = 1, last = 4.

Key Distinctions:
• Multiple stars: [first, *middle, last] splits head, middle, tail on a four-element list.
• middle captures the interior elements between first and last.

How It Works:
• Star middle absorbs all between fixed ends when unambiguous.

Step-by-Step Execution:
1. first=1, last=4 on [1,2,3,4].
2. middle=[2,3].

Order of Operations:
• Pattern length constraints must be satisfiable.

Common Use Cases:
• Parsing bracketed lists with known ends.

Edge Cases:
• Too-short lists fail the pattern.

Performance Considerations:
• Slicing work proportional to length.

Examples:
• case [lo, *mid, hi]: ...

Notes:
• Prefer simple patterns when readability drops.`
  }),

  // Q19
  (_i: number) => ({
    q: `What is r after:\nmatch (1, "a"):\n    case (int(x), str(y)):\n        r = (x, y)`,
    o: ["SyntaxError", 'r = (1, "a")', "r = (int, str)", "No match"],
    c: 0,
    e: "For built-in types, positional capture like int(x) is not valid — this raises SyntaxError.",
    de: `Built-in types like int and str do not define __match_args__, so you cannot use positional sub-patterns like int(x). This is a common mistake.

Key concepts:
• case int(): matches any integer (no capture)
• case int(x): tries to use a positional pattern, but int has no __match_args__
• This results in a TypeError at pattern compilation time
• To capture the matched value, use an AS pattern: case int() as x:
• Custom classes can define __match_args__ to enable positional patterns

Correct way to capture:
>>> match (1, "a"):
...     case (int() as x, str() as y):
...         r = (x, y)
>>> r
(1, 'a')

The as keyword binds the matched value to a variable.

Key Distinctions:
• Class patterns int(x) and str(y) capture components from a tuple subject (1, "a").
• x becomes 1, y becomes "a".

How It Works:
• Positional arguments inside class patterns bind captures from tuple elements.

Step-by-Step Execution:
1. Subject tuple unpacked to patterns.
2. isinstance checks per element.
3. Bind x,y.

Order of Operations:
• Nested patterns recurse element-wise.

Common Use Cases:
• Row tuples from CSV or SQL.

Edge Cases:
• Wrong arity raises pattern failure.

Performance Considerations:
• Small tuple unpacking.

Examples:
• case (int(a), str(b)): ...

Notes:
• __match_args__ defines ordering for custom classes.`
  }),

  // Q20
  (_i: number) => ({
    q: `What is r after:\nmatch 42:\n    case x if x > 10:\n        r = "big"\n    case x:\n        r = "small"`,
    o: ['r = "big"', 'r = "small"', "SyntaxError", "r = 42"],
    c: 0,
    e: "case x matches any value and binds it. The guard if x > 10 is True (42 > 10), so r = \"big\".",
    de: `Guard clauses (if conditions after a pattern) add extra constraints to a case. The pattern must match AND the guard must be True for the case to execute.

Key concepts:
• case x: is a capture pattern — it matches ANY value and binds it to x
• if x > 10 is a guard — an additional condition
• 42 matches case x (x = 42), then the guard 42 > 10 is True
• So r = "big" executes
• If the guard were False, this case would be skipped and the next case checked

Example:
>>> match 42:
...     case x if x > 10: r = "big"
...     case x: r = "small"
>>> r
'big'

Guards are evaluated only after the pattern matches successfully.

Key Distinctions:
• Guards add boolean tests after pattern matches: case x if x > 10.
• Pattern binds x first; guard filters.

How It Works:
• Guard evaluated only after successful pattern.

Step-by-Step Execution:
1. Bind x = 42.
2. Guard 42 > 10 true.
3. r = "big".

Order of Operations:
• Guards run after bindings — names from pattern are in scope.

Common Use Cases:
• Numeric ranges and cross-field validation.

Edge Cases:
• Guard exceptions propagate — keep guards simple.

Performance Considerations:
• Extra boolean work per candidate case.

Examples:
• case n if n % 2 == 0:

Notes:
• Avoid heavy work in guards; refactor to helpers.`
  }),

  // Q21
  (_i: number) => ({
    q: `What is r after:\nmatch 5:\n    case x if x > 10:\n        r = "big"\n    case x:\n        r = "small"`,
    o: ['r = "small"', 'r = "big"', "SyntaxError", "NameError"],
    c: 0,
    e: "case x matches 5, but the guard x > 10 is False (5 > 10 is False). Falls through to case x: without guard.",
    de: `When a guard clause fails, the case is skipped even though the pattern matched. The match continues to the next case.

Key concepts:
• case x if x > 10: — x captures 5, but 5 > 10 is False
• Guard fails → this case is skipped
• case x: (no guard) — x captures 5, always matches
• r = "small" executes

Example:
>>> match 5:
...     case x if x > 10: r = "big"
...     case x: r = "small"
>>> r
'small'

A case without a guard after a guarded case acts as a fallback for when the guard fails.

Key Distinctions:
• Subject 5 binds to x, but guard x > 10 fails — fall through to next case.
• Second case x matches without guard and runs.

How It Works:
• Failed guard does not commit the case — try next pattern.

Step-by-Step Execution:
1. x=5.
2. Guard false.
3. Next case x matches; r="small".

Order of Operations:
• Guards partition the same bound name.

Common Use Cases:
• Bucketing values after capture.

Edge Cases:
• Ensure later cases remain reachable.

Performance Considerations:
• Two pattern attempts may occur.

Examples:
• case n if n < 0: ... case n: ...

Notes:
• Order guards from most specific to general on same binding.`
  }),

  // Q22
  (_i: number) => ({
    q: `What is r after:\nmatch 0:\n    case 0 | 1:\n        r = "binary"`,
    o: ['r = "binary"', "SyntaxError", "No match", "r = 0"],
    c: 0,
    e: "The OR pattern 0 | 1 matches if the subject is 0 OR 1. Since subject is 0, it matches.",
    de: `OR patterns use the | operator to combine multiple patterns. The case matches if any of the sub-patterns match.

Key concepts:
• case 0 | 1: matches if the value is 0 or 1
• The subject is 0, which matches the first alternative
• | in patterns means OR (not bitwise or)
• You can chain multiple: case 0 | 1 | 2 | 3:
• All alternatives must bind the same set of variables (if any)

Example:
>>> match 0:
...     case 0 | 1:
...         r = "binary"
>>> r
'binary'

OR patterns are great for handling multiple values the same way.

Key Distinctions:
• Value patterns joined by | match if any alternative matches; case 0 | 1 matches 0.
• Similar to multiple literals in one case line.

How It Works:
• Alternatives are tried within the same case clause.

Step-by-Step Execution:
1. Subject 0.
2. Matches 0 | 1.
3. r = "binary".

Order of Operations:
• | inside patterns is not the bitwise or operator.

Common Use Cases:
• Small finite sets of allowed constants.

Edge Cases:
• Large unions may be clearer as separate cases.

Performance Considerations:
• Small fixed checks.

Examples:
• case "y" | "yes": ...

Notes:
• Combine with guards when alternatives need ranges.`
  }),

  // Q23
  (_i: number) => ({
    q: `What is r after:\nmatch 1:\n    case 0 | 1:\n        r = "binary"\n    case _:\n        r = "other"`,
    o: ['r = "binary"', 'r = "other"', "SyntaxError", "r = 1"],
    c: 0,
    e: "1 matches the OR pattern 0 | 1, so r = \"binary\". The wildcard case is not reached.",
    de: `The OR pattern 0 | 1 matches the value 1 (the second alternative). Once a case matches, subsequent cases are not checked.

Key concepts:
• match 1 — subject is 1
• case 0 | 1: — 1 matches this pattern (second alternative)
• r = "binary" executes
• case _: is not reached
• First match wins — order matters

Example:
>>> match 1:
...     case 0 | 1: r = "binary"
...     case _: r = "other"
>>> r
'binary'

Key Distinctions:
• Subject 1 matches 0|1 branch; case _ not needed when earlier case covers.
• Order alternatives within | does not matter for simple literals.

How It Works:
• First matching case wins at case level, not | level.

Step-by-Step Execution:
1. Match 0|1 with subject 1.
2. Assign binary.

Order of Operations:
• Include _ if you need a catch-all after binary cases.

Common Use Cases:
• Bit flags and small enums.

Edge Cases:
• Exhaustiveness — add _ for unexpected.

Performance Considerations:
• Trivial.

Examples:
• case 200 | 201: ...

Notes:
• Document meaning of each alternative in comments.`
  }),

  // Q24
  (_i: number) => ({
    q: `What is r after:\nmatch 5:\n    case 0 | 1:\n        r = "binary"\n    case _:\n        r = "other"`,
    o: ['r = "other"', 'r = "binary"', "SyntaxError", "No match"],
    c: 0,
    e: "5 does not match 0 | 1, so the wildcard case _: catches it and r = \"other\".",
    de: `When the subject doesn't match the OR pattern, the match continues to subsequent cases. The wildcard case _: catches everything else.

Key concepts:
• match 5 — subject is 5
• case 0 | 1: — 5 is neither 0 nor 1, so this case is skipped
• case _: — wildcard matches anything, so r = "other"

Example:
>>> match 5:
...     case 0 | 1: r = "binary"
...     case _: r = "other"
>>> r
'other'

Key Distinctions:
• Subject 5 fails 0|1 pattern; wildcard _ runs and labels other.
• Shows | pattern does not match all ints.

How It Works:
• Failed pattern moves to next case.

Step-by-Step Execution:
1. 5 not in {0,1} for pattern.
2. _ matches.

Order of Operations:
• Specific unions before broad wildcards.

Common Use Cases:
• Rejecting invalid enum codes with a default path.

Edge Cases:
• MatchError if neither union nor _ matches.

Performance Considerations:
• Small ladder.

Examples:
• case 0 | 1: ... case _: ...

Notes:
• Log unexpected values in _ during QA.`
  }),

  // Q25
  (_i: number) => ({
    q: `What happens if no case matches in a match statement and there is no case _:?`,
    o: ["Nothing — execution continues past the match block", "MatchError is raised", "SyntaxError", "The program crashes"],
    c: 0,
    e: "If no case matches, nothing happens — the match block is silently skipped.",
    de: `Unlike some languages that require exhaustive matching, Python's match/case silently does nothing if no case matches. This is by design.

Key concepts:
• No case matching → no error, no exception
• Execution simply continues after the match block
• This is similar to an if/elif chain with no else
• case _: is optional — it's just a catch-all
• Variables in unmatched patterns are never bound

Example:
>>> x = "undefined"
>>> match 42:
...     case "hello":
...         x = "matched"
>>> x
'undefined'  # x was never reassigned

Best practice: include case _: to handle unexpected values explicitly.

Key Distinctions:
• Without a matching case and no case _, Python raises MatchError at runtime.
• Unlike if/elif, match may fail explicitly.

How It Works:
• Exhaustiveness is not proven by the type checker unless you use tooling.

Step-by-Step Execution:
1. Test all cases.
2. None succeed.
3. Raise MatchError.

Order of Operations:
• Either add case _ or cover all possibilities.

Common Use Cases:
• Enforcing complete handling of sealed sets.

Edge Cases:
• Optional: capture subject in handler via try/except MatchError.

Performance Considerations:
• Failure is exceptional — not hot-path.

Examples:
• try: match x: ... except MatchError:

Notes:
• mypy plugins can help check exhaustiveness for enums.`
  }),

  // Q26
  (_i: number) => ({
    q: `What is r after:\nmatch ("hello", 200):\n    case (str() as msg, 200):\n        r = msg`,
    o: ['r = "hello"', "r = 200", "SyntaxError", "No match"],
    c: 0,
    e: "The pattern matches a tuple: str() as msg captures \"hello\", and 200 matches literally.",
    de: `This combines a class pattern with an AS pattern and a literal pattern in a tuple. Each element is matched independently.

Key concepts:
• case (str() as msg, 200): is a sequence pattern with two sub-patterns
• First element: str() as msg — matches any string and captures it as msg
• Second element: 200 — literal match
• "hello" is a str → matches, msg = "hello"
• 200 == 200 → matches
• Both elements match, so the case executes

Example:
>>> match ("hello", 200):
...     case (str() as msg, 200):
...         r = msg
>>> r
'hello'

The as keyword captures the matched value into a variable.

Key Distinctions:
• str() as msg binds the subject to name msg when pattern succeeds.
• Combined with literal 200 in tuple pattern for structured rows.

How It Works:
• as binds the entire matched pattern or subpattern per PEP 634.

Step-by-Step Execution:
1. Tuple subject matches (str, 200).
2. msg captures "hello".

Order of Operations:
• as clarifies which subpattern binds which name.

Common Use Cases:
• Extracting fields while also testing structure.

Edge Cases:
• Name collisions — follow scoping rules in case suite.

Performance Considerations:
• Cheap binds.

Examples:
• case Point(x, y) as p:

Notes:
• Read PEP for exact as placement rules.`
  }),

  // Q27
  (_i: number) => ({
    q: `What is r after:\nmatch {"type": "error", "code": 404}:\n    case {"type": "error", "code": code}:\n        r = code`,
    o: ["r = 404", 'r = "error"', 'r = {"type": "error", "code": 404}', "KeyError"],
    c: 0,
    e: "The mapping pattern matches the dict. \"type\" matches \"error\" literally, and code captures 404.",
    de: `Mapping patterns can mix literal matching and variable capture. Keys with literal values must match exactly, while keys with variable names capture the value.

Key concepts:
• "type": "error" — literal match: the dict must have key "type" with value "error"
• "code": code — capture: the value of key "code" is bound to variable code
• The subject has "type" = "error" (matches) and "code" = 404 (captured)
• code = 404, so r = 404

Example:
>>> match {"type": "error", "code": 404}:
...     case {"type": "error", "code": code}:
...         r = code
>>> r
404

This pattern is powerful for parsing structured data like API responses or messages.

Key Distinctions:
• Nested mapping pattern binds code while checking nested keys and literals.
• {"type":"error","code":404} matches and binds code variable.

How It Works:
• Mapping patterns compose with literal and capture subpatterns.

Step-by-Step Execution:
1. Keys exist.
2. code captures 404.

Order of Operations:
• Validate required structure before using captures.

Common Use Cases:
• API error envelopes.

Edge Cases:
• Optional keys need alternate patterns or guards.

Performance Considerations:
• Dict lookups only for keys in pattern.

Examples:
• case {"data": {"id": i}}:

Notes:
• Keep patterns aligned with JSON schema docs.`
  }),

  // Q28
  (_i: number) => ({
    q: `Can you use match/case with class instances? If so, what enables positional matching?`,
    o: ["Yes — __match_args__ defines positional pattern fields", "No — only built-in types work", "Yes — __init__ is used automatically", "Yes — __slots__ defines the fields"],
    c: 0,
    e: "Yes, custom classes can define __match_args__ to specify which attributes are matched positionally.",
    de: `Custom classes can participate in pattern matching by defining __match_args__, a class-level tuple that maps positional patterns to attribute names.

Key concepts:
• __match_args__ = ("x", "y") means case MyClass(a, b): checks self.x == a and self.y == b
• Without __match_args__, only keyword patterns work: case MyClass(x=a, y=b):
• dataclasses automatically define __match_args__ based on field order
• Built-in types like int, str do NOT have __match_args__

Example:
>>> from dataclasses import dataclass
>>> @dataclass
... class Point:
...     x: int
...     y: int
>>> match Point(1, 2):
...     case Point(0, 0): print("origin")
...     case Point(x, y): print(f"({x}, {y})")
(1, 2)

dataclass auto-generates __match_args__ = ('x', 'y').

Key Distinctions:
• Custom classes can participate via __match_args__ and optional __match__ for advanced protocols.
• Instances match positional class patterns when configured.

How It Works:
• PEP 634 defines how objects expose subpatterns for matching.

Step-by-Step Execution:
1. isinstance check.
2. Map attributes per __match_args__.

Order of Operations:
• Dataclasses often work out of the box.

Common Use Cases:
• AST nodes and ORM rows.

Edge Cases:
• Legacy classes without hooks may match only as object patterns.

Performance Considerations:
• Attribute reads per slot.

Examples:
• case Point(x, y):

Notes:
• Prefer isinstance + attributes if patterns are too heavy.`
  }),

  // Q29
  (_i: number) => ({
    q: `What is r after:\nmatch [1, 2]:\n    case [1, 2]:\n        r = "exact"\n    case [1, *_]:\n        r = "starts with 1"`,
    o: ['r = "exact"', 'r = "starts with 1"', "SyntaxError", "Both cases match"],
    c: 0,
    e: "Both patterns match [1, 2], but the first matching case wins. r = \"exact\".",
    de: `When multiple cases could match the subject, the first one wins. Python evaluates cases top to bottom and executes only the first match.

Key concepts:
• case [1, 2]: matches [1, 2] exactly — this is the first case, so it runs
• case [1, *_]: would also match (starts with 1), but it's never reached
• First match wins — order matters!
• There is no fall-through between cases
• *_ captures remaining elements but discards them (wildcard)

Example:
>>> match [1, 2]:
...     case [1, 2]: r = "exact"
...     case [1, *_]: r = "starts with 1"
>>> r
'exact'

Place more specific patterns before more general ones.

Key Distinctions:
• Two cases: exact list [1,2] vs prefix [1, *_] — subject [1,2] hits the first.
• First match wins — order exact before general.

How It Works:
• More specific pattern should appear first to avoid shadowing.

Step-by-Step Execution:
1. [1,2] matches exactly.
2. r="exact".

Order of Operations:
• Reversing order would make prefix consume cases incorrectly.

Common Use Cases:
• Preferring exact command sequences over prefixes.

Edge Cases:
• Overlapping patterns need discipline.

Performance Considerations:
• Small lists.

Examples:
• case ["POST", "/api"]: ... case ["POST", *_]:

Notes:
• Refactor to guards if ordering becomes fragile.`
  }),

  // Q30
  (_i: number) => ({
    q: `What is r after:\nmatch [1, 3]:\n    case [1, 2]:\n        r = "exact"\n    case [1, *_]:\n        r = "starts with 1"`,
    o: ['r = "starts with 1"', 'r = "exact"', "No match", "SyntaxError"],
    c: 0,
    e: "[1, 3] doesn't match [1, 2] (3 ≠ 2), but does match [1, *_] (starts with 1).",
    de: `When the first case doesn't match, Python continues to the next case. Here, the more general pattern catches what the specific pattern missed.

Key concepts:
• case [1, 2]: requires exactly [1, 2] — [1, 3] has 3 ≠ 2, so it fails
• case [1, *_]: requires the list to start with 1 — [1, 3] starts with 1, so it matches
• *_ captures [3] but discards it (wildcard)
• r = "starts with 1"

Example:
>>> match [1, 3]:
...     case [1, 2]: r = "exact"
...     case [1, *_]: r = "starts with 1"
>>> r
'starts with 1'

This demonstrates why ordering matters: specific before general.

Key Distinctions:
• Subject [1,3] fails exact [1,2] but matches [1, *_] capturing prefix behavior.
• Second case provides fallback.

How It Works:
• Star pattern absorbs remaining elements after fixed prefix.

Step-by-Step Execution:
1. Exact fails at second element.
2. Prefix case matches with * absorbing [3].

Order of Operations:
• Specific-before-general prevents wrong bucket.

Common Use Cases:
• Version vectors or semver tuples.

Edge Cases:
• Single-element tail still matches *_ depending on pattern.

Performance Considerations:
• Linear in list size.

Examples:
• case [1, 2, *rest]: ...

Notes:
• Add guards on rest content when required.`
  }),

  // ===== WALRUS OPERATOR := (31–50) =====

  // Q31
  (_i: number) => ({
    q: `What does the := operator do in Python?`,
    o: ["Assigns and returns a value in one expression", "Compares two values", "Checks type equality", "Creates a constant"],
    c: 0,
    e: ":= is the walrus operator — it assigns a value to a variable AND returns that value in a single expression.",
    de: `The walrus operator := (officially called "assignment expression") allows you to assign a value to a variable as part of an expression. It both assigns AND returns the value.

Key concepts:
• (x := 10) assigns 10 to x AND evaluates to 10
• Useful in if, while, and comprehension conditions
• Avoids computing the same value twice
• Introduced in Python 3.8 (PEP 572)
• Named "walrus" because := looks like a walrus turned sideways

Example:
>>> if (n := len("hello")) > 3:
...     print(f"Long string: {n} chars")
Long string: 5 chars

Without :=, you'd need: n = len("hello"); if n > 3: ...

Key Distinctions:
• The walrus := assigns an expression to a name while returning that value inside another expression.
• Introduced in Python 3.8 via PEP 572.

How It Works:
• Assignment expression binds in the enclosing scope (with subtle scoping rules in comprehensions).

Step-by-Step Execution:
1. Evaluate RHS.
2. Bind name.
3. Value participates in containing expression.

Order of Operations:
• := has low precedence — parenthesize.

Common Use Cases:
• Reusing computed values in conditions and comprehensions.

Edge Cases:
• Illegal in statement positions where plain = belongs.

Performance Considerations:
• Avoid duplicate work by naming intermediate results.

Examples:
• if (n := len(a)) > 0:

Notes:
• Named “assignment expression” or “walrus” colloquially.`
  }),

  // Q32
  (_i: number) => ({
    q: `What Python version introduced the walrus operator (:=)?`,
    o: ["3.8", "3.10", "3.6", "3.9"],
    c: 0,
    e: "The walrus operator := was introduced in Python 3.8 (PEP 572).",
    de: `PEP 572, authored by Chris Angelico with guidance from Guido van Rossum, introduced assignment expressions (:=) in Python 3.8.

Key concepts:
• Python 3.8 (October 2019) added :=
• PEP 572 — "Assignment Expressions"
• This was one of the most debated PEPs in Python history
• Guido van Rossum stepped down as BDFL partly due to controversy around this PEP
• The operator is nicknamed "walrus" because := resembles walrus eyes and tusks

Timeline:
• 3.8 (2019): := introduced
• 3.9 (2020): dict merge operators |, |=
• 3.10 (2021): match/case
• 3.11 (2022): exception groups, tomllib
• 3.12 (2023): type parameter syntax

Key Distinctions:
• PEP 572 added := in Python 3.8; 3.7 cannot parse it.
• Distinct from match/case version gate.

How It Works:
• Syntax addition only — no __future__ import.

Step-by-Step Execution:
1. Verify >=3.8 for walrus.
2. Use in expressions only.

Order of Operations:
• Combine version checks for projects supporting 3.8+.

Common Use Cases:
• Regex matches and file reads in conditions.

Edge Cases:
• Scope differences inside list comprehensions — read PEP carefully.

Performance Considerations:
• Saves recomputation.

Examples:
• while chunk := f.read(8192): ...

Notes:
• Pin python_requires accordingly.`
  }),

  // Q33
  (_i: number) => ({
    q: `What is r after:\nif (n := 10) > 5:\n    r = n`,
    o: ["r = 10", "r = 5", "SyntaxError", "r = True"],
    c: 0,
    e: "The walrus operator assigns 10 to n, then 10 > 5 is True, so r = n = 10.",
    de: `The walrus operator := assigns and returns in one step. Here, (n := 10) assigns 10 to n and the expression evaluates to 10. Then 10 > 5 is True, so the if block executes.

Key concepts:
• (n := 10) assigns n = 10 and evaluates to 10
• The comparison becomes 10 > 5, which is True
• The if block runs: r = n, and n is 10
• Parentheses around n := 10 are required in this context

Example:
>>> if (n := 10) > 5:
...     r = n
>>> r
10
>>> n
10  # n is also available after the if

Key Distinctions:
• (n := 10) assigns 10 to n then compares >5 — condition true; body sets r=n.
• Walrus avoids separate assignment before if.

How It Works:
• Value of := expression is the assigned value.

Step-by-Step Execution:
1. Bind n=10.
2. Test 10>5.
3. r=10.

Order of Operations:
• Parentheses required around := in larger expressions often.

Common Use Cases:
• Computing expensive test operands once.

Edge Cases:
• Unreachable if condition false — n still assigned? In if header, n exists in block on success per scoping.

Performance Considerations:
• Single evaluation of initializer.

Examples:
• if (m := pat.search(s)) is not None:

Notes:
• Prefer clarity over cramming too much into one if header.`
  }),

  // Q34
  (_i: number) => ({
    q: `What is r after:\nif (n := 3) > 5:\n    r = "big"\nelse:\n    r = "small"`,
    o: ['r = "small"', 'r = "big"', "r = 3", "SyntaxError"],
    c: 0,
    e: "n := 3 assigns 3 to n. 3 > 5 is False, so the else branch runs: r = \"small\".",
    de: `The walrus operator assigns the value regardless of whether the condition is True or False. Here, n = 3 is assigned, but 3 > 5 is False, so the else block runs.

Key concepts:
• (n := 3) assigns n = 3 and evaluates to 3
• 3 > 5 is False → else branch executes
• r = "small"
• n is still 3 (assignment happened even though condition was False)
• The assignment is a side effect of evaluating the expression

Example:
>>> if (n := 3) > 5:
...     r = "big"
... else:
...     r = "small"
>>> r
'small'
>>> n
3  # n was still assigned

Key Distinctions:
• n:=3 binds 3; 3>5 false — else branch runs; r=small.
• Walrus still assigns n even when condition fails? In if (n:=3)>5 — n is bound in surrounding scope in 3.8+.

How It Works:
• Assignment expression executes the assignment before the boolean op.

Step-by-Step Execution:
1. n=3.
2. Compare false.
3. else suite.

Order of Operations:
• Mind that n exists after the if/else in function scope.

Common Use Cases:
• Parsing attempts where value used in both branches.

Edge Cases:
• Debugging surprise: n bound even if condition false in if statement form.

Performance Considerations:
• One evaluation.

Examples:
• Explicit separate n=3 may read clearer.

Notes:
• Document team style on walrus in if headers.`
  }),

  // Q35
  (_i: number) => ({
    q: `After running [y := x**2 for x in range(4)], what is the value of y?`,
    o: ["9", "0", "16", "[0, 1, 4, 9]"],
    c: 0,
    e: "The walrus operator assigns y in each iteration. The last value is 3**2 = 9.",
    de: `When := is used inside a list comprehension, the variable is assigned in the enclosing scope, not the comprehension's internal scope. Each iteration overwrites the previous value.

Key concepts:
• range(4) produces 0, 1, 2, 3
• Each iteration: y := x**2 assigns to y
• Iteration 0: y = 0**2 = 0
• Iteration 1: y = 1**2 = 1
• Iteration 2: y = 2**2 = 4
• Iteration 3: y = 3**2 = 9 (last iteration)
• After the comprehension, y = 9 (the last assigned value)
• The list itself is [0, 1, 4, 9]

Example:
>>> result = [y := x**2 for x in range(4)]
>>> result
[0, 1, 4, 9]
>>> y
9

Key Distinctions:
• In [y := x**2 for x in range(4)], y updates each iteration; after loop y is last assigned (9 when x=3).
• Walrus inside comprehension binds in comprehension scope per scoping rules.

How It Works:
• Last iteration leaves y as square of last x.

Step-by-Step Execution:
1. Iterate x=0..3.
2. Each assigns y=x**2.
3. After completion y=9.

Order of Operations:
• Walrus in comprehensions has special scoping — avoid shadowing outer names accidentally.

Common Use Cases:
• Pairing transformation with filtering in one line.

Edge Cases:
• Python 3.8+ scoping fixes — read release notes.

Performance Considerations:
• Same work as explicit loop if written carefully.

Examples:
• [y for x in data if (y := f(x)) > 0]

Notes:
• Prefer explicit loops when readability suffers.`
  }),

  // Q36
  (_i: number) => ({
    q: `What is line after:\nwhile (line := "data") != "quit":\n    break`,
    o: ['line = "data"', 'line = "quit"', "NameError", "line = None"],
    c: 0,
    e: "The walrus operator assigns \"data\" to line. \"data\" != \"quit\" is True, so the loop body runs and break exits. line remains \"data\".",
    de: `This pattern is common for read-process loops. The walrus operator assigns the value and checks it in one expression. Here, break exits immediately after the first iteration.

Key concepts:
• (line := "data") assigns "data" to line and evaluates to "data"
• "data" != "quit" is True → loop body executes
• break exits the loop immediately
• line = "data" persists after the loop

Real-world usage:
>>> while (line := input("Enter: ")) != "quit":
...     process(line)
This reads input, assigns it, and checks for "quit" all in one line.

Example:
>>> while (line := "data") != "quit":
...     break
>>> line
'data'

Key Distinctions:
• while (line := "data") != "quit" assigns line then tests; first iteration binds line to "data".
• Loop body break exits — line value remains last assigned.

How It Works:
• Walrus in while condition repeats each iteration.

Step-by-Step Execution:
1. Assign line.
2. Compare.
3. Execute body.

Order of Operations:
• Classic readline patterns use walrus in while.

Common Use Cases:
• Stream processing until sentinel.

Edge Cases:
• Ensure termination — here break prevents infinite loop.

Performance Considerations:
• One assignment per iteration.

Examples:
• while line := fp.readline(): ...

Notes:
• Compare to iter(callable, sentinel) style.`
  }),

  // Q37
  (_i: number) => ({
    q: `What is the result of:\nnums = [1, 2, 3, 4, 5]\n[x for x in nums if (y := x * 2) > 6]`,
    o: ["[4, 5]", "[3, 4, 5]", "[8, 10]", "[7, 8, 9, 10]"],
    c: 0,
    e: "y := x*2 is computed for each x. Only x values where y > 6 are included: 4*2=8>6 and 5*2=10>6.",
    de: `The walrus operator in a comprehension filter computes a value and uses it for filtering. The comprehension selects the original x values, not the computed y values.

Key concepts:
• For x=1: y = 2, 2 > 6 is False → excluded
• For x=2: y = 4, 4 > 6 is False → excluded
• For x=3: y = 6, 6 > 6 is False → excluded
• For x=4: y = 8, 8 > 6 is True → x=4 included
• For x=5: y = 10, 10 > 6 is True → x=5 included
• Result: [4, 5] (the x values, not the y values)

Example:
>>> nums = [1, 2, 3, 4, 5]
>>> [x for x in nums if (y := x * 2) > 6]
[4, 5]

The output is [4, 5] because those are the x values that passed the filter.

Key Distinctions:
• List comprehension filters with (y := x*2) > 6 — y bound per x; keeps x where doubled value exceeds 6.
• Side effect: y leaks per comprehension scoping rules — careful.

How It Works:
• Walrus in filter can reuse computed value.

Step-by-Step Execution:
1. For each x, compute y=2x.
2. Test >6.
3. Emit x if true.

Order of Operations:
• Filter clause runs per element.

Common Use Cases:
• Avoid duplicate computation in conditions.

Edge Cases:
• Leaking walrus bindings — know PEP 572 scoping in comprehensions.

Performance Considerations:
• Saves a multiply vs writing x*2 twice.

Examples:
• [x for x in nums if (t := expensive(x)) > 0]

Notes:
• Split into loop if debugging gets hard.`
  }),

  // Q38
  (_i: number) => ({
    q: `What does any((n := x) > 3 for x in [1, 2, 4, 5]) return?\nWhat is n after?`,
    o: ["True, n = 4", "True, n = 5", "False, n = 5", "True, n = 1"],
    c: 0,
    e: "any() stops at the first True. (n := 4) > 3 is True, so any() returns True and n = 4.",
    de: `any() short-circuits — it stops as soon as it finds a True value. The walrus operator captures the value at the point where any() stops.

Key concepts:
• any() iterates the generator, evaluating (n := x) > 3
• x=1: (n := 1) > 3 → 1 > 3 is False
• x=2: (n := 2) > 3 → 2 > 3 is False
• x=4: (n := 4) > 3 → 4 > 3 is True → any() returns True immediately
• x=5 is never evaluated (short-circuit)
• n = 4 (the value when any() found True)

Example:
>>> any((n := x) > 3 for x in [1, 2, 4, 5])
True
>>> n
4

This is useful for finding the first element matching a condition.

Key Distinctions:
• Generator inside any((n := x) > 3 for x in ...) binds n to each x until any True; n left as last iteration value.
• Short-circuit stops early; n is last assigned x in the generator progression when any finds True.

How It Works:
• Walrus binds n each iteration; any stops at first True.

Step-by-Step Execution:
1. x=1,2,4 — at 4, (n:=4)>3 true; any returns True.
2. n may be 4 after loop depending on consumption.

Order of Operations:
• Short-circuit means later values might not assign.

Common Use Cases:
• Searching while retaining last candidate.

Edge Cases:
• Relying on n after any without care — document behavior.

Performance Considerations:
• Generator is lazy.

Examples:
• next((x for x in it if cond(x)), default)

Notes:
• Prefer explicit loop for clarity of n after any.`
  }),

  // Q39
  (_i: number) => ({
    q: `What is result after:\nresult = [y for x in range(5) if (y := x**2) > 5]`,
    o: ["[9, 16]", "[4, 9, 16]", "[6, 7, 8, 9, 16]", "[9, 16, 25]"],
    c: 0,
    e: "x**2 for x=0,1,2,3,4 gives 0,1,4,9,16. Only 9 and 16 are > 5. y is used as the output.",
    de: `The walrus operator := in the filter computes y = x**2, then the filter checks y > 5. The output expression is y (the squared value), not x.

Key concepts:
• range(5) = 0, 1, 2, 3, 4
• x=0: y = 0, 0 > 5 False
• x=1: y = 1, 1 > 5 False
• x=2: y = 4, 4 > 5 False
• x=3: y = 9, 9 > 5 True → y=9 included
• x=4: y = 16, 16 > 5 True → y=16 included
• result = [9, 16]

Example:
>>> result = [y for x in range(5) if (y := x**2) > 5]
>>> result
[9, 16]

Key: the output is y (squared values), filtered by y > 5.

Key Distinctions:
• List comprehension with y := x**2 filters squares >5; collects y values meeting test.
• Result list contains y values from qualifying iterations.

How It Works:
• Walrus computes square once per x.

Step-by-Step Execution:
1. x runs 0..4.
2. y=x**2.
3. Keep y if y>5.

Order of Operations:
• Output expression uses y from walrus binding.

Common Use Cases:
• Building derived lists with one expensive call.

Edge Cases:
• 0**2 not >5 — skipped.

Performance Considerations:
• O(n) over range.

Examples:
• [f(x) for x in items if (v := f(x)) is not None]

Notes:
• Keep comprehensions readable — else use for-loop.`
  }),

  // Q40
  (_i: number) => ({
    q: `What does (n := len(data)) > 2 evaluate to when data = [1, 2, 3]?`,
    o: ["True (n = 3)", "False (n = 3)", "True (n = 2)", "SyntaxError"],
    c: 0,
    e: "len([1, 2, 3]) is 3. n := 3 assigns 3 to n. 3 > 2 is True.",
    de: `The walrus operator lets you compute, store, and compare a value in a single expression. Here, len(data) is computed once, stored in n, and compared to 2.

Key concepts:
• data = [1, 2, 3], so len(data) = 3
• (n := len(data)) assigns n = 3 and evaluates to 3
• 3 > 2 is True
• n is now available for later use with value 3

Example:
>>> data = [1, 2, 3]
>>> (n := len(data)) > 2
True
>>> n
3

Without :=, you'd need: n = len(data); n > 2 — two statements instead of one expression.

Key Distinctions:
• (n := len(data)) > 2 binds n to 3 then compares True for data length 3.
• Walrus returns assigned value as expression value.

How It Works:
• len evaluated once.

Step-by-Step Execution:
1. n=3.
2. 3>2 True.

Order of Operations:
• Parentheses group := with comparison.

Common Use Cases:
• Threshold checks on computed sizes.

Edge Cases:
• Empty data n=0 — compare carefully.

Performance Considerations:
• len is O(1) for built-in list.

Examples:
• if (cache := get_cache()) is not None:

Notes:
• Name n available after expression in statement forms.`
  }),

  // Q41
  (_i: number) => ({
    q: `Can the walrus operator := be used inside a lambda?`,
    o: ["No — it raises SyntaxError", "Yes — it works normally", "Yes — but only in the body", "Yes — but only with default args"],
    c: 0,
    e: "The walrus operator := cannot be used inside a lambda expression — it raises SyntaxError.",
    de: `PEP 572 explicitly prohibits the use of := inside lambda expressions. This restriction exists to avoid confusion and maintain readability.

Key concepts:
• lambda x: (y := x + 1) raises SyntaxError
• This is a deliberate design decision, not a bug
• Lambdas are meant to be simple, single-expression functions
• := in a lambda would create side effects, which contradicts lambda's purpose
• Use a regular function (def) if you need assignment

Example:
>>> f = lambda x: (y := x + 1)  # SyntaxError!

Use a regular function instead:
>>> def f(x):
...     y = x + 1
...     return y

The restriction keeps lambdas pure and predictable.

Key Distinctions:
• Lambdas are expressions; := cannot appear as a top-level statement inside lambda in the naive way — grammar restricts where := may go.
• Practical style: avoid walrus inside lambda or wrap carefully.

How It Works:
• Reference language grammar and linter messages when experiments fail.

Step-by-Step Execution:
1. Try helper function instead of lambda if := needed.

Order of Operations:
• Read SyntaxError text literally.

Common Use Cases:
• Prefer def with name for readability.

Edge Cases:
• Different Python versions tightened rules.

Performance Considerations:
• Clarity beats micro-optimization.

Examples:
• def f(x): y := ... is invalid — use assignment before.

Notes:
• Use default-arg tricks sparingly.`
  }),

  // Q42
  (_i: number) => ({
    q: `Can := be used as a standalone top-level statement?\nFor example: x := 5`,
    o: ["No — bare x := 5 is a SyntaxError", "Yes — it works like x = 5", "Yes — but only in 3.10+", "It works but is deprecated"],
    c: 0,
    e: "x := 5 as a standalone statement is SyntaxError. Use (x := 5) or just x = 5.",
    de: `The walrus operator := is designed for use within expressions, not as a statement replacement for =. A bare x := 5 without parentheses is a SyntaxError.

Key concepts:
• x := 5 alone → SyntaxError (not a valid statement)
• (x := 5) → valid expression, assigns x = 5 and evaluates to 5
• x = 5 → valid statement, the normal way to assign
• := is intentionally restricted to prevent misuse
• The parentheses force it to be interpreted as an expression

Why this restriction:
• Prevents confusion between = and :=
• Encourages using := only when the return value is needed
• x = 5 is clearer when you just want assignment

Example:
>>> x := 5  # SyntaxError!
>>> (x := 5)  # OK, but pointless without using the value
5
>>> x = 5  # Just use regular assignment

Key Distinctions:
• Top-level x := 5 as a lone statement is a SyntaxError — := must be inside an expression context.
• Use plain assignment x = 5.

How It Works:
• Assignment statements use =, not :=.

Step-by-Step Execution:
1. Parse error if := at statement level.

Order of Operations:
• Wrap in parentheses only works inside expressions, not as a bare statement.

Common Use Cases:
• Teach difference between statement and expression assignment.

Edge Cases:
• Interactive REPL may show SyntaxError clearly.

Performance Considerations:
• N/A.

Examples:
• x = 5

Notes:
• PEP 572 lists valid syntactic positions.`
  }),

  // Q43
  (_i: number) => ({
    q: `What is r after:\nif (m := {"a": 1}.get("a")) is not None:\n    r = m`,
    o: ["r = 1", "r = None", 'r = {"a": 1}', "SyntaxError"],
    c: 0,
    e: '{"a": 1}.get("a") returns 1. m := 1 assigns 1 to m. 1 is not None is True, so r = 1.',
    de: `This is a common pattern: use := to capture the result of a .get() call and check for None in one step. It avoids calling .get() twice.

Key concepts:
• {"a": 1}.get("a") returns 1 (key exists)
• (m := 1) assigns m = 1 and evaluates to 1
• 1 is not None is True → if block runs
• r = m = 1

Example:
>>> if (m := {"a": 1}.get("a")) is not None:
...     r = m
>>> r
1

Without :=, you'd need:
>>> m = {"a": 1}.get("a")
>>> if m is not None:
...     r = m

This pattern is especially useful for optional dictionary lookups.

Key Distinctions:
• m := dict.get("a") assigns 1; truthy; is not None check passes; r=m.
• Walrus captures .get result once.

How It Works:
• get returns None if missing — walrus names the result.

Step-by-Step Execution:
1. m=1.
2. Test not None.
3. r=1.

Order of Operations:
• Short-circuiting comparisons with None.

Common Use Cases:
• Optional dict keys without double lookup.

Edge Cases:
• Value None vs missing key both None — disambiguate with 'in'.

Performance Considerations:
• One dict lookup via get.

Examples:
• if (v := d.get(k)) is not None:

Notes:
• Combine with defaultdict when appropriate.`
  }),

  // Q44
  (_i: number) => ({
    q: `What is r after:\nif (m := {"a": 1}.get("b")) is not None:\n    r = m\nelse:\n    r = "missing"`,
    o: ['r = "missing"', "r = None", "r = 1", "KeyError"],
    c: 0,
    e: '{"a": 1}.get("b") returns None. m := None assigns None. None is not None is False → else runs.',
    de: `When .get() doesn't find the key, it returns None by default. The walrus operator captures this None, and the is not None check fails.

Key concepts:
• {"a": 1}.get("b") returns None (key "b" doesn't exist)
• (m := None) assigns m = None and evaluates to None
• None is not None is False → else branch runs
• r = "missing"

Example:
>>> if (m := {"a": 1}.get("b")) is not None:
...     r = m
... else:
...     r = "missing"
>>> r
'missing'

This pattern safely handles missing dictionary keys without try/except.

Key Distinctions:
• get("b") returns None; is not None fails; else branch r=missing.
• Walrus still assigns m=None before test.

How It Works:
• Condition false routes to else.

Step-by-Step Execution:
1. m=None.
2. Fails positive branch.
3. Else assigns string.

Order of Operations:
• m bound even when missing — useful or surprising per team.

Common Use Cases:
• Fallback defaults for missing keys.

Edge Cases:
• Distinguish None value vs missing key — .get cannot alone.

Performance Considerations:
• Single lookup.

Examples:
• if (v := d.get(k)) is None: use_default()

Notes:
• Use 'k in d' when distinction matters.`
  }),

  // Q45
  (_i: number) => ({
    q: `What is the result of:\nvalues = [2, 8, 3, 9]\n[x for x in values if (total := x) and total > 5]`,
    o: ["[8, 9]", "[2, 8, 3, 9]", "[8, 3, 9]", "[2, 8, 9]"],
    c: 0,
    e: "total := x assigns x to total. The condition is total (truthy since all are non-zero) AND total > 5. Only 8 and 9 pass.",
    de: `The filter has two conditions joined by 'and': (total := x) must be truthy, AND total > 5 must be True.

Key concepts:
• x=2: total = 2, 2 is truthy, but 2 > 5 is False → excluded
• x=8: total = 8, 8 is truthy, and 8 > 5 is True → included
• x=3: total = 3, 3 is truthy, but 3 > 5 is False → excluded
• x=9: total = 9, 9 is truthy, and 9 > 5 is True → included
• Result: [8, 9]

Note: (total := x) is always truthy here since all values are non-zero. If 0 were in the list, it would be falsy and short-circuit the 'and'.

Example:
>>> values = [2, 8, 3, 9]
>>> [x for x in values if (total := x) and total > 5]
[8, 9]

Key Distinctions:
• Comprehension filters with (total := x) and total > 5 — and uses truthiness of total; 0 would short-circuit falsy.
• Keeps x where x itself is truthy and >5 after binding? Actually (total := x) and total > 5: first part binds x, second compares.

How It Works:
• Walrus binds then boolean and evaluates second test.

Step-by-Step Execution:
1. For each x, total=x.
2. total must be truthy (non-zero) and >5.

Order of Operations:
• Truthiness of ints — watch 0.

Common Use Cases:
• Filtering with reused computed flag.

Edge Cases:
• bool shortcut may skip second test.

Performance Considerations:
• One bind per element.

Examples:
• [x for x in vals if (t := transform(x)) and t.ok]

Notes:
• Prefer explicit comparisons to 0/None.`
  }),

  // Q46
  (_i: number) => ({
    q: `What is the official name of the := operator as defined in PEP 572?`,
    o: ["Assignment expression", "Walrus operator", "Inline assignment", "Bind operator"],
    c: 0,
    e: "The official name from PEP 572 is \"assignment expression\". \"Walrus operator\" is the popular nickname.",
    de: `PEP 572 is titled "Assignment Expressions" — that's the official term. The community nickname "walrus operator" comes from the := characters resembling a walrus (eyes and tusks).

Key concepts:
• Official name: Assignment expression (PEP 572)
• Nickname: Walrus operator (because := looks like a walrus sideways)
• Author: Chris Angelico, with input from Guido van Rossum
• Accepted: Python 3.8 (October 2019)
• The PEP was highly controversial and contributed to Guido's resignation as BDFL

PEP 572 summary:
• Adds NAME := expr syntax
• The expression assigns to NAME and evaluates to the assigned value
• Restricted contexts: cannot be used in comprehension iteration variables, lambda bodies, or as statements

Key Distinctions:
• PEP 572 official name is “Assignment Expressions” for the := operator.
• Colloquial name walrus from glyph shape.

How It Works:
• Specification details scoping and valid positions.

Step-by-Step Execution:
1. Read PEP 572 for authoritative rules.

Order of Operations:
• Not the same as augmented assignment +=.

Common Use Cases:
• Documentation and lint rule naming.

Edge Cases:
• Historical controversy — know team policy.

Performance Considerations:
• N/A.

Examples:
• Search “PEP 572 Assignment Expressions”.

Notes:
• Link PEP in internal style guide.`
  }),

  // Q47
  (_i: number) => ({
    q: `What is the result of:\ns = "Hello World"\n[(w, len(w)) for w in s.split() if (n := len(w)) > 4]`,
    o: ['[("Hello", 5), ("World", 5)]', '[("Hello", 5)]', '["Hello", "World"]', "[]"],
    c: 0,
    e: 's.split() gives ["Hello", "World"]. Both have len 5, and 5 > 4 is True for both.',
    de: `The walrus operator captures len(w) for the filter. The output expression uses w and len(w) directly (not n, though n is available).

Key concepts:
• s.split() = ["Hello", "World"]
• w = "Hello": n := len("Hello") = 5, 5 > 4 is True → ("Hello", 5) included
• w = "World": n := len("World") = 5, 5 > 4 is True → ("World", 5) included
• Result: [("Hello", 5), ("World", 5)]

Example:
>>> s = "Hello World"
>>> [(w, len(w)) for w in s.split() if (n := len(w)) > 4]
[('Hello', 5), ('World', 5)]

Here := avoids computing len(w) twice — once for the filter and once for the output.

Key Distinctions:
• Split words; walrus (n := len(w)) > 4 filters long words; pairs (w, n) collected.
• n bound per word.

How It Works:
• Walrus in filter clause computes length once.

Step-by-Step Execution:
1. For each w, n=len(w).
2. Keep if n>4.
3. Emit tuple.

Order of Operations:
• Comprehension scoping for n per iteration.

Common Use Cases:
• NLP-ish pipelines in teaching examples.

Edge Cases:
• Punctuation attached to words affects len.

Performance Considerations:
• len is O(1) for str.

Examples:
• [token for token in line.split() if len(token) > 4]

Notes:
• Normalize tokens before len for fair comparison.`
  }),

  // Q48
  (_i: number) => ({
    q: `What is filtered after:\nfiltered = [x for x in [1, 4, 2, 5, 3] if (y := x * 3) > 10]`,
    o: ["[4, 5]", "[4, 5, 3]", "[12, 15]", "[1, 4, 2, 5, 3]"],
    c: 0,
    e: "y = x*3 for each x. Only x=4 (y=12>10) and x=5 (y=15>10) pass. Output is x values: [4, 5].",
    de: `The walrus operator computes y = x * 3 for filtering, but the output is x (the original value), not y (the computed value).

Key concepts:
• x=1: y = 3, 3 > 10 False → excluded
• x=4: y = 12, 12 > 10 True → x=4 included
• x=2: y = 6, 6 > 10 False → excluded
• x=5: y = 15, 15 > 10 True → x=5 included
• x=3: y = 9, 9 > 10 False → excluded
• filtered = [4, 5]

Example:
>>> filtered = [x for x in [1, 4, 2, 5, 3] if (y := x * 3) > 10]
>>> filtered
[4, 5]
>>> y
9  # last value assigned (from x=3, the last iteration)

Key Distinctions:
• y := x*3 computes triple; filter y>10; keeps original x values meeting test.
• List stores x, not y.

How It Works:
• Walrus names triple for predicate only.

Step-by-Step Execution:
1. For each x, y=3x.
2. Compare y>10.
3. Collect x.

Order of Operations:
• Output expression chooses x.

Common Use Cases:
• Filtering source by derived metric.

Edge Cases:
• Large x may overflow in toy examples — use bounded ints.

Performance Considerations:
• One multiply per element.

Examples:
• [x for x in nums if (t := f(x)) > threshold]

Notes:
• Emit t if you need both values.`
  }),

  // Q49
  (_i: number) => ({
    q: `What is r after:\nimport re\nif (m := re.match(r"\\d+", "123abc")):\n    r = m.group()`,
    o: ['r = "123"', 'r = "123abc"', "r = None", "AttributeError"],
    c: 0,
    e: 're.match(r"\\d+", "123abc") returns a Match object (truthy). m.group() returns "123".',
    de: `This is one of the most practical uses of :=. Without it, you'd need to assign the match result first, then check it separately.

Key concepts:
• re.match(r"\\d+", "123abc") matches one or more digits at the start
• It returns a Match object (truthy) because "123" matches
• (m := ...) assigns the Match object to m
• The Match object is truthy → if block runs
• m.group() returns the matched text: "123"
• If no match, re.match returns None (falsy) → if block skipped

Example:
>>> import re
>>> if (m := re.match(r"\\d+", "123abc")):
...     r = m.group()
>>> r
'123'

Without :=:
>>> m = re.match(r"\\d+", "123abc")
>>> if m:
...     r = m.group()

Key Distinctions:
• re.match in walrus assigns Match or None; truthy match; r=m.group().
• Avoid calling match twice.

How It Works:
• Pattern anchors at start for match.

Step-by-Step Execution:
1. m = re.match(...)
2. If m, extract digits.

Order of Operations:
• Compile regex once outside hot loops in real code.

Common Use Cases:
• Parsing leading numbers.

Edge Cases:
• fullmatch vs search differ.

Performance Considerations:
• Regex can be costly — compile.

Examples:
• if (m := re.search(pat, s)): ...

Notes:
• Use raw strings for patterns.`
  }),

  // Q50
  (_i: number) => ({
    q: `Can you chain walrus operators? What are a and b after:\n(a := (b := 5))`,
    o: ["a = 5, b = 5", "a = 5, b = None", "SyntaxError", "a = (b := 5), b = 5"],
    c: 0,
    e: "Chaining works: (b := 5) assigns b = 5 and evaluates to 5, then (a := 5) assigns a = 5.",
    de: `Walrus operators can be chained by nesting. The inner expression is evaluated first, then its result is used by the outer expression.

Key concepts:
• (b := 5) executes first: b = 5, expression evaluates to 5
• (a := 5) executes next: a = 5, expression evaluates to 5
• Both a and b are 5
• Chaining works but is rarely used in practice (poor readability)
• Each := must be in parentheses for correct parsing

Example:
>>> (a := (b := 5))
5
>>> a
5
>>> b
5

While technically valid, chained := is considered hard to read. Prefer separate assignments for clarity:
>>> b = 5
>>> a = b

Key Distinctions:
• Chained assignment expressions (a := (b := 5)) evaluate inner first — b=5, then a=5; both names refer to 5.
• Right-associative nesting of :=.

How It Works:
• Inner := runs first; outer binds to same value.

Step-by-Step Execution:
1. b=5.
2. a=5.

Order of Operations:
• Parentheses show evaluation order.

Common Use Cases:
• Rare; mostly puzzles and golf.

Edge Cases:
• Readability suffers — avoid in production.

Performance Considerations:
• Trivial.

Examples:
• a = b = 5 without walrus is clearer.

Notes:
• PEP 572 discourages obscure nesting — prefer simple assignments.`
  }),
];
