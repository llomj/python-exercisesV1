import { PersonaStage } from '../../types';

// --- LEVEL 6 INTERMEDIATE A: Advanced Dictionary Patterns, Nested Dicts & Method Mastery ---
// 50 TRULY UNIQUE questions - NO number/variable variations
export const level6IntermediateA = [
  // 1-15: Nested dict access and manipulation
  (_i: number) => ({
    q: `d = {"a": {"x": 1}}\nWhat is d["a"]["x"]?`,
    o: ["1", "{'x': 1}", "KeyError", "None"],
    c: 0,
    e: "Chained indexing accesses nested dicts: d['a'] returns {'x': 1}, then ['x'] returns 1.",
    de: `Nested dictionary access uses chained bracket notation. Each bracket dereferences one level deeper into the structure.

Key concepts:
• d["a"] retrieves the inner dict {"x": 1}
• Then ["x"] retrieves 1 from that inner dict
• This is equivalent to temp = d["a"]; temp["x"]

How it works:
• d = {"a": {"x": 1}} — outer dict maps "a" to an inner dict
• d["a"] → {"x": 1}
• d["a"]["x"] → 1

Examples:
• d["a"]["x"] → 1
• d["a"] → {"x": 1}
• d["b"] → KeyError (key doesn't exist)

Common uses:
• Accessing hierarchical/nested data structures
• JSON-like data traversal
• Configuration objects with sections`
  }),
  (_i: number) => ({
    q: `d = {"a": {"x": 1}}\nd["a"]["y"] = 2\nWhat is d["a"]?`,
    o: ["{'x': 1, 'y': 2}", "{'y': 2}", "{'x': 1}", "KeyError"],
    c: 0,
    e: "Assigning to d['a']['y'] adds key 'y' to the nested dict, so d['a'] becomes {'x': 1, 'y': 2}.",
    de: `You can modify nested dictionaries by chaining bracket assignment. d["a"]["y"] = 2 adds the key "y" with value 2 to the inner dictionary that d["a"] references.

Key concepts:
• d["a"] resolves to the inner dict {"x": 1}
• ["y"] = 2 adds a new key-value pair to that inner dict
• The original key "x" is preserved

How it works:
• d["a"] → {"x": 1} (mutable dict object)
• d["a"]["y"] = 2 mutates that object in place
• d["a"] → {"x": 1, "y": 2}

Examples:
• d["a"]["y"] = 2 → adds "y": 2 to the nested dict
• d["a"]["x"] = 99 → overwrites existing key "x"

Common uses:
• Building nested structures incrementally
• Updating configuration sub-sections
• Appending data to grouped records`
  }),
  (_i: number) => ({
    q: `d = {"a": {"b": {"c": 3}}}\nWhat is d["a"]["b"]["c"]?`,
    o: ["3", "{'c': 3}", "{'b': {'c': 3}}", "KeyError"],
    c: 0,
    e: "Triple-chained indexing drills through three levels of nesting to reach the value 3.",
    de: `Deeply nested dictionaries can be accessed by chaining as many bracket lookups as there are levels. Each level resolves one dictionary, and the next bracket digs deeper.

Key concepts:
• d["a"] → {"b": {"c": 3}}
• d["a"]["b"] → {"c": 3}
• d["a"]["b"]["c"] → 3

How it works:
• First bracket: outer dict → middle dict
• Second bracket: middle dict → inner dict
• Third bracket: inner dict → scalar value 3

Examples:
• d["a"]["b"]["c"] → 3
• d["a"]["b"] → {"c": 3}
• d["a"] → {"b": {"c": 3}}

Common uses:
• Navigating JSON API responses
• Tree-like data structures
• Multi-level configuration files`
  }),
  (_i: number) => ({
    q: `d = {"users": [{"name": "Alice"}, {"name": "Bob"}]}\nWhat is d["users"][0]["name"]?`,
    o: ["'Alice'", "'Bob'", "[{'name': 'Alice'}]", "KeyError"],
    c: 0,
    e: "d['users'] is a list of dicts; [0] gets the first dict, then ['name'] gets 'Alice'.",
    de: `Dictionaries can contain lists as values, and those lists can contain other dictionaries. This mixed nesting is common in real-world data (e.g., JSON APIs).

Key concepts:
• d["users"] → the list [{"name": "Alice"}, {"name": "Bob"}]
• [0] → first element: {"name": "Alice"}
• ["name"] → "Alice"

How it works:
• d["users"] resolves to a list
• List indexing [0] picks the first dict
• Dict indexing ["name"] extracts the name value

Examples:
• d["users"][0]["name"] → "Alice"
• d["users"][1]["name"] → "Bob"
• d["users"][0] → {"name": "Alice"}

Common uses:
• Processing API responses with arrays of objects
• Database query results
• Configuration with repeated structured entries`
  }),
  (_i: number) => ({
    q: `d = {"users": [{"name": "Alice"}, {"name": "Bob"}]}\nWhat is len(d["users"])?`,
    o: ["2", "1", "3", "Error"],
    c: 0,
    e: "d['users'] is a list with two dict elements, so len() returns 2.",
    de: `len() works on the value retrieved from a dictionary. Here d["users"] is a list containing two dictionaries, so len() returns 2.

Key concepts:
• d["users"] → [{"name": "Alice"}, {"name": "Bob"}]
• len() counts the number of elements in that list
• The list has 2 elements (two dicts)

How it works:
• d["users"] retrieves the list value
• len([{"name": "Alice"}, {"name": "Bob"}]) → 2
• Each dict in the list counts as one element

Examples:
• len(d["users"]) → 2
• len(d) → 1 (the outer dict has only one key: "users")

Common uses:
• Counting records in nested data
• Validating expected data sizes
• Loop bounds for processing nested lists`
  }),
  (_i: number) => ({
    q: `d = {}\nd.setdefault("a", {})["x"] = 1\nWhat is d?`,
    o: ["{'a': {'x': 1}}", "{'a': {}}", "{}", "KeyError"],
    c: 0,
    e: "setdefault returns the existing or newly-set value; here it returns {}, then ['x']=1 mutates that dict in place.",
    de: `setdefault is powerful for building nested dicts. It returns the value for the key if it exists, or sets it to the default and returns that default. The returned value can then be mutated in place.

Key concepts:
• d.setdefault("a", {}) → key "a" is missing, so it sets d["a"] = {} and returns {}
• The returned {} is the same object stored in d["a"]
• ["x"] = 1 mutates that dict object in place
• d is now {"a": {"x": 1}}

How it works:
• d is empty → "a" not found
• setdefault inserts {} for "a" and returns it
• The bracket assignment modifies the returned dict
• Since it's the same object, d["a"] reflects the change

Examples:
• d.setdefault("a", {})["x"] = 1 → d = {"a": {"x": 1}}
• d.setdefault("a", {})["y"] = 2 → d = {"a": {"x": 1, "y": 2}} (reuses existing)

Common uses:
• Building grouped/nested structures without checking key existence
• Adjacency lists for graphs
• Accumulating categorized data`
  }),
  (_i: number) => ({
    q: `d = {}\nd.setdefault("a", []).append(1)\nd.setdefault("a", []).append(2)\nWhat is d?`,
    o: ["{'a': [1, 2]}", "{'a': [2]}", "{'a': [1]}", "{'a': [], 'a': []}"],
    c: 0,
    e: "First setdefault creates the list and appends 1; the second call finds 'a' already exists, returns the same list, and appends 2.",
    de: `setdefault is ideal for the "append to list grouped by key" pattern. On the first call the key is missing so a new list is created; on subsequent calls the existing list is returned and appended to.

Key concepts:
• First call: "a" missing → sets d["a"] = [] → appends 1 → d = {"a": [1]}
• Second call: "a" exists → returns existing [1] → appends 2 → d = {"a": [1, 2]}
• The default [] in the second call is never used

How it works:
• d.setdefault("a", []) either creates or retrieves the list
• .append() mutates the list in place
• Both calls operate on the same list object

Examples:
• After both appends: d = {"a": [1, 2]}
• Alternative: from collections import defaultdict; d = defaultdict(list)

Common uses:
• Grouping items by category
• Building adjacency lists
• Accumulating values per key without if-else checks`
  }),
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2}\nWhat is {v: k for k, v in d.items()}?`,
    o: ["{1: 'a', 2: 'b'}", "{'a': 1, 'b': 2}", "{('a', 1): ('b', 2)}", "Error"],
    c: 0,
    e: "This dict comprehension swaps keys and values, creating an inverted dictionary.",
    de: `Dict inversion swaps keys and values using a comprehension. For each (k, v) pair in d.items(), the new dict maps v → k.

