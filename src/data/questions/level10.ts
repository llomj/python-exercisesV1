import { PersonaStage } from '../../types';

// --- LEVEL 10: GOD_WHALE (Design Patterns, Architecture, Best Practices) - 100 TRULY UNIQUE QUESTIONS ---
// Each question tests a DIFFERENT concept - NO number/variable variations of the same question
export const level10Patterns = [
  // 1-10: Exception Handling - try/except
  (_i: number) => ({
    q: `What is try/except?`,
    o: ["Exception handling", "Loop control", "Error", "Function definition"],
    c: 0,
    e: "try/except handles exceptions.",
    de: `try/except is Python's exception handling mechanism that allows code to gracefully handle errors and unexpected conditions. The try block contains code that might raise an exception, and the except block catches and handles those exceptions. If an exception occurs in the try block, execution immediately jumps to the except block, skipping any remaining code in the try block. This prevents the program from crashing and allows for proper error handling.

try/except syntax:
• try: block_of_code_that_might_fail
• except ExceptionType: handle_the_error
• Execution jumps to except if exception occurs
• Program continues after handling the exception

How it works:
• Code in try block executes normally
• If exception occurs, execution jumps to except block
• Exception is caught and handled
• Program continues after try/except
• Multiple except blocks can handle different exception types

Example:
try:
    result = 10 / 0  # This raises ZeroDivisionError
    print("This won't execute")
except ZeroDivisionError:
    print("Division by zero!")  # This executes instead

Common uses:
• File operations: handle file not found, permission errors
• Network operations: handle connection failures, timeouts
• User input: handle invalid input, conversion errors
• Database operations: handle connection issues, query errors

Example: try/except is exception handling - it allows code to catch and respond to errors gracefully instead of crashing the program.

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
  (_i: number) => ({
    q: `What is try: 1/0; except: pass?`,
    o: ["Catches all exceptions", "Raises exception", "Error", "None"],
    c: 0,
    e: "Bare except catches all exceptions.",
    de: `A bare except clause (except: without specifying an exception type) catches all exceptions, including system exceptions like KeyboardInterrupt and SystemExit. While convenient for catching any error, bare except clauses are generally discouraged because they can hide important errors and make debugging difficult. The pass statement does nothing, so this code silently ignores any exception that occurs in the try block.

Bare except catches everything:
• except: (no type specified)
• Catches all exception types
• Including KeyboardInterrupt, SystemExit, etc.
• Generally discouraged practice
• Can hide important errors

How it works:
• Any exception in try block is caught
• No matter what type of exception
• Code in except block executes
• pass does nothing (silently ignores error)
• Program continues after try/except

Example:
try:
    result = 1 / 0  # ZeroDivisionError
except:  # Catches ALL exceptions
    pass  # Does nothing, silently ignores

Problems with bare except:
• Hides bugs and unexpected errors
• Makes debugging difficult
• Can catch system signals (Ctrl+C)
• Better to specify exception types

Example: try: 1/0; except: pass catches all exceptions including ZeroDivisionError, KeyboardInterrupt, and others, silently ignoring them with pass.

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
  (_i: number) => ({
    q: `What is try: 1/0; except ZeroDivisionError: pass?`,
    o: ["Catches ZeroDivisionError", "Raises exception", "Error", "None"],
    c: 0,
    e: "Specific exception type catches only that exception.",
    de: `Specifying an exception type in the except clause catches only that specific type of exception. When you write except ZeroDivisionError, only ZeroDivisionError exceptions are caught - other exceptions will not be caught and will propagate up. This is the recommended way to handle exceptions because it allows specific error handling and doesn't hide unrelated errors.

Specific exception catching:
• except ZeroDivisionError: catches only ZeroDivisionError
• Other exceptions not caught
• Allows targeted error handling
• Doesn't hide unrelated errors
• Recommended practice

How it works:
• Exception occurs in try block
• Python checks exception type
• If ZeroDivisionError, executes except block
• If other exception, not caught, propagates up
• Program can have multiple except blocks

Example:
try:
    result = 1 / 0  # ZeroDivisionError
except ZeroDivisionError:  # Catches only ZeroDivisionError
    print("Division by zero!")
except ValueError:  # Would catch ValueError if it occurred
    print("Value error!")

Benefits:
• Targeted error handling
• Different exceptions handled differently
• Unrelated errors still visible
• Easier debugging

Example: try: 1/0; except ZeroDivisionError: pass catches only ZeroDivisionError, letting other exceptions (like ValueError, TypeError) propagate uncaught.

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
  (_i: number) => ({
    q: `What is try: 1/0; except ZeroDivisionError as e: type(e)?`,
    o: ["<class 'ZeroDivisionError'>", "Error", "None", "<class 'Exception'>"],
    c: 0,
    e: "Exception object captured in variable.",
    de: `The 'as variable' syntax in except clauses captures the exception object, allowing access to exception details. When you write except ZeroDivisionError as e, the exception object is assigned to variable e, and you can access its attributes and methods. The type(e) returns the class of the exception object, which is ZeroDivisionError in this case.

Exception object capture:
• except ExceptionType as variable: captures exception
• Exception object assigned to variable
• Can access exception attributes
• type(e) returns exception class
• str(e) returns error message

How it works:
• Exception occurs in try block
• Exception object created
• Object assigned to variable 'e'
• Can inspect exception details
• type(e) shows exception type

Example:
try:
    result = 1 / 0
except ZeroDivisionError as e:
    print(type(e))  # <class 'ZeroDivisionError'>
    print(str(e))   # "division by zero"

Exception object attributes:
• __class__: exception type
• args: exception arguments
• __str__(): string representation
• Custom attributes for custom exceptions

Example: try: 1/0; except ZeroDivisionError as e: type(e) returns <class 'ZeroDivisionError'> because the exception object captured in variable e is an instance of ZeroDivisionError.

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
  (_i: number) => ({
    q: `What is try: 1/0; except (ZeroDivisionError, ValueError): pass?`,
    o: ["Catches multiple exception types", "Raises exception", "Error", "None"],
    c: 0,
    e: "Tuple catches multiple exception types.",
    de: `You can catch multiple exception types in a single except clause by using a tuple of exception types. except (ZeroDivisionError, ValueError) will catch either ZeroDivisionError or ValueError exceptions. This is useful when multiple different exceptions require the same handling logic, avoiding code duplication.

Multiple exception types in tuple:
• except (Type1, Type2, Type3): catches any of these
• Single except block handles multiple exceptions
• Avoids code duplication
• Parentheses required for tuple

How it works:
• Exception occurs in try block
• Python checks if exception type matches any in tuple
• If match, executes except block
• If no match, exception propagates
• All listed types handled the same way

Example:
try:
    # Code that might raise different errors
    result = int(input("Enter number: "))  # ValueError if not number
    result = 10 / result  # ZeroDivisionError if 0
except (ZeroDivisionError, ValueError):  # Catches both
    print("Invalid input or division by zero!")

Benefits:
• Single handler for related exceptions
• Cleaner code than multiple except blocks
• Groups exceptions with same handling
• Reduces duplication

Example: try: 1/0; except (ZeroDivisionError, ValueError): pass catches both ZeroDivisionError and ValueError with a single except clause.

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
  (_i: number) => ({
    q: `What is try: 1/0; except ZeroDivisionError: pass; except ValueError: pass?`,
    o: ["Multiple except clauses", "SyntaxError", "Error", "None"],
    c: 0,
    e: "Multiple except clauses handle different exceptions.",
    de: `You can have multiple except clauses after a single try block to handle different exception types with different logic. Each except clause is checked in order, and only the first matching one executes. This allows for specific, targeted error handling where different exceptions require different responses.

Multiple except clauses:
• try: code_that_might_fail
• except Type1: handle_type1_error
• except Type2: handle_type2_error
• except Type3: handle_type3_error
• Each except handles different exception

How it works:
• Exception occurs in try block
• Python checks except clauses in order
• First matching exception type executes
• Other except clauses skipped
• Unmatched exceptions propagate up

Example:
try:
    result = 10 / int(input("Enter divisor: "))
except ZeroDivisionError:
    print("Cannot divide by zero!")
except ValueError:
    print("Please enter a valid number!")
except Exception as e:
    print(f"Unexpected error: {e}")

Benefits:
• Specific handling for each exception type
• Different error messages for different errors
• More precise error handling
• Better user experience

Example: Multiple except clauses allow different exception types to be handled with different logic - ZeroDivisionError gets one response, ValueError gets another.

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
  (_i: number) => ({
    q: `What is try: pass; except: pass; else: x = 1; x?`,
    o: ["1", "Error", "None", "0"],
    c: 0,
    e: "else clause runs if no exception occurred.",
    de: `The else clause in try/except blocks executes only if no exception occurred in the try block. It's useful for code that should run only when the try block completes successfully, separating successful execution from error handling. The else clause runs after the try block but before any finally clause.

else clause execution:
• else: runs only if no exception in try block
• Executes after try completes successfully
• Skipped if exception occurs
• Runs before finally (if present)
• Useful for success-only code

How it works:
• Try block executes
• If no exception, else block executes
• If exception, else block skipped, except block runs
• Finally block (if present) always runs last

Example:
try:
    result = 10 / 2  # No exception
    print("Division successful")
except ZeroDivisionError:
    print("Division failed")
else:
    print("No errors occurred")  # This executes
    x = result * 2

Benefits:
• Separates success logic from error handling
• Code runs only on successful execution
• Cleaner organization
• Avoids nesting success code in try

Example: In try: pass; except: pass; else: x = 1; x, the else clause executes because no exception occurred in the try block, so x is set to 1.

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
  (_i: number) => ({
    q: `What is try: 1/0; except: pass; else: x = 1; x?`,
    o: ["NameError", "1", "Error", "None"],
    c: 0,
    e: "else clause doesn't run if exception occurred.",
    de: `The else clause only executes when no exception occurs in the try block. If an exception happens, the else clause is completely skipped, and execution jumps directly to the except block. This ensures that else code only runs on successful execution.

else clause behavior with exceptions:
• else: skipped if exception occurs
• Exception triggers except block
• else never executes when exception happens
• Separates success path from error path

How it works:
• Exception occurs in try block
• Execution jumps to except block
• else block completely skipped
• finally block (if present) still runs

Example:
try:
    result = 1 / 0  # Exception occurs
    print("This won't print")
except ZeroDivisionError:
    print("Exception caught")
    x = "error"
else:
    x = 1  # This is skipped
    print("No exception")

Result:
• except block executes: x = "error"
• else block skipped: x is not set to 1
• x refers to the variable from except block

Example: In try: 1/0; except: pass; else: x = 1; x, a NameError occurs because the else clause doesn't execute when an exception occurs, so x is never defined.

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
  (_i: number) => ({
    q: `What is try: pass; except: pass; finally: x = 1; x?`,
    o: ["1", "Error", "None", "0"],
    c: 0,
    e: "finally clause always runs.",
    de: `The finally clause always executes, regardless of whether an exception occurred or not. It's used for cleanup code that must run no matter what happens in the try block. finally blocks are commonly used for closing files, releasing resources, or cleaning up connections.

finally clause always executes:
• finally: code_that_always_runs
• Executes after try/except/else complete
• Runs even if exception occurs
• Runs even if return/break/continue in try
• Guaranteed execution (almost always)

How it works:
• try block executes
• If exception: except block runs
• If no exception: else block runs (if present)
• finally block always runs last
• Even if exception not caught

Example:
try:
    print("Try block")
    # No exception
except:
    print("Except block")
else:
    print("Else block")
finally:
    print("Finally block")  # Always executes
    x = 1

Common uses:
• File cleanup: file.close()
• Resource release: connection.close()
• Lock release: lock.release()
• Temporary file removal
• Database transaction cleanup

Example: finally clause executes regardless of exceptions, so in try: pass; except: pass; finally: x = 1; x returns 1 because finally always runs.

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
  (_i: number) => ({
    q: `What is try: 1/0; except: pass; finally: x = 1; x?`,
    o: ["1", "Error", "None", "0"],
    c: 0,
    e: "finally clause runs even if exception occurred.",
    de: `The finally clause executes unconditionally, even when an exception occurs in the try block. This makes it perfect for cleanup operations that must happen regardless of success or failure. The finally block runs after all try/except/else processing is complete.

finally with exceptions:
• finally: always executes
• Even when exception occurs and is caught
• Even when exception occurs and is not caught
• Executes before exception propagates up
• Perfect for cleanup code

Execution order with exception:
1. Exception occurs in try
2. except block executes (if matches)
3. else block skipped
4. finally block executes
5. Exception may continue propagating

Example:
try:
    result = 1 / 0  # Exception occurs
except ZeroDivisionError:
    print("Exception caught")
finally:
    print("Cleanup code")  # Always executes
    x = 1

Benefits:
• Guaranteed cleanup
• Resources always released
• No matter what happens in try/except
• Prevents resource leaks
• Consistent cleanup behavior

Example: finally executes even with exceptions, so try: 1/0; except: pass; finally: x = 1; x returns 1 because finally always runs, setting x = 1.

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
  
  // 11-20: Exception Handling - Raising and Custom Exceptions
  (_i: number) => ({
    q: `What is raise ValueError('error')?`,
    o: ["Raises ValueError exception", "Returns error", "Error", "None"],
    c: 0,
    e: "raise statement raises exception.",
    de: `The raise statement explicitly raises an exception in Python. raise ValueError('error') creates a ValueError exception with the message 'error' and raises it, causing the program to stop normal execution and jump to the nearest exception handler. This is how you intentionally trigger error conditions.

raise statement syntax:
• raise ExceptionType(message)
• Creates exception object with message
• Immediately stops execution
• Jumps to nearest except block
• Can raise built-in or custom exceptions

How it works:
• Exception object created: ValueError('error')
• Execution stops immediately
• Python looks for except block to handle it
• If no handler, program crashes with traceback
• Stack unwinds until handler found

Example:
def validate_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
    return age

validate_age(-5)  # Raises ValueError with message

Common uses:
• Input validation: raise ValueError for invalid input
• Preconditions: raise AssertionError for invalid state
• Custom errors: raise custom exception classes
• Re-raising: raise to re-raise caught exception

Example: raise ValueError('error') creates and raises a ValueError exception with message 'error', stopping execution and jumping to exception handler.

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
  (_i: number) => ({
    q: `What is raise ValueError?`,
    o: ["Raises ValueError without message", "SyntaxError", "Error", "None"],
    c: 0,
    e: "raise can be used without message.",
    de: `You can raise an exception without providing a message by just using the exception class name. raise ValueError creates a ValueError exception with no custom message. The exception will still have a default representation, but no descriptive error message. This is less common than raising with a message.

raise without message:
• raise ExceptionClass (no parentheses for no-arg)
• Creates exception with default state
• No custom error message
• Still raises the exception normally
• Less informative than with message

How it works:
• Exception class instantiated without arguments
• Default exception object created
• str(e) will show class name only
• Still triggers exception handling
• Can be caught same as any ValueError

Example:
raise ValueError      # Creates ValueError()
raise ValueError()    # Same thing, explicit instantiation
raise ValueError('msg')  # With message

Exception without message:
• str(e) returns '' (empty string for ValueError)
• repr(e) shows "ValueError()""
• Less useful for debugging
• Still functionally raises exception

Example: raise ValueError creates a ValueError exception without a custom message, which is still a valid exception that can be caught and handled.

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
  (_i: number) => ({
    q: `What is try: raise ValueError; except ValueError as e: raise?`,
    o: ["Re-raises the exception", "Returns None", "Error", "None"],
    c: 0,
    e: "raise without argument re-raises current exception.",
    de: `raise without any arguments inside an except block re-raises the currently caught exception. This is useful when you want to catch an exception for logging or partial handling, but still want the exception to propagate up to higher-level handlers. The original exception object and traceback are preserved.

Re-raising exceptions:
• raise (no arguments in except block)
• Re-raises the currently caught exception
• Preserves original traceback
• Useful for logging + re-raising
• Allows partial exception handling

How it works:
• Exception caught in except block
• raise with no arguments
• Same exception object re-raised
• Original stack trace preserved
• Higher-level handlers can catch it

Example:
try:
    risky_operation()
except ValueError as e:
    log_error(e)  # Log the error
    raise         # Re-raise the same exception

Benefits:
• Add logging without stopping propagation
• Cleanup before re-raising
• Partial error handling
• Preserve original stack trace

Example: In except block, raise (with no arguments) re-raises the currently caught ValueError, preserving the original exception and traceback.

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
  (_i: number) => ({
    q: `What is class MyError(Exception): pass; raise MyError()?`,
    o: ["Raises custom exception", "SyntaxError", "Error", "None"],
    c: 0,
    e: "Custom exceptions inherit from Exception.",
    de: `You can create custom exception classes by inheriting from the built-in Exception class or its subclasses. class MyError(Exception): pass creates a custom exception type that can be raised and caught like built-in exceptions. Custom exceptions allow for more specific error handling and better error categorization.

Custom exception creation:
• class MyException(Exception): pass
• Inherits from Exception base class
• Can add custom attributes/methods
• Behaves like built-in exceptions
• Can be caught specifically

How it works:
• Define class inheriting from Exception
• Class becomes exception type
• Can instantiate: MyError()
• Can raise: raise MyError()
• Can catch: except MyError

Example:
class ValidationError(Exception):
    def __init__(self, field, value):
        self.field = field
        self.value = value
        super().__init__(f"Invalid {field}: {value}")

raise ValidationError("email", "invalid@email")

Benefits:
• Specific error types for different situations
• Better error categorization
• Custom error messages and data
• More precise exception handling
• Cleaner error handling logic

Example: class MyError(Exception): pass; raise MyError() creates and raises a custom exception instance, which can be caught with except MyError.

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
  (_i: number) => ({
    q: `What is class MyError(Exception): pass; isinstance(MyError(), Exception)?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "Custom exception is instance of Exception.",
    de: `Custom exceptions that inherit from Exception are instances of the Exception class. isinstance(MyError(), Exception) returns True because MyError inherits from Exception, so instances of MyError are also instances of Exception. This inheritance relationship allows custom exceptions to be caught by except Exception blocks.

Inheritance and isinstance:
• Custom exceptions inherit from Exception
• isinstance(custom_instance, Exception) = True
• isinstance(custom_instance, CustomException) = True
• Can be caught by broader exception handlers
• Maintains Liskov Substitution Principle

How it works:
• class MyError(Exception): inheritance
• MyError() creates instance
• isinstance checks inheritance chain
• Exception is base class for all exceptions
• Custom exceptions are subclasses

Example:
class MyError(Exception): pass
error = MyError()
isinstance(error, MyError)     # True - exact type
isinstance(error, Exception)   # True - base class
isinstance(error, ValueError)  # False - not related

Exception hierarchy:
• BaseException (root)
• Exception (most exceptions inherit from this)
• Custom exceptions inherit from Exception
• Specific built-ins like ValueError, TypeError

Example: isinstance(MyError(), Exception) returns True because custom exceptions inherit from Exception, making them instances of the base Exception class.

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
  (_i: number) => ({
    q: `What is try: raise ValueError('msg'); except ValueError as e: str(e)?`,
    o: ["'msg'", "'ValueError'", "Error", "None"],
    c: 0,
    e: "str(exception) returns exception message.",
    de: `str() on an exception object returns the exception's message (if provided) or a default string representation. For ValueError('msg'), str(e) returns 'msg' - the message passed to the exception constructor. This is useful for displaying user-friendly error messages.

Exception string representation:
• str(exception) returns the error message
• For ValueError('msg'), str(e) = 'msg'
• For exceptions without message, str(e) may be empty
• repr(exception) returns full representation
• str() is for user-friendly display

How it works:
• Exception created with message: ValueError('msg')
• str(e) extracts the message string
• Returns 'msg' for display
• Different from repr(e) which shows "ValueError('msg')"

Example:
try:
    raise ValueError("Invalid input")
except ValueError as e:
    user_message = str(e)  # "Invalid input"
    print(f"Error: {user_message}")

Exception messages:
• ValueError("message") → str(e) = "message"
• TypeError("message") → str(e) = "message"
• Custom exceptions can override __str__

Example: str(ValueError('msg')) returns 'msg' because str() on an exception returns the message passed to the exception constructor.

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
  (_i: number) => ({
    q: `What is try: raise ValueError('msg'); except ValueError as e: repr(e)?`,
    o: ["\"ValueError('msg')\"", "'msg'", "Error", "None"],
    c: 0,
    e: "repr(exception) returns exception representation.",
    de: `repr() on an exception object returns a string that represents the exception object, including its type and message. For ValueError('msg'), repr(e) returns "ValueError('msg')" - a string that could be used to recreate the exception object. This is more detailed than str() and is useful for debugging.

Exception repr vs str:
• repr(e) returns full representation: "ValueError('msg')"
• str(e) returns just message: 'msg'
• repr() for debugging/detailed info
• str() for user-friendly messages
• repr() shows type and constructor args

How it works:
• Exception object: ValueError('msg')
• repr(e) shows how to recreate it
• Includes class name and arguments
• More detailed than str()
• Useful for logging and debugging

Example:
try:
    raise ValueError("Something went wrong")
except ValueError as e:
    debug_info = repr(e)  # "ValueError('Something went wrong')"
    user_info = str(e)    # "Something went wrong"
    print(f"Debug: {debug_info}")
    print(f"User: {user_info}")

Exception representations:
• ValueError('msg') → repr = "ValueError('msg')"
• TypeError('msg') → repr = "TypeError('msg')"
• Custom exceptions show their class name

Example: repr(ValueError('msg')) returns "ValueError('msg')" because repr() shows the full representation of the exception object, including its type and arguments.

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
  (_i: number) => ({
    q: `What is try: 1/0; except Exception as e: type(e).__name__?`,
    o: ["'ZeroDivisionError'", "'Exception'", "Error", "None"],
    c: 0,
    e: "Exception object has __name__ attribute.",
    de: `Exception classes have a __name__ attribute that contains the class name as a string. For ZeroDivisionError, type(e).__name__ returns 'ZeroDivisionError' because that's the name of the exception class. This is useful for programmatic checking of exception types.

Exception class attributes:
• __name__ contains class name string
• type(e).__name__ gets the exception type name
• Useful for conditional error handling
• More reliable than string parsing
• Works with custom exceptions too

How it works:
• Exception caught: ZeroDivisionError
• type(e) returns ZeroDivisionError class
• __name__ attribute accessed
• Returns string: 'ZeroDivisionError'
• Can be used in conditionals

Example:
try:
    risky_operation()
except Exception as e:
    error_type = type(e).__name__
    if error_type == 'ValueError':
        handle_value_error()
    elif error_type == 'ZeroDivisionError':
        handle_division_error()
    else:
        handle_other_error()

Benefits:
• Programmatic exception type checking
• No string parsing needed
• Works with any exception type
• Reliable and clean

Example: type(ZeroDivisionError()).__name__ returns 'ZeroDivisionError' because the exception object's class has __name__ = 'ZeroDivisionError'.

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
  (_i: number) => ({
    q: `What is try: raise ValueError; except Exception: pass?`,
    o: ["Catches ValueError (subclass)", "Raises exception", "Error", "None"],
    c: 0,
    e: "Catching base class catches subclasses.",
    de: `Catching a base exception class like Exception catches all subclasses of that exception. Since ValueError inherits from Exception, except Exception will catch ValueError exceptions. This is the inheritance-based exception handling system in Python.

Exception inheritance hierarchy:
• Exception is base class for most exceptions
• ValueError, TypeError, etc. inherit from Exception
• except Exception catches all Exception subclasses
• Allows broad exception handling
• Can be too broad (catches everything)

How it works:
• Exception hierarchy: BaseException → Exception → ValueError
• ValueError is subclass of Exception
• except Exception catches ValueError
• except BaseException catches everything
• Inheritance determines catchability

Example:
try:
    raise ValueError("Invalid value")
except Exception:  # Catches ValueError because ValueError(Exception)
    print("Some exception occurred")

Exception hierarchy:
• BaseException (catches everything)
• Exception (catches most application errors)
• ArithmeticError, LookupError, etc. (specific categories)
• ValueError, KeyError, etc. (specific exceptions)

Example: except Exception catches ValueError because ValueError inherits from Exception, allowing broad exception handling.

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
  (_i: number) => ({
    q: `What is try: raise ValueError; except (ValueError, TypeError): pass?`,
    o: ["Catches ValueError", "Raises exception", "Error", "None"],
    c: 0,
    e: "Tuple of exceptions catches any matching type.",
    de: `A tuple of exception types in an except clause catches any exception that matches any of the types in the tuple. except (ValueError, TypeError) will catch either ValueError or TypeError exceptions. This allows handling multiple related exception types with the same code.

Multiple exception types in tuple:
• except (Type1, Type2, Type3): catches any of these
• Tuple syntax for multiple types
• Single handler for multiple exceptions
• Cleaner than separate except blocks
• Related exceptions handled together

How it works:
• Exception occurs in try block
• Python checks each type in tuple
• If exception matches any type, handler executes
• Order doesn't matter (unlike multiple except blocks)
• First matching tuple element wins

Example:
try:
    # Code that might raise ValueError or TypeError
    value = int(input("Enter number: "))  # ValueError if not number
    result = 10 / value  # ZeroDivisionError if 0
except (ValueError, TypeError):  # Catches both
    print("Invalid input type")
except ZeroDivisionError:  # Separate handler for different error
    print("Cannot divide by zero")

Benefits:
• Groups related exceptions
• Single handler for similar errors
• Cleaner than multiple except blocks
• More readable code

Example: except (ValueError, TypeError) catches either ValueError or TypeError with a single except clause, grouping related type errors.

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
  
  // 21-30: Context Managers and with Statement
  (_i: number) => ({
    q: `What is with open('file') as f?`,
    o: ["Context manager", "File opening", "Error", "Loop statement"],
    c: 0,
    e: "with statement uses context manager.",
    de: `The with statement provides a clean syntax for working with context managers. with open('file') as f creates a context manager that automatically handles resource management. The open() function returns a file object that is a context manager - it automatically closes the file when the with block exits, even if an exception occurs.

with statement and context managers:
• with expression as variable: context_manager_syntax
• Context managers handle resource management automatically
• Automatic setup and cleanup of resources
• Exception-safe resource handling
• Replaces try/finally patterns

How it works:
• Expression evaluated (open('file'))
• __enter__() method called automatically
• Result assigned to variable (f)
• Code in with block executes normally
• __exit__() always called for cleanup (closes file)

Example:
with open('data.txt', 'r') as f:
    content = f.read()  # File is open here
# File automatically closed here, even if exception occurs

Benefits:
• Automatic resource cleanup (no manual close needed)
• Exception-safe (file closed even if error occurs)
• Cleaner than try/finally blocks
• Prevents resource leaks
• Readable and maintainable code

Example: with open('file') as f uses the file object's context manager to ensure the file is automatically closed after the with block, regardless of how the block exits.

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
  (_i: number) => ({
    q: `What is class MyContext: def __enter__(self): return self; def __exit__(self, *args): pass; with MyContext() as ctx: pass?`,
    o: ["Uses context manager", "Error", "None", "Raises exception"],
    c: 0,
    e: "Context manager needs __enter__ and __exit__ methods.",
    de: `To create a custom context manager, a class must implement both __enter__ and __exit__ methods. __enter__ is called when entering the with block and returns the object to be used. __exit__ is called when exiting the with block and handles cleanup. This is the context manager protocol that makes objects work with the with statement.

Context manager protocol:
• __enter__(self): called on entry, returns context value
• __exit__(self, exc_type, exc_val, exc_tb): called on exit, handles cleanup
• Both methods are required for context manager functionality
• __exit__ receives exception info if any occurred
• Returning True from __exit__ suppresses exceptions

How it works:
• with MyContext() as ctx:
• MyContext() creates instance
• __enter__() called, return value (self) assigned to ctx
• Code in with block executes
• __exit__() called for cleanup (pass does nothing)
• Context manager instance available as ctx

Example:
class MyContext:
    def __enter__(self):
        print("Entering context")
        return self  # Return self for use in with block

    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Exiting context")
        return False  # Don't suppress exceptions

with MyContext() as ctx:
    print(f"Context: {ctx}")  # ctx is the MyContext instance

Benefits:
• Custom resource management for any resource
• Automatic cleanup logic
• Exception handling control
• Reusable cleanup patterns
• Clean API for resource management

Example: Custom context manager class must implement __enter__ and __exit__ methods to work with the with statement. The __enter__ method returns self, which is assigned to ctx.

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
  (_i: number) => ({
    q: `What is class MyContext: def __enter__(self): return 1; def __exit__(self, *args): pass; with MyContext() as x: x?`,
    o: ["1", "Error", "None", "0"],
    c: 0,
    e: "__enter__ return value assigned to variable after 'as'.",
    de: `The value returned by __enter__ is assigned to the variable after 'as' in the with statement. If __enter__ returns 1, then x will be assigned the value 1 inside the with block. This allows context managers to provide different objects than themselves for use in the with block.

__enter__ return value assignment:
• with ContextManager() as variable:
• __enter__() return value assigned to variable
• Can return self (common) or different object
• Variable available throughout with block
• Variable goes out of scope after with block

How it works:
• Context manager created: MyContext()
• __enter__() called, returns 1
• Value 1 assigned to variable x
• x = 1 inside with block
• __exit__() called when block exits

Example:
class NumberContext:
    def __enter__(self):
        return 42  # Return number, not self

    def __exit__(self, *args):
        pass

with NumberContext() as x:
    print(x)  # 42 (not the context manager object)

Common patterns:
• Return self: standard resource management (files, connections)
• Return different object: factory pattern, configuration objects
• Return None: when no specific object needed
• Return wrapper: decorator pattern

Example: __enter__ return value (1) is assigned to variable x, so x equals 1 inside the with block. The context manager can return any value it wants.

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
  (_i: number) => ({
    q: `What is class MyContext: def __enter__(self): return self; def __exit__(self, exc_type, exc_val, exc_tb): return True; with MyContext(): 1/0?`,
    o: ["Suppresses exception", "Raises exception", "Error", "None"],
    c: 0,
    e: "__exit__ returning True suppresses exception.",
    de: `__exit__ can control exception handling by returning True to suppress exceptions that occur in the with block. When __exit__ returns True, any exception is caught and suppressed - it doesn't propagate outside the with statement. This is useful for context managers that handle errors internally.

Exception suppression in __exit__:
• __exit__(self, exc_type, exc_val, exc_tb) receives exception info
• Return True: suppress the exception completely
• Return False/None: let exception propagate normally
• Return value controls whether exception bubbles up
• Useful for expected/handled error conditions

How it works:
• Exception occurs in with block (1/0 causes ZeroDivisionError)
• __exit__ called with exception info: (ZeroDivisionError, exception_object, traceback)
• __exit__ returns True
• Exception is suppressed, doesn't propagate
• Program continues after with block

Example:
class SuppressErrors:
    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        print(f"Suppressed: {exc_type.__name__}")
        return True  # Suppress any exception

with SuppressErrors():
    raise ValueError("This won't propagate")

Benefits:
• Handle expected errors gracefully
• Prevent error propagation for known issues
• Cleanup even when errors occur
• Robust error handling in specific contexts
• Prevent crashes from anticipated errors

Example: __exit__ returning True suppresses the ZeroDivisionError from 1/0, preventing it from being raised outside the with block.

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
  (_i: number) => ({
    q: `What is class MyContext: def __enter__(self): return self; def __exit__(self, *args): pass; with MyContext() as ctx: ctx?`,
    o: ["MyContext instance", "Error", "None", "0"],
    c: 0,
    e: "Context manager instance available in with block.",
    de: `The context manager instance is available in the with block through the variable assigned with 'as'. Since __enter__ returns self, ctx refers to the MyContext instance, allowing access to its attributes and methods during the with block.

Context manager instance access:
• with MyContext() as ctx: ctx refers to context manager
• Since __enter__ returns self, ctx is the instance
• Can access attributes and methods in with block
• Useful for resource management with instance state
• Instance persists throughout with block

How it works:
• MyContext() creates instance
• __enter__() returns self (the instance)
• Instance assigned to ctx variable
• ctx available throughout with block
• Can call methods: ctx.method()
• Can access attributes: ctx.attribute

Example:
class DatabaseConnection:
    def __init__(self):
        self.connected = False

    def __enter__(self):
        self.connected = True
        return self  # Return self for access

    def __exit__(self, *args):
        self.connected = False

with DatabaseConnection() as conn:
    print(conn.connected)  # True
    # Can call methods on conn here

Benefits:
• Access to context manager state and methods
• Resource control during with block
• Method calls on managed resource
• State inspection and modification
• Full resource API access

Example: Since __enter__ returns self, ctx is the MyContext instance, so ctx refers to the context manager object inside the with block.

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
  (_i: number) => ({ q: `What is from contextlib import contextmanager; @contextmanager; def my_context(): yield 1; with my_context() as x: x?`, o: ["1", "Error", "None", "0"], c: 0, e: "@contextmanager decorator creates context manager from generator." }),
  (_i: number) => ({ q: `What is with open('file', 'w') as f: f.write('text'); f.closed?`, o: ["True", "False", "Error", "None"], c: 0, e: "File automatically closed after with block." }),
  (_i: number) => ({ q: `What is with open('file', 'w') as f1, open('file2', 'w') as f2: pass?`, o: ["Multiple context managers", "SyntaxError", "Error", "None"], c: 0, e: "Multiple context managers in one with statement." }),
  (_i: number) => ({ q: `What is from contextlib import suppress; with suppress(ValueError): raise ValueError()?`, o: ["Suppresses ValueError", "Raises exception", "Error", "None"], c: 0, e: "suppress() context manager suppresses specified exceptions." }),
  (_i: number) => ({ q: `What is class MyContext: def __enter__(self): return self; def __exit__(self, *args): self.closed = True; ctx = MyContext(); with ctx: pass; ctx.closed?`, o: ["True", "False", "Error", "None"], c: 0, e: "__exit__ called after with block completes." }),
  
  // 31-40: Modules and Imports
  (_i: number) => ({ 
    q: `What is import module?`, 
    o: ["Imports a module", "Exports a module", "Error", "Creates a module"], 
    c: 0, 
    e: "import loads a module.",
    de: `The import statement loads a module and makes it available in the current namespace. When you write import module, Python searches for a file named module.py (or a package named module) in the module search path, loads it, and creates a module object. The module is then accessible via the module name (e.g., module.function()). Importing a module executes all top-level code in the module file, but subsequent imports of the same module reuse the cached module object.

import statement:
• import module loads the module
• Searches for module.py or package module
• Executes module code on first import
• Creates module object in namespace
• Access via module.name

How it works:
• Python searches for module in sys.path
• Loads module file (module.py)
• Executes top-level code in module
• Creates module object
• Adds module to current namespace
• Subsequent imports reuse cached module

Example:
import math  # Imports math module
math.pi      # 3.14159... (access module attributes)
math.sqrt(4) # 2 (use module functions)

Common uses:
• Importing standard library: import os, import sys, import math
• Importing custom modules: import mymodule
• Module access: module.function(), module.attribute
• Modules and imports

Example: import module loads a module and makes it available in the current namespace, allowing you to access its attributes and functions via module.name.

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
  (_i: number) => ({ 
    q: `What is from module import name?`, 
    o: ["Imports name from module", "Imports entire module", "Error", "None"], 
    c: 0, 
    e: "from...import imports specific name.",
    de: `The from...import statement imports a specific name (function, class, or variable) from a module directly into the current namespace. When you write from module import name, Python imports the module, then copies the specified name into the current namespace, so you can use it directly without the module prefix. This is more concise than import module; module.name, but can cause namespace pollution if many names are imported.

from...import statement:
• from module import name imports specific name
• Loads module and copies name to current namespace
• Use name directly (no module prefix)
• More concise than import module; module.name
• Can cause namespace pollution

How it works:
• Python imports module
• Finds name in module namespace
• Copies name to current namespace
• Use name directly
• Original module still imported but not needed

Example:
from math import pi  # Imports pi directly
pi                   # 3.14159... (use directly, no math prefix)
from os import path
path.join('a', 'b')  # 'a/b' (use directly)

Common uses:
• Importing specific names: from module import function, from module import Class
• Cleaner syntax: use name directly without module prefix
• Selective imports: import only what you need
• Modules and imports

Example: from module import name imports a specific name from a module directly into the current namespace, allowing you to use it directly without the module prefix.

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
  (_i: number) => ({ 
    q: `What is from module import name as alias?`, 
    o: ["Imports with alias", "SyntaxError", "Error", "None"], 
    c: 0, 
    e: "as keyword creates alias for import.",
    de: `The as keyword creates an alias for an imported name, allowing you to use a different name in the current namespace. When you write from module import name as alias, Python imports name from the module but makes it available as alias in the current namespace. This is useful when the original name conflicts with an existing name, or when you want a shorter or more descriptive name.

Import with alias:
• from module import name as alias imports name as alias
• name is imported from module
• Available as alias in current namespace
• Use alias instead of name
• Prevents name conflicts

How it works:
• Python imports name from module
• Assigns name to alias in current namespace
• Use alias to access the imported name
• Original name not in namespace (only alias)
• Prevents naming conflicts

Example:
from datetime import datetime as dt  # Import with alias
dt.now()                              # Use alias
from collections import defaultdict as dd
dd(int)                               # Use shorter alias

Common uses:
• Avoiding name conflicts: from module import name as alias
• Shorter names: from module import long_name as short
• Descriptive names: from module import func as descriptive_func
• Modules and imports

Example: from module import name as alias creates an alias for the imported name, allowing you to use alias instead of name in the current namespace.

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
  (_i: number) => ({ 
    q: `What is import module as alias?`, 
    o: ["Imports module with alias", "SyntaxError", "Error", "None"], 
    c: 0, 
    e: "Module can be imported with alias.",
    de: `The as keyword can also create an alias for an entire module. When you write import module as alias, Python imports the module but makes it available as alias in the current namespace. This is useful when the module name is long, conflicts with another name, or you want a shorter, more convenient name.

Module import with alias:
• import module as alias imports module as alias
• Module is imported and accessible via alias
• Use alias.name instead of module.name
• Prevents name conflicts
• Provides shorter names

How it works:
• Python imports module
• Assigns module to alias in current namespace
• Use alias to access module
• alias.name is same as module.name
• Original module name not in namespace

Example:
import numpy as np  # Common alias for NumPy
np.array([1, 2, 3]) # Use shorter alias
import pandas as pd # Common alias for Pandas
pd.DataFrame(...)   # Use shorter alias

Common uses:
• Shorter names: import long_module_name as short
• Avoiding conflicts: import module as alias when name conflicts
• Convention: numpy as np, pandas as pd (common conventions)
• Modules and imports

Example: import module as alias imports a module with an alias, allowing you to access it via alias.name instead of module.name.

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
  (_i: number) => ({ 
    q: `What is from module import *?`, 
    o: ["Imports all public names", "SyntaxError", "Error", "None"], 
    c: 0, 
    e: "* imports all public names from module.",
    de: `The asterisk (*) in from module import * imports all public names (names not starting with underscore) from the module into the current namespace. This allows you to use all public names directly without the module prefix. However, this is generally discouraged because it causes namespace pollution, makes it unclear where names come from, and can cause name conflicts. If the module defines __all__, only names in __all__ are imported.

Wildcard import:
• from module import * imports all public names
• Imports all names not starting with _
• If __all__ defined, imports only names in __all__
• Names available directly (no module prefix)
• Causes namespace pollution (discouraged)

How it works:
• Python imports all public names from module
• Names not starting with _ are imported
• If __all__ exists, imports only names in __all__
• All names copied to current namespace
• Use names directly

Example:
from math import *  # Imports all public names
pi                  # 3.14159... (direct access)
sqrt(16)            # 4 (direct access)
# But unclear where names come from

Common uses:
• Quick prototyping: from module import * (discouraged in production)
• Convenience: direct access to all names
• Namespace pollution: makes code harder to understand
• Modules and imports

Example: from module import * imports all public names from a module, but is generally discouraged due to namespace pollution and unclear name origins.

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
  (_i: number) => ({ 
    q: `What is __name__ == '__main__'?`, 
    o: ["Checks if script is run directly", "Checks if imported", "Error", "None"], 
    c: 0, 
    e: "__name__ is '__main__' when script run directly.",
    de: `The __name__ variable contains the name of the module. When a Python file is run directly (as a script), __name__ is set to '__main__'. When a file is imported as a module, __name__ is set to the module name. This allows you to check if a script is being run directly or imported, which is useful for running code only when the script is executed directly (not when imported).

__name__ variable:
• __name__ contains module name
• '__main__' when script run directly
• Module name when imported
• Check with __name__ == '__main__'
• Allows conditional execution

How it works:
• Python sets __name__ = '__main__' when run directly
• Python sets __name__ = 'module_name' when imported
• Check __name__ == '__main__' to detect direct execution
• Common pattern for script entry points
• Allows modules to be both importable and executable

Example:
# my_script.py
if __name__ == '__main__':
    print("Script is run directly")
    # Code here runs only when script is executed
else:
    print("Script is imported as module")

Common uses:
• Script entry points: if __name__ == '__main__': main()
• Conditional execution: run code only when script is main
• Testing: if __name__ == '__main__': run_tests()
• Modules and imports

Example: __name__ == '__main__' checks if a script is run directly (not imported), allowing conditional execution of code.

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
  (_i: number) => ({ 
    q: `What is if __name__ == '__main__': pass?`, 
    o: ["Runs code only when script executed", "Runs always", "Error", "None"], 
    c: 0, 
    e: "Common pattern to run code only when script is main.",
    de: `The pattern if __name__ == '__main__': is a common Python idiom that allows code to run only when a script is executed directly, not when it's imported as a module. This pattern is typically used to place code that should only run when the script is the main entry point (like main() function calls, tests, or script-specific logic) inside the if block.

__name__ == '__main__' pattern:
• if __name__ == '__main__': checks if script is main
• Code in block runs only when script executed directly
• Code doesn't run when module is imported
• Common pattern for script entry points
• Allows modules to be both importable and executable

How it works:
• When script run directly: __name__ = '__main__'
• When imported: __name__ = 'module_name'
• if __name__ == '__main__': True only when run directly
• Code in block executes only when True
• Allows conditional execution

Example:
def main():
    print("Main function")
    # Script logic here

if __name__ == '__main__':
    main()  # Runs only when script is executed directly
# Can import this module without running main()

Common uses:
• Script entry points: if __name__ == '__main__': main()
• Testing: if __name__ == '__main__': unittest.main()
• Conditional execution: run code only when script is main
• Modules and imports

Example: if __name__ == '__main__': pass is a common pattern that runs code only when a script is executed directly, not when imported as a module.

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
  (_i: number) => ({ 
    q: `What is import sys; sys.path?`, 
    o: ["List of module search paths", "Error", "None", "()"], 
    c: 0, 
    e: "sys.path contains directories Python searches for modules.",
    de: `sys.path is a list of directory paths where Python searches for modules when you import them. When you write import module, Python searches for the module in each directory in sys.path in order until it finds the module. sys.path is initialized from the current directory, PYTHONPATH environment variable, and standard library paths. You can modify sys.path to add custom directories to the module search path.

sys.path:
• sys.path is list of module search paths
• Python searches directories in order
• First match found is used
• Initialized from current dir, PYTHONPATH, stdlib
• Can be modified to add custom paths

How it works:
• Python searches for modules in sys.path
• Checks each directory in order
• First matching module found is used
• sys.path[0] is current directory (usually)
• Can append directories to sys.path

Example:
import sys
sys.path  # ['', '/usr/lib/python3.10', ...]
sys.path.append('/custom/path')  # Add custom path
import mymodule  # Now searches in /custom/path

Common uses:
• Module search: understanding where Python looks for modules
• Custom paths: sys.path.append('/custom/path')
• Debugging imports: check sys.path for missing modules
• Modules and imports

Example: import sys; sys.path returns a list of directories where Python searches for modules, allowing you to see and modify the module search path.

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
  (_i: number) => ({ 
    q: `What is __all__ = ['name1', 'name2']?`, 
    o: ["Defines public API", "SyntaxError", "Error", "None"], 
    c: 0, 
    e: "__all__ defines what 'from module import *' imports.",
    de: `__all__ is a special variable in modules that explicitly defines the public API - the names that should be imported when using from module import *. If __all__ is defined, only the names listed in __all__ are imported by from module import *. This helps prevent namespace pollution and clearly documents what the module's public API is. Names not in __all__ are still accessible if you import them explicitly.

__all__ variable:
• __all__ = ['name1', 'name2'] defines public API
• Controls what from module import * imports
• Only names in __all__ are imported by *
• Names not in __all__ still accessible explicitly
• Documents module's public API

How it works:
• __all__ = ['name1', 'name2'] defines public names
• from module import * imports only names in __all__
• Other names not imported by *
• Names still accessible via explicit import
• Helps prevent namespace pollution

Example:
# mymodule.py
__all__ = ['public_func', 'PublicClass']

def public_func():
    pass

def _private_func():  # Not in __all__
    pass

class PublicClass:
    pass

# from mymodule import * imports only public_func and PublicClass

Common uses:
• Defining public API: __all__ = ['public_names']
• Controlling imports: restrict what * imports
• Documentation: clearly document public API
• Modules and imports

Example: __all__ = ['name1', 'name2'] defines the public API of a module, controlling what names are imported by from module import *.

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
  (_i: number) => ({ 
    q: `What is __file__?`, 
    o: ["Path to current module file", "Error", "None", "''"], 
    c: 0, 
    e: "__file__ contains path to current module.",
    de: `__file__ is a special variable that contains the path to the current module file. It's automatically set by Python when a module is loaded from a file. __file__ is useful for finding the location of a module, accessing resources relative to the module file, or debugging. Note that __file__ may not exist for modules loaded from other sources (like built-in modules).

__file__ variable:
• __file__ contains path to current module file
• Set automatically when module loaded from file
• Useful for finding module location
• May not exist for built-in modules
• Useful for relative paths

How it works:
• Python sets __file__ when module loaded
• Contains absolute or relative path to module
• Can use os.path.dirname(__file__) to get directory
• Useful for accessing resources near module
• May be None for built-in modules

Example:
# mymodule.py
print(__file__)  # /path/to/mymodule.py
import os
module_dir = os.path.dirname(__file__)
config_path = os.path.join(module_dir, 'config.json')

Common uses:
• Finding module location: __file__ gives module path
• Relative paths: use __file__ to find resources near module
• Debugging: check which file is being executed
• Modules and imports

Example: __file__ contains the path to the current module file, allowing you to access resources relative to the module's location.

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
  
  // 41-50: Generators and Iterators
  (_i: number) => ({ 
    q: `What is def gen(): yield 1; type(gen())?`, 
    o: ["<class 'generator'>", "<class 'function'>", "Error", "None"], 
    c: 0, 
    e: "Function with yield returns generator.",
    de: `A function containing the yield keyword becomes a generator function. When you call a generator function, it returns a generator object (not the function itself). If def gen(): yield 1; type(gen()), then type(gen()) returns <class 'generator'> because gen() calls the generator function, which returns a generator object. The generator object is an iterator that can produce values one at a time when iterated over.

Generator function:
• def gen(): yield 1 defines generator function
• gen() calls generator function
• Returns generator object (not function)
• type(gen()) returns <class 'generator'>
• Generator is lazy (doesn't execute until iterated)

How it works:
• def gen(): yield 1 defines generator function
• gen() calls function and returns generator object
• Generator doesn't execute yet (lazy)
• type() checks object type
• Returns: <class 'generator'>

Example:
def gen():
    yield 1
type(gen())              # <class 'generator'> (generator object)
type(gen)                # <class 'function'> (generator function)

Common uses:
• Generator functions: def gen(): yield value (creates generator)
• Lazy evaluation: generators produce values on demand
• Memory efficiency: generators don't store all values
• Generators and iterators

Example: If def gen(): yield 1; type(gen()), then type(gen()) returns <class 'generator'> because a function with yield returns a generator object, not a regular function.

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
  (_i: number) => ({ 
    q: `What is def gen(): yield 1; next(gen())?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "next() gets next value from generator.",
    de: `The next() function gets the next value from a generator. If def gen(): yield 1; next(gen()), then next(gen()) returns 1 because next() advances the generator to the next yield statement and returns the yielded value. Each call to next() on a generator consumes one value. Note that each gen() call creates a new generator, so this returns 1 each time, but if you reuse the same generator object, it will raise StopIteration after yielding all values.

next() with generator:
• next(gen()) returns 1
• next() advances generator to next yield
• Returns yielded value (1)
• Generator state advances
• Returns: 1

How it works:
• gen() creates new generator object
• next(gen()) starts generator execution
• Generator executes until yield 1
• next() returns yielded value: 1
• Generator pauses at yield
• Returns: 1

Example:
def gen():
    yield 1
next(gen())              # 1 (first value)
g = gen()                # Reuse same generator
next(g)                  # 1
next(g)                  # StopIteration (exhausted)

Common uses:
• Generator iteration: next(generator) (get next value)
• Manual iteration: next() for explicit control
• Generator values: consume values one at a time
• Generators and iterators

Example: If def gen(): yield 1; next(gen()), then next(gen()) returns 1 because next() gets the next value from the generator, advancing it to the next yield statement.

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
  (_i: number) => ({ 
    q: `What is def gen(): yield 1; yield 2; list(gen())?`, 
    o: ["[1, 2]", "[1]", "Error", "None"], 
    c: 0, 
    e: "Generator yields multiple values.",
    de: `A generator can yield multiple values. If def gen(): yield 1; yield 2; list(gen()), then list(gen()) returns [1, 2] because the generator yields both values (1, then 2), and list() consumes all values from the generator, creating a list with all yielded values. Each yield statement produces one value, and the generator continues until it reaches the end (or a return statement).

Multiple yields:
• list(gen()) returns [1, 2]
• Generator yields 1, then 2
• list() consumes all values
• Creates list with all yielded values
• Returns: [1, 2]

How it works:
• gen() creates generator object
• list() iterates over generator
• First iteration: generator yields 1
• Second iteration: generator yields 2
• list() collects all values: [1, 2]
• Returns: [1, 2]

Example:
def gen():
    yield 1
    yield 2
list(gen())              # [1, 2] (all yielded values)
g = gen()
next(g)                  # 1
next(g)                  # 2
next(g)                  # StopIteration

Common uses:
• Multiple values: def gen(): yield val1; yield val2
• List conversion: list(generator) (consume all values)
• Generator values: produce sequence of values
• Generators and iterators

Example: If def gen(): yield 1; yield 2; list(gen()), then list(gen()) returns [1, 2] because the generator yields multiple values, and list() consumes all of them.

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
  (_i: number) => ({ 
    q: `What is def gen(): yield 1; return; g = gen(); next(g); next(g)?`, 
    o: ["StopIteration", "1", "Error", "None"], 
    c: 0, 
    e: "Generator raises StopIteration when exhausted.",
    de: `A generator raises StopIteration when it's exhausted (has no more values to yield). If def gen(): yield 1; return; g = gen(); next(g); next(g), then next(g) raises StopIteration because the generator yields 1 on the first next(), then reaches the return statement (or end of function), so the second next() has no more values to yield and raises StopIteration. This is the standard way iterators signal they're done.

StopIteration exception:
• next(g) raises StopIteration
• Generator exhausted (no more values)
• First next(g) returns 1 (last value)
• Second next(g) raises StopIteration
• Standard way iterators signal completion

How it works:
• g = gen() creates generator
• next(g) starts generator, yields 1 (returns 1)
• Generator continues, reaches return
• next(g) called again
• Generator has no more values
• Raises StopIteration

Example:
def gen():
    yield 1
    return
g = gen()
next(g)                  # 1 (last value)
next(g)                  # StopIteration (exhausted)

Common uses:
• Iterator completion: StopIteration signals end
• for loops: handle StopIteration automatically
• Generator exhaustion: check if generator is done
• Generators and iterators

Example: If def gen(): yield 1; return; g = gen(); next(g); next(g), then next(g) raises StopIteration because the generator is exhausted - it has no more values to yield after yielding 1.

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
  (_i: number) => ({ 
    q: `What is def gen(): yield 1; return 'done'; g = gen(); next(g); g.send(None)?`, 
    o: ["StopIteration with value 'done'", "1", "Error", "None"], 
    c: 0, 
    e: "return value becomes StopIteration value.",
    de: `When a generator has a return statement with a value, that value becomes the value attribute of the StopIteration exception. If def gen(): yield 1; return 'done'; g = gen(); next(g); g.send(None), then g.send(None) raises StopIteration with value 'done' because after yielding 1, the generator reaches return 'done', and the return value becomes the StopIteration exception's value attribute. You can access it via except StopIteration as e: e.value.

Return value in StopIteration:
• g.send(None) raises StopIteration with value 'done'
• Generator returns 'done'
• Return value becomes StopIteration.value
• Access via except StopIteration as e: e.value
• Raises StopIteration

How it works:
• g = gen() creates generator
• next(g) yields 1 (returns 1)
• Generator continues, reaches return 'done'
• g.send(None) called (same as next(g))
• Generator exhausted, raises StopIteration
• StopIteration.value = 'done'

Example:
def gen():
    yield 1
    return 'done'
g = gen()
next(g)                  # 1
try:
    next(g)
except StopIteration as e:
    print(e.value)       # 'done'

Common uses:
• Generator return values: return value (becomes StopIteration.value)
• Exception values: access return value from StopIteration
• Generator completion: return value with final state
• Generators and iterators

Example: If def gen(): yield 1; return 'done'; g = gen(); next(g); g.send(None), then g.send(None) raises StopIteration with value 'done' because the return value becomes the StopIteration exception's value attribute.

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
  (_i: number) => ({ 
    q: `What is def gen(): x = yield 1; yield x; g = gen(); next(g); g.send(2)?`, 
    o: ["2", "1", "Error", "None"], 
    c: 0, 
    e: "send() sends value to generator, becomes yield expression value.",
    de: `The send() method sends a value to a generator, and that value becomes the value of the yield expression. If def gen(): x = yield 1; yield x; g = gen(); next(g); g.send(2), then g.send(2) returns 2 because send() sends 2 to the generator, which becomes the value of x = yield 1 (x = 2), then the generator yields x (2). The first next(g) is needed to start the generator and reach the first yield before you can send values. After that, send() can be used to send values into the generator.

send() method:
• g.send(2) returns 2
• send() sends value to generator
• Value becomes yield expression value
• x = yield 1 becomes x = 2
• Generator yields x (2)
• Returns: 2

How it works:
• g = gen() creates generator
• next(g) starts generator, yields 1 (returns 1)
• Generator pauses at x = yield 1
• g.send(2) sends 2 to generator
• x = 2 (value of yield expression)
• Generator continues, yields x (2)
• Returns: 2

Example:
def gen():
    x = yield 1
    yield x
g = gen()
next(g)                  # 1 (starts generator)
g.send(2)                # 2 (sends 2, yields x=2)

Common uses:
• Two-way communication: send() sends values to generator
• Coroutines: generators that receive values
• Generator communication: yield receives values via send()
• Generators and iterators

Example: If def gen(): x = yield 1; yield x; g = gen(); next(g); g.send(2), then g.send(2) returns 2 because send() sends a value to the generator, which becomes the value of the yield expression (x = 2), and then the generator yields x.

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
  (_i: number) => ({ 
    q: `What is (x**2 for x in [1, 2, 3])?`, 
    o: ["Generator expression", "List", "Error", "None"], 
    c: 0, 
    e: "Generator expression creates generator.",
    de: `A generator expression is a compact way to create a generator, similar to a list comprehension but with parentheses instead of square brackets. If (x**2 for x in [1, 2, 3]), then it returns a generator expression object, which is a generator that will produce values when iterated over. Generator expressions are lazy - they don't compute all values at once, making them memory-efficient for large sequences.

Generator expression:
• (x**2 for x in [1, 2, 3]) creates generator expression
• Similar to list comprehension but with ()
• Lazy evaluation (doesn't compute all values)
• Returns generator object
• Memory efficient for large sequences

How it works:
• (x**2 for x in [1, 2, 3]) creates generator
• Syntax: (expression for item in iterable)
• Generator produces values on demand
• Lazy evaluation (not computed until iterated)
• Returns generator object

Example:
gen = (x**2 for x in [1, 2, 3])  # Generator expression
type(gen)                        # <class 'generator'>
list(gen)                        # [1, 4, 9] (consume all values)
# vs
[x**2 for x in [1, 2, 3]]        # List comprehension (eager)

Common uses:
• Memory efficiency: generator expressions for large sequences
• Lazy evaluation: compute values on demand
• Generator creation: compact syntax for generators
• Generators and iterators

Example: (x**2 for x in [1, 2, 3]) creates a generator expression, which is a generator object that produces values when iterated over.

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
  (_i: number) => ({ 
    q: `What is list(x**2 for x in [1, 2, 3])?`, 
    o: ["[1, 4, 9]", "Generator", "Error", "None"], 
    c: 0, 
    e: "list() consumes generator expression.",
    de: `The list() function can consume a generator expression, converting all its values into a list. If list(x**2 for x in [1, 2, 3]), then list() returns [1, 4, 9] because list() iterates over the generator expression, consuming all values (1**2=1, 2**2=4, 3**2=9) and creating a list with those values. This is equivalent to [x**2 for x in [1, 2, 3]], but using a generator expression inside list() can be more memory-efficient if you need to process values first.

list() consumes generator:
• list(x**2 for x in [1, 2, 3]) returns [1, 4, 9]
• list() iterates over generator expression
• Consumes all values: 1, 4, 9
• Creates list with all values
• Returns: [1, 4, 9]

How it works:
• (x**2 for x in [1, 2, 3]) creates generator
• list() iterates over generator
• Generator yields: 1 (1**2), 4 (2**2), 9 (3**2)
• list() collects all values: [1, 4, 9]
• Returns: [1, 4, 9]

Example:
list(x**2 for x in [1, 2, 3])    # [1, 4, 9] (consumes generator)
# Equivalent to:
[x**2 for x in [1, 2, 3]]        # [1, 4, 9] (list comprehension)

Common uses:
• List creation: list(generator) (convert generator to list)
• Memory efficiency: generator for processing, list() for final result
• Value consumption: consume all generator values
• Generators and iterators

Example: If list(x**2 for x in [1, 2, 3]), then list() returns [1, 4, 9] because list() consumes the generator expression, converting all its values into a list.

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
  (_i: number) => ({ 
    q: `What is def gen(): yield from [1, 2, 3]; list(gen())?`, 
    o: ["[1, 2, 3]", "[1]", "Error", "None"], 
    c: 0, 
    e: "yield from delegates to another iterable.",
    de: `The yield from statement delegates iteration to another iterable. If def gen(): yield from [1, 2, 3]; list(gen()), then list(gen()) returns [1, 2, 3] because yield from [1, 2, 3] delegates to the list, yielding each value from the list. This is equivalent to for item in [1, 2, 3]: yield item, but more concise. yield from is useful for delegating to another generator or iterable, allowing composition of generators.

yield from statement:
• yield from [1, 2, 3] delegates to list
• Yields each value from list
• Equivalent to for item in [1, 2, 3]: yield item
• list(gen()) collects all values: [1, 2, 3]
• Returns: [1, 2, 3]

How it works:
• gen() creates generator
• list() iterates over generator
• Generator executes: yield from [1, 2, 3]
• yield from yields each value: 1, 2, 3
• list() collects: [1, 2, 3]
• Returns: [1, 2, 3]

Example:
def gen():
    yield from [1, 2, 3]  # Delegates to list
list(gen())              # [1, 2, 3]
# Equivalent to:
def gen():
    for item in [1, 2, 3]:
        yield item

Common uses:
• Generator composition: yield from other_generator()
• Delegation: yield from iterable (delegate iteration)
• Concise syntax: yield from instead of for loop
• Generators and iterators

Example: If def gen(): yield from [1, 2, 3]; list(gen()), then list(gen()) returns [1, 2, 3] because yield from delegates to the iterable, yielding each value from it.

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
  (_i: number) => ({ 
    q: `What is class MyIter: def __iter__(self): return self; def __next__(self): return 1; type(MyIter())?`, 
    o: ["<class '__main__.MyIter'>", "<class 'generator'>", "Error", "None"], 
    c: 0, 
    e: "Iterator class implements __iter__ and __next__.",
    de: `An iterator class implements __iter__ (returns self) and __next__ (returns next value) methods. If class MyIter: def __iter__(self): return self; def __next__(self): return 1; type(MyIter()), then type(MyIter()) returns <class '__main__.MyIter'> because MyIter() creates an instance of MyIter, not a generator. The class is an iterator because it implements __iter__ and __next__, but it's still a regular class instance. Generators are a specific type of iterator, but custom iterator classes are also iterators.

Iterator class:
• type(MyIter()) returns <class '__main__.MyIter'>
• MyIter() creates class instance (not generator)
• Class implements __iter__ and __next__
• Makes it an iterator
• Returns: <class '__main__.MyIter'>

How it works:
• class MyIter: defines iterator class
• __iter__(self): return self (makes it iterable)
• __next__(self): return 1 (makes it iterator)
• MyIter() creates instance
• type() returns class type
• Returns: <class '__main__.MyIter'>

Example:
class MyIter:
    def __iter__(self):
        return self
    def __next__(self):
        return 1
type(MyIter())          # <class '__main__.MyIter'> (class instance, not generator)
iter(MyIter())          # <__main__.MyIter object> (is iterator)
isinstance(MyIter(), collections.abc.Iterator)  # True

Common uses:
• Custom iterators: class Iterator: __iter__, __next__
• Iterator protocol: implement __iter__ and __next__
• Iterator classes: alternative to generator functions
• Generators and iterators

Example: If class MyIter: def __iter__(self): return self; def __next__(self): return 1; type(MyIter()), then type(MyIter()) returns <class '__main__.MyIter'> because MyIter() creates a class instance, not a generator - it's an iterator class that implements the iterator protocol.

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
  
  // 51-60: Decorators
  (_i: number) => ({
    q: `What is def decorator(func): return func; @decorator; def func(): pass; type(func)?`,
    o: ["<class 'function'>", "<class 'decorator'>", "Error", "None"],
    c: 0,
    e: "Decorator that returns function unchanged.",
    de: `This is a simple decorator that returns the original function unchanged. The @decorator syntax applies the decorator to the function definition. Since the decorator just returns func, the decorated function behaves exactly like the original function. This is essentially a no-op decorator, useful for testing or as a template.

Simple decorator that does nothing:
• def decorator(func): return func - returns function unchanged
• @decorator - applies decorator to function below
• Decorated function has same type and behavior
• type(func) returns <class 'function'> (original function type)
• Useful as template or for conditional decoration

How it works:
• @decorator applied to def func(): pass
• decorator(func) called with function object
• decorator returns func unchanged
• func assigned the original function
• No change in behavior or type

Example:
def simple_decorator(func):
    return func  # Return unchanged

@simple_decorator
def my_function():
    pass

type(my_function)  # <class 'function'> - unchanged

Common uses:
• Template for more complex decorators
• Conditional decoration
• Debugging decorator framework
• Testing decorator application

Example: def decorator(func): return func creates a decorator that returns the function unchanged, so type(func) is still <class 'function'>.

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
  (_i: number) => ({
    q: `What is def decorator(func): def wrapper(): return func(); return wrapper; @decorator; def func(): return 1; func()?`,
    o: ["1", "Error", "None", "0"],
    c: 0,
    e: "Decorator wraps function in another function.",
    de: `This decorator replaces the original function with a wrapper function. The wrapper function calls the original function and returns its result. When func() is called, it actually calls the wrapper, which then calls the original func() and returns 1. The wrapper preserves the original function's behavior while allowing additional logic to be added.

Function wrapping decorator:
• def decorator(func): def wrapper(): return func(); return wrapper
• @decorator replaces func with wrapper
• wrapper() calls original func() and returns result
• func() now calls wrapper, which calls original
• Result is same as original function

How it works:
• @decorator applied to def func(): return 1
• decorator(func) called, returns wrapper function
• func assigned wrapper function
• func() calls wrapper()
• wrapper() calls original func(), gets 1
• wrapper() returns 1

Example:
def logging_decorator(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        return func(*args, **kwargs)
    return wrapper

@logging_decorator
def my_function():
    return 42

my_function()  # Prints "Calling my_function", returns 42

Benefits:
• Add behavior without changing function code
• Logging, timing, validation
• Cross-cutting concerns
• Reusable wrapper logic

Example: The decorator wraps the original function, so func() calls wrapper(), which calls the original func() and returns 1.

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
  (_i: number) => ({
    q: `What is def decorator(func): def wrapper(*args, **kwargs): return func(*args, **kwargs); return wrapper; @decorator; def add(x, y): return x + y; add(1, 2)?`,
    o: ["3", "Error", "None", "0"],
    c: 0,
    e: "Decorator wrapper preserves function arguments.",
    de: `This decorator creates a wrapper that accepts any arguments (*args, **kwargs) and passes them to the original function. This allows the decorator to work with functions that have any signature. The wrapper preserves all arguments and keyword arguments, making it a generic decorator template.

Generic wrapper with preserved arguments:
• def wrapper(*args, **kwargs): return func(*args, **kwargs)
• *args collects positional arguments into tuple
• **kwargs collects keyword arguments into dict
• All arguments passed to original function unchanged
• Works with any function signature

How it works:
• @decorator applied to def add(x, y): return x + y
• decorator(add) returns generic wrapper
• add assigned generic wrapper function
• add(1, 2) calls wrapper(1, 2)
• wrapper calls original add(1, 2) → 3
• wrapper returns 3

Example:
def generic_decorator(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__} with {args} {kwargs}")
        return func(*args, **kwargs)
    return wrapper

@generic_decorator
def multiply(a, b, factor=1):
    return a * b * factor

multiply(3, 4, factor=2)  # Works with any args

Benefits:
• Works with any function signature
• Preserves all argument types
• Generic decorator template
• No signature assumptions

Example: wrapper(*args, **kwargs) preserves all arguments, so add(1, 2) works and returns 3 from the original add function.

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
  (_i: number) => ({
    q: `What is from functools import wraps; def decorator(func): @wraps(func); def wrapper(): return func(); return wrapper; @decorator; def func(): pass; func.__name__?`,
    o: ["'func'", "'wrapper'", "Error", "None"],
    c: 0,
    e: "@wraps preserves original function metadata.",
    de: `@wraps is a decorator from functools that copies metadata from the original function to the wrapper function. Without @wraps, the wrapper function would have its own __name__, __doc__, etc. With @wraps, the wrapper appears to have the same metadata as the original function, which is important for debugging, documentation, and tools that inspect function metadata.

@wraps preserves function metadata:
• @wraps(func) copies __name__, __doc__, __module__, etc.
• Wrapper appears as original function to introspection
• Essential for decorators to not break function identity
• Prevents __name__ from being 'wrapper'
• Maintains documentation and debugging info

How it works:
• @wraps(func) applied to wrapper function
• Copies metadata from func to wrapper
• wrapper.__name__ becomes func.__name__
• wrapper.__doc__ becomes func.__doc__
• Preserves function identity for tools

Example:
from functools import wraps

def my_decorator(func):
    @wraps(func)  # Preserves metadata
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper

@my_decorator
def original_function():
    """This is the original docstring."""
    pass

print(original_function.__name__)   # 'original_function' (not 'wrapper')
print(original_function.__doc__)    # 'This is the original docstring.'

Benefits:
• Preserves function identity
• Better debugging (stack traces show correct names)
• Documentation tools work correctly
• Introspection works as expected
• Essential for professional decorators

Example: @wraps(func) copies metadata, so func.__name__ returns 'func' instead of 'wrapper'.

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
  (_i: number) => ({
    q: `What is def decorator(arg): return lambda func: func; @decorator(1); def func(): pass?`,
    o: ["Decorator with argument", "SyntaxError", "Error", "None"],
    c: 0,
    e: "Decorator factory: function that returns decorator.",
    de: `This is a decorator factory - a function that takes arguments and returns a decorator. @decorator(1) calls decorator(1), which returns a lambda function that acts as the actual decorator. The lambda takes the function and returns it unchanged. This pattern allows decorators to be configured with parameters.

Decorator factory pattern:
• def decorator(arg): return lambda func: func
• @decorator(1) calls decorator(1)
• Returns lambda that acts as decorator
• Lambda takes function and returns it
• Allows parameterized decorators

How it works:
• @decorator(1) executes decorator(1)
• decorator(1) returns lambda func: func
• Lambda becomes the actual decorator
• @ (lambda func: func) applied to def func()
• lambda returns func unchanged

Example:
def repeat(times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(3)  # Decorator factory with argument
def say_hello():
    print("Hello!")

say_hello()  # Prints "Hello!" 3 times

Benefits:
• Configurable decorators
• Reusable with different parameters
• Flexible decorator behavior
• Clean syntax for configuration

Example: @decorator(1) calls decorator(1), which returns a lambda that acts as the decorator for the function.

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
  (_i: number) => ({
    q: `What is class Decorator: def __init__(self, func): self.func = func; def __call__(self): return self.func(); @Decorator; def func(): return 1; func()?`,
    o: ["1", "Error", "None", "0"],
    c: 0,
    e: "Class-based decorator using __call__.",
    de: `This is a class-based decorator that uses the __call__ method. The @Decorator syntax creates a Decorator instance with the function as argument. When the decorated function is called, it actually calls the Decorator instance's __call__ method, which then calls the original function. This is an alternative to function-based decorators.

Class-based decorator with __call__:
• class Decorator: def __init__(self, func): self.func = func
• @Decorator creates Decorator instance with function
• Instance stored as func
• func() calls instance.__call__()
• __call__ calls original function

How it works:
• @Decorator applied to def func(): return 1
• Decorator(func) creates instance with func stored
• func assigned Decorator instance
• func() calls instance.__call__()
• __call__() calls self.func() → 1
• Returns 1

Example:
class TimingDecorator:
    def __init__(self, func):
        self.func = func
        self.call_count = 0

    def __call__(self, *args, **kwargs):
        self.call_count += 1
        import time
        start = time.time()
        result = self.func(*args, **kwargs)
        end = time.time()
        print(f"{self.func.__name__} took {end-start:.3f}s (called {self.call_count} times)")
        return result

@TimingDecorator
def slow_function():
    import time
    time.sleep(0.1)
    return "done"

slow_function()

Benefits:
• Can store state between calls
• More complex logic than function decorators
• Instance variables for configuration
• Inheritance support

Example: Class-based decorator uses __call__ method, so func() calls the Decorator instance which returns self.func() = 1.

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
  (_i: number) => ({
    q: `What is @staticmethod; def func(): return 1?`,
    o: ["Static method decorator", "SyntaxError", "Error", "None"],
    c: 0,
    e: "@staticmethod is built-in decorator.",
    de: `@staticmethod is a built-in Python decorator that creates a static method. Static methods don't receive self or cls as the first argument and can be called on the class without an instance. They are utility methods that don't need access to instance or class state. Static methods are bound to the class, not instances.

@staticmethod creates static method:
• @staticmethod marks method as static
• No self or cls parameter required
• Can be called on class: Class.method()
• Cannot access instance (self) or class (cls) attributes
• Utility functions related to class

How it works:
• @staticmethod applied to method
• Method becomes static (no implicit first argument)
• Accessible via class or instance
• No access to self or cls
• Behaves like regular function in class context

Example:
class MathUtils:
    @staticmethod
    def add(a, b):  # No self needed
        return a + b

    @staticmethod
    def multiply(a, b):
        return a * b

# Can call on class
result = MathUtils.add(3, 4)  # 7

# Can also call on instance
utils = MathUtils()
result = utils.multiply(3, 4)  # 12

Benefits:
• Utility functions in classes
• No instance required
• Cleaner API for helper functions
• Group related functions in class

Example: @staticmethod creates a static method that can be called without an instance, like a utility function in a class.

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
  (_i: number) => ({
    q: `What is @classmethod; def method(cls): return cls?`,
    o: ["Class method decorator", "SyntaxError", "Error", "None"],
    c: 0,
    e: "@classmethod is built-in decorator.",
    de: `@classmethod is a built-in Python decorator that creates a class method. Class methods receive the class (cls) as the first argument instead of an instance (self). They can access class attributes and create new instances. Class methods are commonly used for factory methods and alternative constructors.

@classmethod creates class method:
• @classmethod marks method as class method
• Receives cls instead of self
• Can access class attributes and methods
• Can create new instances of class
• Bound to class, not instance

How it works:
• @classmethod applied to method
• Method receives class as first argument (cls)
• Can access class variables and methods
• Often used for factory methods
• Accessible via class or instance

Example:
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    @classmethod
    def from_birth_year(cls, name, birth_year):
        age = 2024 - birth_year  # Calculate age
        return cls(name, age)    # Create instance

# Factory method
person = Person.from_birth_year("Alice", 1990)
print(person.age)  # 34

Benefits:
• Factory methods for object creation
• Alternative constructors
• Class-level operations
• Access to class state

Example: @classmethod creates a class method that receives cls as first argument and can access class-level attributes and create instances.

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
  (_i: number) => ({
    q: `What is @property; def x(self): return 1?`,
    o: ["Property decorator", "SyntaxError", "Error", "None"],
    c: 0,
    e: "@property is built-in decorator.",
    de: `@property is a built-in Python decorator that creates a property - a method that can be accessed like an attribute. Properties allow controlled access to instance attributes, enabling getter/setter behavior without changing the external API. Properties are computed on access and can include validation or computation.

@property creates property (getter):
• @property marks method as property
• Method becomes attribute-like access
• obj.x calls method instead of accessing attribute
• Enables computed properties
• Foundation for getters/setters

How it works:
• @property applied to method
• Method becomes property descriptor
• Access obj.x calls the method
• Returns computed value
• Can be extended with @x.setter for assignment

Example:
class Circle:
    def __init__(self, radius):
        self._radius = radius

    @property
    def radius(self):
        return self._radius

    @property
    def area(self):
        return 3.14159 * self._radius ** 2

    @property
    def circumference(self):
        return 2 * 3.14159 * self._radius

circle = Circle(5)
print(circle.radius)        # 5 (property access)
print(circle.area)          # 78.53975 (computed property)
print(circle.circumference) # 31.4159 (computed property)

Benefits:
• Encapsulation with simple syntax
• Computed properties
• Validation on access
• Backward compatibility
• Clean API design

Example: @property turns a method into a property that can be accessed like an attribute, computing values on demand.

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
  (_i: number) => ({
    q: `What is def decorator1(func): return func; def decorator2(func): return func; @decorator1; @decorator2; def func(): pass?`,
    o: ["Multiple decorators", "SyntaxError", "Error", "None"],
    c: 0,
    e: "Multiple decorators applied bottom to top.",
    de: `Multiple decorators can be stacked on a single function. They are applied from bottom to top - the decorator closest to the function definition is applied first. Each decorator receives the result of the previous decorator application. This allows combining multiple behaviors.

Multiple decorators stack bottom-to-top:
• @decorator1; @decorator2; def func()
• Decorators applied bottom to top
• @decorator2 applied first to original function
• @decorator1 applied to result of @decorator2
• Rightmost decorator is outermost

How it works:
• def func(): pass defined
• @decorator2 applied first: func = decorator2(func)
• @decorator1 applied second: func = decorator1(func)
• Final func is decorator1(decorator2(original_func))
• Execution order: decorator1 → decorator2 → original

Example:
def logging_decorator(func):
    def wrapper(*args, **kwargs):
        print(f"Logging: calling {func.__name__}")
        return func(*args, **kwargs)
    return wrapper

def timing_decorator(func):
    def wrapper(*args, **kwargs):
        import time
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"Timing: {end-start:.3f}s")
        return result
    return wrapper

@logging_decorator  # Applied second (outermost)
@timing_decorator   # Applied first (innermost)
def my_function():
    return "done"

my_function()
# Output: Logging: calling my_function
#         Timing: 0.000s

Benefits:
• Combine multiple behaviors
• Modular decorator design
• Reusable decorator combinations
• Clean separation of concerns

Example: Multiple decorators are applied bottom-to-top, so @decorator1 @decorator2 means decorator1(decorator2(func)).

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
  
  // 61-70: Design Patterns - Singleton, Factory, etc.
  (_i: number) => ({
    q: `What is class Singleton: _instance = None; def __new__(cls): if cls._instance is None: cls._instance = super().__new__(cls); return cls._instance; obj1 = Singleton(); obj2 = Singleton(); obj1 is obj2?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "Singleton pattern: __new__ ensures single instance.",
    de: `The Singleton pattern ensures only one instance of a class exists. By overriding __new__, we control object creation and return the same instance every time. obj1 is obj2 returns True because they reference the same object.

Singleton pattern implementation:
• class Singleton: defines singleton class
• _instance = None: class variable to store single instance
• __new__(cls): controls instance creation
• if cls._instance is None: creates instance only once
• return cls._instance: returns same instance always
• obj1 is obj2: True (same object identity)

How it works:
• First Singleton() call creates new instance
• Instance stored in cls._instance
• Subsequent calls return existing instance
• All instances are identical (obj1 is obj2)
• Only one object exists in memory

Example:
class Singleton:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

obj1 = Singleton()
obj2 = Singleton()
print(obj1 is obj2)  # True - same instance

Benefits:
• Ensures single instance
• Global access point
• Memory efficiency
• Controlled instantiation

Example: Singleton.__new__ ensures only one instance exists, so obj1 is obj2 returns True.

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
  (_i: number) => ({
    q: `What is class Factory: @staticmethod; def create(type): return type(); obj = Factory.create(list)?`,
    o: ["[]", "Error", "None", "Factory"],
    c: 0,
    e: "Factory pattern: creates objects without specifying exact class.",
    de: `The Factory pattern provides a way to create objects without specifying the exact class. The create method takes a type and instantiates it, returning the created object. Factory.create(list) returns [] because list() creates an empty list.

Factory pattern implementation:
• class Factory: defines factory class
• @staticmethod def create(type): static factory method
• return type(): instantiates the passed type
• obj = Factory.create(list): creates list instance
• Factory.create(list) returns [] (empty list)

How it works:
• Factory.create(list) calls create method
• type parameter is list class
• return type() creates list() → []
• obj assigned the created object
• Returns new instance each time

Example:
class Factory:
    @staticmethod
    def create(obj_type):
        return obj_type()

# Create different types
my_list = Factory.create(list)      # []
my_dict = Factory.create(dict)      # {}
my_set = Factory.create(set)        # set()

Benefits:
• Centralized object creation
• Decouples client from specific classes
• Easy to extend with new types
• Consistent creation interface

Example: Factory.create(list) returns [] because the factory instantiates the list type, creating an empty list.

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
  (_i: number) => ({
    q: `What is class Observer: def __init__(self): self._observers = []; def attach(self, observer): self._observers.append(observer); def notify(self): [o.update() for o in self._observers]?`,
    o: ["Observer pattern", "Error", "None", "Singleton"],
    c: 0,
    e: "Observer pattern: subject notifies observers of changes.",
    de: `The Observer pattern allows objects to be notified when another object changes. A subject maintains a list of observers and notifies them when its state changes. [o.update() for o in self._observers] iterates through all observers and calls their update method.

Observer pattern structure:
• class Observer: defines observer class
• self._observers = []: list to store observers
• attach(observer): adds observer to list
• notify(): iterates through observers
• [o.update() for o in self._observers]: calls update on each

How it works:
• Subject maintains list of observers
• attach() adds observers to list
• When subject changes, notify() is called
• notify() calls update() on each observer
• Observers react to the change

Example:
class NewsPublisher:
    def __init__(self):
        self._subscribers = []

    def subscribe(self, subscriber):
        self._subscribers.append(subscriber)

    def notify(self, news):
        for subscriber in self._subscribers:
            subscriber.update(news)

class Subscriber:
    def update(self, news):
        print(f"Received news: {news}")

Benefits:
• Loose coupling between objects
• Automatic notifications
• Extensible observer system
• Event-driven architecture

Example: Observer pattern where notify() iterates through observers and calls o.update() on each one.

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
  (_i: number) => ({
    q: `What is class Strategy: def execute(self): pass; class StrategyA(Strategy): def execute(self): return 'A'; class StrategyB(Strategy): def execute(self): return 'B'?`,
    o: ["Strategy pattern", "Error", "None", "Factory"],
    c: 0,
    e: "Strategy pattern: interchangeable algorithms.",
    de: `The Strategy pattern defines a family of algorithms and makes them interchangeable. StrategyA and StrategyB implement different versions of the execute method, allowing clients to choose different algorithms at runtime.

Strategy pattern structure:
• class Strategy: defines strategy interface
• def execute(self): pass: abstract method
• class StrategyA(Strategy): implements strategy A
• class StrategyB(Strategy): implements strategy B
• execute() returns different results for each strategy

How it works:
• Base Strategy class defines interface
• Concrete strategies implement execute differently
• Client can switch strategies at runtime
• Each strategy encapsulates different algorithm
• Polymorphism allows interchangeable use

Example:
class SortStrategy:
    def sort(self, data):
        pass

class BubbleSort(SortStrategy):
    def sort(self, data):
        # Bubble sort implementation
        return sorted(data)  # simplified

class QuickSort(SortStrategy):
    def sort(self, data):
        # Quick sort implementation
        return sorted(data)  # simplified

Benefits:
• Interchangeable algorithms
• Runtime strategy selection
• Clean separation of concerns
• Easy to add new strategies

Example: Strategy pattern with StrategyA.execute() returning 'A' and StrategyB.execute() returning 'B' - different algorithms for same interface.

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
  (_i: number) => ({
    q: `What is class Adapter: def __init__(self, obj): self.obj = obj; def method(self): return self.obj.other_method()?`,
    o: ["Adapter pattern", "Error", "None", "Observer"],
    c: 0,
    e: "Adapter pattern: adapts interface of one class to another.",
    de: `The Adapter pattern allows classes with incompatible interfaces to work together. The Adapter wraps an object and provides the expected interface by calling the wrapped object's methods. method() calls self.obj.other_method(), adapting the interface.

Adapter pattern structure:
• class Adapter: adapts incompatible interfaces
• def __init__(self, obj): stores wrapped object
• def method(self): provides expected interface
• return self.obj.other_method(): calls wrapped object's method
• Translates interface calls

How it works:
• Adapter wraps incompatible object
• Provides expected interface to client
• Translates method calls to wrapped object
• method() → other_method() translation
• Client uses adapter as if it were compatible

Example:
class OldSystem:
    def old_method(self):
        return "old result"

class Adapter:
    def __init__(self, old_system):
        self.old_system = old_system

    def new_method(self):  # Expected interface
        return self.old_system.old_method()  # Adapts call

old = OldSystem()
adapter = Adapter(old)
result = adapter.new_method()  # Works with new interface

Benefits:
• Interface compatibility
• Legacy system integration
• Clean API adaptation
• Third-party library integration

Example: Adapter adapts interfaces by wrapping objects and translating method calls - method() calls self.obj.other_method().

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
  (_i: number) => ({
    q: `What is class Builder: def __init__(self): self.parts = []; def add(self, part): self.parts.append(part); return self; def build(self): return ''.join(self.parts)?`,
    o: ["Builder pattern", "Error", "None", "Factory"],
    c: 0,
    e: "Builder pattern: constructs complex objects step by step.",
    de: `The Builder pattern separates the construction of complex objects from their representation. The builder accumulates parts and then builds the final object. add() returns self for method chaining, and build() assembles the final result.

Builder pattern structure:
• class Builder: constructs complex objects
• self.parts = []: accumulates object parts
• add(part): adds part and returns self for chaining
• return self: enables method chaining
• build(): assembles final object from parts

How it works:
• Builder accumulates parts step by step
• add() adds parts to internal list
• Returns self for method chaining
• build() combines all parts
• ''.join(self.parts) creates final string

Example:
class StringBuilder:
    def __init__(self):
        self.parts = []

    def add(self, part):
        self.parts.append(part)
        return self  # Enable chaining

    def build(self):
        return ''.join(self.parts)

builder = StringBuilder()
result = builder.add('Hello').add(' ').add('World').build()
# result = 'Hello World'

Benefits:
• Step-by-step construction
• Method chaining
• Complex object assembly
• Clean construction API

Example: Builder accumulates parts with add() and assembles them in build() using ''.join(self.parts).

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
  (_i: number) => ({
    q: `What is class Prototype: def clone(self): return type(self)()?`,
    o: ["Prototype pattern", "Error", "None", "Singleton"],
    c: 0,
    e: "Prototype pattern: creates objects by cloning.",
    de: `The Prototype pattern creates new objects by copying existing ones. clone() creates a new instance of the same type using type(self)() constructor. This avoids expensive initialization and allows creating variations from prototypes.

Prototype pattern structure:
• class Prototype: defines prototype class
• def clone(self): creates copy of self
• return type(self)(): creates new instance of same type
• clone() returns new object with same structure
• Allows creating variations from base prototype

How it works:
• Prototype defines clone method
• clone() creates new instance using type(self)()
• type(self) gets the class of current instance
• () creates new instance with default values
• Returns cloned object

Example:
class Document:
    def __init__(self, title="", content=""):
        self.title = title
        self.content = content

    def clone(self):
        return type(self)(self.title, self.content)

doc = Document("Original", "Content")
copy = doc.clone()  # Creates new Document with same values

Benefits:
• Avoid expensive object creation
• Create variations from prototypes
• Runtime object creation
• Simplified cloning logic

Example: Prototype.clone() creates new instance using type(self)(), cloning the object's structure and initial values.

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
  (_i: number) => ({
    q: `What is class Facade: def __init__(self): self.subsystem1 = Subsystem1(); self.subsystem2 = Subsystem2(); def operation(self): return self.subsystem1.method() + self.subsystem2.method()?`,
    o: ["Facade pattern", "Error", "None", "Adapter"],
    c: 0,
    e: "Facade pattern: provides simplified interface to complex subsystem.",
    de: `The Facade pattern provides a simplified interface to a complex system. The facade hides the complexity of multiple subsystems and provides a single operation() method that coordinates calls to subsystem1.method() and subsystem2.method().

Facade pattern structure:
• class Facade: provides simplified interface
• self.subsystem1 = Subsystem1(): initializes subsystems
• self.subsystem2 = Subsystem2(): initializes more subsystems
• def operation(self): single method for complex operations
• return self.subsystem1.method() + self.subsystem2.method(): coordinates subsystems

How it works:
• Facade wraps multiple complex subsystems
• Provides single operation() method
• operation() calls multiple subsystem methods
• Client uses simple facade interface
• Complexity hidden behind facade

Example:
class DatabaseFacade:
    def __init__(self):
        self.connection = DatabaseConnection()
        self.query_builder = QueryBuilder()
        self.result_formatter = ResultFormatter()

    def get_user_data(self, user_id):
        # Complex operations hidden
        query = self.query_builder.build_select(user_id)
        raw_data = self.connection.execute(query)
        return self.result_formatter.format(raw_data)

# Simple interface for complex system
facade = DatabaseFacade()
user_data = facade.get_user_data(123)

Benefits:
• Simplified interface to complex systems
• Reduced coupling to subsystems
• Easier to use and maintain
• Encapsulates system complexity

Example: Facade provides simplified operation() that coordinates self.subsystem1.method() + self.subsystem2.method().

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
  (_i: number) => ({
    q: `What is class Command: def execute(self): pass; class Invoker: def __init__(self): self.command = None; def set_command(self, cmd): self.command = cmd; def execute(self): self.command.execute()?`,
    o: ["Command pattern", "Error", "None", "Strategy"],
    c: 0,
    e: "Command pattern: encapsulates request as object.",
    de: `The Command pattern encapsulates requests as objects, allowing parameterization and queuing of operations. The Invoker stores a command and calls its execute() method when needed. This decouples the requester from the actual operation.

Command pattern structure:
• class Command: defines command interface
• def execute(self): pass: abstract execute method
• class Invoker: stores and executes commands
• self.command = None: stores current command
• set_command(cmd): sets command to execute
• execute(): calls self.command.execute()

How it works:
• Command objects encapsulate operations
• Invoker stores command object
• set_command() assigns command to execute
• execute() calls command.execute()
• Decouples operation from invocation

Example:
class Light:
    def on(self): print("Light on")
    def off(self): print("Light off")

class LightOnCommand:
    def __init__(self, light):
        self.light = light

    def execute(self):
        self.light.on()

class RemoteControl:
    def __init__(self):
        self.command = None

    def set_command(self, command):
        self.command = command

    def press_button(self):
        self.command.execute()

Benefits:
• Decouples caller from operation
• Commands can be queued and logged
• Undo/redo functionality possible
• Parameterized operations

Example: Command pattern where Invoker.set_command(cmd) stores command and Invoker.execute() calls self.command.execute().

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
  (_i: number) => ({
    q: `What is class Component: def operation(self): pass; class Composite(Component): def __init__(self): self.children = []; def add(self, child): self.children.append(child); def operation(self): [c.operation() for c in self.children]?`,
    o: ["Composite pattern", "Error", "None", "Facade"],
    c: 0,
    e: "Composite pattern: treats individual and composite objects uniformly.",
    de: `The Composite pattern allows treating individual objects and compositions of objects uniformly. operation() calls the same method on all children, whether they are individual objects or other composites. This creates a tree structure where operations propagate through the hierarchy.

Composite pattern structure:
• class Composite: defines composite class
• self.children = []: stores child components
• add(child): adds child to composition
• operation(): performs operation on self and children
• [c.operation() for c in self.children]: calls operation on each child

How it works:
• Composite contains list of children
• add() adds components to composition
• operation() performs work and delegates to children
• Children can be individual objects or other composites
• Creates recursive tree structure

Example:
class FileSystemComponent:
    def operation(self):
        pass

class File(FileSystemComponent):
    def operation(self):
        print("Processing file")

class Directory(FileSystemComponent):
    def __init__(self):
        self.children = []

    def add(self, component):
        self.children.append(component)

    def operation(self):
        print("Processing directory")
        for child in self.children:
            child.operation()

Benefits:
• Uniform treatment of objects and compositions
• Recursive operations on tree structures
• Easy to add new component types
• Complex hierarchies simplified

Example: Composite.operation() calls [c.operation() for c in self.children], recursively processing all components in the composition.

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
  
  // 71-80: Metaclasses and Advanced Features
  (_i: number) => ({ 
    q: `What is class Meta(type): pass; class MyClass(metaclass=Meta): pass; type(MyClass)?`, 
    o: ["<class '__main__.Meta'>", "<class 'type'>", "Error", "None"], 
    c: 0, 
    e: "metaclass parameter sets class's metaclass.",
    de: `The metaclass parameter allows you to specify a custom metaclass for a class. If class Meta(type): pass; class MyClass(metaclass=Meta): pass; type(MyClass), then type(MyClass) returns <class '__main__.Meta'> because MyClass was created using Meta as its metaclass, so type(MyClass) returns Meta (the class's metaclass), not the default type. Classes are instances of their metaclass, so MyClass is an instance of Meta, making type(MyClass) return Meta.

Custom metaclass:
• type(MyClass) returns <class '__main__.Meta'>
• MyClass created with metaclass=Meta
• Classes are instances of their metaclass
• MyClass is instance of Meta
• type() returns class's metaclass
• Returns: <class '__main__.Meta'>

How it works:
• class MyClass(metaclass=Meta): specifies metaclass
• Python uses Meta instead of type to create class
• MyClass created as instance of Meta
• type(MyClass) checks class's metaclass
• Returns: Meta (not type)

Example:
class Meta(type): pass
class MyClass(metaclass=Meta): pass
type(MyClass)              # <class '__main__.Meta'> (metaclass)
type(MyClass())            # <class '__main__.MyClass'> (class)

Common uses:
• Custom metaclasses: class MyClass(metaclass=Meta): (custom class creation)
• Metaprogramming: control how classes are created
• Metaclasses
• Advanced Python

Example: If class Meta(type): pass; class MyClass(metaclass=Meta): pass; type(MyClass), then type(MyClass) returns <class '__main__.Meta'> because the metaclass parameter sets the class's metaclass, making MyClass an instance of Meta.

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
  (_i: number) => ({ 
    q: `What is class Meta(type): def __new__(cls, name, bases, dct): return super().__new__(cls, name, bases, dct); class MyClass(metaclass=Meta): pass?`, 
    o: ["Custom metaclass", "Error", "None", "Regular class"], 
    c: 0, 
    e: "Metaclass __new__ controls class creation.",
    de: `A metaclass's __new__ method controls class creation. If class Meta(type): def __new__(cls, name, bases, dct): return super().__new__(cls, name, bases, dct); class MyClass(metaclass=Meta): pass, then MyClass is created using the custom metaclass because Meta.__new__ is called when MyClass is being created. The __new__ method receives the class name, base classes, and class dictionary, and returns the created class. This allows you to modify or validate the class during creation.

Metaclass __new__:
• MyClass created with custom metaclass
• Meta.__new__() called during class creation
• __new__ receives: cls (Meta), name ('MyClass'), bases (()), dct (class dict)
• __new__ creates and returns the class
• Allows customization during class creation

How it works:
• class MyClass(metaclass=Meta): triggers class creation
• Python calls Meta.__new__(Meta, 'MyClass', (), {...})
• __new__ creates the class object
• Returns created class (MyClass)
• MyClass is instance of Meta

Example:
class Meta(type):
    def __new__(cls, name, bases, dct):
        print(f"Creating class {name}")
        return super().__new__(cls, name, bases, dct)
class MyClass(metaclass=Meta): pass  # Prints "Creating class MyClass"

Common uses:
• Class customization: __new__ can modify class during creation
• Validation: check class definition before creation
• Metaprogramming: dynamically modify classes
• Metaclasses

Example: If class Meta(type): def __new__(cls, name, bases, dct): return super().__new__(cls, name, bases, dct); class MyClass(metaclass=Meta): pass, then MyClass is created using the custom metaclass because Meta.__new__ controls class creation.

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
  (_i: number) => ({ 
    q: `What is class Meta(type): def __init__(cls, name, bases, dct): cls.custom_attr = 1; class MyClass(metaclass=Meta): pass; MyClass.custom_attr?`, 
    o: ["1", "Error", "None", "0"], 
    c: 0, 
    e: "Metaclass __init__ can add attributes to class.",
    de: `A metaclass's __init__ method can add attributes to the class after it's created. If class Meta(type): def __init__(cls, name, bases, dct): cls.custom_attr = 1; class MyClass(metaclass=Meta): pass; MyClass.custom_attr, then MyClass.custom_attr returns 1 because Meta.__init__ is called after the class is created, and it sets cls.custom_attr = 1 on the class. This allows metaclasses to add class attributes automatically.

Metaclass __init__:
• MyClass.custom_attr returns 1
• Meta.__init__() called after class creation
• __init__ receives: cls (MyClass), name, bases, dct
• Sets cls.custom_attr = 1
• Attribute added to class
• Returns: 1

How it works:
• class MyClass(metaclass=Meta): triggers class creation
• Meta.__new__() creates the class
• Meta.__init__(MyClass, 'MyClass', (), {...}) called
• __init__ sets MyClass.custom_attr = 1
• Attribute available on class
• Returns: 1

Example:
class Meta(type):
    def __init__(cls, name, bases, dct):
        cls.custom_attr = 1  # Add attribute to class
class MyClass(metaclass=Meta): pass
MyClass.custom_attr        # 1 (added by metaclass)

Common uses:
• Automatic attributes: metaclass can add attributes to classes
• Class initialization: __init__ can set up class
• Metaprogramming: modify classes after creation
• Metaclasses

Example: If class Meta(type): def __init__(cls, name, bases, dct): cls.custom_attr = 1; class MyClass(metaclass=Meta): pass; MyClass.custom_attr, then MyClass.custom_attr returns 1 because the metaclass __init__ can add attributes to the class after it's created.

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
  (_i: number) => ({ 
    q: `What is class Meta(type): def __call__(cls, *args, **kwargs): return super().__call__(*args, **kwargs); class MyClass(metaclass=Meta): pass; type(MyClass())?`, 
    o: ["<class '__main__.MyClass'>", "<class '__main__.Meta'>", "Error", "None"], 
    c: 0, 
    e: "Metaclass __call__ controls instance creation.",
    de: `A metaclass's __call__ method controls instance creation (when you call the class like MyClass()). If class Meta(type): def __call__(cls, *args, **kwargs): return super().__call__(*args, **kwargs); class MyClass(metaclass=Meta): pass; type(MyClass()), then type(MyClass()) returns <class '__main__.MyClass'> because Meta.__call__ is called when MyClass() is invoked, and it creates an instance of MyClass. The __call__ method allows you to customize instance creation, such as implementing singleton patterns or adding validation.

Metaclass __call__:
• type(MyClass()) returns <class '__main__.MyClass'>
• MyClass() calls Meta.__call__()
• __call__ receives: cls (MyClass), *args, **kwargs
• __call__ creates instance using super().__call__()
• Instance is of MyClass class
• Returns: <class '__main__.MyClass'>

How it works:
• MyClass() calls the class (instance creation)
• Python calls Meta.__call__(MyClass, *args, **kwargs)
• __call__ executes: return super().__call__(*args, **kwargs)
• Creates instance of MyClass
• type(MyClass()) returns MyClass
• Returns: <class '__main__.MyClass'>

Example:
class Meta(type):
    def __call__(cls, *args, **kwargs):
        print(f"Creating instance of {cls.__name__}")
        return super().__call__(*args, **kwargs)
class MyClass(metaclass=Meta): pass
obj = MyClass()            # Prints "Creating instance of MyClass"

Common uses:
• Instance creation control: __call__ can customize instance creation
• Singleton patterns: metaclass can ensure single instance
• Validation: check arguments before instance creation
• Metaclasses

Example: If class Meta(type): def __call__(cls, *args, **kwargs): return super().__call__(*args, **kwargs); class MyClass(metaclass=Meta): pass; type(MyClass()), then type(MyClass()) returns <class '__main__.MyClass'> because the metaclass __call__ controls instance creation, creating an instance of MyClass.

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
  (_i: number) => ({ 
    q: `What is class SingletonMeta(type): _instances = {}; def __call__(cls, *args, **kwargs): if cls not in cls._instances: cls._instances[cls] = super().__call__(*args, **kwargs); return cls._instances[cls]; class MyClass(metaclass=SingletonMeta): pass; MyClass() is MyClass()?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Metaclass can implement Singleton pattern.",
    de: `A metaclass can implement the Singleton pattern by controlling instance creation in its __call__ method. If class SingletonMeta(type): _instances = {}; def __call__(cls, *args, **kwargs): if cls not in cls._instances: cls._instances[cls] = super().__call__(*args, **kwargs); return cls._instances[cls]; class MyClass(metaclass=SingletonMeta): pass; MyClass() is MyClass(), then MyClass() is MyClass() returns True because SingletonMeta.__call__ ensures only one instance exists - it stores the first instance in _instances and returns that same instance for all subsequent calls.

Metaclass Singleton:
• MyClass() is MyClass() returns True
• SingletonMeta.__call__() controls instance creation
• First call creates instance, stores in _instances[cls]
• Subsequent calls return existing instance
• Only one instance exists
• Returns: True

How it works:
• MyClass() calls SingletonMeta.__call__(MyClass)
• __call__ checks if MyClass in _instances (not found)
• Creates instance: super().__call__(*args, **kwargs)
• Stores in _instances[MyClass]
• Next MyClass() call finds existing instance
• Returns same instance (obj1 is obj2)

Example:
class SingletonMeta(type):
    _instances = {}
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]
class MyClass(metaclass=SingletonMeta): pass
obj1 = MyClass()
obj2 = MyClass()
obj1 is obj2              # True (same instance)

Common uses:
• Singleton pattern: metaclass ensures single instance
• Instance control: __call__ manages instance creation
• Metaprogramming: implement design patterns with metaclasses
• Metaclasses

Example: If class SingletonMeta(type): _instances = {}; def __call__(cls, *args, **kwargs): if cls not in cls._instances: cls._instances[cls] = super().__call__(*args, **kwargs); return cls._instances[cls]; class MyClass(metaclass=SingletonMeta): pass; MyClass() is MyClass(), then MyClass() is MyClass() returns True because the metaclass implements the Singleton pattern, ensuring only one instance exists.

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
  (_i: number) => ({ 
    q: `What is class MyClass: __slots__ = ['x']; obj = MyClass(); obj.x = 1; obj.y = 2?`, 
    o: ["AttributeError", "Works fine", "Error", "None"], 
    c: 0, 
    e: "__slots__ restricts instance attributes.",
    de: `The __slots__ attribute restricts which attributes can be set on instances. If class MyClass: __slots__ = ['x']; obj = MyClass(); obj.x = 1; obj.y = 2, then obj.y = 2 raises an AttributeError because __slots__ only allows 'x' as an instance attribute. Any attempt to set an attribute not in __slots__ raises an AttributeError. This saves memory by preventing the creation of __dict__ for instances.

__slots__ restriction:
• obj.y = 2 raises AttributeError
• __slots__ = ['x'] restricts allowed attributes
• Only 'x' allowed
• 'y' not in __slots__
• Raises AttributeError

How it works:
• obj.x = 1 works (x in __slots__)
• obj.y = 2 attempts to set 'y'
• 'y' not in __slots__ = ['x']
• Attribute not allowed
• Raises AttributeError: 'MyClass' object has no attribute 'y'

Example:
class MyClass:
    __slots__ = ['x', 'y']
obj = MyClass()
obj.x = 1                    # Works (x in __slots__)
obj.y = 2                    # Works (y in __slots__)
obj.z = 3                    # AttributeError (z not in __slots__)

Common uses:
• Memory optimization: __slots__ = ['attr1', 'attr2'] (saves memory)
• Attribute restriction: prevent dynamic attributes
• Class optimization
• Memory efficiency

Example: If class MyClass: __slots__ = ['x']; obj = MyClass(); obj.x = 1; obj.y = 2, then obj.y = 2 raises an AttributeError because __slots__ restricts instance attributes to only those listed, and 'y' is not in __slots__.

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
  (_i: number) => ({ 
    q: `What is class MyClass: __slots__ = ['x']; obj = MyClass(); '__dict__' in dir(obj)?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "__slots__ removes __dict__ (saves memory).",
    de: `Using __slots__ removes the __dict__ attribute from instances, saving memory. If class MyClass: __slots__ = ['x']; obj = MyClass(); '__dict__' in dir(obj), then '__dict__' in dir(obj) returns False because __slots__ prevents the creation of __dict__ for instances. dir() lists all attributes, and since instances with __slots__ don't have __dict__, it's not in the list. This is the memory-saving benefit of __slots__ - instances don't need a dictionary to store attributes.

__slots__ removes __dict__:
• '__dict__' in dir(obj) returns False
• __slots__ prevents __dict__ creation
• Instances don't have __dict__
• dir() doesn't include __dict__
• Returns: False

How it works:
• obj.x = 1 sets attribute (stored in slots, not __dict__)
• dir(obj) lists attributes
• Instance has no __dict__ (__slots__ prevents it)
• '__dict__' not in dir(obj)
• Returns: False

Example:
class MyClass:
    __slots__ = ['x']
obj = MyClass()
obj.x = 1
'__dict__' in dir(obj)      # False (no __dict__)
# vs
class MyClass:
    pass  # No __slots__
obj = MyClass()
'__dict__' in dir(obj)      # True (has __dict__)

Common uses:
• Memory optimization: __slots__ removes __dict__ (saves memory)
• Fixed attributes: __slots__ = ['attr1', 'attr2'] (no dynamic attributes)
• Class optimization
• Memory efficiency

Example: If class MyClass: __slots__ = ['x']; obj = MyClass(); '__dict__' in dir(obj), then '__dict__' in dir(obj) returns False because __slots__ removes __dict__ from instances, preventing dynamic attribute creation and saving memory.

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
  (_i: number) => ({ 
    q: `What is class MyClass: def __getattribute__(self, name): return super().__getattribute__(name); obj = MyClass(); obj.x?`, 
    o: ["AttributeError", "None", "Error", "0"], 
    c: 0, 
    e: "__getattribute__ intercepts all attribute access.",
    de: `The __getattribute__ method intercepts all attribute access (both existing and missing attributes). If class MyClass: def __getattribute__(self, name): return super().__getattribute__(name); obj = MyClass(); obj.x, then obj.x raises an AttributeError because __getattribute__ is called for all attribute access, even if the attribute doesn't exist. In this case, it calls super().__getattribute__(name), which uses the default behavior and raises AttributeError for missing attributes. __getattribute__ is called before __getattr__, so it intercepts all attribute access.

__getattribute__ intercepts all access:
• obj.x raises AttributeError
• __getattribute__ called for all attribute access
• Checks if attribute exists
• obj has no attribute 'x'
• super().__getattribute__('x') raises AttributeError
• Raises AttributeError

How it works:
• obj.x accesses attribute 'x'
• Python calls obj.__getattribute__('x')
• __getattribute__ executes: return super().__getattribute__('x')
• Default __getattribute__ searches for 'x'
• 'x' not found on obj
• Raises AttributeError: 'MyClass' object has no attribute 'x'

Example:
class MyClass:
    def __getattribute__(self, name):
        print(f"Accessing {name}")
        return super().__getattribute__(name)
obj = MyClass()
obj.x                    # Prints "Accessing x", then AttributeError

Common uses:
• Attribute access control: __getattribute__ can log, validate, or modify access
• Intercept all access: __getattribute__ catches all attribute access
• Attribute access hooks
• Special methods

Example: If class MyClass: def __getattribute__(self, name): return super().__getattribute__(name); obj = MyClass(); obj.x, then obj.x raises an AttributeError because __getattribute__ intercepts all attribute access, and since 'x' doesn't exist, it raises AttributeError.

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
  (_i: number) => ({ 
    q: `What is class MyClass: def __getattr__(self, name): return f'Missing: {name}'; obj = MyClass(); obj.x?`, 
    o: ["'Missing: x'", "AttributeError", "Error", "None"], 
    c: 0, 
    e: "__getattr__ called only if attribute not found.",
    de: `The __getattr__ method is called only when an attribute is not found through the normal lookup process (not in __dict__, not a descriptor, not a class attribute). If class MyClass: def __getattr__(self, name): return f'Missing: {name}'; obj = MyClass(); obj.x, then obj.x returns 'Missing: x' because 'x' doesn't exist, so Python calls __getattr__('x'), which returns the string 'Missing: x'. This is different from __getattribute__, which is called for all attribute access - __getattr__ is only called as a fallback for missing attributes.

__getattr__ fallback:
• obj.x returns 'Missing: x'
• Normal attribute lookup fails (x doesn't exist)
• Python calls __getattr__('x') as fallback
• __getattr__ returns f'Missing: x'
• Returns: 'Missing: x'

How it works:
• obj.x accesses attribute 'x'
• Python searches: obj.__dict__ (not found) → MyClass.__dict__ (not found)
• Normal lookup fails
• Python calls obj.__getattr__('x')
• __getattr__ returns f'Missing: x'
• Returns: 'Missing: x'

Example:
class MyClass:
    def __getattr__(self, name):
        return f'Missing: {name}'
obj = MyClass()
obj.x                    # 'Missing: x' (fallback for missing attribute)
obj.y                    # 'Missing: y' (fallback)

Common uses:
• Default values: __getattr__ can provide defaults for missing attributes
• Dynamic attributes: create attributes on the fly
• Attribute fallback: handle missing attributes gracefully
• Special methods

Example: If class MyClass: def __getattr__(self, name): return f'Missing: {name}'; obj = MyClass(); obj.x, then obj.x returns 'Missing: x' because __getattr__ is called only when an attribute is not found, providing a fallback value.

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
  (_i: number) => ({ 
    q: `What is class MyClass: def __setattr__(self, name, value): super().__setattr__(name, value * 2); obj = MyClass(); obj.x = 5; obj.x?`, 
    o: ["10", "5", "Error", "None"], 
    c: 0, 
    e: "__setattr__ intercepts all attribute assignment.",
    de: `The __setattr__ method intercepts all attribute assignment (setting attributes). If class MyClass: def __setattr__(self, name, value): super().__setattr__(name, value * 2); obj = MyClass(); obj.x = 5; obj.x, then obj.x returns 10 because __setattr__ intercepts the assignment obj.x = 5, transforms the value (value * 2 = 5 * 2 = 10), and stores 10. Every attribute assignment goes through __setattr__, allowing you to validate, transform, or log assignments.

__setattr__ intercepts assignment:
• obj.x = 5 calls __setattr__('x', 5)
• __setattr__ transforms: value * 2 = 5 * 2 = 10
• Stores transformed value: obj.x = 10
• obj.x returns 10
• Returns: 10

How it works:
• obj.x = 5 attempts to set attribute
• Python calls obj.__setattr__('x', 5)
• __setattr__ executes: super().__setattr__(name, value * 2)
• Evaluates: 5 * 2 = 10
• Stores: obj.x = 10
• obj.x returns 10

Example:
class MyClass:
    def __setattr__(self, name, value):
        if value < 0:
            raise ValueError("Value must be non-negative")
        super().__setattr__(name, value * 2)
obj = MyClass()
obj.x = 5                    # Stores 10 (5 * 2)
obj.x                        # 10 (transformed value)

Common uses:
• Value transformation: __setattr__ can transform values before storing
• Validation: __setattr__ can validate assignments
• Assignment hooks: intercept all attribute assignments
• Special methods

Example: If class MyClass: def __setattr__(self, name, value): super().__setattr__(name, value * 2); obj = MyClass(); obj.x = 5; obj.x, then obj.x returns 10 because __setattr__ intercepts all attribute assignment, transforming the value before storing it (5 * 2 = 10).

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
  
  // 81-90: Best Practices and Code Quality
  (_i: number) => ({ 
    q: `What is PEP 8?`, 
    o: ["Python style guide", "Python version", "Error", "Module"], 
    c: 0, 
    e: "PEP 8 is Python Enhancement Proposal for code style.",
    de: `PEP 8 (Python Enhancement Proposal 8) is the official style guide for Python code. It provides conventions for writing readable, consistent Python code, including naming conventions, code layout, whitespace usage, line length, comments, and more. Following PEP 8 makes code easier to read and maintain, and it's widely adopted in the Python community. While not enforced by the language, PEP 8 is considered best practice and many tools (like linters) can check code against PEP 8 standards.

PEP 8 style guide:
• PEP 8 is Python style guide
• Provides conventions for readable code
• Covers naming, layout, whitespace, etc.
• Widely adopted in Python community
• Best practice for Python code

How it works:
• PEP 8 defines style conventions
• Examples: snake_case for functions, CapitalCase for classes
• 4 spaces for indentation (not tabs)
• Maximum 79 characters per line
• Clear naming conventions

Example:
# PEP 8 compliant
def my_function():  # snake_case, 4 spaces
    my_variable = 1  # snake_case
    return my_variable

class MyClass:  # CapitalCase
    pass

Common uses:
• Code style: follow PEP 8 conventions
• Readability: consistent, readable code
• Team standards: shared style guide
• Best practices

Example: PEP 8 is the Python style guide - a set of conventions for writing readable, consistent Python code, covering naming, layout, whitespace, and more.

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
  (_i: number) => ({ 
    q: `What is def func(x: int) -> int: return x * 2?`, 
    o: ["Type hints", "SyntaxError", "Error", "None"], 
    c: 0, 
    e: "Type hints specify expected types (PEP 484).",
    de: `Type hints (PEP 484) specify expected types for function parameters and return values. If def func(x: int) -> int: return x * 2, then x: int specifies that parameter x should be an int, and -> int specifies that the function returns an int. Type hints are optional annotations that provide information about types for documentation, IDE support, and static type checkers like mypy. They don't affect runtime behavior but help catch type errors before execution.

Type hints:
• x: int specifies parameter type
• -> int specifies return type
• Optional annotations (don't affect runtime)
• Help with IDE support and type checking
• PEP 484 standard

How it works:
• def func(x: int) -> int: defines function with type hints
• x: int indicates x should be int
• -> int indicates function returns int
• Type hints stored in __annotations__
• Static type checkers use them

Example:
def func(x: int) -> int:
    return x * 2
func(5)                    # 10 (type hints don't enforce at runtime)
func('5')                  # Still works (no runtime check)
# But mypy would warn about wrong type

Common uses:
• Type documentation: def func(x: int) -> int (document types)
• IDE support: better autocomplete and error detection
• Static type checking: tools like mypy check types
• Best practices

Example: def func(x: int) -> int: return x * 2 uses type hints (PEP 484) to specify that x is an int and the function returns an int - these are optional annotations that help with documentation and type checking.

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
  (_i: number) => ({ 
    q: `What is from typing import List, Dict; def func(x: List[int]) -> Dict[str, int]: return {}?`, 
    o: ["Type hints with generics", "SyntaxError", "Error", "None"], 
    c: 0, 
    e: "typing module provides generic types.",
    de: `The typing module provides generic types for type hints. If from typing import List, Dict; def func(x: List[int]) -> Dict[str, int]: return {}, then List[int] specifies a list containing integers, and Dict[str, int] specifies a dictionary with string keys and integer values. The typing module provides generic versions of built-in types (like List, Dict, Tuple, Set) that allow you to specify the types of their contents, enabling more precise type hints.

Generic type hints:
• List[int] specifies list of integers
• Dict[str, int] specifies dict with str keys, int values
• typing module provides generic types
• More precise type information
• Better type checking

How it works:
• from typing import List, Dict imports generic types
• List[int] indicates list containing ints
• Dict[str, int] indicates dict with str keys, int values
• Generic types allow precise type hints
• Type checkers use them for validation

Example:
from typing import List, Dict
def func(x: List[int]) -> Dict[str, int]:
    return {}
func([1, 2, 3])           # Works (list of ints)
func(['1', '2'])          # Type checker would warn

Common uses:
• Generic types: List[T], Dict[K, V], Tuple[T, ...]
• Precise type hints: specify contents of collections
• Type checking: better type validation
• Best practices

Example: from typing import List, Dict; def func(x: List[int]) -> Dict[str, int]: return {} uses generic type hints from the typing module to specify that x is a list of integers and the function returns a dictionary with string keys and integer values.

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
  (_i: number) => ({ 
    q: `What is def func(x: int = 1) -> int: return x?`, 
    o: ["Type hints with defaults", "SyntaxError", "Error", "None"], 
    c: 0, 
    e: "Type hints work with default parameters.",
    de: `Type hints work with default parameters - you can specify both the type and the default value. If def func(x: int = 1) -> int: return x, then x: int = 1 specifies that parameter x should be an int with a default value of 1. The type hint comes before the default value, allowing you to document the expected type while providing a default. This is a common pattern in Python functions.

Type hints with defaults:
• x: int = 1 specifies type and default
• Type hint comes before default value
• Works with default parameters
• Documents expected type
• Provides default value

How it works:
• def func(x: int = 1) -> int: defines function
• x: int specifies type (int)
• = 1 provides default value
• Type hint and default can be used together
• Type checker validates against hint

Example:
def func(x: int = 1) -> int:
    return x
func()                  # 1 (uses default)
func(5)                 # 5 (explicit value)
func('5')               # Type checker would warn

Common uses:
• Default parameters: def func(x: int = 1) (type and default)
• Type documentation: document types even with defaults
• Type checking: validate types for default parameters
• Best practices

Example: def func(x: int = 1) -> int: return x uses type hints with default parameters - x: int = 1 specifies the type (int) and default value (1) together.

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
  (_i: number) => ({ 
    q: `What is def func(x: 'MyClass') -> None: pass?`, 
    o: ["Forward reference (string)", "SyntaxError", "Error", "None"], 
    c: 0, 
    e: "String type hints allow forward references.",
    de: `String type hints allow forward references to types that haven't been defined yet. If def func(x: 'MyClass') -> None: pass, then 'MyClass' is a forward reference - the class name is in quotes because MyClass may not be defined yet when the function is defined. This allows you to reference classes before they're defined, which is useful for type hints in cases where classes reference each other or when the type is defined later in the file.

Forward references:
• 'MyClass' is string type hint
• Allows reference before class defined
• Useful for circular references
• Type checker resolves string later
• Prevents NameError

How it works:
• def func(x: 'MyClass') -> None: uses string type hint
• 'MyClass' in quotes (forward reference)
• Class doesn't need to exist yet
• Type checker resolves string when needed
• Prevents NameError if class not defined

Example:
def func(x: 'MyClass') -> None:  # Forward reference
    pass

class MyClass:
    pass

func(MyClass())          # Works (forward reference resolved)

Common uses:
• Forward references: 'ClassName' (reference before definition)
• Circular references: classes that reference each other
• Type hints: use strings for forward references
• Best practices

Example: def func(x: 'MyClass') -> None: pass uses a string type hint ('MyClass') to allow forward reference - referencing a class that may not be defined yet.

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
  (_i: number) => ({ 
    q: `What is from typing import Optional; def func(x: Optional[int]) -> int: return x or 0?`, 
    o: ["Optional type hint", "SyntaxError", "Error", "None"], 
    c: 0, 
    e: "Optional[T] means T or None.",
    de: `Optional[T] from the typing module means the type can be T or None. If from typing import Optional; def func(x: Optional[int]) -> int: return x or 0, then Optional[int] means x can be an int or None. This is equivalent to Union[int, None] or int | None (Python 3.10+), but Optional[int] is more concise and clearly expresses that None is an allowed value. The function returns x or 0, handling the case where x is None.

Optional type hint:
• Optional[int] means int or None
• Equivalent to Union[int, None]
• Clearly expresses None is allowed
• Type checker understands None handling
• Common pattern for nullable values

How it works:
• from typing import Optional imports Optional
• Optional[int] indicates x can be int or None
• return x or 0 handles None case
• If x is None, returns 0
• If x is int, returns x

Example:
from typing import Optional
def func(x: Optional[int]) -> int:
    return x or 0
func(5)                  # 5 (int provided)
func(None)               # 0 (None handled)

Common uses:
• Nullable types: Optional[T] (can be T or None)
• Type hints: clearly express None is allowed
• Type checking: validate Optional types
• Best practices

Example: from typing import Optional; def func(x: Optional[int]) -> int: return x or 0 uses Optional[int] to indicate that x can be an int or None, with the function handling None by returning 0.

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
  (_i: number) => ({ 
    q: `What is from typing import Union; def func(x: Union[int, str]) -> int: return 1?`, 
    o: ["Union type hint", "SyntaxError", "Error", "None"], 
    c: 0, 
    e: "Union[T, U] means T or U.",
    de: `Union[T, U] from the typing module means the type can be T or U. If from typing import Union; def func(x: Union[int, str]) -> int: return 1, then Union[int, str] means x can be an int or a str. This allows a function to accept multiple types, providing flexibility while still documenting the allowed types. Union types are useful when a function needs to work with multiple types, and type checkers can validate that the correct types are used.

Union type hint:
• Union[int, str] means int or str
• Allows multiple types
• Type checker validates against union
• Documents allowed types
• Flexible type hints

How it works:
• from typing import Union imports Union
• Union[int, str] indicates x can be int or str
• Function accepts either type
• Type checker validates against union
• Documents allowed types

Example:
from typing import Union
def func(x: Union[int, str]) -> int:
    return len(str(x))  # Works with both int and str
func(5)                  # Works (int)
func('hello')            # Works (str)

Common uses:
• Multiple types: Union[T, U] (can be T or U)
• Type hints: document multiple allowed types
• Type checking: validate against union
• Best practices

Example: from typing import Union; def func(x: Union[int, str]) -> int: return 1 uses Union[int, str] to indicate that x can be an int or a str, allowing flexibility while documenting allowed types.

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
  (_i: number) => ({ 
    q: `What is from typing import Callable; def func(f: Callable[[int], int]) -> int: return f(1)?`, 
    o: ["Callable type hint", "SyntaxError", "Error", "None"], 
    c: 0, 
    e: "Callable[[args], return] hints function types.",
    de: `Callable from the typing module provides type hints for functions. If from typing import Callable; def func(f: Callable[[int], int]) -> int: return f(1), then Callable[[int], int] specifies that f is a function that takes one int argument and returns an int. The first list contains the argument types, and the second value is the return type. This allows you to type hint functions that take other functions as parameters.

Callable type hint:
• Callable[[int], int] means function (int) -> int
• First list: argument types
• Second value: return type
• Documents function type
• Type checker validates function signatures

How it works:
• from typing import Callable imports Callable
• Callable[[int], int] indicates function type
• [int] is argument types (one int parameter)
• int is return type
• Type checker validates function matches signature

Example:
from typing import Callable
def func(f: Callable[[int], int]) -> int:
    return f(1)
def square(x: int) -> int:
    return x * x
func(square)             # 1 (calls square(1))

Common uses:
• Function types: Callable[[args], return] (type hint for functions)
• Higher-order functions: type hint functions that take functions
• Type checking: validate function signatures
• Best practices

Example: from typing import Callable; def func(f: Callable[[int], int]) -> int: return f(1) uses Callable[[int], int] to specify that f is a function that takes one int argument and returns an int.

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
  (_i: number) => ({ 
    q: `What is from dataclasses import dataclass; @dataclass; class Point: x: int; y: int; Point(1, 2)?`, 
    o: ["Data class instance", "SyntaxError", "Error", "None"], 
    c: 0, 
    e: "@dataclass automatically generates __init__, __repr__, etc.",
    de: `The @dataclass decorator automatically generates common methods like __init__, __repr__, __eq__, and more based on class attributes. If from dataclasses import dataclass; @dataclass; class Point: x: int; y: int; Point(1, 2), then Point(1, 2) creates a Point instance because @dataclass automatically generates __init__ based on the class attributes (x: int and y: int). This eliminates boilerplate code for classes that primarily store data, making them more concise and maintainable.

@dataclass decorator:
• Point(1, 2) creates Point instance
• @dataclass generates __init__ automatically
• __init__ takes x and y as arguments
• Also generates __repr__, __eq__, etc.
• Reduces boilerplate code

How it works:
• @dataclass decorates Point class
• Analyzes class attributes (x: int, y: int)
• Generates __init__(self, x: int, y: int)
• Generates __repr__, __eq__, etc.
• Point(1, 2) uses generated __init__
• Returns: Point instance

Example:
from dataclasses import dataclass
@dataclass
class Point:
    x: int
    y: int
p = Point(1, 2)          # Uses generated __init__
print(p)                 # Point(x=1, y=2) (uses generated __repr__)
p == Point(1, 2)         # True (uses generated __eq__)

Common uses:
• Data classes: @dataclass class Point: x: int; y: int (automatic methods)
• Reduce boilerplate: automatic __init__, __repr__, __eq__
• Clean code: concise class definitions
• Best practices

Example: from dataclasses import dataclass; @dataclass; class Point: x: int; y: int; Point(1, 2) uses @dataclass to automatically generate __init__ and other methods, allowing Point(1, 2) to create a Point instance with x=1 and y=2.

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
  (_i: number) => ({ 
    q: `What is from enum import Enum; class Color(Enum): RED = 1; GREEN = 2; Color.RED?`, 
    o: ["<Color.RED: 1>", "1", "Error", "None"], 
    c: 0, 
    e: "Enum creates enumeration with named constants.",
    de: `Enum from the enum module creates enumerations - a set of named constants. If from enum import Enum; class Color(Enum): RED = 1; GREEN = 2; Color.RED, then Color.RED returns <Color.RED: 1> because Enum creates named constant objects. Each enum member (like Color.RED) is an instance of the enum class with a name and value. Enum members have both a name (RED) and a value (1), and they can be compared by identity (is) or equality (==).

Enum enumeration:
• Color.RED returns <Color.RED: 1>
• Enum creates named constants
• Each member is Color instance with name and value
• RED has name 'RED' and value 1
• Members are comparable and iterable

How it works:
• class Color(Enum): defines enum class
• RED = 1 creates enum member
• Color.RED is Color instance with name='RED', value=1
• Returns enum member object
• Returns: <Color.RED: 1>

Example:
from enum import Enum
class Color(Enum):
    RED = 1
    GREEN = 2
Color.RED                # <Color.RED: 1> (enum member)
Color.RED.name           # 'RED' (member name)
Color.RED.value          # 1 (member value)
Color.RED == Color.RED   # True (comparable)

Common uses:
• Named constants: class Color(Enum): RED = 1 (named constants)
• Type safety: enum prevents invalid values
• Readable code: use Color.RED instead of 1
• Best practices

Example: from enum import Enum; class Color(Enum): RED = 1; GREEN = 2; Color.RED returns <Color.RED: 1> because Enum creates named constants - Color.RED is an enum member with name 'RED' and value 1.

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
  
  // 91-100: Advanced Topics and Utilities
  (_i: number) => ({ 
    q: `What is import sys; sys.argv?`, 
    o: ["Command line arguments", "Error", "None", "[]"], 
    c: 0, 
    e: "sys.argv contains command line arguments.",
    de: `sys.argv is a list containing command line arguments passed to a Python script. If import sys; sys.argv, then sys.argv returns a list with command line arguments because sys.argv[0] is the script name, and sys.argv[1:] contains the arguments passed to the script. This allows Python scripts to accept command line arguments, making them interactive and configurable. sys.argv is useful for scripts that need input from the command line.

sys.argv:
• sys.argv contains command line arguments
• sys.argv[0] is script name
• sys.argv[1:] contains arguments
• List of strings
• Allows scripts to accept arguments

How it works:
• Python populates sys.argv when script runs
• sys.argv[0] is script name (path to script)
• sys.argv[1:] contains arguments
• All arguments are strings
• Can be accessed and parsed by script

Example:
# script.py
import sys
print(sys.argv)          # ['script.py', 'arg1', 'arg2'] if run: python script.py arg1 arg2
print(sys.argv[0])       # 'script.py' (script name)
print(sys.argv[1:])      # ['arg1', 'arg2'] (arguments)

Common uses:
• Command line arguments: sys.argv (access arguments)
• Script configuration: accept arguments from command line
• Interactive scripts: make scripts configurable
• Best practices

Example: import sys; sys.argv returns a list containing command line arguments - sys.argv[0] is the script name, and sys.argv[1:] contains the arguments passed to the script.

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
  (_i: number) => ({ 
    q: `What is import os; os.environ?`, 
    o: ["Environment variables dict", "Error", "None", "{}"], 
    c: 0, 
    e: "os.environ contains environment variables.",
    de: `os.environ is a dictionary-like object containing environment variables. If import os; os.environ, then os.environ returns a dictionary of environment variables because os.environ is a mapping of environment variable names to their values. You can access environment variables like os.environ['PATH'] or os.environ.get('PATH'), and you can modify them (though changes only affect the current process). Environment variables are typically set by the operating system or parent process.

os.environ:
• os.environ contains environment variables
• Dictionary-like object (mapping)
• Keys are variable names, values are variable values
• Can access with os.environ['VAR'] or os.environ.get('VAR')
• Can modify (affects current process only)

How it works:
• os.environ is mapping of environment variables
• os.environ['VAR'] accesses environment variable
• os.environ.get('VAR') gets with default
• Changes affect current process only
• Inherited from parent process

Example:
import os
os.environ              # Mapping of environment variables
os.environ.get('PATH')  # Path value (if exists)
os.environ['MY_VAR'] = 'value'  # Set variable (current process)

Common uses:
• Environment variables: os.environ (access environment)
• Configuration: read config from environment variables
• System integration: interact with system environment
• Best practices

Example: import os; os.environ returns a dictionary-like object containing environment variables, allowing you to access and modify environment variables.

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
  (_i: number) => ({ 
    q: `What is import json; json.dumps({'a': 1})?`, 
    o: ["'{\"a\": 1}'", "{'a': 1}", "Error", "None"], 
    c: 0, 
    e: "json.dumps() converts dict to JSON string.",
    de: `json.dumps() converts a Python object (like a dictionary) to a JSON string. If import json; json.dumps({'a': 1}), then json.dumps({'a': 1}) returns '{"a": 1}' because dumps() serializes the dictionary to a JSON-formatted string. This is useful for sending data over networks, storing data in files, or exchanging data between systems. The JSON format is language-independent and widely supported.

json.dumps():
• json.dumps({'a': 1}) returns '{"a": 1}'
• Converts Python object to JSON string
• Serializes dictionary to JSON format
• Returns string representation
• Returns: '{"a": 1}'

How it works:
• json.dumps({'a': 1}) serializes dictionary
• Converts Python dict to JSON string
• JSON uses double quotes (not single)
• Returns JSON-formatted string
• Returns: '{"a": 1}'

Example:
import json
json.dumps({'a': 1})    # '{"a": 1}' (JSON string)
json.dumps([1, 2, 3])   # '[1, 2, 3]' (JSON string)
json.dumps('hello')     # '"hello"' (JSON string)

Common uses:
• Data serialization: json.dumps(obj) (convert to JSON string)
• Network communication: send JSON data over HTTP
• File storage: save data as JSON
• Best practices

Example: import json; json.dumps({'a': 1}) returns '{"a": 1}' because json.dumps() converts a Python dictionary to a JSON-formatted string.

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
  (_i: number) => ({ 
    q: `What is import json; json.loads('{\"a\": 1}')?`, 
    o: ["{'a': 1}", "'{\"a\": 1}'", "Error", "None"], 
    c: 0, 
    e: "json.loads() converts JSON string to dict.",
    de: `json.loads() converts a JSON string to a Python object (like a dictionary). If import json; json.loads('{"a": 1}'), then json.loads('{"a": 1}') returns {'a': 1} because loads() deserializes the JSON string to a Python dictionary. This is the inverse of json.dumps() - it parses a JSON string and creates the corresponding Python object. This is useful for receiving data from networks, reading data from files, or parsing JSON responses.

json.loads():
• json.loads('{"a": 1}') returns {'a': 1}
• Converts JSON string to Python object
• Deserializes JSON string to dictionary
• Returns Python object
• Returns: {'a': 1}

How it works:
• json.loads('{"a": 1}') parses JSON string
• Converts JSON string to Python dict
• JSON keys become dict keys
• JSON values become dict values
• Returns: {'a': 1}

Example:
import json
json.loads('{"a": 1}')  # {'a': 1} (Python dict)
json.loads('[1, 2, 3]') # [1, 2, 3] (Python list)
json.loads('"hello"')   # 'hello' (Python string)

Common uses:
• Data deserialization: json.loads(json_str) (convert from JSON string)
• Network communication: parse JSON responses
• File reading: load JSON data from files
• Best practices

Example: import json; json.loads('{"a": 1}') returns {'a': 1} because json.loads() converts a JSON string to a Python dictionary.

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
  (_i: number) => ({ 
    q: `What is import pickle; pickle.dumps([1, 2, 3])?`, 
    o: ["Bytes object", "[1, 2, 3]", "Error", "None"], 
    c: 0, 
    e: "pickle.dumps() serializes object to bytes.",
    de: `pickle.dumps() serializes a Python object to a bytes object. If import pickle; pickle.dumps([1, 2, 3]), then pickle.dumps([1, 2, 3]) returns a bytes object because dumps() converts the Python object to a byte stream. Pickle is Python's native serialization format - it can serialize almost any Python object, including custom classes, functions, and complex nested structures. The serialized data is binary (bytes), not human-readable like JSON.

pickle.dumps():
• pickle.dumps([1, 2, 3]) returns bytes object
• Converts Python object to bytes
• Serializes object to binary format
• Returns bytes representation
• Returns: bytes object

How it works:
• pickle.dumps([1, 2, 3]) serializes list
• Converts Python object to bytes
• Creates binary representation
• Returns bytes object
• Can be stored or transmitted

Example:
import pickle
data = pickle.dumps([1, 2, 3])  # bytes object
type(data)                       # <class 'bytes'>
# Can be saved to file or sent over network

Common uses:
• Python serialization: pickle.dumps(obj) (convert to bytes)
• Object persistence: save Python objects to files
• Inter-process communication: send objects between processes
• Best practices

Example: import pickle; pickle.dumps([1, 2, 3]) returns a bytes object because pickle.dumps() serializes a Python object to a binary byte stream.

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
  (_i: number) => ({ 
    q: `What is import pickle; data = pickle.dumps([1, 2, 3]); pickle.loads(data)?`, 
    o: ["[1, 2, 3]", "Bytes object", "Error", "None"], 
    c: 0, 
    e: "pickle.loads() deserializes bytes to object.",
    de: `pickle.loads() deserializes a bytes object back to a Python object. If import pickle; data = pickle.dumps([1, 2, 3]); pickle.loads(data), then pickle.loads(data) returns [1, 2, 3] because loads() converts the pickled bytes back to the original Python object. This is the inverse of pickle.dumps() - it reconstructs the Python object from its pickled representation. This is useful for loading objects from files or receiving objects over networks.

pickle.loads():
• pickle.loads(data) returns [1, 2, 3]
• Converts bytes to Python object
• Deserializes pickled bytes to original object
• Returns reconstructed Python object
• Returns: [1, 2, 3]

How it works:
• data = pickle.dumps([1, 2, 3]) serializes list to bytes
• pickle.loads(data) deserializes bytes
• Reconstructs original Python object
• Returns original list: [1, 2, 3]
• Returns: [1, 2, 3]

Example:
import pickle
data = pickle.dumps([1, 2, 3])  # Serialize to bytes
original = pickle.loads(data)   # Deserialize back
original                         # [1, 2, 3] (original object restored)

Common uses:
• Python deserialization: pickle.loads(bytes) (convert from bytes)
• Object loading: load Python objects from files
• Inter-process communication: receive objects between processes
• Best practices

Example: import pickle; data = pickle.dumps([1, 2, 3]); pickle.loads(data) returns [1, 2, 3] because pickle.loads() deserializes the pickled bytes back to the original Python object.

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
  (_i: number) => ({ 
    q: `What is from collections import namedtuple; Point = namedtuple('Point', ['x', 'y']); Point(1, 2)?`, 
    o: ["Point(x=1, y=2)", "Error", "None", "(1, 2)"], 
    c: 0, 
    e: "namedtuple creates tuple subclass with named fields.",
    de: `namedtuple from collections creates a tuple subclass with named fields. If from collections import namedtuple; Point = namedtuple('Point', ['x', 'y']); Point(1, 2), then Point(1, 2) returns Point(x=1, y=2) because namedtuple creates a class with named fields, allowing you to access elements by name (point.x) instead of index (point[0]). namedtuple combines the memory efficiency of tuples with the readability of named attributes.

namedtuple:
• Point(1, 2) returns Point(x=1, y=2)
• namedtuple creates tuple subclass with named fields
• Access by name: point.x, point.y
• Access by index: point[0], point[1]
• Immutable like tuples

How it works:
• namedtuple('Point', ['x', 'y']) creates Point class
• Point class is tuple subclass with named fields
• Point(1, 2) creates instance
• Fields accessible by name: x=1, y=2
• Returns: Point(x=1, y=2)

Example:
from collections import namedtuple
Point = namedtuple('Point', ['x', 'y'])
p = Point(1, 2)
p.x                        # 1 (access by name)
p.y                        # 2 (access by name)
p[0]                       # 1 (access by index)
p[1]                       # 2 (access by index)

Common uses:
• Named tuples: namedtuple('Name', ['field1', 'field2']) (tuple with names)
• Readable tuples: access by name instead of index
• Memory efficient: like tuples but with named fields
• Best practices

Example: from collections import namedtuple; Point = namedtuple('Point', ['x', 'y']); Point(1, 2) returns Point(x=1, y=2) because namedtuple creates a tuple subclass with named fields, allowing access by name.

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
  (_i: number) => ({
    q: `What is from collections import defaultdict; d = defaultdict(list); d['key']?`,
    o: ["[]", "KeyError", "Error", "None"],
    c: 0,
    e: "defaultdict returns default value for missing keys.",
    de: `defaultdict from collections automatically creates default values for missing keys. If from collections import defaultdict; d = defaultdict(list); d['key'], then d['key'] returns [] because defaultdict(list) creates a dictionary where accessing a missing key automatically creates a default value using the factory function (list). Instead of raising KeyError, defaultdict calls the factory function (list()) and returns the result (empty list []), then stores it for future access.

defaultdict:
• d['key'] returns []
• defaultdict(list) uses list as factory
• Missing key triggers list() → []
• No KeyError for missing keys
• Factory function creates default values

How it works:
• defaultdict(list) creates dict with list factory
• d['key'] accesses missing key
• defaultdict calls factory: list()
• Returns empty list: []
• Stores [] in dict for future access
• Returns: []

Example:
from collections import defaultdict
d = defaultdict(list)
d['key']                  # [] (automatic default, no KeyError)
d['key'].append(1)        # Works (d['key'] is now [1])
d['key']                  # [1] (stored for future)

Common uses:
• Default values: defaultdict(list) (automatic defaults)
• Grouping: group items by key with defaultdict(list)
• No KeyError: automatic default creation
• Best practices

Example: from collections import defaultdict; d = defaultdict(list); d['key'] returns [] because defaultdict automatically creates default values for missing keys using the factory function (list in this case).

defaultdict features:
• from collections import defaultdict: imports defaultdict
• defaultdict(list): creates dict with list factory
• d['key']: accesses missing key, gets [] (empty list)
• No KeyError for missing keys
• Factory function creates default values

How it works:
• defaultdict takes factory function (list)
• When key missing, calls factory() to create value
• d['key'] triggers list() → []
• Value stored for future access
• Subsequent access returns same object

Example:
from collections import defaultdict

# Create defaultdict with list factory
d = defaultdict(list)

# Access missing key - gets empty list
items = d['missing_key']  # items = []
print(items)  # []

# List is now stored
d['missing_key'].append('item')
print(d['missing_key'])  # ['item']

Benefits:
• No KeyError for missing keys
• Automatic value creation
• Cleaner code than dict.get() or manual checks
• Useful for grouping and counting operations

Example: defaultdict(list) creates dict where missing keys return [] instead of KeyError.

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
  (_i: number) => ({
    q: `What is from collections import Counter; Counter([1, 1, 2, 2, 2])?`,
    o: ["Counter({2: 3, 1: 2})", "[1, 1, 2, 2, 2]", "Error", "None"],
    c: 0,
    e: "Counter counts occurrences of elements.",
    de: `Counter from collections counts occurrences of elements in an iterable. Counter([1, 1, 2, 2, 2]) returns Counter({2: 3, 1: 2}) because 1 appears twice and 2 appears three times.

Counter functionality:
• from collections import Counter: imports Counter
• Counter(iterable): counts element frequencies
• Counter([1, 1, 2, 2, 2]): counts 1→2, 2→3
• Returns Counter object: Counter({2: 3, 1: 2})
• Dictionary-like with extra methods

How it works:
• Counter iterates through [1, 1, 2, 2, 2]
• Counts each element's frequency
• 1 appears twice: 1: 2
• 2 appears three times: 2: 3
• Creates Counter({2: 3, 1: 2})

Example:
from collections import Counter

data = [1, 1, 2, 2, 2]
counter = Counter(data)
print(counter)  # Counter({2: 3, 1: 2})

# Access counts
print(counter[1])  # 2
print(counter[2])  # 3
print(counter[3])  # 0 (missing keys return 0)

Benefits:
• Easy frequency counting
• Most common elements: counter.most_common()
• Mathematical operations between counters
• Missing keys return 0 (not KeyError)

Example: Counter([1, 1, 2, 2, 2]) returns Counter({2: 3, 1: 2}) because 1 appears twice and 2 appears three times.

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
  (_i: number) => ({
    q: `What is from functools import lru_cache; @lru_cache(maxsize=128); def fib(n): return n if n < 2 else fib(n-1) + fib(n-2); fib(10)?`,
    o: ["55", "10", "Error", "None"],
    c: 0,
    e: "@lru_cache memoizes function results (caching).",
    de: `@lru_cache is a decorator that caches function results to avoid redundant computations. For fib(10), it caches intermediate results, making recursive Fibonacci much faster by avoiding recalculations.

@lru_cache features:
• from functools import lru_cache: imports decorator
• @lru_cache(maxsize=128): applies caching with max 128 entries
• Caches fib(n) results to avoid recomputation
• fib(10) returns 55 (Fibonacci sequence)
• Subsequent calls with same args use cached result

How it works:
• @lru_cache wraps fib function
• First call to fib(10) computes recursively
• Intermediate results cached: fib(9), fib(8), etc.
• Second call to fib(10) returns cached 55
• Dramatically faster for repeated calls

Example:
from functools import lru_cache

@lru_cache(maxsize=128)
def fib(n):
    if n < 2:
        return n
    return fib(n-1) + fib(n-2)

result = fib(10)  # 55
# Second call is instant (cached)

Benefits:
• Eliminates redundant computations
• Speeds up recursive functions dramatically
• Configurable cache size
• Transparent to calling code
• Memory vs speed tradeoff

Example: @lru_cache enables fib(10) to return 55 quickly by caching intermediate Fibonacci calculations.

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
  (_i: number) => ({
    q: `What is class Meta(type): def __new__(cls, name, bases, dct): return super().__new__(cls, name, bases, dct); class MyClass(metaclass=Meta): pass; isinstance(MyClass, Meta)?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "Metaclass is the class of a class.",
    de: `Metaclasses are classes that create classes. isinstance(MyClass, Meta) returns True because MyClass is an instance of the Meta metaclass. Meta is the metaclass that created MyClass.

Metaclass relationship:
• class Meta(type): metaclass definition
• metaclass=Meta: uses Meta to create MyClass
• Meta is the class of MyClass
• isinstance(MyClass, Meta): True
• type(MyClass): <class '__main__.Meta'>

How it works:
• metaclass=Meta tells Python to use Meta for class creation
• Meta.__new__() creates the class object
• Meta.__init__() initializes the class
• MyClass becomes instance of Meta
• isinstance(MyClass, Meta) confirms relationship

Example:
class Meta(type):
    def __new__(cls, name, bases, dct):
        print(f"Creating class {name}")
        return super().__new__(cls, name, bases, dct)

class MyClass(metaclass=Meta):
    pass

print(isinstance(MyClass, Meta))  # True
print(type(MyClass))              # <class '__main__.Meta'>

Benefits:
• Class creation customization
• Automatic class modification
• Singleton classes, ORM mapping
• Advanced class behaviors

Example: isinstance(MyClass, Meta) returns True because Meta is the metaclass that created MyClass.

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
  (_i: number) => ({
    q: `What is class MyClass: __slots__ = ['x', 'y']; obj = MyClass(); obj.x = 1; hasattr(obj, '__dict__')?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "__slots__ prevents __dict__ creation for memory efficiency.",
    de: `__slots__ restricts instance attributes to a fixed set, preventing __dict__ creation. This saves memory by avoiding the dynamic attribute dictionary. hasattr(obj, '__dict__') returns False because __slots__ eliminates the __dict__.

__slots__ memory optimization:
• __slots__ = ['x', 'y']: restricts attributes to listed names
• No __dict__ created for instances
• Saves memory (no attribute dictionary)
• Faster attribute access
• hasattr(obj, '__dict__'): False

How it works:
• __slots__ defines allowed attribute names
• Python doesn't create __dict__ for instances
• Attributes stored in fixed memory layout
• Cannot add arbitrary attributes
• Memory efficient for many instances

Example:
class Point:
    __slots__ = ['x', 'y']

    def __init__(self, x, y):
        self.x = x
        self.y = y

p = Point(1, 2)
print(hasattr(p, '__dict__'))  # False
p.z = 3  # AttributeError - not in __slots__

Benefits:
• Memory savings (no __dict__)
• Faster attribute access
• Prevents accidental attribute creation
• Better memory usage for large numbers of instances

Example: hasattr(obj, '__dict__') returns False because __slots__ prevents __dict__ creation for memory efficiency.

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
  (_i: number) => ({
    q: `What is from typing import List, Dict; def process(data: List[int]) -> Dict[str, int]: return {'count': len(data), 'sum': sum(data)}; process.__annotations__?`,
    o: ["{'data': <class 'typing.List[int]'>, 'return': <class 'typing.Dict[str, int]'>}", "{}", "Error", "None"],
    c: 0,
    e: "__annotations__ stores type hints as dictionary.",
    de: `Type hints are stored in the __annotations__ attribute as a dictionary. process.__annotations__ contains the parameter and return type annotations. This allows runtime inspection of type hints.

Type annotations storage:
• def process(data: List[int]) -> Dict[str, int]: function with type hints
• __annotations__ stores type information
• {'data': List[int], 'return': Dict[str, int]}
• Runtime accessible type information
• Used by type checkers and documentation tools

How it works:
• Type hints added to function definition
• Python stores hints in __annotations__
• Accessible at runtime
• Not enforced by Python (hints only)
• Used by mypy, IDEs, documentation

Example:
from typing import List, Dict

def process(data: List[int]) -> Dict[str, int]:
    return {'count': len(data), 'sum': sum(data)}

print(process.__annotations__)
# {'data': typing.List[int], 'return': typing.Dict[str, int]}

Benefits:
• Runtime type information access
• Documentation and IDE support
• Type checking tools
• API introspection
• Development tooling

Example: process.__annotations__ returns {'data': List[int], 'return': Dict[str, int]} containing the function's type hints.

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
  (_i: number) => ({
    q: `What is import asyncio; async def fetch(): return 'data'; asyncio.run(fetch())?`,
    o: ["'data'", "Error", "None", "<coroutine object>"],
    c: 0,
    e: "asyncio.run() executes async function and returns result.",
    de: `asyncio.run() executes an async function and returns its result. async def defines a coroutine function. asyncio.run(fetch()) runs the coroutine and returns 'data'.

Async/await execution:
• async def fetch(): defines coroutine function
• return 'data': coroutine returns value
• asyncio.run(fetch()): executes coroutine
• Returns 'data' (the coroutine's return value)
• Handles event loop management

How it works:
• async def creates coroutine function
• Calling fetch() creates coroutine object
• asyncio.run() executes coroutine
• Event loop manages execution
• Returns final result

Example:
import asyncio

async def fetch():
    await asyncio.sleep(0.1)  # Simulate async operation
    return 'data'

result = asyncio.run(fetch())  # 'data'
print(result)

Benefits:
• Non-blocking I/O operations
• Concurrent execution
• Better resource utilization
• Scalable network applications
• Simplified async code with async/await

Example: asyncio.run(fetch()) executes the async function and returns 'data', the result of the coroutine.

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
