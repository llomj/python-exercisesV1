#!/usr/bin/env python3
"""Generate French detailed explanations for IDs 2351-2450."""
import json
import re
import sys

def escape_ts(s):
    return s.replace('\\', '\\\\').replace('${', '\\${').replace('`', '\\`')

HEADERS = {
    "Key concepts:": "Concepts clés :",
    "Key concept:": "Concept clé :",
    "How it works:": "Comment ça fonctionne :",
    "How it works step by step:": "Comment ça fonctionne étape par étape :",
    "Example:": "Exemple :",
    "Examples:": "Exemples :",
    "Common uses:": "Usages courants :",
    "Edge cases:": "Cas limites :",
}

# Phrase translations for this batch (descriptors, ABCs, metaclass, type hints, inheritance)
PHRASES = [
    ("A descriptor is an object attribute with binding behavior", "Un descripteur est un attribut d'objet avec un comportement de liaison"),
    ("— one whose attribute access has been overridden by methods in the descriptor protocol.", "— dont l'accès aux attributs a été remplacé par des méthodes du protocole descripteur."),
    ("A descriptor defines one or more of:", "Un descripteur définit un ou plusieurs de :"),
    ("Descriptors are how Python implements properties, methods, static methods, class methods", "Les descripteurs permettent à Python d'implémenter properties, méthodes, staticmethod, classmethod"),
    ("They provide a way to customize attribute access on classes", "Ils permettent de personnaliser l'accès aux attributs sur les classes"),
    ("Descriptors must be defined as class attributes, not instance attributes", "Les descripteurs doivent être définis comme attributs de classe, pas d'instance"),
    ("When you access obj.attr, Python checks if the class attribute is a descriptor", "Quand vous accédez à obj.attr, Python vérifie si l'attribut de classe est un descripteur"),
    ("If it has __get__, Python calls descriptor.__get__(obj, type(obj))", "S'il a __get__, Python appelle descriptor.__get__(obj, type(obj))"),
    ("This allows custom logic every time an attribute is accessed", "Cela permet une logique personnalisée à chaque accès d'attribut"),
    ("The descriptor protocol defines three optional methods that control attribute access.", "Le protocole descripteur définit trois méthodes optionnelles qui contrôlent l'accès aux attributs."),
    ("— called to get the attribute value", "— appelé pour obtenir la valeur de l'attribut"),
    ("— called to set the attribute value", "— appelé pour définir la valeur de l'attribut"),
    ("— called to delete the attribute", "— appelé pour supprimer l'attribut"),
    ("A descriptor only needs to define at least one of these methods", "Un descripteur doit définir au moins une de ces méthodes"),
    ("obj is the instance the descriptor is accessed through (or None if accessed via class)", "obj est l'instance à travers laquelle le descripteur est accédé (ou None si accédé via la classe)"),
    ("objtype is the class that owns the descriptor", "objtype est la classe qui possède le descripteur"),
    ("self is the descriptor instance itself", "self est l'instance du descripteur elle-même"),
    ("Data descriptors are descriptors that define __set__ and/or __delete__ in addition to __get__.","Les descripteurs de données définissent __set__ et/ou __delete__ en plus de __get__."),
    ("A data descriptor defines __set__ or __delete__ (usually along with __get__)", "Un descripteur de données définit __set__ ou __delete__ (généralement avec __get__)"),
    ("Data descriptors take priority over instance __dict__", "Les descripteurs de données ont la priorité sur l'instance __dict__"),
    ("@property creates a data descriptor (it defines __get__, __set__, __delete__)", "@property crée un descripteur de données (il définit __get__, __set__, __delete__)"),
    ("The key distinction is having __set__ or __delete__", "La distinction clé est d'avoir __set__ ou __delete__"),
    ("When Python looks up obj.attr, it checks the class for data descriptors FIRST", "Quand Python cherche obj.attr, il vérifie d'abord les descripteurs de données de la classe"),
    ("If found, the descriptor's __get__ is called, even if obj.__dict__ has 'attr'", "Si trouvé, le __get__ du descripteur est appelé, même si obj.__dict__ a 'attr'"),
    ("This means data descriptors cannot be overridden by instance attributes", "Cela signifie que les descripteurs de données ne peuvent pas être surchargés par des attributs d'instance"),
    ("Non-data descriptors define only __get__ — they do not have __set__ or __delete__.","Les descripteurs non-données définissent uniquement __get__ — ils n'ont pas __set__ ou __delete__."),
    ("Instance __dict__ takes priority over non-data descriptors", "L'instance __dict__ a la priorité sur les descripteurs non-données"),
    ("Functions are non-data descriptors — they implement __get__ to become bound methods", "Les fonctions sont des descripteurs non-données — elles implémentent __get__ pour devenir des méthodes liées"),
    ("@staticmethod and @classmethod are non-data descriptors", "@staticmethod et @classmethod sont des descripteurs non-données"),
    ("When Python looks up obj.attr, it checks obj.__dict__ FIRST", "Quand Python cherche obj.attr, il vérifie obj.__dict__ EN PREMIER"),
    ("Only if attr is not in obj.__dict__ does it fall through to the non-data descriptor", "Seulement si attr n'est pas dans obj.__dict__ il passe au descripteur non-données"),
    ("This means you can shadow a non-data descriptor by setting an instance attribute", "Cela signifie que vous pouvez masquer un descripteur non-données en définissant un attribut d'instance"),
    ("Data descriptors take priority over instance __dict__ entries in Python's attribute lookup chain.", "Les descripteurs de données ont la priorité sur les entrées __dict__ d'instance dans la chaîne de recherche d'attributs de Python."),
    ("Python's attribute lookup order: data descriptors → instance __dict__ → non-data descriptors → class __dict__", "Ordre de recherche d'attributs de Python : descripteurs de données → instance __dict__ → descripteurs non-données → class __dict__"),
    ("Data descriptors (with __set__ or __delete__) are checked FIRST", "Les descripteurs de données (avec __set__ ou __delete__) sont vérifiés EN PREMIER"),
    ("Even if obj.__dict__ contains the same key, the data descriptor wins", "Même si obj.__dict__ contient la même clé, le descripteur de données gagne"),
    ("This is why @property can intercept attribute access", "C'est pourquoi @property peut intercepter l'accès aux attributs"),
    ("obj.attr triggers type.__getattribute__(obj, 'attr')", "obj.attr déclenche type.__getattribute__(obj, 'attr')"),
    ("Step 1: Check type(obj).__mro__ for data descriptors → if found, call __get__", "Étape 1 : Vérifier type(obj).__mro__ pour les descripteurs de données → si trouvé, appeler __get__"),
    ("Step 2: Check obj.__dict__ → if found, return value", "Étape 2 : Vérifier obj.__dict__ → si trouvé, retourner la valeur"),
    ("Step 3: Check type(obj).__mro__ for non-data descriptors → if found, call __get__", "Étape 3 : Vérifier type(obj).__mro__ pour les descripteurs non-données → si trouvé, appeler __get__"),
    ("Non-data descriptors are only consulted when the attribute is not found in the instance __dict__.", "Les descripteurs non-données ne sont consultés que quand l'attribut n'est pas trouvé dans l'instance __dict__."),
    ("Instance __dict__ is checked BEFORE non-data descriptors", "L'instance __dict__ est vérifiée AVANT les descripteurs non-données"),
    ("You can override a non-data descriptor by adding an entry to instance __dict__", "Vous pouvez surcharger un descripteur non-données en ajoutant une entrée à instance __dict__"),
    ("This is why you can cache a method result by assigning to self.method_name", "C'est pourquoi vous pouvez mettre en cache un résultat de méthode en assignant à self.method_name"),
    ("Functions (methods) are non-data descriptors — you can shadow them per-instance", "Les fonctions (méthodes) sont des descripteurs non-données — vous pouvez les masquer par instance"),
    ("@property creates a data descriptor with __get__, __set__, and __delete__ methods.", "@property crée un descripteur de données avec les méthodes __get__, __set__ et __delete__."),
    ("property objects define all three descriptor methods", "Les objets property définissent les trois méthodes descripteur"),
    ("Even without a setter, property defines __set__ (which raises AttributeError)", "Même sans setter, property définit __set__ (qui lève AttributeError)"),
    ("This ensures property always intercepts attribute access — it cannot be bypassed", "Cela garantit que property intercepte toujours l'accès aux attributs — il ne peut pas être contourné"),
    ("Because it's a data descriptor, it has priority over instance __dict__", "Comme c'est un descripteur de données, il a la priorité sur l'instance __dict__"),
    ("@staticmethod creates a non-data descriptor that returns the original function unchanged.", "@staticmethod crée un descripteur non-données qui retourne la fonction originale inchangée."),
    ("staticmethod objects only implement __get__", "Les objets staticmethod n'implémentent que __get__"),
    ("__get__ returns the wrapped function without binding it to anything", "__get__ retourne la fonction encapsulée sans la lier à quoi que ce soit"),
    ("No self or cls parameter is passed automatically", "Aucun paramètre self ou cls n'est passé automatiquement"),
    ("Because it's non-data, it can be shadowed by instance attributes", "Comme c'est non-données, il peut être masqué par des attributs d'instance"),
    ("@classmethod creates a non-data descriptor that binds the first argument to the class.", "@classmethod crée un descripteur non-données qui lie le premier argument à la classe."),
    ("classmethod objects only implement __get__", "Les objets classmethod n'implémentent que __get__"),
    ("__get__ creates a bound method where the first argument is the class (cls)", "__get__ crée une méthode liée où le premier argument est la classe (cls)"),
    ("Works correctly with inheritance — cls is the actual class, not necessarily the defining class", "Fonctionne correctement avec l'héritage — cls est la classe réelle, pas nécessairement la classe définissante"),
    ("Abstract classes with unimplemented abstract methods cannot be instantiated.", "Les classes abstraites avec des méthodes abstraites non implémentées ne peuvent pas être instanciées."),
    ("ABC is the Abstract Base Class helper from the abc module", "ABC est l'aide Classe de Base Abstraite du module abc"),
    ("@abstractmethod marks a method that MUST be implemented by subclasses", "@abstractmethod marque une méthode qui DOIT être implémentée par les sous-classes"),
    ("Attempting to instantiate an abstract class raises TypeError", "Tenter d'instancier une classe abstraite lève TypeError"),
    ("The error message tells you which abstract methods are missing", "Le message d'erreur indique quelles méthodes abstraites manquent"),
    ("ABC stands for Abstract Base Class", "ABC signifie Abstract Base Class (Classe de Base Abstraite)"),
    ("collections.abc.Iterable is an abstract base class for objects that implement __iter__.", "collections.abc.Iterable est une classe de base abstraite pour les objets qui implémentent __iter__."),
    ("A metaclass is a class whose instances are classes", "Une métaclasse est une classe dont les instances sont des classes"),
    ("— the class of a class.", "— la classe d'une classe."),
    ("type serves as the default metaclass for every class in Python.", "type sert de métaclasse par défaut pour chaque classe en Python."),
    ("type() with three arguments is the constructor form that creates classes dynamically.", "type() avec trois arguments est la forme constructeur qui crée des classes dynamiquement."),
    ("Python's type hints are purely informational — the interpreter does not check or enforce them.", "Les indications de type de Python sont purement informatives — l'interpréteur ne les vérifie ni ne les applique."),
    ("Optional[X] is shorthand for Union[X, None], meaning the value can be X or None.", "Optional[X] est un raccourci pour Union[X, None], signifiant que la valeur peut être X ou None."),
    ("List[int] from the typing module represents a list whose elements are integers.", "List[int] du module typing représente une liste dont les éléments sont des entiers."),
    ("Protocol (PEP 544) enables structural subtyping", "Protocol (PEP 544) permet le sous-typage structurel"),
    ("Inheritance is a mechanism that allows a child class (subclass) to inherit features from a parent class (superclass).", "L'héritage est un mécanisme qui permet à une classe enfant (sous-classe) d'hériter des fonctionnalités d'une classe parente (superclasse)."),
    ("The super() function allows a child method to call the parent method.", "La fonction super() permet à une méthode enfant d'appeler la méthode parent."),
    ("Method overriding is when a child class redefines a method that already exists in the parent class.", "La surcharge de méthode est quand une classe enfant redéfinit une méthode qui existe déjà dans la classe parente."),
    ("Polymorphism allows the same interface for different types.", "Le polymorphisme permet la même interface pour différents types."),
    # Common uses and other phrases
    ("@property is a data descriptor", "@property est un descripteur de données"),
    ("Functions are non-data descriptors (they bind self via __get__)", "Les fonctions sont des descripteurs non-données (elles lient self via __get__)"),
    ("ORMs use descriptors for field validation", "Les ORM utilisent des descripteurs pour la validation des champs"),
    ("Lazy attribute computation", "Calcul paresseux d'attributs"),
    ("Data validation on set", "Validation des données à l'assignation"),
    ("Computed attributes on get", "Attributs calculés à l'accès"),
    ("Logging attribute access", "Journalisation de l'accès aux attributs"),
    ("Implementing property-like behavior", "Implémentation d'un comportement de type property"),
    ("Validated attributes", "Attributs validés"),
    ("Type-checked fields", "Champs vérifiés par type"),
    ("Computed properties with setters", "Propriétés calculées avec setters"),
    ("Functions (bound method creation)", "Fonctions (création de méthodes liées)"),
    ("Cached/lazy attributes", "Attributs mis en cache/paresseux"),
    ("Per-instance method overrides", "Surcharges de méthodes par instance"),
    ("Cached attribute pattern (lazy evaluation)", "Motif d'attribut mis en cache (évaluation paresseuse)"),
    ("Shadowing class-level defaults", "Masquage des valeurs par défaut au niveau de la classe"),
    ("@property always intercepts access", "@property intercepte toujours l'accès"),
    ("Enforcing validation — can't be bypassed by setting instance attr", "Application de la validation — ne peut pas être contourné en définissant un attribut d'instance"),
    ("Utility functions that belong logically to a class", "Fonctions utilitaires qui appartiennent logiquement à une classe"),
    ("Functions that don't need access to instance or class state", "Fonctions qui n'ont pas besoin d'accéder à l'état d'instance ou de classe"),
    ("Alternative constructors that don't need cls", "Constructeurs alternatifs qui n'ont pas besoin de cls"),
    ("Alternative constructors: Date.from_string", "Constructeurs alternatifs : Date.from_string"),
    ("Factory methods that respect inheritance", "Méthodes factory qui respectent l'héritage"),
    ("Accessing class-level data without hardcoding the class name", "Accès aux données de classe sans coder en dur le nom de la classe"),
    ("Computed attributes that return dynamic values", "Attributs calculés qui retournent des valeurs dynamiques"),
    ("Lazy loading patterns", "Motifs de chargement paresseux"),
    ("Attribute proxying", "Proxying d'attributs"),
    ("Computed properties (transform on get)", "Propriétés calculées (transformation à l'accès)"),
    ("Validation on set with transformation on get", "Validation à l'assignation avec transformation à l'accès"),
    ("Unit conversion descriptors", "Descripteurs de conversion d'unités"),
    ("Auto-detecting attribute name for storage", "Détection automatique du nom d'attribut pour le stockage"),
    ("ORM field definitions", "Définitions de champs ORM"),
    ("Validation with meaningful error messages", "Validation avec des messages d'erreur significatifs"),
    ("Data validation in ORMs", "Validation des données dans les ORM"),
    ("Configuration objects", "Objets de configuration"),
    ("API input validation", "Validation des entrées API"),
    ("Automatic self binding for instance methods", "Liaison automatique de self pour les méthodes d'instance"),
    ("This is why methods receive self automatically", "C'est pourquoi les méthodes reçoivent self automatiquement"),
    ("Understanding this explains method vs function distinction", "Comprendre cela explique la distinction méthode vs fonction"),
    ("Understanding Python's method resolution", "Comprendre la résolution de méthodes de Python"),
    ("Debugging attribute lookup issues", "Débogage des problèmes de recherche d'attributs"),
    ("Metaclass programming and introspection", "Programmation par métaclasse et introspection"),
    ("Defining interfaces in Python", "Définition d'interfaces en Python"),
    ("Enforcing method implementation in subclasses", "Application de l'implémentation de méthodes dans les sous-classes"),
    ("Design by contract", "Conception par contrat"),
    ("Template method pattern", "Motif de méthode template"),
    ("Enforcing API contracts", "Application des contrats API"),
    ("Ensuring subclass completeness", "Garantir l'exhaustivité des sous-classes"),
    ("Catching incomplete implementations early", "Détecter les implémentations incomplètes tôt"),
    ("Multi-level inheritance where intermediate classes remain abstract", "Héritage multi-niveaux où les classes intermédiaires restent abstraites"),
    ("Type checking at runtime", "Vérification de type à l'exécution"),
    ("Polymorphic behavior based on type", "Comportement polymorphe basé sur le type"),
    ("Validating function arguments", "Validation des arguments de fonction"),
    ("Checking if an object can be iterated over", "Vérifier si un objet peut être itéré"),
    ("Type hints: Iterable[int] for any iterable of ints", "Indications de type : Iterable[int] pour tout itérable d'entiers"),
    ("Defensive programming before for loops", "Programmation défensive avant les boucles for"),
    ("Verifying an object is a full iterator (not just iterable)", "Vérifier qu'un objet est un itérateur complet (pas juste iterable)"),
    ("Custom iterator classes", "Classes d'itérateurs personnalisées"),
    ("Generator objects are Iterators", "Les objets générateur sont des Iterators"),
    ("Type hints: Callable[[int, int], str]", "Indications de type : Callable[[int, int], str]"),
    ("Checking if an argument is callable before calling it", "Vérifier si un argument est appelable avant de l'appeler"),
    ("Higher-order function validation", "Validation des fonctions d'ordre supérieur"),
    ("__get__ is called", "__get__ est appelé"),
    ("instance dict wins", "le dict d'instance gagne"),
    ("data descriptor wins over instance dict", "le descripteur de données gagne sur le dict d'instance"),
    ("data descriptor still wins", "le descripteur de données gagne encore"),
]

def translate_text(text):
    result = text
    for eng, fr in PHRASES:
        result = result.replace(eng, fr)
    for eng, fr in HEADERS.items():
        result = result.replace(eng, fr)
    # Bullet replacements
    result = re.sub(r'^• ', '• ', result)
    return result

def main():
    with open('scripts/extract_2351_2450.json') as f:
        data = json.load(f)
    
    lines = []
    for q in data:
        vid = q['id']
        de = q['de']
        translated = translate_text(de)
        escaped = escape_ts(translated)
        lines.append(f"  {vid}: `{escaped}`,")
    
    out = "\n".join(lines)
    with open('scripts/fr_detailed_2351_2450.txt', 'w') as f:
        f.write(out)
    print(f"Written to scripts/fr_detailed_2351_2450.txt ({len(lines)} entries)")
    print("Review and paste into detailedExplanationsTranslations.ts")

if __name__ == '__main__':
    main()
