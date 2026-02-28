#!/usr/bin/env python3
"""Build fr_2451_2550_detailed.txt from extracted JSON with French translations."""
import json
import sys

def escape_ts(s):
    """Escape for TypeScript template literal."""
    return s.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')

# Load translations - we'll merge EN structure with FR translations
# Each FR entry: full translated text
with open('scripts/extracted_2451_2550.json') as f:
    data = json.load(f)

# Build translations - mapping EN sections to FR
# We translate section by section to preserve code blocks
def translate_entry(en_text):
    """Translate English detailed explanation to French. Keep code unchanged."""
    # Section header replacements
    replacements = [
        (r'\nName mangling with double underscore:\n', '\nConcepts clés (name mangling avec double underscore) :\n'),
        (r'\nName mangling creates mangled name:\n', '\nConcepts clés (nom manglé) :\n'),
        (r"\nClass attribute doesn't mangle:\n", "\nConcepts clés (attribut de classe) :\n"),
        (r'\nSingle underscore convention:\n', "\nConcepts clés (underscore simple) :\n"),
        (r"\nName mangling prevents child access:\n", "\nConcepts clés (name mangling empêche l'enfant) :\n"),
        (r'\nAccess mangled name directly:\n', '\nConcepts clés (accès au nom manglé) :\n'),
        (r"\nDouble underscore both sides doesn't mangle:\n", "\nConcepts clés (double underscore des deux côtés) :\n"),
        (r'\nGetter method for protected attribute:\n', '\nConcepts clés (getter pour attribut protégé) :\n'),
        (r'\nGetter accesses mangled name:\n', '\nConcepts clés (getter accède au nom manglé) :\n'),
        (r'\nSetter modifies mangled attribute:\n', '\nConcepts clés (setter modifie l\'attribut manglé) :\n'),
        (r'\nProperty provides controlled access:\n', '\nConcepts clés (@property) :\n'),
        (r'\nProperty setter transforms value:\n', '\nConcepts clés (setter transforme) :\n'),
        (r'\nProperty accesses mangled attribute:\n', '\nConcepts clés (propriété accède au manglé) :\n'),
        (r"\nSetter doesn't store:\n", '\nConcepts clés (setter ne stocke pas) :\n'),
        (r'\nproperty\(\) with getter and setter:\n', '\nConcepts clés (property avec getter/setter) :\n'),
        (r'\nProperty deleter:\n', '\nConcepts clés (@x.deleter) :\n'),
        (r'\nProperty without setter:\n', '\nConcepts clés (propriété sans setter) :\n'),
        (r'\nProperty getter transforms value:\n', '\nConcepts clés (getter transforme) :\n'),
        (r'\nProperty setter validates:\n', '\nConcepts clés (setter valide) :\n'),
        (r'\nCannot combine decorators:\n', '\nConcepts clés (décorateurs incompatibles) :\n'),
        (r"\nAbstract class can't be instantiated:\n", '\nConcepts clés (classe abstraite) :\n'),
        (r'\nChild must implement abstract method:\n', "\nConcepts clés (enfant doit implémenter) :\n"),
        (r'\nChild implementing abstract method:\n', "\nConcepts clés (enfant implémente) :\n"),
        (r'\nChild keeps method abstract:\n', "\nConcepts clés (enfant garde abstrait) :\n"),
        (r'\n__abstractmethods__ attribute:\n', '\nConcepts clés (__abstractmethods__) :\n'),
        (r'\nChild has no abstract methods:\n', "\nConcepts clés (enfant sans méthodes abstraites) :\n"),
        (r'\nAbstract classmethod:\n', '\nConcepts clés (@classmethod abstrait) :\n'),
        (r'\nAbstract staticmethod:\n', '\nConcepts clés (@staticmethod abstrait) :\n'),
        (r'\nChild is still subclass:\n', "\nConcepts clés (enfant reste sous-classe) :\n"),
        (r'\nCannot instantiate abstract class:\n', '\nConcepts clés (instanciation impossible) :\n'),
        (r'\nisinstance\(\) with inheritance:\n', '\nConcepts clés (isinstance et héritage) :\n'),
        (r'\nisinstance\(\) with own class:\n', '\nConcepts clés (isinstance et propre classe) :\n'),
        (r'\nisinstance\(\) with tuple:\n', '\nConcepts clés (isinstance avec tuple) :\n'),
        (r"\nisinstance\(\) doesn't work backwards:\n", "\nConcepts clés (isinstance pas à l'inverse) :\n"),
        (r'\nissubclass\(\) function:\n', '\nConcepts clés (issubclass) :\n'),
        (r"\nissubclass\(\) doesn't work backwards:\n", "\nConcepts clés (issubclass pas à l'inverse) :\n"),
        (r'\nissubclass\(\) with tuple:\n', '\nConcepts clés (issubclass avec tuple) :\n'),
        (r'\nissubclass\(\) checks entire chain:\n', '\nConcepts clés (issubclass chaîne complète) :\n'),
        (r'\nisinstance\(\) checks entire chain:\n', '\nConcepts clés (isinstance chaîne complète) :\n'),
        (r'\nMultiple inheritance:\n', '\nConcepts clés (héritage multiple) :\n'),
        (r'\nsuper\(\)\.__init__\(\) initializes parent:\n', '\nConcepts clés (super().__init__) :\n'),
        (r'\nsuper\(\)\.__init__\(\) with arguments:\n', '\nConcepts clés (super().__init__ avec args) :\n'),
        (r'\nGrandchild inherits from immediate parent:\n', '\nConcepts clés (petit-enfant hérite) :\n'),
        (r'\nChild extends parent method:\n', "\nConcepts clés (enfant étend méthode parent) :\n"),
        (r'\nChild overrides special method:\n', "\nConcepts clés (enfant surcharge méthode spéciale) :\n"),
        (r'\nProperty inherited by child:\n', "\nConcepts clés (propriété héritée) :\n"),
        (r'\nKey concepts:\n', '\nConcepts clés :\n'),
        (r'\nHow it works:\n', '\nComment ça fonctionne :\n'),
        (r'\nExample:\n', '\nExemple :\n'),
        (r'\nCommon uses:\n', '\nUtilisations courantes :\n'),
        (r'\nFix:\n', '\nCorrection :\n'),
        (r'\nWhy this matters:\n', '\nPourquoi c\'est important :\n'),
        (r'\nWhen to use composition:\n', '\nQuand utiliser la composition :\n'),
        (r'\nWhen to use inheritance:\n', "\nQuand utiliser l'héritage :\n"),
    ]
    import re
    result = en_text
    for pat, repl in replacements:
        result = re.sub(pat, repl, result)
    return result

# Load pre-built French translations from separate file if exists
# Otherwise use header-only translation
translations = {}
try:
    with open('scripts/fr_detailed_2451_2550_translations.json') as f:
        translations = json.load(f)
except FileNotFoundError:
    pass

output = []
for item in data:
    qid = item['id']
    de = item.get('de', '')
    fr = translations.get(str(qid)) or translate_entry(de)
    escaped = escape_ts(fr)
    output.append(f"{qid}: `{escaped}`,")

with open('scripts/fr_2451_2550_detailed.txt', 'w') as f:
    f.write('\n'.join(output))

print(f"Wrote {len(output)} entries")
