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
• This mirrors how linked lists work — each node holds data and a pointer to the next node.

Key Distinctions:
• This question’s focus is best captured by: This simulates a singly linked list using a dictionary.
• The contrast that matters for correctness is summarized by: Each key maps to a (value, next_index) tuple, with -1 as the sentinel.

How It Works:
• Python follows the rule implied by: This simulates a singly linked list using a dictionary.
• The outcome you observe follows from: This mirrors how linked lists work — each node holds data and a pointer to the next node.

Step-by-Step Execution:
1. Start from the construct described in: This simulates a singly linked list using a dictionary.
2. Resolve the subparts implied by: Each key maps to a (value, next_index) tuple, with -1 as the sentinel.
3. Apply the core semantics highlighted in: Starting at cur=0: nodes[0]=(10,1) → append 10, cur=1.
4. Confirm the final result aligns with: This mirrors how linked lists work — each node holds data and a pointer to the next node.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Each key maps to a (value, next_index) tuple, with -1 as the sentinel.
2. Apply the construct’s main rule next, matching: This simulates a singly linked list using a dictionary.
3. Produce any intermediate values that This mirrors how linked lists work — each node holds data and a pointer to the next node. relies on
4. Finish by returning/assembling the final output named by: This mirrors how linked lists work — each node holds data and a pointer to the next node.
5. Use the result only after the full construct has completed, per: This simulates a singly linked list using a dictionary.

Common Use Cases:
• Teaching this behavior using the mental model: This simulates a singly linked list using a dictionary.
• Debugging when the observed value should match the expectation in: This mirrors how linked lists work — each node holds data and a pointer to the next node.

Edge Cases:
• If inputs vary from the situation described in: Each key maps to a (value, next_index) tuple, with -1 as the sentinel., the behavior can change.
• When the construct’s assumptions differ, the rule in: Starting at cur=0: nodes[0]=(10,1) → append 10, cur=1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This mirrors how linked lists work — each node holds data and a pointer to the next node..
• When performance matters, prefer the simplest pattern that still implements: This simulates a singly linked list using a dictionary..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This simulates a singly linked list using a dictionary..

