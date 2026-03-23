// --- LEVEL 9 INTERMEDIATE B: Advanced Inheritance Patterns, Method Resolution, Class Hierarchies (50 TRULY UNIQUE QUESTIONS) ---
// Topics 51-100: Inheriting from built-ins, class hierarchy patterns, advanced method resolution
export const level9IntermediateB = [
  // 51. Subclassing list — adding a custom method
  (_i: number) => ({
    q: `class MyList(list):\n    def first(self):\n        return self[0]\nml = MyList([1, 2, 3])\nWhat is ml.first()?`,
    o: ["1", "Error", "None", "[1, 2, 3]"],
    c: 0,
    e: "MyList inherits from list and adds a first() method that returns self[0], so ml.first() returns 1.",
    de: `You can subclass built-in types like list, dict, str, int, and set to add custom behavior while retaining all original functionality.

Key concepts:
• class MyList(list): creates a subclass of list
• MyList inherits all list methods (append, pop, len, indexing, etc.)
• The custom first() method uses self[0] — self IS the list
• MyList([1, 2, 3]) creates an instance with elements [1, 2, 3]

How it works:
1. MyList inherits from list, so MyList([1, 2, 3]) creates a list-like object
2. ml.first() calls the custom method
3. self[0] accesses index 0 of the list itself
4. Returns 1

Example:
class MyList(list):
    def first(self):
        return self[0]
    def last(self):
        return self[-1]
ml = MyList([10, 20, 30])
ml.first()   # 10
ml.last()    # 30
ml.append(40)  # inherited method still works

Common uses:
• Adding convenience methods to built-in types
• Creating domain-specific collection types
• Extending built-in behavior without modifying it

Key Concepts:
• Returns 1 Example: class MyList(list): def first(self): return self[0] def last(self): return self[-1] ml = MyList([10, 20, 30]) ml.first() # 10 ml.last() # 30 ml.append(40) # inherited method still works Common uses: • Adding convenience methods to built-in types • Creating domain-specific collection types • Extending built-in behavior without modifying it

Key Distinctions:
• This question’s focus is best captured by: You can subclass built-in types like list, dict, str, int, and set to add custom behavior while retaining all original functionality.
• The contrast that matters for correctness is summarized by: Key concepts: • class MyList(list): creates a subclass of list • MyList inherits all list methods (append, pop, len, indexing, etc.) • The custom first() method uses self[0] — self IS the list • MyList([1, 2, 3]) creates an instance with elements [1, 2, 3] How it works: 1.

How It Works:
• Python follows the rule implied by: You can subclass built-in types like list, dict, str, int, and set to add custom behavior while retaining all original functionality.
• The outcome you observe follows from: Returns 1 Example: class MyList(list): def first(self): return self[0] def last(self): return self[-1] ml = MyList([10, 20, 30]) ml.first() # 10 ml.last() # 30 ml.append(40) # inherited method still works Common uses: • Adding convenience methods to built-in types • Creating domain-specific collection types • Extending built-in behavior without modifying it

Step-by-Step Execution:
1. Start from the construct described in: You can subclass built-in types like list, dict, str, int, and set to add custom behavior while retaining all original functionality.
2. Resolve the subparts implied by: Key concepts: • class MyList(list): creates a subclass of list • MyList inherits all list methods (append, pop, len, indexing, etc.) • The custom first() method uses self[0] — self IS the list • MyList([1, 2, 3]) creates an instance with elements [1, 2, 3] How it works: 1.
3. Apply the core semantics highlighted in: MyList inherits from list, so MyList([1, 2, 3]) creates a list-like object 2.
4. Confirm the final result aligns with: Returns 1 Example: class MyList(list): def first(self): return self[0] def last(self): return self[-1] ml = MyList([10, 20, 30]) ml.first() # 10 ml.last() # 30 ml.append(40) # inherited method still works Common uses: • Adding convenience methods to built-in types • Creating domain-specific collection types • Extending built-in behavior without modifying it

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • class MyList(list): creates a subclass of list • MyList inherits all list methods (append, pop, len, indexing, etc.) • The custom first() method uses self[0] — self IS the list • MyList([1, 2, 3]) creates an instance with elements [1, 2, 3] How it works: 1.
2. Apply the construct’s main rule next, matching: You can subclass built-in types like list, dict, str, int, and set to add custom behavior while retaining all original functionality.
3. Produce any intermediate values that Returns 1 Example: class MyList(list): def first(self): return self[0] def last(self): return self[-1] ml = MyList([10, 20, 30]) ml.first() # 10 ml.last() # 30 ml.append(40) # inherited method still works Common uses: • Adding convenience methods to built-in types • Creating domain-specific collection types • Extending built-in behavior without modifying it relies on
4. Finish by returning/assembling the final output named by: Returns 1 Example: class MyList(list): def first(self): return self[0] def last(self): return self[-1] ml = MyList([10, 20, 30]) ml.first() # 10 ml.last() # 30 ml.append(40) # inherited method still works Common uses: • Adding convenience methods to built-in types • Creating domain-specific collection types • Extending built-in behavior without modifying it
5. Use the result only after the full construct has completed, per: You can subclass built-in types like list, dict, str, int, and set to add custom behavior while retaining all original functionality.

Common Use Cases:
• Teaching this behavior using the mental model: You can subclass built-in types like list, dict, str, int, and set to add custom behavior while retaining all original functionality.
• Debugging when the observed value should match the expectation in: Returns 1 Example: class MyList(list): def first(self): return self[0] def last(self): return self[-1] ml = MyList([10, 20, 30]) ml.first() # 10 ml.last() # 30 ml.append(40) # inherited method still works Common uses: • Adding convenience methods to built-in types • Creating domain-specific collection types • Extending built-in behavior without modifying it

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • class MyList(list): creates a subclass of list • MyList inherits all list methods (append, pop, len, indexing, etc.) • The custom first() method uses self[0] — self IS the list • MyList([1, 2, 3]) creates an instance with elements [1, 2, 3] How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: MyList inherits from list, so MyList([1, 2, 3]) creates a list-like object 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Returns 1 Example: class MyList(list): def first(self): return self[0] def last(self): return self[-1] ml = MyList([10, 20, 30]) ml.first() # 10 ml.last() # 30 ml.append(40) # inherited method still works Common uses: • Adding convenience methods to built-in types • Creating domain-specific collection types • Extending built-in behavior without modifying it.
• When performance matters, prefer the simplest pattern that still implements: You can subclass built-in types like list, dict, str, int, and set to add custom behavior while retaining all original functionality..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: You can subclass built-in types like list, dict, str, int, and set to add custom behavior while retaining all original functionality..

Notes:
• For maintainable code, make the intent behind: Key concepts: • class MyList(list): creates a subclass of list • MyList inherits all list methods (append, pop, len, indexing, etc.) • The custom first() method uses self[0] — self IS the list • MyList([1, 2, 3]) creates an instance with elements [1, 2, 3] How it works: 1. explicit (and test it with inputs like those in this prompt).`
  }),
  // 52. Subclassing list — inherited methods work
  (_i: number) => ({
    q: `class MyList(list): pass\nml = MyList([1, 2, 3])\nml.append(4)\nWhat is len(ml)?`,
    o: ["4", "3", "Error", "None"],
    c: 0,
    e: "MyList inherits all list methods including append() and works with len(), so after appending 4 the length is 4.",
    de: `Even an empty subclass (using pass) inherits every method and behavior from the parent class. MyList gets append, pop, insert, len support, indexing, and everything else list provides.

Key concepts:
• class MyList(list): pass — inherits everything, adds nothing
• ml.append(4) uses the inherited list.append method
• len(ml) uses the inherited __len__ method
• The subclass instance behaves identically to a regular list

How it works:
1. MyList([1, 2, 3]) creates a list-like object with 3 elements
2. ml.append(4) adds element 4 using inherited append
3. len(ml) calls inherited __len__, returns 4

Example:
class MyList(list): pass
ml = MyList()
ml.append("a")
ml.extend(["b", "c"])
len(ml)        # 3
ml[0]          # "a"
ml.pop()       # "c"

Common uses:
• Starting point for custom list types
• Type-tagging (isinstance checks)
• Adding methods incrementally

Key Concepts:
• len(ml) calls inherited __len__, returns 4 Example: class MyList(list): pass ml = MyList() ml.append("a") ml.extend(["b", "c"]) len(ml) # 3 ml[0] # "a" ml.pop() # "c" Common uses: • Starting point for custom list types • Type-tagging (isinstance checks) • Adding methods incrementally

Key Distinctions:
• This question’s focus is best captured by: Even an empty subclass (using pass) inherits every method and behavior from the parent class.
• The contrast that matters for correctness is summarized by: MyList gets append, pop, insert, len support, indexing, and everything else list provides.

How It Works:
• Python follows the rule implied by: Even an empty subclass (using pass) inherits every method and behavior from the parent class.
• The outcome you observe follows from: len(ml) calls inherited __len__, returns 4 Example: class MyList(list): pass ml = MyList() ml.append("a") ml.extend(["b", "c"]) len(ml) # 3 ml[0] # "a" ml.pop() # "c" Common uses: • Starting point for custom list types • Type-tagging (isinstance checks) • Adding methods incrementally

Step-by-Step Execution:
1. Start from the construct described in: Even an empty subclass (using pass) inherits every method and behavior from the parent class.
2. Resolve the subparts implied by: MyList gets append, pop, insert, len support, indexing, and everything else list provides.
3. Apply the core semantics highlighted in: Key concepts: • class MyList(list): pass — inherits everything, adds nothing • ml.append(4) uses the inherited list.append method • len(ml) uses the inherited __len__ method • The subclass instance behaves identically to a regular list How it works: 1.
4. Confirm the final result aligns with: len(ml) calls inherited __len__, returns 4 Example: class MyList(list): pass ml = MyList() ml.append("a") ml.extend(["b", "c"]) len(ml) # 3 ml[0] # "a" ml.pop() # "c" Common uses: • Starting point for custom list types • Type-tagging (isinstance checks) • Adding methods incrementally

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: MyList gets append, pop, insert, len support, indexing, and everything else list provides.
2. Apply the construct’s main rule next, matching: Even an empty subclass (using pass) inherits every method and behavior from the parent class.
3. Produce any intermediate values that len(ml) calls inherited __len__, returns 4 Example: class MyList(list): pass ml = MyList() ml.append("a") ml.extend(["b", "c"]) len(ml) # 3 ml[0] # "a" ml.pop() # "c" Common uses: • Starting point for custom list types • Type-tagging (isinstance checks) • Adding methods incrementally relies on
4. Finish by returning/assembling the final output named by: len(ml) calls inherited __len__, returns 4 Example: class MyList(list): pass ml = MyList() ml.append("a") ml.extend(["b", "c"]) len(ml) # 3 ml[0] # "a" ml.pop() # "c" Common uses: • Starting point for custom list types • Type-tagging (isinstance checks) • Adding methods incrementally
5. Use the result only after the full construct has completed, per: Even an empty subclass (using pass) inherits every method and behavior from the parent class.

Common Use Cases:
• Teaching this behavior using the mental model: Even an empty subclass (using pass) inherits every method and behavior from the parent class.
• Debugging when the observed value should match the expectation in: len(ml) calls inherited __len__, returns 4 Example: class MyList(list): pass ml = MyList() ml.append("a") ml.extend(["b", "c"]) len(ml) # 3 ml[0] # "a" ml.pop() # "c" Common uses: • Starting point for custom list types • Type-tagging (isinstance checks) • Adding methods incrementally

Edge Cases:
• If inputs vary from the situation described in: MyList gets append, pop, insert, len support, indexing, and everything else list provides., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • class MyList(list): pass — inherits everything, adds nothing • ml.append(4) uses the inherited list.append method • len(ml) uses the inherited __len__ method • The subclass instance behaves identically to a regular list How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: len(ml) calls inherited __len__, returns 4 Example: class MyList(list): pass ml = MyList() ml.append("a") ml.extend(["b", "c"]) len(ml) # 3 ml[0] # "a" ml.pop() # "c" Common uses: • Starting point for custom list types • Type-tagging (isinstance checks) • Adding methods incrementally.
• When performance matters, prefer the simplest pattern that still implements: Even an empty subclass (using pass) inherits every method and behavior from the parent class..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Even an empty subclass (using pass) inherits every method and behavior from the parent class..

Notes:
• For maintainable code, make the intent behind: MyList gets append, pop, insert, len support, indexing, and everything else list provides. explicit (and test it with inputs like those in this prompt).`
  }),
  // 53. Subclassing dict — custom method using self.keys()
  (_i: number) => ({
    q: `class MyDict(dict):\n    def keys_sorted(self):\n        return sorted(self.keys())\nWhat is MyDict(b=2, a=1).keys_sorted()?`,
    o: ["['a', 'b']", "['b', 'a']", "Error", "{'a', 'b'}"],
    c: 0,
    e: "keys_sorted() calls sorted() on the dict's keys, returning them in alphabetical order: ['a', 'b'].",
    de: `Subclassing dict lets you add methods that operate on the dictionary data. Since self IS the dict, you can call self.keys(), self.values(), self.items(), and any other dict method inside your custom methods.

Key concepts:
• MyDict inherits from dict — self is the dictionary
• self.keys() returns the dict's keys
• sorted() returns a sorted list
• MyDict(b=2, a=1) creates a dict with keys 'b' and 'a'

How it works:
1. MyDict(b=2, a=1) creates {"b": 2, "a": 1}
2. keys_sorted() calls self.keys() → dict_keys(["b", "a"])
3. sorted(["b", "a"]) → ["a", "b"]
4. Returns ["a", "b"]

Example:
class MyDict(dict):
    def keys_sorted(self):
        return sorted(self.keys())
    def values_sorted(self):
        return [self[k] for k in self.keys_sorted()]
d = MyDict(c=3, a=1, b=2)
d.keys_sorted()    # ["a", "b", "c"]
d.values_sorted()  # [1, 2, 3]

Key Concepts:
• Returns ["a", "b"] Example: class MyDict(dict): def keys_sorted(self): return sorted(self.keys()) def values_sorted(self): return [self[k] for k in self.keys_sorted()] d = MyDict(c=3, a=1, b=2) d.keys_sorted() # ["a", "b", "c"] d.values_sorted() # [1, 2, 3]

Key Distinctions:
• This question’s focus is best captured by: Subclassing dict lets you add methods that operate on the dictionary data.
• The contrast that matters for correctness is summarized by: Since self IS the dict, you can call self.keys(), self.values(), self.items(), and any other dict method inside your custom methods.

How It Works:
• Python follows the rule implied by: Subclassing dict lets you add methods that operate on the dictionary data.
• The outcome you observe follows from: Returns ["a", "b"] Example: class MyDict(dict): def keys_sorted(self): return sorted(self.keys()) def values_sorted(self): return [self[k] for k in self.keys_sorted()] d = MyDict(c=3, a=1, b=2) d.keys_sorted() # ["a", "b", "c"] d.values_sorted() # [1, 2, 3]

Step-by-Step Execution:
1. Start from the construct described in: Subclassing dict lets you add methods that operate on the dictionary data.
2. Resolve the subparts implied by: Since self IS the dict, you can call self.keys(), self.values(), self.items(), and any other dict method inside your custom methods.
3. Apply the core semantics highlighted in: Key concepts: • MyDict inherits from dict — self is the dictionary • self.keys() returns the dict's keys • sorted() returns a sorted list • MyDict(b=2, a=1) creates a dict with keys 'b' and 'a' How it works: 1.
4. Confirm the final result aligns with: Returns ["a", "b"] Example: class MyDict(dict): def keys_sorted(self): return sorted(self.keys()) def values_sorted(self): return [self[k] for k in self.keys_sorted()] d = MyDict(c=3, a=1, b=2) d.keys_sorted() # ["a", "b", "c"] d.values_sorted() # [1, 2, 3]

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Since self IS the dict, you can call self.keys(), self.values(), self.items(), and any other dict method inside your custom methods.
2. Apply the construct’s main rule next, matching: Subclassing dict lets you add methods that operate on the dictionary data.
3. Produce any intermediate values that Returns ["a", "b"] Example: class MyDict(dict): def keys_sorted(self): return sorted(self.keys()) def values_sorted(self): return [self[k] for k in self.keys_sorted()] d = MyDict(c=3, a=1, b=2) d.keys_sorted() # ["a", "b", "c"] d.values_sorted() # [1, 2, 3] relies on
4. Finish by returning/assembling the final output named by: Returns ["a", "b"] Example: class MyDict(dict): def keys_sorted(self): return sorted(self.keys()) def values_sorted(self): return [self[k] for k in self.keys_sorted()] d = MyDict(c=3, a=1, b=2) d.keys_sorted() # ["a", "b", "c"] d.values_sorted() # [1, 2, 3]
5. Use the result only after the full construct has completed, per: Subclassing dict lets you add methods that operate on the dictionary data.

Common Use Cases:
• Teaching this behavior using the mental model: Subclassing dict lets you add methods that operate on the dictionary data.
• Debugging when the observed value should match the expectation in: Returns ["a", "b"] Example: class MyDict(dict): def keys_sorted(self): return sorted(self.keys()) def values_sorted(self): return [self[k] for k in self.keys_sorted()] d = MyDict(c=3, a=1, b=2) d.keys_sorted() # ["a", "b", "c"] d.values_sorted() # [1, 2, 3]

Edge Cases:
• If inputs vary from the situation described in: Since self IS the dict, you can call self.keys(), self.values(), self.items(), and any other dict method inside your custom methods., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • MyDict inherits from dict — self is the dictionary • self.keys() returns the dict's keys • sorted() returns a sorted list • MyDict(b=2, a=1) creates a dict with keys 'b' and 'a' How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Returns ["a", "b"] Example: class MyDict(dict): def keys_sorted(self): return sorted(self.keys()) def values_sorted(self): return [self[k] for k in self.keys_sorted()] d = MyDict(c=3, a=1, b=2) d.keys_sorted() # ["a", "b", "c"] d.values_sorted() # [1, 2, 3].
• When performance matters, prefer the simplest pattern that still implements: Subclassing dict lets you add methods that operate on the dictionary data..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Subclassing dict lets you add methods that operate on the dictionary data..

Notes:
• For maintainable code, make the intent behind: Since self IS the dict, you can call self.keys(), self.values(), self.items(), and any other dict method inside your custom methods. explicit (and test it with inputs like those in this prompt).`
  }),
  // 54. Subclassing str — custom method
  (_i: number) => ({
    q: `class MyStr(str):\n    def shout(self):\n        return self.upper() + "!"\nWhat is MyStr("hello").shout()?`,
    o: ['"HELLO!"', '"hello!"', 'Error', '"HELLO"'],
    c: 0,
    e: "shout() calls self.upper() which returns 'HELLO', then concatenates '!' to get 'HELLO!'.",
    de: `Subclassing str lets you add custom string manipulation methods. Since str is immutable, self is the string value itself and you can call any str method on it.

Key concepts:
• class MyStr(str): creates a subclass of str
• self refers to the string value ("hello")
• self.upper() returns "HELLO" (inherited method)
• Concatenation with "!" gives "HELLO!"

How it works:
1. MyStr("hello") creates a string subclass instance with value "hello"
2. shout() calls self.upper() → "HELLO"
3. "HELLO" + "!" → "HELLO!"
4. Returns "HELLO!"

Example:
class MyStr(str):
    def shout(self):
        return self.upper() + "!"
    def whisper(self):
        return self.lower() + "..."
MyStr("Hello").shout()    # "HELLO!"
MyStr("Hello").whisper()  # "hello..."

Note: str is immutable — methods always return new strings, never modify self.

Key Concepts:
• Returns "HELLO!" Example: class MyStr(str): def shout(self): return self.upper() + "!" def whisper(self): return self.lower() + "..." MyStr("Hello").shout() # "HELLO!" MyStr("Hello").whisper() # "hello..." Note: str is immutable — methods always return new strings, never modify self.

Key Distinctions:
• This question’s focus is best captured by: Subclassing str lets you add custom string manipulation methods.
• The contrast that matters for correctness is summarized by: Since str is immutable, self is the string value itself and you can call any str method on it.

How It Works:
• Python follows the rule implied by: Subclassing str lets you add custom string manipulation methods.
• The outcome you observe follows from: Returns "HELLO!" Example: class MyStr(str): def shout(self): return self.upper() + "!" def whisper(self): return self.lower() + "..." MyStr("Hello").shout() # "HELLO!" MyStr("Hello").whisper() # "hello..." Note: str is immutable — methods always return new strings, never modify self.

Step-by-Step Execution:
1. Start from the construct described in: Subclassing str lets you add custom string manipulation methods.
2. Resolve the subparts implied by: Since str is immutable, self is the string value itself and you can call any str method on it.
3. Apply the core semantics highlighted in: Key concepts: • class MyStr(str): creates a subclass of str • self refers to the string value ("hello") • self.upper() returns "HELLO" (inherited method) • Concatenation with "!" gives "HELLO!" How it works: 1.
4. Confirm the final result aligns with: Returns "HELLO!" Example: class MyStr(str): def shout(self): return self.upper() + "!" def whisper(self): return self.lower() + "..." MyStr("Hello").shout() # "HELLO!" MyStr("Hello").whisper() # "hello..." Note: str is immutable — methods always return new strings, never modify self.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Since str is immutable, self is the string value itself and you can call any str method on it.
2. Apply the construct’s main rule next, matching: Subclassing str lets you add custom string manipulation methods.
3. Produce any intermediate values that Returns "HELLO!" Example: class MyStr(str): def shout(self): return self.upper() + "!" def whisper(self): return self.lower() + "..." MyStr("Hello").shout() # "HELLO!" MyStr("Hello").whisper() # "hello..." Note: str is immutable — methods always return new strings, never modify self. relies on
4. Finish by returning/assembling the final output named by: Returns "HELLO!" Example: class MyStr(str): def shout(self): return self.upper() + "!" def whisper(self): return self.lower() + "..." MyStr("Hello").shout() # "HELLO!" MyStr("Hello").whisper() # "hello..." Note: str is immutable — methods always return new strings, never modify self.
5. Use the result only after the full construct has completed, per: Subclassing str lets you add custom string manipulation methods.

Common Use Cases:
• Teaching this behavior using the mental model: Subclassing str lets you add custom string manipulation methods.
• Debugging when the observed value should match the expectation in: Returns "HELLO!" Example: class MyStr(str): def shout(self): return self.upper() + "!" def whisper(self): return self.lower() + "..." MyStr("Hello").shout() # "HELLO!" MyStr("Hello").whisper() # "hello..." Note: str is immutable — methods always return new strings, never modify self.

Edge Cases:
• If inputs vary from the situation described in: Since str is immutable, self is the string value itself and you can call any str method on it., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • class MyStr(str): creates a subclass of str • self refers to the string value ("hello") • self.upper() returns "HELLO" (inherited method) • Concatenation with "!" gives "HELLO!" How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Returns "HELLO!" Example: class MyStr(str): def shout(self): return self.upper() + "!" def whisper(self): return self.lower() + "..." MyStr("Hello").shout() # "HELLO!" MyStr("Hello").whisper() # "hello..." Note: str is immutable — methods always return new strings, never modify self..
• When performance matters, prefer the simplest pattern that still implements: Subclassing str lets you add custom string manipulation methods..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Subclassing str lets you add custom string manipulation methods..

Notes:
• For maintainable code, make the intent behind: Since str is immutable, self is the string value itself and you can call any str method on it. explicit (and test it with inputs like those in this prompt).`
  }),
  // 55. Subclassing int — custom method returns True
  (_i: number) => ({
    q: `class MyInt(int):\n    def is_even(self):\n        return self % 2 == 0\nWhat is MyInt(4).is_even()?`,
    o: ["True", "False", "Error", "0"],
    c: 0,
    e: "MyInt(4) has value 4, and 4 % 2 == 0 is True, so is_even() returns True.",
    de: `You can subclass int to add custom numeric methods. Since int is immutable, the value is set at creation and self holds the integer value.

Key concepts:
• class MyInt(int): creates a subclass of int
• self is the integer value (4 in this case)
• self % 2 == 0 checks if the value is even
• 4 % 2 == 0 → 0 == 0 → True

How it works:
1. MyInt(4) creates an int subclass instance with value 4
2. is_even() evaluates self % 2 == 0
3. 4 % 2 → 0, 0 == 0 → True
4. Returns True

Example:
class MyInt(int):
    def is_even(self):
        return self % 2 == 0
    def is_positive(self):
        return self > 0
MyInt(4).is_even()      # True
MyInt(3).is_even()      # False
MyInt(-5).is_positive()  # False

Key Concepts:
• Returns True Example: class MyInt(int): def is_even(self): return self % 2 == 0 def is_positive(self): return self > 0 MyInt(4).is_even() # True MyInt(3).is_even() # False MyInt(-5).is_positive() # False

Key Distinctions:
• This question’s focus is best captured by: You can subclass int to add custom numeric methods.
• The contrast that matters for correctness is summarized by: Since int is immutable, the value is set at creation and self holds the integer value.

How It Works:
• Python follows the rule implied by: You can subclass int to add custom numeric methods.
• The outcome you observe follows from: Returns True Example: class MyInt(int): def is_even(self): return self % 2 == 0 def is_positive(self): return self > 0 MyInt(4).is_even() # True MyInt(3).is_even() # False MyInt(-5).is_positive() # False

Step-by-Step Execution:
1. Start from the construct described in: You can subclass int to add custom numeric methods.
2. Resolve the subparts implied by: Since int is immutable, the value is set at creation and self holds the integer value.
3. Apply the core semantics highlighted in: Key concepts: • class MyInt(int): creates a subclass of int • self is the integer value (4 in this case) • self % 2 == 0 checks if the value is even • 4 % 2 == 0 → 0 == 0 → True How it works: 1.
4. Confirm the final result aligns with: Returns True Example: class MyInt(int): def is_even(self): return self % 2 == 0 def is_positive(self): return self > 0 MyInt(4).is_even() # True MyInt(3).is_even() # False MyInt(-5).is_positive() # False

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Since int is immutable, the value is set at creation and self holds the integer value.
2. Apply the construct’s main rule next, matching: You can subclass int to add custom numeric methods.
3. Produce any intermediate values that Returns True Example: class MyInt(int): def is_even(self): return self % 2 == 0 def is_positive(self): return self > 0 MyInt(4).is_even() # True MyInt(3).is_even() # False MyInt(-5).is_positive() # False relies on
4. Finish by returning/assembling the final output named by: Returns True Example: class MyInt(int): def is_even(self): return self % 2 == 0 def is_positive(self): return self > 0 MyInt(4).is_even() # True MyInt(3).is_even() # False MyInt(-5).is_positive() # False
5. Use the result only after the full construct has completed, per: You can subclass int to add custom numeric methods.

Common Use Cases:
• Teaching this behavior using the mental model: You can subclass int to add custom numeric methods.
• Debugging when the observed value should match the expectation in: Returns True Example: class MyInt(int): def is_even(self): return self % 2 == 0 def is_positive(self): return self > 0 MyInt(4).is_even() # True MyInt(3).is_even() # False MyInt(-5).is_positive() # False

Edge Cases:
• If inputs vary from the situation described in: Since int is immutable, the value is set at creation and self holds the integer value., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • class MyInt(int): creates a subclass of int • self is the integer value (4 in this case) • self % 2 == 0 checks if the value is even • 4 % 2 == 0 → 0 == 0 → True How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Returns True Example: class MyInt(int): def is_even(self): return self % 2 == 0 def is_positive(self): return self > 0 MyInt(4).is_even() # True MyInt(3).is_even() # False MyInt(-5).is_positive() # False.
• When performance matters, prefer the simplest pattern that still implements: You can subclass int to add custom numeric methods..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: You can subclass int to add custom numeric methods..

Notes:
• For maintainable code, make the intent behind: Since int is immutable, the value is set at creation and self holds the integer value. explicit (and test it with inputs like those in this prompt).`
  }),
  // 56. Subclassing int — custom method returns False
  (_i: number) => ({
    q: `class MyInt(int):\n    def is_even(self):\n        return self % 2 == 0\nWhat is MyInt(3).is_even()?`,
    o: ["False", "True", "Error", "1"],
    c: 0,
    e: "MyInt(3) has value 3, and 3 % 2 == 0 is False (3 % 2 is 1), so is_even() returns False.",
    de: `This tests the same is_even() method with an odd number. The modulo operation 3 % 2 produces 1, which is not equal to 0.

Key concepts:
• self is 3 (the integer value)
• 3 % 2 → 1 (remainder of dividing 3 by 2)
• 1 == 0 → False
• The method correctly identifies 3 as odd

How it works:
1. MyInt(3) creates an int subclass instance with value 3
2. is_even() evaluates self % 2 == 0
3. 3 % 2 → 1, 1 == 0 → False
4. Returns False

The modulo approach works for all integers:
• Even: 0, 2, 4, -2, -4 → n % 2 == 0 → True
• Odd: 1, 3, 5, -1, -3 → n % 2 != 0 → False

Key Concepts:
• Returns False The modulo approach works for all integers: • Even: 0, 2, 4, -2, -4 → n % 2 == 0 → True • Odd: 1, 3, 5, -1, -3 → n % 2 != 0 → False

Key Distinctions:
• This question’s focus is best captured by: This tests the same is_even() method with an odd number.
• The contrast that matters for correctness is summarized by: The modulo operation 3 % 2 produces 1, which is not equal to 0.

How It Works:
• Python follows the rule implied by: This tests the same is_even() method with an odd number.
• The outcome you observe follows from: Returns False The modulo approach works for all integers: • Even: 0, 2, 4, -2, -4 → n % 2 == 0 → True • Odd: 1, 3, 5, -1, -3 → n % 2 != 0 → False

Step-by-Step Execution:
1. Start from the construct described in: This tests the same is_even() method with an odd number.
2. Resolve the subparts implied by: The modulo operation 3 % 2 produces 1, which is not equal to 0.
3. Apply the core semantics highlighted in: Key concepts: • self is 3 (the integer value) • 3 % 2 → 1 (remainder of dividing 3 by 2) • 1 == 0 → False • The method correctly identifies 3 as odd How it works: 1.
4. Confirm the final result aligns with: Returns False The modulo approach works for all integers: • Even: 0, 2, 4, -2, -4 → n % 2 == 0 → True • Odd: 1, 3, 5, -1, -3 → n % 2 != 0 → False

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The modulo operation 3 % 2 produces 1, which is not equal to 0.
2. Apply the construct’s main rule next, matching: This tests the same is_even() method with an odd number.
3. Produce any intermediate values that Returns False The modulo approach works for all integers: • Even: 0, 2, 4, -2, -4 → n % 2 == 0 → True • Odd: 1, 3, 5, -1, -3 → n % 2 != 0 → False relies on
4. Finish by returning/assembling the final output named by: Returns False The modulo approach works for all integers: • Even: 0, 2, 4, -2, -4 → n % 2 == 0 → True • Odd: 1, 3, 5, -1, -3 → n % 2 != 0 → False
5. Use the result only after the full construct has completed, per: This tests the same is_even() method with an odd number.

Common Use Cases:
• Teaching this behavior using the mental model: This tests the same is_even() method with an odd number.
• Debugging when the observed value should match the expectation in: Returns False The modulo approach works for all integers: • Even: 0, 2, 4, -2, -4 → n % 2 == 0 → True • Odd: 1, 3, 5, -1, -3 → n % 2 != 0 → False

Edge Cases:
• If inputs vary from the situation described in: The modulo operation 3 % 2 produces 1, which is not equal to 0., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • self is 3 (the integer value) • 3 % 2 → 1 (remainder of dividing 3 by 2) • 1 == 0 → False • The method correctly identifies 3 as odd How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Returns False The modulo approach works for all integers: • Even: 0, 2, 4, -2, -4 → n % 2 == 0 → True • Odd: 1, 3, 5, -1, -3 → n % 2 != 0 → False.
• When performance matters, prefer the simplest pattern that still implements: This tests the same is_even() method with an odd number..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This tests the same is_even() method with an odd number..

Notes:
• For maintainable code, make the intent behind: The modulo operation 3 % 2 produces 1, which is not equal to 0. explicit (and test it with inputs like those in this prompt).`
  }),
  // 57. Subclassing dict — __missing__ hook
  (_i: number) => ({
    q: `class DefaultDict(dict):\n    def __missing__(self, key):\n        self[key] = 0\n        return 0\nd = DefaultDict()\nd["x"] += 1\nWhat is d["x"]?`,
    o: ["1", "0", "Error", "None"],
    c: 0,
    e: "When d['x'] is first accessed, __missing__ sets it to 0 and returns 0. Then += 1 makes it 1.",
    de: `__missing__ is a special dict method called when a key is not found during __getitem__ lookup. This is exactly how collections.defaultdict works internally.

Key concepts:
• __missing__(self, key) is called when dict[key] raises KeyError
• It can set a default and return it
• d["x"] += 1 is equivalent to d["x"] = d["x"] + 1
• First d["x"] triggers __missing__, which sets d["x"] = 0 and returns 0

How it works:
1. d["x"] += 1 expands to d["x"] = d.__getitem__("x") + 1
2. d.__getitem__("x") fails (key missing) → calls __missing__("x")
3. __missing__ sets self["x"] = 0 and returns 0
4. d["x"] = 0 + 1 → d["x"] = 1
5. d["x"] is now 1

Example:
d = DefaultDict()
d["a"]        # 0 (__missing__ sets and returns 0)
d["b"] += 5   # 5 (__missing__ returns 0, then 0+5=5)
d             # {"a": 0, "b": 5}

Common uses:
• Implementing default values for missing keys
• Auto-initializing counters, lists, or nested dicts

Key Concepts:
• d["x"] is now 1 Example: d = DefaultDict() d["a"] # 0 (__missing__ sets and returns 0) d["b"] += 5 # 5 (__missing__ returns 0, then 0+5=5) d # {"a": 0, "b": 5} Common uses: • Implementing default values for missing keys • Auto-initializing counters, lists, or nested dicts

Key Distinctions:
• This question’s focus is best captured by: __missing__ is a special dict method called when a key is not found during __getitem__ lookup.
• The contrast that matters for correctness is summarized by: This is exactly how collections.defaultdict works internally.

How It Works:
• Python follows the rule implied by: __missing__ is a special dict method called when a key is not found during __getitem__ lookup.
• The outcome you observe follows from: d["x"] is now 1 Example: d = DefaultDict() d["a"] # 0 (__missing__ sets and returns 0) d["b"] += 5 # 5 (__missing__ returns 0, then 0+5=5) d # {"a": 0, "b": 5} Common uses: • Implementing default values for missing keys • Auto-initializing counters, lists, or nested dicts

Step-by-Step Execution:
1. Start from the construct described in: __missing__ is a special dict method called when a key is not found during __getitem__ lookup.
2. Resolve the subparts implied by: This is exactly how collections.defaultdict works internally.
3. Apply the core semantics highlighted in: Key concepts: • __missing__(self, key) is called when dict[key] raises KeyError • It can set a default and return it • d["x"] += 1 is equivalent to d["x"] = d["x"] + 1 • First d["x"] triggers __missing__, which sets d["x"] = 0 and returns 0 How it works: 1.
4. Confirm the final result aligns with: d["x"] is now 1 Example: d = DefaultDict() d["a"] # 0 (__missing__ sets and returns 0) d["b"] += 5 # 5 (__missing__ returns 0, then 0+5=5) d # {"a": 0, "b": 5} Common uses: • Implementing default values for missing keys • Auto-initializing counters, lists, or nested dicts

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: This is exactly how collections.defaultdict works internally.
2. Apply the construct’s main rule next, matching: __missing__ is a special dict method called when a key is not found during __getitem__ lookup.
3. Produce any intermediate values that d["x"] is now 1 Example: d = DefaultDict() d["a"] # 0 (__missing__ sets and returns 0) d["b"] += 5 # 5 (__missing__ returns 0, then 0+5=5) d # {"a": 0, "b": 5} Common uses: • Implementing default values for missing keys • Auto-initializing counters, lists, or nested dicts relies on
4. Finish by returning/assembling the final output named by: d["x"] is now 1 Example: d = DefaultDict() d["a"] # 0 (__missing__ sets and returns 0) d["b"] += 5 # 5 (__missing__ returns 0, then 0+5=5) d # {"a": 0, "b": 5} Common uses: • Implementing default values for missing keys • Auto-initializing counters, lists, or nested dicts
5. Use the result only after the full construct has completed, per: __missing__ is a special dict method called when a key is not found during __getitem__ lookup.

Common Use Cases:
• Teaching this behavior using the mental model: __missing__ is a special dict method called when a key is not found during __getitem__ lookup.
• Debugging when the observed value should match the expectation in: d["x"] is now 1 Example: d = DefaultDict() d["a"] # 0 (__missing__ sets and returns 0) d["b"] += 5 # 5 (__missing__ returns 0, then 0+5=5) d # {"a": 0, "b": 5} Common uses: • Implementing default values for missing keys • Auto-initializing counters, lists, or nested dicts

Edge Cases:
• If inputs vary from the situation described in: This is exactly how collections.defaultdict works internally., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • __missing__(self, key) is called when dict[key] raises KeyError • It can set a default and return it • d["x"] += 1 is equivalent to d["x"] = d["x"] + 1 • First d["x"] triggers __missing__, which sets d["x"] = 0 and returns 0 How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: d["x"] is now 1 Example: d = DefaultDict() d["a"] # 0 (__missing__ sets and returns 0) d["b"] += 5 # 5 (__missing__ returns 0, then 0+5=5) d # {"a": 0, "b": 5} Common uses: • Implementing default values for missing keys • Auto-initializing counters, lists, or nested dicts.
• When performance matters, prefer the simplest pattern that still implements: __missing__ is a special dict method called when a key is not found during __getitem__ lookup..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: __missing__ is a special dict method called when a key is not found during __getitem__ lookup..

Notes:
• For maintainable code, make the intent behind: This is exactly how collections.defaultdict works internally. explicit (and test it with inputs like those in this prompt).`
  }),
  // 58. Subclassing str — __new__ for immutable customization
  (_i: number) => ({
    q: `class UpperStr(str):\n    def __new__(cls, s):\n        return super().__new__(cls, s.upper())\nWhat is UpperStr("hello")?`,
    o: ['"HELLO"', '"hello"', 'Error', 'None'],
    c: 0,
    e: "__new__ creates the string with s.upper() before the object exists, so UpperStr('hello') produces 'HELLO'.",
    de: `For immutable types like str, int, tuple, you must override __new__ instead of __init__ to customize the value. By the time __init__ runs, the immutable value is already set and cannot be changed.

Key concepts:
• __new__ is called BEFORE __init__ — it creates the object
• For immutable types, the value is fixed at creation in __new__
• super().__new__(cls, s.upper()) creates a str with the uppercased value
• __init__ cannot modify an already-created immutable object

How it works:
1. UpperStr("hello") calls UpperStr.__new__(UpperStr, "hello")
2. s.upper() → "HELLO"
3. super().__new__(cls, "HELLO") → creates str with value "HELLO"
4. The returned object is an UpperStr instance with value "HELLO"

Example:
class UpperStr(str):
    def __new__(cls, s):
        return super().__new__(cls, s.upper())
UpperStr("hello")    # "HELLO"
UpperStr("World")    # "WORLD"
isinstance(UpperStr("hi"), str)  # True

Common uses:
• Normalizing immutable values at creation time
• Validating immutable data before object creation
• Creating constrained immutable subtypes

Key Concepts:
• The returned object is an UpperStr instance with value "HELLO" Example: class UpperStr(str): def __new__(cls, s): return super().__new__(cls, s.upper()) UpperStr("hello") # "HELLO" UpperStr("World") # "WORLD" isinstance(UpperStr("hi"), str) # True Common uses: • Normalizing immutable values at creation time • Validating immutable data before object creation • Creating constrained immutable subtypes

Key Distinctions:
• This question’s focus is best captured by: For immutable types like str, int, tuple, you must override __new__ instead of __init__ to customize the value.
• The contrast that matters for correctness is summarized by: By the time __init__ runs, the immutable value is already set and cannot be changed.

How It Works:
• Python follows the rule implied by: For immutable types like str, int, tuple, you must override __new__ instead of __init__ to customize the value.
• The outcome you observe follows from: The returned object is an UpperStr instance with value "HELLO" Example: class UpperStr(str): def __new__(cls, s): return super().__new__(cls, s.upper()) UpperStr("hello") # "HELLO" UpperStr("World") # "WORLD" isinstance(UpperStr("hi"), str) # True Common uses: • Normalizing immutable values at creation time • Validating immutable data before object creation • Creating constrained immutable subtypes

Step-by-Step Execution:
1. Start from the construct described in: For immutable types like str, int, tuple, you must override __new__ instead of __init__ to customize the value.
2. Resolve the subparts implied by: By the time __init__ runs, the immutable value is already set and cannot be changed.
3. Apply the core semantics highlighted in: Key concepts: • __new__ is called BEFORE __init__ — it creates the object • For immutable types, the value is fixed at creation in __new__ • super().__new__(cls, s.upper()) creates a str with the uppercased value • __init__ cannot modify an already-created immutable object How it works: 1.
4. Confirm the final result aligns with: The returned object is an UpperStr instance with value "HELLO" Example: class UpperStr(str): def __new__(cls, s): return super().__new__(cls, s.upper()) UpperStr("hello") # "HELLO" UpperStr("World") # "WORLD" isinstance(UpperStr("hi"), str) # True Common uses: • Normalizing immutable values at creation time • Validating immutable data before object creation • Creating constrained immutable subtypes

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: By the time __init__ runs, the immutable value is already set and cannot be changed.
2. Apply the construct’s main rule next, matching: For immutable types like str, int, tuple, you must override __new__ instead of __init__ to customize the value.
3. Produce any intermediate values that The returned object is an UpperStr instance with value "HELLO" Example: class UpperStr(str): def __new__(cls, s): return super().__new__(cls, s.upper()) UpperStr("hello") # "HELLO" UpperStr("World") # "WORLD" isinstance(UpperStr("hi"), str) # True Common uses: • Normalizing immutable values at creation time • Validating immutable data before object creation • Creating constrained immutable subtypes relies on
4. Finish by returning/assembling the final output named by: The returned object is an UpperStr instance with value "HELLO" Example: class UpperStr(str): def __new__(cls, s): return super().__new__(cls, s.upper()) UpperStr("hello") # "HELLO" UpperStr("World") # "WORLD" isinstance(UpperStr("hi"), str) # True Common uses: • Normalizing immutable values at creation time • Validating immutable data before object creation • Creating constrained immutable subtypes
5. Use the result only after the full construct has completed, per: For immutable types like str, int, tuple, you must override __new__ instead of __init__ to customize the value.

Common Use Cases:
• Teaching this behavior using the mental model: For immutable types like str, int, tuple, you must override __new__ instead of __init__ to customize the value.
• Debugging when the observed value should match the expectation in: The returned object is an UpperStr instance with value "HELLO" Example: class UpperStr(str): def __new__(cls, s): return super().__new__(cls, s.upper()) UpperStr("hello") # "HELLO" UpperStr("World") # "WORLD" isinstance(UpperStr("hi"), str) # True Common uses: • Normalizing immutable values at creation time • Validating immutable data before object creation • Creating constrained immutable subtypes

Edge Cases:
• If inputs vary from the situation described in: By the time __init__ runs, the immutable value is already set and cannot be changed., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • __new__ is called BEFORE __init__ — it creates the object • For immutable types, the value is fixed at creation in __new__ • super().__new__(cls, s.upper()) creates a str with the uppercased value • __init__ cannot modify an already-created immutable object How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: The returned object is an UpperStr instance with value "HELLO" Example: class UpperStr(str): def __new__(cls, s): return super().__new__(cls, s.upper()) UpperStr("hello") # "HELLO" UpperStr("World") # "WORLD" isinstance(UpperStr("hi"), str) # True Common uses: • Normalizing immutable values at creation time • Validating immutable data before object creation • Creating constrained immutable subtypes.
• When performance matters, prefer the simplest pattern that still implements: For immutable types like str, int, tuple, you must override __new__ instead of __init__ to customize the value..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: For immutable types like str, int, tuple, you must override __new__ instead of __init__ to customize the value..

Notes:
• For maintainable code, make the intent behind: By the time __init__ runs, the immutable value is already set and cannot be changed. explicit (and test it with inputs like those in this prompt).`
  }),
  // 59. Why __new__ for immutable types (conceptual)
  (_i: number) => ({
    q: `Why must you override __new__ instead of __init__ when subclassing immutable types like str or int?`,
    o: ["Immutable objects are set up in __new__ before __init__ runs", "__init__ doesn't exist for immutable types", "__new__ is faster than __init__", "__init__ only works for mutable types"],
    c: 0,
    e: "Immutable objects have their value fixed in __new__. By the time __init__ runs, the value cannot be changed.",
    de: `The object creation protocol in Python has two phases: __new__ (creation) and __init__ (initialization). For immutable types, the value is permanently set during __new__.

Key concepts:
• __new__ creates and returns a new instance — this is where the value is set
• __init__ initializes an already-created instance — too late for immutables
• Immutable types (str, int, float, tuple, frozenset) cannot be modified after creation
• Mutable types (list, dict, set) can be modified in __init__ because their contents are changeable

How it works:
1. obj = MyStr("hello") → Python calls MyStr.__new__(MyStr, "hello")
2. __new__ creates the string object with its value — value is now FIXED
3. Python then calls obj.__init__("hello")
4. __init__ cannot change the string value — it's immutable

Example:
class UpperStr(str):
    def __init__(self, s):
        pass  # Too late! Value is already "hello", not "HELLO"

class UpperStr(str):
    def __new__(cls, s):
        return super().__new__(cls, s.upper())  # Correct! Sets value to "HELLO"

This is why int, str, tuple subclasses must use __new__ for value customization.

Key Concepts:
• Sets value to "HELLO" This is why int, str, tuple subclasses must use __new__ for value customization.

Key Distinctions:
• This question’s focus is best captured by: The object creation protocol in Python has two phases: __new__ (creation) and __init__ (initialization).
• The contrast that matters for correctness is summarized by: For immutable types, the value is permanently set during __new__.

How It Works:
• Python follows the rule implied by: The object creation protocol in Python has two phases: __new__ (creation) and __init__ (initialization).
• The outcome you observe follows from: Sets value to "HELLO" This is why int, str, tuple subclasses must use __new__ for value customization.

Step-by-Step Execution:
1. Start from the construct described in: The object creation protocol in Python has two phases: __new__ (creation) and __init__ (initialization).
2. Resolve the subparts implied by: For immutable types, the value is permanently set during __new__.
3. Apply the core semantics highlighted in: Key concepts: • __new__ creates and returns a new instance — this is where the value is set • __init__ initializes an already-created instance — too late for immutables • Immutable types (str, int, float, tuple, frozenset) cannot be modified after creation • Mutable types (list, dict, set) can be modified in __init__ because their contents are changeable How it works: 1.
4. Confirm the final result aligns with: Sets value to "HELLO" This is why int, str, tuple subclasses must use __new__ for value customization.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: For immutable types, the value is permanently set during __new__.
2. Apply the construct’s main rule next, matching: The object creation protocol in Python has two phases: __new__ (creation) and __init__ (initialization).
3. Produce any intermediate values that Sets value to "HELLO" This is why int, str, tuple subclasses must use __new__ for value customization. relies on
4. Finish by returning/assembling the final output named by: Sets value to "HELLO" This is why int, str, tuple subclasses must use __new__ for value customization.
5. Use the result only after the full construct has completed, per: The object creation protocol in Python has two phases: __new__ (creation) and __init__ (initialization).

Common Use Cases:
• Teaching this behavior using the mental model: The object creation protocol in Python has two phases: __new__ (creation) and __init__ (initialization).
• Debugging when the observed value should match the expectation in: Sets value to "HELLO" This is why int, str, tuple subclasses must use __new__ for value customization.

Edge Cases:
• If inputs vary from the situation described in: For immutable types, the value is permanently set during __new__., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • __new__ creates and returns a new instance — this is where the value is set • __init__ initializes an already-created instance — too late for immutables • Immutable types (str, int, float, tuple, frozenset) cannot be modified after creation • Mutable types (list, dict, set) can be modified in __init__ because their contents are changeable How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Sets value to "HELLO" This is why int, str, tuple subclasses must use __new__ for value customization..
• When performance matters, prefer the simplest pattern that still implements: The object creation protocol in Python has two phases: __new__ (creation) and __init__ (initialization)..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The object creation protocol in Python has two phases: __new__ (creation) and __init__ (initialization)..

Notes:
• For maintainable code, make the intent behind: For immutable types, the value is permanently set during __new__. explicit (and test it with inputs like those in this prompt).`
  }),
  // 60. Subclassing set — overriding __contains__
  (_i: number) => ({
    q: `class MySet(set):\n    def __contains__(self, item):\n        return super().__contains__(item)\nWhat is 1 in MySet({1, 2, 3})?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "The overridden __contains__ delegates to super().__contains__, which checks set membership normally. 1 is in the set, so True.",
    de: `The 'in' operator calls the __contains__ method. By overriding it in a set subclass, you can customize membership testing behavior while still delegating to the parent implementation.

Key concepts:
• x in obj calls obj.__contains__(x)
• super().__contains__(item) calls set's original __contains__
• The override here adds no new behavior but demonstrates the hook
• You could add logging, caching, or custom logic before/after the check

How it works:
1. 1 in MySet({1, 2, 3}) calls MySet.__contains__(myset, 1)
2. The override calls super().__contains__(1) → set.__contains__
3. 1 is in {1, 2, 3} → True
4. Returns True

Example:
class LoggedSet(set):
    def __contains__(self, item):
        result = super().__contains__(item)
        print(f"Checked {item}: {result}")
        return result
s = LoggedSet({1, 2, 3})
1 in s  # prints "Checked 1: True", returns True
5 in s  # prints "Checked 5: False", returns False

Common uses:
• Logging or auditing membership checks
• Case-insensitive containment
• Custom matching logic

Key Concepts:
• Returns True Example: class LoggedSet(set): def __contains__(self, item): result = super().__contains__(item) print(f"Checked {item}: {result}") return result s = LoggedSet({1, 2, 3}) 1 in s # prints "Checked 1: True", returns True 5 in s # prints "Checked 5: False", returns False Common uses: • Logging or auditing membership checks • Case-insensitive containment • Custom matching logic

Key Distinctions:
• This question’s focus is best captured by: The 'in' operator calls the __contains__ method.
• The contrast that matters for correctness is summarized by: By overriding it in a set subclass, you can customize membership testing behavior while still delegating to the parent implementation.

How It Works:
• Python follows the rule implied by: The 'in' operator calls the __contains__ method.
• The outcome you observe follows from: Returns True Example: class LoggedSet(set): def __contains__(self, item): result = super().__contains__(item) print(f"Checked {item}: {result}") return result s = LoggedSet({1, 2, 3}) 1 in s # prints "Checked 1: True", returns True 5 in s # prints "Checked 5: False", returns False Common uses: • Logging or auditing membership checks • Case-insensitive containment • Custom matching logic

Step-by-Step Execution:
1. Start from the construct described in: The 'in' operator calls the __contains__ method.
2. Resolve the subparts implied by: By overriding it in a set subclass, you can customize membership testing behavior while still delegating to the parent implementation.
3. Apply the core semantics highlighted in: Key concepts: • x in obj calls obj.__contains__(x) • super().__contains__(item) calls set's original __contains__ • The override here adds no new behavior but demonstrates the hook • You could add logging, caching, or custom logic before/after the check How it works: 1.
4. Confirm the final result aligns with: Returns True Example: class LoggedSet(set): def __contains__(self, item): result = super().__contains__(item) print(f"Checked {item}: {result}") return result s = LoggedSet({1, 2, 3}) 1 in s # prints "Checked 1: True", returns True 5 in s # prints "Checked 5: False", returns False Common uses: • Logging or auditing membership checks • Case-insensitive containment • Custom matching logic

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: By overriding it in a set subclass, you can customize membership testing behavior while still delegating to the parent implementation.
2. Apply the construct’s main rule next, matching: The 'in' operator calls the __contains__ method.
3. Produce any intermediate values that Returns True Example: class LoggedSet(set): def __contains__(self, item): result = super().__contains__(item) print(f"Checked {item}: {result}") return result s = LoggedSet({1, 2, 3}) 1 in s # prints "Checked 1: True", returns True 5 in s # prints "Checked 5: False", returns False Common uses: • Logging or auditing membership checks • Case-insensitive containment • Custom matching logic relies on
4. Finish by returning/assembling the final output named by: Returns True Example: class LoggedSet(set): def __contains__(self, item): result = super().__contains__(item) print(f"Checked {item}: {result}") return result s = LoggedSet({1, 2, 3}) 1 in s # prints "Checked 1: True", returns True 5 in s # prints "Checked 5: False", returns False Common uses: • Logging or auditing membership checks • Case-insensitive containment • Custom matching logic
5. Use the result only after the full construct has completed, per: The 'in' operator calls the __contains__ method.

Common Use Cases:
• Teaching this behavior using the mental model: The 'in' operator calls the __contains__ method.
• Debugging when the observed value should match the expectation in: Returns True Example: class LoggedSet(set): def __contains__(self, item): result = super().__contains__(item) print(f"Checked {item}: {result}") return result s = LoggedSet({1, 2, 3}) 1 in s # prints "Checked 1: True", returns True 5 in s # prints "Checked 5: False", returns False Common uses: • Logging or auditing membership checks • Case-insensitive containment • Custom matching logic

Edge Cases:
• If inputs vary from the situation described in: By overriding it in a set subclass, you can customize membership testing behavior while still delegating to the parent implementation., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • x in obj calls obj.__contains__(x) • super().__contains__(item) calls set's original __contains__ • The override here adds no new behavior but demonstrates the hook • You could add logging, caching, or custom logic before/after the check How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Returns True Example: class LoggedSet(set): def __contains__(self, item): result = super().__contains__(item) print(f"Checked {item}: {result}") return result s = LoggedSet({1, 2, 3}) 1 in s # prints "Checked 1: True", returns True 5 in s # prints "Checked 5: False", returns False Common uses: • Logging or auditing membership checks • Case-insensitive containment • Custom matching logic.
• When performance matters, prefer the simplest pattern that still implements: The 'in' operator calls the __contains__ method..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The 'in' operator calls the __contains__ method..

Notes:
• For maintainable code, make the intent behind: By overriding it in a set subclass, you can customize membership testing behavior while still delegating to the parent implementation. explicit (and test it with inputs like those in this prompt).`
  }),
  // 61. isinstance with subclass — child is instance of parent
  (_i: number) => ({
    q: `class MyList(list): pass\nWhat is isinstance(MyList([]), list)?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "A subclass instance IS an instance of its parent class. MyList inherits from list, so isinstance returns True.",
    de: `isinstance checks if an object is an instance of a class OR any of its parent classes. Since MyList inherits from list, every MyList instance is also a list instance.

Key concepts:
• isinstance(obj, cls) returns True if obj is an instance of cls or a subclass of cls
• MyList inherits from list → MyList instances are also list instances
• This is the "is-a" relationship: a MyList IS a list
• This works transitively through the entire inheritance chain

How it works:
1. MyList([]) creates a MyList instance
2. isinstance checks: is this object a list or a subclass of list?
3. MyList IS a subclass of list → True
4. Returns True

Example:
class MyList(list): pass
ml = MyList()
isinstance(ml, MyList)    # True (direct instance)
isinstance(ml, list)      # True (parent class)
isinstance(ml, object)    # True (grandparent — all classes inherit from object)

This is fundamental to polymorphism — subclass instances can be used wherever parent instances are expected.

Key Concepts:
• Returns True Example: class MyList(list): pass ml = MyList() isinstance(ml, MyList) # True (direct instance) isinstance(ml, list) # True (parent class) isinstance(ml, object) # True (grandparent — all classes inherit from object) This is fundamental to polymorphism — subclass instances can be used wherever parent instances are expected.

Key Distinctions:
• This question’s focus is best captured by: isinstance checks if an object is an instance of a class OR any of its parent classes.
• The contrast that matters for correctness is summarized by: Since MyList inherits from list, every MyList instance is also a list instance.

How It Works:
• Python follows the rule implied by: isinstance checks if an object is an instance of a class OR any of its parent classes.
• The outcome you observe follows from: Returns True Example: class MyList(list): pass ml = MyList() isinstance(ml, MyList) # True (direct instance) isinstance(ml, list) # True (parent class) isinstance(ml, object) # True (grandparent — all classes inherit from object) This is fundamental to polymorphism — subclass instances can be used wherever parent instances are expected.

Step-by-Step Execution:
1. Start from the construct described in: isinstance checks if an object is an instance of a class OR any of its parent classes.
2. Resolve the subparts implied by: Since MyList inherits from list, every MyList instance is also a list instance.
3. Apply the core semantics highlighted in: Key concepts: • isinstance(obj, cls) returns True if obj is an instance of cls or a subclass of cls • MyList inherits from list → MyList instances are also list instances • This is the "is-a" relationship: a MyList IS a list • This works transitively through the entire inheritance chain How it works: 1.
4. Confirm the final result aligns with: Returns True Example: class MyList(list): pass ml = MyList() isinstance(ml, MyList) # True (direct instance) isinstance(ml, list) # True (parent class) isinstance(ml, object) # True (grandparent — all classes inherit from object) This is fundamental to polymorphism — subclass instances can be used wherever parent instances are expected.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Since MyList inherits from list, every MyList instance is also a list instance.
2. Apply the construct’s main rule next, matching: isinstance checks if an object is an instance of a class OR any of its parent classes.
3. Produce any intermediate values that Returns True Example: class MyList(list): pass ml = MyList() isinstance(ml, MyList) # True (direct instance) isinstance(ml, list) # True (parent class) isinstance(ml, object) # True (grandparent — all classes inherit from object) This is fundamental to polymorphism — subclass instances can be used wherever parent instances are expected. relies on
4. Finish by returning/assembling the final output named by: Returns True Example: class MyList(list): pass ml = MyList() isinstance(ml, MyList) # True (direct instance) isinstance(ml, list) # True (parent class) isinstance(ml, object) # True (grandparent — all classes inherit from object) This is fundamental to polymorphism — subclass instances can be used wherever parent instances are expected.
5. Use the result only after the full construct has completed, per: isinstance checks if an object is an instance of a class OR any of its parent classes.

Common Use Cases:
• Teaching this behavior using the mental model: isinstance checks if an object is an instance of a class OR any of its parent classes.
• Debugging when the observed value should match the expectation in: Returns True Example: class MyList(list): pass ml = MyList() isinstance(ml, MyList) # True (direct instance) isinstance(ml, list) # True (parent class) isinstance(ml, object) # True (grandparent — all classes inherit from object) This is fundamental to polymorphism — subclass instances can be used wherever parent instances are expected.

Edge Cases:
• If inputs vary from the situation described in: Since MyList inherits from list, every MyList instance is also a list instance., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • isinstance(obj, cls) returns True if obj is an instance of cls or a subclass of cls • MyList inherits from list → MyList instances are also list instances • This is the "is-a" relationship: a MyList IS a list • This works transitively through the entire inheritance chain How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Returns True Example: class MyList(list): pass ml = MyList() isinstance(ml, MyList) # True (direct instance) isinstance(ml, list) # True (parent class) isinstance(ml, object) # True (grandparent — all classes inherit from object) This is fundamental to polymorphism — subclass instances can be used wherever parent instances are expected..
• When performance matters, prefer the simplest pattern that still implements: isinstance checks if an object is an instance of a class OR any of its parent classes..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: isinstance checks if an object is an instance of a class OR any of its parent classes..

Notes:
• For maintainable code, make the intent behind: Since MyList inherits from list, every MyList instance is also a list instance. explicit (and test it with inputs like those in this prompt).`
  }),
  // 62. isinstance — parent NOT instance of child
  (_i: number) => ({
    q: `class MyList(list): pass\nWhat is isinstance([], MyList)?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "A plain list is NOT an instance of MyList. isinstance only looks upward in the hierarchy, not downward.",
    de: `isinstance checks upward through the inheritance chain, not downward. A parent class instance is NOT an instance of its child class.

Key concepts:
• isinstance(obj, cls) checks if obj's type is cls or a SUBCLASS of cls
• list is NOT a subclass of MyList — it's the other way around
• A plain [] is a list, but NOT a MyList
• Inheritance is one-directional: child IS-A parent, but parent IS-NOT-A child

How it works:
1. [] creates a plain list instance
2. isinstance checks: is list a subclass of MyList? No.
3. list is the PARENT, MyList is the CHILD
4. Returns False

Example:
class MyList(list): pass
isinstance([], MyList)       # False (list is not a MyList)
isinstance([], list)         # True (list is a list)
isinstance(MyList([]), list)  # True (MyList IS a list)

This asymmetry is intentional — a Dog is an Animal, but not every Animal is a Dog.

Key Concepts:
• Returns False Example: class MyList(list): pass isinstance([], MyList) # False (list is not a MyList) isinstance([], list) # True (list is a list) isinstance(MyList([]), list) # True (MyList IS a list) This asymmetry is intentional — a Dog is an Animal, but not every Animal is a Dog.

Key Distinctions:
• This question’s focus is best captured by: isinstance checks upward through the inheritance chain, not downward.
• The contrast that matters for correctness is summarized by: A parent class instance is NOT an instance of its child class.

How It Works:
• Python follows the rule implied by: isinstance checks upward through the inheritance chain, not downward.
• The outcome you observe follows from: Returns False Example: class MyList(list): pass isinstance([], MyList) # False (list is not a MyList) isinstance([], list) # True (list is a list) isinstance(MyList([]), list) # True (MyList IS a list) This asymmetry is intentional — a Dog is an Animal, but not every Animal is a Dog.

Step-by-Step Execution:
1. Start from the construct described in: isinstance checks upward through the inheritance chain, not downward.
2. Resolve the subparts implied by: A parent class instance is NOT an instance of its child class.
3. Apply the core semantics highlighted in: Key concepts: • isinstance(obj, cls) checks if obj's type is cls or a SUBCLASS of cls • list is NOT a subclass of MyList — it's the other way around • A plain [] is a list, but NOT a MyList • Inheritance is one-directional: child IS-A parent, but parent IS-NOT-A child How it works: 1.
4. Confirm the final result aligns with: Returns False Example: class MyList(list): pass isinstance([], MyList) # False (list is not a MyList) isinstance([], list) # True (list is a list) isinstance(MyList([]), list) # True (MyList IS a list) This asymmetry is intentional — a Dog is an Animal, but not every Animal is a Dog.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: A parent class instance is NOT an instance of its child class.
2. Apply the construct’s main rule next, matching: isinstance checks upward through the inheritance chain, not downward.
3. Produce any intermediate values that Returns False Example: class MyList(list): pass isinstance([], MyList) # False (list is not a MyList) isinstance([], list) # True (list is a list) isinstance(MyList([]), list) # True (MyList IS a list) This asymmetry is intentional — a Dog is an Animal, but not every Animal is a Dog. relies on
4. Finish by returning/assembling the final output named by: Returns False Example: class MyList(list): pass isinstance([], MyList) # False (list is not a MyList) isinstance([], list) # True (list is a list) isinstance(MyList([]), list) # True (MyList IS a list) This asymmetry is intentional — a Dog is an Animal, but not every Animal is a Dog.
5. Use the result only after the full construct has completed, per: isinstance checks upward through the inheritance chain, not downward.

Common Use Cases:
• Teaching this behavior using the mental model: isinstance checks upward through the inheritance chain, not downward.
• Debugging when the observed value should match the expectation in: Returns False Example: class MyList(list): pass isinstance([], MyList) # False (list is not a MyList) isinstance([], list) # True (list is a list) isinstance(MyList([]), list) # True (MyList IS a list) This asymmetry is intentional — a Dog is an Animal, but not every Animal is a Dog.

Edge Cases:
• If inputs vary from the situation described in: A parent class instance is NOT an instance of its child class., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • isinstance(obj, cls) checks if obj's type is cls or a SUBCLASS of cls • list is NOT a subclass of MyList — it's the other way around • A plain [] is a list, but NOT a MyList • Inheritance is one-directional: child IS-A parent, but parent IS-NOT-A child How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Returns False Example: class MyList(list): pass isinstance([], MyList) # False (list is not a MyList) isinstance([], list) # True (list is a list) isinstance(MyList([]), list) # True (MyList IS a list) This asymmetry is intentional — a Dog is an Animal, but not every Animal is a Dog..
• When performance matters, prefer the simplest pattern that still implements: isinstance checks upward through the inheritance chain, not downward..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: isinstance checks upward through the inheritance chain, not downward..

Notes:
• For maintainable code, make the intent behind: A parent class instance is NOT an instance of its child class. explicit (and test it with inputs like those in this prompt).`
  }),
  // 63. Subclassing list — unique-only append
  (_i: number) => ({
    q: `class AutoList(list):\n    def append(self, item):\n        if item not in self:\n            super().append(item)\nal = AutoList()\nal.append(1)\nal.append(1)\nWhat is len(al)?`,
    o: ["1", "2", "0", "Error"],
    c: 0,
    e: "AutoList.append only adds items not already present. The second append(1) is skipped, so len is 1.",
    de: `By overriding append(), you can add custom logic before delegating to the parent. Here, the override prevents duplicate entries, creating a list that behaves like an ordered set.

Key concepts:
• Override append to add a uniqueness check
• if item not in self uses list's __contains__ to check membership
• super().append(item) calls the original list.append only if item is new
• The second al.append(1) does nothing because 1 is already in the list

How it works:
1. al.append(1): 1 not in [] → True → super().append(1) → al = [1]
2. al.append(1): 1 not in [1] → False → skip
3. len(al) → 1

Example:
al = AutoList()
al.append("a")
al.append("b")
al.append("a")  # skipped
al  # ["a", "b"]
len(al)  # 2

Common uses:
• Maintaining unique ordered collections
• Preventing duplicate entries in lists
• Implementing set-like behavior with list ordering

Key Concepts:
• len(al) → 1 Example: al = AutoList() al.append("a") al.append("b") al.append("a") # skipped al # ["a", "b"] len(al) # 2 Common uses: • Maintaining unique ordered collections • Preventing duplicate entries in lists • Implementing set-like behavior with list ordering

Key Distinctions:
• This question’s focus is best captured by: By overriding append(), you can add custom logic before delegating to the parent.
• The contrast that matters for correctness is summarized by: Here, the override prevents duplicate entries, creating a list that behaves like an ordered set.

How It Works:
• Python follows the rule implied by: By overriding append(), you can add custom logic before delegating to the parent.
• The outcome you observe follows from: len(al) → 1 Example: al = AutoList() al.append("a") al.append("b") al.append("a") # skipped al # ["a", "b"] len(al) # 2 Common uses: • Maintaining unique ordered collections • Preventing duplicate entries in lists • Implementing set-like behavior with list ordering

Step-by-Step Execution:
1. Start from the construct described in: By overriding append(), you can add custom logic before delegating to the parent.
2. Resolve the subparts implied by: Here, the override prevents duplicate entries, creating a list that behaves like an ordered set.
3. Apply the core semantics highlighted in: Key concepts: • Override append to add a uniqueness check • if item not in self uses list's __contains__ to check membership • super().append(item) calls the original list.append only if item is new • The second al.append(1) does nothing because 1 is already in the list How it works: 1.
4. Confirm the final result aligns with: len(al) → 1 Example: al = AutoList() al.append("a") al.append("b") al.append("a") # skipped al # ["a", "b"] len(al) # 2 Common uses: • Maintaining unique ordered collections • Preventing duplicate entries in lists • Implementing set-like behavior with list ordering

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Here, the override prevents duplicate entries, creating a list that behaves like an ordered set.
2. Apply the construct’s main rule next, matching: By overriding append(), you can add custom logic before delegating to the parent.
3. Produce any intermediate values that len(al) → 1 Example: al = AutoList() al.append("a") al.append("b") al.append("a") # skipped al # ["a", "b"] len(al) # 2 Common uses: • Maintaining unique ordered collections • Preventing duplicate entries in lists • Implementing set-like behavior with list ordering relies on
4. Finish by returning/assembling the final output named by: len(al) → 1 Example: al = AutoList() al.append("a") al.append("b") al.append("a") # skipped al # ["a", "b"] len(al) # 2 Common uses: • Maintaining unique ordered collections • Preventing duplicate entries in lists • Implementing set-like behavior with list ordering
5. Use the result only after the full construct has completed, per: By overriding append(), you can add custom logic before delegating to the parent.

Common Use Cases:
• Teaching this behavior using the mental model: By overriding append(), you can add custom logic before delegating to the parent.
• Debugging when the observed value should match the expectation in: len(al) → 1 Example: al = AutoList() al.append("a") al.append("b") al.append("a") # skipped al # ["a", "b"] len(al) # 2 Common uses: • Maintaining unique ordered collections • Preventing duplicate entries in lists • Implementing set-like behavior with list ordering

Edge Cases:
• If inputs vary from the situation described in: Here, the override prevents duplicate entries, creating a list that behaves like an ordered set., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • Override append to add a uniqueness check • if item not in self uses list's __contains__ to check membership • super().append(item) calls the original list.append only if item is new • The second al.append(1) does nothing because 1 is already in the list How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: len(al) → 1 Example: al = AutoList() al.append("a") al.append("b") al.append("a") # skipped al # ["a", "b"] len(al) # 2 Common uses: • Maintaining unique ordered collections • Preventing duplicate entries in lists • Implementing set-like behavior with list ordering.
• When performance matters, prefer the simplest pattern that still implements: By overriding append(), you can add custom logic before delegating to the parent..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: By overriding append(), you can add custom logic before delegating to the parent..

Notes:
• For maintainable code, make the intent behind: Here, the override prevents duplicate entries, creating a list that behaves like an ordered set. explicit (and test it with inputs like those in this prompt).`
  }),
  // 64. type() on subclass instance
  (_i: number) => ({
    q: `class MyList(list): pass\nWhat is type(MyList()).__name__?`,
    o: ['"MyList"', '"list"', '"object"', 'Error'],
    c: 0,
    e: "type() returns the actual class of the instance. MyList() is a MyList, not a plain list.",
    de: `type(obj) returns the exact class that was used to create the object. Even though MyList inherits from list, instances of MyList have type MyList.

Key concepts:
• type(obj) returns the object's actual class (not any parent class)
• type(obj).__name__ gives the class name as a string
• MyList() creates a MyList instance, so type is MyList
• This differs from isinstance, which checks the full hierarchy

How it works:
1. MyList() creates an instance of class MyList
2. type(MyList()) returns <class 'MyList'>
3. .__name__ extracts the string "MyList"

Example:
class MyList(list): pass
type(MyList())           # <class 'MyList'>
type(MyList()).__name__  # "MyList"
type([]).__name__        # "list"

isinstance vs type:
• isinstance(MyList([]), list) → True (checks hierarchy)
• type(MyList([])) is list → False (checks exact type)

Key Concepts:
• .__name__ extracts the string "MyList" Example: class MyList(list): pass type(MyList()) # <class 'MyList'> type(MyList()).__name__ # "MyList" type([]).__name__ # "list" isinstance vs type: • isinstance(MyList([]), list) → True (checks hierarchy) • type(MyList([])) is list → False (checks exact type)

Key Distinctions:
• This question’s focus is best captured by: type(obj) returns the exact class that was used to create the object.
• The contrast that matters for correctness is summarized by: Even though MyList inherits from list, instances of MyList have type MyList.

How It Works:
• Python follows the rule implied by: type(obj) returns the exact class that was used to create the object.
• The outcome you observe follows from: .__name__ extracts the string "MyList" Example: class MyList(list): pass type(MyList()) # <class 'MyList'> type(MyList()).__name__ # "MyList" type([]).__name__ # "list" isinstance vs type: • isinstance(MyList([]), list) → True (checks hierarchy) • type(MyList([])) is list → False (checks exact type)

Step-by-Step Execution:
1. Start from the construct described in: type(obj) returns the exact class that was used to create the object.
2. Resolve the subparts implied by: Even though MyList inherits from list, instances of MyList have type MyList.
3. Apply the core semantics highlighted in: Key concepts: • type(obj) returns the object's actual class (not any parent class) • type(obj).__name__ gives the class name as a string • MyList() creates a MyList instance, so type is MyList • This differs from isinstance, which checks the full hierarchy How it works: 1.
4. Confirm the final result aligns with: .__name__ extracts the string "MyList" Example: class MyList(list): pass type(MyList()) # <class 'MyList'> type(MyList()).__name__ # "MyList" type([]).__name__ # "list" isinstance vs type: • isinstance(MyList([]), list) → True (checks hierarchy) • type(MyList([])) is list → False (checks exact type)

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Even though MyList inherits from list, instances of MyList have type MyList.
2. Apply the construct’s main rule next, matching: type(obj) returns the exact class that was used to create the object.
3. Produce any intermediate values that .__name__ extracts the string "MyList" Example: class MyList(list): pass type(MyList()) # <class 'MyList'> type(MyList()).__name__ # "MyList" type([]).__name__ # "list" isinstance vs type: • isinstance(MyList([]), list) → True (checks hierarchy) • type(MyList([])) is list → False (checks exact type) relies on
4. Finish by returning/assembling the final output named by: .__name__ extracts the string "MyList" Example: class MyList(list): pass type(MyList()) # <class 'MyList'> type(MyList()).__name__ # "MyList" type([]).__name__ # "list" isinstance vs type: • isinstance(MyList([]), list) → True (checks hierarchy) • type(MyList([])) is list → False (checks exact type)
5. Use the result only after the full construct has completed, per: type(obj) returns the exact class that was used to create the object.

Common Use Cases:
• Teaching this behavior using the mental model: type(obj) returns the exact class that was used to create the object.
• Debugging when the observed value should match the expectation in: .__name__ extracts the string "MyList" Example: class MyList(list): pass type(MyList()) # <class 'MyList'> type(MyList()).__name__ # "MyList" type([]).__name__ # "list" isinstance vs type: • isinstance(MyList([]), list) → True (checks hierarchy) • type(MyList([])) is list → False (checks exact type)

Edge Cases:
• If inputs vary from the situation described in: Even though MyList inherits from list, instances of MyList have type MyList., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • type(obj) returns the object's actual class (not any parent class) • type(obj).__name__ gives the class name as a string • MyList() creates a MyList instance, so type is MyList • This differs from isinstance, which checks the full hierarchy How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: .__name__ extracts the string "MyList" Example: class MyList(list): pass type(MyList()) # <class 'MyList'> type(MyList()).__name__ # "MyList" type([]).__name__ # "list" isinstance vs type: • isinstance(MyList([]), list) → True (checks hierarchy) • type(MyList([])) is list → False (checks exact type).
• When performance matters, prefer the simplest pattern that still implements: type(obj) returns the exact class that was used to create the object..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: type(obj) returns the exact class that was used to create the object..

Notes:
• For maintainable code, make the intent behind: Even though MyList inherits from list, instances of MyList have type MyList. explicit (and test it with inputs like those in this prompt).`
  }),
  // 65. Built-in operations return base type, not subclass
  (_i: number) => ({
    q: `class MyList(list): pass\nWhat is type(MyList([1]) + [2]).__name__?`,
    o: ['"list"', '"MyList"', 'Error', '"object"'],
    c: 0,
    e: "List operations like + use list.__add__ which returns a plain list, not the subclass type.",
    de: `A subtle gotcha when subclassing built-ins: operations inherited from the parent return instances of the parent type, not the subclass. list.__add__ returns a plain list.

Key concepts:
• MyList([1]) + [2] calls list.__add__ (inherited, not overridden)
• list.__add__ creates and returns a new list, not a MyList
• The result loses the subclass type
• This applies to many operations: +, *, slicing, etc.

How it works:
1. MyList([1]) is a MyList instance
2. + [2] calls list.__add__(MyList([1]), [2])
3. list.__add__ creates a new list → [1, 2]
4. The result is type list, NOT MyList
5. type([1, 2]).__name__ → "list"

Example:
class MyList(list): pass
ml = MyList([1, 2])
type(ml)           # <class 'MyList'>
type(ml + [3])     # <class 'list'> — not MyList!
type(ml * 2)       # <class 'list'> — not MyList!
type(ml[:1])       # <class 'list'> — not MyList!

To preserve the subclass type, you must override __add__, __mul__, __getitem__, etc.

Key Concepts:
• To preserve the subclass type, you must override __add__, __mul__, __getitem__, etc.

Key Distinctions:
• This question’s focus is best captured by: A subtle gotcha when subclassing built-ins: operations inherited from the parent return instances of the parent type, not the subclass.
• The contrast that matters for correctness is summarized by: list.__add__ returns a plain list.

How It Works:
• Python follows the rule implied by: A subtle gotcha when subclassing built-ins: operations inherited from the parent return instances of the parent type, not the subclass.
• The outcome you observe follows from: To preserve the subclass type, you must override __add__, __mul__, __getitem__, etc.

Step-by-Step Execution:
1. Start from the construct described in: A subtle gotcha when subclassing built-ins: operations inherited from the parent return instances of the parent type, not the subclass.
2. Resolve the subparts implied by: list.__add__ returns a plain list.
3. Apply the core semantics highlighted in: Key concepts: • MyList([1]) + [2] calls list.__add__ (inherited, not overridden) • list.__add__ creates and returns a new list, not a MyList • The result loses the subclass type • This applies to many operations: +, *, slicing, etc.
4. Confirm the final result aligns with: To preserve the subclass type, you must override __add__, __mul__, __getitem__, etc.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: list.__add__ returns a plain list.
2. Apply the construct’s main rule next, matching: A subtle gotcha when subclassing built-ins: operations inherited from the parent return instances of the parent type, not the subclass.
3. Produce any intermediate values that To preserve the subclass type, you must override __add__, __mul__, __getitem__, etc. relies on
4. Finish by returning/assembling the final output named by: To preserve the subclass type, you must override __add__, __mul__, __getitem__, etc.
5. Use the result only after the full construct has completed, per: A subtle gotcha when subclassing built-ins: operations inherited from the parent return instances of the parent type, not the subclass.

Common Use Cases:
• Teaching this behavior using the mental model: A subtle gotcha when subclassing built-ins: operations inherited from the parent return instances of the parent type, not the subclass.
• Debugging when the observed value should match the expectation in: To preserve the subclass type, you must override __add__, __mul__, __getitem__, etc.

Edge Cases:
• If inputs vary from the situation described in: list.__add__ returns a plain list., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • MyList([1]) + [2] calls list.__add__ (inherited, not overridden) • list.__add__ creates and returns a new list, not a MyList • The result loses the subclass type • This applies to many operations: +, *, slicing, etc. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: To preserve the subclass type, you must override __add__, __mul__, __getitem__, etc..
• When performance matters, prefer the simplest pattern that still implements: A subtle gotcha when subclassing built-ins: operations inherited from the parent return instances of the parent type, not the subclass..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: A subtle gotcha when subclassing built-ins: operations inherited from the parent return instances of the parent type, not the subclass..

Notes:
• For maintainable code, make the intent behind: list.__add__ returns a plain list. explicit (and test it with inputs like those in this prompt).`
  }),
  // 66. __bases__ shows only direct parent
  (_i: number) => ({
    q: `class A: pass\nclass B(A): pass\nclass C(B): pass\nWhat is C.__bases__[0].__name__?`,
    o: ['"B"', '"A"', '"object"', '"C"'],
    c: 0,
    e: "__bases__ contains only the direct parent classes. C's direct parent is B, not A.",
    de: `__bases__ is a tuple of a class's direct parent classes — NOT the entire ancestor chain. For the full chain, use __mro__.

Key concepts:
• cls.__bases__ returns a tuple of direct base classes only
• C inherits from B, so C.__bases__ is (B,)
• A is a grandparent of C but NOT in C.__bases__
• For the full hierarchy, use C.__mro__ which includes all ancestors

How it works:
1. class C(B): means C's direct parent is B
2. C.__bases__ → (<class 'B'>,)
3. C.__bases__[0] → <class 'B'>
4. .__name__ → "B"

Example:
class A: pass
class B(A): pass
class C(B): pass
C.__bases__        # (<class 'B'>,) — only direct parent
B.__bases__        # (<class 'A'>,)
A.__bases__        # (<class 'object'>,)
C.__mro__          # (C, B, A, object) — full chain

__bases__ vs __mro__:
• __bases__: direct parents only
• __mro__: full method resolution order (all ancestors)

Key Concepts:
• .__name__ → "B" Example: class A: pass class B(A): pass class C(B): pass C.__bases__ # (<class 'B'>,) — only direct parent B.__bases__ # (<class 'A'>,) A.__bases__ # (<class 'object'>,) C.__mro__ # (C, B, A, object) — full chain __bases__ vs __mro__: • __bases__: direct parents only • __mro__: full method resolution order (all ancestors)

Key Distinctions:
• This question’s focus is best captured by: __bases__ is a tuple of a class's direct parent classes — NOT the entire ancestor chain.
• The contrast that matters for correctness is summarized by: For the full chain, use __mro__.

How It Works:
• Python follows the rule implied by: __bases__ is a tuple of a class's direct parent classes — NOT the entire ancestor chain.
• The outcome you observe follows from: .__name__ → "B" Example: class A: pass class B(A): pass class C(B): pass C.__bases__ # (<class 'B'>,) — only direct parent B.__bases__ # (<class 'A'>,) A.__bases__ # (<class 'object'>,) C.__mro__ # (C, B, A, object) — full chain __bases__ vs __mro__: • __bases__: direct parents only • __mro__: full method resolution order (all ancestors)

Step-by-Step Execution:
1. Start from the construct described in: __bases__ is a tuple of a class's direct parent classes — NOT the entire ancestor chain.
2. Resolve the subparts implied by: For the full chain, use __mro__.
3. Apply the core semantics highlighted in: Key concepts: • cls.__bases__ returns a tuple of direct base classes only • C inherits from B, so C.__bases__ is (B,) • A is a grandparent of C but NOT in C.__bases__ • For the full hierarchy, use C.__mro__ which includes all ancestors How it works: 1.
4. Confirm the final result aligns with: .__name__ → "B" Example: class A: pass class B(A): pass class C(B): pass C.__bases__ # (<class 'B'>,) — only direct parent B.__bases__ # (<class 'A'>,) A.__bases__ # (<class 'object'>,) C.__mro__ # (C, B, A, object) — full chain __bases__ vs __mro__: • __bases__: direct parents only • __mro__: full method resolution order (all ancestors)

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: For the full chain, use __mro__.
2. Apply the construct’s main rule next, matching: __bases__ is a tuple of a class's direct parent classes — NOT the entire ancestor chain.
3. Produce any intermediate values that .__name__ → "B" Example: class A: pass class B(A): pass class C(B): pass C.__bases__ # (<class 'B'>,) — only direct parent B.__bases__ # (<class 'A'>,) A.__bases__ # (<class 'object'>,) C.__mro__ # (C, B, A, object) — full chain __bases__ vs __mro__: • __bases__: direct parents only • __mro__: full method resolution order (all ancestors) relies on
4. Finish by returning/assembling the final output named by: .__name__ → "B" Example: class A: pass class B(A): pass class C(B): pass C.__bases__ # (<class 'B'>,) — only direct parent B.__bases__ # (<class 'A'>,) A.__bases__ # (<class 'object'>,) C.__mro__ # (C, B, A, object) — full chain __bases__ vs __mro__: • __bases__: direct parents only • __mro__: full method resolution order (all ancestors)
5. Use the result only after the full construct has completed, per: __bases__ is a tuple of a class's direct parent classes — NOT the entire ancestor chain.

Common Use Cases:
• Teaching this behavior using the mental model: __bases__ is a tuple of a class's direct parent classes — NOT the entire ancestor chain.
• Debugging when the observed value should match the expectation in: .__name__ → "B" Example: class A: pass class B(A): pass class C(B): pass C.__bases__ # (<class 'B'>,) — only direct parent B.__bases__ # (<class 'A'>,) A.__bases__ # (<class 'object'>,) C.__mro__ # (C, B, A, object) — full chain __bases__ vs __mro__: • __bases__: direct parents only • __mro__: full method resolution order (all ancestors)

Edge Cases:
• If inputs vary from the situation described in: For the full chain, use __mro__., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • cls.__bases__ returns a tuple of direct base classes only • C inherits from B, so C.__bases__ is (B,) • A is a grandparent of C but NOT in C.__bases__ • For the full hierarchy, use C.__mro__ which includes all ancestors How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: .__name__ → "B" Example: class A: pass class B(A): pass class C(B): pass C.__bases__ # (<class 'B'>,) — only direct parent B.__bases__ # (<class 'A'>,) A.__bases__ # (<class 'object'>,) C.__mro__ # (C, B, A, object) — full chain __bases__ vs __mro__: • __bases__: direct parents only • __mro__: full method resolution order (all ancestors).
• When performance matters, prefer the simplest pattern that still implements: __bases__ is a tuple of a class's direct parent classes — NOT the entire ancestor chain..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: __bases__ is a tuple of a class's direct parent classes — NOT the entire ancestor chain..

Notes:
• For maintainable code, make the intent behind: For the full chain, use __mro__. explicit (and test it with inputs like those in this prompt).`
  }),
  // 67. issubclass is transitive
  (_i: number) => ({
    q: `class A: pass\nclass B(A): pass\nclass C(B): pass\nWhat is issubclass(C, A)?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "issubclass is transitive: C inherits from B which inherits from A, so C is a subclass of A.",
    de: `issubclass(cls, parent) returns True if cls is a subclass of parent, even through multiple levels of inheritance. The check is transitive.

Key concepts:
• issubclass checks the entire inheritance chain, not just direct parents
• C → B → A: C is a subclass of both B and A
• This is transitive: if C ⊂ B and B ⊂ A, then C ⊂ A
• Every class is also a subclass of itself: issubclass(A, A) is True

How it works:
1. C inherits from B, B inherits from A
2. issubclass(C, A) checks if A appears anywhere in C's ancestry
3. C.__mro__ is (C, B, A, object) — A is present
4. Returns True

Example:
issubclass(C, A)       # True (grandparent)
issubclass(C, B)       # True (direct parent)
issubclass(C, C)       # True (class is subclass of itself)
issubclass(C, object)  # True (everything inherits from object)
issubclass(A, C)       # False (A is NOT a subclass of C)

Key Concepts:
• Returns True Example: issubclass(C, A) # True (grandparent) issubclass(C, B) # True (direct parent) issubclass(C, C) # True (class is subclass of itself) issubclass(C, object) # True (everything inherits from object) issubclass(A, C) # False (A is NOT a subclass of C)

Key Distinctions:
• This question’s focus is best captured by: issubclass(cls, parent) returns True if cls is a subclass of parent, even through multiple levels of inheritance.
• The contrast that matters for correctness is summarized by: The check is transitive.

How It Works:
• Python follows the rule implied by: issubclass(cls, parent) returns True if cls is a subclass of parent, even through multiple levels of inheritance.
• The outcome you observe follows from: Returns True Example: issubclass(C, A) # True (grandparent) issubclass(C, B) # True (direct parent) issubclass(C, C) # True (class is subclass of itself) issubclass(C, object) # True (everything inherits from object) issubclass(A, C) # False (A is NOT a subclass of C)

Step-by-Step Execution:
1. Start from the construct described in: issubclass(cls, parent) returns True if cls is a subclass of parent, even through multiple levels of inheritance.
2. Resolve the subparts implied by: The check is transitive.
3. Apply the core semantics highlighted in: Key concepts: • issubclass checks the entire inheritance chain, not just direct parents • C → B → A: C is a subclass of both B and A • This is transitive: if C ⊂ B and B ⊂ A, then C ⊂ A • Every class is also a subclass of itself: issubclass(A, A) is True How it works: 1.
4. Confirm the final result aligns with: Returns True Example: issubclass(C, A) # True (grandparent) issubclass(C, B) # True (direct parent) issubclass(C, C) # True (class is subclass of itself) issubclass(C, object) # True (everything inherits from object) issubclass(A, C) # False (A is NOT a subclass of C)

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The check is transitive.
2. Apply the construct’s main rule next, matching: issubclass(cls, parent) returns True if cls is a subclass of parent, even through multiple levels of inheritance.
3. Produce any intermediate values that Returns True Example: issubclass(C, A) # True (grandparent) issubclass(C, B) # True (direct parent) issubclass(C, C) # True (class is subclass of itself) issubclass(C, object) # True (everything inherits from object) issubclass(A, C) # False (A is NOT a subclass of C) relies on
4. Finish by returning/assembling the final output named by: Returns True Example: issubclass(C, A) # True (grandparent) issubclass(C, B) # True (direct parent) issubclass(C, C) # True (class is subclass of itself) issubclass(C, object) # True (everything inherits from object) issubclass(A, C) # False (A is NOT a subclass of C)
5. Use the result only after the full construct has completed, per: issubclass(cls, parent) returns True if cls is a subclass of parent, even through multiple levels of inheritance.

Common Use Cases:
• Teaching this behavior using the mental model: issubclass(cls, parent) returns True if cls is a subclass of parent, even through multiple levels of inheritance.
• Debugging when the observed value should match the expectation in: Returns True Example: issubclass(C, A) # True (grandparent) issubclass(C, B) # True (direct parent) issubclass(C, C) # True (class is subclass of itself) issubclass(C, object) # True (everything inherits from object) issubclass(A, C) # False (A is NOT a subclass of C)

Edge Cases:
• If inputs vary from the situation described in: The check is transitive., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • issubclass checks the entire inheritance chain, not just direct parents • C → B → A: C is a subclass of both B and A • This is transitive: if C ⊂ B and B ⊂ A, then C ⊂ A • Every class is also a subclass of itself: issubclass(A, A) is True How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Returns True Example: issubclass(C, A) # True (grandparent) issubclass(C, B) # True (direct parent) issubclass(C, C) # True (class is subclass of itself) issubclass(C, object) # True (everything inherits from object) issubclass(A, C) # False (A is NOT a subclass of C).
• When performance matters, prefer the simplest pattern that still implements: issubclass(cls, parent) returns True if cls is a subclass of parent, even through multiple levels of inheritance..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: issubclass(cls, parent) returns True if cls is a subclass of parent, even through multiple levels of inheritance..

Notes:
• For maintainable code, make the intent behind: The check is transitive. explicit (and test it with inputs like those in this prompt).`
  }),
  // 68. __subclasses__() returns direct subclasses
  (_i: number) => ({
    q: `class A: pass\nWhat does A.__subclasses__() return?`,
    o: ["List of direct subclasses of A", "List of all instances of A", "List of parent classes of A", "The MRO of A"],
    c: 0,
    e: "__subclasses__() returns a list of classes that directly inherit from A (not instances, not parents).",
    de: `__subclasses__() is a built-in class method that returns the list of immediate subclasses. It tracks which classes have been defined with A as a parent.

Key concepts:
• cls.__subclasses__() returns a list of direct child classes
• Only includes classes defined so far (at call time)
• Does NOT include grandchildren or deeper descendants
• Does NOT return instances — only class objects
• Uses weak references internally (deleted classes are removed)

How it works:
1. Python internally tracks when classes are subclassed
2. __subclasses__() returns the current list of direct subclasses
3. If no classes inherit from A, returns []
4. Only direct children are included, not grandchildren

Example:
class A: pass
A.__subclasses__()  # [] (no subclasses yet)

class B(A): pass
class C(A): pass
A.__subclasses__()  # [B, C]

class D(B): pass    # D inherits from B, not directly from A
A.__subclasses__()  # [B, C] — D is NOT included (it's a grandchild)

Common uses:
• Plugin discovery and registration
• Finding all implementations of a base class
• Auto-registering subclasses

Key Concepts:
• Only direct children are included, not grandchildren Example: class A: pass A.__subclasses__() # [] (no subclasses yet) class B(A): pass class C(A): pass A.__subclasses__() # [B, C] class D(B): pass # D inherits from B, not directly from A A.__subclasses__() # [B, C] — D is NOT included (it's a grandchild) Common uses: • Plugin discovery and registration • Finding all implementations of a base class • Auto-registering subclasses

Key Distinctions:
• This question’s focus is best captured by: __subclasses__() is a built-in class method that returns the list of immediate subclasses.
• The contrast that matters for correctness is summarized by: It tracks which classes have been defined with A as a parent.

How It Works:
• Python follows the rule implied by: __subclasses__() is a built-in class method that returns the list of immediate subclasses.
• The outcome you observe follows from: Only direct children are included, not grandchildren Example: class A: pass A.__subclasses__() # [] (no subclasses yet) class B(A): pass class C(A): pass A.__subclasses__() # [B, C] class D(B): pass # D inherits from B, not directly from A A.__subclasses__() # [B, C] — D is NOT included (it's a grandchild) Common uses: • Plugin discovery and registration • Finding all implementations of a base class • Auto-registering subclasses

Step-by-Step Execution:
1. Start from the construct described in: __subclasses__() is a built-in class method that returns the list of immediate subclasses.
2. Resolve the subparts implied by: It tracks which classes have been defined with A as a parent.
3. Apply the core semantics highlighted in: Key concepts: • cls.__subclasses__() returns a list of direct child classes • Only includes classes defined so far (at call time) • Does NOT include grandchildren or deeper descendants • Does NOT return instances — only class objects • Uses weak references internally (deleted classes are removed) How it works: 1.
4. Confirm the final result aligns with: Only direct children are included, not grandchildren Example: class A: pass A.__subclasses__() # [] (no subclasses yet) class B(A): pass class C(A): pass A.__subclasses__() # [B, C] class D(B): pass # D inherits from B, not directly from A A.__subclasses__() # [B, C] — D is NOT included (it's a grandchild) Common uses: • Plugin discovery and registration • Finding all implementations of a base class • Auto-registering subclasses

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: It tracks which classes have been defined with A as a parent.
2. Apply the construct’s main rule next, matching: __subclasses__() is a built-in class method that returns the list of immediate subclasses.
3. Produce any intermediate values that Only direct children are included, not grandchildren Example: class A: pass A.__subclasses__() # [] (no subclasses yet) class B(A): pass class C(A): pass A.__subclasses__() # [B, C] class D(B): pass # D inherits from B, not directly from A A.__subclasses__() # [B, C] — D is NOT included (it's a grandchild) Common uses: • Plugin discovery and registration • Finding all implementations of a base class • Auto-registering subclasses relies on
4. Finish by returning/assembling the final output named by: Only direct children are included, not grandchildren Example: class A: pass A.__subclasses__() # [] (no subclasses yet) class B(A): pass class C(A): pass A.__subclasses__() # [B, C] class D(B): pass # D inherits from B, not directly from A A.__subclasses__() # [B, C] — D is NOT included (it's a grandchild) Common uses: • Plugin discovery and registration • Finding all implementations of a base class • Auto-registering subclasses
5. Use the result only after the full construct has completed, per: __subclasses__() is a built-in class method that returns the list of immediate subclasses.

Common Use Cases:
• Teaching this behavior using the mental model: __subclasses__() is a built-in class method that returns the list of immediate subclasses.
• Debugging when the observed value should match the expectation in: Only direct children are included, not grandchildren Example: class A: pass A.__subclasses__() # [] (no subclasses yet) class B(A): pass class C(A): pass A.__subclasses__() # [B, C] class D(B): pass # D inherits from B, not directly from A A.__subclasses__() # [B, C] — D is NOT included (it's a grandchild) Common uses: • Plugin discovery and registration • Finding all implementations of a base class • Auto-registering subclasses

Edge Cases:
• If inputs vary from the situation described in: It tracks which classes have been defined with A as a parent., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • cls.__subclasses__() returns a list of direct child classes • Only includes classes defined so far (at call time) • Does NOT include grandchildren or deeper descendants • Does NOT return instances — only class objects • Uses weak references internally (deleted classes are removed) How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Only direct children are included, not grandchildren Example: class A: pass A.__subclasses__() # [] (no subclasses yet) class B(A): pass class C(A): pass A.__subclasses__() # [B, C] class D(B): pass # D inherits from B, not directly from A A.__subclasses__() # [B, C] — D is NOT included (it's a grandchild) Common uses: • Plugin discovery and registration • Finding all implementations of a base class • Auto-registering subclasses.
• When performance matters, prefer the simplest pattern that still implements: __subclasses__() is a built-in class method that returns the list of immediate subclasses..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: __subclasses__() is a built-in class method that returns the list of immediate subclasses..

Notes:
• For maintainable code, make the intent behind: It tracks which classes have been defined with A as a parent. explicit (and test it with inputs like those in this prompt).`
  }),
  // 69. __subclasses__ — getting subclass names
  (_i: number) => ({
    q: `class A: pass\nclass B(A): pass\nclass C(A): pass\nWhat is set(x.__name__ for x in A.__subclasses__())?`,
    o: ['{"B", "C"}', '{"A", "B", "C"}', '{"A"}', "set()"],
    c: 0,
    e: "A.__subclasses__() returns [B, C], and extracting __name__ gives {'B', 'C'}.",
    de: `You can iterate over __subclasses__() to get information about each subclass. Using a set comprehension with __name__ extracts the class names.

Key concepts:
• A.__subclasses__() returns [B, C] (direct subclasses)
• x.__name__ gets the string name of each class
• set() creates a set of unique names
• A itself is NOT in __subclasses__() — only its children

How it works:
1. A.__subclasses__() → [<class 'B'>, <class 'C'>]
2. Generator: x.__name__ for each → "B", "C"
3. set(["B", "C"]) → {"B", "C"}

Example:
class Shape: pass
class Circle(Shape): pass
class Square(Shape): pass
class Triangle(Shape): pass

names = [cls.__name__ for cls in Shape.__subclasses__()]
# ["Circle", "Square", "Triangle"]

registry = {cls.__name__: cls for cls in Shape.__subclasses__()}
# {"Circle": Circle, "Square": Square, "Triangle": Triangle}
registry["Circle"]()  # creates a Circle instance

Key Concepts:
• set(["B", "C"]) → {"B", "C"} Example: class Shape: pass class Circle(Shape): pass class Square(Shape): pass class Triangle(Shape): pass names = [cls.__name__ for cls in Shape.__subclasses__()] # ["Circle", "Square", "Triangle"] registry = {cls.__name__: cls for cls in Shape.__subclasses__()} # {"Circle": Circle, "Square": Square, "Triangle": Triangle} registry["Circle"]() # creates a Circle instance

Key Distinctions:
• This question’s focus is best captured by: You can iterate over __subclasses__() to get information about each subclass.
• The contrast that matters for correctness is summarized by: Using a set comprehension with __name__ extracts the class names.

How It Works:
• Python follows the rule implied by: You can iterate over __subclasses__() to get information about each subclass.
• The outcome you observe follows from: set(["B", "C"]) → {"B", "C"} Example: class Shape: pass class Circle(Shape): pass class Square(Shape): pass class Triangle(Shape): pass names = [cls.__name__ for cls in Shape.__subclasses__()] # ["Circle", "Square", "Triangle"] registry = {cls.__name__: cls for cls in Shape.__subclasses__()} # {"Circle": Circle, "Square": Square, "Triangle": Triangle} registry["Circle"]() # creates a Circle instance

Step-by-Step Execution:
1. Start from the construct described in: You can iterate over __subclasses__() to get information about each subclass.
2. Resolve the subparts implied by: Using a set comprehension with __name__ extracts the class names.
3. Apply the core semantics highlighted in: Key concepts: • A.__subclasses__() returns [B, C] (direct subclasses) • x.__name__ gets the string name of each class • set() creates a set of unique names • A itself is NOT in __subclasses__() — only its children How it works: 1.
4. Confirm the final result aligns with: set(["B", "C"]) → {"B", "C"} Example: class Shape: pass class Circle(Shape): pass class Square(Shape): pass class Triangle(Shape): pass names = [cls.__name__ for cls in Shape.__subclasses__()] # ["Circle", "Square", "Triangle"] registry = {cls.__name__: cls for cls in Shape.__subclasses__()} # {"Circle": Circle, "Square": Square, "Triangle": Triangle} registry["Circle"]() # creates a Circle instance

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Using a set comprehension with __name__ extracts the class names.
2. Apply the construct’s main rule next, matching: You can iterate over __subclasses__() to get information about each subclass.
3. Produce any intermediate values that set(["B", "C"]) → {"B", "C"} Example: class Shape: pass class Circle(Shape): pass class Square(Shape): pass class Triangle(Shape): pass names = [cls.__name__ for cls in Shape.__subclasses__()] # ["Circle", "Square", "Triangle"] registry = {cls.__name__: cls for cls in Shape.__subclasses__()} # {"Circle": Circle, "Square": Square, "Triangle": Triangle} registry["Circle"]() # creates a Circle instance relies on
4. Finish by returning/assembling the final output named by: set(["B", "C"]) → {"B", "C"} Example: class Shape: pass class Circle(Shape): pass class Square(Shape): pass class Triangle(Shape): pass names = [cls.__name__ for cls in Shape.__subclasses__()] # ["Circle", "Square", "Triangle"] registry = {cls.__name__: cls for cls in Shape.__subclasses__()} # {"Circle": Circle, "Square": Square, "Triangle": Triangle} registry["Circle"]() # creates a Circle instance
5. Use the result only after the full construct has completed, per: You can iterate over __subclasses__() to get information about each subclass.

Common Use Cases:
• Teaching this behavior using the mental model: You can iterate over __subclasses__() to get information about each subclass.
• Debugging when the observed value should match the expectation in: set(["B", "C"]) → {"B", "C"} Example: class Shape: pass class Circle(Shape): pass class Square(Shape): pass class Triangle(Shape): pass names = [cls.__name__ for cls in Shape.__subclasses__()] # ["Circle", "Square", "Triangle"] registry = {cls.__name__: cls for cls in Shape.__subclasses__()} # {"Circle": Circle, "Square": Square, "Triangle": Triangle} registry["Circle"]() # creates a Circle instance

Edge Cases:
• If inputs vary from the situation described in: Using a set comprehension with __name__ extracts the class names., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • A.__subclasses__() returns [B, C] (direct subclasses) • x.__name__ gets the string name of each class • set() creates a set of unique names • A itself is NOT in __subclasses__() — only its children How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: set(["B", "C"]) → {"B", "C"} Example: class Shape: pass class Circle(Shape): pass class Square(Shape): pass class Triangle(Shape): pass names = [cls.__name__ for cls in Shape.__subclasses__()] # ["Circle", "Square", "Triangle"] registry = {cls.__name__: cls for cls in Shape.__subclasses__()} # {"Circle": Circle, "Square": Square, "Triangle": Triangle} registry["Circle"]() # creates a Circle instance.
• When performance matters, prefer the simplest pattern that still implements: You can iterate over __subclasses__() to get information about each subclass..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: You can iterate over __subclasses__() to get information about each subclass..

Notes:
• For maintainable code, make the intent behind: Using a set comprehension with __name__ extracts the class names. explicit (and test it with inputs like those in this prompt).`
  }),
  // 70. __init_subclass__ — auto-registration
  (_i: number) => ({
    q: `class Base:\n    registry = []\n    def __init_subclass__(cls, **kwargs):\n        super().__init_subclass__(**kwargs)\n        Base.registry.append(cls.__name__)\nclass A(Base): pass\nclass B(Base): pass\nWhat is Base.registry?`,
    o: ['["A", "B"]', '["Base", "A", "B"]', '["Base"]', "[]"],
    c: 0,
    e: "__init_subclass__ is called each time a subclass is defined. A and B trigger it, adding their names to registry.",
    de: `__init_subclass__ is a hook that runs automatically when a class is subclassed. It's called at class definition time, not at instantiation time.

Key concepts:
• __init_subclass__(cls) is called on the PARENT when a CHILD is defined
• cls is the new subclass being created, not the parent
• Called at class definition time (when 'class A(Base):' is executed)
• Base itself does NOT trigger __init_subclass__
• **kwargs passes through any class keyword arguments

How it works:
1. class A(Base): pass → calls Base.__init_subclass__(cls=A) → appends "A"
2. class B(Base): pass → calls Base.__init_subclass__(cls=B) → appends "B"
3. Base.registry is now ["A", "B"]

Example:
class Plugin:
    plugins = {}
    def __init_subclass__(cls, **kwargs):
        super().__init_subclass__(**kwargs)
        Plugin.plugins[cls.__name__] = cls

class JSONPlugin(Plugin): pass
class XMLPlugin(Plugin): pass
Plugin.plugins  # {"JSONPlugin": JSONPlugin, "XMLPlugin": XMLPlugin}

Common uses:
• Plugin registration systems
• Auto-discovery of subclasses
• Validation of subclass constraints

Key Concepts:
• Base.registry is now ["A", "B"] Example: class Plugin: plugins = {} def __init_subclass__(cls, **kwargs): super().__init_subclass__(**kwargs) Plugin.plugins[cls.__name__] = cls class JSONPlugin(Plugin): pass class XMLPlugin(Plugin): pass Plugin.plugins # {"JSONPlugin": JSONPlugin, "XMLPlugin": XMLPlugin} Common uses: • Plugin registration systems • Auto-discovery of subclasses • Validation of subclass constraints

Key Distinctions:
• This question’s focus is best captured by: __init_subclass__ is a hook that runs automatically when a class is subclassed.
• The contrast that matters for correctness is summarized by: It's called at class definition time, not at instantiation time.

How It Works:
• Python follows the rule implied by: __init_subclass__ is a hook that runs automatically when a class is subclassed.
• The outcome you observe follows from: Base.registry is now ["A", "B"] Example: class Plugin: plugins = {} def __init_subclass__(cls, **kwargs): super().__init_subclass__(**kwargs) Plugin.plugins[cls.__name__] = cls class JSONPlugin(Plugin): pass class XMLPlugin(Plugin): pass Plugin.plugins # {"JSONPlugin": JSONPlugin, "XMLPlugin": XMLPlugin} Common uses: • Plugin registration systems • Auto-discovery of subclasses • Validation of subclass constraints

Step-by-Step Execution:
1. Start from the construct described in: __init_subclass__ is a hook that runs automatically when a class is subclassed.
2. Resolve the subparts implied by: It's called at class definition time, not at instantiation time.
3. Apply the core semantics highlighted in: Key concepts: • __init_subclass__(cls) is called on the PARENT when a CHILD is defined • cls is the new subclass being created, not the parent • Called at class definition time (when 'class A(Base):' is executed) • Base itself does NOT trigger __init_subclass__ • **kwargs passes through any class keyword arguments How it works: 1.
4. Confirm the final result aligns with: Base.registry is now ["A", "B"] Example: class Plugin: plugins = {} def __init_subclass__(cls, **kwargs): super().__init_subclass__(**kwargs) Plugin.plugins[cls.__name__] = cls class JSONPlugin(Plugin): pass class XMLPlugin(Plugin): pass Plugin.plugins # {"JSONPlugin": JSONPlugin, "XMLPlugin": XMLPlugin} Common uses: • Plugin registration systems • Auto-discovery of subclasses • Validation of subclass constraints

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: It's called at class definition time, not at instantiation time.
2. Apply the construct’s main rule next, matching: __init_subclass__ is a hook that runs automatically when a class is subclassed.
3. Produce any intermediate values that Base.registry is now ["A", "B"] Example: class Plugin: plugins = {} def __init_subclass__(cls, **kwargs): super().__init_subclass__(**kwargs) Plugin.plugins[cls.__name__] = cls class JSONPlugin(Plugin): pass class XMLPlugin(Plugin): pass Plugin.plugins # {"JSONPlugin": JSONPlugin, "XMLPlugin": XMLPlugin} Common uses: • Plugin registration systems • Auto-discovery of subclasses • Validation of subclass constraints relies on
4. Finish by returning/assembling the final output named by: Base.registry is now ["A", "B"] Example: class Plugin: plugins = {} def __init_subclass__(cls, **kwargs): super().__init_subclass__(**kwargs) Plugin.plugins[cls.__name__] = cls class JSONPlugin(Plugin): pass class XMLPlugin(Plugin): pass Plugin.plugins # {"JSONPlugin": JSONPlugin, "XMLPlugin": XMLPlugin} Common uses: • Plugin registration systems • Auto-discovery of subclasses • Validation of subclass constraints
5. Use the result only after the full construct has completed, per: __init_subclass__ is a hook that runs automatically when a class is subclassed.

Common Use Cases:
• Teaching this behavior using the mental model: __init_subclass__ is a hook that runs automatically when a class is subclassed.
• Debugging when the observed value should match the expectation in: Base.registry is now ["A", "B"] Example: class Plugin: plugins = {} def __init_subclass__(cls, **kwargs): super().__init_subclass__(**kwargs) Plugin.plugins[cls.__name__] = cls class JSONPlugin(Plugin): pass class XMLPlugin(Plugin): pass Plugin.plugins # {"JSONPlugin": JSONPlugin, "XMLPlugin": XMLPlugin} Common uses: • Plugin registration systems • Auto-discovery of subclasses • Validation of subclass constraints

Edge Cases:
• If inputs vary from the situation described in: It's called at class definition time, not at instantiation time., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • __init_subclass__(cls) is called on the PARENT when a CHILD is defined • cls is the new subclass being created, not the parent • Called at class definition time (when 'class A(Base):' is executed) • Base itself does NOT trigger __init_subclass__ • **kwargs passes through any class keyword arguments How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Base.registry is now ["A", "B"] Example: class Plugin: plugins = {} def __init_subclass__(cls, **kwargs): super().__init_subclass__(**kwargs) Plugin.plugins[cls.__name__] = cls class JSONPlugin(Plugin): pass class XMLPlugin(Plugin): pass Plugin.plugins # {"JSONPlugin": JSONPlugin, "XMLPlugin": XMLPlugin} Common uses: • Plugin registration systems • Auto-discovery of subclasses • Validation of subclass constraints.
• When performance matters, prefer the simplest pattern that still implements: __init_subclass__ is a hook that runs automatically when a class is subclassed..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: __init_subclass__ is a hook that runs automatically when a class is subclassed..

Notes:
• For maintainable code, make the intent behind: It's called at class definition time, not at instantiation time. explicit (and test it with inputs like those in this prompt).`
  }),
  // 71. When __init_subclass__ is called (conceptual)
  (_i: number) => ({
    q: `When is __init_subclass__ called?`,
    o: ["When a class is subclassed (at class definition time)", "When an instance is created", "When a method is called", "When the class is garbage collected"],
    c: 0,
    e: "__init_subclass__ fires at class definition time — the moment Python executes the 'class Child(Parent):' statement.",
    de: `__init_subclass__ is a class-creation hook, not an instance-creation hook. It fires during the class statement execution, before any instances exist.

Key concepts:
• Triggered by: class Child(Parent): ... (at definition time)
• NOT triggered by: Child() (that calls __init__)
• The parent's __init_subclass__ receives the child class as cls
• Introduced in Python 3.6
• Replaces many uses of metaclasses for simple registration

How it works:
1. Python encounters class Child(Parent):
2. Python creates the Child class object
3. Python calls Parent.__init_subclass__(cls=Child)
4. The hook runs before the class statement finishes

Timeline:
class Parent:
    def __init_subclass__(cls):
        print(f"{cls.__name__} created")

class Child(Parent): pass  # prints "Child created" (definition time!)
# No instances have been created yet

Comparison:
• __init_subclass__: called when class is DEFINED (subclassed)
• __init__: called when instance is CREATED
• __new__: called when instance is ALLOCATED

Key Concepts:
• The hook runs before the class statement finishes Timeline: class Parent: def __init_subclass__(cls): print(f"{cls.__name__} created") class Child(Parent): pass # prints "Child created" (definition time!) # No instances have been created yet Comparison: • __init_subclass__: called when class is DEFINED (subclassed) • __init__: called when instance is CREATED • __new__: called when instance is ALLOCATED

Key Distinctions:
• This question’s focus is best captured by: __init_subclass__ is a class-creation hook, not an instance-creation hook.
• The contrast that matters for correctness is summarized by: It fires during the class statement execution, before any instances exist.

How It Works:
• Python follows the rule implied by: __init_subclass__ is a class-creation hook, not an instance-creation hook.
• The outcome you observe follows from: The hook runs before the class statement finishes Timeline: class Parent: def __init_subclass__(cls): print(f"{cls.__name__} created") class Child(Parent): pass # prints "Child created" (definition time!) # No instances have been created yet Comparison: • __init_subclass__: called when class is DEFINED (subclassed) • __init__: called when instance is CREATED • __new__: called when instance is ALLOCATED

Step-by-Step Execution:
1. Start from the construct described in: __init_subclass__ is a class-creation hook, not an instance-creation hook.
2. Resolve the subparts implied by: It fires during the class statement execution, before any instances exist.
3. Apply the core semantics highlighted in: Key concepts: • Triggered by: class Child(Parent): ...
4. Confirm the final result aligns with: The hook runs before the class statement finishes Timeline: class Parent: def __init_subclass__(cls): print(f"{cls.__name__} created") class Child(Parent): pass # prints "Child created" (definition time!) # No instances have been created yet Comparison: • __init_subclass__: called when class is DEFINED (subclassed) • __init__: called when instance is CREATED • __new__: called when instance is ALLOCATED

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: It fires during the class statement execution, before any instances exist.
2. Apply the construct’s main rule next, matching: __init_subclass__ is a class-creation hook, not an instance-creation hook.
3. Produce any intermediate values that The hook runs before the class statement finishes Timeline: class Parent: def __init_subclass__(cls): print(f"{cls.__name__} created") class Child(Parent): pass # prints "Child created" (definition time!) # No instances have been created yet Comparison: • __init_subclass__: called when class is DEFINED (subclassed) • __init__: called when instance is CREATED • __new__: called when instance is ALLOCATED relies on
4. Finish by returning/assembling the final output named by: The hook runs before the class statement finishes Timeline: class Parent: def __init_subclass__(cls): print(f"{cls.__name__} created") class Child(Parent): pass # prints "Child created" (definition time!) # No instances have been created yet Comparison: • __init_subclass__: called when class is DEFINED (subclassed) • __init__: called when instance is CREATED • __new__: called when instance is ALLOCATED
5. Use the result only after the full construct has completed, per: __init_subclass__ is a class-creation hook, not an instance-creation hook.

Common Use Cases:
• Teaching this behavior using the mental model: __init_subclass__ is a class-creation hook, not an instance-creation hook.
• Debugging when the observed value should match the expectation in: The hook runs before the class statement finishes Timeline: class Parent: def __init_subclass__(cls): print(f"{cls.__name__} created") class Child(Parent): pass # prints "Child created" (definition time!) # No instances have been created yet Comparison: • __init_subclass__: called when class is DEFINED (subclassed) • __init__: called when instance is CREATED • __new__: called when instance is ALLOCATED

Edge Cases:
• If inputs vary from the situation described in: It fires during the class statement execution, before any instances exist., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • Triggered by: class Child(Parent): ... is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: The hook runs before the class statement finishes Timeline: class Parent: def __init_subclass__(cls): print(f"{cls.__name__} created") class Child(Parent): pass # prints "Child created" (definition time!) # No instances have been created yet Comparison: • __init_subclass__: called when class is DEFINED (subclassed) • __init__: called when instance is CREATED • __new__: called when instance is ALLOCATED.
• When performance matters, prefer the simplest pattern that still implements: __init_subclass__ is a class-creation hook, not an instance-creation hook..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: __init_subclass__ is a class-creation hook, not an instance-creation hook..

Notes:
• For maintainable code, make the intent behind: It fires during the class statement execution, before any instances exist. explicit (and test it with inputs like those in this prompt).`
  }),
  // 72. type(self).__name__ for polymorphic method
  (_i: number) => ({
    q: `class Base:\n    def method(self):\n        return type(self).__name__\nclass Child(Base): pass\nWhat is Child().method()?`,
    o: ['"Child"', '"Base"', 'Error', '"object"'],
    c: 0,
    e: "type(self) returns the actual class of the instance. Since self is a Child instance, type(self).__name__ is 'Child'.",
    de: `Using type(self).__name__ in a parent class method creates polymorphic behavior — the method automatically returns the correct class name for any subclass instance.

Key concepts:
• type(self) returns the actual runtime class of the object
• When called on a Child instance, type(self) is Child, not Base
• This makes the method polymorphic without overriding
• __name__ extracts the class name as a string

How it works:
1. Child() creates a Child instance
2. method() is inherited from Base (Child doesn't override it)
3. Inside method, self is the Child instance
4. type(self) → <class 'Child'>
5. type(self).__name__ → "Child"

Example:
class Base:
    def method(self):
        return type(self).__name__
class A(Base): pass
class B(Base): pass

Base().method()  # "Base"
A().method()     # "A"
B().method()     # "B"

This pattern is common in __repr__ implementations to make them work correctly for subclasses.

Key Concepts:
• type(self).__name__ → "Child" Example: class Base: def method(self): return type(self).__name__ class A(Base): pass class B(Base): pass Base().method() # "Base" A().method() # "A" B().method() # "B" This pattern is common in __repr__ implementations to make them work correctly for subclasses.

Key Distinctions:
• This question’s focus is best captured by: Using type(self).__name__ in a parent class method creates polymorphic behavior — the method automatically returns the correct class name for any subclass instance.
• The contrast that matters for correctness is summarized by: Key concepts: • type(self) returns the actual runtime class of the object • When called on a Child instance, type(self) is Child, not Base • This makes the method polymorphic without overriding • __name__ extracts the class name as a string How it works: 1.

How It Works:
• Python follows the rule implied by: Using type(self).__name__ in a parent class method creates polymorphic behavior — the method automatically returns the correct class name for any subclass instance.
• The outcome you observe follows from: type(self).__name__ → "Child" Example: class Base: def method(self): return type(self).__name__ class A(Base): pass class B(Base): pass Base().method() # "Base" A().method() # "A" B().method() # "B" This pattern is common in __repr__ implementations to make them work correctly for subclasses.

Step-by-Step Execution:
1. Start from the construct described in: Using type(self).__name__ in a parent class method creates polymorphic behavior — the method automatically returns the correct class name for any subclass instance.
2. Resolve the subparts implied by: Key concepts: • type(self) returns the actual runtime class of the object • When called on a Child instance, type(self) is Child, not Base • This makes the method polymorphic without overriding • __name__ extracts the class name as a string How it works: 1.
3. Apply the core semantics highlighted in: Child() creates a Child instance 2.
4. Confirm the final result aligns with: type(self).__name__ → "Child" Example: class Base: def method(self): return type(self).__name__ class A(Base): pass class B(Base): pass Base().method() # "Base" A().method() # "A" B().method() # "B" This pattern is common in __repr__ implementations to make them work correctly for subclasses.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • type(self) returns the actual runtime class of the object • When called on a Child instance, type(self) is Child, not Base • This makes the method polymorphic without overriding • __name__ extracts the class name as a string How it works: 1.
2. Apply the construct’s main rule next, matching: Using type(self).__name__ in a parent class method creates polymorphic behavior — the method automatically returns the correct class name for any subclass instance.
3. Produce any intermediate values that type(self).__name__ → "Child" Example: class Base: def method(self): return type(self).__name__ class A(Base): pass class B(Base): pass Base().method() # "Base" A().method() # "A" B().method() # "B" This pattern is common in __repr__ implementations to make them work correctly for subclasses. relies on
4. Finish by returning/assembling the final output named by: type(self).__name__ → "Child" Example: class Base: def method(self): return type(self).__name__ class A(Base): pass class B(Base): pass Base().method() # "Base" A().method() # "A" B().method() # "B" This pattern is common in __repr__ implementations to make them work correctly for subclasses.
5. Use the result only after the full construct has completed, per: Using type(self).__name__ in a parent class method creates polymorphic behavior — the method automatically returns the correct class name for any subclass instance.

Common Use Cases:
• Teaching this behavior using the mental model: Using type(self).__name__ in a parent class method creates polymorphic behavior — the method automatically returns the correct class name for any subclass instance.
• Debugging when the observed value should match the expectation in: type(self).__name__ → "Child" Example: class Base: def method(self): return type(self).__name__ class A(Base): pass class B(Base): pass Base().method() # "Base" A().method() # "A" B().method() # "B" This pattern is common in __repr__ implementations to make them work correctly for subclasses.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • type(self) returns the actual runtime class of the object • When called on a Child instance, type(self) is Child, not Base • This makes the method polymorphic without overriding • __name__ extracts the class name as a string How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: Child() creates a Child instance 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: type(self).__name__ → "Child" Example: class Base: def method(self): return type(self).__name__ class A(Base): pass class B(Base): pass Base().method() # "Base" A().method() # "A" B().method() # "B" This pattern is common in __repr__ implementations to make them work correctly for subclasses..
• When performance matters, prefer the simplest pattern that still implements: Using type(self).__name__ in a parent class method creates polymorphic behavior — the method automatically returns the correct class name for any subclass instance..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Using type(self).__name__ in a parent class method creates polymorphic behavior — the method automatically returns the correct class name for any subclass instance..

Notes:
• For maintainable code, make the intent behind: Key concepts: • type(self) returns the actual runtime class of the object • When called on a Child instance, type(self) is Child, not Base • This makes the method polymorphic without overriding • __name__ extracts the class name as a string How it works: 1. explicit (and test it with inputs like those in this prompt).`
  }),
  // 73. self.__class__.__name__ — same result
  (_i: number) => ({
    q: `class Base:\n    def method(self):\n        return self.__class__.__name__\nclass Child(Base): pass\nWhat is Child().method()?`,
    o: ['"Child"', '"Base"', 'Error', '"object"'],
    c: 0,
    e: "self.__class__ is equivalent to type(self). For a Child instance, self.__class__.__name__ is 'Child'.",
    de: `self.__class__ and type(self) are equivalent for normal classes. Both return the actual runtime type of the object.

Key concepts:
• self.__class__ returns the same as type(self) for regular classes
• For a Child instance, self.__class__ is Child
• __name__ gives the string name
• Both approaches are polymorphic — they adapt to the actual instance type

How it works:
1. Child() creates a Child instance
2. method() is inherited from Base
3. self.__class__ → <class 'Child'> (actual type)
4. .__name__ → "Child"

type(self) vs self.__class__:
• type(self) — the preferred, modern way
• self.__class__ — also works, slightly older style
• Both return the same result for standard classes
• In rare edge cases with old-style classes (Python 2), they could differ
• In Python 3, they are always equivalent

Example:
class Base:
    def who(self):
        return self.__class__.__name__
class Sub(Base): pass
Sub().who()  # "Sub"

Key Concepts:
• .__name__ → "Child" type(self) vs self.__class__: • type(self) — the preferred, modern way • self.__class__ — also works, slightly older style • Both return the same result for standard classes • In rare edge cases with old-style classes (Python 2), they could differ • In Python 3, they are always equivalent Example: class Base: def who(self): return self.__class__.__name__ class Sub(Base): pass Sub().who() # "Sub"

Key Distinctions:
• This question’s focus is best captured by: self.__class__ and type(self) are equivalent for normal classes.
• The contrast that matters for correctness is summarized by: Both return the actual runtime type of the object.

How It Works:
• Python follows the rule implied by: self.__class__ and type(self) are equivalent for normal classes.
• The outcome you observe follows from: .__name__ → "Child" type(self) vs self.__class__: • type(self) — the preferred, modern way • self.__class__ — also works, slightly older style • Both return the same result for standard classes • In rare edge cases with old-style classes (Python 2), they could differ • In Python 3, they are always equivalent Example: class Base: def who(self): return self.__class__.__name__ class Sub(Base): pass Sub().who() # "Sub"

Step-by-Step Execution:
1. Start from the construct described in: self.__class__ and type(self) are equivalent for normal classes.
2. Resolve the subparts implied by: Both return the actual runtime type of the object.
3. Apply the core semantics highlighted in: Key concepts: • self.__class__ returns the same as type(self) for regular classes • For a Child instance, self.__class__ is Child • __name__ gives the string name • Both approaches are polymorphic — they adapt to the actual instance type How it works: 1.
4. Confirm the final result aligns with: .__name__ → "Child" type(self) vs self.__class__: • type(self) — the preferred, modern way • self.__class__ — also works, slightly older style • Both return the same result for standard classes • In rare edge cases with old-style classes (Python 2), they could differ • In Python 3, they are always equivalent Example: class Base: def who(self): return self.__class__.__name__ class Sub(Base): pass Sub().who() # "Sub"

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Both return the actual runtime type of the object.
2. Apply the construct’s main rule next, matching: self.__class__ and type(self) are equivalent for normal classes.
3. Produce any intermediate values that .__name__ → "Child" type(self) vs self.__class__: • type(self) — the preferred, modern way • self.__class__ — also works, slightly older style • Both return the same result for standard classes • In rare edge cases with old-style classes (Python 2), they could differ • In Python 3, they are always equivalent Example: class Base: def who(self): return self.__class__.__name__ class Sub(Base): pass Sub().who() # "Sub" relies on
4. Finish by returning/assembling the final output named by: .__name__ → "Child" type(self) vs self.__class__: • type(self) — the preferred, modern way • self.__class__ — also works, slightly older style • Both return the same result for standard classes • In rare edge cases with old-style classes (Python 2), they could differ • In Python 3, they are always equivalent Example: class Base: def who(self): return self.__class__.__name__ class Sub(Base): pass Sub().who() # "Sub"
5. Use the result only after the full construct has completed, per: self.__class__ and type(self) are equivalent for normal classes.

Common Use Cases:
• Teaching this behavior using the mental model: self.__class__ and type(self) are equivalent for normal classes.
• Debugging when the observed value should match the expectation in: .__name__ → "Child" type(self) vs self.__class__: • type(self) — the preferred, modern way • self.__class__ — also works, slightly older style • Both return the same result for standard classes • In rare edge cases with old-style classes (Python 2), they could differ • In Python 3, they are always equivalent Example: class Base: def who(self): return self.__class__.__name__ class Sub(Base): pass Sub().who() # "Sub"

Edge Cases:
• If inputs vary from the situation described in: Both return the actual runtime type of the object., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • self.__class__ returns the same as type(self) for regular classes • For a Child instance, self.__class__ is Child • __name__ gives the string name • Both approaches are polymorphic — they adapt to the actual instance type How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: .__name__ → "Child" type(self) vs self.__class__: • type(self) — the preferred, modern way • self.__class__ — also works, slightly older style • Both return the same result for standard classes • In rare edge cases with old-style classes (Python 2), they could differ • In Python 3, they are always equivalent Example: class Base: def who(self): return self.__class__.__name__ class Sub(Base): pass Sub().who() # "Sub".
• When performance matters, prefer the simplest pattern that still implements: self.__class__ and type(self) are equivalent for normal classes..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: self.__class__ and type(self) are equivalent for normal classes..

Notes:
• For maintainable code, make the intent behind: Both return the actual runtime type of the object. explicit (and test it with inputs like those in this prompt).`
  }),
  // 74. Setting attribute on subclass doesn't affect parent
  (_i: number) => ({
    q: `class A:\n    x = 1\nclass B(A): pass\nB.x = 2\nWhat is A.x?`,
    o: ["1", "2", "Error", "None"],
    c: 0,
    e: "Setting B.x = 2 creates a new attribute on B's own namespace. A.x remains 1.",
    de: `When you SET a class attribute on a subclass, it creates a new attribute in the subclass's own namespace. It does NOT modify the parent class attribute.

Key concepts:
• B initially inherits x from A (B.x looks up A.x → 1)
• B.x = 2 creates a NEW x in B's own __dict__
• A.x is unaffected — it remains 1
• B.x now shadows A.x (B has its own x)
• Reading uses MRO lookup; writing always targets the specified class

How it works:
1. class A: x = 1 → A.__dict__["x"] = 1
2. class B(A): pass → B.__dict__ has no "x"
3. B.x (before assignment) → looks up MRO → finds A.x → 1
4. B.x = 2 → B.__dict__["x"] = 2 (creates new attribute on B)
5. A.x → still 1 (A.__dict__["x"] unchanged)

Example:
class A: x = 1
class B(A): pass
B.x          # 1 (inherited from A)
B.x = 2      # creates B's own x
B.x          # 2 (B's own)
A.x          # 1 (unchanged)
"x" in B.__dict__  # True (B now has its own x)

Key Concepts:
• A.x → still 1 (A.__dict__["x"] unchanged) Example: class A: x = 1 class B(A): pass B.x # 1 (inherited from A) B.x = 2 # creates B's own x B.x # 2 (B's own) A.x # 1 (unchanged) "x" in B.__dict__ # True (B now has its own x)

Key Distinctions:
• This question’s focus is best captured by: When you SET a class attribute on a subclass, it creates a new attribute in the subclass's own namespace.
• The contrast that matters for correctness is summarized by: It does NOT modify the parent class attribute.

How It Works:
• Python follows the rule implied by: When you SET a class attribute on a subclass, it creates a new attribute in the subclass's own namespace.
• The outcome you observe follows from: A.x → still 1 (A.__dict__["x"] unchanged) Example: class A: x = 1 class B(A): pass B.x # 1 (inherited from A) B.x = 2 # creates B's own x B.x # 2 (B's own) A.x # 1 (unchanged) "x" in B.__dict__ # True (B now has its own x)

Step-by-Step Execution:
1. Start from the construct described in: When you SET a class attribute on a subclass, it creates a new attribute in the subclass's own namespace.
2. Resolve the subparts implied by: It does NOT modify the parent class attribute.
3. Apply the core semantics highlighted in: Key concepts: • B initially inherits x from A (B.x looks up A.x → 1) • B.x = 2 creates a NEW x in B's own __dict__ • A.x is unaffected — it remains 1 • B.x now shadows A.x (B has its own x) • Reading uses MRO lookup; writing always targets the specified class How it works: 1.
4. Confirm the final result aligns with: A.x → still 1 (A.__dict__["x"] unchanged) Example: class A: x = 1 class B(A): pass B.x # 1 (inherited from A) B.x = 2 # creates B's own x B.x # 2 (B's own) A.x # 1 (unchanged) "x" in B.__dict__ # True (B now has its own x)

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: It does NOT modify the parent class attribute.
2. Apply the construct’s main rule next, matching: When you SET a class attribute on a subclass, it creates a new attribute in the subclass's own namespace.
3. Produce any intermediate values that A.x → still 1 (A.__dict__["x"] unchanged) Example: class A: x = 1 class B(A): pass B.x # 1 (inherited from A) B.x = 2 # creates B's own x B.x # 2 (B's own) A.x # 1 (unchanged) "x" in B.__dict__ # True (B now has its own x) relies on
4. Finish by returning/assembling the final output named by: A.x → still 1 (A.__dict__["x"] unchanged) Example: class A: x = 1 class B(A): pass B.x # 1 (inherited from A) B.x = 2 # creates B's own x B.x # 2 (B's own) A.x # 1 (unchanged) "x" in B.__dict__ # True (B now has its own x)
5. Use the result only after the full construct has completed, per: When you SET a class attribute on a subclass, it creates a new attribute in the subclass's own namespace.

Common Use Cases:
• Teaching this behavior using the mental model: When you SET a class attribute on a subclass, it creates a new attribute in the subclass's own namespace.
• Debugging when the observed value should match the expectation in: A.x → still 1 (A.__dict__["x"] unchanged) Example: class A: x = 1 class B(A): pass B.x # 1 (inherited from A) B.x = 2 # creates B's own x B.x # 2 (B's own) A.x # 1 (unchanged) "x" in B.__dict__ # True (B now has its own x)

Edge Cases:
• If inputs vary from the situation described in: It does NOT modify the parent class attribute., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • B initially inherits x from A (B.x looks up A.x → 1) • B.x = 2 creates a NEW x in B's own __dict__ • A.x is unaffected — it remains 1 • B.x now shadows A.x (B has its own x) • Reading uses MRO lookup; writing always targets the specified class How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: A.x → still 1 (A.__dict__["x"] unchanged) Example: class A: x = 1 class B(A): pass B.x # 1 (inherited from A) B.x = 2 # creates B's own x B.x # 2 (B's own) A.x # 1 (unchanged) "x" in B.__dict__ # True (B now has its own x).
• When performance matters, prefer the simplest pattern that still implements: When you SET a class attribute on a subclass, it creates a new attribute in the subclass's own namespace..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: When you SET a class attribute on a subclass, it creates a new attribute in the subclass's own namespace..

Notes:
• For maintainable code, make the intent behind: It does NOT modify the parent class attribute. explicit (and test it with inputs like those in this prompt).`
  }),
  // 75. Shared mutable class variable — gotcha!
  (_i: number) => ({
    q: `class A:\n    lst = []\nclass B(A): pass\nB.lst.append(1)\nWhat is A.lst?`,
    o: ["[1]", "[]", "Error", "None"],
    c: 0,
    e: "B.lst IS A.lst (same object). Mutating it through B also mutates it through A. This is a common gotcha!",
    de: `This is one of the most common inheritance gotchas in Python. When a subclass inherits a mutable class attribute, both classes share the SAME object.

Key concepts:
• B doesn't define its own lst, so B.lst resolves to A.lst
• B.lst and A.lst are the SAME list object (same id)
• Mutating B.lst (append, extend, etc.) mutates A.lst too
• This is different from REASSIGNING: B.lst = [] would create a new list

How it works:
1. A.lst = [] creates one list object
2. B inherits lst — B.lst IS A.lst (same reference)
3. B.lst.append(1) mutates the shared list in-place
4. A.lst → [1] (same object was mutated)

Example:
class A: lst = []
class B(A): pass
id(A.lst) == id(B.lst)  # True — same object!
B.lst.append(1)
A.lst  # [1] — both see the change

Fix — give each class its own list:
class A: lst = []
class B(A): lst = []  # B has its own list now
B.lst.append(1)
A.lst  # [] — A is unaffected

This gotcha applies to any mutable class attribute: lists, dicts, sets.

Key Concepts:
• B.lst.append(1) A.lst # [1] — both see the change Fix — give each class its own list: class A: lst = [] class B(A): lst = [] # B has its own list now B.lst.append(1) A.lst # [] — A is unaffected This gotcha applies to any mutable class attribute: lists, dicts, sets.

Key Distinctions:
• This question’s focus is best captured by: This is one of the most common inheritance gotchas in Python.
• The contrast that matters for correctness is summarized by: When a subclass inherits a mutable class attribute, both classes share the SAME object.

How It Works:
• Python follows the rule implied by: This is one of the most common inheritance gotchas in Python.
• The outcome you observe follows from: B.lst.append(1) A.lst # [1] — both see the change Fix — give each class its own list: class A: lst = [] class B(A): lst = [] # B has its own list now B.lst.append(1) A.lst # [] — A is unaffected This gotcha applies to any mutable class attribute: lists, dicts, sets.

Step-by-Step Execution:
1. Start from the construct described in: This is one of the most common inheritance gotchas in Python.
2. Resolve the subparts implied by: When a subclass inherits a mutable class attribute, both classes share the SAME object.
3. Apply the core semantics highlighted in: Key concepts: • B doesn't define its own lst, so B.lst resolves to A.lst • B.lst and A.lst are the SAME list object (same id) • Mutating B.lst (append, extend, etc.) mutates A.lst too • This is different from REASSIGNING: B.lst = [] would create a new list How it works: 1.
4. Confirm the final result aligns with: B.lst.append(1) A.lst # [1] — both see the change Fix — give each class its own list: class A: lst = [] class B(A): lst = [] # B has its own list now B.lst.append(1) A.lst # [] — A is unaffected This gotcha applies to any mutable class attribute: lists, dicts, sets.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: When a subclass inherits a mutable class attribute, both classes share the SAME object.
2. Apply the construct’s main rule next, matching: This is one of the most common inheritance gotchas in Python.
3. Produce any intermediate values that B.lst.append(1) A.lst # [1] — both see the change Fix — give each class its own list: class A: lst = [] class B(A): lst = [] # B has its own list now B.lst.append(1) A.lst # [] — A is unaffected This gotcha applies to any mutable class attribute: lists, dicts, sets. relies on
4. Finish by returning/assembling the final output named by: B.lst.append(1) A.lst # [1] — both see the change Fix — give each class its own list: class A: lst = [] class B(A): lst = [] # B has its own list now B.lst.append(1) A.lst # [] — A is unaffected This gotcha applies to any mutable class attribute: lists, dicts, sets.
5. Use the result only after the full construct has completed, per: This is one of the most common inheritance gotchas in Python.

Common Use Cases:
• Teaching this behavior using the mental model: This is one of the most common inheritance gotchas in Python.
• Debugging when the observed value should match the expectation in: B.lst.append(1) A.lst # [1] — both see the change Fix — give each class its own list: class A: lst = [] class B(A): lst = [] # B has its own list now B.lst.append(1) A.lst # [] — A is unaffected This gotcha applies to any mutable class attribute: lists, dicts, sets.

Edge Cases:
• If inputs vary from the situation described in: When a subclass inherits a mutable class attribute, both classes share the SAME object., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • B doesn't define its own lst, so B.lst resolves to A.lst • B.lst and A.lst are the SAME list object (same id) • Mutating B.lst (append, extend, etc.) mutates A.lst too • This is different from REASSIGNING: B.lst = [] would create a new list How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: B.lst.append(1) A.lst # [1] — both see the change Fix — give each class its own list: class A: lst = [] class B(A): lst = [] # B has its own list now B.lst.append(1) A.lst # [] — A is unaffected This gotcha applies to any mutable class attribute: lists, dicts, sets..
• When performance matters, prefer the simplest pattern that still implements: This is one of the most common inheritance gotchas in Python..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This is one of the most common inheritance gotchas in Python..

Notes:
• For maintainable code, make the intent behind: When a subclass inherits a mutable class attribute, both classes share the SAME object. explicit (and test it with inputs like those in this prompt).`
  }),
  // 76. Separate mutable class variable — no sharing
  (_i: number) => ({
    q: `class A:\n    lst = []\nclass B(A):\n    lst = []\nB.lst.append(1)\nWhat is A.lst?`,
    o: ["[]", "[1]", "Error", "None"],
    c: 0,
    e: "B defines its own lst = [], so B.lst and A.lst are different objects. Mutating B.lst doesn't affect A.lst.",
    de: `When a subclass explicitly defines the same attribute, it creates a separate object that shadows the parent's attribute.

Key concepts:
• B explicitly defines lst = [] in its own class body
• B.lst and A.lst are DIFFERENT list objects
• Mutating B.lst does NOT affect A.lst
• This is the fix for the shared mutable class variable gotcha

How it works:
1. A.lst = [] creates one list for A
2. B.lst = [] creates a SEPARATE list for B
3. B.lst.append(1) modifies only B's list
4. A.lst → [] (unaffected)
5. B.lst → [1]

Example:
class A: lst = []
class B(A): lst = []  # own list
id(A.lst) == id(B.lst)  # False — different objects!
B.lst.append(1)
A.lst  # []
B.lst  # [1]

Best practice: When subclasses need independent mutable state, always redefine the attribute in the subclass or use __init__ to create instance-level attributes.

Key Concepts:
• B.lst.append(1) A.lst # [] B.lst # [1] Best practice: When subclasses need independent mutable state, always redefine the attribute in the subclass or use __init__ to create instance-level attributes.

Key Distinctions:
• This question’s focus is best captured by: When a subclass explicitly defines the same attribute, it creates a separate object that shadows the parent's attribute.
• The contrast that matters for correctness is summarized by: Key concepts: • B explicitly defines lst = [] in its own class body • B.lst and A.lst are DIFFERENT list objects • Mutating B.lst does NOT affect A.lst • This is the fix for the shared mutable class variable gotcha How it works: 1.

How It Works:
• Python follows the rule implied by: When a subclass explicitly defines the same attribute, it creates a separate object that shadows the parent's attribute.
• The outcome you observe follows from: B.lst.append(1) A.lst # [] B.lst # [1] Best practice: When subclasses need independent mutable state, always redefine the attribute in the subclass or use __init__ to create instance-level attributes.

Step-by-Step Execution:
1. Start from the construct described in: When a subclass explicitly defines the same attribute, it creates a separate object that shadows the parent's attribute.
2. Resolve the subparts implied by: Key concepts: • B explicitly defines lst = [] in its own class body • B.lst and A.lst are DIFFERENT list objects • Mutating B.lst does NOT affect A.lst • This is the fix for the shared mutable class variable gotcha How it works: 1.
3. Apply the core semantics highlighted in: A.lst = [] creates one list for A 2.
4. Confirm the final result aligns with: B.lst.append(1) A.lst # [] B.lst # [1] Best practice: When subclasses need independent mutable state, always redefine the attribute in the subclass or use __init__ to create instance-level attributes.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • B explicitly defines lst = [] in its own class body • B.lst and A.lst are DIFFERENT list objects • Mutating B.lst does NOT affect A.lst • This is the fix for the shared mutable class variable gotcha How it works: 1.
2. Apply the construct’s main rule next, matching: When a subclass explicitly defines the same attribute, it creates a separate object that shadows the parent's attribute.
3. Produce any intermediate values that B.lst.append(1) A.lst # [] B.lst # [1] Best practice: When subclasses need independent mutable state, always redefine the attribute in the subclass or use __init__ to create instance-level attributes. relies on
4. Finish by returning/assembling the final output named by: B.lst.append(1) A.lst # [] B.lst # [1] Best practice: When subclasses need independent mutable state, always redefine the attribute in the subclass or use __init__ to create instance-level attributes.
5. Use the result only after the full construct has completed, per: When a subclass explicitly defines the same attribute, it creates a separate object that shadows the parent's attribute.

Common Use Cases:
• Teaching this behavior using the mental model: When a subclass explicitly defines the same attribute, it creates a separate object that shadows the parent's attribute.
• Debugging when the observed value should match the expectation in: B.lst.append(1) A.lst # [] B.lst # [1] Best practice: When subclasses need independent mutable state, always redefine the attribute in the subclass or use __init__ to create instance-level attributes.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • B explicitly defines lst = [] in its own class body • B.lst and A.lst are DIFFERENT list objects • Mutating B.lst does NOT affect A.lst • This is the fix for the shared mutable class variable gotcha How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: A.lst = [] creates one list for A 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: B.lst.append(1) A.lst # [] B.lst # [1] Best practice: When subclasses need independent mutable state, always redefine the attribute in the subclass or use __init__ to create instance-level attributes..
• When performance matters, prefer the simplest pattern that still implements: When a subclass explicitly defines the same attribute, it creates a separate object that shadows the parent's attribute..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: When a subclass explicitly defines the same attribute, it creates a separate object that shadows the parent's attribute..

Notes:
• For maintainable code, make the intent behind: Key concepts: • B explicitly defines lst = [] in its own class body • B.lst and A.lst are DIFFERENT list objects • Mutating B.lst does NOT affect A.lst • This is the fix for the shared mutable class variable gotcha How it works: 1. explicit (and test it with inputs like those in this prompt).`
  }),
  // 77. NotImplementedError pattern — child overrides
  (_i: number) => ({
    q: `class Animal:\n    def speak(self):\n        raise NotImplementedError\nclass Dog(Animal):\n    def speak(self):\n        return "Woof"\nWhat is Dog().speak()?`,
    o: ['"Woof"', "NotImplementedError", "None", "Error"],
    c: 0,
    e: "Dog overrides speak() to return 'Woof'. The NotImplementedError in Animal is never reached.",
    de: `The NotImplementedError pattern creates an informal interface: the parent defines a method that raises an error, forcing subclasses to provide their own implementation.

Key concepts:
• Animal.speak raises NotImplementedError — it's a placeholder
• Dog overrides speak with a concrete implementation
• Method resolution finds Dog.speak first (before Animal.speak)
• The NotImplementedError is never raised because Dog's version runs

How it works:
1. Dog().speak() → Python looks up speak in Dog first
2. Dog has its own speak → returns "Woof"
3. Animal.speak is never called
4. Returns "Woof"

Example:
class Animal:
    def speak(self):
        raise NotImplementedError
class Dog(Animal):
    def speak(self): return "Woof"
class Cat(Animal):
    def speak(self): return "Meow"

Dog().speak()  # "Woof"
Cat().speak()  # "Meow"

This is an informal version of abstract methods — it doesn't prevent Animal() from being instantiated, but calling speak() on a plain Animal will raise an error.

Key Concepts:
• Returns "Woof" Example: class Animal: def speak(self): raise NotImplementedError class Dog(Animal): def speak(self): return "Woof" class Cat(Animal): def speak(self): return "Meow" Dog().speak() # "Woof" Cat().speak() # "Meow" This is an informal version of abstract methods — it doesn't prevent Animal() from being instantiated, but calling speak() on a plain Animal will raise an error.

Key Distinctions:
• This question’s focus is best captured by: The NotImplementedError pattern creates an informal interface: the parent defines a method that raises an error, forcing subclasses to provide their own implementation.
• The contrast that matters for correctness is summarized by: Key concepts: • Animal.speak raises NotImplementedError — it's a placeholder • Dog overrides speak with a concrete implementation • Method resolution finds Dog.speak first (before Animal.speak) • The NotImplementedError is never raised because Dog's version runs How it works: 1.

How It Works:
• Python follows the rule implied by: The NotImplementedError pattern creates an informal interface: the parent defines a method that raises an error, forcing subclasses to provide their own implementation.
• The outcome you observe follows from: Returns "Woof" Example: class Animal: def speak(self): raise NotImplementedError class Dog(Animal): def speak(self): return "Woof" class Cat(Animal): def speak(self): return "Meow" Dog().speak() # "Woof" Cat().speak() # "Meow" This is an informal version of abstract methods — it doesn't prevent Animal() from being instantiated, but calling speak() on a plain Animal will raise an error.

Step-by-Step Execution:
1. Start from the construct described in: The NotImplementedError pattern creates an informal interface: the parent defines a method that raises an error, forcing subclasses to provide their own implementation.
2. Resolve the subparts implied by: Key concepts: • Animal.speak raises NotImplementedError — it's a placeholder • Dog overrides speak with a concrete implementation • Method resolution finds Dog.speak first (before Animal.speak) • The NotImplementedError is never raised because Dog's version runs How it works: 1.
3. Apply the core semantics highlighted in: Dog().speak() → Python looks up speak in Dog first 2.
4. Confirm the final result aligns with: Returns "Woof" Example: class Animal: def speak(self): raise NotImplementedError class Dog(Animal): def speak(self): return "Woof" class Cat(Animal): def speak(self): return "Meow" Dog().speak() # "Woof" Cat().speak() # "Meow" This is an informal version of abstract methods — it doesn't prevent Animal() from being instantiated, but calling speak() on a plain Animal will raise an error.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • Animal.speak raises NotImplementedError — it's a placeholder • Dog overrides speak with a concrete implementation • Method resolution finds Dog.speak first (before Animal.speak) • The NotImplementedError is never raised because Dog's version runs How it works: 1.
2. Apply the construct’s main rule next, matching: The NotImplementedError pattern creates an informal interface: the parent defines a method that raises an error, forcing subclasses to provide their own implementation.
3. Produce any intermediate values that Returns "Woof" Example: class Animal: def speak(self): raise NotImplementedError class Dog(Animal): def speak(self): return "Woof" class Cat(Animal): def speak(self): return "Meow" Dog().speak() # "Woof" Cat().speak() # "Meow" This is an informal version of abstract methods — it doesn't prevent Animal() from being instantiated, but calling speak() on a plain Animal will raise an error. relies on
4. Finish by returning/assembling the final output named by: Returns "Woof" Example: class Animal: def speak(self): raise NotImplementedError class Dog(Animal): def speak(self): return "Woof" class Cat(Animal): def speak(self): return "Meow" Dog().speak() # "Woof" Cat().speak() # "Meow" This is an informal version of abstract methods — it doesn't prevent Animal() from being instantiated, but calling speak() on a plain Animal will raise an error.
5. Use the result only after the full construct has completed, per: The NotImplementedError pattern creates an informal interface: the parent defines a method that raises an error, forcing subclasses to provide their own implementation.

Common Use Cases:
• Teaching this behavior using the mental model: The NotImplementedError pattern creates an informal interface: the parent defines a method that raises an error, forcing subclasses to provide their own implementation.
• Debugging when the observed value should match the expectation in: Returns "Woof" Example: class Animal: def speak(self): raise NotImplementedError class Dog(Animal): def speak(self): return "Woof" class Cat(Animal): def speak(self): return "Meow" Dog().speak() # "Woof" Cat().speak() # "Meow" This is an informal version of abstract methods — it doesn't prevent Animal() from being instantiated, but calling speak() on a plain Animal will raise an error.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • Animal.speak raises NotImplementedError — it's a placeholder • Dog overrides speak with a concrete implementation • Method resolution finds Dog.speak first (before Animal.speak) • The NotImplementedError is never raised because Dog's version runs How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: Dog().speak() → Python looks up speak in Dog first 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Returns "Woof" Example: class Animal: def speak(self): raise NotImplementedError class Dog(Animal): def speak(self): return "Woof" class Cat(Animal): def speak(self): return "Meow" Dog().speak() # "Woof" Cat().speak() # "Meow" This is an informal version of abstract methods — it doesn't prevent Animal() from being instantiated, but calling speak() on a plain Animal will raise an error..
• When performance matters, prefer the simplest pattern that still implements: The NotImplementedError pattern creates an informal interface: the parent defines a method that raises an error, forcing subclasses to provide their own implementation..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: The NotImplementedError pattern creates an informal interface: the parent defines a method that raises an error, forcing subclasses to provide their own implementation..

Notes:
• For maintainable code, make the intent behind: Key concepts: • Animal.speak raises NotImplementedError — it's a placeholder • Dog overrides speak with a concrete implementation • Method resolution finds Dog.speak first (before Animal.speak) • The NotImplementedError is never raised because Dog's version runs How it works: 1. explicit (and test it with inputs like those in this prompt).`
  }),
  // 78. NotImplementedError — calling unoverridden method
  (_i: number) => ({
    q: `class Animal:\n    def speak(self):\n        raise NotImplementedError\nWhat happens when you call Animal().speak()?`,
    o: ["Raises NotImplementedError", "Returns None", "Returns an empty string", "Raises TypeError"],
    c: 0,
    e: "Animal.speak() explicitly raises NotImplementedError. You can create an Animal instance but calling speak() raises the error.",
    de: `Unlike abstract methods (ABC), NotImplementedError does not prevent instantiation. You CAN create an Animal() — the error only occurs when you call the method.

Key concepts:
• Animal() succeeds — the class can be instantiated
• Animal().speak() raises NotImplementedError
• This is a runtime check, not a definition-time check
• The error signals "this method must be overridden in subclasses"

How it works:
1. Animal() → creates instance (no error)
2. animal.speak() → calls the method
3. raise NotImplementedError → exception raised
4. Program crashes unless caught

Example:
a = Animal()       # OK — no error
a.speak()          # NotImplementedError!

try:
    Animal().speak()
except NotImplementedError:
    print("Must override speak()")

This differs from @abstractmethod which prevents instantiation entirely — Animal() would raise TypeError if Animal used ABC.

Key Concepts:
• try: Animal().speak() except NotImplementedError: print("Must override speak()") This differs from @abstractmethod which prevents instantiation entirely — Animal() would raise TypeError if Animal used ABC.

Key Distinctions:
• This question’s focus is best captured by: Unlike abstract methods (ABC), NotImplementedError does not prevent instantiation.
• The contrast that matters for correctness is summarized by: You CAN create an Animal() — the error only occurs when you call the method.

How It Works:
• Python follows the rule implied by: Unlike abstract methods (ABC), NotImplementedError does not prevent instantiation.
• The outcome you observe follows from: try: Animal().speak() except NotImplementedError: print("Must override speak()") This differs from @abstractmethod which prevents instantiation entirely — Animal() would raise TypeError if Animal used ABC.

Step-by-Step Execution:
1. Start from the construct described in: Unlike abstract methods (ABC), NotImplementedError does not prevent instantiation.
2. Resolve the subparts implied by: You CAN create an Animal() — the error only occurs when you call the method.
3. Apply the core semantics highlighted in: Key concepts: • Animal() succeeds — the class can be instantiated • Animal().speak() raises NotImplementedError • This is a runtime check, not a definition-time check • The error signals "this method must be overridden in subclasses" How it works: 1.
4. Confirm the final result aligns with: try: Animal().speak() except NotImplementedError: print("Must override speak()") This differs from @abstractmethod which prevents instantiation entirely — Animal() would raise TypeError if Animal used ABC.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: You CAN create an Animal() — the error only occurs when you call the method.
2. Apply the construct’s main rule next, matching: Unlike abstract methods (ABC), NotImplementedError does not prevent instantiation.
3. Produce any intermediate values that try: Animal().speak() except NotImplementedError: print("Must override speak()") This differs from @abstractmethod which prevents instantiation entirely — Animal() would raise TypeError if Animal used ABC. relies on
4. Finish by returning/assembling the final output named by: try: Animal().speak() except NotImplementedError: print("Must override speak()") This differs from @abstractmethod which prevents instantiation entirely — Animal() would raise TypeError if Animal used ABC.
5. Use the result only after the full construct has completed, per: Unlike abstract methods (ABC), NotImplementedError does not prevent instantiation.

Common Use Cases:
• Teaching this behavior using the mental model: Unlike abstract methods (ABC), NotImplementedError does not prevent instantiation.
• Debugging when the observed value should match the expectation in: try: Animal().speak() except NotImplementedError: print("Must override speak()") This differs from @abstractmethod which prevents instantiation entirely — Animal() would raise TypeError if Animal used ABC.

Edge Cases:
• If inputs vary from the situation described in: You CAN create an Animal() — the error only occurs when you call the method., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • Animal() succeeds — the class can be instantiated • Animal().speak() raises NotImplementedError • This is a runtime check, not a definition-time check • The error signals "this method must be overridden in subclasses" How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: try: Animal().speak() except NotImplementedError: print("Must override speak()") This differs from @abstractmethod which prevents instantiation entirely — Animal() would raise TypeError if Animal used ABC..
• When performance matters, prefer the simplest pattern that still implements: Unlike abstract methods (ABC), NotImplementedError does not prevent instantiation..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Unlike abstract methods (ABC), NotImplementedError does not prevent instantiation..

Notes:
• For maintainable code, make the intent behind: You CAN create an Animal() — the error only occurs when you call the method. explicit (and test it with inputs like those in this prompt).`
  }),
  // 79. NotImplementedError vs abstractmethod (conceptual)
  (_i: number) => ({
    q: `What is the key difference between NotImplementedError and @abstractmethod?`,
    o: ["abstractmethod prevents instantiation; NotImplementedError allows it", "They are identical", "NotImplementedError prevents instantiation", "abstractmethod only works with functions, not methods"],
    c: 0,
    e: "@abstractmethod prevents creating instances of the class entirely. NotImplementedError only errors when the method is actually called.",
    de: `These two approaches enforce method overriding at different times: @abstractmethod at instantiation time, NotImplementedError at call time.

Key concepts:
• @abstractmethod (from abc module): prevents creating instances of the base class
• NotImplementedError: allows creating instances but errors when the method runs
• @abstractmethod is stricter — catches missing overrides earlier
• NotImplementedError is more flexible but can hide bugs until runtime

Comparison:
from abc import ABC, abstractmethod

class Base1:
    def method(self): raise NotImplementedError
Base1()           # OK (instance created)
Base1().method()  # NotImplementedError at CALL time

class Base2(ABC):
    @abstractmethod
    def method(self): pass
Base2()           # TypeError! Cannot instantiate (DEFINITION time check)

When to use each:
• @abstractmethod: when you want strict enforcement (recommended)
• NotImplementedError: when you need flexibility (e.g., optional overrides)
• @abstractmethod catches errors earlier and is more Pythonic

Key Concepts:
• Cannot instantiate (DEFINITION time check) When to use each: • @abstractmethod: when you want strict enforcement (recommended) • NotImplementedError: when you need flexibility (e.g., optional overrides) • @abstractmethod catches errors earlier and is more Pythonic

Key Distinctions:
• This question’s focus is best captured by: These two approaches enforce method overriding at different times: @abstractmethod at instantiation time, NotImplementedError at call time.
• The contrast that matters for correctness is summarized by: Key concepts: • @abstractmethod (from abc module): prevents creating instances of the base class • NotImplementedError: allows creating instances but errors when the method runs • @abstractmethod is stricter — catches missing overrides earlier • NotImplementedError is more flexible but can hide bugs until runtime Comparison: from abc import ABC, abstractmethod class Base1: def method(self): raise NotImplementedError Base1() # OK (instance created) Base1().method() # NotImplementedError at CALL time class Base2(ABC): @abstractmethod def method(self): pass Base2() # TypeError!

How It Works:
• Python follows the rule implied by: These two approaches enforce method overriding at different times: @abstractmethod at instantiation time, NotImplementedError at call time.
• The outcome you observe follows from: Cannot instantiate (DEFINITION time check) When to use each: • @abstractmethod: when you want strict enforcement (recommended) • NotImplementedError: when you need flexibility (e.g., optional overrides) • @abstractmethod catches errors earlier and is more Pythonic

Step-by-Step Execution:
1. Start from the construct described in: These two approaches enforce method overriding at different times: @abstractmethod at instantiation time, NotImplementedError at call time.
2. Resolve the subparts implied by: Key concepts: • @abstractmethod (from abc module): prevents creating instances of the base class • NotImplementedError: allows creating instances but errors when the method runs • @abstractmethod is stricter — catches missing overrides earlier • NotImplementedError is more flexible but can hide bugs until runtime Comparison: from abc import ABC, abstractmethod class Base1: def method(self): raise NotImplementedError Base1() # OK (instance created) Base1().method() # NotImplementedError at CALL time class Base2(ABC): @abstractmethod def method(self): pass Base2() # TypeError!
3. Apply the core semantics highlighted in: Cannot instantiate (DEFINITION time check) When to use each: • @abstractmethod: when you want strict enforcement (recommended) • NotImplementedError: when you need flexibility (e.g., optional overrides) • @abstractmethod catches errors earlier and is more Pythonic
4. Confirm the final result aligns with: Cannot instantiate (DEFINITION time check) When to use each: • @abstractmethod: when you want strict enforcement (recommended) • NotImplementedError: when you need flexibility (e.g., optional overrides) • @abstractmethod catches errors earlier and is more Pythonic

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • @abstractmethod (from abc module): prevents creating instances of the base class • NotImplementedError: allows creating instances but errors when the method runs • @abstractmethod is stricter — catches missing overrides earlier • NotImplementedError is more flexible but can hide bugs until runtime Comparison: from abc import ABC, abstractmethod class Base1: def method(self): raise NotImplementedError Base1() # OK (instance created) Base1().method() # NotImplementedError at CALL time class Base2(ABC): @abstractmethod def method(self): pass Base2() # TypeError!
2. Apply the construct’s main rule next, matching: These two approaches enforce method overriding at different times: @abstractmethod at instantiation time, NotImplementedError at call time.
3. Produce any intermediate values that Cannot instantiate (DEFINITION time check) When to use each: • @abstractmethod: when you want strict enforcement (recommended) • NotImplementedError: when you need flexibility (e.g., optional overrides) • @abstractmethod catches errors earlier and is more Pythonic relies on
4. Finish by returning/assembling the final output named by: Cannot instantiate (DEFINITION time check) When to use each: • @abstractmethod: when you want strict enforcement (recommended) • NotImplementedError: when you need flexibility (e.g., optional overrides) • @abstractmethod catches errors earlier and is more Pythonic
5. Use the result only after the full construct has completed, per: These two approaches enforce method overriding at different times: @abstractmethod at instantiation time, NotImplementedError at call time.

Common Use Cases:
• Teaching this behavior using the mental model: These two approaches enforce method overriding at different times: @abstractmethod at instantiation time, NotImplementedError at call time.
• Debugging when the observed value should match the expectation in: Cannot instantiate (DEFINITION time check) When to use each: • @abstractmethod: when you want strict enforcement (recommended) • NotImplementedError: when you need flexibility (e.g., optional overrides) • @abstractmethod catches errors earlier and is more Pythonic

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • @abstractmethod (from abc module): prevents creating instances of the base class • NotImplementedError: allows creating instances but errors when the method runs • @abstractmethod is stricter — catches missing overrides earlier • NotImplementedError is more flexible but can hide bugs until runtime Comparison: from abc import ABC, abstractmethod class Base1: def method(self): raise NotImplementedError Base1() # OK (instance created) Base1().method() # NotImplementedError at CALL time class Base2(ABC): @abstractmethod def method(self): pass Base2() # TypeError!, the behavior can change.
• When the construct’s assumptions differ, the rule in: Cannot instantiate (DEFINITION time check) When to use each: • @abstractmethod: when you want strict enforcement (recommended) • NotImplementedError: when you need flexibility (e.g., optional overrides) • @abstractmethod catches errors earlier and is more Pythonic is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Cannot instantiate (DEFINITION time check) When to use each: • @abstractmethod: when you want strict enforcement (recommended) • NotImplementedError: when you need flexibility (e.g., optional overrides) • @abstractmethod catches errors earlier and is more Pythonic.
• When performance matters, prefer the simplest pattern that still implements: These two approaches enforce method overriding at different times: @abstractmethod at instantiation time, NotImplementedError at call time..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: These two approaches enforce method overriding at different times: @abstractmethod at instantiation time, NotImplementedError at call time..

Notes:
• For maintainable code, make the intent behind: Key concepts: • @abstractmethod (from abc module): prevents creating instances of the base class • NotImplementedError: allows creating instances but errors when the method runs • @abstractmethod is stricter — catches missing overrides earlier • NotImplementedError is more flexible but can hide bugs until runtime Comparison: from abc import ABC, abstractmethod class Base1: def method(self): raise NotImplementedError Base1() # OK (instance created) Base1().method() # NotImplementedError at CALL time class Base2(ABC): @abstractmethod def method(self): pass Base2() # TypeError! explicit (and test it with inputs like those in this prompt).`
  }),
  // 80. Template method pattern — serialize via __dict__
  (_i: number) => ({
    q: `class Serializable:\n    def serialize(self):\n        return str(self.__dict__)\nclass User(Serializable):\n    def __init__(self, name):\n        self.name = name\nWhat is User("Bob").serialize()?`,
    o: [`"{'name': 'Bob'}"`, '"Bob"', "Error", "{}"],
    c: 0,
    e: "serialize() returns str(self.__dict__). User('Bob').__dict__ is {'name': 'Bob'}, so str of that is \"{'name': 'Bob'}\".",
    de: `This demonstrates inheritance for utility methods. The parent provides generic functionality (serialization) that works with any subclass's attributes.

Key concepts:
• self.__dict__ returns a dict of instance attributes
• User("Bob").__dict__ → {"name": "Bob"}
• str({"name": "Bob"}) → "{'name': 'Bob'}"
• The serialize method works for ANY subclass with any attributes

How it works:
1. User("Bob") creates instance with self.name = "Bob"
2. serialize() is inherited from Serializable
3. self.__dict__ → {"name": "Bob"}
4. str({"name": "Bob"}) → "{'name': 'Bob'}"

Example:
class Product(Serializable):
    def __init__(self, name, price):
        self.name = name
        self.price = price
Product("Widget", 9.99).serialize()  # "{'name': 'Widget', 'price': 9.99}"

This is a form of the Template Method pattern — the parent defines the algorithm (serialize), and subclasses provide the data (__dict__).

Key Concepts:
• str({"name": "Bob"}) → "{'name': 'Bob'}" Example: class Product(Serializable): def __init__(self, name, price): self.name = name self.price = price Product("Widget", 9.99).serialize() # "{'name': 'Widget', 'price': 9.99}" This is a form of the Template Method pattern — the parent defines the algorithm (serialize), and subclasses provide the data (__dict__).

Key Distinctions:
• This question’s focus is best captured by: This demonstrates inheritance for utility methods.
• The contrast that matters for correctness is summarized by: The parent provides generic functionality (serialization) that works with any subclass's attributes.

How It Works:
• Python follows the rule implied by: This demonstrates inheritance for utility methods.
• The outcome you observe follows from: str({"name": "Bob"}) → "{'name': 'Bob'}" Example: class Product(Serializable): def __init__(self, name, price): self.name = name self.price = price Product("Widget", 9.99).serialize() # "{'name': 'Widget', 'price': 9.99}" This is a form of the Template Method pattern — the parent defines the algorithm (serialize), and subclasses provide the data (__dict__).

Step-by-Step Execution:
1. Start from the construct described in: This demonstrates inheritance for utility methods.
2. Resolve the subparts implied by: The parent provides generic functionality (serialization) that works with any subclass's attributes.
3. Apply the core semantics highlighted in: Key concepts: • self.__dict__ returns a dict of instance attributes • User("Bob").__dict__ → {"name": "Bob"} • str({"name": "Bob"}) → "{'name': 'Bob'}" • The serialize method works for ANY subclass with any attributes How it works: 1.
4. Confirm the final result aligns with: str({"name": "Bob"}) → "{'name': 'Bob'}" Example: class Product(Serializable): def __init__(self, name, price): self.name = name self.price = price Product("Widget", 9.99).serialize() # "{'name': 'Widget', 'price': 9.99}" This is a form of the Template Method pattern — the parent defines the algorithm (serialize), and subclasses provide the data (__dict__).

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The parent provides generic functionality (serialization) that works with any subclass's attributes.
2. Apply the construct’s main rule next, matching: This demonstrates inheritance for utility methods.
3. Produce any intermediate values that str({"name": "Bob"}) → "{'name': 'Bob'}" Example: class Product(Serializable): def __init__(self, name, price): self.name = name self.price = price Product("Widget", 9.99).serialize() # "{'name': 'Widget', 'price': 9.99}" This is a form of the Template Method pattern — the parent defines the algorithm (serialize), and subclasses provide the data (__dict__). relies on
4. Finish by returning/assembling the final output named by: str({"name": "Bob"}) → "{'name': 'Bob'}" Example: class Product(Serializable): def __init__(self, name, price): self.name = name self.price = price Product("Widget", 9.99).serialize() # "{'name': 'Widget', 'price': 9.99}" This is a form of the Template Method pattern — the parent defines the algorithm (serialize), and subclasses provide the data (__dict__).
5. Use the result only after the full construct has completed, per: This demonstrates inheritance for utility methods.

Common Use Cases:
• Teaching this behavior using the mental model: This demonstrates inheritance for utility methods.
• Debugging when the observed value should match the expectation in: str({"name": "Bob"}) → "{'name': 'Bob'}" Example: class Product(Serializable): def __init__(self, name, price): self.name = name self.price = price Product("Widget", 9.99).serialize() # "{'name': 'Widget', 'price': 9.99}" This is a form of the Template Method pattern — the parent defines the algorithm (serialize), and subclasses provide the data (__dict__).

Edge Cases:
• If inputs vary from the situation described in: The parent provides generic functionality (serialization) that works with any subclass's attributes., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • self.__dict__ returns a dict of instance attributes • User("Bob").__dict__ → {"name": "Bob"} • str({"name": "Bob"}) → "{'name': 'Bob'}" • The serialize method works for ANY subclass with any attributes How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: str({"name": "Bob"}) → "{'name': 'Bob'}" Example: class Product(Serializable): def __init__(self, name, price): self.name = name self.price = price Product("Widget", 9.99).serialize() # "{'name': 'Widget', 'price': 9.99}" This is a form of the Template Method pattern — the parent defines the algorithm (serialize), and subclasses provide the data (__dict__)..
• When performance matters, prefer the simplest pattern that still implements: This demonstrates inheritance for utility methods..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This demonstrates inheritance for utility methods..

Notes:
• For maintainable code, make the intent behind: The parent provides generic functionality (serialization) that works with any subclass's attributes. explicit (and test it with inputs like those in this prompt).`
  }),
  // 81. Lambda as class attribute — inherited like methods
  (_i: number) => ({
    q: `class A:\n    f = lambda self: "A"\nclass B(A): pass\nWhat is B().f()?`,
    o: ['"A"', '"B"', "Error", "None"],
    c: 0,
    e: "Lambda functions assigned as class attributes work like methods and are inherited. B inherits f from A, returning 'A'.",
    de: `In Python, a lambda assigned as a class attribute behaves identically to a regular method defined with def. It's stored in the class __dict__ and inherited by subclasses.

Key concepts:
• f = lambda self: "A" is equivalent to def f(self): return "A"
• Lambdas as class attributes receive self automatically (descriptor protocol)
• B inherits f from A through normal MRO lookup
• B().f() calls A's lambda, which returns "A"

How it works:
1. A.f is a lambda in A.__dict__
2. B doesn't define f, so B.f resolves to A.f via MRO
3. B().f() → calls lambda with self=B_instance → returns "A"

Example:
class A:
    f = lambda self: "A"
    g = lambda self, x: x * 2
class B(A): pass

B().f()    # "A" (inherited lambda)
B().g(5)   # 10 (inherited lambda with parameter)

Note: lambdas as class attributes are uncommon in practice — def is preferred for readability. But they demonstrate that Python treats all callables in the class namespace as potential methods.

Key Concepts:
• But they demonstrate that Python treats all callables in the class namespace as potential methods.

Key Distinctions:
• This question’s focus is best captured by: In Python, a lambda assigned as a class attribute behaves identically to a regular method defined with def.
• The contrast that matters for correctness is summarized by: It's stored in the class __dict__ and inherited by subclasses.

How It Works:
• Python follows the rule implied by: In Python, a lambda assigned as a class attribute behaves identically to a regular method defined with def.
• The outcome you observe follows from: But they demonstrate that Python treats all callables in the class namespace as potential methods.

Step-by-Step Execution:
1. Start from the construct described in: In Python, a lambda assigned as a class attribute behaves identically to a regular method defined with def.
2. Resolve the subparts implied by: It's stored in the class __dict__ and inherited by subclasses.
3. Apply the core semantics highlighted in: Key concepts: • f = lambda self: "A" is equivalent to def f(self): return "A" • Lambdas as class attributes receive self automatically (descriptor protocol) • B inherits f from A through normal MRO lookup • B().f() calls A's lambda, which returns "A" How it works: 1.
4. Confirm the final result aligns with: But they demonstrate that Python treats all callables in the class namespace as potential methods.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: It's stored in the class __dict__ and inherited by subclasses.
2. Apply the construct’s main rule next, matching: In Python, a lambda assigned as a class attribute behaves identically to a regular method defined with def.
3. Produce any intermediate values that But they demonstrate that Python treats all callables in the class namespace as potential methods. relies on
4. Finish by returning/assembling the final output named by: But they demonstrate that Python treats all callables in the class namespace as potential methods.
5. Use the result only after the full construct has completed, per: In Python, a lambda assigned as a class attribute behaves identically to a regular method defined with def.

Common Use Cases:
• Teaching this behavior using the mental model: In Python, a lambda assigned as a class attribute behaves identically to a regular method defined with def.
• Debugging when the observed value should match the expectation in: But they demonstrate that Python treats all callables in the class namespace as potential methods.

Edge Cases:
• If inputs vary from the situation described in: It's stored in the class __dict__ and inherited by subclasses., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • f = lambda self: "A" is equivalent to def f(self): return "A" • Lambdas as class attributes receive self automatically (descriptor protocol) • B inherits f from A through normal MRO lookup • B().f() calls A's lambda, which returns "A" How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: But they demonstrate that Python treats all callables in the class namespace as potential methods..
• When performance matters, prefer the simplest pattern that still implements: In Python, a lambda assigned as a class attribute behaves identically to a regular method defined with def..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: In Python, a lambda assigned as a class attribute behaves identically to a regular method defined with def..

Notes:
• For maintainable code, make the intent behind: It's stored in the class __dict__ and inherited by subclasses. explicit (and test it with inputs like those in this prompt).`
  }),
  // 82. Separate inheritance chains
  (_i: number) => ({
    q: `class A:\n    def f(self): return "A"\nclass B:\n    def f(self): return "B"\nclass D(B): pass\nWhat is D().f()?`,
    o: ['"B"', '"A"', '"D"', "Error"],
    c: 0,
    e: "D inherits from B (not A). D doesn't override f, so it uses B's version which returns 'B'.",
    de: `Each class inherits only from its specified parent(s). D inherits from B, so D's method resolution follows B's chain.

Key concepts:
• D(B) means D inherits from B
• D has no connection to A — they are in separate hierarchies
• D doesn't define f, so MRO lookup goes to B
• B.f returns "B", so D().f() returns "B"

How it works:
1. D().f() → look for f in D → not found
2. MRO: D → B → object
3. Found f in B → calls B.f(self) → returns "B"
4. A is irrelevant — D doesn't inherit from A

Example:
class A:
    def f(self): return "A"
class B:
    def f(self): return "B"
class C(A):
    def f(self): return "C"
class D(B): pass

D().f()  # "B" (inherits from B)
C().f()  # "C" (overrides A.f)
A().f()  # "A" (direct)
B().f()  # "B" (direct)

The inheritance hierarchy determines which methods are available to each class.

Key Concepts:
• A is irrelevant — D doesn't inherit from A Example: class A: def f(self): return "A" class B: def f(self): return "B" class C(A): def f(self): return "C" class D(B): pass D().f() # "B" (inherits from B) C().f() # "C" (overrides A.f) A().f() # "A" (direct) B().f() # "B" (direct) The inheritance hierarchy determines which methods are available to each class.

Key Distinctions:
• This question’s focus is best captured by: Each class inherits only from its specified parent(s).
• The contrast that matters for correctness is summarized by: D inherits from B, so D's method resolution follows B's chain.

How It Works:
• Python follows the rule implied by: Each class inherits only from its specified parent(s).
• The outcome you observe follows from: A is irrelevant — D doesn't inherit from A Example: class A: def f(self): return "A" class B: def f(self): return "B" class C(A): def f(self): return "C" class D(B): pass D().f() # "B" (inherits from B) C().f() # "C" (overrides A.f) A().f() # "A" (direct) B().f() # "B" (direct) The inheritance hierarchy determines which methods are available to each class.

Step-by-Step Execution:
1. Start from the construct described in: Each class inherits only from its specified parent(s).
2. Resolve the subparts implied by: D inherits from B, so D's method resolution follows B's chain.
3. Apply the core semantics highlighted in: Key concepts: • D(B) means D inherits from B • D has no connection to A — they are in separate hierarchies • D doesn't define f, so MRO lookup goes to B • B.f returns "B", so D().f() returns "B" How it works: 1.
4. Confirm the final result aligns with: A is irrelevant — D doesn't inherit from A Example: class A: def f(self): return "A" class B: def f(self): return "B" class C(A): def f(self): return "C" class D(B): pass D().f() # "B" (inherits from B) C().f() # "C" (overrides A.f) A().f() # "A" (direct) B().f() # "B" (direct) The inheritance hierarchy determines which methods are available to each class.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: D inherits from B, so D's method resolution follows B's chain.
2. Apply the construct’s main rule next, matching: Each class inherits only from its specified parent(s).
3. Produce any intermediate values that A is irrelevant — D doesn't inherit from A Example: class A: def f(self): return "A" class B: def f(self): return "B" class C(A): def f(self): return "C" class D(B): pass D().f() # "B" (inherits from B) C().f() # "C" (overrides A.f) A().f() # "A" (direct) B().f() # "B" (direct) The inheritance hierarchy determines which methods are available to each class. relies on
4. Finish by returning/assembling the final output named by: A is irrelevant — D doesn't inherit from A Example: class A: def f(self): return "A" class B: def f(self): return "B" class C(A): def f(self): return "C" class D(B): pass D().f() # "B" (inherits from B) C().f() # "C" (overrides A.f) A().f() # "A" (direct) B().f() # "B" (direct) The inheritance hierarchy determines which methods are available to each class.
5. Use the result only after the full construct has completed, per: Each class inherits only from its specified parent(s).

Common Use Cases:
• Teaching this behavior using the mental model: Each class inherits only from its specified parent(s).
• Debugging when the observed value should match the expectation in: A is irrelevant — D doesn't inherit from A Example: class A: def f(self): return "A" class B: def f(self): return "B" class C(A): def f(self): return "C" class D(B): pass D().f() # "B" (inherits from B) C().f() # "C" (overrides A.f) A().f() # "A" (direct) B().f() # "B" (direct) The inheritance hierarchy determines which methods are available to each class.

Edge Cases:
• If inputs vary from the situation described in: D inherits from B, so D's method resolution follows B's chain., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • D(B) means D inherits from B • D has no connection to A — they are in separate hierarchies • D doesn't define f, so MRO lookup goes to B • B.f returns "B", so D().f() returns "B" How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: A is irrelevant — D doesn't inherit from A Example: class A: def f(self): return "A" class B: def f(self): return "B" class C(A): def f(self): return "C" class D(B): pass D().f() # "B" (inherits from B) C().f() # "C" (overrides A.f) A().f() # "A" (direct) B().f() # "B" (direct) The inheritance hierarchy determines which methods are available to each class..
• When performance matters, prefer the simplest pattern that still implements: Each class inherits only from its specified parent(s)..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Each class inherits only from its specified parent(s)..

Notes:
• For maintainable code, make the intent behind: D inherits from B, so D's method resolution follows B's chain. explicit (and test it with inputs like those in this prompt).`
  }),
  // 83. @classmethod — cls reflects the calling class
  (_i: number) => ({
    q: `class A:\n    @classmethod\n    def who(cls):\n        return cls.__name__\nclass B(A): pass\nWhat is B.who()?`,
    o: ['"B"', '"A"', 'Error', '"object"'],
    c: 0,
    e: "@classmethod receives the calling class as cls. When called on B, cls is B, so cls.__name__ is 'B'.",
    de: `When a classmethod is inherited and called on a subclass, the cls parameter is bound to the subclass, not the class that defined the method.

Key concepts:
• @classmethod makes cls the first parameter instead of self
• cls is the class the method was CALLED on, not DEFINED in
• B.who() → cls = B (not A)
• This enables polymorphic class methods

How it works:
1. B.who() calls the inherited classmethod
2. cls is bound to B (the calling class)
3. cls.__name__ → "B"
4. Returns "B"

Example:
class A:
    @classmethod
    def who(cls):
        return cls.__name__
class B(A): pass
class C(A): pass

A.who()  # "A"
B.who()  # "B"
C.who()  # "C"

This is crucial for factory methods where the class method needs to create instances of the correct subclass.

Key Concepts:
• Returns "B" Example: class A: @classmethod def who(cls): return cls.__name__ class B(A): pass class C(A): pass A.who() # "A" B.who() # "B" C.who() # "C" This is crucial for factory methods where the class method needs to create instances of the correct subclass.

Key Distinctions:
• This question’s focus is best captured by: When a classmethod is inherited and called on a subclass, the cls parameter is bound to the subclass, not the class that defined the method.
• The contrast that matters for correctness is summarized by: Key concepts: • @classmethod makes cls the first parameter instead of self • cls is the class the method was CALLED on, not DEFINED in • B.who() → cls = B (not A) • This enables polymorphic class methods How it works: 1.

How It Works:
• Python follows the rule implied by: When a classmethod is inherited and called on a subclass, the cls parameter is bound to the subclass, not the class that defined the method.
• The outcome you observe follows from: Returns "B" Example: class A: @classmethod def who(cls): return cls.__name__ class B(A): pass class C(A): pass A.who() # "A" B.who() # "B" C.who() # "C" This is crucial for factory methods where the class method needs to create instances of the correct subclass.

Step-by-Step Execution:
1. Start from the construct described in: When a classmethod is inherited and called on a subclass, the cls parameter is bound to the subclass, not the class that defined the method.
2. Resolve the subparts implied by: Key concepts: • @classmethod makes cls the first parameter instead of self • cls is the class the method was CALLED on, not DEFINED in • B.who() → cls = B (not A) • This enables polymorphic class methods How it works: 1.
3. Apply the core semantics highlighted in: B.who() calls the inherited classmethod 2.
4. Confirm the final result aligns with: Returns "B" Example: class A: @classmethod def who(cls): return cls.__name__ class B(A): pass class C(A): pass A.who() # "A" B.who() # "B" C.who() # "C" This is crucial for factory methods where the class method needs to create instances of the correct subclass.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • @classmethod makes cls the first parameter instead of self • cls is the class the method was CALLED on, not DEFINED in • B.who() → cls = B (not A) • This enables polymorphic class methods How it works: 1.
2. Apply the construct’s main rule next, matching: When a classmethod is inherited and called on a subclass, the cls parameter is bound to the subclass, not the class that defined the method.
3. Produce any intermediate values that Returns "B" Example: class A: @classmethod def who(cls): return cls.__name__ class B(A): pass class C(A): pass A.who() # "A" B.who() # "B" C.who() # "C" This is crucial for factory methods where the class method needs to create instances of the correct subclass. relies on
4. Finish by returning/assembling the final output named by: Returns "B" Example: class A: @classmethod def who(cls): return cls.__name__ class B(A): pass class C(A): pass A.who() # "A" B.who() # "B" C.who() # "C" This is crucial for factory methods where the class method needs to create instances of the correct subclass.
5. Use the result only after the full construct has completed, per: When a classmethod is inherited and called on a subclass, the cls parameter is bound to the subclass, not the class that defined the method.

Common Use Cases:
• Teaching this behavior using the mental model: When a classmethod is inherited and called on a subclass, the cls parameter is bound to the subclass, not the class that defined the method.
• Debugging when the observed value should match the expectation in: Returns "B" Example: class A: @classmethod def who(cls): return cls.__name__ class B(A): pass class C(A): pass A.who() # "A" B.who() # "B" C.who() # "C" This is crucial for factory methods where the class method needs to create instances of the correct subclass.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • @classmethod makes cls the first parameter instead of self • cls is the class the method was CALLED on, not DEFINED in • B.who() → cls = B (not A) • This enables polymorphic class methods How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: B.who() calls the inherited classmethod 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Returns "B" Example: class A: @classmethod def who(cls): return cls.__name__ class B(A): pass class C(A): pass A.who() # "A" B.who() # "B" C.who() # "C" This is crucial for factory methods where the class method needs to create instances of the correct subclass..
• When performance matters, prefer the simplest pattern that still implements: When a classmethod is inherited and called on a subclass, the cls parameter is bound to the subclass, not the class that defined the method..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: When a classmethod is inherited and called on a subclass, the cls parameter is bound to the subclass, not the class that defined the method..

Notes:
• For maintainable code, make the intent behind: Key concepts: • @classmethod makes cls the first parameter instead of self • cls is the class the method was CALLED on, not DEFINED in • B.who() → cls = B (not A) • This enables polymorphic class methods How it works: 1. explicit (and test it with inputs like those in this prompt).`
  }),
  // 84. Factory classmethod — returns subclass instance
  (_i: number) => ({
    q: `class A:\n    @classmethod\n    def create(cls):\n        return cls()\nclass B(A): pass\nWhat is type(B.create()).__name__?`,
    o: ['"B"', '"A"', '"object"', 'Error'],
    c: 0,
    e: "cls is B when called as B.create(), so cls() creates a B instance. type(B.create()) is B.",
    de: `Factory classmethods that use cls() instead of a hardcoded class name automatically create the correct subclass instance. This is a key pattern for polymorphic object creation.

Key concepts:
• cls() creates an instance of whatever class cls refers to
• B.create() → cls = B → cls() = B() → returns a B instance
• If create used A() instead of cls(), it would always return an A
• This is the factory method pattern

How it works:
1. B.create() → cls = B
2. cls() → B() → creates a B instance
3. type(B.create()) → <class 'B'>
4. .__name__ → "B"

Example:
class Shape:
    @classmethod
    def create(cls):
        return cls()
class Circle(Shape): pass
class Square(Shape): pass

type(Circle.create())  # Circle (not Shape!)
type(Square.create())  # Square (not Shape!)

Anti-pattern (breaks subclassing):
class Shape:
    @classmethod
    def create(cls):
        return Shape()  # Always returns Shape, not subclass!

Key Concepts:
• .__name__ → "B" Example: class Shape: @classmethod def create(cls): return cls() class Circle(Shape): pass class Square(Shape): pass type(Circle.create()) # Circle (not Shape!) type(Square.create()) # Square (not Shape!) Anti-pattern (breaks subclassing): class Shape: @classmethod def create(cls): return Shape() # Always returns Shape, not subclass!

Key Distinctions:
• This question’s focus is best captured by: Factory classmethods that use cls() instead of a hardcoded class name automatically create the correct subclass instance.
• The contrast that matters for correctness is summarized by: This is a key pattern for polymorphic object creation.

How It Works:
• Python follows the rule implied by: Factory classmethods that use cls() instead of a hardcoded class name automatically create the correct subclass instance.
• The outcome you observe follows from: .__name__ → "B" Example: class Shape: @classmethod def create(cls): return cls() class Circle(Shape): pass class Square(Shape): pass type(Circle.create()) # Circle (not Shape!) type(Square.create()) # Square (not Shape!) Anti-pattern (breaks subclassing): class Shape: @classmethod def create(cls): return Shape() # Always returns Shape, not subclass!

Step-by-Step Execution:
1. Start from the construct described in: Factory classmethods that use cls() instead of a hardcoded class name automatically create the correct subclass instance.
2. Resolve the subparts implied by: This is a key pattern for polymorphic object creation.
3. Apply the core semantics highlighted in: Key concepts: • cls() creates an instance of whatever class cls refers to • B.create() → cls = B → cls() = B() → returns a B instance • If create used A() instead of cls(), it would always return an A • This is the factory method pattern How it works: 1.
4. Confirm the final result aligns with: .__name__ → "B" Example: class Shape: @classmethod def create(cls): return cls() class Circle(Shape): pass class Square(Shape): pass type(Circle.create()) # Circle (not Shape!) type(Square.create()) # Square (not Shape!) Anti-pattern (breaks subclassing): class Shape: @classmethod def create(cls): return Shape() # Always returns Shape, not subclass!

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: This is a key pattern for polymorphic object creation.
2. Apply the construct’s main rule next, matching: Factory classmethods that use cls() instead of a hardcoded class name automatically create the correct subclass instance.
3. Produce any intermediate values that .__name__ → "B" Example: class Shape: @classmethod def create(cls): return cls() class Circle(Shape): pass class Square(Shape): pass type(Circle.create()) # Circle (not Shape!) type(Square.create()) # Square (not Shape!) Anti-pattern (breaks subclassing): class Shape: @classmethod def create(cls): return Shape() # Always returns Shape, not subclass! relies on
4. Finish by returning/assembling the final output named by: .__name__ → "B" Example: class Shape: @classmethod def create(cls): return cls() class Circle(Shape): pass class Square(Shape): pass type(Circle.create()) # Circle (not Shape!) type(Square.create()) # Square (not Shape!) Anti-pattern (breaks subclassing): class Shape: @classmethod def create(cls): return Shape() # Always returns Shape, not subclass!
5. Use the result only after the full construct has completed, per: Factory classmethods that use cls() instead of a hardcoded class name automatically create the correct subclass instance.

Common Use Cases:
• Teaching this behavior using the mental model: Factory classmethods that use cls() instead of a hardcoded class name automatically create the correct subclass instance.
• Debugging when the observed value should match the expectation in: .__name__ → "B" Example: class Shape: @classmethod def create(cls): return cls() class Circle(Shape): pass class Square(Shape): pass type(Circle.create()) # Circle (not Shape!) type(Square.create()) # Square (not Shape!) Anti-pattern (breaks subclassing): class Shape: @classmethod def create(cls): return Shape() # Always returns Shape, not subclass!

Edge Cases:
• If inputs vary from the situation described in: This is a key pattern for polymorphic object creation., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • cls() creates an instance of whatever class cls refers to • B.create() → cls = B → cls() = B() → returns a B instance • If create used A() instead of cls(), it would always return an A • This is the factory method pattern How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: .__name__ → "B" Example: class Shape: @classmethod def create(cls): return cls() class Circle(Shape): pass class Square(Shape): pass type(Circle.create()) # Circle (not Shape!) type(Square.create()) # Square (not Shape!) Anti-pattern (breaks subclassing): class Shape: @classmethod def create(cls): return Shape() # Always returns Shape, not subclass!.
• When performance matters, prefer the simplest pattern that still implements: Factory classmethods that use cls() instead of a hardcoded class name automatically create the correct subclass instance..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Factory classmethods that use cls() instead of a hardcoded class name automatically create the correct subclass instance..

Notes:
• For maintainable code, make the intent behind: This is a key pattern for polymorphic object creation. explicit (and test it with inputs like those in this prompt).`
  }),
  // 85. isinstance on factory-created subclass instance
  (_i: number) => ({
    q: `class A:\n    @classmethod\n    def create(cls):\n        return cls()\nclass B(A): pass\nWhat is isinstance(B.create(), B)?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "B.create() returns B() (a B instance). isinstance(B(), B) is True.",
    de: `Combining factory classmethods with isinstance confirms that the factory correctly produces subclass instances.

Key concepts:
• B.create() → cls = B → cls() = B() → B instance
• isinstance(B_instance, B) → True
• isinstance(B_instance, A) → also True (B is a subclass of A)
• The factory produces the right type because it uses cls()

How it works:
1. B.create() → B() (B instance created via cls())
2. isinstance(B(), B) → True (direct instance)
3. Returns True

Example:
obj = B.create()
isinstance(obj, B)       # True (it's a B)
isinstance(obj, A)       # True (B is a subclass of A)
isinstance(obj, object)  # True (everything inherits from object)
type(obj) is B           # True (exact type check)

Factory classmethods preserve the type hierarchy — objects created via create() participate correctly in isinstance checks.

Key Concepts:
• Returns True Example: obj = B.create() isinstance(obj, B) # True (it's a B) isinstance(obj, A) # True (B is a subclass of A) isinstance(obj, object) # True (everything inherits from object) type(obj) is B # True (exact type check) Factory classmethods preserve the type hierarchy — objects created via create() participate correctly in isinstance checks.

Key Distinctions:
• This question’s focus is best captured by: Combining factory classmethods with isinstance confirms that the factory correctly produces subclass instances.
• The contrast that matters for correctness is summarized by: Key concepts: • B.create() → cls = B → cls() = B() → B instance • isinstance(B_instance, B) → True • isinstance(B_instance, A) → also True (B is a subclass of A) • The factory produces the right type because it uses cls() How it works: 1.

How It Works:
• Python follows the rule implied by: Combining factory classmethods with isinstance confirms that the factory correctly produces subclass instances.
• The outcome you observe follows from: Returns True Example: obj = B.create() isinstance(obj, B) # True (it's a B) isinstance(obj, A) # True (B is a subclass of A) isinstance(obj, object) # True (everything inherits from object) type(obj) is B # True (exact type check) Factory classmethods preserve the type hierarchy — objects created via create() participate correctly in isinstance checks.

Step-by-Step Execution:
1. Start from the construct described in: Combining factory classmethods with isinstance confirms that the factory correctly produces subclass instances.
2. Resolve the subparts implied by: Key concepts: • B.create() → cls = B → cls() = B() → B instance • isinstance(B_instance, B) → True • isinstance(B_instance, A) → also True (B is a subclass of A) • The factory produces the right type because it uses cls() How it works: 1.
3. Apply the core semantics highlighted in: B.create() → B() (B instance created via cls()) 2.
4. Confirm the final result aligns with: Returns True Example: obj = B.create() isinstance(obj, B) # True (it's a B) isinstance(obj, A) # True (B is a subclass of A) isinstance(obj, object) # True (everything inherits from object) type(obj) is B # True (exact type check) Factory classmethods preserve the type hierarchy — objects created via create() participate correctly in isinstance checks.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • B.create() → cls = B → cls() = B() → B instance • isinstance(B_instance, B) → True • isinstance(B_instance, A) → also True (B is a subclass of A) • The factory produces the right type because it uses cls() How it works: 1.
2. Apply the construct’s main rule next, matching: Combining factory classmethods with isinstance confirms that the factory correctly produces subclass instances.
3. Produce any intermediate values that Returns True Example: obj = B.create() isinstance(obj, B) # True (it's a B) isinstance(obj, A) # True (B is a subclass of A) isinstance(obj, object) # True (everything inherits from object) type(obj) is B # True (exact type check) Factory classmethods preserve the type hierarchy — objects created via create() participate correctly in isinstance checks. relies on
4. Finish by returning/assembling the final output named by: Returns True Example: obj = B.create() isinstance(obj, B) # True (it's a B) isinstance(obj, A) # True (B is a subclass of A) isinstance(obj, object) # True (everything inherits from object) type(obj) is B # True (exact type check) Factory classmethods preserve the type hierarchy — objects created via create() participate correctly in isinstance checks.
5. Use the result only after the full construct has completed, per: Combining factory classmethods with isinstance confirms that the factory correctly produces subclass instances.

Common Use Cases:
• Teaching this behavior using the mental model: Combining factory classmethods with isinstance confirms that the factory correctly produces subclass instances.
• Debugging when the observed value should match the expectation in: Returns True Example: obj = B.create() isinstance(obj, B) # True (it's a B) isinstance(obj, A) # True (B is a subclass of A) isinstance(obj, object) # True (everything inherits from object) type(obj) is B # True (exact type check) Factory classmethods preserve the type hierarchy — objects created via create() participate correctly in isinstance checks.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • B.create() → cls = B → cls() = B() → B instance • isinstance(B_instance, B) → True • isinstance(B_instance, A) → also True (B is a subclass of A) • The factory produces the right type because it uses cls() How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: B.create() → B() (B instance created via cls()) 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Returns True Example: obj = B.create() isinstance(obj, B) # True (it's a B) isinstance(obj, A) # True (B is a subclass of A) isinstance(obj, object) # True (everything inherits from object) type(obj) is B # True (exact type check) Factory classmethods preserve the type hierarchy — objects created via create() participate correctly in isinstance checks..
• When performance matters, prefer the simplest pattern that still implements: Combining factory classmethods with isinstance confirms that the factory correctly produces subclass instances..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Combining factory classmethods with isinstance confirms that the factory correctly produces subclass instances..

Notes:
• For maintainable code, make the intent behind: Key concepts: • B.create() → cls = B → cls() = B() → B instance • isinstance(B_instance, B) → True • isinstance(B_instance, A) → also True (B is a subclass of A) • The factory produces the right type because it uses cls() How it works: 1. explicit (and test it with inputs like those in this prompt).`
  }),
  // 86. Missing super().__init__() — attribute not set
  (_i: number) => ({
    q: `class A:\n    def __init__(self):\n        self.x = 1\nclass B(A):\n    def __init__(self):\n        self.y = 2\nb = B()\nWhat is hasattr(b, "x")?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "B.__init__ doesn't call super().__init__(), so A.__init__ never runs and self.x is never set. hasattr returns False.",
    de: `When a subclass overrides __init__ without calling super().__init__(), the parent's initialization code never runs. Any attributes the parent would set are missing.

Key concepts:
• B overrides __init__ but doesn't call super().__init__()
• A.__init__ (which sets self.x = 1) is never executed
• b only has y (set by B.__init__), not x
• hasattr(b, "x") → False because x was never created

How it works:
1. B() calls B.__init__(self)
2. B.__init__ only sets self.y = 2
3. A.__init__ is NOT called (no super().__init__())
4. self.x is never created
5. hasattr(b, "x") → False

Example:
b = B()
b.y        # 2 (set by B.__init__)
b.x        # AttributeError! (A.__init__ never ran)
hasattr(b, "x")  # False
hasattr(b, "y")  # True

Fix: call super().__init__() in B.__init__ to ensure parent initialization runs.

Key Concepts:
• (A.__init__ never ran) hasattr(b, "x") # False hasattr(b, "y") # True Fix: call super().__init__() in B.__init__ to ensure parent initialization runs.

Key Distinctions:
• This question’s focus is best captured by: When a subclass overrides __init__ without calling super().__init__(), the parent's initialization code never runs.
• The contrast that matters for correctness is summarized by: Any attributes the parent would set are missing.

How It Works:
• Python follows the rule implied by: When a subclass overrides __init__ without calling super().__init__(), the parent's initialization code never runs.
• The outcome you observe follows from: (A.__init__ never ran) hasattr(b, "x") # False hasattr(b, "y") # True Fix: call super().__init__() in B.__init__ to ensure parent initialization runs.

Step-by-Step Execution:
1. Start from the construct described in: When a subclass overrides __init__ without calling super().__init__(), the parent's initialization code never runs.
2. Resolve the subparts implied by: Any attributes the parent would set are missing.
3. Apply the core semantics highlighted in: Key concepts: • B overrides __init__ but doesn't call super().__init__() • A.__init__ (which sets self.x = 1) is never executed • b only has y (set by B.__init__), not x • hasattr(b, "x") → False because x was never created How it works: 1.
4. Confirm the final result aligns with: (A.__init__ never ran) hasattr(b, "x") # False hasattr(b, "y") # True Fix: call super().__init__() in B.__init__ to ensure parent initialization runs.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Any attributes the parent would set are missing.
2. Apply the construct’s main rule next, matching: When a subclass overrides __init__ without calling super().__init__(), the parent's initialization code never runs.
3. Produce any intermediate values that (A.__init__ never ran) hasattr(b, "x") # False hasattr(b, "y") # True Fix: call super().__init__() in B.__init__ to ensure parent initialization runs. relies on
4. Finish by returning/assembling the final output named by: (A.__init__ never ran) hasattr(b, "x") # False hasattr(b, "y") # True Fix: call super().__init__() in B.__init__ to ensure parent initialization runs.
5. Use the result only after the full construct has completed, per: When a subclass overrides __init__ without calling super().__init__(), the parent's initialization code never runs.

Common Use Cases:
• Teaching this behavior using the mental model: When a subclass overrides __init__ without calling super().__init__(), the parent's initialization code never runs.
• Debugging when the observed value should match the expectation in: (A.__init__ never ran) hasattr(b, "x") # False hasattr(b, "y") # True Fix: call super().__init__() in B.__init__ to ensure parent initialization runs.

Edge Cases:
• If inputs vary from the situation described in: Any attributes the parent would set are missing., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • B overrides __init__ but doesn't call super().__init__() • A.__init__ (which sets self.x = 1) is never executed • b only has y (set by B.__init__), not x • hasattr(b, "x") → False because x was never created How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: (A.__init__ never ran) hasattr(b, "x") # False hasattr(b, "y") # True Fix: call super().__init__() in B.__init__ to ensure parent initialization runs..
• When performance matters, prefer the simplest pattern that still implements: When a subclass overrides __init__ without calling super().__init__(), the parent's initialization code never runs..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: When a subclass overrides __init__ without calling super().__init__(), the parent's initialization code never runs..

Notes:
• For maintainable code, make the intent behind: Any attributes the parent would set are missing. explicit (and test it with inputs like those in this prompt).`
  }),
  // 87. Proper super().__init__() — both attributes set
  (_i: number) => ({
    q: `class A:\n    def __init__(self):\n        self.x = 1\nclass B(A):\n    def __init__(self):\n        super().__init__()\n        self.y = 2\nb = B()\nWhat is (b.x, b.y)?`,
    o: ["(1, 2)", "(None, 2)", "Error", "(2, 1)"],
    c: 0,
    e: "super().__init__() calls A.__init__ which sets x=1, then B.__init__ sets y=2. Both attributes exist.",
    de: `Calling super().__init__() ensures the parent's initialization runs, setting up all parent attributes before the subclass adds its own.

Key concepts:
• super().__init__() delegates to A.__init__
• A.__init__ sets self.x = 1
• Then B.__init__ continues and sets self.y = 2
• Both attributes are available on the instance

How it works:
1. B() calls B.__init__(self)
2. super().__init__() → calls A.__init__(self) → self.x = 1
3. self.y = 2
4. b now has both x and y
5. (b.x, b.y) → (1, 2)

Example:
class Base:
    def __init__(self):
        self.base_attr = "from base"
class Child(Base):
    def __init__(self):
        super().__init__()  # MUST call super
        self.child_attr = "from child"
c = Child()
c.base_attr   # "from base"
c.child_attr  # "from child"

Best practice: always call super().__init__() unless you have a specific reason not to.

Key Concepts:
• (b.x, b.y) → (1, 2) Example: class Base: def __init__(self): self.base_attr = "from base" class Child(Base): def __init__(self): super().__init__() # MUST call super self.child_attr = "from child" c = Child() c.base_attr # "from base" c.child_attr # "from child" Best practice: always call super().__init__() unless you have a specific reason not to.

Key Distinctions:
• This question’s focus is best captured by: Calling super().__init__() ensures the parent's initialization runs, setting up all parent attributes before the subclass adds its own.
• The contrast that matters for correctness is summarized by: Key concepts: • super().__init__() delegates to A.__init__ • A.__init__ sets self.x = 1 • Then B.__init__ continues and sets self.y = 2 • Both attributes are available on the instance How it works: 1.

How It Works:
• Python follows the rule implied by: Calling super().__init__() ensures the parent's initialization runs, setting up all parent attributes before the subclass adds its own.
• The outcome you observe follows from: (b.x, b.y) → (1, 2) Example: class Base: def __init__(self): self.base_attr = "from base" class Child(Base): def __init__(self): super().__init__() # MUST call super self.child_attr = "from child" c = Child() c.base_attr # "from base" c.child_attr # "from child" Best practice: always call super().__init__() unless you have a specific reason not to.

Step-by-Step Execution:
1. Start from the construct described in: Calling super().__init__() ensures the parent's initialization runs, setting up all parent attributes before the subclass adds its own.
2. Resolve the subparts implied by: Key concepts: • super().__init__() delegates to A.__init__ • A.__init__ sets self.x = 1 • Then B.__init__ continues and sets self.y = 2 • Both attributes are available on the instance How it works: 1.
3. Apply the core semantics highlighted in: B() calls B.__init__(self) 2.
4. Confirm the final result aligns with: (b.x, b.y) → (1, 2) Example: class Base: def __init__(self): self.base_attr = "from base" class Child(Base): def __init__(self): super().__init__() # MUST call super self.child_attr = "from child" c = Child() c.base_attr # "from base" c.child_attr # "from child" Best practice: always call super().__init__() unless you have a specific reason not to.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • super().__init__() delegates to A.__init__ • A.__init__ sets self.x = 1 • Then B.__init__ continues and sets self.y = 2 • Both attributes are available on the instance How it works: 1.
2. Apply the construct’s main rule next, matching: Calling super().__init__() ensures the parent's initialization runs, setting up all parent attributes before the subclass adds its own.
3. Produce any intermediate values that (b.x, b.y) → (1, 2) Example: class Base: def __init__(self): self.base_attr = "from base" class Child(Base): def __init__(self): super().__init__() # MUST call super self.child_attr = "from child" c = Child() c.base_attr # "from base" c.child_attr # "from child" Best practice: always call super().__init__() unless you have a specific reason not to. relies on
4. Finish by returning/assembling the final output named by: (b.x, b.y) → (1, 2) Example: class Base: def __init__(self): self.base_attr = "from base" class Child(Base): def __init__(self): super().__init__() # MUST call super self.child_attr = "from child" c = Child() c.base_attr # "from base" c.child_attr # "from child" Best practice: always call super().__init__() unless you have a specific reason not to.
5. Use the result only after the full construct has completed, per: Calling super().__init__() ensures the parent's initialization runs, setting up all parent attributes before the subclass adds its own.

Common Use Cases:
• Teaching this behavior using the mental model: Calling super().__init__() ensures the parent's initialization runs, setting up all parent attributes before the subclass adds its own.
• Debugging when the observed value should match the expectation in: (b.x, b.y) → (1, 2) Example: class Base: def __init__(self): self.base_attr = "from base" class Child(Base): def __init__(self): super().__init__() # MUST call super self.child_attr = "from child" c = Child() c.base_attr # "from base" c.child_attr # "from child" Best practice: always call super().__init__() unless you have a specific reason not to.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • super().__init__() delegates to A.__init__ • A.__init__ sets self.x = 1 • Then B.__init__ continues and sets self.y = 2 • Both attributes are available on the instance How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: B() calls B.__init__(self) 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: (b.x, b.y) → (1, 2) Example: class Base: def __init__(self): self.base_attr = "from base" class Child(Base): def __init__(self): super().__init__() # MUST call super self.child_attr = "from child" c = Child() c.base_attr # "from base" c.child_attr # "from child" Best practice: always call super().__init__() unless you have a specific reason not to..
• When performance matters, prefer the simplest pattern that still implements: Calling super().__init__() ensures the parent's initialization runs, setting up all parent attributes before the subclass adds its own..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Calling super().__init__() ensures the parent's initialization runs, setting up all parent attributes before the subclass adds its own..

Notes:
• For maintainable code, make the intent behind: Key concepts: • super().__init__() delegates to A.__init__ • A.__init__ sets self.x = 1 • Then B.__init__ continues and sets self.y = 2 • Both attributes are available on the instance How it works: 1. explicit (and test it with inputs like those in this prompt).`
  }),
  // 88. Inherited __repr__ — returns parent's format
  (_i: number) => ({
    q: `class A:\n    def __repr__(self):\n        return "A()"\nclass B(A): pass\nWhat is repr(B())?`,
    o: ['"A()"', '"B()"', 'Error', '"<B object>"'],
    c: 0,
    e: "B inherits __repr__ from A. The method is hardcoded to return 'A()', regardless of the actual type.",
    de: `When a parent class hardcodes its class name in __repr__, subclasses inherit that hardcoded representation, which can be misleading.

Key concepts:
• B inherits __repr__ from A
• A.__repr__ always returns the literal string "A()"
• It doesn't check the actual type — it's hardcoded
• repr(B()) calls A.__repr__ → "A()"

How it works:
1. B() creates a B instance
2. repr(B()) looks for __repr__ → finds A.__repr__ (inherited)
3. A.__repr__ returns "A()" — hardcoded string
4. Returns "A()" even though the object is a B

Example:
repr(A())  # "A()"
repr(B())  # "A()" — incorrect for B!

This is why polymorphic __repr__ implementations use type(self).__name__ instead of hardcoding the class name.

Key Concepts:
• This is why polymorphic __repr__ implementations use type(self).__name__ instead of hardcoding the class name.

Key Distinctions:
• This question’s focus is best captured by: When a parent class hardcodes its class name in __repr__, subclasses inherit that hardcoded representation, which can be misleading.
• The contrast that matters for correctness is summarized by: Key concepts: • B inherits __repr__ from A • A.__repr__ always returns the literal string "A()" • It doesn't check the actual type — it's hardcoded • repr(B()) calls A.__repr__ → "A()" How it works: 1.

How It Works:
• Python follows the rule implied by: When a parent class hardcodes its class name in __repr__, subclasses inherit that hardcoded representation, which can be misleading.
• The outcome you observe follows from: This is why polymorphic __repr__ implementations use type(self).__name__ instead of hardcoding the class name.

Step-by-Step Execution:
1. Start from the construct described in: When a parent class hardcodes its class name in __repr__, subclasses inherit that hardcoded representation, which can be misleading.
2. Resolve the subparts implied by: Key concepts: • B inherits __repr__ from A • A.__repr__ always returns the literal string "A()" • It doesn't check the actual type — it's hardcoded • repr(B()) calls A.__repr__ → "A()" How it works: 1.
3. Apply the core semantics highlighted in: B() creates a B instance 2.
4. Confirm the final result aligns with: This is why polymorphic __repr__ implementations use type(self).__name__ instead of hardcoding the class name.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • B inherits __repr__ from A • A.__repr__ always returns the literal string "A()" • It doesn't check the actual type — it's hardcoded • repr(B()) calls A.__repr__ → "A()" How it works: 1.
2. Apply the construct’s main rule next, matching: When a parent class hardcodes its class name in __repr__, subclasses inherit that hardcoded representation, which can be misleading.
3. Produce any intermediate values that This is why polymorphic __repr__ implementations use type(self).__name__ instead of hardcoding the class name. relies on
4. Finish by returning/assembling the final output named by: This is why polymorphic __repr__ implementations use type(self).__name__ instead of hardcoding the class name.
5. Use the result only after the full construct has completed, per: When a parent class hardcodes its class name in __repr__, subclasses inherit that hardcoded representation, which can be misleading.

Common Use Cases:
• Teaching this behavior using the mental model: When a parent class hardcodes its class name in __repr__, subclasses inherit that hardcoded representation, which can be misleading.
• Debugging when the observed value should match the expectation in: This is why polymorphic __repr__ implementations use type(self).__name__ instead of hardcoding the class name.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • B inherits __repr__ from A • A.__repr__ always returns the literal string "A()" • It doesn't check the actual type — it's hardcoded • repr(B()) calls A.__repr__ → "A()" How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: B() creates a B instance 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: This is why polymorphic __repr__ implementations use type(self).__name__ instead of hardcoding the class name..
• When performance matters, prefer the simplest pattern that still implements: When a parent class hardcodes its class name in __repr__, subclasses inherit that hardcoded representation, which can be misleading..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: When a parent class hardcodes its class name in __repr__, subclasses inherit that hardcoded representation, which can be misleading..

Notes:
• For maintainable code, make the intent behind: Key concepts: • B inherits __repr__ from A • A.__repr__ always returns the literal string "A()" • It doesn't check the actual type — it's hardcoded • repr(B()) calls A.__repr__ → "A()" How it works: 1. explicit (and test it with inputs like those in this prompt).`
  }),
  // 89. Polymorphic __repr__ using type(self).__name__
  (_i: number) => ({
    q: `class A:\n    def __repr__(self):\n        return f"{type(self).__name__}()"\nclass B(A): pass\nWhat is repr(B())?`,
    o: ['"B()"', '"A()"', 'Error', '"object()"'],
    c: 0,
    e: "type(self).__name__ returns the actual class name. For a B instance, it returns 'B', so repr gives 'B()'.",
    de: `Using type(self).__name__ in __repr__ makes it automatically correct for all subclasses. This is the recommended pattern.

Key concepts:
• type(self).__name__ returns the actual runtime class name
• For B(), type(self).__name__ is "B"
• f"{type(self).__name__}()" → "B()"
• This works correctly for A, B, and any future subclass

How it works:
1. B() creates a B instance
2. repr(B()) → calls inherited __repr__
3. type(self) → <class 'B'>
4. type(self).__name__ → "B"
5. f"B()" → "B()"

Example:
repr(A())  # "A()" — correct
repr(B())  # "B()" — correct
class C(B): pass
repr(C())  # "C()" — correct for all subclasses!

Best practice: Always use type(self).__name__ or self.__class__.__name__ in __repr__ for subclass-safe representations.

Key Concepts:
• Best practice: Always use type(self).__name__ or self.__class__.__name__ in __repr__ for subclass-safe representations.

Key Distinctions:
• This question’s focus is best captured by: Using type(self).__name__ in __repr__ makes it automatically correct for all subclasses.
• The contrast that matters for correctness is summarized by: This is the recommended pattern.

How It Works:
• Python follows the rule implied by: Using type(self).__name__ in __repr__ makes it automatically correct for all subclasses.
• The outcome you observe follows from: Best practice: Always use type(self).__name__ or self.__class__.__name__ in __repr__ for subclass-safe representations.

Step-by-Step Execution:
1. Start from the construct described in: Using type(self).__name__ in __repr__ makes it automatically correct for all subclasses.
2. Resolve the subparts implied by: This is the recommended pattern.
3. Apply the core semantics highlighted in: Key concepts: • type(self).__name__ returns the actual runtime class name • For B(), type(self).__name__ is "B" • f"{type(self).__name__}()" → "B()" • This works correctly for A, B, and any future subclass How it works: 1.
4. Confirm the final result aligns with: Best practice: Always use type(self).__name__ or self.__class__.__name__ in __repr__ for subclass-safe representations.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: This is the recommended pattern.
2. Apply the construct’s main rule next, matching: Using type(self).__name__ in __repr__ makes it automatically correct for all subclasses.
3. Produce any intermediate values that Best practice: Always use type(self).__name__ or self.__class__.__name__ in __repr__ for subclass-safe representations. relies on
4. Finish by returning/assembling the final output named by: Best practice: Always use type(self).__name__ or self.__class__.__name__ in __repr__ for subclass-safe representations.
5. Use the result only after the full construct has completed, per: Using type(self).__name__ in __repr__ makes it automatically correct for all subclasses.

Common Use Cases:
• Teaching this behavior using the mental model: Using type(self).__name__ in __repr__ makes it automatically correct for all subclasses.
• Debugging when the observed value should match the expectation in: Best practice: Always use type(self).__name__ or self.__class__.__name__ in __repr__ for subclass-safe representations.

Edge Cases:
• If inputs vary from the situation described in: This is the recommended pattern., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • type(self).__name__ returns the actual runtime class name • For B(), type(self).__name__ is "B" • f"{type(self).__name__}()" → "B()" • This works correctly for A, B, and any future subclass How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Best practice: Always use type(self).__name__ or self.__class__.__name__ in __repr__ for subclass-safe representations..
• When performance matters, prefer the simplest pattern that still implements: Using type(self).__name__ in __repr__ makes it automatically correct for all subclasses..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Using type(self).__name__ in __repr__ makes it automatically correct for all subclasses..

Notes:
• For maintainable code, make the intent behind: This is the recommended pattern. explicit (and test it with inputs like those in this prompt).`
  }),
  // 90. __eq__ with isinstance — parent == child
  (_i: number) => ({
    q: `class A:\n    def __eq__(self, other):\n        return isinstance(other, A)\nclass B(A): pass\nWhat is A() == B()?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "A.__eq__ checks isinstance(other, A). B() is an instance of A (subclass), so isinstance returns True.",
    de: `When __eq__ uses isinstance, it accepts both instances of the class AND instances of any subclass.

Key concepts:
• A.__eq__ checks isinstance(other, A)
• B is a subclass of A, so B() is an instance of A
• isinstance(B(), A) → True
• Therefore A() == B() → True

How it works:
1. A() == B() calls A().__eq__(B())
2. isinstance(B(), A) → True (B is a subclass of A)
3. Returns True

Example:
class A:
    def __eq__(self, other):
        return isinstance(other, A)
class B(A): pass
A() == A()  # True
A() == B()  # True (B is an A)
A() == 42   # False (42 is not an A)

This is a common pattern for equality in class hierarchies — two objects are "equal" if they belong to the same family.

Key Concepts:
• Returns True Example: class A: def __eq__(self, other): return isinstance(other, A) class B(A): pass A() == A() # True A() == B() # True (B is an A) A() == 42 # False (42 is not an A) This is a common pattern for equality in class hierarchies — two objects are "equal" if they belong to the same family.

Key Distinctions:
• This question’s focus is best captured by: When __eq__ uses isinstance, it accepts both instances of the class AND instances of any subclass.
• The contrast that matters for correctness is summarized by: Key concepts: • A.__eq__ checks isinstance(other, A) • B is a subclass of A, so B() is an instance of A • isinstance(B(), A) → True • Therefore A() == B() → True How it works: 1.

How It Works:
• Python follows the rule implied by: When __eq__ uses isinstance, it accepts both instances of the class AND instances of any subclass.
• The outcome you observe follows from: Returns True Example: class A: def __eq__(self, other): return isinstance(other, A) class B(A): pass A() == A() # True A() == B() # True (B is an A) A() == 42 # False (42 is not an A) This is a common pattern for equality in class hierarchies — two objects are "equal" if they belong to the same family.

Step-by-Step Execution:
1. Start from the construct described in: When __eq__ uses isinstance, it accepts both instances of the class AND instances of any subclass.
2. Resolve the subparts implied by: Key concepts: • A.__eq__ checks isinstance(other, A) • B is a subclass of A, so B() is an instance of A • isinstance(B(), A) → True • Therefore A() == B() → True How it works: 1.
3. Apply the core semantics highlighted in: A() == B() calls A().__eq__(B()) 2.
4. Confirm the final result aligns with: Returns True Example: class A: def __eq__(self, other): return isinstance(other, A) class B(A): pass A() == A() # True A() == B() # True (B is an A) A() == 42 # False (42 is not an A) This is a common pattern for equality in class hierarchies — two objects are "equal" if they belong to the same family.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • A.__eq__ checks isinstance(other, A) • B is a subclass of A, so B() is an instance of A • isinstance(B(), A) → True • Therefore A() == B() → True How it works: 1.
2. Apply the construct’s main rule next, matching: When __eq__ uses isinstance, it accepts both instances of the class AND instances of any subclass.
3. Produce any intermediate values that Returns True Example: class A: def __eq__(self, other): return isinstance(other, A) class B(A): pass A() == A() # True A() == B() # True (B is an A) A() == 42 # False (42 is not an A) This is a common pattern for equality in class hierarchies — two objects are "equal" if they belong to the same family. relies on
4. Finish by returning/assembling the final output named by: Returns True Example: class A: def __eq__(self, other): return isinstance(other, A) class B(A): pass A() == A() # True A() == B() # True (B is an A) A() == 42 # False (42 is not an A) This is a common pattern for equality in class hierarchies — two objects are "equal" if they belong to the same family.
5. Use the result only after the full construct has completed, per: When __eq__ uses isinstance, it accepts both instances of the class AND instances of any subclass.

Common Use Cases:
• Teaching this behavior using the mental model: When __eq__ uses isinstance, it accepts both instances of the class AND instances of any subclass.
• Debugging when the observed value should match the expectation in: Returns True Example: class A: def __eq__(self, other): return isinstance(other, A) class B(A): pass A() == A() # True A() == B() # True (B is an A) A() == 42 # False (42 is not an A) This is a common pattern for equality in class hierarchies — two objects are "equal" if they belong to the same family.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • A.__eq__ checks isinstance(other, A) • B is a subclass of A, so B() is an instance of A • isinstance(B(), A) → True • Therefore A() == B() → True How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: A() == B() calls A().__eq__(B()) 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Returns True Example: class A: def __eq__(self, other): return isinstance(other, A) class B(A): pass A() == A() # True A() == B() # True (B is an A) A() == 42 # False (42 is not an A) This is a common pattern for equality in class hierarchies — two objects are "equal" if they belong to the same family..
• When performance matters, prefer the simplest pattern that still implements: When __eq__ uses isinstance, it accepts both instances of the class AND instances of any subclass..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: When __eq__ uses isinstance, it accepts both instances of the class AND instances of any subclass..

Notes:
• For maintainable code, make the intent behind: Key concepts: • A.__eq__ checks isinstance(other, A) • B is a subclass of A, so B() is an instance of A • isinstance(B(), A) → True • Therefore A() == B() → True How it works: 1. explicit (and test it with inputs like those in this prompt).`
  }),
  // 91. __eq__ symmetry — child == parent
  (_i: number) => ({
    q: `class A:\n    def __eq__(self, other):\n        return isinstance(other, A)\nclass B(A): pass\nWhat is B() == A()?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "B inherits __eq__ from A. It checks isinstance(other, A). A() IS an instance of A, so True.",
    de: `B inherits __eq__ from A, so the same isinstance check applies. A() is trivially an instance of A.

Key concepts:
• B() == A() calls B().__eq__(A())
• B inherits __eq__ from A
• isinstance(A(), A) → True (A is an instance of itself)
• Returns True

How it works:
1. B() == A() → B().__eq__(A())
2. B doesn't override __eq__, so A.__eq__ is used
3. isinstance(A(), A) → True
4. Returns True

Symmetry check:
A() == B()  # True (B is instance of A)
B() == A()  # True (A is instance of A)
Both return True — equality is symmetric here.

Note: If B overrode __eq__ with different logic, symmetry could break — A() == B() might differ from B() == A(). Maintaining symmetry in __eq__ is important for correctness.

Key Concepts:
• Maintaining symmetry in __eq__ is important for correctness.

Key Distinctions:
• This question’s focus is best captured by: B inherits __eq__ from A, so the same isinstance check applies.
• The contrast that matters for correctness is summarized by: A() is trivially an instance of A.

How It Works:
• Python follows the rule implied by: B inherits __eq__ from A, so the same isinstance check applies.
• The outcome you observe follows from: Maintaining symmetry in __eq__ is important for correctness.

Step-by-Step Execution:
1. Start from the construct described in: B inherits __eq__ from A, so the same isinstance check applies.
2. Resolve the subparts implied by: A() is trivially an instance of A.
3. Apply the core semantics highlighted in: Key concepts: • B() == A() calls B().__eq__(A()) • B inherits __eq__ from A • isinstance(A(), A) → True (A is an instance of itself) • Returns True How it works: 1.
4. Confirm the final result aligns with: Maintaining symmetry in __eq__ is important for correctness.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: A() is trivially an instance of A.
2. Apply the construct’s main rule next, matching: B inherits __eq__ from A, so the same isinstance check applies.
3. Produce any intermediate values that Maintaining symmetry in __eq__ is important for correctness. relies on
4. Finish by returning/assembling the final output named by: Maintaining symmetry in __eq__ is important for correctness.
5. Use the result only after the full construct has completed, per: B inherits __eq__ from A, so the same isinstance check applies.

Common Use Cases:
• Teaching this behavior using the mental model: B inherits __eq__ from A, so the same isinstance check applies.
• Debugging when the observed value should match the expectation in: Maintaining symmetry in __eq__ is important for correctness.

Edge Cases:
• If inputs vary from the situation described in: A() is trivially an instance of A., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • B() == A() calls B().__eq__(A()) • B inherits __eq__ from A • isinstance(A(), A) → True (A is an instance of itself) • Returns True How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Maintaining symmetry in __eq__ is important for correctness..
• When performance matters, prefer the simplest pattern that still implements: B inherits __eq__ from A, so the same isinstance check applies..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: B inherits __eq__ from A, so the same isinstance check applies..

Notes:
• For maintainable code, make the intent behind: A() is trivially an instance of A. explicit (and test it with inputs like those in this prompt).`
  }),
  // 92. __init_subclass__ with keyword arguments
  (_i: number) => ({
    q: `class A:\n    def __init_subclass__(cls, greeting="hello", **kwargs):\n        super().__init_subclass__(**kwargs)\n        cls.greeting = greeting\nclass B(A, greeting="hi"): pass\nWhat is B.greeting?`,
    o: ['"hi"', '"hello"', 'Error', 'None'],
    c: 0,
    e: "B passes greeting='hi' as a class keyword argument. __init_subclass__ receives it and sets B.greeting = 'hi'.",
    de: `__init_subclass__ can accept keyword arguments passed in the class definition line. This allows customizable subclass registration.

Key concepts:
• class B(A, greeting="hi") passes greeting="hi" to __init_subclass__
• __init_subclass__ receives it as the greeting parameter
• cls.greeting = greeting sets B.greeting = "hi"
• The default is "hello" for subclasses that don't pass greeting

How it works:
1. class B(A, greeting="hi"): triggers A.__init_subclass__(cls=B, greeting="hi")
2. cls.greeting = "hi" → B.greeting = "hi"
3. B.greeting → "hi"

Example:
class B(A, greeting="hi"): pass
class C(A): pass  # uses default greeting="hello"
class D(A, greeting="hey"): pass

B.greeting  # "hi"
C.greeting  # "hello" (default)
D.greeting  # "hey"

Common uses:
• Configuring subclass behavior at definition time
• Plugin registration with parameters
• Framework configuration via class keywords

Key Concepts:
• B.greeting → "hi" Example: class B(A, greeting="hi"): pass class C(A): pass # uses default greeting="hello" class D(A, greeting="hey"): pass B.greeting # "hi" C.greeting # "hello" (default) D.greeting # "hey" Common uses: • Configuring subclass behavior at definition time • Plugin registration with parameters • Framework configuration via class keywords

Key Distinctions:
• This question’s focus is best captured by: __init_subclass__ can accept keyword arguments passed in the class definition line.
• The contrast that matters for correctness is summarized by: This allows customizable subclass registration.

How It Works:
• Python follows the rule implied by: __init_subclass__ can accept keyword arguments passed in the class definition line.
• The outcome you observe follows from: B.greeting → "hi" Example: class B(A, greeting="hi"): pass class C(A): pass # uses default greeting="hello" class D(A, greeting="hey"): pass B.greeting # "hi" C.greeting # "hello" (default) D.greeting # "hey" Common uses: • Configuring subclass behavior at definition time • Plugin registration with parameters • Framework configuration via class keywords

Step-by-Step Execution:
1. Start from the construct described in: __init_subclass__ can accept keyword arguments passed in the class definition line.
2. Resolve the subparts implied by: This allows customizable subclass registration.
3. Apply the core semantics highlighted in: Key concepts: • class B(A, greeting="hi") passes greeting="hi" to __init_subclass__ • __init_subclass__ receives it as the greeting parameter • cls.greeting = greeting sets B.greeting = "hi" • The default is "hello" for subclasses that don't pass greeting How it works: 1.
4. Confirm the final result aligns with: B.greeting → "hi" Example: class B(A, greeting="hi"): pass class C(A): pass # uses default greeting="hello" class D(A, greeting="hey"): pass B.greeting # "hi" C.greeting # "hello" (default) D.greeting # "hey" Common uses: • Configuring subclass behavior at definition time • Plugin registration with parameters • Framework configuration via class keywords

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: This allows customizable subclass registration.
2. Apply the construct’s main rule next, matching: __init_subclass__ can accept keyword arguments passed in the class definition line.
3. Produce any intermediate values that B.greeting → "hi" Example: class B(A, greeting="hi"): pass class C(A): pass # uses default greeting="hello" class D(A, greeting="hey"): pass B.greeting # "hi" C.greeting # "hello" (default) D.greeting # "hey" Common uses: • Configuring subclass behavior at definition time • Plugin registration with parameters • Framework configuration via class keywords relies on
4. Finish by returning/assembling the final output named by: B.greeting → "hi" Example: class B(A, greeting="hi"): pass class C(A): pass # uses default greeting="hello" class D(A, greeting="hey"): pass B.greeting # "hi" C.greeting # "hello" (default) D.greeting # "hey" Common uses: • Configuring subclass behavior at definition time • Plugin registration with parameters • Framework configuration via class keywords
5. Use the result only after the full construct has completed, per: __init_subclass__ can accept keyword arguments passed in the class definition line.

Common Use Cases:
• Teaching this behavior using the mental model: __init_subclass__ can accept keyword arguments passed in the class definition line.
• Debugging when the observed value should match the expectation in: B.greeting → "hi" Example: class B(A, greeting="hi"): pass class C(A): pass # uses default greeting="hello" class D(A, greeting="hey"): pass B.greeting # "hi" C.greeting # "hello" (default) D.greeting # "hey" Common uses: • Configuring subclass behavior at definition time • Plugin registration with parameters • Framework configuration via class keywords

Edge Cases:
• If inputs vary from the situation described in: This allows customizable subclass registration., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • class B(A, greeting="hi") passes greeting="hi" to __init_subclass__ • __init_subclass__ receives it as the greeting parameter • cls.greeting = greeting sets B.greeting = "hi" • The default is "hello" for subclasses that don't pass greeting How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: B.greeting → "hi" Example: class B(A, greeting="hi"): pass class C(A): pass # uses default greeting="hello" class D(A, greeting="hey"): pass B.greeting # "hi" C.greeting # "hello" (default) D.greeting # "hey" Common uses: • Configuring subclass behavior at definition time • Plugin registration with parameters • Framework configuration via class keywords.
• When performance matters, prefer the simplest pattern that still implements: __init_subclass__ can accept keyword arguments passed in the class definition line..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: __init_subclass__ can accept keyword arguments passed in the class definition line..

Notes:
• For maintainable code, make the intent behind: This allows customizable subclass registration. explicit (and test it with inputs like those in this prompt).`
  }),
  // 93. Monkey-patching class method — resolved at call time
  (_i: number) => ({
    q: `class A:\n    def method(self): return 1\na = A()\nA.method = lambda self: 2\nWhat is a.method()?`,
    o: ["2", "1", "Error", "None"],
    c: 0,
    e: "Methods are resolved at call time via the class. Replacing A.method after creating a affects all instances.",
    de: `Python looks up methods through the class at call time, not at instance creation time. Changing a method on the class affects all existing and future instances.

Key concepts:
• a.method() looks up method via type(a) (which is A) at CALL time
• A.method is replaced with a new lambda after a is created
• When a.method() runs, it finds the NEW lambda on A
• This is called "monkey-patching"

How it works:
1. A.method initially returns 1
2. a = A() creates an instance
3. A.method = lambda self: 2 replaces the method on A
4. a.method() → looks up A.method → finds lambda → returns 2

Example:
class A:
    def method(self): return 1
a = A()
a.method()  # 1

A.method = lambda self: 2
a.method()  # 2 (resolved at call time!)

b = A()
b.method()  # 2 (also gets the new method)

This works because Python's method lookup is dynamic — it checks the class __dict__ every time the method is accessed.

Key Concepts:
• a.method() → looks up A.method → finds lambda → returns 2 Example: class A: def method(self): return 1 a = A() a.method() # 1 A.method = lambda self: 2 a.method() # 2 (resolved at call time!) b = A() b.method() # 2 (also gets the new method) This works because Python's method lookup is dynamic — it checks the class __dict__ every time the method is accessed.

Key Distinctions:
• This question’s focus is best captured by: Python looks up methods through the class at call time, not at instance creation time.
• The contrast that matters for correctness is summarized by: Changing a method on the class affects all existing and future instances.

How It Works:
• Python follows the rule implied by: Python looks up methods through the class at call time, not at instance creation time.
• The outcome you observe follows from: a.method() → looks up A.method → finds lambda → returns 2 Example: class A: def method(self): return 1 a = A() a.method() # 1 A.method = lambda self: 2 a.method() # 2 (resolved at call time!) b = A() b.method() # 2 (also gets the new method) This works because Python's method lookup is dynamic — it checks the class __dict__ every time the method is accessed.

Step-by-Step Execution:
1. Start from the construct described in: Python looks up methods through the class at call time, not at instance creation time.
2. Resolve the subparts implied by: Changing a method on the class affects all existing and future instances.
3. Apply the core semantics highlighted in: Key concepts: • a.method() looks up method via type(a) (which is A) at CALL time • A.method is replaced with a new lambda after a is created • When a.method() runs, it finds the NEW lambda on A • This is called "monkey-patching" How it works: 1.
4. Confirm the final result aligns with: a.method() → looks up A.method → finds lambda → returns 2 Example: class A: def method(self): return 1 a = A() a.method() # 1 A.method = lambda self: 2 a.method() # 2 (resolved at call time!) b = A() b.method() # 2 (also gets the new method) This works because Python's method lookup is dynamic — it checks the class __dict__ every time the method is accessed.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Changing a method on the class affects all existing and future instances.
2. Apply the construct’s main rule next, matching: Python looks up methods through the class at call time, not at instance creation time.
3. Produce any intermediate values that a.method() → looks up A.method → finds lambda → returns 2 Example: class A: def method(self): return 1 a = A() a.method() # 1 A.method = lambda self: 2 a.method() # 2 (resolved at call time!) b = A() b.method() # 2 (also gets the new method) This works because Python's method lookup is dynamic — it checks the class __dict__ every time the method is accessed. relies on
4. Finish by returning/assembling the final output named by: a.method() → looks up A.method → finds lambda → returns 2 Example: class A: def method(self): return 1 a = A() a.method() # 1 A.method = lambda self: 2 a.method() # 2 (resolved at call time!) b = A() b.method() # 2 (also gets the new method) This works because Python's method lookup is dynamic — it checks the class __dict__ every time the method is accessed.
5. Use the result only after the full construct has completed, per: Python looks up methods through the class at call time, not at instance creation time.

Common Use Cases:
• Teaching this behavior using the mental model: Python looks up methods through the class at call time, not at instance creation time.
• Debugging when the observed value should match the expectation in: a.method() → looks up A.method → finds lambda → returns 2 Example: class A: def method(self): return 1 a = A() a.method() # 1 A.method = lambda self: 2 a.method() # 2 (resolved at call time!) b = A() b.method() # 2 (also gets the new method) This works because Python's method lookup is dynamic — it checks the class __dict__ every time the method is accessed.

Edge Cases:
• If inputs vary from the situation described in: Changing a method on the class affects all existing and future instances., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • a.method() looks up method via type(a) (which is A) at CALL time • A.method is replaced with a new lambda after a is created • When a.method() runs, it finds the NEW lambda on A • This is called "monkey-patching" How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: a.method() → looks up A.method → finds lambda → returns 2 Example: class A: def method(self): return 1 a = A() a.method() # 1 A.method = lambda self: 2 a.method() # 2 (resolved at call time!) b = A() b.method() # 2 (also gets the new method) This works because Python's method lookup is dynamic — it checks the class __dict__ every time the method is accessed..
• When performance matters, prefer the simplest pattern that still implements: Python looks up methods through the class at call time, not at instance creation time..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Python looks up methods through the class at call time, not at instance creation time..

Notes:
• For maintainable code, make the intent behind: Changing a method on the class affects all existing and future instances. explicit (and test it with inputs like those in this prompt).`
  }),
  // 94. Instance attribute shadows class method
  (_i: number) => ({
    q: `class A:\n    def method(self): return 1\na = A()\na.method = lambda: 2\nWhat is a.method()?`,
    o: ["2", "1", "Error", "None"],
    c: 0,
    e: "Setting a.method directly stores a function in the instance __dict__, which shadows the class method. Note: no self parameter needed.",
    de: `Assigning a function directly to an instance attribute creates a regular attribute (not a bound method) that shadows the class method in the lookup order.

Key concepts:
• a.method = lambda: 2 stores a function in a.__dict__
• Instance attributes are checked BEFORE class attributes in lookup
• The lambda doesn't take self because it's a plain function, not a descriptor
• A.method still exists and works for other instances

How it works:
1. A.method is a regular method (takes self)
2. a.method = lambda: 2 creates an instance attribute
3. a.method() → checks a.__dict__ first → finds the lambda → calls it
4. The lambda takes no args (no self) → returns 2

Example:
class A:
    def method(self): return 1
a = A()
b = A()
a.method = lambda: 2  # only affects a
a.method()  # 2 (instance attribute)
b.method()  # 1 (class method — b is unaffected)

Important: the instance attribute is a plain function, not a bound method. It doesn't receive self automatically.

Key Concepts:
• It doesn't receive self automatically.

Key Distinctions:
• This question’s focus is best captured by: Assigning a function directly to an instance attribute creates a regular attribute (not a bound method) that shadows the class method in the lookup order.
• The contrast that matters for correctness is summarized by: Key concepts: • a.method = lambda: 2 stores a function in a.__dict__ • Instance attributes are checked BEFORE class attributes in lookup • The lambda doesn't take self because it's a plain function, not a descriptor • A.method still exists and works for other instances How it works: 1.

How It Works:
• Python follows the rule implied by: Assigning a function directly to an instance attribute creates a regular attribute (not a bound method) that shadows the class method in the lookup order.
• The outcome you observe follows from: It doesn't receive self automatically.

Step-by-Step Execution:
1. Start from the construct described in: Assigning a function directly to an instance attribute creates a regular attribute (not a bound method) that shadows the class method in the lookup order.
2. Resolve the subparts implied by: Key concepts: • a.method = lambda: 2 stores a function in a.__dict__ • Instance attributes are checked BEFORE class attributes in lookup • The lambda doesn't take self because it's a plain function, not a descriptor • A.method still exists and works for other instances How it works: 1.
3. Apply the core semantics highlighted in: A.method is a regular method (takes self) 2.
4. Confirm the final result aligns with: It doesn't receive self automatically.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • a.method = lambda: 2 stores a function in a.__dict__ • Instance attributes are checked BEFORE class attributes in lookup • The lambda doesn't take self because it's a plain function, not a descriptor • A.method still exists and works for other instances How it works: 1.
2. Apply the construct’s main rule next, matching: Assigning a function directly to an instance attribute creates a regular attribute (not a bound method) that shadows the class method in the lookup order.
3. Produce any intermediate values that It doesn't receive self automatically. relies on
4. Finish by returning/assembling the final output named by: It doesn't receive self automatically.
5. Use the result only after the full construct has completed, per: Assigning a function directly to an instance attribute creates a regular attribute (not a bound method) that shadows the class method in the lookup order.

Common Use Cases:
• Teaching this behavior using the mental model: Assigning a function directly to an instance attribute creates a regular attribute (not a bound method) that shadows the class method in the lookup order.
• Debugging when the observed value should match the expectation in: It doesn't receive self automatically.

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • a.method = lambda: 2 stores a function in a.__dict__ • Instance attributes are checked BEFORE class attributes in lookup • The lambda doesn't take self because it's a plain function, not a descriptor • A.method still exists and works for other instances How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: A.method is a regular method (takes self) 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: It doesn't receive self automatically..
• When performance matters, prefer the simplest pattern that still implements: Assigning a function directly to an instance attribute creates a regular attribute (not a bound method) that shadows the class method in the lookup order..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: Assigning a function directly to an instance attribute creates a regular attribute (not a bound method) that shadows the class method in the lookup order..

Notes:
• For maintainable code, make the intent behind: Key concepts: • a.method = lambda: 2 stores a function in a.__dict__ • Instance attributes are checked BEFORE class attributes in lookup • The lambda doesn't take self because it's a plain function, not a descriptor • A.method still exists and works for other instances How it works: 1. explicit (and test it with inputs like those in this prompt).`
  }),
  // 95. a.__class__.x modifies the class attribute
  (_i: number) => ({
    q: `class A:\n    x = 1\na = A()\na.__class__.x = 2\nWhat is A.x?`,
    o: ["2", "1", "Error", "None"],
    c: 0,
    e: "a.__class__ IS A (the same class object). Setting a.__class__.x = 2 is identical to A.x = 2.",
    de: `a.__class__ returns the class of the instance, which is the same object as A. Modifying attributes through a.__class__ is identical to modifying them directly on A.

Key concepts:
• a.__class__ returns A (the class object itself)
• a.__class__ is A → True (same object)
• a.__class__.x = 2 is literally A.x = 2
• All instances of A see the change

How it works:
1. a.__class__ → A
2. a.__class__.x = 2 → A.x = 2
3. A.x → 2

Example:
class A: x = 1
a = A()
b = A()
a.__class__.x = 2  # same as A.x = 2
A.x   # 2
b.x   # 2 (all instances see the class attribute change)

Note: This is different from a.x = 2, which creates an instance attribute on a only. a.__class__.x = 2 modifies the class itself.

Key Concepts:
• a.__class__.x = 2 modifies the class itself.

Key Distinctions:
• This question’s focus is best captured by: a.__class__ returns the class of the instance, which is the same object as A.
• The contrast that matters for correctness is summarized by: Modifying attributes through a.__class__ is identical to modifying them directly on A.

How It Works:
• Python follows the rule implied by: a.__class__ returns the class of the instance, which is the same object as A.
• The outcome you observe follows from: a.__class__.x = 2 modifies the class itself.

Step-by-Step Execution:
1. Start from the construct described in: a.__class__ returns the class of the instance, which is the same object as A.
2. Resolve the subparts implied by: Modifying attributes through a.__class__ is identical to modifying them directly on A.
3. Apply the core semantics highlighted in: Key concepts: • a.__class__ returns A (the class object itself) • a.__class__ is A → True (same object) • a.__class__.x = 2 is literally A.x = 2 • All instances of A see the change How it works: 1.
4. Confirm the final result aligns with: a.__class__.x = 2 modifies the class itself.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Modifying attributes through a.__class__ is identical to modifying them directly on A.
2. Apply the construct’s main rule next, matching: a.__class__ returns the class of the instance, which is the same object as A.
3. Produce any intermediate values that a.__class__.x = 2 modifies the class itself. relies on
4. Finish by returning/assembling the final output named by: a.__class__.x = 2 modifies the class itself.
5. Use the result only after the full construct has completed, per: a.__class__ returns the class of the instance, which is the same object as A.

Common Use Cases:
• Teaching this behavior using the mental model: a.__class__ returns the class of the instance, which is the same object as A.
• Debugging when the observed value should match the expectation in: a.__class__.x = 2 modifies the class itself.

Edge Cases:
• If inputs vary from the situation described in: Modifying attributes through a.__class__ is identical to modifying them directly on A., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • a.__class__ returns A (the class object itself) • a.__class__ is A → True (same object) • a.__class__.x = 2 is literally A.x = 2 • All instances of A see the change How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: a.__class__.x = 2 modifies the class itself..
• When performance matters, prefer the simplest pattern that still implements: a.__class__ returns the class of the instance, which is the same object as A..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: a.__class__ returns the class of the instance, which is the same object as A..

Notes:
• For maintainable code, make the intent behind: Modifying attributes through a.__class__ is identical to modifying them directly on A. explicit (and test it with inputs like those in this prompt).`
  }),
  // 96. Checking if class is in MRO
  (_i: number) => ({
    q: `class A: pass\nclass B(A): pass\nWhat is A in B.__mro__?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "B.__mro__ contains B, A, and object. A is in the MRO, so the 'in' check returns True.",
    de: `__mro__ (Method Resolution Order) is a tuple of all classes in the lookup chain. You can use 'in' to check if a class appears in another class's MRO.

Key concepts:
• B.__mro__ → (B, A, object)
• A is in this tuple → True
• The MRO includes the class itself, all ancestors, and object
• 'in' performs a membership check on the tuple

How it works:
1. B.__mro__ → (<class 'B'>, <class 'A'>, <class 'object'>)
2. A in (B, A, object) → True
3. Returns True

Example:
class A: pass
class B(A): pass
B.__mro__          # (B, A, object)
A in B.__mro__     # True
B in B.__mro__     # True
object in B.__mro__  # True
B in A.__mro__     # False (B is not an ancestor of A)

issubclass(B, A) is essentially equivalent to A in B.__mro__.

Key Concepts:
• Returns True Example: class A: pass class B(A): pass B.__mro__ # (B, A, object) A in B.__mro__ # True B in B.__mro__ # True object in B.__mro__ # True B in A.__mro__ # False (B is not an ancestor of A) issubclass(B, A) is essentially equivalent to A in B.__mro__.

Key Distinctions:
• This question’s focus is best captured by: __mro__ (Method Resolution Order) is a tuple of all classes in the lookup chain.
• The contrast that matters for correctness is summarized by: You can use 'in' to check if a class appears in another class's MRO.

How It Works:
• Python follows the rule implied by: __mro__ (Method Resolution Order) is a tuple of all classes in the lookup chain.
• The outcome you observe follows from: Returns True Example: class A: pass class B(A): pass B.__mro__ # (B, A, object) A in B.__mro__ # True B in B.__mro__ # True object in B.__mro__ # True B in A.__mro__ # False (B is not an ancestor of A) issubclass(B, A) is essentially equivalent to A in B.__mro__.

Step-by-Step Execution:
1. Start from the construct described in: __mro__ (Method Resolution Order) is a tuple of all classes in the lookup chain.
2. Resolve the subparts implied by: You can use 'in' to check if a class appears in another class's MRO.
3. Apply the core semantics highlighted in: Key concepts: • B.__mro__ → (B, A, object) • A is in this tuple → True • The MRO includes the class itself, all ancestors, and object • 'in' performs a membership check on the tuple How it works: 1.
4. Confirm the final result aligns with: Returns True Example: class A: pass class B(A): pass B.__mro__ # (B, A, object) A in B.__mro__ # True B in B.__mro__ # True object in B.__mro__ # True B in A.__mro__ # False (B is not an ancestor of A) issubclass(B, A) is essentially equivalent to A in B.__mro__.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: You can use 'in' to check if a class appears in another class's MRO.
2. Apply the construct’s main rule next, matching: __mro__ (Method Resolution Order) is a tuple of all classes in the lookup chain.
3. Produce any intermediate values that Returns True Example: class A: pass class B(A): pass B.__mro__ # (B, A, object) A in B.__mro__ # True B in B.__mro__ # True object in B.__mro__ # True B in A.__mro__ # False (B is not an ancestor of A) issubclass(B, A) is essentially equivalent to A in B.__mro__. relies on
4. Finish by returning/assembling the final output named by: Returns True Example: class A: pass class B(A): pass B.__mro__ # (B, A, object) A in B.__mro__ # True B in B.__mro__ # True object in B.__mro__ # True B in A.__mro__ # False (B is not an ancestor of A) issubclass(B, A) is essentially equivalent to A in B.__mro__.
5. Use the result only after the full construct has completed, per: __mro__ (Method Resolution Order) is a tuple of all classes in the lookup chain.

Common Use Cases:
• Teaching this behavior using the mental model: __mro__ (Method Resolution Order) is a tuple of all classes in the lookup chain.
• Debugging when the observed value should match the expectation in: Returns True Example: class A: pass class B(A): pass B.__mro__ # (B, A, object) A in B.__mro__ # True B in B.__mro__ # True object in B.__mro__ # True B in A.__mro__ # False (B is not an ancestor of A) issubclass(B, A) is essentially equivalent to A in B.__mro__.

Edge Cases:
• If inputs vary from the situation described in: You can use 'in' to check if a class appears in another class's MRO., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • B.__mro__ → (B, A, object) • A is in this tuple → True • The MRO includes the class itself, all ancestors, and object • 'in' performs a membership check on the tuple How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Returns True Example: class A: pass class B(A): pass B.__mro__ # (B, A, object) A in B.__mro__ # True B in B.__mro__ # True object in B.__mro__ # True B in A.__mro__ # False (B is not an ancestor of A) issubclass(B, A) is essentially equivalent to A in B.__mro__..
• When performance matters, prefer the simplest pattern that still implements: __mro__ (Method Resolution Order) is a tuple of all classes in the lookup chain..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: __mro__ (Method Resolution Order) is a tuple of all classes in the lookup chain..

Notes:
• For maintainable code, make the intent behind: You can use 'in' to check if a class appears in another class's MRO. explicit (and test it with inputs like those in this prompt).`
  }),
  // 97. object is always in MRO
  (_i: number) => ({
    q: `class A: pass\nclass B(A): pass\nWhat is object in B.__mro__?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "Every class in Python ultimately inherits from object. object is always the last entry in any class's MRO.",
    de: `In Python 3, every class implicitly inherits from object. This means object is always present at the end of every class's MRO.

Key concepts:
• All classes inherit from object (even if not explicitly stated)
• class A: pass is equivalent to class A(object): pass
• object provides default __init__, __repr__, __eq__, __hash__, etc.
• object is always the last entry in __mro__

How it works:
1. B.__mro__ → (B, A, object)
2. object in (B, A, object) → True
3. Returns True

Example:
class X: pass
X.__mro__           # (X, object)
object in X.__mro__  # True

class Y(X): pass
Y.__mro__           # (Y, X, object)
object in Y.__mro__  # True

int.__mro__          # (int, object)
str.__mro__          # (str, object)

Even built-in types have object at the end of their MRO.

Key Concepts:
• Returns True Example: class X: pass X.__mro__ # (X, object) object in X.__mro__ # True class Y(X): pass Y.__mro__ # (Y, X, object) object in Y.__mro__ # True int.__mro__ # (int, object) str.__mro__ # (str, object) Even built-in types have object at the end of their MRO.

Key Distinctions:
• This question’s focus is best captured by: In Python 3, every class implicitly inherits from object.
• The contrast that matters for correctness is summarized by: This means object is always present at the end of every class's MRO.

How It Works:
• Python follows the rule implied by: In Python 3, every class implicitly inherits from object.
• The outcome you observe follows from: Returns True Example: class X: pass X.__mro__ # (X, object) object in X.__mro__ # True class Y(X): pass Y.__mro__ # (Y, X, object) object in Y.__mro__ # True int.__mro__ # (int, object) str.__mro__ # (str, object) Even built-in types have object at the end of their MRO.

Step-by-Step Execution:
1. Start from the construct described in: In Python 3, every class implicitly inherits from object.
2. Resolve the subparts implied by: This means object is always present at the end of every class's MRO.
3. Apply the core semantics highlighted in: Key concepts: • All classes inherit from object (even if not explicitly stated) • class A: pass is equivalent to class A(object): pass • object provides default __init__, __repr__, __eq__, __hash__, etc.
4. Confirm the final result aligns with: Returns True Example: class X: pass X.__mro__ # (X, object) object in X.__mro__ # True class Y(X): pass Y.__mro__ # (Y, X, object) object in Y.__mro__ # True int.__mro__ # (int, object) str.__mro__ # (str, object) Even built-in types have object at the end of their MRO.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: This means object is always present at the end of every class's MRO.
2. Apply the construct’s main rule next, matching: In Python 3, every class implicitly inherits from object.
3. Produce any intermediate values that Returns True Example: class X: pass X.__mro__ # (X, object) object in X.__mro__ # True class Y(X): pass Y.__mro__ # (Y, X, object) object in Y.__mro__ # True int.__mro__ # (int, object) str.__mro__ # (str, object) Even built-in types have object at the end of their MRO. relies on
4. Finish by returning/assembling the final output named by: Returns True Example: class X: pass X.__mro__ # (X, object) object in X.__mro__ # True class Y(X): pass Y.__mro__ # (Y, X, object) object in Y.__mro__ # True int.__mro__ # (int, object) str.__mro__ # (str, object) Even built-in types have object at the end of their MRO.
5. Use the result only after the full construct has completed, per: In Python 3, every class implicitly inherits from object.

Common Use Cases:
• Teaching this behavior using the mental model: In Python 3, every class implicitly inherits from object.
• Debugging when the observed value should match the expectation in: Returns True Example: class X: pass X.__mro__ # (X, object) object in X.__mro__ # True class Y(X): pass Y.__mro__ # (Y, X, object) object in Y.__mro__ # True int.__mro__ # (int, object) str.__mro__ # (str, object) Even built-in types have object at the end of their MRO.

Edge Cases:
• If inputs vary from the situation described in: This means object is always present at the end of every class's MRO., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • All classes inherit from object (even if not explicitly stated) • class A: pass is equivalent to class A(object): pass • object provides default __init__, __repr__, __eq__, __hash__, etc. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: Returns True Example: class X: pass X.__mro__ # (X, object) object in X.__mro__ # True class Y(X): pass Y.__mro__ # (Y, X, object) object in Y.__mro__ # True int.__mro__ # (int, object) str.__mro__ # (str, object) Even built-in types have object at the end of their MRO..
• When performance matters, prefer the simplest pattern that still implements: In Python 3, every class implicitly inherits from object..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: In Python 3, every class implicitly inherits from object..

Notes:
• For maintainable code, make the intent behind: This means object is always present at the end of every class's MRO. explicit (and test it with inputs like those in this prompt).`
  }),
  // 98. Template method pattern — __str__ calls subclass method
  (_i: number) => ({
    q: `class Printable:\n    def __str__(self):\n        return self.to_string()\nclass Report(Printable):\n    def to_string(self):\n        return "Report"\nWhat is str(Report())?`,
    o: ['"Report"', 'Error', '"Printable"', 'None'],
    c: 0,
    e: "__str__ calls self.to_string(). self is a Report, so Report.to_string() is called, returning 'Report'.",
    de: `This is the Template Method design pattern. The parent defines the skeleton of an algorithm (__str__), and subclasses provide specific steps (to_string).

Key concepts:
• Printable.__str__ calls self.to_string()
• self is a Report instance → Python looks up to_string on Report
• Report.to_string returns "Report"
• The parent defines WHAT to do (__str__), the child defines HOW (to_string)

How it works:
1. str(Report()) calls Report().__str__()
2. __str__ is inherited from Printable
3. self.to_string() → self is Report instance
4. MRO finds Report.to_string → returns "Report"
5. __str__ returns "Report"

Example:
class Printable:
    def __str__(self):
        return self.to_string()
class Report(Printable):
    def to_string(self): return "Report"
class Invoice(Printable):
    def to_string(self): return "Invoice #123"

str(Report())   # "Report"
str(Invoice())  # "Invoice #123"

The Template Method pattern allows the parent to define the algorithm structure while deferring specific steps to subclasses.

Key Concepts:
• __str__ returns "Report" Example: class Printable: def __str__(self): return self.to_string() class Report(Printable): def to_string(self): return "Report" class Invoice(Printable): def to_string(self): return "Invoice #123" str(Report()) # "Report" str(Invoice()) # "Invoice #123" The Template Method pattern allows the parent to define the algorithm structure while deferring specific steps to subclasses.

Key Distinctions:
• This question’s focus is best captured by: This is the Template Method design pattern.
• The contrast that matters for correctness is summarized by: The parent defines the skeleton of an algorithm (__str__), and subclasses provide specific steps (to_string).

How It Works:
• Python follows the rule implied by: This is the Template Method design pattern.
• The outcome you observe follows from: __str__ returns "Report" Example: class Printable: def __str__(self): return self.to_string() class Report(Printable): def to_string(self): return "Report" class Invoice(Printable): def to_string(self): return "Invoice #123" str(Report()) # "Report" str(Invoice()) # "Invoice #123" The Template Method pattern allows the parent to define the algorithm structure while deferring specific steps to subclasses.

Step-by-Step Execution:
1. Start from the construct described in: This is the Template Method design pattern.
2. Resolve the subparts implied by: The parent defines the skeleton of an algorithm (__str__), and subclasses provide specific steps (to_string).
3. Apply the core semantics highlighted in: Key concepts: • Printable.__str__ calls self.to_string() • self is a Report instance → Python looks up to_string on Report • Report.to_string returns "Report" • The parent defines WHAT to do (__str__), the child defines HOW (to_string) How it works: 1.
4. Confirm the final result aligns with: __str__ returns "Report" Example: class Printable: def __str__(self): return self.to_string() class Report(Printable): def to_string(self): return "Report" class Invoice(Printable): def to_string(self): return "Invoice #123" str(Report()) # "Report" str(Invoice()) # "Invoice #123" The Template Method pattern allows the parent to define the algorithm structure while deferring specific steps to subclasses.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: The parent defines the skeleton of an algorithm (__str__), and subclasses provide specific steps (to_string).
2. Apply the construct’s main rule next, matching: This is the Template Method design pattern.
3. Produce any intermediate values that __str__ returns "Report" Example: class Printable: def __str__(self): return self.to_string() class Report(Printable): def to_string(self): return "Report" class Invoice(Printable): def to_string(self): return "Invoice #123" str(Report()) # "Report" str(Invoice()) # "Invoice #123" The Template Method pattern allows the parent to define the algorithm structure while deferring specific steps to subclasses. relies on
4. Finish by returning/assembling the final output named by: __str__ returns "Report" Example: class Printable: def __str__(self): return self.to_string() class Report(Printable): def to_string(self): return "Report" class Invoice(Printable): def to_string(self): return "Invoice #123" str(Report()) # "Report" str(Invoice()) # "Invoice #123" The Template Method pattern allows the parent to define the algorithm structure while deferring specific steps to subclasses.
5. Use the result only after the full construct has completed, per: This is the Template Method design pattern.

Common Use Cases:
• Teaching this behavior using the mental model: This is the Template Method design pattern.
• Debugging when the observed value should match the expectation in: __str__ returns "Report" Example: class Printable: def __str__(self): return self.to_string() class Report(Printable): def to_string(self): return "Report" class Invoice(Printable): def to_string(self): return "Invoice #123" str(Report()) # "Report" str(Invoice()) # "Invoice #123" The Template Method pattern allows the parent to define the algorithm structure while deferring specific steps to subclasses.

Edge Cases:
• If inputs vary from the situation described in: The parent defines the skeleton of an algorithm (__str__), and subclasses provide specific steps (to_string)., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • Printable.__str__ calls self.to_string() • self is a Report instance → Python looks up to_string on Report • Report.to_string returns "Report" • The parent defines WHAT to do (__str__), the child defines HOW (to_string) How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: __str__ returns "Report" Example: class Printable: def __str__(self): return self.to_string() class Report(Printable): def to_string(self): return "Report" class Invoice(Printable): def to_string(self): return "Invoice #123" str(Report()) # "Report" str(Invoice()) # "Invoice #123" The Template Method pattern allows the parent to define the algorithm structure while deferring specific steps to subclasses..
• When performance matters, prefer the simplest pattern that still implements: This is the Template Method design pattern..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: This is the Template Method design pattern..

Notes:
• For maintainable code, make the intent behind: The parent defines the skeleton of an algorithm (__str__), and subclasses provide specific steps (to_string). explicit (and test it with inputs like those in this prompt).`
  }),
  // 99. Multiple inheritance — __bases__ shows all direct parents
  (_i: number) => ({
    q: `class A: pass\nclass B: pass\nclass C(A, B): pass\nWhat is len(C.__bases__)?`,
    o: ["2", "1", "3", "Error"],
    c: 0,
    e: "C inherits from both A and B. __bases__ contains both direct parents, so len is 2.",
    de: `With multiple inheritance, __bases__ contains ALL direct parent classes in the order they were specified.

Key concepts:
• class C(A, B) inherits from both A and B
• C.__bases__ → (<class 'A'>, <class 'B'>)
• The order matches the class definition order
• len(C.__bases__) → 2

How it works:
1. class C(A, B): defines C with two parents
2. C.__bases__ → (A, B)
3. len((A, B)) → 2

Example:
class A: pass
class B: pass
class C(A, B): pass
C.__bases__    # (<class 'A'>, <class 'B'>)
len(C.__bases__)  # 2

class D(A): pass
D.__bases__    # (<class 'A'>,)
len(D.__bases__)  # 1

The MRO for C(A, B):
C.__mro__  # (C, A, B, object) — linearized order for method lookup

Key Concepts:
• len((A, B)) → 2 Example: class A: pass class B: pass class C(A, B): pass C.__bases__ # (<class 'A'>, <class 'B'>) len(C.__bases__) # 2 class D(A): pass D.__bases__ # (<class 'A'>,) len(D.__bases__) # 1 The MRO for C(A, B): C.__mro__ # (C, A, B, object) — linearized order for method lookup

Key Distinctions:
• This question’s focus is best captured by: With multiple inheritance, __bases__ contains ALL direct parent classes in the order they were specified.
• The contrast that matters for correctness is summarized by: Key concepts: • class C(A, B) inherits from both A and B • C.__bases__ → (<class 'A'>, <class 'B'>) • The order matches the class definition order • len(C.__bases__) → 2 How it works: 1.

How It Works:
• Python follows the rule implied by: With multiple inheritance, __bases__ contains ALL direct parent classes in the order they were specified.
• The outcome you observe follows from: len((A, B)) → 2 Example: class A: pass class B: pass class C(A, B): pass C.__bases__ # (<class 'A'>, <class 'B'>) len(C.__bases__) # 2 class D(A): pass D.__bases__ # (<class 'A'>,) len(D.__bases__) # 1 The MRO for C(A, B): C.__mro__ # (C, A, B, object) — linearized order for method lookup

Step-by-Step Execution:
1. Start from the construct described in: With multiple inheritance, __bases__ contains ALL direct parent classes in the order they were specified.
2. Resolve the subparts implied by: Key concepts: • class C(A, B) inherits from both A and B • C.__bases__ → (<class 'A'>, <class 'B'>) • The order matches the class definition order • len(C.__bases__) → 2 How it works: 1.
3. Apply the core semantics highlighted in: class C(A, B): defines C with two parents 2.
4. Confirm the final result aligns with: len((A, B)) → 2 Example: class A: pass class B: pass class C(A, B): pass C.__bases__ # (<class 'A'>, <class 'B'>) len(C.__bases__) # 2 class D(A): pass D.__bases__ # (<class 'A'>,) len(D.__bases__) # 1 The MRO for C(A, B): C.__mro__ # (C, A, B, object) — linearized order for method lookup

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Key concepts: • class C(A, B) inherits from both A and B • C.__bases__ → (<class 'A'>, <class 'B'>) • The order matches the class definition order • len(C.__bases__) → 2 How it works: 1.
2. Apply the construct’s main rule next, matching: With multiple inheritance, __bases__ contains ALL direct parent classes in the order they were specified.
3. Produce any intermediate values that len((A, B)) → 2 Example: class A: pass class B: pass class C(A, B): pass C.__bases__ # (<class 'A'>, <class 'B'>) len(C.__bases__) # 2 class D(A): pass D.__bases__ # (<class 'A'>,) len(D.__bases__) # 1 The MRO for C(A, B): C.__mro__ # (C, A, B, object) — linearized order for method lookup relies on
4. Finish by returning/assembling the final output named by: len((A, B)) → 2 Example: class A: pass class B: pass class C(A, B): pass C.__bases__ # (<class 'A'>, <class 'B'>) len(C.__bases__) # 2 class D(A): pass D.__bases__ # (<class 'A'>,) len(D.__bases__) # 1 The MRO for C(A, B): C.__mro__ # (C, A, B, object) — linearized order for method lookup
5. Use the result only after the full construct has completed, per: With multiple inheritance, __bases__ contains ALL direct parent classes in the order they were specified.

Common Use Cases:
• Teaching this behavior using the mental model: With multiple inheritance, __bases__ contains ALL direct parent classes in the order they were specified.
• Debugging when the observed value should match the expectation in: len((A, B)) → 2 Example: class A: pass class B: pass class C(A, B): pass C.__bases__ # (<class 'A'>, <class 'B'>) len(C.__bases__) # 2 class D(A): pass D.__bases__ # (<class 'A'>,) len(D.__bases__) # 1 The MRO for C(A, B): C.__mro__ # (C, A, B, object) — linearized order for method lookup

Edge Cases:
• If inputs vary from the situation described in: Key concepts: • class C(A, B) inherits from both A and B • C.__bases__ → (<class 'A'>, <class 'B'>) • The order matches the class definition order • len(C.__bases__) → 2 How it works: 1., the behavior can change.
• When the construct’s assumptions differ, the rule in: class C(A, B): defines C with two parents 2. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: len((A, B)) → 2 Example: class A: pass class B: pass class C(A, B): pass C.__bases__ # (<class 'A'>, <class 'B'>) len(C.__bases__) # 2 class D(A): pass D.__bases__ # (<class 'A'>,) len(D.__bases__) # 1 The MRO for C(A, B): C.__mro__ # (C, A, B, object) — linearized order for method lookup.
• When performance matters, prefer the simplest pattern that still implements: With multiple inheritance, __bases__ contains ALL direct parent classes in the order they were specified..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: With multiple inheritance, __bases__ contains ALL direct parent classes in the order they were specified..

Notes:
• For maintainable code, make the intent behind: Key concepts: • class C(A, B) inherits from both A and B • C.__bases__ → (<class 'A'>, <class 'B'>) • The order matches the class definition order • len(C.__bases__) → 2 How it works: 1. explicit (and test it with inputs like those in this prompt).`
  }),
  // 100. type's own MRO
  (_i: number) => ({
    q: `What is len(type.__mro__)?`,
    o: ["2", "1", "3", "Error"],
    c: 0,
    e: "type.__mro__ is (type, object). type inherits from object, so the MRO has 2 entries.",
    de: `type is Python's metaclass — the class of all classes. Even type itself inherits from object, creating a fascinating circular relationship at the foundation of Python's type system.

Key concepts:
• type.__mro__ → (<class 'type'>, <class 'object'>)
• type inherits from object (type is an object)
• type(object) is type (object's class is type)
• This circular relationship is bootstrapped by the Python interpreter

How it works:
1. type.__mro__ → (type, object)
2. len((type, object)) → 2

The type/object relationship:
• isinstance(type, object) → True (type is an object)
• isinstance(object, type) → True (object is a type)
• type(type) is type → True (type is its own metaclass)
• type(object) is type → True

Example:
type.__mro__     # (<class 'type'>, <class 'object'>)
type.__bases__   # (<class 'object'>,)
object.__bases__ # () — object has no parent

This is the foundation of Python's object model — everything is an object, and type is the metaclass that creates classes.

Key Concepts:
• len((type, object)) → 2 The type/object relationship: • isinstance(type, object) → True (type is an object) • isinstance(object, type) → True (object is a type) • type(type) is type → True (type is its own metaclass) • type(object) is type → True Example: type.__mro__ # (<class 'type'>, <class 'object'>) type.__bases__ # (<class 'object'>,) object.__bases__ # () — object has no parent This is the foundation of Python's object model — everything is an object, and type is the metaclass that creates classes.

Key Distinctions:
• This question’s focus is best captured by: type is Python's metaclass — the class of all classes.
• The contrast that matters for correctness is summarized by: Even type itself inherits from object, creating a fascinating circular relationship at the foundation of Python's type system.

How It Works:
• Python follows the rule implied by: type is Python's metaclass — the class of all classes.
• The outcome you observe follows from: len((type, object)) → 2 The type/object relationship: • isinstance(type, object) → True (type is an object) • isinstance(object, type) → True (object is a type) • type(type) is type → True (type is its own metaclass) • type(object) is type → True Example: type.__mro__ # (<class 'type'>, <class 'object'>) type.__bases__ # (<class 'object'>,) object.__bases__ # () — object has no parent This is the foundation of Python's object model — everything is an object, and type is the metaclass that creates classes.

Step-by-Step Execution:
1. Start from the construct described in: type is Python's metaclass — the class of all classes.
2. Resolve the subparts implied by: Even type itself inherits from object, creating a fascinating circular relationship at the foundation of Python's type system.
3. Apply the core semantics highlighted in: Key concepts: • type.__mro__ → (<class 'type'>, <class 'object'>) • type inherits from object (type is an object) • type(object) is type (object's class is type) • This circular relationship is bootstrapped by the Python interpreter How it works: 1.
4. Confirm the final result aligns with: len((type, object)) → 2 The type/object relationship: • isinstance(type, object) → True (type is an object) • isinstance(object, type) → True (object is a type) • type(type) is type → True (type is its own metaclass) • type(object) is type → True Example: type.__mro__ # (<class 'type'>, <class 'object'>) type.__bases__ # (<class 'object'>,) object.__bases__ # () — object has no parent This is the foundation of Python's object model — everything is an object, and type is the metaclass that creates classes.

Order of Operations:
1. Identify and evaluate the inner pieces first, as hinted by: Even type itself inherits from object, creating a fascinating circular relationship at the foundation of Python's type system.
2. Apply the construct’s main rule next, matching: type is Python's metaclass — the class of all classes.
3. Produce any intermediate values that len((type, object)) → 2 The type/object relationship: • isinstance(type, object) → True (type is an object) • isinstance(object, type) → True (object is a type) • type(type) is type → True (type is its own metaclass) • type(object) is type → True Example: type.__mro__ # (<class 'type'>, <class 'object'>) type.__bases__ # (<class 'object'>,) object.__bases__ # () — object has no parent This is the foundation of Python's object model — everything is an object, and type is the metaclass that creates classes. relies on
4. Finish by returning/assembling the final output named by: len((type, object)) → 2 The type/object relationship: • isinstance(type, object) → True (type is an object) • isinstance(object, type) → True (object is a type) • type(type) is type → True (type is its own metaclass) • type(object) is type → True Example: type.__mro__ # (<class 'type'>, <class 'object'>) type.__bases__ # (<class 'object'>,) object.__bases__ # () — object has no parent This is the foundation of Python's object model — everything is an object, and type is the metaclass that creates classes.
5. Use the result only after the full construct has completed, per: type is Python's metaclass — the class of all classes.

Common Use Cases:
• Teaching this behavior using the mental model: type is Python's metaclass — the class of all classes.
• Debugging when the observed value should match the expectation in: len((type, object)) → 2 The type/object relationship: • isinstance(type, object) → True (type is an object) • isinstance(object, type) → True (object is a type) • type(type) is type → True (type is its own metaclass) • type(object) is type → True Example: type.__mro__ # (<class 'type'>, <class 'object'>) type.__bases__ # (<class 'object'>,) object.__bases__ # () — object has no parent This is the foundation of Python's object model — everything is an object, and type is the metaclass that creates classes.

Edge Cases:
• If inputs vary from the situation described in: Even type itself inherits from object, creating a fascinating circular relationship at the foundation of Python's type system., the behavior can change.
• When the construct’s assumptions differ, the rule in: Key concepts: • type.__mro__ → (<class 'type'>, <class 'object'>) • type inherits from object (type is an object) • type(object) is type (object's class is type) • This circular relationship is bootstrapped by the Python interpreter How it works: 1. is what you must re-check.

Performance Considerations:
• The work scales with the amount of data implied by: len((type, object)) → 2 The type/object relationship: • isinstance(type, object) → True (type is an object) • isinstance(object, type) → True (object is a type) • type(type) is type → True (type is its own metaclass) • type(object) is type → True Example: type.__mro__ # (<class 'type'>, <class 'object'>) type.__bases__ # (<class 'object'>,) object.__bases__ # () — object has no parent This is the foundation of Python's object model — everything is an object, and type is the metaclass that creates classes..
• When performance matters, prefer the simplest pattern that still implements: type is Python's metaclass — the class of all classes..

Examples:
• Try the same reasoning with a closely related input to verify the rule in: type is Python's metaclass — the class of all classes..

Notes:
• For maintainable code, make the intent behind: Even type itself inherits from object, creating a fascinating circular relationship at the foundation of Python's type system. explicit (and test it with inputs like those in this prompt).`
  }),
];
