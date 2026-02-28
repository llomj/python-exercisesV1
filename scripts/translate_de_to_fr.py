#!/usr/bin/env python3
"""
Translate detailed explanations from EN to FR.
Uses MyMemory API (free, no key required). Preserves Python code blocks.
Output: scripts/fr_2451_2550_detailed.txt
"""
import json
import re
import urllib.parse
import urllib.request
import time

def translate_chunk(text):
    """Translate text via MyMemory API. Max ~500 words per request."""
    if not text or not text.strip():
        return text
    # Don't translate if it looks like code
    stripped = text.strip()
    if (stripped.startswith('>>>') or stripped.startswith('class ') or 
        stripped.startswith('def ') or stripped.startswith('from ') or 
        stripped.startswith('import ') or (len(stripped) > 2 and stripped[0] in ' \t')):
        return text
    try:
        url = 'https://api.mymemory.translated.net/get?' + urllib.parse.urlencode({
            'q': text[:4500],  # API limit
            'langpair': 'en|fr'
        })
        req = urllib.request.Request(url, headers={'User-Agent': 'Python/3'})
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = json.loads(resp.read().decode())
        translated = data.get('responseData', {}).get('translatedText', text)
        return translated
    except Exception as e:
        print(f"  API error: {e}", file=__import__('sys').stderr)
        return text

def is_code_line(line):
    """Check if line is Python code (to preserve unchanged)."""
    s = line.strip()
    if not s or s.startswith('•'): return False
    return (s.startswith('>>>') or s.startswith('class ') or s.startswith('def ') or
            s.startswith('from ') or s.startswith('import ') or
            (len(line) > 0 and line[0] in ' \t') or
            bool(re.match(r'^[a-zA-Z_][a-zA-Z0-9_.]*\s*(=\s|[\(\.])', s)))

def split_preserve_code(text):
    """Split text into prose blocks and code blocks. Code stays unchanged."""
    lines = text.split('\n')
    blocks = []
    current = []
    current_is_code = None
    for line in lines:
        code_line = is_code_line(line)
        if current_is_code is None:
            current_is_code = code_line
            current.append(line)
        elif code_line == current_is_code:
            current.append(line)
        else:
            blocks.append(('\n'.join(current), current_is_code))
            current = [line]
            current_is_code = code_line
    if current:
        blocks.append(('\n'.join(current), current_is_code))
    return blocks

def translate_entry(en_text):
    """Translate entry to French, preserving code blocks."""
    blocks = split_preserve_code(en_text)
    result = []
    for block, is_code in blocks:
        if is_code:
            result.append(block)
        else:
            paras = re.split(r'\n\n+', block)
            translated_paras = [translate_chunk(p) if p.strip() else p for p in paras]
            result.append('\n\n'.join(translated_paras))
    return '\n'.join(result)

def escape_ts(s):
    return s.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')

