#!/usr/bin/env python3
"""
Generate French detailed explanations for IDs 2451-2550.
Reads extracted_2451_2550.json, translates "de" field to French,
outputs to fr_2451_2550_detailed.txt in TypeScript format.
Python code blocks are preserved unchanged.
"""
import json
import re

def escape_ts(s):
    """Escape for TypeScript template literal: backticks and ${"""
    return s.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')

def extract_code_blocks(text):
    """Extract Python code blocks to preserve them unchanged."""
    blocks = []
    def repl(m):
        idx = len(blocks)
        blocks.append(m.group(0))
        return f"\x00CODE{idx}\x00"
    pattern = r'(?:(?:^|\n)(?:>>> |class |def |from |import |[a-zA-Z_][a-zA-Z0-9_]*\.[a-zA-Z_][a-zA-Z0-9_]*\([^)]*\)|obj\.[a-zA-Z_][a-zA-Z0-9_]*\s*#|# [^\n]+))(?:\n(?:[ \t].*|[a-zA-Z_].*|>>>.*))*'
    # Simpler: lines that look like code (start with >>>, class, def, from, import, or indent)
    lines = text.split('\n')
    result = []
    in_code = False
    code_buffer = []
    for line in lines:
        is_code = (line.strip().startswith('>>>') or 
                   line.strip().startswith('class ') or 
                   line.strip().startswith('def ') or
                   line.strip().startswith('from ') or
                   line.strip().startswith('import ') or
                   (in_code and (line.startswith(' ') or line.startswith('\t') or not line.strip() or 
                    re.match(r'^[a-zA-Z_\[\]{}()\s#].*', line))))
        if is_code and (line.strip() or in_code):
            in_code = True
            code_buffer.append(line)
        else:
            if code_buffer:
                result.append(('\x00CODE\x00', '\n'.join(code_buffer)))
                code_buffer = []
            in_code = False
            result.append(('text', line))
    if code_buffer:
        result.append(('\x00CODE\x00', '\n'.join(code_buffer)))
    return result

# Translation mappings for section headers and common phrases
HEADERS = {
    'Name mangling with double underscore:': 'Name mangling avec double underscore :',
    'Name mangling creates mangled name:': 'Le name mangling crée le nom manglé :',
    'Class attribute doesn\'t mangle:': "L'attribut de classe ne subit pas le mangling :",
    'Single underscore convention:': "Convention de l'underscore simple :",
    'Name mangling prevents child access:': 'Le name mangling empêche l\'accès par l\'enfant :',
    'Access mangled name directly:': 'Accès direct au nom manglé :',
    'Double underscore both sides doesn\'t mangle:': "Le double underscore des deux côtés ne mangle pas :",
    'Getter method for protected attribute:': 'Méthode getter pour attribut protégé :',
    'Getter accesses mangled name:': 'Le getter accède au nom manglé :',
    'Setter modifies mangled attribute:': 'Le setter modifie l\'attribut manglé :',
    'Property provides controlled access:': '@property fournit un accès contrôlé :',
    'Property setter transforms value:': 'Le setter de propriété transforme la valeur :',
    'Property accesses mangled attribute:': 'La propriété accède à l\'attribut manglé :',
    'Setter doesn\'t store:': 'Le setter ne stocke pas :',
    'property() with getter and setter:': 'property() avec getter et setter :',
    'Property deleter:': 'Suppresseur de propriété (@x.deleter) :',
    'Property without setter:': 'Propriété sans setter :',
    'Property getter transforms value:': 'Le getter de propriété transforme la valeur :',
    'Property setter validates:': 'Le setter de propriété valide :',
    'Cannot combine decorators:': 'Impossible de combiner les décorateurs :',
    'Abstract class can\'t be instantiated:': 'Classe abstraite non instanciable :',
    'Child must implement abstract method:': "L'enfant doit implémenter la méthode abstraite :",
    'Child implementing abstract method:': "Enfant implémentant la méthode abstraite :",
    'Child keeps method abstract:': "L'enfant garde la méthode abstraite :",
    '__abstractmethods__ attribute:': 'Attribut __abstractmethods__ :',
    'Child has no abstract methods:': "L'enfant n'a plus de méthodes abstraites :",
    'Abstract classmethod:': '@classmethod abstrait :',
    'Abstract staticmethod:': '@staticmethod abstrait :',
    'Child is still subclass:': "L'enfant reste une sous-classe :",
    'Cannot instantiate abstract class:': 'Impossible d\'instancier une classe abstraite :',
    'isinstance() with inheritance:': 'isinstance() avec héritage :',
    'isinstance() with own class:': 'isinstance() avec sa propre classe :',
    'isinstance() with tuple:': 'isinstance() avec tuple :',
    'isinstance() doesn\'t work backwards:': "isinstance() ne fonctionne pas à l'inverse :",
    'issubclass() function:': 'Fonction issubclass() :',
    'issubclass() doesn\'t work backwards:': "issubclass() ne fonctionne pas à l'inverse :",
    'issubclass() with tuple:': 'issubclass() avec tuple :',
    'issubclass() checks entire chain:': 'issubclass() vérifie toute la chaîne :',
    'isinstance() checks entire chain:': 'isinstance() vérifie toute la chaîne :',
    'Multiple inheritance:': 'Héritage multiple :',
    'super().__init__() initializes parent:': 'super().__init__() initialise le parent :',
    'super().__init__() with arguments:': 'super().__init__() avec arguments :',
    'Grandchild inherits from immediate parent:': 'Le petit-enfant hérite du parent immédiat :',
    'Child extends parent method:': "L'enfant étend la méthode du parent :",
    'Child overrides special method:': "L'enfant surcharge la méthode spéciale :",
    'Property inherited by child:': 'Propriété héritée par l\'enfant :',
    'Key concepts:': 'Concepts clés :',
    'How it works:': 'Comment ça fonctionne :',
    'Example:': 'Exemple :',
    'Common uses:': 'Utilisations courantes :',
    'Fix:': 'Correction :',
    'Why this matters:': 'Pourquoi c\'est important :',
    'When to use composition:': 'Quand utiliser la composition :',
    'When to use inheritance:': "Quand utiliser l'héritage :",
}

def translate_section_header(line):
    for en, fr in HEADERS.items():
        if line.strip() == en or line.strip().startswith(en.rstrip(':')):
            return line.replace(en, fr)
    return line

def translate_line(line, in_bullet=False):
    """Simple translation - for now just replace headers. Full translation would need manual work."""
    # Don't translate code
    if any(line.strip().startswith(x) for x in ('>>>', 'class ', 'def ', 'from ', 'import ', '#', 'obj.', 'MyClass', 'Child', 'Parent', 'D.', 'C.', 'B.', 'A.')):
        if not (line.strip().startswith('#') and 'Example' in line):
            return line
    return translate_section_header(line)

with open('scripts/extracted_2451_2550.json') as f:
    data = json.load(f)

out_lines = []
for item in data:
    qid = item['id']
    de = item.get('de', '')
    # For this script we output placeholder - actual translation done separately
    # Replace headers
    for en, fr in HEADERS.items():
        de = de.replace(en, fr)
    escaped = escape_ts(de)
    out_lines.append(f"{qid}: `{escaped}`,")

with open('scripts/fr_2451_2550_detailed.txt', 'w') as f:
    f.write('\n'.join(out_lines))

print(f"Wrote {len(out_lines)} entries to scripts/fr_2451_2550_detailed.txt")
print("Note: This script only replaced section headers. Full French translation required.")
