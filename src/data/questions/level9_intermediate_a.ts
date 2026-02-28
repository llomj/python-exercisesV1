// --- LEVEL 9 INTERMEDIATE A: MRO Deep-Dive, Multiple Inheritance Patterns & super() Mechanics ---
// 50 TRULY UNIQUE questions - NO number/variable variations
export const level9IntermediateA = [
  // ===== MRO DEEP (1–20) =====

  // Q1
  (_i: number) => ({
    q: `What is the result of:\nclass A: pass\nprint(A.__mro__)`,
    o: [`(<class 'A'>, <class 'object'>)`, `(<class 'A'>,)`, `(<class 'object'>, <class 'A'>)`, `Error`],
    c: 0,
    e: `Every class has object as its ultimate base, so A's MRO is (A, object).`,
    de: `Every Python class implicitly inherits from object. The __mro__ attribute shows the tuple of classes Python searches through when resolving attributes or methods.

Key concepts:
• __mro__ returns the method resolution order as a tuple
• Every class ultimately inherits from object
• A single class with no explicit parent has MRO: (ClassName, object)
• Python uses C3 linearization to compute the MRO

How it works:
• class A: pass creates a class that implicitly inherits from object
• A.__mro__ returns (<class 'A'>, <class 'object'>)
• Python first looks in A, then in object

Example:
class A: pass
A.__mro__   # (<class 'A'>, <class 'object'>)
A.mro()     # [<class 'A'>, <class 'object'>]  (list form)`
  }),

  // Q2
  (_i: number) => ({
    q: `What is the result of:\nclass A: pass\nclass B(A): pass\nprint(B.__mro__)`,
    o: [`(B, A, object)`, `(B, object, A)`, `(A, B, object)`, `(B, object)`],
    c: 0,
    e: `B inherits from A, so the MRO is B → A → object.`,
    de: `When B explicitly inherits from A, the MRO chains them together: B first, then A, then the ultimate base object.

Key concepts:
• Single inheritance creates a linear MRO chain
• The class itself always comes first in its own MRO
• Parent classes follow in inheritance order
• object is always last

How it works:
• class B(A) means B inherits from A
• B.__mro__ = (<class 'B'>, <class 'A'>, <class 'object'>)
• Attribute lookup searches B first, then A, then object

Example:
class A: pass
class B(A): pass
B.__mro__  # (<class 'B'>, <class 'A'>, <class 'object'>)
len(B.__mro__)  # 3`
  }),

  // Q3
  (_i: number) => ({
    q: `What is the result of:\nclass A: pass\nclass B(A): pass\nclass C(B): pass\nprint(C.__mro__)`,
    o: [`(C, B, A, object)`, `(C, A, B, object)`, `(A, B, C, object)`, `(C, B, object)`],
    c: 0,
    e: `C inherits from B which inherits from A, giving a linear chain C → B → A → object.`,
    de: `A chain of single inheritance produces a simple linear MRO. Each class appears once in the order from most derived to most base.

Key concepts:
• C(B) and B(A) form a linear inheritance chain
• MRO follows the chain from child to ultimate parent
• Each class appears exactly once in the MRO
• object is always the final entry

How it works:
• C inherits from B, B inherits from A, A inherits from object
• C.__mro__ = (C, B, A, object)
• Method lookup proceeds in this exact order

Example:
class A: pass
class B(A): pass
class C(B): pass
C.__mro__  # (<class 'C'>, <class 'B'>, <class 'A'>, <class 'object'>)`
  }),

  // Q4
  (_i: number) => ({
    q: `What is the result of:\nclass A: pass\nclass B: pass\nclass C(A, B): pass\nprint(C.__mro__)`,
    o: [`(C, A, B, object)`, `(C, B, A, object)`, `(C, A, object, B)`, `(A, B, C, object)`],
    c: 0,
    e: `With C(A, B), bases are listed left to right: C → A → B → object.`,
    de: `When a class inherits from multiple unrelated parents, the MRO places them in the order they appear in the class definition, followed by object.

Key concepts:
• C(A, B) means A is checked before B
• The order of base classes in the class definition matters
• Unrelated parents are linearized left-to-right
• object appears once at the end

How it works:
• class C(A, B) — A is the first parent, B is the second
• C.__mro__ = (C, A, B, object)
• Attribute lookup: C → A → B → object

Example:
class A: pass
class B: pass
class C(A, B): pass
C.__mro__  # (<class 'C'>, <class 'A'>, <class 'B'>, <class 'object'>)`
  }),

  // Q5
  (_i: number) => ({
    q: `What is the result of:\nclass A: pass\nclass B: pass\nclass C(B, A): pass\nprint(C.__mro__)`,
    o: [`(C, B, A, object)`, `(C, A, B, object)`, `(B, A, C, object)`, `(C, B, object, A)`],
    c: 0,
    e: `Swapping the order to C(B, A) makes B come before A in the MRO.`,
    de: `The order of base classes directly determines the MRO. Changing C(A, B) to C(B, A) reverses which parent is searched first.

Key concepts:
• C(B, A) means B is checked before A
• This is the opposite order from C(A, B)
• The programmer controls method resolution priority by choosing base order
• This is a fundamental design decision in multiple inheritance

How it works:
• class C(B, A) — B is listed first, A second
• C.__mro__ = (C, B, A, object)
• If both A and B define a method, B's version is found first

Example:
class A:
    x = "A"
class B:
    x = "B"
class C(B, A): pass
C.x  # "B" — B comes first in MRO`
  }),

  // Q6
  (_i: number) => ({
    q: `What algorithm does Python use to compute the Method Resolution Order (MRO)?`,
    o: [`C3 linearization`, `Depth-first search`, `Breadth-first search`, `Topological sort`],
    c: 0,
    e: `Python uses C3 linearization, which preserves local precedence order and monotonicity.`,
    de: `Python adopted the C3 linearization algorithm in Python 2.3 (for new-style classes) and it's the only algorithm used in Python 3.

Key concepts:
• C3 linearization guarantees a consistent and predictable MRO
• It preserves local precedence order (order of bases in class definition)
• It preserves monotonicity (if A comes before B in a parent's MRO, A also comes before B in child's MRO)
• It raises TypeError if no valid linearization exists

How it works:
• C3 merges the linearizations of parent classes with the list of parents
• It picks the first head that doesn't appear in the tail of any other list
• This process repeats until all classes are linearized
• If no valid head is found, TypeError is raised

Example:
class A: pass
class B(A): pass
class C(A): pass
class D(B, C): pass
D.__mro__  # (D, B, C, A, object) — C3 produces this ordering`
  }),

  // Q7
  (_i: number) => ({
    q: `What is the MRO of D in this diamond pattern?\nclass A: pass\nclass B(A): pass\nclass C(A): pass\nclass D(B, C): pass\nprint(D.__mro__)`,
    o: [`(D, B, C, A, object)`, `(D, B, A, C, object)`, `(D, C, B, A, object)`, `(D, A, B, C, object)`],
    c: 0,
    e: `In the classic diamond, C3 linearization gives D → B → C → A → object. A appears only once, after both B and C.`,
    de: `The diamond inheritance pattern is when two classes (B and C) inherit from the same parent (A), and a fourth class (D) inherits from both B and C. C3 linearization ensures A appears only once, after all its children.

Key concepts:
• Diamond: A is the common ancestor of B and C, D inherits from both B and C
• A must come after both B and C in the MRO (since both depend on A)
• C3 ensures each class appears exactly once
• The order of D's bases (B, C) determines B comes before C

How it works:
• D(B, C): merge B's MRO (B, A, object) with C's MRO (C, A, object) and bases [B, C]
• Pick D first, then B (head of B's MRO, not in tail of others)
• Then C (head of C's MRO), then A, then object
• Result: (D, B, C, A, object)

Example:
class A: pass
class B(A): pass
class C(A): pass
class D(B, C): pass
D.__mro__  # (D, B, C, A, object)`
  }),

  // Q8
  (_i: number) => ({
    q: `What is the output?\nclass A:\n    def f(self): return "A"\nclass B(A): pass\nclass C(A):\n    def f(self): return "C"\nclass D(B, C): pass\nprint(D().f())`,
    o: [`C`, `A`, `B`, `Error`],
    c: 0,
    e: `MRO is D → B → C → A. B doesn't define f, so C's version is found first, returning "C".`,
    de: `When D inherits from B and C (both inheriting from A), the MRO is (D, B, C, A, object). Method lookup follows this order.

Key concepts:
• D doesn't define f — check next in MRO
• B doesn't define f either — check next
• C defines f returning "C" — found!
• A's f returning "A" is never reached because C's f is found first

How it works:
• D().f() triggers method lookup along D's MRO: D → B → C → A → object
• D has no f, B has no f, C has f → return "C"
• This demonstrates why MRO matters: even though B is listed first in D's bases, C's method wins because B doesn't override it

Example:
D.__mro__  # (D, B, C, A, object)
D().f()    # "C" — C is checked before A in the MRO`
  }),

  // Q9
  (_i: number) => ({
    q: `Can the MRO computation fail with an error?`,
    o: [`Yes, TypeError for inconsistent ordering`, `No, Python always finds a valid MRO`, `Yes, ValueError`, `Yes, RuntimeError`],
    c: 0,
    e: `If C3 linearization cannot produce a consistent ordering, Python raises TypeError.`,
    de: `C3 linearization can fail when the inheritance hierarchy has contradictory ordering constraints. Python raises a TypeError at class creation time.

Key concepts:
• C3 linearization has strict rules about ordering consistency
• If parent order contradicts a base class's MRO, it fails
• The error is raised when the class is defined, not when it's used
• The error message says "Cannot create a consistent method resolution order"

How it works:
• C3 tries to merge parent MROs respecting local precedence
• If a class appears as a "head" in one list but in the "tail" of another, and no valid pick exists, it fails
• This prevents ambiguous method resolution

Example:
class A: pass
class B(A): pass
class C(A, B): pass  # TypeError!
# A appears before B in C's bases, but B's MRO has A after B — contradiction`
  }),

  // Q10
  (_i: number) => ({
    q: `What happens here?\nclass A: pass\nclass B(A): pass\nclass C(A, B): pass`,
    o: [`TypeError: inconsistent MRO`, `C is created normally`, `C.__mro__ is (C, A, B, object)`, `C.__mro__ is (C, B, A, object)`],
    c: 0,
    e: `C(A, B) fails because A appears before B in C's bases, but B's MRO places A after B.`,
    de: `This is the classic example of an inconsistent MRO. The conflict arises because C's base list says "A before B" but B's own MRO says "B before A".

Key concepts:
• C(A, B) says: search A before B
• But B inherits from A, so B's MRO is (B, A, object) — B before A
• These two constraints contradict each other
• C3 linearization cannot satisfy both, so TypeError is raised

How it works:
• To build C's MRO, C3 must merge: A's MRO (A, object), B's MRO (B, A, object), and bases [A, B]
• A is a head in A's MRO, but A also appears in the tail of B's MRO (B, A, object)
• B is a head in B's MRO, but A must come first per C's base list
• No valid ordering exists → TypeError

Example:
class A: pass
class B(A): pass
class C(A, B): pass
# TypeError: Cannot create a consistent method resolution order (MRO) for bases A, B`
  }),

  // Q11
  (_i: number) => ({
    q: `Why does class C(A, B) fail when B inherits from A?`,
    o: [
      `A before B in bases contradicts B's MRO having A after B`,
      `Python doesn't allow more than one parent`,
      `A and B have the same name`,
      `B is already a subclass so it can't be a sibling`
    ],
    c: 0,
    e: `C's bases say A before B, but B's MRO already requires B before A — a contradiction.`,
    de: `The inconsistency is a direct conflict between two ordering constraints that C3 linearization must respect simultaneously.

Key concepts:
• Constraint 1 (from C's base list): A must come before B
• Constraint 2 (from B's MRO): B must come before A (since B inherits from A)
• These two constraints are mutually exclusive
• C3 linearization enforces both, so it fails

How it works:
• C(A, B) → bases list says: A, then B
• B(A) → B's MRO says: B, then A
• For C's MRO, A must precede B (base list order) AND B must precede A (B's linearization)
• Both can't be true → TypeError

Fix:
class C(B, A): pass  # This works! B before A is consistent with B's MRO
# C.__mro__ = (C, B, A, object)`
  }),

  // Q12
  (_i: number) => ({
    q: `What is the output?\nclass A:\n    def f(self): return "A"\nclass B(A):\n    def f(self): return "B"\nclass C(A):\n    def f(self): return "C"\nclass D(B, C): pass\nprint(D().f())`,
    o: [`B`, `C`, `A`, `Error`],
    c: 0,
    e: `MRO is D → B → C → A. B defines f and is first after D, so "B" is returned.`,
    de: `When both B and C override f, the MRO determines which one D uses. Since B comes before C in D's MRO, B's version wins.

Key concepts:
• D's MRO is (D, B, C, A, object)
• D doesn't define f — look in B
• B defines f returning "B" — found!
• C's f and A's f are never reached

How it works:
• D(B, C) → B is listed first in bases
• D().f() → D has no f → check B → B has f → return "B"
• C's f("C") is shadowed because B appears earlier in the MRO

Example:
D.__mro__  # (D, B, C, A, object)
D().f()    # "B"
# Compare with Q8 where B did NOT define f — then C's f was used`
  }),

  // Q13
  (_i: number) => ({
    q: `What does super() follow when resolving methods?`,
    o: [`The MRO of the calling class`, `Only the direct parent class`, `All parent classes in parallel`, `The class definition order in the file`],
    c: 0,
    e: `super() follows the MRO, not just the direct parent. This is crucial for cooperative multiple inheritance.`,
    de: `A common misconception is that super() simply calls the parent class. In reality, super() delegates to the next class in the MRO chain.

Key concepts:
• super() returns a proxy that delegates to the next class in MRO
• "Next class" depends on where in the MRO the current class is
• This enables cooperative multiple inheritance
• The MRO is determined by the actual instance's class, not the class where super() is written

How it works:
• In class B, super() points to the next class after B in the MRO of the actual object
• If the object is of class D(B, C) with MRO (D, B, C, A, object), then super() in B goes to C, not A
• This is why super() is called "cooperative" — each class cooperates by calling super()

Example:
class A:
    def f(self): return "A"
class B(A):
    def f(self): return super().f() + "B"
class C(A):
    def f(self): return super().f() + "C"
class D(B, C): pass
D().f()  # "ACB" — super() in B goes to C (not A!), super() in C goes to A`
  }),

  // Q14
  (_i: number) => ({
    q: `What is the output?\nclass A:\n    def f(self): return "A"\nclass B(A):\n    def f(self): return super().f() + "B"\nclass C(A):\n    def f(self): return super().f() + "C"\nclass D(B, C): pass\nprint(D().f())`,
    o: [`ACB`, `ABC`, `AB`, `CAB`],
    c: 0,
    e: `MRO: D→B→C→A. D().f() → B.f() → super()=C → C.f() → super()=A → A.f()="A", then "A"+"C"="AC", then "AC"+"B"="ACB".`,
    de: `This is the classic demonstration of cooperative super() in a diamond hierarchy. Each super() call follows the MRO, not the direct parent.

Key concepts:
• D's MRO is (D, B, C, A, object)
• super() in B goes to C (next in D's MRO after B), NOT to A
• super() in C goes to A (next in D's MRO after C)
• The call chain builds the string from the bottom up

How it works step by step:
1. D().f() → D has no f → call B.f() (next in MRO)
2. B.f(): super().f() + "B" → super() in B is C (in D's MRO)
3. C.f(): super().f() + "C" → super() in C is A (in D's MRO)
4. A.f(): return "A"
5. Back to C.f(): "A" + "C" = "AC"
6. Back to B.f(): "AC" + "B" = "ACB"

Example:
D().f()  # "ACB"
# The key insight: super() in B goes to C, not A!`
  }),

  // Q15
  (_i: number) => ({
    q: `What is the output?\nclass A:\n    def __init__(self):\n        self.a = "A"\nclass B(A):\n    def __init__(self):\n        super().__init__()\n        self.b = "B"\nprint(B().a)`,
    o: [`A`, `B`, `Error`, `None`],
    c: 0,
    e: `super().__init__() calls A's __init__, which sets self.a = "A". Then B sets self.b = "B". B().a is "A".`,
    de: `Using super().__init__() in a subclass ensures the parent's initialization runs, setting up inherited attributes.

Key concepts:
• B.__init__ calls super().__init__() which runs A.__init__
• A.__init__ sets self.a = "A" on the instance
• Then B.__init__ continues and sets self.b = "B"
• The instance has both attributes: a="A" and b="B"

How it works:
1. B() creates a new instance, calls B.__init__
2. super().__init__() inside B calls A.__init__(self)
3. A.__init__ sets self.a = "A"
4. Back in B.__init__, self.b = "B" is set
5. B().a accesses the attribute set by A → "A"

Example:
b = B()
b.a  # "A" — set by A.__init__
b.b  # "B" — set by B.__init__`
  }),

  // Q16
  (_i: number) => ({
    q: `In diamond inheritance, what does using super().__init__() in every class ensure?`,
    o: [
      `Each class's __init__ is called exactly once`,
      `Only the first parent's __init__ is called`,
      `__init__ is called twice for the shared ancestor`,
      `__init__ is skipped for intermediate classes`
    ],
    c: 0,
    e: `Cooperative super() in a diamond ensures each __init__ runs exactly once, following the MRO.`,
    de: `Without super(), diamond inheritance can cause the shared ancestor's __init__ to run multiple times. Cooperative super() solves this by following the MRO.

Key concepts:
• In a diamond A ← B, A ← C, B,C ← D, A's __init__ should run once
• If B and C both call A.__init__(self) directly, A's __init__ runs twice
• If B and C both call super().__init__(), MRO ensures A.__init__ runs once
• This is the "cooperative" pattern

How it works:
• D.__init__ calls super().__init__() → goes to B (MRO: D, B, C, A, object)
• B.__init__ calls super().__init__() → goes to C (not A!)
• C.__init__ calls super().__init__() → goes to A
• A.__init__ calls super().__init__() → goes to object
• Each class's __init__ runs exactly once

Example:
class A:
    def __init__(self): print("A"); super().__init__()
class B(A):
    def __init__(self): print("B"); super().__init__()
class C(A):
    def __init__(self): print("C"); super().__init__()
class D(B, C):
    def __init__(self): print("D"); super().__init__()
D()  # prints D, B, C, A — each exactly once`
  }),

  // Q17
  (_i: number) => ({
    q: `What is the output?\nclass A:\n    x = 1\nclass B(A):\n    x = 2\nclass C(A): pass\nclass D(B, C): pass\nprint(D.x)`,
    o: [`2`, `1`, `3`, `Error`],
    c: 0,
    e: `MRO: D → B → C → A. B has x=2 and is reached before A (x=1), so D.x is 2.`,
    de: `Attribute lookup follows the MRO. The first class in the MRO that defines the attribute wins.

Key concepts:
• D's MRO is (D, B, C, A, object)
• D doesn't define x — check B
• B defines x = 2 — found! Return 2
• C (no x) and A (x=1) are never reached

How it works:
• D.x triggers attribute lookup along the MRO
• D has no x → B has x = 2 → return 2
• Even though A also has x = 1, B is checked first

Example:
D.__mro__  # (D, B, C, A, object)
D.x        # 2 — from B
C.x        # 1 — C has no x, falls through to A`
  }),

  // Q18
  (_i: number) => ({
    q: `What is the output?\nclass A:\n    x = 1\nclass B(A): pass\nclass C(A):\n    x = 3\nclass D(B, C): pass\nprint(D.x)`,
    o: [`3`, `1`, `Error`, `None`],
    c: 0,
    e: `MRO: D → B → C → A. B has no x, so C (x=3) is found next. D.x is 3.`,
    de: `When B doesn't define x, the MRO continues to C, which does define x=3. A's x=1 is further down the chain and never reached.

Key concepts:
• D's MRO is (D, B, C, A, object)
• D has no x, B has no x, C has x = 3 — found!
• A's x = 1 is shadowed by C's x = 3
• This demonstrates that MRO isn't just "depth first" — siblings matter

How it works:
• D.x → D (no x) → B (no x) → C (x=3) → return 3
• If C also had no x, then A (x=1) would be found
• The MRO ensures C is checked before A in the diamond

Example:
D.x  # 3 — from C
B.x  # 1 — B has no x, falls through to A (not C, since C isn't in B's MRO)
C.x  # 3 — C defines it directly`
  }),

  // Q19
  (_i: number) => ({
    q: `What is list.__mro__?`,
    o: [
      `(list, object)`,
      `(list, tuple, object)`,
      `(object, list)`,
      `(list, dict, object)`
    ],
    c: 0,
    e: `list inherits directly from object, so its MRO is (list, object).`,
    de: `Built-in types also have MROs. list is a direct subclass of object with no intermediate classes.

Key concepts:
• list inherits directly from object
• list.__mro__ = (<class 'list'>, <class 'object'>)
• Similarly, tuple.__mro__ = (<class 'tuple'>, <class 'object'>)
• Built-in types follow the same MRO rules as user-defined classes

How it works:
• list has no explicit Python-level parent other than object
• The MRO is simply (list, object)
• This is the same structure as any simple user-defined class

Example:
list.__mro__   # (<class 'list'>, <class 'object'>)
tuple.__mro__  # (<class 'tuple'>, <class 'object'>)
dict.__mro__   # (<class 'dict'>, <class 'object'>)
str.__mro__    # (<class 'str'>, <class 'object'>)`
  }),

  // Q20
  (_i: number) => ({
    q: `What is bool.__mro__?`,
    o: [
      `(bool, int, object)`,
      `(bool, object)`,
      `(bool, float, object)`,
      `(bool, str, object)`
    ],
    c: 0,
    e: `bool is a subclass of int, so its MRO is (bool, int, object).`,
    de: `One of Python's lesser-known facts: bool is a subclass of int. True is 1 and False is 0 in integer context.

Key concepts:
• bool inherits from int — this is by design
• bool.__mro__ = (<class 'bool'>, <class 'int'>, <class 'object'>)
• True + True = 2, True * 5 = 5 — because bool IS int
• issubclass(bool, int) returns True

How it works:
• bool was added to Python as a subclass of int for backward compatibility
• True and False are instances of bool, which is a subclass of int
• All int operations work on booleans

Example:
bool.__mro__         # (<class 'bool'>, <class 'int'>, <class 'object'>)
issubclass(bool, int)  # True
isinstance(True, int)  # True
True + True            # 2`
  }),

  // ===== super() MECHANICS (21–35) =====

  // Q21
  (_i: number) => ({
    q: `What does super() return?`,
    o: [
      `A proxy object that delegates to the next class in MRO`,
      `The parent class itself`,
      `An instance of the parent class`,
      `A copy of the current instance`
    ],
    c: 0,
    e: `super() returns a proxy object that delegates method calls to the next class in the MRO.`,
    de: `super() doesn't return the parent class or an instance of it. It returns a special proxy object that knows how to forward attribute lookups to the appropriate class in the MRO.

Key concepts:
• super() returns a proxy (not a class, not an instance)
• The proxy delegates attribute access to the next class in the MRO
• "Next class" is relative to the class where super() is called
• The proxy uses the MRO of the actual instance's type

How it works:
• super() inside class B creates a proxy bound to B and self
• When you call super().method(), the proxy finds method in the next class after B in self's MRO
• This enables cooperative method calls across the inheritance chain

Example:
class A:
    def greet(self): return "Hello"
class B(A):
    def greet(self):
        proxy = super()     # <super: <class 'B'>, <B object>>
        return proxy.greet() + "!"
B().greet()  # "Hello!"`
  }),

  // Q22
  (_i: number) => ({
    q: `What does super(ClassName, self) do compared to super()?`,
    o: [
      `Same thing — explicit form of the implicit super()`,
      `Calls the grandparent instead of parent`,
      `Skips the MRO and goes directly to object`,
      `Creates a new instance of ClassName`
    ],
    c: 0,
    e: `super(ClassName, self) is the explicit two-argument form. In Python 3, super() is shorthand for super(CurrentClass, self).`,
    de: `Python 3 introduced the zero-argument super() as syntactic sugar. The explicit form super(ClassName, self) is equivalent but was required in Python 2.

Key concepts:
• super() in Python 3 is equivalent to super(CurrentClass, self)
• The first argument specifies "start searching after this class in the MRO"
• The second argument is the object (or class) to bind to
• The explicit form is still useful for advanced patterns (e.g., skipping a class)

How it works:
• super(B, self) means: find the next class after B in type(self).__mro__
• If self is an instance of D with MRO (D, B, C, A, object), super(B, self) delegates to C
• super() with no arguments uses compiler magic to fill in the current class and self

Example:
class B(A):
    def f(self):
        return super().f()          # Python 3 shorthand
        return super(B, self).f()   # Equivalent explicit form`
  }),

  // Q23
  (_i: number) => ({
    q: `What is the output?\nclass A:\n    def f(self): return 1\nclass B(A):\n    def f(self): return super().f() + 1\nprint(B().f())`,
    o: [`2`, `1`, `Error`, `None`],
    c: 0,
    e: `B.f() calls super().f() which is A.f() returning 1, then adds 1 → 2.`,
    de: `super().f() in B delegates to A's f method, which returns 1. B's f then adds 1 to get 2.

Key concepts:
• B().f() calls B's f method
• super().f() inside B calls A's f method
• A.f() returns 1
• B.f() returns 1 + 1 = 2

How it works:
1. B().f() → calls B.f(self)
2. super().f() → proxy delegates to A.f(self) → returns 1
3. 1 + 1 = 2
4. B.f returns 2

Example:
B().f()  # 2
A().f()  # 1`
  }),

  // Q24
  (_i: number) => ({
    q: `What is the output?\nclass A:\n    def f(self): return 1\nclass B(A):\n    def f(self): return super().f() + 1\nclass C(B):\n    def f(self): return super().f() + 1\nprint(C().f())`,
    o: [`3`, `2`, `1`, `Error`],
    c: 0,
    e: `C.f() → super()=B.f() → super()=A.f()=1, then 1+1=2, then 2+1=3.`,
    de: `Each super() call in the chain adds 1 to the result from the next class in the MRO.

Key concepts:
• C's MRO is (C, B, A, object)
• C.f() calls super().f() → B.f()
• B.f() calls super().f() → A.f()
• Each level adds 1

How it works:
1. C().f() → C.f(self)
2. super().f() in C → B.f(self) → super().f() in B → A.f(self) → 1
3. B.f returns 1 + 1 = 2
4. C.f returns 2 + 1 = 3

Example:
A().f()  # 1
B().f()  # 2
C().f()  # 3
# Each level adds 1 through the super() chain`
  }),

  // Q25
  (_i: number) => ({
    q: `Can super() be called in methods other than __init__?`,
    o: [`Yes, in any instance or class method`, `No, only in __init__`, `Only in __init__ and __del__`, `Only in special dunder methods`],
    c: 0,
    e: `super() works in any method — __init__, regular methods, class methods, and properties.`,
    de: `super() is not restricted to __init__. It can be used in any instance method, class method, or property to delegate to the next class in the MRO.

Key concepts:
• super() works in __init__, regular methods, class methods, and properties
• It always follows the MRO regardless of which method it's used in
• Common uses include extending parent behavior in any method
• The only restriction is that it doesn't work in static methods (no instance/class context)

How it works:
• super() needs either an implicit or explicit class and instance/class reference
• In instance methods: super() uses the class where it's defined and self
• In class methods: super() uses the class where it's defined and cls
• In static methods: no self or cls available, so super() doesn't work

Example:
class A:
    def greet(self): return "Hello"
    @classmethod
    def create(cls): return cls()

class B(A):
    def greet(self): return super().greet() + " World"
    @classmethod
    def create(cls): return super().create()

B().greet()   # "Hello World"
B.create()    # <B instance>`
  }),

  // Q26
  (_i: number) => ({
    q: `What is the output?\nclass A:\n    @classmethod\n    def f(cls): return "A"\nclass B(A):\n    @classmethod\n    def f(cls): return super().f() + "B"\nprint(B.f())`,
    o: [`AB`, `A`, `B`, `Error`],
    c: 0,
    e: `super().f() in B's classmethod calls A.f() returning "A", then "A" + "B" = "AB".`,
    de: `super() works with @classmethod. In Python 3, super() inside a classmethod automatically uses the correct class context.

Key concepts:
• @classmethod receives cls instead of self
• super() inside a classmethod still works correctly
• super().f() delegates to A's classmethod f
• The result is "A" + "B" = "AB"

How it works:
1. B.f() → calls B's classmethod f with cls=B
2. super().f() → proxy delegates to A.f(cls=B) → returns "A"
3. "A" + "B" = "AB"
4. B.f() returns "AB"

Example:
A.f()  # "A"
B.f()  # "AB"
# super() in classmethods follows the same MRO rules`
  }),

  // Q27
  (_i: number) => ({
    q: `What class does super(A, A()) proxy for?\nclass A: pass`,
    o: [`object`, `A`, `type`, `None`],
    c: 0,
    e: `super(A, A()) proxies for the next class after A in A's MRO, which is object.`,
    de: `super(A, A()) creates a proxy that looks up methods starting from the class after A in A's MRO.

Key concepts:
• A's MRO is (A, object)
• super(A, instance) means: start looking after A in the MRO
• The next (and only remaining) class after A is object
• So super(A, A()) proxies for object

How it works:
• super(A, A()) — first arg is "start after A", second arg is the instance
• A.__mro__ = (A, object)
• After A in the MRO comes object
• Any method call on this proxy will look in object

Example:
class A: pass
s = super(A, A())
s.__init__    # <method-wrapper '__init__'> — from object
type(s)       # <class 'super'>`
  }),

  // Q28
  (_i: number) => ({
    q: `What is the output?\nclass A:\n    def __init__(self, x):\n        self.x = x\nclass B(A):\n    def __init__(self, x, y):\n        super().__init__(x)\n        self.y = y\nb = B(1, 2)\nprint((b.x, b.y))`,
    o: [`(1, 2)`, `(2, 1)`, `Error`, `(1, None)`],
    c: 0,
    e: `super().__init__(x) passes x=1 to A's __init__, setting self.x=1. Then self.y=2. Result: (1, 2).`,
    de: `super().__init__() allows the subclass to pass specific arguments to the parent's __init__ while adding its own initialization.

Key concepts:
• B.__init__ takes both x and y
• super().__init__(x) forwards only x to A.__init__
• A sets self.x = x (which is 1)
• B then sets self.y = y (which is 2)
• The instance has both attributes

How it works:
1. B(1, 2) calls B.__init__(self, 1, 2)
2. super().__init__(1) calls A.__init__(self, 1)
3. A sets self.x = 1
4. Back in B, self.y = 2
5. b.x = 1, b.y = 2

Example:
b = B(1, 2)
b.x  # 1 — set by A.__init__
b.y  # 2 — set by B.__init__`
  }),

  // Q29
  (_i: number) => ({
    q: `What is the output?\nclass A:\n    def __init__(self):\n        print("A")\nclass B(A):\n    def __init__(self):\n        print("B")\n        super().__init__()\nB()`,
    o: [`B then A`, `A then B`, `B only`, `A only`],
    c: 0,
    e: `B's __init__ prints "B" first, then super().__init__() calls A's __init__ which prints "A".`,
    de: `The order of print statements depends on where super().__init__() is called relative to the print in B.__init__.

Key concepts:
• B.__init__ runs: print("B") first, then super().__init__()
• super().__init__() calls A.__init__ which prints "A"
• Result: "B" is printed first, then "A"
• If super().__init__() were called before print("B"), the order would reverse

How it works:
1. B() → B.__init__(self)
2. print("B") → outputs "B"
3. super().__init__() → A.__init__(self)
4. print("A") → outputs "A"
5. Output: B, then A

Example:
B()
# Output:
# B
# A`
  }),

  // Q30
  (_i: number) => ({
    q: `What is the output?\nclass A:\n    def greet(self): return "Hello"\nclass B(A):\n    def greet(self): return super().greet() + " World"\nprint(B().greet())`,
    o: [`Hello World`, `Hello`, `World`, `Error`],
    c: 0,
    e: `super().greet() returns "Hello" from A, then " World" is appended → "Hello World".`,
    de: `This shows super() used in a regular method (not __init__) to extend the parent's behavior.

Key concepts:
• B.greet() calls super().greet() to get A's result
• A.greet() returns "Hello"
• B.greet() concatenates " World" to get "Hello World"
• This is the "extend parent behavior" pattern

How it works:
1. B().greet() → B.greet(self)
2. super().greet() → A.greet(self) → "Hello"
3. "Hello" + " World" = "Hello World"
4. Return "Hello World"

Example:
A().greet()  # "Hello"
B().greet()  # "Hello World"
# super() lets you build on the parent's implementation`
  }),

  // Q31
  (_i: number) => ({
    q: `Can super() be used inside a @staticmethod?`,
    o: [`No, super() needs an instance or class context`, `Yes, it works normally`, `Yes, but only in Python 3.10+`, `Yes, but it returns None`],
    c: 0,
    e: `super() requires either self (instance) or cls (classmethod) context. Static methods have neither.`,
    de: `super() relies on knowing which class it's called from and having a reference to the instance or class. Static methods provide neither.

Key concepts:
• super() with no arguments uses compiler magic (__class__ and self/cls)
• @staticmethod has no self or cls parameter
• Without an instance or class, super() cannot determine the MRO position
• Calling super() in a staticmethod raises RuntimeError or TypeError

How it works:
• In instance methods: super() uses __class__ (implicit) and self
• In class methods: super() uses __class__ (implicit) and cls
• In static methods: no self, no cls → super() fails
• You could use super(ClassName, instance) explicitly, but that defeats the purpose

Example:
class A:
    @staticmethod
    def f():
        super().f()  # RuntimeError: super(): no current class
# The fix: don't use super() in static methods, or use @classmethod instead`
  }),

  // Q32
  (_i: number) => ({
    q: `Why is super().__init__() preferred over ParentClass.__init__(self)?`,
    o: [
      `super() follows MRO and avoids hardcoding the parent class`,
      `super() is faster at runtime`,
      `ParentClass.__init__(self) doesn't work in Python 3`,
      `They are exactly equivalent in all cases`
    ],
    c: 0,
    e: `super() follows the MRO and doesn't hardcode the parent name, making it work correctly with multiple inheritance.`,
    de: `Using super() is the recommended practice because it enables cooperative multiple inheritance and avoids hardcoding parent class names.

Key concepts:
• super().__init__() follows the MRO — correct for diamond inheritance
• ParentClass.__init__(self) hardcodes the parent — brittle, can cause double calls in diamonds
• super() adapts when the class hierarchy changes
• ParentClass.__init__(self) must be manually updated if inheritance changes

How it works:
• In a diamond (D → B → C → A), super().__init__() in B calls C.__init__ (MRO order)
• But B calling A.__init__(self) directly skips C entirely
• This can cause A.__init__ to run twice (once from B, once from C)
• super() prevents this by ensuring each __init__ runs exactly once

Example:
# BAD — hardcoded parent:
class B(A):
    def __init__(self):
        A.__init__(self)  # Breaks in diamond inheritance

# GOOD — cooperative super():
class B(A):
    def __init__(self):
        super().__init__()  # Follows MRO correctly`
  }),

  // Q33
  (_i: number) => ({
    q: `What is the cooperative multi-init pattern in Python?\nclass A:\n    def __init__(self, **kw):\n        self.a = kw.pop("a", 0)\n        super().__init__(**kw)`,
    o: [
      `Each __init__ takes **kwargs, extracts its own args, and passes the rest up via super()`,
      `Each class calls all parent __init__ methods directly`,
      `Only the leaf class __init__ runs`,
      `All arguments are shared via a global dictionary`
    ],
    c: 0,
    e: `In cooperative multi-init, each class pops its own kwargs and forwards the rest via super().__init__(**kw).`,
    de: `The cooperative multi-init pattern solves the problem of passing different arguments to different classes in a multiple inheritance chain.

Key concepts:
• Each class accepts **kwargs in __init__
• Each class extracts (pops) only the arguments it needs
• Remaining kwargs are forwarded to super().__init__(**kw)
• object.__init__() receives empty kwargs at the end

How it works:
• class A: def __init__(self, **kw): self.a = kw.pop("a", 0); super().__init__(**kw)
• class B: def __init__(self, **kw): self.b = kw.pop("b", 0); super().__init__(**kw)
• class C(A, B): def __init__(self, **kw): super().__init__(**kw)
• C(a=1, b=2) → A pops a=1, passes b=2 to B → B pops b=2, passes {} to object

Example:
class A:
    def __init__(self, **kw):
        self.a = kw.pop("a", 0)
        super().__init__(**kw)
class B:
    def __init__(self, **kw):
        self.b = kw.pop("b", 0)
        super().__init__(**kw)
class C(A, B):
    pass
c = C(a=10, b=20)
c.a  # 10
c.b  # 20`
  }),

  // Q34
  (_i: number) => ({
    q: `In cooperative inheritance, each __init__ should:`,
    o: [
      `Pass remaining **kwargs to super().__init__()`,
      `Call every parent __init__ directly`,
      `Only initialize its own attributes and stop`,
      `Raise an error if unknown kwargs are present`
    ],
    c: 0,
    e: `Each class should pop its own kwargs and pass the remaining ones to super().__init__() for the next class in the MRO.`,
    de: `The key rule of cooperative inheritance is that each class in the MRO chain must cooperate by forwarding unhandled arguments.

Key concepts:
• Each class pops only the keyword arguments it needs
• All remaining kwargs are forwarded via super().__init__(**kw)
• This ensures every class in the MRO gets its required arguments
• object.__init__() at the end should receive no extra kwargs

How it works:
• Class pops its args: self.x = kw.pop("x", default)
• Forwards the rest: super().__init__(**kw)
• Next class in MRO does the same
• Eventually object.__init__() is reached with empty kwargs

Why this matters:
• Without this pattern, multiple inheritance __init__ conflicts are hard to resolve
• Each class only needs to know its own arguments
• Adding a new class to the hierarchy doesn't require modifying existing classes
• The MRO determines which class processes kwargs in which order`
  }),

  // Q35
  (_i: number) => ({
    q: `What is the output?\nclass A:\n    def f(self): return []\nclass B(A):\n    def f(self): return super().f() + ["B"]\nclass C(A):\n    def f(self): return super().f() + ["C"]\nclass D(B, C):\n    def f(self): return super().f() + ["D"]\nprint(D().f())`,
    o: [`['C', 'B', 'D']`, `['B', 'C', 'D']`, `['D', 'B', 'C']`, `['B', 'D', 'C']`],
    c: 0,
    e: `MRO: D→B→C→A. A returns [], C appends "C"→["C"], B appends "B"→["C","B"], D appends "D"→["C","B","D"].`,
    de: `This question traces the full super() call chain in a diamond, showing how each class contributes to the final list.

Key concepts:
• D's MRO: (D, B, C, A, object)
• super() in D goes to B, super() in B goes to C, super() in C goes to A
• The list is built from the bottom (A) up through each super() return

How it works step by step:
1. D().f() → D.f: return super().f() + ["D"] → calls B.f
2. B.f(): return super().f() + ["B"] → calls C.f (not A!)
3. C.f(): return super().f() + ["C"] → calls A.f
4. A.f(): return []
5. Back to C: [] + ["C"] = ["C"]
6. Back to B: ["C"] + ["B"] = ["C", "B"]
7. Back to D: ["C", "B"] + ["D"] = ["C", "B", "D"]

Example:
D().f()  # ['C', 'B', 'D']
# The result reflects the reverse traversal of the MRO (A→C→B→D)`
  }),

  // ===== MULTIPLE INHERITANCE PATTERNS (36–50) =====

  // Q36
  (_i: number) => ({
    q: `What is the output?\nclass Flyable:\n    def fly(self): return "flying"\nclass Swimmable:\n    def swim(self): return "swimming"\nclass Duck(Flyable, Swimmable): pass\nd = Duck()\nprint((d.fly(), d.swim()))`,
    o: [`('flying', 'swimming')`, `('swimming', 'flying')`, `Error`, `('flying', None)`],
    c: 0,
    e: `Duck inherits fly() from Flyable and swim() from Swimmable. Both methods are accessible.`,
    de: `Multiple inheritance allows a class to combine capabilities from multiple parents. When methods don't conflict, both are simply inherited.

Key concepts:
• Duck inherits from both Flyable and Swimmable
• Flyable provides fly(), Swimmable provides swim()
• No method name conflicts — both are available on Duck instances
• This is a common pattern for combining orthogonal behaviors

How it works:
• class Duck(Flyable, Swimmable) inherits all methods from both parents
• d.fly() → found in Flyable → returns "flying"
• d.swim() → found in Swimmable → returns "swimming"
• Duck's MRO: (Duck, Flyable, Swimmable, object)

Example:
d = Duck()
d.fly()   # "flying"
d.swim()  # "swimming"
isinstance(d, Flyable)    # True
isinstance(d, Swimmable)  # True`
  }),

  // Q37
  (_i: number) => ({
    q: `What is a mixin class in Python?`,
    o: [
      `A class that provides methods but isn't meant to be instantiated alone`,
      `A class that can only have static methods`,
      `A class that must inherit from ABC`,
      `A class with no methods at all`
    ],
    c: 0,
    e: `A mixin provides reusable methods to other classes via multiple inheritance, without being a standalone class.`,
    de: `Mixins are a design pattern in Python for adding functionality to classes without creating deep inheritance hierarchies.

Key concepts:
• A mixin provides specific functionality (logging, serialization, etc.)
• Mixins are not meant to be instantiated on their own
• They are "mixed in" via multiple inheritance
• Convention: name them with a Mixin suffix (e.g., LogMixin, JSONMixin)

How it works:
• Define a mixin class with useful methods
• Other classes inherit from the mixin alongside their main parent
• The mixin's methods become available on the child class
• Multiple mixins can be combined

Example:
class LogMixin:
    def log(self, msg):
        print(f"[LOG] {msg}")

class SerializeMixin:
    def to_dict(self):
        return self.__dict__

class User(LogMixin, SerializeMixin):
    def __init__(self, name):
        self.name = name

u = User("Alice")
u.log("created")    # [LOG] created
u.to_dict()         # {"name": "Alice"}`
  }),

  // Q38
  (_i: number) => ({
    q: `What is the output?\nclass LogMixin:\n    def log(self, msg): return f"LOG: {msg}"\nclass App(LogMixin): pass\nprint(App().log("hello"))`,
    o: [`LOG: hello`, `hello`, `Error`, `None`],
    c: 0,
    e: `App inherits log() from LogMixin. Calling log("hello") returns "LOG: hello".`,
    de: `This demonstrates the simplest mixin pattern: a class inherits a utility method from a mixin.

Key concepts:
• LogMixin provides a log() method
• App inherits from LogMixin, gaining the log() method
• App().log("hello") calls LogMixin.log(self, "hello")
• The f-string formats the message as "LOG: hello"

How it works:
• class App(LogMixin) inherits all of LogMixin's methods
• App().log("hello") → LogMixin.log(self, "hello")
• f"LOG: {msg}" → f"LOG: hello" → "LOG: hello"

Example:
app = App()
app.log("hello")    # "LOG: hello"
app.log("started")  # "LOG: started"`
  }),

  // Q39
  (_i: number) => ({
    q: `What is the output?\nimport json\nclass JSONMixin:\n    def to_json(self):\n        return json.dumps(self.__dict__)\nclass User(JSONMixin):\n    def __init__(self, name):\n        self.name = name\nprint(User("Alice").to_json())`,
    o: [`{"name": "Alice"}`, `{'name': 'Alice'}`, `Error`, `None`],
    c: 0,
    e: `json.dumps(self.__dict__) serializes {"name": "Alice"} to the JSON string '{"name": "Alice"}'.`,
    de: `The JSONMixin provides serialization capabilities to any class that uses it. json.dumps produces a JSON-formatted string with double quotes.

Key concepts:
• self.__dict__ returns the instance's attribute dictionary: {"name": "Alice"}
• json.dumps() converts a Python dict to a JSON string
• JSON always uses double quotes for strings
• The mixin can be added to any class to provide to_json()

How it works:
• User("Alice") creates an instance with self.name = "Alice"
• self.__dict__ = {"name": "Alice"}
• json.dumps({"name": "Alice"}) = '{"name": "Alice"}'
• Note: JSON uses double quotes, Python repr uses single quotes

Example:
u = User("Alice")
u.__dict__     # {'name': 'Alice'}
u.to_json()    # '{"name": "Alice"}'  (JSON string with double quotes)`
  }),

  // Q40
  (_i: number) => ({
    q: `Where should mixins typically be placed in the inheritance list?`,
    o: [
      `To the left (before the main parent class)`,
      `To the right (after the main parent class)`,
      `It doesn't matter — order is irrelevant`,
      `Mixins must be the only parent`
    ],
    c: 0,
    e: `Mixins are placed to the left so their methods take precedence over the main parent's methods in the MRO.`,
    de: `By convention and for correctness, mixins are listed before the main parent class in the inheritance list.

Key concepts:
• class MyClass(MixinA, MixinB, MainParent) — mixins first
• Left-to-right order determines MRO priority
• Mixin methods override main parent methods if names conflict
• This ensures mixin behavior takes precedence

How it works:
• MRO processes bases left to right
• class C(Mixin, Base) → MRO: C, Mixin, Base, object
• If both Mixin and Base define method(), Mixin's version is used
• Placing Mixin first gives it priority

Example:
class LogMixin:
    def save(self):
        print("logging save")
        return super().save()

class Model:
    def save(self):
        print("saving to DB")

class User(LogMixin, Model):
    pass

User().save()
# Output: "logging save" then "saving to DB"
# LogMixin.save runs first, then calls super().save() → Model.save`
  }),

  // Q41
  (_i: number) => ({
    q: `What does this mixin add to any class that uses it?\nclass TimestampMixin:\n    def stamp(self):\n        from datetime import datetime\n        return datetime.now()`,
    o: [
      `A method that returns the current date and time`,
      `A class attribute storing creation time`,
      `An __init__ that records the timestamp`,
      `A static method for time formatting`
    ],
    c: 0,
    e: `TimestampMixin adds a stamp() method that returns the current datetime when called.`,
    de: `This mixin provides timestamp functionality to any class. Each call to stamp() returns the current datetime.

Key concepts:
• stamp() is an instance method added by the mixin
• It imports datetime and returns datetime.now()
• The timestamp is generated at call time, not at object creation
• Any class inheriting TimestampMixin gets this method

How it works:
• class MyClass(TimestampMixin): pass
• MyClass().stamp() calls TimestampMixin.stamp(self)
• datetime.now() returns the current date and time
• Each call returns a new timestamp

Example:
class Event(TimestampMixin):
    def __init__(self, name):
        self.name = name

e = Event("meeting")
e.stamp()  # datetime.datetime(2024, 1, 15, 10, 30, 45, ...)
# Returns current datetime each time stamp() is called`
  }),

  // Q42
  (_i: number) => ({
    q: `Can a class inherit from multiple parents that define the same method name?`,
    o: [
      `Yes, the MRO determines which one is used`,
      `No, Python raises a NameError`,
      `No, Python raises a TypeError`,
      `Yes, but both methods are called automatically`
    ],
    c: 0,
    e: `Python allows conflicting method names. The MRO determines which version is found first during lookup.`,
    de: `Unlike some languages, Python doesn't raise an error when multiple parents define the same method. The MRO simply determines which one is used.

Key concepts:
• Multiple parents can have methods with the same name
• Python doesn't raise any error — it uses MRO to resolve the conflict
• The first class in the MRO that defines the method wins
• You can still access shadowed methods explicitly (e.g., ParentB.method(self))

How it works:
• class C(A, B) where both A and B define f()
• C's MRO: (C, A, B, object)
• C().f() → A.f() is found first (A comes before B in MRO)
• B.f() is shadowed but still accessible via B.f(instance)

Example:
class A:
    def greet(self): return "Hello from A"
class B:
    def greet(self): return "Hello from B"
class C(A, B): pass

C().greet()        # "Hello from A" — A is first in MRO
B.greet(C())       # "Hello from B" — explicit call to B's version`
  }),

  // Q43
  (_i: number) => ({
    q: `What is the output?\nclass A:\n    x = 1\nclass B:\n    x = 2\nclass C(A, B): pass\nprint(C.x)`,
    o: [`1`, `2`, `Error`, `None`],
    c: 0,
    e: `C(A, B) — A is first in the bases, so A.x = 1 is found first in the MRO.`,
    de: `When two unrelated parents both define the same attribute, the order of bases determines which one is used.

Key concepts:
• C inherits from A and B, both of which define x
• C's MRO: (C, A, B, object)
• C.x → C has no x → A has x = 1 → found! Return 1
• B's x = 2 is shadowed

How it works:
• Attribute lookup follows the MRO: C → A → B → object
• A is checked before B because A is listed first in C(A, B)
• A.x = 1 is found, so the search stops
• B.x = 2 is never reached

Example:
C.x  # 1 — from A (first in bases)
# If you change to class C(B, A): pass
# Then C.x would be 2 — from B (now first)`
  }),

  // Q44
  (_i: number) => ({
    q: `What is the output?\nclass A:\n    x = 1\nclass B:\n    x = 2\nclass C(B, A): pass\nprint(C.x)`,
    o: [`2`, `1`, `Error`, `None`],
    c: 0,
    e: `C(B, A) — B is now first in the bases, so B.x = 2 is found first.`,
    de: `Swapping the base order from C(A, B) to C(B, A) changes which parent's attribute is found first.

Key concepts:
• C's bases are now (B, A) instead of (A, B)
• C's MRO: (C, B, A, object)
• C.x → C has no x → B has x = 2 → found! Return 2
• A's x = 1 is shadowed this time

How it works:
• The order of bases directly controls the MRO
• C(B, A) means B is searched before A
• B.x = 2 is the first match

Example:
class C(B, A): pass
C.x  # 2 — from B
# vs
class C(A, B): pass
C.x  # 1 — from A
# The order of bases is a deliberate design choice`
  }),

  // Q45
  (_i: number) => ({
    q: `Composition represents a _____ relationship, while inheritance represents a _____ relationship.`,
    o: [`has-a / is-a`, `is-a / has-a`, `uses-a / has-a`, `has-a / uses-a`],
    c: 0,
    e: `Composition = "has-a" (a Car has an Engine). Inheritance = "is-a" (a Car is a Vehicle).`,
    de: `These two relationships are fundamental OOP concepts that determine how classes relate to each other.

Key concepts:
• Inheritance ("is-a"): Car is a Vehicle — Car inherits Vehicle's interface and behavior
• Composition ("has-a"): Car has an Engine — Car contains an Engine instance
• Inheritance creates tight coupling between classes
• Composition creates loose coupling and is often preferred

How it works:
• Inheritance: class Car(Vehicle) — Car IS a Vehicle
• Composition: class Car: def __init__(self): self.engine = Engine() — Car HAS an Engine
• With inheritance, changing Vehicle affects Car
• With composition, Engine can be changed independently

Example:
# Inheritance (is-a):
class Vehicle:
    def start(self): return "starting"
class Car(Vehicle): pass  # Car IS a Vehicle

# Composition (has-a):
class Engine:
    def start(self): return "vroom"
class Car:
    def __init__(self):
        self.engine = Engine()  # Car HAS an Engine`
  }),

  // Q46
  (_i: number) => ({
    q: `When should you prefer composition over inheritance?`,
    o: [
      `When you want flexibility and loose coupling`,
      `When classes share the same interface`,
      `When you need polymorphism`,
      `When the child truly "is-a" type of the parent`
    ],
    c: 0,
    e: `Composition is preferred when you want flexibility, loose coupling, and the ability to swap implementations.`,
    de: `"Favor composition over inheritance" is a well-known design principle. Composition provides more flexibility at the cost of slightly more code.

Key concepts:
• Composition allows swapping components at runtime
• Inheritance creates a rigid, tightly coupled hierarchy
• Composition makes testing easier (inject mock components)
• Inheritance is appropriate when there's a true "is-a" relationship

When to use composition:
• When you want to reuse behavior without committing to a type hierarchy
• When the relationship is "has-a" or "uses-a"
• When you need to change behavior at runtime
• When you want to combine behaviors from multiple sources without MRO complexity

When to use inheritance:
• When the relationship is genuinely "is-a" (Dog IS an Animal)
• When you need polymorphism (treat derived types as base type)
• When you want to share interface and implementation

Example:
# Composition — flexible:
class Logger:
    def log(self, msg): print(msg)
class App:
    def __init__(self, logger=None):
        self.logger = logger or Logger()  # Can swap loggers!`
  }),

  // Q47
  (_i: number) => ({
    q: `What design pattern does this code use?\nclass Engine:\n    def start(self): return "vroom"\nclass Car:\n    def __init__(self):\n        self.engine = Engine()\n    def start(self):\n        return self.engine.start()`,
    o: [`Composition`, `Inheritance`, `Decorator pattern`, `Singleton pattern`],
    c: 0,
    e: `Car contains an Engine instance and delegates start() to it — this is composition ("has-a").`,
    de: `This is a textbook example of composition. Car doesn't inherit from Engine; it contains an Engine and delegates work to it.

Key concepts:
• Car "has-a" Engine (composition)
• Car.start() delegates to self.engine.start()
• Car doesn't inherit Engine's interface — it wraps it
• The Engine can be replaced with a different implementation

How it works:
• Car.__init__ creates an Engine instance: self.engine = Engine()
• Car.start() calls self.engine.start() and returns the result
• Car is not a subclass of Engine — it's a wrapper/container
• This provides flexibility: you could pass a different engine type

Example:
class ElectricEngine:
    def start(self): return "whirr"

class Car:
    def __init__(self, engine):
        self.engine = engine
    def start(self):
        return self.engine.start()

Car(Engine()).start()          # "vroom"
Car(ElectricEngine()).start()  # "whirr"  — swap at runtime!`
  }),

  // Q48
  (_i: number) => ({
    q: `What design pattern does this code use?\nclass Vehicle:\n    def start(self): return "starting"\nclass Car(Vehicle): pass`,
    o: [`Inheritance`, `Composition`, `Delegation`, `Factory pattern`],
    c: 0,
    e: `Car inherits from Vehicle — this is inheritance ("is-a"). Car IS a Vehicle.`,
    de: `This is the simplest form of inheritance. Car is a Vehicle and inherits all of Vehicle's methods.

Key concepts:
• Car(Vehicle) means Car IS a Vehicle
• Car inherits start() from Vehicle without redefining it
• Car instances are also Vehicle instances
• isinstance(Car(), Vehicle) returns True

How it works:
• class Car(Vehicle): pass — Car inherits everything from Vehicle
• Car().start() → Vehicle.start(self) → "starting"
• No methods are overridden or added
• Car is a specialization of Vehicle

Example:
c = Car()
c.start()                # "starting" — inherited from Vehicle
isinstance(c, Vehicle)   # True — Car IS a Vehicle
isinstance(c, Car)       # True
Car.__mro__              # (Car, Vehicle, object)`
  }),

  // Q49
  (_i: number) => ({
    q: `What is the output?\nclass A: pass\nclass B: pass\nclass C: pass\nclass D(A, B, C): pass\nprint(len(D.__mro__))`,
    o: [`5`, `4`, `3`, `6`],
    c: 0,
    e: `D's MRO is (D, A, B, C, object) — five classes total.`,
    de: `When inheriting from three unrelated parents, the MRO includes the class itself, all three parents in order, and object.

Key concepts:
• D(A, B, C) inherits from three parents
• D's MRO: (D, A, B, C, object) — 5 entries
• Parents appear in the order listed in the class definition
• object appears once at the end

How it works:
• D is first in its own MRO
• A, B, C follow in the order they appear in D(A, B, C)
• object is the ultimate base, appearing last
• len(D.__mro__) = 5

Example:
D.__mro__
# (<class 'D'>, <class 'A'>, <class 'B'>, <class 'C'>, <class 'object'>)
len(D.__mro__)  # 5`
  }),

  // Q50
  (_i: number) => ({
    q: `Can you inherit from a built-in type like list?\nclass MyList(list): pass\nml = MyList([1, 2, 3])\nprint(isinstance(ml, list))`,
    o: [`True`, `False`, `Error`, `TypeError`],
    c: 0,
    e: `You can inherit from built-in types. MyList is a subclass of list, so isinstance returns True.`,
    de: `Python allows subclassing built-in types like list, dict, str, int, etc. The subclass inherits all the built-in behavior.

Key concepts:
• class MyList(list) creates a subclass of the built-in list type
• MyList instances are also list instances
• All list methods (append, pop, sort, etc.) are inherited
• You can override or add methods to customize behavior

How it works:
• MyList(list) inherits from list
• MyList([1, 2, 3]) creates a MyList initialized with [1, 2, 3]
• isinstance(ml, list) returns True — MyList IS a list
• MyList.__mro__ = (MyList, list, object)

Example:
class MyList(list):
    def first(self):
        return self[0] if self else None

ml = MyList([1, 2, 3])
ml.first()            # 1
ml.append(4)          # Works — inherited from list
isinstance(ml, list)  # True
len(ml)               # 4`
  }),
];
