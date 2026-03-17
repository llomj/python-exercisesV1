/**
 * Fundamentals reference content: Built-ins, Syntax, Common errors, Data types, Logic.
 * Structure and headers use theme styling (text-indigo-400, uppercase tracking) in FundamentalsView.
 */

export type FundamentalsSectionId = 'builtins' | 'syntax' | 'errors' | 'datatypes' | 'logic';

export interface FundamentalsSectionContent {
  id: FundamentalsSectionId;
  /** Key concepts / definition block */
  definition: string;
  /** Subsections with optional steps or bullet lists */
  subsections: Array<{
    heading: string;
    body: string[];
  }>;
  /** Code or one-liner examples */
  examples: string[];
}

export const FUNDAMENTALS_BUILTINS: FundamentalsSectionContent = {
  id: 'builtins',
  definition: 'Built-in functions are always available in Python without importing. They work on common types and are essential for everyday code.',
  subsections: [
    {
      heading: 'Output and input',
      body: [
        'print(*objects, sep=" ", end="\\n") — writes to standard output. sep joins multiple arguments; end is appended after the last. Returns None.',
        'input(prompt="") — reads one line from standard input as a string. The optional prompt is shown before reading. Newline is stripped.',
      ],
    },
    {
      heading: 'Type and conversion',
      body: [
        'type(obj) — returns the type object of obj (e.g. type(3) is int). Useful for debugging and type checks.',
        'int(x), float(x), str(x), bool(x) — convert to integer, float, string, or boolean. int("42") → 42; int(3.9) → 3 (truncates toward zero).',
        'list(iterable), dict(...), set(iterable), tuple(iterable) — construct collections from iterables or arguments.',
      ],
    },
    {
      heading: 'Sequences and iteration',
      body: [
        'len(s) — returns the number of items in a sequence or collection (str, list, tuple, dict, set, etc.).',
        'range(stop) or range(start, stop[, step]) — produces an immutable sequence of integers. Often used in for loops: for i in range(5):.',
        'sorted(iterable, key=None, reverse=False) — returns a new sorted list. Does not modify the original.',
        'reversed(seq) — returns a reverse iterator over the sequence.',
        'enumerate(iterable, start=0) — yields (index, item) pairs. zip(iter1, iter2, ...) — yields tuples of corresponding elements.',
      ],
    },
    {
      heading: 'Numeric and aggregates',
      body: [
        'min(iterable) / min(a, b, ...) — smallest value. max(...) — largest value. sum(iterable, start=0) — sum of numbers.',
        'abs(x) — absolute value. round(number[, ndigits]) — round to nearest; ndigits can be negative. divmod(a, b) — returns (a // b, a % b).',
        'pow(base, exp[, mod]) — base ** exp, or (base ** exp) % mod if mod is given.',
      ],
    },
    {
      heading: 'Other essentials',
      body: [
        'help(obj) — interactive help; help(function) shows the docstring. dir(obj) — list of attribute names (including methods).',
        'id(obj) — identity (memory address). hash(obj) — hash value for use in dicts/sets; must be consistent and comparable.',
        'open(file, mode="r", ...) — open a file; returns a file object. Use with with open(...) as f: for safe closing.',
        'isinstance(obj, class_or_tuple) — True if obj is an instance of the given type(s). issubclass(cls, class_or_tuple) — for class hierarchy.',
      ],
    },
  ],
  examples: [
    'print("Hello", 42, sep=" | ")   # Hello | 42',
    'n = int(input("Enter number: "))',
    'for i in range(10): print(i * i)',
    'total = sum([1, 2, 3, 4, 5])    # 15',
    's = sorted("python")           # [\'h\', \'n\', \'o\', \'p\', \'t\', \'y\']',
  ],
};