Key concepts:
• d.items() yields ("a", 1) and ("b", 2)
• {v: k for k, v in ...} makes v the new key and k the new value
• Result: {1: "a", 2: "b"}
• Only works cleanly when values are unique and hashable

How it works:
• ("a", 1) → new entry 1: "a"
• ("b", 2) → new entry 2: "b"
• Result: {1: "a", 2: "b"}

Examples:
• {v: k for k, v in {"a": 1, "b": 2}.items()} → {1: "a", 2: "b"}
• Inverse of a bijective mapping

Common uses:
• Reversing lookup tables
• Creating reverse indexes
• Bidirectional mapping (store both directions)`
  }),
  (_i: number) => ({
    q: `d = {"a": 1, "b": 1}\nWhat is {v: k for k, v in d.items()}?`,
    o: ["{1: 'b'}", "{1: 'a'}", "{1: 'a', 1: 'b'}", "Error"],
    c: 0,
    e: "When multiple keys share the same value, the last one processed wins during inversion. 'b' overwrites 'a' for key 1.",
    de: `When inverting a dict whose values are not unique, duplicate keys in the result are overwritten. Since dicts are insertion-ordered (Python 3.7+), the last key-value pair processed for a given new key wins.

Key concepts:
• d.items() yields ("a", 1) then ("b", 1)
• First iteration: new dict gets {1: "a"}
• Second iteration: key 1 already exists → overwritten with "b"
• Result: {1: "b"}

How it works:
• Comprehension processes items in insertion order
• ("a", 1) → {1: "a"}
• ("b", 1) → {1: "b"} (overwrites)
• Final: {1: "b"}

Examples:
• {v: k for k, v in {"a": 1, "b": 1}.items()} → {1: "b"}
• To preserve all keys: use defaultdict(list) and append

Common uses:
• Understanding "last wins" semantics in dict construction
• Recognizing when inversion loses data
• Motivating defaultdict-based grouping instead`
  }),
  (_i: number) => ({
    q: `d1 = {"a": 1}\nd2 = {"b": 2}\nWhat is {**d1, **d2, "c": 3}?`,
    o: ["{'a': 1, 'b': 2, 'c': 3}", "{'c': 3}", "{'a': 1, 'b': 2}", "Error"],
    c: 0,
    e: "Double-star unpacking merges d1 and d2 into a new dict, then the literal 'c': 3 is added.",
    de: `The {**d1, **d2, key: val} syntax creates a new dictionary by unpacking multiple dicts and adding literal key-value pairs.

Key concepts:
• **d1 unpacks {"a": 1} into the new dict
• **d2 unpacks {"b": 2} into the new dict
• "c": 3 adds a literal entry
• All combined into one dict: {"a": 1, "b": 2, "c": 3}

How it works:
• Start with empty dict
• **d1 → adds "a": 1
• **d2 → adds "b": 2
• "c": 3 → adds "c": 3
• Result: {"a": 1, "b": 2, "c": 3}

Examples:
• {**{"x": 1}, **{"y": 2}} → {"x": 1, "y": 2}
• {**d1, **d2, "c": 3} → merges all three sources

Common uses:
• Merging multiple dicts into one (pre-3.9 alternative to |)
• Adding extra keys during merge
• Creating modified copies of dicts`
  }),
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2, "c": 3}\nWhat is {k: v for k, v in d.items() if v > 1}?`,
    o: ["{'b': 2, 'c': 3}", "{'a': 1}", "{'c': 3}", "{2: 'b', 3: 'c'}"],
    c: 0,
    e: "The dict comprehension filters to only include entries where the value is greater than 1.",
    de: `Dict comprehensions support an optional if-clause that filters which key-value pairs are included in the result.

Key concepts:
• d.items() yields all (key, value) pairs
• The if v > 1 clause keeps only pairs where the value exceeds 1
• "a": 1 is excluded (1 > 1 is False)
• "b": 2 and "c": 3 are included

How it works:
• ("a", 1): 1 > 1 → False → excluded
• ("b", 2): 2 > 1 → True → included
• ("c", 3): 3 > 1 → True → included
• Result: {"b": 2, "c": 3}

Examples:
• {k: v for k, v in d.items() if v > 1} → {"b": 2, "c": 3}
• {k: v for k, v in d.items() if v % 2 == 0} → {"b": 2}

Common uses:
• Filtering dicts by value thresholds
• Removing entries that meet certain criteria
• Selecting subsets of configuration`
  }),
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2}\nWhat is list(d)?`,
    o: ["['a', 'b']", "[('a', 1), ('b', 2)]", "[1, 2]", "Error"],
    c: 0,
    e: "Iterating over a dict (or calling list() on it) yields the keys, not the values or items.",
    de: `When you iterate over a dictionary — via for loop, list(), or any iterable consumer — Python yields the keys only. This is a fundamental dict behavior.

Key concepts:
• list(d) is equivalent to list(d.keys())
• Only keys are produced: "a", "b"
• To get values: list(d.values())
• To get pairs: list(d.items())

How it works:
• d.__iter__() yields keys in insertion order
• list() collects them: ["a", "b"]

Examples:
• list({"a": 1, "b": 2}) → ["a", "b"]
• list({"a": 1, "b": 2}.values()) → [1, 2]
• list({"a": 1, "b": 2}.items()) → [("a", 1), ("b", 2)]

