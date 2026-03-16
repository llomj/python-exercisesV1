// --- LEVEL 4 EXPERT: WHILE-LOOP MASTERY BATCH 3 - 26 QUESTIONS (53-78) ---
// Covers: Linked lists, iterators, expression eval, string ops, bit manipulation,
// parsing, game loops, moving averages, word wrap, XOR encryption

export const level4WhileBatch3 = [
  // Q53: Linked list simulation via dict
  (_i: number) => ({
    q: `What is vals?\nnodes = {0: (10,1), 1: (20,2), 2: (30,-1)}\nvals = []\ncur = 0\nwhile cur != -1:\n    vals.append(nodes[cur][0])\n    cur = nodes[cur][1]\nvals`,
    o: ["[10, 20, 30]", "[10, 20]", "[30, 20, 10]", "Error"],
    c: 0,
    e: "Follows node links: 0→10, 1→20, 2→30, then cur=-1 stops the loop.",
    de: `This simulates a singly linked list using a dictionary. Each key maps to a (value, next_index) tuple, with -1 as the sentinel. Starting at cur=0: nodes[0]=(10,1) → append 10, cur=1. nodes[1]=(20,2) → append 20, cur=2. nodes[2]=(30,-1) → append 30, cur=-1. The condition cur!=-1 becomes False, ending traversal. This mirrors how linked lists work — each node holds data and a pointer to the next node.

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
  // Q54: Iterator protocol with next() and StopIteration
  (_i: number) => ({
    q: `What is total?\nit = iter([10, 20])\ntotal = 0\nwhile True:\n    try:\n        total += next(it)\n    except StopIteration:\n        break\ntotal`,
    o: ["30", "10", "20", "Error"],
    c: 0,
    e: "next() yields 10 then 20, then StopIteration breaks. 10+20=30.",
    de: `This manually implements Python's iteration protocol. iter() creates an iterator, next() retrieves elements one at a time: first 10 (total=10), then 20 (total=30). The third next() call raises StopIteration because the iterator is exhausted, which the except clause catches to break. This while-True-try-next pattern is exactly what a for loop does internally.

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
  // Q55: Left-to-right expression evaluator
  (_i: number) => ({
    q: `What is result?\ns = "3+4*2"\ni = 0\nresult = int(s[0])\nwhile i + 1 < len(s):\n    op = s[i + 1]\n    val = int(s[i + 2])\n    if op == "+":\n        result += val\n    elif op == "*":\n        result *= val\n    i += 2\nresult`,
    o: ["14", "11", "10", "Error"],
    c: 0,
    e: "Left-to-right: result=3, +4→7, *2→14. No operator precedence.",
    de: `This evaluates a simple expression left-to-right without operator precedence. i=0, result=3. First pass: op='+', val=4, result=3+4=7, i=2. Second pass: op='*', val=2, result=7*2=14, i=4. Now i+1=5 is not <5, loop ends. Note this gives 14, not 11 (which standard math precedence would give as 3+(4*2)). Left-to-right evaluation ignores precedence rules.

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
  // Q56: String reversal with while loop
  (_i: number) => ({
    q: `What is result?\ns = "abcde"\nresult = ""\ni = len(s) - 1\nwhile i >= 0:\n    result += s[i]\n    i -= 1\nresult`,
    o: ['"edcba"', '"abcde"', '"eabcd"', '"dcbae"'],
    c: 0,
    e: "Iterates from index 4 to 0: e, d, c, b, a → \"edcba\".",
    de: `This reverses a string by iterating backwards from the last index. i starts at len(s)-1=4. Each step appends s[i] and decrements i: s[4]='e', s[3]='d', s[2]='c', s[1]='b', s[0]='a'. Result builds as "e"→"ed"→"edc"→"edcb"→"edcba". The Pythonic equivalent is s[::-1], but this while loop version demonstrates the manual reversal algorithm used in many languages.

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
  // Q57: Common prefix between two strings
  (_i: number) => ({
    q: `What is i?\na = "prefix"\nb = "prelude"\ni = 0\nwhile i < len(a) and i < len(b) and a[i] == b[i]:\n    i += 1\ni`,
    o: ["3", "4", "2", "6"],
    c: 0,
    e: "Characters match at indices 0,1,2 ('p','r','e'). At index 3, 'f'≠'l'.",
    de: `This finds the length of the common prefix by advancing while characters match. i=0: 'p'=='p' ✓. i=1: 'r'=='r' ✓. i=2: 'e'=='e' ✓. i=3: 'f'!='l' ✗, loop exits. The common prefix is a[:3]="pre". The three-part condition ensures we don't go past either string's end and stops at the first mismatch. This algorithm is used in autocomplete and trie data structures.

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
  // Q58: Zigzag countdown with alternating steps
  (_i: number) => ({
    q: `What is count?\nn = 10\ncount = 0\nup = True\nwhile n > 0:\n    if up:\n        n -= 3\n    else:\n        n -= 1\n    up = not up\n    count += 1\ncount`,
    o: ["5", "4", "6", "10"],
    c: 0,
    e: "Alternates -3/-1: 10→7→6→3→2→-1. Five steps to reach n≤0.",
    de: `The flag 'up' alternates each iteration, switching between subtracting 3 and 1. Trace: n=10,up=T→n=7,c=1. n=7,up=F→n=6,c=2. n=6,up=T→n=3,c=3. n=3,up=F→n=2,c=4. n=2,up=T→n=-1,c=5. Now n=-1≤0 so the while condition fails. Total count=5. The alternating step sizes create an asymmetric countdown pattern.

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
  // Q59: Early exit with break on condition
  (_i: number) => ({
    q: `What is i?\nnums = [4, 6, 2, 8]\ni = 0\nwhile i < len(nums):\n    if nums[i] < 3:\n        break\n    i += 1\ni`,
    o: ["2", "3", "0", "4"],
    c: 0,
    e: "Scans: 4≥3, 6≥3, 2<3 → break at i=2.",
    de: `This searches for the first element less than 3. i=0: nums[0]=4, 4<3? No, i=1. i=1: nums[1]=6, 6<3? No, i=2. i=2: nums[2]=2, 2<3? Yes → break. The loop exits with i=2, which is the index of the first element satisfying the condition. Note that i is NOT incremented before break, so it points exactly at the found element.

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
  // Q60: Countdown with step size > 1
  (_i: number) => ({
    q: `What is result?\nn = 20\nresult = []\nwhile n > 0:\n    result.append(n)\n    n -= 7\nresult`,
    o: ["[20, 13, 6]", "[20, 13, 6, -1]", "[20, 13]", "[7, 14]"],
    c: 0,
    e: "n=20→append,13→append,6→append,-1→stop. Three values collected.",
    de: `Each iteration appends n then subtracts 7. n=20: append 20, n=13. n=13: append 13, n=6. n=6: append 6, n=-1. n=-1: -1>0 is False, loop stops. The append happens before the subtraction, so 6 is captured even though the next value goes negative. Result has exactly 3 elements: [20, 13, 6]. The step of 7 creates a non-uniform countdown.

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
  // Q61: Dynamic shrinking limit
  (_i: number) => ({
    q: `What is x?\nx = 0\nlimit = 10\nwhile x < limit:\n    x += 3\n    limit -= 1\nx`,
    o: ["9", "12", "10", "6"],
    c: 0,
    e: "Both x and limit change: (0,10)→(3,9)→(6,8)→(9,7). 9<7 is False.",
    de: `Both the variable and the loop bound change each iteration, creating a converging condition. x=0,limit=10: 0<10 → x=3,limit=9. x=3,limit=9: 3<9 → x=6,limit=8. x=6,limit=8: 6<8 → x=9,limit=7. x=9,limit=7: 9<7 is False → stop. x=9. The loop ends sooner than a fixed-limit loop because the boundary shrinks as x grows — they meet in the middle.

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
  // Q62: Round-robin task scheduling
  (_i: number) => ({
    q: `What is result?\ntasks = ["A", "B", "C"]\nresult = ""\ni = 0\ncount = 0\nwhile count < 7:\n    result += tasks[i % len(tasks)]\n    i += 1\n    count += 1\nresult`,
    o: ['"ABCABCA"', '"ABCABCAB"', '"ABCABC"', '"AAAAAAA"'],
    c: 0,
    e: "Cycles through A,B,C using modulo: ABCABCA (7 characters).",
    de: `The modulo operator i%len(tasks) cycles through indices 0,1,2,0,1,2,0 as i increments from 0 to 6. This produces tasks[0]='A', tasks[1]='B', tasks[2]='C', tasks[0]='A', tasks[1]='B', tasks[2]='C', tasks[0]='A'. Result = "ABCABCA". This round-robin pattern is fundamental in OS scheduling, load balancing, and circular buffers.

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
  // Q63: Maximum parenthesis nesting depth
  (_i: number) => ({
    q: `What is max_d?\ns = "((())())"\ndepth = 0\nmax_d = 0\ni = 0\nwhile i < len(s):\n    if s[i] == "(":\n        depth += 1\n        if depth > max_d:\n            max_d = depth\n    else:\n        depth -= 1\n    i += 1\nmax_d`,
    o: ["3", "4", "2", "1"],
    c: 0,
    e: "Depth sequence: 1,2,3,2,1,2,1,0. Maximum reached is 3.",
    de: `This tracks parenthesis nesting depth. '(' increments depth and updates max_d if deeper. ')' decrements depth. Walking through "((())())": depths are 1,2,3,2,1,2,1,0. The deepest nesting occurs at the third '(' where depth=3. max_d captures this peak. This algorithm is used in expression parsers and syntax validators to detect nesting levels.

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
  // Q64: Look-and-say sequence step
  (_i: number) => ({
    q: `What is result?\ns = "1211"\nresult = ""\ni = 0\nwhile i < len(s):\n    ch = s[i]\n    count = 1\n    while i + count < len(s) and s[i + count] == ch:\n        count += 1\n    result += str(count) + ch\n    i += count\nresult`,
    o: ['"111221"', '"1211"', '"12211"', '"2112"'],
    c: 0,
    e: 'Groups: "1"→11, "2"→12, "11"→21. Result = "111221".',
    de: `The look-and-say sequence describes each run of identical digits. For "1211": i=0, ch='1', count=1 (next char '2'≠'1') → "11", i=1. i=1, ch='2', count=1 (next '1'≠'2') → "1112", i=2. i=2, ch='1', count=2 (s[3]='1'=='1', s[4] out of bounds) → "111221", i=4. Loop ends. "111221" means "one 1, one 2, two 1s". This is Conway's famous sequence.

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
  // Q65: Complex boolean condition with halving
  (_i: number) => ({
    q: `What is (x, y)?\nx, y = 100, 0\nwhile not (x <= y or x < 10):\n    x //= 2\n    y += 5\n(x, y)`,
    o: ["(12, 15)", "(25, 10)", "(6, 20)", "(50, 5)"],
    c: 0,
    e: "100,0→50,5→25,10→12,15. At (12,15): 12≤15 is True, so not(True)=False.",
    de: `The condition not(x<=y or x<10) continues while NEITHER x<=y NOR x<10. x=100,y=0: 100<=0? F, 100<10? F, not(F or F)=T → x=50,y=5. 50<=5? F, 50<10? F → T → x=25,y=10. 25<=10? F, 25<10? F → T → x=12,y=15. 12<=15? T → not(T)=F → stop. De Morgan's law: the loop runs while x>y AND x>=10. Once x drops to 12 and y rises to 15, x<=y triggers the exit.

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
  // Q66: Power of 2 check via repeated halving
  (_i: number) => ({
    q: `What is n == 1?\nn = 64\nwhile n > 1 and n % 2 == 0:\n    n //= 2\nn == 1`,
    o: ["True", "False", "64", "Error"],
    c: 0,
    e: "64→32→16→8→4→2→1. After 6 halvings n=1, so n==1 is True.",
    de: `This checks if a number is a power of 2 by repeatedly dividing by 2. If n reaches exactly 1, it was a power of 2. 64=2^6, so: 64→32→16→8→4→2→1. At n=1, the condition n>1 is False, loop exits. n==1 evaluates to True. For non-powers like 12: 12→6→3, then 3%2≠0 exits early with n=3, so n==1 would be False. The bitwise alternative is n & (n-1) == 0.

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
  // Q67: Counting set bits (popcount)
  (_i: number) => ({
    q: `What is count?\nn = 13\ncount = 0\nwhile n:\n    count += n & 1\n    n >>= 1\ncount`,
    o: ["3", "4", "2", "13"],
    c: 0,
    e: "13 = 1101 in binary. Three 1-bits: positions 0, 2, and 3.",
    de: `This counts set bits by examining the least significant bit and right-shifting. n=13 (binary 1101): n&1=1, count=1, n=6 (110). n&1=0, count=1, n=3 (11). n&1=1, count=2, n=1 (1). n&1=1, count=3, n=0. Loop exits when n=0 (falsy). The 3 set bits correspond to 13=8+4+1. This is the Brian Kernighan popcount algorithm's simpler variant; Python's bin(13).count('1') does the same.

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
  // Q68: Manual whitespace stripping
  (_i: number) => ({
    q: `What is result?\ns = "  hello  "\nlo = 0\nwhile lo < len(s) and s[lo] == " ":\n    lo += 1\nhi = len(s) - 1\nwhile hi >= lo and s[hi] == " ":\n    hi -= 1\nresult = s[lo:hi + 1]\nresult`,
    o: ['"hello"', '"  hello"', '"hello  "', '"  hello  "'],
    c: 0,
    e: "lo advances past 2 leading spaces to index 2. hi retreats past 2 trailing spaces to index 6.",
    de: `This implements str.strip() manually with two while loops. The first loop advances lo past leading spaces: s[0]=' ', s[1]=' ', s[2]='h' → lo=2. The second loop retreats hi from trailing spaces: s[8]=' ', s[7]=' ', s[6]='o' → hi=6. The slice s[2:7] extracts "hello". This two-pointer approach runs in O(n) and handles strings with only spaces (lo would exceed hi, yielding an empty slice).

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
  // Q69: Word wrap algorithm
  (_i: number) => ({
    q: `What is lines?\nwords = ["Hi", "there", "world"]\nwidth = 10\nlines = []\nline = ""\ni = 0\nwhile i < len(words):\n    if line and len(line) + 1 + len(words[i]) > width:\n        lines.append(line)\n        line = words[i]\n    elif line:\n        line += " " + words[i]\n    else:\n        line = words[i]\n    i += 1\nif line:\n    lines.append(line)\nlines`,
    o: ['["Hi there", "world"]', '["Hi", "there", "world"]', '["Hi there world"]', '["Hi there w", "orld"]'],
    c: 0,
    e: '"Hi"+"there"=8≤10 fits. Adding "world" would be 14>10, so new line.',
    de: `This word-wrap greedily fits words onto lines up to a width limit. i=0: line="" → else: line="Hi". i=1: len("Hi")+1+5=8 ≤ 10 → elif: line="Hi there". i=2: len("Hi there")+1+5=14 > 10 → append "Hi there", line="world". After loop: line="world" → append. Result: ["Hi there", "world"]. The +1 accounts for the space between words. This greedy algorithm is simpler than Knuth's optimal line-breaking.

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
  // Q70: XOR encryption of byte values
  (_i: number) => ({
    q: `What is enc?\nmsg = [72, 101]\nkey = 42\nenc = []\ni = 0\nwhile i < len(msg):\n    enc.append(msg[i] ^ key)\n    i += 1\nenc`,
    o: ["[98, 79]", "[72, 101]", "[114, 63]", "[30, 59]"],
    c: 0,
    e: "72 XOR 42 = 98. 101 XOR 42 = 79. XOR flips specific bits.",
    de: `XOR encryption flips bits where the key has 1s. 72 (01001000) ^ 42 (00101010) = 01100010 = 98. 101 (01100101) ^ 42 (00101010) = 01001111 = 79. XOR is its own inverse: 98^42=72 and 79^42=101, recovering the original message. This symmetric property makes XOR the basis of stream ciphers and one-time pads. The while loop applies the same key to each byte.

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
  // Q71: Pop from list end while condition holds
  (_i: number) => ({
    q: `What is lst?\nlst = [1, 2, 3, 4, 5]\nwhile lst and lst[-1] > 2:\n    lst.pop()\nlst`,
    o: ["[1, 2]", "[1, 2, 3]", "[]", "[1]"],
    c: 0,
    e: "Pops while last element > 2: removes 5, 4, 3. Stops at 2.",
    de: `The while condition checks two things: lst is non-empty (truthy) AND the last element exceeds 2. lst[-1]=5>2 → pop → [1,2,3,4]. lst[-1]=4>2 → pop → [1,2,3]. lst[-1]=3>2 → pop → [1,2]. lst[-1]=2, 2>2 is False → stop. The 'lst and' guard prevents IndexError on an empty list. This pattern trims elements from the end based on a condition — useful for removing trailing values.

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
  // Q72: Drain a dict with popitem
  (_i: number) => ({
    q: `What is total?\nd = {"a": 1, "b": 2, "c": 3}\ntotal = 0\nwhile d:\n    k, v = d.popitem()\n    total += v\ntotal`,
    o: ["6", "3", "5", "Error"],
    c: 0,
    e: "popitem() removes all entries: values 1+2+3=6 regardless of order.",
    de: `popitem() removes and returns an arbitrary (LIFO in Python 3.7+) key-value pair. The while loop continues as long as d is truthy (non-empty). All three values are summed: 1+2+3=6. The order of removal doesn't affect the total since addition is commutative. After the loop, d is empty {}. This drain pattern is useful when processing and consuming dictionary entries one at a time.

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
  // Q73: Extract multi-digit numbers from string
  (_i: number) => ({
    q: `What is nums?\ns = "a2b34c"\nnums = []\ni = 0\nwhile i < len(s):\n    if s[i].isdigit():\n        n = ""\n        while i < len(s) and s[i].isdigit():\n            n += s[i]\n            i += 1\n        nums.append(int(n))\n    else:\n        i += 1\nnums`,
    o: ["[2, 34]", "[2, 3, 4]", "[234]", "[2, 34, 0]"],
    c: 0,
    e: "Inner loop groups consecutive digits: '2'→2, '34'→34.",
    de: `The outer loop scans characters. When a digit is found, the inner while loop accumulates consecutive digits into a string, then converts to int. At i=1: '2' is a digit, inner loop gets "2", i=2. Append 2. At i=3: '3' is a digit, inner loop gets "3" then "34" (s[4]='4'), i=5. Append 34. Non-digits just increment i. This two-loop pattern is a basic tokenizer that handles multi-digit numbers correctly.

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
  // Q74: Triangle number sequence
  (_i: number) => ({
    q: `What is result?\nresult = []\nn = 1\ntotal = 0\nwhile n <= 5:\n    total += n\n    result.append(total)\n    n += 1\nresult`,
    o: ["[1, 3, 6, 10, 15]", "[1, 2, 3, 4, 5]", "[5, 10, 15, 20, 25]", "[1, 4, 9, 16, 25]"],
    c: 0,
    e: "Running sum: 1, 1+2=3, 3+3=6, 6+4=10, 10+5=15.",
    de: `Triangle numbers are cumulative sums of 1+2+...+n. Each iteration adds n to a running total. n=1: total=1. n=2: total=3. n=3: total=6. n=4: total=10. n=5: total=15. The nth triangle number equals n*(n+1)/2, so T(5)=15. These numbers count objects in equilateral triangles: 1 dot, 3 dots, 6 dots, etc. The sequence appears throughout combinatorics and Pascal's triangle.

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
  // Q75: Convergence by incrementing and decrementing
  (_i: number) => ({
    q: `What is (a, b)?\na, b = 1, 10\nwhile a < b:\n    a += 1\n    b -= 1\n(a, b)`,
    o: ["(6, 5)", "(5, 6)", "(5, 5)", "(10, 1)"],
    c: 0,
    e: "(1,10)→(2,9)→(3,8)→(4,7)→(5,6)→(6,5). 6<5 is False.",
    de: `Both variables converge toward the midpoint: a increases while b decreases. Trace: (1,10)→(2,9)→(3,8)→(4,7)→(5,6)→(6,5). At (6,5), a<b is 6<5=False, so the loop exits. They cross over because the sum a+b=11 is odd — they can never both equal 5.5. With an even sum like (1,9), they'd meet at (5,5). This pattern finds the midpoint of a range.

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
  // Q76: Sliding window moving average
  (_i: number) => ({
    q: `What is avgs?\ndata = [10, 20, 30, 40, 50]\nwindow = 3\navgs = []\ni = 0\nwhile i <= len(data) - window:\n    avg = sum(data[i:i + window]) / window\n    avgs.append(avg)\n    i += 1\navgs`,
    o: ["[20.0, 30.0, 40.0]", "[10.0, 20.0, 30.0]", "[30.0]", "[20.0, 30.0, 40.0, 50.0]"],
    c: 0,
    e: "Windows: [10,20,30]→20, [20,30,40]→30, [30,40,50]→40.",
    de: `A sliding window of size 3 computes the average at each valid position. i=0: sum([10,20,30])/3=20.0. i=1: sum([20,30,40])/3=30.0. i=2: sum([30,40,50])/3=40.0. i=3: 3<=5-3=2 is False, stop. Three windows fit in a 5-element list. Moving averages smooth out fluctuations and are widely used in time series analysis, stock charts, and signal processing.

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
  // Q77: Wrap-around indexing with modulo
  (_i: number) => ({
    q: `What is result?\nlst = [10, 20, 30]\ni = 0\nresult = []\nwhile i < 5:\n    result.append(lst[i % len(lst)])\n    i += 1\nresult`,
    o: ["[10, 20, 30, 10, 20]", "[10, 20, 30]", "[10, 20, 30, 10, 20, 30]", "Error"],
    c: 0,
    e: "i%3 cycles indices 0,1,2,0,1 → values 10,20,30,10,20.",
    de: `The modulo operator i%len(lst) wraps indices around when they exceed the list length. i=0: 0%3=0→10. i=1: 1%3=1→20. i=2: 2%3=2→30. i=3: 3%3=0→10. i=4: 4%3=1→20. This creates a circular buffer effect where the list repeats. Wrap-around indexing is used in ring buffers, circular queues, and round-robin scheduling without needing to check bounds explicitly.

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
  // Q78: Game loop with HP depletion
  (_i: number) => ({
    q: `What is (hp, turns)?\nhp = 50\nturns = 0\nwhile hp > 0:\n    hp -= 20\n    turns += 1\n(hp, turns)`,
    o: ["(-10, 3)", "(0, 3)", "(10, 2)", "(-10, 2)"],
    c: 0,
    e: "50→30(t=1)→10(t=2)→-10(t=3). HP goes below 0 before the check.",
    de: `The loop subtracts 20 HP each turn and checks the condition only at the top of the loop. hp=50: subtract 20→hp=30, turns=1. hp=30→10, turns=2. hp=10→-10, turns=3. Now hp=-10, which is not >0, so the loop exits. HP goes negative because the damage is applied before the next condition check — the character "dies" mid-turn. This is why games often clamp HP to max(0, hp-damage).

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
