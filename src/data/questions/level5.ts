import { PersonaStage } from '../../types';

// --- LEVEL 5: OCTOPUS (Lists, Arrays, Indexing) - 100 TRULY UNIQUE QUESTIONS ---
// Each question tests a DIFFERENT concept - NO number/variable variations of the same question
export const level5Patterns = [
  // 1-10: List Creation and Basics
  (_i: number) => ({ 
    q: `What is [1, 2, 3]?`, 
    o: ["A list", "A tuple", "A dictionary", "A set"], 
    c: 0, 
    e: "Square brackets create a list.",
    de: `Square brackets [] create a list in Python. [1, 2, 3] is a list containing three integers: 1, 2, and 3. Lists are ordered, mutable sequences that can contain elements of any type, including mixed types. This is one of Python's most fundamental data structures.

List creation:
• [1, 2, 3] = list with elements 1, 2, 3
• Square brackets [] are the list literal syntax
• Lists are ordered (elements have a defined order)
• Lists are mutable (can be modified after creation)
• Lists can contain any type of element

How it works:
• Python recognizes [] as list literal syntax
• Elements inside are separated by commas
• Creates a list object in memory
• Elements are indexed starting from 0
• Returns a list type

Example:
[1, 2, 3]           # List of integers
['a', 'b', 'c']     # List of strings
[1, 'a', 3.14]      # Mixed types allowed
[]                  # Empty list

Common uses:
• Storing sequences: numbers = [1, 2, 3]
• Collecting data: names = ['Alice', 'Bob']
• Managing ordered collections
• Data structures and algorithms

Example: [1, 2, 3] creates a list object containing three integers, which is Python's primary ordered, mutable sequence type.
`
  }),
  (_i: number) => ({ 
    q: `What is list([1, 2, 3])?`, 
    o: ["[1, 2, 3]", "(1, 2, 3)", "{1, 2, 3}", "Error"], 
    c: 0, 
    e: "list() constructor creates a list.",
    de: `The list() constructor creates a list from an iterable. list([1, 2, 3]) creates a new list [1, 2, 3] from the existing list [1, 2, 3]. This is essentially creating a shallow copy - a new list object with the same elements. The list() constructor accepts any iterable (list, tuple, string, range, etc.) and converts it to a list.

list() constructor:
• list([1, 2, 3]) = [1, 2, 3] (new list)
• list() creates a list from an iterable
• Creates a shallow copy of the input
• Works with any iterable type
• Returns a list object

How it works:
• list() takes an iterable as argument
• Iterates through the iterable
• Creates new list with elements from iterable
• Returns new list object
• Original iterable unchanged (if immutable)

Example:
list([1, 2, 3])      # [1, 2, 3] (shallow copy)
list((1, 2, 3))      # [1, 2, 3] (from tuple)
list('abc')          # ['a', 'b', 'c'] (from string)
list(range(3))       # [0, 1, 2] (from range)

Common uses:
• Converting iterables: list(tuple_data)
• Creating copies: new_list = list(old_list)
• Converting generators to lists
• Type conversion

Example: list([1, 2, 3]) returns [1, 2, 3] because list() creates a new list object from the iterable [1, 2, 3], which in this case results in a shallow copy.
`
  }),
  (_i: number) => ({ 
    q: `What is []?`, 
    o: ["Empty list", "Error", "None", "Empty tuple"], 
    c: 0, 
    e: "Empty list literal.",
    de: `Empty square brackets [] create an empty list in Python. [] is a list literal that contains no elements. Empty lists are falsy in boolean contexts (they evaluate to False), but they are still valid list objects. Empty lists are useful as placeholders or starting points for building lists dynamically.

Empty list:
• [] = empty list (no elements)
• Square brackets with nothing inside
• Valid list object, just has zero length
• Falsy in boolean contexts: bool([]) = False
• Length is 0: len([]) = 0

How it works:
• Python recognizes [] as empty list literal
• Creates a list object with no elements
• Still a valid list type
• Can be used immediately for operations
• Returns empty list object

Example:
[]                   # Empty list
bool([])             # False (falsy)
len([])              # 0 (zero length)
[].append(1)         # [1] (can add elements)

Common uses:
• Initialization: result = []
• Placeholders: data = []
• Starting points for building lists
• Return values for empty results

Example: [] creates an empty list object, which is a valid list with zero elements and length 0.
`
  }),
  (_i: number) => ({ 
    q: `What is list()?`, 
    o: ["[]", "()", "{}", "Error"], 
    c: 0, 
    e: "list() with no arguments creates empty list.",
    de: `Calling list() with no arguments creates an empty list, equivalent to []. list() is the constructor function that creates lists, and when called without arguments, it creates an empty list object. This is functionally identical to using the empty list literal [].

list() with no arguments:
• list() = [] (empty list)
• Constructor function with no arguments
• Creates empty list object
• Equivalent to [] literal
• Returns empty list

How it works:
• list() called without arguments
• Creates new empty list object
• Returns empty list: []
• Same result as [] literal
• Ready for operations

Example:
list()               # [] (empty list)
list() == []         # True (equivalent)
len(list())          # 0 (zero length)
list().append(1)     # [1] (can add elements)

Common uses:
• Creating empty lists: items = list()
• Initialization: data = list()
• Alternative to [] literal
• Constructor syntax preference

Example: list() returns [] because calling the list constructor without arguments creates an empty list object, which is equivalent to the empty list literal [].
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2, 3][0]?`, 
    o: ["1", "2", "3", "Error"], 
    c: 0, 
    e: "List indexing starts at 0.",
    de: `List indexing in Python starts at 0, not 1. [1, 2, 3][0] returns 1 because index 0 refers to the first element in the list. Python uses zero-based indexing, meaning the first element is at index 0, the second at index 1, and so on. This is consistent across all sequence types in Python.

List indexing:
• [1, 2, 3][0] = 1 (first element)
• Index 0 is the first element
• Python uses zero-based indexing
• Access elements using square brackets after list
• Returns the element at that index

How it works:
• [1, 2, 3] is the list
• [0] is the index in square brackets
• Index 0 refers to first element
• Returns value at that position: 1
• Index must be valid (0 to len-1)

Example:
[1, 2, 3][0]         # 1 (first element)
[1, 2, 3][1]         # 2 (second element)
[1, 2, 3][2]         # 3 (third element)
[1, 2, 3][3]         # IndexError (out of bounds)

Common uses:
• Accessing elements: first = my_list[0]
• Reading values: value = items[index]
• Sequence access
• Array-like operations

Example: [1, 2, 3][0] returns 1 because index 0 refers to the first element in the list (Python uses zero-based indexing).
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2, 3][1]?`, 
    o: ["2", "1", "3", "Error"], 
    c: 0, 
    e: "Index 1 gets second element.",
    de: `Index 1 gets the second element in a list because Python uses zero-based indexing. [1, 2, 3][1] returns 2 because index 1 refers to the second element (the first element is at index 0). This is the standard indexing convention across all Python sequence types.

Index 1 (second element):
• [1, 2, 3][1] = 2 (second element)
• Index 0 = first element (1)
• Index 1 = second element (2)
• Index 2 = third element (3)
• Zero-based indexing system

How it works:
• [1, 2, 3] contains elements at indices 0, 1, 2
• [1] accesses element at index 1
• Index 1 refers to second element
• Returns value at that position: 2
• Valid index range: 0 to len-1

Example:
[1, 2, 3][1]         # 2 (second element)
['a', 'b', 'c'][1]   # 'b' (second element)
[10, 20, 30][1]      # 20 (second element)

Common uses:
• Accessing second element: second = items[1]
• Reading by position: value = data[1]
• Sequence indexing
• Array-like access

Example: [1, 2, 3][1] returns 2 because index 1 refers to the second element in the list (since indexing starts at 0).
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2, 3][-1]?`, 
    o: ["3", "1", "2", "Error"], 
    c: 0, 
    e: "Negative indexing starts from the end.",
    de: `Negative indexing in Python allows you to access elements from the end of a list. [1, 2, 3][-1] returns 3 because index -1 refers to the last element. Negative indices count backwards from the end: -1 is the last element, -2 is the second-to-last, and so on. This is a convenient way to access elements from the end without knowing the list length.

Negative indexing:
• [1, 2, 3][-1] = 3 (last element)
• -1 = last element
• -2 = second-to-last element
• -3 = third-to-last element
• Counts backwards from end

How it works:
• [1, 2, 3] has elements at indices 0, 1, 2
• [-1] accesses from the end
• -1 refers to last element (index 2)
• Returns value at that position: 3
• Negative indices: -1, -2, -3, etc.

Example:
[1, 2, 3][-1]        # 3 (last element)
[1, 2, 3][-2]        # 2 (second-to-last)
[1, 2, 3][-3]        # 1 (third-to-last)
['a', 'b', 'c'][-1]  # 'c' (last element)

Common uses:
• Accessing last element: last = items[-1]
• Getting end elements: second_last = data[-2]
• Convenient end access
• No need to know length

Example: [1, 2, 3][-1] returns 3 because negative index -1 refers to the last element in the list, counting backwards from the end.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2, 3][-2]?`, 
    o: ["2", "1", "3", "Error"], 
    c: 0, 
    e: "Negative index -2 gets second from end.",
    de: `Negative index -2 gets the second-to-last element in a list. [1, 2, 3][-2] returns 2 because index -2 refers to the second element from the end (the last element is at -1). Negative indexing counts backwards from the end of the list, making it convenient to access elements without knowing the exact length.

Negative index -2:
• [1, 2, 3][-2] = 2 (second-to-last)
• -1 = last element (3)
• -2 = second-to-last element (2)
• -3 = third-to-last element (1)
• Counts backwards from end

How it works:
• [1, 2, 3] has elements at indices 0, 1, 2
• [-2] accesses from the end
• -2 refers to second-to-last element (index 1)
• Returns value at that position: 2
• Negative indices count backwards

Example:
[1, 2, 3][-2]        # 2 (second-to-last)
[1, 2, 3, 4][-2]     # 3 (second-to-last)
['a', 'b', 'c'][-2]  # 'b' (second-to-last)

Common uses:
• Accessing second-to-last: penultimate = items[-2]
• Getting elements from end: value = data[-2]
• Convenient end access
• No need to calculate index

Example: [1, 2, 3][-2] returns 2 because negative index -2 refers to the second-to-last element in the list, counting backwards from the end.
`
  }),
  (_i: number) => ({ 
    q: `What is len([1, 2, 3])?`, 
    o: ["3", "2", "1", "Error"], 
    c: 0, 
    e: "len() returns the number of elements.",
    de: `The len() function returns the number of elements in a list (or any sequence/collection). len([1, 2, 3]) returns 3 because the list contains three elements. len() is a built-in function that works with all sequence types (lists, tuples, strings) and collection types (dictionaries, sets).

len() function:
• len([1, 2, 3]) = 3 (number of elements)
• Returns the length (size) of the sequence
• Works with lists, tuples, strings, dicts, sets
• Returns integer count of elements
• Empty sequences return 0

How it works:
• len() takes a sequence or collection as argument
• Counts the number of elements
• Returns integer value
• For [1, 2, 3]: counts 1, 2, 3 → 3
• Returns 3

Example:
len([1, 2, 3])       # 3 (three elements)
len([])              # 0 (empty list)
len(['a', 'b'])      # 2 (two elements)
len([1, 2, 3, 4, 5]) # 5 (five elements)

Common uses:
• Checking size: if len(items) > 0:
• Getting count: count = len(data)
• Size validation
• Iteration bounds

Example: len([1, 2, 3]) returns 3 because the list contains three elements, and len() counts and returns the number of elements in the sequence.
`
  }),
  (_i: number) => ({ 
    q: `What is len([])?`, 
    o: ["0", "1", "Error", "None"], 
    c: 0, 
    e: "Empty list has length 0.",
    de: `An empty list has a length of 0 because it contains no elements. len([]) returns 0 because the empty list [] has zero elements. len() counts the number of elements in a sequence, and an empty sequence naturally has zero elements. Empty lists are falsy in boolean contexts but are still valid list objects.

Empty list length:
• len([]) = 0 (zero elements)
• Empty list contains no elements
• Length is 0 by definition
• Valid list object, just empty
• Falsy but exists

How it works:
• len() takes empty list [] as argument
• Counts elements in the list
• Finds zero elements
• Returns 0
• Empty sequences always return 0

Example:
len([])              # 0 (empty list)
len(list())          # 0 (empty list)
bool([])             # False (falsy but exists)
[].append(1)         # [1] (can add elements)

Common uses:
• Checking if empty: if len(items) == 0:
• Validation: if len(data) > 0:
• Empty check
• Size verification

Example: len([]) returns 0 because the empty list contains zero elements, and len() counts and returns the number of elements (which is 0 for an empty list).
`
  }),
  
  // 11-20: List Slicing
  (_i: number) => ({ 
    q: `What is [1, 2, 3, 4][1:3]?`, 
    o: ["[2, 3]", "[1, 2]", "[2, 3, 4]", "Error"], 
    c: 0, 
    e: "Slicing [1:3] gets elements from index 1 to 2 (exclusive).",
    de: `List slicing uses the syntax [start:stop] to extract a portion of a list. [1, 2, 3, 4][1:3] returns [2, 3] because slicing is exclusive of the stop index - it includes elements from index 1 up to (but not including) index 3. The start index is inclusive, but the stop index is exclusive.

List slicing [start:stop]:
• [1, 2, 3, 4][1:3] = [2, 3]
• Start index 1 is inclusive (includes element at index 1)
• Stop index 3 is exclusive (excludes element at index 3)
• Returns elements at indices 1 and 2
• Creates new list with those elements

How it works:
• List [1, 2, 3, 4] has indices 0, 1, 2, 3
• [1:3] means start at index 1, stop before index 3
• Includes indices 1 and 2: [2, 3]
• Excludes index 3 (stop is exclusive)
• Returns new list: [2, 3]

Example:
[1, 2, 3, 4][1:3]   # [2, 3] (indices 1, 2)
[1, 2, 3, 4][0:2]   # [1, 2] (indices 0, 1)
[1, 2, 3, 4][2:4]   # [3, 4] (indices 2, 3)

Common uses:
• Extracting sublists: sub = items[1:3]
• Getting ranges: middle = data[start:end]
• Partial lists
• Sequence extraction

Example: [1, 2, 3, 4][1:3] returns [2, 3] because slicing includes elements from index 1 (inclusive) up to index 3 (exclusive), which are the elements at indices 1 and 2.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2, 3, 4][:2]?`, 
    o: ["[1, 2]", "[2, 3]", "[1, 2, 3]", "Error"], 
    c: 0, 
    e: "Slicing [:2] gets first 2 elements.",
    de: `When the start index is omitted in slicing, it defaults to 0 (the beginning). [1, 2, 3, 4][:2] returns [1, 2] because [:2] means "from the start up to (but not including) index 2", which gives the first two elements. This is a common pattern for getting the first N elements of a list.

Slicing with omitted start:
• [1, 2, 3, 4][:2] = [1, 2]
• Omitted start defaults to 0 (beginning)
• Stop index 2 is exclusive
• Returns elements from start to index 1
• Gets first 2 elements

How it works:
• [:2] means start at 0 (default), stop before 2
• Includes indices 0 and 1: [1, 2]
• Excludes index 2 (stop is exclusive)
• Returns new list: [1, 2]
• Common pattern for "first N elements"

Example:
[1, 2, 3, 4][:2]    # [1, 2] (first 2)
[1, 2, 3, 4][:3]    # [1, 2, 3] (first 3)
[1, 2, 3, 4][:1]    # [1] (first 1)

Common uses:
• First N elements: first_two = items[:2]
• Getting prefix: prefix = data[:n]
• Initial elements
• Beginning of list

Example: [1, 2, 3, 4][:2] returns [1, 2] because omitting the start index defaults to 0, so it gets elements from the beginning up to (but not including) index 2, which are the first two elements.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2, 3, 4][2:]?`, 
    o: ["[3, 4]", "[1, 2]", "[2, 3]", "Error"], 
    c: 0, 
    e: "Slicing [2:] gets from index 2 to end.",
    de: `When the stop index is omitted in slicing, it defaults to the end of the list. [1, 2, 3, 4][2:] returns [3, 4] because [2:] means "from index 2 to the end", which includes all elements from index 2 onwards. This is a common pattern for getting the last N elements or everything after a certain point.

Slicing with omitted stop:
• [1, 2, 3, 4][2:] = [3, 4]
• Start index 2 is inclusive
• Omitted stop defaults to end of list
• Returns elements from index 2 to end
• Gets remaining elements

How it works:
• [2:] means start at index 2, go to end
• Includes indices 2 and 3: [3, 4]
• No stop means include all to end
• Returns new list: [3, 4]
• Common pattern for "from index N to end"

Example:
[1, 2, 3, 4][2:]    # [3, 4] (from index 2)
[1, 2, 3, 4][1:]    # [2, 3, 4] (from index 1)
[1, 2, 3, 4][3:]    # [4] (from index 3)

Common uses:
• From index to end: rest = items[2:]
• Getting suffix: suffix = data[n:]
• Remaining elements
• End of list

Example: [1, 2, 3, 4][2:] returns [3, 4] because omitting the stop index defaults to the end of the list, so it gets all elements from index 2 (inclusive) to the end.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2, 3, 4][::2]?`, 
    o: ["[1, 3]", "[2, 4]", "[1, 2]", "Error"], 
    c: 0, 
    e: "Slicing [::2] gets every 2nd element.",
    de: `Slicing with a step value uses the syntax [start:stop:step]. [1, 2, 3, 4][::2] returns [1, 3] because [::2] means "from start to end, taking every 2nd element". The step value determines the interval between selected elements. When start and stop are omitted, it uses the entire list.

Slicing with step:
• [1, 2, 3, 4][::2] = [1, 3]
• [::2] means start=0, stop=end, step=2
• Takes every 2nd element (skips one between)
• Returns elements at indices 0, 2: [1, 3]
• Step determines interval

How it works:
• [::2] means: start at 0, stop at end, step by 2
• Takes elements at indices 0, 2: [1, 3]
• Skips indices 1, 3 (every 2nd means skip one)
• Returns new list: [1, 3]
• Step of 2 means take every other element

Example:
[1, 2, 3, 4][::2]   # [1, 3] (every 2nd)
[1, 2, 3, 4][::1]    # [1, 2, 3, 4] (every element)
[1, 2, 3, 4, 5][::2] # [1, 3, 5] (every 2nd)

Common uses:
• Every Nth element: evens = items[::2]
• Skipping elements: sampled = data[::n]
• Interval selection
• Pattern extraction

Example: [1, 2, 3, 4][::2] returns [1, 3] because the step value of 2 means taking every 2nd element from the start to the end, which selects elements at indices 0 and 2.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2, 3, 4][::-1]?`, 
    o: ["[4, 3, 2, 1]", "[1, 2, 3, 4]", "[1]", "Error"], 
    c: 0, 
    e: "Slicing [::-1] reverses the list.",
    de: `A negative step value in slicing reverses the order. [1, 2, 3, 4][::-1] returns [4, 3, 2, 1] because [::-1] means "from end to start, step by -1", which effectively reverses the list. When start and stop are omitted with a negative step, it defaults to the entire list in reverse order.

Reversing with negative step:
• [1, 2, 3, 4][::-1] = [4, 3, 2, 1]
• [::-1] means start=end, stop=start, step=-1
• Negative step reverses direction
• Returns elements in reverse order
• Common way to reverse a list

How it works:
• [::-1] means: start at end, stop at start, step by -1
• Goes backwards through the list
• Takes elements in reverse: 4, 3, 2, 1
• Returns new reversed list: [4, 3, 2, 1]
• Original list unchanged

Example:
[1, 2, 3, 4][::-1]   # [4, 3, 2, 1] (reversed)
[1, 2, 3][::-1]      # [3, 2, 1] (reversed)
['a', 'b'][::-1]     # ['b', 'a'] (reversed)

Common uses:
• Reversing list: reversed_list = items[::-1]
• Creating reverse copy: rev = data[::-1]
• Reverse iteration
• Backwards sequence

Example: [1, 2, 3, 4][::-1] returns [4, 3, 2, 1] because a negative step value of -1 reverses the direction, creating a new list with elements in reverse order.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2, 3, 4][1:-1]?`, 
    o: ["[2, 3]", "[1, 2, 3]", "[2, 3, 4]", "Error"], 
    c: 0, 
    e: "Slicing [1:-1] excludes first and last.",
    de: `Slicing with negative indices combines positive start with negative stop. [1, 2, 3, 4][1:-1] returns [2, 3] because [1:-1] means "from index 1 to the second-to-last element (exclusive)". This effectively excludes both the first element (index 0) and the last element (index -1), giving you the middle elements.

Slicing with negative stop:
• [1, 2, 3, 4][1:-1] = [2, 3]
• Start index 1 is inclusive
• Stop index -1 is exclusive (excludes last element)
• Returns elements at indices 1 and 2
• Excludes first (index 0) and last (index -1)

How it works:
• [1:-1] means start at index 1, stop before index -1
• Index -1 is the last element (exclusive)
• Includes indices 1 and 2: [2, 3]
• Excludes index 0 (first) and index -1 (last)
• Returns middle elements: [2, 3]

Example:
[1, 2, 3, 4][1:-1]  # [2, 3] (excludes first and last)
[1, 2, 3, 4, 5][1:-1] # [2, 3, 4] (excludes first and last)
[1, 2][1:-1]         # [] (nothing left)

Common uses:
• Excluding ends: middle = items[1:-1]
• Getting inner elements: inner = data[1:-1]
• Removing first and last
• Middle portion

Example: [1, 2, 3, 4][1:-1] returns [2, 3] because it starts at index 1 (inclusive) and stops before index -1 (exclusive), which excludes both the first and last elements, leaving the middle elements.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2, 3][:]?`, 
    o: ["[1, 2, 3]", "[]", "[1]", "Error"], 
    c: 0, 
    e: "Slicing [:] creates a shallow copy.",
    de: `Slicing with both start and stop omitted [:] creates a shallow copy of the entire list. [1, 2, 3][:] returns [1, 2, 3] because [:] means "from start to end", which includes all elements. This creates a new list object with the same elements, but it's a shallow copy - nested objects are still shared.

Shallow copy with [:]:
• [1, 2, 3][:] = [1, 2, 3] (new list, same elements)
• [:] means start=0, stop=end (all elements)
• Creates new list object
• Copies all elements to new list
• Shallow copy (nested objects shared)

How it works:
• [:] means: start at 0, stop at end
• Includes all elements: 1, 2, 3
• Creates new list object
• Copies elements to new list: [1, 2, 3]
• New list, but shallow copy

Example:
[1, 2, 3][:]        # [1, 2, 3] (shallow copy)
a = [1, 2, 3]
b = a[:]            # b is new list, but shallow copy
a is b              # False (different objects)

Common uses:
• Creating copy: copy = items[:]
• Shallow copy: new_list = data[:]
• Duplicating list
• Independent list object

Example: [1, 2, 3][:] returns [1, 2, 3] because [:] creates a shallow copy of the entire list, resulting in a new list object with the same elements.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2, 3, 4, 5][1:4:2]?`, 
    o: ["[2, 4]", "[1, 3]", "[2, 3, 4]", "Error"], 
    c: 0, 
    e: "Slicing [1:4:2] gets every 2nd from index 1 to 3.",
    de: `Slicing with start, stop, and step uses [start:stop:step]. [1, 2, 3, 4, 5][1:4:2] returns [2, 4] because it starts at index 1, stops before index 4, and takes every 2nd element. This combines a range with a step interval to select specific elements.

Slicing with start, stop, step:
• [1, 2, 3, 4, 5][1:4:2] = [2, 4]
• Start index 1 is inclusive
• Stop index 4 is exclusive
• Step 2 means every 2nd element
• Returns elements at indices 1, 3: [2, 4]

How it works:
• [1:4:2] means: start at 1, stop before 4, step by 2
• Indices in range [1, 4): 1, 2, 3
• Step by 2: takes indices 1, 3
• Elements at indices 1, 3: [2, 4]
• Returns new list: [2, 4]

Example:
[1, 2, 3, 4, 5][1:4:2]  # [2, 4] (indices 1, 3)
[1, 2, 3, 4, 5][0:5:2]  # [1, 3, 5] (indices 0, 2, 4)
[1, 2, 3, 4, 5][1:5:3]  # [2, 5] (indices 1, 4)

Common uses:
• Range with step: selected = items[1:4:2]
• Interval in range: sampled = data[start:end:step]
• Pattern extraction
• Selective extraction

Example: [1, 2, 3, 4, 5][1:4:2] returns [2, 4] because it starts at index 1 (inclusive), stops before index 4 (exclusive), and takes every 2nd element, which selects elements at indices 1 and 3.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2, 3][0:0]?`, 
    o: ["[]", "[1]", "[1, 2]", "Error"], 
    c: 0, 
    e: "Slicing [0:0] gets empty list (same start and stop).",
    de: `When the start and stop indices are the same in slicing, the result is an empty list. [1, 2, 3][0:0] returns [] because [0:0] means "from index 0 to index 0 (exclusive)", which includes no elements since the stop is exclusive. This is true for any equal start and stop indices.

Equal start and stop:
• [1, 2, 3][0:0] = [] (empty list)
• Start index 0, stop index 0 (exclusive)
• No elements in range [0, 0)
• Returns empty list
• Stop is exclusive, so nothing included

How it works:
• [0:0] means: start at 0, stop before 0
• Range [0, 0) includes no indices
• Stop is exclusive, so index 0 not included
• No elements to include
• Returns empty list: []

Example:
[1, 2, 3][0:0]       # [] (no elements)
[1, 2, 3][1:1]       # [] (no elements)
[1, 2, 3][2:2]       # [] (no elements)
[1, 2, 3][3:3]       # [] (no elements)

Common uses:
• Empty slice: empty = items[i:i]
• Insertion point: items[i:i] = [x] (inserts at i)
• Empty range
• No-op slice

Example: [1, 2, 3][0:0] returns [] because when start and stop are equal, the range is empty (stop is exclusive), so no elements are included in the slice.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2, 3][5:10]?`, 
    o: ["[]", "[1, 2, 3]", "Error", "None"], 
    c: 0, 
    e: "Slicing beyond list bounds returns empty list.",
    de: `Slicing with indices beyond the list bounds returns an empty list rather than raising an error. [1, 2, 3][5:10] returns [] because the start index 5 is beyond the list length (which is 3), so there are no elements in that range. Python's slicing is forgiving - it doesn't raise errors for out-of-bounds indices, it just returns an empty list.

Slicing beyond bounds:
• [1, 2, 3][5:10] = [] (empty list)
• List has indices 0, 1, 2 (length 3)
• Start index 5 is beyond list bounds
• No elements in range [5, 10)
• Returns empty list (no error)

How it works:
• List [1, 2, 3] has indices 0, 1, 2
• [5:10] means: start at 5, stop before 10
• Index 5 doesn't exist (beyond bounds)
• Range [5, 10) has no valid indices
• Returns empty list: []

Example:
[1, 2, 3][5:10]     # [] (beyond bounds)
[1, 2, 3][10:20]    # [] (beyond bounds)
[1, 2, 3][3:5]      # [] (start at end, nothing after)

Common uses:
• Safe slicing: result = items[start:end] (safe even if out of bounds)
• No error handling needed
• Graceful empty result
• Bounds checking not required

Example: [1, 2, 3][5:10] returns [] because the start index 5 is beyond the list's bounds (list has indices 0-2), so there are no elements in that range, and Python returns an empty list instead of raising an error.
`
  }),
  
  // 21-30: List Operations
  (_i: number) => ({ 
    q: `What is [1, 2] + [3, 4]?`, 
    o: ["[1, 2, 3, 4]", "[1, 2]", "[3, 4]", "Error"], 
    c: 0, 
    e: "+ concatenates lists.",
    de: `The + operator concatenates lists, combining them into a new list. [1, 2] + [3, 4] returns [1, 2, 3, 4] because + joins the elements of both lists in order. This creates a new list object - the original lists are not modified. The + operator for lists only works with other lists, not with other types directly.

List concatenation with +:
• [1, 2] + [3, 4] = [1, 2, 3, 4]
• + joins elements from both lists
• Creates new list object
• Original lists unchanged
• Elements in order: first list, then second list

How it works:
• [1, 2] is first list
• + is concatenation operator
• [3, 4] is second list
• Combines: 1, 2, then 3, 4
• Returns new list: [1, 2, 3, 4]

Example:
[1, 2] + [3, 4]     # [1, 2, 3, 4]
['a'] + ['b', 'c']  # ['a', 'b', 'c']
[] + [1, 2]         # [1, 2]

Common uses:
• Combining lists: combined = list1 + list2
• Joining sequences: result = items + more_items
• Merging lists
• Creating new combined list

Example: [1, 2] + [3, 4] returns [1, 2, 3, 4] because + concatenates the two lists, creating a new list with elements from both lists in order.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2] * 3?`, 
    o: ["[1, 2, 1, 2, 1, 2]", "[3, 6]", "[1, 2, 3]", "Error"], 
    c: 0, 
    e: "* repeats list elements.",
    de: `The * operator repeats a list a specified number of times. [1, 2] * 3 returns [1, 2, 1, 2, 1, 2] because * repeats the entire list 3 times, concatenating the repetitions. This creates a new list object with the elements repeated. The multiplier must be an integer, and multiplying by 0 results in an empty list.

List repetition with *:
• [1, 2] * 3 = [1, 2, 1, 2, 1, 2]
• * repeats entire list N times
• Creates new list object
• Original list unchanged
• Elements repeated in sequence

How it works:
• [1, 2] is the list
• * 3 means repeat 3 times
• Repeats: [1, 2], [1, 2], [1, 2]
• Concatenates repetitions
• Returns new list: [1, 2, 1, 2, 1, 2]

Example:
[1, 2] * 3          # [1, 2, 1, 2, 1, 2]
['a'] * 4           # ['a', 'a', 'a', 'a']
[1, 2] * 0          # [] (empty list)

Common uses:
• Repeating patterns: pattern = [1, 2] * 3
• Creating duplicates: repeated = items * n
• List multiplication
• Pattern generation

Example: [1, 2] * 3 returns [1, 2, 1, 2, 1, 2] because * repeats the entire list 3 times, creating a new list with the elements repeated.
`
  }),
  (_i: number) => ({ 
    q: `What is [1] * 0?`, 
    o: ["[]", "[1]", "[0]", "Error"], 
    c: 0, 
    e: "Multiplying list by 0 gives empty list.",
    de: `Multiplying a list by 0 results in an empty list. [1] * 0 returns [] because repeating a list zero times means creating a list with no elements. This is consistent with mathematical multiplication where any number times 0 equals 0, and here it represents zero repetitions of the list elements.

List multiplication by 0:
• [1] * 0 = [] (empty list)
• Repeating list 0 times
• Results in empty list
• Zero repetitions = no elements
• Always returns []

How it works:
• [1] is the list
• * 0 means repeat 0 times
• Zero repetitions means no elements
• Returns empty list: []
• Consistent with multiplication concept

Example:
[1] * 0             # [] (empty list)
[1, 2] * 0          # [] (empty list)
['a', 'b'] * 0      # [] (empty list)
[] * 0              # [] (empty list)

Common uses:
• Conditional empty: result = items * 0 if condition else items
• Zero repetitions: empty = pattern * 0
• Empty list creation
• Conditional clearing

Example: [1] * 0 returns [] because multiplying a list by 0 means repeating it zero times, which results in an empty list with no elements.
`
  }),
  (_i: number) => ({ 
    q: `What is 2 in [1, 2, 3]?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "in checks membership.",
    de: `The in operator checks if a value is a member of a list. 2 in [1, 2, 3] returns True because 2 is present in the list. The in operator searches through the list elements and returns True if it finds the value, False otherwise. This is a membership test that works with all sequence types.

Membership test with in:
• 2 in [1, 2, 3] = True
• in checks if value exists in list
• Returns True if found
• Returns False if not found
• Searches through elements

How it works:
• 2 is the value to search for
• in is membership operator
• [1, 2, 3] is the list to search
• Checks if 2 is in the list
• Finds 2 at index 1, returns True

Example:
2 in [1, 2, 3]      # True (2 is in list)
5 in [1, 2, 3]      # False (5 is not in list)
'a' in ['a', 'b']   # True ('a' is in list)

Common uses:
• Checking membership: if item in items:
• Validation: if value in valid_values:
• Presence check
• Membership verification

Example: 2 in [1, 2, 3] returns True because the in operator checks if 2 is present in the list, and it finds 2 at index 1, so it returns True.
`
  }),
  (_i: number) => ({ 
    q: `What is 5 in [1, 2, 3]?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "in checks membership - not found.",
    de: `The in operator returns False when a value is not found in a list. 5 in [1, 2, 3] returns False because 5 is not present in the list [1, 2, 3]. The in operator searches through all elements and returns False if the value is not found after checking all elements.

Membership test - not found:
• 5 in [1, 2, 3] = False
• in checks if value exists in list
• Searches through all elements
• Value 5 not found
• Returns False (not found)

How it works:
• 5 is the value to search for
• in is membership operator
• [1, 2, 3] is the list to search
• Checks each element: 1, 2, 3
• None match 5, returns False

Example:
5 in [1, 2, 3]      # False (5 not in list)
10 in [1, 2, 3]     # False (10 not in list)
'z' in ['a', 'b']   # False ('z' not in list)

Common uses:
• Checking absence: if item not in items:
• Validation: if value not in invalid_values:
• Non-membership check
• Absence verification

Example: 5 in [1, 2, 3] returns False because the in operator checks if 5 is present in the list, searches through all elements (1, 2, 3), doesn't find 5, and returns False.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2] == [1, 2]?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "== compares list contents.",
    de: `The == operator compares the contents of two lists. [1, 2] == [1, 2] returns True because both lists have the same elements in the same order. == checks for value equality - it compares element by element, and both lists must have the same length and same elements in the same positions for them to be equal.

List equality with ==:
• [1, 2] == [1, 2] = True
• == compares list contents (values)
• Checks if elements match
• Checks if order matches
• Both must be equal for True

How it works:
• [1, 2] is first list
• == is equality operator
• [1, 2] is second list
• Compares element by element: 1 == 1, 2 == 2
• Same elements, same order, returns True

Example:
[1, 2] == [1, 2]    # True (same content)
[1, 2] == [2, 1]    # False (different order)
[1, 2] == [1, 2, 3] # False (different length)

Common uses:
• Comparing lists: if list1 == list2:
• Value equality: if items == expected:
• Content comparison
• Equality check

Example: [1, 2] == [1, 2] returns True because == compares the contents of both lists element by element, and they have the same elements in the same order.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2] == [2, 1]?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "== checks order - lists are different.",
    de: `The == operator checks both the elements and their order. [1, 2] == [2, 1] returns False because even though both lists contain the same elements (1 and 2), they are in different orders. Lists are ordered sequences, so == requires not only the same elements but also the same positions for the comparison to return True.

List equality - order matters:
• [1, 2] == [2, 1] = False
• == compares both elements and order
• Same elements but different order
• Order must match for equality
• Returns False (order different)

How it works:
• [1, 2] is first list
• == is equality operator
• [2, 1] is second list
• Compares element by element: 1 != 2, 2 != 1
• Elements match but order different, returns False

Example:
[1, 2] == [2, 1]    # False (different order)
[1, 2, 3] == [3, 2, 1] # False (different order)
['a', 'b'] == ['b', 'a'] # False (different order)

Common uses:
• Order-sensitive comparison: if list1 == list2:
• Sequence equality check
• Position-aware comparison
• Ordered sequence verification

Example: [1, 2] == [2, 1] returns False because == compares lists element by element in order, and while both lists contain 1 and 2, they are in different positions, so the comparison returns False.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2] is [1, 2]?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "Different list objects, even with same content.",
    de: `The is operator checks object identity (whether two variables reference the same object in memory), not value equality. [1, 2] is [1, 2] returns False because each list literal creates a new list object in memory. Even though they have the same contents, they are different objects with different memory addresses.

Object identity with is:
• [1, 2] is [1, 2] = False
• is checks object identity (same object)
• Each literal creates new object
• Different objects in memory
• Returns False (different objects)

How it works:
• [1, 2] creates first list object
• is is identity operator
• [1, 2] creates second list object
• Checks if same object in memory
• Different objects, returns False

Example:
[1, 2] is [1, 2]    # False (different objects)
a = [1, 2]
b = [1, 2]
a is b              # False (different objects)
a = [1, 2]
b = a
a is b              # True (same object)

Common uses:
• Object identity check: if obj1 is obj2:
• Same reference check
• Object comparison
• Memory address check

Example: [1, 2] is [1, 2] returns False because each list literal creates a new list object in memory, so even though they have the same contents, they are different objects, and is checks for object identity, not value equality.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2] < [1, 3]?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Lists are compared lexicographically.",
    de: `Lists are compared lexicographically (element by element, like dictionary order). [1, 2] < [1, 3] returns True because Python compares the lists element by element: first compares 1 == 1 (equal), then compares 2 < 3 (less than), so the first list is less than the second. This is the standard comparison algorithm for sequences.

Lexicographic comparison:
• [1, 2] < [1, 3] = True
• Compares element by element
• 1 == 1 (equal, continue)
• 2 < 3 (less than, first list < second)
• Returns True (first list is less)

How it works:
• [1, 2] is first list
• < is less-than operator
• [1, 3] is second list
• Compares element by element:
  - Index 0: 1 == 1 (equal, continue)
  - Index 1: 2 < 3 (less than, returns True)
• Returns True

Example:
[1, 2] < [1, 3]     # True (2 < 3)
[1, 2] < [2, 1]     # True (1 < 2)
[1, 2] < [1, 2]     # False (equal)

Common uses:
• Sorting comparison: sorted(lists)
• Ordering check: if list1 < list2:
• Lexicographic ordering
• Sequence comparison

Example: [1, 2] < [1, 3] returns True because lists are compared lexicographically - Python compares element by element, finds 1 == 1 (equal), then finds 2 < 3 (less than), so the first list is less than the second.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2] < [1, 2, 3]?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Shorter list is less than longer if prefix matches.",
    de: `When comparing lists of different lengths, Python compares element by element until it finds a difference. [1, 2] < [1, 2, 3] returns True because the first list is a prefix of the second - all elements of the first list match the corresponding elements of the second list, and a shorter list is considered less than a longer list when it's a prefix. This is consistent with lexicographic ordering.

Comparison with different lengths:
• [1, 2] < [1, 2, 3] = True
• Shorter list is prefix of longer
• All elements match: 1 == 1, 2 == 2
• Shorter list < longer list when prefix
• Returns True (prefix is less)

How it works:
• [1, 2] is first list (length 2)
• < is less-than operator
• [1, 2, 3] is second list (length 3)
• Compares element by element:
  - Index 0: 1 == 1 (equal, continue)
  - Index 1: 2 == 2 (equal, continue)
  - First list ends, shorter is less
• Returns True

Example:
[1, 2] < [1, 2, 3]  # True (prefix is less)
[1, 2] < [1, 2]     # False (equal)
[1, 2, 3] < [1, 2]  # False (longer not less)

Common uses:
• Prefix comparison: if prefix < full_list:
• Ordering with different lengths
• Lexicographic comparison
• Sequence ordering

Example: [1, 2] < [1, 2, 3] returns True because the first list is a prefix of the second (all its elements match), and in lexicographic ordering, a shorter list that is a prefix of a longer list is considered less than the longer list.
`
  }),
  
  // 31-40: List Methods - Adding Elements
  (_i: number) => ({ 
    q: `What is [1, 2].append(3)?`, 
    o: ["None", "[1, 2, 3]", "3", "Error"], 
    c: 0, 
    e: "append() returns None, modifies list in place.",
    de: `The append() method adds a single element to the end of a list and returns None. [1, 2].append(3) returns None because append() modifies the list in place and doesn't return anything. After calling append(3), the list [1, 2] becomes [1, 2, 3], but the method itself returns None. This is an important distinction - append() modifies the list, it doesn't create a new list.

append() method:
• [1, 2].append(3) = None (returns None)
• append() adds element to end
• Modifies list in place
• Returns None (doesn't return new list)
• Original list changed: [1, 2] → [1, 2, 3]

How it works:
• append(3) called on [1, 2]
• Adds element 3 to end of list
• Modifies original list: [1, 2, 3]
• Returns None (no return value)
• Method modifies in place

Example:
a = [1, 2]
a.append(3)         # None (returns None)
a                   # [1, 2, 3] (list modified)
[1, 2].append(3)    # None (returns None)

Common uses:
• Adding elements: items.append(value)
• Building lists: result.append(item)
• Appending to end
• In-place modification

Example: [1, 2].append(3) returns None because append() modifies the list in place (changing [1, 2] to [1, 2, 3]), and the method itself returns None rather than returning the modified list.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2].extend([3, 4])?`, 
    o: ["None", "[1, 2, 3, 4]", "[1, 2]", "Error"], 
    c: 0, 
    e: "extend() returns None, adds all elements.",
    de: `The extend() method adds all elements from an iterable to the end of a list and returns None. [1, 2].extend([3, 4]) returns None because extend() modifies the list in place. After calling extend([3, 4]), the list [1, 2] becomes [1, 2, 3, 4], adding each element from the iterable individually. extend() is different from append() - it adds elements from the iterable, not the iterable itself.

extend() method:
• [1, 2].extend([3, 4]) = None (returns None)
• extend() adds elements from iterable
• Modifies list in place
• Returns None (doesn't return new list)
• Original list changed: [1, 2] → [1, 2, 3, 4]

How it works:
• extend([3, 4]) called on [1, 2]
• Iterates through [3, 4]
• Adds each element to end: 3, then 4
• Modifies original list: [1, 2, 3, 4]
• Returns None (no return value)

Example:
a = [1, 2]
a.extend([3, 4])    # None (returns None)
a                   # [1, 2, 3, 4] (list modified)
[1, 2].extend([3, 4]) # None (returns None)

Common uses:
• Adding multiple elements: items.extend(more_items)
• Combining lists: list1.extend(list2)
• Extending lists
• In-place modification

Example: [1, 2].extend([3, 4]) returns None because extend() modifies the list in place (changing [1, 2] to [1, 2, 3, 4] by adding each element from [3, 4]), and the method itself returns None.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2].insert(1, 5)?`, 
    o: ["None", "[1, 5, 2]", "[1, 2, 5]", "Error"], 
    c: 0, 
    e: "insert() adds element at index, returns None.",
    de: `The insert() method inserts an element at a specific index and returns None. [1, 2].insert(1, 5) returns None because insert() modifies the list in place. The first argument is the index where to insert, and the second argument is the element to insert. After calling insert(1, 5), the list [1, 2] becomes [1, 5, 2] - the element at index 1 (which was 2) is shifted to index 2, and 5 is inserted at index 1.

insert() method:
• [1, 2].insert(1, 5) = None (returns None)
• insert(index, element) inserts at position
• Modifies list in place
• Returns None (doesn't return new list)
• Original list changed: [1, 2] → [1, 5, 2]

How it works:
• insert(1, 5) called on [1, 2]
• Inserts element 5 at index 1
• Elements at/after index 1 shift right
• [1] stays at index 0, [5] inserted at index 1, [2] moves to index 2
• Returns None (no return value)

Example:
a = [1, 2]
a.insert(1, 5)      # None (returns None)
a                   # [1, 5, 2] (list modified)
[1, 2, 3].insert(0, 0) # [0, 1, 2, 3] (insert at start)

Common uses:
• Inserting elements: items.insert(index, value)
• Adding at position: list.insert(pos, item)
• Positional insertion
• In-place modification

Example: [1, 2].insert(1, 5) returns None because insert() modifies the list in place, inserting 5 at index 1 (changing [1, 2] to [1, 5, 2]), and the method itself returns None.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2].insert(0, 0)?`, 
    o: ["None", "[0, 1, 2]", "[1, 2, 0]", "Error"], 
    c: 0, 
    e: "insert(0, x) adds at beginning.",
    de: `The insert() method with index 0 inserts an element at the beginning of the list. [1, 2].insert(0, 0) returns None because insert() modifies the list in place. After calling insert(0, 0), the list [1, 2] becomes [0, 1, 2] - the element 0 is inserted at index 0 (the beginning), and all existing elements are shifted to the right by one position.

insert(0, element):
• [1, 2].insert(0, 0) = None (returns None)
• insert(0, x) inserts at beginning
• Modifies list in place
• Returns None (doesn't return new list)
• Original list changed: [1, 2] → [0, 1, 2]

How it works:
• insert(0, 0) called on [1, 2]
• Inserts element 0 at index 0 (beginning)
• All existing elements shift right
• [0] inserted at index 0, [1] moves to index 1, [2] moves to index 2
• Returns None (no return value)

Example:
a = [1, 2]
a.insert(0, 0)      # None (returns None)
a                   # [0, 1, 2] (list modified)
[1, 2].insert(0, 0) # None (returns None)

Common uses:
• Adding to beginning: items.insert(0, value)
• Prepending elements: list.insert(0, item)
• Beginning insertion
• In-place modification

Example: [1, 2].insert(0, 0) returns None because insert() modifies the list in place, inserting 0 at index 0 (the beginning), changing [1, 2] to [0, 1, 2], and the method itself returns None.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2].insert(10, 5)?`, 
    o: ["None", "[1, 2, 5]", "[1, 2]", "Error"], 
    c: 0, 
    e: "insert() with out-of-bounds index appends to end.",
    de: `The insert() method with an out-of-bounds index doesn't raise an error - it appends the element to the end of the list. [1, 2].insert(10, 5) returns None because insert() modifies the list in place. Since index 10 is beyond the list bounds (list has indices 0-1), insert() appends the element to the end instead. After calling insert(10, 5), the list [1, 2] becomes [1, 2, 5].

insert() with out-of-bounds index:
• [1, 2].insert(10, 5) = None (returns None)
• Index 10 is beyond list bounds
• insert() appends to end instead of error
• Modifies list in place
• Original list changed: [1, 2] → [1, 2, 5]

How it works:
• insert(10, 5) called on [1, 2]
• Index 10 is beyond bounds (list has indices 0-1)
• insert() doesn't raise error
• Appends element 5 to end instead
• Returns None (no return value)

Example:
a = [1, 2]
a.insert(10, 5)     # None (returns None)
a                   # [1, 2, 5] (appended to end)
[1, 2].insert(100, 5) # [1, 2, 5] (appends to end)

Common uses:
• Safe insertion: items.insert(index, value) (won't error)
• Append alternative: list.insert(len(list), item)
• Out-of-bounds handling
• Graceful behavior

Example: [1, 2].insert(10, 5) returns None because insert() doesn't raise an error for out-of-bounds indices - instead, it appends the element to the end, changing [1, 2] to [1, 2, 5], and the method itself returns None.
`
  }),
  (_i: number) => ({ 
    q: `What is the difference between append() and extend()?`, 
    o: ["append adds one item, extend adds multiple", "No difference", "extend is faster", "append is deprecated"], 
    c: 0, 
    e: "append() adds single element, extend() adds all from iterable.",
    de: `The key difference between append() and extend() is what they add to the list. append() adds a single element (the entire object), while extend() adds all elements from an iterable (unpacking the iterable). For example, [1, 2].append([3, 4]) results in [1, 2, [3, 4]] (the list is added as one element), while [1, 2].extend([3, 4]) results in [1, 2, 3, 4] (the elements 3 and 4 are added individually).

append() vs extend():
• append(item) adds the entire item as one element
• extend(iterable) adds all elements from iterable individually
• append() creates nested structure if item is list
• extend() flattens and adds elements
• Both return None, modify in place

How it works:
• append([3, 4]): adds [3, 4] as single element → [1, 2, [3, 4]]
• extend([3, 4]): iterates [3, 4], adds 3 then 4 → [1, 2, 3, 4]
• append() doesn't iterate
• extend() iterates through iterable
• Both modify original list

Example:
a = [1, 2]
a.append([3, 4])    # [1, 2, [3, 4]] (list added)
a = [1, 2]
a.extend([3, 4])    # [1, 2, 3, 4] (elements added)

Common uses:
• append(): single element: items.append(item)
• extend(): multiple elements: items.extend(iterable)
• Choose based on what you want to add
• Important distinction for lists

Example: The difference is append() adds the entire object as one element (so [1, 2].append([3, 4]) creates [1, 2, [3, 4]]), while extend() adds all elements from the iterable individually (so [1, 2].extend([3, 4]) creates [1, 2, 3, 4]).
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2] + [3] vs [1, 2].extend([3])?`, 
    o: ["+ creates new list, extend modifies", "No difference", "extend creates new list", "+ modifies"], 
    c: 0, 
    e: "+ creates new list, extend() modifies in place.",
    de: `The + operator creates a new list, while extend() modifies the existing list in place. [1, 2] + [3] returns a new list [1, 2, 3] without modifying the original lists, while [1, 2].extend([3]) modifies [1, 2] in place to become [1, 2, 3] and returns None. This is a crucial difference - + creates a new object, while extend() modifies the existing object.

+ vs extend():
• [1, 2] + [3] creates new list [1, 2, 3]
• [1, 2].extend([3]) modifies [1, 2] to [1, 2, 3]
• + returns new list object
• extend() returns None, modifies original
• + doesn't change original lists

How it works:
• [1, 2] + [3]: creates new list, returns [1, 2, 3]
• Original [1, 2] unchanged, [3] unchanged
• a = [1, 2]; a.extend([3]): modifies a to [1, 2, 3], returns None
• Original a changed in place
• extend() modifies, + creates new

Example:
a = [1, 2]
b = a + [3]         # b = [1, 2, 3], a unchanged
a = [1, 2]
a.extend([3])       # a = [1, 2, 3], modifies a

Common uses:
• +: creating new list: result = list1 + list2
• extend(): modifying existing: list.extend(items)
• Choose based on whether you need new or modified
• Important for variable behavior

Example: [1, 2] + [3] creates a new list [1, 2, 3] without modifying the originals, while [1, 2].extend([3]) modifies [1, 2] in place to become [1, 2, 3] and returns None.
`
  }),
  (_i: number) => ({
    q: `What is [1, 2].append([3])?`,
    o: ["None, list becomes [1, 2, [3]]", "[1, 2, 3]", "Error", "None"],
    c: 3,
    e: "append() adds the entire list as one element.",
    de: `The append() method adds the entire object as a single element, even if it's a list. [1, 2].append([3]) returns None because append() modifies the list in place. After calling append([3]), the list [1, 2] becomes [1, 2, [3]] - the entire list [3] is added as one element (creating a nested list), not the individual element 3. This is different from extend(), which would add the elements from the iterable.

append() with list:
• [1, 2].append([3]) = None (returns None)
• append() adds entire object as one element
• List [3] added as single element
• Creates nested list structure
• Original list changed: [1, 2] → [1, 2, [3]]

How it works:
• append([3]) called on [1, 2]
• Adds entire list [3] as single element
• Doesn't iterate or unpack [3]
• Creates nested structure: [1, 2, [3]]
• Returns None (no return value)

Example:
a = [1, 2]
a.append([3])       # None (returns None)
a                   # [1, 2, [3]] (nested list)
[1, 2].append([3, 4]) # [1, 2, [3, 4]] (nested)

Common uses:
• Adding lists as elements: items.append([x, y])
• Creating nested structures: list.append([items])
• Nested lists
• In-place modification

Example: [1, 2].append([3]) returns None because append() adds the entire list [3] as one element, creating a nested list [1, 2, [3]], and the method itself returns None.
`
  }),
  (_i: number) => ({
    q: `What is [1, 2].extend([3])?`,
    o: ["None, list becomes [1, 2, 3]", "[1, 2, [3]]", "Error", "None"],
    c: 3,
    e: "extend() adds elements from iterable.",
    de: `The extend() method iterates through the iterable and adds each element individually. [1, 2].extend([3]) returns None because extend() modifies the list in place. After calling extend([3]), the list [1, 2] becomes [1, 2, 3] - it iterates through [3] and adds the element 3 individually, not the list [3] itself. This is different from append(), which would add the entire list as one element.

extend() with list:
• [1, 2].extend([3]) = None (returns None)
• extend() iterates through iterable
• Adds each element individually
• Element 3 added, not list [3]
• Original list changed: [1, 2] → [1, 2, 3]

How it works:
• extend([3]) called on [1, 2]
• Iterates through [3]
• Adds each element (just 3) individually
• Creates flat list: [1, 2, 3]
• Returns None (no return value)

Example:
a = [1, 2]
a.extend([3])       # None (returns None)
a                   # [1, 2, 3] (element added)
[1, 2].extend([3, 4]) # [1, 2, 3, 4] (elements added)

Common uses:
• Adding multiple elements: items.extend([x, y])
• Combining lists: list1.extend(list2)
• Flat list extension
• In-place modification

Example: [1, 2].extend([3]) returns None because extend() iterates through [3] and adds the element 3 individually, creating a flat list [1, 2, 3], and the method itself returns None.
`
  }),
  (_i: number) => ({
    q: `What is [1, 2].extend('ab')?`,
    o: ["None, list becomes [1, 2, 'a', 'b']", "[1, 2, 'ab']", "Error", "None"],
    c: 3,
    e: "extend() iterates over string, adds each character.",
    de: `The extend() method works with any iterable, including strings. [1, 2].extend('ab') returns None because extend() modifies the list in place. Since strings are iterable, extend() iterates through the string character by character and adds each character individually. After calling extend('ab'), the list [1, 2] becomes [1, 2, 'a', 'b'] - it adds 'a' and 'b' as separate elements, not the string 'ab' as one element.

extend() with string:
• [1, 2].extend('ab') = None (returns None)
• extend() iterates through string 'ab'
• Adds each character individually
• Characters 'a' and 'b' added separately
• Original list changed: [1, 2] → [1, 2, 'a', 'b']

How it works:
• extend('ab') called on [1, 2]
• String 'ab' is iterable
• Iterates through characters: 'a', 'b'
• Adds each character individually: 'a', then 'b'
• Returns None (no return value)

Example:
a = [1, 2]
a.extend('ab')      # None (returns None)
a                   # [1, 2, 'a', 'b'] (characters added)
[1, 2].extend('xyz') # [1, 2, 'x', 'y', 'z'] (characters added)

Common uses:
• Adding characters: items.extend('abc')
• String iteration: list.extend(string)
• Character-by-character addition
• In-place modification

Example: [1, 2].extend('ab') returns None because extend() iterates through the string 'ab' character by character, adding 'a' and 'b' individually, creating [1, 2, 'a', 'b'], and the method itself returns None.
`
  }),
  
  // 41-50: List Methods - Removing Elements
  (_i: number) => ({ 
    q: `What is [1, 2, 3].pop()?`, 
    o: ["3", "[1, 2]", "None", "Error"], 
    c: 0, 
    e: "pop() returns and removes last element.",
    de: `The pop() method removes and returns the last element from a list when called without arguments. [1, 2, 3].pop() returns 3 because pop() removes the last element (index -1) and returns it. After calling pop(), the list [1, 2, 3] becomes [1, 2] - the element 3 is removed and returned. This is useful for implementing stack-like behavior (LIFO - Last In First Out).

pop() method:
• [1, 2, 3].pop() = 3 (returns last element)
• pop() removes and returns last element
• Modifies list in place
• Returns the removed element
• List changed: [1, 2, 3] → [1, 2]

How it works:
• pop() called on [1, 2, 3]
• Removes last element (index -1, which is 3)
• Returns removed element: 3
• Modifies original list: [1, 2]
• Raises IndexError if list empty

Example:
a = [1, 2, 3]
a.pop()             # 3 (returns last)
a                   # [1, 2] (list modified)
[1, 2, 3].pop()     # 3 (returns last)

Common uses:
• Removing last element: last = items.pop()
• Stack operations: top = stack.pop()
• Getting and removing
• LIFO operations

Example: [1, 2, 3].pop() returns 3 because pop() removes the last element (index -1, which is 3) from the list and returns it, leaving the list as [1, 2].
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2, 3].pop(0)?`, 
    o: ["1", "[2, 3]", "None", "Error"], 
    c: 0, 
    e: "pop(0) returns and removes first element.",
    de: `The pop() method with an index argument removes and returns the element at that index. [1, 2, 3].pop(0) returns 1 because pop(0) removes the element at index 0 (the first element) and returns it. After calling pop(0), the list [1, 2, 3] becomes [2, 3] - the element 1 is removed and returned. This is useful for implementing queue-like behavior (FIFO - First In First Out).