Common uses:
• Getting a list of all keys
• Checking membership (for k in d)
• Understanding implicit dict iteration behavior`
  }),
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2}\nWhat is dict(sorted(d.items(), key=lambda x: x[1]))?`,
    o: ["{'a': 1, 'b': 2}", "{'b': 2, 'a': 1}", "[('a', 1), ('b', 2)]", "Error"],
    c: 0,
    e: "Sorting by value (x[1]) sorts pairs as [('a',1),('b',2)]; dict() reconstructs the dict preserving that order.",
    de: `sorted() with a key function on d.items() produces a sorted list of (key, value) tuples. dict() then reconstructs a dictionary from those sorted tuples, preserving the sorted order (Python 3.7+).

Key concepts:
• d.items() → [("a", 1), ("b", 2)]
• key=lambda x: x[1] sorts by value
• Values 1 < 2, so order is [("a", 1), ("b", 2)]
• dict() preserves this insertion order

How it works:
• sorted sorts by the value component: 1, 2
• Already in ascending order → no change
• dict() rebuilds: {"a": 1, "b": 2}

Examples:
• dict(sorted({"b": 2, "a": 1}.items(), key=lambda x: x[1])) → {"a": 1, "b": 2}
• dict(sorted(d.items(), key=lambda x: -x[1])) → descending by value

Common uses:
• Sorting dicts by value for display
• Creating ranked/ordered mappings
• Top-N extraction from dicts`
  }),
  (_i: number) => ({
    q: `d = {"b": 2, "a": 1}\nWhat is dict(sorted(d.items()))?`,
    o: ["{'a': 1, 'b': 2}", "{'b': 2, 'a': 1}", "[('a', 1), ('b', 2)]", "Error"],
    c: 0,
    e: "sorted(d.items()) sorts by key alphabetically; dict() preserves that order.",
    de: `When sorted() is called on dict items without a key function, it sorts by the first element of each tuple (the key) by default, since tuples compare element-by-element.

Key concepts:
• d.items() → [("b", 2), ("a", 1)]
• sorted() compares tuples: ("a", 1) < ("b", 2) because "a" < "b"
• Result: [("a", 1), ("b", 2)]
• dict() preserves this alphabetical key order

How it works:
• Tuples compare lexicographically: first element first
• "a" < "b" → ("a", 1) comes first
• dict() rebuilds with that order

Examples:
• dict(sorted({"b": 2, "a": 1}.items())) → {"a": 1, "b": 2}
• dict(sorted({"z": 1, "m": 2, "a": 3}.items())) → {"a": 3, "m": 2, "z": 1}

Common uses:
• Alphabetizing dict keys for display
• Canonical ordering for comparison
• Deterministic serialization`
  }),
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2, "c": 3}\nWhat is max(d, key=d.get)?`,
    o: ["'c'", "3", "('c', 3)", "Error"],
    c: 0,
    e: "max(d) iterates over keys; key=d.get compares by their values. 'c' has the largest value (3).",
    de: `max(d, key=d.get) finds the key with the maximum value. Iterating over d yields keys; the key function d.get maps each key to its value for comparison.

Key concepts:
• max(d) iterates over d's keys: "a", "b", "c"
• key=d.get means compare by d.get("a")=1, d.get("b")=2, d.get("c")=3
• max value is 3 → corresponding key is "c"
• Returns the key, not the value

How it works:
• "a" → d.get("a") = 1
• "b" → d.get("b") = 2
• "c" → d.get("c") = 3
• max picks "c" because 3 is the largest comparison value

Examples:
• max(d, key=d.get) → "c"
• min(d, key=d.get) → "a"
• max(d.values()) → 3 (if you want the value itself)

Common uses:
• Finding the key with highest/lowest value
• Argmax pattern for dictionaries
• Selecting best category/option from scored results`
  }),
  // 16-30: Dict method mastery
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2}\nd.update(b=3, c=4)\nWhat is d?`,
    o: ["{'a': 1, 'b': 3, 'c': 4}", "{'a': 1, 'b': 2, 'c': 4}", "{'b': 3, 'c': 4}", "Error"],
    c: 0,
    e: "update() with keyword arguments overwrites 'b' to 3 and adds 'c': 4.",
    de: `dict.update() accepts keyword arguments in addition to dicts and iterables. Keyword arguments are treated as key-value pairs where the argument name is the key (as a string).

Key concepts:
• d.update(b=3, c=4) is equivalent to d.update({"b": 3, "c": 4})
• Existing key "b" is overwritten: 2 → 3
• New key "c" is added with value 4
• Key "a" is untouched

How it works:
• d starts as {"a": 1, "b": 2}
• b=3 → d["b"] = 3 (overwrite)
• c=4 → d["c"] = 4 (new key)
• d is now {"a": 1, "b": 3, "c": 4}

Examples:
• d.update(b=3, c=4) → {"a": 1, "b": 3, "c": 4}
• d.update({"b": 3}, c=4) → same result (mixing sources)

Common uses:
• Updating multiple keys at once
• Applying configuration overrides
• Merging partial updates into existing data`
  }),
  (_i: number) => ({
    q: `d = {"a": 1}\nd.update([("b", 2), ("c", 3)])\nWhat is d?`,
    o: ["{'a': 1, 'b': 2, 'c': 3}", "{'b': 2, 'c': 3}", "[('a', 1), ('b', 2), ('c', 3)]", "Error"],
    c: 0,
    e: "update() accepts a list of (key, value) pairs and adds each pair to the dict.",
    de: `dict.update() is versatile — it accepts another dict, an iterable of (key, value) pairs, or keyword arguments. When given a list of tuples, each tuple is treated as a key-value pair.

Key concepts:
• [("b", 2), ("c", 3)] is an iterable of 2-tuples
• Each tuple (key, value) is added to d
• Existing key "a" is untouched; "b" and "c" are added

How it works:
• d starts as {"a": 1}
• ("b", 2) → d["b"] = 2
• ("c", 3) → d["c"] = 3
• d is now {"a": 1, "b": 2, "c": 3}

Examples:
• d.update([("b", 2), ("c", 3)]) → {"a": 1, "b": 2, "c": 3}
• d.update(zip(keys, vals)) → same pattern with zip

Common uses:
• Building dicts from external data sources
• Importing key-value pairs from CSV/database rows
• Merging pairs from any iterable`
  }),
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2}\nd.pop("a")\nWhat is d?`,
    o: ["{'b': 2}", "{'a': 1}", "{'a': 1, 'b': 2}", "Error"],
    c: 0,
    e: "pop('a') removes key 'a' and its value from the dict. Only 'b': 2 remains.",
    de: `dict.pop(key) removes the specified key from the dictionary and returns its value. The dict is mutated in place.

Key concepts:
• d.pop("a") removes "a" from d and returns 1
• d is mutated: only {"b": 2} remains
• If the key doesn't exist and no default is given, raises KeyError

