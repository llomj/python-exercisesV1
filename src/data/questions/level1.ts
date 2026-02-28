import { PersonaStage } from '../../types';

// --- LEVEL 1: PLANKTON (Variables, Types, Strings, Comments) - 100 TRULY UNIQUE QUESTIONS ---
// Each question tests a DIFFERENT concept - NO number/variable variations of the same question
export const level1Patterns = [
  // 1-10: Basic Type Identification
  (_i: number) => ({ 
    q: `What is type(42)?`, 
    o: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "None"], 
    c: 0, 
    e: "Whole numbers are integers.",
    de: `The type() function returns the type (class) of any object in Python. When you call type(42), Python identifies that 42 is an integer literal. In Python, integers are objects of the built-in int class. 

Key concepts:
• Integers (int) represent whole numbers: -3, 0, 42, 1000
• Unlike some languages, Python integers have unlimited precision
• type() returns <class 'type_name'> format
• This is fundamental for understanding Python's object-oriented nature where everything is an object

Example: type(42) returns <class 'int'> because 42 is an integer literal. You can verify this: isinstance(42, int) returns True.`
  }),
  (_i: number) => ({ 
    q: `What is type(3.14)?`, 
    o: ["<class 'float'>", "<class 'int'>", "<class 'str'>", "None"], 
    c: 0, 
    e: "Decimal numbers are floats.",
    de: `Floating-point numbers in Python are represented by the float type. Any number with a decimal point is automatically a float, even if it's a whole number like 3.0.

Key concepts:
• float represents real numbers (decimals): 3.14, 2.0, -0.5, 1e10
• Floats use double-precision (64-bit) representation
• Division always produces float in Python 3: 10 / 2 = 5.0
• Float precision can cause rounding issues: 0.1 + 0.2 ≈ 0.30000000000000004

Example: type(3.14) returns <class 'float'>. Even 3.0 is a float, not an int. To create an integer from a float, use int(3.14) which truncates to 3.`
  }),
  (_i: number) => ({ 
    q: `What is type("hello")?`, 
    o: ["<class 'str'>", "<class 'int'>", "<class 'list'>", "None"], 
    c: 0, 
    e: "Text in quotes is a string.",
    de: `Strings in Python are sequences of characters enclosed in quotes. Python supports both single quotes ('hello') and double quotes ("hello") - they're identical. Strings are immutable sequences of Unicode characters.

Key concepts:
• str (string) represents text data
• Strings are immutable - you can't modify them in place
• Strings support indexing: "hello"[0] = 'h'
• Strings support slicing: "hello"[1:3] = 'el'
• Triple quotes (''' or """) create multi-line strings
• Python has no separate 'char' type - single characters are strings of length 1

Example: type("hello") returns <class 'str'>. Strings are one of Python's most powerful data types with many built-in methods like .upper(), .split(), .find(), etc.`
  }),
  (_i: number) => ({ 
    q: `What is type(True)?`, 
    o: ["<class 'bool'>", "<class 'int'>", "<class 'str'>", "None"], 
    c: 0, 
    e: "True is a boolean value.",
    de: `Boolean values in Python are represented by the bool type, which is actually a subclass of int. True and False are the only two boolean values, and they're actually instances of int (True == 1 and False == 0).

Key concepts:
• bool represents truth values: True and False
• bool is a subclass of int: isinstance(True, int) returns True
• True equals 1, False equals 0 in numeric contexts
• Many values are "truthy" (evaluate to True) or "falsy" (evaluate to False)
• Falsy values: False, None, 0, "", [], {}, (), set()
• Everything else is truthy

Example: type(True) returns <class 'bool'>. Interestingly, bool(1) is True and bool(0) is False, showing the relationship between bools and integers.`
  }),
  (_i: number) => ({ 
    q: `What is type(None)?`, 
    o: ["<class 'NoneType'>", "<class 'null'>", "<class 'void'>", "None"], 
    c: 0, 
    e: "None has its own special type.",
    de: `None is Python's null value - it represents the absence of a value. None is a singleton object (there's only one None object in Python) and has its own type called NoneType.

Key concepts:
• None represents "no value" or "nothing"
• NoneType is the type of None - there is only one None object
• None is falsy: bool(None) is False
• Functions without a return statement implicitly return None
• Use None to indicate missing or undefined values
• None != False, None != 0, None != "" - it's a distinct value
• Common use: optional parameters default to None

Example: type(None) returns <class 'NoneType'>. None is often used as a default value: def func(x=None): pass. Checking for None should use 'is': if x is None: (not x == None).`
  }),
  (_i: number) => ({ 
    q: `What is type([])?`, 
    o: ["<class 'list'>", "<class 'tuple'>", "<class 'dict'>", "None"], 
    c: 0, 
    e: "Square brackets create a list.",
    de: `Lists are ordered, mutable sequences of items enclosed in square brackets. Lists can contain items of any type, including mixed types. They're one of Python's most versatile data structures.

Key concepts:
• Lists are ordered collections: items have a defined order
• Lists are mutable: you can modify them after creation
• Lists can contain duplicates
• Lists are heterogeneous: [1, "hello", 3.14, [1,2]] is valid
• Lists support indexing and slicing like strings
• Common methods: .append(), .extend(), .insert(), .remove(), .pop()
• Empty list [] is falsy; non-empty lists are truthy

Example: type([]) returns <class 'list'>. Lists are created with [] or list(). You can access elements: [1, 2, 3][0] = 1. Lists are mutable: my_list = [1, 2]; my_list.append(3) changes my_list to [1, 2, 3].`
  }),
  (_i: number) => ({ 
    q: `What is type(())?`, 
    o: ["<class 'tuple'>", "<class 'list'>", "<class 'dict'>", "None"], 
    c: 0, 
    e: "Parentheses create a tuple.",
    de: `Tuples are ordered, immutable sequences enclosed in parentheses. Like lists, they can contain items of any type, but unlike lists, they cannot be modified after creation. This immutability makes them hashable (can be used as dictionary keys).

Key concepts:
• Tuples are ordered collections like lists
• Tuples are immutable: once created, cannot be changed
• Tuples are created with () or tuple()
• Empty tuple () requires parentheses: () not just ,
• Single-item tuple needs trailing comma: (1,) not (1)
• Tuples are faster than lists for iteration
• Tuples can be used as dictionary keys (lists cannot)
• Tuple unpacking: a, b = (1, 2)

Example: type(()) returns <class 'tuple'>. Note that empty parentheses () create an empty tuple. For a single-item tuple, you need (1,) - the comma is required, otherwise (1) is just the number 1.`
  }),
  (_i: number) => ({ 
    q: `What is type({})?`, 
    o: ["<class 'dict'>", "<class 'list'>", "<class 'set'>", "None"], 
    c: 0, 
    e: "Curly braces create a dictionary.",
    de: `Dictionaries are unordered collections of key-value pairs. An empty {} creates an empty dictionary. Dictionaries are Python's implementation of hash tables, allowing very fast lookups by key.

Key concepts:
• Dictionaries store key-value pairs: {'name': 'Alice', 'age': 30}
• Keys must be immutable (strings, numbers, tuples)
• Values can be any type
• Dictionaries are mutable and unordered (Python 3.7+ maintains insertion order)
• Empty dict {} is falsy; non-empty dicts are truthy
• Access values: my_dict['key'] or my_dict.get('key')
• Dictionary methods: .keys(), .values(), .items()

Example: type({}) returns <class 'dict'>. Empty curly braces {} create an empty dictionary. To check if empty: if not my_dict: print("empty"). Dictionaries are incredibly useful for representing structured data and mappings.`
  }),
  (_i: number) => ({ 
    q: `What is type({1, 2, 3})?`, 
    o: ["<class 'set'>", "<class 'list'>", "<class 'dict'>", "None"], 
    c: 0, 
    e: "Curly braces with values create a set.",
    de: `Sets are unordered collections of unique elements. When you use curly braces with values (not key-value pairs), Python creates a set. Sets are useful for membership testing, removing duplicates, and mathematical set operations.

Key concepts:
• Sets contain unique elements only - duplicates are automatically removed
• Sets are unordered (no indexing)
• Sets are mutable (can add/remove elements)
• Sets support set operations: union, intersection, difference
• Sets use hash tables for O(1) membership testing
• Empty set must be created with set(), not {} (that's a dict)
• Sets can contain only hashable (immutable) elements

Example: type({1, 2, 3}) returns <class 'set'>. Note the difference: {} is a dict, {1, 2, 3} is a set. Sets automatically remove duplicates: {1, 1, 2, 2} becomes {1, 2}. Use sets for fast membership testing: if item in my_set: (very fast).`
  }),
  (_i: number) => ({ 
    q: `What is type(b'hello')?`, 
    o: ["<class 'bytes'>", "<class 'str'>", "<class 'list'>", "None"], 
    c: 0, 
    e: "b prefix creates bytes object.",
    de: `The b prefix before a string literal creates a bytes object - an immutable sequence of bytes (integers from 0-255). Bytes represent binary data, while strings represent text. In Python 3, there's a clear distinction between text (str) and binary data (bytes).

Key concepts:
• bytes represents binary data (sequences of bytes 0-255)
• bytes objects are immutable like strings
• b prefix creates bytes from ASCII string: b'hello'
• Use bytes for binary data: file I/O, network protocols, binary formats
• Strings (str) are for text; bytes are for binary data
• Convert str to bytes: "hello".encode() → b'hello'
• Convert bytes to str: b'hello'.decode() → "hello"
• bytes only accepts ASCII in literal form

Example: type(b'hello') returns <class 'bytes'>. Bytes are essential for working with binary files, network communication, and data serialization. The bytes type helps Python 3 distinguish between text and binary data, preventing encoding errors.`
  }),
  
  // 11-20: Variable Naming Rules
  (_i: number) => ({ 
    q: `Is 'my_variable' a valid variable name?`, 
    o: ["Yes", "No", "Only in Python 2", "Only in classes"], 
    c: 0, 
    e: "Variables can contain letters, numbers, and underscores.",
    de: `Python variable names must follow specific rules: they can contain letters (a-z, A-Z), digits (0-9), and underscores (_), but cannot start with a digit. 'my_variable' follows all these rules perfectly.

Rules for valid Python identifiers:
• Can contain letters (a-z, A-Z), digits (0-9), and underscores (_)
• Cannot start with a digit
• Are case-sensitive: myVar, MyVar, and MYVAR are different
• Cannot be Python keywords (if, def, class, etc.)
• No spaces or special characters except underscore
• No length limit (though keep them reasonable!)

Example: my_variable = 42 is valid. This style (lowercase with underscores) is called "snake_case" and is recommended by PEP 8 (Python's style guide) for variable names.`
  }),
  (_i: number) => ({ 
    q: `Is '2variable' a valid variable name?`, 
    o: ["No", "Yes", "Depends", "Only in functions"], 
    c: 0, 
    e: "Variable names cannot start with a number.",
    de: `Python identifiers cannot start with a digit. This rule prevents ambiguity between variable names and numeric literals. If Python allowed names starting with digits, it would be impossible to distinguish between the variable 2variable and the number 2 followed by the variable variable.

Why this rule exists:
• Prevents confusion with numeric literals
• Makes parsing unambiguous: is 2var a variable or "2" + "var"?
• Standard across most programming languages
• Makes code more readable

Workarounds:
• Use letter prefix: two_variable, var2, number2_variable
• Use descriptive names: second_variable, variable_2

Example: 2variable = 5 raises SyntaxError. Use variable2 or two_variable instead.`
  }),
  (_i: number) => ({ 
    q: `Is 'my-variable' a valid variable name?`, 
    o: ["No", "Yes", "Only in Python 2", "Only in classes"], 
    c: 0, 
    e: "Hyphens are not allowed in variable names.",
    de: `Hyphens (-) are not allowed in Python variable names because the hyphen character is the subtraction operator. Python would interpret my-variable as "my" minus "variable" (which would cause a NameError unless both are defined).

Allowed separators:
• Underscore (_): my_variable ✓
• CamelCase: myVariable ✓
• PascalCase: MyVariable ✓

Not allowed:
• Hyphen: my-variable ✗ (interpreted as subtraction)
• Space: my variable ✗ (syntax error)
• Dot: my.variable ✗ (attribute access, not variable name)

Example: my-variable = 5 raises SyntaxError because Python sees "my" - "variable". Use my_variable or myVariable instead.`
  }),
  (_i: number) => ({ 
    q: `Is 'class' a valid variable name?`, 
    o: ["No", "Yes", "Only in Python 2", "Only in modules"], 
    c: 0, 
    e: "'class' is a reserved keyword.",
    de: `'class' is one of Python's reserved keywords (also called reserved words). Keywords have special meaning in Python and cannot be used as variable, function, or class names. They're part of Python's syntax.

Python keywords (cannot be used as identifiers):
• Control flow: if, else, elif, for, while, break, continue, pass, return
• Functions/classes: def, class, lambda, yield
• Logic: and, or, not, in, is
• Exception handling: try, except, finally, raise, assert
• Import: import, from, as
• Type checking: isinstance, type
• And others: del, global, nonlocal, with, async, await, etc.

How to check: import keyword; print(keyword.kwlist) shows all keywords.

Example: class = 5 raises SyntaxError. Use class_name, cls, or klass instead.`
  }),
  (_i: number) => ({ 
    q: `Is 'def' a valid variable name?`, 
    o: ["No", "Yes", "Only in Python 2", "Only in modules"], 
    c: 0, 
    e: "'def' is a reserved keyword.",
    de: `'def' is a Python keyword used to define functions. It cannot be used as a variable name because it has a specific syntactic purpose in Python. When Python sees 'def', it expects a function definition to follow.

The 'def' keyword:
• Used to define functions: def my_function(): pass
• Part of Python's syntax, not a function itself
• Cannot be reassigned or used as an identifier
• Short for "define" - indicates the start of a function definition

Why keywords are reserved:
• Prevents conflicts with language syntax
• Ensures code is unambiguous
• Maintains language consistency

Example: def = 5 raises SyntaxError. Use func, definition, or define_func instead if you need a variable name.`
  }),
  (_i: number) => ({ 
    q: `Is 'if' a valid variable name?`, 
    o: ["No", "Yes", "Only in Python 2", "Only in modules"], 
    c: 0, 
    e: "'if' is a reserved keyword.",
    de: `'if' is a Python keyword used for conditional statements. It cannot be used as a variable name because it's part of Python's control flow syntax.

The 'if' statement:
• Used for conditional execution: if condition: code
• Followed by optional elif and else clauses
• Evaluates the condition's truthiness
• One of Python's most fundamental control structures

Common alternatives if you need a variable name:
• condition, check, flag, state
• Use descriptive names: is_valid, has_permission

Example: if = 5 raises SyntaxError. If you need to store a condition, use: condition = True or check = False instead.`
  }),
  (_i: number) => ({ 
    q: `Is 'MyVariable' a valid variable name?`, 
    o: ["Yes", "No", "Only if lowercase", "Only in classes"], 
    c: 0, 
    e: "Variable names are case-sensitive and can start with uppercase.",
    de: `Python variable names are case-sensitive and can start with any letter (uppercase or lowercase). 'MyVariable' follows PascalCase naming convention, which is valid but typically reserved for class names per PEP 8.

Naming conventions in Python (PEP 8):
• snake_case: for variables and functions (my_variable, calculate_total)
• PascalCase: for classes (MyClass, DataProcessor)
• UPPER_CASE: for constants (PI, MAX_SIZE)
• _leading_underscore: private/internal use (_internal_method)
• __double_underscore__: name mangling or special methods (__init__)

Case sensitivity:
• myVariable, MyVariable, MYVARIABLE are all different
• Python is case-sensitive: age ≠ Age ≠ AGE

Example: MyVariable = 42 is valid. However, PEP 8 recommends using snake_case for variables (my_variable) and reserving PascalCase for classes.`
  }),
  (_i: number) => ({ 
    q: `Is '_private' a valid variable name?`, 
    o: ["Yes", "No", "Only in classes", "Error"], 
    c: 0, 
    e: "Underscore at start is valid (convention for private).",
    de: `A single leading underscore is a Python naming convention indicating that a name is intended for internal use. It's valid syntax and serves as a signal to other programmers (and tools) that this should be treated as non-public.

Underscore conventions:
• _single_leading: "internal use" convention (not enforced by Python)
• __double_leading: triggers name mangling in classes (class-specific)
• __double_leading_trailing__: Python special methods (__init__, __str__)
• single_trailing_: avoids conflict with keywords (class_ instead of class)

Private convention:
• _private_var suggests "don't use this outside the module/class"
• Not actually private - Python has no true privacy
• More of a contract/agreement between developers
• Import controls: from module import * won't import _names

Example: _private = 42 is valid. It's a convention, not a rule - it tells other developers "this is for internal use, use at your own risk."`
  }),
  (_i: number) => ({ 
    q: `Is '__special__' a valid variable name?`, 
    o: ["Yes", "No", "Only in classes", "Error"], 
    c: 0, 
    e: "Double underscores are valid (used for special methods).",
    de: `Names with double leading and trailing underscores (__special__) are reserved for Python's special methods and attributes. While technically you can use them, it's strongly discouraged as they're part of Python's "magic methods" system.

Special methods (magic methods):
• __init__: constructor, called when object is created
• __str__: string representation, used by str() and print()
• __repr__: developer representation, used by repr()
• __len__: length, used by len()
• __add__: addition operator, used by +
• __eq__: equality, used by ==
• And many more...

Important notes:
• These are method names, not variable names
• They're called automatically by Python in certain contexts
• Don't create variables with these names unless you understand the consequences
• Using them might interfere with Python's internal mechanisms

Example: __special__ = 42 is technically valid but dangerous. It could interfere with Python's name mangling or special method resolution.`
  }),
  (_i: number) => ({ 
    q: `Is 'variable name' (with space) a valid variable name?`, 
    o: ["No", "Yes", "Only in Python 2", "Only in functions"], 
    c: 0, 
    e: "Spaces are not allowed in variable names.",
    de: `Spaces are not allowed in Python identifiers because they're used to separate tokens in the language. Python uses whitespace (spaces, tabs) for indentation and token separation, so including spaces in names would make parsing impossible.

Why spaces aren't allowed:
• Spaces are used for indentation (Python's way of grouping code)
• Spaces separate tokens: if x > 5 (spaces separate 'if', 'x', '>', '5')
• Would cause parsing ambiguity
• Makes code unreadable and unparsable

Solutions:
• Use underscore: variable_name
• Use CamelCase: variableName
• Use descriptive single words: variablename (not recommended if unclear)

Token separation example:
• variable name = 5 would be parsed as: variable, name, =, 5
• Python would see two separate identifiers and raise SyntaxError

Example: variable name = 5 raises SyntaxError. Use variable_name = 5 or variableName = 5 instead.`
  }),
  
  // 21-30: String Basics
  (_i: number) => ({ 
    q: `What is len("hello")?`, 
    o: ["5", "4", "6", "Error"], 
    c: 0, 
    e: "len() counts every character.",
    de: `The len() function returns the number of items in a sequence or collection. For strings, it counts every character, including spaces, punctuation, and special characters. It's one of Python's most commonly used built-in functions.

How len() works:
• len(string) counts characters: len("hello") = 5
• Counts all characters: len("a b") = 3 (includes space)
• Works on many types: lists, tuples, dicts, sets, strings
• Returns integer (0 or positive)
• Raises TypeError for non-sequence types (like int)

String indexing visualization:
"hello" has indices: h(0), e(1), l(2), l(3), o(4)
Length = 5, valid indices: 0-4

Example: len("hello") returns 5. Note: len("") returns 0 (empty string). Also: len("Python!") = 7 (includes the exclamation mark).`
  }),
  (_i: number) => ({ 
    q: `What does "Hello" + "World" result in?`, 
    o: ["HelloWorld", "Hello World", "Error", "None"], 
    c: 0, 
    e: "String concatenation joins strings without spaces.",
    de: `The + operator performs string concatenation in Python, joining strings end-to-end. It doesn't automatically add spaces - strings are joined exactly as they are, with no separator unless you explicitly provide one.

String concatenation:
• + operator joins strings: "Hello" + "World" = "HelloWorld"
• Creates a new string (strings are immutable)
• No automatic spacing - you must add spaces manually
• Can concatenate multiple strings: "A" + "B" + "C" = "ABC"
• + only works with strings (must convert other types first)

To add spaces:
• "Hello" + " " + "World" = "Hello World"
• "Hello " + "World" = "Hello World" (space after first string)
• "Hello" + " World" = "Hello World" (space before second string)

Alternatives:
• join() method: " ".join(["Hello", "World"]) = "Hello World"
• f-strings: f"{'Hello'} {'World'}" = "Hello World"

Example: "Hello" + "World" results in "HelloWorld" (no space). For a space, use: "Hello" + " " + "World" or "Hello " + "World".`
  }),
  (_i: number) => ({ 
    q: `What does "Hi" * 3 result in?`, 
    o: ["HiHiHi", "Hi3", "Error", "None"], 
    c: 0, 
    e: "String multiplication repeats the string.",
    de: `The * operator can multiply strings by integers, repeating the string the specified number of times. This is a convenient way to create repeated patterns or padding.

String multiplication:
• string * integer repeats the string
• "Hi" * 3 = "HiHiHi" (string repeated 3 times)
• integer * string works the same: 3 * "Hi" = "HiHiHi"
• string * 0 = "" (empty string)
• string * negative number = "" (empty string)
• Only works with integers (not floats)

Common use cases:
• Creating separators: "-" * 50 creates a line of dashes
• Padding: " " * 10 creates 10 spaces
• Patterns: "ab" * 3 = "ababab"
• Visual formatting in output

Important: string * string doesn't work (raises TypeError). You can only multiply strings by integers.

Example: "Hi" * 3 results in "HiHiHi". Also: 5 * "=" = "=====" (useful for creating visual separators).`
  }),
  (_i: number) => ({ 
    q: `What is "Python"[0]?`, 
    o: ["P", "p", "Error", "None"], 
    c: 0, 
    e: "String indexing starts at 0.",
    de: `Python uses zero-based indexing, meaning the first character has index 0, not 1. This is consistent across all Python sequences (lists, tuples, strings). Understanding zero-based indexing is fundamental to Python programming.

Zero-based indexing:
• First character is at index 0: "Python"[0] = 'P'
• Second character is at index 1: "Python"[1] = 'y'
• Last character is at index len(string) - 1
• Index out of range raises IndexError

String "Python" indices:
P(0), y(1), t(2), h(3), o(4), n(5)
Length = 6, valid indices: 0-5

Why zero-based?
• Mathematically elegant: index represents offset from start
• Consistent with pointer arithmetic in lower-level languages
• Standard in most programming languages (C, Java, JavaScript, etc.)
• Makes slicing more intuitive: string[:3] gets first 3 characters (indices 0,1,2)

Example: "Python"[0] returns 'P'. To get the last character using positive indexing: "Python"[5] = 'n' (length 6, so index 5).`
  }),
  (_i: number) => ({ 
    q: `What is "Python"[-1]?`, 
    o: ["n", "P", "Error", "None"], 
    c: 0, 
    e: "Negative indexing starts from the end.",
    de: `Python supports negative indexing, allowing you to access elements from the end of a sequence. Index -1 is the last element, -2 is second-to-last, and so on. This is extremely useful for accessing the end of sequences without calculating length.

Negative indexing:
• -1 = last character: "Python"[-1] = 'n'
• -2 = second-to-last: "Python"[-2] = 'o'
• -len(string) = first character: "Python"[-6] = 'P'
• -0 is the same as 0 (no separate meaning)

String "Python" with negative indices:
P(-6), y(-5), t(-4), h(-3), o(-2), n(-1)
Positive:  0     1     2     3     4     5

Advantages:
• Don't need to know string length
• Easy access to last/few elements
• Common pattern: string[-1] for last character
• Works with any sequence (lists, tuples)

Example: "Python"[-1] returns 'n' (last character). "Python"[-2] returns 'o' (second-to-last). This is more convenient than "Python"[len("Python")-1].`
  }),
  (_i: number) => ({ 
    q: `What is "Python"[1:4]?`, 
    o: ["yth", "Pyth", "Python", "Error"], 
    c: 0, 
    e: "Slicing [1:4] gets characters from index 1 to 3.",
    de: `String slicing extracts a substring using the syntax string[start:stop]. The start index is inclusive, the stop index is exclusive - meaning it includes the start but stops before the stop index. This "exclusive end" convention is important to understand.

Slicing syntax: string[start:stop]
• start: inclusive (includes this index)
• stop: exclusive (stops before this index)
• Result includes indices: start, start+1, ..., stop-1
• Does NOT include index 'stop'

"Python"[1:4] breakdown:
• Start at index 1: 'y'
• Stop before index 4 (don't include index 4)
• Includes indices 1, 2, 3: 'y', 't', 'h'
• Result: "yth"

Visualization:
"Python" = P(0), y(1), t(2), h(3), o(4), n(5)
[1:4] includes:       y(1), t(2), h(3)
Result: "yth"

Key concept: The number of characters = stop - start = 4 - 1 = 3 characters.

Example: "Python"[1:4] returns "yth". To include 'o', use [1:5]. Remember: slicing never modifies the original string (strings are immutable).`
  }),
  (_i: number) => ({ 
    q: `What is "Python"[:3]?`, 
    o: ["Pyt", "Python", "P", "Error"], 
    c: 0, 
    e: "Slicing [:3] gets first 3 characters.",
    de: `When you omit the start index in a slice [:stop], Python assumes 0 (start from beginning). This is a common pattern for getting the first N characters of a string.

Slicing with omitted start:
• [:stop] is equivalent to [0:stop]
• Gets characters from beginning up to (but not including) stop
• [:3] = first 3 characters (indices 0, 1, 2)
• [:0] = "" (empty string - no characters before index 0)

"Python"[:3] breakdown:
• Omitted start defaults to 0
• Stop before index 3
• Includes indices 0, 1, 2: 'P', 'y', 't'
• Result: "Pyt"

Common patterns:
• [:n] = first n characters
• [n:] = everything from index n to end
• [:] = entire string (copy)
• [::-1] = reversed string

Example: "Python"[:3] returns "Pyt" (first 3 characters). This is often used to get prefixes or truncate strings to a maximum length.`
  }),
  (_i: number) => ({ 
    q: `What is "Python"[3:]?`, 
    o: ["hon", "Python", "Pyt", "Error"], 
    c: 0, 
    e: "Slicing [3:] gets from index 3 to end.",
    de: `When you omit the stop index in a slice [start:], Python assumes the end of the string. This gets everything from the start index to the last character, inclusive.

Slicing with omitted stop:
• [start:] gets from start index to end
• Includes the start index and everything after
• [3:] = from index 3 to last character (inclusive)
• [len(string):] = "" (empty - nothing after last index)

"Python"[3:] breakdown:
• Start at index 3: 'h'
• Continue to end (no stop specified)
• Includes indices 3, 4, 5: 'h', 'o', 'n'
• Result: "hon"

Common patterns:
• [n:] = everything from index n onward
• [-n:] = last n characters
• [1:] = everything except first character
• [:-1] = everything except last character

Example: "Python"[3:] returns "hon" (from index 3 to end). Combined with [:n], you can easily split strings: first = string[:n]; rest = string[n:].`
  }),
  (_i: number) => ({ 
    q: `What is "Python"[::2]?`, 
    o: ["Pto", "Python", "Pyt", "Error"], 
    c: 0, 
    e: "[::2] gets every 2nd character.",
    de: `Slicing with a step value [start:stop:step] allows you to skip characters. The step (third value) determines the increment between indices. A step of 2 means take every second character.

Extended slicing: string[start:stop:step]
• start: starting index (default: 0 or beginning)
• stop: ending index (default: end)
• step: increment between indices (default: 1)
• [::2] = start at 0, go to end, step by 2

"Python"[::2] breakdown:
• Start: 0 (default)
• Stop: end (default)
• Step: 2 (every 2nd character)
• Indices: 0, 2, 4: 'P', 't', 'o'
• Result: "Pto"

Common step values:
• [::1] = normal (every character) - same as [:]
• [::2] = every 2nd character (even indices)
• [1::2] = every 2nd character starting at 1 (odd indices)
• [::3] = every 3rd character
• [::-1] = reverse (negative step reverses direction)

Example: "Python"[::2] returns "Pto". To get odd-indexed characters: "Python"[1::2] = "yhn". The step value is very powerful for pattern extraction.`
  }),
  (_i: number) => ({ 
    q: `What is "Python"[::-1]?`, 
    o: ["nohtyP", "Python", "Error", "None"], 
    c: 0, 
    e: "[::-1] reverses the string.",
    de: `Using a negative step value in slicing reverses the direction of iteration. [::-1] is the idiomatic Python way to reverse a string (or any sequence). It's concise, readable, and efficient.

Reverse slicing: [::-1]
• Start: omitted (defaults to end when step is negative)
• Stop: omitted (defaults to beginning when step is negative)
• Step: -1 (go backwards)
• Reverses the entire string

"Python"[::-1] breakdown:
• Step is -1, so go backwards
• Start at end, go to beginning
• Indices visited: 5, 4, 3, 2, 1, 0
• Characters: 'n', 'o', 'h', 't', 'y', 'P'
• Result: "nohtyP"

Negative step behavior:
• With negative step, defaults are reversed
• [::-1] = reverse entire sequence
• [::-2] = reverse, taking every 2nd character
• [5:0:-1] = from index 5 down to (but not including) 0

Alternatives (less Pythonic):
• ''.join(reversed("Python")) - works but verbose
• Manual loop - unnecessary complexity

Example: "Python"[::-1] returns "nohtyP". This is the most Pythonic way to reverse a string. Note: [::-1] creates a new string (original unchanged, since strings are immutable).`
  }),
  
  // 31-40: Comments and Multi-line Strings
  (_i: number) => ({ 
    q: `Which symbol starts a single-line comment?`, 
    o: ["#", "//", "/*", "--"], 
    c: 0, 
    e: "Python uses # for comments.",
    de: `Python uses the hash symbol (#) to start single-line comments. Everything from the # to the end of the line is ignored by the Python interpreter. This is Python's only way to create comments - there are no multi-line comment blocks like /* */ in C/Java.

How comments work:
• # starts a comment - everything after it on that line is ignored
• Comments don't affect program execution
• Comments are for humans, not the interpreter
• Can be at the start of a line or after code on the same line
• No closing symbol needed - ends at the end of the line

Comparison with other languages:
• Python: # comment (like shell, Perl, Ruby)
• C/Java: // comment or /* comment */
• HTML: <!-- comment -->
• SQL: -- comment or /* comment */

Example: # This is a comment
x = 5  # This is also a comment (inline)
print(x)  # Comments explain code
`
  }),
  (_i: number) => ({ 
    q: `Correct way to write a multi-line string?`, 
    o: ["'''String'''", "'String'", '"String"', "/String/"], 
    c: 0, 
    e: "Triple quotes allow multi-line strings.",
    de: `Triple quotes (three single quotes ''' or three double quotes """) allow you to create multi-line strings in Python. These preserve newlines and whitespace, making them perfect for documentation strings, formatted text, and strings spanning multiple lines.

Triple quote syntax:
• '''text''' - triple single quotes
• """text""" - triple double quotes
• Both work identically
• Preserves newlines and spacing
• Can span multiple lines
• Useful for docstrings (documentation)

Why use triple quotes:
• Regular quotes: 'text' or "text" must be on one line
• Triple quotes allow line breaks inside the string
• Perfect for documentation strings (docstrings)
• Can include both single and double quotes inside

Example:
text = """This is
a multi-line
string"""

Common uses:
• Docstrings: def func(): """Function documentation"""
• SQL queries: query = """SELECT * FROM table"""
• Long formatted messages
• Multi-line JSON or XML

Note: Triple quotes create strings, not comments. They're executed like any string literal.
`
  }),
  (_i: number) => ({ 
    q: `What is the purpose of comments in Python?`, 
    o: ["Document code", "Execute code", "Create variables", "Import modules"], 
    c: 0, 
    e: "Comments document code and are ignored by Python.",
    de: `Comments in Python serve to document and explain code for human readers. They are completely ignored by the Python interpreter during execution - they don't affect program behavior at all. Good comments make code more maintainable and understandable.

Purposes of comments:
• Explain complex logic or algorithms
• Document function purposes and parameters
• Clarify non-obvious code decisions
• Provide usage examples
• Note potential issues or TODOs
• Explain why something is done a certain way

What comments do NOT do:
• They don't execute code
• They don't create variables
• They don't import modules
• They don't affect program execution
• They're stripped out before execution

Types of comments:
• Inline comments: x = 5  # Set x to 5
• Block comments: # Calculate total
                  # Add all items
• Documentation strings (docstrings): """Function description"""

Best practices:
• Write comments that explain WHY, not WHAT
• Keep comments up-to-date with code changes
• Don't state the obvious: # x = 5 (unnecessary)
• Explain complex logic: # Use binary search for O(log n) lookup

Example: Comments help future readers (including yourself) understand the code's purpose and logic.
`
  }),
  (_i: number) => ({ 
    q: `Can you write a comment after code on the same line?`, 
    o: ["Yes", "No", "Only in Python 2", "Only in functions"], 
    c: 0, 
    e: "Comments can be inline after code using #.",
    de: `Yes, you can write comments after code on the same line using the # symbol. This is called an "inline comment." Everything from the # to the end of the line is treated as a comment and ignored. This is very common in Python programming.

Inline comment syntax:
• Code followed by # followed by comment
• Space before # is recommended for readability
• Comment continues until end of line
• Only that line is affected

Examples:
x = 5  # Assign 5 to x
result = calculate()  # Get the calculation result
# Multiple inline comments work too:
y = 10  # Set y to 10  # (only first # is needed, rest ignored)

Best practices:
• Leave at least one space before #
• Keep inline comments brief
• Use for clarification, not obvious statements
• PEP 8 recommends inline comments sparingly

Common uses:
• Explain variable assignments: x = 5  # User's age
• Clarify calculations: total = price * 1.1  # Add 10% tax
• Note special cases: if x < 0:  # Handle negative values
• Suppress linter warnings: x = unused_var  # noqa

Example: name = "Alice"  # User's name (inline comment). The code executes, the comment is ignored.
`
  }),
  (_i: number) => ({ 
    q: `What does '''triple quotes''' create?`, 
    o: ["Multi-line string", "Comment", "Error", "Variable"], 
    c: 0, 
    e: "Triple quotes create multi-line strings.",
    de: `Triple quotes (''' or """) create a multi-line string literal in Python. They do NOT create comments - they create actual string objects that can be stored in variables, returned from functions, or used in expressions. This is an important distinction.

What triple quotes create:
• Multi-line string object (type: str)
• Can be assigned to variables
• Can be used in expressions
• Preserves newlines and formatting
• Executed like any string literal

Common misconception:
• Triple quotes look like comments but they're NOT
• They create string objects that exist in memory
• If assigned to nothing, they're created but immediately discarded
• Used inside functions/classes become docstrings

Examples:
# String variable:
text = '''This is
a multi-line
string'''

# Docstring (special use):
def my_func():
    """This is a docstring - still a string!"""
    pass

# Both create strings:
s1 = '''single'''
s2 = """double"""  # Same result

Important: Triple-quoted strings are often used as docstrings, which are special strings that Python automatically associates with functions, classes, and modules for documentation purposes.
`
  }),
  (_i: number) => ({ 
    q: `Is # a comment or string delimiter?`, 
    o: ["Comment", "String delimiter", "Both", "Neither"], 
    c: 0, 
    e: "# starts a comment, not a string.",
    de: `The # symbol is a comment marker, not a string delimiter. It tells Python to ignore everything from that point to the end of the line. It's used only for comments, not for defining strings.

What # does:
• Starts a single-line comment
• Ignored by Python interpreter
• Not used to create strings
• No closing symbol needed

String delimiters in Python:
• Single quotes: 'text'
• Double quotes: "text"
• Triple single quotes: '''text'''
• Triple double quotes: """text"""
• Raw strings: r"text"
• f-strings: f"text"

Important distinction:
• # text = comment (ignored)
• "text" = string (executed, creates string object)

Examples:
# This is a comment - ignored
text = "This is a string"  # This comment is also ignored
# But the string above IS executed

Inside strings, # has no special meaning:
text = "Price is $#100"  # The # is part of the string
comment = "This is a # comment"  # # inside string is just a character

Example: # starts a comment. To create a string, use 'text' or "text", not #.
`
  }),
  (_i: number) => ({ 
    q: `Can triple quotes be used for comments?`, 
    o: ["No, they create strings", "Yes", "Only in Python 2", "Only in classes"], 
    c: 0, 
    e: "Triple quotes create strings, not comments.",
    de: `No, triple quotes cannot be used for comments - they create string literals. While unassigned triple-quoted strings are often used informally as multi-line "comments," they're actually executed as string objects (though they're immediately discarded if not assigned). This is inefficient compared to real comments.

The reality:
• Triple quotes create string objects (even if unassigned)
• Strings are created in memory, then discarded
• This uses resources (minimal but not zero)
• Real comments (#) are completely ignored - zero overhead

Common misconception:
# People sometimes do this thinking it's a comment:
"""
This is NOT a comment
It's a string that's created and discarded
"""

# Better way (actual comment):
# This is a comment
# Multi-line comments require multiple # lines

Why not use triple quotes as comments:
• Creates unnecessary string objects
• Not truly ignored like comments
• Can cause issues in some contexts
• Not the Pythonic way

The Pythonic way for multi-line comments:
• Use # on each line
• Or use triple-quoted strings as docstrings (inside functions/classes)

Example: """This looks like a comment but creates a string""" - use # This is a real comment instead for actual comments.
`
  }),
  (_i: number) => ({ 
    q: `What happens to code after # on a line?`, 
    o: ["Ignored by Python", "Executed", "Creates error", "Creates variable"], 
    c: 0, 
    e: "Everything after # is ignored.",
    de: `Everything after the # symbol on a line is completely ignored by the Python interpreter. It's treated as a comment and stripped out before execution. This means you can write anything after # and it won't affect your program - it won't execute, create variables, or cause errors (unless it's part of a string that contains #).

Comment behavior:
• # marks the start of a comment
• Everything from # to end of line is ignored
• Not parsed, not executed, not stored
• Can contain any characters (no syntax rules apply)
• The line continues but only code before # runs

Examples:
x = 5  # This comment is ignored
# This entire line is a comment
x = 5  # x = 10  # This won't execute! x stays 5

Important exceptions:
• If # is inside a string, it's part of the string, not a comment:
  text = "Price is #100"  # The # is part of the string
  
• If # is inside triple quotes, it's part of the string:
  text = """Line 1  # This is still part of string"""

• Only # outside of string literals starts comments

Example: x = 5  # This code would cause an error if executed - but it's ignored! So x = 5, not the error.
`
  }),
  (_i: number) => ({ 
    q: `Can you nest triple-quoted strings?`, 
    o: ["Yes, with different quote types", "No", "Only in Python 2", "Only in functions"], 
    c: 0, 
    e: "You can nest with different quote types.",
    de: `Yes, you can nest triple-quoted strings by using different quote types. If you use ''' for the outer string, you can use """ for an inner string, and vice versa. This allows you to include quotes of one type inside a string delimited by the other type.

Nesting rules:
• Outer ''' can contain """ inside
• Outer """ can contain ''' inside
• Cannot nest same type: ''' ... ''' ... ''' won't work (ends at first matching triple)
• Mixing quote types is the solution

Examples:
# Nested with different types:
text = '''Outer string with """inner string""" inside'''
text2 = """Outer with '''inner''' inside"""

# This won't work (same type):
# text = '''Outer with '''inner''' inside'''  # ERROR! Ends at second '''

Why this works:
• Python finds matching triple quotes to end the string
• Different quote types don't match
• Allows nesting without escaping

Alternative (escaping):
• You can escape quotes: text = '''Outer with \'\'\'inner\'\'\' inside'''
• But using different quote types is cleaner

Common use cases:
• Embedding code examples with quotes
• Multi-level nested strings
• Complex documentation strings

Example: text = '''Documentation with "quoted" and """triple quoted""" examples inside''' - works because different quote types don't conflict.
`
  }),
  (_i: number) => ({ 
    q: `What is the difference between ' and " for strings?`, 
    o: ["No difference", "Single is shorter", "Double is faster", "Single is deprecated"], 
    c: 0, 
    e: "Both work identically in Python.",
    de: `There is no functional difference between single quotes (') and double quotes (") for creating strings in Python. They work identically - both create the same string object. The choice between them is purely stylistic and based on convenience.

No difference in:
• Functionality: 'text' == "text"  # True
• Performance: Identical
• Memory usage: Identical
• Syntax rules: Both work everywhere

So why have both?
• Convenience: Use 'text' when string contains "
• Convenience: Use "text" when string contains '
• Style consistency: Pick one and stick with it
• Avoid escaping: Use the opposite quote type

Examples:
text1 = 'He said "Hello"'  # No escaping needed
text2 = "It's a string"  # No escaping needed
text3 = 'It\'s a string'  # Escaping needed with same quotes
text4 = "He said \"Hello\""  # Escaping needed with same quotes

PEP 8 (Python style guide) says:
• Be consistent within a module
• Use triple double quotes for docstrings
• Pick one style and stick with it

Common convention:
• Single quotes for short strings
• Double quotes for strings with single quotes inside
• Triple double quotes for docstrings

Example: 'Hello' and "Hello" create identical strings. Choose based on what characters are inside the string to minimize escaping.
`
  }),
  
  // 41-50: Type Conversions
  (_i: number) => ({ 
    q: `Result of int("42")?`, 
    o: ["42", '"42"', "Error", "float"], 
    c: 0, 
    e: "int() converts numeric strings to integers.",
    de: `The int() function converts a value to an integer. When given a string containing numeric characters, it parses the string and returns the integer value. This is essential for converting user input (which comes as strings) to numbers for calculations.

int() conversion:
• int("42") = 42 (converts string to integer)
• int("42") returns 42 (an integer, not a string)
• The result is type int, not type str
• Leading/trailing whitespace is allowed: int(" 42 ") = 42

What int() accepts:
• Numeric strings: int("42") = 42
• Float strings: int("3.14") = 3 (truncates)
• Floats: int(3.14) = 3 (truncates towards zero)
• Whitespace: int("  42  ") = 42 (strips whitespace)

What causes errors:
• Non-numeric strings: int("hello") raises ValueError
• Empty strings: int("") raises ValueError
• None: int(None) raises TypeError

Common use:
• User input: age = int(input("Enter age: "))
• String parsing: num = int("42")
• Type conversion: result = int(3.14)

Example: int("42") returns 42 (integer). Note: This is the number 42, not the string "42". To convert back: str(42) = "42".
`
  }),
  (_i: number) => ({ 
    q: `Result of float(42)?`, 
    o: ["42.0", "42", "int", "None"], 
    c: 0, 
    e: "float() adds decimal precision.",
    de: `The float() function converts a value to a floating-point number (decimal number). When given an integer, it adds .0 to make it a float. This is important because floats and ints are different types in Python.

float() conversion:
• float(42) = 42.0 (converts integer to float)
• Adds decimal precision (even if .0)
• Result is type float, not type int
• 42.0 is different from 42 in type, though equal in value

What float() accepts:
• Integers: float(42) = 42.0
• Numeric strings: float("3.14") = 3.14
• Integer strings: float("42") = 42.0
• Already floats: float(3.14) = 3.14 (no change)
• Scientific notation: float("1e5") = 100000.0

Why use float():
• Division always produces float: 10 / 2 = 5.0
• Need decimal precision: float(42) = 42.0
• Consistency: float(5) = 5.0
• Parsing decimal strings: float("3.14") = 3.14

Type differences:
• 42 is int, 42.0 is float
• 42 == 42.0 is True (values are equal)
• type(42) != type(42.0) (types are different)
• 42 is 42.0 is False (different objects)

Example: float(42) returns 42.0 (a float). This is useful when you need decimal precision or are working with division which always produces floats in Python 3.
`
  }),
  (_i: number) => ({ 
    q: `Result of str(42)?`, 
    o: ['"42"', "42", "Error", "None"], 
    c: 0, 
    e: "str() converts values to strings.",
    de: `The str() function converts a value to its string representation. When given a number, it converts it to a string containing the numeric characters. This is the opposite of int() or float() - it converts from numbers to strings.

str() conversion:
• str(42) = "42" (converts integer to string)
• Creates a string representation of the value
• Result is type str, not the original type
• Works with any type (numbers, lists, objects, etc.)

What str() accepts:
• Integers: str(42) = "42"
• Floats: str(3.14) = "3.14"
• Booleans: str(True) = "True"
• Lists: str([1, 2]) = "[1, 2]"
• None: str(None) = "None"
• Almost anything!

Common uses:
• String formatting: "Age: " + str(42)
• Displaying numbers: print(str(42))
• Conversion for concatenation: "Number: " + str(num)
• f-strings alternative: f"Number: {42}" (automatic conversion)

String concatenation:
• "Age: " + 42 raises TypeError (can't concatenate)
• "Age: " + str(42) = "Age: 42" (works!)

Modern alternative:
• f-strings: f"Age: {42}" = "Age: 42" (automatic conversion)
• .format(): "Age: {}".format(42) = "Age: 42"

Example: str(42) returns "42" (a string). This allows you to combine numbers with text: "I am " + str(age) + " years old".
`
  }),
  (_i: number) => ({ 
    q: `Result of bool(0)?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "0 is False, non-zero is True.",
    de: `The bool() function converts a value to a boolean (True or False). When given the integer 0, it returns False because 0 is "falsy" in Python - it evaluates to False in boolean contexts.

bool() truthiness:
• bool(0) = False (zero is falsy)
• bool(1) = True (non-zero is truthy)
• bool(-1) = True (even negatives are truthy)
• Only 0 is False; all other numbers are True

Falsy values in Python:
• 0 (zero integer)
• 0.0 (zero float)
• False (boolean False)
• None (None value)
• "" (empty string)
• [] (empty list)
• {} (empty dict)
• set() (empty set)
• () (empty tuple)

Truthy values:
• All non-zero numbers: 1, -1, 3.14, 0.1, etc.
• All non-empty sequences: [1, 2], "hello", etc.
• True (boolean True)
• Most objects

Why this matters:
• Used in if statements: if value: (checks truthiness)
• Used in loops: while value: (continues if truthy)
• Used in boolean operations: value and other
• Used in comprehensions: [x for x in items if x]

Common pattern:
• Check if number is non-zero: if number: ...
• Check if list is non-empty: if items: ...
• Check if string is non-empty: if text: ...

Example: bool(0) returns False. This is used in conditional statements: if number: print("Non-zero") only prints when number is not 0.
`
  }),
  (_i: number) => ({ 
    q: `Result of bool(1)?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "Non-zero numbers are Truthy.",
    de: `The bool() function converts a value to a boolean. When given the integer 1 (or any non-zero number), it returns True because non-zero numbers are "truthy" in Python - they evaluate to True in boolean contexts.

Truthiness of numbers:
• bool(1) = True (non-zero is truthy)
• bool(42) = True (any positive non-zero)
• bool(-1) = True (even negatives are truthy)
• bool(0.1) = True (even tiny numbers)
• Only 0 (and 0.0) is False

Why numbers are truthy:
• Represents "something exists" vs "nothing"
• Useful for checking if value is non-zero
• Common pattern: if count: ... (only if non-zero)
• Natural way to check for presence/absence

Boolean conversion:
• In if statements: if number: (automatically converts)
• In while loops: while count: (checks truthiness)
• In boolean operations: number and other
• Explicit conversion: bool(number)

Common uses:
• Check if counter is non-zero: if count: print("Has items")
• Check if value exists: if result: process(result)
• Guard clauses: if not value: return early

Edge cases:
• bool(0) = False (only zero is falsy)
• bool(0.0) = False (float zero too)
• bool(0j) = False (complex zero)
• All others are True

Example: bool(1) returns True. This allows natural checking: if user_count: print(f"{user_count} users") only prints when there are users.
`
  }),
  (_i: number) => ({ 
    q: `Result of bool("")?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "Empty strings are Falsy.",
    de: `Empty strings ("") are falsy in Python - they evaluate to False in boolean contexts. This is because an empty string represents "no content" or "absence of text," which is naturally False.

String truthiness:
• bool("") = False (empty string is falsy)
• bool("hello") = True (non-empty is truthy)
• bool(" ") = True (space is a character!)
• Only "" is False; all other strings are True

Why empty strings are falsy:
• Represents "no text" vs "has text"
• Useful for checking if string has content
• Common pattern: if text: ... (only if non-empty)
• Natural way to check for presence

Important distinction:
• "" is falsy (no characters)
• " " is truthy (contains a space character!)
• "\n" is truthy (contains newline)
• Only truly empty string is falsy

Common uses:
• Check if input exists: if user_input: ...
• Validate strings: if not name: raise ValueError
• Guard clauses: if not message: return
• Process only non-empty: if text: process(text)

Checking for empty:
• if not text: (True when empty)
• if text == "": (explicit check)
• if len(text) == 0: (length check)
• if text: (most Pythonic - checks truthiness)

Example: bool("") returns False. This is used to validate input: if not name: print("Name required") - only prints when name is empty.
`
  }),
  (_i: number) => ({ 
    q: `Result of bool("hello")?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "Non-empty strings are Truthy.",
    de: `Non-empty strings are truthy in Python - they evaluate to True in boolean contexts. Any string containing at least one character (even a single space) is truthy, representing "has content."

String truthiness:
• bool("hello") = True (non-empty is truthy)
• bool("a") = True (even single character)
• bool(" ") = True (space is a character!)
• bool("\n") = True (newline is a character!)
• Only "" (empty) is False

Why strings are truthy:
• Represents "has text" vs "no text"
• Useful for checking if string has content
• Common pattern: if text: ... (only if non-empty)
• Natural validation pattern

Important notes:
• Any non-empty string is True
• Even whitespace-only strings are True: bool("   ") = True
• Only truly empty string "" is False
• Single character strings are True: bool("a") = True

Common uses:
• Validate input: if username: save(username)
• Check if text exists: if message: send(message)
• Process only non-empty: if user_input: process()
• Guard clauses: if not text: return

Checking for non-empty:
• if text: (most Pythonic)
• if len(text) > 0: (explicit length check)
• if text != "": (explicit comparison)
• if text.strip(): (checks if has non-whitespace)

Example: bool("hello") returns True. This allows natural validation: if email: send_email(email) only sends when email has content.
`
  }),
  (_i: number) => ({ 
    q: `Result of bool([])?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "Empty lists are Falsy.",
    de: `Empty lists ([]) are falsy in Python - they evaluate to False in boolean contexts. This is because an empty list represents "no items" or "absence of data," which is naturally False.

List truthiness:
• bool([]) = False (empty list is falsy)
• bool([1, 2]) = True (non-empty is truthy)
• bool([0]) = True (even if contains 0, list itself is truthy!)
• Only [] is False; all other lists are True

Why empty lists are falsy:
• Represents "no items" vs "has items"
• Useful for checking if list has content
• Common pattern: if items: ... (only if non-empty)
• Natural way to check for presence

Important distinction:
• [] is falsy (no elements)
• [0] is truthy (has one element, even though it's 0!)
• [False] is truthy (has one element, even though it's False!)
• Only truly empty list is falsy

Common uses:
• Check if list has items: if items: process(items)
• Validate lists: if not data: return []
• Guard clauses: if not results: return None
• Process only non-empty: if numbers: calculate(numbers)

Checking for empty:
• if not items: (True when empty)
• if items == []: (explicit check)
• if len(items) == 0: (length check)
• if items: (most Pythonic - checks truthiness)

Example: bool([]) returns False. This is used to check for empty collections: if not items: print("No items to process") - only prints when list is empty.
`
  }),
  (_i: number) => ({ 
    q: `Result of bool([1, 2])?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "Non-empty lists are Truthy.",
    de: `Non-empty lists are truthy in Python - they evaluate to True in boolean contexts. Any list containing at least one element is truthy, regardless of what those elements are (even if the elements themselves are falsy).

List truthiness:
• bool([1, 2]) = True (non-empty is truthy)
• bool([0]) = True (even if contains 0!)
• bool([False]) = True (even if contains False!)
• bool([[]]) = True (even if contains empty list!)
• Only [] (empty) is False

Why lists are truthy:
• Represents "has items" vs "no items"
• Useful for checking if list has content
• Common pattern: if items: ... (only if non-empty)
• Natural validation pattern

Important distinction:
• The list's truthiness is independent of its contents
• [0] is True because the list has elements, even though 0 is falsy
• [False] is True because the list has elements, even though False is falsy
• [None] is True because the list has elements

Common uses:
• Check if list has items: if results: display(results)
• Validate data: if numbers: calculate_average(numbers)
• Process only non-empty: if users: send_notifications(users)
• Guard clauses: if not items: return early

Checking for non-empty:
• if items: (most Pythonic)
• if len(items) > 0: (explicit length check)
• if items != []: (explicit comparison)

Example: bool([1, 2]) returns True. This allows natural checking: if products: show_products(products) only displays when there are products to show.
`
  }),
  (_i: number) => ({ 
    q: `Result of bool(None)?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "None is Falsy.",
    de: `None is falsy in Python - it evaluates to False in boolean contexts. None represents the absence of a value or "no value," which naturally evaluates to False.

None truthiness:
• bool(None) = False (None is falsy)
• None is a singleton object (only one None exists)
• Used to represent "no value" or "undefined"
• Common default value for optional parameters

Why None is falsy:
• Represents "nothing" vs "something"
• Useful for checking if value exists
• Common pattern: if value: ... (only if not None)
• Natural way to check for presence

Important distinction:
• None != False (None is not the same as False)
• None != 0 (None is not the same as 0)
• None != "" (None is not the same as empty string)
• But all are falsy: if not None: passes

Common uses:
• Check if value exists: if result: process(result)
• Validate parameters: if not value: raise ValueError
• Guard clauses: if value is None: return
• Optional parameters: def func(x=None): ...

Checking for None:
• if value is None: (most Pythonic - use 'is')
• if value == None: (works but not recommended)
• if not value: (checks if falsy, not specifically None)
• if value is not None: (checks if not None)

Example: bool(None) returns False. This is used to check for missing values: if user is None: print("No user") - only prints when user is None.
`
  }),
  
  // 51-60: Basic Arithmetic Operations
  (_i: number) => ({ 
    q: `What is 10 / 2 in Python 3?`, 
    o: ["5.0", "5", "0", "Error"], 
    c: 0, 
    e: "The / operator always returns a float in Python 3.",
    de: `In Python 3, the division operator (/) always returns a floating-point number, even when the result is a whole number. This is different from Python 2, where / performed integer division. The result is 5.0, not 5.

Division in Python 3:
• 10 / 2 = 5.0 (always returns float)
• 10 / 3 = 3.3333333333333335 (float)
• 5 / 1 = 5.0 (even whole numbers become floats)
• This change was made to prevent unexpected integer division

Python 2 vs Python 3:
• Python 2: 10 / 2 = 5 (integer division)
• Python 3: 10 / 2 = 5.0 (true division - always float)
• Python 2 & 3: 10 // 2 = 5 (floor division - integer)

Why this change:
• Prevents confusion about division behavior
• Makes division mathematically consistent
• Eliminates unexpected integer truncation
• More intuitive for most use cases

Getting integer results:
• Use // (floor division): 10 // 2 = 5
• Use int(): int(10 / 2) = 5
• But // is preferred for clarity

Example: 10 / 2 returns 5.0 (a float). If you need an integer, use 10 // 2 = 5 (floor division).
`
  }),
  (_i: number) => ({ 
    q: `What is 10 // 3?`, 
    o: ["3", "3.33", "4", "Error"], 
    c: 0, 
    e: "// is floor division.",
    de: `The // operator performs floor division (also called integer division or truncating division). It divides two numbers and returns the largest integer less than or equal to the result. For positive numbers, this means it truncates toward zero.

Floor division:
• 10 // 3 = 3 (fits 3 times, remainder 1)
• Returns integer (or float if operands are floats)
• Rounds down (toward negative infinity)
• Works with negative numbers too

How it works:
• 10 ÷ 3 = 3.333... → floor = 3
• 10 // 3 = 3 (largest integer ≤ 3.333)
• Similar to int(10 / 3) but different with negatives

With negatives:
• -10 // 3 = -4 (rounds down, away from zero)
• int(-10 / 3) = -3 (truncates toward zero)
• // rounds toward negative infinity, int() truncates toward zero

Use cases:
• Getting whole number of divisions
• Splitting items into groups
• Converting to integer after division
• Time calculations (hours, minutes)

Related:
• 10 % 3 = 1 (remainder after 10 // 3)
• divmod(10, 3) = (3, 1) (returns both // and %)

Example: 10 // 3 returns 3. This represents how many complete groups of 3 can be made from 10.
`
  }),
  (_i: number) => ({ 
    q: `What is 2 ** 3?`, 
    o: ["8", "6", "9", "Error"], 
    c: 0, 
    e: "** is the exponentiation operator.",
    de: `The ** operator performs exponentiation (raising a number to a power). It's Python's built-in operator for calculating powers, making it convenient and readable. 2 ** 3 means "2 to the power of 3" which equals 8.

Exponentiation syntax:
• 2 ** 3 = 8 (2 raised to the power of 3)
• base ** exponent = base ^ exponent (mathematically)
• Right-associative: 2 ** 3 ** 2 = 2 ** (3 ** 2) = 2 ** 9 = 512
• Works with floats: 2.5 ** 2 = 6.25

How it works:
• 2 ** 3 = 2 × 2 × 2 = 8
• 2 ** 0 = 1 (any number to power 0 is 1)
• 2 ** -1 = 0.5 (negative powers give fractions)
• 10 ** 2 = 100 (10 squared)

Common uses:
• Powers of 2: 2 ** 10 = 1024
• Squaring: x ** 2
• Cubing: x ** 3
• Scientific notation: 10 ** 6 = 1,000,000
• Calculating areas/volumes

Alternatives:
• math.pow(2, 3) = 8.0 (always returns float)
• pow(2, 3) = 8 (built-in function, can return int)
• 2 ** 3 is preferred (more readable and Pythonic)

Precedence:
• ** has highest precedence (right-associative)
• 2 ** 3 ** 2 = 2 ** 9 = 512 (not 8 ** 2 = 64)

Example: 2 ** 3 returns 8. This is Python's way of calculating 2 to the power of 3.
`
  }),
  (_i: number) => ({ 
    q: `What is 10 % 3?`, 
    o: ["1", "3", "0", "Error"], 
    c: 0, 
    e: "% is the modulo operator (remainder).",
    de: `The % operator is the modulo operator - it returns the remainder after division. When you divide 10 by 3, you get 3 groups of 3 with 1 left over. That remainder (1) is what the modulo operator returns.

Modulo operation:
• 10 % 3 = 1 (remainder when 10 is divided by 3)
• 10 ÷ 3 = 3 with remainder 1
• Returns what's left after floor division
• Works with floats too: 10.5 % 3 = 1.5

How it works:
• Divide first number by second
• Return the remainder after division
• 10 % 3: 10 ÷ 3 = 3 remainder 1, so 10 % 3 = 1
• 10 % 5: 10 ÷ 5 = 2 remainder 0, so 10 % 5 = 0

Common uses:
• Checking even/odd: n % 2 (0 = even, 1 = odd)
• Wrapping values: index % length (keeps index in range)
• Finding divisors: n % d == 0 (d divides n)
• Time calculations: seconds % 60 (seconds within minute)
• Hashtables: hash % size (bucket index)

With negatives:
• -10 % 3 = 2 (sign of result matches divisor)
• Python's % follows mathematical definition
• Different from some languages (like C)

Related operators:
• 10 // 3 = 3 (floor division - how many times it fits)
• 10 % 3 = 1 (remainder - what's left)
• divmod(10, 3) = (3, 1) (returns both // and %)

Example: 10 % 3 returns 1. This is useful for checking divisibility: if number % 3 == 0: print("Divisible by 3").
`
  }),
  (_i: number) => ({ 
    q: `What is -5?`, 
    o: ["Negative five", "Error", "5", "None"], 
    c: 0, 
    e: "Unary minus creates negative number.",
    de: `The unary minus operator (-) negates a number, creating its negative counterpart. It's called "unary" because it operates on a single operand (unlike binary operators like + which operate on two). -5 is the negative version of 5.

Unary minus:
• -5 = negative five
• Negates the value: -5 is the opposite of 5
• Creates a negative number from a positive
• Can negate variables too: -x

How it works:
• -5 means "negative 5" or "minus 5"
• Changes the sign: positive → negative
• -(-5) = 5 (double negation returns original)
• Works with floats: -3.14 = -3.14

Use cases:
• Representing negative values
• Subtracting (can write x - y as x + -y)
• Inverting signs: -balance (opposite of balance)
• Temperature below zero: -10°C
• Debt/losses in finance

With variables:
• x = 5
• -x = -5 (negates x's value)
• -(-x) = x (double negation)

Important notes:
• -5 is not "subtract 5" (that requires two operands)
• -5 is a literal (a complete expression)
• Can use in expressions: 10 + -5 = 5

Comparison:
• -5 (unary minus) - negates a number
• 10 - 5 (binary minus) - subtraction operation

Example: -5 is negative five. This represents the value five below zero. In Python, -5 is a complete expression that evaluates to negative five.
`
  }),
  (_i: number) => ({ 
    q: `What is +5?`, 
    o: ["Positive five", "Error", "-5", "None"], 
    c: 0, 
    e: "Unary plus is allowed but doesn't change value.",
    de: `The unary plus operator (+) is allowed in Python but doesn't change the value of a number. It's essentially a no-op (no operation) - it returns the number unchanged. +5 is just 5. However, it can be useful for code clarity or in certain expressions.

Unary plus:
• +5 = 5 (doesn't change value)
• Creates no-op: +x returns x unchanged
• Valid syntax but has no effect
• Less commonly used than unary minus

Why it exists:
• Symmetry with unary minus
• Code clarity (emphasize positive value)
• Type hints/annotations
• May convert to int/float in some contexts

Behavior:
• +5 = 5 (no change)
• +(-5) = -5 (applying + doesn't negate)
• +(3.14) = 3.14 (works with floats too)
• +x = x (for any number x)

Use cases:
• Code clarity: +balance (emphasize positive)
• Type conversion in expressions
• Consistency in code style
• Mathematical notation

Rare but valid:
• x = +5 (assigns 5, not different from x = 5)
• result = +value (does nothing, but valid)
• print(+10) (prints 10, same as print(10))

Comparison:
• +5 = 5 (unary plus - no change)
• -5 = -5 (unary minus - negates)

Example: +5 is simply 5. While valid syntax, it has no effect. Most Python code doesn't use unary plus unless needed for clarity or specific use cases.
`
  }),
  (_i: number) => ({ 
    q: `What is 2 * 3 + 4?`, 
    o: ["10", "14", "18", "Error"], 
    c: 0, 
    e: "Multiplication before addition (PEMDAS).",
    de: `Python follows the standard order of operations (PEMDAS: Parentheses, Exponents, Multiplication/Division, Addition/Subtraction). Multiplication has higher precedence than addition, so 2 * 3 is calculated first, then 4 is added to the result.

Order of operations (PEMDAS):
• Parentheses first
• Exponents (powers) next
• Multiplication and Division (left to right)
• Addition and Subtraction (left to right)

Step-by-step:
• 2 * 3 + 4
• First: 2 * 3 = 6 (multiplication first)
• Then: 6 + 4 = 10 (addition second)
• Result: 10

Operator precedence:
• ** (exponentiation) - highest
• *, /, //, % (multiplication, division) - medium-high
• +, - (addition, subtraction) - medium
• Parentheses override precedence

To change order:
• Use parentheses: (2 * 3) + 4 = 10 (same result)
• Or: 2 * (3 + 4) = 2 * 7 = 14 (different result!)

Common mistakes:
• 2 * 3 + 4 ≠ 2 * 7 (would be 14)
• Must do multiplication first: 2 * 3 = 6, then 6 + 4 = 10

Best practice:
• Use parentheses for clarity, even when not needed
• Makes code more readable
• Prevents errors and misunderstandings

Example: 2 * 3 + 4 evaluates to 10. Multiplication (2 * 3 = 6) happens before addition (6 + 4 = 10) due to operator precedence.
`
  }),
  (_i: number) => ({ 
    q: `What is (2 + 3) * 4?`, 
    o: ["20", "14", "18", "Error"], 
    c: 0, 
    e: "Parentheses change order of operations.",
    de: `Parentheses override the normal order of operations in Python. When you use parentheses, the expression inside is evaluated first, regardless of operator precedence. (2 + 3) * 4 calculates 2 + 3 first (which equals 5), then multiplies by 4 to get 20.

Parentheses effect:
• (2 + 3) * 4
• First: (2 + 3) = 5 (parentheses evaluated first)
• Then: 5 * 4 = 20 (multiplication)
• Result: 20

Without parentheses:
• 2 + 3 * 4 = 2 + 12 = 14 (multiplication first)
• Parentheses change the result!

How parentheses work:
• Highest precedence (evaluated first)
• Override normal operator precedence
• Can nest: ((2 + 3) * 4) / 2
• Used for clarity even when not needed

Common uses:
• Change order: (a + b) * c (add first, then multiply)
• Group expressions: (x + y) * (x - y)
• Function arguments: func(a + b, c * d)
• Clarity: (2 * 3) + 4 (makes intent clear)

Best practices:
• Use parentheses for clarity
• Even when not needed, they improve readability
• Prevents operator precedence errors
• Makes code easier to understand

Example: (2 + 3) * 4 evaluates to 20. The parentheses force addition to happen first (2 + 3 = 5), then multiplication (5 * 4 = 20), giving a different result than 2 + 3 * 4 = 14.
`
  }),
  (_i: number) => ({ 
    q: `What is 2 ** 2 ** 3?`, 
    o: ["256", "64", "512", "Error"], 
    c: 0, 
    e: "Exponentiation is right-associative: 2**(2**3) = 2**8 = 256.",
    de: `Exponentiation in Python is right-associative, meaning it groups from right to left. 2 ** 2 ** 3 is evaluated as 2 ** (2 ** 3), not (2 ** 2) ** 3. This matches mathematical convention for powers.

Right-associativity:
• 2 ** 2 ** 3 = 2 ** (2 ** 3)
• NOT (2 ** 2) ** 3
• Groups from right to left
• Matches mathematical convention

Step-by-step:
• 2 ** 2 ** 3
• First: 2 ** 3 = 8 (rightmost exponentiation)
• Then: 2 ** 8 = 256 (left exponentiation)
• Result: 256

If it were left-associative:
• (2 ** 2) ** 3 = 4 ** 3 = 64 (different result!)

Mathematical convention:
• a^b^c = a^(b^c) (standard math notation)
• Python follows this convention
• Right-associative for exponentiation

Other operators:
• Most operators are left-associative: 10 - 5 - 2 = (10 - 5) - 2 = 3
• Exponentiation is right-associative: 2 ** 3 ** 2 = 2 ** (3 ** 2) = 512

Best practice:
• Use parentheses for clarity: 2 ** (2 ** 3)
• Makes intent explicit
• Prevents confusion

Example: 2 ** 2 ** 3 evaluates to 256. It's calculated as 2 ** (2 ** 3) = 2 ** 8 = 256, following right-associativity.
`
  }),
  (_i: number) => ({ 
    q: `What is 10 / 0?`, 
    o: ["ZeroDivisionError", "0", "infinity", "None"], 
    c: 0, 
    e: "Division by zero raises ZeroDivisionError.",
    de: `Dividing by zero in Python raises a ZeroDivisionError exception. This is mathematically undefined and Python prevents this operation by raising an error. You cannot divide any number by zero - it's not valid mathematically or in Python.

Division by zero:
• 10 / 0 raises ZeroDivisionError
• 10 // 0 raises ZeroDivisionError
• 10 % 0 raises ZeroDivisionError
• Any division by zero causes an error

Why this happens:
• Mathematically undefined (can't divide by zero)
• Python prevents invalid operations
• Raises exception to signal the error
• Must be handled or program crashes

The error:
• Exception type: ZeroDivisionError
• Message: "division by zero"
• Stops program execution unless caught
• Common mistake in calculations

Handling the error:
• Use try-except to catch it
• Check before dividing: if divisor != 0:
• Provide default values for edge cases
• Validate input to prevent division by zero

Example handling:
try:
    result = 10 / 0
except ZeroDivisionError:
    result = None  # Handle the error

Prevention:
• Check before dividing: if y != 0: x / y
• Validate input: assert divisor != 0
• Use default values: x / y if y != 0 else 0

Example: 10 / 0 raises ZeroDivisionError. This must be caught with try-except or prevented by checking that the divisor is not zero before dividing.
`
  }),
  
  // 61-70: Type Mixing and Operations
  (_i: number) => ({ 
    q: `Value of type(3.14 + 1)?`, 
    o: ["<class 'float'>", "<class 'int'>", "<class 'str'>", "None"], 
    c: 0, 
    e: "Adding an int to a float results in a float.",
    de: `When you add an integer to a float in Python, the result is always a float. Python automatically promotes the integer to a float before performing the addition. This is because floats have higher precision and can represent both integers and decimals.

Type promotion:
• 3.14 + 1 = 4.14 (int is promoted to float)
• type(3.14 + 1) = <class 'float'>
• Integer is converted to float: 1 → 1.0
• Result is always float when mixing types

Why this happens:
• Float can represent ints: 1.0 represents 1
• Int cannot represent floats: 1 cannot represent 1.5
• Float has higher precision
• Promotes to preserve information

Rule:
• int + float = float
• float + int = float
• int + int = int
• float + float = float

Examples:
• 3 + 1.5 = 4.5 (float)
• 10 + 2.0 = 12.0 (float)
• 5 + 5 = 10 (int - both ints)

Best practice:
• Be aware of type promotion
• Explicit conversion if needed: int(3.14 + 1) = 4
• Check types if important: isinstance(result, float)

Example: type(3.14 + 1) returns <class 'float'>. The integer 1 is promoted to 1.0, and the result 4.14 is a float.
`
  }),
  (_i: number) => ({ 
    q: `What does "A" represent in Python?`, 
    o: ["A single character string", "An integer", "A list", "A char type"], 
    c: 0, 
    e: "Python doesn't have a 'char' type; single characters are strings.",
    de: `In Python, single characters like "A" are strings of length 1. Python doesn't have a separate 'char' type like C, Java, or C++ do. Every character is a string, even if it's just one character long.

Python's string type:
• "A" is a string of length 1
• No separate char type
• All characters are strings
• Consistent with Python's philosophy

Type checking:
• type("A") = <class 'str'>
• len("A") = 1 (single character)
• "A"[0] = "A" (accessing first character)
• Still a string, not a char

Why no char type:
• Simplifies the language
• Consistent handling of strings
• No need to convert between char and string
• Easier to work with

Comparison with other languages:
• C/Java: char 'A' (separate type)
• Python: str "A" (always string)
• No conversion needed between types

Working with single characters:
• "A" is already a string
• Can use string methods: "A".lower() = "a"
• Can concatenate: "A" + "B" = "AB"
• Can iterate: for char in "ABC":

Important:
• "A" and 'A' are identical (both strings)
• Single characters are not special
• Treat like any other string

Example: "A" represents a single character string. There's no char type - it's just a string with one character. This simplifies Python's type system.
`
  }),
  (_i: number) => ({ 
    q: `How do you find the data type of a variable?`, 
    o: ["type(variable)", "what(variable)", "kind(variable)", "check(variable)"], 
    c: 0, 
    e: "type() returns the class of an object.",
    de: `The type() function is Python's built-in way to find the data type (class) of any variable or value. It returns the class object that represents the type. This is essential for debugging, type checking, and understanding what kind of data you're working with.

type() function:
• type(variable) returns the class of the variable
• Works with any object in Python
• Returns <class 'type_name'> format
• Essential for type checking

How to use:
• type(42) = <class 'int'>
• type("hello") = <class 'str'>
• type([1, 2]) = <class 'list'>
• type(x) where x is a variable

Common uses:
• Debugging: check what type a variable is
• Type checking: if type(x) == int:
• Understanding code: see what an object is
• Validation: verify expected types

Alternative: isinstance()
• isinstance(x, int) returns True/False
• More flexible (checks inheritance)
• Preferred for type checking
• Works with subclasses

Examples:
• type(5) = <class 'int'>
• type(3.14) = <class 'float'>
• type("text") = <class 'str'>
• type([1, 2]) = <class 'list'>

Best practice:
• Use type() for exact type checking
• Use isinstance() for type checking (more Pythonic)
• Use type() for debugging/exploration

Important:
• type() returns the class object
• Can compare: type(x) == int
• But isinstance(x, int) is preferred

Example: type(variable) returns the class of the variable. This is the standard way to inspect the type of any object in Python.
`
  }),
  (_i: number) => ({ 
    q: `Which quotes are valid for strings?`, 
    o: ["Both ' and \"", "Only '", "Only \"", "Only `"], 
    c: 0, 
    e: "Python supports both single and double quotes.",
    de: `Python supports both single quotes (') and double quotes (") for creating strings. They work identically - there's no functional difference. The choice between them is a matter of style and convenience, especially when your string contains one type of quote.

Valid string delimiters:
• Single quotes: 'text'
• Double quotes: "text"
• Triple single: '''text'''
• Triple double: """text"""
• Both work identically

Why both exist:
• Convenience when string contains quotes
• Use 'text' when string has "
• Use "text" when string has '
• Avoids escaping quotes

Examples:
• 'He said "Hello"' (no escaping needed)
• "It's a string" (no escaping needed)
• 'It\'s a string' (escaping needed)
• "He said \"Hello\"" (escaping needed)

Style guide (PEP 8):
• Be consistent within a module
• Pick one style and stick with it
• Triple double quotes for docstrings
• Use opposite quote when string contains quote

Comparison:
• 'text' == "text" → True (identical)
• type('text') == type("text") → True
• No performance difference
• No functional difference

Best practice:
• Choose one style per module
• Use opposite quote to avoid escaping
• Triple quotes for multi-line strings

Example: Both 'text' and "text" are valid and identical in Python. Choose based on what quotes your string contains to minimize escaping.
`
  }),
  (_i: number) => ({ 
    q: `What is "2" + "3"?`, 
    o: ["23", "5", "Error", "None"], 
    c: 0, 
    e: "String concatenation, not addition.",
    de: `The + operator with strings performs concatenation (joining strings together), not mathematical addition. When both operands are strings, + concatenates them end-to-end. "2" + "3" results in "23" (the string "two-three"), not 5 (the number five).

String concatenation:
• "2" + "3" = "23" (concatenates, doesn't add)
• Joins strings together
• Creates new string
• No mathematical addition

Why this happens:
• Both operands are strings
• + with strings means concatenate
• Python doesn't auto-convert
• Type determines behavior

To get 5:
• Convert first: int("2") + int("3") = 5
• Or: float("2") + float("3") = 5.0
• Must explicitly convert strings to numbers

Common mistake:
• "2" + "3" ≠ 5 (it's "23")
• Must convert: int("2") + int("3") = 5
• Remember: strings concatenate, numbers add

When concatenation happens:
• str + str = concatenation
• str + int = TypeError (can't mix types)
• Must convert: str + str(int)

Example: "2" + "3" returns "23" (string concatenation). To add numbers, convert strings first: int("2") + int("3") = 5.
`
  }),
  (_i: number) => ({ 
    q: `What is int("2") + int("3")?`, 
    o: ["5", "23", "Error", "None"], 
    c: 0, 
    e: "Convert strings to ints before adding.",
    de: `To perform mathematical addition on numeric strings, you must first convert them to numbers using int() or float(). int("2") + int("3") converts both strings to integers first, then adds them to get 5 (the number five).

Type conversion:
• int("2") = 2 (string → integer)
• int("3") = 3 (string → integer)
• 2 + 3 = 5 (integer addition)
• Result: 5 (integer)

Step-by-step:
• int("2") converts "2" to 2
• int("3") converts "3" to 3
• 2 + 3 performs integer addition
• Result is 5 (not "23" or "5")

Why convert:
• Strings concatenate with +
• Numbers add with +
• Must convert to get mathematical addition
• int() parses numeric strings

Common pattern:
• User input comes as strings
• input() returns strings
• Must convert: int(input("Enter number: "))
• Then perform math

Alternatives:
• float("2.5") + float("3.5") = 6.0
• For decimals, use float()
• int() truncates decimals

Example: int("2") + int("3") returns 5. The strings are converted to integers first, then added mathematically. This is how you perform addition on numeric strings.
`
  }),
  (_i: number) => ({ 
    q: `What is "hello" == "Hello"?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "String comparison is case-sensitive.",
    de: `String comparison in Python is case-sensitive, meaning uppercase and lowercase letters are considered different. "hello" and "Hello" are not equal because 'h' and 'H' are different characters. Python compares strings character by character, and case matters.

Case sensitivity:
• "hello" == "Hello" → False
• Case matters in comparisons
• 'h' ≠ 'H' (different characters)
• Must match exactly (case and characters)

Why case-sensitive:
• 'A' and 'a' are different Unicode characters
• Reflects real-world differences
• More precise comparison
• Standard in most languages

Case-insensitive comparison:
• Use .lower(): "hello".lower() == "Hello".lower() → True
• Use .upper(): "hello".upper() == "Hello".upper() → True
• Use .casefold(): "hello".casefold() == "Hello".casefold() → True
• Compare normalized versions

Common use:
• User input: if input().lower() == "yes":
• Case-insensitive matching
• Password checking (usually case-sensitive)
• Username validation (case-sensitive typically)

Best practices:
• Be aware of case sensitivity
• Normalize before comparing if needed
• Use .lower() or .casefold() for case-insensitive
• Document your case sensitivity rules

Example: "hello" == "Hello" returns False. Python string comparison is case-sensitive. For case-insensitive comparison, use "hello".lower() == "Hello".lower() which returns True.
`
  }),
  (_i: number) => ({ 
    q: `What is "apple" < "banana"?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Strings are compared lexicographically.",
    de: `String comparison in Python uses lexicographic (dictionary) ordering. Strings are compared character by character from left to right, using the Unicode/ASCII value of each character. "apple" comes before "banana" alphabetically, so "apple" < "banana" is True.

Lexicographic comparison:
• "apple" < "banana" → True (alphabetical order)
• Compares character by character
• Uses Unicode/ASCII values
• Same as dictionary order

How it works:
• Compare first characters: 'a' vs 'b'
• 'a' < 'b' (ASCII 97 < 98)
• If equal, compare next character
• Continue until difference found

Examples:
• "apple" < "banana" → True
• "apple" < "app" → False (longer prefix is "greater")
• "A" < "a" → True (uppercase before lowercase in ASCII)
• "apple" < "Apple" → False (depends on first character)

Unicode order:
• Uppercase before lowercase: "A" < "a"
• Numbers before letters: "1" < "a"
• Special characters have specific positions
• Follows ASCII/Unicode ordering

Use cases:
• Sorting strings: sorted(["banana", "apple"]) = ["apple", "banana"]
• Searching: binary search on sorted list
• Range checking: if "apple" <= word <= "banana"
• Dictionary ordering

Important:
• Case matters: "A" < "a" is True
• Length matters: "app" < "apple" is True
• Character order follows Unicode

Example: "apple" < "banana" returns True because "apple" comes before "banana" in dictionary order. This is how Python sorts and compares strings.
`
  }),
  (_i: number) => ({ 
    q: `What is "a" in "abc"?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "in operator checks substring membership.",
    de: `The in operator checks if a substring is contained within a string. It returns True if the substring is found anywhere in the string, False otherwise. "a" in "abc" checks if "a" is a substring of "abc", which it is, so it returns True.

Substring membership:
• "a" in "abc" → True ("a" is in "abc")
• Returns boolean (True/False)
• Checks if substring exists
• Case-sensitive check

How it works:
• Searches for substring in string
• Returns True if found
• Returns False if not found
• Can find multi-character substrings too

Examples:
• "a" in "abc" → True
• "bc" in "abc" → True (multi-character substring)
• "d" in "abc" → False (not found)
• "A" in "abc" → False (case-sensitive)

Case sensitivity:
• "A" in "abc" → False (case matters)
• "a" in "ABC" → False (case matters)
• Use .lower() for case-insensitive: "A".lower() in "abc".lower() → True

Common uses:
• Validation: if "@" in email:
• Checking prefixes: if "http" in url:
• Filtering: [s for s in strings if "error" in s]
• Pattern matching: if keyword in text:

Related operators:
• not in: "x" not in "abc" → True
• Opposite of in
• Useful for negative checks

Example: "a" in "abc" returns True because "a" is a substring of "abc". The in operator is very useful for checking if strings contain certain patterns or characters.
`
  }),
  (_i: number) => ({ 
    q: `What is "a" not in "xyz"?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "not in checks if substring is absent.",
    de: `The not in operator is the opposite of in - it returns True if the substring is NOT found in the string. "a" not in "xyz" checks if "a" is absent from "xyz", which it is, so it returns True. This is useful for negative checks.

not in operator:
• "a" not in "xyz" → True ("a" is not in "xyz")
• Opposite of in operator
• Returns True when substring is absent
• Returns False when substring is present

How it works:
• Checks if substring is NOT in string
• True if not found
• False if found
• Same case-sensitivity as in

Examples:
• "a" not in "xyz" → True (not found)
• "x" not in "xyz" → False (found)
• "hello" not in "hello world" → False (found)
• "abc" not in "xyz" → True (not found)

Logical relationship:
• "a" not in "abc" = not ("a" in "abc") = not True = False
• "a" not in "xyz" = not ("a" in "xyz") = not False = True
• These are equivalent

Common uses:
• Validation: if " " not in username: (no spaces allowed)
• Guard clauses: if char not in valid_chars: return
• Filtering: [s for s in strings if "error" not in s]
• Negative checks: if invalid_pattern not in text:

Best practice:
• Use not in for negative checks (more readable)
• Clearer than not ("a" in "xyz")
• More Pythonic

Example: "a" not in "xyz" returns True because "a" is not found in "xyz". This is the negation of the in operator.
`
  }),
  
    // 71-80: String Methods - Case Operations
   (_i: number) => {
     return {
       q: `What is "hello".upper()?`,
       o: ["HELLO", "Error", "None", "False"],
       c: 0,
       e: "upper() converts string to uppercase.",
        de: 'The upper() method converts all characters in a string to uppercase. "hello".upper() returns "HELLO" by converting all lowercase letters to uppercase.'
      };
    },
   (_i: number) => {
    return {
      q: `What is "HELLO".lower()?`,
      o: ["hello", "Error", "None", "False"],
      c: 0,
      e: "lower() converts string to lowercase.",
        de: `The lower() method converts all characters in a string to lowercase (small letters). It returns a new string with all uppercase letters converted to lowercase, leaving non-alphabetic characters unchanged. This is one of Python's most commonly used string methods.

lower() method:
• "HELLO".lower() = "hello"
• Converts all uppercase to lowercase
• Non-alphabetic characters unchanged
• Returns new string (original unchanged)

How it works:
• Scans string character by character
• Converts 'A'-'Z' to 'a'-'z'
• Leaves 'a'-'z', numbers, symbols unchanged
• Creates new string (strings are immutable)

Examples:
• "HELLO".lower() = "hello"
• "HELLO123".lower() = "hello123"
• "Hello World!".lower() = "hello world!"
• "Python".lower() = "python"

Common uses:
• Case-insensitive comparison: "Hello".lower() == "HELLO".lower()
• Normalizing user input: input().lower()
• Converting to lowercase for storage
• Matching/searching regardless of case

Best practice:
• Use for case-insensitive comparisons
• Normalize input before processing
• Store lowercase for consistency
• Remember: creates new string

Example: "HELLO".lower() returns "hello". All uppercase letters are converted to lowercase, while numbers and symbols remain unchanged.`
    };
    },
    (_i: number) => {
     return {
       q: `What is "hello".capitalize()?`,
       o: ["Hello", "Error", "None", "False"],
       c: 0,
       e: "capitalize() makes first letter uppercase.",
       de: `The capitalize() method capitalizes the first character of a string and makes the rest lowercase. It returns a new string where only the first letter is uppercase and all other letters are lowercase. This is useful for formatting names, titles, or sentence beginnings.

capitalize() method:
• "hello".capitalize() = "Hello"
• First character → uppercase
• All other characters → lowercase
• Returns new string

How it works:
• Converts first character to uppercase
• Converts all other characters to lowercase
• Works on first character only
• Creates new string

Examples:
• "hello".capitalize() = "Hello"
• "HELLO".capitalize() = "Hello"
• "hELLO".capitalize() = "Hello"
• "hello world".capitalize() = "Hello world" (note: only first letter)

Important note:
• Only capitalizes first character
• "hello world".capitalize() = "Hello world" (not "Hello World")
• For each word, use .title() instead

Common uses:
• Formatting names: "john".capitalize() = "John"
• Sentence beginnings: "hello".capitalize() = "Hello"
• Single-word titles
• User input formatting

Best practice:
• Use for single words or sentence starts
• Use .title() for multi-word titles
• Remember: only affects first character

Example: "hello".capitalize() returns "Hello". The first letter becomes uppercase, and all other letters become lowercase.`
      };
    },
   (_i: number) => {
    return {
      q: `What is "hello world".title()?`,
      o: ["Hello World", "Error", "None", "False"],
      c: 0,
      e: "title() capitalizes each word.",
      de: `The title() method capitalizes the first letter of each word in a string and makes the rest lowercase. It returns a new string in "title case" where each word starts with an uppercase letter. This is useful for formatting titles, headings, or names.

title() method:
• "hello world".title() = "Hello World"
• First letter of each word → uppercase
• Rest of each word → lowercase
• Returns new string

How it works:
• Splits string by whitespace
• Capitalizes first letter of each word
• Makes rest of each word lowercase
• Joins words back together

Examples:
• "hello world".title() = "Hello World"
• "HELLO WORLD".title() = "Hello World"
• "hELLO wORLD".title() = "Hello World"
• "hello-world".title() = "Hello-World" (hyphen separates words)

Word boundaries:
• Words are separated by whitespace
• "hello-world".title() = "Hello-World" (hyphen treated as separator)
• "hello_world".title() = "Hello_World" (underscore treated as separator)

Common uses:
• Formatting titles: "python tutorial".title() = "Python Tutorial"
• Headings in documents
• Names and titles: "john smith".title() = "John Smith"
• Display formatting

Best practice:
• Use for multi-word titles
• Use .capitalize() for single words or sentences
• Be aware of word boundaries

Example: "hello world".title() returns "Hello World". The first letter of each word is capitalized, creating title case formatting.`
     };
   },
   (_i: number) => {
    return {
      q: `What is "Hello".swapcase()?`,
      o: ["hELLO", "Error", "None", "False"],
      c: 0,
      e: "swapcase() swaps case of all characters.",
      de: `The swapcase() method swaps the case of all alphabetic characters in a string. Uppercase letters become lowercase, and lowercase letters become uppercase. Non-alphabetic characters remain unchanged. It returns a new string with swapped cases.

swapcase() method:
• "Hello".swapcase() = "hELLO"
• Uppercase → lowercase
• Lowercase → uppercase
• Non-alphabetic unchanged
• Returns new string

How it works:
• Scans string character by character
• 'A'-'Z' → 'a'-'z' (uppercase to lowercase)
• 'a'-'z' → 'A'-'Z' (lowercase to uppercase)
• Numbers, symbols unchanged
• Creates new string

Examples:
• "Hello".swapcase() = "hELLO"
• "HELLO".swapcase() = "hello"
• "hello".swapcase() = "HELLO"
• "HeLLo123!".swapcase() = "hEllO123!" (numbers and symbols unchanged)

Common uses:
• Toggling case: convert uppercase to lowercase and vice versa
• Text transformations
• Formatting variations
• Special display effects

Best practice:
• Less commonly used than .upper() or .lower()
• Useful for toggling case
• Remember: creates new string

Example: "Hello".swapcase() returns "hELLO". Each letter's case is swapped.`
     };
   },
   (_i: number) => {
    return {
      q: `What is "HELLO".islower()?`,
      o: ["True", "False", "Error", "None"],
      c: 1,
      e: "islower() checks if all characters are lowercase.",
      de: `The islower() method returns True if all alphabetic characters in the string are lowercase and there is at least one alphabetic character. It returns False otherwise. Non-alphabetic characters are ignored in the check.

islower() method:
• "HELLO".islower() = False (has uppercase characters)
• Returns boolean (True/False)
• Ignores non-alphabetic characters
• Requires at least one alphabetic character

How it works:
• Checks if all 'a'-'z' characters exist (lowercase)
• Ignores numbers, symbols, spaces
• Returns False if no alphabetic characters
• Returns False if any 'A'-'Z' exists

Examples:
• "HELLO".islower() = False (has uppercase)
• "hello".islower() = True (all lowercase)
• "hello123".islower() = True (numbers ignored)
• "123".islower() = False (no alphabetic characters)
• "".islower() = False (empty string)

Edge cases:
• "hello WORLD".islower() = False (has uppercase)
• "123".islower() = False (no letters)
• "hello!".islower() = True (symbols ignored)

Common uses:
• Validation: check if string is all lowercase
• Input validation
• Format checking
• Data validation

Best practice:
• Use for validation checks
• Combine with .lower() for normalization
• Remember: requires at least one letter

Example: "HELLO".islower() returns False because the string contains uppercase characters.`
     };
   },
   (_i: number) => {
    return {
      q: `What is "hello".isupper()?`,
      o: ["True", "False", "Error", "None"],
      c: 1,
      e: "isupper() checks if all characters are uppercase.",
      de: 'The isupper() method returns True if all alphabetic characters in the string are uppercase and there is at least one alphabetic character. It returns False otherwise. Non-alphabetic characters are ignored in the check.\n\nisupper() method:\n• "hello".isupper() = False (has lowercase characters)\n• Returns boolean (True/False)\n• Ignores non-alphabetic characters\n• Requires at least one alphabetic character\n\nHow it works:\n• Checks if all \'A\'-\'Z\' characters exist (uppercase)\n• Ignores numbers, symbols, spaces\n• Returns False if no alphabetic characters\n• Returns False if any \'a\'-\'z\' exists\n\nExamples:\n• "hello".isupper() = False (has lowercase)\n• "HELLO".isupper() = True (all uppercase)\n• "HELLO123".isupper() = True (numbers ignored)\n• "123".isupper() = False (no alphabetic characters)\n• "".isupper() = False (empty string)\n\nEdge cases:\n• "HELLO world".isupper() = False (has lowercase)\n• "123".isupper() = False (no letters)\n• "HELLO!".isupper() = True (symbols ignored)\n\nCommon uses:\n• Validation: check if string is all uppercase\n• Input validation\n• Format checking (e.g., acronyms)\n• Data validation\n\nBest practice:\n• Use for validation checks\n• Combine with .upper() for normalization\n• Remember: requires at least one letter\n\nExample: "hello".isupper() returns False because the string contains lowercase characters.'
     };
   },
   (_i: number) => {
    return {
      q: `What is "hello".istitle()?`,
      o: ["True", "False", "Error", "None"],
      c: 1,
      e: "istitle() checks if string is titlecased.",
      de: 'The istitle() method returns True if the string is in title case (each word starts with an uppercase letter and the rest are lowercase). It returns False otherwise. A string is titlecased if uppercase characters may only follow uncased characters and lowercase characters may only follow cased characters.\n\nistitle() method:\n• "hello".istitle() = False (not title case - all lowercase)\n• Returns boolean (True/False)\n• Checks if each word starts with uppercase\n• Rest of each word must be lowercase\n\nHow it works:\n• Checks if first letter of each word is uppercase\n• Checks if rest of each word is lowercase\n• Word boundaries are whitespace or non-alphabetic\n• Returns False if any word doesn\'t match\n\nExamples:\n• "hello".istitle() = False (all lowercase)\n• "Hello world".istitle() = False ("world" not capitalized)\n• "HELLO WORLD".istitle() = False (all uppercase)\n• "Hello-World".istitle() = True\n• "123 Hello".istitle() = True\n\nEdge cases:\n• "".istitle() = False (empty string)\n• "Hello123".istitle() = True\n• "Hello WORLD".istitle() = False\n\nCommon uses:\n• Validation: check if string is properly titlecased\n• Format validation\n• Title checking\n• Data validation\n\nBest practice:\n• Use for title format validation\n• Combine with .title() for formatting\n• Understand word boundaries\n\nExample: "hello".istitle() returns False because the string is not in title case (all lowercase).'
     };
   },
   (_i: number) => {
    return {
      q: `What is "HELLO".casefold()?`,
      o: ["hello", "Error", "None", "False"],
      c: 0,
      e: "casefold() returns casefolded string for caseless matching.",
      de: 'The casefold() method returns a casefolded copy of the string. Casefolding is similar to lowercasing but more aggressive - it\'s designed for caseless matching. It converts all characters to lowercase and handles special Unicode characters correctly.\n\ncasefold() method:\n• "HELLO".casefold() = "hello"\n• More aggressive than .lower()\n• Handles Unicode special cases\n• Returns new string for caseless matching\n\nHow it works:\n• Similar to .lower() but more aggressive\n• Handles special Unicode characters\n• Converts to lowercase for comparison\n• Better for internationalization\n\nExamples:\n• "HELLO".casefold() = "hello"\n• "HELLO WORLD".casefold() = "hello world"\n• "ß".casefold() = "ss" (special Unicode handling)\n• "Hello".casefold() = "hello"\n\nDifference from .lower():\n• Most cases: same as .lower()\n• Unicode: handles special characters better\n• German ß → ss (casefold), ß (lower)\n• Better for caseless matching\n\nCommon uses:\n• Caseless string comparison\n• Internationalization (i18n)\n• Unicode-aware matching\n• Better than .lower() for some languages\n\nBest practice:\n• Use for caseless matching (recommended)\n• Better than .lower() for Unicode\n• Use .lower() for display formatting\n• Prefer over .lower() for comparisons\n\nExample: "HELLO".casefold() returns "hello". For most English strings, it\'s similar to .lower(), but it handles Unicode special characters better for international caseless matching.'
     };
   },
   (_i: number) => {
    return {
      q: `What is "café".isascii()?`,
      o: ["True", "False", "Error", "None"],
      c: 1,
      e: "isascii() checks if all characters are ASCII.",
      de: 'The isascii() method returns True if all characters in the string are ASCII characters. ASCII characters have codes in the range 0-127. This is useful for checking if a string contains only standard ASCII characters without Unicode or extended characters.\n\nisascii() method:\n• "café".isascii() = False (contains é which is non-ASCII)\n• Returns boolean (True/False)\n• Checks if all characters are ASCII (0-127)\n• ASCII = American Standard Code for Information Interchange\n\nASCII range:\n• Characters with codes 0-127\n• Includes letters (a-z, A-Z), digits (0-9)\n• Includes punctuation, spaces, control characters\n• No extended Unicode characters\n\nExamples:\n• "café".isascii() = False (é is non-ASCII)\n• "Hello123!".isascii() = True\n• "Hello 世界".isascii() = False (contains Chinese)\n• "Hello café".isascii() = False (contains é)\n• "".isascii() = True (empty string is ASCII)\n\nCommon ASCII characters:\n• Letters: a-z, A-Z\n• Digits: 0-9\n• Punctuation: !@#$%^&*()\n• Spaces, tabs, newlines\n• Control characters\n\nNon-ASCII characters:\n• Unicode characters: é, ñ, ü, 世界\n• Extended Latin: à, è, ì, ò, ù\n• Emojis: 😀, ❤️\n• Non-Latin scripts: 中文, العربية\n\nCommon uses:\n• Validation: ensure ASCII-only strings\n• Compatibility checking\n• Legacy system integration\n• Network protocols (some require ASCII)\n\nBest practice:\n• Use when you need ASCII-only strings\n• Check before encoding/transmission\n• Be aware of Unicode support\n\nExample: "café".isascii() returns False because the character é is not in the ASCII range (0-127).'
     };
     },

    // 81-90: String Methods - Search and Replace
  (_i: number) => ({ 
    q: `What is "hello".find("l")?`, 
    o: ["2", "1", "3", "Error"], 
    c: 0, 
    e: "find() returns first index of substring.",
    de: `The find() method returns the lowest index in the string where the substring is found. If the substring is not found, it returns -1. find() searches from left to right and returns the index of the first occurrence.

find() method:
• "hello".find("l") = 2 (first 'l' at index 2)
• Returns index (0-based) if found
• Returns -1 if not found
• Searches from left to right

How it works:
• Searches for substring in string
• Returns index where substring starts
• Returns -1 if not found
• No exception raised if not found

Examples:
• "hello".find("l") = 2 (first 'l')
• "hello".find("x") = -1 (not found)
• "hello".find("ll") = 2 (substring "ll")
• "hello".find("o") = 4

Index positions:
• "hello" = h(0), e(1), l(2), l(3), o(4)
• "l" found at index 2 and 3
• find() returns 2 (first occurrence)

Common uses:
• Finding substring position: idx = text.find("pattern")
• Checking existence: if text.find("x") != -1:
• Extracting after position
• String parsing

Alternative: .index()
• Similar but raises ValueError if not found
• find() returns -1, index() raises error
• Use find() for existence checking

Example: "hello".find("l") returns 2 because 'l' first appears at index 2 in the string "hello" (h=0, e=1, l=2).
`
  }),
  (_i: number) => ({ 
    q: `What is "hello".rfind("l")?`, 
    o: ["3", "2", "1", "Error"], 
    c: 0, 
    e: "rfind() returns last index of substring.",
    de: `The rfind() method returns the highest index in the string where the substring is found. If the substring is not found, it returns -1. rfind() searches from right to left (reverse find) and returns the index of the last occurrence.

rfind() method:
• "hello".rfind("l") = 3 (last 'l' at index 3)
• Returns index (0-based) if found
• Returns -1 if not found
• Searches from right to left

How it works:
• Searches for substring starting from end
• Returns index where substring starts
• Returns -1 if not found
• Finds last occurrence

Examples:
• "hello".rfind("l") = 3 (last 'l')
• "hello".rfind("x") = -1 (not found)
• "hello".rfind("ll") = 2 (substring "ll")
• "hello".rfind("o") = 4

Index positions:
• "hello" = h(0), e(1), l(2), l(3), o(4)
• "l" found at index 2 and 3
• rfind() returns 3 (last occurrence)

Common uses:
• Finding last occurrence: idx = text.rfind("pattern")
• Parsing from end: find last separator
• Extracting filename from path
• Reverse string operations

Comparison with .find():
• find(): searches left to right, returns first
• rfind(): searches right to left, returns last
• Both return -1 if not found

Example: "hello".rfind("l") returns 3 because 'l' last appears at index 3 in the string "hello" (rfind searches from right to left).
`
  }),
  (_i: number) => ({ 
    q: `What is "hello".index("l")?`, 
    o: ["2", "1", "3", "Error"], 
    c: 0, 
    e: "index() returns first index, raises error if not found.",
    de: `The index() method returns the lowest index in the string where the substring is found. If the substring is not found, it raises a ValueError exception. index() is similar to find() but raises an error instead of returning -1.

index() method:
• "hello".index("l") = 2 (first 'l' at index 2)
• Returns index (0-based) if found
• Raises ValueError if not found
• Searches from left to right

How it works:
• Searches for substring in string
• Returns index where substring starts
• Raises ValueError if not found
• Exception must be handled

Examples:
• "hello".index("l") = 2 (first 'l')
• "hello".index("x") = ValueError (not found)
• "hello".index("ll") = 2 (substring "ll")
• "hello".index("o") = 4

Comparison with .find():
• find(): returns -1 if not found (no exception)
• index(): raises ValueError if not found
• Both return same index if found
• find() is safer for existence checking

When to use:
• Use find() if you want -1 for not found
• Use index() if you expect substring exists
• Use find() for existence checking
• Use index() for required substring

Example: "hello".index("l") returns 2 because 'l' first appears at index 2. If "l" wasn't found, it would raise ValueError.
`
  }),
  (_i: number) => ({ 
    q: `What is "hello".count("l")?`, 
    o: ["2", "1", "3", "Error"], 
    c: 0, 
    e: "count() counts occurrences of substring.",
    de: `The count() method returns the number of non-overlapping occurrences of a substring in the string. It counts how many times the substring appears in the string. It's useful for frequency analysis and validation.

count() method:
• "hello".count("l") = 2 (appears twice)
• Returns integer count
• Returns 0 if not found
• Counts non-overlapping occurrences

How it works:
• Searches for substring in string
• Counts all occurrences
• Non-overlapping: "aaa".count("aa") = 1, not 2
• Returns 0 if substring not found

Examples:
• "hello".count("l") = 2
• "hello".count("x") = 0 (not found)
• "hello".count("ll") = 1 (substring)
• "hello".count("") = 6 (empty string counts positions)

Overlapping behavior:
• "aaa".count("aa") = 1 (non-overlapping)
• Counts don't overlap
• "aaaa".count("aa") = 2

Common uses:
• Frequency analysis: text.count("the")
• Validation: if password.count("!") >= 2:
• Character counting
• Pattern frequency

Important:
• Non-overlapping matches only
• Empty string counts all positions + 1
• Case-sensitive counting
• Works with multi-character substrings

Example: "hello".count("l") returns 2 because the character 'l' appears twice in "hello" (at indices 2 and 3).
`
  }),
  (_i: number) => ({ 
    q: `What is "hello".startswith("he")?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "startswith() checks if string begins with substring.",
    de: `The startswith() method returns True if the string starts with the specified substring, False otherwise. It's useful for checking prefixes, file extensions, URLs, and validating string formats.

startswith() method:
• "hello".startswith("he") = True
• Returns boolean (True/False)
• Checks if string begins with substring
• Case-sensitive check

How it works:
• Checks if string starts with substring
• Compares from beginning
• Returns True if matches, False otherwise
• Case-sensitive

Examples:
• "hello".startswith("he") = True
• "hello".startswith("x") = False
• "hello".startswith("Hello") = False (case-sensitive)
• "hello".startswith("") = True (empty string always matches)

Common uses:
• File extensions: filename.startswith("http")
• URL checking: url.startswith("https://")
• Prefix validation
• Format checking

With tuple:
• Can check multiple prefixes
• text.startswith(("http", "https"))
• Returns True if starts with any

Best practice:
• Use for prefix checking
• More readable than slicing: text[:len(prefix)] == prefix
• Efficient for string validation

Example: "hello".startswith("he") returns True because "hello" begins with "he". This is useful for checking prefixes.
`
  }),
  (_i: number) => ({ 
    q: `What is "hello".endswith("lo")?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "endswith() checks if string ends with substring.",
    de: `The endswith() method returns True if the string ends with the specified substring, False otherwise. It's useful for checking suffixes, file extensions, endings, and validating string formats.

endswith() method:
• "hello".endswith("lo") = True
• Returns boolean (True/False)
• Checks if string ends with substring
• Case-sensitive check

How it works:
• Checks if string ends with substring
• Compares from end
• Returns True if matches, False otherwise
• Case-sensitive

Examples:
• "hello".endswith("lo") = True
• "hello".endswith("x") = False
• "hello".endswith("LO") = False (case-sensitive)
• "hello".endswith("") = True (empty string always matches)

Common uses:
• File extensions: filename.endswith(".txt")
• URL endings: url.endswith("/")
• Suffix validation
• Format checking

With tuple:
• Can check multiple suffixes
• filename.endswith((".jpg", ".png"))
• Returns True if ends with any

Best practice:
• Use for suffix checking
• More readable than slicing: text[-len(suffix):] == suffix
• Efficient for file extension checks

Example: "hello".endswith("lo") returns True because "hello" ends with "lo". This is useful for checking file extensions like .endswith(".py").
`
  }),
  (_i: number) => ({ 
    q: `What is "hello".replace("l", "L")?`, 
    o: ["heLLo", "hello", "HELLO", "Error"], 
    c: 0, 
    e: "replace() substitutes characters.",
    de: `The replace() method returns a copy of the string with all occurrences of a substring replaced by another substring. By default, it replaces all occurrences. It's one of Python's most commonly used string methods for text manipulation.

replace() method:
• "hello".replace("l", "L") = "heLLo"
• Replaces all occurrences by default
• Returns new string (original unchanged)
• Basic syntax: replace(old, new)

How it works:
• Finds all occurrences of old substring
• Replaces each with new substring
• Returns new string
• Original string unchanged (strings are immutable)

Examples:
• "hello".replace("l", "L") = "heLLo" (all 'l' replaced)
• "hello".replace("x", "X") = "hello" (no change if not found)
• "hello".replace("", "X") = "XhXeXlXlXoX" (empty string everywhere)
• "hello world".replace(" ", "_") = "hello_world"

Common uses:
• Text substitution: text.replace("old", "new")
• Character removal: text.replace(" ", "")
• Format conversion
• Data cleaning

With count parameter:
• Can limit replacements: replace(old, new, count)
• "hello".replace("l", "L", 1) = "heLlo" (only first)
• Useful for limited replacements

Example: "hello".replace("l", "L") returns "heLLo" because all occurrences of 'l' are replaced with 'L'. The original string "hello" is unchanged.
`
  }),
  (_i: number) => ({ 
    q: `What is "hello".replace("l", "L", 1)?`, 
    o: ["heLlo", "heLLo", "hello", "Error"], 
    c: 0, 
    e: "replace() with count parameter replaces only first occurrence.",
    de: `The replace() method can take a third parameter (count) that limits how many occurrences are replaced. replace(old, new, count) replaces only the first 'count' occurrences, from left to right. This allows controlled, limited replacements.

replace() with count:
• "hello".replace("l", "L", 1) = "heLlo"
• Third parameter limits replacements
• Replaces only first occurrence(s)
• Remaining occurrences unchanged

How it works:
• Finds occurrences from left to right
• Replaces first 'count' occurrences
• Leaves remaining unchanged
• If count > occurrences, all are replaced

Examples:
• "hello".replace("l", "L", 1) = "heLlo" (first 'l' replaced)
• "hello".replace("l", "L", 2) = "heLLo" (both replaced)
• "hello".replace("l", "L", 0) = "hello" (no replacements)
• "hello".replace("l", "L", 10) = "heLLo" (all replaced)

Common uses:
• Replace first occurrence only
• Limited text substitution
• Controlled replacements
• Fixing specific instances

Why use count:
• Sometimes you want limited replacements
• Replace only first occurrence
• Avoid replacing all instances
• More control over substitution

Example: "hello".replace("l", "L", 1) returns "heLlo" because only the first occurrence of 'l' (at index 2) is replaced with 'L', leaving the second 'l' (at index 3) unchanged.
`
  }),
  (_i: number) => ({ 
    q: `What is "hello".partition("l")?`, 
    o: ["('he', 'l', 'lo')", "['he', 'l', 'lo']", "Error", "None"], 
    c: 0, 
    e: "partition() splits at first occurrence.",
    de: `The partition() method splits the string at the first occurrence of the separator and returns a tuple of three parts: the part before the separator, the separator itself, and the part after the separator. If the separator is not found, it returns (string, "", "").

partition() method:
• "hello".partition("l") = ('he', 'l', 'lo')
• Returns tuple of 3 parts
• Split at first occurrence only
• Includes separator in result

How it works:
• Finds first occurrence of separator
• Splits into: (before, separator, after)
• Returns tuple with 3 elements
• If not found: (string, "", "")

Examples:
• "hello".partition("l") = ('he', 'l', 'lo')
• "hello".partition("x") = ('hello', '', '') (not found)
• "hello".partition("") = ('', '', 'hello') (empty separator at start)
• "a-b-c".partition("-") = ('a', '-', 'b-c') (first occurrence only)

Tuple unpacking:
• before, sep, after = "hello".partition("l")
• before = 'he', sep = 'l', after = 'lo'
• Useful for parsing

Common uses:
• Splitting at first separator: before, sep, after = text.partition(":")
• Key-value parsing: key, _, value = line.partition("=")
• Path parsing
• Config file parsing

Comparison with .split():
• partition(): splits at first occurrence, returns 3 parts
• split(): splits at all occurrences, returns list
• partition() includes separator, split() excludes it

Example: "hello".partition("l") returns ('he', 'l', 'lo') - the part before 'l', 'l' itself, and the part after 'l'. This is useful for splitting at the first occurrence while keeping the separator.
`
  }),
  (_i: number) => ({ 
    q: `What is "hello".rpartition("l")?`, 
    o: ["('hel', 'l', 'o')", "['hel', 'l', 'o']", "Error", "None"], 
    c: 0, 
    e: "rpartition() splits at last occurrence.",
    de: `The rpartition() method splits the string at the last occurrence of the separator and returns a tuple of three parts: the part before the separator, the separator itself, and the part after the separator. If the separator is not found, it returns ("", "", string).

rpartition() method:
• "hello".rpartition("l") = ('hel', 'l', 'o')
• Returns tuple of 3 parts
• Split at last occurrence only
• Includes separator in result

How it works:
• Finds last occurrence of separator
• Splits into: (before, separator, after)
• Returns tuple with 3 elements
• If not found: ('', '', string)

Examples:
• "hello".rpartition("l") = ('hel', 'l', 'o') (last 'l')
• "hello".rpartition("x") = ('', '', 'hello') (not found)
• "a-b-c".rpartition("-") = ('a-b', '-', 'c') (last occurrence only)

Comparison with .partition():
• partition(): splits at first occurrence
• rpartition(): splits at last occurrence
• Both return 3-part tuple
• Both include separator

Common uses:
• Splitting at last separator
• Filename extension: name, _, ext = filename.rpartition(".")
• URL parsing
• Path parsing from end

Tuple unpacking:
• before, sep, after = "hello".rpartition("l")
• before = 'hel', sep = 'l', after = 'o'
• Useful for parsing from end

Example: "hello".rpartition("l") returns ('hel', 'l', 'o') - it splits at the last occurrence of 'l', returning the part before, 'l' itself, and the part after. Useful for splitting at the last separator.
`
  }),
  
  // 91-100: String Methods - Splitting, Joining, Formatting
  (_i: number) => ({ 
    q: `What is "hello,world".split(",")?`, 
    o: ["['hello', 'world']", "['hello,world']", "Error", "None"], 
    c: 0, 
    e: "split() divides string into list.",
    de: `The split() method splits a string into a list of substrings using a specified separator. If a separator is provided, it splits at each occurrence. If no separator is provided, it splits on whitespace. This is one of Python's most commonly used string methods.

split() method:
• "hello,world".split(",") = ['hello', 'world']
• Divides string into list
• Splits at each occurrence of separator
• Returns list of substrings

How it works:
• Finds all occurrences of separator
• Splits string at each occurrence
• Returns list of parts (separator excluded)
• Empty separator causes error

Examples:
• "hello,world".split(",") = ['hello', 'world']
• "a,b,c".split(",") = ['a', 'b', 'c']
• "hello".split(",") = ['hello'] (no separator found)
• "a,,b".split(",") = ['a', '', 'b'] (empty between separators)

With count parameter:
• "a,b,c".split(",", 1) = ['a', 'b,c'] (split at most 1 time)
• Limits number of splits
• Returns maxsplit+1 elements

Common uses:
• CSV parsing: line.split(",")
• Tokenization
• String parsing
• Data extraction

Example: "hello,world".split(",") returns ['hello', 'world'] because the string is split at the comma, creating a list with two elements.
`
  }),
  (_i: number) => ({ 
    q: `What is "hello world".split()?`, 
    o: ["['hello', 'world']", "['hello world']", "Error", "None"], 
    c: 0, 
    e: "split() without argument splits on whitespace.",
    de: `The split() method without arguments splits a string on any whitespace (spaces, tabs, newlines) and removes empty strings from the result. It's useful for splitting text into words. Multiple consecutive whitespace characters are treated as a single separator.

split() without separator:
• "hello world".split() = ['hello', 'world']
• Splits on any whitespace
• Removes empty strings from result
• Multiple whitespace → single split

How it works:
• Splits on any whitespace character
• Spaces, tabs, newlines all work
• Multiple whitespace → treated as single separator
• Strips leading/trailing whitespace

Examples:
• "hello world".split() = ['hello', 'world']
• "hello  world".split() = ['hello', 'world'] (multiple spaces)
• "hello\\tworld".split() = ['hello', 'world'] (tab)
• "  hello world  ".split() = ['hello', 'world'] (strips whitespace)

Difference from split(" "):
• split(): splits on any whitespace, removes empty strings
• split(" "): splits on single space only, keeps empty strings
• "a  b".split() = ['a', 'b']
• "a  b".split(" ") = ['a', '', 'b']

Common uses:
• Tokenizing words: text.split()
• Parsing space-separated values
• Breaking text into words
• Clean splitting (removes empty strings)

Example: "hello world".split() returns ['hello', 'world'] because the string is split on whitespace, creating a list of words.
`
  }),
  (_i: number) => ({ 
    q: `What is "hello\\nworld".splitlines()?`, 
    o: ["['hello', 'world']", "['hello\\nworld']", "Error", "None"], 
    c: 0, 
    e: "splitlines() splits on line breaks.",
    de: `The splitlines() method splits a string into a list at line boundaries. It recognizes various line break characters (\\n, \\r, \\r\\n) and splits accordingly. Unlike split("\\n"), it handles different line ending formats correctly.

splitlines() method:
• "hello\\nworld".splitlines() = ['hello', 'world']
• Splits on line breaks
• Handles different line ending formats
• Returns list of lines

How it works:
• Splits at line boundaries
• Recognizes \\n, \\r, \\r\\n
• Removes line break characters
• Returns list of lines

Examples:
• "hello\\nworld".splitlines() = ['hello', 'world']
• "hello\\r\\nworld".splitlines() = ['hello', 'world'] (Windows)
• "hello\\rworld".splitlines() = ['hello', 'world'] (old Mac)
• "hello\\n\\nworld".splitlines() = ['hello', '', 'world'] (empty line)

Common uses:
• Processing text files line by line
• Splitting multi-line strings
• Text processing
• Reading file content

Comparison with split("\\n"):
• splitlines(): handles all line break formats
• split("\\n"): only handles \\n
• splitlines(): better for cross-platform
• splitlines(): removes trailing \\n correctly

Example: "hello\\nworld".splitlines() returns ['hello', 'world'] because the string is split at the newline character, creating a list of two lines.
`
  }),
  (_i: number) => ({ 
    q: `What is "-".join(["a", "b", "c"])?`, 
    o: ["a-b-c", "a b c", "abc", "Error"], 
    c: 0, 
    e: "join() combines list elements with separator.",
    de: `The join() method combines a list (or any iterable) of strings into a single string, using the string on which join() is called as the separator. It's the opposite of split() and is more efficient than string concatenation for joining multiple strings.

join() method:
• "-".join(["a", "b", "c"]) = "a-b-c"
• Combines list elements with separator
• More efficient than concatenation
• Returns new string

How it works:
• Takes iterable of strings
• Joins them with separator between
• Returns combined string
• Empty iterable returns empty string

Examples:
• "-".join(["a", "b", "c"]) = "a-b-c"
• "".join(["a", "b", "c"]) = "abc" (no separator)
• " ".join(["hello", "world"]) = "hello world"
• ",".join(["1", "2", "3"]) = "1,2,3"

Important:
• Elements must be strings
• "".join([1, 2, 3]) raises TypeError
• Convert first: "".join(map(str, [1, 2, 3]))

Common uses:
• Building CSV: ",".join(values)
• Concatenating strings: "".join(strings)
• Formatting: " - ".join(items)
• Creating paths: "/".join(parts)

Best practice:
• Use join() instead of += in loops
• More efficient for multiple strings
• Preferred Pythonic way

Example: "-".join(["a", "b", "c"]) returns "a-b-c" because the list elements are joined with '-' as the separator between them.
`
  }),
  (_i: number) => ({ 
    q: `What is "".join(["a", "b", "c"])?`, 
    o: ["abc", "a b c", "Error", "None"], 
    c: 0, 
    e: "join() with empty string concatenates without separator.",
    de: `When join() is called with an empty string as the separator, it concatenates all elements together with no separator between them. This is the most efficient way to concatenate multiple strings in Python.

join() with empty string:
• "".join(["a", "b", "c"]) = "abc"
• Concatenates without separator
• Most efficient string concatenation
• Returns combined string

How it works:
• Takes iterable of strings
• Joins them with no separator (empty string)
• Returns concatenated string
• Fastest way to combine strings

Examples:
• "".join(["a", "b", "c"]) = "abc"
• "".join(["hello", "world"]) = "helloworld"
• "".join(["1", "2", "3"]) = "123"
• "".join(["a"]) = "a" (single element)

Why use this:
• Most efficient concatenation method
• Better than string += in loops
• Preferred Pythonic way
• Handles any number of strings

Common uses:
• Concatenating strings: "".join(strings)
• Building strings from characters
• Efficient string building
• Reversing string: "".join(reversed(s))

Comparison with +=:
• "".join(list): efficient, single operation
• result += item: inefficient, creates new strings each time
• join() is O(n), += in loop is O(n²)

Example: "".join(["a", "b", "c"]) returns "abc" because the list elements are concatenated together with no separator between them. This is the most efficient way to combine multiple strings.
`
  }),
  (_i: number) => ({ 
    q: `What is "hello".center(10)?`, 
    o: ["  hello   ", "'hello' (no padding)", "Error", "None"], 
    c: 0, 
    e: "center() centers string in given width.",
    de: `The center() method centers a string in a field of specified width by padding it with spaces on both sides. If the string is longer than the width, it returns the original string unchanged. This is useful for formatting text output.

center() method:
• "hello".center(10) = "  hello   "
• Centers string in width
• Pads with spaces on both sides
• Returns new string

How it works:
• Calculates padding needed
• Adds spaces on both sides
• Centers string in field
• If width <= len(string), returns original

Examples:
• "hello".center(10) = "  hello   " (2 spaces each side)
• "hello".center(11) = "   hello   " (3 left, 2 right)
• "hello".center(5) = "hello" (no change, already fits)
• "hello".center(10, "-") = "--hello---" (custom fill character)

With fill character:
• Second parameter specifies fill character
• Default is space " "
• "hello".center(10, "*") = "**hello***"

Common uses:
• Text formatting
• Centering headers
• Display formatting
• Creating formatted output

Example: "hello".center(10) returns "  hello   " because the string is centered in a field of width 10, with 2 spaces on the left and 3 spaces on the right (when length is odd, extra space goes on right).
`
  }),
  (_i: number) => ({ 
    q: `What is "hello".ljust(10)?`, 
    o: ["hello     ", "'hello' (no padding)", "Error", "None"], 
    c: 0, 
    e: "ljust() left-justifies string.",
    de: `The ljust() method left-justifies a string in a field of specified width by padding it with spaces on the right side. If the string is longer than the width, it returns the original string unchanged. This is useful for aligning text to the left.

ljust() method:
• "hello".ljust(10) = "hello     "
• Left-justifies string in width
• Pads with spaces on right
• Returns new string

How it works:
• Adds spaces on right side
• Aligns string to left
• Creates field of specified width
• If width <= len(string), returns original

Examples:
• "hello".ljust(10) = "hello     " (5 spaces on right)
• "hello".ljust(10, "-") = "hello-----" (custom fill character)
• "hello".ljust(5) = "hello" (no change)

With fill character:
• Second parameter specifies fill character
• Default is space " "
• "hello".ljust(10, ".") = "hello....."

Common uses:
• Left-aligning text
• Creating fixed-width columns
• Formatting output
• Table formatting

Example: "hello".ljust(10) returns "hello     " because the string is left-justified in a field of width 10, with 5 spaces added on the right side.
`
  }),
  (_i: number) => ({ 
    q: `What is "hello".rjust(10)?`, 
    o: ["     hello", "'hello' (no padding)", "Error", "None"], 
    c: 0, 
    e: "rjust() right-justifies string.",
    de: `The rjust() method right-justifies a string in a field of specified width by padding it with spaces on the left side. If the string is longer than the width, it returns the original string unchanged. This is useful for aligning text to the right, especially for numbers.

rjust() method:
• "hello".rjust(10) = "     hello"
• Right-justifies string in width
• Pads with spaces on left
• Returns new string

How it works:
• Adds spaces on left side
• Aligns string to right
• Creates field of specified width
• If width <= len(string), returns original

Examples:
• "hello".rjust(10) = "     hello" (5 spaces on left)
• "hello".rjust(10, "0") = "00000hello" (zero padding)
• "123".rjust(5, "0") = "00123" (number formatting)

With fill character:
• Second parameter specifies fill character
• Default is space " "
• Often used with "0" for zero padding

Common uses:
• Right-aligning numbers
• Zero padding: "5".rjust(3, "0") = "005"
• Creating aligned columns
• Number formatting

Example: "hello".rjust(10) returns "     hello" because the string is right-justified in a field of width 10, with 5 spaces added on the left side.
`
  }),
  (_i: number) => ({ 
    q: `What is "hello".zfill(10)?`, 
    o: ["00000hello", "'hello' (no padding)", "Error", "None"], 
    c: 0, 
    e: "zfill() pads string with zeros.",
    de: `The zfill() method pads a string on the left with zeros ('0') to make it a specified width. If the string starts with a sign ('+' or '-'), the zeros are inserted after the sign. It's particularly useful for formatting numbers with leading zeros.

zfill() method:
• "hello".zfill(10) = "00000hello"
• Pads with zeros on left
• Creates field of specified width
• Returns new string

How it works:
• Adds zeros on left side
• Pads to specified width
• If string starts with +/-, zeros go after sign
• If width <= len(string), returns original

Examples:
• "hello".zfill(10) = "00000hello" (5 zeros)
• "42".zfill(5) = "00042" (3 zeros)
• "+42".zfill(5) = "+0042" (zeros after +)
• "-42".zfill(5) = "-0042" (zeros after -)

Common uses:
• Formatting numbers: "5".zfill(3) = "005"
• Creating fixed-width numbers
• Zero padding for IDs
• Display formatting

Comparison with rjust(..., "0"):
• zfill(): handles signs correctly
• rjust(..., "0"): treats sign as part of string
• zfill() is designed for numbers
• Both similar for positive numbers

Example: "hello".zfill(10) returns "00000hello" because the string is padded on the left with zeros to make it width 10. This is useful for formatting numbers with leading zeros.
`
  }),
  (_i: number) => ({ 
    q: `What is f"Value: {5}"?`, 
    o: ['"Value: 5"', "Value: 5", "Error", "None"], 
    c: 0, 
    e: "f-strings allow variable interpolation.",
    de: `f-strings (formatted string literals) are a Python feature introduced in Python 3.6 that allow you to embed expressions inside string literals using curly braces {}. The 'f' prefix (or 'F') tells Python to evaluate the expressions inside the braces and format the result.

f-string syntax:
• f"Value: {5}" = "Value: 5"
• Prefix string with 'f' or 'F'
• Expressions in {} are evaluated
• Values are converted to strings automatically

How it works:
• f-prefix enables f-string
• {expression} evaluates expression
• Result converted to string
• Embedded in final string

Examples:
• f"Value: {5}" = "Value: 5"
• name = "Alice"; f"Hello {name}" = "Hello Alice"
• x = 10; f"{x} + {5} = {x + 5}" = "10 + 5 = 15"
• f"{2 * 3}" = "6" (expressions work)

Advantages:
• Fastest string formatting method
• Most readable and concise
• Expressions evaluated at runtime
• No need to convert types manually

Common uses:
• Variable interpolation: f"Name: {name}"
• Expressions: f"Sum: {a + b}"
• Formatting: f"Price: $\\{price:.2f}" (use \\ to escape $ in f-strings)
• Debugging: f"x = {x}, y = {y}"

Formatting options:
• f"{value:.2f}" (decimal places)
• f"{value:>10}" (alignment)
• f"{value:0>5}" (zero padding)

Example: f"Value: {5}" returns "Value: 5" because the expression {5} is evaluated to 5, which is then converted to a string and embedded in the f-string. This is the modern Pythonic way to format strings.
`
  }),
];
