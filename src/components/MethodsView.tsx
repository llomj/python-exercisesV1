import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useLanguage } from '../contexts/LanguageContext';

interface MethodsViewProps {
  onBack: () => void;
}

const METHOD_CHEAT_SHEET_EN = `# ===================== Python Ultimate Method Cheat Sheet =====================

# ----------------- Strings -----------------
str.capitalize()       # Capitalize first character
str.casefold()         # Lowercase for caseless comparison
str.center(w)          # Center in width
str.count(sub)         # Count occurrences
str.encode()           # Encode to bytes
str.endswith(s)        # Ends with?
str.expandtabs(n)      # Expand tabs
str.find(s)            # Find substring
str.format(...)        # Format string
str.format_map(d)      # Format using dict
str.index(s)           # Index of substring
str.isalnum()          # Alphanumeric?
str.isalpha()          # Alphabetic?
str.isascii()          # ASCII?
str.isdecimal()        # Decimal?
str.isdigit()          # Digit?
str.isidentifier()     # Valid identifier?
str.islower()          # Lowercase?
str.isnumeric()        # Numeric?
str.isprintable()      # Printable?
str.isspace()          # Whitespace?
str.istitle()          # Titlecase?
str.isupper()          # Uppercase?
str.join(iter)         # Join iterable
str.ljust(w)           # Left justify
str.lower()            # Lowercase
str.lstrip()           # Strip left
str.partition(s)       # Split into 3 parts
str.replace(a,b)       # Replace substring
str.rfind(s)           # Last occurrence
str.rindex(s)          # Last index
str.rjust(w)           # Right justify
str.rpartition(s)      # Split from right
str.rsplit(s)          # Split from right
str.rstrip()           # Strip right
str.split(s)           # Split string
str.splitlines()       # Split lines
str.startswith(p)      # Starts with prefix?
str.strip()            # Strip both ends
str.swapcase()         # Swap case
str.title()            # Titlecase
str.translate(t)       # Translate chars
str.upper()            # Uppercase
str.zfill(w)           # Zero pad left

# ----------------- Lists -----------------
list.append(x)         # Add element
list.extend(it)        # Add multiple
list.insert(i,x)       # Insert at index
list.remove(x)         # Remove element
list.pop(i=-1)         # Remove and return
list.clear()           # Clear list
list.index(x)          # Index of element
list.count(x)          # Count occurrences
list.sort(key=None, reverse=False) # Sort list
list.reverse()        # Reverse list
list.copy()            # Shallow copy

# ----------------- Dictionaries -----------------
dict.clear()             # Remove all items
dict.copy()              # Shallow copy
dict.fromkeys(seq,val)   # Create dict from keys
dict.get(k,default=None) # Get value, default if missing
dict.items()             # Return (key,value)
dict.keys()              # Keys view
dict.values()            # Values view
dict.pop(k,default=None) # Remove key
dict.popitem()           # Remove last (key,value)
dict.setdefault(k,v=None)# Get or set default
dict.update(other)       # Update dict

# ----------------- Tuples -----------------
tuple.count(x)           # Count occurrences
tuple.index(x)           # Index of element

# ----------------- Sets -----------------
set.add(e)                     # Add element
set.clear()                    # Clear set
set.copy()                     # Shallow copy
set.difference(*o)             # Return difference
set.difference_update(*o)      # Remove differences
set.discard(e)                 # Remove if present
set.intersection(*o)           # Intersection
set.intersection_update(*o)    # Keep intersection
set.isdisjoint(o)              # No elements in common?
set.issubset(o)                # Is subset?
set.issuperset(o)              # Is superset?
set.pop()                      # Remove arbitrary
set.remove(e)                  # Remove element
set.symmetric_difference(o)     # Elements in either, not both
set.symmetric_difference_update(o)# Update to symmetric difference
set.union(*o)                  # Union of sets
set.update(*o)                 # Add elements

# ----------------- Frozenset -----------------
# frozenset methods = same as set, but immutable (no add/remove/update)

# ----------------- Bytes & Bytearray -----------------
# b''.capitalize(), b''.casefold(), b''.decode(), b''.endswith(), b''.find(),
# b''.hex(), b''.isalnum(), b''.isalpha(), b''.isdigit(), b''.join(),
# b''.replace(), b''.split(), b''.startswith(), b''.strip(), b''.upper(), b''.lower()
# bytearray has extra mutable methods: append(), extend(), insert(), pop(), remove(), clear()

# ----------------- Memoryview -----------------
# memoryview(obj).tobytes(), .tolist(), .cast(format, shape)

# ----------------- Range -----------------
# range(start, stop, step) # Iterable
# len(range), range[i], range.index(val), range.count(val)

# ----------------- Numbers -----------------
# int, float, complex methods:
# abs(), as_integer_ratio(), bit_length(), conjugate(), from_bytes(), to_bytes()
# float: is_integer(), hex(), fromhex()
# complex: real, imag, conjugate()

# ----------------- Boolean -----------------
# bool inherits from int; no extra methods

# ----------------- File objects -----------------
# f.read(), f.readline(), f.readlines(), f.write(), f.writelines(),
# f.close(), f.flush(), f.seek(), f.tell()

# ----------------- Functions -----------------
# f.__call__(), __name__, __defaults__, __code__, __annotations__, __closure__

# ----------------- Classes -----------------
# .__init__(), __new__(), __str__(), __repr__(), __class__, __dict__, __mro__, __bases__

# ----------------- Modules -----------------
# .__name__, __file__, __dict__, __package__, __loader__, __path__

# ----------------- Exceptions -----------------
# args, with_traceback(), add_note()
`;