How it works:
• d starts as {"a": 1, "b": 2}
• pop("a") finds "a", removes it, returns 1
• d is now {"b": 2}

Examples:
• d.pop("a") → returns 1, d becomes {"b": 2}
• d.pop("z", None) → returns None (no KeyError with default)
• d.pop("z") → KeyError (no default)

Common uses:
• Removing and processing items
• Extracting optional parameters from kwargs
• Cleaning unwanted keys from data`
  }),
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2}\nresult = [d.pop(k) for k in list(d) if d[k] < 2]\nWhat is d?`,
    o: ["{'b': 2}", "{'a': 1}", "{}", "Error"],
    c: 0,
    e: "list(d) snapshots the keys. Only 'a' has value < 2, so pop('a') removes it. d becomes {'b': 2}.",
    de: `This pattern removes entries matching a condition. list(d) creates a snapshot of keys first (essential to avoid modifying the dict during iteration), then the comprehension pops matching entries.

Key concepts:
• list(d) → ["a", "b"] — snapshot prevents RuntimeError
• d["a"] = 1, 1 < 2 → True → d.pop("a") removes "a"
• d["b"] = 2, 2 < 2 → False → "b" stays
• result = [1], d = {"b": 2}

How it works:
• Without list(d), modifying d during iteration raises RuntimeError
• list(d) makes a copy of keys to iterate safely
• pop removes matching entries and collects their values

Examples:
• [d.pop(k) for k in list(d) if d[k] < 2] → [1]
• d after: {"b": 2}

Common uses:
• Conditional removal of dict entries
• Partitioning dicts by criteria
• Extracting matching items from a dict`
  }),
  (_i: number) => ({
    q: `d = {"a": 1}\nWhat is d.setdefault("a", 999)?`,
    o: ["1", "999", "None", "Error"],
    c: 0,
    e: "Key 'a' already exists with value 1, so setdefault returns the existing value without changing it.",
    de: `setdefault(key, default) returns the value for key if it exists. If the key is missing, it inserts it with the default value and returns that default. When the key exists, the default argument is ignored entirely.

Key concepts:
• "a" is already in d with value 1
• setdefault returns 1 (the existing value)
• d is NOT modified — still {"a": 1}
• The 999 default is never used

How it works:
• d.setdefault("a", 999) → "a" found → return d["a"] = 1
• d remains {"a": 1}

Examples:
• d.setdefault("a", 999) → 1 (key exists)
• d.setdefault("z", 999) → 999 (key missing, inserts "z": 999)

Common uses:
• Safe initialization: only sets if missing
• Avoiding overwriting existing data
• Alternative to if key not in d: d[key] = default`
  }),
  (_i: number) => ({
    q: `d = {"a": 1}\nWhat is d.setdefault("b", 999)?`,
    o: ["999", "1", "None", "Error"],
    c: 0,
    e: "Key 'b' is missing, so setdefault inserts 'b': 999 and returns 999.",
    de: `When setdefault is called with a key that doesn't exist, it inserts the key with the given default value and returns that value.

Key concepts:
• "b" is not in d
• setdefault inserts d["b"] = 999
• Returns 999
• d is now {"a": 1, "b": 999}

How it works:
• d.setdefault("b", 999) → "b" not found
• Inserts "b": 999 into d
• Returns 999
• d = {"a": 1, "b": 999}

Examples:
• d.setdefault("b", 999) → 999 (missing key)
• d.setdefault("a", 999) → 1 (existing key, unchanged)
• d.setdefault("c") → None (default defaults to None)

Common uses:
• Initializing missing keys with defaults
• Counter initialization: d.setdefault(k, 0)
• Building nested structures incrementally`
  }),
  (_i: number) => ({
    q: `What is {}.fromkeys("abc", 0)?`,
    o: ["{'a': 0, 'b': 0, 'c': 0}", "{'abc': 0}", "{0: 'abc'}", "Error"],
    c: 0,
    e: "fromkeys iterates over 'abc' (characters 'a','b','c') and maps each to value 0.",
    de: `dict.fromkeys(iterable, value) creates a new dictionary with keys from the iterable and all values set to the given value. When the iterable is a string, each character becomes a key.

Key concepts:
• "abc" is iterated character by character: "a", "b", "c"
• Each character becomes a key mapped to the value 0
• Result: {"a": 0, "b": 0, "c": 0}

How it works:
• fromkeys iterates over "abc"
• "a" → 0, "b" → 0, "c" → 0
• Returns {"a": 0, "b": 0, "c": 0}

Examples:
• {}.fromkeys("abc", 0) → {"a": 0, "b": 0, "c": 0}
• dict.fromkeys([1, 2, 3], "x") → {1: "x", 2: "x", 3: "x"}
• {}.fromkeys("abc") → {"a": None, "b": None, "c": None}

Common uses:
• Initializing a dict with known keys and uniform values
• Creating sets-as-dicts (all values None)
• Template dictionaries`
  }),
  (_i: number) => ({
    q: `d = {}.fromkeys("abc", [])\nd["a"].append(1)\nWhat is d?`,
    o: ["{'a': [1], 'b': [1], 'c': [1]}", "{'a': [1], 'b': [], 'c': []}", "{'a': 1, 'b': [], 'c': []}", "Error"],
    c: 0,
    e: "fromkeys shares ONE list object across all keys. Appending to one mutates them all.",
    de: `This is a classic Python gotcha. fromkeys uses the SAME value object for every key — it does not copy it. So all three keys point to the exact same list.

Key concepts:
• {}.fromkeys("abc", []) creates {"a": [], "b": [], "c": []}
• But all three values are the SAME list object (same id)
• d["a"].append(1) mutates that shared list
• All keys now show [1]

How it works:
• One [] object is created
• All keys reference that same object
• Mutating via any key affects all keys
• d = {"a": [1], "b": [1], "c": [1]}

Examples:
• d["a"] is d["b"] → True (same object!)
• d["a"].append(1) → all show [1]

Common uses:
• Understanding mutable default pitfall
• Knowing when to use comprehensions instead:
  {k: [] for k in "abc"} — creates independent lists`
  }),
  (_i: number) => ({
    q: `d = {k: [] for k in "abc"}\nd["a"].append(1)\nWhat is d?`,
    o: ["{'a': [1], 'b': [], 'c': []}", "{'a': [1], 'b': [1], 'c': [1]}", "{'a': 1, 'b': [], 'c': []}", "Error"],
    c: 0,
    e: "A dict comprehension creates a NEW list for each key, so appending to 'a' only affects 'a'.",
    de: `Unlike fromkeys, a dict comprehension evaluates the value expression independently for each key. Each call to [] creates a brand-new list object.

Key concepts:
• {k: [] for k in "abc"} creates three SEPARATE list objects
• d["a"], d["b"], d["c"] are different objects
• d["a"].append(1) only mutates d["a"]'s list
• d["b"] and d["c"] remain []

How it works:
• k="a" → new [] created for "a"
• k="b" → new [] created for "b"
• k="c" → new [] created for "c"
• d["a"].append(1) → only "a"'s list is modified

Examples:
• d["a"] is d["b"] → False (different objects!)
• d["a"].append(1) → d = {"a": [1], "b": [], "c": []}

Common uses:
• Correct way to create dicts with independent mutable defaults
• Initializing per-key accumulators
• Avoiding the fromkeys shared-reference pitfall`
  }),
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2}\nWhat is d.keys() & {"a", "c"}?`,
    o: ["{'a'}", "['a']", "{'a', 'c'}", "Error"],
    c: 0,
    e: "dict.keys() returns a view that supports set operations. The intersection (&) with {'a','c'} gives {'a'}.",
    de: `dict.keys() returns a view object that supports set-like operations: &, |, -, ^. This lets you perform set operations between dict keys and other sets without converting first.

