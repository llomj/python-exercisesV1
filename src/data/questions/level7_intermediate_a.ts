import { PersonaStage } from '../../types';

// --- LEVEL 7 INTERMEDIATE A: Closures, nonlocal, and First-Class Functions ---
// 50 TRULY UNIQUE questions - NO number/variable variations
export const level7IntermediateA = [
  // 1-20: Closures Deep
  (_i: number) => ({
    q: `What is the result of: def outer(): x=10; def inner(): return x; return inner; outer()()?`,
    o: ["10", "None", "Error", "0"],
    c: 0,
    e: "The inner function closes over x from outer's scope and returns it.",
    de: `This demonstrates a basic closure. When outer() is called, it creates a local variable x = 10, defines inner() which references x, and returns the inner function. Calling the returned function with outer()() executes inner(), which looks up x in the enclosing scope and returns 10.

Key concepts:
• A closure captures variables from its enclosing scope
• inner() has no local x, so it finds x = 10 in outer()'s scope
• outer() returns a function object, not a value
• The second () calls the returned function

How it works:
• outer() runs: x = 10, defines inner, returns inner
• outer()() calls the returned inner function
• inner() returns x which is 10 from outer's scope
• Result: 10

Examples:
• def outer(): x=10; def inner(): return x; return inner
• f = outer()  # f is inner
• f()          # 10

Common uses:
• Data encapsulation without classes
• Creating function factories
• Maintaining state between calls

Key Concepts:
• Key concepts: • A closure captures variables from its enclosing scope • inner() has no local x, so it finds x = 10 in outer()'s scope • outer() returns a function object, not a value • The second () calls the returned function How it works: • outer() runs: x = 10, defines inner, returns inner • outer()() calls the returned inner function • inner() returns x which is 10 from outer's scope • Result: 10 Examples: • def outer(): x=10; def inner(): return x; return inner • f = outer() # f is inner • f() # 10 Common uses: • Data encapsulation without classes • Creating function factories • Maintaining state between calls

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: def make_adder(n): return lambda x: x+n; add5=make_adder(5); add5(3)?`,
    o: ["8", "5", "3", "Error"],
    c: 0,
    e: "make_adder(5) returns a lambda that adds 5 to its argument. add5(3) returns 3+5 = 8.",
    de: `This is a classic closure pattern called a function factory. make_adder(n) returns a lambda that captures n from the enclosing scope. When you call make_adder(5), it returns a lambda where n is bound to 5. Calling add5(3) executes x + n with x=3 and n=5.

Key concepts:
• Function factories create specialized functions via closures
• The lambda captures n from make_adder's scope
• Each call to make_adder creates a new closure with its own n
• add5 = make_adder(5) creates a function that always adds 5

How it works:
• make_adder(5) sets n = 5, returns lambda x: x + 5
• add5 is now lambda x: x + 5
• add5(3) evaluates 3 + 5 = 8
• Result: 8

Examples:
• add10 = make_adder(10); add10(7)  # 17
• add0 = make_adder(0); add0(42)    # 42

Common uses:
• Creating families of related functions
• Partial application of arguments
• Currying patterns

Key Concepts:
• Key concepts: • Function factories create specialized functions via closures • The lambda captures n from make_adder's scope • Each call to make_adder creates a new closure with its own n • add5 = make_adder(5) creates a function that always adds 5 How it works: • make_adder(5) sets n = 5, returns lambda x: x + 5 • add5 is now lambda x: x + 5 • add5(3) evaluates 3 + 5 = 8 • Result: 8 Examples: • add10 = make_adder(10); add10(7) # 17 • add0 = make_adder(0); add0(42) # 42 Common uses: • Creating families of related functions • Partial application of arguments • Currying patterns

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: def counter(): c=[0]; def inc(): c[0]+=1; return c[0]; return inc; f=counter(); f(); f()?`,
    o: ["2", "1", "[1]", "Error"],
    c: 0,
    e: "The mutable list trick lets inc modify c[0]. After two calls, c[0] is 2.",
    de: `Before nonlocal existed (Python 2), closures used the mutable container trick to modify enclosed state. Since you cannot rebind an immutable variable from an enclosing scope without nonlocal, wrapping the value in a list allows mutation through the list's methods.

Key concepts:
• c = [0] is a mutable list holding the counter value
• c[0] += 1 mutates the list element, not the variable c itself
• No rebinding of c occurs, so no nonlocal is needed
• Each call to inc() increments the same shared list

How it works:
• counter() creates c = [0], defines inc, returns inc
• f = counter() — f is now inc
• First f(): c[0] goes from 0 to 1, returns 1
• Second f(): c[0] goes from 1 to 2, returns 2
• Result: 2

Examples:
• f = counter(); f()  # 1
• f()                 # 2
• f()                 # 3

Common uses:
• Stateful closures in Python 2 style
• Counter implementations without classes
• Demonstrating mutable container trick

Key Concepts:
• Key concepts: • c = [0] is a mutable list holding the counter value • c[0] += 1 mutates the list element, not the variable c itself • No rebinding of c occurs, so no nonlocal is needed • Each call to inc() increments the same shared list How it works: • counter() creates c = [0], defines inc, returns inc • f = counter() — f is now inc • First f(): c[0] goes from 0 to 1, returns 1 • Second f(): c[0] goes from 1 to 2, returns 2 • Result: 2 Examples: • f = counter(); f() # 1 • f() # 2 • f() # 3 Common uses: • Stateful closures in Python 2 style • Counter implementations without classes • Demonstrating mutable container trick

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: def outer(): x=1; def inner(): nonlocal x; x+=1; return x; return inner; f=outer(); f()?`,
    o: ["2", "1", "Error", "None"],
    c: 0,
    e: "nonlocal lets inner modify x from outer's scope. x goes from 1 to 2.",
    de: `The nonlocal keyword allows an inner function to rebind a variable in the nearest enclosing scope (that is not global). Without nonlocal, x += 1 inside inner would create a new local variable and raise UnboundLocalError because x is read before assignment.

Key concepts:
• nonlocal x tells Python that x refers to outer's x
• Without nonlocal, x += 1 would create a local x (and fail)
• nonlocal only works in nested functions, not at module level
• The modification persists in the enclosing scope

How it works:
• outer() creates x = 1, defines inner with nonlocal x, returns inner
• f = outer() — f is inner, x = 1 in the closure
• f(): nonlocal x; x += 1 changes x from 1 to 2; returns 2
• Result: 2

Examples:
• f = outer(); f()  # 2
• f()               # 3 (x persists between calls)
• f()               # 4

Common uses:
• Modifying enclosing scope variables cleanly
• Stateful closures in Python 3
• Replacing the mutable container trick

Key Concepts:
• Key concepts: • nonlocal x tells Python that x refers to outer's x • Without nonlocal, x += 1 would create a local x (and fail) • nonlocal only works in nested functions, not at module level • The modification persists in the enclosing scope How it works: • outer() creates x = 1, defines inner with nonlocal x, returns inner • f = outer() — f is inner, x = 1 in the closure • f(): nonlocal x; x += 1 changes x from 1 to 2; returns 2 • Result: 2 Examples: • f = outer(); f() # 2 • f() # 3 (x persists between calls) • f() # 4 Common uses: • Modifying enclosing scope variables cleanly • Stateful closures in Python 3 • Replacing the mutable container trick

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `Continuing from the nonlocal counter: def outer(): x=1; def inner(): nonlocal x; x+=1; return x; return inner; f=outer(); f(); f(); f() — what does the third call return?`,
    o: ["4", "3", "2", "1"],
    c: 0,
    e: "Each call increments x by 1. Starting at 1: after three calls x is 4.",
    de: `Each invocation of f() increments the shared x by 1 and returns the new value. The closure maintains state across calls because nonlocal x binds inner to outer's x.

Key concepts:
• The closure's x persists across all calls to f()
• Each call adds 1: 1 → 2 → 3 → 4
• The third call returns 4
• nonlocal ensures all calls share the same x

How it works:
• f = outer() — x starts at 1
• First f(): x = 1 + 1 = 2, returns 2
• Second f(): x = 2 + 1 = 3, returns 3
• Third f(): x = 3 + 1 = 4, returns 4
• Result: 4

Examples:
• f = outer()
• f()  # 2
• f()  # 3
• f()  # 4
• f()  # 5 (keeps going)

Common uses:
• Understanding closure state persistence
• Building counters and accumulators
• Demonstrating nonlocal across multiple calls

Key Concepts:
• Key concepts: • The closure's x persists across all calls to f() • Each call adds 1: 1 → 2 → 3 → 4 • The third call returns 4 • nonlocal ensures all calls share the same x How it works: • f = outer() — x starts at 1 • First f(): x = 1 + 1 = 2, returns 2 • Second f(): x = 2 + 1 = 3, returns 3 • Third f(): x = 3 + 1 = 4, returns 4 • Result: 4 Examples: • f = outer() • f() # 2 • f() # 3 • f() # 4 • f() # 5 (keeps going) Common uses: • Understanding closure state persistence • Building counters and accumulators • Demonstrating nonlocal across multiple calls

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What does the nonlocal keyword do in Python?`,
    o: ["Allows inner function to modify a variable from the enclosing scope", "Declares a global variable", "Creates a new local variable", "Imports a module variable"],
    c: 0,
    e: "nonlocal lets a nested function rebind a variable from its enclosing (non-global) scope.",
    de: `The nonlocal statement is used inside a nested function to indicate that a variable refers to the nearest enclosing scope's variable (excluding global scope). Without it, assignment to a variable inside a function creates a new local variable.

Key concepts:
• nonlocal bridges inner functions to their enclosing scope
• It does NOT access module-level (global) variables — use global for that
• It must reference an existing variable in an enclosing function
• It allows rebinding, not just reading

How it works:
• def outer(): x = 10
•     def inner(): nonlocal x; x = 20
• nonlocal x tells Python: "x is from outer, not a new local"
• inner() can now modify outer's x

Examples:
• nonlocal x — binds to enclosing scope's x
• global x — binds to module-level x
• Without either: assignment creates a new local

Common uses:
• Stateful closures (counters, accumulators)
• Modifying enclosing variables without mutable containers
• Python 3 replacement for the mutable list trick

Key Concepts:
• Key concepts: • nonlocal bridges inner functions to their enclosing scope • It does NOT access module-level (global) variables — use global for that • It must reference an existing variable in an enclosing function • It allows rebinding, not just reading How it works: • def outer(): x = 10 • def inner(): nonlocal x; x = 20 • nonlocal x tells Python: "x is from outer, not a new local" • inner() can now modify outer's x Examples: • nonlocal x — binds to enclosing scope's x • global x — binds to module-level x • Without either: assignment creates a new local Common uses: • Stateful closures (counters, accumulators) • Modifying enclosing variables without mutable containers • Python 3 replacement for the mutable list trick

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `Can you use the global keyword inside a nested function?`,
    o: ["Yes, it accesses the module-level variable", "No, only nonlocal works in nested functions", "Yes, but it causes an error", "No, nested functions cannot access any outer variables"],
    c: 0,
    e: "global works anywhere, including inside nested functions, to access module-level variables.",
    de: `The global keyword can be used inside any function, including nested ones. It always refers to the module-level (global) variable, skipping all enclosing function scopes. This is different from nonlocal, which targets the nearest enclosing function scope.

Key concepts:
• global always targets the module-level variable
• nonlocal targets the nearest enclosing function scope
• Both can be used inside nested functions
• They serve different purposes and cannot be combined for the same variable

How it works:
• x = 100  # module level
• def outer():
•     x = 10
•     def inner():
•         global x  # refers to module-level x = 100, not outer's x = 10
•         x = 200   # modifies module-level x
•     inner()
•     return x  # still 10 (outer's x unchanged)
• outer()  # returns 10
• x  # 200 (module-level x was changed)

Examples:
• global x inside nested function: accesses module x
• nonlocal x inside nested function: accesses enclosing function's x

Common uses:
• Accessing module-level state from deeply nested functions
• Distinguishing between global and enclosing scope access

Key Concepts:
• Key concepts: • global always targets the module-level variable • nonlocal targets the nearest enclosing function scope • Both can be used inside nested functions • They serve different purposes and cannot be combined for the same variable How it works: • x = 100 # module level • def outer(): • x = 10 • def inner(): • global x # refers to module-level x = 100, not outer's x = 10 • x = 200 # modifies module-level x • inner() • return x # still 10 (outer's x unchanged) • outer() # returns 10 • x # 200 (module-level x was changed) Examples: • global x inside nested function: accesses module x • nonlocal x inside nested function: accesses enclosing function's x Common uses: • Accessing module-level state from deeply nested functions • Distinguishing between global and enclosing scope access

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: def outer(): x=10; def inner(): x=20; return x; inner(); return x; outer()?`,
    o: ["10", "20", "None", "Error"],
    c: 0,
    e: "inner() creates its own local x=20, which does not affect outer's x=10.",
    de: `Without nonlocal, assigning x = 20 inside inner() creates a brand-new local variable that shadows outer's x. The outer function's x remains 10 because inner's x is a completely separate variable.

Key concepts:
• Assignment in a function creates a local variable by default
• inner()'s x = 20 is local to inner, not outer's x
• outer's x = 10 is never modified
• This is the default scoping behavior (LEGB rule)

How it works:
• outer() creates x = 10
• inner() is called: creates its own local x = 20, returns 20 (but return value is discarded)
• Back in outer: return x returns outer's x which is still 10
• Result: 10

Examples:
• Without nonlocal: inner's assignment creates a new local
• With nonlocal: inner's assignment modifies outer's variable
• x = 20 in inner is a separate variable from x = 10 in outer

Common uses:
• Understanding Python's LEGB scope resolution
• Demonstrating why nonlocal is needed to modify enclosing variables

Key Concepts:
• Key concepts: • Assignment in a function creates a local variable by default • inner()'s x = 20 is local to inner, not outer's x • outer's x = 10 is never modified • This is the default scoping behavior (LEGB rule) How it works: • outer() creates x = 10 • inner() is called: creates its own local x = 20, returns 20 (but return value is discarded) • Back in outer: return x returns outer's x which is still 10 • Result: 10 Examples: • Without nonlocal: inner's assignment creates a new local • With nonlocal: inner's assignment modifies outer's variable • x = 20 in inner is a separate variable from x = 10 in outer Common uses: • Understanding Python's LEGB scope resolution • Demonstrating why nonlocal is needed to modify enclosing variables

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: def outer(): x=10; def inner(): nonlocal x; x=20; inner(); return x; outer()?`,
    o: ["20", "10", "None", "Error"],
    c: 0,
    e: "nonlocal x lets inner() modify outer's x from 10 to 20.",
    de: `With the nonlocal declaration, inner()'s assignment x = 20 modifies the same x variable that outer() created. After inner() runs, outer's x has been changed to 20.

Key concepts:
• nonlocal x in inner tells Python to use outer's x
• x = 20 now modifies outer's x, not a new local
• After inner() runs, outer's x is 20
• This is the key difference from the previous question (without nonlocal)

How it works:
• outer() creates x = 10
• inner() is called: nonlocal x binds to outer's x; x = 20 modifies outer's x
• Back in outer: return x returns 20 (x was modified by inner)
• Result: 20

Examples:
• Without nonlocal: outer() returns 10 (inner has separate x)
• With nonlocal: outer() returns 20 (inner modifies outer's x)
• nonlocal bridges the scope gap

Common uses:
• Modifying enclosing scope state
• Comparing behavior with and without nonlocal
• Understanding scope resolution in Python 3

Key Concepts:
• Key concepts: • nonlocal x in inner tells Python to use outer's x • x = 20 now modifies outer's x, not a new local • After inner() runs, outer's x is 20 • This is the key difference from the previous question (without nonlocal) How it works: • outer() creates x = 10 • inner() is called: nonlocal x binds to outer's x; x = 20 modifies outer's x • Back in outer: return x returns 20 (x was modified by inner) • Result: 20 Examples: • Without nonlocal: outer() returns 10 (inner has separate x) • With nonlocal: outer() returns 20 (inner modifies outer's x) • nonlocal bridges the scope gap Common uses: • Modifying enclosing scope state • Comparing behavior with and without nonlocal • Understanding scope resolution in Python 3

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: funcs=[lambda i=i: i for i in range(3)]; [f() for f in funcs]?`,
    o: ["[0, 1, 2]", "[2, 2, 2]", "[0, 0, 0]", "Error"],
    c: 0,
    e: "Using i=i as a default argument captures the current value of i at each iteration.",
    de: `This is the fix for the classic late-binding closure gotcha. By using a default parameter i=i, the current value of the loop variable is captured at the time each lambda is created, rather than all lambdas sharing the final value.

Key concepts:
• Default arguments are evaluated when the function is defined, not when called
• i=i captures the current loop value as a default parameter
• Each lambda gets its own snapshot of i
• This produces [0, 1, 2] instead of [2, 2, 2]

How it works:
• Iteration 0: lambda i=0: i (default i is 0)
• Iteration 1: lambda i=1: i (default i is 1)
• Iteration 2: lambda i=2: i (default i is 2)
• Calling each: f() uses the default → [0, 1, 2]

Examples:
• [lambda i=i: i for i in range(3)] — fixed version → [0, 1, 2]
• [lambda: i for i in range(3)] — broken version → [2, 2, 2]

Common uses:
• Fixing late-binding issues in loop-created closures
• Creating callbacks with captured loop values
• Event handlers in GUI programming

Key Concepts:
• Key concepts: • Default arguments are evaluated when the function is defined, not when called • i=i captures the current loop value as a default parameter • Each lambda gets its own snapshot of i • This produces [0, 1, 2] instead of [2, 2, 2] How it works: • Iteration 0: lambda i=0: i (default i is 0) • Iteration 1: lambda i=1: i (default i is 1) • Iteration 2: lambda i=2: i (default i is 2) • Calling each: f() uses the default → [0, 1, 2] Examples: • [lambda i=i: i for i in range(3)] — fixed version → [0, 1, 2] • [lambda: i for i in range(3)] — broken version → [2, 2, 2] Common uses: • Fixing late-binding issues in loop-created closures • Creating callbacks with captured loop values • Event handlers in GUI programming

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: funcs=[lambda: i for i in range(3)]; [f() for f in funcs]?`,
    o: ["[2, 2, 2]", "[0, 1, 2]", "[0, 0, 0]", "Error"],
    c: 0,
    e: "All lambdas share the same i variable, which ends at 2 after the loop.",
    de: `This is the classic late-binding closure bug. All three lambdas close over the same variable i. By the time they are called, the loop has finished and i is 2, so all lambdas return 2.

Key concepts:
• Closures capture variables by reference, not by value
• All three lambdas share the same i
• The loop finishes with i = 2
• All calls to f() look up i and find 2

How it works:
• Loop runs: i = 0, 1, 2 (creates 3 lambdas sharing i)
• Loop ends: i = 2
• Calling funcs[0](): looks up i → 2
• Calling funcs[1](): looks up i → 2
• Calling funcs[2](): looks up i → 2
• Result: [2, 2, 2]

Examples:
• [lambda: i for i in range(3)] → [2, 2, 2] (bug)
• Fix: [lambda i=i: i for i in range(3)] → [0, 1, 2]

Common uses:
• Understanding late binding in Python closures
• A very common interview question
• Explains why callbacks in loops often misbehave

Key Concepts:
• Key concepts: • Closures capture variables by reference, not by value • All three lambdas share the same i • The loop finishes with i = 2 • All calls to f() look up i and find 2 How it works: • Loop runs: i = 0, 1, 2 (creates 3 lambdas sharing i) • Loop ends: i = 2 • Calling funcs[0](): looks up i → 2 • Calling funcs[1](): looks up i → 2 • Calling funcs[2](): looks up i → 2 • Result: [2, 2, 2] Examples: • [lambda: i for i in range(3)] → [2, 2, 2] (bug) • Fix: [lambda i=i: i for i in range(3)] → [0, 1, 2] Common uses: • Understanding late binding in Python closures • A very common interview question • Explains why callbacks in loops often misbehave

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: def make_power(n): def power(x): return x**n; return power; square=make_power(2); square(5)?`,
    o: ["25", "10", "32", "Error"],
    c: 0,
    e: "make_power(2) returns a function that squares its argument. square(5) = 5**2 = 25.",
    de: `This is a function factory that creates power functions. make_power(n) returns a closure where n is captured. Calling make_power(2) creates a squaring function, make_power(3) would create a cubing function, etc.

Key concepts:
• The closure captures n from make_power's scope
• square = make_power(2) creates a function that computes x**2
• Each call to make_power creates an independent closure
• The returned function remembers its specific n

How it works:
• make_power(2): n = 2, returns power where power(x) = x**2
• square = make_power(2) — square is power with n = 2
• square(5) = 5**2 = 25
• Result: 25

Examples:
• cube = make_power(3); cube(2)  # 8
• fourth = make_power(4); fourth(2)  # 16
• identity = make_power(1); identity(42)  # 42

Common uses:
• Function factories for mathematical operations
• Creating specialized functions from general templates
• Partial application of exponent

Key Concepts:
• Key concepts: • The closure captures n from make_power's scope • square = make_power(2) creates a function that computes x**2 • Each call to make_power creates an independent closure • The returned function remembers its specific n How it works: • make_power(2): n = 2, returns power where power(x) = x**2 • square = make_power(2) — square is power with n = 2 • square(5) = 5**2 = 25 • Result: 25 Examples: • cube = make_power(3); cube(2) # 8 • fourth = make_power(4); fourth(2) # 16 • identity = make_power(1); identity(42) # 42 Common uses: • Function factories for mathematical operations • Creating specialized functions from general templates • Partial application of exponent

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: def outer(x): def middle(y): def inner(z): return x+y+z; return inner; return middle; outer(1)(2)(3)?`,
    o: ["6", "3", "Error", "None"],
    c: 0,
    e: "Triple-nested closure: outer(1)(2)(3) = 1 + 2 + 3 = 6.",
    de: `This demonstrates currying — a technique where a function that takes multiple arguments is transformed into a chain of single-argument functions. Each nested function captures one argument from its enclosing scope.

Key concepts:
• Currying transforms f(x, y, z) into f(x)(y)(z)
• Each function captures one parameter and returns the next function
• inner has access to x, y, and z through nested closures
• This is a common functional programming pattern

How it works:
• outer(1): x = 1, returns middle
• outer(1)(2): middle(2): y = 2, returns inner
• outer(1)(2)(3): inner(3): z = 3, returns x + y + z = 1 + 2 + 3 = 6
• Result: 6

Examples:
• outer(10)(20)(30)  # 60
• f = outer(0); g = f(0); g(0)  # 0
• partial = outer(100)(200); partial(300)  # 600

Common uses:
• Currying and partial application
• Building configurable function pipelines
• Functional programming patterns in Python

Key Concepts:
• Key concepts: • Currying transforms f(x, y, z) into f(x)(y)(z) • Each function captures one parameter and returns the next function • inner has access to x, y, and z through nested closures • This is a common functional programming pattern How it works: • outer(1): x = 1, returns middle • outer(1)(2): middle(2): y = 2, returns inner • outer(1)(2)(3): inner(3): z = 3, returns x + y + z = 1 + 2 + 3 = 6 • Result: 6 Examples: • outer(10)(20)(30) # 60 • f = outer(0); g = f(0); g(0) # 0 • partial = outer(100)(200); partial(300) # 600 Common uses: • Currying and partial application • Building configurable function pipelines • Functional programming patterns in Python

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: def multiplier(factor): def multiply(x): return x*factor; return multiply; double=multiplier(2); double(10)?`,
    o: ["20", "2", "10", "Error"],
    c: 0,
    e: "multiplier(2) returns a function that doubles its argument. double(10) = 10*2 = 20.",
    de: `This is another function factory pattern. multiplier(factor) creates a closure that multiplies its argument by the captured factor. Each call to multiplier produces a new multiplier function.

Key concepts:
• multiplier(2) returns a function that multiplies by 2
• The closure captures factor = 2
• double(10) evaluates 10 * 2 = 20
• Different calls create independent closures

How it works:
• multiplier(2): factor = 2, returns multiply
• double = multiplier(2) — double(x) returns x * 2
• double(10) = 10 * 2 = 20
• Result: 20

Examples:
• triple = multiplier(3); triple(10)  # 30
• half = multiplier(0.5); half(10)    # 5.0
• negate = multiplier(-1); negate(42) # -42

Common uses:
• Creating scaling functions
• Price calculators with different tax rates
• Unit conversion functions

Key Concepts:
• Key concepts: • multiplier(2) returns a function that multiplies by 2 • The closure captures factor = 2 • double(10) evaluates 10 * 2 = 20 • Different calls create independent closures How it works: • multiplier(2): factor = 2, returns multiply • double = multiplier(2) — double(x) returns x * 2 • double(10) = 10 * 2 = 20 • Result: 20 Examples: • triple = multiplier(3); triple(10) # 30 • half = multiplier(0.5); half(10) # 5.0 • negate = multiplier(-1); negate(42) # -42 Common uses: • Creating scaling functions • Price calculators with different tax rates • Unit conversion functions

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: def greet(name): def greeting(): return f"Hello, {name}!"; return greeting; greet("Alice")()?`,
    o: [`"Hello, Alice!"`, `"Hello, name!"`, `"Hello, !"`, "Error"],
    c: 0,
    e: "The closure captures name='Alice' and the f-string inserts it.",
    de: `The inner function greeting() closes over the name parameter from greet(). When greet("Alice") is called, it returns greeting with name bound to "Alice". Calling the returned function produces the f-string with the captured name.

Key concepts:
• The closure captures the name parameter
• f-strings evaluate expressions inside {} at call time
• name is looked up in the closure's enclosing scope
• The result is the formatted greeting string

How it works:
• greet("Alice"): name = "Alice", returns greeting function
• greet("Alice")(): calls greeting()
• greeting() returns f"Hello, {name}!" with name = "Alice"
• Result: "Hello, Alice!"

Examples:
• greet("Bob")()    # "Hello, Bob!"
• greet("World")()  # "Hello, World!"
• f = greet("Eve"); f()  # "Hello, Eve!"

Common uses:
• Personalized function creation
• Message formatters
• Template functions with captured context

Key Concepts:
• Key concepts: • The closure captures the name parameter • f-strings evaluate expressions inside {} at call time • name is looked up in the closure's enclosing scope • The result is the formatted greeting string How it works: • greet("Alice"): name = "Alice", returns greeting function • greet("Alice")(): calls greeting() • greeting() returns f"Hello, {name}!" with name = "Alice" • Result: "Hello, Alice!" Examples: • greet("Bob")() # "Hello, Bob!" • greet("World")() # "Hello, World!" • f = greet("Eve"); f() # "Hello, Eve!" Common uses: • Personalized function creation • Message formatters • Template functions with captured context

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is a closure in Python?`,
    o: ["A function that remembers variables from its enclosing scope even after that scope has finished", "A function that cannot access outside variables", "A way to lock a function from being modified", "A function that runs automatically"],
    c: 0,
    e: "A closure retains access to its enclosing scope's variables even after the enclosing function returns.",
    de: `A closure is a function object that has access to variables in its enclosing lexical scope, even when the function is called outside that scope. The inner function "closes over" the free variables from the enclosing function.

Key concepts:
• A closure = function + its captured environment
• The captured variables persist after the enclosing function returns
• Closures enable stateful functions without classes
• Python creates closures automatically when inner functions reference outer variables

How it works:
• def outer():
•     x = 10
•     def inner(): return x
•     return inner
• f = outer()  # outer's scope is gone, but f still has x = 10
• f()  # 10 — the closure remembers x

Examples:
• Functions returned from functions that access enclosing variables
• Callbacks that capture context
• Factory functions that produce specialized functions

Common uses:
• Data encapsulation (private state without classes)
• Function factories (make_adder, make_multiplier)
• Decorators (closures are the core mechanism)
• Callbacks with captured context

Key Concepts:
• Key concepts: • A closure = function + its captured environment • The captured variables persist after the enclosing function returns • Closures enable stateful functions without classes • Python creates closures automatically when inner functions reference outer variables How it works: • def outer(): • x = 10 • def inner(): return x • return inner • f = outer() # outer's scope is gone, but f still has x = 10 • f() # 10 — the closure remembers x Examples: • Functions returned from functions that access enclosing variables • Callbacks that capture context • Factory functions that produce specialized functions Common uses: • Data encapsulation (private state without classes) • Function factories (make_adder, make_multiplier) • Decorators (closures are the core mechanism) • Callbacks with captured context

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: def outer(): funcs=[]; [funcs.append(lambda: i) for i in range(3)]; return funcs; [f() for f in outer()]?`,
    o: ["[2, 2, 2]", "[0, 1, 2]", "[0, 0, 0]", "Error"],
    c: 0,
    e: "Late binding: all lambdas reference the same i which ends at 2.",
    de: `This is the same late-binding gotcha as the list comprehension version. Using a list comprehension to build the list of lambdas does not change the closure behavior — all lambdas still share the same loop variable i.

Key concepts:
• The list comprehension iterates i over range(3)
• Each lambda captures i by reference, not by value
• After the comprehension finishes, i = 2
• All lambdas return 2 when called

How it works:
• List comprehension runs: i = 0, 1, 2
• Three lambdas are appended, all referencing the same i
• After the comprehension: i = 2
• Calling each f(): all return 2
• Result: [2, 2, 2]

Examples:
• [lambda: i for i in range(3)] → same result: [2, 2, 2]
• Fix: [lambda i=i: i for i in range(3)] → [0, 1, 2]

Common uses:
• Understanding that the container (list comp vs for loop) doesn't matter
• Late binding is about variable reference, not loop syntax

Key Concepts:
• Key concepts: • The list comprehension iterates i over range(3) • Each lambda captures i by reference, not by value • After the comprehension finishes, i = 2 • All lambdas return 2 when called How it works: • List comprehension runs: i = 0, 1, 2 • Three lambdas are appended, all referencing the same i • After the comprehension: i = 2 • Calling each f(): all return 2 • Result: [2, 2, 2] Examples: • [lambda: i for i in range(3)] → same result: [2, 2, 2] • Fix: [lambda i=i: i for i in range(3)] → [0, 1, 2] Common uses: • Understanding that the container (list comp vs for loop) doesn't matter • Late binding is about variable reference, not loop syntax

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: def outer(): funcs=[]; [funcs.append(lambda i=i: i) for i in range(3)]; return funcs; [f() for f in outer()]?`,
    o: ["[0, 1, 2]", "[2, 2, 2]", "[0, 0, 0]", "Error"],
    c: 0,
    e: "Default argument i=i captures the current value of i at each iteration.",
    de: `Adding the default parameter i=i fixes the late-binding issue. Each lambda gets its own copy of i's value at the time it was defined, not a shared reference to the loop variable.

Key concepts:
• Default parameters are evaluated at function definition time
• i=i captures the current loop value into the lambda's own parameter
• Each lambda now has an independent default value
• This is the standard fix for late-binding in loops

How it works:
• i=0: lambda i=0: i (default is 0)
• i=1: lambda i=1: i (default is 1)
• i=2: lambda i=2: i (default is 2)
• Calling each: uses default → [0, 1, 2]

Examples:
• Without i=i: [2, 2, 2] (shared reference)
• With i=i: [0, 1, 2] (captured values)

Common uses:
• Correctly creating closures inside loops
• Event handler registration
• Callback factories

Key Concepts:
• Key concepts: • Default parameters are evaluated at function definition time • i=i captures the current loop value into the lambda's own parameter • Each lambda now has an independent default value • This is the standard fix for late-binding in loops How it works: • i=0: lambda i=0: i (default is 0) • i=1: lambda i=1: i (default is 1) • i=2: lambda i=2: i (default is 2) • Calling each: uses default → [0, 1, 2] Examples: • Without i=i: [2, 2, 2] (shared reference) • With i=i: [0, 1, 2] (captured values) Common uses: • Correctly creating closures inside loops • Event handler registration • Callback factories

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: def accumulator(start): total=start; def add(n): nonlocal total; total+=n; return total; return add; a=accumulator(0); a(5); a(3)?`,
    o: ["8", "3", "5", "Error"],
    c: 0,
    e: "The accumulator starts at 0. a(5) makes total 5, then a(3) makes total 8.",
    de: `This is a practical closure pattern: a running accumulator. The closure maintains total across calls using nonlocal, so each call adds to the running sum.

Key concepts:
• total is initialized to start (0 in this case)
• nonlocal total allows add() to modify total
• Each call to add(n) increases total and returns the new value
• State persists between calls

How it works:
• accumulator(0): total = 0, returns add
• a = accumulator(0) — a is add with total = 0
• a(5): total = 0 + 5 = 5, returns 5
• a(3): total = 5 + 3 = 8, returns 8
• Result: 8

Examples:
• a = accumulator(100); a(10)  # 110
• a(20)  # 130
• a(-50) # 80

Common uses:
• Running totals and sums
• Score trackers
• Financial calculations with running balances

Key Concepts:
• Key concepts: • total is initialized to start (0 in this case) • nonlocal total allows add() to modify total • Each call to add(n) increases total and returns the new value • State persists between calls How it works: • accumulator(0): total = 0, returns add • a = accumulator(0) — a is add with total = 0 • a(5): total = 0 + 5 = 5, returns 5 • a(3): total = 5 + 3 = 8, returns 8 • Result: 8 Examples: • a = accumulator(100); a(10) # 110 • a(20) # 130 • a(-50) # 80 Common uses: • Running totals and sums • Score trackers • Financial calculations with running balances

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: a=accumulator(10); a(5) where def accumulator(start): total=start; def add(n): nonlocal total; total+=n; return total; return add?`,
    o: ["15", "5", "10", "Error"],
    c: 0,
    e: "Starting at 10, adding 5 gives total = 15.",
    de: `This is the same accumulator pattern but with a different starting value. The closure starts total at 10, and the first call adds 5.

Key concepts:
• total is initialized to start = 10
• a(5) adds 5 to the running total
• nonlocal total allows modification
• The starting value is captured in the closure

How it works:
• accumulator(10): total = 10, returns add
• a = accumulator(10) — a is add with total = 10
• a(5): total = 10 + 5 = 15, returns 15
• Result: 15

Examples:
• accumulator(0); a(1)  # 1
• accumulator(100); a(50)  # 150
• accumulator(-5); a(10)  # 5

Common uses:
• Configurable accumulators with different starting points
• Closure-based state machines
• Parameterized stateful functions

Key Concepts:
• Key concepts: • total is initialized to start = 10 • a(5) adds 5 to the running total • nonlocal total allows modification • The starting value is captured in the closure How it works: • accumulator(10): total = 10, returns add • a = accumulator(10) — a is add with total = 10 • a(5): total = 10 + 5 = 15, returns 15 • Result: 15 Examples: • accumulator(0); a(1) # 1 • accumulator(100); a(50) # 150 • accumulator(-5); a(10) # 5 Common uses: • Configurable accumulators with different starting points • Closure-based state machines • Parameterized stateful functions

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 21-40: First-Class Functions
  (_i: number) => ({
    q: `What is the result of: def apply(f, x): return f(x); apply(abs, -5)?`,
    o: ["5", "-5", "Error", "None"],
    c: 0,
    e: "abs is passed as an argument. apply calls abs(-5) which returns 5.",
    de: `Functions are first-class objects in Python, meaning they can be passed as arguments to other functions. Here, the built-in abs function is passed to apply, which calls it with -5.

Key concepts:
• Functions can be passed as arguments like any other object
• abs is a function object — no parentheses means we're passing the function itself
• apply(f, x) calls f(x), so apply(abs, -5) calls abs(-5)
• This is the basis of higher-order functions

How it works:
• apply(abs, -5): f = abs, x = -5
• return f(x) → return abs(-5) → return 5
• Result: 5

Examples:
• apply(len, "hello")  # 5
• apply(str, 42)       # "42"
• apply(type, 3.14)    # <class 'float'>

Common uses:
• Higher-order functions (map, filter, sorted)
• Callback patterns
• Strategy pattern implementation

Key Concepts:
• Key concepts: • Functions can be passed as arguments like any other object • abs is a function object — no parentheses means we're passing the function itself • apply(f, x) calls f(x), so apply(abs, -5) calls abs(-5) • This is the basis of higher-order functions How it works: • apply(abs, -5): f = abs, x = -5 • return f(x) → return abs(-5) → return 5 • Result: 5 Examples: • apply(len, "hello") # 5 • apply(str, 42) # "42" • apply(type, 3.14) # <class 'float'> Common uses: • Higher-order functions (map, filter, sorted) • Callback patterns • Strategy pattern implementation

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: def apply(f, x): return f(x); apply(str, 42)?`,
    o: [`"42"`, "42", "Error", "None"],
    c: 0,
    e: "str is passed as a function argument. apply calls str(42) which returns '42'.",
    de: `This demonstrates that built-in type constructors like str are also callable objects that can be passed as arguments. str(42) converts the integer 42 to the string "42".

Key concepts:
• str, int, float, list, etc. are callable objects
• They can be passed as function arguments just like user-defined functions
• apply(str, 42) calls str(42) → "42"
• Type constructors are first-class citizens in Python

How it works:
• apply(str, 42): f = str, x = 42
• return f(x) → return str(42) → return "42"
• Result: "42"

Examples:
• apply(int, "100")    # 100
• apply(float, "3.14") # 3.14
• apply(list, "abc")   # ["a", "b", "c"]

Common uses:
• Data type conversion pipelines
• Passing constructors to map/filter
• Generic processing functions

Key Concepts:
• are callable objects • They can be passed as function arguments just like user-defined functions • apply(str, 42) calls str(42) → "42" • Type constructors are first-class citizens in Python How it works: • apply(str, 42): f = str, x = 42 • return f(x) → return str(42) → return "42" • Result: "42" Examples: • apply(int, "100") # 100 • apply(float, "3.14") # 3.14 • apply(list, "abc") # ["a", "b", "c"] Common uses: • Data type conversion pipelines • Passing constructors to map/filter • Generic processing functions

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: def apply_twice(f, x): return f(f(x)); apply_twice(lambda x: x+1, 5)?`,
    o: ["7", "6", "5", "Error"],
    c: 0,
    e: "f is applied twice: f(5) = 6, then f(6) = 7.",
    de: `apply_twice calls f on x, then calls f again on the result. With a lambda that adds 1, the first call gives 5+1=6, and the second call gives 6+1=7.

Key concepts:
• apply_twice(f, x) computes f(f(x))
• The inner f(x) runs first: (lambda x: x+1)(5) = 6
• The outer f runs on the result: (lambda x: x+1)(6) = 7
• This is function composition applied twice

How it works:
• f = lambda x: x + 1
• f(5) = 6 (inner call)
• f(6) = 7 (outer call)
• Result: 7

Examples:
• apply_twice(lambda x: x*2, 3)  # 12 (3→6→12)
• apply_twice(lambda x: x**2, 2) # 16 (2→4→16)
• apply_twice(str.upper, "hi")   # "HI" (already uppercase, no change)

Common uses:
• Repeated transformations
• Iterative function application
• Demonstrating higher-order function composition

Key Concepts:
• Key concepts: • apply_twice(f, x) computes f(f(x)) • The inner f(x) runs first: (lambda x: x+1)(5) = 6 • The outer f runs on the result: (lambda x: x+1)(6) = 7 • This is function composition applied twice How it works: • f = lambda x: x + 1 • f(5) = 6 (inner call) • f(6) = 7 (outer call) • Result: 7 Examples: • apply_twice(lambda x: x*2, 3) # 12 (3→6→12) • apply_twice(lambda x: x**2, 2) # 16 (2→4→16) • apply_twice(str.upper, "hi") # "HI" (already uppercase, no change) Common uses: • Repeated transformations • Iterative function application • Demonstrating higher-order function composition

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: def compose(f,g): return lambda x: f(g(x)); inc=lambda x:x+1; double=lambda x:x*2; compose(inc,double)(3)?`,
    o: ["7", "8", "6", "Error"],
    c: 0,
    e: "compose(inc, double)(3): first double(3)=6, then inc(6)=7.",
    de: `Function composition creates a new function that applies g first, then f to the result. compose(inc, double) means: first double, then increment. This follows mathematical convention: (f . g)(x) = f(g(x)).

Key concepts:
• compose(f, g) returns a function that does f(g(x))
• g is applied first (inner), f is applied second (outer)
• compose(inc, double)(3): double(3) = 6, then inc(6) = 7
• Order matters: compose(f, g) != compose(g, f) in general

How it works:
• compose(inc, double) returns lambda x: inc(double(x))
• Calling with 3: double(3) = 6, then inc(6) = 7
• Result: 7

Examples:
• compose(str, abs)(-5) → str(abs(-5)) → str(5) → "5"
• compose(len, str)(1234) → len(str(1234)) → len("1234") → 4

Common uses:
• Functional programming pipelines
• Data transformation chains
• Composing validators or processors

Key Concepts:
• Key concepts: • compose(f, g) returns a function that does f(g(x)) • g is applied first (inner), f is applied second (outer) • compose(inc, double)(3): double(3) = 6, then inc(6) = 7 • Order matters: compose(f, g) != compose(g, f) in general How it works: • compose(inc, double) returns lambda x: inc(double(x)) • Calling with 3: double(3) = 6, then inc(6) = 7 • Result: 7 Examples: • compose(str, abs)(-5) → str(abs(-5)) → str(5) → "5" • compose(len, str)(1234) → len(str(1234)) → len("1234") → 4 Common uses: • Functional programming pipelines • Data transformation chains • Composing validators or processors

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: def compose(f,g): return lambda x: f(g(x)); inc=lambda x:x+1; double=lambda x:x*2; compose(double,inc)(3)?`,
    o: ["8", "7", "6", "Error"],
    c: 0,
    e: "compose(double, inc)(3): first inc(3)=4, then double(4)=8.",
    de: `Reversing the order of composition changes the result. compose(double, inc) means: first increment, then double. Compare with compose(inc, double) which gives 7.

Key concepts:
• compose(double, inc)(3): g=inc runs first, f=double runs second
• inc(3) = 4, then double(4) = 8
• compose(f, g) vs compose(g, f) generally gives different results
• This shows composition is not commutative

How it works:
• compose(double, inc) returns lambda x: double(inc(x))
• Calling with 3: inc(3) = 4, then double(4) = 8
• Result: 8
• Compare: compose(inc, double)(3) = inc(double(3)) = inc(6) = 7

Examples:
• compose(double, inc)(0) → double(inc(0)) → double(1) → 2
• compose(inc, double)(0) → inc(double(0)) → inc(0) → 1

Common uses:
• Understanding order of operations in composition
• Building different processing pipelines from the same components

Key Concepts:
• Key concepts: • compose(double, inc)(3): g=inc runs first, f=double runs second • inc(3) = 4, then double(4) = 8 • compose(f, g) vs compose(g, f) generally gives different results • This shows composition is not commutative How it works: • compose(double, inc) returns lambda x: double(inc(x)) • Calling with 3: inc(3) = 4, then double(4) = 8 • Result: 8 • Compare: compose(inc, double)(3) = inc(double(3)) = inc(6) = 7 Examples: • compose(double, inc)(0) → double(inc(0)) → double(1) → 2 • compose(inc, double)(0) → inc(double(0)) → inc(0) → 1 Common uses: • Understanding order of operations in composition • Building different processing pipelines from the same components

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: functions = [abs, str, len]; functions[0](-5)?`,
    o: ["5", "-5", "Error", "None"],
    c: 0,
    e: "functions[0] is abs. abs(-5) returns 5.",
    de: `Functions can be stored in lists just like any other object. Accessing functions[0] retrieves the abs function, and calling it with (-5) executes abs(-5).

Key concepts:
• Functions are objects that can be stored in data structures
• functions[0] retrieves abs from the list
• Adding () after it calls the function: functions[0](-5) = abs(-5)
• This enables dynamic function dispatch

How it works:
• functions = [abs, str, len]
• functions[0] is abs
• functions[0](-5) is abs(-5) = 5
• Result: 5

Examples:
• functions[1](42) → str(42) → "42"
• functions[2]("hello") → len("hello") → 5

Common uses:
• Dynamic dispatch tables
• Plugin architectures
• Command pattern implementation

Key Concepts:
• Key concepts: • Functions are objects that can be stored in data structures • functions[0] retrieves abs from the list • Adding () after it calls the function: functions[0](-5) = abs(-5) • This enables dynamic function dispatch How it works: • functions = [abs, str, len] • functions[0] is abs • functions[0](-5) is abs(-5) = 5 • Result: 5 Examples: • functions[1](42) → str(42) → "42" • functions[2]("hello") → len("hello") → 5 Common uses: • Dynamic dispatch tables • Plugin architectures • Command pattern implementation

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: functions = [abs, str, len]; functions[2]("hello")?`,
    o: ["5", `"hello"`, "Error", "None"],
    c: 0,
    e: "functions[2] is len. len('hello') returns 5.",
    de: `Retrieving len from the list and calling it on "hello" demonstrates that stored functions work exactly the same as direct calls.

Key concepts:
• functions[2] retrieves the len function
• len("hello") counts the characters → 5
• Storing functions in lists enables iteration over operations
• Each element is a callable object

How it works:
• functions = [abs, str, len]
• functions[2] is len
• functions[2]("hello") is len("hello") = 5
• Result: 5

Examples:
• [f("hi") for f in [len, str.upper]] → [2, "HI"]
• Iterating over a function list applies each to the same input

Common uses:
• Applying multiple transformations to data
• Test suites that run multiple validators
• Functional pipelines

Key Concepts:
• Key concepts: • functions[2] retrieves the len function • len("hello") counts the characters → 5 • Storing functions in lists enables iteration over operations • Each element is a callable object How it works: • functions = [abs, str, len] • functions[2] is len • functions[2]("hello") is len("hello") = 5 • Result: 5 Examples: • [f("hi") for f in [len, str.upper]] → [2, "HI"] • Iterating over a function list applies each to the same input Common uses: • Applying multiple transformations to data • Test suites that run multiple validators • Functional pipelines

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: ops={"+":(lambda a,b: a+b), "*":(lambda a,b: a*b)}; ops["+"](3,4)?`,
    o: ["7", "12", "Error", "None"],
    c: 0,
    e: "ops['+'] retrieves the addition lambda. Calling it with (3,4) returns 3+4=7.",
    de: `Functions can be stored as dictionary values, creating a dispatch table. This pattern maps operation names to their implementations, allowing dynamic operation selection.

Key concepts:
• Dictionaries can store functions as values
• ops["+"] retrieves the addition lambda
• Calling it with (3, 4) returns 7
• This is the dispatch table or command pattern

How it works:
• ops = {"+": lambda a,b: a+b, "*": lambda a,b: a*b}
• ops["+"](3, 4) → (lambda a,b: a+b)(3, 4) → 3 + 4 → 7
• Result: 7

Examples:
• ops["*"](3, 4) → 12
• ops.get("-", lambda a,b: None) → handles missing keys safely

Common uses:
• Calculator implementations
• Command dispatchers
• Replacing long if/elif chains

Key Concepts:
• Key concepts: • Dictionaries can store functions as values • ops["+"] retrieves the addition lambda • Calling it with (3, 4) returns 7 • This is the dispatch table or command pattern How it works: • ops = {"+": lambda a,b: a+b, "*": lambda a,b: a*b} • ops["+"](3, 4) → (lambda a,b: a+b)(3, 4) → 3 + 4 → 7 • Result: 7 Examples: • ops["*"](3, 4) → 12 • ops.get("-", lambda a,b: None) → handles missing keys safely Common uses: • Calculator implementations • Command dispatchers • Replacing long if/elif chains

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: ops={"+":(lambda a,b: a+b), "*":(lambda a,b: a*b)}; ops["*"](3,4)?`,
    o: ["12", "7", "Error", "None"],
    c: 0,
    e: "ops['*'] retrieves the multiplication lambda. 3*4 = 12.",
    de: `Selecting the multiplication operation from the dispatch table and calling it with 3 and 4 produces 12.

Key concepts:
• ops["*"] retrieves the multiplication lambda
• (lambda a,b: a*b)(3, 4) → 3 * 4 → 12
• The dictionary acts as a function lookup table
• Any hashable key can map to any callable

How it works:
• ops["*"] is lambda a,b: a*b
• ops["*"](3, 4) → 3 * 4 → 12
• Result: 12

Examples:
• ops["+"](10, 20) → 30
• ops["*"](0, 100) → 0
• You can add more: ops["-"] = lambda a,b: a-b

Common uses:
• Extensible operation tables
• Plugin systems with named operations
• Interpreters and evaluators

Key Concepts:
• Key concepts: • ops["*"] retrieves the multiplication lambda • (lambda a,b: a*b)(3, 4) → 3 * 4 → 12 • The dictionary acts as a function lookup table • Any hashable key can map to any callable How it works: • ops["*"] is lambda a,b: a*b • ops["*"](3, 4) → 3 * 4 → 12 • Result: 12 Examples: • ops["+"](10, 20) → 30 • ops["*"](0, 100) → 0 • You can add more: ops["-"] = lambda a,b: a-b Common uses: • Extensible operation tables • Plugin systems with named operations • Interpreters and evaluators

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: def make_validator(min_val, max_val): return lambda x: min_val <= x <= max_val; v=make_validator(1,10); v(5)?`,
    o: ["True", "False", "5", "Error"],
    c: 0,
    e: "The validator checks if 1 <= 5 <= 10, which is True.",
    de: `make_validator creates a range-checking closure. The returned lambda captures min_val and max_val and uses Python's chained comparison to check if x is within the range.

Key concepts:
• Closure captures min_val = 1 and max_val = 10
• Python supports chained comparisons: min_val <= x <= max_val
• This checks both min_val <= x AND x <= max_val in one expression
• The validator returns True or False

How it works:
• make_validator(1, 10) returns lambda x: 1 <= x <= 10
• v(5): 1 <= 5 <= 10 → True and True → True
• Result: True

Examples:
• v(1)   # True (boundary)
• v(10)  # True (boundary)
• v(0)   # False (below range)
• v(11)  # False (above range)

Common uses:
• Input validation
• Range checking
• Creating reusable validation functions

Key Concepts:
• Key concepts: • Closure captures min_val = 1 and max_val = 10 • Python supports chained comparisons: min_val <= x <= max_val • This checks both min_val <= x AND x <= max_val in one expression • The validator returns True or False How it works: • make_validator(1, 10) returns lambda x: 1 <= x <= 10 • v(5): 1 <= 5 <= 10 → True and True → True • Result: True Examples: • v(1) # True (boundary) • v(10) # True (boundary) • v(0) # False (below range) • v(11) # False (above range) Common uses: • Input validation • Range checking • Creating reusable validation functions

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: def make_validator(min_val, max_val): return lambda x: min_val <= x <= max_val; v=make_validator(1,10); v(15)?`,
    o: ["False", "True", "15", "Error"],
    c: 0,
    e: "15 is not between 1 and 10, so the validator returns False.",
    de: `The same validator from the previous question, but with a value outside the range. 15 exceeds max_val of 10, so the chained comparison fails.

Key concepts:
• v = make_validator(1, 10) checks 1 <= x <= 10
• v(15): 1 <= 15 is True, but 15 <= 10 is False
• Chained comparison short-circuits: overall result is False
• The closure correctly rejects out-of-range values

How it works:
• v(15): 1 <= 15 <= 10
• 1 <= 15 → True
• 15 <= 10 → False
• True and False → False
• Result: False

Examples:
• v(0)   # False (too low)
• v(15)  # False (too high)
• v(5)   # True (in range)

Common uses:
• Boundary testing
• Validating user input
• Filter predicates

Key Concepts:
• Key concepts: • v = make_validator(1, 10) checks 1 <= x <= 10 • v(15): 1 <= 15 is True, but 15 <= 10 is False • Chained comparison short-circuits: overall result is False • The closure correctly rejects out-of-range values How it works: • v(15): 1 <= 15 <= 10 • 1 <= 15 → True • 15 <= 10 → False • True and False → False • Result: False Examples: • v(0) # False (too low) • v(15) # False (too high) • v(5) # True (in range) Common uses: • Boundary testing • Validating user input • Filter predicates

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: sorted(["hello","hi","hey"], key=len)?`,
    o: [`["hi", "hey", "hello"]`, `["hello", "hey", "hi"]`, `["hey", "hi", "hello"]`, "Error"],
    c: 0,
    e: "sorted by length: 'hi'(2), 'hey'(3), 'hello'(5).",
    de: `The key parameter of sorted() accepts a function that transforms each element before comparison. Here, len is passed as the key, so strings are sorted by their length.

Key concepts:
• key=len means: compare len(element) instead of element itself
• len("hi") = 2, len("hey") = 3, len("hello") = 5
• Sorted by length: ["hi", "hey", "hello"]
• Functions as key arguments is a core Python pattern

How it works:
• sorted computes len for each element: 2, 3, 5
• Sorts by these values: 2 < 3 < 5
• Result: ["hi", "hey", "hello"]

Examples:
• sorted(["abc", "a", "ab"], key=len) → ["a", "ab", "abc"]
• sorted([3, 1, 2], key=lambda x: -x) → [3, 2, 1] (reverse)

Common uses:
• Sorting by a derived property
• Custom sort orders
• Sorting objects by attributes

Key Concepts:
• Key concepts: • key=len means: compare len(element) instead of element itself • len("hi") = 2, len("hey") = 3, len("hello") = 5 • Sorted by length: ["hi", "hey", "hello"] • Functions as key arguments is a core Python pattern How it works: • sorted computes len for each element: 2, 3, 5 • Sorts by these values: 2 < 3 < 5 • Result: ["hi", "hey", "hello"] Examples: • sorted(["abc", "a", "ab"], key=len) → ["a", "ab", "abc"] • sorted([3, 1, 2], key=lambda x: -x) → [3, 2, 1] (reverse) Common uses: • Sorting by a derived property • Custom sort orders • Sorting objects by attributes

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: sorted([(1,3),(2,1),(3,2)], key=lambda x: x[1])?`,
    o: ["[(2,1),(3,2),(1,3)]", "[(1,3),(2,1),(3,2)]", "[(3,2),(2,1),(1,3)]", "Error"],
    c: 0,
    e: "Sorted by second element of each tuple: 1, 2, 3.",
    de: `The lambda extracts the second element (index 1) from each tuple for comparison. This sorts the tuples by their second value.

Key concepts:
• key=lambda x: x[1] sorts by the second element of each tuple
• (2,1) has x[1]=1, (3,2) has x[1]=2, (1,3) has x[1]=3
• Sorted order: [(2,1), (3,2), (1,3)]
• Lambdas are commonly used as sort keys

How it works:
• (1,3): key = 3
• (2,1): key = 1
• (3,2): key = 2
• Sorted by keys (1, 2, 3): [(2,1), (3,2), (1,3)]

Examples:
• sorted([(1,3),(2,1)], key=lambda x: x[0]) → [(1,3), (2,1)] (by first)
• sorted([(1,3),(2,1)], key=lambda x: x[1]) → [(2,1), (1,3)] (by second)

Common uses:
• Sorting records by a specific field
• Sorting dictionaries by value
• Custom ordering of complex data structures

Key Concepts:
• Key concepts: • key=lambda x: x[1] sorts by the second element of each tuple • (2,1) has x[1]=1, (3,2) has x[1]=2, (1,3) has x[1]=3 • Sorted order: [(2,1), (3,2), (1,3)] • Lambdas are commonly used as sort keys How it works: • (1,3): key = 3 • (2,1): key = 1 • (3,2): key = 2 • Sorted by keys (1, 2, 3): [(2,1), (3,2), (1,3)] Examples: • sorted([(1,3),(2,1)], key=lambda x: x[0]) → [(1,3), (2,1)] (by first) • sorted([(1,3),(2,1)], key=lambda x: x[1]) → [(2,1), (1,3)] (by second) Common uses: • Sorting records by a specific field • Sorting dictionaries by value • Custom ordering of complex data structures

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: list(map(lambda x: x.upper(), ["hello","world"]))?`,
    o: [`["HELLO", "WORLD"]`, `["hello", "world"]`, `["Hello", "World"]`, "Error"],
    c: 0,
    e: "map applies upper() to each string, converting them to uppercase.",
    de: `map() applies a function to every element of an iterable and returns a map object. list() converts it to a list. Here, each string is converted to uppercase using the upper() method.

Key concepts:
• map(function, iterable) applies function to each element
• lambda x: x.upper() converts a string to uppercase
• map returns a lazy iterator; list() materializes it
• This is equivalent to [x.upper() for x in ["hello","world"]]

How it works:
• map applies lambda to "hello" → "HELLO"
• map applies lambda to "world" → "WORLD"
• list() collects results: ["HELLO", "WORLD"]
• Result: ["HELLO", "WORLD"]

Examples:
• list(map(str.lower, ["A","B"])) → ["a", "b"]
• list(map(len, ["hi","hey"])) → [2, 3]

Common uses:
• Transforming sequences
• Applying operations element-wise
• Functional alternative to list comprehensions

Key Concepts:
• Key concepts: • map(function, iterable) applies function to each element • lambda x: x.upper() converts a string to uppercase • map returns a lazy iterator; list() materializes it • This is equivalent to [x.upper() for x in ["hello","world"]] How it works: • map applies lambda to "hello" → "HELLO" • map applies lambda to "world" → "WORLD" • list() collects results: ["HELLO", "WORLD"] • Result: ["HELLO", "WORLD"] Examples: • list(map(str.lower, ["A","B"])) → ["a", "b"] • list(map(len, ["hi","hey"])) → [2, 3] Common uses: • Transforming sequences • Applying operations element-wise • Functional alternative to list comprehensions

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: list(filter(lambda x: len(x)>3, ["hi","hello","hey"]))?`,
    o: [`["hello"]`, `["hi", "hey"]`, `["hi", "hello", "hey"]`, "Error"],
    c: 0,
    e: "filter keeps elements where len(x)>3. Only 'hello' (len 5) passes.",
    de: `filter() keeps elements for which the function returns True. The lambda checks if the length is greater than 3. Only "hello" (length 5) satisfies this condition.

Key concepts:
• filter(function, iterable) keeps elements where function returns True
• lambda x: len(x) > 3 checks if string length exceeds 3
• "hi" (2) → False, "hello" (5) → True, "hey" (3) → False
• Only "hello" passes the filter

How it works:
• "hi": len("hi") = 2, 2 > 3 → False (excluded)
• "hello": len("hello") = 5, 5 > 3 → True (kept)
• "hey": len("hey") = 3, 3 > 3 → False (excluded)
• Result: ["hello"]

Examples:
• list(filter(lambda x: x > 0, [-1, 0, 1, 2])) → [1, 2]
• list(filter(None, [0, "", 1, "a"])) → [1, "a"]

Common uses:
• Selecting elements meeting a condition
• Data filtering
• Removing unwanted items from sequences

Key Concepts:
• Key concepts: • filter(function, iterable) keeps elements where function returns True • lambda x: len(x) > 3 checks if string length exceeds 3 • "hi" (2) → False, "hello" (5) → True, "hey" (3) → False • Only "hello" passes the filter How it works: • "hi": len("hi") = 2, 2 > 3 → False (excluded) • "hello": len("hello") = 5, 5 > 3 → True (kept) • "hey": len("hey") = 3, 3 > 3 → False (excluded) • Result: ["hello"] Examples: • list(filter(lambda x: x > 0, [-1, 0, 1, 2])) → [1, 2] • list(filter(None, [0, "", 1, "a"])) → [1, "a"] Common uses: • Selecting elements meeting a condition • Data filtering • Removing unwanted items from sequences

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `Can functions be stored in lists in Python?`,
    o: ["Yes, functions are first-class objects", "No, lists only hold data", "Only lambda functions can be stored", "Only built-in functions can be stored"],
    c: 0,
    e: "Functions are first-class objects and can be stored in any data structure.",
    de: `In Python, functions are first-class objects. This means they can be assigned to variables, stored in data structures (lists, dicts, sets, tuples), passed as arguments, and returned from other functions.

Key concepts:
• First-class object = can be used anywhere any other value can
• Functions can be stored in lists, dicts, tuples, sets
• Both user-defined and built-in functions are first-class
• This enables powerful patterns like dispatch tables and pipelines

How it works:
• funcs = [abs, len, str]  # list of functions
• funcs[0](-5)  # calls abs(-5) → 5
• for f in funcs: f(x)  # iterate and call each

Examples:
• my_list = [print, len, abs]
• my_dict = {"add": lambda a,b: a+b}
• my_tuple = (min, max, sum)

Common uses:
• Command pattern (list of operations to execute)
• Plugin systems
• Strategy pattern (selecting behavior at runtime)

Key Concepts:
• Key concepts: • First-class object = can be used anywhere any other value can • Functions can be stored in lists, dicts, tuples, sets • Both user-defined and built-in functions are first-class • This enables powerful patterns like dispatch tables and pipelines How it works: • funcs = [abs, len, str] # list of functions • funcs[0](-5) # calls abs(-5) → 5 • for f in funcs: f(x) # iterate and call each Examples: • my_list = [print, len, abs] • my_dict = {"add": lambda a,b: a+b} • my_tuple = (min, max, sum) Common uses: • Command pattern (list of operations to execute) • Plugin systems • Strategy pattern (selecting behavior at runtime)

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `Can functions be passed as arguments to other functions in Python?`,
    o: ["Yes", "No", "Only lambdas", "Only built-in functions"],
    c: 0,
    e: "Functions are first-class objects and can be passed as arguments.",
    de: `Passing functions as arguments is one of the key features of first-class functions. Built-in functions like map(), filter(), and sorted() rely on this — they accept a function argument to customize behavior.

Key concepts:
• Any callable can be passed as an argument
• map(func, iterable) is a classic example
• sorted(data, key=func) uses a function argument
• This is the foundation of higher-order programming

How it works:
• def apply(f, x): return f(x)
• apply(abs, -5) → abs(-5) → 5
• The function f is just a parameter like any other

Examples:
• map(str, [1, 2, 3]) — str is passed as an argument
• sorted([3,1,2], key=lambda x: -x) — lambda is passed as key
• filter(bool, [0, 1, "", "a"]) — bool is passed as filter function

Common uses:
• Higher-order functions
• Callback patterns
• Event handlers
• Customizable algorithms

Key Concepts:
• Key concepts: • Any callable can be passed as an argument • map(func, iterable) is a classic example • sorted(data, key=func) uses a function argument • This is the foundation of higher-order programming How it works: • def apply(f, x): return f(x) • apply(abs, -5) → abs(-5) → 5 • The function f is just a parameter like any other Examples: • map(str, [1, 2, 3]) — str is passed as an argument • sorted([3,1,2], key=lambda x: -x) — lambda is passed as key • filter(bool, [0, 1, "", "a"]) — bool is passed as filter function Common uses: • Higher-order functions • Callback patterns • Event handlers • Customizable algorithms

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `Can functions be returned from other functions in Python?`,
    o: ["Yes", "No", "Only lambdas can be returned", "Only if using return keyword"],
    c: 0,
    e: "Functions can be returned from other functions — this is how closures and decorators work.",
    de: `Returning functions from functions is a core Python capability. This is the mechanism behind closures, decorators, and function factories.

Key concepts:
• A function can return another function object
• The returned function can be a def or a lambda
• This creates closures when the inner function references outer variables
• Decorators are built on this pattern

How it works:
• def outer():
•     def inner(): return "hello"
•     return inner  # returns the function object, not its result
• f = outer()  # f is now the inner function
• f()  # "hello"

Examples:
• def make_adder(n): return lambda x: x + n  # returns a lambda
• def decorator(f): def wrapper(): ...; return wrapper  # returns wrapper

Common uses:
• Closures and function factories
• Decorator pattern
• Lazy evaluation (return a function to call later)
• Currying

Key Concepts:
• Key concepts: • A function can return another function object • The returned function can be a def or a lambda • This creates closures when the inner function references outer variables • Decorators are built on this pattern How it works: • def outer(): • def inner(): return "hello" • return inner # returns the function object, not its result • f = outer() # f is now the inner function • f() # "hello" Examples: • def make_adder(n): return lambda x: x + n # returns a lambda • def decorator(f): def wrapper(): ...; return wrapper # returns wrapper Common uses: • Closures and function factories • Decorator pattern • Lazy evaluation (return a function to call later) • Currying

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: type(lambda: None)?`,
    o: ["<class 'function'>", "<class 'lambda'>", "<class 'NoneType'>", "Error"],
    c: 0,
    e: "Lambdas are function objects. type() returns <class 'function'>.",
    de: `In Python, there is no separate "lambda" type. Lambda expressions create regular function objects. The type of any lambda is the same as the type of any def-defined function: <class 'function'>.

Key concepts:
• lambda creates a function object, same as def
• type(lambda: None) → <class 'function'>
• There is no <class 'lambda'> in Python
• Lambdas and def functions are the same type

How it works:
• lambda: None creates an anonymous function that returns None
• type() checks its type → function
• Same result as type(def f(): pass) → <class 'function'>

Examples:
• type(lambda x: x)      # <class 'function'>
• type(lambda: 42)        # <class 'function'>
• def f(): pass; type(f)  # <class 'function'>

Common uses:
• Understanding Python's type system
• Verifying that lambdas and defs produce the same type
• Introspection and debugging

Key Concepts:
• Key concepts: • lambda creates a function object, same as def • type(lambda: None) → <class 'function'> • There is no <class 'lambda'> in Python • Lambdas and def functions are the same type How it works: • lambda: None creates an anonymous function that returns None • type() checks its type → function • Same result as type(def f(): pass) → <class 'function'> Examples: • type(lambda x: x) # <class 'function'> • type(lambda: 42) # <class 'function'> • def f(): pass; type(f) # <class 'function'> Common uses: • Understanding Python's type system • Verifying that lambdas and defs produce the same type • Introspection and debugging

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: type(print)?`,
    o: ["<class 'builtin_function_or_method'>", "<class 'function'>", "<class 'str'>", "Error"],
    c: 0,
    e: "print is a built-in function. Its type is builtin_function_or_method.",
    de: `Built-in functions implemented in C (like print, len, abs) have a different type than user-defined Python functions. Their type is builtin_function_or_method, reflecting their implementation.

Key concepts:
• Built-in functions have type: builtin_function_or_method
• User-defined functions (def/lambda) have type: function
• Both are callable, but they're different types internally
• This distinction reflects CPython implementation details

How it works:
• print is a built-in function (implemented in C)
• type(print) → <class 'builtin_function_or_method'>
• Compare: def f(): pass; type(f) → <class 'function'>

Examples:
• type(print)  # <class 'builtin_function_or_method'>
• type(len)    # <class 'builtin_function_or_method'>
• type(abs)    # <class 'builtin_function_or_method'>
• type(lambda: 0)  # <class 'function'>

Common uses:
• Understanding Python internals
• Distinguishing built-in from user-defined functions
• Introspection and type checking

Key Concepts:
• Key concepts: • Built-in functions have type: builtin_function_or_method • User-defined functions (def/lambda) have type: function • Both are callable, but they're different types internally • This distinction reflects CPython implementation details How it works: • print is a built-in function (implemented in C) • type(print) → <class 'builtin_function_or_method'> • Compare: def f(): pass; type(f) → <class 'function'> Examples: • type(print) # <class 'builtin_function_or_method'> • type(len) # <class 'builtin_function_or_method'> • type(abs) # <class 'builtin_function_or_method'> • type(lambda: 0) # <class 'function'> Common uses: • Understanding Python internals • Distinguishing built-in from user-defined functions • Introspection and type checking

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  // 41-50: Mutable Default Argument Gotcha Deep
  (_i: number) => ({
    q: `What is the result of: def f(x, lst=[]): lst.append(x); return lst; f(1); f(2)?`,
    o: ["[1, 2]", "[2]", "[1]", "Error"],
    c: 0,
    e: "The default list is created once and shared. f(1) appends 1, f(2) appends 2 to the same list.",
    de: `This is the infamous mutable default argument gotcha. The default list [] is created once when the function is defined, not each time it's called. So all calls that use the default share the same list object.

Key concepts:
• Default arguments are evaluated once at function definition time
• The list [] is created once and reused across all calls
• f(1) appends 1 to the default list: [1]
• f(2) appends 2 to the same list: [1, 2]

How it works:
• def f(x, lst=[]): lst = [] is created once
• f(1): lst is the default [], appends 1 → [1], returns [1]
• f(2): lst is STILL the same list [1], appends 2 → [1, 2], returns [1, 2]
• Result: [1, 2]

Examples:
• f(1)  # [1]
• f(2)  # [1, 2] (not [2]!)
• f(3)  # [1, 2, 3]

Common uses:
• Understanding one of Python's most common gotchas
• Why you should use None as default for mutable arguments
• Interview question classic

Key Concepts:
• Key concepts: • Default arguments are evaluated once at function definition time • The list [] is created once and reused across all calls • f(1) appends 1 to the default list: [1] • f(2) appends 2 to the same list: [1, 2] How it works: • def f(x, lst=[]): lst = [] is created once • f(1): lst is the default [], appends 1 → [1], returns [1] • f(2): lst is STILL the same list [1], appends 2 → [1, 2], returns [1, 2] • Result: [1, 2] Examples: • f(1) # [1] • f(2) # [1, 2] (not [2]!) • f(3) # [1, 2, 3] Common uses: • Understanding one of Python's most common gotchas • Why you should use None as default for mutable arguments • Interview question classic

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: def f(x, lst=[]): lst.append(x); return lst; f(1); f(2); f(3)?`,
    o: ["[1, 2, 3]", "[3]", "[1, 2]", "Error"],
    c: 0,
    e: "The default list accumulates across calls. After three calls it contains all three values.",
    de: `Extending the mutable default gotcha to three calls. Each call appends to the same shared default list, so after three calls the list has all three elements.

Key concepts:
• The same default list persists across all calls
• f(1) → [1], f(2) → [1,2], f(3) → [1,2,3]
• This behavior surprises many Python programmers
• It occurs because defaults are function attributes, not per-call values

How it works:
• f(1): appends 1 → [1]
• f(2): appends 2 → [1, 2]
• f(3): appends 3 → [1, 2, 3]
• Result: [1, 2, 3]

Examples:
• After 10 calls with 1-10: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
• The list grows indefinitely

Common uses:
• Demonstrating why mutable defaults are dangerous
• Accidental caching or accumulation bugs
• Teaching defensive programming patterns

Key Concepts:
• Key concepts: • The same default list persists across all calls • f(1) → [1], f(2) → [1,2], f(3) → [1,2,3] • This behavior surprises many Python programmers • It occurs because defaults are function attributes, not per-call values How it works: • f(1): appends 1 → [1] • f(2): appends 2 → [1, 2] • f(3): appends 3 → [1, 2, 3] • Result: [1, 2, 3] Examples: • After 10 calls with 1-10: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] • The list grows indefinitely Common uses: • Demonstrating why mutable defaults are dangerous • Accidental caching or accumulation bugs • Teaching defensive programming patterns

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of the second call: def f(x, lst=None): lst = lst if lst is not None else []; lst.append(x); return lst; f(1); f(2)?`,
    o: ["[2]", "[1, 2]", "[1]", "Error"],
    c: 0,
    e: "Using None as default creates a new list each call. f(2) gets a fresh list containing only [2].",
    de: `This is the safe pattern for mutable defaults. By using None as the default and creating a new list inside the function, each call gets its own independent list.

Key concepts:
• lst=None is the default; a new [] is created each call
• f(1) creates a new list [1] and returns it
• f(2) creates another new list [2] and returns it
• No shared state between calls

How it works:
• f(1): lst is None → lst = [] → appends 1 → returns [1]
• f(2): lst is None → lst = [] (new list!) → appends 2 → returns [2]
• Result: [2]

Examples:
• f(1)  # [1]
• f(2)  # [2] (fresh list each time)
• f(3)  # [3]

Common uses:
• The idiomatic Python pattern for mutable defaults
• Prevents accidental state sharing
• Recommended by PEP 8 and linters

Key Concepts:
• Key concepts: • lst=None is the default; a new [] is created each call • f(1) creates a new list [1] and returns it • f(2) creates another new list [2] and returns it • No shared state between calls How it works: • f(1): lst is None → lst = [] → appends 1 → returns [1] • f(2): lst is None → lst = [] (new list!) → appends 2 → returns [2] • Result: [2] Examples: • f(1) # [1] • f(2) # [2] (fresh list each time) • f(3) # [3] Common uses: • The idiomatic Python pattern for mutable defaults • Prevents accidental state sharing • Recommended by PEP 8 and linters

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: def f(x, d={}): d[x]=x; return d; f(1); f(2)?`,
    o: ["{1: 1, 2: 2}", "{2: 2}", "{1: 1}", "Error"],
    c: 0,
    e: "The default dict is shared across calls. f(1) adds key 1, f(2) adds key 2 to the same dict.",
    de: `The mutable default gotcha applies to all mutable types, not just lists. Here, a default dictionary is shared across calls, accumulating key-value pairs.

Key concepts:
• Default {} is created once at function definition
• f(1) sets d[1] = 1 → {1: 1}
• f(2) sets d[2] = 2 on the same dict → {1: 1, 2: 2}
• Same gotcha as with lists — applies to any mutable default

How it works:
• f(1): d = {} (the one default), d[1] = 1 → {1: 1}
• f(2): d is still {1: 1}, d[2] = 2 → {1: 1, 2: 2}
• Result: {1: 1, 2: 2}

Examples:
• f("a"); f("b") → {"a": "a", "b": "b"}
• Same fix: use d=None, create {} inside

Common uses:
• Understanding mutable defaults affect dicts too
• Cache-like behavior (sometimes intentional)
• Demonstrating the general principle

Key Concepts:
• Key concepts: • Default {} is created once at function definition • f(1) sets d[1] = 1 → {1: 1} • f(2) sets d[2] = 2 on the same dict → {1: 1, 2: 2} • Same gotcha as with lists — applies to any mutable default How it works: • f(1): d = {} (the one default), d[1] = 1 → {1: 1} • f(2): d is still {1: 1}, d[2] = 2 → {1: 1, 2: 2} • Result: {1: 1, 2: 2} Examples: • f("a"); f("b") → {"a": "a", "b": "b"} • Same fix: use d=None, create {} inside Common uses: • Understanding mutable defaults affect dicts too • Cache-like behavior (sometimes intentional) • Demonstrating the general principle

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: def f(s=set()): s.add(1); return s; f(); f()?`,
    o: ["{1}", "{1, 1}", "set()", "Error"],
    c: 0,
    e: "The default set is shared. The first call adds 1. The second call adds 1 again but sets ignore duplicates.",
    de: `The mutable default gotcha with sets. The default set is shared, but since sets only store unique elements, adding 1 twice still results in {1}.

Key concepts:
• Default set() is created once and shared
• First f(): adds 1 → {1}
• Second f(): adds 1 again, but sets don't allow duplicates → still {1}
• The set IS being shared, but the effect is invisible with duplicate values

How it works:
• f(): s is the default set(), s.add(1) → {1}
• f(): s is still {1}, s.add(1) → still {1} (1 already present)
• Result: {1}

Examples:
• def f(s=set()): s.add(1); s.add(2); return s
• f()  # {1, 2}
• f()  # {1, 2} (no visible change since same elements added)

Common uses:
• Understanding mutable defaults with sets
• Sets silently ignore duplicate additions
• The shared default exists but may not be obvious

Key Concepts:
• Key concepts: • Default set() is created once and shared • First f(): adds 1 → {1} • Second f(): adds 1 again, but sets don't allow duplicates → still {1} • The set IS being shared, but the effect is invisible with duplicate values How it works: • f(): s is the default set(), s.add(1) → {1} • f(): s is still {1}, s.add(1) → still {1} (1 already present) • Result: {1} Examples: • def f(s=set()): s.add(1); s.add(2); return s • f() # {1, 2} • f() # {1, 2} (no visible change since same elements added) Common uses: • Understanding mutable defaults with sets • Sets silently ignore duplicate additions • The shared default exists but may not be obvious

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: def f(x, lst=[]): lst.append(x); return lst; f(1, []); f(2)?`,
    o: ["[2]", "[1, 2]", "[1]", "Error"],
    c: 0,
    e: "f(1, []) uses a new list (not the default). f(2) uses the untouched default, so only [2].",
    de: `When you pass an explicit argument, the default is not used. f(1, []) passes a brand-new list, so the default [] is never modified. The subsequent f(2) uses the untouched default.

Key concepts:
• f(1, []) uses the explicitly passed [], not the default
• The default [] has never been modified
• f(2) uses the default [] which is empty → appends 2 → [2]
• Passing explicit arguments bypasses the default entirely

How it works:
• f(1, []): lst = [] (the passed one), appends 1 → [1]. Default untouched.
• f(2): lst = default [] (still empty!), appends 2 → [2]
• Result: [2]

Examples:
• f(1); f(2)       # [1, 2] (both use default)
• f(1, []); f(2)   # [2] (first uses explicit, second uses pristine default)
• f(1, [10]); f(2) # [2] (explicit [10] is separate from default)

Common uses:
• Understanding when defaults are used vs bypassed
• Testing default argument behavior
• Debugging mutable default issues

Key Concepts:
• • f(2): lst = default [] (still empty!), appends 2 → [2] • Result: [2] Examples: • f(1); f(2) # [1, 2] (both use default) • f(1, []); f(2) # [2] (first uses explicit, second uses pristine default) • f(1, [10]); f(2) # [2] (explicit [10] is separate from default) Common uses: • Understanding when defaults are used vs bypassed • Testing default argument behavior • Debugging mutable default issues

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: def f(): pass; f.__defaults__?`,
    o: ["None", "()", "[]", "Error"],
    c: 0,
    e: "A function with no default parameters has __defaults__ set to None.",
    de: `Every function has a __defaults__ attribute that stores a tuple of default values for parameters that have defaults. If no parameters have defaults, __defaults__ is None (not an empty tuple).

Key concepts:
• __defaults__ holds default parameter values as a tuple
• No defaults → __defaults__ is None
• This is different from an empty tuple ()
• You can inspect and even modify __defaults__ at runtime

How it works:
• def f(): pass — no parameters, no defaults
• f.__defaults__ → None
• Compare: def g(x=1): pass → g.__defaults__ = (1,)

Examples:
• def f(): pass; f.__defaults__           # None
• def g(x): pass; g.__defaults__          # None (no defaults)
• def h(x=1): pass; h.__defaults__        # (1,)
• def k(x=1, y=2): pass; k.__defaults__   # (1, 2)

Common uses:
• Introspecting function signatures
• Debugging default argument issues
• Metaprogramming and decoration

Key Concepts:
• Key concepts: • __defaults__ holds default parameter values as a tuple • No defaults → __defaults__ is None • This is different from an empty tuple () • You can inspect and even modify __defaults__ at runtime How it works: • def f(): pass — no parameters, no defaults • f.__defaults__ → None • Compare: def g(x=1): pass → g.__defaults__ = (1,) Examples: • def f(): pass; f.__defaults__ # None • def g(x): pass; g.__defaults__ # None (no defaults) • def h(x=1): pass; h.__defaults__ # (1,) • def k(x=1, y=2): pass; k.__defaults__ # (1, 2) Common uses: • Introspecting function signatures • Debugging default argument issues • Metaprogramming and decoration

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the result of: def f(x=1, y=2): pass; f.__defaults__?`,
    o: ["(1, 2)", "None", "[1, 2]", "{x: 1, y: 2}"],
    c: 0,
    e: "__defaults__ stores default values as a tuple: (1, 2).",
    de: `When a function has default parameters, __defaults__ contains their values in a tuple, in the order they appear in the function signature.

Key concepts:
• __defaults__ is a tuple of default values
• Order matches parameter order: x=1, y=2 → (1, 2)
• It stores values only, not parameter names
• Parameter names are in __code__.co_varnames

How it works:
• def f(x=1, y=2): pass
• f.__defaults__ → (1, 2)
• First element (1) is x's default
• Second element (2) is y's default

Examples:
• def f(a=10, b=20, c=30): pass; f.__defaults__  # (10, 20, 30)
• def f(a, b=5): pass; f.__defaults__  # (5,) — only b has a default
• f.__defaults__ = (100, 200)  # You can modify defaults at runtime!

Common uses:
• Inspecting function defaults
• Runtime modification of defaults (advanced)
• Testing and documentation tools

Key Concepts:
• Common uses: • Inspecting function defaults • Runtime modification of defaults (advanced) • Testing and documentation tools

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `Why is using a mutable default argument (like lst=[]) dangerous in Python?`,
    o: ["The default object is created once and shared across all calls", "It causes a syntax error", "It makes the function slower", "It prevents the function from being called"],
    c: 0,
    e: "Mutable defaults are created once at definition time and shared by all calls that use the default.",
    de: `Mutable default arguments are one of Python's most well-known gotchas. The default value is evaluated once when the function is defined (not each time it's called), so all calls share the same object. Mutating it in one call affects all subsequent calls.

Key concepts:
• Default values are evaluated at function DEFINITION time, not call time
• def f(lst=[]): — the [] is created once when Python parses this def
• Every call that uses the default gets the SAME list object
• Mutations accumulate across calls

How it works:
• Python evaluates [] once and stores it as f.__defaults__[0]
• f(1): appends to the stored list → [1]
• f(2): appends to the SAME stored list → [1, 2]
• The default object is persistent and mutable

Examples:
• def f(lst=[]): lst.append(1); return lst
• f()  # [1]
• f()  # [1, 1] — same list!
• Fix: def f(lst=None): lst = lst if lst is not None else []

Common uses:
• Understanding Python's evaluation model
• Avoiding accidental state in functions
• A classic interview and debugging topic

Key Concepts:
• • Fix: def f(lst=None): lst = lst if lst is not None else [] Common uses: • Understanding Python's evaluation model • Avoiding accidental state in functions • A classic interview and debugging topic

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
  (_i: number) => ({
    q: `What is the safe pattern for handling mutable default arguments in Python?`,
    o: ["Use None as default and create the object inside the function", "Use a global variable instead", "Use a class attribute", "Use a tuple instead of a list"],
    c: 0,
    e: "The standard pattern is: def f(lst=None): if lst is None: lst = []",
    de: `The universally recommended pattern is to use None as the default value and create a new mutable object inside the function body. This ensures each call gets its own independent object.

Key concepts:
• Use None as the sentinel default value
• Check for None inside the function and create a new object
• This creates a fresh list/dict/set for each call
• Recommended by PEP 8 and all Python style guides

How it works:
• def f(x, lst=None):
•     if lst is None:
•         lst = []
•     lst.append(x)
•     return lst
• f(1)  # [1] (new list)
• f(2)  # [2] (another new list)

Examples:
• def f(data=None): data = data if data is not None else {}
• def f(items=None): items = items if items is not None else set()
• def f(lst=None): lst = lst or []  # shorter but treats [] as None too

Common uses:
• Any function with mutable default parameters
• API design best practice
• Prevents accidental shared state bugs
• Standard Python idiom taught in every advanced Python course

Key Concepts:
• Key concepts: • Use None as the sentinel default value • Check for None inside the function and create a new object • This creates a fresh list/dict/set for each call • Recommended by PEP 8 and all Python style guides How it works: • def f(x, lst=None): • if lst is None: • lst = [] • lst.append(x) • return lst • f(1) # [1] (new list) • f(2) # [2] (another new list) Examples: • def f(data=None): data = data if data is not None else {} • def f(items=None): items = items if items is not None else set() • def f(lst=None): lst = lst or [] # shorter but treats [] as None too Common uses: • Any function with mutable default parameters • API design best practice • Prevents accidental shared state bugs • Standard Python idiom taught in every advanced Python course

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