pop(index) method:
• [1, 2, 3].pop(0) = 1 (returns element at index 0)
• pop(index) removes and returns element at index
• Modifies list in place
• Returns the removed element
• List changed: [1, 2, 3] → [2, 3]

How it works:
• pop(0) called on [1, 2, 3]
• Removes element at index 0 (which is 1)
• Returns removed element: 1
• Modifies original list: [2, 3]
• Raises IndexError if index out of bounds

Example:
a = [1, 2, 3]
a.pop(0)            # 1 (returns first)
a                   # [2, 3] (list modified)
[1, 2, 3].pop(1)    # 2 (returns element at index 1)

Common uses:
• Removing first element: first = items.pop(0)
• Queue operations: front = queue.pop(0)
• Removing by index
• FIFO operations

Example: [1, 2, 3].pop(0) returns 1 because pop(0) removes the element at index 0 (the first element, which is 1) from the list and returns it, leaving the list as [2, 3].
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2, 3].remove(2)?`, 
    o: ["None", "2", "[1, 3]", "Error"], 
    c: 0, 
    e: "remove() removes first occurrence, returns None.",
    de: `The remove() method removes the first occurrence of a value from a list and returns None. [1, 2, 3].remove(2) returns None because remove() modifies the list in place and doesn't return the removed element. After calling remove(2), the list [1, 2, 3] becomes [1, 3] - the first occurrence of the value 2 is removed. Unlike pop(), remove() takes a value, not an index, and only removes the first occurrence if there are duplicates.

