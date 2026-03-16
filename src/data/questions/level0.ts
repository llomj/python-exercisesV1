// --- LEVEL 0: EGG (Literals, values, first steps) - 300 basic questions ---
// Simplest tier: literals, type(), and very simple expressions.

const mk = (q: string, o: string[], c: number, e: string, de?: string) => (_i: number) => ({ q, o, c, e, de });

export const level0Patterns: ((i: number) => { q: string; o: string[]; c: number; e: string; de?: string })[] = [
  // 1-50: type() of literals
  mk("What is type(0)?", ["<class 'int'>", "<class 'float'>", "<class 'str'>", "None"], 0, "0 is an integer.", `Integers are whole numbers. type(0) returns <class 'int'>.

Beginner:
• Integers are whole numbers: 0, 1, -5, 42.
• type(0) returns <class 'int'> because 0 is an integer.

Intermediate:
• type() is a built-in that returns the type (class) of any value.
• In Python, whole numbers (positive, negative, or zero) have type int.
• Numbers with a decimal point (e.g. 3.0, 1.5) have type float.

Expert:
• type(x) returns the class object; for 0 that's int. type(0) == int is True.
• The display <class 'int'> is the string representation of the type object.

Key Concepts:
• Integers represent whole-number quantities (no fractional part).
• Every literal like 0, 1, -5 is an instance of the built-in int type.

Key Distinctions:
• int vs float: 0 is int, 0.0 is float even though 0 == 0.0.
• int vs str: "0" is text, 0 is a numeric value you can do math with.

How It Works:
• When Python reads the literal 0, it parses it as an integer object.
• type(0) asks the runtime for the underlying class of that object (int).

Step-by-Step Execution:
1. Python evaluates the literal 0 and creates (or reuses) an int object.
2. type(0) is called with that object as its argument.
3. type() returns the class int.
4. The REPL prints this as <class 'int'>.

Order of Operations:
• Literals are constructed first, then type() is applied to the result.
• There are no operators here, just a function call around a literal.

Common Use Cases:
• Quickly checking what kind of value you are working with in the REPL.
• Teaching beginners the difference between numbers and strings.

Edge Cases:
• Very large integers are still type int; Python automatically handles big values.
• bool is a subclass of int, but type(True) is bool, not int.

Performance Considerations:
• Calling type() on a literal like 0 is effectively free at beginner scale.
• Creating and inspecting small ints is heavily optimized by CPython.

Examples:
• type(0)          # <class 'int'>
• type(-10)        # <class 'int'>
• type(0.0)        # <class 'float'>
• type("0")        # <class 'str'>

Notes:
• Use isinstance(x, int) when you want to allow int subclasses like bool.
• Remember that <class 'int'> is just the string representation of the int type.`),
  mk("What is type(1)?", ["<class 'int'>", "<class 'float'>", "<class 'str'>", "None"], 0, "1 is an integer.", `type(1) returns <class 'int'>.

Beginner:
• 1 is a whole number, so its type is int.
• type(1) gives you <class 'int'>.

Intermediate:
• Any positive whole number without a decimal point is an int.
• type() tells you what kind of value you have so you can use it correctly.

Expert:
• int is a built-in type; type(1) is the same object as int. In arithmetic, True behaves like 1 (bool is a subclass of int).

Key Concepts:
• Integer literals like 1, 2, 3 are all instances of int.
• The type() function reveals the class behind any Python object.

Key Distinctions:
• 1 is an int, while 1.0 is a float and "1" is a string.
• Arithmetic with ints stays exact; floats can introduce rounding error.

How It Works:
• Python parses 1 as an integer object.
• type(1) returns the int class that defines integer behavior.

Step-by-Step Execution:
1. Evaluate the literal 1 → an int object.
2. Call type(1).
3. type() looks up the object's class and returns int.
4. The interactive shell prints <class 'int'> to represent that type.

Order of Operations:
• As with 0, there are no operators to sequence; the literal is created, then passed into type().

Common Use Cases:
• Verifying that numeric input has been parsed as an int and not as a string.
• Demonstrating that small integer literals all share the same underlying type.

Edge Cases:
• In CPython, many small ints like 1 are interned (cached), but this is an implementation detail.
• bool values behave like 1 and 0 in arithmetic, even though their type is bool.

Performance Considerations:
• Using integer literals and checking their type is extremely cheap and common.
• int operations are generally faster and more predictable than float math.

Examples:
• type(1)          # <class 'int'>
• type(2)          # <class 'int'>
• type(1.0)        # <class 'float'>
• type("1")        # <class 'str'>

Notes:
• You almost never need to call int(1); it is already an int.
• Type checks like this are mainly for learning and quick debugging in simple scripts.`),
  mk("What is type(-5)?", ["<class 'int'>", "<class 'float'>", "<class 'str'>", "None"], 0, "Negative whole numbers are int.", `Negative integers are still type int.

Beginner:
• -5 is a whole number (negative), so type(-5) is <class 'int'>.
• In Python, negative numbers without a decimal are integers.

Intermediate:
• int covers all whole numbers: positive, negative, and zero.
• Only the presence of a decimal point (e.g. -5.0) makes a value a float.

Expert:
• type(-5) returns int. For type checking, use isinstance(x, int) if you want to include subclasses (e.g. bool).

Key Concepts:
• The minus sign does not change the underlying type: -5 is still an int.
• Integers model both positive and negative whole-number quantities.

Key Distinctions:
• -5 vs -5.0: same mathematical value, different types (int vs float).
• -5 vs "-5": numeric vs textual representation.

How It Works:
• Python parses the literal -5 as applying the unary minus operator to 5.
• The result of that expression is still an int object.
• type(-5) inspects that resulting object and returns int.

Step-by-Step Execution:
1. Python reads -5 as the expression unary-minus applied to 5.
2. It builds the int 5, then applies the negation to produce -5.
3. type(-5) receives that int object.
4. type() returns the int class.

Order of Operations:
• The literal 5 is constructed first, then the unary minus is applied.
• Finally, type() is called on the evaluated numeric result.

Common Use Cases:
• Representing debts, temperatures below zero, or offsets to the left.
• Teaching that signs affect value, not the underlying numeric type.

Edge Cases:
• Very large negative integers are still int; there is no separate negative type.
• Expressions like -True evaluate to -1 because bool subclasses int.

Performance Considerations:
• Negating an int and checking its type are both constant-time operations.
• Negative ints are handled as efficiently as positive ones.

Examples:
• type(-5)         # <class 'int'>
• type(-1)         # <class 'int'>
• type(-5.0)       # <class 'float'>
• type("-5")       # <class 'str'>

Notes:
• Remember that the sign is part of the value, not the type.
• Use isinstance(x, int) to accept both positive and negative whole numbers.`),
  mk("What is type(3.0)?", ["<class 'float'>", "<class 'int'>", "<class 'str'>", "None"], 0, "Numbers with a decimal point are float.", `Numbers with a decimal point are floats.

Beginner:
• 3.0 has a decimal point, so it's a float, not an int.
• type(3.0) returns <class 'float'>.

Intermediate:
• In Python, 3 and 3.0 are different types: int vs float, even though 3 == 3.0 is True.
• Division (/) always produces a float in Python 3, so 6 / 2 gives 3.0.

Expert:
• float implements IEEE 754 floating-point; type(3.0) is float. For exact decimal arithmetic, see the decimal module.

Key Concepts:
• A decimal point in a numeric literal produces a float value.
• Floats represent real numbers with a fractional part using binary approximation.

Key Distinctions:
• 3 (int) vs 3.0 (float): same equality, different type and internal storage.
• Floats can represent fractions like 0.5 that ints cannot store directly.

How It Works:
• When Python sees 3.0, it constructs a float object.
• type(3.0) returns the float class that defines operations like division with fractions.

Step-by-Step Execution:
1. The literal 3.0 is parsed as a floating-point value.
2. Python creates a float object representing approximately three.
3. type(3.0) is called with that float.
4. type() returns <class 'float'>.

Order of Operations:
• Literal evaluation (3.0) happens first, then type() inspects the result.
• In expressions, arithmetic and other operators would run before type() is applied.

Common Use Cases:
• Representing measurements like 3.5 meters, prices like 3.99, or probabilities.
• Results of division and many math functions naturally produce floats.

Edge Cases:
• Some decimals (like 0.1) cannot be represented exactly as binary floats.
• Comparisons like 0.1 + 0.2 == 0.3 can be False due to rounding.

Performance Considerations:
• Float arithmetic is slightly slower and more complex than pure integer math.
• For heavy numeric work, using floats is standard; for exact money, use decimal.

Examples:
• type(3.0)        # <class 'float'>
• type(3)          # <class 'int'>
• type(1.5)        # <class 'float'>
• type(0.0)        # <class 'float'>

Notes:
• Use round() or decimal.Decimal when you need user-friendly decimal results.
• Understanding float behavior early helps avoid surprise rounding bugs later.`),
  mk("What is type(0.0)?", ["<class 'float'>", "<class 'int'>", "<class 'str'>", "None"], 0, "0.0 is a float.", `0.0 is a float because of the decimal point.

Beginner:
• 0.0 has a decimal point, so type(0.0) is <class 'float'>.
• 0 is int; 0.0 is float.

Intermediate:
• Even when the value is zero, the literal 0.0 is stored as a float.
• In Python 3, 0 == 0.0 is True (value equality), but type(0) != type(0.0).

Expert:
• type(0.0) is float. For type-sensitive code, 0 and 0.0 can behave differently (e.g. in type hints or isinstance checks).

Key Concepts:
• Adding a decimal point changes the type from int to float, even for zero.
• Floats represent numeric values with potential fractional parts, including 0.0.

Key Distinctions:
• 0 vs 0.0: equal in value, different in type and representation.
• 0.0 vs "0.0": numeric zero vs a textual string.

How It Works:
• Python parses 0.0 as a floating-point literal.
• type(0.0) inspects the resulting object and reports float.

Step-by-Step Execution:
1. Python reads the literal 0.0 and allocates a float object for it.
2. type(0.0) is called with that float as the argument.
3. type() returns <class 'float'>.
4. The shell prints the type information.

Order of Operations:
• The literal is created first; there are no additional operators here.
• In more complex expressions, arithmetic would execute before type() is applied.

Common Use Cases:
• Writing code that always uses floats for numeric calculations, even for zero.
• Initializing variables that will later hold non-zero float values (e.g. running totals).

Edge Cases:
• 0.0 compares equal to 0, but isinstance(0.0, int) is False.
• When formatting output, 0.0 may display as 0.0 or 0 depending on formatting rules.

Performance Considerations:
• Using 0.0 instead of 0 has negligible cost, but can clarify intent (float math).
• Consistency (always using floats in certain parts of the code) can make logic simpler.

Examples:
• type(0.0)        # <class 'float'>
• type(0)          # <class 'int'>
• 0 == 0.0         # True
• isinstance(0.0, float)  # True

Notes:
• Prefer 0.0 when you know a variable represents a float quantity, even if it starts at zero.
• Keep in mind that mixing ints and floats in expressions generally produces floats.`),
  mk("What is type('')?", ["<class 'str'>", "<class 'list'>", "<class 'NoneType'>", "None"], 0, "Empty quotes make a string.", `The empty string is still a string.

Beginner:
• Empty quotes '' make a string with no characters. type('') is <class 'str'>.
• A string can have zero or more characters; '' has zero.

Intermediate:
• str is the type for text. '' is the identity for string concatenation: '' + 'hi' == 'hi'.
• len('') is 0; bool('') is False (empty strings are falsy).

Expert:
• type('') is str. The empty string is a singleton-like object used to represent "no text"; it's not None (which has type NoneType).

Key Concepts:
• The empty string '' is a valid str with length zero; it still has type str.
• type('') returns the str class; '' is the identity for string concatenation.

Key Distinctions:
• '' vs None: '' is a string meaning "no characters"; None means "no value."
• '' vs " ": the first has zero characters, the second has one (a space).

How It Works:
• Python parses '' as a string literal with no characters between the quotes.
• type('') inspects that object and returns str.

Step-by-Step Execution:
1. The literal '' is evaluated, producing the empty string object.
2. type('') is called with that object.
3. type() returns <class 'str'>.
4. The REPL displays the type.

Order of Operations:
• Literal '' is created first; then type() is applied. No other operators.

Common Use Cases:
• Default or placeholder text; identity for join/concatenation ('' + s == s).
• Representing "no input" or "empty result" when a string is expected.

Edge Cases:
• len('') is 0; bool('') is False (falsy). '' is not None.
• '' in '' is True; every string contains the empty string.

Performance Considerations:
• The empty string is often interned; creating '' is very cheap.
• Using '' as a default or sentinel is idiomatic and fast.

Examples:
• type('')          # <class 'str'>
• len('')           # 0
• '' + 'hi'         # 'hi'
• bool('')          # False

Notes:
• Prefer '' over None when the semantic meaning is "no text" rather than "missing value."
• '' is the only string that is falsy in a boolean context.`),
  mk("What is type('a')?", ["<class 'str'>", "<class 'int'>", "<class 'char'>", "None"], 0, "Single characters are strings in Python.", `Python has no separate character type; single characters are strings.

Beginner:
• 'a' is a string with one character. type('a') returns <class 'str'>.
• There is no "char" type in Python—use a one-character string.

Intermediate:
• In Python, text is always str; len('a') is 1.
• Indexing a string returns a string: 'hello'[0] is 'h' (a str), not a separate char type.

Expert:
• Python's str is a sequence of Unicode code points. type('a') is str; there is no char. For bytes, use bytes or bytearray.

Key Concepts:
• In Python there is no separate character type; a single character is a str of length 1.
• type('a') returns str; indexing a string also returns str (e.g. 'hello'[0] is 'h').

Key Distinctions:
• 'a' (str) vs C/Java char: Python uses one-character strings instead of a char type.
• 'a' vs b'a': the first is Unicode text, the second is a bytes object (integer 97).

How It Works:
• The literal 'a' is parsed as a string of one character.
• type('a') returns the str class.

Step-by-Step Execution:
1. Python reads 'a' and creates a one-character string.
2. type('a') is called.
3. type() returns <class 'str'>.
4. The shell prints the type.

Order of Operations:
• The literal is evaluated first; type() is then applied. No other operators.

Common Use Cases:
• Storing single characters (e.g. from user input or indexing into a string).
• Building strings character by character or checking single-character values.

Edge Cases:
• len('a') is 1. Some Unicode "characters" may take multiple code points (e.g. emoji).
• type('a') is the same as type('hello')—both are str.

Performance Considerations:
• Single-character strings are common and well optimized.
• For bulk byte-level work, bytes or bytearray may be more appropriate.

Examples:
• type('a')        # <class 'str'>
• type('hello'[0]) # <class 'str'>
• len('a')         # 1
• ord('a')         # 97

Notes:
• There is no char type; use a one-character str. For raw bytes, use bytes or bytearray.`),
  mk("What is type(True)?", ["<class 'bool'>", "<class 'int'>", "<class 'str'>", "None"], 0, "True is a boolean.", `True is a boolean value.

Beginner:
• True is one of two boolean values (True and False). type(True) is <class 'bool'>.
• Booleans represent yes/no or on/off.

Intermediate:
• bool is a subclass of int: True has value 1, False has value 0. So True + True is 2.
• Use booleans in conditions: if x:, while flag:, etc.

Expert:
• type(True) is bool; isinstance(True, int) is True. For identity, True is True. There is only one True and one False object.

Key Concepts:
• True is one of two boolean literals (True and False); type(True) is bool.
• Booleans represent truth values; they are used in conditions and logic.

Key Distinctions:
• True (bool) vs 1 (int): same truth value, different type. bool is a subclass of int.
• True vs "True": the first is a boolean, the second is a string.

How It Works:
• Python recognizes True as the boolean true value.
• type(True) returns the bool class.

Step-by-Step Execution:
1. The literal True is evaluated (singleton bool object).
2. type(True) is called.
3. type() returns <class 'bool'>.
4. The REPL displays the type.

Order of Operations:
• Literal True is evaluated first; then type() is applied.

Common Use Cases:
• Conditions: if flag:, while True:, return True for success.
• Boolean logic: and, or, not combine bool values.

Edge Cases:
• True + True is 2 because bool is a subclass of int (True is 1, False is 0).
• There is only one True object; True is True is always True.

Performance Considerations:
• Using True/False in conditions is fundamental and very fast.
• Prefer "if x:" over "if x == True:" for clarity and flexibility.

Examples:
• type(True)       # <class 'bool'>
• True + True      # 2
• isinstance(True, int)  # True
• True is True     # True

Notes:
• Use "is True" only when you need to distinguish True from other truthy values.`),
  mk("What is type(False)?", ["<class 'bool'>", "<class 'int'>", "<class 'str'>", "None"], 0, "False is a boolean.", `False is a boolean value.

Beginner:
• False is one of the two boolean values. type(False) returns <class 'bool'>.
• False means "no" or "off" in logic.

Intermediate:
• bool is a subclass of int: False has value 0. So False + False is 0.
• Empty collections and zero are "falsy"; bool(0) and bool('') are False.

Expert:
• type(False) is bool. Use "is False" for identity checks rather than == when you specifically mean the boolean False.

Key Concepts:
• False is one of two boolean literals; type(False) is bool.
• False represents "no" or "off" in logic; it is falsy in conditions.

Key Distinctions:
• False (bool) vs 0 (int): both are falsy; False has type bool, 0 has type int.
• False vs None: both are falsy; False is bool, None is NoneType.

How It Works:
• Python recognizes False as the boolean false value.
• type(False) returns the bool class.

Step-by-Step Execution:
1. The literal False is evaluated (singleton bool object).
2. type(False) is called.
3. type() returns <class 'bool'>.
4. The shell prints the type.

Order of Operations:
• The literal False is evaluated first; then type() is applied.

Common Use Cases:
• Conditions: if not flag:, while not done:, return False for failure.
• Default or initial state for flags and switches.

Edge Cases:
• False + False is 0; False * 10 is 0 (bool subclasses int).
• Empty collections and 0 are also falsy; use "is False" only when you need the exact boolean.

Performance Considerations:
• Using False is as cheap as True; both are singletons.
• Prefer "if not x:" over "if x == False:" for idiomatic Python.

Examples:
• type(False)      # <class 'bool'>
• False + False    # 0
• bool('')         # False
• False is False   # True

Notes:
• Use "is False" when you need to distinguish False from 0 or other falsy values.`),
  mk("What is type(None)?", ["<class 'NoneType'>", "<class 'null'>", "<class 'str'>", "None"], 0, "None has type NoneType.", `None represents "no value"; its type is NoneType.

Beginner:
• None means "nothing" or "no value." type(None) returns <class 'NoneType'>.
• Python does not have "null"; it has None.

Intermediate:
• Functions that don't explicitly return a value return None.
• Use "x is None" to check for None (preferred over x == None).

Expert:
• None is a singleton; there is only one None object. type(None) is NoneType. Use identity (is None) for checks to avoid custom __eq__ behavior.

Key Concepts:
• None means "no value" or "absent"; it has its own type, NoneType.
• There is exactly one None object in the entire program; type(None) is NoneType.

Key Distinctions:
• None vs 0 or False: None is not a number or boolean; it is its own type.
• None vs "": None means "no value"; "" means "empty string."

How It Works:
• Python provides None as a built-in singleton.
• type(None) returns the NoneType class (the type of the None object).

Step-by-Step Execution:
1. The name None is resolved to the singleton None object.
2. type(None) is called.
3. type() returns <class 'NoneType'>.
4. The REPL displays the type.

Order of Operations:
• None is a literal-like name; type(None) then inspects it. No arithmetic.

Common Use Cases:
• Default return value for functions that don't explicitly return.
• Optional values: "no result yet," "not found," "unset."
• Sentinel for "missing" or "not applicable."

Edge Cases:
• None is falsy; bool(None) is False. None == None is True, but prefer "x is None."
• Python has no "null"; use None.

Performance Considerations:
• None is a singleton; identity checks (is None) are very fast.
• Using None as a default argument or return value is idiomatic and cheap.

Examples:
• type(None)       # <class 'NoneType'>
• None is None     # True
• bool(None)       # False
• def f(): pass    # f() returns None

Notes:
• Always use "x is None" and "x is not None" for checks; avoid "x == None."`),
  mk("What is type([])?", ["<class 'list'>", "<class 'tuple'>", "<class 'dict'>", "None"], 0, "Square brackets create a list.", `Square brackets create a list.

Beginner:
• [] is an empty list. type([]) returns <class 'list'>.
• Lists hold an ordered sequence of items, and can be changed (mutable).

Intermediate:
• [] is the empty list; [1, 2, 3] is a list of three elements.
• Lists are mutable: you can append, remove, and change elements.

Expert:
• type([]) is list. list is a built-in mutable sequence type. For immutable sequences, use tuple; for key-value storage, use dict.

Key Concepts:
• Square brackets [] create a list; type([]) is list. Lists are ordered, mutable sequences.
• [] is the empty list; [1, 2, 3] is a list of three elements.

Key Distinctions:
• [] (list) vs () (tuple): lists are mutable, tuples are immutable.
• [] vs {}: [] is list, {} is dict (empty set requires set()).

How It Works:
• Python parses [] as a list literal with no elements.
• type([]) returns the list class.

Step-by-Step Execution:
1. The literal [] is evaluated, creating a new empty list object.
2. type([]) is called with that list.
3. type() returns <class 'list'>.
4. The shell displays the type.

Order of Operations:
• [] is constructed first; then type() is applied.

Common Use Cases:
• Storing ordered collections of items; building lists with append, extend.
• Default mutable container; [] is often used in loops to collect results.

Edge Cases:
• Each [] creates a new list object; [] is [] is False.
• Lists can hold any mix of types; they are mutable (can change in place).

Performance Considerations:
• Creating an empty list is cheap. Appending is amortized O(1).
• For fixed-size sequences, consider tuple for immutability and slightly less overhead.

Examples:
• type([])        # <class 'list'>
• len([])         # 0
• [] + [1]        # [1]
• [].append(1)    # list becomes [1], returns None

Notes:
• For immutable sequences use tuple; for key-value pairs use dict.`),
  mk("What is type(())?", ["<class 'tuple'>", "<class 'list'>", "<class 'dict'>", "None"], 0, "Parentheses create a tuple.", `Empty parentheses create the empty tuple.

Beginner:
• () is the empty tuple. type(()) returns <class 'tuple'>.
• Tuples are like lists but use parentheses and cannot be changed after creation.

Intermediate:
• () is the only way to make an empty tuple. (1,) is a one-element tuple (comma required).
• Tuples are immutable: you cannot add, remove, or change elements.

Expert:
• type(()) is tuple. The empty tuple () is a singleton in CPython. Tuples are hashable when their elements are hashable.

Key Concepts:
• Parentheses () create a tuple; type(()) is tuple. Tuples are ordered, immutable sequences.
• () is the empty tuple; (1,) is a one-element tuple (comma required).

Key Distinctions:
• () (tuple) vs [] (list): tuples are immutable, lists are mutable.
• () vs (1): () is empty tuple; (1) is just the integer 1 in parentheses.

How It Works:
• Python parses () as the empty tuple literal.
• type(()) returns the tuple class.

Step-by-Step Execution:
1. The literal () is evaluated (in CPython, often the singleton empty tuple).
2. type(()) is called.
3. type() returns <class 'tuple'>.
4. The REPL prints the type.

Order of Operations:
• () is evaluated first; then type() is applied.

Common Use Cases:
• Returning multiple values from a function; fixed-size records (e.g. (x, y)).
• Using as dictionary keys or set elements (tuples are hashable when elements are).

Edge Cases:
• (1,) is a one-element tuple; (1) is just 1. The comma makes it a tuple.
• Empty tuple () is hashable and can be used as a dict key.

Performance Considerations:
• Tuples are slightly more memory-efficient than lists for fixed data.
• Immutability allows optimizations (e.g. caching, use as keys).

Examples:
• type(())        # <class 'tuple'>
• len(())         # 0
• (1,) + (2,)     # (1, 2)
• () is ()        # True (CPython singleton)

Notes:
• Use (1,) not (1) for a single-element tuple. Tuples are immutable.`),
  mk("What is type({})?", ["<class 'dict'>", "<class 'set'>", "<class 'list'>", "None"], 0, "Curly braces create a dict.", `Empty curly braces create a dictionary, not a set.

Beginner:
• {} is an empty dictionary. type({}) returns <class 'dict'>.
• Dictionaries store key-value pairs; {} has no keys or values.

Intermediate:
• {} is a dict; {1, 2} is a set. Empty braces mean dict in Python.
• To create an empty set, you must use set().

Expert:
• type({}) is dict. In Python 3.7+, dict preserves insertion order. For an empty set, use set() because {} is ambiguous (it's a dict).

Key Concepts:
• Curly braces {} with no content create an empty dictionary; type({}) is dict.
• Dictionaries map keys to values; {} has no key-value pairs.

Key Distinctions:
• {} (dict) vs set(): empty braces are dict; empty set must be set().
• {} vs {1: 2}: first is empty dict, second is dict with one pair.

How It Works:
• Python parses {} as a dict literal (empty). No colons means no key:value pairs yet.
• type({}) returns the dict class.

Step-by-Step Execution:
1. The literal {} is evaluated, creating a new empty dict.
2. type({}) is called.
3. type() returns <class 'dict'>.
4. The shell displays the type.

Order of Operations:
• {} is constructed first; then type() is applied.

Common Use Cases:
• Building mappings from keys to values; storing configuration or lookup tables.
• Default empty dict; often used to accumulate counts or groups.

Edge Cases:
• {} is not a set; {1, 2} (no colons) is a set. Only empty {} is unambiguously dict.
• In Python 3.7+, dicts preserve insertion order.

Performance Considerations:
• Dict creation and lookup are highly optimized (hash table).
• Empty dict is cheap; use {} or dict() for initializing.

Examples:
• type({})        # <class 'dict'>
• len({})         # 0
• {} == {}        # True
• set()           # for empty set

Notes:
• For an empty set you must use set(); {} always means empty dict.`),
  mk("What is type(set())?", ["<class 'set'>", "<class 'dict'>", "<class 'list'>", "None"], 0, "set() creates an empty set.", `set() creates an empty set.

Beginner:
• set() creates a set with no elements. type(set()) returns <class 'set'>.
• Sets hold unique values (no duplicates) and are unordered.

Intermediate:
• You cannot write {} for an empty set—that's a dict. Use set() for an empty set.
• Sets are mutable; they support add, remove, and membership tests (in).

Expert:
• type(set()) is set. Sets are unordered, mutable, and require hashable elements. For a frozen set use frozenset().

Key Concepts:
• set() is the constructor for sets; type(set()) is set. Sets hold unique, unordered elements.
• You cannot use {} for an empty set—that creates a dict. Use set() for empty set.

Key Distinctions:
• set() (set) vs {} (dict): set() gives a set; {} gives a dict.
• set vs list: sets have no order and no duplicates; lists are ordered and can have duplicates.

How It Works:
• set() with no arguments creates a new empty set object.
• type(set()) returns the set class.

Step-by-Step Execution:
1. set() is called, creating an empty set.
2. type(set()) is called with that set.
3. type() returns <class 'set'>.
4. The REPL displays the type.

Order of Operations:
• set() is evaluated first (creates the set); then type() is applied.

Common Use Cases:
• Removing duplicates from a sequence: set([1,2,2,3]) → {1, 2, 3}.
• Fast membership testing (in); mathematical set operations (union, intersection).

Edge Cases:
• Set elements must be hashable (no lists or dicts as set elements).
• Empty set has no literal syntax; set() is the only way.

Performance Considerations:
• Membership in a set is O(1) on average; in a list it is O(n).
• Use sets when you need uniqueness or fast "in" checks.

Examples:
• type(set())     # <class 'set'>
• len(set())      # 0
• set([1,1,2])    # {1, 2}
• 1 in set()      # False

Notes:
• For an immutable set use frozenset(). Sets are unordered.`),
  mk("What is type(42)?", ["<class 'int'>", "<class 'float'>", "<class 'str'>", "None"], 0, "42 is an integer.", `42 is an integer literal.

Beginner:
• 42 is a whole number, so type(42) is <class 'int'>.
• Any whole number without a decimal point is an int.

Intermediate:
• int in Python can grow arbitrarily large (no fixed maximum like in some languages).
• type(42) returns the same type object as type(0) or type(100).

Expert:
• type(42) is int. Small integers are cached in CPython (e.g. -5 to 256), so id(42) may be the same across uses.

Key Concepts:
• 42 is an integer literal; type(42) is int. Integers are whole numbers with no fractional part.
• int in Python has arbitrary precision (no fixed maximum size).

Key Distinctions:
• 42 (int) vs 42.0 (float): same value, different type. 42 vs "42": number vs string.
• int vs long: Python 3 has only int; it grows as needed.

How It Works:
• Python parses 42 as an integer literal and creates (or reuses) an int object.
• type(42) returns the int class.

Step-by-Step Execution:
1. The literal 42 is evaluated (possibly a cached small int in CPython).
2. type(42) is called.
3. type() returns <class 'int'>.
4. The shell prints the type.

Order of Operations:
• Literal 42 is evaluated first; then type() is applied.

Common Use Cases:
• Counting, indexing, arithmetic; any whole-number quantity.
• 42 is often used in examples; same type as 0, 1, 100, etc.

Edge Cases:
• Very large integers (e.g. 10**1000) are still type int; no overflow.
• In CPython, small ints (-5 to 256) may be cached; id(42) can be the same in different places.

Performance Considerations:
• Integer operations are fast and exact. Use int when you don't need fractions.
• Arbitrary precision means very large ints use more memory and time.

Examples:
• type(42)        # <class 'int'>
• type(42.0)      # <class 'float'>
• 42 + 1          # 43
• isinstance(42, int)  # True

Notes:
• Python 3 unifies int and long; there is only int.`),
  mk("What is type(100)?", ["<class 'int'>", "<class 'float'>", "<class 'str'>", "None"], 0, "100 is an integer.", `100 is an integer.

Beginner:
• 100 is a whole number. type(100) returns <class 'int'>.
• Same as 0, 1, or 42: no decimal point means int.

Intermediate:
• Integer literals in Python are int regardless of size (within memory).
• 100, 1000, and 10**100 are all type int.

Expert:
• type(100) is int. Python 3 has a single integer type (no long); integers have arbitrary precision.

Key Concepts:
• 100 is an integer literal; type(100) is int. Same rules as 0, 1, 42: no decimal point means int.
• Integer literals in base 10 are int regardless of magnitude (within memory).

Key Distinctions:
• 100 (int) vs 100.0 (float): different types. 100 vs "100": number vs string.
• All of 0, 1, 100, 10**100 are type int in Python 3.

How It Works:
• Python parses 100 as an integer and creates an int object.
• type(100) returns the int class.

Step-by-Step Execution:
1. Literal 100 is evaluated.
2. type(100) is called.
3. type() returns <class 'int'>.
4. The REPL displays the type.

Order of Operations:
• Literal first; then type(). No other operators.

Common Use Cases:
• Quantities, counts, indices; any whole number. 100 is common in examples and loops.
• type(100) same as type(0), type(42)—all int.

Edge Cases:
• 100, 1000, 10**100 are all int. No overflow; arbitrary precision.
• In CPython, 100 may be in the small-int cache; id(100) can be reused.

Performance Considerations:
• Integer creation and type() are very fast. int is the default for whole numbers.
• Large ints use more memory; operations scale with digit count.

Examples:
• type(100)       # <class 'int'>
• type(100.0)     # <class 'float'>
• 100 == 100.0    # True (value); type(100) != type(100.0)

Notes:
• Python 3 has one integer type; it grows as needed.`),
  mk("What is type(1.5)?", ["<class 'float'>", "<class 'int'>", "<class 'str'>", "None"], 0, "1.5 is a float.", `Numbers with a decimal point are floats.

Beginner:
• 1.5 has a decimal part, so it's a float. type(1.5) is <class 'float'>.
• Floats are used for numbers that aren't whole.

Intermediate:
• 1.5 cannot be stored exactly as a binary float (floating-point representation).
• For money or exact decimals, consider the decimal module.

Expert:
• type(1.5) is float. Floats are IEEE 754 double precision. Use math.isclose() for approximate comparison.

Key Concepts:
• 1.5 has a decimal point, so it is a float; type(1.5) is float. Floats approximate real numbers.
• Floats use binary representation; some decimals (e.g. 0.1) cannot be stored exactly.

Key Distinctions:
• 1.5 (float) vs 1 (int): 1.5 has a fractional part. 1.5 vs "1.5": number vs string.
• float vs decimal.Decimal: float is binary; Decimal is decimal (exact for money).

How It Works:
• Python parses 1.5 as a float literal and creates a float object.
• type(1.5) returns the float class.

Step-by-Step Execution:
1. The literal 1.5 is evaluated (stored as IEEE 754 double).
2. type(1.5) is called.
3. type() returns <class 'float'>.
4. The shell prints the type.

Order of Operations:
• Literal 1.5 is evaluated first; then type() is applied.

Common Use Cases:
• Measurements, ratios, averages; any value that may have a fractional part.
• Result of division (e.g. 3/2 is 1.5) and many math functions.

Edge Cases:
• 1.5 cannot be represented exactly in binary; tiny rounding errors may appear.
• Use math.isclose(a, b) or decimal for exact comparisons when needed.

Performance Considerations:
• Float operations are fast but subject to rounding. Use int when you don't need fractions.
• For financial or exact decimal math, prefer the decimal module.

Examples:
• type(1.5)       # <class 'float'>
• type(1)         # <class 'int'>
• 3 / 2           # 1.5 (float)
• math.isclose(0.1+0.2, 0.3)  # True

Notes:
• Floats are approximate. For exact decimals use decimal.Decimal.`),
  mk("What is type('hello')?", ["<class 'str'>", "<class 'int'>", "<class 'list'>", "None"], 0, "Text in quotes is a string.", `Text in quotes is a string.

Beginner:
• 'hello' is a string of five characters. type('hello') returns <class 'str'>.
• Single or double quotes both create strings.

Intermediate:
• Strings are sequences: you can index 'hello'[0] and slice 'hello'[1:4].
• Strings are immutable; operations like replace return new strings.

Expert:
• type('hello') is str. str holds Unicode code points; for bytes use the b'' prefix or encode().

Key Concepts:
• Text in quotes is a string; type('hello') is str. Strings are sequences of Unicode characters.
• Strings are immutable; operations like replace or upper return new strings.

Key Distinctions:
• 'hello' (str) vs ['h','e','l','l','o'] (list): one string vs list of one-char strings.
• 'hello' vs b'hello': str is Unicode; bytes is raw bytes (integers 0-255).

How It Works:
• Python parses 'hello' as a string literal of five characters.
• type('hello') returns the str class.

Step-by-Step Execution:
1. The literal 'hello' is evaluated, creating a str object.
2. type('hello') is called.
3. type() returns <class 'str'>.
4. The REPL displays the type.

Order of Operations:
• Literal first; then type(). No other operators here.

Common Use Cases:
• Storing text: names, messages, file contents. Indexing and slicing: 'hello'[0], 'hello'[1:4].
• String methods: .upper(), .split(), .replace(), etc.

Edge Cases:
• len('hello') is 5. Some Unicode chars take more than one code point; len may exceed "visible" length.
• Strings are immutable; 'hello'[0] = 'H' would raise an error.

Performance Considerations:
• String creation and indexing are fast. Concatenating many strings: use ''.join(list_of_str).
• For binary data or I/O, consider bytes/bytearray.

Examples:
• type('hello')   # <class 'str'>
• len('hello')    # 5
• 'hello'[0]      # 'h'
• 'hello'.upper() # 'HELLO'

Notes:
• Single or double quotes both create str. Use triple quotes for multi-line strings.`),
  mk("What is type([1])?", ["<class 'list'>", "<class 'tuple'>", "<class 'int'>", "None"], 0, "[1] is a list with one item.", `[1] is a list containing one element.

Beginner:
• [1] is a list that has one item (the number 1). type([1]) is <class 'list'>.
• Square brackets with comma-separated items make a list.

Intermediate:
• [1] has length 1; [1][0] is 1. Lists can hold any mix of types.
• [1] is different from 1 (a list vs an int).

Expert:
• type([1]) is list. The list contains a reference to the int 1; lists are mutable and ordered.

Key Concepts:
• [1] is a list with one element (the integer 1); type([1]) is list. Lists are ordered, mutable sequences.
• [1] is different from 1: the first is a container, the second is the value itself.

Key Distinctions:
• [1] (list) vs (1,) (tuple): list is mutable, tuple is immutable. [1] vs 1: container vs element.
• [1] vs [1,]: both are lists; the trailing comma in [1,] is optional for lists (required for (1,)).

How It Works:
• Python parses [1] as a list literal containing one element.
• type([1]) returns the list class.

Step-by-Step Execution:
1. The literal [1] is evaluated; a new list is created with one item (the int 1).
2. type([1]) is called.
3. type() returns <class 'list'>.
4. The shell displays the type.

Order of Operations:
• The list [1] is built first; then type() is applied.

Common Use Cases:
• Storing a single value in a list so you can append more later; [x] as a one-element list.
• Lists can hold any types; [1] could become [1, 'a', None] after mutations.

Edge Cases:
• [1][0] is 1. [1] is not the same object as 1; type([1]) is list, type(1) is int.
• Each [1] creates a new list; [1] is [1] is False.

Performance Considerations:
• Creating [1] is cheap. Appending to a list is amortized O(1).
• Use a list when you need to change the sequence; use tuple when it's fixed.

Examples:
• type([1])       # <class 'list'>
• len([1])        # 1
• [1][0]          # 1
• [1].append(2)   # list becomes [1, 2]

Notes:
• [1] is a list containing the integer 1. Lists are mutable.`),
  mk("What is type((1,))?", ["<class 'tuple'>", "<class 'list'>", "<class 'int'>", "None"], 0, "(1,) is a tuple. The comma is required.", `A one-element tuple needs a trailing comma.

Beginner:
• (1,) is a tuple with one element. The comma is required so Python doesn't treat (1) as just 1.
• type((1,)) returns <class 'tuple'>.

Intermediate:
• (1) is just the integer 1 in parentheses; (1,) is a tuple.
• Tuples are immutable: (1,) cannot be changed after creation.

Expert:
• type((1,)) is tuple. The trailing comma is necessary for single-element tuple literals; (1,) creates a tuple, (1) does not.

Key Concepts:
• (1,) is a tuple with one element; the comma distinguishes it from (1) which is just the integer 1.
• type((1,)) is tuple. Tuples are immutable, ordered sequences.

Key Distinctions:
• (1,) (tuple) vs (1) (int): the comma is required for a one-element tuple. (1,) vs [1]: tuple vs list.
• (1, 2) is a two-element tuple; (1,) is a one-element tuple.

How It Works:
• Python parses (1,) as a tuple literal. The comma tells Python it's a tuple, not a grouped expression.
• type((1,)) returns the tuple class.

Step-by-Step Execution:
1. The literal (1,) is evaluated; a tuple containing the int 1 is created.
2. type((1,)) is called.
3. type() returns <class 'tuple'>.
4. The REPL prints the type.

Order of Operations:
• (1,) is evaluated first (tuple creation); then type() is applied.

Common Use Cases:
• Returning a single value "in a tuple" from a function; (x,) for one-element records.
• Using as dict key or set element (tuples are hashable if elements are).

Edge Cases:
• (1) is just 1; (1,) is a tuple. Always use the trailing comma for one-element tuples.
• (1,) is immutable; you cannot change its elements after creation.

Performance Considerations:
• Tuples are slightly more efficient than lists for fixed data; they're immutable and hashable when elements are.
• Use (1,) when you need a single-item tuple (e.g. for consistency with (a, b) returns).

Examples:
• type((1,))      # <class 'tuple'>
• (1)             # 1 (integer)
• (1,)            # (1,) (tuple)
• len((1,))       # 1

Notes:
• The comma in (1,) is required. Without it, (1) is just the number 1.`),
  mk("What is type({1: 2})?", ["<class 'dict'>", "<class 'set'>", "<class 'list'>", "None"], 0, "{1: 2} is a dictionary.", `Curly braces with key: value pairs create a dict.

Beginner:
• {1: 2} is a dictionary that maps key 1 to value 2. type({1: 2}) is <class 'dict'>.
• Dictionaries store key-value pairs; each key appears once.

Intermediate:
• Syntax is {key: value, ...}. Keys must be hashable; values can be anything.
• {1: 2} has one pair; len({1: 2}) is 1.

Expert:
• type({1: 2}) is dict. Dicts are mutable mappings. Keys are unique; later assignments overwrite. In 3.7+, insertion order is preserved.

Key Concepts:
• Curly braces with key: value pairs create a dict; type({1: 2}) is dict. Keys must be hashable; values can be any type.
• {1: 2} maps key 1 to value 2; len({1: 2}) is 1.

Key Distinctions:
• {1: 2} (dict) vs {1, 2} (set): dict has key:value; set has only values. {1: 2} vs []: mapping vs sequence.
• Keys are unique; assigning again overwrites: {1: 2, 1: 3} is {1: 3}.

How It Works:
• Python parses {1: 2} as a dict literal with one key-value pair.
• type({1: 2}) returns the dict class.

Step-by-Step Execution:
1. The literal {1: 2} is evaluated; a dict is created with key 1 and value 2.
2. type({1: 2}) is called.
3. type() returns <class 'dict'>.
4. The shell displays the type.

Order of Operations:
• Dict literal is built first; then type() is applied.

Common Use Cases:
• Lookup tables; storing named or keyed data. d[1] gives 2; d[1] = 3 mutates.
• Configurations, caches, counting (e.g. {char: count}).

Edge Cases:
• Dict keys must be hashable (no lists or dicts as keys). Values can be anything.
• In Python 3.7+, iteration order is insertion order.

Performance Considerations:
• Dict lookup and insert are O(1) on average. Use dicts for fast key-based access.
• Empty dict {} is cheap; building with many pairs is efficient.

Examples:
• type({1: 2})    # <class 'dict'>
• {1: 2}[1]      # 2
• len({1: 2})    # 1
• {1: 2, 1: 3}   # {1: 3}

Notes:
• Use {} or {k: v} for dicts; use set() or {a, b} (no colons) for sets.`),
  mk("What is type({1, 2})?", ["<class 'set'>", "<class 'dict'>", "<class 'list'>", "None"], 0, "{1, 2} is a set.", `Curly braces with only values (no colons) create a set.

Beginner:
• {1, 2} is a set with two elements. type({1, 2}) returns <class 'set'>.
• Sets have no duplicates and no order; they're for unique items.

Intermediate:
• {1, 2} is a set; {1: 2} would be a dict (key: value). No colons means set.
• Sets are mutable; use frozenset for an immutable set.

Expert:
• type({1, 2}) is set. Set elements must be hashable. Sets support in, add, remove, and set operations (union, intersection).

Key Concepts:
• Curly braces with only values (no colons) create a set; type({1, 2}) is set. Sets hold unique, unordered elements.
• {1, 2} has two elements; duplicates are removed (e.g. {1, 1, 2} is {1, 2}).

Key Distinctions:
• {1, 2} (set) vs {1: 2} (dict): set has no colons; dict has key: value. {1, 2} vs [1, 2]: unordered, unique vs ordered, can duplicate.
• Sets are mutable; for immutable use frozenset({1, 2}).

How It Works:
• Python parses {1, 2} as a set literal (no colons, so not a dict).
• type({1, 2}) returns the set class.

Step-by-Step Execution:
1. The literal {1, 2} is evaluated; a set containing 1 and 2 is created.
2. type({1, 2}) is called.
3. type() returns <class 'set'>.
4. The REPL displays the type.

Order of Operations:
• Set literal is built first; then type() is applied.

Common Use Cases:
• Removing duplicates; fast membership (1 in {1, 2}); set math (union, intersection).
• When you need unique items and don't care about order.

Edge Cases:
• Set elements must be hashable (no lists or dicts). {1, 2} order is not guaranteed.
• Empty set cannot be {} (that's dict); use set().

Performance Considerations:
• Membership in a set is O(1) average; in a list it's O(n). Use sets for large "in" checks.
• Building a set from a list removes duplicates in one pass.

Examples:
• type({1, 2})    # <class 'set'>
• len({1, 2})    # 2
• 1 in {1, 2}    # True
• {1,1,2}        # {1, 2}

Notes:
• No colons in set literals. Empty set is set(), not {}.`),
  mk("What is type(b'x')?", ["<class 'bytes'>", "<class 'str'>", "<class 'list'>", "None"], 0, "b'x' is bytes.", `The b prefix creates a bytes literal.

Beginner:
• b'x' is a bytes object (raw bytes). type(b'x') returns <class 'bytes'>.
• Bytes are like strings but for raw binary data; the b prefix marks a bytes literal.

Intermediate:
• bytes is immutable; each element is an integer 0–255. b'x'[0] is 120 (ord('x')).
• Use .decode() to get a str from bytes; use .encode() to get bytes from str.

Expert:
• type(b'x') is bytes. bytes is an immutable sequence of integers in 0–255. For mutable binary data use bytearray.

Key Concepts:
• The b prefix creates a bytes literal; type(b'x') is bytes. Bytes are raw 8-bit values (0–255), immutable.
• b'x'[0] is 120 (ord('x')); each element is an int in range(0, 256).

Key Distinctions:
• b'x' (bytes) vs 'x' (str): bytes are raw integers; str is Unicode text. b'x' vs [120]: bytes vs list of ints.
• bytes is immutable; for mutable binary use bytearray.

How It Works:
• Python parses b'x' as a bytes literal (ASCII 'x' is byte 120).
• type(b'x') returns the bytes class.

Step-by-Step Execution:
1. The literal b'x' is evaluated; a bytes object of length 1 (value 120) is created.
2. type(b'x') is called.
3. type() returns <class 'bytes'>.
4. The shell displays the type.

Order of Operations:
• Literal b'x' is evaluated first; then type() is applied.

Common Use Cases:
• Binary I/O; network data; encoding/decoding (b'hi'.decode(), 'hi'.encode()).
• When you need exact byte values rather than Unicode characters.

Edge Cases:
• b'x'[0] is 120, not 'x'. Indexing bytes returns an int 0–255.
• Only ASCII in b'...' is simple; other bytes use escape sequences (e.g. b'\\xff').

Performance Considerations:
• bytes is efficient for binary data. Use str for text; use bytes for raw data.
• .decode() and .encode() convert between str and bytes.

Examples:
• type(b'x')      # <class 'bytes'>
• b'x'[0]        # 120
• b'hi'.decode()  # 'hi'
• 'hi'.encode()   # b'hi'

Notes:
• For mutable byte sequences use bytearray. bytes is immutable.`),
  mk("What is type(2)?", ["<class 'int'>", "<class 'float'>", "<class 'str'>", "None"], 0, "2 is an integer.", `2 is an integer.

Beginner:
• 2 is a whole number. type(2) returns <class 'int'>.
• Same rule: no decimal point means the type is int.

Intermediate:
• type(2) is the same as type(0), type(1), type(42)—all are int.
• 2 and 2.0 have the same numeric value but different types.

Expert:
• type(2) is int. In expressions, 2 is used as an int until mixed with float, then type promotion may occur.

Key Concepts:
• 2 is an integer literal; type(2) is int. Same as 0, 1, 42: no decimal point means int.
• Small integers like 2 are commonly used in arithmetic and indexing.

Key Distinctions:
• 2 (int) vs 2.0 (float): different types. 2 vs "2": number vs string. 2 is not a boolean (but 2 is truthy).
• type(2) is the same as type(0) and type(100)—all int.

How It Works:
• Python parses 2 as an integer literal. type(2) returns the int class.
• In CPython, 2 is in the small-int cache range.

Step-by-Step Execution:
1. Literal 2 is evaluated (possibly cached).
2. type(2) is called.
3. type() returns <class 'int'>.
4. The REPL prints the type.

Order of Operations:
• Literal first; then type(). No other operators.

Common Use Cases:
• Counting, indexing (e.g. [0], [1], [2]); arithmetic. 2 is the first prime and common in examples.
• type(2) confirms the value is an integer, not a float or string.

Edge Cases:
• 2 + 2.0 is 4.0 (float); mixing int and float promotes to float. 2 is truthy; if 2: runs.
• Small ints may be interned; id(2) can be the same across uses.

Performance Considerations:
• Integer 2 is as cheap as 0 or 1. Use int for whole-number math.
• type(2) is a trivial call; no performance concern at beginner scale.

Examples:
• type(2)        # <class 'int'>
• 2 + 2          # 4
• type(2.0)      # <class 'float'>
• isinstance(2, int)  # True

Notes:
• 2 is an int. In division, 2/1 is 2.0 in Python 3; use 2//1 for int result.`),
  mk("What is type(10)?", ["<class 'int'>", "<class 'float'>", "<class 'str'>", "None"], 0, "10 is an integer.", `10 is an integer.

Beginner:
• 10 is a whole number. type(10) is <class 'int'>.
• Integer type applies to all whole numbers, no matter how large.

Intermediate:
• 10 is an int; 10.0 is a float. type(10) and type(10.0) differ.
• type(10) returns the int class object.

Expert:
• type(10) is int. Small integers in CPython are interned; 10 may share identity with other uses of 10.

Key Concepts:
• 10 is an integer literal; type(10) is int. Base-10 integer literals are int regardless of size.
• 10 is commonly used in loops (range(10)), examples, and place value.

Key Distinctions:
• 10 (int) vs 10.0 (float): different types. 10 vs "10": number vs string.
• type(10) is int; same as type(0), type(1), type(100).

How It Works:
• Python parses 10 as an integer. type(10) returns the int class.
• In CPython, 10 is typically in the small-int cache (-5 to 256).

Step-by-Step Execution:
1. Literal 10 is evaluated.
2. type(10) is called.
3. type() returns <class 'int'>.
4. The shell displays the type.

Order of Operations:
• Literal 10 first; then type(). No other operators.

Common Use Cases:
• range(10); counting by tens; decimal base. 10 is ubiquitous in examples.
• Verifying that a value is an int (e.g. after input or parsing).

Edge Cases:
• 10**100 is still type int; Python supports arbitrarily large integers. 10.0 is float.
• id(10) may equal id(10) elsewhere due to interning (implementation detail).

Performance Considerations:
• 10 is a small int; creation and type() are trivial. Use int for whole numbers.
• For very large ints, operations scale with number of digits.

Examples:
• type(10)       # <class 'int'>
• range(10)      # 0..9
• 10.0           # float
• 10 == 10.0     # True

Notes:
• Python 3 has a single int type; no separate "long." 10 is always int.`),
  mk("What is type(-1)?", ["<class 'int'>", "<class 'float'>", "<class 'str'>", "None"], 0, "Negative integers are int.", `Negative whole numbers are still int.

Beginner:
• -1 is a negative whole number. type(-1) returns <class 'int'>.
• int includes zero, positive, and negative whole numbers.

Intermediate:
• type(-1) is int. Unary minus is an operator; -1 is one literal.
• For type checking, isinstance(-1, int) is True.

Expert:
• type(-1) is int. In CPython, small integers (e.g. -5 to 256) are cached; -1 is typically the same object across the program.

Key Concepts:
• -1 is a negative integer literal; type(-1) is int. The minus sign does not change the type.
• -1 is often used for "last index" (e.g. s[-1]), sentinel values, and decrementing.

Key Distinctions:
• -1 (int) vs -1.0 (float): same value, different type. -1 vs "-1": number vs string.
• type(-1) is int; negative whole numbers are still int.

How It Works:
• Python parses -1 as unary minus applied to 1; the result is an int.
• type(-1) returns the int class.

Step-by-Step Execution:
1. Literal 1 is evaluated, then unary minus produces -1 (int).
2. type(-1) is called.
3. type() returns <class 'int'>.
4. The REPL displays the type.

Order of Operations:
• 1 is evaluated, then unary -, then type().

Common Use Cases:
• Negative indices: 'hello'[-1] is 'o'. Counting backward; "not found" or error sentinel.
• type(-1) confirms the value is an integer.

Edge Cases:
• -1 is in the small-int cache in CPython; id(-1) is often the same everywhere.
• -1 is truthy in Python (non-zero); only 0 is falsy among numbers.

Performance Considerations:
• -1 is as cheap as 1. Negative indexing (s[-1]) is O(1) and common.
• No performance concern for type(-1) at beginner scale.

Examples:
• type(-1)       # <class 'int'>
• 'hi'[-1]       # 'i'
• -1 + 1         # 0
• isinstance(-1, int)  # True

Notes:
• -1 is the conventional "last element" index in sequences.`),
  mk("What is type(0.5)?", ["<class 'float'>", "<class 'int'>", "<class 'str'>", "None"], 0, "0.5 is a float.", `0.5 has a decimal point, so it's a float.

Beginner:
• 0.5 is not a whole number. type(0.5) returns <class 'float'>.
• Any number written with a decimal point is a float.

Intermediate:
• 0.5 is stored as a floating-point number; representation may not be exact.
• type(0.5) is float; type(1/2) is also float because / returns float in Python 3.

Expert:
• type(0.5) is float. Literal 0.5 is a float; division / also produces floats, so 1/2 is 0.5 (float).

Key Concepts:
• 0.5 has a decimal point, so it is a float; type(0.5) is float. Half is a common fractional value.
• Division (/) in Python 3 always returns a float; 1/2 is 0.5, not 0.

Key Distinctions:
• 0.5 (float) vs 0 (int): 0.5 has a fractional part. 0.5 vs "0.5": number vs string.
• 0.5 cannot be stored exactly in binary float; 0.5 is represented as closely as possible.

How It Works:
• Python parses 0.5 as a float literal (IEEE 754).
• type(0.5) returns the float class.

Step-by-Step Execution:
1. The literal 0.5 is evaluated (stored as a float).
2. type(0.5) is called.
3. type() returns <class 'float'>.
4. The REPL displays the type.

Order of Operations:
• Literal 0.5 first; then type(). In 1/2, division runs first and produces 0.5 (float).

Common Use Cases:
• Fractions, percentages (0.5 = 50%), probabilities; result of division.
• 1/2, 1/4, 3/4 all produce floats in Python 3.

Edge Cases:
• 0.5 is one of the few decimals that can be represented exactly in binary float.
• For exact decimal math (e.g. money), use the decimal module.

Performance Considerations:
• Float 0.5 is as cheap as other small floats. Use floats when you need fractions.
• Comparing floats: prefer math.isclose() rather than == for reliability.

Examples:
• type(0.5)       # <class 'float'>
• 1/2             # 0.5
• type(1/2)       # <class 'float'>
• 0.5 == 1/2      # True

Notes:
• In Python 3, / always gives float. Use // for integer division (e.g. 1//2 is 0).`),
  mk("What is type(2.5)?", ["<class 'float'>", "<class 'int'>", "<class 'str'>", "None"], 0, "2.5 is a float.", `2.5 is a float.

Beginner:
• 2.5 has a decimal part. type(2.5) is <class 'float'>.
• Floats are for numbers that aren't whole.

Intermediate:
• 2.5 is a float literal. int(2.5) would truncate to 2.
• type(2.5) returns the float class.

Expert:
• type(2.5) is float. For exact decimal representation (e.g. currency), decimal.Decimal is often preferred.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`),
  mk("What is type('x')?", ["<class 'str'>", "<class 'int'>", "<class 'char'>", "None"], 0, "Single-character string.", `A single character is still a string.

Beginner:
• 'x' is a string of length 1. type('x') returns <class 'str'>.
• Python does not have a separate "char" type.

Intermediate:
• len('x') is 1. Strings are sequences; 'x'[0] returns 'x' (a str).
• type('x') is the same as type('hello')—both are str.

Expert:
• type('x') is str. There is no char type; use a one-character str. For byte-oriented single "characters" use bytes or ord()/chr().

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`),
  mk("What is type(\"\")?", ["<class 'str'>", "<class 'list'>", "<class 'NoneType'>", "None"], 0, "Double quotes also make a string.", `Double quotes create a string too.

Beginner:
• "" is the empty string using double quotes. type("") is <class 'str'>.
• Single and double quotes both create strings; '' and "" are the same empty string.

Intermediate:
• "" and '' are equivalent—both are the empty str.
• Use the other quote type to include a quote in the string: "it's" or 'say "hi"'.

Expert:
• type("") is str. Triple quotes (''' or """) allow multi-line string literals; "" is just another way to write the empty string.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`),
  mk("What is type([0])?", ["<class 'list'>", "<class 'tuple'>", "<class 'int'>", "None"], 0, "[0] is a list.", `[0] is a list containing the integer 0.

Beginner:
• [0] is a list with one element (0). type([0]) returns <class 'list'>.
• The list can contain any type; here it's one int.

Intermediate:
• [0] has length 1; [0][0] is 0. bool([0]) is True (non-empty list is truthy).
• type([0]) is list; the element 0 is type int.

Expert:
• type([0]) is list. The list holds a reference to the int 0. Lists are mutable; [0].append(1) changes the list in place.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`),
  mk("What is type([1, 2])?", ["<class 'list'>", "<class 'tuple'>", "<class 'dict'>", "None"], 0, "[1, 2] is a list.", `[1, 2] is a list of two integers.

Beginner:
• [1, 2] is a list with two items. type([1, 2]) is <class 'list'>.
• Items are in order: first 1, then 2.

Intermediate:
• len([1, 2]) is 2; [1, 2][0] is 1, [1, 2][1] is 2.
• Lists are mutable: you can change, append, or remove elements.

Expert:
• type([1, 2]) is list. Lists are ordered, mutable sequences. They can contain mixed types and duplicates.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`),
  mk("What is type((1, 2))?", ["<class 'tuple'>", "<class 'list'>", "<class 'dict'>", "None"], 0, "(1, 2) is a tuple.", `(1, 2) is a tuple of two elements.

Beginner:
• (1, 2) is a tuple with two items. type((1, 2)) returns <class 'tuple'>.
• Tuples use parentheses and commas; (1, 2) has two elements.

Intermediate:
• Tuples are immutable: you cannot change (1, 2) after creation.
• (1, 2)[0] is 1, (1, 2)[1] is 2. Use tuples for fixed sequences.

Expert:
• type((1, 2)) is tuple. Tuples are immutable and hashable when all elements are hashable; they're often used as dict keys or in return values.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`),
  mk("What is type({'a': 1})?", ["<class 'dict'>", "<class 'set'>", "<class 'list'>", "None"], 0, "{'a': 1} is a dict.", `{'a': 1} is a dictionary with one key-value pair.

Beginner:
• {'a': 1} maps the key 'a' to the value 1. type({'a': 1}) is <class 'dict'>.
• Dictionaries use key: value inside curly braces.

Intermediate:
• Keys must be hashable; strings like 'a' are hashable. Values can be any type.
• {'a': 1}['a'] is 1. Dicts are mutable.

Expert:
• type({'a': 1}) is dict. Dicts are mutable mappings. From Python 3.7+, dict maintains insertion order.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`),
  mk("What is type({0})?", ["<class 'set'>", "<class 'dict'>", "<class 'list'>", "None"], 0, "{0} is a set with one element.", `{0} is a set containing one element.

Beginner:
• {0} is a set with one member (0). type({0}) returns <class 'set'>.
• No colons, so it's a set; {0: 1} would be a dict.

Intermediate:
• Sets hold unique elements; {0, 0} is the same as {0}.
• 0 is hashable, so it can be a set element. Sets are unordered.

Expert:
• type({0}) is set. Sets require hashable elements. {0} has one element; len({0}) is 1. For an empty set use set().

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`),
  mk("What is type(7)?", ["<class 'int'>", "<class 'float'>", "<class 'str'>", "None"], 0, "7 is an integer.", `7 is an integer.

Beginner:
• 7 is a whole number. type(7) returns <class 'int'>.
• Any literal whole number without a decimal is int.

Intermediate:
• type(7) is int. 7 is truthy (bool(7) is True).
• In CPython, small integers like 7 are cached for efficiency.

Expert:
• type(7) is int. Integer literals are parsed as int; 0o7 and 0x7 are also int (octal and hex).

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`),
  mk("What is type(99)?", ["<class 'int'>", "<class 'float'>", "<class 'str'>", "None"], 0, "99 is an integer.", `99 is an integer.

Beginner:
• 99 is a whole number. type(99) is <class 'int'>.
• Same as other integers: no decimal point means int.

Intermediate:
• 99 is within the range of small integer caching in CPython.
• type(99) returns the same int class as type(1) or type(42).

Expert:
• type(99) is int. Python 3 has unified int (arbitrary precision); there is no separate long type.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`),
  mk("What is type(-10)?", ["<class 'int'>", "<class 'float'>", "<class 'str'>", "None"], 0, "Negative integers are int.", `-10 is an integer.

Beginner:
• -10 is a negative whole number. type(-10) returns <class 'int'>.
• int includes all whole numbers, positive and negative.

Intermediate:
• type(-10) is int. For type checking, isinstance(-10, int) is True.
• -10 is falsy in a boolean context (it's non-zero but often used in conditions).

Expert:
• type(-10) is int. Negative integers are first-class; they're not stored in a special way. Unary minus is part of the literal.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`),
  mk("What is type(1.0)?", ["<class 'float'>", "<class 'int'>", "<class 'str'>", "None"], 0, "1.0 has a decimal point, so float.", `1.0 is a float because of the decimal point.

Beginner:
• 1.0 has a decimal point, so it's a float. type(1.0) is <class 'float'>.
• 1 is int; 1.0 is float, even though 1 == 1.0.

Intermediate:
• In Python 3, 1 == 1.0 is True (value equality), but type(1) != type(1.0).
• Division / always gives float, so 2/2 is 1.0.

Expert:
• type(1.0) is float. The decimal point makes it a float literal. For type hints, use int vs float explicitly.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`),
  mk("What is type(10.0)?", ["<class 'float'>", "<class 'int'>", "<class 'str'>", "None"], 0, "10.0 is a float.", `10.0 is a float.

Beginner:
• 10.0 has a decimal point. type(10.0) returns <class 'float'>.
• 10 is int; 10.0 is float.

Intermediate:
• 10.0 is used when you need float context (e.g. division or float operations).
• type(10.0) is float; int(10.0) is 10.

Expert:
• type(10.0) is float. Float literals can use exponent form: 1e1 is 10.0.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`),
  mk("What is type('0')?", ["<class 'str'>", "<class 'int'>", "<class 'float'>", "None"], 0, "'0' in quotes is a string.", `'0' in quotes is a string, not the number 0.

Beginner:
• '0' is text (a string), not the number 0. type('0') is <class 'str'>.
• Quotes make it a string; without quotes, 0 would be an int.

Intermediate:
• '0' and 0 are different: one is str, one is int. int('0') converts the string to 0.
• You often see '0' when reading input or from files; convert with int() for math.

Expert:
• type('0') is str. str and int are distinct; use int('0') for conversion. Leading zeros in numeric strings can matter for parsing (e.g. int('010', 8) for octal).

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`),
  mk("What is type('1')?", ["<class 'str'>", "<class 'int'>", "<class 'float'>", "None"], 0, "'1' is a string.", `'1' is a string of one character.

Beginner:
• '1' is the character "1" as a string. type('1') returns <class 'str'>.
• It's not the integer 1; it's text that looks like the digit 1.

Intermediate:
• int('1') converts it to the integer 1. str(1) converts 1 to '1'.
• type('1') is str; type(1) is int. They're different types.

Expert:
• type('1') is str. For numeric conversion, int('1') and float('1') work; for single-character semantics, '1'[0] is '1'.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`),
  mk("What is type(15)?", ["<class 'int'>", "<class 'float'>", "<class 'str'>", "None"], 0, "15 is an integer.", `15 is an integer.

Beginner:
• 15 is a whole number. type(15) is <class 'int'>.
• No decimal point, so the type is int.

Intermediate:
• type(15) returns the int class. 15 can be written in other bases: 0o17 (octal), 0xf (hex).
• 15 is truthy; bool(15) is True.

Expert:
• type(15) is int. Literals are parsed at compile time; 15 is stored as an int object.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`),
  mk("What is type(3)?", ["<class 'int'>", "<class 'float'>", "<class 'str'>", "None"], 0, "3 is an integer.", `3 is an integer.

Beginner:
• 3 is a whole number. type(3) returns <class 'int'>.
• Integer type for any whole number literal.

Intermediate:
• type(3) is int. 3 is a small integer, often cached in CPython.
• 3 and 3.0 have the same numeric value but different types.

Expert:
• type(3) is int. In expressions, 3 stays int until combined with a float, then result is float.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`),
  mk("What is type(4.0)?", ["<class 'float'>", "<class 'int'>", "<class 'str'>", "None"], 0, "4.0 is a float.", `4.0 is a float.

Beginner:
• 4.0 has a decimal point. type(4.0) is <class 'float'>.
• 4 would be int; 4.0 is float.

Intermediate:
• type(4.0) is float. 4.0 can be used where a float is expected (e.g. in division).
• int(4.0) is 4; they're equal in value but not in type.

Expert:
• type(4.0) is float. Float literals with .0 are exact for that value; 4.0 is represented exactly in IEEE 754.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`),
  mk("What is type('hi')?", ["<class 'str'>", "<class 'list'>", "<class 'int'>", "None"], 0, "'hi' is a string.", `'hi' is a string of two characters.

Beginner:
• 'hi' is a string. type('hi') returns <class 'str'>.
• It has two characters: 'h' and 'i'.

Intermediate:
• len('hi') is 2; 'hi'[0] is 'h', 'hi'[1] is 'i'.
• Strings are immutable; 'hi'.upper() returns a new string 'HI'.

Expert:
• type('hi') is str. str is a sequence type; indexing returns a str of length 1. Concatenation with + creates new strings.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`),
  mk("What is type([1, 2, 3])?", ["<class 'list'>", "<class 'tuple'>", "<class 'dict'>", "None"], 0, "[1,2,3] is a list.", `[1, 2, 3] is a list of three integers.

Beginner:
• [1, 2, 3] is a list with three items. type([1, 2, 3]) is <class 'list'>.
• Lists keep order and can be changed.

Intermediate:
• len([1, 2, 3]) is 3. You can append, slice, and index.
• type([1, 2, 3]) is list; the elements are ints.

Expert:
• type([1, 2, 3]) is list. Lists are mutable sequences; they support in-place operations like .append() and .sort().

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`),
  mk("What is type((0,))?", ["<class 'tuple'>", "<class 'list'>", "<class 'int'>", "None"], 0, "(0,) is a one-element tuple.", `(0,) is a single-element tuple.

Beginner:
• (0,) is a tuple with one element (0). The comma is required.
• type((0,)) returns <class 'tuple'>. (0) without the comma would just be 0.

Intermediate:
• (0,) is the tuple form of "one element"; (0) is the int 0 in parentheses.
• Tuples are immutable, so (0,) cannot be changed.

Expert:
• type((0,)) is tuple. The comma is the tuple constructor in single-element case; (0,) creates a tuple, (0) does not.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`),
  mk("What is type(range(3))?", ["<class 'range'>", "<class 'list'>", "<class 'tuple'>", "None"], 0, "range(3) is a range object.", `range(3) creates a range object.

Beginner:
• range(3) represents the numbers 0, 1, 2. type(range(3)) is <class 'range'>.
• range is used in for loops: for i in range(3): ...

Intermediate:
• range(3) doesn't create a list; it's a lazy sequence that produces 0, 1, 2 when iterated.
• list(range(3)) is [0, 1, 2]. range is memory-efficient for large ranges.

Expert:
• type(range(3)) is range. range is a sequence type; it supports in, indexing, and slicing. It does not store all values in memory.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`),
  mk("What is type(...)?", ["<class 'ellipsis'>", "<class 'NoneType'>", "<class 'str'>", "None"], 0, "... is the ellipsis literal.", `... is the Ellipsis literal; its type is ellipsis.

Beginner:
• ... is a special value in Python (ellipsis). type(...) returns <class 'ellipsis'>.
• You might see it in type hints or as a placeholder.

Intermediate:
• ... is the same as Ellipsis. It's used in slicing (e.g. in NumPy) and in type hints.
• There's only one Ellipsis object; ... is Ellipsis is True.

Expert:
• type(...) is type(Ellipsis), which is ellipsis. The literal ... is syntactic sugar for Ellipsis. Used in typing (e.g. Tuple[int, ...]) and in extended slicing.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`),
];

