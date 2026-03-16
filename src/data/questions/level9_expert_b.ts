// --- LEVEL 9 EXPERT B: Advanced Inheritance Edge Cases, Design Patterns, SOLID Principles (50 Questions) ---
// Questions 51-100 of expert set. Each is TRULY UNIQUE.
export const level9ExpertB = [
  // 51. Inherited attr not in subclass __dict__
  (_i: number) => ({
    q: `class A:\n    x = 1\nclass B(A): pass\nWhat is "x" in B.__dict__?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "x is inherited from A but not stored in B's own __dict__.",
    de: `When a class inherits an attribute, it can access it via the MRO, but it does not appear in the subclass's own __dict__.

Key concepts:
• B.__dict__ only contains attributes defined directly on B
• Inherited attributes live in the parent class's __dict__
• Python looks up attributes through the MRO chain
• "x" in B.__dict__ checks only B's own namespace

How it works:
• class A: x = 1 defines x in A.__dict__
• class B(A): pass defines nothing in B.__dict__
• B.x works because Python finds x in A via MRO
• But "x" in B.__dict__ is False because B has no own x

Example:
class A:
    x = 1
class B(A): pass
"x" in A.__dict__  # True
"x" in B.__dict__  # False
B.x                # 1 (found via MRO)

Common uses:
• Inspecting which attributes a class defines itself
• Understanding attribute resolution vs ownership
• Debugging inheritance chains

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
  // 52. Overridden attr IS in subclass __dict__
  (_i: number) => ({
    q: `class A:\n    x = 1\nclass B(A):\n    x = 2\nWhat is "x" in B.__dict__?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "B defines its own x, so it appears in B.__dict__.",
    de: `When a subclass redefines an attribute, it gets stored in the subclass's own __dict__, shadowing the parent's version.

Key concepts:
• B defines x = 2, so "x" is in B.__dict__
• This shadows A's x = 1
• A.__dict__["x"] is still 1
• B.__dict__["x"] is 2

How it works:
• class B(A): x = 2 creates a new attribute x in B's namespace
• B.__dict__ now contains "x"
• A.x is still 1, B.x is 2

Example:
class A:
    x = 1
class B(A):
    x = 2
"x" in B.__dict__  # True
B.__dict__["x"]    # 2
A.__dict__["x"]    # 1

Common uses:
• Understanding attribute shadowing
• Overriding class attributes in subclasses
• Inspecting class namespaces

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
  // 53. Inherited method not in subclass __dict__
  (_i: number) => ({
    q: `class A:\n    def f(self): return 1\nclass B(A): pass\nWhat is "f" in B.__dict__?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "f is inherited from A, so it is not in B's own __dict__.",
    de: `Methods follow the same rules as attributes — inherited methods live in the parent's __dict__, not the child's.

Key concepts:
• B inherits f from A
• B.__dict__ does not contain "f"
• B().f() still works via MRO lookup
• Only overriding f in B would place it in B.__dict__

How it works:
• class A: def f(self): ... stores f in A.__dict__
• class B(A): pass stores nothing in B.__dict__
• B().f() finds f in A via the method resolution order

Example:
class A:
    def f(self): return 1
class B(A): pass
"f" in A.__dict__  # True
"f" in B.__dict__  # False
B().f()            # 1 (found via MRO)

Common uses:
• Checking which methods a class defines itself
• Understanding method inheritance vs definition

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
  // 54. Instance attr in instance __dict__
  (_i: number) => ({
    q: `class A:\n    def __init__(self):\n        self.x = 1\nclass B(A): pass\nb = B()\nWhat is "x" in b.__dict__?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "self.x = 1 creates an instance attribute on b, stored in b.__dict__.",
    de: `Instance attributes created with self.attr are stored in the instance's __dict__, regardless of which class's __init__ created them.

Key concepts:
• A.__init__ sets self.x = 1
• B inherits __init__ from A
• When B() is called, self.x = 1 stores x on the instance
• b.__dict__ contains "x"

How it works:
• B() calls inherited A.__init__(self)
• self.x = 1 creates x on the instance b
• b.__dict__ == {"x": 1}
• "x" in b.__dict__ is True

Example:
class A:
    def __init__(self):
        self.x = 1
class B(A): pass
b = B()
b.__dict__          # {"x": 1}
"x" in b.__dict__   # True

Common uses:
• Understanding where instance attributes live
• Distinguishing instance attrs from class attrs

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
  // 55. __subclasses__() returns direct subclasses
  (_i: number) => ({
    q: `class A: pass\nclass B(A): pass\nWhat is A.__subclasses__()?`,
    o: ["[<class 'B'>]", "[]", "[A, B]", "Error"],
    c: 0,
    e: "__subclasses__() returns a list of direct subclasses.",
    de: `The __subclasses__() method returns a list of immediate (direct) subclasses of a class. It uses weak references internally.

Key concepts:
• A.__subclasses__() returns direct subclasses of A
• B is a direct subclass of A, so it appears in the list
• Only direct subclasses are included, not grandchildren
• The result is a list of class objects

How it works:
• Python tracks subclasses via weak references
• When class B(A) is defined, A registers B
• A.__subclasses__() returns [<class 'B'>]

Example:
class A: pass
class B(A): pass
class C(A): pass
class D(B): pass
A.__subclasses__()  # [<class 'B'>, <class 'C'>]
B.__subclasses__()  # [<class 'D'>]

Common uses:
• Finding all implementations of a base class
• Plugin/registry systems
• Framework introspection

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
  // 56. Multiple subclasses counted
  (_i: number) => ({
    q: `class A: pass\nclass B(A): pass\nclass C(A): pass\nWhat is len(A.__subclasses__())?`,
    o: ["2", "1", "3", "0"],
    c: 0,
    e: "A has two direct subclasses: B and C.",
    de: `__subclasses__() returns all direct subclasses. Both B and C inherit from A, so len(A.__subclasses__()) is 2.

Key concepts:
• B(A) and C(A) are both direct subclasses of A
• __subclasses__() counts each direct subclass
• Indirect subclasses (children of B or C) are not counted

How it works:
• class B(A) registers B as a subclass of A
• class C(A) registers C as a subclass of A
• A.__subclasses__() returns [B, C]
• len() of that list is 2

Example:
class A: pass
class B(A): pass
class C(A): pass
len(A.__subclasses__())  # 2

Common uses:
• Counting implementations
• Plugin discovery
• Registry patterns

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
  // 57. __slots__ inheritance — both parent and child slots
  (_i: number) => ({
    q: `class A:\n    __slots__ = ("x",)\nclass B(A):\n    __slots__ = ("y",)\nb = B()\nb.x = 1; b.y = 2\nWhat is (b.x, b.y)?`,
    o: ["(1, 2)", "Error", "(1,)", "None"],
    c: 0,
    e: "B inherits slot x from A and adds slot y. Both are accessible.",
    de: `When both parent and child define __slots__, the child gets slots from both. The child's __slots__ should only list NEW slots.

Key concepts:
• A defines __slots__ = ("x",)
• B(A) defines __slots__ = ("y",) — adds y
• B instances have both x and y slots
• Do NOT redeclare parent slots in child __slots__

How it works:
• b = B() creates instance with slots x and y
• b.x = 1 uses the x slot from A
• b.y = 2 uses the y slot from B
• (b.x, b.y) returns (1, 2)

Example:
class A:
    __slots__ = ("x",)
class B(A):
    __slots__ = ("y",)
b = B()
b.x = 1
b.y = 2
(b.x, b.y)  # (1, 2)

Common uses:
• Memory-efficient inheritance hierarchies
• Extending slotted classes with new attributes

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
  // 58. __slots__ parent but no __slots__ in child — child gets __dict__
  (_i: number) => ({
    q: `class A:\n    __slots__ = ("x",)\nclass B(A): pass\nb = B()\nb.x = 1; b.z = 3\nWhat is (b.x, b.z)?`,
    o: ["(1, 3)", "Error", "(1,)", "None"],
    c: 0,
    e: "B has no __slots__, so it gets a __dict__ and can store arbitrary attributes alongside inherited slots.",
    de: `If a child class does not define __slots__, it automatically gets a __dict__, allowing arbitrary attributes in addition to inherited slots.

Key concepts:
• A has __slots__ = ("x",) — no __dict__ on A instances
• B(A) has no __slots__ — B instances get a __dict__
• B instances can use slot x from A AND store extra attrs in __dict__
• b.z = 3 is stored in b.__dict__

How it works:
• b = B() has both x slot (from A) and __dict__ (from B)
• b.x = 1 uses the slot
• b.z = 3 uses __dict__
• Both are accessible

Example:
class A:
    __slots__ = ("x",)
class B(A): pass
b = B()
b.x = 1
b.z = 3
(b.x, b.z)      # (1, 3)
hasattr(b, "__dict__")  # True

Common uses:
• Understanding slot inheritance behavior
• Mixing slotted and non-slotted classes

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
  // 59. Single-underscore private accessible in subclass
  (_i: number) => ({
    q: `class A:\n    def __init__(self):\n        self._x = 1\nclass B(A):\n    def get_x(self):\n        return self._x\nWhat is B().get_x()?`,
    o: ["1", "Error", "None", "0"],
    c: 0,
    e: "Single underscore _x is just a convention; it is fully accessible in subclasses.",
    de: `A single leading underscore is a naming convention meaning "private by convention" — it does not restrict access.

Key concepts:
• self._x = 1 is a convention for "internal use"
• No access restriction is enforced
• Subclasses can freely access _x
• B().get_x() returns self._x which is 1

How it works:
• A.__init__ sets self._x = 1
• B inherits __init__ from A
• B().get_x() accesses self._x — returns 1
• No name mangling or restriction

Example:
class A:
    def __init__(self):
        self._x = 1
class B(A):
    def get_x(self):
        return self._x
B().get_x()  # 1

Common uses:
• Indicating internal/private attributes by convention
• No actual enforcement — just a signal to developers

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
  // 60. Double-underscore name mangling — AttributeError
  (_i: number) => ({
    q: `class A:\n    def __init__(self):\n        self.__x = 1\nclass B(A):\n    def get_x(self):\n        return self.__x\nWhat happens when calling B().get_x()?`,
    o: ["AttributeError", "1", "None", "0"],
    c: 0,
    e: "Name mangling transforms self.__x in A to self._A__x, and self.__x in B to self._B__x. B has no _B__x.",
    de: `Double underscore attributes trigger name mangling — the attribute name is prefixed with _ClassName. This means __x in A becomes _A__x, and __x in B would look for _B__x.

Key concepts:
• self.__x = 1 in A.__init__ stores _A__x on the instance
• self.__x in B.get_x looks for _B__x (B's mangled name)
• _B__x does not exist — only _A__x does
• This raises AttributeError

How it works:
• A.__init__: self.__x = 1 → self._A__x = 1
• B.get_x: return self.__x → return self._B__x
• _B__x was never set, so AttributeError
• This is Python's name mangling mechanism

Example:
class A:
    def __init__(self):
        self.__x = 1
class B(A):
    def get_x(self):
        return self.__x  # looks for _B__x
B().get_x()  # AttributeError: 'B' object has no attribute '_B__x'

Common uses:
• Understanding name mangling behavior
• Avoiding accidental attribute access in subclasses

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
  // 61. Accessing mangled name directly
  (_i: number) => ({
    q: `class A:\n    def __init__(self):\n        self.__x = 1\nclass B(A):\n    def get_x(self):\n        return self._A__x\nWhat is B().get_x()?`,
    o: ["1", "AttributeError", "None", "0"],
    c: 0,
    e: "self._A__x accesses the mangled name directly, returning 1.",
    de: `You can access name-mangled attributes by using the mangled form _ClassName__attr directly.

Key concepts:
• self.__x in A becomes self._A__x
• You can access it as self._A__x from anywhere
• This bypasses the name mangling protection
• B.get_x uses self._A__x — returns 1

How it works:
• A.__init__: self.__x = 1 → stored as _A__x
• B.get_x: return self._A__x → directly reads _A__x
• The mangled name exists on the instance
• Returns 1

Example:
class A:
    def __init__(self):
        self.__x = 1
class B(A):
    def get_x(self):
        return self._A__x
B().get_x()  # 1

Common uses:
• Accessing parent's private attributes when necessary
• Testing and debugging name-mangled attributes

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
  // 62. Name mangling rule
  (_i: number) => ({
    q: `Name mangling transforms __attr (double underscore) to what form?`,
    o: ["_ClassName__attr", "__ClassName_attr", "ClassName__attr__", "__attr_ClassName"],
    c: 0,
    e: "Python transforms __attr to _ClassName__attr.",
    de: `Python's name mangling transforms any identifier with two or more leading underscores and at most one trailing underscore into _ClassName__attr.

Key concepts:
• __attr becomes _ClassName__attr
• ClassName is the class where the attribute is defined
• This applies to attributes and methods
• Dunders (__attr__) are NOT mangled (two trailing underscores)

How it works:
• class Foo: self.__bar = 1 stores self._Foo__bar
• class Sub(Foo): self.__bar would be self._Sub__bar
• The mangling happens at compile time
• It prevents accidental overwrites in subclasses

Example:
class MyClass:
    def __init__(self):
        self.__secret = 42
obj = MyClass()
obj._MyClass__secret  # 42

Common uses:
• Preventing subclass attribute name conflicts
• Pseudo-private attributes in classes

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
  // 63. Single underscore convention
  (_i: number) => ({
    q: `What does a single underscore prefix _attr mean in Python?`,
    o: ["Private by convention (still accessible)", "Truly private (not accessible)", "Name mangling applied", "Syntax error"],
    c: 0,
    e: "A single underscore is a naming convention meaning 'internal use' — no access restriction.",
    de: `A single leading underscore is purely a convention in Python — it signals to other developers that the attribute is intended for internal use.

Key concepts:
• _attr means "private by convention"
• No access restriction is enforced by Python
• Still fully accessible from outside the class
• PEP 8 recommends this for internal attributes

How it works:
• self._name = "internal" — convention only
• obj._name still works from anywhere
• Linters may warn about accessing _ attributes
• from module import * skips _prefixed names

Example:
class Config:
    def __init__(self):
        self._secret = "hidden"
c = Config()
c._secret  # "hidden" — accessible!

Common uses:
• Marking internal APIs
• Signaling "don't use this directly"
• Module-level private variables

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
  // 64. Double underscore triggers name mangling
  (_i: number) => ({
    q: `What does a double underscore prefix __attr trigger in Python?`,
    o: ["Name mangling", "Syntax error", "True privacy", "Attribute deletion"],
    c: 0,
    e: "Double underscore prefix triggers name mangling, making it harder to access from subclasses.",
    de: `A double leading underscore triggers Python's name mangling mechanism, which renames the attribute to include the class name.

Key concepts:
• __attr triggers name mangling
• Becomes _ClassName__attr internally
• Makes accidental access from subclasses harder
• Not true privacy — still accessible via mangled name

How it works:
• self.__x = 1 becomes self._ClassName__x = 1
• Subclass self.__x becomes self._SubClass__x
• Different classes get different mangled names
• Prevents accidental name collisions in inheritance

Example:
class Parent:
    def __init__(self):
        self.__val = 10
p = Parent()
# p.__val        # AttributeError
p._Parent__val   # 10 — accessible via mangled name

Common uses:
• Avoiding attribute name collisions in deep hierarchies
• Pseudo-private attributes (stronger than single underscore)

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
  // 65. Dunder (both sides) — no mangling
  (_i: number) => ({
    q: `Are dunder methods like __init__ subject to name mangling?`,
    o: ["No, dunders are never mangled", "Yes, they are mangled", "Only in subclasses", "Only __init__ is exempt"],
    c: 0,
    e: "Names with double underscores on both sides (dunders) are never mangled — they are reserved for Python.",
    de: `Dunder (double underscore on both sides) names like __init__, __str__, __repr__ are NOT subject to name mangling. They are reserved for Python's special methods.

Key concepts:
• __attr__ (both leading and trailing underscores) = dunder
• Dunders are never mangled
• They are reserved for Python's special/magic methods
• Only __attr (leading only) triggers mangling

How it works:
• __init__ stays as __init__ — no mangling
• __str__ stays as __str__ — no mangling
• __private (no trailing underscores) → _ClassName__private
• __dunder__ (both sides) → __dunder__ (unchanged)

Example:
class Foo:
    def __init__(self):   # NOT mangled
        self.__bar = 1    # mangled to _Foo__bar
    def __repr__(self):   # NOT mangled
        return "Foo"

Common uses:
• Understanding which names get mangled
• Implementing magic methods correctly

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
  // 66. Class-level counter with __init__
  (_i: number) => ({
    q: `class A:\n    class_id = 0\n    def __init__(self):\n        A.class_id += 1\n        self.id = A.class_id\na1 = A()\na2 = A()\nWhat is (a1.id, a2.id)?`,
    o: ["(1, 2)", "(0, 1)", "(2, 2)", "(1, 1)"],
    c: 0,
    e: "Each __init__ increments A.class_id, so a1.id=1 and a2.id=2.",
    de: `A class-level counter incremented in __init__ gives each instance a unique sequential ID.

Key concepts:
• A.class_id is a class attribute shared across all instances
• Each __init__ call increments A.class_id
• self.id captures the current count
• a1 gets id=1, a2 gets id=2

How it works:
• A.class_id starts at 0
• a1 = A(): class_id becomes 1, a1.id = 1
• a2 = A(): class_id becomes 2, a2.id = 2
• (a1.id, a2.id) is (1, 2)

Example:
class A:
    class_id = 0
    def __init__(self):
        A.class_id += 1
        self.id = A.class_id
a1 = A()   # id=1
a2 = A()   # id=2
a3 = A()   # id=3
(a1.id, a2.id)  # (1, 2)

Common uses:
• Auto-incrementing IDs
• Counting instances created
• Instance tracking patterns

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
  // 67. __init_subclass__ sets attribute on subclass
  (_i: number) => ({
    q: `class A:\n    def __init_subclass__(cls, **kw):\n        super().__init_subclass__(**kw)\n        cls.parent_name = "A"\nclass B(A): pass\nWhat is B.parent_name?`,
    o: ['"A"', "Error", "None", '"B"'],
    c: 0,
    e: "__init_subclass__ runs when B is defined and sets B.parent_name to 'A'.",
    de: `__init_subclass__ is a hook that runs automatically when a class is subclassed. It receives the new subclass as cls.

Key concepts:
• __init_subclass__ is called when a subclass is created
• cls is the new subclass (B), not the parent (A)
• It can modify the subclass before it's used
• Introduced in Python 3.6

How it works:
• class B(A): pass triggers A.__init_subclass__(B)
• cls.parent_name = "A" sets parent_name on B
• B.parent_name is "A"

Example:
class A:
    def __init_subclass__(cls, **kw):
        super().__init_subclass__(**kw)
        cls.parent_name = "A"
class B(A): pass
B.parent_name  # "A"

Common uses:
• Plugin registration systems
• Automatic class configuration
• Replacing simple metaclasses

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
  // 68. Subclassing int — __new__ for immutables
  (_i: number) => ({
    q: `class Positive(int):\n    def __new__(cls, val):\n        if val < 0:\n            raise ValueError\n        return super().__new__(cls, val)\nWhat is Positive(5) + 3?`,
    o: ["8", "Error", "5", "Positive(8)"],
    c: 0,
    e: "Positive(5) creates an int subclass with value 5. Adding 3 gives 8.",
    de: `Immutable types like int must be customized via __new__ since the value is set at creation time, before __init__ runs.

Key concepts:
• int is immutable — value must be set in __new__
• __new__ creates the actual object
• super().__new__(cls, val) creates an int with value val
• Positive(5) is an int with value 5
• Positive(5) + 3 uses normal int addition → 8

How it works:
• Positive(5) calls __new__ with val=5
• val >= 0, so no ValueError
• super().__new__(Positive, 5) creates int with value 5
• Positive(5) + 3 = 8 (inherits int arithmetic)

Example:
class Positive(int):
    def __new__(cls, val):
        if val < 0:
            raise ValueError("Must be positive")
        return super().__new__(cls, val)
Positive(5) + 3   # 8
Positive(0) * 2   # 0

Common uses:
• Constrained numeric types
• Custom int/str/tuple subclasses
• Domain-specific value types

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
  // 69. Subclassing int — __new__ raises ValueError
  (_i: number) => ({
    q: `class Positive(int):\n    def __new__(cls, val):\n        if val < 0:\n            raise ValueError\n        return super().__new__(cls, val)\nWhat happens with Positive(-1)?`,
    o: ["ValueError", "0", "-1", "None"],
    c: 0,
    e: "val < 0 is True, so ValueError is raised.",
    de: `The __new__ method validates the input before creating the object. For negative values, it raises ValueError.

Key concepts:
• Positive(-1) calls __new__ with val=-1
• val < 0 is True → raise ValueError
• The object is never created
• This is validation in __new__

How it works:
• __new__ checks if val < 0
• -1 < 0 is True
• ValueError is raised
• No Positive object is created

Example:
class Positive(int):
    def __new__(cls, val):
        if val < 0:
            raise ValueError
        return super().__new__(cls, val)
Positive(5)   # 5 (works fine)
Positive(-1)  # ValueError

Common uses:
• Input validation for immutable types
• Ensuring data integrity at creation time
• Custom constrained types

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
  // 70. Subclassing float — custom __repr__
  (_i: number) => ({
    q: `class Percentage(float):\n    def __repr__(self):\n        return f"{self:.1%}"\nWhat is repr(Percentage(0.75))?`,
    o: ['"75.0%"', '"0.75"', '"0.75%"', "Error"],
    c: 0,
    e: "f\"{self:.1%}\" formats 0.75 as '75.0%' using the percentage format specifier.",
    de: `Subclassing float and overriding __repr__ lets you customize how the value is displayed. The :.1% format spec multiplies by 100 and adds %.

Key concepts:
• Percentage(0.75) creates a float with value 0.75
• __repr__ is overridden to use percentage formatting
• f"{self:.1%}" formats 0.75 as "75.0%"
• .1 means one decimal place, % means multiply by 100 and add %

How it works:
• self is 0.75 (a float)
• :.1% multiplies by 100 → 75.0, adds %
• f"{0.75:.1%}" → "75.0%"
• repr(Percentage(0.75)) returns "75.0%"

Example:
class Percentage(float):
    def __repr__(self):
        return f"{self:.1%}"
repr(Percentage(0.75))   # '75.0%'
repr(Percentage(0.5))    # '50.0%'
repr(Percentage(1.0))    # '100.0%'

Common uses:
• Domain-specific numeric types with custom display
• Financial and statistical calculations
• Readable output for ratios and percentages

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
  // 71. Template Method pattern
  (_i: number) => ({
    q: `The Template Method pattern defines what in a base class?`,
    o: ["An algorithm skeleton with overridable steps", "A list of required attributes", "A singleton instance", "A factory for objects"],
    c: 0,
    e: "Template Method defines an algorithm skeleton in the base class; subclasses override specific steps.",
    de: `The Template Method pattern defines the structure of an algorithm in a base class method, deferring specific steps to subclasses.

Key concepts:
• Base class defines the overall algorithm (the "template method")
• Individual steps are defined as methods that subclasses can override
• The algorithm's structure stays the same; only steps change
• Uses inheritance and method overriding

How it works:
• Base class has a method that calls several step methods
• Subclasses override step methods to customize behavior
• The template method itself is not overridden

Example:
class Report:
    def generate(self):
        return self.header() + self.body() + self.footer()
    def header(self): return "=== Report ===\\n"
    def body(self): return "No data\\n"
    def footer(self): return "=== End ==="

class SalesReport(Report):
    def body(self): return "Sales: $1000\\n"

SalesReport().generate()  # Uses overridden body()

Common uses:
• Document generation frameworks
• Game loop patterns
• Data processing pipelines

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
  // 72. Identifying the template method
  (_i: number) => ({
    q: `class Report:\n    def generate(self):\n        return self.header() + self.body() + self.footer()\n    def header(self): return "=Head=\\n"\n    def footer(self): return "=End="\nWhich method is the template method?`,
    o: ["generate()", "header()", "footer()", "__init__()"],
    c: 0,
    e: "generate() is the template method — it defines the algorithm skeleton by calling step methods.",
    de: `The template method is the method that defines the overall algorithm structure by calling other methods in sequence.

Key concepts:
• generate() calls header(), body(), and footer()
• generate() defines the algorithm skeleton
• header() and footer() are the customizable steps
• Subclasses override the steps, not the template method

How it works:
• generate() orchestrates the algorithm
• It calls self.header(), self.body(), self.footer()
• Subclasses override header/body/footer to customize output
• generate() structure remains unchanged

Example:
class Report:
    def generate(self):  # template method
        return self.header() + self.body() + self.footer()
    def header(self): return "=Head=\\n"
    def footer(self): return "=End="

Common uses:
• Defining fixed algorithm structures
• Allowing customization of individual steps

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
  // 73. Strategy pattern uses composition
  (_i: number) => ({
    q: `The Strategy pattern primarily uses what technique?`,
    o: ["Composition over inheritance", "Deep inheritance hierarchies", "Global variables", "Metaclasses"],
    c: 0,
    e: "Strategy pattern injects behavior via composition rather than using inheritance.",
    de: `The Strategy pattern encapsulates interchangeable algorithms and injects them into a context object, favoring composition over inheritance.

Key concepts:
• Strategy pattern uses composition (has-a) not inheritance (is-a)
• Behavior is injected as an object or function
• Algorithms can be swapped at runtime
• Follows Open/Closed Principle

How it works:
• Define a family of algorithms (strategies)
• Context object holds a reference to a strategy
• Context delegates work to the strategy
• Strategy can be changed without modifying context

Example:
class Sorter:
    def __init__(self, strategy):
        self.strategy = strategy
    def sort(self, data):
        return self.strategy(data)

s = Sorter(sorted)
s.sort([3, 1, 2])  # [1, 2, 3]

s.strategy = lambda d: sorted(d, reverse=True)
s.sort([3, 1, 2])  # [3, 2, 1]

Common uses:
• Sorting algorithms
• Payment processing strategies
• Validation strategies

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
  // 74. Strategy pattern example
  (_i: number) => ({
    q: `class Sorter:\n    def __init__(self, strategy):\n        self.strategy = strategy\n    def sort(self, data):\n        return self.strategy(data)\ns = Sorter(sorted)\nWhat is s.sort([3, 1, 2])?`,
    o: ["[1, 2, 3]", "[3, 2, 1]", "[3, 1, 2]", "Error"],
    c: 0,
    e: "The strategy is sorted, so s.sort([3, 1, 2]) returns [1, 2, 3].",
    de: `This is a concrete example of the Strategy pattern. The Sorter delegates sorting to whatever strategy function it was given.

Key concepts:
• Sorter holds a strategy (the sorted built-in function)
• sort() delegates to self.strategy(data)
• sorted([3, 1, 2]) returns [1, 2, 3]
• Strategy can be swapped without changing Sorter

How it works:
• Sorter(sorted) stores sorted as the strategy
• s.sort([3, 1, 2]) calls sorted([3, 1, 2])
• Returns [1, 2, 3]

Example:
s = Sorter(sorted)
s.sort([3, 1, 2])  # [1, 2, 3]

s2 = Sorter(lambda d: sorted(d, reverse=True))
s2.sort([3, 1, 2])  # [3, 2, 1]

Common uses:
• Pluggable algorithms
• Runtime algorithm selection
• Testing with mock strategies

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
  // 75. Factory Method pattern
  (_i: number) => ({
    q: `What does the Factory Method pattern provide?`,
    o: ["A method that creates and returns objects", "A way to delete objects", "A caching mechanism", "A thread-safe lock"],
    c: 0,
    e: "Factory Method provides a method for creating objects, allowing subclasses to override the type created.",
    de: `The Factory Method pattern defines an interface for creating objects but lets subclasses decide which class to instantiate.

Key concepts:
• A method is responsible for creating objects
• Subclasses can override to change the type of object created
• Decouples object creation from usage
• Often uses @classmethod in Python

How it works:
• Base class defines a factory method
• Factory method creates and returns an object
• Subclasses override to return different types
• Client code uses the factory method, not direct construction

Example:
class Animal:
    def __init__(self, sound):
        self.sound = sound
    @classmethod
    def create(cls, sound):
        return cls(sound)

class Dog(Animal): pass

Dog.create("woof").sound  # "woof"

Common uses:
• Object creation with complex setup
• Plugin systems
• Database connection factories

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
  // 76. Factory Method with classmethod
  (_i: number) => ({
    q: `class Animal:\n    @classmethod\n    def create(cls, sound):\n        return cls(sound)\nclass Dog(Animal):\n    def __init__(self, sound):\n        self.sound = sound\nWhat is Dog.create("woof").sound?`,
    o: ['"woof"', "Error", "None", '"bark"'],
    c: 0,
    e: "Dog.create('woof') calls cls(sound) where cls is Dog, creating Dog('woof').",
    de: `When Dog.create("woof") is called, cls is Dog. So cls(sound) is Dog("woof"), which sets self.sound = "woof".

Key concepts:
• @classmethod receives the class as cls
• Dog.create("woof") → cls is Dog
• cls(sound) → Dog("woof")
• Dog.__init__ sets self.sound = "woof"

How it works:
• create is a classmethod inherited from Animal
• Dog.create("woof") passes Dog as cls
• cls("woof") creates a Dog instance
• self.sound = "woof" in __init__
• .sound returns "woof"

Example:
class Animal:
    @classmethod
    def create(cls, sound):
        return cls(sound)
class Dog(Animal):
    def __init__(self, sound):
        self.sound = sound
Dog.create("woof").sound  # "woof"
type(Dog.create("woof"))  # <class 'Dog'>

Common uses:
• Alternative constructors
• Polymorphic object creation
• Framework extension points

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
  // 77. Observer pattern definition
  (_i: number) => ({
    q: `The Observer pattern maintains what for an object?`,
    o: ["A list of dependents notified of state changes", "A single global instance", "A fixed algorithm skeleton", "A pool of reusable objects"],
    c: 0,
    e: "Observer pattern: an object maintains a list of observers and notifies them of state changes.",
    de: `The Observer pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified automatically.

Key concepts:
• Subject (observable) maintains a list of observers
• When state changes, subject notifies all observers
• Observers register/unregister dynamically
• Decouples the subject from its observers

How it works:
• Subject has subscribe/unsubscribe/notify methods
• Observers register via subscribe
• When subject state changes, it calls notify
• Each observer's update method is called

Example:
class Event:
    def __init__(self):
        self._handlers = []
    def subscribe(self, handler):
        self._handlers.append(handler)
    def fire(self, data):
        for h in self._handlers:
            h(data)

Common uses:
• GUI event systems
• Pub/sub messaging
• Reactive programming
• MVC architecture

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
  // 78. Observer pattern implementation
  (_i: number) => ({
    q: `class Event:\n    def __init__(self):\n        self._handlers = []\n    def subscribe(self, f):\n        self._handlers.append(f)\n    def fire(self, data):\n        for h in self._handlers:\n            h(data)\ne = Event()\nresults = []\ne.subscribe(lambda d: results.append(d))\ne.fire("hello")\nWhat is results?`,
    o: ['["hello"]', "[]", '["hello", "hello"]', "Error"],
    c: 0,
    e: "fire('hello') calls the subscribed handler, which appends 'hello' to results.",
    de: `This is a concrete implementation of the Observer pattern using a simple event system.

Key concepts:
• Event stores handlers in a list
• subscribe adds a handler function
• fire calls all handlers with the given data
• One handler was subscribed, so results gets one item

How it works:
• e.subscribe(lambda d: results.append(d)) registers a handler
• e.fire("hello") calls the handler with "hello"
• The handler appends "hello" to results
• results is ["hello"]

Example:
e = Event()
results = []
e.subscribe(lambda d: results.append(d))
e.subscribe(lambda d: results.append(d.upper()))
e.fire("hello")
results  # ["hello", "HELLO"]

Common uses:
• Event-driven architectures
• Callback registration
• Decoupled communication between components

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
  // 79. Liskov Substitution Principle
  (_i: number) => ({
    q: `What does the Liskov Substitution Principle state?`,
    o: ["Subclasses should be substitutable for base classes", "Classes should have one responsibility", "Depend on abstractions, not concretions", "Prefer composition over inheritance"],
    c: 0,
    e: "LSP: subclasses should be usable wherever their base class is expected without breaking behavior.",
    de: `The Liskov Substitution Principle (LSP) states that objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program.

Key concepts:
• If S is a subclass of T, you should be able to use S wherever T is expected
• Subclass must honor the contract of the parent
• Overriding methods should not break parent's guarantees
• Violations often indicate a design flaw

How it works:
• Base class defines a contract (expected behavior)
• Subclass must fulfill that contract
• If subclass breaks parent's invariants, LSP is violated
• Classic violation: Square extending Rectangle

Example of LSP violation:
class Rectangle:
    def __init__(self, w, h):
        self.w = w; self.h = h
    def area(self): return self.w * self.h

class Square(Rectangle):
    def __init__(self, s):
        super().__init__(s, s)
    # If you allow setting w independently,
    # square invariant (w==h) breaks → LSP violation

Common uses:
• Designing robust class hierarchies
• Code review and refactoring
• SOLID principles compliance

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
  // 80. Square/Rectangle LSP violation
  (_i: number) => ({
    q: `class Rectangle:\n    def __init__(self, w, h):\n        self.w = w\n        self.h = h\n    def area(self):\n        return self.w * self.h\nclass Square(Rectangle):\n    def __init__(self, s):\n        super().__init__(s, s)\nDoes Square potentially violate LSP?`,
    o: ["Yes, if w and h can be set independently", "No, it always follows LSP", "Only if area() is overridden", "Only in Python 2"],
    c: 0,
    e: "If code sets r.w = 5 expecting r.h to stay the same, a Square breaks that expectation.",
    de: `The classic Square/Rectangle problem illustrates the Liskov Substitution Principle violation.

Key concepts:
• Rectangle allows independent w and h
• Square requires w == h at all times
• If you set square.w = 5, should square.h also change?
• Code expecting Rectangle behavior breaks with Square

How it works:
• Function expects Rectangle: sets r.w = 4, r.h = 5, checks area == 20
• If you pass a Square, setting w and h independently breaks the square invariant
• Either h changes silently (surprising) or the area is wrong
• This violates LSP — Square can't be substituted for Rectangle

Example:
def test_rect(r):
    r.w = 4
    r.h = 5
    assert r.area() == 20  # Fails for Square!

sq = Square(3)
test_rect(sq)  # Assertion error — Square can't behave like Rectangle

Common uses:
• Classic SOLID principles example
• Interview question
• Design pattern discussions

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
  // 81. Open/Closed Principle
  (_i: number) => ({
    q: `The Open/Closed Principle says classes should be open for what and closed for what?`,
    o: ["Open for extension, closed for modification", "Open for modification, closed for extension", "Open for deletion, closed for creation", "Open for reading, closed for writing"],
    c: 0,
    e: "OCP: classes should be extendable (via inheritance, etc.) without modifying existing code.",
    de: `The Open/Closed Principle states that software entities should be open for extension but closed for modification.

Key concepts:
• Open for extension: you can add new behavior
• Closed for modification: existing code shouldn't change
• Use inheritance, interfaces, or composition to extend
• Prevents breaking existing functionality

How it works:
• Instead of modifying a class to add behavior, extend it
• Use abstract base classes to define interfaces
• New functionality is added by creating new subclasses
• Existing code remains untouched

Example:
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self): pass

class Circle(Shape):
    def __init__(self, r): self.r = r
    def area(self): return 3.14 * self.r ** 2

class Square(Shape):
    def __init__(self, s): self.s = s
    def area(self): return self.s ** 2

Common uses:
• Plugin architectures
• Extensible frameworks
• SOLID design compliance

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
  // 82. Single Responsibility Principle
  (_i: number) => ({
    q: `The Single Responsibility Principle says a class should have how many reasons to change?`,
    o: ["One", "Two", "As many as needed", "Zero"],
    c: 0,
    e: "SRP: a class should have only one reason to change — one responsibility.",
    de: `The Single Responsibility Principle states that a class should have only one reason to change, meaning it should have only one job or responsibility.

Key concepts:
• One class = one responsibility
• "Reason to change" = a stakeholder or requirement
• If a class does too much, split it
• Leads to smaller, focused classes

How it works:
• A class that handles both data storage AND formatting has two responsibilities
• If storage changes, the class changes; if formatting changes, it changes
• Split into two classes: one for storage, one for formatting
• Each has only one reason to change

Example of violation:
class Report:
    def calculate(self): ...   # business logic
    def format_html(self): ... # presentation
    def save_to_db(self): ...  # persistence

Better design:
class ReportCalculator: ...
class ReportFormatter: ...
class ReportSaver: ...

Common uses:
• Code organization
• Reducing coupling
• Making classes easier to test

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
  // 83. Interface Segregation Principle
  (_i: number) => ({
    q: `The Interface Segregation Principle says prefer what over one large interface?`,
    o: ["Many small, specific interfaces", "One large comprehensive interface", "No interfaces at all", "Global functions"],
    c: 0,
    e: "ISP: prefer many small interfaces so clients aren't forced to depend on methods they don't use.",
    de: `The Interface Segregation Principle states that clients should not be forced to depend on interfaces they do not use.

Key concepts:
• Prefer small, specific interfaces over large, general ones
• No client should be forced to implement unnecessary methods
• Split fat interfaces into smaller role-specific ones
• Each interface should have a clear purpose

How it works:
• A large Worker interface with work(), eat(), sleep() forces all implementations to define all methods
• A Robot worker doesn't eat or sleep
• Split into Workable, Eatable, Sleepable interfaces
• Robot only implements Workable

Example:
from abc import ABC, abstractmethod

class Workable(ABC):
    @abstractmethod
    def work(self): pass

class Eatable(ABC):
    @abstractmethod
    def eat(self): pass

class Human(Workable, Eatable):
    def work(self): return "working"
    def eat(self): return "eating"

class Robot(Workable):
    def work(self): return "working"

Common uses:
• API design
• Microservice interfaces
• Plugin contracts

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
  // 84. Dependency Inversion Principle
  (_i: number) => ({
    q: `The Dependency Inversion Principle says depend on what?`,
    o: ["Abstractions, not concrete implementations", "Concrete classes only", "Global state", "The most derived class"],
    c: 0,
    e: "DIP: high-level modules should depend on abstractions, not concrete implementations.",
    de: `The Dependency Inversion Principle states that high-level modules should not depend on low-level modules; both should depend on abstractions.

Key concepts:
• Depend on abstractions (interfaces/abstract classes)
• Don't depend on concrete implementations directly
• High-level modules define what they need (interface)
• Low-level modules implement that interface

How it works:
• Instead of: class App uses MySQLDatabase directly
• Define: class Database(ABC) with abstract methods
• App depends on Database (abstraction)
• MySQLDatabase implements Database
• You can swap implementations without changing App

Example:
from abc import ABC, abstractmethod

class Database(ABC):
    @abstractmethod
    def save(self, data): pass

class MySQLDB(Database):
    def save(self, data): return f"MySQL: {data}"

class App:
    def __init__(self, db: Database):
        self.db = db
    def store(self, data):
        return self.db.save(data)

Common uses:
• Dependency injection
• Testing with mocks
• Swappable implementations

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
  // 85. ABC for dependency inversion
  (_i: number) => ({
    q: `from abc import ABC, abstractmethod\nclass Plugin(ABC):\n    @abstractmethod\n    def execute(self): pass\nWhat design principle does this implement?`,
    o: ["Dependency Inversion", "Single Responsibility", "Don't Repeat Yourself", "YAGNI"],
    c: 0,
    e: "Defining an abstract Plugin class means code depends on the abstraction, not concrete plugins.",
    de: `Using ABC to define a Plugin interface is a classic application of the Dependency Inversion Principle — code depends on the Plugin abstraction rather than specific implementations.

Key concepts:
• Plugin(ABC) defines an abstract interface
• @abstractmethod execute() must be implemented by subclasses
• Code that uses Plugin depends on the abstraction
• New plugins can be added without changing existing code

How it works:
• Plugin defines what a plugin must do (execute)
• Concrete plugins implement the interface
• The application depends on Plugin (abstraction)
• Any class implementing execute() can be used as a plugin

Example:
from abc import ABC, abstractmethod

class Plugin(ABC):
    @abstractmethod
    def execute(self): pass

class LogPlugin(Plugin):
    def execute(self): return "Logging..."

class AuthPlugin(Plugin):
    def execute(self): return "Authenticating..."

def run_plugin(p: Plugin):
    return p.execute()

Common uses:
• Plugin architectures
• Framework extension points
• Decoupled module design

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
  // 86. Singleton pattern
  (_i: number) => ({
    q: `class Singleton:\n    _instance = None\n    def __new__(cls):\n        if not cls._instance:\n            cls._instance = super().__new__(cls)\n        return cls._instance\ns1 = Singleton()\ns2 = Singleton()\nWhat is s1 is s2?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "__new__ returns the same instance every time, so s1 is s2 is True.",
    de: `The Singleton pattern ensures a class has only one instance. Every call to the constructor returns the same object.

Key concepts:
• _instance stores the single instance (starts as None)
• __new__ checks if _instance exists
• If not, creates a new instance and stores it
• If yes, returns the existing instance
• s1 is s2 is True — same object

How it works:
• Singleton() first time: _instance is None → create new → store in _instance
• Singleton() second time: _instance exists → return same object
• s1 and s2 are the same object
• s1 is s2 → True

Example:
class Singleton:
    _instance = None
    def __new__(cls):
        if not cls._instance:
            cls._instance = super().__new__(cls)
        return cls._instance
s1 = Singleton()
s2 = Singleton()
s1 is s2  # True
id(s1) == id(s2)  # True

Common uses:
• Configuration managers
• Database connection pools
• Logger instances
• Cache managers

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
  // 87. Metaclass __call__ logs creation
  (_i: number) => ({
    q: `class Meta(type):\n    def __call__(cls, *a, **kw):\n        print(f"Creating {cls.__name__}")\n        return super().__call__(*a, **kw)\nclass Foo(metaclass=Meta): pass\nWhat happens when Foo() is called?`,
    o: ["Prints 'Creating Foo' and returns Foo instance", "Error", "Returns None", "Prints nothing"],
    c: 0,
    e: "Meta.__call__ intercepts Foo() creation, prints the message, then creates the instance normally.",
    de: `A metaclass can intercept instance creation by overriding __call__. When you call Foo(), Python actually calls Meta.__call__(Foo).

Key concepts:
• type.__call__ is what creates instances of a class
• Metaclass overrides __call__ to add custom behavior
• super().__call__(*a, **kw) performs the normal creation
• The print runs before/during instance creation

How it works:
• Foo() triggers Meta.__call__(Foo)
• Meta.__call__ prints f"Creating {cls.__name__}" → "Creating Foo"
• super().__call__() calls type.__call__ → creates the Foo instance
• Returns the new Foo instance

Example:
class Meta(type):
    def __call__(cls, *a, **kw):
        print(f"Creating {cls.__name__}")
        return super().__call__(*a, **kw)

class Foo(metaclass=Meta): pass
f = Foo()  # prints: Creating Foo

Common uses:
• Logging object creation
• Object creation interception
• Instance counting
• Automatic registration

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
  // 88. Composition over inheritance — when to use
  (_i: number) => ({
    q: `When should you favor composition over inheritance?`,
    o: ["When combining behaviors from unrelated sources", "When classes share a direct is-a relationship", "When you need exactly one class", "When using only built-in types"],
    c: 0,
    e: "Favor composition when combining behaviors from unrelated sources — inheritance is for is-a relationships.",
    de: `Composition (has-a) should be favored over inheritance (is-a) when you need to combine behaviors from multiple unrelated sources.

Key concepts:
• Inheritance models "is-a" (Dog is an Animal)
• Composition models "has-a" (Car has an Engine)
• Deep inheritance hierarchies become rigid and fragile
• Composition allows flexible behavior combination

How it works:
• Instead of inheriting from multiple unrelated classes
• Create separate component objects
• Delegate behavior to those components
• Components can be swapped at runtime

Example:
class Engine:
    def start(self): return "Engine running"

class GPS:
    def locate(self): return "Location found"

class Car:
    def __init__(self):
        self.engine = Engine()
        self.gps = GPS()
    def start(self):
        return self.engine.start()

Common uses:
• Combining unrelated behaviors
• Avoiding deep inheritance hierarchies
• Flexible, swappable components

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
  // 89. Mixins — when to use
  (_i: number) => ({
    q: `Mixins are useful when you want to do what?`,
    o: ["Add reusable methods without deep hierarchies", "Replace all base classes", "Prevent any inheritance", "Delete class attributes"],
    c: 0,
    e: "Mixins add reusable functionality to classes without creating deep inheritance hierarchies.",
    de: `Mixins are small classes that provide specific reusable methods. They are designed to be used with multiple inheritance to add functionality.

Key concepts:
• Mixins are not meant to be instantiated alone
• They provide additional methods to other classes
• Keep class hierarchies flat
• Enable code reuse across unrelated classes

How it works:
• Define a mixin with specific methods
• Use multiple inheritance to add mixin to classes
• Classes gain the mixin's methods
• Multiple mixins can be combined

Example:
class JsonMixin:
    def to_json(self):
        import json
        return json.dumps(self.__dict__)

class LogMixin:
    def log(self, msg):
        print(f"[{self.__class__.__name__}] {msg}")

class User(JsonMixin, LogMixin):
    def __init__(self, name):
        self.name = name

u = User("Alice")
u.to_json()   # '{"name": "Alice"}'
u.log("hi")   # [User] hi

Common uses:
• Adding serialization (JsonMixin, XmlMixin)
• Adding logging capabilities
• Adding comparison methods
• Django class-based views

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
  // 90. Diamond problem resolution
  (_i: number) => ({
    q: `How does Python resolve the diamond problem in multiple inheritance?`,
    o: ["C3 linearization (MRO)", "Random selection", "Always uses the first parent", "Raises an error"],
    c: 0,
    e: "Python uses C3 linearization to compute the Method Resolution Order, resolving the diamond problem.",
    de: `The diamond problem occurs when a class inherits from two classes that share a common ancestor. Python resolves this using C3 linearization.

Key concepts:
• Diamond: D inherits from B and C, which both inherit from A
• Without resolution, methods from A could be called twice
• C3 linearization produces a consistent MRO
• Each class appears exactly once in the MRO
• super() follows the MRO, not just the direct parent

How it works:
• Python computes MRO at class creation using C3 linearization
• MRO respects: children before parents, left-to-right order
• Each class appears once
• super() calls follow MRO order

Example:
class A:
    def method(self): return "A"
class B(A):
    def method(self): return "B"
class C(A):
    def method(self): return "C"
class D(B, C): pass

D.__mro__  # (D, B, C, A, object)
D().method()  # "B" — first in MRO after D

Common uses:
• Understanding method resolution
• Designing multiple inheritance hierarchies
• Using super() correctly in complex hierarchies

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
  // 91. Exception hierarchy
  (_i: number) => ({
    q: `In Python's exception hierarchy, BaseException is the parent of Exception, which is the parent of what?`,
    o: ["ValueError, TypeError, KeyError, etc.", "BaseException", "object", "SystemExit"],
    c: 0,
    e: "Exception is the parent of common exceptions like ValueError, TypeError, KeyError, etc.",
    de: `Python's exception hierarchy has BaseException at the root, with Exception as the base for most user-catchable exceptions.

Key concepts:
• BaseException is the root of all exceptions
• Exception inherits from BaseException
• Most common exceptions inherit from Exception
• SystemExit, KeyboardInterrupt inherit directly from BaseException

How it works:
• BaseException → Exception → ValueError, TypeError, KeyError, etc.
• BaseException → SystemExit (not under Exception)
• BaseException → KeyboardInterrupt (not under Exception)
• except Exception catches most errors but not SystemExit/KeyboardInterrupt

Example:
issubclass(ValueError, Exception)      # True
issubclass(TypeError, Exception)       # True
issubclass(KeyError, Exception)        # True
issubclass(SystemExit, Exception)      # False
issubclass(KeyboardInterrupt, Exception)  # False

Common uses:
• Understanding exception catching
• Designing exception hierarchies
• Knowing what except Exception catches

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
  // 92. Custom exception class
  (_i: number) => ({
    q: `class CustomError(Exception): pass\nraise CustomError("oops")\nDoes this work?`,
    o: ["Yes, raises CustomError", "No, syntax error", "No, must define __init__", "No, must inherit BaseException"],
    c: 0,
    e: "A class inheriting from Exception can be raised. __init__ is inherited from Exception.",
    de: `Creating a custom exception is as simple as inheriting from Exception. No additional methods are required.

Key concepts:
• class CustomError(Exception): pass is valid
• Inherits __init__ from Exception
• Can be raised with a message: raise CustomError("oops")
• Can be caught with except CustomError

How it works:
• CustomError inherits everything from Exception
• raise CustomError("oops") creates and raises it
• The message "oops" is stored in args
• str(e) returns "oops"

Example:
class CustomError(Exception): pass

try:
    raise CustomError("oops")
except CustomError as e:
    print(e)  # oops

Common uses:
• Application-specific errors
• API error responses
• Domain-specific exceptions

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
  // 93. Custom exception with extra attributes
  (_i: number) => ({
    q: `class CustomError(Exception):\n    def __init__(self, msg, code):\n        super().__init__(msg)\n        self.code = code\ne = CustomError("fail", 404)\nWhat is e.code?`,
    o: ["404", "Error", '"fail"', "None"],
    c: 0,
    e: "CustomError stores code=404 as an instance attribute.",
    de: `Custom exceptions can have additional attributes by overriding __init__ and calling super().__init__().

Key concepts:
• Override __init__ to add custom attributes
• Call super().__init__(msg) to preserve Exception behavior
• self.code = code adds a custom attribute
• e.code returns 404

How it works:
• CustomError("fail", 404) calls __init__
• super().__init__("fail") stores the message
• self.code = 404 stores the error code
• e.code accesses the code attribute → 404

Example:
class CustomError(Exception):
    def __init__(self, msg, code):
        super().__init__(msg)
        self.code = code

e = CustomError("fail", 404)
e.code       # 404
str(e)       # "fail"
e.args       # ("fail",)

Common uses:
• HTTP error responses with status codes
• Database errors with error codes
• Rich exception objects for error handling

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
  // 94. Exception hierarchy — app-specific
  (_i: number) => ({
    q: `class AppError(Exception): pass\nclass DBError(AppError): pass\nclass AuthError(AppError): pass\nWhat is issubclass(DBError, AppError)?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "DBError inherits from AppError, so issubclass(DBError, AppError) is True.",
    de: `Creating an exception hierarchy lets you catch errors at different levels of specificity.

Key concepts:
• AppError is the base for all application errors
• DBError and AuthError are specific subtypes
• except AppError catches both DBError and AuthError
• except DBError catches only database errors

How it works:
• class DBError(AppError) makes DBError a subclass of AppError
• issubclass(DBError, AppError) returns True
• issubclass(AuthError, AppError) also returns True
• This enables hierarchical exception handling

Example:
class AppError(Exception): pass
class DBError(AppError): pass
class AuthError(AppError): pass

issubclass(DBError, AppError)   # True
issubclass(AuthError, AppError) # True
issubclass(DBError, Exception)  # True

try:
    raise DBError("connection failed")
except AppError as e:
    print("App error:", e)  # Catches DBError!

Common uses:
• Application error hierarchies
• Layered error handling
• Library exception design

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
  // 95. Catching subclass exception with parent handler
  (_i: number) => ({
    q: `class AppError(Exception): pass\nclass DBError(AppError): pass\ntry:\n    raise DBError()\nexcept AppError:\n    result = "caught"\nWhat is result?`,
    o: ['"caught"', "DBError is not caught", "Error", "None"],
    c: 0,
    e: "except AppError catches DBError because DBError is a subclass of AppError.",
    de: `An except clause catches the specified exception AND all its subclasses. Since DBError inherits from AppError, except AppError catches it.

Key concepts:
• except AppError catches AppError and all subclasses
• DBError is a subclass of AppError
• raise DBError() is caught by except AppError
• This is fundamental to exception hierarchies

How it works:
• raise DBError() raises a DBError exception
• Python checks: is DBError an instance of AppError? Yes (subclass)
• except AppError matches → result = "caught"
• result is "caught"

Example:
class AppError(Exception): pass
class DBError(AppError): pass
class AuthError(AppError): pass

try:
    raise DBError()
except AppError:
    print("caught")  # catches DBError

try:
    raise AuthError()
except AppError:
    print("caught")  # catches AuthError too

Common uses:
• Broad exception handlers for application errors
• Fallback error handling
• Hierarchical exception catching

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
  // 96. Catching multiple exception types with tuple
  (_i: number) => ({
    q: `try:\n    raise ValueError()\nexcept (TypeError, ValueError):\n    result = "caught"\nWhat is result?`,
    o: ['"caught"', "Error", "ValueError not caught", "None"],
    c: 0,
    e: "except (TypeError, ValueError) catches either exception type. ValueError matches.",
    de: `You can catch multiple exception types by passing a tuple to except. If the raised exception matches any type in the tuple, it is caught.

Key concepts:
• except (TypeError, ValueError) catches either type
• raise ValueError() matches ValueError in the tuple
• The exception is caught and result is set
• Tuple syntax is the standard way to catch multiple types

How it works:
• raise ValueError() raises a ValueError
• Python checks: is ValueError in (TypeError, ValueError)?
• Yes → except block runs
• result = "caught"

Example:
try:
    raise ValueError()
except (TypeError, ValueError):
    print("caught")  # caught

try:
    raise KeyError()
except (TypeError, ValueError):
    pass  # NOT caught — KeyError is not in the tuple

Common uses:
• Handling multiple related error types uniformly
• Simplifying error handling code
• Grouping similar exception handlers

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
  // 97. issubclass with ValueError and Exception
  (_i: number) => ({
    q: `What is issubclass(ValueError, Exception)?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "ValueError inherits from Exception, so issubclass(ValueError, Exception) is True.",
    de: `issubclass checks if the first argument is a subclass of the second. ValueError is a subclass of Exception.

Key concepts:
• ValueError → Exception → BaseException → object
• issubclass(ValueError, Exception) is True
• This means except Exception catches ValueError
• Most common exceptions are subclasses of Exception

How it works:
• Python checks ValueError's MRO
• ValueError.__mro__ includes Exception
• issubclass returns True

Example:
issubclass(ValueError, Exception)       # True
issubclass(TypeError, Exception)        # True
issubclass(Exception, BaseException)    # True
issubclass(ValueError, BaseException)   # True

Common uses:
• Verifying exception hierarchies
• Programmatic exception handling
• Understanding what except clauses catch

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
  // 98. KeyboardInterrupt is NOT under Exception
  (_i: number) => ({
    q: `What is issubclass(KeyboardInterrupt, Exception)?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "KeyboardInterrupt inherits from BaseException directly, not from Exception.",
    de: `KeyboardInterrupt is a direct subclass of BaseException, not Exception. This means except Exception does NOT catch it.

Key concepts:
• KeyboardInterrupt → BaseException (skips Exception)
• issubclass(KeyboardInterrupt, Exception) is False
• except Exception will NOT catch Ctrl+C
• This is intentional — users should be able to interrupt programs

How it works:
• KeyboardInterrupt.__mro__ = (KeyboardInterrupt, BaseException, object)
• Exception is NOT in the MRO
• issubclass returns False
• except Exception doesn't catch keyboard interrupts

Example:
issubclass(KeyboardInterrupt, Exception)     # False
issubclass(KeyboardInterrupt, BaseException) # True

try:
    while True: pass
except Exception:
    pass  # Ctrl+C will NOT be caught here!

Common uses:
• Understanding exception hierarchy design
• Writing correct exception handlers
• Ensuring programs can be interrupted

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
  // 99. SystemExit is NOT under Exception
  (_i: number) => ({
    q: `What is issubclass(SystemExit, Exception)?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "SystemExit inherits from BaseException directly, not from Exception.",
    de: `SystemExit is a direct subclass of BaseException, not Exception. This ensures sys.exit() and exit() work even inside except Exception blocks.

Key concepts:
• SystemExit → BaseException (skips Exception)
• issubclass(SystemExit, Exception) is False
• except Exception will NOT catch SystemExit
• sys.exit() raises SystemExit

How it works:
• SystemExit.__mro__ = (SystemExit, BaseException, object)
• Exception is NOT in the MRO
• issubclass returns False
• Programs can exit even with broad exception handlers

Example:
issubclass(SystemExit, Exception)     # False
issubclass(SystemExit, BaseException) # True

import sys
try:
    sys.exit(0)
except Exception:
    pass  # SystemExit is NOT caught here!
# Program exits normally

Common uses:
• Understanding why sys.exit() works inside try/except
• Correct exception handler design
• Avoiding accidentally catching system events

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
  // 100. Why KeyboardInterrupt and SystemExit aren't under Exception
  (_i: number) => ({
    q: `Why are KeyboardInterrupt and SystemExit NOT subclasses of Exception?`,
    o: ["So except Exception doesn't accidentally catch them", "Because they are not errors", "Because Python 2 required it", "For performance reasons"],
    c: 0,
    e: "They bypass Exception so that generic 'except Exception' handlers don't prevent program exit or interrupt.",
    de: `KeyboardInterrupt and SystemExit inherit directly from BaseException instead of Exception so that generic exception handlers don't accidentally swallow them.

Key concepts:
• except Exception is a common "catch-all" pattern
• If KeyboardInterrupt were under Exception, Ctrl+C would be caught
• If SystemExit were under Exception, sys.exit() would be caught
• This design ensures programs remain interruptible and exitable

How it works:
• BaseException is the true root of all exceptions
• Exception is for "normal" errors that programs handle
• KeyboardInterrupt and SystemExit are "system events", not errors
• They bypass Exception to avoid being accidentally caught

Example:
try:
    while True:
        pass
except Exception:
    print("Error!")  # Ctrl+C is NOT caught
    # User can still interrupt the program

# If you truly need to catch everything:
try:
    pass
except BaseException:
    pass  # Catches EVERYTHING (usually a bad idea)

Common uses:
• Understanding Python's exception design philosophy
• Writing robust exception handlers
• Knowing when to use except Exception vs except BaseException
• Ensuring programs can always be stopped

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
