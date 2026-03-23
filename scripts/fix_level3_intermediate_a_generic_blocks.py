#!/usr/bin/env python3
"""
Replace duplicated generic tails in level3_intermediate_a.ts (50 occurrences).
replacement = "Key Distinctions:\n" + tail
BLOCK_END = Level 3 PEP 8 Notes (same as level3.ts).
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

TAILS: list[str] = [

    '• any([True, False, False]) is True — disjunction short-circuits on first True.\n• any is existential quantifier over iterable truthiness.\n\nHow It Works:\n• 1. First element True. 2. Return True.\n\nStep-by-Step Execution:\nLinear scan worst case O(n).\n\nOrder of Operations:\n• Feature flags: at least one enabled.\n\nCommon Use Cases:\n• any([]) is False.\n\nEdge Cases:\n• Short-circuit saves work.\n\nPerformance Considerations:\n• any(pred(x) for x in items)\n\nExamples:\n• Combine with all for invariants.\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• any([False, False, False]) is False — no truthy element.\n• Full scan may occur.\n\nHow It Works:\n• 1. All falsy. 2. False.\n\nStep-by-Step Execution:\nDetecting total absence of success signals.\n\nOrder of Operations:\n• [0,0,0] any False — zeros falsy.\n\nCommon Use Cases:\n• O(n).\n\nEdge Cases:\n• any with generator avoids list materialization.\n\nPerformance Considerations:\n• map with any for vectorized checks.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• all([True, True, True]) is True — universal truth.\n• all short-circuits on first falsy — none here.\n\nHow It Works:\n• 1. Every element truthy.\n\nStep-by-Step Execution:\nForm validation: every field passes.\n\nOrder of Operations:\n• all([]) vacuously True.\n\nCommon Use Cases:\n• O(n) worst case.\n\nEdge Cases:\n• all(not x for x in flags) pattern.\n\nPerformance Considerations:\n• numpy.all for arrays.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• all([True, False, True]) fails at middle False.\n• Second element stops evaluation? all still may short-circuit after first False.\n\nHow It Works:\n• 1. True ok. 2. False stops with False.\n\nStep-by-Step Execution:\nPermission checks: one deny fails all.\n\nOrder of Operations:\n• 0 in numeric list would fail all if testing positivity via truthiness.\n\nCommon Use Cases:\n• Early exit.\n\nEdge Cases:\n• all(map(pred, items))\n\nPerformance Considerations:\n• Use explicit loops when reporting which index failed.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• any([]) is False — empty disjunction has no witness.\n• Vacuous any is false in Python convention.\n\nHow It Works:\n• 1. No items. 2. False.\n\nStep-by-Step Execution:\nDefault deny for empty evidence set.\n\nOrder of Operations:\n• Contrast all([]) True.\n\nCommon Use Cases:\n• O(1).\n\nEdge Cases:\n• Guard if any(items): with explicit nonempty check if needed.\n\nPerformance Considerations:\n• Document API behavior on empty input.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• all([]) is True — no counterexample exists in empty domain.\n• Universal quantification over empty set is true in logic and Python.\n\nHow It Works:\n• 1. No items. 2. True.\n\nStep-by-Step Execution:\nSurprising paired with any([]) False — teach together.\n\nOrder of Operations:\n• Default allow for AND over empty collections — mind business rules.\n\nCommon Use Cases:\n• O(1).\n\nEdge Cases:\n• Tests must cover empty input explicitly.\n\nPerformance Considerations:\n• Business may require nonempty lists — validate separately.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• any([0,0,0]) is False — numeric zeros are falsy.\n• Truthiness, not numeric inequality to zero, drives any/all.\n\nHow It Works:\n• 1. Scan zeros. 2. No truthy.\n\nStep-by-Step Execution:\nScanning for nonzero activity in sparse vectors.\n\nOrder of Operations:\n• 0.0 also falsy.\n\nCommon Use Cases:\n• O(n).\n\nEdge Cases:\n• any(x != 0 for x in lst) if you need explicit inequality.\n\nPerformance Considerations:\n• numpy.any for ndarray.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• any([0,1,0]) is True — middle 1 is truthy.\n• Short-circuit may stop at second element.\n\nHow It Works:\n• 1. First 0. 2. 1 True.\n\nStep-by-Step Execution:\nFinding any hit in a small vector.\n\nOrder of Operations:\n• Could use 1 in lst for literal membership — different intent.\n\nCommon Use Cases:\n• Stops early.\n\nEdge Cases:\n• next(x for x in lst if x) pattern related.\n\nPerformance Considerations:\n• any for custom predicates.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• all([1,2,3]) is True — all ints nonzero thus truthy.\n• Only zero among ints is falsy.\n\nHow It Works:\n• 1. Each element truthy.\n\nStep-by-Step Execution:\nLightweight positivity check without explicit >0.\n\nOrder of Operations:\n• Negative ints are truthy — not a sign test.\n\nCommon Use Cases:\n• O(n).\n\nEdge Cases:\n• all(x > 0 for x in lst) when strict positivity matters.\n\nPerformance Considerations:\n• None in list raises TypeError in comparisons — separate issue.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• all([1,0,3]) short-circuits at 0 — False.\n• Zero falsy fails universal test.\n\nHow It Works:\n• 1. Pass 1. 2. Fail at 0.\n\nStep-by-Step Execution:\nInventory quantities — zero may mean out of stock.\n\nOrder of Operations:\n• Early exit on first failure.\n\nCommon Use Cases:\n• all with explicit predicate preferred for clarity.\n\nEdge Cases:\n• Combine with enumerate to report index.\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• any(x>3 for x in [1,2,5]) — 5>3 — True.\n• Generator lazy; any stops early at first True.\n\nHow It Works:\n• 1. x=1,2 fail. 2. x=5 succeeds.\n\nStep-by-Step Execution:\nThreshold scanning on the fly.\n\nOrder of Operations:\n• Order of x matters for which value short-circuits first.\n\nCommon Use Cases:\n• O(n) worst.\n\nEdge Cases:\n• next(x for x in xs if x>3, None)\n\nPerformance Considerations:\n• For huge streams, generators avoid materializing lists.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• all(x>0 for x in [1,2,3]) — True — strict positivity via comparisons.\n• Generator tests each element explicitly.\n\nHow It Works:\n• 1. All comparisons true.\n\nStep-by-Step Execution:\nValidating ranges for physics or finance positives.\n\nOrder of Operations:\n• Non-int types may fail comparisons — homogeneous list assumed.\n\nCommon Use Cases:\n• O(n).\n\nEdge Cases:\n• all(x>0 for x in items if items)\n\nPerformance Considerations:\n• numpy: (arr>0).all()\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• all(x>0 for x in [1,-2,3]) fails at -2.\n• Short-circuit stops at first nonpositive.\n\nHow It Works:\n• 1. 1 ok. 2. -2 fails.\n\nStep-by-Step Execution:\nCatching sign errors in vectors.\n\nOrder of Operations:\n• Zero would also fail.\n\nCommon Use Cases:\n• Early exit.\n\nEdge Cases:\n• Report failing index with enumerate in real code.\n\nPerformance Considerations:\n• math.copysign for sign extraction instead of truth hacks.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    "• any(c.isupper() for c in 'Hello') — H uppercase — True.\n• Character iteration with str methods.\n\nHow It Works:\n• 1. 'H' triggers True.\n\nStep-by-Step Execution:\nPassword rules: require an uppercase letter.\n\nOrder of Operations:\n• Unicode categories beyond isupper exist for i18n.\n\nCommon Use Cases:\n• Short-circuit at H.\n\nEdge Cases:\n• regex [A-Z] alternative.\n\nPerformance Considerations:\n• Normalize unicode before policy checks.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    "• all(c.islower() for c in 'hello') — all lowercase letters — True.\n• No uppercase in string.\n\nHow It Works:\n• 1. Each char passes.\n\nStep-by-Step Execution:\nSlug / username lowercase enforcement.\n\nOrder of Operations:\n• Spaces: ' '.islower() is False — would fail all.\n\nCommon Use Cases:\n• O(n).\n\nEdge Cases:\n• isalpha guard if non-letters must be excluded.\n\nPerformance Considerations:\n• casefold for case-insensitive equality.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    "• all(c.islower() for c in 'Hello') fails on H.\n• Mixed case breaks all-lowercase requirement.\n\nHow It Works:\n• 1. First char fails.\n\nStep-by-Step Execution:\nUsernames with accidental capitals.\n\nOrder of Operations:\n• Title case breaks policy.\n\nCommon Use Cases:\n• Stops early.\n\nEdge Cases:\n• s.lower() before test if policy is display normalization.\n\nPerformance Considerations:\n• Turkish dotted capital I edge cases in unicode.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    "• any(isinstance(x,str) for x in [1,'a',3]) — str present — True.\n• Heterogeneous rows — check for any string column.\n\nHow It Works:\n• 1. Second element matches str.\n\nStep-by-Step Execution:\nUnion-like tuples in legacy data.\n\nOrder of Operations:\n• Short-circuit early.\n\nCommon Use Cases:\n• isinstance(x,(str,bytes))\n\nEdge Cases:\n• TypedDict for structured rows.\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    '• all(isinstance(x,int) for x in [1,2,3]) — True.\n• Uniform int list passes isinstance int.\n\nHow It Works:\n• 1. Each int.\n\nStep-by-Step Execution:\nType validation before numeric pipeline.\n\nOrder of Operations:\n• bool is subclass of int — True would pass if present — exclude explicitly if needed.\n\nCommon Use Cases:\n• O(n).\n\nEdge Cases:\n• type(x) is int excludes bool.\n\nPerformance Considerations:\n• collections.abc.Integral for broader numeric acceptance.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    "• any([None,0,'',[],False]) is False — all standard falsy values.\n• Demonstrates falsy set in one expression.\n\nHow It Works:\n• 1. Scan all. 2. No truthy.\n\nStep-by-Step Execution:\nTeaching truthiness table.\n\nOrder of Operations:\n• Last False is falsy too.\n\nCommon Use Cases:\n• Full scan.\n\nEdge Cases:\n• any(map(bool, lst)) would coerce — different.\n\nPerformance Considerations:\n• Explicit None vs empty distinction elsewhere.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    "• all([1,'hello',[1],True]) — heterogeneous truthy — True.\n• Nonempty str and list; nonzero int; True bool.\n\nHow It Works:\n• 1. Each truthy.\n\nStep-by-Step Execution:\nSmoke that collection has no empty containers or zero ints.\n\nOrder of Operations:\n• 0 would fail.\n\nCommon Use Cases:\n• O(n).\n\nEdge Cases:\n• all(x for x in lst) vs all(lst) same if no custom logic.\n\nPerformance Considerations:\n• Watch short-circuit on empty subcontainers if testing elements.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    "• Nested ternary: x=15 selects 'big' on x>10 first.\n• Right-associative nested else-if expression.\n\nHow It Works:\n• 1. >10 true. 2. 'big'.\n\nStep-by-Step Execution:\nScore bucketization.\n\nOrder of Operations:\n• Readability vs elif chain tradeoff.\n\nCommon Use Cases:\n• One evaluation path.\n\nEdge Cases:\n• ('big' if x>10 else 'mid' if x>5 else 'small')\n\nPerformance Considerations:\n• PEP 8 line wrapping for long ternaries.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    "• x=7: not >10, then inner ternary: >5 -> 'mid'.\n• Nested thresholds for medium bucket.\n\nHow It Works:\n• 1. Outer false. 2. Inner true.\n\nStep-by-Step Execution:\nThree-tier labels.\n\nOrder of Operations:\n• Boundary tests at 5 and 10.\n\nCommon Use Cases:\n• Trivial path.\n\nEdge Cases:\n• elif readability often wins in teams.\n\nPerformance Considerations:\n• Unit-test boundaries inclusive/exclusive.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    "• x=3: falls through to 'small' — neither >10 nor >5.\n• Inner ternary final branch.\n\nHow It Works:\n• 1. Both comparisons false for 'big'/'mid'.\n\nStep-by-Step Execution:\nLow bucket classification.\n\nOrder of Operations:\n• Equality at 5 goes to small because x>5 is strict.\n\nCommon Use Cases:\n• Trivial.\n\nEdge Cases:\n• bisect or dict lookup for many thresholds.\n\nPerformance Considerations:\n• Document inclusive/exclusive rules in specs.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    '• Guard clause returns early on invalid input — design pattern, not a keyword.\n• Reduces nesting and highlights preconditions.\n\nHow It Works:\n• 1. Test precondition. 2. Return or raise if fail.\n\nStep-by-Step Execution:\nAPI validation helpers.\n\nOrder of Operations:\n• Overuse can duplicate cleanup — balance with context managers.\n\nCommon Use Cases:\n• O(1) checks typically.\n\nEdge Cases:\n• if not valid: raise ValueError\n\nPerformance Considerations:\n• Assertions only for internal invariants, not user input.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    "• x=5,y=10: both >0 -> 'both' — logical and of predicates.\n• Python and short-circuits: if x>0 is false, y>0 not evaluated.\n\nHow It Works:\n• 1. x>0 true. 2. y>0 true.\n\nStep-by-Step Execution:\nPairwise validation of independent conditions.\n\nOrder of Operations:\n• Side effects: put cheaper checks first if needed.\n\nCommon Use Cases:\n• O(1).\n\nEdge Cases:\n• min(x,y)>0 alternative for same sign positivity? Not equivalent generally.\n\nPerformance Considerations:\n• De Morgan: not (A and B) == (not A) or (not B).\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    "• x=-1,y=10: x>0 false — and short-circuits; result 'not both' without needing y>0.\n• False and ... does not evaluate RHS in Python boolean and.\n\nHow It Works:\n• 1. x>0 false. 2. Short-circuit.\n\nStep-by-Step Execution:\nRelies on short-circuit for safety and performance.\n\nOrder of Operations:\n• If x>0 true, y>0 evaluated.\n\nCommon Use Cases:\n• Boolean and semantics.\n\nEdge Cases:\n• Explicit tests give clearer error messages per variable.\n\nPerformance Considerations:\n• Document short-circuit in code reviews.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    "• x=0: nested ternary for sign — not >0, not <0 -> 'zero'.\n• Three-way classification of integers.\n\nHow It Works:\n• 1. Sign test ladder.\n\nStep-by-Step Execution:\nCenter bucket for exactly zero.\n\nOrder of Operations:\n• NaN not in int domain here.\n\nCommon Use Cases:\n• O(1).\n\nEdge Cases:\n• math.copysign(1,x) for sign bit.\n\nPerformance Considerations:\n• elif chain often clearer.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    "• x is None -> 'default' branch of x if x is not None else 'default'.\n• Conditional expression for None-coalescing without treating 0 as missing.\n\nHow It Works:\n• 1. None test. 2. Pick alternative.\n\nStep-by-Step Execution:\nOptional[str] style handling.\n\nOrder of Operations:\n• Contrast with or-default which treats 0 as falsy.\n\nCommon Use Cases:\n• O(1).\n\nEdge Cases:\n• value if value is not None else default\n\nPerformance Considerations:\n• typing.Optional patterns.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    '• x=42: not None -> left branch returns 42.\n• Identity check passes; value preserved.\n\nHow It Works:\n• 1. is not None true.\n\nStep-by-Step Execution:\nPreserves legitimate zero unlike or-default.\n\nOrder of Operations:\n• 0 would also pass is not None — good for numeric optionals.\n\nCommon Use Cases:\n• Trivial.\n\nEdge Cases:\n• PEP 8 recommends is not None.\n\nPerformance Considerations:\n• SQLAlchemy distinguishes unloaded vs None — ORM nuance.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• List comp with two if filters: multiples of 2 and 3 -> multiples of 6: [0,6] in range(10).\n• Multiple if clauses chain as AND.\n\nHow It Works:\n• 1. i%2==0. 2. i%3==0.\n\nStep-by-Step Execution:\nEquivalent to i%6==0 for integers.\n\nOrder of Operations:\n• O(n).\n\nCommon Use Cases:\n• [i for i in range(10) if i%6==0]\n\nEdge Cases:\n• Keep comprehension readable — sometimes explicit loop wins.\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• bool([False]) True — nonempty list despite falsy element.\n• Container truthiness from length only.\n\nHow It Works:\n• 1. len 1.\n\nStep-by-Step Execution:\nContrast all([False]) which is False.\n\nOrder of Operations:\n• Teaching list vs element truthiness.\n\nCommon Use Cases:\n• [[False]] still True.\n\nEdge Cases:\n• O(1).\n\nPerformance Considerations:\n• if lst and all(lst): — different tests.\n\nExamples:\n• Use any/not any on elements when needed.\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    "• bool('False') True — nonempty string.\n• Lexical 'False' is not bool False.\n\nHow It Works:\n• Parsing needed for real booleans.\n\nStep-by-Step Execution:\nConfig pitfalls.\n\nOrder of Operations:\n• json.loads.\n\nCommon Use Cases:\n• Trivial.\n\nEdge Cases:\n• strtobool utilities.\n\nPerformance Considerations:\n• Validate enumerations explicitly.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    "• bool(' ') True — space character string nonempty.\n• Whitespace still has length.\n\nHow It Works:\n• Strip before meaningful emptiness checks.\n\nStep-by-Step Execution:\nForm fields with accidental spaces.\n\nOrder of Operations:\n• isspace() differs from empty.\n\nCommon Use Cases:\n• Trivial.\n\nEdge Cases:\n• if s.strip():\n\nPerformance Considerations:\n• Usernames may disallow whitespace-only.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    '• bool(0.0) False — float zero falsy.\n• Same rule as int zero.\n\nHow It Works:\n• Residual calculations near zero.\n\nStep-by-Step Execution:\nNaN is True — different edge.\n\nOrder of Operations:\n• Trivial.\n\nCommon Use Cases:\n• math.isclose for residuals.\n\nEdge Cases:\n• Decimal(0) also falsy.\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• bool(0j) False — complex zero has zero magnitude.\n• Complex __bool__ uses magnitude == 0 test.\n\nHow It Works:\n• 1+0j truthy.\n\nStep-by-Step Execution:\nSignal processing teaching examples.\n\nOrder of Operations:\n• cmath phase of 0j defined.\n\nCommon Use Cases:\n• Trivial.\n\nEdge Cases:\n• abs(z)==0 equivalent test.\n\nPerformance Considerations:\n• numpy complex may differ slightly — ecosystem note.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    "• None or 'default' -> 'default' — None falsy.\n• or picks first truthy.\n\nHow It Works:\n• 1. None fails. 2. Pick string.\n\nStep-by-Step Execution:\nDefaulting values — watch 0 validity.\n\nOrder of Operations:\n• O(1).\n\nCommon Use Cases:\n• x if x is not None else v — None-specific.\n\nEdge Cases:\n• API docs should state falsy vs None semantics.\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    "• 'value' or 'default' -> 'value' — left operand truthy.\n• Short-circuit stops.\n\nHow It Works:\n• 1. Nonempty str.\n\nStep-by-Step Execution:\nDefault only when left missing/empty.\n\nOrder of Operations:\n• Trivial.\n\nCommon Use Cases:\n• or chains for priority-ordered defaults.\n\nEdge Cases:\n• Keyword-argument defaults differ pattern.\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    "• '' or 'fallback' -> 'fallback' — empty str falsy.\n• Common pattern for display names.\n\nHow It Works:\n• Whitespace ' ' would be truthy — different.\n\nStep-by-Step Execution:\nUser profile optional fields.\n\nOrder of Operations:\n• O(1).\n\nCommon Use Cases:\n• name or 'anonymous'\n\nEdge Cases:\n• i18n: distinguish missing key vs empty translation.\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    "• 0 or None or '' or 'found' evaluates left-associative chain of or — first truthy is 'found'.\n• All prior operands falsy.\n\nHow It Works:\n• 1. Scan until truthy.\n\nStep-by-Step Execution:\nFallback priority lists.\n\nOrder of Operations:\n• Valid zero may be wrongly skipped — use explicit None checks.\n\nCommon Use Cases:\n• Stops at truthy.\n\nEdge Cases:\n• Explicit if/elif for money and counters.\n\nPerformance Considerations:\n• Document intentional falsy handling.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    '• 1 and 2 and 3 returns last operand 3 — all truthy.\n• and returns first falsy or last truthy.\n\nHow It Works:\n• 1. Chain truthy. 2. Result 3.\n\nStep-by-Step Execution:\nNumeric and-chains are obscure style — prefer explicit logic.\n\nOrder of Operations:\n• Stops at first falsy if any.\n\nCommon Use Cases:\n• O(1) tiny chain.\n\nEdge Cases:\n• all([1,2,3]) is True but different meaning.\n\nPerformance Considerations:\n• Avoid clever and-chains in production.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• 1 and 0 and 3 -> 0 — first falsy wins.\n• Short-circuit skips 3.\n\nHow It Works:\n• 1. 1 ok. 2. 0 falsy.\n\nStep-by-Step Execution:\nValidation chains.\n\nOrder of Operations:\n• 0 returned, not False.\n\nCommon Use Cases:\n• Trivial.\n\nEdge Cases:\n• all(...) for boolean intent.\n\nPerformance Considerations:\n• Explicit if clearer.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    "• '' or [] or {} or 'yes' — first three falsy; 'yes' truthy.\n• or chain across container types.\n\nHow It Works:\n• 1. Try each. 2. Last truthy.\n\nStep-by-Step Execution:\nDefault selection among many empty sentinels.\n\nOrder of Operations:\n• Order encodes priority.\n\nCommon Use Cases:\n• Stops early at truthy.\n\nEdge Cases:\n• Valid empty dict may be wrongly replaced — explicit None pattern.\n\nPerformance Considerations:\n• config.get with defaults.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    "• [] and 'hello' -> [] — empty list falsy; and short-circuits.\n• Returns first falsy operand.\n\nHow It Works:\n• 1. [].\n\nStep-by-Step Execution:\nGuards before processing.\n\nOrder of Operations:\n• Second operand not evaluated.\n\nCommon Use Cases:\n• Short-circuit protects expensive calls.\n\nEdge Cases:\n• if lst and process(lst):\n\nPerformance Considerations:\n• Similar to expert patterns.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    "• [1] and 'hello' -> 'hello' — both truthy; and returns last evaluated operand here.\n• Two-operand and between truthy values yields last.\n\nHow It Works:\n• 1. [1] truthy. 2. 'hello' truthy.\n\nStep-by-Step Execution:\nObscure idiom — prefer tuple or small struct.\n\nOrder of Operations:\n• O(1).\n\nCommon Use Cases:\n• optional_fn and optional_fn() pattern for callbacks.\n\nEdge Cases:\n• Readability over cleverness.\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    '• not 0 is True — not inverts bool(0) which is False.\n• Unary not on ints uses truthiness.\n\nHow It Works:\n• 1. 0 falsy. 2. not True.\n\nStep-by-Step Execution:\nGuarding zero vs nonzero.\n\nOrder of Operations:\n• not [] True.\n\nCommon Use Cases:\n• Trivial.\n\nEdge Cases:\n• if not n:\n\nPerformance Considerations:\n• Explicit n==0 when False and 0 both possible.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    "• not '' is True — empty string falsy.\n• Common if not s: pattern.\n\nHow It Works:\n• Whitespace caveat.\n\nStep-by-Step Execution:\n1. '' falsy. 2. not True.\n\nOrder of Operations:\n• Form validation.\n\nCommon Use Cases:\n• not 'hello' False.\n\nEdge Cases:\n• Trivial.\n\nPerformance Considerations:\n• if not name.strip():\n\nExamples:\n• len(s)==0 explicit alternative.\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    "• not 'hello' is False — nonempty string truthy.\n• 1. bool True. 2. not False.\n\nHow It Works:\n• Presence tests.\n\nStep-by-Step Execution:\nTrivial.\n\nOrder of Operations:\n• if message:\n\nCommon Use Cases:\n• Double negatives harm readability.\n\nEdge Cases:\n• — (Editorial: expand this slot if needed.)\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    '• not [] is True — empty list falsy.\n• Container emptiness.\n\nHow It Works:\n• 1. bool False. 2. not True.\n\nStep-by-Step Execution:\nif not items:\n\nOrder of Operations:\n• Nonempty [0] truthy.\n\nCommon Use Cases:\n• Trivial.\n\nEdge Cases:\n• if not data: return\n\nPerformance Considerations:\n• len(items)==0 explicit.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• not not True is True — double negation yields original truth for proper booleans.\n• 1. not True False. 2. not False True.\n\nHow It Works:\n• Prefer bool(x) over not not x in real code.\n\nStep-by-Step Execution:\nEducational only.\n\nOrder of Operations:\n• Trivial.\n\nCommon Use Cases:\n• bool() constructor clarity.\n\nEdge Cases:\n• PEP 8 readability.\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• not not [] is False — [] falsy; not True; not False.\n• Double negation maps truthiness to bool-like True/False values.\n\nHow It Works:\n• 1. [] falsy. 2. not True. 3. not False.\n\nStep-by-Step Execution:\nConfusing — use bool([]) directly.\n\nOrder of Operations:\n• Pedagogical contrast with not not True.\n\nCommon Use Cases:\n• Trivial.\n\nEdge Cases:\n• Explicit tests beat double negation.\n\nPerformance Considerations:\n• Keep control flow readable.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
]


def main() -> None:
    path = Path(__file__).resolve().parents[1] / "src/data/questions/level3_intermediate_a.ts"
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
