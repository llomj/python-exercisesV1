/**
 * French content for Fundamentals view. Same structure as fundamentalsData.ts.
 * Used when language === 'fr'.
 */

import type { FundamentalsSectionContent } from './fundamentalsData';

export const FUNDAMENTALS_BUILTINS_FR: FundamentalsSectionContent = {
  id: 'builtins',
  definition: 'Les fonctions intégrées sont toujours disponibles en Python sans import. Elles agissent sur les types courants et sont essentielles au code quotidien.',
  subsections: [
    {
      heading: 'Sortie et entrée',
      body: [
        'print(*objects, sep=" ", end="\\n") — écrit sur la sortie standard. sep joint les arguments ; end est ajouté après le dernier. Retourne None.',
        'input(prompt="") — lit une ligne depuis l\'entrée standard sous forme de chaîne. Le prompt optionnel est affiché avant la lecture. Le saut de ligne est retiré.',
      ],
    },
    {
      heading: 'Type et conversion',
      body: [
        'type(obj) — retourne l\'objet type de obj (ex. type(3) est int). Utile pour le débogage et les vérifications de type.',
        'int(x), float(x), str(x), bool(x) — conversion en entier, flottant, chaîne ou booléen. int("42") → 42 ; int(3.9) → 3 (troncature vers zéro).',
        'list(iterable), dict(...), set(iterable), tuple(iterable) — construisent des collections à partir d\'itérables ou d\'arguments.',
      ],
    },
    {
      heading: 'Séquences et itération',
      body: [
        'len(s) — retourne le nombre d\'éléments d\'une séquence ou collection (str, list, tuple, dict, set, etc.).',
        'range(stop) ou range(start, stop[, step]) — produit une séquence immuable d\'entiers. Souvent utilisé dans les boucles for : for i in range(5):.',
        'sorted(iterable, key=None, reverse=False) — retourne une nouvelle liste triée. Ne modifie pas l\'originale.',
        'reversed(seq) — retourne un itérateur inverse sur la séquence.',
        'enumerate(iterable, start=0) — produit des paires (index, élément). zip(iter1, iter2, ...) — produit des n-uplets d\'éléments correspondants.',
      ],
    },
    {
      heading: 'Numériques et agrégats',
      body: [
        'min(iterable) / min(a, b, ...) — valeur minimale. max(...) — valeur maximale. sum(iterable, start=0) — somme des nombres.',
        'abs(x) — valeur absolue. round(number[, ndigits]) — arrondi ; ndigits peut être négatif. divmod(a, b) — retourne (a // b, a % b).',
        'pow(base, exp[, mod]) — base ** exp, ou (base ** exp) % mod si mod est donné.',
      ],
    },
    {
      heading: 'Autres essentiels',
      body: [
        'help(obj) — aide interactive ; help(fonction) affiche la docstring. dir(obj) — liste des noms d\'attributs (y compris les méthodes).',
        'id(obj) — identité (adresse mémoire). hash(obj) — valeur de hachage pour dict/set ; doit être cohérente et comparable.',
        'open(file, mode="r", ...) — ouvre un fichier ; retourne un objet fichier. Utiliser with open(...) as f: pour fermer proprement.',
        'isinstance(obj, class_or_tuple) — True si obj est une instance du type donné. issubclass(cls, class_or_tuple) — pour la hiérarchie de classes.',
      ],
    },
  ],
  examples: [
    'print("Bonjour", 42, sep=" | ")   # Bonjour | 42',
    'n = int(input("Entrez un nombre : "))',
    'for i in range(10): print(i * i)',
    'total = sum([1, 2, 3, 4, 5])    # 15',
    's = sorted("python")           # [\'h\', \'n\', \'o\', \'p\', \'t\', \'y\']',
  ],
};