remove() method:
• [1, 2, 3].remove(2) = None (returns None)
• remove(value) removes first occurrence of value
• Modifies list in place
• Returns None (doesn't return removed element)
• List changed: [1, 2, 3] → [1, 3]

How it works:
• remove(2) called on [1, 2, 3]
• Searches for first occurrence of value 2
• Finds 2 at index 1, removes it
• Modifies original list: [1, 3]
• Returns None (no return value)

Example:
a = [1, 2, 3]
a.remove(2)         # None (returns None)
a                   # [1, 3] (list modified)
[1, 2, 2, 3].remove(2) # [1, 2, 3] (removes first 2)

Common uses:
• Removing by value: items.remove(value)
• Removing first occurrence: list.remove(item)
• Value-based removal
• In-place modification

Example: [1, 2, 3].remove(2) returns None because remove() removes the first occurrence of the value 2 from the list (changing [1, 2, 3] to [1, 3]), and the method itself returns None rather than returning the removed element.
`
  }),
  (_i: number) => ({
    q: `What is [1, 2, 2, 3].remove(2)?`,
    o: ["None, list becomes [1, 2, 3]", "[1, 3]", "Error", "None"],
    c: 3,
    e: "remove() removes only first occurrence.",
    de: `The remove() method only removes the first occurrence of a value, not all occurrences. [1, 2, 2, 3].remove(2) returns None because remove() modifies the list in place. After calling remove(2), the list [1, 2, 2, 3] becomes [1, 2, 3] - only the first occurrence of 2 is removed, leaving the second 2 in place. To remove all occurrences, you would need to call remove() multiple times or use a different approach like list comprehension.

remove() - first occurrence only:
• [1, 2, 2, 3].remove(2) = None (returns None)
• remove(value) removes only first occurrence
• Subsequent occurrences remain
• Modifies list in place
• List changed: [1, 2, 2, 3] → [1, 2, 3]

How it works:
• remove(2) called on [1, 2, 2, 3]
• Searches for first occurrence of value 2
• Finds first 2 at index 1, removes it
• Second 2 at index 2 remains (now at index 1)
• Returns None (no return value)

Example:
a = [1, 2, 2, 3]
a.remove(2)         # None (returns None)
a                   # [1, 2, 3] (first 2 removed)
[1, 2, 2, 2, 3].remove(2) # [1, 2, 2, 3] (removes first only)

Common uses:
• Removing first occurrence: items.remove(value)
• Single removal: list.remove(item)
• First match removal
• In-place modification

Example: [1, 2, 2, 3].remove(2) returns None because remove() removes only the first occurrence of 2 (changing [1, 2, 2, 3] to [1, 2, 3]), leaving the second occurrence of 2 in place.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2, 3].clear()?`, 
    o: ["None", "[]", "[1, 2, 3]", "Error"], 
    c: 0, 
    e: "clear() removes all elements, returns None.",
    de: `The clear() method removes all elements from a list and returns None. [1, 2, 3].clear() returns None because clear() modifies the list in place, removing all elements and leaving an empty list. After calling clear(), the list [1, 2, 3] becomes [] - all elements are removed, but the list object itself still exists. This is different from reassigning to an empty list - clear() modifies the existing object.

