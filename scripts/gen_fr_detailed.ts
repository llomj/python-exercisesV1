// Generate French detailed explanations for IDs 1851-1950
// Run: npx tsx scripts/gen_fr_detailed.ts

import * as fs from "fs";

const data = JSON.parse(
  fs.readFileSync("scripts/extracted_1851_1950.json", "utf-8")
) as Array<{ id: number; de: string }>;

const EN_FR: Record<string, string> = {
  "returns 1": "renvoie 1",
  "returns 2": "renvoie 2",
  "returns 3": "renvoie 3",
  "returns 5": "renvoie 5",
  "returns 6": "renvoie 6",
  "returns 8": "renvoie 8",
  "returns 10": "renvoie 10",
  "returns 12": "renvoie 12",
  "returns 120": "renvoie 120",
  "returns 7": "renvoie 7",
  "returns 20": "renvoie 20",
  "returns 25": "renvoie 25",
  "returns [2, 4, 6]": "renvoie [2, 4, 6]",
  "returns [3, 4]": "renvoie [3, 4]",
  "returns [3, 2, 1]": "renvoie [3, 2, 1]",
  "returns 1": "renvoie 1",
  "returns ((1, 2), 3)": "renvoie ((1, 2), 3)",
  "returns 'func'": "renvoie 'func'",
  "returns 'doc'": "renvoie 'doc'",
  "returns None": "renvoie None",
  "returns (2,)": "renvoie (2,)",
  "returns True": "renvoie True",
  "returns False": "renvoie False",
  "returns {}": "renvoie {}",
  "returns 5": "renvoie 5",
  "returns [1, 2]": "renvoie [1, 2]",
  "returns [1, 2, 3]": "renvoie [1, 2, 3]",
  "returns [2]": "renvoie [2]",
  "returns [1, 2, 3]": "renvoie [1, 2, 3]",
  "returns 'cba'": "renvoie 'cba'",
  "because": "car",
  "then": "alors",
  "then func()": "alors func()",
  "then x": "alors x",
  "then f()": "alors f()",
  "then f(4)": "alors f(4)",
  "the function can read global variables": "la fonction peut lire les variables globales",
  "the function can access": "la fonction peut accéder",
  "Functions can access global variables": "Les fonctions peuvent accéder aux variables globales",
  "variables defined outside the function": "variables définies en dehors de la fonction",
  "When a function references a variable that's not defined locally": "Quand une fonction référence une variable non définie localement",
  "Python looks in the outer scope (global scope)": "Python cherche dans la portée externe (portée globale)",
  "and finds x = 1, so it uses that value": "et trouve x = 1, qu'elle utilise",
  "This is called variable lookup": "C'est ce qu'on appelle la recherche de variable",
  "Python searches from local to global scope": "Python cherche de la portée locale à la portée globale",
  "Global variable access:": "Accès aux variables globales :",
  "How it works:": "Fonctionnement :",
  "Example:": "Exemple :",
  "Examples:": "Exemples :",
  "Common uses:": "Utilisations courantes :",
  "x = 1 defines global variable": "x = 1 définit la variable globale",
  "func() references x (not defined locally)": "func() référence x (non défini localement)",
  "Python looks in global scope, finds x = 1": "Python cherche en portée globale, trouve x = 1",
  "Returns global value: 1": "Renvoie la valeur globale : 1",
  "Returns local value: 2": "Renvoie la valeur locale : 2",
  "returns 1\n": "renvoie 1\n",
  "returns 2\n": "renvoie 2\n",
  "Assigning to a variable inside a function creates a local variable": "Assigner à une variable dans une fonction crée une variable locale",
  "even if a global variable with the same name exists": "même si une variable globale du même nom existe",
  "shadows (hides) the global variable": "masque la variable globale",
  "Local assignment:": "Assignation locale :",
  "Local doesn't affect global:": "Local n'affecte pas le global :",
  "The global keyword allows a function to modify a global variable": "Le mot-clé global permet à une fonction de modifier une variable globale",
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
  "Key concepts:": "Concepts clés :",
};

function translate(t: string): string {
  let out = t;
  for (const [en, fr] of Object.entries(EN_FR)) {
    out = out.split(en).join(fr);
  }
  return out;
}

const lines: string[] = [];
for (const item of data) {
  const translated = translate(item.de);
  const escaped = translated.replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
  lines.push(`  ${item.id}: \`${escaped}\`,`);
}

const block = "  // IDs 1851-1950: Level 7 (scope, closures, recursion, map/filter, function attributes, mutable defaults)\n" + lines.join("\n");
fs.writeFileSync("scripts/fr_detailed_1851_1950.txt", block);
console.log("Wrote scripts/fr_detailed_1851_1950.txt");
