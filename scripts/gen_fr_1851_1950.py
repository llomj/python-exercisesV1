#!/usr/bin/env python3
"""Generate French detailed explanation translations from extracted JSON.
Reads scripts/extracted_1851_1950.json and outputs TypeScript entries.
Python code blocks are kept unchanged. Section headers are translated.
"""
import json
import re

# Section header translations
HEADERS = {
    "Key concepts:": "Concepts clés :",
    "How it works:": "Fonctionnement :",
    "Example:": "Exemple :",
    "Examples:": "Exemples :",
    "Common uses:": "Utilisations courantes :",
    "Global variable access:": "Accès aux variables globales :",
    "Local assignment:": "Assignation locale :",
    "Local doesn't affect global:": "Local n'affecte pas le global :",
    "global keyword:": "Mot-clé global :",
    "Closure - inner accesses outer:": "Closure — inner accède à outer :",
    "Closure captures parameter:": "La closure capture le paramètre :",
    "Local variable scope:": "Portée des variables locales :",
    "Global and parameter:": "Global et paramètre :",
    "UnboundLocalError:": "UnboundLocalError :",
    "Built-in function call:": "Appel de fonction intégrée :",
    "Recursive function:": "Fonction récursive :",
    "Recursive Fibonacci:": "Fibonacci récursif :",
    "Recursive counting:": "Comptage récursif :",
    "Recursive sum:": "Somme récursive :",
    "Recursive power:": "Puissance récursive :",
    "Infinite recursion:": "Récursion infinie :",
    "Infinite recursion example:": "Exemple de récursion infinie :",
    "Recursive string reversal:": "Inversion récursive de chaîne :",
    "Recursive GCD (Euclidean algorithm):": "PGCD récursif (algorithme d'Euclide) :",
    "Recursive length:": "Longueur récursive :",
    "Higher-order function:": "Fonction d'ordre supérieur :",
    "Factory function:": "Fonction factory :",
    "Function composition:": "Composition de fonctions :",
    "map() returns iterator:": "map() renvoie un itérateur :",
    "list() on map object:": "list() sur objet map :",
    "filter() returns iterator:": "filter() renvoie un itérateur :",
    "list() on filter object:": "list() sur objet filter :",
    "reduce() function:": "Fonction reduce() :",
    "sorted() with key:": "sorted() avec key :",
    "max() with key:": "max() avec key :",
    "__name__ attribute:": "Attribut __name__ :",
    "__doc__ attribute:": "Attribut __doc__ :",
    "__doc__ without docstring:": "__doc__ sans docstring :",
    "__defaults__ attribute:": "Attribut __defaults__ :",
    "__defaults__ without type hints:": "__defaults__ sans indications de type :",
    "__annotations__ with type hints:": "__annotations__ avec indications de type :",
    "__code__ attribute:": "Attribut __code__ :",
    "callable() function:": "Fonction callable() :",
    "callable() on integer:": "callable() sur entier :",
    "type() on function:": "type() sur fonction :",
    "hasattr() function:": "Fonction hasattr() :",
    "Custom function attributes:": "Attributs personnalisés des fonctions :",
    "Too many arguments:": "Trop d'arguments :",
    "Too few arguments:": "Pas assez d'arguments :",
    "Keyword argument order:": "Ordre des arguments nommés :",
    "Mixed arguments:": "Arguments mixtes :",
    "Positional after keyword:": "Positionnel après le nommé :",
    "Keyword-only parameter after *args:": "Paramètre keyword-only après *args :",
    "Keyword-only parameters:": "Paramètres keyword-only :",
    "Positional-only and keyword-only:": "Positionnel-only et keyword-only :",
}