export const FUNDAMENTALS_SYNTAX: FundamentalsSectionContent = {
  id: 'syntax',
  definition: 'Python uses indentation to define blocks (the "off-side rule") and colons to introduce block headers. There are no braces for blocks.',
  subsections: [
    {
      heading: 'Indentation',
      body: [
        'Blocks are defined by consistent indentation. Use 4 spaces per level (PEP 8). The same block must use the same indent; mixing tabs and spaces is invalid.',
        'The first line of a block is the header (e.g. if condition:); the following indented lines are the block body.',
        'Empty blocks use pass: e.g. def no_op(): pass.',
      ],
    },
    {
      heading: 'Colons',
      body: [
        'A colon (:) ends a line that starts a block: if, elif, else, for, while, def, class, with, try, except, finally, match, case.',
        'Example: if x > 0: then the next line must be indented. The colon tells Python "the next block belongs to this statement."',
      ],
    },
    {
      heading: 'def and class',
      body: [
        'def name(params): — function definition. Parameters in parentheses; default values use =. The body is indented under def.',
        'class Name(Base): — class definition. The body (methods and attributes) is indented. Methods are defined with def method(self, ...):.',
      ],
    },
    {
      heading: 'Control flow structure',
      body: [
        'if condition: ... elif condition: ... else: — one branch runs; the first True condition wins.',
        'for variable in iterable: — loop over each item. while condition: — loop until condition is false.',
        'try: ... except ExceptionType: ... finally: ... — exception handling. with expr as var: — context manager.',
      ],
    },
    {
      heading: 'Comments and docstrings',
      body: [
        '# — single-line comment. Everything from # to the end of the line is ignored.',
        'Docstrings: a string literal as the first statement in a module, function, or class becomes the __doc__ attribute. Use """triple quotes""" for multi-line.',
      ],
    },
  ],
  examples: [
    'if x > 0:\n    print("positive")',
    'for item in items:\n    process(item)',
    'def greet(name):\n    """Say hello."""\n    return f"Hello, {name}"',
  ],
};

export const FUNDAMENTALS_ERRORS: FundamentalsSectionContent = {
  id: 'errors',
  definition: 'When Python cannot execute a line, it raises an exception. Knowing the common ones helps you fix code quickly.',
  subsections: [
    {
      heading: 'NameError',
      body: [
        'A name (variable or function) is used before it is defined, or it is misspelt. Fix: define the variable or function before use, or correct the spelling.',
        'Example: print(unknown) → NameError: name \'unknown\' is not defined.',
      ],
    },
    {
      heading: 'TypeError',
      body: [
        'An operation or function is applied to the wrong type (e.g. adding int and str, or calling a non-callable). Fix: convert types (int(), str()) or check what you pass.',
        'Example: "5" + 3 → TypeError. Use int("5") + 3 or "5" + str(3).',
      ],
    },
    {
      heading: 'IndentationError / SyntaxError',
      body: [
        'IndentationError: inconsistent indentation or unexpected indent/dedent. Fix: use 4 spaces consistently; ensure colons before blocks.',
        'SyntaxError: invalid syntax (e.g. missing colon, bracket, or quote). Fix: check the line pointed to by the caret; balance brackets and quotes.',
      ],
    },
    {
      heading: 'KeyError and IndexError',
      body: [
        'KeyError: a key is not in the dictionary. Fix: check the key exists (key in d) or use d.get(key, default).',
        'IndexError: index out of range for a sequence (list, tuple, string). Fix: use valid indices 0 to len(seq)-1, or check before indexing.',
      ],
    },
    {
      heading: 'AttributeError and ValueError',
      body: [
        'AttributeError: object has no attribute with that name. Fix: check spelling and that the object is the right type (e.g. dir(obj) to see attributes).',
        'ValueError: value is wrong for the operation (e.g. int("abc")). Fix: validate input or use try/except to handle invalid data.',
      ],
    },
    {
      heading: 'ZeroDivisionError',
      body: [
        'Division or modulo by zero. Fix: check the divisor is not zero before dividing, or use if b != 0: ... else ... to handle it.',
      ],
    },
  ],
  examples: [
    '# NameError: define first\nx = 10\nprint(x)',
    '# TypeError: use same types\nstr(42) + " apples"',
    '# KeyError: check or use .get()\nd = {"a": 1}\nd.get("b", 0)',
  ],
};

