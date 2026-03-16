// --- LEVEL 3 INTERMEDIATE B: Advanced Conditional Patterns, Operator Precedence & Practical Boolean Logic (50 TRULY UNIQUE QUESTIONS) ---
// Topics 51-100: operator precedence with booleans, practical boolean patterns, conditional expressions & edge cases
export const level3IntermediateB = [
  // 51. and has higher precedence than or
  (_i: number) => ({
    q: `What is the result of: True or False and False?`,
    o: ['True', 'False', 'None', 'Error'],
    c: 0,
    e: "'and' binds tighter than 'or', so False and False evaluates first to False, then True or False gives True.",
    de: `Operator precedence matters: 'and' has higher precedence than 'or'. So Python evaluates this as True or (False and False).

Key concepts:
• Precedence order: not > and > or
• False and False → False (evaluated first)
• True or False → True (evaluated second)
• Without knowing precedence, you might incorrectly evaluate (True or False) and False = False

How it works step by step:
1. Identify operators: or, and
2. 'and' binds tighter → group: True or (False and False)
3. Inner: False and False → False
4. Outer: True or False → True

Examples:
• True or True and False → True or (True and False) → True or False → True
• False or False and True → False or (False and True) → False or False → False

Common mistake: Evaluating left-to-right without respecting precedence.

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
  // 52. Parentheses override precedence
  (_i: number) => ({
    q: `What is the result of: (True or False) and False?`,
    o: ['False', 'True', 'None', 'Error'],
    c: 0,
    e: "Parentheses force True or False first (True), then True and False gives False.",
    de: `Parentheses override the default operator precedence. Here they force 'or' to evaluate before 'and'.

Key concepts:
• Without parens: True or False and False → True (and binds first)
• With parens: (True or False) and False → False
• Parentheses always have highest precedence

How it works step by step:
1. Parenthesised: True or False → True
2. Then: True and False → False
3. Result: False

Contrast without parens:
• True or False and False → True or (False and False) → True or False → True

This is a classic precedence trap — use parentheses to make intent explicit.

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
  // 53. not has highest precedence among boolean operators
  (_i: number) => ({
    q: `What is the result of: not True or True?`,
    o: ['True', 'False', 'None', 'Error'],
    c: 0,
    e: "'not' has highest precedence: (not True) or True = False or True = True.",
    de: `'not' binds tighter than both 'and' and 'or'. So this is evaluated as (not True) or True.

Key concepts:
• Precedence: not > and > or
• not True → False (evaluated first)
• False or True → True (evaluated second)
• NOT the same as not (True or True) which would be False

How it works step by step:
1. not binds tightest → (not True) or True
2. not True → False
3. False or True → True
4. Result: True

Common mistake: Reading it as not (True or True) which gives False. The precedence rules make it (not True) or True = True.

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
  // 54. not with parentheses
  (_i: number) => ({
    q: `What is the result of: not (True or True)?`,
    o: ['False', 'True', 'None', 'Error'],
    c: 0,
    e: "Parentheses force True or True = True first, then not True = False.",
    de: `Parentheses change what 'not' applies to. Without them, 'not' would only negate the first True.

Key concepts:
• not (True or True): parens force or first
• True or True → True
• not True → False
• Compare: not True or True → (not True) or True → True

How it works step by step:
1. Inside parens: True or True → True
2. Apply not: not True → False
3. Result: False

This demonstrates why parentheses are essential for clarity in compound boolean expressions.

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
  // 55. not False evaluates before and
  (_i: number) => ({
    q: `What is the result of: True and not False?`,
    o: ['True', 'False', 'None', 'Error'],
    c: 0,
    e: "'not' evaluates first: not False = True. Then True and True = True.",
    de: `Since 'not' has higher precedence than 'and', Python evaluates not False first, then applies 'and'.

Key concepts:
• Precedence: not > and > or
• not False → True (evaluated first)
• True and True → True (evaluated second)

How it works step by step:
1. not False → True
2. True and True → True
3. Result: True

This is a common pattern for expressing "A and B is not the case" or "A and the opposite of B".

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
  // 56. All three operators: not, and, or
  (_i: number) => ({
    q: `What is the result of: False or not False and True?`,
    o: ['True', 'False', 'None', 'Error'],
    c: 0,
    e: "not False = True, then True and True = True, then False or True = True.",
    de: `This expression uses all three boolean operators. Precedence: not > and > or.

How it works step by step:
1. not False → True (not has highest precedence)
2. True and True → True (and is next)
3. False or True → True (or is last)
4. Result: True

Fully parenthesised: False or ((not False) and True)
• not False → True
• True and True → True
• False or True → True

This is a great example of why understanding precedence avoids bugs in conditional logic.

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
  // 57. Comparison combined with logical and
  (_i: number) => ({
    q: `What is the result of: 1 < 2 and 3 < 4?`,
    o: ['True', 'False', '1', 'Error'],
    c: 0,
    e: "Both comparisons are True, and True and True = True.",
    de: `Comparison operators have higher precedence than logical operators, so each comparison evaluates first.

Key concepts:
• 1 < 2 → True (comparison evaluated first)
• 3 < 4 → True (comparison evaluated first)
• True and True → True (logical and applied)
• Comparisons always bind tighter than and/or/not

How it works step by step:
1. 1 < 2 → True
2. 3 < 4 → True
3. True and True → True

This pattern is common for checking multiple conditions: if age >= 18 and has_license:.

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
  // 58. or short-circuits on first True comparison
  (_i: number) => ({
    q: `What is the result of: 1 < 2 or 3 > 4?`,
    o: ['True', 'False', '1', 'Error'],
    c: 0,
    e: "1 < 2 is True, so 'or' short-circuits and returns True without evaluating 3 > 4.",
    de: `The 'or' operator short-circuits: if the left operand is truthy, it returns immediately without evaluating the right operand.

Key concepts:
• 1 < 2 → True
• 'or' sees True on the left → short-circuits, returns True
• 3 > 4 is never evaluated
• Short-circuiting improves performance and enables safe patterns

How it works step by step:
1. 1 < 2 → True
2. True or ??? → True (short-circuit, right side skipped)
3. Result: True

Short-circuiting is useful for fallbacks: result = expensive_call() or default_value.

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
  // 59. not with comparison
  (_i: number) => ({
    q: `What is the result of: not 1 < 2?`,
    o: ['False', 'True', '1', 'Error'],
    c: 0,
    e: "Comparisons have higher precedence than 'not': not (1 < 2) = not True = False.",
    de: `Comparison operators bind tighter than 'not', so Python reads this as not (1 < 2), not (not 1) < 2.

Key concepts:
• Precedence: comparisons > not > and > or
• 1 < 2 → True (evaluated first)
• not True → False (evaluated second)
• If 'not' bound tighter: (not 1) < 2 → False < 2 → True (wrong!)

How it works step by step:
1. 1 < 2 → True (comparison first)
2. not True → False
3. Result: False

This is why not x < y means not (x < y), not (not x) < y.

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
  // 60. Four-way chained comparison
  (_i: number) => ({
    q: `What is the result of: 1 < 2 < 3 < 4?`,
    o: ['True', 'False', 'Error', 'None'],
    c: 0,
    e: "Python chains comparisons: 1<2 and 2<3 and 3<4, all True.",
    de: `Python supports chained comparisons, which is equivalent to joining each pair with 'and'.

Key concepts:
• 1 < 2 < 3 < 4 is equivalent to (1 < 2) and (2 < 3) and (3 < 4)
• Each comparison: 1<2=True, 2<3=True, 3<4=True
• True and True and True → True
• The middle values are only evaluated once (unlike explicit and)

How it works step by step:
1. 1 < 2 → True
2. 2 < 3 → True
3. 3 < 4 → True
4. All True → True

Chained comparisons are Pythonic: 0 <= x < 100 is cleaner than x >= 0 and x < 100.

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
  // 61. Mixed chained comparison (< and >)
  (_i: number) => ({
    q: `What is the result of: 1 < 2 > 0?`,
    o: ['True', 'False', 'Error', 'None'],
    c: 0,
    e: "Chained: 1 < 2 and 2 > 0, both True.",
    de: `You can mix different comparison operators in a chain. Python treats this as (1 < 2) and (2 > 0).

Key concepts:
• 1 < 2 > 0 means (1 < 2) and (2 > 0)
• 1 < 2 → True
• 2 > 0 → True
• True and True → True

How it works:
1. 1 < 2 → True
2. 2 > 0 → True
3. Result: True

You can chain any comparison operators: <, >, <=, >=, ==, !=, is, in. They all expand to pairwise 'and'.

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
  // 62. Chained comparison where second part is False
  (_i: number) => ({
    q: `What is the result of: 1 < 2 > 3?`,
    o: ['False', 'True', 'Error', 'None'],
    c: 0,
    e: "Chained: 1 < 2 is True, but 2 > 3 is False. True and False = False.",
    de: `In chained comparisons, ALL pairs must be True for the overall result to be True.

Key concepts:
• 1 < 2 > 3 means (1 < 2) and (2 > 3)
• 1 < 2 → True
• 2 > 3 → False
• True and False → False

How it works:
1. 1 < 2 → True
2. 2 > 3 → False (2 is not greater than 3)
3. True and False → False

Even though the first comparison is True, the chain fails because the second comparison is False.

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
  // 63. String chained comparison (lexicographic)
  (_i: number) => ({
    q: `What is the result of: "a" < "b" < "c"?`,
    o: ['True', 'False', 'Error', 'None'],
    c: 0,
    e: "String comparison is lexicographic: 'a' < 'b' and 'b' < 'c', both True.",
    de: `Chained comparisons work with strings too, using lexicographic (alphabetical) ordering.

Key concepts:
• "a" < "b" < "c" means ("a" < "b") and ("b" < "c")
• Strings are compared by Unicode code points
• ord("a")=97, ord("b")=98, ord("c")=99
• "a" < "b" → True, "b" < "c" → True

How it works:
1. "a" < "b" → True (97 < 98)
2. "b" < "c" → True (98 < 99)
3. True and True → True

String comparison is case-sensitive: "A" < "a" is True (uppercase letters have lower code points).

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
  // 64. Chained comparison with negative number
  (_i: number) => ({
    q: `What is the result of: 0 < 1 > -1?`,
    o: ['True', 'False', 'Error', 'None'],
    c: 0,
    e: "Chained: 0 < 1 is True and 1 > -1 is True.",
    de: `This chain mixes < and > operators with a negative number.

Key concepts:
• 0 < 1 > -1 means (0 < 1) and (1 > -1)
• 0 < 1 → True
• 1 > -1 → True
• True and True → True

How it works:
1. 0 < 1 → True
2. 1 > -1 → True (1 is greater than negative 1)
3. Result: True

Negative numbers work normally in chained comparisons. The chain expands to pairwise 'and' just like positive numbers.

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
  // 65. Chained comparison with ==
  (_i: number) => ({
    q: `What is the result of: 1 == 1 < 2?`,
    o: ['True', 'False', 'Error', 'None'],
    c: 0,
    e: "Chained: 1 == 1 and 1 < 2, both True.",
    de: `Python chains == with < just like any other comparison operators.

Key concepts:
• 1 == 1 < 2 means (1 == 1) and (1 < 2)
• 1 == 1 → True
• 1 < 2 → True
• True and True → True

How it works:
1. 1 == 1 → True
2. 1 < 2 → True
3. Result: True

Important: This is NOT (1 == 1) < 2 which would be True < 2 → True (since True == 1 < 2). The chained interpretation gives the same answer here but for different reasons.

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
  // 66. Range check via chaining
  (_i: number) => ({
    q: `x = 5\nWhat is the result of: 1 <= x <= 10?`,
    o: ['True', 'False', 'Error', 'None'],
    c: 0,
    e: "Chained range check: 1 <= 5 and 5 <= 10, both True.",
    de: `Chained comparisons enable elegant range checks in Python, equivalent to "is x between 1 and 10 inclusive?".

Key concepts:
• 1 <= x <= 10 means (1 <= x) and (x <= 10)
• With x = 5: 1 <= 5 → True, 5 <= 10 → True
• True and True → True
• Much cleaner than: x >= 1 and x <= 10

How it works:
1. 1 <= 5 → True
2. 5 <= 10 → True
3. Result: True

This is one of Python's most Pythonic features — range checking in a single, readable expression.

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
  // 67. Range check that fails
  (_i: number) => ({
    q: `x = 15\nWhat is the result of: 1 <= x <= 10?`,
    o: ['False', 'True', 'Error', 'None'],
    c: 0,
    e: "15 is not in range [1, 10]: 1 <= 15 is True, but 15 <= 10 is False.",
    de: `When the value falls outside the range, at least one comparison in the chain fails.

Key concepts:
• 1 <= x <= 10 with x = 15
• 1 <= 15 → True
• 15 <= 10 → False
• True and False → False

How it works:
1. 1 <= 15 → True (15 is at least 1)
2. 15 <= 10 → False (15 is not at most 10)
3. Result: False

The chain short-circuits when it hits False — if the first comparison were False, the second wouldn't even be evaluated.

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
  // 68. Truthy check before method call
  (_i: number) => ({
    q: `x = "hello"\nWhat is the result of: x and len(x) > 3?`,
    o: ['True', 'False', '""', 'None'],
    c: 0,
    e: "x is truthy ('hello'), so len('hello') > 3 → 5 > 3 → True.",
    de: `The pattern 'x and operation_on_x' is a safe-check idiom: only perform the operation if x is truthy.

Key concepts:
• x = "hello" is truthy (non-empty string)
• Since x is truthy, 'and' evaluates the right side
• len("hello") = 5, 5 > 3 → True
• 'and' returns the last evaluated value: True

How it works:
1. x → "hello" (truthy, continue to right side)
2. len("hello") → 5
3. 5 > 3 → True
4. Result: True

This pattern prevents errors when x might be None or empty — the len() call is only reached if x is truthy.

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
  // 69. Short-circuit returns falsy value
  (_i: number) => ({
    q: `x = ""\nWhat is the result of: x and len(x) > 3?`,
    o: ['""', 'False', 'True', 'None'],
    c: 0,
    e: "x is '' (falsy), so 'and' short-circuits and returns '' without evaluating len(x).",
    de: `When the left operand of 'and' is falsy, Python short-circuits and returns it immediately — the right side is never evaluated.

Key concepts:
• x = "" is falsy (empty string)
• 'and' short-circuits: returns "" immediately
• len(x) > 3 is NEVER evaluated
• The return value is "" (the actual falsy object), not False

How it works:
1. x → "" (falsy, short-circuit)
2. Return "" (the left operand itself)
3. len(x) > 3 is skipped entirely

Important: 'and' returns the actual object, not a boolean. "" and anything → "". This is why Python's and/or are sometimes called "value-returning" operators.

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
  // 70. None short-circuits before attribute access
  (_i: number) => ({
    q: `x = None\nWhat is the result of: x and x.strip()?`,
    o: ['None', 'Error', '""', 'False'],
    c: 0,
    e: "x is None (falsy), so 'and' short-circuits and returns None. x.strip() is never called.",
    de: `This is the "guard clause" pattern — using 'and' to prevent AttributeError on None.

Key concepts:
• x = None is falsy
• 'and' short-circuits: returns None immediately
• x.strip() is NEVER called (avoids AttributeError)
• Without the guard: None.strip() → AttributeError

How it works:
1. x → None (falsy, short-circuit)
2. Return None
3. x.strip() is skipped — no error!

This is a common defensive pattern:
• x and x.method() — safe if x might be None
• Similar to x?.method() in other languages (optional chaining)
• Python 3.10+ has no ?. operator, so this 'and' pattern remains standard.

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
  // 71. dict.get() returns None (falsy), or-fallback triggers
  (_i: number) => ({
    q: `d = {"a": 1}\nWhat is d.get("b") or "missing"?`,
    o: ['"missing"', 'None', '1', 'Error'],
    c: 0,
    e: "d.get('b') returns None (falsy), so 'or' returns 'missing'.",
    de: `The pattern value_or_none or default is a common fallback idiom.

Key concepts:
• d.get("b") → None (key "b" doesn't exist, default is None)
• None is falsy
• None or "missing" → "missing" (or returns right side when left is falsy)

How it works:
1. d.get("b") → None
2. None or "missing" → "missing"
3. Result: "missing"

This works well when None/empty should trigger the fallback, but beware: it also triggers for 0, False, "", [] — any falsy value (see question 73 for the pitfall).

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
  // 72. dict.get() returns truthy value, or-fallback skipped
  (_i: number) => ({
    q: `d = {"a": 1}\nWhat is d.get("a") or "missing"?`,
    o: ['1', '"missing"', 'None', 'Error'],
    c: 0,
    e: "d.get('a') returns 1 (truthy), so 'or' short-circuits and returns 1.",
    de: `When dict.get() finds the key, it returns the value. If that value is truthy, 'or' short-circuits.

Key concepts:
• d.get("a") → 1 (key exists, value is 1)
• 1 is truthy
• 1 or "missing" → 1 (short-circuit, right side skipped)

How it works:
1. d.get("a") → 1
2. 1 or "missing" → 1 (truthy, short-circuit)
3. Result: 1

The 'or' fallback pattern works perfectly when the expected values are always truthy (strings, positive numbers, non-empty containers).

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
  // 73. The 0-is-falsy bug pattern with or
  (_i: number) => ({
    q: `d = {"a": 0}\nWhat is d.get("a") or "missing"?`,
    o: ['"missing"', '0', 'None', 'Error'],
    c: 0,
    e: "d.get('a') returns 0, which is falsy! So 'or' returns 'missing' — a common bug.",
    de: `This is a classic Python bug: using 'or' for defaults when the value could be 0, False, or "".

Key concepts:
• d.get("a") → 0 (key exists! value is 0)
• But 0 is falsy in Python
• 0 or "missing" → "missing" (0 is falsy, so 'or' returns right side)
• The key EXISTS but we get "missing" — a silent bug!

How it works:
1. d.get("a") → 0
2. 0 is falsy → or evaluates right side
3. 0 or "missing" → "missing"
4. Result: "missing" (WRONG if you wanted 0)

Fix: Use d.get("a", "missing") which only uses the default when the key is MISSING, not when the value is falsy. See next question.

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
  // 74. Correct default with .get() second parameter
  (_i: number) => ({
    q: `d = {"a": 0}\nWhat is d.get("a", "missing")?`,
    o: ['0', '"missing"', 'None', 'Error'],
    c: 0,
    e: "d.get() with a default only uses it when the key is absent. Key 'a' exists, so it returns 0.",
    de: `dict.get(key, default) returns the default ONLY when the key is not found — it doesn't care about truthiness.

Key concepts:
• d.get("a", "missing") — key "a" exists with value 0
• Since key exists, returns 0 (regardless of truthiness)
• d.get("b", "missing") → "missing" (key "b" doesn't exist)
• This is the CORRECT way to handle defaults

How it works:
1. Check if "a" is in d → Yes
2. Return d["a"] → 0
3. "missing" is ignored because key was found

Compare with 'or' pattern:
• d.get("a") or "missing" → "missing" (BUG: 0 is falsy)
• d.get("a", "missing") → 0 (CORRECT: key exists)

Rule: Use .get(key, default) for dict defaults, not .get(key) or default.

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
  // 75. any() with generator expression
  (_i: number) => ({
    q: `What is the result of: any(c.isdigit() for c in "abc123")?`,
    o: ['True', 'False', 'Error', 'None'],
    c: 0,
    e: "any() returns True because at least one character ('1', '2', or '3') is a digit.",
    de: `any() returns True if at least one element of the iterable is truthy. With a generator expression, it checks each character.

Key concepts:
• Iterates over each character in "abc123"
• c.isdigit(): 'a'→False, 'b'→False, 'c'→False, '1'→True (stops here!)
• any() short-circuits on the first True
• Result: True

How it works:
1. 'a'.isdigit() → False (continue)
2. 'b'.isdigit() → False (continue)
3. 'c'.isdigit() → False (continue)
4. '1'.isdigit() → True (short-circuit, return True)
5. '2' and '3' are never checked

any() is efficient: it stops as soon as it finds one truthy value, just like 'or' in a chain.

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
  // 76. all() returns True when all elements match
  (_i: number) => ({
    q: `What is the result of: all(c.isalpha() for c in "abcdef")?`,
    o: ['True', 'False', 'Error', 'None'],
    c: 0,
    e: "all() returns True because every character in 'abcdef' is alphabetic.",
    de: `all() returns True if every element of the iterable is truthy. If any element is falsy, it returns False.

Key concepts:
• Iterates over each character in "abcdef"
• 'a'.isalpha()→True, 'b'→True, ... 'f'→True
• All are True → all() returns True

How it works:
1. 'a'.isalpha() → True (continue)
2. 'b'.isalpha() → True (continue)
3. ... all True
4. 'f'.isalpha() → True (end of iterable)
5. Result: True

all() short-circuits on the first False — if it finds one falsy element, it returns False immediately.

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
  // 77. all() returns False when one element fails
  (_i: number) => ({
    q: `What is the result of: all(c.isalpha() for c in "abc123")?`,
    o: ['False', 'True', 'Error', 'None'],
    c: 0,
    e: "all() returns False because '1', '2', '3' are not alphabetic.",
    de: `all() requires every element to be truthy. As soon as one is falsy, it short-circuits and returns False.

Key concepts:
• Iterates over "abc123"
• 'a'.isalpha()→True, 'b'→True, 'c'→True
• '1'.isalpha()→False → all() short-circuits, returns False

How it works:
1. 'a'.isalpha() → True (continue)
2. 'b'.isalpha() → True (continue)
3. 'c'.isalpha() → True (continue)
4. '1'.isalpha() → False (short-circuit, return False)
5. '2' and '3' are never checked

all() is the counterpart to any():
• any() = at least one True
• all() = every single one True

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
  // 78. Counting with generator expression
  (_i: number) => ({
    q: `What is the result of: sum(1 for x in [1,2,3,4,5] if x > 3)?`,
    o: ['2', '3', '5', '1'],
    c: 0,
    e: "Generator yields 1 for each x > 3 (x=4 and x=5), sum is 2.",
    de: `sum() with a conditional generator expression is a Pythonic way to count items matching a condition.

Key concepts:
• Generator: (1 for x in [1,2,3,4,5] if x > 3)
• x=1: skip (1>3 False)
• x=2: skip (2>3 False)
• x=3: skip (3>3 False)
• x=4: yield 1 (4>3 True)
• x=5: yield 1 (5>3 True)
• sum(1, 1) = 2

How it works:
1. Filter: only x=4 and x=5 satisfy x > 3
2. For each, yield 1
3. sum([1, 1]) → 2

Alternative: len([x for x in [1,2,3,4,5] if x > 3]) — but the generator version uses less memory since it doesn't create a list.

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
  // 79. List comprehension with filter
  (_i: number) => ({
    q: `What is the result of: [x for x in [1,2,3,4,5] if x > 3]?`,
    o: ['[4, 5]', '[3, 4, 5]', '[4]', '[5]'],
    c: 0,
    e: "Filters elements > 3: only 4 and 5 pass the condition.",
    de: `A list comprehension with an if clause filters elements from the source iterable.

Key concepts:
• [x for x in iterable if condition]
• x=1: 1>3 False, skip
• x=2: 2>3 False, skip
• x=3: 3>3 False, skip (3 is NOT greater than 3)
• x=4: 4>3 True, include
• x=5: 5>3 True, include
• Result: [4, 5]

How it works:
1. Iterate [1, 2, 3, 4, 5]
2. Apply condition x > 3
3. Keep elements where condition is True
4. Result: [4, 5]

Note: x > 3 is strict greater-than, so 3 is excluded. For x >= 3, result would be [3, 4, 5].

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
  // 80. any() with startswith
  (_i: number) => ({
    q: `What is any(word.startswith("py") for word in ["python","java","php"])?`,
    o: ['True', 'False', 'Error', 'None'],
    c: 0,
    e: "'python'.startswith('py') is True, so any() returns True.",
    de: `any() combined with startswith() is a powerful pattern for checking if any string in a collection matches a prefix.

Key concepts:
• Checks each word: does it start with "py"?
• "python".startswith("py") → True (short-circuit!)
• "java" and "php" are never checked

How it works:
1. "python".startswith("py") → True
2. any() short-circuits → True
3. Result: True

Common use cases:
• Checking if any file matches: any(f.endswith(".py") for f in files)
• Checking if any URL matches: any(url.startswith("https") for url in urls)
• Validating input against allowed prefixes

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
  // 81. all() fails on one short string
  (_i: number) => ({
    q: `What is all(len(w) > 2 for w in ["hi","hello","hey"])?`,
    o: ['False', 'True', 'Error', 'None'],
    c: 0,
    e: "len('hi') is 2, which is not > 2. all() returns False.",
    de: `all() requires every element to satisfy the condition. "hi" has length 2, which fails len(w) > 2.

Key concepts:
• "hi": len=2, 2>2 → False (short-circuit!)
• "hello": never checked
• "hey": never checked
• Result: False

How it works:
1. len("hi") → 2
2. 2 > 2 → False (not strictly greater)
3. all() short-circuits → False

Important: > is strict. len("hi") > 2 is False because 2 is not greater than 2. Use >= 2 if you want "at least 2".

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
  // 82. max() with key function
  (_i: number) => ({
    q: `What is max([1,2,3,4,5], key=lambda x: x % 3)?`,
    o: ['2', '5', '4', '1'],
    c: 0,
    e: "x%3 values: 1→1, 2→2, 3→0, 4→1, 5→2. Max remainder is 2 (first occurrence), so result is 2.",
    de: `max() with a key function finds the element whose key value is greatest. When there's a tie, the first element wins.

Key concepts:
• key=lambda x: x % 3 computes remainder when divided by 3
• 1 % 3 = 1
• 2 % 3 = 2 ← highest remainder
• 3 % 3 = 0
• 4 % 3 = 1
• 5 % 3 = 2 ← tied with 2, but 2 came first

How it works:
1. Compute keys: [1, 2, 0, 1, 2]
2. Max key value: 2
3. First element with key 2: element 2 (at index 1)
4. Result: 2

When keys tie, max() returns the first element with the maximum key — it's stable in that sense.

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
  // 83. min() with negation key finds the maximum
  (_i: number) => ({
    q: `What is min([1,2,3,4,5], key=lambda x: -x)?`,
    o: ['5', '1', '3', '-5'],
    c: 0,
    e: "Negated keys: -1,-2,-3,-4,-5. min picks -5, which corresponds to original element 5.",
    de: `Using a negation key with min() effectively finds the maximum — a clever trick.

Key concepts:
• key=lambda x: -x negates each value for comparison
• Keys: -1, -2, -3, -4, -5
• min of keys: -5 (corresponds to original value 5)
• Returns the original element (5), not the key (-5)

How it works:
1. Compute keys: [-1, -2, -3, -4, -5]
2. Minimum key: -5
3. Element with key -5: 5
4. Result: 5

This trick is useful when you need max() behavior but only have min(), or for reverse sorting: sorted(lst, key=lambda x: -x).

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
  // 84. Sorting booleans
  (_i: number) => ({
    q: `What is sorted([True, False, True, False])?`,
    o: ['[False, False, True, True]', '[True, True, False, False]', '[True, False, True, False]', 'Error'],
    c: 0,
    e: "False is 0, True is 1. Sorting ascending puts False (0) before True (1).",
    de: `In Python, bool is a subclass of int: False == 0 and True == 1. Sorting treats them as integers.

Key concepts:
• False == 0, True == 1
• sorted() sorts ascending by default
• 0, 0, 1, 1 → [False, False, True, True]
• The sorted values are still booleans, not integers

How it works:
1. Convert to sort keys: [1, 0, 1, 0]
2. Sort ascending: [0, 0, 1, 1]
3. Map back: [False, False, True, True]
4. Result: [False, False, True, True]

Since bool subclasses int, booleans can be used in arithmetic, sorting, and anywhere integers are expected.

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
  // 85. List comparison element-by-element
  (_i: number) => ({
    q: `What is the result of: [False, True] < [True, False]?`,
    o: ['True', 'False', 'Error', 'None'],
    c: 0,
    e: "Lists compare element-by-element. First element: False (0) < True (1) → True.",
    de: `Python compares lists lexicographically — element by element, left to right, stopping at the first difference.

Key concepts:
• Compare first elements: False vs True
• False < True → True (because 0 < 1)
• Comparison stops at first difference
• Second elements are never compared

How it works:
1. Compare index 0: False < True → True (0 < 1)
2. First difference found → return True
3. Index 1 is never compared

List comparison rules:
• Compare element by element
• Stop at first difference
• If all compared elements equal, shorter list is "less"
• [1, 2] < [1, 3] → True (differ at index 1)
• [1, 2] < [1, 2, 3] → True (prefix, shorter is less)

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
  // 86. Lambda with conditional expression
  (_i: number) => ({
    q: `What is (lambda x: "even" if x % 2 == 0 else "odd")(4)?`,
    o: ['"even"', '"odd"', 'Error', 'None'],
    c: 0,
    e: "4 % 2 == 0 is True, so the lambda returns 'even'.",
    de: `Lambda functions can contain conditional (ternary) expressions: value_if_true if condition else value_if_false.

Key concepts:
• Lambda: lambda x: "even" if x % 2 == 0 else "odd"
• Called with x = 4
• 4 % 2 = 0, 0 == 0 → True
• Returns "even"

How it works:
1. Call lambda with x = 4
2. Evaluate condition: 4 % 2 == 0 → True
3. Condition is True → return "even"

Ternary in lambda is the only way to do conditional logic since lambda doesn't support if/elif/else statements.

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
  // 87. Lambda conditional — odd case
  (_i: number) => ({
    q: `What is (lambda x: "even" if x % 2 == 0 else "odd")(7)?`,
    o: ['"odd"', '"even"', 'Error', 'None'],
    c: 0,
    e: "7 % 2 == 1, not 0, so the condition is False and the lambda returns 'odd'.",
    de: `The same lambda as before, but with an odd number.

Key concepts:
• Lambda: lambda x: "even" if x % 2 == 0 else "odd"
• Called with x = 7
• 7 % 2 = 1, 1 == 0 → False
• Returns "odd"

How it works:
1. Call lambda with x = 7
2. Evaluate condition: 7 % 2 == 0 → False
3. Condition is False → return "odd"

The ternary expression always has exactly two outcomes. For more branches, you'd need nested ternaries or a regular function with if/elif/else.

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
  // 88. Nested ternary — middle branch
  (_i: number) => ({
    q: `x = 5\nresult = "a" if x > 10 else "b" if x > 3 else "c"\nWhat is result?`,
    o: ['"b"', '"a"', '"c"', 'Error'],
    c: 0,
    e: "x=5: x > 10 is False, so evaluate 'b' if x > 3 else 'c'. x > 3 is True → 'b'.",
    de: `Nested ternary expressions chain from right to left: a if C1 else b if C2 else c.

Key concepts:
• Parsed as: "a" if x > 10 else ("b" if x > 3 else "c")
• x = 5
• x > 10 → False → go to else branch
• Else branch: "b" if x > 3 else "c"
• x > 3 → True → result is "b"

How it works step by step:
1. Check x > 10: 5 > 10 → False
2. Go to else: "b" if x > 3 else "c"
3. Check x > 3: 5 > 3 → True
4. Return "b"

Nested ternaries can be hard to read. For 3+ branches, prefer if/elif/else statements.

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
  // 89. Nested ternary — last branch
  (_i: number) => ({
    q: `x = 1\nresult = "a" if x > 10 else "b" if x > 3 else "c"\nWhat is result?`,
    o: ['"c"', '"b"', '"a"', 'Error'],
    c: 0,
    e: "x=1: x > 10 is False, x > 3 is also False, so result is 'c'.",
    de: `When all conditions in a nested ternary are False, the final else value is returned.

Key concepts:
• "a" if x > 10 else ("b" if x > 3 else "c")
• x = 1
• x > 10 → False → go to inner ternary
• x > 3 → False → return "c"

How it works step by step:
1. Check x > 10: 1 > 10 → False
2. Go to else: "b" if x > 3 else "c"
3. Check x > 3: 1 > 3 → False
4. Return "c"

This is equivalent to: if x > 10: "a" / elif x > 3: "b" / else: "c".

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
  // 90. List comprehension with compound condition
  (_i: number) => ({
    q: `What is [i for i in range(10) if i % 2 == 0 and i % 3 == 0]?`,
    o: ['[0, 6]', '[0, 2, 3, 6]', '[6]', '[0, 3, 6, 9]'],
    c: 0,
    e: "Numbers 0-9 that are divisible by both 2 AND 3: 0 and 6.",
    de: `This comprehension filters for numbers divisible by both 2 and 3 (i.e., divisible by 6).

Key concepts:
• range(10) → 0, 1, 2, ..., 9
• Condition: i % 2 == 0 AND i % 3 == 0
• Both conditions must be True (and operator)
• 0: 0%2=0 ✓, 0%3=0 ✓ → include
• 6: 6%2=0 ✓, 6%3=0 ✓ → include
• Others fail at least one condition

How it works:
• 0: both ✓
• 1: 1%2≠0 ✗
• 2: 2%3≠0 ✗
• 3: 3%2≠0 ✗
• 4: 4%3≠0 ✗
• 5: both ✗
• 6: both ✓
• 7-9: at least one ✗
• Result: [0, 6]

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
  // 91. Counting multiples with comprehension
  (_i: number) => ({
    q: `What is len([x for x in range(100) if x % 7 == 0])?`,
    o: ['15', '14', '13', '16'],
    c: 0,
    e: "Multiples of 7 from 0 to 99: 0, 7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98 — that's 15.",
    de: `This counts how many multiples of 7 exist in range(100) (0 to 99 inclusive).

Key concepts:
• range(100) → 0, 1, 2, ..., 99
• x % 7 == 0 selects multiples of 7
• Multiples: 0, 7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98
• Count: 15

How it works:
• 0×7=0, 1×7=7, 2×7=14, ..., 14×7=98
• 15×7=105 > 99, so stop
• 15 multiples total (including 0)

Common mistake: Forgetting to count 0. Zero is divisible by every non-zero integer (0 % 7 == 0 is True).

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
  // 92. next() with generator expression
  (_i: number) => ({
    q: `What is next(x for x in [1, 2, 3, 4, 5] if x > 3)?`,
    o: ['4', '5', '3', 'Error'],
    c: 0,
    e: "next() returns the first item from the generator where x > 3, which is 4.",
    de: `next() retrieves the next (first) item from an iterator or generator. Combined with a filtered generator, it finds the first match.

Key concepts:
• Generator: (x for x in [1,2,3,4,5] if x > 3)
• Yields: 4, 5 (lazily, only as requested)
• next() takes the first yielded value: 4
• Elements 1, 2, 3 are skipped (x > 3 is False)
• Element 5 is never reached (next() only takes one)

How it works:
1. Generator starts iterating
2. x=1: 1>3 False, skip
3. x=2: 2>3 False, skip
4. x=3: 3>3 False, skip
5. x=4: 4>3 True → yield 4
6. next() receives 4, stops
7. Result: 4

next() with a default: next(gen, default) avoids StopIteration if nothing matches.

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
  // 93. NaN is truthy
  (_i: number) => ({
    q: `What is bool(float("nan"))?`,
    o: ['True', 'False', 'Error', 'None'],
    c: 0,
    e: "NaN (Not a Number) is truthy — only 0.0 is falsy for floats.",
    de: `float("nan") creates a NaN (Not a Number) value. Despite being "not a number", it is truthy.

Key concepts:
• float("nan") → nan
• bool(nan) → True (NaN is truthy!)
• Only float(0.0) and float(-0.0) are falsy for floats
• NaN is truthy even though nan == nan is False
• NaN != NaN is True (NaN is not equal to itself)

How it works:
1. float("nan") creates a NaN value
2. bool() checks: is it zero? No → True
3. Result: True

NaN quirks:
• nan == nan → False (only value not equal to itself)
• nan != nan → True
• bool(nan) → True
• math.isnan(nan) → True (correct way to check for NaN)

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
  // 94. Infinity is truthy
  (_i: number) => ({
    q: `What is bool(float("inf"))?`,
    o: ['True', 'False', 'Error', 'None'],
    c: 0,
    e: "Infinity is truthy — it's a non-zero float value.",
    de: `float("inf") creates positive infinity. Like any non-zero float, it's truthy.

Key concepts:
• float("inf") → inf (positive infinity)
• float("-inf") → -inf (negative infinity)
• Both are truthy (non-zero)
• Only 0.0 is falsy for floats
• inf > any finite number → True
• inf == inf → True (unlike NaN)

How it works:
1. float("inf") → inf
2. bool(inf) → True (non-zero)
3. Result: True

Infinity behaves normally in comparisons (inf > 1000000 → True) but produces special results in arithmetic (inf + 1 → inf, inf - inf → nan).

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
  // 95. True == 1
  (_i: number) => ({
    q: `What is the result of: True == 1?`,
    o: ['True', 'False', 'Error', 'None'],
    c: 0,
    e: "bool is a subclass of int. True has integer value 1, so True == 1 is True.",
    de: `In Python, bool is a subclass of int. True is literally equal to 1, and False is equal to 0.

Key concepts:
• isinstance(True, int) → True
• True == 1 → True
• True == 1.0 → True (int-float comparison)
• hash(True) == hash(1) → True
• They are considered the same value in many contexts

How it works:
1. True == 1 uses int comparison
2. int(True) is 1
3. 1 == 1 → True

This has important implications:
• {True: "a", 1: "b"} → {True: "b"} (same key!)
• [True, False].count(1) → 1 (True == 1)
• sum([True, True, False]) → 2 (adds as 1+1+0)

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
  // 96. False == 0
  (_i: number) => ({
    q: `What is the result of: False == 0?`,
    o: ['True', 'False', 'Error', 'None'],
    c: 0,
    e: "bool is a subclass of int. False has integer value 0, so False == 0 is True.",
    de: `Just as True == 1, False == 0 because bool subclasses int.

Key concepts:
• isinstance(False, int) → True
• False == 0 → True
• False == 0.0 → True
• hash(False) == hash(0) → True
• int(False) → 0

How it works:
1. False == 0 uses int comparison
2. int(False) is 0
3. 0 == 0 → True

This means:
• if x == 0: will match when x is False
• if x is False: checks identity, not equality (stricter)
• Use 'is' when you specifically want to check for False vs 0

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
  // 97. True + 1 arithmetic
  (_i: number) => ({
    q: `What is the result of: True + 1?`,
    o: ['2', 'True', 'Error', 'TypeError'],
    c: 0,
    e: "True is 1 in integer context. 1 + 1 = 2.",
    de: `Since bool is a subclass of int, booleans can be used in arithmetic operations directly.

Key concepts:
• True + 1 → 1 + 1 → 2
• The result is an int, not a bool
• type(True + 1) → <class 'int'>
• Python automatically uses True's integer value (1)

How it works:
1. True treated as int: 1
2. 1 + 1 = 2
3. Result: 2 (type: int)

Practical uses:
• sum([True, True, False, True]) → 3 (counts True values)
• total = passed + 1 (if passed is a bool, this works)
• [True, False, True].count(True) works because True == 1

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
  // 98. False + 0 arithmetic
  (_i: number) => ({
    q: `What is the result of: False + 0?`,
    o: ['0', 'False', 'Error', 'TypeError'],
    c: 0,
    e: "False is 0 in integer context. 0 + 0 = 0.",
    de: `False behaves as 0 in arithmetic, just as True behaves as 1.

Key concepts:
• False + 0 → 0 + 0 → 0
• The result is an int, not a bool
• type(False + 0) → <class 'int'>
• False * 100 → 0
• False ** 0 → 1 (any number to power 0 is 1)

How it works:
1. False treated as int: 0
2. 0 + 0 = 0
3. Result: 0 (type: int)

Note: The result is int 0, not bool False, even though 0 == False is True. Arithmetic on bools returns int.

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
  // 99. Equal keys in dict: first key kept, last value wins
  (_i: number) => ({
    q: `What is {True: "a", 1: "b", 1.0: "c"}?`,
    o: ['{True: "c"}', '{True: "a", 1: "b", 1.0: "c"}', '{1: "c"}', 'Error'],
    c: 0,
    e: "True == 1 == 1.0, so they're the same key. First key (True) kept, last value ('c') wins.",
    de: `When keys are equal (==) and have the same hash, Python treats them as the same dictionary key.

Key concepts:
• True == 1 == 1.0 → all equal
• hash(True) == hash(1) == hash(1.0) → all same hash
• Dict keeps the FIRST key but updates to the LAST value
• {True: "a"} → {True: "b"} → {True: "c"}

How it works step by step:
1. Insert True: "a" → {True: "a"}
2. Insert 1: "b" → key 1 == True, same slot, update value → {True: "b"}
3. Insert 1.0: "c" → key 1.0 == True, same slot, update value → {True: "c"}
4. Result: {True: "c"}

The first key inserted is preserved (True, not 1 or 1.0), but each subsequent equal key overwrites the value.

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
  // 100. False == 0 == 0.0 in list.count()
  (_i: number) => ({
    q: `What is [False, 0, 0.0].count(0)?`,
    o: ['3', '1', '2', '0'],
    c: 0,
    e: "False == 0 == 0.0, so count(0) matches all three elements.",
    de: `list.count() uses equality (==) to compare. Since False, 0, and 0.0 are all equal, count(0) counts all of them.

Key concepts:
• False == 0 → True
• 0 == 0.0 → True
• False == 0.0 → True
• All three are "equal" to 0 by ==
• count(0) finds 3 matches

How it works:
1. Check False == 0 → True (match #1)
2. Check 0 == 0 → True (match #2)
3. Check 0.0 == 0 → True (match #3)
4. Result: 3

This is a direct consequence of bool subclassing int:
• [False, 0, 0.0].count(False) → also 3
• [False, 0, 0.0].count(0.0) → also 3
• They all count each other because they're all equal

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