# Section header replacements (conceptual - done before or after API)
SECTION_MAP = {
    'Name mangling with double underscore:': 'Concepts clés (name mangling) :',
    'Name mangling creates mangled name:': 'Concepts clés (nom manglé) :',
    "Class attribute doesn't mangle:": "Concepts clés (attribut de classe) :",
    'Single underscore convention:': "Concepts clés (underscore simple) :",
    "Name mangling prevents child access:": "Concepts clés (name mangling empêche l'enfant) :",
    'Access mangled name directly:': 'Concepts clés (accès nom manglé) :',
    "Double underscore both sides doesn't mangle:": "Concepts clés (double underscore des deux côtés) :",
    'Getter method for protected attribute:': 'Concepts clés (getter attribut protégé) :',
    'Getter accesses mangled name:': 'Concepts clés (getter accède au manglé) :',
    'Setter modifies mangled attribute:': "Concepts clés (setter modifie l'attribut manglé) :",
    'Property provides controlled access:': 'Concepts clés (@property) :',
    'Property setter transforms value:': 'Concepts clés (setter transforme) :',
    'Property accesses mangled attribute:': 'Concepts clés (propriété accède manglé) :',
    "Setter doesn't store:": 'Concepts clés (setter ne stocke pas) :',
    'property() with getter and setter:': 'Concepts clés (property getter/setter) :',
    'Property deleter:': 'Concepts clés (@x.deleter) :',
    'Property without setter:': 'Concepts clés (propriété sans setter) :',
    'Property getter transforms value:': 'Concepts clés (getter transforme) :',
    'Property setter validates:': 'Concepts clés (setter valide) :',
    'Cannot combine decorators:': 'Concepts clés (décorateurs) :',
    "Abstract class can't be instantiated:": 'Concepts clés (classe abstraite) :',
    'Child must implement abstract method:': "Concepts clés (enfant doit implémenter) :",
    'Child implementing abstract method:': "Concepts clés (enfant implémente) :",
    'Child keeps method abstract:': "Concepts clés (enfant garde abstrait) :",
    '__abstractmethods__ attribute:': 'Concepts clés (__abstractmethods__) :',
    'Child has no abstract methods:': "Concepts clés (enfant sans méthodes abstraites) :",
    'Abstract classmethod:': 'Concepts clés (@classmethod abstrait) :',
    'Abstract staticmethod:': 'Concepts clés (@staticmethod abstrait) :',
    'Child is still subclass:': "Concepts clés (enfant reste sous-classe) :",
    'Cannot instantiate abstract class:': 'Concepts clés (instanciation impossible) :',
    'isinstance() with inheritance:': 'Concepts clés (isinstance héritage) :',
    'isinstance() with own class:': 'Concepts clés (isinstance propre classe) :',
    'isinstance() with tuple:': 'Concepts clés (isinstance tuple) :',
    "isinstance() doesn't work backwards:": "Concepts clés (isinstance pas à l'inverse) :",
    'issubclass() function:': 'Concepts clés (issubclass) :',
    "issubclass() doesn't work backwards:": "Concepts clés (issubclass pas à l'inverse) :",
    'issubclass() with tuple:': 'Concepts clés (issubclass tuple) :',
    'issubclass() checks entire chain:': 'Concepts clés (issubclass chaîne) :',
    'isinstance() checks entire chain:': 'Concepts clés (isinstance chaîne) :',
    'Multiple inheritance:': 'Concepts clés (héritage multiple) :',
    'super().__init__() initializes parent:': 'Concepts clés (super().__init__) :',
    'super().__init__() with arguments:': 'Concepts clés (super().__init__ arguments) :',
    'Grandchild inherits from immediate parent:': 'Concepts clés (petit-enfant hérite) :',
    'Child extends parent method:': "Concepts clés (enfant étend méthode) :",
    'Child overrides special method:': "Concepts clés (enfant surcharge méthode spéciale) :",
    'Property inherited by child:': "Concepts clés (propriété héritée) :",
    'Key concepts:': 'Concepts clés :',
    'How it works:': 'Comment ça fonctionne :',
    'Example:': 'Exemple :',
    'Common uses:': 'Utilisations courantes :',
    'Fix:': 'Correction :',
    'Why this matters:': "Pourquoi c'est important :",
    'When to use composition:': 'Quand utiliser la composition :',
    'When to use inheritance:': "Quand utiliser l'héritage :",
}

def apply_headers(text):
    for en, fr in SECTION_MAP.items():
        text = text.replace(en, fr)
    return text

def main():
    import sys
    with open('scripts/extracted_2451_2550.json') as f:
        data = json.load(f)
    limit = int(sys.argv[1]) if len(sys.argv) > 1 else len(data)
    data = data[:limit]
    out = []
    total = len(data)
    for i, item in enumerate(data):
        qid = item['id']
        de = item.get('de', '')
        print(f"  [{i+1}/{total}] ID {qid}...", flush=True)
        fr = translate_entry(apply_headers(de))
        escaped = escape_ts(fr)
        out.append(f"{qid}: `{escaped}`,")
        time.sleep(0.3)  # Rate limit
    
    with open('scripts/fr_2451_2550_detailed.txt', 'w') as f:
        f.write('\n'.join(out))
    print(f"Done. Wrote {len(out)} entries to scripts/fr_2451_2550_detailed.txt")

if __name__ == '__main__':
    main()
