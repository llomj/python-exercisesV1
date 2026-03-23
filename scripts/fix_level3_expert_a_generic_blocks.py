#!/usr/bin/env python3
"""
Replace duplicated generic tails in level3_expert_a.ts (50 occurrences).

replacement = "Key Distinctions:\\n" + tail
BLOCK_END = Level 3 PEP 8 Notes (same footer as level3.ts).
No backticks inside tails (TS template literal safety).
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
    "• Follow PEP 8 and best practices; refer to the official docs for full details."
)

# 50 tails: Key Distinctions bullets first, then sections (same shape as fix_level2_expert_*)
TAILS: list[str] = [
    """• PEP 634 introduced match/case in Python 3.10; earlier interpreters cannot parse the statement.
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
• Document minimum Python in pyproject.toml when adopting match/case.""",
    """• Literal value patterns use equality; case 42 matches an int subject equal to 42.
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
• Add guards (if) when a range is better than many literals.""",
    """• String literal patterns require the whole subject string to equal the pattern value.
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
• Use casefold() before match if you need case-insensitive commands.""",
    """• Cases are evaluated top to bottom; the first matching pattern wins.
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
• Refactor huge ladders into dict dispatch when patterns repeat.""",
    """• case _ is a wildcard that matches any subject and does not bind a name to it.
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
• For enums, consider covering all members explicitly for maintainability.""",
    """• Subject 99 fails case 1; wildcard case _ runs and assigns r = "other".
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
• Log inside _ during development to spot unexpected values.""",
    """• Tuple patterns require the same length and matching elements position-wise.
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
• Use *rest in patterns for longer sequences when needed.""",
    """• List patterns mirror list structure; elements must match in order.
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
• Prefer *rest or *middle patterns for variable-length lists.""",
    """• case int() is a class pattern that succeeds when isinstance(subject, int) (without capture).
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
• Read PEP 634 class pattern details before emulating C++ overloads.""",
    """• Subject 42 matches case int() first; str() is never attempted for this subject.
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
• Combine with guards for numeric ranges inside int.""",
    """• Subject "hi" matches str() class pattern; int() fails first in typical ordering.
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
• Capture with case str(s) when you need the value.""",
    """• Structural pattern matching compares shape recursively; it is not a single == on the whole object.
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
• Use match when shape matters; use == for simple scalar equality.""",
    """• Mapping patterns match dict keys and values; {"a": 1} requires key "a" with value 1.
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
• Use **rest to accept additional keys explicitly.""",
    """• Partial mapping patterns can match when required keys exist even if extra keys are present.
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
• Document whether your pattern is partial or exact for readers.""",
    """• Binding pattern {"a": x} captures the value at key "a" into name x.
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
• Combine guards to validate captured values.""",
    """• Sequence patterns with star capture: [1, *rest] binds rest to the tail after the fixed prefix.
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
• Use *middle between stars for splitting three parts.""",
    """• Single-element list [1] with pattern [1, *rest] binds rest to [] — star may be empty.
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
• Test len(rest) in guard if a minimum arity is required.""",
    """• Multiple stars: [first, *middle, last] splits head, middle, tail on a four-element list.
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
• Prefer simple patterns when readability drops.""",
    """• Class patterns int(x) and str(y) capture components from a tuple subject (1, "a").
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
• __match_args__ defines ordering for custom classes.""",
    """• Guards add boolean tests after pattern matches: case x if x > 10.
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
• Avoid heavy work in guards; refactor to helpers.""",
    """• Subject 5 binds to x, but guard x > 10 fails — fall through to next case.
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
• Order guards from most specific to general on same binding.""",
    """• Value patterns joined by | match if any alternative matches; case 0 | 1 matches 0.
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
• Combine with guards when alternatives need ranges.""",
    """• Subject 1 matches 0|1 branch; case _ not needed when earlier case covers.
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
• Document meaning of each alternative in comments.""",
    """• Subject 5 fails 0|1 pattern; wildcard _ runs and labels other.
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
• Log unexpected values in _ during QA.""",
    """• Without a matching case and no case _, Python raises MatchError at runtime.
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
• mypy plugins can help check exhaustiveness for enums.""",
    """• str() as msg binds the subject to name msg when pattern succeeds.
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
• Read PEP for exact as placement rules.""",
    """• Nested mapping pattern binds code while checking nested keys and literals.
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
• Keep patterns aligned with JSON schema docs.""",
    """• Custom classes can participate via __match_args__ and optional __match__ for advanced protocols.
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
• Prefer isinstance + attributes if patterns are too heavy.""",
    """• Two cases: exact list [1,2] vs prefix [1, *_] — subject [1,2] hits the first.
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
• Refactor to guards if ordering becomes fragile.""",
    """• Subject [1,3] fails exact [1,2] but matches [1, *_] capturing prefix behavior.
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
• Add guards on rest content when required.""",
    """• The walrus := assigns an expression to a name while returning that value inside another expression.
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
• Named “assignment expression” or “walrus” colloquially.""",
    """• PEP 572 added := in Python 3.8; 3.7 cannot parse it.
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
• Pin python_requires accordingly.""",
    """• (n := 10) assigns 10 to n then compares >5 — condition true; body sets r=n.
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
• Prefer clarity over cramming too much into one if header.""",
    """• n:=3 binds 3; 3>5 false — else branch runs; r=small.
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
• Document team style on walrus in if headers.""",
    """• In [y := x**2 for x in range(4)], y updates each iteration; after loop y is last assigned (9 when x=3).
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
• Prefer explicit loops when readability suffers.""",
    """• while (line := "data") != "quit" assigns line then tests; first iteration binds line to "data".
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
• Compare to iter(callable, sentinel) style.""",
    """• List comprehension filters with (y := x*2) > 6 — y bound per x; keeps x where doubled value exceeds 6.
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
• Split into loop if debugging gets hard.""",
    """• Generator inside any((n := x) > 3 for x in ...) binds n to each x until any True; n left as last iteration value.
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
• Prefer explicit loop for clarity of n after any.""",
    """• List comprehension with y := x**2 filters squares >5; collects y values meeting test.
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
• Keep comprehensions readable — else use for-loop.""",
    """• (n := len(data)) > 2 binds n to 3 then compares True for data length 3.
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
• Name n available after expression in statement forms.""",
    """• Lambdas are expressions; := cannot appear as a top-level statement inside lambda in the naive way — grammar restricts where := may go.
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
• Use default-arg tricks sparingly.""",
    """• Top-level x := 5 as a lone statement is a SyntaxError — := must be inside an expression context.
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
• PEP 572 lists valid syntactic positions.""",
    """• m := dict.get("a") assigns 1; truthy; is not None check passes; r=m.
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
• Combine with defaultdict when appropriate.""",
    """• get("b") returns None; is not None fails; else branch r=missing.
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
• Use 'k in d' when distinction matters.""",
    """• Comprehension filters with (total := x) and total > 5 — and uses truthiness of total; 0 would short-circuit falsy.
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
• Prefer explicit comparisons to 0/None.""",
    """• PEP 572 official name is “Assignment Expressions” for the := operator.
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
• Link PEP in internal style guide.""",
    """• Split words; walrus (n := len(w)) > 4 filters long words; pairs (w, n) collected.
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
• Normalize tokens before len for fair comparison.""",
    """• y := x*3 computes triple; filter y>10; keeps original x values meeting test.
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
• Emit t if you need both values.""",
    """• re.match in walrus assigns Match or None; truthy match; r=m.group().
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
• Use raw strings for patterns.""",
    """• Chained assignment expressions (a := (b := 5)) evaluate inner first — b=5, then a=5; both names refer to 5.
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
• PEP 572 discourages obscure nesting — prefer simple assignments.""",
]


def main() -> None:
    path = Path(__file__).resolve().parents[1] / "src/data/questions/level3_expert_a.ts"
    text = path.read_text(encoding="utf-8")
    if text.count(BLOCK_START) != len(TAILS):
        raise SystemExit(f"Expected {len(TAILS)} blocks, found {text.count(BLOCK_START)}")
    out = text
    for tail in TAILS:
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
    print(f"OK: patched {len(TAILS)} blocks in {path}")


if __name__ == "__main__":
    main()
