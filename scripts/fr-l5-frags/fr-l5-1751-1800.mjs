/** Level 5 FR 1751–1800 — level5_expert_b.ts questions 51–100 in file order. */
export default {
  1751: `La bonne réponse est « 1 » : avec Point = namedtuple("Point", ["x", "y"]) et p = Point(1, 2), l’accès p.x lit le premier champ nommé, donc 1.

Débutant :
• namedtuple ajoute des noms aux positions du tuple.
• p.x est équivalent à p[0] pour ce schéma de champs.

Intermédiaire :
• Le deuxième argument peut être une liste de chaînes ou une chaîne séparée par des espaces.
• L’instance reste immuable comme un tuple ordinaire.

Expert :
• La classe est générée dynamiquement ; les champs sont des descripteurs liés aux indices.

Concepts clés :
• collections.namedtuple ; accès attribut ; correspondance nom → indice 0-based.

Distinctions clés :
• p.x vs p[0] (même valeur) ; namedtuple vs tuple nu (lisibilité).

Fonctionnement :
• La sous-classe tuple expose des propriétés dont le getter renvoie l’élément à l’index du champ.

Exécution étape par étape :
1. Point(1, 2) fixe x=1, y=2 dans l’ordre des champs.
2. p.x résout le champ « x » → première composante → 1.

Ordre des opérations :
• Création de la classe namedtuple, puis instanciation, puis lecture d’attribut.

Cas d'utilisation courants :
• Petits enregistrements (coordonnées, lignes CSV) sans écrire une classe complète.

Cas limites :
• Noms de champs réservés ou invalides → ValueError à la création de la classe.

Considérations de performance :
• Très léger ; comparable à un tuple pour l’accès.

Exemples :
• p.y → 2 ; len(p) → 2.

Remarques :
• Pour sérialiser vers JSON, _asdict() est souvent l’étape suivante.`,

  1752: `La bonne réponse est « 3 » : un namedtuple est une sous-classe de tuple, donc p[0] renvoie la première composante, ici 3.

Débutant :
• L’indice 0 désigne toujours le premier élément.
• Les champs « x » et « y » coexistent avec l’indexation.

Intermédiaire :
• isinstance(p, tuple) est True ; slicing et déballage fonctionnent comme sur un tuple.

Expert :
• p[0] et p.x sont deux syntaxes pour la même case mémoire conceptuelle.

Concepts clés :
• Indexation tuple sur namedtuple ; champs définis par "x y".

Distinctions clés :
• Accès par nom (lisible) vs par indice (générique).

Fonctionnement :
• __getitem__ du tuple renvoie l’élément à la position demandée.

Exécution étape par étape :
1. Point(3, 4) place 3 puis 4.
2. p[0] lit l’élément d’indice 0 → 3.

Ordre des opérations :
• Construction de l’instance, puis évaluation de l’expression d’indexation.

Cas d'utilisation courants :
• Boucles par position quand les noms importent peu ; interop avec du code tuple.

Cas limites :
• Index hors plage → IndexError comme pour une liste/tuple.

Considérations de performance :
• Accès O(1) par indice.

Exemples :
• p[::-1] → (4, 3).

Remarques :
• Ne pas confondre avec un dict : les clés sont fixes à la définition du namedtuple.`,

  1753: `La bonne réponse est '{"x": 1, "y": 2}' (représentation d’un dict) : _asdict() construit un dictionnaire nom de champ → valeur pour l’instance.

Débutant :
• Les clés sont les noms « x » et « y » ; les valeurs 1 et 2.

Intermédiaire :
• En Python 3.8+, le résultat est un dict ordinaire (plus seulement OrderedDict).

Expert :
• Le préfixe _ évite les collisions avec un champ utilisateur nommé asdict.

Concepts clés :
• Méthode _asdict() ; mapping champ → valeur.

Distinctions clés :
• _asdict() vs tuple(p) ou list(p) (pas de noms de champs dans le conteneur).

Fonctionnement :
• Parcours des noms de champs _fields et des valeurs pour bâtir le dict.

Exécution étape par étape :
1. p = Point(1, 2).
2. _asdict() produit {'x': 1, 'y': 2} (ordre d’insertion des champs).

Ordre des opérations :
• Instance disponible, puis appel de méthode sur cette instance.

Cas d'utilisation courants :
• JSON, logs structurés, APIs attendant un dict.

Cas limites :
• Valeurs non sérialisables restent telles quelles dans le dict.

Considérations de performance :
• Crée un nouveau dict ; coût O(n) du nombre de champs.

Exemples :
• json.dumps(p._asdict()) après conversion des types si besoin.

Remarques :
• Pour un mapping inverse valeur→champs, il faudrait une autre structure.`,

  1754: `La bonne réponse est « True » : la classe produite par namedtuple hérite de tuple, donc isinstance(p, tuple) est vrai.

Débutant :
• « Est une instance de tuple » signifie compatible partout où un tuple est attendu.

Intermédiaire :
• type(p) peut afficher un nom de classe dédié ; isinstance reste True pour tuple.

Expert :
• issubclass(Point, tuple) est True ; hachabilité suit les règles du tuple (si contenu hachable).

Concepts clés :
• Sous-classement de tuple ; test isinstance.

Distinctions clés :
• isinstance(p, tuple) vs type(p) is tuple (souvent faux pour un namedtuple).

Fonctionnement :
• La MRO inclut tuple ; les mécanismes de tuple (len, index, hash si applicable) s’appliquent.

Exécution étape par étape :
1. p est une instance de Point.
2. isinstance vérifie la relation de sous-type avec tuple → True.

Ordre des opérations :
• Création de p, puis évaluation du booléen isinstance.

Cas d'utilisation courants :
• Fonctions génériques qui acceptent « séquence ou tuple ».

Cas limites :
• Tuple avec liste mutable à l’intérieur → non hachable même si isinstance tuple.

Considérations de performance :
• Test isinstance très rapide (flags en CPython).

Exemples :
• len(p), itération for x in p.

Remarques :
• Les dataclasses ne sont pas des tuples ; le test diffère.`,

  1755: `La bonne réponse est « 5 » : Counter("abracadabra") compte chaque caractère ; la lettre « a » apparaît cinq fois.

Débutant :
• On parcourt la chaîne et on incrémente le compteur par lettre.

Intermédiaire :
• c["a"] lit le décompte ; clé absente se comporte comme 0 sans insérer la clé (lecture).

Expert :
• Counter est un dict sous-jacent avec __missing__ renvoyant 0 pour la lecture seule.

Concepts clés :
• collections.Counter ; fréquences sur itérable de hachables.

Distinctions clés :
• Counter vs dict brut (pas de KeyError à la lecture de compte).

Fonctionnement :
• Une passe sur la chaîne met à jour les entrées du compteur.

Exécution étape par étape :
1. Itération sur a,b,r,a,c,a,d,a,b,r,a.
2. Comptage final de 'a' → 5.

Ordre des opérations :
• Construction du Counter puis indexation par "a".

Cas d'utilisation courants :
• Analyse de texte, votes, histogrammes simples.

Cas limites :
• Éléments non hachables (ex. listes) ne peuvent pas être clés.

Considérations de performance :
• O(longueur de la chaîne) pour construire.

Exemples :
• c["z"] → 0 si z absent.

Remarques :
• most_common() complète bien ce type de question.`,

  1756: `La bonne réponse est « [(3, 3)] » : parmi 1, 2, 3 le plus fréquent est 3 (trois fois) ; most_common(1) renvoie une liste d’un couple (élément, effectif).

Débutant :
• Le premier nombre dans le tuple est la valeur, le second est combien de fois elle apparaît.

Intermédiaire :
• Le format est toujours une liste de paires, pas seulement la valeur dominante.

Expert :
• En cas d’ex-aequo, l’ordre suit les règles de Counter (ordre d’apparition des maxima).

Concepts clés :
• most_common(n) ; tri par fréquence décroissante.

Distinctions clés :
• [(3, 3)] vs [3] ou 3 (types et sens différents).

Fonctionnement :
• Agrégation des counts puis sélection du ou des premiers selon n.

Exécution étape par étape :
1. Comptes : 3→3, 1→2, 2→1.
2. Plus grand count → 3 ; most_common(1) → [(3, 3)].

Ordre des opérations :
• Création du Counter sur la liste, puis appel most_common(1).

Cas d'utilisation courants :
• Top-K, mode statistique, détection d’anomalies fréquentielles.

Cas limites :
• Counter vide → most_common(1) → [].

Considérations de performance :
• most_common utilise un tri interne sur les entrées ; coût lié au nombre de clés distinctes.

Exemples :
• most_common(2) ici donnerait [(3, 3), (1, 2)].

Remarques :
• Pour un seul scalaire « mode », il faut extraire [0][0].`,

  1757: `La bonne réponse est [("l", 2), ("h", 1)] : « l » est seul à 2 occurrences ; parmi les lettres à 1, « h » arrive la première dans « hello », donc elle est classée avant « e » et « o ».

Débutant :
• most_common(2) donne les deux premiers blocs fréquence + ordre d’insertion pour les égalités.

Intermédiaire :
• Ce n’est pas un simple tri alphabétique des lettres.

Expert :
• Le tie-break repose sur l’ordre de première rencontre dans l’itérable source.

Concepts clés :
• Counter sur chaîne ; most_common avec égalités.

Distinctions clés :
• Fréquence d’abord, puis stabilité liée à l’ordre d’apparition.

Fonctionnement :
• Comptage puis sélection des deux premières entrées dans l’ordre défini par Counter.

Exécution étape par étape :
1. Comptes : l→2 ; h,e,o→1 dans l’ordre d’apparition h, e, l, l, o.
2. Premier slot : l ; second slot : h (premier parmi les 1).

Ordre des opérations :
• Itération sur "hello", construction Counter, appel most_common(2).

Cas d'utilisation courants :
• Classements lexicaux avec critère de fréquence + ordre d’arrivée.

Cas limites :
• Chaîne vide → liste vide de groupes.

Considérations de performance :
• Identique à un most_common sur petit alphabet.

Exemples :
• most_common() liste entière triée selon ces règles.

Remarques :
• Pour regrouper toutes les lettres à 1 sans ordre Counter, il faudrait un autre traitement.`,

  1758: `La bonne réponse est Counter({"b": 2, "c": 2, "a": 1, "d": 1}) : l’addition de Counters somme les effectifs clé par clé ; b et c apparaissent dans les deux chaînes.

Débutant :
• "abc" donne a,b,c à 1 ; "bcd" donne b,c,d à 1 ; les b et c doublent.

Intermédiaire :
• Les clés absentes d’un côté comptent comme 0 pour l’addition.

Expert :
• Counter définit __add__ pour cette sémantique de multi-ensembles.

Concepts clés :
• Addition de Counters ; somme des multiplicités.

Distinctions clés :
• + sur Counter vs concaténation de chaînes "abc"+"bcd".

Fonctionnement :
• Fusion des clés et addition des valeurs entières positives résultantes.

Exécution étape par étape :
1. Counter("abc") et Counter("bcd") construits.
2. Somme : a:1+0, b:1+1, c:1+1, d:0+1.

Ordre des opérations :
• Deux constructions puis opération binaire +.

Cas d'utilisation courants :
• Fusion de comptages, votes agrégés, sacs de mots combinés.

Cas limites :
• Résultat n’affiche pas les clés à count 0 après +.

Considérations de performance :
• Linéaire en nombre de clés distinctes impliquées.

Exemples :
• Counter supporte aussi &, |, - avec sémantiques différentes.

Remarques :
• subtract() peut conserver des zéros ; l’opérateur - les élimine.`,

  1759: `La bonne réponse est ["a", "a", "b", "b", "b"] : elements() itère chaque clé autant de fois que son compteur (strictement positif).

Débutant :
• a a le count 2 → deux « a » ; b a 3 → trois « b ».

Intermédiaire :
• list() matérialise l’itérateur paresseux renvoyé par elements().

Expert :
• L’ordre suit l’ordre d’insertion des clés dans le Counter pour CPython usuel.

Concepts clés :
• Counter.elements() ; expansion multiplicité → séquence.

Distinctions clés :
• elements() vs items() (paires clé/effectif).

Fonctionnement :
• Pour chaque clé, yield répété count fois.

Exécution étape par étape :
1. Counter(a=2, b=3) construit.
2. Itération : a,a puis b,b,b ; list → liste affichée.

Ordre des opérations :
• Appel Counter avec kwargs, puis elements(), puis list().

Cas d'utilisation courants :
• Reconstruire une séquence avec répétitions depuis des fréquences.

Cas limites :
• Count ≤ 0 : la clé est omise du flux elements().

Considérations de performance :
• La longueur totale est la somme des counts.

Exemples :
• Counter(x=0, y=1).elements() → seulement y une fois.

Remarques :
• Pour grandes multiplicités, éviter de matérialiser toute la liste d’un coup.`,

  1760: `La bonne réponse est « 0 » : Counter ne lève pas KeyError pour une clé manquante en lecture ; __missing__ renvoie 0.

Débutant :
• 4 n’apparaît pas dans les données ; le compt est donc zéro.

Intermédiaire :
• 4 in c reste False : aucune insertion n’a eu lieu pour cette lecture.

Expert :
• Diffère de defaultdict(int) où la lecture crée la clé avec 0.

Concepts clés :
• Accès Counter[k] pour k absent → 0.

Distinctions clés :
• Counter vs dict classique (KeyError) vs defaultdict (insertion).

Fonctionnement :
• La sous-classe redéfinit la gestion des clés manquantes à la lecture.

Exécution étape par étape :
1. c construit à partir de [1,2,2,3,3,3].
2. c[4] interroge le count de 4 → 0 sans exception.

Ordre des opérations :
• Construction puis indexation.

Cas d'utilisation courants :
• Comptages où l’on teste souvent des clés potentiellement absentes.

Cas limites :
• Ne pas confondre lecture 0 avec « clé présente avec effectif 0 » après opérations.

Considérations de performance :
• O(1) amorti comme un dict pour la lecture.

Exemples :
• c.get(4) est redondant avec c[4] pour Counter.

Remarques :
• Pour incrémenter proprement, utiliser c[4] += 1 ou update.`,

  1761: `La bonne réponse est Counter({"a": 1}) : Counter("aab") - Counter("ab") soustrait les multiplicités ; b tombe à 0 et disparaît du résultat ; a reste à 1.

Débutant :
• La soustraction enlève des « jetons » par lettre ; s’il n’en reste pas, la lettre sort du Counter.

Intermédiaire :
• Les counts négatifs ou nuls après - ne sont pas conservés dans l’objet Counter renvoyé.

Expert :
• La méthode subtract() peut garder des zéros ; l’opérateur - non.

Concepts clés :
• Soustraction de multi-ensembles ; élimination des zéros.

Distinctions clés :
• - sur Counter vs soustraction de chaînes ou de sets.

Fonctionnement :
• Alignement des clés, soustraction terme à terme, filtrage des positifs.

Exécution étape par étape :
1. {'a':2,'b':1} moins {'a':1,'b':1} → a:1, b:0.
2. b exclu → Counter({'a':1}).

Ordre des opérations :
• Deux Counters construits depuis les chaînes, puis opération -.

Cas d'utilisation courants :
• Retirer un sac de lettres d’un autre (anagrammes, fréquences nettes).

Cas limites :
• Si le premier est entièrement « mangé », Counter() vide.

Considérations de performance :
• Linéaire en nombre de clés touchées.

Exemples :
• Counter("ab") - Counter("aab") → Counter vide.

Remarques :
• Pour multiset avec retenue des zéros, documenter subtract() explicitement.`,

  1762: `La bonne réponse est « Oui » : depuis Python 3.7, l’ordre d’insertion des clés dans un dict est garanti par le langage (pas seulement un détail d’implémentation).

Débutant :
• Quand vous parcourez un dict, les clés sortent dans l’ordre où elles ont été ajoutées (en l’absence de suppressions récentes complexes).

Intermédiaire :
• OrderedDict reste utile pour égalité sensible à l’ordre et APIs spécifiques (move_to_end).

Expert :
• CPython 3.6 avait déjà ce comportement ; 3.7 l’a figé dans la spec.

Concepts clés :
• dict ordonné par insertion ; garantie langage ≥3.7.

Distinctions clés :
• Ordre d’insertion vs ordre trié (sorted(d)).

Fonctionnement :
• Structure interne compacte qui préserve la séquence des clés.

Exécution étape par étape :
1. Insertions successives mémorisent la position de chaque clé.
2. Itération reflète cette chronologie.

Ordre des opérations :
• Question de sémantique du type ; pas d’expression à évaluer ici.

Cas d'utilisation courants :
• JSON-like, pipelines lisibles, duplication de configuration en préservant l’ordre.

Cas limites :
• Fusion et réécriture de clés peuvent surprendre si on ne suit pas la doc.

Considérations de performance :
• Itération efficace ; ne pas supposer gratuité mémoire identique à un dict ancien.

Exemples :
• {"c":3,"a":1,"b":2} → list(d.keys()) reflète c, a, b.

Remarques :
• Pour tri explicite, toujours sorted(d.items(), key=...).`,

  1763: `La bonne réponse est « 1 » : defaultdict(int) fabrique 0 pour une clé absente au moment du += ; d["x"] devient 0 puis 0+1.

Débutant :
• int() comme fabrique par défaut renvoie 0.

Intermédiaire :
• Contrairement à Counter, la clé est réellement insérée dans le mapping.

Expert :
• __getitem__ déclenche la fabrique puis stocke la valeur avant l’addition in-place.

Concepts clés :
• defaultdict(int) ; += sur clé manquante.

Distinctions clés :
• defaultdict vs dict (KeyError) vs Counter (0 sans insertion à la lecture seule).

Fonctionnement :
• Résolution de d["x"] → création 0 si absent ; __iadd__ ou équivalent sur int.

Exécution étape par étape :
1. d["x"] += 1 charge ou crée 0.
2. Résultat final 1.

Ordre des opérations :
• Création du defaultdict, puis traitement du += sur "x".

Cas d'utilisation courants :
• Histogrammes manuels, graphes d’adjacence avec poids entiers.

Cas limites :
• Fabrique coûteuse appelée à chaque nouvelle clé.

Considérations de performance :
• Comparable au dict pour l’accès après création de la clé.

Exemples :
• d["y"] += 5 après coup sans initialisation préalable.

Remarques :
• lambda: [] est courant pour des listes par défaut.`,

  1764: `La bonne réponse est « [1] » : defaultdict(list) crée une liste vide pour une clé absente ; append(1) s’applique à cette liste.

Débutant :
• list() donne [] ; append ajoute en place.

Intermédiaire :
• d["a"] existe après la première ligne ; pas besoin de if "a" in d.

Expert :
• Deux étapes : __getitem__ crée [], puis la méthode append de cette liste.

Concepts clés :
• defaultdict(list) ; chaînage .append après accès.

Distinctions clés :
• Pattern idiomatique vs dict + setdefault ou try/except.

Fonctionnement :
• Accès "a" → fabrique [] stockée ; appel append(1) sur l’objet liste.

Exécution étape par étape :
1. d["a"] résolu → [] créée et liée.
2. append(1) → [1].

Ordre des opérations :
• Construction du defaultdict, puis expression d’accès méthode.

Cas d'utilisation courants :
• Regroupement par clé (inversions d’index, buckets).

Cas limites :
• Ne jamais mettre [] littéral comme défaut dans un dict normal partagé.

Considérations de performance :
• Un seul accès dict pour amorcer la liste.

Exemples :
• Plusieurs append sur la même clé étendent la même liste.

Remarques :
• Attention au piège [[]]*3 vs listes indépendantes en compréhension.`,

  1765: `La bonne réponse est « 0 » : le simple accès d["missing"] avec defaultdict(int) appelle int() et insère la clé avec 0.

Débutant :
• Même sans assignation explicite, la lecture crée l’entrée.

Intermédiaire :
• "missing" in d devient True après cet accès.

Expert :
• Comportement dual avec Counter : là aussi 0, mais sans insertion pour Counter.

Concepts clés :
• Création paresseuse des clés à la lecture.

Distinctions clés :
• defaultdict vs Counter sur effet de bord d’insertion.

Fonctionnement :
• __missing__ ou équivalent appelle la fabrique et enregistre.

Exécution étape par étape :
1. Clé absente détectée.
2. int() → 0 stocké et renvoyé.

Ordre des opérations :
• Instanciation defaultdict(int), puis souscript d["missing"].

Cas d'utilisation courants :
• Compteurs où toute clé vue doit exister matériellement.

Cas limites :
• Fabriques comme set peuvent gonfler la mémoire si beaucoup de clés fantômes lues.

Considérations de performance :
• Coût d’une insertion dict supplémentaire par nouvelle clé touchée.

Exemples :
• defaultdict(str) → "" par défaut ; defaultdict(bool) → False.

Remarques :
• Pour éviter l’insertion, utiliser .get avec dict normal.`,

  1766: `La bonne réponse est « [1, 2, 3, 4] » : chain enchaîne les itérables dans l’ordre : d’abord tous les éléments du premier, puis du second.

Débutant :
• Ce n’est pas une liste de listes ; les éléments sont aplatissements logiques dans une seule séquence.

Intermédiaire :
• chain est paresseux ; list() force la consommation complète.

Expert :
• chain.from_iterable prend une liste d’itérables ; ici chain direct reçoit deux listes.

Concepts clés :
• itertools.chain ; concaténation d’itérables.

Distinctions clés :
• chain vs zip (appariement) vs map double.

Fonctionnement :
• Itérateur interne qui bascule au suivant quand le courant est épuisé.

Exécution étape par étape :
1. Yield 1,2 depuis [1,2].
2. Yield 3,4 depuis [3,4].

Ordre des opérations :
• Création des listes littérales, appel chain, matérialisation list.

Cas d'utilisation courants :
• Fusionner des morceaux sans copie intermédiaire massive.

Cas limites :
• Itérables infinis en premier argument bloquent le second.

Considérations de performance :
• Pas de copie des listes sources dans chain lui-même.

Exemples :
• chain("ab","cd") → caractères séparés.

Remarques :
• Pour un seul conteneur de listes, préférer from_iterable.`,

  1767: `La bonne réponse est ["a", "b", "c", "d"] : chaque chaîne passée à chain est un itérable de caractères, pas un bloc atomique.

Débutant :
• "ab" se décompose en 'a' puis 'b'.

Intermédiaire :
• Obtenir ["ab","cd"] nécessiterait des conteneurs non itérés caractère par caractère (autre structure).

Expert :
• Même piège avec des bytes vs str selon version et contenu.

Concepts clés :
• Chaîne Python = séquence de caractères Unicode.

Distinctions clés :
• chain("ab","cd") vs ["ab","cd"] comme éléments d’une liste.

Fonctionnement :
• Itération sur premier itérable jusqu’à bout, puis second.

Exécution étape par étape :
1. Parcours "ab" → a,b.
2. Parcours "cd" → c,d.

Ordre des opérations :
• Littéraux chaîne, chain, list.

Cas d'utilisation courants :
• Fusionner des fragments texte au niveau caractère (rare) ou normaliser des sources mixtes.

Cas limites :
• Chaînes vides ne contribuent aucun élément.

Considérations de performance :
• Linéaire en nombre total de caractères.

Exemples :
• list(chain("hello")) éclate tous les caractères.

Remarques :
• Pour joindre des mots, "+".join(...) ou une liste de tokens.`,

  1768: `La bonne réponse est « [5, 5, 5] » : repeat(5, 3) produit trois fois la même valeur 5 (itérateur matérialisé par list).

Débutant :
• Premier argument = valeur à répéter ; second = nombre de répétitions.

Intermédiaire :
• Sans second argument, le flux est infini jusqu’à consommation externe (islice).

Expert :
• Si la valeur est mutable, chaque yield renvoie le même objet (référence unique).

Concepts clés :
• itertools.repeat ; itérateur de constantes.

Distinctions clés :
• repeat(5,3) vs [5]*3 (liste directe) vs boucle for.

Fonctionnement :
• Compteur interne décrémenté à chaque yield jusqu’à 0.

Exécution étape par étape :
1. repeat instancié avec valeur 5 et limite 3.
2. Trois next logiques → trois 5.

Ordre des opérations :
• import repeat, construction, list().

Cas d'utilisation courants :
• Pad avec map/zip, suites constantes bornées.

Cas limites :
• repeat(0) sans limite : attention boucle infinie.

Considérations de performance :
• Très léger ; pas de liste intermédiaire avant list().

Exemples :
• list(repeat([1],2)) partage la même liste deux fois.

Remarques :
• Toujours borner un repeat sans compte si consommé en entier.`,

  1769: `La bonne réponse est « [10, 11, 12] » : count(10) démarre à 10 et incrémente de 1 ; trois next donnent dix, onze, douze.

Débutant :
• count est infini ; ici range(3) limite à trois extractions.

Intermédiaire :
• count(start, step) permet un pas différent (ex. pas de 2).

Expert :
• La compréhension appelle next(c) implicitement à chaque itération.

Concepts clés :
• itertools.count ; suite arithmétique infinie.

Distinctions clés :
• count vs range (range est borné sauf usage maladroit).

Fonctionnement :
• État interne current += step à chaque demande.

Exécution étape par étape :
1. c = count(10).
2. Trois next → 10,11,12 collectés dans la liste.

Ordre des opérations :
• count puis compréhension avec range(3) comme contrôle de répétition.

Cas d'utilisation courants :
• Indices avec zip sur flux de données.

Cas limites :
• Débordement entier théorique en très longue course (peu courant en pratique pédagogique).

Considérations de performance :
• O(1) par next.

Exemples :
• islice(count(), 5) pour cap facilement.

Remarques :
• Ne jamais list() un count() non borné.`,

  1770: `La bonne réponse est « [1, 2, 3, 1, 2, 3, 1] » : cycle répète indéfiniment la séquence [1,2,3] ; sept extractions parcourent deux cycles complets plus le premier élément du troisième.

Débutant :
• Après 3, on revient à 1.

Intermédiaire :
• cycle mémorise une copie de l’itérable pour pouvoir reboucler.

Expert :
• Toujours coupler cycle avec islice ou break pour éviter boucles infinies.

Concepts clés :
• itertools.cycle ; répétition périodique.

Distinctions clés :
• cycle vs repeat sur un seul scalaire.

Fonctionnement :
• Pointeur interne sur l’index courant ; retour à 0 en fin de séquence.

Exécution étape par étape :
1. Sortie 1,2,3 (tour 1).
2. Sortie 1,2,3 (tour 2).
3. Sortie 1 (début tour 3) → sept valeurs au total.

Ordre des opérations :
• Création cycle, compréhension avec range(7).

Cas d'utilisation courants :
• Round-robin, motifs UI, alternance de styles.

Cas limites :
• Itérable vide → cycle immédiat sans éléments (comportement à connaître).

Considérations de performance :
• Stocke tous les éléments du cycle en mémoire.

Exemples :
• cycle("AB") pour alterner A et B.

Remarques :
• Pour très longues bases, le coût mémoire peut compter.`,

  1771: `La bonne réponse est « [0, 1, 2, 3, 4] » : islice(range(100), 5) prend les cinq premiers éléments du range, comme [:5] sur une séquence.

Débutant :
• stop=5 sans start → départ implicite 0.

Intermédiaire :
• islice fonctionne sur tout itérateur, pas seulement les séquences.

Expert :
• Les indices négatifs ne sont pas supportés comme pour les listes.

Concepts clés :
• itertools.islice ; fenêtre sur itérateur.

Distinctions clés :
• islice vs slice sur liste (sémantique et négatifs).

Fonctionnement :
• Avance jusqu’à start, yield jusqu’à stop-1 avec pas optionnel.

Exécution étape par étape :
1. range(100) produit 0,1,2,...
2. islice coupe après cinq valeurs.

Ordre des opérations :
• range puis islice puis list.

Cas d'utilisation courants :
• Têtes de flux infinis (count, fichiers).

Cas limites :
• Deuxième utilisation du même itérateur partiellement consommé : état partagé.

Considérations de performance :
• Ne matérialise pas range(100) entier.

Exemples :
• list(islice(count(), 5)) pour bornes sur l’infini.

Remarques :
• Signature à trois arguments pour start, stop, step explicites.`,

  1772: `La bonne réponse est « [2, 3, 4, 5, 6] » : islice(range(100), 2, 7) commence après deux éléments et s’arrête avant le septième index logique (équivalent à [2:7]).

Débutant :
• start inclus, stop exclus.

Intermédiaire :
• Sept - deux = cinq éléments produits.

Expert :
• Peut combiner un step en troisième position numérique.

Concepts clés :
• islice à deux bornes ; analogie slicing.

Distinctions clés :
• Ici 7 est limite haute exclusive, pas « nombre d’éléments ».

Fonctionnement :
• Skip deux premiers yields du sous-jacent, collecte jusqu’à stop.

Exécution étape par étape :
1. Ignorer 0 et 1.
2. Émettre 2,3,4,5,6 puis stop.

Ordre des opérations :
• range(100) lazy, islice contrôle la consommation.

Cas d'utilisation courants :
• Pagination sur générateurs, fenêtres glissantes.

Cas limites :
• Si l’itérable se termine avant stop, islice s’arrête naturellement.

Considérations de performance :
• Coût proportionnel à start + longueur de fenêtre, pas à la taille totale théorique.

Exemples :
• islice(..., 0, 10, 2) pour pas 2.

Remarques :
• Pour indexation négative, convertir ou consommer en liste (coûteux).`,

  1773: `La bonne réponse est « [(1,3),(1,4),(2,3),(2,4)] » : product forme le produit cartésien — chaque choix dans le premier avec chaque choix dans le second.

Débutant :
• 2×2 = 4 paires ordonnées.

Intermédiaire :
• Le dernier itérable varie le plus vite dans l’ordre usuel de product.

Expert :
• Généralisable à plus de deux itérables et repeat=n.

Concepts clés :
• itertools.product ; énumération combinatoire structurée.

Distinctions clés :
• product vs zip (coupe au plus court sans combiner toutes paires).

Fonctionnement :
• Boucles imbriquées équivalentes émettant des tuples de taille fixée.

Exécution étape par étape :
1. Fixer 1 → paires avec 3 et 4.
2. Fixer 2 → idem.

Ordre des opérations :
• Listes littérales, product, list.

Cas d'utilisation courants :
• Grilles de paramètres, tests exhaustifs, problèmes combinatoires.

Cas limites :
• Un itérable vide rend le produit vide immédiatement.

Considérations de performance :
• Explosion exponentielle si beaucoup de dimensions / tailles.

Exemples :
• product("AB","12") → quatre paires.

Remarques :
• product(liste, repeat=3) pour r-uplets avec remise.`,

  1774: `La bonne réponse est « [(1,2),(1,3),(2,1),(2,3),(3,1),(3,2)] » : permutations(..., 2) énumère tous les arrangements ordonnés de 2 éléments distincts tirés de trois sans répétition dans le tuple.

Débutant :
• (1,2) et (2,1) comptent tous deux.

Intermédiaire :
• Nombre = P(3,2) = 6.

Expert :
• L’ordre de génération suit l’ordre des entrées dans l’itérable source.

Concepts clés :
• itertools.permutations ; ordre significatif.

Distinctions clés :
• Permutations vs combinations (où {1,2} et {2,1} fusionnent).

Fonctionnement :
• Algorithme de génération lexicographique / backtracking interne.

Exécution étape par étape :
1. Choisir premier élément parmi 3, second parmi 2 restants.
2. Six tuples distincts listés.

Ordre des opérations :
• Liste [1,2,3], r=2, matérialisation.

Cas d'utilisation courants :
• Anagrammes partiels, ordres d’exécution, puzzles.

Cas limites :
• r > n ou r négatif : résultat vide ou erreur selon cas (r négatif ValueError).

Considérations de performance :
• Factorielles ; éviter list() sur grands n.

Exemples :
• permutations("AB") → deux chaînes ordonnées.

Remarques :
• permutations avec répétitions dupliquées en entrée produit des tuples distincts mais valeurs répétées.`,

  1775: `La bonne réponse est « [(1,2),(1,3),(2,3)] » : combinations ne garde qu’une représentant par sous-ensemble ; l’ordre interne suit l’ordre croissant des positions dans la liste d’origine.

Débutant :
• Pas de (2,1) car équivalent non ordonné de (1,2) avec cette convention.

Intermédiaire :
• C(3,2)=3.

Expert :
• combinations_with_replacement autoriserait des répétitions selon autre sémantique.

Concepts clés :
• itertools.combinations ; sous-ensembles de taille r.

Distinctions clés :
• combinations vs permutations sur le même jeu.

Fonctionnement :
• Indices croissants dans l’itérable source pour garantir unicité canonique.

Exécution étape par étape :
1. Paires dont le premier indice < second indice dans [1,2,3].
2. (1,2), (1,3), (2,3).

Ordre des opérations :
• Itérable, r fixé, list().

Cas d'utilisation courants :
• Choix de comités, arêtes de graphe non orienté (i<j).

Cas limites :
• r=0 produit une seule tuple vide ().

Considérations de performance :
• Binomial(n,r) tuples ; croissance rapide.

Exemples :
• combinations("ABCD", 3) pour quadruplets de lettres croissantes.

Remarques :
• Entrée triée si vous voulez un ordre lexical cohérent sur valeurs.`,

  1776: `La bonne réponse est « 6 » : permutations complètes de trois éléments distincts → 3! = 6 ordres.

Débutant :
• Factorielle 3 = 3×2×1.

Intermédiaire :
• Sans second argument, r vaut la longueur de l’itérable.

Expert :
• list() matérialise tout ; sur n grand, explosion mémoire/temps.

Concepts clés :
• Permutations pleine longueur ; cardinal n!.

Distinctions clés :
• len(permutations(...)) vs math.factorial(n) conceptuel.

Fonctionnement :
• Génération exhaustive des ordres sans doublon de position.

Exécution étape par étape :
1. Trois emplacements : 3 choix puis 2 puis 1.
2. Total 6.

Ordre des opérations :
• permutations puis list puis len.

Cas d'utilisation courants :
• Tous les ordres d’étapes, brute force contrôlé.

Cas limites :
• Éléments dupliqués en entrée : tuples distincts mais valeurs répétées.

Considérations de performance :
• n! croît très vite ; n≥10 devient déjà lourd.

Exemples :
• 4 éléments → 24 permutations.

Remarques :
• Pour échantillonner, random.sample ou itération avec early stop.`,

  1777: `La bonne réponse est « 6 » : C(4,2) = 4!/(2!×2!) = 6 paires non ordonnées parmi quatre étiquettes.

Débutant :
• Dénombrement « choisir 2 parmi 4 » sans tenir compte de l’ordre.

Intermédiaire :
• Liste explicite : (1,2),(1,3),(1,4),(2,3),(2,4),(3,4).

Expert :
• Généralisation C(n,r) pour len(list(combinations(..., r))).

Concepts clés :
• Binomial ; combinations de taille fixe.

Distinctions clés :
• 6 vs P(4,2)=12 (ordre).

Fonctionnement :
• Générateur produit exactement C(n,r) tuples canoniques.

Exécution étape par étape :
1. n=4, r=2.
2. Formule → 6.

Ordre des opérations :
• combinations puis list puis len.

Cas d'utilisation courants :
• Arêtes possibles entre 4 nœuds, mains de cartes simplifiées.

Cas limites :
• r>n → 0 tuples.

Considérations de performance :
• Croissance binomiale modérée comparée aux permutations.

Exemples :
• C(4,3)=4 ; C(4,1)=4.

Remarques :
• math.comb en Python 3.8+ vérifie le même entier.`,

  1778: `La bonne réponse est « [1, 3, 6, 10] » : accumulate par défaut fait la somme préfixe : 1, puis 1+2, puis +3, puis +4.

Débutant :
• Chaque terme est le total courant jusqu’à cette position.

Intermédiaire :
• On peut passer operator.mul, max, etc. comme fonction binaire.

Expert :
• accumulate est paresseux ; list() révèle la suite complète ici.

Concepts clés :
• itertools.accumulate ; réduction préfixe.

Distinctions clés :
• accumulate vs sum() unique ou functools.reduce sans historique.

Fonctionnement :
• State = premier élément ; pour chaque suivant, state = op(state, x).

Exécution étape par étape :
1. state=1 yield 1.
2. state=1+2=3 yield 3 ; puis 6 ; puis 10.

Ordre des opérations :
• Liste source, accumulate, matérialisation.

Cas d'utilisation courants :
• Soldes cumulés, intégrales discrètes simples, running max.

Cas limites :
• Itérable vide → accumulate vide.

Considérations de performance :
• Un seul passage O(n).

Exemples :
• accumulate avec mul → factorielles partielles.

Remarques :
• Depuis 3.8+, initial optionnel via argument nommé selon version ; vérifier doc.`,

  1779: `La bonne réponse est [("A",["A","A","A"]),("B",["B","B"]),("C",["C"])] : groupby regroupe seulement les éléments consécutifs égaux, pas toutes les occurrences dispersées.

Débutant :
• La chaîne "AAABBC" forme trois blocs d’affilée.

Intermédiaire :
• list(g) consomme l’itérateur de groupe avant le suivant (important en pratique).

Expert :
• Pour regrouper toutes les lettres identiques, trier d’abord (sorted(s)).

Concepts clés :
• itertools.groupby ; coupures sur changement de clé.

Distinctions clés :
• groupby vs Counter (global) vs SQL GROUP BY sur table triée.

Fonctionnement :
• Parcours linéaire ; nouvelle clé → nouveau groupe.

Exécution étape par étape :
1. Trois A successifs → un groupe.
2. Deux B → groupe B.
3. Un C → groupe C.

Ordre des opérations :
• groupby sur chaîne, compréhension matérialisant chaque g.

Cas d'utilisation courants :
• Run-length encoding, segmentation de séries temporelles plates.

Cas limites :
• Clés non triées → plus de petits groupes qu’attendu naivement.

Considérations de performance :
• O(n) pour parcourir ; tri préalable O(n log n) si nécessaire.

Exemples :
• "ABAB" sans tri donne quatre groupes alternés.

Remarques :
• key= optionnel pour regrouper par fonction des éléments.`,

  1780: `La bonne réponse est « [8, 9] » : starmap décompose chaque tuple en arguments positionnels : pow(2,3)=8 et pow(3,2)=9.

Débutant :
• « star » = équivalent de pow(*(2,3)).

Intermédiaire :
• map(pow, [(2,3),(3,2)]) serait invalide car pow attend deux arguments.

Expert :
• Généralisable à tout callable et itérable de tuples de bonne arité.

Concepts clés :
• itertools.starmap ; unpacking d’arguments.

Distinctions clés :
• starmap vs map ; pow vs opérateur ** seul.

Fonctionnement :
• Pour chaque item, func(*item).

Exécution étape par étape :
1. pow(2,3) → 8.
2. pow(3,2) → 9.

Ordre des opérations :
• starmap retourne itérateur ; list() collecte.

Cas d'utilisation courants :
• Appliquer opérations vectorisées sur paires (coords, bornes).

Cas limites :
• Tuple de mauvaise longueur → TypeError sur le call interne.

Considérations de performance :
• Lazy ; pas de liste intermédiaire avant list().

Exemples :
• starmap(max, [(1,5),(3,2)]) → [5,3].

Remarques :
• zip peut fabriquer les tuples pour starmap.`,

  1781: `La bonne réponse est « 1 » : append ajoute un seul élément — la référence vers la liste elle-même ; la longueur compte les slots, pas la « profondeur » conceptuelle.

Débutant :
• len compte les éléments du conteneur, pas les éléments « à l’intérieur » de façon récursive.

Intermédiaire :
• a[0] is a est True (auto-référence).

Expert :
• repr détecte les cycles et affiche [...] pour éviter une récursion infinie.

Concepts clés :
• Liste auto-référencée ; sémantique de référence.

Distinctions clés :
• len 1 vs idée visuelle d’infini logique.

Fonctionnement :
• append place une référence PyObject* vers la même liste.

Exécution étape par étape :
1. a = [] longueur 0.
2. append(a) → un slot → longueur 1.

Ordre des opérations :
• Création liste vide, append, len.

Cas d'utilisation courants :
• Structures cycliques rares (graphes naïfs) ; piège pédagogique.

Cas limites :
• Copie profonde (copy.deepcopy) doit gérer les cycles.

Considérations de performance :
• len en O(1) amorti.

Exemples :
• print(a) montre [[...]].

Remarques :
• Éviter ce motif en production sans raison claire.`,

  1782: `La bonne réponse est « True » : a[0] pointe vers le même objet liste que a ; is teste l’identité mémoire.

Débutant :
• « est le même objet » ≠ « a la même valeur ».

Intermédiaire :
• a[0][0] is a continue d’être True.

Expert :
• id(a)==id(a[0]) ; pas de copie lors de append.

Concepts clés :
• Identité d’objet ; graphe de références cyclique.

Distinctions clés :
• is vs == sur listes (égalité structurelle pourrait diverger si redéfini, ici list standard).

Fonctionnement :
• Chargement de l’élément index 0 ; comparaison de pointeurs.

Exécution étape par étape :
1. a[0] résout la référence stockée au slot 0.
2. Comparaison avec a → même adresse.

Ordre des opérations :
• Construction auto-référente, puis comparaison is.

Cas d'utilisation courants :
• Vérifier partage d’objet mutable sous-jacent.

Cas limites :
• Structures profondément cycliques : attention récursion dans égalité personnalisée.

Considérations de performance :
• Test is constant.

Exemples :
• Deux listes distinctes [1] et [1] → == True mais is False.

Remarques :
• Utile avant mutation pour savoir qui partage quoi.`,

  1783: `La bonne réponse est « 3 » : len([1,2,3]) s’appuie sur __len__ qui renvoie le nombre d’éléments.

Débutant :
• Les dunder entourent de doubles underscores ; méthodes spéciales du modèle de données.

Intermédiaire :
• Appeler __len__ directement est rare mais équivalent ici à len().

Expert :
• __len__ doit renvoyer un int ≥0 ; sinon comportement indéfini.

Concepts clés :
• Data model ; méthode __len__.

Distinctions clés :
• __len__ vs __bool__ (vérité) pour conteneurs vides.

Fonctionnement :
• builtin len dispatch vers type(obj).__len__(obj).

Exécution étape par étape :
1. Liste de trois éléments construite.
2. __len__ retourne 3.

Ordre des opérations :
• Littéral liste, appel de méthode.

Cas d'utilisation courants :
• Classes personnalisées compatibles len().

Cas limites :
• __len__ menteur peut casser les invariants des builtins.

Considérations de performance :
• list CPython : O(1) pour la longueur stockée.

Exemples :
• "hello".__len__() → 5.

Remarques :
• Préférer len(x) pour lisibilité.`,

  1784: `La bonne réponse est « True » : x in seq appelle seq.__contains__(x) ; 2 est présent dans la liste.

Débutant :
• L’appartenance teste l’égalité avec des éléments (ici ==).

Intermédiaire :
• Sans __contains__, Python peut simuler via itération.

Expert :
• Complexité linéaire pour liste ; ensembles utilisent hachage.

Concepts clés :
• __contains__ ; opérateur in.

Distinctions clés :
• in sur list vs in sur dict (teste les clés).

Fonctionnement :
• Scan jusqu’à première égalité vraie ou fin.

Exécution étape par étape :
1. Comparer 2 à 1 → faux.
2. Comparer 2 à 2 → vrai → True.

Ordre des opérations :
• Liste littérale, appel __contains__(2).

Cas d'utilisation courants :
• Filtrage, validation de présence.

Cas limites :
• Objets non comparables correctement : comportement d’__eq__.

Considérations de performance :
• Liste grande → préférer set si tests répétés.

Exemples :
• [].__contains__(1) → False.

Remarques :
• any(...) est parfois plus expressif pour conditions composées.`,

  1785: `La bonne réponse est « 1 » : l’indexation déléguée à __getitem__(0) renvoie l’élément à la position 0.

Débutant :
• Premier élément de [1,2,3] est 1.

Intermédiaire :
• Les slices passent aussi par __getitem__ avec un objet slice.

Expert :
• Classe personnalisée peut redéfinir __getitem__ pour logique arbitraire.

Concepts clés :
• __getitem__ ; modèle de séquence.

Distinctions clés :
• __getitem__(0) vs __getattribute__ (noms d’attributs).

Fonctionnement :
• Dispatch interne depuis syntaxe [].

Exécution étape par étape :
1. self est la liste [1,2,3].
2. Clé 0 → élément stocké au slot 0.

Ordre des opérations :
• Création liste, appel explicite de méthode.

Cas d'utilisation courants :
• Wrappers, séquences paresseuses, tenseurs minimalistes.

Cas limites :
• Index hors limites → IndexError.

Considérations de performance :
• Liste : accès O(1).

Exemples :
• __getitem__(-1) → dernier élément.

Remarques :
• En production, préférer obj[i] sauf méta-programmation.`,

  1786: `La bonne réponse est "<class 'list_reverseiterator'>" : __reversed__ fournit un itérateur inverse paresseux, pas une nouvelle liste.

Débutant :
• reversed() et __reversed__ manipulent un flux, pas une copie immédiate.

Intermédiaire :
• list() autour de reversed matérialise [3,2,1].

Expert :
• [::-1] alloue une nouvelle liste (souvent) ; reversed évite la copie complète immédiate.

Concepts clés :
• list_reverseiterator ; évaluation paresseuse.

Distinctions clés :
• type iterator vs type list.

Fonctionnement :
• Itérateur qui parcourt la liste de la fin vers le début.

Exécution étape par étape :
1. Appel __reversed__ sur la liste.
2. type() inspecte la classe de l’objet retourné.

Ordre des opérations :
• Littéral liste, appel méthode, type().

Cas d'utilisation courants :
• Parcours inverse sans dupliquer de grands tableaux immédiatement.

Cas limites :
• Itérateur épuisable une fois ; second parcours nécessite un nouveau reversed.

Considérations de performance :
• Souvent meilleure empreinte que slice copie sur géants.

Exemples :
• next sur l’itérateur renvoie 3 puis 2 puis 1.

Remarques :
• tuples ont aussi un itérateur inverse dédié.`,

  1787: `La bonne réponse est « [1, 2, 3, 4] » : list.__add__ est la fonction sous-jacente de + pour deux listes — concaténation non mutante.

Débutant :
• self est la première liste, l’argument est la seconde.

Intermédiaire :
• list.__add__(a,b) équivalent à a + b pour listes.

Expert :
• Méthode non liée explicite ; rare en code idiomatique mais utile à comprendre le data model.

Concepts clés :
• __add__ sur list ; nouvelle liste.

Distinctions clés :
• + vs extend (in-place) vs += sur listes (peut muter via __iadd__ selon cas).

Fonctionnement :
• Allocation d’une nouvelle liste de taille somme, copie des éléments.

Exécution étape par étape :
1. Copier éléments de [1,2].
2. Étendre avec [3,4].

Ordre des opérations :
• Deux listes littérales, appel unbound __add__.

Cas d'utilisation courants :
• Fusionner sans modifier les sources.

Cas limites :
• list + tuple → TypeError (pas cette méthode directe).

Considérations de performance :
• Coût O(n+m) temps et espace.

Exemples :
• [1,2].__add__([3,4]) même effet.

Remarques :
• extend évite créer une troisième liste si vous voulez accumuler dans une existante.`,

  1788: `La bonne réponse est « [] » : a *= 0 appelle __imul__ qui répète zéro fois la séquence → liste vide, en place, même id souvent.

Débutant :
• *= sur liste modifie l’objet référencé par a.

Intermédiaire :
• * 0 est le cas limite qui vide.

Expert :
• Contrast avec a = a * 0 qui rebondit a vers un nouvel objet (si a était réassigné).

Concepts clés :
• __imul__ ; multiplication in-place de liste.

Distinctions clés :
• *= vs * seul côté droit sans rebinding.

Fonctionnement :
• Remplacement du contenu interne par séquence vide en conservant l’objet liste.

Exécution étape par étape :
1. Liste [1,2,3] existante.
2. imul 0 → contenu effacé.

Ordre des opérations :
• Création, *= 0, inspection de a.

Cas d'utilisation courants :
• Réinitialiser buffer partagé sans changer la référence tenue ailleurs.

Cas limites :
• Alias multiples voient tous la liste vidée.

Considérations de performance :
• Libère les références aux anciens éléments.

Exemples :
• a *= 1 laisse identique.

Remarques :
• Ne pas confondre avec numpy où *= peut avoir sémantique vectorielle.`,

  1789: `La bonne réponse est « [1, 2, 3] » : b = a * 0 construit une nouvelle liste vide via __mul__ sans modifier a.

Débutant :
• Le * binaire crée un nouvel objet liste.

Intermédiaire :
• a et b pointent vers des objets distincts ; b est [].

Expert :
• __mul__ côté liste ne touche pas self en place.

Concepts clés :
• Non-mutation par opérateur *.

Distinctions clés :
• Ce scénario vs a *= 0 (vide la même liste).

Fonctionnement :
• Nouvelle liste allouée, taille zéro.

Exécution étape par étape :
1. a référence [1,2,3].
2. a*0 produit [] assigné à b ; a inchangé.

Ordre des opérations :
• Littéraux, multiplication, assignation à b.

Cas d'utilisation courants :
• Cloner pattern vide pour réinitialiser b sans affecter a.

Cas limites :
• a * (-1) ValueError sur liste (répétition négative).

Considérations de performance :
• Coût faible pour liste vide.

Exemples :
• id(a)!=id(b) après opération.

Remarques :
• Même id(a) reste si on faisait a *= 0 — d’où la question piège.`,

  1790: `La bonne réponse est "abc" : "".join(["a","b","c"]) insère le séparateur vide entre chaînes → concaténation directe.

Débutant :
• join est une méthode de str appelée sur le séparateur.

Intermédiaire :
• Tous les éléments doivent être str ; sinon TypeError.

Expert :
• join sur str est hautement optimisé en CPython vs boucle +.

Concepts clés :
• str.join ; séparateur possibly vide.

Distinctions clés :
• join vs + répété (coût quadratique si mal utilisé).

Fonctionnement :
• Calcul de taille totale puis remplissage unique du buffer résultat.

Exécution étape par étape :
1. Itérer a,b,c.
2. Assembler sans séparateur visible.

Ordre des opérations :
• Chaîne séparateur, liste d’arguments, appel join.

Cas d'utilisation courants :
• Construction CSV-like, assemblage de tokens.

Cas limites :
• join([]) → "".

Considérations de performance :
• Préféré pour grandes listes de morceaux.

Exemples :
• "-".join(["a","b"]) → "a-b".

Remarques :
• map(str, ...) avant join si nombres.`,

  1791: `La bonne réponse est "1,2,3" : map(str, ...) convertit chaque int en str ; join insère des virgules entre eux.

Débutant :
• join exige des chaînes ; map(str, ...) les fabrique.

Intermédiaire :
• map est lazy ; join le consomme entièrement.

Expert :
• Équivalent idiomatique : ",".join(str(x) for x in [1,2,3]).

Concepts clés :
• map + join ; coercion str.

Distinctions clés :
• Sans str, join([1,2,3]) lève TypeError.

Fonctionnement :
• Itération : str(1), str(2), str(3) puis collage avec ",".

Exécution étape par étape :
1. map produit "1","2","3".
2. join → "1,2,3".

Ordre des opérations :
• Littéral séparateur, map, join.

Cas d'utilisation courants :
• Export CSV léger, logs.

Cas limites :
• None dans la liste → str(None) textuel "None".

Considérations de performance :
• Un seul passage pour CPython optimisé.

Exemples :
• " ".join(map(str, range(3))) → "0 1 2".

Remarques :
• f-strings en compréhension si format plus riche.`,

  1792: `La bonne réponse est « [None, None, None, None, None] » : [None]*5 répète la liste à un élément cinq fois en une nouvelle liste.

Débutant :
• None est la valeur sentinelle unique ; cinq références au même singleton None.

Intermédiaire :
• Diffère du piège [[]]*3 où la mutable list est partagée.

Expert :
• Ici None immuable : pas de surprise de mutation croisée.

Concepts clés :
• Répétition de liste ; singleton None.

Distinctions clés :
• None répété vs listes mutables répétées.

Fonctionnement :
• Allocation d’une liste de taille 5 remplie du même pointeur None.

Exécution étape par étape :
1. [None] longueur 1.
2. *5 duplique les slots → 5.

Ordre des opérations :
• Expression de multiplication de liste évaluée une fois.

Cas d'utilisation courants :
• Pré-allocation logique « case vide » en grille.

Cas limites :
• *0 → [].

Considérations de performance :
• Rapide ; pas de boucle Python explicite.

Exemples :
• [0]*3 pour compteurs initiaux entiers.

Remarques :
• Pour listes internes distinctes : [[ ] for _ in range(5)].`,

  1793: `La bonne réponse est « TypeError » : en Python 3, comparer int et None avec < pour le tri est interdit ; sorted échoue.

Débutant :
• sorted doit ordonner totalement selon comparaisons.

Intermédiaire :
• Python 2 autorisait des comparaisons étranges ; plus en 3.

Expert :
• Contournement : clé custom (ex. tuples sentinelles) ou filtrer None.

Concepts clés :
• Tri total ; comparaisons inter-types restreintes.

Distinctions clés :
• Erreur vs placement de None à une extrémité avec key.

Fonctionnement :
• Algorithme de tri invoque rich comparisons ; NoneType vs int provoque TypeError.

Exécution étape par étape :
1. sorted tente comparer éléments.
2. Rencontre None vs int → exception.

Ordre des opérations :
• Appel sorted sur liste mixte.

Cas d'utilisation courants :
• Données sales : nettoyer ou clé de tri explicite.

Cas limites :
• listes entièrement None comparables entre eux ? None < None est aussi interdit.

Considérations de performance :
• Échoue avant tri complet.

Exemples :
• sorted([3,1,2]) OK homogène int.

Remarques :
• float('nan') complique aussi les tris — autre piège.`,

  1794: `La bonne réponse est « False » : chaque appel tuple([1,2]) alloue un nouveau tuple ; == peut être True mais is compare l’identité.

Débutant :
• Deux objets distincts peuvent avoir le même contenu.

Intermédiaire :
• Certaines petites constantes sont internées mais ne pas compter dessus pour constructions dynamiques.

Expert :
• id(a) != id(b) typiquement ici.

Concepts clés :
• Identité vs égalité de valeur.

Distinctions clés :
• is vs == sur immuables construits à la volée.

Fonctionnement :
• Constructeur tuple crée nouvelle instance depuis iterable.

Exécution étape par étape :
1. Premier tuple créé depuis liste [1,2].
2. Second tuple créé indépendamment.

Ordre des opérations :
• Deux assignations puis is.

Cas d'utilisation courants :
• Cache de tuples partagés : vérifier is pour partage volontaire.

Cas limites :
• Optimisations CPython sur littéraux (1,2) peuvent différer de tuple(liste).

Considérations de performance :
• Coût d’allocation supplémentaire si doublons inutiles.

Exemples :
• (1,2) is (1,2) parfois True en CPython — détail d’impl ; ne pas s’y fier en logique.

Remarques :
• En algorithmique, comparer avec == pour valeurs.`,

  1795: `La bonne réponse est "<class 'tuple'>" : la virgule crée un tuple ; a = 1, 2, 3 est un tuple de trois éléments.

Débutant :
• Les parenthèses sont souvent cosmétiques pour les tuples.

Intermédiaire :
• Tuple à un élément : trailing comma obligatoire (1,).

Expert :
• (1) sans virgule est juste un entier entre parenthèses.

Concepts clés :
• Virgule comme constructeur de tuple.

Distinctions clés :
• tuple vs liste (syntaxe [], mutabilité).

Fonctionnement :
• Grammar traite la suite d’expressions séparées par virgules comme tuple literal.

Exécution étape par étape :
1. Évalue 1,2,3 comme tuple.
2. Assigne à a ; type confirme tuple.

Ordre des opérations :
• Expression tuple puis assignation.

Cas d'utilisation courants :
• Retours multiples implicites, unpacking.

Cas limites :
• Tuple vide : () sans ambiguïté.

Considérations de performance :
• Tuple léger, souvent plus compact que liste.

Exemples :
• a = 1, → tuple un élément.

Remarques :
• PEP 8 : espaces après virgules pour lisibilité.`,

  1796: `La bonne réponse est « [1, 2, 3] » : *a, = [1,2,3] est un unpacking avec étoile seule côté gauche ; a capture tous les éléments dans une liste.

Débutant :
• La virgule rend la cible un tuple de patterns d’affectation.

Intermédiaire :
• Fonctionne aussi avec des tuples ou chaînes à droite.

Expert :
• Toujours une liste pour la variable étoilée, même si la source est un tuple.

Concepts clés :
• Starred assignment ; liste collectrice.

Distinctions clés :
• *a, vs a = [1,2,3] direct.

Fonctionnement :
• Le moteur d’affectation agrège les restes dans list.

Exécution étape par étape :
1. Itérable droit produit trois valeurs.
2. Toutes assignées à a comme liste.

Ordre des opérations :
• Évaluation RHS, puis pattern matching d’affectation.

Cas d'utilisation courants :
• Cloner liste en modifiable, « splat » inverse minimal.

Cas limites :
• *a, = [] → a = [].

Considérations de performance :
• Copie superficielle des références d’éléments.

Exemples :
• first, *rest = [1,2,3,4].

Remarques :
• Ne pas oublier la virgule après *a.`,

  1797: `La bonne réponse est « [1, 2, 3, 4] » : dans un littéral de liste, *a déploie les éléments de a puis ajoute 4.

Débutant :
• Sans étoile, [a,4] imbriquerait la liste.

Intermédiaire :
• Nouvelle liste ; a original inchangé.

Expert :
• Généralisation PEP 448 : plusieurs unpacks dans un même littéral.

Concepts clés :
• Itérable unpacking en construction de liste.

Distinctions clés :
• [*a,4] vs a + [4] (création aussi nouvelle liste mais autre expression).

Fonctionnement :
• Le constructeur de liste consomme l’itérable a élément par élément.

Exécution étape par étape :
1. a référence [1,2,3].
2. Nouvelle liste étendue avec 1,2,3 puis 4.

Ordre des opérations :
• Référence a, littéral avec unpack, évaluation complète.

Cas d'utilisation courants :
• Concaténation lisible sans répéter extend.

Cas limites :
• * sur non itérable → TypeError.

Considérations de performance :
• Similaire à + pour tailles comparables.

Exemples :
• [0, *a] préfixe.

Remarques :
• Même syntaxe dans appels de fonction pour kwargs/args étendus (autre contexte).`,

  1798: `La bonne réponse est « {1, 2, 3} » : le littéral set déploie deux listes ; les doublons (2) fusionnent ; un set ne garde qu’une fois chaque valeur.

Débutant :
• Un set = collection non ordonnée d’unicités.

Intermédiaire :
• L’ordre d’affichage peut varier ; le contenu est {1,2,3}.

Expert :
• {} seul crée un dict ; set vide nécessite set().

Concepts clés :
• Unpacking PEP 448 dans set ; déduplication.

Distinctions clés :
• {*[1,2],*[2,3]} vs liste concaténée avec répétitions.

Fonctionnement :
• Insertion successive des éléments dépliés ; structure hash interne.

Exécution étape par étape :
1. Insère 1,2 depuis première liste.
2. Insère 2,3 depuis seconde ; 2 déjà présent.

Ordre des opérations :
• Évaluation des listes, construction du set.

Cas d'utilisation courants :
• Union rapide de plusieurs sources itérables.

Cas limites :
• Éléments non hachables interdits dans le set.

Considérations de performance :
• Insertions amortized O(1).

Exemples :
• {*"hello"} longueur 4 lettres distinctes.

Remarques :
• Pour préserver ordre et unicité : dict.fromkeys ou 3.7+ dict clés.`,

  1799: `La bonne réponse est « (0, 1, 2, 3, 4) » : (*range(5),) est un tuple littéral dont l’unique « élément logique » est le dépliage de range(5) ; la virgule finale force le type tuple.

Débutant :
• range(5) produit 0..4 ; l’étoile injecte chaque valeur dans le tuple.

Intermédiaire :
• tuple(range(5)) est équivalent conceptuel.

Expert :
• (*range(5)) sans virgule est une SyntaxError — parenthèses seules ne forment pas un tuple ici.

Concepts clés :
• Unpacking dans tuple literal ; virgule de singleton tuple.

Distinctions clés :
• (*range(5),) vs [ *range(5) ] liste.

Fonctionnement :
• Construction tuple à partir des éléments issus de l’itérable.

Exécution étape par étape :
1. range(5) itérable consommé pour positions du tuple.
2. Résultat cinq entrées.

Ordre des opérations :
• range évalué, unpacking, tuple formé.

Cas d'utilisation courants :
• Conversion légère d’itérable en tuple fixe petit.

Cas limites :
• Itérable infini → ne pas mettre dans un tuple literal ainsi.

Considérations de performance :
• Tuple souvent plus compact que liste.

Exemples :
• (*"ab",) → ('a','b').

Remarques :
• La virgule trailing est le signal syntaxique clé.`,

  1800: `La bonne réponse est « ValueError » : list.index(4) sur [1,2,3] ne trouve pas 4 et lève une exception explicite.

Débutant :
• Pas de -1 magique comme en JavaScript pour indexOf.

Intermédiaire :
• Tester 4 in lst avant index évite l’exception.

Expert :
• try/except ValueError est un idiome acceptable si rare.

Concepts clés :
• Méthode list.index ; absence → ValueError.

Distinctions clés :
• index vs dict.get ; vs str.find (-1) sur chaînes.

Fonctionnement :
• Scan linéaire jusqu’à match ou fin → exception.

Exécution étape par étape :
1. Compare 4 à 1,2,3 successivement.
2. Fin de liste sans match → ValueError.

Ordre des opérations :
• Création liste littérale, appel .index(4).

Cas d'utilisation courants :
• Quand absence est anormal ; fail-fast.

Cas limites :
• Plusieurs occurrences : seule la première position.

Considérations de performance :
• O(n) pire cas.

Exemples :
• [1,2,3].index(2) → 1.

Remarques :
• enumerate + break pour contrôle fin sans exception.`,

};