Key concepts:
• d.keys() → dict_keys(["a", "b"])
• dict_keys supports & (intersection) with any set-like
• {"a", "c"} & d.keys() → keys present in both: {"a"}
• "c" is not in d, so it's excluded

How it works:
• d.keys() = {"a", "b"} (as a set-like view)
• {"a", "c"} ∩ {"a", "b"} = {"a"}
• Returns a set: {"a"}

Examples:
• d.keys() & {"a", "c"} → {"a"}
• d.keys() | {"c"} → {"a", "b", "c"}
• d.keys() - {"a"} → {"b"}

Common uses:
• Finding common keys between dicts and sets
• Checking which requested keys actually exist
• Set operations on dict keys without conversion`
  }),
  (_i: number) => ({
    q: `d1 = {"a": 1, "b": 2}\nd2 = {"b": 3, "c": 4}\nWhat is d1.keys() & d2.keys()?`,
    o: ["{'b'}", "{'a', 'b', 'c'}", "{'a'}", "Error"],
    c: 0,
    e: "The & operator on key views gives the intersection — keys present in both dicts. Only 'b' is shared.",
    de: `Key views from two different dicts can be intersected directly to find common keys. This is a powerful and efficient way to find shared keys.

Key concepts:
• d1.keys() = {"a", "b"}
• d2.keys() = {"b", "c"}
• & = set intersection → keys in both: {"b"}

How it works:
• "a" in d1 but not d2 → excluded
• "b" in both → included
• "c" in d2 but not d1 → excluded
• Result: {"b"}

Examples:
• d1.keys() & d2.keys() → {"b"}
• d1.keys() | d2.keys() → {"a", "b", "c"} (union)
• d1.keys() - d2.keys() → {"a"} (difference)

Common uses:
• Finding overlapping keys between dicts
• Detecting conflicts during merges
• Comparing dict schemas`
  }),
  (_i: number) => ({
    q: `d1 = {"a": 1, "b": 2}\nd2 = {"b": 3, "c": 4}\nWhat is d1.keys() | d2.keys()?`,
    o: ["{'a', 'b', 'c'}", "{'b'}", "{'a', 'c'}", "Error"],
    c: 0,
    e: "The | operator on key views gives the union — all keys from both dicts.",
    de: `The union operator | on key views combines all keys from both dicts into a single set. Duplicates are naturally deduplicated since it's a set operation.

Key concepts:
• d1.keys() = {"a", "b"}
• d2.keys() = {"b", "c"}
• | = set union → all unique keys: {"a", "b", "c"}

How it works:
• "a" from d1 → included
• "b" from both → included (once)
• "c" from d2 → included
• Result: {"a", "b", "c"}

Examples:
• d1.keys() | d2.keys() → {"a", "b", "c"}
• len(d1.keys() | d2.keys()) → 3

Common uses:
• Determining the complete set of keys across multiple dicts
• Planning merged dict structure
• Finding all unique fields across records`
  }),
  (_i: number) => ({
    q: `d1 = {"a": 1, "b": 2}\nd2 = {"b": 3, "c": 4}\nWhat is d1.keys() - d2.keys()?`,
    o: ["{'a'}", "{'c'}", "{'a', 'c'}", "Error"],
    c: 0,
    e: "The - operator on key views gives keys in d1 that are NOT in d2. Only 'a' qualifies.",
    de: `The difference operator - on key views returns keys present in the left operand but absent from the right. This is a set difference operation.

Key concepts:
• d1.keys() = {"a", "b"}
• d2.keys() = {"b", "c"}
• d1.keys() - d2.keys() = keys in d1 not in d2 = {"a"}
• Note: this is directional; d2.keys() - d1.keys() = {"c"}

How it works:
• "a" in d1, not in d2 → included
• "b" in both → excluded (it's in d2)
• Result: {"a"}

Examples:
• d1.keys() - d2.keys() → {"a"}
• d2.keys() - d1.keys() → {"c"} (reversed)

Common uses:
• Finding keys unique to one dict
• Detecting missing fields
• Calculating what needs to be added during merge`
  }),
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2}\nWhat is d.keys() ^ {"a", "c"}?`,
    o: ["{'b', 'c'}", "{'a'}", "{'a', 'b', 'c'}", "Error"],
    c: 0,
    e: "Symmetric difference (^) returns keys in either operand but not both: 'b' and 'c'.",
    de: `The symmetric difference operator ^ on key views returns elements that are in one operand or the other, but not in both. It's the opposite of intersection.

Key concepts:
• d.keys() = {"a", "b"}
• Right operand: {"a", "c"}
• ^ = elements in exactly one side
• "a" is in both → excluded
• "b" is only in d → included
• "c" is only in the set → included
• Result: {"b", "c"}

How it works:
• "a": in both → excluded
• "b": only left → included
• "c": only right → included
• Result: {"b", "c"}

Examples:
• d.keys() ^ {"a", "c"} → {"b", "c"}
• d.keys() ^ d.keys() → set() (nothing unique to either side)

Common uses:
• Finding mismatched keys between expected and actual
• Detecting additions and removals
• Schema diff operations`
  }),
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2}\nWhat is "a" in d.keys()?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "'a' in d.keys() checks if 'a' is a key, which is the same as 'a' in d. Result is True.",
    de: `"a" in d.keys() tests for key membership in the key view. It's functionally identical to "a" in d, since dict membership checks keys by default.

Key concepts:
• d.keys() returns a view of the keys: dict_keys(["a", "b"])
• "a" in d.keys() → True (same as "a" in d)
• Both are O(1) average-case lookups

How it works:
• d.keys() returns a set-like view
• "a" in that view → True
• Equivalent and equally fast as "a" in d

Examples:
• "a" in d.keys() → True
• "c" in d.keys() → False
• "a" in d → True (preferred shorter form)

Common uses:
• Key existence checks (usually "a" in d is preferred)
• When you already have a keys view from a set operation
• Explicit about checking keys vs values`
  }),
  // 31-50: Dict unpacking and patterns
  (_i: number) => ({
    q: `def f(**kwargs):\n    return kwargs\nWhat is f(a=1, b=2)?`,
    o: ["{'a': 1, 'b': 2}", "(1, 2)", "['a', 'b']", "Error"],
    c: 0,
    e: "**kwargs collects keyword arguments into a dictionary. f(a=1, b=2) returns {'a': 1, 'b': 2}.",
    de: `The **kwargs parameter collects all keyword arguments passed to a function into a dictionary. The keys are the argument names (as strings) and the values are the argument values.

Key concepts:
• **kwargs is a dict of keyword arguments
• f(a=1, b=2) → kwargs = {"a": 1, "b": 2}
• The parameter name "kwargs" is convention; any name works

How it works:
• f(a=1, b=2) is called
• **kwargs collects a=1 and b=2
• kwargs = {"a": 1, "b": 2}
• return kwargs returns that dict

Examples:
• f(a=1, b=2) → {"a": 1, "b": 2}
• f(x=10) → {"x": 10}
• f() → {}

Common uses:
• Flexible function signatures
• Passing options to inner functions
• Decorator wrappers that forward arguments`
  }),
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2}\ndef f(a, b):\n    return a + b\nWhat is f(**d)?`,
    o: ["3", "{'a': 1, 'b': 2}", "('a', 'b')", "Error"],
    c: 0,
    e: "**d unpacks the dict as keyword arguments: f(a=1, b=2), so a+b = 3.",
    de: `The ** operator before a dict in a function call unpacks the dict into keyword arguments. Each key becomes a parameter name and its value becomes the argument value.

