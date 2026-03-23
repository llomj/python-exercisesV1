// --- LEVEL 1 EXPERT A: Bytes, Encoding, ord/chr, None Deep-Dive — 50 TRULY UNIQUE QUESTIONS ---
export const level1ExpertA = [
  // ===== BYTES AND BYTEARRAY (1–20) =====

  // Q1
  (_i: number) => ({
    q: `What is type(b"hello")?`,
    o: ["<class 'bytes'>", "<class 'str'>", "<class 'bytearray'>", "<class 'list'>"],
    c: 0,
    e: "A bytes literal created with b\"...\" is of type bytes.",
    de: `The b prefix before a string literal creates a bytes object. Bytes represent raw binary data — a sequence of integers in the range 0–255.

Key Concepts:
• b"hello" is a bytes literal, not a string
• type(b"hello") returns <class 'bytes'>
• bytes objects are immutable sequences of integers
• Each element is an int (0–255), not a character

Common uses: file I/O, network communication, binary protocols, and encoding/decoding text.

Key Distinctions:
• type(b"hello") inspects a bytes literal produced by the b prefix, not a Unicode str.
• bytes is immutable; bytearray is mutable — this question is only about the bytes literal form.

How It Works:
• Python builds a bytes object from the literal token b"hello" at compile/parse time.
• type() returns the class object for that instance, which is bytes.

Step-by-Step Execution:
1. Parse the expression: the inner value is the bytes literal b"hello".
2. Call the built-in type() with that object as its sole argument.
3. type() reads the object’s class pointer and returns the bytes type object.
4. The REPL prints repr of that type: <class 'bytes'>.

Order of Operations:
• There is only a literal and a function call: the literal is evaluated first, then type().
• No arithmetic or attribute access participates in this exact expression.

Common Use Cases:
• Debugging when data unexpectedly mixes str and bytes from files or sockets.
• Teaching that binary payloads are first-class objects with their own type.

Edge Cases:
• type(b"") is still bytes; empty bytes is a valid object.
• Subclassing bytes is rare in beginner code but would still report the subclass via type().

Performance Considerations:
• type() is a cheap pointer lookup on the object header in CPython.
• The bytes object for small literals is created once; repeated type() calls stay trivial.

Examples:
• type(b"hello")  # <class 'bytes'>
• type(bytearray(b"hello"))  # <class 'bytearray'>
• isinstance(b"hello", (bytes, bytearray))  # True for bytes only here

Notes:
• For API boundaries, prefer isinstance(x, (bytes, bytearray)) when mutability does not matter.
• Display <class 'bytes'> is not a string value "hello" — it names the type object.`
  }),

  // Q2
  (_i: number) => ({
    q: `What is type(bytearray(b"hello"))?`,
    o: ["<class 'bytearray'>", "<class 'bytes'>", "<class 'str'>", "<class 'list'>"],
    c: 0,
    e: "bytearray() creates a mutable byte sequence.",
    de: `bytearray is the mutable counterpart of bytes. While bytes objects cannot be modified after creation, bytearray objects can be changed in place.

Key Concepts:
• bytearray(b"hello") creates a mutable copy of the bytes data
• type() returns <class 'bytearray'>
• You can assign to individual indices: ba[0] = 65
• Supports the same methods as bytes (upper, split, hex, etc.)

Use bytearray when you need to modify binary data in place, such as building network packets or manipulating file buffers.

Key Distinctions:
• bytearray is a distinct built-in type: mutable buffer of ints 0–255, unlike immutable bytes.
• type() reports the concrete class, not an abstract “binary sequence” protocol.

How It Works:
• bytearray(b"hello") copies the bytes payload into a growable, mutable buffer.
• type() returns the metaclass/type object registered for that instance.

Step-by-Step Execution:
1. Evaluate the inner call bytearray(b"hello") → a bytearray instance holding the same bytes.
2. Pass that instance to type().
3. type() returns the bytearray class object.
4. Interactive display shows <class 'bytearray'>.

Order of Operations:
• Inner call bytearray(...) completes before the outer type(...) runs.
• No other operators are present.

Common Use Cases:
• Building packets or file chunks where in-place edits avoid repeated concatenation.
• Interop with socket.recv_into style buffers (advanced, but motivation for bytearray).

Edge Cases:
• bytearray() with no args yields an empty growable buffer; type is still bytearray.
• Mixing str into bytearray() raises TypeError — construction paths matter.

Performance Considerations:
• Copying b"hello" into bytearray allocates a new buffer; still tiny for small literals.
• In-place slice assignment can be faster than bytes concatenation loops.

Examples:
• type(bytearray())  # <class 'bytearray'>
• ba = bytearray(b"ab"); ba[0] = 65  # bytearray(b'Ab')

Notes:
• If you only read binary data immutably, bytes is simpler and hashable (dict keys, sets).`
  }),

  // Q3
  (_i: number) => ({
    q: `What is b"hello"[0]?`,
    o: ["104", "b'h'", "'h'", "Error"],
    c: 0,
    e: "Indexing bytes returns an integer, not a character.",
    de: `When you index a bytes object, you get an integer — the byte value at that position — not a single-byte bytes object.

Key Concepts:
• b"hello"[0] returns 104, because ord('h') == 104
• This differs from strings: "hello"[0] returns 'h'
• Slicing bytes returns bytes: b"hello"[0:1] returns b'h'
• Each byte is an int in range 0–255

This is a common source of confusion: indexing gives int, slicing gives bytes.

Key Distinctions:
• Indexing bytes yields an int 0–255; indexing str yields a one-character str — easy to confuse.
• b"hello"[0] is 104, not b'h' and not 'h'.

How It Works:
• The bytes sequence implements __getitem__ to return the numeric byte at that offset.
• Negative indices count from the end, same rules as str.

Step-by-Step Execution:
1. Build b"hello" (immutable bytes with values [104,101,108,108,111]).
2. Apply [0] → first byte value 104.
3. No decoding happens; this is raw numeric access.

Order of Operations:
• Literal first, then subscript; no method calls unless you write something like (b"hello")[0].

Common Use Cases:
• Comparing first byte of a magic header (e.g. b"GIF"[0]).
• Manual parsing of binary protocols without converting whole objects to str.

Edge Cases:
• Out-of-range index raises IndexError; empty bytes b"" has no [0].
• Slicing b"hello"[0:1] returns b'h' (bytes), unlike [0] returning int.

Performance Considerations:
• Indexing is O(1) on the internal buffer in CPython.
• Avoid repeated indexing in tight loops if you can iterate or use memoryview (advanced).

Examples:
• b"A"[0]  # 65
• list(b"Hi")  # [72, 105]

Notes:
• Use slicing when you need a length-1 bytes object to match APIs expecting bytes, not int.`
  }),

  // Q4
  (_i: number) => ({
    q: `What is b"hello"[1]?`,
    o: ["101", "b'e'", "'e'", "104"],
    c: 0,
    e: "b\"hello\"[1] is 101, the ASCII code for 'e'.",
    de: `Indexing bytes at position 1 returns the integer value of the second byte. In b"hello", the second character is 'e', and ord('e') == 101.

Key Concepts:
• b"hello"[0] = 104 (h), [1] = 101 (e), [2] = 108 (l), [3] = 108 (l), [4] = 111 (o)
• These are standard ASCII values
• Remember: bytes indexing always yields an int
• To get a single-byte bytes object, slice instead: b"hello"[1:2] → b'e'

Key Distinctions:
• Position 1 is the second byte; for ASCII "hello" that is 'e' → ord 101.
• Still int output: bytes indices always return ints until you slice.

How It Works:
• Offset 1 selects the byte at index 1 from the packed buffer backing b"hello".

Step-by-Step Execution:
1. Materialize b"hello".
2. Apply subscript 1.
3. Return integer 101.

Order of Operations:
• Subscript binds tighter than nothing else here — single primary expression.

Common Use Cases:
• Byte-level diffing or checksums over specific positions.
• Learning ASCII tables by correlating characters with ord values.

Edge Cases:
• Non-ASCII UTF-8 bytes inside a bytes object: each byte is still 0–255; meaning needs decode().
• Negative index [-1] is last byte (111 for 'o' here).

Performance Considerations:
• Same O(1) indexing cost as any fixed sequence.

Examples:
• b"hello"[1]  # 101
• bytes([101])  # b'e'

Notes:
• If you expected the letter 'e', remember: text lives in str; bytes stores numeric byte values.`
  }),

  // Q5
  (_i: number) => ({
    q: `What is list(b"Hi")?`,
    o: ["[72, 105]", "['H', 'i']", "[b'H', b'i']", "Error"],
    c: 0,
    e: "Converting bytes to a list gives a list of integers.",
    de: `list() on a bytes object produces a list of the integer byte values. Since bytes iterates over ints, the result is a list of ints.

Key Concepts:
• 'H' has ASCII value 72, 'i' has ASCII value 105
• list(b"Hi") → [72, 105]
• This is consistent with indexing: b"Hi"[0] == 72
• Iterating over bytes also yields ints: for x in b"Hi": print(x) prints 72 then 105

Key Distinctions:
• list(...) on bytes consumes the iteration protocol, which yields ints, not 1-char strings.
• Contrast: list("Hi") → ['H','i'] because str iterates characters.

How It Works:
• bytes.__iter__ yields int values; list() collects all yielded items into a Python list.

Step-by-Step Execution:
1. Evaluate b"Hi" → two-byte object.
2. Call list(...) which exhausts the iterator from those two ints.
3. Produce [72, 105].

Order of Operations:
• Inner literal, then list() call; no chained operations.

Common Use Cases:
• Debugging encodings by viewing exact byte values as numbers.
• Feeding custom codecs or XOR loops over numeric byte values.

Edge Cases:
• list(b"") → []; empty iteration.
• Very large bytes objects: list() allocates a Python int per byte — can be memory-heavy.

Performance Considerations:
• list(b"...") builds many small int objects; for huge buffers prefer iteration without materializing all.

Examples:
• [hex(x) for x in b"Hi"]  # ['0x48', '0x69']
• bytes([72, 105])  # b'Hi'

Notes:
• To get ['H','i']-like structure from bytes, decode first: list("Hi".encode()) still gives ints — decode to str instead.`
  }),

  // Q6
  (_i: number) => ({
    q: `What is len(b"abc")?`,
    o: ["3", "5", "6", "Error"],
    c: 0,
    e: "len() counts the number of bytes.",
    de: `len() on a bytes object returns the number of bytes (not characters, though for pure ASCII they are the same).

Key Concepts:
• b"abc" contains 3 bytes: 97, 98, 99
• For ASCII text, len(bytes) == len(str)
• For non-ASCII (e.g. UTF-8 encoded text), byte length can exceed character count
• Example: len("é".encode("utf-8")) == 2, but len("é") == 1

Key Distinctions:
• len on bytes counts byte slots, not Unicode characters; multi-byte UTF-8 chars need decode() first.
• For pure ASCII literals, len(bytes) == len(str) numerically.

How It Works:
• len calls the bytes object’s length, which is stored alongside the buffer.

Step-by-Step Execution:
1. Create b"abc" (three bytes).
2. len(...) reads the stored size 3.

Order of Operations:
• len is a single call; its argument is fully evaluated first.

Common Use Cases:
• Checking packet or record size before reading more data from a stream.
• Validating fixed-width binary layouts.

Edge Cases:
• len(b"") is 0.
• Surrogate or Unicode edge cases do not apply until decoding — raw bytes are just bytes.

Performance Considerations:
• len is O(1) for built-in variable-length objects in CPython.

Examples:
• len("é".encode("utf-8"))  # often 2
• len("é")  # 1 character

Notes:
• Always know whether your pipeline measures characters (str) or encoded bytes (bytes).`
  }),

  // Q7
  (_i: number) => ({
    q: `What is b"hello" + b" world"?`,
    o: ["b'hello world'", "'hello world'", "Error", "b'helloworld'"],
    c: 0,
    e: "The + operator concatenates two bytes objects.",
    de: `Bytes support concatenation with +, just like strings. Both operands must be bytes — you cannot concatenate bytes and str.

Key Concepts:
• b"hello" + b" world" → b'hello world'
• Both operands must be bytes; b"hi" + " there" raises TypeError
• The result is a new bytes object (bytes are immutable)
• You can also use += on bytearray for in-place concatenation

Key Distinctions:
• bytes + bytes is allowed; bytes + str (or str + bytes) raises TypeError in Python 3.
• + builds a new immutable bytes object (neither operand is mutated).

How It Works:
• The bytes type implements __add__ to allocate a new buffer sized sum of lengths and copy both parts.

Step-by-Step Execution:
1. Evaluate left b"hello".
2. Evaluate right b" world".
3. Call bytes.__add__ to concatenate.
4. Produce b'hello world'.

Order of Operations:
• Binary + on bytes is left-to-right after subexpressions; both operands evaluated before add.

Common Use Cases:
• Building wire messages from fixed headers and variable bodies as bytes.
• Concatenating file chunks read as binary.

Edge Cases:
• b"" + x is x semantically (new object may still be created); huge concatenations in a loop are quadratic if done naïvely — prefer join pattern on list of bytes or bytearray.

Performance Considerations:
• Repeated + in loops allocates many temporaries; for big data use bytearray.extend or b"".join(iterable_of_bytes) patterns.

Examples:
• b"a" + b"b"  # b'ab'
• bytes().join([b"hello", b"world"])  # alternative style

Notes:
• If you have str pieces, encode consistently before byte concatenation.`
  }),

  // Q8
  (_i: number) => ({
    q: `What is b"ab" * 3?`,
    o: ["b'ababab'", "b'ab3'", "Error", "b'aabbab'"],
    c: 0,
    e: "Multiplying bytes by an integer repeats the byte sequence.",
    de: `The * operator repeats a bytes object, just as it repeats strings.

Key Concepts:
• b"ab" * 3 → b'ababab' (the 2-byte sequence repeated 3 times)
• 3 * b"ab" also works (commutative with int)
• b"ab" * 0 → b'' (empty bytes)
• This creates a new bytes object each time

Key Distinctions:
• Sequence repetition for bytes mirrors str: the whole chunk repeats, not numeric multiplication.
• 0 times yields empty bytes; negative factors are treated as 0 repetition (empty), not error for bytes * int.

How It Works:
• bytes.__mul__ allocates a new object whose length is len(seq)*n (with n clamped for negatives to 0).

Step-by-Step Execution:
1. Evaluate b"ab" (length 2).
2. Evaluate int 3.
3. Repeat pattern [97,98] three times → six bytes: b'ababab'.

Order of Operations:
• Multiplication binds after unary ops; here straightforward binary *.

Common Use Cases:
• Creating padding buffers: b"\x00" * width.
• Quick prototypes of repeated delimiters in binary formats.

Edge Cases:
• Large n can allocate huge memory — guard user inputs multiplying buffers.

Performance Considerations:
• Single allocation of the final size is efficient; still watch memory for giant n.

Examples:
• b"-" * 5  # b'-----'
• 0 * b"ab"  # b''

Notes:
• For bytearray, *= mutates in place; bytes cannot mutate so always new object.`
  }),

  // Q9
  (_i: number) => ({
    q: `What is b"hello"[1:3]?`,
    o: ["b'el'", "b'ell'", "[101, 108]", "Error"],
    c: 0,
    e: "Slicing bytes returns a bytes object, not a list of ints.",
    de: `Slicing a bytes object returns another bytes object (unlike indexing, which returns an int).

Key Concepts:
• b"hello"[1:3] → b'el' (indices 1 and 2)
• Slicing uses the standard start:stop convention (stop is exclusive)
• The result is bytes, not a list of integers
• Contrast with indexing: b"hello"[1] → 101 (int)

Key Distinctions:
• Slicing bytes returns bytes; indexing returns int — the type change at [i] vs [i:j] trips beginners.
• Slice stop index is exclusive: [1:3] takes indices 1 and 2.

How It Works:
• Slice creates a new bytes object copying the subrange of the buffer.

Step-by-Step Execution:
1. Build b"hello".
2. Apply slice 1:3 → bytes for positions 1 ('e') and 2 ('l').
3. Result b'el'.

Order of Operations:
• Slice parsing computes start/stop/step then extracts subrange.

Common Use Cases:
• Taking fixed-width fields from packets without decoding entire payload.
• Prefix/suffix checks on binary signatures.

Edge Cases:
• Out-of-range slices clamp instead of error (unlike indexing).
• Step slices ( [::2] ) skip bytes — still returns bytes.

Performance Considerations:
• Small slices allocate a new object proportional to slice length — still cheap at beginner sizes.

Examples:
• b"hello"[1:]  # b'ello'
• b"hello"[:2]  # b'he'

Notes:
• Compare with b"hello"[1] which is int 101, not b'e'.`
  }),

  // Q10
  (_i: number) => ({
    q: `What is bytes([72, 101, 108, 108, 111])?`,
    o: ["b'Hello'", "[72, 101, 108, 108, 111]", "Error", "b'hello'"],
    c: 0,
    e: "bytes() from a list of ints creates a bytes object from those byte values.",
    de: `You can create a bytes object by passing an iterable of integers (0–255). Each integer is interpreted as a byte value.

Key Concepts:
• 72 = 'H', 101 = 'e', 108 = 'l', 108 = 'l', 111 = 'o'
• bytes([72, 101, 108, 108, 111]) → b'Hello'
• Values must be in range 0–255 or ValueError is raised
• This is the inverse of list(b'Hello') → [72, 101, 108, 108, 111]

Key Distinctions:
• bytes(iterable_of_ints) validates each int in 0–255; out-of-range raises ValueError.
• This constructor is the inverse of list(b"...") for round-tripping numeric views.

How It Works:
• bytes.__init__ walks the iterable, checks bounds, writes the packed buffer.

Step-by-Step Execution:
1. Build list literal [72,101,108,108,111] (ints).
2. Pass to bytes(...).
3. Pack into b'Hello'.

Order of Operations:
• List literal evaluated, then bytes(...) call.

Common Use Cases:
• Building binary data from computed numeric sequences (image pixels, MIDI notes).
• Interop with C-style unsigned char arrays.

Edge Cases:
• Floats in the iterable are invalid — must be integral ints.
• Very large iterables: memory proportional to length.

Performance Considerations:
• One allocation; faster than repeated concatenation of 1-byte bytes objects.

Examples:
• bytes([255])  # b'\xff'
• bytes(range(65, 68))  # b'ABC'

Notes:
• For mutable packing, bytearray([...]) or bytearray.extend patterns may suit updates.`
  }),

  // Q11
  (_i: number) => ({
    q: `What is the result?\nba = bytearray(b"abc")\nba[0] = 65\nba`,
    o: ["bytearray(b'Abc')", "Error", "bytearray(b'abc')", "b'Abc'"],
    c: 0,
    e: "bytearray is mutable — you can assign to individual byte positions.",
    de: `bytearray supports item assignment because it is mutable, unlike bytes.

Key Concepts:
• ba = bytearray(b"abc") creates a mutable byte array: [97, 98, 99]
• ba[0] = 65 replaces the first byte (97='a') with 65 ('A')
• Result: bytearray(b'Abc')
• Doing the same on bytes would raise TypeError: bytes does not support item assignment

This is the key difference between bytes (immutable) and bytearray (mutable).

Key Distinctions:
• Item assignment works on bytearray, not bytes — the snippet shows in-place mutation of index 0.
• Displaying ba shows the whole mutable object with updated contents.

How It Works:
• bytearray.__setitem__ writes a single byte value after validating the int 0–255.

Step-by-Step Execution:
1. bytearray(b"abc") → mutable [97,98,99].
2. ba[0] = 65 replaces first byte with 'A' (65).
3. Evaluating ba in REPL shows bytearray(b'Abc').

Order of Operations:
• Statements execute top-to-bottom; final line is expression statement printing ba.

Common Use Cases:
• Editing binary headers checksum fields before send.
• Implementing simple in-memory circular buffers.

Edge Cases:
• Assigning str to slot raises TypeError; must assign int byte.
• Slice assignment has different rules and lengths — advanced topic.

Performance Considerations:
• Single index writes O(1); resizing append may amortize reallocation.

Examples:
• ba = bytearray(b"x"); ba[0] = ord("y")

Notes:
• bytes(ba) can freeze mutable buffer to immutable bytes when you need hashing or dict keys.`
  }),

  // Q12
  (_i: number) => ({
    q: `What is b"hello".decode("utf-8")?`,
    o: ["'hello'", "b'hello'", "Error", "['h','e','l','l','o']"],
    c: 0,
    e: "decode() converts bytes to a string using the specified encoding.",
    de: `The decode() method converts a bytes object into a str by interpreting the bytes using the given encoding.

Key Concepts:
• b"hello".decode("utf-8") → 'hello'
• decode() is the inverse of str.encode()
• UTF-8 is the most common encoding; ASCII bytes decode identically in UTF-8
• If the bytes are not valid for the specified encoding, a UnicodeDecodeError is raised

Example round-trip: "hello".encode("utf-8").decode("utf-8") → "hello"

Key Distinctions:
• decode maps bytes → str using a codec; UTF-8 is default in many contexts but here explicit.
• Invalid byte sequences for the codec raise UnicodeDecodeError.

How It Works:
• Looks up the codec, then converts each code unit sequence to Unicode code points, building str.

Step-by-Step Execution:
1. Start with b"hello" (valid UTF-8 because ASCII subset).
2. Call decode with "utf-8".
3. Produce str 'hello'.

Order of Operations:
• Attribute decode resolved on bytes instance; argument "utf-8" evaluated first.

Common Use Cases:
• Reading text files opened in binary mode before processing as str.
• Network payloads negotiated as UTF-8 text.

Edge Cases:
• Surrogate-related issues appear mainly on narrow builds (legacy); UTF-8 decode still validates.
• errors="replace" or "ignore" changes failure modes — defaults to strict.

Performance Considerations:
• ASCII-only payloads decode very fast in CPython optimized paths.

Examples:
• b"caf\xc3\xa9".decode("utf-8")  # 'café'

Notes:
• Round-trip: s.encode("utf-8").decode("utf-8") == s for str that are Unicode-normalized consistently.`
  }),

  // Q13
  (_i: number) => ({
    q: `What is "hello".encode("utf-8")?`,
    o: ["b'hello'", "'hello'", "Error", "[104, 101, 108, 108, 111]"],
    c: 0,
    e: "encode() converts a string to bytes using the specified encoding.",
    de: `The encode() method converts a str into a bytes object by encoding each character using the specified encoding.

Key Concepts:
• "hello".encode("utf-8") → b'hello'
• For ASCII characters, UTF-8 encoding is identical to ASCII
• encode() is the inverse of bytes.decode()
• Non-ASCII characters may produce multi-byte sequences: "é".encode("utf-8") → b'\\xc3\\xa9'

Key Distinctions:
• encode is str → bytes; decode is bytes → str — opposite directions, easy to invert mentally.
• For ASCII-only text like "hello", UTF-8 output bytes numerically match ASCII values.

How It Works:
• The codec turns each Unicode code point into UTF-8 byte sequences (1–4 bytes per char).

Step-by-Step Execution:
1. str object "hello" exists.
2. Method encode called with codec name "utf-8".
3. Emits bytes b'hello' (same repr as ASCII bytes for these letters).

Order of Operations:
• Method lookup on str, then call with codec argument; no other operators.

Common Use Cases:
• Writing str to binary streams: sockets, hash functions, crypto APIs expecting bytes.
• Normalizing wire formats: always specify encoding in libraries.

Edge Cases:
• Characters outside BMP still encodable, produce multi-byte sequences.
• Strict ascii codec fails on non-ASCII characters.

Performance Considerations:
• CPython caches codec machinery; small strings encode in microseconds.

Examples:
• "π".encode("utf-8")
• "hello".encode("ascii")  # OK for ASCII-only

Notes:
• In Python 3, open text files with encoding= or rely on locale — know whether you have str or bytes.`
  }),

  // Q14
  (_i: number) => ({
    q: `What is b"hello".upper()?`,
    o: ["b'HELLO'", "'HELLO'", "Error", "b'Hello'"],
    c: 0,
    e: "bytes objects support upper(), which returns uppercase bytes.",
    de: `bytes objects have many of the same methods as strings, including upper(), lower(), split(), and more.

Key Concepts:
• b"hello".upper() → b'HELLO'
• The result is a new bytes object, not a str
• Only ASCII letters (a–z) are uppercased
• Other bytes methods: b"hello".lower(), b"hello".title(), b"hello".capitalize()

Key Distinctions:
• bytes.upper operates on byte values, promoting ASCII a–z to A–Z; non-letter bytes unchanged.
• Result type stays bytes, not str — do not expect 'HELLO' without decode.

How It Works:
• Iterates bytes, applies ASCII case mapping table at C speed, allocates new bytes.

Step-by-Step Execution:
1. Resolve method upper on bytes instance b"hello".
2. Transform 104→72 etc. for letters; here all five are lowercase ASCII.
3. Return b'HELLO'.

Order of Operations:
• Only a method call after literal binding.

Common Use Cases:
• Case-insensitive comparison of ASCII tokens in binary protocols (HTTP verbs, keywords).
• Normalizing file extensions read as bytes.

Edge Cases:
• Bytes >127 are not Unicode-casefolded — bytes.upper is not full Unicode semantics.
• Empty bytes → empty bytes.

Performance Considerations:
• Implemented in C; linear in length, single allocation.

Examples:
• b"a1".upper()  # b'A1'
• "a1".upper()  # 'A1' (str path for Unicode)

Notes:
• For human-language case rules on text, decode to str and consider casefold().`
  }),

  // Q15
  (_i: number) => ({
    q: `What is b"hello".split(b"l")?`,
    o: ["[b'he', b'', b'o']", "[b'he', b'o']", "['he', '', 'o']", "Error"],
    c: 0,
    e: "split() on bytes works like on strings, producing a list of bytes objects.",
    de: `bytes.split() splits a bytes object at each occurrence of the separator, returning a list of bytes objects.

Key Concepts:
• b"hello" has two consecutive 'l' bytes
• Splitting at b"l" produces: b'he' (before first l), b'' (between the two l's), b'o' (after second l)
• The separator must also be bytes, not str
• Without a separator, split() splits on whitespace: b"a b".split() → [b'a', b'b']

Key Distinctions:
• Separator must be bytes like the subject; str separator with bytes.split raises TypeError.
• Consecutive separators yield empty segments — here two 'l' bytes create b'' between.

How It Works:
• bytes.split scans for separator occurrences, builds list of byte slices.

Step-by-Step Execution:
1. Start b"hello".
2. Split on b"l" → segments: before first l, between double l, after last l.
3. [b'he', b'', b'o'].

Order of Operations:
• Method call with argument b"l" evaluated first.

Common Use Cases:
• Tokenizing simple binary records with delimiter bytes.
• Parsing path-like structures stored as bytes.

Edge Cases:
• maxsplit limits splits; default -1 means all.
• Leading/trailing separators create empty leading/trailing items.

Performance Considerations:
• Splits allocate a list of small bytes objects; still linear time.

Examples:
• b"a|b|c".split(b"|")
• "a b".encode().split()  # whitespace split variant

Notes:
• For Unicode text splitting, work in str space; bytes splitting is byte-oriented, not grapheme-aware.`
  }),

  // Q16
  (_i: number) => ({
    q: `What is the result of 104 in b"hello"?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "The 'in' operator checks whether an integer byte value exists in the bytes object.",
    de: `The 'in' operator on bytes checks for the presence of an integer byte value, because bytes iterates over ints.

Key Concepts:
• 104 is the ASCII value of 'h'
• b"hello" contains bytes [104, 101, 108, 108, 111]
• 104 in b"hello" → True
• You can also check for subsequences: b"ell" in b"hello" → True
• But 'h' in b"hello" raises TypeError — you must use int or bytes, not str

Key Distinctions:
• The "in" operator on bytes checks subbytes or int membership: int checks for that byte value presence.
• Here 104 is the byte for 'h', which appears — True.

How It Works:
• bytes.__contains__ handles int by treating it as a byte value search; handles bytes as substring.

Step-by-Step Execution:
1. Build b"hello".
2. Evaluate membership test 104 in (...).
3. Scan finds first byte equals 104 → True.

Order of Operations:
• Membership operator after left operand evaluation.

Common Use Cases:
• Quick validation that a buffer contains a sentinel byte value.
• Micro-optimizations in parsers avoiding decode.

Edge Cases:
• "in" with str is invalid for bytes containment in Python 3 (TypeError).
• For multi-byte patterns, pass a bytes object: b"el" in b"hello".

Performance Considerations:
• Worst-case linear scan; for tiny literals negligible.

Examples:
• 111 in b"hello"  # True ('o')
• 120 in b"hello"  # False

Notes:
• Do not confuse with substring "he" in "hello" — types must align.`
  }),

  // Q17
  (_i: number) => ({
    q: `What is b"hello".hex()?`,
    o: ["'68656c6c6f'", "b'68656c6c6f'", "Error", "'hello'"],
    c: 0,
    e: "hex() returns a string of hexadecimal digit pairs for each byte.",
    de: `The hex() method on bytes returns a str containing two hex digits per byte.

Key Concepts:
• h=0x68, e=0x65, l=0x6c, l=0x6c, o=0x6f
• b"hello".hex() → '68656c6c6f' (a regular string, not bytes)
• This is useful for debugging binary data
• The inverse is bytes.fromhex("68656c6c6f") → b'hello'
• You can add a separator: b"hello".hex(" ") → '68 65 6c 6c 6f' (Python 3.8+)

Key Distinctions:
• hex() on bytes returns lowercase hex string without spaces — two nibbles per byte.
• It is a str, not bytes; use bytes.fromhex to reverse.

How It Works:
• Each byte formatted as two hex digits; concatenated into a single Python str.

Step-by-Step Execution:
1. b"hello" → byte values [104,101,108,108,111].
2. hex() emits '68656c6c6f'.

Order of Operations:
• Method call hex with default args.

Common Use Cases:
• Logging binary blobs in human-readable (if long, unwieldy) form.
• Preparing digest outputs already bytes for display.

Edge Cases:
• hex accepts optional sep parameter in newer Python to insert separators between bytes.

Performance Considerations:
• Allocates str twice length of hex digits — can be large for big buffers.

Examples:
• bytes.fromhex("68656c6c6f")  # b'hello'
• b"\xff".hex()  # 'ff'

Notes:
• Compare with binascii.hexlify historical bytes output variants.`
  }),

  // Q18
  (_i: number) => ({
    q: `What is bytes.fromhex("68656c6c6f")?`,
    o: ["b'hello'", "'hello'", "Error", "[104, 101, 108, 108, 111]"],
    c: 0,
    e: "bytes.fromhex() creates a bytes object from a hex string.",
    de: `bytes.fromhex() is a class method that parses a string of hex digit pairs and creates a bytes object.

Key Concepts:
• "68656c6c6f" is parsed as: 0x68=h, 0x65=e, 0x6c=l, 0x6c=l, 0x6f=o
• bytes.fromhex("68656c6c6f") → b'hello'
• Whitespace in the hex string is ignored: bytes.fromhex("68 65 6c 6c 6f") also works
• The inverse of b"hello".hex()
• Raises ValueError for invalid hex characters

Key Distinctions:
• fromhex parses hex pairs into bytes; whitespace may be allowed depending on version — assume compact pairs here.
• Invalid hex raises ValueError.

How It Works:
• Reads two characters per byte, converts to 0–255 values, packs buffer.

Step-by-Step Execution:
1. Parse string of hex digits length 10 → 5 bytes.
2. Values 0x68,0x65,0x6c,0x6c,0x6f.
3. Return b'hello'.

Order of Operations:
• Class method fromhex on bytes type; argument is str of hex.

Common Use Cases:
• Loading firmware or keys distributed as hex text.
• Converting SHA hex digests back to raw bytes for comparison.

Edge Cases:
• Odd-length strings error; non-hex characters error.

Performance Considerations:
• Linear in number of hex chars; single allocation.

Examples:
• bytes.fromhex("ff fe")
• b"hello".hex()  # round trip

Notes:
• For user input, validate charset before fromhex to avoid exceptions in hot paths.`
  }),

  // Q19
  (_i: number) => ({
    q: `What is b"hello" == "hello"?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "bytes and str are never equal, even with identical content.",
    de: `Python strictly distinguishes bytes and str. Comparing them with == always returns False — they are different types.

Key Concepts:
• b"hello" == "hello" → False
• bytes and str are fundamentally different types in Python 3
• No implicit conversion happens during comparison
• To compare content, decode bytes first: b"hello".decode() == "hello" → True
• In Python 2 this was different, but Python 3 enforces strict separation

Key Distinctions:
• In Python 3, the expression b"hello" == "hello" is False: bytes and str are different types, so equal text is still unequal objects.
• Ordering (<) between str and bytes raises TypeError, but == is defined and returns False here.

How It Works:
• Mixed-type equality tries reflected __eq__ methods; when neither knows how to compare, the result is False.

Step-by-Step Execution:
1. Left b"hello", right "hello".
2. bytes.__eq__ sees a str → NotImplemented; str.__eq__ sees bytes → NotImplemented.
3. Fallback: the equality expression evaluates to False.

Order of Operations:
• Equality after evaluating both sides.

Common Use Cases:
• Reminding that network bytes must decode before text algorithms.

Edge Cases:
• Use explicit encode/decode to compare fairly.

Performance Considerations:
• Fast type check path short-circuits deep comparisons.

Examples:
• b"hello".decode() == "hello"  # True

Notes:
• Ordering operators (<) between str and bytes raise TypeError in Python 3 — unlike ==.`
  }),

  // Q20
  (_i: number) => ({
    q: `What is b"abc".decode() + "def"?`,
    o: ["'abcdef'", "b'abcdef'", "Error", "'abc' + 'def'"],
    c: 0,
    e: "decode() returns a str, which can then be concatenated with another str.",
    de: `b"abc".decode() converts bytes to str (defaulting to UTF-8), and then + concatenates two strings.

Key Concepts:
• b"abc".decode() → "abc" (str)
• "abc" + "def" → "abcdef"
• decode() without arguments defaults to UTF-8
• You cannot do b"abc" + "def" directly — that raises TypeError
• decode first, then concatenate with other strings

Key Distinctions:
• decode() with no args uses utf-8 default (locale-independent in open, but bytes.decode default is utf-8).
• Then str + str concatenates — result is str 'abcdef'.

How It Works:
• decode produces str; + between str values performs string concatenation.

Step-by-Step Execution:
1. b"abc".decode() → 'abc'.
2. Add "def" → 'abcdef'.

Order of Operations:
• Method decode first; then binary + on two str.

Common Use Cases:
• Mixing binary reads with text literals in quick scripts.
• Building URLs or messages from decoded chunks plus constants.

Edge Cases:
• If decode fails (bad UTF-8), exception before concatenation.

Performance Considerations:
• Two allocations: new str from decode, then new str for concatenation — fine for small data.

Examples:
• (b"hi" + b"there".encode())  # different pattern

Notes:
• Prefer an f-string joining text and suffix, or str.join, for many pieces to avoid quadratic str concatenation patterns.`
  }),

  // ===== ENCODING AND UNICODE (21–35) =====

  // Q21
  (_i: number) => ({
    q: `What is "café".encode("utf-8")?`,
    o: ["b'caf\\xc3\\xa9'", "b'café'", "b'cafe'", "Error"],
    c: 0,
    e: "The character é requires two bytes (\\xc3\\xa9) in UTF-8.",
    de: `When encoding a string to UTF-8, ASCII characters use one byte each, but non-ASCII characters may use 2, 3, or 4 bytes.

Key Concepts:
• 'c' → 0x63 (1 byte), 'a' → 0x61 (1 byte), 'f' → 0x66 (1 byte)
• 'é' (U+00E9) → 0xC3 0xA9 (2 bytes in UTF-8)
• Total: b'caf\\xc3\\xa9' — 5 bytes for 4 characters
• UTF-8 is a variable-length encoding: ASCII = 1 byte, most Latin = 2, Asian = 3, emoji = 4

Key Distinctions:
• é expands to two bytes in UTF-8: 0xC3 0xA9 — length differs from str length 4 vs byte length 5? "café" is 4 chars, 5 UTF-8 bytes.
• Visual length vs byte length diverges — crucial for I/O sizing.

How It Works:
• Encoder maps U+00E9 to UTF-8 two-byte sequence.

Step-by-Step Execution:
1. Unicode str "café".
2. encode utf-8 → bytes with accents encoded.

Order of Operations:
• Method encode only.

Common Use Cases:
• Writing internationalized JSON or HTML as UTF-8 bytes.

Edge Cases:
• Different normalization forms (NFC vs NFD) change byte sequences for “same” text — advanced.

Performance Considerations:
• Small strings fine; huge text uses streaming encoders in practice.

Examples:
• len("café") vs len("café".encode())

Notes:
• Always declare UTF-8 in protocols; avoid locale-dependent assumptions.`
  }),

  // Q22
  (_i: number) => ({
    q: `What is len("café")?`,
    o: ["4", "5", "3", "Error"],
    c: 0,
    e: "len() on a string counts characters, not bytes.",
    de: `In Python, len() on a string returns the number of Unicode characters (code points), regardless of how many bytes they require in any particular encoding.

Key Concepts:
• "café" has 4 characters: c, a, f, é
• len("café") → 4
• This is different from byte length: len("café".encode("utf-8")) → 5
• Python strings are sequences of Unicode code points
• Each character counts as 1, whether ASCII or multi-byte in UTF-8

Key Distinctions:
• len(str) counts Unicode code points in the str abstraction (here 4), not grapheme clusters.
• Combining characters can still make visual length differ — advanced Unicode.

How It Works:
• str stores flexible representation internally; len returns logical code point count.

Step-by-Step Execution:
1. Build str "café" (4 code points).
2. len → 4.

Order of Operations:
• len call.

Common Use Cases:
• UI field validation on character counts (know limitations for emoji).

Edge Cases:
• Surrogate pairs in narrow builds legacy issues — modern CPython uses flexible str.

Performance Considerations:
• len(str) is O(1) in CPython for many strings due to cached length.

Examples:
• len("😀")  # 1 in modern Python

Notes:
• For user-perceived glyph count, libraries like regex with \X or unicodedata (complex).`
  }),

  // Q23
  (_i: number) => ({
    q: `What is len("café".encode("utf-8"))?`,
    o: ["5", "4", "6", "Error"],
    c: 0,
    e: "In UTF-8, 'é' takes 2 bytes, so 'café' encodes to 5 bytes total.",
    de: `len() on a bytes object counts the number of bytes, which may differ from the character count of the original string.

Key Concepts:
• "café" has 4 characters but encodes to 5 bytes in UTF-8
• c (1 byte) + a (1 byte) + f (1 byte) + é (2 bytes) = 5 bytes
• len("café") → 4 (characters), len("café".encode("utf-8")) → 5 (bytes)
• This distinction is critical for file I/O, network protocols, and database storage

Key Distinctions:
• Measures byte length after UTF-8 encoding — here 5 bytes for 4 characters because é uses 2 bytes.
• Demonstrates why HTTP Content-Length on bytes differs from str len.

How It Works:
• Inner encode produces bytes; outer len counts bytes.

Step-by-Step Execution:
1. Encode str to bytes.
2. len on those bytes.

Order of Operations:
• Inner call first.

Common Use Cases:
• Buffer sizing for sockets, crypto padding block alignment.

Edge Cases:
• Empty str encodes to empty bytes — len 0.

Performance Considerations:
• Encodes allocate new buffer; if you need only length, consider character analysis or cached encoding in specialized cases.

Examples:
• len("hello".encode("utf-8"))  # 5 ASCII chars → 5 bytes

Notes:
• For ASCII-only, len s == len(s.encode('utf-8')).`
  }),

  // Q24
  (_i: number) => ({
    q: `What is "hello".encode("ascii")?`,
    o: ["b'hello'", "'hello'", "Error", "b'\\x68\\x65\\x6c\\x6c\\x6f'"],
    c: 0,
    e: "Pure ASCII text encodes identically in ASCII and UTF-8.",
    de: `The encode("ascii") method converts a string to bytes using the ASCII encoding. Since "hello" contains only ASCII characters, this works without issue.

Key Concepts:
• "hello".encode("ascii") → b'hello'
• ASCII maps characters to single bytes (0–127)
• All ASCII characters have the same byte values in UTF-8
• Non-ASCII characters (é, ñ, 中, 😀) cannot be encoded in ASCII and raise UnicodeEncodeError

Key Distinctions:
• ascii codec accepts only code points 0–127; "hello" fits, output bytes match UTF-8 for ASCII subset.
• Identical byte values to utf-8 for these characters.

How It Works:
• Encoder rejects >127; maps each char to single byte.

Step-by-Step Execution:
1. Check each code point ≤127.
2. Emit b'hello'.

Order of Operations:
• encode call.

Common Use Cases:
• Enforcing strict 7-bit payloads (SMTP headers historically).

Edge Cases:
• Any char >127 raises UnicodeEncodeError — test user-supplied text.

Performance Considerations:
• Fast path similar to utf-8 for ASCII.

Examples:
• "h".encode("ascii")

Notes:
• Prefer utf-8 default unless you truly need ASCII-only guarantees.`
  }),

  // Q25
  (_i: number) => ({
    q: `What happens with "café".encode("ascii")?`,
    o: ["UnicodeEncodeError", "b'cafe'", "b'café'", "b'caf'"],
    c: 0,
    e: "ASCII cannot represent 'é' — only code points 0–127 are valid.",
    de: `The ASCII encoding only supports characters with code points 0–127. The character 'é' (U+00E9 = 233) is outside this range.

Key Concepts:
• "café".encode("ascii") raises UnicodeEncodeError
• 'c', 'a', 'f' are valid ASCII, but 'é' is not
• To handle this: "café".encode("ascii", errors="ignore") → b'caf'
• Or: "café".encode("ascii", errors="replace") → b'caf?'
• Use UTF-8 for text that may contain non-ASCII characters

Key Distinctions:
• é is U+00E9 >127 — ascii codec cannot represent it; raises UnicodeEncodeError.
• This is an expected exception, not a silent replacement (unless errors kw given).

How It Works:
• Encoder checks each character against ASCII range; fails on first out-of-range.

Step-by-Step Execution:
1. Start encoding.
2. Encounter é.
3. Raise UnicodeEncodeError.

Order of Operations:
• Exception aborts expression.

Common Use Cases:
• Validating that text is ASCII-safe before downgrading channels.

Edge Cases:
• errors="ignore"/"replace" mutates behavior — explicit policy choice.

Performance Considerations:
• Failure happens early — little wasted work.

Examples:
• "café".encode("utf-8")  # succeeds

Notes:
• Catch UnicodeEncodeError at I/O boundaries and log offending character positions.`
  }),

  // Q26
  (_i: number) => ({
    q: `What is b"hello".decode("ascii")?`,
    o: ["'hello'", "b'hello'", "Error", "None"],
    c: 0,
    e: "decode(\"ascii\") converts ASCII bytes back to a string.",
    de: `The decode("ascii") method interprets bytes as ASCII-encoded text and returns a str.

Key Concepts:
• b"hello".decode("ascii") → 'hello'
• This works because all bytes in b"hello" are valid ASCII (< 128)
• If any byte is ≥ 128, a UnicodeDecodeError is raised
• For ASCII-only data, decode("ascii") and decode("utf-8") give identical results

Key Distinctions:
• All byte values in b"hello" are <128, valid ASCII and UTF-8 — decode to identical str.
• decode("ascii") enforces all bytes ≤127.

How It Works:
• Decoder maps each byte to same Unicode code point U+0000–007F.

Step-by-Step Execution:
1. Scan bytes 104,101,108,108,111.
2. All ≤127.
3. Produce 'hello'.

Order of Operations:
• Method decode.

Common Use Cases:
• Strict binary-to-text when you know payload is 7-bit.

Edge Cases:
• Byte ≥128 with ascii codec raises UnicodeDecodeError.

Performance Considerations:
• Very fast for ASCII-only data.

Examples:
• b"\xff".decode("ascii")  # error

Notes:
• If data might be UTF-8 with high bytes, ascii is wrong codec — use utf-8.`
  }),

  // Q27
  (_i: number) => ({
    q: `What is len("😀".encode("utf-8"))?`,
    o: ["4", "1", "2", "8"],
    c: 0,
    e: "Emoji are encoded as 4 bytes in UTF-8.",
    de: `Emoji and other characters above U+FFFF require 4 bytes in UTF-8 encoding.

Key Concepts:
• "😀" is U+1F600 (a code point above 0xFFFF)
• UTF-8 encodes it as 4 bytes: \\xf0\\x9f\\x98\\x80
• len("😀") → 1 (one character)
• len("😀".encode("utf-8")) → 4 (four bytes)
• UTF-8 byte counts: 1 byte (ASCII), 2 bytes (Latin/Greek/Cyrillic), 3 bytes (CJK/most symbols), 4 bytes (emoji/rare scripts)

Key Distinctions:
• Emoji often occupies 4 bytes in UTF-8 (U+1F600 surrogate pair region encoded as 4-byte sequence).
• str len 1, byte len 4 typical for this glyph.

How It Works:
• Encoder emits UTF-8 bytes for the smiley code point.

Step-by-Step Execution:
1. Encode 😀.
2. len bytes → 4.

Order of Operations:
• Inner encode then len.

Common Use Cases:
• Social media message sizing in bytes for SMS-like segments.

Edge Cases:
• Some emoji with ZWJ sequences span multiple code points — str len >1.

Performance Considerations:
• Encoding allocates; measure once if in tight loop.

Examples:
• "😀".encode("utf-8")

Notes:
• Never assume 1 char == 1 byte globally.`
  }),

  // Q28
  (_i: number) => ({
    q: `What is len("😀")?`,
    o: ["1", "2", "4", "Error"],
    c: 0,
    e: "An emoji is a single Unicode character, so len() returns 1.",
    de: `Python strings are sequences of Unicode code points. Each emoji (when not composed of multiple code points) counts as one character.

Key Concepts:
• "😀" is a single Unicode code point: U+1F600
• len("😀") → 1
• This contrasts with the byte length: len("😀".encode("utf-8")) → 4
• Some emoji are composed of multiple code points (like family emoji or skin-tone modifiers), and len() counts each code point separately

Key Distinctions:
• Modern Python: len counts Unicode code points; many emoji are single code point → 1.
• Variation selectors can add code points — advanced emoji sequences differ.

How It Works:
• str len returns number of code points in internal representation.

Step-by-Step Execution:
1. Literal 😀 (single code point U+1F600 typically).
2. len → 1.

Order of Operations:
• len call.

Common Use Cases:
• Simple validation that user entered “one emoji” — still can be wrong for ZWJ sequences.

Edge Cases:
• Family emoji with joiners: len may be >1 even visually “one glyph”.

Performance Considerations:
• O(1) len for str in CPython.

Examples:
• len("🇫🇷")  # often 2 code points (regional indicator pair)

Notes:
• For display width in terminals, wcwidth libraries help — not len alone.`
  }),

  // Q29
  (_i: number) => ({
    q: `What is ord("A")?`,
    o: ["65", "97", "41", "Error"],
    c: 0,
    e: "ord() returns the Unicode code point of a character. 'A' is 65.",
    de: `ord() returns the integer Unicode code point for a single character. For ASCII characters, this matches the ASCII table.

Key Concepts:
• ord("A") → 65 (the ASCII/Unicode code point for uppercase A)
• ord() accepts exactly one character
• ord("AB") raises TypeError (string of length 2, not 1)
• The inverse is chr(): chr(65) → 'A'
• Uppercase letters A–Z have code points 65–90

Key Distinctions:
• ord returns the Unicode code point as int; capital 'A' is U+0041 (decimal 65).
• Lowercase 'a' is U+0061 (97) — the classic 32-offset in ASCII for letter case pairs.

How It Works:
• Single-character str required; ord reads first code point (and validates length 1).

Step-by-Step Execution:
1. str 'A' length 1.
2. ord → 65.

Order of Operations:
• Function call ord with str literal.

Common Use Cases:
• Custom base-64 style alphabets, Caesar ciphers teaching.

Edge Cases:
• ord("") raises TypeError; multi-char str raises TypeError.

Performance Considerations:
• Trivial cost.

Examples:
• ord("\n")  # 10

Notes:
• Surrogate unicode ord in isolated surrogate contexts rare in user strings.`
  }),

  // Q30
  (_i: number) => ({
    q: `What is ord("a")?`,
    o: ["97", "65", "61", "Error"],
    c: 0,
    e: "Lowercase 'a' has Unicode code point 97.",
    de: `ord("a") returns 97, the Unicode/ASCII code point for lowercase a.

Key Concepts:
• Lowercase letters a–z have code points 97–122
• Uppercase letters A–Z have code points 65–90
• The difference is 32: ord("a") - ord("A") == 32
• This 32-offset is used in some low-level case conversion algorithms
• ord() works on any single Unicode character, not just ASCII

Key Distinctions:
• Lowercase a is ASCII 97 decimal; differs by 32 from 'A' — classic ASCII relationship.
• ord is inverse of chr for BMP code points.

How It Works:
• ord returns int code point of sole character.

Step-by-Step Execution:
1. Character 'a' (U+0061).
2. ord → 97.

Order of Operations:
• Call ord.

Common Use Cases:
• Ranking letters, checksum toys, understanding encoding tables.

Edge Cases:
• Non-BMP ord may exceed 65535 — still valid int.

Performance Considerations:
• Constant time.

Examples:
• chr(ord("a") - 32)  # 'A'

Notes:
• For full Unicode case mapping, use str.upper/lower — not +32 hacks globally.`
  }),

  // Q31
  (_i: number) => ({
    q: `What is ord("0")?`,
    o: ["48", "0", "30", "Error"],
    c: 0,
    e: "The character '0' has code point 48 — it is not the integer 0.",
    de: `The character '0' (the digit zero as text) has Unicode code point 48, which is distinct from the integer 0.

Key Concepts:
• ord("0") → 48 (not 0!)
• Digit characters '0'–'9' have code points 48–57
• To convert a digit character to its numeric value: int("0") → 0
• Or: ord("0") - 48 → 0
• This is why int() exists — to parse text as a number

Key Distinctions:
• Digit character '0' has code point 48 — not integer 0.
• Digit run '0'–'9' occupies 48–57.

How It Works:
• ord maps glyph '0' to 48.

Step-by-Step Execution:
1. str '0'.
2. ord → 48.

Order of Operations:
• ord unary function style.

Common Use Cases:
• Parsing manual char-to-int: ord(c)-48 for c in '0'..'9'.

Edge Cases:
• Fullwidth digit '０' has different ord — not ASCII 48.

Performance Considerations:
• Trivial.

Examples:
• int("0")  # 0 numeric value

Notes:
• Prefer int(s) for whole-number parsing, not ord alone.`
  }),

  // Q32
  (_i: number) => ({
    q: `What is chr(65)?`,
    o: ["'A'", "'a'", "'65'", "Error"],
    c: 0,
    e: "chr() converts a code point to its character. 65 is 'A'.",
    de: `chr() is the inverse of ord(). It takes an integer code point and returns the corresponding Unicode character as a string.

Key Concepts:
• chr(65) → 'A'
• chr() accepts integers in the valid Unicode range (0–1,114,111)
• chr(0) → '\\x00' (null character)
• chr(128512) → '😀' (emoji)
• Round-trip: chr(ord("A")) → "A" and ord(chr(65)) → 65

Key Distinctions:
• chr inverts ord for integers in valid Unicode range; 65 is 'A'.
• chr accepts large code points up to implementation max (0x10FFFF).

How It Works:
• Validates range, builds length-1 str for that code point.

Step-by-Step Execution:
1. int 65.
2. chr → 'A'.

Order of Operations:
• Call chr.

Common Use Cases:
• Building strings from numeric tables, CAPTCHA generation.

Edge Cases:
• chr out of range raises ValueError.

Performance Considerations:
• Small int fast.

Examples:
• chr(0)  # '\x00'

Notes:
• For bytes with single value, bytes([65]) vs chr differs — type matters.`
  }),

  // Q33
  (_i: number) => ({
    q: `What is chr(97)?`,
    o: ["'a'", "'A'", "'97'", "Error"],
    c: 0,
    e: "Code point 97 corresponds to lowercase 'a'.",
    de: `chr(97) returns 'a', the lowercase letter a.

Key Concepts:
• Code point 97 = lowercase 'a'
• Code point 65 = uppercase 'A'
• The difference of 32 between uppercase and lowercase ASCII letters is a well-known property of the ASCII table
• chr(97) → 'a', chr(98) → 'b', chr(99) → 'c', etc.

Key Distinctions:
• 97 maps to lowercase 'a' — pairs with ord symmetry chr(ord(x)).

How It Works:
• chr constructs Unicode character U+0061.

Step-by-Step Execution:
1. Pass 97 to chr.
2. Return 'a'.

Order of Operations:
• Single call.

Common Use Cases:
• Generating alphabet loops: [chr(c) for c in range(ord('a'), ord('z')+1)].

Edge Cases:
• Same range rules as other chr values.

Performance Considerations:
• Trivial.

Examples:
• chr(ord("a"))  # 'a'

Notes:
• Combine with % for circular shifts carefully — mod 26 ciphers.`
  }),

  // Q34
  (_i: number) => ({
    q: `What is chr(48)?`,
    o: ["'0'", "'48'", "0", "Error"],
    c: 0,
    e: "Code point 48 is the character '0' (digit zero as text).",
    de: `chr(48) returns the character '0' — the textual representation of the digit zero. This is a string of length 1, not the integer 0.

Key Concepts:
• chr(48) → '0' (a string character)
• Digit characters: chr(48)='0', chr(49)='1', ..., chr(57)='9'
• '0' is truthy (non-empty string), unlike the integer 0 which is falsy
• int(chr(48)) → 0 (converts the character back to an integer)

Key Distinctions:
• 48 is digit '0' character — reinforces ord/chr digit block 48–57.

How It Works:
• Maps code point to str digit '0'.

Step-by-Step Execution:
1. chr(48).
2. '0' str.

Order of Operations:
• chr only.

Common Use Cases:
• Building numeric strings without quotes from computed values.

Edge Cases:
• chr(48) is str, not int 0.

Performance Considerations:
• Trivial.

Examples:
• str(0) vs chr(48)

Notes:
• When constructing bytes from ints, bytes([48]) is b'0'.`
  }),

  // Q35
  (_i: number) => ({
    q: `What is chr(ord("A") + 32)?`,
    o: ["'a'", "'A'", "'!'", "Error"],
    c: 0,
    e: "ord(\"A\") is 65; adding 32 gives 97, which is chr(97) = 'a'.",
    de: `This expression converts uppercase 'A' to lowercase 'a' using ASCII arithmetic.

Key Concepts:
• ord("A") → 65
• 65 + 32 → 97
• chr(97) → 'a'
• In ASCII, each uppercase letter is exactly 32 less than its lowercase counterpart
• This is how low-level case conversion works, though Python's .lower() method is preferred for readability and Unicode correctness

Key Distinctions:
• ord("A") is 65; +32 gives 97 which is 'a' — manual ASCII lowercasing for A–Z.
• Fails outside ASCII letters if blindly applied.

How It Works:
• Inner ord, addition, chr constructs lowered letter for uppercase ASCII A.

Step-by-Step Execution:
1. ord("A") → 65.
2. Add 32 → 97.
3. chr(97) → 'a'.

Order of Operations:
• Innermost ord, addition, outer chr.

Common Use Cases:
• CTF/crypto katas teaching ASCII arithmetic.

Edge Cases:
• Non-ASCII letters need Unicode casefold, not +32.

Performance Considerations:
• Still trivial; readability worse than .lower().

Examples:
• "A".lower()  # preferred idiom

Notes:
• Teach as insight into ASCII layout, not production normalization.`
  }),

  // ===== NONE DEEP-DIVE (36–50) =====

  // Q36
  (_i: number) => ({
    q: `What is type(None)?`,
    o: ["<class 'NoneType'>", "<class 'None'>", "<class 'null'>", "<class 'void'>"],
    c: 0,
    e: "None is the sole instance of the NoneType class.",
    de: `None is Python's null value, and it has its own dedicated type called NoneType. There is exactly one None object in any Python program (it is a singleton).

Key Concepts:
• type(None) → <class 'NoneType'>
• None is a singleton: all references to None point to the same object
• NoneType cannot be instantiated: type(None)() returns None itself
• There is no 'null', 'void', or 'Nothing' in Python — only None

Key Distinctions:
• None is sole instance of NoneType; type(None) is <class 'NoneType'>.
• NoneType is not a subclass of other scalars.

How It Works:
• type on None returns its class object NoneType.

Step-by-Step Execution:
1. Load singleton None.
2. type(None) → NoneType class.

Order of Operations:
• Call type.

Common Use Cases:
• Explaining why None is its own type in isinstance checks.

Edge Cases:
• None is singleton — identity checks use "is None" idiomatically.

Performance Considerations:
• Instant.

Examples:
• isinstance(None, type(None))

Notes:
• Do not use == None in style guides — prefer "is None".`
  }),

  // Q37
  (_i: number) => ({
    q: `What is None == None?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "None is equal to itself using ==.",
    de: `None compared to None with == returns True. However, the idiomatic way to check for None in Python is to use 'is' instead of '=='.

Key Concepts:
• None == None → True
• == checks value equality
• While this works, PEP 8 recommends: x is None (not x == None)
• The reason: a custom class could override __eq__ to return True when compared with None, leading to unexpected results

Key Distinctions:
• None equals None by value equality; also identity holds — both point to same singleton.
• __eq__ for NoneType returns True comparing to None.

How It Works:
• Equality compares; None with None is True.

Step-by-Step Execution:
1. Load left None, right None.
2. Compare → True.

Order of Operations:
• Equality after literals.

Common Use Cases:
• Testing optional parameters defaulting to None.

Edge Cases:
• None == other types usually False.

Performance Considerations:
• Trivial.

Examples:
• (None, None) elements compare equal.

Notes:
• Still prefer "is" for None identity in conditionals.`
  }),

  // Q38
  (_i: number) => ({
    q: `What is None is None?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "None is a singleton, so 'is' always returns True for None comparisons.",
    de: `The 'is' operator checks identity (same object in memory), not equality. Since None is a singleton, 'is' is the preferred way to check for None.

Key Concepts:
• None is None → True
• 'is' checks identity: are these the exact same object?
• Since there is only one None object in Python, x is None is always reliable
• PEP 8 style: always use 'is' or 'is not' when comparing to None
• x is None is slightly faster than x == None because it avoids calling __eq__

Key Distinctions:
• The "is" operator checks object identity; singleton None is always identical to itself — True.
• Faster and recommended vs == for None.

How It Works:
• Compares pointers (or internal ids) of objects.

Step-by-Step Execution:
1. Load None twice — same singleton.
2. is → True.

Order of Operations:
• "is" after evaluating None literals (same object).

Common Use Cases:
• Guard clauses: if x is None.

Edge Cases:
• Small ints cache may confuse learners but irrelevant to None.

Performance Considerations:
• Identity check is fastest comparison.

Examples:
• x = None; x is None

Notes:
• Never write "x is 5" style for integers — only None/sentinel patterns idiomatically.`
  }),

  // Q39
  (_i: number) => ({
    q: `What is bool(None)?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "None is falsy — bool(None) returns False.",
    de: `None is one of Python's falsy values. When converted to a boolean, it evaluates to False.

Key Concepts:
• bool(None) → False
• None is falsy, meaning it evaluates to False in boolean contexts
• Other falsy values: 0, 0.0, "", [], {}, (), set(), False
• In if statements: if None: never executes the body
• This is why 'if x:' works as a None check (though 'if x is not None:' is more explicit)

Key Distinctions:
• None is falsy; bool(None) is False — one of two falsy “extra” constants alongside False, 0, "", [], {}, set(), etc.
• None is not the same as False but tests false in Boolean context.

How It Works:
• bool() calls __bool__ or __len__ hooks; for None, directly defined as False.

Step-by-Step Execution:
1. None input to bool.
2. Returns False.

Order of Operations:
• Call bool.

Common Use Cases:
• Default optional parameters: if not value — careful: distinguishes None vs 0.

Edge Cases:
• "if x is None" vs "if not x" differ when x could be 0 or empty container.

Performance Considerations:
• Trivial.

Examples:
• bool(0), bool(""), bool([])

Notes:
• Explicit None checks avoid falsy traps.`
  }),

  // Q40
  (_i: number) => ({
    q: `What is None == 0?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "None is not equal to 0 — they are different types and values.",
    de: `Even though both None and 0 are falsy, they are not equal. Python does not conflate "falsy" with "equal to other falsy values."

Key Concepts:
• None == 0 → False
• None and 0 are different types (NoneType vs int)
• Both are falsy: bool(None) == False and bool(0) == False
• But falsy values are not interchangeable: None != 0 != "" != [] != False
• Only None == None and 0 == 0 are True

Key Distinctions:
• None is not equal to 0 — different types and values; result False.
• Avoid implicit comparisons mixing None with numbers.

How It Works:
• __eq__ returns NotImplemented or False across unrelated types.

Step-by-Step Execution:
1. Compare None and int 0.
2. False.

Order of Operations:
• Equality.

Common Use Cases:
• Highlighting SQL NULL confusion translated to Python — None is not 0.

Edge Cases:
• numpy NaN comparisons differ — unrelated pitfall.

Performance Considerations:
• Trivial.

Examples:
• None is None  # True, different question

Notes:
• Use "x is None" rather than "x == None" stylistically.`
  }),

  // Q41
  (_i: number) => ({
    q: `What is None == False?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "None is not equal to False, despite both being falsy.",
    de: `None and False are both falsy, but they are not equal. Python distinguishes between different falsy values.

Key Concepts:
• None == False → False
• bool(None) == False → True (both are falsy)
• But None == False → False (they are different objects/types)
• False == 0 → True (bool is a subclass of int, and False is 0)
• None does not equal any value except None itself

Key Distinctions:
• None is not equal False — False is bool, None is NoneType; equality False.
• Both falsy but distinct objects.

How It Works:
• Boolean False vs None compare unequal.

Step-by-Step Execution:
1. None vs False.
2. False result.

Order of Operations:
• Equality.

Common Use Cases:
• JSON null → Python None vs JSON false → False — deserialization distinctions.

Edge Cases:
• bool(None) is False but None is not False.

Performance Considerations:
• Trivial.

Examples:
• (None == False, None is False)

Notes:
• Write explicit tests for API contracts expecting real False vs missing None.`
  }),

  // Q42
  (_i: number) => ({
    q: `What is None == ""?`,
    o: ["False", "True", "Error", "None"],
    c: 0,
    e: "None is not equal to an empty string.",
    de: `None is not equal to any value other than None itself. An empty string "" is a different type (str) and a different value.

Key Concepts:
• None == "" → False
• Both None and "" are falsy, but they are not equal
• None is NoneType, "" is str — different types
• In many other languages, null/nil may loosely equal empty string, but Python is strict
• Always use 'x is None' rather than 'x == ""' to check for None

Key Distinctions:
• Empty string is not None — different types; equality False.
• Common bug: confusing missing value (None) with empty text ("").

How It Works:
• str __eq__ vs None returns False.

Step-by-Step Execution:
1. Compare None and "".
2. False.

Order of Operations:
• Equality.

Common Use Cases:
• Form fields: distinguish “not provided” vs “provided empty”.

Edge Cases:
• Stripping whitespace: "" after strip still not None.

Performance Considerations:
• Trivial.

Examples:
• if name is None vs if not name

Notes:
• Document whether empty string allowed when parameter optional.`
  }),

  // Q43
  (_i: number) => ({
    q: `What is the result?\nx = None\nx is None`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "Assigning None to a variable and checking with 'is' returns True.",
    de: `When you assign None to a variable, the variable references the singleton None object. The 'is' operator confirms identity.

Key Concepts:
• x = None stores a reference to the singleton None object
• x is None → True (x references the same None object)
• This is the standard Python idiom for checking if a variable is None
• Common pattern: def f(x=None): if x is None: x = []

Key Distinctions:
• Assignment binds name x to None; "is" checks identity — True.
• Demonstrates recommended None check pattern.

How It Works:
• Name resolution returns None object; "is" compares identities.

Step-by-Step Execution:
1. Bind x to None.
2. Evaluate x is None → True.

Order of Operations:
• Statement sequence; final expression in REPL prints True.

Common Use Cases:
• Resetting optional caches: self._cache = None.

Edge Cases:
• Rebinding x changes outcome.

Performance Considerations:
• Trivial.

Examples:
• y = None; print(y is None)

Notes:
• Multiple assignment: a = b = None sets both to same singleton.`
  }),

  // Q44
  (_i: number) => ({
    q: `What does a function return if it has no return statement?`,
    o: ["None", "0", "False", "Error"],
    c: 0,
    e: "Functions without a return statement implicitly return None.",
    de: `In Python, every function returns a value. If no return statement is present, the function implicitly returns None.

Key Concepts:
• def f(): pass → calling f() returns None
• def g(): print("hi") → g() prints "hi" and returns None
• This is an implicit return, equivalent to having 'return None' at the end
• print() itself returns None: x = print("hi") → x is None
• This is why you should never write: my_list = my_list.sort() (sort returns None)

Key Distinctions:
• Function without return statement implicitly returns None — Python adds implicit "return None" at end.
• Type hints often mark -> None for such procedures.

How It Works:
• CALL_FUNCTION opcode returns None if no value supplied from RETURN_VALUE.

Step-by-Step Execution:
1. Enter function f.
2. Run body; no return hit.
3. Implicit None returned to caller.

Order of Operations:
• Call executes body sequentially.

Common Use Cases:
• Functions that only print/log side effects.

Edge Cases:
• Bare return also returns None early.

Performance Considerations:
• None return is cheap.

Examples:
• def g(): return
• assert f() is None

Notes:
• Distinguish returning None vs returning empty list — different semantics.`
  }),

  // Q45
  (_i: number) => ({
    q: `What is the result?\ndef f(): pass\ntype(f())`,
    o: ["<class 'NoneType'>", "<class 'None'>", "<class 'function'>", "Error"],
    c: 0,
    e: "f() returns None (no return statement), so type(f()) is NoneType.",
    de: `A function with only 'pass' in its body returns None implicitly. type() on that return value gives NoneType.

Key Concepts:
• def f(): pass defines a function that does nothing
• f() calls the function and gets None (the implicit return value)
• type(None) → <class 'NoneType'>
• Note: type(f) would give <class 'function'> — but type(f()) gives the type of the return value
• The parentheses matter: f is the function object, f() is the call result

Key Distinctions:
• pass body returns implicit None; type(f()) is type(None) → <class 'NoneType'>.
• f() call happens before type().

How It Works:
• Call f, get None, pass to type().

Step-by-Step Execution:
1. Define f.
2. Call f() → None.
3. type(None) → NoneType class object.

Order of Operations:
• Inner call f() before type.

Common Use Cases:
• Verifying stub functions return None.

Edge Cases:
• If f raised, type not reached.

Performance Considerations:
• Trivial.

Examples:
• type(print())  # print returns None

Notes:
• Many builtins mutate state and return None — side-effect APIs.`
  }),

  // Q46
  (_i: number) => ({
    q: `What is the result?\ndef f(): return\nf() is None`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "A bare 'return' with no value returns None.",
    de: `A return statement without a value (bare return) is equivalent to 'return None'. The function exits and returns None.

Key Concepts:
• 'return' with no expression returns None
• 'return' is equivalent to 'return None'
• f() is None → True
• This is commonly used to exit a function early: if error: return
• All three produce the same result: no return, bare return, and return None

Key Distinctions:
• Bare return exits with None; f() is None is True via identity.
• Combines implicit None with "is" check.

How It Works:
• Function returns None explicitly via bare return.

Step-by-Step Execution:
1. Define f with bare return.
2. Call f() yields None.
3. "is None" → True.

Order of Operations:
• Call then comparison.

Common Use Cases:
• Early exit guards returning nothing.

Edge Cases:
• Multiple bare returns still None.

Performance Considerations:
• Trivial.

Examples:
• def g(x):
    if not x:
        return
    return x*2

Notes:
• Annotate -> None for readability in typed codebases.`
  }),

  // Q47
  (_i: number) => ({
    q: `What is [None, None, None] == [None] * 3?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "[None] * 3 creates [None, None, None], which equals the left side.",
    de: `List repetition with * creates a new list with the element repeated. Since None is a singleton, all references point to the same object.

Key Concepts:
• [None] * 3 → [None, None, None]
• [None, None, None] == [None, None, None] → True
• All None references are the same object (singleton)
• Caution with mutable objects: [[]] * 3 creates three references to the same inner list
• But with None (immutable singleton), repetition is perfectly safe

Key Distinctions:
• List repetition replicates references; three None entries equal three separate slots all referencing same None singleton — structural equality True.
• [None]*3 builds list length 3 with repeated same reference — compared to explicit list equals.

How It Works:
• List equality compares elements pairwise; each position None == None.

Step-by-Step Execution:
1. Build left list literal three Nones.
2. Build right via multiplication — three entries None.
3. == compares elementwise → True.

Order of Operations:
• Literals evaluated; == last.

Common Use Cases:
• Initializing scoreboards [0]*n risks mutation sharing — but with immutable None safe.

Edge Cases:
• Mutable objects in repeat list share references — not here with None.

Performance Considerations:
• [None]*3 faster than append loop for fixed pattern.

Examples:
• [[0]]*3  # dangerous shared inner lists

Notes:
• For mutable defaults, use list comprehension or copy.`
  }),

  // Q48
  (_i: number) => ({
    q: `What is str(None)?`,
    o: ["'None'", "''", "None", "Error"],
    c: 0,
    e: "str(None) returns the string 'None', not an empty string.",
    de: `Calling str() on None returns the string "None" — a 4-character string containing the letters N, o, n, e.

Key Concepts:
• str(None) → 'None' (the string, not the None object)
• len(str(None)) → 4
• This is why f-strings and print() display "None": print(None) outputs None
• Be careful: str(None) is truthy (non-empty string), unlike None itself which is falsy
• Common pitfall: if x is None, str(x) gives "None", not ""

Key Distinctions:
• str(None) returns literal string 'None', not empty — surprising for newcomers.
• Distinct from print output formatting.

How It Works:
• str type calls __str__ on NoneType producing 'None'.

Step-by-Step Execution:
1. Call str(None).
2. Returns 'None' (4 chars).

Order of Operations:
• str() builtin.

Common Use Cases:
• Quick debugging concatenation — can accidentally inject word None into CSV.

Edge Cases:
• f"{None}" also 'None'.

Performance Considerations:
• Allocates small str.

Examples:
• str(False)  # 'False'

Notes:
• Use str(x) if x is not None else '' for human text defaults.`
  }),

  // Q49
  (_i: number) => ({
    q: `What is repr(None)?`,
    o: ["'None'", "None", "''", "Error"],
    c: 0,
    e: "repr(None) returns the string 'None', same as str(None).",
    de: `repr() returns a string representation intended for debugging. For None, repr(None) and str(None) both return the string "None".

Key Concepts:
• repr(None) → 'None'
• str(None) → 'None' (same result for None)
• For many types, repr() and str() differ: repr("hello") → "'hello'" (with quotes), str("hello") → 'hello'
• But for None, both produce the same 4-character string "None"
• repr() is what you see in the interactive Python shell; str() is what print() uses

Key Distinctions:
• repr(None) is 'None' as well in practice — repr aims unambiguous Python literal form.
• For None, str and repr coincide.

How It Works:
• repr calls __repr__ on NoneType.

Step-by-Step Execution:
1. repr(None).
2. 'None' string with quotes in interactive display? Actually returns 'None' without extra quotes in value — in REPL shows quotes.

Order of Operations:
• repr call.

Common Use Cases:
• Logging exact object representation for debugging.

Edge Cases:
• Some objects differ str vs repr widely — None does not.

Performance Considerations:
• Trivial.

Examples:
• repr([None])

Notes:
• Use the %r format or the !r conversion in f-strings for repr insertion.`
  }),

  // Q50
  (_i: number) => ({
    q: `What is None in [1, None, 3]?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "The 'in' operator finds None in the list because it is an element.",
    de: `The 'in' operator checks for membership. Since None is one of the elements in the list [1, None, 3], the result is True.

Key Concepts:
• None in [1, None, 3] → True
• The 'in' operator uses identity (is) and equality (==) checks
• Since None is a singleton, the identity check succeeds immediately
• None can be a valid element in any collection: lists, tuples, sets, dicts (as value)
• None is not hashable? Actually it is: {None: "value"} is valid, and None can be in a set

Key Distinctions:
• Membership uses equality testing: None == None at position index 1 — True.
• "in" on list scans until match.

How It Works:
• list __contains__ iterates comparing elements with ==.

Step-by-Step Execution:
1. Build list [1, None, 3].
2. Evaluate None in list — finds middle element.
3. True.

Order of Operations:
• List literal then membership.

Common Use Cases:
• Checking sentinel presence in small option lists.

Edge Cases:
• NaN in list breaks equality reflexivity — unrelated edge fun.

Performance Considerations:
• Linear scan O(n); sets faster for large collections.

Examples:
• None in {None}  # True

Notes:
• For many lookups, store members in set for O(1) average containment.`
  }),
];