export const FUNDAMENTALS_SYNTAX_FR: FundamentalsSectionContent = {
  id: 'syntax',
  definition: 'Python utilise l\'indentation pour définir les blocs (règle « off-side ») et les deux-points pour introduire les en-têtes de bloc. Il n\'y a pas d\'accolades pour les blocs.',
  subsections: [
    {
      heading: 'Indentation',
      body: [
        'Les blocs sont définis par une indentation cohérente. Utiliser 4 espaces par niveau (PEP 8). Un même bloc doit avoir la même indentation ; mélanger tabulations et espaces est invalide.',
        'La première ligne d\'un bloc est l\'en-tête (ex. if condition:) ; les lignes indentées suivantes sont le corps du bloc.',
        'Les blocs vides utilisent pass : ex. def no_op(): pass.',
      ],
    },
    {
      heading: 'Deux-points',
      body: [
        'Un deux-points (:) termine une ligne qui commence un bloc : if, elif, else, for, while, def, class, with, try, except, finally, match, case.',
        'Exemple : if x > 0: alors la ligne suivante doit être indentée. Le deux-points indique à Python que « le bloc suivant appartient à cette instruction ».',
      ],
    },
    {
      heading: 'def et class',
      body: [
        'def name(params): — définition de fonction. Paramètres entre parenthèses ; valeurs par défaut avec =. Le corps est indenté sous def.',
        'class Name(Base): — définition de classe. Le corps (méthodes et attributs) est indenté. Les méthodes sont définies avec def method(self, ...):.',
      ],
    },
    {
      heading: 'Structure du flux de contrôle',
      body: [
        'if condition: ... elif condition: ... else: — une branche s\'exécute ; la première condition True l\'emporte.',
        'for variable in iterable: — boucle sur chaque élément. while condition: — boucle tant que la condition est vraie.',
        'try: ... except ExceptionType: ... finally: ... — gestion des exceptions. with expr as var: — gestionnaire de contexte.',
      ],
    },
    {
      heading: 'Commentaires et docstrings',
      body: [
        '# — commentaire sur une ligne. Tout ce qui suit # jusqu\'à la fin de la ligne est ignoré.',
        'Docstrings : une chaîne littérale comme première instruction dans un module, une fonction ou une classe devient l\'attribut __doc__. Utiliser """triple quotes""" pour le multi-ligne.',
      ],
    },
  ],
  examples: [
    'if x > 0:\n    print("positif")',
    'for item in items:\n    process(item)',
    'def greet(name):\n    """Dis bonjour."""\n    return f"Bonjour, {name}"',
  ],
};

export const FUNDAMENTALS_ERRORS_FR: FundamentalsSectionContent = {
  id: 'errors',
  definition: 'Quand Python ne peut pas exécuter une ligne, il lève une exception. Connaître les plus courantes aide à corriger le code rapidement.',
  subsections: [
    {
      heading: 'NameError',
      body: [
        'Un nom (variable ou fonction) est utilisé avant d\'être défini, ou il est mal orthographié. Corriger : définir la variable ou la fonction avant usage, ou corriger l\'orthographe.',
        'Exemple : print(unknown) → NameError: name \'unknown\' is not defined.',
      ],
    },
    {
      heading: 'TypeError',
      body: [
        'Une opération ou une fonction est appliquée au mauvais type (ex. additionner int et str, ou appeler un non-callable). Corriger : convertir les types (int(), str()) ou vérifier ce qu\'on passe.',
        'Exemple : "5" + 3 → TypeError. Utiliser int("5") + 3 ou "5" + str(3).',
      ],
    },
    {
      heading: 'IndentationError / SyntaxError',
      body: [
        'IndentationError : indentation incohérente ou indent/dedent inattendu. Corriger : utiliser 4 espaces de façon cohérente ; mettre des deux-points avant les blocs.',
        'SyntaxError : syntaxe invalide (ex. deux-points, parenthèse ou guillemet manquant). Corriger : vérifier la ligne indiquée par le curseur ; équilibrer parenthèses et guillemets.',
      ],
    },
    {
      heading: 'KeyError et IndexError',
      body: [
        'KeyError : une clé n\'est pas dans le dictionnaire. Corriger : vérifier que la clé existe (key in d) ou utiliser d.get(key, default).',
        'IndexError : indice hors plage pour une séquence (list, tuple, string). Corriger : utiliser des indices valides de 0 à len(seq)-1, ou vérifier avant d\'indexer.',
      ],
    },
    {
      heading: 'AttributeError et ValueError',
      body: [
        'AttributeError : l\'objet n\'a pas d\'attribut de ce nom. Corriger : vérifier l\'orthographe et que l\'objet est du bon type (ex. dir(obj) pour voir les attributs).',
        'ValueError : la valeur est incorrecte pour l\'opération (ex. int("abc")). Corriger : valider l\'entrée ou utiliser try/except pour les données invalides.',
      ],
    },
    {
      heading: 'ZeroDivisionError',
      body: [
        'Division ou modulo par zéro. Corriger : vérifier que le diviseur n\'est pas zéro avant de diviser, ou utiliser if b != 0: ... else ... pour le gérer.',
      ],
    },
  ],
  examples: [
    '# NameError : définir d\'abord\nx = 10\nprint(x)',
    '# TypeError : utiliser les mêmes types\nstr(42) + " pommes"',
    '# KeyError : vérifier ou utiliser .get()\nd = {"a": 1}\nd.get("b", 0)',
  ],
};

