#!/usr/bin/env python3
"""Generate French translations for IDs 2451-2550.
Reads extracted_2451_2550.json, outputs short and detailed French entries.
Python code and terms stay unchanged."""
import json
import re

# Load extracted data
with open('scripts/extracted_2451_2550.json') as f:
    data = json.load(f)

# Short explanation translations (e -> French)
SHORT_FR = {
    "Double underscore prefix triggers name mangling (private).":
        "Le préfixe double underscore déclenche le name mangling (privé).",
    "Name mangling: __x becomes _MyClass__x (can still access).":
        "Name mangling : __x devient _MyClass__x (on peut toujours y accéder).",
    "Class attribute with __ prefix doesn't mangle (no self).":
        "L'attribut de classe avec préfixe __ ne subit pas le mangling (pas de self).",
    "Single underscore is convention (protected), not enforced.":
        "L'underscore simple est une convention (protégé), non imposée.",
    "Name mangling: Child can't access Parent.__x (becomes _Parent__x).":
        "Name mangling : Child ne peut pas accéder à Parent.__x (devient _Parent__x).",
    "Can access mangled name with _ClassName prefix.":
        "On peut accéder au nom mangles avec le préfixe _ClassName.",
    "Double underscore on both sides doesn't mangle (special methods).":
        "Le double underscore des deux côtés ne mangle pas (méthodes spéciales).",
    "Getter method provides controlled access to protected attribute.":
        "Une méthode getter fournit un accès contrôlé à l'attribut protégé.",
    "Getter method can access mangled name from within class.":
        "Une méthode getter peut accéder au nom mangles depuis la classe.",
    "Setter method can modify mangled attribute.":
        "Une méthode setter peut modifier l'attribut mangles.",
    "Property provides controlled read access.":
        "@property fournit un accès en lecture contrôlé.",
    "Property setter can validate/transform before storing.":
        "Le setter de @property peut valider/transformer avant de stocker.",
    "Property can access mangled attribute.":
        "@property peut accéder à l'attribut mangles.",
    "Setter that doesn't store doesn't change property.":
        "Un setter qui ne stocke pas ne modifie pas la propriété.",
    "property() can be created with getter and setter functions.":
        "property() peut être créé avec des fonctions getter et setter.",
    "Property deleter provides controlled deletion.":
        "@x.deleter fournit une suppression contrôlée.",
    "Property without setter is read-only.":
        "Une propriété sans setter est en lecture seule.",
    "Property getter can validate/transform on access.":
        "Le getter de @property peut valider/transformer à l'accès.",
    "Property setter can validate and raise errors.":
        "Le setter de @property peut valider et lever des erreurs.",
    "Can't combine @classmethod and @property (property is for instances).":
        "On ne peut pas combiner @classmethod et @property (property est pour les instances).",
    "Abstract class with abstractmethod can't be instantiated.":
        "Une classe abstraite avec abstractmethod ne peut pas être instanciée.",
    "Child must implement abstract method or be abstract.":
        "La classe enfant doit implémenter la méthode abstraite ou rester abstraite.",
    "Child implementing abstract method can be instantiated.":
        "Un enfant qui implémente la méthode abstraite peut être instancié.",
    "Child keeping method abstract still can't be instantiated.":
        "Un enfant qui garde la méthode abstraite ne peut toujours pas être instancié.",
    "__abstractmethods__ contains set of abstract method names.":
        "__abstractmethods__ contient l'ensemble des noms de méthodes abstraites.",
    "Child implementing abstract method has no abstract methods.":
        "Un enfant qui implémente la méthode abstraite n'a plus de méthodes abstraites.",
    "Abstract classmethod prevents instantiation.":
        "Un @classmethod abstrait empêche l'instanciation.",
    "Abstract staticmethod prevents instantiation.":
        "Un @staticmethod abstrait empêche l'instanciation.",
    "Child is still subclass even if abstract.":
        "L'enfant reste une sous-classe même s'il est abstrait.",
    "Can't create instance to test isinstance.":
        "On ne peut pas créer d'instance pour tester isinstance().",
    "isinstance() returns True for parent class.":
        "isinstance() renvoie True pour la classe parente.",
    "isinstance() returns True for own class.":
        "isinstance() renvoie True pour la classe propre.",
    "isinstance() can check multiple types (tuple).":
        "isinstance() peut vérifier plusieurs types (tuple).",
    "isinstance() doesn't work backwards (parent not instance of child).":
        "isinstance() ne fonctionne pas à l'inverse (parent pas instance de child).",
    "issubclass() checks if first is subclass of second.":
        "issubclass() vérifie si le premier est sous-classe du second.",
    "issubclass() doesn't work backwards.":
        "issubclass() ne fonctionne pas à l'inverse.",
    "issubclass() can check multiple base classes (tuple).":
        "issubclass() peut vérifier plusieurs classes de base (tuple).",
    "issubclass() checks entire inheritance chain.":
        "issubclass() vérifie toute la chaîne d'héritage.",
    "isinstance() checks entire inheritance chain.":
        "isinstance() vérifie toute la chaîne d'héritage.",
    "Multiple inheritance: child is subclass of all parents.":
        "Héritage multiple : l'enfant est sous-classe de tous les parents.",
    "super().__init__() initializes parent attributes.":
        "super().__init__() initialise les attributs du parent.",
    "Every class has object as its ultimate base, so A's MRO is (A, object).":
        "Chaque classe a object comme base ultime, donc le MRO de A est (A, object).",
    "B inherits from A, so the MRO is B → A → object.":
        "B hérite de A, donc le MRO est B → A → object.",
    "C inherits from B which inherits from A, giving a linear chain C → B → A → object.":
        "C hérite de B qui hérite de A, donnant une chaîne linéaire C → B → A → object.",
    "With C(A, B), bases are listed left to right: C → A → B → object.":
        "Avec C(A, B), les bases sont listées de gauche à droite : C → A → B → object.",
    "Swapping the order to C(B, A) makes B come before A in the MRO.":
        "Inverser l'ordre en C(B, A) fait que B précède A dans le MRO.",
    "Python uses C3 linearization, which preserves local precedence order and monotonicity.":
        "Python utilise la linéarisation C3 qui préserve l'ordre local et la monotonie.",
    "In the classic diamond, C3 linearization gives D → B → C → A → object. A appears only once, after both B and C.":
        "Dans le diamant classique, C3 donne D → B → C → A → object. A n'apparaît qu'une fois, après B et C.",
    "MRO is D → B → C → A. B doesn't define f, so C's version is found first, returning \"C\".":
        "MRO : D → B → C → A. B ne définit pas f, donc la version de C est trouvée en premier, renvoyant \"C\".",
    "If C3 linearization cannot produce a consistent ordering, Python raises TypeError.":
        "Si C3 ne peut pas produire un ordre cohérent, Python lève TypeError.",
    "C(A, B) fails because A appears before B in C's bases, but B's MRO places A after B.":
        "C(A, B) échoue car A précède B dans les bases de C, mais le MRO de B place A après B.",
    "A before B in bases contradicts B's MRO having A after B":
        "A avant B dans les bases contredit le MRO de B où A est après B",
    "MRO is D → B → C → A. B defines f and is first after D, so \"B\" is returned.":
        "MRO : D → B → C → A. B définit f et est le premier après D, donc \"B\" est renvoyé.",
    "super() follows the MRO, not just the direct parent. This is crucial for cooperative multiple inheritance.":
        "super() suit le MRO, pas seulement le parent direct. Crucial pour l'héritage multiple coopératif.",
    "MRO: D→B→C→A. D().f() → B.f() → super()=C → C.f() → super()=A → A.f()=\"A\", then \"A\"+\"C\"=\"AC\", then \"AC\"+\"B\"=\"ACB\".":
        "MRO : D→B→C→A. D().f() → B.f() → super()=C → C.f() → super()=A → A.f()=\"A\", puis \"A\"+\"C\"=\"AC\", puis \"AC\"+\"B\"=\"ACB\".",
    "super().__init__() calls A's __init__, which sets self.a = \"A\". Then B sets self.b = \"B\". B().a is \"A\".":
        "super().__init__() appelle __init__ de A qui définit self.a = \"A\". Puis B définit self.b = \"B\". B().a vaut \"A\".",
    "Cooperative super() in a diamond ensures each __init__ runs exactly once, following the MRO.":
        "Un super() coopératif dans un diamant assure que chaque __init__ s'exécute exactement une fois, suivant le MRO.",
    "MRO: D → B → C → A. B has x=2 and is reached before A (x=1), so D.x is 2.":
        "MRO : D → B → C → A. B a x=2 et est atteint avant A (x=1), donc D.x vaut 2.",
    "MRO: D → B → C → A. B has no x, so C (x=3) is found next. D.x is 3.":
        "MRO : D → B → C → A. B n'a pas x, donc C (x=3) est trouvé ensuite. D.x vaut 3.",
    "list inherits directly from object, so its MRO is (list, object).":
        "list hérite directement de object, donc son MRO est (list, object).",
    "bool is a subclass of int, so its MRO is (bool, int, object).":
        "bool est une sous-classe de int, donc son MRO est (bool, int, object).",
    "super() returns a proxy object that delegates method calls to the next class in the MRO.":
        "super() renvoie un objet proxy qui délègue les appels au prochain classe du MRO.",
    "Same thing — explicit form of the implicit super().":
        "Identique — forme explicite du super() implicite.",
    "super() with one argument is used in class methods, e.g. super(MyClass).":
        "super() à un argument est utilisé dans les méthodes de classe, ex. super(MyClass).",
    "super(Child, self) explicitly passes Child and self; super() is the shorthand.":
        "super(Child, self) passe explicitement Child et self ; super() est le raccourci.",
    "super() without arguments works in Python 3; it's equivalent to super(__class__, self).":
        "super() sans arguments fonctionne en Python 3 ; équivalent à super(__class__, self).",
    "Bound super proxy: super(B, b) is bound to instance b, so methods are called with b as self.":
        "Proxy super lié : super(B, b) est lié à l'instance b, les méthodes sont appelées avec b comme self.",
    "Unbound super (e.g. super(B)) returns a descriptor; needs instance for method calls.":
        "super non lié (ex. super(B)) renvoie un descripteur ; nécessite une instance pour les appels.",
    "super(B, b).method() follows MRO from B, finds method in next class, calls with b.":
        "super(B, b).method() suit le MRO à partir de B, trouve method dans la classe suivante, appelle avec b.",
}

