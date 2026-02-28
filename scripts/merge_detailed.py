#!/usr/bin/env python3
"""Merge fr_detailed_1851_1950.txt into detailedExplanationsTranslations.ts"""
with open("scripts/fr_detailed_1851_1950.txt", "r", encoding="utf-8") as f:
    new_content = f.read().rstrip()

with open("src/data/detailedExplanationsTranslations.ts", "r", encoding="utf-8") as f:
    content = f.read()

old_end = """  1850: `Les fonctions peuvent renvoyer n'importe quel type de valeur, y compris les listes. def func(): return [1, 2, 3] définit une fonction qui renvoie la liste [1, 2, 3] à l'appel. return peut renvoyer tout objet Python : nombres, chaînes, listes, tuples, dict, objets, None, etc.`
};"""

new_end = """  1850: `Les fonctions peuvent renvoyer n'importe quel type de valeur, y compris les listes. def func(): return [1, 2, 3] définit une fonction qui renvoie la liste [1, 2, 3] à l'appel. return peut renvoyer tout objet Python : nombres, chaînes, listes, tuples, dict, objets, None, etc.`,
""" + new_content + """
};"""

if old_end in content:
    content = content.replace(old_end, new_end)
    with open("src/data/detailedExplanationsTranslations.ts", "w", encoding="utf-8") as f:
        f.write(content)
    print("Merge successful")
else:
    print("Pattern not found")