const METHOD_CHEAT_SHEET_FR = `# ===================== Aide-mémoire ultime des méthodes Python =====================

# ----------------- Chaînes -----------------
str.capitalize()       # Première lettre en majuscule
str.casefold()         # Minuscules pour comparaison sans casse
str.center(w)          # Centrer dans une largeur
str.count(sub)         # Compter les occurrences
str.encode()           # Encoder en bytes
str.endswith(s)        # Se termine par ?
str.expandtabs(n)      # Développer les tabulations
str.find(s)            # Trouver la sous-chaîne
str.format(...)        # Formater la chaîne
str.format_map(d)      # Formater avec un dict
str.index(s)           # Index de la sous-chaîne
str.isalnum()          # Alphanumérique ?
str.isalpha()          # Alphabétique ?
str.isascii()          # ASCII ?
str.isdecimal()        # Décimal ?
str.isdigit()          # Chiffre ?
str.isidentifier()     # Identifiant valide ?
str.islower()          # Minuscules ?
str.isnumeric()        # Numérique ?
str.isprintable()      # Imprimable ?
str.isspace()          # Espace blanc ?
str.istitle()          # Titre (titlecase) ?
str.isupper()          # Majuscules ?
str.join(iter)         # Joindre l'itérable
str.ljust(w)           # Justifier à gauche
str.lower()            # Minuscules
str.lstrip()           # Supprimer à gauche
str.partition(s)       # Découper en 3 parties
str.replace(a,b)       # Remplacer la sous-chaîne
str.rfind(s)           # Dernière occurrence
str.rindex(s)          # Dernier index
str.rjust(w)           # Justifier à droite
str.rpartition(s)      # Découper depuis la droite
str.rsplit(s)          # Découper depuis la droite
str.rstrip()           # Supprimer à droite
str.split(s)           # Découper la chaîne
str.splitlines()       # Découper les lignes
str.startswith(p)      # Commence par le préfixe ?
str.strip()            # Supprimer les deux extrémités
str.swapcase()         # Inverser la casse
str.title()            # Titre (titlecase)
str.translate(t)       # Traduire les caractères
str.upper()            # Majuscules
str.zfill(w)           # Remplir à gauche avec des zéros

# ----------------- Listes -----------------
list.append(x)         # Ajouter un élément
list.extend(it)        # Ajouter plusieurs
list.insert(i,x)       # Insérer à l'index
list.remove(x)         # Supprimer l'élément
list.pop(i=-1)         # Supprimer et renvoyer
list.clear()           # Vider la liste
list.index(x)          # Index de l'élément
list.count(x)          # Compter les occurrences
list.sort(key=None, reverse=False) # Trier la liste
list.reverse()        # Inverser la liste
list.copy()            # Copie superficielle

# ----------------- Dictionnaires -----------------
dict.clear()             # Supprimer tous les éléments
dict.copy()              # Copie superficielle
dict.fromkeys(seq,val)   # Créer un dict à partir des clés
dict.get(k,default=None) # Obtenir la valeur, défaut si absent
dict.items()             # Renvoyer (clé, valeur)
dict.keys()              # Vue des clés
dict.values()            # Vue des valeurs
dict.pop(k,default=None) # Supprimer la clé
dict.popitem()           # Supprimer le dernier (clé, valeur)
dict.setdefault(k,v=None)# Obtenir ou définir la valeur par défaut
dict.update(other)       # Mettre à jour le dict

# ----------------- Tuples -----------------
tuple.count(x)           # Compter les occurrences
tuple.index(x)           # Index de l'élément

# ----------------- Ensembles -----------------
set.add(e)                     # Ajouter un élément
set.clear()                    # Vider l'ensemble
set.copy()                     # Copie superficielle
set.difference(*o)             # Renvoyer la différence
set.difference_update(*o)      # Supprimer les différences
set.discard(e)                 # Supprimer si présent
set.intersection(*o)           # Intersection
set.intersection_update(*o)    # Garder l'intersection
set.isdisjoint(o)              # Aucun élément en commun ?
set.issubset(o)                # Est un sous-ensemble ?
set.issuperset(o)              # Est un sur-ensemble ?
set.pop()                      # Supprimer un élément arbitraire
set.remove(e)                  # Supprimer l'élément
set.symmetric_difference(o)     # Éléments dans l'un ou l'autre, pas les deux
set.symmetric_difference_update(o)# Mettre à jour avec la différence symétrique
set.union(*o)                  # Union des ensembles
set.update(*o)                 # Ajouter des éléments

# ----------------- Frozenset -----------------
# méthodes frozenset = comme set, mais immuable (pas de add/remove/update)

# ----------------- Bytes & Bytearray -----------------
# b''.capitalize(), b''.casefold(), b''.decode(), b''.endswith(), b''.find(),
# b''.hex(), b''.isalnum(), b''.isalpha(), b''.isdigit(), b''.join(),
# b''.replace(), b''.split(), b''.startswith(), b''.strip(), b''.upper(), b''.lower()
# bytearray a des méthodes mutables en plus : append(), extend(), insert(), pop(), remove(), clear()

# ----------------- Memoryview -----------------
# memoryview(obj).tobytes(), .tolist(), .cast(format, shape)

# ----------------- Range -----------------
# range(start, stop, step) # Itérable
# len(range), range[i], range.index(val), range.count(val)

# ----------------- Nombres -----------------
# méthodes int, float, complex :
# abs(), as_integer_ratio(), bit_length(), conjugate(), from_bytes(), to_bytes()
# float : is_integer(), hex(), fromhex()
# complex : real, imag, conjugate()

# ----------------- Booléen -----------------
# bool hérite de int ; pas de méthodes supplémentaires

# ----------------- Objets fichier -----------------
# f.read(), f.readline(), f.readlines(), f.write(), f.writelines(),
# f.close(), f.flush(), f.seek(), f.tell()

# ----------------- Fonctions -----------------
# f.__call__(), __name__, __defaults__, __code__, __annotations__, __closure__

# ----------------- Classes -----------------
# .__init__(), __new__(), __str__(), __repr__(), __class__, __dict__, __mro__, __bases__

# ----------------- Modules -----------------
# .__name__, __file__, __dict__, __package__, __loader__, __path__

# ----------------- Exceptions -----------------
# args, with_traceback(), add_note()
`;

