#!/usr/bin/env python3
"""Generate French detailed explanations for IDs 2851-3000.
Translates section headers and common phrases; keeps Python code unchanged."""
import json

HEADERS = {
    "Key concepts:": "Concepts clés :",
    "How it works:": "Comment ça fonctionne :",
    "Example:": "Exemple :",
    "Examples:": "Exemples :",
    "Common uses:": "Usages courants :",
    "Edge cases:": "Cas particuliers :",
    "Workaround — custom encoder:": "Contournement — encodeur personnalisé :",
}

# Minimal phrase replacements - headers do the main work; code stays unchanged
PHRASES = [
    (" returns ", " renvoie "),
    ("Returns ", "Résultat : "),
    (" raises ", " lève "),
    ("Raises ", "Lève "),
]

def trans(t):
    r = t
    for en, fr in HEADERS.items():
        r = r.replace(en, fr)
    for en, fr in PHRASES:
        if en in r:
            r = r.replace(en, fr)
    return r

def main():
    with open("scripts/q2851_3000.json", encoding="utf-8") as f:
        data = json.load(f)
    lines = []
    for item in data:
        de = item.get("de", "")
        if not de:
            continue
        de = trans(de)
        esc = de.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")
        lines.append(f"  {item['id']}: `{esc}`,")
    out = "\n".join(lines)
    with open("scripts/fr_de_2851_3000_out.txt", "w", encoding="utf-8") as f:
        f.write(out)
    print(f"Wrote {len(lines)} entries to scripts/fr_de_2851_3000_out.txt")

if __name__ == "__main__":
    main()
