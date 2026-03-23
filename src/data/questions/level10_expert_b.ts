// --- LEVEL 10 EXPERT B: PEP 8, async/await, Python Idioms & Best Practices (49 Questions) ---
// Questions 50-98 of expert set. Each is TRULY UNIQUE.
export const level10ExpertB = [
  // 50. PEP 8 indentation
  (_i: number) => ({
    q: `PEP 8 recommends indentation of how many spaces?`,
    o: ["4 spaces", "2 spaces", "1 tab", "8 spaces"],
    c: 0,
    e: "PEP 8 recommends 4 spaces per indentation level, not tabs.",
    de: `PEP 8, Python's official style guide, specifies that code should use 4 spaces per indentation level. Tabs are discouraged and mixing tabs and spaces is forbidden (Python 3 raises an error).

Key concepts:
• 4 spaces per indentation level is the standard
• Tabs should not be used for indentation
• Python 3 disallows mixing tabs and spaces
• Continuation lines should align with the opening delimiter

How it works:
• Each new block (after if, for, def, class, etc.) indents by 4 spaces
• Nested blocks indent further by 4 more spaces
• Editors should be configured to insert spaces when Tab is pressed

Example:
def greet(name):
    if name:
        print(f"Hello, {name}")
    else:
        print("Hello, stranger")

Common uses:
• All Python source files should follow this convention
• Most editors and IDEs can be configured for 4-space indentation
• Consistent indentation improves readability across teams

Key Concepts:
• Key concepts: • 4 spaces per indentation level is the standard • Tabs should not be used for indentation • Python 3 disallows mixing tabs and spaces • Continuation lines should align with the opening delimiter How it works: • Each new block (after if, for, def, class, etc.) indents by 4 spaces • Nested blocks indent further by 4 more spaces • Editors should be configured to insert spaces when Tab is pressed Example: def greet(name): if name: print(f"Hello, {name}") else: print("Hello, stranger") Common uses: • All Python source files should follow this convention • Most editors and IDEs can be configured for 4-space indentation • Consistent indentation improves readability across teams

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 51. PEP 8 maximum line length
  (_i: number) => ({
    q: `PEP 8 recommends a maximum line length of how many characters?`,
    o: ["79", "80", "100", "120"],
    c: 0,
    e: "PEP 8 recommends 79 characters for code, 72 for docstrings and comments.",
    de: `PEP 8 specifies that lines of code should be limited to 79 characters maximum. For docstrings and comments, the limit is even stricter at 72 characters.

Key concepts:
• 79 characters maximum for code lines
• 72 characters maximum for docstrings and comments
• Long lines can be broken with backslash or parentheses
• Some teams allow up to 99 characters with team agreement

How it works:
• Keep code lines within 79 characters
• Use implicit line continuation inside parentheses, brackets, and braces
• Use backslash for explicit line continuation when needed
• Wrap long expressions across multiple lines

Example:
# Good - within 79 chars
result = (first_value
          + second_value
          - third_value)

# Good - using backslash
total = first_variable + \\
        second_variable

Common uses:
• Ensures code is readable on standard terminals
• Makes side-by-side diff comparisons easier
• Prevents horizontal scrolling in editors

Key Concepts:
• Key concepts: • 79 characters maximum for code lines • 72 characters maximum for docstrings and comments • Long lines can be broken with backslash or parentheses • Some teams allow up to 99 characters with team agreement How it works: • Keep code lines within 79 characters • Use implicit line continuation inside parentheses, brackets, and braces • Use backslash for explicit line continuation when needed • Wrap long expressions across multiple lines Example: # Good - within 79 chars result = (first_value + second_value - third_value) # Good - using backslash total = first_variable + \\ second_variable Common uses: • Ensures code is readable on standard terminals • Makes side-by-side diff comparisons easier • Prevents horizontal scrolling in editors

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 52. PEP 8 function naming
  (_i: number) => ({
    q: `PEP 8 says functions should be named in which style?`,
    o: ["snake_case", "camelCase", "PascalCase", "UPPER_CASE"],
    c: 0,
    e: "PEP 8 recommends snake_case (lowercase with underscores) for function names.",
    de: `PEP 8 specifies that function names should use snake_case: lowercase words separated by underscores. This improves readability and is the universally accepted convention in Python.

Key concepts:
• Function names use lowercase letters
• Words are separated by underscores
• This also applies to method names and variable names
• Consistency with this convention is important

How it works:
• my_function() not myFunction() or MyFunction()
• calculate_total() not calculateTotal()
• get_user_name() not getUserName()

Example:
def calculate_average(numbers):
    total = sum(numbers)
    return total / len(numbers)

def get_user_input():
    return input("Enter value: ")

Common uses:
• All function definitions in Python
• Method names in classes
• Variable names throughout Python code

Key Concepts:
• Key concepts: • Function names use lowercase letters • Words are separated by underscores • This also applies to method names and variable names • Consistency with this convention is important How it works: • my_function() not myFunction() or MyFunction() • calculate_total() not calculateTotal() • get_user_name() not getUserName() Example: def calculate_average(numbers): total = sum(numbers) return total / len(numbers) def get_user_input(): return input("Enter value: ") Common uses: • All function definitions in Python • Method names in classes • Variable names throughout Python code

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 53. PEP 8 class naming
  (_i: number) => ({
    q: `PEP 8 says class names should use which convention?`,
    o: ["CamelCase", "snake_case", "UPPER_CASE", "lowercase"],
    c: 0,
    e: "PEP 8 recommends CamelCase (CapitalizedWords) for class names.",
    de: `PEP 8 specifies that class names should use the CamelCase convention, also known as CapitalizedWords or PascalCase. Each word in the name starts with a capital letter, with no underscores.

Key concepts:
• Class names use CamelCase (CapitalizedWords)
• Each word starts with an uppercase letter
• No underscores between words
• Exception: some built-in types use lowercase (int, str, list)

How it works:
• MyClass not my_class or MY_CLASS
• UserAccount not user_account
• HTTPConnection (acronyms can be all caps)

Example:
class StudentRecord:
    pass

class DatabaseConnection:
    pass

class HTTPResponseHandler:
    pass

Common uses:
• All user-defined class definitions
• Exception classes (also CamelCase, typically ending in Error)
• Type aliases and abstract base classes

Key Concepts:
• Key concepts: • Class names use CamelCase (CapitalizedWords) • Each word starts with an uppercase letter • No underscores between words • Exception: some built-in types use lowercase (int, str, list) How it works: • MyClass not my_class or MY_CLASS • UserAccount not user_account • HTTPConnection (acronyms can be all caps) Example: class StudentRecord: pass class DatabaseConnection: pass class HTTPResponseHandler: pass Common uses: • All user-defined class definitions • Exception classes (also CamelCase, typically ending in Error) • Type aliases and abstract base classes

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 54. PEP 8 constant naming
  (_i: number) => ({
    q: `PEP 8 says constants should be named in which style?`,
    o: ["ALL_CAPS", "snake_case", "CamelCase", "camelCase"],
    c: 0,
    e: "PEP 8 recommends ALL_CAPS (UPPER_CASE_WITH_UNDERSCORES) for constants.",
    de: `PEP 8 specifies that constants should be written in all capital letters with underscores separating words. This convention makes constants visually distinct from variables.

Key concepts:
• Constants use UPPER_CASE_WITH_UNDERSCORES
• All letters are capitalized
• Words separated by underscores
• Constants are typically defined at the module level

How it works:
• MAX_SIZE not max_size or MaxSize
• PI = 3.14159 not pi = 3.14159
• DEFAULT_TIMEOUT = 30

Example:
MAX_RETRIES = 3
DATABASE_URL = "localhost:5432"
PI = 3.14159265
DEFAULT_BUFFER_SIZE = 4096

Common uses:
• Configuration values at module level
• Mathematical constants
• Default values that should not change
• Environment-related constants

Key Concepts:
• Key concepts: • Constants use UPPER_CASE_WITH_UNDERSCORES • All letters are capitalized • Words separated by underscores • Constants are typically defined at the module level How it works: • MAX_SIZE not max_size or MaxSize • PI = 3.14159 not pi = 3.14159 • DEFAULT_TIMEOUT = 30 Example: MAX_RETRIES = 3 DATABASE_URL = "localhost:5432" PI = 3.14159265 DEFAULT_BUFFER_SIZE = 4096 Common uses: • Configuration values at module level • Mathematical constants • Default values that should not change • Environment-related constants

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 55. PEP 8 module naming
  (_i: number) => ({
    q: `PEP 8 says module names should be in which style?`,
    o: ["short_lowercase", "CamelCase", "ALL_CAPS", "camelCase"],
    c: 0,
    e: "PEP 8 recommends short, lowercase module names with optional underscores.",
    de: `PEP 8 specifies that module names (Python file names) should be short, all-lowercase, and may use underscores for readability. Package names should also be short and all-lowercase, preferably without underscores.

Key concepts:
• Module names are short and all-lowercase
• Underscores can be used if it improves readability
• Package names prefer no underscores
• Keep names concise and descriptive

How it works:
• import mymodule, not import MyModule
• import my_utils, not import myUtils
• Packages: import mypackage, not import my_package

Example:
# Good module names:
import os
import sys
import json
import my_utils
import database_helpers

# Bad module names:
# import MyModule
# import DATABASE_HELPERS
# import myComplexModuleName

Common uses:
• Naming Python source files
• Naming Python packages (directories with __init__.py)
• Organizing project structure

Key Concepts:
• Key concepts: • Module names are short and all-lowercase • Underscores can be used if it improves readability • Package names prefer no underscores • Keep names concise and descriptive How it works: • import mymodule, not import MyModule • import my_utils, not import myUtils • Packages: import mypackage, not import my_package Example: # Good module names: import os import sys import json import my_utils import database_helpers # Bad module names: # import MyModule # import DATABASE_HELPERS # import myComplexModuleName Common uses: • Naming Python source files • Naming Python packages (directories with __init__.py) • Organizing project structure

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 56. PEP 8 spaces around assignment
  (_i: number) => ({
    q: `PEP 8: should you use spaces around = in assignment like x = 1?`,
    o: ["Yes, always", "No, never", "Only in classes", "Only in functions"],
    c: 0,
    e: "PEP 8 says to use spaces around = in assignments: x = 1, not x=1.",
    de: `PEP 8 requires spaces around the = sign in variable assignments. This improves readability by visually separating the variable name from its value.

Key concepts:
• x = 1 is correct (spaces around =)
• x=1 is incorrect (no spaces around =)
• This applies to all assignment operators (=, +=, -=, etc.)
• Exception: keyword arguments in function calls (see next rule)

How it works:
• Always put one space before and after = in assignments
• Same applies to augmented assignments: +=, -=, *=, /=
• Aligning assignments is discouraged

Example:
# Good
x = 1
name = "Alice"
total += 10

# Bad
x=1
name="Alice"
total+=10

Common uses:
• All variable assignments
• Augmented assignments (+=, -=, *=, etc.)
• Module-level constant definitions

Key Concepts:
• Key concepts: • x = 1 is correct (spaces around =) • x=1 is incorrect (no spaces around =) • This applies to all assignment operators (=, +=, -=, etc.) • Exception: keyword arguments in function calls (see next rule) How it works: • Always put one space before and after = in assignments • Same applies to augmented assignments: +=, -=, *=, /= • Aligning assignments is discouraged Example: # Good x = 1 name = "Alice" total += 10 # Bad x=1 name="Alice" total+=10 Common uses: • All variable assignments • Augmented assignments (+=, -=, *=, etc.) • Module-level constant definitions

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 57. PEP 8 spaces around keyword argument =
  (_i: number) => ({
    q: `PEP 8: should you use spaces around = in keyword arguments like func(x=1)?`,
    o: ["No, no spaces", "Yes, always", "Only for defaults", "Depends on context"],
    c: 0,
    e: "PEP 8 says no spaces around = in keyword arguments: func(x=1), not func(x = 1).",
    de: `PEP 8 specifies that when using = for keyword arguments or default parameter values, there should be no spaces around it. This is the opposite of the assignment rule.

Key concepts:
• func(x=1) is correct (no spaces)
• func(x = 1) is incorrect (has spaces)
• Same rule applies to default parameters in function definitions
• This helps distinguish keyword arguments from assignments

How it works:
• In function calls: func(key=value)
• In function definitions: def func(param=default)
• No spaces on either side of =

Example:
# Good
print("hello", end="")
def greet(name="World"):
    pass
result = my_func(timeout=30, retries=3)

# Bad
print("hello", end = "")
def greet(name = "World"):
    pass

Common uses:
• Keyword arguments in function calls
• Default parameter values in function definitions
• Named arguments to built-in functions

Key Concepts:
• Key concepts: • func(x=1) is correct (no spaces) • func(x = 1) is incorrect (has spaces) • Same rule applies to default parameters in function definitions • This helps distinguish keyword arguments from assignments How it works: • In function calls: func(key=value) • In function definitions: def func(param=default) • No spaces on either side of = Example: # Good print("hello", end="") def greet(name="World"): pass result = my_func(timeout=30, retries=3) # Bad print("hello", end = "") def greet(name = "World"): pass Common uses: • Keyword arguments in function calls • Default parameter values in function definitions • Named arguments to built-in functions

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 58. PEP 8 blank lines between top-level functions
  (_i: number) => ({
    q: `PEP 8: how many blank lines should separate top-level function definitions?`,
    o: ["2", "1", "3", "0"],
    c: 0,
    e: "PEP 8 requires 2 blank lines before and after top-level function and class definitions.",
    de: `PEP 8 specifies that top-level function and class definitions should be separated by two blank lines. This provides clear visual separation between major code blocks.

Key concepts:
• 2 blank lines between top-level functions
• 2 blank lines between top-level classes
• 2 blank lines between a class and a top-level function
• This applies to module-level definitions

How it works:
• After imports, 2 blank lines before first function/class
• Between each top-level function, 2 blank lines
• Between each top-level class, 2 blank lines

Example:
import os


def first_function():
    pass


def second_function():
    pass


class MyClass:
    pass

Common uses:
• Organizing module-level code
• Separating functions in a script
• Separating classes in a module

Key Concepts:
• Key concepts: • 2 blank lines between top-level functions • 2 blank lines between top-level classes • 2 blank lines between a class and a top-level function • This applies to module-level definitions How it works: • After imports, 2 blank lines before first function/class • Between each top-level function, 2 blank lines • Between each top-level class, 2 blank lines Example: import os def first_function(): pass def second_function(): pass class MyClass: pass Common uses: • Organizing module-level code • Separating functions in a script • Separating classes in a module

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 59. PEP 8 blank lines between methods in class
  (_i: number) => ({
    q: `PEP 8: how many blank lines should separate methods inside a class?`,
    o: ["1", "2", "0", "3"],
    c: 0,
    e: "PEP 8 requires 1 blank line between method definitions inside a class.",
    de: `PEP 8 specifies that method definitions inside a class should be separated by a single blank line. This is less than the 2-line separation used for top-level definitions.

Key concepts:
• 1 blank line between methods in a class
• This is different from top-level (which uses 2 blank lines)
• Extra blank lines can be used sparingly to separate logical sections
• The first method after the class header needs no blank line

How it works:
• Each method definition is preceded by 1 blank line
• This keeps the class body compact but readable
• Nested classes or functions within a class also use 1 blank line

Example:
class MyClass:
    def method_one(self):
        pass

    def method_two(self):
        pass

    def method_three(self):
        pass

Common uses:
• All class definitions with multiple methods
• Keeping class bodies organized and readable
• Consistent formatting across Python projects

Key Concepts:
• Key concepts: • 1 blank line between methods in a class • This is different from top-level (which uses 2 blank lines) • Extra blank lines can be used sparingly to separate logical sections • The first method after the class header needs no blank line How it works: • Each method definition is preceded by 1 blank line • This keeps the class body compact but readable • Nested classes or functions within a class also use 1 blank line Example: class MyClass: def method_one(self): pass def method_two(self): pass def method_three(self): pass Common uses: • All class definitions with multiple methods • Keeping class bodies organized and readable • Consistent formatting across Python projects

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 60. PEP 8 imports
  (_i: number) => ({
    q: `PEP 8: imports should be written how?`,
    o: ["One per line, at top of file", "All on one line", "Inside functions", "After constants"],
    c: 0,
    e: "PEP 8 says imports should be one per line and placed at the top of the file.",
    de: `PEP 8 specifies that imports should be on separate lines and placed at the top of the file, after any module comments and docstrings but before module globals and constants.

Key concepts:
• Each import on its own line
• Placed at the top of the file
• After module docstring, before globals
• Exception: from X import a, b, c is acceptable on one line

How it works:
• import os (one import per line)
• import sys (separate line)
• NOT: import os, sys (multiple on one line)
• from typing import List, Dict is acceptable

Example:
# Good
import os
import sys
from typing import List, Dict

# Bad
import os, sys
import os; import sys

Common uses:
• Every Python source file
• Keeping dependencies clear and organized
• Making it easy to see what a module depends on

Key Concepts:
• Key concepts: • Each import on its own line • Placed at the top of the file • After module docstring, before globals • Exception: from X import a, b, c is acceptable on one line How it works: • import os (one import per line) • import sys (separate line) • NOT: import os, sys (multiple on one line) • from typing import List, Dict is acceptable Example: # Good import os import sys from typing import List, Dict # Bad import os, sys import os; import sys Common uses: • Every Python source file • Keeping dependencies clear and organized • Making it easy to see what a module depends on

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 61. PEP 8 import order
  (_i: number) => ({
    q: `PEP 8: what is the correct import order?`,
    o: ["stdlib, third-party, local", "local, third-party, stdlib", "Alphabetical only", "No specific order"],
    c: 0,
    e: "PEP 8 says: standard library first, then third-party, then local, separated by blank lines.",
    de: `PEP 8 specifies a strict import ordering: standard library imports first, then third-party package imports, then local application imports. Each group should be separated by a blank line.

Key concepts:
• Group 1: Standard library imports (os, sys, json, etc.)
• Group 2: Third-party imports (requests, numpy, flask, etc.)
• Group 3: Local application/library imports
• Blank line between each group

How it works:
• Standard library modules come first
• Then packages installed via pip
• Then your own project modules
• Each group separated by a blank line

Example:
import os
import sys
from collections import defaultdict

import requests
import numpy as np

from myproject.utils import helper
from myproject.models import User

Common uses:
• Every Python module that has imports
• Tools like isort can automatically sort imports
• Keeps dependencies organized and clear

Key Concepts:
• Key concepts: • Group 1: Standard library imports (os, sys, json, etc.) • Group 2: Third-party imports (requests, numpy, flask, etc.) • Group 3: Local application/library imports • Blank line between each group How it works: • Standard library modules come first • Then packages installed via pip • Then your own project modules • Each group separated by a blank line Example: import os import sys from collections import defaultdict import requests import numpy as np from myproject.utils import helper from myproject.models import User Common uses: • Every Python module that has imports • Tools like isort can automatically sort imports • Keeps dependencies organized and clear

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 62. PEP 8 comparison to None
  (_i: number) => ({
    q: `PEP 8: how should you compare a value to None?`,
    o: ["x is None", "x == None", "x = None", "not x"],
    c: 0,
    e: "PEP 8 says use 'is None' or 'is not None', never == or != for None checks.",
    de: `PEP 8 specifies that comparisons to singletons like None should always use 'is' or 'is not', never the equality operators == or !=. This is because None is a singleton object and identity comparison is more appropriate and reliable.

Key concepts:
• Use: if x is None or if x is not None
• Never: if x == None or if x != None
• None is a singleton (only one instance exists)
• 'is' checks identity, '==' checks equality (can be overridden)

How it works:
• 'is' compares object identity (memory address)
• '==' calls __eq__ which can be customized
• A class could override __eq__ to return True for None comparison
• 'is' is always reliable for None checks

Example:
# Good
if result is None:
    print("No result")
if value is not None:
    process(value)

# Bad
if result == None:
    print("No result")

Common uses:
• Checking function return values
• Optional parameter handling
• Sentinel value checking

Key Concepts:
• Key concepts: • Use: if x is None or if x is not None • Never: if x == None or if x != None • None is a singleton (only one instance exists) • 'is' checks identity, '==' checks equality (can be overridden) How it works: • 'is' compares object identity (memory address) • '==' calls __eq__ which can be customized • A class could override __eq__ to return True for None comparison • 'is' is always reliable for None checks Example: # Good if result is None: print("No result") if value is not None: process(value) # Bad if result == None: print("No result") Common uses: • Checking function return values • Optional parameter handling • Sentinel value checking

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 63. PEP 8 comparison to True/False
  (_i: number) => ({
    q: `PEP 8: how should you check if a value is truthy?`,
    o: ["if x:", "if x == True:", "if x is True:", "if bool(x):"],
    c: 0,
    e: "PEP 8 recommends 'if x:' and 'if not x:', not '== True' or '== False'.",
    de: `PEP 8 specifies that boolean checks should use the implicit truthiness of values rather than explicit comparison to True or False. Python's truthiness system makes this both more readable and more Pythonic.

Key concepts:
• Use: if x: (not if x == True:)
• Use: if not x: (not if x == False:)
• Python's truthiness handles empty collections, zero, None, etc.
• Direct boolean comparison is rarely needed

How it works:
• if x: checks if x is truthy (non-zero, non-empty, not None)
• if not x: checks if x is falsy
• if x == True: only matches exactly True, not other truthy values
• if x is True: even stricter, identity check

Example:
# Good
if my_list:
    process(my_list)
if not finished:
    continue_work()

# Bad
if my_list == True:
    process(my_list)
if finished == False:
    continue_work()

Common uses:
• Checking if collections are non-empty
• Checking boolean flags
• Conditional logic throughout Python code

Key Concepts:
• • Direct boolean comparison is rarely needed How it works: • if x: checks if x is truthy (non-zero, non-empty, not None) • if not x: checks if x is falsy • if x == True: only matches exactly True, not other truthy values • if x is True: even stricter, identity check Example: # Good if my_list: process(my_list) if not finished: continue_work() # Bad if my_list == True: process(my_list) if finished == False: continue_work() Common uses: • Checking if collections are non-empty • Checking boolean flags • Conditional logic throughout Python code

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 64. PEP 8 docstrings
  (_i: number) => ({
    q: `PEP 8: what is a docstring?`,
    o: ["A string literal as the first statement in a module/class/function", "A comment starting with #", "A variable holding documentation", "A .txt file describing code"],
    c: 0,
    e: "A docstring is a string literal that appears as the first statement in a module, class, or function.",
    de: `A docstring (documentation string) is a string literal that occurs as the first statement in a module, function, class, or method body. It becomes the __doc__ attribute of that object and is used for documentation.

Key concepts:
• First statement in module, class, function, or method
• Written using triple quotes (single or double)
• Stored as the __doc__ attribute
• Accessible via help() function

How it works:
• Placed immediately after the def or class statement
• Triple-quoted strings allow multi-line documentation
• PEP 257 provides docstring conventions
• Not the same as comments (#)

Example:
def calculate_area(radius):
    """Calculate the area of a circle given its radius.

    Args:
        radius: The radius of the circle.

    Returns:
        The area as a float.
    """
    return 3.14159 * radius ** 2

print(calculate_area.__doc__)

Common uses:
• Documenting functions, classes, and modules
• Generated API documentation
• Interactive help via help() and __doc__

Key Concepts:
• """ return 3.14159 * radius ** 2 print(calculate_area.__doc__) Common uses: • Documenting functions, classes, and modules • Generated API documentation • Interactive help via help() and __doc__

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 65. PEP 8 trailing whitespace
  (_i: number) => ({
    q: `PEP 8: what should you do with trailing whitespace at end of lines?`,
    o: ["Remove it", "Keep it for alignment", "Add one space always", "It does not matter"],
    c: 0,
    e: "PEP 8 says trailing whitespace should be avoided and removed.",
    de: `PEP 8 specifies that trailing whitespace (spaces or tabs at the end of a line) should be avoided. Trailing whitespace is invisible, can cause unnecessary diffs in version control, and serves no purpose.

Key concepts:
• No spaces or tabs after the last character on a line
• Most editors can be configured to strip trailing whitespace
• Trailing whitespace causes noisy git diffs
• Some editors highlight trailing whitespace as a warning

How it works:
• Configure your editor to remove trailing whitespace on save
• Run linting tools (flake8, pylint) that detect trailing whitespace
• Pre-commit hooks can automatically strip trailing whitespace

Example:
# Bad (trailing spaces shown as dots)
x = 1····
name = "Alice"··

# Good (no trailing whitespace)
x = 1
name = "Alice"

Common uses:
• All Python source files
• Pre-commit hooks to enforce clean whitespace
• Editor settings for automatic cleanup

Key Concepts:
• Key concepts: • No spaces or tabs after the last character on a line • Most editors can be configured to strip trailing whitespace • Trailing whitespace causes noisy git diffs • Some editors highlight trailing whitespace as a warning How it works: • Configure your editor to remove trailing whitespace on save • Run linting tools (flake8, pylint) that detect trailing whitespace • Pre-commit hooks can automatically strip trailing whitespace Example: # Bad (trailing spaces shown as dots) x = 1···· name = "Alice"·· # Good (no trailing whitespace) x = 1 name = "Alice" Common uses: • All Python source files • Pre-commit hooks to enforce clean whitespace • Editor settings for automatic cleanup

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 66. async def creates a coroutine function
  (_i: number) => ({
    q: `async def f(): return 1 — what does calling f() create?`,
    o: ["A coroutine object", "The integer 1", "A generator", "A thread"],
    c: 0,
    e: "Calling an async function returns a coroutine object, not the return value directly.",
    de: `When you define a function with 'async def', calling it does not execute the function body immediately. Instead, it returns a coroutine object that must be awaited or run in an event loop to get the actual result.

Key concepts:
• async def creates a coroutine function
• Calling it returns a coroutine object
• The body does not execute until awaited
• You need await or asyncio.run() to get the result

How it works:
• async def f(): return 1 defines a coroutine function
• f() creates a coroutine object (does NOT return 1)
• await f() or asyncio.run(f()) actually executes the body
• The coroutine object is like a suspended computation

Example:
import asyncio

async def f():
    return 1

coro = f()       # Creates coroutine, does NOT return 1
print(type(coro))  # <class 'coroutine'>
result = asyncio.run(f())  # Actually runs it, returns 1

Common uses:
• All async function calls create coroutine objects
• Must be scheduled in an event loop to execute
• Foundation of Python's async programming model

Key Concepts:
• Key concepts: • async def creates a coroutine function • Calling it returns a coroutine object • The body does not execute until awaited • You need await or asyncio.run() to get the result How it works: • async def f(): return 1 defines a coroutine function • f() creates a coroutine object (does NOT return 1) • await f() or asyncio.run(f()) actually executes the body • The coroutine object is like a suspended computation Example: import asyncio async def f(): return 1 coro = f() # Creates coroutine, does NOT return 1 print(type(coro)) # <class 'coroutine'> result = asyncio.run(f()) # Actually runs it, returns 1 Common uses: • All async function calls create coroutine objects • Must be scheduled in an event loop to execute • Foundation of Python's async programming model

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 67. type of coroutine
  (_i: number) => ({
    q: `async def f(): return 1\nWhat is type(f())?`,
    o: ["<class 'coroutine'>", "<class 'int'>", "<class 'function'>", "<class 'generator'>"],
    c: 0,
    e: "f() returns a coroutine object, so type(f()) is <class 'coroutine'>.",
    de: `When you call an async function, it returns a coroutine object. The type of this object is 'coroutine', not the type of the return value.

Key concepts:
• type(f()) where f is async returns <class 'coroutine'>
• The coroutine has not been executed yet
• It is not an int, even though return 1 is in the body
• Coroutines are distinct from generators despite similarities

How it works:
• async def f(): return 1 creates a coroutine function
• f() produces a coroutine object
• type(f()) shows <class 'coroutine'>
• Only after await/run does the return value (1) become available

Example:
import asyncio

async def f():
    return 1

coro = f()
print(type(coro))  # <class 'coroutine'>
result = asyncio.run(f())
print(type(result))  # <class 'int'>

Common uses:
• Understanding async function behavior
• Debugging async code
• Distinguishing coroutines from regular return values

Key Concepts:
• Key concepts: • type(f()) where f is async returns <class 'coroutine'> • The coroutine has not been executed yet • It is not an int, even though return 1 is in the body • Coroutines are distinct from generators despite similarities How it works: • async def f(): return 1 creates a coroutine function • f() produces a coroutine object • type(f()) shows <class 'coroutine'> • Only after await/run does the return value (1) become available Example: import asyncio async def f(): return 1 coro = f() print(type(coro)) # <class 'coroutine'> result = asyncio.run(f()) print(type(result)) # <class 'int'> Common uses: • Understanding async function behavior • Debugging async code • Distinguishing coroutines from regular return values

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 68. Running a coroutine
  (_i: number) => ({
    q: `To actually run a coroutine and get its result, you need:`,
    o: ["asyncio.run() or await", "Just call it like a function", "Use threading.start()", "Use os.exec()"],
    c: 0,
    e: "Coroutines must be run with asyncio.run() or awaited inside another async function.",
    de: `Coroutines cannot be executed by simply calling them. You must either use asyncio.run() to start the event loop and run the coroutine, or use 'await' inside another async function.

Key concepts:
• asyncio.run(coro) starts an event loop and runs the coroutine
• await coro runs it inside another async function
• Simply calling an async function only creates the coroutine
• The event loop manages coroutine execution

How it works:
• asyncio.run() is the main entry point for async programs
• It creates an event loop, runs the coroutine, and closes the loop
• await pauses the current coroutine until the awaited one completes
• You cannot use await at the top level (except in Python 3.10+ REPL)

Example:
import asyncio

async def greet():
    return "Hello"

# Method 1: asyncio.run()
result = asyncio.run(greet())

# Method 2: await inside async function
async def main():
    result = await greet()
    print(result)

asyncio.run(main())

Common uses:
• Starting async applications
• Running coroutines from synchronous code
• Chaining async operations with await

Key Concepts:
• Key concepts: • asyncio.run(coro) starts an event loop and runs the coroutine • await coro runs it inside another async function • Simply calling an async function only creates the coroutine • The event loop manages coroutine execution How it works: • asyncio.run() is the main entry point for async programs • It creates an event loop, runs the coroutine, and closes the loop • await pauses the current coroutine until the awaited one completes • You cannot use await at the top level (except in Python 3.10+ REPL) Example: import asyncio async def greet(): return "Hello" # Method 1: asyncio.run() result = asyncio.run(greet()) # Method 2: await inside async function async def main(): result = await greet() print(result) asyncio.run(main()) Common uses: • Starting async applications • Running coroutines from synchronous code • Chaining async operations with await

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 69. asyncio.run()
  (_i: number) => ({
    q: `What does asyncio.run(coroutine) do?`,
    o: ["Runs the coroutine in an event loop and returns its result", "Creates a new thread", "Compiles the coroutine", "Converts coroutine to a generator"],
    c: 0,
    e: "asyncio.run() creates an event loop, runs the coroutine, and returns its result.",
    de: `asyncio.run() is the primary way to run an async program from synchronous code. It creates a new event loop, runs the given coroutine until it completes, and then closes the event loop.

Key concepts:
• Creates a new event loop
• Runs the coroutine to completion
• Returns the coroutine's result
• Closes the event loop when done
• Should only be called once (typically in main)

How it works:
• asyncio.run(main()) starts the async program
• It manages the event loop lifecycle automatically
• The coroutine runs until it returns or raises
• Any pending tasks are cancelled on completion

Example:
import asyncio

async def fetch_data():
    await asyncio.sleep(1)
    return {"status": "ok"}

result = asyncio.run(fetch_data())
print(result)  # {"status": "ok"}

Common uses:
• Entry point for async applications
• Running async code from synchronous scripts
• Testing async functions

Key Concepts:
• Key concepts: • Creates a new event loop • Runs the coroutine to completion • Returns the coroutine's result • Closes the event loop when done • Should only be called once (typically in main) How it works: • asyncio.run(main()) starts the async program • It manages the event loop lifecycle automatically • The coroutine runs until it returns or raises • Any pending tasks are cancelled on completion Example: import asyncio async def fetch_data(): await asyncio.sleep(1) return {"status": "ok"} result = asyncio.run(fetch_data()) print(result) # {"status": "ok"} Common uses: • Entry point for async applications • Running async code from synchronous scripts • Testing async functions

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 70. await restriction
  (_i: number) => ({
    q: `Where can the 'await' keyword be used?`,
    o: ["Only inside an async function", "Anywhere in Python", "Only in modules", "Only at the top level"],
    c: 0,
    e: "await can only be used inside an async function (defined with async def).",
    de: `The 'await' keyword can only be used inside functions defined with 'async def'. Using it outside an async function raises a SyntaxError.

Key concepts:
• await is only valid inside async def functions
• Using await outside async def causes SyntaxError
• await pauses the coroutine until the awaited result is ready
• Python 3.10+ REPL allows top-level await as a special case

How it works:
• async def my_func(): result = await something()
• await suspends the coroutine, letting other tasks run
• When the awaited coroutine completes, execution resumes
• The event loop manages the scheduling

Example:
# Valid: await inside async function
async def main():
    result = await some_coroutine()
    return result

# Invalid: SyntaxError
# result = await some_coroutine()  # Not inside async def!

Common uses:
• Calling other async functions
• Waiting for I/O operations
• Chaining asynchronous operations

Key Concepts:
• Common uses: • Calling other async functions • Waiting for I/O operations • Chaining asynchronous operations

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 71. asyncio.run returns the value
  (_i: number) => ({
    q: `import asyncio\nasync def f(): return 42\nWhat is asyncio.run(f())?`,
    o: ["42", "None", "A coroutine", "Error"],
    c: 0,
    e: "asyncio.run() executes the coroutine and returns its result, which is 42.",
    de: `asyncio.run() runs the given coroutine to completion and returns whatever the coroutine returns. In this case, f() returns 42, so asyncio.run(f()) evaluates to 42.

Key concepts:
• asyncio.run() executes the coroutine fully
• The return value of the coroutine becomes the return value of asyncio.run()
• This bridges async and sync worlds

How it works:
• async def f(): return 42 defines a coroutine that returns 42
• f() creates the coroutine object
• asyncio.run(f()) runs it and returns 42
• The integer 42 is the final result

Example:
import asyncio

async def f():
    return 42

result = asyncio.run(f())
print(result)  # 42
print(type(result))  # <class 'int'>

Common uses:
• Getting results from async functions in synchronous code
• Testing async functions
• Running the main async entry point

Key Concepts:
• Key concepts: • asyncio.run() executes the coroutine fully • The return value of the coroutine becomes the return value of asyncio.run() • This bridges async and sync worlds How it works: • async def f(): return 42 defines a coroutine that returns 42 • f() creates the coroutine object • asyncio.run(f()) runs it and returns 42 • The integer 42 is the final result Example: import asyncio async def f(): return 42 result = asyncio.run(f()) print(result) # 42 print(type(result)) # <class 'int'> Common uses: • Getting results from async functions in synchronous code • Testing async functions • Running the main async entry point

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 72. asyncio.sleep
  (_i: number) => ({
    q: `asyncio.sleep(1) is:`,
    o: ["A coroutine that pauses for 1 second without blocking", "A function that blocks the thread for 1 second", "A timer that runs in a separate thread", "A system call to the OS sleep"],
    c: 0,
    e: "asyncio.sleep(1) is a non-blocking coroutine that pauses for 1 second.",
    de: `asyncio.sleep() is a coroutine that suspends the current task for a given number of seconds without blocking the event loop. Other tasks can run during the sleep period, making it fundamentally different from time.sleep().

Key concepts:
• asyncio.sleep() is a coroutine (must be awaited)
• It is non-blocking: other tasks can run during the wait
• time.sleep() blocks the entire thread
• asyncio.sleep() cooperatively yields control

How it works:
• await asyncio.sleep(1) pauses the current coroutine for 1 second
• The event loop can run other coroutines during this time
• After 1 second, the coroutine resumes
• The event loop manages the timing

Example:
import asyncio

async def task(name, delay):
    print(f"{name} starting")
    await asyncio.sleep(delay)
    print(f"{name} done after {delay}s")

async def main():
    await asyncio.gather(
        task("A", 2),
        task("B", 1)
    )
# B finishes first despite starting second

Common uses:
• Simulating delays in async code
• Rate limiting async operations
• Testing concurrent behavior

Key Concepts:
• Key concepts: • asyncio.sleep() is a coroutine (must be awaited) • It is non-blocking: other tasks can run during the wait • time.sleep() blocks the entire thread • asyncio.sleep() cooperatively yields control How it works: • await asyncio.sleep(1) pauses the current coroutine for 1 second • The event loop can run other coroutines during this time • After 1 second, the coroutine resumes • The event loop manages the timing Example: import asyncio async def task(name, delay): print(f"{name} starting") await asyncio.sleep(delay) print(f"{name} done after {delay}s") async def main(): await asyncio.gather( task("A", 2), task("B", 1) ) # B finishes first despite starting second Common uses: • Simulating delays in async code • Rate limiting async operations • Testing concurrent behavior

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 73. time.sleep vs asyncio.sleep
  (_i: number) => ({
    q: `What is the key difference between time.sleep(1) and asyncio.sleep(1)?`,
    o: ["time.sleep blocks the entire thread", "asyncio.sleep blocks the thread", "They are identical", "time.sleep is non-blocking"],
    c: 0,
    e: "time.sleep() blocks the entire thread; asyncio.sleep() is non-blocking and lets other tasks run.",
    de: `time.sleep() and asyncio.sleep() both pause execution for a specified duration, but they work fundamentally differently. time.sleep() blocks the entire thread, preventing any other code from running. asyncio.sleep() is cooperative and allows the event loop to run other tasks during the wait.

Key concepts:
• time.sleep(n) blocks the thread for n seconds
• asyncio.sleep(n) yields control to the event loop for n seconds
• Using time.sleep inside async code blocks the event loop
• asyncio.sleep enables true concurrency

How it works:
• time.sleep: thread is completely frozen, nothing else runs
• asyncio.sleep: current coroutine is suspended, event loop runs others
• Never use time.sleep() in async code (it blocks everything)
• asyncio.sleep() enables concurrent task execution

Example:
import asyncio, time

async def bad_example():
    time.sleep(5)  # Blocks everything for 5 seconds!

async def good_example():
    await asyncio.sleep(5)  # Other tasks can run during this

Common uses:
• asyncio.sleep for delays in async code
• time.sleep only in synchronous code or threads
• Understanding blocking vs non-blocking behavior

Key Concepts:
• async def good_example(): await asyncio.sleep(5) # Other tasks can run during this Common uses: • asyncio.sleep for delays in async code • time.sleep only in synchronous code or threads • Understanding blocking vs non-blocking behavior

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 74. asyncio.gather
  (_i: number) => ({
    q: `What does asyncio.gather(*coroutines) do?`,
    o: ["Runs multiple coroutines concurrently and returns all results", "Runs coroutines sequentially", "Creates threads for each coroutine", "Picks the fastest coroutine result"],
    c: 0,
    e: "asyncio.gather() runs multiple coroutines concurrently and returns a list of all their results.",
    de: `asyncio.gather() schedules multiple coroutines to run concurrently and waits for all of them to complete. It returns a list of results in the same order as the coroutines were passed.

Key concepts:
• Runs multiple coroutines concurrently (not in parallel)
• Returns results as a list, preserving input order
• All coroutines share the same event loop
• If one raises an exception, others may still complete

How it works:
• asyncio.gather(coro1(), coro2(), coro3()) starts all three
• The event loop switches between them at await points
• Results are collected in the original order
• Total time is roughly the longest single coroutine, not the sum

Example:
import asyncio

async def fetch(url, delay):
    await asyncio.sleep(delay)
    return f"Result from {url}"

async def main():
    results = await asyncio.gather(
        fetch("api/a", 2),
        fetch("api/b", 1),
        fetch("api/c", 3)
    )
    print(results)
    # Takes ~3 seconds total, not 6

asyncio.run(main())

Common uses:
• Fetching multiple URLs concurrently
• Running independent async operations in parallel
• Batch processing with async I/O

Key Concepts:
• Key concepts: • Runs multiple coroutines concurrently (not in parallel) • Returns results as a list, preserving input order • All coroutines share the same event loop • If one raises an exception, others may still complete How it works: • asyncio.gather(coro1(), coro2(), coro3()) starts all three • The event loop switches between them at await points • Results are collected in the original order • Total time is roughly the longest single coroutine, not the sum Example: import asyncio async def fetch(url, delay): await asyncio.sleep(delay) return f"Result from {url}" async def main(): results = await asyncio.gather( fetch("api/a", 2), fetch("api/b", 1), fetch("api/c", 3) ) print(results) # Takes ~3 seconds total, not 6 asyncio.run(main()) Common uses: • Fetching multiple URLs concurrently • Running independent async operations in parallel • Batch processing with async I/O

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 75. async for
  (_i: number) => ({
    q: `What is 'async for' used for?`,
    o: ["Iterating over asynchronous iterators", "Looping faster than regular for", "Parallel loop execution", "Iterating in a separate thread"],
    c: 0,
    e: "async for iterates over asynchronous iterators that yield values asynchronously.",
    de: `'async for' is used to iterate over asynchronous iterators — objects that implement __aiter__ and __anext__ methods. Each iteration can involve awaiting an asynchronous operation, such as reading from a network stream.

Key concepts:
• async for works with asynchronous iterators
• Each iteration step can be an async operation
• The iterator implements __aiter__ and __anext__
• Used when data arrives asynchronously (streams, websockets)

How it works:
• async for item in async_iterable: processes items as they arrive
• Each call to __anext__ is awaited
• StopAsyncIteration signals the end
• Can only be used inside async functions

Example:
async def async_range(n):
    for i in range(n):
        await asyncio.sleep(0.1)
        yield i

async def main():
    async for num in async_range(5):
        print(num)

Common uses:
• Reading from async streams (websockets, databases)
• Processing paginated API responses
• Consuming async generators

Key Concepts:
• Key concepts: • async for works with asynchronous iterators • Each iteration step can be an async operation • The iterator implements __aiter__ and __anext__ • Used when data arrives asynchronously (streams, websockets) How it works: • async for item in async_iterable: processes items as they arrive • Each call to __anext__ is awaited • StopAsyncIteration signals the end • Can only be used inside async functions Example: async def async_range(n): for i in range(n): await asyncio.sleep(0.1) yield i async def main(): async for num in async_range(5): print(num) Common uses: • Reading from async streams (websockets, databases) • Processing paginated API responses • Consuming async generators

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 76. async with
  (_i: number) => ({
    q: `What is 'async with' used for?`,
    o: ["Using asynchronous context managers", "Faster file operations", "Parallel context managers", "Thread-safe locking"],
    c: 0,
    e: "async with is used with asynchronous context managers that have __aenter__ and __aexit__.",
    de: `'async with' is the asynchronous version of the 'with' statement. It works with asynchronous context managers that implement __aenter__ and __aexit__ coroutine methods. This is essential for resources that require async setup or teardown.

Key concepts:
• Works with objects implementing __aenter__ and __aexit__
• Both __aenter__ and __aexit__ are coroutines (awaited)
• Used for async resource management
• Can only be used inside async functions

How it works:
• async with resource as r: acquires the resource asynchronously
• __aenter__ is awaited on entry
• __aexit__ is awaited on exit (even if exception occurs)
• Ensures proper cleanup of async resources

Example:
import aiohttp

async def fetch(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.text()

Common uses:
• Async HTTP sessions (aiohttp)
• Async database connections
• Async file operations (aiofiles)
• Async locks and semaphores

Key Concepts:
• Key concepts: • Works with objects implementing __aenter__ and __aexit__ • Both __aenter__ and __aexit__ are coroutines (awaited) • Used for async resource management • Can only be used inside async functions How it works: • async with resource as r: acquires the resource asynchronously • __aenter__ is awaited on entry • __aexit__ is awaited on exit (even if exception occurs) • Ensures proper cleanup of async resources Example: import aiohttp async def fetch(url): async with aiohttp.ClientSession() as session: async with session.get(url) as response: return await response.text() Common uses: • Async HTTP sessions (aiohttp) • Async database connections • Async file operations (aiofiles) • Async locks and semaphores

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 77. Event loop
  (_i: number) => ({
    q: `What is an event loop in asyncio?`,
    o: ["The core that manages and schedules coroutines", "A for loop that handles events", "A GUI event handler", "A thread pool manager"],
    c: 0,
    e: "The event loop is the core of asyncio — it manages, schedules, and runs coroutines.",
    de: `The event loop is the central component of asyncio. It manages the execution of coroutines, handles I/O events, runs callbacks, and schedules tasks. Think of it as a dispatcher that keeps track of all pending operations and runs them when they are ready.

Key concepts:
• One event loop per thread (typically one per program)
• Manages all coroutines, tasks, and callbacks
• Runs until all tasks are complete
• asyncio.run() creates and manages the event loop automatically

How it works:
• The event loop maintains a queue of ready tasks
• It runs each task until it hits an await point
• Then it moves to the next ready task
• When an awaited operation completes, the task is re-queued
• This enables cooperative multitasking

Example:
import asyncio

async def say(msg, delay):
    await asyncio.sleep(delay)
    print(msg)

async def main():
    await asyncio.gather(
        say("Hello", 1),
        say("World", 2)
    )

asyncio.run(main())  # Event loop runs both tasks

Common uses:
• Running async applications
• Managing concurrent I/O operations
• Scheduling callbacks and timers

Key Concepts:
• Key concepts: • One event loop per thread (typically one per program) • Manages all coroutines, tasks, and callbacks • Runs until all tasks are complete • asyncio.run() creates and manages the event loop automatically How it works: • The event loop maintains a queue of ready tasks • It runs each task until it hits an await point • Then it moves to the next ready task • When an awaited operation completes, the task is re-queued • This enables cooperative multitasking Example: import asyncio async def say(msg, delay): await asyncio.sleep(delay) print(msg) async def main(): await asyncio.gather( say("Hello", 1), say("World", 2) ) asyncio.run(main()) # Event loop runs both tasks Common uses: • Running async applications • Managing concurrent I/O operations • Scheduling callbacks and timers

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 78. asyncio.create_task
  (_i: number) => ({
    q: `What does asyncio.create_task(coro) do?`,
    o: ["Schedules the coroutine to run concurrently as a Task", "Creates a new thread", "Runs the coroutine immediately to completion", "Converts coroutine to a generator"],
    c: 0,
    e: "asyncio.create_task() wraps a coroutine into a Task and schedules it for concurrent execution.",
    de: `asyncio.create_task() takes a coroutine and wraps it in a Task object, scheduling it to run concurrently in the current event loop. Unlike await, which waits for a coroutine to finish, create_task starts it running in the background.

Key concepts:
• Wraps a coroutine in a Task object
• Schedules it for concurrent execution
• Returns immediately (does not wait for completion)
• The task runs in the background on the event loop

How it works:
• task = asyncio.create_task(some_coro())
• The coroutine starts running at the next await point
• You can await the task later to get its result
• Multiple tasks run concurrently on the same event loop

Example:
import asyncio

async def background_work():
    await asyncio.sleep(2)
    return "done"

async def main():
    task = asyncio.create_task(background_work())
    print("Task started, doing other work...")
    await asyncio.sleep(1)
    result = await task  # Wait for task to finish
    print(result)  # "done"

asyncio.run(main())

Common uses:
• Running background operations
• Fire-and-forget tasks
• Building concurrent workflows

Key Concepts:
• Key concepts: • Wraps a coroutine in a Task object • Schedules it for concurrent execution • Returns immediately (does not wait for completion) • The task runs in the background on the event loop How it works: • task = asyncio.create_task(some_coro()) • The coroutine starts running at the next await point • You can await the task later to get its result • Multiple tasks run concurrently on the same event loop Example: import asyncio async def background_work(): await asyncio.sleep(2) return "done" async def main(): task = asyncio.create_task(background_work()) print("Task started, doing other work...") await asyncio.sleep(1) result = await task # Wait for task to finish print(result) # "done" asyncio.run(main()) Common uses: • Running background operations • Fire-and-forget tasks • Building concurrent workflows

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 79. Mixing sync and async
  (_i: number) => ({
    q: `Can you mix synchronous and asynchronous code in Python?`,
    o: ["Yes, but sync calls inside async can block the event loop", "No, they are completely incompatible", "Yes, with no restrictions", "Only with special imports"],
    c: 0,
    e: "You can mix them, but synchronous blocking calls inside async functions will block the event loop.",
    de: `You can combine synchronous and asynchronous code in Python, but care must be taken. Synchronous blocking calls (like time.sleep, file I/O, or network calls) inside async functions will block the entire event loop, preventing other tasks from running.

Key concepts:
• Sync code can call async code via asyncio.run()
• Async code can call sync code, but blocking calls freeze the event loop
• Use loop.run_in_executor() for blocking operations in async code
• Libraries like asyncio provide async versions of blocking operations

How it works:
• Calling sync functions in async code blocks the loop
• asyncio.to_thread() (Python 3.9+) runs sync code in a thread
• loop.run_in_executor() runs blocking code in a thread pool
• Async libraries (aiohttp, aiofiles) provide non-blocking alternatives

Example:
import asyncio

async def main():
    # Bad: blocks the event loop
    # time.sleep(5)

    # Good: run blocking code in a thread
    await asyncio.to_thread(time.sleep, 5)

    # Good: use async version
    await asyncio.sleep(5)

Common uses:
• Integrating legacy sync libraries with async code
• Running CPU-bound work in executor threads
• Gradual migration from sync to async

Key Concepts:
• Key concepts: • Sync code can call async code via asyncio.run() • Async code can call sync code, but blocking calls freeze the event loop • Use loop.run_in_executor() for blocking operations in async code • Libraries like asyncio provide async versions of blocking operations How it works: • Calling sync functions in async code blocks the loop • asyncio.to_thread() (Python 3.9+) runs sync code in a thread • loop.run_in_executor() runs blocking code in a thread pool • Async libraries (aiohttp, aiofiles) provide non-blocking alternatives Example: import asyncio async def main(): # Bad: blocks the event loop # time.sleep(5) # Good: run blocking code in a thread await asyncio.to_thread(time.sleep, 5) # Good: use async version await asyncio.sleep(5) Common uses: • Integrating legacy sync libraries with async code • Running CPU-bound work in executor threads • Gradual migration from sync to async

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 80. What problem does async solve
  (_i: number) => ({
    q: `What problem does async/await primarily solve?`,
    o: ["Efficient I/O-bound concurrency without threads", "Faster CPU computations", "Automatic parallelism on multiple cores", "Memory management"],
    c: 0,
    e: "async/await enables efficient I/O-bound concurrency without the overhead of threads.",
    de: `async/await solves the problem of efficiently handling many I/O-bound operations concurrently without needing to create threads. It is ideal for applications that spend most of their time waiting for external resources (network, disk, database).

Key concepts:
• Designed for I/O-bound concurrency (not CPU-bound)
• Single-threaded cooperative multitasking
• No thread creation overhead or synchronization issues
• Scales to thousands of concurrent connections

How it works:
• Instead of one thread per connection, one event loop handles all
• When a task waits for I/O, others can run
• No context switching overhead of OS threads
• No need for locks or thread synchronization

Example:
import asyncio
import aiohttp

async def fetch_all(urls):
    async with aiohttp.ClientSession() as session:
        tasks = [session.get(url) for url in urls]
        responses = await asyncio.gather(*tasks)
        return [await r.text() for r in responses]

# Can handle thousands of URLs concurrently
# with minimal resource usage

Common uses:
• Web servers handling many concurrent requests
• Web scraping multiple URLs simultaneously
• Chat applications and real-time systems
• Microservices communicating over network

Key Concepts:
• Key concepts: • Designed for I/O-bound concurrency (not CPU-bound) • Single-threaded cooperative multitasking • No thread creation overhead or synchronization issues • Scales to thousands of concurrent connections How it works: • Instead of one thread per connection, one event loop handles all • When a task waits for I/O, others can run • No context switching overhead of OS threads • No need for locks or thread synchronization Example: import asyncio import aiohttp async def fetch_all(urls): async with aiohttp.ClientSession() as session: tasks = [session.get(url) for url in urls] responses = await asyncio.gather(*tasks) return [await r.text() for r in responses] # Can handle thousands of URLs concurrently # with minimal resource usage Common uses: • Web servers handling many concurrent requests • Web scraping multiple URLs simultaneously • Chat applications and real-time systems • Microservices communicating over network

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 81. Pythonic swap
  (_i: number) => ({
    q: `What is the Pythonic way to swap two variables a and b?`,
    o: ["a, b = b, a", "temp = a; a = b; b = temp", "a = b; b = a", "swap(a, b)"],
    c: 0,
    e: "Python allows tuple unpacking for swaps: a, b = b, a — no temporary variable needed.",
    de: `Python's tuple unpacking allows you to swap two variables in a single statement without a temporary variable. The expression a, b = b, a evaluates the right side first (creating a tuple), then unpacks it into the left side.

Key concepts:
• a, b = b, a swaps values in one line
• The right side is evaluated completely before assignment
• No temporary variable needed
• Works with any number of variables

How it works:
• Python evaluates b, a creating a tuple (b_val, a_val)
• Then unpacks it into a, b
• a gets b's original value, b gets a's original value
• This is safe because the right side is fully evaluated first

Example:
a = 1
b = 2
a, b = b, a
print(a, b)  # 2 1

# Also works with more variables:
x, y, z = z, x, y

Common uses:
• Swapping variables in algorithms (sorting, etc.)
• Rotating values
• Clean, readable variable exchanges

Key Concepts:
• Key concepts: • a, b = b, a swaps values in one line • The right side is evaluated completely before assignment • No temporary variable needed • Works with any number of variables How it works: • Python evaluates b, a creating a tuple (b_val, a_val) • Then unpacks it into a, b • a gets b's original value, b gets a's original value • This is safe because the right side is fully evaluated first Example: a = 1 b = 2 a, b = b, a print(a, b) # 2 1 # Also works with more variables: x, y, z = z, x, y Common uses: • Swapping variables in algorithms (sorting, etc.) • Rotating values • Clean, readable variable exchanges

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 82. Pythonic empty check
  (_i: number) => ({
    q: `What is the Pythonic way to check if a list is empty?`,
    o: ["if not my_list:", "if len(my_list) == 0:", "if my_list == []:", "if my_list is None:"],
    c: 0,
    e: "Use 'if not my_list:' — empty collections are falsy in Python.",
    de: `In Python, empty collections (lists, dicts, sets, strings, tuples) are falsy. The Pythonic way to check for emptiness is to use the implicit boolean value: 'if not my_list:' rather than explicitly checking the length.

Key concepts:
• Empty collections are falsy: [], {}, set(), "", ()
• Non-empty collections are truthy
• 'if not my_list:' is preferred over 'if len(my_list) == 0:'
• This also works for strings, dicts, sets, tuples

How it works:
• Python calls __bool__ (or __len__) on the object
• Empty containers return False / 0
• Non-empty containers return True / non-zero
• 'not' inverts the boolean value

Example:
my_list = []
if not my_list:
    print("List is empty")  # This runs

my_dict = {"a": 1}
if my_dict:
    print("Dict has items")  # This runs

Common uses:
• Checking if a function returned an empty result
• Validating input data
• Guard clauses in functions

Key Concepts:
• Key concepts: • Empty collections are falsy: [], {}, set(), "", () • Non-empty collections are truthy • 'if not my_list:' is preferred over 'if len(my_list) == 0:' • This also works for strings, dicts, sets, tuples How it works: • Python calls __bool__ (or __len__) on the object • Empty containers return False / 0 • Non-empty containers return True / non-zero • 'not' inverts the boolean value Example: my_list = [] if not my_list: print("List is empty") # This runs my_dict = {"a": 1} if my_dict: print("Dict has items") # This runs Common uses: • Checking if a function returned an empty result • Validating input data • Guard clauses in functions

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 83. Pythonic string building
  (_i: number) => ({
    q: `What is the Pythonic way to build a string from a list of parts?`,
    o: ['"".join(parts)', "s += part in a loop", "str.concat(parts)", "reduce(add, parts)"],
    c: 0,
    e: "Use ''.join(parts) — it is much faster and more Pythonic than += in a loop.",
    de: `The str.join() method is the Pythonic way to concatenate a sequence of strings. Using += in a loop creates a new string object each time, which is O(n^2) for n concatenations. join() is O(n) because it pre-allocates the final string.

Key concepts:
• "".join(parts) concatenates all strings in parts
• The separator goes before .join()
• Much faster than repeated += (O(n) vs O(n^2))
• Works with any iterable of strings

How it works:
• separator.join(iterable) joins all elements with separator
• "".join(["a","b","c"]) produces "abc"
• ", ".join(["a","b","c"]) produces "a, b, c"
• Pre-allocates memory for the final string

Example:
parts = ["Hello", " ", "World", "!"]
result = "".join(parts)  # "Hello World!"

words = ["Python", "is", "great"]
sentence = " ".join(words)  # "Python is great"

# Bad (slow for large lists):
# s = ""
# for part in parts: s += part

Common uses:
• Building strings from lists of words
• CSV row construction
• Path building with os.path.join()

Key Concepts:
• Key concepts: • "".join(parts) concatenates all strings in parts • The separator goes before .join() • Much faster than repeated += (O(n) vs O(n^2)) • Works with any iterable of strings How it works: • separator.join(iterable) joins all elements with separator • "".join(["a","b","c"]) produces "abc" • ", ".join(["a","b","c"]) produces "a, b, c" • Pre-allocates memory for the final string Example: parts = ["Hello", " ", "World", "!"] result = "".join(parts) # "Hello World!" words = ["Python", "is", "great"] sentence = " ".join(words) # "Python is great" # Bad (slow for large lists): # s = "" # for part in parts: s += part Common uses: • Building strings from lists of words • CSV row construction • Path building with os.path.join()

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 84. Pythonic type checking
  (_i: number) => ({
    q: `What is the Pythonic way to check if x is an integer?`,
    o: ["isinstance(x, int)", "type(x) == int", "x.type() == 'int'", "int(x) == x"],
    c: 0,
    e: "isinstance(x, int) is preferred — it also works with subclasses of int.",
    de: `isinstance() is the Pythonic way to check types because it respects inheritance. type(x) == int only matches exactly int, not subclasses. isinstance() also accepts a tuple of types for checking multiple types at once.

Key concepts:
• isinstance(x, int) checks if x is an int or a subclass of int
• type(x) == int only matches exactly int
• isinstance respects inheritance hierarchy
• Can check multiple types: isinstance(x, (int, float))

How it works:
• isinstance(x, int) returns True if x is int or a subclass
• type(x) == int returns True only if x is exactly int
• bool is a subclass of int: isinstance(True, int) is True
• type(True) == int is False (type is bool, not int)

Example:
x = 42
isinstance(x, int)   # True
type(x) == int        # True

y = True
isinstance(y, int)    # True (bool is subclass of int)
type(y) == int        # False (type is bool)

isinstance(x, (int, float))  # Check multiple types

Common uses:
• Input validation
• Type checking in functions
• Duck typing exceptions where type matters

Key Concepts:
• Key concepts: • isinstance(x, int) checks if x is an int or a subclass of int • type(x) == int only matches exactly int • isinstance respects inheritance hierarchy • Can check multiple types: isinstance(x, (int, float)) How it works: • isinstance(x, int) returns True if x is int or a subclass • type(x) == int returns True only if x is exactly int • bool is a subclass of int: isinstance(True, int) is True • type(True) == int is False (type is bool, not int) Example: x = 42 isinstance(x, int) # True type(x) == int # True y = True isinstance(y, int) # True (bool is subclass of int) type(y) == int # False (type is bool) isinstance(x, (int, float)) # Check multiple types Common uses: • Input validation • Type checking in functions • Duck typing exceptions where type matters

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 85. Pythonic None check
  (_i: number) => ({
    q: `What is the Pythonic way to check if x is None?`,
    o: ["if x is None:", "if x == None:", "if not x:", "if type(x) is None:"],
    c: 0,
    e: "Use 'is None' — None is a singleton, so identity comparison is correct.",
    de: `The Pythonic way to check for None is using 'is None' (identity comparison) rather than '== None' (equality comparison). None is a singleton object, meaning there is only one instance of it in memory.

Key concepts:
• None is a singleton — only one None object exists
• 'is' checks object identity (same object in memory)
• '==' checks equality (can be overridden by __eq__)
• 'is None' is safer and faster than '== None'

How it works:
• x is None checks if x points to the exact None object
• x == None calls x.__eq__(None), which can be customized
• A class could override __eq__ to return True for None incorrectly
• 'is None' cannot be fooled by custom __eq__

Example:
result = some_function()

# Good
if result is None:
    print("No result")

# Bad
if result == None:
    print("No result")

# Also bad — catches other falsy values too
if not result:
    print("This catches 0, '', [], False AND None!")

Common uses:
• Checking function return values
• Default parameter handling
• Optional value checking

Key Concepts:
• Key concepts: • None is a singleton — only one None object exists • 'is' checks object identity (same object in memory) • '==' checks equality (can be overridden by __eq__) • 'is None' is safer and faster than '== None' How it works: • x is None checks if x points to the exact None object • x == None calls x.__eq__(None), which can be customized • A class could override __eq__ to return True for None incorrectly • 'is None' cannot be fooled by custom __eq__ Example: result = some_function() # Good if result is None: print("No result") # Bad if result == None: print("No result") # Also bad — catches other falsy values too if not result: print("This catches 0, '', [], False AND None!") Common uses: • Checking function return values • Default parameter handling • Optional value checking

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 86. List comprehension vs map
  (_i: number) => ({
    q: `Which is more Pythonic: [x*2 for x in lst] or list(map(lambda x: x*2, lst))?`,
    o: ["List comprehension [x*2 for x in lst]", "map with lambda", "Both are equally Pythonic", "Neither — use a for loop"],
    c: 0,
    e: "List comprehensions are more Pythonic and readable than map() with lambda.",
    de: `List comprehensions are generally considered more Pythonic than map() with lambda functions. They are more readable, often faster, and can include filtering. map() is acceptable when using a named function.

Key concepts:
• List comprehensions are preferred for simple transformations
• map() with a named function is acceptable
• map() with lambda is less readable than a comprehension
• List comprehensions can also filter with 'if'

How it works:
• [x*2 for x in lst] creates a new list with doubled values
• list(map(lambda x: x*2, lst)) does the same but is less clear
• Comprehensions are often faster due to optimization
• map() returns a lazy iterator (needs list() to materialize)

Example:
numbers = [1, 2, 3, 4, 5]

# Pythonic
doubled = [x * 2 for x in numbers]

# Less Pythonic
doubled = list(map(lambda x: x * 2, numbers))

# map() with named function is OK
doubled = list(map(str, numbers))  # Acceptable

Common uses:
• Transforming lists of data
• Creating new lists from existing ones
• Filtering and transforming in one step

Key Concepts:
• Key concepts: • List comprehensions are preferred for simple transformations • map() with a named function is acceptable • map() with lambda is less readable than a comprehension • List comprehensions can also filter with 'if' How it works: • [x*2 for x in lst] creates a new list with doubled values • list(map(lambda x: x*2, lst)) does the same but is less clear • Comprehensions are often faster due to optimization • map() returns a lazy iterator (needs list() to materialize) Example: numbers = [1, 2, 3, 4, 5] # Pythonic doubled = [x * 2 for x in numbers] # Less Pythonic doubled = list(map(lambda x: x * 2, numbers)) # map() with named function is OK doubled = list(map(str, numbers)) # Acceptable Common uses: • Transforming lists of data • Creating new lists from existing ones • Filtering and transforming in one step

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 87. Unpacking in for loops
  (_i: number) => ({
    q: `What is the Pythonic way to iterate over dictionary key-value pairs?`,
    o: ["for k, v in d.items():", "for i in range(len(d)):", "for k in d: v = d[k]", "for pair in d: k = pair[0]"],
    c: 0,
    e: "Use tuple unpacking: for k, v in d.items(): — more readable than indexing.",
    de: `Python's tuple unpacking in for loops lets you directly assign key-value pairs from dict.items() to separate variables. This is more Pythonic and readable than manually accessing values by key.

Key concepts:
• dict.items() returns (key, value) tuples
• Tuple unpacking assigns both at once: for k, v in d.items()
• More readable than for k in d: v = d[k]
• Also works with enumerate(), zip(), and other tuple-producing iterables

How it works:
• d.items() yields (key, value) pairs
• for k, v in d.items(): unpacks each pair
• k gets the key, v gets the value
• No need to access d[k] separately

Example:
scores = {"Alice": 95, "Bob": 87, "Carol": 92}

# Pythonic
for name, score in scores.items():
    print(f"{name}: {score}")

# Less Pythonic
for name in scores:
    score = scores[name]
    print(f"{name}: {score}")

Common uses:
• Iterating over dictionaries
• Processing structured data
• Unpacking any iterable of tuples

Key Concepts:
• Key concepts: • dict.items() returns (key, value) tuples • Tuple unpacking assigns both at once: for k, v in d.items() • More readable than for k in d: v = d[k] • Also works with enumerate(), zip(), and other tuple-producing iterables How it works: • d.items() yields (key, value) pairs • for k, v in d.items(): unpacks each pair • k gets the key, v gets the value • No need to access d[k] separately Example: scores = {"Alice": 95, "Bob": 87, "Carol": 92} # Pythonic for name, score in scores.items(): print(f"{name}: {score}") # Less Pythonic for name in scores: score = scores[name] print(f"{name}: {score}") Common uses: • Iterating over dictionaries • Processing structured data • Unpacking any iterable of tuples

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 88. Use enumerate
  (_i: number) => ({
    q: `What is the Pythonic way to loop with both index and value?`,
    o: ["for i, x in enumerate(lst):", "for i in range(len(lst)): x = lst[i]", "i = 0; for x in lst: i += 1", "for i, x in zip(range(len(lst)), lst):"],
    c: 0,
    e: "enumerate() gives both index and value — more Pythonic than range(len(lst)).",
    de: `enumerate() is the Pythonic way to loop over a sequence while tracking the index. It returns (index, value) pairs, which can be unpacked directly in the for loop.

Key concepts:
• enumerate(iterable) yields (index, value) pairs
• More readable than range(len(lst)) with manual indexing
• Supports a start parameter: enumerate(lst, start=1)
• Works with any iterable, not just lists

How it works:
• for i, x in enumerate(lst): unpacks index and value
• Default start index is 0
• enumerate(lst, 1) starts counting from 1
• Returns an enumerate object (lazy iteration)

Example:
fruits = ["apple", "banana", "cherry"]

# Pythonic
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")

# With start parameter
for i, fruit in enumerate(fruits, 1):
    print(f"{i}. {fruit}")

# Less Pythonic
for i in range(len(fruits)):
    print(f"{i}: {fruits[i]}")

Common uses:
• Numbering items in output
• Tracking position while iterating
• Building indexed data structures

Key Concepts:
• {fruit}") # Less Pythonic for i in range(len(fruits)): print(f"{i}: {fruits[i]}") Common uses: • Numbering items in output • Tracking position while iterating • Building indexed data structures

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 89. Use zip
  (_i: number) => ({
    q: `What is the Pythonic way to iterate over two lists simultaneously?`,
    o: ["for a, b in zip(xs, ys):", "for i in range(len(xs)): a = xs[i]; b = ys[i]", "for a in xs: for b in ys:", "while i < len(xs): ..."],
    c: 0,
    e: "zip() pairs elements from multiple iterables — cleaner than index-based access.",
    de: `zip() is the Pythonic way to iterate over two or more sequences in parallel. It pairs corresponding elements from each iterable and stops at the shortest one.

Key concepts:
• zip(a, b) pairs elements: (a[0],b[0]), (a[1],b[1]), ...
• Stops at the shortest iterable
• zip_longest (from itertools) pads shorter iterables
• Can zip more than two iterables

How it works:
• zip(xs, ys) creates an iterator of tuples
• for a, b in zip(xs, ys): unpacks each pair
• If lengths differ, zip stops at the shorter one
• itertools.zip_longest fills missing values with a default

Example:
names = ["Alice", "Bob", "Carol"]
scores = [95, 87, 92]

# Pythonic
for name, score in zip(names, scores):
    print(f"{name}: {score}")

# Less Pythonic
for i in range(len(names)):
    print(f"{names[i]}: {scores[i]}")

Common uses:
• Pairing related data from separate lists
• Building dictionaries: dict(zip(keys, values))
• Processing parallel sequences

Key Concepts:
• • Stops at the shortest iterable • zip_longest (from itertools) pads shorter iterables • Can zip more than two iterables How it works: • zip(xs, ys) creates an iterator of tuples • for a, b in zip(xs, ys): unpacks each pair • If lengths differ, zip stops at the shorter one • itertools.zip_longest fills missing values with a default Example: names = ["Alice", "Bob", "Carol"] scores = [95, 87, 92] # Pythonic for name, score in zip(names, scores): print(f"{name}: {score}") # Less Pythonic for i in range(len(names)): print(f"{names[i]}: {scores[i]}") Common uses: • Pairing related data from separate lists • Building dictionaries: dict(zip(keys, values)) • Processing parallel sequences

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 90. Context managers
  (_i: number) => ({
    q: `What is the Pythonic way to handle file operations?`,
    o: ["with open(f) as fh:", "fh = open(f); fh.close()", "try: fh = open(f); finally: fh.close()", "open(f).read()"],
    c: 0,
    e: "The 'with' statement (context manager) is always preferred for file operations.",
    de: `The 'with' statement is the Pythonic way to handle resources like files. It guarantees proper cleanup (closing the file) even if an exception occurs, making it safer and more readable than manual open/close.

Key concepts:
• with open(filename) as f: ensures the file is closed
• Works even if an exception occurs inside the block
• No need to explicitly call f.close()
• Uses the context manager protocol (__enter__/__exit__)

How it works:
• with calls __enter__ to open the file
• The file object is bound to the 'as' variable
• When the block exits (normally or via exception), __exit__ closes the file
• This is equivalent to try/finally but cleaner

Example:
# Pythonic
with open("data.txt") as f:
    content = f.read()
# File is automatically closed here

# Less Pythonic (manual close)
f = open("data.txt")
try:
    content = f.read()
finally:
    f.close()

Common uses:
• File reading and writing
• Database connections
• Network sockets
• Lock acquisition and release

Key Concepts:
• Key concepts: • with open(filename) as f: ensures the file is closed • Works even if an exception occurs inside the block • No need to explicitly call f.close() • Uses the context manager protocol (__enter__/__exit__) How it works: • with calls __enter__ to open the file • The file object is bound to the 'as' variable • When the block exits (normally or via exception), __exit__ closes the file • This is equivalent to try/finally but cleaner Example: # Pythonic with open("data.txt") as f: content = f.read() # File is automatically closed here # Less Pythonic (manual close) f = open("data.txt") try: content = f.read() finally: f.close() Common uses: • File reading and writing • Database connections • Network sockets • Lock acquisition and release

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 91. f-strings preferred
  (_i: number) => ({
    q: `f-strings (f"...") are preferred over which older formatting methods?`,
    o: [".format() and % formatting", "Only % formatting", "Only .format()", "str() concatenation only"],
    c: 0,
    e: "f-strings are preferred over both .format() and % formatting since Python 3.6.",
    de: `f-strings (formatted string literals), introduced in Python 3.6, are the preferred way to embed expressions in strings. They are more readable, concise, and faster than the older .format() method and % formatting.

Key concepts:
• f-strings: f"Hello, {name}!" — preferred since Python 3.6
• .format(): "Hello, {}!".format(name) — older but still valid
• % formatting: "Hello, %s!" % name — oldest style
• f-strings are fastest and most readable

How it works:
• f-strings evaluate expressions inside {} at runtime
• Can include any valid Python expression
• Support format specifiers: f"{value:.2f}"
• Are compiled to efficient string concatenation

Example:
name = "Alice"
age = 30

# f-string (preferred)
msg = f"{name} is {age} years old"

# .format() (older)
msg = "{} is {} years old".format(name, age)

# % formatting (oldest)
msg = "%s is %d years old" % (name, age)

Common uses:
• All string formatting in modern Python
• Debug printing: f"{variable=}" (Python 3.8+)
• Building messages, logs, and output

Key Concepts:
• Key concepts: • f-strings: f"Hello, {name}!" — preferred since Python 3.6 • .format(): "Hello, {}!".format(name) — older but still valid • % formatting: "Hello, %s!" % name — oldest style • f-strings are fastest and most readable How it works: • f-strings evaluate expressions inside {} at runtime • Can include any valid Python expression • Support format specifiers: f"{value:.2f}" • Are compiled to efficient string concatenation Example: name = "Alice" age = 30 # f-string (preferred) msg = f"{name} is {age} years old" # .format() (older) msg = "{} is {} years old".format(name, age) # % formatting (oldest) msg = "%s is %d years old" % (name, age) Common uses: • All string formatting in modern Python • Debug printing: f"{variable=}" (Python 3.8+) • Building messages, logs, and output

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 92. collections.defaultdict
  (_i: number) => ({
    q: `collections.defaultdict is preferred over:`,
    o: ["Manually checking if a key exists before setting it", "Using a regular list", "Using a tuple", "Using a set"],
    c: 0,
    e: "defaultdict auto-creates missing keys with a default value, avoiding manual key checks.",
    de: `collections.defaultdict automatically provides a default value for missing keys, eliminating the need to check if a key exists before using it. This makes code cleaner and less error-prone.

Key concepts:
• defaultdict(factory) creates missing keys with factory()
• No need for 'if key not in d:' checks
• Common factories: int (0), list ([]), set (set())
• Subclass of dict — works everywhere dict works

How it works:
• defaultdict(int) creates 0 for missing keys
• defaultdict(list) creates [] for missing keys
• Accessing a missing key triggers the factory
• Simplifies counting, grouping, and accumulating patterns

Example:
from collections import defaultdict

# Without defaultdict (manual checking)
counts = {}
for word in words:
    if word not in counts:
        counts[word] = 0
    counts[word] += 1

# With defaultdict (cleaner)
counts = defaultdict(int)
for word in words:
    counts[word] += 1

# Grouping with defaultdict
groups = defaultdict(list)
for name, dept in employees:
    groups[dept].append(name)

Common uses:
• Counting occurrences
• Grouping items by key
• Building adjacency lists for graphs

Key Concepts:
• Key concepts: • defaultdict(factory) creates missing keys with factory() • No need for 'if key not in d:' checks • Common factories: int (0), list ([]), set (set()) • Subclass of dict — works everywhere dict works How it works: • defaultdict(int) creates 0 for missing keys • defaultdict(list) creates [] for missing keys • Accessing a missing key triggers the factory • Simplifies counting, grouping, and accumulating patterns Example: from collections import defaultdict # Without defaultdict (manual checking) counts = {} for word in words: if word not in counts: counts[word] = 0 counts[word] += 1 # With defaultdict (cleaner) counts = defaultdict(int) for word in words: counts[word] += 1 # Grouping with defaultdict groups = defaultdict(list) for name, dept in employees: groups[dept].append(name) Common uses: • Counting occurrences • Grouping items by key • Building adjacency lists for graphs

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 93. Flat is better than nested
  (_i: number) => ({
    q: `What does "Flat is better than nested" from the Zen of Python mean?`,
    o: ["Avoid deep nesting; prefer flat structures and early returns", "Lists are better than nested lists", "Use only one level of imports", "Never use classes inside classes"],
    c: 0,
    e: "It means to avoid deep nesting by using early returns, guard clauses, and flat structures.",
    de: `"Flat is better than nested" is a principle from the Zen of Python (PEP 20) that encourages writing code with minimal nesting. Deeply nested code (many levels of if/for/try) is harder to read, understand, and maintain.

Key concepts:
• Deep nesting makes code harder to follow
• Early returns reduce nesting levels
• Guard clauses handle edge cases first
• Flat code flows linearly and is easier to read

How it works:
• Instead of nesting conditions, return early for edge cases
• Instead of nested loops, use helper functions
• Instead of deep data structures, prefer flat ones
• Extract nested logic into well-named functions

Example:
# Nested (hard to read)
def process(data):
    if data:
        if data.is_valid():
            if data.has_permission():
                return data.execute()
            else:
                return "No permission"
        else:
            return "Invalid"
    else:
        return "No data"

# Flat (easier to read)
def process(data):
    if not data:
        return "No data"
    if not data.is_valid():
        return "Invalid"
    if not data.has_permission():
        return "No permission"
    return data.execute()

Common uses:
• Refactoring deeply nested conditionals
• Simplifying complex functions
• Making code more maintainable

Key Concepts:
• Key concepts: • Deep nesting makes code harder to follow • Early returns reduce nesting levels • Guard clauses handle edge cases first • Flat code flows linearly and is easier to read How it works: • Instead of nesting conditions, return early for edge cases • Instead of nested loops, use helper functions • Instead of deep data structures, prefer flat ones • Extract nested logic into well-named functions Example: # Nested (hard to read) def process(data): if data: if data.is_valid(): if data.has_permission(): return data.execute() else: return "No permission" else: return "Invalid" else: return "No data" # Flat (easier to read) def process(data): if not data: return "No data" if not data.is_valid(): return "Invalid" if not data.has_permission(): return "No permission" return data.execute() Common uses: • Refactoring deeply nested conditionals • Simplifying complex functions • Making code more maintainable

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 94. Explicit is better than implicit
  (_i: number) => ({
    q: `What does "Explicit is better than implicit" from the Zen of Python mean?`,
    o: ["Code should clearly show what it does", "Always use type annotations", "Never use default arguments", "Write verbose variable names only"],
    c: 0,
    e: "It means code should clearly communicate its intent — no hidden behavior or magic.",
    de: `"Explicit is better than implicit" is a core principle from the Zen of Python (PEP 20). It means code should clearly and obviously express what it does, rather than relying on hidden behavior, conventions, or magic that the reader must already know about.

Key concepts:
• Make behavior visible and obvious in code
• Don't rely on side effects or hidden state
• Name things clearly and descriptively
• Prefer clarity over cleverness

How it works:
• Use descriptive variable names, not single letters
• Pass arguments explicitly rather than relying on globals
• Import specific names rather than using wildcard imports
• Make dependencies and data flow visible

Example:
# Implicit (unclear)
from utils import *
x = f(d)

# Explicit (clear)
from utils import process_data
result = process_data(user_input)

# Implicit
class Config:
    def __init__(self): self._load()  # Hidden side effect

# Explicit
config = Config()
config.load_from_file("settings.ini")

Common uses:
• Choosing clear names over abbreviations
• Avoiding wildcard imports (from x import *)
• Making side effects visible in function signatures

Key Concepts:
• Key concepts: • Make behavior visible and obvious in code • Don't rely on side effects or hidden state • Name things clearly and descriptively • Prefer clarity over cleverness How it works: • Use descriptive variable names, not single letters • Pass arguments explicitly rather than relying on globals • Import specific names rather than using wildcard imports • Make dependencies and data flow visible Example: # Implicit (unclear) from utils import * x = f(d) # Explicit (clear) from utils import process_data result = process_data(user_input) # Implicit class Config: def __init__(self): self._load() # Hidden side effect # Explicit config = Config() config.load_from_file("settings.ini") Common uses: • Choosing clear names over abbreviations • Avoiding wildcard imports (from x import *) • Making side effects visible in function signatures

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 95. One obvious way to do it
  (_i: number) => ({
    q: `"There should be one-- and preferably only one --obvious way to do it" is from:`,
    o: ["The Zen of Python (import this)", "PEP 8", "The Python Tutorial", "The Python Cookbook"],
    c: 0,
    e: "This quote is from The Zen of Python (PEP 20), accessible via 'import this'.",
    de: `This famous quote comes from The Zen of Python (PEP 20), a collection of 19 guiding principles for writing Python code. It was written by Tim Peters and can be viewed by typing 'import this' in a Python interpreter.

Key concepts:
• Part of The Zen of Python (PEP 20)
• Written by Tim Peters
• Accessed by running 'import this'
• Contrasts with Perl's motto "There's more than one way to do it"

How it works:
• Python's design philosophy favors one clear way to accomplish tasks
• This guides language design decisions
• The standard library follows this principle
• It helps maintain consistency across Python codebases

Example:
>>> import this
The Zen of Python, by Tim Peters

Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
...
There should be one-- and preferably only one --obvious way to do it.
...

Common uses:
• Guiding Python language design
• Informing coding style decisions
• Resolving debates about "the right way" to code
• Teaching Python philosophy to newcomers

Key Concepts:
• Common uses: • Guiding Python language design • Informing coding style decisions • Resolving debates about "the right way" to code • Teaching Python philosophy to newcomers

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 96. import this
  (_i: number) => ({
    q: `What does 'import this' display in Python?`,
    o: ["The Zen of Python (PEP 20)", "A list of all modules", "The Python version", "The help documentation"],
    c: 0,
    e: "'import this' displays The Zen of Python, a collection of guiding principles by Tim Peters.",
    de: `'import this' is an Easter egg in Python that displays The Zen of Python (PEP 20), a collection of 19 aphorisms that capture Python's design philosophy. It was written by long-time Python contributor Tim Peters.

Key concepts:
• The Zen of Python has 19 guiding principles
• Written by Tim Peters
• PEP 20 is its official designation
• It is an Easter egg built into every Python installation

How it works:
• The 'this' module contains an encoded version of the text
• Importing it triggers the display
• The encoding itself is a fun puzzle (ROT13)
• The principles guide Python's design philosophy

The 19 principles include:
• Beautiful is better than ugly
• Explicit is better than implicit
• Simple is better than complex
• Complex is better than complicated
• Flat is better than nested
• Sparse is better than dense
• Readability counts
• Special cases aren't special enough to break the rules
• Although practicality beats purity
• Errors should never pass silently
• Unless explicitly silenced
• In the face of ambiguity, refuse the temptation to guess
• There should be one obvious way to do it
• Now is better than never
• Although never is often better than right now
• If the implementation is hard to explain, it's a bad idea
• If the implementation is easy to explain, it may be a good idea
• Namespaces are one honking great idea

Common uses:
• Teaching Python philosophy
• Guiding design decisions
• Fun Easter egg to show newcomers

Key Concepts:
• Key concepts: • The Zen of Python has 19 guiding principles • Written by Tim Peters • PEP 20 is its official designation • It is an Easter egg built into every Python installation How it works: • The 'this' module contains an encoded version of the text • Importing it triggers the display • The encoding itself is a fun puzzle (ROT13) • The principles guide Python's design philosophy The 19 principles include: • Beautiful is better than ugly • Explicit is better than implicit • Simple is better than complex • Complex is better than complicated • Flat is better than nested • Sparse is better than dense • Readability counts • Special cases aren't special enough to break the rules • Although practicality beats purity • Errors should never pass silently • Unless explicitly silenced • In the face of ambiguity, refuse the temptation to guess • There should be one obvious way to do it • Now is better than never • Although never is often better than right now • If the implementation is hard to explain, it's a bad idea • If the implementation is easy to explain, it may be a good idea • Namespaces are one honking great idea Common uses: • Teaching Python philosophy • Guiding design decisions • Fun Easter egg to show newcomers

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 97. EAFP
  (_i: number) => ({
    q: `What does EAFP stand for in Python?`,
    o: ["Easier to Ask Forgiveness than Permission", "Every Argument Follows Protocol", "Error And Fault Prevention", "Execute All Functions Promptly"],
    c: 0,
    e: "EAFP: Easier to Ask Forgiveness than Permission — use try/except instead of pre-checking.",
    de: `EAFP (Easier to Ask Forgiveness than Permission) is a Python coding style that favors trying an operation and handling exceptions if it fails, rather than checking preconditions before attempting the operation. This contrasts with LBYL (Look Before You Leap).

Key concepts:
• EAFP: try the operation, handle failure with except
• LBYL: check conditions before attempting the operation
• EAFP is considered more Pythonic
• Works well with Python's exception handling system

How it works:
• Instead of checking if a key exists, just access it and catch KeyError
• Instead of checking if a file exists, just open it and catch FileNotFoundError
• try/except is often faster when failures are rare
• Avoids race conditions (state can change between check and use)

Example:
# EAFP (Pythonic)
try:
    value = my_dict[key]
except KeyError:
    value = default

# LBYL (less Pythonic)
if key in my_dict:
    value = my_dict[key]
else:
    value = default

# EAFP with files
try:
    with open("config.txt") as f:
        config = f.read()
except FileNotFoundError:
    config = default_config

Common uses:
• Dictionary access
• File operations
• Type conversions (int(), float())
• Attribute access on objects

Key Concepts:
• Key concepts: • EAFP: try the operation, handle failure with except • LBYL: check conditions before attempting the operation • EAFP is considered more Pythonic • Works well with Python's exception handling system How it works: • Instead of checking if a key exists, just access it and catch KeyError • Instead of checking if a file exists, just open it and catch FileNotFoundError • try/except is often faster when failures are rare • Avoids race conditions (state can change between check and use) Example: # EAFP (Pythonic) try: value = my_dict[key] except KeyError: value = default # LBYL (less Pythonic) if key in my_dict: value = my_dict[key] else: value = default # EAFP with files try: with open("config.txt") as f: config = f.read() except FileNotFoundError: config = default_config Common uses: • Dictionary access • File operations • Type conversions (int(), float()) • Attribute access on objects

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 98. DRY principle
  (_i: number) => ({
    q: `What does the DRY principle stand for?`,
    o: ["Don't Repeat Yourself", "Do Repeat Yourself", "Dynamic Runtime Yielding", "Data Representation Yield"],
    c: 0,
    e: "DRY stands for Don't Repeat Yourself — avoid duplicating code or logic.",
    de: `DRY (Don't Repeat Yourself) is a fundamental software engineering principle that states every piece of knowledge or logic should have a single, unambiguous representation in a system. Duplicated code is harder to maintain and more prone to bugs.

Key concepts:
• Every piece of logic should exist in exactly one place
• Duplicated code means duplicated bugs
• Changes need to be made in only one place
• DRY applies to code, data, documentation, and configuration

How it works:
• If you find yourself copying and pasting code, extract it into a function
• If multiple classes share behavior, use inheritance or composition
• If configuration is repeated, centralize it
• Constants should be defined once and referenced everywhere

Example:
# WET (Write Everything Twice) - Bad
def calculate_circle_area(r):
    return 3.14159 * r * r

def calculate_cylinder_volume(r, h):
    return 3.14159 * r * r * h

# DRY - Good
PI = 3.14159

def circle_area(r):
    return PI * r ** 2

def cylinder_volume(r, h):
    return circle_area(r) * h

Common uses:
• Extracting common logic into functions
• Creating reusable utility modules
• Defining constants in one place
• Using base classes for shared behavior

Key Concepts:
• Key concepts: • Every piece of logic should exist in exactly one place • Duplicated code means duplicated bugs • Changes need to be made in only one place • DRY applies to code, data, documentation, and configuration How it works: • If you find yourself copying and pasting code, extract it into a function • If multiple classes share behavior, use inheritance or composition • If configuration is repeated, centralize it • Constants should be defined once and referenced everywhere Example: # WET (Write Everything Twice) - Bad def calculate_circle_area(r): return 3.14159 * r * r def calculate_cylinder_volume(r, h): return 3.14159 * r * r * h # DRY - Good PI = 3.14159 def circle_area(r): return PI * r ** 2 def cylinder_volume(r, h): return circle_area(r) * h Common uses: • Extracting common logic into functions • Creating reusable utility modules • Defining constants in one place • Using base classes for shared behavior

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