Key concepts:
• f(**d) is equivalent to f(a=1, b=2)
• Dict keys must match parameter names
• Dict keys must be strings
• Extra or missing keys cause TypeError

How it works:
• **d unpacks {"a": 1, "b": 2}
• f receives a=1, b=2
• a + b = 1 + 2 = 3

Examples:
• f(**{"a": 1, "b": 2}) → f(a=1, b=2) → 3
• f(**{"a": 5, "b": 10}) → 15

Common uses:
• Passing config dicts to functions
• Dynamic function calls with computed arguments
• Forwarding arguments between functions`
  }),
  (_i: number) => ({
    q: `d1 = {"a": 1}\nd2 = {"a": 2}\nWhat is {**d1, **d2}?`,
    o: ["{'a': 2}", "{'a': 1}", "{'a': 1, 'a': 2}", "Error"],
    c: 0,
    e: "When unpacking dicts with duplicate keys, the last one wins. d2's 'a': 2 overwrites d1's 'a': 1.",
    de: `Dict unpacking with ** follows "last wins" semantics for duplicate keys, just like dict construction and update operations.

Key concepts:
• {**d1, **d2} merges d1 then d2 into a new dict
• d1 contributes "a": 1
• d2 contributes "a": 2 (overwrites)
• Result: {"a": 2}

How it works:
• Start empty dict
• **d1: add "a": 1 → {"a": 1}
• **d2: add "a": 2 → overwrites → {"a": 2}

Examples:
• {**{"a": 1}, **{"a": 2}} → {"a": 2}
• {**{"a": 2}, **{"a": 1}} → {"a": 1} (order matters!)

Common uses:
• Merging dicts with intentional override priority
• Configuration layers (defaults → user overrides)
• Understanding merge conflict resolution`
  }),
  (_i: number) => ({
    q: `keys = ["a", "b", "c"]\nvals = [1, 2, 3]\nWhat is dict(zip(keys, vals))?`,
    o: ["{'a': 1, 'b': 2, 'c': 3}", "[('a', 1), ('b', 2), ('c', 3)]", "{'a': 'b': 'c'}", "Error"],
    c: 0,
    e: "zip pairs up elements from both lists; dict() converts those pairs into a dictionary.",
    de: `zip(keys, vals) pairs corresponding elements from two iterables into tuples. dict() then converts that iterable of (key, value) tuples into a dictionary.

Key concepts:
• zip(["a","b","c"], [1,2,3]) → [("a",1), ("b",2), ("c",3)]
• dict() converts list of tuples to dict
• Result: {"a": 1, "b": 2, "c": 3}

How it works:
• "a" paired with 1 → ("a", 1)
• "b" paired with 2 → ("b", 2)
• "c" paired with 3 → ("c", 3)
• dict() converts to {"a": 1, "b": 2, "c": 3}

Examples:
• dict(zip(["a","b","c"], [1,2,3])) → {"a": 1, "b": 2, "c": 3}
• dict(zip("abc", range(3))) → {"a": 0, "b": 1, "c": 2}

Common uses:
• Building dicts from parallel lists
• Pairing column headers with row values
• Creating lookup tables from separate key/value sources`
  }),
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2, "c": 3}\nWhat is [d[k] for k in ["a", "c"]]?`,
    o: ["[1, 3]", "[1, 2, 3]", "{'a': 1, 'c': 3}", "Error"],
    c: 0,
    e: "The list comprehension selects values for keys 'a' and 'c': d['a']=1 and d['c']=3.",
    de: `A list comprehension can be used to extract specific values from a dict by iterating over a list of desired keys.

Key concepts:
• ["a", "c"] lists the keys we want
• d["a"] = 1, d["c"] = 3
• Collects into a list: [1, 3]
• Raises KeyError if a key is missing

How it works:
• k="a" → d["a"] = 1
• k="c" → d["c"] = 3
• Result: [1, 3]

Examples:
• [d[k] for k in ["a", "c"]] → [1, 3]
• [d[k] for k in ["b"]] → [2]
• [d.get(k) for k in ["a", "z"]] → [1, None] (safe version)

Common uses:
• Extracting a subset of values by key list
• Reordering dict values by specific key order
• Projecting specific fields from records`
  }),
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2, "c": 3}\nWhat is {k: d[k] for k in ["a", "c"] if k in d}?`,
    o: ["{'a': 1, 'c': 3}", "{'a': 1, 'b': 2, 'c': 3}", "[1, 3]", "Error"],
    c: 0,
    e: "This dict comprehension creates a sub-dict containing only keys 'a' and 'c' from d.",
    de: `A dict comprehension over a list of desired keys, with an if k in d guard, safely creates a sub-dictionary containing only the specified keys.

Key concepts:
• Iterates over ["a", "c"]
• if k in d ensures KeyError is avoided for missing keys
• Builds a new dict with only matching keys and their values

How it works:
• k="a": "a" in d → True → include "a": 1
• k="c": "c" in d → True → include "c": 3
• Result: {"a": 1, "c": 3}

Examples:
• {k: d[k] for k in ["a", "c"] if k in d} → {"a": 1, "c": 3}
• {k: d[k] for k in ["a", "z"] if k in d} → {"a": 1} (z is missing, safely skipped)

