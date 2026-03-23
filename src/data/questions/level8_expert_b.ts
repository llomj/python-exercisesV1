// --- LEVEL 8 EXPERT B: Descriptors, ABCs, Metaclass Basics & Type Hints (50 Questions) ---
// Questions 51-100 of expert set. Each is TRULY UNIQUE.
export const level8ExpertB = [
  // 51. What is a descriptor?
  (_i: number) => ({
    q: `What is a descriptor in Python?`,
    o: ["An object defining __get__, __set__, or __delete__", "A decorator for classes", "A type of generator", "A built-in function"],
    c: 0,
    e: "A descriptor is any object that defines __get__, __set__, or __delete__.",
    de: `A descriptor is an object attribute with binding behavior — one whose attribute access has been overridden by methods in the descriptor protocol.

Key concepts:
• A descriptor defines one or more of: __get__, __set__, __delete__
• Descriptors are how Python implements properties, methods, static methods, class methods
• They provide a way to customize attribute access on classes
• Descriptors must be defined as class attributes, not instance attributes

How it works:
• When you access obj.attr, Python checks if the class attribute is a descriptor
• If it has __get__, Python calls descriptor.__get__(obj, type(obj))
• This allows custom logic every time an attribute is accessed

Example:
class Desc:
    def __get__(self, obj, objtype=None):
        return 42

class C:
    x = Desc()

C().x  # 42 — __get__ is called

Common uses:
• @property is a data descriptor
• Functions are non-data descriptors (they bind self via __get__)
• ORMs use descriptors for field validation
• Lazy attribute computation

Key Concepts:
• Key concepts: • A descriptor defines one or more of: __get__, __set__, __delete__ • Descriptors are how Python implements properties, methods, static methods, class methods • They provide a way to customize attribute access on classes • Descriptors must be defined as class attributes, not instance attributes How it works: • When you access obj.attr, Python checks if the class attribute is a descriptor • If it has __get__, Python calls descriptor.__get__(obj, type(obj)) • This allows custom logic every time an attribute is accessed Example: class Desc: def __get__(self, obj, objtype=None): return 42 class C: x = Desc() C().x # 42 — __get__ is called Common uses: • @property is a data descriptor • Functions are non-data descriptors (they bind self via __get__) • ORMs use descriptors for field validation • Lazy attribute computation

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
  // 52. The descriptor protocol
  (_i: number) => ({
    q: `Which methods make up the descriptor protocol?`,
    o: ["__get__, __set__, __delete__", "__init__, __new__, __del__", "__enter__, __exit__", "__iter__, __next__"],
    c: 0,
    e: "The descriptor protocol consists of __get__(self, obj, objtype), __set__(self, obj, value), and __delete__(self, obj).",
    de: `The descriptor protocol defines three optional methods that control attribute access.

Key concepts:
• __get__(self, obj, objtype=None) — called to get the attribute value
• __set__(self, obj, value) — called to set the attribute value
• __delete__(self, obj) — called to delete the attribute
• A descriptor only needs to define at least one of these methods

How it works:
• obj is the instance the descriptor is accessed through (or None if accessed via class)
• objtype is the class that owns the descriptor
• self is the descriptor instance itself

Example:
class Verbose:
    def __get__(self, obj, objtype=None):
        print("Getting")
        return 42
    def __set__(self, obj, value):
        print(f"Setting to {value}")
    def __delete__(self, obj):
        print("Deleting")

Common uses:
• Data validation on set
• Computed attributes on get
• Logging attribute access
• Implementing property-like behavior

Key Concepts:
• Key concepts: • __get__(self, obj, objtype=None) — called to get the attribute value • __set__(self, obj, value) — called to set the attribute value • __delete__(self, obj) — called to delete the attribute • A descriptor only needs to define at least one of these methods How it works: • obj is the instance the descriptor is accessed through (or None if accessed via class) • objtype is the class that owns the descriptor • self is the descriptor instance itself Example: class Verbose: def __get__(self, obj, objtype=None): print("Getting") return 42 def __set__(self, obj, value): print(f"Setting to {value}") def __delete__(self, obj): print("Deleting") Common uses: • Data validation on set • Computed attributes on get • Logging attribute access • Implementing property-like behavior

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
  // 53. Data descriptor definition
  (_i: number) => ({
    q: `A data descriptor defines which methods?`,
    o: ["Both __get__ and __set__ (or __delete__)", "Only __get__", "Only __set__", "__init__ and __del__"],
    c: 0,
    e: "A data descriptor defines both __get__ and __set__ (or __delete__).",
    de: `Data descriptors are descriptors that define __set__ and/or __delete__ in addition to __get__.

Key concepts:
• A data descriptor defines __set__ or __delete__ (usually along with __get__)
• Data descriptors take priority over instance __dict__
• @property creates a data descriptor (it defines __get__, __set__, __delete__)
• The key distinction is having __set__ or __delete__

How it works:
• When Python looks up obj.attr, it checks the class for data descriptors FIRST
• If found, the descriptor's __get__ is called, even if obj.__dict__ has 'attr'
• This means data descriptors cannot be overridden by instance attributes

Example:
class DataDesc:
    def __get__(self, obj, objtype=None):
        return obj._val
    def __set__(self, obj, value):
        obj._val = value

class C:
    x = DataDesc()

c = C()
c.x = 10      # calls DataDesc.__set__
c.__dict__     # {'_val': 10} — x is not in instance dict

Common uses:
• Validated attributes
• Type-checked fields
• Computed properties with setters

Key Concepts:
• Key concepts: • A data descriptor defines __set__ or __delete__ (usually along with __get__) • Data descriptors take priority over instance __dict__ • @property creates a data descriptor (it defines __get__, __set__, __delete__) • The key distinction is having __set__ or __delete__ How it works: • When Python looks up obj.attr, it checks the class for data descriptors FIRST • If found, the descriptor's __get__ is called, even if obj.__dict__ has 'attr' • This means data descriptors cannot be overridden by instance attributes Example: class DataDesc: def __get__(self, obj, objtype=None): return obj._val def __set__(self, obj, value): obj._val = value class C: x = DataDesc() c = C() c.x = 10 # calls DataDesc.__set__ c.__dict__ # {'_val': 10} — x is not in instance dict Common uses: • Validated attributes • Type-checked fields • Computed properties with setters

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
  // 54. Non-data descriptor definition
  (_i: number) => ({
    q: `A non-data descriptor defines which method(s)?`,
    o: ["Only __get__ (no __set__)", "Both __get__ and __set__", "Only __delete__", "__init__ only"],
    c: 0,
    e: "A non-data descriptor defines only __get__ without __set__.",
    de: `Non-data descriptors define only __get__ — they do not have __set__ or __delete__.

Key concepts:
• Non-data descriptors only implement __get__
• Instance __dict__ takes priority over non-data descriptors
• Functions are non-data descriptors — they implement __get__ to become bound methods
• @staticmethod and @classmethod are non-data descriptors

How it works:
• When Python looks up obj.attr, it checks obj.__dict__ FIRST
• Only if attr is not in obj.__dict__ does it fall through to the non-data descriptor
• This means you can shadow a non-data descriptor by setting an instance attribute

Example:
class NonDataDesc:
    def __get__(self, obj, objtype=None):
        return "from descriptor"

class C:
    x = NonDataDesc()

c = C()
c.x              # "from descriptor"
c.__dict__['x'] = "from instance"
c.x              # "from instance" — instance dict wins

Common uses:
• Functions (bound method creation)
• @staticmethod, @classmethod
• Cached/lazy attributes

Key Concepts:
• Key concepts: • Non-data descriptors only implement __get__ • Instance __dict__ takes priority over non-data descriptors • Functions are non-data descriptors — they implement __get__ to become bound methods • @staticmethod and @classmethod are non-data descriptors How it works: • When Python looks up obj.attr, it checks obj.__dict__ FIRST • Only if attr is not in obj.__dict__ does it fall through to the non-data descriptor • This means you can shadow a non-data descriptor by setting an instance attribute Example: class NonDataDesc: def __get__(self, obj, objtype=None): return "from descriptor" class C: x = NonDataDesc() c = C() c.x # "from descriptor" c.__dict__['x'] = "from instance" c.x # "from instance" — instance dict wins Common uses: • Functions (bound method creation) • @staticmethod, @classmethod • Cached/lazy attributes

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
  // 55. Data descriptor priority
  (_i: number) => ({
    q: `Data descriptors have priority over what?`,
    o: ["Instance __dict__", "Class __dict__", "Module globals", "Built-in types"],
    c: 0,
    e: "Data descriptors are checked before the instance __dict__.",
    de: `Data descriptors take priority over instance __dict__ entries in Python's attribute lookup chain.

Key concepts:
• Python's attribute lookup order: data descriptors → instance __dict__ → non-data descriptors → class __dict__
• Data descriptors (with __set__ or __delete__) are checked FIRST
• Even if obj.__dict__ contains the same key, the data descriptor wins
• This is why @property can intercept attribute access

How it works:
• obj.attr triggers type.__getattribute__(obj, 'attr')
• Step 1: Check type(obj).__mro__ for data descriptors → if found, call __get__
• Step 2: Check obj.__dict__ → if found, return value
• Step 3: Check type(obj).__mro__ for non-data descriptors → if found, call __get__

Example:
class Prop:
    def __get__(self, obj, cls): return "descriptor"
    def __set__(self, obj, val): pass  # makes it a data descriptor

class C:
    x = Prop()

c = C()
c.__dict__['x'] = "instance"
c.x  # "descriptor" — data descriptor wins over instance dict

Common uses:
• @property always intercepts access
• Enforcing validation — can't be bypassed by setting instance attr

Key Concepts:
• Key concepts: • Python's attribute lookup order: data descriptors → instance __dict__ → non-data descriptors → class __dict__ • Data descriptors (with __set__ or __delete__) are checked FIRST • Even if obj.__dict__ contains the same key, the data descriptor wins • This is why @property can intercept attribute access How it works: • obj.attr triggers type.__getattribute__(obj, 'attr') • Step 1: Check type(obj).__mro__ for data descriptors → if found, call __get__ • Step 2: Check obj.__dict__ → if found, return value • Step 3: Check type(obj).__mro__ for non-data descriptors → if found, call __get__ Example: class Prop: def __get__(self, obj, cls): return "descriptor" def __set__(self, obj, val): pass # makes it a data descriptor class C: x = Prop() c = C() c.__dict__['x'] = "instance" c.x # "descriptor" — data descriptor wins over instance dict Common uses: • @property always intercepts access • Enforcing validation — can't be bypassed by setting instance attr

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
  // 56. Non-data descriptor priority
  (_i: number) => ({
    q: `Non-data descriptors have priority that is:`,
    o: ["Lower than instance __dict__", "Higher than instance __dict__", "Equal to instance __dict__", "Higher than data descriptors"],
    c: 0,
    e: "Non-data descriptors have lower priority than instance __dict__.",
    de: `Non-data descriptors are only consulted when the attribute is not found in the instance __dict__.

Key concepts:
• Instance __dict__ is checked BEFORE non-data descriptors
• You can override a non-data descriptor by adding an entry to instance __dict__
• This is why you can cache a method result by assigning to self.method_name
• Functions (methods) are non-data descriptors — you can shadow them per-instance

How it works:
• For obj.attr lookup:
• Step 1: Check for data descriptors in class — not found
• Step 2: Check obj.__dict__ — if found, return it (non-data descriptor skipped)
• Step 3: Check for non-data descriptors in class — only reached if not in instance dict

Example:
class NonData:
    def __get__(self, obj, cls): return "descriptor"

class C:
    x = NonData()

c = C()
c.x                          # "descriptor"
c.__dict__['x'] = "cached"
c.x                          # "cached" — instance dict wins

Common uses:
• Per-instance method overrides
• Cached attribute pattern (lazy evaluation)
• Shadowing class-level defaults

Key Concepts:
• Key concepts: • Instance __dict__ is checked BEFORE non-data descriptors • You can override a non-data descriptor by adding an entry to instance __dict__ • This is why you can cache a method result by assigning to self.method_name • Functions (methods) are non-data descriptors — you can shadow them per-instance How it works: • For obj.attr lookup: • Step 1: Check for data descriptors in class — not found • Step 2: Check obj.__dict__ — if found, return it (non-data descriptor skipped) • Step 3: Check for non-data descriptors in class — only reached if not in instance dict Example: class NonData: def __get__(self, obj, cls): return "descriptor" class C: x = NonData() c = C() c.x # "descriptor" c.__dict__['x'] = "cached" c.x # "cached" — instance dict wins Common uses: • Per-instance method overrides • Cached attribute pattern (lazy evaluation) • Shadowing class-level defaults

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
  // 57. @property is a data descriptor
  (_i: number) => ({
    q: `@property is implemented as what kind of descriptor?`,
    o: ["Data descriptor", "Non-data descriptor", "Meta descriptor", "Class descriptor"],
    c: 0,
    e: "@property is a data descriptor because it defines __get__, __set__, and __delete__.",
    de: `@property creates a data descriptor with __get__, __set__, and __delete__ methods.

Key concepts:
• property objects define all three descriptor methods
• Even without a setter, property defines __set__ (which raises AttributeError)
• This ensures property always intercepts attribute access — it cannot be bypassed
• Because it's a data descriptor, it has priority over instance __dict__

How it works:
• @property creates a property object with fget set to the decorated function
• .setter adds fset, .deleter adds fdel
• Even read-only properties define __set__ (raises AttributeError if called)
• This data descriptor status prevents accidental instance dict shadowing

Example:
class C:
    @property
    def x(self):
        return 42

c = C()
c.x                    # 42 — calls __get__
c.__dict__['x'] = 99
c.x                    # 42 — data descriptor still wins!

Common uses:
• Computed attributes: @property def area(self): return self.w * self.h
• Validation on set: @x.setter with type checking
• Read-only attributes: property without setter

Key Concepts:
• Common uses: • Computed attributes: @property def area(self): return self.w * self.h • Validation on set: @x.setter with type checking • Read-only attributes: property without setter

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
  // 58. @staticmethod is a non-data descriptor
  (_i: number) => ({
    q: `@staticmethod is implemented as what kind of descriptor?`,
    o: ["Non-data descriptor", "Data descriptor", "Class decorator", "Function wrapper"],
    c: 0,
    e: "@staticmethod is a non-data descriptor — it only defines __get__.",
    de: `@staticmethod creates a non-data descriptor that returns the original function unchanged.

Key concepts:
• staticmethod objects only implement __get__
• __get__ returns the wrapped function without binding it to anything
• No self or cls parameter is passed automatically
• Because it's non-data, it can be shadowed by instance attributes

How it works:
• @staticmethod wraps the function in a staticmethod descriptor
• When accessed, __get__ returns the original function as-is
• No implicit first argument (self/cls) is prepended
• The function behaves like a regular function that lives in the class namespace

Example:
class Math:
    @staticmethod
    def add(a, b):
        return a + b

Math.add(2, 3)     # 5
Math().add(2, 3)   # 5 — same function, no self passed

Common uses:
• Utility functions that belong logically to a class
• Functions that don't need access to instance or class state
• Alternative constructors that don't need cls

Key Concepts:
• Key concepts: • staticmethod objects only implement __get__ • __get__ returns the wrapped function without binding it to anything • No self or cls parameter is passed automatically • Because it's non-data, it can be shadowed by instance attributes How it works: • @staticmethod wraps the function in a staticmethod descriptor • When accessed, __get__ returns the original function as-is • No implicit first argument (self/cls) is prepended • The function behaves like a regular function that lives in the class namespace Example: class Math: @staticmethod def add(a, b): return a + b Math.add(2, 3) # 5 Math().add(2, 3) # 5 — same function, no self passed Common uses: • Utility functions that belong logically to a class • Functions that don't need access to instance or class state • Alternative constructors that don't need cls

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
  // 59. @classmethod is a non-data descriptor
  (_i: number) => ({
    q: `@classmethod is implemented as what kind of descriptor?`,
    o: ["Non-data descriptor", "Data descriptor", "Metaclass method", "Instance method"],
    c: 0,
    e: "@classmethod is a non-data descriptor — it only defines __get__.",
    de: `@classmethod creates a non-data descriptor that binds the first argument to the class.

Key concepts:
• classmethod objects only implement __get__
• __get__ creates a bound method where the first argument is the class (cls)
• Works correctly with inheritance — cls is the actual class, not necessarily the defining class
• Because it's non-data, it can be shadowed by instance attributes

How it works:
• @classmethod wraps the function in a classmethod descriptor
• When accessed via instance or class, __get__ binds cls to the owner class
• cls receives the actual class (important for inheritance)

Example:
class Base:
    @classmethod
    def create(cls):
        return cls()

class Sub(Base):
    pass

Sub.create()   # creates a Sub instance (cls=Sub)
Base.create()  # creates a Base instance (cls=Base)

Common uses:
• Alternative constructors: Date.from_string("2024-01-01")
• Factory methods that respect inheritance
• Accessing class-level data without hardcoding the class name

Key Concepts:
• Key concepts: • classmethod objects only implement __get__ • __get__ creates a bound method where the first argument is the class (cls) • Works correctly with inheritance — cls is the actual class, not necessarily the defining class • Because it's non-data, it can be shadowed by instance attributes How it works: • @classmethod wraps the function in a classmethod descriptor • When accessed via instance or class, __get__ binds cls to the owner class • cls receives the actual class (important for inheritance) Example: class Base: @classmethod def create(cls): return cls() class Sub(Base): pass Sub.create() # creates a Sub instance (cls=Sub) Base.create() # creates a Base instance (cls=Base) Common uses: • Alternative constructors: Date.from_string("2024-01-01") • Factory methods that respect inheritance • Accessing class-level data without hardcoding the class name

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
  // 60. __get__ returning 42
  (_i: number) => ({
    q: `What is the output?\nclass Desc:\n    def __get__(self, obj, cls):\n        return 42\nclass C:\n    x = Desc()\nprint(C().x)`,
    o: ["42", "None", "Desc object", "Error"],
    c: 0,
    e: "Accessing C().x triggers Desc.__get__ which returns 42.",
    de: `When you access an attribute that is a descriptor, Python calls the descriptor's __get__ method.

Key concepts:
• Desc defines __get__, making it a descriptor
• C.x = Desc() sets a descriptor as a class attribute
• Accessing C().x triggers Desc.__get__(desc_instance, c_instance, C)
• __get__ returns 42, so C().x evaluates to 42

How it works step by step:
• C() creates an instance of C
• Accessing .x on the instance triggers attribute lookup
• Python finds x in C.__dict__ — it's a Desc instance
• Desc has __get__, so Python calls Desc.__get__(desc, c_instance, C)
• __get__ returns 42
• print outputs 42

Example:
class Desc:
    def __get__(self, obj, cls):
        return 42

class C:
    x = Desc()

C().x    # 42
C.x      # 42 (obj=None when accessed via class)

Common uses:
• Computed attributes that return dynamic values
• Lazy loading patterns
• Attribute proxying

Key Concepts:
• Key concepts: • Desc defines __get__, making it a descriptor • C.x = Desc() sets a descriptor as a class attribute • Accessing C().x triggers Desc.__get__(desc_instance, c_instance, C) • __get__ returns 42, so C().x evaluates to 42 How it works step by step: • C() creates an instance of C • Accessing .x on the instance triggers attribute lookup • Python finds x in C.__dict__ — it's a Desc instance • Desc has __get__, so Python calls Desc.__get__(desc, c_instance, C) • __get__ returns 42 • print outputs 42 Example: class Desc: def __get__(self, obj, cls): return 42 class C: x = Desc() C().x # 42 C.x # 42 (obj=None when accessed via class) Common uses: • Computed attributes that return dynamic values • Lazy loading patterns • Attribute proxying

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
  // 61. Data descriptor with __get__ and __set__
  (_i: number) => ({
    q: `What is the output?\nclass Desc:\n    def __get__(self, obj, cls):\n        return obj._x * 2\n    def __set__(self, obj, val):\n        obj._x = val\nclass C:\n    x = Desc()\nc = C()\nc.x = 5\nprint(c.x)`,
    o: ["10", "5", "None", "Error"],
    c: 0,
    e: "__set__ stores 5 in obj._x, then __get__ returns obj._x * 2 = 10.",
    de: `This demonstrates a data descriptor with both __get__ and __set__ methods.

Key concepts:
• __set__ is called when you assign c.x = 5
• __set__ stores the value in obj._x (a private attribute on the instance)
• __get__ is called when you read c.x
• __get__ returns obj._x * 2, which is 5 * 2 = 10

How it works step by step:
• c = C() creates instance
• c.x = 5 triggers Desc.__set__(desc, c, 5) → sets c._x = 5
• c.x triggers Desc.__get__(desc, c, C) → returns c._x * 2 = 10
• print outputs 10

Example:
class Desc:
    def __get__(self, obj, cls):
        return obj._x * 2
    def __set__(self, obj, val):
        obj._x = val

class C:
    x = Desc()

c = C()
c.x = 5     # stores 5 in c._x
c.x          # returns 10 (5 * 2)
c.__dict__   # {'_x': 5}

Common uses:
• Computed properties (transform on get)
• Validation on set with transformation on get
• Unit conversion descriptors

Key Concepts:
• Key concepts: • __set__ is called when you assign c.x = 5 • __set__ stores the value in obj._x (a private attribute on the instance) • __get__ is called when you read c.x • __get__ returns obj._x * 2, which is 5 * 2 = 10 How it works step by step: • c = C() creates instance • c.x = 5 triggers Desc.__set__(desc, c, 5) → sets c._x = 5 • c.x triggers Desc.__get__(desc, c, C) → returns c._x * 2 = 10 • print outputs 10 Example: class Desc: def __get__(self, obj, cls): return obj._x * 2 def __set__(self, obj, val): obj._x = val class C: x = Desc() c = C() c.x = 5 # stores 5 in c._x c.x # returns 10 (5 * 2) c.__dict__ # {'_x': 5} Common uses: • Computed properties (transform on get) • Validation on set with transformation on get • Unit conversion descriptors

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
  // 62. __set_name__ method
  (_i: number) => ({
    q: `What is the purpose of __set_name__ in a descriptor?`,
    o: ["Called when descriptor is assigned to a class attribute", "Sets the instance name", "Renames the class", "Creates a new attribute"],
    c: 0,
    e: "__set_name__(self, owner, name) is called when a descriptor is assigned to a class attribute (Python 3.6+).",
    de: `__set_name__ is a descriptor method that is automatically called when the descriptor is assigned to a class attribute.

Key concepts:
• Added in Python 3.6
• Signature: __set_name__(self, owner, name)
• owner is the class that owns the descriptor
• name is the attribute name the descriptor was assigned to
• Called at class creation time, not at instance creation time

How it works:
• When Python processes a class body, it checks each class attribute
• If an attribute has __set_name__, Python calls it with the class and attribute name
• This allows the descriptor to know its own name without manual configuration

Example:
class Validator:
    def __set_name__(self, owner, name):
        self.name = name
    def __set__(self, obj, value):
        if not isinstance(value, int):
            raise TypeError(f"{self.name} must be int")
        obj.__dict__[self.name] = value
    def __get__(self, obj, cls):
        return obj.__dict__.get(self.name)

class Person:
    age = Validator()   # __set_name__ called: name='age'

p = Person()
p.age = 25   # works
p.age = "x"  # TypeError: age must be int

Common uses:
• Auto-detecting attribute name for storage
• ORM field definitions
• Validation with meaningful error messages

Key Concepts:
• Key concepts: • Added in Python 3.6 • Signature: __set_name__(self, owner, name) • owner is the class that owns the descriptor • name is the attribute name the descriptor was assigned to • Called at class creation time, not at instance creation time How it works: • When Python processes a class body, it checks each class attribute • If an attribute has __set_name__, Python calls it with the class and attribute name • This allows the descriptor to know its own name without manual configuration Example: class Validator: def __set_name__(self, owner, name): self.name = name def __set__(self, obj, value): if not isinstance(value, int): raise TypeError(f"{self.name} must be int") obj.__dict__[self.name] = value def __get__(self, obj, cls): return obj.__dict__.get(self.name) class Person: age = Validator() # __set_name__ called: name='age' p = Person() p.age = 25 # works p.age = "x" # TypeError: age must be int Common uses: • Auto-detecting attribute name for storage • ORM field definitions • Validation with meaningful error messages

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
  // 63. Type-checked descriptor pattern
  (_i: number) => ({
    q: `What pattern does this implement?\nclass TypedField:\n    def __init__(self, typ):\n        self.typ = typ\n    def __set_name__(self, owner, name):\n        self.name = name\n    def __set__(self, obj, val):\n        if not isinstance(val, self.typ):\n            raise TypeError\n        obj.__dict__[self.name] = val`,
    o: ["Type-checked attributes", "Singleton pattern", "Factory pattern", "Observer pattern"],
    c: 0,
    e: "This is a descriptor that validates the type of assigned values — type-checked attributes.",
    de: `This descriptor pattern enforces type checking when setting attribute values.

Key concepts:
• __init__ stores the expected type
• __set_name__ auto-captures the attribute name
• __set__ validates the type before storing the value
• The value is stored in obj.__dict__ to avoid infinite recursion

How it works:
• TypedField("int") creates a descriptor expecting int values
• __set_name__ records the attribute name
• On assignment, __set__ checks isinstance(val, self.typ)
• If type matches, stores in instance __dict__
• If type doesn't match, raises TypeError

Example:
class TypedField:
    def __init__(self, typ):
        self.typ = typ
    def __set_name__(self, owner, name):
        self.name = name
    def __set__(self, obj, val):
        if not isinstance(val, self.typ):
            raise TypeError
        obj.__dict__[self.name] = val

class Config:
    port = TypedField(int)
    host = TypedField(str)

c = Config()
c.port = 8080      # OK
c.host = "local"   # OK
c.port = "abc"     # TypeError!

Common uses:
• Data validation in ORMs
• Configuration objects
• API input validation

Key Concepts:
• Common uses: • Data validation in ORMs • Configuration objects • API input validation

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
  // 64. Functions are descriptors
  (_i: number) => ({
    q: `Functions are descriptors. Their __get__ method is used to:`,
    o: ["Bind self to create bound methods", "Return the function name", "Delete the function", "Create a new class"],
    c: 0,
    e: "Functions implement __get__ which binds self to the instance, creating bound methods.",
    de: `Regular Python functions are non-data descriptors — they implement __get__ to enable bound method creation.

Key concepts:
• Every function object has a __get__ method
• When a function is accessed as a class attribute via an instance, __get__ is called
• __get__ returns a bound method that automatically passes the instance as the first argument (self)
• This is how Python's method binding mechanism works

How it works:
• class C: def f(self): pass — f is a function stored in C.__dict__
• c = C(); c.f — triggers function.__get__(f, c, C)
• This returns a bound method that wraps f with c pre-filled as the first argument
• Calling c.f() actually calls f(c) under the hood

Example:
class C:
    def greet(self):
        return "hello"

c = C()
C.__dict__['greet']       # <function C.greet>
c.greet                   # <bound method C.greet of ...>
c.greet()                 # "hello"

# Manual equivalent:
C.__dict__['greet'].__get__(c, C)()  # "hello"

Common uses:
• Automatic self binding for instance methods
• This is why methods receive self automatically
• Understanding this explains method vs function distinction

Key Concepts:
• Key concepts: • Every function object has a __get__ method • When a function is accessed as a class attribute via an instance, __get__ is called • __get__ returns a bound method that automatically passes the instance as the first argument (self) • This is how Python's method binding mechanism works How it works: • class C: def f(self): pass — f is a function stored in C.__dict__ • c = C(); c.f — triggers function.__get__(f, c, C) • This returns a bound method that wraps f with c pre-filled as the first argument • Calling c.f() actually calls f(c) under the hood Example: class C: def greet(self): return "hello" c = C() C.__dict__['greet'] # <function C.greet> c.greet # <bound method C.greet of ...> c.greet() # "hello" # Manual equivalent: C.__dict__['greet'].__get__(c, C)() # "hello" Common uses: • Automatic self binding for instance methods • This is why methods receive self automatically • Understanding this explains method vs function distinction

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
  // 65. C.__dict__["f"] is a function object
  (_i: number) => ({
    q: `What is C.__dict__["f"] if class C defines def f(self): pass?`,
    o: ["A function object", "A bound method", "A staticmethod", "None"],
    c: 0,
    e: "In the class __dict__, methods are stored as plain function objects (descriptors that create bound methods).",
    de: `Methods stored in a class's __dict__ are plain function objects, not bound methods.

Key concepts:
• class C: def f(self): pass stores f as a function in C.__dict__
• C.__dict__["f"] is a function object
• Accessing via instance (c.f) triggers the descriptor protocol → bound method
• Accessing via class (C.f) returns the function itself (in Python 3)

How it works:
• Python stores the function in the class namespace
• C.__dict__["f"] bypasses the descriptor protocol — you get the raw function
• C.f triggers __get__(None, C) — returns the function (Python 3)
• c.f triggers __get__(c, C) — returns a bound method

Example:
class C:
    def f(self):
        pass

type(C.__dict__["f"])    # <class 'function'>
type(C.f)                # <class 'function'>
type(C().f)              # <class 'method'> — bound method

C.__dict__["f"] is C.f   # True (same object in Python 3)

Common uses:
• Understanding Python's method resolution
• Debugging attribute lookup issues
• Metaclass programming and introspection

Key Concepts:
• Key concepts: • class C: def f(self): pass stores f as a function in C.__dict__ • C.__dict__["f"] is a function object • Accessing via instance (c.f) triggers the descriptor protocol → bound method • Accessing via class (C.f) returns the function itself (in Python 3) How it works: • Python stores the function in the class namespace • C.__dict__["f"] bypasses the descriptor protocol — you get the raw function • C.f triggers __get__(None, C) — returns the function (Python 3) • c.f triggers __get__(c, C) — returns a bound method Example: class C: def f(self): pass type(C.__dict__["f"]) # <class 'function'> type(C.f) # <class 'function'> type(C().f) # <class 'method'> — bound method C.__dict__["f"] is C.f # True (same object in Python 3) Common uses: • Understanding Python's method resolution • Debugging attribute lookup issues • Metaclass programming and introspection

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
  // 66. ABC instantiation error
  (_i: number) => ({
    q: `What happens?\nfrom abc import ABC, abstractmethod\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\nShape()`,
    o: ["TypeError", "None", "Creates Shape instance", "SyntaxError"],
    c: 0,
    e: "Can't instantiate abstract class Shape with abstract method area — raises TypeError.",
    de: `Abstract classes with unimplemented abstract methods cannot be instantiated.

Key concepts:
• ABC is the Abstract Base Class helper from the abc module
• @abstractmethod marks a method that MUST be implemented by subclasses
• Attempting to instantiate an abstract class raises TypeError
• The error message tells you which abstract methods are missing

How it works:
• class Shape(ABC) makes Shape an abstract base class
• @abstractmethod def area marks area as abstract
• Shape() tries to create an instance
• Python checks for unimplemented abstract methods
• Finds area is still abstract → raises TypeError

Example:
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

Shape()  # TypeError: Can't instantiate abstract class Shape
         # with abstract method area

Common uses:
• Defining interfaces in Python
• Enforcing method implementation in subclasses
• Design by contract
• Template method pattern

Key Concepts:
• Key concepts: • ABC is the Abstract Base Class helper from the abc module • @abstractmethod marks a method that MUST be implemented by subclasses • Attempting to instantiate an abstract class raises TypeError • The error message tells you which abstract methods are missing How it works: • class Shape(ABC) makes Shape an abstract base class • @abstractmethod def area marks area as abstract • Shape() tries to create an instance • Python checks for unimplemented abstract methods • Finds area is still abstract → raises TypeError Example: from abc import ABC, abstractmethod class Shape(ABC): @abstractmethod def area(self): pass Shape() # TypeError: Can't instantiate abstract class Shape # with abstract method area Common uses: • Defining interfaces in Python • Enforcing method implementation in subclasses • Design by contract • Template method pattern

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
  // 67. Concrete subclass of ABC
  (_i: number) => ({
    q: `What is the output?\nfrom abc import ABC, abstractmethod\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\nclass Circle(Shape):\n    def area(self):\n        return 3.14\nprint(Circle().area())`,
    o: ["3.14", "TypeError", "None", "Error"],
    c: 0,
    e: "Circle implements area(), so it can be instantiated. Circle().area() returns 3.14.",
    de: `A concrete subclass that implements all abstract methods can be instantiated.

Key concepts:
• Shape defines abstract method area
• Circle inherits from Shape and implements area
• Since all abstract methods are implemented, Circle is concrete
• Circle() creates an instance successfully

How it works step by step:
• class Circle(Shape) inherits from Shape
• def area(self): return 3.14 provides the implementation
• Python checks: are all abstract methods implemented? Yes.
• Circle() creates an instance
• .area() calls Circle's implementation → returns 3.14

Example:
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Circle(Shape):
    def area(self):
        return 3.14

class Square(Shape):
    def area(self):
        return 100

Circle().area()   # 3.14
Square().area()   # 100

Common uses:
• Defining a common interface with guaranteed implementation
• Plugin systems where all plugins must implement certain methods

Key Concepts:
• • Circle() creates an instance • .area() calls Circle's implementation → returns 3.14 Example: from abc import ABC, abstractmethod class Shape(ABC): @abstractmethod def area(self): pass class Circle(Shape): def area(self): return 3.14 class Square(Shape): def area(self): return 100 Circle().area() # 3.14 Square().area() # 100 Common uses: • Defining a common interface with guaranteed implementation • Plugin systems where all plugins must implement certain methods

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
  // 68. What @abstractmethod does
  (_i: number) => ({
    q: `What does @abstractmethod force subclasses to do?`,
    o: ["Implement the decorated method", "Call super().__init__()", "Define __init__", "Use metaclass"],
    c: 0,
    e: "@abstractmethod forces subclasses to implement the method or they can't be instantiated.",
    de: `@abstractmethod is a decorator that marks a method as abstract, requiring all concrete subclasses to provide an implementation.

Key concepts:
• Applied to methods in classes that inherit from ABC
• Any subclass that doesn't implement the abstract method remains abstract
• Only concrete (fully-implemented) classes can be instantiated
• The abstract method body can contain default code (accessible via super())

How it works:
• @abstractmethod sets the function's __isabstractmethod__ attribute to True
• ABCMeta (the metaclass) tracks which methods are abstract
• During instantiation, Python checks cls.__abstractmethods__
• If any remain, TypeError is raised

Example:
from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return "Woof"

class Cat(Animal):
    pass

Dog().speak()  # "Woof" — implemented, works
Cat()          # TypeError — speak not implemented

Common uses:
• Enforcing API contracts
• Template method pattern
• Ensuring subclass completeness

Key Concepts:
• Key concepts: • Applied to methods in classes that inherit from ABC • Any subclass that doesn't implement the abstract method remains abstract • Only concrete (fully-implemented) classes can be instantiated • The abstract method body can contain default code (accessible via super()) How it works: • @abstractmethod sets the function's __isabstractmethod__ attribute to True • ABCMeta (the metaclass) tracks which methods are abstract • During instantiation, Python checks cls.__abstractmethods__ • If any remain, TypeError is raised Example: from abc import ABC, abstractmethod class Animal(ABC): @abstractmethod def speak(self): pass class Dog(Animal): def speak(self): return "Woof" class Cat(Animal): pass Dog().speak() # "Woof" — implemented, works Cat() # TypeError — speak not implemented Common uses: • Enforcing API contracts • Template method pattern • Ensuring subclass completeness

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
  // 69. ABC with concrete methods
  (_i: number) => ({
    q: `Can an abstract class have concrete (non-abstract) methods?`,
    o: ["Yes", "No", "Only static methods", "Only class methods"],
    c: 0,
    e: "Yes — abstract classes can have both abstract and regular concrete methods.",
    de: `Abstract classes can contain a mix of abstract methods and concrete methods.

Key concepts:
• Abstract classes are not required to be fully abstract
• Concrete methods provide shared default behavior
• Subclasses inherit concrete methods without needing to override them
• Only abstract methods must be implemented by subclasses

How it works:
• Methods without @abstractmethod are concrete — they work as-is
• Subclasses inherit concrete methods normally
• Subclasses must only implement methods marked @abstractmethod
• This allows partial implementation in the base class

Example:
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

    def describe(self):
        return f"Area: {self.area()}"

class Circle(Shape):
    def area(self):
        return 3.14

Circle().describe()  # "Area: 3.14" — inherits concrete method

Common uses:
• Template method pattern (concrete method calls abstract methods)
• Shared utility methods in base classes
• Default implementations that can be optionally overridden

Key Concepts:
• Key concepts: • Abstract classes are not required to be fully abstract • Concrete methods provide shared default behavior • Subclasses inherit concrete methods without needing to override them • Only abstract methods must be implemented by subclasses How it works: • Methods without @abstractmethod are concrete — they work as-is • Subclasses inherit concrete methods normally • Subclasses must only implement methods marked @abstractmethod • This allows partial implementation in the base class Example: from abc import ABC, abstractmethod class Shape(ABC): @abstractmethod def area(self): pass def describe(self): return f"Area: {self.area()}" class Circle(Shape): def area(self): return 3.14 Circle().describe() # "Area: 3.14" — inherits concrete method Common uses: • Template method pattern (concrete method calls abstract methods) • Shared utility methods in base classes • Default implementations that can be optionally overridden

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
  // 70. Inheriting concrete method from ABC
  (_i: number) => ({
    q: `What is the output?\nfrom abc import ABC\nclass Shape(ABC):\n    def describe(self):\n        return "I'm a shape"\nclass Circle(Shape):\n    pass\nprint(Circle().describe())`,
    o: ["I'm a shape", "TypeError", "None", "Error"],
    c: 0,
    e: "Shape has no abstract methods, so Circle can be instantiated and inherits describe().",
    de: `An ABC subclass without abstract methods is concrete and can be instantiated normally.

Key concepts:
• Shape inherits from ABC but has no @abstractmethod decorators
• describe() is a regular concrete method
• Circle inherits from Shape with no abstract methods to implement
• Circle can be instantiated and inherits describe()

How it works step by step:
• class Shape(ABC) — abstract base class, but no abstract methods
• def describe(self) — concrete method, no @abstractmethod
• class Circle(Shape): pass — inherits everything
• Circle() — no abstract methods pending → instantiation succeeds
• .describe() — inherited from Shape → returns "I'm a shape"

Example:
from abc import ABC

class Shape(ABC):
    def describe(self):
        return "I'm a shape"

class Circle(Shape):
    pass

Circle().describe()   # "I'm a shape"
Shape()               # Also works! No abstract methods

Common uses:
• Base classes that provide shared behavior
• Marker classes for type checking
• Gradual introduction of abstract methods

Key Concepts:
• No abstract methods Common uses: • Base classes that provide shared behavior • Marker classes for type checking • Gradual introduction of abstract methods

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
  // 71. Abstract properties
  (_i: number) => ({
    q: `Can you create abstract properties in Python?`,
    o: ["Yes: combine @property and @abstractmethod", "No, properties can't be abstract", "Only with metaclasses", "Only in Python 2"],
    c: 0,
    e: "Yes — use @property with @abstractmethod to create abstract properties.",
    de: `Python supports abstract properties by stacking @property and @abstractmethod decorators.

Key concepts:
• Stack @property above @abstractmethod (or vice versa in older Python)
• Subclasses must implement the property to be instantiable
• Works for getters, setters, and deleters
• Enforces that subclasses provide computed attributes

How it works:
• The @abstractmethod decorator must be the innermost decorator
• @property wraps it as a property descriptor
• The resulting property is marked as abstract
• Subclasses must provide their own @property implementation

Example:
from abc import ABC, abstractmethod

class Shape(ABC):
    @property
    @abstractmethod
    def area(self):
        pass

class Circle(Shape):
    def __init__(self, r):
        self._r = r

    @property
    def area(self):
        return 3.14 * self._r ** 2

Circle(5).area     # 78.5
Shape()            # TypeError — abstract property

Common uses:
• Enforcing computed attributes in subclasses
• Interface contracts for properties
• Ensuring all shapes have area, perimeter, etc.

Key Concepts:
• Key concepts: • Stack @property above @abstractmethod (or vice versa in older Python) • Subclasses must implement the property to be instantiable • Works for getters, setters, and deleters • Enforces that subclasses provide computed attributes How it works: • The @abstractmethod decorator must be the innermost decorator • @property wraps it as a property descriptor • The resulting property is marked as abstract • Subclasses must provide their own @property implementation Example: from abc import ABC, abstractmethod class Shape(ABC): @property @abstractmethod def area(self): pass class Circle(Shape): def __init__(self, r): self._r = r @property def area(self): return 3.14 * self._r ** 2 Circle(5).area # 78.5 Shape() # TypeError — abstract property Common uses: • Enforcing computed attributes in subclasses • Interface contracts for properties • Ensuring all shapes have area, perimeter, etc.

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
  // 72. Subclass that doesn't implement abstract method
  (_i: number) => ({
    q: `What happens?\nfrom abc import ABC, abstractmethod\nclass C(ABC):\n    @abstractmethod\n    def f(self):\n        pass\nclass D(C):\n    pass\nD()`,
    o: ["TypeError", "Creates D instance", "None", "SyntaxError"],
    c: 0,
    e: "D doesn't implement f(), so D is still abstract — TypeError on instantiation.",
    de: `If a subclass doesn't implement all abstract methods, it remains abstract and cannot be instantiated.

Key concepts:
• C defines abstract method f
• D inherits from C but does not implement f
• D is still considered abstract
• Attempting D() raises TypeError

How it works:
• class D(C): pass — D inherits f as an abstract method
• D.__abstractmethods__ still contains 'f'
• D() checks for abstract methods → finds f → raises TypeError
• Error message: "Can't instantiate abstract class D with abstract method f"

Example:
from abc import ABC, abstractmethod

class C(ABC):
    @abstractmethod
    def f(self):
        pass

class D(C):
    pass

class E(C):
    def f(self):
        return "implemented"

D()  # TypeError
E()  # Works — f is implemented

Common uses:
• Catching incomplete implementations early
• Multi-level inheritance where intermediate classes remain abstract

Key Concepts:
• Key concepts: • C defines abstract method f • D inherits from C but does not implement f • D is still considered abstract • Attempting D() raises TypeError How it works: • class D(C): pass — D inherits f as an abstract method • D.__abstractmethods__ still contains 'f' • D() checks for abstract methods → finds f → raises TypeError • Error message: "Can't instantiate abstract class D with abstract method f" Example: from abc import ABC, abstractmethod class C(ABC): @abstractmethod def f(self): pass class D(C): pass class E(C): def f(self): return "implemented" D() # TypeError E() # Works — f is implemented Common uses: • Catching incomplete implementations early • Multi-level inheritance where intermediate classes remain abstract

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
  // 73. Subclass that implements abstract method
  (_i: number) => ({
    q: `What is the output?\nfrom abc import ABC, abstractmethod\nclass C(ABC):\n    @abstractmethod\n    def f(self):\n        pass\nclass D(C):\n    def f(self):\n        return 1\nprint(D().f())`,
    o: ["1", "TypeError", "None", "Error"],
    c: 0,
    e: "D implements f() returning 1, so D is concrete and can be instantiated.",
    de: `When a subclass provides implementations for all abstract methods, it becomes concrete.

Key concepts:
• C defines abstract method f
• D inherits C and provides def f(self): return 1
• All abstract methods are now implemented
• D() succeeds and .f() returns 1

How it works step by step:
• class D(C) inherits from abstract class C
• def f(self): return 1 provides the required implementation
• D.__abstractmethods__ is empty → D is concrete
• D() creates an instance
• D().f() calls the implementation → returns 1

Example:
from abc import ABC, abstractmethod

class C(ABC):
    @abstractmethod
    def f(self):
        pass

class D(C):
    def f(self):
        return 1

D().f()  # 1

Common uses:
• Completing abstract interfaces
• Providing specific behavior for abstract contracts

Key Concepts:
• Key concepts: • C defines abstract method f • D inherits C and provides def f(self): return 1 • All abstract methods are now implemented • D() succeeds and .f() returns 1 How it works step by step: • class D(C) inherits from abstract class C • def f(self): return 1 provides the required implementation • D.__abstractmethods__ is empty → D is concrete • D() creates an instance • D().f() calls the implementation → returns 1 Example: from abc import ABC, abstractmethod class C(ABC): @abstractmethod def f(self): pass class D(C): def f(self): return 1 D().f() # 1 Common uses: • Completing abstract interfaces • Providing specific behavior for abstract contracts

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
  // 74. isinstance and issubclass
  (_i: number) => ({
    q: `What are the results of isinstance([], list) and issubclass(list, object)?`,
    o: ["True and True", "True and False", "False and True", "False and False"],
    c: 0,
    e: "[] is an instance of list → True. list is a subclass of object → True.",
    de: `isinstance checks if an object is an instance of a class, issubclass checks class inheritance.

Key concepts:
• isinstance(obj, cls) checks if obj is an instance of cls (or a subclass of cls)
• issubclass(cls, parent) checks if cls is a subclass of parent
• All classes in Python inherit from object
• Both return boolean values

How it works:
• isinstance([], list) → [] is a list → True
• issubclass(list, object) → list inherits from object → True
• In Python, everything inherits from object (the base of all classes)

Example:
isinstance([], list)          # True
isinstance([], object)        # True (list inherits from object)
issubclass(list, object)      # True
issubclass(bool, int)         # True (bool inherits from int)
issubclass(int, str)          # False

Common uses:
• Type checking at runtime
• Polymorphic behavior based on type
• Validating function arguments

Key Concepts:
• Key concepts: • isinstance(obj, cls) checks if obj is an instance of cls (or a subclass of cls) • issubclass(cls, parent) checks if cls is a subclass of parent • All classes in Python inherit from object • Both return boolean values How it works: • isinstance([], list) → [] is a list → True • issubclass(list, object) → list inherits from object → True • In Python, everything inherits from object (the base of all classes) Example: isinstance([], list) # True isinstance([], object) # True (list inherits from object) issubclass(list, object) # True issubclass(bool, int) # True (bool inherits from int) issubclass(int, str) # False Common uses: • Type checking at runtime • Polymorphic behavior based on type • Validating function arguments

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
  // 75. ABC stands for
  (_i: number) => ({
    q: `What does ABC stand for in Python?`,
    o: ["Abstract Base Class", "Advanced Base Code", "Abstract Binary Class", "Automatic Base Constructor"],
    c: 0,
    e: "ABC stands for Abstract Base Class.",
    de: `ABC stands for Abstract Base Class — a class that cannot be instantiated and serves as a blueprint for other classes.

Key concepts:
• ABC is defined in the abc module
• It provides the ABC helper class and @abstractmethod decorator
• ABCs define interfaces that subclasses must implement
• Python's standard library uses ABCs extensively in collections.abc

How it works:
• from abc import ABC, abstractmethod
• Inherit from ABC to create an abstract base class
• Mark methods with @abstractmethod to require implementation
• ABCMeta is the metaclass that powers this behavior

Example:
from abc import ABC, abstractmethod

class Vehicle(ABC):
    @abstractmethod
    def start(self):
        pass

class Car(Vehicle):
    def start(self):
        return "Vroom!"

# Vehicle()  # TypeError
Car().start()  # "Vroom!"

Common uses:
• Defining contracts/interfaces
• collections.abc: Iterable, Iterator, Mapping, Sequence
• Framework plugin interfaces
• Type checking with isinstance

Key Concepts:
• Key concepts: • ABC is defined in the abc module • It provides the ABC helper class and @abstractmethod decorator • ABCs define interfaces that subclasses must implement • Python's standard library uses ABCs extensively in collections.abc How it works: • from abc import ABC, abstractmethod • Inherit from ABC to create an abstract base class • Mark methods with @abstractmethod to require implementation • ABCMeta is the metaclass that powers this behavior Example: from abc import ABC, abstractmethod class Vehicle(ABC): @abstractmethod def start(self): pass class Car(Vehicle): def start(self): return "Vroom!" # Vehicle() # TypeError Car().start() # "Vroom!" Common uses: • Defining contracts/interfaces • collections.abc: Iterable, Iterator, Mapping, Sequence • Framework plugin interfaces • Type checking with isinstance

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
  // 76. collections.abc Iterable
  (_i: number) => ({
    q: `What is the result?\nfrom collections.abc import Iterable\nisinstance([1, 2, 3], Iterable)`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "Lists implement __iter__, so they are instances of Iterable.",
    de: `collections.abc.Iterable is an abstract base class for objects that implement __iter__.

Key concepts:
• Iterable checks for the __iter__ method
• Lists, tuples, dicts, sets, strings are all Iterable
• isinstance with ABCs uses structural checking (duck typing)
• An object is Iterable if it has __iter__ or is registered

How it works:
• from collections.abc import Iterable imports the ABC
• isinstance([1,2,3], Iterable) checks if list has __iter__
• list implements __iter__ → returns True
• This works via __subclasshook__ which checks for __iter__

Example:
from collections.abc import Iterable

isinstance([1, 2, 3], Iterable)   # True
isinstance("hello", Iterable)     # True
isinstance(42, Iterable)          # False
isinstance({}, Iterable)          # True
isinstance(range(5), Iterable)    # True

Common uses:
• Checking if an object can be iterated over
• Type hints: Iterable[int] for any iterable of ints
• Defensive programming before for loops

Key Concepts:
• Key concepts: • Iterable checks for the __iter__ method • Lists, tuples, dicts, sets, strings are all Iterable • isinstance with ABCs uses structural checking (duck typing) • An object is Iterable if it has __iter__ or is registered How it works: • from collections.abc import Iterable imports the ABC • isinstance([1,2,3], Iterable) checks if list has __iter__ • list implements __iter__ → returns True • This works via __subclasshook__ which checks for __iter__ Example: from collections.abc import Iterable isinstance([1, 2, 3], Iterable) # True isinstance("hello", Iterable) # True isinstance(42, Iterable) # False isinstance({}, Iterable) # True isinstance(range(5), Iterable) # True Common uses: • Checking if an object can be iterated over • Type hints: Iterable[int] for any iterable of ints • Defensive programming before for loops

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
  // 77. collections.abc Iterator
  (_i: number) => ({
    q: `What is the result?\nfrom collections.abc import Iterator\nisinstance(iter([1, 2, 3]), Iterator)`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "iter() returns an iterator, which implements both __iter__ and __next__.",
    de: `collections.abc.Iterator is an ABC for objects that implement both __iter__ and __next__.

Key concepts:
• Iterator extends Iterable — it requires both __iter__ and __next__
• iter() on a list returns a list_iterator, which is an Iterator
• Iterators are stateful — they track position
• All iterators are iterables, but not all iterables are iterators

How it works:
• iter([1, 2, 3]) creates a list_iterator object
• list_iterator has __iter__ (returns self) and __next__ (returns next element)
• isinstance checks: does it have both __iter__ and __next__? Yes → True

Example:
from collections.abc import Iterator, Iterable

it = iter([1, 2, 3])
isinstance(it, Iterator)    # True
isinstance(it, Iterable)    # True
isinstance([1,2,3], Iterator)  # False — list has no __next__

Common uses:
• Verifying an object is a full iterator (not just iterable)
• Custom iterator classes
• Generator objects are Iterators

Key Concepts:
• Yes → True Example: from collections.abc import Iterator, Iterable it = iter([1, 2, 3]) isinstance(it, Iterator) # True isinstance(it, Iterable) # True isinstance([1,2,3], Iterator) # False — list has no __next__ Common uses: • Verifying an object is a full iterator (not just iterable) • Custom iterator classes • Generator objects are Iterators

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
  // 78. collections.abc Callable
  (_i: number) => ({
    q: `What is the result?\nfrom collections.abc import Callable\nisinstance(print, Callable)`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "print is callable (it implements __call__), so it's an instance of Callable.",
    de: `collections.abc.Callable is an ABC for objects that can be called like functions.

Key concepts:
• Callable checks for the __call__ method
• Functions, methods, classes, and objects with __call__ are Callable
• print is a built-in function — it's callable
• Equivalent to using the callable() built-in function

How it works:
• isinstance(print, Callable) checks if print has __call__
• print is a built-in function with __call__ → True
• callable(print) also returns True

Example:
from collections.abc import Callable

isinstance(print, Callable)       # True
isinstance(len, Callable)         # True
isinstance(42, Callable)          # False
isinstance(lambda x: x, Callable) # True

class Adder:
    def __call__(self, x, y):
        return x + y

isinstance(Adder(), Callable)     # True

Common uses:
• Type hints: Callable[[int, int], str]
• Checking if an argument is callable before calling it
• Higher-order function validation

Key Concepts:
• Key concepts: • Callable checks for the __call__ method • Functions, methods, classes, and objects with __call__ are Callable • print is a built-in function — it's callable • Equivalent to using the callable() built-in function How it works: • isinstance(print, Callable) checks if print has __call__ • print is a built-in function with __call__ → True • callable(print) also returns True Example: from collections.abc import Callable isinstance(print, Callable) # True isinstance(len, Callable) # True isinstance(42, Callable) # False isinstance(lambda x: x, Callable) # True class Adder: def __call__(self, x, y): return x + y isinstance(Adder(), Callable) # True Common uses: • Type hints: Callable[[int, int], str] • Checking if an argument is callable before calling it • Higher-order function validation

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
  // 79. collections.abc Mapping
  (_i: number) => ({
    q: `What is the result?\nfrom collections.abc import Mapping\nisinstance({}, Mapping)`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "dict implements the Mapping interface (__getitem__, __len__, __iter__, etc.).",
    de: `collections.abc.Mapping is an ABC for read-only mapping types like dict.

Key concepts:
• Mapping requires __getitem__, __len__, __iter__, keys, items, values, get, __contains__, __eq__, __ne__
• dict implements all Mapping methods
• Mapping is read-only — MutableMapping adds __setitem__, __delitem__
• OrderedDict, defaultdict, Counter are also Mappings

How it works:
• isinstance({}, Mapping) checks if dict satisfies the Mapping interface
• dict is registered as a subclass of MutableMapping (which extends Mapping)
• {} is a dict → it's an instance of Mapping → True

Example:
from collections.abc import Mapping, MutableMapping

isinstance({}, Mapping)            # True
isinstance({}, MutableMapping)     # True
isinstance("hello", Mapping)      # False

from types import MappingProxyType
proxy = MappingProxyType({"a": 1})
isinstance(proxy, Mapping)         # True (read-only mapping)

Common uses:
• Type hints: Mapping[str, int] for any mapping
• Accepting dict-like objects without requiring dict specifically
• Read-only interfaces using Mapping instead of MutableMapping

Key Concepts:
• Key concepts: • Mapping requires __getitem__, __len__, __iter__, keys, items, values, get, __contains__, __eq__, __ne__ • dict implements all Mapping methods • Mapping is read-only — MutableMapping adds __setitem__, __delitem__ • OrderedDict, defaultdict, Counter are also Mappings How it works: • isinstance({}, Mapping) checks if dict satisfies the Mapping interface • dict is registered as a subclass of MutableMapping (which extends Mapping) • {} is a dict → it's an instance of Mapping → True Example: from collections.abc import Mapping, MutableMapping isinstance({}, Mapping) # True isinstance({}, MutableMapping) # True isinstance("hello", Mapping) # False from types import MappingProxyType proxy = MappingProxyType({"a": 1}) isinstance(proxy, Mapping) # True (read-only mapping) Common uses: • Type hints: Mapping[str, int] for any mapping • Accepting dict-like objects without requiring dict specifically • Read-only interfaces using Mapping instead of MutableMapping

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
  // 80. Virtual subclassing with register
  (_i: number) => ({
    q: `What does the register() method on an ABC allow?`,
    o: ["A class to be considered a subclass without inheritance", "Registering a new module", "Creating a singleton", "Adding methods at runtime"],
    c: 0,
    e: "register() allows virtual subclassing — a class is considered a subclass without actually inheriting.",
    de: `ABC.register() allows virtual subclassing — marking a class as a subclass without actual inheritance.

Key concepts:
• MyABC.register(SomeClass) makes isinstance(SomeClass(), MyABC) return True
• SomeClass does NOT actually inherit from MyABC
• No methods are inherited — it's purely for isinstance/issubclass checks
• Used to retroactively declare that existing classes conform to an interface

How it works:
• register() adds the class to the ABC's registry
• isinstance and issubclass then recognize the registered class
• But the class gains no methods or behavior from the ABC
• It's a declaration of compatibility, not inheritance

Example:
from abc import ABC, abstractmethod

class MyABC(ABC):
    @abstractmethod
    def process(self):
        pass

class ThirdParty:
    def process(self):
        return "processed"

MyABC.register(ThirdParty)

isinstance(ThirdParty(), MyABC)   # True
issubclass(ThirdParty, MyABC)     # True
# But ThirdParty doesn't actually inherit from MyABC

Common uses:
• Integrating third-party classes with your ABCs
• Retroactive interface conformance
• collections.abc uses this extensively (e.g., dict registered as MutableMapping)

Key Concepts:
• Key concepts: • MyABC.register(SomeClass) makes isinstance(SomeClass(), MyABC) return True • SomeClass does NOT actually inherit from MyABC • No methods are inherited — it's purely for isinstance/issubclass checks • Used to retroactively declare that existing classes conform to an interface How it works: • register() adds the class to the ABC's registry • isinstance and issubclass then recognize the registered class • But the class gains no methods or behavior from the ABC • It's a declaration of compatibility, not inheritance Example: from abc import ABC, abstractmethod class MyABC(ABC): @abstractmethod def process(self): pass class ThirdParty: def process(self): return "processed" MyABC.register(ThirdParty) isinstance(ThirdParty(), MyABC) # True issubclass(ThirdParty, MyABC) # True # But ThirdParty doesn't actually inherit from MyABC Common uses: • Integrating third-party classes with your ABCs • Retroactive interface conformance • collections.abc uses this extensively (e.g., dict registered as MutableMapping)

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
  // 81. What is a metaclass?
  (_i: number) => ({
    q: `What is a metaclass in Python?`,
    o: ["A class whose instances are classes", "A class that can't be instantiated", "A class with no methods", "A decorator for classes"],
    c: 0,
    e: "A metaclass is a class whose instances are classes — the class of a class.",
    de: `A metaclass is a class that defines how other classes behave — it's the class of a class.

Key concepts:
• Just as an object is an instance of a class, a class is an instance of a metaclass
• type is the default metaclass for all classes in Python
• Metaclasses control class creation, modification, and behavior
• They're rarely needed — most problems have simpler solutions

How it works:
• When you write class Foo: pass, Python calls type('Foo', (object,), {})
• type is both a function and a metaclass
• Custom metaclasses inherit from type
• The metaclass's __new__ and __init__ are called when the class is created

Example:
class Foo:
    pass

type(Foo)      # <class 'type'> — Foo's metaclass is type
type(type)     # <class 'type'> — type is its own metaclass

# Foo is an instance of type
isinstance(Foo, type)  # True

Common uses:
• ORMs (Django models, SQLAlchemy)
• API frameworks
• Singleton enforcement
• Class registration/validation

Key Concepts:
• Key concepts: • Just as an object is an instance of a class, a class is an instance of a metaclass • type is the default metaclass for all classes in Python • Metaclasses control class creation, modification, and behavior • They're rarely needed — most problems have simpler solutions How it works: • When you write class Foo: pass, Python calls type('Foo', (object,), {}) • type is both a function and a metaclass • Custom metaclasses inherit from type • The metaclass's __new__ and __init__ are called when the class is created Example: class Foo: pass type(Foo) # <class 'type'> — Foo's metaclass is type type(type) # <class 'type'> — type is its own metaclass # Foo is an instance of type isinstance(Foo, type) # True Common uses: • ORMs (Django models, SQLAlchemy) • API frameworks • Singleton enforcement • Class registration/validation

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
  // 82. type is the default metaclass
  (_i: number) => ({
    q: `type is the default metaclass for:`,
    o: ["All classes", "Only built-in classes", "Only abstract classes", "Only user-defined classes"],
    c: 0,
    e: "type is the default metaclass for all classes in Python.",
    de: `type serves as the default metaclass for every class in Python.

Key concepts:
• Every class is an instance of type (unless a custom metaclass is specified)
• type is both a callable (type(obj) returns the type) and a metaclass
• Built-in classes (int, str, list) and user-defined classes all use type
• type itself is an instance of type (type(type) is type)

How it works:
• class Foo: pass is equivalent to Foo = type('Foo', (object,), {})
• type('name', bases, namespace) creates a new class
• The resulting class object is an instance of type

Example:
class Foo:
    pass

type(Foo)       # <class 'type'>
type(int)       # <class 'type'>
type(str)       # <class 'type'>
type(list)      # <class 'type'>
type(object)    # <class 'type'>
type(type)      # <class 'type'> — type is its own metaclass

Common uses:
• Understanding Python's object model
• Dynamic class creation
• Metaclass programming

Key Concepts:
• Key concepts: • Every class is an instance of type (unless a custom metaclass is specified) • type is both a callable (type(obj) returns the type) and a metaclass • Built-in classes (int, str, list) and user-defined classes all use type • type itself is an instance of type (type(type) is type) How it works: • class Foo: pass is equivalent to Foo = type('Foo', (object,), {}) • type('name', bases, namespace) creates a new class • The resulting class object is an instance of type Example: class Foo: pass type(Foo) # <class 'type'> type(int) # <class 'type'> type(str) # <class 'type'> type(list) # <class 'type'> type(object) # <class 'type'> type(type) # <class 'type'> — type is its own metaclass Common uses: • Understanding Python's object model • Dynamic class creation • Metaclass programming

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
  // 83. Dynamic class creation with type()
  (_i: number) => ({
    q: `What does type("MyClass", (object,), {}) create?`,
    o: ["A new class dynamically", "A string 'MyClass'", "An instance of object", "TypeError"],
    c: 0,
    e: "type() with three arguments creates a new class dynamically.",
    de: `type() with three arguments is the constructor form that creates classes dynamically.

Key concepts:
• type(name, bases, dict) creates a new class
• name: string — the class name
• bases: tuple — parent classes
• dict: dictionary — class namespace (methods and attributes)
• This is exactly what the class statement does internally

How it works:
• type("MyClass", (object,), {}) creates a class named MyClass
• It inherits from object (same as any class)
• The empty dict {} means no methods or attributes
• Returns a class object, equivalent to class MyClass: pass

Example:
# These are equivalent:
class MyClass:
    pass

MyClass2 = type("MyClass2", (object,), {})

# With attributes and methods:
MyClass3 = type("MyClass3", (object,), {
    "x": 42,
    "greet": lambda self: "hello"
})

MyClass3().x       # 42
MyClass3().greet()  # "hello"

Common uses:
• Dynamic class creation at runtime
• Metaprogramming
• Code generation
• Factory patterns

Key Concepts:
• Key concepts: • type(name, bases, dict) creates a new class • name: string — the class name • bases: tuple — parent classes • dict: dictionary — class namespace (methods and attributes) • This is exactly what the class statement does internally How it works: • type("MyClass", (object,), {}) creates a class named MyClass • It inherits from object (same as any class) • The empty dict {} means no methods or attributes • Returns a class object, equivalent to class MyClass: pass Example: # These are equivalent: class MyClass: pass MyClass2 = type("MyClass2", (object,), {}) # With attributes and methods: MyClass3 = type("MyClass3", (object,), { "x": 42, "greet": lambda self: "hello" }) MyClass3().x # 42 MyClass3().greet() # "hello" Common uses: • Dynamic class creation at runtime • Metaprogramming • Code generation • Factory patterns

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
  // 84. Custom metaclass
  (_i: number) => ({
    q: `What is type(C)?\nclass Meta(type):\n    pass\nclass C(metaclass=Meta):\n    pass`,
    o: ["<class 'Meta'>", "<class 'type'>", "<class 'C'>", "Error"],
    c: 0,
    e: "C uses Meta as its metaclass, so type(C) is Meta.",
    de: `When a class specifies a custom metaclass, that metaclass becomes its type.

Key concepts:
• class Meta(type): pass defines a custom metaclass
• class C(metaclass=Meta): pass uses Meta to create C
• type(C) returns Meta, not type
• C is an instance of Meta

How it works:
• Meta inherits from type — it IS a metaclass
• metaclass=Meta tells Python to use Meta instead of type to create C
• Python calls Meta('C', (), {}) instead of type('C', (), {})
• The resulting class C is an instance of Meta

Example:
class Meta(type):
    pass

class C(metaclass=Meta):
    pass

type(C)               # <class '__main__.Meta'>
isinstance(C, Meta)   # True
isinstance(C, type)   # True (Meta inherits from type)

Common uses:
• Custom class behavior
• Automatic registration of subclasses
• Validation of class definitions
• ORM model metaclasses

Key Concepts:
• Key concepts: • class Meta(type): pass defines a custom metaclass • class C(metaclass=Meta): pass uses Meta to create C • type(C) returns Meta, not type • C is an instance of Meta How it works: • Meta inherits from type — it IS a metaclass • metaclass=Meta tells Python to use Meta instead of type to create C • Python calls Meta('C', (), {}) instead of type('C', (), {}) • The resulting class C is an instance of Meta Example: class Meta(type): pass class C(metaclass=Meta): pass type(C) # <class '__main__.Meta'> isinstance(C, Meta) # True isinstance(C, type) # True (Meta inherits from type) Common uses: • Custom class behavior • Automatic registration of subclasses • Validation of class definitions • ORM model metaclasses

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
  // 85. Metaclass __new__ runs at class definition
  (_i: number) => ({
    q: `When does Meta.__new__ run?\nclass Meta(type):\n    def __new__(mcs, name, bases, ns):\n        print(f"Creating {name}")\n        return super().__new__(mcs, name, bases, ns)\nclass C(metaclass=Meta):\n    pass`,
    o: ["When class C is defined", "When C() is called", "When C is imported", "Never"],
    c: 0,
    e: "Meta.__new__ runs when the class is defined (at class creation time), not when instances are created.",
    de: `The metaclass's __new__ method is called at class definition time, not at instance creation time.

Key concepts:
• Meta.__new__ is called when the class statement is executed
• This happens before any instances of C are created
• The print statement runs as soon as Python processes class C
• The metaclass controls CLASS creation, not INSTANCE creation

How it works step by step:
• Python encounters class C(metaclass=Meta): pass
• Python calls Meta.__new__(Meta, 'C', (), namespace)
• Inside __new__, print("Creating C") executes
• super().__new__ (type.__new__) creates the actual class object
• The class C is now ready to use

Example:
class Meta(type):
    def __new__(mcs, name, bases, ns):
        print(f"Creating {name}")
        return super().__new__(mcs, name, bases, ns)

class C(metaclass=Meta):  # prints "Creating C" RIGHT HERE
    pass

# "Creating C" was already printed above
c = C()  # does NOT trigger Meta.__new__ again

Common uses:
• Class registration at definition time
• Validating class structure before it's usable
• Modifying the class namespace before class creation

Key Concepts:
• Key concepts: • Meta.__new__ is called when the class statement is executed • This happens before any instances of C are created • The print statement runs as soon as Python processes class C • The metaclass controls CLASS creation, not INSTANCE creation How it works step by step: • Python encounters class C(metaclass=Meta): pass • Python calls Meta.__new__(Meta, 'C', (), namespace) • Inside __new__, print("Creating C") executes • super().__new__ (type.__new__) creates the actual class object • The class C is now ready to use Example: class Meta(type): def __new__(mcs, name, bases, ns): print(f"Creating {name}") return super().__new__(mcs, name, bases, ns) class C(metaclass=Meta): # prints "Creating C" RIGHT HERE pass # "Creating C" was already printed above c = C() # does NOT trigger Meta.__new__ again Common uses: • Class registration at definition time • Validating class structure before it's usable • Modifying the class namespace before class creation

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
  // 86. __init_subclass__ is preferred
  (_i: number) => ({
    q: `For most use cases, what should you use instead of metaclasses?`,
    o: ["__init_subclass__", "__init__", "__new__", "decorators only"],
    c: 0,
    e: "Most Python code should use __init_subclass__ instead of metaclasses — it's simpler.",
    de: `__init_subclass__ (Python 3.6+) covers most metaclass use cases with much simpler code.

Key concepts:
• __init_subclass__ is called when a class is subclassed
• It's a class method on the parent class
• Much simpler than writing a full metaclass
• Handles most registration, validation, and customization needs

How it works:
• Define __init_subclass__ in a base class
• When any class inherits from that base, __init_subclass__ is called
• Receives cls (the new subclass) and any keyword arguments from the class statement

Example:
class Plugin:
    registry = []

    def __init_subclass__(cls, **kwargs):
        super().__init_subclass__(**kwargs)
        Plugin.registry.append(cls)

class MyPlugin(Plugin):
    pass

class AnotherPlugin(Plugin):
    pass

Plugin.registry  # [MyPlugin, AnotherPlugin]

# Equivalent metaclass would be 15+ lines of code

Common uses:
• Auto-registration of subclasses
• Validation of subclass attributes
• Setting default values for subclasses
• Plugin systems

Key Concepts:
• Key concepts: • __init_subclass__ is called when a class is subclassed • It's a class method on the parent class • Much simpler than writing a full metaclass • Handles most registration, validation, and customization needs How it works: • Define __init_subclass__ in a base class • When any class inherits from that base, __init_subclass__ is called • Receives cls (the new subclass) and any keyword arguments from the class statement Example: class Plugin: registry = [] def __init_subclass__(cls, **kwargs): super().__init_subclass__(**kwargs) Plugin.registry.append(cls) class MyPlugin(Plugin): pass class AnotherPlugin(Plugin): pass Plugin.registry # [MyPlugin, AnotherPlugin] # Equivalent metaclass would be 15+ lines of code Common uses: • Auto-registration of subclasses • Validation of subclass attributes • Setting default values for subclasses • Plugin systems

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
  // 87. Function annotations
  (_i: number) => ({
    q: `What is f.__annotations__?\ndef f(x: int) -> str:\n    return str(x)`,
    o: ['{"x": int, "return": str}', '{"x": "int", "return": "str"}', "{}", "Error"],
    c: 0,
    e: 'f.__annotations__ is {"x": int, "return": str} — the actual type objects, not strings.',
    de: `Function annotations are stored in the __annotations__ dictionary as actual type objects.

Key concepts:
• Type hints in function signatures are stored in __annotations__
• Parameter types are keyed by parameter name
• Return type is keyed by "return"
• Values are the actual type objects (int, str), not strings
• Annotations are metadata only — not enforced at runtime

How it works:
• def f(x: int) -> str creates annotations
• f.__annotations__ returns {"x": int, "return": str}
• int and str are the actual built-in type objects
• Python stores but does not use these annotations

Example:
def f(x: int) -> str:
    return str(x)

f.__annotations__
# {'x': <class 'int'>, 'return': <class 'str'>}

def g(name: str, age: int) -> bool:
    return age > 0

g.__annotations__
# {'name': <class 'str'>, 'age': <class 'int'>, 'return': <class 'bool'>}

Common uses:
• Documentation and IDE support
• Type checkers (mypy, pyright)
• Framework introspection (FastAPI, Pydantic)
• Runtime validation libraries

Key Concepts:
• Key concepts: • Type hints in function signatures are stored in __annotations__ • Parameter types are keyed by parameter name • Return type is keyed by "return" • Values are the actual type objects (int, str), not strings • Annotations are metadata only — not enforced at runtime How it works: • def f(x: int) -> str creates annotations • f.__annotations__ returns {"x": int, "return": str} • int and str are the actual built-in type objects • Python stores but does not use these annotations Example: def f(x: int) -> str: return str(x) f.__annotations__ # {'x': <class 'int'>, 'return': <class 'str'>} def g(name: str, age: int) -> bool: return age > 0 g.__annotations__ # {'name': <class 'str'>, 'age': <class 'int'>, 'return': <class 'bool'>} Common uses: • Documentation and IDE support • Type checkers (mypy, pyright) • Framework introspection (FastAPI, Pydantic) • Runtime validation libraries

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
  // 88. Class annotations
  (_i: number) => ({
    q: `What is C.__annotations__?\nclass C:\n    x: int\n    y: str`,
    o: ['{"x": int, "y": str}', '{"x": 0, "y": ""}', "{}", "Error"],
    c: 0,
    e: 'C.__annotations__ is {"x": int, "y": str} — class-level type annotations.',
    de: `Class-level type annotations are stored in the class's __annotations__ dictionary.

Key concepts:
• x: int in a class body creates an annotation, NOT an attribute value
• The annotation is stored in C.__annotations__
• x: int alone does NOT create C.x — there's no value assigned
• x: int = 5 would create both an annotation AND a class attribute

How it works:
• class C: x: int; y: str processes the annotations
• Python stores them in C.__annotations__ = {"x": int, "y": str}
• hasattr(C, 'x') is False — no value was assigned
• C.__annotations__['x'] is int

Example:
class C:
    x: int
    y: str

C.__annotations__   # {'x': <class 'int'>, 'y': <class 'str'>}
hasattr(C, 'x')     # False — annotation only, no value

class D:
    x: int = 5
    y: str = "hello"

D.__annotations__   # {'x': <class 'int'>, 'y': <class 'str'>}
D.x                 # 5 — has both annotation and value

Common uses:
• dataclasses use annotations to define fields
• Pydantic models
• NamedTuple subclasses
• Type checking and documentation

Key Concepts:
• Key concepts: • x: int in a class body creates an annotation, NOT an attribute value • The annotation is stored in C.__annotations__ • x: int alone does NOT create C.x — there's no value assigned • x: int = 5 would create both an annotation AND a class attribute How it works: • class C: x: int; y: str processes the annotations • Python stores them in C.__annotations__ = {"x": int, "y": str} • hasattr(C, 'x') is False — no value was assigned • C.__annotations__['x'] is int Example: class C: x: int y: str C.__annotations__ # {'x': <class 'int'>, 'y': <class 'str'>} hasattr(C, 'x') # False — annotation only, no value class D: x: int = 5 y: str = "hello" D.__annotations__ # {'x': <class 'int'>, 'y': <class 'str'>} D.x # 5 — has both annotation and value Common uses: • dataclasses use annotations to define fields • Pydantic models • NamedTuple subclasses • Type checking and documentation

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
  // 89. Type hints not enforced at runtime
  (_i: number) => ({
    q: `Are type hints enforced at runtime in Python?`,
    o: ["No, they're just metadata", "Yes, TypeError is raised", "Only in strict mode", "Only for built-in types"],
    c: 0,
    e: "No — type hints are just metadata. Python does not enforce them at runtime.",
    de: `Python's type hints are purely informational — the interpreter does not check or enforce them.

Key concepts:
• Type hints are stored as annotations but never checked by Python itself
• You can pass any type regardless of the hint: f(x: int) allows f("hello")
• External tools like mypy, pyright, pytype perform static type checking
• Some libraries (Pydantic, beartype) add runtime checking via decorators

How it works:
• def f(x: int) -> str stores hints in __annotations__
• Calling f("not_an_int") works fine — no TypeError from Python
• Only static type checkers flag mismatches
• This is by design — gradual typing philosophy

Example:
def add(x: int, y: int) -> int:
    return x + y

add(1, 2)           # 3 — correct types
add("a", "b")       # "ab" — wrong types, but Python doesn't care!
add([1], [2])       # [1, 2] — still works

x: int = "hello"    # No error at runtime!
print(x)            # "hello"

Common uses:
• IDE autocompletion and error detection
• mypy/pyright static analysis
• Documentation
• Runtime validation via third-party libraries (Pydantic, beartype)

Key Concepts:
• print(x) # "hello" Common uses: • IDE autocompletion and error detection • mypy/pyright static analysis • Documentation • Runtime validation via third-party libraries (Pydantic, beartype)

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
  // 90. Optional type hint
  (_i: number) => ({
    q: `What is Optional[int] equivalent to?`,
    o: ["int | None", "int only", "None only", "Any"],
    c: 0,
    e: "Optional[int] is equivalent to int | None (Union[int, None]).",
    de: `Optional[X] is shorthand for Union[X, None], meaning the value can be X or None.

Key concepts:
• from typing import Optional
• Optional[int] means the value is either int or None
• Equivalent to Union[int, None]
• Since Python 3.10, you can write int | None directly
• Common for function parameters with default None

How it works:
• Optional[int] creates Union[int, None]
• Used in function signatures where a parameter might be None
• Type checkers understand this means: check for None before using as int

Example:
from typing import Optional

def find_user(user_id: int) -> Optional[str]:
    if user_id == 1:
        return "Alice"
    return None

# Equivalent in Python 3.10+:
def find_user(user_id: int) -> str | None:
    ...

# Common pattern:
def greet(name: Optional[str] = None) -> str:
    if name is None:
        return "Hello!"
    return f"Hello, {name}!"

Common uses:
• Return types that might be None (lookup failures)
• Optional parameters with None defaults
• Database fields that can be NULL

Key Concepts:
• # Common pattern: def greet(name: Optional[str] = None) -> str: if name is None: return "Hello!" return f"Hello, {name}!" Common uses: • Return types that might be None (lookup failures) • Optional parameters with None defaults • Database fields that can be NULL

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
  // 91. List type hint
  (_i: number) => ({
    q: `What does List[int] represent as a type hint?`,
    o: ["A list of integers", "A single integer", "A list of strings", "A tuple of integers"],
    c: 0,
    e: "List[int] is a generic type hint meaning a list containing integers.",
    de: `List[int] from the typing module represents a list whose elements are integers.

Key concepts:
• from typing import List (Python 3.5+)
• List[int] means "a list where all elements are int"
• Since Python 3.9, you can use the built-in list[int] instead
• Type checkers verify elements match the specified type

How it works:
• List[int] creates a generic alias
• Type checkers use it to verify list element types
• At runtime, List[int] is just list — no enforcement

Example:
from typing import List

def sum_all(numbers: List[int]) -> int:
    return sum(numbers)

sum_all([1, 2, 3])        # 6 — correct
sum_all(["a", "b"])       # type checker warns, but runs

# Python 3.9+ — no import needed:
def sum_all(numbers: list[int]) -> int:
    return sum(numbers)

Common uses:
• Function parameters expecting lists of specific types
• Return types for list-producing functions
• Class attributes that hold lists

Key Concepts:
• Key concepts: • from typing import List (Python 3.5+) • List[int] means "a list where all elements are int" • Since Python 3.9, you can use the built-in list[int] instead • Type checkers verify elements match the specified type How it works: • List[int] creates a generic alias • Type checkers use it to verify list element types • At runtime, List[int] is just list — no enforcement Example: from typing import List def sum_all(numbers: List[int]) -> int: return sum(numbers) sum_all([1, 2, 3]) # 6 — correct sum_all(["a", "b"]) # type checker warns, but runs # Python 3.9+ — no import needed: def sum_all(numbers: list[int]) -> int: return sum(numbers) Common uses: • Function parameters expecting lists of specific types • Return types for list-producing functions • Class attributes that hold lists

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
  // 92. Built-in generics since Python 3.9
  (_i: number) => ({
    q: `Since Python 3.9, what can you use instead of typing.List[int]?`,
    o: ["list[int]", "List(int)", "[int]", "array[int]"],
    c: 0,
    e: "Since Python 3.9, built-in types support subscripting: list[int] instead of List[int].",
    de: `Python 3.9 introduced built-in generic types, removing the need to import from typing for common types.

Key concepts:
• list[int] replaces typing.List[int]
• dict[str, int] replaces typing.Dict[str, int]
• tuple[int, str] replaces typing.Tuple[int, str]
• set[str] replaces typing.Set[str]
• No import needed — use the built-in types directly

How it works:
• Python 3.9 added __class_getitem__ to built-in types
• list[int] creates a GenericAlias at runtime
• Type checkers treat it the same as List[int]
• The typing versions still work but are considered legacy

Example:
# Python 3.9+ — preferred:
def process(items: list[int]) -> dict[str, int]:
    return {str(i): i for i in items}

# Before Python 3.9:
from typing import List, Dict
def process(items: List[int]) -> Dict[str, int]:
    return {str(i): i for i in items}

# Other built-in generics:
x: tuple[int, str] = (1, "hello")
y: set[float] = {1.0, 2.0}
z: frozenset[int] = frozenset({1, 2})

Common uses:
• Modern Python type annotations
• Cleaner code without typing imports
• PEP 585 standard

Key Concepts:
• Key concepts: • list[int] replaces typing.List[int] • dict[str, int] replaces typing.Dict[str, int] • tuple[int, str] replaces typing.Tuple[int, str] • set[str] replaces typing.Set[str] • No import needed — use the built-in types directly How it works: • Python 3.9 added __class_getitem__ to built-in types • list[int] creates a GenericAlias at runtime • Type checkers treat it the same as List[int] • The typing versions still work but are considered legacy Example: # Python 3.9+ — preferred: def process(items: list[int]) -> dict[str, int]: return {str(i): i for i in items} # Before Python 3.9: from typing import List, Dict def process(items: List[int]) -> Dict[str, int]: return {str(i): i for i in items} # Other built-in generics: x: tuple[int, str] = (1, "hello") y: set[float] = {1.0, 2.0} z: frozenset[int] = frozenset({1, 2}) Common uses: • Modern Python type annotations • Cleaner code without typing imports • PEP 585 standard

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
  // 93. Dict type hint
  (_i: number) => ({
    q: `What does Dict[str, int] represent?`,
    o: ["A dict with str keys and int values", "A dict with int keys and str values", "A list of dicts", "A set of strings"],
    c: 0,
    e: "Dict[str, int] means a dictionary with string keys and integer values.",
    de: `Dict[str, int] is a generic type hint for dictionaries with specific key and value types.

Key concepts:
• from typing import Dict (or dict[str, int] in Python 3.9+)
• First parameter is the key type, second is the value type
• Dict[str, int] → keys are strings, values are integers
• Type checkers verify both key and value types

How it works:
• Dict[str, int] creates a generic alias
• Type checkers use it to verify dict operations
• d["name"] = 42 is valid; d[42] = "name" would be flagged

Example:
from typing import Dict

def word_count(text: str) -> Dict[str, int]:
    counts: Dict[str, int] = {}
    for word in text.split():
        counts[word] = counts.get(word, 0) + 1
    return counts

# Python 3.9+:
def word_count(text: str) -> dict[str, int]:
    ...

# Nested:
config: Dict[str, Dict[str, int]] = {
    "server": {"port": 8080, "timeout": 30}
}

Common uses:
• Configuration dictionaries
• Lookup tables
• JSON-like data structures

Key Concepts:
• # Nested: config: Dict[str, Dict[str, int]] = { "server": {"port": 8080, "timeout": 30} } Common uses: • Configuration dictionaries • Lookup tables • JSON-like data structures

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
  // 94. Tuple type hint
  (_i: number) => ({
    q: `What does Tuple[int, str] represent?`,
    o: ["A tuple of exactly (int, str)", "A tuple of any length", "A list with int and str", "Either int or str"],
    c: 0,
    e: "Tuple[int, str] means a tuple with exactly two elements: an int and a str.",
    de: `Tuple[int, str] specifies a fixed-length tuple with specific element types at each position.

Key concepts:
• Tuple[int, str] means exactly 2 elements: first is int, second is str
• Tuple[int, ...] means variable-length tuple of ints (ellipsis for homogeneous)
• Tuple[()] means an empty tuple
• Each position has its own type — this is different from lists

How it works:
• Tuple[int, str] creates a generic alias
• Type checkers verify the tuple length and element types
• (1, "hello") matches Tuple[int, str]
• (1, 2) does NOT match (second element should be str)

Example:
from typing import Tuple

def get_name_age() -> Tuple[str, int]:
    return ("Alice", 30)

name, age = get_name_age()  # name: str, age: int

# Variable-length tuple:
def get_scores() -> Tuple[int, ...]:
    return (95, 87, 92)

# Python 3.9+:
def get_name_age() -> tuple[str, int]:
    return ("Alice", 30)

Common uses:
• Returning multiple values with different types
• Database rows
• Coordinate pairs: Tuple[float, float]

Key Concepts:
• Key concepts: • Tuple[int, str] means exactly 2 elements: first is int, second is str • Tuple[int, ...] means variable-length tuple of ints (ellipsis for homogeneous) • Tuple[()] means an empty tuple • Each position has its own type — this is different from lists How it works: • Tuple[int, str] creates a generic alias • Type checkers verify the tuple length and element types • (1, "hello") matches Tuple[int, str] • (1, 2) does NOT match (second element should be str) Example: from typing import Tuple def get_name_age() -> Tuple[str, int]: return ("Alice", 30) name, age = get_name_age() # name: str, age: int # Variable-length tuple: def get_scores() -> Tuple[int, ...]: return (95, 87, 92) # Python 3.9+: def get_name_age() -> tuple[str, int]: return ("Alice", 30) Common uses: • Returning multiple values with different types • Database rows • Coordinate pairs: Tuple[float, float]

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
  // 95. Union type hint
  (_i: number) => ({
    q: `What does Union[int, str] represent?`,
    o: ["Either int or str", "Both int and str", "A tuple of int and str", "int converted to str"],
    c: 0,
    e: "Union[int, str] means the value can be either an int or a str.",
    de: `Union[X, Y] means the value can be any one of the specified types.

Key concepts:
• from typing import Union
• Union[int, str] means the value is either int or str
• Since Python 3.10, you can write int | str instead
• Union can take any number of types: Union[int, str, float]
• Union[X, None] is the same as Optional[X]

How it works:
• Union[int, str] creates a special type
• Type checkers require you to handle all possible types
• Typically requires isinstance checks or pattern matching

Example:
from typing import Union

def process(value: Union[int, str]) -> str:
    if isinstance(value, int):
        return f"Number: {value}"
    return f"Text: {value}"

process(42)       # "Number: 42"
process("hello")  # "Text: hello"

# Python 3.10+:
def process(value: int | str) -> str:
    ...

# Multiple types:
JsonValue = Union[str, int, float, bool, None, list, dict]

Common uses:
• Functions accepting multiple input types
• JSON values
• API parameters with flexible types

Key Concepts:
• # Multiple types: JsonValue = Union[str, int, float, bool, None, list, dict] Common uses: • Functions accepting multiple input types • JSON values • API parameters with flexible types

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
  // 96. PEP 604 union syntax
  (_i: number) => ({
    q: `Since Python 3.10, how can you write Union[int, str]?`,
    o: ["int | str", "int & str", "int + str", "int, str"],
    c: 0,
    e: "Since Python 3.10, you can write int | str instead of Union[int, str].",
    de: `PEP 604 introduced the | operator for union types in Python 3.10.

Key concepts:
• int | str replaces Union[int, str]
• int | None replaces Optional[int]
• Works in function annotations, variable annotations, and isinstance/issubclass
• Cleaner, more readable syntax

How it works:
• The | operator on types creates a union type
• int | str is evaluated at runtime as types.UnionType
• Type checkers treat it identically to Union[int, str]
• Also works with isinstance: isinstance(x, int | str)

Example:
# Python 3.10+:
def parse(value: int | str) -> str:
    return str(value)

def find(key: str) -> int | None:
    ...

# isinstance with union (Python 3.10+):
isinstance(42, int | str)    # True
isinstance("hi", int | str)  # True
isinstance([], int | str)    # False

# Before Python 3.10:
from typing import Union, Optional
def parse(value: Union[int, str]) -> str: ...
def find(key: str) -> Optional[int]: ...

Common uses:
• Modern type annotations
• Cleaner Optional syntax: X | None
• isinstance with multiple types

Key Concepts:
• Common uses: • Modern type annotations • Cleaner Optional syntax: X | None • isinstance with multiple types

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
  // 97. Any type hint
  (_i: number) => ({
    q: `What does Any from the typing module mean?`,
    o: ["Any type is acceptable", "Only built-in types", "No type allowed", "Unknown error type"],
    c: 0,
    e: "Any means any type is acceptable — it's compatible with every type.",
    de: `Any is a special type that is compatible with every other type — it opts out of type checking.

Key concepts:
• from typing import Any
• Any is both a subtype and supertype of every type
• Variables typed as Any skip all type checking
• Using Any is an escape hatch — prefer specific types when possible

How it works:
• x: Any = 42 — valid
• x: Any = "hello" — valid
• x: Any = [1, 2, 3] — valid
• Type checkers won't warn about any operations on Any values
• Any propagates: if x is Any, x.anything is also Any

Example:
from typing import Any

def process(data: Any) -> Any:
    return data  # no type checking

x: Any = 42
x.whatever()    # type checker won't complain (but will fail at runtime!)

# Contrast with object:
y: object = 42
y.whatever()    # type checker WILL flag this

Common uses:
• Gradual typing — when migrating untyped code
• Dynamic data from JSON, databases, external APIs
• When the actual type is too complex to express
• Escape hatch for type checker limitations

Key Concepts:
• Key concepts: • from typing import Any • Any is both a subtype and supertype of every type • Variables typed as Any skip all type checking • Using Any is an escape hatch — prefer specific types when possible How it works: • x: Any = 42 — valid • x: Any = "hello" — valid • x: Any = [1, 2, 3] — valid • Type checkers won't warn about any operations on Any values • Any propagates: if x is Any, x.anything is also Any Example: from typing import Any def process(data: Any) -> Any: return data # no type checking x: Any = 42 x.whatever() # type checker won't complain (but will fail at runtime!) # Contrast with object: y: object = 42 y.whatever() # type checker WILL flag this Common uses: • Gradual typing — when migrating untyped code • Dynamic data from JSON, databases, external APIs • When the actual type is too complex to express • Escape hatch for type checker limitations

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
  // 98. Protocol (structural subtyping)
  (_i: number) => ({
    q: `What is Protocol from the typing module?`,
    o: ["Structural subtyping (duck typing with type checking)", "A network protocol handler", "A metaclass for ABCs", "A decorator for methods"],
    c: 0,
    e: "Protocol enables structural subtyping — duck typing that is checked by type checkers.",
    de: `Protocol (PEP 544) enables structural subtyping — checking that objects have the required methods/attributes without requiring inheritance.

Key concepts:
• from typing import Protocol
• Define a Protocol with required methods/attributes
• Any class that has those methods matches, no inheritance needed
• This is "static duck typing" — checked by type checkers
• Unlike ABCs, no register() or inheritance is required

How it works:
• Define a Protocol class with method signatures
• Type checkers verify that passed objects have matching methods
• No runtime check by default (use @runtime_checkable for isinstance)
• Classes don't need to know about the Protocol to satisfy it

Example:
from typing import Protocol

class Drawable(Protocol):
    def draw(self) -> str: ...

class Circle:
    def draw(self) -> str:
        return "O"

class Square:
    def draw(self) -> str:
        return "[]"

def render(shape: Drawable) -> str:
    return shape.draw()

render(Circle())   # "O" — Circle satisfies Drawable
render(Square())   # "[]" — Square satisfies Drawable
# Neither inherits from Drawable!

Common uses:
• Duck typing with static type safety
• Callback protocols
• Plugin interfaces without forcing inheritance
• Interoperability between libraries

Key Concepts:
• Common uses: • Duck typing with static type safety • Callback protocols • Plugin interfaces without forcing inheritance • Interoperability between libraries

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
  // 99. __class_getitem__ usage
  (_i: number) => ({
    q: `What is the output?\nclass C:\n    def __class_getitem__(cls, item):\n        return f"C[{item}]"\nprint(C[int])`,
    o: ['C[<class \'int\'>]', "C[int]", "Error", "None"],
    c: 0,
    e: "C[int] calls __class_getitem__(cls, int), returning f\"C[{int}]\" which is \"C[<class 'int'>]\".",
    de: `__class_getitem__ is called when a class is subscripted with square brackets.

Key concepts:
• __class_getitem__(cls, item) is a class method called for Class[item] syntax
• It enables the generic subscript notation like list[int]
• item receives whatever is passed in the brackets
• Returns whatever the class wants — typically a generic alias

How it works:
• C[int] calls C.__class_getitem__(int)
• item is the int class object (not the string "int")
• f"C[{int}]" formats to "C[<class 'int'>]" because str(int) is "<class 'int'>"
• The result is printed

Example:
class C:
    def __class_getitem__(cls, item):
        return f"C[{item}]"

C[int]      # "C[<class 'int'>]"
C[str]      # "C[<class 'str'>]"
C["hello"]  # "C[hello]"

# Built-in usage:
list[int]   # list.__class_getitem__(int) → list[int] generic alias

Common uses:
• Implementing generic classes
• Custom type hint syntax
• Parameterized class behavior

Key Concepts:
• Key concepts: • __class_getitem__(cls, item) is a class method called for Class[item] syntax • It enables the generic subscript notation like list[int] • item receives whatever is passed in the brackets • Returns whatever the class wants — typically a generic alias How it works: • C[int] calls C.__class_getitem__(int) • item is the int class object (not the string "int") • f"C[{int}]" formats to "C[<class 'int'>]" because str(int) is "<class 'int'>" • The result is printed Example: class C: def __class_getitem__(cls, item): return f"C[{item}]" C[int] # "C[<class 'int'>]" C[str] # "C[<class 'str'>]" C["hello"] # "C[hello]" # Built-in usage: list[int] # list.__class_getitem__(int) → list[int] generic alias Common uses: • Implementing generic classes • Custom type hint syntax • Parameterized class behavior

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
  // 100. What __class_getitem__ enables
  (_i: number) => ({
    q: `What does __class_getitem__ enable on a class?`,
    o: ["Subscript syntax like MyClass[int]", "Attribute access", "Iteration", "Comparison operators"],
    c: 0,
    e: "__class_getitem__ enables subscript syntax for classes, e.g., list[int], dict[str, int].",
    de: `__class_getitem__ is the mechanism that allows classes to be parameterized with square bracket syntax.

Key concepts:
• Added in Python 3.7 (PEP 560)
• Enables Class[params] syntax without a metaclass
• Used by built-in types (list, dict, tuple, set) for generic type hints
• Replaces the need for typing.List, typing.Dict etc. (Python 3.9+)

How it works:
• When Python sees MyClass[X], it looks for __class_getitem__ on MyClass
• If found, it calls MyClass.__class_getitem__(X)
• The return value is typically a GenericAlias object
• Built-in types return types.GenericAlias instances

Example:
# Custom generic class:
class MyList:
    def __class_getitem__(cls, item):
        return f"{cls.__name__}[{item.__name__}]"

MyList[int]    # "MyList[int]"
MyList[str]    # "MyList[str]"

# Built-in generics (Python 3.9+):
list[int]           # list.__class_getitem__(int)
dict[str, int]      # dict.__class_getitem__((str, int))
tuple[int, ...]     # tuple.__class_getitem__((int, Ellipsis))

Common uses:
• Generic type hints on user-defined classes
• Built-in type subscripting (list[int], dict[str, int])
• Custom parameterized types
• Type alias definitions

Key Concepts:
• (Python 3.9+) How it works: • When Python sees MyClass[X], it looks for __class_getitem__ on MyClass • If found, it calls MyClass.__class_getitem__(X) • The return value is typically a GenericAlias object • Built-in types return types.GenericAlias instances Example: # Custom generic class: class MyList: def __class_getitem__(cls, item): return f"{cls.__name__}[{item.__name__}]" MyList[int] # "MyList[int]" MyList[str] # "MyList[str]" # Built-in generics (Python 3.9+): list[int] # list.__class_getitem__(int) dict[str, int] # dict.__class_getitem__((str, int)) tuple[int, ...] # tuple.__class_getitem__((int, Ellipsis)) Common uses: • Generic type hints on user-defined classes • Built-in type subscripting (list[int], dict[str, int]) • Custom parameterized types • Type alias definitions

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