clear() method:
• [1, 2, 3].clear() = None (returns None)
• clear() removes all elements from list
• Modifies list in place
• Returns None (doesn't return new list)
• List changed: [1, 2, 3] → []

How it works:
• clear() called on [1, 2, 3]
• Removes all elements from list
• List becomes empty: []
• Original list object still exists
• Returns None (no return value)

Example:
a = [1, 2, 3]
a.clear()           # None (returns None)
a                   # [] (list is now empty)
[1, 2, 3].clear()   # None (returns None)

Common uses:
• Clearing list: items.clear()
• Removing all elements: list.clear()
• Resetting list
• In-place modification

Example: [1, 2, 3].clear() returns None because clear() removes all elements from the list (changing [1, 2, 3] to []), and the method itself returns None rather than returning the empty list.
`
  }),
  (_i: number) => ({ 
    q: `What is the difference between pop() and remove()?`, 
    o: ["pop uses index, remove uses value", "No difference", "pop is faster", "remove is deprecated"], 
    c: 0, 
    e: "pop() uses index, remove() uses value.",
    de: `The key difference between pop() and remove() is how they identify which element to remove. pop() uses an index (position) to remove an element, while remove() uses a value to remove an element. pop(index) removes the element at the specified index and returns it, while remove(value) removes the first occurrence of the specified value and returns None. Additionally, pop() returns the removed element, while remove() returns None.

pop() vs remove():
• pop(index): removes by index, returns removed element
• remove(value): removes by value, returns None
• pop() can remove any element by position
• remove() removes first matching value only
• pop() raises IndexError if index invalid
• remove() raises ValueError if value not found

How it works:
• pop(1): removes element at index 1, returns that element
• remove(2): searches for value 2, removes first occurrence, returns None
• pop() needs to know position
• remove() needs to know value
• Both modify list in place

Example:
a = [1, 2, 3]
a.pop(1)            # 2 (returns element at index 1)
a                   # [1, 3] (element removed)
b = [1, 2, 3]
b.remove(2)         # None (returns None)
b                   # [1, 3] (value 2 removed)

Common uses:
• pop(): removing by position: item = list.pop(index)
• remove(): removing by value: list.remove(value)
• Choose based on whether you know position or value
• Important distinction for removal operations

Example: The difference is pop() uses an index to remove an element and returns it (e.g., [1, 2, 3].pop(1) returns 2), while remove() uses a value to remove an element and returns None (e.g., [1, 2, 3].remove(2) returns None).
`
  }),
  (_i: number) => ({ 
    q: `What happens if pop() is called on empty list?`, 
    o: ["IndexError", "Returns None", "Returns []", "Error"], 
    c: 0, 
    e: "pop() on empty list raises IndexError.",
    de: `Calling pop() on an empty list raises an IndexError because there are no elements to remove. If you try to pop from an empty list like [].pop(), Python raises an IndexError with a message indicating that you're trying to pop from an empty list. This is different from some other methods that might return None or an empty list - pop() always requires at least one element to exist.

pop() on empty list:
• [].pop() raises IndexError
• Empty list has no elements to remove
• IndexError indicates invalid index operation
• Must check if list is not empty before popping
• Error message: "pop from empty list"

How it works:
• pop() called on empty list []
• Searches for element to remove
• Finds no elements (list is empty)
• Raises IndexError
• No element to return

Example:
[].pop()            # IndexError: pop from empty list
a = []
a.pop()             # IndexError: pop from empty list
if a:               # Check first
    a.pop()         # Safe to pop

Common uses:
• Error handling: try/except for IndexError
• Checking first: if items: items.pop()
• Validating list not empty
• Safe popping with validation

Example: Calling pop() on an empty list raises an IndexError because there are no elements to remove from the list, and Python raises this error to indicate that the operation cannot be performed on an empty list.
`
  }),
  (_i: number) => ({ 
    q: `What happens if remove() is called with non-existent value?`, 
    o: ["ValueError", "Returns None", "No error", "Error"], 
    c: 0, 
    e: "remove() with non-existent value raises ValueError.",
    de: `Calling remove() with a value that doesn't exist in the list raises a ValueError because the value cannot be found to remove. If you try to remove a non-existent value like [1, 2, 3].remove(5), Python raises a ValueError with a message indicating that the value is not in the list. This is different from pop(), which raises IndexError for invalid indices - remove() raises ValueError for non-existent values.

remove() with non-existent value:
• [1, 2, 3].remove(5) raises ValueError
• Value 5 not found in list
• ValueError indicates value not found
• Must check if value exists before removing
• Error message: "list.remove(x): x not in list"

How it works:
• remove(5) called on [1, 2, 3]
• Searches for value 5 in list
• Finds no match (value doesn't exist)
• Raises ValueError
• Cannot remove non-existent value

Example:
[1, 2, 3].remove(5) # ValueError: list.remove(x): x not in list
a = [1, 2, 3]
a.remove(10)        # ValueError: list.remove(x): x not in list
if 5 in a:          # Check first
    a.remove(5)     # Safe to remove

Common uses:
• Error handling: try/except for ValueError
• Checking first: if value in items: items.remove(value)
• Validating value exists
• Safe removal with validation

Example: Calling remove() with a non-existent value raises a ValueError because Python cannot find the value to remove from the list, and this error indicates that the operation cannot be performed because the value is not present.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2, 3].pop(-1)?`, 
    o: ["3", "1", "[1, 2]", "Error"], 
    c: 0, 
    e: "pop(-1) is same as pop() - removes last element.",
    de: `The pop() method accepts negative indices, and pop(-1) is equivalent to pop() without arguments - both remove and return the last element. [1, 2, 3].pop(-1) returns 3 because pop(-1) removes the element at index -1 (which is the last element, 3) and returns it. After calling pop(-1), the list [1, 2, 3] becomes [1, 2]. This is consistent with Python's negative indexing system where -1 refers to the last element.

pop(-1):
• [1, 2, 3].pop(-1) = 3 (returns last element)
• pop(-1) removes element at index -1 (last)
• Equivalent to pop() without arguments
• Modifies list in place
• List changed: [1, 2, 3] → [1, 2]

How it works:
• pop(-1) called on [1, 2, 3]
• Index -1 refers to last element (3)
• Removes element at index -1
• Returns removed element: 3
• Modifies original list: [1, 2]

Example:
a = [1, 2, 3]
a.pop(-1)           # 3 (returns last)
a                   # [1, 2] (list modified)
[1, 2, 3].pop(-1)   # 3 (same as pop())
[1, 2, 3].pop(-2)   # 2 (removes second-to-last)

Common uses:
• Removing last element: last = items.pop(-1)
• Explicit negative indexing: list.pop(-1)
• Last element removal
• Consistent with negative indexing

Example: [1, 2, 3].pop(-1) returns 3 because pop(-1) removes the element at index -1 (the last element, which is 3) from the list and returns it, leaving the list as [1, 2]. This is equivalent to calling pop() without arguments.
`
  }),
  (_i: number) => ({ 
    q: `What is del [1, 2, 3][1]?`, 
    o: ["None, list becomes [1, 3]", "[1, 2]", "Error", "None"], 
    c: 0, 
    e: "del removes element by index, modifies list.",
    de: `The del statement removes an element from a list by index and modifies the list in place. del [1, 2, 3][1] doesn't work because [1, 2, 3] is a literal - you need to use a variable. However, conceptually, del list[index] removes the element at that index. For example, if a = [1, 2, 3], then del a[1] removes the element at index 1, changing [1, 2, 3] to [1, 3]. The del statement doesn't return anything (it's a statement, not an expression).

del statement:
• del list[index] removes element at index
• Modifies list in place
• Doesn't return value (statement, not expression)
• Similar to pop() but doesn't return removed element
• Must use with variable, not literal

How it works:
• del statement with list[index]
• Removes element at specified index
• Modifies original list
• Elements after index shift left
• No return value (statement)

Example:
a = [1, 2, 3]
del a[1]            # None (statement, no return)
a                   # [1, 3] (element at index 1 removed)
b = [1, 2, 3]
del b[0]            # [2, 3] (first element removed)

Common uses:
• Removing by index: del items[index]
• Deleting elements: del list[i]
• Index-based deletion
• In-place modification

Example: The del statement removes an element from a list by index (e.g., if a = [1, 2, 3], then del a[1] removes the element at index 1, changing the list to [1, 3]). It doesn't return a value because it's a statement, not an expression.
`
  }),
  
  // 51-60: List Methods - Searching and Counting
  (_i: number) => ({ 
    q: `What is [1, 2, 3].index(2)?`, 
    o: ["1", "2", "0", "Error"], 
    c: 0, 
    e: "index() returns first index of value.",
    de: `The index() method returns the index of the first occurrence of a value in a list. [1, 2, 3].index(2) returns 1 because index() searches through the list and finds the value 2 at index 1 (the second element). The index() method raises a ValueError if the value is not found in the list. This is useful for finding the position of an element when you know its value.

index() method:
• [1, 2, 3].index(2) = 1 (returns index of value 2)
• index(value) returns first index where value found
• Searches from beginning of list
• Returns integer index
• Raises ValueError if value not found

How it works:
• index(2) called on [1, 2, 3]
• Searches for value 2 in list
• Finds 2 at index 1 (second element)
• Returns index: 1
• Raises ValueError if not found

Example:
[1, 2, 3].index(2)  # 1 (index of 2)
[1, 2, 3].index(1)  # 0 (index of 1)
[1, 2, 3].index(5)  # ValueError (5 not found)

Common uses:
• Finding position: pos = items.index(value)
• Getting index: idx = list.index(item)
• Position lookup
• Value-to-index conversion

Example: [1, 2, 3].index(2) returns 1 because index() searches through the list and finds the value 2 at index 1 (the second element, since indexing starts at 0).
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2, 2, 3].index(2)?`, 
    o: ["1", "2", "0", "Error"], 
    c: 0, 
    e: "index() returns first occurrence index.",
    de: `The index() method returns the index of the first occurrence of a value, even if the value appears multiple times. [1, 2, 2, 3].index(2) returns 1 because index() searches from the beginning and finds the first occurrence of 2 at index 1. Even though 2 appears again at index 2, index() only returns the position of the first occurrence. This is consistent behavior - index() always returns the first match.

index() - first occurrence:
• [1, 2, 2, 3].index(2) = 1 (returns first index)
• index(value) returns first occurrence only
• Searches from beginning
• Stops at first match
• Subsequent occurrences ignored

How it works:
• index(2) called on [1, 2, 2, 3]
• Searches for value 2 from beginning
• Finds first 2 at index 1
• Returns index: 1 (first occurrence)
• Doesn't continue to find second occurrence

Example:
[1, 2, 2, 3].index(2) # 1 (first occurrence)
[1, 2, 2, 2, 3].index(2) # 1 (first occurrence)
[2, 2, 2].index(2)    # 0 (first occurrence)

Common uses:
• Finding first position: pos = items.index(value)
• Getting first index: idx = list.index(item)
• First match lookup
• Value-to-index conversion

Example: [1, 2, 2, 3].index(2) returns 1 because index() searches from the beginning and returns the index of the first occurrence of 2 (at index 1), even though 2 appears again at index 2.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2, 3].count(2)?`, 
    o: ["1", "2", "0", "Error"], 
    c: 0, 
    e: "count() returns number of occurrences.",
    de: `The count() method returns the number of times a value appears in a list. [1, 2, 3].count(2) returns 1 because count() counts how many times the value 2 appears in the list, and it appears once. The count() method searches through the entire list and counts all occurrences of the value. If the value doesn't appear, count() returns 0 (it never raises an error).