Common uses:
• Sub-dict / projection from a larger dict
• Filtering to only desired fields
• Safe subset extraction without KeyError`
  }),
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2}\nWhat is d.get("c") is None?`,
    o: ["True", "False", "None", "Error"],
    c: 0,
    e: "d.get('c') returns None for a missing key (default). None is None evaluates to True.",
    de: `dict.get(key) returns None by default when the key is not found (unless a different default is specified). Comparing with is None checks identity against the None singleton.

Key concepts:
• "c" is not in d
• d.get("c") returns None (the default)
• None is None → True (identity check)

How it works:
• d.get("c") → key missing, no default specified → returns None
• None is None → True

Examples:
• d.get("c") is None → True
• d.get("c", 0) is None → False (default is 0, not None)
• d.get("a") is None → False (returns 1, not None)

Common uses:
• Checking if a key is missing from a dict
• Distinguishing between "key missing" and "key present with value"
• Note: this cannot distinguish "missing key" from "key present with None value"`
  }),
  (_i: number) => ({
    q: `d = {"a": None}\nWhat is d.get("a") is None?`,
    o: ["True", "False", "KeyError", "Error"],
    c: 0,
    e: "Key 'a' exists with value None, so d.get('a') returns None. None is None is True.",
    de: `This demonstrates a subtle pitfall: d.get(key) returns None both when the key is missing AND when the key exists with value None. You cannot distinguish the two cases using get() alone.

Key concepts:
• d.get("a") returns None (because the stored value IS None)
• None is None → True
• But d.get("z") would also return None (missing key)
• get() alone can't tell these apart

How it works:
• "a" exists in d with value None
• d.get("a") → None (the stored value)
• None is None → True

Examples:
• d.get("a") is None → True (key exists, value is None)
• d.get("z") is None → True (key missing, default None)
• Both return True — ambiguous!

Common uses:
• Understanding the limitation of get() for None values
• Motivation for using "key in d" to check existence
• Sentinel pattern: use a unique sentinel instead of None as default`
  }),
  (_i: number) => ({
    q: `d = {"a": None}\nWhat is "a" in d?`,
    o: ["True", "False", "None", "Error"],
    c: 0,
    e: "'a' is a key in d regardless of its value. The in operator checks key existence, not value.",
    de: `The in operator on a dict checks whether a key exists, completely independent of what value that key maps to. Even if the value is None, False, 0, or any other falsy value, in returns True.

Key concepts:
• "a" in d checks for key existence, not value
• d["a"] is None, but the key "a" is still present
• "a" in d → True
• This is the correct way to distinguish "key exists with None" from "key missing"

How it works:
• Python checks if "a" is among d's keys
• "a" is present → True
• The value (None) is irrelevant

Examples:
• "a" in {"a": None} → True
• "a" in {"a": 0} → True
• "b" in {"a": None} → False

Common uses:
• Correct key existence check (preferred over get() for None values)
• Distinguishing missing keys from keys with None/falsy values
• Guard before accessing: if "a" in d: use d["a"]`
  }),
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2}\nWhat is sum(d.values())?`,
    o: ["3", "{'a': 1, 'b': 2}", "['a', 'b']", "Error"],
    c: 0,
    e: "d.values() yields 1 and 2. sum() adds them: 1 + 2 = 3.",
    de: `sum() works on any iterable of numbers. d.values() returns a view of the dict's values, which sum() consumes to produce the total.

Key concepts:
• d.values() → dict_values([1, 2])
• sum() adds all values: 1 + 2 = 3
• Works because all values are numeric

How it works:
• d.values() yields 1, 2
• sum(1, 2) = 3

Examples:
• sum({"a": 1, "b": 2}.values()) → 3
• sum({"x": 10, "y": 20, "z": 30}.values()) → 60
• sum({}.values()) → 0

Common uses:
• Totaling numeric values in a dict
• Computing aggregates over grouped data
• Budget/inventory totals`
  }),
  (_i: number) => ({
    q: `d = {"a": "hello", "b": "world"}\nWhat is " ".join(d.values())?`,
    o: ["'hello world'", "'helloworld'", "['hello', 'world']", "Error"],
    c: 0,
    e: "d.values() yields 'hello' and 'world'. ' '.join() concatenates them with a space.",
    de: `str.join() works on any iterable of strings. d.values() provides the string values from the dict, and " ".join() concatenates them with a space separator.

Key concepts:
• d.values() → dict_values(["hello", "world"])
• " ".join() inserts " " between each value
• Result: "hello world"

How it works:
• d.values() yields "hello", "world"
• " ".join(["hello", "world"]) → "hello world"

Examples:
• " ".join({"a": "hello", "b": "world"}.values()) → "hello world"
• ",".join({"x": "a", "y": "b"}.values()) → "a,b"

Common uses:
• Combining dict values into a single string
• Generating output from structured data
• Building sentences or messages from parts`
  }),
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2}\nWhat is all(v > 0 for v in d.values())?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "all() returns True if every element is truthy. Both values (1, 2) are > 0, so the result is True.",
    de: `all() with a generator expression tests whether a condition holds for every value in the dict. It short-circuits on the first False.

Key concepts:
• d.values() → 1, 2
• Generator: v > 0 for each v
• 1 > 0 → True, 2 > 0 → True
• all([True, True]) → True

How it works:
• Evaluates v > 0 for each value
• All are True → all() returns True
• If any were False, all() would return False immediately

Examples:
• all(v > 0 for v in {1, 2}.values()) → True
• all(v > 0 for v in {"a": 0, "b": 1}.values()) → False (0 > 0 is False)

Common uses:
• Validating that all dict values meet a criterion
• Data integrity checks
• Pre-condition verification`
  }),
  (_i: number) => ({
    q: `d = {"a": 1, "b": 0}\nWhat is any(v == 0 for v in d.values())?`,
    o: ["True", "False", "Error", "None"],
    c: 0,
    e: "any() returns True if at least one element is truthy. d['b']=0, and 0==0 is True.",
    de: `any() with a generator expression tests whether at least one value in the dict satisfies a condition. It short-circuits on the first True.

Key concepts:
• d.values() → 1, 0
• Generator: v == 0 for each v
• 1 == 0 → False, 0 == 0 → True
• any([False, True]) → True

How it works:
• v=1: 1 == 0 → False → continue
• v=0: 0 == 0 → True → any() returns True immediately

Examples:
• any(v == 0 for v in {"a": 1, "b": 0}.values()) → True
• any(v == 0 for v in {"a": 1, "b": 2}.values()) → False

