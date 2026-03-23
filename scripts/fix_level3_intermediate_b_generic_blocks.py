#!/usr/bin/env python3
"""
Replace duplicated generic tails in level3_intermediate_b.ts (50 occurrences).
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

    '• and binds tighter than or: True or False and False -> True or (False and False) -> True.\n• Mixing without parentheses invites bugs — parenthesize.\n\nHow It Works:\n• PEP reference operator precedence table.\n\nStep-by-Step Execution:\n1. Evaluate inner and. 2. Evaluate or.\n\nOrder of Operations:\n• De Morgan and distributive laws help refactor.\n\nCommon Use Cases:\n• Boolean configs in feature flags.\n\nEdge Cases:\n• not binds tighter than and/or — another pitfall.\n\nPerformance Considerations:\n• Trivial.\n\nExamples:\n• (True or False) and False -> False\n\nNotes:\n• Add parentheses whenever reviewers misread.'
,
    '• (True or False) and False -> True and False -> False.\n• Parentheses force or before and.\n\nHow It Works:\n• 1. Inner or True. 2. and False.\n\nStep-by-Step Execution:\nContrasts with unparenthesized version.\n\nOrder of Operations:\n• Explicit grouping in policies.\n\nCommon Use Cases:\n• Trivial.\n\nEdge Cases:\n• Always parenthesize mixed and/or.\n\nPerformance Considerations:\n• Truth tables for verification.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• not True or True -> (not True) or True -> False or True -> True.\n• not binds before or.\n\nHow It Works:\n• 1. not False? not True is False. 2. or True.\n\nStep-by-Step Execution:\nPrecedence demonstration.\n\nOrder of Operations:\n• Add parentheses when intending not (True or True).\n\nCommon Use Cases:\n• Trivial.\n\nEdge Cases:\n• not True or False -> False\n\nPerformance Considerations:\n• Style guides suggest spacing and parens.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• not (True or True) -> not True -> False.\n• Parentheses after not.\n\nHow It Works:\n• 1. Inner True. 2. Negate.\n\nStep-by-Step Execution:\nDe Morgan: not (A or B).\n\nOrder of Operations:\n• Trivial.\n\nCommon Use Cases:\n• not A and not B equivalent under De Morgan.\n\nEdge Cases:\n• Truth tables.\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• True and not False -> True and True -> True.\n• not applies to False first.\n\nHow It Works:\n• 1. not False True. 2. and True.\n\nStep-by-Step Execution:\nCommon guard pattern A and not B.\n\nOrder of Operations:\n• Trivial.\n\nCommon Use Cases:\n• Optional parens: True and (not False).\n\nEdge Cases:\n• Readability in compound guards.\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• False or not False and True -> False or (True and True) -> True — and before or.\n• not False is True; and combines; or combines.\n\nHow It Works:\n• 1. Parse precedence. 2. Evaluate.\n\nStep-by-Step Execution:\nComplex — split into variables in real code.\n\nOrder of Operations:\n• Refactor for clarity.\n\nCommon Use Cases:\n• Trivial.\n\nEdge Cases:\n• Multiple lines with named booleans.\n\nPerformance Considerations:\n• Unit-test each subexpression.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• 1<2 and 3<4 -> True — two comparisons and-ed.\n• Not a chained four-term comparison — two separate bools.\n\nHow It Works:\n• 1. Both true.\n\nStep-by-Step Execution:\nRange-like checks split.\n\nOrder of Operations:\n• Could be written 1<2<3<4 chained instead — different syntax.\n\nCommon Use Cases:\n• Trivial.\n\nEdge Cases:\n• Chained form often clearer for intervals.\n\nPerformance Considerations:\n• Mind short-circuit: and stops at first false.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• 1<2 or 3>4 -> True or False -> True.\n• Left comparison already true; or short-circuits.\n\nHow It Works:\n• 1. 1<2 True.\n\nStep-by-Step Execution:\nEither-side checks.\n\nOrder of Operations:\n• Right side may be skipped.\n\nCommon Use Cases:\n• Trivial.\n\nEdge Cases:\n• Side effects: put cheaper or safer checks first.\n\nPerformance Considerations:\n• Logically related inequalities may deserve named variables.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• not 1<2 parses as not (1<2) because not is lower precedence than comparisons — result False.\n• If it were (not 1)<2 that would be 0<2 True — different parse.\n\nHow It Works:\n• Python 3 grammar: not a < b is not (a < b) when not applies to comparison.\n\nStep-by-Step Execution:\n1. 1<2 True. 2. not False.\n\nOrder of Operations:\n• Verify in REPL when unsure.\n\nCommon Use Cases:\n• Trivial.\n\nEdge Cases:\n• Parenthesize comparisons after not explicitly if needed.\n\nPerformance Considerations:\n• Do not guess precedence — check docs.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• 1<2<3<4 chained -> True — pairwise 1<2, 2<3, 3<4.\n• Middle operands evaluated once.\n\nHow It Works:\n• Interval inclusion in ordered numbers.\n\nStep-by-Step Execution:\nNaN breaks chains — not here.\n\nOrder of Operations:\n• O(1).\n\nCommon Use Cases:\n• a <= x <= b inclusive bounds.\n\nEdge Cases:\n• Floats: use isclose at endpoints.\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• 1<2>0 chained -> 1<2 and 2>0 — both true.\n• Peak-style local check — not global monotonicity.\n\nHow It Works:\n• 1. Segments hold.\n\nStep-by-Step Execution:\nInequalities for small puzzles.\n\nOrder of Operations:\n• 1<2>3 would fail second segment.\n\nCommon Use Cases:\n• O(1).\n\nEdge Cases:\n• Chained comparisons are pairwise, not transitive inference.\n\nPerformance Considerations:\n• Explain with number line sketches.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• 1<2>3 -> False — 2>3 fails.\n• Second segment fails entire chain.\n\nHow It Works:\n• 1. First true. 2. Second false.\n\nStep-by-Step Execution:\nIllustrates local failure.\n\nOrder of Operations:\n• Trivial.\n\nCommon Use Cases:\n• Draw 1,2,3 on line.\n\nEdge Cases:\n• Chained ops still pairwise.\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    "• 'a'<'b'<'c' lexicographic ordering holds for ASCII letters.\n• String comparison uses Unicode code points.\n\nHow It Works:\n• 1. Three pairwise str compares.\n\nStep-by-Step Execution:\nSorting keys and tokens.\n\nOrder of Operations:\n• Locale collation differs — not this simple rule globally.\n\nCommon Use Cases:\n• O(1) for short literals.\n\nEdge Cases:\n• ord() reveals code points.\n\nPerformance Considerations:\n• Use locale-aware sort for user-visible strings.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    '• 0<1>-1 -> 0<1 and 1>-1 — both true.\n• Signed numbers in chain.\n\nHow It Works:\n• 1. Two segments.\n\nStep-by-Step Execution:\nInequality puzzles mixing negatives.\n\nOrder of Operations:\n• Trivial.\n\nCommon Use Cases:\n• Chained comparisons with negatives on number line.\n\nEdge Cases:\n• Explain carefully in teaching.\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• 1==1<2 -> 1==1 and 1<2 — both true.\n• Mixing == and < in one chain is legal.\n\nHow It Works:\n• 1. Equality segment. 2. order segment.\n\nStep-by-Step Execution:\nUseful for x==y<z style constraints.\n\nOrder of Operations:\n• Trivial.\n\nCommon Use Cases:\n• Read PEP for edge cases mixing operators.\n\nEdge Cases:\n• Prefer named subexpressions if confusing.\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• 1<=x<=10 with x=5 — inclusive range check True.\n• Chained comparisons for interval membership.\n\nHow It Works:\n• 1. Lower bound. 2. Upper bound.\n\nStep-by-Step Execution:\nValidate user numeric input windows.\n\nOrder of Operations:\n• x=15 fails upper segment.\n\nCommon Use Cases:\n• O(1).\n\nEdge Cases:\n• min(max(x,lo),hi) clamp alternative.\n\nPerformance Considerations:\n• Floats: isclose at edges.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• x=15 fails 15<=10 — chained comparison false.\n• Second segment fails.\n\nHow It Works:\n• Out-of-range high.\n\nStep-by-Step Execution:\nUser-friendly error messages should mention bounds.\n\nOrder of Operations:\n• Trivial.\n\nCommon Use Cases:\n• Clamp instead of reject when appropriate.\n\nEdge Cases:\n• Separate checks for clearer errors.\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    "• x='hello': x and len(x)>3 — x truthy, len>3 true — expression True.\n• and returns last evaluated operand if all truthy? Actually bool of (len(x)>3) — True.\n\nHow It Works:\n• 1. x truthy. 2. evaluate len>3 True.\n\nStep-by-Step Execution:\nGuard processing long strings.\n\nOrder of Operations:\n• Empty x short-circuits to '' without evaluating len — safe.\n\nCommon Use Cases:\n• Short-circuit protects len on empty? Actually len('') is 0 — safe anyway.\n\nEdge Cases:\n• if s and len(s)>3:\n\nPerformance Considerations:\n• Mixing return types str vs bool — mind API consistency.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    "• x='' -> '' and len(x)>3 short-circuits to '' — falsy left.\n• Second operand not evaluated in boolean and.\n\nHow It Works:\n• 1. '' falsy.\n\nStep-by-Step Execution:\nAvoid processing empty strings.\n\nOrder of Operations:\n• Return type may be str not bool — pattern sometimes abused.\n\nCommon Use Cases:\n• Trivial.\n\nEdge Cases:\n• if not x: handle empty\n\nPerformance Considerations:\n• Prefer explicit booleans in APIs.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    "• x=None: x and x.strip() — None falsy; short-circuit avoids AttributeError on strip.\n• Safe optional chaining style without ?. operator.\n\nHow It Works:\n• 1. None falsy.\n\nStep-by-Step Execution:\nProtect methods on possibly-None values.\n\nOrder of Operations:\n• '' would evaluate strip — still safe.\n\nCommon Use Cases:\n• Short-circuit pattern.\n\nEdge Cases:\n• Optional chaining PEP discussions — still use explicit if None in strict code.\n\nPerformance Considerations:\n• if x is not None: x.strip() clearer.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    "• d.get('b') missing -> None; None or 'missing' -> 'missing'.\n• get avoids KeyError.\n\nHow It Works:\n• 1. None falsy. 2. default str.\n\nStep-by-Step Execution:\nDefaulting dict lookups.\n\nOrder of Operations:\n• or skips valid 0 — use None test if zero is legitimate.\n\nCommon Use Cases:\n• O(1).\n\nEdge Cases:\n• d.get(k, default) for missing-key default only.\n\nPerformance Considerations:\n• defaultdict alternative.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    "• d.get('a') returns 1; 1 or 'missing' -> 1 — truthy left stops.\n• Preserves numeric one.\n\nHow It Works:\n• 1. get succeeds.\n\nStep-by-Step Execution:\nContrast with 0 case.\n\nOrder of Operations:\n• Trivial.\n\nCommon Use Cases:\n• if (v:=d.get(k)) is not None:\n\nEdge Cases:\n• Explicit branching for 0 vs missing.\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    "• d.get('a') is 0; 0 or 'missing' -> 'missing' — zero falsy triggers default.\n• Classic foot-gun: valid zero treated as missing by or.\n\nHow It Works:\n• 1. 0 falsy.\n\nStep-by-Step Execution:\nCounters where zero is valid.\n\nOrder of Operations:\n• Use is None checks when 0 is meaningful.\n\nCommon Use Cases:\n• Trivial.\n\nEdge Cases:\n• v if v is not None else default — None-specific.\n\nPerformance Considerations:\n• Document API: falsy vs missing.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    "• d.get('a', 'missing') returns 0 when key exists — default only for missing keys.\n• No or involved — value preserved even if falsy.\n\nHow It Works:\n• 1. Key present. 2. Return 0.\n\nStep-by-Step Execution:\nCorrect pattern for allowing zero.\n\nOrder of Operations:\n• Contrast with .get('a') or 'missing'.\n\nCommon Use Cases:\n• O(1).\n\nEdge Cases:\n• Read dict.get documentation carefully.\n\nPerformance Considerations:\n• collections.ChainMap patterns differ.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    "• any(c.isdigit() for c in 'abc123') True — digit exists.\n• Generator short-circuits at digit.\n\nHow It Works:\n• 1. Scan until digit.\n\nStep-by-Step Execution:\nPassword complexity checks.\n\nOrder of Operations:\n• Trivial.\n\nCommon Use Cases:\n• regex search alternative.\n\nEdge Cases:\n• Unicode digit categories.\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    "• all(c.isalpha() for c in 'abcdef') True — letters only.\n• Fails if digits or spaces present.\n\nHow It Works:\n• 1. Each char isalpha.\n\nStep-by-Step Execution:\nUsername alphabetic policy.\n\nOrder of Operations:\n• Non-ASCII letters may count as alpha — unicode aware.\n\nCommon Use Cases:\n• O(n).\n\nEdge Cases:\n• isalnum allows digits — different test.\n\nPerformance Considerations:\n• Normalize unicode for locale policies.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    "• all(c.isalpha() for c in 'abc123') False — digit breaks.\n• Short-circuit at first bad char.\n\nHow It Works:\n• Mixed alphanumeric fails alpha-only.\n\nStep-by-Step Execution:\nTrivial.\n\nOrder of Operations:\n• isdigit on any char alternative test.\n\nCommon Use Cases:\n• regex ^[A-Za-z]+$ with ASCII flag.\n\nEdge Cases:\n• — (Editorial: expand this slot if needed.)\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    '• sum(1 for x in [1,2,3,4,5] if x>3) counts 4 and 5 -> 2.\n• Generator sum of ones.\n\nHow It Works:\n• 1. Predicate selects. 2. Sum.\n\nStep-by-Step Execution:\nCounting without list materialization.\n\nOrder of Operations:\n• len([...]) alternative uses more memory.\n\nCommon Use Cases:\n• O(n).\n\nEdge Cases:\n• sum(x>0 for x in a) bool sum pattern.\n\nPerformance Considerations:\n• NumPy count_nonzero.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• [x for x in [1,2,3,4,5] if x>3] -> [4,5].\n• List comprehension collects matches.\n\nHow It Works:\n• 1. Filter. 2. Collect.\n\nStep-by-Step Execution:\nSame predicate as counting example.\n\nOrder of Operations:\n• O(n) output.\n\nCommon Use Cases:\n• filter(lambda x:x>3, lst) equivalent.\n\nEdge Cases:\n• Generator for memory efficiency on large inputs.\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    "• any(word.startswith('py') for word in ['python','java','php']) True — python.\n• Case-sensitive prefix — 'Python' would fail unless cased correctly.\n\nHow It Works:\n• 1. First word matches prefix.\n\nStep-by-Step Execution:\nFeature detection of stack names.\n\nOrder of Operations:\n• Trivial.\n\nCommon Use Cases:\n• word.lower().startswith('py') for case-insensitive.\n\nEdge Cases:\n• tuple of prefixes in startswith.\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    "• all(len(w)>2 for w in ['hi','hello','hey']) False — 'hi' length 2 not >2.\n• Short-circuit at hi.\n\nHow It Works:\n• Password minimum length policies.\n\nStep-by-Step Execution:\nEdge exactly threshold.\n\nOrder of Operations:\n• O(n).\n\nCommon Use Cases:\n• all(len(w)>=3 for ...) inclusive threshold.\n\nEdge Cases:\n• Report which word failed with enumerate.\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    '• max([1,2,3,4,5], key=lambda x: x%3) maximizes remainder mod 3 — candidates 1,2,0,1,2 -> max remainder 2 first at value 2.\n• CPython max returns first item among ties of key.\n\nHow It Works:\n• 1. Map key. 2. Argmax.\n\nStep-by-Step Execution:\nCustom scoring without sorting full list.\n\nOrder of Operations:\n• O(n) single pass.\n\nCommon Use Cases:\n• max with key documented tie behavior.\n\nEdge Cases:\n• numpy.argmax for vectors.\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• min([1,2,3,4,5], key=lambda x: -x) emulates max by negating.\n• 1. Keys -1..-5. 2. min key -5 corresponds to x=5.\n\nHow It Works:\n• Idiomatic argmax via min(-x).\n\nStep-by-Step Execution:\nTie behavior as min.\n\nOrder of Operations:\n• O(n).\n\nCommon Use Cases:\n• max(iterable) simpler for plain numeric max.\n\nEdge Cases:\n• key abs for magnitude sometimes.\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    "• sorted([True, False, True, False]) orders False before True — bool orders like 0 before 1.\n• bool subclass int ordering.\n\nHow It Works:\n• Stable sort preserves relative order of equal keys? Timsort stable.\n\nStep-by-Step Execution:\nPredictable booleans in sorts.\n\nOrder of Operations:\n• O(n log n).\n\nCommon Use Cases:\n• sorted(flags, key=int) same order.\n\nEdge Cases:\n• Don't rely on bool sort in APIs — be explicit.\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    '• [False, True] < [True, False] lexicographic — compare first elements: False < True -> True.\n• List comparison elementwise then length.\n\nHow It Works:\n• 1. First pair decides.\n\nStep-by-Step Execution:\nTuple comparison analogous.\n\nOrder of Operations:\n• If first equal, compare next.\n\nCommon Use Cases:\n• O(k).\n\nEdge Cases:\n• Avoid comparing heterogeneous-type lists accidentally.\n\nPerformance Considerations:\n• Document ordering for UI sort keys.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    "• lambda x: 'even' if x%2==0 else 'odd' applied to 4 -> 'even'.\n• Conditional expression inside lambda body.\n\nHow It Works:\n• 1. 4%2==0 true.\n\nStep-by-Step Execution:\nTiny dispatch functions.\n\nOrder of Operations:\n• lambda single-expression limitation.\n\nCommon Use Cases:\n• Trivial.\n\nEdge Cases:\n• def with name clearer for debugging.\n\nPerformance Considerations:\n• assigning lambda to name discouraged by PEP8 but common in pandas.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    "• Same lambda applied to 7 -> 'odd'.\n• 7%2==1.\n\nHow It Works:\n• Else branch.\n\nStep-by-Step Execution:\nTrivial.\n\nOrder of Operations:\n• Test boundary 0 for even.\n\nCommon Use Cases:\n• lambda debugging harder than def.\n\nEdge Cases:\n• — (Editorial: expand this slot if needed.)\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    "• Nested ternary right-associative: x=5 -> not >10, inner 'b' if x>3 else 'c' -> 'b'.\n• 1. Outer false to big. 2. Inner true to mid.\n\nHow It Works:\n• Multi-label selection.\n\nStep-by-Step Execution:\nReadability vs elif.\n\nOrder of Operations:\n• Trivial.\n\nCommon Use Cases:\n• Add parentheses and line breaks.\n\nEdge Cases:\n• dict or bisect for many labels.\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    "• x=1 -> inner ternary yields 'c' — not >3.\n• Lowest bucket.\n\nHow It Works:\n• 1. x>3 false.\n\nStep-by-Step Execution:\nBoundary 3 exclusive.\n\nOrder of Operations:\n• Trivial.\n\nCommon Use Cases:\n• Test x=3 exactly.\n\nEdge Cases:\n• elif chain for teaching.\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    '• [i for i in range(10) if i%2==0 and i%3==0] == multiples of 6 -> [0,6].\n• Double filter AND in comprehension.\n\nHow It Works:\n• 1. i%2==0. 2. i%3==0.\n\nStep-by-Step Execution:\nEquivalent lcm filter.\n\nOrder of Operations:\n• O(n).\n\nCommon Use Cases:\n• i%6==0 single test alternative.\n\nEdge Cases:\n• Keep readable — sometimes split conditions.\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• len([x for x in range(100) if x%7==0]) counts multiples of 7 in 0..99 — 15 values.\n• Floor division count: 99//7 +1 for zero? Multiples 0,7,...,98 -> 15.\n\nHow It Works:\n• 1. List comp. 2. len.\n\nStep-by-Step Execution:\nCount via materialized list — memory heavier than sum(1 for ...).\n\nOrder of Operations:\n• O(n) time.\n\nCommon Use Cases:\n• 100//7 + 1 = 15? 98/7=14, plus 0 ->15. OK.\n\nEdge Cases:\n• Use arithmetic count formula when possible.\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• next(x for x in [1,2,3,4,5] if x>3) returns 4 — first match.\n• Generator expression consumed by next without default — StopIteration if none.\n\nHow It Works:\n• 1. Skip 1,2,3. 2. Yield 4.\n\nStep-by-Step Execution:\nSearch earliest exceeding threshold.\n\nOrder of Operations:\n• Use next(..., default) for safety.\n\nCommon Use Cases:\n• Short-circuit.\n\nEdge Cases:\n• for-loop explicit for debugging.\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    "• bool(float('nan')) True — non-zero float object — reinforces expert_b lesson.\n• Cross-file duplicate concept intentional.\n\nHow It Works:\n• math.isnan for real checks.\n\nStep-by-Step Execution:\nTrivial.\n\nOrder of Operations:\n• Pedagogy: link levels.\n\nCommon Use Cases:\n• pandas isna.\n\nEdge Cases:\n• — (Editorial: expand this slot if needed.)\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    "• bool(float('inf')) True — reinforces infinity truthiness.\n• Same theme as expert_b.\n\nHow It Works:\n• math.isinf.\n\nStep-by-Step Execution:\nTrivial.\n\nOrder of Operations:\n• Consistent curriculum.\n\nCommon Use Cases:\n• — (Editorial: expand this slot if needed.)\n\nEdge Cases:\n• — (Editorial: expand this slot if needed.)\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    '• True==1 True — bool/int equality.\n• PEP 285 subclassing.\n\nHow It Works:\n• Hash collision in dict keys.\n\nStep-by-Step Execution:\nTrivial.\n\nOrder of Operations:\n• Identity vs equality separate topic.\n\nCommon Use Cases:\n• — (Editorial: expand this slot if needed.)\n\nEdge Cases:\n• — (Editorial: expand this slot if needed.)\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• False==0 True — reinforces bool/int zero equality.\n• Dict key collisions with 0 and False.\n\nHow It Works:\n• Trivial.\n\nStep-by-Step Execution:\nExplicit key types.\n\nOrder of Operations:\n• — (Editorial: expand this slot if needed.)\n\nCommon Use Cases:\n• — (Editorial: expand this slot if needed.)\n\nEdge Cases:\n• — (Editorial: expand this slot if needed.)\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• True+1 -> 2 — True promotes to 1.\n• Arithmetic on bool.\n\nHow It Works:\n• Avoid style-wise except teaching.\n\nStep-by-Step Execution:\nTrivial.\n\nOrder of Operations:\n• int(True)+1\n\nCommon Use Cases:\n• — (Editorial: expand this slot if needed.)\n\nEdge Cases:\n• — (Editorial: expand this slot if needed.)\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    '• False+0 -> 0 — 0+0.\n• Falsy sum.\n\nHow It Works:\n• Trivial.\n\nStep-by-Step Execution:\nsum(bool_list) counting pattern.\n\nOrder of Operations:\n• — (Editorial: expand this slot if needed.)\n\nCommon Use Cases:\n• — (Editorial: expand this slot if needed.)\n\nEdge Cases:\n• — (Editorial: expand this slot if needed.)\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
,
    "• {True:'a',1:'b',1.0:'c'} single key after collisions — last wins 'c'.\n• True, 1, 1.0 equal as keys.\n\nHow It Works:\n• len 1.\n\nStep-by-Step Execution:\nKey typing discipline.\n\nOrder of Operations:\n• Trivial.\n\nCommon Use Cases:\n• str keys for JSON-like maps.\n\nEdge Cases:\n• — (Editorial: expand this slot if needed.)\n\nPerformance Considerations:\n• — (Editorial: expand this slot if needed.)\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)"
,
    '• [False,0,0.0].count(0) == 3 — each element == 0 including False.\n• Equality-based count, not identity.\n\nHow It Works:\n• 1. Three ==0 comparisons true.\n\nStep-by-Step Execution:\nSurprising for new learners.\n\nOrder of Operations:\n• NaN would not match 0.\n\nCommon Use Cases:\n• O(n).\n\nEdge Cases:\n• sum(x is 0 for x in lst) for strict int zero only.\n\nPerformance Considerations:\n• Document analytics definitions.\n\nExamples:\n• — (Editorial: expand this slot if needed.)\n\nNotes:\n• — (Editorial: expand this slot if needed.)'
]


def main() -> None:
    path = Path(__file__).resolve().parents[1] / "src/data/questions/level3_intermediate_b.ts"
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