// 51-150: unique simple expressions (no repetitive a+b or v*1)
const beginnerMid: Array<[string, string[], number, string, string?]> = [
  ["What is 1 + 1?", ["2", "1", "0", "11"], 0, "1 + 1 = 2.", `Addition of two integers gives an integer.

Beginner:
• 1 + 1 equals 2. Adding two integers gives an integer.
• This is basic arithmetic; the result has type int.

Intermediate:
• The + operator works on numbers (and strings for concatenation). For two ints, the result is int.
• Python supports arbitrary-precision integers, so 1+1 is just 2.

Expert:
• int.__add__ is used; the result is an int. For mixed types (int + float), the result is float (type promotion).

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 2 + 3?", ["5", "6", "23", "Error"], 0, "2 + 3 = 5.", `Basic addition: 2 + 3 = 5.

Beginner:
• 2 + 3 is 5. Both are integers, so the result is an integer.
• Addition works the same as in math.

Intermediate:
• The + operator returns the sum. type(2+3) is int.
• You can chain addition: 2 + 3 + 4 = 9.

Expert:
• Addition of two ints returns int. For int + float, the int is promoted to float and the result is float.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 10 - 3?", ["7", "13", "30", "Error"], 0, "10 - 3 = 7.", `Subtraction: 10 - 3 = 7.

Beginner:
• 10 minus 3 is 7. Both are integers, so the result is an integer.
• The - operator subtracts the second number from the first.

Intermediate:
• 10 - 3 = 7. type(7) is int. Negative results are allowed: 3 - 10 = -7.
• - is also used as unary minus (e.g. -5).

Expert:
• int.__sub__ is used. For int - float, the result is float. Subtraction is not commutative.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 4 * 2?", ["8", "6", "42", "Error"], 0, "4 * 2 = 8.", `Multiplication: 4 * 2 = 8.

Beginner:
• 4 times 2 is 8. The * operator multiplies two numbers.
• Both are integers, so the result is an integer.

Intermediate:
• 4 * 2 = 8. In Python, * is also used for string/list repetition: 'a' * 3 = 'aaa'.
• type(4*2) is int; type(4*2.0) is float.

Expert:
• int.__mul__ is used. For sequences, * with an int repeats the sequence. Operator overloading allows different behavior per type.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 6 / 2?", ["3.0", "3", "2.0", "Error"], 0, "Division gives float in Python 3.", `In Python 3, / always gives a float.

Beginner:
• 6 / 2 is 3.0, not 3. Division with / always produces a float in Python 3.
• Even when the result is a whole number, you get a float (3.0).

Intermediate:
• This is "true division". 6 / 2 = 3.0. For integer division use //: 6 // 2 = 3.
• In Python 2, / behaved differently (integer division for two ints). Python 3 unified to always float for /.

Expert:
• float.__truediv__ or int.__truediv__; int/int promotes to float in 3. Use // for floor division when you need an int result.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 9 // 2?", ["4", "4.5", "5", "Error"], 0, "// is integer division (floor).", `9 // 2 = 4 (floor division).

Beginner:
• 9 divided by 2 is 4 with a remainder. // gives the quotient (how many times 2 fits into 9).
• // drops the decimal part; it's "integer" or "floor" division.

Intermediate:
• 9 // 2 = 4. The remainder is 9 % 2 = 1. So 9 = 4*2 + 1.
• For positive numbers, // truncates toward zero; for negative numbers it floors toward negative infinity.

Expert:
• int.__floordiv__; result type matches the operands (int//int=int). divmod(9,2) returns (4, 1) in one call.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 9 % 2?", ["1", "0", "4", "Error"], 0, "% is the remainder.", `9 % 2 = 1 (remainder).

Beginner:
• When you divide 9 by 2, you get 4 with 1 left over. % gives that remainder (1).
• So 9 % 2 = 1. Useful for checking even/odd: n % 2 is 0 for even, 1 for odd.

Intermediate:
• 9 = 4*2 + 1, so 9 % 2 = 1. The relationship: (a // b) * b + (a % b) == a (for b != 0).
• % works with floats too: 9.5 % 2 = 1.5.

Expert:
• int.__mod__; result has the same sign as the divisor in Python. Used for wraparound (e.g. index % len) and even/odd checks.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 2 ** 3?", ["8", "6", "9", "Error"], 0, "** is exponentiation.", `2 ** 3 = 8 (2 to the power of 3).

Beginner:
• 2 ** 3 means 2 multiplied by itself 3 times: 2*2*2 = 8.
• ** is the exponentiation operator (power).

Intermediate:
• 2 ** 3 = 8. 2 ** 0 = 1 (any number to the power 0 is 1). 2 ** -1 = 0.5.
• ** is right-associative: 2 ** 3 ** 2 = 2 ** (3**2) = 2 ** 9 = 512.

Expert:
• int.__pow__ or float.__pow__; pow(2, 3) is equivalent. For pow(a, b, m) see modular exponentiation.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What does print(5) display?", ["5", "print(5)", "None", "Error"], 0, "print(5) shows 5 on screen.", `print(5) outputs 5 to the console.

Beginner:
• print(5) displays the number 5 (without quotes). What you see is: 5
• print() is how you show values when running a program.

Intermediate:
• print() writes to standard output (usually the terminal). It converts the value to a string for display.
• print(5) returns None; the 5 is a side effect (output). You can pass multiple arguments: print(1, 2) prints "1 2".

Expert:
• print(*objects, sep=' ', end='\\n', file=sys.stdout, flush=False). print is a built-in function; it does not return the value printed.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What does print('hi') display?", ["hi", "'hi'", "print('hi')", "Error"], 0, "print('hi') shows hi without quotes.", `print('hi') displays hi (without the quotes).

Beginner:
• print('hi') shows the word hi on screen. The quotes are not printed—they just mark the string in code.
• So you see: hi

Intermediate:
• print() outputs the string's content. For 'hi', it prints the two characters h and i.
• To print the quotes, use print("'hi'") or print('"hi"'). print('hi', 'there') prints "hi there" with a space.

Expert:
• print sends the string representation to sys.stdout. The repr() of a string includes quotes; print uses the string value itself.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["Which is a valid variable name?", ["my_var", "2nd", "my-var", "class"], 0, "Names can use letters, numbers, underscore; cannot start with a number.", `my_var is valid; 2nd and my-var are not.

Beginner:
• Variable names can contain letters, digits, and underscores, but cannot start with a digit.
• my_var is valid. 2nd is invalid (starts with number); my-var is invalid (hyphen not allowed); class is a keyword.

Intermediate:
• Python identifiers must follow these rules. Keywords like class, if, for cannot be used as names.
• Use descriptive names: my_var not x. Convention: snake_case for variables.

Expert:
• See the language reference for full identifier syntax. Unicode letters are allowed in names. Reserved keywords are fixed.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["Which is NOT a valid variable name?", ["first name", "first_name", "firstName", "firstname"], 0, "Spaces are not allowed in variable names.", `first name has a space.

Beginner:
• "first name" contains a space. Spaces are not allowed in variable names.
• first_name, firstName, and firstname are all valid (underscore or no separator).

Intermediate:
• Identifiers cannot contain spaces. Use first_name or firstName instead.
• If you need multiple words, join them with _ (snake_case) or use camelCase.

Expert:
• Lexical analysis: identifiers are a continuous sequence of allowed characters. A space terminates the token.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is x after x = 7?", ["7", "x", "None", "Error"], 0, "Assignment stores the value in the variable.", `x = 7 assigns 7 to x.

Beginner:
• After x = 7, the variable x holds the value 7. So "x" now means 7 in expressions.
• Assignment uses = (one equals sign). It does not mean "equals" in the math sense here.

Intermediate:
• x = 7 binds the name x to the object 7. The assignment itself evaluates to None (but we use it for its side effect).
• You can reassign: x = 8; now x is 8. Variables are just names for values.

Expert:
• Assignment is a statement; it does not return a value. Reference binding: the name x references the int object 7.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is the result of 0 + 0?", ["0", "00", "None", "Error"], 0, "0 + 0 = 0.", `Adding zeros: 0 + 0 = 0.

Beginner:
• Zero plus zero is zero. 0 + 0 = 0. Both are integers, so the result is 0 (int).
• Same as in math.

Intermediate:
• 0 + 0 = 0. type(0) is int. The identity for addition is 0: x + 0 == x for any number x.
• Useful in loops when you start a sum at 0 and add to it.

Expert:
• int.__add__(0, 0) returns 0. Zero is the additive identity. For floats, 0.0 + 0.0 = 0.0.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 1 * 0?", ["0", "1", "None", "Error"], 0, "Any number times 0 is 0.", `1 * 0 = 0.

Beginner:
• Any number multiplied by 0 is 0. So 1 * 0 = 0. This is true in math and in Python.
• The * operator is multiplication.

Intermediate:
• 1 * 0 = 0. type(0) is int. Zero is the "absorbing" element for multiplication: x * 0 = 0 for any number x.
• Useful when initializing products or when a count is zero.

Expert:
• int.__mul__; multiplication by zero short-circuits to zero. For sequences, [] * n or '' * n gives empty sequence.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 5 - 5?", ["0", "10", "5", "Error"], 0, "5 - 5 = 0.", `5 - 5 = 0.

Beginner:
• 5 minus 5 is 0. When you subtract a number from itself, you get 0.
• The result is an integer.

Intermediate:
• 5 - 5 = 0. Subtracting a number from itself always gives 0 (the additive inverse property).
• Useful for checking if two values are equal (a - b == 0 means a == b for numbers).

Expert:
• int.__sub__; x - x = 0 for any numeric x. For floats, 5.0 - 5.0 = 0.0.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 8 // 4?", ["2", "2.0", "4", "Error"], 0, "Integer division: 8 // 4 = 2.", `8 // 4 = 2 (floor division).

Beginner:
• 8 divided by 4 is 2 with no remainder. // gives the whole-number part: 8 // 4 = 2.
• // is integer (floor) division; the result is an int when both operands are ints.

Intermediate:
• 8 // 4 = 2. 8 % 4 = 0 (no remainder). So 8 = 2*4 + 0.
• For positive numbers, // truncates toward zero. For negative numbers, it floors toward negative infinity.

Expert:
• int.__floordiv__; (a // b) * b + (a % b) == a when b != 0. Result type matches the operands.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 7 % 4?", ["3", "1", "2", "Error"], 0, "Remainder when 7 is divided by 4.", `7 % 4 = 3 (remainder).

Beginner:
• When you divide 7 by 4, you get 1 with 3 left over. % gives that remainder: 7 % 4 = 3.
• So 7 = 1*4 + 3. The remainder is what's left after dividing.

Intermediate:
• 7 // 4 = 1 and 7 % 4 = 3. The relationship: 7 = (7//4)*4 + (7%4).
• divmod(7, 4) returns (1, 3) in one call. Useful for wrapping indices: index % length.

Expert:
• int.__mod__; Python's % sign follows the divisor. Used for cyclic patterns and even/odd (n % 2).

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 3 ** 2?", ["9", "6", "8", "Error"], 0, "3 squared is 9.", `3 ** 2 = 9 (3 squared).

Beginner:
• 3 ** 2 means 3 to the power of 2, or 3 squared: 3*3 = 9.
• ** is the exponentiation operator.

Intermediate:
• 3 ** 2 = 9. 3 ** 0 = 1. 3 ** 1 = 3. For negative exponents: 3 ** -1 = 1/3 (float).
• ** is right-associative: 2 ** 3 ** 2 = 2 ** 9 = 512.

Expert:
• int.__pow__; pow(3, 2) is equivalent. For very large exponents, Python uses efficient algorithms.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is len('')?", ["0", "1", "None", "Error"], 0, "Empty string has length 0.", `len() counts characters; empty string has length 0.

Beginner:
• The empty string '' has no characters, so len('') is 0.
• len() is a built-in that returns the length of a string (or list, tuple, etc.).

Intermediate:
• len('') = 0. The empty string is the identity for concatenation: '' + s == s.
• bool('') is False (empty strings are falsy). So if s: ... skips empty strings.

Expert:
• len() calls __len__; for str it returns the number of Unicode code points. O(1) for built-in types.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is len('A')?", ["1", "0", "A", "Error"], 0, "One character has length 1.", `len('A') = 1.

Beginner:
• 'A' is a string with one character, so len('A') is 1.
• len() counts how many characters are in the string.

Intermediate:
• len('A') = 1. In Python, there is no separate "char" type—single characters are strings of length 1.
• 'A'[0] returns 'A'; indexing a string returns a string (of length 1).

Expert:
• str.__len__ returns the number of elements in the sequence. For ASCII, one char = one byte; for Unicode, one "character" may be one or more code points.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is len('AB')?", ["2", "1", "AB", "Error"], 0, "Two characters have length 2.", `len('AB') = 2.

Beginner:
• 'AB' has two characters (A and B), so len('AB') is 2.
• len() returns the number of characters in the string.

Intermediate:
• len('AB') = 2. 'AB'[0] is 'A', 'AB'[1] is 'B'. Indices go from 0 to len-1.
• Strings are sequences; len works on any sequence (list, tuple, range, etc.).

Expert:
• len('AB') is 2; each index 0 and 1 is valid. Negative indices: 'AB'[-1] is 'B', 'AB'[-2] is 'A'.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is len([])?", ["0", "1", "None", "Error"], 0, "Empty list has length 0.", `len([]) = 0.

Beginner:
• The empty list [] has no elements, so len([]) is 0.
• len() works on lists too—it returns the number of items in the list.

Intermediate:
• len([]) = 0. bool([]) is False (empty list is falsy). You often start with [] and append to it.
• [] is the identity for list concatenation: [] + L == L.

Expert:
• list.__len__; O(1) for lists (length is stored). Empty list is a singleton in some contexts.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is len([5])?", ["1", "0", "5", "Error"], 0, "One item in the list.", `len([5]) = 1.

Beginner:
• [5] is a list with one element (the number 5), so len([5]) is 1.
• The list has one item, so its length is 1.

Intermediate:
• len([5]) = 1. [5][0] is 5. Index 0 is the first (and only) element.
• A list can hold any type; here the single element is an int.

Expert:
• list.__len__ returns the number of elements. [5] is a list of one int; len is 1 regardless of the value.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is len([1, 2])?", ["2", "1", "3", "Error"], 0, "Two items in the list.", `len([1, 2]) = 2.

Beginner:
• [1, 2] is a list with two elements, so len([1, 2]) is 2.
• len() counts the number of items in the list.

Intermediate:
• len([1, 2]) = 2. Valid indices are 0 and 1. [1, 2][0] is 1, [1, 2][1] is 2.
• Lists are ordered and mutable; you can change, append, or remove elements.

Expert:
• list.__len__; length is stored, so len() is O(1). The list contains references to two int objects.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is bool(0)?", ["False", "True", "0", "Error"], 0, "0 is falsy in Python.", `bool(0) is False.

Beginner:
• In Python, 0 is considered "falsy"—so bool(0) is False. Used in conditions: if 0: never runs.
• Only a few values are falsy: 0, 0.0, '', [], {}, None, False.

Intermediate:
• bool(0) is False. Truthiness is used in if x: and while x:. So if 0: ... is False, the block is skipped.
• For numbers, zero is falsy; all other numbers are truthy.

Expert:
• bool calls __bool__ (or __len__ for some types). 0 is one of the built-in falsy values. Use "if x is None" when you mean None specifically.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is bool(1)?", ["True", "False", "1", "Error"], 0, "Non-zero numbers are truthy.", `bool(1) is True.

Beginner:
• Non-zero numbers are "truthy" in Python. So bool(1) is True. So are bool(2), bool(-1), bool(3.14).
• Used in conditions: if 1: always runs (the condition is True).

Intermediate:
• bool(1) is True. In fact, bool is a subclass of int, and True has value 1. So True == 1 is True (value equality).
• For numbers, only 0 (and 0.0) are falsy; everything else is truthy.

Expert:
• int.__bool__ returns False for 0, True otherwise. True and 1 are equal in value but type(True) is bool.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is bool('')?", ["False", "True", "''", "Error"], 0, "Empty string is falsy.", `bool('') is False.

Beginner:
• The empty string '' is falsy in Python. So bool('') is False. So if '': ... never runs.
• Non-empty strings like 'a' or 'hello' are truthy.

Intermediate:
• bool('') is False. This is useful: if user_input: ... skips empty input. if s: process(s) only runs for non-empty s.
• Empty sequence/collection types are generally falsy: '', [], {}, () (and 0, None, False).

Expert:
• str.__bool__ (or __len__) — empty string has length 0, so it's falsy. Use "if not s" to check for empty string.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is bool('a')?", ["True", "False", "1", "Error"], 0, "Non-empty string is truthy.", `bool('a') is True.

Beginner:
• Any non-empty string is "truthy". So bool('a') is True. So is bool('hello'), bool(' ').
• Only the empty string '' is falsy; every other string is truthy.

Intermediate:
• bool('a') is True. So if s: ... runs when s has at least one character. Useful for validating non-empty input.
• Even a string of spaces '   ' is truthy (it's not empty).

Expert:
• str.__bool__ returns True when len(s) > 0. So any string with one or more characters is truthy.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is int(2.9)?", ["2", "3", "2.0", "Error"], 0, "int() truncates toward zero.", `int(2.9) = 2.

Beginner:
• int(2.9) cuts off the decimal part and gives 2. So 2.9 becomes 2 (truncation toward zero).
• int() converts a value to an integer. It does not round: int(2.9) is 2, not 3.

Intermediate:
• int(2.9) = 2. For positive numbers, int() truncates (floor). For negative: int(-2.9) = -2 (truncates toward zero).
• So int() truncates toward zero; // (floor division) floors toward negative infinity for negatives.

Expert:
• int() truncates toward zero; for float x, int(x) is the same as x//1 for positive x. Use math.floor or math.ceil when you need different rounding.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is float(3)?", ["3.0", "3", "3.00", "Error"], 0, "float(3) gives 3.0.", `Converts int to float: float(3) = 3.0.

Beginner:
• float(3) turns the integer 3 into the float 3.0. You get a number with a decimal point.
• Use float() when you need a decimal number (e.g. for division or math that expects floats).

Intermediate:
• float(3) = 3.0. type(3.0) is float. Mixing int and float in expressions promotes to float.
• float('3.14') also works—it parses a string to a float. Invalid strings raise ValueError.

Expert:
• float() with one argument converts to float; with two arguments (e.g. float(1, 2)) it's not valid. float from int is exact for integers within precision.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is str(42)?", ["'42'", "42", "42.0", "Error"], 0, "str(42) is the string '42'.", `Converts number to string: str(42) = '42'.

Beginner:
• str(42) turns the number 42 into the string '42' (the character 4 and the character 2).
• You need this when you want to combine numbers with text or print them in a message.

Intermediate:
• str(42) = '42'. So "The answer is " + str(42) gives "The answer is 42". print() does this conversion automatically.
• str() works on any type; it returns a human-readable representation.

Expert:
• str() calls __str__; for int it returns the decimal representation. For custom classes, define __str__ for readable output. repr() often gives a more technical representation.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 4 + 5?", ["9", "45", "1", "Error"], 0, "4 + 5 = 9.", `4 + 5 = 9.

Beginner:
• 4 plus 5 is 9. Both are integers, so the result is 9 (an int).
• The + operator adds two numbers.

Intermediate:
• 4 + 5 = 9. type(9) is int. Addition is commutative: 4+5 == 5+4.
• For strings, + concatenates: '4' + '5' = '45' (different from 4 + 5).

Expert:
• int.__add__; result is int. For int + float, the int is promoted to float and the result is float.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 6 - 2?", ["4", "8", "12", "Error"], 0, "6 - 2 = 4.", `6 - 2 = 4.

Beginner:
• 6 minus 2 is 4. Subtraction gives the difference between two numbers.
• The result is an integer.

Intermediate:
• 6 - 2 = 4. Subtraction is not commutative: 6-2 != 2-6. Negative results: 2 - 6 = -4.
• The - operator is also unary minus: -(-2) = 2.

Expert:
• int.__sub__; for mixed types, result is float. Subtraction is the inverse of addition.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 3 * 3?", ["9", "6", "33", "Error"], 0, "3 * 3 = 9.", `3 * 3 = 9.

Beginner:
• 3 times 3 is 9. The * operator multiplies two numbers. Both are ints, so the result is 9 (int).
• Same as 3 squared: 3 ** 2 = 9.

Intermediate:
• 3 * 3 = 9. For sequences, * repeats: 'a' * 3 = 'aaa', [1] * 3 = [1, 1, 1].
• type(3*3) is int. 3 * 3.0 = 9.0 (float).

Expert:
• int.__mul__; for int * int the result is int. For str * int or list * int, the sequence is repeated (int must be non-negative).

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 12 / 4?", ["3.0", "3", "4.0", "Error"], 0, "12 / 4 = 3.0 (float).", `Division returns float: 12 / 4 = 3.0.

Beginner:
• 12 divided by 4 is 3, but in Python 3 the / operator gives 3.0 (a float), not 3.
• Even when the result is a whole number, / gives a float.

Intermediate:
• 12 / 4 = 3.0. For integer division use 12 // 4 = 3. So / is "true division", // is "floor division".
• This avoids confusion: / always means "divide and get a float" in Python 3.

Expert:
• float.__truediv__; int/int in Python 3 returns float. Use // when you need an integer quotient.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 15 // 4?", ["3", "3.75", "4", "Error"], 0, "15 // 4 = 3 (floor division).", `15 // 4 = 3 (floor division).

Beginner:
• 15 divided by 4 is 3 with remainder 3. // gives the quotient: 15 // 4 = 3.
• It drops the decimal part (or "floors" the result). So you get a whole number.

Intermediate:
• 15 // 4 = 3 and 15 % 4 = 3. So 15 = 3*4 + 3. divmod(15, 4) returns (3, 3).
• For negative numbers, // floors toward negative infinity: -15 // 4 = -4.

Expert:
• int.__floordiv__; (a // b) * b + (a % b) == a when b != 0. Result type matches the operands.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 5 % 2?", ["1", "2", "0", "Error"], 0, "5 % 2 = 1 (remainder).", `5 % 2 = 1 (modulo / remainder).

Beginner:
• When you divide 5 by 2, you get 2 with remainder 1. % gives that remainder: 5 % 2 = 1.
• So 5 = 2*2 + 1. Very useful for even/odd: n % 2 is 0 for even, 1 for odd.

Intermediate:
• 5 // 2 = 2 and 5 % 2 = 1. The identity: (5//2)*2 + (5%2) = 5.
• Used for wraparound: index % length keeps an index in range. Also for cycles (e.g. days of the week).

Expert:
• int.__mod__; Python's % sign follows the divisor. For negative numbers, result sign matches divisor. Used in hashing and cyclic patterns.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 10 ** 0?", ["1", "0", "10", "Error"], 0, "Any number to the power 0 is 1.", `10 ** 0 = 1.

Beginner:
• Any non-zero number to the power 0 is 1. So 10 ** 0 = 1. Same for 5**0, 100**0, etc.
• This is a math rule that Python follows.

Intermediate:
• 10 ** 0 = 1. By convention, a**0 = 1 for any non-zero a. 0**0 is a special case (in Python it's 1, but mathematically it's undefined in some contexts).
• So 10**0 = 1, 10**1 = 10, 10**2 = 100.

Expert:
• int.__pow__; for a**0 Python returns 1 for all a (including 0**0 = 1 in Python). Mathematically, 0**0 is sometimes defined as 1 for convenience.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is -(-2)?", ["2", "-2", "0", "Error"], 0, "Negative of -2 is 2.", `Double negative: -(-2) = 2.

Beginner:
• The negative of -2 is 2. So -(-2) = 2. The outer minus "flips" the sign.
• Like in math: minus times minus gives plus.

Intermediate:
• -(-2) = 2. Unary minus is an operator: -x returns the opposite of x. So -(-2) is the opposite of -2, which is 2.
• Useful when you have a variable that might be negative and you want the positive value (or use abs()).

Expert:
• int.__neg__; unary minus returns the additive inverse. -(-x) == x for any numeric x. No overflow for Python int.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is abs(-7)?", ["7", "-7", "0", "Error"], 0, "abs() gives the absolute value.", `abs(-7) = 7.

Beginner:
• abs(-7) gives 7—the "absolute value" (distance from zero, always non-negative). So abs(-7) = 7, abs(7) = 7.
• Use abs() when you want to ignore the sign (e.g. distance or magnitude).

Intermediate:
• abs(-7) = 7. abs(0) = 0. For any number, abs(x) is x if x >= 0, and -x if x < 0.
• Works with int and float. For complex numbers, abs() returns the magnitude.

Expert:
• abs() calls __abs__; for int and float it's the mathematical absolute value. For complex, abs(a+bj) = sqrt(a**2 + b**2).

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is min(5, 3)?", ["3", "5", "4", "Error"], 0, "min() returns the smaller value.", `min(5, 3) = 3.

Beginner:
• min(5, 3) returns the smaller of the two numbers: 3. So min(5, 3) = 3.
• min() can take two or more arguments: min(5, 3, 8) = 3.

Intermediate:
• min(5, 3) = 3. You can also use min() on a sequence: min([5, 3, 8]) = 3. With an empty sequence, min() raises ValueError.
• Works with any comparable types (numbers, strings by lexicographic order).

Expert:
• min() can take a key function: min([-1, 2, -3], key=abs) = -1. Default is identity. For multiple args, returns the smallest; for one iterable, returns the smallest element.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is max(5, 3)?", ["5", "3", "4", "Error"], 0, "max() returns the larger value.", `max(5, 3) = 5.

Beginner:
• max(5, 3) returns the larger of the two numbers: 5. So max(5, 3) = 5.
• max() can take two or more arguments: max(5, 3, 8) = 8.

Intermediate:
• max(5, 3) = 5. You can use max() on a sequence: max([5, 3, 8]) = 8. Empty sequence raises ValueError.
• Works with any comparable types. For strings, comparison is lexicographic.

Expert:
• max() can take a key function: max([-1, 2, -3], key=abs) = -3. Default is identity. For one iterable, returns the largest element.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is round(2.4)?", ["2", "2.0", "3", "Error"], 0, "round(2.4) = 2 (rounds down here).", `round(2.4) = 2.

Beginner:
• round(2.4) rounds 2.4 to the nearest integer. Since 2.4 is closer to 2 than to 3, the result is 2.
• round() gives you the nearest whole number. So round(2.4) = 2, round(2.6) = 3.

Intermediate:
• round(2.4) = 2. Python uses "banker's rounding" (round half to even): round(2.5) = 2, round(3.5) = 4.
• round() can take a second argument (number of decimal places): round(2.456, 2) = 2.46.

Expert:
• round() uses round half to even to reduce bias. round(2.4) returns 2 (int when no second arg). For Decimal, rounding modes can be specified.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is round(2.6)?", ["3", "2", "2.0", "Error"], 0, "round(2.6) = 3.", `round(2.6) = 3.

Beginner:
• round(2.6) rounds 2.6 to the nearest integer. Since 2.6 is closer to 3 than to 2, the result is 3.
• So round(2.6) = 3. When the decimal part is .5 or more, we round up (except for the banker's rounding special case).

Intermediate:
• round(2.6) = 3. For 2.5, Python rounds to the nearest even number: round(2.5) = 2, round(3.5) = 4.
• round(x, n) rounds to n decimal places: round(2.678, 2) = 2.68.

Expert:
• round(2.6) returns 3 (int). Banker's rounding: round half to even. So 0.5 rounds to 0 or 2 depending on the integer part. Reduces cumulative rounding bias.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 'a' + 'b'?", ["'ab'", "'a b'", "'ba'", "Error"], 0, "Strings concatenate with +.", `'a' + 'b' = 'ab'.

Beginner:
• Adding two strings with + joins them together. So 'a' + 'b' gives 'ab' (one string: a then b).
• This is called concatenation. The strings are not separated by a space unless you add one.

Intermediate:
• 'a' + 'b' = 'ab'. Strings are immutable, so + creates a new string. For many concatenations, join() is more efficient.
• You can chain: 'a' + 'b' + 'c' = 'abc'. Only strings can be concatenated with + (no string + int without converting).

Expert:
• str.__add__; each + creates a new string object. For building long strings in a loop, use a list and str.join() to avoid O(n^2) behavior.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 'x' * 2?", ["'xx'", "'x x'", "2", "Error"], 0, "String times number repeats the string.", `'x' * 2 = 'xx'.

Beginner:
• When you multiply a string by a number, the string is repeated that many times. So 'x' * 2 = 'xx'.
• The number must be a non-negative integer. 'x' * 0 = ''.

Intermediate:
• 'x' * 2 = 'xx'. So 'ab' * 3 = 'ababab'. Useful for padding or building repeated patterns.
• list * int also works: [1, 2] * 2 = [1, 2, 1, 2]. The sequence is repeated, not the elements multiplied.

Expert:
• str.__mul__; the int must be >= 0 (negative gives ''). For sequences, * with int repeats the sequence; it's shallow (same references).

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is [1] + [2]?", ["[1, 2]", "[3]", "[2, 1]", "Error"], 0, "Lists concatenate with +.", `[1] + [2] = [1, 2].

Beginner:
• Adding two lists with + joins them into one list. So [1] + [2] gives [1, 2] (one list with two elements).
• The order is preserved: first list first, then the second list.

Intermediate:
• [1] + [2] = [1, 2]. Lists are mutable, but + creates a new list (it doesn't change the original lists).
• Like strings, + concatenates. So [1, 2] + [3, 4] = [1, 2, 3, 4]. For in-place extend, use .extend().

Expert:
• list.__add__ returns a new list; the two operands are unchanged. For repeated concatenation in a loop, extend() or += is more efficient than repeated +.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 'hi'[0]?", ["'h'", "'i'", "0", "Error"], 0, "Index 0 is the first character.", `'hi'[0] = 'h'.

Beginner:
• Index 0 means the first character. So 'hi'[0] is 'h'. In Python, indexing starts at 0, not 1.
• You use square brackets after the string to get one character. The result is still a string (of length 1).

Intermediate:
• 'hi'[0] = 'h', 'hi'[1] = 'i'. Valid indices are 0 to len-1. Index out of range raises IndexError.
• There is no separate "char" type in Python; 'h' is a string of length 1.

Expert:
• str.__getitem__; indexing returns a str of length 1. For bytes, indexing returns an int (0-255). Negative indices: 'hi'[-1] = 'i'.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 'hi'[1]?", ["'i'", "'h'", "1", "Error"], 0, "Index 1 is the second character.", `'hi'[1] = 'i'.

Beginner:
• Index 1 means the second character. So 'hi'[1] is 'i'. Index 0 is first, index 1 is second.
• The result is the string 'i' (one character). So len('hi'[1]) is 1.

Intermediate:
• 'hi' has length 2, so valid indices are 0 and 1. 'hi'[2] would raise IndexError.
• You can use negative indices: 'hi'[-1] is the last character ('i'), 'hi'[-2] is the second-to-last ('h').

Expert:
• Sequence indexing; index 1 is the second element. Slicing 'hi'[1:2] also gives 'i'. IndexError for out-of-range.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 'hi'[-1]?", ["'i'", "'h'", "-1", "Error"], 0, "Index -1 is the last character.", `'hi'[-1] = 'i' (negative index: last character).

Beginner:
• Index -1 means the last character. So 'hi'[-1] is 'i'. -2 would be the second-to-last, and so on.
• Negative indices count from the end: -1 is last, -2 is second-to-last. Very useful when you don't know the length.

Intermediate:
• 'hi'[-1] = 'i', 'hi'[-2] = 'h'. So for a string of length n, index -1 is the same as index n-1.
• Works for any sequence: lists, tuples. So [10, 20, 30][-1] = 30.

Expert:
• Negative indices are converted to positive: -1 becomes len(s)-1. So s[-1] is s[len(s)-1]. No special type for "last".

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is [10, 20][0]?", ["10", "20", "0", "Error"], 0, "First element of the list.", `[10, 20][0] = 10.

Beginner:
• Index 0 is the first element. So [10, 20][0] is 10. The list has two elements: 10 at index 0, 20 at index 1.
• Same as strings: indexing starts at 0. The result is the value stored in the list (here an int).

Intermediate:
• [10, 20][0] = 10, [10, 20][1] = 20. You can assign: L = [10, 20]; x = L[0]; then x is 10.
• Lists are mutable: L[0] = 99 would change the first element to 99.

Expert:
• list.__getitem__; indexing returns the object at that position (by reference). Assignment L[i] = x mutates the list.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is [10, 20][1]?", ["20", "10", "1", "Error"], 0, "Second element of the list.", `[10, 20][1] = 20.

Beginner:
• Index 1 is the second element. So [10, 20][1] is 20. First element is index 0, second is index 1.
• The list has length 2, so valid indices are 0 and 1.

Intermediate:
• [10, 20][1] = 20. Negative index: [10, 20][-1] = 20 (last), [10, 20][-2] = 10 (second-to-last).
• Indexing works the same for lists, tuples, and strings (all sequences).

Expert:
• Sequence indexing; O(1) for list. The returned value is the object at that index (reference, not copy for mutable elements).

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 2 == 2?", ["True", "False", "1", "Error"], 0, "== checks equality.", `2 == 2 is True.

Beginner:
• == checks if two values are equal. So 2 == 2 is True (they are equal). The result is a boolean (True or False).
• One = is assignment (x = 2); two == is comparison (is 2 equal to 2?).

Intermediate:
• 2 == 2 is True. == can compare any types: 2 == 2.0 is True (value equality). 'hi' == 'hi' is True.
• Use == for value equality. Use "is" for identity (same object in memory)—e.g. x is None.

Expert:
• == calls __eq__; default is identity for object, but int/float/str override for value equality. 2 == 2.0 is True; type(2) != type(2.0).

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 2 == 3?", ["False", "True", "0", "Error"], 0, "2 is not equal to 3.", `2 == 3 is False.

Beginner:
• 2 and 3 are not equal, so 2 == 3 is False. The == operator compares two values and returns True or False.
• So the result is the boolean False.

Intermediate:
• 2 == 3 is False. Use != for "not equal": 2 != 3 is True. So if x == 3: runs only when x is 3.
• Comparison operators return bool. Chaining is allowed: 1 < 2 < 3 is True (same as 1 < 2 and 2 < 3).

Expert:
• __eq__ returns False. For custom classes, define __eq__ for meaningful equality. Don't use == to compare to None; use "is None".

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 2 != 3?", ["True", "False", "1", "Error"], 0, "!= is 'not equal'.", `2 != 3 is True.

Beginner:
• != means "not equal". So 2 != 3 is True (2 is not equal to 3). The result is a boolean.
• So != is the opposite of ==: when == is False, != is True, and vice versa.

Intermediate:
• 2 != 3 is True. So 2 != 2 is False. Use != when you want to check "is not equal".
• Same as not (2 == 3). For "not None", prefer "x is not None" over "x != None".

Expert:
• != calls __ne__; default is not __eq__. So a != b is typically not (a == b). Override __eq__ and __ne__ together for consistency.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 2 < 3?", ["True", "False", "1", "Error"], 0, "2 is less than 3.", `2 < 3 is True.

Beginner:
• < means "less than". So 2 < 3 is True (2 is less than 3). The result is a boolean.
• So 2 < 3 is True, 3 < 2 is False. Works for numbers (int and float).

Intermediate:
• 2 < 3 is True. Comparison operators: <, <=, >, >=. They return True or False. You can chain: 1 < 2 < 3.
• For strings, < uses lexicographic (dictionary) order: 'a' < 'b' is True.

Expert:
• int.__lt__; rich comparison. For mixed int and float, they compare by value. Chained comparisons (a < b < c) are evaluated as a < b and b < c (b evaluated once).

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 3 > 2?", ["True", "False", "1", "Error"], 0, "3 is greater than 2.", `3 > 2 is True.

Beginner:
• > means "greater than". So 3 > 2 is True (3 is greater than 2). The result is a boolean.
• So 3 > 2 is True, 2 > 3 is False. Same idea as < but the other way.

Intermediate:
• 3 > 2 is True. So 2 > 2 is False. For "greater than or equal" use >=: 3 >= 2 is True, 2 >= 2 is True.
• Works for any comparable types (numbers, strings by order).

Expert:
• int.__gt__; part of rich comparison. For sorting, key functions can transform values before comparison.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 2 <= 2?", ["True", "False", "1", "Error"], 0, "<= means less than or equal.", `2 <= 2 is True.

Beginner:
• <= means "less than or equal". So 2 <= 2 is True (2 is equal to 2, so "equal" counts). 2 <= 3 is also True.
• So whenever the two are equal, <= and >= are both True.

Intermediate:
• 2 <= 2 is True. So <= includes equality. So 2 <= 2 and 2 >= 2 are both True. 2 < 2 is False.
• Useful for ranges: 0 <= i < len(L) checks that i is a valid index for list L.

Expert:
• int.__le__; a <= b is equivalent to (a < b) or (a == b). For consistency, implement all of <, <=, >, >=, ==, != together.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 3 >= 3?", ["True", "False", "1", "Error"], 0, ">= means greater than or equal.", `3 >= 3 is True.

Beginner:
• >= means "greater than or equal". So 3 >= 3 is True (3 is equal to 3). 4 >= 3 is also True.
• So >= is True when the first is greater than or equal to the second.

Intermediate:
• 3 >= 3 is True. So 2 >= 3 is False. Combined with < you get ranges: 0 <= x < 10 means x in 0..9.
• Chaining: 1 <= 2 <= 3 is True. So 1 <= 2 and 2 <= 3.

Expert:
• int.__ge__; a >= b is (a > b) or (a == b). For sorting and bounds checking, <= and >= are standard.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is not False?", ["True", "False", "None", "Error"], 0, "not flips the boolean.", `not False is True.

Beginner:
• not flips a boolean: not False is True, not True is False. So the "opposite" of False is True.
• Use not in conditions: if not done: ... runs when done is False.

Intermediate:
• not is a logical operator. not x is True when x is falsy (False, 0, '', [], None, etc.).
• So not 0 is True, not '' is True. not returns a boolean (True or False).

Expert:
• not has lower precedence than comparison; so not a == b is not (a == b). not is a unary operator; use "is not" for identity.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is not True?", ["False", "True", "None", "Error"], 0, "not True is False.", `not inverts the value: not True is False.

Beginner:
• not True is False. The not operator gives the opposite boolean. So not True is False.
• Same as "not True": the result is False.

Intermediate:
• not True is False. So if not condition: ... runs when condition is False. not is useful for flipping a check.
• not always returns a bool (True or False). So not 5 is False (5 is truthy).

Expert:
• not calls __bool__ then inverts. So not x is equivalent to False if x else True. Precedence: not a and b is (not a) and b.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is True and True?", ["True", "False", "None", "Error"], 0, "Both must be True for and.", `True and True = True.

Beginner:
• and is True only when both sides are True. So True and True is True. True and False is False.
• Think "both must be true". So True and True = True.

Intermediate:
• True and True = True. and short-circuits: if the first is False, the second is not evaluated. So False and (anything) is False.
• For non-boolean values, and returns the first falsy or the last value: 3 and 4 is 4 (both truthy, return last).

Expert:
• and returns the first falsy operand or the last operand. So 0 and 5 is 0; 3 and 4 is 4. Short-circuit evaluation: second operand not evaluated if first is falsy.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is True and False?", ["False", "True", "None", "Error"], 0, "And is False if one is False.", `True and False = False.

Beginner:
• and is True only when both are True. So True and False is False (one is False).
• So "both must be true" — if one is False, the whole thing is False.

Intermediate:
• True and False = False. and short-circuits: True and False evaluates the second (False) and returns it.
• So and returns the first falsy value, or the last if all are truthy. So True and False returns False.

Expert:
• and returns the first falsy or the last. So True and False is False (the first falsy). Used for guard clauses: x and x.method().

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is True or False?", ["True", "False", "None", "Error"], 0, "Or is True if one is True.", `True or False = True.

Beginner:
• or is True if at least one side is True. So True or False is True (the first is True).
• Think "either one true". So True or False = True.

Intermediate:
• True or False = True. or short-circuits: if the first is True, the second is not evaluated. So True or (anything) is True.
• For non-boolean values, or returns the first truthy or the last: 0 or 5 is 5 (first is falsy, return second).

Expert:
• or returns the first truthy operand or the last. So True or False is True (first truthy). 0 or 5 is 5. Short-circuit: second not evaluated if first is truthy.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is False or False?", ["False", "True", "None", "Error"], 0, "Both must be False for or to be False.", `False or False = False.

Beginner:
• or is True if at least one is True. So False or False is False (both are False).
• So "either one true" — if both are False, the result is False.

Intermediate:
• False or False = False. Both operands are evaluated (no short-circuit on the first). Returns the last value (False).
• So or returns the first truthy or the last. Here both are falsy, so the result is the last: False.

Expert:
• or returns the first truthy or the last. False or False returns False (no truthy, so last). Used for defaults: x = user_input or "default".

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 1 + 2 * 3?", ["7", "9", "5", "Error"], 0, "Multiplication before addition.", `2*3=6, 1+6=7. Operator precedence.

Beginner:
• Multiplication is done before addition. So 2*3 is 6, then 1+6 is 7. So 1 + 2 * 3 = 7.
• This is the usual "order of operations" from math (PEMDAS).

Intermediate:
• * has higher precedence than +. So 1 + 2 * 3 = 1 + (2*3) = 1 + 6 = 7. Not (1+2)*3 = 9.
• Use parentheses to change order: (1 + 2) * 3 = 9.

Expert:
• Python follows standard precedence; * and / before + and -. So 1+2*3 is 7. Use parentheses for clarity when in doubt.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is (1 + 2) * 3?", ["9", "7", "6", "Error"], 0, "Parentheses first.", `(1+2)*3 = 3*3 = 9.

Beginner:
• Parentheses are done first. So (1+2) is 3, then 3*3 is 9. So (1 + 2) * 3 = 9.
• Parentheses override the normal order (multiplication before addition).

Intermediate:
• (1+2)*3 = 3*3 = 9. Without parentheses, 1+2*3 would be 7. So parentheses change the result.
• Use () whenever you want to force a different order of evaluation.

Expert:
• Parentheses have the highest precedence. So (1+2)*3 evaluates the subexpression first. Essential for readability and correct logic.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 10 / 2?", ["5.0", "5", "5.00", "Error"], 0, "Division gives float.", `10 / 2 = 5.0.

Beginner:
• In Python 3, division with / always gives a float. So 10 / 2 = 5.0 (not 5).
• Even when the result is a whole number, you get a float.

Intermediate:
• 10 / 2 = 5.0. For an integer result use 10 // 2 = 5. So / is "true division", // is "floor division".
• type(5.0) is float. So 10/2 is 5.0, and 10//2 is 5.

Expert:
• In Python 3, / is always float division. int/int returns float. Use // for integer quotient. So 10/2 is 5.0.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 10 // 3?", ["3", "3.0", "4", "Error"], 0, "10 // 3 = 3.", `Integer division: 10 // 3 = 3.

Beginner:
• 10 // 3 is 3 (the quotient when you divide 10 by 3). The remainder is 10 % 3 = 1.
• // drops the decimal part; it's floor division. So you get a whole number.

Intermediate:
• 10 // 3 = 3. So 10 = 3*3 + 1. divmod(10, 3) returns (3, 1). For negative numbers, // floors toward negative infinity.
• So 10//3 is 3; -10//3 is -4 (not -3).

Expert:
• int.__floordiv__; (a//b)*b + (a%b) == a when b != 0. Result type matches operands. 10//3 is 3.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 10 % 3?", ["1", "0", "3", "Error"], 0, "10 % 3 = 1 (remainder).", `Modulo: 10 % 3 = 1.

Beginner:
• 10 % 3 is the remainder when you divide 10 by 3. So 10 = 3*3 + 1; the remainder is 1. So 10 % 3 = 1.
• % is called "modulo". Useful for even/odd (n % 2), wraparound (index % length), etc.

Intermediate:
• 10 % 3 = 1. So 10 // 3 = 3 and 10 % 3 = 1. The identity: (10//3)*3 + (10%3) = 10.
• Used for cycles: day % 7 for day of week, index % len(list) for wraparound.

Expert:
• int.__mod__; Python's % sign follows the divisor. So -10 % 3 = 2 (not -1). Used in hashing and cyclic arithmetic.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 'abc'[1:2]?", ["'b'", "'ab'", "'bc'", "Error"], 0, "Slice from index 1 to 2 (exclusive).", `'abc'[1:2] = 'b'. Slice [start:end] is end-exclusive.

Beginner:
• [1:2] means "from index 1 up to but not including index 2". So we get only the character at index 1: 'b'.
• So 'abc'[1:2] is 'b'. The end index 2 is exclusive (not included).

Intermediate:
• Slice [1:2] gives characters from index 1 to 2-1. So one character: 'b'. 'abc'[0:2] would be 'ab'.
• Slicing never raises IndexError; out-of-range gives empty or shorter result. So 'abc'[10:20] = ''.

Expert:
• slice(1, 2); s[1:2] returns s.__getitem__(slice(1, 2)). For str, returns new str. End is exclusive; step defaults to 1.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 'abc'[:2]?", ["'ab'", "'abc'", "'a'", "Error"], 0, "From start to index 2.", `'abc'[:2] = 'ab'. Missing start means 0.

Beginner:
• [:2] means "from the start to index 2 (exclusive)". So from index 0 to 1: 'a' and 'b'. Result: 'ab'.
• Omitting the first number means "from the beginning". So [:2] is the first two characters.

Intermediate:
• 'abc'[:2] = 'ab'. So s[:n] is the first n characters. s[n:] would be from index n to the end.
• Useful for prefixes: 'hello'[:2] = 'he'. Negative indices work in slices: 'abc'[:-1] = 'ab' (all but last).

Expert:
• slice(None, 2); start defaults to 0. So s[:2] is s[0:2]. Same for lists and any sequence. O(n) for slice length.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 'abc'[1:]?", ["'bc'", "'ab'", "'abc'", "Error"], 0, "From index 1 to end.", `'abc'[1:] = 'bc'. Missing end means "to the end".

Beginner:
• [1:] means "from index 1 to the end". So we get the character at index 1 and everything after: 'b' and 'c'. Result: 'bc'.
• Omitting the second number means "to the end of the string". So [1:] is "from index 1 to end".

Intermediate:
• 'abc'[1:] = 'bc'. So s[1:] is "all but the first character". s[:-1] is "all but the last".
• Useful for suffixes and "rest of sequence". Same for lists: [1, 2, 3][1:] = [2, 3].

Expert:
• slice(1, None); end None means len(s). So s[1:] is s[1:len(s)]. Returns new sequence; does not modify original.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is list('ab')?", ["['a', 'b']", "'ab'", "['ab']", "Error"], 0, "list() turns each character into an element.", `list('ab') = ['a', 'b'].

Beginner:
• list('ab') takes the string 'ab' and makes a list where each character is one element. So we get ['a', 'b'].
• So the list has two elements: the string 'a' and the string 'b'. Not one element 'ab'.

Intermediate:
• list() on a string iterates over its characters. So list('ab') = ['a', 'b']. list('hello') = ['h','e','l','l','o'].
• The reverse: ''.join(['a','b']) = 'ab'. So list() and join() convert between str and list of characters.

Expert:
• list(iterable) builds a list from any iterable. For str, iterating yields single-character strings. So list('ab') creates a new list with two elements.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is tuple([1, 2])?", ["(1, 2)", "[1, 2]", "(2, 1)", "Error"], 0, "tuple() converts list to tuple.", `tuple([1, 2]) = (1, 2).

Beginner:
• tuple([1, 2]) takes the list [1, 2] and converts it to a tuple (1, 2). Same elements, but now in a tuple (immutable).
• So (1, 2) is a tuple. You cannot change it after creation (no append, etc.).

Intermediate:
• tuple([1, 2]) = (1, 2). tuple() works on any iterable: tuple('ab') = ('a', 'b'). So list and tuple are related (both sequences).
• Tuples are hashable when their elements are hashable; so (1, 2) can be a dict key. Lists cannot.

Expert:
• tuple(iterable) builds a tuple from the iterable. So tuple([1,2]) creates (1, 2). Tuples are immutable; use for fixed data or dict keys.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is set([1, 1, 2])?", ["{1, 2}", "[1, 2]", "{1, 1, 2}", "Error"], 0, "set() removes duplicates.", `set([1,1,2]) = {1, 2}.

Beginner:
• set() takes the list [1, 1, 2] and makes a set. Sets have no duplicates, so the two 1s become one. Result: {1, 2}.
• So set([1, 1, 2]) = {1, 2}. The set has two elements: 1 and 2. Order is not guaranteed.

Intermediate:
• set() removes duplicates from any iterable. So set([1,1,2]) = {1, 2}. set('hello') = {'h','e','l','o'} (one 'l').
• Sets are unordered and mutable. Use for membership tests (in) and removing duplicates.

Expert:
• set(iterable) builds a set; duplicates are removed (set has unique elements). Hashability required. So set([1,1,2]) = {1, 2}.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is dict()?", ["{}", "[]", "None", "Error"], 0, "dict() creates an empty dictionary.", `dict() = {}.

Beginner:
• dict() creates an empty dictionary. So dict() is the same as {}. It's a dict with no keys or values.
• Use it when you want to start with an empty dict and add key-value pairs later.

Intermediate:
• dict() = {}. So type(dict()) is dict. To create a dict with items: dict(a=1, b=2) or {1: 2, 3: 4}.
• dict() is useful when building a dict in a loop: d = dict(); d['key'] = value.

Expert:
• dict() with no arguments returns a new empty dict. dict is a mapping type; from Python 3.7+ it preserves insertion order.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is list()?", ["[]", "()", "None", "Error"], 0, "list() creates an empty list.", `list() = [].

Beginner:
• list() creates an empty list. So list() is the same as []. It's a list with no elements.
• Use it when you want to start with an empty list and append items later.

Intermediate:
• list() = []. So type(list()) is list. list(iterable) builds a list from an iterable: list((1,2)) = [1, 2].
• Common pattern: result = list(); for x in items: result.append(f(x)). Or use a list comprehension.

Expert:
• list() with no arguments returns a new empty list. list(iterable) consumes the iterable and builds a list. O(n) for length n.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is int('9')?", ["9", "'9'", "9.0", "Error"], 0, "int() converts a numeric string to int.", `int('9') = 9.

Beginner:
• int('9') converts the string '9' to the integer 9. So you get the number 9, not the character '9'.
• Use this when you read input (which is usually a string) and need a number for math.

Intermediate:
• int('9') = 9. int('42') = 42. Leading/trailing spaces are allowed: int('  9  ') = 9. Invalid strings raise ValueError.
• int('9', 10) is base 10 (default). int('ff', 16) = 255. So you can parse different number bases.

Expert:
• int(string, base=10) parses a string to an int. ValueError for invalid input. Optional base 2-36. So int('9') = 9.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is float('1.5')?", ["1.5", "1", "'1.5'", "Error"], 0, "float() converts string to float.", `float('1.5') = 1.5.

Beginner:
• float('1.5') converts the string '1.5' to the float 1.5. So you get the number 1.5 for calculations.
• Use when you read decimal input (e.g. from user or file) and need a float.

Intermediate:
• float('1.5') = 1.5. float('3') = 3.0. So int strings become floats too. Invalid input raises ValueError.
• float() also works with int: float(3) = 3.0. So float('1.5') gives 1.5 (type float).

Expert:
• float(string_or_number) converts to float. 'inf', '-inf', 'nan' are valid. So float('1.5') = 1.5. Precision is IEEE 754.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 'a' in 'cat'?", ["True", "False", "1", "Error"], 0, "'a' is a substring of 'cat'.", `'a' in 'cat' is True.

Beginner:
• The in operator checks if 'a' appears in 'cat'. The letter 'a' is in 'cat', so the result is True.
• So 'a' in 'cat' is True. For strings, in checks for substring (one or more characters).

Intermediate:
• 'a' in 'cat' is True. So 'x' in 'cat' would be False. in works for strings (substring), lists (element), dicts (key), sets (element).
• Case matters: 'A' in 'cat' is False. So 'a' in 'cat' is True.

Expert:
• str.__contains__; for strings, in checks substring membership. So 'a' in 'cat' is True. O(n) for str. For sets/dicts, in is O(1) average.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 'x' in 'cat'?", ["False", "True", "0", "Error"], 0, "'x' is not in 'cat'.", `'x' in 'cat' is False. in checks membership.

Beginner:
• The letter 'x' is not in the string 'cat', so 'x' in 'cat' is False. So the result is the boolean False.
• in returns True if the left side is "in" the right side (substring for strings), False otherwise.

Intermediate:
• 'x' in 'cat' is False. So we get False. Use in for membership: if 'x' in s: ... or if x not in list: ...
• For strings, in is substring: 'at' in 'cat' is True. So single char or longer substring both work.

Expert:
• in calls __contains__. For str, it's substring search. So 'x' in 'cat' is False. Use not in for "not present".

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 1 in [1, 2, 3]?", ["True", "False", "1", "Error"], 0, "1 is in the list.", `1 in [1, 2, 3] is True. in works for lists.

Beginner:
• The in operator checks if 1 is an element of the list [1, 2, 3]. 1 is in the list, so the result is True.
• So 1 in [1, 2, 3] is True. For lists, in checks whether the value is one of the elements.

Intermediate:
• 1 in [1, 2, 3] is True. So 0 in [1, 2, 3] is False. in does a linear search for lists (O(n)). For sets/dicts it's O(1) average.
• So for frequent membership tests, use a set instead of a list for speed.

Expert:
• list.__contains__; in does equality check (==) on each element. So 1 in [1, 2, 3] is True. For large lists, consider set for O(1) lookup.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 0 in [1, 2]?", ["False", "True", "0", "Error"], 0, "0 is not in the list.", `0 in [1, 2] is False. Membership test.

Beginner:
• The number 0 is not one of the elements of [1, 2]. So 0 in [1, 2] is False. The list has 1 and 2, not 0.
• So the result is the boolean False. Use in to check "is this value in the list?".

Intermediate:
• 0 in [1, 2] is False. So we get False. Use not in for "is not in": 0 not in [1, 2] is True.
• in works for any iterable that supports membership: list, tuple, set, dict (keys), str (substring).

Expert:
• in returns False when the value is not found. So 0 in [1, 2] is False. For dict, in checks keys: 0 in {1: 2} is False.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is None is None?", ["True", "False", "None", "Error"], 0, "There is only one None.", `None is None is True.

Beginner:
• There is only one None in Python. So "None is None" checks: are these the same object? Yes. So the result is True.
• Use "is" for None checks: if x is None: ... (preferred over x == None).

Intermediate:
• None is a singleton; there is exactly one None object. So None is None is True. "is" checks identity (same object in memory).
• Use "is None" and "is not None" for None checks. Don't use == None (can be overridden by __eq__).

Expert:
• is checks object identity. None is a singleton, so None is None is always True. Use "is" for None, True, False; use == for value equality.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is type(2 + 2)?", ["<class 'int'>", "<class 'float'>", "<class 'str'>", "None"], 0, "2+2 is 4, an int.", `type(2+2) is int; 2+2=4.

Beginner:
• 2 + 2 is 4. The result is an integer, so type(2+2) is <class 'int'>. So the type of the result is int.
• Adding two ints gives an int. So type(4) is int.

Intermediate:
• 2+2 = 4; type(4) is int. So type(2+2) returns the int class. If you had 2+2.0, the result would be float (type promotion).
• type() tells you the type of the value that an expression produces.

Expert:
• type(2+2) is int. The expression 2+2 is evaluated first (4), then type(4) is int. For mixed arithmetic, int + float -> float.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is type(2 + 2.0)?", ["<class 'float'>", "<class 'int'>", "<class 'str'>", "None"], 0, "int + float gives float.", `type(2 + 2.0) is float. Mixed arithmetic promotes to float.

Beginner:
• 2 + 2.0 is 4.0 (a float). When you mix int and float, the result is always a float. So type(2+2.0) is <class 'float'>.
• So int + float gives float. The 2 is "promoted" to 2.0 for the addition.

Intermediate:
• 2 + 2.0 = 4.0; type(4.0) is float. So type(2+2.0) returns the float class. This is type promotion (or "coercion").
• So whenever you mix int and float in an operation, the result is float.

Expert:
• Arithmetic type promotion: int + float -> float. So type(2+2.0) is float. The int is converted to float for the operation.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is type('a' * 2)?", ["<class 'str'>", "<class 'int'>", "<class 'list'>", "None"], 0, "'a'*2 = 'aa', a string.", `String repetition gives a string. type('a'*2) is str.

Beginner:
• 'a' * 2 is 'aa' (the string 'a' repeated twice). So the result is a string. So type('a'*2) is <class 'str'>.
• String times number gives a string. So the type of the result is str.

Intermediate:
• 'a'*2 = 'aa'; type('aa') is str. So type('a'*2) returns the str class. For list * int you get a list: type([1]*2) is list.
• So str * int -> str; list * int -> list. The type of the result matches the sequence type.

Expert:
• str.__mul__(int) returns str. So type('a'*2) is str. The result is a new string; the original is unchanged (strings are immutable).

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is type([1] * 2)?", ["<class 'list'>", "<class 'tuple'>", "<class 'int'>", "None"], 0, "[1]*2 = [1, 1], a list.", `List repetition gives a list. type([1]*2) is list.

Beginner:
• [1] * 2 is [1, 1] (the list [1] repeated twice). So the result is a list. So type([1]*2) is <class 'list'>.
• List times number gives a list. So the type of the result is list. Note: [1]*2 creates [1, 1] (two references to the same 1).

Intermediate:
• [1]*2 = [1, 1]; type([1, 1]) is list. So type([1]*2) returns the list class. Same for tuple: (1,)*2 = (1, 1), type is tuple.
• Beware: [1]*2 gives two references to the same int. For [[1]]*2 you get two references to the same list (often a bug).

Expert:
• list.__mul__(int) returns a new list with the sequence repeated. So type([1]*2) is list. Shallow copy: same elements repeated.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is type(len(''))?", ["<class 'int'>", "<class 'float'>", "<class 'str'>", "None"], 0, "len() returns an integer.", `type(len('')) is int. len() always returns an int.

Beginner:
• len('') is 0 (the empty string has length 0). The value 0 is an integer. So type(len('')) is <class 'int'>.
• len() always returns an integer—the number of items or characters. So type(len(anything)) is int.

Intermediate:
• len('') = 0; type(0) is int. So type(len('')) is int. Same for len([]), len((1,2)), etc.—len always returns int.
• So you can use len() in arithmetic: len('hi') + 1 is 3. And type(len(x)) is always int for built-in types.

Expert:
• len() calls __len__ and must return a non-negative integer. So type(len('')) is int. For custom classes, __len__ should return an int.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is sum([1, 2, 3])?", ["6", "5", "7", "Error"], 0, "sum() adds all numbers.", `sum([1, 2, 3]) = 6.

Beginner:
• sum([1, 2, 3]) adds all the numbers in the list: 1 + 2 + 3 = 6. So the result is 6.
• sum() takes an iterable of numbers and returns their total. So sum([1, 2, 3]) = 6.

Intermediate:
• sum([1, 2, 3]) = 6. You can pass a second argument (start): sum([1, 2, 3], 10) = 16. Default start is 0.
• sum() works on any iterable of numbers: sum((1, 2, 3)) = 6. Empty iterable: sum([]) = 0.

Expert:
• sum(iterable, start=0) sums start + all elements. So sum([1,2,3]) = 0+1+2+3 = 6. For floats, use math.fsum() for better precision.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is sum([])?", ["0", "None", "Error", "1"], 0, "sum of empty list is 0.", `sum([]) = 0.

Beginner:
• The sum of no numbers is 0. So sum([]) = 0. An empty list has no elements to add, so the total is 0.
• This is the "identity" for addition: adding zero numbers gives 0. So sum([]) = 0.

Intermediate:
• sum([]) = 0. The default start value for sum() is 0. So sum([]) is 0 + (nothing) = 0. sum([], 10) would be 10.
• Useful when you might have an empty list: total = sum(numbers) works even when numbers is [].

Expert:
• sum(iterable, start=0); when iterable is empty, sum returns start. So sum([]) = 0. So sum([]) never raises; it returns 0.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is min(3, 1, 2)?", ["1", "2", "3", "Error"], 0, "min() of several values.", `min(3, 1, 2) = 1.

Beginner:
• min(3, 1, 2) returns the smallest of the three numbers: 1. So the result is 1.
• min() can take two or more arguments and returns the smallest. So min(3, 1, 2) = 1.

Intermediate:
• min(3, 1, 2) = 1. You can also use min() on one iterable: min([3, 1, 2]) = 1. Empty iterable raises ValueError.
• min() works with any comparable types (numbers, strings). So min(3, 1, 2) = 1.

Expert:
• min(*args or iterable) returns the smallest. So min(3, 1, 2) = 1. Optional key: min([-1, 2, -3], key=abs) = -1.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is max(3, 1, 2)?", ["3", "2", "1", "Error"], 0, "max() of several values.", `max(3, 1, 2) = 3.

Beginner:
• max(3, 1, 2) returns the largest of the three numbers: 3. So the result is 3.
• max() can take two or more arguments and returns the largest. So max(3, 1, 2) = 3.

Intermediate:
• max(3, 1, 2) = 3. You can also use max() on one iterable: max([3, 1, 2]) = 3. Empty iterable raises ValueError.
• max() works with any comparable types. So max(3, 1, 2) = 3.

Expert:
• max(*args or iterable) returns the largest. So max(3, 1, 2) = 3. Optional key: max([-1, 2, -3], key=abs) = -3.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is pow(2, 4)?", ["16", "8", "6", "Error"], 0, "pow(2, 4) = 2**4 = 16.", `pow(base, exp) is exponentiation. pow(2, 4) = 16.

Beginner:
• pow(2, 4) means 2 to the power of 4: 2*2*2*2 = 16. So pow(2, 4) = 16. Same as 2 ** 4.
• pow() is a built-in function. pow(2, 4) = 16. So the result is 16.

Intermediate:
• pow(2, 4) = 16. You can pass a third argument for modulo: pow(2, 4, 5) = (2**4) % 5 = 16 % 5 = 1. More efficient for large numbers.
• So pow(a, b) is a**b. pow(a, b, m) is (a**b) % m (used in cryptography).

Expert:
• pow(base, exp[, mod]) returns base**exp, or (base**exp) % mod if mod is given. So pow(2, 4) = 16. Three-argument form is efficient for modular exponentiation.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is divmod(7, 2)?", ["(3, 1)", "(3.5, 0)", "(4, 1)", "Error"], 0, "divmod gives (quotient, remainder).", `divmod(7, 2) = (3, 1).

Beginner:
• divmod(7, 2) gives both the quotient and the remainder when you divide 7 by 2. So 7 = 3*2 + 1. The result is (3, 1).
• So divmod(7, 2) = (3, 1). The first number is 7//2, the second is 7%2. One call instead of two.

Intermediate:
• divmod(7, 2) = (3, 1). So 7 // 2 = 3 and 7 % 2 = 1. divmod(a, b) returns (a//b, a%b). Useful when you need both.
• So quotient, remainder = divmod(7, 2) gives quotient=3, remainder=1. Works with floats too: divmod(7.5, 2) = (3.0, 1.5).

Expert:
• divmod(a, b) returns (a//b, a%b). So divmod(7, 2) = (3, 1). One function call instead of two; can be slightly more efficient. For b==0, ZeroDivisionError.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 0 ** 5?", ["0", "1", "5", "Error"], 0, "0 to any positive power is 0.", `0 ** 5 = 0.

Beginner:
• Zero to any positive power is still zero. So 0 ** 5 = 0. (0 * 0 * 0 * 0 * 0 = 0.)
• So 0 ** 1 = 0, 0 ** 5 = 0, 0 ** 100 = 0. Only 0 ** 0 is special (in Python it's 1).

Intermediate:
• 0 ** 5 = 0. So for n > 0, 0 ** n = 0. 0 ** 0 is 1 in Python (by convention). So 0 ** 5 = 0.
• Negative exponent: 0 ** -1 would be 1/0 (ZeroDivisionError). So 0 to a positive power is 0.

Expert:
• 0 ** n for n > 0 is 0. 0 ** 0 is 1 in Python. So 0 ** 5 = 0. For 0 ** negative, ZeroDivisionError.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 4 ** 0.5?", ["2.0", "2", "0.5", "Error"], 0, "Square root of 4.", `4 ** 0.5 = 2.0.

Beginner:
• 4 ** 0.5 means 4 to the power of 0.5, which is the square root of 4. The square root of 4 is 2. So the result is 2.0 (a float).
• So 4 ** 0.5 = 2.0. Using a fractional exponent (0.5) gives a root. So 4 ** 0.5 is the square root.

Intermediate:
• 4 ** 0.5 = 2.0. So x ** 0.5 is the square root of x. So 9 ** 0.5 = 3.0. The result is always a float when the exponent is a float.
• So 4 ** 0.5 = 2.0. For negative base, 4 ** 0.5 works; (-4) ** 0.5 would give a complex number.

Expert:
• For float exponent, ** returns float (or complex for negative base and non-integer exponent). So 4 ** 0.5 = 2.0. Use math.sqrt(4) for clarity.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 0 or 5?", ["5", "0", "True", "Error"], 0, "or returns first truthy or last.", `0 or 5 = 5.

Beginner:
• or returns the first "truthy" value, or the last if all are "falsy". 0 is falsy, so we look at 5. 5 is truthy, so the result is 5.
• So 0 or 5 = 5. We don't get True—we get the actual value 5 (which is truthy). So the result is 5.

Intermediate:
• 0 or 5 = 5. So or returns the first truthy operand, or the last operand if all are falsy. So 0 or 5 returns 5 (the first truthy).
• Short-circuit: if the first is truthy, that's returned and the second is not evaluated. So 3 or 5 is 3.

Expert:
• or returns first truthy or last. So 0 or 5 = 5. Used for defaults: x = user_input or "default". Short-circuit evaluation.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 3 and 4?", ["4", "3", "True", "Error"], 0, "and returns last value if both truthy.", `3 and 4 = 4.

Beginner:
• and returns the first "falsy" value, or the last value if all are "truthy". 3 is truthy, 4 is truthy, so we get the last: 4.
• So 3 and 4 = 4. We don't get True—we get the actual value 4. So the result is 4.

Intermediate:
• 3 and 4 = 4. So and returns the first falsy operand, or the last if all are truthy. So 3 and 4 returns 4 (the last).
• Short-circuit: if the first is falsy, that's returned. So 0 and 4 is 0. So 3 and 4 = 4.

Expert:
• and returns first falsy or last. So 3 and 4 = 4. Used for guard: x and x.method() returns x.method() if x is truthy, else x.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 0 and 5?", ["0", "5", "False", "Error"], 0, "and short-circuits on first falsy.", `0 and 5 = 0.

Beginner:
• and returns the first "falsy" value, or the last if all are "truthy". 0 is falsy, so the result is 0. The 5 is not even evaluated (short-circuit).
• So 0 and 5 = 0. We get 0 (the first falsy value). So the result is 0.

Intermediate:
• 0 and 5 = 0. So and short-circuits: once we see 0 (falsy), we return 0 and don't evaluate 5. So 0 and 5 = 0.
• So and returns the first falsy or the last. Here the first is falsy, so we return 0.

Expert:
• and short-circuits on first falsy. So 0 and 5 = 0. The second operand is not evaluated. Used for safe access: x and x[0].

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is len((1, 2))?", ["2", "1", "3", "Error"], 0, "Tuple has 2 elements.", `len((1, 2)) = 2.

Beginner:
• The tuple (1, 2) has two elements (1 and 2), so len((1, 2)) is 2. So the result is 2.
• len() works on tuples too—it returns the number of elements. So len((1, 2)) = 2.

Intermediate:
• len((1, 2)) = 2. So (1, 2) has length 2. len() works on any sequence: str, list, tuple, range, etc. So len((1, 2)) = 2.
• So for a tuple of n elements, len() is n. (1, 2)[0] is 1, (1, 2)[1] is 2. Valid indices 0 and 1.

Expert:
• tuple.__len__; len((1, 2)) = 2. O(1) for built-in types. So the tuple has two elements; len returns 2.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is len({1, 2})?", ["2", "1", "3", "Error"], 0, "Set has 2 elements.", `len({1, 2}) = 2.

Beginner:
• The set {1, 2} has two elements (1 and 2), so len({1, 2}) is 2. So the result is 2. Sets have no duplicates, so each element counts once.
• len() works on sets too—it returns the number of elements. So len({1, 2}) = 2.

Intermediate:
• len({1, 2}) = 2. So the set has two distinct elements. len({1, 1, 2}) would also be 2 (duplicates don't count).
• So for sets, len() is the number of unique elements. So len({1, 2}) = 2.

Expert:
• set.__len__; len({1, 2}) = 2. O(1) for set. So the set has two elements; len returns 2. Sets are unordered.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is len({1: 2})?", ["1", "2", "0", "Error"], 0, "Dict with one key has length 1.", `len({1: 2}) = 1.

Beginner:
• The dictionary {1: 2} has one key-value pair (key 1, value 2). So len({1: 2}) is 1. len() for a dict returns the number of keys.
• So len() on a dict counts the number of keys (or key-value pairs). So len({1: 2}) = 1.

Intermediate:
• len({1: 2}) = 1. So one key means length 1. len({}) = 0. So len(d) is the number of keys in the dict.
• So for a dict, len() is the number of key-value pairs. So len({1: 2, 3: 4}) = 2.

Expert:
• dict.__len__; len({1: 2}) = 1. O(1). So the number of keys (or pairs) is 1. So len returns 1.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is [1] == [1]?", ["True", "False", "1", "Error"], 0, "Lists are equal by value.", `[1] == [1] is True.

Beginner:
• [1] and [1] are two lists that have the same content (one element, the value 1). So they are equal: [1] == [1] is True.
• == for lists compares element by element. So [1] == [1] is True. So the result is True.

Intermediate:
• [1] == [1] is True. So list equality is by value (same elements in same order). So [1, 2] == [1, 2] is True; [1, 2] == [2, 1] is False.
• So == for lists is not "same object"—it's "same content". So [1] == [1] is True even if they are two different list objects.

Expert:
• list.__eq__; [1] == [1] compares elements. So [1] == [1] is True. For identity use "is": [1] is [1] is False (different objects).

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 'ab' == 'ab'?", ["True", "False", "1", "Error"], 0, "Equal strings.", `'ab' == 'ab' is True.

Beginner:
• The two strings 'ab' and 'ab' have the same characters, so they are equal. So 'ab' == 'ab' is True.
• == for strings compares character by character. So 'ab' == 'ab' is True. So the result is True.

Intermediate:
• 'ab' == 'ab' is True. So string equality is by value (same characters in same order). So 'ab' == 'ba' is False.
• So == for strings is content equality. So 'ab' == 'ab' is True. Case matters: 'Ab' == 'ab' is False.

Expert:
• str.__eq__; 'ab' == 'ab' is True. So content equality. For identity use "is": 'ab' is 'ab' may be True due to interning. Prefer == for value.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is (1,) == (1,)?", ["True", "False", "1", "Error"], 0, "Equal tuples.", `(1,) == (1,) is True.

Beginner:
• The two tuples (1,) and (1,) have the same content (one element, the value 1). So they are equal: (1,) == (1,) is True.
• == for tuples compares element by element. So (1,) == (1,) is True. So the result is True.

Intermediate:
• (1,) == (1,) is True. So tuple equality is by value (same elements in same order). So (1, 2) == (1, 2) is True.
• So == for tuples is content equality. So (1,) == (1,) is True. Tuples are immutable, so equality is straightforward.

Expert:
• tuple.__eq__; (1,) == (1,) is True. So value equality. For identity, (1,) is (1,) may be False (different objects). Use == for value.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 1 == True?", ["True", "False", "None", "Error"], 0, "In Python, 1 equals True (value).", `1 == True is True.

Beginner:
• In Python, 1 and True are considered equal in value. So 1 == True is True. So the result is True. (But they are different types: type(1) is int, type(True) is bool.)
• So for == (equality), 1 and True are equal. So 1 == True is True. So we get True.

Intermediate:
• 1 == True is True. That's because bool is a subclass of int, and True has value 1. So 1 == True and True == 1 are both True.
• So in conditions, 1 and True behave the same (both truthy). But type(1) != type(True). So 1 == True is True.

Expert:
• bool is subclass of int; True has value 1. So 1 == True is True. For type check use isinstance. So 1 == True is True (value equality).

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is '' == False?", ["False", "True", "None", "Error"], 0, "Empty string is not equal to False.", `'' == False is False.

Beginner:
• The empty string '' and False are not the same value. So '' == False is False. So the result is False. (Both are "falsy" in conditions, but they are not equal.)
• So '' and False are both falsy (bool('') and bool(False) are False), but '' == False is False.

Intermediate:
• '' == False is False. So empty string and False are not equal. So 0 == False is True (0 and False are equal in value), but '' == False is False.
• So only certain falsy values compare equal: 0 == False, 1 == True. But '' != False, [] != False. So '' == False is False.

Expert:
• str and bool; '' and False are different types and not equal. So '' == False is False. Use "is" for None/True/False identity. So '' == False is False.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 0 not in [1, 2]?", ["True", "False", "1", "Error"], 0, "0 is not in the list.", `0 not in [1, 2] is True. not in checks absence.

Beginner:
• "0 not in [1, 2]" means "0 is not an element of the list [1, 2]". The list has 1 and 2, not 0. So the result is True.
• So 0 not in [1, 2] is True. So "not in" is the opposite of "in": it's True when the value is not in the sequence.

Intermediate:
• 0 not in [1, 2] is True. So 0 in [1, 2] is False; so "not in" gives True. So "x not in L" is the same as "not (x in L)".
• So not in checks that the value is absent. So 0 not in [1, 2] is True. Useful for "if x not in seen: ...".

Expert:
• not in is the negation of in. So 0 not in [1, 2] is True. Equivalent to not (0 in [1, 2]). So 0 not in [1, 2] is True.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
];
beginnerMid.forEach(([q, o, c, e, de]) => level0Patterns.push(mk(q, o, c, e, de)));

// Fill to 300 with more variety (151-300)
const more: Array<[string, string[], number, string, string?]> = [
  ["What is 1 + 1?", ["2", "1", "0", "11"], 0, "1 + 1 = 2.", `Addition of two integers gives 2.

Beginner:
• 1 + 1 is 2. Adding two whole numbers gives another whole number. So the result is 2.
• In Python, + between two numbers means addition. So 1 + 1 = 2.

Intermediate:
• 1 + 1 = 2. Both operands are int, so the result is int. So the answer is 2.
• For string concatenation you also use + but with strings: '1' + '1' = '11'. Here we have numbers, so 2.

Expert:
• int.__add__; 1 + 1 = 2. So the result is the int 2.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 2 * 3?", ["6", "5", "8", "1"], 0, "2 * 3 = 6.", `Multiplication: 2 times 3 is 6.

Beginner:
• 2 * 3 means 2 times 3, which is 6. So the result is 6.
• In Python, * is used for multiplication (not the letter x). So 2 * 3 = 6.

Intermediate:
• 2 * 3 = 6. Both are ints, so the result is int. For strings, * means repetition: 'a' * 3 = 'aaa'.
• So with numbers, * is multiplication. So the answer is 6.

Expert:
• int.__mul__; 2 * 3 = 6. So the result is the int 6.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 10 - 4?", ["6", "5", "14", "40"], 0, "10 - 4 = 6.", `Subtraction: 10 minus 4 is 6.

Beginner:
• 10 - 4 is 6. You take away 4 from 10 and get 6. So the result is 6.
• In Python, - between two numbers means subtraction. So 10 - 4 = 6.

Intermediate:
• 10 - 4 = 6. Both operands are int, so the result is int. So the answer is 6.
• The - operator can also denote negative numbers (e.g. -4) or set difference. Here it's subtraction.

Expert:
• int.__sub__; 10 - 4 = 6. So the result is the int 6.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 8 // 2?", ["4", "4.0", "3", "Error"], 0, "Integer division: 8 // 2 = 4.", `// is floor division; 8 // 2 = 4.

Beginner:
• 8 // 2 means 8 divided by 2, but you only keep the whole number part. So 8 ÷ 2 = 4. The result is 4.
• So // is "integer division" or "floor division". So 8 // 2 = 4 (not 4.0).

Intermediate:
• 8 // 2 = 4. So // gives the quotient (floor of the division). So 9 // 2 = 4 (not 4.5). The result type matches the operands (int here).
• So / gives a float in Python 3 (8/2 = 4.0), but // gives the integer quotient. So 8 // 2 = 4.

Expert:
• int.__floordiv__; 8 // 2 = 4. So floor division; result is int when both operands are int.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 9 % 4?", ["1", "2", "3", "0"], 0, "Remainder: 9 % 4 = 1.", `% returns the remainder; 9 % 4 = 1.

Beginner:
• 9 % 4 means the remainder when you divide 9 by 4. So 9 = 2*4 + 1; the remainder is 1. So the result is 1.
• So % is the "modulo" or "remainder" operator. So 9 % 4 = 1.

Intermediate:
• 9 % 4 = 1. So 9 // 4 = 2 and 9 % 4 = 1. So 9 = 2*4 + 1. Useful for wrapping (e.g.  hour % 12) or even/odd (n % 2).
• So % always returns a result with the same sign as the divisor (in Python). So 9 % 4 = 1.

Expert:
• int.__mod__; 9 % 4 = 1. So remainder of 9 divided by 4. divmod(9, 4) = (2, 1).

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 2 ** 3?", ["8", "6", "9", "5"], 0, "2 ** 3 = 8 (2 to the power of 3).", `** is exponentiation; 2**3 = 8.

Beginner:
• 2 ** 3 means 2 to the power of 3: 2*2*2 = 8. So the result is 8.
• In Python, ** is used for exponentiation (raising to a power). So 2 ** 3 = 8.

Intermediate:
• 2 ** 3 = 8. So ** has higher precedence than * and +. So 2 ** 3 is 8. For 0 ** 0, Python returns 1.
• So 2 ** 4 = 16, 10 ** 2 = 100. So the answer is 8.

Expert:
• int.__pow__; 2 ** 3 = 8. So exponentiation. pow(2, 3) is equivalent.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is len('')?", ["0", "1", "None", "Error"], 0, "Empty string has length 0.", `len() counts characters; empty string has 0.

Beginner:
• The empty string '' has no characters, so its length is 0. So len('') is 0.
• len() tells you how many characters are in a string (or items in a list). So len('') = 0.

Intermediate:
• len('') = 0. So for any sequence, len() returns the number of elements. So len('a') = 1, len('ab') = 2.
• So empty string has length 0. Same for empty list: len([]) = 0. So the answer is 0.

Expert:
• str.__len__; len('') = 0. So the empty string has zero characters. O(1) for built-in types.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is len('a')?", ["1", "0", "2", "Error"], 0, "One character has length 1.", `len('a') = 1.

Beginner:
• The string 'a' has one character, so len('a') is 1. So the result is 1.
• len() counts the characters in a string. So one character means length 1. So len('a') = 1.

Intermediate:
• len('a') = 1. So a single character string has length 1. So len(' ') (space) is also 1.
• So for strings, len() is the number of characters. So the answer is 1.

Expert:
• len('a') = 1. So one character, length 1. O(1) for str.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is len('ab')?", ["2", "1", "3", "Error"], 0, "Two characters have length 2.", `len('ab') = 2.

Beginner:
• The string 'ab' has two characters (a and b), so len('ab') is 2. So the result is 2.
• len() counts the characters. So two characters mean length 2. So len('ab') = 2.

Intermediate:
• len('ab') = 2. So the length is the number of characters. So len('hello') = 5.
• So for any string, len(s) is the number of characters. So the answer is 2.

Expert:
• len('ab') = 2. So two characters. O(1) for str.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is len([])?", ["0", "1", "None", "Error"], 0, "Empty list has length 0.", `len([]) = 0.

Beginner:
• The empty list [] has no items, so len([]) is 0. So the result is 0.
• len() works on lists too—it returns the number of items. So len([]) = 0.

Intermediate:
• len([]) = 0. So empty list has length 0. Same for empty string, empty tuple, empty dict. So the answer is 0.
• So when you have no elements, len is 0. So len([]) = 0.

Expert:
• list.__len__; len([]) = 0. O(1) for list.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is len([1])?", ["1", "0", "2", "Error"], 0, "List with one item has length 1.", `len([1]) = 1.

Beginner:
• The list [1] has one item (the number 1), so len([1]) is 1. So the result is 1.
• len() on a list counts the number of items. So one item means length 1. So len([1]) = 1.

Intermediate:
• len([1]) = 1. So one element means length 1. So len([1, 2]) = 2. So the answer is 1.
• So len() for lists is the number of elements. So len([1]) = 1.

Expert:
• len([1]) = 1. So one element. O(1) for list.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is len([1, 2])?", ["2", "1", "3", "Error"], 0, "List with two items has length 2.", `len([1, 2]) = 2.

Beginner:
• The list [1, 2] has two items, so len([1, 2]) is 2. So the result is 2.
• len() on a list counts the number of items. So two items mean length 2. So len([1, 2]) = 2.

Intermediate:
• len([1, 2]) = 2. So the length is the number of elements. So len([1, 2, 3]) = 3. So the answer is 2.
• So for lists, len() is the number of elements. So len([1, 2]) = 2.

Expert:
• len([1, 2]) = 2. So two elements. O(1) for list.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is bool(0)?", ["False", "True", "0", "Error"], 0, "0 is falsy.", `In Python, 0 is falsy; bool(0) is False.

Beginner:
• In Python, the number 0 is considered "falsy". So bool(0) returns False. So the result is False.
• bool() converts a value to True or False. So 0 becomes False. So bool(0) is False.

Intermediate:
• bool(0) is False. So in conditions, 0 acts like False. So "if 0:" would not run. So the answer is False.
• Falsy values include 0, 0.0, '', [], (), {}, None. So bool(0) is False.

Expert:
• bool(0) is False. So 0 is falsy; used in truth testing. So bool(0) returns False.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is bool(1)?", ["True", "False", "1", "Error"], 0, "Non-zero numbers are truthy.", `bool(1) is True.

Beginner:
• In Python, non-zero numbers are "truthy". So bool(1) returns True. So the result is True.
• bool() converts a value to True or False. So 1 (and any non-zero number) becomes True. So bool(1) is True.

Intermediate:
• bool(1) is True. So in conditions, 1 acts like True. So "if 1:" would run. So the answer is True.
• Truthy values include any non-zero number, non-empty string, non-empty list, etc. So bool(1) is True.

Expert:
• bool(1) is True. So 1 is truthy. So bool(1) returns True.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is bool('')?", ["False", "True", "''", "Error"], 0, "Empty string is falsy.", `bool('') is False.

Beginner:
• The empty string '' has no characters and is "falsy". So bool('') returns False. So the result is False.
• bool() on a string: empty string is False, any non-empty string is True. So bool('') is False.

Intermediate:
• bool('') is False. So in conditions, '' acts like False. So "if '':" would not run. So the answer is False.
• So empty sequence ('' or []) is falsy. So bool('') is False.

Expert:
• bool('') is False. So empty string is falsy. So bool('') returns False.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is bool('x')?", ["True", "False", "1", "Error"], 0, "Non-empty string is truthy.", `bool('x') is True.

Beginner:
• The string 'x' has at least one character, so it is "truthy". So bool('x') returns True. So the result is True.
• bool() on a string: non-empty string is True. So bool('x') is True. So bool(' ') (space) is also True.

Intermediate:
• bool('x') is True. So in conditions, any non-empty string is truthy. So the answer is True.
• So non-empty sequences are truthy. So bool('x') is True.

Expert:
• bool('x') is True. So non-empty string is truthy. So bool('x') returns True.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is bool([])?", ["False", "True", "[]", "Error"], 0, "Empty list is falsy.", `bool([]) is False.

Beginner:
• The empty list [] has no items and is "falsy". So bool([]) returns False. So the result is False.
• bool() on a list: empty list is False, any non-empty list is True. So bool([]) is False.

Intermediate:
• bool([]) is False. So in conditions, [] acts like False. So "if []:" would not run. So the answer is False.
• So empty list is falsy. So bool([]) is False.

Expert:
• bool([]) is False. So empty list is falsy. So bool([]) returns False.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is bool([1])?", ["True", "False", "1", "Error"], 0, "Non-empty list is truthy.", `bool([1]) is True.

Beginner:
• The list [1] has at least one item, so it is "truthy". So bool([1]) returns True. So the result is True.
• bool() on a list: non-empty list is True. So bool([1]) is True. So bool([0]) is also True (the list is not empty).

Intermediate:
• bool([1]) is True. So in conditions, any non-empty list is truthy. So the answer is True.
• So non-empty list is truthy (even [0] or [False]). So bool([1]) is True.

Expert:
• bool([1]) is True. So non-empty list is truthy. So bool([1]) returns True.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is int(3.7)?", ["3", "4", "3.7", "Error"], 0, "int() truncates toward zero.", `int(3.7) = 3; int() drops the decimal part.

Beginner:
• int(3.7) converts the float 3.7 to an integer by dropping the decimal part. So we get 3 (not 4—Python truncates toward zero). So the result is 3.
• So int() does not round; it truncates. So int(3.7) = 3 and int(-3.7) = -3. So the answer is 3.

Intermediate:
• int(3.7) = 3. So int() truncates toward zero. So int(3.2) = 3, int(3.9) = 3. For rounding use round(3.7) = 4.
• So int(float) truncates. So the answer is 3.

Expert:
• int(3.7) truncates toward zero; result is 3. So int() drops the fractional part. So the answer is 3.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is float(2)?", ["2.0", "2", "2.00", "Error"], 0, "float(2) is 2.0.", `float(2) converts int to float 2.0.

Beginner:
• float(2) converts the integer 2 to a float. So we get 2.0. So the result is 2.0 (a float).
• So float() turns a number into a decimal number. So float(2) = 2.0. So the answer is 2.0.

Intermediate:
• float(2) = 2.0. So int to float conversion. So float(0) = 0.0. So type(float(2)) is float.
• So when you need a float (e.g. for division), float(2) gives 2.0. So the answer is 2.0.

Expert:
• float(2) = 2.0. So int to float conversion. So the result is the float 2.0.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is str(5)?", ["'5'", "5", "5.0", "Error"], 0, "str(5) converts to string '5'.", `str(5) = '5'.

Beginner:
• str(5) converts the number 5 into the string '5'. So we get the character(s) that represent 5. So the result is '5'.
• So str() turns a value into text (a string). So str(5) = '5'. So the answer is '5'.

Intermediate:
• str(5) = '5'. So the result is a string, not a number. So str(5) + str(5) = '55', not 10. So type(str(5)) is str.
• So for display or concatenation with strings, str(5) gives '5'. So the answer is '5'.

Expert:
• str(5) = '5'. So int to str conversion. So the result is the string '5'.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 5 + 5?", ["10", "55", "5", "Error"], 0, "5 + 5 = 10.", `Addition. 5 + 5 = 10.

Beginner:
• 5 + 5 is 10. Adding two integers gives 10. So the result is 10.
• In Python, + between numbers is addition. So 5 + 5 = 10. So the answer is 10.

Intermediate:
• 5 + 5 = 10. Both are ints, so the result is int. So the answer is 10.
• So 5 + 5 = 10.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 3 * 4?", ["12", "7", "81", "Error"], 0, "3 * 4 = 12.", `Multiplication. 3 * 4 = 12.

Beginner:
• 3 * 4 is 12. So the result is 12.
• In Python, * is multiplication. So 3 * 4 = 12. So the answer is 12.

Intermediate:
• 3 * 4 = 12. Both are ints, so the result is int. So the answer is 12.
• So 3 * 4 = 12.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 20 // 5?", ["4", "4.0", "5", "Error"], 0, "20 // 5 = 4.", `Integer division. 20 // 5 = 4.

Beginner:
• 20 // 5 means 20 divided by 5, whole number only. So 20 ÷ 5 = 4. So the result is 4.
• So // is integer division. So 20 // 5 = 4. So the answer is 4.

Intermediate:
• 20 // 5 = 4. So the quotient is 4. So 20 % 5 = 0. So the answer is 4.
• So 20 // 5 = 4.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 7 % 2?", ["1", "3", "2", "0"], 0, "7 % 2 = 1 (remainder).", `7 = 3*2 + 1; remainder is 1.

Beginner:
• 7 % 2 is the remainder when you divide 7 by 2. So 7 = 3*2 + 1; the remainder is 1. So the result is 1.
• So % is the remainder. So 7 % 2 = 1. So the answer is 1.

Intermediate:
• 7 % 2 = 1. So 7 // 2 = 3 and 7 % 2 = 1. So 7 = 3*2 + 1. So the answer is 1.
• So 7 % 2 = 1. Useful for even/odd: n % 2 == 0 means even.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 2 ** 4?", ["16", "8", "6", "Error"], 0, "2 ** 4 = 16.", `2 to the power of 4 = 16.

Beginner:
• 2 ** 4 means 2 to the power of 4: 2*2*2*2 = 16. So the result is 16.
• So ** is exponentiation. So 2 ** 4 = 16. So the answer is 16.

Intermediate:
• 2 ** 4 = 16. So 2**0 = 1, 2**1 = 2, 2**4 = 16. So the answer is 16.
• So 2 ** 4 = 16.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is -(-3)?", ["3", "-3", "0", "Error"], 0, "Negative of -3 is 3.", `Double negative gives positive.

Beginner:
• -(-3) means the negative of -3. So minus times minus gives plus. So -(-3) = 3. So the result is 3.
• So a double negative gives a positive. So -(-3) = 3. So the answer is 3.

Intermediate:
• -(-3) = 3. So the unary - flips the sign. So -(-3) is 3. So the answer is 3.
• So -(-3) = 3.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is abs(-4)?", ["4", "-4", "0", "Error"], 0, "abs(-4) = 4.", `abs() returns absolute value.

Beginner:
• abs(-4) gives the "absolute value" of -4—how far it is from zero. So we get 4. So the result is 4.
• So abs() makes negative numbers positive and leaves positive numbers as they are. So abs(-4) = 4. So the answer is 4.

Intermediate:
• abs(-4) = 4. So abs(x) is x if x >= 0, and -x if x < 0. So abs(4) = 4, abs(-4) = 4. So the answer is 4.
• So abs() returns the magnitude (non-negative). So abs(-4) = 4.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is min(1, 2)?", ["1", "2", "0", "Error"], 0, "min(1, 2) = 1.", `min() returns the smaller value.

Beginner:
• min(1, 2) returns the smaller of 1 and 2. So we get 1. So the result is 1.
• So min() gives you the minimum. So min(1, 2) = 1. So the answer is 1.

Intermediate:
• min(1, 2) = 1. So min() can take two or more arguments. So min(3, 1, 2) = 1. So the answer is 1.
• So min(1, 2) = 1.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is max(1, 2)?", ["2", "1", "0", "Error"], 0, "max(1, 2) = 2.", `max() returns the larger value.

Beginner:
• max(1, 2) returns the larger of 1 and 2. So we get 2. So the result is 2.
• So max() gives you the maximum. So max(1, 2) = 2. So the answer is 2.

Intermediate:
• max(1, 2) = 2. So max() can take two or more arguments. So max(3, 1, 2) = 3. So the answer is 2.
• So max(1, 2) = 2.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is round(3.2)?", ["3", "3.0", "4", "Error"], 0, "round(3.2) = 3.", `round() rounds to nearest integer.

Beginner:
• round(3.2) rounds 3.2 to the nearest integer. So 3.2 is closer to 3 than to 4, so we get 3. So the result is 3.
• So round() rounds to the nearest whole number. So round(3.2) = 3. So the answer is 3.

Intermediate:
• round(3.2) = 3. So round(3.5) in Python 3 uses "banker's rounding" (round half to even). So round(3.2) = 3. So the answer is 3.
• So round(3.2) = 3.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is round(3.8)?", ["4", "3", "4.0", "Error"], 0, "round(3.8) = 4.", `round(3.8) = 4.

Beginner:
• round(3.8) rounds 3.8 to the nearest integer. So 3.8 is closer to 4 than to 3, so we get 4. So the result is 4.
• So round(3.8) = 4. So the answer is 4.

Intermediate:
• round(3.8) = 4. So round() rounds to the nearest integer. So the answer is 4.
• So round(3.8) = 4.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 'a' in 'abc'?", ["True", "False", "1", "Error"], 0, "'a' is in 'abc'.", `The 'in' operator checks substring membership.

Beginner:
• 'a' in 'abc' asks: is 'a' a substring of 'abc'? Yes—'a' appears at the start. So the result is True.
• So "in" for strings checks whether one string appears inside another. So 'a' in 'abc' is True. So the answer is True.

Intermediate:
• 'a' in 'abc' is True. So for strings, in checks substring (contiguous). So 'ab' in 'abc' is True; 'ac' in 'abc' is False.
• So in works for membership in sequences (list, tuple) and substring for strings. So 'a' in 'abc' is True.

Expert:
• str.__contains__; 'a' in 'abc' is True. So substring test. So the result is True.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 'd' in 'abc'?", ["False", "True", "0", "Error"], 0, "'d' is not in 'abc'.", `'d' is not a substring of 'abc'.

Beginner:
• 'd' in 'abc' asks: is 'd' in the string 'abc'? No—'abc' has only a, b, c. So the result is False.
• So when the character (or substring) is not there, in returns False. So 'd' in 'abc' is False. So the answer is False.

Intermediate:
• 'd' in 'abc' is False. So in returns False when the substring is not found. So 'x' in 'abc' is False.
• So in for strings is substring membership. So 'd' in 'abc' is False.

Expert:
• 'd' in 'abc' is False. So substring test fails. So the result is False.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 1 in [1, 2]?", ["True", "False", "1", "Error"], 0, "1 is in the list.", `in checks list membership.

Beginner:
• 1 in [1, 2] asks: is 1 an element of the list [1, 2]? Yes—the first element is 1. So the result is True.
• So "in" for lists checks whether a value is one of the elements. So 1 in [1, 2] is True. So the answer is True.

Intermediate:
• 1 in [1, 2] is True. So in checks membership. So 3 in [1, 2] is False. So the answer is True.
• So in works for lists, tuples, sets, dicts (keys). So 1 in [1, 2] is True.

Expert:
• list.__contains__; 1 in [1, 2] is True. So membership test. O(n) for list. So the result is True.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 3 in [1, 2]?", ["False", "True", "0", "Error"], 0, "3 is not in the list.", `3 is not in [1, 2].

Beginner:
• 3 in [1, 2] asks: is 3 an element of the list [1, 2]? No—the list has 1 and 2. So the result is False.
• So when the value is not in the list, in returns False. So 3 in [1, 2] is False. So the answer is False.

Intermediate:
• 3 in [1, 2] is False. So in returns False when the value is not found. So the answer is False.
• So for membership, 3 in [1, 2] is False.

Expert:
• 3 in [1, 2] is False. So membership test fails. So the result is False.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 2 == 2?", ["True", "False", "1", "Error"], 0, "2 equals 2.", `== tests equality; 2 == 2 is True.

Beginner:
• 2 == 2 asks: is 2 equal to 2? Yes. So the result is True.
• So == means "is equal to". So 2 == 2 is True. So the answer is True.

Intermediate:
• 2 == 2 is True. So == compares values. So 2 == 3 is False. So the answer is True.
• So == is value equality (not identity). So 2 == 2 is True.

Expert:
• 2 == 2 is True. So equality comparison. So the result is True.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 2 == 3?", ["False", "True", "0", "Error"], 0, "2 does not equal 3.", `2 == 3 is False.

Beginner:
• 2 == 3 asks: is 2 equal to 3? No. So the result is False.
• So == means "is equal to". So 2 == 3 is False. So the answer is False.

Intermediate:
• 2 == 3 is False. So == compares values. So the answer is False.
• So 2 == 3 is False.

Expert:
• 2 == 3 is False. So equality comparison fails. So the result is False.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 2 != 3?", ["True", "False", "1", "Error"], 0, "2 is not equal to 3.", `!= is 'not equal'; 2 != 3 is True.

Beginner:
• 2 != 3 asks: is 2 not equal to 3? Yes—they are different. So the result is True.
• So != means "not equal". So 2 != 3 is True. So the answer is True.

Intermediate:
• 2 != 3 is True. So != is the opposite of ==. So 2 != 2 is False. So the answer is True.
• So != checks inequality. So 2 != 3 is True.

Expert:
• 2 != 3 is True. So inequality. So the result is True.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 2 < 3?", ["True", "False", "1", "Error"], 0, "2 is less than 3.", `2 < 3 is True.

Beginner:
• 2 < 3 asks: is 2 less than 3? Yes. So the result is True.
• So < means "less than". So 2 < 3 is True. So the answer is True.

Intermediate:
• 2 < 3 is True. So < compares order. So 3 < 2 is False. So the answer is True.
• So 2 < 3 is True.

Expert:
• 2 < 3 is True. So less-than comparison. So the result is True.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 3 > 2?", ["True", "False", "1", "Error"], 0, "3 is greater than 2.", `3 > 2 is True.

Beginner:
• 3 > 2 asks: is 3 greater than 2? Yes. So the result is True.
• So > means "greater than". So 3 > 2 is True. So the answer is True.

Intermediate:
• 3 > 2 is True. So > compares order. So 2 > 3 is False. So the answer is True.
• So 3 > 2 is True.

Expert:
• 3 > 2 is True. So greater-than comparison. So the result is True.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 2 <= 2?", ["True", "False", "1", "Error"], 0, "2 is less than or equal to 2.", `<= includes equality; 2 <= 2 is True.

Beginner:
• 2 <= 2 asks: is 2 less than or equal to 2? Yes—2 equals 2, so it counts. So the result is True.
• So <= means "less than or equal". So 2 <= 2 is True. So the answer is True.

Intermediate:
• 2 <= 2 is True. So <= is True when either < or ==. So 3 <= 2 is False. So the answer is True.
• So 2 <= 2 is True.

Expert:
• 2 <= 2 is True. So less-than-or-equal. So the result is True.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 3 >= 3?", ["True", "False", "1", "Error"], 0, "3 is greater than or equal to 3.", `>= includes equality.

Beginner:
• 3 >= 3 asks: is 3 greater than or equal to 3? Yes—3 equals 3. So the result is True.
• So >= means "greater than or equal". So 3 >= 3 is True. So the answer is True.

Intermediate:
• 3 >= 3 is True. So >= is True when either > or ==. So 2 >= 3 is False. So the answer is True.
• So 3 >= 3 is True.

Expert:
• 3 >= 3 is True. So greater-than-or-equal. So the result is True.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is not False?", ["True", "False", "None", "Error"], 0, "not False is True.", `not inverts the boolean.

Beginner:
• not False means the opposite of False. So we get True. So the result is True.
• So not flips True to False and False to True. So not False is True. So the answer is True.

Intermediate:
• not False is True. So not is logical negation. So not True is False. So the answer is True.
• So not returns a bool. So not False is True.

Expert:
• not False is True. So logical negation. So the result is True.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is not True?", ["False", "True", "None", "Error"], 0, "not True is False.", `not True is False.

Beginner:
• not True means the opposite of True. So we get False. So the result is False.
• So not flips True to False. So not True is False. So the answer is False.

Intermediate:
• not True is False. So not is logical negation. So the answer is False.
• So not True is False.

Expert:
• not True is False. So logical negation. So the result is False.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is True and True?", ["True", "False", "None", "Error"], 0, "Both true.", `and is True only when both operands are True.

Beginner:
• True and True: both are True, so the result is True. So the answer is True.
• So and is True only when both sides are True. So True and True is True. So the answer is True.

Intermediate:
• True and True is True. So and returns the first falsy or the last. Here both are truthy, so we get the last: True. So the answer is True.
• So True and True is True.

Expert:
• True and True is True. So logical and. So the result is True.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is True and False?", ["False", "True", "None", "Error"], 0, "And is false if one is false.", `True and False is False.

Beginner:
• True and False: one is False, so the whole thing is False. So the result is False.
• So and is True only when both are True. So True and False is False. So the answer is False.

Intermediate:
• True and False is False. So and short-circuits: we get the first falsy (False). So the answer is False.
• So True and False is False.

Expert:
• True and False is False. So logical and. So the result is False.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is True or False?", ["True", "False", "None", "Error"], 0, "Or is true if one is true.", `or is True if at least one operand is True.

Beginner:
• True or False: at least one is True, so the result is True. So the answer is True.
• So or is True when at least one side is True. So True or False is True. So the answer is True.

Intermediate:
• True or False is True. So or returns the first truthy or the last. Here the first is True, so we get True. So the answer is True.
• So True or False is True.

Expert:
• True or False is True. So logical or. So the result is True.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is False or False?", ["False", "True", "None", "Error"], 0, "Both false.", `False or False is False.

Beginner:
• False or False: both are False, so the result is False. So the answer is False.
• So or is True only when at least one is True. So False or False is False. So the answer is False.

Intermediate:
• False or False is False. So or returns the first truthy or the last. Here both are falsy, so we get the last: False. So the answer is False.
• So False or False is False.

Expert:
• False or False is False. So logical or. So the result is False.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 0 == False?", ["True", "False", "None", "Error"], 0, "In Python, 0 == False is True (value equality).", `0 and False compare equal in value.

Beginner:
• In Python, 0 == False is True. So 0 and False are considered equal in value. So the result is True.
• So for ==, 0 and False are equal (both "falsy" in a sense). So 0 == False is True. So the answer is True.

Intermediate:
• 0 == False is True. So bool is a subclass of int; False has value 0. So 0 == False is True. So the answer is True.
• So value equality: 0 and False compare equal. So 0 == False is True.

Expert:
• 0 == False is True. So bool is subclass of int; False == 0. So the result is True.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 1 == True?", ["True", "False", "None", "Error"], 0, "1 == True is True.", `1 and True compare equal in value.

Beginner:
• In Python, 1 == True is True. So 1 and True are considered equal in value. So the result is True.
• So for ==, 1 and True are equal. So 1 == True is True. So the answer is True.

Intermediate:
• 1 == True is True. So bool is a subclass of int; True has value 1. So 1 == True is True. So the answer is True.
• So value equality: 1 and True compare equal. So 1 == True is True.

Expert:
• 1 == True is True. So bool is subclass of int; True == 1. So the result is True.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is '' == False?", ["False", "True", "None", "Error"], 0, "Empty string is not equal to False.", `'' == False is False.

Beginner:
• '' == False asks: is the empty string equal to False? No. So the result is False. (Both are "falsy" but not equal.)
• So '' and False are different values. So '' == False is False. So the answer is False.

Intermediate:
• '' == False is False. So only 0==False and 1==True; '' is not equal to False. So the answer is False.
• So '' == False is False.

Expert:
• '' == False is False. So str and bool; different types, not equal. So the result is False.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is None is None?", ["True", "False", "None", "Error"], 0, "None is the only None.", `There is only one None; 'is' checks identity.

Beginner:
• None is None asks: is this the same None as that? In Python there is only one None, so yes. So the result is True.
• So "is" checks identity (same object). So None is None is True. So the answer is True.

Intermediate:
• None is None is True. So there is a single None object. So "is" is the right way to check for None (not ==). So the answer is True.
• So None is None is True.

Expert:
• None is None is True. So identity check; there is one None singleton. So the result is True.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 1 + 2 * 3?", ["7", "9", "5", "Error"], 0, "Multiplication before addition: 2*3=6, 1+6=7.", `Operator precedence: * before +.

Beginner:
• 1 + 2 * 3: multiplication is done first. So 2 * 3 = 6, then 1 + 6 = 7. So the result is 7.
• So * has higher precedence than +. So we do 2*3 first, then add 1. So 1 + 2 * 3 = 7. So the answer is 7.

Intermediate:
• 1 + 2 * 3 = 7. So * and / have higher precedence than + and -. So 1 + 2 * 3 = 1 + 6 = 7. So the answer is 7.
• So operator precedence: * before +. So 1 + 2 * 3 = 7.

Expert:
• 1 + 2 * 3 = 7. So multiplication has higher precedence than addition. So the result is 7.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is (1 + 2) * 3?", ["9", "7", "6", "Error"], 0, "Parentheses first: 1+2=3, 3*3=9.", `Parentheses override precedence.

Beginner:
• (1 + 2) * 3: parentheses first. So 1 + 2 = 3, then 3 * 3 = 9. So the result is 9.
• So () force the order. So (1 + 2) * 3 = 3 * 3 = 9. So the answer is 9.

Intermediate:
• (1 + 2) * 3 = 9. So parentheses override normal precedence. So we do 1+2 first, then multiply by 3. So the answer is 9.
• So (1 + 2) * 3 = 9.

Expert:
• (1 + 2) * 3 = 9. So parentheses first. So the result is 9.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 10 / 2?", ["5.0", "5", "5.00", "Error"], 0, "Division in Python 3 gives float: 5.0.", `In Python 3, / always returns a float.

Beginner:
• 10 / 2 is 5.0. In Python 3, / (true division) always gives a float. So the result is 5.0 (not the int 5).
• So / gives a decimal result. So 10 / 2 = 5.0. So the answer is 5.0.

Intermediate:
• 10 / 2 = 5.0. So in Python 3, / is float division. So 10 / 2 is 5.0. For integer quotient use 10 // 2 = 5. So the answer is 5.0.
• So / always returns float in Python 3. So 10 / 2 = 5.0.

Expert:
• 10 / 2 = 5.0. So __truediv__; in Python 3 / always returns float. So the result is 5.0.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 10 // 3?", ["3", "3.0", "4", "Error"], 0, "Integer division: 10 // 3 = 3.", `10 // 3 = 3 (floor division).

Beginner:
• 10 // 3 is the whole-number part of 10 ÷ 3. So 10 ÷ 3 = 3.33...; we take 3. So the result is 3.
• So // is integer (floor) division. So 10 // 3 = 3. So the answer is 3.

Intermediate:
• 10 // 3 = 3. So // truncates toward negative infinity (floor). So 10 % 3 = 1. So 10 = 3*3 + 1. So the answer is 3.
• So 10 // 3 = 3.

Expert:
• 10 // 3 = 3. So floor division. So the result is 3.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 10 % 3?", ["1", "0", "3", "Error"], 0, "Remainder: 10 % 3 = 1.", `10 = 3*3 + 1; remainder is 1.

Beginner:
• 10 % 3 is the remainder when you divide 10 by 3. So 10 = 3*3 + 1; the remainder is 1. So the result is 1.
• So % is the remainder. So 10 % 3 = 1. So the answer is 1.

Intermediate:
• 10 % 3 = 1. So 10 // 3 = 3 and 10 % 3 = 1. So 10 = 3*3 + 1. So the answer is 1.
• So 10 % 3 = 1.

Expert:
• 10 % 3 = 1. So remainder. So the result is 1.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 'a' + 'b'?", ["'ab'", "'a b'", "'ba'", "Error"], 0, "String concatenation: 'a' + 'b' = 'ab'.", `+ concatenates strings.

Beginner:
• 'a' + 'b' joins the two strings: we get 'ab'. So the result is 'ab'.
• So + for strings means "put together". So 'a' + 'b' = 'ab'. So the answer is 'ab'.

Intermediate:
• 'a' + 'b' = 'ab'. So str + str concatenates. So 'hello' + '!' = 'hello!'. So the answer is 'ab'.
• So + concatenates strings. So 'a' + 'b' = 'ab'.

Expert:
• 'a' + 'b' = 'ab'. So str.__add__; concatenation. So the result is 'ab'.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 'x' * 3?", ["'xxx'", "'x x x'", "3", "Error"], 0, "String repetition: 'x' * 3 = 'xxx'.", `String * int repeats the string.

Beginner:
• 'x' * 3 repeats the string 'x' three times: 'xxx'. So the result is 'xxx'.
• So string * number repeats the string. So 'x' * 3 = 'xxx'. So the answer is 'xxx'.

Intermediate:
• 'x' * 3 = 'xxx'. So str * int gives a new string. So 'ab' * 2 = 'abab'. So the answer is 'xxx'.
• So 'x' * 3 = 'xxx'.

Expert:
• 'x' * 3 = 'xxx'. So str.__mul__(int); repetition. So the result is 'xxx'.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is [1] + [2]?", ["[1, 2]", "[3]", "[2, 1]", "Error"], 0, "List concatenation: [1] + [2] = [1, 2].", `+ concatenates lists.

Beginner:
• [1] + [2] joins the two lists: we get [1, 2]. So the result is [1, 2].
• So + for lists means "put the lists together". So [1] + [2] = [1, 2]. So the answer is [1, 2].

Intermediate:
• [1] + [2] = [1, 2]. So list + list concatenates (creates a new list). So the answer is [1, 2].
• So + concatenates lists. So [1] + [2] = [1, 2].

Expert:
• [1] + [2] = [1, 2]. So list.__add__; concatenation. So the result is [1, 2].

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is (1,) + (2,)?", ["(1, 2)", "(3)", "(2, 1)", "Error"], 0, "Tuple concatenation: (1,) + (2,) = (1, 2).", `+ concatenates tuples.

Beginner:
• (1,) + (2,) joins the two tuples: we get (1, 2). So the result is (1, 2).
• So + for tuples means "put the tuples together". So (1,) + (2,) = (1, 2). So the answer is (1, 2).

Intermediate:
• (1,) + (2,) = (1, 2). So tuple + tuple concatenates (creates a new tuple). So the answer is (1, 2).
• So + concatenates tuples. So (1,) + (2,) = (1, 2).

Expert:
• (1,) + (2,) = (1, 2). So tuple.__add__; concatenation. So the result is (1, 2).

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 'hi'[0]?", ["'h'", "'i'", "0", "Error"], 0, "First character: 'hi'[0] = 'h'.", `Index 0 is the first character.

Beginner:
• 'hi'[0] is the character at position 0 (the first). So we get 'h'. So the result is 'h'.
• So indexing starts at 0. So 'hi'[0] = 'h', 'hi'[1] = 'i'. So the answer is 'h'.

Intermediate:
• 'hi'[0] = 'h'. So index 0 is the first character. So 'hello'[0] = 'h'. So the answer is 'h'.
• So 'hi'[0] = 'h'.

Expert:
• 'hi'[0] = 'h'. So str indexing; index 0 is first. So the result is 'h'.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 'hi'[1]?", ["'i'", "'h'", "1", "Error"], 0, "Second character: 'hi'[1] = 'i'.", `Index 1 is the second character.

Beginner:
• 'hi'[1] is the character at position 1 (the second). So we get 'i'. So the result is 'i'.
• So index 1 is the second character. So 'hi'[1] = 'i'. So the answer is 'i'.

Intermediate:
• 'hi'[1] = 'i'. So index 1 is the second character. So the answer is 'i'.
• So 'hi'[1] = 'i'.

Expert:
• 'hi'[1] = 'i'. So str indexing. So the result is 'i'.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 'hi'[-1]?", ["'i'", "'h'", "-1", "Error"], 0, "Last character: 'hi'[-1] = 'i'.", `Index -1 is the last character.

Beginner:
• 'hi'[-1] is the last character. So we get 'i'. So the result is 'i'. (Negative index counts from the end.)
• So -1 is the last, -2 is the second-to-last. So 'hi'[-1] = 'i'. So the answer is 'i'.

Intermediate:
• 'hi'[-1] = 'i'. So negative indices count from the end: -1 is last. So the answer is 'i'.
• So 'hi'[-1] = 'i'.

Expert:
• 'hi'[-1] = 'i'. So negative index; -1 is last. So the result is 'i'.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is [10, 20][0]?", ["10", "20", "0", "Error"], 0, "First element: [10, 20][0] = 10.", `Index 0 is the first list element.

Beginner:
• [10, 20][0] is the first element of the list. So we get 10. So the result is 10.
• So indexing starts at 0. So [10, 20][0] = 10, [10, 20][1] = 20. So the answer is 10.

Intermediate:
• [10, 20][0] = 10. So index 0 is the first element. So the answer is 10.
• So [10, 20][0] = 10.

Expert:
• [10, 20][0] = 10. So list indexing. So the result is 10.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is [10, 20][1]?", ["20", "10", "1", "Error"], 0, "Second element: [10, 20][1] = 20.", `Index 1 is the second element.

Beginner:
• [10, 20][1] is the second element of the list. So we get 20. So the result is 20.
• So index 1 is the second element. So [10, 20][1] = 20. So the answer is 20.

Intermediate:
• [10, 20][1] = 20. So index 1 is the second element. So the answer is 20.
• So [10, 20][1] = 20.

Expert:
• [10, 20][1] = 20. So list indexing. So the result is 20.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is [5, 6, 7][-1]?", ["7", "5", "6", "Error"], 0, "Last element: [5,6,7][-1] = 7.", `Index -1 is the last element.

Beginner:
• [5, 6, 7][-1] is the last element. So we get 7. So the result is 7. (Negative index: -1 = last.)
• So -1 is the last element. So [5, 6, 7][-1] = 7. So the answer is 7.

Intermediate:
• [5, 6, 7][-1] = 7. So negative indices count from the end. So the answer is 7.
• So [5, 6, 7][-1] = 7.

Expert:
• [5, 6, 7][-1] = 7. So negative index; -1 is last. So the result is 7.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 'abc'[1:2]?", ["'b'", "'ab'", "'bc'", "Error"], 0, "Slice: 'abc'[1:2] = 'b'.", `Slice [1:2] is from index 1 up to (not including) 2.

Beginner:
• 'abc'[1:2] takes a slice from index 1 to (but not including) 2. So we get the character at index 1: 'b'. So the result is 'b'.
• So [start:stop] goes from start up to (not including) stop. So 'abc'[1:2] = 'b'. So the answer is 'b'.

Intermediate:
• 'abc'[1:2] = 'b'. So slice [1:2] is indices 1..2 exclusive. So we get one character. So the answer is 'b'.
• So 'abc'[1:2] = 'b'.

Expert:
• 'abc'[1:2] = 'b'. So slice; start=1, stop=2, step=1. So the result is 'b'.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 'abc'[:2]?", ["'ab'", "'abc'", "'a'", "Error"], 0, "From start: 'abc'[:2] = 'ab'.", `[:2] means from start to index 2 (exclusive).

Beginner:
• 'abc'[:2] takes from the start up to (not including) index 2. So we get 'ab'. So the result is 'ab'.
• So missing start means "from the beginning". So 'abc'[:2] = 'ab'. So the answer is 'ab'.

Intermediate:
• 'abc'[:2] = 'ab'. So [:2] is the same as [0:2]. So we get indices 0 and 1. So the answer is 'ab'.
• So 'abc'[:2] = 'ab'.

Expert:
• 'abc'[:2] = 'ab'. So slice; start defaults to 0. So the result is 'ab'.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 'abc'[1:]?", ["'bc'", "'ab'", "'abc'", "Error"], 0, "To end: 'abc'[1:] = 'bc'.", `[1:] means from index 1 to end.

Beginner:
• 'abc'[1:] takes from index 1 to the end. So we get 'bc'. So the result is 'bc'.
• So missing stop means "to the end". So 'abc'[1:] = 'bc'. So the answer is 'bc'.

Intermediate:
• 'abc'[1:] = 'bc'. So [1:] is the same as [1:len('abc')]. So we get indices 1 and 2. So the answer is 'bc'.
• So 'abc'[1:] = 'bc'.

Expert:
• 'abc'[1:] = 'bc'. So slice; stop defaults to end. So the result is 'bc'.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is list('ab')?", ["['a', 'b']", "'ab'", "['ab']", "Error"], 0, "list('ab') = ['a', 'b'].", `list() turns each character into a list element.

Beginner:
• list('ab') turns the string 'ab' into a list of its characters. So we get ['a', 'b']. So the result is ['a', 'b'].
• So list() on a string gives a list of one-character strings. So list('ab') = ['a', 'b']. So the answer is ['a', 'b'].

Intermediate:
• list('ab') = ['a', 'b']. So list(iterable) consumes the iterable and makes a list. So list('hello') = ['h','e','l','l','o']. So the answer is ['a', 'b'].
• So list('ab') = ['a', 'b'].

Expert:
• list('ab') = ['a', 'b']. So list(iterable); str is iterable of characters. So the result is ['a', 'b'].

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is tuple([1, 2])?", ["(1, 2)", "[1, 2]", "(2, 1)", "Error"], 0, "tuple([1, 2]) = (1, 2).", `tuple() converts a list to a tuple.

Beginner:
• tuple([1, 2]) turns the list [1, 2] into a tuple with the same elements. So we get (1, 2). So the result is (1, 2).
• So tuple() on a list gives a tuple. So tuple([1, 2]) = (1, 2). So the answer is (1, 2).

Intermediate:
• tuple([1, 2]) = (1, 2). So tuple(iterable) makes a tuple from the iterable. So the answer is (1, 2).
• So tuple([1, 2]) = (1, 2).

Expert:
• tuple([1, 2]) = (1, 2). So tuple(iterable); list is iterable. So the result is (1, 2).

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is set([1, 1, 2])?", ["{1, 2}", "[1, 2]", "{1, 1, 2}", "Error"], 0, "set removes duplicates: {1, 2}.", `Sets have no duplicates; set([1,1,2]) = {1, 2}.

Beginner:
• set([1, 1, 2]) creates a set from the list. Sets have no duplicates, so we get {1, 2}. So the result is {1, 2}.
• So set() removes duplicate values. So set([1, 1, 2]) = {1, 2}. So the answer is {1, 2}.

Intermediate:
• set([1, 1, 2]) = {1, 2}. So sets contain unique elements only. So the order may change (sets are unordered). So the answer is {1, 2}.
• So set([1, 1, 2]) = {1, 2}.

Expert:
• set([1, 1, 2]) = {1, 2}. So set(iterable); duplicates removed. So the result is {1, 2}.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is dict()?", ["{}", "[]", "None", "Error"], 0, "dict() creates an empty dict.", `dict() returns an empty dictionary.

Beginner:
• dict() creates an empty dictionary. So we get {}. So the result is {}.
• So dict() with no arguments gives an empty dict. So dict() = {}. So the answer is {}.

Intermediate:
• dict() = {}. So empty dictionary. So {} also creates an empty dict. So the answer is {}.
• So dict() = {}.

Expert:
• dict() = {}. So empty dict. So the result is {}.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is list()?", ["[]", "()", "None", "Error"], 0, "list() creates an empty list.", `list() returns an empty list.

Beginner:
• list() creates an empty list. So we get []. So the result is [].
• So list() with no arguments gives an empty list. So list() = []. So the answer is [].

Intermediate:
• list() = []. So empty list. So [] also creates an empty list. So the answer is [].
• So list() = [].

Expert:
• list() = []. So empty list. So the result is [].

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is str(10)?", ["'10'", "10", "10.0", "Error"], 0, "str(10) = '10'.", `str() converts a number to a string.

Beginner:
• str(10) converts the number 10 to the string '10'. So we get '10'. So the result is '10'.
• So str() turns a value into text. So str(10) = '10'. So the answer is '10'.

Intermediate:
• str(10) = '10'. So the result is a string. So str(10) + str(5) = '105', not 15. So the answer is '10'.
• So str(10) = '10'.

Expert:
• str(10) = '10'. So int to str. So the result is '10'.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is int('5')?", ["5", "'5'", "5.0", "Error"], 0, "int('5') = 5.", `int() converts a numeric string to int.

Beginner:
• int('5') converts the string '5' to the integer 5. So we get 5. So the result is 5.
• So int() on a numeric string gives the number. So int('5') = 5. So the answer is 5.

Intermediate:
• int('5') = 5. So int(string) parses the string. So int('42') = 42. So the answer is 5.
• So int('5') = 5.

Expert:
• int('5') = 5. So int(string) parses. So the result is 5.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is float('2.5')?", ["2.5", "2", "'2.5'", "Error"], 0, "float('2.5') = 2.5.", `float() converts a string to float.

Beginner:
• float('2.5') converts the string '2.5' to the float 2.5. So we get 2.5. So the result is 2.5.
• So float() on a numeric string gives the decimal number. So float('2.5') = 2.5. So the answer is 2.5.

Intermediate:
• float('2.5') = 2.5. So float(string) parses the string. So float('3.14') = 3.14. So the answer is 2.5.
• So float('2.5') = 2.5.

Expert:
• float('2.5') = 2.5. So float(string) parses. So the result is 2.5.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 4 ** 0.5?", ["2.0", "2", "0.5", "Error"], 0, "Square root of 4 is 2.0.", `4 ** 0.5 is the square root of 4.

Beginner:
• 4 ** 0.5 means 4 to the power of 0.5, which is the square root of 4. So we get 2.0. So the result is 2.0.
• So a power of 0.5 is the square root. So 4 ** 0.5 = 2.0. So the answer is 2.0.

Intermediate:
• 4 ** 0.5 = 2.0. So x ** 0.5 is the square root of x. So 9 ** 0.5 = 3.0. The result is a float. So the answer is 2.0.
• So 4 ** 0.5 = 2.0.

Expert:
• 4 ** 0.5 = 2.0. So float exponent gives float result. So the result is 2.0.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 0 ** 5?", ["0", "1", "5", "Error"], 0, "0 to any positive power is 0.", `0 ** n = 0 for n > 0.

Beginner:
• 0 ** 5 means 0 to the power of 5. Zero times itself any positive number of times is still 0. So the result is 0.
• So 0 ** 1 = 0, 0 ** 5 = 0. So the answer is 0.

Intermediate:
• 0 ** 5 = 0. So for n > 0, 0 ** n = 0. Note: 0 ** 0 is 1 in Python. So the answer is 0.
• So 0 to any positive power is 0. So 0 ** 5 = 0.

Expert:
• 0 ** 5 = 0. So 0 ** n for n > 0 is 0. So the result is 0.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 5 ** 0?", ["1", "0", "5", "Error"], 0, "Any number to power 0 is 1.", `For any number a, a**0 = 1.

Beginner:
• 5 ** 0 means 5 to the power of 0. In math, any (non-zero) number to the power of 0 is 1. So the result is 1.
• So 5 ** 0 = 1. So the answer is 1.

Intermediate:
• 5 ** 0 = 1. So a ** 0 = 1 for any a (including 0 ** 0 = 1 in Python). So the answer is 1.
• So any number to the power 0 is 1. So 5 ** 0 = 1.

Expert:
• 5 ** 0 = 1. So by convention a**0 = 1. So the result is 1.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 2 < 5?", ["True", "False", "1", "Error"], 0, "2 is less than 5.", `2 < 5 is True.

Beginner:
• 2 < 5 asks: is 2 less than 5? Yes. So the result is True.
• So < means "less than". So 2 < 5 is True. So the answer is True.

Intermediate:
• 2 < 5 is True. So the result is a bool. So the answer is True.
• So 2 < 5 is True.

Expert:
• 2 < 5 is True. So less-than comparison. So the result is True.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 5 > 2?", ["True", "False", "1", "Error"], 0, "5 is greater than 2.", `5 > 2 is True.

Beginner:
• 5 > 2 asks: is 5 greater than 2? Yes. So the result is True.
• So > means "greater than". So 5 > 2 is True. So the answer is True.

Intermediate:
• 5 > 2 is True. So the result is a bool. So the answer is True.
• So 5 > 2 is True.

Expert:
• 5 > 2 is True. So greater-than comparison. So the result is True.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 3 <= 3?", ["True", "False", "1", "Error"], 0, "3 <= 3 is True.", `<= means less than or equal.

Beginner:
• 3 <= 3 asks: is 3 less than or equal to 3? Yes (3 equals 3). So the result is True.
• So <= includes equality. So 3 <= 3 is True. So the answer is True.

Intermediate:
• 3 <= 3 is True. So <= is True when < or ==. So the answer is True.
• So 3 <= 3 is True.

Expert:
• 3 <= 3 is True. So less-than-or-equal. So the result is True.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 4 >= 5?", ["False", "True", "0", "Error"], 0, "4 >= 5 is False.", `4 is not greater than or equal to 5.

Beginner:
• 4 >= 5 asks: is 4 greater than or equal to 5? No. So the result is False.
• So >= means "greater than or equal". So 4 >= 5 is False. So the answer is False.

Intermediate:
• 4 >= 5 is False. So 4 is less than 5, so >= is False. So the answer is False.
• So 4 >= 5 is False.

Expert:
• 4 >= 5 is False. So greater-than-or-equal fails. So the result is False.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 1 != 1?", ["False", "True", "0", "Error"], 0, "1 equals 1, so 1 != 1 is False.", `!= is 'not equal'; 1 == 1 so 1 != 1 is False.

Beginner:
• 1 != 1 asks: is 1 not equal to 1? No—1 equals 1. So the result is False.
• So != means "not equal". So 1 != 1 is False. So the answer is False.

Intermediate:
• 1 != 1 is False. So 1 == 1 is True, so 1 != 1 is False. So the answer is False.
• So 1 != 1 is False.

Expert:
• 1 != 1 is False. So inequality fails. So the result is False.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 0 or 5?", ["5", "0", "True", "Error"], 0, "0 or 5: first falsy, so 5.", `or returns first truthy or last value; 0 is falsy, so 5.

Beginner:
• 0 or 5: 0 is falsy, so we look at 5. 5 is truthy, so the result is 5 (the first truthy value).
• So or gives the first "truthy" value, or the last if all are "falsy". So 0 or 5 = 5. So the answer is 5.

Intermediate:
• 0 or 5 = 5. So or short-circuits: first truthy wins. So 0 or 5 returns 5. So the answer is 5.
• So 0 or 5 = 5.

Expert:
• 0 or 5 = 5. So or returns first truthy or last. So the result is 5.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 3 or 0?", ["3", "0", "True", "Error"], 0, "3 or 0: first truthy, so 3.", `3 is truthy, so or returns 3.

Beginner:
• 3 or 0: 3 is truthy, so the result is 3 (the first truthy value). We don't need to look at 0.
• So or gives the first truthy. So 3 or 0 = 3. So the answer is 3.

Intermediate:
• 3 or 0 = 3. So or short-circuits: 3 is truthy, so we return 3. So the answer is 3.
• So 3 or 0 = 3.

Expert:
• 3 or 0 = 3. So or returns first truthy. So the result is 3.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 0 and 5?", ["0", "5", "False", "Error"], 0, "0 and 5: short-circuit to 0.", `and short-circuits on first falsy; 0 is falsy.

Beginner:
• 0 and 5: 0 is falsy, so the result is 0 (the first falsy value). We don't need to look at 5.
• So and gives the first falsy, or the last if all are truthy. So 0 and 5 = 0. So the answer is 0.

Intermediate:
• 0 and 5 = 0. So and short-circuits: 0 is falsy, so we return 0. So the answer is 0.
• So 0 and 5 = 0.

Expert:
• 0 and 5 = 0. So and returns first falsy. So the result is 0.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 3 and 4?", ["4", "3", "True", "Error"], 0, "3 and 4: both truthy, returns last: 4.", `and returns last value when both are truthy.

Beginner:
• 3 and 4: both are truthy, so we get the last value: 4. So the result is 4.
• So and gives the first falsy or the last. Here both are truthy, so we get 4. So the answer is 4.

Intermediate:
• 3 and 4 = 4. So and returns the last when both are truthy. So the answer is 4.
• So 3 and 4 = 4.

Expert:
• 3 and 4 = 4. So and returns last when both truthy. So the result is 4.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is len((1, 2))?", ["2", "1", "3", "Error"], 0, "Tuple of two elements has length 2.", `len((1, 2)) = 2.

Beginner:
• (1, 2) has two elements, so len((1, 2)) is 2. So the result is 2.
• So len() works on tuples too. So len((1, 2)) = 2. So the answer is 2.

Intermediate:
• len((1, 2)) = 2. So tuple has two elements. So the answer is 2.
• So len((1, 2)) = 2.

Expert:
• len((1, 2)) = 2. So tuple length. So the result is 2.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is len({1, 2})?", ["2", "1", "3", "Error"], 0, "Set of two elements has length 2.", `len({1, 2}) = 2.

Beginner:
• {1, 2} has two elements, so len({1, 2}) is 2. So the result is 2.
• So len() works on sets too. So len({1, 2}) = 2. So the answer is 2.

Intermediate:
• len({1, 2}) = 2. So set has two unique elements. So the answer is 2.
• So len({1, 2}) = 2.

Expert:
• len({1, 2}) = 2. So set length. So the result is 2.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is len({1: 2})?", ["1", "2", "0", "Error"], 0, "Dict with one key has length 1.", `len(dict) returns the number of key-value pairs.

Beginner:
• {1: 2} has one key-value pair, so len({1: 2}) is 1. So the result is 1.
• So len() on a dict counts the number of keys. So len({1: 2}) = 1. So the answer is 1.

Intermediate:
• len({1: 2}) = 1. So one key means length 1. So the answer is 1.
• So len({1: 2}) = 1.

Expert:
• len({1: 2}) = 1. So dict length is number of keys. So the result is 1.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is sum([1, 2, 3])?", ["6", "5", "7", "Error"], 0, "sum([1, 2, 3]) = 6.", `sum() adds all numbers in the iterable.

Beginner:
• sum([1, 2, 3]) adds 1 + 2 + 3 = 6. So the result is 6.
• So sum() adds all the numbers in the list. So sum([1, 2, 3]) = 6. So the answer is 6.

Intermediate:
• sum([1, 2, 3]) = 6. So sum(iterable) adds all elements. So the answer is 6.
• So sum([1, 2, 3]) = 6.

Expert:
• sum([1, 2, 3]) = 6. So sum of iterable. So the result is 6.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is sum([])?", ["0", "None", "Error", "1"], 0, "sum([]) = 0.", `Sum of empty list is 0.

Beginner:
• sum([]) is the sum of no numbers, which is 0. So the result is 0.
• So sum of an empty list is 0. So sum([]) = 0. So the answer is 0.

Intermediate:
• sum([]) = 0. So default start for sum() is 0. So the answer is 0.
• So sum([]) = 0.

Expert:
• sum([]) = 0. So empty sum is 0. So the result is 0.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is min(3, 1, 2)?", ["1", "2", "3", "Error"], 0, "min(3, 1, 2) = 1.", `min() returns the smallest argument.

Beginner:
• min(3, 1, 2) returns the smallest of 3, 1, and 2. So we get 1. So the result is 1.
• So min() gives the minimum. So min(3, 1, 2) = 1. So the answer is 1.

Intermediate:
• min(3, 1, 2) = 1. So min() can take multiple arguments. So the answer is 1.
• So min(3, 1, 2) = 1.

Expert:
• min(3, 1, 2) = 1. So minimum. So the result is 1.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is max(3, 1, 2)?", ["3", "2", "1", "Error"], 0, "max(3, 1, 2) = 3.", `max() returns the largest argument.

Beginner:
• max(3, 1, 2) returns the largest of 3, 1, and 2. So we get 3. So the result is 3.
• So max() gives the maximum. So max(3, 1, 2) = 3. So the answer is 3.

Intermediate:
• max(3, 1, 2) = 3. So max() can take multiple arguments. So the answer is 3.
• So max(3, 1, 2) = 3.

Expert:
• max(3, 1, 2) = 3. So maximum. So the result is 3.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is abs(5)?", ["5", "-5", "0", "Error"], 0, "abs(5) = 5.", `abs() of a positive number is that number.

Beginner:
• abs(5) is the absolute value of 5. 5 is already positive, so we get 5. So the result is 5.
• So abs() of a positive number is the same number. So abs(5) = 5. So the answer is 5.

Intermediate:
• abs(5) = 5. So abs(x) is x when x >= 0. So the answer is 5.
• So abs(5) = 5.

Expert:
• abs(5) = 5. So absolute value. So the result is 5.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is pow(2, 3)?", ["8", "6", "9", "Error"], 0, "pow(2, 3) = 8.", `pow(2, 3) is 2**3 = 8.

Beginner:
• pow(2, 3) means 2 to the power of 3: 2*2*2 = 8. So the result is 8.
• So pow(base, exp) is the same as base ** exp. So pow(2, 3) = 8. So the answer is 8.

Intermediate:
• pow(2, 3) = 8. So pow(2, 3) is 2**3. So the answer is 8.
• So pow(2, 3) = 8.

Expert:
• pow(2, 3) = 8. So exponentiation. So the result is 8.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is divmod(7, 2)?", ["(3, 1)", "(3.5, 0)", "(4, 1)", "Error"], 0, "divmod(7, 2) = (3, 1): quotient and remainder.", `divmod(a, b) returns (a//b, a%b).

Beginner:
• divmod(7, 2) gives the quotient and remainder of 7 ÷ 2. So 7 = 3*2 + 1; we get (3, 1). So the result is (3, 1).
• So divmod() gives (whole part, remainder). So divmod(7, 2) = (3, 1). So the answer is (3, 1).

Intermediate:
• divmod(7, 2) = (3, 1). So 7 // 2 = 3 and 7 % 2 = 1. So the answer is (3, 1).
• So divmod(7, 2) = (3, 1).

Expert:
• divmod(7, 2) = (3, 1). So (quotient, remainder). So the result is (3, 1).

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 3 in (1, 2, 3)?", ["True", "False", "1", "Error"], 0, "3 is in the tuple.", `in checks membership in tuple.

Beginner:
• 3 in (1, 2, 3) asks: is 3 an element of the tuple? Yes. So the result is True.
• So in works on tuples too. So 3 in (1, 2, 3) is True. So the answer is True.

Intermediate:
• 3 in (1, 2, 3) is True. So membership in tuple. So the answer is True.
• So 3 in (1, 2, 3) is True.

Expert:
• 3 in (1, 2, 3) is True. So membership. So the result is True.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 0 not in [1, 2]?", ["True", "False", "1", "Error"], 0, "0 is not in [1, 2].", `not in checks absence.

Beginner:
• 0 not in [1, 2] asks: is 0 not in the list? Yes—0 is not in [1, 2]. So the result is True.
• So "not in" is True when the value is absent. So 0 not in [1, 2] is True. So the answer is True.

Intermediate:
• 0 not in [1, 2] is True. So 0 in [1, 2] is False; not in is the opposite. So the answer is True.
• So 0 not in [1, 2] is True.

Expert:
• 0 not in [1, 2] is True. So not in. So the result is True.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 'ab' == 'ab'?", ["True", "False", "1", "Error"], 0, "Equal strings.", `== compares strings by content.

Beginner:
• 'ab' == 'ab' asks: are the two strings the same? Yes. So the result is True.
• So == for strings compares character by character. So 'ab' == 'ab' is True. So the answer is True.

Intermediate:
• 'ab' == 'ab' is True. So value equality for strings. So the answer is True.
• So 'ab' == 'ab' is True.

Expert:
• 'ab' == 'ab' is True. So content equality. So the result is True.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is [1] == [1]?", ["True", "False", "1", "Error"], 0, "Equal lists (by value).", `== compares lists by value.

Beginner:
• [1] == [1] asks: do the two lists have the same content? Yes—both have one element, 1. So the result is True.
• So == for lists compares element by element. So [1] == [1] is True. So the answer is True.

Intermediate:
• [1] == [1] is True. So value equality for lists (not identity). So the answer is True.
• So [1] == [1] is True.

Expert:
• [1] == [1] is True. So value equality. So the result is True.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is (1,) == (1,)?", ["True", "False", "1", "Error"], 0, "Equal tuples.", `== compares tuples by value.

Beginner:
• (1,) == (1,) asks: do the two tuples have the same content? Yes. So the result is True.
• So == for tuples compares element by element. So (1,) == (1,) is True. So the answer is True.

Intermediate:
• (1,) == (1,) is True. So value equality for tuples. So the answer is True.
• So (1,) == (1,) is True.

Expert:
• (1,) == (1,) is True. So value equality. So the result is True.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is type(2 + 2)?", ["<class 'int'>", "<class 'float'>", "<class 'str'>", "None"], 0, "2 + 2 is 4, an int.", `2+2=4; type(4) is int.

Beginner:
• 2 + 2 is 4, and 4 is an integer. So type(2+2) is <class 'int'>. So the result is <class 'int'>.
• So adding two ints gives an int. So type(2+2) is int. So the answer is <class 'int'>.

Intermediate:
• 2+2=4; type(4) is int. So type(2+2) returns the int class. So the answer is <class 'int'>.
• So type(2+2) is int.

Expert:
• type(2+2) is int. So int + int -> int. So the result is <class 'int'>.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is type(2 + 2.0)?", ["<class 'float'>", "<class 'int'>", "<class 'str'>", "None"], 0, "int + float gives float.", `Mixed arithmetic: int + float promotes to float.

Beginner:
• 2 + 2.0 is 4.0 (a float). When you mix int and float, the result is a float. So type(2+2.0) is <class 'float'>.
• So int + float gives float. So type(2+2.0) is float. So the answer is <class 'float'>.

Intermediate:
• 2+2.0=4.0; type(4.0) is float. So type promotion. So the answer is <class 'float'>.
• So type(2+2.0) is float.

Expert:
• type(2+2.0) is float. So int + float -> float. So the result is <class 'float'>.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is type(2.0 + 2.0)?", ["<class 'float'>", "<class 'int'>", "<class 'str'>", "None"], 0, "float + float is float.", `type(4.0) is float.

Beginner:
• 2.0 + 2.0 is 4.0 (a float). So type(2.0+2.0) is <class 'float'>. So the result is <class 'float'>.
• So float + float gives float. So type(2.0+2.0) is float. So the answer is <class 'float'>.

Intermediate:
• 2.0+2.0=4.0; type(4.0) is float. So the answer is <class 'float'>.
• So type(2.0+2.0) is float.

Expert:
• type(2.0+2.0) is float. So float + float -> float. So the result is <class 'float'>.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is type('a' * 2)?", ["<class 'str'>", "<class 'int'>", "<class 'list'>", "None"], 0, "'a' * 2 = 'aa', a string.", `String repetition gives a string.

Beginner:
• 'a' * 2 is 'aa', a string. So type('a'*2) is <class 'str'>. So the result is <class 'str'>.
• So string * int gives a string. So type('a'*2) is str. So the answer is <class 'str'>.

Intermediate:
• 'a'*2='aa'; type('aa') is str. So the answer is <class 'str'>.
• So type('a'*2) is str.

Expert:
• type('a'*2) is str. So str * int -> str. So the result is <class 'str'>.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is type([1] * 2)?", ["<class 'list'>", "<class 'tuple'>", "<class 'int'>", "None"], 0, "[1] * 2 = [1, 1], a list.", `List repetition gives a list.

Beginner:
• [1] * 2 is [1, 1], a list. So type([1]*2) is <class 'list'>. So the result is <class 'list'>.
• So list * int gives a list. So type([1]*2) is list. So the answer is <class 'list'>.

Intermediate:
• [1]*2=[1,1]; type([1,1]) is list. So the answer is <class 'list'>.
• So type([1]*2) is list.

Expert:
• type([1]*2) is list. So list * int -> list. So the result is <class 'list'>.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is type(True + True)?", ["<class 'int'>", "<class 'bool'>", "<class 'str'>", "None"], 0, "True + True = 2 (bool is subclass of int).", `In arithmetic, True becomes 1; 1+1=2, type int.

Beginner:
• True + True: in arithmetic, True acts like 1. So 1 + 1 = 2. So type(True+True) is <class 'int'>. So the result is <class 'int'>.
• So bool is a kind of int in Python; True is 1. So True+True=2, type int. So the answer is <class 'int'>.

Intermediate:
• True+True=2; type(2) is int. So bool is subclass of int; in arithmetic they become 0/1. So the answer is <class 'int'>.
• So type(True+True) is int.

Expert:
• type(True+True) is int. So bool is subclass of int; arithmetic yields int. So the result is <class 'int'>.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is type(len(''))?", ["<class 'int'>", "<class 'float'>", "<class 'str'>", "None"], 0, "len() returns an integer.", `len() always returns an int.

Beginner:
• len('') is 0, and 0 is an integer. So type(len('')) is <class 'int'>. So the result is <class 'int'>.
• So len() always returns an int. So type(len('')) is int. So the answer is <class 'int'>.

Intermediate:
• len('')=0; type(0) is int. So len() always returns int. So the answer is <class 'int'>.
• So type(len('')) is int.

Expert:
• type(len('')) is int. So len returns int. So the result is <class 'int'>.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is type(3.14)?", ["<class 'float'>", "<class 'int'>", "<class 'str'>", "None"], 0, "3.14 is a float.", `type(3.14) is float.

Beginner:
• 3.14 is a decimal number (float). So type(3.14) is <class 'float'>. So the result is <class 'float'>.
• So numbers with a decimal point are floats. So type(3.14) is float. So the answer is <class 'float'>.

Intermediate:
• type(3.14) is float. So literal with decimal point is float. So the answer is <class 'float'>.
• So type(3.14) is float.

Expert:
• type(3.14) is float. So float literal. So the result is <class 'float'>.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is type('3.14')?", ["<class 'str'>", "<class 'float'>", "<class 'int'>", "None"], 0, "'3.14' is a string.", `Quotes make it a string, not a number.

Beginner:
• '3.14' is in quotes, so it is a string, not a number. So type('3.14') is <class 'str'>. So the result is <class 'str'>.
• So quotes create a string. So type('3.14') is str. So the answer is <class 'str'>.

Intermediate:
• type('3.14') is str. So it's text, not a float. To get a number use float('3.14'). So the answer is <class 'str'>.
• So type('3.14') is str.

Expert:
• type('3.14') is str. So string literal. So the result is <class 'str'>.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is type(0)?", ["<class 'int'>", "<class 'float'>", "<class 'bool'>", "None"], 0, "0 is an int.", `type(0) is int.

Beginner:
• 0 is a whole number (integer). So type(0) is <class 'int'>. So the result is <class 'int'>.
• So 0 is an int, not a bool. So type(0) is int. So the answer is <class 'int'>.

Intermediate:
• type(0) is int. So 0 is int; 0 == False is True but type(0) is int. So the answer is <class 'int'>.
• So type(0) is int.

Expert:
• type(0) is int. So int literal. So the result is <class 'int'>.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is type(1)?", ["<class 'int'>", "<class 'float'>", "<class 'bool'>", "None"], 0, "1 is an int.", `type(1) is int.

Beginner:
• 1 is a whole number (integer). So type(1) is <class 'int'>. So the result is <class 'int'>.
• So 1 is an int, not a bool. So type(1) is int. So the answer is <class 'int'>.

Intermediate:
• type(1) is int. So 1 is int; 1 == True is True but type(1) is int. So the answer is <class 'int'>.
• So type(1) is int.

Expert:
• type(1) is int. So int literal. So the result is <class 'int'>.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  // 244-300: more unique beginner questions
  ["What is 7 + 8?", ["15", "78", "1", "Error"], 0, "7 + 8 = 15.", `Addition: 7 + 8 = 15.

Beginner:
• 7 + 8 is 15. So the result is 15.
• So + between numbers is addition. So 7 + 8 = 15. So the answer is 15.

Intermediate:
• 7 + 8 = 15. Both are ints. So the answer is 15.
• So 7 + 8 = 15.

Expert:
• 7 + 8 = 15. So the result is 15.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 20 - 7?", ["13", "27", "14", "Error"], 0, "20 - 7 = 13.", `Subtraction: 20 - 7 = 13.

Beginner:
• 20 - 7 is 13. So the result is 13.
• So - between numbers is subtraction. So 20 - 7 = 13. So the answer is 13.

Intermediate:
• 20 - 7 = 13. Both are ints. So the answer is 13.
• So 20 - 7 = 13.

Expert:
• 20 - 7 = 13. So the result is 13.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 5 * 4?", ["20", "9", "54", "Error"], 0, "5 * 4 = 20.", `Multiplication. 5 * 4 = 20.

Beginner:
• 5 * 4 is 20. So the result is 20.
• So * is multiplication. So 5 * 4 = 20. So the answer is 20.

Intermediate:
• 5 * 4 = 20. Both are ints. So the answer is 20.
• So 5 * 4 = 20.

Expert:
• 5 * 4 = 20. So the result is 20.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 16 / 4?", ["4.0", "4", "12", "Error"], 0, "16 / 4 = 4.0.", `Division in Python 3 returns float.

Beginner:
• 16 / 4 is 4.0. In Python 3, / always gives a float. So the result is 4.0.
• So / is division and gives a float. So 16 / 4 = 4.0. So the answer is 4.0.

Intermediate:
• 16 / 4 = 4.0. So / returns float. So the answer is 4.0.
• So 16 / 4 = 4.0.

Expert:
• 16 / 4 = 4.0. So / returns float. So the result is 4.0.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 18 // 5?", ["3", "3.6", "4", "Error"], 0, "18 // 5 = 3.", `Integer division; 18 // 5 = 3.

Beginner:
• 18 // 5 is the whole-number part of 18 ÷ 5. So 18 ÷ 5 = 3.6...; we take 3. So the result is 3.
• So // is integer division. So 18 // 5 = 3. So the answer is 3.

Intermediate:
• 18 // 5 = 3. So 18 % 5 = 3. So the answer is 3.
• So 18 // 5 = 3.

Expert:
• 18 // 5 = 3. So floor division. So the result is 3.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 18 % 5?", ["3", "0", "4", "Error"], 0, "18 % 5 = 3.", `Remainder when 18 is divided by 5.

Beginner:
• 18 % 5 is the remainder when you divide 18 by 5. So 18 = 3*5 + 3; the remainder is 3. So the result is 3.
• So % is the remainder. So 18 % 5 = 3. So the answer is 3.

Intermediate:
• 18 % 5 = 3. So 18 // 5 = 3 and 18 % 5 = 3. So the answer is 3.
• So 18 % 5 = 3.

Expert:
• 18 % 5 = 3. So remainder. So the result is 3.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 4 ** 2?", ["16", "8", "6", "Error"], 0, "4 ** 2 = 16.", `4 squared is 16.

Beginner:
• 4 ** 2 means 4 to the power of 2: 4*4 = 16. So the result is 16.
• So ** is exponentiation. So 4 ** 2 = 16. So the answer is 16.

Intermediate:
• 4 ** 2 = 16. So 4 squared. So the answer is 16.
• So 4 ** 2 = 16.

Expert:
• 4 ** 2 = 16. So exponentiation. So the result is 16.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is len('hello')?", ["5", "4", "6", "Error"], 0, "'hello' has 5 characters.", `len() counts characters in a string.

Beginner:
• 'hello' has 5 letters: h, e, l, l, o. So len('hello') is 5. So the result is 5.
• So len() on a string counts characters. So len('hello') = 5. So the answer is 5.

Intermediate:
• len('hello') = 5. So 5 characters. So the answer is 5.
• So len('hello') = 5.

Expert:
• len('hello') = 5. So str length. So the result is 5.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is len([1, 2, 3])?", ["3", "2", "4", "Error"], 0, "List has 3 elements.", `len() returns the number of items in a list.

Beginner:
• [1, 2, 3] has three items, so len([1, 2, 3]) is 3. So the result is 3.
• So len() on a list counts items. So len([1, 2, 3]) = 3. So the answer is 3.

Intermediate:
• len([1, 2, 3]) = 3. So three elements. So the answer is 3.
• So len([1, 2, 3]) = 3.

Expert:
• len([1, 2, 3]) = 3. So list length. So the result is 3.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is bool([])?", ["False", "True", "[]", "Error"], 0, "Empty list is falsy.", `Empty list is falsy in Python.

Beginner:
• The empty list [] is "falsy". So bool([]) is False. So the result is False.
• So empty list is falsy. So bool([]) is False. So the answer is False.

Intermediate:
• bool([]) is False. So empty sequences are falsy. So the answer is False.
• So bool([]) is False.

Expert:
• bool([]) is False. So empty list is falsy. So the result is False.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is bool([0])?", ["True", "False", "0", "Error"], 0, "Non-empty list is truthy.", `Non-empty list is truthy even if it contains 0.

Beginner:
• [0] has one item, so the list is "truthy". So bool([0]) is True. So the result is True. (It's the list that's truthy, not the 0 inside.)
• So non-empty list is truthy. So bool([0]) is True. So the answer is True.

Intermediate:
• bool([0]) is True. So the list has length 1; truthiness is about the container. So the answer is True.
• So bool([0]) is True.

Expert:
• bool([0]) is True. So non-empty list is truthy. So the result is True.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is int(0.9)?", ["0", "1", "0.0", "Error"], 0, "int() truncates: int(0.9) = 0.", `int() truncates toward zero.

Beginner:
• int(0.9) drops the decimal part. So we get 0 (not 1—Python truncates toward zero). So the result is 0.
• So int() does not round. So int(0.9) = 0. So the answer is 0.

Intermediate:
• int(0.9) = 0. So truncation toward zero. So the answer is 0.
• So int(0.9) = 0.

Expert:
• int(0.9) = 0. So truncate toward zero. So the result is 0.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is str(0)?", ["'0'", "0", "0.0", "Error"], 0, "str(0) = '0' (string).", `str() converts a number to a string.

Beginner:
• str(0) converts the number 0 to the string '0'. So we get '0'. So the result is '0'.
• So str() turns a value into text. So str(0) = '0'. So the answer is '0'.

Intermediate:
• str(0) = '0'. So the result is a string. So the answer is '0'.
• So str(0) = '0'.

Expert:
• str(0) = '0'. So int to str. So the result is '0'.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 'no' + 'te'?", ["'note'", "'no te'", "'teno'", "Error"], 0, "String concatenation.", `+ concatenates strings: 'no' + 'te' = 'note'.

Beginner:
• 'no' + 'te' joins the two strings: we get 'note'. So the result is 'note'.
• So + for strings means put together. So 'no' + 'te' = 'note'. So the answer is 'note'.

Intermediate:
• 'no' + 'te' = 'note'. So string concatenation. So the answer is 'note'.
• So 'no' + 'te' = 'note'.

Expert:
• 'no' + 'te' = 'note'. So concatenation. So the result is 'note'.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 'o' * 4?", ["'oooo'", "'o o o o'", "4", "Error"], 0, "'o' * 4 = 'oooo'.", `String * int repeats the string.

Beginner:
• 'o' * 4 repeats 'o' four times: 'oooo'. So the result is 'oooo'.
• So string * number repeats. So 'o' * 4 = 'oooo'. So the answer is 'oooo'.

Intermediate:
• 'o' * 4 = 'oooo'. So repetition. So the answer is 'oooo'.
• So 'o' * 4 = 'oooo'.

Expert:
• 'o' * 4 = 'oooo'. So str * int. So the result is 'oooo'.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is [3] + [4]?", ["[3, 4]", "[7]", "[4, 3]", "Error"], 0, "List concatenation.", `+ concatenates lists.

Beginner:
• [3] + [4] joins the two lists: we get [3, 4]. So the result is [3, 4].
• So + for lists means put together. So [3] + [4] = [3, 4]. So the answer is [3, 4].

Intermediate:
• [3] + [4] = [3, 4]. So list concatenation. So the answer is [3, 4].
• So [3] + [4] = [3, 4].

Expert:
• [3] + [4] = [3, 4]. So list concatenation. So the result is [3, 4].

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 'dog'[0]?", ["'d'", "'o'", "'g'", "Error"], 0, "First character of 'dog'.", `Index 0 is the first character.

Beginner:
• 'dog'[0] is the first character: 'd'. So the result is 'd'.
• So index 0 is first. So 'dog'[0] = 'd'. So the answer is 'd'.

Intermediate:
• 'dog'[0] = 'd'. So the answer is 'd'.
• So 'dog'[0] = 'd'.

Expert:
• 'dog'[0] = 'd'. So first character. So the result is 'd'.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 'dog'[-1]?", ["'g'", "'d'", "'o'", "Error"], 0, "Last character of 'dog'.", `Index -1 is the last character.

Beginner:
• 'dog'[-1] is the last character: 'g'. So the result is 'g'.
• So -1 is last. So 'dog'[-1] = 'g'. So the answer is 'g'.

Intermediate:
• 'dog'[-1] = 'g'. So negative index. So the answer is 'g'.
• So 'dog'[-1] = 'g'.

Expert:
• 'dog'[-1] = 'g'. So last character. So the result is 'g'.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is [5, 6, 7][-1]?", ["7", "5", "6", "Error"], 0, "Last element of list.", `Index -1 is the last element.

Beginner:
• [5, 6, 7][-1] is the last element: 7. So the result is 7.
• So -1 is last. So [5, 6, 7][-1] = 7. So the answer is 7.

Intermediate:
• [5, 6, 7][-1] = 7. So the answer is 7.
• So [5, 6, 7][-1] = 7.

Expert:
• [5, 6, 7][-1] = 7. So last element. So the result is 7.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 4 == 4?", ["True", "False", "1", "Error"], 0, "4 equals 4.", `== tests equality.

Beginner:
• 4 == 4 asks: is 4 equal to 4? Yes. So the result is True.
• So == means equal. So 4 == 4 is True. So the answer is True.

Intermediate:
• 4 == 4 is True. So the answer is True.
• So 4 == 4 is True.

Expert:
• 4 == 4 is True. So equality. So the result is True.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 5 != 5?", ["False", "True", "0", "Error"], 0, "5 is not unequal to 5.", `5 == 5 so 5 != 5 is False.

Beginner:
• 5 != 5 asks: is 5 not equal to 5? No. So the result is False.
• So != means not equal. So 5 != 5 is False. So the answer is False.

Intermediate:
• 5 != 5 is False. So 5 == 5, so 5 != 5 is False. So the answer is False.
• So 5 != 5 is False.

Expert:
• 5 != 5 is False. So inequality. So the result is False.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 1 < 10?", ["True", "False", "1", "Error"], 0, "1 is less than 10.", `1 < 10 is True.

Beginner:
• 1 < 10 asks: is 1 less than 10? Yes. So the result is True.
• So < means less than. So 1 < 10 is True. So the answer is True.

Intermediate:
• 1 < 10 is True. So the answer is True.
• So 1 < 10 is True.

Expert:
• 1 < 10 is True. So less-than. So the result is True.

Key Concepts:
• See Beginner and Expert sections above for the main ideas.
Key Distinctions:
• Compare with related types (e.g. int vs float, str vs bytes) as in Expert.
How It Works:
• Python evaluates the literal or expression, then type() returns its class.
Step-by-Step Execution:
• 1. Evaluate the expression. 2. Call type(...). 3. type() returns the class. 4. REPL displays it.
Order of Operations:
• Literals and subexpressions first; then type() is applied.
Common Use Cases:
• Checking types in the REPL; teaching type differences; validating input.
Edge Cases:
• See Expert section for edge cases (e.g. None, empty collections, subclasses).
Performance Considerations:
• type() is cheap; creating literals is highly optimized at beginner scale.
Examples:
• See Expert and Intermediate sections; try the same pattern with related values.
Notes:
• Use isinstance(x, Type) when you want to allow subclasses.`],
  ["What is 10 > 1?", ["True", "False", "1", "Error"], 0, "10 is greater than 1.", `10 > 1 is True.

Beginner:
• 10 > 1 asks: is 10 greater than 1? Yes. So the result is True.
• So > means greater than. So 10 > 1 is True. So the answer is True.

Intermediate:
• 10 > 1 is True. So the answer is True.
• So 10 > 1 is True.

Expert:
• 10 > 1 is True. So greater-than. So the result is True.`],
  ["What is 5 <= 5?", ["True", "False", "1", "Error"], 0, "5 <= 5 is True.", `<= includes equality.

Beginner:
• 5 <= 5 asks: is 5 less than or equal to 5? Yes (5 equals 5). So the result is True.
• So <= includes equality. So 5 <= 5 is True. So the answer is True.

Intermediate:
• 5 <= 5 is True. So the answer is True.
• So 5 <= 5 is True.

Expert:
• 5 <= 5 is True. So less-than-or-equal. So the result is True.`],
  ["What is 3 >= 4?", ["False", "True", "0", "Error"], 0, "3 >= 4 is False.", `3 is not greater than or equal to 4.

Beginner:
• 3 >= 4 asks: is 3 greater than or equal to 4? No. So the result is False.
• So >= means greater than or equal. So 3 >= 4 is False. So the answer is False.

Intermediate:
• 3 >= 4 is False. So the answer is False.
• So 3 >= 4 is False.

Expert:
• 3 >= 4 is False. So greater-than-or-equal fails. So the result is False.`],
  ["What is (1, 2) + (3,)?", ["(1, 2, 3)", "(4,)", "(3, 1, 2)", "Error"], 0, "Tuple concatenation.", `+ concatenates tuples.

Beginner:
• (1, 2) + (3,) joins the two tuples: we get (1, 2, 3). So the result is (1, 2, 3).
• So + for tuples means put together. So (1, 2) + (3,) = (1, 2, 3). So the answer is (1, 2, 3).

Intermediate:
• (1, 2) + (3,) = (1, 2, 3). So tuple concatenation. So the answer is (1, 2, 3).
• So (1, 2) + (3,) = (1, 2, 3).

Expert:
• (1, 2) + (3,) = (1, 2, 3). So tuple concatenation. So the result is (1, 2, 3).`],
  ["What is 'pie'[1:3]?", ["'ie'", "'pi'", "'pe'", "Error"], 0, "Slice from index 1 to 3.", `Slice [1:3] gives characters at index 1 and 2.

Beginner:
• 'pie'[1:3] takes from index 1 to (not including) 3. So we get 'ie'. So the result is 'ie'.
• So [1:3] is indices 1 and 2. So 'pie'[1:3] = 'ie'. So the answer is 'ie'.

Intermediate:
• 'pie'[1:3] = 'ie'. So slice [1:3]. So the answer is 'ie'.
• So 'pie'[1:3] = 'ie'.

Expert:
• 'pie'[1:3] = 'ie'. So slice. So the result is 'ie'.`],
  ["What is 'pie'[:2]?", ["'pi'", "'pie'", "'p'", "Error"], 0, "First two characters.", `[:2] is from start to index 2 (exclusive).

Beginner:
• 'pie'[:2] takes from the start up to (not including) index 2. So we get 'pi'. So the result is 'pi'.
• So [:2] is first two characters. So 'pie'[:2] = 'pi'. So the answer is 'pi'.

Intermediate:
• 'pie'[:2] = 'pi'. So the answer is 'pi'.
• So 'pie'[:2] = 'pi'.

Expert:
• 'pie'[:2] = 'pi'. So slice from start. So the result is 'pi'.`],
  ["What is 'pie'[2:]?", ["'e'", "'pi'", "'pie'", "Error"], 0, "From index 2 to end.", `[2:] is from index 2 to end.

Beginner:
• 'pie'[2:] takes from index 2 to the end. So we get 'e'. So the result is 'e'.
• So [2:] is from index 2 to end. So 'pie'[2:] = 'e'. So the answer is 'e'.

Intermediate:
• 'pie'[2:] = 'e'. So the answer is 'e'.
• So 'pie'[2:] = 'e'.

Expert:
• 'pie'[2:] = 'e'. So slice to end. So the result is 'e'.`],
  ["What is list([1, 2])?", ["[1, 2]", "(1, 2)", "['1', '2']", "Error"], 0, "list() on a list returns a copy-like list.", `list([1, 2]) returns a new list [1, 2].

Beginner:
• list([1, 2]) creates a new list with the same elements: [1, 2]. So the result is [1, 2].
• So list() on a list makes a shallow copy. So list([1, 2]) = [1, 2]. So the answer is [1, 2].

Intermediate:
• list([1, 2]) = [1, 2]. So list(iterable) from a list gives a new list. So the answer is [1, 2].
• So list([1, 2]) = [1, 2].

Expert:
• list([1, 2]) = [1, 2]. So new list (shallow copy). So the result is [1, 2].`],
  ["What is tuple((1,))?", ["(1,)", "[1]", "1", "Error"], 0, "tuple((1,)) = (1,).", `tuple() on a tuple returns a copy.

Beginner:
• tuple((1,)) creates a new tuple with the same elements: (1,). So the result is (1,).
• So tuple() on a tuple makes a copy. So tuple((1,)) = (1,). So the answer is (1,).

Intermediate:
• tuple((1,)) = (1,). So tuple(iterable) from a tuple. So the answer is (1,).
• So tuple((1,)) = (1,).

Expert:
• tuple((1,)) = (1,). So new tuple. So the result is (1,).`],
  ["What is set([2, 2, 3])?", ["{2, 3}", "[2, 3]", "{2, 2, 3}", "Error"], 0, "set removes duplicates.", `Sets have unique elements; set([2,2,3]) = {2, 3}.

Beginner:
• set([2, 2, 3]) creates a set; duplicates are removed. So we get {2, 3}. So the result is {2, 3}.
• So set() removes duplicates. So set([2, 2, 3]) = {2, 3}. So the answer is {2, 3}.

Intermediate:
• set([2, 2, 3]) = {2, 3}. So unique elements. So the answer is {2, 3}.
• So set([2, 2, 3]) = {2, 3}.

Expert:
• set([2, 2, 3]) = {2, 3}. So duplicates removed. So the result is {2, 3}.`],
  ["What is 11 // 2?", ["5", "5.5", "6", "Error"], 0, "11 // 2 = 5.", `Integer division: 11 // 2 = 5.

Beginner:
• 11 // 2 is the whole-number part of 11 ÷ 2. So 11 ÷ 2 = 5.5; we take 5. So the result is 5.
• So // is integer division. So 11 // 2 = 5. So the answer is 5.

Intermediate:
• 11 // 2 = 5. So 11 % 2 = 1. So the answer is 5.
• So 11 // 2 = 5.

Expert:
• 11 // 2 = 5. So floor division. So the result is 5.`],
  ["What is 11 % 2?", ["1", "0", "2", "Error"], 0, "11 % 2 = 1.", `Remainder when 11 is divided by 2.

Beginner:
• 11 % 2 is the remainder when you divide 11 by 2. So 11 = 5*2 + 1; the remainder is 1. So the result is 1.
• So % is the remainder. So 11 % 2 = 1. So the answer is 1.

Intermediate:
• 11 % 2 = 1. So 11 // 2 = 5 and 11 % 2 = 1. So the answer is 1.
• So 11 % 2 = 1.

Expert:
• 11 % 2 = 1. So remainder. So the result is 1.`],
  ["What is 1.5 + 1.5?", ["3.0", "3", "2.0", "Error"], 0, "Float addition: 1.5 + 1.5 = 3.0.", `Adding floats gives a float.

Beginner:
• 1.5 + 1.5 is 3.0. Adding two floats gives a float. So the result is 3.0.
• So float + float = float. So 1.5 + 1.5 = 3.0. So the answer is 3.0.

Intermediate:
• 1.5 + 1.5 = 3.0. So the answer is 3.0.
• So 1.5 + 1.5 = 3.0.

Expert:
• 1.5 + 1.5 = 3.0. So float addition. So the result is 3.0.`],
  ["What is type(1.0)?", ["<class 'float'>", "<class 'int'>", "<class 'str'>", "None"], 0, "1.0 is a float.", `Numbers with a decimal point are float.

Beginner:
• 1.0 has a decimal point, so it is a float. So type(1.0) is <class 'float'>. So the result is <class 'float'>.
• So 1.0 is float, 1 is int. So type(1.0) is float. So the answer is <class 'float'>.

Intermediate:
• type(1.0) is float. So literal with decimal is float. So the answer is <class 'float'>.
• So type(1.0) is float.

Expert:
• type(1.0) is float. So float literal. So the result is <class 'float'>.`],
  ["What is type('')?", ["<class 'str'>", "<class 'NoneType'>", "<class 'list'>", "None"], 0, "Empty string is still str.", `Empty quotes still create a string.

Beginner:
• '' is an empty string, so type('') is <class 'str'>. So the result is <class 'str'>.
• So empty string is still a string. So type('') is str. So the answer is <class 'str'>.

Intermediate:
• type('') is str. So empty string is str. So the answer is <class 'str'>.
• So type('') is str.

Expert:
• type('') is str. So empty str. So the result is <class 'str'>.`],
  ["What is type([[]])?", ["<class 'list'>", "<class 'tuple'>", "<class 'dict'>", "None"], 0, "List containing one element (a list).", `[[]] is a list whose single element is an empty list.

Beginner:
• [[]] is a list that contains one thing: an empty list []. So type([[]]) is <class 'list'>. So the result is <class 'list'>.
• So [[]] is a list (of one element). So type([[]]) is list. So the answer is <class 'list'>.

Intermediate:
• type([[]]) is list. So the outer brackets make a list. So the answer is <class 'list'>.
• So type([[]]) is list.

Expert:
• type([[]]) is list. So list containing one element. So the result is <class 'list'>.`],
  ["What is 0 == False?", ["True", "False", "None", "Error"], 0, "In Python, 0 == False (value equality).", `0 and False compare equal in value.

Beginner:
• In Python, 0 == False is True. So 0 and False are equal in value. So the result is True.
• So 0 == False is True. So the answer is True.

Intermediate:
• 0 == False is True. So bool is subclass of int; False has value 0. So the answer is True.
• So 0 == False is True.

Expert:
• 0 == False is True. So value equality. So the result is True.`],
  ["What is 1 in (1, 2)?", ["True", "False", "1", "Error"], 0, "1 is in the tuple.", `in checks membership in a tuple.

Beginner:
• 1 in (1, 2) asks: is 1 in the tuple? Yes. So the result is True.
• So in works on tuples. So 1 in (1, 2) is True. So the answer is True.

Intermediate:
• 1 in (1, 2) is True. So the answer is True.
• So 1 in (1, 2) is True.

Expert:
• 1 in (1, 2) is True. So membership. So the result is True.`],
  ["What is 10 not in (1, 2)?", ["True", "False", "0", "Error"], 0, "10 is not in (1, 2).", `not in checks that the value is absent.

Beginner:
• 10 not in (1, 2) asks: is 10 not in the tuple? Yes—10 is not in (1, 2). So the result is True.
• So not in is True when the value is absent. So 10 not in (1, 2) is True. So the answer is True.

Intermediate:
• 10 not in (1, 2) is True. So the answer is True.
• So 10 not in (1, 2) is True.

Expert:
• 10 not in (1, 2) is True. So not in. So the result is True.`],
  ["What is abs(0)?", ["0", "-0", "None", "Error"], 0, "abs(0) = 0.", `abs(0) is 0.

Beginner:
• abs(0) is the absolute value of 0. So we get 0. So the result is 0.
• So abs(0) = 0. So the answer is 0.

Intermediate:
• abs(0) = 0. So the answer is 0.
• So abs(0) = 0.

Expert:
• abs(0) = 0. So absolute value of 0. So the result is 0.`],
  ["What is round(5.5)?", ["6", "5", "5.0", "Error"], 0, "round(5.5) = 6 (round half to even in 3).", `In Python 3, round(5.5) rounds to 6.

Beginner:
• round(5.5) rounds 5.5 to the nearest integer. In Python 3, 5.5 rounds to 6. So the result is 6.
• So round(5.5) = 6. So the answer is 6.

Intermediate:
• round(5.5) = 6. So Python 3 uses "round half to even" but 5.5 rounds to 6. So the answer is 6.
• So round(5.5) = 6.

Expert:
• round(5.5) = 6. So rounding. So the result is 6.`],
  ["What is min(0, 1)?", ["0", "1", "-1", "Error"], 0, "min(0, 1) = 0.", `min() returns the smallest argument.

Beginner:
• min(0, 1) returns the smaller of 0 and 1. So we get 0. So the result is 0.
• So min() gives the minimum. So min(0, 1) = 0. So the answer is 0.

Intermediate:
• min(0, 1) = 0. So the answer is 0.
• So min(0, 1) = 0.

Expert:
• min(0, 1) = 0. So minimum. So the result is 0.`],
  ["What is max(0, -1)?", ["0", "-1", "1", "Error"], 0, "max(0, -1) = 0.", `max() returns the largest argument.

Beginner:
• max(0, -1) returns the larger of 0 and -1. So we get 0. So the result is 0.
• So max() gives the maximum. So max(0, -1) = 0. So the answer is 0.

Intermediate:
• max(0, -1) = 0. So the answer is 0.
• So max(0, -1) = 0.

Expert:
• max(0, -1) = 0. So maximum. So the result is 0.`],
  ["What is sum([0, 1, 2])?", ["3", "2", "4", "Error"], 0, "sum([0,1,2]) = 3.", `sum() adds all elements.

Beginner:
• sum([0, 1, 2]) adds 0 + 1 + 2 = 3. So the result is 3.
• So sum() adds all numbers. So sum([0, 1, 2]) = 3. So the answer is 3.

Intermediate:
• sum([0, 1, 2]) = 3. So the answer is 3.
• So sum([0, 1, 2]) = 3.

Expert:
• sum([0, 1, 2]) = 3. So sum. So the result is 3.`],
  ["What is pow(3, 2)?", ["9", "6", "8", "Error"], 0, "pow(3, 2) = 9.", `pow(3, 2) is 3**2 = 9.

Beginner:
• pow(3, 2) means 3 to the power of 2: 3*3 = 9. So the result is 9.
• So pow(3, 2) = 9. So the answer is 9.

Intermediate:
• pow(3, 2) = 9. So 3**2 = 9. So the answer is 9.
• So pow(3, 2) = 9.

Expert:
• pow(3, 2) = 9. So exponentiation. So the result is 9.`],
  ["What is divmod(10, 3)?", ["(3, 1)", "(3.33, 0)", "(4, 1)", "Error"], 0, "divmod(10, 3) = (3, 1).", `divmod returns (quotient, remainder).

Beginner:
• divmod(10, 3) gives quotient and remainder. So 10 = 3*3 + 1; we get (3, 1). So the result is (3, 1).
• So divmod(10, 3) = (3, 1). So the answer is (3, 1).

Intermediate:
• divmod(10, 3) = (3, 1). So 10 // 3 = 3 and 10 % 3 = 1. So the answer is (3, 1).
• So divmod(10, 3) = (3, 1).

Expert:
• divmod(10, 3) = (3, 1). So (quotient, remainder). So the result is (3, 1).`],
  ["What is True or True?", ["True", "False", "None", "Error"], 0, "True or True = True.", `or is True if at least one operand is True.

Beginner:
• True or True: at least one is True, so the result is True.
• So or is True when at least one is True. So True or True is True. So the answer is True.

Intermediate:
• True or True is True. So the answer is True.
• So True or True is True.

Expert:
• True or True is True. So logical or. So the result is True.`],
  ["What is False and True?", ["False", "True", "None", "Error"], 0, "False and True = False.", `and is False if one operand is False.

Beginner:
• False and True: one is False, so the result is False.
• So and is False if either is False. So False and True is False. So the answer is False.

Intermediate:
• False and True is False. So and short-circuits on first falsy. So the answer is False.
• So False and True is False.

Expert:
• False and True is False. So logical and. So the result is False.`],
  ["What is 2 * 3 + 4?", ["10", "14", "18", "Error"], 0, "Multiplication first: 2*3=6, 6+4=10.", `Operator precedence: * before +.

Beginner:
• 2 * 3 + 4: we do 2*3 first (6), then 6+4 = 10. So the result is 10.
• So * before +. So 2 * 3 + 4 = 10. So the answer is 10.

Intermediate:
• 2 * 3 + 4 = 10. So * has higher precedence than +. So the answer is 10.
• So 2 * 3 + 4 = 10.

Expert:
• 2 * 3 + 4 = 10. So precedence. So the result is 10.`],
  ["What is 2 * (3 + 4)?", ["14", "10", "18", "Error"], 0, "Parentheses first: 3+4=7, 2*7=14.", `Parentheses override precedence.

Beginner:
• 2 * (3 + 4): we do (3+4) first (7), then 2*7 = 14. So the result is 14.
• So parentheses first. So 2 * (3 + 4) = 14. So the answer is 14.

Intermediate:
• 2 * (3 + 4) = 14. So parentheses override precedence. So the answer is 14.
• So 2 * (3 + 4) = 14.

Expert:
• 2 * (3 + 4) = 14. So parentheses. So the result is 14.`],
  ["What is 'a' not in 'bc'?", ["True", "False", "1", "Error"], 0, "'a' is not in 'bc'.", `not in is True when the substring is absent.

Beginner:
• 'a' not in 'bc' asks: is 'a' not in the string 'bc'? Yes—'a' is not in 'bc'. So the result is True.
• So not in for strings: True when the substring is absent. So 'a' not in 'bc' is True. So the answer is True.

Intermediate:
• 'a' not in 'bc' is True. So 'a' in 'bc' is False; not in is the opposite. So the answer is True.
• So 'a' not in 'bc' is True.

Expert:
• 'a' not in 'bc' is True. So not in. So the result is True.`],
  ["What is [][:0]?", ["[]", "None", "Error", "[0]"], 0, "Empty slice of list is [].", `Slicing an empty list or [:] gives a (possibly empty) list.

Beginner:
• [][:0] is a slice of the empty list from start to index 0. So we get []. So the result is [].
• So any slice of [] is []. So [][:0] = []. So the answer is [].

Intermediate:
• [][:0] = []. So slice [0:0] of empty list is []. So the answer is [].
• So [][:0] = [].

Expert:
• [][:0] = []. So empty slice. So the result is [].`],
  ["What is (1, 2)[0]?", ["1", "2", "0", "Error"], 0, "First element of tuple.", `Index 0 is the first element of a tuple.

Beginner:
• (1, 2)[0] is the first element of the tuple: 1. So the result is 1.
• So index 0 is first. So (1, 2)[0] = 1. So the answer is 1.

Intermediate:
• (1, 2)[0] = 1. So the answer is 1.
• So (1, 2)[0] = 1.

Expert:
• (1, 2)[0] = 1. So tuple indexing. So the result is 1.`],
  ["What is type(False)?", ["<class 'bool'>", "<class 'int'>", "<class 'str'>", "None"], 0, "False is bool.", `type(False) returns <class 'bool'>.

Beginner:
• False is a boolean value. So type(False) is <class 'bool'>. So the result is <class 'bool'>.
• So False is bool. So type(False) is bool. So the answer is <class 'bool'>.

Intermediate:
• type(False) is bool. So the answer is <class 'bool'>.
• So type(False) is bool.

Expert:
• type(False) is bool. So bool type. So the result is <class 'bool'>.`],
  ["What is type(None)?", ["<class 'NoneType'>", "<class 'null'>", "<class 'str'>", "None"], 0, "None has type NoneType.", `type(None) returns <class 'NoneType'>.

Beginner:
• None has its own type: NoneType. So type(None) is <class 'NoneType'>. So the result is <class 'NoneType'>.
• So None is not the same as 0 or False. So type(None) is NoneType. So the answer is <class 'NoneType'>.

Intermediate:
• type(None) is NoneType. So the answer is <class 'NoneType'>.
• So type(None) is NoneType.

Expert:
• type(None) is NoneType. So the None type. So the result is <class 'NoneType'>.`],
  ["What is type([])?", ["<class 'list'>", "<class 'tuple'>", "<class 'dict'>", "None"], 0, "[] is a list.", `type([]) returns <class 'list'>.

Beginner:
• [] is an empty list. So type([]) is <class 'list'>. So the result is <class 'list'>.
• So [] is a list. So type([]) is list. So the answer is <class 'list'>.

Intermediate:
• type([]) is list. So the answer is <class 'list'>.
• So type([]) is list.

Expert:
• type([]) is list. So list type. So the result is <class 'list'>.`],
  ["What is type({})?", ["<class 'dict'>", "<class 'set'>", "<class 'list'>", "None"], 0, "{} is a dict (empty).", `Empty curly braces create a dict, not a set.

Beginner:
• {} is an empty dictionary (dict). So type({}) is <class 'dict'>. So the result is <class 'dict'>. (Empty set would be set().)
• So {} is a dict in Python. So type({}) is dict. So the answer is <class 'dict'>.

Intermediate:
• type({}) is dict. So empty {} is dict; empty set is set(). So the answer is <class 'dict'>.
• So type({}) is dict.

Expert:
• type({}) is dict. So empty dict. So the result is <class 'dict'>.`],
];
more.forEach(([q, o, c, e, de]) => level0Patterns.push(mk(q, o, c, e, de)));
