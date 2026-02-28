// --- LEVEL 7 EXPERT A: Decorators — 50 TRULY UNIQUE QUESTIONS ---
export const level7ExpertA = [
  // ===== DECORATOR BASICS (1–20) =====

  // Q1: What is a decorator?
  (_i: number) => ({
    q: `What is a decorator in Python?`,
    o: ["A function that takes a function and returns a modified function", "A class that inherits from another class", "A loop that iterates over functions", "A variable that stores function names"],
    c: 0,
    e: "A decorator is a function that takes another function and returns a modified version of it.",
    de: `A decorator is a callable that takes a function (or class) as input and returns a modified version. Decorators allow you to wrap additional behavior around existing functions without changing their source code.

Key concepts:
• A decorator receives a function as its argument
• It returns a new function (or the same function, modified)
• The returned function usually calls the original, adding behavior before/after
• This is an application of the "wrapper" or "proxy" pattern

How it works:
• def decorator(func): defines the decorator
• Inside, a wrapper function is created that calls func
• The wrapper adds extra behavior (logging, validation, etc.)
• The decorator returns the wrapper

Example:
>>> def my_decorator(func):
...     def wrapper():
...         print("Before")
...         func()
...         print("After")
...     return wrapper

Decorators are fundamental to Python's design — built-ins like @property, @staticmethod, and @classmethod are all decorators.`
  }),

  // Q2: What does @decorator syntax do?
  (_i: number) => ({
    q: `What is @my_decorator above a function definition equivalent to?`,
    o: ["func = my_decorator(func)", "my_decorator = func(my_decorator)", "func.decorator = my_decorator", "my_decorator.apply(func)"],
    c: 0,
    e: "@my_decorator is syntactic sugar for func = my_decorator(func).",
    de: `The @decorator syntax is syntactic sugar that Python provides for a common pattern. Writing @my_decorator above def func(): is identical to defining func normally and then reassigning: func = my_decorator(func).

Key concepts:
• @decorator is applied at definition time, not at call time
• It replaces the name with whatever the decorator returns
• This is purely syntactic sugar — no new functionality, just cleaner syntax
• PEP 318 introduced this syntax in Python 2.4

How it works:
• @my_decorator is placed directly above def func():
• Python first creates the function object for func
• Then passes it to my_decorator()
• The return value replaces the name func

Example:
# These are equivalent:
@my_decorator
def func():
    pass

# Same as:
def func():
    pass
func = my_decorator(func)

The @ syntax is preferred because it clearly shows the decorator is part of the function's definition.`
  }),

  // Q3: double_result decorator
  (_i: number) => ({
    q: `What is the result of:\ndef double_result(f):\n    def wrapper(*a):\n        return f(*a) * 2\n    return wrapper\n\n@double_result\ndef add(x, y):\n    return x + y\n\nadd(3, 4)`,
    o: ["14", "7", "10", "Error"],
    c: 0,
    e: "add(3,4) returns 7, then the wrapper doubles it to 14.",
    de: `The double_result decorator wraps any function so its return value is multiplied by 2. When add(3, 4) is called, the wrapper captures the result (3 + 4 = 7) and returns 7 * 2 = 14.

Key concepts:
• double_result takes function f and returns wrapper
• wrapper calls f(*a) and multiplies the result by 2
• @double_result replaces add with wrapper
• add(3, 4) now goes through wrapper

How it works:
• add = double_result(add) — add is now wrapper
• Calling add(3, 4) calls wrapper(3, 4)
• wrapper calls original f(3, 4) which returns 7
• wrapper returns 7 * 2 = 14

Example:
>>> add(3, 4)
14
>>> add(1, 1)
4

The *a syntax in wrapper(*a) allows the wrapper to accept any number of positional arguments and forward them to the original function.`
  }),

  // Q4: uppercase decorator
  (_i: number) => ({
    q: `What is the result of:\ndef uppercase(f):\n    def wrapper():\n        return f().upper()\n    return wrapper\n\n@uppercase\ndef greet():\n    return "hello"\n\ngreet()`,
    o: ['"HELLO"', '"hello"', '"Hello"', "Error"],
    c: 0,
    e: 'greet() returns "hello", then .upper() converts it to "HELLO".',
    de: `The uppercase decorator wraps a function so that its string return value is converted to uppercase. greet() originally returns "hello", but the wrapper calls .upper() on the result.

Key concepts:
• The decorator intercepts the return value of the original function
• f() calls the original greet, getting "hello"
• .upper() converts "hello" to "HELLO"
• The wrapper returns the transformed result

How it works:
• greet = uppercase(greet) — greet is now wrapper
• Calling greet() calls wrapper()
• wrapper calls f() → "hello"
• wrapper returns "hello".upper() → "HELLO"

Example:
>>> greet()
'HELLO'

This pattern of transforming return values is common — decorators can modify inputs, outputs, or both.`
  }),

  // Q5: log decorator behavior
  (_i: number) => ({
    q: `def log(f):\n    def wrapper(*a):\n        print(f"Calling {f.__name__}")\n        return f(*a)\n    return wrapper\n\nWhat does @log do to a function?`,
    o: ["Prints function name before each call", "Prints function name after each call", "Prevents the function from being called", "Renames the function"],
    c: 0,
    e: "The @log decorator prints the function's name before executing the original function.",
    de: `The log decorator adds a print statement before the original function executes. Each time the decorated function is called, it prints "Calling <function_name>" and then runs the original function normally.

Key concepts:
• f.__name__ accesses the function's name attribute
• print() runs before f(*a), so the log appears before execution
• f(*a) forwards all arguments to the original function
• The return value is preserved — return f(*a) passes it through

How it works:
• @log replaces func with wrapper
• When func(args) is called, wrapper runs first
• wrapper prints "Calling func"
• Then wrapper calls and returns f(*a) — the original behavior

Example:
>>> @log
... def add(x, y): return x + y
>>> add(3, 4)
Calling add
7

This is one of the most common decorator patterns — adding logging or tracing without modifying the original function.`
  }),

  // Q6: decorator preserves behavior
  (_i: number) => ({
    q: `Does @decorator preserve the original function's behavior?`,
    o: ["Yes, but adds extra behavior before/after", "No, it replaces the function entirely", "Yes, it does nothing at all", "No, it deletes the function"],
    c: 0,
    e: "A typical decorator preserves the original behavior while adding extra behavior around it.",
    de: `A well-written decorator preserves the original function's core behavior while adding extra functionality before and/or after. The wrapper function calls the original function, so the original logic still executes.

Key concepts:
• The wrapper calls the original function (preserving behavior)
• Extra code runs before and/or after the original call
• The original function's return value is typically preserved
• This is the "open/closed principle" — open for extension, closed for modification

How it works:
• Decorator creates a wrapper that calls the original
• Wrapper can add: logging, validation, timing, caching, etc.
• Original function runs unchanged inside the wrapper
• Return value passes through (unless intentionally modified)

Example:
>>> @timer
... def slow_func():
...     return 42
>>> slow_func()  # prints timing info, still returns 42
42

A decorator that doesn't call the original function would replace it entirely — this is uncommon and usually undesirable.`
  }),

  // Q7: __name__ without wraps
  (_i: number) => ({
    q: `What is the result of:\ndef dec(f):\n    def w(*a, **kw):\n        return f(*a, **kw)\n    return w\n\n@dec\ndef f(x):\n    return x\n\nf.__name__`,
    o: ['"w"', '"f"', '"dec"', "Error"],
    c: 0,
    e: "Without @wraps, the decorated function's __name__ is the wrapper's name: 'w'.",
    de: `When a decorator returns a wrapper function, the decorated name points to the wrapper object. Since the wrapper is named w, accessing __name__ returns "w", not the original "f".

Key concepts:
• @dec replaces f with the wrapper function w
• f is now actually w — a different function object
• f.__name__ returns w's name, which is "w"
• This is why functools.wraps exists — to preserve metadata

How it works:
• dec(f) creates function w and returns it
• f = dec(f) — f now points to w
• f.__name__ is w.__name__ which is "w"
• The original f's name is lost

Example:
>>> f.__name__
'w'
>>> f.__doc__  # Also lost — wrapper's doc, not original

This metadata loss is a common pitfall. Use @functools.wraps(f) on the wrapper to fix it.`
  }),

  // Q8: __name__ with wraps
  (_i: number) => ({
    q: `What is the result of:\nfrom functools import wraps\ndef dec(f):\n    @wraps(f)\n    def w(*a, **kw):\n        return f(*a, **kw)\n    return w\n\n@dec\ndef f(x):\n    return x\n\nf.__name__`,
    o: ['"f"', '"w"', '"dec"', "Error"],
    c: 0,
    e: "@wraps(f) preserves the original function's __name__, so it remains 'f'.",
    de: `functools.wraps is a decorator that copies attributes from the original function to the wrapper. When @wraps(f) decorates the wrapper w, it copies f's __name__, __doc__, __module__, __qualname__, __dict__, and __wrapped__.

Key concepts:
• @wraps(f) is itself a decorator applied to the wrapper
• It copies metadata from f to w
• After @wraps(f), w.__name__ == f.__name__ == "f"
• It also sets w.__wrapped__ = f for introspection

How it works:
• @wraps(f) decorates w inside dec
• w gets f's __name__ ("f"), __doc__, etc.
• When dec returns w, it looks like f externally
• f.__name__ returns "f" as expected

Example:
>>> f.__name__
'f'
>>> f.__wrapped__  # Access to original function
<function f at 0x...>

Always use @functools.wraps when writing decorators — it's considered best practice.`
  }),

  // Q9: What does functools.wraps do?
  (_i: number) => ({
    q: `What does @functools.wraps do in a decorator?`,
    o: ["Preserves the decorated function's __name__, __doc__, and other attributes", "Makes the decorator run faster", "Prevents the decorator from modifying the function", "Automatically calls the wrapped function"],
    c: 0,
    e: "@functools.wraps preserves the original function's metadata on the wrapper.",
    de: `functools.wraps is a convenience decorator that updates a wrapper function to look like the wrapped function. It copies important attributes so that debugging, documentation, and introspection tools work correctly.

Key concepts:
• Copies __name__, __doc__, __module__, __qualname__, __dict__
• Sets __wrapped__ to the original function
• Uses functools.update_wrapper under the hood
• Essential for writing production-quality decorators

How it works:
• @wraps(original_func) is applied to the wrapper function
• It calls update_wrapper(wrapper, original_func)
• Attributes from original_func are copied onto wrapper
• The __wrapped__ attribute provides access to the original

Example:
>>> from functools import wraps
>>> def my_dec(f):
...     @wraps(f)
...     def wrapper(*args):
...         return f(*args)
...     return wrapper
>>> @my_dec
... def hello():
...     '''Say hello'''
...     pass
>>> hello.__name__
'hello'
>>> hello.__doc__
'Say hello'

Without @wraps, hello.__name__ would be 'wrapper' and hello.__doc__ would be None.`
  }),

  // Q10: Stacking multiple decorators
  (_i: number) => ({
    q: `Can you stack multiple decorators on one function?`,
    o: ["Yes: @dec1 then @dec2 means func = dec1(dec2(func))", "No, only one decorator per function", "Yes, but only built-in decorators", "Yes, but order doesn't matter"],
    c: 0,
    e: "You can stack decorators. They apply bottom-up: innermost first.",
    de: `Python allows stacking multiple decorators on a single function. They are applied bottom-up — the decorator closest to the function definition runs first, and the outermost runs last.

Key concepts:
• Multiple @ lines can appear above a function definition
• They apply from bottom to top (innermost first)
• @dec1 @dec2 def f means f = dec1(dec2(f))
• Each decorator wraps the result of the previous one

How it works:
• Python evaluates decorators top-to-bottom but applies bottom-to-top
• @dec2 is applied first: temp = dec2(f)
• @dec1 is applied second: f = dec1(temp)
• Final result: f = dec1(dec2(f))

Example:
>>> @bold
... @italic
... def greet():
...     return "hello"
# Equivalent to: greet = bold(italic(greet))
# If bold wraps in <b> and italic in <i>:
# Result: "<b><i>hello</i></b>"

The order matters — reversing the decorators changes the wrapping order.`
  }),

  // Q11: Which decorator runs first when stacked?
  (_i: number) => ({
    q: `@dec1\n@dec2\ndef f(): pass\n\nWhich decorator is applied first?`,
    o: ["dec2 (innermost first)", "dec1 (outermost first)", "Both at the same time", "Neither — they cancel out"],
    c: 0,
    e: "dec2 is closest to the function, so it is applied first. Then dec1 wraps the result.",
    de: `When stacking decorators, the one closest to the function (bottom) is applied first. In @dec1 / @dec2 / def f, dec2 runs first, then dec1 wraps the result.

Key concepts:
• Decorators apply bottom-to-top
• dec2 receives the original f
• dec1 receives dec2(f) — the already-wrapped version
• Think of it as f = dec1(dec2(f))

How it works:
• Step 1: Python creates function f
• Step 2: f = dec2(f) — dec2 wraps f
• Step 3: f = dec1(f) — dec1 wraps the result of step 2
• The final f is dec1's wrapper around dec2's wrapper around the original f

Example:
>>> @add_exclamation   # Applied second: wraps result of @uppercase
... @uppercase         # Applied first: wraps original greet
... def greet():
...     return "hello"
>>> greet()
'HELLO!'

Think of it like function composition: dec1(dec2(f)).`
  }),

  // Q12: Decorator with arguments (parameterized)
  (_i: number) => ({
    q: `What is the result of:\ndef repeat(n):\n    def decorator(f):\n        def wrapper(*a):\n            return [f(*a) for _ in range(n)]\n        return wrapper\n    return decorator\n\n@repeat(3)\ndef greet():\n    return "hi"\n\ngreet()`,
    o: ['["hi", "hi", "hi"]', '"hihihi"', '"hi"', "Error"],
    c: 0,
    e: "@repeat(3) calls greet 3 times and returns a list of results: ['hi', 'hi', 'hi'].",
    de: `This is a parameterized decorator (decorator factory). repeat(3) returns a decorator that wraps the function to call it n times and collect results in a list.

Key concepts:
• repeat(n) is a decorator factory — it returns the actual decorator
• Three levels of nesting: factory → decorator → wrapper
• @repeat(3) first calls repeat(3), which returns decorator
• Then decorator is applied to greet: greet = decorator(greet)

How it works:
• @repeat(3) calls repeat(3) → returns decorator (with n=3 in closure)
• decorator(greet) returns wrapper (with f=greet in closure)
• greet is now wrapper
• greet() calls [f() for _ in range(3)] → ["hi", "hi", "hi"]

Example:
>>> greet()
['hi', 'hi', 'hi']
>>> @repeat(5)
... def say(): return "x"
>>> say()
['x', 'x', 'x', 'x', 'x']

The list comprehension creates a new list with n copies of f(*a)'s result.`
  }),

  // Q13: Decorator with arguments nesting levels
  (_i: number) => ({
    q: `A decorator that accepts arguments requires how many levels of function nesting?`,
    o: ["3 (factory, decorator, wrapper)", "2 (decorator, wrapper)", "1 (just the wrapper)", "4 (outer, factory, decorator, wrapper)"],
    c: 0,
    e: "A parameterized decorator needs 3 levels: the factory, the decorator, and the wrapper.",
    de: `A parameterized decorator (decorator factory) requires three nested functions. The outer function receives the decorator's arguments, the middle function receives the function to decorate, and the inner function is the wrapper that replaces the original.

Key concepts:
• Level 1 (factory): receives decorator arguments (e.g., n in repeat(n))
• Level 2 (decorator): receives the function to decorate
• Level 3 (wrapper): the actual replacement function
• Each level creates a closure over the variables from the level above

How it works:
• def repeat(n):          # Level 1 — receives arguments
•     def decorator(f):   # Level 2 — receives function
•         def wrapper(*a): # Level 3 — replacement
•             ...
•         return wrapper
•     return decorator

Example:
>>> @repeat(3)      # repeat(3) returns decorator
... def greet():    # decorator(greet) returns wrapper
...     return "hi"
>>> greet()         # wrapper() runs
['hi', 'hi', 'hi']

Without arguments, only 2 levels are needed (decorator + wrapper).`
  }),

  // Q14: Timer decorator pattern
  (_i: number) => ({
    q: `def timer(f):\n    import time\n    def wrapper(*a):\n        start = time.time()\n        result = f(*a)\n        return result\n    return wrapper\n\nWhat pattern is this?`,
    o: ["Timing/profiling decorator", "Caching decorator", "Authorization decorator", "Retry decorator"],
    c: 0,
    e: "This decorator records the start time before calling the function — a timing/profiling pattern.",
    de: `This is a timing or profiling decorator pattern. It measures how long a function takes to execute by recording time before and after the call.

Key concepts:
• time.time() captures the current timestamp
• The function runs between start and end timestamps
• The difference gives execution duration
• Commonly used for performance profiling and optimization

How it works:
• Before calling f: start = time.time()
• Call: result = f(*a)
• After: could compute elapsed = time.time() - start
• Return the original result unchanged

Example:
>>> @timer
... def slow_func():
...     import time
...     time.sleep(1)
...     return "done"
>>> slow_func()  # Would show ~1 second elapsed
'done'

This pattern is common in performance monitoring, benchmarking, and debugging slow functions. Production versions often use time.perf_counter() for higher precision.`
  }),

  // Q15: Class as decorator
  (_i: number) => ({
    q: `Can a decorator be a class instead of a function?`,
    o: ["Yes, any callable works (class with __call__)", "No, decorators must be functions", "Only if the class inherits from Decorator", "Only for built-in decorators"],
    c: 0,
    e: "Any callable can be a decorator. A class with __call__ is callable.",
    de: `A decorator can be any callable object — not just functions. A class that implements __call__ is callable, so it can serve as a decorator. The class's __init__ receives the function, and __call__ acts as the wrapper.

Key concepts:
• callable() returns True for any object that can be called with ()
• Classes with __call__ are callable
• __init__ receives the decorated function
• __call__ replaces the function call behavior

How it works:
• @MyClass decorates func
• Python calls MyClass(func) — __init__ stores func
• func is now a MyClass instance
• Calling func() invokes MyClass.__call__()

Example:
>>> class CountCalls:
...     def __init__(self, func):
...         self.func = func
...         self.count = 0
...     def __call__(self, *args):
...         self.count += 1
...         return self.func(*args)
>>> @CountCalls
... def hello(): return "hi"
>>> hello()
'hi'
>>> hello.count
1

Class-based decorators are useful when you need to maintain state between calls.`
  }),

  // Q16: Class decorator basic example
  (_i: number) => ({
    q: `What is the result of:\nclass Dec:\n    def __init__(self, f):\n        self.f = f\n    def __call__(self, *a):\n        return self.f(*a)\n\n@Dec\ndef f(x):\n    return x\n\nf(5)`,
    o: ["5", "None", "Error", "Dec object"],
    c: 0,
    e: "Dec wraps f. Calling f(5) invokes Dec.__call__(5), which calls self.f(5) → 5.",
    de: `This class-based decorator stores the function in __init__ and calls it in __call__. The decorated function becomes an instance of Dec, and calling it triggers __call__.

Key concepts:
• @Dec causes: f = Dec(f)
• f is now a Dec instance with self.f = original f
• f(5) calls Dec.__call__(self, 5)
• __call__ delegates to self.f(5) → 5

How it works:
• Dec(f) creates instance, stores f in self.f
• f = Dec(f) — f is now a Dec instance
• f(5) triggers Dec.__call__(self, 5)
• __call__ returns self.f(5) which returns 5

Example:
>>> f(5)
5
>>> type(f)
<class 'Dec'>
>>> f.f  # Access to original function
<function f at 0x...>

This is a minimal class decorator — it passes through without modification. Add logic in __call__ for actual behavior.`
  }),

  // Q17: Validation decorator (positive input)
  (_i: number) => ({
    q: `What is the result of:\ndef validate_positive(f):\n    def w(x):\n        if x < 0:\n            raise ValueError\n        return f(x)\n    return w\n\n@validate_positive\ndef sqrt(x):\n    return x ** 0.5\n\nsqrt(4)`,
    o: ["2.0", "4", "ValueError", "Error"],
    c: 0,
    e: "4 is positive, so validation passes. sqrt(4) returns 4 ** 0.5 = 2.0.",
    de: `The validate_positive decorator checks if the input is non-negative before calling the function. Since 4 >= 0, the validation passes and f(4) executes normally.

Key concepts:
• The wrapper checks if x < 0 before calling f
• If x is negative, ValueError is raised
• If x is non-negative, the original function runs
• 4 ** 0.5 = 2.0 (square root of 4)

How it works:
• sqrt(4) calls wrapper w(4)
• w checks: 4 < 0? No → continue
• w calls f(4) → 4 ** 0.5 → 2.0
• Returns 2.0

Example:
>>> sqrt(4)
2.0
>>> sqrt(9)
3.0
>>> sqrt(0)
0.0

This pattern is called a guard or validation decorator — it protects functions from invalid inputs.`
  }),

  // Q18: Validation decorator (negative input)
  (_i: number) => ({
    q: `Using the same validate_positive decorator:\n@validate_positive\ndef sqrt(x):\n    return x ** 0.5\n\nWhat happens with sqrt(-1)?`,
    o: ["ValueError is raised", "Returns complex number", "Returns None", "Returns -1"],
    c: 0,
    e: "-1 < 0, so the decorator raises ValueError before sqrt executes.",
    de: `The validate_positive decorator raises ValueError for negative inputs. Since -1 < 0, the guard triggers before the original sqrt function ever runs.

Key concepts:
• sqrt(-1) calls wrapper w(-1)
• w checks: -1 < 0? Yes → raise ValueError
• The original sqrt function never executes
• Without the decorator, Python would return a complex number (with cmath)

How it works:
• sqrt(-1) calls w(-1)
• w evaluates: -1 < 0 → True
• raise ValueError stops execution immediately
• f(-1) is never called

Example:
>>> sqrt(-1)
Traceback (most recent call last):
  ...
ValueError

The decorator prevents invalid computation. Without it, x ** 0.5 with negative x raises ValueError in real math mode anyway, but the decorator provides a cleaner, explicit check.`
  }),

  // Q19: Can you decorate a class?
  (_i: number) => ({
    q: `Can decorators be applied to classes, not just functions?`,
    o: ["Yes, decorators can be applied to classes too", "No, only functions can be decorated", "Only @dataclass can decorate classes", "Only abstract decorators work on classes"],
    c: 0,
    e: "Decorators can be applied to classes. The class is passed to the decorator and the return value replaces it.",
    de: `Decorators can be applied to any def or class statement. When applied to a class, the decorator receives the class object and can modify or replace it.

Key concepts:
• @decorator above class MyClass: is valid Python
• Equivalent to: MyClass = decorator(MyClass)
• The decorator receives the class and returns a (possibly modified) class
• Common examples: @dataclass, @total_ordering

How it works:
• Python creates the class object
• Passes it to the decorator function
• The decorator can add/modify methods, attributes, etc.
• Returns the modified class (or a new one)

Example:
>>> def add_repr(cls):
...     cls.__repr__ = lambda self: f"{cls.__name__}()"
...     return cls
>>> @add_repr
... class MyClass:
...     pass
>>> MyClass()
MyClass()

Class decorators are widely used: @dataclass, @functools.total_ordering, and many framework decorators (e.g., Flask's @app.route wraps classes too).`
  }),

  // Q20: Built-in decorator examples
  (_i: number) => ({
    q: `@staticmethod and @classmethod are examples of what?`,
    o: ["Built-in decorators", "User-defined decorators", "Class methods only", "Abstract methods"],
    c: 0,
    e: "@staticmethod and @classmethod are built-in decorators provided by Python.",
    de: `Python includes several built-in decorators. @staticmethod and @classmethod are among the most commonly used, transforming regular methods into static or class methods respectively.

Key concepts:
• @staticmethod removes the implicit first argument (no self/cls)
• @classmethod changes the first argument from instance (self) to class (cls)
• Both are descriptor-based decorators built into Python
• Other built-ins: @property, @abstractmethod, @functools.wraps

How it works:
• @staticmethod wraps the function in a staticmethod descriptor
• @classmethod wraps the function in a classmethod descriptor
• These descriptors change how Python binds the method to instances/classes

Example:
>>> class MyClass:
...     @staticmethod
...     def util(): return 42
...     @classmethod
...     def create(cls): return cls()
>>> MyClass.util()
42
>>> MyClass.create()
<MyClass object>

Built-in decorators are implemented in C for performance and are part of Python's core language design.`
  }),

  // ===== DECORATOR PATTERNS (21–40) =====

  // Q21: count_calls decorator
  (_i: number) => ({
    q: `def count_calls(f):\n    f.calls = 0\n    def w(*a, **kw):\n        f.calls += 1\n        return f(*a, **kw)\n    return w\n\nWhat does this decorator track?`,
    o: ["Number of times function is called", "Time taken per call", "Arguments passed to function", "Return values of function"],
    c: 0,
    e: "f.calls increments by 1 each time the wrapper is called, tracking call count.",
    de: `This decorator tracks how many times a function has been called by maintaining a counter attribute on the function object. Each call increments f.calls by 1.

Key concepts:
• f.calls = 0 initializes the counter on the function object
• Each call to w() increments f.calls += 1
• Functions are objects in Python, so they can have arbitrary attributes
• The counter persists across calls via closure

How it works:
• count_calls(f) sets f.calls = 0
• Returns wrapper w that increments f.calls on each call
• f.calls is accessible because f is captured in w's closure
• After n calls, f.calls == n

Example:
>>> @count_calls
... def hello(): return "hi"
>>> hello()
'hi'
>>> hello()
'hi'
>>> hello()
'hi'

Note: accessing the count requires accessing the original f's attribute through the closure. A more robust version would set w.calls as well.`
  }),

  // Q22: Singleton decorator pattern
  (_i: number) => ({
    q: `def singleton(cls):\n    instances = {}\n    def get_instance(*a):\n        if cls not in instances:\n            instances[cls] = cls(*a)\n        return instances[cls]\n    return get_instance\n\nWhat design pattern does this implement?`,
    o: ["Singleton pattern", "Factory pattern", "Observer pattern", "Strategy pattern"],
    c: 0,
    e: "This ensures only one instance of the class is ever created — the Singleton pattern.",
    de: `This decorator implements the Singleton design pattern. It ensures that a class can only have one instance — subsequent calls return the same object.

Key concepts:
• instances dict stores the single instance per class
• First call creates and stores the instance
• All subsequent calls return the stored instance
• The class itself is replaced by get_instance

How it works:
• @singleton replaces MyClass with get_instance
• First MyClass() call: cls not in instances → creates instance, stores it
• Second MyClass() call: cls in instances → returns same instance
• All calls return the exact same object

Example:
>>> @singleton
... class Database:
...     def __init__(self):
...         self.connection = "connected"
>>> db1 = Database()
>>> db2 = Database()
>>> db1 is db2
True

The Singleton pattern is useful for database connections, configuration managers, and logging — cases where only one instance should exist.`
  }),

  // Q23: Memoization/caching decorator
  (_i: number) => ({
    q: `def cache(f):\n    memo = {}\n    def w(*a):\n        if a not in memo:\n            memo[a] = f(*a)\n        return memo[a]\n    return w\n\nWhat pattern does this implement?`,
    o: ["Memoization/caching", "Singleton", "Retry logic", "Logging"],
    c: 0,
    e: "This caches results keyed by arguments — the memoization pattern.",
    de: `This decorator implements memoization (caching). It stores function results in a dictionary keyed by arguments, so repeated calls with the same arguments return the cached result instead of recomputing.

Key concepts:
• memo dict maps argument tuples to results
• First call with new args: computes and stores result
• Subsequent calls with same args: returns cached result
• Dramatically speeds up recursive or expensive functions

How it works:
• w(*a) captures arguments as tuple a
• If a not in memo: first time with these args → compute and cache
• If a in memo: return stored result immediately
• memo persists across calls via closure

Example:
>>> @cache
... def fib(n):
...     if n < 2: return n
...     return fib(n-1) + fib(n-2)
>>> fib(100)  # Instant, without cache it would take forever
354224848179261915075

Python's standard library provides @functools.lru_cache for production use, with LRU eviction and thread safety.`
  }),

  // Q24: @property decorator
  (_i: number) => ({
    q: `What does the @property decorator do?`,
    o: ["Turns a method into a read-only attribute", "Makes an attribute private", "Creates a class variable", "Deletes an attribute"],
    c: 0,
    e: "@property allows a method to be accessed like an attribute, without parentheses.",
    de: `The @property decorator turns a method into a descriptor that behaves like a read-only attribute. You access it without parentheses, and the method body computes the value on each access.

Key concepts:
• @property converts a method to a getter
• Accessed without (): obj.x instead of obj.x()
• The value is computed dynamically each time
• Can add @x.setter and @x.deleter for write/delete support

How it works:
• @property wraps the method in a property descriptor
• When you access obj.x, Python calls the method behind the scenes
• Returns the method's return value as if it were a simple attribute
• Without a setter, assignment raises AttributeError

Example:
>>> class Circle:
...     def __init__(self, radius):
...         self.radius = radius
...     @property
...     def area(self):
...         return 3.14159 * self.radius ** 2
>>> c = Circle(5)
>>> c.area     # No parentheses!
78.53975
>>> c.area = 10  # AttributeError — read-only

@property is essential for encapsulation — exposing computed values with a clean attribute-style interface.`
  }),

  // Q25: @property access syntax
  (_i: number) => ({
    q: `What is the result of:\nclass C:\n    @property\n    def x(self):\n        return 42\n\nC().x`,
    o: ["42", "<bound method>", "Error", "None"],
    c: 0,
    e: "@property makes x accessible without parentheses: C().x returns 42.",
    de: `With @property, accessing C().x calls the x() method automatically and returns its value. No parentheses needed — it looks like an attribute access but runs code behind the scenes.

Key concepts:
• C().x triggers the property getter (the x method)
• The method returns 42
• No () needed — that's the point of @property
• C().x() would actually raise TypeError (42 is not callable)

How it works:
• @property converts x into a property descriptor
• C().x triggers descriptor __get__
• __get__ calls the original x method on the instance
• Returns 42

Example:
>>> C().x
42
>>> type(C.x)  # On the class, it's a property object
<class 'property'>
>>> C().x()    # TypeError: 'int' object is not callable

Without @property, you would need C().x() with parentheses. The decorator provides a cleaner API.`
  }),

  // Q26: @staticmethod
  (_i: number) => ({
    q: `What is the result of:\nclass C:\n    @staticmethod\n    def f():\n        return 1\n\nC.f()`,
    o: ["1", "Error: missing self", "None", "C object"],
    c: 0,
    e: "@staticmethod removes the need for self. C.f() returns 1.",
    de: `@staticmethod creates a method that doesn't receive the instance (self) or class (cls) as its first argument. It behaves like a regular function that happens to live inside a class.

Key concepts:
• No self or cls parameter needed
• Can be called on the class: C.f()
• Can also be called on an instance: C().f()
• Useful for utility functions that belong logically to the class

How it works:
• @staticmethod wraps f in a staticmethod descriptor
• When called, Python doesn't pass self or cls
• f() simply returns 1
• Works identically whether called on class or instance

Example:
>>> C.f()
1
>>> C().f()
1
>>> type(C.__dict__['f'])
<class 'staticmethod'>

Use @staticmethod for methods that don't need access to instance or class state but logically belong to the class.`
  }),

  // Q27: @classmethod
  (_i: number) => ({
    q: `What is the result of:\nclass C:\n    @classmethod\n    def f(cls):\n        return cls.__name__\n\nC.f()`,
    o: ['"C"', '"f"', "Error", "None"],
    c: 0,
    e: "@classmethod receives the class as first arg. cls.__name__ is 'C'.",
    de: `@classmethod transforms a method so that it receives the class (not the instance) as its first argument. Here, cls is the class C, and cls.__name__ returns "C".

Key concepts:
• cls is the class itself (C), not an instance
• cls.__name__ returns the class name as a string
• Can be called on class or instance
• Useful for alternative constructors and class-level operations

How it works:
• @classmethod wraps f in a classmethod descriptor
• When called, Python passes the class as first argument (cls)
• cls is C, so cls.__name__ is "C"
• Returns "C"

Example:
>>> C.f()
'C'
>>> C().f()   # Also works on instances
'C'
>>> class D(C): pass
>>> D.f()     # cls is D, not C!
'D'

The key difference from @staticmethod: classmethod receives the class and can access class attributes, while staticmethod receives nothing extra.`
  }),

  // Q28: staticmethod vs classmethod
  (_i: number) => ({
    q: `What is the key difference between @staticmethod and @classmethod?`,
    o: ["classmethod receives the class as first arg, staticmethod doesn't", "staticmethod is faster than classmethod", "classmethod can only be called on instances", "staticmethod automatically creates instances"],
    c: 0,
    e: "@classmethod gets cls as first argument; @staticmethod gets no implicit arguments.",
    de: `The fundamental difference is in the implicit first argument. @classmethod receives the class (cls) automatically, while @staticmethod receives no implicit arguments at all.

Key concepts:
• @classmethod: def f(cls, ...): — cls is the class
• @staticmethod: def f(...): — no implicit args
• Both can be called on class or instance
• @classmethod is aware of the class hierarchy (polymorphic)

How it works:
• classmethod descriptor passes the class to f
• staticmethod descriptor passes nothing extra
• For inheritance: cls in classmethod refers to the actual class used (could be subclass)
• staticmethod has no awareness of which class it belongs to

Example:
>>> class Animal:
...     @classmethod
...     def create(cls):
...         return cls()  # Creates instance of actual class
...     @staticmethod
...     def info():
...         return "Animal"
>>> class Dog(Animal): pass
>>> Dog.create()   # cls is Dog → creates Dog instance
>>> Dog.info()     # Still returns "Animal" — no cls awareness

Use @classmethod when you need class-aware behavior; @staticmethod for utility functions.`
  }),

  // Q29: Retry decorator pattern
  (_i: number) => ({
    q: `def retry(times):\n    def dec(f):\n        def w(*a):\n            for i in range(times):\n                try:\n                    return f(*a)\n                except:\n                    if i == times - 1:\n                        raise\n        return w\n    return dec\n\nWhat pattern is this?`,
    o: ["Retry decorator", "Cache decorator", "Timer decorator", "Logging decorator"],
    c: 0,
    e: "This retries the function up to 'times' attempts, re-raising on the last failure.",
    de: `This is a retry decorator that attempts to call a function multiple times before giving up. If the function raises an exception, it retries up to n times. On the final attempt, it re-raises the exception.

Key concepts:
• Parameterized decorator: retry(times) returns dec
• Loop attempts the function call up to times
• try/except catches failures and retries
• Last iteration re-raises to propagate the error

How it works:
• @retry(3) creates a decorator that allows 3 attempts
• f(*a) is called in a try block
• If it succeeds (return), loop exits immediately
• If it raises, except catches it
• On last attempt (i == times - 1), raise re-raises

Example:
>>> @retry(3)
... def connect():
...     # Might fail due to network issues
...     return make_connection()
>>> connect()  # Tries up to 3 times

This pattern is common in network programming, API calls, and any operation that may fail transiently. Production versions often add exponential backoff.`
  }),

  // Q30: Debug/logging decorator
  (_i: number) => ({
    q: `def debug(f):\n    from functools import wraps\n    @wraps(f)\n    def w(*a, **kw):\n        r = f(*a, **kw)\n        print(f"{f.__name__}({a}, {kw}) -> {r}")\n        return r\n    return w\n\nWhat pattern is this?`,
    o: ["Debug/logging decorator", "Retry decorator", "Caching decorator", "Authorization decorator"],
    c: 0,
    e: "This prints the function name, arguments, and return value — a debug/logging pattern.",
    de: `This is a debug or logging decorator that records function calls with their arguments and return values. It uses @wraps(f) to preserve the original function's metadata.

Key concepts:
• Calls f(*a, **kw) first to get the result
• Then prints function name, args, kwargs, and result
• @wraps(f) preserves __name__, __doc__, etc.
• The original return value is passed through unchanged

How it works:
• w(*a, **kw) captures all positional and keyword arguments
• r = f(*a, **kw) calls the original function
• print shows: function_name(args, kwargs) -> result
• return r passes the result through

Example:
>>> @debug
... def add(x, y): return x + y
>>> add(3, 4)
add((3, 4), {}) -> 7
7

This pattern is invaluable during development. Production logging decorators typically use the logging module instead of print.`
  }),

  // Q31: Identity decorator
  (_i: number) => ({
    q: `def dec(f):\n    return f\n\nWhat does this decorator do?`,
    o: ["Nothing — returns function unchanged (identity decorator)", "Deletes the function", "Wraps the function in a class", "Doubles the function's output"],
    c: 0,
    e: "This is an identity decorator — it returns the function as-is with no modification.",
    de: `This is the simplest possible decorator — it takes a function and returns it unchanged. Known as an identity decorator, it serves as a no-op.

Key concepts:
• dec receives f and immediately returns it
• No wrapper function is created
• f remains the exact same function object
• f.__name__, f.__doc__, etc. are all preserved

How it works:
• @dec above def func() runs: func = dec(func)
• dec(func) returns func itself
• func is unchanged — same object, same behavior

Example:
>>> @dec
... def hello(): return "hi"
>>> hello()
'hi'
>>> hello.__name__
'hello'

While seemingly useless, identity decorators appear as: base cases in conditional decoration, optional feature flags (@debug_only that's a no-op in production), and as documentation markers.`
  }),

  // Q32: Decorator returning non-function
  (_i: number) => ({
    q: `def dec(f):\n    return 42\n\nCan a decorator return a non-function value?`,
    o: ["Yes, but calling the decorated name will fail since 42 is not callable", "No, decorators must return functions", "Yes, and calling it will return 42", "Error at decoration time"],
    c: 0,
    e: "A decorator can return anything, but the name now refers to 42. Calling it raises TypeError.",
    de: `A decorator can return any value — Python doesn't enforce that the return must be callable. However, if a non-callable is returned, attempting to call the decorated name will raise TypeError.

Key concepts:
• @dec replaces f with dec(f) which is 42
• f is now the integer 42
• f() attempts to call 42 → TypeError
• No error at decoration time — the assignment succeeds

How it works:
• def f(): ... creates a function
• @dec applies: f = dec(f) = 42
• f is now 42 (an integer)
• f() raises TypeError: 'int' object is not callable

Example:
>>> @dec
... def f(): return "hello"
>>> f
42
>>> f()
TypeError: 'int' object is not callable
>>> type(f)
<class 'int'>

This is legal but almost always a bug. Decorators should return callables unless they intentionally replace the name with a different value.`
  }),

  // Q33: Decorator returning 42 — calling behavior
  (_i: number) => ({
    q: `@dec where dec returns 42:\ndef dec(f): return 42\n@dec\ndef f(): pass\n\nWhat happens when you call f()?`,
    o: ["TypeError: 'int' object is not callable", "Returns 42", "Returns None", "No error"],
    c: 0,
    e: "f is now 42 (an integer). Calling 42() raises TypeError.",
    de: `After decoration, f is the integer 42. Attempting to call 42 with parentheses raises TypeError because integers are not callable.

Key concepts:
• @dec sets f = dec(f) = 42
• f is now 42, not a function
• f() is equivalent to 42() which is invalid
• Python raises TypeError: 'int' object is not callable

How it works:
• Decoration: f = dec(f)
• dec returns 42 regardless of input
• f now holds 42
• f() tries to call the integer → TypeError

Example:
>>> f
42
>>> callable(f)
False
>>> f()
TypeError: 'int' object is not callable

This demonstrates that @ syntax is purely assignment — Python doesn't check that the result is callable. The error only surfaces when you try to use f as a function.`
  }),

  // Q34: Authorization decorator pattern
  (_i: number) => ({
    q: `def requires_auth(f):\n    def w(user, *a):\n        if not user.get("auth"):\n            raise PermissionError\n        return f(user, *a)\n    return w\n\nWhat pattern is this?`,
    o: ["Authorization/permission decorator", "Logging decorator", "Caching decorator", "Singleton decorator"],
    c: 0,
    e: "This checks for authentication before allowing the function to execute — an authorization pattern.",
    de: `This is an authorization or permission decorator. It checks whether the user has authentication credentials before allowing the decorated function to execute.

Key concepts:
• Checks user.get("auth") before calling f
• Raises PermissionError if not authenticated
• Only calls the original function if auth passes
• First argument must be a user dict with an "auth" key

How it works:
• w(user, *a) expects user as first argument
• user.get("auth") checks for authentication
• If falsy (None, False, missing): raises PermissionError
• If truthy: calls and returns f(user, *a) normally

Example:
>>> @requires_auth
... def view_profile(user):
...     return user["name"]
>>> view_profile({"name": "Alice", "auth": True})
'Alice'
>>> view_profile({"name": "Bob"})
PermissionError

This pattern is ubiquitous in web frameworks (Django's @login_required, Flask's @auth.login_required) for protecting routes and views.`
  }),

  // Q35: Removing a decorator
  (_i: number) => ({
    q: `Can you remove a decorator from a function after it has been applied?`,
    o: ["Not easily; you'd need __wrapped__ if functools.wraps was used", "Yes, just call undecorate(f)", "Yes, use del @decorator", "Decorators are always removable"],
    c: 0,
    e: "Once applied, a decorator is hard to undo. __wrapped__ provides access if @wraps was used.",
    de: `Removing a decorator after application is not straightforward because the original function has been replaced. However, if @functools.wraps was used, the original is accessible via __wrapped__.

Key concepts:
• Decoration replaces the function name with the wrapper
• Without @wraps, the original function is lost (only in closure)
• With @wraps, __wrapped__ holds a reference to the original
• There's no built-in "undecorate" mechanism

How it works:
• After @dec, func points to wrapper
• If @wraps(f) was used: wrapper.__wrapped__ = f
• Access original: func.__wrapped__
• Reassign: func = func.__wrapped__ to "undecorate"

Example:
>>> from functools import wraps
>>> def dec(f):
...     @wraps(f)
...     def w(*a): return f(*a)
...     return w
>>> @dec
... def hello(): return "hi"
>>> hello.__wrapped__  # Original function
>>> original = hello.__wrapped__

This is why @functools.wraps is important — it preserves the escape hatch to the original function.`
  }),

  // Q36: __wrapped__ attribute
  (_i: number) => ({
    q: `What is the result of:\nfrom functools import wraps\ndef dec(f):\n    @wraps(f)\n    def w(*a):\n        return f(*a)\n    return w\n\n@dec\ndef f(): pass\n\nf.__wrapped__ is not None`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "@wraps(f) sets w.__wrapped__ = f, so f.__wrapped__ is the original function (not None).",
    de: `When @wraps(f) is used, it sets __wrapped__ on the wrapper function to reference the original function. So f.__wrapped__ points to the original f, which is not None.

Key concepts:
• @wraps(f) sets w.__wrapped__ = f (the original)
• After decoration, f is w but f.__wrapped__ is original f
• The original function object is a valid function, not None
• "is not None" evaluates to True

How it works:
• dec(f) creates w with @wraps(f)
• @wraps sets w.__wrapped__ = f (original)
• f = dec(f) — f is now w
• f.__wrapped__ is the original function → not None → True

Example:
>>> f.__wrapped__
<function f at 0x...>
>>> f.__wrapped__ is not None
True
>>> callable(f.__wrapped__)
True

The __wrapped__ attribute is also used by inspect.unwrap() to automatically peel off decorator layers.`
  }),

  // Q37: Can lambda be decorated?
  (_i: number) => ({
    q: `Can a lambda function be decorated with @ syntax?`,
    o: ["No, @ syntax requires def, but you can manually: f = decorator(lambda: ...)", "Yes, use @decorator before lambda", "Yes, lambda supports all decorators", "No, lambdas cannot be decorated at all"],
    c: 0,
    e: "@ syntax only works with def statements. Lambdas can be decorated manually via assignment.",
    de: `The @ decorator syntax can only appear before def or class statements — not lambda expressions. However, since decoration is just function application, you can manually decorate a lambda.

Key concepts:
• @decorator is syntactic sugar for name = decorator(name)
• lambda is an expression, not a statement
• @ syntax requires a statement (def or class)
• Manual decoration: f = decorator(lambda x: x)

How it works:
• @decorator / lambda x: x → SyntaxError
• Instead: f = decorator(lambda x: x) works fine
• The result is the same — lambda is passed to decorator
• The decorator's return value is assigned to f

Example:
>>> double = lambda x: x * 2
>>> logged_double = log(double)  # Manual decoration
>>> logged_double(5)
Calling <lambda>
10

# This would be a SyntaxError:
# @log
# lambda x: x * 2

Since lambdas are anonymous, f.__name__ would be "<lambda>" unless @wraps is used.`
  }),

  // Q38: Decorator overriding __doc__
  (_i: number) => ({
    q: `What is the result of:\ndef dec(f):\n    def w(*a):\n        return f(*a)\n    w.__doc__ = "wrapped"\n    return w\n\n@dec\ndef f():\n    """original"""\n    return 1\n\nf.__doc__`,
    o: ['"wrapped"', '"original"', "None", "Error"],
    c: 0,
    e: "The wrapper explicitly sets __doc__ to 'wrapped', overriding the original's docstring.",
    de: `The decorator creates a wrapper w and explicitly sets w.__doc__ = "wrapped". Since @dec replaces f with w, f.__doc__ returns the wrapper's docstring: "wrapped".

Key concepts:
• f originally has __doc__ = "original"
• The wrapper w gets __doc__ = "wrapped" explicitly
• @dec replaces f with w
• f.__doc__ is now w.__doc__ = "wrapped"

How it works:
• dec(f) creates w with __doc__ = "wrapped"
• Returns w
• f = dec(f) — f is now w
• f.__doc__ returns "wrapped"

Example:
>>> f.__doc__
'wrapped'

Without the explicit w.__doc__ = "wrapped" line, f.__doc__ would be None (wrapper functions don't inherit the original's docstring unless @wraps is used). With @functools.wraps(f), __doc__ would be "original".`
  }),

  // Q39: When does decoration happen?
  (_i: number) => ({
    q: `def dec(f):\n    print("decorating")\n    def w():\n        return f()\n    return w\n\n@dec\ndef f():\n    return 1\n\nWhen does "decorating" print?`,
    o: ["At decoration time (when @dec is applied), not when f() is called", "When f() is called", "When the module is imported AND when f() is called", "Never — print is inside dec but dec is never called"],
    c: 0,
    e: "The decorator function runs when @dec is applied (at definition time), printing 'decorating' immediately.",
    de: `Decoration happens at definition time — when the @dec line is executed. The print("decorating") runs inside dec, which is called as part of the decoration process.

Key concepts:
• @dec triggers dec(f) immediately when the def statement runs
• print("decorating") executes during decoration, not during calls
• The wrapper w is returned and replaces f
• Calling f() later only runs w() — no print

How it works:
• Python encounters @dec / def f()
• Creates function object for f
• Calls dec(f) immediately
• dec prints "decorating" and returns w
• f = w (decoration complete)
• Later: f() calls w() — no print

Example:
>>> # Just defining the decorated function prints:
decorating
>>> f()  # No print — just returns 1
1

This is important: if you have side effects in a decorator (print, logging, registration), they happen at import/definition time, not at call time.`
  }),

  // Q40: Can decorators modify arguments?
  (_i: number) => ({
    q: `Can a decorator modify the arguments passed to the original function?`,
    o: ["Yes, the wrapper can transform args before passing to original", "No, arguments are always passed unchanged", "Only keyword arguments can be modified", "Only if the function has *args"],
    c: 0,
    e: "The wrapper can modify, add, or remove arguments before calling the original function.",
    de: `Decorators have full control over arguments. The wrapper function receives the arguments, can transform them in any way, and then passes modified versions to the original function.

Key concepts:
• Wrapper receives all arguments via *args and **kwargs
• Can modify, add, remove, or validate arguments
• Passes transformed arguments to the original function
• The original function sees only what the wrapper provides

How it works:
• def w(*args, **kwargs): captures all arguments
• Modify: args = (args[0] * 2, *args[1:])
• Add: kwargs['extra'] = True
• Call: f(*modified_args, **modified_kwargs)

Example:
>>> def double_first_arg(f):
...     def wrapper(*args):
...         new_args = (args[0] * 2,) + args[1:]
...         return f(*new_args)
...     return wrapper
>>> @double_first_arg
... def add(x, y): return x + y
>>> add(3, 4)  # x becomes 6, y stays 4
10

This pattern is used for type coercion, default injection, argument validation, and normalization.`
  }),

  // ===== ADVANCED DECORATOR CONCEPTS (41–50) =====

  // Q41: @dataclass decorator
  (_i: number) => ({
    q: `What is the result of:\nfrom dataclasses import dataclass\n\n@dataclass\nclass Point:\n    x: int\n    y: int\n\np = Point(1, 2)\np.x`,
    o: ["1", "Error", "(1, 2)", "Point(1, 2)"],
    c: 0,
    e: "@dataclass generates __init__ from annotations. Point(1, 2) sets x=1, y=2. p.x is 1.",
    de: `The @dataclass decorator automatically generates special methods based on class variable annotations. It creates __init__, __repr__, __eq__, and optionally others.

Key concepts:
• @dataclass reads the class annotations (x: int, y: int)
• Generates __init__(self, x: int, y: int) automatically
• Point(1, 2) creates an instance with x=1 and y=2
• p.x accesses the instance attribute → 1

How it works:
• @dataclass inspects Point's annotations
• Generates: def __init__(self, x: int, y: int): self.x = x; self.y = y
• Also generates __repr__ and __eq__
• Point(1, 2) uses the generated __init__

Example:
>>> p = Point(1, 2)
>>> p.x
1
>>> p.y
2
>>> p
Point(x=1, y=2)
>>> Point(1, 2) == Point(1, 2)
True

@dataclass eliminates boilerplate for data-holding classes. It's one of the most impactful decorators in the standard library (added in Python 3.7).`
  }),

  // Q42: @dataclass generates what methods?
  (_i: number) => ({
    q: `What methods does @dataclass automatically generate by default?`,
    o: ["__init__, __repr__, __eq__", "__init__ only", "__init__, __repr__, __eq__, __lt__", "__init__, __hash__, __repr__"],
    c: 0,
    e: "@dataclass generates __init__, __repr__, and __eq__ by default.",
    de: `By default, @dataclass generates three special methods: __init__ (constructor), __repr__ (string representation), and __eq__ (equality comparison). Additional methods can be generated with decorator parameters.

Key concepts:
• __init__: assigns parameters to self based on annotations
• __repr__: returns ClassName(field1=val1, field2=val2)
• __eq__: compares all fields for equality
• Optional: __lt__, __le__, __gt__, __ge__ with order=True
• Optional: __hash__ (generated if frozen=True or eq=False)

How it works:
• @dataclass inspects annotations
• Generates __init__ that accepts and assigns each field
• Generates __repr__ that shows class name and field values
• Generates __eq__ that compares tuples of field values

Example:
>>> @dataclass
... class Point:
...     x: int
...     y: int
>>> Point(1, 2)
Point(x=1, y=2)          # __repr__
>>> Point(1, 2) == Point(1, 2)
True                       # __eq__

Use @dataclass(order=True) for comparison operators, @dataclass(frozen=True) for immutability and hashing.`
  }),

  // Q43: Decorator that adds a method to a class
  (_i: number) => ({
    q: `What is the result of:\ndef add_method(cls):\n    cls.greet = lambda self: "hi"\n    return cls\n\n@add_method\nclass C:\n    pass\n\nC().greet()`,
    o: ['"hi"', "Error", "None", "C object"],
    c: 0,
    e: "The decorator adds a greet method to C. C().greet() returns 'hi'.",
    de: `This class decorator adds a new method to the class at decoration time. The lambda becomes an instance method because Python's descriptor protocol binds it to the instance.

Key concepts:
• @add_method receives the class C
• cls.greet = lambda self: "hi" adds a method
• The lambda takes self (making it an instance method)
• return cls returns the modified class

How it works:
• add_method(C) modifies C by adding greet attribute
• cls.greet is set to a lambda that takes self
• When called as C().greet(), Python passes the instance as self
• The lambda returns "hi"

Example:
>>> C().greet()
'hi'
>>> hasattr(C, 'greet')
True

Class decorators are powerful for metaprogramming — adding methods, modifying behavior, or registering classes. This pattern is used in frameworks for auto-generating API endpoints, serialization methods, etc.`
  }),

  // Q44: Class-based decorator with state
  (_i: number) => ({
    q: `class Decorator:\n    def __init__(self, f):\n        self.f = f\n        self.count = 0\n    def __call__(self, *a):\n        self.count += 1\n        return self.f(*a)\n\n@Decorator\ndef hello():\n    return "hi"\n\nhello()\nhello()\nhello()\nhello.count`,
    o: ["3", "0", "1", "Error"],
    c: 0,
    e: "hello is a Decorator instance. Each call increments count. After 3 calls, count is 3.",
    de: `This class-based decorator maintains state between calls using instance attributes. hello is replaced by a Decorator instance that tracks how many times it has been called.

Key concepts:
• @Decorator: hello = Decorator(hello)
• hello is now a Decorator instance with self.count = 0
• Each call to hello() triggers __call__, incrementing count
• hello.count is accessible as a regular attribute

How it works:
• Decorator(hello) stores hello in self.f, sets self.count = 0
• hello() → __call__() → self.count = 1, returns self.f()
• hello() → __call__() → self.count = 2, returns self.f()
• hello() → __call__() → self.count = 3, returns self.f()
• hello.count → 3

Example:
>>> hello()
'hi'
>>> hello.count
1
>>> hello()
>>> hello()
>>> hello.count
3

Class-based decorators excel at maintaining state. This is cleaner than function-based approaches that use mutable default arguments or function attributes.`
  }),

  // Q45: Trace decorator (entry and exit)
  (_i: number) => ({
    q: `def trace(f):\n    def w(*a, **kw):\n        print(f"-> {f.__name__}")\n        r = f(*a, **kw)\n        print(f"<- {f.__name__}: {r}")\n        return r\n    return w\n\nWhat does this decorator do?`,
    o: ["Traces function entry and exit with return value", "Only traces function entry", "Only traces the return value", "Prevents the function from running"],
    c: 0,
    e: "This decorator prints when a function is entered and when it exits, including the return value.",
    de: `The trace decorator adds entry and exit logging to a function. It prints an arrow showing when execution enters the function and another showing when it exits with the result.

Key concepts:
• "-> name" prints before the function runs (entry)
• r = f(*a, **kw) runs the actual function
• "<- name: result" prints after (exit)
• return r passes the result through unchanged

How it works:
• Calling decorated func triggers w
• w prints entry message with function name
• w calls f(*a, **kw) and captures result in r
• w prints exit message with function name and result
• w returns r

Example:
>>> @trace
... def add(x, y): return x + y
>>> add(3, 4)
-> add
<- add: 7
7

This pattern is essential for debugging recursive functions — you can see the call stack unfold. For production use, replace print with logging module calls.`
  }),

  // Q46: abc.abstractmethod
  (_i: number) => ({
    q: `What is abc.abstractmethod?`,
    o: ["A decorator that marks methods as abstract (must be overridden)", "A function that creates abstract classes", "A method that deletes class attributes", "A decorator that makes methods private"],
    c: 0,
    e: "@abc.abstractmethod marks a method as abstract — subclasses must implement it.",
    de: `@abc.abstractmethod is a decorator from the abc (Abstract Base Classes) module that marks a method as abstract. Classes with abstract methods cannot be instantiated — subclasses must override all abstract methods.

Key concepts:
• Part of the abc module (Abstract Base Classes)
• Marks methods that subclasses must implement
• Class with abstract methods can't be instantiated directly
• Ensures interface compliance in the class hierarchy

How it works:
• @abstractmethod sets the method's __isabstractmethod__ = True
• ABCMeta metaclass checks for abstract methods
• If any exist, instantiation raises TypeError
• Subclasses must override all abstract methods to be instantiable

Example:
>>> from abc import ABC, abstractmethod
>>> class Shape(ABC):
...     @abstractmethod
...     def area(self): pass
>>> Shape()  # TypeError: Can't instantiate abstract class
>>> class Circle(Shape):
...     def area(self): return 3.14 * self.r ** 2
>>> Circle()  # Works — area is implemented

This is Python's way of enforcing interfaces and contracts in OOP.`
  }),

  // Q47: @functools.total_ordering
  (_i: number) => ({
    q: `What does @functools.total_ordering do?`,
    o: ["Auto-generates comparison methods from __eq__ and one of __lt__, __gt__, etc.", "Sorts all instances automatically", "Makes the class immutable", "Adds __hash__ to the class"],
    c: 0,
    e: "@total_ordering generates missing comparison methods from __eq__ and one other.",
    de: `@functools.total_ordering is a class decorator that auto-generates the missing rich comparison methods. You only need to define __eq__ and one ordering method (__lt__, __le__, __gt__, or __ge__), and it fills in the rest.

Key concepts:
• Requires __eq__ and at least one of __lt__, __le__, __gt__, __ge__
• Generates the missing comparison methods automatically
• Reduces boilerplate — instead of 6 methods, write 2
• The generated methods are derived from the ones you provide

How it works:
• Inspects which comparison methods exist
• For each missing one, generates it using the defined ones
• e.g., if __lt__ is defined: __gt__(a,b) = __lt__(b,a)
• __le__(a,b) = __lt__(a,b) or __eq__(a,b)

Example:
>>> from functools import total_ordering
>>> @total_ordering
... class Score:
...     def __init__(self, val):
...         self.val = val
...     def __eq__(self, other):
...         return self.val == other.val
...     def __lt__(self, other):
...         return self.val < other.val
>>> Score(5) > Score(3)   # Auto-generated!
True
>>> Score(5) >= Score(5)  # Auto-generated!
True

Note: generated methods may be slightly slower than hand-written ones due to the delegation logic.`
  }),

  // Q48: Function passed via closure in decorator
  (_i: number) => ({
    q: `In a decorator, how does the wrapper access the original function?`,
    o: ["Via closure — the original function is captured in the wrapper's enclosing scope", "Via global variable", "Via the self parameter", "Via import statement"],
    c: 0,
    e: "The wrapper is a closure that captures the original function from the decorator's scope.",
    de: `In a decorator, the wrapper function accesses the original function through a closure. The decorator's parameter (f) is in the enclosing scope of the wrapper, so the wrapper retains a reference to it.

Key concepts:
• A closure captures variables from its enclosing scope
• The decorator receives f as a parameter
• The wrapper is defined inside the decorator, so f is in its enclosing scope
• The wrapper retains access to f even after the decorator returns

How it works:
• def decorator(f): — f is in decorator's local scope
•     def wrapper(*args): — wrapper is nested inside decorator
•         return f(*args) — f is a free variable, captured by closure
•     return wrapper — wrapper remembers f
• After decorator returns, wrapper still has access to f

Example:
>>> def decorator(f):
...     def wrapper():
...         return f()  # f is captured via closure
...     return wrapper
>>> @decorator
... def hello(): return "hi"
>>> hello()  # wrapper calls f (original hello) via closure
'hi'
>>> hello.__closure__[0].cell_contents  # The captured function

Closures are fundamental to how decorators work in Python.`
  }),

  // Q49: @contextmanager decorator
  (_i: number) => ({
    q: `What does @contextlib.contextmanager turn a generator function into?`,
    o: ["A context manager (for use with 'with' statement)", "A regular function", "An async generator", "A class decorator"],
    c: 0,
    e: "@contextmanager converts a generator function into a context manager for use with 'with'.",
    de: `@contextlib.contextmanager is a decorator that transforms a generator function (one that yields) into a context manager. This allows using 'with' syntax without writing a full class with __enter__ and __exit__.

Key concepts:
• The decorated generator must yield exactly once
• Code before yield runs on __enter__
• Code after yield runs on __exit__
• The yielded value is available via 'as' in the with statement

How it works:
• @contextmanager wraps the generator in a _GeneratorContextManager
• with statement calls __enter__, which runs generator to the yield
• The yielded value is bound to the 'as' variable
• When the with block exits, __exit__ resumes the generator past yield

Example:
>>> from contextlib import contextmanager
>>> @contextmanager
... def managed_resource():
...     print("Acquiring")
...     yield "resource"
...     print("Releasing")
>>> with managed_resource() as r:
...     print(f"Using {r}")
Acquiring
Using resource
Releasing

This is much more concise than writing a class with __enter__ and __exit__ methods.`
  }),

  // Q50: Stacking decorators equivalence
  (_i: number) => ({
    q: `@dec1\n@dec2\ndef f(): pass\n\nThis is equivalent to which expression?`,
    o: ["f = dec1(dec2(f))", "f = dec2(dec1(f))", "f = dec1(f) + dec2(f)", "f = dec1 and dec2(f)"],
    c: 0,
    e: "Stacked decorators apply bottom-up: @dec1 @dec2 def f is f = dec1(dec2(f)).",
    de: `Stacking @dec1 and @dec2 applies them bottom-up. dec2 is applied first (closest to def), then dec1 wraps the result. The final expression is f = dec1(dec2(f)).

Key concepts:
• Decorators apply from bottom to top
• dec2 receives the original function f
• dec1 receives the result of dec2(f)
• This is function composition: dec1 compose dec2

How it works:
• Python creates the function f
• Step 1: temp = dec2(f) — dec2 wraps original f
• Step 2: f = dec1(temp) — dec1 wraps dec2's result
• Equivalent to: f = dec1(dec2(f))

Example:
>>> def dec1(f):
...     def w(): return f"[{f()}]"
...     return w
>>> def dec2(f):
...     def w(): return f"({f()})"
...     return w
>>> @dec1
... @dec2
... def greet(): return "hi"
>>> greet()
'[(hi)]'
# dec2 first: (hi), then dec1: [(hi)]

The order matters: @dec2 @dec1 would give (["hi"]) instead. Think of it as mathematical composition: (dec1 . dec2)(f).`
  }),
];
