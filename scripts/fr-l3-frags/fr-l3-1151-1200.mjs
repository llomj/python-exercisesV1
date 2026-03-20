/** Level 3 FR 1151–1200 — truthiness edge cases, bool gotchas. Aligned with level3_expert_b.ts. */
export default {
  1151: `bool(float("nan")) → True : NaN est truthy ! Seuls 0 et 0.0 sont falsy parmi les nombres.

Débutant :
• float("nan") crée une valeur NaN (Not a Number).
• bool() teste la vérité : NaN n'est pas zéro.
• Résultat : True.

Intermédiaire :
• NaN est une valeur spéciale IEEE 754.
• La règle Python : seuls 0 (int) et 0.0 (float) sont falsy.
• NaN != NaN (même NaN n'est pas égal à lui-même).
• Utiliser math.isnan() pour détecter NaN, jamais la truthiness.

Expert :
• C'est un piège classique : NaN signifie « pas un nombre » mais reste truthy.
• if value: passera pour NaN — ne pas utiliser la truthiness pour valider des nombres.

Concepts clés :
• NaN truthy, IEEE 754, math.isnan(), règle des nombres falsy.

Distinctions clés :
• bool(float("nan")) (True) vs bool(0.0) (False) ; NaN vs zéro.

Fonctionnement :
• float("nan") crée un NaN ; bool() vérifie si non-zéro ; NaN ≠ 0 → True.

Exécution étape par étape :
1. float("nan") → valeur NaN.
2. bool(NaN) : est-ce 0 ou 0.0 ? Non.
3. Retourne True.

Ordre des opérations :
• float("nan") d'abord, puis bool() sur le résultat.

Cas d'utilisation courants :
• Détection de NaN avec math.isnan(), validation de données numériques.

Cas limites :
• float("nan") != float("nan") ; NaN dans des calculs flottants.

Considérations de performance :
• bool() O(1) ; math.isnan() également O(1).

Exemples :
• bool(float("nan")) → True
• math.isnan(float("nan")) → True

Remarques :
• Ne jamais tester NaN par truthiness ; toujours math.isnan().`,

  1152: `bool(float("inf")) → True : l'infini positif est truthy. Seuls 0 et 0.0 sont falsy parmi les floats.

Débutant :
• float("inf") crée l'infini positif.
• bool() teste : inf n'est pas zéro.
• Résultat : True.

Intermédiaire :
• L'infini est une valeur IEEE 754 valide.
• Toute valeur non-zéro est truthy.
• math.isinf() permet de détecter l'infini.

Expert :
• bool(float("inf")) et bool(float("-inf")) → True.
• Seuls 0.0 et -0.0 sont falsy parmi les floats.

Concepts clés :
• Infini IEEE 754, truthiness des floats, math.isinf().

Distinctions clés :
• bool(float("inf")) (True) vs bool(0.0) (False).

Fonctionnement :
• float("inf") → inf ; bool(inf) : inf ≠ 0 → True.

Exécution étape par étape :
1. float("inf") → inf.
2. bool(inf) : non-zéro → True.

Ordre des opérations :
• float("inf") puis bool().

Cas d'utilisation courants :
• Calculs avec infini, math.isinf() pour validation.

Cas limites :
• float("-inf") aussi truthy ; 1/0.0 → inf.

Considérations de performance :
• O(1).

Exemples :
• bool(float("inf")) → True
• bool(float("-inf")) → True

Remarques :
• L'infini n'est pas zéro, donc truthy.`,

  1153: `bool(float("-inf")) → True : l'infini négatif est truthy, comme l'infini positif.

Débutant :
• float("-inf") crée l'infini négatif.
• bool() : -inf n'est pas zéro → True.

Intermédiaire :
• -inf et +inf sont tous deux truthy.
• Seuls 0.0 et -0.0 sont falsy parmi les floats.
• Le signe n'affecte pas la truthiness.

Expert :
• Même règle que pour inf : tout float non-zéro est truthy.

Concepts clés :
• Infini négatif IEEE 754, truthiness identique à +inf.

Distinctions clés :
• bool(-0.0) (False) vs bool(float("-inf")) (True).

Fonctionnement :
• float("-inf") → -inf ; bool(-inf) → True.

Exécution étape par étape :
1. float("-inf") → -inf.
2. bool(-inf) : non-zéro → True.

Ordre des opérations :
• float("-inf") puis bool().

Cas d'utilisation courants :
• Calculs avec infini négatif, débordements.

Cas limites :
• -inf < 0 ; -inf + inf → nan.

Considérations de performance :
• O(1).

Exemples :
• bool(float("-inf")) → True
• -float("inf") == float("-inf") → True

Remarques :
• Le signe de l'infini ne change pas la truthiness.`,

  1154: `bool(0.0) → False : 0.0 est le seul float falsy (avec -0.0).

Débutant :
• 0.0 est la représentation flottante de zéro.
• bool(0.0) → False.

Intermédiaire :
• Python traite tous les zéros numériques comme falsy : 0, 0.0, 0j, Decimal(0).
• Tout float non-zéro est truthy, même 1e-300.

Expert :
• Règle cohérente sur tous les types numériques.

Concepts clés :
• Zéro flottant falsy, cohérence des types numériques.

Distinctions clés :
• bool(0.0) (False) vs bool(0.1) (True).

Fonctionnement :
• 0.0 est numériquement zéro ; bool() retourne False.

Exécution étape par étape :
1. 0.0 évalué.
2. bool(0.0) : zéro → False.

Ordre des opérations :
• Littéral 0.0, puis bool().

Cas d'utilisation courants :
• Tests if x:, valeurs par défaut.

Cas limites :
• -0.0 aussi falsy ; 0j falsy.

Considérations de performance :
• O(1).

Exemples :
• bool(0.0) → False
• bool(1e-300) → True

Remarques :
• Seul le zéro numérique est falsy parmi les nombres.`,

  1155: `bool(-0.0) → False : -0.0 est encore zéro, donc falsy.

Débutant :
• -0.0 existe en IEEE 754.
• bool(-0.0) → False.
• -0.0 == 0.0 → True.

Intermédiaire :
• IEEE 754 distingue +0.0 et -0.0.
• Python les traite tous deux comme falsy.
• math.copysign() peut les distinguer.

Expert :
• -0.0 et 0.0 sont presque indiscernables en Python.
• Seul copysign(1, -0.0) → -1.0 les différencie.

Concepts clés :
• Zéro négatif IEEE 754, falsy comme 0.0.

Distinctions clés :
• bool(-0.0) (False) vs bool(float("-inf")) (True).

Fonctionnement :
• -0.0 représente zéro ; bool() → False.

Exécution étape par étape :
1. -0.0 évalué.
2. bool(-0.0) : zéro → False.

Ordre des opérations :
• Littéral -0.0, puis bool().

Cas d'utilisation courants :
• Calculs avec signe, division par zéro.

Cas limites :
• 1/-0.0 → -inf ; copysign distingue les zéros.

Considérations de performance :
• O(1).

Exemples :
• bool(-0.0) → False
• -0.0 == 0.0 → True

Remarques :
• -0.0 et 0.0 sont égaux et tous deux falsy.`,

  1156: `bool("0") → True : la chaîne "0" est non vide, donc truthy. Seule "" est falsy.

Débutant :
• "0" est une chaîne d'un caractère.
• Les chaînes : vide → falsy, non vide → truthy.
• "0" a une longueur 1 → True.

Intermédiaire :
• En PHP/JS, "0" peut être falsy ; en Python, jamais.
• Toutes les chaînes non vides sont truthy : "0", "False", "None", " ".
• Le contenu n'a pas d'importance pour la truthiness.

Expert :
• Piège classique : le caractère '0' n'a pas de sens spécial.
• bool("0") ≠ bool(0) : "0" est truthy, 0 est falsy.

Concepts clés :
• Truthiness des chaînes = longueur > 0, pas le contenu.

Distinctions clés :
• bool("0") (True) vs bool(0) (False) ; str vs int.

Fonctionnement :
• "0" a len 1 ; bool() vérifie len > 0 → True.

Exécution étape par étape :
1. "0" évalué (1 caractère).
2. bool("0") : non vide → True.

Ordre des opérations :
• Littéral "0", puis bool().

Cas d'utilisation courants :
• Validation d'entrée utilisateur, parsing.

Cas limites :
• " " (espace) truthy ; "" falsy.

Considérations de performance :
• O(1) pour len.

Exemples :
• bool("0") → True
• bool("") → False

Remarques :
• En Python, seul "" est falsy parmi les chaînes.`,

  1157: `bool("False") → True : la chaîne "False" a 5 caractères, donc truthy.

Débutant :
• "False" est une chaîne, pas le booléen False.
• Chaîne non vide → truthy.
• Résultat : True.

Intermédiaire :
• Erreur courante : confondre str "False" et bool False.
• bool("False") ≠ bool(False).
• Le mot "False" dans une chaîne n'a pas de sens spécial.

Expert :
• bool(False) → False ; bool("False") → True.
• La truthiness des chaînes ne lit pas le contenu.

Concepts clés :
• str vs bool, truthiness = longueur pour les chaînes.

Distinctions clés :
• bool("False") (True) vs bool(False) (False).

Fonctionnement :
• "False" a 5 caractères ; bool() → True.

Exécution étape par étape :
1. "False" évalué.
2. len("False") > 0 → True.

Ordre des opérations :
• Littéral "False", puis bool().

Cas d'utilisation courants :
• Parsing de config, entrée utilisateur.

Cas limites :
• "false", "FALSE" aussi truthy (chaînes non vides).

Considérations de performance :
• O(1).

Exemples :
• bool("False") → True
• bool("") → False

Remarques :
• "False" n'est pas converti en bool ; c'est une chaîne.`,

  1158: `bool("None") → True : la chaîne "None" a 4 caractères, donc truthy.

Débutant :
• "None" est une chaîne, pas l'objet None.
• Chaîne non vide → truthy.
• Résultat : True.

Intermédiaire :
• bool(None) → False (objet None falsy).
• bool("None") → True (chaîne non vide truthy).
• Types et valeurs différents.

Expert :
• None (NoneType) vs "None" (str) : distinction cruciale.
• Le contenu textuel n'a aucun effet sur la truthiness.

Concepts clés :
• str "None" vs objet None, truthiness par type.

Distinctions clés :
• bool("None") (True) vs bool(None) (False).

Fonctionnement :
• "None" a 4 caractères ; bool() → True.

Exécution étape par étape :
1. "None" évalué.
2. len > 0 → True.

Ordre des opérations :
• Littéral "None", puis bool().

Cas d'utilisation courants :
• Parsing, validation de chaînes.

Cas limites :
• "none", "NONE" aussi truthy.

Considérations de performance :
• O(1).

Exemples :
• bool("None") → True
• bool(None) → False

Remarques :
• "None" et None sont des types différents.`,

  1159: `bool([0]) → True : la liste [0] est non vide (1 élément), donc truthy — même si 0 est falsy.

Débutant :
• [0] contient un élément.
• Liste non vide → truthy.
• L'élément 0 étant falsy n'a pas d'importance.

Intermédiaire :
• La truthiness des conteneurs dépend de la longueur, pas du contenu.
• bool([0]), bool([False]), bool([None]) → True.
• bool([]) → False.

Expert :
• Erreur courante : croire que bool([0]) serait False car 0 est falsy.
• Python vérifie le conteneur, pas son contenu.

Concepts clés :
• Truthiness des conteneurs = longueur, pas contenu.

Distinctions clés :
• bool([0]) (True) vs bool(0) (False) ; conteneur vs élément.

Fonctionnement :
• len([0]) == 1 ; bool() → True.

Exécution étape par étape :
1. [0] évalué.
2. len([0]) > 0 → True.

Ordre des opérations :
• Construction de la liste, puis bool().

Cas d'utilisation courants :
• Tests if items:, liste par défaut.

Cas limites :
• [[]] truthy (liste avec un élément).

Considérations de performance :
• O(1).

Exemples :
• bool([0]) → True
• bool([]) → False

Remarques :
• Le conteneur est évalué, pas ses éléments.`,

  1160: `bool([[]]) → True : la liste externe a un élément (une liste vide), donc non vide et truthy.

Débutant :
• [[]] contient un élément : [].
• Liste externe : longueur 1 → truthy.
• La liste interne [] étant falsy n'affecte pas la liste externe.

Intermédiaire :
• Truthiness des conteneurs imbriqués : seule la longueur du conteneur direct compte.
• bool([]) → False ; bool([[]]) → True (1 élément).

Expert :
• La liste externe a len 1 ; l'élément [] est falsy mais la liste elle-même est truthy.

Concepts clés :
• Conteneurs imbriqués, truthiness du niveau externe.

Distinctions clés :
• bool([[]]) (True) vs bool([]) (False).

Fonctionnement :
• len([[]]) == 1 ; bool() → True.

Exécution étape par étape :
1. [[]] évalué.
2. Liste externe : 1 élément → True.

Ordre des opérations :
• Construction, puis bool() sur le conteneur externe.

Cas d'utilisation courants :
• Structures imbriquées, matrices.

Cas limites :
• [[], []] truthy ; [ [], [] ] truthy.

Considérations de performance :
• O(1).

Exemples :
• bool([[]]) → True
• bool([[], []]) → True

Remarques :
• Seul le conteneur externe est testé.`,

  1161: `bool((0,)) → True : le tuple (0,) a un élément, donc non vide et truthy.

Débutant :
• (0,) est un tuple avec un élément (la virgule le définit).
• Tuple non vide → truthy.
• (0) sans virgule serait l'entier 0, pas un tuple.

Intermédiaire :
• Les tuples suivent la même règle que les listes : vide → falsy.
• (0,) a len 1 ; l'élément 0 falsy n'affecte pas le tuple.
• Syntaxe : (0,) = tuple ; (0) = int.

Expert :
• bool((0,)) → True (tuple non vide).
• bool((0)) → bool(0) → False (parenthèses inutiles, c'est 0).

Concepts clés :
• Tuple à un élément, virgule obligatoire, truthiness des conteneurs.

Distinctions clés :
• (0,) vs (0) ; tuple vs int.

Fonctionnement :
• (0,) est un tuple de 1 élément ; bool() → True.

Exécution étape par étape :
1. (0,) évalué comme tuple.
2. len((0,)) == 1 → True.

Ordre des opérations :
• Construction du tuple, puis bool().

Cas d'utilisation courants :
• Tuples à un élément, retour de fonctions.

Cas limites :
• () falsy ; (0,) truthy.

Considérations de performance :
• O(1).

Exemples :
• bool((0,)) → True
• bool(()) → False

Remarques :
• La virgule fait la différence entre tuple et int.`,

  1162: `bool({0: 0}) → True : le dict {0: 0} a une entrée, donc non vide et truthy.

Débutant :
• {0: 0} contient une paire clé-valeur.
• Dict non vide → truthy.
• La clé et la valeur sont falsy, mais le dict lui-même est truthy.

Intermédiaire :
• La truthiness des dicts dépend du nombre d'entrées.
• len({0: 0}) == 1 ; bool() → True.
• La truthiness des clés/valeurs est ignorée.

Expert :
• Conteneur : seule la longueur compte.
• bool({}) → False ; bool({False: None}) → True.

Concepts clés :
• Truthiness des dicts = nombre d'entrées.

Distinctions clés :
• bool({0: 0}) (True) vs bool({}) (False).

Fonctionnement :
• len({0: 0}) == 1 ; bool() → True.

Exécution étape par étape :
1. {0: 0} évalué.
2. Dict non vide → True.

Ordre des opérations :
• Construction du dict, puis bool().

Cas d'utilisation courants :
• Tests if config:, dict par défaut.

Cas limites :
• {False: 0} truthy ; {} falsy.

Considérations de performance :
• O(1).

Exemples :
• bool({0: 0}) → True
• bool({}) → False

Remarques :
• Les clés/valeurs falsy n'affectent pas la truthiness du dict.`,

  1163: `bool(frozenset()) → False : un frozenset vide est falsy.

Débutant :
• frozenset() crée un ensemble vide immuable.
• Conteneur vide → falsy.
• Même règle que set(), [], {}.

Intermédiaire :
• frozenset est la version immuable de set.
• Tous les conteneurs vides sont falsy en Python.
• frozenset() est hashable (contrairement à set()).

Expert :
• bool(frozenset()) → False ; bool(frozenset({1})) → True.

Concepts clés :
• frozenset immuable, truthiness = vide/falsy.

Distinctions clés :
• frozenset() vs set() ; immuable vs mutable.

Fonctionnement :
• frozenset() → vide ; len 0 ; bool() → False.

Exécution étape par étape :
1. frozenset() créé.
2. len == 0 → False.

Ordre des opérations :
• frozenset(), puis bool().

Cas d'utilisation courants :
• Ensembles immuables, clés de dict.

Cas limites :
• frozenset({0}) truthy (1 élément).

Considérations de performance :
• O(1).

Exemples :
• bool(frozenset()) → False
• bool(frozenset({1})) → True

Remarques :
• frozenset vide = falsy comme tout conteneur vide.`,

  1164: `bool(frozenset({0})) → True : frozenset({0}) a un élément, donc non vide et truthy.

Débutant :
• frozenset({0}) contient l'élément 0.
• len == 1 → truthy.
• L'élément 0 étant falsy n'a pas d'importance.

Intermédiaire :
• La truthiness des conteneurs dépend de la longueur.
• frozenset({0}) a un élément ; bool() → True.
• Même règle que pour set, list, dict.

Expert :
• Le conteneur est évalué, pas ses éléments.
• bool(frozenset()) → False ; bool(frozenset({0})) → True.

Concepts clés :
• Truthiness des frozensets = longueur.

Distinctions clés :
• bool(frozenset({0})) (True) vs bool(frozenset()) (False).

Fonctionnement :
• frozenset({0}) a 1 élément ; bool() → True.

Exécution étape par étape :
1. frozenset({0}) créé.
2. len > 0 → True.

Ordre des opérations :
• frozenset({0}), puis bool().

Cas d'utilisation courants :
• Ensembles immuables avec éléments.

Cas limites :
• frozenset({False}) truthy.

Considérations de performance :
• O(1).

Exemples :
• bool(frozenset({0})) → True
• bool(frozenset()) → False

Remarques :
• La truthiness des éléments est ignorée.`,

  1165: `bool(bytearray()) → False : un bytearray vide est falsy.

Débutant :
• bytearray() crée une séquence d'octets vide mutable.
• Conteneur vide → falsy.
• Même règle que bytes, str, list.

Intermédiaire :
• bytearray est une séquence mutable d'octets (0-255).
• len(bytearray()) == 0 ; bool() → False.
• bool(bytearray(b'\\x00')) → True (1 octet).

Expert :
• Tous les conteneurs vides sont falsy en Python.
• bytearray() vs bytes() : mutable vs immuable.

Concepts clés :
• bytearray mutable, truthiness = vide/falsy.

Distinctions clés :
• bool(bytearray()) (False) vs bool(bytearray(b'\\x00')) (True).

Fonctionnement :
• bytearray() → vide ; len 0 ; bool() → False.

Exécution étape par étape :
1. bytearray() créé.
2. len == 0 → False.

Ordre des opérations :
• bytearray(), puis bool().

Cas d'utilisation courants :
• Manipulation de données binaires.

Cas limites :
• bytearray(b'') équivalent à bytearray().

Considérations de performance :
• O(1).

Exemples :
• bool(bytearray()) → False
• bool(bytearray(b'x')) → True

Remarques :
• bytearray vide = falsy comme tout conteneur vide.`,

  1166: `bool(bytearray(b"\\x00")) → True : le bytearray a un octet (octet nul), donc non vide et truthy.

Débutant :
• b"\\x00" est un octet de valeur 0.
• len(bytearray(b"\\x00")) == 1 → truthy.
• L'octet 0 étant falsy n'affecte pas la truthiness du conteneur.

Intermédiaire :
• Piège : l'octet \\x00 vaut 0 (falsy comme int).
• Mais le conteneur a 1 élément → truthy.
• Truthiness du conteneur ≠ truthiness des éléments.

Expert :
• bytearray(b"\\x00") a len 1 ; bool() → True.
• La valeur du byte (0) est ignorée pour la truthiness du conteneur.

Concepts clés :
• Conteneur vs élément, octet nul, truthiness.

Distinctions clés :
• bool(bytearray(b"\\x00")) (True) vs bool(0) (False).

Fonctionnement :
• len(bytearray(b"\\x00")) == 1 ; bool() → True.

Exécution étape par étape :
1. bytearray(b"\\x00") créé (1 octet).
2. len > 0 → True.

Ordre des opérations :
• bytearray(b"\\x00"), puis bool().

Cas d'utilisation courants :
• Données binaires avec octets nuls.

Cas limites :
• bytearray(b"\\x00\\x00") truthy (2 octets).

Considérations de performance :
• O(1).

Exemples :
• bool(bytearray(b"\\x00")) → True
• bool(bytearray()) → False

Remarques :
• Le conteneur est non vide ; le contenu n'a pas d'importance.`,

  1167: `bool(range(0)) → False : range(0) est vide (aucun élément), donc falsy.

Débutant :
• range(0) génère une séquence vide (de 0 à 0 exclus).
• Séquence vide → falsy.
• Même règle que liste vide.

Intermédiaire :
• range(0) équivaut à range(0, 0) → aucun entier.
• len(range(0)) == 0 ; bool() → False.
• bool(range(5, 5)) → False (start == stop).

Expert :
• bool(range(0)) → False ; bool(range(1)) → True (contient 0).
• range implémente __bool__ efficacement (sans itérer).

Concepts clés :
• range vide, truthiness des séquences.

Distinctions clés :
• bool(range(0)) (False) vs bool(range(1)) (True).

Fonctionnement :
• range(0) génère 0 éléments ; bool() → False.

Exécution étape par étape :
1. range(0) créé.
2. Aucun élément → False.

Ordre des opérations :
• range(0), puis bool().

Cas d'utilisation courants :
• Boucles conditionnelles, validation de plages.

Cas limites :
• range(1, 1) falsy ; range(0, 0, -1) falsy.

Considérations de performance :
• O(1) ; range n'itère pas pour __bool__.

Exemples :
• bool(range(0)) → False
• bool(range(1)) → True

Remarques :
• range vide = falsy.`,

  1168: `bool(range(1)) → True : range(1) contient un élément (0), donc non vide et truthy.

Débutant :
• range(1) génère [0] — un élément.
• Séquence non vide → truthy.
• bool(range(1)) → True.

Intermédiaire :
• range(1) = range(0, 1) → contient 0.
• len(range(1)) == 1 ; bool() → True.
• Python vérifie efficacement sans itérer.

Expert :
• range implémente __bool__ via la longueur.
• bool(range(0)) → False ; bool(range(10)) → True.

Concepts clés :
• range non vide, __bool__ efficace.

Distinctions clés :
• bool(range(1)) (True) vs bool(range(0)) (False).

Fonctionnement :
• range(1) a au moins un élément ; bool() → True.

Exécution étape par étape :
1. range(1) créé.
2. Au moins un élément → True.

Ordre des opérations :
• range(1), puis bool().

Cas d'utilisation courants :
• Tests if range:, boucles conditionnelles.

Cas limites :
• range(1, 2) truthy ; range(2, 1) falsy.

Considérations de performance :
• O(1).

Exemples :
• bool(range(1)) → True
• bool(range(0)) → False

Remarques :
• range non vide = truthy.`,

  1169: `bool(object()) → True : les objets personnalisés sont truthy par défaut.

Débutant :
• object() crée une instance de base.
• Par défaut, tous les objets sont truthy.
• Résultat : True.

Intermédiaire :
• Un objet est falsy seulement si __bool__ retourne False ou __len__ retourne 0.
• Sans __bool__ ni __len__, bool() retourne toujours True.
• Comportement de base hérité par toutes les classes.

Expert :
• Définir __bool__(self) pour contrôler la truthiness.
• __len__ retournant 0 → falsy, si __bool__ absent.
• __bool__ a priorité sur __len__.

Concepts clés :
• __bool__, __len__, truthiness par défaut des objets.

Distinctions clés :
• object() (True) vs classe avec __bool__ retournant False.

Fonctionnement :
• object() n'a pas __bool__ False ; défaut → True.

Exécution étape par étape :
1. object() créé.
2. Pas de __bool__/__len__ falsy → True.

Ordre des opérations :
• object(), puis bool().

Cas d'utilisation courants :
• Classes personnalisées, tests if obj.

Cas limites :
• class E: __len__=lambda: 0 → bool(E()) falsy.

Considérations de performance :
• O(1).

Exemples :
• bool(object()) → True
• class Empty: pass; bool(Empty()) → True

Remarques :
• Par défaut, tout objet est truthy.`,

  1170: `None or 0 or "" or [] or "found!" → "found!" : or retourne la première valeur truthy.

Débutant :
• or évalue de gauche à droite.
• None, 0, "", [] sont falsy → ignorés.
• "found!" est truthy → retourné.

Intermédiaire :
• or ne retourne pas True/False mais la valeur elle-même.
• Retourne la première truthy, ou la dernière si toutes falsy.
• Évaluation court-circuit : s'arrête au premier truthy.

Expert :
• or retourne la VALEUR, pas bool(valeur).
• "found!" est retourné, pas True.
• Si tout falsy : retourne la dernière valeur.

Concepts clés :
• or court-circuit, retour de valeur, truthiness.

Distinctions clés :
• or (retourne valeur) vs and (retourne valeur) vs == (retourne bool).

Fonctionnement :
• None falsy → skip ; 0 falsy → skip ; "" falsy → skip ; [] falsy → skip ; "found!" truthy → return.

Exécution étape par étape :
1. None → falsy ; skip.
2. 0 → falsy ; skip.
3. "" → falsy ; skip.
4. [] → falsy ; skip.
5. "found!" → truthy ; retourne "found!".

Ordre des opérations :
• Gauche à droite, court-circuit au premier truthy.

Cas d'utilisation courants :
• Valeur par défaut : x = user or default.

Cas limites :
• 0 or 1 → 1 ; "" or "x" → "x".

Considérations de performance :
• Court-circuit évite d'évaluer le reste.

Exemples :
• None or 0 or "found!" → "found!"
• [] or [1,2] → [1,2]

Remarques :
• or retourne toujours une des opérandes, jamais True/False.`,

  1171: `True + True + True → 3 : bool est sous-classe de int, True vaut 1 en arithmétique.

Débutant :
• True + True = 1 + 1 = 2.
• 2 + True = 2 + 1 = 3.
• Le résultat est un int, pas un bool.

Intermédiaire :
• bool est une sous-classe de int en Python.
• True == 1 et False == 0 en contexte arithmétique.
• sum([True, False, True, True]) → 3 (compte les True).

Expert :
• Historique : bool ajouté en 2.3, héritant de int.
• Pratique : permet de compter les True avec sum().

Concepts clés :
• bool sous-classe de int, True=1, False=0 en arithmétique.

Distinctions clés :
• True + True (2) vs True or True (True).

Fonctionnement :
• True converti en 1 pour + ; 1+1+1 = 3.

Exécution étape par étape :
1. True + True → 1 + 1 → 2.
2. 2 + True → 2 + 1 → 3.

Ordre des opérations :
• + gauche à droite ; True comme 1.

Cas d'utilisation courants :
• sum(cond for x in it) pour compter.

Cas limites :
• True * 5 → 5 ; False + 1 → 1.

Considérations de performance :
• O(1) par opération.

Exemples :
• True + True + True → 3
• sum([True, False, True]) → 2

Remarques :
• True et 1 sont interchangeables en arithmétique.`,

  1172: `True * 10 → 10 : True vaut 1 en arithmétique, donc 1 * 10 = 10.

Débutant :
• True est traité comme 1.
• 1 * 10 = 10.
• Le résultat est un int.

Intermédiaire :
• bool hérite de int ; True == 1.
• True * 10 → 10 ; False * 10 → 0.
• Le type du résultat est int.

Expert :
• True * True → 1 ; True + 99 → 100.

Concepts clés :
• True = 1 en multiplication, résultat int.

Distinctions clés :
• True * 10 (10) vs True and 10 (10, pour and).

Fonctionnement :
• True comme 1 ; 1 * 10 = 10.

Exécution étape par étape :
1. True évalué comme 1.
2. 1 * 10 = 10.

Ordre des opérations :
• * ; True converti en 1.

Cas d'utilisation courants :
• Calculs conditionnels, comptages.

Cas limites :
• False * 10 → 0.

Considérations de performance :
• O(1).

Exemples :
• True * 10 → 10
• True * True → 1

Remarques :
• bool en arithmétique = int.`,

  1173: `False ** 0 → 1 : False vaut 0 ; 0**0 = 1 par convention Python.

Débutant :
• False est traité comme 0.
• 0 ** 0 = 1 en Python.
• Le résultat est un int.

Intermédiaire :
• En math pure, 0**0 peut être indéterminé.
• Python (et la plupart des langages) définit 0**0 = 1.
• Utile pour polynômes et combinatoire.

Expert :
• x**0 = 1 pour tout x en Python.
• True ** 0 → 1 ; 0 ** 0 → 1.

Concepts clés :
• 0**0 = 1, convention Python, False = 0.

Distinctions clés :
• False ** 0 (1) vs False ** 1 (0).

Fonctionnement :
• False comme 0 ; 0 ** 0 = 1.

Exécution étape par étape :
1. False → 0.
2. 0 ** 0 = 1.

Ordre des opérations :
• ** ; False comme 0.

Cas d'utilisation courants :
• Formules polynomiales, cas limites.

Cas limites :
• 0 ** 0.5 → 0.0 ; 0 ** -1 → erreur.

Considérations de performance :
• O(1).

Exemples :
• False ** 0 → 1
• 0 ** 0 → 1

Remarques :
• Convention Python : tout nombre ** 0 = 1.`,

  1174: `True == 1 → True : bool est sous-classe de int, True a la valeur 1.

Débutant :
• True et 1 sont égaux en valeur.
• == compare les valeurs, pas l'identité.
• isinstance(True, int) → True.

Intermédiaire :
• bool hérite de int ; True a la valeur entière 1.
• == vérifie l'égalité des valeurs.
• True == 1.0 → True (comparaison inter-types).

Expert :
• True == 1 (égalité) vs True is 1 (identité, False).
• Utiliser == pour la valeur, is pour l'identité.

Concepts clés :
• bool sous-classe de int, == vs is.

Distinctions clés :
• True == 1 (True) vs True is 1 (False).

Fonctionnement :
• == compare valeurs ; 1 == 1 → True.

Exécution étape par étape :
1. True et 1 évalués.
2. Comparaison valeur : 1 == 1 → True.

Ordre des opérations :
• == ; conversion si nécessaire.

Cas d'utilisation courants :
• Tests de valeur, comparaisons numériques.

Cas limites :
• True == 1.0 → True.

Considérations de performance :
• O(1).

Exemples :
• True == 1 → True
• False == 0 → True

Remarques :
• == pour valeur, is pour identité.`,

  1175: `True is 1 → False : is vérifie l'identité (même objet), pas l'égalité.

Débutant :
• is vérifie si deux références pointent vers le même objet.
• True est un bool, 1 est un int — objets différents.
• id(True) ≠ id(1).

Intermédiaire :
• True == 1 → True (valeurs égales).
• True is 1 → False (objets différents).
• is vérifie l'identité en mémoire.

Expert :
• Utiliser is pour None : x is None.
• Ne jamais utiliser is pour comparer des nombres ou chaînes.
• True is True → True (singleton).

Concepts clés :
• is = identité, == = égalité, singletons.

Distinctions clés :
• True is 1 (False) vs True == 1 (True).

Fonctionnement :
• is compare id() ; True et 1 ont des id différents.

Exécution étape par étape :
1. True et 1 sont des objets distincts.
2. is → False.

Ordre des opérations :
• is ; comparaison d'identité.

Cas d'utilisation courants :
• x is None, x is True (rare).

Cas limites :
• a = 1; b = 1; a is b peut être True (small ints cachés).

Considérations de performance :
• O(1), comparaison de pointeurs.

Exemples :
• True is 1 → False
• True is True → True

Remarques :
• is pour None et singletons uniquement.`,

  1176: `False == 0 → True : False a la valeur entière 0.

Débutant :
• bool hérite de int ; False = 0.
• == compare les valeurs.
• Résultat : True.

Intermédiaire :
• isinstance(False, int) → True.
• False == 0 ; False == 0.0 → True.
• False == "" → False (types différents).

Expert :
• Contrepartie de True == 1.
• Tous les zéros numériques sont égaux.

Concepts clés :
• False = 0, == valeur, hiérarchie des types.

Distinctions clés :
• False == 0 (True) vs False == "" (False).

Fonctionnement :
• False et 0 ont la même valeur ; == → True.

Exécution étape par étape :
1. False et 0 évalués.
2. Valeurs égales → True.

Ordre des opérations :
• == ; comparaison de valeurs.

Cas d'utilisation courants :
• Comptages, conditions numériques.

Cas limites :
• False == 0.0 → True.

Considérations de performance :
• O(1).

Exemples :
• False == 0 → True
• False == 0.0 → True

Remarques :
• False et 0 sont égaux en valeur.`,

  1177: `False == 0.0 → True : Python compare les zéros numériques entre types.

Débutant :
• False == 0 (bool hérite de int).
• 0 == 0.0 (comparaison int-float).
• Donc False == 0.0 → True.

Intermédiaire :
• Python convertit automatiquement pour la comparaison numérique.
• False → 0 → 0.0 pour la comparaison.
• Tous les zéros numériques sont égaux.

Expert :
• False == 0.0 → True ; False == 0j → True (zéro complexe).
• Comparaison inter-types pour les nombres.

Concepts clés :
• Comparaison inter-types, zéros numériques.

Distinctions clés :
• False == 0.0 (True) vs False == "" (False).

Fonctionnement :
• Conversion implicite ; 0.0 == 0.0 → True.

Exécution étape par étape :
1. False → 0 ; 0 → 0.0.
2. 0.0 == 0.0 → True.

Ordre des opérations :
• == ; conversion numérique.

Cas d'utilisation courants :
• Validation de résultats numériques.

Cas limites :
• False == 0j → True.

Considérations de performance :
• O(1).

Exemples :
• False == 0.0 → True
• False == 0j → True

Remarques :
• Les zéros numériques sont tous égaux.`,

  1178: `False == "" → False : bien que tous deux falsy, False et "" ne sont pas égaux.

Débutant :
• bool(False) et bool("") sont False (falsy).
• Mais == compare les VALEURS, pas la truthiness.
• False (bool) et "" (str) sont des types différents.

Intermédiaire :
• Python ne convertit pas implicitement bool/int en str pour ==.
• Falsy ≠ égalité : falsy signifie bool(x) False.
• False == 0 → True (même hiérarchie numérique).

Expert :
• Erreur : « les valeurs falsy sont égales » — FAUX.
• False == 0 (numérique) ; False == "" (pas de conversion).

Concepts clés :
• Falsy ≠ égalité, == par type, pas de conversion str.

Distinctions clés :
• False == "" (False) vs False == 0 (True).

Fonctionnement :
• Pas de conversion bool↔str ; valeurs différentes → False.

Exécution étape par étape :
1. False (bool) vs "" (str).
2. Pas d'égalité définie → False.

Ordre des opérations :
• == ; pas de conversion inter-type.

Cas d'utilisation courants :
• Tests de type, validation stricte.

Cas limites :
• False == [] → False ; False == None → False.

Considérations de performance :
• O(1).

Exemples :
• False == "" → False
• False == 0 → True

Remarques :
• Falsy n'implique pas égalité entre types.`,

  1179: `{True: "a", 1: "b"} → {True: "b"} : True == 1 et même hash, donc même clé ; valeur écrasée.

Débutant :
• True et 1 sont égaux et ont le même hash.
• Les clés de dict sont comparées par valeur et hash.
• 1 écrase la valeur de True → "b".

Intermédiaire :
• Insertion True:"a" → {True: "a"}.
• Insertion 1:"b" → clé 1 = clé True → mise à jour valeur.
• Python garde la première clé (True), met à jour la valeur.

Expert :
• hash(True) == hash(1) ; True == 1.
• La première clé insérée est conservée, la valeur mise à jour.
• {1: "a", True: "b"} → {1: "b"} (1 conservé).

Concepts clés :
• Clés dict par valeur et hash, True == 1.

Distinctions clés :
• {True: "a", 1: "b"} ({True: "b"}) vs {True: "a", 2: "b"} (2 entrées).

Fonctionnement :
• True:"a" puis 1:"b" ; 1 = True → valeur "b".

Exécution étape par étape :
1. True: "a" → dict = {True: "a"}.
2. 1: "b" → clé égale à True → {True: "b"}.

Ordre des opérations :
• Évaluation gauche à droite ; dernière valeur gagne.

Cas d'utilisation courants :
• Éviter True/1 comme clés distinctes.

Cas limites :
• {1: "x", True: "y"} → {1: "y"}.

Considérations de performance :
• O(1) par insertion.

Exemples :
• {True: "a", 1: "b"} → {True: "b"}
• d[True]; d[1] → même entrée

Remarques :
• True et 1 sont la même clé de dict.`,

  1180: `{0: "a", False: "b"} → {0: "b"} : False == 0 et même hash, donc même clé.

Débutant :
• False et 0 sont égaux et ont le même hash.
• Même clé → valeur écrasée.
• La première clé (0) est conservée, valeur "b".

Intermédiaire :
• Insertion 0:"a" → {0: "a"}.
• Insertion False:"b" → clé False = clé 0 → mise à jour.
• Symétrique de True/1.

Expert :
• {0: "a", False: "b"} → {0: "b"}.
• Première clé gagne, dernière valeur gagne.

Concepts clés :
• False == 0, même hash, une seule entrée.

Distinctions clés :
• {0: "a", False: "b"} ({0: "b"}) vs {0: "a", 1: "b"} (2 entrées).

Fonctionnement :
• 0:"a" puis False:"b" ; False = 0 → valeur "b".

Exécution étape par étape :
1. 0: "a" → {0: "a"}.
2. False: "b" → clé égale → {0: "b"}.

Ordre des opérations :
• Gauche à droite ; dernière valeur pour la clé.

Cas d'utilisation courants :
• Éviter 0/False comme clés distinctes.

Cas limites :
• {False: "x", 0: "y"} → {False: "y"}.

Considérations de performance :
• O(1).

Exemples :
• {0: "a", False: "b"} → {0: "b"}
• d[0]; d[False] → même entrée

Remarques :
• 0 et False sont la même clé de dict.`,

  1181: `[True, 1, 1.0].count(True) → 3 : True == 1 == 1.0, donc count() compte les trois.

Débutant :
• count() utilise == pour comparer.
• True == True, 1 == True, 1.0 == True.
• Les trois correspondent → 3.

Intermédiaire :
• True == 1 (bool sous-classe de int).
• True == 1.0 (comparaison numérique).
• .count(1) ou .count(1.0) donnerait aussi 3.

Expert :
• Les trois valeurs sont interchangeables pour ==.
• [True, 1, 1.0].count(1) → 3 ; .count(1.0) → 3.

Concepts clés :
• count() avec ==, True == 1 == 1.0.

Distinctions clés :
• .count(True) (3) vs .count(True) sur [True, False] (1).

Fonctionnement :
• Pour chaque élément : == True ? True, 1, 1.0 → tous True.

Exécution étape par étape :
1. True == True → compte 1.
2. 1 == True → compte 2.
3. 1.0 == True → compte 3.

Ordre des opérations :
• Itération, comparaison == pour chaque élément.

Cas d'utilisation courants :
• Compter des valeurs équivalentes.

Cas limites :
• .count(2) sur [True, 1, 1.0] → 0.

Considérations de performance :
• O(n) pour n éléments.

Exemples :
• [True, 1, 1.0].count(True) → 3
• [True, 1].count(1.0) → 2

Remarques :
• True, 1, 1.0 sont égaux pour count().`,

  1182: `{True, 1, 1.0} → {True} : les sets éliminent les doublons ; True == 1 == 1.0, un seul conservé.

Débutant :
• Les sets n'acceptent pas les doublons (par égalité).
• True, 1, 1.0 sont tous égaux.
• Le premier inséré est conservé : True.

Intermédiaire :
• Insertion True → {True}.
• 1 déjà dans le set (1 == True) → ignoré.
• 1.0 déjà dans le set → ignoré.
• Résultat : {True}.

Expert :
• {1, True, 1.0} → {1} (1 premier).
• {1.0, True, 1} → {1.0} (1.0 premier).
• L'ordre d'insertion détermine la valeur conservée.

Concepts clés :
• Sets par égalité et hash, premier gagne.

Distinctions clés :
• {True, 1, 1.0} ({True}) vs {True, 2} ({True, 2}).

Fonctionnement :
• True inséré ; 1 et 1.0 considérés comme doublons.

Exécution étape par étape :
1. True → {True}.
2. 1 == True → skip.
3. 1.0 == True → skip.

Ordre des opérations :
• Insertion gauche à droite ; doublons ignorés.

Cas d'utilisation courants :
• Déduplication avec valeurs numériques.

Cas limites :
• {0, False} → {0} ; {1, True} → {1}.

Considérations de performance :
• O(n) pour n éléments.

Exemples :
• {True, 1, 1.0} → {True}
• {0, False} → {0}

Remarques :
• True, 1, 1.0 sont la même clé de set.`,

  1183: `sorted([None, 1]) → TypeError : Python 3 ne peut pas comparer None et int avec <.

Débutant :
• sorted() doit comparer les éléments avec <.
• None < 1 lève TypeError en Python 3.
• Le tri ne peut pas s'effectuer.

Intermédiaire :
• Python 3 a supprimé l'ordre implicite entre types incompatibles.
• Python 2 : sorted([None, 1]) → [None, 1] (None < tout).
• Solution : sorted(lst, key=lambda x: (x is None, x)).

Expert :
• TypeError: '<' not supported between 'NoneType' and 'int'.
• Amélioration volontaire en Python 3.

Concepts clés :
• Comparaison stricte Python 3, key pour trier avec None.

Distinctions clés :
• sorted([None, 1]) (TypeError) vs sorted([1, 2]) ([1, 2]).

Fonctionnement :
• sorted() tente None < 1 → TypeError.

Exécution étape par étape :
1. sorted() compare les éléments.
2. None < 1 → TypeError.

Ordre des opérations :
• Comparaisons pour le tri ; échec à la première incompatibilité.

Cas d'utilisation courants :
• Trier des listes avec None : key=(x is None, x).

Cas limites :
• sorted([1, None], key=lambda x: (x is None, x or 0)) → [1, None].

Considérations de performance :
• O(n log n) si pas d'erreur.

Exemples :
• sorted([None, 1]) → TypeError
• sorted([1, None], key=lambda x: (x is None, x or 0))

Remarques :
• Utiliser une key pour gérer None dans sorted().`,

  1184: `None < 0 → TypeError : Python 3 ne supporte pas < entre None et int.

Débutant :
• Les comparaisons d'ordre (<, >, <=, >=) ne sont pas supportées entre None et nombres.
• None < 0 lève TypeError.
• None == 0 → False (pas d'erreur).

Intermédiaire :
• None n'a pas d'ordre naturel avec les nombres.
• == fonctionne (retourne False) ; < lève TypeError.
• None is None → True.

Expert :
• TypeError: '<' not supported between 'NoneType' and 'int'.
• Différence : None < 0 (TypeError) vs None == 0 (False).

Concepts clés :
• Comparaisons d'ordre, None sans ordre, == vs <.

Distinctions clés :
• None < 0 (TypeError) vs None == 0 (False).

Fonctionnement :
• NoneType n'implémente pas __lt__ pour int.

Exécution étape par étape :
1. Évaluation None < 0.
2. Tentative de comparaison → TypeError.

Ordre des opérations :
• < ; pas de conversion ; échec.

Cas d'utilisation courants :
• Éviter les comparaisons None avec nombres.

Cas limites :
• None > 5 → TypeError.

Considérations de performance :
• Échec immédiat.

Exemples :
• None < 0 → TypeError
• None == 0 → False

Remarques :
• Utiliser is None ou == None, pas < avec nombres.`,

  1185: `None == 0 → False : == fonctionne entre None et int mais retourne False.

Débutant :
• None n'est égal qu'à None.
• None == 0 → False.
• None == None → True.

Intermédiaire :
• == est autorisé entre tous les types (pas de TypeError).
• None n'est égal à aucun nombre, chaîne, etc.
• Contrairement à < qui lève TypeError.

Expert :
• None.__eq__(0) → NotImplemented ; int.__eq__(0, None) → NotImplemented.
• Python retombe sur la comparaison d'identité → objets différents → False.

Concepts clés :
• == vs < avec None, None unique.

Distinctions clés :
• None == 0 (False) vs None == None (True).

Fonctionnement :
• Pas de __eq__ définissant l'égalité → False.

Exécution étape par étape :
1. None == 0 évalué.
2. Pas d'égalité → False.

Ordre des opérations :
• == ; pas de conversion ; False.

Cas d'utilisation courants :
• Tests if x is None, validation.

Cas limites :
• None == "" → False ; None == [] → False.

Considérations de performance :
• O(1).

Exemples :
• None == 0 → False
• None is None → True

Remarques :
• None n'est égal qu'à None.`,

  1186: `x = [] ; y = x or [1, 2] → y = [1, 2] : [] est falsy, or retourne [1, 2].

Débutant :
• x = [] est falsy (liste vide).
• or retourne la première valeur truthy.
• [] falsy → évaluation du côté droit → [1, 2].

Intermédiaire :
• y = x or [1, 2] : si x falsy, y = [1, 2].
• Pattern courant : valeur par défaut.
• Attention : 0, "", False sont aussi falsy.

Expert :
• Utilisé pour défaut : value = user_input or default.
• Pour plus de contrôle (exclure 0), utiliser if/else.

Concepts clés :
• or pour défaut, [] falsy.

Distinctions clés :
• x=[] → y=[1,2] vs x=[3] → y=[3].

Fonctionnement :
• x falsy → or retourne [1, 2].

Exécution étape par étape :
1. x = [] évalué.
2. x or [1, 2] : [] falsy → [1, 2].
3. y = [1, 2].

Ordre des opérations :
• x d'abord ; falsy → côté droit.

Cas d'utilisation courants :
• Liste par défaut, config optionnelle.

Cas limites :
• x = 0 → y = [1, 2] ; x = "" → y = [1, 2].

Considérations de performance :
• Court-circuit : [1, 2] créé seulement si x falsy.

Exemples :
• [] or [1, 2] → [1, 2]
• None or [1, 2] → [1, 2]

Remarques :
• or utilise la truthiness, pas « vide » sémantique.`,

  1187: `x = [3] ; y = x or [1, 2] → y = [3] : [3] est truthy, or court-circuite et retourne [3].

Débutant :
• x = [3] est truthy (liste non vide).
• or retourne la première valeur truthy.
• [3] truthy → retour immédiat, [1, 2] jamais évalué.

Intermédiaire :
• Court-circuit : le côté droit n'est pas évalué si gauche truthy.
• Utile si le côté droit est coûteux : x or expensive().
• y = [3].

Expert :
• Économie : [1, 2] n'est pas créé.
• Pattern défaut efficace.

Concepts clés :
• Court-circuit de or, truthy = retour immédiat.

Distinctions clés :
• x=[3] → y=[3] vs x=[] → y=[1,2].

Fonctionnement :
• [3] truthy → or retourne [3] sans évaluer [1, 2].

Exécution étape par étape :
1. x = [3] évalué.
2. x or [1, 2] : [3] truthy → retourne [3].
3. y = [3] ; [1, 2] jamais créé.

Ordre des opérations :
• x ; truthy → court-circuit.

Cas d'utilisation courants :
• Valeur par défaut avec court-circuit.

Cas limites :
• x = [0] → y = [0] (liste non vide truthy).

Considérations de performance :
• Côté droit non évalué si gauche truthy.

Exemples :
• [3] or [1, 2] → [3]
• [0] or [1, 2] → [0]

Remarques :
• Le court-circuit évite des créations inutiles.`,

  1188: `a = b = c = 0 ; a == b == c → True : comparaison en chaîne = (a==b) and (b==c).

Débutant :
• a == b == c est équivalent à (a == b) and (b == c).
• (0 == 0) and (0 == 0) → True and True → True.
• Ce n'est PAS (a == b) == c (qui donnerait True == 0 → False).

Intermédiaire :
• Python développe les comparaisons en chaîne.
• a < b < c signifie (a < b) and (b < c).
• b n'est évalué qu'une fois dans la chaîne.

Expert :
• Les comparaisons en chaîne sont un AND des paires adjacentes.
• Pas d'évaluation gauche-droite des opérateurs.
• 1 < 2 > 1 → True (2 > 1 et 1 < 2).

Concepts clés :
• Comparaisons en chaîne, AND des paires, une évaluation de b.

Distinctions clés :
• a==b==c ((a==b)and(b==c)) vs (a==b)==c (True==0).

Fonctionnement :
• (0==0) and (0==0) → True.

Exécution étape par étape :
1. a, b, c = 0.
2. a == b → True ; b == c → True.
3. True and True → True.

Ordre des opérations :
• Développement en (a==b) and (b==c) ; b évalué une fois.

Cas d'utilisation courants :
• Tests de plage : 0 <= x <= 10.

Cas limites :
• 1 == 2 == 3 → False (2 == 3 False).

Considérations de performance :
• Court-circuit possible (premier False arrête).

Exemples :
• 0 == 0 == 0 → True
• 1 < 2 < 3 → True

Remarques :
• Les comparaisons en chaîne sont des AND de paires.`,

  1189: `1 != 2 != 1 → True : en chaîne, (1!=2) and (2!=1) → True. Ne vérifie PAS 1!=1.

Débutant :
• 1 != 2 != 1 se développe en (1 != 2) and (2 != 1).
• (1 != 2) → True ; (2 != 1) → True.
• True and True → True.

Intermédiaire :
• Piège : on pourrait attendre False car 1 apparaît deux fois.
• La chaîne != ne vérifie que les paires adjacentes.
• Elle ne vérifie PAS 1 != 1 (premier et dernier).

Expert :
• Pour vérifier « tous distincts » : len(set([1,2,1])) == 3 → False.
• 1 != 2 != 1 → True mais 1 et 1 sont égaux.

Concepts clés :
• Chaîne != = paires adjacentes, pas toutes les combinaisons.

Distinctions clés :
• 1!=2!=1 (True) vs « tous différents » (False ici).

Fonctionnement :
• (1!=2) and (2!=1) ; 1!=1 non vérifié.

Exécution étape par étape :
1. 1 != 2 → True.
2. 2 != 1 → True.
3. True and True → True.

Ordre des opérations :
• Paires adjacentes uniquement.

Cas d'utilisation courants :
• Vérifier des paires consécutives.

Cas limites :
• 1 != 1 != 1 → (1!=1) and (1!=1) → False.

Considérations de performance :
• Court-circuit au premier False.

Exemples :
• 1 != 2 != 1 → True
• 1 != 2 != 2 → False

Remarques :
• != en chaîne ne garantit pas « tous différents ».`,

  1190: `{i: i**2 for i in range(5) if i % 2} → {1: 1, 3: 9} : if i%2 filtre aux impairs (i%2 truthy).

Débutant :
• range(5) → 0, 1, 2, 3, 4.
• if i % 2 garde les i où i%2 est truthy (non nul).
• 0%2=0 (falsy) skip ; 1%2=1 (truthy) → 1:1 ; 2 skip ; 3 → 3:9 ; 4 skip.

Intermédiaire :
• i % 2 = 0 pour pair (falsy), 1 pour impair (truthy).
• Filtre aux nombres impairs uniquement.
• Chaque impair i → i**2.

Expert :
• Dict comprehension avec filtre par truthiness.
• Équivalent à {i:i**2 for i in range(5) if i%2 != 0}.

Concepts clés :
• Dict comprehension, filtre if, i%2 pour impair.

Distinctions clés :
• if i%2 (impairs) vs if not i%2 (pairs).

Fonctionnement :
• Pour chaque i : si i%2 truthy, ajouter i: i**2.

Exécution étape par étape :
1. i=0 : 0%2=0 falsy → skip.
2. i=1 : 1%2=1 truthy → 1:1.
3. i=2 : skip.
4. i=3 : 3:9.
5. i=4 : skip.

Ordre des opérations :
• range(5), filtre if, expression i:i**2.

Cas d'utilisation courants :
• Carrés des impairs, filtrage par condition.

Cas limites :
• range(0) → {}.

Considérations de performance :
• O(n) pour n éléments.

Exemples :
• {i:i**2 for i in range(5) if i%2} → {1:1, 3:9}
• {i:i**2 for i in range(6) if i%2} → {1:1, 3:9, 5:25}

Remarques :
• i%2 truthy = impair.`,

  1191: `all(map(str.isdigit, "12345")) → True : tous les caractères sont des chiffres.

Débutant :
• map(str.isdigit, "12345") applique isdigit à chaque caractère.
• "1".isdigit() → True, idem pour "2","3","4","5".
• all() retourne True si tous les éléments sont truthy.

Intermédiaire :
• Itération sur "12345" donne "1","2","3","4","5".
• map → True, True, True, True, True.
• all([True,...]) → True.

Expert :
• Validation qu'une chaîne ne contient que des chiffres.
• Alternative : "12345".isdigit() (plus simple ici).
• map flexible pour des vérifications personnalisées.

Concepts clés :
• all(), map(), str.isdigit, validation de chaîne.

Distinctions clés :
• all(map(str.isdigit, "12345")) (True) vs "123a5" (False).

Fonctionnement :
• map produit des bool ; all vérifie que tous sont True.

Exécution étape par étape :
1. "1".isdigit() → True.
2. Idem pour "2","3","4","5".
3. all(True,True,True,True,True) → True.

Ordre des opérations :
• map (itérateur), all consomme l'itérateur.

Cas d'utilisation courants :
• Validation d'entrée numérique, parsing.

Cas limites :
• all(map(str.isdigit, "")) → True (all([]) vacuously true).

Considérations de performance :
• Court-circuit : all s'arrête au premier False.
• "12345" : aucun False → O(n).

Exemples :
• all(map(str.isdigit, "12345")) → True
• all(map(str.isdigit, "123a5")) → False

Remarques :
• all([]) → True (aucun élément falsy).`,

  1192: `any(map(str.isdigit, "abc1")) → True : au moins un caractère est un chiffre.

Débutant :
• any() retourne True si au moins un élément est truthy.
• "a","b","c" → False ; "1" → True.
• any trouve un True → retourne True.

Intermédiaire :
• map(str.isdigit, "abc1") → False, False, False, True.
• any() court-circuite au premier True.
• Ne vérifie pas les éléments restants.

Expert :
• any() s'arrête au premier True — efficace pour grands itérables.
• all() s'arrête au premier False.
• Les deux sont paresseux avec les itérateurs.

Concepts clés :
• any(), court-circuit, au moins un truthy.

Distinctions clés :
• any(map(str.isdigit, "abc1")) (True) vs "abc" (False).

Fonctionnement :
• Premier True trouvé → retour immédiat.

Exécution étape par étape :
1. "a".isdigit() → False.
2. "b","c" → False.
3. "1".isdigit() → True → any retourne True.

Ordre des opérations :
• map, any consomme jusqu'au premier True.

Cas d'utilisation courants :
• Vérifier présence de chiffres dans une chaîne.

Cas limites :
• any(map(str.isdigit, "abc")) → False.

Considérations de performance :
• Court-circuit : peut s'arrêter avant la fin.

Exemples :
• any(map(str.isdigit, "abc1")) → True
• any(map(str.isdigit, "abc")) → False

Remarques :
• any([]) → False.`,

  1193: `all(map(str.isdigit, "abc")) → False : aucun caractère n'est un chiffre.

Débutant :
• "a".isdigit() → False.
• all() retourne False dès le premier élément falsy.
• Court-circuit : "b" et "c" ne sont pas vérifiés.

Intermédiaire :
• all() retourne True seulement si TOUS les éléments sont truthy.
• Retourne False dès qu'UN élément est falsy.
• all([]) → True (vacuously true).

Expert :
• Premier caractère "a" → False → all retourne False immédiatement.
• Efficace : pas besoin de parcourir le reste.

Concepts clés :
• all(), court-circuit au premier falsy.

Distinctions clés :
• all(map(str.isdigit, "abc")) (False) vs all(map(str.isdigit, "123")) (True).

Fonctionnement :
• "a".isdigit() → False ; all → False.

Exécution étape par étape :
1. "a".isdigit() → False.
2. all voit False → retourne False.
3. "b","c" jamais vérifiés.

Ordre des opérations :
• map, all court-circuite au premier False.

Cas d'utilisation courants :
• Validation stricte (tous doivent passer).

Cas limites :
• all([]) → True.

Considérations de performance :
• Court-circuit : O(1) si premier falsy.

Exemples :
• all(map(str.isdigit, "abc")) → False
• all(map(str.isdigit, "")) → True

Remarques :
• all s'arrête au premier falsy.`,

  1194: `[x if x > 0 else -x for x in [-1, 2, -3]] → [1, 2, 3] : expression ternaire = abs() manuel.

Débutant :
• Pour chaque x : si x > 0, garder x ; sinon -x.
• -1 : -1>0 ? Non → -(-1)=1.
• 2 : 2>0 ? Oui → 2.
• -3 : -3>0 ? Non → -(-3)=3.

Intermédiaire :
• Syntaxe : VALUE_IF_TRUE if CONDITION else VALUE_IF_FALSE.
• C'est une expression ternaire, pas un filtre.
• Chaque élément produit une valeur (pas de filtrage).
• Équivalent : [abs(x) for x in [-1, 2, -3]].

Expert :
• Démonstration du pattern ternaire dans une list comprehension.
• Pas de if en fin (filtre) : ici if/else au milieu (choix de valeur).

Concepts clés :
• Expression ternaire, list comprehension, abs manuel.

Distinctions clés :
• [x if x>0 else -x for x in L] (tous produits) vs [x for x in L if x>0] (filtré).

Fonctionnement :
• Pour chaque x : x si x>0, sinon -x.

Exécution étape par étape :
1. x=-1 : -1>0 False → -(-1)=1.
2. x=2 : 2>0 True → 2.
3. x=-3 : -3>0 False → 3.

Ordre des opérations :
• Itération, condition, expression, liste.

Cas d'utilisation courants :
• Valeurs absolues, transformation conditionnelle.

Cas limites :
• x=0 : 0>0 False → -0=0.

Considérations de performance :
• O(n).

Exemples :
• [x if x>0 else -x for x in [-1,2,-3]] → [1,2,3]
• [abs(x) for x in [-1,2,-3]] → [1,2,3]

Remarques :
• Équivalent à abs() pour ce cas.`,

  1195: `next((x for x in [5, 3, 8, 1] if x > 6), None) → 8 : premier élément > 6.

Débutant :
• Générateur filtre aux x > 6 : seul 8 qualifie.
• next() retourne la première valeur du générateur.
• Deuxième argument (None) = défaut si aucun match.

Intermédiaire :
• 5>6 ? Non. 3>6 ? Non. 8>6 ? Oui → yield 8.
• next() retourne 8 (premier match).
• 1 jamais vérifié (évaluation paresseuse).

Expert :
• next(gen, default) retourne default si le générateur est épuisé.
• Sans défaut : StopIteration si aucun match.
• None est un défaut courant pour « non trouvé ».

Concepts clés :
• next(), générateur, filtre, défaut.

Distinctions clés :
• [5,3,8,1] avec 8 → 8 vs [5,3,1] → None.

Fonctionnement :
• Générateur produit 8 ; next retourne 8.

Exécution étape par étape :
1. 5>6 False → skip.
2. 3>6 False → skip.
3. 8>6 True → yield 8.
4. next retourne 8.

Ordre des opérations :
• Générateur, next, court-circuit au premier yield.

Cas d'utilisation courants :
• Trouver premier élément matchant une condition.

Cas limites :
• Liste vide ou aucun match → défaut.

Considérations de performance :
• Court-circuit : s'arrête au premier match.

Exemples :
• next((x for x in [5,3,8,1] if x>6), None) → 8
• next((x for x in [5,3,1] if x>6), None) → None

Remarques :
• Toujours fournir un défaut si le générateur peut être vide.`,

  1196: `next((x for x in [5, 3, 1] if x > 6), None) → None : aucun élément > 6, défaut retourné.

Débutant :
• Générateur filtre x > 6.
• 5, 3, 1 : aucun ne satisfait.
• Générateur épuisé → next retourne None (défaut).

Intermédiaire :
• Tous les éléments sont vérifiés : 5, 3, 1.
• Aucun x > 6.
• next() retourne le deuxième argument (défaut) : None.

Expert :
• Sans défaut : next((x for x in [5,3,1] if x>6)) → StopIteration.
• Le défaut évite l'exception.
• Toujours fournir un défaut quand le générateur peut être vide.

Concepts clés :
• next avec défaut, générateur vide, StopIteration évité.

Distinctions clés :
• Avec défaut (None) vs sans défaut (StopIteration).

Fonctionnement :
• Générateur épuisé sans yield ; next retourne None.

Exécution étape par étape :
1. 5>6 False.
2. 3>6 False.
3. 1>6 False.
4. Générateur épuisé → défaut None.

Ordre des opérations :
• Itération complète, pas de yield, défaut.

Cas d'utilisation courants :
• Recherche avec valeur par défaut si non trouvé.

Cas limites :
• next(iter([]), 0) → 0.

Considérations de performance :
• O(n) pour parcourir tout si aucun match.

Exemples :
• next((x for x in [5,3,1] if x>6), None) → None
• next((x for x in [] if x>0), -1) → -1

Remarques :
• Le défaut évite StopIteration.`,

  1197: `all(isinstance(x, int) for x in [1, True, 3]) → True : bool est sous-classe de int.

Débutant :
• isinstance(1, int) → True.
• isinstance(True, int) → True (bool hérite de int !).
• isinstance(3, int) → True.
• all([True, True, True]) → True.

Intermédiaire :
• issubclass(bool, int) → True.
• isinstance vérifie la hiérarchie des classes ; type() vérifie le type exact.
• type(True) is int → False (type exact est bool).

Expert :
• Pour exclure les bool : type(x) is int (match exact).
• Pour inclure les bool : isinstance(x, int) (inclut sous-classes).
• True EST un int par héritage.

Concepts clés :
• isinstance vs type, bool sous-classe de int.

Distinctions clés :
• isinstance(True, int) (True) vs type(True) is int (False).

Fonctionnement :
• Pour chaque x : isinstance(x, int) ; True, True, True → all True.

Exécution étape par étape :
1. isinstance(1, int) → True.
2. isinstance(True, int) → True.
3. isinstance(3, int) → True.
4. all → True.

Ordre des opérations :
• Générateur, all.

Cas d'utilisation courants :
• Validation de types avec sous-classes.

Cas limites :
• isinstance(True, (int, float)) → True.

Considérations de performance :
• O(n).

Exemples :
• all(isinstance(x, int) for x in [1, True, 3]) → True
• all(type(x) is int for x in [1, True, 3]) → False

Remarques :
• isinstance inclut les sous-classes.`,

  1198: `any(x is None for x in [1, None, 3]) → True : un élément est None (identité).

Débutant :
• 1 is None → False.
• None is None → True.
• any trouve True → retourne True immédiatement.
• 3 jamais vérifié (court-circuit).

Intermédiaire :
• Comparer None avec is, pas ==.
• is vérifie l'identité (même objet en mémoire).
• == peut être surchargé par __eq__.
• PEP 8 : « Comparisons to singletons like None should always be done with is ».

Expert :
• x is None est la forme recommandée.
• any(x is None for x in seq) vérifie la présence de None.

Concepts clés :
• is pour None, identité, PEP 8.

Distinctions clés :
• x is None (identité) vs x == None (égalité, déconseillé).

Fonctionnement :
• None is None → True ; any court-circuite.

Exécution étape par étape :
1. 1 is None → False.
2. None is None → True.
3. any retourne True ; 3 non vérifié.

Ordre des opérations :
• Itération, is, court-circuit au premier True.

Cas d'utilisation courants :
• Vérifier présence de None dans une séquence.

Cas limites :
• any(x is None for x in [1,2,3]) → False.

Considérations de performance :
• Court-circuit au premier None trouvé.

Exemples :
• any(x is None for x in [1, None, 3]) → True
• any(x is None for x in [1, 2]) → False

Remarques :
• Toujours utiliser is pour None.`,

  1199: `sum(x > 0 for x in [-1, 2, -3, 4]) → 2 : x>0 donne True/False ; True=1, compte les positifs.

Débutant :
• -1>0 → False (0) ; 2>0 → True (1) ; -3>0 → False (0) ; 4>0 → True (1).
• sum(0, 1, 0, 1) → 2.
• Compte combien d'éléments sont positifs.

Intermédiaire :
• True = 1 en arithmétique ; False = 0.
• sum compte les True : pattern Pythonic pour compter.
• Plus lisible que len([x for x in it if condition]).
• Mémoire efficace (générateur, pas liste).

Expert :
• Pattern : sum(condition for x in iterable) compte les matchs.
• Équivalent à sum(1 for x in it if x>0) mais plus concis.

Concepts clés :
• True=1 en sum, comptage par condition, générateur.

Distinctions clés :
• sum(x>0 for x in L) (compte) vs sum(x for x in L if x>0) (somme des positifs).

Fonctionnement :
• Chaque x>0 → True ou False ; sum additionne (1 ou 0).

Exécution étape par étape :
1. -1>0 → False (0).
2. 2>0 → True (1).
3. -3>0 → False (0).
4. 4>0 → True (1).
5. sum → 2.

Ordre des opérations :
• Générateur, sum.

Cas d'utilisation courants :
• Compter les éléments matchant une condition.

Cas limites :
• sum(x>0 for x in []) → 0.

Considérations de performance :
• O(n), pas de liste intermédiaire.

Exemples :
• sum(x>0 for x in [-1,2,-3,4]) → 2
• sum(c.isupper() for c in "Hello") → 1

Remarques :
• Pattern Pythonic pour compter avec une condition.`,

  1200: `max(range(10), key=lambda x: -(x-5)**2) → 5 : la clé -(x-5)² est max à x=5.

Débutant :
• range(10) → 0,1,2,...,9.
• key = -(x-5)² : parabole vers le bas centrée en 5.
• max() trouve le x qui maximise la clé.
• -(x-5)² max quand (x-5)² min → x=5.

Intermédiaire :
• x=0 : -(0-5)² = -25 ; x=5 : -(5-5)² = 0 (max !).
• x=9 : -(9-5)² = -16.
• La clé max est 0, atteinte à x=5.

Expert :
• max() avec key trouve l'élément qui maximise la fonction clé.
• -(x-a)² atteint toujours son max en x=a.
• Pattern pour trouver l'élément le plus proche d'une cible.

Concepts clés :
• max avec key, parabole -(x-5)², élément optimal.

Distinctions clés :
• max(..., key=...) (élément) vs max(..., key=...)(valeur clé).

Fonctionnement :
• Pour chaque x, key(x) ; max retourne le x avec key max (0 à x=5).

Exécution étape par étape :
1. x=0 : -25 ; x=1 : -16 ; ... ; x=5 : 0.
2. x=6 : -1 ; ... ; x=9 : -16.
3. Clé max = 0 à x=5 → max retourne 5.

Ordre des opérations :
• range(10), key pour chaque élément, max.

Cas d'utilisation courants :
• Élément le plus proche d'une cible, optimisation.

Cas limites :
• max([], key=...) → ValueError.

Considérations de performance :
• O(n) pour parcourir range(10).

Exemples :
• max(range(10), key=lambda x: -(x-5)**2) → 5
• min(range(10), key=lambda x: (x-5)**2) → 5 (équivalent)

Remarques :
• -(x-a)² atteint son max en x=a.`,
};