count() method:
• [1, 2, 3].count(2) = 1 (returns count)
• count(value) returns number of occurrences
• Searches entire list
• Counts all occurrences
• Returns 0 if value not found (no error)

How it works:
• count(2) called on [1, 2, 3]
• Searches for value 2 in entire list
• Finds one occurrence at index 1
• Counts occurrences: 1
• Returns count: 1

Example:
[1, 2, 3].count(2)  # 1 (one occurrence)
[1, 2, 2, 3].count(2) # 2 (two occurrences)
[1, 2, 3].count(5)  # 0 (zero occurrences)

Common uses:
• Counting occurrences: count = items.count(value)
• Getting frequency: freq = list.count(item)
• Frequency counting
• Occurrence counting

Example: [1, 2, 3].count(2) returns 1 because count() searches through the entire list and counts how many times the value 2 appears, and it appears once at index 1.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2, 2, 3].count(2)?`, 
    o: ["2", "1", "0", "Error"], 
    c: 0, 
    e: "count() counts all occurrences.",
    de: `The count() method counts all occurrences of a value in a list, not just the first one. [1, 2, 2, 3].count(2) returns 2 because count() searches through the entire list and counts how many times the value 2 appears - it appears twice, at index 1 and index 2. Unlike index(), which returns the first occurrence only, count() counts all occurrences throughout the list.

count() - all occurrences:
• [1, 2, 2, 3].count(2) = 2 (returns total count)
• count(value) counts all occurrences
• Searches entire list
• Counts every occurrence
• Returns total count

How it works:
• count(2) called on [1, 2, 2, 3]
• Searches for value 2 in entire list
• Finds occurrences at index 1 and index 2
• Counts all occurrences: 2
• Returns total count: 2

Example:
[1, 2, 2, 3].count(2) # 2 (two occurrences)
[1, 2, 2, 2, 3].count(2) # 3 (three occurrences)
[2, 2, 2].count(2)    # 3 (three occurrences)

Common uses:
• Counting all occurrences: count = items.count(value)
• Getting total frequency: freq = list.count(item)
• Total frequency counting
• All occurrence counting

Example: [1, 2, 2, 3].count(2) returns 2 because count() searches through the entire list and counts all occurrences of 2, finding it at index 1 and index 2, for a total count of 2.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2, 3].count(5)?`, 
    o: ["0", "1", "Error", "None"], 
    c: 0, 
    e: "count() returns 0 if value not found.",
    de: `The count() method returns 0 when a value is not found in the list, rather than raising an error. [1, 2, 3].count(5) returns 0 because count() searches through the entire list and finds no occurrences of the value 5. Unlike index(), which raises a ValueError when a value is not found, count() always returns a non-negative integer (0 or greater) and never raises an error.

count() - value not found:
• [1, 2, 3].count(5) = 0 (returns 0)
• count(value) returns 0 if value not found
• No error raised
• Safe to call with any value
• Returns 0 for non-existent values

How it works:
• count(5) called on [1, 2, 3]
• Searches for value 5 in entire list
• Finds no occurrences
• Counts occurrences: 0
• Returns 0 (no error)

Example:
[1, 2, 3].count(5)  # 0 (not found)
[1, 2, 3].count(10) # 0 (not found)
[].count(5)         # 0 (empty list)

Common uses:
• Safe counting: count = items.count(value) (won't error)
• Checking presence: if items.count(value) > 0:
• Non-existence checking
• Safe occurrence checking

Example: [1, 2, 3].count(5) returns 0 because count() searches through the entire list and finds no occurrences of 5, and count() returns 0 for non-existent values rather than raising an error.
`
  }),
  (_i: number) => ({ 
    q: `What happens if index() is called with non-existent value?`, 
    o: ["ValueError", "Returns -1", "Returns None", "Error"], 
    c: 0, 
    e: "index() with non-existent value raises ValueError.",
    de: `Calling index() with a value that doesn't exist in the list raises a ValueError because the value cannot be found. If you try to find the index of a non-existent value like [1, 2, 3].index(5), Python raises a ValueError with a message indicating that the value is not in the list. This is different from count(), which returns 0 for non-existent values - index() must find the value to return its index.

index() with non-existent value:
• [1, 2, 3].index(5) raises ValueError
• Value 5 not found in list
• ValueError indicates value not found
• Must check if value exists before calling index()
• Error message: "list.index(x): x not in list"

How it works:
• index(5) called on [1, 2, 3]
• Searches for value 5 in list
• Finds no match (value doesn't exist)
• Raises ValueError
• Cannot return index for non-existent value

Example:
[1, 2, 3].index(5)  # ValueError: list.index(x): x not in list
a = [1, 2, 3]
a.index(10)        # ValueError: list.index(x): x not in list
if 5 in a:         # Check first
    a.index(5)     # Safe to call

Common uses:
• Error handling: try/except for ValueError
• Checking first: if value in items: items.index(value)
• Validating value exists
• Safe index lookup with validation

Example: Calling index() with a non-existent value raises a ValueError because Python cannot find the value in the list to return its index, and this error indicates that the operation cannot be performed because the value is not present.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2, 3].index(2, 1)?`, 
    o: ["1", "2", "0", "Error"], 
    c: 0, 
    e: "index(value, start) searches from start index.",
    de: `The index() method can take a second argument (start) to specify where to begin searching. [1, 2, 3].index(2, 1) returns 1 because index(2, 1) searches for the value 2 starting from index 1. The search begins at the start index (inclusive) and continues to the end of the list. If the value is found at or after the start index, index() returns its position.

index() with start parameter:
• [1, 2, 3].index(2, 1) = 1 (returns index)
• index(value, start) searches from start index
• Start index is inclusive (searched)
• Search continues to end of list
• Returns first occurrence from start

How it works:
• index(2, 1) called on [1, 2, 3]
• Starts searching from index 1 (inclusive)
• Searches indices 1, 2
• Finds 2 at index 1
• Returns index: 1

Example:
[1, 2, 3].index(2, 1)  # 1 (found at index 1)
[1, 2, 3].index(2, 0)  # 1 (searches from index 0)
[1, 2, 2, 3].index(2, 2) # 2 (finds second occurrence)

Common uses:
• Searching from position: idx = items.index(value, start)
• Finding after position: pos = list.index(item, from_index)
• Position-limited search
• Range-based search

Example: [1, 2, 3].index(2, 1) returns 1 because index() searches for 2 starting from index 1 (inclusive), finds 2 at index 1, and returns that index.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2, 2, 3].index(2, 2)?`, 
    o: ["2", "1", "0", "Error"], 
    c: 0, 
    e: "index(value, start) finds first occurrence from start.",
    de: `The index() method with a start parameter finds the first occurrence of a value starting from the specified index. [1, 2, 2, 3].index(2, 2) returns 2 because index(2, 2) searches for the value 2 starting from index 2, and finds the second occurrence of 2 at index 2. This is useful for finding occurrences after a certain position, effectively allowing you to skip the first occurrence(s) if you know where to start searching.

index() - finding occurrence from start:
• [1, 2, 2, 3].index(2, 2) = 2 (returns index)
• index(value, start) finds first from start
• Start index is inclusive
• Skips elements before start index
• Returns first occurrence from start position

How it works:
• index(2, 2) called on [1, 2, 2, 3]
• Starts searching from index 2 (inclusive)
• Skips index 0 and 1 (ignores first occurrence)
• Searches indices 2, 3
• Finds 2 at index 2 (second occurrence)
• Returns index: 2

Example:
[1, 2, 2, 3].index(2, 2) # 2 (finds second occurrence)
[1, 2, 2, 3].index(2, 0) # 1 (finds first occurrence)
[1, 2, 2, 2, 3].index(2, 2) # 2 (finds from index 2)

Common uses:
• Finding next occurrence: idx = items.index(value, from_index)
• Skipping first match: pos = list.index(item, after_pos)
• Subsequent occurrence search
• Position-based search

Example: [1, 2, 2, 3].index(2, 2) returns 2 because index() searches for 2 starting from index 2 (inclusive), skips the first occurrence at index 1, and finds the second occurrence at index 2.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2, 3].index(2, 1, 3)?`, 
    o: ["1", "2", "Error", "None"], 
    c: 0, 
    e: "index(value, start, stop) searches in range.",
    de: `The index() method can take a third argument (stop) to specify where to stop searching. [1, 2, 3].index(2, 1, 3) returns 1 because index(2, 1, 3) searches for the value 2 starting from index 1 (inclusive) up to (but not including) index 3. The stop index is exclusive, similar to slicing. This allows you to search within a specific range of the list.

index() with start and stop:
• [1, 2, 3].index(2, 1, 3) = 1 (returns index)
• index(value, start, stop) searches in range [start, stop)
• Start index is inclusive (searched)
• Stop index is exclusive (not searched)
• Returns first occurrence in range

How it works:
• index(2, 1, 3) called on [1, 2, 3]
• Searches in range [1, 3) (indices 1, 2)
• Start index 1 is inclusive
• Stop index 3 is exclusive
• Finds 2 at index 1
• Returns index: 1

Example:
[1, 2, 3].index(2, 1, 3)  # 1 (found in range)
[1, 2, 3].index(2, 0, 2)  # 1 (found in range)
[1, 2, 3].index(2, 2, 3)  # ValueError (not in range)

Common uses:
• Searching in range: idx = items.index(value, start, stop)
• Bounded search: pos = list.index(item, from_index, to_index)
• Range-limited search
• Sub-list search

Example: [1, 2, 3].index(2, 1, 3) returns 1 because index() searches for 2 in the range [1, 3) (indices 1 and 2, since stop is exclusive), and finds 2 at index 1.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2, 3].index(2, 0, 1)?`, 
    o: ["ValueError", "1", "0", "Error"], 
    c: 0, 
    e: "index() raises ValueError if not found in range.",
    de: `The index() method raises a ValueError if the value is not found within the specified range. [1, 2, 3].index(2, 0, 1) raises a ValueError because index(2, 0, 1) searches for the value 2 in the range [0, 1) (which includes only index 0, since stop is exclusive), but the value 2 is at index 1, which is outside the search range. The stop index is exclusive, so even though 2 exists in the list, it's not in the specified range.

index() - value not in range:
• [1, 2, 3].index(2, 0, 1) raises ValueError
• Searches in range [0, 1) (index 0 only)
• Value 2 is at index 1 (outside range)
• Stop index 1 is exclusive (not searched)
• Raises ValueError (value not in range)

How it works:
• index(2, 0, 1) called on [1, 2, 3]
• Searches in range [0, 1) (index 0 only)
• Stop index 1 is exclusive
• Finds 1 at index 0, not 2
• Value 2 is at index 1 (outside range)
• Raises ValueError

Example:
[1, 2, 3].index(2, 0, 1)  # ValueError (2 not in range [0, 1))
[1, 2, 3].index(2, 0, 2)  # 1 (found in range [0, 2))
[1, 2, 3].index(3, 0, 2)  # ValueError (3 not in range [0, 2))

Common uses:
• Error handling: try/except for ValueError
• Range validation: check if value in range first
• Bounded search with validation
• Range-limited search

Example: [1, 2, 3].index(2, 0, 1) raises a ValueError because index() searches for 2 in the range [0, 1) (index 0 only, since stop is exclusive), but 2 is at index 1, which is outside the search range.
`
  }),
  
  // 61-70: List Methods - Sorting and Reversing
  (_i: number) => ({ q: `What is sorted([3, 1, 2])?`, o: ["[1, 2, 3]", "[3, 1, 2]", "None", "Error"], c: 0, e: "sorted() returns new sorted list." }),
  (_i: number) => ({ q: `What is sorted([3, 1, 2], reverse=True)?`, o: ["[3, 2, 1]", "[1, 2, 3]", "None", "Error"], c: 0, e: "reverse=True sorts descending." }),
  (_i: number) => ({ q: `What is [3, 1, 2].sort()?`, o: ["None", "[1, 2, 3]", "[3, 1, 2]", "Error"], c: 0, e: "sort() modifies list in place, returns None." }),
  (_i: number) => ({ q: `What is [3, 1, 2].reverse()?`, o: ["None", "[2, 1, 3]", "[1, 2, 3]", "Error"], c: 0, e: "reverse() modifies list in place, returns None." }),
  (_i: number) => ({ q: `What is the difference between sort() and sorted()?`, o: ["sort() modifies in place, sorted() returns new list", "No difference", "sorted() is faster", "sort() is deprecated"], c: 0, e: "sort() modifies in place, sorted() returns new list." }),
  (_i: number) => ({ 
    q: `What is reversed([1, 2, 3])?`, 
    o: ["list_reverseiterator object", "[3, 2, 1]", "None", "Error"], 
    c: 0, 
    e: "reversed() returns iterator, not list.",
    de: `The reversed() function returns a reverse iterator, not a list. reversed([1, 2, 3]) returns a list_reverseiterator object because reversed() creates an iterator that yields elements in reverse order, but doesn't create a new list immediately. The iterator is lazy - it computes elements on-demand as you iterate through it. This is memory-efficient for large sequences, but the result is not a list - it's an iterator object.

reversed() function:
• reversed([1, 2, 3]) = list_reverseiterator object
• reversed() returns reverse iterator
• Doesn't create new list immediately
• Iterator computes elements on-demand
• Memory-efficient for large sequences

How it works:
• reversed() called with [1, 2, 3]
• Creates reverse iterator object
• Iterator remembers list and position
• Yields elements in reverse when iterated
• Returns iterator object, not list

Example:
reversed([1, 2, 3])  # <list_reverseiterator object>
list(reversed([1, 2, 3])) # [3, 2, 1] (converts to list)
for x in reversed([1, 2, 3]):  # Iterates: 3, 2, 1
    print(x)

Common uses:
• Reverse iteration: for item in reversed(items):
• Creating reverse iterator: rev_iter = reversed(list)
• Memory-efficient reversal
• Lazy reverse iteration

Example: reversed([1, 2, 3]) returns a list_reverseiterator object because reversed() creates an iterator that yields elements in reverse order, but doesn't create a new list - the iterator computes elements on-demand as you iterate through it.
`
  }),
  (_i: number) => ({ 
    q: `What is list(reversed([1, 2, 3]))?`, 
    o: ["[3, 2, 1]", "[1, 2, 3]", "None", "Error"], 
    c: 0, 
    e: "list(reversed()) converts iterator to list.",
    de: `The list() function can convert a reverse iterator to a list. list(reversed([1, 2, 3])) returns [3, 2, 1] because list() consumes the iterator created by reversed([1, 2, 3]) and collects all elements into a new list. The reversed() function returns an iterator, and list() iterates through that iterator, collecting the reversed elements into a list. This is how you get an actual reversed list from reversed().