Notes:
• For maintainable code, make the intent behind: Each key maps to a (value, next_index) tuple, with -1 as the sentinel. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q54: Iterator protocol with next() and StopIteration
  (_i: number) => ({
    q: `What is total?\nit = iter([10, 20])\ntotal = 0\nwhile True:\n    try:\n        total += next(it)\n    except StopIteration:\n        break\ntotal`,
    o: ["30", "10", "20", "Error"],
    c: 0,
    e: "next() yields 10 then 20, then StopIteration breaks. 10+20=30.",
    de: `This manually implements Python's iteration protocol. iter() creates an iterator, next() retrieves elements one at a time: first 10 (total=10), then 20 (total=30). The third next() call raises StopIteration because the iterator is exhausted, which the except clause catches to break. This while-True-try-next pattern is exactly what a for loop does internally.

Key Concepts:
• This while-True-try-next pattern is exactly what a for loop does internally.

Key Distinctions:
• This question’s focus is best captured by: This manually implements Python's iteration protocol.
• The contrast that matters for correctness is summarized by: iter() creates an iterator, next() retrieves elements one at a time: first 10 (total=10), then 20 (total=30).

How It Works:
• Python follows the rule implied by: This manually implements Python's iteration protocol.
• The outcome you observe follows from: This while-True-try-next pattern is exactly what a for loop does internally.

Step-by-Step Execution:
1. Start from the construct described in: This manually implements Python's iteration protocol.
2. Resolve the subparts implied by: iter() creates an iterator, next() retrieves elements one at a time: first 10 (total=10), then 20 (total=30).
3. Apply the core semantics highlighted in: The third next() call raises StopIteration because the iterator is exhausted, which the except clause catches to break.
4. Confirm the final result aligns with: This while-True-try-next pattern is exactly what a for loop does internally.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: iter() creates an iterator, next() retrieves elements one at a time: first 10 (total=10), then 20 (total=30).
2. Apply the construct’s main rule next, matching: This manually implements Python's iteration protocol.
3. Produce any intermediate values that This while-True-try-next pattern is exactly what a for loop does internally. relies on
4. Finish by returning/assembling the final output named by: This while-True-try-next pattern is exactly what a for loop does internally.
5. Use the result only after the full construct has completed, per: This manually implements Python's iteration protocol.

Common Use Cases:
• Teaching this behavior using the mental model: This manually implements Python's iteration protocol.
• Debugging when the observed value should match the expectation in: This while-True-try-next pattern is exactly what a for loop does internally.

Edge Cases:
• If inputs vary from the situation described in: iter() creates an iterator, next() retrieves elements one at a time: first 10 (total=10), then 20 (total=30)., the behavior can change.
• When the construct’s assumptions differ, the rule in: The third next() call raises StopIteration because the iterator is exhausted, which the except clause catches to break. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This while-True-try-next pattern is exactly what a for loop does internally..
• When performance matters, prefer the simplest pattern that still implements: This manually implements Python's iteration protocol..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This manually implements Python's iteration protocol..

Notes:
• For maintainable code, make the intent behind: iter() creates an iterator, next() retrieves elements one at a time: first 10 (total=10), then 20 (total=30). explicit (and test it with inputs like those in this prompt).`
  }),
  // Q55: Left-to-right expression evaluator
  (_i: number) => ({
    q: `What is result?\ns = "3+4*2"\ni = 0\nresult = int(s[0])\nwhile i + 1 < len(s):\n    op = s[i + 1]\n    val = int(s[i + 2])\n    if op == "+":\n        result += val\n    elif op == "*":\n        result *= val\n    i += 2\nresult`,
    o: ["14", "11", "10", "Error"],
    c: 0,
    e: "Left-to-right: result=3, +4→7, *2→14. No operator precedence.",
    de: `This evaluates a simple expression left-to-right without operator precedence. i=0, result=3. First pass: op='+', val=4, result=3+4=7, i=2. Second pass: op='*', val=2, result=7*2=14, i=4. Now i+1=5 is not <5, loop ends. Note this gives 14, not 11 (which standard math precedence would give as 3+(4*2)). Left-to-right evaluation ignores precedence rules.

Key Concepts:
• Left-to-right evaluation ignores precedence rules.

Key Distinctions:
• This question’s focus is best captured by: This evaluates a simple expression left-to-right without operator precedence.
• The contrast that matters for correctness is summarized by: i=0, result=3.

How It Works:
• Python follows the rule implied by: This evaluates a simple expression left-to-right without operator precedence.
• The outcome you observe follows from: Left-to-right evaluation ignores precedence rules.

Step-by-Step Execution:
1. Start from the construct described in: This evaluates a simple expression left-to-right without operator precedence.
2. Resolve the subparts implied by: i=0, result=3.
3. Apply the core semantics highlighted in: First pass: op='+', val=4, result=3+4=7, i=2.
4. Confirm the final result aligns with: Left-to-right evaluation ignores precedence rules.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: i=0, result=3.
2. Apply the construct’s main rule next, matching: This evaluates a simple expression left-to-right without operator precedence.
3. Produce any intermediate values that Left-to-right evaluation ignores precedence rules. relies on
4. Finish by returning/assembling the final output named by: Left-to-right evaluation ignores precedence rules.
5. Use the result only after the full construct has completed, per: This evaluates a simple expression left-to-right without operator precedence.

Common Use Cases:
• Teaching this behavior using the mental model: This evaluates a simple expression left-to-right without operator precedence.
• Debugging when the observed value should match the expectation in: Left-to-right evaluation ignores precedence rules.

Edge Cases:
• If inputs vary from the situation described in: i=0, result=3., the behavior can change.
• When the construct’s assumptions differ, the rule in: First pass: op='+', val=4, result=3+4=7, i=2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Left-to-right evaluation ignores precedence rules..
• When performance matters, prefer the simplest pattern that still implements: This evaluates a simple expression left-to-right without operator precedence..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This evaluates a simple expression left-to-right without operator precedence..

Notes:
• For maintainable code, make the intent behind: i=0, result=3. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q56: String reversal with while loop
  (_i: number) => ({
    q: `What is result?\ns = "abcde"\nresult = ""\ni = len(s) - 1\nwhile i >= 0:\n    result += s[i]\n    i -= 1\nresult`,
    o: ['"edcba"', '"abcde"', '"eabcd"', '"dcbae"'],
    c: 0,
    e: "Iterates from index 4 to 0: e, d, c, b, a → \"edcba\".",
    de: `This reverses a string by iterating backwards from the last index. i starts at len(s)-1=4. Each step appends s[i] and decrements i: s[4]='e', s[3]='d', s[2]='c', s[1]='b', s[0]='a'. Result builds as "e"→"ed"→"edc"→"edcb"→"edcba". The Pythonic equivalent is s[::-1], but this while loop version demonstrates the manual reversal algorithm used in many languages.

Key Concepts:
• The Pythonic equivalent is s[::-1], but this while loop version demonstrates the manual reversal algorithm used in many languages.

Key Distinctions:
• This question’s focus is best captured by: This reverses a string by iterating backwards from the last index.
• The contrast that matters for correctness is summarized by: i starts at len(s)-1=4.

How It Works:
• Python follows the rule implied by: This reverses a string by iterating backwards from the last index.
• The outcome you observe follows from: The Pythonic equivalent is s[::-1], but this while loop version demonstrates the manual reversal algorithm used in many languages.

Step-by-Step Execution:
1. Start from the construct described in: This reverses a string by iterating backwards from the last index.
2. Resolve the subparts implied by: i starts at len(s)-1=4.
3. Apply the core semantics highlighted in: Each step appends s[i] and decrements i: s[4]='e', s[3]='d', s[2]='c', s[1]='b', s[0]='a'.
4. Confirm the final result aligns with: The Pythonic equivalent is s[::-1], but this while loop version demonstrates the manual reversal algorithm used in many languages.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: i starts at len(s)-1=4.
2. Apply the construct’s main rule next, matching: This reverses a string by iterating backwards from the last index.
3. Produce any intermediate values that The Pythonic equivalent is s[::-1], but this while loop version demonstrates the manual reversal algorithm used in many languages. relies on
4. Finish by returning/assembling the final output named by: The Pythonic equivalent is s[::-1], but this while loop version demonstrates the manual reversal algorithm used in many languages.
5. Use the result only after the full construct has completed, per: This reverses a string by iterating backwards from the last index.

Common Use Cases:
• Teaching this behavior using the mental model: This reverses a string by iterating backwards from the last index.
• Debugging when the observed value should match the expectation in: The Pythonic equivalent is s[::-1], but this while loop version demonstrates the manual reversal algorithm used in many languages.

Edge Cases:
• If inputs vary from the situation described in: i starts at len(s)-1=4., the behavior can change.
• When the construct’s assumptions differ, the rule in: Each step appends s[i] and decrements i: s[4]='e', s[3]='d', s[2]='c', s[1]='b', s[0]='a'. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: The Pythonic equivalent is s[::-1], but this while loop version demonstrates the manual reversal algorithm used in many languages..
• When performance matters, prefer the simplest pattern that still implements: This reverses a string by iterating backwards from the last index..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This reverses a string by iterating backwards from the last index..

Notes:
• For maintainable code, make the intent behind: i starts at len(s)-1=4. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q57: Common prefix between two strings
  (_i: number) => ({
    q: `What is i?\na = "prefix"\nb = "prelude"\ni = 0\nwhile i < len(a) and i < len(b) and a[i] == b[i]:\n    i += 1\ni`,
    o: ["3", "4", "2", "6"],
    c: 0,
    e: "Characters match at indices 0,1,2 ('p','r','e'). At index 3, 'f'≠'l'.",
    de: `This finds the length of the common prefix by advancing while characters match. i=0: 'p'=='p' ✓. i=1: 'r'=='r' ✓. i=2: 'e'=='e' ✓. i=3: 'f'!='l' ✗, loop exits. The common prefix is a[:3]="pre". The three-part condition ensures we don't go past either string's end and stops at the first mismatch. This algorithm is used in autocomplete and trie data structures.

Key Concepts:
• This algorithm is used in autocomplete and trie data structures.

Key Distinctions:
• This question’s focus is best captured by: This finds the length of the common prefix by advancing while characters match.
• The contrast that matters for correctness is summarized by: i=0: 'p'=='p' ✓.

How It Works:
• Python follows the rule implied by: This finds the length of the common prefix by advancing while characters match.
• The outcome you observe follows from: This algorithm is used in autocomplete and trie data structures.

Step-by-Step Execution:
1. Start from the construct described in: This finds the length of the common prefix by advancing while characters match.
2. Resolve the subparts implied by: i=0: 'p'=='p' ✓.
3. Apply the core semantics highlighted in: i=1: 'r'=='r' ✓.
4. Confirm the final result aligns with: This algorithm is used in autocomplete and trie data structures.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: i=0: 'p'=='p' ✓.
2. Apply the construct’s main rule next, matching: This finds the length of the common prefix by advancing while characters match.
3. Produce any intermediate values that This algorithm is used in autocomplete and trie data structures. relies on
4. Finish by returning/assembling the final output named by: This algorithm is used in autocomplete and trie data structures.
5. Use the result only after the full construct has completed, per: This finds the length of the common prefix by advancing while characters match.

Common Use Cases:
• Teaching this behavior using the mental model: This finds the length of the common prefix by advancing while characters match.
• Debugging when the observed value should match the expectation in: This algorithm is used in autocomplete and trie data structures.

Edge Cases:
• If inputs vary from the situation described in: i=0: 'p'=='p' ✓., the behavior can change.
• When the construct’s assumptions differ, the rule in: i=1: 'r'=='r' ✓. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This algorithm is used in autocomplete and trie data structures..
• When performance matters, prefer the simplest pattern that still implements: This finds the length of the common prefix by advancing while characters match..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This finds the length of the common prefix by advancing while characters match..

Notes:
• For maintainable code, make the intent behind: i=0: 'p'=='p' ✓. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q58: Zigzag countdown with alternating steps
  (_i: number) => ({
    q: `What is count?\nn = 10\ncount = 0\nup = True\nwhile n > 0:\n    if up:\n        n -= 3\n    else:\n        n -= 1\n    up = not up\n    count += 1\ncount`,
    o: ["5", "4", "6", "10"],
    c: 0,
    e: "Alternates -3/-1: 10→7→6→3→2→-1. Five steps to reach n≤0.",
    de: `The flag 'up' alternates each iteration, switching between subtracting 3 and 1. Trace: n=10,up=T→n=7,c=1. n=7,up=F→n=6,c=2. n=6,up=T→n=3,c=3. n=3,up=F→n=2,c=4. n=2,up=T→n=-1,c=5. Now n=-1≤0 so the while condition fails. Total count=5. The alternating step sizes create an asymmetric countdown pattern.

Key Concepts:
• The alternating step sizes create an asymmetric countdown pattern.

Key Distinctions:
• This question’s focus is best captured by: The flag 'up' alternates each iteration, switching between subtracting 3 and 1.
• The contrast that matters for correctness is summarized by: Trace: n=10,up=T→n=7,c=1.

How It Works:
• Python follows the rule implied by: The flag 'up' alternates each iteration, switching between subtracting 3 and 1.
• The outcome you observe follows from: The alternating step sizes create an asymmetric countdown pattern.

Step-by-Step Execution:
1. Start from the construct described in: The flag 'up' alternates each iteration, switching between subtracting 3 and 1.
2. Resolve the subparts implied by: Trace: n=10,up=T→n=7,c=1.
3. Apply the core semantics highlighted in: n=7,up=F→n=6,c=2.
4. Confirm the final result aligns with: The alternating step sizes create an asymmetric countdown pattern.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Trace: n=10,up=T→n=7,c=1.
2. Apply the construct’s main rule next, matching: The flag 'up' alternates each iteration, switching between subtracting 3 and 1.
3. Produce any intermediate values that The alternating step sizes create an asymmetric countdown pattern. relies on
4. Finish by returning/assembling the final output named by: The alternating step sizes create an asymmetric countdown pattern.
5. Use the result only after the full construct has completed, per: The flag 'up' alternates each iteration, switching between subtracting 3 and 1.

Common Use Cases:
• Teaching this behavior using the mental model: The flag 'up' alternates each iteration, switching between subtracting 3 and 1.
• Debugging when the observed value should match the expectation in: The alternating step sizes create an asymmetric countdown pattern.

Edge Cases:
• If inputs vary from the situation described in: Trace: n=10,up=T→n=7,c=1., the behavior can change.
• When the construct’s assumptions differ, the rule in: n=7,up=F→n=6,c=2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: The alternating step sizes create an asymmetric countdown pattern..
• When performance matters, prefer the simplest pattern that still implements: The flag 'up' alternates each iteration, switching between subtracting 3 and 1..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The flag 'up' alternates each iteration, switching between subtracting 3 and 1..

Notes:
• For maintainable code, make the intent behind: Trace: n=10,up=T→n=7,c=1. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q59: Early exit with break on condition
  (_i: number) => ({
    q: `What is i?\nnums = [4, 6, 2, 8]\ni = 0\nwhile i < len(nums):\n    if nums[i] < 3:\n        break\n    i += 1\ni`,
    o: ["2", "3", "0", "4"],
    c: 0,
    e: "Scans: 4≥3, 6≥3, 2<3 → break at i=2.",
    de: `This searches for the first element less than 3. i=0: nums[0]=4, 4<3? No, i=1. i=1: nums[1]=6, 6<3? No, i=2. i=2: nums[2]=2, 2<3? Yes → break. The loop exits with i=2, which is the index of the first element satisfying the condition. Note that i is NOT incremented before break, so it points exactly at the found element.

Key Concepts:
• Note that i is NOT incremented before break, so it points exactly at the found element.

Key Distinctions:
• This question’s focus is best captured by: This searches for the first element less than 3.
• The contrast that matters for correctness is summarized by: i=0: nums[0]=4, 4<3?

How It Works:
• Python follows the rule implied by: This searches for the first element less than 3.
• The outcome you observe follows from: Note that i is NOT incremented before break, so it points exactly at the found element.

Step-by-Step Execution:
1. Start from the construct described in: This searches for the first element less than 3.
2. Resolve the subparts implied by: i=0: nums[0]=4, 4<3?
3. Apply the core semantics highlighted in: No, i=1.
4. Confirm the final result aligns with: Note that i is NOT incremented before break, so it points exactly at the found element.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: i=0: nums[0]=4, 4<3?
2. Apply the construct’s main rule next, matching: This searches for the first element less than 3.
3. Produce any intermediate values that Note that i is NOT incremented before break, so it points exactly at the found element. relies on
4. Finish by returning/assembling the final output named by: Note that i is NOT incremented before break, so it points exactly at the found element.
5. Use the result only after the full construct has completed, per: This searches for the first element less than 3.

Common Use Cases:
• Teaching this behavior using the mental model: This searches for the first element less than 3.
• Debugging when the observed value should match the expectation in: Note that i is NOT incremented before break, so it points exactly at the found element.

Edge Cases:
• If inputs vary from the situation described in: i=0: nums[0]=4, 4<3?, the behavior can change.
• When the construct’s assumptions differ, the rule in: No, i=1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Note that i is NOT incremented before break, so it points exactly at the found element..
• When performance matters, prefer the simplest pattern that still implements: This searches for the first element less than 3..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This searches for the first element less than 3..

Notes:
• For maintainable code, make the intent behind: i=0: nums[0]=4, 4<3? explicit (and test it with inputs like those in this prompt).`
  }),
  // Q60: Countdown with step size > 1
  (_i: number) => ({
    q: `What is result?\nn = 20\nresult = []\nwhile n > 0:\n    result.append(n)\n    n -= 7\nresult`,
    o: ["[20, 13, 6]", "[20, 13, 6, -1]", "[20, 13]", "[7, 14]"],
    c: 0,
    e: "n=20→append,13→append,6→append,-1→stop. Three values collected.",
    de: `Each iteration appends n then subtracts 7. n=20: append 20, n=13. n=13: append 13, n=6. n=6: append 6, n=-1. n=-1: -1>0 is False, loop stops. The append happens before the subtraction, so 6 is captured even though the next value goes negative. Result has exactly 3 elements: [20, 13, 6]. The step of 7 creates a non-uniform countdown.

Key Concepts:
• The step of 7 creates a non-uniform countdown.

Key Distinctions:
• This question’s focus is best captured by: Each iteration appends n then subtracts 7.
• The contrast that matters for correctness is summarized by: n=20: append 20, n=13.

How It Works:
• Python follows the rule implied by: Each iteration appends n then subtracts 7.
• The outcome you observe follows from: The step of 7 creates a non-uniform countdown.

Step-by-Step Execution:
1. Start from the construct described in: Each iteration appends n then subtracts 7.
2. Resolve the subparts implied by: n=20: append 20, n=13.
3. Apply the core semantics highlighted in: n=13: append 13, n=6.
4. Confirm the final result aligns with: The step of 7 creates a non-uniform countdown.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: n=20: append 20, n=13.
2. Apply the construct’s main rule next, matching: Each iteration appends n then subtracts 7.
3. Produce any intermediate values that The step of 7 creates a non-uniform countdown. relies on
4. Finish by returning/assembling the final output named by: The step of 7 creates a non-uniform countdown.
5. Use the result only after the full construct has completed, per: Each iteration appends n then subtracts 7.

Common Use Cases:
• Teaching this behavior using the mental model: Each iteration appends n then subtracts 7.
• Debugging when the observed value should match the expectation in: The step of 7 creates a non-uniform countdown.

Edge Cases:
• If inputs vary from the situation described in: n=20: append 20, n=13., the behavior can change.
• When the construct’s assumptions differ, the rule in: n=13: append 13, n=6. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: The step of 7 creates a non-uniform countdown..
• When performance matters, prefer the simplest pattern that still implements: Each iteration appends n then subtracts 7..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Each iteration appends n then subtracts 7..

Notes:
• For maintainable code, make the intent behind: n=20: append 20, n=13. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q61: Dynamic shrinking limit
  (_i: number) => ({
    q: `What is x?\nx = 0\nlimit = 10\nwhile x < limit:\n    x += 3\n    limit -= 1\nx`,
    o: ["9", "12", "10", "6"],
    c: 0,
    e: "Both x and limit change: (0,10)→(3,9)→(6,8)→(9,7). 9<7 is False.",
    de: `Both the variable and the loop bound change each iteration, creating a converging condition. x=0,limit=10: 0<10 → x=3,limit=9. x=3,limit=9: 3<9 → x=6,limit=8. x=6,limit=8: 6<8 → x=9,limit=7. x=9,limit=7: 9<7 is False → stop. x=9. The loop ends sooner than a fixed-limit loop because the boundary shrinks as x grows — they meet in the middle.

Key Concepts:
• The loop ends sooner than a fixed-limit loop because the boundary shrinks as x grows — they meet in the middle.

Key Distinctions:
• This question’s focus is best captured by: Both the variable and the loop bound change each iteration, creating a converging condition.
• The contrast that matters for correctness is summarized by: x=0,limit=10: 0<10 → x=3,limit=9.

How It Works:
• Python follows the rule implied by: Both the variable and the loop bound change each iteration, creating a converging condition.
• The outcome you observe follows from: The loop ends sooner than a fixed-limit loop because the boundary shrinks as x grows — they meet in the middle.

Step-by-Step Execution:
1. Start from the construct described in: Both the variable and the loop bound change each iteration, creating a converging condition.
2. Resolve the subparts implied by: x=0,limit=10: 0<10 → x=3,limit=9.
3. Apply the core semantics highlighted in: x=3,limit=9: 3<9 → x=6,limit=8.
4. Confirm the final result aligns with: The loop ends sooner than a fixed-limit loop because the boundary shrinks as x grows — they meet in the middle.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: x=0,limit=10: 0<10 → x=3,limit=9.
2. Apply the construct’s main rule next, matching: Both the variable and the loop bound change each iteration, creating a converging condition.
3. Produce any intermediate values that The loop ends sooner than a fixed-limit loop because the boundary shrinks as x grows — they meet in the middle. relies on
4. Finish by returning/assembling the final output named by: The loop ends sooner than a fixed-limit loop because the boundary shrinks as x grows — they meet in the middle.
5. Use the result only after the full construct has completed, per: Both the variable and the loop bound change each iteration, creating a converging condition.

Common Use Cases:
• Teaching this behavior using the mental model: Both the variable and the loop bound change each iteration, creating a converging condition.
• Debugging when the observed value should match the expectation in: The loop ends sooner than a fixed-limit loop because the boundary shrinks as x grows — they meet in the middle.

Edge Cases:
• If inputs vary from the situation described in: x=0,limit=10: 0<10 → x=3,limit=9., the behavior can change.
• When the construct’s assumptions differ, the rule in: x=3,limit=9: 3<9 → x=6,limit=8. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: The loop ends sooner than a fixed-limit loop because the boundary shrinks as x grows — they meet in the middle..
• When performance matters, prefer the simplest pattern that still implements: Both the variable and the loop bound change each iteration, creating a converging condition..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Both the variable and the loop bound change each iteration, creating a converging condition..

Notes:
• For maintainable code, make the intent behind: x=0,limit=10: 0<10 → x=3,limit=9. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q62: Round-robin task scheduling
  (_i: number) => ({
    q: `What is result?\ntasks = ["A", "B", "C"]\nresult = ""\ni = 0\ncount = 0\nwhile count < 7:\n    result += tasks[i % len(tasks)]\n    i += 1\n    count += 1\nresult`,
    o: ['"ABCABCA"', '"ABCABCAB"', '"ABCABC"', '"AAAAAAA"'],
    c: 0,
    e: "Cycles through A,B,C using modulo: ABCABCA (7 characters).",
    de: `The modulo operator i%len(tasks) cycles through indices 0,1,2,0,1,2,0 as i increments from 0 to 6. This produces tasks[0]='A', tasks[1]='B', tasks[2]='C', tasks[0]='A', tasks[1]='B', tasks[2]='C', tasks[0]='A'. Result = "ABCABCA". This round-robin pattern is fundamental in OS scheduling, load balancing, and circular buffers.

Key Concepts:
• This round-robin pattern is fundamental in OS scheduling, load balancing, and circular buffers.

Key Distinctions:
• This question’s focus is best captured by: The modulo operator i%len(tasks) cycles through indices 0,1,2,0,1,2,0 as i increments from 0 to 6.
• The contrast that matters for correctness is summarized by: This produces tasks[0]='A', tasks[1]='B', tasks[2]='C', tasks[0]='A', tasks[1]='B', tasks[2]='C', tasks[0]='A'.

How It Works:
• Python follows the rule implied by: The modulo operator i%len(tasks) cycles through indices 0,1,2,0,1,2,0 as i increments from 0 to 6.
• The outcome you observe follows from: This round-robin pattern is fundamental in OS scheduling, load balancing, and circular buffers.

Step-by-Step Execution:
1. Start from the construct described in: The modulo operator i%len(tasks) cycles through indices 0,1,2,0,1,2,0 as i increments from 0 to 6.
2. Resolve the subparts implied by: This produces tasks[0]='A', tasks[1]='B', tasks[2]='C', tasks[0]='A', tasks[1]='B', tasks[2]='C', tasks[0]='A'.
3. Apply the core semantics highlighted in: Result = "ABCABCA".
4. Confirm the final result aligns with: This round-robin pattern is fundamental in OS scheduling, load balancing, and circular buffers.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: This produces tasks[0]='A', tasks[1]='B', tasks[2]='C', tasks[0]='A', tasks[1]='B', tasks[2]='C', tasks[0]='A'.
2. Apply the construct’s main rule next, matching: The modulo operator i%len(tasks) cycles through indices 0,1,2,0,1,2,0 as i increments from 0 to 6.
3. Produce any intermediate values that This round-robin pattern is fundamental in OS scheduling, load balancing, and circular buffers. relies on
4. Finish by returning/assembling the final output named by: This round-robin pattern is fundamental in OS scheduling, load balancing, and circular buffers.
5. Use the result only after the full construct has completed, per: The modulo operator i%len(tasks) cycles through indices 0,1,2,0,1,2,0 as i increments from 0 to 6.

Common Use Cases:
• Teaching this behavior using the mental model: The modulo operator i%len(tasks) cycles through indices 0,1,2,0,1,2,0 as i increments from 0 to 6.
• Debugging when the observed value should match the expectation in: This round-robin pattern is fundamental in OS scheduling, load balancing, and circular buffers.

Edge Cases:
• If inputs vary from the situation described in: This produces tasks[0]='A', tasks[1]='B', tasks[2]='C', tasks[0]='A', tasks[1]='B', tasks[2]='C', tasks[0]='A'., the behavior can change.
• When the construct’s assumptions differ, the rule in: Result = "ABCABCA". is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This round-robin pattern is fundamental in OS scheduling, load balancing, and circular buffers..
• When performance matters, prefer the simplest pattern that still implements: The modulo operator i%len(tasks) cycles through indices 0,1,2,0,1,2,0 as i increments from 0 to 6..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The modulo operator i%len(tasks) cycles through indices 0,1,2,0,1,2,0 as i increments from 0 to 6..

Notes:
• For maintainable code, make the intent behind: This produces tasks[0]='A', tasks[1]='B', tasks[2]='C', tasks[0]='A', tasks[1]='B', tasks[2]='C', tasks[0]='A'. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q63: Maximum parenthesis nesting depth
  (_i: number) => ({
    q: `What is max_d?\ns = "((())())"\ndepth = 0\nmax_d = 0\ni = 0\nwhile i < len(s):\n    if s[i] == "(":\n        depth += 1\n        if depth > max_d:\n            max_d = depth\n    else:\n        depth -= 1\n    i += 1\nmax_d`,
    o: ["3", "4", "2", "1"],
    c: 0,
    e: "Depth sequence: 1,2,3,2,1,2,1,0. Maximum reached is 3.",
    de: `This tracks parenthesis nesting depth. '(' increments depth and updates max_d if deeper. ')' decrements depth. Walking through "((())())": depths are 1,2,3,2,1,2,1,0. The deepest nesting occurs at the third '(' where depth=3. max_d captures this peak. This algorithm is used in expression parsers and syntax validators to detect nesting levels.

Key Concepts:
• This algorithm is used in expression parsers and syntax validators to detect nesting levels.

Key Distinctions:
• This question’s focus is best captured by: This tracks parenthesis nesting depth.
• The contrast that matters for correctness is summarized by: '(' increments depth and updates max_d if deeper.

How It Works:
• Python follows the rule implied by: This tracks parenthesis nesting depth.
• The outcome you observe follows from: This algorithm is used in expression parsers and syntax validators to detect nesting levels.

Step-by-Step Execution:
1. Start from the construct described in: This tracks parenthesis nesting depth.
2. Resolve the subparts implied by: '(' increments depth and updates max_d if deeper.
3. Apply the core semantics highlighted in: ')' decrements depth.
4. Confirm the final result aligns with: This algorithm is used in expression parsers and syntax validators to detect nesting levels.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: '(' increments depth and updates max_d if deeper.
2. Apply the construct’s main rule next, matching: This tracks parenthesis nesting depth.
3. Produce any intermediate values that This algorithm is used in expression parsers and syntax validators to detect nesting levels. relies on
4. Finish by returning/assembling the final output named by: This algorithm is used in expression parsers and syntax validators to detect nesting levels.
5. Use the result only after the full construct has completed, per: This tracks parenthesis nesting depth.

Common Use Cases:
• Teaching this behavior using the mental model: This tracks parenthesis nesting depth.
• Debugging when the observed value should match the expectation in: This algorithm is used in expression parsers and syntax validators to detect nesting levels.

Edge Cases:
• If inputs vary from the situation described in: '(' increments depth and updates max_d if deeper., the behavior can change.
• When the construct’s assumptions differ, the rule in: ')' decrements depth. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This algorithm is used in expression parsers and syntax validators to detect nesting levels..
• When performance matters, prefer the simplest pattern that still implements: This tracks parenthesis nesting depth..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This tracks parenthesis nesting depth..

Notes:
• For maintainable code, make the intent behind: '(' increments depth and updates max_d if deeper. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q64: Look-and-say sequence step
  (_i: number) => ({
    q: `What is result?\ns = "1211"\nresult = ""\ni = 0\nwhile i < len(s):\n    ch = s[i]\n    count = 1\n    while i + count < len(s) and s[i + count] == ch:\n        count += 1\n    result += str(count) + ch\n    i += count\nresult`,
    o: ['"111221"', '"1211"', '"12211"', '"2112"'],
    c: 0,
    e: 'Groups: "1"→11, "2"→12, "11"→21. Result = "111221".',
    de: `The look-and-say sequence describes each run of identical digits. For "1211": i=0, ch='1', count=1 (next char '2'≠'1') → "11", i=1. i=1, ch='2', count=1 (next '1'≠'2') → "1112", i=2. i=2, ch='1', count=2 (s[3]='1'=='1', s[4] out of bounds) → "111221", i=4. Loop ends. "111221" means "one 1, one 2, two 1s". This is Conway's famous sequence.

Key Concepts:
• This is Conway's famous sequence.

Key Distinctions:
• This question’s focus is best captured by: The look-and-say sequence describes each run of identical digits.
• The contrast that matters for correctness is summarized by: For "1211": i=0, ch='1', count=1 (next char '2'≠'1') → "11", i=1.

How It Works:
• Python follows the rule implied by: The look-and-say sequence describes each run of identical digits.
• The outcome you observe follows from: This is Conway's famous sequence.

Step-by-Step Execution:
1. Start from the construct described in: The look-and-say sequence describes each run of identical digits.
2. Resolve the subparts implied by: For "1211": i=0, ch='1', count=1 (next char '2'≠'1') → "11", i=1.
3. Apply the core semantics highlighted in: i=1, ch='2', count=1 (next '1'≠'2') → "1112", i=2.
4. Confirm the final result aligns with: This is Conway's famous sequence.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: For "1211": i=0, ch='1', count=1 (next char '2'≠'1') → "11", i=1.
2. Apply the construct’s main rule next, matching: The look-and-say sequence describes each run of identical digits.
3. Produce any intermediate values that This is Conway's famous sequence. relies on
4. Finish by returning/assembling the final output named by: This is Conway's famous sequence.
5. Use the result only after the full construct has completed, per: The look-and-say sequence describes each run of identical digits.

Common Use Cases:
• Teaching this behavior using the mental model: The look-and-say sequence describes each run of identical digits.
• Debugging when the observed value should match the expectation in: This is Conway's famous sequence.

Edge Cases:
• If inputs vary from the situation described in: For "1211": i=0, ch='1', count=1 (next char '2'≠'1') → "11", i=1., the behavior can change.
• When the construct’s assumptions differ, the rule in: i=1, ch='2', count=1 (next '1'≠'2') → "1112", i=2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This is Conway's famous sequence..
• When performance matters, prefer the simplest pattern that still implements: The look-and-say sequence describes each run of identical digits..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The look-and-say sequence describes each run of identical digits..

Notes:
• For maintainable code, make the intent behind: For "1211": i=0, ch='1', count=1 (next char '2'≠'1') → "11", i=1. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q65: Complex boolean condition with halving
  (_i: number) => ({
    q: `What is (x, y)?\nx, y = 100, 0\nwhile not (x <= y or x < 10):\n    x //= 2\n    y += 5\n(x, y)`,
    o: ["(12, 15)", "(25, 10)", "(6, 20)", "(50, 5)"],
    c: 0,
    e: "100,0→50,5→25,10→12,15. At (12,15): 12≤15 is True, so not(True)=False.",
    de: `The condition not(x<=y or x<10) continues while NEITHER x<=y NOR x<10. x=100,y=0: 100<=0? F, 100<10? F, not(F or F)=T → x=50,y=5. 50<=5? F, 50<10? F → T → x=25,y=10. 25<=10? F, 25<10? F → T → x=12,y=15. 12<=15? T → not(T)=F → stop. De Morgan's law: the loop runs while x>y AND x>=10. Once x drops to 12 and y rises to 15, x<=y triggers the exit.

Key Concepts:
• Once x drops to 12 and y rises to 15, x<=y triggers the exit.

Key Distinctions:
• This question’s focus is best captured by: The condition not(x<=y or x<10) continues while NEITHER x<=y NOR x<10.
• The contrast that matters for correctness is summarized by: x=100,y=0: 100<=0?

How It Works:
• Python follows the rule implied by: The condition not(x<=y or x<10) continues while NEITHER x<=y NOR x<10.
• The outcome you observe follows from: Once x drops to 12 and y rises to 15, x<=y triggers the exit.

Step-by-Step Execution:
1. Start from the construct described in: The condition not(x<=y or x<10) continues while NEITHER x<=y NOR x<10.
2. Resolve the subparts implied by: x=100,y=0: 100<=0?
3. Apply the core semantics highlighted in: F, 100<10?
4. Confirm the final result aligns with: Once x drops to 12 and y rises to 15, x<=y triggers the exit.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: x=100,y=0: 100<=0?
2. Apply the construct’s main rule next, matching: The condition not(x<=y or x<10) continues while NEITHER x<=y NOR x<10.
3. Produce any intermediate values that Once x drops to 12 and y rises to 15, x<=y triggers the exit. relies on
4. Finish by returning/assembling the final output named by: Once x drops to 12 and y rises to 15, x<=y triggers the exit.
5. Use the result only after the full construct has completed, per: The condition not(x<=y or x<10) continues while NEITHER x<=y NOR x<10.

Common Use Cases:
• Teaching this behavior using the mental model: The condition not(x<=y or x<10) continues while NEITHER x<=y NOR x<10.
• Debugging when the observed value should match the expectation in: Once x drops to 12 and y rises to 15, x<=y triggers the exit.

Edge Cases:
• If inputs vary from the situation described in: x=100,y=0: 100<=0?, the behavior can change.
• When the construct’s assumptions differ, the rule in: F, 100<10? is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Once x drops to 12 and y rises to 15, x<=y triggers the exit..
• When performance matters, prefer the simplest pattern that still implements: The condition not(x<=y or x<10) continues while NEITHER x<=y NOR x<10..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The condition not(x<=y or x<10) continues while NEITHER x<=y NOR x<10..

Notes:
• For maintainable code, make the intent behind: x=100,y=0: 100<=0? explicit (and test it with inputs like those in this prompt).`
  }),
  // Q66: Power of 2 check via repeated halving
  (_i: number) => ({
    q: `What is n == 1?\nn = 64\nwhile n > 1 and n % 2 == 0:\n    n //= 2\nn == 1`,
    o: ["True", "False", "64", "Error"],
    c: 0,
    e: "64→32→16→8→4→2→1. After 6 halvings n=1, so n==1 is True.",
    de: `This checks if a number is a power of 2 by repeatedly dividing by 2. If n reaches exactly 1, it was a power of 2. 64=2^6, so: 64→32→16→8→4→2→1. At n=1, the condition n>1 is False, loop exits. n==1 evaluates to True. For non-powers like 12: 12→6→3, then 3%2≠0 exits early with n=3, so n==1 would be False. The bitwise alternative is n & (n-1) == 0.

Key Concepts:
• The bitwise alternative is n & (n-1) == 0.

Key Distinctions:
• This question’s focus is best captured by: This checks if a number is a power of 2 by repeatedly dividing by 2.
• The contrast that matters for correctness is summarized by: If n reaches exactly 1, it was a power of 2.

How It Works:
• Python follows the rule implied by: This checks if a number is a power of 2 by repeatedly dividing by 2.
• The outcome you observe follows from: The bitwise alternative is n & (n-1) == 0.

Step-by-Step Execution:
1. Start from the construct described in: This checks if a number is a power of 2 by repeatedly dividing by 2.
2. Resolve the subparts implied by: If n reaches exactly 1, it was a power of 2.
3. Apply the core semantics highlighted in: 64=2^6, so: 64→32→16→8→4→2→1.
4. Confirm the final result aligns with: The bitwise alternative is n & (n-1) == 0.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: If n reaches exactly 1, it was a power of 2.
2. Apply the construct’s main rule next, matching: This checks if a number is a power of 2 by repeatedly dividing by 2.
3. Produce any intermediate values that The bitwise alternative is n & (n-1) == 0. relies on
4. Finish by returning/assembling the final output named by: The bitwise alternative is n & (n-1) == 0.
5. Use the result only after the full construct has completed, per: This checks if a number is a power of 2 by repeatedly dividing by 2.

Common Use Cases:
• Teaching this behavior using the mental model: This checks if a number is a power of 2 by repeatedly dividing by 2.
• Debugging when the observed value should match the expectation in: The bitwise alternative is n & (n-1) == 0.

Edge Cases:
• If inputs vary from the situation described in: If n reaches exactly 1, it was a power of 2., the behavior can change.
• When the construct’s assumptions differ, the rule in: 64=2^6, so: 64→32→16→8→4→2→1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: The bitwise alternative is n & (n-1) == 0..
• When performance matters, prefer the simplest pattern that still implements: This checks if a number is a power of 2 by repeatedly dividing by 2..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This checks if a number is a power of 2 by repeatedly dividing by 2..

Notes:
• For maintainable code, make the intent behind: If n reaches exactly 1, it was a power of 2. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q67: Counting set bits (popcount)
  (_i: number) => ({
    q: `What is count?\nn = 13\ncount = 0\nwhile n:\n    count += n & 1\n    n >>= 1\ncount`,
    o: ["3", "4", "2", "13"],
    c: 0,
    e: "13 = 1101 in binary. Three 1-bits: positions 0, 2, and 3.",
    de: `This counts set bits by examining the least significant bit and right-shifting. n=13 (binary 1101): n&1=1, count=1, n=6 (110). n&1=0, count=1, n=3 (11). n&1=1, count=2, n=1 (1). n&1=1, count=3, n=0. Loop exits when n=0 (falsy). The 3 set bits correspond to 13=8+4+1. This is the Brian Kernighan popcount algorithm's simpler variant; Python's bin(13).count('1') does the same.

Key Concepts:
• This is the Brian Kernighan popcount algorithm's simpler variant; Python's bin(13).count('1') does the same.

Key Distinctions:
• This question’s focus is best captured by: This counts set bits by examining the least significant bit and right-shifting.
• The contrast that matters for correctness is summarized by: n=13 (binary 1101): n&1=1, count=1, n=6 (110).

How It Works:
• Python follows the rule implied by: This counts set bits by examining the least significant bit and right-shifting.
• The outcome you observe follows from: This is the Brian Kernighan popcount algorithm's simpler variant; Python's bin(13).count('1') does the same.

Step-by-Step Execution:
1. Start from the construct described in: This counts set bits by examining the least significant bit and right-shifting.
2. Resolve the subparts implied by: n=13 (binary 1101): n&1=1, count=1, n=6 (110).
3. Apply the core semantics highlighted in: n&1=0, count=1, n=3 (11).
4. Confirm the final result aligns with: This is the Brian Kernighan popcount algorithm's simpler variant; Python's bin(13).count('1') does the same.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: n=13 (binary 1101): n&1=1, count=1, n=6 (110).
2. Apply the construct’s main rule next, matching: This counts set bits by examining the least significant bit and right-shifting.
3. Produce any intermediate values that This is the Brian Kernighan popcount algorithm's simpler variant; Python's bin(13).count('1') does the same. relies on
4. Finish by returning/assembling the final output named by: This is the Brian Kernighan popcount algorithm's simpler variant; Python's bin(13).count('1') does the same.
5. Use the result only after the full construct has completed, per: This counts set bits by examining the least significant bit and right-shifting.

Common Use Cases:
• Teaching this behavior using the mental model: This counts set bits by examining the least significant bit and right-shifting.
• Debugging when the observed value should match the expectation in: This is the Brian Kernighan popcount algorithm's simpler variant; Python's bin(13).count('1') does the same.

Edge Cases:
• If inputs vary from the situation described in: n=13 (binary 1101): n&1=1, count=1, n=6 (110)., the behavior can change.
• When the construct’s assumptions differ, the rule in: n&1=0, count=1, n=3 (11). is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This is the Brian Kernighan popcount algorithm's simpler variant; Python's bin(13).count('1') does the same..
• When performance matters, prefer the simplest pattern that still implements: This counts set bits by examining the least significant bit and right-shifting..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This counts set bits by examining the least significant bit and right-shifting..

Notes:
• For maintainable code, make the intent behind: n=13 (binary 1101): n&1=1, count=1, n=6 (110). explicit (and test it with inputs like those in this prompt).`
  }),
  // Q68: Manual whitespace stripping
  (_i: number) => ({
    q: `What is result?\ns = "  hello  "\nlo = 0\nwhile lo < len(s) and s[lo] == " ":\n    lo += 1\nhi = len(s) - 1\nwhile hi >= lo and s[hi] == " ":\n    hi -= 1\nresult = s[lo:hi + 1]\nresult`,
    o: ['"hello"', '"  hello"', '"hello  "', '"  hello  "'],
    c: 0,
    e: "lo advances past 2 leading spaces to index 2. hi retreats past 2 trailing spaces to index 6.",
    de: `This implements str.strip() manually with two while loops. The first loop advances lo past leading spaces: s[0]=' ', s[1]=' ', s[2]='h' → lo=2. The second loop retreats hi from trailing spaces: s[8]=' ', s[7]=' ', s[6]='o' → hi=6. The slice s[2:7] extracts "hello". This two-pointer approach runs in O(n) and handles strings with only spaces (lo would exceed hi, yielding an empty slice).

Key Concepts:
• This two-pointer approach runs in O(n) and handles strings with only spaces (lo would exceed hi, yielding an empty slice).

Key Distinctions:
• This question’s focus is best captured by: This implements str.strip() manually with two while loops.
• The contrast that matters for correctness is summarized by: The first loop advances lo past leading spaces: s[0]=' ', s[1]=' ', s[2]='h' → lo=2.

How It Works:
• Python follows the rule implied by: This implements str.strip() manually with two while loops.
• The outcome you observe follows from: This two-pointer approach runs in O(n) and handles strings with only spaces (lo would exceed hi, yielding an empty slice).

Step-by-Step Execution:
1. Start from the construct described in: This implements str.strip() manually with two while loops.
2. Resolve the subparts implied by: The first loop advances lo past leading spaces: s[0]=' ', s[1]=' ', s[2]='h' → lo=2.
3. Apply the core semantics highlighted in: The second loop retreats hi from trailing spaces: s[8]=' ', s[7]=' ', s[6]='o' → hi=6.
4. Confirm the final result aligns with: This two-pointer approach runs in O(n) and handles strings with only spaces (lo would exceed hi, yielding an empty slice).

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The first loop advances lo past leading spaces: s[0]=' ', s[1]=' ', s[2]='h' → lo=2.
2. Apply the construct’s main rule next, matching: This implements str.strip() manually with two while loops.
3. Produce any intermediate values that This two-pointer approach runs in O(n) and handles strings with only spaces (lo would exceed hi, yielding an empty slice). relies on
4. Finish by returning/assembling the final output named by: This two-pointer approach runs in O(n) and handles strings with only spaces (lo would exceed hi, yielding an empty slice).
5. Use the result only after the full construct has completed, per: This implements str.strip() manually with two while loops.

Common Use Cases:
• Teaching this behavior using the mental model: This implements str.strip() manually with two while loops.
• Debugging when the observed value should match the expectation in: This two-pointer approach runs in O(n) and handles strings with only spaces (lo would exceed hi, yielding an empty slice).

Edge Cases:
• If inputs vary from the situation described in: The first loop advances lo past leading spaces: s[0]=' ', s[1]=' ', s[2]='h' → lo=2., the behavior can change.
• When the construct’s assumptions differ, the rule in: The second loop retreats hi from trailing spaces: s[8]=' ', s[7]=' ', s[6]='o' → hi=6. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This two-pointer approach runs in O(n) and handles strings with only spaces (lo would exceed hi, yielding an empty slice)..
• When performance matters, prefer the simplest pattern that still implements: This implements str.strip() manually with two while loops..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This implements str.strip() manually with two while loops..

Notes:
• For maintainable code, make the intent behind: The first loop advances lo past leading spaces: s[0]=' ', s[1]=' ', s[2]='h' → lo=2. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q69: Word wrap algorithm
  (_i: number) => ({
    q: `What is lines?\nwords = ["Hi", "there", "world"]\nwidth = 10\nlines = []\nline = ""\ni = 0\nwhile i < len(words):\n    if line and len(line) + 1 + len(words[i]) > width:\n        lines.append(line)\n        line = words[i]\n    elif line:\n        line += " " + words[i]\n    else:\n        line = words[i]\n    i += 1\nif line:\n    lines.append(line)\nlines`,
    o: ['["Hi there", "world"]', '["Hi", "there", "world"]', '["Hi there world"]', '["Hi there w", "orld"]'],
    c: 0,
    e: '"Hi"+"there"=8≤10 fits. Adding "world" would be 14>10, so new line.',
    de: `This word-wrap greedily fits words onto lines up to a width limit. i=0: line="" → else: line="Hi". i=1: len("Hi")+1+5=8 ≤ 10 → elif: line="Hi there". i=2: len("Hi there")+1+5=14 > 10 → append "Hi there", line="world". After loop: line="world" → append. Result: ["Hi there", "world"]. The +1 accounts for the space between words. This greedy algorithm is simpler than Knuth's optimal line-breaking.

Key Concepts:
• This greedy algorithm is simpler than Knuth's optimal line-breaking.

Key Distinctions:
• This question’s focus is best captured by: This word-wrap greedily fits words onto lines up to a width limit.
• The contrast that matters for correctness is summarized by: i=0: line="" → else: line="Hi".

How It Works:
• Python follows the rule implied by: This word-wrap greedily fits words onto lines up to a width limit.
• The outcome you observe follows from: This greedy algorithm is simpler than Knuth's optimal line-breaking.

Step-by-Step Execution:
1. Start from the construct described in: This word-wrap greedily fits words onto lines up to a width limit.
2. Resolve the subparts implied by: i=0: line="" → else: line="Hi".
3. Apply the core semantics highlighted in: i=1: len("Hi")+1+5=8 ≤ 10 → elif: line="Hi there".
4. Confirm the final result aligns with: This greedy algorithm is simpler than Knuth's optimal line-breaking.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: i=0: line="" → else: line="Hi".
2. Apply the construct’s main rule next, matching: This word-wrap greedily fits words onto lines up to a width limit.
3. Produce any intermediate values that This greedy algorithm is simpler than Knuth's optimal line-breaking. relies on
4. Finish by returning/assembling the final output named by: This greedy algorithm is simpler than Knuth's optimal line-breaking.
5. Use the result only after the full construct has completed, per: This word-wrap greedily fits words onto lines up to a width limit.

Common Use Cases:
• Teaching this behavior using the mental model: This word-wrap greedily fits words onto lines up to a width limit.
• Debugging when the observed value should match the expectation in: This greedy algorithm is simpler than Knuth's optimal line-breaking.

Edge Cases:
• If inputs vary from the situation described in: i=0: line="" → else: line="Hi"., the behavior can change.
• When the construct’s assumptions differ, the rule in: i=1: len("Hi")+1+5=8 ≤ 10 → elif: line="Hi there". is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This greedy algorithm is simpler than Knuth's optimal line-breaking..
• When performance matters, prefer the simplest pattern that still implements: This word-wrap greedily fits words onto lines up to a width limit..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This word-wrap greedily fits words onto lines up to a width limit..

Notes:
• For maintainable code, make the intent behind: i=0: line="" → else: line="Hi". explicit (and test it with inputs like those in this prompt).`
  }),
  // Q70: XOR encryption of byte values
  (_i: number) => ({
    q: `What is enc?\nmsg = [72, 101]\nkey = 42\nenc = []\ni = 0\nwhile i < len(msg):\n    enc.append(msg[i] ^ key)\n    i += 1\nenc`,
    o: ["[98, 79]", "[72, 101]", "[114, 63]", "[30, 59]"],
    c: 0,
    e: "72 XOR 42 = 98. 101 XOR 42 = 79. XOR flips specific bits.",
    de: `XOR encryption flips bits where the key has 1s. 72 (01001000) ^ 42 (00101010) = 01100010 = 98. 101 (01100101) ^ 42 (00101010) = 01001111 = 79. XOR is its own inverse: 98^42=72 and 79^42=101, recovering the original message. This symmetric property makes XOR the basis of stream ciphers and one-time pads. The while loop applies the same key to each byte.

Key Concepts:
• The while loop applies the same key to each byte.

Key Distinctions:
• This question’s focus is best captured by: XOR encryption flips bits where the key has 1s.
• The contrast that matters for correctness is summarized by: 72 (01001000) ^ 42 (00101010) = 01100010 = 98.

How It Works:
• Python follows the rule implied by: XOR encryption flips bits where the key has 1s.
• The outcome you observe follows from: The while loop applies the same key to each byte.

Step-by-Step Execution:
1. Start from the construct described in: XOR encryption flips bits where the key has 1s.
2. Resolve the subparts implied by: 72 (01001000) ^ 42 (00101010) = 01100010 = 98.
3. Apply the core semantics highlighted in: 101 (01100101) ^ 42 (00101010) = 01001111 = 79.
4. Confirm the final result aligns with: The while loop applies the same key to each byte.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: 72 (01001000) ^ 42 (00101010) = 01100010 = 98.
2. Apply the construct’s main rule next, matching: XOR encryption flips bits where the key has 1s.
3. Produce any intermediate values that The while loop applies the same key to each byte. relies on
4. Finish by returning/assembling the final output named by: The while loop applies the same key to each byte.
5. Use the result only after the full construct has completed, per: XOR encryption flips bits where the key has 1s.

Common Use Cases:
• Teaching this behavior using the mental model: XOR encryption flips bits where the key has 1s.
• Debugging when the observed value should match the expectation in: The while loop applies the same key to each byte.

Edge Cases:
• If inputs vary from the situation described in: 72 (01001000) ^ 42 (00101010) = 01100010 = 98., the behavior can change.
• When the construct’s assumptions differ, the rule in: 101 (01100101) ^ 42 (00101010) = 01001111 = 79. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: The while loop applies the same key to each byte..
• When performance matters, prefer the simplest pattern that still implements: XOR encryption flips bits where the key has 1s..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: XOR encryption flips bits where the key has 1s..

Notes:
• For maintainable code, make the intent behind: 72 (01001000) ^ 42 (00101010) = 01100010 = 98. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q71: Pop from list end while condition holds
  (_i: number) => ({
    q: `What is lst?\nlst = [1, 2, 3, 4, 5]\nwhile lst and lst[-1] > 2:\n    lst.pop()\nlst`,
    o: ["[1, 2]", "[1, 2, 3]", "[]", "[1]"],
    c: 0,
    e: "Pops while last element > 2: removes 5, 4, 3. Stops at 2.",
    de: `The while condition checks two things: lst is non-empty (truthy) AND the last element exceeds 2. lst[-1]=5>2 → pop → [1,2,3,4]. lst[-1]=4>2 → pop → [1,2,3]. lst[-1]=3>2 → pop → [1,2]. lst[-1]=2, 2>2 is False → stop. The 'lst and' guard prevents IndexError on an empty list. This pattern trims elements from the end based on a condition — useful for removing trailing values.

Key Concepts:
• This pattern trims elements from the end based on a condition — useful for removing trailing values.

Key Distinctions:
• This question’s focus is best captured by: The while condition checks two things: lst is non-empty (truthy) AND the last element exceeds 2.
• The contrast that matters for correctness is summarized by: lst[-1]=5>2 → pop → [1,2,3,4].

How It Works:
• Python follows the rule implied by: The while condition checks two things: lst is non-empty (truthy) AND the last element exceeds 2.
• The outcome you observe follows from: This pattern trims elements from the end based on a condition — useful for removing trailing values.

Step-by-Step Execution:
1. Start from the construct described in: The while condition checks two things: lst is non-empty (truthy) AND the last element exceeds 2.
2. Resolve the subparts implied by: lst[-1]=5>2 → pop → [1,2,3,4].
3. Apply the core semantics highlighted in: lst[-1]=4>2 → pop → [1,2,3].
4. Confirm the final result aligns with: This pattern trims elements from the end based on a condition — useful for removing trailing values.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: lst[-1]=5>2 → pop → [1,2,3,4].
2. Apply the construct’s main rule next, matching: The while condition checks two things: lst is non-empty (truthy) AND the last element exceeds 2.
3. Produce any intermediate values that This pattern trims elements from the end based on a condition — useful for removing trailing values. relies on
4. Finish by returning/assembling the final output named by: This pattern trims elements from the end based on a condition — useful for removing trailing values.
5. Use the result only after the full construct has completed, per: The while condition checks two things: lst is non-empty (truthy) AND the last element exceeds 2.

Common Use Cases:
• Teaching this behavior using the mental model: The while condition checks two things: lst is non-empty (truthy) AND the last element exceeds 2.
• Debugging when the observed value should match the expectation in: This pattern trims elements from the end based on a condition — useful for removing trailing values.

Edge Cases:
• If inputs vary from the situation described in: lst[-1]=5>2 → pop → [1,2,3,4]., the behavior can change.
• When the construct’s assumptions differ, the rule in: lst[-1]=4>2 → pop → [1,2,3]. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This pattern trims elements from the end based on a condition — useful for removing trailing values..
• When performance matters, prefer the simplest pattern that still implements: The while condition checks two things: lst is non-empty (truthy) AND the last element exceeds 2..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The while condition checks two things: lst is non-empty (truthy) AND the last element exceeds 2..

Notes:
• For maintainable code, make the intent behind: lst[-1]=5>2 → pop → [1,2,3,4]. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q72: Drain a dict with popitem
  (_i: number) => ({
    q: `What is total?\nd = {"a": 1, "b": 2, "c": 3}\ntotal = 0\nwhile d:\n    k, v = d.popitem()\n    total += v\ntotal`,
    o: ["6", "3", "5", "Error"],
    c: 0,
    e: "popitem() removes all entries: values 1+2+3=6 regardless of order.",
    de: `popitem() removes and returns an arbitrary (LIFO in Python 3.7+) key-value pair. The while loop continues as long as d is truthy (non-empty). All three values are summed: 1+2+3=6. The order of removal doesn't affect the total since addition is commutative. After the loop, d is empty {}. This drain pattern is useful when processing and consuming dictionary entries one at a time.

Key Concepts:
• This drain pattern is useful when processing and consuming dictionary entries one at a time.

Key Distinctions:
• This question’s focus is best captured by: popitem() removes and returns an arbitrary (LIFO in Python 3.7+) key-value pair.
• The contrast that matters for correctness is summarized by: The while loop continues as long as d is truthy (non-empty).

How It Works:
• Python follows the rule implied by: popitem() removes and returns an arbitrary (LIFO in Python 3.7+) key-value pair.
• The outcome you observe follows from: This drain pattern is useful when processing and consuming dictionary entries one at a time.

Step-by-Step Execution:
1. Start from the construct described in: popitem() removes and returns an arbitrary (LIFO in Python 3.7+) key-value pair.
2. Resolve the subparts implied by: The while loop continues as long as d is truthy (non-empty).
3. Apply the core semantics highlighted in: All three values are summed: 1+2+3=6.
4. Confirm the final result aligns with: This drain pattern is useful when processing and consuming dictionary entries one at a time.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The while loop continues as long as d is truthy (non-empty).
2. Apply the construct’s main rule next, matching: popitem() removes and returns an arbitrary (LIFO in Python 3.7+) key-value pair.
3. Produce any intermediate values that This drain pattern is useful when processing and consuming dictionary entries one at a time. relies on
4. Finish by returning/assembling the final output named by: This drain pattern is useful when processing and consuming dictionary entries one at a time.
5. Use the result only after the full construct has completed, per: popitem() removes and returns an arbitrary (LIFO in Python 3.7+) key-value pair.

Common Use Cases:
• Teaching this behavior using the mental model: popitem() removes and returns an arbitrary (LIFO in Python 3.7+) key-value pair.
• Debugging when the observed value should match the expectation in: This drain pattern is useful when processing and consuming dictionary entries one at a time.

Edge Cases:
• If inputs vary from the situation described in: The while loop continues as long as d is truthy (non-empty)., the behavior can change.
• When the construct’s assumptions differ, the rule in: All three values are summed: 1+2+3=6. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This drain pattern is useful when processing and consuming dictionary entries one at a time..
• When performance matters, prefer the simplest pattern that still implements: popitem() removes and returns an arbitrary (LIFO in Python 3.7+) key-value pair..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: popitem() removes and returns an arbitrary (LIFO in Python 3.7+) key-value pair..

Notes:
• For maintainable code, make the intent behind: The while loop continues as long as d is truthy (non-empty). explicit (and test it with inputs like those in this prompt).`
  }),
  // Q73: Extract multi-digit numbers from string
  (_i: number) => ({
    q: `What is nums?\ns = "a2b34c"\nnums = []\ni = 0\nwhile i < len(s):\n    if s[i].isdigit():\n        n = ""\n        while i < len(s) and s[i].isdigit():\n            n += s[i]\n            i += 1\n        nums.append(int(n))\n    else:\n        i += 1\nnums`,
    o: ["[2, 34]", "[2, 3, 4]", "[234]", "[2, 34, 0]"],
    c: 0,
    e: "Inner loop groups consecutive digits: '2'→2, '34'→34.",
    de: `The outer loop scans characters. When a digit is found, the inner while loop accumulates consecutive digits into a string, then converts to int. At i=1: '2' is a digit, inner loop gets "2", i=2. Append 2. At i=3: '3' is a digit, inner loop gets "3" then "34" (s[4]='4'), i=5. Append 34. Non-digits just increment i. This two-loop pattern is a basic tokenizer that handles multi-digit numbers correctly.

Key Concepts:
• This two-loop pattern is a basic tokenizer that handles multi-digit numbers correctly.

Key Distinctions:
• This question’s focus is best captured by: The outer loop scans characters.
• The contrast that matters for correctness is summarized by: When a digit is found, the inner while loop accumulates consecutive digits into a string, then converts to int.

How It Works:
• Python follows the rule implied by: The outer loop scans characters.
• The outcome you observe follows from: This two-loop pattern is a basic tokenizer that handles multi-digit numbers correctly.

Step-by-Step Execution:
1. Start from the construct described in: The outer loop scans characters.
2. Resolve the subparts implied by: When a digit is found, the inner while loop accumulates consecutive digits into a string, then converts to int.
3. Apply the core semantics highlighted in: At i=1: '2' is a digit, inner loop gets "2", i=2.
4. Confirm the final result aligns with: This two-loop pattern is a basic tokenizer that handles multi-digit numbers correctly.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: When a digit is found, the inner while loop accumulates consecutive digits into a string, then converts to int.
2. Apply the construct’s main rule next, matching: The outer loop scans characters.
3. Produce any intermediate values that This two-loop pattern is a basic tokenizer that handles multi-digit numbers correctly. relies on
4. Finish by returning/assembling the final output named by: This two-loop pattern is a basic tokenizer that handles multi-digit numbers correctly.
5. Use the result only after the full construct has completed, per: The outer loop scans characters.

Common Use Cases:
• Teaching this behavior using the mental model: The outer loop scans characters.
• Debugging when the observed value should match the expectation in: This two-loop pattern is a basic tokenizer that handles multi-digit numbers correctly.

Edge Cases:
• If inputs vary from the situation described in: When a digit is found, the inner while loop accumulates consecutive digits into a string, then converts to int., the behavior can change.
• When the construct’s assumptions differ, the rule in: At i=1: '2' is a digit, inner loop gets "2", i=2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This two-loop pattern is a basic tokenizer that handles multi-digit numbers correctly..
• When performance matters, prefer the simplest pattern that still implements: The outer loop scans characters..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The outer loop scans characters..

Notes:
• For maintainable code, make the intent behind: When a digit is found, the inner while loop accumulates consecutive digits into a string, then converts to int. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q74: Triangle number sequence
  (_i: number) => ({
    q: `What is result?\nresult = []\nn = 1\ntotal = 0\nwhile n <= 5:\n    total += n\n    result.append(total)\n    n += 1\nresult`,
    o: ["[1, 3, 6, 10, 15]", "[1, 2, 3, 4, 5]", "[5, 10, 15, 20, 25]", "[1, 4, 9, 16, 25]"],
    c: 0,
    e: "Running sum: 1, 1+2=3, 3+3=6, 6+4=10, 10+5=15.",
    de: `Triangle numbers are cumulative sums of 1+2+...+n. Each iteration adds n to a running total. n=1: total=1. n=2: total=3. n=3: total=6. n=4: total=10. n=5: total=15. The nth triangle number equals n*(n+1)/2, so T(5)=15. These numbers count objects in equilateral triangles: 1 dot, 3 dots, 6 dots, etc. The sequence appears throughout combinatorics and Pascal's triangle.

Key Concepts:
• The sequence appears throughout combinatorics and Pascal's triangle.

Key Distinctions:
• This question’s focus is best captured by: Triangle numbers are cumulative sums of 1+2+...+n.
• The contrast that matters for correctness is summarized by: Each iteration adds n to a running total.

How It Works:
• Python follows the rule implied by: Triangle numbers are cumulative sums of 1+2+...+n.
• The outcome you observe follows from: The sequence appears throughout combinatorics and Pascal's triangle.

Step-by-Step Execution:
1. Start from the construct described in: Triangle numbers are cumulative sums of 1+2+...+n.
2. Resolve the subparts implied by: Each iteration adds n to a running total.
3. Apply the core semantics highlighted in: n=1: total=1.
4. Confirm the final result aligns with: The sequence appears throughout combinatorics and Pascal's triangle.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Each iteration adds n to a running total.
2. Apply the construct’s main rule next, matching: Triangle numbers are cumulative sums of 1+2+...+n.
3. Produce any intermediate values that The sequence appears throughout combinatorics and Pascal's triangle. relies on
4. Finish by returning/assembling the final output named by: The sequence appears throughout combinatorics and Pascal's triangle.
5. Use the result only after the full construct has completed, per: Triangle numbers are cumulative sums of 1+2+...+n.

Common Use Cases:
• Teaching this behavior using the mental model: Triangle numbers are cumulative sums of 1+2+...+n.
• Debugging when the observed value should match the expectation in: The sequence appears throughout combinatorics and Pascal's triangle.

Edge Cases:
• If inputs vary from the situation described in: Each iteration adds n to a running total., the behavior can change.
• When the construct’s assumptions differ, the rule in: n=1: total=1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: The sequence appears throughout combinatorics and Pascal's triangle..
• When performance matters, prefer the simplest pattern that still implements: Triangle numbers are cumulative sums of 1+2+...+n..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Triangle numbers are cumulative sums of 1+2+...+n..

Notes:
• For maintainable code, make the intent behind: Each iteration adds n to a running total. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q75: Convergence by incrementing and decrementing
  (_i: number) => ({
    q: `What is (a, b)?\na, b = 1, 10\nwhile a < b:\n    a += 1\n    b -= 1\n(a, b)`,
    o: ["(6, 5)", "(5, 6)", "(5, 5)", "(10, 1)"],
    c: 0,
    e: "(1,10)→(2,9)→(3,8)→(4,7)→(5,6)→(6,5). 6<5 is False.",
    de: `Both variables converge toward the midpoint: a increases while b decreases. Trace: (1,10)→(2,9)→(3,8)→(4,7)→(5,6)→(6,5). At (6,5), a<b is 6<5=False, so the loop exits. They cross over because the sum a+b=11 is odd — they can never both equal 5.5. With an even sum like (1,9), they'd meet at (5,5). This pattern finds the midpoint of a range.

Key Concepts:
• This pattern finds the midpoint of a range.

Key Distinctions:
• This question’s focus is best captured by: Both variables converge toward the midpoint: a increases while b decreases.
• The contrast that matters for correctness is summarized by: Trace: (1,10)→(2,9)→(3,8)→(4,7)→(5,6)→(6,5).

How It Works:
• Python follows the rule implied by: Both variables converge toward the midpoint: a increases while b decreases.
• The outcome you observe follows from: This pattern finds the midpoint of a range.

Step-by-Step Execution:
1. Start from the construct described in: Both variables converge toward the midpoint: a increases while b decreases.
2. Resolve the subparts implied by: Trace: (1,10)→(2,9)→(3,8)→(4,7)→(5,6)→(6,5).
3. Apply the core semantics highlighted in: At (6,5), a<b is 6<5=False, so the loop exits.
4. Confirm the final result aligns with: This pattern finds the midpoint of a range.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Trace: (1,10)→(2,9)→(3,8)→(4,7)→(5,6)→(6,5).
2. Apply the construct’s main rule next, matching: Both variables converge toward the midpoint: a increases while b decreases.
3. Produce any intermediate values that This pattern finds the midpoint of a range. relies on
4. Finish by returning/assembling the final output named by: This pattern finds the midpoint of a range.
5. Use the result only after the full construct has completed, per: Both variables converge toward the midpoint: a increases while b decreases.

Common Use Cases:
• Teaching this behavior using the mental model: Both variables converge toward the midpoint: a increases while b decreases.
• Debugging when the observed value should match the expectation in: This pattern finds the midpoint of a range.

Edge Cases:
• If inputs vary from the situation described in: Trace: (1,10)→(2,9)→(3,8)→(4,7)→(5,6)→(6,5)., the behavior can change.
• When the construct’s assumptions differ, the rule in: At (6,5), a<b is 6<5=False, so the loop exits. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This pattern finds the midpoint of a range..
• When performance matters, prefer the simplest pattern that still implements: Both variables converge toward the midpoint: a increases while b decreases..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Both variables converge toward the midpoint: a increases while b decreases..

Notes:
• For maintainable code, make the intent behind: Trace: (1,10)→(2,9)→(3,8)→(4,7)→(5,6)→(6,5). explicit (and test it with inputs like those in this prompt).`
  }),
  // Q76: Sliding window moving average
  (_i: number) => ({
    q: `What is avgs?\ndata = [10, 20, 30, 40, 50]\nwindow = 3\navgs = []\ni = 0\nwhile i <= len(data) - window:\n    avg = sum(data[i:i + window]) / window\n    avgs.append(avg)\n    i += 1\navgs`,
    o: ["[20.0, 30.0, 40.0]", "[10.0, 20.0, 30.0]", "[30.0]", "[20.0, 30.0, 40.0, 50.0]"],
    c: 0,
    e: "Windows: [10,20,30]→20, [20,30,40]→30, [30,40,50]→40.",
    de: `A sliding window of size 3 computes the average at each valid position. i=0: sum([10,20,30])/3=20.0. i=1: sum([20,30,40])/3=30.0. i=2: sum([30,40,50])/3=40.0. i=3: 3<=5-3=2 is False, stop. Three windows fit in a 5-element list. Moving averages smooth out fluctuations and are widely used in time series analysis, stock charts, and signal processing.

Key Concepts:
• Moving averages smooth out fluctuations and are widely used in time series analysis, stock charts, and signal processing.

Key Distinctions:
• This question’s focus is best captured by: A sliding window of size 3 computes the average at each valid position.
• The contrast that matters for correctness is summarized by: i=0: sum([10,20,30])/3=20.0.

How It Works:
• Python follows the rule implied by: A sliding window of size 3 computes the average at each valid position.
• The outcome you observe follows from: Moving averages smooth out fluctuations and are widely used in time series analysis, stock charts, and signal processing.

Step-by-Step Execution:
1. Start from the construct described in: A sliding window of size 3 computes the average at each valid position.
2. Resolve the subparts implied by: i=0: sum([10,20,30])/3=20.0.
3. Apply the core semantics highlighted in: i=1: sum([20,30,40])/3=30.0.
4. Confirm the final result aligns with: Moving averages smooth out fluctuations and are widely used in time series analysis, stock charts, and signal processing.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: i=0: sum([10,20,30])/3=20.0.
2. Apply the construct’s main rule next, matching: A sliding window of size 3 computes the average at each valid position.
3. Produce any intermediate values that Moving averages smooth out fluctuations and are widely used in time series analysis, stock charts, and signal processing. relies on
4. Finish by returning/assembling the final output named by: Moving averages smooth out fluctuations and are widely used in time series analysis, stock charts, and signal processing.
5. Use the result only after the full construct has completed, per: A sliding window of size 3 computes the average at each valid position.

Common Use Cases:
• Teaching this behavior using the mental model: A sliding window of size 3 computes the average at each valid position.
• Debugging when the observed value should match the expectation in: Moving averages smooth out fluctuations and are widely used in time series analysis, stock charts, and signal processing.

Edge Cases:
• If inputs vary from the situation described in: i=0: sum([10,20,30])/3=20.0., the behavior can change.
• When the construct’s assumptions differ, the rule in: i=1: sum([20,30,40])/3=30.0. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Moving averages smooth out fluctuations and are widely used in time series analysis, stock charts, and signal processing..
• When performance matters, prefer the simplest pattern that still implements: A sliding window of size 3 computes the average at each valid position..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: A sliding window of size 3 computes the average at each valid position..

Notes:
• For maintainable code, make the intent behind: i=0: sum([10,20,30])/3=20.0. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q77: Wrap-around indexing with modulo
  (_i: number) => ({
    q: `What is result?\nlst = [10, 20, 30]\ni = 0\nresult = []\nwhile i < 5:\n    result.append(lst[i % len(lst)])\n    i += 1\nresult`,
    o: ["[10, 20, 30, 10, 20]", "[10, 20, 30]", "[10, 20, 30, 10, 20, 30]", "Error"],
    c: 0,
    e: "i%3 cycles indices 0,1,2,0,1 → values 10,20,30,10,20.",
    de: `The modulo operator i%len(lst) wraps indices around when they exceed the list length. i=0: 0%3=0→10. i=1: 1%3=1→20. i=2: 2%3=2→30. i=3: 3%3=0→10. i=4: 4%3=1→20. This creates a circular buffer effect where the list repeats. Wrap-around indexing is used in ring buffers, circular queues, and round-robin scheduling without needing to check bounds explicitly.

Key Concepts:
• Wrap-around indexing is used in ring buffers, circular queues, and round-robin scheduling without needing to check bounds explicitly.

Key Distinctions:
• This question’s focus is best captured by: The modulo operator i%len(lst) wraps indices around when they exceed the list length.
• The contrast that matters for correctness is summarized by: i=0: 0%3=0→10.

How It Works:
• Python follows the rule implied by: The modulo operator i%len(lst) wraps indices around when they exceed the list length.
• The outcome you observe follows from: Wrap-around indexing is used in ring buffers, circular queues, and round-robin scheduling without needing to check bounds explicitly.

Step-by-Step Execution:
1. Start from the construct described in: The modulo operator i%len(lst) wraps indices around when they exceed the list length.
2. Resolve the subparts implied by: i=0: 0%3=0→10.
3. Apply the core semantics highlighted in: i=1: 1%3=1→20.
4. Confirm the final result aligns with: Wrap-around indexing is used in ring buffers, circular queues, and round-robin scheduling without needing to check bounds explicitly.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: i=0: 0%3=0→10.
2. Apply the construct’s main rule next, matching: The modulo operator i%len(lst) wraps indices around when they exceed the list length.
3. Produce any intermediate values that Wrap-around indexing is used in ring buffers, circular queues, and round-robin scheduling without needing to check bounds explicitly. relies on
4. Finish by returning/assembling the final output named by: Wrap-around indexing is used in ring buffers, circular queues, and round-robin scheduling without needing to check bounds explicitly.
5. Use the result only after the full construct has completed, per: The modulo operator i%len(lst) wraps indices around when they exceed the list length.

Common Use Cases:
• Teaching this behavior using the mental model: The modulo operator i%len(lst) wraps indices around when they exceed the list length.
• Debugging when the observed value should match the expectation in: Wrap-around indexing is used in ring buffers, circular queues, and round-robin scheduling without needing to check bounds explicitly.

Edge Cases:
• If inputs vary from the situation described in: i=0: 0%3=0→10., the behavior can change.
• When the construct’s assumptions differ, the rule in: i=1: 1%3=1→20. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Wrap-around indexing is used in ring buffers, circular queues, and round-robin scheduling without needing to check bounds explicitly..
• When performance matters, prefer the simplest pattern that still implements: The modulo operator i%len(lst) wraps indices around when they exceed the list length..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The modulo operator i%len(lst) wraps indices around when they exceed the list length..

Notes:
• For maintainable code, make the intent behind: i=0: 0%3=0→10. explicit (and test it with inputs like those in this prompt).`
  }),
  // Q78: Game loop with HP depletion
  (_i: number) => ({
    q: `What is (hp, turns)?\nhp = 50\nturns = 0\nwhile hp > 0:\n    hp -= 20\n    turns += 1\n(hp, turns)`,
    o: ["(-10, 3)", "(0, 3)", "(10, 2)", "(-10, 2)"],
    c: 0,
    e: "50→30(t=1)→10(t=2)→-10(t=3). HP goes below 0 before the check.",
    de: `The loop subtracts 20 HP each turn and checks the condition only at the top of the loop. hp=50: subtract 20→hp=30, turns=1. hp=30→10, turns=2. hp=10→-10, turns=3. Now hp=-10, which is not >0, so the loop exits. HP goes negative because the damage is applied before the next condition check — the character "dies" mid-turn. This is why games often clamp HP to max(0, hp-damage).

Key Concepts:
• This is why games often clamp HP to max(0, hp-damage).

Key Distinctions:
• This question’s focus is best captured by: The loop subtracts 20 HP each turn and checks the condition only at the top of the loop.
• The contrast that matters for correctness is summarized by: hp=50: subtract 20→hp=30, turns=1.

How It Works:
• Python follows the rule implied by: The loop subtracts 20 HP each turn and checks the condition only at the top of the loop.
• The outcome you observe follows from: This is why games often clamp HP to max(0, hp-damage).

Step-by-Step Execution:
1. Start from the construct described in: The loop subtracts 20 HP each turn and checks the condition only at the top of the loop.
2. Resolve the subparts implied by: hp=50: subtract 20→hp=30, turns=1.
3. Apply the core semantics highlighted in: hp=30→10, turns=2.
4. Confirm the final result aligns with: This is why games often clamp HP to max(0, hp-damage).

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: hp=50: subtract 20→hp=30, turns=1.
2. Apply the construct’s main rule next, matching: The loop subtracts 20 HP each turn and checks the condition only at the top of the loop.
3. Produce any intermediate values that This is why games often clamp HP to max(0, hp-damage). relies on
4. Finish by returning/assembling the final output named by: This is why games often clamp HP to max(0, hp-damage).
5. Use the result only after the full construct has completed, per: The loop subtracts 20 HP each turn and checks the condition only at the top of the loop.

Common Use Cases:
• Teaching this behavior using the mental model: The loop subtracts 20 HP each turn and checks the condition only at the top of the loop.
• Debugging when the observed value should match the expectation in: This is why games often clamp HP to max(0, hp-damage).

Edge Cases:
• If inputs vary from the situation described in: hp=50: subtract 20→hp=30, turns=1., the behavior can change.
• When the construct’s assumptions differ, the rule in: hp=30→10, turns=2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This is why games often clamp HP to max(0, hp-damage)..
• When performance matters, prefer the simplest pattern that still implements: The loop subtracts 20 HP each turn and checks the condition only at the top of the loop..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The loop subtracts 20 HP each turn and checks the condition only at the top of the loop..

Notes:
• For maintainable code, make the intent behind: hp=50: subtract 20→hp=30, turns=1. explicit (and test it with inputs like those in this prompt).`
  }),
];
