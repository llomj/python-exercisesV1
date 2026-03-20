/** Level 6 FR 1976–2000 — level6_intermediate_b.ts Q26–50 */
export default {
  1976: `min(d, key=d.get)

Débutant :
• d.get passé comme key : pour chaque clé k, la valeur utilisée pour comparer est d[k] ; minimum des valeurs 1,2,3 → clé "a".

Intermédiaire :
• d.get(k) équivaut à d[k] si k présent ; ici toutes les clés existent.

Expert :
• Évite lambda si la signature convient.

Concepts clés :
• Méthode unbound d.get comme fonction de clé.

Distinctions clés :
• min(d) comparerait les chaînes de clés.

Fonctionnement :
• Parcours clés avec comparaison sur valeurs.

Exécution étape par étape :
1. Plus petite valeur 1 → clé a.

Ordre des opérations :
• min sur itérable de clés.

Cas d'utilisation courants :
• Meilleur candidat par score minimal.

Cas limites :
• dict vide → ValueError.

Considérations de performance :
• O(n).

Exemples :
• max(d, key=d.get) pour le max.

Remarques :
• Réponse : 'a'.`,

  1977: `sorted(d, key=d.get)

Débutant :
• Trie les clés selon leurs valeurs croissantes : 1 (b), 2 (c), 3 (a) → ['b','c','a'].

Intermédiaire :
• sorted(d) donne les clés ; key réordonne par valeur.

Expert :
• Stable pour clés de valeurs égales (ordre relatif conservé).

Concepts clés :
• Tri par valeur indirecte.

Distinctions clés :
• sorted(d.values()) perd le lien clé.

Fonctionnement :
• Comparaisons sur d.get(k).

Exécution étape par étape :
1. Ordre b,c,a.

Ordre des opérations :
• Timsort sur clés avec clé externe.

Cas d'utilisation courants :
• Classement de joueurs par score.

Cas limites :
• Types non comparables entre valeurs.

Considérations de performance :
• O(n log n).

Exemples :
• reverse=True pour décroissant.

Remarques :
• Réponse : ['b', 'c', 'a'].`,

  1978: `sorted reverse par valeur

Débutant :
• Même tri que 1977 mais reverse=True : valeurs décroissantes 3,2,1 → clés a,c,b.

Intermédiaire :
• Équivalent à sorted(..., key=d.get)[::-1] conceptuellement.

Expert :
• Attention coût si on trie puis inverse inutilement deux fois.

Concepts clés :
• Paramètre reverse du tri.

Distinctions clés :
• Ne trie pas les valeurs seules, toujours les clés.

Fonctionnement :
• Ordre a,c,b.

Exécution étape par étape :
1. Tri décroissant par valeur.

Ordre des opérations :
• key puis reverse.

Cas d'utilisation courants :
• Podium.

Cas limites :
• Égalités : stabilité.

Considérations de performance :
• O(n log n).

Exemples :
• heapq.nlargest pour grands n.

Remarques :
• Réponse : ['a', 'c', 'b'].`,

  1979: `Somme des longueurs des listes en valeurs

Débutant :
• d = {"a": [1, 2], "b": [3]} : pour chaque liste v, len(v) donne 2 puis 1 ; sum(2, 1) = 3.

Intermédiaire :
• Ce n’est pas la somme des éléments des listes, seulement le nombre d’éléments par liste, additionné.

Expert :
• Générateur len(v) for v in d.values() sans liste intermédiaire.

Concepts clés :
• d.values(), len sur listes, sum sur générateur.

Distinctions clés :
• Ne pas confondre avec sum de tous les entiers contenus dans les listes.

Fonctionnement :
• Première valeur [1,2] → len 2 ; seconde [3] → len 1.

Exécution étape par étape :
1. 2 + 1 → 3.

Ordre des opérations :
• sum consomme le générateur.

Cas d'utilisation courants :
• Compter le nombre total d’éléments dans des groupes (valeurs liste).

Cas limites :
• Valeur non itérable ou sans len → erreur.

Considérations de performance :
• O(nombre total d’éléments) si len est O(1) par liste.

Exemples :
• Même idée pour compter des sous-listes dans un graphe.

Remarques :
• Réponse : 3.`,

  1980: `Intersection des clés (vues dict_keys)

Débutant :
• d.keys() et e.keys() sont des vues qui supportent les opérations d’ensemble ; & garde les clés présentes dans les deux → ici seulement "b".

Intermédiaire :
• list(...) matérialise en liste ; avec une seule clé, on obtient ["b"].

Expert :
• Équivalent conceptuel à set(d) & set(e) sur les clés, mais idiomatique avec les vues en Python 3.

Concepts clés :
• dict_keys, &, intersection.

Distinctions clés :
• Ce n’est pas l’intersection des valeurs ni des items.

Fonctionnement :
• {"a","b"} & {"b","c"} → {"b"}.

Exécution étape par étape :
1. list → ['b'] (ordre d’itération peut varier si plusieurs clés ; ici une seule).

Ordre des opérations :
• .keys() puis & puis list().

Cas d'utilisation courants :
• Champs communs entre deux enregistrements ou configs.

Cas limites :
• Aucune clé commune → [].

Considérations de performance :
• Efficace sur les vues sans copie complète inutile.

Exemples :
• d.keys() | e.keys() pour l’union.

Remarques :
• Réponse : ['b'].`,

  1981: `Clés pour une valeur donnée

Débutant :
• Parcourt items ; garde k si v==1 → a et c.

Intermédiaire :
• Ordre d’insertion du dict source : a,b,c → liste ['a','c'].

Expert :
• Si plusieurs v==1, toutes les clés correspondantes apparaissent.

Concepts clés :
• Filtrage sur valeur, liste en comprehension.

Distinctions clés :
• vs dict inverse unique (une valeur → une clé).

Fonctionnement :
• Test d’égalité stricte 1.

Exécution étape par étape :
1. a:1 oui, b:2 non, c:1 oui.

Ordre des opérations :
• Parcours items.

Cas d'utilisation courants :
• Index inverse partiel.

Cas limites :
• Float 1.0 vs int 1.

Considérations de performance :
• O(n).

Exemples :
• defaultdict(list) pour index multi.

Remarques :
• Réponse : ['a', 'c'].`,

  1982: `Inversion clé↔valeur

Débutant :
• {v:k for k,v in d.items()} → 1:'a', 2:'b'.

Intermédiaire :
• Si deux clés avaient la même valeur, collision (pas ici).

Expert :
• Valeurs doivent être hashables pour servir de clés.

Concepts clés :
• Dict comprehension swap.

Distinctions clés :
• Pas réversible si non injective.

Fonctionnement :
• Deux paires inversées.

Exécution étape par étape :
1. Nouveau mapping.

Ordre des opérations :
• items puis comprehension.

Cas d'utilisation courants :
• Lookup inverse ponctuel.

Cas limites :
• Valeurs non uniques.

Considérations de performance :
• O(n).

Exemples :
• bijection str↔int contrôlée.

Remarques :
• Réponse : {1: 'a', 2: 'b'}.`,

  1983: `Alias : d2 is d1

Débutant :
• d2 = d1 ne copie pas le dictionnaire : les deux noms pointent vers le même objet → is renvoie True.

Intermédiaire :
• Modifier l’un change l’autre ; pour une copie superficielle : copy() ou dict(d1).

Expert :
• is compare l’identité (adresse), pas seulement le contenu.

Concepts clés :
• Référence, alias, opérateur is.

Distinctions clés :
• d2 == d1 serait True aussi ici, mais is renforce l’identité d’objet.

Fonctionnement :
• Assignation de référence.

Exécution étape par étape :
1. Un seul objet dict en mémoire, deux noms.

Ordre des opérations :
• Création de d1 puis liaison de d2.

Cas d'utilisation courants :
• Passer un dict mutable à une fonction : risque de mutation partagée.

Cas limites :
• deepcopy si valeurs internes mutables imbriquées.

Considérations de performance :
• Alias sans coût de copie.

Exemples :
• id(d1) == id(d2).

Remarques :
• Réponse : True.`,

  1984: `dict.fromkeys(range(5), 0)

Débutant :
• Crée les clés 0,1,2,3,4 et assigne la valeur 0 à chacune : {0:0, 1:0, 2:0, 3:0, 4:0}.

Intermédiaire :
• Le second argument est la valeur unique partagée pour toutes les clés (ici int immuable, pas de piège de partage).

Expert :
• Avec une valeur mutable (ex. []), toutes les clés partageraient la même liste.

Concepts clés :
• fromkeys, range(5), valeur par défaut.

Distinctions clés :
• vs compréhension {k: 0 for k in range(5)} équivalente pour int.

Fonctionnement :
• Itération des clés puis remplissage.

Exécution étape par étape :
1. Cinq entrées, toutes à 0.

Ordre des opérations :
• Appel statique dict.fromkeys.

Cas d'utilisation courants :
• Initialiser des compteurs ou des drapeaux à 0/false.

Cas limites :
• Valeur mutable partagée (anti-pattern).

Considérations de performance :
• Implémentation efficace en CPython.

Exemples :
• fromkeys("abc", None).

Remarques :
• Réponse : {0: 0, 1: 0, 2: 0, 3: 0, 4: 0}.`,

  1985: `isinstance({}, dict)

Débutant :
• {} construit un dictionnaire vide ; isinstance({}, dict) est True.

Intermédiaire :
• isinstance accepte aussi les sous-classes de dict.

Expert :
• type({}) == dict est vrai pour un dict exact, mais isinstance est l’idiome pour les hiérarchies.

Concepts clés :
• isinstance, type dict.

Distinctions clés :
• Ne pas confondre avec isinstance({}, (dict, list)) pour unions de types.

Fonctionnement :
• Vérification dans la chaîne de classes.

Exécution étape par étape :
1. True.

Ordre des opérations :
• Création du littéral puis appel.

Cas d'utilisation courants :
• Valider des paramètres (attendre un mapping).

Cas limites :
• Objets duck-typing sans héritage dict → False.

Considérations de performance :
• Coût négligeable.

Exemples :
• isinstance({"a": 1}, dict).

Remarques :
• Réponse : True.`,

  1986: `type(d.keys())

Débutant :
• d.keys() renvoie une vue de type dict_keys ; type(...) affiche la classe, par ex. <class 'dict_keys'>.

Intermédiaire :
• Ce n’est ni une list ni un set, mais une vue dynamique sur les clés.

Expert :
• Les vues supportent aussi des opérations ensemblistes (|, &, etc.) en Python 3.

Concepts clés :
• Vue dict_keys, type(), introspection.

Distinctions clés :
• vs list(d.keys()) qui est une copie liste.

Fonctionnement :
• La vue reste liée au dict sous-jacent.

Exécution étape par étape :
1. type(d.keys()) → classe dict_keys (repr standard du QCM).

Ordre des opérations :
• .keys() puis type().

Cas d'utilisation courants :
• Déboguer le type exact renvoyé par l’API dict.

Cas limites :
• dict vide : vue toujours dict_keys.

Considérations de performance :
• Création de la vue en temps constant.

Exemples :
• isinstance(d.keys(), type({}.keys())).

Remarques :
• Réponse attendue : <class 'dict_keys'>.`,

  1987: `type(d.items())

Débutant :
• dict_items paires (clé, valeur) vues.

Intermédiaire :
• Itération renvoie vues dynamiques en 3.8+ selon contexte.

Expert :
• set(d.items()) utile pour comparaison d’ensembles de paires.

Concepts clés :
• Vue items.

Distinctions clés :
• vs zip(d.keys(), d.values()).

Fonctionnement :
• Liaison au dict.

Exécution étape par étape :
1. dict_items.

Ordre des opérations :
• .items() puis type.

Cas d'utilisation courants :
• Parcours for k,v.

Cas limites :
• Taille change pendant itération.

Considérations de performance :
• Vue légère.

Exemples :
• list(items) pour figer.

Remarques :
• Réponse : dict_items.`,

  1988: `set(d.items())

Débutant :
• d.items() produit les paires ("a", 1) et ("b", 2) ; ce sont des tuples dont tous les éléments sont hashables → set() construit un ensemble de ces paires.

Intermédiaire :
• Le résultat est un set à deux éléments (les deux tuples), pas un set de clés seules.

Expert :
• L’ordre d’affichage du set n’est pas garanti, mais le contenu correspond aux deux paires.

Concepts clés :
• dict_items, tuples hashables, set.

Distinctions clés :
• set(d.keys()) donnerait un set de chaînes, pas de paires.

Fonctionnement :
• Itération sur items puis insertion dans le set.

Exécution étape par étape :
1. Éléments {("a", 1), ("b", 2)} au sens logique du QCM.

Ordre des opérations :
• .items() puis set(...).

Cas d'utilisation courants :
• Comparer deux dicts via intersection ou différence symétrique sur les paires.

Cas limites :
• Valeur non hashable → voir question suivante (TypeError).

Considérations de performance :
• O(n) dans le nombre de paires.

Exemples :
• ("a", 1) in set(d.items()).

Remarques :
• Réponse du quiz : ensemble des deux tuples (forme affichée du type {("a", 1), ("b", 2)}).`,

  1989: `set(d.items()) avec listes

Débutant :
• Les valeurs sont des listes → les tuples (clé, liste) contiennent une liste non hashable → TypeError.

Intermédiaire :
• set exige éléments hashables.

Expert :
• Convertir en tuple(v) ou utiliser frozenset pour représentations figées si besoin.

Concepts clés :
• Hashabilité, erreur à la construction du set.

Distinctions clés :
• dict OK, set(items) pas toujours.

Fonctionnement :
• Échec lors de tentative d’insertion.

Exécution étape par étape :
1. Exception.

Ordre des opérations :
• set() itère items et échoue.

Cas d'utilisation courants :
• Détecter valeurs non sérialisables en clé.

Cas limites :
• objets mutables comme valeurs courants en JSON-like.

Considérations de performance :
• Échec rapide.

Exemples :
• repr des valeurs pour comparaison.

Remarques :
• Réponse : TypeError.`,

  1990: `Chaîne f avec lookups dans le dict

Débutant :
• d = {"name": "Alice", "age": 30} ; dans la f-string, d['name'] vaut Alice et d['age'] vaut 30.

Intermédiaire :
• Guillemets doubles autour de la f-string, guillemets simples à l’intérieur des crochets pour éviter le conflit.

Expert :
• Toute expression valide peut aller dans {} ; ici accès bracket standard.

Concepts clés :
• f-string, interpolation, d[clé].

Distinctions clés :
• vs d.get pour éviter KeyError si clé absente.

Fonctionnement :
• Évaluation des deux expressions entre accolades puis concaténation.

Exécution étape par étape :
1. "Name: Alice, Age: 30".

Ordre des opérations :
• Lecture du littéral f puis évaluation des { }.

Cas d'utilisation courants :
• Messages utilisateur, logs structurés.

Cas limites :
• Clé manquante → KeyError comme hors f-string.

Considérations de performance :
• Implémentation optimisée (PEP 498).

Exemples :
• f"{user['id']:05d}" avec formatage.

Remarques :
• Réponse : "Name: Alice, Age: 30".`,

  1991: `Clé tuple

Débutant :
• d[(1,2)] = "tuple key" puis lookup avec le même tuple → "tuple key".

Intermédiaire :
• Tuple hashable si éléments hashables.

Expert :
• Liste [1,2] ne pourrait pas être clé.

Concepts clés :
• Clé composite immuable.

Distinctions clés :
• (1,2) vs (2,1) distincts.

Fonctionnement :
• Hash et égalité de tuple.

Exécution étape par étape :
1. Retour chaîne.

Ordre des opérations :
• Création dict puis [].

Cas d'utilisation courants :
• Grilles, paires (id, scope).

Cas limites :
• Tuple contenant liste interdit.

Considérations de performance :
• Hash tuple O(len).

Exemples :
• cache[(fn, args)].

Remarques :
• Réponse : 'tuple key'.`,

  1992: `Clé frozenset

Débutant :
• On enregistre avec d[frozenset({1, 2})] = "fs key" ; relire avec frozenset({1, 2}) renvoie "fs key".

Intermédiaire :
• frozenset({1, 2}) et frozenset({2, 1}) ont le même contenu : accès équivalent.

Expert :
• Un set mutable ne peut pas être clé ; frozenset est immuable et hashable.

Concepts clés :
• frozenset, clé composite, égalité d’ensembles.

Distinctions clés :
• Ne pas utiliser {1, 2} (set) comme clé de dict.

Fonctionnement :
• Hash et égalité basés sur les éléments, pas sur l’ordre d’écriture.

Exécution étape par étape :
1. Retour "fs key".

Ordre des opérations :
• Création du frozenset, assignation, lecture.

Cas d'utilisation courants :
• Tags ou arêtes non orientées comme clé.

Cas limites :
• Éléments du frozenset doivent être hashables.

Considérations de performance :
• Coût de hash proportionnel à la taille.

Exemples :
• Cache indexé par frozenset d’arguments.

Remarques :
• Réponse : 'fs key'.`,

  1993: `get avec défaut

Débutant :
• d.get("a", 0) retourne 1 car "a" existe.

Intermédiaire :
• Le 0 n’est pas utilisé si clé présente.

Expert :
• get évite try/except KeyError.

Concepts clés :
• Méthode get, défaut.

Distinctions clés :
• d["a"] vs get si absent.

Fonctionnement :
• Test de présence puis valeur ou défaut.

Exécution étape par étape :
1. Retour 1.

Ordre des opérations :
• Appel get.

Cas d'utilisation courants :
• Compteurs optionnels.

Cas limites :
• get retourne None si défaut omis et absent.

Considérations de performance :
• O(1) amortized.

Exemples :
• d[k] = d.get(k,0)+1.

Remarques :
• Réponse : 1.`,

  1994: `Collision True et 1

Débutant :
• True et 1 ont la même égalité et le même hash pour les dict : une seule entrée ; la clé affichée reste celle vue en premier (True), la valeur finale est celle du dernier doublon → "one".

Intermédiaire :
• Littéral {True: "yes", 1: "one"} se résout en {True: "one"}.

Expert :
• bool est une sous-classe de int ; True vaut 1 au sens d’égalité avec 1.

Concepts clés :
• Collision de clés, égalité, hash.

Distinctions clés :
• Les chaînes "1" et la clé int 1 ne collisionnent pas.

Fonctionnement :
• Deuxième paire met à jour la valeur de la clé unifiée.

Exécution étape par étape :
1. Une entrée, valeur "one".

Ordre des opérations :
• Construction gauche-droite du littéral.

Cas d'utilisation courants :
• Normaliser les clés avant insertion (tout en str ou tout en int).

Cas limites :
• Même piège avec 1.0 et True selon versions/impl (hors focus).

Considérations de performance :
• Négligeable.

Exemples :
• {0: "a", False: "b"} → une seule clé 0/False.

Remarques :
• Réponse : {True: "one"} (forme équivalente du QCM).`,

  1995: `Collision 0 et False

Débutant :
• 0 et False sont la même clé pour un dict ; {0: "zero", False: "false"} devient {0: "false"} : la clé conservée est 0 (vue en premier), la dernière valeur écrase.

Intermédiaire :
• Même logique que True/1 avec les booléens intégrés.

Expert :
• issubclass(bool, int) explique pourquoi 0 et False collisionnent.

Concepts clés :
• Collision 0/False, hash, égalité.

Distinctions clés :
• La chaîne "0" ne collisionne pas avec l’entier 0.

Fonctionnement :
• Une seule case de table pour 0 et False.

Exécution étape par étape :
1. Résultat une entrée, valeur "false".

Ordre des opérations :
• Évaluation séquentielle du littéral.

Cas d'utilisation courants :
• Éviter d’utiliser à la fois 0 et False comme clés « différentes ».

Cas limites :
• Affichage REPL peut montrer 0 ou False selon contexte, mais une seule paire.

Considérations de performance :
• Négligeable.

Exemples :
• Préférer des clés homogènes (str ou int seul).

Remarques :
• Réponse : {0: "false"}.`,

  1996: `del d["a"]

Débutant :
• Supprime la clé a ; d reste vide {}.

Intermédiaire :
• del sur mapping modifie in-place.

Expert :
• del d[: ] n’existe pas ; clear() pour tout vider.

Concepts clés :
• Instruction del, KeyError si absent.

Distinctions clés :
• pop retourne la valeur.

Fonctionnement :
• Retrait de l’entrée.

Exécution étape par étape :
1. dict vide.

Ordre des opérations :
• del statement.

Cas d'utilisation courants :
• Retirer option désactivée.

Cas limites :
• Clé manquante.

Considérations de performance :
• O(1) amortized.

Exemples :
• d.pop("a", None) sûr.

Remarques :
• Réponse : {}.`,

  1997: `__contains__

Débutant :
• "a" in d appelle d.__contains__("a") → True.

Intermédiaire :
• Opérateur in sur dict teste les clés, pas les valeurs.

Expert :
• Peut être surchargé dans sous-classes.

Concepts clés :
• Containment sur clés.

Distinctions clés :
• "x" in d.values() teste valeurs.

Fonctionnement :
• Hash lookup clé.

Exécution étape par étape :
1. True.

Ordre des opérations :
• Appel spécial.

Cas d'utilisation courants :
• if key in config.

Cas limites :
• Clés NaN égalité bizarre (hors QCM).

Considérations de performance :
• O(1) amortized.

Exemples :
• hasattr pour attributs, in pour clés.

Remarques :
• Réponse : True.`,

  1998: `__getitem__

Débutant :
• d["a"] déclenche __getitem__ → 1.

Intermédiaire :
• KeyError si absent sauf defaultdict.

Expert :
• d.__getitem__("a") équivalent direct.

Concepts clés :
• Accès par crochets.

Distinctions clés :
• get ne lève pas.

Fonctionnement :
• Lookup hash table.

Exécution étape par étape :
1. Retour 1.

Ordre des opérations :
• Opcode BINARY_SUBSCR.

Cas d'utilisation courants :
• Indexation standard.

Cas limites :
• Sous-classes peuvent intercepter.

Considérations de performance :
• O(1) amortized.

Exemples :
• MappingProxyType lecture seule.

Remarques :
• Réponse : 1.`,

  1999: `__setitem__

Débutant :
• d["b"]=2 appelle __setitem__ ; résultat {"a":1,"b":2}.

Intermédiaire :
• Crée ou remplace l’entrée b.

Expert :
• d.update utilise plusieurs setitem en pratique.

Concepts clés :
• Affectation sur mapping.

Distinctions clés :
• setattr sur objets, setitem sur mapping.

Fonctionnement :
• Insertion hash.

Exécution étape par étape :
1. Deux clés.

Ordre des opérations :
• Statement d["b"]=2.

Cas d'utilisation courants :
• Construire dict incrémentalement.

Cas limites :
• Clé non hashable.

Considérations de performance :
• O(1) amortized.

Exemples :
• d |= {"b":2} aussi fusion.

Remarques :
• Réponse : {"a": 1, "b": 2}.`,

  2000: `list(d.values())[::-1]

Débutant :
• values() 1 puis 2 ; list → [1,2] ; slice [::-1] inverse → [2,1].

Intermédiaire :
• Copie liste intermédiaire avant inversion.

Expert :
• reversed(list(d.values())) équivalent conceptuel.

Concepts clés :
• Vue values, list matérialisée, slice step -1.

Distinctions clés :
• reversed(d.values()) est itérateur sans copie liste complète si chaîné correctement.

Fonctionnement :
• Ordre d’insertion du dict puis inversion.

Exécution étape par étape :
1. [2,1].

Ordre des opérations :
• values → list → slice.

Cas d'utilisation courants :
• Afficher valeurs dernière entrée d’abord.

Cas limites :
• dict vide → [].

Considérations de performance :
• Copie O(n) mémoire.

Exemples :
• list(reversed(list(d.values()))).

Remarques :
• Réponse : [2, 1].`,
};
