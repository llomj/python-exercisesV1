import { PersonaStage } from '../../types';

// --- LEVEL 9: WHALE (Inheritance, Polymorphism, Encapsulation) - 100 TRULY UNIQUE QUESTIONS ---
// Each question tests a DIFFERENT concept - NO number/variable variations of the same question
export const level9Patterns = [
  // 1-10: Basic Inheritance
  (_i: number) => ({ 
    q: `What is inheritance?`, 
    o: ["Child class gets parent features", "Parent class gets child features", "Error", "Classes are independent"], 
    c: 0, 
    e: "Inheritance allows child to use parent features.",
    de: `Inheritance is a mechanism that allows a child class (subclass) to inherit features from a parent class (superclass). When you define class Child(Parent), the child class automatically gets access to the parent class's attributes and methods. This enables code reuse and creates an "is-a" relationship - a Child is a type of Parent. The child can use parent features as-is, or override them to provide different behavior. Inheritance is one of the core principles of object-oriented programming.

Inheritance concept:
• Child class gets parent features
• class Child(Parent): inherits from Parent
• Child can access parent attributes and methods
• Child can override parent methods
• Enables code reuse and "is-a" relationships

How it works:
• class Parent: defines parent class
• class Child(Parent): defines child class inheriting from Parent
• Child automatically gets Parent's attributes and methods
• Child can use parent features directly
• Child can override parent methods if needed

Example:
class Parent:
    x = 1
    def method(self):
        return 1
class Child(Parent):  # Inherits from Parent
    pass
Child.x                # 1 (inherits parent attribute)
Child().method()       # 1 (inherits parent method)

Common uses:
• Code reuse: class Child(Parent): (inherits parent features)
• "Is-a" relationships: class Dog(Animal): (Dog is an Animal)
• Inheritance hierarchy
• Object-oriented programming

Example: Inheritance is a mechanism that allows a child class to inherit features from a parent class, enabling the child to use parent attributes and methods while also allowing overrides for different behavior.

Key Concepts:
• Inheritance concept: • Child class gets parent features • class Child(Parent): inherits from Parent • Child can access parent attributes and methods • Child can override parent methods • Enables code reuse and "is-a" relationships How it works: • class Parent: defines parent class • class Child(Parent): defines child class inheriting from Parent • Child automatically gets Parent's attributes and methods • Child can use parent features directly • Child can override parent methods if needed Example: class Parent: x = 1 def method(self): return 1 class Child(Parent): # Inherits from Parent pass Child.x # 1 (inherits parent attribute) Child().method() # 1 (inherits parent method) Common uses: • Code reuse: class Child(Parent): (inherits parent features) • "Is-a" relationships: class Dog(Animal): (Dog is an Animal) • Inheritance hierarchy • Object-oriented programming Example: Inheritance is a mechanism that allows a child class to inherit features from a parent class, enabling the child to use parent attributes and methods while also allowing overrides for different behavior.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: x = 1; class Child(Parent): pass; Child.x?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "Child class inherits parent class attributes.",
    de: `A child class inherits parent class attributes. If class Parent: x = 1; class Child(Parent): pass; Child.x, then Child.x returns 1 because inheritance allows the child class to access the parent class's attributes. When you define class Child(Parent), Child automatically gets access to Parent's class attributes, including x = 1. You can access parent class attributes through the child class directly.

Child inherits parent attributes:
• Child.x returns 1
• class Child(Parent): inherits from Parent
• Parent has class attribute x = 1
• Child inherits this attribute
• Returns: 1

How it works:
• class Parent: x = 1 creates class with class attribute
• class Child(Parent): pass creates child inheriting from Parent
• Child inherits Parent's class attributes
• Child.x accesses inherited attribute
• Returns: 1

Example:
class Parent: x = 1
class Child(Parent): pass
Child.x                        # 1 (inherits parent class attribute)
Parent.x                       # 1 (parent still has it)

Common uses:
• Inheriting attributes: class Child(Parent): (inherits parent attributes)
• Class attributes: child can access parent class attributes
• Inheritance
• Code reuse

Example: If class Parent: x = 1; class Child(Parent): pass; Child.x, then Child.x returns 1 because the child class inherits parent class attributes, so it can access Parent's class attribute x = 1.

Key Concepts:
• Child inherits parent attributes: • Child.x returns 1 • class Child(Parent): inherits from Parent • Parent has class attribute x = 1 • Child inherits this attribute • Returns: 1 How it works: • class Parent: x = 1 creates class with class attribute • class Child(Parent): pass creates child inheriting from Parent • Child inherits Parent's class attributes • Child.x accesses inherited attribute • Returns: 1 Example: class Parent: x = 1 class Child(Parent): pass Child.x # 1 (inherits parent class attribute) Parent.x # 1 (parent still has it) Common uses: • Inheriting attributes: class Child(Parent): (inherits parent attributes) • Class attributes: child can access parent class attributes • Inheritance • Code reuse Example: If class Parent: x = 1; class Child(Parent): pass; Child.x, then Child.x returns 1 because the child class inherits parent class attributes, so it can access Parent's class attribute x = 1.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: def method(self): return 1; class Child(Parent): pass; Child().method()?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "Child class inherits parent methods.",
    de: `A child class inherits parent methods. If class Parent: def method(self): return 1; class Child(Parent): pass; Child().method(), then Child().method() returns 1 because inheritance allows the child class to use the parent class's methods. When you create an instance of Child and call method(), Python looks for method in Child, doesn't find it, then looks in Parent and finds it. This is how method resolution works in inheritance.

Child inherits parent methods:
• Child().method() returns 1
• class Child(Parent): inherits from Parent
• Parent has method()
• Child inherits this method
• Returns: 1

How it works:
• Child().method() calls method on Child instance
• Python searches for method in Child (not found)
• Python searches for method in Parent (found)
• Calls Parent.method() with Child instance as self
• Returns: 1

Example:
class Parent:
    def method(self):
        return 1
class Child(Parent): pass
Child().method()              # 1 (inherits parent method)

Common uses:
• Inheriting methods: class Child(Parent): (inherits parent methods)
• Method reuse: child can use parent methods directly
• Inheritance
• Code reuse

Example: If class Parent: def method(self): return 1; class Child(Parent): pass; Child().method(), then Child().method() returns 1 because the child class inherits parent methods, so instances of Child can call Parent's methods.

Key Concepts:
• Child inherits parent methods: • Child().method() returns 1 • class Child(Parent): inherits from Parent • Parent has method() • Child inherits this method • Returns: 1 How it works: • Child().method() calls method on Child instance • Python searches for method in Child (not found) • Python searches for method in Parent (found) • Calls Parent.method() with Child instance as self • Returns: 1 Example: class Parent: def method(self): return 1 class Child(Parent): pass Child().method() # 1 (inherits parent method) Common uses: • Inheriting methods: class Child(Parent): (inherits parent methods) • Method reuse: child can use parent methods directly • Inheritance • Code reuse Example: If class Parent: def method(self): return 1; class Child(Parent): pass; Child().method(), then Child().method() returns 1 because the child class inherits parent methods, so instances of Child can call Parent's methods.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: pass; class Child(Parent): pass; issubclass(Child, Parent)?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "issubclass() checks if class is subclass.",
    de: `The issubclass() function checks if a class is a subclass of another class. If class Parent: pass; class Child(Parent): pass; issubclass(Child, Parent), then issubclass(Child, Parent) returns True because Child inherits from Parent, making Child a subclass of Parent. issubclass() checks the inheritance relationship between classes, returning True if the first class inherits from (or is the same as) the second class.

issubclass() function:
• issubclass(Child, Parent) returns True
• issubclass() checks if Child is subclass of Parent
• Child inherits from Parent
• Child is subclass of Parent
• Returns: True

How it works:
• class Child(Parent): creates child inheriting from Parent
• issubclass(Child, Parent) checks inheritance
• Child is indeed a subclass of Parent
• Returns: True

Example:
class Parent: pass
class Child(Parent): pass
issubclass(Child, Parent)     # True (Child is subclass of Parent)

Common uses:
• Inheritance check: issubclass(Child, Parent) (check if subclass)
• Type checking: if issubclass(cls, Parent): ...
• Inheritance
• Type system

Example: If class Parent: pass; class Child(Parent): pass; issubclass(Child, Parent), then issubclass(Child, Parent) returns True because issubclass() checks if a class is a subclass of another class, and Child inherits from Parent.

Key Concepts:
• • Inheritance • Type system Example: If class Parent: pass; class Child(Parent): pass; issubclass(Child, Parent), then issubclass(Child, Parent) returns True because issubclass() checks if a class is a subclass of another class, and Child inherits from Parent.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: pass; class Child(Parent): pass; isinstance(Child(), Parent)?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "isinstance() checks if instance is of class (including parent).",
    de: `The isinstance() function checks if an instance is of a class (including parent classes). If class Parent: pass; class Child(Parent): pass; isinstance(Child(), Parent), then isinstance(Child(), Parent) returns True because isinstance() checks the entire inheritance chain. Since Child inherits from Parent, an instance of Child is also considered an instance of Parent. isinstance() is more flexible than type() == because it returns True for parent classes too.

isinstance() with inheritance:
• isinstance(Child(), Parent) returns True
• isinstance() checks inheritance chain
• Child() is instance of Child
• Child inherits from Parent
• Child() is also instance of Parent
• Returns: True

How it works:
• Child() creates instance of Child
• isinstance(instance, Parent) checks if instance is of Parent
• Child inherits from Parent
• Instance of Child is also instance of Parent
• Returns: True

Example:
class Parent: pass
class Child(Parent): pass
isinstance(Child(), Parent)   # True (Child inherits from Parent)
isinstance(Child(), Child)    # True (Child() is instance of Child)

Common uses:
• Type checking: if isinstance(obj, Parent): ... (works with inheritance)
• Polymorphism: isinstance(obj, BaseClass) (checks base classes)
• Inheritance
• Type system

Example: If class Parent: pass; class Child(Parent): pass; isinstance(Child(), Parent), then isinstance(Child(), Parent) returns True because isinstance() checks if an instance is of a class (including parent classes), and since Child inherits from Parent, an instance of Child is also an instance of Parent.

Key Concepts:
• (works with inheritance) • Polymorphism: isinstance(obj, BaseClass) (checks base classes) • Inheritance • Type system Example: If class Parent: pass; class Child(Parent): pass; isinstance(Child(), Parent), then isinstance(Child(), Parent) returns True because isinstance() checks if an instance is of a class (including parent classes), and since Child inherits from Parent, an instance of Child is also an instance of Parent.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: pass; class Child(Parent): pass; Child.__bases__?`, 
    o: ["(<class '__main__.Parent'>,)", "()", "Error", "None"], 
    c: 0, 
    e: "__bases__ contains tuple of parent classes.",
    de: `The __bases__ attribute contains a tuple of parent classes. If class Parent: pass; class Child(Parent): pass; Child.__bases__, then Child.__bases__ returns (<class '__main__.Parent'>,) because __bases__ stores the parent classes that a class inherits from. For a class with a single parent, it returns a tuple with one element. For multiple inheritance, it contains all parent classes. This is useful for introspection to see what classes a class inherits from.

__bases__ attribute:
• Child.__bases__ returns (<class '__main__.Parent'>,)
• __bases__ contains tuple of parent classes
• Child inherits from Parent
• Returns tuple with Parent
• Returns: (<class '__main__.Parent'>,)

How it works:
• class Child(Parent): creates child inheriting from Parent
• Python stores parent classes in Child.__bases__
• __bases__ is tuple of parent classes
• Contains: (Parent,)
• Returns: (<class '__main__.Parent'>,)

Example:
class Parent: pass
class Child(Parent): pass
Child.__bases__               # (<class '__main__.Parent'>,) (parent classes)

Common uses:
• Inheritance inspection: Child.__bases__ (see parent classes)
• Introspection: check what a class inherits from
• Inheritance
• Type system

Example: If class Parent: pass; class Child(Parent): pass; Child.__bases__, then Child.__bases__ returns (<class '__main__.Parent'>,) because __bases__ contains a tuple of parent classes, and Child inherits from Parent.

Key Concepts:
• __bases__ attribute: • Child.__bases__ returns (<class '__main__.Parent'>,) • __bases__ contains tuple of parent classes • Child inherits from Parent • Returns tuple with Parent • Returns: (<class '__main__.Parent'>,) How it works: • class Child(Parent): creates child inheriting from Parent • Python stores parent classes in Child.__bases__ • __bases__ is tuple of parent classes • Contains: (Parent,) • Returns: (<class '__main__.Parent'>,) Example: class Parent: pass class Child(Parent): pass Child.__bases__ # (<class '__main__.Parent'>,) (parent classes) Common uses: • Inheritance inspection: Child.__bases__ (see parent classes) • Introspection: check what a class inherits from • Inheritance • Type system Example: If class Parent: pass; class Child(Parent): pass; Child.__bases__, then Child.__bases__ returns (<class '__main__.Parent'>,) because __bases__ contains a tuple of parent classes, and Child inherits from Parent.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: x = 1; class Child(Parent): pass; obj = Child(); obj.x?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "Instance of child can access parent class attribute.",
    de: `An instance of a child class can access parent class attributes. If class Parent: x = 1; class Child(Parent): pass; obj = Child(); obj.x, then obj.x returns 1 because when you access an attribute on an instance, Python searches the inheritance chain. Since obj is an instance of Child and Child inherits from Parent, Python can access Parent's class attribute x = 1 through the child instance.

Instance accesses parent attribute:
• obj.x returns 1
• obj is instance of Child
• Child inherits from Parent
• Parent has class attribute x = 1
• obj.x accesses inherited attribute
• Returns: 1

How it works:
• obj = Child() creates instance of Child
• obj.x looks for attribute x
• Python searches: obj.__dict__ (not found) → Child.__dict__ (not found) → Parent.__dict__ (finds x = 1)
• Returns: 1

Example:
class Parent: x = 1
class Child(Parent): pass
obj = Child()
obj.x                        # 1 (accesses parent class attribute)

Common uses:
• Inherited attributes: obj.attr (accesses parent class attribute)
• Instance access: instances can access parent class attributes
• Inheritance
• Attribute access

Example: If class Parent: x = 1; class Child(Parent): pass; obj = Child(); obj.x, then obj.x returns 1 because an instance of a child class can access parent class attributes through the inheritance chain.

Key Concepts:
• Instance accesses parent attribute: • obj.x returns 1 • obj is instance of Child • Child inherits from Parent • Parent has class attribute x = 1 • obj.x accesses inherited attribute • Returns: 1 How it works: • obj = Child() creates instance of Child • obj.x looks for attribute x • Python searches: obj.__dict__ (not found) → Child.__dict__ (not found) → Parent.__dict__ (finds x = 1) • Returns: 1 Example: class Parent: x = 1 class Child(Parent): pass obj = Child() obj.x # 1 (accesses parent class attribute) Common uses: • Inherited attributes: obj.attr (accesses parent class attribute) • Instance access: instances can access parent class attributes • Inheritance • Attribute access Example: If class Parent: x = 1; class Child(Parent): pass; obj = Child(); obj.x, then obj.x returns 1 because an instance of a child class can access parent class attributes through the inheritance chain.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: def __init__(self): self.x = 1; class Child(Parent): pass; Child().x?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "Child inherits parent __init__ if not overridden.",
    de: `A child class inherits the parent's __init__ method if it doesn't override it. If class Parent: def __init__(self): self.x = 1; class Child(Parent): pass; Child().x, then Child().x returns 1 because when you create an instance of Child, Python looks for __init__ in Child (doesn't find it), then looks in Parent and finds it. Parent.__init__ is called, setting self.x = 1 on the Child instance. This allows the child to use the parent's initialization logic.

Child inherits parent __init__:
• Child().x returns 1
• Child doesn't define __init__
• Python uses Parent.__init__
• Parent.__init__ sets self.x = 1
• Returns: 1

How it works:
• Child() creates instance and looks for __init__
• Child doesn't have __init__
• Python searches Parent, finds __init__
• Calls Parent.__init__(self) with Child instance
• Sets self.x = 1 on Child instance
• Returns: 1

Example:
class Parent:
    def __init__(self):
        self.x = 1
class Child(Parent): pass  # No __init__ defined
Child().x                  # 1 (inherits parent __init__)

Common uses:
• Inherited initialization: class Child(Parent): pass (uses parent __init__)
• Constructor inheritance: child can use parent __init__
• Inheritance
• Object initialization

Example: If class Parent: def __init__(self): self.x = 1; class Child(Parent): pass; Child().x, then Child().x returns 1 because the child inherits the parent's __init__ if not overridden, so Parent.__init__ is called when creating a Child instance.

Key Concepts:
• Child inherits parent __init__: • Child().x returns 1 • Child doesn't define __init__ • Python uses Parent.__init__ • Parent.__init__ sets self.x = 1 • Returns: 1 How it works: • Child() creates instance and looks for __init__ • Child doesn't have __init__ • Python searches Parent, finds __init__ • Calls Parent.__init__(self) with Child instance • Sets self.x = 1 on Child instance • Returns: 1 Example: class Parent: def __init__(self): self.x = 1 class Child(Parent): pass # No __init__ defined Child().x # 1 (inherits parent __init__) Common uses: • Inherited initialization: class Child(Parent): pass (uses parent __init__) • Constructor inheritance: child can use parent __init__ • Inheritance • Object initialization Example: If class Parent: def __init__(self): self.x = 1; class Child(Parent): pass; Child().x, then Child().x returns 1 because the child inherits the parent's __init__ if not overridden, so Parent.__init__ is called when creating a Child instance.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: pass; class Child(Parent): pass; Parent.__subclasses__()?`, 
    o: ["[<class '__main__.Child'>]", "[]", "Error", "None"], 
    c: 0, 
    e: "__subclasses__() returns list of direct subclasses.",
    de: `The __subclasses__() method returns a list of direct subclasses of a class. If class Parent: pass; class Child(Parent): pass; Parent.__subclasses__(), then Parent.__subclasses__() returns [<class '__main__.Child'>] because __subclasses__() lists all classes that directly inherit from Parent. It only shows direct children, not grandchildren or deeper descendants. This is useful for introspection to see what classes inherit from a given class.

__subclasses__() method:
• Parent.__subclasses__() returns [<class '__main__.Child'>]
• __subclasses__() returns list of direct subclasses
• Child directly inherits from Parent
• Returns list with Child
• Returns: [<class '__main__.Child'>]

How it works:
• class Child(Parent): creates child inheriting from Parent
• Python tracks subclasses in Parent.__subclasses__
• __subclasses__() returns list of direct children
• Contains: [Child]
• Returns: [<class '__main__.Child'>]

Example:
class Parent: pass
class Child(Parent): pass
Parent.__subclasses__()      # [<class '__main__.Child'>] (direct subclasses)

Common uses:
• Subclass inspection: Parent.__subclasses__() (see direct children)
• Introspection: check what classes inherit from a class
• Inheritance
• Type system

Example: If class Parent: pass; class Child(Parent): pass; Parent.__subclasses__(), then Parent.__subclasses__() returns [<class '__main__.Child'>] because __subclasses__() returns a list of direct subclasses, and Child directly inherits from Parent.

Key Concepts:
• __subclasses__() method: • Parent.__subclasses__() returns [<class '__main__.Child'>] • __subclasses__() returns list of direct subclasses • Child directly inherits from Parent • Returns list with Child • Returns: [<class '__main__.Child'>] How it works: • class Child(Parent): creates child inheriting from Parent • Python tracks subclasses in Parent.__subclasses__ • __subclasses__() returns list of direct children • Contains: [Child] • Returns: [<class '__main__.Child'>] Example: class Parent: pass class Child(Parent): pass Parent.__subclasses__() # [<class '__main__.Child'>] (direct subclasses) Common uses: • Subclass inspection: Parent.__subclasses__() (see direct children) • Introspection: check what classes inherit from a class • Inheritance • Type system Example: If class Parent: pass; class Child(Parent): pass; Parent.__subclasses__(), then Parent.__subclasses__() returns [<class '__main__.Child'>] because __subclasses__() returns a list of direct subclasses, and Child directly inherits from Parent.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: x = 1; class Child(Parent): x = 2; Child.x?`, 
    o: ["2", "1", "Error", "None"], 
    c: 0, 
    e: "Child class attribute overrides parent attribute.",
    de: `A child class attribute overrides (hides) the parent class attribute. If class Parent: x = 1; class Child(Parent): x = 2; Child.x, then Child.x returns 2 because when a child class defines an attribute with the same name as a parent attribute, the child's attribute takes precedence. The child attribute shadows the parent attribute, so accessing Child.x returns the child's value (2), not the parent's value (1).

Child overrides parent attribute:
• Child.x returns 2
• Child defines class attribute x = 2
• Parent has class attribute x = 1
• Child's attribute shadows parent's
• Returns: 2

How it works:
• class Child(Parent): x = 2 defines child attribute
• Child has its own class attribute x = 2
• Child.x looks for attribute x
• Python finds x in Child.__dict__ first
• Returns: 2 (child's attribute, not parent's)

Example:
class Parent: x = 1
class Child(Parent): x = 2  # Overrides parent attribute
Child.x                     # 2 (child's attribute, not parent's)
Parent.x                    # 1 (parent's attribute unchanged)

Common uses:
• Attribute override: class Child(Parent): attr = value (overrides parent)
• Customization: child can override parent attributes
• Inheritance
• Attribute shadowing

Example: If class Parent: x = 1; class Child(Parent): x = 2; Child.x, then Child.x returns 2 because the child class attribute overrides the parent attribute, so the child's value (2) takes precedence over the parent's value (1).

Key Concepts:
• Child overrides parent attribute: • Child.x returns 2 • Child defines class attribute x = 2 • Parent has class attribute x = 1 • Child's attribute shadows parent's • Returns: 2 How it works: • class Child(Parent): x = 2 defines child attribute • Child has its own class attribute x = 2 • Child.x looks for attribute x • Python finds x in Child.__dict__ first • Returns: 2 (child's attribute, not parent's) Example: class Parent: x = 1 class Child(Parent): x = 2 # Overrides parent attribute Child.x # 2 (child's attribute, not parent's) Parent.x # 1 (parent's attribute unchanged) Common uses: • Attribute override: class Child(Parent): attr = value (overrides parent) • Customization: child can override parent attributes • Inheritance • Attribute shadowing Example: If class Parent: x = 1; class Child(Parent): x = 2; Child.x, then Child.x returns 2 because the child class attribute overrides the parent attribute, so the child's value (2) takes precedence over the parent's value (1).

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  
  // 11-20: Method Overriding
  (_i: number) => ({ 
    q: `What is method overriding?`, 
    o: ["Child redefines parent method", "Parent redefines child method", "Error", "Methods cannot be redefined"], 
    c: 0, 
    e: "Overriding redefines parent method in child.",
    de: `Method overriding is when a child class redefines a method that already exists in the parent class. When a child class defines a method with the same name as a parent method, the child's method overrides (replaces) the parent's method. This allows the child to provide different behavior while keeping the same method name. When you call the method on a child instance, Python uses the child's version, not the parent's. This is a key feature of polymorphism - the same method name can have different implementations in different classes.

Method overriding:
• Child redefines parent method
• Same method name in parent and child
• Child's method takes precedence
• Provides different behavior
• Key feature of polymorphism

How it works:
• Parent defines method()
• Child defines method() with same name
• Child's method overrides parent's method
• Calling method() on Child instance uses Child's version
• Parent's method is hidden (but can be accessed via super())

Example:
class Parent:
    def method(self):
        return 1
class Child(Parent):
    def method(self):
        return 2  # Overrides parent method
Child().method()  # 2 (uses child's version, not parent's)

Common uses:
• Customization: class Child(Parent): def method(self): return custom_behavior
• Polymorphism: same method name, different implementations
• Method overriding
• Object-oriented programming

Example: Method overriding is when a child class redefines a method that already exists in the parent class, allowing the child to provide different behavior while keeping the same method name.

Key Concepts:
• Method overriding: • Child redefines parent method • Same method name in parent and child • Child's method takes precedence • Provides different behavior • Key feature of polymorphism How it works: • Parent defines method() • Child defines method() with same name • Child's method overrides parent's method • Calling method() on Child instance uses Child's version • Parent's method is hidden (but can be accessed via super()) Example: class Parent: def method(self): return 1 class Child(Parent): def method(self): return 2 # Overrides parent method Child().method() # 2 (uses child's version, not parent's) Common uses: • Customization: class Child(Parent): def method(self): return custom_behavior • Polymorphism: same method name, different implementations • Method overriding • Object-oriented programming Example: Method overriding is when a child class redefines a method that already exists in the parent class, allowing the child to provide different behavior while keeping the same method name.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: def method(self): return 1; class Child(Parent): def method(self): return 2; Child().method()?`, 
    o: ["2", "1", "Error", "None"], 
    c: 0, 
    e: "Child method overrides parent method.",
    de: `A child method overrides the parent method when it has the same name. If class Parent: def method(self): return 1; class Child(Parent): def method(self): return 2; Child().method(), then Child().method() returns 2 because the child's method overrides the parent's method. When Python looks for method() on a Child instance, it finds method() in Child first and uses that, never reaching the parent's method. The child's version takes precedence.

Child overrides parent method:
• Child().method() returns 2
• Child defines method() with same name
• Child's method overrides parent's method
• Child's version takes precedence
• Returns: 2

How it works:
• Child().method() calls method on Child instance
• Python searches for method in Child (found)
• Uses Child.method() (doesn't check Parent)
• Method executes: return 2
• Returns: 2

Example:
class Parent:
    def method(self):
        return 1
class Child(Parent):
    def method(self):
        return 2  # Overrides parent
Child().method()              # 2 (uses child's method)
Parent().method()             # 1 (uses parent's method)

Common uses:
• Method override: class Child(Parent): def method(self): return new_value
• Customization: child provides different behavior
• Method overriding
• Polymorphism

Example: If class Parent: def method(self): return 1; class Child(Parent): def method(self): return 2; Child().method(), then Child().method() returns 2 because the child method overrides the parent method, so the child's version takes precedence.

Key Concepts:
• Child overrides parent method: • Child().method() returns 2 • Child defines method() with same name • Child's method overrides parent's method • Child's version takes precedence • Returns: 2 How it works: • Child().method() calls method on Child instance • Python searches for method in Child (found) • Uses Child.method() (doesn't check Parent) • Method executes: return 2 • Returns: 2 Example: class Parent: def method(self): return 1 class Child(Parent): def method(self): return 2 # Overrides parent Child().method() # 2 (uses child's method) Parent().method() # 1 (uses parent's method) Common uses: • Method override: class Child(Parent): def method(self): return new_value • Customization: child provides different behavior • Method overriding • Polymorphism Example: If class Parent: def method(self): return 1; class Child(Parent): def method(self): return 2; Child().method(), then Child().method() returns 2 because the child method overrides the parent method, so the child's version takes precedence.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: def method(self): return 1; class Child(Parent): def method(self): return super().method(); Child().method()?`, 
    o: ["1", "2", "Error", "None"], 
    c: 0, 
    e: "super() calls parent method from child.",
    de: `The super() function allows a child method to call the parent method. If class Parent: def method(self): return 1; class Child(Parent): def method(self): return super().method(); Child().method(), then Child().method() returns 1 because super().method() calls the parent's method() even though the child has overridden it. super() provides a way to access parent class methods and attributes from within an overridden child method, allowing you to extend parent behavior rather than completely replace it.

super() calls parent method:
• Child().method() returns 1
• Child's method calls super().method()
• super() accesses parent class
• Calls Parent.method() from within child
• Returns: 1

How it works:
• Child().method() calls method on Child instance
• Child.method() executes: return super().method()
• super() gets parent class (Parent)
• Calls Parent.method() with Child instance as self
• Parent.method() returns 1
• Returns: 1

Example:
class Parent:
    def method(self):
        return 1
class Child(Parent):
    def method(self):
        return super().method()  # Calls parent method
Child().method()              # 1 (calls parent via super())

Common uses:
• Extending methods: def method(self): result = super().method(); return modified(result)
• Parent access: super().method() (call parent from child)
• Method overriding
• Inheritance

Example: If class Parent: def method(self): return 1; class Child(Parent): def method(self): return super().method(); Child().method(), then Child().method() returns 1 because super() calls the parent method from the child, allowing access to the parent's implementation.

Key Concepts:
• super() calls parent method: • Child().method() returns 1 • Child's method calls super().method() • super() accesses parent class • Calls Parent.method() from within child • Returns: 1 How it works: • Child().method() calls method on Child instance • Child.method() executes: return super().method() • super() gets parent class (Parent) • Calls Parent.method() with Child instance as self • Parent.method() returns 1 • Returns: 1 Example: class Parent: def method(self): return 1 class Child(Parent): def method(self): return super().method() # Calls parent method Child().method() # 1 (calls parent via super()) Common uses: • Extending methods: def method(self): result = super().method(); return modified(result) • Parent access: super().method() (call parent from child) • Method overriding • Inheritance Example: If class Parent: def method(self): return 1; class Child(Parent): def method(self): return super().method(); Child().method(), then Child().method() returns 1 because super() calls the parent method from the child, allowing access to the parent's implementation.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: def method(self): return 1; class Child(Parent): def method(self): return super().method() + 1; Child().method()?`, 
    o: ["2", "1", "Error", "None"], c: 0, 
    e: "Child can call parent method and modify result.",
    de: `A child method can call the parent method and modify its result. If class Parent: def method(self): return 1; class Child(Parent): def method(self): return super().method() + 1; Child().method(), then Child().method() returns 2 because super().method() calls the parent method (returns 1), and then the child adds 1 to it (1 + 1 = 2). This allows the child to extend or modify the parent's behavior rather than completely replace it - a common pattern for extending functionality.

Child modifies parent result:
• Child().method() returns 2
• Child's method calls super().method()
• Parent method returns 1
• Child adds 1: 1 + 1 = 2
• Returns: 2

How it works:
• Child().method() calls method on Child instance
• Child.method() executes: return super().method() + 1
• super().method() calls Parent.method(), returns 1
• Child adds 1: 1 + 1 = 2
• Returns: 2

Example:
class Parent:
    def method(self):
        return 1
class Child(Parent):
    def method(self):
        return super().method() + 1  # Extends parent
Child().method()              # 2 (parent's 1 + 1)

Common uses:
• Extending methods: def method(self): return super().method() + modification
• Behavior extension: child extends parent behavior
• Method overriding
• Inheritance

Example: If class Parent: def method(self): return 1; class Child(Parent): def method(self): return super().method() + 1; Child().method(), then Child().method() returns 2 because the child can call the parent method and modify the result (1 + 1 = 2).

Key Concepts:
• Child modifies parent result: • Child().method() returns 2 • Child's method calls super().method() • Parent method returns 1 • Child adds 1: 1 + 1 = 2 • Returns: 2 How it works: • Child().method() calls method on Child instance • Child.method() executes: return super().method() + 1 • super().method() calls Parent.method(), returns 1 • Child adds 1: 1 + 1 = 2 • Returns: 2 Example: class Parent: def method(self): return 1 class Child(Parent): def method(self): return super().method() + 1 # Extends parent Child().method() # 2 (parent's 1 + 1) Common uses: • Extending methods: def method(self): return super().method() + modification • Behavior extension: child extends parent behavior • Method overriding • Inheritance Example: If class Parent: def method(self): return 1; class Child(Parent): def method(self): return super().method() + 1; Child().method(), then Child().method() returns 2 because the child can call the parent method and modify the result (1 + 1 = 2).

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: def __init__(self): self.x = 1; class Child(Parent): def __init__(self): self.y = 2; Child().x?`, 
    o: ["AttributeError", "1", "Error", "None"], 
    c: 0, 
    e: "Overriding __init__ doesn't call parent __init__ automatically.",
    de: `Overriding __init__ doesn't automatically call the parent __init__. If class Parent: def __init__(self): self.x = 1; class Child(Parent): def __init__(self): self.y = 2; Child().x, then Child().x raises an AttributeError because when Child defines its own __init__, it completely replaces the parent's __init__ - the parent's __init__ is not called automatically. Only the child's __init__ runs, which sets self.y = 2 but doesn't set self.x = 1. To call the parent's __init__, you must explicitly call super().__init__().

Overriding __init__ doesn't auto-call parent:
• Child().x raises AttributeError
• Child's __init__ overrides parent's __init__
• Parent's __init__ not called automatically
• Only Child.__init__ runs (sets self.y = 2)
• self.x is not set
• Raises AttributeError

How it works:
• Child() creates instance and calls __init__
• Child has its own __init__ (overrides parent)
• Python calls Child.__init__ (only)
• Child.__init__ sets self.y = 2 (doesn't set self.x)
• Parent.__init__ is not called
• Child().x raises AttributeError

Example:
class Parent:
    def __init__(self):
        self.x = 1
class Child(Parent):
    def __init__(self):
        self.y = 2  # Overrides, doesn't call parent
Child().x                    # AttributeError (parent __init__ not called)

Common uses:
• Understanding initialization: overriding __init__ doesn't auto-call parent
• Explicit parent call: super().__init__() (must call manually)
• Method overriding
• Object initialization

Example: If class Parent: def __init__(self): self.x = 1; class Child(Parent): def __init__(self): self.y = 2; Child().x, then Child().x raises an AttributeError because overriding __init__ doesn't call the parent __init__ automatically - you must call super().__init__() explicitly.

Key Concepts:
• Overriding __init__ doesn't auto-call parent: • Child().x raises AttributeError • Child's __init__ overrides parent's __init__ • Parent's __init__ not called automatically • Only Child.__init__ runs (sets self.y = 2) • self.x is not set • Raises AttributeError How it works: • Child() creates instance and calls __init__ • Child has its own __init__ (overrides parent) • Python calls Child.__init__ (only) • Child.__init__ sets self.y = 2 (doesn't set self.x) • Parent.__init__ is not called • Child().x raises AttributeError Example: class Parent: def __init__(self): self.x = 1 class Child(Parent): def __init__(self): self.y = 2 # Overrides, doesn't call parent Child().x # AttributeError (parent __init__ not called) Common uses: • Understanding initialization: overriding __init__ doesn't auto-call parent • Explicit parent call: super().__init__() (must call manually) • Method overriding • Object initialization Example: If class Parent: def __init__(self): self.x = 1; class Child(Parent): def __init__(self): self.y = 2; Child().x, then Child().x raises an AttributeError because overriding __init__ doesn't call the parent __init__ automatically - you must call super().__init__() explicitly.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: def __init__(self): self.x = 1; class Child(Parent): def __init__(self): super().__init__(); self.y = 2; obj = Child(); obj.x?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "super().__init__() calls parent __init__.",
    de: `super().__init__() explicitly calls the parent's __init__ method. If class Parent: def __init__(self): self.x = 1; class Child(Parent): def __init__(self): super().__init__(); self.y = 2; obj = Child(); obj.x, then obj.x returns 1 because super().__init__() calls the parent's __init__, which sets self.x = 1. This is the correct way to ensure parent initialization happens when you override __init__ in a child class. The child can then set its own attributes after calling the parent's initialization.

super().__init__() calls parent:
• obj.x returns 1
• Child.__init__ calls super().__init__()
• Parent.__init__ sets self.x = 1
• Child.__init__ sets self.y = 2
• Returns: 1

How it works:
• Child() creates instance and calls __init__
• Child.__init__ executes: super().__init__()
• super().__init__() calls Parent.__init__()
• Parent.__init__ sets self.x = 1
• Child.__init__ sets self.y = 2
• obj.x returns 1

Example:
class Parent:
    def __init__(self):
        self.x = 1
class Child(Parent):
    def __init__(self):
        super().__init__()  # Calls parent __init__
        self.y = 2
obj = Child()
obj.x                        # 1 (parent __init__ called)
obj.y                        # 2 (child __init__ sets)

Common uses:
• Parent initialization: def __init__(self): super().__init__(); self.child_attr = value
• Constructor chaining: ensure parent initialization happens
• Method overriding
• Object initialization

Example: If class Parent: def __init__(self): self.x = 1; class Child(Parent): def __init__(self): super().__init__(); self.y = 2; obj = Child(); obj.x, then obj.x returns 1 because super().__init__() calls the parent's __init__, ensuring parent initialization happens.

Key Concepts:
• super().__init__() calls parent: • obj.x returns 1 • Child.__init__ calls super().__init__() • Parent.__init__ sets self.x = 1 • Child.__init__ sets self.y = 2 • Returns: 1 How it works: • Child() creates instance and calls __init__ • Child.__init__ executes: super().__init__() • super().__init__() calls Parent.__init__() • Parent.__init__ sets self.x = 1 • Child.__init__ sets self.y = 2 • obj.x returns 1 Example: class Parent: def __init__(self): self.x = 1 class Child(Parent): def __init__(self): super().__init__() # Calls parent __init__ self.y = 2 obj = Child() obj.x # 1 (parent __init__ called) obj.y # 2 (child __init__ sets) Common uses: • Parent initialization: def __init__(self): super().__init__(); self.child_attr = value • Constructor chaining: ensure parent initialization happens • Method overriding • Object initialization Example: If class Parent: def __init__(self): self.x = 1; class Child(Parent): def __init__(self): super().__init__(); self.y = 2; obj = Child(); obj.x, then obj.x returns 1 because super().__init__() calls the parent's __init__, ensuring parent initialization happens.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: def method(self): return 'parent'; class Child(Parent): pass; Child().method()?`, 
    o: ["'parent'", "Error", "None", "'child'"], 
    c: 0, 
    e: "Child without method uses parent method.",
    de: `A child class without its own method uses the parent's method. If class Parent: def method(self): return 'parent'; class Child(Parent): pass; Child().method(), then Child().method() returns 'parent' because Child doesn't define its own method(), so when you call method() on a Child instance, Python searches for method in Child (not found), then searches in Parent (found), and uses Parent.method(). Inheritance allows the child to use parent methods when they're not overridden.

Child uses parent method:
• Child().method() returns 'parent'
• Child doesn't define method()
• Python searches inheritance chain
• Finds method() in Parent
• Uses Parent.method()
• Returns: 'parent'

How it works:
• Child().method() calls method on Child instance
• Python searches for method in Child (not found)
• Python searches for method in Parent (found)
• Calls Parent.method() with Child instance as self
• Method executes: return 'parent'
• Returns: 'parent'

Example:
class Parent:
    def method(self):
        return 'parent'
class Child(Parent): pass  # No method defined
Child().method()           # 'parent' (uses parent method)

Common uses:
• Inherited methods: class Child(Parent): pass (uses parent methods)
• Method reuse: child can use parent methods without defining them
• Inheritance
• Code reuse

Example: If class Parent: def method(self): return 'parent'; class Child(Parent): pass; Child().method(), then Child().method() returns 'parent' because the child without a method uses the parent method through inheritance.

Key Concepts:
• Child uses parent method: • Child().method() returns 'parent' • Child doesn't define method() • Python searches inheritance chain • Finds method() in Parent • Uses Parent.method() • Returns: 'parent' How it works: • Child().method() calls method on Child instance • Python searches for method in Child (not found) • Python searches for method in Parent (found) • Calls Parent.method() with Child instance as self • Method executes: return 'parent' • Returns: 'parent' Example: class Parent: def method(self): return 'parent' class Child(Parent): pass # No method defined Child().method() # 'parent' (uses parent method) Common uses: • Inherited methods: class Child(Parent): pass (uses parent methods) • Method reuse: child can use parent methods without defining them • Inheritance • Code reuse Example: If class Parent: def method(self): return 'parent'; class Child(Parent): pass; Child().method(), then Child().method() returns 'parent' because the child without a method uses the parent method through inheritance.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: def method(self): return 1; class Child(Parent): def method(self): return super().method(); Parent().method()?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "Parent instance uses parent method (no override).",
    de: `A parent instance uses the parent's method, not the child's override. If class Parent: def method(self): return 1; class Child(Parent): def method(self): return super().method(); Parent().method(), then Parent().method() returns 1 because Parent().method() calls method on a Parent instance, which uses Parent.method() directly. The child's override doesn't affect parent instances - method overriding only affects instances of the child class. Each class has its own method implementation.

Parent uses parent method:
• Parent().method() returns 1
• Parent instance uses Parent.method()
• Child's override doesn't affect parent instances
• Parent.method() returns 1
• Returns: 1

How it works:
• Parent().method() calls method on Parent instance
• Python searches for method in Parent (found)
• Uses Parent.method() (doesn't check Child)
• Method executes: return 1
• Returns: 1

Example:
class Parent:
    def method(self):
        return 1
class Child(Parent):
    def method(self):
        return super().method()  # Overrides parent
Parent().method()              # 1 (uses parent method, not child's)
Child().method()               # 1 (uses child method, calls parent)

Common uses:
• Independent methods: parent and child have separate method implementations
• Method overriding: affects child instances only
• Inheritance
• Method resolution

Example: If class Parent: def method(self): return 1; class Child(Parent): def method(self): return super().method(); Parent().method(), then Parent().method() returns 1 because a parent instance uses the parent method - the child's override doesn't affect parent instances.

Key Concepts:
• Parent uses parent method: • Parent().method() returns 1 • Parent instance uses Parent.method() • Child's override doesn't affect parent instances • Parent.method() returns 1 • Returns: 1 How it works: • Parent().method() calls method on Parent instance • Python searches for method in Parent (found) • Uses Parent.method() (doesn't check Child) • Method executes: return 1 • Returns: 1 Example: class Parent: def method(self): return 1 class Child(Parent): def method(self): return super().method() # Overrides parent Parent().method() # 1 (uses parent method, not child's) Child().method() # 1 (uses child method, calls parent) Common uses: • Independent methods: parent and child have separate method implementations • Method overriding: affects child instances only • Inheritance • Method resolution Example: If class Parent: def method(self): return 1; class Child(Parent): def method(self): return super().method(); Parent().method(), then Parent().method() returns 1 because a parent instance uses the parent method - the child's override doesn't affect parent instances.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: @classmethod; def method(cls): return 1; class Child(Parent): @classmethod; def method(cls): return 2; Child.method()?`, 
    o: ["2", "1", "Error", "None"], 
    c: 0, 
    e: "Class methods can be overridden.",
    de: `Class methods can be overridden in child classes, just like instance methods. If class Parent: @classmethod; def method(cls): return 1; class Child(Parent): @classmethod; def method(cls): return 2; Child.method(), then Child.method() returns 2 because the child class defines its own class method with the same name, which overrides the parent's class method. When you call Child.method(), Python uses the child's version, not the parent's. Class methods follow the same overriding rules as instance methods.

Class methods can be overridden:
• Child.method() returns 2
• Child defines @classmethod method()
• Child's class method overrides parent's
• Child's version takes precedence
• Returns: 2

How it works:
• Child.method() calls class method on Child class
• Python finds method in Child (found)
• Uses Child.method() (doesn't check Parent)
• Method executes: return 2
• Returns: 2

Example:
class Parent:
    @classmethod
    def method(cls):
        return 1
class Child(Parent):
    @classmethod
    def method(cls):
        return 2  # Overrides parent class method
Child.method()              # 2 (uses child's class method)
Parent.method()             # 1 (uses parent's class method)

Common uses:
• Class method override: @classmethod def method(cls): return value (overrides parent)
• Customization: child provides different class method behavior
• Method overriding
• Class methods

Example: If class Parent: @classmethod; def method(cls): return 1; class Child(Parent): @classmethod; def method(cls): return 2; Child.method(), then Child.method() returns 2 because class methods can be overridden, and the child's class method takes precedence.

Key Concepts:
• Class methods can be overridden: • Child.method() returns 2 • Child defines @classmethod method() • Child's class method overrides parent's • Child's version takes precedence • Returns: 2 How it works: • Child.method() calls class method on Child class • Python finds method in Child (found) • Uses Child.method() (doesn't check Parent) • Method executes: return 2 • Returns: 2 Example: class Parent: @classmethod def method(cls): return 1 class Child(Parent): @classmethod def method(cls): return 2 # Overrides parent class method Child.method() # 2 (uses child's class method) Parent.method() # 1 (uses parent's class method) Common uses: • Class method override: @classmethod def method(cls): return value (overrides parent) • Customization: child provides different class method behavior • Method overriding • Class methods Example: If class Parent: @classmethod; def method(cls): return 1; class Child(Parent): @classmethod; def method(cls): return 2; Child.method(), then Child.method() returns 2 because class methods can be overridden, and the child's class method takes precedence.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: @staticmethod; def method(): return 1; class Child(Parent): @staticmethod; def method(): return 2; Child.method()?`, 
    o: ["2", "1", "Error", "None"], 
    c: 0, 
    e: "Static methods can be overridden.",
    de: `Static methods can be overridden in child classes, just like instance methods and class methods. If class Parent: @staticmethod; def method(): return 1; class Child(Parent): @staticmethod; def method(): return 2; Child.method(), then Child.method() returns 2 because the child class defines its own static method with the same name, which overrides the parent's static method. When you call Child.method(), Python uses the child's version. Static methods follow the same overriding rules as other methods - they can be overridden in child classes.

Static methods can be overridden:
• Child.method() returns 2
• Child defines @staticmethod method()
• Child's static method overrides parent's
• Child's version takes precedence
• Returns: 2

How it works:
• Child.method() calls static method on Child class
• Python finds method in Child (found)
• Uses Child.method() (doesn't check Parent)
• Method executes: return 2
• Returns: 2

Example:
class Parent:
    @staticmethod
    def method():
        return 1
class Child(Parent):
    @staticmethod
    def method():
        return 2  # Overrides parent static method
Child.method()              # 2 (uses child's static method)
Parent.method()             # 1 (uses parent's static method)

Common uses:
• Static method override: @staticmethod def method(): return value (overrides parent)
• Customization: child provides different static method behavior
• Method overriding
• Static methods

Example: If class Parent: @staticmethod; def method(): return 1; class Child(Parent): @staticmethod; def method(): return 2; Child.method(), then Child.method() returns 2 because static methods can be overridden, and the child's static method takes precedence.

Key Concepts:
• Static methods can be overridden: • Child.method() returns 2 • Child defines @staticmethod method() • Child's static method overrides parent's • Child's version takes precedence • Returns: 2 How it works: • Child.method() calls static method on Child class • Python finds method in Child (found) • Uses Child.method() (doesn't check Parent) • Method executes: return 2 • Returns: 2 Example: class Parent: @staticmethod def method(): return 1 class Child(Parent): @staticmethod def method(): return 2 # Overrides parent static method Child.method() # 2 (uses child's static method) Parent.method() # 1 (uses parent's static method) Common uses: • Static method override: @staticmethod def method(): return value (overrides parent) • Customization: child provides different static method behavior • Method overriding • Static methods Example: If class Parent: @staticmethod; def method(): return 1; class Child(Parent): @staticmethod; def method(): return 2; Child.method(), then Child.method() returns 2 because static methods can be overridden, and the child's static method takes precedence.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  
  // 21-30: super() Function
  (_i: number) => ({ 
    q: `What is class Parent: def method(self): return 1; class Child(Parent): def method(self): return super().method(); Child().method()?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "super() without arguments in method gets parent.",
    de: `The super() function without arguments automatically gets the parent class when called from within a method. If class Parent: def method(self): return 1; class Child(Parent): def method(self): return super().method(); Child().method(), then Child().method() returns 1 because super() without arguments in a method automatically determines the parent class from the current class and instance. When called from Child.method(), super() automatically refers to Parent, so super().method() calls Parent.method().

super() without arguments:
• Child().method() returns 1
• super() in method automatically gets parent
• super() refers to Parent (from Child)
• super().method() calls Parent.method()
• Returns: 1

How it works:
• Child().method() calls method on Child instance
• Child.method() executes: return super().method()
• super() automatically gets Parent (from Child)
• super().method() calls Parent.method()
• Parent.method() returns 1
• Returns: 1

Example:
class Parent:
    def method(self):
        return 1
class Child(Parent):
    def method(self):
        return super().method()  # super() gets Parent automatically
Child().method()              # 1 (calls Parent.method())

Common uses:
• Parent access: super().method() (automatically gets parent)
• Method extension: def method(self): return super().method() + extension
• super() function
• Inheritance

Example: If class Parent: def method(self): return 1; class Child(Parent): def method(self): return super().method(); Child().method(), then Child().method() returns 1 because super() without arguments in a method automatically gets the parent class.

Key Concepts:
• super() without arguments: • Child().method() returns 1 • super() in method automatically gets parent • super() refers to Parent (from Child) • super().method() calls Parent.method() • Returns: 1 How it works: • Child().method() calls method on Child instance • Child.method() executes: return super().method() • super() automatically gets Parent (from Child) • super().method() calls Parent.method() • Parent.method() returns 1 • Returns: 1 Example: class Parent: def method(self): return 1 class Child(Parent): def method(self): return super().method() # super() gets Parent automatically Child().method() # 1 (calls Parent.method()) Common uses: • Parent access: super().method() (automatically gets parent) • Method extension: def method(self): return super().method() + extension • super() function • Inheritance Example: If class Parent: def method(self): return 1; class Child(Parent): def method(self): return super().method(); Child().method(), then Child().method() returns 1 because super() without arguments in a method automatically gets the parent class.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: def method(self): return 1; class Child(Parent): def method(self): return super(Child, self).method(); Child().method()?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "super(Child, self) explicitly specifies class and instance.",
    de: `The super() function can be called with explicit arguments: super(Child, self) specifies the class (Child) and instance (self) explicitly. If class Parent: def method(self): return 1; class Child(Parent): def method(self): return super(Child, self).method(); Child().method(), then Child().method() returns 1 because super(Child, self) explicitly tells Python to look for the parent of Child (which is Parent) and use self as the instance. This is the explicit form of super(), equivalent to super() without arguments in Python 3, but more explicit about which class to look for the parent of.

super() with explicit arguments:
• Child().method() returns 1
• super(Child, self) explicitly specifies class and instance
• Child is the class, self is the instance
• super() looks for parent of Child (Parent)
• super().method() calls Parent.method()
• Returns: 1

How it works:
• Child().method() calls method on Child instance
• Child.method() executes: return super(Child, self).method()
• super(Child, self) gets parent of Child (Parent), uses self as instance
• super().method() calls Parent.method() with self as instance
• Parent.method() returns 1
• Returns: 1

Example:
class Parent:
    def method(self):
        return 1
class Child(Parent):
    def method(self):
        return super(Child, self).method()  # Explicit super()
Child().method()              # 1 (calls Parent.method())

Common uses:
• Explicit super: super(Class, self).method() (Python 2 style, works in Python 3)
• Clarity: explicitly specify class and instance
• super() function
• Inheritance

Example: If class Parent: def method(self): return 1; class Child(Parent): def method(self): return super(Child, self).method(); Child().method(), then Child().method() returns 1 because super(Child, self) explicitly specifies the class and instance, telling Python to look for the parent of Child and use self as the instance.

Key Concepts:
• super() with explicit arguments: • Child().method() returns 1 • super(Child, self) explicitly specifies class and instance • Child is the class, self is the instance • super() looks for parent of Child (Parent) • super().method() calls Parent.method() • Returns: 1 How it works: • Child().method() calls method on Child instance • Child.method() executes: return super(Child, self).method() • super(Child, self) gets parent of Child (Parent), uses self as instance • super().method() calls Parent.method() with self as instance • Parent.method() returns 1 • Returns: 1 Example: class Parent: def method(self): return 1 class Child(Parent): def method(self): return super(Child, self).method() # Explicit super() Child().method() # 1 (calls Parent.method()) Common uses: • Explicit super: super(Class, self).method() (Python 2 style, works in Python 3) • Clarity: explicitly specify class and instance • super() function • Inheritance Example: If class Parent: def method(self): return 1; class Child(Parent): def method(self): return super(Child, self).method(); Child().method(), then Child().method() returns 1 because super(Child, self) explicitly specifies the class and instance, telling Python to look for the parent of Child and use self as the instance.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: x = 1; class Child(Parent): def method(self): return super().x; Child().method()?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "super() can access parent class attributes.",
    de: `The super() function can access parent class attributes. If class Parent: x = 1; class Child(Parent): def method(self): return super().x; Child().method(), then Child().method() returns 1 because super() returns a proxy object that gives access to the parent class, and super().x accesses the parent's class attribute x = 1. This allows you to access parent class attributes even if the child has overridden them with its own attribute.

super() accesses parent attributes:
• Child().method() returns 1
• super() returns parent proxy
• super().x accesses parent class attribute
• Parent has x = 1
• Returns: 1

How it works:
• Child().method() calls method on Child instance
• Child.method() executes: return super().x
• super() gets parent class (Parent)
• super().x accesses Parent.x
• Parent.x = 1
• Returns: 1

Example:
class Parent: x = 1
class Child(Parent):
    def method(self):
        return super().x  # Accesses parent class attribute
Child().method()          # 1 (accesses Parent.x)

Common uses:
• Parent attribute access: super().attr (accesses parent class attribute)
• Override bypass: super().x (accesses parent even if child overrides)
• super() function
• Inheritance

Example: If class Parent: x = 1; class Child(Parent): def method(self): return super().x; Child().method(), then Child().method() returns 1 because super() can access parent class attributes, and super().x accesses Parent.x = 1.

Key Concepts:
• super() accesses parent attributes: • Child().method() returns 1 • super() returns parent proxy • super().x accesses parent class attribute • Parent has x = 1 • Returns: 1 How it works: • Child().method() calls method on Child instance • Child.method() executes: return super().x • super() gets parent class (Parent) • super().x accesses Parent.x • Parent.x = 1 • Returns: 1 Example: class Parent: x = 1 class Child(Parent): def method(self): return super().x # Accesses parent class attribute Child().method() # 1 (accesses Parent.x) Common uses: • Parent attribute access: super().attr (accesses parent class attribute) • Override bypass: super().x (accesses parent even if child overrides) • super() function • Inheritance Example: If class Parent: x = 1; class Child(Parent): def method(self): return super().x; Child().method(), then Child().method() returns 1 because super() can access parent class attributes, and super().x accesses Parent.x = 1.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: def __init__(self, x): self.x = x; class Child(Parent): def __init__(self, x, y): super().__init__(x); self.y = y; obj = Child(1, 2); obj.x?`, 
    o: ["1", "2", "Error", "None"], 
    c: 0, 
    e: "super().__init__() passes arguments to parent.",
    de: `super().__init__() can pass arguments to the parent's __init__ method. If class Parent: def __init__(self, x): self.x = x; class Child(Parent): def __init__(self, x, y): super().__init__(x); self.y = y; obj = Child(1, 2); obj.x, then obj.x returns 1 because Child.__init__ receives arguments (1, 2), calls super().__init__(x) which passes x = 1 to Parent.__init__, setting self.x = 1. Then Child.__init__ sets self.y = 2. This allows the child to initialize parent attributes with specific values.

super().__init__() with arguments:
• obj.x returns 1
• Child(1, 2) calls Child.__init__(1, 2)
• Child.__init__ calls super().__init__(1) (passes x)
• Parent.__init__ sets self.x = 1
• Child.__init__ sets self.y = 2
• Returns: 1

How it works:
• Child(1, 2) calls Child.__init__(1, 2)
• Child.__init__ executes: super().__init__(1)
• super().__init__(1) calls Parent.__init__(1)
• Parent.__init__ sets self.x = 1
• Child.__init__ sets self.y = 2
• obj.x returns 1

Example:
class Parent:
    def __init__(self, x):
        self.x = x
class Child(Parent):
    def __init__(self, x, y):
        super().__init__(x)  # Passes x to parent
        self.y = y
obj = Child(1, 2)
obj.x                        # 1 (parent __init__ sets with x=1)
obj.y                        # 2 (child __init__ sets)

Common uses:
• Parent initialization: def __init__(self, x, y): super().__init__(x); self.y = y
• Constructor chaining: pass arguments to parent __init__
• Method overriding
• Object initialization

Example: If class Parent: def __init__(self, x): self.x = x; class Child(Parent): def __init__(self, x, y): super().__init__(x); self.y = y; obj = Child(1, 2); obj.x, then obj.x returns 1 because super().__init__() passes arguments to the parent, so x = 1 is passed to Parent.__init__, setting obj.x = 1.

Key Concepts:
• super().__init__() with arguments: • obj.x returns 1 • Child(1, 2) calls Child.__init__(1, 2) • Child.__init__ calls super().__init__(1) (passes x) • Parent.__init__ sets self.x = 1 • Child.__init__ sets self.y = 2 • Returns: 1 How it works: • Child(1, 2) calls Child.__init__(1, 2) • Child.__init__ executes: super().__init__(1) • super().__init__(1) calls Parent.__init__(1) • Parent.__init__ sets self.x = 1 • Child.__init__ sets self.y = 2 • obj.x returns 1 Example: class Parent: def __init__(self, x): self.x = x class Child(Parent): def __init__(self, x, y): super().__init__(x) # Passes x to parent self.y = y obj = Child(1, 2) obj.x # 1 (parent __init__ sets with x=1) obj.y # 2 (child __init__ sets) Common uses: • Parent initialization: def __init__(self, x, y): super().__init__(x); self.y = y • Constructor chaining: pass arguments to parent __init__ • Method overriding • Object initialization Example: If class Parent: def __init__(self, x): self.x = x; class Child(Parent): def __init__(self, x, y): super().__init__(x); self.y = y; obj = Child(1, 2); obj.x, then obj.x returns 1 because super().__init__() passes arguments to the parent, so x = 1 is passed to Parent.__init__, setting obj.x = 1.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: @classmethod; def method(cls): return 1; class Child(Parent): @classmethod; def method(cls): return super().method(); Child.method()?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "super() works in class methods.",
    de: `The super() function works in class methods. If class Parent: @classmethod; def method(cls): return 1; class Child(Parent): @classmethod; def method(cls): return super().method(); Child.method(), then Child.method() returns 1 because super() can be used in class methods to access the parent's class method. When called from within a class method, super() automatically gets the parent class, and super().method() calls the parent's class method. The cls parameter is automatically handled by super() in class methods.

super() in class methods:
• Child.method() returns 1
• super() works in class methods
• super() automatically gets parent class
• super().method() calls Parent.method()
• Returns: 1

How it works:
• Child.method() calls class method on Child class
• Child.method() executes: return super().method()
• super() automatically gets Parent (from Child)
• super().method() calls Parent.method()
• Parent.method() returns 1
• Returns: 1

Example:
class Parent:
    @classmethod
    def method(cls):
        return 1
class Child(Parent):
    @classmethod
    def method(cls):
        return super().method()  # Works in class method
Child.method()              # 1 (calls Parent.method())

Common uses:
• Class method inheritance: @classmethod def method(cls): return super().method()
• Parent class methods: super() works in class methods
• super() function
• Class methods

Example: If class Parent: @classmethod; def method(cls): return 1; class Child(Parent): @classmethod; def method(cls): return super().method(); Child.method(), then Child.method() returns 1 because super() works in class methods, automatically getting the parent class and calling the parent's class method.

Key Concepts:
• super() in class methods: • Child.method() returns 1 • super() works in class methods • super() automatically gets parent class • super().method() calls Parent.method() • Returns: 1 How it works: • Child.method() calls class method on Child class • Child.method() executes: return super().method() • super() automatically gets Parent (from Child) • super().method() calls Parent.method() • Parent.method() returns 1 • Returns: 1 Example: class Parent: @classmethod def method(cls): return 1 class Child(Parent): @classmethod def method(cls): return super().method() # Works in class method Child.method() # 1 (calls Parent.method()) Common uses: • Class method inheritance: @classmethod def method(cls): return super().method() • Parent class methods: super() works in class methods • super() function • Class methods Example: If class Parent: @classmethod; def method(cls): return 1; class Child(Parent): @classmethod; def method(cls): return super().method(); Child.method(), then Child.method() returns 1 because super() works in class methods, automatically getting the parent class and calling the parent's class method.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: @staticmethod; def method(): return 1; class Child(Parent): @staticmethod; def method(): return super().method(); Child.method()?`, 
    o: ["AttributeError", "1", "Error", "None"], 
    c: 0, 
    e: "super() doesn't work in static methods (no cls/self).",
    de: `The super() function doesn't work in static methods because static methods don't have self or cls parameters. If class Parent: @staticmethod; def method(): return 1; class Child(Parent): @staticmethod; def method(): return super().method(); Child.method(), then Child.method() raises an AttributeError because super() requires either self (for instance methods) or cls (for class methods) to determine the class context, but static methods have neither. Without self or cls, super() cannot determine which class to look for the parent of.

super() in static methods:
• Child.method() raises AttributeError
• super() doesn't work in static methods
• Static methods have no self or cls
• super() needs self/cls to determine context
• Raises AttributeError

How it works:
• Child.method() calls static method on Child class
• Child.method() executes: return super().method()
• super() needs self or cls to determine class context
• Static method has no self or cls
• super() cannot determine which class (no context)
• Raises AttributeError

Example:
class Parent:
    @staticmethod
    def method():
        return 1
class Child(Parent):
    @staticmethod
    def method():
        return super().method()  # AttributeError (no self/cls)
Child.method()              # AttributeError (super() doesn't work)

Common uses:
• Understanding limitations: super() doesn't work in static methods
• Static methods: no self/cls, so no super()
• super() function
• Static methods

Example: If class Parent: @staticmethod; def method(): return 1; class Child(Parent): @staticmethod; def method(): return super().method(); Child.method(), then Child.method() raises an AttributeError because super() doesn't work in static methods - static methods have no self or cls, so super() cannot determine the class context.

Key Concepts:
• super() in static methods: • Child.method() raises AttributeError • super() doesn't work in static methods • Static methods have no self or cls • super() needs self/cls to determine context • Raises AttributeError How it works: • Child.method() calls static method on Child class • Child.method() executes: return super().method() • super() needs self or cls to determine class context • Static method has no self or cls • super() cannot determine which class (no context) • Raises AttributeError Example: class Parent: @staticmethod def method(): return 1 class Child(Parent): @staticmethod def method(): return super().method() # AttributeError (no self/cls) Child.method() # AttributeError (super() doesn't work) Common uses: • Understanding limitations: super() doesn't work in static methods • Static methods: no self/cls, so no super() • super() function • Static methods Example: If class Parent: @staticmethod; def method(): return 1; class Child(Parent): @staticmethod; def method(): return super().method(); Child.method(), then Child.method() raises an AttributeError because super() doesn't work in static methods - static methods have no self or cls, so super() cannot determine the class context.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: def method(self): return 'parent'; class Child(Parent): def method(self): return super().method() + ' child'; Child().method()?`, 
    o: ["'parent child'", "'parent'", "Error", "None"], 
    c: 0, 
    e: "super() can be used to extend parent method behavior.",
    de: `The super() function can be used to extend parent method behavior rather than completely replace it. If class Parent: def method(self): return 'parent'; class Child(Parent): def method(self): return super().method() + ' child'; Child().method(), then Child().method() returns 'parent child' because the child calls the parent's method via super().method() (which returns 'parent'), then extends it by concatenating ' child'. This pattern allows the child to enhance the parent's behavior while preserving it, creating behavior extension rather than replacement.

super() extends parent behavior:
• Child().method() returns 'parent child'
• Child calls super().method() (returns 'parent')
• Child extends result: 'parent' + ' child'
• Returns extended behavior
• Returns: 'parent child'

How it works:
• Child().method() calls method on Child instance
• Child.method() executes: return super().method() + ' child'
• super().method() calls Parent.method(), returns 'parent'
• Child concatenates: 'parent' + ' child'
• Returns: 'parent child'

Example:
class Parent:
    def method(self):
        return 'parent'
class Child(Parent):
    def method(self):
        return super().method() + ' child'  # Extends parent
Child().method()              # 'parent child' (extends parent behavior)

Common uses:
• Behavior extension: def method(self): return super().method() + extension
• Preserving parent: call parent, then add child behavior
• super() function
• Method overriding

Example: If class Parent: def method(self): return 'parent'; class Child(Parent): def method(self): return super().method() + ' child'; Child().method(), then Child().method() returns 'parent child' because super() can be used to extend parent method behavior, calling the parent and then adding child-specific behavior.

Key Concepts:
• super() extends parent behavior: • Child().method() returns 'parent child' • Child calls super().method() (returns 'parent') • Child extends result: 'parent' + ' child' • Returns extended behavior • Returns: 'parent child' How it works: • Child().method() calls method on Child instance • Child.method() executes: return super().method() + ' child' • super().method() calls Parent.method(), returns 'parent' • Child concatenates: 'parent' + ' child' • Returns: 'parent child' Example: class Parent: def method(self): return 'parent' class Child(Parent): def method(self): return super().method() + ' child' # Extends parent Child().method() # 'parent child' (extends parent behavior) Common uses: • Behavior extension: def method(self): return super().method() + extension • Preserving parent: call parent, then add child behavior • super() function • Method overriding Example: If class Parent: def method(self): return 'parent'; class Child(Parent): def method(self): return super().method() + ' child'; Child().method(), then Child().method() returns 'parent child' because super() can be used to extend parent method behavior, calling the parent and then adding child-specific behavior.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: def method(self): return 1; class Child(Parent): pass; super(Child, Child()).method()?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "super() can be called outside method with explicit args.",
    de: `The super() function can be called outside of a method by explicitly providing the class and instance arguments. If class Parent: def method(self): return 1; class Child(Parent): pass; super(Child, Child()).method(), then super(Child, Child()).method() returns 1 because super(Child, Child()) explicitly specifies Child as the class and Child() as the instance, allowing you to call super() from outside the class. This allows you to access parent methods even when not inside a method definition, useful for testing or advanced use cases.

super() outside method:
• super(Child, Child()).method() returns 1
• super(Child, Child()) explicitly specifies class and instance
• Child is the class, Child() is the instance
• super() gets parent of Child (Parent)
• super().method() calls Parent.method()
• Returns: 1

How it works:
• super(Child, Child()) creates super proxy
• Child is the class (to find parent of)
• Child() is the instance (to pass as self)
• super() gets parent of Child (Parent)
• super().method() calls Parent.method() with Child() instance
• Parent.method() returns 1
• Returns: 1

Example:
class Parent:
    def method(self):
        return 1
class Child(Parent): pass
super(Child, Child()).method()  # 1 (explicit super() outside method)

Common uses:
• External super: super(Class, instance).method() (outside method)
• Testing: call parent methods from outside class
• super() function
• Advanced usage

Example: If class Parent: def method(self): return 1; class Child(Parent): pass; super(Child, Child()).method(), then super(Child, Child()).method() returns 1 because super() can be called outside a method with explicit arguments, specifying the class and instance.

Key Concepts:
• super() outside method: • super(Child, Child()).method() returns 1 • super(Child, Child()) explicitly specifies class and instance • Child is the class, Child() is the instance • super() gets parent of Child (Parent) • super().method() calls Parent.method() • Returns: 1 How it works: • super(Child, Child()) creates super proxy • Child is the class (to find parent of) • Child() is the instance (to pass as self) • super() gets parent of Child (Parent) • super().method() calls Parent.method() with Child() instance • Parent.method() returns 1 • Returns: 1 Example: class Parent: def method(self): return 1 class Child(Parent): pass super(Child, Child()).method() # 1 (explicit super() outside method) Common uses: • External super: super(Class, instance).method() (outside method) • Testing: call parent methods from outside class • super() function • Advanced usage Example: If class Parent: def method(self): return 1; class Child(Parent): pass; super(Child, Child()).method(), then super(Child, Child()).method() returns 1 because super() can be called outside a method with explicit arguments, specifying the class and instance.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: x = 1; class Child(Parent): x = 2; def method(self): return super().x; Child().method()?`, 
    o: ["1", "2", "Error", "None"], 
    c: 0, 
    e: "super() accesses parent attribute even if child overrides.",
    de: `The super() function accesses parent attributes even if the child has overridden them. If class Parent: x = 1; class Child(Parent): x = 2; def method(self): return super().x; Child().method(), then Child().method() returns 1 because super() bypasses the child's override and accesses the parent's class attribute. When you use super().x, Python looks in the parent class (Parent) for x, finding Parent.x = 1, not Child.x = 2. This allows you to access parent attributes that have been shadowed by child attributes.

super() bypasses child override:
• Child().method() returns 1
• Child has x = 2 (overrides parent)
• super().x accesses parent attribute
• super() bypasses child's x = 2
• Accesses Parent.x = 1
• Returns: 1

How it works:
• Child().method() calls method on Child instance
• Child.method() executes: return super().x
• super() gets parent class (Parent)
• super().x accesses Parent.x (not Child.x)
• Parent.x = 1
• Returns: 1 (parent's value, not child's)

Example:
class Parent: x = 1
class Child(Parent):
    x = 2  # Overrides parent
    def method(self):
        return super().x  # Accesses parent, not child
Child().method()          # 1 (parent's x, not child's x = 2)

Common uses:
• Parent access: super().attr (accesses parent even if child overrides)
• Override bypass: super() accesses parent attributes
• super() function
• Inheritance

Example: If class Parent: x = 1; class Child(Parent): x = 2; def method(self): return super().x; Child().method(), then Child().method() returns 1 because super() accesses the parent attribute even if the child overrides it, bypassing the child's x = 2 and accessing Parent.x = 1.

Key Concepts:
• super() bypasses child override: • Child().method() returns 1 • Child has x = 2 (overrides parent) • super().x accesses parent attribute • super() bypasses child's x = 2 • Accesses Parent.x = 1 • Returns: 1 How it works: • Child().method() calls method on Child instance • Child.method() executes: return super().x • super() gets parent class (Parent) • super().x accesses Parent.x (not Child.x) • Parent.x = 1 • Returns: 1 (parent's value, not child's) Example: class Parent: x = 1 class Child(Parent): x = 2 # Overrides parent def method(self): return super().x # Accesses parent, not child Child().method() # 1 (parent's x, not child's x = 2) Common uses: • Parent access: super().attr (accesses parent even if child overrides) • Override bypass: super() accesses parent attributes • super() function • Inheritance Example: If class Parent: x = 1; class Child(Parent): x = 2; def method(self): return super().x; Child().method(), then Child().method() returns 1 because super() accesses the parent attribute even if the child overrides it, bypassing the child's x = 2 and accessing Parent.x = 1.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: def method(self): return 1; class Middle(Parent): def method(self): return 2; class Child(Middle): def method(self): return super().method(); Child().method()?`, 
    o: ["2", "1", "Error", "None"], 
    c: 0, 
    e: "super() follows MRO, calls immediate parent (Middle).",
    de: `The super() function follows the Method Resolution Order (MRO) and calls the immediate parent in the inheritance chain, not the ultimate ancestor. If class Parent: def method(self): return 1; class Middle(Parent): def method(self): return 2; class Child(Middle): def method(self): return super().method(); Child().method(), then Child().method() returns 2 because super() in Child follows the MRO (Method Resolution Order), which is [Child, Middle, Parent, object]. super() in Child calls the next class in the MRO, which is Middle, not Parent. So super().method() calls Middle.method(), which returns 2.

super() follows MRO:
• Child().method() returns 2
• super() follows Method Resolution Order
• MRO: Child -> Middle -> Parent
• super() in Child calls next in MRO: Middle
• Middle.method() returns 2
• Returns: 2

How it works:
• Child().method() calls method on Child instance
• Child.method() executes: return super().method()
• super() follows MRO: [Child, Middle, Parent, object]
• super() in Child calls next in MRO: Middle.method()
• Middle.method() returns 2
• Returns: 2 (Middle's method, not Parent's)

Example:
class Parent:
    def method(self):
        return 1
class Middle(Parent):
    def method(self):
        return 2
class Child(Middle):
    def method(self):
        return super().method()  # Calls Middle, not Parent
Child().method()              # 2 (calls Middle.method(), not Parent.method())

Common uses:
• MRO understanding: super() follows Method Resolution Order
• Immediate parent: super() calls next in MRO, not ultimate ancestor
• super() function
• Method Resolution Order

Example: If class Parent: def method(self): return 1; class Middle(Parent): def method(self): return 2; class Child(Middle): def method(self): return super().method(); Child().method(), then Child().method() returns 2 because super() follows the MRO and calls the immediate parent (Middle), not the ultimate ancestor (Parent).

Key Concepts:
• super() follows MRO: • Child().method() returns 2 • super() follows Method Resolution Order • MRO: Child -> Middle -> Parent • super() in Child calls next in MRO: Middle • Middle.method() returns 2 • Returns: 2 How it works: • Child().method() calls method on Child instance • Child.method() executes: return super().method() • super() follows MRO: [Child, Middle, Parent, object] • super() in Child calls next in MRO: Middle.method() • Middle.method() returns 2 • Returns: 2 (Middle's method, not Parent's) Example: class Parent: def method(self): return 1 class Middle(Parent): def method(self): return 2 class Child(Middle): def method(self): return super().method() # Calls Middle, not Parent Child().method() # 2 (calls Middle.method(), not Parent.method()) Common uses: • MRO understanding: super() follows Method Resolution Order • Immediate parent: super() calls next in MRO, not ultimate ancestor • super() function • Method Resolution Order Example: If class Parent: def method(self): return 1; class Middle(Parent): def method(self): return 2; class Child(Middle): def method(self): return super().method(); Child().method(), then Child().method() returns 2 because super() follows the MRO and calls the immediate parent (Middle), not the ultimate ancestor (Parent).

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  
  // 31-40: Multiple Inheritance
  (_i: number) => ({ 
    q: `What is class A: x = 1; class B: x = 2; class C(A, B): pass; C.x?`, 
    o: ["1", "2", "Error", "None"], 
    c: 0, 
    e: "Multiple inheritance: first parent takes precedence.",
    de: `In multiple inheritance, the first parent in the inheritance tuple takes precedence. If class A: x = 1; class B: x = 2; class C(A, B): pass; C.x, then C.x returns 1 because when a class inherits from multiple parents, Python follows the Method Resolution Order (MRO), which prioritizes the leftmost parent. Since A comes before B in class C(A, B), A's attribute x = 1 is found first and used.

Multiple inheritance order:
• C.x returns 1
• class C(A, B): inherits from A and B
• A is first parent, B is second parent
• First parent (A) takes precedence
• A.x = 1 is found first
• Returns: 1

How it works:
• class C(A, B): creates child with multiple parents
• Python follows MRO: [C, A, B, object]
• C.x looks for attribute x
• Python searches: C.__dict__ (not found) → A.__dict__ (finds x = 1)
• Returns: 1 (A's attribute, not B's)

Example:
class A: x = 1
class B: x = 2
class C(A, B): pass
C.x                        # 1 (first parent A takes precedence)

Common uses:
• Multiple inheritance: class C(A, B): (inherits from multiple parents)
• Order matters: first parent in tuple takes precedence
• Multiple inheritance
• Method Resolution Order

Example: If class A: x = 1; class B: x = 2; class C(A, B): pass; C.x, then C.x returns 1 because in multiple inheritance, the first parent in the tuple takes precedence, so A's x = 1 is found first.

Key Concepts:
• Multiple inheritance order: • C.x returns 1 • class C(A, B): inherits from A and B • A is first parent, B is second parent • First parent (A) takes precedence • A.x = 1 is found first • Returns: 1 How it works: • class C(A, B): creates child with multiple parents • Python follows MRO: [C, A, B, object] • C.x looks for attribute x • Python searches: C.__dict__ (not found) → A.__dict__ (finds x = 1) • Returns: 1 (A's attribute, not B's) Example: class A: x = 1 class B: x = 2 class C(A, B): pass C.x # 1 (first parent A takes precedence) Common uses: • Multiple inheritance: class C(A, B): (inherits from multiple parents) • Order matters: first parent in tuple takes precedence • Multiple inheritance • Method Resolution Order Example: If class A: x = 1; class B: x = 2; class C(A, B): pass; C.x, then C.x returns 1 because in multiple inheritance, the first parent in the tuple takes precedence, so A's x = 1 is found first.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class A: x = 1; class B: x = 2; class C(B, A): pass; C.x?`, 
    o: ["2", "1", "Error", "None"], 
    c: 0, 
    e: "Order matters: first parent in tuple wins.",
    de: `The order of parents in multiple inheritance matters - the first parent in the tuple takes precedence. If class A: x = 1; class B: x = 2; class C(B, A): pass; C.x, then C.x returns 2 because when you change the order to class C(B, A), B comes before A, so B's attribute x = 2 is found first and used. The leftmost parent in the inheritance tuple always takes precedence over the rightmost parent.

Order matters in multiple inheritance:
• C.x returns 2
• class C(B, A): inherits from B and A
• B is first parent, A is second parent
• First parent (B) takes precedence
• B.x = 2 is found first
• Returns: 2

How it works:
• class C(B, A): creates child with B first, A second
• Python follows MRO: [C, B, A, object]
• C.x looks for attribute x
• Python searches: C.__dict__ (not found) → B.__dict__ (finds x = 2)
• Returns: 2 (B's attribute, not A's)

Example:
class A: x = 1
class B: x = 2
class C(B, A): pass  # B first
C.x                        # 2 (first parent B takes precedence)

Common uses:
• Multiple inheritance order: class C(Parent1, Parent2): (order matters)
• Precedence: first parent in tuple takes precedence
• Multiple inheritance
• Method Resolution Order

Example: If class A: x = 1; class B: x = 2; class C(B, A): pass; C.x, then C.x returns 2 because the order matters in multiple inheritance - the first parent in the tuple (B) takes precedence, so B.x = 2 is found first.

Key Concepts:
• Order matters in multiple inheritance: • C.x returns 2 • class C(B, A): inherits from B and A • B is first parent, A is second parent • First parent (B) takes precedence • B.x = 2 is found first • Returns: 2 How it works: • class C(B, A): creates child with B first, A second • Python follows MRO: [C, B, A, object] • C.x looks for attribute x • Python searches: C.__dict__ (not found) → B.__dict__ (finds x = 2) • Returns: 2 (B's attribute, not A's) Example: class A: x = 1 class B: x = 2 class C(B, A): pass # B first C.x # 2 (first parent B takes precedence) Common uses: • Multiple inheritance order: class C(Parent1, Parent2): (order matters) • Precedence: first parent in tuple takes precedence • Multiple inheritance • Method Resolution Order Example: If class A: x = 1; class B: x = 2; class C(B, A): pass; C.x, then C.x returns 2 because the order matters in multiple inheritance - the first parent in the tuple (B) takes precedence, so B.x = 2 is found first.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class A: def method(self): return 'A'; class B: def method(self): return 'B'; class C(A, B): pass; C().method()?`, 
    o: ["'A'", "'B'", "Error", "None"], 
    c: 0, 
    e: "Method resolution follows inheritance order.",
    de: `Method resolution in multiple inheritance follows the inheritance order (MRO). If class A: def method(self): return 'A'; class B: def method(self): return 'B'; class C(A, B): pass; C().method(), then C().method() returns 'A' because when Python searches for method(), it follows the Method Resolution Order (MRO), which is [C, A, B, object]. It searches in order: C (not found) → A (found, returns 'A'). The first parent (A) in the inheritance tuple is searched first.

Method resolution follows order:
• C().method() returns 'A'
• Python follows MRO: [C, A, B, object]
• Searches for method() in order
• Finds method() in A first
• Uses A.method() which returns 'A'
• Returns: 'A'

How it works:
• C().method() calls method on C instance
• Python follows MRO: [C, A, B, object]
• Searches for method: C (not found) → A (found)
• Uses A.method() with C instance as self
• Method executes: return 'A'
• Returns: 'A'

Example:
class A:
    def method(self):
        return 'A'
class B:
    def method(self):
        return 'B'
class C(A, B): pass  # A first
C().method()              # 'A' (MRO finds A.method() first)

Common uses:
• Method resolution: MRO determines which parent's method is used
• Multiple inheritance: order determines method resolution
• Method Resolution Order
• Multiple inheritance

Example: If class A: def method(self): return 'A'; class B: def method(self): return 'B'; class C(A, B): pass; C().method(), then C().method() returns 'A' because method resolution follows the inheritance order (MRO), and A comes before B, so A.method() is found first.

Key Concepts:
• Method resolution follows order: • C().method() returns 'A' • Python follows MRO: [C, A, B, object] • Searches for method() in order • Finds method() in A first • Uses A.method() which returns 'A' • Returns: 'A' How it works: • C().method() calls method on C instance • Python follows MRO: [C, A, B, object] • Searches for method: C (not found) → A (found) • Uses A.method() with C instance as self • Method executes: return 'A' • Returns: 'A' Example: class A: def method(self): return 'A' class B: def method(self): return 'B' class C(A, B): pass # A first C().method() # 'A' (MRO finds A.method() first) Common uses: • Method resolution: MRO determines which parent's method is used • Multiple inheritance: order determines method resolution • Method Resolution Order • Multiple inheritance Example: If class A: def method(self): return 'A'; class B: def method(self): return 'B'; class C(A, B): pass; C().method(), then C().method() returns 'A' because method resolution follows the inheritance order (MRO), and A comes before B, so A.method() is found first.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class A: def method(self): return 'A'; class B: def method(self): return 'B'; class C(A, B): def method(self): return super().method(); C().method()?`, 
    o: ["'A'", "'B'", "Error", "None"], c: 0, 
    e: "super() in multiple inheritance follows MRO.",
    de: `The super() function in multiple inheritance follows the Method Resolution Order (MRO). If class A: def method(self): return 'A'; class B: def method(self): return 'B'; class C(A, B): def method(self): return super().method(); C().method(), then C().method() returns 'A' because super() follows the MRO ([C, A, B, object]). When super() is called in C.method(), it calls the next class in the MRO after C, which is A. So super().method() calls A.method(), which returns 'A'.

super() follows MRO in multiple inheritance:
• C().method() returns 'A'
• super() follows MRO: [C, A, B, object]
• super() in C calls next in MRO: A
• super().method() calls A.method()
• A.method() returns 'A'
• Returns: 'A'

How it works:
• C().method() calls method on C instance
• C.method() executes: return super().method()
• super() follows MRO: [C, A, B, object]
• super() in C calls next in MRO: A.method()
• A.method() returns 'A'
• Returns: 'A'

Example:
class A:
    def method(self):
        return 'A'
class B:
    def method(self):
        return 'B'
class C(A, B):
    def method(self):
        return super().method()  # Follows MRO: calls A.method()
C().method()              # 'A' (super() calls next in MRO: A)

Common uses:
• MRO understanding: super() follows Method Resolution Order
• Multiple inheritance: super() calls next in MRO
• super() function
• Method Resolution Order

Example: If class A: def method(self): return 'A'; class B: def method(self): return 'B'; class C(A, B): def method(self): return super().method(); C().method(), then C().method() returns 'A' because super() in multiple inheritance follows the MRO, and the next class after C is A.

Key Concepts:
• super() follows MRO in multiple inheritance: • C().method() returns 'A' • super() follows MRO: [C, A, B, object] • super() in C calls next in MRO: A • super().method() calls A.method() • A.method() returns 'A' • Returns: 'A' How it works: • C().method() calls method on C instance • C.method() executes: return super().method() • super() follows MRO: [C, A, B, object] • super() in C calls next in MRO: A.method() • A.method() returns 'A' • Returns: 'A' Example: class A: def method(self): return 'A' class B: def method(self): return 'B' class C(A, B): def method(self): return super().method() # Follows MRO: calls A.method() C().method() # 'A' (super() calls next in MRO: A) Common uses: • MRO understanding: super() follows Method Resolution Order • Multiple inheritance: super() calls next in MRO • super() function • Method Resolution Order Example: If class A: def method(self): return 'A'; class B: def method(self): return 'B'; class C(A, B): def method(self): return super().method(); C().method(), then C().method() returns 'A' because super() in multiple inheritance follows the MRO, and the next class after C is A.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class A: pass; class B: pass; class C(A, B): pass; C.__bases__?`, 
    o: ["(<class '__main__.A'>, <class '__main__.B'>)", "()", "Error", "None"], 
    c: 0, 
    e: "__bases__ contains all parent classes.",
    de: `The __bases__ attribute contains all parent classes in multiple inheritance. If class A: pass; class B: pass; class C(A, B): pass; C.__bases__, then C.__bases__ returns (<class '__main__.A'>, <class '__main__.B'>) because __bases__ stores a tuple of all parent classes that a class inherits from. For multiple inheritance, it contains all parents in the order they appear in the inheritance tuple.

__bases__ with multiple parents:
• C.__bases__ returns (<class '__main__.A'>, <class '__main__.B'>)
• __bases__ contains tuple of all parent classes
• C inherits from A and B
• Returns tuple with both parents
• Returns: (<class '__main__.A'>, <class '__main__.B'>)

How it works:
• class C(A, B): creates child with multiple parents
• Python stores all parent classes in C.__bases__
• __bases__ is tuple of parent classes
• Contains: (A, B) in order
• Returns: (<class '__main__.A'>, <class '__main__.B'>)

Example:
class A: pass
class B: pass
class C(A, B): pass
C.__bases__               # (<class '__main__.A'>, <class '__main__.B'>) (all parents)

Common uses:
• Inheritance inspection: C.__bases__ (see all parent classes)
• Introspection: check what classes a class inherits from
• Multiple inheritance
• Type system

Example: If class A: pass; class B: pass; class C(A, B): pass; C.__bases__, then C.__bases__ returns (<class '__main__.A'>, <class '__main__.B'>) because __bases__ contains all parent classes in multiple inheritance.

Key Concepts:
• __bases__ with multiple parents: • C.__bases__ returns (<class '__main__.A'>, <class '__main__.B'>) • __bases__ contains tuple of all parent classes • C inherits from A and B • Returns tuple with both parents • Returns: (<class '__main__.A'>, <class '__main__.B'>) How it works: • class C(A, B): creates child with multiple parents • Python stores all parent classes in C.__bases__ • __bases__ is tuple of parent classes • Contains: (A, B) in order • Returns: (<class '__main__.A'>, <class '__main__.B'>) Example: class A: pass class B: pass class C(A, B): pass C.__bases__ # (<class '__main__.A'>, <class '__main__.B'>) (all parents) Common uses: • Inheritance inspection: C.__bases__ (see all parent classes) • Introspection: check what classes a class inherits from • Multiple inheritance • Type system Example: If class A: pass; class B: pass; class C(A, B): pass; C.__bases__, then C.__bases__ returns (<class '__main__.A'>, <class '__main__.B'>) because __bases__ contains all parent classes in multiple inheritance.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class A: pass; class B(A): pass; class C(A): pass; class D(B, C): pass; D.mro()?`, 
    o: ["[D, B, C, A, object]", "[D, A, B, C, object]", "Error", "None"], 
    c: 0, 
    e: "MRO follows C3 linearization (depth-first, left-to-right).",
    de: `The Method Resolution Order (MRO) follows C3 linearization, which uses depth-first, left-to-right traversal. If class A: pass; class B(A): pass; class C(A): pass; class D(B, C): pass; D.mro(), then D.mro() returns [D, B, C, A, object] because C3 linearization processes the inheritance hierarchy: first D (the class itself), then B (leftmost parent), then C (rightmost parent), then A (common ancestor of B and C), then object (base of all classes). This ensures a consistent, predictable order.

C3 linearization MRO:
• D.mro() returns [D, B, C, A, object]
• MRO follows C3 linearization algorithm
• Depth-first, left-to-right traversal
• D -> B -> C -> A -> object
• Returns: [D, B, C, A, object]

How it works:
• C3 linearization computes MRO
• D inherits from B and C (left-to-right: B first, C second)
• B and C both inherit from A (common ancestor)
• MRO: D -> B -> C -> A -> object
• Ensures consistent, predictable order
• Returns: [D, B, C, A, object]

Example:
class A: pass
class B(A): pass
class C(A): pass
class D(B, C): pass
D.mro()                     # [<class '__main__.D'>, <class '__main__.B'>, <class '__main__.C'>, <class '__main__.A'>, <class 'object'>]

Common uses:
• MRO inspection: Class.mro() (see method resolution order)
• Understanding inheritance: how Python searches for methods
• Method Resolution Order
• C3 linearization

Example: If class A: pass; class B(A): pass; class C(A): pass; class D(B, C): pass; D.mro(), then D.mro() returns [D, B, C, A, object] because MRO follows C3 linearization, which uses depth-first, left-to-right traversal to create a consistent order.

Key Concepts:
• C3 linearization MRO: • D.mro() returns [D, B, C, A, object] • MRO follows C3 linearization algorithm • Depth-first, left-to-right traversal • D -> B -> C -> A -> object • Returns: [D, B, C, A, object] How it works: • C3 linearization computes MRO • D inherits from B and C (left-to-right: B first, C second) • B and C both inherit from A (common ancestor) • MRO: D -> B -> C -> A -> object • Ensures consistent, predictable order • Returns: [D, B, C, A, object] Example: class A: pass class B(A): pass class C(A): pass class D(B, C): pass D.mro() # [<class '__main__.D'>, <class '__main__.B'>, <class '__main__.C'>, <class '__main__.A'>, <class 'object'>] Common uses: • MRO inspection: Class.mro() (see method resolution order) • Understanding inheritance: how Python searches for methods • Method Resolution Order • C3 linearization Example: If class A: pass; class B(A): pass; class C(A): pass; class D(B, C): pass; D.mro(), then D.mro() returns [D, B, C, A, object] because MRO follows C3 linearization, which uses depth-first, left-to-right traversal to create a consistent order.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class A: def method(self): return 'A'; class B(A): def method(self): return 'B'; class C(A): def method(self): return 'C'; class D(B, C): pass; D().method()?`, 
    o: ["'B'", "'A'", "'C'", "Error"], 
    c: 0, 
    e: "MRO: D -> B -> C -> A, B.method() found first.",
    de: `The Method Resolution Order determines which method is called. If class A: def method(self): return 'A'; class B(A): def method(self): return 'B'; class C(A): def method(self): return 'C'; class D(B, C): pass; D().method(), then D().method() returns 'B' because the MRO is [D, B, C, A, object]. Python searches for method() in order: D (not found) → B (found, returns 'B'). Since B comes before C in the MRO, B.method() is found first and used, even though C also has method().

MRO determines method:
• D().method() returns 'B'
• MRO: [D, B, C, A, object]
• Searches for method() in order
• Finds method() in B first
• Uses B.method() which returns 'B'
• Returns: 'B'

How it works:
• D().method() calls method on D instance
• Python follows MRO: [D, B, C, A, object]
• Searches for method: D (not found) → B (found)
• Uses B.method() with D instance as self
• Method executes: return 'B'
• Returns: 'B'

Example:
class A:
    def method(self):
        return 'A'
class B(A):
    def method(self):
        return 'B'
class C(A):
    def method(self):
        return 'C'
class D(B, C): pass  # B first in MRO
D().method()              # 'B' (MRO finds B.method() first)

Common uses:
• Method resolution: MRO determines which parent's method is used
• Multiple inheritance: order determines method resolution
• Method Resolution Order
• Multiple inheritance

Example: If class A: def method(self): return 'A'; class B(A): def method(self): return 'B'; class C(A): def method(self): return 'C'; class D(B, C): pass; D().method(), then D().method() returns 'B' because the MRO is [D, B, C, A, object], and B.method() is found first.

Key Concepts:
• MRO determines method: • D().method() returns 'B' • MRO: [D, B, C, A, object] • Searches for method() in order • Finds method() in B first • Uses B.method() which returns 'B' • Returns: 'B' How it works: • D().method() calls method on D instance • Python follows MRO: [D, B, C, A, object] • Searches for method: D (not found) → B (found) • Uses B.method() with D instance as self • Method executes: return 'B' • Returns: 'B' Example: class A: def method(self): return 'A' class B(A): def method(self): return 'B' class C(A): def method(self): return 'C' class D(B, C): pass # B first in MRO D().method() # 'B' (MRO finds B.method() first) Common uses: • Method resolution: MRO determines which parent's method is used • Multiple inheritance: order determines method resolution • Method Resolution Order • Multiple inheritance Example: If class A: def method(self): return 'A'; class B(A): def method(self): return 'B'; class C(A): def method(self): return 'C'; class D(B, C): pass; D().method(), then D().method() returns 'B' because the MRO is [D, B, C, A, object], and B.method() is found first.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class A: def method(self): return 'A'; class B(A): pass; class C(A): def method(self): return 'C'; class D(B, C): pass; D().method()?`, 
    o: ["'C'", "'A'", "'B'", "Error"], 
    c: 0, 
    e: "MRO: D -> B -> C -> A, C.method() found (B doesn't have it).",
    de: `The Method Resolution Order searches through all parents until it finds a method. If class A: def method(self): return 'A'; class B(A): pass; class C(A): def method(self): return 'C'; class D(B, C): pass; D().method(), then D().method() returns 'C' because the MRO is [D, B, C, A, object]. Python searches for method() in order: D (not found) → B (not found, B doesn't define method) → C (found, returns 'C'). Since B doesn't have method(), Python continues searching and finds it in C.

MRO continues searching:
• D().method() returns 'C'
• MRO: [D, B, C, A, object]
• Searches for method() in order
• D (not found) → B (not found) → C (found)
• Uses C.method() which returns 'C'
• Returns: 'C'

How it works:
• D().method() calls method on D instance
• Python follows MRO: [D, B, C, A, object]
• Searches for method: D (not found) → B (not found, no method) → C (found)
• Uses C.method() with D instance as self
• Method executes: return 'C'
• Returns: 'C'

Example:
class A:
    def method(self):
        return 'A'
class B(A): pass  # No method defined
class C(A):
    def method(self):
        return 'C'
class D(B, C): pass
D().method()              # 'C' (MRO finds C.method() after B doesn't have it)

Common uses:
• Method resolution: MRO searches all parents until method found
• Multiple inheritance: method resolution continues through all parents
• Method Resolution Order
• Multiple inheritance

Example: If class A: def method(self): return 'A'; class B(A): pass; class C(A): def method(self): return 'C'; class D(B, C): pass; D().method(), then D().method() returns 'C' because the MRO continues searching through all parents, and C.method() is found after B doesn't have it.

Key Concepts:
• MRO continues searching: • D().method() returns 'C' • MRO: [D, B, C, A, object] • Searches for method() in order • D (not found) → B (not found) → C (found) • Uses C.method() which returns 'C' • Returns: 'C' How it works: • D().method() calls method on D instance • Python follows MRO: [D, B, C, A, object] • Searches for method: D (not found) → B (not found, no method) → C (found) • Uses C.method() with D instance as self • Method executes: return 'C' • Returns: 'C' Example: class A: def method(self): return 'A' class B(A): pass # No method defined class C(A): def method(self): return 'C' class D(B, C): pass D().method() # 'C' (MRO finds C.method() after B doesn't have it) Common uses: • Method resolution: MRO searches all parents until method found • Multiple inheritance: method resolution continues through all parents • Method Resolution Order • Multiple inheritance Example: If class A: def method(self): return 'A'; class B(A): pass; class C(A): def method(self): return 'C'; class D(B, C): pass; D().method(), then D().method() returns 'C' because the MRO continues searching through all parents, and C.method() is found after B doesn't have it.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class A: x = 1; class B: x = 2; class C(A, B): x = 3; C.x?`, 
    o: ["3", "1", "2", "Error"], 
    c: 0, 
    e: "Child class attribute overrides all parent attributes.",
    de: `A child class attribute overrides all parent attributes in multiple inheritance. If class A: x = 1; class B: x = 2; class C(A, B): x = 3; C.x, then C.x returns 3 because when a child class defines an attribute with the same name as parent attributes, the child's attribute takes precedence over all parent attributes. The child attribute is in C.__dict__, so it's found first when searching C.x, before checking any parents.

Child overrides all parents:
• C.x returns 3
• C defines class attribute x = 3
• A has x = 1, B has x = 2
• Child's attribute shadows all parent attributes
• Returns: 3

How it works:
• class C(A, B): x = 3 defines child attribute
• C has its own class attribute x = 3
• C.x looks for attribute x
• Python finds x in C.__dict__ first
• Returns: 3 (child's attribute, not parents')

Example:
class A: x = 1
class B: x = 2
class C(A, B):
    x = 3  # Overrides all parent attributes
C.x                     # 3 (child's attribute, not A.x=1 or B.x=2)

Common uses:
• Attribute override: class Child(Parent1, Parent2): attr = value (overrides all parents)
• Customization: child can override parent attributes
• Multiple inheritance
• Attribute shadowing

Example: If class A: x = 1; class B: x = 2; class C(A, B): x = 3; C.x, then C.x returns 3 because the child class attribute overrides all parent attributes, so the child's value (3) takes precedence over all parents' values.

Key Concepts:
• Child overrides all parents: • C.x returns 3 • C defines class attribute x = 3 • A has x = 1, B has x = 2 • Child's attribute shadows all parent attributes • Returns: 3 How it works: • class C(A, B): x = 3 defines child attribute • C has its own class attribute x = 3 • C.x looks for attribute x • Python finds x in C.__dict__ first • Returns: 3 (child's attribute, not parents') Example: class A: x = 1 class B: x = 2 class C(A, B): x = 3 # Overrides all parent attributes C.x # 3 (child's attribute, not A.x=1 or B.x=2) Common uses: • Attribute override: class Child(Parent1, Parent2): attr = value (overrides all parents) • Customization: child can override parent attributes • Multiple inheritance • Attribute shadowing Example: If class A: x = 1; class B: x = 2; class C(A, B): x = 3; C.x, then C.x returns 3 because the child class attribute overrides all parent attributes, so the child's value (3) takes precedence over all parents' values.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class A: def method(self): return 'A'; class B: def method(self): return 'B'; class C(A, B): def method(self): return super().method(); C().method()?`, 
    o: ["'A'", "'B'", "Error", "None"], 
    c: 0, 
    e: "super() in multiple inheritance calls next in MRO.",
    de: `The super() function in multiple inheritance calls the next class in the Method Resolution Order (MRO). If class A: def method(self): return 'A'; class B: def method(self): return 'B'; class C(A, B): def method(self): return super().method(); C().method(), then C().method() returns 'A' because super() follows the MRO ([C, A, B, object]). When super() is called in C.method(), it calls the next class in the MRO after C, which is A. So super().method() calls A.method(), which returns 'A', not B.method().

super() calls next in MRO:
• C().method() returns 'A'
• super() follows MRO: [C, A, B, object]
• super() in C calls next in MRO: A
• super().method() calls A.method()
• A.method() returns 'A'
• Returns: 'A'

How it works:
• C().method() calls method on C instance
• C.method() executes: return super().method()
• super() follows MRO: [C, A, B, object]
• super() in C calls next in MRO: A.method()
• A.method() returns 'A'
• Returns: 'A'

Example:
class A:
    def method(self):
        return 'A'
class B:
    def method(self):
        return 'B'
class C(A, B):
    def method(self):
        return super().method()  # Calls next in MRO: A
C().method()              # 'A' (super() calls A, not B)

Common uses:
• MRO understanding: super() calls next in Method Resolution Order
• Multiple inheritance: super() follows MRO, not just first parent
• super() function
• Method Resolution Order

Example: If class A: def method(self): return 'A'; class B: def method(self): return 'B'; class C(A, B): def method(self): return super().method(); C().method(), then C().method() returns 'A' because super() in multiple inheritance calls the next class in the MRO after C, which is A.

Key Concepts:
• super() calls next in MRO: • C().method() returns 'A' • super() follows MRO: [C, A, B, object] • super() in C calls next in MRO: A • super().method() calls A.method() • A.method() returns 'A' • Returns: 'A' How it works: • C().method() calls method on C instance • C.method() executes: return super().method() • super() follows MRO: [C, A, B, object] • super() in C calls next in MRO: A.method() • A.method() returns 'A' • Returns: 'A' Example: class A: def method(self): return 'A' class B: def method(self): return 'B' class C(A, B): def method(self): return super().method() # Calls next in MRO: A C().method() # 'A' (super() calls A, not B) Common uses: • MRO understanding: super() calls next in Method Resolution Order • Multiple inheritance: super() follows MRO, not just first parent • super() function • Method Resolution Order Example: If class A: def method(self): return 'A'; class B: def method(self): return 'B'; class C(A, B): def method(self): return super().method(); C().method(), then C().method() returns 'A' because super() in multiple inheritance calls the next class in the MRO after C, which is A.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  
  // 41-50: Polymorphism
  (_i: number) => ({ 
    q: `What is polymorphism?`, 
    o: ["Same interface, different behavior", "Same behavior, different interface", "Error", "No interface"], 
    c: 0, 
    e: "Polymorphism allows same interface for different types.",
    de: `Polymorphism is a principle where different types can be used through the same interface, but each type provides its own implementation. The same method name can be called on different objects, and each object responds appropriately based on its type. This allows code to work with multiple types without knowing the specific type - "same interface, different behavior." In Python, polymorphism is achieved through method overriding (different classes define the same method with different implementations) and duck typing (if it quacks like a duck, treat it like a duck).

Polymorphism concept:
• Same interface, different behavior
• Same method name, different implementations
• Different types respond appropriately
• Code works with multiple types
• "If it walks like a duck and quacks like a duck, it's a duck"

How it works:
• Different classes define same method name
• Each class provides its own implementation
• Same method call works on different types
• Each type responds with its own behavior
• Enables code reuse and flexibility

Example:
class Animal:
    def speak(self):
        return 'sound'
class Dog(Animal):
    def speak(self):
        return 'bark'  # Different implementation
class Cat(Animal):
    def speak(self):
        return 'meow'  # Different implementation
# Same interface (speak()), different behavior (bark, meow)

Common uses:
• Polymorphism: same interface, different behavior
• Code reuse: function works with multiple types
• Method overriding: different classes, same method name
• Object-oriented programming

Example: Polymorphism is a principle where different types can be used through the same interface, but each type provides its own implementation - "same interface, different behavior."

Key Concepts:
• Polymorphism concept: • Same interface, different behavior • Same method name, different implementations • Different types respond appropriately • Code works with multiple types • "If it walks like a duck and quacks like a duck, it's a duck" How it works: • Different classes define same method name • Each class provides its own implementation • Same method call works on different types • Each type responds with its own behavior • Enables code reuse and flexibility Example: class Animal: def speak(self): return 'sound' class Dog(Animal): def speak(self): return 'bark' # Different implementation class Cat(Animal): def speak(self): return 'meow' # Different implementation # Same interface (speak()), different behavior (bark, meow) Common uses: • Polymorphism: same interface, different behavior • Code reuse: function works with multiple types • Method overriding: different classes, same method name • Object-oriented programming Example: Polymorphism is a principle where different types can be used through the same interface, but each type provides its own implementation - "same interface, different behavior."

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Animal: def speak(self): return 'sound'; class Dog(Animal): def speak(self): return 'bark'; class Cat(Animal): def speak(self): return 'meow'; [Dog().speak(), Cat().speak()]?`, 
    o: ["['bark', 'meow']", "['sound', 'sound']", "Error", "None"], 
    c: 0, 
    e: "Different classes implement same method differently (polymorphism).",
    de: `Different classes can implement the same method with different behavior, demonstrating polymorphism. If class Animal: def speak(self): return 'sound'; class Dog(Animal): def speak(self): return 'bark'; class Cat(Animal): def speak(self): return 'meow'; [Dog().speak(), Cat().speak()], then [Dog().speak(), Cat().speak()] returns ['bark', 'meow'] because Dog and Cat both define speak() with different implementations. Each class provides its own behavior for the same method name - Dog.speak() returns 'bark', Cat.speak() returns 'meow'. This is polymorphism in action: same interface (speak()), different behavior (bark vs meow).

Different implementations, same interface:
• [Dog().speak(), Cat().speak()] returns ['bark', 'meow']
• Both classes have speak() method
• Dog.speak() returns 'bark'
• Cat.speak() returns 'meow'
• Same interface, different behavior
• Returns: ['bark', 'meow']

How it works:
• Dog().speak() calls speak() on Dog instance
• Python uses Dog.speak() (returns 'bark')
• Cat().speak() calls speak() on Cat instance
• Python uses Cat.speak() (returns 'meow')
• Both use same method name, different implementations
• Returns: ['bark', 'meow']

Example:
class Animal:
    def speak(self):
        return 'sound'
class Dog(Animal):
    def speak(self):
        return 'bark'  # Overrides parent
class Cat(Animal):
    def speak(self):
        return 'meow'  # Overrides parent
[Dog().speak(), Cat().speak()]  # ['bark', 'meow'] (polymorphism)

Common uses:
• Polymorphism: different classes, same method, different behavior
• Method overriding: each class provides its own implementation
• Code flexibility: same interface works with multiple types
• Object-oriented programming

Example: If class Animal: def speak(self): return 'sound'; class Dog(Animal): def speak(self): return 'bark'; class Cat(Animal): def speak(self): return 'meow'; [Dog().speak(), Cat().speak()], then [Dog().speak(), Cat().speak()] returns ['bark', 'meow'] because different classes implement the same method differently, demonstrating polymorphism.

Key Concepts:
• Different implementations, same interface: • [Dog().speak(), Cat().speak()] returns ['bark', 'meow'] • Both classes have speak() method • Dog.speak() returns 'bark' • Cat.speak() returns 'meow' • Same interface, different behavior • Returns: ['bark', 'meow'] How it works: • Dog().speak() calls speak() on Dog instance • Python uses Dog.speak() (returns 'bark') • Cat().speak() calls speak() on Cat instance • Python uses Cat.speak() (returns 'meow') • Both use same method name, different implementations • Returns: ['bark', 'meow'] Example: class Animal: def speak(self): return 'sound' class Dog(Animal): def speak(self): return 'bark' # Overrides parent class Cat(Animal): def speak(self): return 'meow' # Overrides parent [Dog().speak(), Cat().speak()] # ['bark', 'meow'] (polymorphism) Common uses: • Polymorphism: different classes, same method, different behavior • Method overriding: each class provides its own implementation • Code flexibility: same interface works with multiple types • Object-oriented programming Example: If class Animal: def speak(self): return 'sound'; class Dog(Animal): def speak(self): return 'bark'; class Cat(Animal): def speak(self): return 'meow'; [Dog().speak(), Cat().speak()], then [Dog().speak(), Cat().speak()] returns ['bark', 'meow'] because different classes implement the same method differently, demonstrating polymorphism.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Shape: def area(self): return 0; class Circle(Shape): def area(self): return 3.14; class Square(Shape): def area(self): return 1; [Circle().area(), Square().area()]?`, 
    o: ["[3.14, 1]", "[0, 0]", "Error", "None"], 
    c: 0, 
    e: "Polymorphism: same method name, different implementations.",
    de: `Polymorphism allows the same method name with different implementations in different classes. If class Shape: def area(self): return 0; class Circle(Shape): def area(self): return 3.14; class Square(Shape): def area(self): return 1; [Circle().area(), Square().area()], then [Circle().area(), Square().area()] returns [3.14, 1] because Circle and Square both define area() with their own implementations - Circle.area() returns 3.14, Square.area() returns 1. Each class provides its own behavior for calculating area, but they all use the same method name (area()). This is polymorphism: same interface (area()), different behavior (3.14 vs 1).

Same method name, different implementations:
• [Circle().area(), Square().area()] returns [3.14, 1]
• Both classes have area() method
• Circle.area() returns 3.14
• Square.area() returns 1
• Same method name, different implementations
• Returns: [3.14, 1]

How it works:
• Circle().area() calls area() on Circle instance
• Python uses Circle.area() (returns 3.14)
• Square().area() calls area() on Square instance
• Python uses Square.area() (returns 1)
• Both use same method name, different implementations
• Returns: [3.14, 1]

Example:
class Shape:
    def area(self):
        return 0  # Default
class Circle(Shape):
    def area(self):
        return 3.14  # Circle-specific
class Square(Shape):
    def area(self):
        return 1  # Square-specific
[Circle().area(), Square().area()]  # [3.14, 1] (polymorphism)

Common uses:
• Polymorphism: same method name, different implementations
• Method overriding: each class provides its own behavior
• Code flexibility: same interface, different behavior
• Object-oriented programming

Example: If class Shape: def area(self): return 0; class Circle(Shape): def area(self): return 3.14; class Square(Shape): def area(self): return 1; [Circle().area(), Square().area()], then [Circle().area(), Square().area()] returns [3.14, 1] because polymorphism allows the same method name with different implementations - Circle.area() returns 3.14, Square.area() returns 1.

Key Concepts:
• Same method name, different implementations: • [Circle().area(), Square().area()] returns [3.14, 1] • Both classes have area() method • Circle.area() returns 3.14 • Square.area() returns 1 • Same method name, different implementations • Returns: [3.14, 1] How it works: • Circle().area() calls area() on Circle instance • Python uses Circle.area() (returns 3.14) • Square().area() calls area() on Square instance • Python uses Square.area() (returns 1) • Both use same method name, different implementations • Returns: [3.14, 1] Example: class Shape: def area(self): return 0 # Default class Circle(Shape): def area(self): return 3.14 # Circle-specific class Square(Shape): def area(self): return 1 # Square-specific [Circle().area(), Square().area()] # [3.14, 1] (polymorphism) Common uses: • Polymorphism: same method name, different implementations • Method overriding: each class provides its own behavior • Code flexibility: same interface, different behavior • Object-oriented programming Example: If class Shape: def area(self): return 0; class Circle(Shape): def area(self): return 3.14; class Square(Shape): def area(self): return 1; [Circle().area(), Square().area()], then [Circle().area(), Square().area()] returns [3.14, 1] because polymorphism allows the same method name with different implementations - Circle.area() returns 3.14, Square.area() returns 1.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is def process(obj): return obj.method(); class A: def method(self): return 1; class B: def method(self): return 2; [process(A()), process(B())]?`, 
    o: ["[1, 2]", "[1, 1]", "Error", "None"], 
    c: 0, 
    e: "Function works with different types (duck typing polymorphism).",
    de: `Functions can work with different types through duck typing polymorphism. If def process(obj): return obj.method(); class A: def method(self): return 1; class B: def method(self): return 2; [process(A()), process(B())], then [process(A()), process(B())] returns [1, 2] because the process() function doesn't care about the specific type - it only cares that the object has a method() method. This is duck typing: "if it walks like a duck and quacks like a duck, it's a duck." As long as both A and B have method(), process() can work with both, and each responds with its own implementation (A returns 1, B returns 2).

Duck typing polymorphism:
• [process(A()), process(B())] returns [1, 2]
• process() doesn't care about specific type
• Only cares that object has method()
• A.method() returns 1
• B.method() returns 2
• Same interface, different behavior
• Returns: [1, 2]

How it works:
• process(A()) calls process() with A instance
• process() executes: return obj.method()
• A.method() returns 1
• process(B()) calls process() with B instance
• process() executes: return obj.method()
• B.method() returns 2
• Returns: [1, 2]

Example:
def process(obj):
    return obj.method()  # Duck typing: just needs method()
class A:
    def method(self):
        return 1
class B:
    def method(self):
        return 2
[process(A()), process(B())]  # [1, 2] (works with different types)

Common uses:
• Duck typing: function works with any type that has required method
• Polymorphism: same interface, different types
• Code flexibility: function works with multiple types
• Object-oriented programming

Example: If def process(obj): return obj.method(); class A: def method(self): return 1; class B: def method(self): return 2; [process(A()), process(B())], then [process(A()), process(B())] returns [1, 2] because functions can work with different types through duck typing polymorphism - the function only cares that objects have the required method, not their specific type.

Key Concepts:
• Duck typing polymorphism: • [process(A()), process(B())] returns [1, 2] • process() doesn't care about specific type • Only cares that object has method() • A.method() returns 1 • B.method() returns 2 • Same interface, different behavior • Returns: [1, 2] How it works: • process(A()) calls process() with A instance • process() executes: return obj.method() • A.method() returns 1 • process(B()) calls process() with B instance • process() executes: return obj.method() • B.method() returns 2 • Returns: [1, 2] Example: def process(obj): return obj.method() # Duck typing: just needs method() class A: def method(self): return 1 class B: def method(self): return 2 [process(A()), process(B())] # [1, 2] (works with different types) Common uses: • Duck typing: function works with any type that has required method • Polymorphism: same interface, different types • Code flexibility: function works with multiple types • Object-oriented programming Example: If def process(obj): return obj.method(); class A: def method(self): return 1; class B: def method(self): return 2; [process(A()), process(B())], then [process(A()), process(B())] returns [1, 2] because functions can work with different types through duck typing polymorphism - the function only cares that objects have the required method, not their specific type.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: def method(self): return 'parent'; class Child(Parent): def method(self): return 'child'; obj = Parent(); obj = Child(); obj.method()?`, 
    o: ["'child'", "'parent'", "Error", "None"], 
    c: 0, 
    e: "Variable can hold different types, method call uses actual type.",
    de: `A variable can hold different types, and method calls use the actual type of the object. If class Parent: def method(self): return 'parent'; class Child(Parent): def method(self): return 'child'; obj = Parent(); obj = Child(); obj.method(), then obj.method() returns 'child' because when you reassign obj = Child(), the variable obj now points to a Child instance. When you call obj.method(), Python uses the actual type of the object (Child), not the variable's original type (Parent). So Child.method() is called, which returns 'child'. This demonstrates polymorphism - the same variable can hold different types, and method calls are resolved based on the actual object type.

Variable holds different types:
• obj.method() returns 'child'
• obj is reassigned to Child instance
• obj.method() uses actual type: Child
• Child.method() returns 'child'
• Returns: 'child'

How it works:
• obj = Parent() creates Parent instance
• obj = Child() reassigns obj to Child instance
• obj.method() calls method on current object
• Current object is Child instance
• Python uses Child.method() (returns 'child')
• Returns: 'child'

Example:
class Parent:
    def method(self):
        return 'parent'
class Child(Parent):
    def method(self):
        return 'child'
obj = Parent()              # obj points to Parent
obj = Child()               # obj now points to Child
obj.method()                # 'child' (uses actual type: Child)

Common uses:
• Polymorphism: variable can hold different types
• Dynamic typing: method call uses actual object type
• Runtime behavior: method resolution at runtime
• Object-oriented programming

Example: If class Parent: def method(self): return 'parent'; class Child(Parent): def method(self): return 'child'; obj = Parent(); obj = Child(); obj.method(), then obj.method() returns 'child' because a variable can hold different types, and method calls use the actual type of the object (Child), not the variable's original assignment.

Key Concepts:
• Variable holds different types: • obj.method() returns 'child' • obj is reassigned to Child instance • obj.method() uses actual type: Child • Child.method() returns 'child' • Returns: 'child' How it works: • obj = Parent() creates Parent instance • obj = Child() reassigns obj to Child instance • obj.method() calls method on current object • Current object is Child instance • Python uses Child.method() (returns 'child') • Returns: 'child' Example: class Parent: def method(self): return 'parent' class Child(Parent): def method(self): return 'child' obj = Parent() # obj points to Parent obj = Child() # obj now points to Child obj.method() # 'child' (uses actual type: Child) Common uses: • Polymorphism: variable can hold different types • Dynamic typing: method call uses actual object type • Runtime behavior: method resolution at runtime • Object-oriented programming Example: If class Parent: def method(self): return 'parent'; class Child(Parent): def method(self): return 'child'; obj = Parent(); obj = Child(); obj.method(), then obj.method() returns 'child' because a variable can hold different types, and method calls use the actual type of the object (Child), not the variable's original assignment.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class A: def __add__(self, other): return 'A'; class B: def __add__(self, other): return 'B'; A() + B()?`, 
    o: ["'A'", "'B'", "Error", "None"], 
    c: 0, 
    e: "Operator overloading enables polymorphic operations.",
    de: `Operator overloading enables polymorphic operations - the same operator can behave differently for different types. If class A: def __add__(self, other): return 'A'; class B: def __add__(self, other): return 'B'; A() + B(), then A() + B() returns 'A' because when you use the + operator, Python calls A().__add__(B()). Since A defines __add__ to return 'A', it returns 'A'. The + operator behaves differently for A and B (A returns 'A', B would return 'B'), demonstrating polymorphism - the same operator interface, but different behavior based on the left operand's type.

Operator overloading polymorphism:
• A() + B() returns 'A'
• + operator calls A().__add__(B())
• A.__add__() returns 'A'
• Operator behavior depends on left operand
• Same operator, different behavior
• Returns: 'A'

How it works:
• A() + B() uses + operator
• Python calls A().__add__(B())
• A.__add__() executes: return 'A'
• Returns: 'A'

Example:
class A:
    def __add__(self, other):
        return 'A'  # A's behavior
class B:
    def __add__(self, other):
        return 'B'  # B's behavior
A() + B()                # 'A' (calls A.__add__)
B() + A()                # 'B' (calls B.__add__)

Common uses:
• Operator overloading: __add__, __sub__, etc. (polymorphic operators)
• Custom operators: define how operators work for your types
• Polymorphism
• Special methods

Example: If class A: def __add__(self, other): return 'A'; class B: def __add__(self, other): return 'B'; A() + B(), then A() + B() returns 'A' because operator overloading enables polymorphic operations - the same operator behaves differently for different types, and A.__add__() is called.

Key Concepts:
• (polymorphic operators) • Custom operators: define how operators work for your types • Polymorphism • Special methods Example: If class A: def __add__(self, other): return 'A'; class B: def __add__(self, other): return 'B'; A() + B(), then A() + B() returns 'A' because operator overloading enables polymorphic operations - the same operator behaves differently for different types, and A.__add__() is called.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Animal: def speak(self): pass; class Dog(Animal): def speak(self): return 'bark'; def make_sound(animal): return animal.speak(); make_sound(Dog())?`, 
    o: ["'bark'", "None", "Error", "'sound'"], 
    c: 0, 
    e: "Polymorphism: function accepts any Animal, calls appropriate speak().",
    de: `Polymorphism allows a function to accept any object of a base type and call the appropriate method implementation. If class Animal: def speak(self): pass; class Dog(Animal): def speak(self): return 'bark'; def make_sound(animal): return animal.speak(); make_sound(Dog()), then make_sound(Dog()) returns 'bark' because make_sound() accepts any Animal (or subclass), and when you pass a Dog instance, it calls Dog.speak(), which returns 'bark'. The function doesn't need to know the specific type - it just calls speak(), and Python uses the actual type's implementation (Dog.speak(), not Animal.speak()). This is polymorphism in action.

Polymorphic function:
• make_sound(Dog()) returns 'bark'
• make_sound() accepts any Animal
• Calls animal.speak()
• Actual type is Dog
• Python uses Dog.speak() (returns 'bark')
• Returns: 'bark'

How it works:
• make_sound(Dog()) calls function with Dog instance
• make_sound() executes: return animal.speak()
• animal is Dog instance
• Python calls Dog.speak() (not Animal.speak())
• Dog.speak() returns 'bark'
• Returns: 'bark'

Example:
class Animal:
    def speak(self):
        pass
class Dog(Animal):
    def speak(self):
        return 'bark'  # Override
def make_sound(animal):
    return animal.speak()  # Works with any Animal
make_sound(Dog())          # 'bark' (calls Dog.speak())

Common uses:
• Polymorphic functions: function works with base type, calls actual type's method
• Method overriding: different subclasses, same method name
• Code flexibility: function works with multiple types
• Object-oriented programming

Example: If class Animal: def speak(self): pass; class Dog(Animal): def speak(self): return 'bark'; def make_sound(animal): return animal.speak(); make_sound(Dog()), then make_sound(Dog()) returns 'bark' because polymorphism allows a function to accept any Animal and call the appropriate speak() implementation - in this case, Dog.speak().

Key Concepts:
• Polymorphic function: • make_sound(Dog()) returns 'bark' • make_sound() accepts any Animal • Calls animal.speak() • Actual type is Dog • Python uses Dog.speak() (returns 'bark') • Returns: 'bark' How it works: • make_sound(Dog()) calls function with Dog instance • make_sound() executes: return animal.speak() • animal is Dog instance • Python calls Dog.speak() (not Animal.speak()) • Dog.speak() returns 'bark' • Returns: 'bark' Example: class Animal: def speak(self): pass class Dog(Animal): def speak(self): return 'bark' # Override def make_sound(animal): return animal.speak() # Works with any Animal make_sound(Dog()) # 'bark' (calls Dog.speak()) Common uses: • Polymorphic functions: function works with base type, calls actual type's method • Method overriding: different subclasses, same method name • Code flexibility: function works with multiple types • Object-oriented programming Example: If class Animal: def speak(self): pass; class Dog(Animal): def speak(self): return 'bark'; def make_sound(animal): return animal.speak(); make_sound(Dog()), then make_sound(Dog()) returns 'bark' because polymorphism allows a function to accept any Animal and call the appropriate speak() implementation - in this case, Dog.speak().

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class A: def method(self): return 1; class B(A): def method(self): return 2; class C(B): def method(self): return 3; [A().method(), B().method(), C().method()]?`, 
    o: ["[1, 2, 3]", "[1, 1, 1]", "Error", "None"], 
    c: 0, 
    e: "Each class in hierarchy can override method (polymorphism).",
    de: `Each class in an inheritance hierarchy can override a method, providing its own implementation. If class A: def method(self): return 1; class B(A): def method(self): return 2; class C(B): def method(self): return 3; [A().method(), B().method(), C().method()], then [A().method(), B().method(), C().method()] returns [1, 2, 3] because each class defines its own method() with its own implementation - A.method() returns 1, B.method() returns 2, C.method() returns 3. This is polymorphism: same method name (method()), but each class in the hierarchy provides its own behavior. When you call method() on an instance, Python uses that instance's class's implementation.

Each class overrides method:
• [A().method(), B().method(), C().method()] returns [1, 2, 3]
• A.method() returns 1
• B.method() returns 2
• C.method() returns 3
• Each class provides its own implementation
• Returns: [1, 2, 3]

How it works:
• A().method() calls method on A instance
• Python uses A.method() (returns 1)
• B().method() calls method on B instance
• Python uses B.method() (returns 2)
• C().method() calls method on C instance
• Python uses C.method() (returns 3)
• Returns: [1, 2, 3]

Example:
class A:
    def method(self):
        return 1
class B(A):
    def method(self):
        return 2  # Overrides A
class C(B):
    def method(self):
        return 3  # Overrides B
[A().method(), B().method(), C().method()]  # [1, 2, 3] (polymorphism)

Common uses:
• Method overriding: each class in hierarchy can override method
• Polymorphism: same method name, different implementations
• Inheritance hierarchy
• Object-oriented programming

Example: If class A: def method(self): return 1; class B(A): def method(self): return 2; class C(B): def method(self): return 3; [A().method(), B().method(), C().method()], then [A().method(), B().method(), C().method()] returns [1, 2, 3] because each class in the hierarchy can override the method, providing its own implementation.

Key Concepts:
• Each class overrides method: • [A().method(), B().method(), C().method()] returns [1, 2, 3] • A.method() returns 1 • B.method() returns 2 • C.method() returns 3 • Each class provides its own implementation • Returns: [1, 2, 3] How it works: • A().method() calls method on A instance • Python uses A.method() (returns 1) • B().method() calls method on B instance • Python uses B.method() (returns 2) • C().method() calls method on C instance • Python uses C.method() (returns 3) • Returns: [1, 2, 3] Example: class A: def method(self): return 1 class B(A): def method(self): return 2 # Overrides A class C(B): def method(self): return 3 # Overrides B [A().method(), B().method(), C().method()] # [1, 2, 3] (polymorphism) Common uses: • Method overriding: each class in hierarchy can override method • Polymorphism: same method name, different implementations • Inheritance hierarchy • Object-oriented programming Example: If class A: def method(self): return 1; class B(A): def method(self): return 2; class C(B): def method(self): return 3; [A().method(), B().method(), C().method()], then [A().method(), B().method(), C().method()] returns [1, 2, 3] because each class in the hierarchy can override the method, providing its own implementation.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: def method(self): return 'parent'; class Child(Parent): pass; [Parent().method(), Child().method()]?`, 
    o: ["['parent', 'parent']", "['parent', 'child']", "Error", "None"], 
    c: 0, 
    e: "Child without override uses parent method (still polymorphic).",
    de: `A child class without its own method override uses the parent's method, but this is still polymorphic behavior. If class Parent: def method(self): return 'parent'; class Child(Parent): pass; [Parent().method(), Child().method()], then [Parent().method(), Child().method()] returns ['parent', 'parent'] because Child doesn't define its own method(), so when you call Child().method(), Python searches for method() in Child (not found), then finds it in Parent and uses Parent.method(). Both Parent and Child use the same method implementation, demonstrating polymorphism - the same method call works on both types, even though Child doesn't override it. The behavior is the same, but the mechanism is polymorphic.

Child uses parent method:
• [Parent().method(), Child().method()] returns ['parent', 'parent']
• Parent.method() returns 'parent'
• Child doesn't define method()
• Child uses Parent.method() (returns 'parent')
• Still polymorphic: same method call works on both
• Returns: ['parent', 'parent']

How it works:
• Parent().method() calls method on Parent instance
• Python uses Parent.method() (returns 'parent')
• Child().method() calls method on Child instance
• Python searches: Child (not found) → Parent (found)
• Uses Parent.method() (returns 'parent')
• Returns: ['parent', 'parent']

Example:
class Parent:
    def method(self):
        return 'parent'
class Child(Parent): pass  # No override
[Parent().method(), Child().method()]  # ['parent', 'parent'] (still polymorphic)

Common uses:
• Inherited methods: child uses parent method if not overridden
• Polymorphism: same method call works on multiple types
• Method reuse: child inherits parent behavior
• Object-oriented programming

Example: If class Parent: def method(self): return 'parent'; class Child(Parent): pass; [Parent().method(), Child().method()], then [Parent().method(), Child().method()] returns ['parent', 'parent'] because a child without an override uses the parent method, but this is still polymorphic - the same method call works on both types.

Key Concepts:
• Child uses parent method: • [Parent().method(), Child().method()] returns ['parent', 'parent'] • Parent.method() returns 'parent' • Child doesn't define method() • Child uses Parent.method() (returns 'parent') • Still polymorphic: same method call works on both • Returns: ['parent', 'parent'] How it works: • Parent().method() calls method on Parent instance • Python uses Parent.method() (returns 'parent') • Child().method() calls method on Child instance • Python searches: Child (not found) → Parent (found) • Uses Parent.method() (returns 'parent') • Returns: ['parent', 'parent'] Example: class Parent: def method(self): return 'parent' class Child(Parent): pass # No override [Parent().method(), Child().method()] # ['parent', 'parent'] (still polymorphic) Common uses: • Inherited methods: child uses parent method if not overridden • Polymorphism: same method call works on multiple types • Method reuse: child inherits parent behavior • Object-oriented programming Example: If class Parent: def method(self): return 'parent'; class Child(Parent): pass; [Parent().method(), Child().method()], then [Parent().method(), Child().method()] returns ['parent', 'parent'] because a child without an override uses the parent method, but this is still polymorphic - the same method call works on both types.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class A: def __str__(self): return 'A'; class B: def __str__(self): return 'B'; [str(A()), str(B())]?`, 
    o: ["['A', 'B']", "['A', 'A']", "Error", "None"], 
    c: 0, 
    e: "Special methods enable polymorphic behavior with built-ins.",
    de: `Special methods (magic methods) enable polymorphic behavior with built-in functions. If class A: def __str__(self): return 'A'; class B: def __str__(self): return 'B'; [str(A()), str(B())], then [str(A()), str(B())] returns ['A', 'B'] because str() calls the __str__() method, and each class defines its own __str__() with its own implementation - A.__str__() returns 'A', B.__str__() returns 'B'. This demonstrates polymorphism with built-in functions - the same built-in function (str()) works with different types, and each type responds with its own implementation through its special method. Special methods like __str__, __len__, __add__, etc. enable polymorphic behavior with Python's built-in functions and operators.

Special methods enable polymorphism:
• [str(A()), str(B())] returns ['A', 'B']
• str() calls __str__() method
• A.__str__() returns 'A'
• B.__str__() returns 'B'
• Same built-in function, different behavior
• Returns: ['A', 'B']

How it works:
• str(A()) calls str() on A instance
• str() calls A.__str__() (returns 'A')
• str(B()) calls str() on B instance
• str() calls B.__str__() (returns 'B')
• Both use same built-in function, different implementations
• Returns: ['A', 'B']

Example:
class A:
    def __str__(self):
        return 'A'
class B:
    def __str__(self):
        return 'B'
[str(A()), str(B())]  # ['A', 'B'] (polymorphism with built-ins)

Common uses:
• Special methods: __str__, __len__, __add__, etc. (polymorphic with built-ins)
• Operator overloading: define how operators work for your types
• Polymorphism
• Built-in functions

Example: If class A: def __str__(self): return 'A'; class B: def __str__(self): return 'B'; [str(A()), str(B())], then [str(A()), str(B())] returns ['A', 'B'] because special methods enable polymorphic behavior with built-in functions - each class defines its own __str__(), so str() calls the appropriate implementation.

Key Concepts:
• (polymorphic with built-ins) • Operator overloading: define how operators work for your types • Polymorphism • Built-in functions Example: If class A: def __str__(self): return 'A'; class B: def __str__(self): return 'B'; [str(A()), str(B())], then [str(A()), str(B())] returns ['A', 'B'] because special methods enable polymorphic behavior with built-in functions - each class defines its own __str__(), so str() calls the appropriate implementation.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  
  // 51-60: Encapsulation - Private Attributes
  (_i: number) => ({ 
    q: `What is class MyClass: def __init__(self): self.__x = 1; obj = MyClass(); obj.__x?`, 
    o: ["AttributeError", "1", "Error", "None"], 
    c: 0, 
    e: "Double underscore prefix triggers name mangling (private).",
    de: `Double underscore prefix (__) triggers name mangling, making attributes "private" by changing their name. If class MyClass: def __init__(self): self.__x = 1; obj = MyClass(); obj.__x, then obj.__x raises an AttributeError because Python automatically renames __x to _MyClass__x (adding the class name prefix). This is name mangling - Python changes the attribute name to include the class name, making it harder to access from outside the class. The attribute still exists, but with a different name (_MyClass__x), so direct access via __x fails.

Name mangling with double underscore:
• obj.__x raises AttributeError
• Python renames __x to _MyClass__x
• Name mangling adds class name prefix
• Direct access via __x fails
• Raises AttributeError

How it works:
• self.__x = 1 sets attribute
• Python renames __x to _MyClass__x internally
• obj.__x tries to access __x
• Python looks for __x (not found, it's _MyClass__x now)
• Raises AttributeError: 'MyClass' object has no attribute '__x'

Example:
class MyClass:
    def __init__(self):
        self.__x = 1  # Name mangled to _MyClass__x
obj = MyClass()
obj.__x                # AttributeError (name mangled)
obj._MyClass__x       # 1 (mangled name works)

Common uses:
• Private attributes: self.__attr (name mangled, harder to access)
• Encapsulation: prevent direct access to internal attributes
• Name mangling
• Object-oriented programming

Example: If class MyClass: def __init__(self): self.__x = 1; obj = MyClass(); obj.__x, then obj.__x raises an AttributeError because double underscore prefix triggers name mangling, renaming __x to _MyClass__x.

Key Concepts:
• Name mangling with double underscore: • obj.__x raises AttributeError • Python renames __x to _MyClass__x • Name mangling adds class name prefix • Direct access via __x fails • Raises AttributeError How it works: • self.__x = 1 sets attribute • Python renames __x to _MyClass__x internally • obj.__x tries to access __x • Python looks for __x (not found, it's _MyClass__x now) • Raises AttributeError: 'MyClass' object has no attribute '__x' Example: class MyClass: def __init__(self): self.__x = 1 # Name mangled to _MyClass__x obj = MyClass() obj.__x # AttributeError (name mangled) obj._MyClass__x # 1 (mangled name works) Common uses: • Private attributes: self.__attr (name mangled, harder to access) • Encapsulation: prevent direct access to internal attributes • Name mangling • Object-oriented programming Example: If class MyClass: def __init__(self): self.__x = 1; obj = MyClass(); obj.__x, then obj.__x raises an AttributeError because double underscore prefix triggers name mangling, renaming __x to _MyClass__x.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __init__(self): self.__x = 1; obj = MyClass(); obj._MyClass__x?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "Name mangling: __x becomes _MyClass__x (can still access).",
    de: `Name mangling renames attributes with double underscore prefix by adding the class name. If class MyClass: def __init__(self): self.__x = 1; obj = MyClass(); obj._MyClass__x, then obj._MyClass__x returns 1 because Python renames __x to _MyClass__x (class name + attribute name). While name mangling makes attributes harder to access, they're not truly private - you can still access them using the mangled name. This is Python's way of providing "privacy" - it's a convention, not enforced security.

Name mangling creates mangled name:
• obj._MyClass__x returns 1
• __x is renamed to _MyClass__x
• Mangled name: _ClassName__attribute
• Can still access using mangled name
• Returns: 1

How it works:
• self.__x = 1 sets attribute
• Python renames __x to _MyClass__x
• obj._MyClass__x accesses mangled name
• Attribute exists as _MyClass__x
• Returns: 1

Example:
class MyClass:
    def __init__(self):
        self.__x = 1  # Renamed to _MyClass__x
obj = MyClass()
obj._MyClass__x       # 1 (access via mangled name)
obj.__x               # AttributeError (original name doesn't work)

Common uses:
• Understanding mangling: __attr becomes _ClassName__attr
• Accessing mangled attributes: obj._ClassName__attr
• Name mangling
• Encapsulation

Example: If class MyClass: def __init__(self): self.__x = 1; obj = MyClass(); obj._MyClass__x, then obj._MyClass__x returns 1 because name mangling renames __x to _MyClass__x, and you can still access it using the mangled name.

Key Concepts:
• Name mangling creates mangled name: • obj._MyClass__x returns 1 • __x is renamed to _MyClass__x • Mangled name: _ClassName__attribute • Can still access using mangled name • Returns: 1 How it works: • self.__x = 1 sets attribute • Python renames __x to _MyClass__x • obj._MyClass__x accesses mangled name • Attribute exists as _MyClass__x • Returns: 1 Example: class MyClass: def __init__(self): self.__x = 1 # Renamed to _MyClass__x obj = MyClass() obj._MyClass__x # 1 (access via mangled name) obj.__x # AttributeError (original name doesn't work) Common uses: • Understanding mangling: __attr becomes _ClassName__attr • Accessing mangled attributes: obj._ClassName__attr • Name mangling • Encapsulation Example: If class MyClass: def __init__(self): self.__x = 1; obj = MyClass(); obj._MyClass__x, then obj._MyClass__x returns 1 because name mangling renames __x to _MyClass__x, and you can still access it using the mangled name.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: __x = 1; MyClass.__x?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "Class attribute with __ prefix doesn't mangle (no self).",
    de: `Class attributes with double underscore prefix don't get name mangled because name mangling only applies to instance attributes (those set with self). If class MyClass: __x = 1; MyClass.__x, then MyClass.__x returns 1 because __x is a class attribute (defined at class level, not with self), so Python doesn't apply name mangling to it. Name mangling only happens for instance attributes (self.__x), not class attributes (__x at class level).

Class attribute doesn't mangle:
• MyClass.__x returns 1
• __x is class attribute (not self.__x)
• Name mangling only applies to instance attributes
• Class attributes with __ don't mangle
• Returns: 1

How it works:
• class MyClass: __x = 1 defines class attribute
• __x is at class level (not self.__x)
• Name mangling only for instance attributes
• MyClass.__x accesses class attribute directly
• Returns: 1

Example:
class MyClass:
    __x = 1  # Class attribute (doesn't mangle)
MyClass.__x            # 1 (access directly, no mangling)
# vs
class MyClass:
    def __init__(self):
        self.__x = 1  # Instance attribute (mangles to _MyClass__x)

Common uses:
• Class attributes: __attr at class level (doesn't mangle)
• Understanding mangling: only instance attributes get mangled
• Name mangling
• Class vs instance attributes

Example: If class MyClass: __x = 1; MyClass.__x, then MyClass.__x returns 1 because class attributes with __ prefix don't get name mangled - name mangling only applies to instance attributes (self.__x).

Key Concepts:
• Class attribute doesn't mangle: • MyClass.__x returns 1 • __x is class attribute (not self.__x) • Name mangling only applies to instance attributes • Class attributes with __ don't mangle • Returns: 1 How it works: • class MyClass: __x = 1 defines class attribute • __x is at class level (not self.__x) • Name mangling only for instance attributes • MyClass.__x accesses class attribute directly • Returns: 1 Example: class MyClass: __x = 1 # Class attribute (doesn't mangle) MyClass.__x # 1 (access directly, no mangling) # vs class MyClass: def __init__(self): self.__x = 1 # Instance attribute (mangles to _MyClass__x) Common uses: • Class attributes: __attr at class level (doesn't mangle) • Understanding mangling: only instance attributes get mangled • Name mangling • Class vs instance attributes Example: If class MyClass: __x = 1; MyClass.__x, then MyClass.__x returns 1 because class attributes with __ prefix don't get name mangled - name mangling only applies to instance attributes (self.__x).

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __init__(self): self._x = 1; obj = MyClass(); obj._x?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "Single underscore is convention (protected), not enforced.",
    de: `Single underscore prefix (_) is a naming convention indicating "protected" or "internal use" attributes, but Python doesn't enforce it. If class MyClass: def __init__(self): self._x = 1; obj = MyClass(); obj._x, then obj._x returns 1 because single underscore is just a convention - it doesn't trigger name mangling or prevent access. It's a signal to other developers that this attribute is intended for internal use, but Python allows access anyway. This is different from double underscore (__), which triggers name mangling.

Single underscore convention:
• obj._x returns 1
• Single underscore is convention only
• Not enforced by Python
• Signals "internal use" but accessible
• Returns: 1

How it works:
• self._x = 1 sets attribute with single underscore
• Python doesn't mangle or restrict access
• obj._x accesses attribute directly
• Convention indicates internal use
• Returns: 1

Example:
class MyClass:
    def __init__(self):
        self._x = 1  # Protected (convention)
obj = MyClass()
obj._x                # 1 (accessible, but convention says "internal")

Common uses:
• Protected attributes: self._attr (convention, not enforced)
• Internal use: signal that attribute is for internal use
• Naming conventions
• Encapsulation

Example: If class MyClass: def __init__(self): self._x = 1; obj = MyClass(); obj._x, then obj._x returns 1 because single underscore is a convention indicating "protected" attributes, but Python doesn't enforce it - the attribute is still accessible.

Key Concepts:
• Single underscore convention: • obj._x returns 1 • Single underscore is convention only • Not enforced by Python • Signals "internal use" but accessible • Returns: 1 How it works: • self._x = 1 sets attribute with single underscore • Python doesn't mangle or restrict access • obj._x accesses attribute directly • Convention indicates internal use • Returns: 1 Example: class MyClass: def __init__(self): self._x = 1 # Protected (convention) obj = MyClass() obj._x # 1 (accessible, but convention says "internal") Common uses: • Protected attributes: self._attr (convention, not enforced) • Internal use: signal that attribute is for internal use • Naming conventions • Encapsulation Example: If class MyClass: def __init__(self): self._x = 1; obj = MyClass(); obj._x, then obj._x returns 1 because single underscore is a convention indicating "protected" attributes, but Python doesn't enforce it - the attribute is still accessible.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: def __init__(self): self.__x = 1; class Child(Parent): def method(self): return self.__x; Child().method()?`, 
    o: ["AttributeError", "1", "Error", "None"], 
    c: 0, 
    e: "Name mangling: Child can't access Parent.__x (becomes _Parent__x).",
    de: `Name mangling prevents child classes from accessing parent's private attributes. If class Parent: def __init__(self): self.__x = 1; class Child(Parent): def method(self): return self.__x; Child().method(), then Child().method() raises an AttributeError because Parent's __x is mangled to _Parent__x, but Child's method tries to access __x, which would be mangled to _Child__x (different name). Name mangling includes the class name, so each class has its own mangled namespace, preventing child classes from accidentally accessing parent's private attributes.

Name mangling prevents child access:
• Child().method() raises AttributeError
• Parent.__x is mangled to _Parent__x
• Child tries to access __x (would be _Child__x)
• Different mangled names
• Raises AttributeError

How it works:
• Parent.__init__ sets self.__x = 1 (mangled to _Parent__x)
• Child().method() tries to access self.__x
• In Child context, __x would mangle to _Child__x
• _Child__x doesn't exist (attribute is _Parent__x)
• Raises AttributeError

Example:
class Parent:
    def __init__(self):
        self.__x = 1  # Mangled to _Parent__x
class Child(Parent):
    def method(self):
        return self.__x  # Would mangle to _Child__x (doesn't exist)
Child().method()        # AttributeError (can't access parent's __x)

Common uses:
• Private attributes: name mangling prevents child access
• Encapsulation: each class has its own mangled namespace
• Name mangling
• Inheritance

Example: If class Parent: def __init__(self): self.__x = 1; class Child(Parent): def method(self): return self.__x; Child().method(), then Child().method() raises an AttributeError because name mangling prevents child classes from accessing parent's private attributes - Parent.__x becomes _Parent__x, but Child tries to access __x which would be _Child__x.

Key Concepts:
• Name mangling prevents child access: • Child().method() raises AttributeError • Parent.__x is mangled to _Parent__x • Child tries to access __x (would be _Child__x) • Different mangled names • Raises AttributeError How it works: • Parent.__init__ sets self.__x = 1 (mangled to _Parent__x) • Child().method() tries to access self.__x • In Child context, __x would mangle to _Child__x • _Child__x doesn't exist (attribute is _Parent__x) • Raises AttributeError Example: class Parent: def __init__(self): self.__x = 1 # Mangled to _Parent__x class Child(Parent): def method(self): return self.__x # Would mangle to _Child__x (doesn't exist) Child().method() # AttributeError (can't access parent's __x) Common uses: • Private attributes: name mangling prevents child access • Encapsulation: each class has its own mangled namespace • Name mangling • Inheritance Example: If class Parent: def __init__(self): self.__x = 1; class Child(Parent): def method(self): return self.__x; Child().method(), then Child().method() raises an AttributeError because name mangling prevents child classes from accessing parent's private attributes - Parent.__x becomes _Parent__x, but Child tries to access __x which would be _Child__x.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: def __init__(self): self.__x = 1; class Child(Parent): def method(self): return self._Parent__x; Child().method()?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "Can access mangled name with _ClassName prefix.",
    de: `You can access a parent's mangled attribute by using the mangled name with the parent class name prefix. If class Parent: def __init__(self): self.__x = 1; class Child(Parent): def method(self): return self._Parent__x; Child().method(), then Child().method() returns 1 because self._Parent__x accesses the mangled name directly. Parent's __x is mangled to _Parent__x, and by using the full mangled name, you can access it from the child class. This shows that name mangling is not true privacy - it's just a naming convention that makes access harder.

Access mangled name directly:
• Child().method() returns 1
• self._Parent__x accesses mangled name
• Parent.__x is mangled to _Parent__x
• Using mangled name works
• Returns: 1

How it works:
• Parent.__init__ sets self.__x = 1 (mangled to _Parent__x)
• Child().method() accesses self._Parent__x
• Uses full mangled name with class prefix
• Attribute exists as _Parent__x
• Returns: 1

Example:
class Parent:
    def __init__(self):
        self.__x = 1  # Mangled to _Parent__x
class Child(Parent):
    def method(self):
        return self._Parent__x  # Access via mangled name
Child().method()        # 1 (can access parent's mangled attribute)

Common uses:
• Accessing mangled attributes: obj._ClassName__attr
• Understanding mangling: can access if you know the mangled name
• Name mangling
• Inheritance

Example: If class Parent: def __init__(self): self.__x = 1; class Child(Parent): def method(self): return self._Parent__x; Child().method(), then Child().method() returns 1 because you can access the mangled name with the class name prefix - Parent.__x becomes _Parent__x, and accessing it directly works.

Key Concepts:
• Access mangled name directly: • Child().method() returns 1 • self._Parent__x accesses mangled name • Parent.__x is mangled to _Parent__x • Using mangled name works • Returns: 1 How it works: • Parent.__init__ sets self.__x = 1 (mangled to _Parent__x) • Child().method() accesses self._Parent__x • Uses full mangled name with class prefix • Attribute exists as _Parent__x • Returns: 1 Example: class Parent: def __init__(self): self.__x = 1 # Mangled to _Parent__x class Child(Parent): def method(self): return self._Parent__x # Access via mangled name Child().method() # 1 (can access parent's mangled attribute) Common uses: • Accessing mangled attributes: obj._ClassName__attr • Understanding mangling: can access if you know the mangled name • Name mangling • Inheritance Example: If class Parent: def __init__(self): self.__x = 1; class Child(Parent): def method(self): return self._Parent__x; Child().method(), then Child().method() returns 1 because you can access the mangled name with the class name prefix - Parent.__x becomes _Parent__x, and accessing it directly works.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __init__(self): self.__x__ = 1; obj = MyClass(); obj.__x__?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "Double underscore on both sides doesn't mangle (special methods).",
    de: `Double underscore on both sides (__x__) doesn't trigger name mangling because Python reserves this pattern for special methods (magic methods). If class MyClass: def __init__(self): self.__x__ = 1; obj = MyClass(); obj.__x__, then obj.__x__ returns 1 because attributes with double underscores on both sides (like __str__, __len__, __init__) are reserved for Python's special methods and don't get name mangled. This allows you to define custom special methods without interference from name mangling.

Double underscore both sides doesn't mangle:
• obj.__x__ returns 1
• __x__ has double underscore on both sides
• Reserved pattern for special methods
• Doesn't trigger name mangling
• Returns: 1

How it works:
• self.__x__ = 1 sets attribute
• Python sees __x__ (double underscore both sides)
• Recognizes as special method pattern
• Doesn't apply name mangling
• obj.__x__ accesses attribute directly
• Returns: 1

Example:
class MyClass:
    def __init__(self):
        self.__x__ = 1  # Doesn't mangle (special method pattern)
obj = MyClass()
obj.__x__              # 1 (no mangling, accessible)
# vs
self.__x = 1            # Mangles to _MyClass__x

Common uses:
• Special methods: __str__, __len__, etc. (don't mangle)
• Understanding mangling: only __attr (not __attr__) mangles
• Name mangling
• Special methods

Example: If class MyClass: def __init__(self): self.__x__ = 1; obj = MyClass(); obj.__x__, then obj.__x__ returns 1 because double underscore on both sides doesn't trigger name mangling - this pattern is reserved for special methods.

Key Concepts:
• (don't mangle) • Understanding mangling: only __attr (not __attr__) mangles • Name mangling • Special methods Example: If class MyClass: def __init__(self): self.__x__ = 1; obj = MyClass(); obj.__x__, then obj.__x__ returns 1 because double underscore on both sides doesn't trigger name mangling - this pattern is reserved for special methods.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __init__(self): self._x = 1; def get_x(self): return self._x; obj = MyClass(); obj.get_x()?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "Getter method provides controlled access to protected attribute.",
    de: `Getter methods provide controlled access to protected (single underscore) attributes. If class MyClass: def __init__(self): self._x = 1; def get_x(self): return self._x; obj = MyClass(); obj.get_x(), then obj.get_x() returns 1 because get_x() is a getter method that provides controlled access to the protected attribute _x. While _x could be accessed directly (obj._x), using a getter method provides a controlled interface, allowing the class to add validation, transformation, or logging in the future without changing the external API.

Getter method for protected attribute:
• obj.get_x() returns 1
• get_x() provides controlled access
• Accesses protected attribute _x
• Returns value through method
• Returns: 1

How it works:
• obj.get_x() calls getter method
• get_x() executes: return self._x
• Accesses protected attribute _x = 1
• Returns value through method
• Returns: 1

Example:
class MyClass:
    def __init__(self):
        self._x = 1  # Protected attribute
    def get_x(self):
        return self._x  # Getter method
obj = MyClass()
obj.get_x()            # 1 (controlled access)
obj._x                 # 1 (direct access also works, but getter preferred)

Common uses:
• Controlled access: getter methods provide interface to protected attributes
• Encapsulation: hide implementation details behind methods
• Getter methods
• Object-oriented programming

Example: If class MyClass: def __init__(self): self._x = 1; def get_x(self): return self._x; obj = MyClass(); obj.get_x(), then obj.get_x() returns 1 because getter methods provide controlled access to protected attributes, allowing the class to manage how attributes are accessed.

Key Concepts:
• Getter method for protected attribute: • obj.get_x() returns 1 • get_x() provides controlled access • Accesses protected attribute _x • Returns value through method • Returns: 1 How it works: • obj.get_x() calls getter method • get_x() executes: return self._x • Accesses protected attribute _x = 1 • Returns value through method • Returns: 1 Example: class MyClass: def __init__(self): self._x = 1 # Protected attribute def get_x(self): return self._x # Getter method obj = MyClass() obj.get_x() # 1 (controlled access) obj._x # 1 (direct access also works, but getter preferred) Common uses: • Controlled access: getter methods provide interface to protected attributes • Encapsulation: hide implementation details behind methods • Getter methods • Object-oriented programming Example: If class MyClass: def __init__(self): self._x = 1; def get_x(self): return self._x; obj = MyClass(); obj.get_x(), then obj.get_x() returns 1 because getter methods provide controlled access to protected attributes, allowing the class to manage how attributes are accessed.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __init__(self): self.__x = 1; def get_x(self): return self.__x; obj = MyClass(); obj.get_x()?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "Getter method can access mangled name from within class.",
    de: `Getter methods can access mangled (double underscore) attributes from within the class. If class MyClass: def __init__(self): self.__x = 1; def get_x(self): return self.__x; obj = MyClass(); obj.get_x(), then obj.get_x() returns 1 because when you access __x from within the class (in a method), Python automatically uses the mangled name (_MyClass__x). Inside the class, you can use __x and Python knows to look for _MyClass__x. This allows getter methods to access private (mangled) attributes while keeping them hidden from external access.

Getter accesses mangled name:
• obj.get_x() returns 1
• get_x() accesses __x from within class
• Python automatically uses mangled name _MyClass__x
• Works from within class
• Returns: 1

How it works:
• obj.get_x() calls getter method
• get_x() executes: return self.__x
• Inside class, __x refers to _MyClass__x (mangled)
• Python automatically resolves to mangled name
• Returns: 1

Example:
class MyClass:
    def __init__(self):
        self.__x = 1  # Mangled to _MyClass__x
    def get_x(self):
        return self.__x  # Inside class, __x works (auto-mangled)
obj = MyClass()
obj.get_x()            # 1 (works from within class)
obj.__x                # AttributeError (doesn't work from outside)

Common uses:
• Private attributes: getter methods can access mangled attributes
• Encapsulation: hide attributes, provide controlled access
• Getter methods
• Name mangling

Example: If class MyClass: def __init__(self): self.__x = 1; def get_x(self): return self.__x; obj = MyClass(); obj.get_x(), then obj.get_x() returns 1 because getter methods can access mangled names from within the class - Python automatically resolves __x to _MyClass__x inside the class.

Key Concepts:
• Getter accesses mangled name: • obj.get_x() returns 1 • get_x() accesses __x from within class • Python automatically uses mangled name _MyClass__x • Works from within class • Returns: 1 How it works: • obj.get_x() calls getter method • get_x() executes: return self.__x • Inside class, __x refers to _MyClass__x (mangled) • Python automatically resolves to mangled name • Returns: 1 Example: class MyClass: def __init__(self): self.__x = 1 # Mangled to _MyClass__x def get_x(self): return self.__x # Inside class, __x works (auto-mangled) obj = MyClass() obj.get_x() # 1 (works from within class) obj.__x # AttributeError (doesn't work from outside) Common uses: • Private attributes: getter methods can access mangled attributes • Encapsulation: hide attributes, provide controlled access • Getter methods • Name mangling Example: If class MyClass: def __init__(self): self.__x = 1; def get_x(self): return self.__x; obj = MyClass(); obj.get_x(), then obj.get_x() returns 1 because getter methods can access mangled names from within the class - Python automatically resolves __x to _MyClass__x inside the class.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __init__(self): self.__x = 1; def set_x(self, val): self.__x = val; obj = MyClass(); obj.set_x(2); obj.get_x() if hasattr(obj, 'get_x') else obj._MyClass__x?`, 
    o: ["2", "1", "Error", "None"], 
    c: 0, 
    e: "Setter method can modify mangled attribute.",
    de: `Setter methods can modify mangled (double underscore) attributes from within the class. If class MyClass: def __init__(self): self.__x = 1; def set_x(self, val): self.__x = val; obj = MyClass(); obj.set_x(2); obj.get_x() if hasattr(obj, 'get_x') else obj._MyClass__x, then it returns 2 because set_x() is a setter method that modifies the mangled attribute __x. Inside the class, __x automatically refers to _MyClass__x, so set_x() can modify it. If get_x() exists, it returns the updated value (2); otherwise, accessing _MyClass__x directly also returns 2.

Setter modifies mangled attribute:
• obj.set_x(2) modifies __x
• Inside class, __x refers to _MyClass__x
• set_x() modifies mangled attribute
• obj.get_x() or obj._MyClass__x returns 2
• Returns: 2

How it works:
• obj.set_x(2) calls setter method
• set_x() executes: self.__x = val
• Inside class, __x refers to _MyClass__x
• Sets _MyClass__x = 2
• obj.get_x() or obj._MyClass__x returns 2
• Returns: 2

Example:
class MyClass:
    def __init__(self):
        self.__x = 1  # Mangled to _MyClass__x
    def set_x(self, val):
        self.__x = val  # Modifies mangled attribute
    def get_x(self):
        return self.__x
obj = MyClass()
obj.set_x(2)            # Modifies __x
obj.get_x()            # 2 (updated value)

Common uses:
• Private attributes: setter methods can modify mangled attributes
• Encapsulation: controlled modification of private attributes
• Setter methods
• Name mangling

Example: If class MyClass: def __init__(self): self.__x = 1; def set_x(self, val): self.__x = val; obj = MyClass(); obj.set_x(2); obj.get_x() if hasattr(obj, 'get_x') else obj._MyClass__x, then it returns 2 because setter methods can modify mangled attributes from within the class.

Key Concepts:
• Setter modifies mangled attribute: • obj.set_x(2) modifies __x • Inside class, __x refers to _MyClass__x • set_x() modifies mangled attribute • obj.get_x() or obj._MyClass__x returns 2 • Returns: 2 How it works: • obj.set_x(2) calls setter method • set_x() executes: self.__x = val • Inside class, __x refers to _MyClass__x • Sets _MyClass__x = 2 • obj.get_x() or obj._MyClass__x returns 2 • Returns: 2 Example: class MyClass: def __init__(self): self.__x = 1 # Mangled to _MyClass__x def set_x(self, val): self.__x = val # Modifies mangled attribute def get_x(self): return self.__x obj = MyClass() obj.set_x(2) # Modifies __x obj.get_x() # 2 (updated value) Common uses: • Private attributes: setter methods can modify mangled attributes • Encapsulation: controlled modification of private attributes • Setter methods • Name mangling Example: If class MyClass: def __init__(self): self.__x = 1; def set_x(self, val): self.__x = val; obj = MyClass(); obj.set_x(2); obj.get_x() if hasattr(obj, 'get_x') else obj._MyClass__x, then it returns 2 because setter methods can modify mangled attributes from within the class.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  
  // 61-70: Encapsulation - Properties and Access Control
  (_i: number) => ({ 
    q: `What is class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x; obj = MyClass(); obj.x?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "Property provides controlled read access.",
    de: `The @property decorator provides controlled read access to attributes. If class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x; obj = MyClass(); obj.x, then obj.x returns 1 because @property converts the method x() into a property, allowing you to access it like an attribute (obj.x instead of obj.x()). The property getter returns the value of the protected attribute _x, providing controlled access while keeping _x protected. This is a cleaner interface than using getter methods like get_x().

Property provides controlled access:
• obj.x returns 1
• @property makes method accessible as attribute
• Property getter returns self._x
• Clean interface: obj.x (not obj.get_x())
• Returns: 1

How it works:
• obj.x accesses property
• Python calls property getter: @property def x(self)
• Getter executes: return self._x
• Returns protected attribute value
• Returns: 1

Example:
class MyClass:
    def __init__(self):
        self._x = 1  # Protected attribute
    @property
    def x(self):
        return self._x  # Property getter
obj = MyClass()
obj.x                        # 1 (property access, clean interface)

Common uses:
• Controlled access: @property def attr(self): return self._attr
• Clean interface: obj.attr instead of obj.get_attr()
• Properties
• Encapsulation

Example: If class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x; obj = MyClass(); obj.x, then obj.x returns 1 because @property provides controlled read access, making the method accessible as an attribute.

Key Concepts:
• Property provides controlled access: • obj.x returns 1 • @property makes method accessible as attribute • Property getter returns self._x • Clean interface: obj.x (not obj.get_x()) • Returns: 1 How it works: • obj.x accesses property • Python calls property getter: @property def x(self) • Getter executes: return self._x • Returns protected attribute value • Returns: 1 Example: class MyClass: def __init__(self): self._x = 1 # Protected attribute @property def x(self): return self._x # Property getter obj = MyClass() obj.x # 1 (property access, clean interface) Common uses: • Controlled access: @property def attr(self): return self._attr • Clean interface: obj.attr instead of obj.get_attr() • Properties • Encapsulation Example: If class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x; obj = MyClass(); obj.x, then obj.x returns 1 because @property provides controlled read access, making the method accessible as an attribute.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x; @x.setter; def x(self, val): self._x = val * 2; obj = MyClass(); obj.x = 5; obj.x?`, 
    o: ["10", "5", "Error", "None"], 
    c: 0, 
    e: "Property setter can validate/transform before storing.",
    de: `Property setters can validate or transform values before storing them. If class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x; @x.setter; def x(self, val): self._x = val * 2; obj = MyClass(); obj.x = 5; obj.x, then obj.x returns 10 because the setter multiplies the value by 2 before storing it (self._x = val * 2 = 5 * 2 = 10). When you assign obj.x = 5, the setter is called, transforms the value (5 * 2 = 10), and stores 10. This allows properties to enforce business rules, validate input, or transform data before storage.

Property setter transforms value:
• obj.x = 5 calls setter
• Setter executes: self._x = val * 2 = 5 * 2 = 10
• Stores transformed value: 10
• obj.x calls getter: return self._x
• Returns: 10

How it works:
• obj.x = 5 calls setter: @x.setter def x(self, val)
• Setter transforms: self._x = val * 2
• Evaluates: 5 * 2 = 10
• Stores: self._x = 10
• obj.x returns: 10

Example:
class MyClass:
    def __init__(self):
        self._x = 1
    @property
    def x(self):
        return self._x
    @x.setter
    def x(self, val):
        self._x = val * 2  # Transforms value
obj = MyClass()
obj.x = 5                    # Stores 10 (5 * 2)
obj.x                        # 10 (transformed value)

Common uses:
• Value transformation: @x.setter def x(self, val): self._x = transform(val)
• Validation: @x.setter def x(self, val): if valid: self._x = val
• Properties
• Encapsulation

Example: If class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x; @x.setter; def x(self, val): self._x = val * 2; obj = MyClass(); obj.x = 5; obj.x, then obj.x returns 10 because the property setter transforms the value before storing it (5 * 2 = 10).

Key Concepts:
• Property setter transforms value: • obj.x = 5 calls setter • Setter executes: self._x = val * 2 = 5 * 2 = 10 • Stores transformed value: 10 • obj.x calls getter: return self._x • Returns: 10 How it works: • obj.x = 5 calls setter: @x.setter def x(self, val) • Setter transforms: self._x = val * 2 • Evaluates: 5 * 2 = 10 • Stores: self._x = 10 • obj.x returns: 10 Example: class MyClass: def __init__(self): self._x = 1 @property def x(self): return self._x @x.setter def x(self, val): self._x = val * 2 # Transforms value obj = MyClass() obj.x = 5 # Stores 10 (5 * 2) obj.x # 10 (transformed value) Common uses: • Value transformation: @x.setter def x(self, val): self._x = transform(val) • Validation: @x.setter def x(self, val): if valid: self._x = val • Properties • Encapsulation Example: If class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x; @x.setter; def x(self, val): self._x = val * 2; obj = MyClass(); obj.x = 5; obj.x, then obj.x returns 10 because the property setter transforms the value before storing it (5 * 2 = 10).

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __init__(self): self.__x = 1; @property; def x(self): return self.__x; obj = MyClass(); obj.x?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "Property can access mangled attribute.",
    de: `Properties can access mangled (double underscore) attributes. If class MyClass: def __init__(self): self.__x = 1; @property; def x(self): return self.__x; obj = MyClass(); obj.x, then obj.x returns 1 because the property getter can access the mangled attribute __x from within the class. Inside the class, __x automatically refers to _MyClass__x (the mangled name), so the property can retrieve it. This allows properties to provide controlled access to private (mangled) attributes while keeping them hidden from direct external access.

Property accesses mangled attribute:
• obj.x returns 1
• Property getter accesses __x
• Inside class, __x refers to _MyClass__x
• Property can access mangled name
• Returns: 1

How it works:
• obj.x accesses property
• Property getter executes: return self.__x
• Inside class, __x refers to _MyClass__x (mangled)
• Python automatically resolves to mangled name
• Returns: 1

Example:
class MyClass:
    def __init__(self):
        self.__x = 1  # Mangled to _MyClass__x
    @property
    def x(self):
        return self.__x  # Property can access mangled name
obj = MyClass()
obj.x                        # 1 (property accesses mangled attribute)
obj.__x                      # AttributeError (direct access fails)

Common uses:
• Private attributes: @property def attr(self): return self.__attr
• Controlled access: properties provide interface to mangled attributes
• Properties
• Name mangling

Example: If class MyClass: def __init__(self): self.__x = 1; @property; def x(self): return self.__x; obj = MyClass(); obj.x, then obj.x returns 1 because properties can access mangled attributes - inside the class, __x automatically refers to the mangled name.

Key Concepts:
• Property accesses mangled attribute: • obj.x returns 1 • Property getter accesses __x • Inside class, __x refers to _MyClass__x • Property can access mangled name • Returns: 1 How it works: • obj.x accesses property • Property getter executes: return self.__x • Inside class, __x refers to _MyClass__x (mangled) • Python automatically resolves to mangled name • Returns: 1 Example: class MyClass: def __init__(self): self.__x = 1 # Mangled to _MyClass__x @property def x(self): return self.__x # Property can access mangled name obj = MyClass() obj.x # 1 (property accesses mangled attribute) obj.__x # AttributeError (direct access fails) Common uses: • Private attributes: @property def attr(self): return self.__attr • Controlled access: properties provide interface to mangled attributes • Properties • Name mangling Example: If class MyClass: def __init__(self): self.__x = 1; @property; def x(self): return self.__x; obj = MyClass(); obj.x, then obj.x returns 1 because properties can access mangled attributes - inside the class, __x automatically refers to the mangled name.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: @property; def x(self): return 1; @x.setter; def x(self, val): pass; obj = MyClass(); obj.x = 5; obj.x?`, 
    o: ["1", "5", "Error", "None"], 
    c: 0, 
    e: "Setter that doesn't store doesn't change property.",
    de: `A property setter that doesn't store the value doesn't change the property. If class MyClass: @property; def x(self): return 1; @x.setter; def x(self, val): pass; obj = MyClass(); obj.x = 5; obj.x, then obj.x returns 1 because the setter has pass (does nothing), so it doesn't store the value. The assignment obj.x = 5 calls the setter, but the setter ignores the value. The getter still returns 1, so the property value remains unchanged. This pattern can be used to create read-only properties that accept assignments but ignore them.

Setter doesn't store:
• obj.x = 5 calls setter
• Setter executes: pass (does nothing)
• Value 5 is ignored (not stored)
• obj.x calls getter: return 1
• Returns: 1 (unchanged)

How it works:
• obj.x = 5 calls setter: @x.setter def x(self, val)
• Setter executes: pass (does nothing)
• Value 5 is not stored
• obj.x calls getter: @property def x(self)
• Getter returns: 1 (unchanged)
• Returns: 1

Example:
class MyClass:
    @property
    def x(self):
        return 1
    @x.setter
    def x(self, val):
        pass  # Doesn't store value
obj = MyClass()
obj.x = 5                    # Calls setter (ignores value)
obj.x                        # 1 (getter unchanged)

Common uses:
• Read-only simulation: setter that ignores values
• Validation-only setters: setter that validates but doesn't store
• Properties
• Encapsulation

Example: If class MyClass: @property; def x(self): return 1; @x.setter; def x(self, val): pass; obj = MyClass(); obj.x = 5; obj.x, then obj.x returns 1 because a setter that doesn't store the value doesn't change the property, so the getter still returns 1.

Key Concepts:
• Setter doesn't store: • obj.x = 5 calls setter • Setter executes: pass (does nothing) • Value 5 is ignored (not stored) • obj.x calls getter: return 1 • Returns: 1 (unchanged) How it works: • obj.x = 5 calls setter: @x.setter def x(self, val) • Setter executes: pass (does nothing) • Value 5 is not stored • obj.x calls getter: @property def x(self) • Getter returns: 1 (unchanged) • Returns: 1 Example: class MyClass: @property def x(self): return 1 @x.setter def x(self, val): pass # Doesn't store value obj = MyClass() obj.x = 5 # Calls setter (ignores value) obj.x # 1 (getter unchanged) Common uses: • Read-only simulation: setter that ignores values • Validation-only setters: setter that validates but doesn't store • Properties • Encapsulation Example: If class MyClass: @property; def x(self): return 1; @x.setter; def x(self, val): pass; obj = MyClass(); obj.x = 5; obj.x, then obj.x returns 1 because a setter that doesn't store the value doesn't change the property, so the getter still returns 1.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __init__(self): self._x = 1; def get_x(self): return self._x; def set_x(self, val): self._x = val; x = property(get_x, set_x); obj = MyClass(); obj.x = 5; obj.x?`, 
    o: ["5", "1", "Error", "None"], 
    c: 0, 
    e: "property() can be created with getter and setter functions.",
    de: `The property() function can be created with getter and setter functions as arguments. If class MyClass: def __init__(self): self._x = 1; def get_x(self): return self._x; def set_x(self, val): self._x = val; x = property(get_x, set_x); obj = MyClass(); obj.x = 5; obj.x, then obj.x returns 5 because property(get_x, set_x) creates a property where get_x is the getter and set_x is the setter. This is an alternative syntax to using @property and @x.setter decorators. When you assign obj.x = 5, it calls set_x(5), which sets self._x = 5. When you access obj.x, it calls get_x(), which returns self._x = 5.

property() with getter and setter:
• obj.x = 5 calls set_x(5)
• set_x sets self._x = 5
• obj.x calls get_x()
• get_x returns self._x = 5
• Returns: 5

How it works:
• property(get_x, set_x) creates property
• get_x is getter function
• set_x is setter function
• obj.x = 5 calls set_x(5)
• set_x sets self._x = 5
• obj.x calls get_x()
• Returns: 5

Example:
class MyClass:
    def __init__(self):
        self._x = 1
    def get_x(self):
        return self._x
    def set_x(self, val):
        self._x = val
    x = property(get_x, set_x)  # Alternative to @property
obj = MyClass()
obj.x = 5                    # Calls set_x(5)
obj.x                        # 5 (calls get_x())

Common uses:
• Property creation: x = property(getter, setter) (alternative syntax)
• Functional style: property() function instead of decorators
• Properties
• Encapsulation

Example: If class MyClass: def __init__(self): self._x = 1; def get_x(self): return self._x; def set_x(self, val): self._x = val; x = property(get_x, set_x); obj = MyClass(); obj.x = 5; obj.x, then obj.x returns 5 because property() can be created with getter and setter functions, and the setter stores the value.

Key Concepts:
• property() with getter and setter: • obj.x = 5 calls set_x(5) • set_x sets self._x = 5 • obj.x calls get_x() • get_x returns self._x = 5 • Returns: 5 How it works: • property(get_x, set_x) creates property • get_x is getter function • set_x is setter function • obj.x = 5 calls set_x(5) • set_x sets self._x = 5 • obj.x calls get_x() • Returns: 5 Example: class MyClass: def __init__(self): self._x = 1 def get_x(self): return self._x def set_x(self, val): self._x = val x = property(get_x, set_x) # Alternative to @property obj = MyClass() obj.x = 5 # Calls set_x(5) obj.x # 5 (calls get_x()) Common uses: • Property creation: x = property(getter, setter) (alternative syntax) • Functional style: property() function instead of decorators • Properties • Encapsulation Example: If class MyClass: def __init__(self): self._x = 1; def get_x(self): return self._x; def set_x(self, val): self._x = val; x = property(get_x, set_x); obj = MyClass(); obj.x = 5; obj.x, then obj.x returns 5 because property() can be created with getter and setter functions, and the setter stores the value.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x; @x.deleter; def x(self): del self._x; obj = MyClass(); del obj.x; hasattr(obj, '_x')?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "Property deleter provides controlled deletion.",
    de: `The @x.deleter decorator defines a property deleter that provides controlled deletion. If class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x; @x.deleter; def x(self): del self._x; obj = MyClass(); del obj.x; hasattr(obj, '_x'), then hasattr(obj, '_x') returns False because @x.deleter defines what happens when you delete the property, and del obj.x calls the deleter, which deletes self._x. This provides controlled deletion of attributes, allowing you to add cleanup logic or validation before deletion.

Property deleter:
• del obj.x calls deleter
• @x.deleter defines deletion behavior
• Deleter executes: del self._x
• Attribute _x is deleted
• hasattr(obj, '_x') returns False

How it works:
• obj._x = 1 sets attribute
• del obj.x calls deleter: @x.deleter def x(self)
• Deleter executes: del self._x
• Attribute _x is deleted
• hasattr(obj, '_x') checks if attribute exists
• Returns: False

Example:
class MyClass:
    def __init__(self):
        self._x = 1
    @property
    def x(self):
        return self._x
    @x.deleter
    def x(self):
        del self._x  # Controlled deletion
obj = MyClass()
del obj.x                    # Calls deleter
hasattr(obj, '_x')          # False (deleted)

Common uses:
• Controlled deletion: @x.deleter def x(self): cleanup logic
• Property deletion: del obj.property (uses deleter)
• Properties
• Encapsulation

Example: If class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x; @x.deleter; def x(self): del self._x; obj = MyClass(); del obj.x; hasattr(obj, '_x'), then hasattr(obj, '_x') returns False because @x.deleter provides controlled deletion, and del obj.x calls the deleter, which deletes self._x.

Key Concepts:
• Property deleter: • del obj.x calls deleter • @x.deleter defines deletion behavior • Deleter executes: del self._x • Attribute _x is deleted • hasattr(obj, '_x') returns False How it works: • obj._x = 1 sets attribute • del obj.x calls deleter: @x.deleter def x(self) • Deleter executes: del self._x • Attribute _x is deleted • hasattr(obj, '_x') checks if attribute exists • Returns: False Example: class MyClass: def __init__(self): self._x = 1 @property def x(self): return self._x @x.deleter def x(self): del self._x # Controlled deletion obj = MyClass() del obj.x # Calls deleter hasattr(obj, '_x') # False (deleted) Common uses: • Controlled deletion: @x.deleter def x(self): cleanup logic • Property deletion: del obj.property (uses deleter) • Properties • Encapsulation Example: If class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x; @x.deleter; def x(self): del self._x; obj = MyClass(); del obj.x; hasattr(obj, '_x'), then hasattr(obj, '_x') returns False because @x.deleter provides controlled deletion, and del obj.x calls the deleter, which deletes self._x.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x; obj = MyClass(); obj.x = 2?`, 
    o: ["AttributeError", "2", "Error", "None"], 
    c: 0, 
    e: "Property without setter is read-only.",
    de: `A property without a setter is read-only - you cannot assign to it. If class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x; obj = MyClass(); obj.x = 2, then obj.x = 2 raises an AttributeError because the property only has a getter (defined by @property), but no setter. To make a property writable, you need to define a setter using @x.setter. Without a setter, the property is read-only, and any attempt to assign to it raises an AttributeError.

Property without setter:
• obj.x = 2 raises AttributeError
• Property only has getter (no setter)
• Cannot assign to read-only property
• Raises AttributeError: can't set attribute
• Error: AttributeError

How it works:
• obj.x = 2 attempts to assign to property
• Property has no setter defined
• Python cannot set read-only property
• Raises AttributeError: can't set attribute

Example:
class MyClass:
    def __init__(self):
        self._x = 1
    @property
    def x(self):
        return self._x  # Only getter, no setter
obj = MyClass()
obj.x                        # 1 (read works)
obj.x = 2                    # AttributeError (no setter, read-only)

Common uses:
• Read-only properties: @property def value(self): return self._value
• Computed properties: @property def area(self): return self.width * self.height
• Properties
• Encapsulation

Example: If class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x; obj = MyClass(); obj.x = 2, then obj.x = 2 raises an AttributeError because a property without a setter is read-only and cannot be assigned to.

Key Concepts:
• Property without setter: • obj.x = 2 raises AttributeError • Property only has getter (no setter) • Cannot assign to read-only property • Raises AttributeError: can't set attribute • Error: AttributeError How it works: • obj.x = 2 attempts to assign to property • Property has no setter defined • Python cannot set read-only property • Raises AttributeError: can't set attribute Example: class MyClass: def __init__(self): self._x = 1 @property def x(self): return self._x # Only getter, no setter obj = MyClass() obj.x # 1 (read works) obj.x = 2 # AttributeError (no setter, read-only) Common uses: • Read-only properties: @property def value(self): return self._value • Computed properties: @property def area(self): return self.width * self.height • Properties • Encapsulation Example: If class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x; obj = MyClass(); obj.x = 2, then obj.x = 2 raises an AttributeError because a property without a setter is read-only and cannot be assigned to.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x if self._x > 0 else 0; obj = MyClass(); obj._x = -1; obj.x?`, 
    o: ["0", "-1", "Error", "None"], 
    c: 0, 
    e: "Property getter can validate/transform on access.",
    de: `Property getters can validate or transform values when they're accessed. If class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x if self._x > 0 else 0; obj = MyClass(); obj._x = -1; obj.x, then obj.x returns 0 because the property getter checks if self._x > 0, and if not, it returns 0 instead of the actual value. Even though obj._x = -1 (set directly), when you access obj.x, the getter transforms the value, returning 0 for negative values. This allows properties to enforce constraints or transform data on access.

Property getter transforms value:
• obj._x = -1 sets attribute directly
• obj.x calls property getter
• Getter checks: self._x > 0? (False, -1 is not > 0)
• Returns transformed value: 0
• Returns: 0

How it works:
• obj._x = -1 sets attribute directly (bypasses property)
• obj.x accesses property
• Getter executes: return self._x if self._x > 0 else 0
• Evaluates: -1 > 0? (False)
• Returns: 0 (transformed value)

Example:
class MyClass:
    def __init__(self):
        self._x = 1
    @property
    def x(self):
        return self._x if self._x > 0 else 0  # Transforms on access
obj = MyClass()
obj._x = -1                    # Set directly (bypasses property)
obj.x                        # 0 (getter transforms negative to 0)

Common uses:
• Value transformation: @property def x(self): return transform(self._x)
• Validation on access: getter can validate/transform values
• Properties
• Encapsulation

Example: If class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x if self._x > 0 else 0; obj = MyClass(); obj._x = -1; obj.x, then obj.x returns 0 because the property getter can validate/transform values on access, returning 0 for negative values.

Key Concepts:
• (False) • Returns: 0 (transformed value) Example: class MyClass: def __init__(self): self._x = 1 @property def x(self): return self._x if self._x > 0 else 0 # Transforms on access obj = MyClass() obj._x = -1 # Set directly (bypasses property) obj.x # 0 (getter transforms negative to 0) Common uses: • Value transformation: @property def x(self): return transform(self._x) • Validation on access: getter can validate/transform values • Properties • Encapsulation Example: If class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x if self._x > 0 else 0; obj = MyClass(); obj._x = -1; obj.x, then obj.x returns 0 because the property getter can validate/transform values on access, returning 0 for negative values.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x; @x.setter; def x(self, val): if val < 0: raise ValueError; self._x = val; obj = MyClass(); obj.x = -1?`, 
    o: ["ValueError", "-1", "Error", "None"], 
    c: 0, 
    e: "Property setter can validate and raise errors.",
    de: `Property setters can validate input and raise errors if validation fails. If class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x; @x.setter; def x(self, val): if val < 0: raise ValueError; self._x = val; obj = MyClass(); obj.x = -1, then obj.x = -1 raises a ValueError because the setter validates that val >= 0, and since -1 < 0, it raises ValueError before storing the value. This allows properties to enforce business rules and prevent invalid data from being stored.

Property setter validates:
• obj.x = -1 calls setter
• Setter checks: val < 0? (True, -1 < 0)
• Raises ValueError (validation fails)
• Value is not stored
• Raises ValueError

How it works:
• obj.x = -1 calls setter: @x.setter def x(self, val)
• Setter validates: if val < 0: raise ValueError
• -1 < 0 is True
• Raises ValueError
• Value is not stored

Example:
class MyClass:
    def __init__(self):
        self._x = 1
    @property
    def x(self):
        return self._x
    @x.setter
    def x(self, val):
        if val < 0:
            raise ValueError("Value must be non-negative")
        self._x = val
obj = MyClass()
obj.x = -1                    # ValueError (validation fails)

Common uses:
• Input validation: @x.setter def x(self, val): if not valid: raise Error
• Business rules: properties can enforce constraints
• Properties
• Encapsulation

Example: If class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x; @x.setter; def x(self, val): if val < 0: raise ValueError; self._x = val; obj = MyClass(); obj.x = -1, then obj.x = -1 raises a ValueError because the property setter validates input and raises an error if validation fails.

Key Concepts:
• (True, -1 < 0) • Raises ValueError (validation fails) • Value is not stored • Raises ValueError How it works: • obj.x = -1 calls setter: @x.setter def x(self, val) • Setter validates: if val < 0: raise ValueError • -1 < 0 is True • Raises ValueError • Value is not stored Example: class MyClass: def __init__(self): self._x = 1 @property def x(self): return self._x @x.setter def x(self, val): if val < 0: raise ValueError("Value must be non-negative") self._x = val obj = MyClass() obj.x = -1 # ValueError (validation fails) Common uses: • Input validation: @x.setter def x(self, val): if not valid: raise Error • Business rules: properties can enforce constraints • Properties • Encapsulation Example: If class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x; @x.setter; def x(self, val): if val < 0: raise ValueError; self._x = val; obj = MyClass(); obj.x = -1, then obj.x = -1 raises a ValueError because the property setter validates input and raises an error if validation fails.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: _x = 1; @classmethod; @property; def x(cls): return cls._x?`, 
    o: ["TypeError", "1", "Error", "None"], 
    c: 0, 
    e: "Can't combine @classmethod and @property (property is for instances).",
    de: `You cannot combine @classmethod and @property decorators because properties are designed for instances, not classes. If class MyClass: _x = 1; @classmethod; @property; def x(cls): return cls._x, then it raises a TypeError because @property expects an instance method (with self), but @classmethod provides a class method (with cls). These decorators are incompatible - properties work with instances, while class methods work with classes. To access class attributes, you would use a regular class method without @property, or use a class-level property descriptor (which is more complex).

Cannot combine decorators:
• Raises TypeError
• @property expects instance method (self)
• @classmethod provides class method (cls)
• Decorators are incompatible
• Raises TypeError

How it works:
• @classmethod @property def x(cls): tries to combine decorators
• @property expects method with self (instance)
• @classmethod provides method with cls (class)
• Decorators conflict
• Raises TypeError

Example:
class MyClass:
    _x = 1
    @classmethod
    @property  # TypeError (can't combine)
    def x(cls):
        return cls._x
# Instead, use:
class MyClass:
    _x = 1
    @classmethod
    def x(cls):
        return cls._x  # Class method (no @property)

Common uses:
• Understanding limitations: @property and @classmethod can't be combined
• Class attributes: use @classmethod without @property
• Properties
• Class methods

Example: If class MyClass: _x = 1; @classmethod; @property; def x(cls): return cls._x, then it raises a TypeError because you can't combine @classmethod and @property - properties are for instances, class methods are for classes.

Key Concepts:
• Cannot combine decorators: • Raises TypeError • @property expects instance method (self) • @classmethod provides class method (cls) • Decorators are incompatible • Raises TypeError How it works: • @classmethod @property def x(cls): tries to combine decorators • @property expects method with self (instance) • @classmethod provides method with cls (class) • Decorators conflict • Raises TypeError Example: class MyClass: _x = 1 @classmethod @property # TypeError (can't combine) def x(cls): return cls._x # Instead, use: class MyClass: _x = 1 @classmethod def x(cls): return cls._x # Class method (no @property) Common uses: • Understanding limitations: @property and @classmethod can't be combined • Class attributes: use @classmethod without @property • Properties • Class methods Example: If class MyClass: _x = 1; @classmethod; @property; def x(cls): return cls._x, then it raises a TypeError because you can't combine @classmethod and @property - properties are for instances, class methods are for classes.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  
  // 71-80: Abstract Base Classes
  (_i: number) => ({ 
    q: `What is from abc import ABC, abstractmethod; class MyClass(ABC): @abstractmethod; def method(self): pass; MyClass()?`, 
    o: ["TypeError", "Creates instance", "Error", "None"], 
    c: 0, 
    e: "Abstract class with abstractmethod can't be instantiated.",
    de: `Abstract classes with abstract methods cannot be instantiated. If from abc import ABC, abstractmethod; class MyClass(ABC): @abstractmethod; def method(self): pass; MyClass(), then MyClass() raises a TypeError because abstract classes are designed to be base classes that define an interface, but cannot be used directly. The @abstractmethod decorator marks a method as abstract, meaning it must be implemented by subclasses. Python prevents instantiation of classes with abstract methods to enforce that the interface is properly implemented before use.

Abstract class can't be instantiated:
• MyClass() raises TypeError
• MyClass has abstract method (method)
• Abstract classes cannot be instantiated
• Must implement abstract methods first
• Raises TypeError

How it works:
• MyClass() tries to create instance
• Python checks for abstract methods
• Finds @abstractmethod def method(self)
• Class has abstract methods
• Raises TypeError: Can't instantiate abstract class MyClass with abstract method method

Example:
from abc import ABC, abstractmethod
class MyClass(ABC):
    @abstractmethod
    def method(self):
        pass
MyClass()                    # TypeError (can't instantiate abstract class)

Common uses:
• Abstract base classes: define interface that subclasses must implement
• Interface enforcement: prevent instantiation until interface is complete
• Abstract base classes
• Object-oriented programming

Example: If from abc import ABC, abstractmethod; class MyClass(ABC): @abstractmethod; def method(self): pass; MyClass(), then MyClass() raises a TypeError because abstract classes with abstract methods cannot be instantiated - they must be subclassed and the abstract methods must be implemented first.

Key Concepts:
• Abstract class can't be instantiated: • MyClass() raises TypeError • MyClass has abstract method (method) • Abstract classes cannot be instantiated • Must implement abstract methods first • Raises TypeError How it works: • MyClass() tries to create instance • Python checks for abstract methods • Finds @abstractmethod def method(self) • Class has abstract methods • Raises TypeError: Can't instantiate abstract class MyClass with abstract method method Example: from abc import ABC, abstractmethod class MyClass(ABC): @abstractmethod def method(self): pass MyClass() # TypeError (can't instantiate abstract class) Common uses: • Abstract base classes: define interface that subclasses must implement • Interface enforcement: prevent instantiation until interface is complete • Abstract base classes • Object-oriented programming Example: If from abc import ABC, abstractmethod; class MyClass(ABC): @abstractmethod; def method(self): pass; MyClass(), then MyClass() raises a TypeError because abstract classes with abstract methods cannot be instantiated - they must be subclassed and the abstract methods must be implemented first.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is from abc import ABC, abstractmethod; class Parent(ABC): @abstractmethod; def method(self): pass; class Child(Parent): pass; Child()?`, 
    o: ["TypeError", "Creates instance", "Error", "None"], 
    c: 0, 
    e: "Child must implement abstract method or be abstract.",
    de: `A child class must implement all abstract methods from the parent, or it also becomes abstract and cannot be instantiated. If from abc import ABC, abstractmethod; class Parent(ABC): @abstractmethod; def method(self): pass; class Child(Parent): pass; Child(), then Child() raises a TypeError because Child inherits the abstract method from Parent but doesn't implement it. Abstract methods are inherited, so Child also has an abstract method and cannot be instantiated until it implements all abstract methods.

Child must implement abstract method:
• Child() raises TypeError
• Child inherits abstract method from Parent
• Child doesn't implement method()
• Child is also abstract
• Raises TypeError

How it works:
• Child() tries to create instance
• Python checks for abstract methods
• Finds inherited @abstractmethod def method(self) from Parent
• Child doesn't implement method()
• Child is abstract
• Raises TypeError: Can't instantiate abstract class Child with abstract method method

Example:
from abc import ABC, abstractmethod
class Parent(ABC):
    @abstractmethod
    def method(self):
        pass
class Child(Parent): pass  # Doesn't implement method
Child()                    # TypeError (still abstract)

Common uses:
• Abstract inheritance: child must implement parent's abstract methods
• Interface enforcement: abstract methods must be implemented
• Abstract base classes
• Inheritance

Example: If from abc import ABC, abstractmethod; class Parent(ABC): @abstractmethod; def method(self): pass; class Child(Parent): pass; Child(), then Child() raises a TypeError because the child must implement the abstract method or it also becomes abstract and cannot be instantiated.

Key Concepts:
• Child must implement abstract method: • Child() raises TypeError • Child inherits abstract method from Parent • Child doesn't implement method() • Child is also abstract • Raises TypeError How it works: • Child() tries to create instance • Python checks for abstract methods • Finds inherited @abstractmethod def method(self) from Parent • Child doesn't implement method() • Child is abstract • Raises TypeError: Can't instantiate abstract class Child with abstract method method Example: from abc import ABC, abstractmethod class Parent(ABC): @abstractmethod def method(self): pass class Child(Parent): pass # Doesn't implement method Child() # TypeError (still abstract) Common uses: • Abstract inheritance: child must implement parent's abstract methods • Interface enforcement: abstract methods must be implemented • Abstract base classes • Inheritance Example: If from abc import ABC, abstractmethod; class Parent(ABC): @abstractmethod; def method(self): pass; class Child(Parent): pass; Child(), then Child() raises a TypeError because the child must implement the abstract method or it also becomes abstract and cannot be instantiated.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is from abc import ABC, abstractmethod; class Parent(ABC): @abstractmethod; def method(self): pass; class Child(Parent): def method(self): return 1; Child().method()?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "Child implementing abstract method can be instantiated.",
    de: `A child class that implements all abstract methods can be instantiated. If from abc import ABC, abstractmethod; class Parent(ABC): @abstractmethod; def method(self): pass; class Child(Parent): def method(self): return 1; Child().method(), then Child().method() returns 1 because Child implements the abstract method method(), so it's no longer abstract and can be instantiated. When you call Child().method(), it uses Child's implementation, which returns 1.

Child implementing abstract method:
• Child().method() returns 1
• Child implements abstract method from Parent
• Child is no longer abstract
• Can be instantiated
• Returns: 1

How it works:
• Child() creates instance (no longer abstract)
• Child implements method() (returns 1)
• Child().method() calls Child.method()
• Method executes: return 1
• Returns: 1

Example:
from abc import ABC, abstractmethod
class Parent(ABC):
    @abstractmethod
    def method(self):
        pass
class Child(Parent):
    def method(self):
        return 1  # Implements abstract method
Child().method()          # 1 (can instantiate, method implemented)

Common uses:
• Abstract implementation: child implements parent's abstract methods
• Interface completion: implementing abstract methods makes class concrete
• Abstract base classes
• Inheritance

Example: If from abc import ABC, abstractmethod; class Parent(ABC): @abstractmethod; def method(self): pass; class Child(Parent): def method(self): return 1; Child().method(), then Child().method() returns 1 because a child implementing the abstract method can be instantiated and the method works correctly.

Key Concepts:
• Child implementing abstract method: • Child().method() returns 1 • Child implements abstract method from Parent • Child is no longer abstract • Can be instantiated • Returns: 1 How it works: • Child() creates instance (no longer abstract) • Child implements method() (returns 1) • Child().method() calls Child.method() • Method executes: return 1 • Returns: 1 Example: from abc import ABC, abstractmethod class Parent(ABC): @abstractmethod def method(self): pass class Child(Parent): def method(self): return 1 # Implements abstract method Child().method() # 1 (can instantiate, method implemented) Common uses: • Abstract implementation: child implements parent's abstract methods • Interface completion: implementing abstract methods makes class concrete • Abstract base classes • Inheritance Example: If from abc import ABC, abstractmethod; class Parent(ABC): @abstractmethod; def method(self): pass; class Child(Parent): def method(self): return 1; Child().method(), then Child().method() returns 1 because a child implementing the abstract method can be instantiated and the method works correctly.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is from abc import ABC, abstractmethod; class Parent(ABC): @abstractmethod; def method(self): pass; class Child(Parent): @abstractmethod; def method(self): pass; Child()?`, 
    o: ["TypeError", "Creates instance", "Error", "None"], 
    c: 0, 
    e: "Child keeping method abstract still can't be instantiated.",
    de: `A child class that keeps a method abstract (by marking it with @abstractmethod again) still cannot be instantiated. If from abc import ABC, abstractmethod; class Parent(ABC): @abstractmethod; def method(self): pass; class Child(Parent): @abstractmethod; def method(self): pass; Child(), then Child() raises a TypeError because even though Child defines method(), it marks it as abstract again with @abstractmethod. This means Child is still abstract and cannot be instantiated. The method must be implemented (have actual code, not just pass) and not be marked as abstract for the class to be concrete.

Child keeps method abstract:
• Child() raises TypeError
• Child marks method() as @abstractmethod
• Method is still abstract (not implemented)
• Child is still abstract
• Raises TypeError

How it works:
• Child() tries to create instance
• Python checks for abstract methods
• Finds @abstractmethod def method(self) in Child
• Method is still abstract (marked with @abstractmethod)
• Child is abstract
• Raises TypeError: Can't instantiate abstract class Child with abstract method method

Example:
from abc import ABC, abstractmethod
class Parent(ABC):
    @abstractmethod
    def method(self):
        pass
class Child(Parent):
    @abstractmethod
    def method(self):
        pass  # Still abstract
Child()                    # TypeError (still abstract)

Common uses:
• Abstract inheritance: child can keep method abstract
• Multi-level abstraction: abstract methods can be passed down
• Abstract base classes
• Inheritance

Example: If from abc import ABC, abstractmethod; class Parent(ABC): @abstractmethod; def method(self): pass; class Child(Parent): @abstractmethod; def method(self): pass; Child(), then Child() raises a TypeError because a child keeping the method abstract still cannot be instantiated - the method must be implemented (not just marked abstract) for the class to be concrete.

Key Concepts:
• Child keeps method abstract: • Child() raises TypeError • Child marks method() as @abstractmethod • Method is still abstract (not implemented) • Child is still abstract • Raises TypeError How it works: • Child() tries to create instance • Python checks for abstract methods • Finds @abstractmethod def method(self) in Child • Method is still abstract (marked with @abstractmethod) • Child is abstract • Raises TypeError: Can't instantiate abstract class Child with abstract method method Example: from abc import ABC, abstractmethod class Parent(ABC): @abstractmethod def method(self): pass class Child(Parent): @abstractmethod def method(self): pass # Still abstract Child() # TypeError (still abstract) Common uses: • Abstract inheritance: child can keep method abstract • Multi-level abstraction: abstract methods can be passed down • Abstract base classes • Inheritance Example: If from abc import ABC, abstractmethod; class Parent(ABC): @abstractmethod; def method(self): pass; class Child(Parent): @abstractmethod; def method(self): pass; Child(), then Child() raises a TypeError because a child keeping the method abstract still cannot be instantiated - the method must be implemented (not just marked abstract) for the class to be concrete.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is from abc import ABC, abstractmethod; class MyClass(ABC): @abstractmethod; def method(self): pass; MyClass.__abstractmethods__?`, 
    o: ["frozenset({'method'})", "set()", "Error", "None"], 
    c: 0, 
    e: "__abstractmethods__ contains set of abstract method names.",
    de: `The __abstractmethods__ attribute contains a frozenset of abstract method names. If from abc import ABC, abstractmethod; class MyClass(ABC): @abstractmethod; def method(self): pass; MyClass.__abstractmethods__, then MyClass.__abstractmethods__ returns frozenset({'method'}) because __abstractmethods__ stores the names of all abstract methods in the class. This is used internally by Python to determine if a class is abstract and can be instantiated. When all methods in __abstractmethods__ are implemented, the class becomes concrete.

__abstractmethods__ attribute:
• MyClass.__abstractmethods__ returns frozenset({'method'})
• Contains names of abstract methods
• Used to check if class is abstract
• Empty when all methods implemented
• Returns: frozenset({'method'})

How it works:
• @abstractmethod def method(self) marks method as abstract
• Python adds 'method' to __abstractmethods__
• __abstractmethods__ is frozenset of abstract method names
• Contains: {'method'}
• Returns: frozenset({'method'})

Example:
from abc import ABC, abstractmethod
class MyClass(ABC):
    @abstractmethod
    def method(self):
        pass
MyClass.__abstractmethods__  # frozenset({'method'}) (abstract methods)

Common uses:
• Abstract method inspection: Class.__abstractmethods__ (see abstract methods)
• Introspection: check which methods are abstract
• Abstract base classes
• Type system

Example: If from abc import ABC, abstractmethod; class MyClass(ABC): @abstractmethod; def method(self): pass; MyClass.__abstractmethods__, then MyClass.__abstractmethods__ returns frozenset({'method'}) because __abstractmethods__ contains a set of abstract method names.

Key Concepts:
• __abstractmethods__ attribute: • MyClass.__abstractmethods__ returns frozenset({'method'}) • Contains names of abstract methods • Used to check if class is abstract • Empty when all methods implemented • Returns: frozenset({'method'}) How it works: • @abstractmethod def method(self) marks method as abstract • Python adds 'method' to __abstractmethods__ • __abstractmethods__ is frozenset of abstract method names • Contains: {'method'} • Returns: frozenset({'method'}) Example: from abc import ABC, abstractmethod class MyClass(ABC): @abstractmethod def method(self): pass MyClass.__abstractmethods__ # frozenset({'method'}) (abstract methods) Common uses: • Abstract method inspection: Class.__abstractmethods__ (see abstract methods) • Introspection: check which methods are abstract • Abstract base classes • Type system Example: If from abc import ABC, abstractmethod; class MyClass(ABC): @abstractmethod; def method(self): pass; MyClass.__abstractmethods__, then MyClass.__abstractmethods__ returns frozenset({'method'}) because __abstractmethods__ contains a set of abstract method names.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is from abc import ABC, abstractmethod; class Parent(ABC): @abstractmethod; def method(self): pass; class Child(Parent): def method(self): return 1; Child.__abstractmethods__?`, 
    o: ["frozenset()", "frozenset({'method'})", "Error", "None"], 
    c: 0, 
    e: "Child implementing abstract method has no abstract methods.",
    de: `A child class that implements all abstract methods has an empty __abstractmethods__ set. If from abc import ABC, abstractmethod; class Parent(ABC): @abstractmethod; def method(self): pass; class Child(Parent): def method(self): return 1; Child.__abstractmethods__, then Child.__abstractmethods__ returns frozenset() because Child implements the abstract method method(), so it's no longer abstract. When a class implements all abstract methods, Python removes them from __abstractmethods__, making it empty. This indicates the class is concrete and can be instantiated.

Child has no abstract methods:
• Child.__abstractmethods__ returns frozenset()
• Child implements abstract method from Parent
• All abstract methods are implemented
• __abstractmethods__ is empty
• Returns: frozenset()

How it works:
• Child implements method() (returns 1)
• Python checks abstract methods
• All abstract methods are implemented
• Removes 'method' from __abstractmethods__
• __abstractmethods__ becomes empty
• Returns: frozenset()

Example:
from abc import ABC, abstractmethod
class Parent(ABC):
    @abstractmethod
    def method(self):
        pass
class Child(Parent):
    def method(self):
        return 1  # Implements abstract method
Child.__abstractmethods__  # frozenset() (no abstract methods)

Common uses:
• Abstract method inspection: Child.__abstractmethods__ (check if concrete)
• Introspection: empty set means class is concrete
• Abstract base classes
• Type system

Example: If from abc import ABC, abstractmethod; class Parent(ABC): @abstractmethod; def method(self): pass; class Child(Parent): def method(self): return 1; Child.__abstractmethods__, then Child.__abstractmethods__ returns frozenset() because a child implementing the abstract method has no abstract methods - all are implemented.

Key Concepts:
• Child has no abstract methods: • Child.__abstractmethods__ returns frozenset() • Child implements abstract method from Parent • All abstract methods are implemented • __abstractmethods__ is empty • Returns: frozenset() How it works: • Child implements method() (returns 1) • Python checks abstract methods • All abstract methods are implemented • Removes 'method' from __abstractmethods__ • __abstractmethods__ becomes empty • Returns: frozenset() Example: from abc import ABC, abstractmethod class Parent(ABC): @abstractmethod def method(self): pass class Child(Parent): def method(self): return 1 # Implements abstract method Child.__abstractmethods__ # frozenset() (no abstract methods) Common uses: • Abstract method inspection: Child.__abstractmethods__ (check if concrete) • Introspection: empty set means class is concrete • Abstract base classes • Type system Example: If from abc import ABC, abstractmethod; class Parent(ABC): @abstractmethod; def method(self): pass; class Child(Parent): def method(self): return 1; Child.__abstractmethods__, then Child.__abstractmethods__ returns frozenset() because a child implementing the abstract method has no abstract methods - all are implemented.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is from abc import ABC, abstractmethod; class MyClass(ABC): @abstractmethod; @classmethod; def method(cls): pass; MyClass()?`, 
    o: ["TypeError", "Creates instance", "Error", "None"], 
    c: 0, 
    e: "Abstract classmethod prevents instantiation.",
    de: `Abstract class methods prevent instantiation of the class. If from abc import ABC, abstractmethod; class MyClass(ABC): @abstractmethod; @classmethod; def method(cls): pass; MyClass(), then MyClass() raises a TypeError because @abstractmethod can be applied to class methods, and having an abstract class method makes the class abstract. The class cannot be instantiated until the abstract class method is implemented by a subclass. Abstract methods can be instance methods, class methods, or static methods - all prevent instantiation.

Abstract classmethod:
• MyClass() raises TypeError
• @abstractmethod @classmethod marks class method as abstract
• Class has abstract class method
• Cannot be instantiated
• Raises TypeError

How it works:
• MyClass() tries to create instance
• Python checks for abstract methods
• Finds @abstractmethod @classmethod def method(cls)
• Class has abstract class method
• Raises TypeError: Can't instantiate abstract class MyClass with abstract method method

Example:
from abc import ABC, abstractmethod
class MyClass(ABC):
    @abstractmethod
    @classmethod
    def method(cls):
        pass  # Abstract class method
MyClass()                    # TypeError (abstract class method)

Common uses:
• Abstract class methods: @abstractmethod @classmethod (abstract class method)
• Interface enforcement: abstract methods can be class methods
• Abstract base classes
• Class methods

Example: If from abc import ABC, abstractmethod; class MyClass(ABC): @abstractmethod; @classmethod; def method(cls): pass; MyClass(), then MyClass() raises a TypeError because an abstract class method prevents instantiation - the class is abstract until the class method is implemented.

Key Concepts:
• Abstract classmethod: • MyClass() raises TypeError • @abstractmethod @classmethod marks class method as abstract • Class has abstract class method • Cannot be instantiated • Raises TypeError How it works: • MyClass() tries to create instance • Python checks for abstract methods • Finds @abstractmethod @classmethod def method(cls) • Class has abstract class method • Raises TypeError: Can't instantiate abstract class MyClass with abstract method method Example: from abc import ABC, abstractmethod class MyClass(ABC): @abstractmethod @classmethod def method(cls): pass # Abstract class method MyClass() # TypeError (abstract class method) Common uses: • Abstract class methods: @abstractmethod @classmethod (abstract class method) • Interface enforcement: abstract methods can be class methods • Abstract base classes • Class methods Example: If from abc import ABC, abstractmethod; class MyClass(ABC): @abstractmethod; @classmethod; def method(cls): pass; MyClass(), then MyClass() raises a TypeError because an abstract class method prevents instantiation - the class is abstract until the class method is implemented.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is from abc import ABC, abstractmethod; class MyClass(ABC): @abstractmethod; @staticmethod; def method(): pass; MyClass()?`, 
    o: ["TypeError", "Creates instance", "Error", "None"], 
    c: 0, 
    e: "Abstract staticmethod prevents instantiation.",
    de: `Abstract static methods prevent instantiation of the class. If from abc import ABC, abstractmethod; class MyClass(ABC): @abstractmethod; @staticmethod; def method(): pass; MyClass(), then MyClass() raises a TypeError because @abstractmethod can be applied to static methods, and having an abstract static method makes the class abstract. The class cannot be instantiated until the abstract static method is implemented by a subclass. Abstract methods can be instance methods, class methods, or static methods - all prevent instantiation.

Abstract staticmethod:
• MyClass() raises TypeError
• @abstractmethod @staticmethod marks static method as abstract
• Class has abstract static method
• Cannot be instantiated
• Raises TypeError

How it works:
• MyClass() tries to create instance
• Python checks for abstract methods
• Finds @abstractmethod @staticmethod def method()
• Class has abstract static method
• Raises TypeError: Can't instantiate abstract class MyClass with abstract method method

Example:
from abc import ABC, abstractmethod
class MyClass(ABC):
    @abstractmethod
    @staticmethod
    def method():
        pass  # Abstract static method
MyClass()                    # TypeError (abstract static method)

Common uses:
• Abstract static methods: @abstractmethod @staticmethod (abstract static method)
• Interface enforcement: abstract methods can be static methods
• Abstract base classes
• Static methods

Example: If from abc import ABC, abstractmethod; class MyClass(ABC): @abstractmethod; @staticmethod; def method(): pass; MyClass(), then MyClass() raises a TypeError because an abstract static method prevents instantiation - the class is abstract until the static method is implemented.

Key Concepts:
• Abstract staticmethod: • MyClass() raises TypeError • @abstractmethod @staticmethod marks static method as abstract • Class has abstract static method • Cannot be instantiated • Raises TypeError How it works: • MyClass() tries to create instance • Python checks for abstract methods • Finds @abstractmethod @staticmethod def method() • Class has abstract static method • Raises TypeError: Can't instantiate abstract class MyClass with abstract method method Example: from abc import ABC, abstractmethod class MyClass(ABC): @abstractmethod @staticmethod def method(): pass # Abstract static method MyClass() # TypeError (abstract static method) Common uses: • Abstract static methods: @abstractmethod @staticmethod (abstract static method) • Interface enforcement: abstract methods can be static methods • Abstract base classes • Static methods Example: If from abc import ABC, abstractmethod; class MyClass(ABC): @abstractmethod; @staticmethod; def method(): pass; MyClass(), then MyClass() raises a TypeError because an abstract static method prevents instantiation - the class is abstract until the static method is implemented.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is from abc import ABC, abstractmethod; class Parent(ABC): @abstractmethod; def method(self): pass; class Child(Parent): pass; issubclass(Child, Parent)?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Child is still subclass even if abstract.",
    de: `A child class is still a subclass of the parent, even if it's abstract (hasn't implemented abstract methods). If from abc import ABC, abstractmethod; class Parent(ABC): @abstractmethod; def method(self): pass; class Child(Parent): pass; issubclass(Child, Parent), then issubclass(Child, Parent) returns True because Child inherits from Parent, making it a subclass regardless of whether it implements abstract methods. Being abstract doesn't change the inheritance relationship - Child is still a subclass of Parent, it just can't be instantiated until it implements the abstract methods.

Child is still subclass:
• issubclass(Child, Parent) returns True
• Child inherits from Parent
• Abstract status doesn't affect inheritance
• Child is subclass even if abstract
• Returns: True

How it works:
• class Child(Parent): creates child inheriting from Parent
• issubclass(Child, Parent) checks inheritance
• Child is indeed a subclass of Parent
• Abstract status doesn't affect this
• Returns: True

Example:
from abc import ABC, abstractmethod
class Parent(ABC):
    @abstractmethod
    def method(self):
        pass
class Child(Parent): pass  # Abstract (doesn't implement method)
issubclass(Child, Parent)  # True (still subclass, even if abstract)

Common uses:
• Inheritance check: issubclass(Child, Parent) (works even if abstract)
• Understanding abstraction: abstract status doesn't affect inheritance
• Abstract base classes
• Inheritance

Example: If from abc import ABC, abstractmethod; class Parent(ABC): @abstractmethod; def method(self): pass; class Child(Parent): pass; issubclass(Child, Parent), then issubclass(Child, Parent) returns True because a child is still a subclass even if it's abstract - abstract status doesn't affect the inheritance relationship.

Key Concepts:
• Child is still subclass: • issubclass(Child, Parent) returns True • Child inherits from Parent • Abstract status doesn't affect inheritance • Child is subclass even if abstract • Returns: True How it works: • class Child(Parent): creates child inheriting from Parent • issubclass(Child, Parent) checks inheritance • Child is indeed a subclass of Parent • Abstract status doesn't affect this • Returns: True Example: from abc import ABC, abstractmethod class Parent(ABC): @abstractmethod def method(self): pass class Child(Parent): pass # Abstract (doesn't implement method) issubclass(Child, Parent) # True (still subclass, even if abstract) Common uses: • Inheritance check: issubclass(Child, Parent) (works even if abstract) • Understanding abstraction: abstract status doesn't affect inheritance • Abstract base classes • Inheritance Example: If from abc import ABC, abstractmethod; class Parent(ABC): @abstractmethod; def method(self): pass; class Child(Parent): pass; issubclass(Child, Parent), then issubclass(Child, Parent) returns True because a child is still a subclass even if it's abstract - abstract status doesn't affect the inheritance relationship.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is from abc import ABC, abstractmethod; class MyClass(ABC): @abstractmethod; def method(self): pass; isinstance(MyClass(), MyClass)?`, 
    o: ["TypeError (can't instantiate)", "True", "False", "Error"], 
    c: 0, 
    e: "Can't create instance to test isinstance.",
    de: `You cannot create an instance of an abstract class to test isinstance(). If from abc import ABC, abstractmethod; class MyClass(ABC): @abstractmethod; def method(self): pass; isinstance(MyClass(), MyClass), then it raises a TypeError because MyClass() tries to instantiate an abstract class, which is not allowed. You cannot create an instance of an abstract class, so you cannot test isinstance() with an abstract class instance. To test isinstance(), you would need to create an instance of a concrete subclass that implements all abstract methods.

Cannot instantiate abstract class:
• isinstance(MyClass(), MyClass) raises TypeError
• MyClass() tries to instantiate abstract class
• Abstract classes cannot be instantiated
• Cannot create instance for isinstance()
• Raises TypeError

How it works:
• isinstance(MyClass(), MyClass) tries to create instance
• MyClass() attempts to instantiate abstract class
• Python checks for abstract methods
• Finds @abstractmethod def method(self)
• Raises TypeError: Can't instantiate abstract class MyClass with abstract method method

Example:
from abc import ABC, abstractmethod
class MyClass(ABC):
    @abstractmethod
    def method(self):
        pass
isinstance(MyClass(), MyClass)  # TypeError (can't instantiate abstract class)
# Instead, create concrete subclass:
class Concrete(MyClass):
    def method(self):
        return 1
isinstance(Concrete(), MyClass)  # True (works with concrete subclass)

Common uses:
• Understanding limitations: can't instantiate abstract classes
• isinstance() testing: need concrete subclass for isinstance()
• Abstract base classes
• Type system

Example: If from abc import ABC, abstractmethod; class MyClass(ABC): @abstractmethod; def method(self): pass; isinstance(MyClass(), MyClass), then it raises a TypeError because you can't create an instance of an abstract class to test isinstance() - abstract classes cannot be instantiated.

Key Concepts:
• Cannot instantiate abstract class: • isinstance(MyClass(), MyClass) raises TypeError • MyClass() tries to instantiate abstract class • Abstract classes cannot be instantiated • Cannot create instance for isinstance() • Raises TypeError How it works: • isinstance(MyClass(), MyClass) tries to create instance • MyClass() attempts to instantiate abstract class • Python checks for abstract methods • Finds @abstractmethod def method(self) • Raises TypeError: Can't instantiate abstract class MyClass with abstract method method Example: from abc import ABC, abstractmethod class MyClass(ABC): @abstractmethod def method(self): pass isinstance(MyClass(), MyClass) # TypeError (can't instantiate abstract class) # Instead, create concrete subclass: class Concrete(MyClass): def method(self): return 1 isinstance(Concrete(), MyClass) # True (works with concrete subclass) Common uses: • Understanding limitations: can't instantiate abstract classes • isinstance() testing: need concrete subclass for isinstance() • Abstract base classes • Type system Example: If from abc import ABC, abstractmethod; class MyClass(ABC): @abstractmethod; def method(self): pass; isinstance(MyClass(), MyClass), then it raises a TypeError because you can't create an instance of an abstract class to test isinstance() - abstract classes cannot be instantiated.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  
  // 81-90: isinstance and issubclass
  (_i: number) => ({ 
    q: `What is class Parent: pass; class Child(Parent): pass; isinstance(Child(), Parent)?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "isinstance() returns True for parent class.",
    de: `The isinstance() function returns True if an instance is of a class or any of its parent classes. If class Parent: pass; class Child(Parent): pass; isinstance(Child(), Parent), then isinstance(Child(), Parent) returns True because isinstance() checks the entire inheritance chain. Since Child inherits from Parent, an instance of Child is also considered an instance of Parent. This is different from type() ==, which only checks the exact type.

isinstance() with inheritance:
• isinstance(Child(), Parent) returns True
• isinstance() checks inheritance chain
• Child() is instance of Child
• Child inherits from Parent
• Child() is also instance of Parent
• Returns: True

How it works:
• Child() creates instance of Child
• isinstance(instance, Parent) checks if instance is of Parent
• Child inherits from Parent
• Instance of Child is also instance of Parent
• Returns: True

Example:
class Parent: pass
class Child(Parent): pass
isinstance(Child(), Parent)   # True (Child inherits from Parent)
isinstance(Child(), Child)    # True (Child() is instance of Child)

Common uses:
• Type checking: if isinstance(obj, Parent): ... (works with inheritance)
• Polymorphism: isinstance(obj, BaseClass) (checks base classes)
• isinstance() function
• Type system

Example: If class Parent: pass; class Child(Parent): pass; isinstance(Child(), Parent), then isinstance(Child(), Parent) returns True because isinstance() returns True for parent classes - it checks the entire inheritance chain.

Key Concepts:
• (works with inheritance) • Polymorphism: isinstance(obj, BaseClass) (checks base classes) • isinstance() function • Type system Example: If class Parent: pass; class Child(Parent): pass; isinstance(Child(), Parent), then isinstance(Child(), Parent) returns True because isinstance() returns True for parent classes - it checks the entire inheritance chain.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: pass; class Child(Parent): pass; isinstance(Child(), Child)?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "isinstance() returns True for own class.",
    de: `The isinstance() function returns True if an instance is of its own class. If class Parent: pass; class Child(Parent): pass; isinstance(Child(), Child), then isinstance(Child(), Child) returns True because Child() creates an instance of Child, and isinstance() checks if the instance is of the specified class. An instance is always an instance of its own class, so this always returns True.

isinstance() with own class:
• isinstance(Child(), Child) returns True
• Child() creates instance of Child
• isinstance() checks if instance is of Child
• Instance is of its own class
• Returns: True

How it works:
• Child() creates instance of Child
• isinstance(instance, Child) checks if instance is of Child
• Instance is indeed of Child class
• Returns: True

Example:
class Parent: pass
class Child(Parent): pass
isinstance(Child(), Child)    # True (instance is of its own class)
isinstance(Child(), Parent)    # True (also of parent class)

Common uses:
• Type checking: if isinstance(obj, Class): ... (check own class)
• Instance validation: isinstance(instance, Class) (always True for own class)
• isinstance() function
• Type system

Example: If class Parent: pass; class Child(Parent): pass; isinstance(Child(), Child), then isinstance(Child(), Child) returns True because isinstance() returns True for the instance's own class - an instance is always an instance of its own class.

Key Concepts:
• (check own class) • Instance validation: isinstance(instance, Class) (always True for own class) • isinstance() function • Type system Example: If class Parent: pass; class Child(Parent): pass; isinstance(Child(), Child), then isinstance(Child(), Child) returns True because isinstance() returns True for the instance's own class - an instance is always an instance of its own class.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: pass; class Child(Parent): pass; isinstance(Child(), (Parent, str))?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "isinstance() can check multiple types (tuple).",
    de: `The isinstance() function can check if an instance is of any type in a tuple. If class Parent: pass; class Child(Parent): pass; isinstance(Child(), (Parent, str)), then isinstance(Child(), (Parent, str)) returns True because isinstance() checks if the instance is of any type in the tuple. Since Child() is an instance of Parent (through inheritance), it matches Parent in the tuple, so it returns True. This is useful for checking if an object is one of several types.

isinstance() with tuple:
• isinstance(Child(), (Parent, str)) returns True
• isinstance() checks if instance is of any type in tuple
• Child() is instance of Parent (inheritance)
• Matches Parent in tuple
• Returns: True

How it works:
• isinstance(Child(), (Parent, str)) checks multiple types
• Checks if Child() is instance of Parent (True, through inheritance)
• Or instance of str (False)
• Returns True if matches any type in tuple
• Returns: True

Example:
class Parent: pass
class Child(Parent): pass
isinstance(Child(), (Parent, str))  # True (matches Parent)
isinstance(Child(), (str, int))     # False (matches neither)

Common uses:
• Multiple type checking: isinstance(obj, (Type1, Type2, Type3))
• Type validation: check if object is one of several types
• isinstance() function
• Type system

Example: If class Parent: pass; class Child(Parent): pass; isinstance(Child(), (Parent, str)), then isinstance(Child(), (Parent, str)) returns True because isinstance() can check multiple types using a tuple, and Child() is an instance of Parent.

Key Concepts:
• isinstance() with tuple: • isinstance(Child(), (Parent, str)) returns True • isinstance() checks if instance is of any type in tuple • Child() is instance of Parent (inheritance) • Matches Parent in tuple • Returns: True How it works: • isinstance(Child(), (Parent, str)) checks multiple types • Checks if Child() is instance of Parent (True, through inheritance) • Or instance of str (False) • Returns True if matches any type in tuple • Returns: True Example: class Parent: pass class Child(Parent): pass isinstance(Child(), (Parent, str)) # True (matches Parent) isinstance(Child(), (str, int)) # False (matches neither) Common uses: • Multiple type checking: isinstance(obj, (Type1, Type2, Type3)) • Type validation: check if object is one of several types • isinstance() function • Type system Example: If class Parent: pass; class Child(Parent): pass; isinstance(Child(), (Parent, str)), then isinstance(Child(), (Parent, str)) returns True because isinstance() can check multiple types using a tuple, and Child() is an instance of Parent.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: pass; class Child(Parent): pass; isinstance(Parent(), Child)?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "isinstance() doesn't work backwards (parent not instance of child).",
    de: `The isinstance() function doesn't work backwards - a parent instance is not an instance of a child class. If class Parent: pass; class Child(Parent): pass; isinstance(Parent(), Child), then isinstance(Parent(), Child) returns False because Parent() creates an instance of Parent, not Child. Inheritance only works one way - a child is an instance of the parent, but a parent is not an instance of the child. isinstance() checks if the instance is of the specified class or any of its ancestors, not descendants.

isinstance() doesn't work backwards:
• isinstance(Parent(), Child) returns False
• Parent() creates instance of Parent
• Parent is not a subclass of Child
• Parent instance is not instance of Child
• Returns: False

How it works:
• Parent() creates instance of Parent
• isinstance(instance, Child) checks if instance is of Child
• Parent is not a subclass of Child (inheritance is one-way)
• Parent instance is not instance of Child
• Returns: False

Example:
class Parent: pass
class Child(Parent): pass
isinstance(Parent(), Child)    # False (parent not instance of child)
isinstance(Child(), Parent)    # True (child is instance of parent)

Common uses:
• Understanding inheritance: isinstance() only works forward (child -> parent)
• Type checking: parent instances are not instances of child classes
• isinstance() function
• Inheritance

Example: If class Parent: pass; class Child(Parent): pass; isinstance(Parent(), Child), then isinstance(Parent(), Child) returns False because isinstance() doesn't work backwards - a parent instance is not an instance of a child class.

Key Concepts:
• isinstance() doesn't work backwards: • isinstance(Parent(), Child) returns False • Parent() creates instance of Parent • Parent is not a subclass of Child • Parent instance is not instance of Child • Returns: False How it works: • Parent() creates instance of Parent • isinstance(instance, Child) checks if instance is of Child • Parent is not a subclass of Child (inheritance is one-way) • Parent instance is not instance of Child • Returns: False Example: class Parent: pass class Child(Parent): pass isinstance(Parent(), Child) # False (parent not instance of child) isinstance(Child(), Parent) # True (child is instance of parent) Common uses: • Understanding inheritance: isinstance() only works forward (child -> parent) • Type checking: parent instances are not instances of child classes • isinstance() function • Inheritance Example: If class Parent: pass; class Child(Parent): pass; isinstance(Parent(), Child), then isinstance(Parent(), Child) returns False because isinstance() doesn't work backwards - a parent instance is not an instance of a child class.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: pass; class Child(Parent): pass; issubclass(Child, Parent)?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "issubclass() checks if first is subclass of second.",
    de: `The issubclass() function checks if the first class is a subclass of the second class. If class Parent: pass; class Child(Parent): pass; issubclass(Child, Parent), then issubclass(Child, Parent) returns True because Child inherits from Parent, making Child a subclass of Parent. issubclass() checks the inheritance relationship between classes, returning True if the first class inherits from (or is the same as) the second class.

issubclass() function:
• issubclass(Child, Parent) returns True
• issubclass() checks if Child is subclass of Parent
• Child inherits from Parent
• Child is subclass of Parent
• Returns: True

How it works:
• class Child(Parent): creates child inheriting from Parent
• issubclass(Child, Parent) checks inheritance
• Child is indeed a subclass of Parent
• Returns: True

Example:
class Parent: pass
class Child(Parent): pass
issubclass(Child, Parent)     # True (Child is subclass of Parent)

Common uses:
• Inheritance check: issubclass(Child, Parent) (check if subclass)
• Type checking: if issubclass(cls, Parent): ...
• issubclass() function
• Inheritance

Example: If class Parent: pass; class Child(Parent): pass; issubclass(Child, Parent), then issubclass(Child, Parent) returns True because issubclass() checks if the first class is a subclass of the second class, and Child inherits from Parent.

Key Concepts:
• • issubclass() function • Inheritance Example: If class Parent: pass; class Child(Parent): pass; issubclass(Child, Parent), then issubclass(Child, Parent) returns True because issubclass() checks if the first class is a subclass of the second class, and Child inherits from Parent.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: pass; class Child(Parent): pass; issubclass(Parent, Child)?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "issubclass() doesn't work backwards.",
    de: `The issubclass() function doesn't work backwards - a parent is not a subclass of a child. If class Parent: pass; class Child(Parent): pass; issubclass(Parent, Child), then issubclass(Parent, Child) returns False because Parent doesn't inherit from Child - inheritance only works one way. Child is a subclass of Parent, but Parent is not a subclass of Child. issubclass() checks if the first class inherits from the second class, not the other way around.

issubclass() doesn't work backwards:
• issubclass(Parent, Child) returns False
• Parent doesn't inherit from Child
• Inheritance is one-way (Child -> Parent)
• Parent is not subclass of Child
• Returns: False

How it works:
• issubclass(Parent, Child) checks if Parent is subclass of Child
• Parent doesn't inherit from Child
• Inheritance only works one way
• Parent is not a subclass of Child
• Returns: False

Example:
class Parent: pass
class Child(Parent): pass
issubclass(Parent, Child)     # False (parent not subclass of child)
issubclass(Child, Parent)     # True (child is subclass of parent)

Common uses:
• Understanding inheritance: issubclass() only works forward (child -> parent)
• Type checking: parent classes are not subclasses of child classes
• issubclass() function
• Inheritance

Example: If class Parent: pass; class Child(Parent): pass; issubclass(Parent, Child), then issubclass(Parent, Child) returns False because issubclass() doesn't work backwards - a parent is not a subclass of a child.

Key Concepts:
• issubclass() doesn't work backwards: • issubclass(Parent, Child) returns False • Parent doesn't inherit from Child • Inheritance is one-way (Child -> Parent) • Parent is not subclass of Child • Returns: False How it works: • issubclass(Parent, Child) checks if Parent is subclass of Child • Parent doesn't inherit from Child • Inheritance only works one way • Parent is not a subclass of Child • Returns: False Example: class Parent: pass class Child(Parent): pass issubclass(Parent, Child) # False (parent not subclass of child) issubclass(Child, Parent) # True (child is subclass of parent) Common uses: • Understanding inheritance: issubclass() only works forward (child -> parent) • Type checking: parent classes are not subclasses of child classes • issubclass() function • Inheritance Example: If class Parent: pass; class Child(Parent): pass; issubclass(Parent, Child), then issubclass(Parent, Child) returns False because issubclass() doesn't work backwards - a parent is not a subclass of a child.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class Parent: pass; class Child(Parent): pass; issubclass(Child, (Parent, str))?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "issubclass() can check multiple base classes (tuple).",
    de: `The issubclass() function can check if a class is a subclass of any class in a tuple. If class Parent: pass; class Child(Parent): pass; issubclass(Child, (Parent, str)), then issubclass(Child, (Parent, str)) returns True because issubclass() checks if Child is a subclass of any class in the tuple. Since Child inherits from Parent, it matches Parent in the tuple, so it returns True. This is useful for checking if a class inherits from one of several base classes.

issubclass() with tuple:
• issubclass(Child, (Parent, str)) returns True
• issubclass() checks if Child is subclass of any class in tuple
• Child inherits from Parent
• Matches Parent in tuple
• Returns: True

How it works:
• issubclass(Child, (Parent, str)) checks multiple base classes
• Checks if Child is subclass of Parent (True)
• Or subclass of str (False)
• Returns True if matches any class in tuple
• Returns: True

Example:
class Parent: pass
class Child(Parent): pass
issubclass(Child, (Parent, str))  # True (Child is subclass of Parent)
issubclass(Child, (str, int))      # False (Child is not subclass of str or int)

Common uses:
• Multiple base class checking: issubclass(Class, (Base1, Base2, Base3))
• Type validation: check if class inherits from one of several bases
• issubclass() function
• Inheritance

Example: If class Parent: pass; class Child(Parent): pass; issubclass(Child, (Parent, str)), then issubclass(Child, (Parent, str)) returns True because issubclass() can check multiple base classes using a tuple, and Child is a subclass of Parent.

Key Concepts:
• issubclass() with tuple: • issubclass(Child, (Parent, str)) returns True • issubclass() checks if Child is subclass of any class in tuple • Child inherits from Parent • Matches Parent in tuple • Returns: True How it works: • issubclass(Child, (Parent, str)) checks multiple base classes • Checks if Child is subclass of Parent (True) • Or subclass of str (False) • Returns True if matches any class in tuple • Returns: True Example: class Parent: pass class Child(Parent): pass issubclass(Child, (Parent, str)) # True (Child is subclass of Parent) issubclass(Child, (str, int)) # False (Child is not subclass of str or int) Common uses: • Multiple base class checking: issubclass(Class, (Base1, Base2, Base3)) • Type validation: check if class inherits from one of several bases • issubclass() function • Inheritance Example: If class Parent: pass; class Child(Parent): pass; issubclass(Child, (Parent, str)), then issubclass(Child, (Parent, str)) returns True because issubclass() can check multiple base classes using a tuple, and Child is a subclass of Parent.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class A: pass; class B(A): pass; class C(B): pass; issubclass(C, A)?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "issubclass() checks entire inheritance chain.",
    de: `The issubclass() function checks the entire inheritance chain, not just direct parents. If class A: pass; class B(A): pass; class C(B): pass; issubclass(C, A), then issubclass(C, A) returns True because issubclass() checks if C is a subclass of A through the entire inheritance chain. Even though C directly inherits from B (not A), C is still a subclass of A because B inherits from A, creating a chain: C -> B -> A. issubclass() follows this entire chain.

issubclass() checks entire chain:
• issubclass(C, A) returns True
• issubclass() checks entire inheritance chain
• C inherits from B, B inherits from A
• C is subclass of A (through B)
• Returns: True

How it works:
• issubclass(C, A) checks if C is subclass of A
• C directly inherits from B
• B inherits from A
• Inheritance chain: C -> B -> A
• C is subclass of A (through inheritance chain)
• Returns: True

Example:
class A: pass
class B(A): pass
class C(B): pass
issubclass(C, A)              # True (C is subclass of A through B)
issubclass(C, B)              # True (C directly inherits from B)

Common uses:
• Inheritance chain: issubclass() checks entire chain, not just direct parent
• Type checking: check if class inherits from ancestor
• issubclass() function
• Inheritance

Example: If class A: pass; class B(A): pass; class C(B): pass; issubclass(C, A), then issubclass(C, A) returns True because issubclass() checks the entire inheritance chain, and C is a subclass of A through B.

Key Concepts:
• issubclass() checks entire chain: • issubclass(C, A) returns True • issubclass() checks entire inheritance chain • C inherits from B, B inherits from A • C is subclass of A (through B) • Returns: True How it works: • issubclass(C, A) checks if C is subclass of A • C directly inherits from B • B inherits from A • Inheritance chain: C -> B -> A • C is subclass of A (through inheritance chain) • Returns: True Example: class A: pass class B(A): pass class C(B): pass issubclass(C, A) # True (C is subclass of A through B) issubclass(C, B) # True (C directly inherits from B) Common uses: • Inheritance chain: issubclass() checks entire chain, not just direct parent • Type checking: check if class inherits from ancestor • issubclass() function • Inheritance Example: If class A: pass; class B(A): pass; class C(B): pass; issubclass(C, A), then issubclass(C, A) returns True because issubclass() checks the entire inheritance chain, and C is a subclass of A through B.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class A: pass; class B(A): pass; class C(B): pass; isinstance(C(), A)?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "isinstance() checks entire inheritance chain.",
    de: `The isinstance() function checks the entire inheritance chain, not just the direct class. If class A: pass; class B(A): pass; class C(B): pass; isinstance(C(), A), then isinstance(C(), A) returns True because isinstance() checks if the instance is of A through the entire inheritance chain. Even though C() is an instance of C (not directly A), it's also an instance of A because C inherits from B, which inherits from A, creating a chain: C -> B -> A. isinstance() follows this entire chain.

isinstance() checks entire chain:
• isinstance(C(), A) returns True
• isinstance() checks entire inheritance chain
• C() is instance of C
• C inherits from B, B inherits from A
• C() is instance of A (through inheritance chain)
• Returns: True

How it works:
• isinstance(C(), A) checks if C() is instance of A
• C() is instance of C
• C inherits from B, B inherits from A
• Inheritance chain: C -> B -> A
• C() is instance of A (through inheritance chain)
• Returns: True

Example:
class A: pass
class B(A): pass
class C(B): pass
isinstance(C(), A)             # True (C() is instance of A through B)
isinstance(C(), B)             # True (C() is instance of B)
isinstance(C(), C)             # True (C() is instance of C)

Common uses:
• Inheritance chain: isinstance() checks entire chain, not just direct class
• Type checking: check if instance is of ancestor class
• isinstance() function
• Inheritance

Example: If class A: pass; class B(A): pass; class C(B): pass; isinstance(C(), A), then isinstance(C(), A) returns True because isinstance() checks the entire inheritance chain, and C() is an instance of A through B.

Key Concepts:
• isinstance() checks entire chain: • isinstance(C(), A) returns True • isinstance() checks entire inheritance chain • C() is instance of C • C inherits from B, B inherits from A • C() is instance of A (through inheritance chain) • Returns: True How it works: • isinstance(C(), A) checks if C() is instance of A • C() is instance of C • C inherits from B, B inherits from A • Inheritance chain: C -> B -> A • C() is instance of A (through inheritance chain) • Returns: True Example: class A: pass class B(A): pass class C(B): pass isinstance(C(), A) # True (C() is instance of A through B) isinstance(C(), B) # True (C() is instance of B) isinstance(C(), C) # True (C() is instance of C) Common uses: • Inheritance chain: isinstance() checks entire chain, not just direct class • Type checking: check if instance is of ancestor class • isinstance() function • Inheritance Example: If class A: pass; class B(A): pass; class C(B): pass; isinstance(C(), A), then isinstance(C(), A) returns True because isinstance() checks the entire inheritance chain, and C() is an instance of A through B.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class A: pass; class B: pass; class C(A, B): pass; issubclass(C, A) and issubclass(C, B)?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Multiple inheritance: child is subclass of all parents.",
    de: `In multiple inheritance, a child class is a subclass of all its parent classes. If class A: pass; class B: pass; class C(A, B): pass; issubclass(C, A) and issubclass(C, B), then issubclass(C, A) and issubclass(C, B) returns True because C inherits from both A and B, making C a subclass of both. In multiple inheritance, the child inherits from all parents, so it's a subclass of all of them. Both issubclass(C, A) and issubclass(C, B) return True, so the and expression returns True.

Multiple inheritance:
• issubclass(C, A) and issubclass(C, B) returns True
• C inherits from both A and B
• C is subclass of A (True)
• C is subclass of B (True)
• Both True, so and returns True
• Returns: True

How it works:
• class C(A, B): creates child with multiple parents
• issubclass(C, A) checks if C is subclass of A (True)
• issubclass(C, B) checks if C is subclass of B (True)
• Both return True
• and expression: True and True = True
• Returns: True

Example:
class A: pass
class B: pass
class C(A, B): pass  # Multiple inheritance
issubclass(C, A)              # True (C is subclass of A)
issubclass(C, B)              # True (C is subclass of B)
issubclass(C, A) and issubclass(C, B)  # True (both True)

Common uses:
• Multiple inheritance: child is subclass of all parents
• Type checking: check if class inherits from multiple bases
• issubclass() function
• Multiple inheritance

Example: If class A: pass; class B: pass; class C(A, B): pass; issubclass(C, A) and issubclass(C, B), then it returns True because in multiple inheritance, the child is a subclass of all parents - C inherits from both A and B, so it's a subclass of both.

Key Concepts:
• Multiple inheritance: • issubclass(C, A) and issubclass(C, B) returns True • C inherits from both A and B • C is subclass of A (True) • C is subclass of B (True) • Both True, so and returns True • Returns: True How it works: • class C(A, B): creates child with multiple parents • issubclass(C, A) checks if C is subclass of A (True) • issubclass(C, B) checks if C is subclass of B (True) • Both return True • and expression: True and True = True • Returns: True Example: class A: pass class B: pass class C(A, B): pass # Multiple inheritance issubclass(C, A) # True (C is subclass of A) issubclass(C, B) # True (C is subclass of B) issubclass(C, A) and issubclass(C, B) # True (both True) Common uses: • Multiple inheritance: child is subclass of all parents • Type checking: check if class inherits from multiple bases • issubclass() function • Multiple inheritance Example: If class A: pass; class B: pass; class C(A, B): pass; issubclass(C, A) and issubclass(C, B), then it returns True because in multiple inheritance, the child is a subclass of all parents - C inherits from both A and B, so it's a subclass of both.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  
  // 91-100: Advanced OOP Concepts
  (_i: number) => ({ 
    q: `What is class MyClass: def __init__(self): self.x = 1; class Child(MyClass): def __init__(self): super().__init__(); self.y = 2; obj = Child(); [obj.x, obj.y]?`, 
    o: ["[1, 2]", "[1]", "[2]", "Error"], 
    c: 0, 
    e: "super().__init__() initializes parent attributes.",
    de: `The super().__init__() call initializes parent attributes in the child class. If class MyClass: def __init__(self): self.x = 1; class Child(MyClass): def __init__(self): super().__init__(); self.y = 2; obj = Child(); [obj.x, obj.y], then [obj.x, obj.y] returns [1, 2] because super().__init__() calls the parent's __init__, which sets self.x = 1. Then the child's __init__ sets self.y = 2. This ensures both parent and child attributes are initialized correctly. Without super().__init__(), only self.y would be set, and obj.x would raise an AttributeError.

super().__init__() initializes parent:
• [obj.x, obj.y] returns [1, 2]
• super().__init__() calls parent __init__
• Parent __init__ sets self.x = 1
• Child __init__ sets self.y = 2
• Both attributes initialized
• Returns: [1, 2]

How it works:
• Child() creates instance and calls __init__
• Child.__init__ executes: super().__init__()
• super().__init__() calls MyClass.__init__()
• MyClass.__init__ sets self.x = 1
• Child.__init__ sets self.y = 2
• obj.x = 1, obj.y = 2
• Returns: [1, 2]

Example:
class MyClass:
    def __init__(self):
        self.x = 1
class Child(MyClass):
    def __init__(self):
        super().__init__()  # Initializes parent
        self.y = 2
obj = Child()
[obj.x, obj.y]              # [1, 2] (both initialized)

Common uses:
• Parent initialization: def __init__(self): super().__init__(); self.child_attr = value
• Constructor chaining: ensure parent attributes are initialized
• super() function
• Object initialization

Example: If class MyClass: def __init__(self): self.x = 1; class Child(MyClass): def __init__(self): super().__init__(); self.y = 2; obj = Child(); [obj.x, obj.y], then [obj.x, obj.y] returns [1, 2] because super().__init__() initializes parent attributes, ensuring both parent and child attributes are set.

Key Concepts:
• super().__init__() initializes parent: • [obj.x, obj.y] returns [1, 2] • super().__init__() calls parent __init__ • Parent __init__ sets self.x = 1 • Child __init__ sets self.y = 2 • Both attributes initialized • Returns: [1, 2] How it works: • Child() creates instance and calls __init__ • Child.__init__ executes: super().__init__() • super().__init__() calls MyClass.__init__() • MyClass.__init__ sets self.x = 1 • Child.__init__ sets self.y = 2 • obj.x = 1, obj.y = 2 • Returns: [1, 2] Example: class MyClass: def __init__(self): self.x = 1 class Child(MyClass): def __init__(self): super().__init__() # Initializes parent self.y = 2 obj = Child() [obj.x, obj.y] # [1, 2] (both initialized) Common uses: • Parent initialization: def __init__(self): super().__init__(); self.child_attr = value • Constructor chaining: ensure parent attributes are initialized • super() function • Object initialization Example: If class MyClass: def __init__(self): self.x = 1; class Child(MyClass): def __init__(self): super().__init__(); self.y = 2; obj = Child(); [obj.x, obj.y], then [obj.x, obj.y] returns [1, 2] because super().__init__() initializes parent attributes, ensuring both parent and child attributes are set.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __init__(self, x): self.x = x; class Child(MyClass): def __init__(self, x, y): super().__init__(x); self.y = y; Child(1, 2).x?`, 
    o: ["1", "2", "Error", "None"], 
    c: 0, 
    e: "super().__init__() passes arguments to parent.",
    de: `The super().__init__() call can pass arguments to the parent's __init__ method. If class MyClass: def __init__(self, x): self.x = x; class Child(MyClass): def __init__(self, x, y): super().__init__(x); self.y = y; Child(1, 2).x, then Child(1, 2).x returns 1 because Child.__init__ receives arguments (1, 2), calls super().__init__(1) which passes x = 1 to MyClass.__init__, setting self.x = 1. Then Child.__init__ sets self.y = 2. This allows the child to initialize parent attributes with specific values passed to the child's constructor.

super().__init__() with arguments:
• Child(1, 2).x returns 1
• Child(1, 2) calls Child.__init__(1, 2)
• Child.__init__ calls super().__init__(1) (passes x)
• MyClass.__init__ sets self.x = 1
• Child.__init__ sets self.y = 2
• Returns: 1

How it works:
• Child(1, 2) calls Child.__init__(1, 2)
• Child.__init__ executes: super().__init__(1)
• super().__init__(1) calls MyClass.__init__(1)
• MyClass.__init__ sets self.x = 1
• Child.__init__ sets self.y = 2
• Child(1, 2).x returns 1

Example:
class MyClass:
    def __init__(self, x):
        self.x = x
class Child(MyClass):
    def __init__(self, x, y):
        super().__init__(x)  # Passes x to parent
        self.y = y
Child(1, 2).x                # 1 (parent __init__ sets with x=1)

Common uses:
• Parent initialization: def __init__(self, x, y): super().__init__(x); self.y = y
• Constructor chaining: pass arguments to parent __init__
• super() function
• Object initialization

Example: If class MyClass: def __init__(self, x): self.x = x; class Child(MyClass): def __init__(self, x, y): super().__init__(x); self.y = y; Child(1, 2).x, then Child(1, 2).x returns 1 because super().__init__() passes arguments to the parent, so x = 1 is passed to MyClass.__init__, setting self.x = 1.

Key Concepts:
• super().__init__() with arguments: • Child(1, 2).x returns 1 • Child(1, 2) calls Child.__init__(1, 2) • Child.__init__ calls super().__init__(1) (passes x) • MyClass.__init__ sets self.x = 1 • Child.__init__ sets self.y = 2 • Returns: 1 How it works: • Child(1, 2) calls Child.__init__(1, 2) • Child.__init__ executes: super().__init__(1) • super().__init__(1) calls MyClass.__init__(1) • MyClass.__init__ sets self.x = 1 • Child.__init__ sets self.y = 2 • Child(1, 2).x returns 1 Example: class MyClass: def __init__(self, x): self.x = x class Child(MyClass): def __init__(self, x, y): super().__init__(x) # Passes x to parent self.y = y Child(1, 2).x # 1 (parent __init__ sets with x=1) Common uses: • Parent initialization: def __init__(self, x, y): super().__init__(x); self.y = y • Constructor chaining: pass arguments to parent __init__ • super() function • Object initialization Example: If class MyClass: def __init__(self, x): self.x = x; class Child(MyClass): def __init__(self, x, y): super().__init__(x); self.y = y; Child(1, 2).x, then Child(1, 2).x returns 1 because super().__init__() passes arguments to the parent, so x = 1 is passed to MyClass.__init__, setting self.x = 1.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: x = 1; class Child(MyClass): x = 2; class GrandChild(Child): pass; GrandChild.x?`, 
    o: ["2", "1", "Error", "None"], 
    c: 0, 
    e: "Grandchild inherits from immediate parent (Child.x).",
    de: `A grandchild class inherits from its immediate parent, not from the grandparent when there's an override. If class MyClass: x = 1; class Child(MyClass): x = 2; class GrandChild(Child): pass; GrandChild.x, then GrandChild.x returns 2 because GrandChild inherits from Child (its immediate parent), and Child has x = 2. The inheritance chain is GrandChild -> Child -> MyClass, and when searching for x, Python finds it in Child first (x = 2), so it uses that value, not MyClass's x = 1.

Grandchild inherits from immediate parent:
• GrandChild.x returns 2
• GrandChild inherits from Child (immediate parent)
• Child has x = 2 (overrides MyClass.x = 1)
• GrandChild uses Child.x = 2
• Returns: 2

How it works:
• class GrandChild(Child): creates grandchild inheriting from Child
• GrandChild.x looks for attribute x
• Python searches: GrandChild (not found) -> Child (finds x = 2)
• Uses Child.x = 2 (doesn't reach MyClass.x = 1)
• Returns: 2

Example:
class MyClass: x = 1
class Child(MyClass): x = 2  # Overrides parent
class GrandChild(Child): pass
GrandChild.x                 # 2 (inherits from immediate parent Child)

Common uses:
• Inheritance chain: grandchild inherits from immediate parent
• Attribute resolution: child's override takes precedence
• Inheritance
• Attribute shadowing

Example: If class MyClass: x = 1; class Child(MyClass): x = 2; class GrandChild(Child): pass; GrandChild.x, then GrandChild.x returns 2 because the grandchild inherits from its immediate parent (Child), and Child has x = 2.

Key Concepts:
• Grandchild inherits from immediate parent: • GrandChild.x returns 2 • GrandChild inherits from Child (immediate parent) • Child has x = 2 (overrides MyClass.x = 1) • GrandChild uses Child.x = 2 • Returns: 2 How it works: • class GrandChild(Child): creates grandchild inheriting from Child • GrandChild.x looks for attribute x • Python searches: GrandChild (not found) -> Child (finds x = 2) • Uses Child.x = 2 (doesn't reach MyClass.x = 1) • Returns: 2 Example: class MyClass: x = 1 class Child(MyClass): x = 2 # Overrides parent class GrandChild(Child): pass GrandChild.x # 2 (inherits from immediate parent Child) Common uses: • Inheritance chain: grandchild inherits from immediate parent • Attribute resolution: child's override takes precedence • Inheritance • Attribute shadowing Example: If class MyClass: x = 1; class Child(MyClass): x = 2; class GrandChild(Child): pass; GrandChild.x, then GrandChild.x returns 2 because the grandchild inherits from its immediate parent (Child), and Child has x = 2.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def method(self): return 1; class Child(MyClass): def method(self): return super().method() + 1; Child().method()?`, 
    o: ["2", "1", "Error", "None"], 
    c: 0, 
    e: "Child can extend parent method using super().",
    de: `A child class can extend a parent method using super() to call the parent's method and then add additional behavior. If class MyClass: def method(self): return 1; class Child(MyClass): def method(self): return super().method() + 1; Child().method(), then Child().method() returns 2 because super().method() calls the parent's method (returns 1), and then the child adds 1 to it (1 + 1 = 2). This allows the child to extend the parent's behavior rather than completely replace it - a common pattern for adding functionality while preserving parent behavior.

Child extends parent method:
• Child().method() returns 2
• Child's method calls super().method()
• Parent method returns 1
• Child adds 1: 1 + 1 = 2
• Returns: 2

How it works:
• Child().method() calls method on Child instance
• Child.method() executes: return super().method() + 1
• super().method() calls MyClass.method(), returns 1
• Child adds 1: 1 + 1 = 2
• Returns: 2

Example:
class MyClass:
    def method(self):
        return 1
class Child(MyClass):
    def method(self):
        return super().method() + 1  # Extends parent
Child().method()              # 2 (parent's 1 + 1)

Common uses:
• Method extension: def method(self): return super().method() + extension
• Behavior extension: child extends parent behavior
• super() function
• Method overriding

Example: If class MyClass: def method(self): return 1; class Child(MyClass): def method(self): return super().method() + 1; Child().method(), then Child().method() returns 2 because the child can extend the parent method using super(), calling the parent and then adding child-specific behavior.

Key Concepts:
• Child extends parent method: • Child().method() returns 2 • Child's method calls super().method() • Parent method returns 1 • Child adds 1: 1 + 1 = 2 • Returns: 2 How it works: • Child().method() calls method on Child instance • Child.method() executes: return super().method() + 1 • super().method() calls MyClass.method(), returns 1 • Child adds 1: 1 + 1 = 2 • Returns: 2 Example: class MyClass: def method(self): return 1 class Child(MyClass): def method(self): return super().method() + 1 # Extends parent Child().method() # 2 (parent's 1 + 1) Common uses: • Method extension: def method(self): return super().method() + extension • Behavior extension: child extends parent behavior • super() function • Method overriding Example: If class MyClass: def method(self): return 1; class Child(MyClass): def method(self): return super().method() + 1; Child().method(), then Child().method() returns 2 because the child can extend the parent method using super(), calling the parent and then adding child-specific behavior.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __str__(self): return 'MyClass'; class Child(MyClass): def __str__(self): return 'Child'; str(Child())?`, 
    o: ["'Child'", "'MyClass'", "Error", "None"], 
    c: 0, 
    e: "Child can override special methods.",
    de: `Child classes can override special methods (magic methods) from the parent. If class MyClass: def __str__(self): return 'MyClass'; class Child(MyClass): def __str__(self): return 'Child'; str(Child()), then str(Child()) returns 'Child' because Child defines its own __str__() method, which overrides the parent's __str__(). When you call str() on a Child instance, Python uses Child.__str__(), not MyClass.__str__(). Special methods can be overridden just like regular methods, allowing child classes to customize behavior for built-in functions and operators.

Child overrides special method:
• str(Child()) returns 'Child'
• Child defines __str__() (overrides parent)
• str() calls Child.__str__()
• Child.__str__() returns 'Child'
• Returns: 'Child'

How it works:
• str(Child()) calls str() on Child instance
• str() looks for __str__() method
• Python finds __str__() in Child (overrides parent)
• Calls Child.__str__() (returns 'Child')
• Returns: 'Child'

Example:
class MyClass:
    def __str__(self):
        return 'MyClass'
class Child(MyClass):
    def __str__(self):
        return 'Child'  # Overrides parent __str__
str(Child())              # 'Child' (uses child's __str__)

Common uses:
• Special method override: child can override __str__, __len__, __add__, etc.
• Customization: child provides different behavior for built-ins
• Special methods
• Method overriding

Example: If class MyClass: def __str__(self): return 'MyClass'; class Child(MyClass): def __str__(self): return 'Child'; str(Child()), then str(Child()) returns 'Child' because the child can override special methods, and Child.__str__() takes precedence over MyClass.__str__().

Key Concepts:
• • Customization: child provides different behavior for built-ins • Special methods • Method overriding Example: If class MyClass: def __str__(self): return 'MyClass'; class Child(MyClass): def __str__(self): return 'Child'; str(Child()), then str(Child()) returns 'Child' because the child can override special methods, and Child.__str__() takes precedence over MyClass.__str__().

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __init__(self): self.__x = 1; class Child(MyClass): def method(self): return self.__x; Child().method()?`, 
    o: ["AttributeError", "1", "Error", "None"], 
    c: 0, 
    e: "Name mangling prevents child from accessing parent's __x.",
    de: `Name mangling prevents child classes from accessing parent's private attributes. If class MyClass: def __init__(self): self.__x = 1; class Child(MyClass): def method(self): return self.__x; Child().method(), then Child().method() raises an AttributeError because MyClass's __x is mangled to _MyClass__x, but Child's method tries to access __x, which would be mangled to _Child__x (different name). Name mangling includes the class name, so each class has its own mangled namespace, preventing child classes from accidentally accessing parent's private attributes.

Name mangling prevents child access:
• Child().method() raises AttributeError
• MyClass.__x is mangled to _MyClass__x
• Child tries to access __x (would be _Child__x)
• Different mangled names
• Raises AttributeError

How it works:
• MyClass.__init__ sets self.__x = 1 (mangled to _MyClass__x)
• Child().method() tries to access self.__x
• In Child context, __x would mangle to _Child__x
• _Child__x doesn't exist (attribute is _MyClass__x)
• Raises AttributeError

Example:
class MyClass:
    def __init__(self):
        self.__x = 1  # Mangled to _MyClass__x
class Child(MyClass):
    def method(self):
        return self.__x  # Would mangle to _Child__x (doesn't exist)
Child().method()        # AttributeError (can't access parent's __x)

Common uses:
• Private attributes: name mangling prevents child access
• Encapsulation: each class has its own mangled namespace
• Name mangling
• Inheritance

Example: If class MyClass: def __init__(self): self.__x = 1; class Child(MyClass): def method(self): return self.__x; Child().method(), then Child().method() raises an AttributeError because name mangling prevents child classes from accessing parent's private attributes - MyClass.__x becomes _MyClass__x, but Child tries to access __x which would be _Child__x.

Key Concepts:
• Name mangling prevents child access: • Child().method() raises AttributeError • MyClass.__x is mangled to _MyClass__x • Child tries to access __x (would be _Child__x) • Different mangled names • Raises AttributeError How it works: • MyClass.__init__ sets self.__x = 1 (mangled to _MyClass__x) • Child().method() tries to access self.__x • In Child context, __x would mangle to _Child__x • _Child__x doesn't exist (attribute is _MyClass__x) • Raises AttributeError Example: class MyClass: def __init__(self): self.__x = 1 # Mangled to _MyClass__x class Child(MyClass): def method(self): return self.__x # Would mangle to _Child__x (doesn't exist) Child().method() # AttributeError (can't access parent's __x) Common uses: • Private attributes: name mangling prevents child access • Encapsulation: each class has its own mangled namespace • Name mangling • Inheritance Example: If class MyClass: def __init__(self): self.__x = 1; class Child(MyClass): def method(self): return self.__x; Child().method(), then Child().method() raises an AttributeError because name mangling prevents child classes from accessing parent's private attributes - MyClass.__x becomes _MyClass__x, but Child tries to access __x which would be _Child__x.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __init__(self): self._x = 1; class Child(MyClass): def method(self): return self._x; Child().method()?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "Single underscore (protected) is accessible to child.",
    de: `Single underscore prefix (_) indicates "protected" attributes that are accessible to child classes. If class MyClass: def __init__(self): self._x = 1; class Child(MyClass): def method(self): return self._x; Child().method(), then Child().method() returns 1 because single underscore is just a naming convention (not enforced by Python), so child classes can access protected attributes. Unlike double underscore (__) which triggers name mangling, single underscore doesn't change the attribute name, so it's accessible to child classes through inheritance.

Single underscore accessible to child:
• Child().method() returns 1
• self._x is protected attribute (single underscore)
• Single underscore doesn't mangle
• Child can access parent's _x
• Returns: 1

How it works:
• MyClass.__init__ sets self._x = 1
• Child().method() accesses self._x
• Single underscore doesn't trigger name mangling
• Attribute name remains _x
• Child can access it through inheritance
• Returns: 1

Example:
class MyClass:
    def __init__(self):
        self._x = 1  # Protected (convention)
class Child(MyClass):
    def method(self):
        return self._x  # Can access parent's protected attribute
Child().method()        # 1 (accessible to child)

Common uses:
• Protected attributes: self._attr (accessible to child classes)
• Inheritance: child can access parent's protected attributes
• Naming conventions
• Encapsulation

Example: If class MyClass: def __init__(self): self._x = 1; class Child(MyClass): def method(self): return self._x; Child().method(), then Child().method() returns 1 because single underscore (protected) is accessible to child classes - it's a convention, not enforced privacy.

Key Concepts:
• Single underscore accessible to child: • Child().method() returns 1 • self._x is protected attribute (single underscore) • Single underscore doesn't mangle • Child can access parent's _x • Returns: 1 How it works: • MyClass.__init__ sets self._x = 1 • Child().method() accesses self._x • Single underscore doesn't trigger name mangling • Attribute name remains _x • Child can access it through inheritance • Returns: 1 Example: class MyClass: def __init__(self): self._x = 1 # Protected (convention) class Child(MyClass): def method(self): return self._x # Can access parent's protected attribute Child().method() # 1 (accessible to child) Common uses: • Protected attributes: self._attr (accessible to child classes) • Inheritance: child can access parent's protected attributes • Naming conventions • Encapsulation Example: If class MyClass: def __init__(self): self._x = 1; class Child(MyClass): def method(self): return self._x; Child().method(), then Child().method() returns 1 because single underscore (protected) is accessible to child classes - it's a convention, not enforced privacy.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: @classmethod; def method(cls): return cls; class Child(MyClass): pass; Child.method()?`, 
    o: ["<class '__main__.Child'>", "<class '__main__.MyClass'>", "Error", "None"], 
    c: 0, 
    e: "Class method receives child class when called on child.",
    de: `Class methods receive the class they're called on, not the class they're defined in. If class MyClass: @classmethod; def method(cls): return cls; class Child(MyClass): pass; Child.method(), then Child.method() returns <class '__main__.Child'> because when you call a class method on a child class, the cls parameter receives the child class (Child), not the parent class (MyClass). This allows class methods to work polymorphically - they receive the actual class they're called on, enabling class-specific behavior.

Class method receives child class:
• Child.method() returns <class '__main__.Child'>
• @classmethod def method(cls) receives cls parameter
• When called on Child, cls = Child
• Returns the class it's called on
• Returns: <class '__main__.Child'>

How it works:
• Child.method() calls class method on Child class
• Python calls method with cls = Child (not MyClass)
• method(cls) executes: return cls
• Returns Child class
• Returns: <class '__main__.Child'>

Example:
class MyClass:
    @classmethod
    def method(cls):
        return cls  # Returns the class it's called on
class Child(MyClass): pass
Child.method()              # <class '__main__.Child'> (receives Child, not MyClass)
MyClass.method()            # <class '__main__.MyClass'> (receives MyClass)

Common uses:
• Polymorphic class methods: @classmethod def method(cls): return cls (receives actual class)
• Class-specific behavior: class methods work with the class they're called on
• Class methods
• Inheritance

Example: If class MyClass: @classmethod; def method(cls): return cls; class Child(MyClass): pass; Child.method(), then Child.method() returns <class '__main__.Child'> because class methods receive the child class when called on the child - cls receives Child, not MyClass.

Key Concepts:
• Class method receives child class: • Child.method() returns <class '__main__.Child'> • @classmethod def method(cls) receives cls parameter • When called on Child, cls = Child • Returns the class it's called on • Returns: <class '__main__.Child'> How it works: • Child.method() calls class method on Child class • Python calls method with cls = Child (not MyClass) • method(cls) executes: return cls • Returns Child class • Returns: <class '__main__.Child'> Example: class MyClass: @classmethod def method(cls): return cls # Returns the class it's called on class Child(MyClass): pass Child.method() # <class '__main__.Child'> (receives Child, not MyClass) MyClass.method() # <class '__main__.MyClass'> (receives MyClass) Common uses: • Polymorphic class methods: @classmethod def method(cls): return cls (receives actual class) • Class-specific behavior: class methods work with the class they're called on • Class methods • Inheritance Example: If class MyClass: @classmethod; def method(cls): return cls; class Child(MyClass): pass; Child.method(), then Child.method() returns <class '__main__.Child'> because class methods receive the child class when called on the child - cls receives Child, not MyClass.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: @staticmethod; def method(): return 1; class Child(MyClass): pass; Child.method()?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "Static method inherited unchanged.",
    de: `Static methods are inherited unchanged by child classes. If class MyClass: @staticmethod; def method(): return 1; class Child(MyClass): pass; Child.method(), then Child.method() returns 1 because static methods don't receive self or cls, so they behave the same regardless of which class they're called on. When Child inherits from MyClass, it inherits the static method, and calling Child.method() uses the same implementation as MyClass.method(), returning 1. Static methods are not polymorphic - they don't change based on the class they're called on.

Static method inherited unchanged:
• Child.method() returns 1
• Static method doesn't receive self or cls
• Same behavior regardless of class
• Inherited unchanged from parent
• Returns: 1

How it works:
• Child.method() calls static method on Child class
• Static method doesn't receive class information
• Uses same implementation as MyClass.method()
• Returns: 1

Example:
class MyClass:
    @staticmethod
    def method():
        return 1
class Child(MyClass): pass
Child.method()              # 1 (inherited unchanged)
MyClass.method()            # 1 (same behavior)

Common uses:
• Static method inheritance: static methods are inherited unchanged
• Non-polymorphic methods: static methods don't change based on class
• Static methods
• Inheritance

Example: If class MyClass: @staticmethod; def method(): return 1; class Child(MyClass): pass; Child.method(), then Child.method() returns 1 because static methods are inherited unchanged - they don't receive class information, so they behave the same regardless of which class they're called on.

Key Concepts:
• Static method inherited unchanged: • Child.method() returns 1 • Static method doesn't receive self or cls • Same behavior regardless of class • Inherited unchanged from parent • Returns: 1 How it works: • Child.method() calls static method on Child class • Static method doesn't receive class information • Uses same implementation as MyClass.method() • Returns: 1 Example: class MyClass: @staticmethod def method(): return 1 class Child(MyClass): pass Child.method() # 1 (inherited unchanged) MyClass.method() # 1 (same behavior) Common uses: • Static method inheritance: static methods are inherited unchanged • Non-polymorphic methods: static methods don't change based on class • Static methods • Inheritance Example: If class MyClass: @staticmethod; def method(): return 1; class Child(MyClass): pass; Child.method(), then Child.method() returns 1 because static methods are inherited unchanged - they don't receive class information, so they behave the same regardless of which class they're called on.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: @property; def x(self): return 1; class Child(MyClass): pass; Child().x?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "Property is inherited by child class.",
    de: `Properties are inherited by child classes. If class MyClass: @property; def x(self): return 1; class Child(MyClass): pass; Child().x, then Child().x returns 1 because properties are class attributes (descriptors), and they're inherited just like other class attributes. When Child inherits from MyClass, it inherits the property x, and when you access Child().x, Python uses the inherited property, which returns 1. Properties work the same way in child classes as they do in parent classes.

Property inherited by child:
• Child().x returns 1
• Property is class attribute (descriptor)
• Inherited by Child from MyClass
• Works the same in child class
• Returns: 1

How it works:
• Child() creates instance of Child
• Child().x accesses property
• Property is inherited from MyClass
• Python uses inherited property getter
• Property getter returns 1
• Returns: 1

Example:
class MyClass:
    @property
    def x(self):
        return 1
class Child(MyClass): pass
Child().x                        # 1 (inherits property from MyClass)

Common uses:
• Property inheritance: properties are inherited by child classes
• Code reuse: child can use parent's properties
• Properties
• Inheritance

Example: If class MyClass: @property; def x(self): return 1; class Child(MyClass): pass; Child().x, then Child().x returns 1 because properties are inherited by child classes, so Child inherits the property from MyClass.

Key Concepts:
• Property inherited by child: • Child().x returns 1 • Property is class attribute (descriptor) • Inherited by Child from MyClass • Works the same in child class • Returns: 1 How it works: • Child() creates instance of Child • Child().x accesses property • Property is inherited from MyClass • Python uses inherited property getter • Property getter returns 1 • Returns: 1 Example: class MyClass: @property def x(self): return 1 class Child(MyClass): pass Child().x # 1 (inherits property from MyClass) Common uses: • Property inheritance: properties are inherited by child classes • Code reuse: child can use parent's properties • Properties • Inheritance Example: If class MyClass: @property; def x(self): return 1; class Child(MyClass): pass; Child().x, then Child().x returns 1 because properties are inherited by child classes, so Child inherits the property from MyClass.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
