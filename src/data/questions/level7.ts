import { PersonaStage } from '../../types';

// --- LEVEL 7: DOLPHIN (Functions, Parameters, Return) - 100 TRULY UNIQUE QUESTIONS ---
// Each question tests a DIFFERENT concept - NO number/variable variations of the same question
export const level7Patterns = [
  // 1-10: Function Definition and Basics
  (_i: number) => ({ 
    q: `What does def func(x): return x * 2 do?`, 
    o: ["Defines a function", "Calls a function", "Imports a module", "Error"], 
    c: 0, 
    e: "def defines a function.",
    de: `The def keyword defines a function in Python. def func(x): return x * 2 defines a function named func that takes one parameter x and returns x * 2. The def statement creates a function object and assigns it to the name func. This is function definition, not function calling - to call the function, you would use func(5) which would return 10. Functions are defined using def, followed by the function name, parameters in parentheses, a colon, and the function body.

def keyword - function definition:
• def func(x): return x * 2 defines a function
• def is the keyword for function definition
• func is the function name
• (x) is the parameter list
• return x * 2 is the function body
• Creates function object, doesn't execute it

How it works:
• def func(x): creates function definition
• Function name: func
• Parameter: x
• Body: return x * 2
• Function object created and assigned to name func
• To call: func(5) returns 10

Example:
def func(x): return x * 2  # Defines function
func(5)                    # 10 (calls function)
func(3)                    # 6 (calls function)

Common uses:
• Defining functions: def function_name(params): body
• Creating reusable code: def calculate(x): return x * 2
• Function definition
• Code organization

Example: def func(x): return x * 2 defines a function named func that takes parameter x and returns x * 2. This is function definition - the function is created but not executed until called.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(): pass?`, 
    o: ["Defines empty function", "Calls function", "Error", "None"], 
    c: 0, 
    e: "Function with no parameters and pass statement.",
    de: `The def keyword with pass defines an empty function. def func(): pass defines a function named func with no parameters and an empty body (pass is a placeholder that does nothing). This creates a valid function that returns None when called. pass is used when you need syntactically valid code but don't want to execute anything - it's commonly used for placeholder functions, empty classes, or code that will be implemented later.

def with pass - empty function:
• def func(): pass defines empty function
• func is function name
• () means no parameters
• pass is placeholder (does nothing)
• Function returns None when called

How it works:
• def func(): creates function definition
• Function name: func
• No parameters: ()
• Body: pass (placeholder)
• Function object created
• When called: func() returns None

Example:
def func(): pass          # Defines empty function
func()                    # None (returns None)
def placeholder(): pass   # Placeholder for future code

Common uses:
• Placeholder functions: def func(): pass (to be implemented)
• Empty functions: def stub(): pass
• Syntax requirement: pass needed for empty body
• Function stubs

Example: def func(): pass defines an empty function named func with no parameters. The pass statement is a placeholder that does nothing, making this a valid function that returns None when called.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(): return?`, 
    o: ["Defines function returning None", "Error", "Defines function returning empty", "None"], 
    c: 0, 
    e: "return without value returns None.",
    de: `A return statement without a value returns None. def func(): return defines a function that explicitly returns None. When you use return without a value, Python returns None. This is equivalent to return None or having no return statement at all - all three result in the function returning None. Explicitly using return without a value can make it clear that the function intentionally returns None.

return without value:
• def func(): return defines function returning None
• return without value returns None
• Equivalent to return None
• Equivalent to no return statement
• Function returns None

How it works:
• def func(): creates function definition
• Function name: func
• No parameters: ()
• Body: return (no value)
• When called: func() returns None
• Explicit None return

Example:
def func(): return        # Returns None
func()                    # None
def func(): return None   # Same: None
def func(): pass          # Same: None (no return)

Common uses:
• Explicit None return: def func(): return
• Clear intent: return None explicitly
• Function termination
• None return pattern

Example: def func(): return defines a function that explicitly returns None. The return statement without a value returns None, making it clear that the function intentionally returns None.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(): return 1, 2?`, 
    o: ["Defines function returning tuple", "Error", "Defines function returning two values", "None"], 
    c: 0, 
    e: "Multiple values in return create tuple.",
    de: `Returning multiple values in Python creates a tuple. def func(): return 1, 2 defines a function that returns a tuple (1, 2). When you write return 1, 2, Python automatically creates a tuple - the comma creates a tuple, not parentheses. This is Python's way of returning multiple values - you can unpack them when calling the function: a, b = func() assigns 1 to a and 2 to b.

Multiple return values:
• def func(): return 1, 2 defines function returning tuple
• return 1, 2 creates tuple (1, 2)
• Comma creates tuple (parentheses optional)
• Returns single tuple object
• Can be unpacked: a, b = func()

How it works:
• def func(): creates function definition
• Function name: func
• No parameters: ()
• Body: return 1, 2
• Comma creates tuple: (1, 2)
• When called: func() returns (1, 2)

Example:
def func(): return 1, 2   # Returns (1, 2)
func()                    # (1, 2) (tuple)
a, b = func()            # a = 1, b = 2 (unpacking)

Common uses:
• Returning multiple values: return x, y
• Tuple return: return (1, 2) (same as return 1, 2)
• Multiple value return
• Unpacking return values

Example: def func(): return 1, 2 defines a function that returns a tuple (1, 2). The comma creates a tuple, so return 1, 2 is equivalent to return (1, 2).
`
  }),
  (_i: number) => ({ 
    q: `What happens if a function has no return statement?`, 
    o: ["Returns None", "Error", "Returns 0", "Returns empty string"], 
    c: 0, 
    e: "Functions without return return None.",
    de: `Functions without a return statement automatically return None. If a function has no return statement, when it finishes executing, it implicitly returns None. This is Python's default behavior - every function returns a value, and if no return statement is executed, the function returns None. This is why functions without explicit return values can still be used in expressions - they return None, which is a valid value (though often not useful).

No return statement:
• Function without return returns None
• Implicit None return
• Default behavior in Python
• Every function returns a value
• None is returned if no return executed

How it works:
• Function executes body
• Reaches end of function
• No return statement encountered
• Implicitly returns None
• Function call evaluates to None

Example:
def func(): pass          # No return, returns None
func()                    # None
def func(): print("hi")   # No return, returns None
result = func()           # result = None

Common uses:
• Functions without return: def func(): body (returns None)
• Side-effect functions: def print_data(): print(x) (returns None)
• Implicit None return
• Default return behavior

Example: If a function has no return statement, it automatically returns None when it finishes executing. This is Python's default behavior - every function returns a value, and None is the default.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(x, y): return x + y?`, 
    o: ["Defines function with two parameters", "Calls function", "Error", "None"], 
    c: 0, 
    e: "Function with multiple parameters.",
    de: `Functions can have multiple parameters. def func(x, y): return x + y defines a function named func that takes two parameters x and y and returns their sum. Parameters are listed in the parentheses separated by commas. When you call the function, you provide arguments for each parameter: func(1, 2) passes 1 to x and 2 to y, returning 3. Multiple parameters allow functions to work with multiple inputs.

Multiple parameters:
• def func(x, y): return x + y defines function with two parameters
• x and y are parameters
• Parameters separated by commas
• Function takes two arguments when called
• Returns sum of parameters

How it works:
• def func(x, y): creates function definition
• Function name: func
• Parameters: x, y
• Body: return x + y
• When called: func(1, 2) assigns 1 to x, 2 to y, returns 3

Example:
def func(x, y): return x + y  # Two parameters
func(1, 2)                    # 3 (1 + 2)
func(5, 10)                   # 15 (5 + 10)

Common uses:
• Multiple inputs: def calculate(x, y): return x + y
• Parameter lists: def process(a, b, c): body
• Multiple parameter functions
• Function parameters

Example: def func(x, y): return x + y defines a function with two parameters x and y that returns their sum. When called with func(1, 2), it returns 3.
`
  }),
  (_i: number) => ({ 
    q: `What is func(1, 2) if def func(x, y): return x + y?`, 
    o: ["3", "1", "2", "Error"], 
    c: 0, 
    e: "Function call with positional arguments.",
    de: `Calling a function with positional arguments passes values in order. If def func(x, y): return x + y, then func(1, 2) returns 3 because 1 is passed to the first parameter x and 2 is passed to the second parameter y, so the function returns 1 + 2 = 3. Positional arguments are matched to parameters by position - the first argument goes to the first parameter, the second argument goes to the second parameter, and so on.

Positional arguments:
• func(1, 2) with def func(x, y): return x + y returns 3
• 1 is passed to x (first parameter)
• 2 is passed to y (second parameter)
• Function returns x + y = 1 + 2 = 3
• Arguments matched by position

How it works:
• func(1, 2) calls function func
• First argument 1 assigned to first parameter x
• Second argument 2 assigned to second parameter y
• Function executes: return x + y
• Returns: 1 + 2 = 3

Example:
def func(x, y): return x + y
func(1, 2)                    # 3 (positional: 1→x, 2→y)
func(5, 10)                   # 15 (positional: 5→x, 10→y)

Common uses:
• Calling functions: result = func(arg1, arg2)
• Positional argument passing: func(1, 2, 3)
• Function invocation
• Argument passing

Example: If def func(x, y): return x + y, then func(1, 2) returns 3 because 1 is passed to x and 2 is passed to y (positional arguments), so the function returns 1 + 2 = 3.
`
  }),
  (_i: number) => ({ 
    q: `What is func(x=1, y=2) if def func(x, y): return x + y?`, 
    o: ["3", "1", "2", "Error"], 
    c: 0, 
    e: "Function call with keyword arguments.",
    de: `Calling a function with keyword arguments passes values by parameter name. If def func(x, y): return x + y, then func(x=1, y=2) returns 3 because x=1 explicitly assigns 1 to parameter x and y=2 explicitly assigns 2 to parameter y, so the function returns 1 + 2 = 3. Keyword arguments are matched by parameter name, not position, which makes function calls more readable and allows arguments to be passed in any order.

Keyword arguments:
• func(x=1, y=2) with def func(x, y): return x + y returns 3
• x=1 assigns 1 to parameter x
• y=2 assigns 2 to parameter y
• Function returns x + y = 1 + 2 = 3
• Arguments matched by name

How it works:
• func(x=1, y=2) calls function func
• x=1 assigns 1 to parameter x
• y=2 assigns 2 to parameter y
• Function executes: return x + y
• Returns: 1 + 2 = 3

Example:
def func(x, y): return x + y
func(x=1, y=2)               # 3 (keyword: x=1, y=2)
func(y=2, x=1)               # 3 (same, order doesn't matter)

Common uses:
• Calling functions: result = func(param1=value1, param2=value2)
• Keyword argument passing: func(x=1, y=2)
• Readable function calls
• Named argument passing

Example: If def func(x, y): return x + y, then func(x=1, y=2) returns 3 because x=1 assigns 1 to x and y=2 assigns 2 to y (keyword arguments), so the function returns 1 + 2 = 3.
`
  }),
  (_i: number) => ({ 
    q: `What is func(1, y=2) if def func(x, y): return x + y?`, 
    o: ["3", "1", "2", "Error"], 
    c: 0, 
    e: "Function call with mixed positional and keyword arguments.",
    de: `You can mix positional and keyword arguments in a function call. If def func(x, y): return x + y, then func(1, y=2) returns 3 because 1 is passed positionally to x and y=2 is passed as a keyword argument to y, so the function returns 1 + 2 = 3. Positional arguments must come before keyword arguments - you cannot have a keyword argument followed by a positional argument. This mixing allows flexibility in function calls.

Mixed arguments:
• func(1, y=2) with def func(x, y): return x + y returns 3
• 1 is positional argument (goes to x)
• y=2 is keyword argument (goes to y)
• Function returns x + y = 1 + 2 = 3
• Positional before keyword

How it works:
• func(1, y=2) calls function func
• 1 is positional, assigned to first parameter x
• y=2 is keyword, assigned to parameter y
• Function executes: return x + y
• Returns: 1 + 2 = 3

Example:
def func(x, y): return x + y
func(1, y=2)                 # 3 (mixed: 1→x, y=2)
func(x=1, 2)                 # SyntaxError (keyword before positional not allowed)

Common uses:
• Mixed calls: result = func(1, param2=value)
• Flexible argument passing: func(pos1, keyword=value)
• Positional and keyword mixing
• Function call flexibility

Example: If def func(x, y): return x + y, then func(1, y=2) returns 3 because 1 is passed positionally to x and y=2 is passed as a keyword argument to y, so the function returns 1 + 2 = 3.
`
  }),
  (_i: number) => ({ 
    q: `What is func() if def func(x=1): return x?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "Function call using default parameter value.",
    de: `Functions with default parameters can be called without providing arguments. If def func(x=1): return x, then func() returns 1 because x has a default value of 1, so when func() is called with no arguments, x uses its default value of 1, and the function returns 1. Default parameters allow functions to be called with fewer arguments - if an argument is not provided, the default value is used. This makes functions more flexible.

Default parameters:
• func() with def func(x=1): return x returns 1
• x has default value 1
• No argument provided for x
• x uses default value: 1
• Function returns 1

How it works:
• func() calls function func
• No argument provided for parameter x
• x has default value 1
• x uses default: x = 1
• Function executes: return x
• Returns: 1

Example:
def func(x=1): return x
func()                      # 1 (uses default x=1)
func(5)                     # 5 (overrides default)

Common uses:
• Optional parameters: def process(data, verbose=False):
• Default values: def calculate(x, y=0): return x + y
• Flexible function calls
• Default parameter functions

Example: If def func(x=1): return x, then func() returns 1 because x has a default value of 1, so when called with no arguments, x uses its default value and the function returns 1.
`
  }),
  
  // 11-20: Default Parameters
  (_i: number) => ({ 
    q: `What is def func(x=1): return x?`, 
    o: ["Defines function with default parameter", "Error", "Defines function with required parameter", "None"], 
    c: 0, 
    e: "Default parameter allows omitting argument.",
    de: `Default parameters allow functions to be called with fewer arguments. def func(x=1): return x defines a function with a default parameter x=1, which means if no argument is provided for x, it will use the value 1. This makes the parameter optional - you can call func() without arguments (uses default 1), or func(5) to override the default. Default parameters are defined using = in the parameter list.

Default parameters:
• def func(x=1): return x defines function with default parameter
• x=1 sets default value to 1
• Parameter x is optional
• Can call func() (uses x=1) or func(5) (uses x=5)
• Default allows omitting argument

How it works:
• def func(x=1): creates function definition
• Function name: func
• Parameter x has default value 1
• If no argument provided, x = 1
• If argument provided, x = argument value

Example:
def func(x=1): return x
func()                    # 1 (uses default x=1)
func(5)                    # 5 (overrides default)

Common uses:
• Optional parameters: def process(data, verbose=False):
• Default values: def calculate(x, y=0): return x + y
• Flexible function calls
• Default parameter functions

Example: def func(x=1): return x defines a function with a default parameter x=1, which means if called without arguments, x uses its default value of 1.
`
  }),
  (_i: number) => ({ 
    q: `What is func(2) if def func(x=1): return x?`, 
    o: ["2", "1", "Error", "None"], 
    c: 0, 
    e: "Passing argument overrides default.",
    de: `Passing an argument to a function with a default parameter overrides the default. If def func(x=1): return x, then func(2) returns 2 because the argument 2 is passed to x, overriding the default value of 1. The default value is only used when no argument is provided - if an argument is provided, it takes precedence over the default.

Argument overrides default:
• func(2) with def func(x=1): return x returns 2
• Argument 2 passed to parameter x
• Overrides default value 1
• Function returns 2 (not default 1)
• Default only used if no argument provided

How it works:
• func(2) calls function func
• Argument 2 provided for parameter x
• x uses argument value 2 (not default 1)
• Function executes: return x
• Returns: 2

Example:
def func(x=1): return x
func(2)                    # 2 (overrides default x=1)
func(5)                    # 5 (overrides default x=1)
func()                      # 1 (uses default x=1)

Common uses:
• Overriding defaults: func(value) (overrides default)
• Flexible calls: func() or func(value)
• Argument precedence
• Default parameter behavior

Example: If def func(x=1): return x, then func(2) returns 2 because the argument 2 overrides the default value of 1, so x = 2 and the function returns 2.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(x, y=2): return x + y?`, 
    o: ["Defines function with required and default parameter", "Error", "Defines function with two defaults", "None"], 
    c: 0, 
    e: "Required parameters must come before defaults.",
    de: `Required parameters must come before default parameters in the function definition. def func(x, y=2): return x + y defines a function with a required parameter x and a default parameter y=2. This is valid because the required parameter x comes before the default parameter y. You can call it with func(1) (uses default y=2) or func(1, 3) (overrides default y=2). This ordering is required by Python's syntax.

Required before default:
• def func(x, y=2): return x + y defines function correctly
• x is required parameter (no default)
• y is default parameter (y=2)
• Required parameters must come first
• Valid: required before default

How it works:
• def func(x, y=2): creates function definition
• Function name: func
• Parameter x is required (no default)
• Parameter y has default value 2
• Required parameter x comes before default parameter y

Example:
def func(x, y=2): return x + y
func(1)                    # 3 (uses default y=2: 1 + 2)
func(1, 3)                 # 4 (overrides default: 1 + 3)

Common uses:
• Mixed parameters: def process(data, verbose=False):
• Required and optional: def calculate(x, y=0): return x + y
• Parameter ordering
• Required before default

Example: def func(x, y=2): return x + y defines a function with a required parameter x and a default parameter y=2. The required parameter x comes before the default parameter y, which is correct.
`
  }),
  (_i: number) => ({ 
    q: `What is func(1) if def func(x, y=2): return x + y?`, 
    o: ["3", "1", "Error", "None"], 
    c: 0, 
    e: "Calling with one arg uses default for second.",
    de: `When calling a function with required and default parameters, you can omit arguments for default parameters. If def func(x, y=2): return x + y, then func(1) returns 3 because 1 is passed to the required parameter x, and y uses its default value of 2, so the function returns 1 + 2 = 3. You must provide arguments for all required parameters, but you can omit arguments for default parameters.

Using default for second parameter:
• func(1) with def func(x, y=2): return x + y returns 3
• 1 is passed to required parameter x
• y uses default value 2 (no argument provided)
• Function returns x + y = 1 + 2 = 3
• Default value used for y

How it works:
• func(1) calls function func
• Argument 1 provided for required parameter x
• No argument provided for default parameter y
• y uses default value: y = 2
• Function executes: return x + y
• Returns: 1 + 2 = 3

Example:
def func(x, y=2): return x + y
func(1)                    # 3 (uses default y=2: 1 + 2)
func(1, 5)                 # 6 (overrides default: 1 + 5)

Common uses:
• Omitting defaults: func(required) (uses defaults)
• Optional parameters: func(data) (uses defaults)
• Default parameter usage
• Flexible function calls

Example: If def func(x, y=2): return x + y, then func(1) returns 3 because 1 is passed to x and y uses its default value of 2, so the function returns 1 + 2 = 3.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(x=1, y): return x + y?`, 
    o: ["SyntaxError", "Valid function", "Error", "None"], 
    c: 0, 
    e: "Default parameters must come after non-defaults.",
    de: `Default parameters must come after non-default parameters in the function definition. def func(x=1, y): return x + y raises a SyntaxError because x has a default value but y doesn't, and default parameters must come after non-default parameters. Python requires this ordering - required parameters (without defaults) must come first, followed by default parameters. This prevents ambiguity about which parameters get which arguments.

Default after required:
• def func(x=1, y): return x + y raises SyntaxError
• x has default value (x=1)
• y is required (no default)
• Default parameters must come after required
• SyntaxError: non-default argument follows default argument

How it works:
• def func(x=1, y): attempts to define function
• x has default value 1
• y is required (no default)
• Required parameter y comes after default parameter x
• Raises SyntaxError (invalid ordering)

Example:
def func(x=1, y): return x + y  # SyntaxError
def func(y, x=1): return x + y  # Valid (required before default)

Common uses:
• Understanding syntax: required parameters must come first
• Parameter ordering: required, then defaults
• Syntax error avoidance
• Function definition rules

Example: def func(x=1, y): return x + y raises a SyntaxError because default parameters must come after non-default parameters - required parameter y must come before default parameter x.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(x=[]): x.append(1); return x?`, 
    o: ["Defines function with mutable default (problematic)", "Error", "Defines function with immutable default", "None"], 
    c: 0, 
    e: "Mutable defaults are shared across calls (common pitfall).",
    de: `Using a mutable object (like a list) as a default parameter is problematic because the default value is created once and shared across all function calls. def func(x=[]): x.append(1); return x defines a function with a mutable default parameter, which is a common pitfall in Python. The list [] is created once when the function is defined, and the same list object is reused for all calls. This means modifications to the list persist across calls, which is usually not what you want.

Mutable default parameter:
• def func(x=[]): x.append(1); return x defines function with mutable default
• Default value [] is created once (when function defined)
• Same list object reused for all calls
• Modifications persist across calls
• Common pitfall (usually not desired)

How it works:
• def func(x=[]): creates function definition
• Default value [] is created once (when function defined)
• Same list object shared across calls
• First call: x is [], appends 1, returns [1]
• Second call: x is [1] (same list!), appends 1, returns [1, 1]

Example:
def func(x=[]): x.append(1); return x
func()                      # [1] (first call)
func()                      # [1, 1] (second call, list persists!)
func()                      # [1, 1, 1] (third call, list grows!)

Common uses:
• Understanding pitfall: mutable defaults are shared
• Avoiding mutable defaults: use None instead
• Common Python mistake
• Default parameter behavior

Example: def func(x=[]): x.append(1); return x defines a function with a mutable default parameter. The list [] is created once and shared across all calls, so modifications persist, which is usually not desired.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(x=None): x = x or []; x.append(1); return x?`, 
    o: ["Defines function with safe mutable default pattern", "Error", "Defines function with mutable default", "None"], 
    c: 0, 
    e: "Common pattern to avoid mutable default issues.",
    de: `Using None as a default and creating a new mutable object inside the function is a common pattern to avoid mutable default issues. def func(x=None): x = x or []; x.append(1); return x defines a function that safely handles mutable defaults. If x is None (default), x = x or [] creates a new list, ensuring each call gets its own list. This pattern prevents the shared mutable default problem - each call gets a fresh list instead of sharing one.

Safe mutable default pattern:
• def func(x=None): x = x or []; x.append(1); return x uses safe pattern
• Default is None (immutable)
• x = x or [] creates new list if x is None
• Each call gets its own list (not shared)
• Avoids mutable default pitfall

How it works:
• def func(x=None): creates function definition
• Default value None (immutable)
• x = x or [] creates new list if x is None
• First call: x is None, creates new [], appends 1, returns [1]
• Second call: x is None, creates new [], appends 1, returns [1] (fresh list!)

Example:
def func(x=None): x = x or []; x.append(1); return x
func()                      # [1] (first call, new list)
func()                      # [1] (second call, new list, not [1, 1]!)
func([10])                  # [10, 1] (uses provided list)

Common uses:
• Safe mutable defaults: def func(x=None): x = x or []
• Avoiding shared state: use None as default
• Common Python pattern
• Mutable default workaround

Example: def func(x=None): x = x or []; x.append(1); return x defines a function that safely handles mutable defaults by using None as the default and creating a new list inside the function if needed, avoiding the shared mutable default problem.
`
  }),
  (_i: number) => ({ 
    q: `What is func() then func() if def func(x=[]): x.append(1); return x?`, 
    o: ["[1] then [1, 1]", "[1] then [1]", "Error", "None"], 
    c: 0, 
    e: "Mutable default is shared, accumulates across calls.",
    de: `Mutable default parameters accumulate changes across function calls because the same object is reused. If def func(x=[]): x.append(1); return x, then func(); func() causes the second call to return [1, 1] because the default list [] is created once and shared across all calls. The first call appends 1, making the list [1], and the second call starts with [1] (same shared list) and appends 1 again, resulting in [1, 1].

Mutable default - accumulation:
• func(); func() with def func(x=[]): x.append(1); return x returns [1, 1]
• Default list [] is shared across calls
• First call: x is [], appends 1, returns [1]
• Second call: x is [1] (same list!), appends 1, returns [1, 1]
• List accumulates changes

How it works:
• def func(x=[]): creates function definition
• Default value [] is created once (when function defined)
• Same list object shared across calls
• First call: x is [], appends 1, returns [1]
• Second call: x is [1] (same list!), appends 1, returns [1, 1]

Example:
def func(x=[]): x.append(1); return x
func()                      # [1] (first call)
func()                      # [1, 1] (second call, list accumulated!)

Common uses:
• Understanding mutable defaults: accumulate changes
• Demonstrating pitfall: shared state
• Mutable default behavior
• Common Python mistake

Example: If def func(x=[]): x.append(1); return x, then func(); func() causes the second call to return [1, 1] because the default list [] is shared across calls, so the first call modifies it to [1], and the second call continues with [1] and appends 1 again.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(x=1, y=2, z=3): return x, y, z?`, 
    o: ["Defines function with multiple defaults", "Error", "Defines function with required params", "None"], 
    c: 0, 
    e: "Function can have multiple default parameters.",
    de: `Functions can have multiple default parameters. def func(x=1, y=2, z=3): return x, y, z defines a function with three default parameters, each with its own default value. All parameters have defaults, so you can call the function with 0, 1, 2, or 3 arguments. If you provide arguments, they are assigned to parameters in order, starting with the first parameter. This allows flexible function calls with different numbers of arguments.

Multiple default parameters:
• def func(x=1, y=2, z=3): return x, y, z defines function with multiple defaults
• All three parameters have default values
• x defaults to 1, y defaults to 2, z defaults to 3
• Can call with 0, 1, 2, or 3 arguments
• Arguments assigned in order

How it works:
• def func(x=1, y=2, z=3): creates function definition
• Function name: func
• All parameters have defaults: x=1, y=2, z=3
• Arguments assigned to parameters in order
• Missing arguments use defaults

Example:
def func(x=1, y=2, z=3): return x, y, z
func()                      # (1, 2, 3) (all defaults)
func(10)                    # (10, 2, 3) (only x overridden)
func(10, 20)                # (10, 20, 3) (x and y overridden)

Common uses:
• Multiple optional parameters: def process(data, verbose=False, output=None):
• Flexible functions: def create(width=100, height=100, color='blue'):
• Multiple default parameters
• Flexible function calls

Example: def func(x=1, y=2, z=3): return x, y, z defines a function with multiple default parameters. All parameters have defaults, so you can call it with 0, 1, 2, or 3 arguments.
`
  }),
  (_i: number) => ({ 
    q: `What is func(10) if def func(x=1, y=2, z=3): return x, y, z?`, 
    o: ["(10, 2, 3)", "(10, 1, 2)", "Error", "None"], 
    c: 0, 
    e: "First argument goes to first parameter, rest use defaults.",
    de: `When calling a function with multiple default parameters, arguments are assigned to parameters in order, starting with the first parameter. If def func(x=1, y=2, z=3): return x, y, z, then func(10) returns (10, 2, 3) because the argument 10 is assigned to the first parameter x, and y and z use their default values of 2 and 3. Arguments are matched to parameters positionally, from left to right.

First argument to first parameter:
• func(10) with def func(x=1, y=2, z=3): return x, y, z returns (10, 2, 3)
• Argument 10 assigned to first parameter x
• y uses default value 2
• z uses default value 3
• Arguments assigned in order

How it works:
• func(10) calls function func
• Argument 10 provided
• Assigned to first parameter x: x = 10
• y uses default: y = 2
• z uses default: z = 3
• Function executes: return x, y, z
• Returns: (10, 2, 3)

Example:
def func(x=1, y=2, z=3): return x, y, z
func(10)                    # (10, 2, 3) (x=10, y=2, z=3)
func(10, 20)                # (10, 20, 3) (x=10, y=20, z=3)
func(10, 20, 30)            # (10, 20, 30) (all overridden)

Common uses:
• Positional argument assignment: func(arg1) (goes to first param)
• Flexible calls: func(value) or func(value1, value2)
• Argument matching
• Default parameter behavior

Example: If def func(x=1, y=2, z=3): return x, y, z, then func(10) returns (10, 2, 3) because 10 is assigned to x (first parameter), and y and z use their default values of 2 and 3.
`
  }),
  
  // 21-30: *args and **kwargs
  (_i: number) => ({ 
    q: `What is def func(*args): return args?`, 
    o: ["Defines function accepting variable positional arguments", "Error", "Defines function with required args", "None"], 
    c: 0, 
    e: "*args collects positional arguments into tuple.",
    de: `The *args syntax allows a function to accept a variable number of positional arguments. def func(*args): return args defines a function that collects all positional arguments into a tuple named args. The * before args tells Python to collect all extra positional arguments into a tuple. This allows the function to be called with any number of arguments, which are then accessible as a tuple inside the function.

*args parameter:
• def func(*args): return args defines function with *args
• *args collects variable positional arguments
• Collects all extra positional arguments into tuple
• Function can accept any number of arguments
• Arguments accessible as tuple: args

How it works:
• def func(*args): creates function definition
• Function name: func
• *args collects all positional arguments into tuple
• When called: func(1, 2, 3), args = (1, 2, 3)
• Returns tuple of arguments

Example:
def func(*args): return args
func(1, 2, 3)              # (1, 2, 3) (all arguments collected)
func(1)                     # (1,) (single argument)
func()                      # () (no arguments, empty tuple)

Common uses:
• Variable arguments: def process(*items): for item in items:
• Flexible functions: def sum_values(*numbers): return sum(numbers)
• Variable positional arguments
• Function flexibility

Example: def func(*args): return args defines a function that collects all positional arguments into a tuple named args, allowing the function to accept any number of arguments.
`
  }),
  (_i: number) => ({ 
    q: `What is func(1, 2, 3) if def func(*args): return args?`, 
    o: ["(1, 2, 3)", "[1, 2, 3]", "Error", "None"], 
    c: 0, 
    e: "*args collects arguments into tuple.",
    de: `When calling a function with *args, all positional arguments are collected into a tuple. If def func(*args): return args, then func(1, 2, 3) returns (1, 2, 3) because *args collects all positional arguments (1, 2, 3) into a tuple named args. The function can accept any number of arguments, and they are all collected into the args tuple.

*args collection:
• func(1, 2, 3) with def func(*args): return args returns (1, 2, 3)
• Arguments 1, 2, 3 are positional
• *args collects all positional arguments into tuple
• args = (1, 2, 3) inside function
• Returns tuple: (1, 2, 3)

How it works:
• func(1, 2, 3) calls function func
• Arguments 1, 2, 3 are positional
• *args collects all arguments: args = (1, 2, 3)
• Function executes: return args
• Returns: (1, 2, 3)

Example:
def func(*args): return args
func(1, 2, 3)              # (1, 2, 3) (tuple of arguments)
func(1, 2, 3, 4, 5)        # (1, 2, 3, 4, 5) (tuple of arguments)
func('a', 'b')              # ('a', 'b') (tuple of arguments)

Common uses:
• Collecting arguments: def sum_values(*numbers): return sum(numbers)
• Variable arguments: def process(*items): for item in items:
• Flexible function calls
• Tuple collection

Example: If def func(*args): return args, then func(1, 2, 3) returns (1, 2, 3) because *args collects all positional arguments into a tuple named args.
`
  }),
  (_i: number) => ({ 
    q: `What is func() if def func(*args): return args?`, 
    o: ["()", "[]", "Error", "None"], 
    c: 0, 
    e: "*args is empty tuple if no arguments passed.",
    de: `When calling a function with *args but no arguments, args becomes an empty tuple. If def func(*args): return args, then func() returns () because *args collects positional arguments, and when no arguments are provided, it collects into an empty tuple. This is different from an empty list - *args always creates a tuple, even if it's empty.

*args with no arguments:
• func() with def func(*args): return args returns ()
• No arguments provided
• *args collects into empty tuple
• args = () inside function
• Returns empty tuple: ()

How it works:
• func() calls function func
• No arguments provided
• *args collects into empty tuple: args = ()
• Function executes: return args
• Returns: () (empty tuple)

Example:
def func(*args): return args
func()                      # () (empty tuple)
func(1)                     # (1,) (single-element tuple)
func(1, 2)                  # (1, 2) (tuple)

Common uses:
• Handling no arguments: if not args: return default
• Empty tuple check: if len(args) == 0:
• Variable argument handling
• Tuple collection

Example: If def func(*args): return args, then func() returns () because *args collects positional arguments into a tuple, and when no arguments are provided, it creates an empty tuple.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(x, *args): return x, args?`, 
    o: ["Defines function with required param and *args", "Error", "Defines function with only *args", "None"], 
    c: 0, 
    e: "Required parameters can come before *args.",
    de: `Required parameters can come before *args in a function definition. def func(x, *args): return x, args defines a function with a required parameter x followed by *args. The required parameter x gets the first argument, and *args collects all remaining positional arguments into a tuple. This allows functions to have both required parameters and variable positional arguments.

Required parameter before *args:
• def func(x, *args): return x, args defines function correctly
• x is required parameter (must be provided)
• *args collects remaining positional arguments
• Required parameters must come before *args
• Valid: required before *args

How it works:
• def func(x, *args): creates function definition
• Function name: func
• Parameter x is required (no default)
• *args collects remaining positional arguments
• Required parameter x comes before *args

Example:
def func(x, *args): return x, args
func(1, 2, 3)              # (1, (2, 3)) (x=1, args=(2, 3))
func(1)                     # (1, ()) (x=1, args=())
func(1, 2)                  # (1, (2,)) (x=1, args=(2,))

Common uses:
• Mixed parameters: def process(first, *rest): process(first); process(*rest)
• Required and variable: def calculate(base, *values): return base + sum(values)
• Parameter ordering
• Required before *args

Example: def func(x, *args): return x, args defines a function with a required parameter x that must come before *args, allowing the function to have both required and variable positional arguments.
`
  }),
  (_i: number) => ({ 
    q: `What is func(1, 2, 3) if def func(x, *args): return x, args?`, 
    o: ["(1, (2, 3))", "(1, 2, 3)", "Error", "None"], 
    c: 0, 
    e: "First arg goes to x, rest to *args.",
    de: `When calling a function with a required parameter and *args, the first argument goes to the required parameter and the rest go to *args. If def func(x, *args): return x, args, then func(1, 2, 3) returns (1, (2, 3)) because 1 is assigned to x (the required parameter), and 2, 3 are collected into *args as a tuple (2, 3). The function returns a tuple containing x and args.

Argument distribution:
• func(1, 2, 3) with def func(x, *args): return x, args returns (1, (2, 3))
• First argument 1 goes to required parameter x
• Remaining arguments 2, 3 go to *args
• args = (2, 3) (tuple)
• Returns tuple: (x, args) = (1, (2, 3))

How it works:
• func(1, 2, 3) calls function func
• First argument 1 assigned to required parameter x
• Remaining arguments 2, 3 collected into *args
• args = (2, 3) (tuple)
• Function executes: return x, args
• Returns: (1, (2, 3))

Example:
def func(x, *args): return x, args
func(1, 2, 3)              # (1, (2, 3)) (x=1, args=(2, 3))
func(10, 20, 30, 40)       # (10, (20, 30, 40)) (x=10, args=(20, 30, 40))
func(5)                     # (5, ()) (x=5, args=())

Common uses:
• Separating first from rest: def process(first, *rest): process(first); process(*rest)
• Required and variable: def calculate(base, *values): return base + sum(values)
• Argument distribution
• Parameter assignment

Example: If def func(x, *args): return x, args, then func(1, 2, 3) returns (1, (2, 3)) because 1 is assigned to x and 2, 3 are collected into *args as a tuple.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(**kwargs): return kwargs?`, 
    o: ["Defines function accepting variable keyword arguments", "Error", "Defines function with required kwargs", "None"], 
    c: 0, 
    e: "**kwargs collects keyword arguments into dict.",
    de: `The **kwargs syntax allows a function to accept a variable number of keyword arguments. def func(**kwargs): return kwargs defines a function that collects all keyword arguments into a dictionary named kwargs. The ** before kwargs tells Python to collect all extra keyword arguments into a dictionary. This allows the function to be called with any number of keyword arguments, which are then accessible as a dictionary inside the function.

**kwargs parameter:
• def func(**kwargs): return kwargs defines function with **kwargs
• **kwargs collects variable keyword arguments
• Collects all extra keyword arguments into dictionary
• Function can accept any number of keyword arguments
• Arguments accessible as dictionary: kwargs

How it works:
• def func(**kwargs): creates function definition
• Function name: func
• **kwargs collects all keyword arguments into dictionary
• When called: func(a=1, b=2), kwargs = {'a': 1, 'b': 2}
• Returns dictionary of arguments

Example:
def func(**kwargs): return kwargs
func(a=1, b=2)             # {'a': 1, 'b': 2} (all keyword args collected)
func(x=10, y=20)           # {'x': 10, 'y': 20} (all keyword args collected)
func()                      # {} (no keyword args, empty dict)

Common uses:
• Variable keyword arguments: def process(**options): use options
• Flexible functions: def create(**attributes): return object(**attributes)
• Variable keyword arguments
• Dictionary collection

Example: def func(**kwargs): return kwargs defines a function that collects all keyword arguments into a dictionary named kwargs, allowing the function to accept any number of keyword arguments.
`
  }),
  (_i: number) => ({ 
    q: `What is func(a=1, b=2) if def func(**kwargs): return kwargs?`, 
    o: ["{'a': 1, 'b': 2}", "(1, 2)", "Error", "None"], 
    c: 0, 
    e: "**kwargs collects keyword args into dictionary.",
    de: `When calling a function with **kwargs, all keyword arguments are collected into a dictionary. If def func(**kwargs): return kwargs, then func(a=1, b=2) returns {'a': 1, 'b': 2} because **kwargs collects all keyword arguments (a=1, b=2) into a dictionary named kwargs. The function can accept any number of keyword arguments, and they are all collected into the kwargs dictionary.

**kwargs collection:
• func(a=1, b=2) with def func(**kwargs): return kwargs returns {'a': 1, 'b': 2}
• Arguments a=1, b=2 are keyword arguments
• **kwargs collects all keyword arguments into dictionary
• kwargs = {'a': 1, 'b': 2} inside function
• Returns dictionary: {'a': 1, 'b': 2}

How it works:
• func(a=1, b=2) calls function func
• Arguments a=1, b=2 are keyword arguments
• **kwargs collects all keyword arguments: kwargs = {'a': 1, 'b': 2}
• Function executes: return kwargs
• Returns: {'a': 1, 'b': 2}

Example:
def func(**kwargs): return kwargs
func(a=1, b=2)             # {'a': 1, 'b': 2} (dictionary of keyword args)
func(x=10, y=20, z=30)     # {'x': 10, 'y': 20, 'z': 30} (dictionary)
func()                      # {} (no keyword args, empty dict)

Common uses:
• Collecting keyword args: def process(**options): use options['key']
• Variable keyword arguments: def create(**attributes): return object(**attributes)
• Dictionary collection
• Flexible function calls

Example: If def func(**kwargs): return kwargs, then func(a=1, b=2) returns {'a': 1, 'b': 2} because **kwargs collects all keyword arguments into a dictionary named kwargs.
`
  }),
  (_i: number) => ({ 
    q: `What is func() if def func(**kwargs): return kwargs?`, 
    o: ["{}", "()", "Error", "None"], 
    c: 0, 
    e: "**kwargs is empty dict if no keyword arguments passed.",
    de: `When calling a function with **kwargs but no keyword arguments, kwargs becomes an empty dictionary. If def func(**kwargs): return kwargs, then func() returns {} because **kwargs collects keyword arguments, and when no keyword arguments are provided, it collects into an empty dictionary. This is different from an empty tuple - **kwargs always creates a dictionary, even if it's empty.

**kwargs with no arguments:
• func() with def func(**kwargs): return kwargs returns {}
• No keyword arguments provided
• **kwargs collects into empty dictionary
• kwargs = {} inside function
• Returns empty dictionary: {}

How it works:
• func() calls function func
• No keyword arguments provided
• **kwargs collects into empty dictionary: kwargs = {}
• Function executes: return kwargs
• Returns: {} (empty dictionary)

Example:
def func(**kwargs): return kwargs
func()                      # {} (empty dictionary)
func(a=1)                   # {'a': 1} (single-key dictionary)
func(a=1, b=2)              # {'a': 1, 'b': 2} (dictionary)

Common uses:
• Handling no keyword args: if not kwargs: return default
• Empty dictionary check: if len(kwargs) == 0:
• Variable keyword argument handling
• Dictionary collection

Example: If def func(**kwargs): return kwargs, then func() returns {} because **kwargs collects keyword arguments into a dictionary, and when no keyword arguments are provided, it creates an empty dictionary.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(x, *args, **kwargs): return x, args, kwargs?`, 
    o: ["Defines function with all parameter types", "Error", "Defines function with only *args", "None"], 
    c: 0, 
    e: "Function can have required, *args, and **kwargs.",
    de: `Functions can have all parameter types together: required parameters, *args, and **kwargs. def func(x, *args, **kwargs): return x, args, kwargs defines a function with a required parameter x, variable positional arguments *args, and variable keyword arguments **kwargs. The order is important: required parameters must come first, followed by *args, followed by **kwargs. This allows maximum flexibility in function calls.

All parameter types:
• def func(x, *args, **kwargs): return x, args, kwargs defines function with all types
• x is required parameter
• *args collects remaining positional arguments into tuple
• **kwargs collects keyword arguments into dictionary
• Order: required, *args, **kwargs
• Maximum flexibility

How it works:
• def func(x, *args, **kwargs): creates function definition
• Function name: func
• Parameter x is required (no default)
• *args collects remaining positional arguments
• **kwargs collects keyword arguments
• Order: required, *args, **kwargs

Example:
def func(x, *args, **kwargs): return x, args, kwargs
func(1, 2, 3, a=4)         # (1, (2, 3), {'a': 4}) (all types)
func(1, a=2)                # (1, (), {'a': 2}) (required + kwargs)
func(1, 2, a=3)             # (1, (2,), {'a': 3}) (all types)

Common uses:
• Maximum flexibility: def process(required, *args, **kwargs): handle all
• Wrapper functions: def wrapper(func, *args, **kwargs): return func(*args, **kwargs)
• All parameter types
• Function flexibility

Example: def func(x, *args, **kwargs): return x, args, kwargs defines a function with all parameter types, allowing maximum flexibility with required, variable positional, and variable keyword arguments.
`
  }),
  (_i: number) => ({ 
    q: `What is func(1, 2, 3, a=4) if def func(x, *args, **kwargs): return x, args, kwargs?`, 
    o: ["(1, (2, 3), {'a': 4})", "(1, 2, 3, {'a': 4})", "Error", "None"], 
    c: 0, 
    e: "Arguments distributed: first to x, rest to *args, keywords to **kwargs.",
    de: `When calling a function with all parameter types, arguments are distributed appropriately. If def func(x, *args, **kwargs): return x, args, kwargs, then func(1, 2, 3, a=4) returns (1, (2, 3), {'a': 4}) because 1 is assigned to x (the required parameter), 2 and 3 are collected into *args as (2, 3), and a=4 is collected into **kwargs as {'a': 4}. Positional arguments go to required parameters and *args, keyword arguments go to **kwargs.

Argument distribution:
• func(1, 2, 3, a=4) with def func(x, *args, **kwargs): return x, args, kwargs returns (1, (2, 3), {'a': 4})
• First argument 1 goes to required parameter x
• Remaining positional arguments 2, 3 go to *args
• Keyword argument a=4 goes to **kwargs
• Returns tuple: (x, args, kwargs) = (1, (2, 3), {'a': 4})

How it works:
• func(1, 2, 3, a=4) calls function func
• First argument 1 assigned to required parameter x
• Remaining positional arguments 2, 3 collected into *args: args = (2, 3)
• Keyword argument a=4 collected into **kwargs: kwargs = {'a': 4}
• Function executes: return x, args, kwargs
• Returns: (1, (2, 3), {'a': 4})

Example:
def func(x, *args, **kwargs): return x, args, kwargs
func(1, 2, 3, a=4)         # (1, (2, 3), {'a': 4})
func(10, 20, x=30)          # TypeError (x already assigned positionally!)
func(10, 20, y=30)          # (10, (20,), {'y': 30})

Common uses:
• Argument distribution: def process(required, *args, **kwargs): distribute
• Wrapper functions: def wrapper(func, *args, **kwargs): return func(*args, **kwargs)
• Flexible argument handling
• Parameter assignment

Example: If def func(x, *args, **kwargs): return x, args, kwargs, then func(1, 2, 3, a=4) returns (1, (2, 3), {'a': 4}) because 1 goes to x, 2 and 3 go to *args, and a=4 goes to **kwargs.
`
  }),
  
  // 31-40: Lambda Functions
  (_i: number) => ({ 
    q: `What is lambda x: x * 2?`, 
    o: ["Anonymous function", "Named function", "Error", "Variable"], 
    c: 0, 
    e: "lambda creates anonymous function.",
    de: `Lambda creates an anonymous function (a function without a name). lambda x: x * 2 creates an anonymous function that takes parameter x and returns x * 2. Lambda functions are concise one-line functions defined using the lambda keyword, followed by parameters (x), a colon (:), and an expression (x * 2). Lambda functions can be used wherever function objects are required, but they're limited to a single expression and cannot contain statements.

Lambda function:
• lambda x: x * 2 creates anonymous function
• lambda keyword creates function
• x is parameter
• x * 2 is expression (returned)
• Function has no name (anonymous)
• Single expression only

How it works:
• lambda x: x * 2 creates function object
• Function takes parameter x
• Returns x * 2 (expression evaluated)
• Function object created but not called
• Can be assigned: f = lambda x: x * 2

Example:
lambda x: x * 2              # Anonymous function object
(lambda x: x * 2)(5)         # 10 (called with 5)
f = lambda x: x * 2; f(5)    # 10 (assigned then called)

Common uses:
• Anonymous functions: lambda x: x * 2
• Callbacks: map(lambda x: x * 2, [1, 2, 3])
• Short functions: sorted(items, key=lambda x: x[1])
• Lambda functions
• One-line functions

Example: lambda x: x * 2 creates an anonymous function that takes parameter x and returns x * 2. Lambda functions are concise one-line functions without names.
`
  }),
  (_i: number) => ({ 
    q: `What is (lambda x: x * 2)(5)?`, 
    o: ["10", "5", "Error", "None"], 
    c: 0, 
    e: "Lambda function call with argument.",
    de: `Lambda functions can be called immediately by placing arguments in parentheses after the lambda expression. (lambda x: x * 2)(5) returns 10 because the lambda function lambda x: x * 2 is defined and immediately called with argument 5. The lambda function takes 5 as x, evaluates x * 2 (5 * 2), and returns 10. This is called an immediately invoked function expression (IIFE) pattern, though less common in Python than in JavaScript.

Lambda function call:
• (lambda x: x * 2)(5) returns 10
• Lambda function created: lambda x: x * 2
• Immediately called with argument: (5)
• x = 5, evaluates x * 2 = 5 * 2 = 10
• Returns 10

How it works:
• (lambda x: x * 2)(5) creates and calls function
• Lambda function defined: lambda x: x * 2
• Argument 5 passed to parameter x
• Expression evaluated: x * 2 = 5 * 2 = 10
• Returns 10

Example:
(lambda x: x * 2)(5)         # 10 (immediately called)
(lambda x: x ** 2)(4)        # 16 (immediately called)
(lambda x: x + 1)(10)        # 11 (immediately called)

Common uses:
• Immediate invocation: (lambda x: f(x))(value)
• One-time use: (lambda x: x * 2)(5)
• Lambda calls
• Anonymous function invocation

Example: (lambda x: x * 2)(5) returns 10 because the lambda function lambda x: x * 2 is immediately called with argument 5, so x = 5 and it returns 5 * 2 = 10.
`
  }),
  (_i: number) => ({ 
    q: `What is lambda: 42?`, 
    o: ["Anonymous function with no parameters", "Error", "Variable", "None"], 
    c: 0, 
    e: "Lambda can have no parameters.",
    de: `Lambda functions can have no parameters. lambda: 42 creates an anonymous function with no parameters that returns 42. When a lambda function has no parameters, you just use lambda followed by a colon (:) and the expression. This is useful for creating constant functions or functions that don't need input parameters. To call it, you use empty parentheses: (lambda: 42)().

Lambda with no parameters:
• lambda: 42 creates anonymous function with no parameters
• lambda keyword creates function
• No parameters (empty before colon)
• 42 is expression (returned)
• Function always returns 42

How it works:
• lambda: 42 creates function object
• Function takes no parameters
• Always returns 42 (expression evaluated)
• Function object created but not called
• Can be called: (lambda: 42)()

Example:
lambda: 42                   # Anonymous function with no params
(lambda: 42)()               # 42 (called with no args)
f = lambda: 42; f()          # 42 (assigned then called)

Common uses:
• Constant functions: lambda: default_value
• No-parameter functions: lambda: get_current_time()
• Lambda without parameters
• Constant function pattern

Example: lambda: 42 creates an anonymous function with no parameters that always returns 42. Lambda functions can have zero or more parameters.
`
  }),
  (_i: number) => ({ 
    q: `What is (lambda: 42)()?`, 
    o: ["42", "Error", "None", "0"], 
    c: 0, 
    e: "Lambda with no parameters called with empty parentheses.",
    de: `Lambda functions with no parameters are called with empty parentheses. (lambda: 42)() returns 42 because the lambda function lambda: 42 is immediately called with no arguments (empty parentheses ()). The lambda function has no parameters, so it doesn't expect any arguments when called. It simply evaluates the expression 42 and returns it.

Lambda call with no parameters:
• (lambda: 42)() returns 42
• Lambda function created: lambda: 42
• Immediately called with no arguments: ()
• Expression evaluated: 42
• Returns 42

How it works:
• (lambda: 42)() creates and calls function
• Lambda function defined: lambda: 42
• No arguments provided (empty parentheses)
• Expression evaluated: 42
• Returns 42

Example:
(lambda: 42)()               # 42 (called with no args)
(lambda: 'hello')()          # 'hello' (called with no args)
(lambda: [1, 2, 3])()        # [1, 2, 3] (called with no args)

Common uses:
• Immediate invocation: (lambda: value)()
• Constant functions: f = lambda: default; f()
• Lambda calls
• No-parameter function invocation

Example: (lambda: 42)() returns 42 because the lambda function lambda: 42 is immediately called with no arguments, so it evaluates and returns 42.
`
  }),
  (_i: number) => ({ 
    q: `What is lambda x, y: x + y?`, 
    o: ["Anonymous function with two parameters", "Error", "Variable", "None"], 
    c: 0, 
    e: "Lambda can have multiple parameters.",
    de: `Lambda functions can have multiple parameters separated by commas. lambda x, y: x + y creates an anonymous function with two parameters x and y that returns their sum x + y. Lambda functions can have any number of parameters, just like regular functions, but they're limited to a single expression. To call it, you provide arguments for all parameters: (lambda x, y: x + y)(3, 4).

Lambda with multiple parameters:
• lambda x, y: x + y creates anonymous function with two parameters
• lambda keyword creates function
• x, y are parameters (comma-separated)
• x + y is expression (returned)
• Function takes two arguments when called

How it works:
• lambda x, y: x + y creates function object
• Function takes parameters x and y
• Returns x + y (expression evaluated)
• Function object created but not called
• Can be called: (lambda x, y: x + y)(3, 4)

Example:
lambda x, y: x + y           # Anonymous function with two params
(lambda x, y: x + y)(3, 4)   # 7 (called with 3, 4)
(lambda a, b, c: a * b + c)(2, 3, 4) # 10 (three params)

Common uses:
• Multiple parameters: lambda x, y: x + y
• Two-argument functions: sorted(items, key=lambda x, y: (x[1], y[0]))
• Lambda with multiple params
• Multi-parameter functions

Example: lambda x, y: x + y creates an anonymous function with two parameters x and y that returns their sum. Lambda functions can have any number of parameters.
`
  }),
  (_i: number) => ({ 
    q: `What is (lambda x, y: x + y)(3, 4)?`, 
    o: ["7", "3", "4", "Error"], 
    c: 0, 
    e: "Lambda with multiple parameters.",
    de: `Lambda functions with multiple parameters are called with arguments in the same order. (lambda x, y: x + y)(3, 4) returns 7 because the lambda function lambda x, y: x + y is immediately called with arguments 3 and 4. The arguments are assigned to parameters in order: x = 3 and y = 4, then the expression x + y evaluates to 3 + 4 = 7, which is returned.

Lambda call with multiple parameters:
• (lambda x, y: x + y)(3, 4) returns 7
• Lambda function created: lambda x, y: x + y
• Immediately called with arguments: (3, 4)
• x = 3, y = 4 (assigned in order)
• Expression evaluated: x + y = 3 + 4 = 7

How it works:
• (lambda x, y: x + y)(3, 4) creates and calls function
• Lambda function defined: lambda x, y: x + y
• Arguments 3, 4 passed to parameters x, y
• x = 3, y = 4 (assigned in order)
• Expression evaluated: x + y = 3 + 4 = 7
• Returns 7

Example:
(lambda x, y: x + y)(3, 4)   # 7 (3 + 4)
(lambda x, y: x * y)(5, 6)   # 30 (5 * 6)
(lambda a, b: a ** b)(2, 3)  # 8 (2 ** 3)

Common uses:
• Immediate invocation: (lambda x, y: f(x, y))(a, b)
• Two-argument functions: (lambda x, y: x + y)(1, 2)
• Lambda calls
• Multi-parameter function invocation

Example: (lambda x, y: x + y)(3, 4) returns 7 because the lambda function lambda x, y: x + y is immediately called with arguments 3 and 4, so x = 3, y = 4, and it returns 3 + 4 = 7.
`
  }),
  (_i: number) => ({ 
    q: `What is f = lambda x: x**2; f(5)?`, 
    o: ["25", "5", "Error", "None"], 
    c: 0, 
    e: "Lambda can be assigned to variable.",
    de: `Lambda functions can be assigned to variables, making them essentially named functions. f = lambda x: x**2; f(5) returns 25 because the lambda function lambda x: x**2 is assigned to the variable f, and then f(5) calls the function with argument 5. When assigned to a variable, a lambda function works just like a regular function - you can call it multiple times, pass it as an argument, etc. However, def is generally preferred for named functions as it's more readable.

Lambda assigned to variable:
• f = lambda x: x**2; f(5) returns 25
• Lambda function created: lambda x: x**2
• Assigned to variable f
• f(5) calls function with argument 5
• Returns 25 (5 ** 2)

How it works:
• f = lambda x: x**2 creates function and assigns to f
• Variable f now contains function object
• f(5) calls function stored in f
• Argument 5 passed to parameter x
• Expression evaluated: x**2 = 5**2 = 25
• Returns 25

Example:
f = lambda x: x**2
f(5)                        # 25 (called with 5)
f(3)                        # 9 (called with 3)
f(10)                       # 100 (called with 10)

Common uses:
• Named lambda: f = lambda x: x**2 (less common, prefer def)
• Reusable lambda: func = lambda x: transform(x)
• Lambda assignment
• Function objects

Example: f = lambda x: x**2; f(5) returns 25 because the lambda function lambda x: x**2 is assigned to f, and then f(5) calls it with argument 5, returning 5**2 = 25.
`
  }),
  (_i: number) => ({ 
    q: `What is lambda x: x if x > 0 else 0?`, 
    o: ["Anonymous function with conditional", "Error", "Variable", "None"], 
    c: 0, 
    e: "Lambda can contain conditional expressions.",
    de: `Lambda functions can contain conditional expressions (ternary operators). lambda x: x if x > 0 else 0 creates an anonymous function that takes parameter x and returns x if x > 0, otherwise returns 0. Lambda functions can use if-else expressions (but not if-else statements) because they're limited to a single expression. The syntax is value_if_true if condition else value_if_false.

Lambda with conditional:
• lambda x: x if x > 0 else 0 creates anonymous function with conditional
• lambda keyword creates function
• x is parameter
• x if x > 0 else 0 is conditional expression
• Returns x if x > 0, else returns 0

How it works:
• lambda x: x if x > 0 else 0 creates function object
• Function takes parameter x
• Evaluates condition: x > 0
• If True: returns x
• If False: returns 0

Example:
lambda x: x if x > 0 else 0  # Conditional function
(lambda x: x if x > 0 else 0)(5)   # 5 (x > 0, returns x)
(lambda x: x if x > 0 else 0)(-5)  # 0 (x <= 0, returns 0)

Common uses:
• Conditional lambda: lambda x: x if condition else default
• Ternary in lambda: lambda x: 'big' if x > 10 else 'small'
• Conditional expressions
• Lambda with conditions

Example: lambda x: x if x > 0 else 0 creates an anonymous function with a conditional expression that returns x if x > 0, otherwise returns 0.
`
  }),
  (_i: number) => ({ 
    q: `What is (lambda x: x if x > 0 else 0)(-5)?`, 
    o: ["0", "-5", "Error", "None"], 
    c: 0, 
    e: "Lambda conditional expression evaluation.",
    de: `Lambda functions with conditional expressions evaluate the condition and return the appropriate value. (lambda x: x if x > 0 else 0)(-5) returns 0 because the lambda function lambda x: x if x > 0 else 0 is immediately called with argument -5. The condition x > 0 evaluates to False (since -5 is not greater than 0), so the else branch is taken, returning 0 instead of x.

Lambda conditional evaluation:
• (lambda x: x if x > 0 else 0)(-5) returns 0
• Lambda function created: lambda x: x if x > 0 else 0
• Immediately called with argument: (-5)
• x = -5, condition evaluated: -5 > 0 is False
• Else branch taken: returns 0 (not x)

How it works:
• (lambda x: x if x > 0 else 0)(-5) creates and calls function
• Lambda function defined: lambda x: x if x > 0 else 0
• Argument -5 passed to parameter x
• Condition evaluated: x > 0 → -5 > 0 → False
• Else branch executed: returns 0

Example:
(lambda x: x if x > 0 else 0)(-5)  # 0 (condition False, returns 0)
(lambda x: x if x > 0 else 0)(5)   # 5 (condition True, returns x)
(lambda x: x if x > 0 else 0)(0)   # 0 (condition False, returns 0)

Common uses:
• Conditional evaluation: (lambda x: x if condition else default)(value)
• Ternary in lambda: (lambda x: 'pos' if x > 0 else 'neg')(-5)
• Conditional expressions
• Lambda with conditions

Example: (lambda x: x if x > 0 else 0)(-5) returns 0 because the condition -5 > 0 is False, so the else branch is taken and 0 is returned.
`
  }),
  (_i: number) => ({ 
    q: `What is the difference between def and lambda?`, 
    o: ["def creates named function, lambda creates anonymous", "No difference", "lambda is faster", "def is deprecated"], 
    c: 0, 
    e: "def creates named function, lambda creates anonymous function.",
    de: `The key difference between def and lambda is that def creates a named function while lambda creates an anonymous function. def func(x): return x * 2 creates a function named func, while lambda x: x * 2 creates a function without a name. Additionally, def functions can contain multiple statements, while lambda functions are limited to a single expression. def is generally preferred for named functions, while lambda is useful for short, one-line functions used as arguments to other functions.

def vs lambda:
• def creates named function, lambda creates anonymous function
• def can have multiple statements, lambda limited to single expression
• def preferred for named functions, lambda for short inline functions
• def functions have names, lambda functions don't (unless assigned)
• Both create function objects

How it works:
• def func(x): return x * 2 creates function named 'func'
• lambda x: x * 2 creates anonymous function (no name)
• def can have: multiple statements, docstrings, annotations
• lambda can have: single expression only
• lambda often used as argument: map(lambda x: x*2, [1,2,3])

Example:
def func(x): return x * 2  # Named function 'func'
lambda x: x * 2            # Anonymous function (no name)
f = lambda x: x * 2        # Assigned to variable (essentially named)

Common uses:
• def: named functions, multiple statements: def process(x): ...; ...; return result
• lambda: short inline functions, single expression: map(lambda x: x*2, items)
• Function definition
• Lambda functions

Example: The difference is def creates a named function (e.g., def func(x): return x * 2 creates function 'func'), while lambda creates an anonymous function (e.g., lambda x: x * 2 creates a function without a name). def functions can contain multiple statements, while lambda functions are limited to a single expression.
`
  }),
  
  // 41-50: Return Values
  (_i: number) => ({ 
    q: `What is def func(): return 1?`, 
    o: ["Defines function returning 1", "Calls function", "Error", "None"], 
    c: 0, 
    e: "Function returns single value.",
    de: `Functions return values using the return statement. def func(): return 1 defines a function that returns the value 1 when called. The return statement immediately exits the function and sends back the specified value. Functions can return any type of value - numbers, strings, lists, dictionaries, objects, etc. If no return statement is executed, the function returns None implicitly.

Return statement:
• def func(): return 1 defines function returning 1
• return statement exits function
• Returns specified value: 1
• Function call evaluates to returned value
• Can return any type

How it works:
• def func(): creates function definition
• Function name: func
• No parameters: ()
• Body: return 1
• When called: func() returns 1

Example:
def func(): return 1
func()                      # 1 (returns 1)
result = func()             # result = 1
print(func())               # 1 (prints returned value)

Common uses:
• Returning values: def calculate(): return result
• Function results: def get_value(): return value
• Return statement
• Function return values

Example: def func(): return 1 defines a function that returns the value 1 when called. The return statement immediately exits the function and sends back the value.
`
  }),
  (_i: number) => ({ 
    q: `What is func() if def func(): return 1?`, 
    o: ["1", "None", "Error", "0"], 
    c: 0, 
    e: "Function call returns the value.",
    de: `Calling a function that returns a value evaluates to that value. If def func(): return 1, then func() returns 1 because calling the function executes the return statement, which exits the function and returns the value 1. The function call func() evaluates to the returned value, so it can be used in expressions, assigned to variables, or printed.

Function call returns value:
• func() with def func(): return 1 returns 1
• Function call evaluates to returned value
• return 1 executes when function called
• Function call becomes 1
• Can be used in expressions

How it works:
• func() calls function func
• Function executes: return 1
• return statement exits function
• Function call evaluates to returned value: 1
• Returns: 1

Example:
def func(): return 1
func()                      # 1 (returns 1)
result = func()             # result = 1
print(func())               # 1 (prints 1)
func() * 2                  # 2 (uses returned value: 1 * 2)

Common uses:
• Using return values: result = func()
• In expressions: total = calculate() + 10
• Return value usage
• Function call evaluation

Example: If def func(): return 1, then func() returns 1 because calling the function executes the return statement, which returns the value 1, and the function call evaluates to that value.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(): return 1, 2, 3?`, 
    o: ["Defines function returning tuple (1, 2, 3)", "Error", "Defines function returning three values", "None"], 
    c: 0, 
    e: "Multiple values in return create tuple.",
    de: `Returning multiple values in Python creates a tuple. def func(): return 1, 2, 3 defines a function that returns a tuple (1, 2, 3) because when you write return 1, 2, 3, Python automatically creates a tuple - the comma creates a tuple, not parentheses. This is Python's way of returning multiple values - you can unpack them when calling the function: a, b, c = func() assigns 1 to a, 2 to b, and 3 to c.

Multiple return values:
• def func(): return 1, 2, 3 defines function returning tuple
• return 1, 2, 3 creates tuple (1, 2, 3)
• Comma creates tuple (parentheses optional)
• Returns single tuple object
• Can be unpacked: a, b, c = func()

How it works:
• def func(): creates function definition
• Function name: func
• No parameters: ()
• Body: return 1, 2, 3
• Comma creates tuple: (1, 2, 3)
• When called: func() returns (1, 2, 3)

Example:
def func(): return 1, 2, 3
func()                      # (1, 2, 3) (returns tuple)
a, b, c = func()            # a=1, b=2, c=3 (unpacking)

Common uses:
• Returning multiple values: return x, y, z
• Tuple return: return (1, 2, 3) (same as return 1, 2, 3)
• Multiple value return
• Unpacking return values

Example: def func(): return 1, 2, 3 defines a function that returns a tuple (1, 2, 3). The comma creates a tuple, so return 1, 2, 3 is equivalent to return (1, 2, 3).
`
  }),
  (_i: number) => ({ 
    q: `What is func() if def func(): return 1, 2, 3?`, 
    o: ["(1, 2, 3)", "[1, 2, 3]", "Error", "None"], 
    c: 0, 
    e: "Function returns tuple of values.",
    de: `Calling a function that returns multiple values returns a tuple. If def func(): return 1, 2, 3, then func() returns (1, 2, 3) because the comma in return 1, 2, 3 creates a tuple. The function call evaluates to a tuple containing all the returned values. You can unpack this tuple: a, b, c = func() assigns each value to a variable, or you can use it as a tuple.

Function returns tuple:
• func() with def func(): return 1, 2, 3 returns (1, 2, 3)
• Multiple values in return create tuple
• Function call evaluates to tuple
• Returns single tuple object
• Can be unpacked or used as tuple

How it works:
• func() calls function func
• Function executes: return 1, 2, 3
• Comma creates tuple: (1, 2, 3)
• return statement returns tuple
• Function call evaluates to: (1, 2, 3)

Example:
def func(): return 1, 2, 3
func()                      # (1, 2, 3) (returns tuple)
a, b, c = func()            # a=1, b=2, c=3 (unpacking)
result = func()             # result = (1, 2, 3) (tuple)

Common uses:
• Returning multiple values: return x, y, z (returns tuple)
• Tuple return: result = func() (result is tuple)
• Multiple value return
• Tuple unpacking

Example: If def func(): return 1, 2, 3, then func() returns (1, 2, 3) because returning multiple values creates a tuple, and the function call evaluates to that tuple.
`
  }),
  (_i: number) => ({ 
    q: `What is a, b = func() if def func(): return 1, 2?`, 
    o: ["a=1, b=2", "Error", "a=(1,2), b=None", "None"], 
    c: 0, 
    e: "Tuple unpacking from function return.",
    de: `You can unpack multiple return values using tuple unpacking. If def func(): return 1, 2, then a, b = func() assigns 1 to a and 2 to b because func() returns a tuple (1, 2), and the assignment a, b = (1, 2) unpacks the tuple, assigning each element to the corresponding variable. This is a common pattern for functions that return multiple values - you can unpack them directly into variables.

Tuple unpacking from return:
• a, b = func() with def func(): return 1, 2 assigns a=1, b=2
• func() returns tuple (1, 2)
• a, b = (1, 2) unpacks tuple
• First element 1 assigned to a
• Second element 2 assigned to b

How it works:
• func() calls function func
• Function executes: return 1, 2
• Returns tuple: (1, 2)
• a, b = (1, 2) unpacks tuple
• a = 1, b = 2 (assigned)

Example:
def func(): return 1, 2
a, b = func()               # a=1, b=2 (unpacking)
x, y, z = func()            # ValueError (not enough values to unpack)
result = func()             # result = (1, 2) (no unpacking)

Common uses:
• Unpacking return values: a, b = func()
• Multiple assignments: x, y, z = calculate()
• Tuple unpacking
• Multiple value return

Example: If def func(): return 1, 2, then a, b = func() assigns 1 to a and 2 to b because func() returns a tuple (1, 2), which is unpacked into the variables a and b.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(): return?`, 
    o: ["Defines function returning None", "Error", "Defines function with no return", "None"], 
    c: 0, 
    e: "return without value returns None.",
    de: `A return statement without a value returns None. def func(): return defines a function that explicitly returns None. When you use return without a value, Python returns None. This is equivalent to return None or having no return statement at all - all three result in the function returning None. Explicitly using return without a value can make it clear that the function intentionally returns None.

return without value:
• def func(): return defines function returning None
• return without value returns None
• Equivalent to return None
• Equivalent to no return statement
• Function returns None

How it works:
• def func(): creates function definition
• Function name: func
• No parameters: ()
• Body: return (no value)
• When called: func() returns None
• Explicit None return

Example:
def func(): return          # Returns None
func()                      # None
def func(): return None     # Same: None
def func(): pass            # Same: None (no return)

Common uses:
• Explicit None return: def func(): return
• Clear intent: return None explicitly
• Function termination
• None return pattern

Example: def func(): return defines a function that explicitly returns None. The return statement without a value returns None, making it clear that the function intentionally returns None.
`
  }),
  (_i: number) => ({ 
    q: `What is func() if def func(): return?`, 
    o: ["None", "Error", "0", "()"], 
    c: 0, 
    e: "Function returns None when return has no value.",
    de: `Calling a function with a return statement that has no value returns None. If def func(): return, then func() returns None because the return statement without a value explicitly returns None. The function call evaluates to None, which is Python's null value. This is useful when you want to explicitly indicate that a function returns nothing meaningful.

return without value - call:
• func() with def func(): return returns None
• return without value returns None
• Function call evaluates to None
• None is Python's null value
• Explicit None return

How it works:
• func() calls function func
• Function executes: return (no value)
• return without value returns None
• Function call evaluates to None
• Returns: None

Example:
def func(): return
func()                      # None (returns None)
result = func()             # result = None
if func() is None:          # True (returns None)
    print("returned None")

Common uses:
• Explicit None return: def process(): return (returns None)
• None return: result = func() (result is None)
• Return value usage
• None return pattern

Example: If def func(): return, then func() returns None because the return statement without a value explicitly returns None, and the function call evaluates to that value.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(): pass?`, 
    o: ["Defines function returning None", "Error", "Defines function with no return", "None"], 
    c: 0, 
    e: "Function without return statement returns None.",
    de: `Functions without a return statement automatically return None. def func(): pass defines a function with an empty body (pass is a placeholder), and when called, it returns None because no return statement is executed. This is Python's default behavior - every function returns a value, and if no return statement is executed, the function returns None implicitly. This is consistent with the behavior of functions with return or return None.

Function without return:
• def func(): pass defines function returning None
• No return statement in function
• Implicitly returns None
• Default behavior in Python
• Every function returns a value

How it works:
• def func(): creates function definition
• Function name: func
• No parameters: ()
• Body: pass (placeholder, does nothing)
• When called: func() executes pass, then returns None implicitly
• Returns: None

Example:
def func(): pass            # No return, returns None
func()                      # None (implicitly returns None)
def func(): print("hi")     # No return, returns None
result = func()             # result = None (implicit return)

Common uses:
• Functions without return: def func(): body (returns None)
• Side-effect functions: def print_data(): print(x) (returns None)
• Implicit None return
• Default return behavior

Example: def func(): pass defines a function without a return statement. When called, it implicitly returns None because no return statement is executed, which is Python's default behavior.
`
  }),
  (_i: number) => ({ 
    q: `What is func() if def func(): pass?`, 
    o: ["None", "Error", "0", "()"], 
    c: 0, 
    e: "Function with pass returns None.",
    de: `Calling a function with only pass returns None. If def func(): pass, then func() returns None because the function has no return statement, so it implicitly returns None when it finishes executing. The pass statement does nothing - it's just a placeholder for syntactically valid code. When the function reaches the end without encountering a return statement, Python automatically returns None.

Function with pass - call:
• func() with def func(): pass returns None
• pass does nothing (placeholder)
• No return statement executed
• Function implicitly returns None
• Returns None

How it works:
• func() calls function func
• Function executes: pass (does nothing)
• Reaches end of function
• No return statement encountered
• Implicitly returns None
• Returns: None

Example:
def func(): pass
func()                      # None (implicitly returns None)
result = func()             # result = None
if func() is None:          # True (returns None)
    print("returned None")

Common uses:
• Empty functions: def placeholder(): pass (returns None)
• Stub functions: def todo(): pass (returns None)
• Implicit None return
• Placeholder functions

Example: If def func(): pass, then func() returns None because the function has no return statement, so when it finishes executing (after doing nothing with pass), it implicitly returns None.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(): return [1, 2, 3]?`, 
    o: ["Defines function returning list", "Error", "Defines function returning tuple", "None"], 
    c: 0, 
    e: "Function can return any type, including list.",
    de: `Functions can return any type of value, including lists. def func(): return [1, 2, 3] defines a function that returns a list [1, 2, 3] when called. The return statement can return any Python object - numbers, strings, lists, tuples, dictionaries, sets, objects, None, etc. Functions are not restricted to returning specific types - they can return whatever type is appropriate for their purpose.

Returning any type:
• def func(): return [1, 2, 3] defines function returning list
• Functions can return any type
• return can return: numbers, strings, lists, tuples, dicts, objects, None
• List [1, 2, 3] is returned
• Function call evaluates to list

How it works:
• def func(): creates function definition
• Function name: func
• No parameters: ()
• Body: return [1, 2, 3]
• Returns list object: [1, 2, 3]
• When called: func() returns [1, 2, 3]

Example:
def func(): return [1, 2, 3]
func()                      # [1, 2, 3] (returns list)
def func(): return {'a': 1} # Returns dictionary
def func(): return "hello"   # Returns string
def func(): return None      # Returns None

Common uses:
• Returning collections: def get_list(): return [1, 2, 3]
• Returning objects: def create_object(): return MyClass()
• Return any type
• Flexible return values

Example: def func(): return [1, 2, 3] defines a function that returns a list [1, 2, 3]. Functions can return any type of value - numbers, strings, lists, dictionaries, objects, etc.
`
  }),
  
  // 51-60: Function Scope and Variables
  (_i: number) => ({ 
    q: `What is x = 1; def func(): return x; func()?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "Function can access global variable.",
    de: `Functions can access global variables (variables defined outside the function). If x = 1; def func(): return x; func(), then func() returns 1 because the function can read global variables. When a function references a variable that's not defined locally, Python looks in the outer scope (global scope) and finds x = 1, so it uses that value. This is called variable lookup - Python searches from local to global scope.

Global variable access:
• x = 1; def func(): return x; func() returns 1
• x = 1 defines global variable
• func() references x (not defined locally)
• Python looks in global scope, finds x = 1
• Returns global value: 1

How it works:
• x = 1 creates global variable x = 1
• def func(): creates function definition
• Function references x (not defined in function)
• Python searches from local to global scope
• Finds x = 1 in global scope
• Returns: 1

Example:
x = 1
def func(): return x
func()                      # 1 (accesses global x)
x = 10
func()                      # 10 (still accesses global x)

Common uses:
• Reading globals: def func(): return global_var
• Global access: def calculate(): return base * rate
• Variable lookup
• Global variable access

Example: If x = 1; def func(): return x; func(), then func() returns 1 because the function can access the global variable x, and Python finds x = 1 in the global scope.
`
  }),
  (_i: number) => ({ 
    q: `What is x = 1; def func(): x = 2; return x; func()?`, 
    o: ["2", "1", "Error", "None"], 
    c: 0, 
    e: "Local assignment creates local variable.",
    de: `Assigning to a variable inside a function creates a local variable, even if a global variable with the same name exists. If x = 1; def func(): x = 2; return x; func(), then func() returns 2 because x = 2 inside the function creates a local variable x that shadows (hides) the global variable x. When the function references x, it uses the local variable x = 2, not the global x = 1. This is Python's scoping rule - assignment creates a local variable.

Local assignment:
• x = 1; def func(): x = 2; return x; func() returns 2
• x = 1 defines global variable
• x = 2 inside function creates local variable
• Local variable shadows global variable
• Function uses local x = 2
• Returns local value: 2

How it works:
• x = 1 creates global variable x = 1
• def func(): creates function definition
• x = 2 inside function creates local variable x = 2
• Local x shadows global x
• return x uses local x = 2
• Returns: 2

Example:
x = 1
def func(): x = 2; return x
func()                      # 2 (uses local x = 2)
x                           # 1 (global x unchanged)

Common uses:
• Local variables: def func(): x = value (creates local)
• Variable shadowing: local x shadows global x
• Local variable creation
• Function scoping

Example: If x = 1; def func(): x = 2; return x; func(), then func() returns 2 because assigning x = 2 inside the function creates a local variable x that shadows the global variable x, so the function uses the local x = 2.
`
  }),
  (_i: number) => ({ 
    q: `What is x = 1; def func(): x = 2; func(); x?`, 
    o: ["1", "2", "Error", "None"], 
    c: 0, 
    e: "Local assignment doesn't affect global variable.",
    de: `Assigning to a variable inside a function doesn't affect the global variable with the same name. If x = 1; def func(): x = 2; func(); x, then x returns 1 because assigning x = 2 inside the function creates a local variable x, which doesn't affect the global variable x. Local variables exist only within the function and don't modify global variables unless you use the global keyword. The global variable x remains 1.

Local doesn't affect global:
• x = 1; def func(): x = 2; func(); x returns 1
• x = 1 defines global variable x = 1
• x = 2 inside function creates local variable x = 2
• Local x doesn't affect global x
• Global x remains 1
• Returns: 1

How it works:
• x = 1 creates global variable x = 1
• def func(): creates function definition
• x = 2 inside function creates local variable x = 2
• func() executes (local x = 2, doesn't affect global)
• func() returns (local x destroyed)
• x evaluates global x = 1
• Returns: 1

Example:
x = 1
def func(): x = 2  # Creates local x = 2
func()                      # Local x = 2 (doesn't affect global)
x                           # 1 (global x unchanged)

Common uses:
• Understanding scope: local variables don't affect globals
• Variable independence: def func(): local = value (independent)
• Local vs global
• Variable scoping

Example: If x = 1; def func(): x = 2; func(); x, then x returns 1 because assigning x = 2 inside the function creates a local variable that doesn't affect the global variable x, which remains 1.
`
  }),
  (_i: number) => ({ 
    q: `What is x = 1; def func(): global x; x = 2; func(); x?`, 
    o: ["2", "1", "Error", "None"], 
    c: 0, 
    e: "global keyword allows modifying global variable.",
    de: `The global keyword allows a function to modify a global variable. If x = 1; def func(): global x; x = 2; func(); x, then x returns 2 because the global keyword tells Python that x inside the function refers to the global variable x, not a local variable. When you assign x = 2 inside the function, it modifies the global variable x, changing it from 1 to 2. Without the global keyword, assignment would create a local variable instead.

global keyword:
• x = 1; def func(): global x; x = 2; func(); x returns 2
• global x tells Python to use global variable x
• x = 2 inside function modifies global x
• Global x changed from 1 to 2
• Returns: 2

How it works:
• x = 1 creates global variable x = 1
• def func(): creates function definition
• global x tells Python x refers to global variable
• x = 2 inside function modifies global x
• func() executes (global x becomes 2)
• x evaluates global x = 2
• Returns: 2

Example:
x = 1
def func(): global x; x = 2  # Modifies global x
func()                      # Global x becomes 2
x                           # 2 (global x modified)

Common uses:
• Modifying globals: def func(): global var; var = new_value
• Global modification: def update(): global counter; counter += 1
• global keyword
• Global variable modification

Example: If x = 1; def func(): global x; x = 2; func(); x, then x returns 2 because the global keyword tells Python to use the global variable x, so assigning x = 2 inside the function modifies the global variable, changing it from 1 to 2.
`
  }),
  (_i: number) => ({ 
    q: `What is def outer(): x = 1; def inner(): return x; return inner(); outer()?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "Inner function can access outer function's variables (closure).",
    de: `Inner functions (nested functions) can access variables from outer functions. If def outer(): x = 1; def inner(): return x; return inner(); outer(), then outer() returns 1 because the inner function inner() can access the outer function's local variable x = 1. This is called a closure - the inner function "closes over" the outer function's variables, allowing it to access them even after the outer function has finished executing (if the inner function is returned).

Closure - inner accesses outer:
• def outer(): x = 1; def inner(): return x; return inner(); outer() returns 1
• outer() defines local variable x = 1
• inner() is defined inside outer()
• inner() can access outer()'s local variable x
• inner() returns x = 1
• outer() returns inner()'s result: 1

How it works:
• outer() creates function definition
• outer() defines local variable x = 1
• inner() is defined inside outer()
• inner() references x (not defined in inner())
• Python searches outer scope, finds x = 1 in outer()
• inner() returns x = 1
• outer() returns inner()'s result: 1

Example:
def outer():
    x = 1
    def inner(): return x
    return inner()
outer()                      # 1 (inner accesses outer's x)

Common uses:
• Nested functions: def outer(): x = value; def inner(): use x
• Closures: def factory(x): def inner(): return x; return inner
• Variable access
• Closure behavior

Example: If def outer(): x = 1; def inner(): return x; return inner(); outer(), then outer() returns 1 because the inner function inner() can access the outer function's local variable x = 1, which is called a closure.
`
  }),
  (_i: number) => ({ 
    q: `What is def outer(x): def inner(): return x; return inner; f = outer(5); f()?`, 
    o: ["5", "Error", "None", "0"], 
    c: 0, 
    e: "Closure captures outer function's parameter.",
    de: `Closures can capture outer function parameters, allowing the inner function to access them even after the outer function returns. If def outer(x): def inner(): return x; return inner; f = outer(5); f(), then f() returns 5 because outer(5) creates a closure where the inner function inner() captures the outer function's parameter x = 5. When inner is returned and assigned to f, it still "remembers" the value of x = 5, so calling f() returns 5. This is a powerful feature that allows functions to "remember" their environment.

Closure captures parameter:
• def outer(x): def inner(): return x; return inner; f = outer(5); f() returns 5
• outer(5) creates closure with x = 5
• inner() captures x = 5 from outer function
• inner returned and assigned to f
• f() calls inner(), which returns captured x = 5
• Returns: 5

How it works:
• outer(5) calls outer function with x = 5
• outer() defines inner() that references x
• inner() captures x = 5 from outer function
• outer() returns inner function object
• f = inner (inner function assigned to f)
• f() calls inner(), which returns captured x = 5
• Returns: 5

Example:
def outer(x): def inner(): return x; return inner
f = outer(5)                  # f is inner function that captured x = 5
f()                          # 5 (returns captured x = 5)
g = outer(10)                 # g is inner function that captured x = 10
g()                          # 10 (returns captured x = 10)

Common uses:
• Factory functions: def make_multiplier(n): return lambda x: x * n
• Closures: def create_closure(x): def inner(): return x; return inner
• Parameter capture
• Closure behavior

Example: If def outer(x): def inner(): return x; return inner; f = outer(5); f(), then f() returns 5 because the inner function inner() captures the outer function's parameter x = 5 in a closure, so when f() is called, it returns the captured value 5.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(): x = 1; return x; func(); x?`, 
    o: ["NameError", "1", "Error", "None"], 
    c: 0, 
    e: "Local variable not accessible outside function.",
    de: `Local variables (variables defined inside a function) are not accessible outside the function. If def func(): x = 1; return x; func(); x, then x raises a NameError because x is a local variable defined inside func(), and local variables only exist within the function where they're defined. Once the function returns, local variables are destroyed and cannot be accessed from outside the function. This is Python's scoping rule - local variables have local scope only.

Local variable scope:
• def func(): x = 1; return x; func(); x raises NameError
• x = 1 inside function creates local variable x
• Local variables only exist inside function
• After func() returns, local x is destroyed
• x outside function raises NameError (x not defined)
• Error: NameError: name 'x' is not defined

How it works:
• def func(): creates function definition
• x = 1 inside function creates local variable x = 1
• func() executes: returns 1, local x destroyed
• x outside function tries to access x
• x not defined in global scope
• Raises NameError

Example:
def func(): x = 1; return x
func()                      # 1 (returns local x)
x                           # NameError: name 'x' is not defined

Common uses:
• Understanding scope: local variables not accessible outside
• Variable lifetime: local vars destroyed after function returns
• Local vs global
• Variable scoping

Example: If def func(): x = 1; return x; func(); x, then x raises a NameError because x is a local variable defined inside func(), and local variables are not accessible outside the function where they're defined.
`
  }),
  (_i: number) => ({ 
    q: `What is x = 1; def func(y): return x + y; func(2)?`, 
    o: ["3", "1", "2", "Error"], 
    c: 0, 
    e: "Function can access global and use parameter.",
    de: `Functions can access both global variables and function parameters. If x = 1; def func(y): return x + y; func(2), then func(2) returns 3 because the function accesses the global variable x = 1 and uses the parameter y = 2, returning x + y = 1 + 2 = 3. Functions can reference variables from different scopes - they can use global variables (like x) and function parameters (like y) in the same expression.

Global and parameter:
• x = 1; def func(y): return x + y; func(2) returns 3
• x = 1 defines global variable
• func(y) has parameter y
• func(2) passes y = 2
• return x + y uses global x = 1 and parameter y = 2
• Returns 1 + 2 = 3

How it works:
• x = 1 creates global variable x = 1
• def func(y): creates function with parameter y
• func(2) calls function with y = 2
• return x + y references global x = 1 and parameter y = 2
• Evaluates: 1 + 2 = 3
• Returns: 3

Example:
x = 1
def func(y): return x + y
func(2)                      # 3 (global x=1 + parameter y=2)
func(5)                      # 6 (global x=1 + parameter y=5)

Common uses:
• Using globals and parameters: def calculate(y): return global_var + y
• Mixed scope access: def process(param): return base + param
• Global and parameter access
• Variable scoping

Example: If x = 1; def func(y): return x + y; func(2), then func(2) returns 3 because the function accesses the global variable x = 1 and uses the parameter y = 2, returning 1 + 2 = 3.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(): x = x + 1; return x; func()?`, 
    o: ["UnboundLocalError", "1", "Error", "None"], 
    c: 0, 
    e: "Assignment to x makes it local, can't read before assignment.",
    de: `Assigning to a variable inside a function makes it local, which prevents reading it before assignment. If def func(): x = x + 1; return x; func(), then func() raises an UnboundLocalError because x = x + 1 assigns to x, making it a local variable, but x is referenced on the right side (x + 1) before it's assigned, so Python raises an error. Python determines that x is local because of the assignment, but then tries to read x before it's been assigned a value, causing the error.

UnboundLocalError:
• def func(): x = x + 1; return x; func() raises UnboundLocalError
• x = x + 1 assigns to x (makes x local)
• Python determines x is local variable
• Tries to read x in x + 1 before assignment
• x not yet assigned (unbound)
• Raises UnboundLocalError

How it works:
• def func(): creates function definition
• x = x + 1 assigns to x (makes x local)
• Python determines x is local (because of assignment)
• Tries to evaluate x + 1 (reads x)
• x is local but not yet assigned
• Raises UnboundLocalError: local variable 'x' referenced before assignment

Example:
def func(): x = x + 1; return x
func()                      # UnboundLocalError
# Fix: def func(): global x; x = x + 1; return x

Common uses:
• Understanding error: assignment makes variable local
• Fixing error: use global keyword if modifying global
• Local variable binding
• UnboundLocalError

Example: If def func(): x = x + 1; return x; func(), then func() raises an UnboundLocalError because assigning x = x + 1 makes x local, but then x is referenced in x + 1 before it's assigned, so Python raises an error. To fix, use global x if you want to modify a global variable.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(): return len([1, 2, 3]); func()?`, 
    o: ["3", "Error", "None", "0"], 
    c: 0, 
    e: "Function can call built-in functions.",
    de: `Functions can call built-in functions just like any other code. If def func(): return len([1, 2, 3]); func(), then func() returns 3 because the function calls the built-in len() function with [1, 2, 3], which returns 3 (the length of the list). Functions have access to all built-in functions (like len, print, range, etc.) and can call them just like they can call other functions. Built-in functions are available in all scopes.

Built-in function call:
• def func(): return len([1, 2, 3]); func() returns 3
• Function can call built-in functions
• len([1, 2, 3]) called inside function
• len() returns 3 (length of list)
• Function returns 3

How it works:
• def func(): creates function definition
• Function name: func
• No parameters: ()
• Body: return len([1, 2, 3])
• len([1, 2, 3]) called, returns 3
• Function returns 3

Example:
def func(): return len([1, 2, 3])
func()                      # 3 (returns len result)
def func(): return sum([1, 2, 3])  # Returns 6
def func(): return max([1, 2, 3])  # Returns 3

Common uses:
• Built-in usage: def func(): return len(data)
• Function composition: def process(): return sorted(items)
• Built-in function access
• Function capabilities

Example: If def func(): return len([1, 2, 3]); func(), then func() returns 3 because the function calls the built-in len() function with [1, 2, 3], which returns 3, and the function returns that value.
`
  }),
  
  // 61-70: Recursion
  (_i: number) => ({ 
    q: `What is def fact(n): return 1 if n <= 1 else n * fact(n-1); fact(5)?`, 
    o: ["120", "5", "Error", "None"], 
    c: 0, 
    e: "Recursive function calls itself.",
    de: `A recursive function calls itself to solve a problem. If def fact(n): return 1 if n <= 1 else n * fact(n-1); fact(5), then fact(5) returns 120 because fact(5) calls fact(4), which calls fact(3), which calls fact(2), which calls fact(1), which returns 1 (base case). Then each call multiplies by n: 1 * 2 * 3 * 4 * 5 = 120. Recursion breaks a problem into smaller subproblems of the same type, with a base case that stops the recursion.

Recursive function:
• def fact(n): return 1 if n <= 1 else n * fact(n-1); fact(5) returns 120
• fact(5) calls fact(4), which calls fact(3), etc.
• Base case: n <= 1 returns 1 (stops recursion)
• Recursive case: n * fact(n-1) (calls itself)
• Evaluates: 5 * 4 * 3 * 2 * 1 = 120

How it works:
• fact(5) calls fact(4): 5 * fact(4)
• fact(4) calls fact(3): 4 * fact(3)
• fact(3) calls fact(2): 3 * fact(2)
• fact(2) calls fact(1): 2 * fact(1)
• fact(1) returns 1 (base case: n <= 1)
• Unwinds: 2 * 1 = 2, 3 * 2 = 6, 4 * 6 = 24, 5 * 24 = 120
• Returns: 120

Example:
def fact(n): return 1 if n <= 1 else n * fact(n-1)
fact(5)                      # 120 (5 * 4 * 3 * 2 * 1)
fact(3)                      # 6 (3 * 2 * 1)
fact(1)                      # 1 (base case)

Common uses:
• Recursive algorithms: def factorial(n): return base if condition else recursive
• Divide and conquer: def solve(problem): return solve(smaller_problem)
• Recursive functions
• Problem decomposition

Example: If def fact(n): return 1 if n <= 1 else n * fact(n-1); fact(5), then fact(5) returns 120 because the recursive function calls itself with decreasing values until it reaches the base case (n <= 1), then multiplies all values together: 5 * 4 * 3 * 2 * 1 = 120.
`
  }),
  (_i: number) => ({ 
    q: `What is def fib(n): return n if n < 2 else fib(n-1) + fib(n-2); fib(5)?`, 
    o: ["5", "8", "Error", "None"], 
    c: 0, 
    e: "Recursive Fibonacci function.",
    de: `The Fibonacci sequence is computed recursively where each number is the sum of the two preceding ones. If def fib(n): return n if n < 2 else fib(n-1) + fib(n-2); fib(5), then fib(5) returns 5 because fib(5) = fib(4) + fib(3), which expands further. The base case is n < 2, which returns n (fib(0) = 0, fib(1) = 1). The recursive case computes fib(n) = fib(n-1) + fib(n-2). Note: fib(5) actually returns 5 (the 5th Fibonacci number), not 8.

Recursive Fibonacci:
• def fib(n): return n if n < 2 else fib(n-1) + fib(n-2); fib(5) returns 5
• Base case: n < 2 returns n (fib(0) = 0, fib(1) = 1)
• Recursive case: fib(n-1) + fib(n-2) (sum of previous two)
• fib(5) = fib(4) + fib(3), expands recursively
• Evaluates: 0, 1, 1, 2, 3, 5

How it works:
• fib(5) calls fib(4) + fib(3)
• fib(4) calls fib(3) + fib(2)
• fib(3) calls fib(2) + fib(1)
• fib(2) calls fib(1) + fib(0) = 1 + 0 = 1
• Unwinds: fib(3) = 2, fib(4) = 3, fib(5) = 5
• Returns: 5

Example:
def fib(n): return n if n < 2 else fib(n-1) + fib(n-2)
fib(5)                      # 5 (5th Fibonacci number)
fib(6)                      # 8 (6th Fibonacci number)
fib(0)                      # 0 (base case)

Common uses:
• Recursive sequences: def fibonacci(n): return base if condition else recursive
• Mathematical sequences: fib(n) = fib(n-1) + fib(n-2)
• Recursive algorithms
• Fibonacci sequence

Example: If def fib(n): return n if n < 2 else fib(n-1) + fib(n-2); fib(5), then fib(5) returns 5 because the recursive Fibonacci function computes the 5th Fibonacci number (0, 1, 1, 2, 3, 5) by summing the previous two Fibonacci numbers.
`
  }),
  (_i: number) => ({ 
    q: `What is def count(n): return 0 if n <= 0 else 1 + count(n-1); count(5)?`, 
    o: ["5", "0", "Error", "None"], 
    c: 0, 
    e: "Recursive counting function.",
    de: `A recursive counting function counts from n down to 1. If def count(n): return 0 if n <= 0 else 1 + count(n-1); count(5), then count(5) returns 5 because count(5) = 1 + count(4) = 1 + (1 + count(3)) = ... = 1 + 1 + 1 + 1 + 1 + 0 = 5. The base case is n <= 0, which returns 0 (stops counting). The recursive case returns 1 plus the count of the next smaller number, effectively counting how many numbers from n down to 1.

Recursive counting:
• def count(n): return 0 if n <= 0 else 1 + count(n-1); count(5) returns 5
• Base case: n <= 0 returns 0 (stops counting)
• Recursive case: 1 + count(n-1) (adds 1 for each number)
• count(5) = 1 + count(4) = 1 + 1 + count(3) = ...
• Evaluates: 1 + 1 + 1 + 1 + 1 + 0 = 5

How it works:
• count(5) calls 1 + count(4)
• count(4) calls 1 + count(3)
• count(3) calls 1 + count(2)
• count(2) calls 1 + count(1)
• count(1) calls 1 + count(0)
• count(0) returns 0 (base case: n <= 0)
• Unwinds: 1 + 0 = 1, 1 + 1 = 2, 1 + 2 = 3, 1 + 3 = 4, 1 + 4 = 5
• Returns: 5

Example:
def count(n): return 0 if n <= 0 else 1 + count(n-1)
count(5)                     # 5 (counts 5 numbers)
count(10)                    # 10 (counts 10 numbers)
count(0)                     # 0 (base case)

Common uses:
• Recursive counting: def count(n): return base if condition else 1 + recursive
• Counting sequences: def count_down(n): return count(n)
• Recursive algorithms
• Counting functions

Example: If def count(n): return 0 if n <= 0 else 1 + count(n-1); count(5), then count(5) returns 5 because the recursive function counts from 5 down to 1, adding 1 for each number: 1 + 1 + 1 + 1 + 1 + 0 = 5.
`
  }),
  (_i: number) => ({ 
    q: `What is def sum_list(lst): return 0 if not lst else lst[0] + sum_list(lst[1:]); sum_list([1,2,3])?`, 
    o: ["6", "3", "Error", "None"], 
    c: 0, 
    e: "Recursive function summing list elements.",
    de: `A recursive function can sum list elements by adding the first element to the sum of the rest. If def sum_list(lst): return 0 if not lst else lst[0] + sum_list(lst[1:]); sum_list([1,2,3]), then sum_list([1,2,3]) returns 6 because sum_list([1,2,3]) = 1 + sum_list([2,3]) = 1 + (2 + sum_list([3])) = 1 + 2 + (3 + sum_list([])) = 1 + 2 + 3 + 0 = 6. The base case is an empty list, which returns 0. The recursive case adds the first element to the sum of the remaining list.

Recursive sum:
• def sum_list(lst): return 0 if not lst else lst[0] + sum_list(lst[1:]); sum_list([1,2,3]) returns 6
• Base case: not lst returns 0 (empty list)
• Recursive case: lst[0] + sum_list(lst[1:]) (first + sum of rest)
• sum_list([1,2,3]) = 1 + sum_list([2,3])
• Evaluates: 1 + 2 + 3 + 0 = 6

How it works:
• sum_list([1,2,3]) calls 1 + sum_list([2,3])
• sum_list([2,3]) calls 2 + sum_list([3])
• sum_list([3]) calls 3 + sum_list([])
• sum_list([]) returns 0 (base case: empty list)
• Unwinds: 3 + 0 = 3, 2 + 3 = 5, 1 + 5 = 6
• Returns: 6

Example:
def sum_list(lst): return 0 if not lst else lst[0] + sum_list(lst[1:])
sum_list([1,2,3])           # 6 (1 + 2 + 3)
sum_list([10, 20])          # 30 (10 + 20)
sum_list([])                # 0 (base case)

Common uses:
• Recursive sum: def sum_list(lst): return base if empty else first + recursive
• List processing: def process(lst): return process(lst[1:])
• Recursive algorithms
• List reduction

Example: If def sum_list(lst): return 0 if not lst else lst[0] + sum_list(lst[1:]); sum_list([1,2,3]), then sum_list([1,2,3]) returns 6 because the recursive function sums list elements by adding the first element to the sum of the rest: 1 + 2 + 3 = 6.
`
  }),
  (_i: number) => ({ 
    q: `What is def power(x, n): return 1 if n == 0 else x * power(x, n-1); power(2, 3)?`, 
    o: ["8", "6", "Error", "None"], 
    c: 0, 
    e: "Recursive power function.",
    de: `A recursive power function computes x raised to the power n by multiplying x by x raised to the power (n-1). If def power(x, n): return 1 if n == 0 else x * power(x, n-1); power(2, 3), then power(2, 3) returns 8 because power(2, 3) = 2 * power(2, 2) = 2 * (2 * power(2, 1)) = 2 * 2 * (2 * power(2, 0)) = 2 * 2 * 2 * 1 = 8. The base case is n == 0, which returns 1 (any number to the power 0 is 1). The recursive case multiplies x by power(x, n-1).

Recursive power:
• def power(x, n): return 1 if n == 0 else x * power(x, n-1); power(2, 3) returns 8
• Base case: n == 0 returns 1 (x^0 = 1)
• Recursive case: x * power(x, n-1) (multiply x by x^(n-1))
• power(2, 3) = 2 * power(2, 2) = 2 * 2 * power(2, 1) = 2 * 2 * 2 * 1
• Evaluates: 2 * 2 * 2 * 1 = 8

How it works:
• power(2, 3) calls 2 * power(2, 2)
• power(2, 2) calls 2 * power(2, 1)
• power(2, 1) calls 2 * power(2, 0)
• power(2, 0) returns 1 (base case: n == 0)
• Unwinds: 2 * 1 = 2, 2 * 2 = 4, 2 * 4 = 8
• Returns: 8

Example:
def power(x, n): return 1 if n == 0 else x * power(x, n-1)
power(2, 3)                  # 8 (2^3 = 8)
power(3, 2)                  # 9 (3^2 = 9)
power(5, 0)                  # 1 (base case: 5^0 = 1)

Common uses:
• Recursive power: def power(x, n): return base if condition else x * recursive
• Mathematical operations: x^n = x * x^(n-1)
• Recursive algorithms
• Power computation

Example: If def power(x, n): return 1 if n == 0 else x * power(x, n-1); power(2, 3), then power(2, 3) returns 8 because the recursive function computes x^n by multiplying x by x^(n-1) until reaching the base case (n == 0): 2 * 2 * 2 * 1 = 8.
`
  }),
  (_i: number) => ({ 
    q: `What happens if recursive function has no base case?`, 
    o: ["RecursionError (infinite recursion)", "Returns None", "Returns 0", "Error"], 
    c: 0, 
    e: "Missing base case causes infinite recursion.",
    de: `A recursive function without a base case causes infinite recursion, which eventually raises a RecursionError. If a recursive function has no base case (no condition that stops the recursion), it will call itself forever, each call creating a new function call on the call stack. Python has a recursion limit (usually around 1000), so after a certain number of recursive calls, Python raises a RecursionError to prevent stack overflow and program crash. Every recursive function must have a base case that stops the recursion.

Infinite recursion:
• Recursive function without base case causes infinite recursion
• Function calls itself forever
• Each call creates new function call on stack
• Stack grows until recursion limit reached
• Raises RecursionError (prevents stack overflow)

How it works:
• Recursive function calls itself
• No base case to stop recursion
• Function keeps calling itself: func() → func() → func() → ...
• Call stack grows: func() → func() → func() → ...
• Recursion limit reached (usually ~1000)
• Raises RecursionError: maximum recursion depth exceeded

Example:
def func(): return func()  # No base case!
func()                      # RecursionError (infinite recursion)
# Fix: def func(n): return n if n <= 0 else func(n-1)

Common uses:
• Understanding recursion: always need base case
• Preventing errors: ensure base case exists
• Recursion limits
• Stack overflow prevention

Example: A recursive function without a base case causes infinite recursion, which eventually raises a RecursionError because Python has a recursion limit to prevent stack overflow. Every recursive function must have a base case that stops the recursion.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(): return func(); func()?`, 
    o: ["RecursionError", "None", "Error", "0"], 
    c: 0, 
    e: "Infinite recursion without base case.",
    de: `A recursive function that calls itself without a base case causes infinite recursion. If def func(): return func(); func(), then func() raises a RecursionError because func() calls func(), which calls func(), which calls func(), etc., with no condition to stop. Each recursive call adds a new frame to the call stack. When the recursion limit is reached (usually around 1000), Python raises a RecursionError: maximum recursion depth exceeded. This is a common error when writing recursive functions without proper base cases.

Infinite recursion example:
• def func(): return func(); func() raises RecursionError
• func() calls func() (no base case)
• func() calls func() again (no base case)
• Continues forever: func() → func() → func() → ...
• Call stack grows until limit reached
• Raises RecursionError

How it works:
• func() calls function func
• Function executes: return func()
• Calls func() again (recursive call)
• func() calls func() again (recursive call)
• Continues: func() → func() → func() → ...
• Recursion limit reached (~1000)
• Raises RecursionError: maximum recursion depth exceeded

Example:
def func(): return func()  # No base case!
func()                      # RecursionError: maximum recursion depth exceeded
# Fix: def func(n): return n if n <= 0 else func(n-1)

Common uses:
• Understanding recursion errors: need base case
• Debugging recursion: check for base case
• Recursion limits
• Infinite recursion prevention

Example: If def func(): return func(); func(), then func() raises a RecursionError because the function calls itself infinitely without a base case to stop the recursion, eventually hitting Python's recursion limit.
`
  }),
  (_i: number) => ({ 
    q: `What is def reverse(s): return '' if not s else reverse(s[1:]) + s[0]; reverse('abc')?`, 
    o: ["'cba'", "'abc'", "Error", "None"], 
    c: 0, 
    e: "Recursive string reversal.",
    de: `A recursive function can reverse a string by taking the reverse of the rest and appending the first character. If def reverse(s): return '' if not s else reverse(s[1:]) + s[0]; reverse('abc'), then reverse('abc') returns 'cba' because reverse('abc') = reverse('bc') + 'a' = (reverse('c') + 'b') + 'a' = ((reverse('') + 'c') + 'b') + 'a' = ('' + 'c' + 'b') + 'a' = 'cba'. The base case is an empty string, which returns ''. The recursive case reverses the substring (s[1:]) and appends the first character (s[0]).

Recursive string reversal:
• def reverse(s): return '' if not s else reverse(s[1:]) + s[0]; reverse('abc') returns 'cba'
• Base case: not s returns '' (empty string)
• Recursive case: reverse(s[1:]) + s[0] (reverse rest + first char)
• reverse('abc') = reverse('bc') + 'a' = reverse('c') + 'b' + 'a' = ...
• Evaluates: '' + 'c' + 'b' + 'a' = 'cba'

How it works:
• reverse('abc') calls reverse('bc') + 'a'
• reverse('bc') calls reverse('c') + 'b'
• reverse('c') calls reverse('') + 'c'
• reverse('') returns '' (base case: empty string)
• Unwinds: '' + 'c' = 'c', 'c' + 'b' = 'cb', 'cb' + 'a' = 'cba'
• Returns: 'cba'

Example:
def reverse(s): return '' if not s else reverse(s[1:]) + s[0]
reverse('abc')               # 'cba' (reversed)
reverse('hello')             # 'olleh' (reversed)
reverse('')                  # '' (base case)

Common uses:
• Recursive reversal: def reverse(s): return base if empty else recursive + first
• String processing: def process(s): return process(s[1:]) + transform(s[0])
• Recursive algorithms
• String manipulation

Example: If def reverse(s): return '' if not s else reverse(s[1:]) + s[0]; reverse('abc'), then reverse('abc') returns 'cba' because the recursive function reverses the string by reversing the rest and appending the first character: '' + 'c' + 'b' + 'a' = 'cba'.
`
  }),
  (_i: number) => ({ 
    q: `What is def gcd(a, b): return a if b == 0 else gcd(b, a % b); gcd(48, 18)?`, 
    o: ["6", "48", "18", "Error"], 
    c: 0, 
    e: "Recursive greatest common divisor (Euclidean algorithm).",
    de: `The Euclidean algorithm computes the greatest common divisor (GCD) recursively. If def gcd(a, b): return a if b == 0 else gcd(b, a % b); gcd(48, 18), then gcd(48, 18) returns 6 because gcd(48, 18) = gcd(18, 48 % 18) = gcd(18, 12) = gcd(12, 18 % 12) = gcd(12, 6) = gcd(6, 12 % 6) = gcd(6, 0) = 6. The base case is b == 0, which returns a (the GCD). The recursive case computes gcd(b, a % b), where a % b is the remainder when a is divided by b.

Recursive GCD (Euclidean algorithm):
• def gcd(a, b): return a if b == 0 else gcd(b, a % b); gcd(48, 18) returns 6
• Base case: b == 0 returns a (GCD found)
• Recursive case: gcd(b, a % b) (GCD of b and remainder)
• gcd(48, 18) = gcd(18, 12) = gcd(12, 6) = gcd(6, 0) = 6
• Evaluates: GCD of 48 and 18 is 6

How it works:
• gcd(48, 18) calls gcd(18, 48 % 18) = gcd(18, 12)
• gcd(18, 12) calls gcd(12, 18 % 12) = gcd(12, 6)
• gcd(12, 6) calls gcd(6, 12 % 6) = gcd(6, 0)
• gcd(6, 0) returns 6 (base case: b == 0)
• Returns: 6

Example:
def gcd(a, b): return a if b == 0 else gcd(b, a % b)
gcd(48, 18)                 # 6 (GCD of 48 and 18)
gcd(100, 25)                # 25 (GCD of 100 and 25)
gcd(17, 13)                 # 1 (GCD of 17 and 13)

Common uses:
• Recursive GCD: def gcd(a, b): return a if b == 0 else gcd(b, a % b)
• Euclidean algorithm: GCD(a, b) = GCD(b, a % b)
• Recursive algorithms
• Mathematical algorithms

Example: If def gcd(a, b): return a if b == 0 else gcd(b, a % b); gcd(48, 18), then gcd(48, 18) returns 6 because the recursive Euclidean algorithm computes the GCD by repeatedly taking the GCD of b and the remainder (a % b) until b becomes 0, at which point a is the GCD.
`
  }),
  (_i: number) => ({ 
    q: `What is def length(lst): return 0 if not lst else 1 + length(lst[1:]); length([1,2,3])?`, 
    o: ["3", "0", "Error", "None"], 
    c: 0, 
    e: "Recursive function calculating list length.",
    de: `A recursive function can calculate list length by adding 1 for each element. If def length(lst): return 0 if not lst else 1 + length(lst[1:]); length([1,2,3]), then length([1,2,3]) returns 3 because length([1,2,3]) = 1 + length([2,3]) = 1 + (1 + length([3])) = 1 + 1 + (1 + length([])) = 1 + 1 + 1 + 0 = 3. The base case is an empty list, which returns 0 (length 0). The recursive case adds 1 for the first element and recursively computes the length of the rest of the list.

Recursive length:
• def length(lst): return 0 if not lst else 1 + length(lst[1:]); length([1,2,3]) returns 3
• Base case: not lst returns 0 (empty list length 0)
• Recursive case: 1 + length(lst[1:]) (add 1 for first, length of rest)
• length([1,2,3]) = 1 + length([2,3]) = 1 + 1 + length([3]) = 1 + 1 + 1 + 0
• Evaluates: 1 + 1 + 1 + 0 = 3

How it works:
• length([1,2,3]) calls 1 + length([2,3])
• length([2,3]) calls 1 + length([3])
• length([3]) calls 1 + length([])
• length([]) returns 0 (base case: empty list)
• Unwinds: 1 + 0 = 1, 1 + 1 = 2, 1 + 2 = 3
• Returns: 3

Example:
def length(lst): return 0 if not lst else 1 + length(lst[1:])
length([1,2,3])             # 3 (length of list)
length([10, 20, 30, 40])    # 4 (length of list)
length([])                  # 0 (base case)

Common uses:
• Recursive length: def length(lst): return base if empty else 1 + recursive
• List processing: def process(lst): return process(lst[1:])
• Recursive algorithms
• List reduction

Example: If def length(lst): return 0 if not lst else 1 + length(lst[1:]); length([1,2,3]), then length([1,2,3]) returns 3 because the recursive function counts list elements by adding 1 for the first element and recursively computing the length of the rest: 1 + 1 + 1 + 0 = 3.
`
  }),
  
  // 71-80: Higher-Order Functions
  (_i: number) => ({ 
    q: `What is def apply(func, x): return func(x); apply(lambda x: x*2, 5)?`, 
    o: ["10", "5", "Error", "None"], 
    c: 0, 
    e: "Function that takes another function as parameter.",
    de: `A higher-order function is a function that takes another function as a parameter. If def apply(func, x): return func(x); apply(lambda x: x*2, 5), then apply(lambda x: x*2, 5) returns 10 because apply() is a higher-order function that takes func (a function) as its first parameter and x (a value) as its second parameter, then calls func(x). In this case, it calls lambda x: x*2 with argument 5, which returns 5 * 2 = 10.

Higher-order function:
• def apply(func, x): return func(x); apply(lambda x: x*2, 5) returns 10
• apply() takes function func as parameter
• Takes value x as parameter
• Calls func(x) inside apply()
• Higher-order function (function that takes function)
• Returns result of func(x)

How it works:
• apply(lambda x: x*2, 5) calls function apply
• First argument: lambda x: x*2 (function object)
• Second argument: 5 (value)
• apply() calls func(x): (lambda x: x*2)(5)
• Lambda evaluates: 5 * 2 = 10
• Returns: 10

Example:
def apply(func, x): return func(x)
apply(lambda x: x*2, 5)     # 10 (applies function to value)
apply(lambda x: x**2, 3)    # 9 (applies function to value)
apply(len, 'hello')          # 5 (applies len to string)

Common uses:
• Higher-order functions: def apply(func, x): return func(x)
• Function application: def map(func, items): return [func(x) for x in items]
• Function as parameter
• Higher-order functions

Example: If def apply(func, x): return func(x); apply(lambda x: x*2, 5), then apply(lambda x: x*2, 5) returns 10 because apply() is a higher-order function that takes a function as a parameter and calls it with the value: (lambda x: x*2)(5) = 10.
`
  }),
  (_i: number) => ({ 
    q: `What is def make_multiplier(n): return lambda x: x * n; f = make_multiplier(3); f(4)?`, 
    o: ["12", "3", "4", "Error"], 
    c: 0, 
    e: "Function that returns a function (factory function).",
    de: `A factory function is a function that returns another function. If def make_multiplier(n): return lambda x: x * n; f = make_multiplier(3); f(4), then f(4) returns 12 because make_multiplier(3) returns a lambda function that captures the value n = 3 from the outer function, creating a closure. The returned function f multiplies its argument by 3, so f(4) returns 4 * 3 = 12. This is a common pattern for creating specialized functions.

Factory function:
• def make_multiplier(n): return lambda x: x * n; f = make_multiplier(3); f(4) returns 12
• make_multiplier(3) returns function that captures n = 3
• Returned function multiplies argument by 3
• f = make_multiplier(3) assigns returned function to f
• f(4) calls returned function with 4
• Returns: 4 * 3 = 12

How it works:
• make_multiplier(3) calls function make_multiplier
• Parameter n = 3
• Returns lambda x: x * n (captures n = 3)
• f = lambda x: x * 3 (assigned to f)
• f(4) calls lambda with x = 4
• Evaluates: 4 * 3 = 12
• Returns: 12

Example:
def make_multiplier(n): return lambda x: x * n
f = make_multiplier(3)      # f is lambda x: x * 3
f(4)                        # 12 (4 * 3)
g = make_multiplier(5)      # g is lambda x: x * 5
g(4)                        # 20 (4 * 5)

Common uses:
• Factory functions: def make_adder(n): return lambda x: x + n
• Function factories: def create_function(n): return lambda x: f(x, n)
• Closure creation
• Specialized functions

Example: If def make_multiplier(n): return lambda x: x * n; f = make_multiplier(3); f(4), then f(4) returns 12 because make_multiplier(3) returns a lambda function that captures n = 3 in a closure, creating a function that multiplies its argument by 3: 4 * 3 = 12.
`
  }),
  (_i: number) => ({ 
    q: `What is def compose(f, g): return lambda x: f(g(x)); compose(lambda x: x+1, lambda x: x*2)(3)?`, 
    o: ["7", "6", "8", "Error"], 
    c: 0, 
    e: "Function composition: f(g(x)).",
    de: `Function composition combines two functions into one. If def compose(f, g): return lambda x: f(g(x)); compose(lambda x: x+1, lambda x: x*2)(3), then compose(lambda x: x+1, lambda x: x*2)(3) returns 7 because compose() creates a new function that applies g first, then applies f to the result. So it evaluates g(3) = 3 * 2 = 6, then f(6) = 6 + 1 = 7. Function composition is a fundamental concept in functional programming: f(g(x)) means "apply g, then apply f to the result".

Function composition:
• def compose(f, g): return lambda x: f(g(x)); compose(lambda x: x+1, lambda x: x*2)(3) returns 7
• compose() combines two functions
• Returns new function: lambda x: f(g(x))
• Applies g first: g(x), then applies f: f(g(x))
• Evaluates: f(g(3)) = f(6) = 7

How it works:
• compose(lambda x: x+1, lambda x: x*2) creates composed function
• f = lambda x: x+1 (adds 1)
• g = lambda x: x*2 (multiplies by 2)
• compose() returns lambda x: f(g(x))
• compose(..., ...)(3) calls with x = 3
• Evaluates: g(3) = 3 * 2 = 6, then f(6) = 6 + 1 = 7
• Returns: 7

Example:
def compose(f, g): return lambda x: f(g(x))
compose(lambda x: x+1, lambda x: x*2)(3)  # 7 (f(g(3)) = f(6) = 7)
compose(lambda x: x*2, lambda x: x+1)(3)  # 8 (g(3) = 4, f(4) = 8)

Common uses:
• Function composition: def compose(f, g): return lambda x: f(g(x))
• Combining functions: result = compose(func1, func2)(value)
• Functional programming
• Function chaining

Example: If def compose(f, g): return lambda x: f(g(x)); compose(lambda x: x+1, lambda x: x*2)(3), then compose(...)(3) returns 7 because it applies g first (3 * 2 = 6), then applies f (6 + 1 = 7), so f(g(3)) = f(6) = 7.
`
  }),
  (_i: number) => ({ 
    q: `What is map(lambda x: x*2, [1, 2, 3])?`, 
    o: ["map object", "[2, 4, 6]", "Error", "None"], 
    c: 0, 
    e: "map() returns map object (iterator).",
    de: `The map() function returns a map object (iterator), not a list. map(lambda x: x*2, [1, 2, 3]) returns a map object because map() applies a function to each element of an iterable and returns an iterator that yields the results lazily. The map object is an iterator - it doesn't compute all values immediately, but yields them on-demand when you iterate. To get a list, you need to convert it with list().

map() returns iterator:
• map(lambda x: x*2, [1, 2, 3]) returns map object
• map() applies function to each element
• Returns iterator (lazy evaluation)
• Doesn't compute all values immediately
• Yields values on-demand

How it works:
• map(lambda x: x*2, [1, 2, 3]) creates map object
• map() applies lambda x: x*2 to each element
• Creates iterator that yields: 2, 4, 6
• Iterator doesn't compute until iterated
• Returns map object (iterator)

Example:
map(lambda x: x*2, [1, 2, 3])  # <map object> (iterator)
list(map(lambda x: x*2, [1, 2, 3])) # [2, 4, 6] (converted to list)
for x in map(lambda x: x*2, [1, 2, 3]):  # Iterates: 2, 4, 6
    print(x)

Common uses:
• Mapping: map(func, items) (returns iterator)
• Converting: list(map(func, items)) (converts to list)
• Lazy evaluation
• Iterator creation

Example: map(lambda x: x*2, [1, 2, 3]) returns a map object (iterator) because map() applies the function to each element and returns an iterator that yields results on-demand, not a list.
`
  }),
  (_i: number) => ({ 
    q: `What is list(map(lambda x: x*2, [1, 2, 3]))?`, 
    o: ["[2, 4, 6]", "map object", "Error", "None"], 
    c: 0, 
    e: "list() converts map object to list.",
    de: `The list() function converts a map object (iterator) to a list. list(map(lambda x: x*2, [1, 2, 3])) returns [2, 4, 6] because map() returns a map object that applies lambda x: x*2 to each element of [1, 2, 3], and list() consumes the iterator, collecting all values into a list. The map object yields 2, 4, 6 when iterated, and list() collects them into [2, 4, 6].

list() on map object:
• list(map(lambda x: x*2, [1, 2, 3])) returns [2, 4, 6]
• map() returns map object (iterator)
• list() consumes iterator
• Collects values into list
• Creates list: [2, 4, 6]

How it works:
• map(lambda x: x*2, [1, 2, 3]) creates map object
• map object yields: 2, 4, 6 (when iterated)
• list() iterates through map object
• Collects values: 2, 4, 6
• Returns new list: [2, 4, 6]

Example:
list(map(lambda x: x*2, [1, 2, 3]))  # [2, 4, 6] (converted to list)
list(map(lambda x: x**2, [1, 2, 3])) # [1, 4, 9] (converted to list)
list(map(str, [1, 2, 3]))            # ['1', '2', '3'] (converted to list)

Common uses:
• Converting map to list: list(map(func, items))
• Getting results: results = list(map(transform, data))
• Iterator consumption
• List creation

Example: list(map(lambda x: x*2, [1, 2, 3])) returns [2, 4, 6] because map() returns a map object that yields 2, 4, 6 when iterated, and list() consumes the iterator, collecting all values into a list.
`
  }),
  (_i: number) => ({ 
    q: `What is filter(lambda x: x > 2, [1, 2, 3, 4])?`, 
    o: ["filter object", "[3, 4]", "Error", "None"], 
    c: 0, 
    e: "filter() returns filter object (iterator).",
    de: `The filter() function returns a filter object (iterator), not a list. filter(lambda x: x > 2, [1, 2, 3, 4]) returns a filter object because filter() applies a predicate function to each element of an iterable and returns an iterator that yields only the elements for which the predicate is True. The filter object is an iterator - it doesn't compute all values immediately, but yields them on-demand when you iterate. To get a list, you need to convert it with list().

filter() returns iterator:
• filter(lambda x: x > 2, [1, 2, 3, 4]) returns filter object
• filter() applies predicate function to each element
• Returns iterator (lazy evaluation)
• Yields only elements where predicate is True
• Doesn't compute all values immediately

How it works:
• filter(lambda x: x > 2, [1, 2, 3, 4]) creates filter object
• filter() tests lambda x: x > 2 for each element
• Creates iterator that yields: 3, 4 (where condition is True)
• Iterator doesn't compute until iterated
• Returns filter object (iterator)

Example:
filter(lambda x: x > 2, [1, 2, 3, 4])  # <filter object> (iterator)
list(filter(lambda x: x > 2, [1, 2, 3, 4])) # [3, 4] (converted to list)
for x in filter(lambda x: x > 2, [1, 2, 3, 4]):  # Iterates: 3, 4
    print(x)

Common uses:
• Filtering: filter(predicate, items) (returns iterator)
• Converting: list(filter(predicate, items)) (converts to list)
• Lazy evaluation
• Iterator creation

Example: filter(lambda x: x > 2, [1, 2, 3, 4]) returns a filter object (iterator) because filter() applies the predicate function to each element and returns an iterator that yields only the elements where the predicate is True (3 and 4), not a list.
`
  }),
  (_i: number) => ({ 
    q: `What is list(filter(lambda x: x > 2, [1, 2, 3, 4]))?`, 
    o: ["[3, 4]", "filter object", "Error", "None"], 
    c: 0, 
    e: "list() converts filter object to list.",
    de: `The list() function converts a filter object (iterator) to a list. list(filter(lambda x: x > 2, [1, 2, 3, 4])) returns [3, 4] because filter() returns a filter object that applies lambda x: x > 2 to each element of [1, 2, 3, 4], and list() consumes the iterator, collecting only the elements where the predicate is True into a list. The filter object yields 3, 4 when iterated (only elements where x > 2 is True), and list() collects them into [3, 4].

list() on filter object:
• list(filter(lambda x: x > 2, [1, 2, 3, 4])) returns [3, 4]
• filter() returns filter object (iterator)
• list() consumes iterator
• Collects filtered values into list
• Creates list: [3, 4]

How it works:
• filter(lambda x: x > 2, [1, 2, 3, 4]) creates filter object
• filter object yields: 3, 4 (where x > 2 is True)
• list() iterates through filter object
• Collects values: 3, 4
• Returns new list: [3, 4]

Example:
list(filter(lambda x: x > 2, [1, 2, 3, 4]))  # [3, 4] (converted to list)
list(filter(lambda x: x % 2 == 0, [1, 2, 3, 4])) # [2, 4] (converted to list)
list(filter(lambda x: len(x) > 3, ['a', 'ab', 'abc', 'abcd'])) # ['abcd'] (converted to list)

Common uses:
• Converting filter to list: list(filter(predicate, items))
• Getting filtered results: results = list(filter(condition, data))
• Iterator consumption
• List creation

Example: list(filter(lambda x: x > 2, [1, 2, 3, 4])) returns [3, 4] because filter() returns a filter object that yields only elements where x > 2 is True (3 and 4), and list() consumes the iterator, collecting them into a list.
`
  }),
  (_i: number) => ({ 
    q: `What is from functools import reduce; reduce(lambda x, y: x + y, [1, 2, 3, 4])?`, 
    o: ["10", "4", "Error", "None"], 
    c: 0, 
    e: "reduce() accumulates values using function.",
    de: `The reduce() function from functools accumulates values by applying a function cumulatively to elements. from functools import reduce; reduce(lambda x, y: x + y, [1, 2, 3, 4]) returns 10 because reduce() applies lambda x, y: x + y cumulatively: first it adds 1 + 2 = 3, then 3 + 3 = 6, then 6 + 4 = 10. reduce() takes a function and an iterable, and repeatedly applies the function to the accumulated result and the next element, reducing the iterable to a single value.

reduce() function:
• from functools import reduce; reduce(lambda x, y: x + y, [1, 2, 3, 4]) returns 10
• reduce() accumulates values using function
• Applies function cumulatively: (1+2) → 3, (3+3) → 6, (6+4) → 10
• Reduces iterable to single value
• Returns accumulated result: 10

How it works:
• reduce(lambda x, y: x + y, [1, 2, 3, 4]) starts with first two elements
• First: 1 + 2 = 3 (accumulated result)
• Second: 3 + 3 = 6 (accumulated result)
• Third: 6 + 4 = 10 (accumulated result)
• Returns: 10

Example:
from functools import reduce
reduce(lambda x, y: x + y, [1, 2, 3, 4])  # 10 (1+2+3+4)
reduce(lambda x, y: x * y, [1, 2, 3, 4])  # 24 (1*2*3*4)
reduce(lambda x, y: x if x > y else y, [1, 3, 2, 4]) # 4 (max)

Common uses:
• Accumulating values: reduce(func, items) (reduces to single value)
• Cumulative operations: reduce(lambda x, y: x + y, items)
• Functional reduction
• Iterable reduction

Example: from functools import reduce; reduce(lambda x, y: x + y, [1, 2, 3, 4]) returns 10 because reduce() applies the function cumulatively: (1+2) → 3, (3+3) → 6, (6+4) → 10, reducing the iterable to a single value.
`
  }),
  (_i: number) => ({ 
    q: `What is sorted([3, 1, 2], key=lambda x: -x)?`, 
    o: ["[3, 2, 1]", "[1, 2, 3]", "Error", "None"], 
    c: 0, 
    e: "sorted() with key function for custom sorting.",
    de: `The sorted() function can take a key parameter for custom sorting. sorted([3, 1, 2], key=lambda x: -x) returns [3, 2, 1] because the key function lambda x: -x transforms each element before comparison. Here, key=lambda x: -x negates each element, so comparisons use -3, -1, -2, which sorts as -3 < -1 < -2 (ascending by negated values), resulting in [3, 2, 1] in descending order. The key function doesn't change the elements in the result - it only affects the comparison order.

sorted() with key:
• sorted([3, 1, 2], key=lambda x: -x) returns [3, 2, 1]
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
sorted(['abc', 'a', 'ab'], key=len)  # ['a', 'ab', 'abc'] (by length)
sorted([1, 2, 3], key=lambda x: x**2) # [1, 2, 3] (squares: 1 < 4 < 9)

Common uses:
• Custom sorting: sorted(items, key=func)
• Descending sort: sorted(items, key=lambda x: -x)
• Transform-based sorting
• Flexible sorting criteria

Example: sorted([3, 1, 2], key=lambda x: -x) returns [3, 2, 1] because the key function negates each element for comparison, causing the list to be sorted in descending order (largest to smallest).
`
  }),
  (_i: number) => ({ 
    q: `What is max([1, 2, 3], key=lambda x: -x)?`, 
    o: ["1", "3", "Error", "None"], 
    c: 0, 
    e: "max() with key function finds element with max key value.",
    de: `The max() function can take a key parameter to find the element with the maximum transformed value. max([1, 2, 3], key=lambda x: -x) returns 1 because the key function lambda x: -x transforms each element before comparison. Here, key=lambda x: -x negates each element, so comparisons use -1, -2, -3, and max finds the element with the maximum negated value (which is -1, corresponding to element 1). The key function doesn't change the element returned - it only affects the comparison. Since max() returns the original element (not the transformed value), it returns 1.

max() with key:
• max([1, 2, 3], key=lambda x: -x) returns 1
• key parameter transforms elements for comparison
• lambda x: -x negates each element
• Compares using negated values: -1, -2, -3
• max finds maximum negated value: -1 (corresponds to element 1)
• Returns original element: 1

How it works:
• max() called with [1, 2, 3], key=lambda x: -x
• Applies key function: -1, -2, -3 (negated)
• Compares using negated values: -1 > -2 > -3
• max finds element with maximum negated value: -1
• -1 corresponds to original element 1
• Returns original element: 1

Example:
max([1, 2, 3], key=lambda x: -x)  # 1 (max negated value -1)
max(['abc', 'a', 'ab'], key=len)  # 'abc' (max length 3)
min([1, 2, 3], key=lambda x: -x)  # 3 (min negated value -3)

Common uses:
• Custom max: max(items, key=func)
• Transform-based max: max(items, key=lambda x: transform(x))
• Key-based selection
• Flexible comparison

Example: max([1, 2, 3], key=lambda x: -x) returns 1 because the key function negates each element for comparison, and max finds the element with the maximum negated value (-1, which corresponds to original element 1).
`
  }),
  
  // 81-90: Function Attributes and Documentation
  (_i: number) => ({ 
    q: `What is def func(): pass; func.__name__?`, 
    o: ["'func'", "None", "Error", "''"], 
    c: 0, 
    e: "__name__ attribute contains function name.",
    de: `Functions have a __name__ attribute that contains the function's name. If def func(): pass; func.__name__, then func.__name__ returns 'func' because __name__ is a special attribute that stores the function's name as a string. This attribute is automatically set when the function is defined using def. It's useful for debugging, introspection, or creating dynamic code that needs to know function names.

__name__ attribute:
• def func(): pass; func.__name__ returns 'func'
• __name__ contains function name as string
• Automatically set when function defined
• Returns function name: 'func'
• Useful for introspection

How it works:
• def func(): pass creates function definition
• Python automatically sets func.__name__ = 'func'
• __name__ attribute stores function name
• func.__name__ accesses attribute
• Returns: 'func'

Example:
def func(): pass
func.__name__                # 'func' (function name)
def my_function(): pass
my_function.__name__         # 'my_function' (function name)

Common uses:
• Introspection: print(func.__name__) (debugging)
• Dynamic code: code that uses function names
• Function attributes
• Function metadata

Example: If def func(): pass; func.__name__, then func.__name__ returns 'func' because __name__ is a special attribute that stores the function's name as a string, automatically set when the function is defined.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(): \"\"\"doc\"\"\"; pass; func.__doc__?`, 
    o: ["'doc'", "None", "Error", "''"], 
    c: 0, 
    e: "__doc__ attribute contains docstring.",
    de: `Functions have a __doc__ attribute that contains the function's docstring (documentation string). If def func(): \"\"\"doc\"\"\"; pass; func.__doc__, then func.__doc__ returns 'doc' because __doc__ is a special attribute that stores the docstring - the string literal that appears as the first statement in the function body. Docstrings are used for documentation and are accessible via __doc__. If there's no docstring, __doc__ is None.

__doc__ attribute:
• def func(): \"\"\"doc\"\"\"; pass; func.__doc__ returns 'doc'
• __doc__ contains docstring (documentation string)
• Docstring is first statement in function body
• Returns docstring: 'doc'
• None if no docstring

How it works:
• def func(): \"\"\"doc\"\"\"; pass creates function definition
• \"\"\"doc\"\"\" is docstring (first statement)
• Python automatically sets func.__doc__ = 'doc'
• __doc__ attribute stores docstring
• func.__doc__ accesses attribute
• Returns: 'doc'

Example:
def func(): \"\"\"doc\"\"\"; pass
func.__doc__                # 'doc' (docstring)
def func(): \"\"\"This is a function.\"\"\"; pass
func.__doc__                # 'This is a function.' (docstring)

Common uses:
• Documentation: def func(): \"\"\"doc\"\"\"; print(func.__doc__)
• Introspection: help(func) uses __doc__
• Function documentation
• Docstring access

Example: If def func(): \"\"\"doc\"\"\"; pass; func.__doc__, then func.__doc__ returns 'doc' because __doc__ is a special attribute that stores the docstring - the documentation string that appears as the first statement in the function body.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(): pass; func.__doc__?`, 
    o: ["None", "'func'", "Error", "''"], 
    c: 0, 
    e: "__doc__ is None if no docstring.",
    de: `The __doc__ attribute is None if a function has no docstring. If def func(): pass; func.__doc__, then func.__doc__ returns None because the function has no docstring - there's no string literal as the first statement in the function body. __doc__ only contains a value if a docstring is provided. If there's no docstring, __doc__ is None, not an empty string. This is the default state for functions without documentation.

__doc__ without docstring:
• def func(): pass; func.__doc__ returns None
• Function has no docstring
• __doc__ attribute is None (not empty string)
• Default state for functions without documentation
• Returns None

How it works:
• def func(): pass creates function definition
• No docstring in function body
• Python sets func.__doc__ = None (default)
• __doc__ attribute is None
• func.__doc__ accesses attribute
• Returns: None

Example:
def func(): pass
func.__doc__                # None (no docstring)
def func(): \"\"\"doc\"\"\"; pass
func.__doc__                # 'doc' (has docstring)
def func(): x = 1; return x
func.__doc__                # None (no docstring)

Common uses:
• Checking docstring: if func.__doc__: print(func.__doc__)
• Documentation check: has_doc = func.__doc__ is not None
• Function documentation
• Docstring checking

Example: If def func(): pass; func.__doc__, then func.__doc__ returns None because the function has no docstring, so __doc__ is None (the default state for functions without documentation).
`
  }),
  (_i: number) => ({ 
    q: `What is def func(x, y=2): pass; func.__defaults__?`, 
    o: ["(2,)", "None", "Error", "()"], 
    c: 0, 
    e: "__defaults__ contains tuple of default values.",
    de: `Functions have a __defaults__ attribute that contains a tuple of default parameter values. If def func(x, y=2): pass; func.__defaults__, then func.__defaults__ returns (2,) because __defaults__ stores default parameter values in a tuple, ordered from left to right for parameters with defaults. Only parameters with default values are included, in the order they appear. In this case, y=2 has a default value, so __defaults__ = (2,).

__defaults__ attribute:
• def func(x, y=2): pass; func.__defaults__ returns (2,)
• __defaults__ contains tuple of default values
• Only parameters with defaults included
• Ordered from left to right
• Returns tuple: (2,)

How it works:
• def func(x, y=2): pass creates function definition
• Parameter x has no default (not in __defaults__)
• Parameter y has default value 2 (in __defaults__)
• Python sets func.__defaults__ = (2,)
• __defaults__ tuple contains: (2,)
• Returns: (2,)

Example:
def func(x, y=2): pass
func.__defaults__           # (2,) (only y has default)
def func(x, y=2, z=3): pass
func.__defaults__           # (2, 3) (y and z have defaults)
def func(x): pass
func.__defaults__           # None (no defaults)

Common uses:
• Introspection: print(func.__defaults__) (check defaults)
• Default values: defaults = func.__defaults__
• Function attributes
• Default parameter access

Example: If def func(x, y=2): pass; func.__defaults__, then func.__defaults__ returns (2,) because __defaults__ contains a tuple of default parameter values, and only y has a default value of 2.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(*args, **kwargs): pass; func.__code__?`, 
    o: ["Code object", "None", "Error", "()"], 
    c: 0, 
    e: "__code__ contains function's code object.",
    de: `Functions have a __code__ attribute that contains the function's code object. If def func(*args, **kwargs): pass; func.__code__, then func.__code__ returns a code object because __code__ is a special attribute that stores the compiled bytecode and other metadata about the function's code. The code object contains information like the number of arguments, variable names, constants, etc. It's an internal Python object used for execution and introspection.

__code__ attribute:
• def func(*args, **kwargs): pass; func.__code__ returns code object
• __code__ contains function's code object
• Code object stores compiled bytecode
• Contains metadata: arguments, variables, constants
• Internal Python object

How it works:
• def func(*args, **kwargs): pass creates function definition
• Python compiles function body to bytecode
• Creates code object with bytecode and metadata
• Python sets func.__code__ = code_object
• __code__ attribute stores code object
• func.__code__ accesses attribute
• Returns: code object

Example:
def func(*args, **kwargs): pass
func.__code__               # <code object> (code object)
func.__code__.co_argcount   # 0 (number of arguments)
func.__code__.co_varnames   # ('args', 'kwargs') (variable names)

Common uses:
• Introspection: func.__code__.co_varnames (variable names)
• Code inspection: func.__code__.co_consts (constants)
• Function internals
• Bytecode access

Example: If def func(*args, **kwargs): pass; func.__code__, then func.__code__ returns a code object because __code__ is a special attribute that stores the compiled bytecode and metadata about the function's code.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(): pass; callable(func)?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "callable() checks if object is callable.",
    de: `The callable() function checks if an object is callable (can be called like a function). If def func(): pass; callable(func), then callable(func) returns True because func is a function object, and functions are callable. callable() returns True for functions, methods, classes (which are callable to create instances), and any object that implements __call__. It returns False for non-callable objects like integers, strings, lists, etc.

callable() function:
• def func(): pass; callable(func) returns True
• callable() checks if object is callable
• Functions are callable
• Returns True for callable objects
• Returns False for non-callable objects

How it works:
• def func(): pass creates function object
• func is a function (callable)
• callable(func) checks if func is callable
• Functions are callable (can be called)
• Returns: True

Example:
def func(): pass
callable(func)              # True (functions are callable)
callable(5)                 # False (integers are not callable)
callable(str)               # True (classes are callable)

Common uses:
• Checking callable: if callable(obj): obj()
• Type checking: is_callable = callable(item)
• Callable check
• Object inspection

Example: If def func(): pass; callable(func), then callable(func) returns True because functions are callable objects - they can be called with parentheses like func().
`
  }),
  (_i: number) => ({ 
    q: `What is callable(5)?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "Integer is not callable.",
    de: `Integers are not callable objects. callable(5) returns False because integers cannot be called like functions - you cannot use 5() to call an integer. callable() returns True only for objects that can be called (like functions, methods, classes), and returns False for non-callable objects like integers, strings, lists, dictionaries, etc. This is useful for checking if an object is a function before trying to call it.

callable() on integer:
• callable(5) returns False
• Integers are not callable
• Cannot call integer: 5() raises TypeError
• callable() returns False for non-callable objects
• Returns False

How it works:
• callable(5) checks if 5 is callable
• 5 is an integer (not callable)
• Integers cannot be called like functions
• Cannot use 5() (raises TypeError)
• Returns: False

Example:
callable(5)                 # False (integers not callable)
callable('hello')           # False (strings not callable)
callable([1, 2, 3])         # False (lists not callable)
callable(lambda x: x)       # True (functions callable)

Common uses:
• Type checking: if callable(obj): obj() else use obj
• Safe calling: callable(func) and func()
• Callable check
• Object inspection

Example: callable(5) returns False because integers are not callable objects - you cannot call an integer like a function, so callable() returns False for non-callable objects like integers.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(): return 1; type(func)?`, 
    o: ["<class 'function'>", "<class 'type'>", "Error", "None"], 
    c: 0, 
    e: "Functions are of type function.",
    de: `The type() function returns the type of an object. If def func(): return 1; type(func), then type(func) returns <class 'function'> because func is a function object, and functions are of type function. The type() function returns the class/type of an object, and for functions, it returns the function class. This is useful for type checking or introspection to determine if an object is a function.

type() on function:
• def func(): return 1; type(func) returns <class 'function'>
• type() returns object's type
• Functions are of type function
• Returns function class
• Useful for type checking

How it works:
• def func(): return 1 creates function object
• func is a function object
• type(func) checks type of func
• Functions are of type function
• Returns: <class 'function'>

Example:
def func(): return 1
type(func)                  # <class 'function'> (function type)
type(5)                     # <class 'int'> (integer type)
type('hello')               # <class 'str'> (string type)

Common uses:
• Type checking: if type(obj) == type(lambda: None): ...
• Type inspection: print(type(func))
• Object type
• Type identification

Example: If def func(): return 1; type(func), then type(func) returns <class 'function'> because functions are of type function, and type() returns the class/type of the object.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(): pass; hasattr(func, '__name__')?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "hasattr() checks if object has attribute.",
    de: `The hasattr() function checks if an object has a specific attribute. If def func(): pass; hasattr(func, '__name__'), then hasattr(func, '__name__') returns True because functions have a __name__ attribute. hasattr(obj, attr) returns True if the object has the attribute (whether it's defined or inherited), and False otherwise. It's useful for checking if an attribute exists before accessing it to avoid AttributeError.

hasattr() function:
• def func(): pass; hasattr(func, '__name__') returns True
• hasattr() checks if object has attribute
• Functions have __name__ attribute
• Returns True if attribute exists
• Returns False if attribute doesn't exist

How it works:
• def func(): pass creates function object
• Functions have __name__ attribute automatically
• hasattr(func, '__name__') checks if __name__ exists
• Attribute exists (functions have __name__)
• Returns: True

Example:
def func(): pass
hasattr(func, '__name__')   # True (functions have __name__)
hasattr(func, '__doc__')    # True (functions have __doc__)
hasattr(5, '__name__')      # False (integers don't have __name__)

Common uses:
• Attribute checking: if hasattr(obj, 'attr'): use obj.attr
• Safe access: hasattr(func, '__doc__') and func.__doc__
• Attribute existence
• Object inspection

Example: If def func(): pass; hasattr(func, '__name__'), then hasattr(func, '__name__') returns True because functions have a __name__ attribute, and hasattr() checks if an object has a specific attribute.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(): pass; func.attr = 'value'; func.attr?`, 
    o: ["'value'", "None", "Error", "''"], 
    c: 0, 
    e: "Functions can have custom attributes.",
    de: `Functions can have custom attributes assigned to them. If def func(): pass; func.attr = 'value'; func.attr, then func.attr returns 'value' because you can assign custom attributes to function objects just like any other Python object. Functions are objects, so they can have attributes. After assigning func.attr = 'value', the attribute 'attr' exists on the function object and can be accessed like any other attribute. This is useful for storing metadata or state associated with a function.

Custom function attributes:
• def func(): pass; func.attr = 'value'; func.attr returns 'value'
• Functions can have custom attributes
• Assignment: func.attr = 'value' creates attribute
• Access: func.attr retrieves attribute value
• Functions are objects (can have attributes)

How it works:
• def func(): pass creates function object
• func.attr = 'value' assigns custom attribute
• Attribute 'attr' created on function object
• func.attr accesses attribute
• Returns: 'value'

Example:
def func(): pass
func.attr = 'value'         # Assigns custom attribute
func.attr                   # 'value' (accesses attribute)
func.count = 0              # Assigns another attribute
func.count                  # 0 (accesses attribute)

Common uses:
• Storing metadata: func.metadata = {'author': 'Alice'}
• Function state: func.call_count = 0 (tracking)
• Custom attributes
• Function metadata

Example: If def func(): pass; func.attr = 'value'; func.attr, then func.attr returns 'value' because functions can have custom attributes assigned to them, and func.attr = 'value' creates the attribute, which can then be accessed.
`
  }),
  
  // 91-100: Advanced Function Features
  (_i: number) => ({ 
    q: `What is def func(x): return x; func.__annotations__?`, 
    o: ["{}", "None", "Error", "()"], 
    c: 0, 
    e: "__annotations__ contains type hints (empty if none).",
    de: `Functions have a __annotations__ attribute that contains type hints (type annotations). If def func(x): return x; func.__annotations__, then func.__annotations__ returns {} because the function has no type hints, so __annotations__ is an empty dictionary. Type hints are optional annotations that indicate the expected types of parameters and return values, written using : for parameters and -> for return types. If there are no type hints, __annotations__ is an empty dictionary.

__annotations__ without type hints:
• def func(x): return x; func.__annotations__ returns {}
• __annotations__ contains type hints as dictionary
• No type hints in function (empty dict)
• Default state: {} (empty dictionary)
• Returns: {}

How it works:
• def func(x): return x creates function definition
• No type hints provided (no : or ->)
• Python sets func.__annotations__ = {} (empty dict)
• __annotations__ attribute stores type hints
• func.__annotations__ accesses attribute
• Returns: {}

Example:
def func(x): return x
func.__annotations__       # {} (empty, no type hints)
def func(x: int): return x
func.__annotations__       # {'x': <class 'int'>} (has type hints)

Common uses:
• Type hints: def func(x: int) -> int: (has annotations)
• Type checking: def func(x): (no annotations, {} empty)
• Function annotations
• Type hint access

Example: If def func(x): return x; func.__annotations__, then func.__annotations__ returns {} because the function has no type hints, so __annotations__ is an empty dictionary (the default state).
`
  }),
  (_i: number) => ({ 
    q: `What is def func(x: int) -> int: return x; func.__annotations__?`, 
    o: ["{'x': <class 'int'>, 'return': <class 'int'>}", "{}", "Error", "None"], 
    c: 0, 
    e: "__annotations__ contains type hints.",
    de: `Functions with type hints have them stored in __annotations__. If def func(x: int) -> int: return x; func.__annotations__, then func.__annotations__ returns {'x': <class 'int'>, 'return': <class 'int'>} because __annotations__ stores type hints as a dictionary where keys are parameter names (like 'x') or 'return' for the return type, and values are the type annotations. Type hints are optional but useful for documentation and type checking tools.

__annotations__ with type hints:
• def func(x: int) -> int: return x; func.__annotations__ returns {'x': <class 'int'>, 'return': <class 'int'>}
• __annotations__ contains type hints as dictionary
• 'x': <class 'int'> (parameter type hint)
• 'return': <class 'int'> (return type hint)
• Returns dictionary of annotations

How it works:
• def func(x: int) -> int: return x creates function definition
• x: int is parameter type hint
• -> int is return type hint
• Python sets func.__annotations__ = {'x': int, 'return': int}
• __annotations__ attribute stores type hints
• func.__annotations__ accesses attribute
• Returns: {'x': <class 'int'>, 'return': <class 'int'>}

Example:
def func(x: int) -> int: return x
func.__annotations__       # {'x': <class 'int'>, 'return': <class 'int'>}
def func(x: str, y: int) -> str: return x
func.__annotations__       # {'x': <class 'str'>, 'y': <class 'int'>, 'return': <class 'str'>}

Common uses:
• Type hints: def func(x: int) -> int: (annotations)
• Type checking: type hints for static analysis
• Function documentation
• Type hint access

Example: If def func(x: int) -> int: return x; func.__annotations__, then func.__annotations__ returns {'x': <class 'int'>, 'return': <class 'int'>} because __annotations__ stores type hints as a dictionary where 'x' maps to the parameter type and 'return' maps to the return type.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(x, y): return x + y; func(1, 2, 3)?`, 
    o: ["TypeError", "6", "Error", "None"], 
    c: 0, 
    e: "Too many arguments raises TypeError.",
    de: `Calling a function with too many arguments raises a TypeError. If def func(x, y): return x + y; func(1, 2, 3), then func(1, 2, 3) raises a TypeError because the function expects 2 arguments (x and y), but 3 arguments (1, 2, 3) are provided. Python requires that the number of arguments matches the number of parameters (unless using *args or default parameters). Too many or too few arguments causes a TypeError.

Too many arguments:
• def func(x, y): return x + y; func(1, 2, 3) raises TypeError
• Function expects 2 arguments (x and y)
• 3 arguments provided (1, 2, 3)
• Too many arguments
• Raises TypeError: func() takes 2 positional arguments but 3 were given

How it works:
• func(1, 2, 3) calls function func
• Function expects 2 arguments (x, y)
• 3 arguments provided: 1, 2, 3
• First two arguments assigned: x=1, y=2
• Third argument 3 has no corresponding parameter
• Raises TypeError

Example:
def func(x, y): return x + y
func(1, 2, 3)              # TypeError: func() takes 2 positional arguments but 3 were given
func(1, 2)                 # 3 (correct number of arguments)

Common uses:
• Understanding errors: too many arguments raises TypeError
• Argument validation: ensure correct number of arguments
• Function calls
• Error handling

Example: If def func(x, y): return x + y; func(1, 2, 3), then func(1, 2, 3) raises a TypeError because the function expects 2 arguments but 3 are provided, causing an error.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(x, y): return x + y; func(1)?`, 
    o: ["TypeError", "1", "Error", "None"], 
    c: 0, 
    e: "Too few arguments raises TypeError.",
    de: `Calling a function with too few arguments raises a TypeError. If def func(x, y): return x + y; func(1), then func(1) raises a TypeError because the function expects 2 arguments (x and y), but only 1 argument (1) is provided. Python requires that all required parameters (parameters without default values) receive arguments. Too few arguments means some required parameters are missing, causing a TypeError.

Too few arguments:
• def func(x, y): return x + y; func(1) raises TypeError
• Function expects 2 arguments (x and y)
• Only 1 argument provided (1)
• Too few arguments
• Raises TypeError: func() missing 1 required positional argument: 'y'

How it works:
• func(1) calls function func
• Function expects 2 arguments (x, y)
• Only 1 argument provided: 1
• First argument assigned: x=1
• Second parameter y has no argument
• Raises TypeError

Example:
def func(x, y): return x + y
func(1)                     # TypeError: func() missing 1 required positional argument: 'y'
func(1, 2)                  # 3 (correct number of arguments)

Common uses:
• Understanding errors: too few arguments raises TypeError
• Argument validation: ensure all required arguments provided
• Function calls
• Error handling

Example: If def func(x, y): return x + y; func(1), then func(1) raises a TypeError because the function expects 2 arguments but only 1 is provided, causing an error for the missing required parameter y.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(x, y, z): return x + y + z; func(1, z=3, y=2)?`, 
    o: ["6", "Error", "None", "5"], 
    c: 0, 
    e: "Keyword arguments can be in any order after positional.",
    de: `Keyword arguments can be in any order after positional arguments. If def func(x, y, z): return x + y + z; func(1, z=3, y=2), then func(1, z=3, y=2) returns 6 because 1 is passed positionally to x, and z=3 and y=2 are keyword arguments that can be in any order. Keyword arguments don't need to match the parameter order - they're matched by name, not position. So z=3 and y=2 can be in any order as long as they come after positional arguments.

Keyword argument order:
• def func(x, y, z): return x + y + z; func(1, z=3, y=2) returns 6
• 1 is positional argument (goes to x)
• z=3 and y=2 are keyword arguments (order doesn't matter)
• Keyword arguments matched by name, not position
• Returns: 1 + 2 + 3 = 6

How it works:
• func(1, z=3, y=2) calls function func
• First argument 1 is positional, assigned to x: x=1
• z=3 is keyword argument, assigned to z: z=3
• y=2 is keyword argument, assigned to y: y=2
• Function executes: return x + y + z
• Returns: 1 + 2 + 3 = 6

Example:
def func(x, y, z): return x + y + z
func(1, z=3, y=2)          # 6 (keyword args in any order)
func(1, y=2, z=3)          # 6 (same, different order)
func(1, 2, 3)              # 6 (all positional)

Common uses:
• Flexible calls: func(pos1, keyword2=value2, keyword3=value3)
• Named arguments: func(value, param2=value2, param3=value3)
• Keyword argument flexibility
• Argument ordering

Example: If def func(x, y, z): return x + y + z; func(1, z=3, y=2), then func(1, z=3, y=2) returns 6 because keyword arguments can be in any order after positional arguments - they're matched by name, not position.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(x, y, z): return x + y + z; func(1, 2, z=3)?`, 
    o: ["6", "Error", "None", "5"], 
    c: 0, 
    e: "Mixed positional and keyword arguments work.",
    de: `You can mix positional and keyword arguments in a function call. If def func(x, y, z): return x + y + z; func(1, 2, z=3), then func(1, 2, z=3) returns 6 because 1 and 2 are passed positionally to x and y, and z=3 is passed as a keyword argument to z. Positional arguments must come before keyword arguments - you cannot have a keyword argument followed by a positional argument. This mixing allows flexibility in function calls.

Mixed arguments:
• def func(x, y, z): return x + y + z; func(1, 2, z=3) returns 6
• 1, 2 are positional arguments (go to x, y)
• z=3 is keyword argument (goes to z)
• Positional before keyword
• Returns: 1 + 2 + 3 = 6

How it works:
• func(1, 2, z=3) calls function func
• First argument 1 is positional, assigned to x: x=1
• Second argument 2 is positional, assigned to y: y=2
• z=3 is keyword argument, assigned to z: z=3
• Function executes: return x + y + z
• Returns: 1 + 2 + 3 = 6

Example:
def func(x, y, z): return x + y + z
func(1, 2, z=3)            # 6 (mixed: pos1, pos2, keyword3)
func(1, z=3, y=2)          # 6 (mixed: pos1, keyword2, keyword3)
func(1, 2, 3)              # 6 (all positional)

Common uses:
• Flexible calls: func(pos1, pos2, keyword3=value)
• Mixed arguments: func(required1, keyword2=value2)
• Positional and keyword mixing
• Function call flexibility

Example: If def func(x, y, z): return x + y + z; func(1, 2, z=3), then func(1, 2, z=3) returns 6 because you can mix positional arguments (1, 2) and keyword arguments (z=3), with positional arguments coming first.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(x, y, z): return x + y + z; func(1, z=3, 2)?`, 
    o: ["SyntaxError", "6", "Error", "None"], 
    c: 0, 
    e: "Positional arguments cannot come after keyword arguments.",
    de: `Positional arguments cannot come after keyword arguments in a function call. If def func(x, y, z): return x + y + z; func(1, z=3, 2), then func(1, z=3, 2) raises a SyntaxError because the positional argument 2 comes after the keyword argument z=3. Python requires that all positional arguments come before keyword arguments - you cannot have a keyword argument followed by a positional argument. This prevents ambiguity about which parameters get which arguments.

Positional after keyword:
• def func(x, y, z): return x + y + z; func(1, z=3, 2) raises SyntaxError
• 1 is positional argument
• z=3 is keyword argument
• 2 is positional argument (comes after keyword)
• Invalid: positional after keyword
• Raises SyntaxError: positional argument follows keyword argument

How it works:
• func(1, z=3, 2) attempts to call function func
• First argument 1 is positional, assigned to x: x=1
• z=3 is keyword argument, assigned to z: z=3
• 2 is positional argument, but comes after keyword argument
• Invalid syntax (positional after keyword)
• Raises SyntaxError

Example:
def func(x, y, z): return x + y + z
func(1, z=3, 2)            # SyntaxError: positional argument follows keyword argument
func(1, 2, z=3)            # 6 (valid: positional before keyword)

Common uses:
• Understanding syntax: positional before keyword
• Argument ordering: all positional, then all keyword
• Syntax error avoidance
• Function call rules

Example: If def func(x, y, z): return x + y + z; func(1, z=3, 2), then func(1, z=3, 2) raises a SyntaxError because positional arguments cannot come after keyword arguments - all positional arguments must come first.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(*args, x): return args, x; func(1, 2, x=3)?`, 
    o: ["((1, 2), 3)", "Error", "None", "(1, 2, 3)"], 
    c: 0, 
    e: "Keyword-only parameter after *args.",
    de: `Parameters after *args are keyword-only - they can only be passed as keyword arguments. If def func(*args, x): return args, x; func(1, 2, x=3), then func(1, 2, x=3) returns ((1, 2), 3) because *args collects positional arguments (1, 2) into a tuple, and x must be passed as a keyword argument (x=3). Parameters after *args cannot be passed positionally - they're keyword-only parameters. This is enforced by Python's syntax: after *args, all following parameters must be keyword-only.

Keyword-only parameter after *args:
• def func(*args, x): return args, x; func(1, 2, x=3) returns ((1, 2), 3)
• *args collects positional arguments (1, 2)
• x is keyword-only parameter (after *args)
• x must be passed as keyword: x=3
• Returns tuple: (args, x) = ((1, 2), 3)

How it works:
• func(1, 2, x=3) calls function func
• Arguments 1, 2 are positional, collected into *args: args = (1, 2)
• x=3 is keyword argument, assigned to x: x=3
• Function executes: return args, x
• Returns: ((1, 2), 3)

Example:
def func(*args, x): return args, x
func(1, 2, x=3)            # ((1, 2), 3) (x must be keyword)
func(1, 2, 3)              # TypeError (x must be keyword)
func(x=3)                  # ((), 3) (args empty, x keyword)

Common uses:
• Keyword-only parameters: def func(*args, keyword_only): ...
• Forcing keywords: def process(*items, strict=True): ...
• Parameter restrictions
• Keyword-only enforcement

Example: If def func(*args, x): return args, x; func(1, 2, x=3), then func(1, 2, x=3) returns ((1, 2), 3) because *args collects positional arguments (1, 2), and x is a keyword-only parameter (must be passed as x=3) since it comes after *args.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(x, *, y): return x + y; func(1, y=2)?`, 
    o: ["3", "Error", "None", "1"], 
    c: 0, 
    e: "Parameters after * are keyword-only.",
    de: `Parameters after a bare * are keyword-only - they can only be passed as keyword arguments. If def func(x, *, y): return x + y; func(1, y=2), then func(1, y=2) returns 3 because x is passed positionally (1), and y is passed as a keyword argument (y=2) because it comes after the bare *. The bare * acts as a separator - all parameters after it must be keyword-only. This forces certain parameters to be passed by name, making function calls more explicit.

Keyword-only parameters:
• def func(x, *, y): return x + y; func(1, y=2) returns 3
• x is regular parameter (can be positional)
• * separates parameters
• y is keyword-only parameter (after *)
• y must be passed as keyword: y=2
• Returns: 1 + 2 = 3

How it works:
• func(1, y=2) calls function func
• Argument 1 is positional, assigned to x: x=1
• y=2 is keyword argument, assigned to y: y=2
• y must be keyword (comes after *)
• Function executes: return x + y
• Returns: 1 + 2 = 3

Example:
def func(x, *, y): return x + y
func(1, y=2)                # 3 (y must be keyword)
func(1, 2)                  # TypeError (y must be keyword)
func(x=1, y=2)              # 3 (both keyword, but y required keyword)

Common uses:
• Keyword-only parameters: def process(data, *, strict=True): ...
• Forcing keywords: def create(*, name, value): ... (all keyword-only)
• Parameter restrictions
• Keyword-only enforcement

Example: If def func(x, *, y): return x + y; func(1, y=2), then func(1, y=2) returns 3 because x is passed positionally (1), and y must be passed as a keyword argument (y=2) since it comes after the bare *, making it keyword-only.
`
  }),
  (_i: number) => ({ 
    q: `What is def func(x, /, y, *, z): return x + y + z; func(1, 2, z=3)?`, 
    o: ["6", "Error", "None", "5"], 
    c: 0, 
    e: "Parameters before / are positional-only, after * are keyword-only.",
    de: `Parameters before / are positional-only, and parameters after * are keyword-only. If def func(x, /, y, *, z): return x + y + z; func(1, 2, z=3), then func(1, 2, z=3) returns 6 because x is positional-only (must be passed positionally), y is regular (can be positional or keyword), and z is keyword-only (must be passed as keyword). The / separates positional-only parameters from regular parameters, and * separates regular parameters from keyword-only parameters. This gives fine-grained control over how parameters can be passed.

Positional-only and keyword-only:
• def func(x, /, y, *, z): return x + y + z; func(1, 2, z=3) returns 6
• x is positional-only (before /, must be positional)
• y is regular (between / and *, can be positional or keyword)
• z is keyword-only (after *, must be keyword)
• Returns: 1 + 2 + 3 = 6

How it works:
• func(1, 2, z=3) calls function func
• Argument 1 is positional, assigned to x: x=1 (positional-only)
• Argument 2 is positional, assigned to y: y=2 (regular, can be positional)
• z=3 is keyword argument, assigned to z: z=3 (keyword-only)
• Function executes: return x + y + z
• Returns: 1 + 2 + 3 = 6

Example:
def func(x, /, y, *, z): return x + y + z
func(1, 2, z=3)            # 6 (x positional-only, y regular, z keyword-only)
func(1, y=2, z=3)          # 6 (x positional-only, y keyword, z keyword-only)
func(x=1, 2, z=3)          # TypeError (x cannot be keyword)

Common uses:
• Positional-only: def process(data, /, options): ... (data positional-only)
• Keyword-only: def create(*, name, value): ... (all keyword-only)
• Parameter restrictions
• Fine-grained control

Example: If def func(x, /, y, *, z): return x + y + z; func(1, 2, z=3), then func(1, 2, z=3) returns 6 because x is positional-only (must be positional), y is regular (can be positional or keyword), and z is keyword-only (must be keyword), so 1 and 2 are passed positionally and z=3 is passed as a keyword.
`
  }),
];