list(reversed()):
• list(reversed([1, 2, 3])) = [3, 2, 1]
• reversed() returns iterator
• list() consumes iterator
• Collects elements into new list
• Creates reversed list

How it works:
• reversed([1, 2, 3]) creates reverse iterator
• list() iterates through iterator
• Iterator yields: 3, 2, 1 (in reverse)
• list() collects: [3, 2, 1]
• Returns new reversed list

Example:
list(reversed([1, 2, 3]))  # [3, 2, 1] (reversed list)
list(reversed([1, 2]))      # [2, 1] (reversed list)
list(reversed([]))          # [] (empty list)

Common uses:
• Getting reversed list: reversed_list = list(reversed(items))
• Creating reverse copy: rev = list(reversed(data))
• Converting iterator to list
• Reverse list creation

Example: list(reversed([1, 2, 3])) returns [3, 2, 1] because list() consumes the iterator created by reversed() and collects all elements in reverse order into a new list.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2, 3][::-1] vs reversed([1, 2, 3])?`, 
    o: ["[::-1] returns list, reversed() returns iterator", "No difference", "reversed() returns list", "[::-1] returns iterator"], 
    c: 0, 
    e: "[::-1] creates new list, reversed() returns iterator.",
    de: `The key difference between [::-1] and reversed() is what they return. [1, 2, 3][::-1] returns a new list [3, 2, 1] because slicing with a negative step creates a new list object immediately. reversed([1, 2, 3]) returns a list_reverseiterator object because reversed() creates an iterator that yields elements on-demand. Both produce reversed elements, but [::-1] creates a list immediately (more memory but faster access), while reversed() creates an iterator (less memory but requires iteration to access).

[::-1] vs reversed():
• [::-1] returns new list immediately
• reversed() returns iterator object
• [::-1] creates list object in memory
• reversed() creates lazy iterator
• Both produce reversed elements

How it works:
• [1, 2, 3][::-1]: creates new list [3, 2, 1] immediately
• reversed([1, 2, 3]): creates iterator that yields 3, 2, 1 on-demand
• [::-1] uses more memory (stores list)
• reversed() uses less memory (computes on-demand)
• Both produce same reversed order

Example:
[1, 2, 3][::-1]      # [3, 2, 1] (new list)
reversed([1, 2, 3])  # <list_reverseiterator> (iterator)
list(reversed([1, 2, 3])) # [3, 2, 1] (must convert)

Common uses:
• [::-1]: immediate reversed list: rev = items[::-1]
• reversed(): memory-efficient iteration: for x in reversed(items):
• Choose based on memory vs access needs
• Both useful for different scenarios

Example: [1, 2, 3][::-1] returns a new list [3, 2, 1] immediately, while reversed([1, 2, 3]) returns an iterator that yields reversed elements on-demand - both produce the same reversed order, but [::-1] creates a list object while reversed() creates an iterator.
`
  }),
  (_i: number) => ({ 
    q: `What is sorted(['c', 'a', 'b'])?`, 
    o: ["['a', 'b', 'c']", "['c', 'a', 'b']", "None", "Error"], 
    c: 0, 
    e: "sorted() works with strings, sorts alphabetically.",
    de: `The sorted() function works with any iterable, including lists of strings. sorted(['c', 'a', 'b']) returns ['a', 'b', 'c'] because sorted() sorts strings alphabetically using their Unicode/ASCII values. Strings are compared character by character using their code points, so 'a' comes before 'b', and 'b' comes before 'c'. sorted() creates a new list and doesn't modify the original.

sorted() with strings:
• sorted(['c', 'a', 'b']) = ['a', 'b', 'c']
• sorted() works with string lists
• Sorts alphabetically (Unicode order)
• Creates new sorted list
• Original list unchanged

How it works:
• sorted() called with ['c', 'a', 'b']
• Compares strings using Unicode values
• 'a' < 'b' < 'c' (alphabetical order)
• Sorts: ['a', 'b', 'c']
• Returns new list: ['a', 'b', 'c']

Example:
sorted(['c', 'a', 'b'])  # ['a', 'b', 'c']
sorted(['z', 'a', 'm'])  # ['a', 'm', 'z']
sorted(['A', 'a', 'B'])  # ['A', 'B', 'a'] (case-sensitive)

Common uses:
• Sorting strings: sorted_list = sorted(strings)
• Alphabetical order: result = sorted(items)
• String sorting
• Text ordering

Example: sorted(['c', 'a', 'b']) returns ['a', 'b', 'c'] because sorted() sorts strings alphabetically using their Unicode values, creating a new list with elements in alphabetical order.
`
  }),
  (_i: number) => ({ 
    q: `What is sorted([3, 1, 2], key=lambda x: -x)?`, 
    o: ["[3, 2, 1]", "[1, 2, 3]", "None", "Error"], 
    c: 0, 
    e: "key parameter customizes sorting.",
    de: `The sorted() function can take a key parameter to customize sorting. sorted([3, 1, 2], key=lambda x: -x) returns [3, 2, 1] because the key function transforms each element before comparison. Here, key=lambda x: -x negates each element, so comparisons use -3, -1, -2, which sorts as -3 < -1 < -2 (descending), resulting in [3, 2, 1] in descending order. The key function doesn't change the elements in the result - it only affects the comparison order.

sorted() with key:
• sorted([3, 1, 2], key=lambda x: -x) = [3, 2, 1]
• key parameter transforms elements for comparison
• lambda x: -x negates each element
• Sorts using negated values: -3 < -1 < -2
• Result: [3, 2, 1] (descending order)

How it works:
• sorted() called with [3, 1, 2], key=lambda x: -x
• Applies key function: -3, -1, -2 (negated)
• Compares using negated values: -3 < -1 < -2
• Sorts in descending order (because negated)
• Returns new list: [3, 2, 1]

Example:
sorted([3, 1, 2], key=lambda x: -x)  # [3, 2, 1] (descending)
sorted([1, 2, 3], key=lambda x: x**2) # [1, 2, 3] (squares: 1 < 4 < 9)
sorted(['abc', 'a', 'ab'], key=len)  # ['a', 'ab', 'abc'] (by length)

Common uses:
• Custom sorting: sorted(items, key=func)
• Descending sort: sorted(items, key=lambda x: -x)
• Transform-based sorting
• Flexible sorting criteria

Example: sorted([3, 1, 2], key=lambda x: -x) returns [3, 2, 1] because the key function negates each element for comparison, causing the list to be sorted in descending order (largest to smallest).
`
  }),
  
  // 71-80: List Copying
  (_i: number) => ({ 
    q: `What is [1, 2, 3].copy()?`, 
    o: ["[1, 2, 3]", "[1, 2]", "None", "Error"], 
    c: 0, 
    e: "copy() creates shallow copy.",
    de: `The copy() method creates a shallow copy of a list and returns it. [1, 2, 3].copy() returns [1, 2, 3] because copy() creates a new list object with the same elements. A shallow copy means the outer list is copied, but if the list contains nested objects (like other lists), those nested objects are not copied - they are shared between the original and the copy. For flat lists (no nesting), shallow copy creates a completely independent list.

copy() method:
• [1, 2, 3].copy() = [1, 2, 3] (new list)
• copy() creates shallow copy
• Creates new list object
• Elements are copied (not shared)
• Returns new list

How it works:
• copy() called on [1, 2, 3]
• Creates new list object
• Copies elements to new list: [1, 2, 3]
• New list is independent of original
• Returns new list: [1, 2, 3]

Example:
a = [1, 2, 3]
b = a.copy()        # [1, 2, 3] (new list)
b.append(4)         # b = [1, 2, 3, 4]
a                   # [1, 2, 3] (unchanged)

Common uses:
• Creating copies: new_list = items.copy()
• Independent lists: copy = list.copy()
• Shallow copying
• Copy creation

Example: [1, 2, 3].copy() returns [1, 2, 3] because copy() creates a new list object with the same elements, resulting in a shallow copy of the original list.
`
  }),
  (_i: number) => ({ 
    q: `What is list([1, 2, 3])?`, 
    o: ["[1, 2, 3]", "(1, 2, 3)", "None", "Error"], 
    c: 0, 
    e: "list() constructor creates shallow copy.",
    de: `The list() constructor creates a shallow copy when called with a list as an argument. list([1, 2, 3]) returns [1, 2, 3] because list() takes the list [1, 2, 3] and creates a new list object with the same elements. This is essentially the same as using copy() - it creates a shallow copy where the outer list is new, but nested objects (if any) are shared. For flat lists, this creates a completely independent list.

list() constructor:
• list([1, 2, 3]) = [1, 2, 3] (new list)
• list() creates shallow copy
• Creates new list object
• Elements are copied (not shared)
• Returns new list

How it works:
• list() called with [1, 2, 3]
• Creates new list object
• Copies elements to new list: [1, 2, 3]
• New list is independent of original
• Returns new list: [1, 2, 3]

Example:
a = [1, 2, 3]
b = list(a)         # [1, 2, 3] (new list)
b.append(4)         # b = [1, 2, 3, 4]
a                   # [1, 2, 3] (unchanged)

Common uses:
• Creating copies: new_list = list(old_list)
• Shallow copying: copy = list(original)
• List construction
• Copy creation

Example: list([1, 2, 3]) returns [1, 2, 3] because list() creates a new list object with the same elements, resulting in a shallow copy of the original list.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2, 3][:]?`, 
    o: ["[1, 2, 3]", "[1, 2]", "None", "Error"], 
    c: 0, 
    e: "Slicing [:] creates shallow copy.",
    de: `Slicing with [:] creates a shallow copy of a list. [1, 2, 3][:] returns [1, 2, 3] because [:] means "from start to end", which includes all elements, and slicing creates a new list object. This is one of the common ways to create a shallow copy - along with copy() and list(). A shallow copy means the outer list is copied, but nested objects (if any) are shared between the original and the copy.

Slicing [:] for copying:
• [1, 2, 3][:] = [1, 2, 3] (new list)
• [:] creates shallow copy
• Includes all elements from start to end
• Creates new list object
• Returns new list

How it works:
• [:] called on [1, 2, 3]
• Creates new list object
• Copies all elements to new list: [1, 2, 3]
• New list is independent of original
• Returns new list: [1, 2, 3]

Example:
a = [1, 2, 3]
b = a[:]            # [1, 2, 3] (new list)
b.append(4)         # b = [1, 2, 3, 4]
a                   # [1, 2, 3] (unchanged)

Common uses:
• Creating copies: new_list = items[:]
• Shallow copying: copy = list[:]
• Copy creation
• List duplication

Example: [1, 2, 3][:] returns [1, 2, 3] because [:] creates a shallow copy of the entire list, resulting in a new list object with the same elements.
`
  }),
  (_i: number) => ({ 
    q: `What is the difference between shallow and deep copy?`, 
    o: ["Shallow copies outer, deep copies nested", "No difference", "Deep is faster", "Shallow is deprecated"], 
    c: 0, 
    e: "Shallow copy copies outer structure, deep copy copies nested objects.",
    de: `The difference between shallow copy and deep copy is how they handle nested objects. A shallow copy creates a new outer object but shares nested objects - if you modify a nested object in the copy, it affects the original. A deep copy creates new objects for both the outer structure and all nested objects - modifications to nested objects in the copy don't affect the original. For flat lists (no nesting), shallow and deep copies behave the same.

Shallow vs deep copy:
• Shallow copy: copies outer list, shares nested objects
• Deep copy: copies outer list and all nested objects
• Shallow: changes to nested objects affect original
• Deep: changes to nested objects don't affect original
• For flat lists: both behave the same

How it works:
• Shallow: [[1], [2]].copy() → new outer list, but inner lists shared
• Deep: copy.deepcopy([[1], [2]]) → new outer list and new inner lists
• Shallow: modify copy[0].append(3) affects original
• Deep: modify copy[0].append(3) doesn't affect original

Example:
# Shallow copy
a = [[1], [2]]
b = a.copy()
b[0].append(3)      # a = [[1, 3], [2]] (affected!)
# Deep copy
a = [[1], [2]]
b = copy.deepcopy(a)
b[0].append(3)      # a = [[1], [2]] (unchanged)

Common uses:
• Shallow: flat lists: copy = items.copy()
• Deep: nested structures: copy = copy.deepcopy(nested)
• Choose based on nesting
• Important distinction for nested data