# Common phrase translations (English -> French)
PHRASES = [
    ("Functions can access global variables", "Les fonctions peuvent accéder aux variables globales"),
    ("variables defined outside the function", "variables définies en dehors de la fonction"),
    ("returns 1 because the function can read global variables", "renvoie 1 car la fonction peut lire les variables globales"),
    ("When a function references a variable that's not defined locally", "Quand une fonction référence une variable non définie localement"),
    ("Python looks in the outer scope (global scope)", "Python cherche dans la portée externe (portée globale)"),
    ("This is called variable lookup", "C'est ce qu'on appelle la recherche de variable"),
    ("Python searches from local to global scope", "Python cherche de la portée locale à la portée globale"),
    ("Assigning to a variable inside a function creates a local variable", "Assigner à une variable dans une fonction crée une variable locale"),
    ("even if a global variable with the same name exists", "même si une variable globale du même nom existe"),
    ("shadows (hides) the global variable", "masque (cache) la variable globale"),
    ("When the function references x", "Quand la fonction référence x"),
    ("uses the local variable", "utilise la variable locale"),
    ("This is Python's scoping rule", "C'est la règle de portée de Python"),
    ("assignment creates a local variable", "l'assignation crée une variable locale"),
    ("doesn't affect the global variable", "n'affecte pas la variable globale"),
    ("Local variables exist only within the function", "Les variables locales n'existent que dans la fonction"),
    ("unless you use the global keyword", "sauf si vous utilisez le mot-clé global"),
    ("The global keyword allows a function to modify a global variable", "Le mot-clé global permet à une fonction de modifier une variable globale"),
    ("tells Python that x inside the function refers to the global variable x", "indique à Python que x dans la fonction référence la variable globale x"),
    ("modifies the global variable x", "modifie la variable globale x"),
    ("Without the global keyword, assignment would create a local variable instead", "Sans le mot-clé global, l'assignation créerait une variable locale"),
    ("Inner functions (nested functions) can access variables from outer functions", "Les fonctions internes (imbriquées) peuvent accéder aux variables des fonctions englobantes"),
    ("closes over", "se ferme sur"),
    ("allowing it to access them even after the outer function has finished executing", "lui permettant d'y accéder même après que la fonction englobante ait terminé"),
    ("Closures can capture outer function parameters", "Les closures peuvent capturer les paramètres des fonctions englobantes"),
    ("it still \"remembers\" the value", "elle \"se souvient\" encore de la valeur"),
    ("Local variables (variables defined inside a function) are not accessible outside the function", "Les variables locales (variables définies dans une fonction) ne sont pas accessibles en dehors de la fonction"),
    ("raises a NameError", "lève une NameError"),
    ("local variables only exist within the function where they're defined", "les variables locales n'existent que dans la fonction où elles sont définies"),
    ("Once the function returns, local variables are destroyed", "Une fois la fonction retournée, les variables locales sont détruites"),
    ("Assigning to a variable inside a function makes it local", "Assigner à une variable dans une fonction la rend locale"),
    ("prevents reading it before assignment", "empêche de la lire avant l'assignation"),
    ("raises an UnboundLocalError", "lève une UnboundLocalError"),
    ("referenced on the right side", "référencée à droite"),
    ("Python determines that x is local because of the assignment", "Python détermine que x est local à cause de l'assignation"),
    ("Functions can call built-in functions", "Les fonctions peuvent appeler les fonctions intégrées"),
    ("A recursive function calls itself", "Une fonction récursive s'appelle elle-même"),
    ("base case", "cas de base"),
    ("Recursive case", "Cas récursif"),
    ("The filter object is an iterator", "L'objet filter est un itérateur"),
    ("lazy evaluation", "évaluation paresseuse"),
    ("returns a map object (iterator)", "renvoie un objet map (itérateur)"),
    ("map() applies a function to each element", "map() applique une fonction à chaque élément"),
    ("returns a filter object (iterator)", "renvoie un objet filter (itérateur)"),
    ("filter() applies a predicate function", "filter() applique une fonction prédicat"),
    ("yields only the elements for which the predicate is True", "produit uniquement les éléments pour lesquels le prédicat est True"),
    ("The list() function converts", "La fonction list() convertit"),
    ("consumes the iterator", "consomme l'itérateur"),
    ("collecting all values into a list", "collectant toutes les valeurs dans une liste"),
    ("The reduce() function from functools accumulates values", "La fonction reduce() de functools accumule les valeurs"),
    ("applying a function cumulatively", "en appliquant une fonction de manière cumulative"),
    ("The sorted() function can take a key parameter", "La fonction sorted() peut prendre un paramètre key"),
    ("The max() function can take a key parameter", "La fonction max() peut prendre un paramètre key"),
    ("Functions have a __name__ attribute", "Les fonctions ont un attribut __name__"),
    ("Functions have a __doc__ attribute", "Les fonctions ont un attribut __doc__"),
    ("docstring (documentation string)", "docstring (chaîne de documentation)"),
    ("The __doc__ attribute is None if a function has no docstring", "L'attribut __doc__ est None si une fonction n'a pas de docstring"),
    ("Functions have a __defaults__ attribute", "Les fonctions ont un attribut __defaults__"),
    ("Functions have a __code__ attribute", "Les fonctions ont un attribut __code__"),
    ("The callable() function checks if an object is callable", "La fonction callable() vérifie si un objet est appelable"),
    ("Integers are not callable objects", "Les entiers ne sont pas des objets appelables"),
    ("The type() function returns the type of an object", "La fonction type() renvoie le type d'un objet"),
    ("The hasattr() function checks if an object has a specific attribute", "La fonction hasattr() vérifie si un objet possède un attribut spécifique"),
    ("Functions can have custom attributes assigned to them", "Les fonctions peuvent avoir des attributs personnalisés assignés"),
    ("Functions have a __annotations__ attribute", "Les fonctions ont un attribut __annotations__"),
    ("Calling a function with too many arguments raises a TypeError", "Appeler une fonction avec trop d'arguments lève une TypeError"),
    ("Calling a function with too few arguments raises a TypeError", "Appeler une fonction avec pas assez d'arguments lève une TypeError"),
    ("Keyword arguments can be in any order after positional arguments", "Les arguments nommés peuvent être dans n'importe quel ordre après les arguments positionnels"),
    ("You can mix positional and keyword arguments", "Vous pouvez mélanger arguments positionnels et nommés"),
    ("Positional arguments cannot come after keyword arguments", "Les arguments positionnels ne peuvent pas suivre les arguments nommés"),
    ("Parameters after *args are keyword-only", "Les paramètres après *args sont keyword-only"),
    ("Parameters after a bare * are keyword-only", "Les paramètres après un * seul sont keyword-only"),
    ("The bare * acts as a separator", "Le * seul sert de séparateur"),
    ("Parameters before / are positional-only", "Les paramètres avant / sont positional-only"),
]

def translate_sections(text: str) -> str:
    """Translate section headers and some common phrases."""
    result = text
    for en, fr in HEADERS.items():
        result = result.replace(en, fr)
    for en, fr in PHRASES:
        result = result.replace(en, fr)
    return result

def main():
    with open("scripts/extracted_1851_1950.json", "r", encoding="utf-8") as f:
        data = json.load(f)

    lines = []
    for item in data:
        qid = item["id"]
        de = item["de"]
        # For now, do minimal translation - just headers
        # Full translation would require NLP; we output structure
        translated = translate_sections(de)
        # Escape backticks and backslashes for template literal
        escaped = translated.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")
        lines.append(f"  {qid}: `{escaped}`,",)

    print("\n".join(lines[:5]))  # Sample
    with open("scripts/fr_de_1851_1950.txt", "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

if __name__ == "__main__":
    main()
