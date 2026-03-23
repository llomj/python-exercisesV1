import { PersonaStage } from '../../types';

// --- LEVEL 8: SHARK (Classes, Objects, Methods) - 100 TRULY UNIQUE QUESTIONS ---
// Each question tests a DIFFERENT concept - NO number/variable variations of the same question
export const level8Patterns = [
  // 1-10: Class Definition and Basics
  (_i: number) => ({ 
    q: `What is class MyClass: pass?`, 
    o: ["Defines a class", "Creates an object", "Error", "Defines a function"], 
    c: 0, 
    e: "class defines a class.",
    de: `The class keyword defines a new class. If class MyClass: pass, then this defines a class named MyClass. The class statement creates a class object, which is a blueprint for creating instances (objects). The pass statement is a placeholder that does nothing - it's used when a class body is empty. Classes are fundamental to object-oriented programming in Python, allowing you to define custom types with attributes and methods.

Class definition:
• class MyClass: pass defines a class named MyClass
• class keyword creates class object
• MyClass is the class name
• pass is placeholder (empty body)
• Class is blueprint for creating instances

How it works:
• class MyClass: pass executes class statement
• Python creates class object named MyClass
• Class object stored in namespace
• Can be used to create instances: obj = MyClass()
• Returns: class definition (no return value, creates class)

Example:
class MyClass: pass          # Defines empty class
class Person: pass            # Defines another class
class Animal: pass           # Defines another class

Common uses:
• Class definition: class MyClass: pass (empty class)
• Blueprint: class defines structure for objects
• Object-oriented programming
• Custom types

Example: class MyClass: pass defines a class named MyClass because the class keyword creates a class object, which serves as a blueprint for creating instances (objects) of that class.

Key Concepts:
• Class definition: • class MyClass: pass defines a class named MyClass • class keyword creates class object • MyClass is the class name • pass is placeholder (empty body) • Class is blueprint for creating instances How it works: • class MyClass: pass executes class statement • Python creates class object named MyClass • Class object stored in namespace • Can be used to create instances: obj = MyClass() • Returns: class definition (no return value, creates class) Example: class MyClass: pass # Defines empty class class Person: pass # Defines another class class Animal: pass # Defines another class Common uses: • Class definition: class MyClass: pass (empty class) • Blueprint: class defines structure for objects • Object-oriented programming • Custom types Example: class MyClass: pass defines a class named MyClass because the class keyword creates a class object, which serves as a blueprint for creating instances (objects) of that class.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: x = 1?`, 
    o: ["Defines class with class attribute", "Creates object", "Error", "Defines function"], 
    c: 0, 
    e: "Attributes defined in class body are class attributes.",
    de: `Attributes defined in the class body (outside methods) are class attributes. If class MyClass: x = 1, then this defines a class MyClass with a class attribute x = 1. Class attributes are shared by all instances of the class - they belong to the class itself, not to individual instances. All instances can access class attributes, and modifying a class attribute affects all instances (unless an instance has its own attribute that shadows it).

Class attribute:
• class MyClass: x = 1 defines class with class attribute x = 1
• x = 1 is class attribute (defined in class body)
• Shared by all instances of MyClass
• Accessible via class: MyClass.x
• Accessible via instance: obj.x (if not shadowed)

How it works:
• class MyClass: x = 1 executes class statement
• x = 1 creates class attribute
• Attribute stored in class __dict__
• All instances share this attribute
• Returns: class definition (no return value, creates class)

Example:
class MyClass: x = 1         # Class attribute x = 1
MyClass.x                    # 1 (accessed via class)
obj = MyClass()
obj.x                        # 1 (accessed via instance)

Common uses:
• Class attributes: class MyClass: shared_value = 1
• Shared data: class Counter: count = 0 (shared counter)
• Class-level constants
• Shared state

Example: class MyClass: x = 1 defines a class with a class attribute x = 1 because attributes defined in the class body are class attributes, shared by all instances of the class.

Key Concepts:
• Class attribute: • class MyClass: x = 1 defines class with class attribute x = 1 • x = 1 is class attribute (defined in class body) • Shared by all instances of MyClass • Accessible via class: MyClass.x • Accessible via instance: obj.x (if not shadowed) How it works: • class MyClass: x = 1 executes class statement • x = 1 creates class attribute • Attribute stored in class __dict__ • All instances share this attribute • Returns: class definition (no return value, creates class) Example: class MyClass: x = 1 # Class attribute x = 1 MyClass.x # 1 (accessed via class) obj = MyClass() obj.x # 1 (accessed via instance) Common uses: • Class attributes: class MyClass: shared_value = 1 • Shared data: class Counter: count = 0 (shared counter) • Class-level constants • Shared state Example: class MyClass: x = 1 defines a class with a class attribute x = 1 because attributes defined in the class body are class attributes, shared by all instances of the class.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is MyClass = class MyClass: pass?`, 
    o: ["SyntaxError", "Valid class definition", "Error", "None"], 
    c: 0, 
    e: "class statement doesn't use assignment operator.",
    de: `The class statement doesn't use the assignment operator. If MyClass = class MyClass: pass, then this raises a SyntaxError because the class statement has its own syntax - you don't use = to assign the class name. The correct syntax is class MyClass: pass, which automatically creates a variable MyClass in the current namespace. The class keyword itself handles the assignment - you don't need (and can't use) an explicit assignment operator.

Class statement syntax:
• MyClass = class MyClass: pass raises SyntaxError
• class statement doesn't use assignment operator
• Correct syntax: class MyClass: pass
• Class name automatically assigned to variable
• SyntaxError: invalid syntax

How it works:
• MyClass = class MyClass: pass attempts to use assignment
• class statement doesn't support assignment operator
• Python parser expects: class ClassName: body
• Encountered = before class keyword
• Raises SyntaxError: invalid syntax

Example:
class MyClass: pass          # Correct (no =)
MyClass = class MyClass: pass  # SyntaxError (invalid syntax)
# Correct: class MyClass: pass

Common uses:
• Understanding syntax: class statement doesn't use =
• Class definition: class MyClass: pass (correct syntax)
• Syntax errors
• Class statement rules

Example: MyClass = class MyClass: pass raises a SyntaxError because the class statement doesn't use the assignment operator - the class keyword automatically creates the variable with the class name.

Key Concepts:
• Class statement syntax: • MyClass = class MyClass: pass raises SyntaxError • class statement doesn't use assignment operator • Correct syntax: class MyClass: pass • Class name automatically assigned to variable • SyntaxError: invalid syntax How it works: • MyClass = class MyClass: pass attempts to use assignment • class statement doesn't support assignment operator • Python parser expects: class ClassName: body • Encountered = before class keyword • Raises SyntaxError: invalid syntax Example: class MyClass: pass # Correct (no =) MyClass = class MyClass: pass # SyntaxError (invalid syntax) # Correct: class MyClass: pass Common uses: • Understanding syntax: class statement doesn't use = • Class definition: class MyClass: pass (correct syntax) • Syntax errors • Class statement rules Example: MyClass = class MyClass: pass raises a SyntaxError because the class statement doesn't use the assignment operator - the class keyword automatically creates the variable with the class name.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is obj = MyClass() if class MyClass: pass?`, 
    o: ["Creates instance of MyClass", "Error", "Calls MyClass", "None"], 
    c: 0, 
    e: "Calling class creates instance (object).",
    de: `Calling a class (using parentheses) creates an instance (object) of that class. If class MyClass: pass, then obj = MyClass() creates an instance of MyClass and assigns it to obj. The parentheses () call the class, which triggers instance creation. Classes are callable - when you call them, they create and return a new instance. This is how objects are created in Python - by calling the class constructor.

Instance creation:
• obj = MyClass() creates instance of MyClass
• MyClass() calls class (creates instance)
• Instance is object of type MyClass
• Assigned to variable obj
• Returns: new instance object

How it works:
• MyClass() calls class MyClass
• Class is callable (can be called)
• Calling class creates new instance
• Instance object created and returned
• Assigned to obj
• Returns: instance object

Example:
class MyClass: pass
obj = MyClass()              # Creates instance
obj2 = MyClass()             # Creates another instance
obj is obj2                  # False (different instances)

Common uses:
• Creating objects: obj = MyClass() (instance creation)
• Object instantiation: instance = ClassName()
• Instance creation
• Object-oriented programming

Example: If class MyClass: pass, then obj = MyClass() creates an instance of MyClass because calling a class (using parentheses) creates and returns a new instance (object) of that class.

Key Concepts:
• Instance creation: • obj = MyClass() creates instance of MyClass • MyClass() calls class (creates instance) • Instance is object of type MyClass • Assigned to variable obj • Returns: new instance object How it works: • MyClass() calls class MyClass • Class is callable (can be called) • Calling class creates new instance • Instance object created and returned • Assigned to obj • Returns: instance object Example: class MyClass: pass obj = MyClass() # Creates instance obj2 = MyClass() # Creates another instance obj is obj2 # False (different instances) Common uses: • Creating objects: obj = MyClass() (instance creation) • Object instantiation: instance = ClassName() • Instance creation • Object-oriented programming Example: If class MyClass: pass, then obj = MyClass() creates an instance of MyClass because calling a class (using parentheses) creates and returns a new instance (object) of that class.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is type(MyClass()) if class MyClass: pass?`, 
    o: ["<class '__main__.MyClass'>", "<class 'type'>", "Error", "None"], 
    c: 0, 
    e: "type() returns class of instance.",
    de: `The type() function returns the class (type) of an object. If class MyClass: pass, then type(MyClass()) returns <class '__main__.MyClass'> because MyClass() creates an instance of MyClass, and type() returns the class that the instance belongs to. The output <class '__main__.MyClass'> shows that the instance is of type MyClass, where '__main__' is the module name (the current script).

type() on instance:
• type(MyClass()) returns <class '__main__.MyClass'>
• MyClass() creates instance
• type() returns class of instance
• Returns class object: <class '__main__.MyClass'>
• Shows instance belongs to MyClass class

How it works:
• MyClass() creates instance of MyClass
• type(instance) checks type of instance
• Instance belongs to MyClass class
• Returns class object: <class '__main__.MyClass'>
• '__main__' is module name (current script)

Example:
class MyClass: pass
type(MyClass())              # <class '__main__.MyClass'>
obj = MyClass()
type(obj)                    # <class '__main__.MyClass'>

Common uses:
• Type checking: if type(obj) == MyClass: ...
• Type inspection: print(type(instance))
• Object type
• Type identification

Example: If class MyClass: pass, then type(MyClass()) returns <class '__main__.MyClass'> because type() returns the class that an instance belongs to, and MyClass() creates an instance of MyClass.

Key Concepts:
• • Type inspection: print(type(instance)) • Object type • Type identification Example: If class MyClass: pass, then type(MyClass()) returns <class '__main__.MyClass'> because type() returns the class that an instance belongs to, and MyClass() creates an instance of MyClass.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is isinstance(MyClass(), MyClass) if class MyClass: pass?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "isinstance() checks if object is instance of class.",
    de: `The isinstance() function checks if an object is an instance of a class (or any of its subclasses). If class MyClass: pass, then isinstance(MyClass(), MyClass) returns True because MyClass() creates an instance of MyClass, and isinstance() checks if that instance is an instance of MyClass (which it is). isinstance() is the recommended way to check types in Python, as it also returns True for subclasses.

isinstance() check:
• isinstance(MyClass(), MyClass) returns True
• MyClass() creates instance of MyClass
• isinstance() checks if instance is of type MyClass
• Instance is of type MyClass
• Returns: True

How it works:
• MyClass() creates instance of MyClass
• isinstance(instance, MyClass) checks type
• Instance is indeed of type MyClass
• Returns: True

Example:
class MyClass: pass
obj = MyClass()
isinstance(obj, MyClass)     # True (obj is instance of MyClass)
isinstance(obj, object)     # True (all classes inherit from object)

Common uses:
• Type checking: if isinstance(obj, MyClass): ...
• Instance validation: isinstance(instance, Class)
• Type checking
• Object validation

Example: If class MyClass: pass, then isinstance(MyClass(), MyClass) returns True because isinstance() checks if an object is an instance of a class, and MyClass() creates an instance of MyClass.

Key Concepts:
• • Instance validation: isinstance(instance, Class) • Type checking • Object validation Example: If class MyClass: pass, then isinstance(MyClass(), MyClass) returns True because isinstance() checks if an object is an instance of a class, and MyClass() creates an instance of MyClass.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is MyClass.__name__ if class MyClass: pass?`, 
    o: ["'MyClass'", "None", "Error", "''"], 
    c: 0, 
    e: "__name__ attribute contains class name.",
    de: `Classes have a __name__ attribute that contains the class name as a string. If class MyClass: pass, then MyClass.__name__ returns 'MyClass' because __name__ is a special attribute that stores the class's name. This attribute is automatically set when the class is defined. It's useful for introspection, debugging, or creating dynamic code that needs to know class names.

__name__ attribute:
• MyClass.__name__ returns 'MyClass'
• __name__ contains class name as string
• Automatically set when class defined
• Returns class name: 'MyClass'
• Useful for introspection

How it works:
• class MyClass: pass creates class definition
• Python automatically sets MyClass.__name__ = 'MyClass'
• __name__ attribute stores class name
• MyClass.__name__ accesses attribute
• Returns: 'MyClass'

Example:
class MyClass: pass
MyClass.__name__             # 'MyClass' (class name)
class Person: pass
Person.__name__              # 'Person' (class name)

Common uses:
• Introspection: print(MyClass.__name__) (debugging)
• Dynamic code: code that uses class names
• Class attributes
• Class metadata

Example: If class MyClass: pass, then MyClass.__name__ returns 'MyClass' because __name__ is a special attribute that stores the class's name as a string, automatically set when the class is defined.

Key Concepts:
• __name__ attribute: • MyClass.__name__ returns 'MyClass' • __name__ contains class name as string • Automatically set when class defined • Returns class name: 'MyClass' • Useful for introspection How it works: • class MyClass: pass creates class definition • Python automatically sets MyClass.__name__ = 'MyClass' • __name__ attribute stores class name • MyClass.__name__ accesses attribute • Returns: 'MyClass' Example: class MyClass: pass MyClass.__name__ # 'MyClass' (class name) class Person: pass Person.__name__ # 'Person' (class name) Common uses: • Introspection: print(MyClass.__name__) (debugging) • Dynamic code: code that uses class names • Class attributes • Class metadata Example: If class MyClass: pass, then MyClass.__name__ returns 'MyClass' because __name__ is a special attribute that stores the class's name as a string, automatically set when the class is defined.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: pass; MyClass.__bases__?`, 
    o: ["(<class 'object'>,)", "()", "Error", "None"], 
    c: 0, 
    e: "__bases__ contains tuple of base classes (object by default).",
    de: `Classes have a __bases__ attribute that contains a tuple of base classes (parent classes). If class MyClass: pass, then MyClass.__bases__ returns (<class 'object'>,) because all classes in Python inherit from object by default. Even if you don't explicitly specify a parent class, Python automatically makes object the base class. __bases__ shows the inheritance hierarchy - which classes this class inherits from.

__bases__ attribute:
• MyClass.__bases__ returns (<class 'object'>,)
• __bases__ contains tuple of base classes
• All classes inherit from object by default
• Returns tuple: (<class 'object'>,)
• Shows inheritance hierarchy

How it works:
• class MyClass: pass creates class definition
• No explicit parent class specified
• Python automatically makes object the base class
• MyClass.__bases__ contains tuple of base classes
• Returns: (<class 'object'>,)

Example:
class MyClass: pass
MyClass.__bases__            # (<class 'object'>,) (default inheritance)
class Child(Parent): pass
Child.__bases__              # (<class '__main__.Parent'>,) (explicit inheritance)

Common uses:
• Inheritance inspection: print(MyClass.__bases__)
• Inheritance hierarchy: check parent classes
• Class attributes
• Inheritance information

Example: If class MyClass: pass, then MyClass.__bases__ returns (<class 'object'>,) because all classes in Python inherit from object by default, and __bases__ contains a tuple of the base classes.

Key Concepts:
• __bases__ attribute: • MyClass.__bases__ returns (<class 'object'>,) • __bases__ contains tuple of base classes • All classes inherit from object by default • Returns tuple: (<class 'object'>,) • Shows inheritance hierarchy How it works: • class MyClass: pass creates class definition • No explicit parent class specified • Python automatically makes object the base class • MyClass.__bases__ contains tuple of base classes • Returns: (<class 'object'>,) Example: class MyClass: pass MyClass.__bases__ # (<class 'object'>,) (default inheritance) class Child(Parent): pass Child.__bases__ # (<class '__main__.Parent'>,) (explicit inheritance) Common uses: • Inheritance inspection: print(MyClass.__bases__) • Inheritance hierarchy: check parent classes • Class attributes • Inheritance information Example: If class MyClass: pass, then MyClass.__bases__ returns (<class 'object'>,) because all classes in Python inherit from object by default, and __bases__ contains a tuple of the base classes.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: pass; MyClass.__module__?`, 
    o: ["'__main__' or module name", "None", "Error", "''"], 
    c: 0, 
    e: "__module__ contains module where class is defined.",
    de: `Classes have a __module__ attribute that contains the name of the module where the class is defined. If class MyClass: pass, then MyClass.__module__ returns '__main__' (if defined in the main script) or the module name (if defined in an imported module). The __module__ attribute helps identify where a class was defined, which is useful for introspection and debugging.

__module__ attribute:
• MyClass.__module__ returns '__main__' or module name
• __module__ contains module name where class defined
• '__main__' if defined in main script
• Module name if defined in imported module
• Useful for introspection

How it works:
• class MyClass: pass creates class definition
• Python automatically sets MyClass.__module__ = '__main__' (or module name)
• __module__ attribute stores module name
• MyClass.__module__ accesses attribute
• Returns: '__main__' (or module name)

Example:
class MyClass: pass
MyClass.__module__           # '__main__' (if in main script)
# If in module.py: MyClass.__module__ would be 'module'

Common uses:
• Introspection: print(MyClass.__module__) (debugging)
• Module identification: check where class defined
• Class attributes
• Class metadata

Example: If class MyClass: pass, then MyClass.__module__ returns '__main__' (if defined in the main script) or the module name (if defined in an imported module) because __module__ contains the name of the module where the class is defined.

Key Concepts:
• __module__ attribute: • MyClass.__module__ returns '__main__' or module name • __module__ contains module name where class defined • '__main__' if defined in main script • Module name if defined in imported module • Useful for introspection How it works: • class MyClass: pass creates class definition • Python automatically sets MyClass.__module__ = '__main__' (or module name) • __module__ attribute stores module name • MyClass.__module__ accesses attribute • Returns: '__main__' (or module name) Example: class MyClass: pass MyClass.__module__ # '__main__' (if in main script) # If in module.py: MyClass.__module__ would be 'module' Common uses: • Introspection: print(MyClass.__module__) (debugging) • Module identification: check where class defined • Class attributes • Class metadata Example: If class MyClass: pass, then MyClass.__module__ returns '__main__' (if defined in the main script) or the module name (if defined in an imported module) because __module__ contains the name of the module where the class is defined.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: pass; callable(MyClass)?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Classes are callable (used to create instances).",
    de: `Classes are callable objects - they can be called like functions. If class MyClass: pass, then callable(MyClass) returns True because classes are callable - you can call them with parentheses to create instances (e.g., MyClass()). The callable() function checks if an object can be called, and classes are callable because they can be called to create instances. This is how object creation works in Python - classes are callable constructors.

Classes are callable:
• callable(MyClass) returns True
• Classes are callable objects
• Can be called: MyClass() (creates instance)
• callable() checks if object can be called
• Returns: True

How it works:
• class MyClass: pass creates class object
• MyClass is a class (callable)
• callable(MyClass) checks if MyClass is callable
• Classes are callable (can be called to create instances)
• Returns: True

Example:
class MyClass: pass
callable(MyClass)            # True (classes are callable)
MyClass()                    # Creates instance (calling class)
callable(5)                 # False (integers not callable)

Common uses:
• Checking callable: if callable(obj): obj()
• Type checking: is_callable = callable(Class)
• Callable check
• Object inspection

Example: If class MyClass: pass, then callable(MyClass) returns True because classes are callable objects - they can be called with parentheses to create instances (objects).

Key Concepts:
• Classes are callable: • callable(MyClass) returns True • Classes are callable objects • Can be called: MyClass() (creates instance) • callable() checks if object can be called • Returns: True How it works: • class MyClass: pass creates class object • MyClass is a class (callable) • callable(MyClass) checks if MyClass is callable • Classes are callable (can be called to create instances) • Returns: True Example: class MyClass: pass callable(MyClass) # True (classes are callable) MyClass() # Creates instance (calling class) callable(5) # False (integers not callable) Common uses: • Checking callable: if callable(obj): obj() • Type checking: is_callable = callable(Class) • Callable check • Object inspection Example: If class MyClass: pass, then callable(MyClass) returns True because classes are callable objects - they can be called with parentheses to create instances (objects).

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  
  // 11-20: Instance Creation and __init__
  (_i: number) => ({ 
    q: `What is def __init__(self, x): self.x = x?`, 
    o: ["Constructor method", "Destructor method", "Error", "Regular method"], 
    c: 0, 
    e: "__init__ is the constructor.",
    de: `The __init__ method is the constructor - it's automatically called when an instance is created. If def __init__(self, x): self.x = x, then this defines a constructor that takes a parameter x and sets it as an instance attribute. The __init__ method is special - it's called automatically when you create an instance (e.g., MyClass(5)), and it's used to initialize instance attributes. The self parameter refers to the instance being created.

__init__ constructor:
• def __init__(self, x): self.x = x defines constructor
• __init__ is special method (constructor)
• Automatically called when instance created
• self refers to instance being created
• Sets instance attributes: self.x = x

How it works:
• __init__ is special method name
• Called automatically: MyClass(5) calls __init__(self, 5)
• self parameter is instance being created
• x parameter is argument passed: MyClass(5)
• Sets instance attribute: self.x = x
• Returns: None (constructors don't return values)

Example:
class MyClass:
    def __init__(self, x):
        self.x = x
obj = MyClass(5)              # Calls __init__(self, 5)
obj.x                         # 5 (instance attribute set)

Common uses:
• Constructor: def __init__(self, param): self.attr = param
• Initialization: def __init__(self): self.data = []
• Instance setup
• Object initialization

Example: def __init__(self, x): self.x = x defines a constructor because __init__ is the special method that's automatically called when an instance is created, used to initialize instance attributes.

Key Concepts:
• __init__ constructor: • def __init__(self, x): self.x = x defines constructor • __init__ is special method (constructor) • Automatically called when instance created • self refers to instance being created • Sets instance attributes: self.x = x How it works: • __init__ is special method name • Called automatically: MyClass(5) calls __init__(self, 5) • self parameter is instance being created • x parameter is argument passed: MyClass(5) • Sets instance attribute: self.x = x • Returns: None (constructors don't return values) Example: class MyClass: def __init__(self, x): self.x = x obj = MyClass(5) # Calls __init__(self, 5) obj.x # 5 (instance attribute set) Common uses: • Constructor: def __init__(self, param): self.attr = param • Initialization: def __init__(self): self.data = [] • Instance setup • Object initialization Example: def __init__(self, x): self.x = x defines a constructor because __init__ is the special method that's automatically called when an instance is created, used to initialize instance attributes.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __init__(self, x): self.x = x; obj = MyClass(5); obj.x?`, 
    o: ["5", "None", "Error", "0"], 
    c: 0, 
    e: "__init__ sets instance attributes.",
    de: `The __init__ method sets instance attributes when an instance is created. If class MyClass: def __init__(self, x): self.x = x; obj = MyClass(5); obj.x, then obj.x returns 5 because MyClass(5) calls __init__(self, 5), which sets self.x = 5, creating an instance attribute x with value 5. The instance attribute can then be accessed via obj.x.

__init__ sets attributes:
• class MyClass: def __init__(self, x): self.x = x; obj = MyClass(5); obj.x returns 5
• MyClass(5) calls __init__(self, 5)
• __init__ sets self.x = 5 (instance attribute)
• obj.x accesses instance attribute
• Returns: 5

How it works:
• MyClass(5) creates instance and calls __init__(self, 5)
• __init__ executes: self.x = 5
• Instance attribute x = 5 created on instance
• obj.x accesses instance attribute
• Returns: 5

Example:
class MyClass:
    def __init__(self, x):
        self.x = x
obj = MyClass(5)              # Calls __init__(self, 5), sets obj.x = 5
obj.x                         # 5 (instance attribute)

Common uses:
• Setting attributes: def __init__(self, x): self.x = x
• Initialization: def __init__(self): self.data = []
• Instance setup
• Object initialization

Example: If class MyClass: def __init__(self, x): self.x = x; obj = MyClass(5); obj.x, then obj.x returns 5 because __init__ sets instance attributes when the instance is created, so self.x = 5 creates an instance attribute x with value 5.

Key Concepts:
• __init__ sets attributes: • class MyClass: def __init__(self, x): self.x = x; obj = MyClass(5); obj.x returns 5 • MyClass(5) calls __init__(self, 5) • __init__ sets self.x = 5 (instance attribute) • obj.x accesses instance attribute • Returns: 5 How it works: • MyClass(5) creates instance and calls __init__(self, 5) • __init__ executes: self.x = 5 • Instance attribute x = 5 created on instance • obj.x accesses instance attribute • Returns: 5 Example: class MyClass: def __init__(self, x): self.x = x obj = MyClass(5) # Calls __init__(self, 5), sets obj.x = 5 obj.x # 5 (instance attribute) Common uses: • Setting attributes: def __init__(self, x): self.x = x • Initialization: def __init__(self): self.data = [] • Instance setup • Object initialization Example: If class MyClass: def __init__(self, x): self.x = x; obj = MyClass(5); obj.x, then obj.x returns 5 because __init__ sets instance attributes when the instance is created, so self.x = 5 creates an instance attribute x with value 5.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __init__(self): pass; obj = MyClass()?`, 
    o: ["Creates instance", "Error", "Returns None", "None"], 
    c: 0, 
    e: "__init__ can have no parameters (except self).",
    de: `The __init__ method can have no parameters except self. If class MyClass: def __init__(self): pass; obj = MyClass(), then obj = MyClass() creates an instance because __init__ can be defined with only self (no other parameters). When you call MyClass() with no arguments, it calls __init__(self) with no additional arguments. The pass statement does nothing - it's just a placeholder for an empty method body.

__init__ with no parameters:
• class MyClass: def __init__(self): pass; obj = MyClass() creates instance
• __init__ has only self parameter (no other parameters)
• MyClass() calls __init__(self) with no arguments
• Instance created successfully
• Returns: instance object

How it works:
• MyClass() creates instance and calls __init__(self)
• __init__ executes: pass (does nothing)
• Instance created successfully
• Assigned to obj
• Returns: instance object

Example:
class MyClass:
    def __init__(self):
        pass
obj = MyClass()               # Calls __init__(self), creates instance
obj                           # <__main__.MyClass object>

Common uses:
• Empty constructor: def __init__(self): pass
• No initialization: def __init__(self): (empty body)
• Default initialization
• Simple constructors

Example: If class MyClass: def __init__(self): pass; obj = MyClass(), then obj = MyClass() creates an instance because __init__ can have no parameters except self, so MyClass() calls __init__(self) and creates the instance.

Key Concepts:
• __init__ with no parameters: • class MyClass: def __init__(self): pass; obj = MyClass() creates instance • __init__ has only self parameter (no other parameters) • MyClass() calls __init__(self) with no arguments • Instance created successfully • Returns: instance object How it works: • MyClass() creates instance and calls __init__(self) • __init__ executes: pass (does nothing) • Instance created successfully • Assigned to obj • Returns: instance object Example: class MyClass: def __init__(self): pass obj = MyClass() # Calls __init__(self), creates instance obj # <__main__.MyClass object> Common uses: • Empty constructor: def __init__(self): pass • No initialization: def __init__(self): (empty body) • Default initialization • Simple constructors Example: If class MyClass: def __init__(self): pass; obj = MyClass(), then obj = MyClass() creates an instance because __init__ can have no parameters except self, so MyClass() calls __init__(self) and creates the instance.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __init__(self, x, y): self.x = x; self.y = y; obj = MyClass(1, 2)?`, 
    o: ["Creates instance with x=1, y=2", "Error", "Returns None", "None"], 
    c: 0, 
    e: "__init__ can have multiple parameters.",
    de: `The __init__ method can have multiple parameters. If class MyClass: def __init__(self, x, y): self.x = x; self.y = y; obj = MyClass(1, 2), then obj = MyClass(1, 2) creates an instance with x=1, y=2 because __init__ can take multiple parameters. When you call MyClass(1, 2), it calls __init__(self, 1, 2), which sets self.x = 1 and self.y = 2, creating two instance attributes.

__init__ with multiple parameters:
• class MyClass: def __init__(self, x, y): self.x = x; self.y = y; obj = MyClass(1, 2) creates instance with x=1, y=2
• __init__ has parameters: self, x, y
• MyClass(1, 2) calls __init__(self, 1, 2)
• Sets self.x = 1, self.y = 2
• Returns: instance object

How it works:
• MyClass(1, 2) creates instance and calls __init__(self, 1, 2)
• __init__ executes: self.x = 1, self.y = 2
• Instance attributes x = 1, y = 2 created
• Instance created successfully
• Returns: instance object

Example:
class MyClass:
    def __init__(self, x, y):
        self.x = x
        self.y = y
obj = MyClass(1, 2)           # Calls __init__(self, 1, 2), sets obj.x = 1, obj.y = 2
obj.x                         # 1
obj.y                         # 2

Common uses:
• Multiple parameters: def __init__(self, x, y): self.x = x; self.y = y
• Initialization: def __init__(self, name, age): self.name = name; self.age = age
• Instance setup
• Object initialization

Example: If class MyClass: def __init__(self, x, y): self.x = x; self.y = y; obj = MyClass(1, 2), then obj = MyClass(1, 2) creates an instance with x=1, y=2 because __init__ can have multiple parameters, and MyClass(1, 2) calls __init__(self, 1, 2), which sets both instance attributes.

Key Concepts:
• __init__ with multiple parameters: • class MyClass: def __init__(self, x, y): self.x = x; self.y = y; obj = MyClass(1, 2) creates instance with x=1, y=2 • __init__ has parameters: self, x, y • MyClass(1, 2) calls __init__(self, 1, 2) • Sets self.x = 1, self.y = 2 • Returns: instance object How it works: • MyClass(1, 2) creates instance and calls __init__(self, 1, 2) • __init__ executes: self.x = 1, self.y = 2 • Instance attributes x = 1, y = 2 created • Instance created successfully • Returns: instance object Example: class MyClass: def __init__(self, x, y): self.x = x self.y = y obj = MyClass(1, 2) # Calls __init__(self, 1, 2), sets obj.x = 1, obj.y = 2 obj.x # 1 obj.y # 2 Common uses: • Multiple parameters: def __init__(self, x, y): self.x = x; self.y = y • Initialization: def __init__(self, name, age): self.name = name; self.age = age • Instance setup • Object initialization Example: If class MyClass: def __init__(self, x, y): self.x = x; self.y = y; obj = MyClass(1, 2), then obj = MyClass(1, 2) creates an instance with x=1, y=2 because __init__ can have multiple parameters, and MyClass(1, 2) calls __init__(self, 1, 2), which sets both instance attributes.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __init__(self, x=1): self.x = x; obj = MyClass()?`, 
    o: ["Creates instance with x=1", "Error", "Returns None", "None"], 
    c: 0, 
    e: "__init__ can have default parameters.",
    de: `The __init__ method can have default parameters. If class MyClass: def __init__(self, x=1): self.x = x; obj = MyClass(), then obj = MyClass() creates an instance with x=1 because __init__ has a default parameter x=1. When you call MyClass() with no arguments, it uses the default value x=1, so __init__(self, 1) is called, which sets self.x = 1. Default parameters allow you to create instances without providing all arguments.

__init__ with default parameter:
• class MyClass: def __init__(self, x=1): self.x = x; obj = MyClass() creates instance with x=1
• __init__ has default parameter: x=1
• MyClass() calls __init__(self, 1) (uses default)
• Sets self.x = 1
• Returns: instance object

How it works:
• MyClass() creates instance and calls __init__(self, 1) (default x=1)
• __init__ executes: self.x = 1
• Instance attribute x = 1 created
• Instance created successfully
• Returns: instance object

Example:
class MyClass:
    def __init__(self, x=1):
        self.x = x
obj = MyClass()               # Calls __init__(self, 1), sets obj.x = 1
obj.x                         # 1 (default value used)

Common uses:
• Default parameters: def __init__(self, x=1): self.x = x
• Optional initialization: def __init__(self, name='Unknown'): self.name = name
• Instance setup
• Flexible constructors

Example: If class MyClass: def __init__(self, x=1): self.x = x; obj = MyClass(), then obj = MyClass() creates an instance with x=1 because __init__ has a default parameter x=1, so MyClass() uses the default value.

Key Concepts:
• __init__ with default parameter: • class MyClass: def __init__(self, x=1): self.x = x; obj = MyClass() creates instance with x=1 • __init__ has default parameter: x=1 • MyClass() calls __init__(self, 1) (uses default) • Sets self.x = 1 • Returns: instance object How it works: • MyClass() creates instance and calls __init__(self, 1) (default x=1) • __init__ executes: self.x = 1 • Instance attribute x = 1 created • Instance created successfully • Returns: instance object Example: class MyClass: def __init__(self, x=1): self.x = x obj = MyClass() # Calls __init__(self, 1), sets obj.x = 1 obj.x # 1 (default value used) Common uses: • Default parameters: def __init__(self, x=1): self.x = x • Optional initialization: def __init__(self, name='Unknown'): self.name = name • Instance setup • Flexible constructors Example: If class MyClass: def __init__(self, x=1): self.x = x; obj = MyClass(), then obj = MyClass() creates an instance with x=1 because __init__ has a default parameter x=1, so MyClass() uses the default value.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __init__(self, x=1): self.x = x; obj = MyClass(5)?`, 
    o: ["Creates instance with x=5", "Error", "Returns None", "None"], 
    c: 0, 
    e: "Passing argument overrides default in __init__.",
    de: `Passing an argument to __init__ overrides the default parameter value. If class MyClass: def __init__(self, x=1): self.x = x; obj = MyClass(5), then obj = MyClass(5) creates an instance with x=5 because passing 5 as an argument overrides the default value x=1. When you call MyClass(5), it calls __init__(self, 5), which uses the provided argument 5 instead of the default value 1.

Argument overrides default:
• class MyClass: def __init__(self, x=1): self.x = x; obj = MyClass(5) creates instance with x=5
• __init__ has default parameter: x=1
• MyClass(5) calls __init__(self, 5) (overrides default)
• Sets self.x = 5 (not 1)
• Returns: instance object

How it works:
• MyClass(5) creates instance and calls __init__(self, 5)
• Argument 5 overrides default x=1
• __init__ executes: self.x = 5
• Instance attribute x = 5 created
• Returns: instance object

Example:
class MyClass:
    def __init__(self, x=1):
        self.x = x
obj = MyClass(5)             # Calls __init__(self, 5), sets obj.x = 5
obj.x                         # 5 (argument overrides default)

Common uses:
• Overriding defaults: MyClass(5) (overrides default x=1)
• Flexible initialization: def __init__(self, name='Unknown'): self.name = name
• Instance setup
• Optional parameters

Example: If class MyClass: def __init__(self, x=1): self.x = x; obj = MyClass(5), then obj = MyClass(5) creates an instance with x=5 because passing 5 as an argument overrides the default parameter value x=1.

Key Concepts:
• Argument overrides default: • class MyClass: def __init__(self, x=1): self.x = x; obj = MyClass(5) creates instance with x=5 • __init__ has default parameter: x=1 • MyClass(5) calls __init__(self, 5) (overrides default) • Sets self.x = 5 (not 1) • Returns: instance object How it works: • MyClass(5) creates instance and calls __init__(self, 5) • Argument 5 overrides default x=1 • __init__ executes: self.x = 5 • Instance attribute x = 5 created • Returns: instance object Example: class MyClass: def __init__(self, x=1): self.x = x obj = MyClass(5) # Calls __init__(self, 5), sets obj.x = 5 obj.x # 5 (argument overrides default) Common uses: • Overriding defaults: MyClass(5) (overrides default x=1) • Flexible initialization: def __init__(self, name='Unknown'): self.name = name • Instance setup • Optional parameters Example: If class MyClass: def __init__(self, x=1): self.x = x; obj = MyClass(5), then obj = MyClass(5) creates an instance with x=5 because passing 5 as an argument overrides the default parameter value x=1.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: pass; obj = MyClass(); obj.x = 5; obj.x?`, 
    o: ["5", "Error", "None", "0"], 
    c: 0, 
    e: "Instance attributes can be set after creation.",
    de: `Instance attributes can be set after an instance is created. If class MyClass: pass; obj = MyClass(); obj.x = 5; obj.x, then obj.x returns 5 because you can assign attributes to an instance after it's created. Python allows you to add new attributes to instances dynamically - you don't need to define them in the class or __init__ method. This is called dynamic attribute assignment.

Setting attributes after creation:
• class MyClass: pass; obj = MyClass(); obj.x = 5; obj.x returns 5
• obj = MyClass() creates instance
• obj.x = 5 assigns attribute to instance
• obj.x accesses attribute
• Returns: 5

How it works:
• MyClass() creates instance
• obj.x = 5 assigns attribute x = 5 to instance
• Attribute stored in instance __dict__
• obj.x accesses attribute
• Returns: 5

Example:
class MyClass: pass
obj = MyClass()               # Creates instance
obj.x = 5                    # Sets attribute after creation
obj.x                        # 5 (attribute accessible)

Common uses:
• Dynamic attributes: obj.attr = value (set after creation)
• Flexible objects: obj.data = [] (add attributes as needed)
• Instance attributes
• Dynamic assignment

Example: If class MyClass: pass; obj = MyClass(); obj.x = 5; obj.x, then obj.x returns 5 because instance attributes can be set after an instance is created, and obj.x = 5 assigns the attribute to the instance.

Key Concepts:
• Setting attributes after creation: • class MyClass: pass; obj = MyClass(); obj.x = 5; obj.x returns 5 • obj = MyClass() creates instance • obj.x = 5 assigns attribute to instance • obj.x accesses attribute • Returns: 5 How it works: • MyClass() creates instance • obj.x = 5 assigns attribute x = 5 to instance • Attribute stored in instance __dict__ • obj.x accesses attribute • Returns: 5 Example: class MyClass: pass obj = MyClass() # Creates instance obj.x = 5 # Sets attribute after creation obj.x # 5 (attribute accessible) Common uses: • Dynamic attributes: obj.attr = value (set after creation) • Flexible objects: obj.data = [] (add attributes as needed) • Instance attributes • Dynamic assignment Example: If class MyClass: pass; obj = MyClass(); obj.x = 5; obj.x, then obj.x returns 5 because instance attributes can be set after an instance is created, and obj.x = 5 assigns the attribute to the instance.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: pass; obj1 = MyClass(); obj2 = MyClass(); obj1 is obj2?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "Each instance is a separate object.",
    de: `Each call to a class creates a separate instance (object). If class MyClass: pass; obj1 = MyClass(); obj2 = MyClass(); obj1 is obj2, then obj1 is obj2 returns False because obj1 and obj2 are different instances - each call to MyClass() creates a new, separate object. The is operator checks object identity (whether two variables refer to the same object), and since obj1 and obj2 are different instances, they are not the same object.

Different instances:
• obj1 is obj2 returns False
• obj1 = MyClass() creates first instance
• obj2 = MyClass() creates second instance (different object)
• Each instance is separate object
• is checks identity (same object)
• Returns: False

How it works:
• MyClass() creates first instance (obj1)
• MyClass() creates second instance (obj2)
• obj1 and obj2 are different objects
• obj1 is obj2 checks if same object
• Different objects, so returns: False

Example:
class MyClass: pass
obj1 = MyClass()             # Creates first instance
obj2 = MyClass()             # Creates second instance (different)
obj1 is obj2                 # False (different instances)

Common uses:
• Instance identity: obj1 is obj2 (check if same object)
• Object comparison: if obj1 is obj2: (identity check)
• Instance creation
• Object identity

Example: If class MyClass: pass; obj1 = MyClass(); obj2 = MyClass(); obj1 is obj2, then obj1 is obj2 returns False because each call to MyClass() creates a separate instance, so obj1 and obj2 are different objects.

Key Concepts:
• Different instances: • obj1 is obj2 returns False • obj1 = MyClass() creates first instance • obj2 = MyClass() creates second instance (different object) • Each instance is separate object • is checks identity (same object) • Returns: False How it works: • MyClass() creates first instance (obj1) • MyClass() creates second instance (obj2) • obj1 and obj2 are different objects • obj1 is obj2 checks if same object • Different objects, so returns: False Example: class MyClass: pass obj1 = MyClass() # Creates first instance obj2 = MyClass() # Creates second instance (different) obj1 is obj2 # False (different instances) Common uses: • Instance identity: obj1 is obj2 (check if same object) • Object comparison: if obj1 is obj2: (identity check) • Instance creation • Object identity Example: If class MyClass: pass; obj1 = MyClass(); obj2 = MyClass(); obj1 is obj2, then obj1 is obj2 returns False because each call to MyClass() creates a separate instance, so obj1 and obj2 are different objects.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: pass; obj = MyClass(); hasattr(obj, 'x')?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "hasattr() checks if object has attribute.",
    de: `The hasattr() function checks if an object has a specific attribute. If class MyClass: pass; obj = MyClass(); hasattr(obj, 'x'), then hasattr(obj, 'x') returns False because obj doesn't have an attribute 'x' - it was created from an empty class with no attributes defined. hasattr() returns True if the object has the attribute (whether it's defined in the class, set in __init__, or added dynamically), and False otherwise.

hasattr() check:
• hasattr(obj, 'x') returns False
• obj = MyClass() creates instance
• obj has no attribute 'x'
• hasattr() checks if attribute exists
• Returns: False

How it works:
• MyClass() creates instance
• obj has no attributes (empty class)
• hasattr(obj, 'x') checks if 'x' exists
• Attribute doesn't exist
• Returns: False

Example:
class MyClass: pass
obj = MyClass()
hasattr(obj, 'x')            # False (no attribute 'x')
obj.x = 5
hasattr(obj, 'x')            # True (attribute 'x' exists)

Common uses:
• Attribute checking: if hasattr(obj, 'attr'): use obj.attr
• Safe access: hasattr(obj, 'method') and obj.method()
• Attribute existence
• Object inspection

Example: If class MyClass: pass; obj = MyClass(); hasattr(obj, 'x'), then hasattr(obj, 'x') returns False because obj doesn't have an attribute 'x', and hasattr() checks if an object has a specific attribute.

Key Concepts:
• hasattr() check: • hasattr(obj, 'x') returns False • obj = MyClass() creates instance • obj has no attribute 'x' • hasattr() checks if attribute exists • Returns: False How it works: • MyClass() creates instance • obj has no attributes (empty class) • hasattr(obj, 'x') checks if 'x' exists • Attribute doesn't exist • Returns: False Example: class MyClass: pass obj = MyClass() hasattr(obj, 'x') # False (no attribute 'x') obj.x = 5 hasattr(obj, 'x') # True (attribute 'x' exists) Common uses: • Attribute checking: if hasattr(obj, 'attr'): use obj.attr • Safe access: hasattr(obj, 'method') and obj.method() • Attribute existence • Object inspection Example: If class MyClass: pass; obj = MyClass(); hasattr(obj, 'x'), then hasattr(obj, 'x') returns False because obj doesn't have an attribute 'x', and hasattr() checks if an object has a specific attribute.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __init__(self, x): self.x = x; obj = MyClass(5); hasattr(obj, 'x')?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "hasattr() returns True if attribute exists.",
    de: `The hasattr() function returns True if an object has a specific attribute. If class MyClass: def __init__(self, x): self.x = x; obj = MyClass(5); hasattr(obj, 'x'), then hasattr(obj, 'x') returns True because obj has an attribute 'x' that was set in __init__. When MyClass(5) is called, __init__(self, 5) sets self.x = 5, creating the instance attribute 'x', so hasattr() returns True.

hasattr() returns True:
• hasattr(obj, 'x') returns True
• obj = MyClass(5) creates instance with x=5
• __init__ sets self.x = 5 (attribute exists)
• hasattr() checks if attribute exists
• Returns: True

How it works:
• MyClass(5) creates instance and calls __init__(self, 5)
• __init__ sets self.x = 5 (creates attribute)
• obj has attribute 'x'
• hasattr(obj, 'x') checks if 'x' exists
• Attribute exists, so returns: True

Example:
class MyClass:
    def __init__(self, x):
        self.x = x
obj = MyClass(5)             # Sets obj.x = 5
hasattr(obj, 'x')            # True (attribute 'x' exists)

Common uses:
• Attribute checking: if hasattr(obj, 'attr'): use obj.attr
• Safe access: hasattr(obj, 'method') and obj.method()
• Attribute existence
• Object inspection

Example: If class MyClass: def __init__(self, x): self.x = x; obj = MyClass(5); hasattr(obj, 'x'), then hasattr(obj, 'x') returns True because obj has an attribute 'x' that was set in __init__, so hasattr() returns True when the attribute exists.

Key Concepts:
• hasattr() returns True: • hasattr(obj, 'x') returns True • obj = MyClass(5) creates instance with x=5 • __init__ sets self.x = 5 (attribute exists) • hasattr() checks if attribute exists • Returns: True How it works: • MyClass(5) creates instance and calls __init__(self, 5) • __init__ sets self.x = 5 (creates attribute) • obj has attribute 'x' • hasattr(obj, 'x') checks if 'x' exists • Attribute exists, so returns: True Example: class MyClass: def __init__(self, x): self.x = x obj = MyClass(5) # Sets obj.x = 5 hasattr(obj, 'x') # True (attribute 'x' exists) Common uses: • Attribute checking: if hasattr(obj, 'attr'): use obj.attr • Safe access: hasattr(obj, 'method') and obj.method() • Attribute existence • Object inspection Example: If class MyClass: def __init__(self, x): self.x = x; obj = MyClass(5); hasattr(obj, 'x'), then hasattr(obj, 'x') returns True because obj has an attribute 'x' that was set in __init__, so hasattr() returns True when the attribute exists.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  
  // 21-30: Instance Methods and self
  (_i: number) => ({ 
    q: `What is self in a method?`, 
    o: ["Reference to instance", "Reference to class", "Error", "Variable name"], 
    c: 0, 
    e: "self refers to the instance.",
    de: `self is a reference to the instance (object) on which a method is called. In a method definition like def method(self):, self is the first parameter that refers to the instance. When you call obj.method(), Python automatically passes obj as the self argument. self allows methods to access and modify instance attributes and call other instance methods. It's a convention (not a keyword) - you could use any name, but self is universally used.

self parameter:
• self refers to the instance
• First parameter in instance methods
• Automatically passed when method called
• Allows access to instance attributes: self.x
• Convention (not keyword)

How it works:
• def method(self): defines instance method
• self is first parameter (refers to instance)
• obj.method() calls method, passes obj as self
• Method can access instance via self
• self.x accesses instance attribute x

Example:
class MyClass:
    def method(self):
        return self  # self is the instance
obj = MyClass()
obj.method() is obj  # True (self refers to obj)

Common uses:
• Instance access: def method(self): return self.x
• Instance modification: def method(self): self.x = 5
• Instance methods
• Object-oriented programming

Example: self in a method is a reference to the instance because when you call obj.method(), Python automatically passes obj as the self argument, allowing the method to access and modify the instance.

Key Concepts:
• self parameter: • self refers to the instance • First parameter in instance methods • Automatically passed when method called • Allows access to instance attributes: self.x • Convention (not keyword) How it works: • def method(self): defines instance method • self is first parameter (refers to instance) • obj.method() calls method, passes obj as self • Method can access instance via self • self.x accesses instance attribute x Example: class MyClass: def method(self): return self # self is the instance obj = MyClass() obj.method() is obj # True (self refers to obj) Common uses: • Instance access: def method(self): return self.x • Instance modification: def method(self): self.x = 5 • Instance methods • Object-oriented programming Example: self in a method is a reference to the instance because when you call obj.method(), Python automatically passes obj as the self argument, allowing the method to access and modify the instance.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def method(self): return 1; obj = MyClass(); obj.method()?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "Instance method called on object.",
    de: `Instance methods are called on instances (objects). If class MyClass: def method(self): return 1; obj = MyClass(); obj.method(), then obj.method() returns 1 because obj.method() calls the instance method method() on the instance obj. When you call a method on an instance, Python automatically passes the instance as the self argument. The method executes and returns its value (1 in this case).

Instance method call:
• obj.method() returns 1
• obj is instance of MyClass
• method() is instance method
• obj.method() calls method on instance
• Returns: 1

How it works:
• obj = MyClass() creates instance
• obj.method() calls method on instance
• Python passes obj as self argument
• Method executes: return 1
• Returns: 1

Example:
class MyClass:
    def method(self):
        return 1
obj = MyClass()
obj.method()                 # 1 (calls method on instance)

Common uses:
• Method calls: obj.method() (call on instance)
• Instance methods: def method(self): return value
• Object-oriented programming
• Method invocation

Example: If class MyClass: def method(self): return 1; obj = MyClass(); obj.method(), then obj.method() returns 1 because instance methods are called on instances, and obj.method() calls the method on the instance obj.

Key Concepts:
• Instance method call: • obj.method() returns 1 • obj is instance of MyClass • method() is instance method • obj.method() calls method on instance • Returns: 1 How it works: • obj = MyClass() creates instance • obj.method() calls method on instance • Python passes obj as self argument • Method executes: return 1 • Returns: 1 Example: class MyClass: def method(self): return 1 obj = MyClass() obj.method() # 1 (calls method on instance) Common uses: • Method calls: obj.method() (call on instance) • Instance methods: def method(self): return value • Object-oriented programming • Method invocation Example: If class MyClass: def method(self): return 1; obj = MyClass(); obj.method(), then obj.method() returns 1 because instance methods are called on instances, and obj.method() calls the method on the instance obj.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def method(self): return 1; MyClass.method(MyClass())?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "Instance method can be called via class with instance as first arg.",
    de: `Instance methods can be called via the class by explicitly passing the instance as the first argument. If class MyClass: def method(self): return 1; MyClass.method(MyClass()), then MyClass.method(MyClass()) returns 1 because you can call an instance method through the class by passing the instance as the first argument. MyClass.method is the unbound method (function), and MyClass() creates an instance to pass as self. This is equivalent to obj = MyClass(); obj.method().

Calling via class:
• MyClass.method(MyClass()) returns 1
• MyClass.method is unbound method (function)
• MyClass() creates instance
• MyClass.method(instance) calls method with instance as self
• Returns: 1

How it works:
• MyClass.method accesses method via class (unbound)
• MyClass() creates instance
• MyClass.method(instance) calls method with instance as self
• Method executes: return 1
• Returns: 1

Example:
class MyClass:
    def method(self):
        return 1
MyClass.method(MyClass())    # 1 (calls via class with instance)
obj = MyClass()
obj.method()                 # 1 (same result, more common)

Common uses:
• Unbound method call: Class.method(instance)
• Method access: Class.method (gets unbound method)
• Instance methods
• Method invocation

Example: If class MyClass: def method(self): return 1; MyClass.method(MyClass()), then MyClass.method(MyClass()) returns 1 because instance methods can be called via the class by explicitly passing the instance as the first argument.

Key Concepts:
• Calling via class: • MyClass.method(MyClass()) returns 1 • MyClass.method is unbound method (function) • MyClass() creates instance • MyClass.method(instance) calls method with instance as self • Returns: 1 How it works: • MyClass.method accesses method via class (unbound) • MyClass() creates instance • MyClass.method(instance) calls method with instance as self • Method executes: return 1 • Returns: 1 Example: class MyClass: def method(self): return 1 MyClass.method(MyClass()) # 1 (calls via class with instance) obj = MyClass() obj.method() # 1 (same result, more common) Common uses: • Unbound method call: Class.method(instance) • Method access: Class.method (gets unbound method) • Instance methods • Method invocation Example: If class MyClass: def method(self): return 1; MyClass.method(MyClass()), then MyClass.method(MyClass()) returns 1 because instance methods can be called via the class by explicitly passing the instance as the first argument.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def method(self, x): return x * 2; obj = MyClass(); obj.method(5)?`, 
    o: ["10", "5", "Error", "None"], 
    c: 0, 
    e: "Instance method with parameter.",
    de: `Instance methods can take parameters in addition to self. If class MyClass: def method(self, x): return x * 2; obj = MyClass(); obj.method(5), then obj.method(5) returns 10 because the method takes a parameter x, and when you call obj.method(5), the argument 5 is passed to x. The method then returns x * 2 = 5 * 2 = 10. Instance methods can have any number of parameters - self is always first, followed by any other parameters.

Instance method with parameter:
• obj.method(5) returns 10
• method(self, x) takes parameter x
• obj.method(5) passes 5 to x
• Method executes: return x * 2 = 5 * 2
• Returns: 10

How it works:
• obj.method(5) calls method on instance
• Python passes obj as self, 5 as x
• Method executes: return x * 2
• Evaluates: 5 * 2 = 10
• Returns: 10

Example:
class MyClass:
    def method(self, x):
        return x * 2
obj = MyClass()
obj.method(5)                # 10 (5 * 2)

Common uses:
• Method parameters: def method(self, x): return x * 2
• Multiple parameters: def method(self, x, y): return x + y
• Instance methods
• Method arguments

Example: If class MyClass: def method(self, x): return x * 2; obj = MyClass(); obj.method(5), then obj.method(5) returns 10 because instance methods can take parameters, and obj.method(5) passes 5 to x, so the method returns 5 * 2 = 10.

Key Concepts:
• Instance method with parameter: • obj.method(5) returns 10 • method(self, x) takes parameter x • obj.method(5) passes 5 to x • Method executes: return x * 2 = 5 * 2 • Returns: 10 How it works: • obj.method(5) calls method on instance • Python passes obj as self, 5 as x • Method executes: return x * 2 • Evaluates: 5 * 2 = 10 • Returns: 10 Example: class MyClass: def method(self, x): return x * 2 obj = MyClass() obj.method(5) # 10 (5 * 2) Common uses: • Method parameters: def method(self, x): return x * 2 • Multiple parameters: def method(self, x, y): return x + y • Instance methods • Method arguments Example: If class MyClass: def method(self, x): return x * 2; obj = MyClass(); obj.method(5), then obj.method(5) returns 10 because instance methods can take parameters, and obj.method(5) passes 5 to x, so the method returns 5 * 2 = 10.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __init__(self, x): self.x = x; def get_x(self): return self.x; obj = MyClass(5); obj.get_x()?`, 
    o: ["5", "Error", "None", "0"], 
    c: 0, 
    e: "Method can access instance attributes via self.",
    de: `Methods can access instance attributes via self. If class MyClass: def __init__(self, x): self.x = x; def get_x(self): return self.x; obj = MyClass(5); obj.get_x(), then obj.get_x() returns 5 because the method get_x() accesses the instance attribute self.x. When MyClass(5) is called, __init__ sets self.x = 5, and when obj.get_x() is called, it returns self.x, which is 5. Methods use self to access instance attributes.

Method accesses instance attribute:
• obj.get_x() returns 5
• __init__ sets self.x = 5
• get_x() accesses self.x
• Returns instance attribute value
• Returns: 5

How it works:
• MyClass(5) calls __init__(self, 5)
• __init__ sets self.x = 5
• obj.get_x() calls method on instance
• Method accesses self.x (instance attribute)
• Returns: 5

Example:
class MyClass:
    def __init__(self, x):
        self.x = x
    def get_x(self):
        return self.x
obj = MyClass(5)             # Sets obj.x = 5
obj.get_x()                  # 5 (accesses self.x)

Common uses:
• Accessing attributes: def get_x(self): return self.x
• Getter methods: def get_value(self): return self.value
• Instance methods
• Attribute access

Example: If class MyClass: def __init__(self, x): self.x = x; def get_x(self): return self.x; obj = MyClass(5); obj.get_x(), then obj.get_x() returns 5 because methods can access instance attributes via self, and get_x() returns self.x, which is 5.

Key Concepts:
• Method accesses instance attribute: • obj.get_x() returns 5 • __init__ sets self.x = 5 • get_x() accesses self.x • Returns instance attribute value • Returns: 5 How it works: • MyClass(5) calls __init__(self, 5) • __init__ sets self.x = 5 • obj.get_x() calls method on instance • Method accesses self.x (instance attribute) • Returns: 5 Example: class MyClass: def __init__(self, x): self.x = x def get_x(self): return self.x obj = MyClass(5) # Sets obj.x = 5 obj.get_x() # 5 (accesses self.x) Common uses: • Accessing attributes: def get_x(self): return self.x • Getter methods: def get_value(self): return self.value • Instance methods • Attribute access Example: If class MyClass: def __init__(self, x): self.x = x; def get_x(self): return self.x; obj = MyClass(5); obj.get_x(), then obj.get_x() returns 5 because methods can access instance attributes via self, and get_x() returns self.x, which is 5.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def method(self): return self; obj = MyClass(); obj.method() is obj?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "self in method refers to the instance.",
    de: `self in a method refers to the instance on which the method is called. If class MyClass: def method(self): return self; obj = MyClass(); obj.method() is obj, then obj.method() is obj returns True because self in the method refers to the instance obj. When you call obj.method(), Python passes obj as self, so return self returns obj, and obj.method() is obj checks if the returned value is the same object as obj, which it is.

self refers to instance:
• obj.method() is obj returns True
• obj.method() calls method on instance
• Python passes obj as self
• return self returns obj
• obj.method() is obj checks identity
• Returns: True

How it works:
• obj.method() calls method on instance
• Python passes obj as self argument
• Method executes: return self (returns obj)
• obj.method() is obj checks if same object
• Same object, so returns: True

Example:
class MyClass:
    def method(self):
        return self
obj = MyClass()
obj.method() is obj          # True (self is obj)

Common uses:
• Self reference: def method(self): return self
• Instance identity: self is the instance
• Instance methods
• Object identity

Example: If class MyClass: def method(self): return self; obj = MyClass(); obj.method() is obj, then obj.method() is obj returns True because self in a method refers to the instance on which the method is called, so self is obj.

Key Concepts:
• self refers to instance: • obj.method() is obj returns True • obj.method() calls method on instance • Python passes obj as self • return self returns obj • obj.method() is obj checks identity • Returns: True How it works: • obj.method() calls method on instance • Python passes obj as self argument • Method executes: return self (returns obj) • obj.method() is obj checks if same object • Same object, so returns: True Example: class MyClass: def method(self): return self obj = MyClass() obj.method() is obj # True (self is obj) Common uses: • Self reference: def method(self): return self • Instance identity: self is the instance • Instance methods • Object identity Example: If class MyClass: def method(self): return self; obj = MyClass(); obj.method() is obj, then obj.method() is obj returns True because self in a method refers to the instance on which the method is called, so self is obj.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def method(self, other): return self.x + other.x; obj1 = MyClass(); obj1.x = 1; obj2 = MyClass(); obj2.x = 2; obj1.method(obj2)?`, 
    o: ["3", "1", "2", "Error"], 
    c: 0, 
    e: "Method can take another instance as parameter.",
    de: `Methods can take another instance as a parameter. If class MyClass: def method(self, other): return self.x + other.x; obj1 = MyClass(); obj1.x = 1; obj2 = MyClass(); obj2.x = 2; obj1.method(obj2), then obj1.method(obj2) returns 3 because the method takes another instance (other) as a parameter. When obj1.method(obj2) is called, self refers to obj1 and other refers to obj2, so it returns self.x + other.x = 1 + 2 = 3. This allows methods to interact with other instances of the same class.

Method with other instance:
• obj1.method(obj2) returns 3
• method(self, other) takes another instance
• obj1.method(obj2) passes obj2 as other
• self refers to obj1, other refers to obj2
• Returns self.x + other.x = 1 + 2 = 3

How it works:
• obj1.method(obj2) calls method on obj1
• Python passes obj1 as self, obj2 as other
• Method accesses self.x = 1, other.x = 2
• Method executes: return self.x + other.x
• Evaluates: 1 + 2 = 3
• Returns: 3

Example:
class MyClass:
    def method(self, other):
        return self.x + other.x
obj1 = MyClass(); obj1.x = 1
obj2 = MyClass(); obj2.x = 2
obj1.method(obj2)            # 3 (1 + 2)

Common uses:
• Instance interaction: def method(self, other): return self.x + other.x
• Comparison: def compare(self, other): return self.value > other.value
• Instance methods
• Object interaction

Example: If class MyClass: def method(self, other): return self.x + other.x; obj1 = MyClass(); obj1.x = 1; obj2 = MyClass(); obj2.x = 2; obj1.method(obj2), then obj1.method(obj2) returns 3 because methods can take another instance as a parameter, and self.x + other.x = 1 + 2 = 3.

Key Concepts:
• Method with other instance: • obj1.method(obj2) returns 3 • method(self, other) takes another instance • obj1.method(obj2) passes obj2 as other • self refers to obj1, other refers to obj2 • Returns self.x + other.x = 1 + 2 = 3 How it works: • obj1.method(obj2) calls method on obj1 • Python passes obj1 as self, obj2 as other • Method accesses self.x = 1, other.x = 2 • Method executes: return self.x + other.x • Evaluates: 1 + 2 = 3 • Returns: 3 Example: class MyClass: def method(self, other): return self.x + other.x obj1 = MyClass(); obj1.x = 1 obj2 = MyClass(); obj2.x = 2 obj1.method(obj2) # 3 (1 + 2) Common uses: • Instance interaction: def method(self, other): return self.x + other.x • Comparison: def compare(self, other): return self.value > other.value • Instance methods • Object interaction Example: If class MyClass: def method(self, other): return self.x + other.x; obj1 = MyClass(); obj1.x = 1; obj2 = MyClass(); obj2.x = 2; obj1.method(obj2), then obj1.method(obj2) returns 3 because methods can take another instance as a parameter, and self.x + other.x = 1 + 2 = 3.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def method(self): return 'instance'; obj = MyClass(); MyClass.method?`, 
    o: ["<function MyClass.method>", "Error", "None", "'instance'"], 
    c: 0, 
    e: "Accessing method via class returns function (unbound).",
    de: `Accessing a method via the class returns an unbound function. If class MyClass: def method(self): return 'instance'; obj = MyClass(); MyClass.method, then MyClass.method returns <function MyClass.method> because accessing a method through the class (not an instance) returns the unbound method (function). An unbound method is a function that hasn't been bound to a specific instance - you need to pass the instance as the first argument when calling it. This is different from accessing a method through an instance, which returns a bound method.

Unbound method:
• MyClass.method returns <function MyClass.method>
• Accessing via class returns unbound function
• Unbound method not tied to instance
• Must pass instance as first argument
• Returns: function object

How it works:
• MyClass.method accesses method via class
• Method not bound to instance
• Returns function object (unbound)
• Can be called: MyClass.method(instance)
• Returns: <function MyClass.method>

Example:
class MyClass:
    def method(self):
        return 'instance'
MyClass.method               # <function MyClass.method> (unbound)
obj = MyClass()
MyClass.method(obj)          # 'instance' (pass instance as argument)

Common uses:
• Unbound method: Class.method (function object)
• Method access: Class.method (gets function)
• Instance methods
• Method objects

Example: If class MyClass: def method(self): return 'instance'; obj = MyClass(); MyClass.method, then MyClass.method returns <function MyClass.method> because accessing a method via the class returns an unbound function (not bound to a specific instance).

Key Concepts:
• Unbound method: • MyClass.method returns <function MyClass.method> • Accessing via class returns unbound function • Unbound method not tied to instance • Must pass instance as first argument • Returns: function object How it works: • MyClass.method accesses method via class • Method not bound to instance • Returns function object (unbound) • Can be called: MyClass.method(instance) • Returns: <function MyClass.method> Example: class MyClass: def method(self): return 'instance' MyClass.method # <function MyClass.method> (unbound) obj = MyClass() MyClass.method(obj) # 'instance' (pass instance as argument) Common uses: • Unbound method: Class.method (function object) • Method access: Class.method (gets function) • Instance methods • Method objects Example: If class MyClass: def method(self): return 'instance'; obj = MyClass(); MyClass.method, then MyClass.method returns <function MyClass.method> because accessing a method via the class returns an unbound function (not bound to a specific instance).

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def method(self): return 'instance'; obj = MyClass(); obj.method?`, 
    o: ["<bound method MyClass.method>", "Error", "None", "'instance'"], 
    c: 0, 
    e: "Accessing method via instance returns bound method.",
    de: `Accessing a method via an instance returns a bound method. If class MyClass: def method(self): return 'instance'; obj = MyClass(); obj.method, then obj.method returns <bound method MyClass.method> because accessing a method through an instance returns a bound method - a method that's bound to that specific instance. When you call a bound method, Python automatically passes the instance as self. This is different from accessing a method through the class, which returns an unbound function.

Bound method:
• obj.method returns <bound method MyClass.method>
• Accessing via instance returns bound method
• Bound method tied to instance
• Automatically passes instance as self
• Returns: bound method object

How it works:
• obj.method accesses method via instance
• Method bound to instance obj
• Returns bound method object
• Can be called: obj.method() (no need to pass self)
• Returns: <bound method MyClass.method>

Example:
class MyClass:
    def method(self):
        return 'instance'
obj = MyClass()
obj.method                  # <bound method MyClass.method> (bound)
obj.method()                 # 'instance' (calls bound method)

Common uses:
• Bound method: obj.method (bound to instance)
• Method access: obj.method (gets bound method)
• Instance methods
• Method objects

Example: If class MyClass: def method(self): return 'instance'; obj = MyClass(); obj.method, then obj.method returns <bound method MyClass.method> because accessing a method via an instance returns a bound method (bound to that specific instance).

Key Concepts:
• Bound method: • obj.method returns <bound method MyClass.method> • Accessing via instance returns bound method • Bound method tied to instance • Automatically passes instance as self • Returns: bound method object How it works: • obj.method accesses method via instance • Method bound to instance obj • Returns bound method object • Can be called: obj.method() (no need to pass self) • Returns: <bound method MyClass.method> Example: class MyClass: def method(self): return 'instance' obj = MyClass() obj.method # <bound method MyClass.method> (bound) obj.method() # 'instance' (calls bound method) Common uses: • Bound method: obj.method (bound to instance) • Method access: obj.method (gets bound method) • Instance methods • Method objects Example: If class MyClass: def method(self): return 'instance'; obj = MyClass(); obj.method, then obj.method returns <bound method MyClass.method> because accessing a method via an instance returns a bound method (bound to that specific instance).

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def method(self, x=1): return x; obj = MyClass(); obj.method()?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "Instance method can have default parameters.",
    de: `Instance methods can have default parameters. If class MyClass: def method(self, x=1): return x; obj = MyClass(); obj.method(), then obj.method() returns 1 because the method has a default parameter x=1. When you call obj.method() with no arguments, it uses the default value x=1, so the method returns 1. Default parameters allow you to call methods without providing all arguments.

Instance method with default:
• obj.method() returns 1
• method(self, x=1) has default parameter
• obj.method() uses default x=1
• Method returns x = 1
• Returns: 1

How it works:
• obj.method() calls method on instance
• Python passes obj as self
• No argument provided for x, uses default x=1
• Method executes: return x
• Returns: 1

Example:
class MyClass:
    def method(self, x=1):
        return x
obj = MyClass()
obj.method()                # 1 (uses default x=1)
obj.method(5)                # 5 (overrides default)

Common uses:
• Default parameters: def method(self, x=1): return x
• Optional arguments: def method(self, name='Unknown'): return name
• Instance methods
• Method arguments

Example: If class MyClass: def method(self, x=1): return x; obj = MyClass(); obj.method(), then obj.method() returns 1 because instance methods can have default parameters, and obj.method() uses the default value x=1.

Key Concepts:
• Instance method with default: • obj.method() returns 1 • method(self, x=1) has default parameter • obj.method() uses default x=1 • Method returns x = 1 • Returns: 1 How it works: • obj.method() calls method on instance • Python passes obj as self • No argument provided for x, uses default x=1 • Method executes: return x • Returns: 1 Example: class MyClass: def method(self, x=1): return x obj = MyClass() obj.method() # 1 (uses default x=1) obj.method(5) # 5 (overrides default) Common uses: • Default parameters: def method(self, x=1): return x • Optional arguments: def method(self, name='Unknown'): return name • Instance methods • Method arguments Example: If class MyClass: def method(self, x=1): return x; obj = MyClass(); obj.method(), then obj.method() returns 1 because instance methods can have default parameters, and obj.method() uses the default value x=1.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  
  // 31-40: Class Attributes vs Instance Attributes
  (_i: number) => ({ 
    q: `What is class MyClass: x = 1; MyClass.x?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "Class attribute accessed via class.",
    de: `Class attributes can be accessed directly via the class. If class MyClass: x = 1; MyClass.x, then MyClass.x returns 1 because x = 1 is a class attribute (defined in the class body), and you can access it through the class name. Class attributes belong to the class itself, not to individual instances, so they can be accessed via the class name without creating an instance.

Class attribute via class:
• MyClass.x returns 1
• x = 1 is class attribute (defined in class body)
• Class attributes belong to class
• Accessible via class name: MyClass.x
• Returns: 1

How it works:
• class MyClass: x = 1 creates class with class attribute
• x = 1 stored in class __dict__
• MyClass.x accesses class attribute
• Returns class attribute value
• Returns: 1

Example:
class MyClass: x = 1
MyClass.x                    # 1 (accessed via class)
obj = MyClass()
obj.x                        # 1 (also accessible via instance)

Common uses:
• Class attributes: class MyClass: shared_value = 1
• Constants: class Config: MAX_SIZE = 100
• Class-level data
• Shared attributes

Example: If class MyClass: x = 1; MyClass.x, then MyClass.x returns 1 because class attributes can be accessed directly via the class name, and x = 1 is a class attribute.

Key Concepts:
• Class attribute via class: • MyClass.x returns 1 • x = 1 is class attribute (defined in class body) • Class attributes belong to class • Accessible via class name: MyClass.x • Returns: 1 How it works: • class MyClass: x = 1 creates class with class attribute • x = 1 stored in class __dict__ • MyClass.x accesses class attribute • Returns class attribute value • Returns: 1 Example: class MyClass: x = 1 MyClass.x # 1 (accessed via class) obj = MyClass() obj.x # 1 (also accessible via instance) Common uses: • Class attributes: class MyClass: shared_value = 1 • Constants: class Config: MAX_SIZE = 100 • Class-level data • Shared attributes Example: If class MyClass: x = 1; MyClass.x, then MyClass.x returns 1 because class attributes can be accessed directly via the class name, and x = 1 is a class attribute.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: x = 1; obj = MyClass(); obj.x?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "Instance can access class attribute.",
    de: `Instances can access class attributes. If class MyClass: x = 1; obj = MyClass(); obj.x, then obj.x returns 1 because instances can access class attributes. When you access an attribute on an instance, Python first looks for an instance attribute. If it doesn't find one, it looks for a class attribute. Since obj doesn't have an instance attribute x, it accesses the class attribute x = 1.

Instance accesses class attribute:
• obj.x returns 1
• obj has no instance attribute x
• Python looks for class attribute x
• Finds class attribute x = 1
• Returns: 1

How it works:
• obj = MyClass() creates instance
• obj has no instance attribute x
• obj.x looks for attribute x
• Python searches: instance __dict__ (not found) → class __dict__ (found x = 1)
• Returns class attribute value: 1

Example:
class MyClass: x = 1
obj = MyClass()
obj.x                        # 1 (accesses class attribute)
MyClass.x                    # 1 (same value, accessed via class)

Common uses:
• Accessing class attributes: obj.class_attr (via instance)
• Shared data: all instances share class attributes
• Class-level constants
• Shared state

Example: If class MyClass: x = 1; obj = MyClass(); obj.x, then obj.x returns 1 because instances can access class attributes, and when obj doesn't have an instance attribute x, it accesses the class attribute x = 1.

Key Concepts:
• Instance accesses class attribute: • obj.x returns 1 • obj has no instance attribute x • Python looks for class attribute x • Finds class attribute x = 1 • Returns: 1 How it works: • obj = MyClass() creates instance • obj has no instance attribute x • obj.x looks for attribute x • Python searches: instance __dict__ (not found) → class __dict__ (found x = 1) • Returns class attribute value: 1 Example: class MyClass: x = 1 obj = MyClass() obj.x # 1 (accesses class attribute) MyClass.x # 1 (same value, accessed via class) Common uses: • Accessing class attributes: obj.class_attr (via instance) • Shared data: all instances share class attributes • Class-level constants • Shared state Example: If class MyClass: x = 1; obj = MyClass(); obj.x, then obj.x returns 1 because instances can access class attributes, and when obj doesn't have an instance attribute x, it accesses the class attribute x = 1.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: x = 1; obj = MyClass(); obj.x = 2; MyClass.x?`, 
    o: ["1", "2", "Error", "None"], 
    c: 0, 
    e: "Setting instance attribute doesn't change class attribute.",
    de: `Setting an instance attribute doesn't change the class attribute. If class MyClass: x = 1; obj = MyClass(); obj.x = 2; MyClass.x, then MyClass.x returns 1 because obj.x = 2 creates an instance attribute x = 2 on obj, which shadows (hides) the class attribute, but it doesn't modify the class attribute itself. The class attribute MyClass.x remains 1. Instance attributes and class attributes are separate - modifying one doesn't affect the other.

Instance attribute doesn't change class attribute:
• MyClass.x returns 1
• obj.x = 2 creates instance attribute (doesn't change class attribute)
• Class attribute MyClass.x remains 1
• Instance attribute shadows class attribute
• Returns: 1

How it works:
• obj.x = 2 assigns instance attribute x = 2 to obj
• Instance attribute stored in obj.__dict__
• Class attribute MyClass.x remains in class __dict__
• Instance attribute shadows class attribute for obj
• MyClass.x still returns class attribute: 1

Example:
class MyClass: x = 1
obj = MyClass()
obj.x = 2                    # Creates instance attribute
MyClass.x                    # 1 (class attribute unchanged)
obj.x                        # 2 (instance attribute)

Common uses:
• Instance attributes: obj.attr = value (doesn't affect class)
• Shadowing: instance attribute hides class attribute
• Separate storage
• Attribute independence

Example: If class MyClass: x = 1; obj = MyClass(); obj.x = 2; MyClass.x, then MyClass.x returns 1 because setting an instance attribute doesn't change the class attribute - they are separate, and the class attribute remains 1.

Key Concepts:
• Instance attribute doesn't change class attribute: • MyClass.x returns 1 • obj.x = 2 creates instance attribute (doesn't change class attribute) • Class attribute MyClass.x remains 1 • Instance attribute shadows class attribute • Returns: 1 How it works: • obj.x = 2 assigns instance attribute x = 2 to obj • Instance attribute stored in obj.__dict__ • Class attribute MyClass.x remains in class __dict__ • Instance attribute shadows class attribute for obj • MyClass.x still returns class attribute: 1 Example: class MyClass: x = 1 obj = MyClass() obj.x = 2 # Creates instance attribute MyClass.x # 1 (class attribute unchanged) obj.x # 2 (instance attribute) Common uses: • Instance attributes: obj.attr = value (doesn't affect class) • Shadowing: instance attribute hides class attribute • Separate storage • Attribute independence Example: If class MyClass: x = 1; obj = MyClass(); obj.x = 2; MyClass.x, then MyClass.x returns 1 because setting an instance attribute doesn't change the class attribute - they are separate, and the class attribute remains 1.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: x = 1; obj = MyClass(); obj.x = 2; obj.x?`, 
    o: ["2", "1", "Error", "None"], 
    c: 0, 
    e: "Instance attribute shadows class attribute.",
    de: `Instance attributes shadow (hide) class attributes. If class MyClass: x = 1; obj = MyClass(); obj.x = 2; obj.x, then obj.x returns 2 because obj.x = 2 creates an instance attribute x = 2 on obj, which shadows the class attribute x = 1. When you access obj.x, Python first looks for an instance attribute, finds x = 2, and returns it without checking the class attribute. The instance attribute takes precedence over the class attribute.

Instance attribute shadows class:
• obj.x returns 2
• obj.x = 2 creates instance attribute x = 2
• Instance attribute shadows class attribute x = 1
• obj.x returns instance attribute (not class attribute)
• Returns: 2

How it works:
• obj.x = 2 assigns instance attribute x = 2 to obj
• Instance attribute stored in obj.__dict__
• obj.x looks for attribute x
• Python searches: instance __dict__ (finds x = 2) → returns 2
• Class attribute x = 1 is shadowed (not accessed)

Example:
class MyClass: x = 1
obj = MyClass()
obj.x = 2                    # Creates instance attribute (shadows class)
obj.x                        # 2 (instance attribute, not class attribute)
MyClass.x                    # 1 (class attribute unchanged)

Common uses:
• Shadowing: instance attribute hides class attribute
• Instance-specific values: obj.attr = value (overrides class)
• Attribute precedence
• Instance attributes

Example: If class MyClass: x = 1; obj = MyClass(); obj.x = 2; obj.x, then obj.x returns 2 because instance attributes shadow class attributes, and obj.x = 2 creates an instance attribute that takes precedence over the class attribute.

Key Concepts:
• Instance attribute shadows class: • obj.x returns 2 • obj.x = 2 creates instance attribute x = 2 • Instance attribute shadows class attribute x = 1 • obj.x returns instance attribute (not class attribute) • Returns: 2 How it works: • obj.x = 2 assigns instance attribute x = 2 to obj • Instance attribute stored in obj.__dict__ • obj.x looks for attribute x • Python searches: instance __dict__ (finds x = 2) → returns 2 • Class attribute x = 1 is shadowed (not accessed) Example: class MyClass: x = 1 obj = MyClass() obj.x = 2 # Creates instance attribute (shadows class) obj.x # 2 (instance attribute, not class attribute) MyClass.x # 1 (class attribute unchanged) Common uses: • Shadowing: instance attribute hides class attribute • Instance-specific values: obj.attr = value (overrides class) • Attribute precedence • Instance attributes Example: If class MyClass: x = 1; obj = MyClass(); obj.x = 2; obj.x, then obj.x returns 2 because instance attributes shadow class attributes, and obj.x = 2 creates an instance attribute that takes precedence over the class attribute.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: x = 1; obj1 = MyClass(); obj2 = MyClass(); obj1.x = 2; obj2.x?`, 
    o: ["1", "2", "Error", "None"], 
    c: 0, 
    e: "Instance attributes are independent per instance.",
    de: `Instance attributes are independent for each instance. If class MyClass: x = 1; obj1 = MyClass(); obj2 = MyClass(); obj1.x = 2; obj2.x, then obj2.x returns 1 because instance attributes are stored separately for each instance. Setting obj1.x = 2 only affects obj1 - it creates an instance attribute on obj1 that shadows the class attribute. obj2 still accesses the class attribute x = 1 because it doesn't have its own instance attribute x.

Instance attributes independent:
• obj2.x returns 1
• obj1.x = 2 only affects obj1
• obj2 has no instance attribute x
• obj2.x accesses class attribute x = 1
• Returns: 1

How it works:
• obj1.x = 2 creates instance attribute on obj1 only
• obj2 has no instance attribute x
• obj2.x looks for attribute x
• Python searches: obj2.__dict__ (not found) → class __dict__ (finds x = 1)
• Returns class attribute: 1

Example:
class MyClass: x = 1
obj1 = MyClass(); obj2 = MyClass()
obj1.x = 2                   # Only affects obj1
obj1.x                       # 2 (instance attribute)
obj2.x                       # 1 (class attribute)

Common uses:
• Independent instances: each instance has own attributes
• Instance-specific data: obj1.attr = value1, obj2.attr = value2
• Instance attributes
• Object independence

Example: If class MyClass: x = 1; obj1 = MyClass(); obj2 = MyClass(); obj1.x = 2; obj2.x, then obj2.x returns 1 because instance attributes are independent per instance, and obj1.x = 2 only affects obj1, so obj2 still accesses the class attribute x = 1.

Key Concepts:
• Instance attributes independent: • obj2.x returns 1 • obj1.x = 2 only affects obj1 • obj2 has no instance attribute x • obj2.x accesses class attribute x = 1 • Returns: 1 How it works: • obj1.x = 2 creates instance attribute on obj1 only • obj2 has no instance attribute x • obj2.x looks for attribute x • Python searches: obj2.__dict__ (not found) → class __dict__ (finds x = 1) • Returns class attribute: 1 Example: class MyClass: x = 1 obj1 = MyClass(); obj2 = MyClass() obj1.x = 2 # Only affects obj1 obj1.x # 2 (instance attribute) obj2.x # 1 (class attribute) Common uses: • Independent instances: each instance has own attributes • Instance-specific data: obj1.attr = value1, obj2.attr = value2 • Instance attributes • Object independence Example: If class MyClass: x = 1; obj1 = MyClass(); obj2 = MyClass(); obj1.x = 2; obj2.x, then obj2.x returns 1 because instance attributes are independent per instance, and obj1.x = 2 only affects obj1, so obj2 still accesses the class attribute x = 1.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: x = []; obj1 = MyClass(); obj2 = MyClass(); obj1.x.append(1); obj2.x?`, 
    o: ["[1]", "[]", "Error", "None"], 
    c: 0, 
    e: "Mutable class attributes are shared by all instances.",
    de: `Mutable class attributes (like lists) are shared by all instances. If class MyClass: x = []; obj1 = MyClass(); obj2 = MyClass(); obj1.x.append(1); obj2.x, then obj2.x returns [1] because x = [] is a mutable class attribute (a list), and all instances share the same list object. When obj1.x.append(1) modifies the list, it modifies the shared list, so obj2.x also sees the change. This is a common pitfall - mutable class attributes should typically be initialized in __init__ instead.

Mutable class attributes shared:
• obj2.x returns [1]
• x = [] is mutable class attribute (list)
• All instances share same list object
• obj1.x.append(1) modifies shared list
• obj2.x sees same modified list
• Returns: [1]

How it works:
• x = [] creates class attribute (list object)
• obj1 and obj2 both reference same list object
• obj1.x.append(1) modifies shared list
• obj2.x accesses same list object
• Returns: [1] (modified list)

Example:
class MyClass: x = []  # Mutable class attribute (shared!)
obj1 = MyClass(); obj2 = MyClass()
obj1.x.append(1)        # Modifies shared list
obj2.x                  # [1] (same list, modified)

Common uses:
• Understanding pitfalls: mutable class attributes shared
• Best practice: initialize mutable attributes in __init__
• Shared state
• Mutable attributes

Example: If class MyClass: x = []; obj1 = MyClass(); obj2 = MyClass(); obj1.x.append(1); obj2.x, then obj2.x returns [1] because mutable class attributes are shared by all instances, so modifying the list through one instance affects all instances.

Key Concepts:
• Mutable class attributes shared: • obj2.x returns [1] • x = [] is mutable class attribute (list) • All instances share same list object • obj1.x.append(1) modifies shared list • obj2.x sees same modified list • Returns: [1] How it works: • x = [] creates class attribute (list object) • obj1 and obj2 both reference same list object • obj1.x.append(1) modifies shared list • obj2.x accesses same list object • Returns: [1] (modified list) Example: class MyClass: x = [] # Mutable class attribute (shared!) obj1 = MyClass(); obj2 = MyClass() obj1.x.append(1) # Modifies shared list obj2.x # [1] (same list, modified) Common uses: • Understanding pitfalls: mutable class attributes shared • Best practice: initialize mutable attributes in __init__ • Shared state • Mutable attributes Example: If class MyClass: x = []; obj1 = MyClass(); obj2 = MyClass(); obj1.x.append(1); obj2.x, then obj2.x returns [1] because mutable class attributes are shared by all instances, so modifying the list through one instance affects all instances.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: x = 1; MyClass.x = 2; obj = MyClass(); obj.x?`, 
    o: ["2", "1", "Error", "None"], 
    c: 0, 
    e: "Changing class attribute affects all instances (if not shadowed).",
    de: `Changing a class attribute affects all instances (if they don't have their own instance attribute shadowing it). If class MyClass: x = 1; MyClass.x = 2; obj = MyClass(); obj.x, then obj.x returns 2 because MyClass.x = 2 changes the class attribute, and since obj doesn't have an instance attribute x (it was just created), it accesses the class attribute, which is now 2. All instances that don't shadow the class attribute will see the new value.

Changing class attribute affects instances:
• obj.x returns 2
• MyClass.x = 2 changes class attribute
• obj has no instance attribute x (just created)
• obj.x accesses class attribute (now 2)
• Returns: 2

How it works:
• MyClass.x = 2 modifies class attribute
• obj = MyClass() creates new instance
• obj has no instance attribute x
• obj.x looks for attribute x
• Python searches: obj.__dict__ (not found) → class __dict__ (finds x = 2)
• Returns class attribute: 2

Example:
class MyClass: x = 1
MyClass.x = 2                # Changes class attribute
obj = MyClass()
obj.x                        # 2 (accesses class attribute)

Common uses:
• Changing class attributes: MyClass.attr = new_value
• Shared updates: change affects all instances (if not shadowed)
• Class-level modifications
• Attribute updates

Example: If class MyClass: x = 1; MyClass.x = 2; obj = MyClass(); obj.x, then obj.x returns 2 because changing a class attribute affects all instances that don't shadow it, and obj accesses the class attribute, which is now 2.

Key Concepts:
• Changing class attribute affects instances: • obj.x returns 2 • MyClass.x = 2 changes class attribute • obj has no instance attribute x (just created) • obj.x accesses class attribute (now 2) • Returns: 2 How it works: • MyClass.x = 2 modifies class attribute • obj = MyClass() creates new instance • obj has no instance attribute x • obj.x looks for attribute x • Python searches: obj.__dict__ (not found) → class __dict__ (finds x = 2) • Returns class attribute: 2 Example: class MyClass: x = 1 MyClass.x = 2 # Changes class attribute obj = MyClass() obj.x # 2 (accesses class attribute) Common uses: • Changing class attributes: MyClass.attr = new_value • Shared updates: change affects all instances (if not shadowed) • Class-level modifications • Attribute updates Example: If class MyClass: x = 1; MyClass.x = 2; obj = MyClass(); obj.x, then obj.x returns 2 because changing a class attribute affects all instances that don't shadow it, and obj accesses the class attribute, which is now 2.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: x = 1; obj = MyClass(); obj.x = 2; del obj.x; obj.x?`, 
    o: ["1", "2", "Error", "None"], 
    c: 0, 
    e: "Deleting instance attribute reveals class attribute.",
    de: `Deleting an instance attribute reveals (unhides) the class attribute. If class MyClass: x = 1; obj = MyClass(); obj.x = 2; del obj.x; obj.x, then obj.x returns 1 because del obj.x deletes the instance attribute x = 2, which was shadowing the class attribute. After deletion, obj no longer has an instance attribute x, so when you access obj.x, Python looks for the class attribute and finds x = 1.

Deleting instance attribute reveals class:
• obj.x returns 1
• del obj.x deletes instance attribute x = 2
• obj no longer has instance attribute x
• obj.x looks for attribute x
• Python finds class attribute x = 1
• Returns: 1

How it works:
• obj.x = 2 creates instance attribute (shadows class)
• del obj.x deletes instance attribute
• obj.__dict__ no longer has 'x'
• obj.x looks for attribute x
• Python searches: obj.__dict__ (not found) → class __dict__ (finds x = 1)
• Returns class attribute: 1

Example:
class MyClass: x = 1
obj = MyClass()
obj.x = 2                    # Creates instance attribute (shadows)
del obj.x                    # Deletes instance attribute
obj.x                        # 1 (now accesses class attribute)

Common uses:
• Revealing class attributes: del obj.attr (removes shadowing)
• Attribute deletion: del obj.attr (removes instance attribute)
• Attribute management
• Shadowing control

Example: If class MyClass: x = 1; obj = MyClass(); obj.x = 2; del obj.x; obj.x, then obj.x returns 1 because deleting an instance attribute reveals the class attribute, and after del obj.x, obj accesses the class attribute x = 1.

Key Concepts:
• Deleting instance attribute reveals class: • obj.x returns 1 • del obj.x deletes instance attribute x = 2 • obj no longer has instance attribute x • obj.x looks for attribute x • Python finds class attribute x = 1 • Returns: 1 How it works: • obj.x = 2 creates instance attribute (shadows class) • del obj.x deletes instance attribute • obj.__dict__ no longer has 'x' • obj.x looks for attribute x • Python searches: obj.__dict__ (not found) → class __dict__ (finds x = 1) • Returns class attribute: 1 Example: class MyClass: x = 1 obj = MyClass() obj.x = 2 # Creates instance attribute (shadows) del obj.x # Deletes instance attribute obj.x # 1 (now accesses class attribute) Common uses: • Revealing class attributes: del obj.attr (removes shadowing) • Attribute deletion: del obj.attr (removes instance attribute) • Attribute management • Shadowing control Example: If class MyClass: x = 1; obj = MyClass(); obj.x = 2; del obj.x; obj.x, then obj.x returns 1 because deleting an instance attribute reveals the class attribute, and after del obj.x, obj accesses the class attribute x = 1.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: x = 1; obj = MyClass(); MyClass.x = 2; obj.x?`, 
    o: ["2", "1", "Error", "None"], 
    c: 0, 
    e: "Changing class attribute affects instance (if not shadowed).",
    de: `Changing a class attribute affects instances that don't shadow it. If class MyClass: x = 1; obj = MyClass(); MyClass.x = 2; obj.x, then obj.x returns 2 because MyClass.x = 2 changes the class attribute, and since obj doesn't have an instance attribute x (it was just created), it accesses the class attribute, which is now 2. If obj had an instance attribute x that shadowed the class attribute, changing the class attribute wouldn't affect obj.x.

Changing class affects instance:
• obj.x returns 2
• MyClass.x = 2 changes class attribute
• obj has no instance attribute x (not shadowed)
• obj.x accesses class attribute (now 2)
• Returns: 2

How it works:
• obj = MyClass() creates instance (no instance attribute x)
• MyClass.x = 2 modifies class attribute
• obj.x looks for attribute x
• Python searches: obj.__dict__ (not found) → class __dict__ (finds x = 2)
• Returns class attribute: 2

Example:
class MyClass: x = 1
obj = MyClass()              # No instance attribute x
MyClass.x = 2                # Changes class attribute
obj.x                        # 2 (accesses class attribute)

Common uses:
• Class attribute updates: MyClass.attr = new_value
• Shared changes: affects instances (if not shadowed)
• Class-level modifications
• Attribute updates

Example: If class MyClass: x = 1; obj = MyClass(); MyClass.x = 2; obj.x, then obj.x returns 2 because changing a class attribute affects instances that don't shadow it, and obj accesses the class attribute, which is now 2.

Key Concepts:
• Changing class affects instance: • obj.x returns 2 • MyClass.x = 2 changes class attribute • obj has no instance attribute x (not shadowed) • obj.x accesses class attribute (now 2) • Returns: 2 How it works: • obj = MyClass() creates instance (no instance attribute x) • MyClass.x = 2 modifies class attribute • obj.x looks for attribute x • Python searches: obj.__dict__ (not found) → class __dict__ (finds x = 2) • Returns class attribute: 2 Example: class MyClass: x = 1 obj = MyClass() # No instance attribute x MyClass.x = 2 # Changes class attribute obj.x # 2 (accesses class attribute) Common uses: • Class attribute updates: MyClass.attr = new_value • Shared changes: affects instances (if not shadowed) • Class-level modifications • Attribute updates Example: If class MyClass: x = 1; obj = MyClass(); MyClass.x = 2; obj.x, then obj.x returns 2 because changing a class attribute affects instances that don't shadow it, and obj accesses the class attribute, which is now 2.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: x = 1; obj = MyClass(); obj.x = 2; MyClass.x = 3; obj.x?`, 
    o: ["2", "3", "Error", "None"], 
    c: 0, 
    e: "Instance attribute shadows class attribute, changes don't affect it.",
    de: `Instance attributes that shadow class attributes are independent - changing the class attribute doesn't affect them. If class MyClass: x = 1; obj = MyClass(); obj.x = 2; MyClass.x = 3; obj.x, then obj.x returns 2 because obj.x = 2 creates an instance attribute that shadows the class attribute. When you change MyClass.x = 3, it only affects the class attribute, not the instance attribute. Since obj has its own instance attribute x = 2, it continues to return 2, not the class attribute value 3.

Instance attribute independent:
• obj.x returns 2
• obj.x = 2 creates instance attribute (shadows class)
• MyClass.x = 3 changes class attribute (doesn't affect instance)
• obj.x returns instance attribute (not class attribute)
• Returns: 2

How it works:
• obj.x = 2 creates instance attribute x = 2
• Instance attribute shadows class attribute
• MyClass.x = 3 modifies class attribute (now 3)
• obj.x looks for attribute x
• Python searches: obj.__dict__ (finds x = 2) → returns 2
• Class attribute x = 3 is shadowed (not accessed)

Example:
class MyClass: x = 1
obj = MyClass()
obj.x = 2                    # Creates instance attribute (shadows)
MyClass.x = 3                # Changes class attribute
obj.x                        # 2 (instance attribute, not class attribute)
MyClass.x                    # 3 (class attribute)

Common uses:
• Shadowing: instance attribute hides class attribute
• Independent values: instance attribute independent of class
• Attribute precedence
• Instance attributes

Example: If class MyClass: x = 1; obj = MyClass(); obj.x = 2; MyClass.x = 3; obj.x, then obj.x returns 2 because instance attributes that shadow class attributes are independent, and changing the class attribute doesn't affect the instance attribute.

Key Concepts:
• Instance attribute independent: • obj.x returns 2 • obj.x = 2 creates instance attribute (shadows class) • MyClass.x = 3 changes class attribute (doesn't affect instance) • obj.x returns instance attribute (not class attribute) • Returns: 2 How it works: • obj.x = 2 creates instance attribute x = 2 • Instance attribute shadows class attribute • MyClass.x = 3 modifies class attribute (now 3) • obj.x looks for attribute x • Python searches: obj.__dict__ (finds x = 2) → returns 2 • Class attribute x = 3 is shadowed (not accessed) Example: class MyClass: x = 1 obj = MyClass() obj.x = 2 # Creates instance attribute (shadows) MyClass.x = 3 # Changes class attribute obj.x # 2 (instance attribute, not class attribute) MyClass.x # 3 (class attribute) Common uses: • Shadowing: instance attribute hides class attribute • Independent values: instance attribute independent of class • Attribute precedence • Instance attributes Example: If class MyClass: x = 1; obj = MyClass(); obj.x = 2; MyClass.x = 3; obj.x, then obj.x returns 2 because instance attributes that shadow class attributes are independent, and changing the class attribute doesn't affect the instance attribute.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  
  // 41-50: Class Methods and Static Methods
  (_i: number) => ({ 
    q: `What is class MyClass: @classmethod; def method(cls): return cls; MyClass.method()?`, 
    o: ["<class '__main__.MyClass'>", "Error", "None", "MyClass"], 
    c: 0, 
    e: "@classmethod decorator, cls refers to class.",
    de: `The @classmethod decorator creates a class method that receives the class as the first argument. If class MyClass: @classmethod; def method(cls): return cls; MyClass.method(), then MyClass.method() returns <class '__main__.MyClass'> because @classmethod makes method() a class method, and cls refers to the class MyClass. When you call MyClass.method(), Python automatically passes MyClass as the cls argument, so return cls returns the class object.

@classmethod decorator:
• MyClass.method() returns <class '__main__.MyClass'>
• @classmethod decorator creates class method
• cls parameter refers to class (automatically passed)
• MyClass.method() passes MyClass as cls
• Returns: class object

How it works:
• @classmethod decorator modifies method
• method(cls) receives class as first argument
• MyClass.method() calls class method
• Python passes MyClass as cls argument
• Method executes: return cls
• Returns: <class '__main__.MyClass'>

Example:
class MyClass:
    @classmethod
    def method(cls):
        return cls
MyClass.method()             # <class '__main__.MyClass'> (cls is MyClass)

Common uses:
• Class methods: @classmethod def method(cls): return cls
• Factory methods: @classmethod def create(cls): return cls()
• Class-level operations
• Alternative constructors

Example: If class MyClass: @classmethod; def method(cls): return cls; MyClass.method(), then MyClass.method() returns <class '__main__.MyClass'> because @classmethod creates a class method that receives the class as the first argument (cls), and return cls returns the class object.

Key Concepts:
• @classmethod decorator: • MyClass.method() returns <class '__main__.MyClass'> • @classmethod decorator creates class method • cls parameter refers to class (automatically passed) • MyClass.method() passes MyClass as cls • Returns: class object How it works: • @classmethod decorator modifies method • method(cls) receives class as first argument • MyClass.method() calls class method • Python passes MyClass as cls argument • Method executes: return cls • Returns: <class '__main__.MyClass'> Example: class MyClass: @classmethod def method(cls): return cls MyClass.method() # <class '__main__.MyClass'> (cls is MyClass) Common uses: • Class methods: @classmethod def method(cls): return cls • Factory methods: @classmethod def create(cls): return cls() • Class-level operations • Alternative constructors Example: If class MyClass: @classmethod; def method(cls): return cls; MyClass.method(), then MyClass.method() returns <class '__main__.MyClass'> because @classmethod creates a class method that receives the class as the first argument (cls), and return cls returns the class object.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: @classmethod; def method(cls): return cls; obj = MyClass(); obj.method()?`, 
    o: ["<class '__main__.MyClass'>", "Error", "None", "obj"], 
    c: 0, 
    e: "Class method called on instance still receives class.",
    de: `Class methods can be called on instances, but they still receive the class as the first argument, not the instance. If class MyClass: @classmethod; def method(cls): return cls; obj = MyClass(); obj.method(), then obj.method() returns <class '__main__.MyClass'> because even though you call the method on an instance (obj), @classmethod ensures that cls receives the class MyClass, not the instance obj. This is different from instance methods, which receive the instance as self.

Class method on instance:
• obj.method() returns <class '__main__.MyClass'>
• obj.method() calls class method on instance
• @classmethod ensures cls receives class (not instance)
• cls is MyClass (not obj)
• Returns: class object

How it works:
• obj.method() calls class method on instance
• @classmethod decorator ensures class passed as cls
• Python passes MyClass as cls (not obj)
• Method executes: return cls
• Returns: <class '__main__.MyClass'>

Example:
class MyClass:
    @classmethod
    def method(cls):
        return cls
obj = MyClass()
obj.method()                 # <class '__main__.MyClass'> (cls is class, not instance)
MyClass.method()             # <class '__main__.MyClass'> (same result)

Common uses:
• Class methods: can be called on instance or class
• Consistent behavior: obj.method() and Class.method() same
• Class-level operations
• Alternative constructors

Example: If class MyClass: @classmethod; def method(cls): return cls; obj = MyClass(); obj.method(), then obj.method() returns <class '__main__.MyClass'> because class methods called on instances still receive the class as the first argument, not the instance.

Key Concepts:
• Class method on instance: • obj.method() returns <class '__main__.MyClass'> • obj.method() calls class method on instance • @classmethod ensures cls receives class (not instance) • cls is MyClass (not obj) • Returns: class object How it works: • obj.method() calls class method on instance • @classmethod decorator ensures class passed as cls • Python passes MyClass as cls (not obj) • Method executes: return cls • Returns: <class '__main__.MyClass'> Example: class MyClass: @classmethod def method(cls): return cls obj = MyClass() obj.method() # <class '__main__.MyClass'> (cls is class, not instance) MyClass.method() # <class '__main__.MyClass'> (same result) Common uses: • Class methods: can be called on instance or class • Consistent behavior: obj.method() and Class.method() same • Class-level operations • Alternative constructors Example: If class MyClass: @classmethod; def method(cls): return cls; obj = MyClass(); obj.method(), then obj.method() returns <class '__main__.MyClass'> because class methods called on instances still receive the class as the first argument, not the instance.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: @staticmethod; def method(): return 1; MyClass.method()?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "@staticmethod doesn't require self or cls.",
    de: `The @staticmethod decorator creates a static method that doesn't require self or cls. If class MyClass: @staticmethod; def method(): return 1; MyClass.method(), then MyClass.method() returns 1 because @staticmethod makes method() a static method that doesn't receive self or cls - it's just a regular function that happens to be defined inside a class. Static methods are called like regular functions, but they're accessed through the class.

@staticmethod decorator:
• MyClass.method() returns 1
• @staticmethod decorator creates static method
• method() doesn't receive self or cls
• Called like regular function
• Returns: 1

How it works:
• @staticmethod decorator modifies method
• method() has no self or cls parameter
• MyClass.method() calls static method
• No automatic arguments passed
• Method executes: return 1
• Returns: 1

Example:
class MyClass:
    @staticmethod
    def method():
        return 1
MyClass.method()             # 1 (no self or cls needed)

Common uses:
• Static methods: @staticmethod def method(): return value
• Utility functions: @staticmethod def helper(): ...
• No instance/class needed
• Regular functions in class namespace

Example: If class MyClass: @staticmethod; def method(): return 1; MyClass.method(), then MyClass.method() returns 1 because @staticmethod creates a static method that doesn't require self or cls - it's just a regular function accessed through the class.

Key Concepts:
• • No instance/class needed • Regular functions in class namespace Example: If class MyClass: @staticmethod; def method(): return 1; MyClass.method(), then MyClass.method() returns 1 because @staticmethod creates a static method that doesn't require self or cls - it's just a regular function accessed through the class.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: @staticmethod; def method(): return 1; obj = MyClass(); obj.method()?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "Static method can be called on instance or class.",
    de: `Static methods can be called on both instances and classes. If class MyClass: @staticmethod; def method(): return 1; obj = MyClass(); obj.method(), then obj.method() returns 1 because static methods can be called on instances just like they can be called on classes. When you call a static method on an instance, it works the same way as calling it on the class - no instance or class is passed as an argument. Static methods are essentially regular functions that are accessed through the class namespace.

Static method on instance:
• obj.method() returns 1
• obj.method() calls static method on instance
• Static method doesn't receive instance or class
• Works same as MyClass.method()
• Returns: 1

How it works:
• obj.method() calls static method on instance
• @staticmethod ensures no automatic arguments
• No self or cls passed
• Method executes: return 1
• Returns: 1 (same as MyClass.method())

Example:
class MyClass:
    @staticmethod
    def method():
        return 1
obj = MyClass()
obj.method()                 # 1 (works on instance)
MyClass.method()             # 1 (works on class, same result)

Common uses:
• Static methods: can be called on instance or class
• Utility functions: @staticmethod def helper(): ...
• No instance/class needed
• Regular functions in class namespace

Example: If class MyClass: @staticmethod; def method(): return 1; obj = MyClass(); obj.method(), then obj.method() returns 1 because static methods can be called on instances or classes, and they work the same way in both cases.

Key Concepts:
• • No instance/class needed • Regular functions in class namespace Example: If class MyClass: @staticmethod; def method(): return 1; obj = MyClass(); obj.method(), then obj.method() returns 1 because static methods can be called on instances or classes, and they work the same way in both cases.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is the difference between @classmethod and @staticmethod?`, 
    o: ["classmethod gets cls, staticmethod gets nothing", "No difference", "staticmethod is faster", "classmethod is deprecated"], 
    c: 0, 
    e: "classmethod receives class as first arg, staticmethod receives nothing.",
    de: `The key difference is that @classmethod receives the class as the first argument (cls), while @staticmethod receives nothing. @classmethod def method(cls): receives cls (the class) automatically, allowing it to access class attributes and create instances. @staticmethod def method(): receives no automatic arguments - it's just a regular function. Use @classmethod when you need access to the class, and @staticmethod when you don't need the class or instance.

Difference:
• @classmethod gets cls (class as first argument)
• @staticmethod gets nothing (no automatic arguments)
• classmethod can access class: cls.attr
• staticmethod is just a regular function
• Use classmethod for class operations, staticmethod for utilities

How it works:
• @classmethod: def method(cls): (cls is class, automatically passed)
• @staticmethod: def method(): (no automatic arguments)
• classmethod(cls): can use cls to access class attributes
• staticmethod(): just a regular function in class namespace

Example:
class MyClass:
    x = 1
    @classmethod
    def get_x(cls):
        return cls.x  # Can access class via cls
    @staticmethod
    def add(a, b):
        return a + b  # No cls or self needed

Common uses:
• @classmethod: factory methods, class-level operations
• @staticmethod: utility functions, no class/instance needed
• Method types
• Decorators

Example: The difference is that @classmethod receives the class as the first argument (cls), allowing access to class attributes, while @staticmethod receives nothing and is just a regular function in the class namespace.

Key Concepts:
• Difference: • @classmethod gets cls (class as first argument) • @staticmethod gets nothing (no automatic arguments) • classmethod can access class: cls.attr • staticmethod is just a regular function • Use classmethod for class operations, staticmethod for utilities How it works: • @classmethod: def method(cls): (cls is class, automatically passed) • @staticmethod: def method(): (no automatic arguments) • classmethod(cls): can use cls to access class attributes • staticmethod(): just a regular function in class namespace Example: class MyClass: x = 1 @classmethod def get_x(cls): return cls.x # Can access class via cls @staticmethod def add(a, b): return a + b # No cls or self needed Common uses: • @classmethod: factory methods, class-level operations • @staticmethod: utility functions, no class/instance needed • Method types • Decorators Example: The difference is that @classmethod receives the class as the first argument (cls), allowing access to class attributes, while @staticmethod receives nothing and is just a regular function in the class namespace.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: x = 1; @classmethod; def get_x(cls): return cls.x; MyClass.get_x()?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "Class method can access class attributes via cls.",
    de: `Class methods can access class attributes via the cls parameter. If class MyClass: x = 1; @classmethod; def get_x(cls): return cls.x; MyClass.get_x(), then MyClass.get_x() returns 1 because the class method get_x() receives cls (the class MyClass) as the first argument, and cls.x accesses the class attribute x = 1. This is the main advantage of @classmethod - it allows methods to access and work with class-level data.

Class method accesses class attribute:
• MyClass.get_x() returns 1
• @classmethod makes get_x() a class method
• cls parameter receives MyClass (the class)
• cls.x accesses class attribute x = 1
• Returns: 1

How it works:
• MyClass.get_x() calls class method
• Python passes MyClass as cls argument
• Method executes: return cls.x
• cls.x accesses class attribute x = 1
• Returns: 1

Example:
class MyClass:
    x = 1
    @classmethod
    def get_x(cls):
        return cls.x  # Accesses class attribute via cls
MyClass.get_x()       # 1 (cls.x accesses class attribute)

Common uses:
• Accessing class attributes: @classmethod def get_attr(cls): return cls.attr
• Class-level operations: @classmethod def class_operation(cls): ...
• Class methods
• Class attribute access

Example: If class MyClass: x = 1; @classmethod; def get_x(cls): return cls.x; MyClass.get_x(), then MyClass.get_x() returns 1 because class methods can access class attributes via cls, and cls.x accesses the class attribute x = 1.

Key Concepts:
• • Class methods • Class attribute access Example: If class MyClass: x = 1; @classmethod; def get_x(cls): return cls.x; MyClass.get_x(), then MyClass.get_x() returns 1 because class methods can access class attributes via cls, and cls.x accesses the class attribute x = 1.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: @classmethod; def create(cls): return cls(); obj = MyClass.create()?`, 
    o: ["Creates instance", "Error", "None", "MyClass"], 
    c: 0, 
    e: "Class method can be used as factory method.",
    de: `Class methods can be used as factory methods to create instances. If class MyClass: @classmethod; def create(cls): return cls(); obj = MyClass.create(), then MyClass.create() creates an instance because the class method create() receives cls (the class MyClass) as the first argument, and cls() calls the class constructor, creating a new instance. This is a common pattern for alternative constructors or factory methods that create instances in different ways.

Class method as factory:
• MyClass.create() creates instance
• @classmethod makes create() a class method
• cls parameter receives MyClass (the class)
• cls() calls class constructor (creates instance)
• Returns: instance object

How it works:
• MyClass.create() calls class method
• Python passes MyClass as cls argument
• Method executes: return cls()
• cls() calls MyClass() (creates instance)
• Returns: new instance object

Example:
class MyClass:
    @classmethod
    def create(cls):
        return cls()  # Creates instance using cls
obj = MyClass.create()  # Creates instance (factory method)

Common uses:
• Factory methods: @classmethod def create(cls): return cls()
• Alternative constructors: @classmethod def from_string(cls, s): ...
• Class methods
• Instance creation

Example: If class MyClass: @classmethod; def create(cls): return cls(); obj = MyClass.create(), then MyClass.create() creates an instance because class methods can be used as factory methods, and cls() calls the class constructor to create a new instance.

Key Concepts:
• • Class methods • Instance creation Example: If class MyClass: @classmethod; def create(cls): return cls(); obj = MyClass.create(), then MyClass.create() creates an instance because class methods can be used as factory methods, and cls() calls the class constructor to create a new instance.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: @staticmethod; def add(x, y): return x + y; MyClass.add(1, 2)?`, 
    o: ["3", "Error", "None", "0"], 
    c: 0, 
    e: "Static method can take regular parameters.",
    de: `Static methods can take regular parameters just like regular functions. If class MyClass: @staticmethod; def add(x, y): return x + y; MyClass.add(1, 2), then MyClass.add(1, 2) returns 3 because static methods are essentially regular functions - they can take any parameters you define. The @staticmethod decorator doesn't restrict what parameters the method can have - it just prevents self or cls from being automatically passed.

Static method with parameters:
• MyClass.add(1, 2) returns 3
• @staticmethod makes add() a static method
• add(x, y) takes regular parameters
• MyClass.add(1, 2) passes 1 and 2 to x and y
• Returns: 1 + 2 = 3

How it works:
• MyClass.add(1, 2) calls static method
• No self or cls automatically passed
• Arguments 1 and 2 passed to x and y
• Method executes: return x + y
• Evaluates: 1 + 2 = 3
• Returns: 3

Example:
class MyClass:
    @staticmethod
    def add(x, y):
        return x + y
MyClass.add(1, 2)            # 3 (regular parameters work)

Common uses:
• Static methods: @staticmethod def helper(x, y): return x + y
• Utility functions: @staticmethod def calculate(a, b): ...
• Regular parameters
• No self/cls needed

Example: If class MyClass: @staticmethod; def add(x, y): return x + y; MyClass.add(1, 2), then MyClass.add(1, 2) returns 3 because static methods can take regular parameters, and they work just like regular functions.

Key Concepts:
• • Regular parameters • No self/cls needed Example: If class MyClass: @staticmethod; def add(x, y): return x + y; MyClass.add(1, 2), then MyClass.add(1, 2) returns 3 because static methods can take regular parameters, and they work just like regular functions.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def method(self): return 1; @classmethod; def class_method(cls): return 2; MyClass.class_method()?`, 
    o: ["2", "1", "Error", "None"], 
    c: 0, 
    e: "Class can have both instance and class methods.",
    de: `A class can have both instance methods and class methods. If class MyClass: def method(self): return 1; @classmethod; def class_method(cls): return 2; MyClass.class_method(), then MyClass.class_method() returns 2 because a class can define multiple types of methods. Instance methods (like method(self)) receive the instance as self, while class methods (like class_method(cls)) receive the class as cls. They coexist in the same class and can be called independently.

Both method types:
• MyClass.class_method() returns 2
• Class has instance method: method(self)
• Class has class method: class_method(cls)
• Both methods coexist in same class
• Returns: 2

How it works:
• class MyClass defines both method types
• method(self) is instance method (receives instance)
• class_method(cls) is class method (receives class)
• MyClass.class_method() calls class method
• Returns: 2

Example:
class MyClass:
    def method(self):
        return 1  # Instance method
    @classmethod
    def class_method(cls):
        return 2  # Class method
obj = MyClass()
obj.method()                 # 1 (instance method)
MyClass.class_method()       # 2 (class method)

Common uses:
• Multiple method types: instance methods and class methods
• Flexible design: different methods for different purposes
• Method types
• Class design

Example: If class MyClass: def method(self): return 1; @classmethod; def class_method(cls): return 2; MyClass.class_method(), then MyClass.class_method() returns 2 because a class can have both instance methods and class methods, and they coexist in the same class.

Key Concepts:
• Both method types: • MyClass.class_method() returns 2 • Class has instance method: method(self) • Class has class method: class_method(cls) • Both methods coexist in same class • Returns: 2 How it works: • class MyClass defines both method types • method(self) is instance method (receives instance) • class_method(cls) is class method (receives class) • MyClass.class_method() calls class method • Returns: 2 Example: class MyClass: def method(self): return 1 # Instance method @classmethod def class_method(cls): return 2 # Class method obj = MyClass() obj.method() # 1 (instance method) MyClass.class_method() # 2 (class method) Common uses: • Multiple method types: instance methods and class methods • Flexible design: different methods for different purposes • Method types • Class design Example: If class MyClass: def method(self): return 1; @classmethod; def class_method(cls): return 2; MyClass.class_method(), then MyClass.class_method() returns 2 because a class can have both instance methods and class methods, and they coexist in the same class.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: @staticmethod; def method(): return 'static'; obj = MyClass(); obj.method()?`, 
    o: ["'static'", "Error", "None", "'instance'"], 
    c: 0, 
    e: "Static method called on instance works same as on class.",
    de: `Static methods work the same whether called on an instance or the class. If class MyClass: @staticmethod; def method(): return 'static'; obj = MyClass(); obj.method(), then obj.method() returns 'static' because static methods don't receive self or cls, so calling them on an instance works exactly the same as calling them on the class. The instance is ignored - the static method is just a regular function accessed through the class namespace.

Static method on instance:
• obj.method() returns 'static'
• obj.method() calls static method on instance
• Static method doesn't use instance
• Works same as MyClass.method()
• Returns: 'static'

How it works:
• obj.method() calls static method on instance
• @staticmethod ensures no self or cls passed
• Instance obj is ignored
• Method executes: return 'static'
• Returns: 'static' (same as MyClass.method())

Example:
class MyClass:
    @staticmethod
    def method():
        return 'static'
obj = MyClass()
obj.method()                 # 'static' (works on instance)
MyClass.method()             # 'static' (works on class, same result)

Common uses:
• Static methods: work on instance or class
• Utility functions: @staticmethod def helper(): ...
• No instance/class needed
• Consistent behavior

Example: If class MyClass: @staticmethod; def method(): return 'static'; obj = MyClass(); obj.method(), then obj.method() returns 'static' because static methods called on instances work the same as when called on the class - the instance is ignored.

Key Concepts:
• • No instance/class needed • Consistent behavior Example: If class MyClass: @staticmethod; def method(): return 'static'; obj = MyClass(); obj.method(), then obj.method() returns 'static' because static methods called on instances work the same as when called on the class - the instance is ignored.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  
  // 51-60: Special Methods (Magic Methods)
  (_i: number) => ({ 
    q: `What is class MyClass: def __str__(self): return 'str'; obj = MyClass(); str(obj)?`, 
    o: ["'str'", "Error", "None", "'MyClass'"], 
    c: 0, 
    e: "__str__ defines string representation for str().",
    de: `The __str__ method defines the string representation of an object for str() and print(). If class MyClass: def __str__(self): return 'str'; obj = MyClass(); str(obj), then str(obj) returns 'str' because __str__ is a special method that's called when you use str() or print() on an object. It should return a human-readable string representation of the object.

__str__ method:
• str(obj) returns 'str'
• __str__ defines string representation
• Called by str() and print()
• Should return human-readable string
• Returns: 'str'

How it works:
• obj = MyClass() creates instance
• str(obj) calls __str__ method
• __str__ executes: return 'str'
• Returns string representation
• Returns: 'str'

Example:
class MyClass:
    def __str__(self):
        return 'str'
obj = MyClass()
str(obj)                     # 'str' (uses __str__)
print(obj)                   # str (uses __str__)

Common uses:
• String representation: def __str__(self): return 'readable string'
• User-friendly output: print(obj) uses __str__
• Special methods
• Object representation

Example: If class MyClass: def __str__(self): return 'str'; obj = MyClass(); str(obj), then str(obj) returns 'str' because __str__ defines the string representation for str() and print().

Key Concepts:
• __str__ method: • str(obj) returns 'str' • __str__ defines string representation • Called by str() and print() • Should return human-readable string • Returns: 'str' How it works: • obj = MyClass() creates instance • str(obj) calls __str__ method • __str__ executes: return 'str' • Returns string representation • Returns: 'str' Example: class MyClass: def __str__(self): return 'str' obj = MyClass() str(obj) # 'str' (uses __str__) print(obj) # str (uses __str__) Common uses: • String representation: def __str__(self): return 'readable string' • User-friendly output: print(obj) uses __str__ • Special methods • Object representation Example: If class MyClass: def __str__(self): return 'str'; obj = MyClass(); str(obj), then str(obj) returns 'str' because __str__ defines the string representation for str() and print().

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __repr__(self): return 'repr'; obj = MyClass(); repr(obj)?`, 
    o: ["'repr'", "Error", "None", "'MyClass'"], 
    c: 0, 
    e: "__repr__ defines string representation for repr().",
    de: `The __repr__ method defines the "official" string representation of an object for repr(). If class MyClass: def __repr__(self): return 'repr'; obj = MyClass(); repr(obj), then repr(obj) returns 'repr' because __repr__ is a special method that's called when you use repr() on an object. It should return an unambiguous string representation that ideally could be used to recreate the object. If __str__ is not defined, __repr__ is used as a fallback.

__repr__ method:
• repr(obj) returns 'repr'
• __repr__ defines official string representation
• Called by repr()
• Should return unambiguous string
• Used as fallback if __str__ not defined
• Returns: 'repr'

How it works:
• obj = MyClass() creates instance
• repr(obj) calls __repr__ method
• __repr__ executes: return 'repr'
• Returns official string representation
• Returns: 'repr'

Example:
class MyClass:
    def __repr__(self):
        return 'repr'
obj = MyClass()
repr(obj)                    # 'repr' (uses __repr__)

Common uses:
• Official representation: def __repr__(self): return 'unambiguous string'
• Debugging: repr(obj) shows official representation
• Special methods
• Object representation

Example: If class MyClass: def __repr__(self): return 'repr'; obj = MyClass(); repr(obj), then repr(obj) returns 'repr' because __repr__ defines the official string representation for repr().

Key Concepts:
• __repr__ method: • repr(obj) returns 'repr' • __repr__ defines official string representation • Called by repr() • Should return unambiguous string • Used as fallback if __str__ not defined • Returns: 'repr' How it works: • obj = MyClass() creates instance • repr(obj) calls __repr__ method • __repr__ executes: return 'repr' • Returns official string representation • Returns: 'repr' Example: class MyClass: def __repr__(self): return 'repr' obj = MyClass() repr(obj) # 'repr' (uses __repr__) Common uses: • Official representation: def __repr__(self): return 'unambiguous string' • Debugging: repr(obj) shows official representation • Special methods • Object representation Example: If class MyClass: def __repr__(self): return 'repr'; obj = MyClass(); repr(obj), then repr(obj) returns 'repr' because __repr__ defines the official string representation for repr().

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __str__(self): return 'str'; def __repr__(self): return 'repr'; obj = MyClass(); print(obj)?`, 
    o: ["str", "repr", "Error", "None"], 
    c: 0, 
    e: "print() uses __str__ if available.",
    de: `print() uses __str__ if available, falling back to __repr__ if __str__ is not defined. If class MyClass: def __str__(self): return 'str'; def __repr__(self): return 'repr'; obj = MyClass(); print(obj), then print(obj) outputs str because print() prefers __str__ over __repr__. When both are defined, __str__ is used for user-friendly output, while __repr__ is used for the official representation (e.g., in the REPL or for debugging).

print() uses __str__:
• print(obj) outputs str
• print() prefers __str__ over __repr__
• __str__ is for user-friendly output
• __repr__ is for official representation
• Returns: str (printed)

How it works:
• obj = MyClass() creates instance
• print(obj) calls __str__ method (preferred)
• __str__ executes: return 'str'
• print() outputs the string
• Output: str

Example:
class MyClass:
    def __str__(self):
        return 'str'
    def __repr__(self):
        return 'repr'
obj = MyClass()
print(obj)                   # str (uses __str__)
repr(obj)                    # 'repr' (uses __repr__)

Common uses:
• User-friendly output: print(obj) uses __str__
• Official representation: repr(obj) uses __repr__
• Special methods
• Object representation

Example: If class MyClass: def __str__(self): return 'str'; def __repr__(self): return 'repr'; obj = MyClass(); print(obj), then print(obj) outputs str because print() uses __str__ if available, preferring it over __repr__.

Key Concepts:
• print() uses __str__: • print(obj) outputs str • print() prefers __str__ over __repr__ • __str__ is for user-friendly output • __repr__ is for official representation • Returns: str (printed) How it works: • obj = MyClass() creates instance • print(obj) calls __str__ method (preferred) • __str__ executes: return 'str' • print() outputs the string • Output: str Example: class MyClass: def __str__(self): return 'str' def __repr__(self): return 'repr' obj = MyClass() print(obj) # str (uses __str__) repr(obj) # 'repr' (uses __repr__) Common uses: • User-friendly output: print(obj) uses __str__ • Official representation: repr(obj) uses __repr__ • Special methods • Object representation Example: If class MyClass: def __str__(self): return 'str'; def __repr__(self): return 'repr'; obj = MyClass(); print(obj), then print(obj) outputs str because print() uses __str__ if available, preferring it over __repr__.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __len__(self): return 5; obj = MyClass(); len(obj)?`, 
    o: ["5", "Error", "None", "0"], 
    c: 0, 
    e: "__len__ defines behavior for len().",
    de: `The __len__ method defines the behavior for len(). If class MyClass: def __len__(self): return 5; obj = MyClass(); len(obj), then len(obj) returns 5 because __len__ is a special method that's called when you use len() on an object. It should return a non-negative integer representing the "length" of the object. This is commonly used for container-like objects (lists, strings, custom collections).

__len__ method:
• len(obj) returns 5
• __len__ defines length behavior
• Called by len()
• Should return non-negative integer
• Returns: 5

How it works:
• obj = MyClass() creates instance
• len(obj) calls __len__ method
• __len__ executes: return 5
• Returns length value
• Returns: 5

Example:
class MyClass:
    def __len__(self):
        return 5
obj = MyClass()
len(obj)                     # 5 (uses __len__)

Common uses:
• Length definition: def __len__(self): return length
• Container-like objects: len(obj) for custom collections
• Special methods
• Object length

Example: If class MyClass: def __len__(self): return 5; obj = MyClass(); len(obj), then len(obj) returns 5 because __len__ defines the behavior for len().

Key Concepts:
• __len__ method: • len(obj) returns 5 • __len__ defines length behavior • Called by len() • Should return non-negative integer • Returns: 5 How it works: • obj = MyClass() creates instance • len(obj) calls __len__ method • __len__ executes: return 5 • Returns length value • Returns: 5 Example: class MyClass: def __len__(self): return 5 obj = MyClass() len(obj) # 5 (uses __len__) Common uses: • Length definition: def __len__(self): return length • Container-like objects: len(obj) for custom collections • Special methods • Object length Example: If class MyClass: def __len__(self): return 5; obj = MyClass(); len(obj), then len(obj) returns 5 because __len__ defines the behavior for len().

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __eq__(self, other): return True; obj1 = MyClass(); obj2 = MyClass(); obj1 == obj2?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "__eq__ defines behavior for == operator.",
    de: `The __eq__ method defines the behavior for the == operator. If class MyClass: def __eq__(self, other): return True; obj1 = MyClass(); obj2 = MyClass(); obj1 == obj2, then obj1 == obj2 returns True because __eq__ is a special method that's called when you use == to compare objects. By default (without __eq__), == compares object identity (same as is), but __eq__ allows you to define custom equality logic.

__eq__ method:
• obj1 == obj2 returns True
• __eq__ defines == behavior
• Called by == operator
• Can define custom equality logic
• Returns: True

How it works:
• obj1 == obj2 uses == operator
• Python calls obj1.__eq__(obj2)
• __eq__ executes: return True
• Returns comparison result
• Returns: True

Example:
class MyClass:
    def __eq__(self, other):
        return True  # Always equal
obj1 = MyClass(); obj2 = MyClass()
obj1 == obj2                # True (uses __eq__)

Common uses:
• Custom equality: def __eq__(self, other): return self.value == other.value
• Value comparison: == compares values, not identity
• Special methods
• Operator overloading

Example: If class MyClass: def __eq__(self, other): return True; obj1 = MyClass(); obj2 = MyClass(); obj1 == obj2, then obj1 == obj2 returns True because __eq__ defines the behavior for the == operator.

Key Concepts:
• __eq__ method: • obj1 == obj2 returns True • __eq__ defines == behavior • Called by == operator • Can define custom equality logic • Returns: True How it works: • obj1 == obj2 uses == operator • Python calls obj1.__eq__(obj2) • __eq__ executes: return True • Returns comparison result • Returns: True Example: class MyClass: def __eq__(self, other): return True # Always equal obj1 = MyClass(); obj2 = MyClass() obj1 == obj2 # True (uses __eq__) Common uses: • Custom equality: def __eq__(self, other): return self.value == other.value • Value comparison: == compares values, not identity • Special methods • Operator overloading Example: If class MyClass: def __eq__(self, other): return True; obj1 = MyClass(); obj2 = MyClass(); obj1 == obj2, then obj1 == obj2 returns True because __eq__ defines the behavior for the == operator.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __lt__(self, other): return True; obj1 = MyClass(); obj2 = MyClass(); obj1 < obj2?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "__lt__ defines behavior for < operator.",
    de: `The __lt__ method defines the behavior for the < (less than) operator. If class MyClass: def __lt__(self, other): return True; obj1 = MyClass(); obj2 = MyClass(); obj1 < obj2, then obj1 < obj2 returns True because __lt__ is a special method that's called when you use < to compare objects. This is used for ordering and sorting. Python can automatically provide other comparison operators (>, <=, >=) if you define __lt__ and __eq__, or you can define them explicitly.

__lt__ method:
• obj1 < obj2 returns True
• __lt__ defines < behavior
• Called by < operator
• Used for ordering/sorting
• Returns: True

How it works:
• obj1 < obj2 uses < operator
• Python calls obj1.__lt__(obj2)
• __lt__ executes: return True
• Returns comparison result
• Returns: True

Example:
class MyClass:
    def __lt__(self, other):
        return True  # Always less than
obj1 = MyClass(); obj2 = MyClass()
obj1 < obj2                 # True (uses __lt__)

Common uses:
• Custom ordering: def __lt__(self, other): return self.value < other.value
• Sorting: objects can be sorted using <
• Special methods
• Operator overloading

Example: If class MyClass: def __lt__(self, other): return True; obj1 = MyClass(); obj2 = MyClass(); obj1 < obj2, then obj1 < obj2 returns True because __lt__ defines the behavior for the < operator.

Key Concepts:
• __lt__ method: • obj1 < obj2 returns True • __lt__ defines < behavior • Called by < operator • Used for ordering/sorting • Returns: True How it works: • obj1 < obj2 uses < operator • Python calls obj1.__lt__(obj2) • __lt__ executes: return True • Returns comparison result • Returns: True Example: class MyClass: def __lt__(self, other): return True # Always less than obj1 = MyClass(); obj2 = MyClass() obj1 < obj2 # True (uses __lt__) Common uses: • Custom ordering: def __lt__(self, other): return self.value < other.value • Sorting: objects can be sorted using < • Special methods • Operator overloading Example: If class MyClass: def __lt__(self, other): return True; obj1 = MyClass(); obj2 = MyClass(); obj1 < obj2, then obj1 < obj2 returns True because __lt__ defines the behavior for the < operator.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __add__(self, other): return 10; obj1 = MyClass(); obj2 = MyClass(); obj1 + obj2?`, 
    o: ["10", "Error", "None", "0"], 
    c: 0, 
    e: "__add__ defines behavior for + operator.",
    de: `The __add__ method defines the behavior for the + operator. If class MyClass: def __add__(self, other): return 10; obj1 = MyClass(); obj2 = MyClass(); obj1 + obj2, then obj1 + obj2 returns 10 because __add__ is a special method that's called when you use + to add objects. This allows you to define custom addition behavior for your objects, making them work with the + operator.

__add__ method:
• obj1 + obj2 returns 10
• __add__ defines + behavior
• Called by + operator
• Can define custom addition
• Returns: 10

How it works:
• obj1 + obj2 uses + operator
• Python calls obj1.__add__(obj2)
• __add__ executes: return 10
• Returns addition result
• Returns: 10

Example:
class MyClass:
    def __add__(self, other):
        return 10  # Custom addition
obj1 = MyClass(); obj2 = MyClass()
obj1 + obj2                # 10 (uses __add__)

Common uses:
• Custom addition: def __add__(self, other): return self.value + other.value
• Operator overloading: objects work with + operator
• Special methods
• Arithmetic operations

Example: If class MyClass: def __add__(self, other): return 10; obj1 = MyClass(); obj2 = MyClass(); obj1 + obj2, then obj1 + obj2 returns 10 because __add__ defines the behavior for the + operator.

Key Concepts:
• __add__ method: • obj1 + obj2 returns 10 • __add__ defines + behavior • Called by + operator • Can define custom addition • Returns: 10 How it works: • obj1 + obj2 uses + operator • Python calls obj1.__add__(obj2) • __add__ executes: return 10 • Returns addition result • Returns: 10 Example: class MyClass: def __add__(self, other): return 10 # Custom addition obj1 = MyClass(); obj2 = MyClass() obj1 + obj2 # 10 (uses __add__) Common uses: • Custom addition: def __add__(self, other): return self.value + other.value • Operator overloading: objects work with + operator • Special methods • Arithmetic operations Example: If class MyClass: def __add__(self, other): return 10; obj1 = MyClass(); obj2 = MyClass(); obj1 + obj2, then obj1 + obj2 returns 10 because __add__ defines the behavior for the + operator.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __getitem__(self, key): return key * 2; obj = MyClass(); obj[5]?`, 
    o: ["10", "5", "Error", "None"], 
    c: 0, 
    e: "__getitem__ defines behavior for [] indexing.",
    de: `The __getitem__ method defines the behavior for [] indexing. If class MyClass: def __getitem__(self, key): return key * 2; obj = MyClass(); obj[5], then obj[5] returns 10 because __getitem__ is a special method that's called when you use [] to access elements. This allows you to make your objects work like sequences or mappings (like lists or dictionaries). The key parameter can be an index, a slice, or any other value depending on your use case.

__getitem__ method:
• obj[5] returns 10
• __getitem__ defines [] indexing behavior
• Called by [] operator
• key parameter is the index/key
• Returns: key * 2 = 5 * 2 = 10

How it works:
• obj[5] uses [] indexing
• Python calls obj.__getitem__(5)
• __getitem__ executes: return key * 2
• Evaluates: 5 * 2 = 10
• Returns: 10

Example:
class MyClass:
    def __getitem__(self, key):
        return key * 2
obj = MyClass()
obj[5]                      # 10 (uses __getitem__)

Common uses:
• Indexing: def __getitem__(self, key): return self.data[key]
• Sequence-like objects: make objects work like lists
• Special methods
• Operator overloading

Example: If class MyClass: def __getitem__(self, key): return key * 2; obj = MyClass(); obj[5], then obj[5] returns 10 because __getitem__ defines the behavior for [] indexing, and key * 2 = 5 * 2 = 10.

Key Concepts:
• __getitem__ method: • obj[5] returns 10 • __getitem__ defines [] indexing behavior • Called by [] operator • key parameter is the index/key • Returns: key * 2 = 5 * 2 = 10 How it works: • obj[5] uses [] indexing • Python calls obj.__getitem__(5) • __getitem__ executes: return key * 2 • Evaluates: 5 * 2 = 10 • Returns: 10 Example: class MyClass: def __getitem__(self, key): return key * 2 obj = MyClass() obj[5] # 10 (uses __getitem__) Common uses: • Indexing: def __getitem__(self, key): return self.data[key] • Sequence-like objects: make objects work like lists • Special methods • Operator overloading Example: If class MyClass: def __getitem__(self, key): return key * 2; obj = MyClass(); obj[5], then obj[5] returns 10 because __getitem__ defines the behavior for [] indexing, and key * 2 = 5 * 2 = 10.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __setitem__(self, key, value): self.data = {key: value}; obj = MyClass(); obj[5] = 10; obj.data?`, 
    o: ["{5: 10}", "Error", "None", "{}"], 
    c: 0, 
    e: "__setitem__ defines behavior for [] assignment.",
    de: `The __setitem__ method defines the behavior for [] assignment. If class MyClass: def __setitem__(self, key, value): self.data = {key: value}; obj = MyClass(); obj[5] = 10; obj.data, then obj.data returns {5: 10} because __setitem__ is a special method that's called when you use [] to assign values. This allows you to make your objects work like mutable sequences or mappings. The key parameter is the index/key, and value is the value being assigned.

__setitem__ method:
• obj[5] = 10 calls __setitem__
• __setitem__ defines [] assignment behavior
• Called by [] = assignment
• key = 5, value = 10
• Sets self.data = {5: 10}
• Returns: {5: 10}

How it works:
• obj[5] = 10 uses [] assignment
• Python calls obj.__setitem__(5, 10)
• __setitem__ executes: self.data = {key: value}
• Sets self.data = {5: 10}
• obj.data returns {5: 10}

Example:
class MyClass:
    def __setitem__(self, key, value):
        self.data = {key: value}
obj = MyClass()
obj[5] = 10                 # Calls __setitem__(5, 10)
obj.data                    # {5: 10}

Common uses:
• Assignment: def __setitem__(self, key, value): self.data[key] = value
• Mutable objects: make objects work like dictionaries
• Special methods
• Operator overloading

Example: If class MyClass: def __setitem__(self, key, value): self.data = {key: value}; obj = MyClass(); obj[5] = 10; obj.data, then obj.data returns {5: 10} because __setitem__ defines the behavior for [] assignment, and it sets self.data = {5: 10}.

Key Concepts:
• __setitem__ method: • obj[5] = 10 calls __setitem__ • __setitem__ defines [] assignment behavior • Called by [] = assignment • key = 5, value = 10 • Sets self.data = {5: 10} • Returns: {5: 10} How it works: • obj[5] = 10 uses [] assignment • Python calls obj.__setitem__(5, 10) • __setitem__ executes: self.data = {key: value} • Sets self.data = {5: 10} • obj.data returns {5: 10} Example: class MyClass: def __setitem__(self, key, value): self.data = {key: value} obj = MyClass() obj[5] = 10 # Calls __setitem__(5, 10) obj.data # {5: 10} Common uses: • Assignment: def __setitem__(self, key, value): self.data[key] = value • Mutable objects: make objects work like dictionaries • Special methods • Operator overloading Example: If class MyClass: def __setitem__(self, key, value): self.data = {key: value}; obj = MyClass(); obj[5] = 10; obj.data, then obj.data returns {5: 10} because __setitem__ defines the behavior for [] assignment, and it sets self.data = {5: 10}.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __call__(self): return 'called'; obj = MyClass(); obj()?`, 
    o: ["'called'", "Error", "None", "'MyClass'"], 
    c: 0, 
    e: "__call__ makes instance callable.",
    de: `The __call__ method makes an instance callable (like a function). If class MyClass: def __call__(self): return 'called'; obj = MyClass(); obj(), then obj() returns 'called' because __call__ is a special method that's called when you use () to call an instance. This allows you to make objects that behave like functions - you can call them with parentheses. This is useful for callable objects, function-like classes, or implementing the callable pattern.

__call__ method:
• obj() returns 'called'
• __call__ makes instance callable
• Called by () operator
• Instance can be called like function
• Returns: 'called'

How it works:
• obj() calls instance like function
• Python calls obj.__call__()
• __call__ executes: return 'called'
• Returns call result
• Returns: 'called'

Example:
class MyClass:
    def __call__(self):
        return 'called'
obj = MyClass()
obj()                        # 'called' (instance is callable)

Common uses:
• Callable objects: def __call__(self, *args): return result
• Function-like classes: make classes work like functions
• Special methods
• Operator overloading

Example: If class MyClass: def __call__(self): return 'called'; obj = MyClass(); obj(), then obj() returns 'called' because __call__ makes an instance callable, allowing you to call it like a function.

Key Concepts:
• __call__ method: • obj() returns 'called' • __call__ makes instance callable • Called by () operator • Instance can be called like function • Returns: 'called' How it works: • obj() calls instance like function • Python calls obj.__call__() • __call__ executes: return 'called' • Returns call result • Returns: 'called' Example: class MyClass: def __call__(self): return 'called' obj = MyClass() obj() # 'called' (instance is callable) Common uses: • Callable objects: def __call__(self, *args): return result • Function-like classes: make classes work like functions • Special methods • Operator overloading Example: If class MyClass: def __call__(self): return 'called'; obj = MyClass(); obj(), then obj() returns 'called' because __call__ makes an instance callable, allowing you to call it like a function.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  
  // 61-70: Property Decorator
  (_i: number) => ({ 
    q: `What is class MyClass: @property; def x(self): return 1; obj = MyClass(); obj.x?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "@property makes method accessible as attribute.",
    de: `The @property decorator makes a method accessible as an attribute. If class MyClass: @property; def x(self): return 1; obj = MyClass(); obj.x, then obj.x returns 1 because @property converts the method x() into a property, allowing you to access it like an attribute (without parentheses). This provides a clean interface for computed properties or attributes with getters/setters.

@property decorator:
• obj.x returns 1
• @property makes method accessible as attribute
• No parentheses needed: obj.x (not obj.x())
• Method is called automatically
• Returns: 1

How it works:
• @property decorator modifies method
• Method becomes property (accessible as attribute)
• obj.x accesses property (calls method automatically)
• Method executes: return 1
• Returns: 1

Example:
class MyClass:
    @property
    def x(self):
        return 1
obj = MyClass()
obj.x                        # 1 (accessed as attribute, not method)

Common uses:
• Computed properties: @property def area(self): return self.width * self.height
• Clean interface: obj.attr instead of obj.get_attr()
• Properties
• Attribute-like access

Example: If class MyClass: @property; def x(self): return 1; obj = MyClass(); obj.x, then obj.x returns 1 because @property makes the method accessible as an attribute, so you can access it without parentheses.

Key Concepts:
• @property decorator: • obj.x returns 1 • @property makes method accessible as attribute • No parentheses needed: obj.x (not obj.x()) • Method is called automatically • Returns: 1 How it works: • @property decorator modifies method • Method becomes property (accessible as attribute) • obj.x accesses property (calls method automatically) • Method executes: return 1 • Returns: 1 Example: class MyClass: @property def x(self): return 1 obj = MyClass() obj.x # 1 (accessed as attribute, not method) Common uses: • Computed properties: @property def area(self): return self.width * self.height • Clean interface: obj.attr instead of obj.get_attr() • Properties • Attribute-like access Example: If class MyClass: @property; def x(self): return 1; obj = MyClass(); obj.x, then obj.x returns 1 because @property makes the method accessible as an attribute, so you can access it without parentheses.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: @property; def x(self): return 1; obj = MyClass(); obj.x = 2?`, 
    o: ["AttributeError", "2", "Error", "None"], 
    c: 0, 
    e: "Property without setter is read-only.",
    de: `A property without a setter is read-only - you cannot assign to it. If class MyClass: @property; def x(self): return 1; obj = MyClass(); obj.x = 2, then obj.x = 2 raises an AttributeError because the property only has a getter (defined by @property), but no setter. To make a property writable, you need to define a setter using @x.setter. Without a setter, the property is read-only.

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
    @property
    def x(self):
        return 1
obj = MyClass()
obj.x                        # 1 (read works)
obj.x = 2                    # AttributeError (no setter, read-only)

Common uses:
• Read-only properties: @property def value(self): return self._value
• Computed properties: @property def area(self): return self.width * self.height
• Properties
• Attribute protection

Example: If class MyClass: @property; def x(self): return 1; obj = MyClass(); obj.x = 2, then obj.x = 2 raises an AttributeError because a property without a setter is read-only and cannot be assigned to.

Key Concepts:
• Property without setter: • obj.x = 2 raises AttributeError • Property only has getter (no setter) • Cannot assign to read-only property • Raises AttributeError: can't set attribute • Error: AttributeError How it works: • obj.x = 2 attempts to assign to property • Property has no setter defined • Python cannot set read-only property • Raises AttributeError: can't set attribute Example: class MyClass: @property def x(self): return 1 obj = MyClass() obj.x # 1 (read works) obj.x = 2 # AttributeError (no setter, read-only) Common uses: • Read-only properties: @property def value(self): return self._value • Computed properties: @property def area(self): return self.width * self.height • Properties • Attribute protection Example: If class MyClass: @property; def x(self): return 1; obj = MyClass(); obj.x = 2, then obj.x = 2 raises an AttributeError because a property without a setter is read-only and cannot be assigned to.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: @property; def x(self): return self._x; @x.setter; def x(self, value): self._x = value; obj = MyClass(); obj.x = 5; obj.x?`, 
    o: ["5", "Error", "None", "0"], 
    c: 0, 
    e: "@property with @setter allows read and write.",
    de: `A property with both a getter (@property) and a setter (@x.setter) allows both reading and writing. If class MyClass: @property; def x(self): return self._x; @x.setter; def x(self, value): self._x = value; obj = MyClass(); obj.x = 5; obj.x, then obj.x returns 5 because the property has a setter that stores the value in self._x, and the getter retrieves it. This provides controlled access to attributes with validation or transformation if needed.

Property with setter:
• obj.x = 5 assigns value (uses setter)
• obj.x returns 5 (uses getter)
• @property defines getter
• @x.setter defines setter
• Returns: 5

How it works:
• obj.x = 5 calls setter: @x.setter def x(self, value)
• Setter executes: self._x = value (stores 5)
• obj.x calls getter: @property def x(self)
• Getter executes: return self._x (returns 5)
• Returns: 5

Example:
class MyClass:
    @property
    def x(self):
        return self._x
    @x.setter
    def x(self, value):
        self._x = value
obj = MyClass()
obj.x = 5                    # Uses setter
obj.x                        # 5 (uses getter)

Common uses:
• Read-write properties: @property with @setter
• Controlled access: validation in setter
• Properties
• Attribute access control

Example: If class MyClass: @property; def x(self): return self._x; @x.setter; def x(self, value): self._x = value; obj = MyClass(); obj.x = 5; obj.x, then obj.x returns 5 because the property has both a getter and setter, allowing read and write access.

Key Concepts:
• Property with setter: • obj.x = 5 assigns value (uses setter) • obj.x returns 5 (uses getter) • @property defines getter • @x.setter defines setter • Returns: 5 How it works: • obj.x = 5 calls setter: @x.setter def x(self, value) • Setter executes: self._x = value (stores 5) • obj.x calls getter: @property def x(self) • Getter executes: return self._x (returns 5) • Returns: 5 Example: class MyClass: @property def x(self): return self._x @x.setter def x(self, value): self._x = value obj = MyClass() obj.x = 5 # Uses setter obj.x # 5 (uses getter) Common uses: • Read-write properties: @property with @setter • Controlled access: validation in setter • Properties • Attribute access control Example: If class MyClass: @property; def x(self): return self._x; @x.setter; def x(self, value): self._x = value; obj = MyClass(); obj.x = 5; obj.x, then obj.x returns 5 because the property has both a getter and setter, allowing read and write access.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: @property; def x(self): return self._x; @x.setter; def x(self, value): self._x = value * 2; obj = MyClass(); obj.x = 5; obj.x?`, 
    o: ["10", "5", "Error", "None"], 
    c: 0, 
    e: "Setter can transform value before storing.",
    de: `A property setter can transform the value before storing it. If class MyClass: @property; def x(self): return self._x; @x.setter; def x(self, value): self._x = value * 2; obj = MyClass(); obj.x = 5; obj.x, then obj.x returns 10 because the setter multiplies the value by 2 before storing it (self._x = value * 2 = 5 * 2 = 10). This allows you to validate, transform, or process values before they're stored.

Setter transforms value:
• obj.x = 5 calls setter with value = 5
• Setter executes: self._x = value * 2 = 5 * 2 = 10
• obj.x calls getter: return self._x
• Returns stored value: 10
• Returns: 10

How it works:
• obj.x = 5 calls setter: @x.setter def x(self, value)
• Setter transforms: self._x = value * 2
• Evaluates: 5 * 2 = 10
• Stores: self._x = 10
• obj.x returns: 10

Example:
class MyClass:
    @property
    def x(self):
        return self._x
    @x.setter
    def x(self, value):
        self._x = value * 2  # Transforms value
obj = MyClass()
obj.x = 5                    # Stores 10 (5 * 2)
obj.x                        # 10 (transformed value)

Common uses:
• Value transformation: @x.setter def x(self, value): self._x = transform(value)
• Validation: @x.setter def x(self, value): if valid: self._x = value
• Properties
• Attribute control

Example: If class MyClass: @property; def x(self): return self._x; @x.setter; def x(self, value): self._x = value * 2; obj = MyClass(); obj.x = 5; obj.x, then obj.x returns 10 because the setter transforms the value before storing it (5 * 2 = 10).

Key Concepts:
• Setter transforms value: • obj.x = 5 calls setter with value = 5 • Setter executes: self._x = value * 2 = 5 * 2 = 10 • obj.x calls getter: return self._x • Returns stored value: 10 • Returns: 10 How it works: • obj.x = 5 calls setter: @x.setter def x(self, value) • Setter transforms: self._x = value * 2 • Evaluates: 5 * 2 = 10 • Stores: self._x = 10 • obj.x returns: 10 Example: class MyClass: @property def x(self): return self._x @x.setter def x(self, value): self._x = value * 2 # Transforms value obj = MyClass() obj.x = 5 # Stores 10 (5 * 2) obj.x # 10 (transformed value) Common uses: • Value transformation: @x.setter def x(self, value): self._x = transform(value) • Validation: @x.setter def x(self, value): if valid: self._x = value • Properties • Attribute control Example: If class MyClass: @property; def x(self): return self._x; @x.setter; def x(self, value): self._x = value * 2; obj = MyClass(); obj.x = 5; obj.x, then obj.x returns 10 because the setter transforms the value before storing it (5 * 2 = 10).

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: @property; def x(self): return self._x; @x.deleter; def x(self): del self._x; obj = MyClass(); obj._x = 1; del obj.x; hasattr(obj, '_x')?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "@deleter defines behavior for del statement.",
    de: `The @x.deleter decorator defines the behavior for the del statement. If class MyClass: @property; def x(self): return self._x; @x.deleter; def x(self): del self._x; obj = MyClass(); obj._x = 1; del obj.x; hasattr(obj, '_x'), then hasattr(obj, '_x') returns False because @x.deleter defines what happens when you delete the property, and del obj.x calls the deleter, which deletes self._x. This provides controlled deletion of attributes.

@deleter decorator:
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
    @property
    def x(self):
        return self._x
    @x.deleter
    def x(self):
        del self._x
obj = MyClass()
obj._x = 1
del obj.x                    # Calls deleter
hasattr(obj, '_x')          # False (deleted)

Common uses:
• Controlled deletion: @x.deleter def x(self): cleanup logic
• Property deletion: del obj.property (uses deleter)
• Properties
• Attribute management

Example: If class MyClass: @property; def x(self): return self._x; @x.deleter; def x(self): del self._x; obj = MyClass(); obj._x = 1; del obj.x; hasattr(obj, '_x'), then hasattr(obj, '_x') returns False because @x.deleter defines the behavior for del, and del obj.x calls the deleter, which deletes self._x.

Key Concepts:
• @deleter decorator: • del obj.x calls deleter • @x.deleter defines deletion behavior • Deleter executes: del self._x • Attribute _x is deleted • hasattr(obj, '_x') returns False How it works: • obj._x = 1 sets attribute • del obj.x calls deleter: @x.deleter def x(self) • Deleter executes: del self._x • Attribute _x is deleted • hasattr(obj, '_x') checks if attribute exists • Returns: False Example: class MyClass: @property def x(self): return self._x @x.deleter def x(self): del self._x obj = MyClass() obj._x = 1 del obj.x # Calls deleter hasattr(obj, '_x') # False (deleted) Common uses: • Controlled deletion: @x.deleter def x(self): cleanup logic • Property deletion: del obj.property (uses deleter) • Properties • Attribute management Example: If class MyClass: @property; def x(self): return self._x; @x.deleter; def x(self): del self._x; obj = MyClass(); obj._x = 1; del obj.x; hasattr(obj, '_x'), then hasattr(obj, '_x') returns False because @x.deleter defines the behavior for del, and del obj.x calls the deleter, which deletes self._x.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x; obj = MyClass(); obj.x?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "Property can access private attribute (convention: _ prefix).",
    de: `Properties can access "private" attributes (convention: single underscore prefix). If class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x; obj = MyClass(); obj.x, then obj.x returns 1 because the property getter accesses the private attribute self._x. The single underscore prefix (_x) is a convention indicating that the attribute is intended for internal use, but it's not enforced by Python - it's just a naming convention.

Property accesses private attribute:
• obj.x returns 1
• Property getter accesses self._x
• _x is private attribute (convention)
• Single underscore indicates internal use
• Returns: 1

How it works:
• __init__ sets self._x = 1
• obj.x calls property getter
• Getter executes: return self._x
• Accesses private attribute _x = 1
• Returns: 1

Example:
class MyClass:
    def __init__(self):
        self._x = 1  # Private attribute (convention)
    @property
    def x(self):
        return self._x  # Accesses private attribute
obj = MyClass()
obj.x                        # 1 (property accesses _x)

Common uses:
• Encapsulation: @property def value(self): return self._value
• Private attributes: _attr (convention, not enforced)
• Properties
• Attribute access control

Example: If class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x; obj = MyClass(); obj.x, then obj.x returns 1 because properties can access private attributes (convention: _ prefix), and the getter returns self._x.

Key Concepts:
• Property accesses private attribute: • obj.x returns 1 • Property getter accesses self._x • _x is private attribute (convention) • Single underscore indicates internal use • Returns: 1 How it works: • __init__ sets self._x = 1 • obj.x calls property getter • Getter executes: return self._x • Accesses private attribute _x = 1 • Returns: 1 Example: class MyClass: def __init__(self): self._x = 1 # Private attribute (convention) @property def x(self): return self._x # Accesses private attribute obj = MyClass() obj.x # 1 (property accesses _x) Common uses: • Encapsulation: @property def value(self): return self._value • Private attributes: _attr (convention, not enforced) • Properties • Attribute access control Example: If class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x; obj = MyClass(); obj.x, then obj.x returns 1 because properties can access private attributes (convention: _ prefix), and the getter returns self._x.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: @property; def x(self): return 1; obj = MyClass(); MyClass.x?`, 
    o: ["<property object>", "1", "Error", "None"], 
    c: 0, 
    e: "Accessing property via class returns property object.",
    de: `Accessing a property via the class returns the property object itself, not the property value. If class MyClass: @property; def x(self): return 1; obj = MyClass(); MyClass.x, then MyClass.x returns <property object> because accessing a property through the class (not an instance) returns the property descriptor object, not the result of calling the getter. To get the value, you need to access it through an instance: obj.x.

Property via class:
• MyClass.x returns <property object>
• Accessing via class returns property object
• Property object is descriptor
• Not the property value
• Returns: <property object>

How it works:
• MyClass.x accesses property via class
• Property is descriptor object
• Returns property object (not value)
• obj.x would return value (1)
• Returns: <property object>

Example:
class MyClass:
    @property
    def x(self):
        return 1
MyClass.x                    # <property object> (property descriptor)
obj = MyClass()
obj.x                        # 1 (property value)

Common uses:
• Property descriptor: MyClass.attr (property object)
• Descriptors: properties are descriptor objects
• Properties
• Object introspection

Example: If class MyClass: @property; def x(self): return 1; obj = MyClass(); MyClass.x, then MyClass.x returns <property object> because accessing a property via the class returns the property descriptor object, not the property value.

Key Concepts:
• Property via class: • MyClass.x returns <property object> • Accessing via class returns property object • Property object is descriptor • Not the property value • Returns: <property object> How it works: • MyClass.x accesses property via class • Property is descriptor object • Returns property object (not value) • obj.x would return value (1) • Returns: <property object> Example: class MyClass: @property def x(self): return 1 MyClass.x # <property object> (property descriptor) obj = MyClass() obj.x # 1 (property value) Common uses: • Property descriptor: MyClass.attr (property object) • Descriptors: properties are descriptor objects • Properties • Object introspection Example: If class MyClass: @property; def x(self): return 1; obj = MyClass(); MyClass.x, then MyClass.x returns <property object> because accessing a property via the class returns the property descriptor object, not the property value.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: x = property(lambda self: 1); obj = MyClass(); obj.x?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "property() can be created with lambda.",
    de: `The property() function can be created with a lambda function. If class MyClass: x = property(lambda self: 1); obj = MyClass(); obj.x, then obj.x returns 1 because property() can take a function (or lambda) as the getter argument. This is an alternative way to create properties without using the @property decorator. The lambda function receives self as its argument and returns the property value.

property() with lambda:
• obj.x returns 1
• property(lambda self: 1) creates property
• Lambda is getter function
• Receives self, returns 1
• Returns: 1

How it works:
• property(lambda self: 1) creates property
• Lambda is getter: lambda self: 1
• obj.x accesses property
• Calls lambda with self = obj
• Lambda returns: 1
• Returns: 1

Example:
class MyClass:
    x = property(lambda self: 1)  # Property with lambda
obj = MyClass()
obj.x                        # 1 (lambda returns 1)

Common uses:
• Simple properties: x = property(lambda self: value)
• Alternative syntax: property() instead of @property
• Properties
• Property creation

Example: If class MyClass: x = property(lambda self: 1); obj = MyClass(); obj.x, then obj.x returns 1 because property() can be created with a lambda function, and the lambda serves as the getter.

Key Concepts:
• property() with lambda: • obj.x returns 1 • property(lambda self: 1) creates property • Lambda is getter function • Receives self, returns 1 • Returns: 1 How it works: • property(lambda self: 1) creates property • Lambda is getter: lambda self: 1 • obj.x accesses property • Calls lambda with self = obj • Lambda returns: 1 • Returns: 1 Example: class MyClass: x = property(lambda self: 1) # Property with lambda obj = MyClass() obj.x # 1 (lambda returns 1) Common uses: • Simple properties: x = property(lambda self: value) • Alternative syntax: property() instead of @property • Properties • Property creation Example: If class MyClass: x = property(lambda self: 1); obj = MyClass(); obj.x, then obj.x returns 1 because property() can be created with a lambda function, and the lambda serves as the getter.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: @property; def x(self): return self._x if hasattr(self, '_x') else 0; obj = MyClass(); obj.x?`, 
    o: ["0", "Error", "None", "1"], 
    c: 0, 
    e: "Property can have default value if attribute doesn't exist.",
    de: `A property can have a default value if the underlying attribute doesn't exist. If class MyClass: @property; def x(self): return self._x if hasattr(self, '_x') else 0; obj = MyClass(); obj.x, then obj.x returns 0 because the property getter checks if self._x exists using hasattr(). If it doesn't exist, it returns the default value 0. This allows properties to work even when the underlying attribute hasn't been set yet.

Property with default:
• obj.x returns 0
• Property checks if _x exists
• hasattr(self, '_x') returns False
• Returns default value: 0
• Returns: 0

How it works:
• obj.x calls property getter
• Getter checks: hasattr(self, '_x')
• _x doesn't exist (not set)
• Returns default: 0
• Returns: 0

Example:
class MyClass:
    @property
    def x(self):
        return self._x if hasattr(self, '_x') else 0
obj = MyClass()
obj.x                        # 0 (default, _x doesn't exist)
obj._x = 5
obj.x                        # 5 (_x exists)

Common uses:
• Default values: @property def x(self): return self._x if hasattr(self, '_x') else default
• Computed defaults: properties with fallback values
• Properties
• Attribute defaults

Example: If class MyClass: @property; def x(self): return self._x if hasattr(self, '_x') else 0; obj = MyClass(); obj.x, then obj.x returns 0 because the property can have a default value if the attribute doesn't exist, and hasattr() checks for existence.

Key Concepts:
• Property with default: • obj.x returns 0 • Property checks if _x exists • hasattr(self, '_x') returns False • Returns default value: 0 • Returns: 0 How it works: • obj.x calls property getter • Getter checks: hasattr(self, '_x') • _x doesn't exist (not set) • Returns default: 0 • Returns: 0 Example: class MyClass: @property def x(self): return self._x if hasattr(self, '_x') else 0 obj = MyClass() obj.x # 0 (default, _x doesn't exist) obj._x = 5 obj.x # 5 (_x exists) Common uses: • Default values: @property def x(self): return self._x if hasattr(self, '_x') else default • Computed defaults: properties with fallback values • Properties • Attribute defaults Example: If class MyClass: @property; def x(self): return self._x if hasattr(self, '_x') else 0; obj = MyClass(); obj.x, then obj.x returns 0 because the property can have a default value if the attribute doesn't exist, and hasattr() checks for existence.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: @property; def x(self): return 1; @x.setter; def x(self, value): pass; obj = MyClass(); obj.x = 5; obj.x?`, 
    o: ["1", "5", "Error", "None"], 
    c: 0, 
    e: "Setter that doesn't store value doesn't change property.",
    de: `A setter that doesn't store the value doesn't change the property. If class MyClass: @property; def x(self): return 1; @x.setter; def x(self, value): pass; obj = MyClass(); obj.x = 5; obj.x, then obj.x returns 1 because the setter has pass (does nothing), so it doesn't store the value. The getter still returns 1, and the assignment obj.x = 5 has no effect because the setter doesn't actually store anything. The value 5 is passed to the setter but ignored.

Setter doesn't store:
• obj.x = 5 calls setter
• Setter executes: pass (does nothing)
• Value 5 is ignored (not stored)
• obj.x calls getter: return 1
• Returns: 1 (unchanged)

How it works:
• obj.x = 5 calls setter: @x.setter def x(self, value)
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
    def x(self, value):
        pass  # Doesn't store value
obj = MyClass()
obj.x = 5                    # Calls setter (ignores value)
obj.x                        # 1 (getter unchanged)

Common uses:
• Read-only simulation: setter that ignores values
• Validation-only setters: setter that validates but doesn't store
• Properties
• Attribute control

Example: If class MyClass: @property; def x(self): return 1; @x.setter; def x(self, value): pass; obj = MyClass(); obj.x = 5; obj.x, then obj.x returns 1 because a setter that doesn't store the value doesn't change the property, so the getter still returns 1.

Key Concepts:
• Setter doesn't store: • obj.x = 5 calls setter • Setter executes: pass (does nothing) • Value 5 is ignored (not stored) • obj.x calls getter: return 1 • Returns: 1 (unchanged) How it works: • obj.x = 5 calls setter: @x.setter def x(self, value) • Setter executes: pass (does nothing) • Value 5 is not stored • obj.x calls getter: @property def x(self) • Getter returns: 1 (unchanged) • Returns: 1 Example: class MyClass: @property def x(self): return 1 @x.setter def x(self, value): pass # Doesn't store value obj = MyClass() obj.x = 5 # Calls setter (ignores value) obj.x # 1 (getter unchanged) Common uses: • Read-only simulation: setter that ignores values • Validation-only setters: setter that validates but doesn't store • Properties • Attribute control Example: If class MyClass: @property; def x(self): return 1; @x.setter; def x(self, value): pass; obj = MyClass(); obj.x = 5; obj.x, then obj.x returns 1 because a setter that doesn't store the value doesn't change the property, so the getter still returns 1.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  
  // 71-80: Object Attributes and Methods
  (_i: number) => ({ 
    q: `What is class MyClass: pass; obj = MyClass(); obj.x = 1; getattr(obj, 'x')?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "getattr() gets attribute value.",
    de: `The getattr() function gets an attribute value from an object. If class MyClass: pass; obj = MyClass(); obj.x = 1; getattr(obj, 'x'), then getattr(obj, 'x') returns 1 because getattr() retrieves the value of the attribute 'x' from obj. It's equivalent to obj.x, but allows you to get attributes dynamically using a string name. This is useful when the attribute name is stored in a variable.

getattr() function:
• getattr(obj, 'x') returns 1
• getattr() gets attribute value
• Equivalent to obj.x
• Attribute name is string: 'x'
• Returns: 1

How it works:
• obj.x = 1 sets attribute x = 1
• getattr(obj, 'x') gets attribute 'x'
• Searches for attribute 'x' on obj
• Finds x = 1
• Returns: 1

Example:
class MyClass: pass
obj = MyClass()
obj.x = 1
getattr(obj, 'x')            # 1 (gets attribute 'x')
obj.x                        # 1 (equivalent)

Common uses:
• Dynamic access: getattr(obj, attr_name) (attr_name is variable)
• Attribute retrieval: getattr(obj, 'method')()
• Object introspection
• Dynamic attribute access

Example: If class MyClass: pass; obj = MyClass(); obj.x = 1; getattr(obj, 'x'), then getattr(obj, 'x') returns 1 because getattr() gets the attribute value from an object, equivalent to obj.x.

Key Concepts:
• getattr() function: • getattr(obj, 'x') returns 1 • getattr() gets attribute value • Equivalent to obj.x • Attribute name is string: 'x' • Returns: 1 How it works: • obj.x = 1 sets attribute x = 1 • getattr(obj, 'x') gets attribute 'x' • Searches for attribute 'x' on obj • Finds x = 1 • Returns: 1 Example: class MyClass: pass obj = MyClass() obj.x = 1 getattr(obj, 'x') # 1 (gets attribute 'x') obj.x # 1 (equivalent) Common uses: • Dynamic access: getattr(obj, attr_name) (attr_name is variable) • Attribute retrieval: getattr(obj, 'method')() • Object introspection • Dynamic attribute access Example: If class MyClass: pass; obj = MyClass(); obj.x = 1; getattr(obj, 'x'), then getattr(obj, 'x') returns 1 because getattr() gets the attribute value from an object, equivalent to obj.x.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: pass; obj = MyClass(); getattr(obj, 'x', 0)?`, 
    o: ["0", "Error", "None", "1"], 
    c: 0, 
    e: "getattr() with default returns default if attribute missing.",
    de: `The getattr() function can take a default value that's returned if the attribute doesn't exist. If class MyClass: pass; obj = MyClass(); getattr(obj, 'x', 0), then getattr(obj, 'x', 0) returns 0 because obj doesn't have an attribute 'x', so getattr() returns the default value 0 instead of raising an AttributeError. This is useful for safely accessing attributes that might not exist.

getattr() with default:
• getattr(obj, 'x', 0) returns 0
• obj doesn't have attribute 'x'
• getattr() returns default value: 0
• No AttributeError raised
• Returns: 0

How it works:
• getattr(obj, 'x', 0) gets attribute 'x'
• obj doesn't have attribute 'x'
• Attribute not found
• Returns default value: 0
• Returns: 0

Example:
class MyClass: pass
obj = MyClass()
getattr(obj, 'x', 0)         # 0 (default, 'x' doesn't exist)
getattr(obj, 'x')            # AttributeError (no default)
obj.x = 1
getattr(obj, 'x', 0)         # 1 (attribute exists)

Common uses:
• Safe access: getattr(obj, 'attr', default) (no error if missing)
• Default values: getattr(obj, 'value', 0)
• Object introspection
• Dynamic attribute access

Example: If class MyClass: pass; obj = MyClass(); getattr(obj, 'x', 0), then getattr(obj, 'x', 0) returns 0 because getattr() with a default returns the default value if the attribute is missing, preventing AttributeError.

Key Concepts:
• getattr() with default: • getattr(obj, 'x', 0) returns 0 • obj doesn't have attribute 'x' • getattr() returns default value: 0 • No AttributeError raised • Returns: 0 How it works: • getattr(obj, 'x', 0) gets attribute 'x' • obj doesn't have attribute 'x' • Attribute not found • Returns default value: 0 • Returns: 0 Example: class MyClass: pass obj = MyClass() getattr(obj, 'x', 0) # 0 (default, 'x' doesn't exist) getattr(obj, 'x') # AttributeError (no default) obj.x = 1 getattr(obj, 'x', 0) # 1 (attribute exists) Common uses: • Safe access: getattr(obj, 'attr', default) (no error if missing) • Default values: getattr(obj, 'value', 0) • Object introspection • Dynamic attribute access Example: If class MyClass: pass; obj = MyClass(); getattr(obj, 'x', 0), then getattr(obj, 'x', 0) returns 0 because getattr() with a default returns the default value if the attribute is missing, preventing AttributeError.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: pass; obj = MyClass(); setattr(obj, 'x', 1); obj.x?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "setattr() sets attribute value.",
    de: `The setattr() function sets an attribute value on an object. If class MyClass: pass; obj = MyClass(); setattr(obj, 'x', 1); obj.x, then obj.x returns 1 because setattr() sets the attribute 'x' to 1 on obj. It's equivalent to obj.x = 1, but allows you to set attributes dynamically using a string name. This is useful when the attribute name is stored in a variable.

setattr() function:
• setattr(obj, 'x', 1) sets attribute
• obj.x returns 1
• Equivalent to obj.x = 1
• Attribute name is string: 'x'
• Returns: 1

How it works:
• setattr(obj, 'x', 1) sets attribute 'x' = 1
• Creates attribute on obj
• obj.x accesses attribute
• Returns: 1

Example:
class MyClass: pass
obj = MyClass()
setattr(obj, 'x', 1)         # Sets obj.x = 1
obj.x                        # 1 (attribute set)

Common uses:
• Dynamic assignment: setattr(obj, attr_name, value) (attr_name is variable)
• Attribute setting: setattr(obj, 'value', 5)
• Object introspection
• Dynamic attribute assignment

Example: If class MyClass: pass; obj = MyClass(); setattr(obj, 'x', 1); obj.x, then obj.x returns 1 because setattr() sets the attribute value on an object, equivalent to obj.x = 1.

Key Concepts:
• setattr() function: • setattr(obj, 'x', 1) sets attribute • obj.x returns 1 • Equivalent to obj.x = 1 • Attribute name is string: 'x' • Returns: 1 How it works: • setattr(obj, 'x', 1) sets attribute 'x' = 1 • Creates attribute on obj • obj.x accesses attribute • Returns: 1 Example: class MyClass: pass obj = MyClass() setattr(obj, 'x', 1) # Sets obj.x = 1 obj.x # 1 (attribute set) Common uses: • Dynamic assignment: setattr(obj, attr_name, value) (attr_name is variable) • Attribute setting: setattr(obj, 'value', 5) • Object introspection • Dynamic attribute assignment Example: If class MyClass: pass; obj = MyClass(); setattr(obj, 'x', 1); obj.x, then obj.x returns 1 because setattr() sets the attribute value on an object, equivalent to obj.x = 1.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: pass; obj = MyClass(); obj.x = 1; delattr(obj, 'x'); hasattr(obj, 'x')?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "delattr() deletes attribute.",
    de: `The delattr() function deletes an attribute from an object. If class MyClass: pass; obj = MyClass(); obj.x = 1; delattr(obj, 'x'); hasattr(obj, 'x'), then hasattr(obj, 'x') returns False because delattr() deletes the attribute 'x' from obj. It's equivalent to del obj.x, but allows you to delete attributes dynamically using a string name. After deletion, the attribute no longer exists.

delattr() function:
• delattr(obj, 'x') deletes attribute
• hasattr(obj, 'x') returns False
• Equivalent to del obj.x
• Attribute name is string: 'x'
• Returns: False

How it works:
• obj.x = 1 sets attribute x = 1
• delattr(obj, 'x') deletes attribute 'x'
• Attribute removed from obj
• hasattr(obj, 'x') checks if 'x' exists
• Returns: False

Example:
class MyClass: pass
obj = MyClass()
obj.x = 1
delattr(obj, 'x')            # Deletes obj.x
hasattr(obj, 'x')            # False (attribute deleted)

Common uses:
• Dynamic deletion: delattr(obj, attr_name) (attr_name is variable)
• Attribute removal: delattr(obj, 'value')
• Object introspection
• Dynamic attribute deletion

Example: If class MyClass: pass; obj = MyClass(); obj.x = 1; delattr(obj, 'x'); hasattr(obj, 'x'), then hasattr(obj, 'x') returns False because delattr() deletes the attribute from an object, equivalent to del obj.x.

Key Concepts:
• delattr() function: • delattr(obj, 'x') deletes attribute • hasattr(obj, 'x') returns False • Equivalent to del obj.x • Attribute name is string: 'x' • Returns: False How it works: • obj.x = 1 sets attribute x = 1 • delattr(obj, 'x') deletes attribute 'x' • Attribute removed from obj • hasattr(obj, 'x') checks if 'x' exists • Returns: False Example: class MyClass: pass obj = MyClass() obj.x = 1 delattr(obj, 'x') # Deletes obj.x hasattr(obj, 'x') # False (attribute deleted) Common uses: • Dynamic deletion: delattr(obj, attr_name) (attr_name is variable) • Attribute removal: delattr(obj, 'value') • Object introspection • Dynamic attribute deletion Example: If class MyClass: pass; obj = MyClass(); obj.x = 1; delattr(obj, 'x'); hasattr(obj, 'x'), then hasattr(obj, 'x') returns False because delattr() deletes the attribute from an object, equivalent to del obj.x.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: pass; obj = MyClass(); dir(obj)?`, 
    o: ["List of attribute names", "Error", "None", "()"], 
    c: 0, 
    e: "dir() returns list of object's attributes.",
    de: `The dir() function returns a list of attribute names for an object. If class MyClass: pass; obj = MyClass(); dir(obj), then dir(obj) returns a list of attribute names because dir() lists all attributes (methods, properties, instance attributes, class attributes) that are accessible on the object. This includes attributes from the object's class and its base classes. It's useful for introspection and discovering what attributes an object has.

dir() function:
• dir(obj) returns list of attribute names
• Lists all accessible attributes
• Includes methods, properties, attributes
• Includes class and base class attributes
• Returns: list

How it works:
• dir(obj) lists attributes on obj
• Searches instance attributes
• Searches class attributes
• Searches base class attributes
• Returns list of attribute names

Example:
class MyClass: pass
obj = MyClass()
dir(obj)                     # ['__class__', '__dict__', ...] (list of attributes)

Common uses:
• Introspection: dir(obj) (see all attributes)
• Discovery: find available methods/attributes
• Object inspection
• Attribute listing

Example: If class MyClass: pass; obj = MyClass(); dir(obj), then dir(obj) returns a list of attribute names because dir() lists all accessible attributes on an object, including methods, properties, and attributes from the class and base classes.

Key Concepts:
• dir() function: • dir(obj) returns list of attribute names • Lists all accessible attributes • Includes methods, properties, attributes • Includes class and base class attributes • Returns: list How it works: • dir(obj) lists attributes on obj • Searches instance attributes • Searches class attributes • Searches base class attributes • Returns list of attribute names Example: class MyClass: pass obj = MyClass() dir(obj) # ['__class__', '__dict__', ...] (list of attributes) Common uses: • Introspection: dir(obj) (see all attributes) • Discovery: find available methods/attributes • Object inspection • Attribute listing Example: If class MyClass: pass; obj = MyClass(); dir(obj), then dir(obj) returns a list of attribute names because dir() lists all accessible attributes on an object, including methods, properties, and attributes from the class and base classes.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: x = 1; obj = MyClass(); 'x' in dir(obj)?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "dir() includes class attributes.",
    de: `The dir() function includes class attributes in its list. If class MyClass: x = 1; obj = MyClass(); 'x' in dir(obj), then 'x' in dir(obj) returns True because dir() includes class attributes (like x = 1) in addition to instance attributes. When you access dir(obj), it shows attributes from both the instance and the class, so class attributes are visible.

dir() includes class attributes:
• 'x' in dir(obj) returns True
• dir(obj) includes class attributes
• x = 1 is class attribute
• Visible in dir() output
• Returns: True

How it works:
• dir(obj) lists attributes
• Includes instance attributes
• Includes class attributes (x = 1)
• 'x' is in the list
• Returns: True

Example:
class MyClass: x = 1
obj = MyClass()
'x' in dir(obj)              # True (class attribute included)
dir(obj)                     # [..., 'x', ...] (includes class attribute)

Common uses:
• Attribute checking: 'attr' in dir(obj) (check if attribute exists)
• Introspection: dir(obj) shows class and instance attributes
• Object inspection
• Attribute discovery

Example: If class MyClass: x = 1; obj = MyClass(); 'x' in dir(obj), then 'x' in dir(obj) returns True because dir() includes class attributes in its list, so the class attribute x = 1 is visible.

Key Concepts:
• dir() includes class attributes: • 'x' in dir(obj) returns True • dir(obj) includes class attributes • x = 1 is class attribute • Visible in dir() output • Returns: True How it works: • dir(obj) lists attributes • Includes instance attributes • Includes class attributes (x = 1) • 'x' is in the list • Returns: True Example: class MyClass: x = 1 obj = MyClass() 'x' in dir(obj) # True (class attribute included) dir(obj) # [..., 'x', ...] (includes class attribute) Common uses: • Attribute checking: 'attr' in dir(obj) (check if attribute exists) • Introspection: dir(obj) shows class and instance attributes • Object inspection • Attribute discovery Example: If class MyClass: x = 1; obj = MyClass(); 'x' in dir(obj), then 'x' in dir(obj) returns True because dir() includes class attributes in its list, so the class attribute x = 1 is visible.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def method(self): pass; obj = MyClass(); 'method' in dir(obj)?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "dir() includes methods.",
    de: `The dir() function includes methods in its list. If class MyClass: def method(self): pass; obj = MyClass(); 'method' in dir(obj), then 'method' in dir(obj) returns True because dir() includes methods (like method()) in addition to attributes. Methods are attributes of the class, so they appear in dir() when called on an instance.

dir() includes methods:
• 'method' in dir(obj) returns True
• dir(obj) includes methods
• method() is class method
• Visible in dir() output
• Returns: True

How it works:
• dir(obj) lists attributes
• Includes instance attributes
• Includes class methods (method())
• 'method' is in the list
• Returns: True

Example:
class MyClass:
    def method(self): pass
obj = MyClass()
'method' in dir(obj)         # True (method included)
dir(obj)                     # [..., 'method', ...] (includes method)

Common uses:
• Method checking: 'method' in dir(obj) (check if method exists)
• Introspection: dir(obj) shows methods and attributes
• Object inspection
• Method discovery

Example: If class MyClass: def method(self): pass; obj = MyClass(); 'method' in dir(obj), then 'method' in dir(obj) returns True because dir() includes methods in its list, so the method() is visible.

Key Concepts:
• dir() includes methods: • 'method' in dir(obj) returns True • dir(obj) includes methods • method() is class method • Visible in dir() output • Returns: True How it works: • dir(obj) lists attributes • Includes instance attributes • Includes class methods (method()) • 'method' is in the list • Returns: True Example: class MyClass: def method(self): pass obj = MyClass() 'method' in dir(obj) # True (method included) dir(obj) # [..., 'method', ...] (includes method) Common uses: • Method checking: 'method' in dir(obj) (check if method exists) • Introspection: dir(obj) shows methods and attributes • Object inspection • Method discovery Example: If class MyClass: def method(self): pass; obj = MyClass(); 'method' in dir(obj), then 'method' in dir(obj) returns True because dir() includes methods in its list, so the method() is visible.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: pass; obj = MyClass(); vars(obj)?`, 
    o: ["{}", "Error", "None", "()"], 
    c: 0, 
    e: "vars() returns __dict__ (instance attributes).",
    de: `The vars() function returns the __dict__ attribute, which contains instance attributes. If class MyClass: pass; obj = MyClass(); vars(obj), then vars(obj) returns {} because vars() returns obj.__dict__, which is a dictionary containing the instance's attributes. For a newly created instance with no attributes, __dict__ is empty, so vars() returns an empty dictionary.

vars() function:
• vars(obj) returns {}
• vars() returns __dict__
• __dict__ contains instance attributes
• Empty instance has empty __dict__
• Returns: {}

How it works:
• vars(obj) returns obj.__dict__
• __dict__ is dictionary of instance attributes
• obj has no instance attributes
• __dict__ is empty: {}
• Returns: {}

Example:
class MyClass: pass
obj = MyClass()
vars(obj)                    # {} (empty, no instance attributes)
obj.x = 1
vars(obj)                    # {'x': 1} (instance attributes)

Common uses:
• Instance attributes: vars(obj) (get __dict__)
• Attribute dictionary: vars(obj) shows instance attributes
• Object inspection
• Attribute access

Example: If class MyClass: pass; obj = MyClass(); vars(obj), then vars(obj) returns {} because vars() returns __dict__, which contains instance attributes, and an empty instance has an empty dictionary.

Key Concepts:
• vars() function: • vars(obj) returns {} • vars() returns __dict__ • __dict__ contains instance attributes • Empty instance has empty __dict__ • Returns: {} How it works: • vars(obj) returns obj.__dict__ • __dict__ is dictionary of instance attributes • obj has no instance attributes • __dict__ is empty: {} • Returns: {} Example: class MyClass: pass obj = MyClass() vars(obj) # {} (empty, no instance attributes) obj.x = 1 vars(obj) # {'x': 1} (instance attributes) Common uses: • Instance attributes: vars(obj) (get __dict__) • Attribute dictionary: vars(obj) shows instance attributes • Object inspection • Attribute access Example: If class MyClass: pass; obj = MyClass(); vars(obj), then vars(obj) returns {} because vars() returns __dict__, which contains instance attributes, and an empty instance has an empty dictionary.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __init__(self, x): self.x = x; obj = MyClass(5); vars(obj)?`, 
    o: ["{'x': 5}", "{}", "Error", "None"], 
    c: 0, 
    e: "vars() returns dictionary of instance attributes.",
    de: `The vars() function returns a dictionary of instance attributes. If class MyClass: def __init__(self, x): self.x = x; obj = MyClass(5); vars(obj), then vars(obj) returns {'x': 5} because vars() returns obj.__dict__, which is a dictionary containing all instance attributes. When __init__ sets self.x = 5, it creates an instance attribute x = 5, which is stored in __dict__.

vars() returns instance attributes:
• vars(obj) returns {'x': 5}
• vars() returns __dict__
• __dict__ contains instance attributes
• self.x = 5 creates instance attribute
• Returns: {'x': 5}

How it works:
• MyClass(5) calls __init__(self, 5)
• __init__ sets self.x = 5 (instance attribute)
• Instance attribute stored in obj.__dict__
• vars(obj) returns obj.__dict__
• Returns: {'x': 5}

Example:
class MyClass:
    def __init__(self, x):
        self.x = x
obj = MyClass(5)
vars(obj)                    # {'x': 5} (instance attributes)

Common uses:
• Instance attributes: vars(obj) (get __dict__)
• Attribute dictionary: vars(obj) shows all instance attributes
• Object inspection
• Attribute access

Example: If class MyClass: def __init__(self, x): self.x = x; obj = MyClass(5); vars(obj), then vars(obj) returns {'x': 5} because vars() returns __dict__, which contains instance attributes, and self.x = 5 creates an instance attribute.

Key Concepts:
• vars() returns instance attributes: • vars(obj) returns {'x': 5} • vars() returns __dict__ • __dict__ contains instance attributes • self.x = 5 creates instance attribute • Returns: {'x': 5} How it works: • MyClass(5) calls __init__(self, 5) • __init__ sets self.x = 5 (instance attribute) • Instance attribute stored in obj.__dict__ • vars(obj) returns obj.__dict__ • Returns: {'x': 5} Example: class MyClass: def __init__(self, x): self.x = x obj = MyClass(5) vars(obj) # {'x': 5} (instance attributes) Common uses: • Instance attributes: vars(obj) (get __dict__) • Attribute dictionary: vars(obj) shows all instance attributes • Object inspection • Attribute access Example: If class MyClass: def __init__(self, x): self.x = x; obj = MyClass(5); vars(obj), then vars(obj) returns {'x': 5} because vars() returns __dict__, which contains instance attributes, and self.x = 5 creates an instance attribute.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: x = 1; vars(MyClass)?`, 
    o: ["Dict with class attributes", "Error", "None", "{}"], 
    c: 0, 
    e: "vars() on class returns class __dict__.",
    de: `The vars() function can be called on a class, returning the class's __dict__. If class MyClass: x = 1; vars(MyClass), then vars(MyClass) returns a dictionary with class attributes because vars() returns MyClass.__dict__, which contains class attributes, methods, and other class-level data. This includes x = 1 and other class-level definitions.

vars() on class:
• vars(MyClass) returns dict with class attributes
• vars() returns class __dict__
• __dict__ contains class attributes and methods
• Includes x = 1
• Returns: dict

How it works:
• vars(MyClass) returns MyClass.__dict__
• __dict__ is dictionary of class attributes
• Contains class attributes (x = 1)
• Contains methods and other class data
• Returns: dict

Example:
class MyClass: x = 1
vars(MyClass)                # {...'x': 1, ...} (class __dict__)

Common uses:
• Class attributes: vars(Class) (get class __dict__)
• Class dictionary: vars(Class) shows class attributes and methods
• Object inspection
• Class introspection

Example: If class MyClass: x = 1; vars(MyClass), then vars(MyClass) returns a dictionary with class attributes because vars() on a class returns the class's __dict__, which contains class attributes, methods, and other class-level data.

Key Concepts:
• vars() on class: • vars(MyClass) returns dict with class attributes • vars() returns class __dict__ • __dict__ contains class attributes and methods • Includes x = 1 • Returns: dict How it works: • vars(MyClass) returns MyClass.__dict__ • __dict__ is dictionary of class attributes • Contains class attributes (x = 1) • Contains methods and other class data • Returns: dict Example: class MyClass: x = 1 vars(MyClass) # {...'x': 1, ...} (class __dict__) Common uses: • Class attributes: vars(Class) (get class __dict__) • Class dictionary: vars(Class) shows class attributes and methods • Object inspection • Class introspection Example: If class MyClass: x = 1; vars(MyClass), then vars(MyClass) returns a dictionary with class attributes because vars() on a class returns the class's __dict__, which contains class attributes, methods, and other class-level data.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  
  // 81-90: Object Identity and Comparison
  (_i: number) => ({ 
    q: `What is class MyClass: pass; obj1 = MyClass(); obj2 = MyClass(); obj1 is obj2?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "Different instances are not identical.",
    de: `The is operator checks object identity (whether two variables refer to the same object). If class MyClass: pass; obj1 = MyClass(); obj2 = MyClass(); obj1 is obj2, then obj1 is obj2 returns False because obj1 and obj2 are different instances - each call to MyClass() creates a new, separate object. The is operator checks if two variables point to the same object in memory, not if they have the same value.

Different instances:
• obj1 is obj2 returns False
• obj1 and obj2 are different instances
• Each MyClass() creates new object
• is checks identity (same object)
• Returns: False

How it works:
• MyClass() creates first instance (obj1)
• MyClass() creates second instance (obj2)
• obj1 and obj2 are different objects
• obj1 is obj2 checks if same object
• Different objects, so returns: False

Example:
class MyClass: pass
obj1 = MyClass()             # Creates first instance
obj2 = MyClass()             # Creates second instance (different)
obj1 is obj2                 # False (different instances)

Common uses:
• Identity check: obj1 is obj2 (check if same object)
• Object comparison: if obj1 is obj2: (identity)
• Object identity
• Reference comparison

Example: If class MyClass: pass; obj1 = MyClass(); obj2 = MyClass(); obj1 is obj2, then obj1 is obj2 returns False because different instances are not identical - each call to MyClass() creates a separate object.

Key Concepts:
• Different instances: • obj1 is obj2 returns False • obj1 and obj2 are different instances • Each MyClass() creates new object • is checks identity (same object) • Returns: False How it works: • MyClass() creates first instance (obj1) • MyClass() creates second instance (obj2) • obj1 and obj2 are different objects • obj1 is obj2 checks if same object • Different objects, so returns: False Example: class MyClass: pass obj1 = MyClass() # Creates first instance obj2 = MyClass() # Creates second instance (different) obj1 is obj2 # False (different instances) Common uses: • Identity check: obj1 is obj2 (check if same object) • Object comparison: if obj1 is obj2: (identity) • Object identity • Reference comparison Example: If class MyClass: pass; obj1 = MyClass(); obj2 = MyClass(); obj1 is obj2, then obj1 is obj2 returns False because different instances are not identical - each call to MyClass() creates a separate object.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: pass; obj1 = MyClass(); obj2 = obj1; obj1 is obj2?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Same object reference is identical.",
    de: `When two variables refer to the same object, is returns True. If class MyClass: pass; obj1 = MyClass(); obj2 = obj1; obj1 is obj2, then obj1 is obj2 returns True because obj2 = obj1 assigns the same object reference to obj2, so both variables point to the same object. The is operator checks object identity, and since obj1 and obj2 refer to the same object, they are identical.

Same object reference:
• obj1 is obj2 returns True
• obj2 = obj1 assigns same reference
• Both variables point to same object
• is checks identity (same object)
• Returns: True

How it works:
• MyClass() creates instance (obj1)
• obj2 = obj1 assigns same reference
• obj1 and obj2 point to same object
• obj1 is obj2 checks if same object
• Same object, so returns: True

Example:
class MyClass: pass
obj1 = MyClass()             # Creates instance
obj2 = obj1                  # Assigns same reference
obj1 is obj2                 # True (same object)

Common uses:
• Reference check: obj1 is obj2 (check if same object)
• Object identity: if obj1 is obj2: (same reference)
• Object identity
• Reference comparison

Example: If class MyClass: pass; obj1 = MyClass(); obj2 = obj1; obj1 is obj2, then obj1 is obj2 returns True because the same object reference is identical - both variables point to the same object.

Key Concepts:
• Same object reference: • obj1 is obj2 returns True • obj2 = obj1 assigns same reference • Both variables point to same object • is checks identity (same object) • Returns: True How it works: • MyClass() creates instance (obj1) • obj2 = obj1 assigns same reference • obj1 and obj2 point to same object • obj1 is obj2 checks if same object • Same object, so returns: True Example: class MyClass: pass obj1 = MyClass() # Creates instance obj2 = obj1 # Assigns same reference obj1 is obj2 # True (same object) Common uses: • Reference check: obj1 is obj2 (check if same object) • Object identity: if obj1 is obj2: (same reference) • Object identity • Reference comparison Example: If class MyClass: pass; obj1 = MyClass(); obj2 = obj1; obj1 is obj2, then obj1 is obj2 returns True because the same object reference is identical - both variables point to the same object.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: pass; obj1 = MyClass(); obj2 = MyClass(); obj1 == obj2?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "Default == compares identity (same as is).",
    de: `By default, the == operator compares object identity (same as is) if __eq__ is not defined. If class MyClass: pass; obj1 = MyClass(); obj2 = MyClass(); obj1 == obj2, then obj1 == obj2 returns False because without a custom __eq__ method, == defaults to comparing object identity, which is the same as is. Since obj1 and obj2 are different instances, they are not equal. To define custom equality, you need to implement __eq__.

Default == behavior:
• obj1 == obj2 returns False
• No __eq__ defined
• == defaults to identity comparison (same as is)
• Different instances are not equal
• Returns: False

How it works:
• obj1 == obj2 uses == operator
• No __eq__ method defined
• Python uses default identity comparison
• Compares obj1 is obj2 (identity)
• Different objects, so returns: False

Example:
class MyClass: pass
obj1 = MyClass(); obj2 = MyClass()
obj1 == obj2                 # False (default: identity comparison)
obj1 is obj2                 # False (same result)

Common uses:
• Default comparison: == compares identity if no __eq__
• Custom equality: define __eq__ for value comparison
• Object comparison
• Equality operators

Example: If class MyClass: pass; obj1 = MyClass(); obj2 = MyClass(); obj1 == obj2, then obj1 == obj2 returns False because the default == compares identity (same as is) when __eq__ is not defined, and different instances are not identical.

Key Concepts:
• Default == behavior: • obj1 == obj2 returns False • No __eq__ defined • == defaults to identity comparison (same as is) • Different instances are not equal • Returns: False How it works: • obj1 == obj2 uses == operator • No __eq__ method defined • Python uses default identity comparison • Compares obj1 is obj2 (identity) • Different objects, so returns: False Example: class MyClass: pass obj1 = MyClass(); obj2 = MyClass() obj1 == obj2 # False (default: identity comparison) obj1 is obj2 # False (same result) Common uses: • Default comparison: == compares identity if no __eq__ • Custom equality: define __eq__ for value comparison • Object comparison • Equality operators Example: If class MyClass: pass; obj1 = MyClass(); obj2 = MyClass(); obj1 == obj2, then obj1 == obj2 returns False because the default == compares identity (same as is) when __eq__ is not defined, and different instances are not identical.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __eq__(self, other): return True; obj1 = MyClass(); obj2 = MyClass(); obj1 == obj2?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "__eq__ overrides == behavior.",
    de: `The __eq__ method overrides the default == behavior. If class MyClass: def __eq__(self, other): return True; obj1 = MyClass(); obj2 = MyClass(); obj1 == obj2, then obj1 == obj2 returns True because __eq__ is defined to always return True, overriding the default identity comparison. When you define __eq__, Python uses it for == comparisons instead of the default identity check.

__eq__ overrides ==:
• obj1 == obj2 returns True
• __eq__ defines == behavior
• __eq__ always returns True
• Overrides default identity comparison
• Returns: True

How it works:
• obj1 == obj2 uses == operator
• Python calls obj1.__eq__(obj2)
• __eq__ executes: return True
• Returns comparison result
• Returns: True

Example:
class MyClass:
    def __eq__(self, other):
        return True  # Always equal
obj1 = MyClass(); obj2 = MyClass()
obj1 == obj2                # True (uses __eq__)

Common uses:
• Custom equality: def __eq__(self, other): return self.value == other.value
• Value comparison: == compares values, not identity
• Special methods
• Operator overloading

Example: If class MyClass: def __eq__(self, other): return True; obj1 = MyClass(); obj2 = MyClass(); obj1 == obj2, then obj1 == obj2 returns True because __eq__ overrides the default == behavior, and it's defined to return True.

Key Concepts:
• __eq__ overrides ==: • obj1 == obj2 returns True • __eq__ defines == behavior • __eq__ always returns True • Overrides default identity comparison • Returns: True How it works: • obj1 == obj2 uses == operator • Python calls obj1.__eq__(obj2) • __eq__ executes: return True • Returns comparison result • Returns: True Example: class MyClass: def __eq__(self, other): return True # Always equal obj1 = MyClass(); obj2 = MyClass() obj1 == obj2 # True (uses __eq__) Common uses: • Custom equality: def __eq__(self, other): return self.value == other.value • Value comparison: == compares values, not identity • Special methods • Operator overloading Example: If class MyClass: def __eq__(self, other): return True; obj1 = MyClass(); obj2 = MyClass(); obj1 == obj2, then obj1 == obj2 returns True because __eq__ overrides the default == behavior, and it's defined to return True.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __eq__(self, other): return True; obj1 = MyClass(); obj2 = MyClass(); obj1 != obj2?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "__ne__ defaults to not __eq__ if not defined.",
    de: `If __ne__ is not defined, Python automatically provides it as the negation of __eq__. If class MyClass: def __eq__(self, other): return True; obj1 = MyClass(); obj2 = MyClass(); obj1 != obj2, then obj1 != obj2 returns False because __ne__ is not defined, so Python uses not (obj1 == obj2), which is not True = False. This ensures that != is the logical opposite of ==.

__ne__ defaults to not __eq__:
• obj1 != obj2 returns False
• __ne__ not defined
• Python uses not (obj1 == obj2)
• obj1 == obj2 returns True (from __eq__)
• not True = False
• Returns: False

How it works:
• obj1 != obj2 uses != operator
• __ne__ not defined
• Python uses not (obj1 == obj2)
• obj1 == obj2 returns True (from __eq__)
• not True = False
• Returns: False

Example:
class MyClass:
    def __eq__(self, other):
        return True
obj1 = MyClass(); obj2 = MyClass()
obj1 != obj2                # False (not (obj1 == obj2) = not True)

Common uses:
• Automatic __ne__: Python provides not __eq__ if __ne__ not defined
• Logical consistency: != is opposite of ==
• Special methods
• Operator overloading

Example: If class MyClass: def __eq__(self, other): return True; obj1 = MyClass(); obj2 = MyClass(); obj1 != obj2, then obj1 != obj2 returns False because __ne__ defaults to not __eq__ if not defined, so not True = False.

Key Concepts:
• __ne__ defaults to not __eq__: • obj1 != obj2 returns False • __ne__ not defined • Python uses not (obj1 == obj2) • obj1 == obj2 returns True (from __eq__) • not True = False • Returns: False How it works: • obj1 != obj2 uses != operator • __ne__ not defined • Python uses not (obj1 == obj2) • obj1 == obj2 returns True (from __eq__) • not True = False • Returns: False Example: class MyClass: def __eq__(self, other): return True obj1 = MyClass(); obj2 = MyClass() obj1 != obj2 # False (not (obj1 == obj2) = not True) Common uses: • Automatic __ne__: Python provides not __eq__ if __ne__ not defined • Logical consistency: != is opposite of == • Special methods • Operator overloading Example: If class MyClass: def __eq__(self, other): return True; obj1 = MyClass(); obj2 = MyClass(); obj1 != obj2, then obj1 != obj2 returns False because __ne__ defaults to not __eq__ if not defined, so not True = False.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __hash__(self): return 1; hash(MyClass())?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "__hash__ defines hash value.",
    de: `The __hash__ method defines the hash value for an object. If class MyClass: def __hash__(self): return 1; hash(MyClass()), then hash(MyClass()) returns 1 because __hash__ is a special method that's called when you use hash() on an object. The hash value is used for dictionary keys and set membership. Objects with __hash__ defined can be used as dictionary keys or added to sets.

__hash__ method:
• hash(MyClass()) returns 1
• __hash__ defines hash value
• Called by hash() function
• Returns hash value: 1
• Returns: 1

How it works:
• hash(MyClass()) calls hash() function
• Python calls instance.__hash__()
• __hash__ executes: return 1
• Returns hash value
• Returns: 1

Example:
class MyClass:
    def __hash__(self):
        return 1
hash(MyClass())              # 1 (uses __hash__)

Common uses:
• Hashable objects: def __hash__(self): return hash(self.value)
• Dictionary keys: objects with __hash__ can be dict keys
• Special methods
• Object hashing

Example: If class MyClass: def __hash__(self): return 1; hash(MyClass()), then hash(MyClass()) returns 1 because __hash__ defines the hash value for an object, used by hash().

Key Concepts:
• __hash__ method: • hash(MyClass()) returns 1 • __hash__ defines hash value • Called by hash() function • Returns hash value: 1 • Returns: 1 How it works: • hash(MyClass()) calls hash() function • Python calls instance.__hash__() • __hash__ executes: return 1 • Returns hash value • Returns: 1 Example: class MyClass: def __hash__(self): return 1 hash(MyClass()) # 1 (uses __hash__) Common uses: • Hashable objects: def __hash__(self): return hash(self.value) • Dictionary keys: objects with __hash__ can be dict keys • Special methods • Object hashing Example: If class MyClass: def __hash__(self): return 1; hash(MyClass()), then hash(MyClass()) returns 1 because __hash__ defines the hash value for an object, used by hash().

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __eq__(self, other): return True; hash(MyClass())?`, 
    o: ["TypeError (unhashable)", "1", "Error", "None"], 
    c: 0, 
    e: "Defining __eq__ without __hash__ makes object unhashable.",
    de: `Defining __eq__ without __hash__ makes an object unhashable. If class MyClass: def __eq__(self, other): return True; hash(MyClass()), then hash(MyClass()) raises a TypeError because when you define __eq__ without __hash__, Python sets __hash__ to None, making the object unhashable. This prevents objects from being used as dictionary keys or added to sets. To make an object hashable, you must define both __eq__ and __hash__, or define neither.

__eq__ without __hash__:
• hash(MyClass()) raises TypeError
• __eq__ defined, __hash__ not defined
• Python sets __hash__ = None
• Object becomes unhashable
• Raises TypeError

How it works:
• hash(MyClass()) calls hash() function
• __eq__ is defined, __hash__ is not
• Python sets __hash__ = None (unhashable)
• hash() cannot hash unhashable object
• Raises TypeError: unhashable type

Example:
class MyClass:
    def __eq__(self, other):
        return True
hash(MyClass())              # TypeError (unhashable)

Common uses:
• Understanding hashability: __eq__ without __hash__ makes unhashable
• Hashable objects: define both __eq__ and __hash__
• Special methods
• Object hashing

Example: If class MyClass: def __eq__(self, other): return True; hash(MyClass()), then hash(MyClass()) raises a TypeError because defining __eq__ without __hash__ makes the object unhashable (Python sets __hash__ = None).

Key Concepts:
• __eq__ without __hash__: • hash(MyClass()) raises TypeError • __eq__ defined, __hash__ not defined • Python sets __hash__ = None • Object becomes unhashable • Raises TypeError How it works: • hash(MyClass()) calls hash() function • __eq__ is defined, __hash__ is not • Python sets __hash__ = None (unhashable) • hash() cannot hash unhashable object • Raises TypeError: unhashable type Example: class MyClass: def __eq__(self, other): return True hash(MyClass()) # TypeError (unhashable) Common uses: • Understanding hashability: __eq__ without __hash__ makes unhashable • Hashable objects: define both __eq__ and __hash__ • Special methods • Object hashing Example: If class MyClass: def __eq__(self, other): return True; hash(MyClass()), then hash(MyClass()) raises a TypeError because defining __eq__ without __hash__ makes the object unhashable (Python sets __hash__ = None).

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __eq__(self, other): return True; def __hash__(self): return 1; {MyClass(): 1}?`, 
    o: ["{MyClass instance: 1}", "Error", "None", "{}"], 
    c: 0, 
    e: "Object with __hash__ can be dict key.",
    de: `Objects with __hash__ defined can be used as dictionary keys. If class MyClass: def __eq__(self, other): return True; def __hash__(self): return 1; {MyClass(): 1}, then {MyClass(): 1} creates a dictionary with a MyClass instance as a key because the object has both __eq__ and __hash__ defined, making it hashable. Hashable objects can be used as dictionary keys and added to sets.

Object with __hash__ as dict key:
• {MyClass(): 1} creates dictionary
• MyClass instance is hashable (has __hash__)
• Can be used as dictionary key
• Creates dict: {MyClass instance: 1}
• Returns: dict

How it works:
• MyClass() creates instance
• Instance has __eq__ and __hash__ (hashable)
• {MyClass(): 1} uses instance as key
• Dictionary created successfully
• Returns: {MyClass instance: 1}

Example:
class MyClass:
    def __eq__(self, other):
        return True
    def __hash__(self):
        return 1
{MyClass(): 1}               # {MyClass instance: 1} (hashable, can be key)

Common uses:
• Dictionary keys: {obj: value} (obj must be hashable)
• Sets: {obj} (obj must be hashable)
• Hashable objects
• Object hashing

Example: If class MyClass: def __eq__(self, other): return True; def __hash__(self): return 1; {MyClass(): 1}, then {MyClass(): 1} creates a dictionary because objects with __hash__ defined can be used as dictionary keys.

Key Concepts:
• Object with __hash__ as dict key: • {MyClass(): 1} creates dictionary • MyClass instance is hashable (has __hash__) • Can be used as dictionary key • Creates dict: {MyClass instance: 1} • Returns: dict How it works: • MyClass() creates instance • Instance has __eq__ and __hash__ (hashable) • {MyClass(): 1} uses instance as key • Dictionary created successfully • Returns: {MyClass instance: 1} Example: class MyClass: def __eq__(self, other): return True def __hash__(self): return 1 {MyClass(): 1} # {MyClass instance: 1} (hashable, can be key) Common uses: • Dictionary keys: {obj: value} (obj must be hashable) • Sets: {obj} (obj must be hashable) • Hashable objects • Object hashing Example: If class MyClass: def __eq__(self, other): return True; def __hash__(self): return 1; {MyClass(): 1}, then {MyClass(): 1} creates a dictionary because objects with __hash__ defined can be used as dictionary keys.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: pass; id(MyClass())?`, 
    o: ["Unique integer id", "Error", "None", "0"], 
    c: 0, 
    e: "id() returns unique identifier for object.",
    de: `The id() function returns a unique integer identifier for an object. If class MyClass: pass; id(MyClass()), then id(MyClass()) returns a unique integer id because id() returns the memory address (or a unique identifier) of the object. Each object has a unique id, and the id remains constant for the object's lifetime. The id is used internally by Python for object identity checks (is operator uses id()).

id() function:
• id(MyClass()) returns unique integer id
• id() returns object identifier
• Unique for each object
• Represents memory address/identifier
• Returns: integer

How it works:
• MyClass() creates instance
• id(instance) gets object identifier
• Returns unique integer
• Used for identity checks
• Returns: unique integer id

Example:
class MyClass: pass
id(MyClass())                # 140234567890 (unique integer id)
obj = MyClass()
id(obj)                      # 140234567891 (different id)

Common uses:
• Object identity: id(obj1) == id(obj2) (same as obj1 is obj2)
• Unique identifier: id(obj) (object's unique id)
• Object identity
• Memory address

Example: If class MyClass: pass; id(MyClass()), then id(MyClass()) returns a unique integer id because id() returns a unique identifier for an object, representing its memory address or identifier.

Key Concepts:
• id() function: • id(MyClass()) returns unique integer id • id() returns object identifier • Unique for each object • Represents memory address/identifier • Returns: integer How it works: • MyClass() creates instance • id(instance) gets object identifier • Returns unique integer • Used for identity checks • Returns: unique integer id Example: class MyClass: pass id(MyClass()) # 140234567890 (unique integer id) obj = MyClass() id(obj) # 140234567891 (different id) Common uses: • Object identity: id(obj1) == id(obj2) (same as obj1 is obj2) • Unique identifier: id(obj) (object's unique id) • Object identity • Memory address Example: If class MyClass: pass; id(MyClass()), then id(MyClass()) returns a unique integer id because id() returns a unique identifier for an object, representing its memory address or identifier.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: pass; obj1 = MyClass(); obj2 = MyClass(); id(obj1) == id(obj2)?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "Different objects have different ids.",
    de: `Different objects have different ids. If class MyClass: pass; obj1 = MyClass(); obj2 = MyClass(); id(obj1) == id(obj2), then id(obj1) == id(obj2) returns False because obj1 and obj2 are different instances, so they have different ids. Each object has a unique id that distinguishes it from all other objects. The id() function returns a unique identifier for each object, and different objects always have different ids.

Different objects, different ids:
• id(obj1) == id(obj2) returns False
• obj1 and obj2 are different instances
• Each object has unique id
• Different objects have different ids
• Returns: False

How it works:
• MyClass() creates first instance (obj1)
• MyClass() creates second instance (obj2)
• id(obj1) gets obj1's unique id
• id(obj2) gets obj2's unique id
• Different objects, different ids
• Returns: False

Example:
class MyClass: pass
obj1 = MyClass()             # id(obj1) = 140234567890
obj2 = MyClass()             # id(obj2) = 140234567891 (different)
id(obj1) == id(obj2)         # False (different ids)

Common uses:
• Identity check: id(obj1) == id(obj2) (same as obj1 is obj2)
• Unique identifiers: different objects have different ids
• Object identity
• Memory addresses

Example: If class MyClass: pass; obj1 = MyClass(); obj2 = MyClass(); id(obj1) == id(obj2), then id(obj1) == id(obj2) returns False because different objects have different ids - each object has a unique identifier.

Key Concepts:
• Different objects, different ids: • id(obj1) == id(obj2) returns False • obj1 and obj2 are different instances • Each object has unique id • Different objects have different ids • Returns: False How it works: • MyClass() creates first instance (obj1) • MyClass() creates second instance (obj2) • id(obj1) gets obj1's unique id • id(obj2) gets obj2's unique id • Different objects, different ids • Returns: False Example: class MyClass: pass obj1 = MyClass() # id(obj1) = 140234567890 obj2 = MyClass() # id(obj2) = 140234567891 (different) id(obj1) == id(obj2) # False (different ids) Common uses: • Identity check: id(obj1) == id(obj2) (same as obj1 is obj2) • Unique identifiers: different objects have different ids • Object identity • Memory addresses Example: If class MyClass: pass; obj1 = MyClass(); obj2 = MyClass(); id(obj1) == id(obj2), then id(obj1) == id(obj2) returns False because different objects have different ids - each object has a unique identifier.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  
  // 91-100: Advanced Class Features
  (_i: number) => ({ 
    q: `What is class MyClass: __slots__ = ['x', 'y']; obj = MyClass(); obj.x = 1; obj.z = 2?`, 
    o: ["AttributeError", "Works fine", "Error", "None"], 
    c: 0, 
    e: "__slots__ restricts allowed attributes.",
    de: `The __slots__ attribute restricts which attributes can be set on instances. If class MyClass: __slots__ = ['x', 'y']; obj = MyClass(); obj.x = 1; obj.z = 2, then obj.z = 2 raises an AttributeError because __slots__ only allows 'x' and 'y' as instance attributes. Any attempt to set an attribute not in __slots__ raises an AttributeError. This saves memory by preventing the creation of __dict__ for instances.

__slots__ restriction:
• obj.z = 2 raises AttributeError
• __slots__ = ['x', 'y'] restricts allowed attributes
• Only 'x' and 'y' allowed
• 'z' not in __slots__
• Raises AttributeError

How it works:
• obj.x = 1 works (x in __slots__)
• obj.z = 2 attempts to set 'z'
• 'z' not in __slots__ = ['x', 'y']
• Attribute not allowed
• Raises AttributeError: 'MyClass' object has no attribute 'z'

Example:
class MyClass:
    __slots__ = ['x', 'y']
obj = MyClass()
obj.x = 1                    # Works (x in __slots__)
obj.z = 2                    # AttributeError (z not in __slots__)

Common uses:
• Memory optimization: __slots__ = ['attr1', 'attr2'] (saves memory)
• Attribute restriction: prevent dynamic attributes
• Class optimization
• Memory efficiency

Example: If class MyClass: __slots__ = ['x', 'y']; obj = MyClass(); obj.x = 1; obj.z = 2, then obj.z = 2 raises an AttributeError because __slots__ restricts allowed attributes to only those listed, and 'z' is not in __slots__.

Key Concepts:
• __slots__ restriction: • obj.z = 2 raises AttributeError • __slots__ = ['x', 'y'] restricts allowed attributes • Only 'x' and 'y' allowed • 'z' not in __slots__ • Raises AttributeError How it works: • obj.x = 1 works (x in __slots__) • obj.z = 2 attempts to set 'z' • 'z' not in __slots__ = ['x', 'y'] • Attribute not allowed • Raises AttributeError: 'MyClass' object has no attribute 'z' Example: class MyClass: __slots__ = ['x', 'y'] obj = MyClass() obj.x = 1 # Works (x in __slots__) obj.z = 2 # AttributeError (z not in __slots__) Common uses: • Memory optimization: __slots__ = ['attr1', 'attr2'] (saves memory) • Attribute restriction: prevent dynamic attributes • Class optimization • Memory efficiency Example: If class MyClass: __slots__ = ['x', 'y']; obj = MyClass(); obj.x = 1; obj.z = 2, then obj.z = 2 raises an AttributeError because __slots__ restricts allowed attributes to only those listed, and 'z' is not in __slots__.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: __slots__ = ['x']; obj = MyClass(); obj.x = 1; vars(obj)?`, 
    o: ["AttributeError (no __dict__)", "{}", "Error", "None"], 
    c: 0, 
    e: "__slots__ removes __dict__ (saves memory).",
    de: `Using __slots__ removes the __dict__ attribute from instances, saving memory. If class MyClass: __slots__ = ['x']; obj = MyClass(); obj.x = 1; vars(obj), then vars(obj) raises an AttributeError because __slots__ prevents the creation of __dict__ for instances. vars() returns __dict__, but instances with __slots__ don't have __dict__, so it raises an error. This is the memory-saving benefit of __slots__ - instances don't need a dictionary to store attributes.

__slots__ removes __dict__:
• vars(obj) raises AttributeError
• __slots__ prevents __dict__ creation
• Instances don't have __dict__
• vars() requires __dict__
• Raises AttributeError

How it works:
• obj.x = 1 sets attribute (stored in slots, not __dict__)
• vars(obj) tries to access __dict__
• Instance has no __dict__ (__slots__ prevents it)
• vars() cannot access non-existent __dict__
• Raises AttributeError: 'MyClass' object has no attribute '__dict__'

Example:
class MyClass:
    __slots__ = ['x']
obj = MyClass()
obj.x = 1
vars(obj)                    # AttributeError (no __dict__)

Common uses:
• Memory optimization: __slots__ removes __dict__ (saves memory)
• Fixed attributes: __slots__ = ['attr1', 'attr2'] (no dynamic attributes)
• Class optimization
• Memory efficiency

Example: If class MyClass: __slots__ = ['x']; obj = MyClass(); obj.x = 1; vars(obj), then vars(obj) raises an AttributeError because __slots__ removes __dict__ from instances, and vars() requires __dict__.

Key Concepts:
• __slots__ removes __dict__: • vars(obj) raises AttributeError • __slots__ prevents __dict__ creation • Instances don't have __dict__ • vars() requires __dict__ • Raises AttributeError How it works: • obj.x = 1 sets attribute (stored in slots, not __dict__) • vars(obj) tries to access __dict__ • Instance has no __dict__ (__slots__ prevents it) • vars() cannot access non-existent __dict__ • Raises AttributeError: 'MyClass' object has no attribute '__dict__' Example: class MyClass: __slots__ = ['x'] obj = MyClass() obj.x = 1 vars(obj) # AttributeError (no __dict__) Common uses: • Memory optimization: __slots__ removes __dict__ (saves memory) • Fixed attributes: __slots__ = ['attr1', 'attr2'] (no dynamic attributes) • Class optimization • Memory efficiency Example: If class MyClass: __slots__ = ['x']; obj = MyClass(); obj.x = 1; vars(obj), then vars(obj) raises an AttributeError because __slots__ removes __dict__ from instances, and vars() requires __dict__.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def __init__(self): self.x = 1; obj = MyClass(); obj.__dict__?`, 
    o: ["{'x': 1}", "{}", "Error", "None"], 
    c: 0, 
    e: "__dict__ contains instance attributes.",
    de: `The __dict__ attribute contains a dictionary of instance attributes. If class MyClass: def __init__(self): self.x = 1; obj = MyClass(); obj.__dict__, then obj.__dict__ returns {'x': 1} because __dict__ is a dictionary that stores all instance attributes. When __init__ sets self.x = 1, it creates an instance attribute that's stored in obj.__dict__. This is how Python stores instance attributes internally.

__dict__ contains instance attributes:
• obj.__dict__ returns {'x': 1}
• __dict__ is dictionary of instance attributes
• self.x = 1 creates instance attribute
• Stored in obj.__dict__
• Returns: {'x': 1}

How it works:
• MyClass() calls __init__(self)
• __init__ sets self.x = 1 (instance attribute)
• Instance attribute stored in obj.__dict__
• obj.__dict__ contains {'x': 1}
• Returns: {'x': 1}

Example:
class MyClass:
    def __init__(self):
        self.x = 1
obj = MyClass()
obj.__dict__                 # {'x': 1} (instance attributes)

Common uses:
• Instance attributes: obj.__dict__ (get all instance attributes)
• Attribute dictionary: obj.__dict__ shows instance data
• Object inspection
• Attribute access

Example: If class MyClass: def __init__(self): self.x = 1; obj = MyClass(); obj.__dict__, then obj.__dict__ returns {'x': 1} because __dict__ contains instance attributes, and self.x = 1 creates an instance attribute stored in __dict__.

Key Concepts:
• __dict__ contains instance attributes: • obj.__dict__ returns {'x': 1} • __dict__ is dictionary of instance attributes • self.x = 1 creates instance attribute • Stored in obj.__dict__ • Returns: {'x': 1} How it works: • MyClass() calls __init__(self) • __init__ sets self.x = 1 (instance attribute) • Instance attribute stored in obj.__dict__ • obj.__dict__ contains {'x': 1} • Returns: {'x': 1} Example: class MyClass: def __init__(self): self.x = 1 obj = MyClass() obj.__dict__ # {'x': 1} (instance attributes) Common uses: • Instance attributes: obj.__dict__ (get all instance attributes) • Attribute dictionary: obj.__dict__ shows instance data • Object inspection • Attribute access Example: If class MyClass: def __init__(self): self.x = 1; obj = MyClass(); obj.__dict__, then obj.__dict__ returns {'x': 1} because __dict__ contains instance attributes, and self.x = 1 creates an instance attribute stored in __dict__.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: x = 1; MyClass.__dict__?`, 
    o: ["Dict with class attributes and methods", "{}", "Error", "None"], 
    c: 0, 
    e: "__dict__ on class contains class attributes.",
    de: `The __dict__ attribute on a class contains class attributes and methods. If class MyClass: x = 1; MyClass.__dict__, then MyClass.__dict__ returns a dictionary with class attributes and methods because __dict__ on a class stores all class-level data, including class attributes (like x = 1), methods, and other class metadata. This is the namespace dictionary for the class.

Class __dict__:
• MyClass.__dict__ returns dict with class attributes
• __dict__ contains class-level data
• Includes class attributes (x = 1)
• Includes methods and metadata
• Returns: dict

How it works:
• class MyClass: x = 1 creates class
• Class attributes stored in MyClass.__dict__
• __dict__ contains 'x': 1 and other class data
• Returns dictionary of class attributes
• Returns: dict

Example:
class MyClass: x = 1
MyClass.__dict__             # {...'x': 1, ...} (class attributes and methods)

Common uses:
• Class attributes: MyClass.__dict__ (get all class attributes)
• Class dictionary: MyClass.__dict__ shows class data
• Object inspection
• Class introspection

Example: If class MyClass: x = 1; MyClass.__dict__, then MyClass.__dict__ returns a dictionary with class attributes because __dict__ on a class contains class attributes, methods, and other class-level data.

Key Concepts:
• Class __dict__: • MyClass.__dict__ returns dict with class attributes • __dict__ contains class-level data • Includes class attributes (x = 1) • Includes methods and metadata • Returns: dict How it works: • class MyClass: x = 1 creates class • Class attributes stored in MyClass.__dict__ • __dict__ contains 'x': 1 and other class data • Returns dictionary of class attributes • Returns: dict Example: class MyClass: x = 1 MyClass.__dict__ # {...'x': 1, ...} (class attributes and methods) Common uses: • Class attributes: MyClass.__dict__ (get all class attributes) • Class dictionary: MyClass.__dict__ shows class data • Object inspection • Class introspection Example: If class MyClass: x = 1; MyClass.__dict__, then MyClass.__dict__ returns a dictionary with class attributes because __dict__ on a class contains class attributes, methods, and other class-level data.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: def method(self): pass; 'method' in MyClass.__dict__?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Methods are in class __dict__.",
    de: `Methods are stored in the class __dict__. If class MyClass: def method(self): pass; 'method' in MyClass.__dict__, then 'method' in MyClass.__dict__ returns True because methods are class attributes, so they're stored in the class's __dict__. When you define a method in a class, it becomes an attribute of the class, stored in MyClass.__dict__.

Methods in class __dict__:
• 'method' in MyClass.__dict__ returns True
• Methods are class attributes
• Stored in class __dict__
• 'method' is in the dictionary
• Returns: True

How it works:
• def method(self): pass defines method
• Method becomes class attribute
• Stored in MyClass.__dict__
• 'method' in MyClass.__dict__ checks if key exists
• Returns: True

Example:
class MyClass:
    def method(self): pass
'method' in MyClass.__dict__  # True (method in class __dict__)

Common uses:
• Method checking: 'method' in MyClass.__dict__ (check if method exists)
• Class introspection: MyClass.__dict__ shows methods
• Object inspection
• Method discovery

Example: If class MyClass: def method(self): pass; 'method' in MyClass.__dict__, then 'method' in MyClass.__dict__ returns True because methods are stored in the class __dict__ as class attributes.

Key Concepts:
• Methods in class __dict__: • 'method' in MyClass.__dict__ returns True • Methods are class attributes • Stored in class __dict__ • 'method' is in the dictionary • Returns: True How it works: • def method(self): pass defines method • Method becomes class attribute • Stored in MyClass.__dict__ • 'method' in MyClass.__dict__ checks if key exists • Returns: True Example: class MyClass: def method(self): pass 'method' in MyClass.__dict__ # True (method in class __dict__) Common uses: • Method checking: 'method' in MyClass.__dict__ (check if method exists) • Class introspection: MyClass.__dict__ shows methods • Object inspection • Method discovery Example: If class MyClass: def method(self): pass; 'method' in MyClass.__dict__, then 'method' in MyClass.__dict__ returns True because methods are stored in the class __dict__ as class attributes.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: pass; obj = MyClass(); type(obj)?`, 
    o: ["<class '__main__.MyClass'>", "<class 'type'>", "Error", "None"], 
    c: 0, 
    e: "type() returns class of instance.",
    de: `The type() function returns the class of an instance. If class MyClass: pass; obj = MyClass(); type(obj), then type(obj) returns <class '__main__.MyClass'> because type() returns the class that an instance belongs to. For an instance of MyClass, type() returns the MyClass class object. This is useful for type checking and introspection.

type() on instance:
• type(obj) returns <class '__main__.MyClass'>
• type() returns class of instance
• obj is instance of MyClass
• Returns class object
• Returns: <class '__main__.MyClass'>

How it works:
• obj = MyClass() creates instance
• type(obj) gets class of instance
• Instance belongs to MyClass class
• Returns class object
• Returns: <class '__main__.MyClass'>

Example:
class MyClass: pass
obj = MyClass()
type(obj)                    # <class '__main__.MyClass'> (class of instance)

Common uses:
• Type checking: if type(obj) == MyClass: ...
• Type inspection: print(type(instance))
• Object type
• Type identification

Example: If class MyClass: pass; obj = MyClass(); type(obj), then type(obj) returns <class '__main__.MyClass'> because type() returns the class that an instance belongs to.

Key Concepts:
• • Type inspection: print(type(instance)) • Object type • Type identification Example: If class MyClass: pass; obj = MyClass(); type(obj), then type(obj) returns <class '__main__.MyClass'> because type() returns the class that an instance belongs to.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: pass; type(MyClass)?`, 
    o: ["<class 'type'>", "<class '__main__.MyClass'>", "Error", "None"], 
    c: 0, 
    e: "Classes are instances of type (metaclass).",
    de: `Classes are instances of type (the metaclass). If class MyClass: pass; type(MyClass), then type(MyClass) returns <class 'type'> because classes themselves are objects, and they are instances of the type class (the metaclass). In Python, everything is an object - classes are objects too, and they are instances of type. This is the foundation of Python's metaclass system.

Classes are instances of type:
• type(MyClass) returns <class 'type'>
• Classes are objects
• Classes are instances of type (metaclass)
• type is the class of classes
• Returns: <class 'type'>

How it works:
• class MyClass: pass creates class object
• MyClass is an object (instance of type)
• type(MyClass) gets class of MyClass
• MyClass is instance of type
• Returns: <class 'type'>

Example:
class MyClass: pass
type(MyClass)                # <class 'type'> (classes are instances of type)

Common uses:
• Metaclass understanding: classes are instances of type
• Type system: type is the class of classes
• Metaclasses
• Type system

Example: If class MyClass: pass; type(MyClass), then type(MyClass) returns <class 'type'> because classes are instances of type (the metaclass) - classes themselves are objects.

Key Concepts:
• Classes are instances of type: • type(MyClass) returns <class 'type'> • Classes are objects • Classes are instances of type (metaclass) • type is the class of classes • Returns: <class 'type'> How it works: • class MyClass: pass creates class object • MyClass is an object (instance of type) • type(MyClass) gets class of MyClass • MyClass is instance of type • Returns: <class 'type'> Example: class MyClass: pass type(MyClass) # <class 'type'> (classes are instances of type) Common uses: • Metaclass understanding: classes are instances of type • Type system: type is the class of classes • Metaclasses • Type system Example: If class MyClass: pass; type(MyClass), then type(MyClass) returns <class 'type'> because classes are instances of type (the metaclass) - classes themselves are objects.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: pass; issubclass(MyClass, object)?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "All classes inherit from object by default.",
    de: `All classes in Python inherit from object by default. If class MyClass: pass; issubclass(MyClass, object), then issubclass(MyClass, object) returns True because even if you don't explicitly specify a parent class, Python automatically makes object the base class. This is why all classes have access to methods like __str__, __repr__, etc. - they inherit from object.

All classes inherit from object:
• issubclass(MyClass, object) returns True
• MyClass inherits from object (default)
• Even without explicit parent
• object is base class
• Returns: True

How it works:
• class MyClass: pass creates class
• No explicit parent class specified
• Python automatically makes object the base class
• issubclass(MyClass, object) checks inheritance
• Returns: True

Example:
class MyClass: pass
issubclass(MyClass, object)  # True (all classes inherit from object)

Common uses:
• Inheritance check: issubclass(Class, object) (always True)
• Base class: object is base of all classes
• Object-oriented programming
• Inheritance hierarchy

Example: If class MyClass: pass; issubclass(MyClass, object), then issubclass(MyClass, object) returns True because all classes inherit from object by default, even if not explicitly specified.

Key Concepts:
• All classes inherit from object: • issubclass(MyClass, object) returns True • MyClass inherits from object (default) • Even without explicit parent • object is base class • Returns: True How it works: • class MyClass: pass creates class • No explicit parent class specified • Python automatically makes object the base class • issubclass(MyClass, object) checks inheritance • Returns: True Example: class MyClass: pass issubclass(MyClass, object) # True (all classes inherit from object) Common uses: • Inheritance check: issubclass(Class, object) (always True) • Base class: object is base of all classes • Object-oriented programming • Inheritance hierarchy Example: If class MyClass: pass; issubclass(MyClass, object), then issubclass(MyClass, object) returns True because all classes inherit from object by default, even if not explicitly specified.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: pass; isinstance(MyClass, type)?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Classes are instances of type.",
    de: `Classes are instances of type. If class MyClass: pass; isinstance(MyClass, type), then isinstance(MyClass, type) returns True because classes are objects, and they are instances of the type class. In Python, classes are created by the type metaclass, so every class is an instance of type. This is the foundation of Python's metaclass system - classes are objects created by type.

Classes are instances of type:
• isinstance(MyClass, type) returns True
• Classes are objects
• Classes are instances of type
• type is the class of classes
• Returns: True

How it works:
• class MyClass: pass creates class object
• MyClass is an object (instance of type)
• isinstance(MyClass, type) checks if MyClass is instance of type
• MyClass is instance of type
• Returns: True

Example:
class MyClass: pass
isinstance(MyClass, type)    # True (classes are instances of type)

Common uses:
• Metaclass understanding: classes are instances of type
• Type checking: isinstance(Class, type) (always True for classes)
• Metaclasses
• Type system

Example: If class MyClass: pass; isinstance(MyClass, type), then isinstance(MyClass, type) returns True because classes are instances of type - classes are objects created by the type metaclass.

Key Concepts:
• Classes are instances of type: • isinstance(MyClass, type) returns True • Classes are objects • Classes are instances of type • type is the class of classes • Returns: True How it works: • class MyClass: pass creates class object • MyClass is an object (instance of type) • isinstance(MyClass, type) checks if MyClass is instance of type • MyClass is instance of type • Returns: True Example: class MyClass: pass isinstance(MyClass, type) # True (classes are instances of type) Common uses: • Metaclass understanding: classes are instances of type • Type checking: isinstance(Class, type) (always True for classes) • Metaclasses • Type system Example: If class MyClass: pass; isinstance(MyClass, type), then isinstance(MyClass, type) returns True because classes are instances of type - classes are objects created by the type metaclass.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is class MyClass: pass; MyClass.mro()?`, 
    o: ["Method Resolution Order list", "Error", "None", "[]"], 
    c: 0, 
    e: "mro() returns method resolution order (inheritance chain).",
    de: `The mro() method returns the Method Resolution Order (MRO) - the inheritance chain showing how Python searches for attributes and methods. If class MyClass: pass; MyClass.mro(), then MyClass.mro() returns a list showing the method resolution order because mro() returns the linearization of the inheritance hierarchy. For a simple class with no explicit parents, it shows [MyClass, object] - the class itself and its base class (object).

mro() method:
• MyClass.mro() returns Method Resolution Order list
• mro() returns inheritance chain
• Shows order Python searches for attributes
• [MyClass, object] for simple class
• Returns: list

How it works:
• MyClass.mro() calls mro() method
• mro() computes method resolution order
• Shows inheritance chain: [MyClass, object]
• Python searches in this order for attributes
• Returns: [MyClass, object]

Example:
class MyClass: pass
MyClass.mro()                # [<class '__main__.MyClass'>, <class 'object'>]

Common uses:
• Inheritance chain: MyClass.mro() (see inheritance order)
• Method resolution: understand how Python finds attributes
• Object-oriented programming
• Inheritance hierarchy

Example: If class MyClass: pass; MyClass.mro(), then MyClass.mro() returns a Method Resolution Order list because mro() returns the inheritance chain showing how Python searches for attributes and methods, typically [MyClass, object] for a simple class.

Key Concepts:
• mro() method: • MyClass.mro() returns Method Resolution Order list • mro() returns inheritance chain • Shows order Python searches for attributes • [MyClass, object] for simple class • Returns: list How it works: • MyClass.mro() calls mro() method • mro() computes method resolution order • Shows inheritance chain: [MyClass, object] • Python searches in this order for attributes • Returns: [MyClass, object] Example: class MyClass: pass MyClass.mro() # [<class '__main__.MyClass'>, <class 'object'>] Common uses: • Inheritance chain: MyClass.mro() (see inheritance order) • Method resolution: understand how Python finds attributes • Object-oriented programming • Inheritance hierarchy Example: If class MyClass: pass; MyClass.mro(), then MyClass.mro() returns a Method Resolution Order list because mro() returns the inheritance chain showing how Python searches for attributes and methods, typically [MyClass, object] for a simple class.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