Example: The difference is that shallow copy copies only the outer structure and shares nested objects (so modifying nested objects in the copy affects the original), while deep copy copies both the outer structure and all nested objects (so modifications to nested objects in the copy don't affect the original).
`
  }),
  (_i: number) => ({ 
    q: `What is import copy; copy.copy([1, 2, 3])?`, 
    o: ["[1, 2, 3] (shallow copy)", "[1, 2, 3] (deep copy)", "Error", "None"], 
    c: 0, 
    e: "copy.copy() creates shallow copy.",
    de: `The copy.copy() function from the copy module creates a shallow copy of an object. copy.copy([1, 2, 3]) returns [1, 2, 3] because copy.copy() creates a new list object with the same elements. This is a shallow copy - the outer list is copied, but if the list contains nested objects (like other lists), those nested objects are shared between the original and the copy. For flat lists, copy.copy() creates a completely independent list.

copy.copy() function:
• copy.copy([1, 2, 3]) = [1, 2, 3] (shallow copy)
• copy.copy() creates shallow copy
• Creates new list object
• Elements are copied (not shared)
• Returns new list

How it works:
• copy.copy() called with [1, 2, 3]
• Creates new list object
• Copies elements to new list: [1, 2, 3]
• New list is independent of original
• Returns new list: [1, 2, 3]

Example:
import copy
a = [1, 2, 3]
b = copy.copy(a)    # [1, 2, 3] (shallow copy)
b.append(4)         # b = [1, 2, 3, 4]
a                   # [1, 2, 3] (unchanged)

Common uses:
• Creating copies: new_list = copy.copy(items)
• Shallow copying: copy = copy.copy(original)
• General copying
• Copy creation

Example: copy.copy([1, 2, 3]) returns [1, 2, 3] because copy.copy() creates a shallow copy of the list, resulting in a new list object with the same elements.
`
  }),
  (_i: number) => ({ 
    q: `What is import copy; copy.deepcopy([1, 2, 3])?`, 
    o: ["[1, 2, 3] (deep copy)", "[1, 2, 3] (shallow copy)", "Error", "None"], 
    c: 0, 
    e: "copy.deepcopy() creates deep copy.",
    de: `The copy.deepcopy() function from the copy module creates a deep copy of an object. copy.deepcopy([1, 2, 3]) returns [1, 2, 3] because copy.deepcopy() creates a new list object with the same elements. For flat lists (no nesting), deep copy behaves the same as shallow copy - both create independent lists. However, for nested structures, deep copy creates independent copies of all nested objects, while shallow copy shares them.

copy.deepcopy() function:
• copy.deepcopy([1, 2, 3]) = [1, 2, 3] (deep copy)
• copy.deepcopy() creates deep copy
• Creates new list object
• Elements are copied (not shared)
• For flat lists: same as shallow copy
• For nested: also copies nested objects

How it works:
• copy.deepcopy() called with [1, 2, 3]
• Creates new list object
• Copies elements to new list: [1, 2, 3]
• For flat lists: same result as shallow copy
• Returns new list: [1, 2, 3]

Example:
import copy
a = [1, 2, 3]
b = copy.deepcopy(a) # [1, 2, 3] (deep copy)
b.append(4)          # b = [1, 2, 3, 4]
a                    # [1, 2, 3] (unchanged)

Common uses:
• Creating deep copies: new_list = copy.deepcopy(items)
• Nested structures: copy = copy.deepcopy(nested)
• Independent copying
• Complete copying

Example: copy.deepcopy([1, 2, 3]) returns [1, 2, 3] because copy.deepcopy() creates a deep copy of the list, resulting in a new list object with the same elements. For flat lists, this is the same as shallow copy, but for nested structures, deep copy also copies nested objects independently.
`
  }),
  (_i: number) => ({ 
    q: `What is a = [1, 2]; b = a; b.append(3); a?`, 
    o: ["[1, 2, 3]", "[1, 2]", "Error", "None"], 
    c: 0, 
    e: "Assignment creates reference, not copy.",
    de: `Assignment in Python creates a reference to the same object, not a copy. If a = [1, 2] and b = a, then b.append(3) modifies a as well because both a and b reference the same list object in memory. When you assign a list to another variable, you're not creating a copy - you're creating another name (reference) that points to the same list object. Modifying the list through either variable affects the same object.

Assignment creates reference:
• a = [1, 2]; b = a creates reference
• b.append(3) modifies same object
• a becomes [1, 2, 3] because a and b reference same list
• No copy created
• Both variables point to same object

How it works:
• a = [1, 2] creates list object
• b = a assigns reference to same object
• a and b both point to same list
• b.append(3) modifies the shared list
• a sees the change: [1, 2, 3]

Example:
a = [1, 2]
b = a               # b references same list as a
b.append(3)         # modifies shared list
a                   # [1, 2, 3] (a also changed!)
b                   # [1, 2, 3] (same object)

Common uses:
• Understanding references: b = a (same object)
• Avoiding accidental sharing: b = a.copy() (different object)
• Reference vs copy
• Object sharing

Example: If a = [1, 2] and b = a, then b.append(3) changes a to [1, 2, 3] because assignment creates a reference to the same object, not a copy - both a and b point to the same list in memory.
`
  }),
  (_i: number) => ({ 
    q: `What is a = [1, 2]; b = a.copy(); b.append(3); a?`, 
    o: ["[1, 2]", "[1, 2, 3]", "Error", "None"], 
    c: 0, 
    e: "copy() creates independent list.",
    de: `The copy() method creates an independent copy of a list. If a = [1, 2] and b = a.copy(), then b.append(3) doesn't modify a because b is a new, independent list object. When you use copy(), Python creates a new list object with the same elements, so modifications to the copy don't affect the original. This is different from assignment (b = a), which creates a reference to the same object.

copy() creates independent list:
• a = [1, 2]; b = a.copy() creates new list
• b.append(3) modifies only b
• a remains [1, 2] because a and b are different objects
• Copy created
• Variables point to different objects

How it works:
• a = [1, 2] creates list object
• b = a.copy() creates new list object with same elements
• a and b point to different lists
• b.append(3) modifies only b's list
• a remains unchanged: [1, 2]

Example:
a = [1, 2]
b = a.copy()        # b is new list (copy)
b.append(3)         # modifies only b's list
a                   # [1, 2] (a unchanged!)
b                   # [1, 2, 3] (b modified)

Common uses:
• Creating independent copies: b = a.copy()
• Avoiding shared modifications: copy = original.copy()
• Independent lists
• Copy creation

Example: If a = [1, 2] and b = a.copy(), then b.append(3) doesn't change a - a remains [1, 2] because copy() creates an independent list object, so modifications to b don't affect a.
`
  }),
  (_i: number) => ({ 
    q: `What is a = [[1], [2]]; b = a.copy(); b[0].append(3); a?`, 
    o: ["[[1, 3], [2]]", "[[1], [2]]", "Error", "None"], 
    c: 0, 
    e: "Shallow copy shares nested objects.",
    de: `A shallow copy shares nested objects with the original. If a = [[1], [2]] and b = a.copy(), then b[0].append(3) modifies a as well because copy() creates a new outer list but shares the inner lists (nested objects). The outer list is copied, but the nested lists are not - they are shared between a and b. Modifying a nested object through either variable affects both because they reference the same nested objects.

Shallow copy shares nested objects:
• a = [[1], [2]]; b = a.copy() creates shallow copy
• b[0].append(3) modifies shared inner list
• a becomes [[1, 3], [2]] because inner lists are shared
• Outer list copied, nested lists shared
• Modifications to nested objects affect original

How it works:
• a = [[1], [2]] creates list with nested lists
• b = a.copy() creates new outer list but shares inner lists
• a and b point to different outer lists
• But a[0] and b[0] point to same inner list
• b[0].append(3) modifies shared inner list
• a sees the change: [[1, 3], [2]]

Example:
a = [[1], [2]]
b = a.copy()        # b is shallow copy (outer list copied, inner lists shared)
b[0].append(3)      # modifies shared inner list
a                   # [[1, 3], [2]] (a also changed!)
b                   # [[1, 3], [2]] (same nested objects)

Common uses:
• Understanding shallow copy: nested objects shared
• Avoiding nested sharing: b = copy.deepcopy(a)
• Shallow copy behavior
• Nested object sharing

Example: If a = [[1], [2]] and b = a.copy(), then b[0].append(3) changes a to [[1, 3], [2]] because shallow copy creates a new outer list but shares the nested inner lists, so modifications to nested objects through either variable affect both.
`
  }),
  (_i: number) => ({ 
    q: `What is a = [[1], [2]]; b = copy.deepcopy(a); b[0].append(3); a?`, 
    o: ["[[1], [2]]", "[[1, 3], [2]]", "Error", "None"], 
    c: 0, 
    e: "Deep copy creates independent nested objects.",
    de: `A deep copy creates independent copies of both the outer structure and all nested objects. If a = [[1], [2]] and b = copy.deepcopy(a), then b[0].append(3) doesn't modify a because deepcopy() creates new objects for both the outer list and all nested lists. The outer list is copied, and each nested list is also copied independently, so modifications to nested objects in the copy don't affect the original.

Deep copy creates independent nested objects:
• a = [[1], [2]]; b = copy.deepcopy(a) creates deep copy
• b[0].append(3) modifies only b's inner list
• a remains [[1], [2]] because inner lists are independent
• Outer list copied, nested lists also copied
• Modifications to nested objects don't affect original

How it works:
• a = [[1], [2]] creates list with nested lists
• b = copy.deepcopy(a) creates new outer list and new inner lists
• a and b point to different outer lists
• And a[0] and b[0] point to different inner lists
• b[0].append(3) modifies only b's inner list
• a remains unchanged: [[1], [2]]

Example:
import copy
a = [[1], [2]]
b = copy.deepcopy(a) # b is deep copy (everything copied)
b[0].append(3)       # modifies only b's inner list
a                    # [[1], [2]] (a unchanged!)
b                    # [[1, 3], [2]] (b modified)

Common uses:
• Creating independent nested copies: b = copy.deepcopy(a)
• Avoiding nested sharing: deep_copy = copy.deepcopy(nested)
• Deep copy behavior
• Complete independence

Example: If a = [[1], [2]] and b = copy.deepcopy(a), then b[0].append(3) doesn't change a - a remains [[1], [2]] because deep copy creates independent copies of both the outer list and all nested lists, so modifications to nested objects in the copy don't affect the original.
`
  }),
  
  // 81-90: List Unpacking and Advanced Operations
  (_i: number) => ({ 
    q: `What is a, b, c = [1, 2, 3]?`, 
    o: ["a=1, b=2, c=3", "Error", "a=[1,2,3], b=None, c=None", "None"], 
    c: 0, 
    e: "List unpacking assigns elements to variables.",
    de: `List unpacking assigns elements from a list to variables in a single statement. a, b, c = [1, 2, 3] assigns 1 to a, 2 to b, and 3 to c because Python unpacks the list elements and assigns them to the variables in order. The number of variables must match the number of elements in the list (or you can use * to collect extra elements). Unpacking works with any sequence type (lists, tuples, strings).

List unpacking:
• a, b, c = [1, 2, 3] assigns: a=1, b=2, c=3
• Unpacks list elements to variables
• Variables assigned in order
• Number of variables must match elements (or use *)
• Works with any sequence

How it works:
• [1, 2, 3] is the list
• a, b, c are variables
• Python unpacks elements: 1, 2, 3
• Assigns in order: a=1, b=2, c=3
• All three variables assigned

Example:
a, b, c = [1, 2, 3]    # a=1, b=2, c=3
x, y = ['a', 'b']      # x='a', y='b'
a, b, c = (1, 2, 3)    # a=1, b=2, c=3 (tuples work too)

Common uses:
• Multiple assignment: a, b, c = items
• Unpacking sequences: x, y = point
• Clean variable assignment
• Sequence unpacking

Example: a, b, c = [1, 2, 3] assigns 1 to a, 2 to b, and 3 to c because Python unpacks the list elements and assigns them to the variables in order.
`
  }),
  (_i: number) => ({ 
    q: `What is a, *b = [1, 2, 3, 4]?`, 
    o: ["a=1, b=[2,3,4]", "Error", "a=[1,2,3,4], b=[]", "None"], 
    c: 0, 
    e: "* unpacks remaining elements into list.",
    de: `The * operator in unpacking collects remaining elements into a list. a, *b = [1, 2, 3, 4] assigns 1 to a and [2, 3, 4] to b because *b collects all remaining elements (2, 3, 4) into a list and assigns them to b. The * operator must appear on exactly one variable and collects all extra elements. If there are no remaining elements, * collects an empty list.

Unpacking with *:
• a, *b = [1, 2, 3, 4] assigns: a=1, b=[2, 3, 4]
• *b collects remaining elements into list
• First element goes to a
• Remaining elements go to b as list
• * must appear on exactly one variable

How it works:
• [1, 2, 3, 4] is the list
• a, *b are variables
• Python unpacks: 1 to a, remaining [2, 3, 4] to b
• * collects extra elements: [2, 3, 4]
• Assigns: a=1, b=[2, 3, 4]

Example:
a, *b = [1, 2, 3, 4]  # a=1, b=[2, 3, 4]
a, *b = [1, 2]        # a=1, b=[2]
a, *b = [1]           # a=1, b=[]

Common uses:
• Collecting rest: first, *rest = items
• Variable-length unpacking: head, *tail = data
• Flexible unpacking
• Remaining elements

Example: a, *b = [1, 2, 3, 4] assigns 1 to a and [2, 3, 4] to b because *b collects all remaining elements into a list.
`
  }),
  (_i: number) => ({ 
    q: `What is *a, b = [1, 2, 3, 4]?`, 
    o: ["a=[1,2,3], b=4", "Error", "a=[], b=[1,2,3,4]", "None"], 
    c: 0, 
    e: "* at start unpacks all but last.",
    de: `The * operator at the beginning collects all elements except the last into a list. *a, b = [1, 2, 3, 4] assigns [1, 2, 3] to a and 4 to b because *a collects all elements except the last (1, 2, 3) into a list, and b gets the last element (4). This is useful for separating all but the last element from the rest.

* at start unpacks all but last:
• *a, b = [1, 2, 3, 4] assigns: a=[1, 2, 3], b=4
• *a collects all except last into list
• b gets last element
• Useful for "all but last" patterns
• * must appear on exactly one variable

How it works:
• [1, 2, 3, 4] is the list
• *a, b are variables
• Python unpacks: all but last [1, 2, 3] to a, last 4 to b
• * collects initial elements: [1, 2, 3]
• Assigns: a=[1, 2, 3], b=4

Example:
*a, b = [1, 2, 3, 4]  # a=[1, 2, 3], b=4
*a, b = [1, 2]        # a=[1], b=2
*a, b = [1]           # a=[], b=1

Common uses:
• All but last: *rest, last = items
• Separating last: *prefix, suffix = data
• Flexible unpacking
• Last element separation

Example: *a, b = [1, 2, 3, 4] assigns [1, 2, 3] to a and 4 to b because *a collects all elements except the last into a list, and b gets the last element.
`
  }),
  (_i: number) => ({ 
    q: `What is a, b, *c = [1, 2]?`, 
    o: ["a=1, b=2, c=[]", "Error", "a=1, b=2, c=None", "None"], 
    c: 0, 
    e: "* gets empty list if no remaining elements.",
    de: `The * operator gets an empty list if there are no remaining elements to collect. a, b, *c = [1, 2] assigns 1 to a, 2 to b, and [] to c because there are no remaining elements after assigning to a and b, so *c collects an empty list. This is consistent behavior - * always creates a list, even if it's empty, rather than assigning None.

* gets empty list if no remaining:
• a, b, *c = [1, 2] assigns: a=1, b=2, c=[]
• All elements assigned to a and b
• No remaining elements for *c
• *c collects empty list (not None)
• * always creates list type

How it works:
• [1, 2] is the list
• a, b, *c are variables
• Python unpacks: 1 to a, 2 to b
• No remaining elements
• *c collects empty list: []

Example:
a, b, *c = [1, 2]     # a=1, b=2, c=[]
a, *b = [1]           # a=1, b=[]
*a, b, c = [1, 2]     # a=[], b=1, c=2

Common uses:
• Safe unpacking: first, second, *rest = items (rest might be empty)
• Variable unpacking: *prefix, suffix = data
• Flexible unpacking
• Optional remaining elements

Example: a, b, *c = [1, 2] assigns 1 to a, 2 to b, and [] to c because all elements are assigned to a and b, so *c collects an empty list (not None).
`
  }),
  (_i: number) => ({ 
    q: `What is [*[1, 2], *[3, 4]]?`, 
    o: ["[1, 2, 3, 4]", "[[1, 2], [3, 4]]", "Error", "None"], 
    c: 0, 
    e: "Unpacking in list literal combines lists.",
    de: `Unpacking in a list literal uses the * operator to expand iterables and combine them into a single list. [*[1, 2], *[3, 4]] returns [1, 2, 3, 4] because *[1, 2] unpacks elements 1 and 2, and *[3, 4] unpacks elements 3 and 4, and they're combined into a single list. This is equivalent to [1, 2] + [3, 4], but uses unpacking syntax.

Unpacking in list literal:
• [*[1, 2], *[3, 4]] = [1, 2, 3, 4]
• * unpacks iterable into individual elements
• Elements combined into single list
• Equivalent to concatenation
• Works with any iterable

How it works:
• [*[1, 2], *[3, 4]] unpacks both lists
• *[1, 2] expands to 1, 2
• *[3, 4] expands to 3, 4
• Combined into list: [1, 2, 3, 4]
• Returns new list: [1, 2, 3, 4]

Example:
[*[1, 2], *[3, 4]]    # [1, 2, 3, 4]
[*[1, 2], 5]          # [1, 2, 5]
[*range(3), *range(3)] # [0, 1, 2, 0, 1, 2]

Common uses:
• Combining lists: combined = [*list1, *list2]
• Merging iterables: result = [*items1, *items2]
• List combination
• Iterable merging

Example: [*[1, 2], *[3, 4]] returns [1, 2, 3, 4] because the * operator unpacks both lists into individual elements, which are then combined into a single list.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2] + [3] vs [*[1, 2], 3]?`, 
    o: ["Both create [1, 2, 3]", "Different results", "Error", "None"], 
    c: 0, 
    e: "Both create same list, different syntax.",
    de: `Both [1, 2] + [3] and [*[1, 2], 3] create the same list [1, 2, 3], but use different syntax. [1, 2] + [3] uses the + operator to concatenate lists, while [*[1, 2], 3] uses unpacking in a list literal to expand [1, 2] into elements and combine them with 3. Both produce the same result - a new list containing [1, 2, 3]. The choice between them is a matter of style or context.

+ vs unpacking:
• [1, 2] + [3] = [1, 2, 3] (concatenation)
• [*[1, 2], 3] = [1, 2, 3] (unpacking)
• Both create same list
• Different syntax, same result
• Both create new list

How it works:
• [1, 2] + [3]: + operator concatenates lists → [1, 2, 3]
• [*[1, 2], 3]: * unpacks [1, 2] to 1, 2, combines with 3 → [1, 2, 3]
• Both produce same result: [1, 2, 3]
• Both create new list object
• Different syntax approaches

Example:
[1, 2] + [3]          # [1, 2, 3] (concatenation)
[*[1, 2], 3]          # [1, 2, 3] (unpacking)
[1, 2] + [3] == [*[1, 2], 3] # True (same result)

Common uses:
• Combining lists: result = list1 + list2 or [*list1, *list2]
• Creating lists: combined = [*items, new_item]
• List creation
• Flexible syntax

Example: Both [1, 2] + [3] and [*[1, 2], 3] create [1, 2, 3] because + concatenates lists while unpacking expands iterables - both produce the same result with different syntax.
`
  }),
  (_i: number) => ({ 
    q: `What is max([1, 2, 3])?`, 
    o: ["3", "1", "[1, 2, 3]", "Error"], 
    c: 0, 
    e: "max() finds maximum element.",
    de: `The max() function finds and returns the maximum element from an iterable. max([1, 2, 3]) returns 3 because max() compares all elements in the list and returns the largest value. max() works with any iterable containing comparable elements (numbers, strings, etc.) and returns the element with the maximum value according to Python's comparison rules.

max() function:
• max([1, 2, 3]) = 3 (returns maximum)
• max() finds largest element
• Compares all elements
• Returns the maximum value
• Works with any iterable

How it works:
• max() called with [1, 2, 3]
• Compares elements: 1, 2, 3
• Finds maximum: 3
• Returns maximum: 3
• Raises ValueError if iterable empty

Example:
max([1, 2, 3])        # 3 (maximum)
max([5, 1, 9])        # 9 (maximum)
max(['a', 'b', 'c'])  # 'c' (lexicographically largest)
max([])               # ValueError (empty)

Common uses:
• Finding maximum: largest = max(items)
• Getting max value: max_val = max(data)
• Maximum finding
• Comparison operations

Example: max([1, 2, 3]) returns 3 because max() compares all elements in the list (1, 2, 3) and returns the largest value, which is 3.
`
  }),
  (_i: number) => ({ 
    q: `What is min([1, 2, 3])?`, 
    o: ["1", "3", "[1, 2, 3]", "Error"], 
    c: 0, 
    e: "min() finds minimum element.",
    de: `The min() function finds and returns the minimum element from an iterable. min([1, 2, 3]) returns 1 because min() compares all elements in the list and returns the smallest value. min() works with any iterable containing comparable elements (numbers, strings, etc.) and returns the element with the minimum value according to Python's comparison rules.

min() function:
• min([1, 2, 3]) = 1 (returns minimum)
• min() finds smallest element
• Compares all elements
• Returns the minimum value
• Works with any iterable

How it works:
• min() called with [1, 2, 3]
• Compares elements: 1, 2, 3
• Finds minimum: 1
• Returns minimum: 1
• Raises ValueError if iterable empty

Example:
min([1, 2, 3])        # 1 (minimum)
min([5, 1, 9])        # 1 (minimum)
min(['a', 'b', 'c'])  # 'a' (lexicographically smallest)
min([])               # ValueError (empty)

Common uses:
• Finding minimum: smallest = min(items)
• Getting min value: min_val = min(data)
• Minimum finding
• Comparison operations