export const MethodsView: React.FC<MethodsViewProps> = ({ onBack }) => {
  const { t, language } = useLanguage();
  const cheatSheet = language === 'fr' ? METHOD_CHEAT_SHEET_FR : METHOD_CHEAT_SHEET_EN;

  return (
    <div className="relative min-h-[400px] animate-in slide-in-from-left duration-300 pb-12">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/10"
        >
          <i className="fas fa-arrow-left"></i>
          <span>{t('operations.back')}</span>
        </button>
        <h2 className="text-xl font-black text-white flex items-center gap-2">
          <i className="fas fa-code text-indigo-400"></i> {t('app.methods')}
        </h2>
      </div>
      <p className="text-slate-400 text-sm mb-4">
        {t('methods.subtitle')}
      </p>
      <div className="rounded-2xl border border-white/10 overflow-hidden bg-slate-900/50 max-h-[70vh] overflow-y-auto">
        <SyntaxHighlighter
          language="python"
          style={oneDark}
          customStyle={{
            padding: '1rem 1.25rem',
            margin: 0,
            background: 'transparent',
            fontSize: '0.8125rem',
            lineHeight: '1.6',
            fontFamily: "'Fira Code', 'Monaco', 'Consolas', monospace",
            minHeight: '100%',
          }}
          codeTagProps={{
            style: {
              fontFamily: "'Fira Code', 'Monaco', 'Consolas', monospace",
              whiteSpace: 'pre',
              display: 'block',
            },
          }}
          PreTag="div"
          showLineNumbers={false}
        >
          {cheatSheet.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
