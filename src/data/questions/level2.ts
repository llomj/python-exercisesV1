import { PersonaStage } from '../../types';

// --- LEVEL 2: SHRIMP (Math, Expressions, Order of Ops) - 100 TRULY UNIQUE QUESTIONS ---
// Each question tests a DIFFERENT concept - NO number/variable variations of the same question
export const level2Patterns = [
  // 1-10: Basic Arithmetic Operations
  (_i: number) => ({ 
    q: `What is 10 + 5 * 2?`, 
    o: ["20", "30", "15", "None"], 
    c: 0, 
    e: "Multiplication happens first (PEMDAS).",
    de: `Python follows the order of operations (PEMDAS: Parentheses, Exponents, Multiplication/Division, Addition/Subtraction). Multiplication has higher precedence than addition, so 5 * 2 is calculated first (equals 10), then 10 + 10 equals 20.

Order of operations:
• 10 + 5 * 2
• First: 5 * 2 = 10 (multiplication first)
• Then: 10 + 10 = 20 (addition second)
• Result: 20

PEMDAS rule:
• P: Parentheses (highest priority)
• E: Exponents (**)
• M/D: Multiplication and Division (left to right)
• A/S: Addition and Subtraction (left to right)

Common mistake:
• 10 + 5 * 2 ≠ (10 + 5) * 2 = 30
• Must follow operator precedence
• Multiplication before addition

Example: 10 + 5 * 2 evaluates to 20 because multiplication (5 * 2 = 10) happens before addition (10 + 10 = 20), following PEMDAS rules.

Key Distinctions:
• Without parentheses, multiplication binds before addition.
• 10 + (5 * 2) = 10 + 10 = 20, not (10 + 5) * 2.

How It Works:
• Python applies the numeric precedence table: *, /, //, %, ** before + and - at the same level left-to-right among peers.

Step-by-Step Execution:
• 1. Evaluate 5 * 2 -> 10. 2. Evaluate 10 + 10 -> 20.

Order of Operations:
• Multiplication first, then addition.

Common Use Cases:
• Mixing units in formulas, layout math, and introductory expression evaluation.

Edge Cases:
• Adding parentheses changes grouping; mixing ints and floats promotes to float in results.

Performance Considerations:
• Single expression evaluation is O(1) for small literals.

Examples:
• 10 + 5 * 2 -> 20; (10 + 5) * 2 -> 30.

Notes:
• Use extra parentheses when readability beats minimal tokens.`
  }),
  (_i: number) => ({ 
    q: `What is (10 + 5) * 2?`, 
    o: ["30", "20", "15", "None"], 
    c: 0, 
    e: "Parentheses change order of operations.",
    de: `Parentheses override the normal order of operations in Python. When you use parentheses, the expression inside is evaluated first, regardless of operator precedence. (10 + 5) * 2 calculates 10 + 5 first (equals 15), then 15 * 2 equals 30.

Parentheses precedence:
• (10 + 5) * 2
• First: (10 + 5) = 15 (parentheses evaluated first)
• Then: 15 * 2 = 30 (multiplication)
• Result: 30

Without parentheses:
• 10 + 5 * 2 = 10 + 10 = 20 (multiplication first)
• Parentheses change the result!

How parentheses work:
• Highest precedence (evaluated first)
• Override normal operator precedence
• Can nest: ((10 + 5) * 2) / 3
• Used for clarity even when not needed

Example: (10 + 5) * 2 evaluates to 30 because parentheses force addition first (10 + 5 = 15), then multiplication (15 * 2 = 30).

Key Distinctions:
• Parentheses force the addition to happen before the multiplication.
• (10 + 5) is 15, then 15 * 2 is 30 — different from 10 + 5 * 2.

How It Works:
• Subexpression in parentheses is evaluated first, yielding a single value for the *.

Step-by-Step Execution:
• 1. 10 + 5 -> 15. 2. 15 * 2 -> 30.

Order of Operations:
• Inner parens, then multiplication.

Common Use Cases:
• Scaling a summed quantity (perimeter then double, etc.).

Edge Cases:
• Deeply nested parens follow innermost-first evaluation.

Performance Considerations:
• Still constant-time for fixed-size arithmetic.

Examples:
• (1 + 2) * 3 -> 9; 1 + 2 * 3 -> 7.

Notes:
• PEP 8 allows redundant parens when they clarify intent.`
  }),
  (_i: number) => ({ 
    q: `What is 10 / 2 in Python 3?`, 
    o: ["5.0", "5", "0", "Error"], 
    c: 0, 
    e: "The / operator always returns a float in Python 3.",
    de: `In Python 3, the division operator (/) always returns a floating-point number, even when the result is a whole number. This is called "true division" and ensures mathematical consistency. 10 / 2 equals 5.0, not 5.

Python 3 division:
• 10 / 2 = 5.0 (always float)
• Even whole numbers become floats
• Ensures consistent behavior
• Mathematically more accurate

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
• // is preferred for clarity

Example: 10 / 2 returns 5.0 (a float) in Python 3, even though the result is a whole number. For integer division, use 10 // 2 which returns 5.

Key Distinctions:
• True division / always returns float in Python 3, even when the value is mathematically integral.
• 10 / 2 is 5.0, not int 5 — unlike // which floors toward negative infinity.

How It Works:
• The / operator calls PyNumber_TrueDivide and builds a float result object.

Step-by-Step Execution:
• 1. Divide 10 by 2. 2. Produce float 5.0.

Order of Operations:
• Left-to-right among / at same precedence; here one operation only.

Common Use Cases:
• Ratios, averages, and anything needing fractional math without floor semantics.

Edge Cases:
• Very large ints still produce floats; precision limits of IEEE binary float apply.

Performance Considerations:
• Hardware float division; typically a few nanoseconds.

Examples:
• 10 / 4 -> 2.5; 9 / 3 -> 3.0.

Notes:
• Use // for floor division when you need an integer quotient toward -inf.`
  }),
  (_i: number) => ({ 
    q: `What is 10 // 3?`, 
    o: ["3", "3.33", "4", "Error"], 
    c: 0, 
    e: "// is floor division (integer division).",
    de: `The // operator performs floor division (also called integer division or truncating division). It divides two numbers and returns the largest integer less than or equal to the result. For positive numbers, this means it truncates toward zero. 10 // 3 equals 3.

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

Example: 10 // 3 returns 3 because floor division calculates how many complete groups of 3 can be made from 10, which is 3 (with remainder 1).

Key Distinctions:
• Floor division // rounds the quotient toward negative infinity, not toward zero.
• 10 // 3 is 3 because 3 <= 10/3 < 4 on the number line.

How It Works:
• // computes floor(a / b) for ints, with well-defined behavior for negatives.

Step-by-Step Execution:
• 1. True divide 10/3 ~ 3.33. 2. Floor -> 3.

Order of Operations:
• Multiplicative operators bind tighter than + - ; here one // only.

Common Use Cases:
• Indexing chunks, pagination counts, and integer splitting problems.

Edge Cases:
• -10 // 3 is -4 (floor), whereas int(-10/3) truncates toward zero.

Performance Considerations:
• O(1) for C long-sized values; big ints cost more.

Examples:
• 7 // 2 -> 3; -7 // 2 -> -4.

Notes:
• For modulo pairing, divmod gives both // and % together.`
  }),
  (_i: number) => ({ 
    q: `What is 10 % 3?`, 
    o: ["1", "3", "0", "Error"], 
    c: 0, 
    e: "% is the modulo operator (remainder).",
    de: `The % operator is the modulo operator - it returns the remainder after division. When you divide 10 by 3, you get 3 groups of 3 with 1 left over. That remainder (1) is what the modulo operator returns. 10 % 3 equals 1.

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

Example: 10 % 3 returns 1 because when you divide 10 by 3, you get 3 groups of 3 with 1 remaining. This is useful for checking divisibility, wrapping values, and many other programming tasks.

Key Distinctions:
• Modulo a % b matches Python's // so that (a // b) * b + (a % b) == a for ints.
• 10 % 3 is 1 — the remainder after floor division by 3.

How It Works:
• % computes remainder consistent with floor division, not C-style trunc toward zero for negatives.

Step-by-Step Execution:
• 1. 10 // 3 -> 3. 2. Subtract 3*3 from 10 -> 1.

Order of Operations:
• Same precedence family as * / //.

Common Use Cases:
• Wrap indices, cyclic buffers, and divisibility tests (a % b == 0).

Edge Cases:
• Negative a: sign of % follows Python rule pairing with //; learn one table and stick to it.

Performance Considerations:
• O(1) for small ints.

Examples:
• 4 % 2 -> 0; 5 % 2 -> 1.

Notes:
• math.fmod uses float trunc division — different from % for negatives.`
  }),
  (_i: number) => ({ 
    q: `What is 2 ** 3?`, 
    o: ["8", "6", "9", "Error"], 
    c: 0, 
    e: "** is the exponentiation operator.",
    de: `The ** operator performs exponentiation (raising a number to a power). It's Python's built-in operator for calculating powers, making it convenient and readable. 2 ** 3 means "2 to the power of 3" which equals 8 (2 × 2 × 2).

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

Example: 2 ** 3 returns 8 because 2 raised to the power of 3 means multiplying 2 by itself 3 times (2 × 2 × 2 = 8).

Key Distinctions:
• ** is exponentiation; 2 ** 3 is 8, not 6 (not repeated addition).
• Right-associative for chains: see the 2 ** 2 ** 3 question separately.

How It Works:
• pow(2, 3) can match ** for two arguments; three-arg pow adds modular reduction.

Step-by-Step Execution:
• 1. Raise 2 to the power 3. 2. Result 8.

Order of Operations:
• ** binds tighter than unary + - and multiplicative ops.

Common Use Cases:
• Growth models, bit counts, powers of two in algorithms.

Edge Cases:
• 0**0 is 1 in Python; huge exponents can be slow or huge.

Performance Considerations:
• Exponentiation by squaring for pow with three args is optimized; plain ** on big ints uses Karatsuba-style paths.

Examples:
• 2 ** 10 -> 1024 for quick powers-of-two intuition.

Notes:
• Use math.pow if you need float-only behavior (always float).`
  }),
  (_i: number) => ({ 
    q: `What is 2 ** 2 ** 3?`, 
    o: ["256", "64", "512", "Error"], 
    c: 0, 
    e: "Exponentiation is right-associative: 2**(2**3) = 2**8 = 256.",
    de: `Exponentiation in Python is right-associative, meaning it groups from right to left. 2 ** 2 ** 3 is evaluated as 2 ** (2 ** 3), not (2 ** 2) ** 3. This matches mathematical convention for powers. 2 ** (2 ** 3) = 2 ** 8 = 256.

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

Example: 2 ** 2 ** 3 evaluates to 256. It's calculated as 2 ** (2 ** 3) = 2 ** 8 = 256, following right-associativity for exponentiation.

Key Distinctions:
• Chained ** is right-associative: 2 ** (2 ** 3), not (2 ** 2) ** 3.
• 2 ** 3 is 8, then 2 ** 8 is 256.

How It Works:
• Parser groups exponentiation from the right for a chain of **.

Step-by-Step Execution:
• 1. Evaluate inner 2**3 -> 8. 2. Evaluate 2**8 -> 256.

Order of Operations:
• All ** in a chain resolve right-to-left.

Common Use Cases:
• Nested exponential growth expressions in math puzzles.

Edge Cases:
• Mixing with unary minus needs explicit parens: -2**2 is -(2**2).

Performance Considerations:
• Result size can explode; big-int ** is not constant memory.

Examples:
• Compare (2**2)**3 -> 64 to see associativity difference.

Notes:
• When in doubt, add parentheses even if redundant to readers.`
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

Example: 10 / 0 raises ZeroDivisionError because division by zero is mathematically undefined. This must be caught with try-except or prevented by checking that the divisor is not zero before dividing.

Key Distinctions:
• Division by zero is undefined; Python raises ZeroDivisionError for / and // on zero divisor.
• This is a runtime exception, not a silent infinity (unlike some floats).

How It Works:
• Interpreter checks divisor after evaluating numerator for ints; zero triggers error.

Step-by-Step Execution:
• 1. Attempt 10 / 0. 2. Raise ZeroDivisionError before producing a numeric result.

Order of Operations:
• No fallback value — control jumps to exception handling.

Common Use Cases:
• Guarding denominators from user input or measurements.

Edge Cases:
• Float 0.0 divisor also raises for / in pure integer-looking expressions with int zero.

Performance Considerations:
• No numeric cost — failure is immediate.

Examples:
• Use if b != 0: or try/except around risky divides.

Notes:
• math.inf appears only from float overflow or float('inf'), not int / 0.`
  }),
  (_i: number) => ({ 
    q: `What is 0 / 10?`, 
    o: ["0.0", "0", "Error", "None"], 
    c: 0, 
    e: "Zero divided by any number is 0.0.",
    de: `Dividing zero by any non-zero number always results in zero. In Python 3, the division operator (/) always returns a float, so 0 / 10 equals 0.0 (a float), not 0 (an integer).

Zero divided by number:
• 0 / 10 = 0.0 (zero divided by any number)
• 0 / 5 = 0.0
• 0 / 100 = 0.0
• Always 0.0 (float in Python 3)

How it works:
• Zero divided by any number equals zero
• 0 ÷ 10 = 0 (mathematically)
• In Python 3, / always returns float
• Result: 0.0 (not 0)

Python 3 behavior:
• 0 / 10 = 0.0 (float, not int)
• 0 // 10 = 0 (integer, floor division)
• Division operator always returns float
• Even when result is zero

Important distinction:
• 0 / 10 = 0.0 (Zero divided by number - valid)
• 10 / 0 = ZeroDivisionError (Number divided by zero - invalid)
• These are different operations!

Common uses:
• Default values: result = 0.0 if divisor != 0 else default
• Calculations with zero numerator
• Mathematical formulas where numerator might be zero

Example: 0 / 10 returns 0.0 because zero divided by any non-zero number equals zero, and Python 3's division operator always returns a float (0.0 instead of 0).

Key Distinctions:
• Zero divided by a non-zero float/int yields 0.0 in true division.
• Numerator zero is allowed; only divisor zero is forbidden.

How It Works:
• Floating true division produces 0.0 even when operands are ints.

Step-by-Step Execution:
• 1. Evaluate 0 / 10. 2. Result 0.0.

Order of Operations:
• Single / operation.

Common Use Cases:
• Normalized scores starting at zero, zeroed numerators in ratios.

Edge Cases:
• 0 / 0 still raises; -0.0 is a possible float sign bit edge case rarely seen in quizzes.

Performance Considerations:
• Trivial float division.

Examples:
• 0 / 3 -> 0.0; 0 // 5 -> 0.

Notes:
• Distinguish mathematical limit stories from Python's strict zero rules.`
  }),
  (_i: number) => ({ 
    q: `What is 10 * 0?`, 
    o: ["0", "10", "Error", "None"], 
    c: 0, 
    e: "Any number multiplied by zero is zero.",
    de: `Any number multiplied by zero always equals zero. This is a fundamental mathematical property. 10 * 0 equals 0 because multiplying any number by zero results in zero.

Multiplication by zero:
• 10 * 0 = 0 (any number times zero)
• 5 * 0 = 0
• 100 * 0 = 0
• Always zero

How it works:
• Multiplying by zero always gives zero
• This is true for all numbers (positive, negative, float, int)
• Zero is the multiplicative identity element
• Fundamental mathematical property

Examples:
• 10 * 0 = 0
• -5 * 0 = 0
• 3.14 * 0 = 0.0 (float times zero)
• 0 * 0 = 0

Properties:
• Commutative: 10 * 0 = 0 * 10 = 0
• Works with any number type
• Result type depends on operands
• If one operand is float, result is float

Common uses:
• Reset calculations: total = 0
• Conditional logic: if count == 0: result = 0
• Mathematical formulas
• Initialization

Example: 10 * 0 returns 0 because any number multiplied by zero equals zero. This is a fundamental mathematical property that holds true for all numbers in Python.

Key Distinctions:
• Multiplication by zero annihilates: any finite number times zero is zero (int 0 here).
• Distinct from division by zero — multiplying by zero is always defined for ints.

How It Works:
• Repeated addition interpretation: zero copies of 10 sum to 0.

Step-by-Step Execution:
• 1. Multiply 10 * 0. 2. Yield 0.

Order of Operations:
• * binds before + - ; single multiplication here.

Common Use Cases:
• Resetting accumulators and clearing scaled quantities.

Edge Cases:
• float('inf') * 0 is nan in IEEE rules — not this int case.

Performance Considerations:
• Constant-time small-int multiply.

Examples:
• 0 * 10**9 -> 0.

Notes:
• Boolean multiplication uses int subclassing — True*10 -> 10 pedagogically odd but valid.`
  }),
  
  // 11-20: Math Functions
  (_i: number) => ({ 
    q: `What is abs(-5)?`, 
    o: ["5", "-5", "0", "Error"], 
    c: 0, 
    e: "abs() returns absolute value.",
    de: `The abs() function returns the absolute value of a number - its distance from zero on the number line, without regard to direction. For negative numbers, it returns the positive version. abs(-5) returns 5.

Absolute value:
• abs(-5) = 5 (removes negative sign)
• abs(5) = 5 (positive numbers unchanged)
• abs(0) = 0 (zero is zero)
• Always returns non-negative number

How it works:
• Calculates distance from zero
• Removes negative sign if present
• Positive numbers unchanged
• Returns non-negative result

Examples:
• abs(-5) = 5
• abs(5) = 5
• abs(-3.14) = 3.14
• abs(0) = 0

Mathematical definition:
• |x| = x if x ≥ 0
• |x| = -x if x < 0
• Distance from zero on number line

Common uses:
• Calculating distances
• Removing negative signs
• Comparing magnitudes
• Error handling (always positive)

Example: abs(-5) returns 5 because the absolute value of -5 is 5, representing its distance from zero regardless of direction.

Key Distinctions:
• abs returns the magnitude: distance from zero, always non-negative (or -0.0 for floats).
• abs(-5) is 5; abs(5) is also 5.

How It Works:
• For ints, abs delegates to sign handling without allocating a new object for small ints often.

Step-by-Step Execution:
• 1. Take numeric value -5. 2. Apply absolute value -> 5.

Order of Operations:
• Function call wraps a single unary expression.

Common Use Cases:
• Distances, tolerances, and normalizing signed deltas.

Edge Cases:
• abs raises on complex numbers in older expectations — complex abs returns magnitude float.

Performance Considerations:
• O(1) for int.

Examples:
• abs(0) -> 0; abs(-0.0) may show -0.0 sign quirks in floats.

Notes:
• math.fabs always returns float.`
  }),
  (_i: number) => ({ 
    q: `What is abs(5)?`, 
    o: ["5", "-5", "0", "Error"], 
    c: 0, 
    e: "abs() of positive number is itself.",
    de: `The abs() function returns the absolute value of a number. For positive numbers (or zero), the absolute value is the number itself. abs(5) returns 5 because 5 is already positive.

Absolute value of positive:
• abs(5) = 5 (positive numbers unchanged)
• abs(3.14) = 3.14 (positive floats unchanged)
• abs(0) = 0 (zero is zero)
• Positive numbers are their own absolute value

How it works:
• If number ≥ 0, returns number unchanged
• If number < 0, returns -number
• Always returns non-negative result

Examples:
• abs(5) = 5 (already positive)
• abs(10) = 10
• abs(3.14) = 3.14
• abs(0) = 0

Why this makes sense:
• Absolute value = distance from zero
• Distance from zero to 5 is 5
• Positive numbers don't change
• Negative numbers become positive

Common uses:
• Normalizing values
• Comparing magnitudes
• Distance calculations
• Always getting non-negative results

Example: abs(5) returns 5 because 5 is already positive, and the absolute value of a positive number is the number itself.

Key Distinctions:
• abs of a non-negative number returns the same value unchanged.
• abs(5) is 5 — identity on non-negative reals.

How It Works:
• Sign bit discarded only when negative; positive path is cheap.

Step-by-Step Execution:
• 1. Observe 5 >= 0. 2. Return 5.

Order of Operations:
• Single call.

Common Use Cases:
• Defensive coding when a value might be negative but often is not.

Edge Cases:
• NaN abs is still NaN for floats.

Performance Considerations:
• O(1).

Examples:
• min(abs(a), abs(b)) style comparisons.

Notes:
• For integers, abs never changes type.`
  }),
  (_i: number) => ({ 
    q: `What is round(3.49)?`, 
    o: ["3", "4", "3.49", "Error"], 
    c: 0, 
    e: "round() rounds .49 down to nearest integer.",
    de: `The round() function rounds a number to the nearest integer. When the decimal part is less than .5, it rounds down. round(3.49) rounds down to 3 because 0.49 < 0.5.

Rounding behavior:
• round(3.49) = 3 (rounds down, decimal < .5)
• round(3.51) = 4 (rounds up, decimal > .5)
• round(3.5) = 4 (banker's rounding - rounds to even)

How it works:
• If decimal part < .5, rounds down
• If decimal part > .5, rounds up
• If decimal part = .5, rounds to nearest even (banker's rounding)
• Returns integer (or float if rounding float)

Examples:
• round(3.49) = 3 (down)
• round(3.51) = 4 (up)
• round(3.5) = 4 (to even)
• round(2.5) = 2 (to even)

Banker's rounding:
• round(3.5) = 4 (rounds to even: 4)
• round(2.5) = 2 (rounds to even: 2)
• Avoids rounding bias
• Standard in Python

Common uses:
• Converting floats to integers
• Displaying rounded values
• Financial calculations
• Statistical rounding

Example: round(3.49) returns 3 because 0.49 is less than 0.5, so it rounds down to the nearest integer (3).

Key Distinctions:
• round(x) with one argument rounds to nearest int, ties to even (bankers rounding).
• 3.49 is closer to 3 than to 4, so result is 3.

How It Works:
• Binary float may not store 3.49 exactly — result still follows round rules on the actual float.

Step-by-Step Execution:
• 1. Load float near 3.49. 2. Round to nearest int -> 3.

Order of Operations:
• Function call; no mixed operators.

Common Use Cases:
• Displaying whole units while hiding noise decimals.

Edge Cases:
• Very large magnitudes: see round second argument for decimal places.

Performance Considerations:
• Rounding is small constant work.

Examples:
• round(2.5) -> 2 (tie to even).

Notes:
• For Decimal, use quantize for exact decimal rounding.`
  }),
  (_i: number) => ({ 
    q: `What is round(3.51)?`, 
    o: ["4", "3", "3.51", "Error"], 
    c: 0, 
    e: "round() rounds .51 up to nearest integer.",
    de: `The round() function rounds a number to the nearest integer. When the decimal part is greater than .5, it rounds up. round(3.51) rounds up to 4 because 0.51 > 0.5.

Rounding behavior:
• round(3.51) = 4 (rounds up, decimal > .5)
• round(3.49) = 3 (rounds down, decimal < .5)
• round(3.5) = 4 (banker's rounding - rounds to even)

How it works:
• If decimal part > .5, rounds up
• If decimal part < .5, rounds down
• If decimal part = .5, rounds to nearest even
• Returns integer

Examples:
• round(3.51) = 4 (up)
• round(3.99) = 4 (up)
• round(3.50) = 4 (to even)
• round(2.50) = 2 (to even)

Common uses:
• Converting floats to integers
• Displaying rounded values
• Financial calculations
• Statistical rounding

Example: round(3.51) returns 4 because 0.51 is greater than 0.5, so it rounds up to the nearest integer (4).

Key Distinctions:
• Values past the midpoint round away from zero toward the nearer integer — here toward 4.
• 3.51 rounds to 4 under nearest-int rules.

How It Works:
• Compare with 3.49 rounding to 3 to see directional bias before ties.

Step-by-Step Execution:
• 1. Nearest int to 3.51 is 4.

Order of Operations:
• Single round call.

Common Use Cases:
• Thresholding sensor readings to integer buckets.

Edge Cases:
• Exact halfway cases use tie-to-even; 3.5 is tie, 3.51 is not.

Performance Considerations:
• O(1).

Examples:
• round(-3.51) -> -4.

Notes:
• Two-argument round(x, ndigits) shifts rounding position.`
  }),
  (_i: number) => ({ 
    q: `What is round(3.5)?`, 
    o: ["4", "3", "3.5", "Error"], 
    c: 0, 
    e: "round() rounds .5 to nearest even (banker's rounding).",
    de: `The round() function uses "banker's rounding" (round half to even) when the decimal part is exactly .5. round(3.5) rounds to 4 because 4 is the nearest even number. This rounding method avoids statistical bias by rounding .5 to the nearest even number.

Banker's rounding:
• round(3.5) = 4 (rounds to even: 4)
• round(2.5) = 2 (rounds to even: 2)
• round(4.5) = 4 (rounds to even: 4)
• round(5.5) = 6 (rounds to even: 6)

How it works:
• If decimal part < .5, rounds down
• If decimal part > .5, rounds up
• If decimal part = .5, rounds to nearest even number
• This is "round half to even" or "IEEE 754" rounding

Why banker's rounding:
• Avoids systematic rounding bias
• More accurate in statistics
• Standard in financial calculations
• IEEE 754 standard

Examples:
• round(3.5) = 4 (even number)
• round(2.5) = 2 (even number)
• round(4.5) = 4 (even number)
• round(5.5) = 6 (even number)

Important note:
• This is different from traditional rounding
• Traditional: always round .5 up
• Banker's: round .5 to nearest even
• Python uses banker's rounding

Example: round(3.5) returns 4 because when rounding 0.5, Python rounds to the nearest even number. Since 3.5 is equidistant from 3 and 4, it chooses 4 (the even number).

Key Distinctions:
• Halfway between integers, round breaks ties to the nearest even integer.
• 3.5 rounds to 4 because 4 is even? Actually 3.5 is halfway: Python 3 rounds 3.5 to 4 (nearest even banker's rule).

How It Works:
• IEEE-style unbiased rounding reduces systematic bias in repeated half increments.

Step-by-Step Execution:
• 1. Detect tie at .5. 2. Choose even outcome — 3.5 -> 4.

Order of Operations:
• Unary round on one float.

Common Use Cases:
• Aggregated financial rounding sometimes uses Decimal instead.

Edge Cases:
• 2.5 rounds to 2 (even); 3.5 rounds to 4 (even).

Performance Considerations:
• O(1).

Examples:
• round(4.5) -> 4 (even).

Notes:
• Do not assume schoolhouse always-away-from-zero rules.`
  }),
  (_i: number) => ({ 
    q: `What is min(5, 10, 2)?`, 
    o: ["2", "5", "10", "Error"], 
    c: 0, 
    e: "min() finds the smallest value.",
    de: `The min() function returns the smallest value from the given arguments. It can take multiple arguments or an iterable. min(5, 10, 2) returns 2 because 2 is the smallest of the three numbers.

min() function:
• min(5, 10, 2) = 2 (smallest value)
• Can take multiple arguments
• Can take an iterable: min([5, 10, 2])
• Returns smallest value

How it works:
• Compares all arguments
• Returns the minimum value
• Works with numbers, strings, any comparable type
• Raises ValueError if empty iterable

Examples:
• min(5, 10, 2) = 2
• min(1, 2, 3) = 1
• min([5, 10, 2]) = 2
• min("a", "b", "c") = "a"

With iterable:
• min([1, 2, 3]) = 1
• min("hello") = "e" (lexicographically smallest)
• min([]) raises ValueError

Common uses:
• Finding minimum value
• Comparison operations
• Range checking
• Optimization problems

Example: min(5, 10, 2) returns 2 because among the values 5, 10, and 2, the smallest is 2.

Key Distinctions:
• min picks the smallest argument by standard comparison ordering.
• Among 5, 10, 2 the minimum is 2.

How It Works:
• Variadic min compares pairwise in linear scan (conceptually).

Step-by-Step Execution:
• 1. Compare elements. 2. Return 2.

Order of Operations:
• Function call with multiple positional args.

Common Use Cases:
• Clamping lower bounds, earliest values in small sets.

Edge Cases:
• min([]) raises ValueError; single-arg iterable form differs.

Performance Considerations:
• O(n) in number of arguments.

Examples:
• min([5,10,2]) same idea with iterable.

Notes:
• key= function customizes ordering (e.g., len for strings).`
  }),
  (_i: number) => ({ 
    q: `What is max(5, 10, 2)?`, 
    o: ["10", "5", "2", "Error"], 
    c: 0, 
    e: "max() finds the largest value.",
    de: `The max() function returns the largest value from the given arguments. It can take multiple arguments or an iterable. max(5, 10, 2) returns 10 because 10 is the largest of the three numbers.

max() function:
• max(5, 10, 2) = 10 (largest value)
• Can take multiple arguments
• Can take an iterable: max([5, 10, 2])
• Returns largest value

How it works:
• Compares all arguments
• Returns the maximum value
• Works with numbers, strings, any comparable type
• Raises ValueError if empty iterable

Examples:
• max(5, 10, 2) = 10
• max(1, 2, 3) = 3
• max([5, 10, 2]) = 10
• max("a", "b", "c") = "c"

With iterable:
• max([1, 2, 3]) = 3
• max("hello") = "o" (lexicographically largest)
• max([]) raises ValueError

Common uses:
• Finding maximum value
• Comparison operations
• Range checking
• Optimization problems

Example: max(5, 10, 2) returns 10 because among the values 5, 10, and 2, the largest is 10.

Key Distinctions:
• max returns the largest item by comparison ordering.
• Among 5, 10, 2 the maximum is 10.

How It Works:
• Linear scan over arguments or iterable.

Step-by-Step Execution:
• 1. Scan values. 2. Return 10.

Order of Operations:
• Single max call.

Common Use Cases:
• Upper caps, peak detection on tiny tuples.

Edge Cases:
• max([]) raises; NaN comparisons propagate odd ordering with floats.

Performance Considerations:
• O(n).

Examples:
• max('a','b') uses lexicographic str rules.

Notes:
• default= only for iterable form when empty.`
  }),
  (_i: number) => ({ 
    q: `What is pow(3, 2)?`, 
    o: ["9", "6", "27", "0"], 
    c: 0, 
    e: "pow(a, b) is equivalent to a**b.",
    de: `The pow() function is Python's built-in function for exponentiation. pow(3, 2) calculates 3 to the power of 2, which equals 9. It's equivalent to using the ** operator: pow(3, 2) = 3 ** 2 = 9.

pow() function:
• pow(3, 2) = 9 (3 to the power of 2)
• Equivalent to 3 ** 2
• pow(base, exponent) = base ** exponent
• Returns int if operands are ints

How it works:
• Calculates base raised to exponent
• pow(3, 2) = 3 × 3 = 9
• pow(2, 3) = 2 × 2 × 2 = 8
• Works with floats too: pow(2.5, 2) = 6.25

Examples:
• pow(3, 2) = 9
• pow(2, 3) = 8
• pow(5, 0) = 1 (any number to power 0)
• pow(10, 2) = 100

With third argument (modulo):
• pow(2, 3, 5) = (2 ** 3) % 5 = 8 % 5 = 3
• More efficient for large numbers
• Computes (base ** exponent) % modulus

Comparison with **:
• pow(3, 2) = 9, 3 ** 2 = 9 (same result)
• pow() is a function, ** is an operator
• Both work, ** is more common in Python

Example: pow(3, 2) returns 9 because 3 raised to the power of 2 equals 3 × 3 = 9. This is equivalent to 3 ** 2.

Key Distinctions:
• pow(x, y) is exponentiation, like x ** y for two arguments.
• 3 squared is 9.

How It Works:
• Built-in pow can take a third modulus argument for modular exponentiation.

Step-by-Step Execution:
• 1. Compute 3 ** 2. 2. Return 9.

Order of Operations:
• Function call; exponent evaluated after bases.

Common Use Cases:
• Crypto and modular math use three-arg pow heavily.

Edge Cases:
• pow(0,0) is 1 in Python.

Performance Considerations:
• Three-arg pow uses fast modular algorithm for large numbers.

Examples:
• pow(2,10) -> 1024.

Notes:
• math.pow always returns float — different from built-in pow.`
  }),
  (_i: number) => ({ 
    q: `What is pow(2, 3, 5)?`, 
    o: ["3", "8", "0", "Error"], 
    c: 0, 
    e: "pow(x, y, z) is (x**y) % z.",
    de: `The pow() function can take a third argument for modular exponentiation. pow(2, 3, 5) calculates (2 ** 3) % 5, which equals 8 % 5 = 3. This is more efficient than computing 2 ** 3 first, then taking the modulo.

Modular exponentiation:
• pow(2, 3, 5) = (2 ** 3) % 5 = 8 % 5 = 3
• Third argument is the modulus
• More efficient for large numbers
• Computes (base ** exponent) % modulus directly

How it works:
• Calculates base ** exponent
• Takes result modulo modulus
• More efficient than separate operations
• Useful for cryptography and large numbers

Step-by-step:
• pow(2, 3, 5)
• First: 2 ** 3 = 8
• Then: 8 % 5 = 3
• Result: 3

Why use third argument:
• More efficient for large exponents
• Avoids intermediate large numbers
• Important for cryptography
• Prevents overflow issues

Examples:
• pow(2, 3, 5) = 3
• pow(3, 4, 7) = (3 ** 4) % 7 = 81 % 7 = 4
• pow(5, 2, 10) = (5 ** 2) % 10 = 25 % 10 = 5

Common uses:
• Cryptography (RSA, etc.)
• Large number calculations
• Efficient modulo arithmetic
• Preventing overflow

Example: pow(2, 3, 5) returns 3 because it calculates (2 ** 3) % 5 = 8 % 5 = 3. This is more efficient than computing 2 ** 3 separately, especially for large exponents.

Key Distinctions:
• Three-argument pow computes (2 ** 3) % 5 efficiently without huge intermediates.
• 8 % 5 is 3 — the modular result.

How It Works:
• Pow mod uses repeated squaring modulo m for performance and size control.

Step-by-Step Execution:
• 1. Compute 2**3 mod 5 via modular ladder. 2. Result 3.

Order of Operations:
• All args evaluated before pow; modulus must be positive for defined behavior.

Common Use Cases:
• RSA and competitive programming exponent-mod tasks.

Edge Cases:
• Modulus 1 yields 0 for bases; modulus 0 is error.

Performance Considerations:
• Sub-quadratic in exponent bits for three-arg form.

Examples:
• pow(a, b, m) when m given requires int a,b,m conventions.

Notes:
• Prefer three-arg pow over (a**b)%m for huge b.`
  }),
  (_i: number) => ({ 
    q: `What is sum([1, 2, 3])?`, 
    o: ["6", "0", "Error", "None"], 
    c: 0, 
    e: "sum() adds all numbers in iterable.",
    de: `The sum() function adds all numbers in an iterable (like a list) and returns the total. sum([1, 2, 3]) adds 1 + 2 + 3, which equals 6. It's Python's built-in way to sum a collection of numbers.

sum() function:
• sum([1, 2, 3]) = 6 (adds all elements)
• Takes an iterable of numbers
• Returns total sum
• Can take optional start value

How it works:
• Iterates through iterable
• Adds all numbers together
• Returns total sum
• sum(iterable, start) starts with start value

Examples:
• sum([1, 2, 3]) = 6
• sum([10, 20, 30]) = 60
• sum([]) = 0 (empty list)
• sum([1, 2, 3], 10) = 16 (starts with 10)

With start value:
• sum([1, 2, 3], 10) = 16 (starts with 10, then adds 1+2+3)
• sum([], 5) = 5 (empty list with start value)
• Default start is 0

Common uses:
• Adding list of numbers
• Calculating totals
• Summing numeric collections
• Statistical calculations

Important:
• Elements must be numbers
• sum(["a", "b"]) raises TypeError
• For strings, use "".join()

Example: sum([1, 2, 3]) returns 6 because it adds all elements in the list: 1 + 2 + 3 = 6. This is Python's efficient way to sum numeric collections.

Key Distinctions:
• sum adds numeric items of an iterable, starting from 0 by default.
• 1+2+3 is 6.

How It Works:
• Optional start argument changes the accumulator base (not used here).

Step-by-Step Execution:
• 1. Iterate 1,2,3. 2. Accumulate to 6.

Order of Operations:
• sum is a built-in; inner list literal built first.

Common Use Cases:
• Totals, averages after dividing by len.

Edge Cases:
• sum of strings raises — use str.join; sum of empty is 0.

Performance Considerations:
• O(n) in list length.

Examples:
• sum(range(5)) -> 10.

Notes:
• For floats, accumulation error can drift — use math.fsum for stability.`
  }),
  
  // 21-30: More Math Functions
  (_i: number) => ({ 
    q: `What is divmod(10, 3)?`, 
    o: ["(3, 1)", "3.33", "Error", "None"], 
    c: 0, 
    e: "divmod() returns (quotient, remainder).",
    de: `The divmod() function returns a tuple containing both the quotient and remainder of division. It's equivalent to performing floor division and modulo operations together. divmod(10, 3) returns (3, 1) because 10 // 3 = 3 and 10 % 3 = 1.

divmod() function:
• divmod(10, 3) = (3, 1) (quotient, remainder)
• Returns tuple (quotient, remainder)
• Equivalent to (a // b, a % b)
• More efficient than separate operations

How it works:
• Calculates floor division: 10 // 3 = 3
• Calculates modulo: 10 % 3 = 1
• Returns tuple: (3, 1)
• More efficient than doing both separately

Examples:
• divmod(10, 3) = (3, 1)
• divmod(20, 4) = (5, 0) (no remainder)
• divmod(15, 4) = (3, 3)
• divmod(7, 2) = (3, 1)

Equivalent operations:
• divmod(10, 3) = (10 // 3, 10 % 3) = (3, 1)
• Does both operations in one call
• More efficient for large numbers

Common uses:
• Getting both quotient and remainder
• Time calculations (hours, minutes)
• Base conversion
• Efficient division operations

Unpacking:
• quotient, remainder = divmod(10, 3)
• quotient = 3, remainder = 1
• Useful for extracting both values

Example: divmod(10, 3) returns (3, 1) because when dividing 10 by 3, you get a quotient of 3 and a remainder of 1. This is more efficient than calculating // and % separately.

Key Distinctions:
• divmod(a, b) returns (a // b, a % b) as a tuple pair consistent with Python floor division.
• 10 // 3 is 3 and 10 % 3 is 1, so divmod -> (3, 1).

How It Works:
• Single call avoids repeating divisor for both operations.

Step-by-Step Execution:
• 1. Floor divide. 2. Modulo. 3. Pack tuple.

Order of Operations:
• Built-in function call.

Common Use Cases:
• Clock arithmetic and splitting quantities into quotient+remainder.

Edge Cases:
• Negative operands follow // and % pairing rules.

Performance Considerations:
• O(1) for ints.

Examples:
• unpack: q, r = divmod(10,3).

Notes:
• For floats, divmod returns floats.`
  }),
  (_i: number) => ({ 
    q: `What is sorted([3, 1, 2])?`, 
    o: ["[1, 2, 3]", "[3, 1, 2]", "Error", "None"], 
    c: 0, 
    e: "sorted() returns sorted list.",
    de: `The sorted() function returns a new sorted list from the items in an iterable. It doesn't modify the original list - it creates a new sorted copy. sorted([3, 1, 2]) returns [1, 2, 3], sorted in ascending order.

sorted() function:
• sorted([3, 1, 2]) = [1, 2, 3] (sorted ascending)
• Returns new sorted list
• Original list unchanged (not modified)
• Works with any iterable

How it works:
• Creates new list from iterable
• Sorts elements in ascending order (default)
• Returns sorted list
• Original remains unchanged

Examples:
• sorted([3, 1, 2]) = [1, 2, 3]
• sorted([5, 2, 8, 1]) = [1, 2, 5, 8]
• sorted("hello") = ['e', 'h', 'l', 'l', 'o']
• sorted((3, 1, 2)) = [1, 2, 3] (works with tuples)

Comparison with .sort():
• sorted([3, 1, 2]) = [1, 2, 3] (new list)
• [3, 1, 2].sort() = None (modifies original)
• sorted() returns value, .sort() modifies in-place

Common uses:
• Sorting lists without modifying original
• Sorting any iterable (strings, tuples)
• Creating sorted copies
• Functional programming style

Example: sorted([3, 1, 2]) returns [1, 2, 3] because it creates a new list sorted in ascending order. The original list [3, 1, 2] remains unchanged.

Key Distinctions:
• sorted returns a new list, leaving the original iterable untouched.
• Default ascending sort: [1, 2, 3].

How It Works:
• Timsort algorithm: O(n log n) worst case, adaptive to runs.

Step-by-Step Execution:
• 1. Copy elements. 2. Sort. 3. Return new list.

Order of Operations:
• sorted() builds list from iterable then sorts.

Common Use Cases:
• Display order, ranking without mutating source data.

Edge Cases:
• Key functions and reverse flag customize order; stable sort preserves equal-key order.

Performance Considerations:
• O(n log n) typical.

Examples:
• sorted([3,1,2], reverse=True) flips order.

Notes:
• list.sort sorts in place and returns None.`
  }),
  (_i: number) => ({ 
    q: `What is sorted([3, 1, 2], reverse=True)?`, 
    o: ["[3, 2, 1]", "[1, 2, 3]", "Error", "None"], 
    c: 0, 
    e: "reverse=True sorts descending.",
    de: `The sorted() function accepts a reverse parameter. When reverse=True, it sorts the iterable in descending order (largest to smallest). sorted([3, 1, 2], reverse=True) returns [3, 2, 1], sorted from largest to smallest.

sorted() with reverse:
• sorted([3, 1, 2], reverse=True) = [3, 2, 1] (descending)
• reverse=True sorts largest to smallest
• Returns new sorted list
• Original unchanged

How it works:
• Creates new list from iterable
• Sorts in descending order (reverse=True)
• Returns sorted list (largest to smallest)
• Original remains unchanged

Examples:
• sorted([3, 1, 2], reverse=True) = [3, 2, 1]
• sorted([5, 2, 8, 1], reverse=True) = [8, 5, 2, 1]
• sorted("hello", reverse=True) = ['o', 'l', 'l', 'h', 'e']
• sorted([3, 1, 2], reverse=False) = [1, 2, 3] (default)

Default behavior:
• reverse=False (default) → ascending order
• reverse=True → descending order
• Can also use: sorted([3, 1, 2])[::-1] for descending

Common uses:
• Sorting from largest to smallest
• Finding top N items
• Reverse ordering
• Descending sorts

Example: sorted([3, 1, 2], reverse=True) returns [3, 2, 1] because it sorts the list in descending order (largest to smallest) when reverse=True is specified.

Key Distinctions:
• reverse=True sorts descending: largest elements first.
• [3, 1, 2] becomes [3, 2, 1].

How It Works:
• Stable sort still applies among equal keys.

Step-by-Step Execution:
• 1. Sort ascending logic internally then reverse output or sort with reversed comparator.

Order of Operations:
• Keyword argument evaluated with sorted call.

Common Use Cases:
• Leaderboards and top-k style presentations.

Edge Cases:
• key=abs with reverse for magnitude ordering puzzles.

Performance Considerations:
• Same asymptotic cost as ascending sort.

Examples:
• sorted(x, reverse=True) does not mutate x.

Notes:
• reversed(sorted(x)) differs if you need iterator laziness.`
  }),
  (_i: number) => ({ 
    q: `What is 5 ** 0?`, 
    o: ["1", "0", "5", "Error"], 
    c: 0, 
    e: "Any number to power 0 is 1.",
    de: `Any number raised to the power of 0 equals 1. This is a fundamental mathematical property. 5 ** 0 equals 1, just like any other non-zero number raised to power 0. This is true for all numbers (positive, negative, integers, floats).

Power of zero rule:
• 5 ** 0 = 1 (any number to power 0)
• 10 ** 0 = 1
• -5 ** 0 = 1
• 3.14 ** 0 = 1.0

How it works:
• Mathematically: x^0 = 1 (for any x ≠ 0)
• Fundamental property of exponents
• Consistent across all number types
• Works with integers and floats

Mathematical reasoning:
• x^a / x^a = x^(a-a) = x^0
• x^a / x^a = 1
• Therefore: x^0 = 1

Examples:
• 5 ** 0 = 1
• 100 ** 0 = 1
• -5 ** 0 = 1
• 0.5 ** 0 = 1.0

Special case:
• 0 ** 0 is undefined (some systems return 1, Python raises error)

Common uses:
• Base conversion formulas
• Mathematical expressions
• Power series
• Exponential functions

Example: 5 ** 0 returns 1 because any non-zero number raised to the power of 0 equals 1. This is a fundamental mathematical property.

Key Distinctions:
• Any non-zero number to the power 0 is 1 in Python integers; 5**0 is 1.
• 0**0 is defined as 1 in Python (convention for empty product).

How It Works:
• Exponentiation by squaring fast path handles zero exponent.

Step-by-Step Execution:
• 1. Recognize exponent 0. 2. Return 1.

Order of Operations:
• ** tighter than unary operators in composition.

Common Use Cases:
• Bit shifts and combinatorial formulas resetting terms.

Edge Cases:
• Very large base with exponent 0 still 1.

Performance Considerations:
• O(1) for small ints.

Examples:
• pow(9, 0) -> 1.

Notes:
• In math proofs, 0**0 is indeterminate — Python fixes it to 1.`
  }),
  (_i: number) => ({ 
    q: `What is 0 ** 5?`, 
    o: ["0", "1", "Error", "None"], 
    c: 0, 
    e: "0 to any power is 0.",
    de: `Zero raised to any positive power equals zero. This is because zero multiplied by itself any number of times is still zero. 0 ** 5 equals 0, just like 0 ** 1, 0 ** 10, etc. However, 0 ** 0 is undefined.

Zero to positive power:
• 0 ** 5 = 0 (zero to any positive power)
• 0 ** 1 = 0
• 0 ** 10 = 0
• Always zero for positive exponents

How it works:
• Zero multiplied by itself = zero
• 0 × 0 × 0 × 0 × 0 = 0
• For any positive exponent, result is 0
• Only exception: 0 ** 0 is undefined

Examples:
• 0 ** 5 = 0
• 0 ** 1 = 0
• 0 ** 100 = 0
• 0 ** 0 raises ValueError (undefined)

Special cases:
• 0 ** 0: Undefined (raises ValueError in Python)
• 0 ** positive: 0
• 0 ** negative: ZeroDivisionError (division by zero)

Common uses:
• Mathematical formulas
• Edge case handling
• Power calculations
• Polynomial evaluations

Important:
• 0 ** 0 is undefined mathematically
• Python raises ValueError for 0 ** 0
• 0 ** positive integer = 0
• 0 ** negative = error (division by zero)

Example: 0 ** 5 returns 0 because zero raised to any positive power equals zero. Zero multiplied by itself any number of times is still zero.

Key Distinctions:
• Zero to a positive integer power is zero: repeated multiplication of zeros.
• 0 ** 5 is 0.

How It Works:
• For positive exponents, 0**n is 0; 0**0 special-cased to 1.

Step-by-Step Execution:
• 1. Multiply zero by itself conceptually five times -> 0.

Order of Operations:
• Right operand positive int.

Common Use Cases:
• Zeroing exponential decay models at the origin.

Edge Cases:
• 0**negative raises ZeroDivisionError in spirit (actually raises in Python).

Performance Considerations:
• O(1).

Examples:
• 0**1 -> 0.

Notes:
• Distinguish limits in calculus from discrete Python ints.`
  }),
  (_i: number) => ({ 
    q: `What is 1 ** 100?`, 
    o: ["1", "100", "0", "Error"], 
    c: 0, 
    e: "1 to any power is 1.",
    de: `One raised to any power equals one. This is because one multiplied by itself any number of times is still one. 1 ** 100 equals 1, just like 1 ** 1, 1 ** 1000, etc. This is true for any exponent (positive, negative, zero, fraction).

One to any power:
• 1 ** 100 = 1 (one to any power)
• 1 ** 1 = 1
• 1 ** 0 = 1
• 1 ** -5 = 1
• Always one

How it works:
• One multiplied by itself = one
• 1 × 1 × 1 × ... × 1 = 1
• For any exponent, result is 1
• Works with any number type

Examples:
• 1 ** 100 = 1
• 1 ** 0 = 1
• 1 ** -5 = 1
• 1.0 ** 100 = 1.0

Mathematical property:
• 1^n = 1 for any n
• Multiplicative identity
• One is its own power
• Fundamental property

Common uses:
• Base cases in algorithms
• Mathematical proofs
• Identity operations
• Edge case handling

Example: 1 ** 100 returns 1 because one raised to any power equals one. No matter how many times you multiply 1 by itself, the result is always 1.

Key Distinctions:
• One raised to any finite power remains one — multiplicative identity.
• 1 ** 100 is 1.

How It Works:
• Exponentiation still runs but optimizes quickly for bases 0,1,-1 in practice.

Step-by-Step Execution:
• 1. Any count of multiplying ones stays 1.

Order of Operations:
• All ** here is constant folding friendly.

Common Use Cases:
• Trivial exponents in expanded polynomials.

Edge Cases:
• 1**inf is 1 in sympy-like reasoning; Python ints stay finite here.

Performance Considerations:
• Fast for exponent 100.

Examples:
• (-1)**even vs odd flips sign — contrast with base 1.

Notes:
• Use pow(1,n, m) in crypto for no-op steps carefully.`
  }),
  (_i: number) => ({ 
    q: `What is 5 ** 1?`, 
    o: ["5", "1", "0", "Error"], 
    c: 0, 
    e: "Any number to power 1 is itself.",
    de: `Any number raised to the power of 1 equals the number itself. This is because raising to the power of 1 means using the number once. 5 ** 1 equals 5, just like any other number raised to power 1 equals itself.

Power of one rule:
• 5 ** 1 = 5 (number to power 1)
• 10 ** 1 = 10
• 3.14 ** 1 = 3.14
• Any number ** 1 = itself

How it works:
• Raising to power 1 means using number once
• x^1 = x (for any x)
• Fundamental property of exponents
• Works with all number types

Mathematical reasoning:
• Exponent 1 means "multiply once"
• x^1 = x × 1 = x
• Identity property of exponentiation

Examples:
• 5 ** 1 = 5
• 100 ** 1 = 100
• -5 ** 1 = -5
• 0.5 ** 1 = 0.5

Common uses:
• Identity operations
• Base cases
• Mathematical formulas
• Simplifying expressions

Example: 5 ** 1 returns 5 because any number raised to the power of 1 equals the number itself. This is the identity property of exponentiation.

Key Distinctions:
• Any number to the first power is itself.
• 5 ** 1 is 5.

How It Works:
• Exponent 1 is the identity exponent in multiplicative group sense for positives.

Step-by-Step Execution:
• 1. Parse 5**1. 2. Return 5.

Order of Operations:
• Single ** operation.

Common Use Cases:
• Dimensional analysis keeping a quantity unchanged.

Edge Cases:
• 5**-1 is rational 1/5 in floats, or Fraction.

Performance Considerations:
• O(1).

Examples:
• x**1 is x for int x.

Notes:
• Contrast with x*1 which is also x but different operation class.`
  }),
  (_i: number) => ({ 
    q: `What is 5 % 5?`, 
    o: ["0", "5", "1", "Error"], 
    c: 0, 
    e: "Modulo returns remainder - same number gives 0.",
    de: `The modulo operator (%) returns the remainder after division. When you divide a number by itself, there's no remainder because it divides evenly. 5 % 5 equals 0 because 5 divided by 5 equals 1 with no remainder.

Modulo with same number:
• 5 % 5 = 0 (no remainder when dividing by itself)
• 10 % 10 = 0
• Any number % itself = 0
• Divides evenly

How it works:
• 5 ÷ 5 = 1 with remainder 0
• When dividend equals divisor, remainder is 0
• Divides evenly (no remainder)
• Always 0 for same number

Examples:
• 5 % 5 = 0
• 10 % 10 = 0
• 100 % 100 = 0
• 3.14 % 3.14 = 0.0 (for floats)

Mathematical property:
• a % a = 0 (for any a ≠ 0)
• When numbers are equal, no remainder
• Useful for checking divisibility

Common uses:
• Checking if number divides evenly: n % n == 0
• Checking if divisible: n % d == 0
• Resetting counters
• Wrapping values

Example: 5 % 5 returns 0 because when you divide 5 by 5, you get 1 with no remainder. This property is useful for checking if numbers divide evenly.

Key Distinctions:
• When divisor divides dividend evenly, remainder is zero.
• 5 % 5 is 0 — divisibility test pattern.

How It Works:
• Matches 5 // 5 == 1 and 1*5 + 0 == 5.

Step-by-Step Execution:
• 1. 5 // 5 -> 1. 2. Remainder 0.

Order of Operations:
• % with same left and right non-zero small ints.

Common Use Cases:
• Checking multiples and column alignment in grids.

Edge Cases:
• 0 % n is 0 for non-zero n.

Performance Considerations:
• O(1).

Examples:
• n % n -> 0 for non-zero n.

Notes:
• Use a % b == 0 for divisibility.`
  }),
  (_i: number) => ({ 
    q: `What is 5 % 3?`, 
    o: ["2", "1", "0", "Error"], 
    c: 0, 
    e: "5 divided by 3 gives remainder 2.",
    de: `The modulo operator (%) returns the remainder after division. When you divide 5 by 3, you get 1 group of 3 with 2 left over. That remainder (2) is what the modulo operator returns. 5 % 3 equals 2.

Modulo operation:
• 5 % 3 = 2 (remainder when 5 divided by 3)
• 5 ÷ 3 = 1 with remainder 2
• Returns what's left after division
• Useful for many programming tasks

How it works:
• Divide first number by second
• Return the remainder after division
• 5 % 3: 5 ÷ 3 = 1 remainder 2, so 5 % 3 = 2
• Works with floats too: 5.5 % 3 = 2.5

Step-by-step:
• 5 ÷ 3 = 1.666...
• 1 × 3 = 3
• 5 - 3 = 2 (remainder)
• Result: 2

Common uses:
• Checking even/odd: n % 2 (0 = even, 1 = odd)
• Wrapping values: index % length
• Finding divisors: n % d == 0
• Time calculations: seconds % 60

Example: 5 % 3 returns 2 because when you divide 5 by 3, you get 1 group of 3 with 2 remaining. This is the remainder after division.

Key Distinctions:
• Remainder after dividing 5 by 3 using floor division toward -inf.
• 5 % 3 is 2.

How It Works:
• Pair: 5 // 3 is 1, 1*3 + 2 == 5.

Step-by-Step Execution:
• 1. Floor divide. 2. Subtract product from 5.

Order of Operations:
• Single % operation.

Common Use Cases:
• Odd/even via n % 2.

Edge Cases:
• Negative dividend: sign of % follows Python pairing rule.

Performance Considerations:
• O(1).

Examples:
• 6 % 3 -> 0.

Notes:
• math.gcd uses modulo internally.`
  }),
  (_i: number) => ({ 
    q: `What is 3 % 5?`, 
    o: ["3", "2", "0", "Error"], 
    c: 0, 
    e: "3 divided by 5 gives remainder 3 (3 < 5).",
    de: `The modulo operator (%) returns the remainder after division. When the dividend (first number) is smaller than the divisor (second number), the dividend itself is the remainder because it can't be divided. 3 % 5 equals 3 because 3 < 5, so 3 remains as the remainder.

Modulo when dividend < divisor:
• 3 % 5 = 3 (dividend smaller than divisor)
• 3 ÷ 5 = 0 with remainder 3
• When dividend < divisor, remainder = dividend
• Cannot divide, so dividend remains

How it works:
• 3 ÷ 5 = 0.6 (decimal) or 0 remainder 3 (integer division)
• Since 3 < 5, no complete division possible
• 0 groups of 5 fit in 3
• Remainder is 3 (the dividend itself)

Examples:
• 3 % 5 = 3 (3 < 5)
• 2 % 10 = 2 (2 < 10)
• 1 % 100 = 1 (1 < 100)
• 4 % 7 = 4 (4 < 7)

Mathematical property:
• If a < b, then a % b = a
• When dividend is smaller, it can't be divided
• Remainder equals dividend
• Useful for wrapping small values

Common uses:
• Wrapping small values
• Ensuring values stay in range
• Modular arithmetic
• Circular indexing

Example: 3 % 5 returns 3 because 3 is smaller than 5, so it can't be divided. When the dividend is less than the divisor, the modulo operation returns the dividend itself as the remainder.

Key Distinctions:
• When dividend is smaller than positive divisor, a % b is simply a (the whole number fits zero times with remainder a).
• 3 % 5 is 3.

How It Works:
• Floor division gives 0, remainder is the original small positive numerator.

Step-by-Step Execution:
• 1. 3 // 5 -> 0. 2. Remainder 3.

Order of Operations:
• Single modulo.

Common Use Cases:
• Normalizing angles to [0, m) before adjustment.

Edge Cases:
• Negative a still follows floor pairing — learn the table.

Performance Considerations:
• O(1).

Examples:
• 2 % 7 -> 2.

Notes:
• For always-positive mod use a % m adjusted formula in crypto.`
  }),
  
  // 31-40: Order of Operations (PEMDAS)
  (_i: number) => ({ 
    q: `What is 2 * 3 + 4?`, 
    o: ["10", "14", "18", "Error"], 
    c: 0, 
    e: "Multiplication before addition (PEMDAS).",
    de: `Python follows the order of operations (PEMDAS). Multiplication has higher precedence than addition, so 2 * 3 is calculated first (equals 6), then 6 + 4 equals 10.

PEMDAS order:
• 2 * 3 + 4
• First: 2 * 3 = 6 (multiplication first)
• Then: 6 + 4 = 10 (addition second)
• Result: 10

Operator precedence:
• ** (exponentiation) - highest
• *, /, //, % (multiplication, division) - medium-high
• +, - (addition, subtraction) - medium
• Parentheses override precedence

Common mistake:
• 2 * 3 + 4 ≠ (2 * 3) + 4 = 10 (correct)
• Not 2 * (3 + 4) = 14 (wrong order)

Example: 2 * 3 + 4 evaluates to 10 because multiplication (2 * 3 = 6) happens before addition (6 + 4 = 10), following PEMDAS rules.

Key Distinctions:
• Multiplication before addition: 2*3 is 6, then 6+4 is 10.
• Not 2 * (3+4) unless parentheses say so.

How It Works:
• Precedence table governs implicit grouping.

Step-by-Step Execution:
• 1. 2*3 -> 6. 2. 6+4 -> 10.

Order of Operations:
• * before +.

Common Use Cases:
• Polynomial evaluation patterns.

Edge Cases:
• Float rounding only matters with floats.

Performance Considerations:
• O(1).

Examples:
• 2 + 3 * 4 -> 14.

Notes:
• Whitespace never changes precedence.`
  }),
  (_i: number) => ({ 
    q: `What is 2 + 3 * 4?`, 
    o: ["14", "20", "24", "Error"], 
    c: 0, 
    e: "Multiplication before addition.",
    de: `Multiplication has higher precedence than addition in Python's order of operations. 2 + 3 * 4 calculates 3 * 4 first (equals 12), then 2 + 12 equals 14.

Order of operations:
• 2 + 3 * 4
• First: 3 * 4 = 12 (multiplication first)
• Then: 2 + 12 = 14 (addition second)
• Result: 14

PEMDAS rule:
• Multiplication (M) before Addition (A)
• 2 + 3 * 4 ≠ (2 + 3) * 4 = 20
• Must follow operator precedence

Example: 2 + 3 * 4 evaluates to 14 because multiplication (3 * 4 = 12) happens before addition (2 + 12 = 14).

Key Distinctions:
• 3*4 happens first -> 12, then 2+12 -> 14.
• Addition does not bind before multiplication.

How It Works:
• Same precedence family as prior question with operands permuted.

Step-by-Step Execution:
• 1. 3*4=12. 2. 2+12=14.

Order of Operations:
• * before +.

Common Use Cases:
• Teaching order of operations drills.

Edge Cases:
• Mix ** with care — ** tighter than *.

Performance Considerations:
• O(1).

Examples:
• Compare (2+3)*4 -> 20.

Notes:
• Use explicit parens in money code when mixing ops.`
  }),
  (_i: number) => ({ 
    q: `What is (2 + 3) * 4?`, 
    o: ["20", "14", "24", "Error"], 
    c: 0, 
    e: "Parentheses change order - addition first.",
    de: `Parentheses override the normal order of operations. (2 + 3) * 4 calculates 2 + 3 first (equals 5), then 5 * 4 equals 20.

Parentheses precedence:
• (2 + 3) * 4
• First: (2 + 3) = 5 (parentheses first)
• Then: 5 * 4 = 20 (multiplication)
• Result: 20

Without parentheses:
• 2 + 3 * 4 = 2 + 12 = 14 (multiplication first)
• Parentheses change the result!

Example: (2 + 3) * 4 evaluates to 20 because parentheses force addition first (2 + 3 = 5), then multiplication (5 * 4 = 20).

Key Distinctions:
• Parentheses sum first: 2+3 is 5, then 5*4 is 20.
• Different from 2 + 3 * 4 without parens.

How It Works:
• Inner addition yields single factor for multiplication.

Step-by-Step Execution:
• 1. 2+3 -> 5. 2. 5*4 -> 20.

Order of Operations:
• Paren expr then *.

Common Use Cases:
• Scaling a summed offset.

Edge Cases:
• Floating errors if inner values are floats.

Performance Considerations:
• O(1).

Examples:
• Distributive law links (a+b)*c to a*c + b*c.

Notes:
• Symbolic algebra reorder differs from float rounding.`
  }),
  (_i: number) => ({ 
    q: `What is 2 ** 3 + 4?`, 
    o: ["12", "18", "24", "Error"], 
    c: 0, 
    e: "Exponentiation before addition.",
    de: `Exponentiation has higher precedence than addition. 2 ** 3 + 4 calculates 2 ** 3 first (equals 8), then 8 + 4 equals 12.

Order of operations:
• 2 ** 3 + 4
• First: 2 ** 3 = 8 (exponentiation first)
• Then: 8 + 4 = 12 (addition second)
• Result: 12

PEMDAS:
• Exponents (E) before Addition (A)
• ** has highest precedence (except parentheses)

Example: 2 ** 3 + 4 evaluates to 12 because exponentiation (2 ** 3 = 8) happens before addition (8 + 4 = 12).

Key Distinctions:
• ** binds tighter than + : compute 2**3=8 first, then 8+4=12.
• Not 2 ** (3+4).

How It Works:
• Exponentiation ranks above additive operators.

Step-by-Step Execution:
• 1. 2**3 -> 8. 2. +4 -> 12.

Order of Operations:
• ** then +.

Common Use Cases:
• Mixed exponential and linear terms in formulas.

Edge Cases:
• Unary minus interaction: -2**2 is -(2**2).

Performance Considerations:
• O(1) for small ints.

Examples:
• 2 + 2**3 -> 10.

Notes:
• Add parens when you mean (2**3)+4 vs 2**(3+4).`
  }),
  (_i: number) => ({ 
    q: `What is 2 + 3 ** 4?`, 
    o: ["83", "20", "1296", "Error"], 
    c: 0, 
    e: "Exponentiation before addition: 2 + 81 = 83.",
    de: `Exponentiation has higher precedence than addition. 2 + 3 ** 4 calculates 3 ** 4 first (equals 81), then 2 + 81 equals 83.

Order of operations:
• 2 + 3 ** 4
• First: 3 ** 4 = 81 (exponentiation first)
• Then: 2 + 81 = 83 (addition second)
• Result: 83

Step-by-step:
• 3 ** 4 = 3 × 3 × 3 × 3 = 81
• 2 + 81 = 83

Example: 2 + 3 ** 4 evaluates to 83 because exponentiation (3 ** 4 = 81) happens before addition (2 + 81 = 83).

Key Distinctions:
• Exponent evaluated first: 3**4 = 81, then 2 + 81 = 83.
• Addition waits for the power result.

How It Works:
• Demonstrates ** over + without parentheses.

Step-by-Step Execution:
• 1. 3**4 -> 81. 2. 2+81 -> 83.

Order of Operations:
• ** before +.

Common Use Cases:
• Polynomial with dominant high-degree term numerically.

Edge Cases:
• Huge powers overflow time/memory if base and exp grow.

Performance Considerations:
• O(1) here.

Examples:
• Compare (2+3)**4 -> 625.

Notes:
• For floats, overflow to inf possible.`
  }),
  (_i: number) => ({ 
    q: `What is (2 + 3) ** 4?`, 
    o: ["625", "83", "20", "Error"], 
    c: 0, 
    e: "Parentheses first, then exponentiation: 5**4 = 625.",
    de: `Parentheses override normal precedence. (2 + 3) ** 4 calculates 2 + 3 first (equals 5), then 5 ** 4 equals 625.

Parentheses precedence:
• (2 + 3) ** 4
• First: (2 + 3) = 5 (parentheses first)
• Then: 5 ** 4 = 625 (exponentiation)
• Result: 625

Step-by-step:
• 2 + 3 = 5
• 5 ** 4 = 5 × 5 × 5 × 5 = 625

Example: (2 + 3) ** 4 evaluates to 625 because parentheses force addition first (2 + 3 = 5), then exponentiation (5 ** 4 = 625).

Key Distinctions:
• Parentheses force addition before exponentiation: (2+3)=5, then 5**4.
• 5**4 = 625.

How It Works:
• Contrast with 2 + 3**4 which is much smaller in the prior question.

Step-by-Step Execution:
• 1. Inner sum 5. 2. 5**4 -> 625.

Order of Operations:
• Paren then **.

Common Use Cases:
• Binomial expansions at high level conceptually.

Edge Cases:
• Negative base with odd/even exponent sign patterns.

Performance Considerations:
• Pow grows quickly — 625 here.

Examples:
• (a+b)**2 expands differently than a**2 + b**2.

Notes:
• Exact integer ** for modest sizes is fine.`
  }),
  (_i: number) => ({ 
    q: `What is 10 / 2 * 4?`, 
    o: ["20.0", "1.25", "5", "Error"], 
    c: 0, 
    e: "Left to right for same precedence: (10/2)*4 = 20.0.",
    de: `When operators have the same precedence, Python evaluates them left to right. Division and multiplication have the same precedence, so 10 / 2 * 4 calculates 10 / 2 first (equals 5.0), then 5.0 * 4 equals 20.0.

Left-to-right evaluation:
• 10 / 2 * 4
• First: 10 / 2 = 5.0 (leftmost operation)
• Then: 5.0 * 4 = 20.0 (next operation)
• Result: 20.0

Same precedence:
• / and * have same precedence
• Evaluated left to right
• (10 / 2) * 4 = 5.0 * 4 = 20.0
• NOT 10 / (2 * 4) = 10 / 8 = 1.25

Example: 10 / 2 * 4 evaluates to 20.0 because division and multiplication have the same precedence, so they're evaluated left to right: (10 / 2) * 4 = 5.0 * 4 = 20.0.

Key Distinctions:
• * and / share precedence and group left-to-right: (10/2)*4, not 10/(2*4).
• 10/2 is 5.0, then *4 is 20.0.

How It Works:
• Left-associative true division and multiplication for chains.

Step-by-Step Execution:
• 1. 10/2 -> 5.0. 2. *4 -> 20.0.

Order of Operations:
• Left-to-right among * and /.

Common Use Cases:
• Sequential scaling steps in pipelines.

Edge Cases:
• Mixing // changes floor behavior if used.

Performance Considerations:
• Each op O(1) for floats.

Examples:
• 10 * 2 / 4 -> 5.0 (same left-right idea).

Notes:
• Use parentheses when the business formula is ambiguous on paper.`
  }),
  (_i: number) => ({ 
    q: `What is 10 * 2 / 4?`, 
    o: ["5.0", "20", "0.5", "Error"], 
    c: 0, 
    e: "Left to right for same precedence: (10*2)/4 = 5.0.",
    de: `When operators have the same precedence, Python evaluates left to right. Multiplication and division have the same precedence, so 10 * 2 / 4 calculates 10 * 2 first (equals 20), then 20 / 4 equals 5.0.

Left-to-right evaluation:
• 10 * 2 / 4
• First: 10 * 2 = 20 (leftmost operation)
• Then: 20 / 4 = 5.0 (next operation)
• Result: 5.0

Same precedence:
• * and / have same precedence
• Evaluated left to right
• (10 * 2) / 4 = 20 / 4 = 5.0
• NOT 10 * (2 / 4) = 10 * 0.5 = 5.0 (same result by coincidence)

Example: 10 * 2 / 4 evaluates to 5.0 because multiplication and division have the same precedence, so they're evaluated left to right: (10 * 2) / 4 = 20 / 4 = 5.0.

Key Distinctions:
• Left-to-right: (10*2)/4 = 20/4 = 5.0.
• Multiplication first in the chain, then division.

How It Works:
• Same precedence band as previous question with operand order swapped.

Step-by-Step Execution:
• 1. 10*2 -> 20. 2. /4 -> 5.0.

Order of Operations:
• * then / left-associative.

Common Use Cases:
• Normalizing after a double-scale then halve pattern.

Edge Cases:
• Integer 10*2 is 20 before float division if using ints — here promotes to float on /.

Performance Considerations:
• O(1).

Examples:
• Contrast 10 / (2*4) -> 1.25 with parens.

Notes:
• math.prod for longer chains.`
  }),
  (_i: number) => ({ 
    q: `What is 10 - 2 - 3?`, 
    o: ["5", "9", "11", "Error"], 
    c: 0, 
    e: "Left to right for subtraction: (10-2)-3 = 5.",
    de: `Subtraction is left-associative, meaning it's evaluated left to right. 10 - 2 - 3 calculates 10 - 2 first (equals 8), then 8 - 3 equals 5.

Left-to-right subtraction:
• 10 - 2 - 3
• First: 10 - 2 = 8 (leftmost operation)
• Then: 8 - 3 = 5 (next operation)
• Result: 5

Associativity:
• Subtraction is left-associative
• (10 - 2) - 3 = 8 - 3 = 5
• NOT 10 - (2 - 3) = 10 - (-1) = 11

Example: 10 - 2 - 3 evaluates to 5 because subtraction is evaluated left to right: (10 - 2) - 3 = 8 - 3 = 5.

Key Distinctions:
• Subtraction chains left-to-right: (10-2)-3, not 10-(2-3).
• 8 - 3 = 5.

How It Works:
• Binary - is left-associative for repeated use.

Step-by-Step Execution:
• 1. 10-2 -> 8. 2. 8-3 -> 5.

Order of Operations:
• - chains left.

Common Use Cases:
• Sequential debits from a balance.

Edge Cases:
• Unary minus binds tighter: -a - b reads (-a) - b.

Performance Considerations:
• O(1).

Examples:
• 10 - (2-3) -> 11 — different parens.

Notes:
• Use += style updates to avoid long - chains.`
  }),
  (_i: number) => ({ 
    q: `What is 10 + 2 - 3?`, 
    o: ["9", "5", "11", "Error"], 
    c: 0, 
    e: "Left to right for same precedence: (10+2)-3 = 9.",
    de: `Addition and subtraction have the same precedence and are left-associative. 10 + 2 - 3 calculates 10 + 2 first (equals 12), then 12 - 3 equals 9.

Left-to-right evaluation:
• 10 + 2 - 3
• First: 10 + 2 = 12 (leftmost operation)
• Then: 12 - 3 = 9 (next operation)
• Result: 9

Same precedence:
• + and - have same precedence
• Evaluated left to right
• (10 + 2) - 3 = 12 - 3 = 9
• NOT 10 + (2 - 3) = 10 + (-1) = 9 (same result by coincidence)

Example: 10 + 2 - 3 evaluates to 9 because addition and subtraction have the same precedence, so they're evaluated left to right: (10 + 2) - 3 = 12 - 3 = 9.

Key Distinctions:
• + and - share precedence and associate left-to-right: ((10+2)-3).
• 12 - 3 = 9.

How It Works:
• Mixture of addition and subtraction without surprise jumps.

Step-by-Step Execution:
• 1. 10+2 -> 12. 2. 12-3 -> 9.

Order of Operations:
• Left-associative + - chain.

Common Use Cases:
• Net adjustments with credits and debits in order.

Edge Cases:
• Floats lose associativity in extreme cases — not here.

Performance Considerations:
• O(1).

Examples:
• a + b - c common idiom.

Notes:
• PEP 8 spaces around binary operators.`
  }),
  
  // 41-50: Type Conversions in Expressions
  (_i: number) => ({ 
    q: `What is float("3.14")?`, 
    o: ["3.14", "3", "Error", "None"], 
    c: 0, 
    e: "float() converts string to float.",
    de: `The float() function converts a string containing a numeric value (with or without decimal point) to a floating-point number. float("3.14") parses the string "3.14" and returns the float 3.14.

float() conversion:
• float("3.14") = 3.14 (string → float)
• Parses numeric string to float
• Works with decimal strings
• Returns float value

How it works:
• Parses string to extract number
• Handles decimal points
• Handles scientific notation: float("1e5") = 100000.0
• Returns float type

Examples:
• float("3.14") = 3.14
• float("42") = 42.0 (integer string → float)
• float("3.14159") = 3.14159
• float("  3.14  ") = 3.14 (strips whitespace)

Common uses:
• Converting user input: float(input("Enter number: "))
• Parsing decimal strings
• Converting numeric strings to floats
• Processing text-based numeric data

Example: float("3.14") returns 3.14 (a float) because it parses the string "3.14" and converts it to a floating-point number.

Key Distinctions:
• float() parses a string decimal text into IEEE 754 binary float (approximate).
• Result is a float object near 3.14.

How It Works:
• Invalid strings raise ValueError; underscores in literals allowed in recent Python for numeric literals but not arbitrary in float(str) without rules.

Step-by-Step Execution:
• 1. Parse characters. 2. Build float.

Order of Operations:
• Call on string literal.

Common Use Cases:
• Reading configuration and CSV fields into numbers.

Edge Cases:
• Scientific notation strings like '1e-3' parse.

Performance Considerations:
• Parsing cost proportional to string length.

Examples:
• float('inf') works for special values.

Notes:
• Decimal module for exact decimal arithmetic.`
  }),
  (_i: number) => ({ 
    q: `What is int("42")?`, 
    o: ["42", '"42"', "Error", "float"], 
    c: 0, 
    e: "int() converts numeric strings to integers.",
    de: `The int() function converts a string containing numeric characters to an integer. int("42") parses the string "42" and returns the integer 42. This is essential for converting user input (which comes as strings) to numbers.

int() conversion:
• int("42") = 42 (string → integer)
• Parses numeric string to integer
• Strips whitespace: int("  42  ") = 42
• Returns integer value

How it works:
• Parses string to extract number
• Truncates decimals if present in string: int("42.9") raises ValueError
• Handles base conversion: int("FF", 16) = 255
• Returns int type

Examples:
• int("42") = 42
• int("  42  ") = 42 (whitespace stripped)
• int("42.0") raises ValueError (must be integer string)
• int("0") = 0

Common uses:
• User input: int(input("Enter age: "))
• Parsing integer strings
• Converting numeric strings to integers
• Processing text-based numeric data

Example: int("42") returns 42 (an integer) because it parses the string "42" and converts it to an integer.

Key Distinctions:
• int(string) parses base-10 by default; '42' becomes int 42.
• Whitespace may strip; bases use second argument.

How It Works:
• Errors on non-numeric text without base-0 auto detection.

Step-by-Step Execution:
• 1. Scan digits. 2. Build int.

Order of Operations:
• Function call on str literal.

Common Use Cases:
• User input validation before math.

Edge Cases:
• int('ff',16) hex parsing; int('42',0) uses prefix rules.

Performance Considerations:
• Linear in digit count.

Examples:
• int(' 42 ') often works.

Notes:
• Never int() untrusted strings without validation in security contexts.`
  }),
  (_i: number) => ({ 
    q: `What is str(42)?`, 
    o: ['"42"', "42", "Error", "None"], 
    c: 0, 
    e: "str() converts values to strings.",
    de: `The str() function converts a value to its string representation. str(42) converts the integer 42 to the string "42". This is the opposite of int() or float() - it converts from numbers to strings.

str() conversion:
• str(42) = "42" (integer → string)
• Creates string representation
• Works with any type
• Returns string value

How it works:
• Converts value to string
• For numbers, creates string of digits
• For floats, includes decimal: str(3.14) = "3.14"
• Works with any type

Examples:
• str(42) = "42"
• str(3.14) = "3.14"
• str(True) = "True"
• str([1, 2]) = "[1, 2]"

Common uses:
• String formatting: "Age: " + str(age)
• Displaying numbers: print(str(42))
• Converting for concatenation
• f-strings alternative: f"Age: {42}"

Example: str(42) returns "42" (a string) because it converts the integer 42 to its string representation "42".

Key Distinctions:
• str on int produces decimal text without quotes in the value — the string '42' content.
• Type becomes str, representation human-oriented.

How It Works:
• str calls __str__ on the object; int __str__ is decimal.

Step-by-Step Execution:
• 1. Take int 42. 2. Allocate str with chars '4','2'.

Order of Operations:
• Single call.

Common Use Cases:
• Formatting output and building messages.

Edge Cases:
• str of float uses shortest round-trip-ish rules.

Performance Considerations:
• Small allocation.

Examples:
• str(True) -> 'True'.

Notes:
• repr differs — see repr() for quotes on str.`
  }),
  (_i: number) => ({ 
    q: `What is int(3.7)?`, 
    o: ["3", "4", "3.7", "Error"], 
    c: 0, 
    e: "int() truncates towards zero (not rounding).",
    de: `The int() function truncates (cuts off) the decimal part of a float, moving toward zero. int(3.7) truncates to 3, not 4. This is different from rounding - it simply removes the decimal part without rounding up or down.

Truncation behavior:
• int(3.7) = 3 (truncates toward zero)
• int(3.2) = 3 (truncates toward zero)
• int(-3.7) = -3 (truncates toward zero)
• NOT rounding - just removes decimal

How it works:
• Removes decimal part
• Moves toward zero
• Positive: rounds down (toward zero)
• Negative: rounds up (toward zero)

Examples:
• int(3.7) = 3 (not 4!)
• int(3.2) = 3
• int(-3.7) = -3 (not -4!)
• int(-3.2) = -3

Comparison with round():
• int(3.7) = 3 (truncates)
• round(3.7) = 4 (rounds)
• Different operations!

Common uses:
• Converting floats to integers
• Truncating decimal parts
• Getting whole number portion
• Type conversion

Example: int(3.7) returns 3 because int() truncates (removes) the decimal part, moving toward zero. It does NOT round, so 3.7 becomes 3, not 4.

Key Distinctions:
• int(float) truncates toward zero — drops fractional part, not floor for negatives.
• int(3.7) is 3.

How It Works:
• Differs from math.floor for negative values.

Step-by-Step Execution:
• 1. Take float 3.7. 2. Truncate toward zero -> 3.

Order of Operations:
• Function call.

Common Use Cases:
• Converting measurements to whole units toward zero.

Edge Cases:
• int(-3.7) -> -3, while floor(-3.7) -> -4.

Performance Considerations:
• O(1).

Examples:
• int(3.0) -> 3.

Notes:
• Use math.floor or math.ceil when you need directed rounding.`
  }),
  (_i: number) => ({ 
    q: `What is int(-3.7)?`, 
    o: ["-3", "-4", "-3.7", "Error"], 
    c: 0, 
    e: "int() truncates towards zero for negatives too.",
    de: `The int() function truncates toward zero for both positive and negative numbers. int(-3.7) truncates to -3 (toward zero), not -4 (away from zero). This means it rounds positive numbers down and negative numbers up, both moving toward zero.

Truncation toward zero:
• int(-3.7) = -3 (toward zero, not -4)
• int(-3.2) = -3 (toward zero)
• int(3.7) = 3 (toward zero)
• Always moves toward zero

How it works:
• Removes decimal part
• Moves result toward zero
• Positive: rounds down (3.7 → 3)
• Negative: rounds up (-3.7 → -3)

Examples:
• int(-3.7) = -3 (toward zero)
• int(-3.2) = -3 (toward zero)
• int(-10.9) = -10 (toward zero)
• int(10.9) = 10 (toward zero)

Comparison with floor():
• int(-3.7) = -3 (toward zero)
• math.floor(-3.7) = -4 (toward negative infinity)
• Different for negative numbers!

Common uses:
• Converting floats to integers
• Truncating toward zero
• Getting whole number portion
• Type conversion

Example: int(-3.7) returns -3 because int() truncates toward zero. For negative numbers, this means rounding up (toward zero), so -3.7 becomes -3, not -4.

Key Distinctions:
• Truncation toward zero means -3.7 becomes -3, not -4.
• Floor would go more negative; int() chooses toward zero.

How It Works:
• Matches C-style cast semantics for float to int in Python.

Step-by-Step Execution:
• 1. Magnitude 3.7. 2. Apply sign toward zero -> -3.

Order of Operations:
• Unary - on literal inside int().

Common Use Cases:
• Converting negative deltas without extra floor bias unless wanted.

Edge Cases:
• Exact halfway floats rare in binary — still trunc rule.

Performance Considerations:
• O(1).

Examples:
• Compare math.floor(-3.7) -> -4.

Notes:
• For rounding to nearest, use round() then int in two steps carefully.`
  }),
  (_i: number) => ({ 
    q: `What is float(5)?`, 
    o: ["5.0", "5", "Error", "None"], 
    c: 0, 
    e: "float() converts integer to float.",
    de: `The float() function converts an integer to a floating-point number by adding decimal precision. float(5) converts the integer 5 to the float 5.0. This is important because floats and ints are different types in Python.

float() conversion:
• float(5) = 5.0 (integer → float)
• Adds decimal precision (even if .0)
• Result is type float, not int
• 5.0 is different from 5 in type

How it works:
• Converts integer to float
• Adds .0 to make it a float
• Creates float type object
• Value is equivalent but type differs

Examples:
• float(5) = 5.0
• float(10) = 10.0
• float(-5) = -5.0
• float(0) = 0.0

Type differences:
• 5 is int, 5.0 is float
• 5 == 5.0 is True (values equal)
• type(5) != type(5.0) (types differ)
• 5 is 5.0 is False (different objects)

Common uses:
• Ensuring decimal precision
• Type conversion
• Calculations requiring floats
• Division operations (always produce float)

Example: float(5) returns 5.0 (a float) because it converts the integer 5 to a floating-point number by adding .0.

Key Distinctions:
• float on int constructs an exact representable float for small integers in many cases.
• float(5) is 5.0.

How It Works:
• Large ints may lose precision when converted to float.

Step-by-Step Execution:
• 1. Promote int 5 to float 5.0.

Order of Operations:
• Single conversion call.

Common Use Cases:
• Mixing into float pipelines.

Edge Cases:
• Some ints beyond 2**53 do not round-trip exactly as float.

Performance Considerations:
• Cheap for small values.

Examples:
• float('nan') special case.

Notes:
• Use int for exact integer-only math when possible.`
  }),
  (_i: number) => ({ 
    q: `What is str(1.0 + 2)?`, 
    o: ['"3.0"', "3.0", "Error", "None"], 
    c: 0, 
    e: "Result of math converted to string.",
    de: `The str() function converts the result of a mathematical expression to a string. First, 1.0 + 2 is calculated (equals 3.0, a float), then str(3.0) converts it to the string "3.0".

Step-by-step evaluation:
• str(1.0 + 2)
• First: 1.0 + 2 = 3.0 (float + int = float)
• Then: str(3.0) = "3.0" (float → string)
• Result: "3.0"

How it works:
• Expression inside str() is evaluated first
• 1.0 + 2 = 3.0 (float)
• str(3.0) converts float to string
• Result is string representation

Examples:
• str(1.0 + 2) = "3.0"
• str(1 + 2) = "3" (integer becomes "3")
• str(3.14 + 1) = "4.14"
• str(5 * 2) = "10"

Important:
• Expression evaluated first
• Result then converted to string
• String format matches number format
• Float strings include ".0"

Example: str(1.0 + 2) returns "3.0" because first the expression 1.0 + 2 is evaluated to 3.0 (a float), then it's converted to the string "3.0".

Key Distinctions:
• Inner addition promotes int 2 to float; 1.0 + 2 is 3.0, then str becomes '3.0' text.
• Shows str of float includes decimal point or exponent style.

How It Works:
• Addition follows numeric promotion rules to wider type.

Step-by-Step Execution:
• 1. Add -> 3.0. 2. str -> '3.0' (typical).

Order of Operations:
• Inner + then str call.

Common Use Cases:
• Printing computed float results.

Edge Cases:
• Binary float may show '2.999999999' style noise rarely from other ops.

Performance Considerations:
• Small string build.

Examples:
• format(3.0, 'g') controls digits.

Notes:
• repr vs str for floats differs in edge cases.`
  }),
  (_i: number) => ({ 
    q: `What is type(3.14 + 1)?`, 
    o: ["<class 'float'>", "<class 'int'>", "<class 'str'>", "None"], 
    c: 0, 
    e: "Adding int to float results in float.",
    de: `When you add an integer to a float, Python promotes the integer to a float and the result is a float. 3.14 + 1 equals 4.14, which is a float. type(3.14 + 1) returns <class 'float'> because the result is always a float when mixing int and float.

Type promotion:
• 3.14 + 1 = 4.14 (float + int = float)
• type(3.14 + 1) = <class 'float'>
• Integer is promoted to float
• Result is always float

How it works:
• Python promotes int to float
• 1 becomes 1.0
• 3.14 + 1.0 = 4.14
• Result is float type

Examples:
• type(3.14 + 1) = <class 'float'>
• type(1.0 + 2) = <class 'float'>
• type(5.0 + 10) = <class 'float'>

Rule:
• int + float = float
• float + int = float
• int + int = int
• float + float = float

Example: type(3.14 + 1) returns <class 'float'> because adding an integer to a float promotes the integer to a float, and the result is a float.

Key Distinctions:
• Adding float and int yields float; type of result is float.
• type(...) is <class 'float'> — use type name or isinstance checks in real code.

How It Works:
• Promotion to float happens before addition completes.

Step-by-Step Execution:
• 1. Add 3.14 + 1 -> float. 2. type returns float class.

Order of Operations:
• type() call on expression.

Common Use Cases:
• Debugging mixed arithmetic bugs.

Edge Cases:
• type returns exact class — subclasses report subclass.

Performance Considerations:
• type lookup O(1).

Examples:
• isinstance(x, float) includes subclasses.

Notes:
• For numpy scalars, type differs — stay in pure Python here.`
  }),
  (_i: number) => ({ 
    q: `What is type(1 + 2)?`, 
    o: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "None"], 
    c: 0, 
    e: "Adding two ints results in int.",
    de: `When you add two integers, the result is an integer. 1 + 2 equals 3, which is an integer. type(1 + 2) returns <class 'int'> because the result of adding two integers is always an integer.

Integer addition:
• 1 + 2 = 3 (int + int = int)
• type(1 + 2) = <class 'int'>
• Result is integer type
• No type promotion needed

How it works:
• Both operands are integers
• Result is integer
• No conversion needed
• Integer type maintained

Examples:
• type(1 + 2) = <class 'int'>
• type(5 + 10) = <class 'int'>
• type(100 + 200) = <class 'int'>

Rule:
• int + int = int
• float + int = float
• int + float = float
• float + float = float

Example: type(1 + 2) returns <class 'int'> because adding two integers results in an integer. No type promotion occurs when both operands are the same type.

Key Distinctions:
• Sum of two ints remains int in Python 3; no silent float promotion.
• type(3) is int.

How It Works:
• True division would float; addition of ints stays int until overflow to long arbitrary precision.

Step-by-Step Execution:
• 1. Add ints. 2. type int.

Order of Operations:
• Pure int + int.

Common Use Cases:
• Integer pipelines until a / appears.

Edge Cases:
• Big int automatic in Python 3 — unbounded.

Performance Considerations:
• O(1) type check.

Examples:
• type(True) is int subclass bool — still int subclass.

Notes:
• Use // when you need integer quotient type consistency.`
  }),
  (_i: number) => ({ 
    q: `What is type(1.0 * 2)?`, 
    o: ["<class 'float'>", "<class 'int'>", "<class 'str'>", "None"], 
    c: 0, 
    e: "Multiplying float by int results in float.",
    de: `When you multiply a float by an integer, Python promotes the integer to a float and the result is a float. 1.0 * 2 equals 2.0, which is a float. type(1.0 * 2) returns <class 'float'> because the result is always a float when mixing int and float.

Type promotion:
• 1.0 * 2 = 2.0 (float * int = float)
• type(1.0 * 2) = <class 'float'>
• Integer is promoted to float
• Result is always float

How it works:
• Python promotes int to float
• 2 becomes 2.0
• 1.0 * 2.0 = 2.0
• Result is float type

Examples:
• type(1.0 * 2) = <class 'float'>
• type(3.14 * 5) = <class 'float'>
• type(2.5 * 10) = <class 'float'>

Rule:
• float * int = float
• int * float = float
• int * int = int
• float * float = float

Example: type(1.0 * 2) returns <class 'float'> because multiplying a float by an integer promotes the integer to a float, and the result is a float.

Key Distinctions:
• float * int promotes to float multiplication; result type is float.
• type(2.0) is float.

How It Works:
• Even if mathematically integral, 1.0*2 is float 2.0.

Step-by-Step Execution:
• 1. Multiply -> 2.0. 2. type -> float.

Order of Operations:
• Multiplication before type().

Common Use Cases:
• Graphics and ML stacks often stay float throughout.

Edge Cases:
• 0.0 * inf is nan — float oddities.

Performance Considerations:
• O(1).

Examples:
• 2 * 1.0 same idea.

Notes:
• Fraction module for rational exact arithmetic.`
  }),
  
  // 51-60: String vs Numeric Operations
  (_i: number) => ({ 
    q: `Is '1' + '1' equal to '2'?`, 
    o: ["No, it is '11'", "Yes", "Error", "None"], 
    c: 0, 
    e: "String concatenation, not addition.",
    de: `When both operands are strings, the + operator performs string concatenation, not mathematical addition. '1' + '1' concatenates the strings to produce '11', not the number 2. Strings and numbers use the same operator differently.

String concatenation:
• '1' + '1' = '11' (strings concatenate)
• NOT mathematical addition
• Joins strings end-to-end
• Result is string, not number

How it works:
• Both operands are strings
• + operator concatenates (joins)
• '1' + '1' = '11' (two characters)
• NOT 1 + 1 = 2

To get 2:
• Convert strings first: int('1') + int('1') = 2
• Must explicitly convert
• Type determines behavior

Common mistake:
• '1' + '1' ≠ 2 (it's '11')
• Must convert strings to numbers first
• Remember: strings concatenate, numbers add

Example: '1' + '1' returns '11' because both are strings, so + concatenates them. To add mathematically, convert first: int('1') + int('1') = 2.

Key Distinctions:
• String concatenation is not numeric addition: '1'+'1' is '11', not '2'.
• Equality compares str to str — '11' == '2' is False.

How It Works:
• No automatic int conversion for str + str.

Step-by-Step Execution:
• 1. Build '11'. 2. Compare to '2' -> False.

Order of Operations:
• + on str means concat; == compares character sequences.

Common Use Cases:
• Teaching that types matter for +.

Edge Cases:
• '2' == 2 is False — different types.

Performance Considerations:
• O(1) length compares.

Examples:
• int('1')+int('1') is numeric path.

Notes:
• Use f-strings or format for joining numbers into text.`
  }),
  (_i: number) => ({ 
    q: `What is int('1') + int('1')?`, 
    o: ["2", "'11'", "Error", "None"], 
    c: 0, 
    e: "Convert strings to ints before adding.",
    de: `To perform mathematical addition on numeric strings, you must first convert them to numbers using int() or float(). int('1') + int('1') converts both strings to integers first (1 and 1), then adds them mathematically to get 2.

Type conversion then addition:
• int('1') + int('1')
• First: int('1') = 1, int('1') = 1 (convert strings)
• Then: 1 + 1 = 2 (mathematical addition)
• Result: 2 (integer)

How it works:
• int() converts string to integer
• '1' → 1, '1' → 1
• Then integers are added: 1 + 1 = 2
• Result is integer

Examples:
• int('1') + int('1') = 2
• int('5') + int('3') = 8
• int('10') + int('20') = 30

Common pattern:
• User input is always string
• Must convert before math: int(input()) + int(input())
• Essential for numeric operations

Example: int('1') + int('1') returns 2 because the strings are converted to integers first (1 and 1), then added mathematically (1 + 1 = 2).

Key Distinctions:
• Each int() parses digit strings to int; then + is numeric addition.
• 1 + 1 is 2 — not string '11'.

How It Works:
• Left-to-right calls: int, int, then add.

Step-by-Step Execution:
• 1. int('1')->1. 2. int('1')->1. 3. add ->2.

Order of Operations:
• Function calls before binary +.

Common Use Cases:
• Parsing CSV integers before summing.

Edge Cases:
• int('') raises ValueError.

Performance Considerations:
• O(1) tiny strings.

Examples:
• int('01') works in base 10 as 1.

Notes:
• For bases use int(s, base).`
  }),
  (_i: number) => ({ 
    q: `What is '5' * 2?`, 
    o: ["'55'", "10", "Error", "None"], 
    c: 0, 
    e: "String multiplication repeats string.",
    de: `When you multiply a string by an integer, Python repeats the string that many times. '5' * 2 repeats the string '5' twice, producing '55'. This is string multiplication, not numeric multiplication.

String multiplication:
• '5' * 2 = '55' (string repeated 2 times)
• String * integer = repeated string
• NOT numeric multiplication
• Result is string

How it works:
• String is operand
• Integer is multiplier
• String is repeated that many times
• '5' * 2 = '5' + '5' = '55'

Examples:
• '5' * 2 = '55'
• 'abc' * 3 = 'abcabcabc'
• 'hello' * 0 = '' (empty string)
• 'x' * 5 = 'xxxxx'

Comparison with numeric:
• '5' * 2 = '55' (string multiplication)
• 5 * 2 = 10 (numeric multiplication)
• Type determines behavior

Common uses:
• Creating repeated patterns
• Padding: ' ' * 10 (10 spaces)
• Visual formatting
• Generating test data

Example: '5' * 2 returns '55' because string multiplication repeats the string '5' two times, producing '55'. This is different from numeric multiplication (5 * 2 = 10).

Key Distinctions:
• str * int repeats the string; '5' * 2 is '55'.
• Not numeric 10 — type is str.

How It Works:
• Sequence repetition __mul__ on str.

Step-by-Step Execution:
• 1. Repeat '5' twice. 2. Concatenate -> '55'.

Order of Operations:
• str repetition after evaluating int 2.

Common Use Cases:
• ASCII line drawing and padding.

Edge Cases:
• Negative repeat raises; zero gives ''

Performance Considerations:
• O(n * len) output size.

Examples:
• 2 * '5' also '55'.

Notes:
• Use int() before math if you meant multiply numbers.`
  }),
  (_i: number) => ({ 
    q: `What is 5 * 2?`, 
    o: ["10", "'55'", "Error", "None"], 
    c: 0, 
    e: "Numeric multiplication.",
    de: `When both operands are numbers, the * operator performs mathematical multiplication. 5 * 2 multiplies the numbers 5 and 2 to get 10. This is numeric multiplication, not string repetition.

Numeric multiplication:
• 5 * 2 = 10 (numbers multiply)
• Mathematical multiplication
• Integer * integer = integer
• Result is number

How it works:
• Both operands are numbers
• * operator multiplies
• 5 × 2 = 10
• Result is numeric

Examples:
• 5 * 2 = 10
• 3 * 4 = 12
• 5.0 * 2 = 10.0 (if one is float, result is float)

Comparison with string:
• 5 * 2 = 10 (numeric multiplication)
• '5' * 2 = '55' (string repetition)
• Type determines behavior

Common uses:
• Mathematical calculations
• Scaling values
• Area/volume calculations
• Arithmetic operations

Example: 5 * 2 returns 10 because both operands are numbers, so * performs mathematical multiplication (5 × 2 = 10).

Key Distinctions:
• Numeric multiplication: 5 * 2 is int 10.
• Contrasts with str repetition question using '5'.

How It Works:
• PyNumber_Multiply for ints.

Step-by-Step Execution:
• 1. Multiply ints -> 10.

Order of Operations:
• Single * on ints.

Common Use Cases:
• Arithmetic everywhere.

Edge Cases:
• Overflow not an issue — big ints grow.

Performance Considerations:
• O(1) small int.

Examples:
• 5 * 2 == 2 * 5 commutative.

Notes:
• bool is subclass of int — weird cases in puzzles.`
  }),
  (_i: number) => ({ 
    q: `What is 'hello' + 'world'?`, 
    o: ["'helloworld'", "'hello world'", "Error", "None"], 
    c: 0, 
    e: "String concatenation joins without spaces.",
    de: `String concatenation with the + operator joins strings end-to-end without adding any separator. 'hello' + 'world' concatenates to 'helloworld' (no space between). If you want a space, you must add it explicitly.

String concatenation:
• 'hello' + 'world' = 'helloworld' (no space)
• Joins strings exactly as they are
• No automatic spacing
• Must add spaces manually

How it works:
• + operator concatenates strings
• Joins end-to-end
• No separator added
• Creates new string

Examples:
• 'hello' + 'world' = 'helloworld'
• 'hello' + ' ' + 'world' = 'hello world' (with space)
• 'a' + 'b' + 'c' = 'abc'

Adding spaces:
• 'hello' + ' ' + 'world' = 'hello world'
• 'hello ' + 'world' = 'hello world'
• 'hello' + ' world' = 'hello world'

Common uses:
• Building strings
• Combining text
• String construction
• Formatting output

Example: 'hello' + 'world' returns 'helloworld' because string concatenation joins strings without adding spaces. To add a space, use 'hello' + ' ' + 'world' or 'hello ' + 'world'.

Key Distinctions:
• String concatenation joins sequences without separator: 'helloworld'.
• No space added — unlike some template languages.

How It Works:
• Allocates new str length sum of parts.

Step-by-Step Execution:
• 1. Build 'hello'. 2. Concat 'world'.

Order of Operations:
• Left + right str.

Common Use Cases:
• Building tokens from pieces.

Edge Cases:
• Huge concatenations in loops use join list.

Performance Considerations:
• O(n+m) output size.

Examples:
• ''.join(['hello','world']) clearer for many parts.

Notes:
• f'{a}{b}' often clearer.`
  }),
  (_i: number) => ({ 
    q: `What is '5' + '3'?`, 
    o: ["'53'", "8", "Error", "None"], 
    c: 0, 
    e: "String concatenation, not numeric addition.",
    de: `When both operands are strings, the + operator performs string concatenation. '5' + '3' concatenates the strings to produce '53', not the number 8. This is a common mistake when working with numeric strings.

String concatenation:
• '5' + '3' = '53' (strings concatenate)
• NOT mathematical addition
• Joins strings: '5' + '3' = '53'
• Result is string, not number

How it works:
• Both operands are strings
• + operator concatenates
• '5' + '3' = '53' (two characters)
• NOT 5 + 3 = 8

To get 8:
• Convert strings first: int('5') + int('3') = 8
• Must explicitly convert
• Type determines behavior

Common mistake:
• '5' + '3' ≠ 8 (it's '53')
• User input is always string
• Must convert before math

Example: '5' + '3' returns '53' because both are strings, so + concatenates them. To add mathematically, convert first: int('5') + int('3') = 8.

Key Distinctions:
• Concatenation yields '53' text, not numeric 8.
• Type str throughout.

How It Works:
• Two one-character strings become length-2 str.

Step-by-Step Execution:
• 1. '5' + '3' -> '53'.

Order of Operations:
• Single concat op.

Common Use Cases:
• Digit string assembly for display codes.

Edge Cases:
• int('53') recovers number 53.

Performance Considerations:
• Short output allocation.

Examples:
• Contrast int('5')+int('3') -> 8.

Notes:
• For arithmetic, cast first.`
  }),
  (_i: number) => ({ 
    q: `What is int('5') + int('3')?`, 
    o: ["8", "'53'", "Error", "None"], 
    c: 0, 
    e: "Convert strings to ints before adding.",
    de: `To perform mathematical addition on numeric strings, convert them to integers first using int(). int('5') + int('3') converts both strings to integers (5 and 3), then adds them mathematically to get 8.

Type conversion then addition:
• int('5') + int('3')
• First: int('5') = 5, int('3') = 3 (convert strings)
• Then: 5 + 3 = 8 (mathematical addition)
• Result: 8 (integer)

How it works:
• int() converts string to integer
• '5' → 5, '3' → 3
• Then integers are added: 5 + 3 = 8
• Result is integer

Examples:
• int('5') + int('3') = 8
• int('10') + int('20') = 30
• int('100') + int('200') = 300

Common pattern:
• User input is string: input() returns string
• Must convert: int(input("Enter number: "))
• Then perform math

Example: int('5') + int('3') returns 8 because the strings are converted to integers first (5 and 3), then added mathematically (5 + 3 = 8).

Key Distinctions:
• Parse then add: 5 + 3 is 8.
• Numeric int result.

How It Works:
• Two int() calls then addition.

Step-by-Step Execution:
• 1. Parse 5. 2. Parse 3. 3. Add -> 8.

Order of Operations:
• Calls bind tightly; then +.

Common Use Cases:
• Summing text fields from forms.

Edge Cases:
• ValueError on bad digits.

Performance Considerations:
• O(1) parse.

Examples:
• float('3.5')+1 for float path.

Notes:
• strip() inputs with whitespace first.`
  }),
  (_i: number) => ({ 
    q: `What is 'abc' * 0?`, 
    o: ['""', "'abc'", "Error", "None"], 
    c: 0, 
    e: "Multiplying string by 0 gives empty string.",
    de: `When you multiply a string by 0, Python returns an empty string. 'abc' * 0 equals '' (empty string) because repeating a string zero times results in nothing. This is consistent with the mathematical property that any number times zero equals zero.

String multiplication by zero:
• 'abc' * 0 = '' (empty string)
• Repeating zero times = nothing
• Returns empty string
• Consistent with math: anything * 0 = 0

How it works:
• String * 0 = empty string
• Repeating 0 times = ''
• No characters repeated
• Empty string result

Examples:
• 'abc' * 0 = ''
• 'hello' * 0 = ''
• 'x' * 0 = ''
• '' * 0 = '' (already empty)

Mathematical analogy:
• String * 0 = '' (zero repetition)
• Number * 0 = 0 (zero multiplication)
• Similar concept: zero times = nothing

Common uses:
• Conditional string creation
• Resetting string accumulators
• Edge cases in loops
• Clearing string variables

Example: 'abc' * 0 returns '' (empty string) because multiplying a string by 0 repeats it zero times, resulting in an empty string.

Key Distinctions:
• Zero repetitions of a string yield empty string ''.
• Universal for sequences: *0 gives empty.

How It Works:
• Avoids allocating large buffers.

Step-by-Step Execution:
• 1. Repeat 'abc' zero times. 2. ''.

Order of Operations:
• str * int.

Common Use Cases:
• Resetting formatted buffers.

Edge Cases:
• Negative repeat raises ValueError for str.

Performance Considerations:
• O(1) returns interned empty str often.

Examples:
• 'abc'*1 is 'abc'.

Notes:
• Use this to clear dummy padding in simple puzzles.`
  }),
  (_i: number) => ({ 
    q: `What is 'abc' * 1?`, 
    o: ["'abc'", "'abcabc'", "Error", "None"], 
    c: 0, 
    e: "Multiplying string by 1 gives original string.",
    de: `When you multiply a string by 1, Python returns the original string unchanged. 'abc' * 1 equals 'abc' because repeating a string once is the same as the original string. This is similar to the mathematical property that any number times 1 equals itself.

String multiplication by one:
• 'abc' * 1 = 'abc' (original string)
• Repeating once = original
• Returns string unchanged
• Consistent with math: anything * 1 = itself

How it works:
• String * 1 = original string
• Repeating 1 time = no change
• Returns same string
• Multiplicative identity

Examples:
• 'abc' * 1 = 'abc'
• 'hello' * 1 = 'hello'
• 'x' * 1 = 'x'
• '' * 1 = '' (empty string unchanged)

Mathematical analogy:
• String * 1 = original (one repetition)
• Number * 1 = same number (multiplicative identity)
• Similar concept: one times = itself

Common uses:
• Conditional string creation
• Identity operations
• Default values in loops
• Maintaining original string

Example: 'abc' * 1 returns 'abc' because multiplying a string by 1 repeats it once, which is the same as the original string.

Key Distinctions:
• Multiplying by 1 returns the same sequence content, often a new str object.
• 'abc' * 1 is 'abc'.

How It Works:
• Identity may differ but value equal.

Step-by-Step Execution:
• 1. Copy conceptually once.

Order of Operations:
• Single * op.

Common Use Cases:
• No-op scaling in string templates.

Edge Cases:
• *(-1) raises for str.

Performance Considerations:
• O(n) copy may occur.

Examples:
• 'x'*3 repeats three times.

Notes:
• Contrast list * shallow copy semantics.`
  }),
  (_i: number) => ({ 
    q: `What is 'abc' * 3?`, 
    o: ["'abcabcabc'", "'abc3'", "Error", "None"], 
    c: 0, 
    e: "String multiplication repeats the string.",
    de: `When you multiply a string by an integer greater than 1, Python repeats the string that many times. 'abc' * 3 repeats the string 'abc' three times, producing 'abcabcabc'. This is string repetition, not numeric multiplication.

String multiplication:
• 'abc' * 3 = 'abcabcabc' (string repeated 3 times)
• String * integer = repeated string
• Repeats the string exactly
• Result is string

How it works:
• String is operand
• Integer is multiplier
• String is repeated that many times
• 'abc' * 3 = 'abc' + 'abc' + 'abc' = 'abcabcabc'

Examples:
• 'abc' * 3 = 'abcabcabc'
• 'x' * 5 = 'xxxxx'
• 'hello' * 2 = 'hellohello'
• ' ' * 10 = '          ' (10 spaces)

Common uses:
• Creating repeated patterns
• Padding: ' ' * 20 (20 spaces)
• Visual formatting
• Generating test data

Example: 'abc' * 3 returns 'abcabcabc' because string multiplication repeats the string 'abc' three times, concatenating them together.

Key Distinctions:
• Repeats the string three times end-to-end: 'abcabcabc'.
• Length multiplies by 3.

How It Works:
• Quadratic growth if you chain * in a loop — use join.

Step-by-Step Execution:
• 1. Concatenate three copies.

Order of Operations:
• str * int.

Common Use Cases:
• Pattern generation and simple obfuscation jokes.

Edge Cases:
• Memory blow-up if multiplier huge.

Performance Considerations:
• O(k * n) time and space for multiplier k and length n.

Examples:
• 'a'*10**6 possible but heavy.

Notes:
• bytearray has different mutability story.`
  }),
  
  // 61-70: Comparison Operators
  (_i: number) => ({ 
    q: `Result of 10 > 5?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Greater than comparison.",
    de: `The > operator compares two values and returns True if the left operand is greater than the right operand. 10 > 5 returns True because 10 is greater than 5.

Greater than operator:
• 10 > 5 = True (10 is greater than 5)
• Returns boolean (True/False)
• Compares numeric values
• Works with strings (lexicographic)

How it works:
• Compares left operand to right operand
• Returns True if left > right
• Returns False otherwise
• Works with numbers, strings, etc.

Examples:
• 10 > 5 = True
• 5 > 10 = False
• 10 > 10 = False (not greater)
• "b" > "a" = True (lexicographic)

Common uses:
• Conditional statements: if x > 5:
• Range checking
• Comparisons
• Sorting

Example: 10 > 5 returns True because 10 is greater than 5.

Key Distinctions:
• Ordering comparison on ints yields bool.
• 10 > 5 is True.

How It Works:
• Rich comparison returns bool only; no three-valued logic.

Step-by-Step Execution:
• 1. Compare magnitudes. 2. Return True.

Order of Operations:
• Single > op.

Common Use Cases:
• Guards and sorting predicates.

Edge Cases:
• Chained comparisons differ — single op here.

Performance Considerations:
• O(1).

Examples:
• 10 <= 5 is False.

Notes:
• numpy arrays overload comparisons differently.`
  }),
  (_i: number) => ({ 
    q: `Result of 5 < 10?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Less than comparison.",
    de: `The < operator compares two values and returns True if the left operand is less than the right operand. 5 < 10 returns True because 5 is less than 10.

Less than operator:
• 5 < 10 = True (5 is less than 10)
• Returns boolean (True/False)
• Compares numeric values
• Works with strings (lexicographic)

How it works:
• Compares left operand to right operand
• Returns True if left < right
• Returns False otherwise
• Works with numbers, strings, etc.

Examples:
• 5 < 10 = True
• 10 < 5 = False
• 10 < 10 = False (not less)
• "a" < "b" = True (lexicographic)

Common uses:
• Conditional statements: if x < 10:
• Range checking
• Comparisons
• Sorting

Example: 5 < 10 returns True because 5 is less than 10.

Key Distinctions:
• < asks if left is strictly less than right.
• 5 < 10 is True.

How It Works:
• Mirrors > with operands flipped conceptually.

Step-by-Step Execution:
• 1. Evaluate 5 and 10. 2. Compare -> True.

Order of Operations:
• One comparison.

Common Use Cases:
• Strict bounds checks exclusive of endpoint.

Edge Cases:
• Type mismatch raises unless rich comparison defined.

Performance Considerations:
• O(1).

Examples:
• 5 < 5 is False.

Notes:
• Chained 5 < x < 10 uses pairwise AND semantics.`
  }),
  (_i: number) => ({ 
    q: `Result of 10 >= 10?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Greater than or equal.",
    de: `The >= operator compares two values and returns True if the left operand is greater than or equal to the right operand. 10 >= 10 returns True because 10 is equal to 10 (satisfies "or equal" part).

Greater than or equal:
• 10 >= 10 = True (equal, so True)
• Returns True if left >= right
• Returns False if left < right
• Includes equality

How it works:
• Checks if left > right OR left == right
• Returns True if either condition is true
• Returns False only if left < right
• Works with numbers, strings, etc.

Examples:
• 10 >= 10 = True (equal)
• 10 >= 5 = True (greater)
• 10 >= 15 = False (neither)
• 5 >= 10 = False (less)

Common uses:
• Range checking: if age >= 18:
• Boundary conditions
• Inclusive comparisons
• Conditional logic

Example: 10 >= 10 returns True because 10 equals 10, which satisfies the "or equal" part of the >= operator.

Key Distinctions:
• >= is True when left equals right or greater.
• 10 >= 10 is True — equality satisfies.

How It Works:
• Inclusive upper or lower bound tests.

Step-by-Step Execution:
• 1. Compare. 2. True because equal.

Order of Operations:
• Single >=.

Common Use Cases:
• Loop termination i <= n style.

Edge Cases:
• NaN comparisons are False for all ordering ops with NaN involved.

Performance Considerations:
• O(1).

Examples:
• 9 >= 10 is False.

Notes:
• Prefer explicit == or < when logic clearer.`
  }),
  (_i: number) => ({ 
    q: `Result of 5 <= 10?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Less than or equal.",
    de: `The <= operator compares two values and returns True if the left operand is less than or equal to the right operand. 5 <= 10 returns True because 5 is less than 10 (satisfies "less than" part).

Less than or equal:
• 5 <= 10 = True (less, so True)
• Returns True if left <= right
• Returns False if left > right
• Includes equality

How it works:
• Checks if left < right OR left == right
• Returns True if either condition is true
• Returns False only if left > right
• Works with numbers, strings, etc.

Examples:
• 5 <= 10 = True (less)
• 10 <= 10 = True (equal)
• 15 <= 10 = False (greater)
• 10 <= 5 = False (greater)

Common uses:
• Range checking: if age <= 65:
• Boundary conditions
• Inclusive comparisons
• Conditional logic

Example: 5 <= 10 returns True because 5 is less than 10, which satisfies the <= operator (less than or equal).

Key Distinctions:
• <= True when left is less or equal.
• 5 <= 10 is True.

How It Works:
• Inclusive ceiling checks on ordered values.

Step-by-Step Execution:
• 1. Compare pair. 2. True.

Order of Operations:
• One <=.

Common Use Cases:
• Validating max constraints.

Edge Cases:
• float('nan') <= anything is False.

Performance Considerations:
• O(1).

Examples:
• 5 <= 5 is True.

Notes:
• Chained comparisons short-circuit.`
  }),
  (_i: number) => ({ 
    q: `Result of 10 == 10?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Equality check.",
    de: `The == operator compares two values for equality and returns True if they are equal. 10 == 10 returns True because both operands have the same value.

Equality operator:
• 10 == 10 = True (values are equal)
• Returns boolean (True/False)
• Compares values, not identity
• Works with numbers, strings, etc.

How it works:
• Compares left operand to right operand
• Returns True if values are equal
• Returns False if values are different
• Value comparison (not identity)

Examples:
• 10 == 10 = True
• 10 == 5 = False
• 10 == 10.0 = True (value equal, type different)
• "hello" == "hello" = True

Important distinction:
• == compares values (equality)
• is compares identity (same object)
• 10 == 10.0 is True (same value)
• 10 is 10.0 is False (different objects)

Common uses:
• Conditional statements: if x == 5:
• Checking equality
• Comparisons
• Validation

Example: 10 == 10 returns True because both operands have the same value (10).

Key Distinctions:
• == checks value equality for ints; 10 equals 10.
• True.

How It Works:
• Not identity — small ints may be cached but do not rely on that.

Step-by-Step Execution:
• 1. Compare values. 2. True.

Order of Operations:
• Equality op.

Common Use Cases:
• Unit tests and assertions.

Edge Cases:
• 10 == 10.0 is True — numeric equality across int/float.

Performance Considerations:
• O(1).

Examples:
• is not the same as == for mutable objects.

Notes:
• math.isclose for floats near equality.`
  }),
  (_i: number) => ({ 
    q: `Result of 10 != 5?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Inequality check.",
    de: `The != operator compares two values for inequality and returns True if they are not equal. 10 != 5 returns True because 10 is not equal to 5.

Inequality operator:
• 10 != 5 = True (values are not equal)
• Returns boolean (True/False)
• Opposite of == operator
• Works with numbers, strings, etc.

How it works:
• Compares left operand to right operand
• Returns True if values are not equal
• Returns False if values are equal
• Value comparison (not identity)

Examples:
• 10 != 5 = True (not equal)
• 10 != 10 = False (equal)
• 10 != 10.0 = False (values equal)
• "hello" != "world" = True

Logical relationship:
• a != b is same as not (a == b)
• Opposite of equality operator
• Returns True when values differ

Common uses:
• Conditional statements: if x != 0:
• Checking inequality
• Validation
• Filtering

Example: 10 != 5 returns True because 10 is not equal to 5. The != operator checks for inequality.

Key Distinctions:
• != is negation of == — inequality holds here.
• 10 != 5 is True.

How It Works:
• Reads naturally as 'not equal'.

Step-by-Step Execution:
• 1. Compare. 2. True unequal.

Order of Operations:
• Single !=.

Common Use Cases:
• Negative guards.

Edge Cases:
• NaN != NaN is True oddly — float quirk.

Performance Considerations:
• O(1).

Examples:
• 10 != 10 is False.

Notes:
• Use 'is not' only for None singleton checks style-wise.`
  }),
  (_i: number) => ({ 
    q: `Result of 10 == 5?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "Equality check - not equal.",
    de: `The == operator compares two values for equality. 10 == 5 returns False because 10 is not equal to 5. The equality operator returns True only when both operands have the same value.

Equality check:
• 10 == 5 = False (not equal)
• Returns boolean (True/False)
• Compares values
• Returns False when values differ

How it works:
• Compares left operand to right operand
• Returns True if values are equal
• Returns False if values are different
• 10 ≠ 5, so False

Examples:
• 10 == 5 = False (different values)
• 10 == 10 = True (same values)
• 5 == 10 = False (different values)

Common uses:
• Conditional statements: if x == 5:
• Checking equality
• Comparisons
• Validation

Example: 10 == 5 returns False because 10 is not equal to 5. The == operator returns True only when both operands are equal.

Key Distinctions:
• Equal comparison fails for different values.
• 10 == 5 is False.

How It Works:
• No coercion makes 5 into 10.

Step-by-Step Execution:
• 1. Compare. 2. False.

Order of Operations:
• Single ==.

Common Use Cases:
• Negative test expectations.

Edge Cases:
• 0 == False is True — bool subclass int.

Performance Considerations:
• O(1).

Examples:
• Same structure as other equality drills.

Notes:
• For floats, watch rounding.`
  }),
  (_i: number) => ({ 
    q: `Result of 5 > 10?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "Greater than - false.",
    de: `The > operator compares two values and returns True if the left operand is greater than the right operand. 5 > 10 returns False because 5 is not greater than 10 (5 is less than 10).

Greater than check:
• 5 > 10 = False (5 is not greater than 10)
• Returns boolean (True/False)
• 5 < 10, so > returns False
• Checks if left > right

How it works:
• Compares left operand to right operand
• Returns True if left > right
• Returns False if left <= right
• 5 is less than 10, so False

Examples:
• 5 > 10 = False (5 < 10)
• 10 > 5 = True (10 > 5)
• 5 > 5 = False (equal, not greater)

Common uses:
• Conditional statements: if x > 10:
• Range checking
• Comparisons
• Validation

Example: 5 > 10 returns False because 5 is not greater than 10. 5 is actually less than 10, so the > operator returns False.

Key Distinctions:
• Order comparison: 5 is not greater than 10.
• False.

How It Works:
• Strict > requires left strictly bigger.

Step-by-Step Execution:
• 1. Compare. 2. False.

Order of Operations:
• Single >.

Common Use Cases:
• Invalid range checks.

Edge Cases:
• Strings compare lexicographically — different story.

Performance Considerations:
• O(1).

Examples:
• 5 > 5 is False.

Notes:
• Sort key functions change comparison basis.`
  }),
  (_i: number) => ({ 
    q: `Result of 10 < 5?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "Less than - false.",
    de: `The < operator compares two values and returns True if the left operand is less than the right operand. 10 < 5 returns False because 10 is not less than 5 (10 is greater than 5).

Less than check:
• 10 < 5 = False (10 is not less than 5)
• Returns boolean (True/False)
• 10 > 5, so < returns False
• Checks if left < right

How it works:
• Compares left operand to right operand
• Returns True if left < right
• Returns False if left >= right
• 10 is greater than 5, so False

Examples:
• 10 < 5 = False (10 > 5)
• 5 < 10 = True (5 < 10)
• 5 < 5 = False (equal, not less)

Common uses:
• Conditional statements: if x < 10:
• Range checking
• Comparisons
• Validation

Example: 10 < 5 returns False because 10 is not less than 5. 10 is actually greater than 5, so the < operator returns False.

Key Distinctions:
• 10 is not less than 5.
• False.

How It Works:
• Asymmetric comparison — not commutative.

Step-by-Step Execution:
• 1. Evaluate. 2. False.

Order of Operations:
• Single <.

Common Use Cases:
• Sanity checks on sorted inputs.

Edge Cases:
• Chained comparisons must all hold.

Performance Considerations:
• O(1).

Examples:
• Compare with 5 < 10 True.

Notes:
• Use key= when comparing derived values.`
  }),
  (_i: number) => ({ 
    q: `Result of 5 >= 10?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "Greater than or equal - false.",
    de: `The >= operator compares two values and returns True if the left operand is greater than or equal to the right operand. 5 >= 10 returns False because 5 is neither greater than nor equal to 10 (5 < 10).

Greater than or equal check:
• 5 >= 10 = False (5 < 10, not >=)
• Returns boolean (True/False)
• 5 is less than 10, so False
• Checks if left >= right

How it works:
• Compares left operand to right operand
• Returns True if left >= right
• Returns False if left < right
• 5 < 10, so False

Examples:
• 5 >= 10 = False (5 < 10)
• 10 >= 5 = True (10 > 5)
• 10 >= 10 = True (10 == 10)

Common uses:
• Conditional statements: if x >= 10:
• Range checking
• Boundary conditions
• Validation

Example: 5 >= 10 returns False because 5 is less than 10, so it doesn't satisfy the "greater than or equal" condition.

Key Distinctions:
• 5 is neither greater than nor equal to 10 in value.
• False.

How It Works:
• Inclusive bound fails on the lower side here.

Step-by-Step Execution:
• 1. Compare. 2. False.

Order of Operations:
• Single >=.

Common Use Cases:
• Threshold failures.

Edge Cases:
• Edge at 10: 10 >= 10 would be True.

Performance Considerations:
• O(1).

Examples:
• 5 >= 5 is True.

Notes:
• Floating point inclusive ranges need care at boundaries.`
  }),
  
  // 71-80: Logical Operators
  (_i: number) => ({ 
    q: `Result of 5 == 5 and 10 > 5?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "and requires both conditions True.",
    de: `The and operator returns True only if both conditions are True. 5 == 5 and 10 > 5 evaluates both: 5 == 5 is True, and 10 > 5 is True. Since both are True, the result is True.

and operator:
• 5 == 5 and 10 > 5 = True
• Both conditions: True and True = True
• Returns True only if both are True
• Short-circuits: if first is False, doesn't evaluate second

How it works:
• Evaluates left condition first
• If left is True, evaluates right
• Returns True only if both are True
• Returns False if either is False

Examples:
• True and True = True
• True and False = False
• False and True = False
• False and False = False

Short-circuiting:
• If first is False, second not evaluated
• Efficient for expensive operations
• Use for validation: x > 0 and expensive_check(x)

Common uses:
• Multiple conditions: if x > 0 and x < 100:
• Validation checks
• Compound conditions
• Guard clauses

Example: 5 == 5 and 10 > 5 returns True because both conditions are True (5 == 5 is True, and 10 > 5 is True).

Key Distinctions:
• and requires both subexpressions True.
• 5==5 is True and 10>5 is True -> overall True.

How It Works:
• Short-circuit: if left false, right skipped.

Step-by-Step Execution:
• 1. Left True. 2. Evaluate right True. 3. True.

Order of Operations:
• and lower precedence than comparisons? Actually comparison binds tighter than and in Python — here explicit structure.

Common Use Cases:
• Combining validity checks.

Edge Cases:
• Empty string and short-circuit behavior in general.

Performance Considerations:
• O(1).

Examples:
• True and False -> False.

Notes:
• Use parentheses when mixing with or for clarity.`
  }),
  (_i: number) => ({ 
    q: `Result of 5 == 5 and 5 > 10?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "and requires both True - second is False.",
    de: `The and operator returns True only if both conditions are True. 5 == 5 and 5 > 10 evaluates both: 5 == 5 is True, but 5 > 10 is False. Since one is False, the result is False.

and operator:
• 5 == 5 and 5 > 10 = False
• First condition: True, second: False
• True and False = False
• Returns False because second is False

How it works:
• Evaluates left condition: 5 == 5 = True
• Evaluates right condition: 5 > 10 = False
• True and False = False
• Returns False if either is False

Examples:
• True and False = False
• 5 == 5 and 5 > 10 = False
• Both must be True for result to be True

Common uses:
• Multiple conditions: if x > 0 and x < 10:
• Validation checks
• Compound conditions

Example: 5 == 5 and 5 > 10 returns False because although the first condition is True (5 == 5), the second condition is False (5 > 10), so the and operator returns False.

Key Distinctions:
• First conjunct True, second False — and is False.
• 5>10 is False.

How It Works:
• Short-circuit still evaluates second here because first True.

Step-by-Step Execution:
• 1. Left True. 2. Right False. 3. False.

Order of Operations:
• and of bools.

Common Use Cases:
• Failing multi-condition forms.

Edge Cases:
• If left were False, right might not run — side effects rely on this.

Performance Considerations:
• O(1).

Examples:
• De Morgan laws relate and/or/not.

Notes:
• all([...]) for iterable of conditions.`
  }),
  (_i: number) => ({ 
    q: `Result of 5 == 10 or 10 > 5?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "or requires at least one True.",
    de: `The or operator returns True if at least one condition is True. 5 == 10 or 10 > 5 evaluates both: 5 == 10 is False, but 10 > 5 is True. Since at least one is True, the result is True.

or operator:
• 5 == 10 or 10 > 5 = True
• First condition: False, second: True
• False or True = True
• Returns True if at least one is True

How it works:
• Evaluates left condition first
• If left is True, returns True immediately (short-circuit)
• If left is False, evaluates right
• Returns True if either is True

Examples:
• True or False = True
• False or True = True
• True or True = True
• False or False = False

Short-circuiting:
• If first is True, second not evaluated
• Efficient for expensive operations
• Use for fallbacks: value or default_value

Common uses:
• Alternative conditions: if x == 5 or x == 10:
• Default values: result = value or default
• Compound conditions

Example: 5 == 10 or 10 > 5 returns True because although the first condition is False (5 == 10), the second condition is True (10 > 5), so the or operator returns True.

Key Distinctions:
• or is True if any operand True — first False, second True yields True.
• Short-circuit stops at first True if left were True.

How It Works:
• 1. Left False. 2. Right True. 3. True.

Step-by-Step Execution:
• or lower precedence than comparison? Comparisons evaluate first inside operands.

Order of Operations:
• Fallback permission checks.

Common Use Cases:
• or with empty string left returns right operand truthiness.

Edge Cases:
• O(1).

Performance Considerations:
• False or False -> False.

Examples:
• any([...]) for iterable.

Notes:
• Do not confuse short-circuit or with bitwise | on integers.`
  }),
  (_i: number) => ({ 
    q: `Result of 5 == 10 or 5 > 10?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "or requires at least one True - both False.",
    de: `The or operator returns True if at least one condition is True. 5 == 10 or 5 > 10 evaluates both: 5 == 10 is False, and 5 > 10 is False. Since both are False, the result is False.

or operator:
• 5 == 10 or 5 > 10 = False
• Both conditions: False or False = False
• Returns False when both are False
• Returns True only if at least one is True

How it works:
• Evaluates left condition: 5 == 10 = False
• Evaluates right condition: 5 > 10 = False
• False or False = False
• Returns False when both are False

Examples:
• False or False = False
• True or False = True
• False or True = True
• True or True = True

Common uses:
• Alternative conditions: if x == 5 or x == 10:
• Default values: result = value or default
• Compound conditions

Example: 5 == 10 or 5 > 10 returns False because both conditions are False (5 == 10 is False, and 5 > 10 is False), so the or operator returns False.

Key Distinctions:
• Both subexpressions False — or is False.
• Neither equality nor inequality holds as needed.

How It Works:
• 1. Left False. 2. Right False. 3. False.

Step-by-Step Execution:
• or of two False.

Order of Operations:
• Rejecting all branches.

Common Use Cases:
• Short-circuit: after first False, still evaluates second here.

Edge Cases:
• O(1).

Performance Considerations:
• True or x does not evaluate x.

Examples:
• Bitwise | vs logical or for ints — different.

Notes:
• Use explicit if/elif chains when readability beats one long or expression.`
  }),
  (_i: number) => ({ 
    q: `Result of not 5 == 10?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "not inverts boolean result.",
    de: `The not operator inverts (negates) the boolean value of an expression. not 5 == 10 first evaluates 5 == 10 (which is False), then not False equals True. The not operator inverts the boolean result.

not operator:
• not 5 == 10 = True
• First: 5 == 10 = False
• Then: not False = True
• Inverts the boolean value

How it works:
• Evaluates the expression first
• Then inverts the result
• not True = False
• not False = True

Examples:
• not True = False
• not False = True
• not 5 == 5 = not True = False
• not 5 == 10 = not False = True

Logical relationship:
• not (a == b) is same as a != b
• Inverts comparison result
• Useful for negating conditions

Common uses:
• Negating conditions: if not x == 0:
• Inverting boolean values
• Checking for "not equal"
• Guard clauses: if not valid:

Example: not 5 == 10 returns True because first 5 == 10 evaluates to False, then not False equals True.

Key Distinctions:
• not binds looser than == : parsed as not (5 == 10).
• 5==10 is False, not False is True.

How It Works:
• not unary bool conversion.

Step-by-Step Execution:
• 1. Compare -> False. 2. not -> True.

Order of Operations:
• Comparison then not.

Common Use Cases:
• Negating membership or equality tests.

Edge Cases:
• not not x double negation.

Performance Considerations:
• O(1).

Examples:
• not 0 is True — falsy int.

Notes:
• Use explicit == False sparingly; 'if not cond' idiomatic.`
  }),
  (_i: number) => ({ 
    q: `Result of not 5 == 5?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "not inverts True to False.",
    de: `The not operator inverts the boolean value of an expression. not 5 == 5 first evaluates 5 == 5 (which is True), then not True equals False. The not operator inverts the boolean result.

not operator:
• not 5 == 5 = False
• First: 5 == 5 = True
• Then: not True = False
• Inverts True to False

How it works:
• Evaluates the expression first
• Then inverts the result
• not True = False
• not False = True

Examples:
• not True = False
• not False = True
• not 5 == 5 = not True = False
• not 5 == 10 = not False = True

Common uses:
• Negating conditions: if not valid:
• Inverting boolean values
• Checking for "not equal"
• Guard clauses

Example: not 5 == 5 returns False because first 5 == 5 evaluates to True, then not True equals False.

Key Distinctions:
• not (5 == 5): inner True, outer not -> False.
• Equality holds, negation flips to False.

How It Works:
• 1. 5==5 True. 2. not True -> False.

Step-by-Step Execution:
• not applies to bool of comparison.

Order of Operations:
• Rejecting tautologies.

Common Use Cases:
• Operator precedence: not binds tighter than and/or? Actually not is lower than comparisons — still not (True).

Edge Cases:
• O(1).

Performance Considerations:
• not True is False.

Examples:
• Chained not not for bool normalization.

Notes:
• Write not (a == b) for clarity when mixing with and/or.`
  }),
  (_i: number) => ({ 
    q: `Result of 5 < 10 < 15?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Chained comparisons work in Python.",
    de: `Python supports chained comparisons, allowing you to write multiple comparisons in a single expression. 5 < 10 < 15 is evaluated as (5 < 10) and (10 < 15). Both conditions are True, so the result is True.

Chained comparison:
• 5 < 10 < 15 = True
• Equivalent to: (5 < 10) and (10 < 15)
• Evaluates both conditions
• Returns True if both are True

How it works:
• Evaluates left comparison: 5 < 10 = True
• Evaluates right comparison: 10 < 15 = True
• Combines with and: True and True = True
• Returns True if chain is valid

Examples:
• 5 < 10 < 15 = True (valid chain)
• 5 < 10 < 20 = True
• 5 < 10 < 5 = False (invalid chain)
• 10 < 5 < 15 = False (invalid chain)

Common uses:
• Range checking: if 0 < x < 100:
• Multiple comparisons: if 5 < a < 10 < b < 20:
• Concise range validation

Example: 5 < 10 < 15 returns True because both conditions are True (5 < 10 is True, and 10 < 15 is True), so the chained comparison evaluates to True.

Key Distinctions:
• Chained comparison expands to (5 < 10) and (10 < 15) with middle evaluated once.
• Both True -> True.

How It Works:
• No C-style ternary — this is pairwise AND.

Step-by-Step Execution:
• 1. 5<10 True. 2. 10<15 True. 3. True.

Order of Operations:
• Chained <.

Common Use Cases:
• Range membership for ordered values.

Edge Cases:
• a < b < c requires b shared — no (a<b)<c nonsense.

Performance Considerations:
• Middle term evaluated once — important if side effects.

Examples:
• O(1).

Notes:
• Pairwise short-circuit; PEP 8 encourages chained forms; watch NaN and custom __lt__.`
  }),
  (_i: number) => ({ 
    q: `Result of 15 > 10 > 5?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Chained comparisons work both ways.",
    de: `Python supports chained comparisons in both directions. 15 > 10 > 5 is evaluated as (15 > 10) and (10 > 5). Both conditions are True, so the result is True. Chained comparisons work whether going up (<) or down (>).

Chained comparison (descending):
• 15 > 10 > 5 = True
• Equivalent to: (15 > 10) and (10 > 5)
• Evaluates both conditions
• Returns True if both are True

How it works:
• Evaluates left comparison: 15 > 10 = True
• Evaluates right comparison: 10 > 5 = True
• Combines with and: True and True = True
• Returns True if chain is valid

Examples:
• 15 > 10 > 5 = True (valid chain)
• 20 > 15 > 10 = True
• 15 > 10 > 20 = False (invalid chain)

Common uses:
• Range checking: if 100 > x > 0:
• Multiple comparisons
• Concise validation

Example: 15 > 10 > 5 returns True because both conditions are True (15 > 10 is True, and 10 > 5 is True), so the chained comparison evaluates to True.

Key Distinctions:
• Chained > expands to (15 > 10) and (10 > 5).
• Both True -> True.

How It Works:
• Middle value 10 anchors both tests.

Step-by-Step Execution:
• 1. 15>10 True. 2. 10>5 True. 3. True.

Order of Operations:
• Chained > descending check.

Common Use Cases:
• Strictly decreasing triple check.

Edge Cases:
• Mixing directions in one chain is syntax error if ill-formed.

Performance Considerations:
• O(1).

Examples:
• Compare 15 > 10 > 15 -> False on second part.

Notes:
• Works with any comparable middle.`
  }),
  (_i: number) => ({ 
    q: `Result of 5 == 5 == 5?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Chained equality checks all pairs.",
    de: `Python supports chained equality comparisons. 5 == 5 == 5 is evaluated as (5 == 5) and (5 == 5). Both conditions are True, so the result is True. However, this is a special case that works differently from other chained comparisons.

Chained equality:
• 5 == 5 == 5 = True
• Evaluates as: (5 == 5) and (5 == 5)
• All pairs must be equal
• Returns True if all are equal

How it works:
• Evaluates left comparison: 5 == 5 = True
• Evaluates right comparison: 5 == 5 = True
• Combines with and: True and True = True
• Returns True if all pairs are equal

Examples:
• 5 == 5 == 5 = True (all equal)
• 5 == 5 == 10 = False (last not equal)
• 5 == 10 == 5 = False (middle not equal)

Important note:
• This checks pairwise equality
• Not "all three are equal" semantically
• But works the same in this case

Example: 5 == 5 == 5 returns True because both comparisons are True (5 == 5 is True, and 5 == 5 is True), so the chained equality evaluates to True.

Key Distinctions:
• Chained equality: (5==5) and (5==5) conceptually — actually compares a chain with middle evaluated once.
• For equal literals, all pairwise equalities hold.

How It Works:
• True.

Step-by-Step Execution:
• 1. Pairwise True. 2. True.

Order of Operations:
• Chained ==.

Common Use Cases:
• Checking three values identical in one expression.

Edge Cases:
• a == b == c does not imply a is b is c identity.

Performance Considerations:
• O(1).

Examples:
• 1 == 2 == 1 is False at first pair? Actually 1==2 False short-circuits the chain result False.

Notes:
• NaN breaks equality chains.`
  }),
  (_i: number) => ({ 
    q: `Result of 5 != 10 != 15?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Chained inequality checks all pairs.",
    de: `Python supports chained inequality comparisons. 5 != 10 != 15 is evaluated as (5 != 10) and (10 != 15). Both conditions are True (5 ≠ 10, and 10 ≠ 15), so the result is True. This checks that all adjacent pairs are not equal.

Chained inequality:
• 5 != 10 != 15 = True
• Evaluates as: (5 != 10) and (10 != 15)
• All pairs must be not equal
• Returns True if all pairs differ

How it works:
• Evaluates left comparison: 5 != 10 = True
• Evaluates right comparison: 10 != 15 = True
• Combines with and: True and True = True
• Returns True if all pairs are not equal

Examples:
• 5 != 10 != 15 = True (all different)
• 5 != 5 != 15 = False (first pair equal)
• 5 != 10 != 10 = False (second pair equal)

Common uses:
• Checking uniqueness: if a != b != c:
• Validation that values differ
• Pairwise inequality

Example: 5 != 10 != 15 returns True because both comparisons are True (5 != 10 is True, and 10 != 15 is True), so the chained inequality evaluates to True.

Key Distinctions:
• Chained != is not equivalent to (5!=10) and (10!=15) — Python chains pairwise.
• 5!=10 True and 10!=15 True -> True.

How It Works:
• Care: a != b != c does not mean all pairwise distinct in multi-value sense beyond chain.

Step-by-Step Execution:
• 1. First pair True. 2. Second pair True. 3. True.

Order of Operations:
• Chained !=.

Common Use Cases:
• Quick inequality along a sequence.

Edge Cases:
• Surprising results possible with NaN.

Performance Considerations:
• O(1).

Examples:
• 1 != 2 != 1 is True? Evaluate: 1!=2 True, 2!=1 True -> True.

Notes:
• Read docs for exact semantics on mixed operators.`
  }),
  
  // 81-90: Membership and Identity Operators
  (_i: number) => ({ 
    q: `Result of 5 in [1, 2, 3, 4, 5]?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "in checks membership.",
    de: `The in operator checks if a value is a member of a collection (list, tuple, string, etc.). 5 in [1, 2, 3, 4, 5] returns True because 5 is present in the list. The in operator searches through the collection and returns True if the value is found.

Membership operator:
• 5 in [1, 2, 3, 4, 5] = True (5 is in list)
• Returns boolean (True/False)
• Searches collection for value
• Returns True if found

How it works:
• Searches through collection
• Compares value with each element
• Returns True if match found
• Returns False if not found

Examples:
• 5 in [1, 2, 3, 4, 5] = True
• 10 in [1, 2, 3, 4, 5] = False
• 'a' in 'abc' = True
• 'x' in 'abc' = False

Common uses:
• Checking membership: if item in list:
• Validation: if value in valid_values:
• Filtering: [x for x in items if x in valid]
• Existence checking

Example: 5 in [1, 2, 3, 4, 5] returns True because the value 5 is found in the list [1, 2, 3, 4, 5].

Key Distinctions:
• in tests membership — linear scan for list unless optimized.
• 5 is last element -> True.

How It Works:
• Equality uses == per element.

Step-by-Step Execution:
• 1. Iterate list. 2. Found 5 -> True.

Order of Operations:
• in has lower precedence than many ops; list literal builds first.

Common Use Cases:
• Filtering allowed values.

Edge Cases:
• Custom classes define __contains__.

Performance Considerations:
• O(n) for list worst case.

Examples:
• set membership average O(1).

Notes:
• 5 in (1,2,3) tuple similar.`
  }),
  (_i: number) => ({ 
    q: `Result of 10 in [1, 2, 3, 4, 5]?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "in checks membership - not found.",
    de: `The in operator checks if a value is a member of a collection. 10 in [1, 2, 3, 4, 5] returns False because 10 is not present in the list. The in operator searches through the collection and returns False if the value is not found.

Membership check:
• 10 in [1, 2, 3, 4, 5] = False (10 not in list)
• Returns boolean (True/False)
• Searches collection for value
• Returns False if not found

How it works:
• Searches through collection
• Compares value with each element
• Returns True if match found
• Returns False if not found

Examples:
• 10 in [1, 2, 3, 4, 5] = False
• 5 in [1, 2, 3, 4, 5] = True
• 'x' in 'abc' = False
• 'a' in 'abc' = True

Common uses:
• Checking membership: if item not in list:
• Validation: if value not in valid_values:
• Filtering: [x for x in items if x not in invalid]
• Existence checking

Example: 10 in [1, 2, 3, 4, 5] returns False because the value 10 is not found in the list [1, 2, 3, 4, 5].

Key Distinctions:
• 10 not present in the five-element list.
• False.

How It Works:
• Full scan may check every element.

Step-by-Step Execution:
• 1. Scan. 2. No match -> False.

Order of Operations:
• Membership test.

Common Use Cases:
• Validation failure paths.

Edge Cases:
• Nested lists: 10 in [[10]] is False — element is list not 10.

Performance Considerations:
• O(n).

Examples:
• 10 in {10} set True.

Notes:
• bisect on sorted lists for faster search.`
  }),
  (_i: number) => ({ 
    q: `Result of 5 not in [1, 2, 3]?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "not in checks if value is absent.",
    de: `The not in operator is the opposite of in - it returns True if the value is NOT found in the collection. 5 not in [1, 2, 3] returns True because 5 is absent from the list [1, 2, 3]. This is useful for negative membership checks.

not in operator:
• 5 not in [1, 2, 3] = True (5 is not in list)
• Returns boolean (True/False)
• Opposite of in operator
• Returns True if value is absent

How it works:
• Searches through collection
• Returns True if value NOT found
• Returns False if value found
• Equivalent to not (value in collection)

Examples:
• 5 not in [1, 2, 3] = True (not found)
• 1 not in [1, 2, 3] = False (found)
• 'x' not in 'abc' = True (not found)
• 'a' not in 'abc' = False (found)

Common uses:
• Checking absence: if item not in list:
• Validation: if value not in invalid_values:
• Filtering: [x for x in items if x not in invalid]
• Negative checks

Example: 5 not in [1, 2, 3] returns True because the value 5 is not found in the list [1, 2, 3], so not in returns True.

Key Distinctions:
• not in is negation of in — 5 absent from [1,2,3].
• True.

How It Works:
• Equivalent to not (5 in ...).

Step-by-Step Execution:
• 1. Membership False. 2. not in -> True.

Order of Operations:
• not in operator.

Common Use Cases:
• Whitelist checks.

Edge Cases:
• Element __eq__ can make weird membership.

Performance Considerations:
• O(n) list scan.

Examples:
• 5 not in [] is True.

Notes:
• Prefer 'x not in s' over 'not x in s' per PEP 8.`
  }),
  (_i: number) => ({ 
    q: `Result of 1 not in [1, 2, 3]?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "not in - value is present, so False.",
    de: `The not in operator returns False if the value IS found in the collection. 1 not in [1, 2, 3] returns False because 1 is present in the list [1, 2, 3]. When the value is found, not in returns False.

not in check:
• 1 not in [1, 2, 3] = False (1 is in list)
• Returns boolean (True/False)
• Opposite of in operator
• Returns False if value is present

How it works:
• Searches through collection
• Returns True if value NOT found
• Returns False if value found
• 1 is found, so False

Examples:
• 1 not in [1, 2, 3] = False (found)
• 5 not in [1, 2, 3] = True (not found)
• 'a' not in 'abc' = False (found)
• 'x' not in 'abc' = True (not found)

Logical relationship:
• value not in collection = not (value in collection)
• Inverts the result of in
• More readable for negative checks

Common uses:
• Checking absence: if item not in list:
• Validation: if value not in invalid:
• Filtering: [x for x in items if x not in invalid]
• Negative membership checks

Example: 1 not in [1, 2, 3] returns False because the value 1 is found in the list [1, 2, 3], so not in returns False.

Key Distinctions:
• 1 is first element — membership True, so not in is False.
• False.

How It Works:
• Early exit often on first element for lists.

Step-by-Step Execution:
• 1. Found at index 0. 2. not in -> False.

Order of Operations:
• Membership.

Common Use Cases:
• Wrong negatives on partial data.

Edge Cases:
• Custom __contains__ can be slow.

Performance Considerations:
• O(1) best case here.

Examples:
• 1 not in [2,3] is True.

Notes:
• Counterintuitive with NaN identity.`
  }),
  (_i: number) => ({ 
    q: `Result of 'a' in 'abc'?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "in checks substring membership in strings.",
    de: `The in operator checks if a substring is contained within a string. 'a' in 'abc' returns True because the substring 'a' is found in the string 'abc'. The in operator works with strings to check substring membership.

String membership:
• 'a' in 'abc' = True ('a' is substring)
• Returns boolean (True/False)
• Checks if substring exists
• Case-sensitive check

How it works:
• Searches for substring in string
• Returns True if substring found
• Returns False if not found
• Works with single or multiple characters

Examples:
• 'a' in 'abc' = True
• 'bc' in 'abc' = True (multi-character substring)
• 'x' in 'abc' = False (not found)
• '' in 'abc' = True (empty string always matches)

Common uses:
• Checking for characters: if 'x' in text:
• Pattern matching: if 'error' in message:
• Validation: if '@' in email:
• Filtering strings

Example: 'a' in 'abc' returns True because the substring 'a' is found in the string 'abc'.

Key Distinctions:
• Substring test for str — 'a' is prefix char.
• True.

How It Works:
• Uses efficient substring search.

Step-by-Step Execution:
• 1. Search 'a' in 'abc' -> True.

Order of Operations:
• in on str.

Common Use Cases:
• Parsing tokens.

Edge Cases:
• '' in any string is True at every position by Python rule.

Performance Considerations:
• Sublinear average for some search algos.

Examples:
• 'ab' in 'abc' True contiguous.

Notes:
• For single char, could use set of chars instead.`
  }),
  (_i: number) => ({ 
    q: `Result of 'x' in 'abc'?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "in checks substring - not found.",
    de: `The in operator checks if a substring is contained within a string. 'x' in 'abc' returns False because the substring 'x' is not found in the string 'abc'. The in operator works with strings to check substring membership.

String membership check:
• 'x' in 'abc' = False ('x' not in string)
• Returns boolean (True/False)
• Checks if substring exists
• Returns False if not found

How it works:
• Searches for substring in string
• Returns True if substring found
• Returns False if not found
• 'x' is not found in 'abc', so False

Examples:
• 'x' in 'abc' = False (not found)
• 'a' in 'abc' = True (found)
• 'xyz' in 'abc' = False (not found)

Common uses:
• Checking for characters: if 'x' not in text:
• Pattern matching: if 'error' not in message:
• Validation
• Filtering strings

Example: 'x' in 'abc' returns False because the substring 'x' is not found in the string 'abc'.

Key Distinctions:
• 'x' not a contiguous substring of 'abc'.
• False.

How It Works:
• Case sensitive by default.

Step-by-Step Execution:
• 1. Scan/search. 2. False.

Order of Operations:
• in str.

Common Use Cases:
• Invalid option detection.

Edge Cases:
• Very long haystacks — consider preprocessing.

Performance Considerations:
• O(n*m) worst naive.

Examples:
• 'A' in 'abc' False — case matters.

Notes:
• use casefold() for case-insensitive manual checks.`
  }),
  (_i: number) => ({ 
    q: `Result of 5 is 5?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "is checks identity (same object).",
    de: `The is operator checks if two variables reference the same object in memory (identity), not just if they have the same value. 5 is 5 returns True because Python caches small integers, so both 5s refer to the same object. However, for larger integers or mutable objects, this may not be true.

Identity operator:
• 5 is 5 = True (same integer object)
• Checks if same object in memory
• Different from == (which checks value)
• Python caches small integers

How it works:
• Checks object identity (memory address)
• Returns True if same object
• Returns False if different objects
• Small integers are cached (singletons)

Important distinction:
• == checks value equality
• is checks object identity
• 5 == 5.0 is True (same value)
• 5 is 5.0 is False (different objects)

Examples:
• 5 is 5 = True (cached integers)
• 1000 is 1000 = True (in Python, cached)
• [1, 2] is [1, 2] = False (different list objects)
• None is None = True (singleton)

Common uses:
• Checking for None: if x is None:
• Checking for singletons: if x is True:
• Identity checks
• Object comparison

Example: 5 is 5 returns True because Python caches small integers, so both 5s refer to the same object in memory. For identity checks, use is; for value checks, use ==.

Key Distinctions:
• Small ints may be cached — 5 is 5 often True in CPython.
• Identity of objects — do not rely on for logic except None and interned cases.

How It Works:
• is compares ids.

Step-by-Step Execution:
• 1. Load two 5 objects. 2. Compare id.

Order of Operations:
• is between literals.

Common Use Cases:
• Interning trivia — not a language guarantee for all ints.

Edge Cases:
• Large ints constructed separately may differ identity with same value.

Performance Considerations:
• O(1).

Examples:
• a=5;b=5; a is b often True.

Notes:
• Always use == for numeric equality semantics.`
  }),
  (_i: number) => ({ 
    q: `Result of [1, 2] is [1, 2]?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "is checks identity - different list objects.",
    de: `The is operator checks if two variables reference the same object in memory. [1, 2] is [1, 2] returns False because each list literal creates a new list object. Even though the lists have the same values, they are different objects in memory.

Identity check:
• [1, 2] is [1, 2] = False (different objects)
• Checks object identity, not value
• Each list literal creates new object
• Different memory addresses

How it works:
• Each [1, 2] creates a new list object
• Different memory addresses
• is checks if same object
• Returns False (different objects)

Important distinction:
• [1, 2] == [1, 2] = True (same values)
• [1, 2] is [1, 2] = False (different objects)
• == checks values, is checks identity

Examples:
• [1, 2] is [1, 2] = False (different objects)
• a = [1, 2]; b = a; a is b = True (same object)
• (1, 2) is (1, 2) = False (tuples too, unless cached)

Common uses:
• Checking for None: if x is None:
• Object identity checks
• Understanding object references
• Memory efficiency

Example: [1, 2] is [1, 2] returns False because each list literal creates a new list object. Even though they have the same values, they are different objects in memory. Use == to check if values are equal.

Key Distinctions:
• New list literals usually create distinct objects — identity False even if contents equal.
• False in typical CPython.

How It Works:
• == would be True for same elements.

Step-by-Step Execution:
• 1. Create list A. 2. Create list B. 3. ids differ.

Order of Operations:
• is on lists.

Common Use Cases:
• Why copy vs alias matters.

Edge Cases:
• is [] always a new empty list each time? Often new object — False to other [].

Performance Considerations:
• O(1) pointer compare.

Examples:
• a=[1,2]; b=a; a is b True.

Notes:
• Use == for value equality of containers.`
  }),
  (_i: number) => ({ 
    q: `Result of 5 is not 10?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "is not checks if objects are different.",
    de: `The is not operator is the opposite of is - it returns True if two variables reference different objects in memory. 5 is not 10 returns True because 5 and 10 are different objects (different values, so definitely different objects).

is not operator:
• 5 is not 10 = True (different objects)
• Returns True if different objects
• Returns False if same object
• Opposite of is operator

How it works:
• Checks object identity
• Returns True if different objects
• Returns False if same object
• 5 and 10 are different, so True

Examples:
• 5 is not 10 = True (different values/objects)
• 5 is not 5 = False (same object, for cached integers)
• None is not None = False (same singleton)
• [1, 2] is not [1, 2] = True (different objects)

Logical relationship:
• a is not b = not (a is b)
• Inverts the result of is
• More readable for negative checks

Common uses:
• Checking not None: if x is not None:
• Object identity checks
• Negative identity checks

Example: 5 is not 10 returns True because 5 and 10 are different objects (different values). The is not operator checks if objects are different.

Key Distinctions:
• is not is negation of is — different objects here.
• True.

How It Works:
• 5 and 10 are distinct int objects conceptually.

Step-by-Step Execution:
• 1. Compare ids. 2. Not equal -> True.

Order of Operations:
• is not.

Common Use Cases:
• None checks: x is not None.

Edge Cases:
• NaN is always not equal — weird with is.

Performance Considerations:
• O(1).

Examples:
• Prefer 'is not' over 'not x is y' spacing.

Notes:
• Small int cache can make some equal values identical objects.`
  }),
  (_i: number) => ({ 
    q: `Result of None is None?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "None is a singleton - always same object.",
    de: `None is a singleton in Python - there is only one None object in the entire program. None is None returns True because all None references point to the same singleton object. This is why you should always use is None (not == None) to check for None.

None singleton:
• None is None = True (same singleton)
• There is only one None object
• All None references are the same object
• Always use is None (not == None)

How it works:
• None is a singleton object
• All None references are the same object
• is checks identity, returns True
• This is why is None is recommended

Examples:
• None is None = True (singleton)
• x = None; x is None = True
• y = None; x is y = True (same object)
• None == None = True (but use is None)

Best practice:
• Always use is None (not == None)
• More Pythonic and correct
• Faster and clearer
• Works with identity

Common uses:
• Checking for None: if x is None:
• Default values: if value is None:
• Optional parameters
• Null checking

Example: None is None returns True because None is a singleton - there is only one None object in Python, so all None references are the same object.

Key Distinctions:
• None is a singleton — only one None object exists.
• True — always use 'is None' for checks.

How It Works:
• Identity holds for None literal vs None.

Step-by-Step Execution:
• 1. Load None twice. 2. Same id.

Order of Operations:
• is on None.

Common Use Cases:
• Optional default handling.

Edge Cases:
• None == None also True but style prefers is.

Performance Considerations:
• O(1).

Examples:
• np.nan is not np.nan for floats — different issue.

Notes:
• Ellipsis ... is another singleton.`
  }),
  
  // 91-100: Complex Expressions and Edge Cases
  (_i: number) => ({ 
    q: `What is -5?`, 
    o: ["-5", "5", "Error", "None"], 
    c: 0, 
    e: "Unary minus creates negative number.",
    de: `The unary minus operator (-) negates a number, creating its negative counterpart. -5 is the negative version of 5. It's called "unary" because it operates on a single operand (unlike binary operators like + which operate on two).

Unary minus:
• -5 = negative five
• Negates the value
• Creates negative number from positive
• Can negate variables too: -x

How it works:
• -5 means "negative 5" or "minus 5"
• Changes the sign: positive → negative
• -(-5) = 5 (double negation returns original)
• Works with floats: -3.14 = -3.14

Examples:
• -5 = -5
• -(-5) = 5
• -(10) = -10
• x = 5; -x = -5

Common uses:
• Representing negative values
• Inverting signs: -balance
• Temperature below zero: -10°C
• Debt/losses in finance

Example: -5 is negative five. The unary minus operator negates the number 5, creating -5.

Key Distinctions:
• Unary minus negates the numeric value.
• -5 is int -5.

How It Works:
• On literals, straightforward sign flip.

Step-by-Step Execution:
• 1. Apply unary - to 5.

Order of Operations:
• Unary - binds tighter than ** in -2**2 style cases.

Common Use Cases:
• Signed offsets and deltas.

Edge Cases:
• -(-5) is 5.

Performance Considerations:
• O(1).

Examples:
• -0 is 0.

Notes:
• Unary + exists as no-op for numbers.`
  }),
  (_i: number) => ({ 
    q: `What is +5?`, 
    o: ["5", "-5", "Error", "None"], 
    c: 0, 
    e: "Unary plus is allowed but doesn't change value.",
    de: `The unary plus operator (+) is allowed in Python but doesn't change the value of a number. +5 is just 5. However, it can be useful for code clarity or in certain expressions.

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

Common uses:
• Code clarity: +balance (emphasize positive)
• Type conversion in expressions
• Consistency in code style
• Mathematical notation

Example: +5 is simply 5. While valid syntax, it has no effect. Most Python code doesn't use unary plus unless needed for clarity or specific use cases.

Key Distinctions:
• Unary plus returns the value unchanged for int.
• +5 is 5.

How It Works:
• Rarely needed; included for symmetry with unary -.

Step-by-Step Execution:
• 1. Apply unary +.

Order of Operations:
• Unary + on int.

Common Use Cases:
• Clarifying positive terms in formatted expressions.

Edge Cases:
• Coerces custom objects if __pos__ defined.

Performance Considerations:
• O(1).

Examples:
• +True is 1.

Notes:
• Do not confuse with string concatenation +.`
  }),
  (_i: number) => ({ 
    q: `What is --5?`, 
    o: ["5", "-5", "Error", "None"], 
    c: 0, 
    e: "Double negative makes positive.",
    de: `The double negative (--5) applies the unary minus operator twice, negating the negation. --5 means -(-5), which equals 5. A double negative makes a positive, just like in mathematics.

Double negative:
• --5 = -(-5) = 5
• First negation: -5
• Second negation: -(-5) = 5
• Double negative = positive

How it works:
• First: -5 creates negative 5
• Second: -(-5) negates the negative, creating positive 5
• Result: 5 (positive)
• Double negative makes positive

Examples:
• --5 = 5
• ---5 = -5 (triple negative = negative)
• --(-5) = -5
• x = -5; --x = 5

Mathematical property:
• -(-a) = a (double negative)
• Negating a negation gives original
• Same as mathematics

Common uses:
• Mathematical expressions
• Negating negative values
• Double negation logic
• Mathematical formulas

Example: --5 returns 5 because the first - creates -5, and the second - negates -5, resulting in 5 (double negative makes positive).

Key Distinctions:
• Double unary minus: -(-5) -> 5.
• Right-to-left unary binding: first - applies to 5 -> -5, second negates to 5.

How It Works:
• Chained unaries stack.

Step-by-Step Execution:
• 1. Inner -5. 2. Outer - -> 5.

Order of Operations:
• Unary - twice.

Common Use Cases:
• Obfuscated sign flips in puzzles.

Edge Cases:
• ---5 parses as -(-(-5)) -> -5.

Performance Considerations:
• O(1).

Examples:
• Readable code uses explicit signs or variables.

Notes:
• Not bitwise -- (decrement) — Python has no ++.`
  }),
  (_i: number) => ({ 
    q: `What is -(-5)?`, 
    o: ["5", "-5", "Error", "None"], 
    c: 0, 
    e: "Negative of negative is positive.",
    de: `When you apply the unary minus operator to a negative number, you get its positive counterpart. -(-5) means "the negative of negative 5", which equals 5. Negating a negative number makes it positive, just like in mathematics.

Negative of negative:
• -(-5) = 5
• Negating negative makes positive
• Same as --5
• Mathematical property

How it works:
• Inner: -5 is negative five
• Outer: -(-5) negates the negative
• Result: 5 (positive)
• Double negative = positive

Examples:
• -(-5) = 5
• -(-10) = 10
• -(-3.14) = 3.14
• x = -5; -x = 5

Mathematical property:
• -(-a) = a (double negative)
• Negating a negation gives original
• Fundamental mathematical property

Common uses:
• Mathematical expressions
• Negating negative values
• Converting negative to positive
• Mathematical formulas

Example: -(-5) returns 5 because negating a negative number makes it positive. This is the mathematical property that a double negative equals a positive.

Key Distinctions:
• Explicit parens show inner -5 then outer negation to 5.
• Same value as --5 with clarity.

How It Works:
• Parentheses do not change unary semantics beyond grouping.

Step-by-Step Execution:
• 1. -5 inner. 2. negate -> 5.

Order of Operations:
• Nested unary.

Common Use Cases:
• Teaching order of unary operations.

Edge Cases:
• Mixing with exponentiation: -2**2 is -(2**2).

Performance Considerations:
• O(1).

Examples:
• -(-(-5)) -> -5.

Notes:
• Use spaces for readability with unary ops.`
  }),
  (_i: number) => ({ 
    q: `What is 0 // 5?`, 
    o: ["0", "Error", "None", "5"], 
    c: 0, 
    e: "Zero divided by any number is 0.",
    de: `When you divide zero by any non-zero number using floor division (//), the result is zero. 0 // 5 equals 0 because zero divided by any number equals zero. This is mathematically valid (unlike dividing by zero, which is not).

Zero divided by number:
• 0 // 5 = 0 (zero divided by any number)
• 0 ÷ 5 = 0 (mathematically)
• Returns integer 0
• Valid operation

How it works:
• Zero divided by any number equals zero
• 0 ÷ 5 = 0 (mathematically)
• Floor division returns integer
• Result: 0

Examples:
• 0 // 5 = 0
• 0 // 10 = 0
• 0 // 100 = 0
• 0 // 1 = 0

Important distinction:
• 0 // 5 = 0 (Zero divided by number - valid)
• 5 // 0 = ZeroDivisionError (Number divided by zero - invalid)
• These are different operations!

Common uses:
• Edge case handling
• Default values
• Mathematical formulas
• Division operations

Example: 0 // 5 returns 0 because zero divided by any non-zero number equals zero. This is valid (unlike 5 // 0 which raises ZeroDivisionError).

Key Distinctions:
• Floor division 0 // 5 is 0 — floor of 0/5.
• 0.

How It Works:
• Consistent with divmod(0,5).

Step-by-Step Execution:
• 1. 0 divided by 5 floor -> 0.

Order of Operations:
• Single //.

Common Use Cases:
• Zero chunks partitioning.

Edge Cases:
• 0 // 0 raises ZeroDivisionError.

Performance Considerations:
• O(1).

Examples:
• 5 // 0 raises.

Notes:
• Negative numerators follow floor toward -inf.`
  }),
  (_i: number) => ({ 
    q: `What is 5 // 1?`, 
    o: ["5", "5.0", "Error", "None"], 
    c: 0, 
    e: "Any number divided by 1 is itself.",
    de: `When you divide any number by 1 using floor division (//), the result is the number itself. 5 // 1 equals 5 because any number divided by 1 equals itself. This is a fundamental mathematical property.

Division by one:
• 5 // 1 = 5 (number divided by 1)
• Any number ÷ 1 = itself
• Mathematical identity
• Returns integer (when both operands are ints)

How it works:
• Any number divided by 1 equals itself
• 5 ÷ 1 = 5 (mathematically)
• Floor division returns integer
• Result: 5

Examples:
• 5 // 1 = 5
• 10 // 1 = 10
• 100 // 1 = 100
• -5 // 1 = -5

Mathematical property:
• a ÷ 1 = a (for any a)
• One is the multiplicative identity
• Dividing by 1 doesn't change value
• Fundamental property

Common uses:
• Mathematical formulas
• Identity operations
• Edge cases
• Calculations

Example: 5 // 1 returns 5 because any number divided by 1 equals itself. This is a fundamental mathematical identity property.

Key Distinctions:
• Dividing by 1 returns the numerator unchanged for ints.
• 5 // 1 is 5.

How It Works:
• Floor and trunc agree for positive divisor 1.

Step-by-Step Execution:
• 1. 5 // 1 -> 5.

Order of Operations:
• Single //.

Common Use Cases:
• Unit normalization.

Edge Cases:
• Large ints still exact with divisor 1.

Performance Considerations:
• O(1) big-int path may still allocate same value.

Examples:
• 5 // -1 is -5.

Notes:
• True division 5/1 is 5.0.`
  }),
  (_i: number) => ({ 
    q: `What is 0 % 5?`, 
    o: ["0", "5", "Error", "None"], 
    c: 0, 
    e: "0 modulo any number is 0.",
    de: `When you take 0 modulo any non-zero number, the result is 0. 0 % 5 equals 0 because when you divide 0 by 5, you get 0 groups of 5 with 0 remainder. Zero modulo any number is always 0.

Zero modulo:
• 0 % 5 = 0 (zero modulo any number)
• 0 ÷ 5 = 0 with remainder 0
• Always 0 for any non-zero divisor
• Valid operation

How it works:
• Divide zero by number
• Get zero groups with zero remainder
• 0 ÷ 5 = 0 remainder 0
• Result: 0

Examples:
• 0 % 5 = 0
• 0 % 10 = 0
• 0 % 100 = 0
• 0 % 1 = 0

Important distinction:
• 0 % 5 = 0 (Zero modulo number - valid)
• 5 % 0 = ZeroDivisionError (Number modulo zero - invalid)
• These are different operations!

Common uses:
• Edge case handling
• Wrapping calculations
• Mathematical formulas
• Modulo operations

Example: 0 % 5 returns 0 because zero divided by 5 has a remainder of 0. This is valid (unlike 5 % 0 which raises ZeroDivisionError).

Key Distinctions:
• 0 divided by 5 has remainder 0.
• 0 % 5 is 0.

How It Works:
• Numerator zero yields remainder zero for non-zero divisor.

Step-by-Step Execution:
• 1. 0 // 5 -> 0. 2. remainder 0.

Order of Operations:
• Single %.

Common Use Cases:
• Clock math at origin.

Edge Cases:
• 0 % 0 raises.

Performance Considerations:
• O(1).

Examples:
• 5 % 0 raises.

Notes:
• a % 1 is 0 for any integer a.`
  }),
  (_i: number) => ({ 
    q: `What is 5 % 1?`, 
    o: ["0", "5", "Error", "None"], 
    c: 0, 
    e: "Any number modulo 1 is 0.",
    de: `When you take any number modulo 1, the result is always 0. 5 % 1 equals 0 because when you divide 5 by 1, you get 5 groups of 1 with 0 remainder. Any number modulo 1 is always 0.

Modulo by one:
• 5 % 1 = 0 (any number modulo 1)
• 5 ÷ 1 = 5 with remainder 0
• Always 0 for modulo 1
• Mathematical property

How it works:
• Divide number by 1
• Get complete groups with no remainder
• 5 ÷ 1 = 5 remainder 0
• Result: 0

Examples:
• 5 % 1 = 0
• 10 % 1 = 0
• 100 % 1 = 0
• -5 % 1 = 0

Mathematical property:
• a % 1 = 0 (for any integer a)
• Dividing by 1 always has remainder 0
• Useful property

Common uses:
• Checking if integer: if x % 1 == 0:
• Decimal part extraction
• Mathematical formulas
• Edge cases

Example: 5 % 1 returns 0 because when you divide 5 by 1, you get 5 complete groups with no remainder. Any number modulo 1 is always 0.

Key Distinctions:
• Any integer mod 1 is 0 — multiples of 1 cover all integers with no remainder.
• 5 % 1 is 0.

How It Works:
• Useful in periodic indexing with step 1.

Step-by-Step Execution:
• 1. Floor divide 5/1 ->5. 2. remainder 0.

Order of Operations:
• Modulo 1.

Common Use Cases:
• Fractional part analog via % 1 on floats.

Edge Cases:
• Negative numerators: still consistent pairing with //.

Performance Considerations:
• O(1).

Examples:
• 3.5 % 1.0 -> 0.5 float behavior.

Notes:
• Decimal modulo differs in financial rules.`
  }),
  (_i: number) => ({ 
    q: `What is round(2.5)?`, 
    o: ["2", "3", "2.5", "Error"], 
    c: 0, 
    e: "round() uses banker's rounding - rounds to nearest even.",
    de: `The round() function uses "banker's rounding" (round half to even) when the decimal part is exactly .5. round(2.5) rounds to 2 because 2 is the nearest even number. This rounding method avoids statistical bias by rounding .5 to the nearest even number.

Banker's rounding:
• round(2.5) = 2 (rounds to even: 2)
• round(3.5) = 4 (rounds to even: 4)
• round(4.5) = 4 (rounds to even: 4)
• round(5.5) = 6 (rounds to even: 6)

How it works:
• If decimal part < .5, rounds down
• If decimal part > .5, rounds up
• If decimal part = .5, rounds to nearest even number
• This is "round half to even" or "IEEE 754" rounding

Why banker's rounding:
• Avoids systematic rounding bias
• More accurate in statistics
• Standard in financial calculations
• IEEE 754 standard

Examples:
• round(2.5) = 2 (even number)
• round(3.5) = 4 (even number)
• round(4.5) = 4 (even number)
• round(5.5) = 6 (even number)

Important note:
• This is different from traditional rounding
• Traditional: always round .5 up
• Banker's: round .5 to nearest even
• Python uses banker's rounding

Example: round(2.5) returns 2 because when rounding 0.5, Python rounds to the nearest even number. Since 2.5 is equidistant from 2 and 3, it chooses 2 (the even number).

Key Distinctions:
• Tie to even: 2.5 is halfway between 2 and 3; nearest even integer is 2.
• round(2.5) -> 2 in Python 3.

How It Works:
• Differs from school rounding always away from zero.

Step-by-Step Execution:
• 1. Detect tie. 2. Pick even -> 2.

Order of Operations:
• round unary.

Common Use Cases:
• Statistical aggregation bias reduction.

Edge Cases:
• Binary float may not represent 2.5 exactly — still follows round rules.

Performance Considerations:
• O(1).

Examples:
• round(3.5) -> 4.

Notes:
• Use Decimal for decimal-half rules.`
  }),
  (_i: number) => ({ 
    q: `What is round(3.5)?`, 
    o: ["4", "3", "3.5", "Error"], 
    c: 0, 
    e: "round() uses banker's rounding - rounds to nearest even.",
    de: `The round() function uses "banker's rounding" (round half to even) when the decimal part is exactly .5. round(3.5) rounds to 4 because 4 is the nearest even number. This rounding method avoids statistical bias by rounding .5 to the nearest even number.

Banker's rounding:
• round(3.5) = 4 (rounds to even: 4)
• round(2.5) = 2 (rounds to even: 2)
• When .5, rounds to nearest even
• Avoids rounding bias

How it works:
• If decimal part < .5, rounds down
• If decimal part > .5, rounds up
• If decimal part = .5, rounds to nearest even number
• This is "round half to even" rounding

Why banker's rounding:
• Avoids systematic rounding bias
• More accurate in statistics
• Standard in financial calculations
• IEEE 754 standard

Examples:
• round(3.5) = 4 (even number)
• round(2.5) = 2 (even number)
• round(4.5) = 4 (even number)
• round(5.5) = 6 (even number)

Important note:
• Different from traditional rounding
• Traditional: always round .5 up (3.5 → 4)
• Banker's: round .5 to nearest even (2.5 → 2, 3.5 → 4)
• Python uses banker's rounding

Example: round(3.5) returns 4 because when rounding 0.5, Python rounds to the nearest even number. Since 3.5 is equidistant from 3 and 4, it chooses 4 (the even number).

Key Distinctions:
• Halfway between integers, round breaks ties to the nearest even integer.
• 3.5 rounds to 4 because 4 is even? Actually 3.5 is halfway: Python 3 rounds 3.5 to 4 (nearest even banker's rule).

How It Works:
• IEEE-style unbiased rounding reduces systematic bias in repeated half increments.

Step-by-Step Execution:
• 1. Detect tie at .5. 2. Choose even outcome — 3.5 -> 4.

Order of Operations:
• Unary round on one float.

Common Use Cases:
• Aggregated financial rounding sometimes uses Decimal instead.

Edge Cases:
• 2.5 rounds to 2 (even); 3.5 rounds to 4 (even).

Performance Considerations:
• O(1).

Examples:
• round(4.5) -> 4 (even).

Notes:
• Do not assume schoolhouse always-away-from-zero rules.`
  }),
];
