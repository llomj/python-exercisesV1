import { PersonaStage } from '../../types';

// --- LEVEL 6: SEAL (Dictionaries, Key-Value, Hashing) - 100 TRULY UNIQUE QUESTIONS ---
// Each question tests a DIFFERENT concept - NO number/variable variations of the same question
export const level6Patterns = [
  // 1-10: Dictionary Creation and Basics
  (_i: number) => ({ 
    q: `What is {'a': 1, 'b': 2}?`, 
    o: ["A dictionary", "A list", "A tuple", "A set"], 
    c: 0, 
    e: "Curly braces with key:value pairs create a dictionary.",
    de: `Curly braces {} with key:value pairs create a dictionary in Python. {'a': 1, 'b': 2} is a dictionary containing two key-value pairs: 'a' maps to 1 and 'b' maps to 2. Dictionaries are unordered collections (in Python 3.7+ they maintain insertion order) that map keys to values. Keys must be immutable types (strings, numbers, tuples), and values can be any type. This is Python's primary mapping type.

Dictionary creation:
• {'a': 1, 'b': 2} = dictionary with two pairs
• Curly braces {} with key:value pairs
• Keys map to values: 'a' → 1, 'b' → 2
• Keys must be immutable
• Values can be any type

How it works:
• Python recognizes {} with key:value pairs as dictionary
• 'a': 1 creates mapping from 'a' to 1
• 'b': 2 creates mapping from 'b' to 2
• Creates dictionary object in memory
• Returns dictionary type

Example:
{'a': 1, 'b': 2}         # Dictionary of strings to integers
{1: 'a', 2: 'b'}         # Dictionary of integers to strings
{'name': 'Alice', 'age': 30}  # Mixed value types
{}                       # Empty dictionary

Common uses:
• Key-value storage: data = {'key': value}
• Mapping relationships: mapping = {k: v for k, v in pairs}
• Configuration: config = {'setting': value}
• Data structures

Example: {'a': 1, 'b': 2} creates a dictionary object containing two key-value pairs, where 'a' maps to 1 and 'b' maps to 2.

Key Concepts:
• Dictionary creation: • {'a': 1, 'b': 2} = dictionary with two pairs • Curly braces {} with key:value pairs • Keys map to values: 'a' → 1, 'b' → 2 • Keys must be immutable • Values can be any type How it works: • Python recognizes {} with key:value pairs as dictionary • 'a': 1 creates mapping from 'a' to 1 • 'b': 2 creates mapping from 'b' to 2 • Creates dictionary object in memory • Returns dictionary type Example: {'a': 1, 'b': 2} # Dictionary of strings to integers {1: 'a', 2: 'b'} # Dictionary of integers to strings {'name': 'Alice', 'age': 30} # Mixed value types {} # Empty dictionary Common uses: • Key-value storage: data = {'key': value} • Mapping relationships: mapping = {k: v for k, v in pairs} • Configuration: config = {'setting': value} • Data structures Example: {'a': 1, 'b': 2} creates a dictionary object containing two key-value pairs, where 'a' maps to 1 and 'b' maps to 2.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {}?`, 
    o: ["Empty dictionary", "Empty set", "Error", "None"], 
    c: 0, 
    e: "Empty dictionary literal.",
    de: `Empty curly braces {} create an empty dictionary in Python. {} is a dictionary literal that contains no key-value pairs. Empty dictionaries are falsy in boolean contexts (they evaluate to False), but they are still valid dictionary objects. Empty dictionaries are useful as placeholders or starting points for building dictionaries dynamically. Note: {} creates an empty dictionary, not an empty set - sets require set() or at least one element.

Empty dictionary:
• {} = empty dictionary (no key-value pairs)
• Curly braces with nothing inside
• Valid dictionary object, just has zero length
• Falsy in boolean contexts: bool({}) = False
• Length is 0: len({}) = 0

How it works:
• Python recognizes {} as empty dictionary literal
• Creates a dictionary object with no pairs
• Still a valid dictionary type
• Can be used immediately for operations
• Returns empty dictionary object

Example:
{}                   # Empty dictionary
bool({})             # False (falsy)
len({})              # 0 (zero length)
{}['key'] = 'value'  # {'key': 'value'} (can add pairs)

Common uses:
• Initialization: result = {}
• Placeholders: data = {}
• Starting points for building dictionaries
• Return values for empty results

Example: {} creates an empty dictionary object, which is a valid dictionary with zero key-value pairs and length 0.

Key Concepts:
• Empty dictionary: • {} = empty dictionary (no key-value pairs) • Curly braces with nothing inside • Valid dictionary object, just has zero length • Falsy in boolean contexts: bool({}) = False • Length is 0: len({}) = 0 How it works: • Python recognizes {} as empty dictionary literal • Creates a dictionary object with no pairs • Still a valid dictionary type • Can be used immediately for operations • Returns empty dictionary object Example: {} # Empty dictionary bool({}) # False (falsy) len({}) # 0 (zero length) {}['key'] = 'value' # {'key': 'value'} (can add pairs) Common uses: • Initialization: result = {} • Placeholders: data = {} • Starting points for building dictionaries • Return values for empty results Example: {} creates an empty dictionary object, which is a valid dictionary with zero key-value pairs and length 0.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is dict()?`, 
    o: ["{}", "[]", "()", "Error"], 
    c: 0, 
    e: "dict() constructor creates empty dictionary.",
    de: `Calling dict() with no arguments creates an empty dictionary, equivalent to {}. dict() is the constructor function that creates dictionaries, and when called without arguments, it creates an empty dictionary object. This is functionally identical to using the empty dictionary literal {}. The dict() constructor can also be called with arguments to create dictionaries from other structures.

dict() with no arguments:
• dict() = {} (empty dictionary)
• Constructor function with no arguments
• Creates empty dictionary object
• Equivalent to {} literal
• Returns empty dictionary

How it works:
• dict() called without arguments
• Creates new empty dictionary object
• Returns empty dictionary: {}
• Same result as {} literal
• Ready for operations

Example:
dict()               # {} (empty dictionary)
dict() == {}         # True (equivalent)
len(dict())          # 0 (zero length)
dict()['key'] = 'value' # {'key': 'value'} (can add pairs)

Common uses:
• Creating empty dictionaries: items = dict()
• Initialization: data = dict()
• Alternative to {} literal
• Constructor syntax preference

Example: dict() returns {} because calling the dict constructor without arguments creates an empty dictionary object, which is equivalent to the empty dictionary literal {}.

Key Concepts:
• dict() with no arguments: • dict() = {} (empty dictionary) • Constructor function with no arguments • Creates empty dictionary object • Equivalent to {} literal • Returns empty dictionary How it works: • dict() called without arguments • Creates new empty dictionary object • Returns empty dictionary: {} • Same result as {} literal • Ready for operations Example: dict() # {} (empty dictionary) dict() == {} # True (equivalent) len(dict()) # 0 (zero length) dict()['key'] = 'value' # {'key': 'value'} (can add pairs) Common uses: • Creating empty dictionaries: items = dict() • Initialization: data = dict() • Alternative to {} literal • Constructor syntax preference Example: dict() returns {} because calling the dict constructor without arguments creates an empty dictionary object, which is equivalent to the empty dictionary literal {}.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is dict([('a', 1), ('b', 2)])?`, 
    o: ["{'a': 1, 'b': 2}", "[('a', 1), ('b', 2)]", "Error", "None"], 
    c: 0, 
    e: "dict() can be created from list of tuples.",
    de: `The dict() constructor can create a dictionary from a list of key-value pairs (tuples). dict([('a', 1), ('b', 2)]) returns {'a': 1, 'b': 2} because dict() iterates through the list of tuples, treating each tuple as a key-value pair where the first element is the key and the second element is the value. This is useful for converting structured data (like pairs from another source) into a dictionary.

dict() from list of tuples:
• dict([('a', 1), ('b', 2)]) = {'a': 1, 'b': 2}
• dict() creates dictionary from list of (key, value) tuples
• Each tuple becomes a key-value pair
• First element is key, second element is value
• Returns dictionary object

How it works:
• dict() called with [('a', 1), ('b', 2)]
• Iterates through list of tuples
• ('a', 1) becomes key 'a' → value 1
• ('b', 2) becomes key 'b' → value 2
• Returns dictionary: {'a': 1, 'b': 2}

Example:
dict([('a', 1), ('b', 2)])  # {'a': 1, 'b': 2}
dict([(1, 'a'), (2, 'b')])  # {1: 'a', 2: 'b'}
dict([('x', 10), ('y', 20)]) # {'x': 10, 'y': 20}

Common uses:
• Converting pairs: mapping = dict(pairs)
• Creating from tuples: data = dict(tuple_list)
• List-to-dict conversion
• Pair conversion

Example: dict([('a', 1), ('b', 2)]) returns {'a': 1, 'b': 2} because dict() creates a dictionary from the list of tuples, treating each tuple as a key-value pair.

Key Concepts:
• dict() from list of tuples: • dict([('a', 1), ('b', 2)]) = {'a': 1, 'b': 2} • dict() creates dictionary from list of (key, value) tuples • Each tuple becomes a key-value pair • First element is key, second element is value • Returns dictionary object How it works: • dict() called with [('a', 1), ('b', 2)] • Iterates through list of tuples • ('a', 1) becomes key 'a' → value 1 • ('b', 2) becomes key 'b' → value 2 • Returns dictionary: {'a': 1, 'b': 2} Example: dict([('a', 1), ('b', 2)]) # {'a': 1, 'b': 2} dict([(1, 'a'), (2, 'b')]) # {1: 'a', 2: 'b'} dict([('x', 10), ('y', 20)]) # {'x': 10, 'y': 20} Common uses: • Converting pairs: mapping = dict(pairs) • Creating from tuples: data = dict(tuple_list) • List-to-dict conversion • Pair conversion Example: dict([('a', 1), ('b', 2)]) returns {'a': 1, 'b': 2} because dict() creates a dictionary from the list of tuples, treating each tuple as a key-value pair.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is dict(a=1, b=2)?`, 
    o: ["{'a': 1, 'b': 2}", "{'a': 1}", "Error", "None"], 
    c: 0, 
    e: "dict() can use keyword arguments.",
    de: `The dict() constructor can create a dictionary from keyword arguments. dict(a=1, b=2) returns {'a': 1, 'b': 2} because dict() treats each keyword argument as a key-value pair where the keyword name becomes the key (as a string) and the argument value becomes the value. This is a convenient way to create dictionaries when keys are valid Python identifiers (strings that can be variable names).

dict() with keyword arguments:
• dict(a=1, b=2) = {'a': 1, 'b': 2}
• dict() creates dictionary from keyword arguments
• Keyword names become keys (as strings)
• Argument values become values
• Keys must be valid identifiers

How it works:
• dict() called with keyword arguments a=1, b=2
• Keyword 'a' becomes key 'a' (string)
• Value 1 becomes value 1
• Keyword 'b' becomes key 'b' (string)
• Value 2 becomes value 2
• Returns dictionary: {'a': 1, 'b': 2}

Example:
dict(a=1, b=2)        # {'a': 1, 'b': 2}
dict(x=10, y=20)      # {'x': 10, 'y': 20}
dict(name='Alice', age=30) # {'name': 'Alice', 'age': 30}

Common uses:
• Creating dictionaries: data = dict(key=value)
• Convenient syntax: mapping = dict(a=1, b=2)
• Keyword-based creation
• Named parameter dictionaries

Example: dict(a=1, b=2) returns {'a': 1, 'b': 2} because dict() creates a dictionary from keyword arguments, where each keyword name becomes a string key and its value becomes the corresponding value.

Key Concepts:
• dict() with keyword arguments: • dict(a=1, b=2) = {'a': 1, 'b': 2} • dict() creates dictionary from keyword arguments • Keyword names become keys (as strings) • Argument values become values • Keys must be valid identifiers How it works: • dict() called with keyword arguments a=1, b=2 • Keyword 'a' becomes key 'a' (string) • Value 1 becomes value 1 • Keyword 'b' becomes key 'b' (string) • Value 2 becomes value 2 • Returns dictionary: {'a': 1, 'b': 2} Example: dict(a=1, b=2) # {'a': 1, 'b': 2} dict(x=10, y=20) # {'x': 10, 'y': 20} dict(name='Alice', age=30) # {'name': 'Alice', 'age': 30} Common uses: • Creating dictionaries: data = dict(key=value) • Convenient syntax: mapping = dict(a=1, b=2) • Keyword-based creation • Named parameter dictionaries Example: dict(a=1, b=2) returns {'a': 1, 'b': 2} because dict() creates a dictionary from keyword arguments, where each keyword name becomes a string key and its value becomes the corresponding value.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {'a': 1, 'b': 2}['a']?`, 
    o: ["1", "'a'", "2", "Error"], 
    c: 0, 
    e: "Dictionary access by key using square brackets.",
    de: `Dictionary access uses square brackets with the key to retrieve the corresponding value. {'a': 1, 'b': 2}['a'] returns 1 because ['a'] accesses the value associated with the key 'a'. The key is specified in square brackets after the dictionary, and Python returns the value mapped to that key. If the key doesn't exist, this raises a KeyError.

Dictionary access:
• {'a': 1, 'b': 2}['a'] = 1 (returns value for key)
• Square brackets [] with key
• Returns value associated with key
• Key must exist (or raises KeyError)
• Access by key, not index

How it works:
• {'a': 1, 'b': 2} is the dictionary
• ['a'] is the key in square brackets
• Python looks up key 'a' in dictionary
• Finds mapping: 'a' → 1
• Returns value: 1

Example:
{'a': 1, 'b': 2}['a']  # 1 (value for key 'a')
{'a': 1, 'b': 2}['b']  # 2 (value for key 'b')
{'a': 1, 'b': 2}['c']  # KeyError (key 'c' doesn't exist)

Common uses:
• Getting values: value = dict[key]
• Accessing data: data = items[key]
• Key-based access
• Dictionary lookup

Example: {'a': 1, 'b': 2}['a'] returns 1 because Python looks up the key 'a' in the dictionary and returns the corresponding value, which is 1.

Key Concepts:
• Dictionary access: • {'a': 1, 'b': 2}['a'] = 1 (returns value for key) • Square brackets [] with key • Returns value associated with key • Key must exist (or raises KeyError) • Access by key, not index How it works: • {'a': 1, 'b': 2} is the dictionary • ['a'] is the key in square brackets • Python looks up key 'a' in dictionary • Finds mapping: 'a' → 1 • Returns value: 1 Example: {'a': 1, 'b': 2}['a'] # 1 (value for key 'a') {'a': 1, 'b': 2}['b'] # 2 (value for key 'b') {'a': 1, 'b': 2}['c'] # KeyError (key 'c' doesn't exist) Common uses: • Getting values: value = dict[key] • Accessing data: data = items[key] • Key-based access • Dictionary lookup Example: {'a': 1, 'b': 2}['a'] returns 1 because Python looks up the key 'a' in the dictionary and returns the corresponding value, which is 1.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {'a': 1, 'b': 2}['b']?`, 
    o: ["2", "'b'", "1", "Error"], 
    c: 0, 
    e: "Access value using key in square brackets.",
    de: `Dictionary access retrieves the value associated with a specific key. {'a': 1, 'b': 2}['b'] returns 2 because ['b'] accesses the value associated with the key 'b'. Python looks up the key 'b' in the dictionary, finds the mapping 'b' → 2, and returns the value 2. Dictionary access is key-based, not index-based like lists - you use the key to find the value.

Dictionary access by key:
• {'a': 1, 'b': 2}['b'] = 2 (returns value for key)
• Square brackets [] with key 'b'
• Returns value associated with key 'b'
• Key-based lookup (not index-based)
• Returns value: 2

How it works:
• {'a': 1, 'b': 2} is the dictionary
• ['b'] is the key in square brackets
• Python looks up key 'b' in dictionary
• Finds mapping: 'b' → 2
• Returns value: 2

Example:
{'a': 1, 'b': 2}['b']  # 2 (value for key 'b')
{'x': 10, 'y': 20}['y'] # 20 (value for key 'y')
{'a': 1, 'b': 2}['c']  # KeyError (key doesn't exist)

Common uses:
• Getting values: value = dict[key]
• Accessing data: data = items[key]
• Key-based lookup
• Dictionary retrieval

Example: {'a': 1, 'b': 2}['b'] returns 2 because Python looks up the key 'b' in the dictionary and returns the corresponding value, which is 2.

Key Concepts:
• Dictionary access by key: • {'a': 1, 'b': 2}['b'] = 2 (returns value for key) • Square brackets [] with key 'b' • Returns value associated with key 'b' • Key-based lookup (not index-based) • Returns value: 2 How it works: • {'a': 1, 'b': 2} is the dictionary • ['b'] is the key in square brackets • Python looks up key 'b' in dictionary • Finds mapping: 'b' → 2 • Returns value: 2 Example: {'a': 1, 'b': 2}['b'] # 2 (value for key 'b') {'x': 10, 'y': 20}['y'] # 20 (value for key 'y') {'a': 1, 'b': 2}['c'] # KeyError (key doesn't exist) Common uses: • Getting values: value = dict[key] • Accessing data: data = items[key] • Key-based lookup • Dictionary retrieval Example: {'a': 1, 'b': 2}['b'] returns 2 because Python looks up the key 'b' in the dictionary and returns the corresponding value, which is 2.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What happens if you access a non-existent key with []?`, 
    o: ["KeyError", "Returns None", "Returns empty dict", "Error"], 
    c: 0, 
    e: "Accessing non-existent key raises KeyError.",
    de: `Accessing a non-existent key in a dictionary using square brackets [] raises a KeyError. If you try to access a key that doesn't exist like {'a': 1, 'b': 2}['c'], Python raises a KeyError with a message indicating that the key was not found. This is different from using .get() method, which returns None (or a default value) for non-existent keys. KeyError indicates that the key doesn't exist in the dictionary.

Accessing non-existent key:
• {'a': 1, 'b': 2}['c'] raises KeyError
• Key 'c' doesn't exist in dictionary
• Square bracket access [] raises KeyError
• Must use .get() for safe access
• Error message: "KeyError: 'c'"

How it works:
• Accessing ['c'] on {'a': 1, 'b': 2}
• Python searches for key 'c' in dictionary
• Finds no match (key doesn't exist)
• Raises KeyError
• Cannot return value for non-existent key

Example:
{'a': 1, 'b': 2}['c']  # KeyError: 'c'
d = {'a': 1, 'b': 2}
d['x']                 # KeyError: 'x'
if 'c' in d:           # Check first
    d['c']             # Safe to access

Common uses:
• Error handling: try/except for KeyError
• Checking first: if key in dict: dict[key]
• Safe access: value = dict.get(key)
• Key existence validation

Example: Accessing a non-existent key like {'a': 1, 'b': 2}['c'] raises a KeyError because Python cannot find the key 'c' in the dictionary, and square bracket access requires the key to exist.

Key Concepts:
• Accessing non-existent key: • {'a': 1, 'b': 2}['c'] raises KeyError • Key 'c' doesn't exist in dictionary • Square bracket access [] raises KeyError • Must use .get() for safe access • Error message: "KeyError: 'c'" How it works: • Accessing ['c'] on {'a': 1, 'b': 2} • Python searches for key 'c' in dictionary • Finds no match (key doesn't exist) • Raises KeyError • Cannot return value for non-existent key Example: {'a': 1, 'b': 2}['c'] # KeyError: 'c' d = {'a': 1, 'b': 2} d['x'] # KeyError: 'x' if 'c' in d: # Check first d['c'] # Safe to access Common uses: • Error handling: try/except for KeyError • Checking first: if key in dict: dict[key] • Safe access: value = dict.get(key) • Key existence validation Example: Accessing a non-existent key like {'a': 1, 'b': 2}['c'] raises a KeyError because Python cannot find the key 'c' in the dictionary, and square bracket access requires the key to exist.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is len({'a': 1, 'b': 2})?`, 
    o: ["2", "1", "0", "Error"], 
    c: 0, 
    e: "len() returns number of key-value pairs.",
    de: `The len() function returns the number of key-value pairs in a dictionary. len({'a': 1, 'b': 2}) returns 2 because the dictionary contains two key-value pairs: 'a': 1 and 'b': 2. len() counts pairs, not individual keys or values - each key-value pair counts as one unit. This is consistent with how len() works on other collections - it returns the number of items in the collection.

len() on dictionary:
• len({'a': 1, 'b': 2}) = 2 (number of pairs)
• len() counts key-value pairs
• Each pair counts as one
• Returns integer count
• Works with any dictionary

How it works:
• len() called with {'a': 1, 'b': 2}
• Counts key-value pairs in dictionary
• Finds two pairs: 'a': 1, 'b': 2
• Returns count: 2
• Returns integer: 2

Example:
len({'a': 1, 'b': 2})  # 2 (two pairs)
len({'a': 1})          # 1 (one pair)
len({})                # 0 (empty dictionary)
len({'a': 1, 'b': 2, 'c': 3}) # 3 (three pairs)

Common uses:
• Checking size: if len(dict) > 0:
• Getting count: count = len(data)
• Size validation
• Pair counting

Example: len({'a': 1, 'b': 2}) returns 2 because len() counts the number of key-value pairs in the dictionary, which is 2.

Key Concepts:
• len() on dictionary: • len({'a': 1, 'b': 2}) = 2 (number of pairs) • len() counts key-value pairs • Each pair counts as one • Returns integer count • Works with any dictionary How it works: • len() called with {'a': 1, 'b': 2} • Counts key-value pairs in dictionary • Finds two pairs: 'a': 1, 'b': 2 • Returns count: 2 • Returns integer: 2 Example: len({'a': 1, 'b': 2}) # 2 (two pairs) len({'a': 1}) # 1 (one pair) len({}) # 0 (empty dictionary) len({'a': 1, 'b': 2, 'c': 3}) # 3 (three pairs) Common uses: • Checking size: if len(dict) > 0: • Getting count: count = len(data) • Size validation • Pair counting Example: len({'a': 1, 'b': 2}) returns 2 because len() counts the number of key-value pairs in the dictionary, which is 2.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is len({})?`, 
    o: ["0", "1", "Error", "None"], 
    c: 0, 
    e: "Empty dictionary has length 0.",
    de: `An empty dictionary has a length of 0 because it contains no key-value pairs. len({}) returns 0 because the empty dictionary {} has zero pairs. len() counts the number of key-value pairs in a dictionary, and an empty dictionary naturally has zero pairs. Empty dictionaries are falsy in boolean contexts but are still valid dictionary objects.

Empty dictionary length:
• len({}) = 0 (zero pairs)
• Empty dictionary contains no pairs
• Length is 0 by definition
• Valid dictionary object, just empty
• Falsy but exists

How it works:
• len() takes empty dictionary {} as argument
• Counts key-value pairs in dictionary
• Finds zero pairs
• Returns 0
• Empty dictionaries always return 0

Example:
len({})               # 0 (empty dictionary)
len(dict())           # 0 (empty dictionary)
bool({})              # False (falsy but exists)
{}['key'] = 'value'   # {'key': 'value'} (can add pairs)

Common uses:
• Checking if empty: if len(items) == 0:
• Validation: if len(data) > 0:
• Empty check
• Size verification

Example: len({}) returns 0 because the empty dictionary contains zero key-value pairs, and len() counts and returns the number of pairs (which is 0 for an empty dictionary).

Key Concepts:
• Empty dictionary length: • len({}) = 0 (zero pairs) • Empty dictionary contains no pairs • Length is 0 by definition • Valid dictionary object, just empty • Falsy but exists How it works: • len() takes empty dictionary {} as argument • Counts key-value pairs in dictionary • Finds zero pairs • Returns 0 • Empty dictionaries always return 0 Example: len({}) # 0 (empty dictionary) len(dict()) # 0 (empty dictionary) bool({}) # False (falsy but exists) {}['key'] = 'value' # {'key': 'value'} (can add pairs) Common uses: • Checking if empty: if len(items) == 0: • Validation: if len(data) > 0: • Empty check • Size verification Example: len({}) returns 0 because the empty dictionary contains zero key-value pairs, and len() counts and returns the number of pairs (which is 0 for an empty dictionary).

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  
  // 11-20: Dictionary Methods - Accessing Values
  (_i: number) => ({ 
    q: `What is {'a': 1, 'b': 2}.get('a')?`, 
    o: ["1", "'a'", "2", "Error"], 
    c: 0, 
    e: "get() returns value for key.",
    de: `The get() method returns the value associated with a key, or None if the key doesn't exist. {'a': 1, 'b': 2}.get('a') returns 1 because get() looks up the key 'a' in the dictionary and returns its value. Unlike square bracket access [], get() doesn't raise an error if the key doesn't exist - it returns None (or a default value if provided). This makes get() safer for accessing potentially missing keys.

get() method:
• {'a': 1, 'b': 2}.get('a') = 1 (returns value)
• get(key) returns value for key
• Returns None if key not found (no default)
• Safe access (no KeyError)
• Works with any key

How it works:
• get('a') called on {'a': 1, 'b': 2}
• Searches for key 'a' in dictionary
• Finds mapping: 'a' → 1
• Returns value: 1
• No error if key not found

Example:
{'a': 1, 'b': 2}.get('a')  # 1 (value for key)
{'a': 1, 'b': 2}.get('c')  # None (key not found, no error)
{'a': 1, 'b': 2}.get('b')  # 2 (value for key)

Common uses:
• Safe access: value = dict.get(key)
• Avoiding KeyError: data = items.get(key)
• Default value access
• Safe dictionary lookup

Example: {'a': 1, 'b': 2}.get('a') returns 1 because get() looks up the key 'a' in the dictionary and returns its value, which is 1.

Key Concepts:
• get() method: • {'a': 1, 'b': 2}.get('a') = 1 (returns value) • get(key) returns value for key • Returns None if key not found (no default) • Safe access (no KeyError) • Works with any key How it works: • get('a') called on {'a': 1, 'b': 2} • Searches for key 'a' in dictionary • Finds mapping: 'a' → 1 • Returns value: 1 • No error if key not found Example: {'a': 1, 'b': 2}.get('a') # 1 (value for key) {'a': 1, 'b': 2}.get('c') # None (key not found, no error) {'a': 1, 'b': 2}.get('b') # 2 (value for key) Common uses: • Safe access: value = dict.get(key) • Avoiding KeyError: data = items.get(key) • Default value access • Safe dictionary lookup Example: {'a': 1, 'b': 2}.get('a') returns 1 because get() looks up the key 'a' in the dictionary and returns its value, which is 1.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {'a': 1, 'b': 2}.get('c')?`, 
    o: ["None", "Error", "0", "'c'"], 
    c: 0, 
    e: "get() returns None if key not found (no default).",
    de: `The get() method returns None when a key doesn't exist and no default value is provided. {'a': 1, 'b': 2}.get('c') returns None because get() searches for the key 'c' in the dictionary, doesn't find it, and returns None instead of raising an error. This is the safe way to access dictionary values - it never raises a KeyError, but returns None for missing keys (unless you provide a default value).

get() - key not found:
• {'a': 1, 'b': 2}.get('c') = None
• get(key) returns None if key not found
• No default provided
• No error raised (unlike [])
• Safe access method

How it works:
• get('c') called on {'a': 1, 'b': 2}
• Searches for key 'c' in dictionary
• Finds no match (key doesn't exist)
• Returns None (no error)
• Safe behavior

Example:
{'a': 1, 'b': 2}.get('c')  # None (not found, no error)
{'a': 1, 'b': 2}.get('x')  # None (not found, no error)
{'a': 1, 'b': 2}.get('c', 0) # 0 (not found, returns default)

Common uses:
• Safe access: value = dict.get(key) (might be None)
• Checking existence: if dict.get(key): ...
• Default handling: result = items.get(key) or default
• Error-free access

Example: {'a': 1, 'b': 2}.get('c') returns None because get() searches for the key 'c' in the dictionary, doesn't find it, and returns None instead of raising a KeyError.

Key Concepts:
• • Default handling: result = items.get(key) or default • Error-free access Example: {'a': 1, 'b': 2}.get('c') returns None because get() searches for the key 'c' in the dictionary, doesn't find it, and returns None instead of raising a KeyError.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {'a': 1, 'b': 2}.get('c', 0)?`, 
    o: ["0", "None", "Error", "'c'"], 
    c: 0, 
    e: "get() returns default if key not found.",
    de: `The get() method can take a second argument as a default value to return if the key doesn't exist. {'a': 1, 'b': 2}.get('c', 0) returns 0 because get() searches for the key 'c' in the dictionary, doesn't find it, and returns the default value (0) instead of None. This is useful when you want a specific value for missing keys rather than None.

get() with default:
• {'a': 1, 'b': 2}.get('c', 0) = 0 (returns default)
• get(key, default) returns default if key not found
• Default value provided
• No error raised
• Safe access with fallback

How it works:
• get('c', 0) called on {'a': 1, 'b': 2}
• Searches for key 'c' in dictionary
• Finds no match (key doesn't exist)
• Returns default value: 0
• No error raised

Example:
{'a': 1, 'b': 2}.get('c', 0)  # 0 (not found, returns default)
{'a': 1, 'b': 2}.get('c', 'missing') # 'missing' (returns default)
{'a': 1, 'b': 2}.get('a', 0)  # 1 (found, returns actual value)

Common uses:
• Default values: value = dict.get(key, default)
• Fallback values: data = items.get(key, fallback)
• Safe access with defaults
• Error-free access with fallback

Example: {'a': 1, 'b': 2}.get('c', 0) returns 0 because get() searches for the key 'c' in the dictionary, doesn't find it, and returns the default value 0 instead of None or raising an error.

Key Concepts:
• get() with default: • {'a': 1, 'b': 2}.get('c', 0) = 0 (returns default) • get(key, default) returns default if key not found • Default value provided • No error raised • Safe access with fallback How it works: • get('c', 0) called on {'a': 1, 'b': 2} • Searches for key 'c' in dictionary • Finds no match (key doesn't exist) • Returns default value: 0 • No error raised Example: {'a': 1, 'b': 2}.get('c', 0) # 0 (not found, returns default) {'a': 1, 'b': 2}.get('c', 'missing') # 'missing' (returns default) {'a': 1, 'b': 2}.get('a', 0) # 1 (found, returns actual value) Common uses: • Default values: value = dict.get(key, default) • Fallback values: data = items.get(key, fallback) • Safe access with defaults • Error-free access with fallback Example: {'a': 1, 'b': 2}.get('c', 0) returns 0 because get() searches for the key 'c' in the dictionary, doesn't find it, and returns the default value 0 instead of None or raising an error.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {'a': 1, 'b': 2}.get('a', 0)?`, 
    o: ["1", "0", "None", "Error"], 
    c: 0, 
    e: "get() returns actual value if key exists, ignores default.",
    de: `The get() method returns the actual value if the key exists, even if a default value is provided. {'a': 1, 'b': 2}.get('a', 0) returns 1 because get() finds the key 'a' in the dictionary and returns its actual value (1), ignoring the default value (0). The default value is only used when the key doesn't exist - if the key exists, get() returns the actual value associated with that key.

get() with existing key:
• {'a': 1, 'b': 2}.get('a', 0) = 1 (returns actual value)
• get(key, default) returns actual value if key exists
• Default value ignored when key found
• Returns value from dictionary
• Default only used if key missing

How it works:
• get('a', 0) called on {'a': 1, 'b': 2}
• Searches for key 'a' in dictionary
• Finds mapping: 'a' → 1
• Returns actual value: 1 (ignores default 0)
• Default only used if key not found

Example:
{'a': 1, 'b': 2}.get('a', 0)  # 1 (found, returns actual value)
{'a': 1, 'b': 2}.get('b', 10) # 2 (found, returns actual value)
{'a': 1, 'b': 2}.get('c', 0)  # 0 (not found, returns default)

Common uses:
• Safe access with fallback: value = dict.get(key, default)
• Always returning value: result = items.get(key, 0)
• Default handling
• Fallback values

Example: {'a': 1, 'b': 2}.get('a', 0) returns 1 because get() finds the key 'a' in the dictionary and returns its actual value (1), ignoring the default value (0), which is only used when the key doesn't exist.

Key Concepts:
• get() with existing key: • {'a': 1, 'b': 2}.get('a', 0) = 1 (returns actual value) • get(key, default) returns actual value if key exists • Default value ignored when key found • Returns value from dictionary • Default only used if key missing How it works: • get('a', 0) called on {'a': 1, 'b': 2} • Searches for key 'a' in dictionary • Finds mapping: 'a' → 1 • Returns actual value: 1 (ignores default 0) • Default only used if key not found Example: {'a': 1, 'b': 2}.get('a', 0) # 1 (found, returns actual value) {'a': 1, 'b': 2}.get('b', 10) # 2 (found, returns actual value) {'a': 1, 'b': 2}.get('c', 0) # 0 (not found, returns default) Common uses: • Safe access with fallback: value = dict.get(key, default) • Always returning value: result = items.get(key, 0) • Default handling • Fallback values Example: {'a': 1, 'b': 2}.get('a', 0) returns 1 because get() finds the key 'a' in the dictionary and returns its actual value (1), ignoring the default value (0), which is only used when the key doesn't exist.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {'a': 1}.setdefault('a', 2)?`, 
    o: ["1", "2", "None", "Error"], 
    c: 0, 
    e: "setdefault() returns existing value if key exists.",
    de: `The setdefault() method returns the existing value if the key already exists in the dictionary. {'a': 1}.setdefault('a', 2) returns 1 because setdefault() finds the key 'a' already exists with value 1, and returns that existing value, ignoring the default value (2). Unlike get(), setdefault() doesn't just return a value - if the key doesn't exist, it sets the key to the default value and returns it.

setdefault() with existing key:
• {'a': 1}.setdefault('a', 2) = 1 (returns existing value)
• setdefault(key, default) returns existing value if key exists
• Default value ignored when key found
• Dictionary unchanged (key already exists)
• Returns value from dictionary

How it works:
• setdefault('a', 2) called on {'a': 1}
• Searches for key 'a' in dictionary
• Finds existing mapping: 'a' → 1
• Returns existing value: 1 (ignores default 2)
• Dictionary unchanged: {'a': 1}

Example:
{'a': 1}.setdefault('a', 2)  # 1 (returns existing value)
{'a': 1}.setdefault('a', 10) # 1 (returns existing value)
{'a': 1}                     # {'a': 1} (unchanged)

Common uses:
• Getting or setting: value = dict.setdefault(key, default)
• Ensuring key exists: dict.setdefault(key, [])
• Default initialization
• Value retrieval or creation

Example: {'a': 1}.setdefault('a', 2) returns 1 because setdefault() finds the key 'a' already exists with value 1, and returns that existing value, ignoring the default value (2).

Key Concepts:
• setdefault() with existing key: • {'a': 1}.setdefault('a', 2) = 1 (returns existing value) • setdefault(key, default) returns existing value if key exists • Default value ignored when key found • Dictionary unchanged (key already exists) • Returns value from dictionary How it works: • setdefault('a', 2) called on {'a': 1} • Searches for key 'a' in dictionary • Finds existing mapping: 'a' → 1 • Returns existing value: 1 (ignores default 2) • Dictionary unchanged: {'a': 1} Example: {'a': 1}.setdefault('a', 2) # 1 (returns existing value) {'a': 1}.setdefault('a', 10) # 1 (returns existing value) {'a': 1} # {'a': 1} (unchanged) Common uses: • Getting or setting: value = dict.setdefault(key, default) • Ensuring key exists: dict.setdefault(key, []) • Default initialization • Value retrieval or creation Example: {'a': 1}.setdefault('a', 2) returns 1 because setdefault() finds the key 'a' already exists with value 1, and returns that existing value, ignoring the default value (2).

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {'a': 1}.setdefault('b', 2)?`, 
    o: ["2", "1", "None", "Error"], 
    c: 0, 
    e: "setdefault() sets and returns default if key doesn't exist.",
    de: `The setdefault() method sets the key to the default value and returns it if the key doesn't exist. {'a': 1}.setdefault('b', 2) returns 2 because setdefault() searches for the key 'b' in the dictionary, doesn't find it, sets 'b' to the default value (2), and returns that value. This is different from get() - setdefault() modifies the dictionary if the key is missing, while get() doesn't modify the dictionary.

setdefault() with missing key:
• {'a': 1}.setdefault('b', 2) = 2 (sets and returns default)
• setdefault(key, default) sets key to default if missing
• Modifies dictionary in place
• Returns default value
• Dictionary changed: {'a': 1} → {'a': 1, 'b': 2}

How it works:
• setdefault('b', 2) called on {'a': 1}
• Searches for key 'b' in dictionary
• Finds no match (key doesn't exist)
• Sets 'b' to default value: 2
• Returns default value: 2
• Dictionary modified: {'a': 1, 'b': 2}

Example:
{'a': 1}.setdefault('b', 2)  # 2 (sets 'b' to 2, returns 2)
{'a': 1}                     # {'a': 1, 'b': 2} (modified)
{'a': 1}.setdefault('c', 0)  # 0 (sets 'c' to 0, returns 0)

Common uses:
• Initializing defaults: value = dict.setdefault(key, default)
• Ensuring key exists: dict.setdefault(key, [])
• Default creation
• Value initialization

Example: {'a': 1}.setdefault('b', 2) returns 2 because setdefault() doesn't find the key 'b' in the dictionary, sets 'b' to the default value (2), and returns that value, modifying the dictionary to {'a': 1, 'b': 2}.

Key Concepts:
• setdefault() with missing key: • {'a': 1}.setdefault('b', 2) = 2 (sets and returns default) • setdefault(key, default) sets key to default if missing • Modifies dictionary in place • Returns default value • Dictionary changed: {'a': 1} → {'a': 1, 'b': 2} How it works: • setdefault('b', 2) called on {'a': 1} • Searches for key 'b' in dictionary • Finds no match (key doesn't exist) • Sets 'b' to default value: 2 • Returns default value: 2 • Dictionary modified: {'a': 1, 'b': 2} Example: {'a': 1}.setdefault('b', 2) # 2 (sets 'b' to 2, returns 2) {'a': 1} # {'a': 1, 'b': 2} (modified) {'a': 1}.setdefault('c', 0) # 0 (sets 'c' to 0, returns 0) Common uses: • Initializing defaults: value = dict.setdefault(key, default) • Ensuring key exists: dict.setdefault(key, []) • Default creation • Value initialization Example: {'a': 1}.setdefault('b', 2) returns 2 because setdefault() doesn't find the key 'b' in the dictionary, sets 'b' to the default value (2), and returns that value, modifying the dictionary to {'a': 1, 'b': 2}.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is the difference between get() and setdefault()?`, 
    o: ["setdefault() sets key if missing, get() doesn't", "No difference", "get() is faster", "setdefault() is deprecated"], 
    c: 0, 
    e: "setdefault() modifies dict if key missing, get() doesn't.",
    de: `The key difference between get() and setdefault() is whether they modify the dictionary. get() only retrieves values - it returns None (or a default) if the key doesn't exist, but never modifies the dictionary. setdefault() retrieves values if the key exists, but if the key doesn't exist, it sets the key to the default value and returns it, modifying the dictionary. Both return the same value when the key exists, but only setdefault() changes the dictionary when the key is missing.

get() vs setdefault():
• get(key, default): returns value or default, never modifies dict
• setdefault(key, default): returns value or default, sets key if missing
• get() is read-only (doesn't change dict)
• setdefault() modifies dict if key missing
• Both return same value when key exists

How it works:
• get('c', 0): searches for 'c', not found, returns 0, dict unchanged
• setdefault('c', 0): searches for 'c', not found, sets 'c' to 0, returns 0, dict modified
• Both return value when key exists
• Only setdefault() modifies when missing

Example:
d = {'a': 1}
d.get('b', 0)        # 0 (returns 0, d unchanged: {'a': 1})
d.setdefault('b', 0) # 0 (returns 0, d modified: {'a': 1, 'b': 0})

Common uses:
• get(): safe read-only access: value = dict.get(key, default)
• setdefault(): ensure key exists: value = dict.setdefault(key, default)
• Choose based on whether you want to modify dict
• Important distinction for dictionary behavior

Example: The difference is get() only retrieves values and never modifies the dictionary (e.g., {'a': 1}.get('b', 0) returns 0 but doesn't change the dict), while setdefault() modifies the dictionary if the key is missing (e.g., {'a': 1}.setdefault('b', 0) returns 0 and adds 'b': 0 to the dict).

Key Concepts:
• get() vs setdefault(): • get(key, default): returns value or default, never modifies dict • setdefault(key, default): returns value or default, sets key if missing • get() is read-only (doesn't change dict) • setdefault() modifies dict if key missing • Both return same value when key exists How it works: • get('c', 0): searches for 'c', not found, returns 0, dict unchanged • setdefault('c', 0): searches for 'c', not found, sets 'c' to 0, returns 0, dict modified • Both return value when key exists • Only setdefault() modifies when missing Example: d = {'a': 1} d.get('b', 0) # 0 (returns 0, d unchanged: {'a': 1}) d.setdefault('b', 0) # 0 (returns 0, d modified: {'a': 1, 'b': 0}) Common uses: • get(): safe read-only access: value = dict.get(key, default) • setdefault(): ensure key exists: value = dict.setdefault(key, default) • Choose based on whether you want to modify dict • Important distinction for dictionary behavior Example: The difference is get() only retrieves values and never modifies the dictionary (e.g., {'a': 1}.get('b', 0) returns 0 but doesn't change the dict), while setdefault() modifies the dictionary if the key is missing (e.g., {'a': 1}.setdefault('b', 0) returns 0 and adds 'b': 0 to the dict).

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {'a': 1, 'b': 2}.pop('a')?`, 
    o: ["1", "{'b': 2}", "None", "Error"], 
    c: 0, 
    e: "pop() returns and removes value for key.",
    de: `The pop() method removes a key-value pair from a dictionary and returns the value. {'a': 1, 'b': 2}.pop('a') returns 1 because pop() finds the key 'a' in the dictionary, removes the pair 'a': 1, and returns the value 1. After calling pop('a'), the dictionary becomes {'b': 2} - the key-value pair is removed. pop() modifies the dictionary in place and returns the removed value.

pop() method:
• {'a': 1, 'b': 2}.pop('a') = 1 (returns removed value)
• pop(key) removes key-value pair
• Modifies dictionary in place
• Returns the removed value
• Dictionary changed: {'a': 1, 'b': 2} → {'b': 2}

How it works:
• pop('a') called on {'a': 1, 'b': 2}
• Searches for key 'a' in dictionary
• Finds mapping: 'a' → 1
• Removes pair 'a': 1 from dictionary
• Returns removed value: 1
• Dictionary modified: {'b': 2}

Example:
d = {'a': 1, 'b': 2}
d.pop('a')            # 1 (returns removed value)
d                     # {'b': 2} (modified)
{'a': 1, 'b': 2}.pop('b') # 2 (returns removed value)

Common uses:
• Removing pairs: value = dict.pop(key)
• Getting and removing: removed = items.pop(key)
• Dictionary cleanup
• In-place modification

Example: {'a': 1, 'b': 2}.pop('a') returns 1 because pop() removes the key-value pair 'a': 1 from the dictionary and returns the removed value, leaving the dictionary as {'b': 2}.

Key Concepts:
• pop() method: • {'a': 1, 'b': 2}.pop('a') = 1 (returns removed value) • pop(key) removes key-value pair • Modifies dictionary in place • Returns the removed value • Dictionary changed: {'a': 1, 'b': 2} → {'b': 2} How it works: • pop('a') called on {'a': 1, 'b': 2} • Searches for key 'a' in dictionary • Finds mapping: 'a' → 1 • Removes pair 'a': 1 from dictionary • Returns removed value: 1 • Dictionary modified: {'b': 2} Example: d = {'a': 1, 'b': 2} d.pop('a') # 1 (returns removed value) d # {'b': 2} (modified) {'a': 1, 'b': 2}.pop('b') # 2 (returns removed value) Common uses: • Removing pairs: value = dict.pop(key) • Getting and removing: removed = items.pop(key) • Dictionary cleanup • In-place modification Example: {'a': 1, 'b': 2}.pop('a') returns 1 because pop() removes the key-value pair 'a': 1 from the dictionary and returns the removed value, leaving the dictionary as {'b': 2}.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {'a': 1, 'b': 2}.pop('c')?`, 
    o: ["KeyError", "None", "0", "Error"], 
    c: 0, 
    e: "pop() raises KeyError if key not found (no default).",
    de: `The pop() method raises a KeyError when called with a non-existent key and no default value is provided. {'a': 1, 'b': 2}.pop('c') raises a KeyError because pop() searches for the key 'c' in the dictionary, doesn't find it, and raises an error since there's no value to remove and return. This is different from get(), which returns None for missing keys - pop() requires the key to exist (or a default value to be provided) because it removes the pair.

pop() - key not found:
• {'a': 1, 'b': 2}.pop('c') raises KeyError
• Key 'c' doesn't exist in dictionary
• pop() requires key to exist (no default)
• Raises KeyError (cannot remove non-existent key)
• Error message: "KeyError: 'c'"

How it works:
• pop('c') called on {'a': 1, 'b': 2}
• Searches for key 'c' in dictionary
• Finds no match (key doesn't exist)
• Cannot remove non-existent pair
• Raises KeyError
• No value to return

Example:
{'a': 1, 'b': 2}.pop('c')  # KeyError: 'c'
d = {'a': 1, 'b': 2}
d.pop('x')                 # KeyError: 'x'
if 'c' in d:               # Check first
    d.pop('c')             # Safe to pop

Common uses:
• Error handling: try/except for KeyError
• Checking first: if key in dict: dict.pop(key)
• Safe removal: value = dict.pop(key, default)
• Key existence validation

Example: Calling pop() with a non-existent key like {'a': 1, 'b': 2}.pop('c') raises a KeyError because pop() cannot remove a key-value pair that doesn't exist, and no default value was provided.

Key Concepts:
• pop() - key not found: • {'a': 1, 'b': 2}.pop('c') raises KeyError • Key 'c' doesn't exist in dictionary • pop() requires key to exist (no default) • Raises KeyError (cannot remove non-existent key) • Error message: "KeyError: 'c'" How it works: • pop('c') called on {'a': 1, 'b': 2} • Searches for key 'c' in dictionary • Finds no match (key doesn't exist) • Cannot remove non-existent pair • Raises KeyError • No value to return Example: {'a': 1, 'b': 2}.pop('c') # KeyError: 'c' d = {'a': 1, 'b': 2} d.pop('x') # KeyError: 'x' if 'c' in d: # Check first d.pop('c') # Safe to pop Common uses: • Error handling: try/except for KeyError • Checking first: if key in dict: dict.pop(key) • Safe removal: value = dict.pop(key, default) • Key existence validation Example: Calling pop() with a non-existent key like {'a': 1, 'b': 2}.pop('c') raises a KeyError because pop() cannot remove a key-value pair that doesn't exist, and no default value was provided.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {'a': 1, 'b': 2}.pop('c', 0)?`, 
    o: ["0", "None", "KeyError", "Error"], 
    c: 0, 
    e: "pop() returns default if key not found.",
    de: `The pop() method can take a second argument as a default value to return if the key doesn't exist, without modifying the dictionary. {'a': 1, 'b': 2}.pop('c', 0) returns 0 because pop() searches for the key 'c' in the dictionary, doesn't find it, and returns the default value (0) without raising an error. Unlike pop() without a default, this version doesn't raise a KeyError - it just returns the default value. The dictionary remains unchanged because there was no pair to remove.

pop() with default:
• {'a': 1, 'b': 2}.pop('c', 0) = 0 (returns default)
• pop(key, default) returns default if key not found
• No error raised (unlike pop() without default)
• Dictionary unchanged (no pair to remove)
• Returns default value

How it works:
• pop('c', 0) called on {'a': 1, 'b': 2}
• Searches for key 'c' in dictionary
• Finds no match (key doesn't exist)
• Cannot remove non-existent pair
• Returns default value: 0 (no error)
• Dictionary unchanged: {'a': 1, 'b': 2}

Example:
{'a': 1, 'b': 2}.pop('c', 0)  # 0 (not found, returns default)
{'a': 1, 'b': 2}.pop('c', 'missing') # 'missing' (returns default)
{'a': 1, 'b': 2}              # {'a': 1, 'b': 2} (unchanged)

Common uses:
• Safe removal: value = dict.pop(key, default)
• Default handling: removed = items.pop(key, fallback)
• Error-free removal
• Safe pop with fallback

Example: {'a': 1, 'b': 2}.pop('c', 0) returns 0 because pop() searches for the key 'c' in the dictionary, doesn't find it, and returns the default value (0) without raising an error, leaving the dictionary unchanged.

Key Concepts:
• pop() with default: • {'a': 1, 'b': 2}.pop('c', 0) = 0 (returns default) • pop(key, default) returns default if key not found • No error raised (unlike pop() without default) • Dictionary unchanged (no pair to remove) • Returns default value How it works: • pop('c', 0) called on {'a': 1, 'b': 2} • Searches for key 'c' in dictionary • Finds no match (key doesn't exist) • Cannot remove non-existent pair • Returns default value: 0 (no error) • Dictionary unchanged: {'a': 1, 'b': 2} Example: {'a': 1, 'b': 2}.pop('c', 0) # 0 (not found, returns default) {'a': 1, 'b': 2}.pop('c', 'missing') # 'missing' (returns default) {'a': 1, 'b': 2} # {'a': 1, 'b': 2} (unchanged) Common uses: • Safe removal: value = dict.pop(key, default) • Default handling: removed = items.pop(key, fallback) • Error-free removal • Safe pop with fallback Example: {'a': 1, 'b': 2}.pop('c', 0) returns 0 because pop() searches for the key 'c' in the dictionary, doesn't find it, and returns the default value (0) without raising an error, leaving the dictionary unchanged.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  
  // 21-30: Dictionary Methods - Keys, Values, Items
  (_i: number) => ({ 
    q: `What is {'a': 1, 'b': 2}.keys()?`, 
    o: ["dict_keys(['a', 'b'])", "['a', 'b']", "{'a', 'b'}", "Error"], 
    c: 0, 
    e: "keys() returns dict_keys view object.",
    de: `The keys() method returns a view object that displays all keys in the dictionary. {'a': 1, 'b': 2}.keys() returns a dict_keys(['a', 'b']) object because keys() creates a view of the dictionary's keys. A view object is a dynamic view of the dictionary - it reflects changes made to the dictionary. The view is not a list, but it can be converted to a list using list(). Views are memory-efficient and update automatically when the dictionary changes.

keys() method:
• {'a': 1, 'b': 2}.keys() = dict_keys(['a', 'b'])
• keys() returns dict_keys view object
• View reflects dictionary keys
• Not a list (but can be converted)
• Updates automatically when dict changes

How it works:
• keys() called on {'a': 1, 'b': 2}
• Creates view object of keys
• View contains: 'a', 'b'
• Returns dict_keys view: dict_keys(['a', 'b'])
• View updates if dictionary changes

Example:
{'a': 1, 'b': 2}.keys()  # dict_keys(['a', 'b'])
list({'a': 1, 'b': 2}.keys()) # ['a', 'b'] (converted to list)
for key in {'a': 1, 'b': 2}.keys():  # Iterates: 'a', 'b'
    print(key)

Common uses:
• Getting keys: keys = dict.keys()
• Iterating keys: for key in dict.keys():
• Key iteration
• Dictionary key access

Example: {'a': 1, 'b': 2}.keys() returns a dict_keys(['a', 'b']) view object because keys() creates a dynamic view of all keys in the dictionary, which can be iterated or converted to a list.

Key Concepts:
• keys() method: • {'a': 1, 'b': 2}.keys() = dict_keys(['a', 'b']) • keys() returns dict_keys view object • View reflects dictionary keys • Not a list (but can be converted) • Updates automatically when dict changes How it works: • keys() called on {'a': 1, 'b': 2} • Creates view object of keys • View contains: 'a', 'b' • Returns dict_keys view: dict_keys(['a', 'b']) • View updates if dictionary changes Example: {'a': 1, 'b': 2}.keys() # dict_keys(['a', 'b']) list({'a': 1, 'b': 2}.keys()) # ['a', 'b'] (converted to list) for key in {'a': 1, 'b': 2}.keys(): # Iterates: 'a', 'b' print(key) Common uses: • Getting keys: keys = dict.keys() • Iterating keys: for key in dict.keys(): • Key iteration • Dictionary key access Example: {'a': 1, 'b': 2}.keys() returns a dict_keys(['a', 'b']) view object because keys() creates a dynamic view of all keys in the dictionary, which can be iterated or converted to a list.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is list({'a': 1, 'b': 2}.keys())?`, 
    o: ["['a', 'b']", "dict_keys(['a', 'b'])", "{'a', 'b'}", "Error"], 
    c: 0, 
    e: "list() converts keys view to list.",
    de: `The list() function can convert a dict_keys view to a list. list({'a': 1, 'b': 2}.keys()) returns ['a', 'b'] because list() consumes the view object created by keys() and collects all keys into a new list. The keys() method returns a view object, and list() iterates through that view, collecting all keys into a list. This is how you get an actual list of keys from keys().

list(keys()):
• list({'a': 1, 'b': 2}.keys()) = ['a', 'b']
• keys() returns dict_keys view
• list() consumes view
• Collects keys into new list
• Creates list of keys

How it works:
• keys() called on {'a': 1, 'b': 2}
• Returns dict_keys view: ['a', 'b']
• list() iterates through view
• Collects keys: 'a', 'b'
• Returns new list: ['a', 'b']

Example:
list({'a': 1, 'b': 2}.keys())  # ['a', 'b'] (list of keys)
list({'x': 10, 'y': 20}.keys()) # ['x', 'y'] (list of keys)
list({}.keys())                 # [] (empty list)

Common uses:
• Getting key list: key_list = list(dict.keys())
• Creating key list: keys = list(items.keys())
• Converting view to list
• Key list creation

Example: list({'a': 1, 'b': 2}.keys()) returns ['a', 'b'] because list() consumes the dict_keys view created by keys() and collects all keys into a new list.

Key Concepts:
• list(keys()): • list({'a': 1, 'b': 2}.keys()) = ['a', 'b'] • keys() returns dict_keys view • list() consumes view • Collects keys into new list • Creates list of keys How it works: • keys() called on {'a': 1, 'b': 2} • Returns dict_keys view: ['a', 'b'] • list() iterates through view • Collects keys: 'a', 'b' • Returns new list: ['a', 'b'] Example: list({'a': 1, 'b': 2}.keys()) # ['a', 'b'] (list of keys) list({'x': 10, 'y': 20}.keys()) # ['x', 'y'] (list of keys) list({}.keys()) # [] (empty list) Common uses: • Getting key list: key_list = list(dict.keys()) • Creating key list: keys = list(items.keys()) • Converting view to list • Key list creation Example: list({'a': 1, 'b': 2}.keys()) returns ['a', 'b'] because list() consumes the dict_keys view created by keys() and collects all keys into a new list.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {'a': 1, 'b': 2}.values()?`, 
    o: ["dict_values([1, 2])", "[1, 2]", "{1, 2}", "Error"], 
    c: 0, 
    e: "values() returns dict_values view object.",
    de: `The values() method returns a view object that displays all values in the dictionary. {'a': 1, 'b': 2}.values() returns a dict_values([1, 2]) object because values() creates a view of the dictionary's values. A view object is a dynamic view of the dictionary - it reflects changes made to the dictionary. The view is not a list, but it can be converted to a list using list(). Views are memory-efficient and update automatically when the dictionary changes.

values() method:
• {'a': 1, 'b': 2}.values() = dict_values([1, 2])
• values() returns dict_values view object
• View reflects dictionary values
• Not a list (but can be converted)
• Updates automatically when dict changes

How it works:
• values() called on {'a': 1, 'b': 2}
• Creates view object of values
• View contains: 1, 2
• Returns dict_values view: dict_values([1, 2])
• View updates if dictionary changes

Example:
{'a': 1, 'b': 2}.values()  # dict_values([1, 2])
list({'a': 1, 'b': 2}.values()) # [1, 2] (converted to list)
for value in {'a': 1, 'b': 2}.values():  # Iterates: 1, 2
    print(value)

Common uses:
• Getting values: values = dict.values()
• Iterating values: for value in dict.values():
• Value iteration
• Dictionary value access

Example: {'a': 1, 'b': 2}.values() returns a dict_values([1, 2]) view object because values() creates a dynamic view of all values in the dictionary, which can be iterated or converted to a list.

Key Concepts:
• values() method: • {'a': 1, 'b': 2}.values() = dict_values([1, 2]) • values() returns dict_values view object • View reflects dictionary values • Not a list (but can be converted) • Updates automatically when dict changes How it works: • values() called on {'a': 1, 'b': 2} • Creates view object of values • View contains: 1, 2 • Returns dict_values view: dict_values([1, 2]) • View updates if dictionary changes Example: {'a': 1, 'b': 2}.values() # dict_values([1, 2]) list({'a': 1, 'b': 2}.values()) # [1, 2] (converted to list) for value in {'a': 1, 'b': 2}.values(): # Iterates: 1, 2 print(value) Common uses: • Getting values: values = dict.values() • Iterating values: for value in dict.values(): • Value iteration • Dictionary value access Example: {'a': 1, 'b': 2}.values() returns a dict_values([1, 2]) view object because values() creates a dynamic view of all values in the dictionary, which can be iterated or converted to a list.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is list({'a': 1, 'b': 2}.values())?`, 
    o: ["[1, 2]", "dict_values([1, 2])", "{1, 2}", "Error"], 
    c: 0, 
    e: "list() converts values view to list.",
    de: `The list() function can convert a dict_values view to a list. list({'a': 1, 'b': 2}.values()) returns [1, 2] because list() consumes the view object created by values() and collects all values into a new list. The values() method returns a view object, and list() iterates through that view, collecting all values into a list. This is how you get an actual list of values from values().

list(values()):
• list({'a': 1, 'b': 2}.values()) = [1, 2]
• values() returns dict_values view
• list() consumes view
• Collects values into new list
• Creates list of values

How it works:
• values() called on {'a': 1, 'b': 2}
• Returns dict_values view: [1, 2]
• list() iterates through view
• Collects values: 1, 2
• Returns new list: [1, 2]

Example:
list({'a': 1, 'b': 2}.values())  # [1, 2] (list of values)
list({'x': 10, 'y': 20}.values()) # [10, 20] (list of values)
list({}.values())                 # [] (empty list)

Common uses:
• Getting value list: value_list = list(dict.values())
• Creating value list: values = list(items.values())
• Converting view to list
• Value list creation

Example: list({'a': 1, 'b': 2}.values()) returns [1, 2] because list() consumes the dict_values view created by values() and collects all values into a new list.

Key Concepts:
• list(values()): • list({'a': 1, 'b': 2}.values()) = [1, 2] • values() returns dict_values view • list() consumes view • Collects values into new list • Creates list of values How it works: • values() called on {'a': 1, 'b': 2} • Returns dict_values view: [1, 2] • list() iterates through view • Collects values: 1, 2 • Returns new list: [1, 2] Example: list({'a': 1, 'b': 2}.values()) # [1, 2] (list of values) list({'x': 10, 'y': 20}.values()) # [10, 20] (list of values) list({}.values()) # [] (empty list) Common uses: • Getting value list: value_list = list(dict.values()) • Creating value list: values = list(items.values()) • Converting view to list • Value list creation Example: list({'a': 1, 'b': 2}.values()) returns [1, 2] because list() consumes the dict_values view created by values() and collects all values into a new list.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {'a': 1, 'b': 2}.items()?`, 
    o: ["dict_items([('a', 1), ('b', 2)])", "[('a', 1), ('b', 2)]", "Error", "None"], 
    c: 0, 
    e: "items() returns dict_items view of key-value pairs.",
    de: `The items() method returns a view object that displays all key-value pairs in the dictionary as tuples. {'a': 1, 'b': 2}.items() returns a dict_items([('a', 1), ('b', 2)]) object because items() creates a view of the dictionary's key-value pairs, where each pair is represented as a tuple (key, value). A view object is a dynamic view of the dictionary - it reflects changes made to the dictionary. The view is not a list, but it can be converted to a list using list().

items() method:
• {'a': 1, 'b': 2}.items() = dict_items([('a', 1), ('b', 2)])
• items() returns dict_items view object
• View contains (key, value) tuples
• Not a list (but can be converted)
• Updates automatically when dict changes

How it works:
• items() called on {'a': 1, 'b': 2}
• Creates view object of key-value pairs
• View contains: ('a', 1), ('b', 2)
• Returns dict_items view: dict_items([('a', 1), ('b', 2)])
• View updates if dictionary changes

Example:
{'a': 1, 'b': 2}.items()  # dict_items([('a', 1), ('b', 2)])
list({'a': 1, 'b': 2}.items()) # [('a', 1), ('b', 2)] (converted to list)
for key, value in {'a': 1, 'b': 2}.items():  # Iterates: ('a', 1), ('b', 2)
    print(key, value)

Common uses:
• Getting pairs: pairs = dict.items()
• Iterating pairs: for key, value in dict.items():
• Pair iteration
• Dictionary pair access

Example: {'a': 1, 'b': 2}.items() returns a dict_items([('a', 1), ('b', 2)]) view object because items() creates a dynamic view of all key-value pairs in the dictionary as tuples, which can be iterated or converted to a list.

Key Concepts:
• items() method: • {'a': 1, 'b': 2}.items() = dict_items([('a', 1), ('b', 2)]) • items() returns dict_items view object • View contains (key, value) tuples • Not a list (but can be converted) • Updates automatically when dict changes How it works: • items() called on {'a': 1, 'b': 2} • Creates view object of key-value pairs • View contains: ('a', 1), ('b', 2) • Returns dict_items view: dict_items([('a', 1), ('b', 2)]) • View updates if dictionary changes Example: {'a': 1, 'b': 2}.items() # dict_items([('a', 1), ('b', 2)]) list({'a': 1, 'b': 2}.items()) # [('a', 1), ('b', 2)] (converted to list) for key, value in {'a': 1, 'b': 2}.items(): # Iterates: ('a', 1), ('b', 2) print(key, value) Common uses: • Getting pairs: pairs = dict.items() • Iterating pairs: for key, value in dict.items(): • Pair iteration • Dictionary pair access Example: {'a': 1, 'b': 2}.items() returns a dict_items([('a', 1), ('b', 2)]) view object because items() creates a dynamic view of all key-value pairs in the dictionary as tuples, which can be iterated or converted to a list.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is list({'a': 1, 'b': 2}.items())?`, 
    o: ["[('a', 1), ('b', 2)]", "dict_items([('a', 1), ('b', 2)])", "Error", "None"], 
    c: 0, 
    e: "list() converts items view to list of tuples.",
    de: `The list() function can convert a dict_items view to a list of tuples. list({'a': 1, 'b': 2}.items()) returns [('a', 1), ('b', 2)] because list() consumes the view object created by items() and collects all key-value pairs as tuples into a new list. The items() method returns a view object, and list() iterates through that view, collecting all pairs as (key, value) tuples into a list. This is how you get an actual list of key-value pairs from items().

list(items()):
• list({'a': 1, 'b': 2}.items()) = [('a', 1), ('b', 2)]
• items() returns dict_items view
• list() consumes view
• Collects pairs as tuples into new list
• Creates list of (key, value) tuples

How it works:
• items() called on {'a': 1, 'b': 2}
• Returns dict_items view: [('a', 1), ('b', 2)]
• list() iterates through view
• Collects pairs as tuples: ('a', 1), ('b', 2)
• Returns new list: [('a', 1), ('b', 2)]

Example:
list({'a': 1, 'b': 2}.items())  # [('a', 1), ('b', 2)] (list of tuples)
list({'x': 10, 'y': 20}.items()) # [('x', 10), ('y', 20)] (list of tuples)
list({}.items())                 # [] (empty list)

Common uses:
• Getting pair list: pair_list = list(dict.items())
• Creating pair list: pairs = list(items.items())
• Converting view to list
• Pair list creation

Example: list({'a': 1, 'b': 2}.items()) returns [('a', 1), ('b', 2)] because list() consumes the dict_items view created by items() and collects all key-value pairs as tuples into a new list.

Key Concepts:
• list(items()): • list({'a': 1, 'b': 2}.items()) = [('a', 1), ('b', 2)] • items() returns dict_items view • list() consumes view • Collects pairs as tuples into new list • Creates list of (key, value) tuples How it works: • items() called on {'a': 1, 'b': 2} • Returns dict_items view: [('a', 1), ('b', 2)] • list() iterates through view • Collects pairs as tuples: ('a', 1), ('b', 2) • Returns new list: [('a', 1), ('b', 2)] Example: list({'a': 1, 'b': 2}.items()) # [('a', 1), ('b', 2)] (list of tuples) list({'x': 10, 'y': 20}.items()) # [('x', 10), ('y', 20)] (list of tuples) list({}.items()) # [] (empty list) Common uses: • Getting pair list: pair_list = list(dict.items()) • Creating pair list: pairs = list(items.items()) • Converting view to list • Pair list creation Example: list({'a': 1, 'b': 2}.items()) returns [('a', 1), ('b', 2)] because list() consumes the dict_items view created by items() and collects all key-value pairs as tuples into a new list.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is 'a' in {'a': 1, 'b': 2}?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "in checks for key membership (not value).",
    de: `The in operator checks for key membership in a dictionary, not value membership. 'a' in {'a': 1, 'b': 2} returns True because in searches for the key 'a' in the dictionary and finds it. The in operator for dictionaries only checks keys, not values - it doesn't search through values. This is important to remember: in with dictionaries is key-based, not value-based.

in operator with dictionary:
• 'a' in {'a': 1, 'b': 2} = True
• in checks if key exists in dictionary
• Searches keys only (not values)
• Returns True if key found
• Returns False if key not found

How it works:
• 'a' is the value to check
• in is membership operator
• {'a': 1, 'b': 2} is the dictionary
• Searches for key 'a' in dictionary
• Finds key 'a', returns True

Example:
'a' in {'a': 1, 'b': 2}  # True (key 'a' exists)
'c' in {'a': 1, 'b': 2}  # False (key 'c' doesn't exist)
1 in {'a': 1, 'b': 2}    # False (1 is a value, not a key)

Common uses:
• Checking key existence: if key in dict:
• Key validation: if item in items:
• Key membership check
• Dictionary key verification

Example: 'a' in {'a': 1, 'b': 2} returns True because the in operator checks if 'a' exists as a key in the dictionary, and it finds the key 'a'.

Key Concepts:
• in operator with dictionary: • 'a' in {'a': 1, 'b': 2} = True • in checks if key exists in dictionary • Searches keys only (not values) • Returns True if key found • Returns False if key not found How it works: • 'a' is the value to check • in is membership operator • {'a': 1, 'b': 2} is the dictionary • Searches for key 'a' in dictionary • Finds key 'a', returns True Example: 'a' in {'a': 1, 'b': 2} # True (key 'a' exists) 'c' in {'a': 1, 'b': 2} # False (key 'c' doesn't exist) 1 in {'a': 1, 'b': 2} # False (1 is a value, not a key) Common uses: • Checking key existence: if key in dict: • Key validation: if item in items: • Key membership check • Dictionary key verification Example: 'a' in {'a': 1, 'b': 2} returns True because the in operator checks if 'a' exists as a key in the dictionary, and it finds the key 'a'.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is 1 in {'a': 1, 'b': 2}?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "in checks keys, not values.",
    de: `The in operator checks for key membership in a dictionary, not value membership. 1 in {'a': 1, 'b': 2} returns False because in searches for the key 1 in the dictionary, but the keys are 'a' and 'b' (strings), not 1. Even though 1 is a value in the dictionary, in only checks keys. To check if a value exists, you need to use .values() or iterate through values.

in operator - keys only:
• 1 in {'a': 1, 'b': 2} = False
• in checks if key exists in dictionary
• Searches keys only (not values)
• Key 1 doesn't exist (keys are 'a', 'b')
• Returns False (key not found)

How it works:
• 1 is the value to check
• in is membership operator
• {'a': 1, 'b': 2} is the dictionary
• Searches for key 1 in dictionary
• Keys are 'a' and 'b', not 1
• Returns False (key not found)

Example:
1 in {'a': 1, 'b': 2}    # False (1 is not a key)
2 in {'a': 1, 'b': 2}    # False (2 is not a key)
'a' in {'a': 1, 'b': 2}  # True ('a' is a key)

Common uses:
• Understanding in checks keys: if value in dict: (checks keys!)
• Checking values: if value in dict.values(): (checks values)
• Key vs value membership
• Dictionary membership check

Example: 1 in {'a': 1, 'b': 2} returns False because the in operator checks if 1 exists as a key in the dictionary, but the keys are 'a' and 'b', not 1. The in operator only checks keys, not values.

Key Concepts:
• The in operator only checks keys, not values.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is 1 in {'a': 1, 'b': 2}.values()?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "in with .values() checks value membership.",
    de: `The in operator with .values() checks for value membership in the dictionary. 1 in {'a': 1, 'b': 2}.values() returns True because .values() returns a view of all values, and in checks if 1 exists in those values. This is how you check if a value (not a key) exists in a dictionary - you need to use .values() because in with a dictionary directly only checks keys.

in with .values():
• 1 in {'a': 1, 'b': 2}.values() = True
• .values() returns view of all values
• in checks if value exists in values view
• Searches through values (not keys)
• Returns True if value found

How it works:
• 1 is the value to check
• in is membership operator
• {'a': 1, 'b': 2}.values() is values view: [1, 2]
• Searches for value 1 in values view
• Finds value 1, returns True

Example:
1 in {'a': 1, 'b': 2}.values()  # True (1 is a value)
3 in {'a': 1, 'b': 2}.values()  # False (3 is not a value)
'a' in {'a': 1, 'b': 2}.values() # False ('a' is not a value)

Common uses:
• Checking value existence: if value in dict.values():
• Value membership: if item in items.values():
• Value-based membership check
• Dictionary value verification

Example: 1 in {'a': 1, 'b': 2}.values() returns True because .values() returns a view of all values (1, 2), and the in operator checks if 1 exists in those values, which it does.

Key Concepts:
• in with .values(): • 1 in {'a': 1, 'b': 2}.values() = True • .values() returns view of all values • in checks if value exists in values view • Searches through values (not keys) • Returns True if value found How it works: • 1 is the value to check • in is membership operator • {'a': 1, 'b': 2}.values() is values view: [1, 2] • Searches for value 1 in values view • Finds value 1, returns True Example: 1 in {'a': 1, 'b': 2}.values() # True (1 is a value) 3 in {'a': 1, 'b': 2}.values() # False (3 is not a value) 'a' in {'a': 1, 'b': 2}.values() # False ('a' is not a value) Common uses: • Checking value existence: if value in dict.values(): • Value membership: if item in items.values(): • Value-based membership check • Dictionary value verification Example: 1 in {'a': 1, 'b': 2}.values() returns True because .values() returns a view of all values (1, 2), and the in operator checks if 1 exists in those values, which it does.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is ('a', 1) in {'a': 1, 'b': 2}.items()?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "in with .items() checks for key-value pair.",
    de: `The in operator with .items() checks for key-value pair membership in the dictionary. ('a', 1) in {'a': 1, 'b': 2}.items() returns True because .items() returns a view of all key-value pairs as tuples, and in checks if the tuple ('a', 1) exists in those pairs. This is how you check if a specific key-value pair exists in a dictionary - you need to use .items() and provide the pair as a tuple.

in with .items():
• ('a', 1) in {'a': 1, 'b': 2}.items() = True
• .items() returns view of all (key, value) tuples
• in checks if tuple exists in items view
• Searches through pairs (not individual keys or values)
• Returns True if pair found

How it works:
• ('a', 1) is the tuple to check
• in is membership operator
• {'a': 1, 'b': 2}.items() is items view: [('a', 1), ('b', 2)]
• Searches for tuple ('a', 1) in items view
• Finds pair ('a', 1), returns True

Example:
('a', 1) in {'a': 1, 'b': 2}.items()  # True (pair exists)
('a', 2) in {'a': 1, 'b': 2}.items()  # False (pair doesn't exist)
('c', 1) in {'a': 1, 'b': 2}.items()  # False (pair doesn't exist)

Common uses:
• Checking pair existence: if (key, value) in dict.items():
• Pair membership: if pair in items.items():
• Pair-based membership check
• Dictionary pair verification

Example: ('a', 1) in {'a': 1, 'b': 2}.items() returns True because .items() returns a view of all key-value pairs as tuples [('a', 1), ('b', 2)], and the in operator checks if the tuple ('a', 1) exists in those pairs, which it does.

Key Concepts:
• in with .items(): • ('a', 1) in {'a': 1, 'b': 2}.items() = True • .items() returns view of all (key, value) tuples • in checks if tuple exists in items view • Searches through pairs (not individual keys or values) • Returns True if pair found How it works: • ('a', 1) is the tuple to check • in is membership operator • {'a': 1, 'b': 2}.items() is items view: [('a', 1), ('b', 2)] • Searches for tuple ('a', 1) in items view • Finds pair ('a', 1), returns True Example: ('a', 1) in {'a': 1, 'b': 2}.items() # True (pair exists) ('a', 2) in {'a': 1, 'b': 2}.items() # False (pair doesn't exist) ('c', 1) in {'a': 1, 'b': 2}.items() # False (pair doesn't exist) Common uses: • Checking pair existence: if (key, value) in dict.items(): • Pair membership: if pair in items.items(): • Pair-based membership check • Dictionary pair verification Example: ('a', 1) in {'a': 1, 'b': 2}.items() returns True because .items() returns a view of all key-value pairs as tuples [('a', 1), ('b', 2)], and the in operator checks if the tuple ('a', 1) exists in those pairs, which it does.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  
  // 31-40: Dictionary Methods - Modifying
  (_i: number) => ({ 
    q: `What is d = {'a': 1}; d['b'] = 2; d?`, 
    o: ["{'a': 1, 'b': 2}", "{'a': 1}", "Error", "None"], 
    c: 0, 
    e: "Assignment adds or updates key-value pair.",
    de: `Assignment with square brackets adds a new key-value pair to a dictionary if the key doesn't exist. If d = {'a': 1} and then d['b'] = 2, the dictionary d becomes {'a': 1, 'b': 2} because assignment with a new key adds that key-value pair to the dictionary. This is how you add new pairs to a dictionary - simply assign a value to a new key using square bracket notation.

Dictionary assignment - adding:
• d = {'a': 1}; d['b'] = 2; d = {'a': 1, 'b': 2}
• Assignment with new key adds pair
• d['b'] = 2 creates new key 'b' with value 2
• Modifies dictionary in place
• Dictionary changed: {'a': 1} → {'a': 1, 'b': 2}

How it works:
• d = {'a': 1} creates dictionary
• d['b'] = 2 assigns value 2 to key 'b'
• Key 'b' doesn't exist, so it's added
• Creates new pair: 'b': 2
• Dictionary modified: {'a': 1, 'b': 2}

Example:
d = {'a': 1}
d['b'] = 2            # Adds 'b': 2
d                    # {'a': 1, 'b': 2}
d['c'] = 3            # Adds 'c': 3
d                    # {'a': 1, 'b': 2, 'c': 3}

Common uses:
• Adding pairs: dict[key] = value
• Building dictionaries: items[key] = data
• Dictionary modification
• Pair addition

Example: If d = {'a': 1} and then d['b'] = 2, the dictionary d becomes {'a': 1, 'b': 2} because assignment with a new key adds that key-value pair to the dictionary.

Key Concepts:
• Dictionary assignment - adding: • d = {'a': 1}; d['b'] = 2; d = {'a': 1, 'b': 2} • Assignment with new key adds pair • d['b'] = 2 creates new key 'b' with value 2 • Modifies dictionary in place • Dictionary changed: {'a': 1} → {'a': 1, 'b': 2} How it works: • d = {'a': 1} creates dictionary • d['b'] = 2 assigns value 2 to key 'b' • Key 'b' doesn't exist, so it's added • Creates new pair: 'b': 2 • Dictionary modified: {'a': 1, 'b': 2} Example: d = {'a': 1} d['b'] = 2 # Adds 'b': 2 d # {'a': 1, 'b': 2} d['c'] = 3 # Adds 'c': 3 d # {'a': 1, 'b': 2, 'c': 3} Common uses: • Adding pairs: dict[key] = value • Building dictionaries: items[key] = data • Dictionary modification • Pair addition Example: If d = {'a': 1} and then d['b'] = 2, the dictionary d becomes {'a': 1, 'b': 2} because assignment with a new key adds that key-value pair to the dictionary.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is d = {'a': 1}; d['a'] = 2; d?`, 
    o: ["{'a': 2}", "{'a': 1}", "Error", "None"], 
    c: 0, 
    e: "Assignment updates existing key.",
    de: `Assignment with square brackets updates an existing key-value pair if the key already exists. If d = {'a': 1} and then d['a'] = 2, the dictionary d becomes {'a': 2} because assignment with an existing key updates that key's value. The old value (1) is replaced with the new value (2). This is how you modify existing pairs in a dictionary.

Dictionary assignment - updating:
• d = {'a': 1}; d['a'] = 2; d = {'a': 2}
• Assignment with existing key updates value
• d['a'] = 2 changes value of key 'a' from 1 to 2
• Modifies dictionary in place
• Dictionary changed: {'a': 1} → {'a': 2}

How it works:
• d = {'a': 1} creates dictionary
• d['a'] = 2 assigns value 2 to key 'a'
• Key 'a' exists, so its value is updated
• Replaces old value: 1 → 2
• Dictionary modified: {'a': 2}

Example:
d = {'a': 1}
d['a'] = 2            # Updates 'a': 1 to 'a': 2
d                    # {'a': 2}
d['a'] = 10           # Updates 'a': 2 to 'a': 10
d                    # {'a': 10}

Common uses:
• Updating values: dict[key] = new_value
• Modifying dictionaries: items[key] = updated_data
• Dictionary modification
• Value updates

Example: If d = {'a': 1} and then d['a'] = 2, the dictionary d becomes {'a': 2} because assignment with an existing key updates that key's value, replacing 1 with 2.

Key Concepts:
• Dictionary assignment - updating: • d = {'a': 1}; d['a'] = 2; d = {'a': 2} • Assignment with existing key updates value • d['a'] = 2 changes value of key 'a' from 1 to 2 • Modifies dictionary in place • Dictionary changed: {'a': 1} → {'a': 2} How it works: • d = {'a': 1} creates dictionary • d['a'] = 2 assigns value 2 to key 'a' • Key 'a' exists, so its value is updated • Replaces old value: 1 → 2 • Dictionary modified: {'a': 2} Example: d = {'a': 1} d['a'] = 2 # Updates 'a': 1 to 'a': 2 d # {'a': 2} d['a'] = 10 # Updates 'a': 2 to 'a': 10 d # {'a': 10} Common uses: • Updating values: dict[key] = new_value • Modifying dictionaries: items[key] = updated_data • Dictionary modification • Value updates Example: If d = {'a': 1} and then d['a'] = 2, the dictionary d becomes {'a': 2} because assignment with an existing key updates that key's value, replacing 1 with 2.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {'a': 1}.update({'b': 2})?`, 
    o: ["None", "{'a': 1, 'b': 2}", "Error", "{'b': 2}"], 
    c: 0, 
    e: "update() modifies dict in place, returns None.",
    de: `The update() method merges another dictionary into the current dictionary and returns None. {'a': 1}.update({'b': 2}) returns None because update() modifies the dictionary in place. After calling update({'b': 2}), the dictionary {'a': 1} becomes {'a': 1, 'b': 2} - the new key-value pairs from the argument dictionary are added to the original dictionary. update() doesn't return the modified dictionary - it returns None.

update() method:
• {'a': 1}.update({'b': 2}) = None (returns None)
• update() merges another dict into current dict
• Modifies dictionary in place
• Returns None (doesn't return new dict)
• Dictionary changed: {'a': 1} → {'a': 1, 'b': 2}

How it works:
• update({'b': 2}) called on {'a': 1}
• Merges {'b': 2} into {'a': 1}
• Adds new key 'b' with value 2
• Modifies original dictionary: {'a': 1, 'b': 2}
• Returns None (no return value)

Example:
d = {'a': 1}
d.update({'b': 2})    # None (returns None)
d                     # {'a': 1, 'b': 2} (modified)
{'a': 1}.update({'b': 2}) # None (returns None)

Common uses:
• Merging dictionaries: dict1.update(dict2)
• Adding multiple pairs: items.update(new_items)
• Dictionary merging
• In-place modification

Example: {'a': 1}.update({'b': 2}) returns None because update() modifies the dictionary in place (changing {'a': 1} to {'a': 1, 'b': 2}), and the method itself returns None rather than returning the modified dictionary.

Key Concepts:
• update() method: • {'a': 1}.update({'b': 2}) = None (returns None) • update() merges another dict into current dict • Modifies dictionary in place • Returns None (doesn't return new dict) • Dictionary changed: {'a': 1} → {'a': 1, 'b': 2} How it works: • update({'b': 2}) called on {'a': 1} • Merges {'b': 2} into {'a': 1} • Adds new key 'b' with value 2 • Modifies original dictionary: {'a': 1, 'b': 2} • Returns None (no return value) Example: d = {'a': 1} d.update({'b': 2}) # None (returns None) d # {'a': 1, 'b': 2} (modified) {'a': 1}.update({'b': 2}) # None (returns None) Common uses: • Merging dictionaries: dict1.update(dict2) • Adding multiple pairs: items.update(new_items) • Dictionary merging • In-place modification Example: {'a': 1}.update({'b': 2}) returns None because update() modifies the dictionary in place (changing {'a': 1} to {'a': 1, 'b': 2}), and the method itself returns None rather than returning the modified dictionary.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is d = {'a': 1}; d.update({'b': 2}); d?`, 
    o: ["{'a': 1, 'b': 2}", "{'a': 1}", "Error", "None"], 
    c: 0, 
    e: "update() adds/updates keys from another dict.",
    de: `The update() method merges key-value pairs from another dictionary into the current dictionary. If d = {'a': 1} and then d.update({'b': 2}), the dictionary d becomes {'a': 1, 'b': 2} because update() adds the key-value pairs from the argument dictionary to the original dictionary. New keys are added, and if keys already exist, their values are updated. update() modifies the dictionary in place.

update() - adding pairs:
• d = {'a': 1}; d.update({'b': 2}); d = {'a': 1, 'b': 2}
• update() merges pairs from argument dict
• Adds new key 'b' with value 2
• Modifies dictionary in place
• Dictionary changed: {'a': 1} → {'a': 1, 'b': 2}

How it works:
• d = {'a': 1} creates dictionary
• d.update({'b': 2}) merges {'b': 2} into d
• Adds new key 'b' with value 2
• Modifies original dictionary: {'a': 1, 'b': 2}
• Returns None (no return value)

Example:
d = {'a': 1}
d.update({'b': 2})    # None (returns None)
d                     # {'a': 1, 'b': 2} (modified)
d.update({'c': 3, 'd': 4}) # Adds multiple pairs
d                     # {'a': 1, 'b': 2, 'c': 3, 'd': 4}

Common uses:
• Merging dictionaries: dict1.update(dict2)
• Adding multiple pairs: items.update(new_items)
• Dictionary combination
• In-place merging

Example: If d = {'a': 1} and then d.update({'b': 2}), the dictionary d becomes {'a': 1, 'b': 2} because update() merges the key-value pairs from {'b': 2} into the original dictionary.

Key Concepts:
• update() - adding pairs: • d = {'a': 1}; d.update({'b': 2}); d = {'a': 1, 'b': 2} • update() merges pairs from argument dict • Adds new key 'b' with value 2 • Modifies dictionary in place • Dictionary changed: {'a': 1} → {'a': 1, 'b': 2} How it works: • d = {'a': 1} creates dictionary • d.update({'b': 2}) merges {'b': 2} into d • Adds new key 'b' with value 2 • Modifies original dictionary: {'a': 1, 'b': 2} • Returns None (no return value) Example: d = {'a': 1} d.update({'b': 2}) # None (returns None) d # {'a': 1, 'b': 2} (modified) d.update({'c': 3, 'd': 4}) # Adds multiple pairs d # {'a': 1, 'b': 2, 'c': 3, 'd': 4} Common uses: • Merging dictionaries: dict1.update(dict2) • Adding multiple pairs: items.update(new_items) • Dictionary combination • In-place merging Example: If d = {'a': 1} and then d.update({'b': 2}), the dictionary d becomes {'a': 1, 'b': 2} because update() merges the key-value pairs from {'b': 2} into the original dictionary.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is d = {'a': 1}; d.update({'a': 2}); d?`, 
    o: ["{'a': 2}", "{'a': 1}", "Error", "None"], 
    c: 0, 
    e: "update() overwrites existing keys.",
    de: `The update() method overwrites existing keys with new values from the argument dictionary. If d = {'a': 1} and then d.update({'a': 2}), the dictionary d becomes {'a': 2} because update() finds that the key 'a' already exists, and it overwrites the existing value (1) with the new value (2) from the argument dictionary. update() both adds new keys and updates existing keys.

update() - overwriting:
• d = {'a': 1}; d.update({'a': 2}); d = {'a': 2}
• update() overwrites existing keys
• Key 'a' exists, value updated: 1 → 2
• Modifies dictionary in place
• Dictionary changed: {'a': 1} → {'a': 2}

How it works:
• d = {'a': 1} creates dictionary
• d.update({'a': 2}) merges {'a': 2} into d
• Key 'a' already exists
• Overwrites existing value: 1 → 2
• Dictionary modified: {'a': 2}

Example:
d = {'a': 1}
d.update({'a': 2})    # None (returns None)
d                     # {'a': 2} (value updated)
d.update({'a': 10, 'b': 20}) # Updates 'a', adds 'b'
d                     # {'a': 10, 'b': 20}

Common uses:
• Updating values: dict.update({key: new_value})
• Merging with overwrite: items.update(updates)
• Dictionary updates
• Value overwriting

Example: If d = {'a': 1} and then d.update({'a': 2}), the dictionary d becomes {'a': 2} because update() overwrites the existing key 'a' with the new value 2 from the argument dictionary.

Key Concepts:
• update() - overwriting: • d = {'a': 1}; d.update({'a': 2}); d = {'a': 2} • update() overwrites existing keys • Key 'a' exists, value updated: 1 → 2 • Modifies dictionary in place • Dictionary changed: {'a': 1} → {'a': 2} How it works: • d = {'a': 1} creates dictionary • d.update({'a': 2}) merges {'a': 2} into d • Key 'a' already exists • Overwrites existing value: 1 → 2 • Dictionary modified: {'a': 2} Example: d = {'a': 1} d.update({'a': 2}) # None (returns None) d # {'a': 2} (value updated) d.update({'a': 10, 'b': 20}) # Updates 'a', adds 'b' d # {'a': 10, 'b': 20} Common uses: • Updating values: dict.update({key: new_value}) • Merging with overwrite: items.update(updates) • Dictionary updates • Value overwriting Example: If d = {'a': 1} and then d.update({'a': 2}), the dictionary d becomes {'a': 2} because update() overwrites the existing key 'a' with the new value 2 from the argument dictionary.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {'a': 1, 'b': 2}.popitem()?`, 
    o: ["('b', 2) or ('a', 1)", "{'a': 1}", "Error", "None"], 
    c: 0, 
    e: "popitem() returns and removes arbitrary key-value pair (LIFO in 3.7+).",
    de: `The popitem() method removes and returns an arbitrary key-value pair from the dictionary as a tuple. {'a': 1, 'b': 2}.popitem() returns ('b', 2) or ('a', 1) because popitem() removes one pair and returns it as a (key, value) tuple. In Python 3.7+, dictionaries maintain insertion order, so popitem() removes and returns the last inserted pair (LIFO - Last In First Out). In earlier versions, popitem() removes an arbitrary pair.

popitem() method:
• {'a': 1, 'b': 2}.popitem() = ('b', 2) or ('a', 1) (returns tuple)
• popitem() removes and returns one pair
• Returns (key, value) tuple
• Modifies dictionary in place
• In Python 3.7+: removes last inserted pair (LIFO)

How it works:
• popitem() called on {'a': 1, 'b': 2}
• Removes one key-value pair
• Returns pair as tuple: (key, value)
• In Python 3.7+: removes last inserted ('b', 2)
• Dictionary modified: {'a': 1} or {'b': 2}

Example:
d = {'a': 1, 'b': 2}
d.popitem()           # ('b', 2) (returns last pair in 3.7+)
d                     # {'a': 1} (pair removed)
d.popitem()           # ('a', 1) (returns last pair)
d                     # {} (empty)

Common uses:
• Removing pairs: key, value = dict.popitem()
• Getting and removing: pair = items.popitem()
• Dictionary cleanup
• LIFO removal

Example: {'a': 1, 'b': 2}.popitem() returns ('b', 2) or ('a', 1) because popitem() removes one key-value pair from the dictionary and returns it as a (key, value) tuple. In Python 3.7+, it removes the last inserted pair (LIFO).

Key Concepts:
• In Python 3.7+, it removes the last inserted pair (LIFO).

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {'a': 1}.popitem()?`, 
    o: ["('a', 1)", "{'a': 1}", "Error", "None"], 
    c: 0, 
    e: "popitem() on single-item dict returns that item.",
    de: `The popitem() method on a single-item dictionary returns that one key-value pair. {'a': 1}.popitem() returns ('a', 1) because popitem() removes the only key-value pair in the dictionary and returns it as a (key, value) tuple. After calling popitem(), the dictionary becomes empty {}. This is useful for removing the last remaining pair from a dictionary.

popitem() on single-item dict:
• {'a': 1}.popitem() = ('a', 1) (returns tuple)
• popitem() removes only pair
• Returns (key, value) tuple
• Modifies dictionary in place
• Dictionary changed: {'a': 1} → {}

How it works:
• popitem() called on {'a': 1}
• Removes the only key-value pair: 'a': 1
• Returns pair as tuple: ('a', 1)
• Dictionary becomes empty: {}
• Returns tuple: ('a', 1)

Example:
d = {'a': 1}
d.popitem()           # ('a', 1) (returns only pair)
d                     # {} (empty)
{'x': 10}.popitem()   # ('x', 10) (returns only pair)

Common uses:
• Removing last pair: key, value = dict.popitem()
• Getting and removing: pair = items.popitem()
• Single-item removal
• Dictionary emptying

Example: {'a': 1}.popitem() returns ('a', 1) because popitem() removes the only key-value pair in the dictionary and returns it as a (key, value) tuple, leaving the dictionary empty.

Key Concepts:
• popitem() on single-item dict: • {'a': 1}.popitem() = ('a', 1) (returns tuple) • popitem() removes only pair • Returns (key, value) tuple • Modifies dictionary in place • Dictionary changed: {'a': 1} → {} How it works: • popitem() called on {'a': 1} • Removes the only key-value pair: 'a': 1 • Returns pair as tuple: ('a', 1) • Dictionary becomes empty: {} • Returns tuple: ('a', 1) Example: d = {'a': 1} d.popitem() # ('a', 1) (returns only pair) d # {} (empty) {'x': 10}.popitem() # ('x', 10) (returns only pair) Common uses: • Removing last pair: key, value = dict.popitem() • Getting and removing: pair = items.popitem() • Single-item removal • Dictionary emptying Example: {'a': 1}.popitem() returns ('a', 1) because popitem() removes the only key-value pair in the dictionary and returns it as a (key, value) tuple, leaving the dictionary empty.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {}.popitem()?`, 
    o: ["KeyError", "None", "()", "Error"], 
    c: 0, 
    e: "popitem() on empty dict raises KeyError.",
    de: `Calling popitem() on an empty dictionary raises a KeyError because there are no key-value pairs to remove. If you try to pop from an empty dictionary like {}.popitem(), Python raises a KeyError with a message indicating that you're trying to pop from an empty dictionary. This is similar to pop() on an empty list - there's nothing to remove, so an error is raised.

popitem() on empty dict:
• {}.popitem() raises KeyError
• Empty dictionary has no pairs to remove
• KeyError indicates invalid operation
• Must check if dict is not empty before popping
• Error message: "popitem(): dictionary is empty"

How it works:
• popitem() called on empty dictionary {}
• Searches for key-value pair to remove
• Finds no pairs (dictionary is empty)
• Raises KeyError
• No pair to return

Example:
{}.popitem()          # KeyError: popitem(): dictionary is empty
d = {}
d.popitem()           # KeyError: popitem(): dictionary is empty
if d:                 # Check first
    d.popitem()       # Safe to pop

Common uses:
• Error handling: try/except for KeyError
• Checking first: if dict: dict.popitem()
• Validating dict not empty
• Safe popping with validation

Example: Calling popitem() on an empty dictionary raises a KeyError because there are no key-value pairs to remove from the dictionary, and Python raises this error to indicate that the operation cannot be performed on an empty dictionary.

Key Concepts:
• popitem() on empty dict: • {}.popitem() raises KeyError • Empty dictionary has no pairs to remove • KeyError indicates invalid operation • Must check if dict is not empty before popping • Error message: "popitem(): dictionary is empty" How it works: • popitem() called on empty dictionary {} • Searches for key-value pair to remove • Finds no pairs (dictionary is empty) • Raises KeyError • No pair to return Example: {}.popitem() # KeyError: popitem(): dictionary is empty d = {} d.popitem() # KeyError: popitem(): dictionary is empty if d: # Check first d.popitem() # Safe to pop Common uses: • Error handling: try/except for KeyError • Checking first: if dict: dict.popitem() • Validating dict not empty • Safe popping with validation Example: Calling popitem() on an empty dictionary raises a KeyError because there are no key-value pairs to remove from the dictionary, and Python raises this error to indicate that the operation cannot be performed on an empty dictionary.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {'a': 1, 'b': 2}.clear()?`, 
    o: ["None", "{}", "{'a': 1, 'b': 2}", "Error"], 
    c: 0, 
    e: "clear() removes all items, returns None.",
    de: `The clear() method removes all key-value pairs from a dictionary and returns None. {'a': 1, 'b': 2}.clear() returns None because clear() modifies the dictionary in place, removing all pairs and leaving an empty dictionary. After calling clear(), the dictionary {'a': 1, 'b': 2} becomes {} - all pairs are removed, but the dictionary object itself still exists. This is different from reassigning to an empty dictionary - clear() modifies the existing object.

clear() method:
• {'a': 1, 'b': 2}.clear() = None (returns None)
• clear() removes all key-value pairs
• Modifies dictionary in place
• Returns None (doesn't return new dict)
• Dictionary changed: {'a': 1, 'b': 2} → {}

How it works:
• clear() called on {'a': 1, 'b': 2}
• Removes all key-value pairs
• Dictionary becomes empty: {}
• Original dictionary object still exists
• Returns None (no return value)

Example:
d = {'a': 1, 'b': 2}
d.clear()            # None (returns None)
d                    # {} (dictionary is now empty)
{'a': 1, 'b': 2}.clear() # None (returns None)

Common uses:
• Clearing dictionary: dict.clear()
• Removing all items: items.clear()
• Resetting dictionary
• In-place modification

Example: {'a': 1, 'b': 2}.clear() returns None because clear() removes all key-value pairs from the dictionary (changing {'a': 1, 'b': 2} to {}), and the method itself returns None rather than returning the empty dictionary.

Key Concepts:
• clear() method: • {'a': 1, 'b': 2}.clear() = None (returns None) • clear() removes all key-value pairs • Modifies dictionary in place • Returns None (doesn't return new dict) • Dictionary changed: {'a': 1, 'b': 2} → {} How it works: • clear() called on {'a': 1, 'b': 2} • Removes all key-value pairs • Dictionary becomes empty: {} • Original dictionary object still exists • Returns None (no return value) Example: d = {'a': 1, 'b': 2} d.clear() # None (returns None) d # {} (dictionary is now empty) {'a': 1, 'b': 2}.clear() # None (returns None) Common uses: • Clearing dictionary: dict.clear() • Removing all items: items.clear() • Resetting dictionary • In-place modification Example: {'a': 1, 'b': 2}.clear() returns None because clear() removes all key-value pairs from the dictionary (changing {'a': 1, 'b': 2} to {}), and the method itself returns None rather than returning the empty dictionary.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is d = {'a': 1}; d.clear(); d?`, 
    o: ["{}", "{'a': 1}", "Error", "None"], 
    c: 0, 
    e: "clear() empties the dictionary.",
    de: `The clear() method empties a dictionary by removing all key-value pairs. If d = {'a': 1} and then d.clear(), the dictionary d becomes {} because clear() removes all pairs from the dictionary. The dictionary object itself still exists, but it contains no pairs. This is different from reassigning d = {} - clear() modifies the existing object, while reassignment creates a new object (which matters if other variables reference the same dictionary).

clear() empties dictionary:
• d = {'a': 1}; d.clear(); d = {}
• clear() removes all pairs
• Dictionary becomes empty
• Original object still exists
• All pairs removed

How it works:
• d = {'a': 1} creates dictionary
• d.clear() removes all pairs
• Dictionary becomes empty: {}
• Original dictionary object unchanged (just emptied)
• Returns None (no return value)

Example:
d = {'a': 1}
d.clear()            # None (returns None)
d                    # {} (empty)
a = {'x': 1, 'y': 2}
b = a                # b references same dict as a
a.clear()            # Clears both a and b
b                    # {} (also empty, same object)

Common uses:
• Clearing dictionary: dict.clear()
• Removing all items: items.clear()
• Resetting dictionary
• In-place emptying

Example: If d = {'a': 1} and then d.clear(), the dictionary d becomes {} because clear() removes all key-value pairs from the dictionary, leaving it empty.

Key Concepts:
• clear() empties dictionary: • d = {'a': 1}; d.clear(); d = {} • clear() removes all pairs • Dictionary becomes empty • Original object still exists • All pairs removed How it works: • d = {'a': 1} creates dictionary • d.clear() removes all pairs • Dictionary becomes empty: {} • Original dictionary object unchanged (just emptied) • Returns None (no return value) Example: d = {'a': 1} d.clear() # None (returns None) d # {} (empty) a = {'x': 1, 'y': 2} b = a # b references same dict as a a.clear() # Clears both a and b b # {} (also empty, same object) Common uses: • Clearing dictionary: dict.clear() • Removing all items: items.clear() • Resetting dictionary • In-place emptying Example: If d = {'a': 1} and then d.clear(), the dictionary d becomes {} because clear() removes all key-value pairs from the dictionary, leaving it empty.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  
  // 41-50: Dictionary Copying and Merging
  (_i: number) => ({ 
    q: `What is {'a': 1, 'b': 2}.copy()?`, 
    o: ["{'a': 1, 'b': 2}", "{'a': 1}", "None", "Error"], 
    c: 0, 
    e: "copy() creates shallow copy.",
    de: `The copy() method creates a shallow copy of a dictionary and returns it. {'a': 1, 'b': 2}.copy() returns {'a': 1, 'b': 2} because copy() creates a new dictionary object with the same key-value pairs. A shallow copy means the outer dictionary is copied, but if the dictionary contains nested objects (like lists or other dictionaries), those nested objects are not copied - they are shared between the original and the copy. For flat dictionaries (no nesting), shallow copy creates a completely independent dictionary.

copy() method:
• {'a': 1, 'b': 2}.copy() = {'a': 1, 'b': 2} (new dict)
• copy() creates shallow copy
• Creates new dictionary object
• Key-value pairs are copied (not shared)
• Returns new dictionary

How it works:
• copy() called on {'a': 1, 'b': 2}
• Creates new dictionary object
• Copies key-value pairs to new dictionary: {'a': 1, 'b': 2}
• New dictionary is independent of original
• Returns new dictionary: {'a': 1, 'b': 2}

Example:
a = {'a': 1, 'b': 2}
b = a.copy()         # {'a': 1, 'b': 2} (new dict)
b['c'] = 3           # b = {'a': 1, 'b': 2, 'c': 3}
a                    # {'a': 1, 'b': 2} (unchanged)

Common uses:
• Creating copies: new_dict = dict.copy()
• Independent dictionaries: copy = items.copy()
• Shallow copying
• Copy creation

Example: {'a': 1, 'b': 2}.copy() returns {'a': 1, 'b': 2} because copy() creates a new dictionary object with the same key-value pairs, resulting in a shallow copy of the original dictionary.

Key Concepts:
• copy() method: • {'a': 1, 'b': 2}.copy() = {'a': 1, 'b': 2} (new dict) • copy() creates shallow copy • Creates new dictionary object • Key-value pairs are copied (not shared) • Returns new dictionary How it works: • copy() called on {'a': 1, 'b': 2} • Creates new dictionary object • Copies key-value pairs to new dictionary: {'a': 1, 'b': 2} • New dictionary is independent of original • Returns new dictionary: {'a': 1, 'b': 2} Example: a = {'a': 1, 'b': 2} b = a.copy() # {'a': 1, 'b': 2} (new dict) b['c'] = 3 # b = {'a': 1, 'b': 2, 'c': 3} a # {'a': 1, 'b': 2} (unchanged) Common uses: • Creating copies: new_dict = dict.copy() • Independent dictionaries: copy = items.copy() • Shallow copying • Copy creation Example: {'a': 1, 'b': 2}.copy() returns {'a': 1, 'b': 2} because copy() creates a new dictionary object with the same key-value pairs, resulting in a shallow copy of the original dictionary.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is dict({'a': 1, 'b': 2})?`, 
    o: ["{'a': 1, 'b': 2}", "{'a': 1}", "None", "Error"], 
    c: 0, 
    e: "dict() constructor creates shallow copy.",
    de: `The dict() constructor creates a shallow copy when called with a dictionary as an argument. dict({'a': 1, 'b': 2}) returns {'a': 1, 'b': 2} because dict() takes the dictionary {'a': 1, 'b': 2} and creates a new dictionary object with the same key-value pairs. This is essentially the same as using copy() - it creates a shallow copy where the outer dictionary is new, but nested objects (if any) are shared. For flat dictionaries, this creates a completely independent dictionary.

dict() constructor:
• dict({'a': 1, 'b': 2}) = {'a': 1, 'b': 2} (new dict)
• dict() creates shallow copy
• Creates new dictionary object
• Key-value pairs are copied (not shared)
• Returns new dictionary

How it works:
• dict() called with {'a': 1, 'b': 2}
• Creates new dictionary object
• Copies key-value pairs to new dictionary: {'a': 1, 'b': 2}
• New dictionary is independent of original
• Returns new dictionary: {'a': 1, 'b': 2}

Example:
a = {'a': 1, 'b': 2}
b = dict(a)          # {'a': 1, 'b': 2} (new dict)
b['c'] = 3           # b = {'a': 1, 'b': 2, 'c': 3}
a                    # {'a': 1, 'b': 2} (unchanged)

Common uses:
• Creating copies: new_dict = dict(old_dict)
• Shallow copying: copy = dict(original)
• Dictionary construction
• Copy creation

Example: dict({'a': 1, 'b': 2}) returns {'a': 1, 'b': 2} because dict() creates a new dictionary object with the same key-value pairs, resulting in a shallow copy of the original dictionary.

Key Concepts:
• dict() constructor: • dict({'a': 1, 'b': 2}) = {'a': 1, 'b': 2} (new dict) • dict() creates shallow copy • Creates new dictionary object • Key-value pairs are copied (not shared) • Returns new dictionary How it works: • dict() called with {'a': 1, 'b': 2} • Creates new dictionary object • Copies key-value pairs to new dictionary: {'a': 1, 'b': 2} • New dictionary is independent of original • Returns new dictionary: {'a': 1, 'b': 2} Example: a = {'a': 1, 'b': 2} b = dict(a) # {'a': 1, 'b': 2} (new dict) b['c'] = 3 # b = {'a': 1, 'b': 2, 'c': 3} a # {'a': 1, 'b': 2} (unchanged) Common uses: • Creating copies: new_dict = dict(old_dict) • Shallow copying: copy = dict(original) • Dictionary construction • Copy creation Example: dict({'a': 1, 'b': 2}) returns {'a': 1, 'b': 2} because dict() creates a new dictionary object with the same key-value pairs, resulting in a shallow copy of the original dictionary.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {**{'a': 1}, **{'b': 2}}?`, 
    o: ["{'a': 1, 'b': 2}", "{'a': 1}", "Error", "None"], 
    c: 0, 
    e: "** unpacks dictionaries, merges them.",
    de: `The ** operator unpacks dictionaries and merges them into a new dictionary. {**{'a': 1}, **{'b': 2}} returns {'a': 1, 'b': 2} because ** unpacks each dictionary, spreading its key-value pairs into the new dictionary literal. The first **{'a': 1} unpacks to 'a': 1, and the second **{'b': 2} unpacks to 'b': 2, resulting in {'a': 1, 'b': 2}. This is a concise way to merge dictionaries in Python 3.5+.

** unpacking for merging:
• {**{'a': 1}, **{'b': 2}} = {'a': 1, 'b': 2}
• ** unpacks dictionary key-value pairs
• First dict unpacks: 'a': 1
• Second dict unpacks: 'b': 2
• Merges into new dictionary: {'a': 1, 'b': 2}

How it works:
• {**{'a': 1}, **{'b': 2}} creates new dictionary
• **{'a': 1} unpacks to 'a': 1
• **{'b': 2} unpacks to 'b': 2
• Combines pairs: {'a': 1, 'b': 2}
• Returns new merged dictionary

Example:
{**{'a': 1}, **{'b': 2}}        # {'a': 1, 'b': 2}
{**{'x': 10}, **{'y': 20}}      # {'x': 10, 'y': 20}
{**{'a': 1}, **{'b': 2}, **{'c': 3}} # {'a': 1, 'b': 2, 'c': 3}

Common uses:
• Merging dictionaries: merged = {**dict1, **dict2}
• Combining dicts: combined = {**a, **b, **c}
• Dictionary merging
• Unpacking dictionaries

Example: {**{'a': 1}, **{'b': 2}} returns {'a': 1, 'b': 2} because ** unpacks each dictionary, spreading their key-value pairs into a new dictionary literal, effectively merging them.

Key Concepts:
• ** unpacking for merging: • {**{'a': 1}, **{'b': 2}} = {'a': 1, 'b': 2} • ** unpacks dictionary key-value pairs • First dict unpacks: 'a': 1 • Second dict unpacks: 'b': 2 • Merges into new dictionary: {'a': 1, 'b': 2} How it works: • {**{'a': 1}, **{'b': 2}} creates new dictionary • **{'a': 1} unpacks to 'a': 1 • **{'b': 2} unpacks to 'b': 2 • Combines pairs: {'a': 1, 'b': 2} • Returns new merged dictionary Example: {**{'a': 1}, **{'b': 2}} # {'a': 1, 'b': 2} {**{'x': 10}, **{'y': 20}} # {'x': 10, 'y': 20} {**{'a': 1}, **{'b': 2}, **{'c': 3}} # {'a': 1, 'b': 2, 'c': 3} Common uses: • Merging dictionaries: merged = {**dict1, **dict2} • Combining dicts: combined = {**a, **b, **c} • Dictionary merging • Unpacking dictionaries Example: {**{'a': 1}, **{'b': 2}} returns {'a': 1, 'b': 2} because ** unpacks each dictionary, spreading their key-value pairs into a new dictionary literal, effectively merging them.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {**{'a': 1}, **{'a': 2}}?`, 
    o: ["{'a': 2}", "{'a': 1}", "Error", "None"], 
    c: 0, 
    e: "Later dict overwrites earlier keys when unpacking.",
    de: `When unpacking dictionaries with overlapping keys, later dictionaries overwrite earlier ones. {**{'a': 1}, **{'a': 2}} returns {'a': 2} because the first **{'a': 1} sets 'a': 1, but then the second **{'a': 2} overwrites it with 'a': 2. The order matters - dictionaries unpacked later take precedence over dictionaries unpacked earlier when there are key conflicts. This is useful for merging dictionaries where you want later values to override earlier ones.

** unpacking with conflicts:
• {**{'a': 1}, **{'a': 2}} = {'a': 2}
• First dict unpacks: 'a': 1
• Second dict unpacks: 'a': 2
• Later dict overwrites earlier: 'a': 2 wins
• Result: {'a': 2}

How it works:
• {**{'a': 1}, **{'a': 2}} creates new dictionary
• **{'a': 1} unpacks to 'a': 1
• **{'a': 2} unpacks to 'a': 2
• Second overwrites first: 'a': 2
• Returns: {'a': 2}

Example:
{**{'a': 1}, **{'a': 2}}        # {'a': 2} (later wins)
{**{'x': 10}, **{'x': 20}}     # {'x': 20} (later wins)
{**{'a': 1, 'b': 2}, **{'a': 3}} # {'a': 3, 'b': 2} (later overwrites)

Common uses:
• Merging with overwrite: merged = {**base, **updates}
• Updating values: combined = {**old, **new}
• Dictionary updates
• Override behavior

Example: {**{'a': 1}, **{'a': 2}} returns {'a': 2} because when unpacking dictionaries with the same key, the later dictionary overwrites the earlier one, so 'a': 2 takes precedence over 'a': 1.

Key Concepts:
• ** unpacking with conflicts: • {**{'a': 1}, **{'a': 2}} = {'a': 2} • First dict unpacks: 'a': 1 • Second dict unpacks: 'a': 2 • Later dict overwrites earlier: 'a': 2 wins • Result: {'a': 2} How it works: • {**{'a': 1}, **{'a': 2}} creates new dictionary • **{'a': 1} unpacks to 'a': 1 • **{'a': 2} unpacks to 'a': 2 • Second overwrites first: 'a': 2 • Returns: {'a': 2} Example: {**{'a': 1}, **{'a': 2}} # {'a': 2} (later wins) {**{'x': 10}, **{'x': 20}} # {'x': 20} (later wins) {**{'a': 1, 'b': 2}, **{'a': 3}} # {'a': 3, 'b': 2} (later overwrites) Common uses: • Merging with overwrite: merged = {**base, **updates} • Updating values: combined = {**old, **new} • Dictionary updates • Override behavior Example: {**{'a': 1}, **{'a': 2}} returns {'a': 2} because when unpacking dictionaries with the same key, the later dictionary overwrites the earlier one, so 'a': 2 takes precedence over 'a': 1.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {'a': 1} | {'b': 2}?`, 
    o: ["{'a': 1, 'b': 2}", "{'a': 1}", "Error", "None"], 
    c: 0, 
    e: "| operator merges dictionaries (Python 3.9+).",
    de: `The | operator merges two dictionaries and returns a new dictionary (Python 3.9+). {'a': 1} | {'b': 2} returns {'a': 1, 'b': 2} because | combines the key-value pairs from both dictionaries into a new dictionary. The | operator creates a new dictionary object - it doesn't modify the original dictionaries. This is a clean, readable way to merge dictionaries introduced in Python 3.9.

| operator for merging:
• {'a': 1} | {'b': 2} = {'a': 1, 'b': 2}
• | operator merges dictionaries
• Creates new dictionary object
• Combines key-value pairs from both
• Returns new merged dictionary

How it works:
• {'a': 1} | {'b': 2} merges two dictionaries
• Takes pairs from left: 'a': 1
• Takes pairs from right: 'b': 2
• Combines into new dict: {'a': 1, 'b': 2}
• Returns new dictionary (originals unchanged)

Example:
{'a': 1} | {'b': 2}           # {'a': 1, 'b': 2}
{'x': 10} | {'y': 20}         # {'x': 10, 'y': 20}
{'a': 1, 'b': 2} | {'c': 3}   # {'a': 1, 'b': 2, 'c': 3}

Common uses:
• Merging dictionaries: merged = dict1 | dict2
• Combining dicts: combined = a | b | c
• Dictionary merging
• Clean merge syntax

Example: {'a': 1} | {'b': 2} returns {'a': 1, 'b': 2} because the | operator merges the key-value pairs from both dictionaries into a new dictionary (Python 3.9+).

Key Concepts:
• | operator for merging: • {'a': 1} | {'b': 2} = {'a': 1, 'b': 2} • | operator merges dictionaries • Creates new dictionary object • Combines key-value pairs from both • Returns new merged dictionary How it works: • {'a': 1} | {'b': 2} merges two dictionaries • Takes pairs from left: 'a': 1 • Takes pairs from right: 'b': 2 • Combines into new dict: {'a': 1, 'b': 2} • Returns new dictionary (originals unchanged) Example: {'a': 1} | {'b': 2} # {'a': 1, 'b': 2} {'x': 10} | {'y': 20} # {'x': 10, 'y': 20} {'a': 1, 'b': 2} | {'c': 3} # {'a': 1, 'b': 2, 'c': 3} Common uses: • Merging dictionaries: merged = dict1 | dict2 • Combining dicts: combined = a | b | c • Dictionary merging • Clean merge syntax Example: {'a': 1} | {'b': 2} returns {'a': 1, 'b': 2} because the | operator merges the key-value pairs from both dictionaries into a new dictionary (Python 3.9+).

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {'a': 1} | {'a': 2}?`, 
    o: ["{'a': 2}", "{'a': 1}", "Error", "None"], 
    c: 0, 
    e: "| operator overwrites with right dict values.",
    de: `When using the | operator with overlapping keys, the right dictionary's values overwrite the left dictionary's values. {'a': 1} | {'a': 2} returns {'a': 2} because the | operator takes the key 'a' from the right dictionary (value 2) and overwrites the value from the left dictionary (value 1). The right dictionary takes precedence when there are key conflicts. This is useful for updating dictionaries where you want the right-hand values to override the left-hand values.

| operator with conflicts:
• {'a': 1} | {'a': 2} = {'a': 2}
• | operator merges dictionaries
• Key 'a' exists in both
• Right dict overwrites left: 'a': 2 wins
• Result: {'a': 2}

How it works:
• {'a': 1} | {'a': 2} merges two dictionaries
• Left dict has: 'a': 1
• Right dict has: 'a': 2
• Right overwrites left: 'a': 2
• Returns: {'a': 2}

Example:
{'a': 1} | {'a': 2}           # {'a': 2} (right wins)
{'x': 10} | {'x': 20}         # {'x': 20} (right wins)
{'a': 1, 'b': 2} | {'a': 3}   # {'a': 3, 'b': 2} (right overwrites)

Common uses:
• Merging with overwrite: merged = base | updates
• Updating values: combined = old | new
• Dictionary updates
• Override behavior

Example: {'a': 1} | {'a': 2} returns {'a': 2} because the | operator overwrites values from the left dictionary with values from the right dictionary when there are key conflicts, so 'a': 2 takes precedence.

Key Concepts:
• | operator with conflicts: • {'a': 1} | {'a': 2} = {'a': 2} • | operator merges dictionaries • Key 'a' exists in both • Right dict overwrites left: 'a': 2 wins • Result: {'a': 2} How it works: • {'a': 1} | {'a': 2} merges two dictionaries • Left dict has: 'a': 1 • Right dict has: 'a': 2 • Right overwrites left: 'a': 2 • Returns: {'a': 2} Example: {'a': 1} | {'a': 2} # {'a': 2} (right wins) {'x': 10} | {'x': 20} # {'x': 20} (right wins) {'a': 1, 'b': 2} | {'a': 3} # {'a': 3, 'b': 2} (right overwrites) Common uses: • Merging with overwrite: merged = base | updates • Updating values: combined = old | new • Dictionary updates • Override behavior Example: {'a': 1} | {'a': 2} returns {'a': 2} because the | operator overwrites values from the left dictionary with values from the right dictionary when there are key conflicts, so 'a': 2 takes precedence.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is d = {'a': 1}; d |= {'b': 2}; d?`, 
    o: ["{'a': 1, 'b': 2}", "{'a': 1}", "Error", "None"], 
    c: 0, 
    e: "|= updates dict in place (Python 3.9+).",
    de: `The |= operator updates a dictionary in place by merging another dictionary into it (Python 3.9+). If d = {'a': 1} and then d |= {'b': 2}, the dictionary d becomes {'a': 1, 'b': 2} because |= merges the key-value pairs from {'b': 2} into the existing dictionary d. Unlike | which creates a new dictionary, |= modifies the existing dictionary in place. This is similar to update() but with a more concise syntax.

|= operator (in-place update):
• d = {'a': 1}; d |= {'b': 2}; d = {'a': 1, 'b': 2}
• |= updates dictionary in place
• Merges right dict into left dict
• Modifies existing dictionary
• Returns None (but modifies d)

How it works:
• d = {'a': 1} creates dictionary
• d |= {'b': 2} merges {'b': 2} into d
• Adds new key 'b' with value 2
• Modifies original dictionary: {'a': 1, 'b': 2}
• Returns None (but d is modified)

Example:
d = {'a': 1}
d |= {'b': 2}         # None (returns None)
d                     # {'a': 1, 'b': 2} (modified)
d |= {'c': 3}         # Adds 'c': 3
d                     # {'a': 1, 'b': 2, 'c': 3}

Common uses:
• In-place merging: dict1 |= dict2
• Updating dictionaries: items |= updates
• Dictionary modification
• Concise update syntax

Example: If d = {'a': 1} and then d |= {'b': 2}, the dictionary d becomes {'a': 1, 'b': 2} because |= merges the key-value pairs from {'b': 2} into the existing dictionary d, modifying it in place (Python 3.9+).

Key Concepts:
• |= operator (in-place update): • d = {'a': 1}; d |= {'b': 2}; d = {'a': 1, 'b': 2} • |= updates dictionary in place • Merges right dict into left dict • Modifies existing dictionary • Returns None (but modifies d) How it works: • d = {'a': 1} creates dictionary • d |= {'b': 2} merges {'b': 2} into d • Adds new key 'b' with value 2 • Modifies original dictionary: {'a': 1, 'b': 2} • Returns None (but d is modified) Example: d = {'a': 1} d |= {'b': 2} # None (returns None) d # {'a': 1, 'b': 2} (modified) d |= {'c': 3} # Adds 'c': 3 d # {'a': 1, 'b': 2, 'c': 3} Common uses: • In-place merging: dict1 |= dict2 • Updating dictionaries: items |= updates • Dictionary modification • Concise update syntax Example: If d = {'a': 1} and then d |= {'b': 2}, the dictionary d becomes {'a': 1, 'b': 2} because |= merges the key-value pairs from {'b': 2} into the existing dictionary d, modifying it in place (Python 3.9+).

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is the difference between | and |= for dicts?`, 
    o: ["| creates new dict, |= modifies in place", "No difference", "|= is faster", "| is deprecated"], 
    c: 0, 
    e: "| creates new dict, |= modifies existing.",
    de: `The key difference between | and |= is whether they modify the existing dictionary or create a new one. | creates a new dictionary by merging two dictionaries, leaving the originals unchanged. |= modifies the left dictionary in place by merging the right dictionary into it. | is for creating new dictionaries, while |= is for updating existing dictionaries. Both merge dictionaries, but | is non-destructive (creates new) while |= is destructive (modifies existing).

| vs |=:
• | creates new dictionary (non-destructive)
• |= modifies existing dictionary (destructive)
• | returns new dict, originals unchanged
• |= returns None, modifies left dict
• Both merge dictionaries

How it works:
• d1 | d2: creates new dict, d1 and d2 unchanged
• d1 |= d2: modifies d1, merges d2 into d1
• | is for creating new merged dicts
• |= is for updating existing dicts
• Choose based on whether you want to modify original

Example:
a = {'a': 1}
b = {'b': 2}
c = a | b            # {'a': 1, 'b': 2} (new dict)
a                    # {'a': 1} (unchanged)
a |= b               # None (returns None)
a                    # {'a': 1, 'b': 2} (modified)

Common uses:
• |: creating new merged dicts: merged = dict1 | dict2
• |=: updating existing dicts: dict1 |= dict2
• Choose based on whether to modify original
• Important distinction for dictionary behavior

Example: The difference is | creates a new dictionary by merging two dictionaries (e.g., {'a': 1} | {'b': 2} returns {'a': 1, 'b': 2} without modifying originals), while |= modifies the left dictionary in place (e.g., d |= {'b': 2} modifies d to include {'b': 2}).

Key Concepts:
• | vs |=: • | creates new dictionary (non-destructive) • |= modifies existing dictionary (destructive) • | returns new dict, originals unchanged • |= returns None, modifies left dict • Both merge dictionaries How it works: • d1 | d2: creates new dict, d1 and d2 unchanged • d1 |= d2: modifies d1, merges d2 into d1 • | is for creating new merged dicts • |= is for updating existing dicts • Choose based on whether you want to modify original Example: a = {'a': 1} b = {'b': 2} c = a | b # {'a': 1, 'b': 2} (new dict) a # {'a': 1} (unchanged) a |= b # None (returns None) a # {'a': 1, 'b': 2} (modified) Common uses: • |: creating new merged dicts: merged = dict1 | dict2 • |=: updating existing dicts: dict1 |= dict2 • Choose based on whether to modify original • Important distinction for dictionary behavior Example: The difference is | creates a new dictionary by merging two dictionaries (e.g., {'a': 1} | {'b': 2} returns {'a': 1, 'b': 2} without modifying originals), while |= modifies the left dictionary in place (e.g., d |= {'b': 2} modifies d to include {'b': 2}).

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is a = {'a': [1]}; b = a.copy(); b['a'].append(2); a?`, 
    o: ["{'a': [1, 2]}", "{'a': [1]}", "Error", "None"], 
    c: 0, 
    e: "Shallow copy shares nested objects.",
    de: `A shallow copy shares nested objects between the original and the copy. If a = {'a': [1]} and b = a.copy(), then b['a'].append(2) causes a to become {'a': [1, 2]} because copy() creates a shallow copy - the outer dictionary is new, but the nested list [1] is shared between a and b. When you modify the nested list through b, you're modifying the same list object that a also references. This is why shallow copies can be problematic with nested mutable objects.

Shallow copy with nesting:
• a = {'a': [1]}; b = a.copy(); b['a'].append(2); a = {'a': [1, 2]}
• copy() creates shallow copy
• Outer dict is new, nested list is shared
• Modifying nested list affects both dicts
• Shallow copy shares nested objects

How it works:
• a = {'a': [1]} creates dict with nested list
• b = a.copy() creates new dict but shares list
• b['a'].append(2) modifies shared list
• Both a and b reference same list object
• a becomes {'a': [1, 2]} (list modified)

Example:
a = {'a': [1]}
b = a.copy()         # b = {'a': [1]} (new dict, shared list)
b['a'].append(2)     # Modifies shared list
a                    # {'a': [1, 2]} (list modified)
b                    # {'a': [1, 2]} (same list)

Common uses:
• Understanding shallow copy limitations
• When to use deep copy: import copy; b = copy.deepcopy(a)
• Nested object behavior
• Copy behavior awareness

Example: If a = {'a': [1]} and b = a.copy(), then b['a'].append(2) causes a to become {'a': [1, 2]} because copy() creates a shallow copy where the nested list [1] is shared between both dictionaries, so modifying it through one affects the other.

Key Concepts:
• Shallow copy with nesting: • a = {'a': [1]}; b = a.copy(); b['a'].append(2); a = {'a': [1, 2]} • copy() creates shallow copy • Outer dict is new, nested list is shared • Modifying nested list affects both dicts • Shallow copy shares nested objects How it works: • a = {'a': [1]} creates dict with nested list • b = a.copy() creates new dict but shares list • b['a'].append(2) modifies shared list • Both a and b reference same list object • a becomes {'a': [1, 2]} (list modified) Example: a = {'a': [1]} b = a.copy() # b = {'a': [1]} (new dict, shared list) b['a'].append(2) # Modifies shared list a # {'a': [1, 2]} (list modified) b # {'a': [1, 2]} (same list) Common uses: • Understanding shallow copy limitations • When to use deep copy: import copy; b = copy.deepcopy(a) • Nested object behavior • Copy behavior awareness Example: If a = {'a': [1]} and b = a.copy(), then b['a'].append(2) causes a to become {'a': [1, 2]} because copy() creates a shallow copy where the nested list [1] is shared between both dictionaries, so modifying it through one affects the other.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is import copy; copy.deepcopy({'a': [1]})?`, 
    o: ["{'a': [1]} (deep copy)", "{'a': [1]} (shallow copy)", "Error", "None"], 
    c: 0, 
    e: "deepcopy() creates independent nested objects.",
    de: `The deepcopy() function from the copy module creates a deep copy where nested objects are also copied, making them independent. copy.deepcopy({'a': [1]}) returns {'a': [1]} where the nested list [1] is a new, independent list object. Unlike shallow copy, deep copy recursively copies all nested objects, so modifications to nested objects in the copy don't affect the original. This is the solution to the shallow copy problem with nested mutable objects.

deepcopy() function:
• copy.deepcopy({'a': [1]}) = {'a': [1]} (deep copy)
• deepcopy() creates deep copy
• Recursively copies all nested objects
• Nested objects are independent
• No shared references

How it works:
• copy.deepcopy({'a': [1]}) creates deep copy
• Copies outer dictionary
• Recursively copies nested list [1]
• Creates new list object (not shared)
• Returns independent copy: {'a': [1]}

Example:
import copy
a = {'a': [1]}
b = copy.deepcopy(a) # b = {'a': [1]} (deep copy)
b['a'].append(2)     # Modifies b's list
a                    # {'a': [1]} (unchanged, independent)
b                    # {'a': [1, 2]} (modified)

Common uses:
• Creating independent copies: copy = copy.deepcopy(original)
• Avoiding shared references: deep = copy.deepcopy(nested)
• Deep copying
• Independent nested objects

Example: copy.deepcopy({'a': [1]}) returns {'a': [1]} where the nested list [1] is a new, independent list object because deepcopy() recursively copies all nested objects, making them completely independent of the original.

Key Concepts:
• deepcopy() function: • copy.deepcopy({'a': [1]}) = {'a': [1]} (deep copy) • deepcopy() creates deep copy • Recursively copies all nested objects • Nested objects are independent • No shared references How it works: • copy.deepcopy({'a': [1]}) creates deep copy • Copies outer dictionary • Recursively copies nested list [1] • Creates new list object (not shared) • Returns independent copy: {'a': [1]} Example: import copy a = {'a': [1]} b = copy.deepcopy(a) # b = {'a': [1]} (deep copy) b['a'].append(2) # Modifies b's list a # {'a': [1]} (unchanged, independent) b # {'a': [1, 2]} (modified) Common uses: • Creating independent copies: copy = copy.deepcopy(original) • Avoiding shared references: deep = copy.deepcopy(nested) • Deep copying • Independent nested objects Example: copy.deepcopy({'a': [1]}) returns {'a': [1]} where the nested list [1] is a new, independent list object because deepcopy() recursively copies all nested objects, making them completely independent of the original.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  
  // 51-60: Dictionary Comprehensions
  (_i: number) => ({ 
    q: `What is {x: x*2 for x in [1, 2, 3]}?`, 
    o: ["{1: 2, 2: 4, 3: 6}", "{1, 2, 3}", "Error", "None"], 
    c: 0, 
    e: "Dictionary comprehension creates dict from iterable.",
    de: `A dictionary comprehension creates a dictionary from an iterable using a concise syntax. {x: x*2 for x in [1, 2, 3]} returns {1: 2, 2: 4, 3: 6} because the comprehension iterates through [1, 2, 3], and for each element x, it creates a key-value pair where the key is x and the value is x*2. Dictionary comprehensions follow the pattern {key: value for item in iterable}, creating a new dictionary efficiently.

Dictionary comprehension:
• {x: x*2 for x in [1, 2, 3]} = {1: 2, 2: 4, 3: 6}
• Comprehension syntax: {key: value for item in iterable}
• Iterates through [1, 2, 3]
• For each x: creates pair x: x*2
• Returns new dictionary

How it works:
• Comprehension iterates: x = 1, 2, 3
• For x = 1: creates pair 1: 1*2 = 1: 2
• For x = 2: creates pair 2: 2*2 = 2: 4
• For x = 3: creates pair 3: 3*2 = 3: 6
• Returns: {1: 2, 2: 4, 3: 6}

Example:
{x: x*2 for x in [1, 2, 3]}        # {1: 2, 2: 4, 3: 6}
{x: x**2 for x in [1, 2, 3]}       # {1: 1, 2: 4, 3: 9}
{x: len(x) for x in ['a', 'ab', 'abc']} # {'a': 1, 'ab': 2, 'abc': 3}

Common uses:
• Creating dictionaries: dict = {k: v for k, v in pairs}
• Transforming data: mapping = {x: transform(x) for x in items}
• Dictionary creation
• Efficient dict construction

Example: {x: x*2 for x in [1, 2, 3]} returns {1: 2, 2: 4, 3: 6} because the dictionary comprehension iterates through [1, 2, 3] and creates key-value pairs where each key is x and each value is x*2.

Key Concepts:
• Dictionary comprehension: • {x: x*2 for x in [1, 2, 3]} = {1: 2, 2: 4, 3: 6} • Comprehension syntax: {key: value for item in iterable} • Iterates through [1, 2, 3] • For each x: creates pair x: x*2 • Returns new dictionary How it works: • Comprehension iterates: x = 1, 2, 3 • For x = 1: creates pair 1: 1*2 = 1: 2 • For x = 2: creates pair 2: 2*2 = 2: 4 • For x = 3: creates pair 3: 3*2 = 3: 6 • Returns: {1: 2, 2: 4, 3: 6} Example: {x: x*2 for x in [1, 2, 3]} # {1: 2, 2: 4, 3: 6} {x: x**2 for x in [1, 2, 3]} # {1: 1, 2: 4, 3: 9} {x: len(x) for x in ['a', 'ab', 'abc']} # {'a': 1, 'ab': 2, 'abc': 3} Common uses: • Creating dictionaries: dict = {k: v for k, v in pairs} • Transforming data: mapping = {x: transform(x) for x in items} • Dictionary creation • Efficient dict construction Example: {x: x*2 for x in [1, 2, 3]} returns {1: 2, 2: 4, 3: 6} because the dictionary comprehension iterates through [1, 2, 3] and creates key-value pairs where each key is x and each value is x*2.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {x: x**2 for x in range(3)}?`, 
    o: ["{0: 0, 1: 1, 2: 4}", "{0, 1, 2}", "Error", "None"], 
    c: 0, 
    e: "Dictionary comprehension with range.",
    de: `Dictionary comprehensions work with any iterable, including range(). {x: x**2 for x in range(3)} returns {0: 0, 1: 1, 2: 4} because range(3) generates 0, 1, 2, and the comprehension creates key-value pairs where each key is x and each value is x**2 (x squared). range() is commonly used in comprehensions to generate sequences of numbers.

Dictionary comprehension with range:
• {x: x**2 for x in range(3)} = {0: 0, 1: 1, 2: 4}
• range(3) generates: 0, 1, 2
• For each x: creates pair x: x**2
• Returns new dictionary
• Works with any iterable

How it works:
• range(3) generates: 0, 1, 2
• For x = 0: creates pair 0: 0**2 = 0: 0
• For x = 1: creates pair 1: 1**2 = 1: 1
• For x = 2: creates pair 2: 2**2 = 2: 4
• Returns: {0: 0, 1: 1, 2: 4}

Example:
{x: x**2 for x in range(3)}        # {0: 0, 1: 1, 2: 4}
{x: x*10 for x in range(5)}        # {0: 0, 1: 10, 2: 20, 3: 30, 4: 40}
{x: chr(65+x) for x in range(3)}   # {0: 'A', 1: 'B', 2: 'C'}

Common uses:
• Number sequences: dict = {x: f(x) for x in range(n)}
• Generating mappings: mapping = {i: value for i in range(n)}
• Range-based dictionaries
• Sequential dict creation

Example: {x: x**2 for x in range(3)} returns {0: 0, 1: 1, 2: 4} because range(3) generates 0, 1, 2, and the comprehension creates key-value pairs where each key is x and each value is x**2.

Key Concepts:
• Dictionary comprehension with range: • {x: x**2 for x in range(3)} = {0: 0, 1: 1, 2: 4} • range(3) generates: 0, 1, 2 • For each x: creates pair x: x**2 • Returns new dictionary • Works with any iterable How it works: • range(3) generates: 0, 1, 2 • For x = 0: creates pair 0: 0**2 = 0: 0 • For x = 1: creates pair 1: 1**2 = 1: 1 • For x = 2: creates pair 2: 2**2 = 2: 4 • Returns: {0: 0, 1: 1, 2: 4} Example: {x: x**2 for x in range(3)} # {0: 0, 1: 1, 2: 4} {x: x*10 for x in range(5)} # {0: 0, 1: 10, 2: 20, 3: 30, 4: 40} {x: chr(65+x) for x in range(3)} # {0: 'A', 1: 'B', 2: 'C'} Common uses: • Number sequences: dict = {x: f(x) for x in range(n)} • Generating mappings: mapping = {i: value for i in range(n)} • Range-based dictionaries • Sequential dict creation Example: {x: x**2 for x in range(3)} returns {0: 0, 1: 1, 2: 4} because range(3) generates 0, 1, 2, and the comprehension creates key-value pairs where each key is x and each value is x**2.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {k: v*2 for k, v in {'a': 1, 'b': 2}.items()}?`, 
    o: ["{'a': 2, 'b': 4}", "{'a': 1, 'b': 2}", "Error", "None"], 
    c: 0, 
    e: "Dictionary comprehension iterating over items.",
    de: `Dictionary comprehensions can iterate over existing dictionary items using .items(). {k: v*2 for k, v in {'a': 1, 'b': 2}.items()} returns {'a': 2, 'b': 4} because .items() yields (key, value) tuples, which are unpacked into k and v, and the comprehension creates new pairs where keys remain the same but values are doubled. This is useful for transforming dictionary values while keeping the same keys.

Dictionary comprehension with items():
• {k: v*2 for k, v in {'a': 1, 'b': 2}.items()} = {'a': 2, 'b': 4}
• .items() yields (key, value) tuples
• Unpacks into k, v
• Creates new pairs: k: v*2
• Returns transformed dictionary

How it works:
• {'a': 1, 'b': 2}.items() yields: ('a', 1), ('b', 2)
• Unpacks: k='a', v=1 and k='b', v=2
• For ('a', 1): creates pair 'a': 1*2 = 'a': 2
• For ('b', 2): creates pair 'b': 2*2 = 'b': 4
• Returns: {'a': 2, 'b': 4}

Example:
{k: v*2 for k, v in {'a': 1, 'b': 2}.items()}  # {'a': 2, 'b': 4}
{k: v**2 for k, v in {'x': 3, 'y': 4}.items()} # {'x': 9, 'y': 16}
{k: str(v) for k, v in {'a': 1, 'b': 2}.items()} # {'a': '1', 'b': '2'}

Common uses:
• Transforming values: new = {k: transform(v) for k, v in old.items()}
• Value operations: updated = {k: v*2 for k, v in data.items()}
• Dictionary transformation
• Value modification

Example: {k: v*2 for k, v in {'a': 1, 'b': 2}.items()} returns {'a': 2, 'b': 4} because the comprehension iterates over the items, unpacks each (key, value) tuple, and creates new pairs where values are doubled while keys remain the same.

Key Concepts:
• Dictionary comprehension with items(): • {k: v*2 for k, v in {'a': 1, 'b': 2}.items()} = {'a': 2, 'b': 4} • .items() yields (key, value) tuples • Unpacks into k, v • Creates new pairs: k: v*2 • Returns transformed dictionary How it works: • {'a': 1, 'b': 2}.items() yields: ('a', 1), ('b', 2) • Unpacks: k='a', v=1 and k='b', v=2 • For ('a', 1): creates pair 'a': 1*2 = 'a': 2 • For ('b', 2): creates pair 'b': 2*2 = 'b': 4 • Returns: {'a': 2, 'b': 4} Example: {k: v*2 for k, v in {'a': 1, 'b': 2}.items()} # {'a': 2, 'b': 4} {k: v**2 for k, v in {'x': 3, 'y': 4}.items()} # {'x': 9, 'y': 16} {k: str(v) for k, v in {'a': 1, 'b': 2}.items()} # {'a': '1', 'b': '2'} Common uses: • Transforming values: new = {k: transform(v) for k, v in old.items()} • Value operations: updated = {k: v*2 for k, v in data.items()} • Dictionary transformation • Value modification Example: {k: v*2 for k, v in {'a': 1, 'b': 2}.items()} returns {'a': 2, 'b': 4} because the comprehension iterates over the items, unpacks each (key, value) tuple, and creates new pairs where values are doubled while keys remain the same.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {x: x for x in [1, 2, 3] if x > 1}?`, 
    o: ["{2: 2, 3: 3}", "{1: 1, 2: 2, 3: 3}", "Error", "None"], 
    c: 0, 
    e: "Dictionary comprehension with condition.",
    de: `Dictionary comprehensions can include conditional filters using if. {x: x for x in [1, 2, 3] if x > 1} returns {2: 2, 3: 3} because the if x > 1 condition filters the elements, only including x values greater than 1. The comprehension iterates through [1, 2, 3], but only creates pairs for elements that satisfy the condition (x > 1), so 1 is excluded but 2 and 3 are included.

Dictionary comprehension with condition:
• {x: x for x in [1, 2, 3] if x > 1} = {2: 2, 3: 3}
• if condition filters elements
• Only includes x where x > 1
• Excludes 1, includes 2 and 3
• Returns filtered dictionary

How it works:
• Iterates through [1, 2, 3]
• For x = 1: if 1 > 1 is False, skip
• For x = 2: if 2 > 1 is True, creates pair 2: 2
• For x = 3: if 3 > 1 is True, creates pair 3: 3
• Returns: {2: 2, 3: 3}

Example:
{x: x for x in [1, 2, 3] if x > 1}        # {2: 2, 3: 3}
{x: x*2 for x in [1, 2, 3] if x % 2 == 0}  # {2: 4} (only even)
{x: x for x in range(5) if x % 2 == 1}     # {1: 1, 3: 3} (only odd)

Common uses:
• Filtering dictionaries: filtered = {k: v for k, v in items if condition}
• Conditional creation: dict = {x: f(x) for x in items if predicate(x)}
• Dictionary filtering
• Conditional dict creation

Example: {x: x for x in [1, 2, 3] if x > 1} returns {2: 2, 3: 3} because the if x > 1 condition filters the elements, only including values greater than 1, so 1 is excluded but 2 and 3 are included.

Key Concepts:
• Dictionary comprehension with condition: • {x: x for x in [1, 2, 3] if x > 1} = {2: 2, 3: 3} • if condition filters elements • Only includes x where x > 1 • Excludes 1, includes 2 and 3 • Returns filtered dictionary How it works: • Iterates through [1, 2, 3] • For x = 1: if 1 > 1 is False, skip • For x = 2: if 2 > 1 is True, creates pair 2: 2 • For x = 3: if 3 > 1 is True, creates pair 3: 3 • Returns: {2: 2, 3: 3} Example: {x: x for x in [1, 2, 3] if x > 1} # {2: 2, 3: 3} {x: x*2 for x in [1, 2, 3] if x % 2 == 0} # {2: 4} (only even) {x: x for x in range(5) if x % 2 == 1} # {1: 1, 3: 3} (only odd) Common uses: • Filtering dictionaries: filtered = {k: v for k, v in items if condition} • Conditional creation: dict = {x: f(x) for x in items if predicate(x)} • Dictionary filtering • Conditional dict creation Example: {x: x for x in [1, 2, 3] if x > 1} returns {2: 2, 3: 3} because the if x > 1 condition filters the elements, only including values greater than 1, so 1 is excluded but 2 and 3 are included.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {x: 'even' if x%2==0 else 'odd' for x in [1, 2, 3]}?`, 
    o: ["{1: 'odd', 2: 'even', 3: 'odd'}", "{1: 1, 2: 2, 3: 3}", "Error", "None"], 
    c: 0, 
    e: "Dictionary comprehension with ternary in value.",
    de: `Dictionary comprehensions can use ternary expressions (conditional expressions) in the value part. {x: 'even' if x%2==0 else 'odd' for x in [1, 2, 3]} returns {1: 'odd', 2: 'even', 3: 'odd'} because the ternary expression 'even' if x%2==0 else 'odd' evaluates to 'even' when x is even (x%2==0) and 'odd' when x is odd. This allows creating different values based on conditions within the comprehension.

Dictionary comprehension with ternary:
• {x: 'even' if x%2==0 else 'odd' for x in [1, 2, 3]} = {1: 'odd', 2: 'even', 3: 'odd'}
• Ternary: 'even' if x%2==0 else 'odd'
• Evaluates condition for each x
• Returns 'even' if even, 'odd' if odd
• Creates conditional values

How it works:
• Iterates through [1, 2, 3]
• For x = 1: 1%2==0 is False, value = 'odd', creates 1: 'odd'
• For x = 2: 2%2==0 is True, value = 'even', creates 2: 'even'
• For x = 3: 3%2==0 is False, value = 'odd', creates 3: 'odd'
• Returns: {1: 'odd', 2: 'even', 3: 'odd'}

Example:
{x: 'even' if x%2==0 else 'odd' for x in [1, 2, 3]}  # {1: 'odd', 2: 'even', 3: 'odd'}
{x: 'big' if x > 5 else 'small' for x in [3, 7, 2]}  # {3: 'small', 7: 'big', 2: 'small'}
{x: 'pos' if x > 0 else 'neg' for x in [-1, 1, 0]}   # {-1: 'neg', 1: 'pos', 0: 'neg'}

Common uses:
• Conditional values: dict = {k: 'A' if condition else 'B' for k in items}
• Value mapping: mapping = {x: 'type1' if pred(x) else 'type2' for x in items}
• Conditional dict creation
• Ternary expressions in comprehensions

Example: {x: 'even' if x%2==0 else 'odd' for x in [1, 2, 3]} returns {1: 'odd', 2: 'even', 3: 'odd'} because the ternary expression evaluates to 'even' when x is even and 'odd' when x is odd, creating conditional values in the dictionary.

Key Concepts:
• Dictionary comprehension with ternary: • {x: 'even' if x%2==0 else 'odd' for x in [1, 2, 3]} = {1: 'odd', 2: 'even', 3: 'odd'} • Ternary: 'even' if x%2==0 else 'odd' • Evaluates condition for each x • Returns 'even' if even, 'odd' if odd • Creates conditional values How it works: • Iterates through [1, 2, 3] • For x = 1: 1%2==0 is False, value = 'odd', creates 1: 'odd' • For x = 2: 2%2==0 is True, value = 'even', creates 2: 'even' • For x = 3: 3%2==0 is False, value = 'odd', creates 3: 'odd' • Returns: {1: 'odd', 2: 'even', 3: 'odd'} Example: {x: 'even' if x%2==0 else 'odd' for x in [1, 2, 3]} # {1: 'odd', 2: 'even', 3: 'odd'} {x: 'big' if x > 5 else 'small' for x in [3, 7, 2]} # {3: 'small', 7: 'big', 2: 'small'} {x: 'pos' if x > 0 else 'neg' for x in [-1, 1, 0]} # {-1: 'neg', 1: 'pos', 0: 'neg'} Common uses: • Conditional values: dict = {k: 'A' if condition else 'B' for k in items} • Value mapping: mapping = {x: 'type1' if pred(x) else 'type2' for x in items} • Conditional dict creation • Ternary expressions in comprehensions Example: {x: 'even' if x%2==0 else 'odd' for x in [1, 2, 3]} returns {1: 'odd', 2: 'even', 3: 'odd'} because the ternary expression evaluates to 'even' when x is even and 'odd' when x is odd, creating conditional values in the dictionary.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {str(x): x for x in [1, 2, 3]}?`, 
    o: ["{'1': 1, '2': 2, '3': 3}", "{1: 1, 2: 2, 3: 3}", "Error", "None"], 
    c: 0, 
    e: "Dictionary comprehension with key transformation.",
    de: `Dictionary comprehensions can transform keys using expressions. {str(x): x for x in [1, 2, 3]} returns {'1': 1, '2': 2, '3': 3} because str(x) converts each integer x to its string representation, which becomes the key, while x remains the value. This allows creating dictionaries with transformed keys (or values) from the original data. Key transformations are common when you need different key types or formats.

Dictionary comprehension with key transformation:
• {str(x): x for x in [1, 2, 3]} = {'1': 1, '2': 2, '3': 3}
• str(x) transforms key to string
• Value remains x (integer)
• Creates string keys from integer values
• Returns transformed dictionary

How it works:
• Iterates through [1, 2, 3]
• For x = 1: str(1) = '1', creates pair '1': 1
• For x = 2: str(2) = '2', creates pair '2': 2
• For x = 3: str(3) = '3', creates pair '3': 3
• Returns: {'1': 1, '2': 2, '3': 3}

Example:
{str(x): x for x in [1, 2, 3]}        # {'1': 1, '2': 2, '3': 3}
{x: str(x) for x in [1, 2, 3]}         # {1: '1', 2: '2', 3: '3'} (value transform)
{chr(65+x): x for x in range(3)}       # {'A': 0, 'B': 1, 'C': 2}

Common uses:
• Key transformation: dict = {transform(k): v for k, v in items}
• Type conversion: mapping = {str(k): k for k in numbers}
• Key formatting
• Dictionary key transformation

Example: {str(x): x for x in [1, 2, 3]} returns {'1': 1, '2': 2, '3': 3} because str(x) converts each integer x to its string representation for the key, while keeping the integer as the value.

Key Concepts:
• Dictionary comprehension with key transformation: • {str(x): x for x in [1, 2, 3]} = {'1': 1, '2': 2, '3': 3} • str(x) transforms key to string • Value remains x (integer) • Creates string keys from integer values • Returns transformed dictionary How it works: • Iterates through [1, 2, 3] • For x = 1: str(1) = '1', creates pair '1': 1 • For x = 2: str(2) = '2', creates pair '2': 2 • For x = 3: str(3) = '3', creates pair '3': 3 • Returns: {'1': 1, '2': 2, '3': 3} Example: {str(x): x for x in [1, 2, 3]} # {'1': 1, '2': 2, '3': 3} {x: str(x) for x in [1, 2, 3]} # {1: '1', 2: '2', 3: '3'} (value transform) {chr(65+x): x for x in range(3)} # {'A': 0, 'B': 1, 'C': 2} Common uses: • Key transformation: dict = {transform(k): v for k, v in items} • Type conversion: mapping = {str(k): k for k in numbers} • Key formatting • Dictionary key transformation Example: {str(x): x for x in [1, 2, 3]} returns {'1': 1, '2': 2, '3': 3} because str(x) converts each integer x to its string representation for the key, while keeping the integer as the value.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {(x, y): x+y for x in [1, 2] for y in [3, 4]}?`, 
    o: ["{(1, 3): 4, (1, 4): 5, (2, 3): 5, (2, 4): 6}", "Error", "None", "{1: 1, 2: 2}"], 
    c: 0, 
    e: "Dictionary comprehension with nested loops, tuple keys.",
    de: `Dictionary comprehensions can have nested loops and use tuples as keys. {(x, y): x+y for x in [1, 2] for y in [3, 4]} returns {(1, 3): 4, (1, 4): 5, (2, 3): 5, (2, 4): 6} because the nested loops iterate through all combinations: for each x in [1, 2] and each y in [3, 4], it creates a key-value pair where the key is the tuple (x, y) and the value is x+y. This creates a Cartesian product of the two lists as keys.

Dictionary comprehension with nested loops:
• {(x, y): x+y for x in [1, 2] for y in [3, 4]} = {(1, 3): 4, (1, 4): 5, (2, 3): 5, (2, 4): 6}
• Nested loops: for x in [1, 2] for y in [3, 4]
• Creates all combinations
• Key is tuple (x, y)
• Value is x+y

How it works:
• Outer loop: x = 1, 2
• Inner loop: y = 3, 4
• Combinations: (1,3), (1,4), (2,3), (2,4)
• For (1, 3): creates pair (1, 3): 1+3 = (1, 3): 4
• For (1, 4): creates pair (1, 4): 1+4 = (1, 4): 5
• For (2, 3): creates pair (2, 3): 2+3 = (2, 3): 5
• For (2, 4): creates pair (2, 4): 2+4 = (2, 4): 6
• Returns: {(1, 3): 4, (1, 4): 5, (2, 3): 5, (2, 4): 6}

Example:
{(x, y): x+y for x in [1, 2] for y in [3, 4]}  # {(1, 3): 4, (1, 4): 5, (2, 3): 5, (2, 4): 6}
{(i, j): i*j for i in [1, 2] for j in [2, 3]}  # {(1, 2): 2, (1, 3): 3, (2, 2): 4, (2, 3): 6}

Common uses:
• Cartesian products: dict = {(x, y): f(x, y) for x in xs for y in ys}
• Coordinate mappings: mapping = {(i, j): value for i in range(n) for j in range(m)}
• Nested iteration
• Tuple keys

Example: {(x, y): x+y for x in [1, 2] for y in [3, 4]} returns {(1, 3): 4, (1, 4): 5, (2, 3): 5, (2, 4): 6} because the nested loops create all combinations of x and y, using tuples (x, y) as keys and x+y as values.

Key Concepts:
• Dictionary comprehension with nested loops: • {(x, y): x+y for x in [1, 2] for y in [3, 4]} = {(1, 3): 4, (1, 4): 5, (2, 3): 5, (2, 4): 6} • Nested loops: for x in [1, 2] for y in [3, 4] • Creates all combinations • Key is tuple (x, y) • Value is x+y How it works: • Outer loop: x = 1, 2 • Inner loop: y = 3, 4 • Combinations: (1,3), (1,4), (2,3), (2,4) • For (1, 3): creates pair (1, 3): 1+3 = (1, 3): 4 • For (1, 4): creates pair (1, 4): 1+4 = (1, 4): 5 • For (2, 3): creates pair (2, 3): 2+3 = (2, 3): 5 • For (2, 4): creates pair (2, 4): 2+4 = (2, 4): 6 • Returns: {(1, 3): 4, (1, 4): 5, (2, 3): 5, (2, 4): 6} Example: {(x, y): x+y for x in [1, 2] for y in [3, 4]} # {(1, 3): 4, (1, 4): 5, (2, 3): 5, (2, 4): 6} {(i, j): i*j for i in [1, 2] for j in [2, 3]} # {(1, 2): 2, (1, 3): 3, (2, 2): 4, (2, 3): 6} Common uses: • Cartesian products: dict = {(x, y): f(x, y) for x in xs for y in ys} • Coordinate mappings: mapping = {(i, j): value for i in range(n) for j in range(m)} • Nested iteration • Tuple keys Example: {(x, y): x+y for x in [1, 2] for y in [3, 4]} returns {(1, 3): 4, (1, 4): 5, (2, 3): 5, (2, 4): 6} because the nested loops create all combinations of x and y, using tuples (x, y) as keys and x+y as values.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {x: y for x, y in zip([1, 2], [3, 4])}?`, 
    o: ["{1: 3, 2: 4}", "{1: 1, 2: 2}", "Error", "None"], 
    c: 0, 
    e: "Dictionary comprehension with zip.",
    de: `Dictionary comprehensions can iterate over zipped iterables to create key-value pairs. {x: y for x, y in zip([1, 2], [3, 4])} returns {1: 3, 2: 4} because zip([1, 2], [3, 4]) pairs elements from both lists: (1, 3) and (2, 4), which are unpacked into x and y, creating dictionary pairs where x is the key and y is the value. This is a common pattern for creating dictionaries from two parallel lists.

Dictionary comprehension with zip:
• {x: y for x, y in zip([1, 2], [3, 4])} = {1: 3, 2: 4}
• zip([1, 2], [3, 4]) pairs: (1, 3), (2, 4)
• Unpacks into x, y
• Creates pairs: x: y
• Returns dictionary

How it works:
• zip([1, 2], [3, 4]) yields: (1, 3), (2, 4)
• Unpacks: x=1, y=3 and x=2, y=4
• For (1, 3): creates pair 1: 3
• For (2, 4): creates pair 2: 4
• Returns: {1: 3, 2: 4}

Example:
{x: y for x, y in zip([1, 2], [3, 4])}        # {1: 3, 2: 4}
{k: v for k, v in zip(['a', 'b'], [1, 2])}    # {'a': 1, 'b': 2}
{str(i): i*2 for i, j in zip([1, 2], [3, 4])} # {'1': 2, '2': 4} (using i)

Common uses:
• Creating from lists: dict = {k: v for k, v in zip(keys, values)}
• Pairing data: mapping = {x: y for x, y in zip(list1, list2)}
• Dictionary from parallel lists
• Zip-based creation

Example: {x: y for x, y in zip([1, 2], [3, 4])} returns {1: 3, 2: 4} because zip() pairs elements from both lists, and the comprehension creates dictionary pairs where the first element is the key and the second element is the value.

Key Concepts:
• Dictionary comprehension with zip: • {x: y for x, y in zip([1, 2], [3, 4])} = {1: 3, 2: 4} • zip([1, 2], [3, 4]) pairs: (1, 3), (2, 4) • Unpacks into x, y • Creates pairs: x: y • Returns dictionary How it works: • zip([1, 2], [3, 4]) yields: (1, 3), (2, 4) • Unpacks: x=1, y=3 and x=2, y=4 • For (1, 3): creates pair 1: 3 • For (2, 4): creates pair 2: 4 • Returns: {1: 3, 2: 4} Example: {x: y for x, y in zip([1, 2], [3, 4])} # {1: 3, 2: 4} {k: v for k, v in zip(['a', 'b'], [1, 2])} # {'a': 1, 'b': 2} {str(i): i*2 for i, j in zip([1, 2], [3, 4])} # {'1': 2, '2': 4} (using i) Common uses: • Creating from lists: dict = {k: v for k, v in zip(keys, values)} • Pairing data: mapping = {x: y for x, y in zip(list1, list2)} • Dictionary from parallel lists • Zip-based creation Example: {x: y for x, y in zip([1, 2], [3, 4])} returns {1: 3, 2: 4} because zip() pairs elements from both lists, and the comprehension creates dictionary pairs where the first element is the key and the second element is the value.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {x: x for x in []}?`, 
    o: ["{}", "[]", "Error", "None"], 
    c: 0, 
    e: "Dictionary comprehension with empty iterable.",
    de: `Dictionary comprehensions with empty iterables create empty dictionaries. {x: x for x in []} returns {} because when the iterable is empty, there are no elements to iterate over, so no key-value pairs are created, resulting in an empty dictionary. This is consistent with how comprehensions work - if there's nothing to iterate over, the result is an empty collection of that type.

Dictionary comprehension with empty iterable:
• {x: x for x in []} = {} (empty dictionary)
• Empty iterable [] has no elements
• No iterations occur
• No pairs created
• Returns empty dictionary

How it works:
• Comprehension iterates over []
• Finds no elements
• No iterations occur
• No key-value pairs created
• Returns: {}

Example:
{x: x for x in []}              # {} (empty)
{x: x*2 for x in []}            # {} (empty)
{x: x for x in range(0)}        # {} (empty range)
{k: v for k, v in [].items()}   # {} (empty, if [] had items())

Common uses:
• Empty results: dict = {k: v for k, v in items if condition} (might be empty)
• Conditional creation: result = {x: f(x) for x in items if pred(x)}
• Empty dict creation
• Comprehension edge cases

Example: {x: x for x in []} returns {} because when the iterable is empty, there are no elements to iterate over, so no key-value pairs are created, resulting in an empty dictionary.

Key Concepts:
• Dictionary comprehension with empty iterable: • {x: x for x in []} = {} (empty dictionary) • Empty iterable [] has no elements • No iterations occur • No pairs created • Returns empty dictionary How it works: • Comprehension iterates over [] • Finds no elements • No iterations occur • No key-value pairs created • Returns: {} Example: {x: x for x in []} # {} (empty) {x: x*2 for x in []} # {} (empty) {x: x for x in range(0)} # {} (empty range) {k: v for k, v in [].items()} # {} (empty, if [] had items()) Common uses: • Empty results: dict = {k: v for k, v in items if condition} (might be empty) • Conditional creation: result = {x: f(x) for x in items if pred(x)} • Empty dict creation • Comprehension edge cases Example: {x: x for x in []} returns {} because when the iterable is empty, there are no elements to iterate over, so no key-value pairs are created, resulting in an empty dictionary.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {x: x*2 for x in [1, 2] if x > 0}?`, 
    o: ["{1: 2, 2: 4}", "{1: 1, 2: 2}", "Error", "None"], 
    c: 0, 
    e: "Dictionary comprehension with condition (all pass).",
    de: `Dictionary comprehensions with conditions filter elements before creating pairs. {x: x*2 for x in [1, 2] if x > 0} returns {1: 2, 2: 4} because the if x > 0 condition checks each element, and since both 1 and 2 are greater than 0, both pass the filter and pairs are created. The condition is evaluated before creating the pair, so only elements that satisfy the condition are included in the result.

Dictionary comprehension with condition:
• {x: x*2 for x in [1, 2] if x > 0} = {1: 2, 2: 4}
• if x > 0 filters elements
• Both 1 and 2 pass condition (both > 0)
• Creates pairs for both: 1: 2, 2: 4
• Returns filtered dictionary

How it works:
• Iterates through [1, 2]
• For x = 1: if 1 > 0 is True, creates pair 1: 1*2 = 1: 2
• For x = 2: if 2 > 0 is True, creates pair 2: 2*2 = 2: 4
• Both pass condition
• Returns: {1: 2, 2: 4}

Example:
{x: x*2 for x in [1, 2] if x > 0}        # {1: 2, 2: 4} (all pass)
{x: x*2 for x in [-1, 1, 2] if x > 0}   # {1: 2, 2: 4} (-1 filtered out)
{x: x**2 for x in [1, 2, 3] if x % 2 == 0} # {2: 4} (only even)

Common uses:
• Filtering and transforming: dict = {k: transform(v) for k, v in items if condition}
• Conditional creation: result = {x: f(x) for x in items if predicate(x)}
• Dictionary filtering
• Conditional dict creation

Example: {x: x*2 for x in [1, 2] if x > 0} returns {1: 2, 2: 4} because the if x > 0 condition filters elements, and since both 1 and 2 are greater than 0, both pass the filter and pairs are created with doubled values.

Key Concepts:
• Dictionary comprehension with condition: • {x: x*2 for x in [1, 2] if x > 0} = {1: 2, 2: 4} • if x > 0 filters elements • Both 1 and 2 pass condition (both > 0) • Creates pairs for both: 1: 2, 2: 4 • Returns filtered dictionary How it works: • Iterates through [1, 2] • For x = 1: if 1 > 0 is True, creates pair 1: 1*2 = 1: 2 • For x = 2: if 2 > 0 is True, creates pair 2: 2*2 = 2: 4 • Both pass condition • Returns: {1: 2, 2: 4} Example: {x: x*2 for x in [1, 2] if x > 0} # {1: 2, 2: 4} (all pass) {x: x*2 for x in [-1, 1, 2] if x > 0} # {1: 2, 2: 4} (-1 filtered out) {x: x**2 for x in [1, 2, 3] if x % 2 == 0} # {2: 4} (only even) Common uses: • Filtering and transforming: dict = {k: transform(v) for k, v in items if condition} • Conditional creation: result = {x: f(x) for x in items if predicate(x)} • Dictionary filtering • Conditional dict creation Example: {x: x*2 for x in [1, 2] if x > 0} returns {1: 2, 2: 4} because the if x > 0 condition filters elements, and since both 1 and 2 are greater than 0, both pass the filter and pairs are created with doubled values.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  
  // 61-70: Dictionary Operations and Comparisons
  (_i: number) => ({ 
    q: `What is {'a': 1, 'b': 2} == {'b': 2, 'a': 1}?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Dictionaries compare by content, order doesn't matter (Python 3.7+).",
    de: `Dictionaries are compared by content, not by insertion order. {'a': 1, 'b': 2} == {'b': 2, 'a': 1} returns True because both dictionaries contain the same key-value pairs: 'a': 1 and 'b': 2. The == operator checks if the dictionaries have the same keys and the same values for each key, regardless of the order in which the pairs were inserted (in Python 3.7+, dictionaries maintain insertion order, but equality comparison ignores order).

Dictionary equality:
• {'a': 1, 'b': 2} == {'b': 2, 'a': 1} = True
• == compares content (keys and values)
• Order doesn't matter for equality
• Same keys and same values = equal
• Returns True (equal)

How it works:
• {'a': 1, 'b': 2} has keys: 'a', 'b' with values: 1, 2
• {'b': 2, 'a': 1} has keys: 'a', 'b' with values: 1, 2
• Same keys: 'a', 'b' (order ignored)
• Same values: 1, 2 (matching keys)
• Returns: True (equal)

Example:
{'a': 1, 'b': 2} == {'b': 2, 'a': 1}  # True (same content)
{'a': 1} == {'b': 1}                  # False (different keys)
{'a': 1} == {'a': 2}                  # False (different values)

Common uses:
• Comparing dictionaries: if dict1 == dict2:
• Content equality: equal = (items1 == items2)
• Dictionary comparison
• Equality checking

Example: {'a': 1, 'b': 2} == {'b': 2, 'a': 1} returns True because both dictionaries contain the same key-value pairs, and equality comparison checks content regardless of order.

Key Concepts:
• Dictionary equality: • {'a': 1, 'b': 2} == {'b': 2, 'a': 1} = True • == compares content (keys and values) • Order doesn't matter for equality • Same keys and same values = equal • Returns True (equal) How it works: • {'a': 1, 'b': 2} has keys: 'a', 'b' with values: 1, 2 • {'b': 2, 'a': 1} has keys: 'a', 'b' with values: 1, 2 • Same keys: 'a', 'b' (order ignored) • Same values: 1, 2 (matching keys) • Returns: True (equal) Example: {'a': 1, 'b': 2} == {'b': 2, 'a': 1} # True (same content) {'a': 1} == {'b': 1} # False (different keys) {'a': 1} == {'a': 2} # False (different values) Common uses: • Comparing dictionaries: if dict1 == dict2: • Content equality: equal = (items1 == items2) • Dictionary comparison • Equality checking Example: {'a': 1, 'b': 2} == {'b': 2, 'a': 1} returns True because both dictionaries contain the same key-value pairs, and equality comparison checks content regardless of order.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {'a': 1} == {'a': 2}?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "Dictionaries with different values are not equal.",
    de: `Dictionaries with different values for the same keys are not equal. {'a': 1} == {'a': 2} returns False because both dictionaries have the same key 'a', but they have different values: 1 vs 2. The == operator checks if all keys match and if all corresponding values are equal - if any value differs, the dictionaries are not equal.

Dictionary equality with different values:
• {'a': 1} == {'a': 2} = False
• Both have key 'a'
• Values differ: 1 vs 2
• Different values = not equal
• Returns False (not equal)

How it works:
• {'a': 1} has key 'a' with value 1
• {'a': 2} has key 'a' with value 2
• Same keys: 'a' (matches)
• Different values: 1 vs 2 (mismatch)
• Returns: False (not equal)

Example:
{'a': 1} == {'a': 2}                  # False (different values)
{'a': 1, 'b': 2} == {'a': 1, 'b': 3} # False (different values)
{'a': 1} == {'a': 1}                  # True (same values)

Common uses:
• Comparing dictionaries: if dict1 == dict2:
• Value checking: equal = (items1 == items2)
• Dictionary comparison
• Equality validation

Example: {'a': 1} == {'a': 2} returns False because both dictionaries have the same key 'a' but different values (1 vs 2), so they are not equal.

Key Concepts:
• Dictionary equality with different values: • {'a': 1} == {'a': 2} = False • Both have key 'a' • Values differ: 1 vs 2 • Different values = not equal • Returns False (not equal) How it works: • {'a': 1} has key 'a' with value 1 • {'a': 2} has key 'a' with value 2 • Same keys: 'a' (matches) • Different values: 1 vs 2 (mismatch) • Returns: False (not equal) Example: {'a': 1} == {'a': 2} # False (different values) {'a': 1, 'b': 2} == {'a': 1, 'b': 3} # False (different values) {'a': 1} == {'a': 1} # True (same values) Common uses: • Comparing dictionaries: if dict1 == dict2: • Value checking: equal = (items1 == items2) • Dictionary comparison • Equality validation Example: {'a': 1} == {'a': 2} returns False because both dictionaries have the same key 'a' but different values (1 vs 2), so they are not equal.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {'a': 1} == {'a': 1, 'b': 2}?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "Dictionaries with different keys are not equal.",
    de: `Dictionaries with different sets of keys are not equal. {'a': 1} == {'a': 1, 'b': 2} returns False because the first dictionary has only key 'a', while the second dictionary has keys 'a' and 'b'. The == operator checks if both dictionaries have exactly the same keys - if one dictionary has keys that the other doesn't have, they are not equal, even if the common keys have the same values.

Dictionary equality with different keys:
• {'a': 1} == {'a': 1, 'b': 2} = False
• First dict has keys: 'a'
• Second dict has keys: 'a', 'b'
• Different key sets = not equal
• Returns False (not equal)

How it works:
• {'a': 1} has keys: 'a' (one key)
• {'a': 1, 'b': 2} has keys: 'a', 'b' (two keys)
• Key sets differ: {'a'} vs {'a', 'b'}
• Different key sets (even if common keys match)
• Returns: False (not equal)

Example:
{'a': 1} == {'a': 1, 'b': 2}         # False (different keys)
{'a': 1, 'b': 2} == {'a': 1}         # False (different keys)
{'a': 1} == {'a': 1}                 # True (same keys and values)

Common uses:
• Comparing dictionaries: if dict1 == dict2:
• Key checking: equal = (items1 == items2)
• Dictionary comparison
• Equality validation

Example: {'a': 1} == {'a': 1, 'b': 2} returns False because the dictionaries have different sets of keys (one has only 'a', the other has 'a' and 'b'), so they are not equal.

Key Concepts:
• Dictionary equality with different keys: • {'a': 1} == {'a': 1, 'b': 2} = False • First dict has keys: 'a' • Second dict has keys: 'a', 'b' • Different key sets = not equal • Returns False (not equal) How it works: • {'a': 1} has keys: 'a' (one key) • {'a': 1, 'b': 2} has keys: 'a', 'b' (two keys) • Key sets differ: {'a'} vs {'a', 'b'} • Different key sets (even if common keys match) • Returns: False (not equal) Example: {'a': 1} == {'a': 1, 'b': 2} # False (different keys) {'a': 1, 'b': 2} == {'a': 1} # False (different keys) {'a': 1} == {'a': 1} # True (same keys and values) Common uses: • Comparing dictionaries: if dict1 == dict2: • Key checking: equal = (items1 == items2) • Dictionary comparison • Equality validation Example: {'a': 1} == {'a': 1, 'b': 2} returns False because the dictionaries have different sets of keys (one has only 'a', the other has 'a' and 'b'), so they are not equal.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {'a': 1} != {'a': 2}?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "!= checks if dictionaries are different.",
    de: `The != operator checks if two dictionaries are different. {'a': 1} != {'a': 2} returns True because != is the negation of == - it returns True when the dictionaries are not equal. Since {'a': 1} and {'a': 2} have the same key 'a' but different values (1 vs 2), they are not equal, so != returns True. This is useful for checking if dictionaries differ.

!= operator with dictionaries:
• {'a': 1} != {'a': 2} = True
• != checks if dictionaries differ
• Same key 'a', different values: 1 vs 2
• Different values = not equal
• Returns True (not equal)

How it works:
• {'a': 1} has key 'a' with value 1
• {'a': 2} has key 'a' with value 2
• Same keys: 'a' (matches)
• Different values: 1 vs 2 (mismatch)
• Not equal, so != returns: True

Example:
{'a': 1} != {'a': 2}                 # True (different values)
{'a': 1} != {'a': 1}                 # False (same values)
{'a': 1} != {'b': 1}                 # True (different keys)

Common uses:
• Checking differences: if dict1 != dict2:
• Difference detection: different = (items1 != items2)
• Dictionary comparison
• Inequality checking

Example: {'a': 1} != {'a': 2} returns True because != checks if dictionaries are different, and since {'a': 1} and {'a': 2} have the same key but different values, they are not equal, so != returns True.

Key Concepts:
• != operator with dictionaries: • {'a': 1} != {'a': 2} = True • != checks if dictionaries differ • Same key 'a', different values: 1 vs 2 • Different values = not equal • Returns True (not equal) How it works: • {'a': 1} has key 'a' with value 1 • {'a': 2} has key 'a' with value 2 • Same keys: 'a' (matches) • Different values: 1 vs 2 (mismatch) • Not equal, so != returns: True Example: {'a': 1} != {'a': 2} # True (different values) {'a': 1} != {'a': 1} # False (same values) {'a': 1} != {'b': 1} # True (different keys) Common uses: • Checking differences: if dict1 != dict2: • Difference detection: different = (items1 != items2) • Dictionary comparison • Inequality checking Example: {'a': 1} != {'a': 2} returns True because != checks if dictionaries are different, and since {'a': 1} and {'a': 2} have the same key but different values, they are not equal, so != returns True.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {'a': 1} is {'a': 1}?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "Different dict objects, even with same content.",
    de: `The is operator checks if two variables reference the same object, not if they have the same content. {'a': 1} is {'a': 1} returns False because each dictionary literal creates a new dictionary object, so even though both dictionaries have the same content, they are different objects in memory. The is operator checks object identity (same memory address), while == checks value equality (same content).

is operator with dictionaries:
• {'a': 1} is {'a': 1} = False
• is checks object identity (same object)
• Each dict literal creates new object
• Different objects (even if same content)
• Returns False (different objects)

How it works:
• {'a': 1} creates new dictionary object A
• {'a': 1} creates new dictionary object B
• Objects A and B are different (different memory addresses)
• is checks if same object (same memory address)
• Different objects, so is returns: False

Example:
{'a': 1} is {'a': 1}                 # False (different objects)
{'a': 1} == {'a': 1}                 # True (same content)
a = {'a': 1}
b = a
a is b                                # True (same object)

Common uses:
• Checking object identity: if dict1 is dict2:
• Reference checking: same = (items1 is items2)
• Object identity
• Reference equality

Example: {'a': 1} is {'a': 1} returns False because each dictionary literal creates a new object, so even though both dictionaries have the same content, they are different objects, and is checks object identity, not content equality.

Key Concepts:
• is operator with dictionaries: • {'a': 1} is {'a': 1} = False • is checks object identity (same object) • Each dict literal creates new object • Different objects (even if same content) • Returns False (different objects) How it works: • {'a': 1} creates new dictionary object A • {'a': 1} creates new dictionary object B • Objects A and B are different (different memory addresses) • is checks if same object (same memory address) • Different objects, so is returns: False Example: {'a': 1} is {'a': 1} # False (different objects) {'a': 1} == {'a': 1} # True (same content) a = {'a': 1} b = a a is b # True (same object) Common uses: • Checking object identity: if dict1 is dict2: • Reference checking: same = (items1 is items2) • Object identity • Reference equality Example: {'a': 1} is {'a': 1} returns False because each dictionary literal creates a new object, so even though both dictionaries have the same content, they are different objects, and is checks object identity, not content equality.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is d = {'a': 1}; d is d?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Same object is identical to itself.",
    de: `An object is always identical to itself. If d = {'a': 1} and then d is d, it returns True because d is d means "is d the same object as d", which is always true. The is operator checks if two variables reference the same object, and a variable always references itself, so d is d is always True for any object.

is operator with same variable:
• d = {'a': 1}; d is d = True
• is checks object identity (same object)
• d is d means "is d the same as d"
• Always True (object is identical to itself)
• Returns True (same object)

How it works:
• d = {'a': 1} assigns dictionary object to d
• d is d checks if d is the same object as d
• Same variable (same reference)
• Same object (same memory address)
• Returns: True (always true)

Example:
d = {'a': 1}
d is d                                # True (always true)
a = {'a': 1}
b = {'a': 1}
a is b                                # False (different objects)
a is a                                # True (always true)

Common uses:
• Checking self-identity: if obj is obj:
• Reference validation: same = (items is items)
• Self-identity check
• Always true for same variable

Example: If d = {'a': 1} and then d is d, it returns True because d is always the same object as d - an object is always identical to itself.

Key Concepts:
• is operator with same variable: • d = {'a': 1}; d is d = True • is checks object identity (same object) • d is d means "is d the same as d" • Always True (object is identical to itself) • Returns True (same object) How it works: • d = {'a': 1} assigns dictionary object to d • d is d checks if d is the same object as d • Same variable (same reference) • Same object (same memory address) • Returns: True (always true) Example: d = {'a': 1} d is d # True (always true) a = {'a': 1} b = {'a': 1} a is b # False (different objects) a is a # True (always true) Common uses: • Checking self-identity: if obj is obj: • Reference validation: same = (items is items) • Self-identity check • Always true for same variable Example: If d = {'a': 1} and then d is d, it returns True because d is always the same object as d - an object is always identical to itself.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is bool({})?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "Empty dictionary is falsy.",
    de: `Empty dictionaries are falsy in boolean contexts. bool({}) returns False because an empty dictionary has no key-value pairs, so it evaluates to False when used in a boolean context. This is consistent with Python's truthiness rules - empty collections (empty list, empty tuple, empty set, empty dict) are falsy, while non-empty collections are truthy. This is useful for checking if a dictionary has any content.

bool() on empty dictionary:
• bool({}) = False (falsy)
• Empty dictionary has no pairs
• No content = falsy
• Returns False in boolean context
• Useful for checking if dict has content

How it works:
• bool() called with empty dictionary {}
• Checks if dictionary has content
• Finds no key-value pairs
• No content = falsy
• Returns: False

Example:
bool({})                              # False (falsy)
bool({'a': 1})                        # True (truthy)
if {}:                                # False (condition is False)
    print("not empty")

Common uses:
• Checking if empty: if dict: ... (falsy if empty)
• Validation: if not dict: return {}
• Empty check
• Truthiness check

Example: bool({}) returns False because empty dictionaries are falsy in boolean contexts - they have no content, so they evaluate to False.

Key Concepts:
• (falsy if empty) • Validation: if not dict: return {} • Empty check • Truthiness check Example: bool({}) returns False because empty dictionaries are falsy in boolean contexts - they have no content, so they evaluate to False.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is bool({'a': 1})?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Non-empty dictionary is truthy.",
    de: `Non-empty dictionaries are truthy in boolean contexts. bool({'a': 1}) returns True because a non-empty dictionary has at least one key-value pair, so it evaluates to True when used in a boolean context. This is consistent with Python's truthiness rules - non-empty collections (non-empty list, non-empty tuple, non-empty set, non-empty dict) are truthy, while empty collections are falsy. This is useful for checking if a dictionary has any content.

bool() on non-empty dictionary:
• bool({'a': 1}) = True (truthy)
• Non-empty dictionary has pairs
• Has content = truthy
• Returns True in boolean context
• Useful for checking if dict has content

How it works:
• bool() called with non-empty dictionary {'a': 1}
• Checks if dictionary has content
• Finds at least one key-value pair: 'a': 1
• Has content = truthy
• Returns: True

Example:
bool({'a': 1})                        # True (truthy)
bool({})                              # False (falsy)
if {'a': 1}:                          # True (condition is True)
    print("not empty")

Common uses:
• Checking if not empty: if dict: ... (truthy if not empty)
• Validation: if dict: process(dict)
• Content check
• Truthiness check

Example: bool({'a': 1}) returns True because non-empty dictionaries are truthy in boolean contexts - they have content, so they evaluate to True.

Key Concepts:
• (truthy if not empty) • Validation: if dict: process(dict) • Content check • Truthiness check Example: bool({'a': 1}) returns True because non-empty dictionaries are truthy in boolean contexts - they have content, so they evaluate to True.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {'a': 1, 'b': 2} + {'c': 3}?`, 
    o: ["TypeError", "{'a': 1, 'b': 2, 'c': 3}", "Error", "None"], 
    c: 0, 
    e: "Dictionaries don't support + operator (use | or update).",
    de: `Dictionaries don't support the + operator for concatenation. {'a': 1, 'b': 2} + {'c': 3} raises a TypeError because the + operator is not defined for dictionaries. To merge dictionaries, you need to use other methods like the | operator (Python 3.9+), the ** unpacking operator, the update() method, or the dict() constructor with unpacking. The + operator works for lists, tuples, and strings, but not for dictionaries.

+ operator with dictionaries:
• {'a': 1, 'b': 2} + {'c': 3} raises TypeError
• + operator not supported for dictionaries
• TypeError: unsupported operand type(s) for +: 'dict' and 'dict'
• Use | or update() or ** for merging
• Cannot concatenate dictionaries

How it works:
• {'a': 1, 'b': 2} + {'c': 3} attempts to add dictionaries
• Python looks for + operator implementation on dict
• Finds no + operator for dict type
• Raises TypeError
• Cannot perform operation

Example:
{'a': 1, 'b': 2} + {'c': 3}           # TypeError
{'a': 1, 'b': 2} | {'c': 3}           # {'a': 1, 'b': 2, 'c': 3} (works)
{**{'a': 1, 'b': 2}, **{'c': 3}}      # {'a': 1, 'b': 2, 'c': 3} (works)

Common uses:
• Merging dictionaries: use dict1 | dict2 (Python 3.9+)
• Merging: use {**dict1, **dict2}
• Merging: use dict1.update(dict2)
• Use appropriate method for merging

Example: {'a': 1, 'b': 2} + {'c': 3} raises a TypeError because dictionaries don't support the + operator - use the | operator, ** unpacking, or update() to merge dictionaries instead.

Key Concepts:
• + operator with dictionaries: • {'a': 1, 'b': 2} + {'c': 3} raises TypeError • + operator not supported for dictionaries • TypeError: unsupported operand type(s) for +: 'dict' and 'dict' • Use | or update() or ** for merging • Cannot concatenate dictionaries How it works: • {'a': 1, 'b': 2} + {'c': 3} attempts to add dictionaries • Python looks for + operator implementation on dict • Finds no + operator for dict type • Raises TypeError • Cannot perform operation Example: {'a': 1, 'b': 2} + {'c': 3} # TypeError {'a': 1, 'b': 2} | {'c': 3} # {'a': 1, 'b': 2, 'c': 3} (works) {**{'a': 1, 'b': 2}, **{'c': 3}} # {'a': 1, 'b': 2, 'c': 3} (works) Common uses: • Merging dictionaries: use dict1 | dict2 (Python 3.9+) • Merging: use {**dict1, **dict2} • Merging: use dict1.update(dict2) • Use appropriate method for merging Example: {'a': 1, 'b': 2} + {'c': 3} raises a TypeError because dictionaries don't support the + operator - use the | operator, ** unpacking, or update() to merge dictionaries instead.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {'a': 1} * 2?`, 
    o: ["TypeError", "{'a': 1, 'a': 1}", "Error", "None"], 
    c: 0, 
    e: "Dictionaries don't support * operator.",
    de: `Dictionaries don't support the * operator for repetition. {'a': 1} * 2 raises a TypeError because the * operator is not defined for dictionaries. The * operator works for lists, tuples, and strings (repeating them), but not for dictionaries. Dictionaries have unique keys, so repeating a dictionary wouldn't make sense - you can't have duplicate keys in a dictionary.

* operator with dictionaries:
• {'a': 1} * 2 raises TypeError
• * operator not supported for dictionaries
• TypeError: unsupported operand type(s) for *: 'dict' and 'int'
• Cannot repeat dictionaries (unique keys requirement)
• Use other methods for duplicating

How it works:
• {'a': 1} * 2 attempts to multiply dictionary
• Python looks for * operator implementation on dict
• Finds no * operator for dict type
• Raises TypeError
• Cannot perform operation

Example:
{'a': 1} * 2                          # TypeError
[1, 2] * 2                            # [1, 2, 1, 2] (works for lists)
{'a': 1, 'b': 2} * 3                  # TypeError
dict({'a': 1} * 2)                    # TypeError (still fails)

Common uses:
• Copying dictionaries: use dict.copy() or dict(dict)
• Merging dictionaries: use dict1 | dict2 or {**dict1, **dict2}
• Don't use * for dictionaries
• Use appropriate methods

Example: {'a': 1} * 2 raises a TypeError because dictionaries don't support the * operator - dictionaries have unique keys, so repetition doesn't make sense, and you should use copy() or dict() to create copies instead.

Key Concepts:
• * operator with dictionaries: • {'a': 1} * 2 raises TypeError • * operator not supported for dictionaries • TypeError: unsupported operand type(s) for *: 'dict' and 'int' • Cannot repeat dictionaries (unique keys requirement) • Use other methods for duplicating How it works: • {'a': 1} * 2 attempts to multiply dictionary • Python looks for * operator implementation on dict • Finds no * operator for dict type • Raises TypeError • Cannot perform operation Example: {'a': 1} * 2 # TypeError [1, 2] * 2 # [1, 2, 1, 2] (works for lists) {'a': 1, 'b': 2} * 3 # TypeError dict({'a': 1} * 2) # TypeError (still fails) Common uses: • Copying dictionaries: use dict.copy() or dict(dict) • Merging dictionaries: use dict1 | dict2 or {**dict1, **dict2} • Don't use * for dictionaries • Use appropriate methods Example: {'a': 1} * 2 raises a TypeError because dictionaries don't support the * operator - dictionaries have unique keys, so repetition doesn't make sense, and you should use copy() or dict() to create copies instead.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  
  // 71-80: Dictionary Views and Iteration
  (_i: number) => ({ 
    q: `What is d = {'a': 1, 'b': 2}; k = d.keys(); d['c'] = 3; list(k)?`, 
    o: ["['a', 'b', 'c']", "['a', 'b']", "Error", "None"], 
    c: 0, 
    e: "dict_keys view reflects changes to dict.",
    de: `Dictionary views are dynamic - they reflect changes to the dictionary. If d = {'a': 1, 'b': 2}, k = d.keys(), and then d['c'] = 3, list(k) returns ['a', 'b', 'c'] because the keys() view reflects changes to the dictionary. When you add a new key 'c', the view automatically includes it when you iterate or convert it to a list. Views are live connections to the dictionary - they show the current state of the dictionary, not a snapshot.

dict_keys view - dynamic:
• d = {'a': 1, 'b': 2}; k = d.keys(); d['c'] = 3; list(k) = ['a', 'b', 'c']
• keys() creates dynamic view
• View reflects changes to dictionary
• Adding 'c' updates view
• Returns current keys: ['a', 'b', 'c']

How it works:
• d = {'a': 1, 'b': 2} creates dictionary
• k = d.keys() creates view (not snapshot)
• d['c'] = 3 adds new key 'c'
• View automatically includes 'c' (dynamic)
• list(k) converts view: ['a', 'b', 'c']

Example:
d = {'a': 1, 'b': 2}
k = d.keys()           # dict_keys(['a', 'b'])
d['c'] = 3             # Adds 'c'
list(k)                # ['a', 'b', 'c'] (includes 'c')

Common uses:
• Dynamic views: k = dict.keys() (reflects changes)
• Live iteration: for key in dict.keys(): (always current)
• Dictionary monitoring
• View behavior awareness

Example: If d = {'a': 1, 'b': 2}, k = d.keys(), and then d['c'] = 3, list(k) returns ['a', 'b', 'c'] because the keys() view reflects changes to the dictionary, so it includes the newly added key 'c'.

Key Concepts:
• dict_keys view - dynamic: • d = {'a': 1, 'b': 2}; k = d.keys(); d['c'] = 3; list(k) = ['a', 'b', 'c'] • keys() creates dynamic view • View reflects changes to dictionary • Adding 'c' updates view • Returns current keys: ['a', 'b', 'c'] How it works: • d = {'a': 1, 'b': 2} creates dictionary • k = d.keys() creates view (not snapshot) • d['c'] = 3 adds new key 'c' • View automatically includes 'c' (dynamic) • list(k) converts view: ['a', 'b', 'c'] Example: d = {'a': 1, 'b': 2} k = d.keys() # dict_keys(['a', 'b']) d['c'] = 3 # Adds 'c' list(k) # ['a', 'b', 'c'] (includes 'c') Common uses: • Dynamic views: k = dict.keys() (reflects changes) • Live iteration: for key in dict.keys(): (always current) • Dictionary monitoring • View behavior awareness Example: If d = {'a': 1, 'b': 2}, k = d.keys(), and then d['c'] = 3, list(k) returns ['a', 'b', 'c'] because the keys() view reflects changes to the dictionary, so it includes the newly added key 'c'.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is d = {'a': 1}; v = d.values(); d['b'] = 2; list(v)?`, 
    o: ["[1, 2]", "[1]", "Error", "None"], 
    c: 0, 
    e: "dict_values view reflects changes to dict.",
    de: `Dictionary views are dynamic - they reflect changes to the dictionary. If d = {'a': 1}, v = d.values(), and then d['b'] = 2, list(v) returns [1, 2] because the values() view reflects changes to the dictionary. When you add a new key-value pair 'b': 2, the view automatically includes the new value 2 when you iterate or convert it to a list. Views are live connections to the dictionary - they show the current state of the dictionary, not a snapshot.

dict_values view - dynamic:
• d = {'a': 1}; v = d.values(); d['b'] = 2; list(v) = [1, 2]
• values() creates dynamic view
• View reflects changes to dictionary
• Adding 'b': 2 updates view
• Returns current values: [1, 2]

How it works:
• d = {'a': 1} creates dictionary
• v = d.values() creates view (not snapshot)
• d['b'] = 2 adds new pair 'b': 2
• View automatically includes 2 (dynamic)
• list(v) converts view: [1, 2]

Example:
d = {'a': 1}
v = d.values()         # dict_values([1])
d['b'] = 2             # Adds 'b': 2
list(v)                # [1, 2] (includes 2)

Common uses:
• Dynamic views: v = dict.values() (reflects changes)
• Live iteration: for value in dict.values(): (always current)
• Dictionary monitoring
• View behavior awareness

Example: If d = {'a': 1}, v = d.values(), and then d['b'] = 2, list(v) returns [1, 2] because the values() view reflects changes to the dictionary, so it includes the newly added value 2.

Key Concepts:
• dict_values view - dynamic: • d = {'a': 1}; v = d.values(); d['b'] = 2; list(v) = [1, 2] • values() creates dynamic view • View reflects changes to dictionary • Adding 'b': 2 updates view • Returns current values: [1, 2] How it works: • d = {'a': 1} creates dictionary • v = d.values() creates view (not snapshot) • d['b'] = 2 adds new pair 'b': 2 • View automatically includes 2 (dynamic) • list(v) converts view: [1, 2] Example: d = {'a': 1} v = d.values() # dict_values([1]) d['b'] = 2 # Adds 'b': 2 list(v) # [1, 2] (includes 2) Common uses: • Dynamic views: v = dict.values() (reflects changes) • Live iteration: for value in dict.values(): (always current) • Dictionary monitoring • View behavior awareness Example: If d = {'a': 1}, v = d.values(), and then d['b'] = 2, list(v) returns [1, 2] because the values() view reflects changes to the dictionary, so it includes the newly added value 2.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is d = {'a': 1}; i = d.items(); d['b'] = 2; list(i)?`, 
    o: ["[('a', 1), ('b', 2)]", "[('a', 1)]", "Error", "None"], 
    c: 0, 
    e: "dict_items view reflects changes to dict.",
    de: `Dictionary views are dynamic - they reflect changes to the dictionary. If d = {'a': 1}, i = d.items(), and then d['b'] = 2, list(i) returns [('a', 1), ('b', 2)] because the items() view reflects changes to the dictionary. When you add a new key-value pair 'b': 2, the view automatically includes the new pair ('b', 2) when you iterate or convert it to a list. Views are live connections to the dictionary - they show the current state of the dictionary, not a snapshot.

dict_items view - dynamic:
• d = {'a': 1}; i = d.items(); d['b'] = 2; list(i) = [('a', 1), ('b', 2)]
• items() creates dynamic view
• View reflects changes to dictionary
• Adding 'b': 2 updates view
• Returns current pairs: [('a', 1), ('b', 2)]

How it works:
• d = {'a': 1} creates dictionary
• i = d.items() creates view (not snapshot)
• d['b'] = 2 adds new pair 'b': 2
• View automatically includes ('b', 2) (dynamic)
• list(i) converts view: [('a', 1), ('b', 2)]

Example:
d = {'a': 1}
i = d.items()          # dict_items([('a', 1)])
d['b'] = 2             # Adds 'b': 2
list(i)                # [('a', 1), ('b', 2)] (includes ('b', 2))

Common uses:
• Dynamic views: i = dict.items() (reflects changes)
• Live iteration: for k, v in dict.items(): (always current)
• Dictionary monitoring
• View behavior awareness

Example: If d = {'a': 1}, i = d.items(), and then d['b'] = 2, list(i) returns [('a', 1), ('b', 2)] because the items() view reflects changes to the dictionary, so it includes the newly added pair ('b', 2).

Key Concepts:
• dict_items view - dynamic: • d = {'a': 1}; i = d.items(); d['b'] = 2; list(i) = [('a', 1), ('b', 2)] • items() creates dynamic view • View reflects changes to dictionary • Adding 'b': 2 updates view • Returns current pairs: [('a', 1), ('b', 2)] How it works: • d = {'a': 1} creates dictionary • i = d.items() creates view (not snapshot) • d['b'] = 2 adds new pair 'b': 2 • View automatically includes ('b', 2) (dynamic) • list(i) converts view: [('a', 1), ('b', 2)] Example: d = {'a': 1} i = d.items() # dict_items([('a', 1)]) d['b'] = 2 # Adds 'b': 2 list(i) # [('a', 1), ('b', 2)] (includes ('b', 2)) Common uses: • Dynamic views: i = dict.items() (reflects changes) • Live iteration: for k, v in dict.items(): (always current) • Dictionary monitoring • View behavior awareness Example: If d = {'a': 1}, i = d.items(), and then d['b'] = 2, list(i) returns [('a', 1), ('b', 2)] because the items() view reflects changes to the dictionary, so it includes the newly added pair ('b', 2).

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is for k in {'a': 1, 'b': 2}: print(k)?`, 
    o: ["Prints 'a' then 'b'", "Prints 1 then 2", "Error", "None"], 
    c: 0, 
    e: "Iterating dict directly iterates over keys.",
    de: `Iterating over a dictionary directly iterates over its keys. for k in {'a': 1, 'b': 2}: print(k) prints 'a' then 'b' because when you iterate over a dictionary in a for loop, Python iterates over the keys, not the values or key-value pairs. This is equivalent to iterating over .keys() - iterating the dictionary directly is shorthand for iterating over its keys.

Iterating dictionary directly:
• for k in {'a': 1, 'b': 2}: print(k) prints 'a' then 'b'
• Iterating dict iterates over keys
• Prints keys: 'a', 'b'
• Not values or pairs
• Equivalent to for k in dict.keys():

How it works:
• for k in {'a': 1, 'b': 2} iterates over dictionary
• Python iterates over keys: 'a', 'b'
• First iteration: k = 'a', prints 'a'
• Second iteration: k = 'b', prints 'b'
• Prints: 'a' then 'b'

Example:
for k in {'a': 1, 'b': 2}:
    print(k)           # Prints: 'a' then 'b'
for k in {'a': 1, 'b': 2}.keys():
    print(k)           # Same: 'a' then 'b'

Common uses:
• Iterating keys: for key in dict: (shorthand)
• Key iteration: for k in items: (iterates keys)
• Dictionary key access
• Common iteration pattern

Example: for k in {'a': 1, 'b': 2}: print(k) prints 'a' then 'b' because iterating over a dictionary directly iterates over its keys, not its values or key-value pairs.

Key Concepts:
• Iterating dictionary directly: • for k in {'a': 1, 'b': 2}: print(k) prints 'a' then 'b' • Iterating dict iterates over keys • Prints keys: 'a', 'b' • Not values or pairs • Equivalent to for k in dict.keys(): How it works: • for k in {'a': 1, 'b': 2} iterates over dictionary • Python iterates over keys: 'a', 'b' • First iteration: k = 'a', prints 'a' • Second iteration: k = 'b', prints 'b' • Prints: 'a' then 'b' Example: for k in {'a': 1, 'b': 2}: print(k) # Prints: 'a' then 'b' for k in {'a': 1, 'b': 2}.keys(): print(k) # Same: 'a' then 'b' Common uses: • Iterating keys: for key in dict: (shorthand) • Key iteration: for k in items: (iterates keys) • Dictionary key access • Common iteration pattern Example: for k in {'a': 1, 'b': 2}: print(k) prints 'a' then 'b' because iterating over a dictionary directly iterates over its keys, not its values or key-value pairs.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is for v in {'a': 1, 'b': 2}.values(): print(v)?`, 
    o: ["Prints 1 then 2", "Prints 'a' then 'b'", "Error", "None"], 
    c: 0, 
    e: "Iterating .values() iterates over values.",
    de: `Iterating over .values() iterates over the dictionary's values. for v in {'a': 1, 'b': 2}.values(): print(v) prints 1 then 2 because .values() returns a view of all values, and iterating over that view gives you the values, not the keys. This is how you iterate over values specifically - if you iterate the dictionary directly, you get keys, but if you iterate over .values(), you get values.

Iterating .values():
• for v in {'a': 1, 'b': 2}.values(): print(v) prints 1 then 2
• .values() returns view of values
• Iterating view gives values
• Prints values: 1, 2
• Not keys or pairs

How it works:
• {'a': 1, 'b': 2}.values() returns view: [1, 2]
• for v in view iterates over values
• First iteration: v = 1, prints 1
• Second iteration: v = 2, prints 2
• Prints: 1 then 2

Example:
for v in {'a': 1, 'b': 2}.values():
    print(v)           # Prints: 1 then 2
for v in {'x': 10, 'y': 20}.values():
    print(v)           # Prints: 10 then 20

Common uses:
• Iterating values: for value in dict.values():
• Value iteration: for v in items.values(): (iterates values)
• Dictionary value access
• Value-specific iteration

Example: for v in {'a': 1, 'b': 2}.values(): print(v) prints 1 then 2 because iterating over .values() iterates over the dictionary's values, not its keys or key-value pairs.

Key Concepts:
• Iterating .values(): • for v in {'a': 1, 'b': 2}.values(): print(v) prints 1 then 2 • .values() returns view of values • Iterating view gives values • Prints values: 1, 2 • Not keys or pairs How it works: • {'a': 1, 'b': 2}.values() returns view: [1, 2] • for v in view iterates over values • First iteration: v = 1, prints 1 • Second iteration: v = 2, prints 2 • Prints: 1 then 2 Example: for v in {'a': 1, 'b': 2}.values(): print(v) # Prints: 1 then 2 for v in {'x': 10, 'y': 20}.values(): print(v) # Prints: 10 then 20 Common uses: • Iterating values: for value in dict.values(): • Value iteration: for v in items.values(): (iterates values) • Dictionary value access • Value-specific iteration Example: for v in {'a': 1, 'b': 2}.values(): print(v) prints 1 then 2 because iterating over .values() iterates over the dictionary's values, not its keys or key-value pairs.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is for k, v in {'a': 1, 'b': 2}.items(): print(k, v)?`, 
    o: ["Prints 'a' 1 then 'b' 2", "Prints 1 'a' then 2 'b'", "Error", "None"], 
    c: 0, 
    e: "Iterating .items() unpacks key-value pairs.",
    de: `Iterating over .items() iterates over key-value pairs and unpacks them. for k, v in {'a': 1, 'b': 2}.items(): print(k, v) prints 'a' 1 then 'b' 2 because .items() returns a view of (key, value) tuples, and iterating with k, v unpacks each tuple, assigning the key to k and the value to v. This is how you iterate over both keys and values together - if you iterate the dictionary directly, you get keys, but if you iterate over .items() with unpacking, you get both keys and values.

Iterating .items() with unpacking:
• for k, v in {'a': 1, 'b': 2}.items(): print(k, v) prints 'a' 1 then 'b' 2
• .items() returns view of (key, value) tuples
• k, v unpacks each tuple
• k gets key, v gets value
• Prints keys and values together

How it works:
• {'a': 1, 'b': 2}.items() returns view: [('a', 1), ('b', 2)]
• for k, v in view unpacks each tuple
• First iteration: k='a', v=1, prints 'a' 1
• Second iteration: k='b', v=2, prints 'b' 2
• Prints: 'a' 1 then 'b' 2

Example:
for k, v in {'a': 1, 'b': 2}.items():
    print(k, v)        # Prints: 'a' 1 then 'b' 2
for key, value in {'x': 10, 'y': 20}.items():
    print(key, value)  # Prints: 'x' 10 then 'y' 20

Common uses:
• Iterating pairs: for k, v in dict.items():
• Key-value iteration: for key, value in items.items(): (iterates pairs)
• Dictionary pair access
• Both keys and values together

Example: for k, v in {'a': 1, 'b': 2}.items(): print(k, v) prints 'a' 1 then 'b' 2 because iterating over .items() with unpacking iterates over key-value pairs, assigning the key to k and the value to v.

Key Concepts:
• Iterating .items() with unpacking: • for k, v in {'a': 1, 'b': 2}.items(): print(k, v) prints 'a' 1 then 'b' 2 • .items() returns view of (key, value) tuples • k, v unpacks each tuple • k gets key, v gets value • Prints keys and values together How it works: • {'a': 1, 'b': 2}.items() returns view: [('a', 1), ('b', 2)] • for k, v in view unpacks each tuple • First iteration: k='a', v=1, prints 'a' 1 • Second iteration: k='b', v=2, prints 'b' 2 • Prints: 'a' 1 then 'b' 2 Example: for k, v in {'a': 1, 'b': 2}.items(): print(k, v) # Prints: 'a' 1 then 'b' 2 for key, value in {'x': 10, 'y': 20}.items(): print(key, value) # Prints: 'x' 10 then 'y' 20 Common uses: • Iterating pairs: for k, v in dict.items(): • Key-value iteration: for key, value in items.items(): (iterates pairs) • Dictionary pair access • Both keys and values together Example: for k, v in {'a': 1, 'b': 2}.items(): print(k, v) prints 'a' 1 then 'b' 2 because iterating over .items() with unpacking iterates over key-value pairs, assigning the key to k and the value to v.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is list({'a': 1, 'b': 2})?`, 
    o: ["['a', 'b']", "[1, 2]", "Error", "None"], 
    c: 0, 
    e: "list() on dict converts keys to list.",
    de: `The list() function converts a dictionary to a list of its keys. list({'a': 1, 'b': 2}) returns ['a', 'b'] because list() iterates over the dictionary, which iterates over keys, and collects those keys into a list. This is equivalent to list(dict.keys()) - when you call list() on a dictionary directly, it creates a list of the keys, not the values or key-value pairs.

list() on dictionary:
• list({'a': 1, 'b': 2}) = ['a', 'b']
• list() iterates over dictionary
• Dictionary iteration gives keys
• Collects keys into list
• Returns list of keys

How it works:
• list() called with {'a': 1, 'b': 2}
• Iterates over dictionary (keys: 'a', 'b')
• Collects keys: 'a', 'b'
• Returns new list: ['a', 'b']
• Same as list(dict.keys())

Example:
list({'a': 1, 'b': 2})                # ['a', 'b'] (keys)
list({'a': 1, 'b': 2}.keys())         # ['a', 'b'] (same)
list({'x': 10, 'y': 20})              # ['x', 'y'] (keys)

Common uses:
• Getting key list: key_list = list(dict)
• Converting keys: keys = list(items)
• Key list creation
• Dictionary key extraction

Example: list({'a': 1, 'b': 2}) returns ['a', 'b'] because list() iterates over the dictionary, which iterates over keys, and collects those keys into a list.

Key Concepts:
• list() on dictionary: • list({'a': 1, 'b': 2}) = ['a', 'b'] • list() iterates over dictionary • Dictionary iteration gives keys • Collects keys into list • Returns list of keys How it works: • list() called with {'a': 1, 'b': 2} • Iterates over dictionary (keys: 'a', 'b') • Collects keys: 'a', 'b' • Returns new list: ['a', 'b'] • Same as list(dict.keys()) Example: list({'a': 1, 'b': 2}) # ['a', 'b'] (keys) list({'a': 1, 'b': 2}.keys()) # ['a', 'b'] (same) list({'x': 10, 'y': 20}) # ['x', 'y'] (keys) Common uses: • Getting key list: key_list = list(dict) • Converting keys: keys = list(items) • Key list creation • Dictionary key extraction Example: list({'a': 1, 'b': 2}) returns ['a', 'b'] because list() iterates over the dictionary, which iterates over keys, and collects those keys into a list.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is tuple({'a': 1, 'b': 2})?`, 
    o: ["('a', 'b')", "(1, 2)", "Error", "None"], 
    c: 0, 
    e: "tuple() on dict converts keys to tuple.",
    de: `The tuple() function converts a dictionary to a tuple of its keys. tuple({'a': 1, 'b': 2}) returns ('a', 'b') because tuple() iterates over the dictionary, which iterates over keys, and collects those keys into a tuple. This is equivalent to tuple(dict.keys()) - when you call tuple() on a dictionary directly, it creates a tuple of the keys, not the values or key-value pairs.

tuple() on dictionary:
• tuple({'a': 1, 'b': 2}) = ('a', 'b')
• tuple() iterates over dictionary
• Dictionary iteration gives keys
• Collects keys into tuple
• Returns tuple of keys

How it works:
• tuple() called with {'a': 1, 'b': 2}
• Iterates over dictionary (keys: 'a', 'b')
• Collects keys: 'a', 'b'
• Returns new tuple: ('a', 'b')
• Same as tuple(dict.keys())

Example:
tuple({'a': 1, 'b': 2})               # ('a', 'b') (keys)
tuple({'a': 1, 'b': 2}.keys())        # ('a', 'b') (same)
tuple({'x': 10, 'y': 20})             # ('x', 'y') (keys)

Common uses:
• Getting key tuple: key_tuple = tuple(dict)
• Converting keys: keys = tuple(items)
• Key tuple creation
• Dictionary key extraction

Example: tuple({'a': 1, 'b': 2}) returns ('a', 'b') because tuple() iterates over the dictionary, which iterates over keys, and collects those keys into a tuple.

Key Concepts:
• tuple() on dictionary: • tuple({'a': 1, 'b': 2}) = ('a', 'b') • tuple() iterates over dictionary • Dictionary iteration gives keys • Collects keys into tuple • Returns tuple of keys How it works: • tuple() called with {'a': 1, 'b': 2} • Iterates over dictionary (keys: 'a', 'b') • Collects keys: 'a', 'b' • Returns new tuple: ('a', 'b') • Same as tuple(dict.keys()) Example: tuple({'a': 1, 'b': 2}) # ('a', 'b') (keys) tuple({'a': 1, 'b': 2}.keys()) # ('a', 'b') (same) tuple({'x': 10, 'y': 20}) # ('x', 'y') (keys) Common uses: • Getting key tuple: key_tuple = tuple(dict) • Converting keys: keys = tuple(items) • Key tuple creation • Dictionary key extraction Example: tuple({'a': 1, 'b': 2}) returns ('a', 'b') because tuple() iterates over the dictionary, which iterates over keys, and collects those keys into a tuple.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is set({'a': 1, 'b': 2})?`, 
    o: ["{'a', 'b'}", "{1, 2}", "Error", "None"], 
    c: 0, 
    e: "set() on dict converts keys to set.",
    de: `The set() function converts a dictionary to a set of its keys. set({'a': 1, 'b': 2}) returns {'a', 'b'} because set() iterates over the dictionary, which iterates over keys, and collects those keys into a set. This is equivalent to set(dict.keys()) - when you call set() on a dictionary directly, it creates a set of the keys, not the values or key-value pairs.

set() on dictionary:
• set({'a': 1, 'b': 2}) = {'a', 'b'}
• set() iterates over dictionary
• Dictionary iteration gives keys
• Collects keys into set
• Returns set of keys

How it works:
• set() called with {'a': 1, 'b': 2}
• Iterates over dictionary (keys: 'a', 'b')
• Collects keys: 'a', 'b'
• Returns new set: {'a', 'b'}
• Same as set(dict.keys())

Example:
set({'a': 1, 'b': 2})                 # {'a', 'b'} (keys)
set({'a': 1, 'b': 2}.keys())          # {'a', 'b'} (same)
set({'x': 10, 'y': 20})               # {'x', 'y'} (keys)

Common uses:
• Getting key set: key_set = set(dict)
• Converting keys: keys = set(items)
• Key set creation
• Dictionary key extraction

Example: set({'a': 1, 'b': 2}) returns {'a', 'b'} because set() iterates over the dictionary, which iterates over keys, and collects those keys into a set.

Key Concepts:
• set() on dictionary: • set({'a': 1, 'b': 2}) = {'a', 'b'} • set() iterates over dictionary • Dictionary iteration gives keys • Collects keys into set • Returns set of keys How it works: • set() called with {'a': 1, 'b': 2} • Iterates over dictionary (keys: 'a', 'b') • Collects keys: 'a', 'b' • Returns new set: {'a', 'b'} • Same as set(dict.keys()) Example: set({'a': 1, 'b': 2}) # {'a', 'b'} (keys) set({'a': 1, 'b': 2}.keys()) # {'a', 'b'} (same) set({'x': 10, 'y': 20}) # {'x', 'y'} (keys) Common uses: • Getting key set: key_set = set(dict) • Converting keys: keys = set(items) • Key set creation • Dictionary key extraction Example: set({'a': 1, 'b': 2}) returns {'a', 'b'} because set() iterates over the dictionary, which iterates over keys, and collects those keys into a set.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is sorted({'c': 3, 'a': 1, 'b': 2})?`, 
    o: ["['a', 'b', 'c']", "[1, 2, 3]", "Error", "None"], 
    c: 0, 
    e: "sorted() on dict sorts keys.",
    de: `The sorted() function sorts a dictionary by its keys and returns a list of sorted keys. sorted({'c': 3, 'a': 1, 'b': 2}) returns ['a', 'b', 'c'] because sorted() iterates over the dictionary, which iterates over keys, and sorts those keys. This is equivalent to sorted(dict.keys()) - when you call sorted() on a dictionary directly, it sorts the keys, not the values or key-value pairs.

sorted() on dictionary:
• sorted({'c': 3, 'a': 1, 'b': 2}) = ['a', 'b', 'c']
• sorted() iterates over dictionary
• Dictionary iteration gives keys
• Sorts keys alphabetically
• Returns sorted list of keys

How it works:
• sorted() called with {'c': 3, 'a': 1, 'b': 2}
• Iterates over dictionary (keys: 'c', 'a', 'b')
• Sorts keys: 'a' < 'b' < 'c'
• Returns sorted list: ['a', 'b', 'c']
• Same as sorted(dict.keys())

Example:
sorted({'c': 3, 'a': 1, 'b': 2})      # ['a', 'b', 'c'] (sorted keys)
sorted({'x': 10, 'a': 1, 'z': 20})    # ['a', 'x', 'z'] (sorted keys)
sorted({'3': 3, '1': 1, '2': 2})      # ['1', '2', '3'] (sorted keys)

Common uses:
• Sorting keys: sorted_keys = sorted(dict)
• Key sorting: keys = sorted(items)
• Key list sorting
• Dictionary key ordering

Example: sorted({'c': 3, 'a': 1, 'b': 2}) returns ['a', 'b', 'c'] because sorted() iterates over the dictionary, which iterates over keys, and sorts those keys alphabetically into a list.

Key Concepts:
• sorted() on dictionary: • sorted({'c': 3, 'a': 1, 'b': 2}) = ['a', 'b', 'c'] • sorted() iterates over dictionary • Dictionary iteration gives keys • Sorts keys alphabetically • Returns sorted list of keys How it works: • sorted() called with {'c': 3, 'a': 1, 'b': 2} • Iterates over dictionary (keys: 'c', 'a', 'b') • Sorts keys: 'a' < 'b' < 'c' • Returns sorted list: ['a', 'b', 'c'] • Same as sorted(dict.keys()) Example: sorted({'c': 3, 'a': 1, 'b': 2}) # ['a', 'b', 'c'] (sorted keys) sorted({'x': 10, 'a': 1, 'z': 20}) # ['a', 'x', 'z'] (sorted keys) sorted({'3': 3, '1': 1, '2': 2}) # ['1', '2', '3'] (sorted keys) Common uses: • Sorting keys: sorted_keys = sorted(dict) • Key sorting: keys = sorted(items) • Key list sorting • Dictionary key ordering Example: sorted({'c': 3, 'a': 1, 'b': 2}) returns ['a', 'b', 'c'] because sorted() iterates over the dictionary, which iterates over keys, and sorts those keys alphabetically into a list.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  
  // 81-90: Dictionary Advanced Features
  (_i: number) => ({ 
    q: `What is {'a': 1}.fromkeys(['a', 'b'])?`, 
    o: ["{'a': None, 'b': None}", "{'a': 1}", "Error", "None"], 
    c: 0, 
    e: "fromkeys() creates dict with keys, values default to None.",
    de: `The fromkeys() method is a class method that creates a dictionary from an iterable of keys. {'a': 1}.fromkeys(['a', 'b']) returns {'a': None, 'b': None} because fromkeys() is a class method that ignores the instance dictionary and creates a new dictionary with the given keys. When no value is provided, all values default to None. This is useful for initializing dictionaries with a set of keys and default values.

fromkeys() method:
• {'a': 1}.fromkeys(['a', 'b']) = {'a': None, 'b': None}
• fromkeys() is class method (ignores instance)
• Creates new dictionary with given keys
• Values default to None if not provided
• Useful for initialization

How it works:
• fromkeys(['a', 'b']) called on {'a': 1}
• Ignores instance dictionary {'a': 1}
• Creates new dictionary with keys: 'a', 'b'
• Values default to None (not provided)
• Returns: {'a': None, 'b': None}

Example:
{'a': 1}.fromkeys(['a', 'b'])         # {'a': None, 'b': None}
dict.fromkeys(['a', 'b'])             # {'a': None, 'b': None} (same)
{'x': 10}.fromkeys(['x', 'y', 'z'])  # {'x': None, 'y': None, 'z': None}

Common uses:
• Initializing dictionaries: dict = dict.fromkeys(keys)
• Default values: data = dict.fromkeys(keys, default)
• Key initialization
• Dictionary creation

Example: {'a': 1}.fromkeys(['a', 'b']) returns {'a': None, 'b': None} because fromkeys() is a class method that creates a new dictionary with the given keys, and when no value is provided, all values default to None.

Key Concepts:
• fromkeys() method: • {'a': 1}.fromkeys(['a', 'b']) = {'a': None, 'b': None} • fromkeys() is class method (ignores instance) • Creates new dictionary with given keys • Values default to None if not provided • Useful for initialization How it works: • fromkeys(['a', 'b']) called on {'a': 1} • Ignores instance dictionary {'a': 1} • Creates new dictionary with keys: 'a', 'b' • Values default to None (not provided) • Returns: {'a': None, 'b': None} Example: {'a': 1}.fromkeys(['a', 'b']) # {'a': None, 'b': None} dict.fromkeys(['a', 'b']) # {'a': None, 'b': None} (same) {'x': 10}.fromkeys(['x', 'y', 'z']) # {'x': None, 'y': None, 'z': None} Common uses: • Initializing dictionaries: dict = dict.fromkeys(keys) • Default values: data = dict.fromkeys(keys, default) • Key initialization • Dictionary creation Example: {'a': 1}.fromkeys(['a', 'b']) returns {'a': None, 'b': None} because fromkeys() is a class method that creates a new dictionary with the given keys, and when no value is provided, all values default to None.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is dict.fromkeys(['a', 'b'], 0)?`, 
    o: ["{'a': 0, 'b': 0}", "{'a': None, 'b': None}", "Error", "None"], 
    c: 0, 
    e: "fromkeys() with value sets all values to that value.",
    de: `The fromkeys() method can take a second argument as a default value for all keys. dict.fromkeys(['a', 'b'], 0) returns {'a': 0, 'b': 0} because fromkeys() creates a new dictionary with the given keys, and when a value is provided, all keys are set to that value. This is useful for initializing dictionaries with a set of keys and the same default value for all keys.

fromkeys() with value:
• dict.fromkeys(['a', 'b'], 0) = {'a': 0, 'b': 0}
• fromkeys() creates new dictionary with keys
• Second argument sets value for all keys
• All keys get same value: 0
• Useful for initialization

How it works:
• fromkeys(['a', 'b'], 0) called on dict class
• Creates new dictionary with keys: 'a', 'b'
• Sets all values to 0 (second argument)
• Returns: {'a': 0, 'b': 0}

Example:
dict.fromkeys(['a', 'b'], 0)          # {'a': 0, 'b': 0}
dict.fromkeys(['x', 'y'], 'default')  # {'x': 'default', 'y': 'default'}
dict.fromkeys(['1', '2'], [])         # {'1': [], '2': []} (same list reference!)

Common uses:
• Initializing with defaults: dict = dict.fromkeys(keys, default)
• Default values: data = dict.fromkeys(keys, 0)
• Key initialization with values
• Dictionary creation with defaults

Example: dict.fromkeys(['a', 'b'], 0) returns {'a': 0, 'b': 0} because fromkeys() creates a new dictionary with the given keys, and when a value (0) is provided, all keys are set to that value.

Key Concepts:
• fromkeys() with value: • dict.fromkeys(['a', 'b'], 0) = {'a': 0, 'b': 0} • fromkeys() creates new dictionary with keys • Second argument sets value for all keys • All keys get same value: 0 • Useful for initialization How it works: • fromkeys(['a', 'b'], 0) called on dict class • Creates new dictionary with keys: 'a', 'b' • Sets all values to 0 (second argument) • Returns: {'a': 0, 'b': 0} Example: dict.fromkeys(['a', 'b'], 0) # {'a': 0, 'b': 0} dict.fromkeys(['x', 'y'], 'default') # {'x': 'default', 'y': 'default'} dict.fromkeys(['1', '2'], []) # {'1': [], '2': []} (same list reference!) Common uses: • Initializing with defaults: dict = dict.fromkeys(keys, default) • Default values: data = dict.fromkeys(keys, 0) • Key initialization with values • Dictionary creation with defaults Example: dict.fromkeys(['a', 'b'], 0) returns {'a': 0, 'b': 0} because fromkeys() creates a new dictionary with the given keys, and when a value (0) is provided, all keys are set to that value.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {'a': 1, 'b': 2}.fromkeys(['c', 'd'])?`, 
    o: ["{'c': None, 'd': None}", "{'a': 1, 'b': 2}", "Error", "None"], 
    c: 0, 
    e: "fromkeys() is class method, creates new dict.",
    de: `The fromkeys() method is a class method that creates a new dictionary, ignoring the instance dictionary. {'a': 1, 'b': 2}.fromkeys(['c', 'd']) returns {'c': None, 'd': None} because fromkeys() is a class method that ignores the instance dictionary {'a': 1, 'b': 2} and creates a new dictionary with the given keys ['c', 'd']. The instance dictionary is not used or modified - fromkeys() always creates a new dictionary.

fromkeys() - class method:
• {'a': 1, 'b': 2}.fromkeys(['c', 'd']) = {'c': None, 'd': None}
• fromkeys() is class method (ignores instance)
• Creates new dictionary with given keys
• Instance dictionary {'a': 1, 'b': 2} not used
• Returns new dictionary

How it works:
• fromkeys(['c', 'd']) called on {'a': 1, 'b': 2}
• Ignores instance dictionary {'a': 1, 'b': 2}
• Creates new dictionary with keys: 'c', 'd'
• Values default to None (not provided)
• Returns: {'c': None, 'd': None}

Example:
{'a': 1, 'b': 2}.fromkeys(['c', 'd']) # {'c': None, 'd': None} (new dict)
{'x': 10}.fromkeys(['a', 'b'])        # {'a': None, 'b': None} (new dict)
dict.fromkeys(['a', 'b'])             # {'a': None, 'b': None} (same)

Common uses:
• Creating new dictionaries: dict = dict.fromkeys(keys)
• Initialization: data = items.fromkeys(new_keys, default)
• Class method usage
• Dictionary creation

Example: {'a': 1, 'b': 2}.fromkeys(['c', 'd']) returns {'c': None, 'd': None} because fromkeys() is a class method that ignores the instance dictionary and creates a new dictionary with the given keys.

Key Concepts:
• fromkeys() - class method: • {'a': 1, 'b': 2}.fromkeys(['c', 'd']) = {'c': None, 'd': None} • fromkeys() is class method (ignores instance) • Creates new dictionary with given keys • Instance dictionary {'a': 1, 'b': 2} not used • Returns new dictionary How it works: • fromkeys(['c', 'd']) called on {'a': 1, 'b': 2} • Ignores instance dictionary {'a': 1, 'b': 2} • Creates new dictionary with keys: 'c', 'd' • Values default to None (not provided) • Returns: {'c': None, 'd': None} Example: {'a': 1, 'b': 2}.fromkeys(['c', 'd']) # {'c': None, 'd': None} (new dict) {'x': 10}.fromkeys(['a', 'b']) # {'a': None, 'b': None} (new dict) dict.fromkeys(['a', 'b']) # {'a': None, 'b': None} (same) Common uses: • Creating new dictionaries: dict = dict.fromkeys(keys) • Initialization: data = items.fromkeys(new_keys, default) • Class method usage • Dictionary creation Example: {'a': 1, 'b': 2}.fromkeys(['c', 'd']) returns {'c': None, 'd': None} because fromkeys() is a class method that ignores the instance dictionary and creates a new dictionary with the given keys.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is max({'a': 1, 'b': 2, 'c': 3})?`, 
    o: ["'c'", "3", "Error", "None"], 
    c: 0, 
    e: "max() on dict returns max key.",
    de: `The max() function on a dictionary returns the maximum key. max({'a': 1, 'b': 2, 'c': 3}) returns 'c' because max() iterates over the dictionary, which iterates over keys, and returns the maximum key. Keys are compared using their natural ordering (strings are compared lexicographically, numbers are compared numerically). This is equivalent to max(dict.keys()) - when you call max() on a dictionary directly, it finds the maximum key, not the maximum value.

max() on dictionary:
• max({'a': 1, 'b': 2, 'c': 3}) = 'c'
• max() iterates over dictionary (keys)
• Compares keys: 'a' < 'b' < 'c'
• Returns maximum key: 'c'
• Not maximum value (value 3)

How it works:
• max() called with {'a': 1, 'b': 2, 'c': 3}
• Iterates over dictionary (keys: 'a', 'b', 'c')
• Compares keys: 'a' < 'b' < 'c' (lexicographic)
• Finds maximum key: 'c'
• Returns: 'c'

Example:
max({'a': 1, 'b': 2, 'c': 3})        # 'c' (max key)
max({'x': 10, 'a': 1, 'z': 20})      # 'z' (max key)
max({'1': 1, '2': 2, '3': 3})        # '3' (max key, string)

Common uses:
• Finding max key: max_key = max(dict)
• Key comparison: largest = max(items)
• Dictionary key ordering
• Maximum key finding

Example: max({'a': 1, 'b': 2, 'c': 3}) returns 'c' because max() iterates over the dictionary, which iterates over keys, and returns the maximum key 'c' (lexicographically largest).

Key Concepts:
• max() on dictionary: • max({'a': 1, 'b': 2, 'c': 3}) = 'c' • max() iterates over dictionary (keys) • Compares keys: 'a' < 'b' < 'c' • Returns maximum key: 'c' • Not maximum value (value 3) How it works: • max() called with {'a': 1, 'b': 2, 'c': 3} • Iterates over dictionary (keys: 'a', 'b', 'c') • Compares keys: 'a' < 'b' < 'c' (lexicographic) • Finds maximum key: 'c' • Returns: 'c' Example: max({'a': 1, 'b': 2, 'c': 3}) # 'c' (max key) max({'x': 10, 'a': 1, 'z': 20}) # 'z' (max key) max({'1': 1, '2': 2, '3': 3}) # '3' (max key, string) Common uses: • Finding max key: max_key = max(dict) • Key comparison: largest = max(items) • Dictionary key ordering • Maximum key finding Example: max({'a': 1, 'b': 2, 'c': 3}) returns 'c' because max() iterates over the dictionary, which iterates over keys, and returns the maximum key 'c' (lexicographically largest).

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is min({'a': 1, 'b': 2, 'c': 3})?`, 
    o: ["'a'", "1", "Error", "None"], 
    c: 0, 
    e: "min() on dict returns min key.",
    de: `The min() function on a dictionary returns the minimum key. min({'a': 1, 'b': 2, 'c': 3}) returns 'a' because min() iterates over the dictionary, which iterates over keys, and returns the minimum key. Keys are compared using their natural ordering (strings are compared lexicographically, numbers are compared numerically). This is equivalent to min(dict.keys()) - when you call min() on a dictionary directly, it finds the minimum key, not the minimum value.

min() on dictionary:
• min({'a': 1, 'b': 2, 'c': 3}) = 'a'
• min() iterates over dictionary (keys)
• Compares keys: 'a' < 'b' < 'c'
• Returns minimum key: 'a'
• Not minimum value (value 1)

How it works:
• min() called with {'a': 1, 'b': 2, 'c': 3}
• Iterates over dictionary (keys: 'a', 'b', 'c')
• Compares keys: 'a' < 'b' < 'c' (lexicographic)
• Finds minimum key: 'a'
• Returns: 'a'

Example:
min({'a': 1, 'b': 2, 'c': 3})        # 'a' (min key)
min({'x': 10, 'a': 1, 'z': 20})      # 'a' (min key)
min({'1': 1, '2': 2, '3': 3})        # '1' (min key, string)

Common uses:
• Finding min key: min_key = min(dict)
• Key comparison: smallest = min(items)
• Dictionary key ordering
• Minimum key finding

Example: min({'a': 1, 'b': 2, 'c': 3}) returns 'a' because min() iterates over the dictionary, which iterates over keys, and returns the minimum key 'a' (lexicographically smallest).

Key Concepts:
• min() on dictionary: • min({'a': 1, 'b': 2, 'c': 3}) = 'a' • min() iterates over dictionary (keys) • Compares keys: 'a' < 'b' < 'c' • Returns minimum key: 'a' • Not minimum value (value 1) How it works: • min() called with {'a': 1, 'b': 2, 'c': 3} • Iterates over dictionary (keys: 'a', 'b', 'c') • Compares keys: 'a' < 'b' < 'c' (lexicographic) • Finds minimum key: 'a' • Returns: 'a' Example: min({'a': 1, 'b': 2, 'c': 3}) # 'a' (min key) min({'x': 10, 'a': 1, 'z': 20}) # 'a' (min key) min({'1': 1, '2': 2, '3': 3}) # '1' (min key, string) Common uses: • Finding min key: min_key = min(dict) • Key comparison: smallest = min(items) • Dictionary key ordering • Minimum key finding Example: min({'a': 1, 'b': 2, 'c': 3}) returns 'a' because min() iterates over the dictionary, which iterates over keys, and returns the minimum key 'a' (lexicographically smallest).

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is max({'a': 1, 'b': 2, 'c': 3}.values())?`, 
    o: ["3", "'c'", "Error", "None"], 
    c: 0, 
    e: "max() on .values() returns max value.",
    de: `The max() function on .values() returns the maximum value. max({'a': 1, 'b': 2, 'c': 3}.values()) returns 3 because .values() returns a view of all values [1, 2, 3], and max() finds the maximum value. Values are compared using their natural ordering (numbers are compared numerically, strings are compared lexicographically). This is how you find the maximum value in a dictionary - if you call max() on the dictionary directly, you get the maximum key, but if you call max() on .values(), you get the maximum value.

max() on .values():
• max({'a': 1, 'b': 2, 'c': 3}.values()) = 3
• .values() returns view of values: [1, 2, 3]
• max() compares values: 1 < 2 < 3
• Returns maximum value: 3
• Not maximum key (key 'c')

How it works:
• {'a': 1, 'b': 2, 'c': 3}.values() returns view: [1, 2, 3]
• max() called with values view
• Compares values: 1 < 2 < 3 (numeric)
• Finds maximum value: 3
• Returns: 3

Example:
max({'a': 1, 'b': 2, 'c': 3}.values()) # 3 (max value)
max({'x': 10, 'y': 20}.values())       # 20 (max value)
max({'a': 'z', 'b': 'a'}.values())     # 'z' (max value, string)

Common uses:
• Finding max value: max_value = max(dict.values())
• Value comparison: largest = max(items.values())
• Dictionary value ordering
• Maximum value finding

Example: max({'a': 1, 'b': 2, 'c': 3}.values()) returns 3 because .values() returns a view of all values [1, 2, 3], and max() finds the maximum value, which is 3.

Key Concepts:
• max() on .values(): • max({'a': 1, 'b': 2, 'c': 3}.values()) = 3 • .values() returns view of values: [1, 2, 3] • max() compares values: 1 < 2 < 3 • Returns maximum value: 3 • Not maximum key (key 'c') How it works: • {'a': 1, 'b': 2, 'c': 3}.values() returns view: [1, 2, 3] • max() called with values view • Compares values: 1 < 2 < 3 (numeric) • Finds maximum value: 3 • Returns: 3 Example: max({'a': 1, 'b': 2, 'c': 3}.values()) # 3 (max value) max({'x': 10, 'y': 20}.values()) # 20 (max value) max({'a': 'z', 'b': 'a'}.values()) # 'z' (max value, string) Common uses: • Finding max value: max_value = max(dict.values()) • Value comparison: largest = max(items.values()) • Dictionary value ordering • Maximum value finding Example: max({'a': 1, 'b': 2, 'c': 3}.values()) returns 3 because .values() returns a view of all values [1, 2, 3], and max() finds the maximum value, which is 3.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is sum({'a': 1, 'b': 2, 'c': 3}.values())?`, 
    o: ["6", "0", "Error", "None"], 
    c: 0, 
    e: "sum() on .values() adds all values.",
    de: `The sum() function on .values() adds all values in the dictionary. sum({'a': 1, 'b': 2, 'c': 3}.values()) returns 6 because .values() returns a view of all values [1, 2, 3], and sum() adds them: 1 + 2 + 3 = 6. This is how you sum all values in a dictionary - sum() works with any iterable of numbers, and .values() provides an iterable of values. If the dictionary is empty, sum() returns 0.

sum() on .values():
• sum({'a': 1, 'b': 2, 'c': 3}.values()) = 6
• .values() returns view of values: [1, 2, 3]
• sum() adds all values: 1 + 2 + 3
• Returns sum: 6
• Works with numeric values

How it works:
• {'a': 1, 'b': 2, 'c': 3}.values() returns view: [1, 2, 3]
• sum() called with values view
• Adds all values: 1 + 2 + 3
• Computes sum: 6
• Returns: 6

Example:
sum({'a': 1, 'b': 2, 'c': 3}.values()) # 6 (1 + 2 + 3)
sum({'x': 10, 'y': 20}.values())       # 30 (10 + 20)
sum({}.values())                        # 0 (empty, no values)

Common uses:
• Summing values: total = sum(dict.values())
• Value aggregation: sum = sum(items.values())
• Dictionary value summing
• Numeric value operations

Example: sum({'a': 1, 'b': 2, 'c': 3}.values()) returns 6 because .values() returns a view of all values [1, 2, 3], and sum() adds them together: 1 + 2 + 3 = 6.

Key Concepts:
• sum() on .values(): • sum({'a': 1, 'b': 2, 'c': 3}.values()) = 6 • .values() returns view of values: [1, 2, 3] • sum() adds all values: 1 + 2 + 3 • Returns sum: 6 • Works with numeric values How it works: • {'a': 1, 'b': 2, 'c': 3}.values() returns view: [1, 2, 3] • sum() called with values view • Adds all values: 1 + 2 + 3 • Computes sum: 6 • Returns: 6 Example: sum({'a': 1, 'b': 2, 'c': 3}.values()) # 6 (1 + 2 + 3) sum({'x': 10, 'y': 20}.values()) # 30 (10 + 20) sum({}.values()) # 0 (empty, no values) Common uses: • Summing values: total = sum(dict.values()) • Value aggregation: sum = sum(items.values()) • Dictionary value summing • Numeric value operations Example: sum({'a': 1, 'b': 2, 'c': 3}.values()) returns 6 because .values() returns a view of all values [1, 2, 3], and sum() adds them together: 1 + 2 + 3 = 6.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is all({'a': 1, 'b': 0}.values())?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "all() checks if all values are truthy.",
    de: `The all() function on .values() checks if all values are truthy. all({'a': 1, 'b': 0}.values()) returns False because .values() returns a view of all values [1, 0], and all() checks if all values are truthy. Since 1 is truthy but 0 is falsy, all() returns False - it requires all values to be truthy. This is how you check if all values in a dictionary are truthy - all() returns True only if all values are truthy, otherwise it returns False.

all() on .values():
• all({'a': 1, 'b': 0}.values()) = False
• .values() returns view of values: [1, 0]
• all() checks if all values truthy
• 1 is truthy, 0 is falsy
• Not all truthy, returns False

How it works:
• {'a': 1, 'b': 0}.values() returns view: [1, 0]
• all() called with values view
• Checks each value: 1 (truthy), 0 (falsy)
• 1 is truthy, 0 is falsy
• Not all truthy, returns: False

Example:
all({'a': 1, 'b': 0}.values())        # False (0 is falsy)
all({'a': 1, 'b': 2}.values())        # True (all truthy)
all({'a': 0, 'b': 0}.values())        # False (all falsy)

Common uses:
• Checking all truthy: if all(dict.values()):
• Value validation: valid = all(items.values())
• Dictionary value checking
• Truthiness validation

Example: all({'a': 1, 'b': 0}.values()) returns False because .values() returns a view of all values [1, 0], and all() checks if all values are truthy - since 1 is truthy but 0 is falsy, all() returns False.

Key Concepts:
• all() on .values(): • all({'a': 1, 'b': 0}.values()) = False • .values() returns view of values: [1, 0] • all() checks if all values truthy • 1 is truthy, 0 is falsy • Not all truthy, returns False How it works: • {'a': 1, 'b': 0}.values() returns view: [1, 0] • all() called with values view • Checks each value: 1 (truthy), 0 (falsy) • 1 is truthy, 0 is falsy • Not all truthy, returns: False Example: all({'a': 1, 'b': 0}.values()) # False (0 is falsy) all({'a': 1, 'b': 2}.values()) # True (all truthy) all({'a': 0, 'b': 0}.values()) # False (all falsy) Common uses: • Checking all truthy: if all(dict.values()): • Value validation: valid = all(items.values()) • Dictionary value checking • Truthiness validation Example: all({'a': 1, 'b': 0}.values()) returns False because .values() returns a view of all values [1, 0], and all() checks if all values are truthy - since 1 is truthy but 0 is falsy, all() returns False.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is any({'a': 0, 'b': 0}.values())?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "any() checks if any value is truthy.",
    de: `The any() function on .values() checks if any value is truthy. any({'a': 0, 'b': 0}.values()) returns False because .values() returns a view of all values [0, 0], and any() checks if any value is truthy. Since both 0 and 0 are falsy, any() returns False - it requires at least one truthy value. This is how you check if any value in a dictionary is truthy - any() returns True if at least one value is truthy, otherwise it returns False.

any() on .values():
• any({'a': 0, 'b': 0}.values()) = False
• .values() returns view of values: [0, 0]
• any() checks if any value truthy
• 0 is falsy, 0 is falsy
• No truthy values, returns False

How it works:
• {'a': 0, 'b': 0}.values() returns view: [0, 0]
• any() called with values view
• Checks each value: 0 (falsy), 0 (falsy)
• Both 0 and 0 are falsy
• No truthy values, returns: False

Example:
any({'a': 0, 'b': 0}.values())        # False (all falsy)
any({'a': 0, 'b': 1}.values())        # True (1 is truthy)
any({'a': 1, 'b': 2}.values())        # True (all truthy)

Common uses:
• Checking any truthy: if any(dict.values()):
• Value validation: has_truthy = any(items.values())
• Dictionary value checking
• Truthiness detection

Example: any({'a': 0, 'b': 0}.values()) returns False because .values() returns a view of all values [0, 0], and any() checks if any value is truthy - since both 0 and 0 are falsy, any() returns False.

Key Concepts:
• any() on .values(): • any({'a': 0, 'b': 0}.values()) = False • .values() returns view of values: [0, 0] • any() checks if any value truthy • 0 is falsy, 0 is falsy • No truthy values, returns False How it works: • {'a': 0, 'b': 0}.values() returns view: [0, 0] • any() called with values view • Checks each value: 0 (falsy), 0 (falsy) • Both 0 and 0 are falsy • No truthy values, returns: False Example: any({'a': 0, 'b': 0}.values()) # False (all falsy) any({'a': 0, 'b': 1}.values()) # True (1 is truthy) any({'a': 1, 'b': 2}.values()) # True (all truthy) Common uses: • Checking any truthy: if any(dict.values()): • Value validation: has_truthy = any(items.values()) • Dictionary value checking • Truthiness detection Example: any({'a': 0, 'b': 0}.values()) returns False because .values() returns a view of all values [0, 0], and any() checks if any value is truthy - since both 0 and 0 are falsy, any() returns False.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {'a': 1, 'b': 2}.get('a') or {'a': 1, 'b': 2}.get('c')?`, 
    o: ["1", "None", "Error", "2"], 
    c: 0, 
    e: "or returns first truthy value, 1 is truthy.",
    de: `The or operator returns the first truthy value or the last value if all are falsy. {'a': 1, 'b': 2}.get('a') or {'a': 1, 'b': 2}.get('c') returns 1 because get('a') returns 1 (truthy), and or returns the first truthy value. Since 1 is truthy, or returns 1 without evaluating the second expression. This is a common pattern for providing fallback values - if the first value is truthy, use it, otherwise use the second value.

or operator with get():
• {'a': 1, 'b': 2}.get('a') or {'a': 1, 'b': 2}.get('c') = 1
• get('a') returns 1 (truthy)
• or returns first truthy value
• Returns 1 (without evaluating second get())
• Short-circuit evaluation

How it works:
• get('a') called on {'a': 1, 'b': 2}
• Returns 1 (key 'a' exists)
• or checks if 1 is truthy (it is)
• Returns 1 (first truthy value)
• Doesn't evaluate get('c') (short-circuit)

Example:
{'a': 1, 'b': 2}.get('a') or get('c')  # 1 (first truthy)
{'a': 0, 'b': 2}.get('a') or get('c')  # None (0 is falsy, 'c' not found)
{'a': 1}.get('c') or 0                 # 0 (None is falsy, uses 0)

Common uses:
• Fallback values: value = dict.get(key) or default
• Providing defaults: result = items.get(key) or fallback
• Default value patterns
• Short-circuit evaluation

Example: {'a': 1, 'b': 2}.get('a') or {'a': 1, 'b': 2}.get('c') returns 1 because get('a') returns 1 (truthy), and or returns the first truthy value, so it returns 1 without evaluating the second get().

Key Concepts:
• or operator with get(): • {'a': 1, 'b': 2}.get('a') or {'a': 1, 'b': 2}.get('c') = 1 • get('a') returns 1 (truthy) • or returns first truthy value • Returns 1 (without evaluating second get()) • Short-circuit evaluation How it works: • get('a') called on {'a': 1, 'b': 2} • Returns 1 (key 'a' exists) • or checks if 1 is truthy (it is) • Returns 1 (first truthy value) • Doesn't evaluate get('c') (short-circuit) Example: {'a': 1, 'b': 2}.get('a') or get('c') # 1 (first truthy) {'a': 0, 'b': 2}.get('a') or get('c') # None (0 is falsy, 'c' not found) {'a': 1}.get('c') or 0 # 0 (None is falsy, uses 0) Common uses: • Fallback values: value = dict.get(key) or default • Providing defaults: result = items.get(key) or fallback • Default value patterns • Short-circuit evaluation Example: {'a': 1, 'b': 2}.get('a') or {'a': 1, 'b': 2}.get('c') returns 1 because get('a') returns 1 (truthy), and or returns the first truthy value, so it returns 1 without evaluating the second get().

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  
  // 91-100: Dictionary Edge Cases and Special Features
  (_i: number) => ({ 
    q: `What is {1: 'a', 2: 'b', 3: 'c'}[1]?`, 
    o: ["'a'", "1", "Error", "None"], 
    c: 0, 
    e: "Integer keys work in dictionaries.",
    de: `Integer keys work in dictionaries. {1: 'a', 2: 'b', 3: 'c'}[1] returns 'a' because dictionaries can use integers as keys, and accessing [1] looks up the key 1 in the dictionary, which maps to the value 'a'. Dictionary keys can be any hashable type (immutable types like integers, strings, tuples), not just strings. This allows flexible key types for different use cases.

Integer keys in dictionaries:
• {1: 'a', 2: 'b', 3: 'c'}[1] = 'a'
• Integer keys work in dictionaries
• Key 1 maps to value 'a'
• Dictionaries support any hashable key type
• Returns value: 'a'

How it works:
• {1: 'a', 2: 'b', 3: 'c'} creates dictionary with integer keys
• [1] accesses key 1 in dictionary
• Finds mapping: 1 → 'a'
• Returns value: 'a'

Example:
{1: 'a', 2: 'b', 3: 'c'}[1]            # 'a' (integer key)
{10: 'x', 20: 'y'}[10]                # 'x' (integer key)
{0: 'zero', 1: 'one'}[0]              # 'zero' (integer key)

Common uses:
• Numeric keys: dict = {1: value1, 2: value2}
• ID-based dictionaries: items = {id: data for id, data in pairs}
• Integer key dictionaries
• Flexible key types

Example: {1: 'a', 2: 'b', 3: 'c'}[1] returns 'a' because dictionaries can use integers as keys, and accessing [1] looks up the key 1, which maps to the value 'a'.

Key Concepts:
• Integer keys in dictionaries: • {1: 'a', 2: 'b', 3: 'c'}[1] = 'a' • Integer keys work in dictionaries • Key 1 maps to value 'a' • Dictionaries support any hashable key type • Returns value: 'a' How it works: • {1: 'a', 2: 'b', 3: 'c'} creates dictionary with integer keys • [1] accesses key 1 in dictionary • Finds mapping: 1 → 'a' • Returns value: 'a' Example: {1: 'a', 2: 'b', 3: 'c'}[1] # 'a' (integer key) {10: 'x', 20: 'y'}[10] # 'x' (integer key) {0: 'zero', 1: 'one'}[0] # 'zero' (integer key) Common uses: • Numeric keys: dict = {1: value1, 2: value2} • ID-based dictionaries: items = {id: data for id, data in pairs} • Integer key dictionaries • Flexible key types Example: {1: 'a', 2: 'b', 3: 'c'}[1] returns 'a' because dictionaries can use integers as keys, and accessing [1] looks up the key 1, which maps to the value 'a'.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {(1, 2): 'a', (3, 4): 'b'}[(1, 2)]?`, 
    o: ["'a'", "(1, 2)", "Error", "None"], 
    c: 0, 
    e: "Tuple keys work in dictionaries (immutable).",
    de: `Tuple keys work in dictionaries because tuples are immutable and hashable. {(1, 2): 'a', (3, 4): 'b'}[(1, 2)] returns 'a' because dictionaries can use tuples as keys, and accessing [(1, 2)] looks up the tuple key (1, 2) in the dictionary, which maps to the value 'a'. Tuple keys are useful for composite keys or multi-dimensional indexing, as long as all tuple elements are hashable (immutable).

Tuple keys in dictionaries:
• {(1, 2): 'a', (3, 4): 'b'}[(1, 2)] = 'a'
• Tuple keys work in dictionaries (immutable)
• Key (1, 2) maps to value 'a'
• Tuples are hashable (can be keys)
• Returns value: 'a'

How it works:
• {(1, 2): 'a', (3, 4): 'b'} creates dictionary with tuple keys
• [(1, 2)] accesses tuple key (1, 2) in dictionary
• Finds mapping: (1, 2) → 'a'
• Returns value: 'a'

Example:
{(1, 2): 'a', (3, 4): 'b'}[(1, 2)]     # 'a' (tuple key)
{(1, 1): 'x', (2, 2): 'y'}[(1, 1)]    # 'x' (tuple key)
{('a', 1): 'z', ('b', 2): 'w'}[('a', 1)] # 'z' (tuple key)

Common uses:
• Composite keys: dict = {(x, y): value for x, y in pairs}
• Multi-dimensional indexing: items = {(row, col): data}
• Tuple key dictionaries
• Complex key structures

Example: {(1, 2): 'a', (3, 4): 'b'}[(1, 2)] returns 'a' because dictionaries can use tuples as keys (tuples are immutable and hashable), and accessing [(1, 2)] looks up the tuple key (1, 2), which maps to the value 'a'.

Key Concepts:
• Tuple keys in dictionaries: • {(1, 2): 'a', (3, 4): 'b'}[(1, 2)] = 'a' • Tuple keys work in dictionaries (immutable) • Key (1, 2) maps to value 'a' • Tuples are hashable (can be keys) • Returns value: 'a' How it works: • {(1, 2): 'a', (3, 4): 'b'} creates dictionary with tuple keys • [(1, 2)] accesses tuple key (1, 2) in dictionary • Finds mapping: (1, 2) → 'a' • Returns value: 'a' Example: {(1, 2): 'a', (3, 4): 'b'}[(1, 2)] # 'a' (tuple key) {(1, 1): 'x', (2, 2): 'y'}[(1, 1)] # 'x' (tuple key) {('a', 1): 'z', ('b', 2): 'w'}[('a', 1)] # 'z' (tuple key) Common uses: • Composite keys: dict = {(x, y): value for x, y in pairs} • Multi-dimensional indexing: items = {(row, col): data} • Tuple key dictionaries • Complex key structures Example: {(1, 2): 'a', (3, 4): 'b'}[(1, 2)] returns 'a' because dictionaries can use tuples as keys (tuples are immutable and hashable), and accessing [(1, 2)] looks up the tuple key (1, 2), which maps to the value 'a'.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {[1, 2]: 'a'}?`, 
    o: ["TypeError", "{'[1, 2]': 'a'}", "Error", "None"], 
    c: 0, 
    e: "List keys don't work (lists are mutable/unhashable).",
    de: `List keys don't work in dictionaries because lists are mutable and unhashable. {[1, 2]: 'a'} raises a TypeError because dictionary keys must be hashable (immutable), and lists are mutable, so they cannot be used as keys. Python requires keys to be hashable so they can be used in the dictionary's internal hash table. To use list-like data as keys, you need to convert them to tuples (which are immutable and hashable).

List keys in dictionaries:
• {[1, 2]: 'a'} raises TypeError
• Lists are mutable (cannot be keys)
• Dictionary keys must be hashable
• TypeError: unhashable type: 'list'
• Cannot use lists as keys

How it works:
• {[1, 2]: 'a'} attempts to create dictionary with list key
• Python tries to hash the list [1, 2]
• Lists are mutable (cannot be hashed)
• Raises TypeError
• Cannot use mutable types as keys

Example:
{[1, 2]: 'a'}                          # TypeError: unhashable type: 'list'
{[]: 'a'}                              # TypeError: unhashable type: 'list'
{tuple([1, 2]): 'a'}                  # {(1, 2): 'a'} (works with tuple)

Common uses:
• Understanding key requirements: keys must be hashable
• Converting to tuples: key = tuple(list)
• Key type validation
• Hashable types only

Example: {[1, 2]: 'a'} raises a TypeError because lists are mutable and unhashable, so they cannot be used as dictionary keys. Use tuples instead: {tuple([1, 2]): 'a'}.

Key Concepts:
• Use tuples instead: {tuple([1, 2]): 'a'}.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {{'a': 1}: 'b'}?`, 
    o: ["TypeError", "{'a': 1, 'b': 'b'}", "Error", "None"], 
    c: 0, 
    e: "Dict keys don't work (dicts are mutable/unhashable).",
    de: `Dictionary keys don't work in dictionaries because dictionaries themselves are mutable and unhashable. {{'a': 1}: 'b'} raises a TypeError because dictionary keys must be hashable (immutable), and dictionaries are mutable, so they cannot be used as keys. Python requires keys to be hashable so they can be used in the dictionary's internal hash table. To use dictionary-like data as keys, you need to convert them to immutable types (like tuples of key-value pairs).

Dict keys in dictionaries:
• {{'a': 1}: 'b'} raises TypeError
• Dictionaries are mutable (cannot be keys)
• Dictionary keys must be hashable
• TypeError: unhashable type: 'dict'
• Cannot use dictionaries as keys

How it works:
• {{'a': 1}: 'b'} attempts to create dictionary with dict key
• Python tries to hash the dict {'a': 1}
• Dictionaries are mutable (cannot be hashed)
• Raises TypeError
• Cannot use mutable types as keys

Example:
{{'a': 1}: 'b'}                        # TypeError: unhashable type: 'dict'
{{}: 'empty'}                          # TypeError: unhashable type: 'dict'
{tuple({'a': 1}.items()): 'b'}        # {(('a', 1),): 'b'} (works with tuple)

Common uses:
• Understanding key requirements: keys must be hashable
• Converting to tuples: key = tuple(dict.items())
• Key type validation
• Hashable types only

Example: {{'a': 1}: 'b'} raises a TypeError because dictionaries are mutable and unhashable, so they cannot be used as dictionary keys. Use tuples of items instead: {tuple({'a': 1}.items()): 'b'}.

Key Concepts:
• Use tuples of items instead: {tuple({'a': 1}.items()): 'b'}.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {None: 'a', True: 'b', False: 'c'}[None]?`, 
    o: ["'a'", "None", "Error", "'b'"], 
    c: 0, 
    e: "None, True, False can be dictionary keys.",
    de: `None, True, and False can be dictionary keys because they are hashable (immutable). {None: 'a', True: 'b', False: 'c'}[None] returns 'a' because None is a valid dictionary key, and accessing [None] looks up the key None in the dictionary, which maps to the value 'a'. None, True, and False are all hashable values (they have fixed identities), so they can be used as dictionary keys alongside other hashable types.

None, True, False as keys:
• {None: 'a', True: 'b', False: 'c'}[None] = 'a'
• None, True, False can be dictionary keys
• They are hashable (immutable)
• Key None maps to value 'a'
• Returns value: 'a'

How it works:
• {None: 'a', True: 'b', False: 'c'} creates dictionary with None/True/False keys
• [None] accesses key None in dictionary
• Finds mapping: None → 'a'
• Returns value: 'a'

Example:
{None: 'a', True: 'b', False: 'c'}[None]  # 'a' (None key)
{None: 'a', True: 'b', False: 'c'}[True]  # 'b' (True key)
{None: 'a', True: 'b', False: 'c'}[False] # 'c' (False key)

Common uses:
• Boolean/None keys: dict = {None: default, True: true_val, False: false_val}
• Special value keys: items = {None: value1, True: value2}
• Dictionary keys with special values
• Hashable value keys

Example: {None: 'a', True: 'b', False: 'c'}[None] returns 'a' because None, True, and False are all hashable and can be used as dictionary keys, and accessing [None] looks up the key None, which maps to the value 'a'.

Key Concepts:
• None, True, False as keys: • {None: 'a', True: 'b', False: 'c'}[None] = 'a' • None, True, False can be dictionary keys • They are hashable (immutable) • Key None maps to value 'a' • Returns value: 'a' How it works: • {None: 'a', True: 'b', False: 'c'} creates dictionary with None/True/False keys • [None] accesses key None in dictionary • Finds mapping: None → 'a' • Returns value: 'a' Example: {None: 'a', True: 'b', False: 'c'}[None] # 'a' (None key) {None: 'a', True: 'b', False: 'c'}[True] # 'b' (True key) {None: 'a', True: 'b', False: 'c'}[False] # 'c' (False key) Common uses: • Boolean/None keys: dict = {None: default, True: true_val, False: false_val} • Special value keys: items = {None: value1, True: value2} • Dictionary keys with special values • Hashable value keys Example: {None: 'a', True: 'b', False: 'c'}[None] returns 'a' because None, True, and False are all hashable and can be used as dictionary keys, and accessing [None] looks up the key None, which maps to the value 'a'.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {1: 'a', 1.0: 'b'}[1]?`, 
    o: ["'b'", "'a'", "Error", "None"], 
    c: 0, 
    e: "1 and 1.0 are same key (hash equality).",
    de: `Integer 1 and float 1.0 are considered the same key in dictionaries because they hash to the same value. {1: 'a', 1.0: 'b'}[1] returns 'b' because 1 and 1.0 hash to the same value, so they are considered the same key. When you create a dictionary with both 1 and 1.0 as keys, the later value ('b') overwrites the earlier value ('a'), leaving only one key-value pair. When accessing [1], Python treats 1 and 1.0 as the same key, so it returns the value 'b'.

Hash equality - 1 and 1.0:
• {1: 'a', 1.0: 'b'}[1] = 'b'
• 1 and 1.0 hash to same value
• They are considered same key
• Later value ('b') overwrites earlier ('a')
• Returns: 'b'

How it works:
• {1: 'a', 1.0: 'b'} creates dictionary
• 1 and 1.0 hash to same value (same key)
• Later value 'b' overwrites 'a'
• Dictionary becomes {1: 'b'} (or {1.0: 'b'})
• [1] accesses same key, returns 'b'

Example:
{1: 'a', 1.0: 'b'}[1]                 # 'b' (same key)
{1: 'a', 1.0: 'b'}[1.0]               # 'b' (same key)
{2: 'x', 2.0: 'y'}                    # {2: 'y'} (same key)

Common uses:
• Understanding hash equality: 1 == 1.0 (hash same)
• Key equality: same hash = same key
• Numeric key behavior
• Hash-based key equality

Example: {1: 'a', 1.0: 'b'}[1] returns 'b' because 1 and 1.0 hash to the same value, so they are considered the same key in the dictionary, and the later value 'b' overwrites the earlier value 'a'.

Key Concepts:
• Hash equality - 1 and 1.0: • {1: 'a', 1.0: 'b'}[1] = 'b' • 1 and 1.0 hash to same value • They are considered same key • Later value ('b') overwrites earlier ('a') • Returns: 'b' How it works: • {1: 'a', 1.0: 'b'} creates dictionary • 1 and 1.0 hash to same value (same key) • Later value 'b' overwrites 'a' • Dictionary becomes {1: 'b'} (or {1.0: 'b'}) • [1] accesses same key, returns 'b' Example: {1: 'a', 1.0: 'b'}[1] # 'b' (same key) {1: 'a', 1.0: 'b'}[1.0] # 'b' (same key) {2: 'x', 2.0: 'y'} # {2: 'y'} (same key) Common uses: • Understanding hash equality: 1 == 1.0 (hash same) • Key equality: same hash = same key • Numeric key behavior • Hash-based key equality Example: {1: 'a', 1.0: 'b'}[1] returns 'b' because 1 and 1.0 hash to the same value, so they are considered the same key in the dictionary, and the later value 'b' overwrites the earlier value 'a'.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {1: 'a', 1.0: 'b'}?`, 
    o: ["{1: 'b'}", "{1: 'a', 1.0: 'b'}", "Error", "None"], 
    c: 0, 
    e: "1 and 1.0 are same key, later value overwrites.",
    de: `Integer 1 and float 1.0 are considered the same key in dictionaries because they hash to the same value. {1: 'a', 1.0: 'b'} returns {1: 'b'} because 1 and 1.0 hash to the same value, so they are considered the same key. When you create a dictionary with both 1 and 1.0 as keys, the later value ('b') overwrites the earlier value ('a'), leaving only one key-value pair. The dictionary representation shows 1 as the key (or 1.0, depending on which was used last), but both 1 and 1.0 access the same entry.

Hash equality - dictionary creation:
• {1: 'a', 1.0: 'b'} = {1: 'b'}
• 1 and 1.0 hash to same value (same key)
• Later value 'b' overwrites 'a'
• Dictionary has only one pair: {1: 'b'}
• Both 1 and 1.0 access same entry

How it works:
• {1: 'a', 1.0: 'b'} creates dictionary
• First sets 1: 'a'
• Then sets 1.0: 'b' (same key as 1)
• 'b' overwrites 'a'
• Dictionary becomes {1: 'b'} (or {1.0: 'b'})

Example:
{1: 'a', 1.0: 'b'}                    # {1: 'b'} (same key)
{2: 'x', 2.0: 'y'}                    # {2: 'y'} (same key)
{3: 'z', 3.0: 'w'}                    # {3: 'w'} (same key)

Common uses:
• Understanding hash equality: 1 == 1.0 (hash same)
• Key overwriting: later value wins
• Numeric key behavior
• Hash-based key equality

Example: {1: 'a', 1.0: 'b'} returns {1: 'b'} because 1 and 1.0 hash to the same value, so they are considered the same key, and the later value 'b' overwrites the earlier value 'a'.

Key Concepts:
• Hash equality - dictionary creation: • {1: 'a', 1.0: 'b'} = {1: 'b'} • 1 and 1.0 hash to same value (same key) • Later value 'b' overwrites 'a' • Dictionary has only one pair: {1: 'b'} • Both 1 and 1.0 access same entry How it works: • {1: 'a', 1.0: 'b'} creates dictionary • First sets 1: 'a' • Then sets 1.0: 'b' (same key as 1) • 'b' overwrites 'a' • Dictionary becomes {1: 'b'} (or {1.0: 'b'}) Example: {1: 'a', 1.0: 'b'} # {1: 'b'} (same key) {2: 'x', 2.0: 'y'} # {2: 'y'} (same key) {3: 'z', 3.0: 'w'} # {3: 'w'} (same key) Common uses: • Understanding hash equality: 1 == 1.0 (hash same) • Key overwriting: later value wins • Numeric key behavior • Hash-based key equality Example: {1: 'a', 1.0: 'b'} returns {1: 'b'} because 1 and 1.0 hash to the same value, so they are considered the same key, and the later value 'b' overwrites the earlier value 'a'.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is d = {}; d[1] = 'a'; d[1.0] = 'b'; d?`, 
    o: ["{1: 'b'}", "{1: 'a', 1.0: 'b'}", "Error", "None"], 
    c: 0, 
    e: "1 and 1.0 are same key, assignment overwrites.",
    de: `Integer 1 and float 1.0 are considered the same key in dictionaries because they hash to the same value. If d = {}, d[1] = 'a', and then d[1.0] = 'b', the dictionary d becomes {1: 'b'} because 1 and 1.0 hash to the same value, so they are considered the same key. When you assign d[1] = 'a', it sets the value to 'a', but when you assign d[1.0] = 'b', it overwrites the same key (since 1 and 1.0 are the same key), leaving only {1: 'b'}.

Hash equality - assignment:
• d = {}; d[1] = 'a'; d[1.0] = 'b'; d = {1: 'b'}
• 1 and 1.0 hash to same value (same key)
• d[1] = 'a' sets value to 'a'
• d[1.0] = 'b' overwrites same key to 'b'
• Dictionary has only one pair: {1: 'b'}

How it works:
• d = {} creates empty dictionary
• d[1] = 'a' sets key 1 to value 'a'
• d[1.0] = 'b' sets key 1.0 to value 'b'
• 1 and 1.0 are same key (same hash)
• 'b' overwrites 'a', d becomes {1: 'b'}

Example:
d = {}
d[1] = 'a'                             # d = {1: 'a'}
d[1.0] = 'b'                           # d = {1: 'b'} (overwrites)
d                                      # {1: 'b'}

Common uses:
• Understanding hash equality: 1 == 1.0 (hash same)
• Key assignment: later assignment wins
• Numeric key behavior
• Hash-based key equality

Example: If d = {}, d[1] = 'a', and then d[1.0] = 'b', the dictionary d becomes {1: 'b'} because 1 and 1.0 hash to the same value, so they are considered the same key, and the assignment d[1.0] = 'b' overwrites the value from d[1] = 'a'.

Key Concepts:
• Hash equality - assignment: • d = {}; d[1] = 'a'; d[1.0] = 'b'; d = {1: 'b'} • 1 and 1.0 hash to same value (same key) • d[1] = 'a' sets value to 'a' • d[1.0] = 'b' overwrites same key to 'b' • Dictionary has only one pair: {1: 'b'} How it works: • d = {} creates empty dictionary • d[1] = 'a' sets key 1 to value 'a' • d[1.0] = 'b' sets key 1.0 to value 'b' • 1 and 1.0 are same key (same hash) • 'b' overwrites 'a', d becomes {1: 'b'} Example: d = {} d[1] = 'a' # d = {1: 'a'} d[1.0] = 'b' # d = {1: 'b'} (overwrites) d # {1: 'b'} Common uses: • Understanding hash equality: 1 == 1.0 (hash same) • Key assignment: later assignment wins • Numeric key behavior • Hash-based key equality Example: If d = {}, d[1] = 'a', and then d[1.0] = 'b', the dictionary d becomes {1: 'b'} because 1 and 1.0 hash to the same value, so they are considered the same key, and the assignment d[1.0] = 'b' overwrites the value from d[1] = 'a'.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {'a': 1, 'b': 2}.pop('a', 'default')?`, 
    o: ["1", "'default'", "Error", "None"], 
    c: 0, 
    e: "pop() returns value if key exists, ignores default.",
    de: `The pop() method returns the actual value if the key exists, even if a default value is provided. {'a': 1, 'b': 2}.pop('a', 'default') returns 1 because pop() finds the key 'a' in the dictionary and returns its actual value (1), ignoring the default value ('default'). The default value is only used when the key doesn't exist - if the key exists, pop() returns the actual value associated with that key.

pop() with existing key:
• {'a': 1, 'b': 2}.pop('a', 'default') = 1
• pop(key, default) returns actual value if key exists
• Default value ignored when key found
• Returns value from dictionary
• Default only used if key missing

How it works:
• pop('a', 'default') called on {'a': 1, 'b': 2}
• Searches for key 'a' in dictionary
• Finds mapping: 'a' → 1
• Returns actual value: 1 (ignores default 'default')
• Dictionary modified: {'b': 2} (pair removed)

Example:
{'a': 1, 'b': 2}.pop('a', 'default')   # 1 (returns actual value)
{'a': 1, 'b': 2}.pop('b', 0)          # 2 (returns actual value)
{'a': 1, 'b': 2}.pop('c', 'default')   # 'default' (key not found)

Common uses:
• Removing pairs: value = dict.pop(key, default)
• Getting and removing: removed = items.pop(key, fallback)
• Safe removal with fallback
• Default handling

Example: {'a': 1, 'b': 2}.pop('a', 'default') returns 1 because pop() finds the key 'a' in the dictionary and returns its actual value (1), ignoring the default value ('default'), which is only used when the key doesn't exist.

Key Concepts:
• pop() with existing key: • {'a': 1, 'b': 2}.pop('a', 'default') = 1 • pop(key, default) returns actual value if key exists • Default value ignored when key found • Returns value from dictionary • Default only used if key missing How it works: • pop('a', 'default') called on {'a': 1, 'b': 2} • Searches for key 'a' in dictionary • Finds mapping: 'a' → 1 • Returns actual value: 1 (ignores default 'default') • Dictionary modified: {'b': 2} (pair removed) Example: {'a': 1, 'b': 2}.pop('a', 'default') # 1 (returns actual value) {'a': 1, 'b': 2}.pop('b', 0) # 2 (returns actual value) {'a': 1, 'b': 2}.pop('c', 'default') # 'default' (key not found) Common uses: • Removing pairs: value = dict.pop(key, default) • Getting and removing: removed = items.pop(key, fallback) • Safe removal with fallback • Default handling Example: {'a': 1, 'b': 2}.pop('a', 'default') returns 1 because pop() finds the key 'a' in the dictionary and returns its actual value (1), ignoring the default value ('default'), which is only used when the key doesn't exist.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
    q: `What is {'a': 1, 'b': 2}.pop('c', 'default')?`, 
    o: ["'default'", "None", "Error", "1"], 
    c: 0, 
    e: "pop() returns default if key doesn't exist.",
    de: `The pop() method returns the default value if the key doesn't exist and a default is provided. {'a': 1, 'b': 2}.pop('c', 'default') returns 'default' because pop() searches for the key 'c' in the dictionary, doesn't find it, and returns the default value ('default') without raising an error. Unlike pop() without a default, this version doesn't raise a KeyError - it just returns the default value. The dictionary remains unchanged because there was no pair to remove.

pop() with missing key:
• {'a': 1, 'b': 2}.pop('c', 'default') = 'default'
• pop(key, default) returns default if key not found
• No error raised (unlike pop() without default)
• Dictionary unchanged (no pair to remove)
• Returns default value

How it works:
• pop('c', 'default') called on {'a': 1, 'b': 2}
• Searches for key 'c' in dictionary
• Finds no match (key doesn't exist)
• Cannot remove non-existent pair
• Returns default value: 'default' (no error)
• Dictionary unchanged: {'a': 1, 'b': 2}

Example:
{'a': 1, 'b': 2}.pop('c', 'default')   # 'default' (not found, returns default)
{'a': 1, 'b': 2}.pop('c', 0)          # 0 (not found, returns default)
{'a': 1, 'b': 2}                      # {'a': 1, 'b': 2} (unchanged)

Common uses:
• Safe removal: value = dict.pop(key, default)
• Default handling: removed = items.pop(key, fallback)
• Error-free removal
• Safe pop with fallback

Example: {'a': 1, 'b': 2}.pop('c', 'default') returns 'default' because pop() searches for the key 'c' in the dictionary, doesn't find it, and returns the default value ('default') without raising an error, leaving the dictionary unchanged.

Key Concepts:
• pop() with missing key: • {'a': 1, 'b': 2}.pop('c', 'default') = 'default' • pop(key, default) returns default if key not found • No error raised (unlike pop() without default) • Dictionary unchanged (no pair to remove) • Returns default value How it works: • pop('c', 'default') called on {'a': 1, 'b': 2} • Searches for key 'c' in dictionary • Finds no match (key doesn't exist) • Cannot remove non-existent pair • Returns default value: 'default' (no error) • Dictionary unchanged: {'a': 1, 'b': 2} Example: {'a': 1, 'b': 2}.pop('c', 'default') # 'default' (not found, returns default) {'a': 1, 'b': 2}.pop('c', 0) # 0 (not found, returns default) {'a': 1, 'b': 2} # {'a': 1, 'b': 2} (unchanged) Common uses: • Safe removal: value = dict.pop(key, default) • Default handling: removed = items.pop(key, fallback) • Error-free removal • Safe pop with fallback Example: {'a': 1, 'b': 2}.pop('c', 'default') returns 'default' because pop() searches for the key 'c' in the dictionary, doesn't find it, and returns the default value ('default') without raising an error, leaving the dictionary unchanged.

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