Common uses:
• Checking if any value meets a condition
• Searching for specific values in a dict
• Error detection (any errors in results?)`
  }),
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2, "c": 3}\nWhat is len(d)?`,
    o: ["3", "6", "['a', 'b', 'c']", "Error"],
    c: 0,
    e: "len() on a dict returns the number of key-value pairs. d has 3 pairs.",
    de: `len() on a dictionary returns the number of key-value pairs it contains. It does not count keys and values separately.

Key concepts:
• d has 3 key-value pairs: "a":1, "b":2, "c":3
• len(d) → 3
• Equivalent to len(d.keys()) or len(d.values()) or len(d.items())

How it works:
• Python counts the number of entries in the dict
• 3 entries → returns 3

Examples:
• len({"a": 1, "b": 2, "c": 3}) → 3
• len({}) → 0
• len({"x": 1}) → 1

Common uses:
• Checking dict size
• Empty dict check: len(d) == 0 (or just not d)
• Capacity/limit checks`
  }),
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2}\nWhat is list(reversed(d))?`,
    o: ["['b', 'a']", "['a', 'b']", "[2, 1]", "Error"],
    c: 0,
    e: "reversed(d) yields keys in reverse insertion order. list() collects them: ['b', 'a'].",
    de: `Since Python 3.8, dictionaries support reversed(). It reverses the iteration order of keys (which is insertion order in Python 3.7+).

Key concepts:
• d's insertion order: "a" first, "b" second
• reversed(d) yields keys in reverse: "b", "a"
• list() collects them: ["b", "a"]
• Only yields keys (like regular iteration)

How it works:
• d = {"a": 1, "b": 2} — insertion order: a, b
• reversed(d) → reverse of keys: b, a
• list(reversed(d)) → ["b", "a"]

Examples:
• list(reversed({"a": 1, "b": 2})) → ["b", "a"]
• list(reversed({"x": 1, "y": 2, "z": 3})) → ["z", "y", "x"]

Common uses:
• Processing dict entries in reverse order
• LIFO access pattern for ordered dicts
• Displaying most-recent-first`
  }),
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2}\nWhat is min(d.items(), key=lambda x: x[1])?`,
    o: ["('a', 1)", "'a'", "1", "Error"],
    c: 0,
    e: "min() over items with key=lambda x: x[1] finds the pair with the smallest value. ('a', 1) has value 1.",
    de: `min() on d.items() with a key function that extracts the value (x[1]) finds the (key, value) tuple with the minimum value. It returns the full tuple, not just the key or value.

Key concepts:
• d.items() → [("a", 1), ("b", 2)]
• key=lambda x: x[1] compares by value
• min compares 1 vs 2 → 1 is smaller
• Returns the full tuple ("a", 1)

How it works:
• ("a", 1): comparison key = 1
• ("b", 2): comparison key = 2
• min picks ("a", 1)

Examples:
• min(d.items(), key=lambda x: x[1]) → ("a", 1)
• max(d.items(), key=lambda x: x[1]) → ("b", 2)

Common uses:
• Finding the entry with smallest/largest value
• Argmin/argmax on dicts (returns both key and value)
• Ranking/sorting dict entries by value`
  }),
  (_i: number) => ({
    q: `d = {"a": 1}\nd["a"] += 1\nWhat is d?`,
    o: ["{'a': 2}", "{'a': 1}", "{'a': 11}", "Error"],
    c: 0,
    e: "d['a'] += 1 is equivalent to d['a'] = d['a'] + 1 = 1 + 1 = 2.",
    de: `Augmented assignment operators work on dict values just like on variables. d["a"] += 1 reads the current value, adds 1, and stores the result back.

Key concepts:
• d["a"] is currently 1
• d["a"] += 1 → d["a"] = d["a"] + 1 = 1 + 1 = 2
• d is now {"a": 2}

How it works:
• Read: d["a"] → 1
• Compute: 1 + 1 → 2
• Write: d["a"] = 2

Examples:
• d["a"] += 1 → d = {"a": 2}
• d["a"] *= 3 → d = {"a": 3} (if d["a"] was 1)
• d["a"] -= 5 → d = {"a": -4} (if d["a"] was 1)

Common uses:
• Incrementing counters in dicts
• Accumulating values
• Updating running totals`
  }),
  (_i: number) => ({
    q: `d = {}\nd["a"] = d.get("a", 0) + 1\nWhat is d?`,
    o: ["{'a': 1}", "{'a': 0}", "{}", "Error"],
    c: 0,
    e: "d.get('a', 0) returns 0 (key missing), then 0 + 1 = 1 is assigned to d['a'].",
    de: `This is the classic counter pattern using get() with a default. When the key is missing, get() returns the default (0), which is then incremented and stored.

Key concepts:
• d is empty → "a" is missing
• d.get("a", 0) returns 0 (the default)
• 0 + 1 = 1
• d["a"] = 1 → d = {"a": 1}

How it works:
• d.get("a", 0) → 0 (key not found, returns default)
• 0 + 1 = 1
• d["a"] = 1

Examples:
• First call: d.get("a", 0) → 0, d["a"] = 1
• Second call: d.get("a", 0) → 1, d["a"] = 2
• Alternative: from collections import Counter

Common uses:
• Manual counting/tallying without Counter
• Frequency counting in loops
• Accumulating totals per key`
  }),
  (_i: number) => ({
    q: `d = {"a": 1, "b": 2}\nWhat is {k: v for k, v in d.items() if k in "ac"}?`,
    o: ["{'a': 1}", "{'a': 1, 'b': 2}", "{'c': None}", "Error"],
    c: 0,
    e: "The filter checks if each key is a character in 'ac'. Only 'a' matches; 'b' is not in 'ac'.",
    de: `This dict comprehension filters entries by checking whether each key appears in the string "ac". The in operator on a string checks for substring/character membership.

Key concepts:
• d.items() yields ("a", 1) and ("b", 2)
• "a" in "ac" → True (character found in string)
• "b" in "ac" → False (character not found)
• Only "a": 1 passes the filter

How it works:
• k="a": "a" in "ac" → True → include
• k="b": "b" in "ac" → False → exclude
• Result: {"a": 1}

Examples:
• {k: v for k, v in d.items() if k in "ac"} → {"a": 1}
• {k: v for k, v in d.items() if k in "ab"} → {"a": 1, "b": 2}

Common uses:
• Filtering dict by allowed keys
• Selecting specific fields from records
• Whitelisting keys`
  }),
  (_i: number) => ({
    q: `d = {"a": 1}\ne = d\ne["b"] = 2\nWhat is d?`,
    o: ["{'a': 1, 'b': 2}", "{'a': 1}", "{'b': 2}", "Error"],
    c: 0,
    e: "e = d creates an alias, not a copy. Both names reference the same dict object, so e['b']=2 also changes d.",
    de: `Assignment in Python does not copy objects — it creates an alias (another name for the same object). Both d and e point to the identical dict in memory.

Key concepts:
• e = d → e and d are the same object (same id)
• e["b"] = 2 modifies the underlying dict
• d sees the change because it references the same object
• d is now {"a": 1, "b": 2}

How it works:
• d = {"a": 1} → dict object created
• e = d → e points to same object (no copy)
• e["b"] = 2 → the shared dict is mutated
• d and e both show {"a": 1, "b": 2}

Examples:
• d is e → True (same object)
• id(d) == id(e) → True
• To avoid this: e = d.copy() or e = dict(d)

Common uses:
• Understanding Python's reference semantics
• Avoiding accidental mutation through aliases
• Knowing when to use .copy() vs assignment`
  }),
];