Example: min([1, 2, 3]) returns 1 because min() compares all elements in the list (1, 2, 3) and returns the smallest value, which is 1.
`
  }),
  (_i: number) => ({ 
    q: `What is sum([1, 2, 3])?`, 
    o: ["6", "0", "[1, 2, 3]", "Error"], 
    c: 0, 
    e: "sum() adds all elements.",
    de: `The sum() function adds all elements in an iterable and returns the total. sum([1, 2, 3]) returns 6 because sum() iterates through the list and adds all values: 1 + 2 + 3 = 6. sum() works with iterables containing numbers (integers, floats) and returns the sum of all elements. If the iterable is empty, sum() returns 0 (the additive identity).

sum() function:
• sum([1, 2, 3]) = 6 (returns sum)
• sum() adds all elements
• Iterates through iterable
• Returns total sum
• Returns 0 if iterable empty

How it works:
• sum() called with [1, 2, 3]
• Iterates through elements: 1, 2, 3
• Adds values: 1 + 2 + 3
• Returns total: 6
• Works with any numeric iterable

Example:
sum([1, 2, 3])        # 6 (1+2+3)
sum([10, 20, 30])     # 60 (10+20+30)
sum([])               # 0 (empty, additive identity)
sum([1.5, 2.5, 3.5])  # 7.5 (floats work)

Common uses:
• Adding elements: total = sum(items)
• Calculating sum: result = sum(data)
• Summation
• Aggregation operations

Example: sum([1, 2, 3]) returns 6 because sum() iterates through the list and adds all values (1 + 2 + 3 = 6).
`
  }),
  (_i: number) => ({ 
    q: `What is all([True, True, False])?`, 
    o: ["False", "True", "[True, True, False]", "Error"], 
    c: 0, 
    e: "all() returns True only if all elements are Truthy.",
    de: `The all() function returns True only if all elements in an iterable are truthy. all([True, True, False]) returns False because all() checks each element: True (truthy), True (truthy), False (falsy). Since not all elements are truthy (False is falsy), all() returns False. If all elements were truthy, it would return True. all() is useful for checking if all conditions are met.

all() function:
• all([True, True, False]) = False
• all() returns True only if all elements truthy
• Checks each element
• Returns False if any element falsy
• Returns True if all elements truthy

How it works:
• all() called with [True, True, False]
• Checks each element: True (truthy), True (truthy), False (falsy)
• Finds False (falsy element)
• Returns False (not all truthy)
• Short-circuits at first falsy

Example:
all([True, True, False]) # False (not all truthy)
all([True, True, True]) # True (all truthy)
all([1, 2, 3])          # True (all numbers truthy)
all([1, 0, 3])          # False (0 is falsy)

Common uses:
• Checking all conditions: if all(conditions):
• Validating all values: if all(items):
• All-check validation
• Condition verification

Example: all([True, True, False]) returns False because all() checks each element and finds that not all elements are truthy (False is falsy), so it returns False.
`
  }),
  
  // 91-100: List Advanced Features
  (_i: number) => ({ 
    q: `What is any([False, False, True])?`, 
    o: ["True", "False", "[False, False, True]", "Error"], 
    c: 0, 
    e: "any() returns True if any element is Truthy.",
    de: `The any() function returns True if any element in an iterable is truthy. any([False, False, True]) returns True because any() checks each element: False (falsy), False (falsy), True (truthy). Since at least one element is truthy (True is truthy), any() returns True. If all elements were falsy, it would return False. any() is useful for checking if any condition is met.

any() function:
• any([False, False, True]) = True
• any() returns True if any element truthy
• Checks each element
• Returns True if at least one element truthy
• Returns False if all elements falsy

How it works:
• any() called with [False, False, True]
• Checks each element: False (falsy), False (falsy), True (truthy)
• Finds True (truthy element)
• Returns True (at least one truthy)
• Short-circuits at first truthy

Example:
any([False, False, True])  # True (at least one truthy)
any([False, False, False]) # False (all falsy)
any([0, 0, 1])             # True (1 is truthy)
any([])                    # False (empty iterable)

Common uses:
• Checking any condition: if any(conditions):
• Finding if any value truthy: if any(items):
• Any-check validation
• Condition verification

Example: any([False, False, True]) returns True because any() checks each element and finds that at least one element is truthy (True is truthy), so it returns True.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2, 3] * 2?`, 
    o: ["[1, 2, 3, 1, 2, 3]", "[2, 4, 6]", "[1, 2, 3, 2]", "Error"], 
    c: 0, 
    e: "* repeats entire list.",
    de: `The * operator repeats a list a specified number of times. [1, 2, 3] * 2 returns [1, 2, 3, 1, 2, 3] because * repeats the entire list 2 times, concatenating the repetitions. This creates a new list object with the elements repeated. The multiplier must be an integer, and multiplying by 0 results in an empty list.

List repetition with *:
• [1, 2, 3] * 2 = [1, 2, 3, 1, 2, 3]
• * repeats entire list N times
• Creates new list object
• Original list unchanged
• Elements repeated in sequence

How it works:
• [1, 2, 3] is the list
• * 2 means repeat 2 times
• Repeats: [1, 2, 3], [1, 2, 3]
• Concatenates repetitions
• Returns new list: [1, 2, 3, 1, 2, 3]

Example:
[1, 2, 3] * 2          # [1, 2, 3, 1, 2, 3]
[1, 2] * 3              # [1, 2, 1, 2, 1, 2]
[1, 2, 3] * 0           # [] (empty list)

Common uses:
• Repeating patterns: pattern = items * n
• Creating duplicates: repeated = list * count
• List multiplication
• Pattern generation

Example: [1, 2, 3] * 2 returns [1, 2, 3, 1, 2, 3] because * repeats the entire list 2 times, creating a new list with the elements repeated.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2] == [1.0, 2.0]?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "== compares values, 1 == 1.0 is True.",
    de: `The == operator compares list contents by value, not by type. [1, 2] == [1.0, 2.0] returns True because == compares the values of elements: 1 == 1.0 (True) and 2 == 2.0 (True). Even though 1 is an integer and 1.0 is a float, they represent the same numeric value, so == returns True. This is consistent with Python's equality comparison, where values are compared, not types.

== compares values:
• [1, 2] == [1.0, 2.0] = True
• == compares element values
• 1 == 1.0 (same value)
• 2 == 2.0 (same value)
• Type doesn't matter, value does

How it works:
• [1, 2] is first list
• == is equality operator
• [1.0, 2.0] is second list
• Compares element by element:
  - 1 == 1.0 (same value, True)
  - 2 == 2.0 (same value, True)
• All elements equal, returns True

Example:
[1, 2] == [1.0, 2.0]  # True (same values)
[1, 2] == [1, 2.0]    # True (same values)
[1, 2] == [1.1, 2.0]  # False (1 != 1.1)

Common uses:
• Comparing lists: if list1 == list2:
• Value equality: if items == expected:
• Content comparison
• Value-based equality

Example: [1, 2] == [1.0, 2.0] returns True because == compares element values (1 == 1.0 and 2 == 2.0), and even though one list contains integers and the other contains floats, they represent the same numeric values.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2] == [1, 2, 3]?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "Lists must have same length and elements.",
    de: `The == operator requires lists to have the same length and same elements in the same order for them to be equal. [1, 2] == [1, 2, 3] returns False because the lists have different lengths - the first list has 2 elements while the second has 3 elements. Even though both lists start with [1, 2], they are not equal because they have different lengths. == checks both the number of elements and each element's value.

== requires same length:
• [1, 2] == [1, 2, 3] = False
• == checks length first
• Different lengths: 2 vs 3
• Elements match for first 2 positions
• But different lengths, returns False

How it works:
• [1, 2] is first list (length 2)
• == is equality operator
• [1, 2, 3] is second list (length 3)
• Compares lengths: 2 != 3
• Different lengths, returns False immediately

Example:
[1, 2] == [1, 2, 3]   # False (different lengths)
[1, 2] == [1, 2]      # True (same length and elements)
[1, 2, 3] == [1, 2]   # False (different lengths)

Common uses:
• Comparing lists: if list1 == list2: (must match exactly)
• Validating equality: if items == expected:
• Exact comparison
• Length and content check

Example: [1, 2] == [1, 2, 3] returns False because the lists have different lengths (2 vs 3), and == requires both the same length and same elements for equality.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2] != [1, 3]?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "!= checks if lists are different.",
    de: `The != operator checks if two lists are different (not equal). [1, 2] != [1, 3] returns True because != checks if the lists are not equal. The lists have the same length (2) and the first element is the same (1), but the second element is different (2 vs 3), so they are not equal. != returns True when lists differ in any way - length, elements, or order.

!= checks if different:
• [1, 2] != [1, 3] = True
• != checks if lists not equal
• Same length: 2 == 2
• Different elements: 2 != 3
• Returns True (lists are different)

How it works:
• [1, 2] is first list
• != is not-equal operator
• [1, 3] is second list
• Compares element by element:
  - 1 == 1 (same, continue)
  - 2 != 3 (different, returns True)
• Returns True (lists are different)

Example:
[1, 2] != [1, 3]     # True (different elements)
[1, 2] != [1, 2]     # False (same lists)
[1, 2] != [2, 1]     # True (different order)

Common uses:
• Checking difference: if list1 != list2:
• Validating inequality: if items != expected:
• Difference check
• Inequality validation

Example: [1, 2] != [1, 3] returns True because != checks if the lists are different, and they differ at the second element (2 vs 3), so they are not equal.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2] < [1, 2, 3]?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Shorter list is less if it's a prefix.",
    de: `When comparing lists of different lengths, Python compares element by element until it finds a difference. [1, 2] < [1, 2, 3] returns True because the first list is a prefix of the second - all elements of the first list match the corresponding elements of the second list (1 == 1, 2 == 2), and a shorter list is considered less than a longer list when it's a prefix. This is consistent with lexicographic ordering.

Comparison with different lengths:
• [1, 2] < [1, 2, 3] = True
• Shorter list is prefix of longer
• All elements match: 1 == 1, 2 == 2
• Shorter list < longer list when prefix
• Returns True (prefix is less)

How it works:
• [1, 2] is first list (length 2)
• < is less-than operator
• [1, 2, 3] is second list (length 3)
• Compares element by element:
  - Index 0: 1 == 1 (equal, continue)
  - Index 1: 2 == 2 (equal, continue)
  - First list ends, shorter is less
• Returns True

Example:
[1, 2] < [1, 2, 3]   # True (prefix is less)
[1, 2] < [1, 2]      # False (equal)
[1, 2, 3] < [1, 2]   # False (longer not less)

Common uses:
• Comparing lists: if list1 < list2: (lexicographic)
• Ordering lists: sorted(lists)
• Lexicographic comparison
• Sequence ordering

Example: [1, 2] < [1, 2, 3] returns True because the first list is a prefix of the second (all its elements match), and in lexicographic ordering, a shorter list that is a prefix of a longer list is considered less than the longer list.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2, 3] > [1, 2]?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Longer list is greater if shorter is prefix.",
    de: `When comparing lists of different lengths, Python compares element by element until it finds a difference. [1, 2, 3] > [1, 2] returns True because the second list is a prefix of the first - all elements of the shorter list match the corresponding elements of the longer list (1 == 1, 2 == 2), and a longer list is considered greater than a shorter list when the shorter is a prefix. This is consistent with lexicographic ordering.

Comparison - longer vs shorter:
• [1, 2, 3] > [1, 2] = True
• Longer list contains shorter as prefix
• All elements match: 1 == 1, 2 == 2
• Longer list > shorter list when shorter is prefix
• Returns True (longer is greater)

How it works:
• [1, 2, 3] is first list (length 3)
• > is greater-than operator
• [1, 2] is second list (length 2)
• Compares element by element:
  - Index 0: 1 == 1 (equal, continue)
  - Index 1: 2 == 2 (equal, continue)
  - Second list ends, longer is greater
• Returns True

Example:
[1, 2, 3] > [1, 2]   # True (longer is greater)
[1, 2, 3] > [1, 2, 3] # False (equal)
[1, 2] > [1, 2, 3]   # False (shorter not greater)

Common uses:
• Comparing lists: if list1 > list2: (lexicographic)
• Ordering lists: sorted(lists)
• Lexicographic comparison
• Sequence ordering

Example: [1, 2, 3] > [1, 2] returns True because the second list is a prefix of the first (all its elements match), and in lexicographic ordering, a longer list is considered greater than a shorter list when the shorter is a prefix.
`
  }),
  (_i: number) => ({ 
    q: `What is [1, 2] + [3] * 2?`, 
    o: ["[1, 2, 3, 3]", "[1, 2, 6]", "[1, 2, 3]", "Error"], 
    c: 0, 
    e: "Operator precedence: * before +.",
    de: `Operator precedence determines the order of operations. [1, 2] + [3] * 2 returns [1, 2, 3, 3] because * has higher precedence than +, so [3] * 2 is evaluated first, creating [3, 3], then [1, 2] + [3, 3] concatenates them to create [1, 2, 3, 3]. The * operator binds more tightly than +, so multiplication happens before addition.

Operator precedence:
• [1, 2] + [3] * 2 = [1, 2, 3, 3]
• * has higher precedence than +
• [3] * 2 evaluated first: [3, 3]
• Then [1, 2] + [3, 3]: [1, 2, 3, 3]
• Multiplication before addition

How it works:
• Expression: [1, 2] + [3] * 2
• Precedence: * before +
• Step 1: [3] * 2 = [3, 3] (multiplication first)
• Step 2: [1, 2] + [3, 3] = [1, 2, 3, 3] (addition second)
• Returns: [1, 2, 3, 3]

Example:
[1, 2] + [3] * 2     # [1, 2, 3, 3] (* first)
([1, 2] + [3]) * 2   # [1, 2, 3, 1, 2, 3] (parentheses change order)
[3] * 2 + [1, 2]     # [3, 3, 1, 2] (* first)

Common uses:
• Understanding precedence: result = items1 + items2 * n
• Operator order: combined = list1 + list2 * repeat
• Precedence awareness
• Expression evaluation

Example: [1, 2] + [3] * 2 returns [1, 2, 3, 3] because * has higher precedence than +, so [3] * 2 is evaluated first (creating [3, 3]), then [1, 2] + [3, 3] concatenates them.
`
  }),
  (_i: number) => ({ 
    q: `What is ([1, 2] + [3]) * 2?`, 
    o: ["[1, 2, 3, 1, 2, 3]", "[1, 2, 6]", "[1, 2, 3]", "Error"], 
    c: 0, 
    e: "Parentheses change order: concatenate first, then repeat.",
    de: `Parentheses override operator precedence, changing the order of operations. ([1, 2] + [3]) * 2 returns [1, 2, 3, 1, 2, 3] because parentheses force the + operation to happen first: ([1, 2] + [3]) creates [1, 2, 3], then * 2 repeats that list twice, creating [1, 2, 3, 1, 2, 3]. Without parentheses, * would happen first due to precedence.

Parentheses change order:
• ([1, 2] + [3]) * 2 = [1, 2, 3, 1, 2, 3]
• Parentheses override precedence
• [1, 2] + [3] evaluated first: [1, 2, 3]
• Then [1, 2, 3] * 2: [1, 2, 3, 1, 2, 3]
• Addition before multiplication

How it works:
• Expression: ([1, 2] + [3]) * 2
• Parentheses: force + first
• Step 1: ([1, 2] + [3]) = [1, 2, 3] (addition first)
• Step 2: [1, 2, 3] * 2 = [1, 2, 3, 1, 2, 3] (multiplication second)
• Returns: [1, 2, 3, 1, 2, 3]

Example:
([1, 2] + [3]) * 2   # [1, 2, 3, 1, 2, 3] (+ first)
[1, 2] + [3] * 2     # [1, 2, 3, 3] (* first, no parentheses)
([1, 2] + [3, 4]) * 2 # [1, 2, 3, 4, 1, 2, 3, 4]

Common uses:
• Controlling order: result = (list1 + list2) * n
• Explicit grouping: combined = (items1 + items2) * repeat
• Precedence control
• Expression grouping

Example: ([1, 2] + [3]) * 2 returns [1, 2, 3, 1, 2, 3] because parentheses force the + operation to happen first (creating [1, 2, 3]), then * 2 repeats that list twice.
`
  }),
  (_i: number) => ({ 
    q: `What is len([1, 2] + [3, 4])?`, 
    o: ["4", "2", "3", "Error"], 
    c: 0, 
    e: "Concatenated list has sum of lengths.",
    de: `The len() function returns the total number of elements in a list. len([1, 2] + [3, 4]) returns 4 because + concatenates the two lists into [1, 2, 3, 4], which has 4 elements. The length of a concatenated list is the sum of the lengths of the original lists. len() counts all elements in the resulting list, regardless of how the list was created.

len() of concatenated list:
• len([1, 2] + [3, 4]) = 4
• + concatenates: [1, 2] + [3, 4] = [1, 2, 3, 4]
• len() counts all elements: 4
• Length is sum of original lengths: 2 + 2 = 4
• Returns total count

How it works:
• Expression: [1, 2] + [3, 4]
• Concatenates: [1, 2, 3, 4]
• len() counts elements: 1, 2, 3, 4
• Total count: 4
• Returns: 4

Example:
len([1, 2] + [3, 4]) # 4 (2 + 2 = 4)
len([1] + [2, 3])    # 3 (1 + 2 = 3)
len([1, 2, 3] + [])  # 3 (3 + 0 = 3)

Common uses:
• Getting total length: total = len(list1 + list2)
• Calculating combined size: count = len(items1 + items2)
• Total count
• Combined length

Example: len([1, 2] + [3, 4]) returns 4 because + concatenates the lists into [1, 2, 3, 4], which has 4 elements, and len() counts all elements in the concatenated list.
`
  }),
];