export const FUNDAMENTALS_DATATYPES_FR: FundamentalsSectionContent = {
  id: 'datatypes',
  definition: 'Python dispose d\'un petit ensemble de types intégrés. Choisir le bon rend le code plus clair et plus efficace.',
  subsections: [
    {
      heading: 'int — entiers',
      body: [
        'Nombres entiers : 0, 1, -5, 10**100. Utiliser pour compter, les indices et l\'arithmétique exacte. Pas de taille maximale fixe.',
      ],
    },
    {
      heading: 'float — flottants',
      body: [
        'Approximations décimales : 3.14, -0.5, 1e10. Utiliser pour les mesures et les calculs scientifiques. Attention aux arrondis (ex. 0.1 + 0.2 != 0.3 en valeur exacte).',
      ],
    },
    {
      heading: 'str — chaînes',
      body: [
        'Texte : "hello", \'world\', """multi\nligne""". Immuable. Utiliser pour le texte, le contenu de fichiers et les messages. Indexation et découpage : s[0], s[1:4].',
      ],
    },
    {
      heading: 'bool — booléens',
      body: [
        'True et False. Résultat des comparaisons et des conditions. Beaucoup de valeurs sont « truthy » ou « falsy » dans les conditions (ex. 0, "", [] sont falsy).',
      ],
    },
    {
      heading: 'list — séquence mutable',
      body: [
        'Ordonnée, modifiable : [1, 2, 3], []. Utiliser quand l\'ordre compte et qu\'on doit ajouter, insérer ou supprimer. Indexée par un entier.',
      ],
    },
    {
      heading: 'tuple — séquence immuable',
      body: [
        '(1, 2, 3) ou 1, 2, 3. Utiliser pour des enregistrements fixes ou comme clés de dict. Légèrement plus efficace que les listes quand on n\'a pas besoin de modifier.',
      ],
    },
    {
      heading: 'dict — mapping',
      body: [
        'Paires clé–valeur : {"a": 1, "b": 2}. Utiliser pour les recherches par clé (noms, IDs, options). Les clés doivent être hachables (ex. str, int, tuple).',
      ],
    },
    {
      heading: 'set — collection unique non ordonnée',
      body: [
        '{1, 2, 3} ou set(iterable). Pas de doublons ; pas d\'ordre. Utiliser pour les tests d\'appartenance et la déduplication. Les éléments doivent être hachables.',
      ],
    },
    {
      heading: 'None',
      body: [
        'Une seule valeur None. Souvent utilisé pour « pas de résultat » ou par défaut. Les fonctions sans return retournent None.',
      ],
    },
  ],
  examples: [
    'n = 42                    # int',
    'name = "Python"           # str',
    'xs = [1, 2, 3]            # list',
    'd = {"x": 1, "y": 2}      # dict',
    'unique = {1, 2, 2, 3}     # set → {1, 2, 3}',
  ],
};

export const FUNDAMENTALS_LOGIC_FR: FundamentalsSectionContent = {
  id: 'logic',
  definition: 'Les comparaisons et la logique booléenne contrôlent les décisions et les boucles. Python utilise l\'évaluation en court-circuit pour and et or.',
  subsections: [
    {
      heading: 'Opérateurs de comparaison',
      body: [
        '== (égal), != (différent), <, <=, >, >=. Retournent True ou False. Comparaisons enchaînées : a < b < c équivaut à a < b and b < c (b n\'est évalué qu\'une fois).',
        'is — identité (même objet en mémoire). is not — identité négative. N\'utiliser is que pour None ou des sentinelles : if x is None.',
      ],
    },
    {
      heading: 'and, or, not',
      body: [
        'and : évalue la gauche ; si falsy, la retourne ; sinon retourne la droite. or : si la gauche est truthy, la retourne ; sinon la droite.',
        'not x — inverse la valeur de vérité. Priorité : not puis and puis or. Utiliser des parenthèses quand on mélange avec les comparaisons.',
      ],
    },
    {
      heading: 'Court-circuit',
      body: [
        'and : si le côté gauche est False, le droit n\'est pas évalué. or : si le côté gauche est True, le droit n\'est pas évalué.',
        'Utile pour les gardes : (len(lst) > 0 and lst[0] == 1) évite une IndexError quand lst est vide.',
      ],
    },
    {
      heading: 'Valeur de vérité',
      body: [
        'Dans les conditions, les valeurs sont traitées comme True ou False. Falsy : False, None, 0, 0.0, "", [], (), {}, set(). Tout le reste est truthy.',
        'Donc : if items: ne s\'exécute que si items est non vide ; if not name: quand name est vide ou None.',
      ],
    },
  ],
  examples: [
    'if 0 <= i < len(arr): ...',
    'result = x or default    # default quand x est falsy',
    'if name and name.strip(): ...',
    'if value is None: ...',
  ],
};

export const FUNDAMENTALS_SECTIONS_FR: FundamentalsSectionContent[] = [
  FUNDAMENTALS_BUILTINS_FR,
  FUNDAMENTALS_SYNTAX_FR,
  FUNDAMENTALS_ERRORS_FR,
  FUNDAMENTALS_DATATYPES_FR,
  FUNDAMENTALS_LOGIC_FR,
];
