// --- LEVEL 9 EXPERT A: ABCs Advanced, Protocol, Structural Subtyping — 50 TRULY UNIQUE QUESTIONS ---
export const level9ExpertA = [
  // ===== ABCs ADVANCED (1–25) =====

  // Q1: Instantiating an abstract class raises TypeError
  (_i: number) => ({
    q: `What happens?\nfrom abc import ABC, abstractmethod\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\n\nShape()`,
    o: ["TypeError", "None", "Shape object", "0"],
    c: 0,
    e: "You cannot instantiate a class that has unimplemented abstract methods.",
    de: `Abstract classes that contain @abstractmethod methods cannot be instantiated directly. Attempting to do so raises TypeError because the abstract method area() has not been implemented in a concrete subclass.

Key concepts:
• ABC marks a class as abstract
• @abstractmethod marks methods that MUST be overridden
• Instantiating a class with unimplemented abstract methods raises TypeError
• You must create a subclass that implements all abstract methods

How it works:
• Shape inherits from ABC and declares area() as abstract
• Shape() tries to create an instance
• Python checks __abstractmethods__ and finds area() is not implemented
• Raises TypeError: "Can't instantiate abstract class Shape with abstract method area"

Example:
>>> from abc import ABC, abstractmethod
>>> class Shape(ABC):
...     @abstractmethod
...     def area(self): pass
>>> Shape()
TypeError: Can't instantiate abstract class Shape with abstract method area

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

  // Q2: Concrete subclass implementing abstract method
  (_i: number) => ({
    q: `What is the output?\nfrom abc import ABC, abstractmethod\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\n\nclass Circle(Shape):\n    def area(self):\n        return 3.14\n\nprint(Circle().area())`,
    o: ["3.14", "TypeError", "None", "Error"],
    c: 0,
    e: "Circle implements area(), so it can be instantiated and area() returns 3.14.",
    de: `When a subclass implements all abstract methods from its ABC parent, it becomes a concrete class that can be instantiated normally.

Key concepts:
• Circle inherits from Shape (which is abstract)
• Circle provides a concrete implementation of area()
• Since all abstract methods are implemented, Circle can be instantiated
• Calling area() returns 3.14

How it works:
• Shape declares area() as @abstractmethod
• Circle overrides area() with a concrete implementation returning 3.14
• Circle() succeeds because no abstract methods remain unimplemented
• Circle().area() calls the concrete implementation, returning 3.14

Example:
>>> Circle().area()
3.14

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

  // Q3: Abstract class with concrete methods
  (_i: number) => ({
    q: `Can an abstract class have concrete (non-abstract) methods?`,
    o: ["Yes", "No", "Only static methods", "Only class methods"],
    c: 0,
    e: "Abstract classes can mix abstract and concrete methods freely.",
    de: `Abstract classes can absolutely contain concrete (non-abstract) methods alongside abstract ones. This is one of the key design benefits of ABCs — they can provide shared implementations that subclasses inherit.

Key concepts:
• ABCs can have both abstract and concrete methods
• Concrete methods in ABCs work just like regular methods
• Subclasses inherit concrete methods without needing to override them
• Only abstract methods must be overridden before instantiation

How it works:
• You mark only the methods that MUST be overridden with @abstractmethod
• Other methods are regular concrete methods
• Subclasses get the concrete methods for free via inheritance
• This pattern is called the Template Method design pattern

Example:
>>> class Shape(ABC):
...     @abstractmethod
...     def area(self): pass
...     def describe(self):
...         return "I am a shape"
>>> class Circle(Shape):
...     def area(self): return 3.14
>>> Circle().describe()
'I am a shape'

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

  // Q4: Abstract class with concrete method called from subclass
  (_i: number) => ({
    q: `What is the output?\nfrom abc import ABC, abstractmethod\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\n    def describe(self):\n        return "I am a shape"\n\nclass Circle(Shape):\n    def area(self):\n        return 3.14\n\nprint(Circle().describe())`,
    o: ["I am a shape", "TypeError", "None", "Error"],
    c: 0,
    e: "Circle inherits the concrete describe() method from Shape.",
    de: `The concrete method describe() is defined in the abstract class Shape. Since Circle implements the required abstract method area(), it can be instantiated, and it inherits describe() from Shape.

Key concepts:
• Shape has one abstract method (area) and one concrete method (describe)
• Circle implements area(), satisfying the ABC contract
• Circle inherits describe() without overriding it
• Calling Circle().describe() invokes Shape's describe()

How it works:
• Circle() creates an instance (all abstract methods implemented)
• Circle().describe() looks for describe in Circle — not found
• Python follows MRO to Shape, finds describe() there
• Returns "I am a shape"

Example:
>>> Circle().describe()
'I am a shape'

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

  // Q5: Abstract class with __init__
  (_i: number) => ({
    q: `Can an abstract class have __init__?`,
    o: ["Yes, subclasses can call it with super()", "No, ABCs cannot have __init__", "Only if __init__ is abstract", "Only with metaclass"],
    c: 0,
    e: "ABCs can have __init__; subclasses call it via super().__init__().",
    de: `Abstract classes can define __init__ just like any other class. Subclasses can (and should) call the parent's __init__ via super().__init__() to ensure proper initialization.

Key concepts:
• ABCs can have __init__ with initialization logic
• Subclasses call super().__init__() to run the parent init
• __init__ is NOT automatically abstract — it's a regular method
• The ABC still can't be instantiated directly if it has abstract methods

How it works:
• Define __init__ in the ABC like any normal class
• In the subclass __init__, call super().__init__()
• The parent __init__ runs, setting up shared attributes
• The subclass can then add its own initialization

Example:
>>> class Animal(ABC):
...     def __init__(self, name):
...         self.name = name
...     @abstractmethod
...     def speak(self): pass
>>> class Dog(Animal):
...     def __init__(self, name, breed):
...         super().__init__(name)
...         self.breed = breed
...     def speak(self): return "Woof"
>>> d = Dog("Rex", "Lab")
>>> d.name
'Rex'

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

  // Q6: Missing one abstract method raises TypeError
  (_i: number) => ({
    q: `What happens?\nfrom abc import ABC, abstractmethod\n\nclass A(ABC):\n    @abstractmethod\n    def f(self): pass\n    @abstractmethod\n    def g(self): pass\n\nclass B(A):\n    def f(self):\n        return 1\n\nB()`,
    o: ["TypeError", "1", "None", "B object"],
    c: 0,
    e: "B only implements f() but not g(), so it's still abstract and can't be instantiated.",
    de: `If an ABC defines multiple abstract methods, a subclass must implement ALL of them to be concrete. Missing even one abstract method means the subclass is still abstract.

Key concepts:
• A defines two abstract methods: f() and g()
• B only implements f(), leaving g() unimplemented
• B is still abstract because g() remains unimplemented
• B() raises TypeError

How it works:
• A.__abstractmethods__ = frozenset({'f', 'g'})
• B implements f(), so B.__abstractmethods__ = frozenset({'g'})
• Since B still has abstract methods, B() raises TypeError
• Error: "Can't instantiate abstract class B with abstract method g"

Example:
>>> B()
TypeError: Can't instantiate abstract class B with abstract method g

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

  // Q7: Implementing all abstract methods succeeds
  (_i: number) => ({
    q: `What is the output?\nfrom abc import ABC, abstractmethod\n\nclass A(ABC):\n    @abstractmethod\n    def f(self): pass\n    @abstractmethod\n    def g(self): pass\n\nclass B(A):\n    def f(self): return 1\n    def g(self): return 2\n\nprint(B().f())`,
    o: ["1", "2", "TypeError", "None"],
    c: 0,
    e: "B implements both f() and g(), so it can be instantiated. B().f() returns 1.",
    de: `When all abstract methods are implemented, the subclass becomes concrete and can be instantiated normally.

Key concepts:
• A defines two abstract methods: f() and g()
• B implements both f() and g()
• B has no remaining abstract methods, so it's concrete
• B() succeeds and B().f() returns 1

How it works:
• B overrides f() to return 1 and g() to return 2
• B.__abstractmethods__ = frozenset() (empty — all implemented)
• B() creates an instance successfully
• B().f() calls B's f(), which returns 1

Example:
>>> B().f()
1
>>> B().g()
2

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

  // Q8: @abstractmethod can have a body
  (_i: number) => ({
    q: `Can @abstractmethod have a body (implementation)?`,
    o: ["Yes, subclasses can call it via super()", "No, body is always ignored", "Only if it returns None", "Only with @staticmethod"],
    c: 0,
    e: "Abstract methods can have a body; subclasses call it with super().method().",
    de: `An @abstractmethod can have a body — it's not just a placeholder. Subclasses must still override the method, but they can call the parent's implementation via super().

Key concepts:
• @abstractmethod can contain actual implementation code
• Subclasses MUST still override the method (it's still abstract)
• Subclasses can call the parent implementation via super().method()
• This provides a default or partial implementation pattern

How it works:
• Define the abstract method with a body (not just pass)
• Subclass overrides the method (required)
• Subclass can optionally call super().method() to run the parent body
• Useful for providing base behavior that subclasses extend

Example:
>>> class A(ABC):
...     @abstractmethod
...     def f(self):
...         return "base"
>>> class B(A):
...     def f(self):
...         return super().f() + " extended"
>>> B().f()
'base extended'

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

  // Q9: Calling super() on abstract method with body
  (_i: number) => ({
    q: `What is the output?\nfrom abc import ABC, abstractmethod\n\nclass A(ABC):\n    @abstractmethod\n    def f(self):\n        return "base"\n\nclass B(A):\n    def f(self):\n        return super().f() + " extended"\n\nprint(B().f())`,
    o: ["base extended", "TypeError", "base", "extended"],
    c: 0,
    e: "B.f() calls super().f() which returns 'base', then appends ' extended'.",
    de: `The abstract method f() in A has a body that returns "base". B overrides f() and calls super().f() to access the parent's implementation, then appends " extended".

Key concepts:
• A.f() is abstract but has a body returning "base"
• B.f() overrides A.f() (required since it's abstract)
• B.f() calls super().f() to get "base" from the parent
• Concatenation produces "base extended"

How it works:
• B() creates instance (f is implemented)
• B().f() calls B's f()
• super().f() invokes A.f() which returns "base"
• "base" + " extended" = "base extended"

Example:
>>> B().f()
'base extended'

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

  // Q10: Abstract property
  (_i: number) => ({
    q: `What happens when you try to instantiate this class?\nfrom abc import ABC, abstractmethod\n\nclass A(ABC):\n    @property\n    @abstractmethod\n    def x(self):\n        pass\n\nA()`,
    o: ["TypeError", "None", "A object", "AttributeError"],
    c: 0,
    e: "A has an abstract property x, so it can't be instantiated directly.",
    de: `You can combine @property with @abstractmethod to create an abstract property. The class cannot be instantiated until a subclass provides a concrete implementation of the property.

Key concepts:
• @property and @abstractmethod can be stacked
• @property must come BEFORE @abstractmethod (outermost decorator)
• The class with an abstract property cannot be instantiated
• Subclasses must implement the property with @property

How it works:
• A defines x as an abstract property
• A.__abstractmethods__ includes 'x'
• A() raises TypeError because x is not implemented
• A subclass must define x as a @property to be concrete

Example:
>>> class B(A):
...     @property
...     def x(self):
...         return 42
>>> B().x
42

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

  // Q11: Abstract classmethod
  (_i: number) => ({
    q: `Which decorator combination creates an abstract class method?\nfrom abc import ABC, abstractmethod`,
    o: ["@classmethod then @abstractmethod", "@abstractmethod then @classmethod", "@staticmethod then @abstractmethod", "@abstract_classmethod"],
    c: 0,
    e: "Use @classmethod above @abstractmethod to create an abstract class method.",
    de: `To create an abstract class method, stack @classmethod on top of @abstractmethod. The outermost decorator should be @classmethod.

Key concepts:
• @classmethod must be the outermost (top) decorator
• @abstractmethod must be the innermost (bottom) decorator
• This forces subclasses to implement a classmethod
• The subclass implementation should also use @classmethod

How it works:
• @classmethod wraps @abstractmethod
• The method is both abstract (must be overridden) and a classmethod (receives cls)
• Subclasses must override with their own @classmethod
• Instantiation fails until the abstract classmethod is implemented

Example:
>>> class A(ABC):
...     @classmethod
...     @abstractmethod
...     def create(cls): pass
>>> class B(A):
...     @classmethod
...     def create(cls):
...         return cls()
>>> B.create()
<B object>

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

  // Q12: Abstract staticmethod
  (_i: number) => ({
    q: `Which decorator combination creates an abstract static method?\nfrom abc import ABC, abstractmethod`,
    o: ["@staticmethod then @abstractmethod", "@abstractmethod then @staticmethod", "@abstract_static", "@static_abstractmethod"],
    c: 0,
    e: "Use @staticmethod above @abstractmethod to create an abstract static method.",
    de: `To create an abstract static method, stack @staticmethod on top of @abstractmethod. The outermost decorator should be @staticmethod.

Key concepts:
• @staticmethod must be the outermost (top) decorator
• @abstractmethod must be the innermost (bottom) decorator
• This forces subclasses to implement a staticmethod
• The subclass implementation should also use @staticmethod

How it works:
• @staticmethod wraps @abstractmethod
• The method is both abstract and static (no self or cls)
• Subclasses must override with their own @staticmethod
• Instantiation fails until the abstract staticmethod is implemented

Example:
>>> class A(ABC):
...     @staticmethod
...     @abstractmethod
...     def validate(data): pass
>>> class B(A):
...     @staticmethod
...     def validate(data):
...         return len(data) > 0
>>> B.validate([1, 2])
True

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

  // Q13: Abstract class inheriting from another abstract class
  (_i: number) => ({
    q: `Can an abstract class inherit from another abstract class?`,
    o: ["Yes", "No", "Only with ABCMeta", "Only if parent has no abstract methods"],
    c: 0,
    e: "Abstract classes can form inheritance chains; subclasses accumulate abstract methods.",
    de: `Abstract classes can inherit from other abstract classes, creating a chain of abstraction. Each level can add new abstract methods, and only the final concrete class must implement all of them.

Key concepts:
• ABC can inherit from another ABC
• Abstract methods accumulate through the chain
• The child ABC can add its own abstract methods
• Only the final concrete subclass must implement ALL abstract methods

How it works:
• class A(ABC): @abstractmethod def f(): ...
• class B(A): @abstractmethod def g(): ... — B is also abstract
• B inherits f() from A and adds g()
• class C(B): must implement both f() and g()

Example:
>>> class A(ABC):
...     @abstractmethod
...     def f(self): pass
>>> class B(A):
...     @abstractmethod
...     def g(self): pass
>>> class C(B):
...     def f(self): return 1
...     def g(self): return 2
>>> C().f()
1

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

  // Q14: Chained abstract classes require all methods
  (_i: number) => ({
    q: `What is the output?\nfrom abc import ABC, abstractmethod\n\nclass A(ABC):\n    @abstractmethod\n    def f(self): pass\n\nclass B(A):\n    @abstractmethod\n    def g(self): pass\n\nclass C(B):\n    def f(self): return 1\n    def g(self): return 2\n\nprint(C().f())`,
    o: ["1", "2", "TypeError", "None"],
    c: 0,
    e: "C implements both f() (from A) and g() (from B), so C().f() returns 1.",
    de: `In a chain of abstract classes, the final concrete class must implement all accumulated abstract methods from the entire hierarchy.

Key concepts:
• A defines abstract method f()
• B inherits from A and adds abstract method g()
• C must implement both f() and g() to be concrete
• C implements both, so it can be instantiated

How it works:
• C.__abstractmethods__ would be frozenset() (all implemented)
• C() creates an instance successfully
• C().f() calls C's implementation of f(), returning 1

Example:
>>> C().f()
1
>>> C().g()
2

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

  // Q15: ABCMeta equivalent to ABC
  (_i: number) => ({
    q: `What is the relationship?\nfrom abc import ABCMeta\n\nclass Shape(metaclass=ABCMeta):\n    pass`,
    o: ["Equivalent to class Shape(ABC)", "Creates a regular class", "TypeError", "Creates a Protocol"],
    c: 0,
    e: "Using metaclass=ABCMeta is the older equivalent of inheriting from ABC.",
    de: `ABC is a helper class that uses ABCMeta as its metaclass. Writing class Shape(ABC) and class Shape(metaclass=ABCMeta) are functionally equivalent.

Key concepts:
• ABC is defined as: class ABC(metaclass=ABCMeta)
• Using metaclass=ABCMeta is the older, more explicit way
• Inheriting from ABC is the modern, recommended approach
• Both produce the same result: a class that supports @abstractmethod

How it works:
• ABCMeta is the metaclass that enables abstract method checking
• ABC is a convenience class with ABCMeta already set
• class Shape(ABC) is shorthand for class Shape(metaclass=ABCMeta)
• Both allow @abstractmethod declarations and prevent instantiation of incomplete subclasses

Example:
>>> from abc import ABC, ABCMeta
>>> class A(ABC): pass
>>> class B(metaclass=ABCMeta): pass
>>> type(A)
<class 'abc.ABCMeta'>
>>> type(B)
<class 'abc.ABCMeta'>

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

  // Q16: ABC metaclass
  (_i: number) => ({
    q: `What is the metaclass of ABC?`,
    o: ["ABCMeta", "type", "object", "AbstractMeta"],
    c: 0,
    e: "ABC uses ABCMeta as its metaclass.",
    de: `The ABC class is defined with ABCMeta as its metaclass. This is what gives ABC (and its subclasses) the ability to track and enforce abstract methods.

Key concepts:
• ABC is a class with metaclass=ABCMeta
• ABCMeta is the actual metaclass that does the heavy lifting
• ABCMeta tracks __abstractmethods__ on each class
• ABCMeta prevents instantiation when abstract methods exist

How it works:
• ABCMeta.__new__ checks for @abstractmethod decorators
• It collects them into __abstractmethods__ (a frozenset)
• On instantiation, ABCMeta.__call__ checks if __abstractmethods__ is non-empty
• If non-empty, raises TypeError

Example:
>>> from abc import ABC, ABCMeta
>>> type(ABC)
<class 'abc.ABCMeta'>
>>> ABC.__class__
<class 'abc.ABCMeta'>

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

  // Q17: ABC with no abstract methods can be instantiated
  (_i: number) => ({
    q: `What happens?\nfrom abc import ABC\n\nclass A(ABC):\n    pass\n\nA()`,
    o: ["Creates an A instance", "TypeError", "None", "AttributeError"],
    c: 0,
    e: "A inherits from ABC but has no abstract methods, so it can be instantiated.",
    de: `A class that inherits from ABC but defines no @abstractmethod methods is technically concrete and can be instantiated. The ABC base class alone doesn't prevent instantiation — only unimplemented abstract methods do.

Key concepts:
• Inheriting from ABC doesn't automatically make a class abstract
• Only @abstractmethod methods prevent instantiation
• A class with ABC but no abstract methods is concrete
• A.__abstractmethods__ is frozenset() (empty)

How it works:
• class A(ABC): pass — no abstract methods declared
• A.__abstractmethods__ is empty
• A() succeeds because there are no unimplemented abstract methods
• The instance is a regular object of type A

Example:
>>> from abc import ABC
>>> class A(ABC): pass
>>> a = A()
>>> isinstance(a, A)
True

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

  // Q18: __abstractmethods__ attribute
  (_i: number) => ({
    q: `What is the output?\nfrom abc import ABC, abstractmethod\n\nclass A(ABC):\n    @abstractmethod\n    def f(self): pass\n\nprint(A.__abstractmethods__)`,
    o: ["frozenset({'f'})", "{'f'}", "['f']", "('f',)"],
    c: 0,
    e: "__abstractmethods__ is a frozenset of unimplemented abstract method names.",
    de: `The __abstractmethods__ attribute is a frozenset containing the names of all abstract methods that haven't been implemented. Python uses this to decide whether a class can be instantiated.

Key concepts:
• __abstractmethods__ is automatically maintained by ABCMeta
• It's a frozenset (immutable set) of method name strings
• If non-empty, the class cannot be instantiated
• When a subclass implements a method, it's removed from the set

How it works:
• ABCMeta scans for @abstractmethod-decorated methods
• Collects their names into __abstractmethods__
• A has f() as abstract, so A.__abstractmethods__ = frozenset({'f'})
• A concrete subclass implementing f() would have frozenset() (empty)

Example:
>>> A.__abstractmethods__
frozenset({'f'})
>>> class B(A):
...     def f(self): return 1
>>> B.__abstractmethods__
frozenset()

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

  // Q19: register() for virtual subclass
  (_i: number) => ({
    q: `What does ABC.register() do?\nfrom abc import ABC\n\nclass MyABC(ABC):\n    pass\n\nMyABC.register(list)`,
    o: ["Makes list a virtual subclass of MyABC", "Adds MyABC methods to list", "Raises TypeError", "Makes MyABC inherit from list"],
    c: 0,
    e: "register() makes a class a virtual subclass without actual inheritance.",
    de: `The register() method makes a class a "virtual subclass" of the ABC. This means isinstance() and issubclass() will return True, but no actual inheritance of methods or attributes occurs.

Key concepts:
• register() creates a virtual subclass relationship
• No actual method inheritance happens
• isinstance() and issubclass() checks pass
• The registered class doesn't need to implement abstract methods

How it works:
• MyABC.register(list) tells Python that list is a virtual subclass of MyABC
• isinstance([], MyABC) returns True
• issubclass(list, MyABC) returns True
• But list doesn't actually get any MyABC methods

Example:
>>> MyABC.register(list)
>>> isinstance([], MyABC)
True
>>> issubclass(list, MyABC)
True

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

  // Q20: Virtual subclass isinstance check
  (_i: number) => ({
    q: `What is the output?\nfrom abc import ABC\n\nclass MyABC(ABC):\n    pass\n\nMyABC.register(int)\nprint(isinstance(42, MyABC))`,
    o: ["True", "False", "TypeError", "None"],
    c: 0,
    e: "int is registered as a virtual subclass of MyABC, so isinstance returns True.",
    de: `After calling MyABC.register(int), the int type becomes a virtual subclass of MyABC. This makes isinstance(42, MyABC) return True even though int doesn't actually inherit from MyABC.

Key concepts:
• register() creates a virtual subclass relationship
• isinstance() checks include virtual subclasses
• 42 is an int, and int is a virtual subclass of MyABC
• So isinstance(42, MyABC) returns True

How it works:
• MyABC.register(int) registers int as virtual subclass
• isinstance(42, MyABC) checks: is 42 an instance of MyABC?
• Python checks actual inheritance — no
• Python checks virtual subclass registry — yes (int is registered)
• Returns True

Example:
>>> MyABC.register(int)
>>> isinstance(42, MyABC)
True
>>> issubclass(int, MyABC)
True

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

  // Q21: Virtual subclasses don't inherit methods
  (_i: number) => ({
    q: `What do virtual subclasses NOT do?`,
    o: ["They don't inherit methods", "They don't pass isinstance checks", "They don't pass issubclass checks", "They don't allow registration"],
    c: 0,
    e: "Virtual subclasses pass isinstance/issubclass checks but don't actually inherit methods.",
    de: `Virtual subclasses (created via register()) only affect isinstance() and issubclass() checks. They do NOT create actual inheritance — no methods or attributes are inherited.

Key concepts:
• Virtual subclasses pass isinstance() checks — True
• Virtual subclasses pass issubclass() checks — True
• Virtual subclasses do NOT inherit any methods
• Virtual subclasses do NOT inherit any attributes
• There is no actual MRO (method resolution order) connection

How it works:
• register() adds the class to the ABC's virtual subclass registry
• isinstance/issubclass use __subclasshook__ or the registry to check
• But Python's method resolution (MRO) is unchanged
• The virtual subclass cannot call methods from the ABC

Example:
>>> class MyABC(ABC):
...     def greet(self): return "hello"
>>> MyABC.register(int)
>>> isinstance(42, MyABC)
True
>>> (42).greet()
AttributeError: 'int' object has no attribute 'greet'

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

  // Q22: collections.abc.Sized isinstance check
  (_i: number) => ({
    q: `What is the output?\nfrom collections.abc import Sized\n\nprint(isinstance([], Sized))`,
    o: ["True", "False", "TypeError", "None"],
    c: 0,
    e: "list has __len__, so it satisfies the Sized ABC.",
    de: `The Sized ABC from collections.abc requires a __len__ method. Since list implements __len__, isinstance([], Sized) returns True.

Key concepts:
• Sized is an ABC that requires __len__
• list has __len__ (len([]) works)
• isinstance checks if the object's class implements the required methods
• Uses __subclasshook__ for structural checking

How it works:
• Sized defines __subclasshook__ that checks for __len__
• list has __len__, so the check passes
• isinstance([], Sized) returns True
• This is an example of structural checking built into ABCs

Example:
>>> from collections.abc import Sized
>>> isinstance([], Sized)
True
>>> isinstance("hello", Sized)
True
>>> isinstance(42, Sized)
False

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

  // Q23: collections.abc.Iterable isinstance check
  (_i: number) => ({
    q: `What is the output?\nfrom collections.abc import Iterable\n\nprint(isinstance("hello", Iterable))`,
    o: ["True", "False", "TypeError", "None"],
    c: 0,
    e: "Strings have __iter__, so they satisfy the Iterable ABC.",
    de: `The Iterable ABC from collections.abc requires an __iter__ method. Since str implements __iter__, isinstance("hello", Iterable) returns True.

Key concepts:
• Iterable is an ABC that requires __iter__
• str has __iter__ (you can iterate over characters)
• isinstance checks if the object's class has __iter__
• Uses __subclasshook__ for structural checking

How it works:
• Iterable defines __subclasshook__ that checks for __iter__
• str has __iter__, so the check passes
• isinstance("hello", Iterable) returns True
• Any object with __iter__ is considered Iterable

Example:
>>> from collections.abc import Iterable
>>> isinstance("hello", Iterable)
True
>>> isinstance([1, 2], Iterable)
True
>>> isinstance(42, Iterable)
False

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

  // Q24: collections.abc.Hashable with list
  (_i: number) => ({
    q: `What is the output?\nfrom collections.abc import Hashable\n\nprint(isinstance([], Hashable))`,
    o: ["False", "True", "TypeError", "None"],
    c: 0,
    e: "Lists are not hashable (mutable), so isinstance([], Hashable) is False.",
    de: `The Hashable ABC requires a __hash__ method. Lists explicitly set __hash__ = None (because they are mutable), so isinstance([], Hashable) returns False.

Key concepts:
• Hashable requires __hash__ to be implemented (and not None)
• Mutable types like list set __hash__ = None
• This prevents them from being used as dictionary keys or set elements
• isinstance checks both the presence AND non-None-ness of __hash__

How it works:
• Hashable.__subclasshook__ checks if __hash__ is not None
• list.__hash__ is None (explicitly disabled)
• isinstance([], Hashable) returns False
• Immutable types like tuple, str, int are Hashable

Example:
>>> from collections.abc import Hashable
>>> isinstance([], Hashable)
False
>>> isinstance({}, Hashable)
False
>>> isinstance((), Hashable)
True

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

  // Q25: collections.abc.Hashable with tuple
  (_i: number) => ({
    q: `What is the output?\nfrom collections.abc import Hashable\n\nprint(isinstance((1, 2), Hashable))`,
    o: ["True", "False", "TypeError", "None"],
    c: 0,
    e: "Tuples are immutable and hashable, so isinstance returns True.",
    de: `The Hashable ABC requires a __hash__ method. Tuples are immutable and have __hash__ implemented, so isinstance((1, 2), Hashable) returns True.

Key concepts:
• Tuples are immutable, so they can be hashed
• tuple.__hash__ is implemented (not None)
• isinstance((1, 2), Hashable) returns True
• This is why tuples can be dictionary keys but lists cannot

How it works:
• Hashable.__subclasshook__ checks for __hash__
• tuple.__hash__ exists and is not None
• isinstance((1, 2), Hashable) returns True
• Note: a tuple containing unhashable items (like lists) will raise TypeError at hash time, but the isinstance check still passes

Example:
>>> from collections.abc import Hashable
>>> isinstance((1, 2), Hashable)
True
>>> isinstance("hello", Hashable)
True
>>> hash((1, 2))
-3550055125485641917

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

  // ===== PROTOCOL AND STRUCTURAL SUBTYPING (26–50) =====

  // Q26: What is Protocol?
  (_i: number) => ({
    q: `What is typing.Protocol used for?`,
    o: ["Defines structural interfaces (duck typing with type checking)", "Defines nominal interfaces", "Creates abstract classes", "Defines metaclasses"],
    c: 0,
    e: "Protocol defines structural interfaces — matching by method signatures, not inheritance.",
    de: `typing.Protocol defines structural interfaces for Python's type system. A class satisfies a Protocol if it has the required methods/attributes, regardless of whether it explicitly inherits from the Protocol.

Key concepts:
• Protocol enables structural subtyping (duck typing for type checkers)
• No explicit inheritance needed — just matching method signatures
• Introduced in Python 3.8 (PEP 544)
• Used primarily for static type checking with mypy, pyright, etc.

How it works:
• Define a Protocol class with required method signatures
• Any class with matching methods is considered a subtype
• Type checkers verify structural conformance
• No runtime inheritance relationship required

Example:
>>> from typing import Protocol
>>> class Drawable(Protocol):
...     def draw(self) -> str: ...
>>> class Circle:
...     def draw(self) -> str:
...         return "circle"
>>> def render(shape: Drawable):
...     return shape.draw()
>>> render(Circle())
'circle'

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

  // Q27: Protocol uses structural subtyping
  (_i: number) => ({
    q: `What kind of subtyping does Protocol use?`,
    o: ["Structural subtyping", "Nominal subtyping", "Dynamic subtyping", "Metaclass subtyping"],
    c: 0,
    e: "Protocol uses structural subtyping — based on what methods exist, not inheritance.",
    de: `Protocol uses structural subtyping, which means compatibility is determined by the structure of a class (its methods and attributes) rather than its inheritance hierarchy.

Key concepts:
• Structural subtyping: "if it has the right methods, it matches"
• Based on duck typing philosophy
• No inheritance required
• Checked by static type checkers (mypy, pyright)

How it works:
• A Protocol defines required methods/attributes
• Any class with those methods/attributes is structurally compatible
• The type checker verifies the match without requiring inheritance
• This is the opposite of nominal subtyping (used by ABC)

Example:
• Protocol Drawable requires draw() -> str
• class Sprite has draw() -> str
• Sprite is structurally compatible with Drawable
• No need for class Sprite(Drawable)

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

  // Q28: ABC uses nominal subtyping
  (_i: number) => ({
    q: `What kind of subtyping does ABC use?`,
    o: ["Nominal subtyping", "Structural subtyping", "Dynamic subtyping", "Protocol subtyping"],
    c: 0,
    e: "ABC uses nominal subtyping — based on the inheritance hierarchy.",
    de: `ABC uses nominal subtyping, which means compatibility is determined by the explicit inheritance hierarchy, not by the methods a class happens to have.

Key concepts:
• Nominal subtyping: "you must explicitly inherit to be a subtype"
• Based on class declarations, not structure
• class Child(Parent) explicitly declares the relationship
• Used by ABC (Abstract Base Class)

How it works:
• ABC defines abstract methods that must be overridden
• A class must explicitly inherit from the ABC to be considered a subtype
• Even if a class has all the right methods, it's not a subtype without inheriting
• isinstance/issubclass checks require actual or registered inheritance

Comparison:
• ABC (nominal): class Circle(Shape) required
• Protocol (structural): just having the right methods is enough
• ABC enforces "is-a" relationships explicitly
• Protocol checks "has-a" structure implicitly

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

  // Q29: Protocol structural matching
  (_i: number) => ({
    q: `Is this class considered a Drawable?\nfrom typing import Protocol\n\nclass Drawable(Protocol):\n    def draw(self) -> str: ...\n\nclass Sprite:\n    def draw(self) -> str:\n        return "sprite"`,
    o: ["Yes, structurally (has draw method)", "No, doesn't inherit Drawable", "TypeError", "Only at runtime"],
    c: 0,
    e: "Sprite has a draw() method matching Drawable's signature, so it's structurally compatible.",
    de: `Sprite is considered a Drawable by static type checkers because it has a draw() method with a matching signature. This is structural subtyping — no inheritance required.

Key concepts:
• Drawable Protocol requires a draw() -> str method
• Sprite has draw() -> str (matches the signature)
• Type checkers see Sprite as compatible with Drawable
• No explicit inheritance (class Sprite(Drawable)) needed

How it works:
• Static type checker compares Sprite's methods to Drawable's requirements
• Sprite has draw(self) -> str, matching Drawable's requirement
• Type checker accepts Sprite wherever Drawable is expected
• This is the essence of structural subtyping

Example:
>>> def render(shape: Drawable) -> str:
...     return shape.draw()
>>> render(Sprite())  # Type checker accepts this
'sprite'

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

  // Q30: Sprite with draw method matches Protocol
  (_i: number) => ({
    q: `What is the output?\nclass Sprite:\n    def draw(self):\n        return "sprite"\n\nprint(Sprite().draw())`,
    o: ["sprite", "TypeError", "None", "Error"],
    c: 0,
    e: "Sprite().draw() calls the draw method, returning 'sprite'.",
    de: `This demonstrates that Sprite works on its own with its draw() method. When combined with a Protocol, any function expecting a Drawable can accept Sprite without inheritance.

Key concepts:
• Sprite has a draw() method that returns "sprite"
• No ABC or Protocol inheritance needed for the method to work
• This is standard Python duck typing
• Protocol formalizes this for static type checkers

How it works:
• Sprite() creates an instance
• .draw() calls the draw method
• Returns "sprite"
• If a Protocol Drawable exists with draw(), Sprite matches it structurally

Example:
>>> Sprite().draw()
'sprite'

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

  // Q31: Protocol doesn't require explicit inheritance
  (_i: number) => ({
    q: `What does Protocol NOT require for structural compatibility?`,
    o: ["Explicit inheritance", "Matching method names", "Matching return types", "Method implementations"],
    c: 0,
    e: "Protocol checks structure (methods/attributes), not inheritance hierarchy.",
    de: `Protocol does NOT require a class to explicitly inherit from it. Unlike ABC where you write class Child(MyABC), with Protocol a class just needs to have the right methods and attributes.

Key concepts:
• No need for class MyClass(MyProtocol)
• Just having matching methods is sufficient
• This is what makes it "structural" subtyping
• Contrasts with ABC's "nominal" subtyping

How it works:
• Protocol defines required interface (methods/attributes)
• Any class with matching methods is compatible
• No inheritance declaration needed
• Type checker verifies the match purely by structure

Example:
• Protocol requires draw() -> str
• class Sprite: def draw(self) -> str: ... — compatible!
• class Sprite(Drawable): — NOT required
• Both approaches make Sprite usable where Drawable is expected

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

  // Q32: @runtime_checkable Protocol with isinstance
  (_i: number) => ({
    q: `What is the output?\nfrom typing import runtime_checkable, Protocol\n\n@runtime_checkable\nclass HasLen(Protocol):\n    def __len__(self) -> int: ...\n\nprint(isinstance([1, 2], HasLen))`,
    o: ["True", "False", "TypeError", "None"],
    c: 0,
    e: "@runtime_checkable allows isinstance() checks; list has __len__, so True.",
    de: `The @runtime_checkable decorator allows Protocol classes to be used with isinstance() at runtime. Since list has __len__, isinstance([1, 2], HasLen) returns True.

Key concepts:
• @runtime_checkable enables isinstance() checks with Protocol
• Without it, isinstance() with Protocol raises TypeError
• The check verifies method existence (not signatures)
• [1, 2] is a list, and list has __len__

How it works:
• @runtime_checkable adds __instancecheck__ to HasLen
• isinstance([1, 2], HasLen) checks if list has __len__
• list.__len__ exists, so the check passes
• Returns True

Example:
>>> isinstance([1, 2], HasLen)
True
>>> isinstance("hello", HasLen)
True
>>> isinstance(42, HasLen)
False

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

  // Q33: @runtime_checkable enables isinstance
  (_i: number) => ({
    q: `What does @runtime_checkable allow you to do with Protocol?`,
    o: ["Use isinstance() checks at runtime", "Use Protocol without typing", "Make Protocol abstract", "Enable dynamic dispatch"],
    c: 0,
    e: "@runtime_checkable allows isinstance() checks at runtime with Protocol.",
    de: `By default, Protocol classes cannot be used with isinstance() at runtime. Adding @runtime_checkable enables this capability.

Key concepts:
• Default Protocol: only for static type checking (mypy, pyright)
• @runtime_checkable: enables isinstance() at runtime
• isinstance() checks only method/attribute existence, not signatures
• Useful for runtime duck-type checking

How it works:
• @runtime_checkable modifies the Protocol's metaclass behavior
• Adds __instancecheck__ that checks for required attributes
• isinstance(obj, MyProtocol) now works at runtime
• Only checks if methods exist, not their exact signatures

Example:
>>> @runtime_checkable
... class Sizeable(Protocol):
...     def __len__(self) -> int: ...
>>> isinstance([], Sizeable)
True
>>> isinstance(42, Sizeable)
False

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

  // Q34: Without @runtime_checkable, isinstance raises TypeError
  (_i: number) => ({
    q: `What happens with isinstance() on a Protocol without @runtime_checkable?\nfrom typing import Protocol\n\nclass MyProto(Protocol):\n    def f(self): ...\n\nisinstance("hello", MyProto)`,
    o: ["TypeError", "True", "False", "None"],
    c: 0,
    e: "Without @runtime_checkable, isinstance() with Protocol raises TypeError.",
    de: `Protocol classes without @runtime_checkable cannot be used with isinstance() at runtime. Attempting to do so raises TypeError.

Key concepts:
• Protocol without @runtime_checkable is for static type checking only
• isinstance() is a runtime check, which Protocol doesn't support by default
• @runtime_checkable must be explicitly added to enable isinstance()
• This is a deliberate design choice to separate static and runtime checking

How it works:
• MyProto is a Protocol without @runtime_checkable
• isinstance("hello", MyProto) tries a runtime check
• Protocol's __instancecheck__ raises TypeError
• Error: "Protocols with non-method members don't support issubclass()"

Example:
>>> isinstance("hello", MyProto)
TypeError: Protocols with non-method members don't support issubclass()

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

  // Q35: Protocol with __lt__ for Comparable
  (_i: number) => ({
    q: `What does this Protocol define?\nfrom typing import Protocol\n\nclass Comparable(Protocol):\n    def __lt__(self, other) -> bool: ...`,
    o: ["Any class with __lt__ is Comparable", "Only int is Comparable", "All classes are Comparable", "TypeError"],
    c: 0,
    e: "The Comparable Protocol matches any class that implements __lt__.",
    de: `This Protocol defines a Comparable interface: any class that has a __lt__ method (less-than comparison) is structurally compatible with Comparable.

Key concepts:
• Protocol defines structural requirements
• Comparable requires __lt__(self, other) -> bool
• int, float, str all have __lt__ — they're all Comparable
• Custom classes with __lt__ are also Comparable

How it works:
• Type checker looks for __lt__ method on a class
• If present with compatible signature, the class matches Comparable
• No inheritance from Comparable needed
• Works with built-in types and custom classes alike

Example:
>>> class Temperature:
...     def __init__(self, value):
...         self.value = value
...     def __lt__(self, other):
...         return self.value < other.value
>>> def minimum(a: Comparable, b: Comparable):
...     return a if a < b else b
>>> minimum(Temperature(20), Temperature(30)).value
20

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

  // Q36: Duck typing definition
  (_i: number) => ({
    q: `What does "duck typing" mean?`,
    o: ["If it walks like a duck and quacks like a duck, it's a duck", "All objects must inherit from Duck", "Only ducks can be typed", "Types must be declared explicitly"],
    c: 0,
    e: "Duck typing: an object's suitability is determined by its methods, not its type.",
    de: `Duck typing is a programming concept where an object's suitability is determined by the presence of certain methods and properties, rather than the object's actual type or inheritance.

Key concepts:
• "If it walks like a duck and quacks like a duck, it's a duck"
• Focus on behavior (methods), not identity (class hierarchy)
• Core philosophy of Python's dynamic type system
• Protocol formalizes duck typing for static type checkers

How it works:
• Python doesn't check an object's type before calling methods
• If the method exists, it works; if not, you get AttributeError
• This allows different types to be used interchangeably
• As long as they have the right methods, they "quack like a duck"

Example:
>>> class Duck:
...     def quack(self): return "Quack!"
>>> class Person:
...     def quack(self): return "I'm quacking!"
>>> def make_quack(thing):
...     return thing.quack()
>>> make_quack(Duck())
'Quack!'
>>> make_quack(Person())
"I'm quacking!"

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

  // Q37: Protocol formalizes duck typing
  (_i: number) => ({
    q: `Protocol is Python's formalization of what concept?`,
    o: ["Duck typing for static type checkers", "Inheritance hierarchies", "Metaclass patterns", "Decorator protocols"],
    c: 0,
    e: "Protocol formalizes duck typing so static type checkers can verify it.",
    de: `Protocol is Python's way of formalizing duck typing for static type checkers. It bridges the gap between Python's dynamic duck typing and static type analysis.

Key concepts:
• Duck typing: behavior-based, no type declarations needed
• Protocol: declares expected behavior for type checkers
• Brings duck typing benefits to static analysis
• Introduced in PEP 544 (Python 3.8)

How it works:
• Without Protocol: duck typing works at runtime but type checkers can't verify it
• With Protocol: you declare the expected interface
• Type checkers verify that passed objects match the Protocol
• Runtime behavior is unchanged — still duck typing

Example:
• Before Protocol: def process(obj): obj.run() — type checker can't verify
• With Protocol:
>>> class Runnable(Protocol):
...     def run(self) -> None: ...
>>> def process(obj: Runnable) -> None:
...     obj.run()
• Now type checkers verify that arguments to process() have run()

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

  // Q38: Protocol for Closable interface
  (_i: number) => ({
    q: `What matches this Protocol?\nfrom typing import Protocol\n\nclass Closable(Protocol):\n    def close(self) -> None: ...`,
    o: ["Files, connections, sockets — anything with close()", "Only file objects", "Only io.IOBase subclasses", "Nothing matches without inheritance"],
    c: 0,
    e: "Any object with a close() method structurally matches Closable.",
    de: `The Closable Protocol matches any object that has a close() method with a compatible signature. This includes files, database connections, network sockets, and any custom class with close().

Key concepts:
• Closable requires close(self) -> None
• Files have close() — they match
• Database connections have close() — they match
• Network sockets have close() — they match
• Any custom class with close() also matches

How it works:
• Protocol defines the structural interface
• Type checker matches any class with close() -> None
• No inheritance from Closable needed
• Very useful for resource management patterns

Example:
>>> class MyResource:
...     def close(self) -> None:
...         print("Closed!")
>>> def cleanup(resource: Closable) -> None:
...     resource.close()
>>> cleanup(MyResource())
Closed!
>>> cleanup(open("test.txt"))  # Also works — files have close()

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

  // Q39: Protocol with default implementations
  (_i: number) => ({
    q: `Can Protocol have default method implementations?`,
    o: ["Yes, but classes must explicitly inherit to use them", "No, never", "Yes, all classes get them automatically", "Only with @runtime_checkable"],
    c: 0,
    e: "Protocol can have defaults, but only explicit subclasses inherit them.",
    de: `Protocol can have default implementations in its methods, but only classes that explicitly inherit from the Protocol will receive those defaults. Structurally matched classes won't get them.

Key concepts:
• Protocol methods can have bodies (default implementations)
• Only classes that explicitly inherit get the defaults
• Structurally matched classes (no inheritance) don't get defaults
• This is a key difference from ABC default methods

How it works:
• class MyProto(Protocol): def f(self): return "default"
• class A(MyProto): pass — inherits, gets default f()
• class B: def f(self): return "custom" — structural match, own implementation
• class C: pass — no f(), doesn't match Protocol at all

Example:
>>> class Greetable(Protocol):
...     def greet(self) -> str:
...         return "Hello!"
>>> class Polite(Greetable):
...     pass
>>> Polite().greet()
'Hello!'

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

  // Q40: Protocol vs ABC comparison
  (_i: number) => ({
    q: `Protocol checks ___; ABC checks ___.`,
    o: ["structure; inheritance", "inheritance; structure", "types; values", "runtime; compile-time"],
    c: 0,
    e: "Protocol checks structure (method existence); ABC checks inheritance hierarchy.",
    de: `This is the fundamental difference between Protocol and ABC:
• Protocol: structural subtyping — "does it have the right methods?"
• ABC: nominal subtyping — "does it inherit from the right class?"

Key concepts:
• Protocol = structural checks (duck typing formalized)
• ABC = nominal checks (inheritance-based)
• Protocol: no inheritance needed, just matching methods
• ABC: explicit inheritance required (class Child(MyABC))

How it works:
• Protocol: type checker scans class for required methods/attributes
• ABC: Python checks MRO (method resolution order) for parent class
• Protocol: a class with matching methods IS a subtype
• ABC: a class MUST inherit to be a subtype (or use register())

Comparison table:
• Protocol — based on structure — no inheritance needed — duck typing
• ABC — based on inheritance — explicit subclass needed — nominal typing
• Protocol — Python 3.8+ — typing module
• ABC — Python 2.6+ — abc module

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

  // Q41: Iterator required methods
  (_i: number) => ({
    q: `What methods must an Iterator have?\nfrom collections.abc import Iterator`,
    o: ["__iter__ and __next__", "Only __next__", "Only __iter__", "__getitem__ and __len__"],
    c: 0,
    e: "Iterator requires both __iter__ (returns self) and __next__ (returns next item).",
    de: `The Iterator ABC from collections.abc requires two methods: __iter__ and __next__. Together, they define the iterator protocol.

Key concepts:
• __iter__: returns the iterator itself (usually return self)
• __next__: returns the next value or raises StopIteration
• Every Iterator is also an Iterable (has __iter__)
• Iterable only needs __iter__; Iterator needs both

How it works:
• __iter__ is called when you use for...in or iter()
• For iterators, __iter__ typically returns self
• __next__ is called each iteration to get the next value
• When exhausted, __next__ raises StopIteration

Example:
>>> class Counter:
...     def __init__(self, n):
...         self.n = n
...         self.i = 0
...     def __iter__(self):
...         return self
...     def __next__(self):
...         if self.i >= self.n:
...             raise StopIteration
...         self.i += 1
...         return self.i
>>> list(Counter(3))
[1, 2, 3]

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

  // Q42: Sequence ABC provides
  (_i: number) => ({
    q: `What does collections.abc.Sequence provide when you implement __getitem__ and __len__?`,
    o: ["Mixin methods: __contains__, __iter__, __reversed__, index, count", "Only __getitem__ and __len__", "Nothing extra", "append and pop"],
    c: 0,
    e: "Sequence provides mixin methods like __contains__, __iter__, __reversed__, index, count.",
    de: `The Sequence ABC requires you to implement __getitem__ and __len__, and in return provides several mixin methods for free.

Key concepts:
• Required: __getitem__(self, index) and __len__(self)
• Free mixins: __contains__, __iter__, __reversed__, index, count
• These mixins are implemented using __getitem__ and __len__
• Saves you from implementing common sequence operations

How it works:
• You implement __getitem__ and __len__ in your subclass
• Sequence uses these to provide __contains__ (in operator)
• __iter__ iterates using __getitem__ with indices 0, 1, 2, ...
• __reversed__ iterates in reverse using __getitem__
• index() finds first occurrence, count() counts occurrences

Example:
>>> from collections.abc import Sequence
>>> class MySeq(Sequence):
...     def __init__(self, data):
...         self._data = list(data)
...     def __getitem__(self, idx):
...         return self._data[idx]
...     def __len__(self):
...         return len(self._data)
>>> s = MySeq([1, 2, 3, 2])
>>> 2 in s
True
>>> s.count(2)
2

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

  // Q43: MutableSequence adds over Sequence
  (_i: number) => ({
    q: `What does MutableSequence add over Sequence?`,
    o: ["__setitem__, __delitem__, insert; plus append, clear, reverse, extend, pop", "Only __setitem__", "Only append and pop", "Nothing extra"],
    c: 0,
    e: "MutableSequence adds mutating operations and provides mixin methods for them.",
    de: `MutableSequence extends Sequence by requiring three additional methods and providing several mixin methods for mutation operations.

Key concepts:
• Inherits from Sequence (needs __getitem__, __len__)
• Additional required: __setitem__, __delitem__, insert
• Free mixins: append, clear, reverse, extend, pop, __iadd__, remove
• These mixins use the required methods to implement common mutations

How it works:
• __setitem__: enables s[i] = value
• __delitem__: enables del s[i]
• insert: enables s.insert(i, value)
• append is implemented using insert(len(self), value)
• extend uses append repeatedly
• pop uses __getitem__ + __delitem__
• reverse uses __getitem__ + __setitem__

Example:
>>> from collections.abc import MutableSequence
>>> class MyList(MutableSequence):
...     def __init__(self): self._data = []
...     def __getitem__(self, i): return self._data[i]
...     def __setitem__(self, i, v): self._data[i] = v
...     def __delitem__(self, i): del self._data[i]
...     def __len__(self): return len(self._data)
...     def insert(self, i, v): self._data.insert(i, v)
>>> m = MyList()
>>> m.append(1)  # Free mixin!
>>> m.extend([2, 3])  # Free mixin!

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

  // Q44: Mapping isinstance check with dict
  (_i: number) => ({
    q: `What is the output?\nfrom collections.abc import Mapping\n\nprint(isinstance({"a": 1}, Mapping))`,
    o: ["True", "False", "TypeError", "None"],
    c: 0,
    e: "dict implements the Mapping interface (__getitem__, __len__, __iter__).",
    de: `The Mapping ABC represents read-only dictionary-like objects. dict implements all required methods, so isinstance({"a": 1}, Mapping) returns True.

Key concepts:
• Mapping requires __getitem__, __len__, __iter__
• dict has all three methods
• Mapping also provides mixins: __contains__, keys, items, values, get, __eq__, __ne__
• dict is registered as a virtual subclass of Mapping

How it works:
• isinstance checks if dict satisfies the Mapping interface
• dict has __getitem__ (d[key]), __len__ (len(d)), __iter__ (iterate keys)
• The check passes, returning True
• All standard dict operations conform to the Mapping ABC

Example:
>>> from collections.abc import Mapping
>>> isinstance({"a": 1}, Mapping)
True
>>> isinstance([], Mapping)
False

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

  // Q45: MutableMapping isinstance check with dict
  (_i: number) => ({
    q: `What is the output?\nfrom collections.abc import MutableMapping\n\nprint(isinstance({"a": 1}, MutableMapping))`,
    o: ["True", "False", "TypeError", "None"],
    c: 0,
    e: "dict is mutable and implements __setitem__ and __delitem__, so it's a MutableMapping.",
    de: `MutableMapping extends Mapping by requiring __setitem__ and __delitem__. dict implements these, so isinstance({"a": 1}, MutableMapping) returns True.

Key concepts:
• MutableMapping inherits from Mapping
• Additional required: __setitem__ and __delitem__
• dict supports d[key] = value and del d[key]
• MutableMapping also provides mixins: pop, popitem, clear, update, setdefault

How it works:
• isinstance checks if dict satisfies MutableMapping
• dict has __getitem__, __len__, __iter__ (from Mapping)
• dict also has __setitem__ and __delitem__ (for mutation)
• The check passes, returning True

Example:
>>> from collections.abc import MutableMapping
>>> isinstance({"a": 1}, MutableMapping)
True
>>> isinstance(type("", (), {"__getitem__": None})(), MutableMapping)
False

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

  // Q46: Set isinstance check with frozenset
  (_i: number) => ({
    q: `What is the output?\nfrom collections.abc import Set\n\nprint(isinstance(frozenset(), Set))`,
    o: ["True", "False", "TypeError", "None"],
    c: 0,
    e: "frozenset implements the Set interface (__contains__, __iter__, __len__).",
    de: `The Set ABC represents immutable set-like objects. frozenset implements all required methods (__contains__, __iter__, __len__), so isinstance(frozenset(), Set) returns True.

Key concepts:
• Set requires __contains__, __iter__, __len__
• frozenset has all three methods
• Set is the immutable set ABC (read-only operations)
• Both set and frozenset satisfy Set

How it works:
• isinstance checks if frozenset satisfies Set
• frozenset has __contains__ (in operator), __iter__ (iteration), __len__ (length)
• The check passes, returning True
• Set also provides mixins: __le__, __lt__, __eq__, __ne__, __gt__, __ge__, __and__, __or__, __xor__, __sub__, isdisjoint

Example:
>>> from collections.abc import Set
>>> isinstance(frozenset(), Set)
True
>>> isinstance(set(), Set)
True

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

  // Q47: MutableSet isinstance check with frozenset
  (_i: number) => ({
    q: `What is the output?\nfrom collections.abc import MutableSet\n\nprint(isinstance(frozenset(), MutableSet))`,
    o: ["False", "True", "TypeError", "None"],
    c: 0,
    e: "frozenset is immutable — it lacks add() and discard(), so it's not a MutableSet.",
    de: `MutableSet extends Set by requiring add() and discard() methods. frozenset is immutable and doesn't have these methods, so isinstance(frozenset(), MutableSet) returns False.

Key concepts:
• MutableSet inherits from Set
• Additional required: add() and discard()
• frozenset is immutable — no add() or discard()
• Regular set IS a MutableSet (it has add and discard)

How it works:
• isinstance checks if frozenset satisfies MutableSet
• frozenset has __contains__, __iter__, __len__ (from Set)
• But frozenset does NOT have add() or discard()
• The check fails, returning False

Example:
>>> from collections.abc import MutableSet
>>> isinstance(frozenset(), MutableSet)
False
>>> isinstance(set(), MutableSet)
True

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

  // Q48: Callable isinstance check with lambda
  (_i: number) => ({
    q: `What is the output?\nfrom collections.abc import Callable\n\nprint(isinstance(lambda: None, Callable))`,
    o: ["True", "False", "TypeError", "None"],
    c: 0,
    e: "Lambda functions are callable, so isinstance returns True.",
    de: `The Callable ABC matches any object that can be called (has __call__). Lambda functions are callable, so isinstance(lambda: None, Callable) returns True.

Key concepts:
• Callable checks for __call__ method
• Lambda functions have __call__
• Regular functions have __call__
• Classes with __call__ are also Callable

How it works:
• isinstance checks if the lambda has __call__
• All functions (including lambdas) have __call__
• The check passes, returning True
• Callable matches functions, methods, classes, and objects with __call__

Example:
>>> from collections.abc import Callable
>>> isinstance(lambda: None, Callable)
True
>>> isinstance(print, Callable)
True
>>> isinstance(42, Callable)
False
>>> class Adder:
...     def __call__(self, x): return x + 1
>>> isinstance(Adder(), Callable)
True

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

  // Q49: Implementing multiple Protocols
  (_i: number) => ({
    q: `Can a class implement multiple Protocols at the same time?`,
    o: ["Yes, just implement all required methods", "No, only one Protocol at a time", "Only with multiple inheritance", "Only with @runtime_checkable"],
    c: 0,
    e: "A class can satisfy multiple Protocols by implementing all their required methods.",
    de: `A class can satisfy multiple Protocols simultaneously — it just needs to implement all the methods required by each Protocol. No special syntax or inheritance needed.

Key concepts:
• Each Protocol defines its own set of required methods
• A class that has ALL methods from multiple Protocols satisfies all of them
• No need to inherit from any Protocol
• This is the power of structural subtyping

How it works:
• Protocol A requires method f()
• Protocol B requires method g()
• A class with both f() and g() satisfies both A and B
• Type checker accepts the class wherever A or B is expected

Example:
>>> class Drawable(Protocol):
...     def draw(self) -> str: ...
>>> class Resizable(Protocol):
...     def resize(self, factor: float) -> None: ...
>>> class Widget:
...     def draw(self) -> str: return "widget"
...     def resize(self, factor: float) -> None: pass
>>> # Widget satisfies BOTH Drawable and Resizable!

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

  // Q50: Every object satisfies Printable Protocol
  (_i: number) => ({
    q: `How many Python objects satisfy this Protocol?\nfrom typing import Protocol\n\nclass Printable(Protocol):\n    def __str__(self) -> str: ...`,
    o: ["All objects (object has __str__)", "Only str objects", "Only objects with custom __str__", "None without inheritance"],
    c: 0,
    e: "Every Python object has __str__ (inherited from object), so all objects match.",
    de: `Every Python object satisfies the Printable Protocol because all objects inherit __str__ from the base object class. This means every single object in Python can be converted to a string.

Key concepts:
• object (the base class of all classes) defines __str__
• Every class in Python inherits from object
• Therefore every object has __str__
• The Printable Protocol is universally satisfied

How it works:
• Printable requires __str__(self) -> str
• object.__str__ exists and returns a string representation
• Every class inherits __str__ from object (unless overridden)
• So every instance of every class matches the Printable Protocol

Example:
>>> str(42)
'42'
>>> str([1, 2, 3])
'[1, 2, 3]'
>>> str(None)
'None'
>>> class Empty: pass
>>> str(Empty())
'<__main__.Empty object at 0x...>'

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
