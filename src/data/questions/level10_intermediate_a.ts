// --- LEVEL 10 INTERMEDIATE A: File I/O, datetime module, re (regex) module ---
// 49 TRULY UNIQUE questions - NO number/variable variations
export const level10IntermediateA = [
  // ===== FILE I/O (1–18) =====

  // Q1
  (_i: number) => ({
    q: `What does open("file.txt", "r") do?`,
    o: [`Opens file for reading (default mode)`, `Opens file for writing`, `Opens file for appending`, `Creates a new file`],
    c: 0,
    e: `"r" mode opens a file for reading and is the default mode for open().`,
    de: `The "r" mode in open() opens a file for reading only. This is the default mode, so open("file.txt") and open("file.txt", "r") are equivalent. If the file does not exist, a FileNotFoundError is raised.

Key concepts:
• "r" stands for read mode
• It is the default mode when no mode is specified
• The file must already exist or FileNotFoundError is raised
• The file pointer is placed at the beginning of the file
• You can only read from the file, not write to it

How it works:
• open("file.txt", "r") opens file.txt for reading
• Returns a file object you can call read(), readline(), or readlines() on
• The file is opened in text mode by default

Example:
f = open("file.txt", "r")
content = f.read()
f.close()

Common uses:
• Reading configuration files
• Loading data from text files
• Processing log files
• Reading user input from files

Key Concepts:
• Key concepts: • "r" stands for read mode • It is the default mode when no mode is specified • The file must already exist or FileNotFoundError is raised • The file pointer is placed at the beginning of the file • You can only read from the file, not write to it How it works: • open("file.txt", "r") opens file.txt for reading • Returns a file object you can call read(), readline(), or readlines() on • The file is opened in text mode by default Example: f = open("file.txt", "r") content = f.read() f.close() Common uses: • Reading configuration files • Loading data from text files • Processing log files • Reading user input from files

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q2
  (_i: number) => ({
    q: `What does open("file.txt", "w") do?`,
    o: [`Opens for writing (creates or truncates)`, `Opens for reading`, `Opens for appending`, `Error if file exists`],
    c: 0,
    e: `"w" mode opens a file for writing, creating it if it doesn't exist or truncating it if it does.`,
    de: `The "w" mode opens a file for writing. If the file already exists, its contents are completely erased (truncated to zero length). If the file does not exist, a new file is created.

Key concepts:
• "w" stands for write mode
• Creates the file if it doesn't exist
• Truncates (erases) the file if it already exists
• The file pointer is placed at the beginning
• You can only write to the file, not read from it

How it works:
• open("file.txt", "w") opens or creates file.txt for writing
• Any existing content is immediately erased
• Returns a file object you can call write() or writelines() on

Example:
f = open("file.txt", "w")
f.write("Hello, World!")
f.close()

Edge cases:
• Be careful: "w" mode will destroy existing file contents without warning
• Use "a" mode if you want to add to existing content
• Use "x" mode if you want to avoid overwriting

Key Concepts:
• Key concepts: • "w" stands for write mode • Creates the file if it doesn't exist • Truncates (erases) the file if it already exists • The file pointer is placed at the beginning • You can only write to the file, not read from it How it works: • open("file.txt", "w") opens or creates file.txt for writing • Any existing content is immediately erased • Returns a file object you can call write() or writelines() on Example: f = open("file.txt", "w") f.write("Hello, World!") f.close() Edge cases: • Be careful: "w" mode will destroy existing file contents without warning • Use "a" mode if you want to add to existing content • Use "x" mode if you want to avoid overwriting

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q3
  (_i: number) => ({
    q: `What does open("file.txt", "a") do?`,
    o: [`Opens for appending at end of file`, `Opens for reading`, `Opens for writing (truncates)`, `Error if file exists`],
    c: 0,
    e: `"a" mode opens a file for appending — new data is written at the end of the file.`,
    de: `The "a" mode opens a file for appending. The file pointer is placed at the end of the file, so any new data written is added after the existing content. If the file does not exist, a new file is created.

Key concepts:
• "a" stands for append mode
• Writes new data at the end of the file
• Does not erase existing content
• Creates the file if it doesn't exist
• The file pointer starts at the end

How it works:
• open("file.txt", "a") opens file.txt for appending
• Existing content is preserved
• New writes go to the end of the file

Example:
f = open("log.txt", "a")
f.write("New log entry\\n")
f.close()

Common uses:
• Writing to log files
• Appending records to data files
• Adding entries to configuration files

Key Concepts:
• Key concepts: • "a" stands for append mode • Writes new data at the end of the file • Does not erase existing content • Creates the file if it doesn't exist • The file pointer starts at the end How it works: • open("file.txt", "a") opens file.txt for appending • Existing content is preserved • New writes go to the end of the file Example: f = open("log.txt", "a") f.write("New log entry\\n") f.close() Common uses: • Writing to log files • Appending records to data files • Adding entries to configuration files

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q4
  (_i: number) => ({
    q: `What does open("file.txt", "x") do?`,
    o: [`Creates file, fails if it already exists`, `Opens for reading`, `Opens for writing (truncates)`, `Opens for appending`],
    c: 0,
    e: `"x" mode is exclusive creation — it creates a new file but raises FileExistsError if the file already exists.`,
    de: `The "x" mode is for exclusive creation. It creates a new file and opens it for writing, but raises a FileExistsError if the file already exists. This is useful when you want to ensure you're not accidentally overwriting an existing file.

Key concepts:
• "x" stands for exclusive creation mode
• Creates a new file for writing
• Raises FileExistsError if the file already exists
• Useful for safely creating new files without overwriting

How it works:
• open("file.txt", "x") creates file.txt only if it doesn't exist
• If file.txt already exists, FileExistsError is raised
• Otherwise, behaves like "w" mode for writing

Example:
try:
    f = open("new_file.txt", "x")
    f.write("Brand new content")
    f.close()
except FileExistsError:
    print("File already exists!")

Common uses:
• Creating unique output files
• Preventing accidental data loss
• Atomic file creation patterns

Key Concepts:
• Key concepts: • "x" stands for exclusive creation mode • Creates a new file for writing • Raises FileExistsError if the file already exists • Useful for safely creating new files without overwriting How it works: • open("file.txt", "x") creates file.txt only if it doesn't exist • If file.txt already exists, FileExistsError is raised • Otherwise, behaves like "w" mode for writing Example: try: f = open("new_file.txt", "x") f.write("Brand new content") f.close() except FileExistsError: print("File already exists!") Common uses: • Creating unique output files • Preventing accidental data loss • Atomic file creation patterns

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q5
  (_i: number) => ({
    q: `What does open("file.txt", "rb") do?`,
    o: [`Opens for reading in binary mode`, `Opens for reading backwards`, `Opens for reading and writing`, `Opens a backup file`],
    c: 0,
    e: `"rb" mode opens a file for reading in binary mode, returning bytes instead of strings.`,
    de: `The "rb" mode opens a file for reading in binary mode. Instead of returning text strings, read operations return bytes objects. No encoding/decoding or newline translation is performed.

Key concepts:
• "rb" = read + binary
• Returns bytes objects instead of str objects
• No character encoding/decoding is applied
• No newline translation occurs
• Essential for non-text files (images, audio, etc.)

How it works:
• open("file.txt", "rb") opens the file in binary read mode
• f.read() returns a bytes object like b"Hello"
• No universal newline translation

Example:
f = open("image.png", "rb")
data = f.read()  # Returns bytes object
print(type(data))  # <class 'bytes'>
f.close()

Common uses:
• Reading image, audio, or video files
• Working with binary protocols
• Reading files where encoding is unknown
• Handling serialized binary data

Key Concepts:
• Key concepts: • "rb" = read + binary • Returns bytes objects instead of str objects • No character encoding/decoding is applied • No newline translation occurs • Essential for non-text files (images, audio, etc.) How it works: • open("file.txt", "rb") opens the file in binary read mode • f.read() returns a bytes object like b"Hello" • No universal newline translation Example: f = open("image.png", "rb") data = f.read() # Returns bytes object print(type(data)) # <class 'bytes'> f.close() Common uses: • Reading image, audio, or video files • Working with binary protocols • Reading files where encoding is unknown • Handling serialized binary data

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q6
  (_i: number) => ({
    q: `What does f.read() return on a text file?`,
    o: [`Entire file contents as a single string`, `A list of lines`, `First line only`, `Number of characters`],
    c: 0,
    e: `f.read() reads the entire file and returns all contents as one string.`,
    de: `The read() method on a file object reads the entire file contents and returns them as a single string (in text mode) or bytes object (in binary mode). After calling read(), the file pointer is at the end of the file.

Key concepts:
• read() returns the entire file as one string
• The file pointer moves to the end after reading
• Can pass an optional size argument: read(n) reads n characters
• Calling read() again returns an empty string (pointer at end)

How it works:
• f.read() reads from current position to end of file
• Returns everything as a single string
• Includes newline characters (\\n)
• f.read(10) reads only the first 10 characters

Example:
f = open("file.txt", "r")
content = f.read()     # "Hello\\nWorld\\n"
more = f.read()        # "" (pointer at end)
f.close()

Edge cases:
• On large files, read() loads everything into memory
• Use readline() or iterate for large files

Key Concepts:
• Key concepts: • read() returns the entire file as one string • The file pointer moves to the end after reading • Can pass an optional size argument: read(n) reads n characters • Calling read() again returns an empty string (pointer at end) How it works: • f.read() reads from current position to end of file • Returns everything as a single string • Includes newline characters (\\n) • f.read(10) reads only the first 10 characters Example: f = open("file.txt", "r") content = f.read() # "Hello\\nWorld\\n" more = f.read() # "" (pointer at end) f.close() Edge cases: • On large files, read() loads everything into memory • Use readline() or iterate for large files

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q7
  (_i: number) => ({
    q: `What does f.readline() return?`,
    o: [`One line including the newline character`, `All lines as a list`, `Entire file as a string`, `Line without newline`],
    c: 0,
    e: `readline() reads a single line from the file, including the trailing newline character.`,
    de: `The readline() method reads a single line from the file, including the trailing newline character (\\n). Each subsequent call to readline() returns the next line. When the end of the file is reached, readline() returns an empty string.

Key concepts:
• Returns one line including the \\n at the end
• Successive calls return successive lines
• Returns "" (empty string) at end of file
• The last line may or may not have a trailing \\n

How it works:
• f.readline() reads from current position to the next \\n
• Includes the \\n in the returned string
• Moves the file pointer to the start of the next line

Example:
# file.txt contains "Hello\\nWorld\\n"
f = open("file.txt", "r")
line1 = f.readline()  # "Hello\\n"
line2 = f.readline()  # "World\\n"
line3 = f.readline()  # "" (end of file)
f.close()

Edge cases:
• Empty line returns "\\n"
• End of file returns ""
• Last line without newline returns the text without \\n

Key Concepts:
• Key concepts: • Returns one line including the \\n at the end • Successive calls return successive lines • Returns "" (empty string) at end of file • The last line may or may not have a trailing \\n How it works: • f.readline() reads from current position to the next \\n • Includes the \\n in the returned string • Moves the file pointer to the start of the next line Example: # file.txt contains "Hello\\nWorld\\n" f = open("file.txt", "r") line1 = f.readline() # "Hello\\n" line2 = f.readline() # "World\\n" line3 = f.readline() # "" (end of file) f.close() Edge cases: • Empty line returns "\\n" • End of file returns "" • Last line without newline returns the text without \\n

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q8
  (_i: number) => ({
    q: `What does f.readlines() return?`,
    o: [`A list of all lines`, `Entire file as a string`, `One line as a string`, `Number of lines`],
    c: 0,
    e: `readlines() returns a list of all lines in the file, each including the newline character.`,
    de: `The readlines() method reads all remaining lines from the file and returns them as a list of strings. Each string in the list includes the trailing newline character (\\n), except possibly the last line.

Key concepts:
• Returns a list of strings, one per line
• Each string includes the trailing \\n
• Reads from current position to end of file
• Equivalent to list(f)

How it works:
• f.readlines() reads all lines and returns a list
• Each element is a line with its newline character
• The list preserves the order of lines

Example:
# file.txt contains "Hello\\nWorld\\nPython\\n"
f = open("file.txt", "r")
lines = f.readlines()
# ["Hello\\n", "World\\n", "Python\\n"]
f.close()

Common uses:
• Processing all lines of a file at once
• When you need random access to lines by index
• Filtering or transforming lines

Key Concepts:
• Key concepts: • Returns a list of strings, one per line • Each string includes the trailing \\n • Reads from current position to end of file • Equivalent to list(f) How it works: • f.readlines() reads all lines and returns a list • Each element is a line with its newline character • The list preserves the order of lines Example: # file.txt contains "Hello\\nWorld\\nPython\\n" f = open("file.txt", "r") lines = f.readlines() # ["Hello\\n", "World\\n", "Python\\n"] f.close() Common uses: • Processing all lines of a file at once • When you need random access to lines by index • Filtering or transforming lines

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q9
  (_i: number) => ({
    q: `What does f.write("text") return?`,
    o: [`The number of characters written`, `None`, `The text written`, `True if successful`],
    c: 0,
    e: `write() returns the number of characters (or bytes in binary mode) written to the file.`,
    de: `The write() method writes a string to the file and returns the number of characters written. In binary mode, it writes bytes and returns the number of bytes written.

Key concepts:
• Returns an integer: the number of characters written
• Does not automatically add a newline
• In text mode, writes str objects
• In binary mode, writes bytes objects

How it works:
• f.write("Hello") writes "Hello" and returns 5
• The return value is the character count of the written string
• You must add \\n yourself if you want newlines

Example:
f = open("file.txt", "w")
n = f.write("Hello")
print(n)  # 5
n = f.write("World\\n")
print(n)  # 6 (5 chars + newline)
f.close()

Edge cases:
• write("") writes nothing and returns 0
• The return value matches len() of the string written

Key Concepts:
• Key concepts: • Returns an integer: the number of characters written • Does not automatically add a newline • In text mode, writes str objects • In binary mode, writes bytes objects How it works: • f.write("Hello") writes "Hello" and returns 5 • The return value is the character count of the written string • You must add \\n yourself if you want newlines Example: f = open("file.txt", "w") n = f.write("Hello") print(n) # 5 n = f.write("World\\n") print(n) # 6 (5 chars + newline) f.close() Edge cases: • write("") writes nothing and returns 0 • The return value matches len() of the string written

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q10
  (_i: number) => ({
    q: `Does f.writelines(["a\\n", "b\\n"]) add newlines automatically?`,
    o: [`No, you must include newlines yourself`, `Yes, it adds \\n after each item`, `Yes, it adds \\n between items`, `It depends on the mode`],
    c: 0,
    e: `writelines() writes each string as-is — it does not add newline characters or any separator.`,
    de: `The writelines() method writes a list (or any iterable) of strings to the file. It does NOT add newline characters or any separator between the strings. Each string is written exactly as-is, concatenated together. You must include \\n in each string yourself if you want separate lines.

Key concepts:
• writelines() does NOT add newlines automatically
• Writes each string exactly as provided
• Accepts any iterable of strings
• Returns None (not the number of characters)

How it works:
• f.writelines(["a\\n", "b\\n"]) writes "a\\nb\\n" to the file
• f.writelines(["a", "b"]) writes "ab" (no newlines!)
• Each string from the iterable is written in order

Example:
f = open("file.txt", "w")
f.writelines(["Hello\\n", "World\\n"])
# File contains: Hello\\nWorld\\n
f.writelines(["No", "Newlines"])
# Appends: NoNewlines
f.close()

Edge cases:
• writelines([]) writes nothing
• The name is misleading — it doesn't write "lines", just strings

Key Concepts:
• Key concepts: • writelines() does NOT add newlines automatically • Writes each string exactly as provided • Accepts any iterable of strings • Returns None (not the number of characters) How it works: • f.writelines(["a\\n", "b\\n"]) writes "a\\nb\\n" to the file • f.writelines(["a", "b"]) writes "ab" (no newlines!) • Each string from the iterable is written in order Example: f = open("file.txt", "w") f.writelines(["Hello\\n", "World\\n"]) # File contains: Hello\\nWorld\\n f.writelines(["No", "Newlines"]) # Appends: NoNewlines f.close() Edge cases: • writelines([]) writes nothing • The name is misleading — it doesn't write "lines", just strings

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q11
  (_i: number) => ({
    q: `Why use "with open('f.txt') as f:" instead of "f = open('f.txt')"?`,
    o: [`Ensures file is closed even if exception occurs`, `It runs faster`, `It opens in binary mode`, `It allows writing`],
    c: 0,
    e: `The with statement ensures the file is properly closed when the block exits, even if an exception is raised.`,
    de: `The with statement (context manager) ensures the file is automatically closed when the block exits, whether it exits normally or due to an exception. Without with, you must manually call f.close(), and if an exception occurs before close(), the file may remain open.

Key concepts:
• with guarantees the file is closed when the block ends
• Handles exceptions: file is closed even if an error occurs
• No need to call f.close() manually
• Cleaner and safer than manual open/close

How it works:
• with open("f.txt") as f: opens the file
• The file object is assigned to f
• When the with block ends (normally or via exception), f.close() is called automatically

Example:
# Safe approach:
with open("f.txt") as f:
    data = f.read()
# File is automatically closed here

# Risky approach:
f = open("f.txt")
data = f.read()  # If this raises, f stays open!
f.close()

Common uses:
• Always prefer with for file operations
• Works with any context manager (not just files)
• Prevents resource leaks

Key Concepts:
• f.close() Common uses: • Always prefer with for file operations • Works with any context manager (not just files) • Prevents resource leaks

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q12
  (_i: number) => ({
    q: `What does f.seek(0) do?`,
    o: [`Moves file pointer to the beginning`, `Deletes the file`, `Reads first character`, `Closes the file`],
    c: 0,
    e: `seek(0) moves the file pointer back to the beginning of the file.`,
    de: `The seek() method moves the file pointer (the current read/write position) to a specified position. seek(0) moves the pointer to the very beginning of the file, allowing you to re-read or re-process the file from the start.

Key concepts:
• seek(offset) moves the file pointer to the given position
• seek(0) moves to the beginning of the file
• seek(0, 2) moves to the end of the file
• In text mode, only seek(0) and seek(f.tell()) are reliable

How it works:
• The file pointer tracks where the next read/write will occur
• seek(0) resets it to the start
• After f.read(), the pointer is at the end; seek(0) lets you read again

Example:
f = open("file.txt", "r")
content = f.read()     # Reads everything, pointer at end
f.seek(0)              # Move pointer back to start
content2 = f.read()    # Read everything again
f.close()

Edge cases:
• In text mode, seek with non-zero offset from current/end position may not work as expected
• In binary mode, seek works with any offset

Key Concepts:
• Key concepts: • seek(offset) moves the file pointer to the given position • seek(0) moves to the beginning of the file • seek(0, 2) moves to the end of the file • In text mode, only seek(0) and seek(f.tell()) are reliable How it works: • The file pointer tracks where the next read/write will occur • seek(0) resets it to the start • After f.read(), the pointer is at the end; seek(0) lets you read again Example: f = open("file.txt", "r") content = f.read() # Reads everything, pointer at end f.seek(0) # Move pointer back to start content2 = f.read() # Read everything again f.close() Edge cases: • In text mode, seek with non-zero offset from current/end position may not work as expected • In binary mode, seek works with any offset

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q13
  (_i: number) => ({
    q: `What does f.tell() return?`,
    o: [`Current file pointer position`, `File size in bytes`, `Number of lines`, `True if file is open`],
    c: 0,
    e: `tell() returns the current position of the file pointer as an integer.`,
    de: `The tell() method returns the current position of the file pointer as an integer. This indicates where the next read or write operation will occur. At the start of a file, tell() returns 0.

Key concepts:
• Returns an integer representing the current position
• Position 0 means the beginning of the file
• After reading n characters in text mode, tell() may not equal n (encoding-dependent)
• In binary mode, tell() returns the exact byte offset

How it works:
• f.tell() returns where the file pointer currently is
• After opening a file, tell() returns 0
• After f.read(), tell() returns the position at the end

Example:
f = open("file.txt", "r")
print(f.tell())  # 0 (beginning)
f.read(5)
print(f.tell())  # 5 (after reading 5 chars)
f.read()
print(f.tell())  # End of file position
f.close()

Common uses:
• Tracking read progress
• Saving and restoring file positions
• Checking if at end of file

Key Concepts:
• Key concepts: • Returns an integer representing the current position • Position 0 means the beginning of the file • After reading n characters in text mode, tell() may not equal n (encoding-dependent) • In binary mode, tell() returns the exact byte offset How it works: • f.tell() returns where the file pointer currently is • After opening a file, tell() returns 0 • After f.read(), tell() returns the position at the end Example: f = open("file.txt", "r") print(f.tell()) # 0 (beginning) f.read(5) print(f.tell()) # 5 (after reading 5 chars) f.read() print(f.tell()) # End of file position f.close() Common uses: • Tracking read progress • Saving and restoring file positions • Checking if at end of file

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q14
  (_i: number) => ({
    q: `What does f.closed check?`,
    o: [`Whether the file is closed`, `Whether the file exists`, `Whether the file is empty`, `Whether the file is readable`],
    c: 0,
    e: `f.closed is a boolean attribute that returns True if the file has been closed, False otherwise.`,
    de: `The closed attribute on a file object is a boolean that indicates whether the file has been closed. It returns True if the file is closed and False if it is still open.

Key concepts:
• f.closed is a property, not a method (no parentheses)
• Returns True if the file has been closed
• Returns False if the file is still open
• Useful for checking file state before operations

How it works:
• After opening a file, f.closed is False
• After calling f.close(), f.closed becomes True
• After a with block exits, f.closed is True

Example:
f = open("file.txt", "r")
print(f.closed)  # False
f.close()
print(f.closed)  # True

with open("file.txt") as f:
    print(f.closed)  # False
print(f.closed)      # True (after with block)

Edge cases:
• You can still access f.closed after closing (it's just a property)
• Attempting to read/write on a closed file raises ValueError

Key Concepts:
• Key concepts: • f.closed is a property, not a method (no parentheses) • Returns True if the file has been closed • Returns False if the file is still open • Useful for checking file state before operations How it works: • After opening a file, f.closed is False • After calling f.close(), f.closed becomes True • After a with block exits, f.closed is True Example: f = open("file.txt", "r") print(f.closed) # False f.close() print(f.closed) # True with open("file.txt") as f: print(f.closed) # False print(f.closed) # True (after with block) Edge cases: • You can still access f.closed after closing (it's just a property) • Attempting to read/write on a closed file raises ValueError

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q15
  (_i: number) => ({
    q: `Why specify encoding="utf-8" in open()?`,
    o: [`Ensures consistent text encoding across platforms`, `Makes the file smaller`, `Enables binary mode`, `Allows reading images`],
    c: 0,
    e: `Specifying encoding ensures the file is read/written using UTF-8 regardless of the platform's default encoding.`,
    de: `Specifying encoding="utf-8" in open() ensures the file is read and written using UTF-8 encoding, regardless of the operating system's default encoding. Without it, Python uses the platform's default encoding, which varies (e.g., UTF-8 on macOS/Linux, cp1252 on Windows).

Key concepts:
• Default encoding varies by platform
• UTF-8 is the most common and widely compatible encoding
• Prevents encoding errors when sharing files across platforms
• PEP 597 recommends always specifying encoding

How it works:
• open("file.txt", encoding="utf-8") forces UTF-8 encoding
• Prevents platform-dependent behavior
• Raises UnicodeDecodeError if file contains invalid UTF-8

Example:
# Consistent across all platforms:
with open("file.txt", "r", encoding="utf-8") as f:
    content = f.read()

# Platform-dependent (risky):
with open("file.txt", "r") as f:
    content = f.read()  # Uses system default encoding

Common uses:
• Working with multilingual text
• Ensuring cross-platform compatibility
• Processing web content (usually UTF-8)

Key Concepts:
• Key concepts: • Default encoding varies by platform • UTF-8 is the most common and widely compatible encoding • Prevents encoding errors when sharing files across platforms • PEP 597 recommends always specifying encoding How it works: • open("file.txt", encoding="utf-8") forces UTF-8 encoding • Prevents platform-dependent behavior • Raises UnicodeDecodeError if file contains invalid UTF-8 Example: # Consistent across all platforms: with open("file.txt", "r", encoding="utf-8") as f: content = f.read() # Platform-dependent (risky): with open("file.txt", "r") as f: content = f.read() # Uses system default encoding Common uses: • Working with multilingual text • Ensuring cross-platform compatibility • Processing web content (usually UTF-8)

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q16
  (_i: number) => ({
    q: `What is the default mode for open()?`,
    o: [`"r" (read text)`, `"w" (write text)`, `"rb" (read binary)`, `"a" (append)`],
    c: 0,
    e: `The default mode for open() is "r", which opens the file for reading in text mode.`,
    de: `When you call open("file.txt") without specifying a mode, Python defaults to "r" (read text mode). This means the file is opened for reading only, in text mode (as opposed to binary mode).

Key concepts:
• open("file.txt") is equivalent to open("file.txt", "r")
• Default is read-only, text mode
• The file must exist or FileNotFoundError is raised
• Text mode performs newline translation and encoding/decoding

How it works:
• open("file.txt") opens for reading in text mode
• Returns strings when you read from it
• File pointer starts at position 0

Example:
# These are equivalent:
f1 = open("file.txt")
f2 = open("file.txt", "r")
f3 = open("file.txt", "rt")  # "t" for text is also default

Edge cases:
• "r" mode raises FileNotFoundError if file doesn't exist
• "t" (text) is the default sub-mode, so "r" equals "rt"

Key Concepts:
• Key concepts: • open("file.txt") is equivalent to open("file.txt", "r") • Default is read-only, text mode • The file must exist or FileNotFoundError is raised • Text mode performs newline translation and encoding/decoding How it works: • open("file.txt") opens for reading in text mode • Returns strings when you read from it • File pointer starts at position 0 Example: # These are equivalent: f1 = open("file.txt") f2 = open("file.txt", "r") f3 = open("file.txt", "rt") # "t" for text is also default Edge cases: • "r" mode raises FileNotFoundError if file doesn't exist • "t" (text) is the default sub-mode, so "r" equals "rt"

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q17
  (_i: number) => ({
    q: `Can you iterate over a file object line by line with a for loop?`,
    o: [`Yes: for line in f: ...`, `No, you must use readlines()`, `No, you must use readline() in a loop`, `Only in binary mode`],
    c: 0,
    e: `File objects are iterable — you can loop over them directly with for line in f: to read one line at a time.`,
    de: `File objects in Python are iterable. You can use a for loop to iterate over a file object line by line. This is the most memory-efficient way to read a file because it reads one line at a time instead of loading the entire file into memory.

Key concepts:
• File objects support iteration protocol
• Each iteration yields one line (including \\n)
• Memory-efficient: only one line in memory at a time
• The preferred way to process files line by line

How it works:
• for line in f: reads one line per iteration
• Each line includes the trailing newline character
• Iteration stops at end of file
• Equivalent to calling readline() repeatedly

Example:
with open("file.txt", "r") as f:
    for line in f:
        print(line.strip())  # strip() removes \\n

Common uses:
• Processing large files without loading into memory
• Line-by-line text processing
• Filtering or transforming file contents

Key Concepts:
• Key concepts: • File objects support iteration protocol • Each iteration yields one line (including \\n) • Memory-efficient: only one line in memory at a time • The preferred way to process files line by line How it works: • for line in f: reads one line per iteration • Each line includes the trailing newline character • Iteration stops at end of file • Equivalent to calling readline() repeatedly Example: with open("file.txt", "r") as f: for line in f: print(line.strip()) # strip() removes \\n Common uses: • Processing large files without loading into memory • Line-by-line text processing • Filtering or transforming file contents

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q18
  (_i: number) => ({
    q: `What does f.truncate() do?`,
    o: [`Truncates file to current position`, `Deletes the file`, `Removes whitespace from contents`, `Closes the file`],
    c: 0,
    e: `truncate() truncates the file's size. Without arguments, it truncates at the current file pointer position.`,
    de: `The truncate() method resizes the file to at most the specified size. When called without arguments, it truncates the file at the current file pointer position, removing everything after that point. When called with a size argument, it truncates to that many bytes.

Key concepts:
• truncate() removes content after the current position
• truncate(n) truncates the file to n bytes
• The file must be opened in a writable mode
• The file pointer position is not changed by truncate

How it works:
• f.truncate() cuts the file at the current pointer position
• f.truncate(0) empties the file completely
• f.truncate(10) keeps only the first 10 bytes

Example:
f = open("file.txt", "r+")
f.read(5)        # Read 5 chars, pointer at position 5
f.truncate()     # Everything after position 5 is removed
f.close()

# To empty a file:
f = open("file.txt", "w")  # "w" mode truncates automatically
f.close()

Edge cases:
• Requires writable mode ("r+", "w", "a", etc.)
• If size is larger than current file, behavior is platform-dependent

Key Concepts:
• Key concepts: • truncate() removes content after the current position • truncate(n) truncates the file to n bytes • The file must be opened in a writable mode • The file pointer position is not changed by truncate How it works: • f.truncate() cuts the file at the current pointer position • f.truncate(0) empties the file completely • f.truncate(10) keeps only the first 10 bytes Example: f = open("file.txt", "r+") f.read(5) # Read 5 chars, pointer at position 5 f.truncate() # Everything after position 5 is removed f.close() # To empty a file: f = open("file.txt", "w") # "w" mode truncates automatically f.close() Edge cases: • Requires writable mode ("r+", "w", "a", etc.) • If size is larger than current file, behavior is platform-dependent

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // ===== DATETIME MODULE (19–35) =====

  // Q19
  (_i: number) => ({
    q: `What does date.today() return?\nfrom datetime import date\nresult = date.today()`,
    o: [`Today's date as a date object`, `Current date and time`, `Today's date as a string`, `A timestamp integer`],
    c: 0,
    e: `date.today() returns today's date as a datetime.date object.`,
    de: `The date.today() class method returns the current local date as a datetime.date object. It contains the year, month, and day, but no time information.

Key concepts:
• Returns a date object (not a string, not a datetime)
• Contains year, month, day attributes
• Based on the local system clock
• No time zone information

How it works:
• date.today() queries the system clock
• Returns a date object with today's year, month, day
• Different from datetime.now() which includes time

Example:
from datetime import date
today = date.today()
print(today)        # e.g., 2024-01-15
print(type(today))  # <class 'datetime.date'>
print(today.year)   # e.g., 2024

Common uses:
• Getting the current date for comparisons
• Date arithmetic with timedelta
• Logging and timestamps

Key Concepts:
• Key concepts: • Returns a date object (not a string, not a datetime) • Contains year, month, day attributes • Based on the local system clock • No time zone information How it works: • date.today() queries the system clock • Returns a date object with today's year, month, day • Different from datetime.now() which includes time Example: from datetime import date today = date.today() print(today) # e.g., 2024-01-15 print(type(today)) # <class 'datetime.date'> print(today.year) # e.g., 2024 Common uses: • Getting the current date for comparisons • Date arithmetic with timedelta • Logging and timestamps

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q20
  (_i: number) => ({
    q: `What does datetime.now() return?\nfrom datetime import datetime\nresult = datetime.now()`,
    o: [`Current date and time as datetime object`, `Today's date only`, `Current time only`, `A Unix timestamp`],
    c: 0,
    e: `datetime.now() returns the current local date and time as a datetime object.`,
    de: `The datetime.now() class method returns the current local date and time as a datetime.datetime object. It contains year, month, day, hour, minute, second, and microsecond.

Key concepts:
• Returns a datetime object (date + time combined)
• Includes year, month, day, hour, minute, second, microsecond
• Based on the local system clock
• Can accept an optional timezone argument

How it works:
• datetime.now() queries the system clock
• Returns a datetime object with full date and time
• Microsecond precision

Example:
from datetime import datetime
now = datetime.now()
print(now)          # e.g., 2024-01-15 10:30:45.123456
print(type(now))    # <class 'datetime.datetime'>
print(now.hour)     # e.g., 10
print(now.minute)   # e.g., 30

Common uses:
• Timestamps for logging
• Measuring elapsed time
• Scheduling and time-based logic

Key Concepts:
• Key concepts: • Returns a datetime object (date + time combined) • Includes year, month, day, hour, minute, second, microsecond • Based on the local system clock • Can accept an optional timezone argument How it works: • datetime.now() queries the system clock • Returns a datetime object with full date and time • Microsecond precision Example: from datetime import datetime now = datetime.now() print(now) # e.g., 2024-01-15 10:30:45.123456 print(type(now)) # <class 'datetime.datetime'> print(now.hour) # e.g., 10 print(now.minute) # e.g., 30 Common uses: • Timestamps for logging • Measuring elapsed time • Scheduling and time-based logic

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q21
  (_i: number) => ({
    q: `What is the result of:\nfrom datetime import date\nprint(date(2024, 1, 15).year)`,
    o: [`2024`, `1`, `15`, `Error`],
    c: 0,
    e: `The .year attribute of a date object returns the year component.`,
    de: `The .year attribute on a date or datetime object returns the year as an integer. Date objects store year, month, and day as separate attributes.

Key concepts:
• date(year, month, day) creates a date object
• .year returns the year as an integer
• .month returns the month (1-12)
• .day returns the day (1-31)

How it works:
• date(2024, 1, 15) creates January 15, 2024
• .year accesses the year component: 2024
• These are read-only attributes (date objects are immutable)

Example:
from datetime import date
d = date(2024, 1, 15)
print(d.year)   # 2024
print(d.month)  # 1
print(d.day)    # 15

Key Concepts:
• Key concepts: • date(year, month, day) creates a date object • .year returns the year as an integer • .month returns the month (1-12) • .day returns the day (1-31) How it works: • date(2024, 1, 15) creates January 15, 2024 • .year accesses the year component: 2024 • These are read-only attributes (date objects are immutable) Example: from datetime import date d = date(2024, 1, 15) print(d.year) # 2024 print(d.month) # 1 print(d.day) # 15

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q22
  (_i: number) => ({
    q: `What is the result of:\nfrom datetime import date\nprint(date(2024, 1, 15).month)`,
    o: [`1`, `2024`, `15`, `January`],
    c: 0,
    e: `The .month attribute of a date object returns the month as an integer (1-12).`,
    de: `The .month attribute returns the month component of a date object as an integer from 1 to 12, where 1 is January and 12 is December.

Key concepts:
• .month returns an integer, not a string name
• Range is 1-12 (January=1, December=12)
• Date objects are immutable

How it works:
• date(2024, 1, 15) creates January 15, 2024
• .month returns 1 (January)

Example:
from datetime import date
d = date(2024, 1, 15)
print(d.month)  # 1
d2 = date(2024, 12, 25)
print(d2.month)  # 12

Key Concepts:
• Key concepts: • .month returns an integer, not a string name • Range is 1-12 (January=1, December=12) • Date objects are immutable How it works: • date(2024, 1, 15) creates January 15, 2024 • .month returns 1 (January) Example: from datetime import date d = date(2024, 1, 15) print(d.month) # 1 d2 = date(2024, 12, 25) print(d2.month) # 12

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q23
  (_i: number) => ({
    q: `What is the result of:\nfrom datetime import date\nprint(date(2024, 1, 15).day)`,
    o: [`15`, `1`, `2024`, `Monday`],
    c: 0,
    e: `The .day attribute of a date object returns the day of the month as an integer.`,
    de: `The .day attribute returns the day-of-month component of a date object as an integer. The valid range depends on the month (1-28, 1-29, 1-30, or 1-31).

Key concepts:
• .day returns the day of the month as an integer
• Range varies by month (e.g., 1-31 for January)
• Leap year affects February's range

How it works:
• date(2024, 1, 15) creates January 15, 2024
• .day returns 15

Example:
from datetime import date
d = date(2024, 1, 15)
print(d.day)  # 15
d2 = date(2024, 2, 29)  # 2024 is a leap year
print(d2.day)  # 29

Key Concepts:
• Key concepts: • .day returns the day of the month as an integer • Range varies by month (e.g., 1-31 for January) • Leap year affects February's range How it works: • date(2024, 1, 15) creates January 15, 2024 • .day returns 15 Example: from datetime import date d = date(2024, 1, 15) print(d.day) # 15 d2 = date(2024, 2, 29) # 2024 is a leap year print(d2.day) # 29

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q24
  (_i: number) => ({
    q: `What is the result of:\nfrom datetime import datetime\nprint(datetime(2024, 1, 15, 10, 30).hour)`,
    o: [`10`, `30`, `15`, `2024`],
    c: 0,
    e: `The .hour attribute of a datetime object returns the hour component (0-23).`,
    de: `The .hour attribute returns the hour component of a datetime object as an integer from 0 to 23 (24-hour format).

Key concepts:
• datetime(year, month, day, hour, minute) creates a datetime
• .hour returns the hour as an integer (0-23)
• 0 = midnight, 12 = noon, 23 = 11 PM

How it works:
• datetime(2024, 1, 15, 10, 30) creates Jan 15, 2024 at 10:30
• .hour returns 10

Example:
from datetime import datetime
dt = datetime(2024, 1, 15, 10, 30)
print(dt.hour)    # 10
print(dt.minute)  # 30
print(dt.second)  # 0 (default)

Key Concepts:
• Key concepts: • datetime(year, month, day, hour, minute) creates a datetime • .hour returns the hour as an integer (0-23) • 0 = midnight, 12 = noon, 23 = 11 PM How it works: • datetime(2024, 1, 15, 10, 30) creates Jan 15, 2024 at 10:30 • .hour returns 10 Example: from datetime import datetime dt = datetime(2024, 1, 15, 10, 30) print(dt.hour) # 10 print(dt.minute) # 30 print(dt.second) # 0 (default)

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q25
  (_i: number) => ({
    q: `What is the result of:\nfrom datetime import datetime\nprint(datetime(2024, 1, 15, 10, 30).minute)`,
    o: [`30`, `10`, `15`, `1`],
    c: 0,
    e: `The .minute attribute of a datetime object returns the minute component (0-59).`,
    de: `The .minute attribute returns the minute component of a datetime object as an integer from 0 to 59.

Key concepts:
• .minute returns the minute as an integer (0-59)
• Defaults to 0 if not specified in the constructor

How it works:
• datetime(2024, 1, 15, 10, 30) creates Jan 15, 2024 at 10:30
• .minute returns 30

Example:
from datetime import datetime
dt = datetime(2024, 1, 15, 10, 30, 45)
print(dt.minute)  # 30
print(dt.second)  # 45

Key Concepts:
• Key concepts: • .minute returns the minute as an integer (0-59) • Defaults to 0 if not specified in the constructor How it works: • datetime(2024, 1, 15, 10, 30) creates Jan 15, 2024 at 10:30 • .minute returns 30 Example: from datetime import datetime dt = datetime(2024, 1, 15, 10, 30, 45) print(dt.minute) # 30 print(dt.second) # 45

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q26
  (_i: number) => ({
    q: `What is the result of:\nfrom datetime import timedelta\nprint(timedelta(days=5).days)`,
    o: [`5`, `432000`, `120`, `0`],
    c: 0,
    e: `The .days attribute of a timedelta object returns the number of days in the duration.`,
    de: `The timedelta object represents a duration. The .days attribute returns the days component as an integer. Internally, timedelta stores only days, seconds, and microseconds.

Key concepts:
• timedelta(days=5) creates a 5-day duration
• .days returns the days component
• timedelta normalizes all values into days, seconds, microseconds
• Can be created with weeks, days, hours, minutes, seconds, milliseconds, microseconds

How it works:
• timedelta(days=5) creates a duration of 5 days
• .days returns 5
• .seconds returns remaining seconds (after full days)
• .microseconds returns remaining microseconds

Example:
from datetime import timedelta
td = timedelta(days=5)
print(td.days)         # 5
print(td.seconds)      # 0
print(td.total_seconds())  # 432000.0

Key Concepts:
• Key concepts: • timedelta(days=5) creates a 5-day duration • .days returns the days component • timedelta normalizes all values into days, seconds, microseconds • Can be created with weeks, days, hours, minutes, seconds, milliseconds, microseconds How it works: • timedelta(days=5) creates a duration of 5 days • .days returns 5 • .seconds returns remaining seconds (after full days) • .microseconds returns remaining microseconds Example: from datetime import timedelta td = timedelta(days=5) print(td.days) # 5 print(td.seconds) # 0 print(td.total_seconds()) # 432000.0

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q27
  (_i: number) => ({
    q: `What is the result of:\nfrom datetime import date, timedelta\nprint(date(2024, 1, 15) + timedelta(days=10))`,
    o: [`2024-01-25`, `2024-01-05`, `2024-02-15`, `Error`],
    c: 0,
    e: `Adding a timedelta of 10 days to January 15 gives January 25.`,
    de: `You can add a timedelta to a date object to get a new date. The + operator creates a new date shifted forward by the duration specified in the timedelta.

Key concepts:
• date + timedelta = new date (shifted forward)
• date - timedelta = new date (shifted backward)
• date - date = timedelta (duration between two dates)
• The result is a new date object (dates are immutable)

How it works:
• date(2024, 1, 15) is January 15, 2024
• timedelta(days=10) represents 10 days
• January 15 + 10 days = January 25
• Returns date(2024, 1, 25)

Example:
from datetime import date, timedelta
d = date(2024, 1, 15)
future = d + timedelta(days=10)
print(future)  # 2024-01-25
past = d - timedelta(days=10)
print(past)    # 2024-01-05

Key Concepts:
• Key concepts: • date + timedelta = new date (shifted forward) • date - timedelta = new date (shifted backward) • date - date = timedelta (duration between two dates) • The result is a new date object (dates are immutable) How it works: • date(2024, 1, 15) is January 15, 2024 • timedelta(days=10) represents 10 days • January 15 + 10 days = January 25 • Returns date(2024, 1, 25) Example: from datetime import date, timedelta d = date(2024, 1, 15) future = d + timedelta(days=10) print(future) # 2024-01-25 past = d - timedelta(days=10) print(past) # 2024-01-05

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q28
  (_i: number) => ({
    q: `What is the result of:\nfrom datetime import date\nprint((date(2024, 1, 15) - date(2024, 1, 10)).days)`,
    o: [`5`, `-5`, `10`, `Error`],
    c: 0,
    e: `Subtracting two date objects gives a timedelta; .days returns 5 (the difference).`,
    de: `Subtracting one date from another returns a timedelta object representing the duration between them. The .days attribute gives the number of days difference.

Key concepts:
• date - date = timedelta
• The result can be positive or negative
• .days gives the integer number of days
• Later date - earlier date = positive days

How it works:
• date(2024, 1, 15) - date(2024, 1, 10) = timedelta(days=5)
• .days returns 5
• If reversed: date(2024, 1, 10) - date(2024, 1, 15) = timedelta(days=-5)

Example:
from datetime import date
d1 = date(2024, 1, 15)
d2 = date(2024, 1, 10)
diff = d1 - d2
print(diff.days)  # 5
print(type(diff))  # <class 'datetime.timedelta'>

Key Concepts:
• Key concepts: • date - date = timedelta • The result can be positive or negative • .days gives the integer number of days • Later date - earlier date = positive days How it works: • date(2024, 1, 15) - date(2024, 1, 10) = timedelta(days=5) • .days returns 5 • If reversed: date(2024, 1, 10) - date(2024, 1, 15) = timedelta(days=-5) Example: from datetime import date d1 = date(2024, 1, 15) d2 = date(2024, 1, 10) diff = d1 - d2 print(diff.days) # 5 print(type(diff)) # <class 'datetime.timedelta'>

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q29
  (_i: number) => ({
    q: `What is the result of:\nfrom datetime import datetime\nprint(datetime(2024, 1, 15).strftime("%Y-%m-%d"))`,
    o: [`"2024-01-15"`, `"15-01-2024"`, `"01/15/2024"`, `"2024/01/15"`],
    c: 0,
    e: `strftime("%Y-%m-%d") formats a datetime as YYYY-MM-DD.`,
    de: `The strftime() method formats a date or datetime object as a string according to the specified format codes. %Y = 4-digit year, %m = 2-digit month, %d = 2-digit day.

Key concepts:
• strftime = "string format time"
• %Y = 4-digit year (2024)
• %m = zero-padded month (01-12)
• %d = zero-padded day (01-31)
• The separator characters (-, /, etc.) are literal

How it works:
• datetime(2024, 1, 15) is January 15, 2024
• strftime("%Y-%m-%d") formats as "2024-01-15"
• Each %X code is replaced by the corresponding component

Example:
from datetime import datetime
dt = datetime(2024, 1, 15)
print(dt.strftime("%Y-%m-%d"))    # "2024-01-15"
print(dt.strftime("%d/%m/%Y"))    # "15/01/2024"
print(dt.strftime("%B %d, %Y"))   # "January 15, 2024"

Key Concepts:
• Key concepts: • strftime = "string format time" • %Y = 4-digit year (2024) • %m = zero-padded month (01-12) • %d = zero-padded day (01-31) • The separator characters (-, /, etc.) are literal How it works: • datetime(2024, 1, 15) is January 15, 2024 • strftime("%Y-%m-%d") formats as "2024-01-15" • Each %X code is replaced by the corresponding component Example: from datetime import datetime dt = datetime(2024, 1, 15) print(dt.strftime("%Y-%m-%d")) # "2024-01-15" print(dt.strftime("%d/%m/%Y")) # "15/01/2024" print(dt.strftime("%B %d, %Y")) # "January 15, 2024"

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q30
  (_i: number) => ({
    q: `What is the result of:\nfrom datetime import datetime\nprint(datetime(2024, 1, 15).strftime("%d/%m/%Y"))`,
    o: [`"15/01/2024"`, `"2024-01-15"`, `"01/15/2024"`, `"2024/01/15"`],
    c: 0,
    e: `strftime("%d/%m/%Y") formats as DD/MM/YYYY.`,
    de: `The format string "%d/%m/%Y" uses day-month-year order with forward slashes as separators. This is the common European date format.

Key concepts:
• %d = zero-padded day (01-31)
• %m = zero-padded month (01-12)
• %Y = 4-digit year
• / characters are literal separators

How it works:
• datetime(2024, 1, 15) is January 15, 2024
• %d = "15", %m = "01", %Y = "2024"
• Result: "15/01/2024"

Example:
from datetime import datetime
dt = datetime(2024, 1, 15)
print(dt.strftime("%d/%m/%Y"))    # "15/01/2024"
print(dt.strftime("%m/%d/%Y"))    # "01/15/2024" (US format)
print(dt.strftime("%Y/%m/%d"))    # "2024/01/15" (ISO-like)

Key Concepts:
• Key concepts: • %d = zero-padded day (01-31) • %m = zero-padded month (01-12) • %Y = 4-digit year • / characters are literal separators How it works: • datetime(2024, 1, 15) is January 15, 2024 • %d = "15", %m = "01", %Y = "2024" • Result: "15/01/2024" Example: from datetime import datetime dt = datetime(2024, 1, 15) print(dt.strftime("%d/%m/%Y")) # "15/01/2024" print(dt.strftime("%m/%d/%Y")) # "01/15/2024" (US format) print(dt.strftime("%Y/%m/%d")) # "2024/01/15" (ISO-like)

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q31
  (_i: number) => ({
    q: `What is the result of:\nfrom datetime import datetime\nprint(datetime.strptime("2024-01-15", "%Y-%m-%d").day)`,
    o: [`15`, `1`, `2024`, `Error`],
    c: 0,
    e: `strptime parses a date string into a datetime object; .day returns the day component (15).`,
    de: `The strptime() class method parses a string into a datetime object according to a format string. It is the inverse of strftime(). After parsing, you can access .day, .month, .year, etc.

Key concepts:
• strptime = "string parse time"
• First argument: the date string to parse
• Second argument: the format string matching the input
• Returns a datetime object
• Inverse of strftime()

How it works:
• datetime.strptime("2024-01-15", "%Y-%m-%d") parses the string
• Creates datetime(2024, 1, 15, 0, 0)
• .day returns 15

Example:
from datetime import datetime
dt = datetime.strptime("2024-01-15", "%Y-%m-%d")
print(dt.day)    # 15
print(dt.month)  # 1
print(dt.year)   # 2024
print(type(dt))  # <class 'datetime.datetime'>

Edge cases:
• Raises ValueError if the string doesn't match the format
• Time components default to 0 when not specified

Key Concepts:
• Key concepts: • strptime = "string parse time" • First argument: the date string to parse • Second argument: the format string matching the input • Returns a datetime object • Inverse of strftime() How it works: • datetime.strptime("2024-01-15", "%Y-%m-%d") parses the string • Creates datetime(2024, 1, 15, 0, 0) • .day returns 15 Example: from datetime import datetime dt = datetime.strptime("2024-01-15", "%Y-%m-%d") print(dt.day) # 15 print(dt.month) # 1 print(dt.year) # 2024 print(type(dt)) # <class 'datetime.datetime'> Edge cases: • Raises ValueError if the string doesn't match the format • Time components default to 0 when not specified

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q32
  (_i: number) => ({
    q: `What is the result of:\nfrom datetime import date\nprint(date(2024, 1, 15).weekday())`,
    o: [`0 (Monday)`, `1 (Tuesday)`, `6 (Sunday)`, `1 (Monday)`],
    c: 0,
    e: `weekday() returns the day of the week as an integer where Monday=0 and Sunday=6. January 15, 2024 is a Monday.`,
    de: `The weekday() method returns the day of the week as an integer, where Monday is 0 and Sunday is 6. January 15, 2024 was a Monday, so weekday() returns 0.

Key concepts:
• Monday = 0, Tuesday = 1, ..., Sunday = 6
• Different from isoweekday() where Monday = 1 and Sunday = 7
• Returns an integer, not a string

How it works:
• date(2024, 1, 15) is January 15, 2024, which is a Monday
• weekday() returns 0 (Monday = 0)

Example:
from datetime import date
d = date(2024, 1, 15)  # Monday
print(d.weekday())      # 0
print(d.isoweekday())   # 1 (ISO: Monday=1)

d2 = date(2024, 1, 14)  # Sunday
print(d2.weekday())     # 6
print(d2.isoweekday())  # 7

Key Concepts:
• Key concepts: • Monday = 0, Tuesday = 1, ..., Sunday = 6 • Different from isoweekday() where Monday = 1 and Sunday = 7 • Returns an integer, not a string How it works: • date(2024, 1, 15) is January 15, 2024, which is a Monday • weekday() returns 0 (Monday = 0) Example: from datetime import date d = date(2024, 1, 15) # Monday print(d.weekday()) # 0 print(d.isoweekday()) # 1 (ISO: Monday=1) d2 = date(2024, 1, 14) # Sunday print(d2.weekday()) # 6 print(d2.isoweekday()) # 7

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q33
  (_i: number) => ({
    q: `What is the result of:\nfrom datetime import date\nprint(date(2024, 1, 15).isoformat())`,
    o: [`"2024-01-15"`, `"15/01/2024"`, `"Jan 15, 2024"`, `"20240115"`],
    c: 0,
    e: `isoformat() returns the date as a string in ISO 8601 format: YYYY-MM-DD.`,
    de: `The isoformat() method returns the date as a string in ISO 8601 format (YYYY-MM-DD). This is the same format produced by str(date_obj).

Key concepts:
• Returns a string in ISO 8601 format
• Format is always YYYY-MM-DD
• Equivalent to str(date_obj) for date objects
• For datetime objects, includes time: YYYY-MM-DDTHH:MM:SS

How it works:
• date(2024, 1, 15).isoformat() returns "2024-01-15"
• Always zero-padded (month 1 becomes "01")

Example:
from datetime import date, datetime
d = date(2024, 1, 15)
print(d.isoformat())  # "2024-01-15"
print(str(d))          # "2024-01-15" (same)

dt = datetime(2024, 1, 15, 10, 30)
print(dt.isoformat())  # "2024-01-15T10:30:00"

Key Concepts:
• Key concepts: • Returns a string in ISO 8601 format • Format is always YYYY-MM-DD • Equivalent to str(date_obj) for date objects • For datetime objects, includes time: YYYY-MM-DDTHH:MM:SS How it works: • date(2024, 1, 15).isoformat() returns "2024-01-15" • Always zero-padded (month 1 becomes "01") Example: from datetime import date, datetime d = date(2024, 1, 15) print(d.isoformat()) # "2024-01-15" print(str(d)) # "2024-01-15" (same) dt = datetime(2024, 1, 15, 10, 30) print(dt.isoformat()) # "2024-01-15T10:30:00"

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q34
  (_i: number) => ({
    q: `What is the result of:\nfrom datetime import timedelta\nprint(timedelta(hours=25).days)`,
    o: [`1`, `25`, `0`, `Error`],
    c: 0,
    e: `25 hours equals 1 day and 1 hour. The .days attribute returns just the days component: 1.`,
    de: `When creating a timedelta with hours=25, Python normalizes the value internally. Since 25 hours = 1 day + 1 hour, the .days attribute returns 1. The remaining 1 hour (3600 seconds) is stored in .seconds.

Key concepts:
• timedelta normalizes all values to days, seconds, microseconds
• 25 hours = 1 day + 1 hour
• .days returns only the full days component
• .seconds returns the remaining seconds (not total seconds)

How it works:
• timedelta(hours=25) is normalized to 1 day + 3600 seconds
• .days returns 1
• .seconds returns 3600 (1 hour in seconds)
• .total_seconds() returns 90000.0 (25 * 3600)

Example:
from datetime import timedelta
td = timedelta(hours=25)
print(td.days)            # 1
print(td.seconds)         # 3600
print(td.total_seconds()) # 90000.0

Key Concepts:
• Key concepts: • timedelta normalizes all values to days, seconds, microseconds • 25 hours = 1 day + 1 hour • .days returns only the full days component • .seconds returns the remaining seconds (not total seconds) How it works: • timedelta(hours=25) is normalized to 1 day + 3600 seconds • .days returns 1 • .seconds returns 3600 (1 hour in seconds) • .total_seconds() returns 90000.0 (25 * 3600) Example: from datetime import timedelta td = timedelta(hours=25) print(td.days) # 1 print(td.seconds) # 3600 print(td.total_seconds()) # 90000.0

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q35
  (_i: number) => ({
    q: `What is the result of:\nfrom datetime import timedelta\nprint(timedelta(hours=25).seconds)`,
    o: [`3600`, `90000`, `25`, `0`],
    c: 0,
    e: `25 hours = 1 day + 1 hour. The .seconds attribute returns the remaining seconds after full days: 3600.`,
    de: `The .seconds attribute of a timedelta returns the remaining seconds after accounting for full days. For timedelta(hours=25), that's 25 hours = 1 day + 1 hour, so .seconds returns 3600 (1 hour = 3600 seconds). Note: .seconds is NOT total_seconds().

Key concepts:
• .seconds returns remaining seconds after removing full days
• Different from .total_seconds() which returns the entire duration in seconds
• .seconds is always in range [0, 86400) (0 to 24 hours)
• timedelta stores only: days, seconds, microseconds

How it works:
• timedelta(hours=25) normalizes to 1 day + 3600 seconds
• .days = 1
• .seconds = 3600 (remaining after 1 full day)
• .total_seconds() = 90000.0 (25 * 3600)

Example:
from datetime import timedelta
td = timedelta(hours=25)
print(td.seconds)          # 3600 (remaining after days)
print(td.total_seconds())  # 90000.0 (total)

td2 = timedelta(days=2, hours=3)
print(td2.seconds)  # 10800 (3 hours in seconds)

Key Concepts:
• Key concepts: • .seconds returns remaining seconds after removing full days • Different from .total_seconds() which returns the entire duration in seconds • .seconds is always in range [0, 86400) (0 to 24 hours) • timedelta stores only: days, seconds, microseconds How it works: • timedelta(hours=25) normalizes to 1 day + 3600 seconds • .days = 1 • .seconds = 3600 (remaining after 1 full day) • .total_seconds() = 90000.0 (25 * 3600) Example: from datetime import timedelta td = timedelta(hours=25) print(td.seconds) # 3600 (remaining after days) print(td.total_seconds()) # 90000.0 (total) td2 = timedelta(days=2, hours=3) print(td2.seconds) # 10800 (3 hours in seconds)

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // ===== RE (REGEX) MODULE (36–49) =====

  // Q36
  (_i: number) => ({
    q: `What is the result of:\nimport re\nprint(re.match(r"\\d+", "123abc").group())`,
    o: [`"123"`, `"123abc"`, `"abc"`, `None`],
    c: 0,
    e: `re.match checks at the beginning of the string. \\d+ matches one or more digits, so it matches "123".`,
    de: `re.match() tries to match the pattern at the beginning of the string. The pattern \\d+ matches one or more digits. Since "123abc" starts with digits, it matches "123". The .group() method returns the matched text.

Key concepts:
• re.match() only checks at the start of the string
• \\d matches any digit (0-9)
• + means "one or more" of the preceding pattern
• .group() returns the full matched string
• Returns None if no match at the start

How it works:
• r"\\d+" is a raw string pattern for one or more digits
• "123abc" starts with "123" which matches \\d+
• The match stops at "a" (not a digit)
• .group() returns "123"

Example:
import re
m = re.match(r"\\d+", "123abc")
print(m.group())   # "123"
print(m.span())    # (0, 3)
m2 = re.match(r"\\d+", "abc123")
print(m2)          # None (no digits at start)

Key Concepts:
• Key concepts: • re.match() only checks at the start of the string • \\d matches any digit (0-9) • + means "one or more" of the preceding pattern • .group() returns the full matched string • Returns None if no match at the start How it works: • r"\\d+" is a raw string pattern for one or more digits • "123abc" starts with "123" which matches \\d+ • The match stops at "a" (not a digit) • .group() returns "123" Example: import re m = re.match(r"\\d+", "123abc") print(m.group()) # "123" print(m.span()) # (0, 3) m2 = re.match(r"\\d+", "abc123") print(m2) # None (no digits at start)

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q37
  (_i: number) => ({
    q: `What is the result of:\nimport re\nprint(re.search(r"\\d+", "abc123def").group())`,
    o: [`"123"`, `"abc123def"`, `"abc"`, `None`],
    c: 0,
    e: `re.search scans through the entire string and finds the first match. \\d+ matches "123".`,
    de: `re.search() scans through the entire string looking for the first location where the pattern matches. Unlike re.match(), it doesn't require the match to be at the beginning of the string.

Key concepts:
• re.search() searches anywhere in the string
• Returns the first match found
• \\d+ matches one or more digits
• Returns None if no match is found anywhere
• .group() returns the matched text

How it works:
• r"\\d+" looks for one or more digits
• "abc123def" — skips "abc", finds "123", stops at "d"
• .group() returns "123"

Example:
import re
m = re.search(r"\\d+", "abc123def")
print(m.group())   # "123"
print(m.start())   # 3 (position where match starts)
print(m.end())     # 6 (position after match ends)

Key Concepts:
• Key concepts: • re.search() searches anywhere in the string • Returns the first match found • \\d+ matches one or more digits • Returns None if no match is found anywhere • .group() returns the matched text How it works: • r"\\d+" looks for one or more digits • "abc123def" — skips "abc", finds "123", stops at "d" • .group() returns "123" Example: import re m = re.search(r"\\d+", "abc123def") print(m.group()) # "123" print(m.start()) # 3 (position where match starts) print(m.end()) # 6 (position after match ends)

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q38
  (_i: number) => ({
    q: `What is the difference between re.match() and re.search()?`,
    o: [`match checks beginning only; search checks anywhere`, `search checks beginning only; match checks anywhere`, `They are identical`, `match returns all matches; search returns first`],
    c: 0,
    e: `re.match() only checks at the beginning of the string, while re.search() scans the entire string for a match.`,
    de: `re.match() and re.search() are similar but differ in where they look for the pattern. match() only tries to match at the beginning of the string, while search() scans through the entire string to find the first occurrence.

Key concepts:
• re.match() checks only at position 0 (start of string)
• re.search() scans through the entire string
• Both return a Match object or None
• re.match(pattern, string) is equivalent to re.search("^" + pattern, string) approximately

How it works:
• re.match(r"\\d+", "abc123") returns None (no digits at start)
• re.search(r"\\d+", "abc123") returns match for "123" (found at position 3)
• re.match(r"\\d+", "123abc") returns match for "123" (digits at start)

Example:
import re
print(re.match(r"\\d+", "abc123"))   # None
print(re.search(r"\\d+", "abc123"))  # <re.Match object; span=(3, 6), match='123'>

Common uses:
• Use match() when you expect the pattern at the start
• Use search() when the pattern can be anywhere

Key Concepts:
• Key concepts: • re.match() checks only at position 0 (start of string) • re.search() scans through the entire string • Both return a Match object or None • re.match(pattern, string) is equivalent to re.search("^" + pattern, string) approximately How it works: • re.match(r"\\d+", "abc123") returns None (no digits at start) • re.search(r"\\d+", "abc123") returns match for "123" (found at position 3) • re.match(r"\\d+", "123abc") returns match for "123" (digits at start) Example: import re print(re.match(r"\\d+", "abc123")) # None print(re.search(r"\\d+", "abc123")) # <re.Match object; span=(3, 6), match='123'> Common uses: • Use match() when you expect the pattern at the start • Use search() when the pattern can be anywhere

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q39
  (_i: number) => ({
    q: `What is the result of:\nimport re\nprint(re.findall(r"\\d+", "a1b2c3"))`,
    o: [`["1", "2", "3"]`, `["a", "b", "c"]`, `"123"`, `["a1", "b2", "c3"]`],
    c: 0,
    e: `re.findall returns a list of all non-overlapping matches. \\d+ finds each digit group.`,
    de: `re.findall() returns a list of all non-overlapping matches of the pattern in the string. Unlike match() and search() which return Match objects, findall() returns a list of strings.

Key concepts:
• Returns a list of all matching strings
• Finds all non-overlapping matches
• Returns strings, not Match objects
• If pattern has groups, returns list of groups instead

How it works:
• r"\\d+" matches one or more digits
• In "a1b2c3": finds "1", then "2", then "3"
• Returns ["1", "2", "3"]

Example:
import re
print(re.findall(r"\\d+", "a1b2c3"))      # ["1", "2", "3"]
print(re.findall(r"\\d+", "abc"))          # [] (no matches)
print(re.findall(r"\\d+", "a12b34c56"))    # ["12", "34", "56"]

Edge cases:
• Returns empty list if no matches found
• With groups: re.findall(r"(\\d)(\\w)", "1a2b") returns [("1", "a"), ("2", "b")]

Key Concepts:
• Key concepts: • Returns a list of all matching strings • Finds all non-overlapping matches • Returns strings, not Match objects • If pattern has groups, returns list of groups instead How it works: • r"\\d+" matches one or more digits • In "a1b2c3": finds "1", then "2", then "3" • Returns ["1", "2", "3"] Example: import re print(re.findall(r"\\d+", "a1b2c3")) # ["1", "2", "3"] print(re.findall(r"\\d+", "abc")) # [] (no matches) print(re.findall(r"\\d+", "a12b34c56")) # ["12", "34", "56"] Edge cases: • Returns empty list if no matches found • With groups: re.findall(r"(\\d)(\\w)", "1a2b") returns [("1", "a"), ("2", "b")]

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q40
  (_i: number) => ({
    q: `What is the result of:\nimport re\nprint(re.sub(r"\\d", "X", "a1b2c3"))`,
    o: [`"aXbXcX"`, `"XXX"`, `"a1b2c3"`, `"abcXXX"`],
    c: 0,
    e: `re.sub replaces each match with the replacement string. Each digit is replaced by "X".`,
    de: `re.sub() replaces all occurrences of the pattern in the string with the replacement string. It returns a new string with all substitutions made.

Key concepts:
• re.sub(pattern, replacement, string) replaces matches
• Replaces ALL non-overlapping matches by default
• Returns a new string (original is unchanged)
• Can specify count parameter to limit replacements
• Replacement can be a string or a function

How it works:
• r"\\d" matches any single digit
• In "a1b2c3": replaces "1" with "X", "2" with "X", "3" with "X"
• Result: "aXbXcX"

Example:
import re
print(re.sub(r"\\d", "X", "a1b2c3"))       # "aXbXcX"
print(re.sub(r"\\d+", "X", "a12b34c56"))   # "aXbXcX"
print(re.sub(r"\\d", "X", "a1b2", count=1)) # "aXb2" (only first)

Key Concepts:
• Key concepts: • re.sub(pattern, replacement, string) replaces matches • Replaces ALL non-overlapping matches by default • Returns a new string (original is unchanged) • Can specify count parameter to limit replacements • Replacement can be a string or a function How it works: • r"\\d" matches any single digit • In "a1b2c3": replaces "1" with "X", "2" with "X", "3" with "X" • Result: "aXbXcX" Example: import re print(re.sub(r"\\d", "X", "a1b2c3")) # "aXbXcX" print(re.sub(r"\\d+", "X", "a12b34c56")) # "aXbXcX" print(re.sub(r"\\d", "X", "a1b2", count=1)) # "aXb2" (only first)

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q41
  (_i: number) => ({
    q: `What is the result of:\nimport re\nprint(re.split(r"\\s+", "hello  world  python"))`,
    o: [`["hello", "world", "python"]`, `["hello  world  python"]`, `["hello", "", "world", "", "python"]`, `"hello world python"`],
    c: 0,
    e: `re.split splits the string at each match of the pattern. \\s+ matches one or more whitespace characters.`,
    de: `re.split() splits a string by the occurrences of a pattern. Unlike str.split(), it can split on regex patterns, making it more flexible for complex delimiters.

Key concepts:
• re.split(pattern, string) splits at each pattern match
• \\s+ matches one or more whitespace characters
• Returns a list of strings
• More powerful than str.split() for complex patterns
• Can specify maxsplit parameter

How it works:
• r"\\s+" matches one or more whitespace characters
• "hello  world  python" has multi-space gaps
• Split at each whitespace group: ["hello", "world", "python"]
• Unlike "hello  world".split(" "), re.split handles multiple spaces cleanly

Example:
import re
print(re.split(r"\\s+", "hello  world  python"))
# ["hello", "world", "python"]
print(re.split(r"[,;]", "a,b;c"))
# ["a", "b", "c"]

Key Concepts:
• Key concepts: • re.split(pattern, string) splits at each pattern match • \\s+ matches one or more whitespace characters • Returns a list of strings • More powerful than str.split() for complex patterns • Can specify maxsplit parameter How it works: • r"\\s+" matches one or more whitespace characters • "hello world python" has multi-space gaps • Split at each whitespace group: ["hello", "world", "python"] • Unlike "hello world".split(" "), re.split handles multiple spaces cleanly Example: import re print(re.split(r"\\s+", "hello world python")) # ["hello", "world", "python"] print(re.split(r"[,;]", "a,b;c")) # ["a", "b", "c"]

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q42
  (_i: number) => ({
    q: `What is the result of:\nimport re\nprint(bool(re.match(r"^\\d+$", "12345")))`,
    o: [`True`, `False`, `None`, `Error`],
    c: 0,
    e: `The pattern ^\\d+$ checks if the entire string consists of one or more digits. "12345" is all digits, so it matches (True).`,
    de: `The pattern ^\\d+$ anchors the match to the entire string: ^ means start of string, \\d+ means one or more digits, and $ means end of string. "12345" consists entirely of digits, so the pattern matches.

Key concepts:
• ^ anchors to the start of the string
• $ anchors to the end of the string
• ^\\d+$ means "entire string is digits"
• bool(match_object) is True; bool(None) is False

How it works:
• re.match(r"^\\d+$", "12345") checks if "12345" is all digits
• "12345" matches: starts with digits and ends with digits
• Returns a Match object (truthy)
• bool(Match object) is True

Example:
import re
print(bool(re.match(r"^\\d+$", "12345")))  # True
print(bool(re.match(r"^\\d+$", "123a5")))  # False
print(bool(re.match(r"^\\d+$", "")))        # False (+ needs at least one)

Key Concepts:
• Key concepts: • ^ anchors to the start of the string • $ anchors to the end of the string • ^\\d+$ means "entire string is digits" • bool(match_object) is True; bool(None) is False How it works: • re.match(r"^\\d+$", "12345") checks if "12345" is all digits • "12345" matches: starts with digits and ends with digits • Returns a Match object (truthy) • bool(Match object) is True Example: import re print(bool(re.match(r"^\\d+$", "12345"))) # True print(bool(re.match(r"^\\d+$", "123a5"))) # False print(bool(re.match(r"^\\d+$", ""))) # False (+ needs at least one)

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q43
  (_i: number) => ({
    q: `What is the result of:\nimport re\nprint(bool(re.match(r"^\\d+$", "123a5")))`,
    o: [`False`, `True`, `None`, `Error`],
    c: 0,
    e: `"123a5" contains the letter "a", so it does not match the all-digits pattern ^\\d+$. re.match returns None.`,
    de: `The pattern ^\\d+$ requires the entire string to consist of only digits. "123a5" contains the letter "a", which is not a digit, so the pattern does not match. re.match() returns None, and bool(None) is False.

Key concepts:
• ^\\d+$ requires every character to be a digit
• "a" is not a digit, so the match fails
• re.match() returns None when there is no match
• bool(None) is False

How it works:
• re.match(r"^\\d+$", "123a5") tries to match
• \\d+ matches "123", but then "a" is not a digit
• The $ anchor requires digits to go all the way to the end
• Match fails, returns None
• bool(None) is False

Example:
import re
print(bool(re.match(r"^\\d+$", "123a5")))  # False
print(bool(re.match(r"^\\d+$", "12345")))  # True
print(bool(re.match(r"^\\d+$", " 123")))   # False (space isn't a digit)

Key Concepts:
• Key concepts: • ^\\d+$ requires every character to be a digit • "a" is not a digit, so the match fails • re.match() returns None when there is no match • bool(None) is False How it works: • re.match(r"^\\d+$", "123a5") tries to match • \\d+ matches "123", but then "a" is not a digit • The $ anchor requires digits to go all the way to the end • Match fails, returns None • bool(None) is False Example: import re print(bool(re.match(r"^\\d+$", "123a5"))) # False print(bool(re.match(r"^\\d+$", "12345"))) # True print(bool(re.match(r"^\\d+$", " 123"))) # False (space isn't a digit)

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q44
  (_i: number) => ({
    q: `What is the result of:\nimport re\nprint(re.findall(r"[aeiou]", "hello world"))`,
    o: [`["e", "o", "o"]`, `["h", "l", "l", "w", "r", "l", "d"]`, `["hello", "world"]`, `["e", "o"]`],
    c: 0,
    e: `[aeiou] matches any single vowel. In "hello world" the vowels are "e", "o", and "o".`,
    de: `The character class [aeiou] matches any single character that is a, e, i, o, or u. re.findall() returns all matches, so it finds every vowel in the string.

Key concepts:
• [aeiou] is a character class matching any vowel
• Character classes match a single character from the set
• findall returns all non-overlapping matches
• Case-sensitive: [aeiou] does not match "A", "E", etc.

How it works:
• In "hello world": h-e-l-l-o-space-w-o-r-l-d
• "e" at position 1: match
• "o" at position 4: match
• "o" at position 7: match
• Result: ["e", "o", "o"]

Example:
import re
print(re.findall(r"[aeiou]", "hello world"))   # ["e", "o", "o"]
print(re.findall(r"[aeiou]", "rhythm"))         # [] (no vowels)
print(re.findall(r"[aeiouAEIOU]", "Hello"))     # ["e", "o"]

Key Concepts:
• How it works: • In "hello world": h-e-l-l-o-space-w-o-r-l-d • "e" at position 1: match • "o" at position 4: match • "o" at position 7: match • Result: ["e", "o", "o"] Example: import re print(re.findall(r"[aeiou]", "hello world")) # ["e", "o", "o"] print(re.findall(r"[aeiou]", "rhythm")) # [] (no vowels) print(re.findall(r"[aeiouAEIOU]", "Hello")) # ["e", "o"]

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q45
  (_i: number) => ({
    q: `What is the result of:\nimport re\nprint(re.findall(r"\\b\\w+\\b", "hello world"))`,
    o: [`["hello", "world"]`, `["hello world"]`, `["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"]`, `["hello", " ", "world"]`],
    c: 0,
    e: `\\b is a word boundary and \\w+ matches one or more word characters. This finds complete words.`,
    de: `The pattern \\b\\w+\\b matches complete words. \\b is a word boundary (zero-width assertion between a word character and a non-word character), and \\w+ matches one or more word characters (letters, digits, underscore).

Key concepts:
• \\b matches a word boundary (zero-width)
• \\w matches any word character [a-zA-Z0-9_]
• \\w+ matches one or more word characters
• \\b\\w+\\b matches complete words

How it works:
• In "hello world": two words separated by a space
• First \\b\\w+\\b matches "hello"
• Second \\b\\w+\\b matches "world"
• Result: ["hello", "world"]

Example:
import re
print(re.findall(r"\\b\\w+\\b", "hello world"))
# ["hello", "world"]
print(re.findall(r"\\b\\w+\\b", "hello, world!"))
# ["hello", "world"]

Key Concepts:
• Key concepts: • \\b matches a word boundary (zero-width) • \\w matches any word character [a-zA-Z0-9_] • \\w+ matches one or more word characters • \\b\\w+\\b matches complete words How it works: • In "hello world": two words separated by a space • First \\b\\w+\\b matches "hello" • Second \\b\\w+\\b matches "world" • Result: ["hello", "world"] Example: import re print(re.findall(r"\\b\\w+\\b", "hello world")) # ["hello", "world"] print(re.findall(r"\\b\\w+\\b", "hello, world!")) # ["hello", "world"]

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q46
  (_i: number) => ({
    q: `What is the result of:\nimport re\nprint(re.match(r"(\\w+)@(\\w+)", "user@host").groups())`,
    o: [`("user", "host")`, `("user@host",)`, `"user@host"`, `["user", "host"]`],
    c: 0,
    e: `Parentheses create capturing groups. Group 1 captures "user" and group 2 captures "host". .groups() returns all groups as a tuple.`,
    de: `Parentheses in regex create capturing groups. The pattern (\\w+)@(\\w+) has two groups: the part before @ and the part after. The .groups() method returns all captured groups as a tuple.

Key concepts:
• (pattern) creates a capturing group
• \\w+ matches one or more word characters
• .groups() returns a tuple of all captured group strings
• .group(0) returns the entire match
• .group(1) returns the first group, .group(2) the second

How it works:
• (\\w+) before @ captures "user" as group 1
• (\\w+) after @ captures "host" as group 2
• .groups() returns ("user", "host")

Example:
import re
m = re.match(r"(\\w+)@(\\w+)", "user@host")
print(m.groups())   # ("user", "host")
print(m.group(0))   # "user@host" (full match)
print(m.group(1))   # "user"
print(m.group(2))   # "host"

Key Concepts:
• Key concepts: • (pattern) creates a capturing group • \\w+ matches one or more word characters • .groups() returns a tuple of all captured group strings • .group(0) returns the entire match • .group(1) returns the first group, .group(2) the second How it works: • (\\w+) before @ captures "user" as group 1 • (\\w+) after @ captures "host" as group 2 • .groups() returns ("user", "host") Example: import re m = re.match(r"(\\w+)@(\\w+)", "user@host") print(m.groups()) # ("user", "host") print(m.group(0)) # "user@host" (full match) print(m.group(1)) # "user" print(m.group(2)) # "host"

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q47
  (_i: number) => ({
    q: `What is the result of:\nimport re\nprint(re.match(r"(\\w+)@(\\w+)", "user@host").group(1))`,
    o: [`"user"`, `"host"`, `"user@host"`, `("user", "host")`],
    c: 0,
    e: `.group(1) returns the text matched by the first capturing group, which is "user".`,
    de: `The .group(n) method returns the text matched by the nth capturing group. Group numbers start at 1. Group 0 is special and returns the entire match.

Key concepts:
• .group(0) = entire match
• .group(1) = first parenthesized group
• .group(2) = second parenthesized group
• Raises IndexError if group number doesn't exist

How it works:
• Pattern: (\\w+)@(\\w+) matches "user@host"
• Group 1: (\\w+) before @ captures "user"
• Group 2: (\\w+) after @ captures "host"
• .group(1) returns "user"

Example:
import re
m = re.match(r"(\\w+)@(\\w+)", "user@host")
print(m.group(0))  # "user@host"
print(m.group(1))  # "user"
print(m.group(2))  # "host"

Key Concepts:
• Key concepts: • .group(0) = entire match • .group(1) = first parenthesized group • .group(2) = second parenthesized group • Raises IndexError if group number doesn't exist How it works: • Pattern: (\\w+)@(\\w+) matches "user@host" • Group 1: (\\w+) before @ captures "user" • Group 2: (\\w+) after @ captures "host" • .group(1) returns "user" Example: import re m = re.match(r"(\\w+)@(\\w+)", "user@host") print(m.group(0)) # "user@host" print(m.group(1)) # "user" print(m.group(2)) # "host"

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q48
  (_i: number) => ({
    q: `What is the result of:\nimport re\nprint(re.sub(r"(\\w+)", lambda m: m.group().upper(), "hello world"))`,
    o: [`"HELLO WORLD"`, `"hello world"`, `"Hello World"`, `Error`],
    c: 0,
    e: `re.sub can take a function as the replacement. The lambda converts each word match to uppercase.`,
    de: `When re.sub() receives a function (or lambda) as the replacement argument, it calls that function for each match, passing the Match object. The function's return value is used as the replacement string.

Key concepts:
• re.sub(pattern, function, string) calls function for each match
• The function receives a Match object as argument
• The function's return value replaces the match
• m.group() returns the matched text
• .upper() converts a string to uppercase

How it works:
• r"(\\w+)" matches each word: "hello", then "world"
• For "hello": lambda receives match, m.group() = "hello", .upper() = "HELLO"
• For "world": lambda receives match, m.group() = "world", .upper() = "WORLD"
• Space between words is not matched, so it's preserved
• Result: "HELLO WORLD"

Example:
import re
result = re.sub(r"(\\w+)", lambda m: m.group().upper(), "hello world")
print(result)  # "HELLO WORLD"

# Another example: capitalize first letter
result = re.sub(r"\\b\\w", lambda m: m.group().upper(), "hello world")
print(result)  # "Hello World"

Key Concepts:
• Key concepts: • re.sub(pattern, function, string) calls function for each match • The function receives a Match object as argument • The function's return value replaces the match • m.group() returns the matched text • .upper() converts a string to uppercase How it works: • r"(\\w+)" matches each word: "hello", then "world" • For "hello": lambda receives match, m.group() = "hello", .upper() = "HELLO" • For "world": lambda receives match, m.group() = "world", .upper() = "WORLD" • Space between words is not matched, so it's preserved • Result: "HELLO WORLD" Example: import re result = re.sub(r"(\\w+)", lambda m: m.group().upper(), "hello world") print(result) # "HELLO WORLD" # Another example: capitalize first letter result = re.sub(r"\\b\\w", lambda m: m.group().upper(), "hello world") print(result) # "Hello World"

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q49
  (_i: number) => ({
    q: `What does the r"..." prefix (raw string) do for regex patterns in Python?`,
    o: [`Prevents Python from interpreting backslashes`, `Makes the regex case-insensitive`, `Compiles the regex for speed`, `Enables multiline mode`],
    c: 0,
    e: `Raw strings (r"...") treat backslashes as literal characters, preventing Python from interpreting them as escape sequences before the regex engine sees them.`,
    de: `The r prefix creates a raw string literal where backslashes are treated as literal backslash characters, not as escape sequences. This is essential for regex because regex patterns use backslashes extensively (\\d, \\w, \\s, etc.), and without r, Python would try to interpret them first.

Key concepts:
• r"\\d" is the raw string containing two characters: \\ and d
• "\\d" without r would be interpreted by Python first
• Raw strings prevent double-escaping issues
• Without r, you'd need "\\\\d" to get the regex \\d

How it works:
• r"\\n" is literally backslash + n (regex newline pattern)
• "\\n" is a single newline character (Python escape)
• r"\\d+" is backslash + d + plus (regex digit pattern)
• "\\d+" might work by accident but is not reliable

Example:
import re
# These are equivalent:
re.search(r"\\d+", "abc123")  # Raw string (preferred)
re.search("\\\\d+", "abc123")  # Regular string (needs double escape)

# Difference matters with \\n:
re.search(r"\\n", text)   # Matches literal newline in text
re.search("\\n", text)    # Also matches newline (by coincidence)
re.search(r"\\\\n", text)  # Matches literal backslash + n

Common uses:
• Always use raw strings for regex patterns
• Avoids confusion between Python escapes and regex escapes
• Makes patterns more readable

Key Concepts:
• Key concepts: • r"\\d" is the raw string containing two characters: \\ and d • "\\d" without r would be interpreted by Python first • Raw strings prevent double-escaping issues • Without r, you'd need "\\\\d" to get the regex \\d How it works: • r"\\n" is literally backslash + n (regex newline pattern) • "\\n" is a single newline character (Python escape) • r"\\d+" is backslash + d + plus (regex digit pattern) • "\\d+" might work by accident but is not reliable Example: import re # These are equivalent: re.search(r"\\d+", "abc123") # Raw string (preferred) re.search("\\\\d+", "abc123") # Regular string (needs double escape) # Difference matters with \\n: re.search(r"\\n", text) # Matches literal newline in text re.search("\\n", text) # Also matches newline (by coincidence) re.search(r"\\\\n", text) # Matches literal backslash + n Common uses: • Always use raw strings for regex patterns • Avoids confusion between Python escapes and regex escapes • Makes patterns more readable

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
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
