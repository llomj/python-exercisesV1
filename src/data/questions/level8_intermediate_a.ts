import { PersonaStage } from '../../types';

// --- LEVEL 8 INTERMEDIATE A: Advanced Magic Methods, Operator Overloading & Iteration Protocol ---
// 50 TRULY UNIQUE questions - NO number/variable variations
export const level8IntermediateA = [
  // 1-15: Comparison & Arithmetic Dunder Methods
  (_i: number) => ({
    q: `What is the result of:\nclass V:\n    def __init__(self, x): self.x = x\n    def __eq__(self, o): return self.x == o.x\nprint(V(1) == V(1))`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "__eq__ compares the x attributes: 1 == 1 is True.",
    de: `The __eq__ method defines custom equality behavior for instances of V. When Python evaluates V(1) == V(1), it calls V.__eq__(V(1), V(1)), which compares self.x == o.x, i.e. 1 == 1, returning True.

Key concepts:
• __eq__ overrides the == operator
• Without __eq__, == checks identity (is), not value equality
• Two separate V(1) objects are different objects but equal by value here
• __eq__ receives the other operand as the second argument

How it works:
• V(1) creates an instance with x = 1
• V(1) == V(1) calls __eq__ on the left operand
• self.x == o.x evaluates 1 == 1
• Result: True

Examples:
• V(1) == V(1)  # True (same x value)
• V(1) == V(2)  # False (different x value)
• V(1) is V(1)  # False (different objects)

Common uses:
• Value-based equality for custom objects
• Needed for using objects in sets or as dict keys (with __hash__)
• Data classes and model comparisons

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
  (_i: number) => ({
    q: `What is the result of:\nclass V:\n    def __init__(self, x): self.x = x\n    def __ne__(self, o): return self.x != o.x\nprint(V(1) != V(2))`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "__ne__ compares x attributes: 1 != 2 is True.",
    de: `The __ne__ method defines the behavior of the != operator. When V(1) != V(2) is evaluated, Python calls V.__ne__(V(1), V(2)), which checks self.x != o.x, i.e. 1 != 2, returning True.

Key concepts:
• __ne__ overrides the != operator
• In Python 3, if you define __eq__ but not __ne__, Python auto-generates __ne__ as the negation of __eq__
• Defining __ne__ explicitly gives full control over inequality
• __ne__ receives the right operand as the second argument

How it works:
• V(1) has x = 1, V(2) has x = 2
• V(1) != V(2) calls __ne__ on the left operand
• self.x != o.x evaluates 1 != 2
• Result: True

Examples:
• V(1) != V(2)  # True
• V(3) != V(3)  # False

Common uses:
• Custom inequality logic
• Usually paired with __eq__ for consistency
• Filtering and conditional checks

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
  (_i: number) => ({
    q: `What is the result of:\nclass V:\n    def __init__(self, x): self.x = x\n    def __lt__(self, o): return self.x < o.x\nprint(V(1) < V(2))`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "__lt__ compares x attributes: 1 < 2 is True.",
    de: `The __lt__ method defines the behavior of the < (less than) operator. When V(1) < V(2) is evaluated, Python calls V.__lt__(V(1), V(2)), which checks self.x < o.x, i.e. 1 < 2, returning True.

Key concepts:
• __lt__ overrides the < operator
• Used by sorted() and sort() when comparing objects
• Part of the rich comparison methods (__lt__, __le__, __gt__, __ge__, __eq__, __ne__)
• functools.total_ordering can auto-generate the rest if __eq__ and one ordering method are defined

How it works:
• V(1) has x = 1, V(2) has x = 2
• V(1) < V(2) calls __lt__ on the left operand
• self.x < o.x evaluates 1 < 2
• Result: True

Examples:
• V(1) < V(2)   # True
• V(5) < V(3)   # False
• sorted([V(3), V(1), V(2)], key=lambda v: v.x)  # works with key

Common uses:
• Enabling sorting of custom objects
• Ordered comparisons in data structures
• Priority queues and binary search

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
  (_i: number) => ({
    q: `What is the result of:\nclass V:\n    def __init__(self, x): self.x = x\n    def __le__(self, o): return self.x <= o.x\nprint(V(2) <= V(2))`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "__le__ compares x attributes: 2 <= 2 is True.",
    de: `The __le__ method defines the behavior of the <= (less than or equal to) operator. When V(2) <= V(2) is evaluated, Python calls V.__le__(V(2), V(2)), which checks self.x <= o.x, i.e. 2 <= 2, returning True.

Key concepts:
• __le__ overrides the <= operator
• Boundary case: equal values return True for <=
• Part of the six rich comparison methods
• Can be auto-generated with functools.total_ordering

How it works:
• Both V(2) instances have x = 2
• V(2) <= V(2) calls __le__ on the left operand
• self.x <= o.x evaluates 2 <= 2
• Result: True

Examples:
• V(1) <= V(2)  # True
• V(2) <= V(2)  # True
• V(3) <= V(2)  # False

Common uses:
• Range checks and boundary conditions
• Sorted data validation
• Comparison chains like V(1) <= V(2) <= V(3)

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
  (_i: number) => ({
    q: `What does defining __gt__ on a class enable?`,
    o: ["Comparison with > operator", "Greater-than assignment", "Type conversion", "String formatting"],
    c: 0,
    e: "__gt__ enables the > (greater-than) comparison operator for instances.",
    de: `Defining __gt__ on a class allows instances to be compared using the > operator. When you write a > b, Python calls a.__gt__(b). This is one of the six rich comparison methods.

Key concepts:
• __gt__ overrides the > operator
• Called when using > between instances of the class
• Should return True or False (or NotImplemented)
• Part of the rich comparison protocol alongside __lt__, __le__, __ge__, __eq__, __ne__

How it works:
• class V: def __gt__(self, o): return self.x > o.x
• V(3) > V(1) calls V.__gt__(V(3), V(1))
• self.x > o.x evaluates 3 > 1 = True
• If left operand's __gt__ returns NotImplemented, Python tries right operand's __lt__

Examples:
• V(5) > V(3)  # True
• V(1) > V(2)  # False
• max(V(1), V(5), V(3))  # works if __gt__ is defined

Common uses:
• Enabling > comparisons for custom objects
• Working with max(), heapq, sorting
• Building ordered collections

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
  (_i: number) => ({
    q: `What is the result of:\nclass V:\n    def __init__(self, x, y): self.x = x; self.y = y\n    def __add__(self, o): return V(self.x+o.x, self.y+o.y)\nv = V(1,2) + V(3,4)\nprint((v.x, v.y))`,
    o: ["(4, 6)", "(1, 2)", "Error", "(3, 4)"],
    c: 0,
    e: "__add__ adds corresponding attributes: (1+3, 2+4) = (4, 6).",
    de: `The __add__ method defines the behavior of the + operator. When V(1,2) + V(3,4) is evaluated, Python calls V.__add__(V(1,2), V(3,4)), which creates a new V with x = 1+3 = 4 and y = 2+4 = 6.

Key concepts:
• __add__ overrides the + operator for custom classes
• Should return a new instance rather than modifying self (immutability pattern)
• The method receives the right operand as the second argument
• Vector addition is a classic use case for __add__

How it works:
• V(1,2) has x=1, y=2; V(3,4) has x=3, y=4
• V(1,2) + V(3,4) calls __add__
• Returns V(1+3, 2+4) = V(4, 6)
• v.x = 4, v.y = 6, so (v.x, v.y) = (4, 6)

Examples:
• V(0,0) + V(1,1)  # V(1,1)
• V(-1,2) + V(1,-2)  # V(0,0)

Common uses:
• Vector and matrix arithmetic
• Complex number types
• Currency or measurement addition

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
  (_i: number) => ({
    q: `What is the result of:\nclass V:\n    def __init__(self, x): self.x = x\n    def __mul__(self, n): return V(self.x * n)\nv = V(3) * 4\nprint(v.x)`,
    o: ["12", "7", "Error", "34"],
    c: 0,
    e: "__mul__ multiplies the x attribute by n: 3 * 4 = 12.",
    de: `The __mul__ method defines the behavior of the * operator. When V(3) * 4 is evaluated, Python calls V.__mul__(V(3), 4), which creates a new V with x = 3 * 4 = 12.

Key concepts:
• __mul__ overrides the * operator
• The right operand can be any type (here an int)
• Returns a new V instance with the computed value
• For 4 * V(3) to work, you would need __rmul__

How it works:
• V(3) has x = 3
• V(3) * 4 calls __mul__ with n = 4
• Returns V(3 * 4) = V(12)
• v.x = 12

Examples:
• V(5) * 2   # V(10), v.x = 10
• V(0) * 100 # V(0), v.x = 0

Common uses:
• Scalar multiplication for vectors
• Scaling custom numeric types
• Unit conversion objects

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
  (_i: number) => ({
    q: `What is the result of:\nclass V:\n    def __init__(self, x): self.x = x\n    def __sub__(self, o): return V(self.x - o.x)\nv = V(10) - V(3)\nprint(v.x)`,
    o: ["7", "13", "Error", "-7"],
    c: 0,
    e: "__sub__ subtracts x attributes: 10 - 3 = 7.",
    de: `The __sub__ method defines the behavior of the - (subtraction) operator. When V(10) - V(3) is evaluated, Python calls V.__sub__(V(10), V(3)), which creates a new V with x = 10 - 3 = 7.

Key concepts:
• __sub__ overrides the binary - operator
• Returns a new instance with the computed difference
• Different from __neg__ which handles unary negation (-obj)
• Order matters: V(10) - V(3) is not the same as V(3) - V(10)

How it works:
• V(10) has x = 10, V(3) has x = 3
• V(10) - V(3) calls __sub__
• Returns V(10 - 3) = V(7)
• v.x = 7

Examples:
• V(5) - V(2)   # V(3), v.x = 3
• V(1) - V(1)   # V(0), v.x = 0

Common uses:
• Vector subtraction
• Date/time difference calculations
• Custom numeric type arithmetic

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
  (_i: number) => ({
    q: `What is the result of:\nclass V:\n    def __init__(self, x): self.x = x\n    def __neg__(self): return V(-self.x)\nv = -V(5)\nprint(v.x)`,
    o: ["-5", "5", "Error", "None"],
    c: 0,
    e: "__neg__ negates the x attribute: -5.",
    de: `The __neg__ method defines the behavior of the unary - (negation) operator. When -V(5) is evaluated, Python calls V.__neg__(V(5)), which creates a new V with x = -5.

Key concepts:
• __neg__ overrides the unary - operator (negation, not subtraction)
• Unary operators take only one operand: -obj
• Other unary methods: __pos__ (+obj), __abs__ (abs(obj)), __invert__ (~obj)
• Should return a new instance, not modify self

How it works:
• V(5) has x = 5
• -V(5) calls __neg__
• Returns V(-5)
• v.x = -5

Examples:
• -V(5)    # V(-5), v.x = -5
• -V(-3)   # V(3), v.x = 3
• -V(0)    # V(0), v.x = 0

Common uses:
• Negating vectors or coordinates
• Implementing mathematical objects (complex numbers, matrices)
• Sign inversion for custom numeric types

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
  (_i: number) => ({
    q: `What is the result of:\nclass V:\n    def __init__(self, x): self.x = x\n    def __abs__(self): return abs(self.x)\nprint(abs(V(-7)))`,
    o: ["7", "-7", "Error", "None"],
    c: 0,
    e: "__abs__ returns the absolute value of x: abs(-7) = 7.",
    de: `The __abs__ method defines the behavior of the built-in abs() function for instances. When abs(V(-7)) is called, Python calls V.__abs__(V(-7)), which returns abs(-7) = 7.

Key concepts:
• __abs__ overrides the built-in abs() function
• Can return any type (here returns an int, not a V instance)
• For vectors, __abs__ often returns the magnitude (length)
• abs() is a built-in that delegates to __abs__

How it works:
• V(-7) has x = -7
• abs(V(-7)) calls __abs__
• Returns abs(-7) = 7
• Result: 7 (an integer, not a V instance)

Examples:
• abs(V(-7))   # 7
• abs(V(3))    # 3
• abs(V(0))    # 0

Common uses:
• Computing magnitudes of vectors
• Absolute value for custom numeric types
• Distance calculations

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
  (_i: number) => ({
    q: `What is the result of:\nclass V:\n    def __init__(self, x): self.x = x\n    def __floordiv__(self, o): return V(self.x // o.x)\nv = V(7) // V(2)\nprint(v.x)`,
    o: ["3", "3.5", "Error", "1"],
    c: 0,
    e: "__floordiv__ performs integer division: 7 // 2 = 3.",
    de: `The __floordiv__ method defines the behavior of the // (floor division) operator. When V(7) // V(2) is evaluated, Python calls V.__floordiv__(V(7), V(2)), which creates a new V with x = 7 // 2 = 3.

Key concepts:
• __floordiv__ overrides the // operator
• Floor division truncates toward negative infinity
• Different from __truediv__ which overrides /
• 7 // 2 = 3 (not 3.5)

How it works:
• V(7) has x = 7, V(2) has x = 2
• V(7) // V(2) calls __floordiv__
• Returns V(7 // 2) = V(3)
• v.x = 3

Examples:
• V(7) // V(2)   # V(3), v.x = 3
• V(10) // V(3)  # V(3), v.x = 3
• V(-7) // V(2)  # V(-4), v.x = -4 (rounds toward -inf)

Common uses:
• Integer division for custom types
• Pagination calculations
• Grid/tile coordinate math

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
  (_i: number) => ({
    q: `What is the result of:\nclass V:\n    def __init__(self, x): self.x = x\n    def __mod__(self, o): return V(self.x % o.x)\nv = V(7) % V(3)\nprint(v.x)`,
    o: ["1", "2", "Error", "3"],
    c: 0,
    e: "__mod__ computes the remainder: 7 % 3 = 1.",
    de: `The __mod__ method defines the behavior of the % (modulo) operator. When V(7) % V(3) is evaluated, Python calls V.__mod__(V(7), V(3)), which creates a new V with x = 7 % 3 = 1.

Key concepts:
• __mod__ overrides the % operator
• Returns the remainder of division
• 7 = 3 * 2 + 1, so 7 % 3 = 1
• Can also be used for string formatting if desired (like str.__mod__)

How it works:
• V(7) has x = 7, V(3) has x = 3
• V(7) % V(3) calls __mod__
• Returns V(7 % 3) = V(1)
• v.x = 1

Examples:
• V(7) % V(3)   # V(1), v.x = 1
• V(10) % V(5)  # V(0), v.x = 0
• V(8) % V(3)   # V(2), v.x = 2

Common uses:
• Cyclic operations (clock arithmetic)
• Checking divisibility
• Custom modular arithmetic types

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
  (_i: number) => ({
    q: `What is the result of:\nclass V:\n    def __init__(self, x): self.x = x\n    def __pow__(self, n): return V(self.x ** n)\nv = V(2) ** 3\nprint(v.x)`,
    o: ["8", "6", "Error", "9"],
    c: 0,
    e: "__pow__ raises x to the power n: 2 ** 3 = 8.",
    de: `The __pow__ method defines the behavior of the ** (exponentiation) operator. When V(2) ** 3 is evaluated, Python calls V.__pow__(V(2), 3), which creates a new V with x = 2 ** 3 = 8.

Key concepts:
• __pow__ overrides the ** operator and the built-in pow() function
• pow(a, b) calls a.__pow__(b)
• pow(a, b, mod) calls a.__pow__(b, mod) for three-argument power with modulo
• The right operand can be any type

How it works:
• V(2) has x = 2
• V(2) ** 3 calls __pow__ with n = 3
• Returns V(2 ** 3) = V(8)
• v.x = 8

Examples:
• V(2) ** 3   # V(8), v.x = 8
• V(3) ** 2   # V(9), v.x = 9
• V(5) ** 0   # V(1), v.x = 1

Common uses:
• Mathematical computations with custom types
• Scientific calculations
• Custom exponentiation behavior

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
  (_i: number) => ({
    q: `What is __radd__ used for in Python?`,
    o: ["Reflected add when left operand doesn't support +", "Recursive addition", "Random addition", "Right-aligned addition"],
    c: 0,
    e: "__radd__ is called when the left operand's __add__ returns NotImplemented.",
    de: `The __radd__ method is the reflected (or right-side) version of __add__. It is called when the left operand does not support the + operation with the right operand. For example, 5 + V(3) first tries int.__add__(5, V(3)), which returns NotImplemented because int doesn't know how to add a V. Python then falls back to V.__radd__(V(3), 5).

Key concepts:
• __radd__ is called when the left operand's __add__ fails (returns NotImplemented)
• The "r" prefix stands for "reflected" or "right"
• Every arithmetic dunder has a reflected version: __rsub__, __rmul__, __rtruediv__, etc.
• self in __radd__ is the RIGHT operand of the expression

How it works:
• 5 + V(3) tries int.__add__(5, V(3)) first
• int doesn't know about V, returns NotImplemented
• Python then tries V.__radd__(V(3), 5)
• If __radd__ is defined, it handles the operation

Examples:
• class V:
•     def __radd__(self, o): return V(o + self.x)
• v = 5 + V(3)  # calls V.__radd__(V(3), 5) → V(8)

Common uses:
• Allowing built-in types on the left side of operators
• Making custom types work naturally in mixed expressions
• NumPy arrays use this extensively

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
  (_i: number) => ({
    q: `What is the result of:\nclass V:\n    def __init__(self, x): self.x = x\n    def __radd__(self, o): return V(o + self.x)\nv = 5 + V(3)\nprint(v.x)`,
    o: ["8", "Error", "3", "5"],
    c: 0,
    e: "__radd__ is called because int doesn't know how to add V. 5 + 3 = 8.",
    de: `When Python evaluates 5 + V(3), it first tries int.__add__(5, V(3)). Since int doesn't know how to add a V instance, it returns NotImplemented. Python then falls back to V.__radd__(V(3), 5), where self is V(3) and o is 5. The method returns V(5 + 3) = V(8).

Key concepts:
• 5 + V(3) first tries int.__add__(5, V(3)) → NotImplemented
• Python then tries V.__radd__(V(3), 5)
• In __radd__, self is the right operand (V(3)), o is the left operand (5)
• This allows custom objects to work on the right side of + with built-in types

How it works:
• 5 + V(3) → int.__add__(5, V(3)) fails
• Falls back to V.__radd__(V(3), 5)
• o = 5, self.x = 3
• Returns V(5 + 3) = V(8)
• v.x = 8

Examples:
• 5 + V(3)   # V(8), v.x = 8
• 10 + V(0)  # V(10), v.x = 10
• 0 + V(7)   # V(7), v.x = 7

Common uses:
• Enabling expressions like scalar + vector
• Mixed-type arithmetic
• Interoperability with built-in numeric types

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
  // 16-25: String/Display Dunder Methods
  (_i: number) => ({
    q: `What is the result of:\nclass C:\n    def __repr__(self): return "C()"\nc = C()\nprint(repr(c))`,
    o: ["C()", "None", "<C object>", "Error"],
    c: 0,
    e: "__repr__ returns the string 'C()' when repr() is called.",
    de: `The __repr__ method defines the "official" string representation of an object. When repr(c) is called, Python calls c.__repr__(), which returns the string "C()".

Key concepts:
• __repr__ is the developer-facing string representation
• Should ideally return a string that could recreate the object
• Called by repr(), the interactive interpreter, and as fallback for str()
• Convention: repr(obj) should look like a valid Python expression

How it works:
• C() creates an instance
• repr(c) calls c.__repr__()
• Returns the string "C()"
• print outputs: C()

Examples:
• repr(C())  # 'C()'
• C()        # In REPL, shows C()

Common uses:
• Debugging and logging
• Interactive interpreter display
• Unambiguous object representation

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
  (_i: number) => ({
    q: `What is the result of:\nclass C:\n    def __repr__(self): return "C()"\n    def __str__(self): return "I am C"\nprint(str(C()))`,
    o: ["I am C", "C()", "Error", "None"],
    c: 0,
    e: "__str__ is used by str() and returns 'I am C'.",
    de: `The __str__ method defines the "informal" or user-facing string representation. When str(C()) is called, Python calls C().__str__(), which returns "I am C". If __str__ were not defined, str() would fall back to __repr__.

Key concepts:
• __str__ is for user-friendly display, __repr__ is for developer debugging
• str() and print() use __str__ first
• If __str__ is not defined, Python falls back to __repr__
• Both should return a string

How it works:
• C() creates an instance
• str(C()) calls __str__() → "I am C"
• If __str__ were missing, str() would call __repr__() → "C()"
• print uses str() internally

Examples:
• str(C())    # 'I am C'
• repr(C())   # 'C()'
• print(C())  # I am C (uses __str__)

Common uses:
• User-facing output with print()
• String formatting: f"{obj}" uses __str__
• Readable display vs debug representation

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
  (_i: number) => ({
    q: `When you call print(obj), which method does Python try first?`,
    o: ["__str__", "__repr__", "__format__", "__print__"],
    c: 0,
    e: "print() uses str() internally, which tries __str__ first, then falls back to __repr__.",
    de: `When print(obj) is called, Python internally calls str(obj), which first looks for __str__. If __str__ is not defined, it falls back to __repr__. There is no __print__ method in Python.

Key concepts:
• print() converts its arguments to strings using str()
• str() tries __str__ first
• If __str__ is not defined, str() falls back to __repr__
• __repr__ should always be defined as a fallback
• __format__ is used by format() and f-strings, not by print directly

How it works:
• print(obj) calls str(obj) internally
• str(obj) checks for __str__
• If found, calls obj.__str__()
• If not found, calls obj.__repr__()
• The resulting string is printed to stdout

Examples:
• class A: def __repr__(self): return "A repr"
• print(A())  # A repr (falls back to __repr__)
• class B:
•     def __repr__(self): return "B repr"
•     def __str__(self): return "B str"
• print(B())  # B str (__str__ takes priority)

Common uses:
• Understanding str vs repr priority
• Deciding which method to implement
• Debugging print output issues

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
  (_i: number) => ({
    q: `What is the result of:\nclass C:\n    def __format__(self, spec): return f"formatted:{spec}"\nprint(f"{C():xyz}")`,
    o: ["formatted:xyz", "Error", "C()", "None"],
    c: 0,
    e: "__format__ is called by f-strings with format spec. spec receives 'xyz'.",
    de: `The __format__ method is called when an object appears in an f-string or format() call with a format specification. In f"{C():xyz}", the part after the colon ("xyz") is passed as the spec argument to __format__.

Key concepts:
• __format__ handles format() and f-string formatting
• The format spec (after :) is passed as the spec argument
• f"{obj:spec}" calls obj.__format__(spec)
• format(obj, spec) also calls obj.__format__(spec)

How it works:
• f"{C():xyz}" creates a C instance and calls __format__ with spec="xyz"
• __format__ returns f"formatted:xyz" → "formatted:xyz"
• The f-string evaluates to "formatted:xyz"
• print outputs: formatted:xyz

Examples:
• f"{C():abc}"      # "formatted:abc"
• f"{C():}"         # "formatted:" (empty spec)
• format(C(), "xyz") # "formatted:xyz"

Common uses:
• Custom formatting for dates, numbers, currencies
• Alignment and padding control
• Domain-specific display formats

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
  (_i: number) => ({
    q: `What is the result of:\nclass C:\n    def __bool__(self): return False\nprint(bool(C()))`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "__bool__ returns False, so bool(C()) is False.",
    de: `The __bool__ method defines the truth value of an object. When bool(C()) is called, Python calls C().__bool__(), which returns False. This means instances of C are always falsy.

Key concepts:
• __bool__ defines truthiness for custom objects
• Called by bool(), if statements, while loops, and logical operators
• Must return True or False
• If __bool__ is not defined, Python falls back to __len__ (0 = falsy, nonzero = truthy)
• If neither is defined, the object is always truthy

How it works:
• C() creates an instance
• bool(C()) calls __bool__() → False
• Result: False

Examples:
• bool(C())        # False
• if C(): "yes"    # skipped (falsy)
• not C()          # True

Common uses:
• Empty container checks
• Validity/enabled state
• Null-like sentinel objects

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
  (_i: number) => ({
    q: `What is the result of:\nclass C:\n    def __bool__(self): return False\nif C():\n    r = "yes"\nelse:\n    r = "no"\nprint(r)`,
    o: ["no", "yes", "Error", "None"],
    c: 0,
    e: "__bool__ returns False, so the else branch executes: r = 'no'.",
    de: `When an object is used in a boolean context (like an if statement), Python calls __bool__ to determine its truth value. Since C.__bool__ returns False, C() is falsy, so the else branch runs and r is set to "no".

Key concepts:
• if statements call __bool__ to evaluate truthiness
• C().__bool__() returns False, so the if condition is False
• The else branch executes, setting r = "no"
• Any boolean context (if, while, and, or, not) uses __bool__

How it works:
• C() creates an instance
• if C(): checks __bool__() → False
• Else branch runs: r = "no"
• print(r) → "no"

Examples:
• class Truthy: def __bool__(self): return True
• if Truthy(): "yes"  # executes
• class Falsy: def __bool__(self): return False
• if Falsy(): "yes"   # skipped

Common uses:
• Controlling flow based on object state
• Empty/non-empty checks
• Validity checks in conditionals

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
  (_i: number) => ({
    q: `What is the result of:\nclass C:\n    def __len__(self): return 0\nprint(bool(C()))`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "Without __bool__, Python falls back to __len__. len 0 means falsy.",
    de: `When __bool__ is not defined but __len__ is, Python uses __len__ to determine truthiness. An object with __len__() returning 0 is considered falsy, just like empty built-in containers ([], {}, "").

Key concepts:
• Without __bool__, Python falls back to __len__ for truth testing
• __len__() == 0 → falsy (like empty list, empty string)
• __len__() > 0 → truthy (like non-empty list)
• This is why bool([]) is False and bool([1]) is True

How it works:
• C() creates an instance
• bool(C()) checks for __bool__ → not found
• Falls back to __len__() → returns 0
• 0 means falsy → bool(C()) = False

Examples:
• class Empty: def __len__(self): return 0
• bool(Empty())  # False
• class NonEmpty: def __len__(self): return 5
• bool(NonEmpty())  # True

Common uses:
• Custom container types automatically get truthiness from length
• Empty containers are falsy by convention
• Matches Python's built-in behavior for lists, dicts, strings

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
  (_i: number) => ({
    q: `What is the result of:\nclass C:\n    def __len__(self): return 5\nprint(bool(C()))`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "Without __bool__, __len__ returning 5 (nonzero) means truthy → True.",
    de: `When __bool__ is not defined, Python falls back to __len__ for truth testing. Since __len__() returns 5, which is nonzero, the object is considered truthy.

Key concepts:
• Without __bool__, Python uses __len__ for truthiness
• __len__() returning a nonzero value means truthy
• This mirrors built-in behavior: bool([1,2,3]) is True because len is 3
• __len__ must return a non-negative integer

How it works:
• C() creates an instance
• bool(C()) checks for __bool__ → not found
• Falls back to __len__() → returns 5
• 5 is nonzero → truthy → True

Examples:
• class C: def __len__(self): return 5
• bool(C())  # True (nonzero length)
• class D: def __len__(self): return 0
• bool(D())  # False (zero length)

Common uses:
• Non-empty custom containers are truthy
• Consistent with Python's truth protocol
• len() and bool() work together naturally

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
  (_i: number) => ({
    q: `What is the result of:\nclass C:\n    def __contains__(self, item): return item in [1, 2, 3]\nprint(2 in C())`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "__contains__ checks if item is in [1, 2, 3]. 2 is in the list, so True.",
    de: `The __contains__ method defines the behavior of the 'in' operator. When 2 in C() is evaluated, Python calls C().__contains__(2), which checks if 2 is in [1, 2, 3]. Since 2 is in the list, it returns True.

Key concepts:
• __contains__ overrides the 'in' membership test operator
• Called by the 'in' and 'not in' operators
• Should return True or False
• If __contains__ is not defined, Python falls back to iterating through the object

How it works:
• C() creates an instance
• 2 in C() calls C().__contains__(2)
• Checks: 2 in [1, 2, 3] → True
• Result: True

Examples:
• 2 in C()  # True
• 5 in C()  # False
• 1 in C()  # True

Common uses:
• Custom membership testing
• Implementing set-like or range-like objects
• Optimized containment checks (e.g., interval objects)

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
  (_i: number) => ({
    q: `What is the result of:\nclass C:\n    def __contains__(self, item): return item in [1, 2, 3]\nprint(5 in C())`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "__contains__ checks if 5 is in [1, 2, 3]. It is not, so False.",
    de: `The __contains__ method checks membership. When 5 in C() is evaluated, Python calls C().__contains__(5), which checks if 5 is in [1, 2, 3]. Since 5 is not in the list, it returns False.

Key concepts:
• __contains__ is called for both 'in' and 'not in'
• 5 not in [1, 2, 3] → __contains__ returns False
• 'not in' is simply the negation of 'in'
• The returned value is coerced to bool

How it works:
• C() creates an instance
• 5 in C() calls C().__contains__(5)
• Checks: 5 in [1, 2, 3] → False
• Result: False

Examples:
• 5 in C()      # False
• 5 not in C()  # True
• 3 in C()      # True

Common uses:
• Defining what elements belong to a custom collection
• Optimized search (e.g., binary search tree containment)
• Range membership (e.g., checking if a point is in a region)

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
  // 26-40: Iteration Protocol
  (_i: number) => ({
    q: `What is the result of:\nclass R:\n    def __init__(self, n): self.n = n; self.i = 0\n    def __iter__(self): return self\n    def __next__(self):\n        if self.i >= self.n: raise StopIteration\n        self.i += 1\n        return self.i\nprint(list(R(3)))`,
    o: ["[1, 2, 3]", "[0, 1, 2]", "Error", "[1, 2, 3, 4]"],
    c: 0,
    e: "The iterator yields 1, 2, 3 then raises StopIteration. list() collects [1, 2, 3].",
    de: `This implements the full iterator protocol. R is both an iterable (has __iter__) and an iterator (has __next__). Each call to __next__ increments self.i and returns it. When self.i reaches self.n, it raises StopIteration to signal exhaustion.

Key concepts:
• An iterator must implement both __iter__ and __next__
• __iter__ returns self (the iterator object)
• __next__ returns the next value or raises StopIteration
• list() repeatedly calls __next__ until StopIteration

How it works:
• R(3) creates iterator with n=3, i=0
• First __next__: i becomes 1, returns 1
• Second __next__: i becomes 2, returns 2
• Third __next__: i becomes 3, returns 3
• Fourth __next__: i (3) >= n (3), raises StopIteration
• list() collects [1, 2, 3]

Examples:
• list(R(3))  # [1, 2, 3]
• list(R(0))  # [] (immediately stops)
• list(R(1))  # [1]

Common uses:
• Custom sequences and ranges
• Lazy data processing
• Infinite iterators (without the stop condition)

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
  (_i: number) => ({
    q: `What two methods must an iterator implement in Python?`,
    o: ["__iter__ and __next__", "__iter__ and __getitem__", "__next__ and __len__", "__start__ and __stop__"],
    c: 0,
    e: "An iterator must implement __iter__ (return self) and __next__ (return next value).",
    de: `The iterator protocol in Python requires two methods: __iter__ and __next__. An object that implements both is an iterator.

Key concepts:
• __iter__() must return the iterator object itself (return self)
• __next__() must return the next value or raise StopIteration when exhausted
• This is formalized in collections.abc.Iterator
• An iterable only needs __iter__ (which returns an iterator), but an iterator needs both

How it works:
• for x in obj: first calls iter(obj) which calls obj.__iter__()
• Then repeatedly calls next(iterator) which calls iterator.__next__()
• When __next__ raises StopIteration, the loop ends
• This protocol is used by for loops, list(), tuple(), sum(), etc.

Examples:
• class MyIter:
•     def __iter__(self): return self
•     def __next__(self): raise StopIteration
• iter(MyIter())  # returns the MyIter instance
• next(MyIter())  # raises StopIteration

Common uses:
• All Python iterators follow this protocol
• Files, generators, range objects are all iterators
• Custom data streams and lazy sequences

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
  (_i: number) => ({
    q: `What must __iter__ return for an iterator object?`,
    o: ["The iterator object itself (self)", "A list", "None", "A new iterator"],
    c: 0,
    e: "For an iterator, __iter__ must return self so it can be used in for loops.",
    de: `For an iterator object, __iter__ must return self. This is required so that iterators can be used directly in for loops and other iteration contexts. The distinction is important: an iterable's __iter__ returns an iterator (possibly a new one), but an iterator's __iter__ returns self.

Key concepts:
• Iterator's __iter__ returns self (the iterator itself)
• Iterable's __iter__ returns a (possibly new) iterator
• This allows iterators to be used wherever iterables are expected
• A list is iterable: list.__iter__() returns a new list_iterator each time

How it works:
• for x in iterator: calls iter(iterator) → iterator.__iter__() → self
• Then calls next(self) repeatedly
• If __iter__ didn't return self, the iterator couldn't be used in for loops
• This is a consistency requirement of the protocol

Examples:
• class MyIter:
•     def __iter__(self): return self  # must return self
•     def __next__(self): ...
• it = MyIter()
• iter(it) is it  # True

Common uses:
• Every iterator follows this pattern
• Ensures iterators work in for loops
• Required by the iterator protocol

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
  (_i: number) => ({
    q: `What should __next__ do when there are no more items?`,
    o: ["Raise StopIteration", "Return None", "Return False", "Raise ValueError"],
    c: 0,
    e: "__next__ must raise StopIteration to signal that the iterator is exhausted.",
    de: `When an iterator has no more items to yield, __next__ must raise StopIteration. This is the standard signal that tells Python to stop iterating. For loops, list(), and other consumers of iterators catch StopIteration automatically.

Key concepts:
• StopIteration is the standard signal for iterator exhaustion
• for loops catch StopIteration silently and end the loop
• Returning None would make None a valid yielded value, not a stop signal
• StopIteration is an exception but is part of normal iterator flow

How it works:
• Each call to __next__ returns the next value
• When there are no more values, raise StopIteration
• for x in iter: catches StopIteration and breaks the loop
• list(iter) catches StopIteration and returns collected items

Examples:
• class Counter:
•     def __init__(self, n): self.n = n; self.i = 0
•     def __next__(self):
•         if self.i >= self.n: raise StopIteration
•         self.i += 1; return self.i

Common uses:
• Every finite iterator raises StopIteration
• Generators do this automatically at the end
• Essential for proper iteration protocol compliance

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
  (_i: number) => ({
    q: `What is the result of:\nclass C:\n    def __iter__(self): return iter([1, 2, 3])\nprint(list(C()))`,
    o: ["[1, 2, 3]", "Error", "[C()]", "None"],
    c: 0,
    e: "__iter__ delegates to iter([1, 2, 3]), returning a list iterator.",
    de: `This class delegates iteration to a list's iterator. When list(C()) is called, Python calls C().__iter__(), which returns iter([1, 2, 3]) — a list_iterator. list() then consumes this iterator to produce [1, 2, 3].

Key concepts:
• __iter__ can delegate to any existing iterator
• iter([1, 2, 3]) returns a list_iterator object
• C is an iterable (has __iter__) but not itself an iterator (no __next__)
• Each call to __iter__ creates a fresh iterator, allowing multiple passes

How it works:
• C() creates an instance
• list(C()) calls iter(C()) → C().__iter__() → iter([1, 2, 3])
• list() consumes the list_iterator → [1, 2, 3]
• Result: [1, 2, 3]

Examples:
• list(C())    # [1, 2, 3]
• for x in C(): print(x)  # 1, 2, 3
• tuple(C())   # (1, 2, 3)

Common uses:
• Wrapping existing iterables with custom behavior
• Lazy proxies over collections
• Composing iterables from multiple sources

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
  (_i: number) => ({
    q: `What is the result of:\nclass C:\n    def __getitem__(self, i):\n        if i >= 3: raise IndexError\n        return i * 10\nprint(list(C()))`,
    o: ["[0, 10, 20]", "[10, 20, 30]", "Error", "[]"],
    c: 0,
    e: "Without __iter__, Python falls back to __getitem__ with indices 0, 1, 2. IndexError at 3 stops iteration.",
    de: `When a class has __getitem__ but not __iter__, Python uses the old-style iteration protocol: it calls __getitem__(0), __getitem__(1), __getitem__(2), etc. until an IndexError is raised.

Key concepts:
• Old-style iteration: Python calls __getitem__ with incrementing indices
• IndexError signals the end of iteration (like StopIteration for __next__)
• __getitem__(0) → 0*10=0, __getitem__(1) → 1*10=10, __getitem__(2) → 2*10=20
• __getitem__(3) raises IndexError, stopping iteration

How it works:
• list(C()) tries iter(C()) → no __iter__, falls back to __getitem__
• Calls __getitem__(0) → 0, __getitem__(1) → 10, __getitem__(2) → 20
• __getitem__(3) raises IndexError → iteration stops
• list() collects [0, 10, 20]

Examples:
• list(C())  # [0, 10, 20]
• C()[0]     # 0
• C()[2]     # 20

Common uses:
• Legacy sequence types
• Simple indexed access without full iterator protocol
• Backward compatibility with older Python code

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
  (_i: number) => ({
    q: `What is the result of:\nclass Squares:\n    def __init__(self, n): self.n = n\n    def __iter__(self):\n        for i in range(self.n): yield i ** 2\nprint(list(Squares(4)))`,
    o: ["[0, 1, 4, 9]", "[1, 4, 9, 16]", "Error", "[0, 1, 2, 3]"],
    c: 0,
    e: "__iter__ uses yield, making it a generator. It yields 0**2, 1**2, 2**2, 3**2.",
    de: `When __iter__ contains a yield statement, it becomes a generator function. Each call to __iter__ returns a fresh generator iterator. The generator yields i**2 for i in range(4): 0, 1, 4, 9.

Key concepts:
• Using yield in __iter__ makes it a generator function
• A generator function returns a generator iterator when called
• The generator handles __next__ and StopIteration automatically
• This is the most Pythonic way to implement __iter__

How it works:
• Squares(4) creates instance with n = 4
• list(Squares(4)) calls __iter__() → returns generator
• Generator yields: 0**2=0, 1**2=1, 2**2=4, 3**2=9
• Generator exhausts → StopIteration → list collects [0, 1, 4, 9]

Examples:
• list(Squares(4))  # [0, 1, 4, 9]
• list(Squares(0))  # []
• list(Squares(1))  # [0]

Common uses:
• Clean, readable iteration implementation
• Memory-efficient lazy iteration
• Most recommended way to define __iter__ for simple cases

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
  (_i: number) => ({
    q: `What is the result of:\nclass C:\n    def __iter__(self):\n        yield 1\n        yield 2\n        yield 3\nprint(list(C()))`,
    o: ["[1, 2, 3]", "Error", "[1]", "None"],
    c: 0,
    e: "__iter__ with yield makes a generator that produces 1, 2, 3.",
    de: `Using yield in __iter__ creates a generator-based iterator. Each yield statement produces one value. After the last yield, the generator returns (raises StopIteration implicitly), and list() collects all yielded values.

Key concepts:
• Multiple yield statements produce values in sequence
• The function suspends after each yield and resumes on next()
• After the last yield, the function exits → StopIteration
• No explicit StopIteration needed with generators

How it works:
• list(C()) calls __iter__() → returns generator
• next() → yields 1 (suspends)
• next() → yields 2 (suspends)
• next() → yields 3 (suspends)
• next() → function ends → StopIteration
• list collects [1, 2, 3]

Examples:
• list(C())        # [1, 2, 3]
• for x in C(): x  # 1, 2, 3
• sum(C())         # 6

Common uses:
• Fixed sequences with meaningful names
• Multi-step iteration with complex logic between yields
• State machine implementations

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
  (_i: number) => ({
    q: `What is the result of:\nclass C:\n    def __reversed__(self): return iter([3, 2, 1])\nprint(list(reversed(C())))`,
    o: ["[3, 2, 1]", "[1, 2, 3]", "Error", "None"],
    c: 0,
    e: "__reversed__ defines the behavior of reversed(). It returns iter([3, 2, 1]).",
    de: `The __reversed__ method defines what happens when reversed() is called on an instance. Here, it returns iter([3, 2, 1]), which is a list_iterator that yields 3, 2, 1.

Key concepts:
• __reversed__ overrides the built-in reversed() function
• Must return an iterator
• Without __reversed__, reversed() requires __len__ and __getitem__
• Allows custom reverse iteration logic

How it works:
• reversed(C()) calls C().__reversed__()
• Returns iter([3, 2, 1])
• list() consumes the iterator → [3, 2, 1]
• Result: [3, 2, 1]

Examples:
• list(reversed(C()))  # [3, 2, 1]
• for x in reversed(C()): print(x)  # 3, 2, 1

Common uses:
• Efficient reverse iteration without creating reversed copy
• Custom sequences with optimized reverse traversal
• Linked lists or trees with reverse iteration support

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
  (_i: number) => ({
    q: `Can you use a for loop on any object that defines __iter__?`,
    o: ["Yes", "No", "Only with __next__", "Only with __getitem__"],
    c: 0,
    e: "Any object with __iter__ is iterable and can be used in a for loop.",
    de: `Yes, any object that defines __iter__ can be used in a for loop. The for loop calls iter(obj), which calls obj.__iter__() to get an iterator, then repeatedly calls next() on it.

Key concepts:
• An object with __iter__ is an iterable
• for x in obj: calls iter(obj) → obj.__iter__()
• The returned iterator must have __next__
• Objects with only __getitem__ also work (old-style protocol)

How it works:
• for x in obj: is equivalent to:
•   it = iter(obj)  # calls obj.__iter__()
•   while True:
•       try: x = next(it)  # calls it.__next__()
•       except StopIteration: break

Examples:
• class C: def __iter__(self): return iter([1, 2])
• for x in C(): print(x)  # 1, 2

Common uses:
• Making any custom object iterable
• Integration with all Python iteration tools
• for loops, list comprehensions, unpacking, etc.

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
  (_i: number) => ({
    q: `What does iter([1, 2, 3]) return?`,
    o: ["A list_iterator object", "A list", "A generator", "A tuple"],
    c: 0,
    e: "iter() called on a list returns a list_iterator object.",
    de: `Calling iter() on a list returns a list_iterator object. This is a specialized iterator that traverses the list elements one by one. The list_iterator has __iter__ (returns self) and __next__ (returns next element).

Key concepts:
• iter(list) calls list.__iter__() which returns a list_iterator
• The list_iterator is a separate object from the list
• Multiple calls to iter() on the same list return independent iterators
• The iterator keeps track of its position in the list

How it works:
• iter([1, 2, 3]) → list_iterator object
• next(it) → 1, next(it) → 2, next(it) → 3, next(it) → StopIteration
• type(iter([1, 2, 3])) → <class 'list_iterator'>

Examples:
• it = iter([1, 2, 3])
• next(it)  # 1
• next(it)  # 2
• type(it)  # <class 'list_iterator'>

Common uses:
• Manual iteration with next()
• Understanding how for loops work under the hood
• Creating multiple independent iterators over the same data

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
  (_i: number) => ({
    q: `What is the result of next(iter([1, 2, 3]))?`,
    o: ["1", "[1, 2, 3]", "Error", "None"],
    c: 0,
    e: "iter() creates an iterator, next() gets the first element: 1.",
    de: `iter([1, 2, 3]) creates a list_iterator positioned at the start. next() advances it one step and returns the first element, which is 1.

Key concepts:
• iter() creates an iterator from an iterable
• next() calls __next__() on the iterator to get the next value
• The first call to next() returns the first element
• Each subsequent call returns the next element

How it works:
• iter([1, 2, 3]) → list_iterator at position 0
• next(iterator) → calls __next__() → returns 1
• The iterator object created here is temporary (not saved)
• Result: 1

Examples:
• next(iter([1, 2, 3]))   # 1
• next(iter("abc"))        # 'a'
• next(iter(range(10)))    # 0

Common uses:
• Getting the first element of any iterable
• Peeking at the start of a stream
• next(iter(s), default) for safe first-element access

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
  (_i: number) => ({
    q: `What is the result of:\nclass C:\n    def __len__(self): return 3\n    def __getitem__(self, i): return [10, 20, 30][i]\nprint(C()[1])`,
    o: ["20", "10", "Error", "30"],
    c: 0,
    e: "__getitem__(1) returns the element at index 1 of [10, 20, 30], which is 20.",
    de: `The __getitem__ method defines indexing behavior (obj[key]). When C()[1] is evaluated, Python calls C().__getitem__(1), which returns [10, 20, 30][1] = 20.

Key concepts:
• __getitem__ overrides the [] (subscript) operator
• C()[1] calls __getitem__(self, 1)
• The index is passed as the key argument
• Can support integer indices, slices, or any hashable key

How it works:
• C() creates an instance
• C()[1] calls __getitem__(1)
• Returns [10, 20, 30][1] = 20
• Result: 20

Examples:
• C()[0]  # 10
• C()[1]  # 20
• C()[2]  # 30

Common uses:
• Custom sequence and mapping types
• Database record access
• Lazy data loading with indexing

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
  (_i: number) => ({
    q: `What is the result of:\nclass C:\n    def __len__(self): return 3\n    def __getitem__(self, i): return [10, 20, 30][i]\nprint(len(C()))`,
    o: ["3", "30", "Error", "0"],
    c: 0,
    e: "__len__ returns 3, so len(C()) is 3.",
    de: `The __len__ method defines the behavior of the built-in len() function. When len(C()) is called, Python calls C().__len__(), which returns 3.

Key concepts:
• __len__ overrides the len() built-in
• Must return a non-negative integer
• Also affects bool() when __bool__ is not defined
• Used by many built-in functions and data structures

How it works:
• C() creates an instance
• len(C()) calls __len__() → returns 3
• Result: 3

Examples:
• len(C())  # 3
• bool(C())  # True (because __len__ returns 3, nonzero = truthy)

Common uses:
• Custom container types (lists, queues, trees)
• Reporting size of data structures
• Integration with len(), bool(), and iteration

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
  (_i: number) => ({
    q: `What is the difference between an iterable and an iterator?`,
    o: ["Iterable has __iter__; iterator has both __iter__ and __next__", "They are the same thing", "Iterable has __next__; iterator has __iter__", "Iterable is a class; iterator is a function"],
    c: 0,
    e: "An iterable has __iter__ (returns an iterator). An iterator has both __iter__ and __next__.",
    de: `An iterable is any object with __iter__ that returns an iterator. An iterator is an object with both __iter__ (returns self) and __next__ (returns next value or raises StopIteration). All iterators are iterables, but not all iterables are iterators.

Key concepts:
• Iterable: has __iter__() that returns an iterator
• Iterator: has __iter__() (returns self) AND __next__()
• A list is iterable but not an iterator (list has __iter__ but no __next__)
• iter([1,2,3]) returns a list_iterator, which IS an iterator

How it works:
• list has __iter__ → iterable (returns list_iterator)
• list_iterator has __iter__ and __next__ → iterator
• for x in [1,2,3]: first gets iterator via iter(), then calls next()
• Generators are iterators (have both methods)

Examples:
• [1,2,3] → iterable (has __iter__, no __next__)
• iter([1,2,3]) → iterator (has both __iter__ and __next__)
• range(5) → iterable (not an iterator until iter() is called)
• (x for x in range(5)) → generator = iterator

Common uses:
• Understanding Python's iteration model
• Knowing when to implement __iter__ vs both methods
• Debugging iteration-related errors

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
  // 41-50: Context Managers
  (_i: number) => ({
    q: `What two methods must a context manager implement?`,
    o: ["__enter__ and __exit__", "__init__ and __del__", "__open__ and __close__", "__start__ and __stop__"],
    c: 0,
    e: "A context manager must implement __enter__ (setup) and __exit__ (cleanup).",
    de: `The context manager protocol requires two methods: __enter__ and __exit__. These are called by the 'with' statement to set up and tear down a resource.

Key concepts:
• __enter__ is called when entering the 'with' block
• __exit__ is called when leaving the 'with' block (even if an exception occurred)
• with obj as x: calls __enter__ and binds its return value to x
• __exit__ receives exception info (or None if no exception)

How it works:
• with CM() as resource:
•     # __enter__ called, return value bound to 'resource'
•     # code block runs
• # __exit__ called automatically (even on exception)

Examples:
• with open("file.txt") as f:  # file.__enter__() returns file
•     data = f.read()          # use the file
• # file.__exit__() closes the file automatically

Common uses:
• File handling (open/close)
• Database connections (connect/disconnect)
• Lock acquisition and release
• Temporary state changes

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
  (_i: number) => ({
    q: `What is the result of:\nclass CM:\n    def __enter__(self): return "resource"\n    def __exit__(self, *a): pass\nwith CM() as r:\n    print(r)`,
    o: ["resource", "None", "CM object", "Error"],
    c: 0,
    e: "__enter__ returns 'resource', which is bound to r via 'as'.",
    de: `When the 'with' statement executes, it calls CM().__enter__(), which returns the string "resource". This return value is bound to the variable r via the 'as' clause. Inside the with block, r is "resource".

Key concepts:
• 'with CM() as r:' calls __enter__ and binds return value to r
• __enter__ can return anything: self, a different object, or a simple value
• __exit__ is called when the block ends, even if an exception occurs
• *a in __exit__ captures (exc_type, exc_val, exc_tb)

How it works:
• CM() creates context manager instance
• __enter__() returns "resource"
• r = "resource" (bound by 'as')
• print(r) outputs: resource
• __exit__() called with no exception info

Examples:
• with CM() as r: r   # "resource"
• with CM() as r: type(r)  # <class 'str'>

Common uses:
• Returning file handles, connections, locks
• Returning computed resources
• Returning self for method chaining

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
  (_i: number) => ({
    q: `What does __enter__ return in a context manager?`,
    o: ["The value bound to the 'as' variable", "Nothing", "The context manager class", "A boolean"],
    c: 0,
    e: "__enter__ returns the value that gets assigned to the variable after 'as'.",
    de: `The return value of __enter__ is bound to the variable specified after 'as' in the 'with' statement. This is often 'self' but can be any object.

Key concepts:
• with X() as y: the return value of __enter__ becomes y
• Common to return self so the user can call methods on the manager
• open() returns the file object from __enter__
• Can return a different object (e.g., a connection, a lock, a cursor)

How it works:
• with CM() as r: calls CM().__enter__()
• Whatever __enter__ returns becomes the value of r
• If no 'as' clause, the return value is discarded
• __enter__ can return self, another object, or None

Examples:
• class CM: def __enter__(self): return self  # common pattern
• class CM: def __enter__(self): return "data"  # return different object
• with CM() as x: type(x)  # depends on __enter__ return

Common uses:
• Returning resource handles
• Returning self for direct access to manager methods
• Returning wrapped or transformed resources

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
  (_i: number) => ({
    q: `What arguments does __exit__ receive?`,
    o: ["Exception type, value, and traceback", "No arguments", "The return value of __enter__", "A boolean"],
    c: 0,
    e: "__exit__ receives (exc_type, exc_val, exc_tb) — all None if no exception occurred.",
    de: `The __exit__ method receives three arguments describing any exception that occurred in the with block: the exception type, the exception value, and the traceback. If no exception occurred, all three are None.

Key concepts:
• __exit__(self, exc_type, exc_val, exc_tb)
• If no exception: all three are None
• If exception occurred: exc_type is the exception class, exc_val is the instance, exc_tb is the traceback
• __exit__ can suppress the exception by returning True

How it works:
• Normal exit: __exit__(self, None, None, None)
• Exception exit: __exit__(self, TypeError, TypeError("msg"), <traceback>)
• If __exit__ returns True, the exception is suppressed
• If __exit__ returns False/None, the exception propagates

Examples:
• class CM:
•     def __exit__(self, exc_type, exc_val, exc_tb):
•         if exc_type is not None:
•             print(f"Error: {exc_val}")
•         return False  # don't suppress

Common uses:
• Logging exceptions
• Cleaning up regardless of success/failure
• Conditionally suppressing exceptions

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
  (_i: number) => ({
    q: `What does returning True from __exit__ do?`,
    o: ["Suppresses the exception", "Raises the exception", "Logs the exception", "Nothing special"],
    c: 0,
    e: "Returning True from __exit__ suppresses any exception that occurred in the with block.",
    de: `If __exit__ returns a truthy value (typically True), any exception that occurred inside the with block is suppressed — it does not propagate. If __exit__ returns a falsy value (False, None, etc.), the exception propagates normally.

Key concepts:
• return True in __exit__ → exception is silenced
• return False or None → exception propagates
• This is powerful but should be used carefully
• contextlib.suppress is a built-in context manager that does this

How it works:
• Exception occurs in with block
• Python calls __exit__(self, exc_type, exc_val, exc_tb)
• If __exit__ returns True: exception is suppressed, execution continues after with
• If __exit__ returns False/None: exception propagates normally

Examples:
• class Suppress:
•     def __enter__(self): return self
•     def __exit__(self, *a): return True
• with Suppress():
•     raise ValueError("oops")
• print("continues!")  # this runs — exception suppressed

Common uses:
• Silencing expected exceptions
• Implementing retry logic
• contextlib.suppress(ValueError) does the same thing

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
  (_i: number) => ({
    q: `Can contextlib.contextmanager be used as an alternative to writing __enter__ and __exit__?`,
    o: ["Yes, with a generator function", "No", "Only for file handling", "Only in Python 2"],
    c: 0,
    e: "contextlib.contextmanager lets you write a context manager using a generator with yield.",
    de: `Yes, contextlib.contextmanager is a decorator that turns a generator function into a context manager. Instead of writing a class with __enter__ and __exit__, you write a function with yield.

Key concepts:
• The code before yield runs on __enter__
• The yielded value is bound to 'as' variable
• The code after yield runs on __exit__
• Much more concise than a full class

How it works:
• from contextlib import contextmanager
• @contextmanager
• def my_cm():
•     print("entering")  # __enter__ equivalent
•     yield "resource"    # value for 'as'
•     print("exiting")   # __exit__ equivalent
• with my_cm() as r: print(r)  # entering, resource, exiting

Examples:
• @contextmanager
• def timer():
•     start = time.time()
•     yield
•     print(f"Elapsed: {time.time() - start}")

Common uses:
• Quick context managers without boilerplate
• Temporary state changes
• Resource management with less code

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
  (_i: number) => ({
    q: `What does open("file.txt") return in the context of 'with open("file.txt") as f'?`,
    o: ["A file object that is also a context manager", "A string", "A list of lines", "A file descriptor integer"],
    c: 0,
    e: "open() returns a file object that implements __enter__ and __exit__ (context manager protocol).",
    de: `The built-in open() function returns a file object (like TextIOWrapper or BufferedReader) that implements the context manager protocol. It has __enter__ (returns self) and __exit__ (closes the file).

Key concepts:
• open() returns a file object that is also a context manager
• __enter__ returns the file object itself
• __exit__ closes the file automatically
• This ensures the file is always properly closed, even if an exception occurs

How it works:
• with open("file.txt") as f:
•     __enter__() returns the file object → bound to f
•     # use f to read/write
• __exit__() closes the file automatically

Examples:
• with open("data.txt") as f:
•     content = f.read()
• # f is automatically closed here
• f.closed  # True

Common uses:
• Reading and writing files safely
• Ensuring files are closed even on errors
• The most common context manager in Python

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
  (_i: number) => ({
    q: `What happens if an exception occurs inside a 'with' block?`,
    o: ["__exit__ is called with the exception info", "__exit__ is not called", "The program crashes immediately", "__enter__ is called again"],
    c: 0,
    e: "__exit__ is always called when leaving a 'with' block, even if an exception occurred.",
    de: `If an exception occurs inside a 'with' block, Python calls __exit__ with the exception type, value, and traceback. This ensures cleanup code runs even when errors occur. The exception then propagates unless __exit__ returns True.

Key concepts:
• __exit__ is ALWAYS called, whether the block succeeds or raises an exception
• On exception: __exit__(self, exc_type, exc_val, exc_tb) with actual exception info
• On success: __exit__(self, None, None, None)
• This guarantee is the main purpose of context managers

How it works:
• with CM() as r:
•     raise ValueError("error")
• # __exit__ is called with (ValueError, ValueError("error"), <traceback>)
• # If __exit__ returns True, exception is suppressed
• # If __exit__ returns False/None, exception propagates after __exit__ runs

Examples:
• class Logger:
•     def __enter__(self): return self
•     def __exit__(self, exc_type, exc_val, exc_tb):
•         if exc_type: print(f"Exception: {exc_val}")
•         return False  # propagate the exception

Common uses:
• Guaranteed resource cleanup (close files, release locks)
• Exception logging and monitoring
• Transaction rollback on failure

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
  (_i: number) => ({
    q: `Can you nest 'with' statements or use multiple context managers in one 'with'?`,
    o: ["Yes, both nesting and multiple items are supported", "No, only one 'with' at a time", "Only nesting, not multiple items", "Only in Python 3.10+"],
    c: 0,
    e: "You can nest with statements or use 'with A() as a, B() as b:' for multiple managers.",
    de: `Python supports both nested 'with' statements and multiple context managers in a single 'with' line. Multiple context managers in one line were supported since Python 2.7/3.1, and parenthesized multi-line syntax was added in Python 3.10.

Key concepts:
• Nested: with A(): with B(): (each has its own __exit__)
• Single line: with A() as a, B() as b: (comma-separated)
• Python 3.10+: with (A() as a, B() as b): (parenthesized for multi-line)
• All managers' __exit__ methods are called in reverse order

How it works:
• with A() as a, B() as b:
•     # A.__enter__() then B.__enter__()
•     # code block
• # B.__exit__() then A.__exit__() (reverse order)
• Equivalent to nested with statements

Examples:
• with open("in.txt") as fin, open("out.txt", "w") as fout:
•     fout.write(fin.read())
• # both files are properly closed

Common uses:
• Opening multiple files simultaneously
• Acquiring multiple locks
• Database connection + cursor management

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
  (_i: number) => ({
    q: `What is the purpose of context managers in Python?`,
    o: ["Ensure cleanup even if exceptions occur", "Speed up code execution", "Create global variables", "Define class hierarchies"],
    c: 0,
    e: "Context managers ensure resource cleanup (e.g., closing files) even when exceptions occur.",
    de: `Context managers guarantee that cleanup code runs even if an exception occurs inside the managed block. This pattern, known as RAII (Resource Acquisition Is Initialization) in other languages, prevents resource leaks.

Key concepts:
• Primary purpose: guaranteed cleanup regardless of exceptions
• Resources: files, connections, locks, temporary state
• 'with' statement ensures __exit__ is always called
• Eliminates common bugs: forgetting to close files, release locks, etc.

How it works:
• with open("file.txt") as f:
•     data = f.read()        # if this raises, __exit__ still runs
•     process(data)          # if this raises, __exit__ still runs
• # f.close() called automatically by __exit__

Examples:
• # Without context manager (error-prone):
• f = open("file.txt")
• try:
•     data = f.read()
• finally:
•     f.close()  # must remember this
•
• # With context manager (safe):
• with open("file.txt") as f:
•     data = f.read()  # cleanup is automatic

Common uses:
• File I/O: open()
• Threading: Lock(), Semaphore()
• Database: connection cursors
• Testing: mock.patch(), tempfile
• Timing: measuring code execution time

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