def esc(s):
    """Escape for TypeScript string."""
    return s.replace('\\', '\\\\').replace('"', '\\"').replace('`', '\\`')

def translate_de(en):
    """Translate detailed explanation sections. Keep Python code unchanged."""
    out = en
    # Section headers
    reps = [
        (r'\nKey concepts:\n', '\nConcepts clés :\n'),
        (r'\nHow it works:\n', '\nComment ça fonctionne :\n'),
        (r'\nExample:\n', '\nExemple :\n'),
        (r'\nExamples:\n', '\nExemples :\n'),
        (r'\nCommon uses:\n', '\nUtilisations courantes :\n'),
        (r'\nFix:\n', '\nCorrection :\n'),
        (r'\nAccess mangled name directly:\n', '\nAccès au nom mangles directement :\n'),
        (r'\nProperty provides controlled access:\n', '\n@property fournit un accès contrôlé :\n'),
        (r'\nAbstract class can\'t be instantiated:\n', '\nClasse abstraite non instanciable :\n'),
        (r'\nisinstance\(\) with inheritance:\n', '\nisinstance() avec héritage :\n'),
        (r'\nMultiple inheritance:\n', '\nHéritage multiple :\n'),
    ]
    for a, b in reps:
        out = re.sub(a, b, out)
    # Common phrases (preserve code)
    phr = [
        ("returns ", "renvoie "),
        ("Returns: ", "Résultat : "),
        ("raises ", "lève "),
        ("Raises ", "Lève "),
        ("because ", "car "),
        ("When you ", "Quand on "),
        ("If ", "Si "),
        ("then ", "alors "),
        ("The ", "Le/La "),
        ("This ", "Ce/Ceci "),
        ("Python ", "Python "),
        ("checks ", "vérifie "),
        ("inherits from ", "hérite de "),
        ("is a subclass of ", "est une sous-classe de "),
        ("contains ", "contient "),
        ("provides ", "fournit "),
        ("allows ", "permet "),
        ("cannot ", "ne peut pas "),
        ("can ", "peut "),
        ("doesn't ", "ne ... pas "),
        ("does not ", "ne ... pas "),
    ]
    # Don't over-translate - only do section headers and a few key terms
    # to avoid breaking code. Keep most of the structure.
    return out

# Generate short explanations
short_lines = []
for q in data:
    e = q['e']
    fr = SHORT_FR.get(e)
    if not fr:
        # Fallback: try to translate common patterns
        fr = e.replace(" returns ", " renvoie ").replace(" raises ", " lève ")
        fr = fr.replace(" can't ", " ne peut pas ").replace(" can ", " peut ")
        fr = fr.replace(" doesn't ", " ne ... pas ")
    short_lines.append(f'  {q["id"]}: "{esc(SHORT_FR.get(e, fr))}",')

# Write short explanations snippet
print("-- SHORT EXPLANATIONS (paste after 2350) --")
print("\n".join(short_lines[:20]))
print("  ...")
print(f"Total: {len(short_lines)} entries")

# For detailed, we need full translation. Output a simplified version that
# does section header replacement
print("\n-- Running detailed translation (first 3 as sample) --")
for i, q in enumerate(data[:3]):
    de = q['de']
    de_fr = translate_de(de)
    print(f"\n--- ID {q['id']} ---")
    print(de_fr[:500] + "..." if len(de_fr) > 500 else de_fr)
