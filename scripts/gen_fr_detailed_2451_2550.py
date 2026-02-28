#!/usr/bin/env python3
"""Generate French detailed explanations for IDs 2451-2550."""
import json

HEADERS = {
    "Key concepts:": "Concepts clés :",
    "How it works:": "Comment ça fonctionne :",
    "Example:": "Exemple :",
    "Examples:": "Exemples :",
    "Common uses:": "Utilisations courantes :",
    "Fix:": "Correction :",
}

PHRASES = [
    ("returns ", "renvoie "),
    ("Returns: ", "Résultat : "),
    ("raises ", "lève "),
    ("Raises ", "Lève "),
    (" because ", " car "),
    ("then ", "alors "),
    ("The ", "Le/La "),
    ("This ", "Ce/Ceci "),
    ("If ", "Si "),
    ("When you ", "Quand on "),
    ("When ", "Quand "),
    ("Python ", "Python "),
    ("checks ", "vérifie "),
    ("contains ", "contient "),
    ("provides ", "fournit "),
    ("allows ", "permet "),
    ("cannot ", "ne peut pas "),
    ("can ", "peut "),
    ("doesn't ", "ne ... pas "),
    ("does not ", "ne ... pas "),
    ("is ", "est "),
    ("are ", "sont "),
    ("has ", "a "),
    ("have ", "ont "),
    ("Name mangling with double underscore:", "Name mangling avec double underscore :"),
    ("Name mangling creates mangled name:", "Le name mangling crée le nom manglé :"),
    ("Property provides controlled access:", "@property fournit un accès contrôlé :"),
    ("Abstract class can't be instantiated:", "Classe abstraite non instanciable :"),
]

def trans(t):
    r = t
    for en, fr in HEADERS.items():
        r = r.replace(en, fr)
    for en, fr in PHRASES:
        r = r.replace(en, fr)
    return r

def main():
    with open("scripts/extracted_2451_2550.json", encoding="utf-8") as f:
        data = json.load(f)
    lines = []
    for item in data:
        de = trans(item["de"])
        esc = de.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")
        lines.append(f"  {item['id']}: `{esc}`,")
    with open("scripts/fr_de_2451_2550_out.txt", "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print(f"Wrote {len(lines)} entries to scripts/fr_de_2451_2550_out.txt")

if __name__ == "__main__":
    main()
