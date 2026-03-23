import { PersonaStage } from '../../types';

// --- LEVEL 3: CRAB (Conditionals, Booleans, Logic) - 100 TRULY UNIQUE QUESTIONS ---
// Each question tests a DIFFERENT concept - NO number/variable variations of the same question
export const level3Patterns = [
  // 1-10: Basic Boolean Logic
  (_i: number) => ({ 
    q: `Result of True and False?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "and needs both to be True.",
    de: `The and operator returns True only if both operands are True. True and False evaluates to False because the second operand is False. The and operator requires both conditions to be True for the result to be True.

and operator:
• True and False = False
• Returns True only if both are True
• Returns False if either is False
• Requires both conditions to be True

How it works:
• Evaluates left operand first: True
• Evaluates right operand: False
• True and False = False
• Returns False if either is False

Examples:
• True and True = True (both True)
• True and False = False (second False)
• False and True = False (first False)
• False and False = False (both False)

Common uses:
• Multiple conditions: if x > 0 and x < 100:
• Validation checks: if valid and available:
• Compound conditions
• Guard clauses

Example: True and False returns False because the and operator requires both operands to be True, but False is not True.

Key Distinctions:
• and is logical conjunction: both operands must be truthy for the result to be True.
• or with the same pair would be True because the left operand True is enough.

How It Works:
• Python evaluates both literal booleans; the right side is falsy, so and yields False.

Step-by-Step Execution:
• 1. Evaluate True. 2. Evaluate False. 3. Apply and -> False.

Order of Operations:
• and has lower precedence than not; no not in this expression.

Common Use Cases:
• Requiring every flag in a compound permission check.

Edge Cases:
• With objects, and returns the first falsy value or the last truthy one.

Performance Considerations:
• Constant-time on bools.

Examples:
• True and True -> True; True and 0 -> 0 (short-circuit on falsy).

Notes:
• Prefer explicit if x is not None over truth tests when None is special.`
  }),
  (_i: number) => ({ 
    q: `Result of True or False?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "or needs only one to be True.",
    de: `The or operator returns True if at least one operand is True. True or False evaluates to True because the first operand is True. The or operator requires only one condition to be True for the result to be True.

or operator:
• True or False = True
• Returns True if at least one is True
• Returns False only if both are False
• Requires only one condition to be True

How it works:
• Evaluates left operand first: True
• Short-circuits: returns True immediately (doesn't evaluate right)
• True or False = True
• Returns True if either is True

Examples:
• True or True = True (both True)
• True or False = True (first True)
• False or True = True (second True)
• False or False = False (both False)

Short-circuiting:
• If first is True, second not evaluated
• Efficient for expensive operations
• Use for fallbacks: value or default_value

Common uses:
• Alternative conditions: if x == 5 or x == 10:
• Default values: result = value or default
• Compound conditions
• Fallback values

Example: True or False returns True because the or operator requires only one operand to be True, and the first operand (True) satisfies this condition.

Key Distinctions:
• or returns True when at least one operand is True; True on the left is sufficient.
• and(True, False) would be False — stricter than this or expression.

How It Works:
• The first operand True makes or True without needing the second for the boolean outcome.

Step-by-Step Execution:
• 1. Left operand True. 2. or short-circuits to True for this bool case.

Order of Operations:
• or binds less tightly than conditional if-else; not used here.

Common Use Cases:
• Default parameters, feature toggles, validation with multiple allowed passes.

Edge Cases:
• or among objects returns the first truthy object, not necessarily True.

Performance Considerations:
• Trivial cost.

Examples:
• False or True -> True; [] or 'default' -> 'default'.

Notes:
• Chain: label or 'unknown' for optional strings.`
  }),
  (_i: number) => ({ 
    q: `Result of False and False?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "Both must be True for and.",
    de: `The and operator returns True only if both operands are True. False and False evaluates to False because both operands are False. The and operator requires both conditions to be True for the result to be True.

and operator:
• False and False = False
• Returns True only if both are True
• Returns False if either is False
• Both are False, so result is False

How it works:
• Evaluates left operand: False
• Short-circuits: returns False immediately (doesn't evaluate right)
• False and False = False
• Returns False if either is False

Examples:
• False and False = False (both False)
• False and True = False (first False)
• True and False = False (second False)
• True and True = True (both True)

Short-circuiting:
• If first is False, second not evaluated
• Efficient for expensive operations
• Use for validation: if x > 0 and expensive_check(x)

Common uses:
• Multiple conditions: if x > 0 and x < 100:
• Validation checks: if valid and available:
• Compound conditions

Example: False and False returns False because the and operator requires both operands to be True, but both are False.

Key Distinctions:
• and needs both sides truthy; two False operands cannot yield True.
• or(False, False) is also False, but only one operand needs to be True for or to succeed.

How It Works:
• Both operands are False, so conjunction is False.

Step-by-Step Execution:
• 1. Left False. 2. Right False. 3. and -> False.

Order of Operations:
• Plain boolean and without not or comparisons.

Common Use Cases:
• Showing that two guards both failed.

Edge Cases:
• Short-circuit: second operand still evaluated for literal False and False.

Performance Considerations:
• Negligible.

Examples:
• False and True -> False.

Notes:
• Combine with not for De Morgan rewrites in larger predicates.`
  }),
  (_i: number) => ({ 
    q: `Result of False or False?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "At least one must be True for or.",
    de: `The or operator returns True if at least one operand is True. False or False evaluates to False because both operands are False. The or operator requires at least one condition to be True for the result to be True.

or operator:
• False or False = False
• Returns True if at least one is True
• Returns False only if both are False
• Both are False, so result is False

How it works:
• Evaluates left operand: False
• Evaluates right operand: False
• False or False = False
• Returns False if both are False

Examples:
• False or False = False (both False)
• False or True = True (second True)
• True or False = True (first True)
• True or True = True (both True)

Common uses:
• Alternative conditions: if x == 5 or x == 10:
• Default values: result = value or default
• Compound conditions
• Fallback values

Example: False or False returns False because the or operator requires at least one operand to be True, but both are False.

Key Distinctions:
• or is False only when no operand is truthy; both operands are False here.
• and(False, False) is False for a different logical reason (conjunction).

How It Works:
• Neither side is True, so or produces False.

Step-by-Step Execution:
• 1. First False. 2. Second False. 3. or -> False.

Order of Operations:
• Single or of two booleans.

Common Use Cases:
• Reporting that every branch in an or-chain failed.

Edge Cases:
• or among many literals: any True would flip the result.

Performance Considerations:
• Trivial.

Examples:
• False or False -> False; True or False -> True.

Notes:
• any([a, b, c]) mirrors repeated or for iterables.`
  }),
  (_i: number) => ({ 
    q: `Result of True and True?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "Both are True, so and returns True.",
    de: `The and operator returns True only if both operands are True. True and True evaluates to True because both operands are True. The and operator requires both conditions to be True for the result to be True.

and operator:
• True and True = True
• Returns True only if both are True
• Both are True, so result is True
• Requires both conditions to be True

How it works:
• Evaluates left operand: True
• Evaluates right operand: True
• True and True = True
• Returns True if both are True

Examples:
• True and True = True (both True)
• True and False = False (second False)
• False and True = False (first False)
• False and False = False (both False)

Common uses:
• Multiple conditions: if x > 0 and x < 100:
• Validation checks: if valid and available:
• Compound conditions
• Guard clauses

Example: True and True returns True because both operands are True, satisfying the and operator's requirement.

Key Distinctions:
• Both conjuncts are True, so the compound boolean is True.
• or(True, True) is True but does not model mutual requirement like and does.

How It Works:
• and is True only when every operand is truthy — satisfied here.

Step-by-Step Execution:
• 1. Left True. 2. Right True. 3. and -> True.

Order of Operations:
• Boolean and of two constants.

Common Use Cases:
• All preconditions met before a critical action.

Edge Cases:
• Mixing ints: 3 and 5 returns 5, not True — watch types.

Performance Considerations:
• Instant.

Examples:
• True and True -> True.

Notes:
• Use all(iterable) for many conjuncts instead of long and chains.`
  }),
  (_i: number) => ({ 
    q: `Result of True or True?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "At least one is True, so or returns True.",
    de: `The or operator returns True if at least one operand is True. True or True evaluates to True because both operands are True (so at least one is True). The or operator requires only one condition to be True for the result to be True.

or operator:
• True or True = True
• Returns True if at least one is True
• Both are True, so result is True
• Requires only one condition to be True

How it works:
• Evaluates left operand: True
• Short-circuits: returns True immediately (doesn't evaluate right)
• True or True = True
• Returns True if either is True

Examples:
• True or True = True (both True)
• True or False = True (first True)
• False or True = True (second True)
• False or False = False (both False)

Short-circuiting:
• If first is True, second not evaluated
• Efficient for expensive operations
• Use for fallbacks: value or default_value

Common uses:
• Alternative conditions: if x == 5 or x == 10:
• Default values: result = value or default
• Compound conditions
• Fallback values

Example: True or True returns True because the or operator requires only one operand to be True, and both operands are True.

Key Distinctions:
• or is True if any operand is True; two Trues still yield True.
• and(True, True) also yields True but with different meaning (all must hold).

How It Works:
• Either True makes or succeed; both are True here.

Step-by-Step Execution:
• 1. Left True. 2. or is already satisfied — result True.

Order of Operations:
• or of two boolean literals.

Common Use Cases:
• Redundant OR in generated or hand-written quizzes — simplify when reviewing.

Edge Cases:
• First truthy wins for object operands.

Performance Considerations:
• Trivial.

Examples:
• True or False -> True.

Notes:
• Avoid or True at end of expression unless documenting intent.`
  }),
  (_i: number) => ({ 
    q: `Result of not True?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "not inverts True to False.",
    de: `The not operator inverts (negates) the boolean value of an expression. not True evaluates to False because it inverts True to False. The not operator returns the opposite boolean value.

not operator:
• not True = False
• Inverts the boolean value
• Returns opposite boolean
• Works with any boolean expression

How it works:
• Takes boolean expression
• Inverts the result
• not True = False
• not False = True

Examples:
• not True = False
• not False = True
• not (5 > 3) = not True = False
• not (5 > 10) = not False = True

Common uses:
• Negating conditions: if not x == 0:
• Inverting boolean values
• Checking for "not equal"
• Guard clauses: if not valid:

Example: not True returns False because the not operator inverts True to False.

Key Distinctions:
• not inverts truth: True becomes False.
• Bitwise ~ is different — it operates on integer bits, not logical not.

How It Works:
• Unary not applies directly to True.

Step-by-Step Execution:
• 1. Operand True. 2. not yields False.

Order of Operations:
• not has high precedence; applies to True only.

Common Use Cases:
• Negating a single boolean flag.

Edge Cases:
• not not x is x for proper booleans.

Performance Considerations:
• Trivial.

Examples:
• not False -> True.

Notes:
• Use if not items: for empty containers — truthiness, not explicit not on list.`
  }),
  (_i: number) => ({ 
    q: `Result of not False?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "not inverts False to True.",
    de: `The not operator inverts (negates) the boolean value of an expression. not False evaluates to True because it inverts False to True. The not operator returns the opposite boolean value.

not operator:
• not False = True
• Inverts the boolean value
• Returns opposite boolean
• Works with any boolean expression

How it works:
• Takes boolean expression
• Inverts the result
• not False = True
• not True = False

Examples:
• not False = True
• not True = False
• not (5 > 10) = not False = True
• not (5 > 3) = not True = False

Common uses:
• Negating conditions: if not x == 0:
• Inverting boolean values
• Checking for "not equal"
• Guard clauses: if not valid:

Example: not False returns True because the not operator inverts False to True.

Key Distinctions:
• not False is True — double negation of False returns to truth.
• Comparing with == False is not the same as not, though results can match for bools.

How It Works:
• Unary not on False yields True.

Step-by-Step Execution:
• 1. Operand False. 2. not -> True.

Order of Operations:
• Single not on a bool.

Common Use Cases:
• Flipping a guard to allow the happy path.

Edge Cases:
• not 0 is True because 0 is falsy — different mechanism, same keyword.

Performance Considerations:
• Trivial.

Examples:
• not True -> False.

Notes:
• Prefer explicit is False for sentinel checks when None and False differ.`
  }),
  (_i: number) => ({ 
    q: `Result of not (True and False)?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "Parentheses first: True and False = False, then not False = True.",
    de: `Parentheses change the order of evaluation in boolean expressions. not (True and False) evaluates the expression inside parentheses first: True and False equals False. Then not False equals True. The parentheses force the and operation to happen before the not operation.

Order of operations:
• not (True and False)
• First: (True and False) = False (parentheses first)
• Then: not False = True (not operation)
• Result: True

How it works:
• Parentheses have highest precedence
• Evaluate inside parentheses first
• Then apply not operator
• Parentheses change evaluation order

Examples:
• not (True and False) = not False = True
• not (True and True) = not True = False
• (not True) and False = False and False = False (different!)

Common uses:
• Complex boolean expressions
• Changing evaluation order
• Grouping operations
• Logical expressions

Example: not (True and False) returns True because parentheses force True and False to evaluate first (resulting in False), then not False equals True.

Key Distinctions:
• Parentheses force (True and False) to False first; not then yields True.
• Without parens, not True and False parses as (not True) and False — a classic trap.

How It Works:
• Inner and is False; not negates it to True.

Step-by-Step Execution:
• 1. True and False -> False. 2. not False -> True.

Order of Operations:
• not applies to the parenthesized subexpression, not to True alone.

Common Use Cases:
• Negating a compound business rule for alternative logic.

Edge Cases:
• Always parenthesize when mixing not with and/or for readers and parsers.

Performance Considerations:
• Trivial.

Examples:
• not (A and B) differs from (not A) and B.

Notes:
• Document operator precedence in team style guides.`
  }),
  (_i: number) => ({ 
    q: `Result of not True or False?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "Operator precedence: not True = False, then False or False = False.",
    de: `Operator precedence determines the order of evaluation. In not True or False, the not operator has higher precedence than or, so not True evaluates first (equals False), then False or False equals False. Without parentheses, not binds tighter than or.

Operator precedence:
• not True or False
• First: not True = False (not has higher precedence)
• Then: False or False = False (or operation)
• Result: False

How it works:
• not has higher precedence than or
• not True evaluates first = False
• Then False or False = False
• Precedence determines evaluation order

Examples:
• not True or False = False or False = False
• (not True) or False = False or False = False (same)
• not (True or False) = not True = False (different!)

Precedence order:
• not (highest)
• and
• or (lowest)

Common uses:
• Understanding boolean precedence
• Complex boolean expressions
• Logical operations

Example: not True or False returns False because not has higher precedence than or, so not True evaluates first (False), then False or False equals False.

Key Distinctions:
• not binds tighter than or: this parses as (not True) or False, not not(True or False).
• (not True) is False; False or False is False — different from not(True or False) which is False too here.

How It Works:
• Left subexpression not True; then or with False.

Step-by-Step Execution:
• 1. not True -> False. 2. False or False -> False.

Order of Operations:
• not before or at this precedence level.

Common Use Cases:
• Illustrates why explicit parentheses beat memorizing tables alone.

Edge Cases:
• not (True or False) would be False — compare grouping on paper.

Performance Considerations:
• Trivial.

Examples:
• Add parentheses whenever reviewers misread precedence.

Notes:
• PEP 8 encourages spacing that clarifies boolean expressions.`
  }),
  
  // 11-20: Comparison Operators
  (_i: number) => ({ 
    q: `Result of 10 > 5?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "Greater than comparison.",
    de: `The > operator compares two values and returns True if the left operand is greater than the right operand. 10 > 5 returns True because 10 is greater than 5. Comparison operators are fundamental for conditional statements (if/elif/else) and boolean logic in Python.

Greater than operator:
• 10 > 5 = True (10 is greater than 5)
• Returns boolean (True/False)
• Used in conditional statements
• Works with numbers, strings, etc.

How it works:
• Compares left operand to right operand
• Returns True if left > right
• Returns False otherwise
• Essential for if statements

Common uses:
• Conditional statements: if x > 5:
• Range checking: if age > 18:
• Comparisons and sorting
• Boolean expressions in conditionals

Example: 10 > 5 returns True because 10 is greater than 5. This boolean result is commonly used in if statements: if 10 > 5: ...

Key Distinctions:
• > compares numbers; 10 is greater than 5, so the comparison is True.
• >= would also be True here; < would be False with operands swapped.

How It Works:
• Rich comparison calls PyObject_RichCompare for ints; result is bool.

Step-by-Step Execution:
• 1. Load 10 and 5. 2. Greater-than test. 3. True.

Order of Operations:
• Chained comparisons are separate; here one binary > only.

Common Use Cases:
• Sorting decisions, thresholds, game scores.

Edge Cases:
• NaN comparisons are special with floats — not involved for small ints.

Performance Considerations:
• O(1) integer compare.

Examples:
• 10 > 10 -> False; 5 > 5 -> False.

Notes:
• Use key= when sorting objects instead of manual > chains.`
  }),
  (_i: number) => ({ 
    q: `Result of 5 < 10?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "Less than comparison.",
    de: `The < operator compares two values and returns True if the left operand is less than the right operand. 5 < 10 returns True because 5 is less than 10. Comparison operators are essential for conditional statements and boolean logic in Python.

Less than operator:
• 5 < 10 = True (5 is less than 10)
• Returns boolean (True/False)
• Used in conditional statements
• Works with numbers, strings, etc.

How it works:
• Compares left operand to right operand
• Returns True if left < right
• Returns False otherwise
• Essential for if statements

Common uses:
• Conditional statements: if x < 10:
• Range checking: if age < 65:
• Comparisons and sorting
• Boolean expressions in conditionals

Example: 5 < 10 returns True because 5 is less than 10. This boolean result is commonly used in if statements: if x < 10: ...

Key Distinctions:
• < checks whether the left is strictly below the right; 5 < 10 is True.
• 5 > 10 would be False — direction of inequality matters.

How It Works:
• Integer comparison without crossing zero issues for these magnitudes.

Step-by-Step Execution:
• 1. Compare 5 and 10. 2. True because 5 is less.

Order of Operations:
• Single comparison operator.

Common Use Cases:
• Range checks before indexing or clamping.

Edge Cases:
• Comparing mixed int and float promotes to float — still fine here.

Performance Considerations:
• Constant time.

Examples:
• 5 < 5 -> False; 10 < 5 -> False.

Notes:
• Pair with <= for inclusive bounds: a <= x <= b.`
  }),
  (_i: number) => ({ 
    q: `Result of 10 >= 10?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "Greater than or equal.",
    de: `The >= operator compares two values and returns True if the left operand is greater than or equal to the right operand. 10 >= 10 returns True because 10 is equal to 10 (satisfies the "or equal" part). This operator is commonly used in conditional statements for inclusive range checking.

Greater than or equal:
• 10 >= 10 = True (equal, so True)
• Returns True if left >= right
• Returns False if left < right
• Includes equality

Common uses:
• Conditional statements: if age >= 18:
• Inclusive range checking
• Boundary conditions
• Boolean expressions in conditionals

Example: 10 >= 10 returns True because 10 equals 10, which satisfies the "or equal" condition. This is useful for inclusive comparisons: if age >= 18: ...

Key Distinctions:
• >= means greater or equal; 10 >= 10 tests boundary equality.
• Pure > would be False at 10 == 10; >= includes the tie.

How It Works:
• Comparison succeeds when left equals right for >=.

Step-by-Step Execution:
• 1. Compare 10 and 10. 2. True because equality satisfies >=.

Order of Operations:
• One rich comparison.

Common Use Cases:
• Loop bounds, inclusive maximums, score at least thresholds.

Edge Cases:
• Floating point equality at boundaries can surprise — use tolerances for floats.

Performance Considerations:
• O(1).

Examples:
• 9 >= 10 -> False; 11 >= 10 -> True.

Notes:
• math.isclose for float equality, not >= alone.`
  }),
  (_i: number) => ({ 
    q: `Result of 5 <= 10?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "Less than or equal.",
    de: `The <= operator compares two values and returns True if the left operand is less than or equal to the right operand. 5 <= 10 returns True because 5 is less than 10 (satisfies the "less than" part). This operator is commonly used in conditional statements for inclusive range checking.

Less than or equal:
• 5 <= 10 = True (less, so True)
• Returns True if left <= right
• Returns False if left > right
• Includes equality

Common uses:
• Conditional statements: if age <= 65:
• Inclusive range checking
• Boundary conditions
• Boolean expressions in conditionals

Example: 5 <= 10 returns True because 5 is less than 10, which satisfies the <= condition. This is useful for inclusive comparisons: if x <= 10: ...

Key Distinctions:
• <= checks left at or below right; 5 <= 10 is True.
• 5 >= 10 would be False — do not flip operands blindly.

How It Works:
• Inequality including equality differs from strict <.

Step-by-Step Execution:
• 1. Take 5 and 10. 2. <= succeeds.

Order of Operations:
• Single <= operation.

Common Use Cases:
• Inclusive upper limits, validating user age caps.

Edge Cases:
• Chained 5 <= x <= 10 reads like math; single <= is a building block.

Performance Considerations:
• Trivial for small ints.

Examples:
• 5 <= 5 -> True.

Notes:
• Combine with >= for rectangle membership tests.`
  }),
  (_i: number) => ({ 
    q: `Result of 10 == 10?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "Equality check.",
    de: `The == operator compares two values for equality and returns True if they are equal. 10 == 10 returns True because both operands have the same value (10). The == operator checks value equality and is the most common comparison operator used in conditional statements.

Equality operator:
• 10 == 10 = True (values are equal)
• Returns boolean (True/False)
• Compares values, not identity
• Most common comparison operator

How it works:
• Compares left operand to right operand
• Returns True if values are equal
• Returns False if values differ
• Used extensively in if statements

Important distinction:
• == compares values (equality)
• is compares identity (same object)
• 10 == 10.0 is True (same value)
• 10 is 10.0 is False (different objects)

Common uses:
• Conditional statements: if x == 5:
• Checking equality: if name == "admin":
• Validation and comparisons
• Boolean expressions in conditionals

Example: 10 == 10 returns True because both operands have the same value (10). This is commonly used in if statements: if x == 10: ...

Key Distinctions:
• == tests value equality; two ints with the same value compare True.
• is would be True for small int caching but is a different notion — see other questions.

How It Works:
• Equality comparison for 10 and 10 yields True.

Step-by-Step Execution:
• 1. Load both 10. 2. Value equality -> True.

Order of Operations:
• No chaining; one ==.

Common Use Cases:
• Asserting computed results match expected constants.

Edge Cases:
• Large ints and floats near equality need care — not this exact int case.

Performance Considerations:
• O(1) for small ints.

Examples:
• 10 == 11 -> False.

Notes:
• Use == for content; is for identity.`
  }),
  (_i: number) => ({ 
    q: `Result of 10 != 5?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "Inequality check.",
    de: `The != operator compares two values for inequality and returns True if they are not equal. 10 != 5 returns True because 10 is not equal to 5. The != operator is the opposite of == and is commonly used in conditional statements to check if values differ.

Inequality operator:
• 10 != 5 = True (values are not equal)
• Returns boolean (True/False)
• Opposite of == operator
• Checks if values differ

How it works:
• Compares left operand to right operand
• Returns True if values are not equal
• Returns False if values are equal
• Useful for checking differences

Common uses:
• Conditional statements: if x != 0:
• Checking inequality: if status != "error":
• Validation and comparisons
• Boolean expressions in conditionals

Example: 10 != 5 returns True because 10 is not equal to 5. This is commonly used in if statements: if x != 0: ...

Key Distinctions:
• != tests inequality; 10 differs from 5, so the result is True.
• 10 == 5 would be False — opposite operator.

How It Works:
• Not-equal returns True when values differ.

Step-by-Step Execution:
• 1. Compare 10 and 5. 2. Not equal -> True.

Order of Operations:
• Single !=.

Common Use Cases:
• Rejecting duplicates, validating inputs differ.

Edge Cases:
• nan != nan is True in IEEE floats — reflexivity breaks.

Performance Considerations:
• Constant time.

Examples:
• 5 != 5 -> False.

Notes:
• Pair != with in for membership negation patterns.`
  }),
  (_i: number) => ({ 
    q: `Result of 5 > 10?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "Greater than - false.",
    de: `The > operator compares two values and returns True if the left operand is greater than the right operand. 5 > 10 returns False because 5 is not greater than 10 (5 is actually less than 10). Understanding when comparison operators return False is important for writing correct conditional statements.

Greater than check:
• 5 > 10 = False (5 is not greater than 10)
• Returns boolean (True/False)
• 5 < 10, so > returns False
• Essential for if statements

How it works:
• Compares left operand to right operand
• Returns True if left > right
• Returns False if left <= right
• 5 is less than 10, so False

Common uses:
• Conditional statements: if x > 10:
• Range checking
• Comparisons
• Boolean expressions in conditionals

Example: 5 > 10 returns False because 5 is not greater than 10 (5 < 10). This boolean result is used in conditional statements to check conditions.

Key Distinctions:
• > with left smaller than right yields False; 5 is not greater than 10.
• 5 < 10 is the True version with operands in natural ascending order.

How It Works:
• Comparison fails because the ordering is wrong for >.

Step-by-Step Execution:
• 1. Evaluate 5 > 10. 2. False.

Order of Operations:
• One > without chaining.

Common Use Cases:
• Detecting failed threshold checks.

Edge Cases:
• Mixed types follow comparison rules; both ints here.

Performance Considerations:
• Trivial.

Examples:
• 5 > 4 -> True.

Notes:
• Sort key errors often show up as unexpected > results.`
  }),
  (_i: number) => ({ 
    q: `Result of 10 < 5?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "Less than - false.",
    de: `The < operator compares two values and returns True if the left operand is less than the right operand. 10 < 5 returns False because 10 is not less than 5 (10 is actually greater than 5). Understanding when comparison operators return False helps write correct conditional statements.

Less than check:
• 10 < 5 = False (10 is not less than 5)
• Returns boolean (True/False)
• 10 > 5, so < returns False
• Essential for if statements

How it works:
• Compares left operand to right operand
• Returns True if left < right
• Returns False if left >= right
• 10 is greater than 5, so False

Common uses:
• Conditional statements: if x < 5:
• Range checking
• Comparisons
• Boolean expressions in conditionals

Example: 10 < 5 returns False because 10 is not less than 5 (10 > 5). This boolean result is used in conditional statements to check conditions.

Key Distinctions:
• 10 < 5 is False because ten is not less than five.
• 5 > 10 is the same ordering fact stated differently — also False for the analogous question.

How It Works:
• Left operand is not strictly below the right.

Step-by-Step Execution:
• 1. Compare 10 and 5. 2. False.

Order of Operations:
• Single <.

Common Use Cases:
• Catching invalid ordering in data pipelines.

Edge Cases:
• Lexicographic tuple comparison differs — not two plain ints.

Performance Considerations:
• O(1).

Examples:
• 3 < 10 -> True.

Notes:
• Use chained comparisons for readable between checks.`
  }),
  (_i: number) => ({ 
    q: `Result of 10 == 5?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "Equality check - not equal.",
    de: `The == operator compares two values for equality. 10 == 5 returns False because 10 is not equal to 5. The == operator returns True only when both operands have the same value. Understanding when equality checks return False is important for conditional statements.

Equality check:
• 10 == 5 = False (values are not equal)
• Returns boolean (True/False)
• 10 ≠ 5, so == returns False
• Used in conditional statements

How it works:
• Compares left operand to right operand
• Returns True if values are equal
• Returns False if values differ
• 10 ≠ 5, so False

Common uses:
• Conditional statements: if x == 5:
• Checking equality
• Validation
• Boolean expressions in conditionals

Example: 10 == 5 returns False because 10 is not equal to 5. This boolean result is used in conditional statements: if x == 5: ...

Key Distinctions:
• == requires identical values; 10 and 5 differ, so result is False.
• 10 != 5 would be True — opposite polarity.

How It Works:
• Equality fails for distinct integers.

Step-by-Step Execution:
• 1. Compare 10 and 5. 2. False.

Order of Operations:
• One == comparison.

Common Use Cases:
• Guarding that two computed paths matched before merging.

Edge Cases:
• Same value different types: 1 == True is True — watch bool/int quirks.

Performance Considerations:
• Trivial.

Examples:
• 10 == 10 -> True.

Notes:
• Use Decimal for money, not raw == on floats.`
  }),
  (_i: number) => ({ 
    q: `Result of 5 >= 10?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "Greater than or equal - false.",
    de: `The >= operator compares two values and returns True if the left operand is greater than or equal to the right operand. 5 >= 10 returns False because 5 is neither greater than nor equal to 10 (5 < 10). This operator is commonly used in conditional statements for inclusive range checking.

Greater than or equal check:
• 5 >= 10 = False (5 < 10, not >=)
• Returns boolean (True/False)
• 5 is less than 10, so False
• Checks if left >= right

How it works:
• Compares left operand to right operand
• Returns True if left >= right
• Returns False if left < right
• 5 < 10, so False

Common uses:
• Conditional statements: if x >= 10:
• Range checking
• Boundary conditions
• Boolean expressions in conditionals

Example: 5 >= 10 returns False because 5 is less than 10, so it doesn't satisfy the "greater than or equal" condition. This is used in conditional statements: if x >= 10: ...

Key Distinctions:
• >= fails when the left is strictly below the right; 5 is not >= 10.
• 5 <= 10 would be True — flip operator and operands carefully.

How It Works:
• Boundary: 5 >= 5 would be True — here 10 is larger.

Step-by-Step Execution:
• 1. Test 5 >= 10. 2. False.

Order of Operations:
• Single >=.

Common Use Cases:
• Minimum score not met scenarios.

Edge Cases:
• Floating rounding could nudge values across boundaries.

Performance Considerations:
• Trivial.

Examples:
• 10 >= 5 -> True.

Notes:
• Inclusive vs exclusive bounds in APIs.`
  }),
  
  // 21-30: Identity vs Equality
  (_i: number) => ({ 
    q: `Result of 5 == 5?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "== compares values.",
    de: `The == operator compares two values for equality. 5 == 5 returns True because both operands have the same value (5). The == operator checks value equality, not object identity. This is the most common comparison operator used in conditional statements.

Equality operator:
• 5 == 5 = True (values are equal)
• Compares values, not identity
• Returns boolean (True/False)
• Used extensively in if statements

How it works:
• Compares the values of operands
• Returns True if values are equal
• Returns False if values differ
• Works with any comparable types

Important distinction:
• == compares values (equality)
• is compares identity (same object)
• 5 == 5.0 is True (same value)
• 5 is 5.0 is False (different objects)

Common uses:
• Conditional statements: if x == 5:
• Checking equality: if name == "admin":
• Validation and comparisons
• Boolean expressions in conditionals

Example: 5 == 5 returns True because both operands have the same value (5). This is commonly used in if statements: if x == 5: ...

Key Distinctions:
• == with the same literal on both sides is True for integers.
• is may also be True for small ints due to caching — a separate question.

How It Works:
• Value equality holds for 5 and 5.

Step-by-Step Execution:
• 1. Compare 5 and 5. 2. True.

Order of Operations:
• One equality check.

Common Use Cases:
• Verifying symmetric calculations.

Edge Cases:
• Different objects with same value: lists need ==, not identity.

Performance Considerations:
• O(1).

Examples:
• 5 == 6 -> False.

Notes:
• defaultdict behavior vs explicit key checks — different patterns.`
  }),
  (_i: number) => ({ 
    q: `Result of 5 is 5?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "is checks identity (small integers are cached).",
    de: `The is operator checks if two variables reference the same object in memory (identity). 5 is 5 returns True because Python caches small integers, so both 5s refer to the same object. However, for larger integers or mutable objects, this may not be true. The is operator checks object identity, not value equality.

Identity operator:
• 5 is 5 = True (same integer object, cached)
• Checks if same object in memory
• Different from == (which checks value)
• Python caches small integers

How it works:
• Checks object identity (memory address)
• Returns True if same object
• Returns False if different objects
• Small integers are cached (singletons)

Important distinction:
• == checks value equality
• is checks object identity
• 5 == 5.0 is True (same value)
• 5 is 5.0 is False (different objects)

Common uses:
• Checking for None: if x is None:
• Checking for singletons: if x is True:
• Identity checks
• Object comparison

Example: 5 is 5 returns True because Python caches small integers, so both 5s refer to the same object in memory. For identity checks, use is; for value checks, use ==.

Key Distinctions:
• is tests object identity; small integers may share one cached int object in CPython.
• == would still be True for value equality even if identities differ.

How It Works:
• 5 is 5 is typically True because both refer to the same small-int singleton.

Step-by-Step Execution:
• 1. Compare identities of two int 5. 2. True in common builds.

Order of Operations:
• is is not overloaded like == for custom classes by default.

Common Use Cases:
• Fast path for None checks: x is None.

Edge Cases:
• Do not rely on int caching for is across computations — use == for value.

Performance Considerations:
• Identity compare is pointer equality in CPython.

Examples:
• a is b for large computed ints may be False even if a == b.

Notes:
• PEP 8: always is None, never == None.`
  }),
  (_i: number) => ({ 
    q: `Result of [1, 2] == [1, 2]?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "== compares list contents.",
    de: `The == operator compares the contents of lists, not their identity. [1, 2] == [1, 2] returns True because both lists have the same elements in the same order. The == operator checks value equality by comparing list contents element by element.

List equality:
• [1, 2] == [1, 2] = True (same contents)
• Compares list elements
• Returns True if contents are equal
• Order matters

How it works:
• Compares lists element by element
• Checks if same elements in same order
• Returns True if contents match
• Returns False if contents differ

Examples:
• [1, 2] == [1, 2] = True (same contents)
• [1, 2] == [2, 1] = False (different order)
• [1, 2] == [1, 2, 3] = False (different length)

Important distinction:
• [1, 2] == [1, 2] = True (same values)
• [1, 2] is [1, 2] = False (different objects)
• == checks contents, is checks identity

Common uses:
• Comparing lists: if list1 == list2:
• Checking list contents
• Validation
• Conditional statements

Example: [1, 2] == [1, 2] returns True because both lists have the same elements in the same order. The == operator compares list contents, not object identity.

Key Distinctions:
• == compares element-wise list contents; matching sequences compare equal.
• is would be False for two distinct list objects with same items — different question.

How It Works:
• List equality uses recursive element comparison for contents.

Step-by-Step Execution:
• 1. Build or reference two lists. 2. Compare elements. 3. True.

Order of Operations:
• == can invoke __eq__ on elements; nested structures recurse.

Common Use Cases:
• Testing expected output lists in unit tests.

Edge Cases:
• Subclasses may override list equality — edge for advanced code.

Performance Considerations:
• O(n) in list length.

Examples:
• [1] == [2] -> False.

Notes:
• Use == for value; is only if same object is intended.`
  }),
  (_i: number) => ({ 
    q: `Result of [1, 2] is [1, 2]?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "Different list objects, even with same content.",
    de: `The is operator checks if two variables reference the same object in memory. [1, 2] is [1, 2] returns False because each list literal creates a new list object. Even though the lists have the same values, they are different objects in memory. The is operator checks object identity, not value equality.

Identity check:
• [1, 2] is [1, 2] = False (different objects)
• Checks object identity, not value
• Each list literal creates new object
• Different memory addresses

How it works:
• Each [1, 2] creates a new list object
• Different memory addresses
• is checks if same object
• Returns False (different objects)

Important distinction:
• [1, 2] == [1, 2] = True (same values)
• [1, 2] is [1, 2] = False (different objects)
• == checks values, is checks identity

Examples:
• [1, 2] is [1, 2] = False (different objects)
• a = [1, 2]; b = a; a is b = True (same object)
• (1, 2) is (1, 2) = False (tuples too, unless cached)

Common uses:
• Checking for None: if x is None:
• Object identity checks
• Understanding object references
• Memory efficiency

Example: [1, 2] is [1, 2] returns False because each list literal creates a new list object. Even though they have the same values, they are different objects in memory. Use == to check if values are equal.

Key Distinctions:
• is checks whether two names refer to the same object; two list literals are distinct objects.
• == can still be True for same contents — identity is stricter.

How It Works:
• Each [1, 2] literal constructs a new list in CPython.

Step-by-Step Execution:
• 1. Create first list. 2. Create second list. 3. is -> False.

Order of Operations:
• Two separate allocations mean different ids.

Common Use Cases:
• Avoid using is for list content comparison.

Edge Cases:
• Singleton empty tuple () is shared — lists are never shared like that.

Performance Considerations:
• Two allocations cost more than one, but quiz focuses on identity.

Examples:
• id(a) == id(b) matches is for objects.

Notes:
• Copy lists with list(x) or x[:] when you need a duplicate.`
  }),
  (_i: number) => ({ 
    q: `Result of "hello" == "hello"?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "== compares string values.",
    de: `The == operator compares string values character by character. "hello" == "hello" returns True because both strings have the same characters in the same order. The == operator checks value equality by comparing string contents.

String equality:
• "hello" == "hello" = True (same contents)
• Compares string characters
• Returns True if contents are equal
• Case-sensitive

How it works:
• Compares strings character by character
• Checks if same characters in same order
• Returns True if contents match
• Returns False if contents differ

Examples:
• "hello" == "hello" = True (same contents)
• "hello" == "Hello" = False (case-sensitive)
• "hello" == "world" = False (different contents)

Important distinction:
• "hello" == "hello" = True (same values)
• "hello" is "hello" = True (may be same object due to interning)
• == checks values, is checks identity

Common uses:
• Comparing strings: if name == "admin":
• Checking string values
• Validation
• Conditional statements

Example: "hello" == "hello" returns True because both strings have the same characters in the same order. The == operator compares string values, not object identity.

Key Distinctions:
• str == compares character content; identical strings compare True.
• is may be True for interned identical string literals in one expression — implementation detail.

How It Works:
• Unicode code points match for both hello literals.

Step-by-Step Execution:
• 1. Load two str objects. 2. Value equality -> True.

Order of Operations:
• Case sensitivity matters: Hello != hello.

Common Use Cases:
• Comparing user input after normalization.

Edge Cases:
• Very long strings: equality still compares content — can be costly.

Performance Considerations:
• O(n) in string length worst case.

Examples:
• hello == Hello -> False.

Notes:
• Normalize with casefold() for case-insensitive logic.`
  }),
  (_i: number) => ({ 
    q: `Result of "hello" is "hello"?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "String interning may make same strings share identity.",
    de: `The is operator checks if two variables reference the same object in memory. "hello" is "hello" may return True because Python interns (caches) string literals, so identical string literals may refer to the same object. However, this behavior is implementation-dependent and should not be relied upon. Always use == for string comparison.

String identity:
• "hello" is "hello" = True (may be same object due to interning)
• Python may intern string literals
• Implementation-dependent behavior
• Should not be relied upon

How it works:
• Python may cache string literals (interning)
• Identical literals may share same object
• is checks if same object
• Behavior is not guaranteed

Important note:
• String interning is implementation-dependent
• Always use == for string comparison
• Don't rely on is for strings
• == is the correct way to compare strings

Best practice:
• Use == for string comparison: if name == "admin":
• Don't use is for strings
• is is for None, True, False checks
• == is for value comparison

Example: "hello" is "hello" may return True due to string interning, but this behavior is not guaranteed. Always use == for string comparison: if name == "hello": ...

Key Distinctions:
• String literals with same text may be interned; is can be True for shared literals.
• == is the portable way to compare string value; is is identity.

How It Works:
• Implementation may intern identical literals in the same statement context.

Step-by-Step Execution:
• 1. Create or intern strings. 2. is compares identity.

Order of Operations:
• Do not depend on str interning for program logic.

Common Use Cases:
• Always use == for string value in portable code.

Edge Cases:
• Computed strings: hello = 'he'+'llo'; another 'hello' may not share id.

Performance Considerations:
• Identity check is O(1) pointer compare.

Examples:
• Use is for singletons like None only in typical style.

Notes:
• str.intern exists for explicit interning — rare.`
  }),
  (_i: number) => ({ 
    q: `Result of None == None?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "== compares values.",
    de: `The == operator compares values for equality. None == None returns True because both operands are None (the same value). However, for None specifically, it's recommended to use is None instead of == None, as it's more Pythonic and clearer.

None equality:
• None == None = True (same value)
• Compares values
• Returns True
• But use is None instead

How it works:
• Compares values
• Both operands are None
• Returns True (same value)
• Works, but not recommended

Best practice:
• Use is None instead of == None
• More Pythonic and clearer
• is None is the standard way
• if x is None: (recommended)

Important note:
• None == None works but is not recommended
• Always use is None for None checks
• is None is more Pythonic
• Standard Python practice

Common uses:
• Checking for None: if x is None: (recommended)
• Not recommended: if x == None:
• Use is None for clarity

Example: None == None returns True, but it's better to use is None: if x is None: ... This is more Pythonic and clearer.

Key Distinctions:
• None == None compares values; None is a singleton so equality holds.
• is None is the idiomatic check — still, == works between two None values.

How It Works:
• There is only one None object in Python.

Step-by-Step Execution:
• 1. Compare None to None. 2. True.

Order of Operations:
• == for None is acceptable but is None is preferred for clarity.

Common Use Cases:
• Optional values defaulting to sentinel None.

Edge Cases:
• np.nan == np.nan is False — None is not like float nan.

Performance Considerations:
• Trivial.

Examples:
• x == None works but style guides forbid it.

Notes:
• Always write is None and is not None.`
  }),
  (_i: number) => ({ 
    q: `Result of None is None?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "None is a singleton - always same object.",
    de: `None is a singleton in Python - there is only one None object in the entire program. None is None returns True because all None references point to the same singleton object. This is why you should always use is None (not == None) to check for None.

None singleton:
• None is None = True (same singleton)
• There is only one None object
• All None references are the same object
• Always use is None (not == None)

How it works:
• None is a singleton object
• All None references are the same object
• is checks identity, returns True
• This is why is None is recommended

Best practice:
• Always use is None (not == None)
• More Pythonic and correct
• Faster and clearer
• Standard Python practice

Examples:
• None is None = True (singleton)
• x = None; x is None = True
• y = None; x is y = True (same object)
• None == None = True (but use is None)

Common uses:
• Checking for None: if x is None:
• Default values: if value is None:
• Optional parameters
• Null checking

Example: None is None returns True because None is a singleton - there is only one None object in Python, so all None references are the same object. Always use is None for None checks.

Key Distinctions:
• is None checks identity with the sole None singleton — the idiomatic None test.
• == None compares by value and is discouraged by PEP 8 even though it often works.

How It Works:
• None is None is True because both sides name the same object.

Step-by-Step Execution:
• 1. Load None twice. 2. Identity succeeds.

Order of Operations:
• is compares object id, not user-defined __eq__ for this built-in case.

Common Use Cases:
• Guarding optional parameters and search misses.

Edge Cases:
• numpy array equality overloads — not relevant to None itself.

Performance Considerations:
• Pointer compare.

Examples:
• type(None)() is invalid — None is not callable.

Notes:
• Never chain: if x is None or y is None reads clearly.`
  }),
  (_i: number) => ({ 
    q: `Result of 5 is not 10?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "is not checks if objects are different.",
    de: `The is not operator is the opposite of is - it returns True if two variables reference different objects in memory. 5 is not 10 returns True because 5 and 10 are different objects (different values, so definitely different objects). The is not operator checks object identity, not value equality.

is not operator:
• 5 is not 10 = True (different objects)
• Returns True if different objects
• Returns False if same object
• Opposite of is operator

How it works:
• Checks object identity
• Returns True if different objects
• Returns False if same object
• 5 and 10 are different, so True

Examples:
• 5 is not 10 = True (different values/objects)
• 5 is not 5 = False (same object, for cached integers)
• None is not None = False (same singleton)
• [1, 2] is not [1, 2] = True (different objects)

Logical relationship:
• a is not b = not (a is b)
• Inverts the result of is
• More readable for negative checks

Common uses:
• Checking not None: if x is not None:
• Object identity checks
• Negative identity checks

Example: 5 is not 10 returns True because 5 and 10 are different objects (different values). The is not operator checks if objects are different.

Key Distinctions:
• is not checks that two objects are not the same; 5 and 10 are different ints.
• != compares values; 5 != 10 is also True but does not speak about object identity.

How It Works:
• Small ints may be cached, but 5 and 10 are different identities.

Step-by-Step Execution:
• 1. Left int 5. 2. Right int 10. 3. is not -> True.

Order of Operations:
• is not is the negation of is.

Common Use Cases:
• Rejecting mistaken object reuse when ids must differ.

Edge Cases:
• After large arithmetic, int identity may differ from literals — use == for value.

Performance Considerations:
• Identity compare is O(1).

Examples:
• 5 is not 5 is False.

Notes:
• Use is not None for explicit optional handling.`
  }),
  (_i: number) => ({ 
    q: `What is the difference between == and is?`, 
    o: ["== compares values, is compares identity", "No difference", "is is for strings only", "== is deprecated"], 
    c: 0, 
    e: "== compares values, is compares object identity.",
    de: `The == operator compares values for equality, while the is operator compares object identity (whether two variables reference the same object in memory). Understanding this distinction is crucial for writing correct Python code, especially in conditional statements.

Key difference:
• == compares values (equality)
• is compares identity (same object)
• Different purposes, different results

== operator:
• Compares values of operands
• Returns True if values are equal
• Works with any comparable types
• Most common comparison operator

is operator:
• Compares object identity (memory address)
• Returns True if same object
• Used for None, True, False checks
• Checks if variables reference same object

Examples:
• 5 == 5.0 = True (same value)
• 5 is 5.0 = False (different objects)
• [1, 2] == [1, 2] = True (same values)
• [1, 2] is [1, 2] = False (different objects)
• None == None = True (same value)
• None is None = True (same object, singleton)

When to use:
• Use == for value comparison: if x == 5:
• Use is for identity checks: if x is None:
• Use is for singletons: if x is True:
• Use == for most comparisons

Example: The == operator compares values (5 == 5.0 is True), while the is operator compares object identity (5 is 5.0 is False). Use == for value comparison and is for identity checks (especially None).

Key Distinctions:
• == tests value equality via __eq__; is tests object identity (same id).
• For lists and dicts, == compares contents; is is often False for separate literals.

How It Works:
• None and small ints are special cases where is sometimes matches user intuition.

Step-by-Step Execution:
• 1. Decide whether you care about value or identity. 2. Pick == or is.

Order of Operations:
• Different contexts: dedup caches vs business equality.

Common Use Cases:
• Data modeling: when two records represent the same entity.

Edge Cases:
• NaN breaks == reflexivity; None is a singleton.

Performance Considerations:
• == may call expensive __eq__ on large objects.

Examples:
• a == b does not imply a is b.

Notes:
• Document which semantics your API expects in docstrings.`
  }),
  
  // 31-40: Chained Comparisons
  (_i: number) => ({ 
    q: `Result of 5 < 10 < 15?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Chained comparisons work in Python.",
    de: `Python supports chained comparisons, allowing you to write multiple comparisons in a single expression. 5 < 10 < 15 is evaluated as (5 < 10) and (10 < 15). Both conditions are True, so the result is True. Chained comparisons are commonly used in conditional statements for range checking.

Chained comparison:
• 5 < 10 < 15 = True
• Equivalent to: (5 < 10) and (10 < 15)
• Evaluates both conditions
• Returns True if chain is valid

How it works:
• Evaluates left comparison: 5 < 10 = True
• Evaluates right comparison: 10 < 15 = True
• Combines with and: True and True = True
• Returns True if chain is valid

Examples:
• 5 < 10 < 15 = True (valid chain)
• 5 < 10 < 20 = True
• 5 < 10 < 5 = False (invalid chain)
• 10 < 5 < 15 = False (invalid chain)

Common uses:
• Range checking: if 0 < x < 100:
• Multiple comparisons: if 5 < a < 10 < b < 20:
• Concise range validation
• Conditional statements

Example: 5 < 10 < 15 returns True because both conditions are True (5 < 10 is True, and 10 < 15 is True), so the chained comparison evaluates to True. This is useful for range checking: if 0 < age < 120: ...

Key Distinctions:
• Chained comparisons expand to a and b and c: 5 < 10 and 10 < 15.
• Writing 5 < 10 and 10 < 15 manually duplicates the middle value — chaining avoids that.

How It Works:
• Each segment must hold for the whole chain to be True.

Step-by-Step Execution:
• 1. Test 5 < 10. 2. Test 10 < 15. 3. Both True -> True.

Order of Operations:
• Chained ops use same middle operand only once — fewer typo risks.

Common Use Cases:
• Validating a value sits inside an interval.

Edge Cases:
• NaN in any segment makes the chain False.

Performance Considerations:
• Each comparison is O(1) for small numbers.

Examples:
• 5 < 10 < 5 is False because the second segment fails.

Notes:
• Do not assume (a < b < c) == (a < b) and (b < c) with different b unless written.`
  }),
  (_i: number) => ({ 
    q: `Result of 15 > 10 > 5?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Chained comparisons work both ways.",
    de: `Python supports chained comparisons in both directions. 15 > 10 > 5 is evaluated as (15 > 10) and (10 > 5). Both conditions are True, so the result is True. Chained comparisons work whether going up (<) or down (>), making them useful for range checking in conditional statements.

Chained comparison (descending):
• 15 > 10 > 5 = True
• Equivalent to: (15 > 10) and (10 > 5)
• Evaluates both conditions
• Returns True if chain is valid

How it works:
• Evaluates left comparison: 15 > 10 = True
• Evaluates right comparison: 10 > 5 = True
• Combines with and: True and True = True
• Returns True if chain is valid

Examples:
• 15 > 10 > 5 = True (valid chain)
• 20 > 15 > 10 = True
• 15 > 10 > 20 = False (invalid chain)

Common uses:
• Range checking: if 100 > x > 0:
• Multiple comparisons
• Concise validation
• Conditional statements

Example: 15 > 10 > 5 returns True because both conditions are True (15 > 10 is True, and 10 > 5 is True), so the chained comparison evaluates to True. This is useful for range checking: if 100 > score > 0: ...

Key Distinctions:
• Descending chain 15 > 10 > 5 means 15 > 10 and 10 > 5 — both true.
• Mixing directions in one chain without thought can confuse readers — here it is consistent.

How It Works:
• Each pairwise comparison must succeed.

Step-by-Step Execution:
• 1. 15 > 10 True. 2. 10 > 5 True. 3. Chain True.

Order of Operations:
• Chained comparisons are pairwise, not transitive inference in one step.

Common Use Cases:
• Monotonic sequences in dashboards or ranking checks.

Edge Cases:
• Floating point equality at boundaries can break strict chains.

Performance Considerations:
• O(1) for literals.

Examples:
• 15 > 10 > 15 is False.

Notes:
• Use math.isclose when comparing computed floats in chains.`
  }),
  (_i: number) => ({ 
    q: `Result of 5 <= 10 <= 15?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Chained comparisons with <= work.",
    de: `Python supports chained comparisons with <= (less than or equal). 5 <= 10 <= 15 is evaluated as (5 <= 10) and (10 <= 15). Both conditions are True, so the result is True. Chained comparisons with <= are useful for inclusive range checking in conditional statements.

Chained comparison with <=:
• 5 <= 10 <= 15 = True
• Equivalent to: (5 <= 10) and (10 <= 15)
• Evaluates both conditions
• Returns True if chain is valid

How it works:
• Evaluates left comparison: 5 <= 10 = True
• Evaluates right comparison: 10 <= 15 = True
• Combines with and: True and True = True
• Returns True if chain is valid

Examples:
• 5 <= 10 <= 15 = True (valid chain)
• 5 <= 5 <= 15 = True (boundary case)
• 5 <= 10 <= 5 = False (invalid chain)

Common uses:
• Inclusive range checking: if 0 <= x <= 100:
• Boundary conditions
• Multiple comparisons
• Conditional statements

Example: 5 <= 10 <= 15 returns True because both conditions are True (5 <= 10 is True, and 10 <= 15 is True), so the chained comparison evaluates to True. This is useful for inclusive range checking: if 0 <= age <= 120: ...

Key Distinctions:
• Inclusive chain 5 <= 10 <= 15 allows endpoints; 10 equals 10 and 10 <= 15.
• Strict < on both ends would be a narrower band.

How It Works:
• Both bounds must be satisfied simultaneously.

Step-by-Step Execution:
• 1. 5 <= 10 True. 2. 10 <= 15 True. 3. True.

Order of Operations:
• Chained <= mixes well with date ranges.

Common Use Cases:
• API rate limits often use inclusive minutes.

Edge Cases:
• Timezone-aware datetimes: compare like types only.

Performance Considerations:
• Constant-time on simple scalars.

Examples:
• 5 <= 10 <= 9 is False.

Notes:
• For half-open intervals prefer explicit variables for bounds.`
  }),
  (_i: number) => ({ 
    q: `Result of 15 >= 10 >= 5?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Chained comparisons with >= work.",
    de: `Python supports chained comparisons with >= (greater than or equal). 15 >= 10 >= 5 is evaluated as (15 >= 10) and (10 >= 5). Both conditions are True, so the result is True. Chained comparisons with >= are useful for inclusive range checking in conditional statements.

Chained comparison with >=:
• 15 >= 10 >= 5 = True
• Equivalent to: (15 >= 10) and (10 >= 5)
• Evaluates both conditions
• Returns True if chain is valid

How it works:
• Evaluates left comparison: 15 >= 10 = True
• Evaluates right comparison: 10 >= 5 = True
• Combines with and: True and True = True
• Returns True if chain is valid

Examples:
• 15 >= 10 >= 5 = True (valid chain)
• 15 >= 15 >= 5 = True (boundary case)
• 15 >= 10 >= 20 = False (invalid chain)

Common uses:
• Inclusive range checking: if 100 >= x >= 0:
• Boundary conditions
• Multiple comparisons
• Conditional statements

Example: 15 >= 10 >= 5 returns True because both conditions are True (15 >= 10 is True, and 10 >= 5 is True), so the chained comparison evaluates to True. This is useful for inclusive range checking: if 100 >= score >= 0: ...

Key Distinctions:
• Non-increasing chain 15 >= 10 >= 5 mirrors descending comparisons with inclusive ties.
• Each adjacent pair must hold; 10 is both upper and middle pivot.

How It Works:
• Both >= segments must be True.

Step-by-Step Execution:
• 1. 15 >= 10 True. 2. 10 >= 5 True. 3. Chain True.

Order of Operations:
• Same mechanics as ascending chains, only operators flipped.

Common Use Cases:
• Score must stay within a corridor as it drops.

Edge Cases:
• Off-by-one at boundaries: draw a number line.

Performance Considerations:
• O(1).

Examples:
• 15 >= 10 >= 11 is False.

Notes:
• Prefer named variables for thresholds when teaching.`
  }),
  (_i: number) => ({ 
    q: `Result of 5 == 5 == 5?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Chained equality checks all pairs.",
    de: `Python supports chained equality comparisons. 5 == 5 == 5 is evaluated as (5 == 5) and (5 == 5). Both conditions are True, so the result is True. However, this is a special case that works differently from other chained comparisons - it checks pairwise equality.

Chained equality:
• 5 == 5 == 5 = True
• Evaluates as: (5 == 5) and (5 == 5)
• All pairs must be equal
• Returns True if all are equal

How it works:
• Evaluates left comparison: 5 == 5 = True
• Evaluates right comparison: 5 == 5 = True
• Combines with and: True and True = True
• Returns True if all pairs are equal

Examples:
• 5 == 5 == 5 = True (all equal)
• 5 == 5 == 10 = False (last not equal)
• 5 == 10 == 5 = False (middle not equal)

Important note:
• This checks pairwise equality
• Not "all three are equal" semantically
• But works the same in this case

Common uses:
• Checking multiple equalities
• Validation
• Conditional statements

Example: 5 == 5 == 5 returns True because both comparisons are True (5 == 5 is True, and 5 == 5 is True), so the chained equality evaluates to True.

Key Distinctions:
• Repeated == chains: 5 == 5 == 5 expands to (5 == 5) and (5 == 5) with shared middle.
• Unlike math, Python evaluates each relation; all must hold.

How It Works:
• All three literals are 5, so equality holds every time.

Step-by-Step Execution:
• 1. First pair True. 2. Second pair True. 3. True.

Order of Operations:
• Chained == is still pairwise comparisons.

Common Use Cases:
• Asserting three values match in logging or tests.

Edge Cases:
• Float noise: 0.1+0.2 may break naive triple equality.

Performance Considerations:
• Three comparisons.

Examples:
• a == b == c is not the same as (a,b,c) == (x,y,z) in one shot.

Notes:
• Use collections.Counter for multiset equality.`
  }),
  (_i: number) => ({ 
    q: `Result of 5 != 10 != 15?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Chained inequality checks all pairs.",
    de: `Python supports chained inequality comparisons. 5 != 10 != 15 is evaluated as (5 != 10) and (10 != 15). Both conditions are True (5 ≠ 10, and 10 ≠ 15), so the result is True. This checks that all adjacent pairs are not equal, which is useful for validation in conditional statements.

Chained inequality:
• 5 != 10 != 15 = True
• Evaluates as: (5 != 10) and (10 != 15)
• All pairs must be not equal
• Returns True if all pairs differ

How it works:
• Evaluates left comparison: 5 != 10 = True
• Evaluates right comparison: 10 != 15 = True
• Combines with and: True and True = True
• Returns True if all pairs are not equal

Examples:
• 5 != 10 != 15 = True (all different)
• 5 != 5 != 15 = False (first pair equal)
• 5 != 10 != 10 = False (second pair equal)

Common uses:
• Checking uniqueness: if a != b != c:
• Validation that values differ
• Pairwise inequality
• Conditional statements

Example: 5 != 10 != 15 returns True because both comparisons are True (5 != 10 is True, and 10 != 15 is True), so the chained inequality evaluates to True. This is useful for checking that values are different: if a != b != c: ...

Key Distinctions:
• Chained != compares pairwise: 5 != 10 and 10 != 15 — both must be True.
• This is not the same as (5 != 10 != 15) with a different middle — watch the middle.

How It Works:
• Each adjacent inequality must hold.

Step-by-Step Execution:
• 1. 5 != 10 True. 2. 10 != 15 True. 3. True.

Order of Operations:
• Chained != useful for strictly increasing distinct samples.

Common Use Cases:
• Ensuring three samples are pairwise distinct.

Edge Cases:
• If middle equals an endpoint, chain fails.

Performance Considerations:
• O(1) for small ints.

Examples:
• 5 != 5 != 5 is False at the first pair.

Notes:
• For many values, use len(set(values)) == len(values).`
  }),
  (_i: number) => ({ 
    q: `Result of 5 < 10 < 5?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "Chained comparison fails when middle value doesn't satisfy both.",
    de: `Chained comparisons require the middle value to satisfy both conditions. 5 < 10 < 5 is evaluated as (5 < 10) and (10 < 5). The first condition is True (5 < 10), but the second is False (10 < 5), so the result is False. The middle value (10) must satisfy both comparisons for the chain to be True.

Chained comparison failure:
• 5 < 10 < 5 = False
• Evaluates as: (5 < 10) and (10 < 5)
• First: 5 < 10 = True
• Second: 10 < 5 = False
• Result: True and False = False

How it works:
• Evaluates left comparison: 5 < 10 = True
• Evaluates right comparison: 10 < 5 = False
• Combines with and: True and False = False
• Middle value must satisfy both

Examples:
• 5 < 10 < 5 = False (middle doesn't satisfy both)
• 5 < 10 < 15 = True (middle satisfies both)
• 10 < 5 < 15 = False (first fails)

Common uses:
• Range checking: if 0 < x < 100:
• Understanding chained comparisons
• Conditional statements

Example: 5 < 10 < 5 returns False because while 5 < 10 is True, 10 < 5 is False. The middle value (10) must satisfy both comparisons for the chain to be True.

Key Distinctions:
• Chain 5 < 10 < 5 fails because 10 < 5 is False even though 5 < 10 is True.
• Transitivity of numbers does not mean any chained write is valid — each segment is checked.

How It Works:
• The middle value cannot be both above 5 and below 5 in this pattern.

Step-by-Step Execution:
• 1. 5 < 10 True. 2. 10 < 5 False. 3. Short-circuit yields False.

Order of Operations:
• False at first failing segment stops the chain.

Common Use Cases:
• Catching impossible range assumptions in validation.

Edge Cases:
• NaN comparisons always False — chain breaks.

Performance Considerations:
• Constant-time.

Examples:
• Draw intervals on a line to avoid impossible chains.

Notes:
• Use separate named variables for clarity.`
  }),
  (_i: number) => ({ 
    q: `Result of 10 < 5 < 15?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "Chained comparison fails when first condition is False.",
    de: `Chained comparisons are evaluated left to right. 10 < 5 < 15 is evaluated as (10 < 5) and (5 < 15). The first condition is False (10 < 5), so even though the second is True (5 < 15), the result is False because and requires both to be True. The first condition must be True for the chain to potentially succeed.

Chained comparison failure:
• 10 < 5 < 15 = False
• Evaluates as: (10 < 5) and (5 < 15)
• First: 10 < 5 = False
• Second: 5 < 15 = True
• Result: False and True = False

How it works:
• Evaluates left comparison: 10 < 5 = False
• Short-circuits: and returns False immediately
• Doesn't evaluate second (but would be True)
• Result: False

Examples:
• 10 < 5 < 15 = False (first fails)
• 5 < 10 < 15 = True (both succeed)
• 15 < 10 < 5 = False (first fails)

Common uses:
• Range checking: if 0 < x < 100:
• Understanding chained comparisons
• Conditional statements

Example: 10 < 5 < 15 returns False because the first condition (10 < 5) is False. Even though the second condition (5 < 15) is True, the and operator requires both to be True, so the result is False.

Key Distinctions:
• 10 < 5 is False, so the chained comparison 10 < 5 < 15 fails at the first segment.
• The right segment is never evaluated if using short-circuit — actually Python evaluates all parts for chained comparisons.

How It Works:
• Actually Python evaluates each comparison; first False makes overall False.

Step-by-Step Execution:
• 1. 10 < 5 False. 2. Entire chain False.

Order of Operations:
• Chained form still evaluates middle for the second segment in CPython — study docs for exact semantics.

Common Use Cases:
• Rejecting bad sensor readings that fail the first threshold.

Edge Cases:
• Understanding CPython evaluation order for chained ops is worth reading once.

Performance Considerations:
• Small ints.

Examples:
• 5 < 10 < 15 True.

Notes:
• Prefer explicit variables for thresholds in production code.`
  }),
  (_i: number) => ({ 
    q: `Result of 5 < 15 < 10?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "Chained comparison fails when second condition is False.",
    de: `Chained comparisons require all conditions to be True. 5 < 15 < 10 is evaluated as (5 < 15) and (15 < 10). The first condition is True (5 < 15), but the second is False (15 < 10), so the result is False. Both conditions must be True for the chain to succeed.

Chained comparison failure:
• 5 < 15 < 10 = False
• Evaluates as: (5 < 15) and (15 < 10)
• First: 5 < 15 = True
• Second: 15 < 10 = False
• Result: True and False = False

How it works:
• Evaluates left comparison: 5 < 15 = True
• Evaluates right comparison: 15 < 10 = False
• Combines with and: True and False = False
• Both must be True

Examples:
• 5 < 15 < 10 = False (second fails)
• 5 < 10 < 15 = True (both succeed)
• 5 < 15 < 20 = True (both succeed)

Common uses:
• Range checking: if 0 < x < 100:
• Understanding chained comparisons
• Conditional statements

Example: 5 < 15 < 10 returns False because while 5 < 15 is True, 15 < 10 is False. Both conditions must be True for the chained comparison to return True.

Key Distinctions:
• 5 < 15 < 10 fails because 15 < 10 is False — order is not sorted.
• Middle value must be both greater than left and less than right for ascending < chains.

How It Works:
• Second segment fails.

Step-by-Step Execution:
• 1. 5 < 15 True. 2. 15 < 10 False. 3. False.

Order of Operations:
• Chained comparisons are local checks, not global sorting.

Common Use Cases:
• Detecting that a reported triple is not monotonic.

Edge Cases:
• Dates: ensure ascending order before chaining.

Performance Considerations:
• O(1).

Examples:
• Sort three numbers then compare.

Notes:
• Use sorted([a,b,c]) == [a,b,c] for order check.`
  }),
  (_i: number) => ({ 
    q: `Result of 5 == 5 == 10?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "Chained equality fails when not all pairs are equal.",
    de: `Chained equality comparisons require all pairs to be equal. 5 == 5 == 10 is evaluated as (5 == 5) and (5 == 10). The first condition is True (5 == 5), but the second is False (5 == 10), so the result is False. All pairs must be equal for the chain to return True.

Chained equality failure:
• 5 == 5 == 10 = False
• Evaluates as: (5 == 5) and (5 == 10)
• First: 5 == 5 = True
• Second: 5 == 10 = False
• Result: True and False = False

How it works:
• Evaluates left comparison: 5 == 5 = True
• Evaluates right comparison: 5 == 10 = False
• Combines with and: True and False = False
• All pairs must be equal

Examples:
• 5 == 5 == 10 = False (last pair not equal)
• 5 == 5 == 5 = True (all pairs equal)
• 5 == 10 == 5 = False (middle pair not equal)

Common uses:
• Checking multiple equalities
• Validation
• Conditional statements

Example: 5 == 5 == 10 returns False because while 5 == 5 is True, 5 == 10 is False. All pairs must be equal for the chained equality to return True.

Key Distinctions:
• 5 == 5 == 10 fails because 5 == 10 is False.
• First pair True but second pair compares middle to the right literal.

How It Works:
• Chained equality requires every adjacent pair to match.

Step-by-Step Execution:
• 1. 5 == 5 True. 2. 5 == 10 False. 3. False.

Order of Operations:
• Middle 5 must equal both neighbors — impossible with 10 on the right.

Common Use Cases:
• Catching inconsistent triples in puzzles.

Edge Cases:
• Use all_equal helper for clarity.

Performance Considerations:
• Two equality checks.

Examples:
• a == b == c requires b equal to both a and c.

Notes:
• For floats, use isclose.`
  }),
  
  // 41-50: Membership Operators
  (_i: number) => ({ 
    q: `Result of 5 in [1, 2, 3, 4, 5]?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "in checks membership in list.",
    de: `The in operator checks if a value is a member of a collection (list, tuple, string, etc.). 5 in [1, 2, 3, 4, 5] returns True because 5 is present in the list. The in operator is commonly used in conditional statements to check membership before performing operations.

Membership operator:
• 5 in [1, 2, 3, 4, 5] = True (5 is in list)
• Returns boolean (True/False)
• Searches collection for value
• Returns True if found

How it works:
• Searches through collection
• Compares value with each element
• Returns True if match found
• Returns False if not found

Common uses:
• Conditional statements: if item in list:
• Validation: if value in valid_values:
• Filtering: [x for x in items if x in valid]
• Existence checking

Example: 5 in [1, 2, 3, 4, 5] returns True because the value 5 is found in the list. This is commonly used in if statements: if 5 in [1, 2, 3, 4, 5]: ...

Key Distinctions:
• Membership: 5 is in the list literal — containment test scans the list.
• == would compare value to the whole list — not what in does.

How It Works:
• in calls __contains__ on the container, list scans until match.

Step-by-Step Execution:
• 1. Iterate conceptually. 2. Find 5. 3. True.

Order of Operations:
• in has lower precedence than comparisons; not used with other ops here.

Common Use Cases:
• Checking allowlists and roles.

Edge Cases:
• Custom objects need __contains__ or iterable protocol.

Performance Considerations:
• O(n) for list length.

Examples:
• 5 in [5,5,5] is True early.

Notes:
• Use set for large membership tables.`
  }),
  (_i: number) => ({ 
    q: `Result of 10 in [1, 2, 3, 4, 5]?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "in checks membership - not found.",
    de: `The in operator checks if a value is a member of a collection. 10 in [1, 2, 3, 4, 5] returns False because 10 is not present in the list. The in operator searches through the collection and returns False if the value is not found. This is useful for validation in conditional statements.

Membership check:
• 10 in [1, 2, 3, 4, 5] = False (10 not in list)
• Returns boolean (True/False)
• Searches collection for value
• Returns False if not found

How it works:
• Searches through collection
• Compares value with each element
• Returns True if match found
• Returns False if not found

Common uses:
• Conditional statements: if item not in list:
• Validation: if value not in invalid_values:
• Filtering: [x for x in items if x not in invalid]
• Existence checking

Example: 10 in [1, 2, 3, 4, 5] returns False because the value 10 is not found in the list. This is commonly used in if statements: if 10 not in [1, 2, 3, 4, 5]: ...

Key Distinctions:
• 10 is not in the list [1..5] — linear search finds no match.
• in would be False; not in is not needed here.

How It Works:
• Membership fails for 10.

Step-by-Step Execution:
• 1. Scan elements. 2. No 10. 3. False.

Order of Operations:
• 10 != 5 is unrelated — membership is different.

Common Use Cases:
• Rejecting user IDs not in a small cohort.

Edge Cases:
• Nested lists: 10 in [[10]] is False.

Performance Considerations:
• O(n) scan.

Examples:
• 10 in [10] is True.

Notes:
• bisect for sorted lists when searching.`
  }),
  (_i: number) => ({ 
    q: `Result of 5 not in [1, 2, 3]?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "not in checks if value is absent.",
    de: `The not in operator is the opposite of in - it returns True if the value is NOT found in the collection. 5 not in [1, 2, 3] returns True because 5 is absent from the list [1, 2, 3]. This is useful for negative membership checks in conditional statements.

not in operator:
• 5 not in [1, 2, 3] = True (5 is not in list)
• Returns boolean (True/False)
• Opposite of in operator
• Returns True if value is absent

How it works:
• Searches through collection
• Returns True if value NOT found
• Returns False if value found
• Equivalent to not (value in collection)

Common uses:
• Conditional statements: if item not in list:
• Validation: if value not in invalid_values:
• Filtering: [x for x in items if x not in invalid]
• Negative checks

Example: 5 not in [1, 2, 3] returns True because the value 5 is not found in the list [1, 2, 3], so not in returns True. This is commonly used: if 5 not in [1, 2, 3]: ...

Key Distinctions:
• 5 not in [1,2,3] succeeds because 5 is absent from the short list.
• 5 in [1,2,3] would be False — not in negates membership.

How It Works:
• not in is the negation of in.

Step-by-Step Execution:
• 1. Evaluate membership. 2. Apply not. 3. True.

Order of Operations:
• not in reads as a single operator spelling.

Common Use Cases:
• Deny lists for access control.

Edge Cases:
• Default __contains__ for dict checks keys.

Performance Considerations:
• O(n) for list.

Examples:
• 5 in [5] is True.

Notes:
• Prefer set for O(1) average membership.`
  }),
  (_i: number) => ({ 
    q: `Result of 1 not in [1, 2, 3]?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "not in - value is present, so False.",
    de: `The not in operator returns False if the value IS found in the collection. 1 not in [1, 2, 3] returns False because 1 is present in the list [1, 2, 3]. When the value is found, not in returns False. This is useful for validation in conditional statements.

not in check:
• 1 not in [1, 2, 3] = False (1 is in list)
• Returns boolean (True/False)
• Opposite of in operator
• Returns False if value is present

How it works:
• Searches through collection
• Returns True if value NOT found
• Returns False if value found
• 1 is found, so False

Common uses:
• Conditional statements: if item not in list:
• Validation: if value not in invalid:
• Filtering: [x for x in items if x not in invalid]
• Negative membership checks

Example: 1 not in [1, 2, 3] returns False because the value 1 is found in the list [1, 2, 3], so not in returns False. This is commonly used: if 1 not in [1, 2, 3]: ... (would be False)

Key Distinctions:
• 1 not in [1,2,3] is False because 1 is the first element.
• not in must be false when the item is present.

How It Works:
• Membership finds 1 immediately.

Step-by-Step Execution:
• 1. Check first element. 2. Found. 3. not in -> False.

Order of Operations:
• Early exit on match for list.

Common Use Cases:
• Validating a value is not in a deny list when it actually is.

Edge Cases:
• Empty list: no membership.

Performance Considerations:
• Best case O(1) when first match.

Examples:
• 1 not in [] is True.

Notes:
• Use sets for uniqueness checks.`
  }),
  (_i: number) => ({ 
    q: `Result of 'a' in 'abc'?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "in checks substring membership in strings.",
    de: `The in operator checks if a substring is contained within a string. 'a' in 'abc' returns True because the substring 'a' is found in the string 'abc'. The in operator works with strings to check substring membership, which is commonly used in conditional statements for pattern matching.

String membership:
• 'a' in 'abc' = True ('a' is substring)
• Returns boolean (True/False)
• Checks if substring exists
• Case-sensitive check

How it works:
• Searches for substring in string
• Returns True if substring found
• Returns False if not found
• Works with single or multiple characters

Common uses:
• Conditional statements: if 'x' in text:
• Pattern matching: if 'error' in message:
• Validation: if '@' in email:
• Filtering strings

Example: 'a' in 'abc' returns True because the substring 'a' is found in the string 'abc'. This is commonly used: if 'error' in message: ...

Key Distinctions:
• Substring test: 'a' in 'abc' scans character sequence — True.
• in on str checks contiguous substrings, not arbitrary subsequences.

How It Works:
• Unicode-aware: code points match.

Step-by-Step Execution:
• 1. Search 'a' in 'abc'. 2. Found at index 0.

Order of Operations:
• in on str uses efficient algorithms in CPython.

Common Use Cases:
• Token scanning, simple validation.

Edge Cases:
• Empty needle in str: '' in any string is True.

Performance Considerations:
• O(n*m) in naive worst case; CPython optimized.

Examples:
• 'ab' in 'acb' is False.

Notes:
• Use regex for complex patterns.`
  }),
  (_i: number) => ({ 
    q: `Result of 'x' in 'abc'?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "in checks substring - not found.",
    de: `The in operator checks if a substring is contained within a string. 'x' in 'abc' returns False because the substring 'x' is not found in the string 'abc'. The in operator works with strings to check substring membership, which is useful for validation in conditional statements.

String membership check:
• 'x' in 'abc' = False ('x' not in string)
• Returns boolean (True/False)
• Checks if substring exists
• Returns False if not found

How it works:
• Searches for substring in string
• Returns True if substring found
• Returns False if not found
• 'x' is not found in 'abc', so False

Common uses:
• Conditional statements: if 'x' not in text:
• Pattern matching: if 'error' not in message:
• Validation
• Filtering strings

Example: 'x' in 'abc' returns False because the substring 'x' is not found in the string 'abc'. This is commonly used: if 'error' not in message: ...

Key Distinctions:
• 'x' does not appear in 'abc' — membership fails.
• Finding vs indexing: find returns -1, in returns False.

How It Works:
• Linear scan finds no match.

Step-by-Step Execution:
• 1. Compare substrings. 2. False.

Order of Operations:
• Case sensitivity: 'A' in 'abc' is False.

Common Use Cases:
• Rejecting invalid characters.

Edge Cases:
• Very long strings: build automaton for many queries.

Performance Considerations:
• O(n) in length.

Examples:
• 'x' not in 'abc' is True.

Notes:
• Use casefold for case-insensitive membership.`
  }),
  (_i: number) => ({ 
    q: `Result of 'ab' in 'abc'?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "in checks substring - 'ab' is in 'abc'.",
    de: `The in operator checks if a substring is contained within a string. 'ab' in 'abc' returns True because the substring 'ab' is found in the string 'abc'. The in operator works with multi-character substrings, checking if they appear contiguously in the string. This is useful for pattern matching in conditional statements.

Multi-character substring:
• 'ab' in 'abc' = True ('ab' is substring)
• Returns boolean (True/False)
• Checks if substring exists contiguously
• Works with any length substring

How it works:
• Searches for substring in string
• Checks if substring appears contiguously
• Returns True if found
• Returns False if not found

Examples:
• 'ab' in 'abc' = True (found)
• 'bc' in 'abc' = True (found)
• 'ac' in 'abc' = False (not contiguous)

Common uses:
• Conditional statements: if 'error' in message:
• Pattern matching: if 'http' in url:
• Validation: if '@' in email:
• Filtering strings

Example: 'ab' in 'abc' returns True because the substring 'ab' is found contiguously in the string 'abc'. This is commonly used: if 'error' in message: ...

Key Distinctions:
• Multi-character substring 'ab' is contiguous in 'abc' — True.
• Single characters "a","b","c" differ from two-char "ab".

How It Works:
• Starts at index 0.

Step-by-Step Execution:
• 1. Try match at 0. 2. 'ab' matches.

Order of Operations:
• in for multi-char is still contiguous window.

Common Use Cases:
• Prefix checks before parsing.

Edge Cases:
• 'ac' in 'abc' is False — not contiguous.

Performance Considerations:
• O(n) in string length.

Examples:
• 'abc' in 'abc' is True.

Notes:
• startswith is clearer for prefix-only checks.`
  }),
  (_i: number) => ({ 
    q: `Result of 'ac' in 'abc'?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "in checks substring - 'ac' is not contiguous in 'abc'.",
    de: `The in operator checks if a substring is contained within a string contiguously. 'ac' in 'abc' returns False because while 'a' and 'c' both appear in 'abc', they are not contiguous - there's a 'b' between them. The in operator requires the substring to appear as a contiguous sequence of characters.

Substring contiguity:
• 'ac' in 'abc' = False ('ac' not contiguous)
• Returns boolean (True/False)
• Requires contiguous characters
• 'a' and 'c' are separated by 'b'

How it works:
• Searches for substring in string
• Requires substring to be contiguous
• 'a' and 'c' exist but not together
• Returns False (not contiguous)

Examples:
• 'ac' in 'abc' = False (not contiguous)
• 'ab' in 'abc' = True (contiguous)
• 'bc' in 'abc' = True (contiguous)

Common uses:
• Conditional statements: if 'pattern' in text:
• Pattern matching
• Validation
• Filtering strings

Example: 'ac' in 'abc' returns False because while 'a' and 'c' both appear in 'abc', they are not contiguous (there's a 'b' between them). The in operator requires contiguous substrings.

Key Distinctions:
• Letters 'a' and 'c' are not adjacent in 'abc' — 'ac' is not a contiguous substring.
• in does not skip characters for substring search.

How It Works:
• No window matches 'ac'.

Step-by-Step Execution:
• 1. Scan windows. 2. No match.

Order of Operations:
• Contrast with substring in bioinformatics.

Common Use Cases:
• Typo detection: missing letter breaks contiguous match.

Edge Cases:
• O(n) scan.

Performance Considerations:
• Use in for simple; use difflib for fuzzy similarity.

Examples:
• Regular sets of characters are different from substring.

Notes:
• KMP or Boyer-Moore appear in advanced search — not needed for quiz trivia.`
  }),
  (_i: number) => ({ 
    q: `Result of '' in 'abc'?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Empty string is always a substring.",
    de: `The in operator considers the empty string to be a substring of any string. '' in 'abc' returns True because the empty string is technically present between every character and at the beginning and end of any string. This is a mathematical property of strings - the empty string is a substring of all strings.

Empty string property:
• '' in 'abc' = True (empty string always matches)
• Returns boolean (True/False)
• Empty string is substring of all strings
• Mathematical property

How it works:
• Empty string is present everywhere
• Between every character
• At beginning and end
• Always returns True

Examples:
• '' in 'abc' = True (always)
• '' in '' = True (empty in empty)
• '' in 'hello' = True (always)

Mathematical property:
• Empty string is substring of all strings
• Present between every character
• Useful for edge cases
• Consistent behavior

Common uses:
• Edge case handling
• String operations
• Validation
• Understanding string properties

Example: '' in 'abc' returns True because the empty string is always considered a substring of any string. This is a mathematical property of strings.

Key Distinctions:
• Empty string is a substring of every string — vacuously at every position.
• Edge case: '' in 'abc' is True.

How It Works:
• CPython treats empty needle as always found.

Step-by-Step Execution:
• 1. Evaluate ''. 2. Trivially contained.

Order of Operations:
• Useful for base cases in recursive string algorithms.

Common Use Cases:
• Splitting on '' is different — not recommended.

Edge Cases:
• O(1) special case.

Performance Considerations:
• '' in '' is True.

Examples:
• Guard against empty delimiter bugs in split.

Notes:
• str.count('') used to raise; behavior can differ by version — avoid relying on it.`
  }),
  (_i: number) => ({ 
    q: `Result of 'x' not in 'abc'?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "not in works with strings.",
    de: `The not in operator works with strings just like it works with lists. 'x' not in 'abc' returns True because the substring 'x' is not found in the string 'abc'. The not in operator is the opposite of in and is commonly used in conditional statements for negative pattern matching.

String not in:
• 'x' not in 'abc' = True ('x' not in string)
• Returns boolean (True/False)
• Opposite of in operator
• Returns True if substring not found

How it works:
• Searches for substring in string
• Returns True if substring NOT found
• Returns False if substring found
• 'x' is not found, so True

Common uses:
• Conditional statements: if 'error' not in message:
• Pattern matching: if 'invalid' not in text:
• Validation
• Filtering strings

Example: 'x' not in 'abc' returns True because the substring 'x' is not found in the string 'abc'. This is commonly used: if 'error' not in message: ...

Key Distinctions:
• not in negates membership; 'x' absent from 'abc' gives True.
• 'x' in 'abc' is False.

How It Works:
• Boolean negation of in.

Step-by-Step Execution:
• 1. in -> False. 2. not in -> True.

Order of Operations:
• not in reads as one operator family.

Common Use Cases:
• Allowlist characters not in forbidden set.

Edge Cases:
• Same complexity as in.

Performance Considerations:
• Prefer if c not in s: for readability.

Examples:
• Use sets for large alphabets.

Notes:
• operator.contains(container, item) mirrors the in protocol for generic code.`
  }),
  
  // 51-60: Truthiness and Falsiness
  (_i: number) => ({ 
    q: `If x = 0, is x Truthy?`, 
    o: ["No", "Yes", "Only in loops", "Error"], 
    c: 0, 
    e: "0 is Falsy.",
    de: `In Python, values are evaluated as either "truthy" or "falsy" in boolean contexts. The number 0 is falsy, meaning it evaluates to False in conditional statements. If x = 0, then x is not truthy - it's falsy. Understanding truthiness is crucial for writing correct conditional statements.

Falsy values:
• 0 is falsy (evaluates to False)
• bool(0) = False
• if 0: ... (doesn't execute)
• Zero is falsy

How it works:
• Python evaluates values in boolean context
• 0 evaluates to False
• Falsy values: 0, 0.0, "", [], {}, None, False
• Truthy values: everything else

Common falsy values:
• 0, 0.0 (zero numbers)
• "" (empty string)
• [], {}, () (empty collections)
• None, False

Common uses:
• Conditional statements: if x: ... (checks if truthy)
• Validation: if not x: ... (checks if falsy)
• Default values: x or default
• Boolean evaluation

Example: If x = 0, then x is falsy (not truthy). In a conditional statement like if x:, the block would not execute because 0 is falsy.

Key Distinctions:
• Numeric zero is falsy; bool(0) is False — the question asks if x is truthy.
• Non-zero ints are truthy; zero is the classic falsy counterexample.

How It Works:
• Truthiness uses __bool__ for int, zero is False.

Step-by-Step Execution:
• 1. Take 0. 2. Convert to bool. 3. False.

Order of Operations:
• if x: branches on truthiness, not explicit == True.

Common Use Cases:
• Guarding divisions and defaulting empty counts.

Edge Cases:
• False is subclass of int in a sense — avoid mixing in arithmetic.

Performance Considerations:
• Trivial.

Examples:
• bool(0.0) is also False.

Notes:
• Use is not None when 0 is a valid value.`
  }),
  (_i: number) => ({ 
    q: `If x = 1, is x Truthy?`, 
    o: ["Yes", "No", "Only if positive", "Error"], 
    c: 0, 
    e: "Non-zero numbers are Truthy.",
    de: `In Python, non-zero numbers are truthy, meaning they evaluate to True in boolean contexts. If x = 1, then x is truthy. Any non-zero number (positive or negative, integer or float) is truthy. Understanding truthiness is essential for conditional statements.

Truthy numbers:
• 1 is truthy (evaluates to True)
• bool(1) = True
• if 1: ... (executes)
• Any non-zero number is truthy

How it works:
• Python evaluates values in boolean context
• Non-zero numbers evaluate to True
• 1, -1, 3.14, -100 are all truthy
• Only 0 and 0.0 are falsy

Examples:
• 1 is truthy
• -1 is truthy
• 3.14 is truthy
• 0 is falsy (only zero)

Common uses:
• Conditional statements: if x: ... (checks if truthy)
• Validation: if x: ... (checks if non-zero)
• Boolean evaluation
• Default values: x or default

Example: If x = 1, then x is truthy. In a conditional statement like if x:, the block would execute because 1 is truthy.

Key Distinctions:
• Integer one is truthy; bool(1) is True.
• Only zero among ints is falsy in truthiness.

How It Works:
• Non-zero ints are True in boolean context.

Step-by-Step Execution:
• 1. Take 1. 2. bool -> True.

Order of Operations:
• Truthiness before logical operators.

Common Use Cases:
• Counters and flags represented as ints.

Edge Cases:
• Negative ints are truthy too.

Performance Considerations:
• Trivial.

Examples:
• bool(-1) is True.

Notes:
• Explicit comparisons for API clarity.`
  }),
  (_i: number) => ({ 
    q: `If x = [], is bool(x) True?`, 
    o: ["No", "Yes", "Error", "None"], 
    c: 0, 
    e: "Empty lists are Falsy.",
    de: `Empty lists are falsy in Python, meaning they evaluate to False in boolean contexts. If x = [], then bool(x) returns False. Empty collections (lists, dictionaries, tuples, sets) are all falsy. Understanding this is important for conditional statements that check if collections have elements.

Empty list falsiness:
• [] is falsy (evaluates to False)
• bool([]) = False
• if []: ... (doesn't execute)
• Empty collections are falsy

How it works:
• Python evaluates values in boolean context
• Empty list evaluates to False
• Non-empty list evaluates to True
• Empty collections are falsy

Falsy collections:
• [] (empty list)
• {} (empty dictionary)
• () (empty tuple)
• set() (empty set)

Truthy collections:
• [1, 2] (non-empty list)
• {1: 2} (non-empty dictionary)
• (1, 2) (non-empty tuple)

Common uses:
• Conditional statements: if list: ... (checks if non-empty)
• Validation: if not list: ... (checks if empty)
• Boolean evaluation
• Default values: list or default

Example: If x = [], then bool(x) returns False because empty lists are falsy. In a conditional statement like if x:, the block would not execute.

Key Distinctions:
• Empty list is falsy; bool([]) is False — the question asks if bool is True.
• Non-empty list is truthy; empty container is empty.

How It Works:
• len([]) == 0 correlates with falsy.

Step-by-Step Execution:
• 1. Evaluate []. 2. __bool__ uses len; 0 -> False.

Order of Operations:
• Containers implement __bool__ via length.

Common Use Cases:
• Checking for work before processing.

Edge Cases:
• Empty vs None: [] is falsy but is not None.

Performance Considerations:
• O(1) for list length.

Examples:
• bool([False]) is True because list is non-empty.

Notes:
• Use if not items: for empty sequences.`
  }),
  (_i: number) => ({ 
    q: `If x = [1, 2], is x Truthy?`, 
    o: ["Yes", "No", "Only if non-empty", "Error"], 
    c: 0, 
    e: "Non-empty lists are Truthy.",
    de: `Non-empty lists are truthy in Python, meaning they evaluate to True in boolean contexts. If x = [1, 2], then x is truthy. Any list with at least one element is truthy. Understanding this is important for conditional statements that check if collections have elements.

Non-empty list truthiness:
• [1, 2] is truthy (evaluates to True)
• bool([1, 2]) = True
• if [1, 2]: ... (executes)
• Non-empty collections are truthy

How it works:
• Python evaluates values in boolean context
• Non-empty list evaluates to True
• Any list with elements is truthy
• Only empty list [] is falsy

Examples:
• [1, 2] is truthy
• [0] is truthy (even with zero element)
• [False] is truthy (list is non-empty)
• [] is falsy (only empty list)

Common uses:
• Conditional statements: if list: ... (checks if non-empty)
• Validation: if list: ... (checks if has elements)
• Boolean evaluation
• Default values: list or default

Example: If x = [1, 2], then x is truthy. In a conditional statement like if x:, the block would execute because the list is non-empty.

Key Distinctions:
• Non-empty list [1,2] is truthy — len > 0.
• [] is falsy; this list has elements.

How It Works:
• Elements need not be truthy themselves; container length matters.

Step-by-Step Execution:
• 1. List has items. 2. bool True.

Order of Operations:
• Nested lists: outer truthiness from length.

Common Use Cases:
• Processing queues with pending jobs.

Edge Cases:
• List of all falsy elements is still truthy if non-empty.

Performance Considerations:
• O(1) length check.

Examples:
• if lst: is idiomatic.

Notes:
• Beware of huge lists — truthiness only checks emptiness.`
  }),
  (_i: number) => ({ 
    q: `If x = "", is x Truthy?`, 
    o: ["No", "Yes", "Only in functions", "Error"], 
    c: 0, 
    e: "Empty strings are Falsy.",
    de: `Empty strings are falsy in Python, meaning they evaluate to False in boolean contexts. If x = "", then x is not truthy - it's falsy. Empty strings are one of the common falsy values in Python. Understanding this is important for conditional statements that check if strings have content.

Empty string falsiness:
• "" is falsy (evaluates to False)
• bool("") = False
• if "": ... (doesn't execute)
• Empty string is falsy

How it works:
• Python evaluates values in boolean context
• Empty string evaluates to False
• Non-empty string evaluates to True
• Only "" is falsy for strings

Examples:
• "" is falsy
• "hello" is truthy
• " " is truthy (space is a character)
• "" is falsy (only empty string)

Common uses:
• Conditional statements: if string: ... (checks if non-empty)
• Validation: if not string: ... (checks if empty)
• Boolean evaluation
• Default values: string or default

Example: If x = "", then x is falsy (not truthy). In a conditional statement like if x:, the block would not execute because empty strings are falsy.

Key Distinctions:
• Empty string is falsy; useful for optional input checks.
• Non-empty string is truthy even if only whitespace — strip first if needed.

How It Works:
• len('') == 0.

Step-by-Step Execution:
• 1. ''. 2. bool False.

Order of Operations:
• Strings use length for truthiness.

Common Use Cases:
• Form validation before database write.

Edge Cases:
• Whitespace-only ' ' is truthy.

Performance Considerations:
• O(1).

Examples:
• bool('0') is True.

Notes:
• Use .strip() or explicit checks for UI fields.`
  }),
  (_i: number) => ({ 
    q: `If x = "hello", is x Truthy?`, 
    o: ["Yes", "No", "Only if non-empty", "Error"], 
    c: 0, 
    e: "Non-empty strings are Truthy.",
    de: `Non-empty strings are truthy in Python, meaning they evaluate to True in boolean contexts. If x = "hello", then x is truthy. Any string with at least one character is truthy. Understanding this is important for conditional statements that check if strings have content.

Non-empty string truthiness:
• "hello" is truthy (evaluates to True)
• bool("hello") = True
• if "hello": ... (executes)
• Non-empty strings are truthy

How it works:
• Python evaluates values in boolean context
• Non-empty string evaluates to True
• Any string with characters is truthy
• Only "" is falsy for strings

Examples:
• "hello" is truthy
• " " is truthy (space is a character)
• "0" is truthy (string, not number)
• "" is falsy (only empty string)

Common uses:
• Conditional statements: if string: ... (checks if non-empty)
• Validation: if string: ... (checks if has content)
• Boolean evaluation
• Default values: string or default

Example: If x = "hello", then x is truthy. In a conditional statement like if x:, the block would execute because the string is non-empty.

Key Distinctions:
• Non-empty string 'hello' is truthy.
• Even a single character string is truthy.

How It Works:
• Content does not need to be 'truthy' in English sense — only non-empty.

Step-by-Step Execution:
• 1. String has length > 0. 2. True.

Order of Operations:
• Same rule for all non-empty str.

Common Use Cases:
• Guarding message bodies.

Edge Cases:
• Unicode empty string is still falsy.

Performance Considerations:
• O(1) length.

Examples:
• bool('False') is True — non-empty string.

Notes:
• Do not confuse string 'False' with bool False.`
  }),
  (_i: number) => ({ 
    q: `If x = None, is x Truthy?`, 
    o: ["No", "Yes", "Only in classes", "Error"], 
    c: 0, 
    e: "None is Falsy.",
    de: `None is falsy in Python, meaning it evaluates to False in boolean contexts. If x = None, then x is not truthy - it's falsy. None is one of the fundamental falsy values in Python. Understanding this is crucial for conditional statements that check for None.

None falsiness:
• None is falsy (evaluates to False)
• bool(None) = False
• if None: ... (doesn't execute)
• None is falsy

How it works:
• Python evaluates values in boolean context
• None evaluates to False
• None is a singleton falsy value
• Always use is None (not == None)

Important note:
• None is falsy
• But use is None for None checks
• if x is None: ... (recommended)
• if x == None: ... (works but not recommended)

Common uses:
• Conditional statements: if x is None: ... (recommended)
• Validation: if not x: ... (checks if falsy)
• Boolean evaluation
• Default values: x or default

Example: If x = None, then x is falsy (not truthy). In a conditional statement like if x:, the block would not execute because None is falsy. However, always use is None for None checks: if x is None: ...

Key Distinctions:
• None is falsy; bool(None) is False.
• None is its own type; no value means no truth.

How It Works:
• Testing if x is None is clearer than bool(x) for None.

Step-by-Step Execution:
• 1. None. 2. __bool__ raises? No — None is falsy via __bool__ not defined — uses NoneType rules.

Order of Operations:
• Actually None is falsy by language definition.

Common Use Cases:
• Optional values defaulting to None.

Edge Cases:
• Distinguish None from 0 and [].

Performance Considerations:
• Trivial.

Examples:
• if x is None: is preferred over not x when 0 is valid.

Notes:
• Sentinel objects other than None need explicit rules.`
  }),
  (_i: number) => ({ 
    q: `If x = {}, is x Truthy?`, 
    o: ["No", "Yes", "Only if non-empty", "Error"], 
    c: 0, 
    e: "Empty dictionaries are Falsy.",
    de: `Empty dictionaries are falsy in Python, meaning they evaluate to False in boolean contexts. If x = {}, then x is not truthy - it's falsy. Empty collections (dictionaries, lists, tuples, sets) are all falsy. Understanding this is important for conditional statements that check if dictionaries have key-value pairs.

Empty dictionary falsiness:
• {} is falsy (evaluates to False)
• bool({}) = False
• if {}: ... (doesn't execute)
• Empty collections are falsy

How it works:
• Python evaluates values in boolean context
• Empty dictionary evaluates to False
• Non-empty dictionary evaluates to True
• Empty collections are falsy

Falsy collections:
• {} (empty dictionary)
• [] (empty list)
• () (empty tuple)
• set() (empty set)

Truthy collections:
• {1: 2} (non-empty dictionary)
• [1, 2] (non-empty list)
• (1, 2) (non-empty tuple)

Common uses:
• Conditional statements: if dict: ... (checks if non-empty)
• Validation: if not dict: ... (checks if empty)
• Boolean evaluation
• Default values: dict or default

Example: If x = {}, then x is falsy (not truthy). In a conditional statement like if x:, the block would not execute because empty dictionaries are falsy.

Key Distinctions:
• Empty dict {} is falsy — no keys.
• Non-empty dict is truthy even if values are falsy.

How It Works:
• len({}) == 0.

Step-by-Step Execution:
• 1. Empty mapping. 2. bool False.

Order of Operations:
• dict truthiness uses size, not values.

Common Use Cases:
• Checking for configuration before use.

Edge Cases:
• Default dict with keys still truthy.

Performance Considerations:
• O(1) length.

Examples:
• bool({0: False}) is True.

Notes:
• Use .get for missing keys.`
  }),
  (_i: number) => ({ 
    q: `If x = {1: 2}, is x Truthy?`, 
    o: ["Yes", "No", "Only if non-empty", "Error"], 
    c: 0, 
    e: "Non-empty dictionaries are Truthy.",
    de: `Non-empty dictionaries are truthy in Python, meaning they evaluate to True in boolean contexts. If x = {1: 2}, then x is truthy. Any dictionary with at least one key-value pair is truthy. Understanding this is important for conditional statements that check if dictionaries have content.

Non-empty dictionary truthiness:
• {1: 2} is truthy (evaluates to True)
• bool({1: 2}) = True
• if {1: 2}: ... (executes)
• Non-empty collections are truthy

How it works:
• Python evaluates values in boolean context
• Non-empty dictionary evaluates to True
• Any dictionary with key-value pairs is truthy
• Only {} is falsy for dictionaries

Examples:
• {1: 2} is truthy
• {0: 0} is truthy (even with zero values)
• {False: False} is truthy (dictionary is non-empty)
• {} is falsy (only empty dictionary)

Common uses:
• Conditional statements: if dict: ... (checks if non-empty)
• Validation: if dict: ... (checks if has key-value pairs)
• Boolean evaluation
• Default values: dict or default

Example: If x = {1: 2}, then x is truthy. In a conditional statement like if x:, the block would execute because the dictionary is non-empty.

Key Distinctions:
• Dict with one entry {1:2} is truthy — has keys.
• Empty {} is falsy; any key makes it truthy.

How It Works:
• Values can be anything; presence of keys matters.

Step-by-Step Execution:
• 1. Non-empty dict. 2. True.

Order of Operations:
• Key existence drives truthiness.

Common Use Cases:
• Caches and counters as dicts.

Edge Cases:
• Very large dicts still truthy if non-empty.

Performance Considerations:
• O(1) emptiness check.

Examples:
• if d: before iterating.

Notes:
• Compare to None for unset vs empty dict.`
  }),
  (_i: number) => ({ 
    q: `If x = (), is x Truthy?`, 
    o: ["No", "Yes", "Only if non-empty", "Error"], 
    c: 0, 
    e: "Empty tuples are Falsy.",
    de: `Empty tuples are falsy in Python, meaning they evaluate to False in boolean contexts. If x = (), then x is not truthy - it's falsy. Empty collections (tuples, lists, dictionaries, sets) are all falsy. Understanding this is important for conditional statements that check if tuples have elements.

Empty tuple falsiness:
• () is falsy (evaluates to False)
• bool(()) = False
• if (): ... (doesn't execute)
• Empty collections are falsy

How it works:
• Python evaluates values in boolean context
• Empty tuple evaluates to False
• Non-empty tuple evaluates to True
• Empty collections are falsy

Falsy collections:
• () (empty tuple)
• [] (empty list)
• {} (empty dictionary)
• set() (empty set)

Truthy collections:
• (1, 2) (non-empty tuple)
• [1, 2] (non-empty list)
• {1: 2} (non-empty dictionary)

Common uses:
• Conditional statements: if tuple: ... (checks if non-empty)
• Validation: if not tuple: ... (checks if empty)
• Boolean evaluation
• Default values: tuple or default

Example: If x = (), then x is falsy (not truthy). In a conditional statement like if x:, the block would not execute because empty tuples are falsy.

Key Distinctions:
• Empty tuple () is falsy — zero-length sequence.
• Non-empty tuple truthy even if items falsy.

How It Works:
• Tuple length zero is the empty tuple singleton.

Step-by-Step Execution:
• 1. (). 2. False.

Order of Operations:
• Immutable empty sequence.

Common Use Cases:
• Function return () as no result.

Edge Cases:
• Singleton empty tuple () is shared.

Performance Considerations:
• O(1).

Examples:
• bool((0,)) is True.

Notes:
• Named tuples follow same truthiness.`
  }),
  
  // 61-70: Conditional Keywords
  (_i: number) => ({ 
    q: `Which keyword links if and else?`, 
    o: ["elif", "elseif", "then", "ifnot"], 
    c: 0, 
    e: "Python uses elif.",
    de: `Python uses the keyword elif (short for "else if") to link multiple conditional branches between if and else. elif allows you to check multiple conditions in sequence. Unlike some languages that use "elseif" or "else if", Python uses the single keyword elif followed by a condition and colon.

elif keyword:
• Python uses elif (not elseif or else if)
• Links if and else statements
• Allows multiple conditional branches
• Syntax: elif condition:

How it works:
• if condition1: ... (first condition)
• elif condition2: ... (additional conditions)
• elif condition3: ... (more conditions)
• else: ... (default case)

Example structure:
if x > 10:
    print("large")
elif x > 5:
    print("medium")
elif x > 0:
    print("small")
else:
    print("zero or negative")

Common uses:
• Multiple conditional branches
• Cascading conditions
• Range checking
• Conditional logic

Example: Python uses elif to link if and else. The syntax is: if condition1: ... elif condition2: ... else: ...

Key Distinctions:
• else is the keyword that pairs with if to introduce the alternative branch.
• elif adds extra tests before else; it is not the direct if/else link.

How It Works:
• if suite runs when condition true; else suite when all preceding tests failed.

Step-by-Step Execution:
• 1. if cond. 2. optional elif ladder. 3. else for final fallback.

Order of Operations:
• else attaches to the nearest if at the same indentation.

Common Use Cases:
• Explaining two-way branching to beginners.

Edge Cases:
• else on for/while means something different — no break took place.

Performance Considerations:
• Parsing is indentation-based.

Examples:
• else: after for runs if the loop finished without break.

Notes:
• Read the language reference for the full compound-statement grammar.`
  }),
  (_i: number) => ({ 
    q: `Can you have an 'if' without an 'else'?`, 
    o: ["Yes", "No", "Only in functions", "Error"], 
    c: 0, 
    e: "else is optional.",
    de: `The else clause is optional in Python if statements. You can have an if statement without an else block. If the condition is True, the if block executes; if False and there's no else, nothing happens. The else block is only executed when the if condition (and all elif conditions, if any) are False.

Optional else:
• else is optional
• if can stand alone
• if condition is False and no else, nothing executes
• else only needed for default case

How it works:
• if condition: ... (executes if True)
• No else needed
• If condition False, nothing happens
• else provides default behavior

Examples:
• if x > 0: print("positive") (no else)
• if x > 0: print("positive") else: print("non-positive") (with else)
• Both are valid

Common uses:
• Conditional execution without default
• Optional actions
• Guard clauses
• Conditional logic

Example: Yes, you can have an if without an else. The else clause is optional. If the condition is False and there's no else, nothing executes.

Key Distinctions:
• else is optional; if alone can run a branch without alternative.
• If condition is False and nothing else, nothing runs.

How It Works:
• Single-branch conditionals are common.

Step-by-Step Execution:
• 1. Evaluate condition. 2. Execute suite or skip.

Order of Operations:
• No else required.

Common Use Cases:
• Early validation and guards.

Edge Cases:
• pass can be used as placeholder suite.

Performance Considerations:
• Trivial cost.

Examples:
• Combine with return for early exit style.

Notes:
• PEP 8 spacing around if.`
  }),
  (_i: number) => ({ 
    q: `Can you have multiple 'elif' statements?`, 
    o: ["Yes", "No", "Only two", "Error"], 
    c: 0, 
    e: "You can have as many elif as needed.",
    de: `Python allows you to have multiple elif statements in a single if-elif-else chain. You can have as many elif clauses as needed to check different conditions. Each elif is evaluated in order, and the first one that is True executes, with the rest being skipped.

Multiple elif:
• Yes, you can have multiple elif statements
• No limit on number of elif clauses
• Each elif checked in order
• First True condition executes

How it works:
• if condition1: ... (checked first)
• elif condition2: ... (checked if first False)
• elif condition3: ... (checked if previous False)
• else: ... (executes if all False)

Example:
if x > 100:
    print("very large")
elif x > 50:
    print("large")
elif x > 10:
    print("medium")
elif x > 0:
    print("small")
else:
    print("zero or negative")

Common uses:
• Multiple conditional branches
• Cascading conditions
• Range checking
• Complex conditional logic

Example: Yes, you can have multiple elif statements. There's no limit - you can have as many elif clauses as needed to check different conditions.

Key Distinctions:
• Multiple elif clauses are allowed — they test in order after the if fails.
• Each elif is another condition; first True wins.

How It Works:
• Ladder is like switch-case without fall-through.

Step-by-Step Execution:
• 1. Test if. 2. elif chain until match. 3. else optional.

Order of Operations:
• elif shares same block level as if.

Common Use Cases:
• HTTP status mapping, menu choices.

Edge Cases:
• Too many elifs: consider dict dispatch.

Performance Considerations:
• Linear scan of conditions.

Examples:
• match/case in 3.10+ for structural patterns.

Notes:
• Keep elif bodies small for readability.`
  }),
  (_i: number) => ({ 
    q: `What happens if all conditions in if/elif are False?`, 
    o: ["else block executes", "Error", "Nothing", "Returns None"], 
    c: 0, 
    e: "else block executes when all conditions are False.",
    de: `If all conditions in an if-elif chain are False, and there is an else clause, the else block executes. The else block provides a default action when none of the conditions are met. If there's no else clause, nothing executes when all conditions are False.

else execution:
• else block executes when all conditions False
• Provides default behavior
• Only executes if all if/elif are False
• Optional but useful for default cases

How it works:
• if condition1: ... (False, skip)
• elif condition2: ... (False, skip)
• elif condition3: ... (False, skip)
• else: ... (executes - default case)

Example:
if x > 10:
    print("large")
elif x > 5:
    print("medium")
else:
    print("small")  # Executes if x <= 5

Common uses:
• Default behavior
• Handling all other cases
• Fallback actions
• Complete conditional logic

Example: If all conditions in if/elif are False, the else block executes (if present). This provides default behavior when none of the conditions are met.

Key Distinctions:
• If all if and elif conditions are False and an else exists, else runs.
• Without else, nothing runs from that ladder.

How It Works:
• First True branch wins; if none, else catches.

Step-by-Step Execution:
• 1. All tests False. 2. Jump to else.

Order of Operations:
• else attaches to this if chain only.

Common Use Cases:
• Default handling in parsers.

Edge Cases:
• Ensure exhaustive elif for enums when possible.

Performance Considerations:
• Worst case evaluates all conditions.

Examples:
• assert never in else for impossible states — use sparingly.

Notes:
• Consider match/case for clarity.`
  }),
  (_i: number) => ({ 
    q: `What happens if no 'else' and all conditions are False?`, 
    o: ["Nothing executes", "Error", "Returns None", "Executes if block"], 
    c: 0, 
    e: "If no else and all conditions False, nothing executes.",
    de: `If there's no else clause and all conditions (if and all elif) are False, nothing executes. The program simply continues to the next statement after the if-elif chain. No error occurs - it's perfectly valid to have an if statement without an else.

No else behavior:
• If no else and all conditions False, nothing executes
• Program continues normally
• No error occurs
• Valid Python code

How it works:
• if condition1: ... (False, skip)
• elif condition2: ... (False, skip)
• No else clause
• Nothing executes, program continues

Example:
if x > 10:
    print("large")
elif x > 5:
    print("medium")
# If x <= 5, nothing happens, program continues

Common uses:
• Optional actions
• Conditional execution without default
• Guard clauses
• Conditional logic

Example: If there's no else and all conditions are False, nothing executes. The program simply continues to the next statement - no error occurs.

Key Distinctions:
• Without else, if all conditions False, nothing executes — no branch runs.
• Contrast with if/else where default runs.

How It Works:
• Silent skip is valid.

Step-by-Step Execution:
• 1. Evaluate ladder. 2. None true. 3. Fall through.

Order of Operations:
• Optional side effects only on success.

Common Use Cases:
• Feature flags that do nothing when off.

Edge Cases:
• Logging missing else may hide bugs.

Performance Considerations:
• No cost if nothing runs.

Examples:
• Explicit else: pass documents intent.

Notes:
• Use elif True else or assert for debugging.`
  }),
  (_i: number) => ({ 
    q: `Which operator checks inequality?`, 
    o: ["!=", "<>", "not", "=="], 
    c: 0, 
    e: "!= is standard (<> was in Python 2).",
    de: `The != operator checks for inequality in Python. It returns True if two values are not equal, False if they are equal. The != operator is the standard way to check inequality in Python 3. Note that <> was used in Python 2 but is not available in Python 3.

Inequality operator:
• != is the standard inequality operator
• Returns True if values not equal
• Returns False if values equal
• Used in conditional statements

How it works:
• a != b returns True if a ≠ b
• a != b returns False if a == b
• Opposite of == operator
• Works with any comparable types

Examples:
• 5 != 3 = True (not equal)
• 5 != 5 = False (equal)
• "hello" != "world" = True (not equal)
• "hello" != "hello" = False (equal)

Python 2 vs Python 3:
• Python 2: != and <> both worked
• Python 3: Only != (<> removed)
• != is the standard way

Common uses:
• Conditional statements: if x != 0:
• Checking inequality: if status != "error":
• Validation and comparisons
• Boolean expressions

Example: The != operator checks inequality. It's the standard way in Python 3 (<> was used in Python 2 but is not available in Python 3).

Key Distinctions:
• Inequality uses != or optionally <> in older docs — Python uses !=.
• == tests equality; != is its negation.

How It Works:
• Rich comparison != calls __ne__.

Step-by-Step Execution:
• 1. Compare values. 2. Return not equal.

Order of Operations:
• != and == have same precedence.

Common Use Cases:
• Filtering distinct items.

Edge Cases:
• nan != nan is True in IEEE floats.

Performance Considerations:
• Same cost as ==.

Examples:
• 1 != True is False in Python 3.

Notes:
• Use != for value inequality.`
  }),
  (_i: number) => ({ 
    q: `Which operator checks identity?`, 
    o: ["is", "==", "=", "==="], 
    c: 0, 
    e: "is checks object identity.",
    de: `The is operator checks object identity in Python - whether two variables reference the same object in memory. The is operator is different from == which checks value equality. The is operator is commonly used to check for None, True, False, and other singleton objects.

Identity operator:
• is checks object identity (same object)
• Different from == (which checks values)
• Returns True if same object
• Returns False if different objects

How it works:
• Checks if variables reference same object
• Compares memory addresses
• Returns True if same object
• Returns False if different objects

Examples:
• 5 is 5 = True (cached integers)
• [1, 2] is [1, 2] = False (different objects)
• None is None = True (singleton)
• x is None = True (if x is None)

Important distinction:
• == compares values (equality)
• is compares identity (same object)
• Use == for value comparison
• Use is for identity checks (especially None)

Common uses:
• Checking for None: if x is None:
• Checking for singletons: if x is True:
• Identity checks
• Object comparison

Example: The is operator checks object identity. It's commonly used to check for None: if x is None: ... (not if x == None:)

Key Distinctions:
• Identity uses is and is not — same object in memory.
• == can be True while is is False for different objects with same value.

How It Works:
• Identity compares ids.

Step-by-Step Execution:
• 1. Compare id(a) and id(b).

Order of Operations:
• is is not overloadable like == for custom classes by default.

Common Use Cases:
• Singletons: None, small ints sometimes, empty tuple.

Edge Cases:
• CPython caches small ints — do not rely on is for values.

Performance Considerations:
• Pointer compare.

Examples:
• type(obj) is Foo vs isinstance — related pattern.

Notes:
• Never compare str with is for value.`
  }),
  (_i: number) => ({ 
    q: `What is the syntax for if statement?`, 
    o: ["if condition:", "if (condition)", "if condition then", "if condition {"], 
    c: 0, 
    e: "Python uses colon and indentation.",
    de: `Python if statements use a colon (:) after the condition and indentation to define the block. The syntax is: if condition:. Unlike some languages that use parentheses or braces, Python uses a colon and indentation. The colon is required, and the indented code below is the block that executes if the condition is True.

if syntax:
• if condition: (colon required)
• Indentation defines block
• No parentheses needed (but allowed)
• No braces or "then" keyword

How it works:
• if condition: (colon after condition)
• Next line(s) indented = block
• Block executes if condition True
• Dedent to end block

Examples:
• if x > 0: print("positive") (one line)
• if x > 0: (multi-line)
    print("positive")
    print("x is positive")

Common uses:
• Conditional execution
• Control flow
• Decision making
• Conditional logic

Example: Python if statement syntax is: if condition:. The colon is required, and the indented code below is the block that executes if the condition is True.

Key Distinctions:
• if statement syntax: if condition: suite — colon required.
• condition can be any expression; truthiness decides.

How It Works:
• Indentation defines the suite body.

Step-by-Step Execution:
• 1. Evaluate condition. 2. If truthy, run suite.

Order of Operations:
• if is a compound statement header.

Common Use Cases:
• Every branching program.

Edge Cases:
• Multiline condition with parentheses.

Performance Considerations:
• Condition evaluated once.

Examples:
• if x := expr: walrus in 3.8+.

Notes:
• PEP 8: space after if.`
  }),
  (_i: number) => ({ 
    q: `What is the syntax for else statement?`, 
    o: ["else:", "else {", "else then", "else if"], 
    c: 0, 
    e: "Python uses colon and indentation.",
    de: `Python else statements use a colon (:) and indentation to define the block. The syntax is: else:. The else keyword is followed by a colon, and the indented code below is the block that executes when the if (and all elif) conditions are False. Python uses indentation, not braces or "then" keywords.

else syntax:
• else: (colon required)
• Indentation defines block
• No condition (executes when if/elif False)
• No braces or "then" keyword

How it works:
• else: (colon after else)
• Next line(s) indented = block
• Block executes if all if/elif False
• Dedent to end block

Examples:
• if x > 0: print("positive") else: print("non-positive") (one line)
• if x > 0: (multi-line)
    print("positive")
else:
    print("non-positive")

Common uses:
• Default behavior
• Handling all other cases
• Fallback actions
• Complete conditional logic

Example: Python else statement syntax is: else:. The colon is required, and the indented code below is the block that executes when all if/elif conditions are False.

Key Distinctions:
• else clause: else: suite — pairs with nearest if.
• elif is not else; else is the fallback.

How It Works:
• Runs when no if or elif matched.

Step-by-Step Execution:
• 1. All tests false. 2. else suite.

Order of Operations:
• else aligns with if at same indent.

Common Use Cases:
• Default paths.

Edge Cases:
• else with try/except/for differs.

Performance Considerations:
• No condition on else.

Examples:
• else: after for runs if no break.

Notes:
• Keep else bodies short.`
  }),
  (_i: number) => ({ 
    q: `What is the syntax for elif statement?`, 
    o: ["elif condition:", "elseif condition:", "elif (condition)", "elif condition then"], 
    c: 0, 
    e: "Python uses elif with colon.",
    de: `Python elif statements use the keyword elif followed by a condition and colon. The syntax is: elif condition:. The elif keyword (short for "else if") is followed by a condition, then a colon, and the indented code below is the block that executes if the condition is True and all previous if/elif conditions were False.

elif syntax:
• elif condition: (colon required)
• Indentation defines block
• No parentheses needed (but allowed)
• No braces or "then" keyword

How it works:
• elif condition: (colon after condition)
• Next line(s) indented = block
• Block executes if condition True and previous False
• Dedent to end block

Examples:
• if x > 10: print("large") elif x > 5: print("medium") else: print("small") (one line)
• if x > 10: (multi-line)
    print("large")
elif x > 5:
    print("medium")
else:
    print("small")

Common uses:
• Multiple conditional branches
• Cascading conditions
• Range checking
• Complex conditional logic

Example: Python elif statement syntax is: elif condition:. The colon is required, and the indented code below is the block that executes if the condition is True and all previous conditions were False.

Key Distinctions:
• elif is not a standalone statement — it continues an if chain.
• Syntax: elif condition: suite — arbitrary many.

How It Works:
• elif is equivalent to nested else: if.

Step-by-Step Execution:
• 1. Previous conditions false. 2. Test elif.

Order of Operations:
• elif at same indentation as if.

Common Use Cases:
• Replacing nested if trees.

Edge Cases:
• match/case alternative for enums.

Performance Considerations:
• Sequential evaluation.

Examples:
• Convert long elif to dict lookup when possible.

Notes:
• Document ordering when conditions overlap.`
  }),
  
  // 71-80: Ternary Operator
  (_i: number) => ({ 
    q: `What is 5 if 5 > 3 else 3?`, 
    o: ["5", "3", "Error", "None"], 
    c: 0, 
    e: "Ternary operator: value_if_true if condition else value_if_false.",
    de: `Python's ternary operator (conditional expression) has the syntax: value_if_true if condition else value_if_false. 5 if 5 > 3 else 3 evaluates the condition first: 5 > 3 is True, so it returns 5 (the value_if_true). The ternary operator is a concise way to write simple if-else statements in a single line.

Ternary operator syntax:
• value_if_true if condition else value_if_false
• Evaluates condition first
• Returns value_if_true if condition True
• Returns value_if_false if condition False

How it works:
• 5 if 5 > 3 else 3
• First: 5 > 3 = True
• Since True, returns 5 (value_if_true)
• Result: 5

Examples:
• 5 if 5 > 3 else 3 = 5 (condition True)
• 3 if 3 > 5 else 5 = 5 (condition False)
• 'yes' if True else 'no' = 'yes'

Common uses:
• Concise conditional assignment: x = 5 if condition else 3
• Simple if-else in one line
• Conditional values
• Default values

Example: 5 if 5 > 3 else 3 returns 5 because the condition (5 > 3) is True, so it returns the value_if_true (5).

Key Distinctions:
• Conditional expression: x if cond else y — evaluates condition first.
• 5 > 3 is True, so pick 5 not 3.

How It Works:
• Only one branch expression is evaluated.

Step-by-Step Execution:
• 1. Test 5 > 3 True. 2. Result 5.

Order of Operations:
• Ternary has lower precedence than most operators — parenthesize.

Common Use Cases:
• Inline min/max style choices.

Edge Cases:
• Do not put complex expressions without parens in ternary.

Performance Considerations:
• Evaluates condition then one branch.

Examples:
• a if b else c if d else e chains — careful.

Notes:
• PEP 8 line breaks for long ternaries.`
  }),
  (_i: number) => ({ 
    q: `What is 3 if 3 > 5 else 5?`, 
    o: ["5", "3", "Error", "None"], 
    c: 0, 
    e: "Ternary operator returns else value when condition is False.",
    de: `Python's ternary operator returns the else value when the condition is False. 3 if 3 > 5 else 5 evaluates the condition first: 3 > 5 is False, so it returns 5 (the value_if_false). The ternary operator provides a concise way to choose between two values based on a condition.

Ternary operator:
• 3 if 3 > 5 else 5
• First: 3 > 5 = False
• Since False, returns 5 (value_if_false)
• Result: 5

How it works:
• Evaluates condition: 3 > 5 = False
• Since condition is False, returns else value
• Returns 5 (value_if_false)
• Result: 5

Examples:
• 3 if 3 > 5 else 5 = 5 (condition False)
• 5 if 5 > 3 else 3 = 5 (condition True)
• 'no' if False else 'yes' = 'yes'

Common uses:
• Concise conditional assignment: x = 3 if condition else 5
• Simple if-else in one line
• Conditional values
• Default values

Example: 3 if 3 > 5 else 5 returns 5 because the condition (3 > 5) is False, so it returns the value_if_false (5).

Key Distinctions:
• Condition 3 > 5 is False — else branch 5 is chosen.
• If true branch would run — here it does not.

How It Works:
• 3 is not greater than 5.

Step-by-Step Execution:
• 1. False condition. 2. Pick else 5.

Order of Operations:
• Ternary is expression, not statement.

Common Use Cases:
• Defaulting when check fails.

Edge Cases:
• Ensure both branches are same type when possible.

Performance Considerations:
• One branch evaluated.

Examples:
• Use full if when branches have statements.

Notes:
• Readable names for condition and values.`
  }),
  (_i: number) => ({ 
    q: `What is 'yes' if True else 'no'?`, 
    o: ["'yes'", "'no'", "Error", "None"], 
    c: 0, 
    e: "Ternary with True condition returns first value.",
    de: `Python's ternary operator returns the value_if_true when the condition is True. 'yes' if True else 'no' evaluates the condition: True is True, so it returns 'yes' (the value_if_true). The ternary operator works with any values, including strings.

Ternary with True:
• 'yes' if True else 'no'
• Condition: True
• Since True, returns 'yes' (value_if_true)
• Result: 'yes'

How it works:
• Evaluates condition: True
• Since condition is True, returns value_if_true
• Returns 'yes'
• Result: 'yes'

Examples:
• 'yes' if True else 'no' = 'yes'
• 'yes' if False else 'no' = 'no'
• 'positive' if 5 > 0 else 'negative' = 'positive'

Common uses:
• Concise conditional assignment: status = 'yes' if condition else 'no'
• Simple if-else in one line
• Conditional string values
• Default values

Example: 'yes' if True else 'no' returns 'yes' because the condition (True) is True, so it returns the value_if_true ('yes').

Key Distinctions:
• String literals with ternary: condition True picks yes.
• True is truthy — left branch.

How It Works:
• Result is 'yes'.

Step-by-Step Execution:
• 1. True. 2. 'yes'.

Order of Operations:
• Ternary with strings.

Common Use Cases:
• UI labels toggling.

Edge Cases:
• Unicode strings same rules.

Performance Considerations:
• Trivial.

Examples:
• False picks 'no' in sibling question.

Notes:
• Multi-line strings in ternary need parentheses.`
  }),
  (_i: number) => ({ 
    q: `What is 'yes' if False else 'no'?`, 
    o: ["'no'", "'yes'", "Error", "None"], 
    c: 0, 
    e: "Ternary with False condition returns else value.",
    de: `Python's ternary operator returns the value_if_false when the condition is False. 'yes' if False else 'no' evaluates the condition: False is False, so it returns 'no' (the value_if_false). The ternary operator works with any values, including strings.

Ternary with False:
• 'yes' if False else 'no'
• Condition: False
• Since False, returns 'no' (value_if_false)
• Result: 'no'

How it works:
• Evaluates condition: False
• Since condition is False, returns value_if_false
• Returns 'no'
• Result: 'no'

Examples:
• 'yes' if False else 'no' = 'no'
• 'yes' if True else 'no' = 'yes'
• 'positive' if -5 > 0 else 'negative' = 'negative'

Common uses:
• Concise conditional assignment: status = 'yes' if condition else 'no'
• Simple if-else in one line
• Conditional string values
• Default values

Example: 'yes' if False else 'no' returns 'no' because the condition (False) is False, so it returns the value_if_false ('no').

Key Distinctions:
• Condition False selects else branch 'no'.
• True branch skipped.

How It Works:
• Result 'no'.

Step-by-Step Execution:
• 1. False. 2. 'no'.

Order of Operations:
• Ternary short-circuits branch evaluation.

Common Use Cases:
• Error messages vs success labels.

Edge Cases:
• Avoid side effects in conditions.

Performance Considerations:
• One branch runs.

Examples:
• Compare to and/or trick for defaults.

Notes:
• Keep conditions simple.`
  }),
  (_i: number) => ({ 
    q: `What is max(5, 3) if 5 > 3 else min(5, 3)?`, 
    o: ["5", "3", "Error", "None"], 
    c: 0, 
    e: "Ternary can use function calls.",
    de: `Python's ternary operator can use function calls in both the value_if_true and value_if_false parts. max(5, 3) if 5 > 3 else min(5, 3) evaluates the condition first: 5 > 3 is True, so it returns max(5, 3) which equals 5. Function calls are evaluated only for the selected branch.

Ternary with functions:
• max(5, 3) if 5 > 3 else min(5, 3)
• Condition: 5 > 3 = True
• Since True, evaluates max(5, 3) = 5
• Result: 5

How it works:
• Evaluates condition: 5 > 3 = True
• Since True, evaluates value_if_true: max(5, 3) = 5
• min(5, 3) is not evaluated (short-circuit)
• Result: 5

Examples:
• max(5, 3) if 5 > 3 else min(5, 3) = 5
• max(5, 3) if 3 > 5 else min(5, 3) = 3
• len([1, 2]) if True else len([]) = 2

Common uses:
• Conditional function calls
• Choosing between function results
• Conditional calculations
• Efficient conditional evaluation

Example: max(5, 3) if 5 > 3 else min(5, 3) returns 5 because the condition (5 > 3) is True, so it evaluates max(5, 3) which equals 5.

Key Distinctions:
• Nested condition: outer ternary chooses max(5,3) because 5>3 True.
• Inner max(5,3) is evaluated as the true branch expression.

How It Works:
• 5 > 3 True — pick max(5,3) which is 5.

Step-by-Step Execution:
• 1. Compare 5>3. 2. Evaluate max(5,3) -> 5.

Order of Operations:
• Ternary has lower precedence than calls — subexpressions parenthesized implicitly by structure.

Common Use Cases:
• Compact numeric clamping patterns.

Edge Cases:
• Readability suffers if nested too deep.

Performance Considerations:
• max evaluated only on chosen branch.

Examples:
• Split into if/else for clarity in production.

Notes:
• Use min/max builtins directly when simpler.`
  }),
  (_i: number) => ({ 
    q: `What is 'even' if 4 % 2 == 0 else 'odd'?`, 
    o: ["'even'", "'odd'", "Error", "None"], 
    c: 0, 
    e: "Ternary with modulo check.",
    de: `Python's ternary operator can use any boolean expression as the condition. 'even' if 4 % 2 == 0 else 'odd' evaluates the condition: 4 % 2 == 0 (which is 0 == 0, True), so it returns 'even'. This is a common pattern for checking if a number is even or odd using the modulo operator.

Ternary with modulo:
• 'even' if 4 % 2 == 0 else 'odd'
• Condition: 4 % 2 == 0 → 0 == 0 → True
• Since True, returns 'even'
• Result: 'even'

How it works:
• Evaluates condition: 4 % 2 = 0, then 0 == 0 = True
• Since True, returns value_if_true: 'even'
• Result: 'even'

Examples:
• 'even' if 4 % 2 == 0 else 'odd' = 'even'
• 'even' if 5 % 2 == 0 else 'odd' = 'odd'
• 'even' if 0 % 2 == 0 else 'odd' = 'even'

Common uses:
• Checking even/odd: result = 'even' if n % 2 == 0 else 'odd'
• Conditional string values
• Simple if-else in one line
• Pattern matching

Example: 'even' if 4 % 2 == 0 else 'odd' returns 'even' because 4 % 2 equals 0, and 0 == 0 is True, so it returns 'even'.

Key Distinctions:
• Parity check: 4 % 2 == 0 True — pick 'even'.
• Modulo zero means divisible by 2.

How It Works:
• Ternary maps bool to labels.

Step-by-Step Execution:
• 1. 4%2==0 True. 2. 'even'.

Order of Operations:
• Combine % with comparison in condition.

Common Use Cases:
• Formatting numbers as even/odd.

Edge Cases:
• Negative even: -4 % 2 == 0 in Python.

Performance Considerations:
• Constant-time.

Examples:
• 5 % 2 == 0 False for odd.

Notes:
• Use n & 1 for int bit parity in hot paths.`
  }),
  (_i: number) => ({ 
    q: `What is 'even' if 5 % 2 == 0 else 'odd'?`, 
    o: ["'odd'", "'even'", "Error", "None"], 
    c: 0, 
    e: "Ternary with modulo check - odd number.",
    de: `Python's ternary operator returns the else value when the condition is False. 'even' if 5 % 2 == 0 else 'odd' evaluates the condition: 5 % 2 == 0 (which is 1 == 0, False), so it returns 'odd'. This is a common pattern for checking if a number is even or odd using the modulo operator.

Ternary with modulo (odd):
• 'even' if 5 % 2 == 0 else 'odd'
• Condition: 5 % 2 == 0 → 1 == 0 → False
• Since False, returns 'odd'
• Result: 'odd'

How it works:
• Evaluates condition: 5 % 2 = 1, then 1 == 0 = False
• Since False, returns value_if_false: 'odd'
• Result: 'odd'

Examples:
• 'even' if 5 % 2 == 0 else 'odd' = 'odd'
• 'even' if 4 % 2 == 0 else 'odd' = 'even'
• 'even' if 3 % 2 == 0 else 'odd' = 'odd'

Common uses:
• Checking even/odd: result = 'even' if n % 2 == 0 else 'odd'
• Conditional string values
• Simple if-else in one line
• Pattern matching

Example: 'even' if 5 % 2 == 0 else 'odd' returns 'odd' because 5 % 2 equals 1, and 1 == 0 is False, so it returns 'odd'.

Key Distinctions:
• 5 % 2 == 0 is False — 5 is odd.
• Else branch 'odd'.

How It Works:
• Ternary selects odd label.

Step-by-Step Execution:
• 1. False condition. 2. 'odd'.

Order of Operations:
• Same pattern as even question with different n.

Common Use Cases:
• Ticket numbering.

Edge Cases:
• Big integers support %.

Performance Considerations:
• Trivial.

Examples:
• Even test: n % 2 == 0 preferred to n % 2 == 1 for odd.

Notes:
• Use divmod for quotient and remainder together.`
  }),
  (_i: number) => ({ 
    q: `What is 'positive' if 5 > 0 else 'non-positive'?`, 
    o: ["'positive'", "'non-positive'", "Error", "None"], 
    c: 0, 
    e: "Ternary with comparison.",
    de: `Python's ternary operator can use comparison operators in the condition. 'positive' if 5 > 0 else 'non-positive' evaluates the condition: 5 > 0 is True, so it returns 'positive'. This is a common pattern for categorizing values based on comparisons.

Ternary with comparison:
• 'positive' if 5 > 0 else 'non-positive'
• Condition: 5 > 0 = True
• Since True, returns 'positive'
• Result: 'positive'

How it works:
• Evaluates condition: 5 > 0 = True
• Since True, returns value_if_true: 'positive'
• Result: 'positive'

Examples:
• 'positive' if 5 > 0 else 'non-positive' = 'positive'
• 'positive' if -5 > 0 else 'non-positive' = 'non-positive'
• 'positive' if 0 > 0 else 'non-positive' = 'non-positive'

Common uses:
• Categorizing values: result = 'positive' if x > 0 else 'non-positive'
• Conditional string values
• Simple if-else in one line
• Classification

Example: 'positive' if 5 > 0 else 'non-positive' returns 'positive' because the condition (5 > 0) is True, so it returns 'positive'.

Key Distinctions:
• Sign check: 5 > 0 True — 'positive'.
• Zero is not positive in this label scheme.

How It Works:
• Ternary on inequality.

Step-by-Step Execution:
• 1. 5>0 True. 2. 'positive'.

Order of Operations:
• Could extend with elif for zero.

Common Use Cases:
• Classifying numeric user input.

Edge Cases:
• -0.0 > 0 is False.

Performance Considerations:
• Trivial.

Examples:
• math.copysign for sign handling.

Notes:
• Use Decimal for financial signs.`
  }),
  (_i: number) => ({ 
    q: `What is 'positive' if -5 > 0 else 'non-positive'?`, 
    o: ["'non-positive'", "'positive'", "Error", "None"], 
    c: 0, 
    e: "Ternary with negative number.",
    de: `Python's ternary operator returns the else value when the condition is False. 'positive' if -5 > 0 else 'non-positive' evaluates the condition: -5 > 0 is False, so it returns 'non-positive'. This demonstrates how the ternary operator handles negative numbers in comparisons.

Ternary with negative:
• 'positive' if -5 > 0 else 'non-positive'
• Condition: -5 > 0 = False
• Since False, returns 'non-positive'
• Result: 'non-positive'

How it works:
• Evaluates condition: -5 > 0 = False
• Since False, returns value_if_false: 'non-positive'
• Result: 'non-positive'

Examples:
• 'positive' if -5 > 0 else 'non-positive' = 'non-positive'
• 'positive' if 5 > 0 else 'non-positive' = 'positive'
• 'positive' if 0 > 0 else 'non-positive' = 'non-positive'

Common uses:
• Categorizing values: result = 'positive' if x > 0 else 'non-positive'
• Conditional string values
• Simple if-else in one line
• Classification

Example: 'positive' if -5 > 0 else 'non-positive' returns 'non-positive' because the condition (-5 > 0) is False, so it returns 'non-positive'.

Key Distinctions:
• -5 > 0 is False — non-positive branch.
• Negative numbers are not positive.

How It Works:
• Else branch taken.

Step-by-Step Execution:
• 1. False. 2. 'non-positive'.

Order of Operations:
• Inclusive zero would need separate test.

Common Use Cases:
• Reporting loss vs gain.

Edge Cases:
• NaN comparisons are False — not this question.

Performance Considerations:
• Trivial.

Examples:
• Compare to sign() in numpy.

Notes:
• Explicit zero handling when needed.`
  }),
  (_i: number) => ({ 
    q: `What is 'empty' if len([]) == 0 else 'not empty'?`, 
    o: ["'empty'", "'not empty'", "Error", "None"], 
    c: 0, 
    e: "Ternary with len() check.",
    de: `Python's ternary operator can use function calls like len() in the condition. 'empty' if len([]) == 0 else 'not empty' evaluates the condition: len([]) == 0 (which is 0 == 0, True), so it returns 'empty'. This is a common pattern for checking if collections are empty.

Ternary with len():
• 'empty' if len([]) == 0 else 'not empty'
• Condition: len([]) == 0 → 0 == 0 → True
• Since True, returns 'empty'
• Result: 'empty'

How it works:
• Evaluates condition: len([]) = 0, then 0 == 0 = True
• Since True, returns value_if_true: 'empty'
• Result: 'empty'

Examples:
• 'empty' if len([]) == 0 else 'not empty' = 'empty'
• 'empty' if len([1, 2]) == 0 else 'not empty' = 'not empty'
• 'empty' if len("") == 0 else 'not empty' = 'empty'

Common uses:
• Checking if empty: result = 'empty' if len(collection) == 0 else 'not empty'
• Conditional string values
• Simple if-else in one line
• Collection validation

Example: 'empty' if len([]) == 0 else 'not empty' returns 'empty' because len([]) equals 0, and 0 == 0 is True, so it returns 'empty'.

Key Distinctions:
• len([]) == 0 True — empty list string label.
• Non-empty would pick other branch.

How It Works:
• Ternary on emptiness.

Step-by-Step Execution:
• 1. len 0. 2. 'empty'.

Order of Operations:
• len() is O(1) for lists.

Common Use Cases:
• UI badges for empty state.

Edge Cases:
• len(None) raises — not used here.

Performance Considerations:
• Trivial.

Examples:
• if not seq: often clearer than len.

Notes:
• Use truthiness directly for containers.`
  }),
  
  // 81-90: Short-Circuit Evaluation
  (_i: number) => ({ 
    q: `What is True and 5?`, 
    o: ["5", "True", "False", "Error"], 
    c: 0, 
    e: "and returns last value if all are Truthy.",
    de: `The and operator in Python uses short-circuit evaluation and returns the last value if all operands are truthy. True and 5 evaluates: True is truthy, so it continues to evaluate 5, which is also truthy, so it returns 5 (the last value). This behavior is useful for conditional assignment and default values.

and operator behavior:
• True and 5 = 5 (returns last value if all truthy)
• Evaluates left to right
• Returns first falsy value if found
• Returns last value if all truthy

How it works:
• Evaluates True: truthy, continues
• Evaluates 5: truthy, continues
• All are truthy, returns last value: 5
• Result: 5

Examples:
• True and 5 = 5 (all truthy, returns last)
• True and False = False (first falsy found)
• 1 and 2 and 3 = 3 (all truthy, returns last)

Common uses:
• Conditional assignment: x = value and default
• Chaining conditions
• Default values
• Short-circuit evaluation

Example: True and 5 returns 5 because both operands are truthy, so and returns the last value (5). This is useful for conditional logic.

Key Distinctions:
• and with mixed types: True and 5 returns 5, the last evaluated truthy operand.
• and returns first falsy or last truthy — not necessarily bool.

How It Works:
• True is truthy — evaluate and return right side 5.

Step-by-Step Execution:
• 1. True truthy. 2. Return 5.

Order of Operations:
• and short-circuits on falsy left.

Common Use Cases:
• Default dict with or: {} or {} patterns differ.

Edge Cases:
• 0 and 5 returns 0.

Performance Considerations:
• Short-circuit skips right if left falsy.

Examples:
• True and [] returns [].

Notes:
• Document that boolean ops return operands in Python.`
  }),
  (_i: number) => ({ 
    q: `What is False and 5?`, 
    o: ["False", "5", "True", "Error"], 
    c: 0, 
    e: "and short-circuits at first Falsy value.",
    de: `The and operator uses short-circuit evaluation - it stops evaluating as soon as it encounters a falsy value. False and 5 evaluates: False is falsy, so it short-circuits and returns False immediately without evaluating 5. This is efficient and prevents unnecessary computation.

Short-circuit behavior:
• False and 5 = False (short-circuits at first falsy)
• Stops evaluation at first falsy value
• Doesn't evaluate remaining operands
• Returns the falsy value

How it works:
• Evaluates False: falsy, short-circuits
• Doesn't evaluate 5 (not needed)
• Returns False immediately
• Result: False

Examples:
• False and 5 = False (short-circuits)
• False and expensive_function() = False (function not called)
• 0 and 5 = 0 (short-circuits)

Common uses:
• Efficient validation: if x > 0 and expensive_check(x):
• Preventing expensive operations
• Guard clauses
• Conditional execution

Example: False and 5 returns False because and short-circuits at the first falsy value (False), so it doesn't evaluate 5 and returns False immediately.

Key Distinctions:
• False and 5 short-circuits: False is falsy, so 5 is not evaluated.
• Result is False, not 5.

How It Works:
• and returns first falsy operand.

Step-by-Step Execution:
• 1. False. 2. Stop with False.

Order of Operations:
• Right side not evaluated.

Common Use Cases:
• Guarding expensive calls on left.

Edge Cases:
• Side effects on right skipped if left falsy.

Performance Considerations:
• Relies on short-circuit.

Examples:
• False and print() does not print.

Notes:
• Use if for statements, not and trick.`
  }),
  (_i: number) => ({ 
    q: `What is True or 5?`, 
    o: ["True", "5", "False", "Error"], 
    c: 0, 
    e: "or short-circuits at first Truthy value.",
    de: `The or operator uses short-circuit evaluation - it stops evaluating as soon as it encounters a truthy value. True or 5 evaluates: True is truthy, so it short-circuits and returns True immediately without evaluating 5. This is efficient and is commonly used for default values.

Short-circuit behavior:
• True or 5 = True (short-circuits at first truthy)
• Stops evaluation at first truthy value
• Doesn't evaluate remaining operands
• Returns the truthy value

How it works:
• Evaluates True: truthy, short-circuits
• Doesn't evaluate 5 (not needed)
• Returns True immediately
• Result: True

Examples:
• True or 5 = True (short-circuits)
• True or expensive_function() = True (function not called)
• 1 or 5 = 1 (short-circuits)

Common uses:
• Default values: value = x or default
• Efficient fallbacks
• Preventing expensive operations
• Conditional assignment

Example: True or 5 returns True because or short-circuits at the first truthy value (True), so it doesn't evaluate 5 and returns True immediately.

Key Distinctions:
• True or 5 short-circuits on True — returns True without evaluating 5.
• or returns first truthy operand.

How It Works:
• Left True is enough.

Step-by-Step Execution:
• 1. True. 2. Short-circuit True.

Order of Operations:
• Right side skipped.

Common Use Cases:
• Default values: x or default.

Edge Cases:
• 0 or 5 returns 5 — different pattern.

Performance Considerations:
• Short-circuit semantics.

Examples:
• True or heavy() skips heavy.

Notes:
• Prefer explicit if for readability.`
  }),
  (_i: number) => ({ 
    q: `What is False or 5?`, 
    o: ["5", "False", "True", "Error"], 
    c: 0, 
    e: "or returns last value if all are Falsy.",
    de: `The or operator in Python returns the last value if all operands are falsy. False or 5 evaluates: False is falsy, so it continues to evaluate 5, which is truthy, so it returns 5. If all operands were falsy, it would return the last falsy value. This behavior is useful for default values.

or operator behavior:
• False or 5 = 5 (returns first truthy value)
• Evaluates left to right
• Returns first truthy value if found
• Returns last value if all falsy

How it works:
• Evaluates False: falsy, continues
• Evaluates 5: truthy, returns 5
• Returns first truthy value found
• Result: 5

Examples:
• False or 5 = 5 (first truthy found)
• False or 0 = 0 (all falsy, returns last)
• None or "" or "default" = "default" (first truthy)

Common uses:
• Default values: value = x or default
• Fallback values
• Conditional assignment
• Providing defaults

Example: False or 5 returns 5 because False is falsy, so or continues and finds 5 (which is truthy), so it returns 5. This is commonly used for default values: value = user_input or "default".

Key Distinctions:
• False or 5 evaluates False then 5 — returns 5 as first truthy.
• or returns first truthy or last falsy.

How It Works:
• False is falsy — move to right.

Step-by-Step Execution:
• 1. False. 2. 5 truthy. 3. 5.

Order of Operations:
• Both operands evaluated until truthy found.

Common Use Cases:
• Fallback values for falsy sentinels.

Edge Cases:
• [] or [1] -> [1].

Performance Considerations:
• Two evaluates.

Examples:
• Beware of valid falsy 0 with or.

Notes:
• Use None-coalescing patterns carefully.`
  }),
  (_i: number) => ({ 
    q: `What is 0 and 5?`, 
    o: ["0", "5", "False", "Error"], 
    c: 0, 
    e: "0 is Falsy, so and returns 0 (short-circuits).",
    de: `The and operator short-circuits at falsy values. 0 and 5 evaluates: 0 is falsy, so it short-circuits and returns 0 immediately without evaluating 5. The number 0 is falsy in Python, so it causes short-circuiting in boolean expressions.

Short-circuit with 0:
• 0 and 5 = 0 (short-circuits at 0)
• 0 is falsy, so and returns 0
• Doesn't evaluate 5
• Returns the falsy value

How it works:
• Evaluates 0: falsy, short-circuits
• Doesn't evaluate 5 (not needed)
• Returns 0 immediately
• Result: 0

Examples:
• 0 and 5 = 0 (short-circuits)
• 0 and expensive_function() = 0 (function not called)
• 0 and "hello" = 0 (short-circuits)

Common uses:
• Efficient validation: if x and x > 0:
• Preventing division by zero: if divisor and value / divisor:
• Guard clauses
• Conditional execution

Example: 0 and 5 returns 0 because 0 is falsy, so and short-circuits and returns 0 immediately without evaluating 5.

Key Distinctions:
• 0 and 5 returns 0 — first falsy wins.
• 0 is falsy; and does not reach 5.

How It Works:
• No boolean conversion unless in boolean context.

Step-by-Step Execution:
• 1. 0 falsy. 2. Result 0.

Order of Operations:
• Short-circuit on falsy.

Common Use Cases:
• Chaining validation with and.

Edge Cases:
• 0 and expensive() skips expensive.

Performance Considerations:
• and returns operand, not False.

Examples:
• 1 and 5 returns 5.

Notes:
• if a and b: for clarity over truthy tricks.`
  }),
  (_i: number) => ({ 
    q: `What is 1 and 5?`, 
    o: ["5", "1", "True", "Error"], 
    c: 0, 
    e: "1 is Truthy, so and returns last value 5.",
    de: `The and operator returns the last value if all operands are truthy. 1 and 5 evaluates: 1 is truthy, so it continues to evaluate 5, which is also truthy, so it returns 5 (the last value). Non-zero numbers are truthy in Python, so they don't cause short-circuiting in and expressions.

and with truthy numbers:
• 1 and 5 = 5 (returns last value if all truthy)
• 1 is truthy, continues
• 5 is truthy, returns 5
• Returns last value

How it works:
• Evaluates 1: truthy, continues
• Evaluates 5: truthy, continues
• All are truthy, returns last value: 5
• Result: 5

Examples:
• 1 and 5 = 5 (all truthy, returns last)
• 1 and 2 and 3 = 3 (all truthy, returns last)
• 1 and 0 = 0 (first falsy found)

Common uses:
• Conditional assignment
• Chaining conditions
• Default values
• Short-circuit evaluation

Example: 1 and 5 returns 5 because both operands are truthy (1 and 5), so and returns the last value (5).

Key Distinctions:
• 1 and 5 returns 5 — both truthy, last evaluated.
• and returns last truthy if all truthy.

How It Works:
• 1 is truthy; then evaluate 5.

Step-by-Step Execution:
• 1. 1 truthy. 2. 5 truthy. 3. Return 5.

Order of Operations:
• No short-circuit early exit.

Common Use Cases:
• Chaining defaults in fluent APIs.

Edge Cases:
• Empty string and 5 returns ''.

Performance Considerations:
• Both sides evaluated.

Examples:
• Compare to min(1,5) for numeric caps.

Notes:
• All() on iterable is related.`
  }),
  (_i: number) => ({ 
    q: `What is 0 or 5?`, 
    o: ["5", "0", "False", "Error"], 
    c: 0, 
    e: "0 is Falsy, so or continues and returns 5.",
    de: `The or operator continues evaluating until it finds a truthy value. 0 or 5 evaluates: 0 is falsy, so it continues to evaluate 5, which is truthy, so it returns 5. The or operator returns the first truthy value it encounters, or the last value if all are falsy.

or with falsy number:
• 0 or 5 = 5 (returns first truthy value)
• 0 is falsy, continues
• 5 is truthy, returns 5
• Returns first truthy found

How it works:
• Evaluates 0: falsy, continues
• Evaluates 5: truthy, returns 5
• Returns first truthy value found
• Result: 5

Examples:
• 0 or 5 = 5 (first truthy found)
• 0 or 0 or 5 = 5 (first truthy found)
• 0 or "" or "default" = "default" (first truthy)

Common uses:
• Default values: value = x or default
• Fallback values
• Conditional assignment
• Providing defaults

Example: 0 or 5 returns 5 because 0 is falsy, so or continues and finds 5 (which is truthy), so it returns 5. This is commonly used: value = user_input or 0 (provides default).

Key Distinctions:
• 0 or 5 returns 5 — first truthy after falsy 0.
• 0 is falsy; or continues.

How It Works:
• 5 is truthy — return 5.

Step-by-Step Execution:
• 1. 0 falsy. 2. 5 truthy. 3. 5.

Order of Operations:
• or scans for first truthy.

Common Use Cases:
• Default 0 to 5 pattern.

Edge Cases:
• 0 or 0 or 0 returns 0.

Performance Considerations:
• Evaluates until truthy.

Examples:
• [] or [1] -> [1].

Notes:
• Beware valid 0 with or.`
  }),
  (_i: number) => ({ 
    q: `What is 1 or 5?`, 
    o: ["1", "5", "True", "Error"], 
    c: 0, 
    e: "1 is Truthy, so or short-circuits and returns 1.",
    de: `The or operator short-circuits at truthy values. 1 or 5 evaluates: 1 is truthy, so it short-circuits and returns 1 immediately without evaluating 5. Non-zero numbers are truthy in Python, so they cause short-circuiting in or expressions.

Short-circuit with truthy number:
• 1 or 5 = 1 (short-circuits at 1)
• 1 is truthy, so or returns 1
• Doesn't evaluate 5
• Returns the truthy value

How it works:
• Evaluates 1: truthy, short-circuits
• Doesn't evaluate 5 (not needed)
• Returns 1 immediately
• Result: 1

Examples:
• 1 or 5 = 1 (short-circuits)
• 1 or expensive_function() = 1 (function not called)
• 1 or "hello" = 1 (short-circuits)

Common uses:
• Efficient fallbacks: value = x or y or default
• Preventing expensive operations
• Conditional assignment
• Short-circuit evaluation

Example: 1 or 5 returns 1 because 1 is truthy, so or short-circuits and returns 1 immediately without evaluating 5.

Key Distinctions:
• 1 or 5 returns 1 — first truthy short-circuits.
• 5 does not run.

How It Works:
• or stops at first truthy.

Step-by-Step Execution:
• 1. 1 truthy. 2. Return 1.

Order of Operations:
• Right skipped.

Common Use Cases:
• Pick first configured flag.

Edge Cases:
• Non-zero ints are truthy.

Performance Considerations:
• Short-circuit.

Examples:
• or chain for priority list.

Notes:
• Explicit None checks safer than or for defaults.`
  }),
  (_i: number) => ({ 
    q: `What is '' and 'hello'?`, 
    o: ["''", "'hello'", "False", "Error"], 
    c: 0, 
    e: "Empty string is Falsy, so and returns ''.",
    de: `The and operator short-circuits at falsy values. '' and 'hello' evaluates: '' (empty string) is falsy, so it short-circuits and returns '' immediately without evaluating 'hello'. Empty strings are falsy in Python, so they cause short-circuiting in boolean expressions.

Short-circuit with empty string:
• '' and 'hello' = '' (short-circuits at '')
• Empty string is falsy, so and returns ''
• Doesn't evaluate 'hello'
• Returns the falsy value

How it works:
• Evaluates '': falsy, short-circuits
• Doesn't evaluate 'hello' (not needed)
• Returns '' immediately
• Result: ''

Examples:
• '' and 'hello' = '' (short-circuits)
• '' and expensive_function() = '' (function not called)
• '' and "world" = '' (short-circuits)

Common uses:
• Efficient validation: if string and string.strip():
• Preventing operations on empty strings
• Guard clauses
• Conditional execution

Example: '' and 'hello' returns '' because the empty string is falsy, so and short-circuits and returns '' immediately without evaluating 'hello'.

Key Distinctions:
• '' and 'hello' returns '' — empty string is falsy.
• and stops at first falsy.

How It Works:
• Short-circuit on falsy.

Step-by-Step Execution:
• 1. Evaluate ''. 2. Falsy. 3. Return ''.

Order of Operations:
• No evaluation of 'hello'.

Common Use Cases:
• Guarding string concatenation.

Edge Cases:
• Whitespace ' ' is truthy.

Performance Considerations:
• String operands.

Examples:
• '' or 'default' -> 'default'.

Notes:
• Use if s: for clarity.`
  }),
  (_i: number) => ({ 
    q: `What is 'hello' and 'world'?`, 
    o: ["'world'", "'hello'", "True", "Error"], 
    c: 0, 
    e: "Both are Truthy, so and returns last value 'world'.",
    de: `The and operator returns the last value if all operands are truthy. 'hello' and 'world' evaluates: 'hello' is truthy (non-empty string), so it continues to evaluate 'world', which is also truthy, so it returns 'world' (the last value). Non-empty strings are truthy in Python.

and with truthy strings:
• 'hello' and 'world' = 'world' (returns last value if all truthy)
• 'hello' is truthy, continues
• 'world' is truthy, returns 'world'
• Returns last value

How it works:
• Evaluates 'hello': truthy, continues
• Evaluates 'world': truthy, continues
• All are truthy, returns last value: 'world'
• Result: 'world'

Examples:
• 'hello' and 'world' = 'world' (all truthy, returns last)
• 'a' and 'b' and 'c' = 'c' (all truthy, returns last)
• 'hello' and '' = '' (first falsy found)

Common uses:
• Conditional assignment
• Chaining conditions
• Default values
• Short-circuit evaluation

Example: 'hello' and 'world' returns 'world' because both operands are truthy (non-empty strings), so and returns the last value ('world').

Key Distinctions:
• Non-empty strings 'hello' and 'world' — both truthy; and returns last.
• Result 'world'.

How It Works:
• and returns last truthy when all truthy.

Step-by-Step Execution:
• 1. 'hello' truthy. 2. 'world' truthy. 3. 'world'.

Order of Operations:
• Useful for picking last configured string in chain.

Common Use Cases:
• Different from string concatenation.

Edge Cases:
• Both evaluated.

Performance Considerations:
• Compare to 'hello' + 'world'.

Examples:
• Readable code avoids obscure and chains.

Notes:
• Prefer explicit if/else when side effects or logging belong in branches.`
  }),
  
  // 91-100: Complex Boolean Expressions
  (_i: number) => ({ 
    q: `Result of 5 > 3 and 10 > 5?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "Both conditions must be True.",
    de: `Complex boolean expressions combine multiple conditions with logical operators. 5 > 3 and 10 > 5 evaluates both conditions: 5 > 3 is True, and 10 > 5 is True. Since both are True, the and operator returns True. This is commonly used in conditional statements for multiple requirements.

Complex boolean expression:
• 5 > 3 and 10 > 5 = True
• First: 5 > 3 = True
• Second: 10 > 5 = True
• True and True = True

How it works:
• Evaluates left condition: 5 > 3 = True
• Evaluates right condition: 10 > 5 = True
• Combines with and: True and True = True
• Returns True if both are True

Examples:
• 5 > 3 and 10 > 5 = True (both True)
• 5 > 3 and 5 > 10 = False (second False)
• 5 > 10 and 10 > 5 = False (first False)

Common uses:
• Multiple conditions: if x > 0 and x < 100:
• Validation: if valid and available:
• Compound conditions
• Conditional statements

Example: 5 > 3 and 10 > 5 returns True because both conditions are True (5 > 3 is True, and 10 > 5 is True), so the and operator returns True.

Key Distinctions:
• Compound bool: 5>3 True and 10>5 True — overall True.
• Both comparisons must hold.

How It Works:
• and of two booleans.

Step-by-Step Execution:
• 1. Evaluate 5>3. 2. Evaluate 10>5. 3. True.

Order of Operations:
• Comparisons have higher precedence than and.

Common Use Cases:
• Range checks split into two inequalities.

Edge Cases:
• Add parens for readability even if not required.

Performance Considerations:
• Two comparisons.

Examples:
• 5>3 and 10<5 is False.

Notes:
• Use chained comparisons when middle matches.`
  }),
  (_i: number) => ({ 
    q: `Result of 5 > 10 and 10 > 5?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "First condition is False, so and returns False.",
    de: `The and operator short-circuits at the first False condition. 5 > 10 and 10 > 5 evaluates: 5 > 10 is False, so it short-circuits and returns False immediately without evaluating 10 > 5. The and operator requires both conditions to be True, so if the first is False, the result is False.

Complex boolean expression:
• 5 > 10 and 10 > 5 = False
• First: 5 > 10 = False
• Short-circuits: doesn't evaluate second
• False and anything = False

How it works:
• Evaluates left condition: 5 > 10 = False
• Short-circuits: returns False immediately
• Doesn't evaluate 10 > 5 (not needed)
• Result: False

Examples:
• 5 > 10 and 10 > 5 = False (first False)
• 5 > 10 and expensive_check() = False (function not called)
• False and True = False

Common uses:
• Efficient validation: if x > 0 and expensive_check(x):
• Guard clauses
• Preventing expensive operations
• Conditional statements

Example: 5 > 10 and 10 > 5 returns False because the first condition (5 > 10) is False, so and short-circuits and returns False immediately without evaluating the second condition.

Key Distinctions:
• 5>10 is False — first conjunct fails.
• Short-circuit: second may still evaluate in Python for and with comparisons.

How It Works:
• Actually Python evaluates both for bool and and — both sides evaluated.

Step-by-Step Execution:
• 1. 5>10 False. 2. and False.

Order of Operations:
• False and anything is False.

Common Use Cases:
• Failed multi-criteria gate.

Edge Cases:
• Short-circuit skips right if left falsy for and.

Performance Considerations:
• 0 and 1 skips 1.

Examples:
• 5>3 and 10<5 False.

Notes:
• Use all() for many predicates.`
  }),
  (_i: number) => ({ 
    q: `Result of 5 > 3 or 10 < 5?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "At least one condition is True.",
    de: `The or operator returns True if at least one condition is True. 5 > 3 or 10 < 5 evaluates: 5 > 3 is True, so it short-circuits and returns True immediately without evaluating 10 < 5. The or operator requires only one condition to be True for the result to be True.

Complex boolean expression:
• 5 > 3 or 10 < 5 = True
• First: 5 > 3 = True
• Short-circuits: returns True immediately
• Doesn't evaluate second (not needed)

How it works:
• Evaluates left condition: 5 > 3 = True
• Short-circuits: returns True immediately
• Doesn't evaluate 10 < 5 (not needed)
• Result: True

Examples:
• 5 > 3 or 10 < 5 = True (first True)
• 5 > 10 or 10 > 5 = True (second True)
• 5 > 10 or 10 < 5 = False (both False)

Common uses:
• Alternative conditions: if x == 5 or x == 10:
• Fallback checks
• Multiple possibilities
• Conditional statements

Example: 5 > 3 or 10 < 5 returns True because the first condition (5 > 3) is True, so or short-circuits and returns True immediately without evaluating the second condition.

Key Distinctions:
• 5>3 True or 10<5 False — first True makes or True.
• or short-circuits after first True.

How It Works:
• Second operand may not be evaluated if first True.

Step-by-Step Execution:
• 1. 5>3 True. 2. or True.

Order of Operations:
• or stops at first truthy.

Common Use Cases:
• Either criterion enough.

Edge Cases:
• 10<5 evaluated only if first False in CPython for or.

Performance Considerations:
• Short-circuit.

Examples:
• False or True -> True.

Notes:
• Use any() for iterable.`
  }),
  (_i: number) => ({ 
    q: `Result of 5 > 10 or 10 < 5?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "Both conditions are False, so or returns False.",
    de: `The or operator returns False only if all conditions are False. 5 > 10 or 10 < 5 evaluates: 5 > 10 is False, and 10 < 5 is False. Since both are False, the or operator returns False. The or operator requires at least one condition to be True for the result to be True.

Complex boolean expression:
• 5 > 10 or 10 < 5 = False
• First: 5 > 10 = False
• Second: 10 < 5 = False
• False or False = False

How it works:
• Evaluates left condition: 5 > 10 = False
• Evaluates right condition: 10 < 5 = False
• Combines with or: False or False = False
• Returns False if both are False

Examples:
• 5 > 10 or 10 < 5 = False (both False)
• 5 > 3 or 10 > 5 = True (at least one True)
• False or False = False

Common uses:
• Alternative conditions: if x == 5 or x == 10:
• Multiple possibilities
• Fallback checks
• Conditional statements

Example: 5 > 10 or 10 < 5 returns False because both conditions are False (5 > 10 is False, and 10 < 5 is False), so the or operator returns False.

Key Distinctions:
• 5>10 False or 10<5 False — both False.
• or needs any True.

How It Works:
• Neither comparison holds.

Step-by-Step Execution:
• 1. First False. 2. Second False. 3. False.

Order of Operations:
• or of two booleans.

Common Use Cases:
• No route matched.

Edge Cases:
• Both sides evaluated if first falsy.

Performance Considerations:
• Two checks.

Examples:
• True or False -> True.

Notes:
• Consider XOR for exclusive or — not built-in.`
  }),
  (_i: number) => ({ 
    q: `Result of not (5 > 10)?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "not inverts False to True.",
    de: `The not operator inverts the boolean result of an expression. not (5 > 10) evaluates the expression inside parentheses first: 5 > 10 is False, then not False equals True. The not operator is commonly used in conditional statements to negate conditions.

not with comparison:
• not (5 > 10) = True
• First: 5 > 10 = False
• Then: not False = True
• Result: True

How it works:
• Evaluates expression: 5 > 10 = False
• Applies not operator: not False = True
• Returns inverted result
• Result: True

Examples:
• not (5 > 10) = not False = True
• not (5 > 3) = not True = False
• not (10 == 5) = not False = True

Common uses:
• Negating conditions: if not (x > 10):
• Inverting boolean results
• Checking for "not greater than"
• Conditional statements

Example: not (5 > 10) returns True because first 5 > 10 evaluates to False, then not False equals True.

Key Distinctions:
• not (5>10) — inner False, not True.
• Parentheses force comparison before not.

How It Works:
• 5>10 is False; not False is True.

Step-by-Step Execution:
• 1. 5>10 False. 2. not True.

Order of Operations:
• not applies to bool result.

Common Use Cases:
• Negating a failed check.

Edge Cases:
• not 5>10 without parens is parse error — not binds to 5.

Performance Considerations:
• Trivial.

Examples:
• not (a == b) vs a != b similar for bools.

Notes:
• Keep parens for clarity.`
  }),
  (_i: number) => ({ 
    q: `Result of not (5 > 3)?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "not inverts True to False.",
    de: `The not operator inverts the boolean result of an expression. not (5 > 3) evaluates the expression inside parentheses first: 5 > 3 is True, then not True equals False. The not operator is commonly used in conditional statements to negate conditions.

not with comparison:
• not (5 > 3) = False
• First: 5 > 3 = True
• Then: not True = False
• Result: False

How it works:
• Evaluates expression: 5 > 3 = True
• Applies not operator: not True = False
• Returns inverted result
• Result: False

Examples:
• not (5 > 3) = not True = False
• not (5 > 10) = not False = True
• not (10 == 10) = not True = False

Common uses:
• Negating conditions: if not (x > 0):
• Inverting boolean results
• Checking for "not greater than"
• Conditional statements

Example: not (5 > 3) returns False because first 5 > 3 evaluates to True, then not True equals False.

Key Distinctions:
• not (5>3) — inner True, not False.
• 5>3 is True; negation False.

How It Works:
• Successful check negated.

Step-by-Step Execution:
• 1. 5>3 True. 2. not False.

Order of Operations:
• Use when inverting pass condition.

Common Use Cases:
• Testing failure paths.

Edge Cases:
• not on non-bool uses truthiness.

Performance Considerations:
• Trivial.

Examples:
• De Morgan: not (a and b).

Notes:
• Prefer explicit inequality when clearer.`
  }),
  (_i: number) => ({ 
    q: `Result of 5 > 3 and not (10 < 5)?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "Both conditions must be True: 5>3 is True, not(10<5) is True.",
    de: `Complex boolean expressions can combine comparisons, logical operators, and the not operator. 5 > 3 and not (10 < 5) evaluates: 5 > 3 is True, and not (10 < 5) is not False (which is True). Since both are True, the and operator returns True. Parentheses control the order of evaluation.

Complex expression:
• 5 > 3 and not (10 < 5) = True
• First: 5 > 3 = True
• Second: not (10 < 5) = not False = True
• True and True = True

How it works:
• Evaluates left: 5 > 3 = True
• Evaluates right: 10 < 5 = False, then not False = True
• Combines with and: True and True = True
• Result: True

Examples:
• 5 > 3 and not (10 < 5) = True (both True)
• 5 > 10 and not (10 < 5) = False (first False)
• 5 > 3 and not (5 > 3) = False (second False)

Common uses:
• Complex conditions: if x > 0 and not (x > 100):
• Multiple requirements
• Negated conditions
• Conditional statements

Example: 5 > 3 and not (10 < 5) returns True because both conditions are True (5 > 3 is True, and not (10 < 5) is True), so the and operator returns True.

Key Distinctions:
• 5>3 True and not(10<5) — second is not False True.
• 10<5 False; not False True.

How It Works:
• Both conjuncts True.

Step-by-Step Execution:
• 1. Left True. 2. not False True. 3. and True.

Order of Operations:
• not binds tighter than and.

Common Use Cases:
• Combining threshold with negated failure.

Edge Cases:
• Nested nots confuse — refactor.

Performance Considerations:
• Two booleans.

Examples:
• Use variable names for subexpressions.

Notes:
• PEP 8 line continuation for long lines.`
  }),
  (_i: number) => ({ 
    q: `Result of 5 in [1, 2, 3] or 10 > 5?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "At least one condition is True: 10>5 is True.",
    de: `Complex boolean expressions can combine membership operators, comparison operators, and logical operators. 5 in [1, 2, 3] or 10 > 5 evaluates: 5 in [1, 2, 3] is False, but 10 > 5 is True, so the or operator returns True. The or operator requires only one condition to be True.

Complex expression:
• 5 in [1, 2, 3] or 10 > 5 = True
• First: 5 in [1, 2, 3] = False
• Second: 10 > 5 = True
• False or True = True

How it works:
• Evaluates left: 5 in [1, 2, 3] = False
• Evaluates right: 10 > 5 = True
• Combines with or: False or True = True
• Result: True

Examples:
• 5 in [1, 2, 3] or 10 > 5 = True (second True)
• 1 in [1, 2, 3] or 10 > 5 = True (first True)
• 5 in [1, 2, 3] or 10 < 5 = False (both False)

Common uses:
• Alternative conditions: if item in list or value > threshold:
• Multiple possibilities
• Fallback checks
• Conditional statements

Example: 5 in [1, 2, 3] or 10 > 5 returns True because at least one condition is True (10 > 5 is True), so the or operator returns True.

Key Distinctions:
• or combines membership and comparison: 5 in list is False, so evaluate 10>5 True.
• or True if first truthy — here first is False.

How It Works:
• 1. 5 in [1,2,3] False. 2. 10>5 True. 3. True.

Step-by-Step Execution:
• in has lower precedence than comparisons — check order.

Order of Operations:
• Parentheses clarify mixed expressions.

Common Use Cases:
• Fallback route when primary fails.

Edge Cases:
• Short-circuit: second may run after first False.

Performance Considerations:
• or evaluates until truthy.

Examples:
• 5 in [5] or False -> True.

Notes:
• any([cond1, cond2]) similar.`
  }),
  (_i: number) => ({ 
    q: `Result of 5 in [1, 2, 3] and 10 > 5?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "First condition is False, so and returns False.",
    de: `The and operator short-circuits at the first False condition. 5 in [1, 2, 3] and 10 > 5 evaluates: 5 in [1, 2, 3] is False, so it short-circuits and returns False immediately without evaluating 10 > 5. The and operator requires both conditions to be True, so if the first is False, the result is False.

Complex expression:
• 5 in [1, 2, 3] and 10 > 5 = False
• First: 5 in [1, 2, 3] = False
• Short-circuits: returns False immediately
• Doesn't evaluate second (not needed)

How it works:
• Evaluates left: 5 in [1, 2, 3] = False
• Short-circuits: returns False immediately
• Doesn't evaluate 10 > 5 (not needed)
• Result: False

Examples:
• 5 in [1, 2, 3] and 10 > 5 = False (first False)
• 1 in [1, 2, 3] and 10 > 5 = True (both True)
• 5 in [1, 2, 3] and 10 < 5 = False (first False)

Common uses:
• Multiple requirements: if item in list and value > threshold:
• Validation checks
• Compound conditions
• Conditional statements

Example: 5 in [1, 2, 3] and 10 > 5 returns False because the first condition (5 in [1, 2, 3]) is False, so and short-circuits and returns False immediately without evaluating the second condition.

Key Distinctions:
• and requires both: 5 in [1,2,3] False stops the conjunction.
• First False makes entire and False.

How It Works:
• 10>5 not needed for result — short-circuit.

Step-by-Step Execution:
• 1. in False. 2. and False.

Order of Operations:
• Second operand may not be evaluated.

Common Use Cases:
• Strict multi-check.

Edge Cases:
• If first True, second still evaluated.

Performance Considerations:
• Short-circuit and.

Examples:
• all([cond1, cond2]) similar.

Notes:
• Use explicit if for side effects.`
  }),
  (_i: number) => ({ 
    q: `Result of (5 > 3) == (10 > 5)?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "Both comparisons are True, so True == True is True.",
    de: `You can compare the boolean results of expressions using the == operator. (5 > 3) == (10 > 5) evaluates both comparisons first: 5 > 3 is True, and 10 > 5 is True, then True == True equals True. This is useful for checking if multiple conditions have the same boolean result.

Boolean comparison:
• (5 > 3) == (10 > 5) = True
• First: 5 > 3 = True
• Second: 10 > 5 = True
• True == True = True

How it works:
• Evaluates left: 5 > 3 = True
• Evaluates right: 10 > 5 = True
• Compares results: True == True = True
• Result: True

Examples:
• (5 > 3) == (10 > 5) = True (both True)
• (5 > 10) == (10 > 5) = False (different)
• (5 > 3) == (3 > 5) = False (different)

Common uses:
• Checking if conditions have same result
• Comparing boolean expressions
• Validation
• Conditional statements

Example: (5 > 3) == (10 > 5) returns True because both comparisons are True (5 > 3 is True, and 10 > 5 is True), so True == True equals True.

Key Distinctions:
• Compares two booleans: (5>3)True and (10>5)True — equality True.
• == between two bools checks value equality.

How It Works:
• True == True.

Step-by-Step Execution:
• 1. Left True. 2. Right True. 3. == True.

Order of Operations:
• Parentheses force comparison before ==.

Common Use Cases:
• Asserting two predicates agree.

Edge Cases:
• True == 1 is True — bool subclass.

Performance Considerations:
• Trivial.

Examples:
• is True vs == True differ for identity.

Notes:
• Use is for singletons only.`
  }),
];