export const FUNDAMENTALS_DATATYPES: FundamentalsSectionContent = {
  id: 'datatypes',
  definition: 'Python has a small set of built-in types. Choosing the right one makes code clearer and more efficient.',
  subsections: [
    {
      heading: 'int — integers',
      body: [
        'Whole numbers: 0, 1, -5, 10**100. Use for counting, indices, and exact arithmetic. No fixed maximum size.',
      ],
    },
    {
      heading: 'float — floating-point',
      body: [
        'Decimal approximations: 3.14, -0.5, 1e10. Use for measurements and scientific math. Beware rounding (e.g. 0.1 + 0.2 != 0.3 in exact terms).',
      ],
    },
    {
      heading: 'str — strings',
      body: [
        'Text: "hello", \'world\', """multi\nline""". Immutable. Use for text, file content, and messages. Indexing and slicing: s[0], s[1:4].',
      ],
    },
    {
      heading: 'bool — booleans',
      body: [
        'True and False. Result of comparisons and conditions. Many values are "truthy" or "falsy" in conditions (e.g. 0, "", [] are falsy).',
      ],
    },
    {
      heading: 'list — mutable sequence',
      body: [
        'Ordered, changeable: [1, 2, 3], []. Use when order matters and you need to append, insert, or remove. Indexed by integer.',
      ],
    },
    {
      heading: 'tuple — immutable sequence',
      body: [
        '(1, 2, 3) or 1, 2, 3. Use for fixed records or as dict keys. Slightly more efficient than lists when you do not need to change.',
      ],
    },
    {
      heading: 'dict — mapping',
      body: [
        'Key–value pairs: {"a": 1, "b": 2}. Use for lookups by key (names, IDs, options). Keys must be hashable (e.g. str, int, tuple).',
      ],
    },
    {
      heading: 'set — unordered unique collection',
      body: [
        '{1, 2, 3} or set(iterable). No duplicates; no order. Use for membership tests and removing duplicates. Elements must be hashable.',
      ],
    },
    {
      heading: 'None',
      body: [
        'Single value None. Often used for "no result" or default. Functions without a return statement return None.',
      ],
    },
  ],
  examples: [
    'n = 42                    # int',
    'name = "Python"           # str',
    'xs = [1, 2, 3]            # list',
    'd = {"x": 1, "y": 2}      # dict',
    'unique = {1, 2, 2, 3}    # set → {1, 2, 3}',
  ],
};

export const FUNDAMENTALS_LOGIC: FundamentalsSectionContent = {
  id: 'logic',
  definition: 'Comparisons and boolean logic control decisions and loops. Python uses short-circuit evaluation for and and or.',
  subsections: [
    {
      heading: 'Comparison operators',
      body: [
        '== (equal), != (not equal), <, <=, >, >=. Return True or False. Chained comparisons: a < b < c is equivalent to a < b and b < c (b evaluated once).',
        'is — identity (same object in memory). is not — negated identity. Use is only for None or sentinels: if x is None.',
      ],
    },
    {
      heading: 'and, or, not',
      body: [
        'and: evaluates left; if falsy, returns it; otherwise returns the right. or: if left is truthy, returns it; otherwise returns the right.',
        'not x — inverts the truth value. Precedence: not then and then or. Use parentheses when mixing with comparisons.',
      ],
    },
    {
      heading: 'Short-circuiting',
      body: [
        'and: if the left side is False, the right side is not evaluated. or: if the left side is True, the right side is not evaluated.',
        'Useful for guards: (len(lst) > 0 and lst[0] == 1) avoids IndexError when lst is empty.',
      ],
    },
    {
      heading: 'Truthiness',
      body: [
        'In conditions, values are treated as True or False. Falsy: False, None, 0, 0.0, "", [], (), {}, set(). Everything else is truthy.',
        'So: if items: runs only when items is non-empty; if not name: runs when name is empty or None.',
      ],
    },
  ],
  examples: [
    'if 0 <= i < len(arr): ...',
    'result = x or default    # default when x is falsy',
    'if name and name.strip(): ...',
    'if value is None: ...',
  ],
};

export const FUNDAMENTALS_SECTIONS: FundamentalsSectionContent[] = [
  FUNDAMENTALS_BUILTINS,
  FUNDAMENTALS_SYNTAX,
  FUNDAMENTALS_ERRORS,
  FUNDAMENTALS_DATATYPES,
  FUNDAMENTALS_LOGIC,
];
