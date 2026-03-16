// --- LEVEL 8 INTERMEDIATE B: Advanced Attribute Access, Class Composition, Object Lifecycle (50 TRULY UNIQUE QUESTIONS) ---
// Topics 51-100: __getattr__/__getattribute__/__setattr__/__delattr__, __slots__, composition, singleton, __new__, proxy, copying, __eq__/__hash__, __init_subclass__, type()
export const level8IntermediateB = [
  // 51. __getattr__ returns fallback for missing attributes
  (_i: number) => ({
    q: `class C:\n    def __getattr__(self, name):\n        return f"no {name}"\nWhat is C().xyz?`,
    o: ['"no xyz"', 'AttributeError', 'None', '"xyz"'],
    c: 0,
    e: "__getattr__ is called when normal attribute lookup fails, so C().xyz returns \"no xyz\".",
    de: `__getattr__ is a special method invoked only when the standard attribute lookup mechanism fails — that is, when the attribute is not found in the instance __dict__, the class, or any base class.

Key concepts:
• __getattr__(self, name) is a fallback hook
• Only triggered when the attribute is NOT found by normal means
• The name parameter receives the attribute name as a string
• Must return a value or raise AttributeError

How it works:
1. C().xyz triggers attribute lookup for "xyz"
2. "xyz" is not in the instance dict or class dict
3. Python calls __getattr__(self, "xyz")
4. The method returns f"no xyz" → "no xyz"

Example:
c = C()
c.xyz    # "no xyz"
c.hello  # "no hello"
c.foo    # "no foo"

Common uses:
• Dynamic attribute proxying
• Default values for missing attributes
• Lazy attribute computation

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
  // 52. When __getattr__ is called
  (_i: number) => ({
    q: `__getattr__ is called when:`,
    o: ['Normal attribute lookup fails', 'Every attribute access', 'Only for class attributes', 'Only in __init__'],
    c: 0,
    e: "__getattr__ is the fallback — it is called only when the attribute is not found through normal lookup.",
    de: `Python's attribute access protocol has a specific order. __getattr__ sits at the end as a fallback mechanism.

Key concepts:
• Normal lookup: instance __dict__ → class __dict__ → base classes
• __getattr__ is called ONLY if normal lookup fails
• Contrast with __getattribute__ which is called on EVERY access
• __getattr__ is never called if the attribute exists normally

How it works:
1. obj.attr triggers __getattribute__ (default behavior)
2. Default __getattribute__ searches instance dict, class dict, bases
3. If attribute found → returned directly, __getattr__ is NOT called
4. If attribute NOT found → __getattr__(self, "attr") is called
5. If __getattr__ also fails → AttributeError

Example:
class C:
    def __init__(self):
        self.x = 1
    def __getattr__(self, name):
        return "fallback"
c = C()
c.x      # 1 (found normally, __getattr__ NOT called)
c.y      # "fallback" (__getattr__ called)

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
  // 53. __getattribute__ intercepts every attribute access
  (_i: number) => ({
    q: `class C:\n    def __getattribute__(self, name):\n        return 42\nWhat is C().anything?`,
    o: ['42', 'AttributeError', 'None', '"anything"'],
    c: 0,
    e: "__getattribute__ is called on every attribute access, so it always returns 42.",
    de: `__getattribute__ is called on EVERY attribute access, unlike __getattr__ which is only a fallback. Overriding it intercepts all attribute lookups.

Key concepts:
• __getattribute__ is called for every dot-access on an instance
• It completely overrides the normal lookup mechanism
• If overridden carelessly, even self.x inside the method triggers recursion
• Use object.__getattribute__(self, name) to access real attributes safely

How it works:
1. C().anything triggers __getattribute__(self, "anything")
2. The method ignores the name entirely and returns 42
3. This happens for ANY attribute name — .foo, .bar, .xyz all return 42

Example:
c = C()
c.anything  # 42
c.x         # 42
c.hello     # 42

Edge cases:
• Accessing self.something inside __getattribute__ causes infinite recursion
• Must use object.__getattribute__(self, name) to break the cycle

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
  // 54. __getattribute__ vs __getattr__ timing
  (_i: number) => ({
    q: `__getattribute__ is called:`,
    o: ['On every attribute access', 'Only when attribute is missing', 'Only for private attributes', 'Only for methods'],
    c: 0,
    e: "__getattribute__ is invoked on every attribute access, before __getattr__.",
    de: `__getattribute__ and __getattr__ serve different roles in Python's attribute access protocol.

Key concepts:
• __getattribute__ → called on EVERY attribute access (unconditionally)
• __getattr__ → called ONLY when normal lookup fails (fallback)
• __getattribute__ runs first; if it raises AttributeError, __getattr__ runs
• Default __getattribute__ implements the standard lookup (instance → class → bases)

How it works:
1. obj.attr always calls __getattribute__ first
2. Default implementation searches instance dict, class, bases
3. If found → returns the attribute
4. If not found → raises AttributeError
5. If AttributeError → Python calls __getattr__ as fallback

Example:
class C:
    def __getattribute__(self, name):
        print(f"accessing {name}")
        return object.__getattribute__(self, name)
c = C()
c.x = 1
c.x  # prints "accessing x", returns 1

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
  // 55. __setattr__ doubles assigned values
  (_i: number) => ({
    q: `class C:\n    def __setattr__(self, name, val):\n        object.__setattr__(self, name, val * 2)\nc = C()\nc.x = 5\nWhat is c.x?`,
    o: ['10', '5', 'Error', '25'],
    c: 0,
    e: "__setattr__ intercepts c.x = 5 and stores val * 2 = 10.",
    de: `__setattr__ is called whenever an attribute assignment is attempted on an instance. By overriding it, you can transform, validate, or log every assignment.

Key concepts:
• __setattr__(self, name, val) intercepts all attribute assignments
• Must use object.__setattr__() to actually store the value (avoid recursion)
• self.name = val inside __setattr__ would cause infinite recursion
• Called for every assignment including those inside __init__

How it works:
1. c.x = 5 calls C.__setattr__(c, "x", 5)
2. Inside, object.__setattr__(self, "x", 5 * 2) stores x = 10
3. c.x retrieves the stored value → 10

Example:
c = C()
c.x = 5   # stored as 10
c.y = 3   # stored as 6
c.x       # 10
c.y       # 6

Common uses:
• Validation: reject negative values, wrong types
• Transformation: normalize, convert units
• Logging: record every attribute change

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
  // 56. __delattr__ is called on attribute deletion
  (_i: number) => ({
    q: `class C:\n    def __delattr__(self, name):\n        print(f"deleting {name}")\nWhat does del C().x call?`,
    o: ['__delattr__', '__setattr__', '__getattr__', '__init__'],
    c: 0,
    e: "del obj.x triggers __delattr__ on the object.",
    de: `__delattr__ is the counterpart of __setattr__ — it is called whenever an attribute deletion is attempted with the del statement.

Key concepts:
• __delattr__(self, name) intercepts del obj.attr
• Can be used to prevent deletion, log it, or customize behavior
• To actually remove the attribute, call object.__delattr__(self, name)
• Without calling object.__delattr__, the attribute is not actually removed

How it works:
1. del C().x triggers __delattr__(self, "x")
2. The custom method prints "deleting x"
3. Since it doesn't call object.__delattr__, nothing is actually deleted
4. The method simply runs the print statement

Example:
class Protected:
    def __delattr__(self, name):
        raise AttributeError(f"Cannot delete {name}")

Common uses:
• Preventing attribute deletion
• Logging deletions for debugging
• Cleanup logic before removing an attribute

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
  // 57. Custom attribute storage with _data dict
  (_i: number) => ({
    q: `class C:\n    def __init__(self):\n        self._data = {}\n    def __getattr__(self, name):\n        return self._data.get(name, "missing")\n    def __setattr__(self, name, val):\n        if name == "_data":\n            object.__setattr__(self, name, val)\n        else:\n            self._data[name] = val\nc = C()\nc.x = 42\nWhat is c.x?`,
    o: ['42', '"missing"', 'AttributeError', 'None'],
    c: 0,
    e: "__setattr__ stores x in _data, and __getattr__ retrieves it from _data.",
    de: `This pattern implements custom attribute storage using a backing dictionary. It combines __setattr__ and __getattr__ to control where attributes live.

Key concepts:
• __setattr__ intercepts all assignments
• Special case for "_data" uses object.__setattr__ to avoid recursion
• All other attributes are stored in self._data
• __getattr__ reads from self._data when normal lookup fails

How it works:
1. __init__: self._data = {} triggers __setattr__ with name="_data"
2. The if-branch uses object.__setattr__ to store _data normally
3. c.x = 42 triggers __setattr__ with name="x"
4. The else-branch stores self._data["x"] = 42
5. c.x: "x" not in instance __dict__ → __getattr__ called
6. Returns self._data.get("x", "missing") → 42

Common uses:
• Attribute proxying and delegation
• Implementing record-like objects
• Attribute access logging with custom storage

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
  // 58. Empty instance __dict__
  (_i: number) => ({
    q: `class C: pass\nc = C()\nWhat is c.__dict__?`,
    o: ['{}', 'None', 'Error', "{'__class__': C}"],
    c: 0,
    e: "A fresh instance with no attributes has an empty __dict__.",
    de: `Every Python object (unless using __slots__) has a __dict__ attribute that stores its instance attributes as a dictionary.

Key concepts:
• __dict__ maps attribute names (strings) to their values
• A new instance with no attributes has an empty dict {}
• Setting c.x = 1 would add {"x": 1} to c.__dict__
• Class attributes are NOT stored in instance __dict__

How it works:
1. class C: pass defines a class with no __init__
2. c = C() creates an instance with no attributes
3. c.__dict__ returns {} — empty dictionary
4. No assignments have been made, so no entries exist

Example:
c = C()
c.__dict__        # {}
c.x = 1
c.__dict__        # {"x": 1}
c.y = "hello"
c.__dict__        # {"x": 1, "y": "hello"}

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
  // 59. Instance __dict__ length matches attribute count
  (_i: number) => ({
    q: `class C:\n    def __init__(self):\n        self.x = 1\n        self.y = 2\nc = C()\nWhat is len(c.__dict__)?`,
    o: ['2', '0', '1', '3'],
    c: 0,
    e: "self.x and self.y create two entries in the instance __dict__.",
    de: `Each assignment to self.attr in __init__ adds an entry to the instance's __dict__ dictionary.

Key concepts:
• self.x = 1 adds {"x": 1} to __dict__
• self.y = 2 adds {"y": 2} to __dict__
• __dict__ only contains instance attributes, not class attributes or methods
• len(__dict__) counts the number of instance attributes

How it works:
1. C() calls __init__, which runs self.x = 1 and self.y = 2
2. c.__dict__ is now {"x": 1, "y": 2}
3. len(c.__dict__) = 2

Example:
c = C()
c.__dict__         # {"x": 1, "y": 2}
len(c.__dict__)    # 2
c.z = 3
len(c.__dict__)    # 3

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
  // 60. __slots__ prevents unlisted attributes
  (_i: number) => ({
    q: `class C:\n    __slots__ = ["x", "y"]\nc = C()\nc.x = 1\nc.z = 2`,
    o: ['AttributeError', '2', 'None', 'TypeError'],
    c: 0,
    e: '__slots__ restricts attributes to those listed. "z" is not in __slots__, so assignment raises AttributeError.',
    de: `__slots__ explicitly declares which instance attributes a class allows. Any attempt to assign an attribute not in __slots__ raises AttributeError.

Key concepts:
• __slots__ = ["x", "y"] only allows attributes x and y
• Assigning an unlisted attribute raises AttributeError
• __slots__ also prevents the creation of __dict__
• Benefits: reduced memory usage and faster attribute access

How it works:
1. class C defines __slots__ = ["x", "y"]
2. c = C() creates an instance without __dict__
3. c.x = 1 succeeds — "x" is in __slots__
4. c.z = 2 raises AttributeError — "z" is not in __slots__

Example:
c = C()
c.x = 1       # OK
c.y = 2       # OK
c.z = 3       # AttributeError: 'C' object has no attribute 'z'

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
  // 61. __slots__ removes __dict__
  (_i: number) => ({
    q: `class C:\n    __slots__ = ["x"]\nc = C()\nWhat is hasattr(c, "__dict__")?`,
    o: ['False', 'True', 'Error', 'None'],
    c: 0,
    e: '__slots__ prevents creation of __dict__, so hasattr returns False.',
    de: `When a class defines __slots__, Python does not create a per-instance __dict__. Instead, it allocates fixed slots for the declared attributes.

Key concepts:
• Normal classes: each instance gets a __dict__ (a dictionary)
• __slots__ classes: no __dict__, attributes stored in fixed-size structure
• This saves ~40-50 bytes per instance (the dict overhead)
• You can add "__dict__" to __slots__ to have both, but that defeats the purpose

How it works:
1. class C defines __slots__ = ["x"]
2. c = C() creates an instance with a slot for "x" but no __dict__
3. hasattr(c, "__dict__") → False
4. The instance uses descriptor-based slots instead

Example:
class Normal: pass
class Slotted:
    __slots__ = ["x"]
hasattr(Normal(), "__dict__")   # True
hasattr(Slotted(), "__dict__")  # False

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
  // 62. __slots__ allows declared attributes
  (_i: number) => ({
    q: `class C:\n    __slots__ = ["x", "y"]\nc = C()\nc.x = 1\nc.y = 2\nWhat is (c.x, c.y)?`,
    o: ['(1, 2)', 'AttributeError', '(None, None)', 'Error'],
    c: 0,
    e: "Attributes listed in __slots__ can be set and accessed normally.",
    de: `__slots__ restricts which attributes can exist, but attributes that ARE listed work just like normal instance attributes.

Key concepts:
• __slots__ declares allowed attribute names
• Declared attributes can be assigned and read normally
• Internally, each slot is implemented as a descriptor on the class
• Access speed is slightly faster than __dict__-based lookup

How it works:
1. __slots__ = ["x", "y"] declares two allowed attributes
2. c.x = 1 stores 1 in the "x" slot
3. c.y = 2 stores 2 in the "y" slot
4. (c.x, c.y) returns (1, 2)

Example:
c = C()
c.x = 10
c.y = 20
print(c.x, c.y)  # 10 20

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
  // 63. Purpose of __slots__
  (_i: number) => ({
    q: `Why use __slots__ in a class?`,
    o: ['Memory savings and faster attribute access', 'To allow dynamic attributes', 'To enable inheritance', 'To make attributes private'],
    c: 0,
    e: "__slots__ eliminates __dict__ overhead, saving memory and making attribute access faster.",
    de: `__slots__ is an optimization that replaces the per-instance __dict__ with a fixed-size data structure.

Key concepts:
• Without __slots__: each instance has a __dict__ (Python dict, ~100+ bytes overhead)
• With __slots__: attributes stored in compact fixed slots (~8 bytes each)
• For classes with millions of instances, this saves significant memory
• Attribute access is also slightly faster (descriptor lookup vs dict lookup)

Memory comparison:
class Normal:
    def __init__(self):
        self.x = 1
        self.y = 2
# Each instance: ~168 bytes (includes __dict__)

class Slotted:
    __slots__ = ["x", "y"]
    def __init__(self):
        self.x = 1
        self.y = 2
# Each instance: ~56 bytes (no __dict__)

Trade-offs:
• Cannot add arbitrary attributes at runtime
• Cannot use __dict__-based introspection
• Slightly more complex with inheritance

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
  // 64. __class__ attribute reveals the class
  (_i: number) => ({
    q: `class C: pass\nc = C()\nWhat does c.__class__ return?`,
    o: ["<class '__main__.C'>", '"C"', 'type', 'None'],
    c: 0,
    e: "c.__class__ returns the class object that created the instance.",
    de: `Every Python object has a __class__ attribute that references the class (type) used to create it.

Key concepts:
• __class__ is equivalent to type(obj) for most purposes
• Returns the actual class object, not a string
• The repr shows <class '__main__.C'> (module-qualified name)
• Can be used to create new instances: c.__class__()

How it works:
1. class C: pass defines class C
2. c = C() creates an instance of C
3. c.__class__ returns the class object C
4. Displayed as <class '__main__.C'>

Example:
c = C()
c.__class__           # <class '__main__.C'>
c.__class__ is C      # True
type(c) is c.__class__  # True

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
  // 65. __class__.__name__ gives class name as string
  (_i: number) => ({
    q: `class C: pass\nc = C()\nWhat is c.__class__.__name__?`,
    o: ['"C"', '"c"', '"__main__.C"', 'Error'],
    c: 0,
    e: "__class__.__name__ returns the class name as a string.",
    de: `The __name__ attribute of a class object is a string containing the class's simple name (without module qualification).

Key concepts:
• __class__ returns the class object
• __name__ on a class returns its name as a string
• This is the unqualified name (just "C", not "__main__.C")
• Useful for logging, debugging, and dynamic type checking

How it works:
1. c.__class__ returns the class C
2. C.__name__ returns the string "C"
3. So c.__class__.__name__ is "C"

Example:
class MyClass: pass
obj = MyClass()
obj.__class__.__name__  # "MyClass"
type(obj).__name__      # "MyClass" (equivalent)

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
  // 66. Composition: Car has an Engine
  (_i: number) => ({
    q: `class Engine:\n    def start(self):\n        return "vroom"\nclass Car:\n    def __init__(self):\n        self.engine = Engine()\nWhat is Car().engine.start()?`,
    o: ['"vroom"', 'None', 'Error', '"Car"'],
    c: 0,
    e: "Car composes an Engine. Car().engine is an Engine instance, and .start() returns \"vroom\".",
    de: `Composition is a design pattern where a class contains instances of other classes as attributes, creating a "has-a" relationship.

Key concepts:
• Car "has-a" Engine (composition)
• Engine is created inside Car.__init__ → Car owns the Engine
• Delegation: Car can expose Engine methods through its own interface
• Stronger than aggregation: Engine's lifecycle is tied to Car

How it works:
1. Car() calls __init__, which creates self.engine = Engine()
2. Car().engine returns the Engine instance
3. .start() calls Engine.start() → returns "vroom"

Example:
car = Car()
car.engine           # <Engine instance>
car.engine.start()   # "vroom"

Common uses:
• Building complex objects from simpler components
• Favored over inheritance for flexibility ("favor composition over inheritance")

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
  // 67. Definition of composition
  (_i: number) => ({
    q: `What is composition in OOP?`,
    o: ['Building complex objects by combining simpler objects', 'Inheriting from multiple classes', 'Overriding parent methods', 'Using global variables'],
    c: 0,
    e: "Composition builds complex objects by combining simpler ones (has-a relationship).",
    de: `Composition is a fundamental OOP design principle where complex objects are built by containing references to other objects, rather than inheriting from them.

Key concepts:
• "Has-a" relationship: Car has an Engine, House has Rooms
• Contrasts with inheritance ("is-a" relationship)
• More flexible than inheritance — can change components at runtime
• Components can be swapped, tested independently, and reused

Composition vs Inheritance:
• Inheritance: class Car(Vehicle) — Car IS-A Vehicle
• Composition: class Car: engine = Engine() — Car HAS-A Engine

Example:
class CPU:
    def compute(self): return "computing"

class Computer:
    def __init__(self):
        self.cpu = CPU()
    def run(self):
        return self.cpu.compute()

Common uses:
• Dependency injection
• Strategy pattern (swap algorithms)
• Plugin architectures

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
  // 68. Definition of aggregation
  (_i: number) => ({
    q: `What is aggregation in OOP?`,
    o: ['Like composition but contained objects can exist independently', 'Creating subclasses', 'Merging two classes', 'Copying object attributes'],
    c: 0,
    e: "Aggregation is a weaker form of composition where contained objects have independent lifecycles.",
    de: `Aggregation is a "has-a" relationship like composition, but the contained objects can exist independently of the container.

Key concepts:
• Aggregation: container references objects but doesn't own them
• Composition: container creates and owns the objects
• In aggregation, objects can outlive the container
• In composition, objects are destroyed with the container

Example:
# Composition — Engine created inside Car
class Car:
    def __init__(self):
        self.engine = Engine()  # Car owns Engine

# Aggregation — Engine passed in from outside
class Car:
    def __init__(self, engine):
        self.engine = engine  # Car uses Engine but doesn't own it

engine = Engine()
car = Car(engine)
del car         # engine still exists
print(engine)   # still alive

Common uses:
• Team has members (members exist independently)
• University has students (students exist outside university)
• Playlist has songs (songs exist in multiple playlists)

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
  // 69. Class variable list bug — shared across instances
  (_i: number) => ({
    q: `class Logger:\n    logs = []\n    def log(self, msg):\n        self.logs.append(msg)\nWhat is wrong with this class?`,
    o: ['logs is shared across all instances', 'log method is invalid', 'Missing __init__', 'Nothing is wrong'],
    c: 0,
    e: "logs is a class variable (mutable list), so all instances share the same list.",
    de: `Defining a mutable object (like a list) as a class variable means all instances share the same object. This is a common Python gotcha.

Key concepts:
• logs = [] in the class body creates a class variable
• All instances reference the same list object
• Appending to self.logs modifies the shared list
• self.logs doesn't create an instance variable — it finds the class variable

How it works:
1. Logger.logs = [] is a single list shared by all instances
2. l1.log("a") does self.logs.append("a") → modifies the shared list
3. l2.logs now also contains ["a"] because it's the same list

Example:
l1 = Logger()
l2 = Logger()
l1.log("hello")
print(l2.logs)  # ["hello"] — oops, l2 sees l1's log!

Fix:
class Logger:
    def __init__(self):
        self.logs = []  # instance variable — each has its own list

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
  // 70. Correct: instance variable list — independent
  (_i: number) => ({
    q: `class Logger:\n    def __init__(self):\n        self.logs = []\n    def log(self, msg):\n        self.logs.append(msg)\nl1 = Logger()\nl2 = Logger()\nl1.log("a")\nWhat is l2.logs?`,
    o: ['[]', '["a"]', 'None', 'Error'],
    c: 0,
    e: "Each instance creates its own logs list in __init__, so l2.logs is independent and empty.",
    de: `When a mutable object is created in __init__ with self.attr = ..., each instance gets its own independent copy.

Key concepts:
• self.logs = [] in __init__ creates a new list per instance
• l1.logs and l2.logs are different list objects
• Modifying l1.logs does NOT affect l2.logs
• This is the correct pattern for per-instance mutable data

How it works:
1. l1 = Logger() creates l1 with l1.logs = [] (new list)
2. l2 = Logger() creates l2 with l2.logs = [] (different new list)
3. l1.log("a") appends to l1's list → l1.logs = ["a"]
4. l2.logs is still [] — its own separate list

Example:
l1.logs is l2.logs  # False — different objects
l1.log("a")
l1.logs  # ["a"]
l2.logs  # [] — unaffected

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
  // 71. Singleton pattern using __new__
  (_i: number) => ({
    q: `class Singleton:\n    _instance = None\n    def __new__(cls):\n        if cls._instance is None:\n            cls._instance = object.__new__(cls)\n        return cls._instance\nWhat is Singleton() is Singleton()?`,
    o: ['True', 'False', 'Error', 'None'],
    c: 0,
    e: "__new__ always returns the same instance, so both calls return the identical object.",
    de: `The Singleton pattern ensures only one instance of a class ever exists. This implementation uses __new__ to control instance creation.

Key concepts:
• __new__ is called before __init__ to create the instance
• _instance stores the single instance as a class variable
• First call: creates and stores the instance
• Subsequent calls: return the existing instance

How it works:
1. First Singleton(): cls._instance is None → creates new instance, stores it
2. Second Singleton(): cls._instance is not None → returns stored instance
3. Both calls return the exact same object
4. Singleton() is Singleton() → True (same identity)

Example:
a = Singleton()
b = Singleton()
a is b        # True
id(a) == id(b)  # True

Common uses:
• Database connection pools
• Configuration managers
• Logging services

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
  // 72. What is __new__
  (_i: number) => ({
    q: `What does __new__ do in Python?`,
    o: ['Creates and returns a new instance', 'Initializes instance attributes', 'Deletes an instance', 'Defines class attributes'],
    c: 0,
    e: "__new__ is responsible for creating and returning a new instance of the class.",
    de: `__new__ is the first step in object creation. It allocates memory and returns a new instance, which is then passed to __init__ for initialization.

Key concepts:
• __new__(cls) is a static method (implicitly)
• It receives the class as its first argument
• Must return an instance (usually via object.__new__(cls))
• If it doesn't return an instance of cls, __init__ is NOT called
• __init__(self) receives the instance created by __new__

How it works:
1. MyClass() calls MyClass.__new__(MyClass)
2. __new__ creates a bare instance (no attributes yet)
3. If __new__ returns an instance of MyClass, __init__ is called on it
4. __init__ sets up instance attributes

Example:
class C:
    def __new__(cls):
        print("Creating instance")
        return object.__new__(cls)
    def __init__(self):
        print("Initializing instance")
C()  # prints "Creating instance" then "Initializing instance"

Common uses:
• Singleton pattern
• Immutable types (str, int, tuple subclasses)
• Object caching / flyweight pattern

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
  // 73. __new__ vs __init__ distinction
  (_i: number) => ({
    q: `What is the difference between __new__ and __init__?`,
    o: ['__new__ creates the object, __init__ initializes it', '__init__ creates the object, __new__ initializes it', 'They are identical', '__new__ is for classes, __init__ for instances'],
    c: 0,
    e: "__new__ handles creation (allocating the object), __init__ handles initialization (setting attributes).",
    de: `__new__ and __init__ are the two phases of Python object construction.

Key concepts:
• __new__: CREATION — allocates memory, returns bare instance
• __init__: INITIALIZATION — sets up attributes on the created instance
• __new__ is called FIRST, receives class (cls)
• __init__ is called SECOND, receives instance (self)

How it works:
1. obj = MyClass(args)
2. Python calls MyClass.__new__(MyClass, args) → creates instance
3. If result is a MyClass instance, Python calls result.__init__(args)
4. obj now references the fully initialized instance

Example:
class C:
    def __new__(cls, value):
        instance = object.__new__(cls)
        print(f"Created: {id(instance)}")
        return instance
    def __init__(self, value):
        self.value = value
        print(f"Initialized: {self.value}")
C(42)
# Created: 140234567890
# Initialized: 42

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
  // 74. Order of __new__ and __init__
  (_i: number) => ({
    q: `class C:\n    def __new__(cls):\n        print("new")\n        return object.__new__(cls)\n    def __init__(self):\n        print("init")\nWhat is printed when C() is called?`,
    o: ['"new" then "init"', '"init" then "new"', 'Only "init"', 'Only "new"'],
    c: 0,
    e: "__new__ runs first to create the instance, then __init__ runs to initialize it.",
    de: `Python's object creation protocol always calls __new__ before __init__. This order is fixed and cannot be changed.

Key concepts:
• __new__ runs first — it creates and returns the raw instance
• __init__ runs second — it receives the instance and initializes it
• Both are called automatically by Python when you do ClassName()
• If __new__ doesn't return an instance of the class, __init__ is skipped

How it works:
1. C() triggers the creation protocol
2. Python calls C.__new__(C) → prints "new", returns new instance
3. Since the result is a C instance, Python calls result.__init__()
4. __init__ prints "init"
5. Output: "new" then "init"

Example:
class C:
    def __new__(cls):
        print("1. new")
        return object.__new__(cls)
    def __init__(self):
        print("2. init")
C()
# 1. new
# 2. init

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
  // 75. Tracking instances with class variable
  (_i: number) => ({
    q: `class C:\n    instances = []\n    def __init__(self):\n        C.instances.append(self)\nC()\nC()\nWhat is len(C.instances)?`,
    o: ['2', '0', '1', 'Error'],
    c: 0,
    e: "Each C() appends self to the shared instances list. Two calls → len is 2.",
    de: `A class variable (list) combined with __init__ can track all instances ever created. Each new instance registers itself.

Key concepts:
• C.instances = [] is a class variable shared by all instances
• __init__ appends self (the new instance) to this shared list
• After two instantiations, the list holds two instance references
• This is intentional shared-state (unlike the mutable default bug)

How it works:
1. C() creates instance #1, appends it to C.instances → [instance1]
2. C() creates instance #2, appends it to C.instances → [instance1, instance2]
3. len(C.instances) → 2

Example:
a = C()
b = C()
C.instances      # [<C instance>, <C instance>]
len(C.instances) # 2
C.instances[0] is a  # True

Common uses:
• Instance registry / tracking
• Object pool management
• Debugging: see all live instances

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
  // 76. Class-level counter
  (_i: number) => ({
    q: `class C:\n    count = 0\n    def __init__(self):\n        C.count += 1\nC()\nC()\nC()\nWhat is C.count?`,
    o: ['3', '0', '1', 'Error'],
    c: 0,
    e: "Each instantiation increments the class variable count. Three calls → C.count is 3.",
    de: `Using a class variable as a counter and incrementing it in __init__ tracks how many instances have been created.

Key concepts:
• C.count = 0 is a class variable (shared state)
• C.count += 1 in __init__ increments the shared counter
• Using C.count (not self.count) ensures the class variable is modified
• self.count += 1 would create an instance variable and shadow the class variable

How it works:
1. C() → C.count becomes 1
2. C() → C.count becomes 2
3. C() → C.count becomes 3
4. C.count → 3

Example:
print(C.count)  # 3
C()
print(C.count)  # 4

Edge case:
If you used self.count += 1 instead of C.count += 1, the first access
reads C.count (0), adds 1, and stores 1 as an INSTANCE variable,
leaving C.count still at 0.

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
  // 77. Proxy pattern using __getattr__
  (_i: number) => ({
    q: `class Proxy:\n    def __init__(self, obj):\n        self._obj = obj\n    def __getattr__(self, name):\n        return getattr(self._obj, name)\np = Proxy([1, 2, 3])\np.append(4)\nWhat is p._obj?`,
    o: ['[1, 2, 3, 4]', '[1, 2, 3]', 'Error', '[4]'],
    c: 0,
    e: "Proxy delegates attribute access to _obj. p.append finds list.append via __getattr__, which modifies the list.",
    de: `The Proxy pattern uses __getattr__ to forward attribute access to a wrapped object. Any attribute not found on the Proxy itself is looked up on the wrapped object.

Key concepts:
• __init__ stores _obj normally (in __dict__)
• __getattr__ is only called for attributes NOT found on Proxy
• p._obj is found normally (in __dict__), so __getattr__ is NOT called for it
• p.append is NOT found on Proxy → __getattr__ called → returns list.append

How it works:
1. p = Proxy([1, 2, 3]) stores the list as p._obj
2. p.append: "append" not in Proxy → __getattr__ called
3. getattr(self._obj, "append") returns the list's append method
4. p.append(4) calls [1, 2, 3].append(4) → list becomes [1, 2, 3, 4]
5. p._obj returns the modified list [1, 2, 3, 4]

Common uses:
• Lazy loading proxies
• Access control wrappers
• Logging / monitoring decorators
• Remote object proxies (RPC)

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
  // 78. Class as attribute of another class
  (_i: number) => ({
    q: `Can a class have another class as an attribute?`,
    o: ['Yes', 'No', 'Only with inheritance', 'Only with __slots__'],
    c: 0,
    e: "Classes are first-class objects in Python and can be stored as attributes of other classes.",
    de: `In Python, everything is an object — including classes themselves. A class can be stored as an attribute of another class, an instance, or any other object.

Key concepts:
• Classes are first-class objects in Python
• They can be assigned to variables, stored in collections, passed as arguments
• A class attribute can hold a reference to another class
• This is different from inheritance — no is-a relationship is created

Example:
class Inner:
    def greet(self):
        return "hello"

class Outer:
    helper = Inner  # class as attribute

obj = Outer.helper()   # creates an Inner instance
obj.greet()            # "hello"

Common uses:
• Factory classes storing product classes
• Strategy pattern: swappable algorithm classes
• Plugin registries: mapping names to handler classes

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
  // 79. Nested class as attribute
  (_i: number) => ({
    q: `class A: pass\nclass B:\n    inner_class = A\nDoes B.inner_class() work?`,
    o: ['Yes, creates an A instance', 'No, raises Error', 'Returns None', 'Returns B instance'],
    c: 0,
    e: "B.inner_class is just a reference to class A, so calling it creates an A instance.",
    de: `Storing a class as an attribute of another class allows you to create instances of the stored class through the container.

Key concepts:
• B.inner_class = A stores a reference to class A
• B.inner_class is A → True
• Calling B.inner_class() is the same as calling A()
• The resulting instance is an A instance, not a B instance

How it works:
1. class A: pass defines class A
2. class B: inner_class = A stores reference to A
3. B.inner_class → returns class A
4. B.inner_class() → calls A() → creates and returns an A instance
5. isinstance(B.inner_class(), A) → True

Example:
result = B.inner_class()
type(result)              # <class 'A'>
isinstance(result, A)     # True
isinstance(result, B)     # False

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
  // 80. **kwargs to instance attributes
  (_i: number) => ({
    q: `class C:\n    def __init__(self, **kw):\n        self.__dict__.update(kw)\nc = C(x=1, y=2)\nWhat is c.x?`,
    o: ['1', 'Error', 'None', '{"x": 1}'],
    c: 0,
    e: "self.__dict__.update(kw) merges all keyword arguments into instance attributes. c.x is 1.",
    de: `Updating self.__dict__ directly with a dictionary is a concise way to turn keyword arguments into instance attributes.

Key concepts:
• **kw collects all keyword arguments as a dictionary
• self.__dict__ is the instance's attribute dictionary
• .update(kw) merges the keyword dict into __dict__
• Each key becomes an attribute name, each value becomes the attribute value

How it works:
1. C(x=1, y=2) passes kw = {"x": 1, "y": 2}
2. self.__dict__.update({"x": 1, "y": 2})
3. Now self.x = 1 and self.y = 2
4. c.x → 1

Example:
c = C(x=1, y=2, name="hello")
c.x      # 1
c.y      # 2
c.name   # "hello"

Common uses:
• Flexible constructors accepting arbitrary attributes
• Configuration objects
• Data transfer objects (DTOs)

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
  // 81. __del__ is called on garbage collection
  (_i: number) => ({
    q: `class C:\n    def __del__(self):\n        print("deleted")\nWhen is __del__ called?`,
    o: ['When the object is garbage collected', 'When del is used', 'At program start', 'When __init__ runs'],
    c: 0,
    e: "__del__ is the finalizer, called when the object is about to be garbage collected.",
    de: `__del__ is Python's finalizer method. It is called when the object's reference count drops to zero and the garbage collector is about to reclaim its memory.

Key concepts:
• __del__ is NOT a destructor in the C++ sense
• Called when the garbage collector decides to reclaim the object
• del obj reduces reference count but doesn't guarantee immediate __del__ call
• The timing of __del__ is non-deterministic

How it works:
1. An object's reference count drops to zero
2. The garbage collector identifies the object for collection
3. __del__ is called on the object
4. The object's memory is reclaimed

Example:
c = C()
del c   # MAY print "deleted" (reference count drops to 0)

# But with multiple references:
c = C()
d = c
del c   # does NOT print "deleted" (d still references the object)
del d   # NOW may print "deleted"

Edge cases:
• Circular references may delay __del__ calls
• __del__ may not run if the interpreter is shutting down

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
  // 82. __del__ is not guaranteed
  (_i: number) => ({
    q: `Is __del__ guaranteed to be called?`,
    o: ['No, it depends on the garbage collector', 'Yes, always called', 'Only in CPython', 'Only with del statement'],
    c: 0,
    e: "__del__ is not guaranteed — circular references, interpreter shutdown, and exceptions can prevent it.",
    de: `Python's garbage collection makes no guarantees about when or if __del__ will be called.

Key concepts:
• CPython uses reference counting + cyclic GC
• Reference counting usually triggers __del__ promptly
• Circular references require the cyclic GC, which has no timing guarantees
• During interpreter shutdown, __del__ may not be called at all
• Exceptions inside __del__ are silently ignored

Scenarios where __del__ may NOT run:
1. Circular references — objects referencing each other
2. Interpreter shutdown — global cleanup is unordered
3. Objects in failed __init__ — partially constructed objects
4. Daemon threads — may not clean up properly

Best practices:
• Use context managers (with statement) for cleanup instead
• Use weakref for breaking circular references
• Don't rely on __del__ for critical resource release
• Prefer explicit .close() methods

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
  // 83. Shallow copy shares nested references
  (_i: number) => ({
    q: `import copy\nclass C:\n    def __init__(self, x):\n        self.x = x\nc = C([1])\nd = copy.copy(c)\nWhat is d.x is c.x?`,
    o: ['True', 'False', 'Error', 'None'],
    c: 0,
    e: "copy.copy() creates a shallow copy — the new object shares references to the same nested objects.",
    de: `copy.copy() performs a shallow copy: it creates a new instance but does NOT recursively copy nested objects. The new instance's attributes reference the same objects as the original.

Key concepts:
• Shallow copy: new container, same contents
• d is not c (different objects), but d.x IS c.x (same list)
• Modifying d.x would also affect c.x (they share the list)
• Only the top-level object is duplicated

How it works:
1. c = C([1]) creates c with c.x = [1]
2. d = copy.copy(c) creates a new C instance
3. d.x is assigned the same reference as c.x (not a new list)
4. d.x is c.x → True (same list object)

Example:
d.x.append(2)
c.x  # [1, 2] — affected because d.x and c.x are the same list!
d is c     # False (different C instances)
d.x is c.x  # True (same list)

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
  // 84. Deep copy creates independent copies
  (_i: number) => ({
    q: `import copy\nclass C:\n    def __init__(self, x):\n        self.x = x\nc = C([1])\nd = copy.deepcopy(c)\nWhat is d.x is c.x?`,
    o: ['False', 'True', 'Error', 'None'],
    c: 0,
    e: "copy.deepcopy() recursively copies all nested objects, so d.x is a different list than c.x.",
    de: `copy.deepcopy() performs a deep copy: it recursively copies the object and all objects it references, creating fully independent copies.

Key concepts:
• Deep copy: new container AND new contents (recursively)
• d.x is a completely independent copy of c.x
• Modifying d.x does NOT affect c.x
• Handles circular references safely (uses a memo dict)

How it works:
1. c = C([1]) creates c with c.x = [1]
2. d = copy.deepcopy(c) creates a new C instance
3. d.x is set to a NEW list [1] (copy of c.x)
4. d.x is c.x → False (different list objects)
5. d.x == c.x → True (equal contents)

Example:
d.x.append(2)
d.x  # [1, 2]
c.x  # [1] — NOT affected (independent copy)
d.x is c.x  # False
d.x == c.x  # False (contents now differ)

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
  // 85. Customizing copy.copy with __copy__
  (_i: number) => ({
    q: `class C:\n    def __init__(self, x):\n        self.x = x\n    def __copy__(self):\n        return C(self.x[:])\nWhat does defining __copy__ do?`,
    o: ['Customizes copy.copy() behavior', 'Prevents copying', 'Enables deep copy', 'Makes the class immutable'],
    c: 0,
    e: "Defining __copy__ lets you control exactly what copy.copy() does for your class.",
    de: `When you define __copy__ on a class, copy.copy() calls your method instead of the default shallow copy logic. This lets you control exactly how copying works.

Key concepts:
• copy.copy(obj) checks for obj.__copy__() first
• If defined, it calls __copy__() and returns the result
• Similarly, copy.deepcopy() checks for __deepcopy__()
• This gives you full control over the copy semantics

How it works:
1. copy.copy(c) detects that C defines __copy__
2. Calls c.__copy__() instead of default shallow copy
3. __copy__ creates a new C with self.x[:] (a list slice copy)
4. Returns a C instance with an independent copy of the list

Example:
c = C([1, 2, 3])
d = copy.copy(c)
d.x is c.x  # False (list was sliced, creating a new list)
d.x == c.x  # True (same contents)

Common uses:
• Converting a shallow copy into something deeper for specific attributes
• Skipping certain attributes during copy
• Custom initialization of the copied object

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
  // 86. __repr__ for string representation
  (_i: number) => ({
    q: `class C:\n    def __init__(self, x):\n        self.x = x\n    def __repr__(self):\n        return f"C({self.x})"\nWhat is repr(C(5))?`,
    o: ['"C(5)"', '"<C object>"', '5', 'Error'],
    c: 0,
    e: "__repr__ returns the custom string representation. repr(C(5)) calls __repr__ which returns \"C(5)\".",
    de: `__repr__ defines the "official" string representation of an object. It should ideally be an expression that could recreate the object.

Key concepts:
• repr(obj) calls obj.__repr__()
• Should return a string that looks like a valid Python expression
• Convention: repr should allow eval(repr(obj)) == obj when possible
• Also used when printing objects in the REPL and in containers

How it works:
1. C(5) creates an instance with self.x = 5
2. repr(C(5)) calls __repr__ on the instance
3. __repr__ returns f"C({self.x})" → "C(5)"

Example:
c = C(5)
repr(c)    # "C(5)"
str(c)     # "C(5)" (__str__ falls back to __repr__ if not defined)
print([c]) # [C(5)] (__repr__ used inside containers)

Common uses:
• Debugging: clear representation of object state
• Logging: meaningful object descriptions
• REPL: shows object details when typed interactively

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
  // 87. __eq__ for value equality
  (_i: number) => ({
    q: `class C:\n    def __init__(self, x):\n        self.x = x\n    def __eq__(self, other):\n        return isinstance(other, C) and self.x == other.x\nWhat is C(1) == C(1)?`,
    o: ['True', 'False', 'Error', 'None'],
    c: 0,
    e: "__eq__ compares .x values. Both have x=1, and isinstance check passes, so True.",
    de: `__eq__ defines custom equality comparison. Without it, == uses identity (same object). With it, you can compare by value.

Key concepts:
• Without __eq__: C(1) == C(1) is False (different objects)
• With __eq__: comparison uses your custom logic
• isinstance check ensures you only compare with same type
• If other is not a C, returns False (not NotImplemented here)

How it works:
1. C(1) == C(1) calls __eq__ on the left operand
2. isinstance(other, C) → True (both are C instances)
3. self.x == other.x → 1 == 1 → True
4. Returns True

Example:
C(1) == C(1)    # True (same value)
C(1) == C(2)    # False (different values)
C(1) == "hello" # False (isinstance fails)

Edge case:
Defining __eq__ makes the class unhashable by default (sets __hash__ to None).
You must define __hash__ explicitly if you want instances in sets or as dict keys.

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
  // 88. __eq__ with non-matching type
  (_i: number) => ({
    q: `class C:\n    def __init__(self, x):\n        self.x = x\n    def __eq__(self, other):\n        return isinstance(other, C) and self.x == other.x\nWhat is C(1) == 1?`,
    o: ['False', 'True', 'Error', 'None'],
    c: 0,
    e: "isinstance(1, C) is False, so __eq__ short-circuits and returns False.",
    de: `The isinstance check in __eq__ prevents comparison with incompatible types. When other is not a C instance, the method returns False immediately.

Key concepts:
• isinstance(1, C) → False (int is not C)
• The and short-circuits: False and ... → False
• This is a common defensive pattern in __eq__
• An alternative is to return NotImplemented for unknown types

How it works:
1. C(1) == 1 calls C.__eq__(C(1), 1)
2. isinstance(1, C) → False
3. False and self.x == other.x → False (short-circuit)
4. Returns False

Best practice:
def __eq__(self, other):
    if not isinstance(other, C):
        return NotImplemented  # lets Python try other.__eq__
    return self.x == other.x

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
  // 89. __hash__ without __eq__ — identity-based equality
  (_i: number) => ({
    q: `class C:\n    def __init__(self, x):\n        self.x = x\n    def __hash__(self):\n        return hash(self.x)\nWhat is len({C(1), C(1)})?`,
    o: ['2', '1', 'Error', '0'],
    c: 0,
    e: "Without __eq__, default identity comparison is used. Two C(1) objects are different objects, so both stay in the set.",
    de: `Hash equality is necessary but not sufficient for set membership. Two objects with the same hash still need to be equal (via __eq__) to be considered duplicates.

Key concepts:
• Sets use hash to find the bucket, then __eq__ to check for duplicates
• Same hash does NOT mean same object
• Without custom __eq__, Python uses identity (is) for equality
• Two C(1) calls create two different objects → not equal by identity

How it works:
1. C(1) creates object A, hash = hash(1) = 1
2. C(1) creates object B, hash = hash(1) = 1
3. Set inserts A in bucket for hash 1
4. Set tries to insert B: same hash bucket, checks A == B
5. Default __eq__ uses identity: A is B → False
6. Both A and B remain in the set → len = 2

Example:
a = C(1)
b = C(1)
hash(a) == hash(b)  # True (same hash)
a == b              # False (identity check, different objects)
len({a, b})         # 2

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
  // 90. __eq__ + __hash__ enables proper set deduplication
  (_i: number) => ({
    q: `class C:\n    def __init__(self, x):\n        self.x = x\n    def __eq__(self, other):\n        return self.x == other.x\n    def __hash__(self):\n        return hash(self.x)\nWhat is len({C(1), C(1)})?`,
    o: ['1', '2', 'Error', '0'],
    c: 0,
    e: "With both __eq__ and __hash__, C(1) == C(1) is True and hashes match, so the set deduplicates to 1.",
    de: `When both __eq__ and __hash__ are defined consistently, sets can properly deduplicate objects based on value equality.

Key concepts:
• __hash__ determines the bucket (same hash → same bucket)
• __eq__ determines if two objects in the same bucket are duplicates
• Both must be consistent: a == b implies hash(a) == hash(b)
• With both defined, value-equal objects are treated as duplicates

How it works:
1. C(1) creates object A: hash = hash(1), value = 1
2. C(1) creates object B: hash = hash(1), value = 1
3. Set inserts A in bucket for hash 1
4. Set tries to insert B: same hash, checks A.__eq__(B)
5. self.x == other.x → 1 == 1 → True → B is a duplicate
6. Only A remains → len = 1

Example:
s = {C(1), C(2), C(1), C(3), C(2)}
len(s)  # 3 (deduplicated to C(1), C(2), C(3))

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
  // 91. Identity check — different objects
  (_i: number) => ({
    q: `class C:\n    def __init__(self, x):\n        self.x = x\nc = C(5)\nc2 = C(5)\nWhat is c is c2?`,
    o: ['False', 'True', 'Error', 'None'],
    c: 0,
    e: "c and c2 are two separate C(5) calls, creating different objects. 'is' checks identity, not equality.",
    de: `The 'is' operator checks object identity — whether two names point to the exact same object in memory.

Key concepts:
• is checks identity (same memory address / same id())
• == checks equality (same value, via __eq__)
• Each call to C(5) creates a NEW object with a different id
• c is c2 → False because they are different objects

How it works:
1. c = C(5) creates object at address X
2. c2 = C(5) creates a DIFFERENT object at address Y
3. c is c2 checks: id(c) == id(c2) → X != Y → False
4. c == c2 would depend on __eq__ (default: also False, same as is)

Example:
c = C(5)
c2 = C(5)
c is c2    # False
id(c)      # e.g., 140234567890
id(c2)     # e.g., 140234567920 (different!)

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
  // 92. Identity check — same object via assignment
  (_i: number) => ({
    q: `class C:\n    def __init__(self, x):\n        self.x = x\nc = C(5)\nc2 = c\nWhat is c is c2?`,
    o: ['True', 'False', 'Error', 'None'],
    c: 0,
    e: "c2 = c makes c2 reference the same object as c. They have the same identity.",
    de: `Assignment in Python does not copy — it creates another reference (alias) to the same object.

Key concepts:
• c2 = c does NOT create a new object
• c2 now points to the same object as c
• id(c) == id(c2) → True
• Modifying c.x also changes c2.x (same object)

How it works:
1. c = C(5) creates one object
2. c2 = c makes c2 point to that same object
3. c is c2 → True (same identity)
4. id(c) == id(c2) → True

Example:
c = C(5)
c2 = c
c is c2     # True
c.x = 10
c2.x        # 10 (same object, same attribute)
id(c) == id(c2)  # True

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
  // 93. Class variable identity — shared string
  (_i: number) => ({
    q: `class C:\n    class_var = "shared"\nc1 = C()\nc2 = C()\nWhat is c1.class_var is c2.class_var?`,
    o: ['True', 'False', 'Error', 'None'],
    c: 0,
    e: "class_var is a class variable — both instances reference the same string object.",
    de: `Class variables are shared by all instances. When accessed through instances, they all reference the same object.

Key concepts:
• class_var = "shared" is a class variable (defined in class body)
• All instances share this single string object
• c1.class_var and c2.class_var point to the same object
• String interning may also apply, but the key point is class-level sharing

How it works:
1. C.class_var = "shared" creates one string object
2. c1 = C() and c2 = C() create two instances
3. c1.class_var looks up "class_var" — not in instance dict, found in class
4. c2.class_var does the same — finds the same class variable
5. c1.class_var is c2.class_var → True (same object)

Example:
c1.class_var is c2.class_var  # True
c1.class_var is C.class_var   # True
id(c1.class_var) == id(c2.class_var)  # True

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
  // 94. Instance variable identity — separate lists
  (_i: number) => ({
    q: `class C:\n    def __init__(self):\n        self.data = []\nc1 = C()\nc2 = C()\nWhat is c1.data is c2.data?`,
    o: ['False', 'True', 'Error', 'None'],
    c: 0,
    e: "Each __init__ call creates a new list. c1.data and c2.data are different list objects.",
    de: `When mutable objects are created in __init__, each instance gets its own independent object.

Key concepts:
• self.data = [] in __init__ creates a NEW list each time
• c1.data and c2.data are different list objects
• Modifying c1.data does NOT affect c2.data
• This is the correct pattern (vs. the class variable bug)

How it works:
1. c1 = C() runs __init__, creates self.data = [] (list A)
2. c2 = C() runs __init__, creates self.data = [] (list B)
3. c1.data is c2.data → False (A and B are different objects)
4. c1.data == c2.data → True (both are empty lists, equal content)

Example:
c1.data.append(1)
c1.data  # [1]
c2.data  # [] — not affected
c1.data is c2.data  # False

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
  // 95. __sizeof__ affects sys.getsizeof
  (_i: number) => ({
    q: `class C:\n    def __sizeof__(self):\n        return 0\nimport sys\nDoes sys.getsizeof(C()) use __sizeof__?`,
    o: ['Yes', 'No', 'Only for built-in types', 'Only with __slots__'],
    c: 0,
    e: "sys.getsizeof() calls the object's __sizeof__() method to determine its size.",
    de: `sys.getsizeof() works by calling the object's __sizeof__() method and adding the garbage collector overhead.

Key concepts:
• sys.getsizeof(obj) calls obj.__sizeof__() internally
• Then adds gc overhead (typically 16 bytes for GC header)
• Overriding __sizeof__ changes what getsizeof reports
• The return value should represent bytes of memory used

How it works:
1. sys.getsizeof(C()) calls C().__sizeof__()
2. Custom __sizeof__ returns 0
3. sys.getsizeof adds GC overhead (e.g., 16)
4. Result is approximately 16 (not the true memory usage)

Example:
import sys
c = C()
c.__sizeof__()      # 0 (custom)
sys.getsizeof(c)    # 16 (0 + GC overhead)

# Default behavior without override:
class Normal: pass
sys.getsizeof(Normal())  # typically ~48 bytes

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
  // 96. __init_subclass__ hook
  (_i: number) => ({
    q: `class C:\n    def __init_subclass__(cls, **kw):\n        print(f"Subclass {cls.__name__}")\nclass D(C): pass\nWhat is printed?`,
    o: ['"Subclass D"', '"Subclass C"', 'Nothing', 'Error'],
    c: 0,
    e: "__init_subclass__ is called when D is defined as a subclass of C, printing \"Subclass D\".",
    de: `__init_subclass__ is a hook method called on the parent class whenever a new subclass is created. It was introduced in Python 3.6.

Key concepts:
• Defined on the parent class, called when a child class is created
• cls parameter is the NEW subclass (not the parent)
• Called at class definition time, not at instantiation
• Can accept keyword arguments from the class statement

How it works:
1. class C defines __init_subclass__
2. class D(C): pass triggers C.__init_subclass__ with cls=D
3. Prints f"Subclass {D.__name__}" → "Subclass D"
4. This happens at class definition, before any D instances are created

Example:
class Base:
    def __init_subclass__(cls, **kwargs):
        print(f"New subclass: {cls.__name__}")

class Child(Base): pass    # prints "New subclass: Child"
class Other(Base): pass    # prints "New subclass: Other"

Common uses:
• Automatic subclass registration
• Validation of subclass structure
• Plugin discovery systems

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
  // 97. Purpose of __init_subclass__
  (_i: number) => ({
    q: `What is __init_subclass__ used for?`,
    o: ['Hook called when a class is subclassed', 'Initialize instance attributes', 'Delete a subclass', 'Create class methods'],
    c: 0,
    e: "__init_subclass__ is a hook that runs automatically when a class gains a new subclass.",
    de: `__init_subclass__ provides a clean way to customize class creation for subclasses without needing a metaclass.

Key concepts:
• Called automatically when a subclass is defined
• Simpler alternative to metaclasses for many use cases
• Receives the new subclass as cls parameter
• Can accept keyword arguments from the class statement

Example with keyword arguments:
class Validator:
    def __init_subclass__(cls, required_attr=None, **kwargs):
        super().__init_subclass__(**kwargs)
        if required_attr and not hasattr(cls, required_attr):
            raise TypeError(f"{cls.__name__} must define {required_attr}")

class Good(Validator, required_attr="validate"):
    def validate(self): pass  # OK

class Bad(Validator, required_attr="validate"):
    pass  # TypeError!

Common uses:
• Automatic registration of plugins/handlers
• Enforcing interface contracts on subclasses
• Class-level configuration via keyword arguments
• Replacing simple metaclass use cases

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
  // 98. Dynamic attribute assignment
  (_i: number) => ({
    q: `class C: pass\nc = C()\nc.dynamic_attr = "hello"\nWhat is c.dynamic_attr?`,
    o: ['"hello"', 'AttributeError', 'None', 'Error'],
    c: 0,
    e: "Python allows adding attributes to instances dynamically. c.dynamic_attr is set to \"hello\".",
    de: `By default, Python objects can have arbitrary attributes added at any time. This is because instances have a __dict__ that can store any key-value pair.

Key concepts:
• Python does not require attributes to be declared in advance
• Any attribute can be added to an instance after creation
• The attribute is stored in the instance's __dict__
• This dynamic nature is a core feature of Python

How it works:
1. class C: pass defines a class with no predefined attributes
2. c = C() creates an instance with an empty __dict__
3. c.dynamic_attr = "hello" adds {"dynamic_attr": "hello"} to __dict__
4. c.dynamic_attr retrieves "hello"

Example:
c = C()
c.x = 1
c.name = "test"
c.items = [1, 2, 3]
c.__dict__  # {"x": 1, "name": "test", "items": [1, 2, 3]}

Note:
This can be restricted with __slots__, which prevents dynamic attribute creation.

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
  // 99. Creating a class with type()
  (_i: number) => ({
    q: `What is type("MyClass", (), {"x": 1}).x?`,
    o: ['1', '"MyClass"', 'Error', 'None'],
    c: 0,
    e: 'type() with three arguments creates a new class. {"x": 1} sets class attribute x to 1.',
    de: `type() can be used as a class factory when called with three arguments: name, bases, and namespace dictionary.

Key concepts:
• type(name, bases, dict) creates a new class dynamically
• name: string for the class name
• bases: tuple of base classes (empty tuple = inherits from object)
• dict: dictionary of class attributes and methods
• Equivalent to using the class statement

How it works:
1. type("MyClass", (), {"x": 1}) creates a class named MyClass
2. () means no explicit base classes (inherits from object)
3. {"x": 1} sets class attribute x = 1
4. .x accesses the class attribute → 1

Equivalent class statement:
class MyClass:
    x = 1

Example:
MyClass = type("MyClass", (), {"x": 1})
MyClass.x       # 1
obj = MyClass()
obj.x           # 1
type(obj)       # <class '__main__.MyClass'>

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
  // 100. Creating class with methods using type()
  (_i: number) => ({
    q: `What is type("MyClass", (), {"greet": lambda self: "hi"})().greet()?`,
    o: ['"hi"', 'Error', 'None', '"MyClass"'],
    c: 0,
    e: 'type() creates a class with a greet method. Instantiating and calling .greet() returns "hi".',
    de: `Methods can be added to dynamically-created classes by including functions in the namespace dictionary. Lambda functions work as methods when they accept self.

Key concepts:
• Functions in the class dict become methods
• Lambda with self parameter works as an instance method
• The class is fully functional — supports instantiation, method calls, etc.
• Equivalent to defining the method in a class body

How it works:
1. type("MyClass", (), {"greet": lambda self: "hi"}) creates a class
2. "greet" key maps to a lambda that accepts self and returns "hi"
3. () at the end instantiates the class: MyClass()
4. .greet() calls the method on the instance → "hi"

Equivalent:
class MyClass:
    def greet(self):
        return "hi"
MyClass().greet()  # "hi"

Example:
Cls = type("Cls", (), {
    "x": 10,
    "get_x": lambda self: self.x,
    "set_x": lambda self, v: setattr(self, "x", v)
})
obj = Cls()
obj.get_x()    # 10
obj.set_x(20)
obj.get_x()    # 20

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
