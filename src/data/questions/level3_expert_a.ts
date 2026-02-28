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

Python versions: 3.10 (Oct 2021) and later support match/case.`
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

Literal patterns work with int, float, str, bytes, True, False, and None.`
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
'match'`
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
'five'`
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

Unlike a variable pattern (case x:), the wildcard _ doesn't bind the matched value.`
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
'other'`
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
'tuple match'`
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
'list match'`
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

Class patterns are powerful for type-based dispatching.`
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

Note: True/False match int() because bool is a subclass of int in Python.`
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
'str'`
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

The name "structural pattern matching" means it matches the STRUCTURE of data, not just its value. You can decompose complex nested objects in a single pattern.`
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

This also works: match {"a": 1, "b": 2}: case {"a": 1}: matches (extra key "b" is ignored).`
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

The pattern only required key "a" — key "b" was ignored.`
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

To also capture "b", use: case {"a": x, "b": y}:`
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
[2, 3]`
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
[]`
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

Also: first = 1, last = 4.`
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

The as keyword binds the matched value to a variable.`
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

Guards are evaluated only after the pattern matches successfully.`
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

A case without a guard after a guarded case acts as a fallback for when the guard fails.`
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

OR patterns are great for handling multiple values the same way.`
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
'binary'`
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
'other'`
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

Best practice: include case _: to handle unexpected values explicitly.`
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

The as keyword captures the matched value into a variable.`
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

This pattern is powerful for parsing structured data like API responses or messages.`
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

dataclass auto-generates __match_args__ = ('x', 'y').`
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

Place more specific patterns before more general ones.`
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

This demonstrates why ordering matters: specific before general.`
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

Without :=, you'd need: n = len("hello"); if n > 3: ...`
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
• 3.12 (2023): type parameter syntax`
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
10  # n is also available after the if`
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
3  # n was still assigned`
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
9`
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
'data'`
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

The output is [4, 5] because those are the x values that passed the filter.`
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

This is useful for finding the first element matching a condition.`
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

Key: the output is y (squared values), filtered by y > 5.`
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

Without :=, you'd need: n = len(data); n > 2 — two statements instead of one expression.`
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

The restriction keeps lambdas pure and predictable.`
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
>>> x = 5  # Just use regular assignment`
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

This pattern is especially useful for optional dictionary lookups.`
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

This pattern safely handles missing dictionary keys without try/except.`
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
[8, 9]`
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
• Restricted contexts: cannot be used in comprehension iteration variables, lambda bodies, or as statements`
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

Here := avoids computing len(w) twice — once for the filter and once for the output.`
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
9  # last value assigned (from x=3, the last iteration)`
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
...     r = m.group()`
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
>>> a = b`
  }),
];
