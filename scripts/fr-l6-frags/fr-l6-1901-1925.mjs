/** Level 6 FR 1901–1925 — level6_intermediate_a.ts Q1–25 */
export default {
  1901: `Accès dict imbriqué en chaîne

Débutant :
• d["a"]["x"] lit d’abord le sous-dict sous "a", puis la clé "x" dedans → 1.

Intermédiaire :
• Équivalent à (d["a"])["x"] ; chaque [] descend d’un niveau.

Expert :
• Si d["a"] manque ou n’est pas un mapping, erreur à l’étape correspondante.

Concepts clés :
• Indexation chaînée, structure JSON-like.

Distinctions clés :
• d["a","x"] n’existe pas en Python (syntaxe autre langage).

Fonctionnement :
• Évaluation de d["a"] puis ["x"] sur le résultat.

Exécution étape par étape :
1. d["a"] → {"x":1}
2. ["x"] → 1

Ordre des opérations :
• De gauche à droite pour les crochets successifs.

Cas d'utilisation courants :
• Parcourir config["db"]["host"].

Cas limites :
• KeyError si une clé intermédiaire absente.

Considérations de performance :
• Plusieurs lookups successifs O(1) amorti chacun.

Exemples :
• Données utilisateur["profil"]["email"].

Remarques :
• Réponse : 1.`,

  1902: `Mutation du dict interne

Débutant :
• d["a"]["y"] = 2 ajoute la clé "y" dans le dict référencé par "a", sans remplacer "a".

Intermédiaire :
• "x":1 est conservé ; le même objet dict interne est muté.

Expert :
• Si plusieurs clés externes pointaient vers le même sous-dict, toutes verraient le changement.

Concepts clés :
• Affectation chaînée, mutation in-place du niveau interne.

Distinctions clés :
• Remplacer d["a"] entièrement effacerait l’ancien sous-dict.

Fonctionnement :
• Résolution de d["a"], puis __setitem__ pour "y".

Exécution étape par étape :
1. d["a"] est {"x":1}
2. assignation y→2 sur ce dict
3. d["a"] vaut {"x":1,"y":2}

Ordre des opérations :
• D’abord la cible du membre gauche, puis écriture.

Cas d'utilisation courants :
• Remplir une section de configuration imbriquée.

Cas limites :
• d["a"] absent → KeyError avant assignation.

Considérations de performance :
• Une écriture sur le sous-objet.

Exemples :
• d["a"]["x"] = 99 écrase x.

Remarques :
• Réponse : {'x': 1, 'y': 2} pour la clé "a".`,

  1903: `Trois niveaux d’imbrication

Débutant :
• d["a"]["b"]["c"] enchaîne trois accès jusqu’à la valeur 3.

Intermédiaire :
• Chaque niveau doit être un dict (ou mapping) indexable.

Expert :
• Profondeur arbitraire possible tant que la structure est cohérente.

Concepts clés :
• Navigation profonde, robustesse des données.

Distinctions clés :
• get chaîné avec défauts évite KeyError (hors QCM).

Fonctionnement :
• a → dict b → dict c → int 3.

Exécution étape par étape :
1. d["a"] → {"b":{...}}
2. ["b"] → {"c":3}
3. ["c"] → 3

Ordre des opérations :
• Strictement de l’extérieur vers l’intérieur.

Cas d'utilisation courants :
• Arbres de paramètres, réponses API imbriquées.

Cas limites :
• None à un niveau → TypeError au niveau suivant.

Considérations de performance :
• k lookups O(k) amorti.

Exemples :
• Quatre niveaux : même principe.

Remarques :
• Réponse : 3.`,

  1904: `Liste dans un dict

Débutant :
• d["users"] est une liste de dicts ; [0] prend le premier élément ; ["name"] lit "Alice".

Intermédiaire :
• Mélange conteneurs : dict → list → dict → valeur.

Expert :
• Si la liste est vide, [0] lève IndexError.

Concepts clés :
• Indexation numérique puis clé str.

Distinctions clés :
• d["users"]["0"] serait une clé str "0", pas l’indice 0.

Fonctionnement :
• users[0] → {"name":"Alice"} ; puis ["name"].

Exécution étape par étape :
1. Liste accédée.
2. Premier dict.
3. Clé "name".

Ordre des opérations :
• Crochets évalués de gauche à droite.

Cas d'utilisation courants :
• Premier enregistrement d’une API type REST.

Cas limites :
• Clé "name" absente dans l’élément → KeyError.

Considérations de performance :
• Accès O(1) dict + O(1) index liste.

Exemples :
• users[-1] pour le dernier.

Remarques :
• Réponse : Alice (chaîne du QCM).`,

  1905: `Longueur d’une liste stockée

Débutant :
• len(d["users"]) compte les éléments de la liste "users" → 2 entrées Alice et Bob.

Intermédiaire :
• len ne compte pas les clés du dict racine ici.

Expert :
• len sur liste vide → 0.

Concepts clés :
• len sur valeur de type list.

Distinctions clés :
• len(d) serait le nombre de clés racine (1 ici : "users").

Fonctionnement :
• Accès users puis len de la liste.

Exécution étape par étape :
1. d["users"] → liste deux éléments.
2. len → 2.

Ordre des opérations :
• D’abord l’expression entre parenthèses implicites de len.

Cas d'utilisation courants :
• Pagination, comptage d’éléments chargés.

Cas limites :
• Si "users" n’est pas une liste → TypeError.

Considérations de performance :
• O(1) pour len(liste) en CPython.

Exemples :
• len(d["users"][0]) nombre de clés du premier user.

Remarques :
• Réponse : 2.`,

  1906: `setdefault avec dict par défaut

Débutant :
• setdefault("a", {}) renvoie le dict sous "a", le créant vide si absent ; ["x"]=1 écrit dedans → {"a":{"x":1}}.

Intermédiaire :
• Le {} par défaut n’est utilisé qu’à la première création de "a".

Expert :
• Attention : passer {} comme défaut partagé en boucle piège ; ici un seul appel.

Concepts clés :
• setdefault, mutation du sous-dict retourné.

Distinctions clés :
• d["a"] = d.get("a", {}); d["a"]["x"]=1 en deux temps équivalent si "a" absent.

Fonctionnement :
• setdefault insère "a":{} si besoin, retourne la référence, puis assignation x.

Exécution étape par étape :
1. Création racine et clé "a" avec dict vide si manquante.
2. Écriture x:1 dans ce dict.

Ordre des opérations :
• setdefault puis indexation assignation.

Cas d'utilisation courants :
• Agrégation multi-niveaux sans if préalable.

Cas limites :
• Si "a" existait déjà avec une non-dict → erreur au ["x"].

Considérations de performance :
• Un lookup + possible insertion.

Exemples :
• Comptage par groupe avec setdefault(list).

Remarques :
• Réponse : {"a": {"x": 1}}.`,

  1907: `setdefault avec liste

Débutant :
• Chaque setdefault("a", []) sur la même clé existante retourne la même liste ; append empile 1 puis 2 → {"a":[1,2]}.

Intermédiaire :
• Le second setdefault ne remplace pas la liste déjà là.

Expert :
• Si "a" n’existait pas, le [] par défaut serait utilisé une fois puis réutilisé.

Concepts clés :
• setdefault sur list, mutation append.

Distinctions clés :
• Deux appels distincts à setdefault("a",[]) partagent la liste créée au premier.

Fonctionnement :
• Première fois : crée "a":[] ; append 1. Deuxième : récupère la même liste ; append 2.

Exécution étape par étape :
1. Liste unique sous "a".
2. Contenu [1, 2].

Ordre des opérations :
• Lignes séquentielles.

Cas d'utilisation courants :
• Regrouper des éléments par clé dans une boucle.

Cas limites :
• fromkeys avec [] partagé : piège différent mais voisin.

Considérations de performance :
• Amortized O(1) par append.

Exemples :
• setdefault pour accumulateur par mot-clé.

Remarques :
• Réponse : {"a": [1, 2]}.`,

  1908: `Inversion clé↔valeur (valeurs uniques)

Débutant :
• {v:k for k,v in d.items()} échange : 1→'a', 2→'b' → {1:'a', 2:'b'}.

Intermédiaire :
• Les valeurs deviennent clés ; elles doivent être hachables.

Expert :
• Si deux clés originales avaient la même valeur, collision (voir 1909).

Concepts clés :
• Dict comprehension, items(), inversion.

Distinctions clés :
• Inverse partiel si doublons de valeurs.

Fonctionnement :
• Itération sur paires, construction nouvelles paires v:k.

Exécution étape par étape :
1. ('a',1)→1:'a' ; ('b',2)→2:'b'.

Ordre des opérations :
• Ordre d’insertion suit items() du dict source.

Cas d'utilisation courants :
• Index inverse pour recherche O(1) par valeur (si bijection).

Cas limites :
• Valeurs non hachables → TypeError.

Considérations de performance :
• O(n).

Exemples :
• Inverser un petit mapping d’énum.

Remarques :
• Réponse : {1: 'a', 2: 'b'}.`,

  1909: `Inversion avec valeurs dupliquées

Débutant :
• "a" et "b" valent tous deux 1 ; la comprehension écrit 1:'a' puis 1:'b' écrase → {1:'b'} seulement.

Intermédiaire :
• Dernière paire traitée dans l’ordre d’itération gagne.

Expert :
• Pour conserver toutes les clés par valeur, utiliser dict de listes ou defaultdict(list).

Concepts clés :
• Unicité des clés, écrasement silencieux.

Distinctions clés :
• Pas d’erreur si collision : comportement à connaître.

Fonctionnement :
• Deux itérations sur la même clé cible 1.

Exécution étape par étape :
1. 1:'a' puis remplacement 1:'b'.

Ordre des opérations :
• Ordre items() en 3.7+ déterministe.

Cas d'utilisation courants :
• Détecter ambiguïtés d’inversion.

Cas limites :
• Plus de deux clés même valeur : une seule survit.

Considérations de performance :
• Toujours O(n).

Exemples :
• Inverser graphe adjacence simple.

Remarques :
• Réponse : {1: 'b'}.`,

  1910: `Fusion par dépaquetage et clé supplémentaire

Débutant :
• {**d1, **d2, "c":3} fusionne d1 puis d2 puis ajoute c ; clés de d2 écrasent d1 si collision, ici pas de conflit → {"a":1,"b":2,"c":3}.

Intermédiaire :
• L’ordre des ** détermine la priorité en cas de même clé.

Expert :
• Crée un nouveau dict ; d1 et d2 inchangés.

Concepts clés :
• Unpacking PEP 448, littéral mixte.

Distinctions clés :
• vs d1.update(d2) qui mute.

Fonctionnement :
• Insérer paires de d1, puis d2, puis "c":3.

Exécution étape par étape :
1. a:1, b:2, c:3 selon fusion.

Ordre des opérations :
• De gauche à droite pour résolution collisions.

Cas d'utilisation courants :
• Defaults + overrides + constantes.

Cas limites :
• Clés non str en clé expression (hors ce cas).

Considérations de performance :
• Allocation nouveau dict O(n).

Exemples :
• {**base, **patch}.

Remarques :
• Réponse : {"a": 1, "b": 2, "c": 3}.`,

  1911: `Comprehension avec filtre sur valeurs

Débutant :
• Garde les paires où v > 1 → seulement "b":2 et "c":3.

Intermédiaire :
• "a":1 est exclu.

Expert :
• Peut combiner conditions sur k et v.

Concepts clés :
• if en fin de dict comprehension, prédicat sur v.

Distinctions clés :
• Filtrer avant inversion ou après selon besoin.

Fonctionnement :
• Test v>1 pour chaque paire.

Exécution étape par étape :
1. b:2 et c:3 conservés.

Ordre des opérations :
• Ordre d’origine préservé pour les survivants.

Cas d'utilisation courants :
• Sous-ensemble de métriques au-dessus d’un seuil.

Cas limites :
• Si aucune valeur >1 → {}.

Considérations de performance :
• Un passage O(n).

Exemples :
• if v % 2 == 0.

Remarques :
• Réponse : {"b": 2, "c": 3}.`,

  1912: `list(d) rappel

Débutant :
• list(d) sur {"a":1,"b":2} donne les clés ['a','b'] en ordre d’insertion.

Intermédiaire :
• Pas les valeurs ni les paires.

Expert :
• Idem niveau précédent ; consolidation pédagogique.

Concepts clés :
• Itération dict = clés.

Distinctions clés :
• list(d.items()) pour paires.

Fonctionnement :
• Matérialisation des clés en liste.

Exécution étape par étape :
1. Itération a, b → liste.

Ordre des opérations :
• Évaluation d puis list().

Cas d'utilisation courants :
• Snapshot des clés avant mutation pendant parcours.

Cas limites :
• dict vide → [].

Considérations de performance :
• O(n) mémoire.

Exemples :
• sorted(list(d)) pour ordre trié.

Remarques :
• Réponse : ['a', 'b'].`,

  1913: `Tri par valeur puis dict()

Débutant :
• sorted(d.items(), key=lambda x: x[1]) trie par la valeur ; dict(...) reconstruit un dict dans l’ordre trié → {'a':1,'b':2}.

Intermédiaire :
• x est (clé, valeur) ; x[1] est la valeur.

Expert :
• En 3.7+ le dict résultat garde l’ordre d’insertion issu du tri.

Concepts clés :
• sorted avec key, reconstruction dict.

Distinctions clés :
• sorted(d) trierait les clés, pas les valeurs.

Fonctionnement :
• Paires triées par composante valeur croissante.

Exécution étape par étape :
1. Items (a,1),(b,2) déjà ordonnés par valeur ici.

Ordre des opérations :
• sorted puis appel constructeur dict.

Cas d'utilisation courants :
• Classement d’entrées par score.

Cas limites :
• Valeurs non comparables → TypeError.

Considérations de performance :
• O(n log n) pour le tri.

Exemples :
• reverse=True pour ordre décroissant.

Remarques :
• Réponse : {"a": 1, "b": 2}.`,

  1914: `Tri par clé avec sorted(items)

Débutant :
• sorted(d.items()) trie par clé (tuple compare composante par composante) → ordre a puis b → {"a":1,"b":2}.

Intermédiaire :
• L’ordre d’insertion initial b,a est réordonné alphabétiquement par clé str.

Expert :
• dict() consomme l’itérable de paires triées.

Concepts clés :
• Tri lexicographique des clés via items.

Distinctions clés :
• key=lambda x: x[0] explicite équivalent ici.

Fonctionnement :
• ('a',1) avant ('b',2).

Exécution étape par étape :
1. Liste triée de paires.
2. Nouveau dict.

Ordre des opérations :
• sorted puis dict.

Cas d'utilisation courants :
• Affichage canonique pour diff.

Cas limites :
• Clés hétérogènes non comparables.

Considérations de performance :
• O(n log n).

Exemples :
• sorted(d) seul donne clés ; ici on veut paires complètes.

Remarques :
• Réponse : {"a": 1, "b": 2}.`,

  1915: `max avec key=d.get

Débutant :
• max(d, key=d.get) choisit la clé dont la valeur est maximale → 'c' pour valeurs 1,2,3.

Intermédiaire :
• max itère les clés ; d.get(k) fournit la métrique.

Expert :
• Équivalent mental : max sur items par valeur puis prendre la clé.

Concepts clés :
• Argument key de max, méthode get comme callable.

Distinctions clés :
• max(d) donnerait 'c' lexicographiquement par hasard aligné ici, mais la sémantique générale diffère.

Fonctionnement :
• Compare d.get('a'), d.get('b'), d.get('c').

Exécution étape par étape :
1. Valeurs 1,2,3 ; max → clé 'c'.

Ordre des opérations :
• max évalue key pour chaque candidat clé.

Cas d'utilisation courants :
• Trouver le champion dans un tableau de scores nommés.

Cas limites :
• dict vide → ValueError.

Considérations de performance :
• O(n).

Exemples :
• min(d, key=d.get) pour le minimum.

Remarques :
• Réponse : 'c'.`,

  1916: `update avec arguments nommés

Débutant :
• update(b=3, c=4) traite b et c comme des clés str ; met à jour b et ajoute c → {"a":1,"b":3,"c":4}.

Intermédiaire :
• Les noms d’arguments doivent être des identifiants valides (pas d’espace).

Expert :
• Peut combiner avec un mapping positionnel dans le même update (hors snippet).

Concepts clés :
• kwargs comme paires clé-valeur pour update.

Distinctions clés :
• update({"b":3}) vs update(b=3).

Fonctionnement :
• Fusion in-place des paires fournies.

Exécution étape par étape :
1. b passe de 2 à 3 ; c ajoutée 4.

Ordre des opérations :
• Appel update après création de d.

Cas d'utilisation courants :
• Patch lisible de quelques champs nommés.

Cas limites :
• Clé impossible comme identifiant → utiliser autre forme d’update.

Considérations de performance :
• O(nombre de kwargs).

Exemples :
• update(a=10) écrase a.

Remarques :
• Réponse : {"a": 1, "b": 3, "c": 4}.`,

  1917: `update avec liste de paires

Débutant :
• update([("b",2),("c",3)]) ajoute/ met à jour depuis un itérable de paires → {"a":1,"b":2,"c":3}.

Intermédiaire :
• Utile quand les paires viennent d’une requête ou fichier.

Expert :
• Peut enchaîner plusieurs sources dans plusieurs update.

Concepts clés :
• Itérable 2-uples, mutation in-place.

Distinctions clés :
• dict() constructeur consomme pareil mais crée un nouvel objet ; update mute.

Fonctionnement :
• Pour chaque tuple, insertion dans d.

Exécution étape par étape :
1. a:1 existant ; ajout b, c.

Ordre des opérations :
• Évaluation de la liste puis update.

Cas d'utilisation courants :
• Fusion résultat cur.fetchall() simplifié.

Cas limites :
• Tuple mal formé → erreur.

Considérations de performance :
• Linéaire en nombre de paires.

Exemples :
• update(zip(keys, vals)).

Remarques :
• Réponse : {"a": 1, "b": 2, "c": 3}.`,

  1918: `pop retire une clé

Débutant :
• pop("a") enlève 'a':1 et retourne 1 ; d devient {"b":2}.

Intermédiaire :
• Effet de bord visible sur d après l’expression.

Expert :
• pop sans défaut lève si clé absente.

Concepts clés :
• Suppression par clé, valeur retournée.

Distinctions clés :
• del d['a'] sans valeur de retour utilisable.

Fonctionnement :
• Retrait de la paire "a".

Exécution étape par étape :
1. d après pop : une seule entrée b.

Ordre des opérations :
• Statement ou expression selon contexte.

Cas d'utilisation courants :
• File de consommation clé par clé.

Cas limites :
• pop sur dict vide après coup.

Considérations de performance :
• O(1) amorti.

Exemples :
• popitem pour LIFO paires.

Remarques :
• Réponse : {"b": 2}.`,

  1919: `Liste en compréhension avec pop

Débutant :
• list(d) fige ['a','b'] avant les pops ; pour k='a', valeur 1<2 donc pop('a') ; pour k='b', valeur 2<2 faux → d reste {"b":2}.

Intermédiaire :
• La liste des clés est évaluée avant la boucle ; mais d change pendant l’itération.

Expert :
• Ordre des k détermine quels pops ont lieu.

Concepts clés :
• pop pendant itération guidée par snapshot de clés.

Distinctions clés :
• Si on itérait directement sur d sans copie, RuntimeError possible en 3.x selon contexte.

Fonctionnement :
• k='a' : pop ; k='b' : condition fausse.

Exécution étape par étape :
1. Liste clés ['a','b'].
2. Pop a ; b conservé.

Ordre des opérations :
• Compréhension évalue condition sur d courant.

Cas d'utilisation courants :
• Nettoyer sélectivement des entrées.

Cas limites :
• Logique fragile : préférer boucle explicite pour maintenance.

Considérations de performance :
• O(n) pops possibles.

Exemples :
• result collecte [1] ici.

Remarques :
• Réponse : {"b": 2}.`,

  1920: `setdefault clé existante

Débutant :
• setdefault("a", 999) ne remplace pas 1 ; retourne 1.

Intermédiaire :
• Le 999 est ignoré si "a" présente.

Expert :
• dict inchangé.

Concepts clés :
• setdefault lecture + insertion conditionnelle.

Distinctions clés :
• vs get qui ne crée jamais de clé.

Fonctionnement :
• "a" trouvée → valeur actuelle.

Exécution étape par étape :
1. Retour 1.

Ordre des opérations :
• Appel setdefault.

Cas d'utilisation courants :
• Valeur par défaut seulement si absent.

Cas limites :
• Si valeur était None, setdefault avec 999 ne l’écrase pas.

Considérations de performance :
• Un lookup.

Exemples :
• setdefault pour compteur +1 patterns.

Remarques :
• Réponse : 1.`,

  1921: `setdefault clé absente

Débutant :
• setdefault("b", 999) insère "b":999 et retourne 999.

Intermédiaire :
• "a":1 reste ; nouveau champ b.

Expert :
• Retour == valeur insérée quand création.

Concepts clés :
• Insertion avec défaut.

Distinctions clés :
• get("b",999) n’insérerait pas b.

Fonctionnement :
• Absence de b → insertion.

Exécution étape par étape :
1. d devient {"a":1,"b":999} (effet de bord).

Ordre des opérations :
• Un appel.

Cas d'utilisation courants :
• Initialisation paresseuse.

Cas limites :
• Valeur défaut mutable partagée en boucle : danger.

Considérations de performance :
• Un insert possible.

Exemples :
• Cache optionnel.

Remarques :
• Réponse : 999.`,

  1922: `fromkeys sur chaîne

Débutant :
• fromkeys("abc", 0) crée trois clés une par caractère, toutes valeur 0.

Intermédiaire :
• La chaîne est itérée caractère par caractère.

Expert :
• Même objet 0 réutilisé (immuables, ok).

Concepts clés :
• Itérable de clés = str, valeur uniforme.

Distinctions clés :
• fromkeys("abc") sans second arg → None partout.

Fonctionnement :
• a:0, b:0, c:0.

Exécution étape par étape :
1. Construction dict trois entrées.

Ordre des opérations :
• Ordre des caractères de la str.

Cas d'utilisation courants :
• Masques binaires ou flags par lettre.

Cas limites :
• str vide → {}.

Considérations de performance :
• O(len(str)).

Exemples :
• fromkeys(["a","b"], 0) liste de clés.

Remarques :
• Réponse : {'a': 0, 'b': 0, 'c': 0}.`,

  1923: `Piège fromkeys avec liste mutable

Débutant :
• Un seul objet liste est passé comme valeur par défaut ; toutes les clés partagent cette liste ; append(1) sur "a" modifie la liste commune → tous voient [1].

Intermédiaire :
• Ce n’est pas trois listes indépendantes.

Expert :
• Solution : {k: [] for k in "abc"} ou factory.

Concepts clés :
• Référence partagée, mutable default.

Distinctions clés :
• Immuable 0 ok ; liste non.

Fonctionnement :
• fromkeys crée a,b,c pointant vers la même list.

Exécution étape par étape :
1. append sur liste partagée.
2. d["a"], d["b"], d["c"] tous [1].

Ordre des opérations :
• Mutation après création.

Cas d'utilisation courants :
• Leçon pédagogique ; éviter en production.

Cas limites :
• Même piège avec dict ou set mutables.

Considérations de performance :
• Une seule allocation liste.

Exemples :
• id(d['a']) == id(d['b']) True.

Remarques :
• Réponse : chaque clé mappe à [1] (liste identique partagée).`,

  1924: `Comprehension listes indépendantes

Débutant :
• {k: [] for k in "abc"} crée trois listes distinctes ; append sur "a" n’affecte pas b,c.

Intermédiaire :
• Chaque [] est une nouvelle liste à chaque itération.

Expert :
• Pattern sûr pour accumulateurs par clé.

Concepts clés :
• Nouvelle liste par itération, pas de partage.

Distinctions clés :
• vs fromkeys(..., []).

Fonctionnement :
• Trois objets list séparés.

Exécution étape par étape :
1. append(1) seulement sous 'a'.

Ordre des opérations :
• Comprehension puis append.

Cas d'utilisation courants :
• Inversion graphe, buckets.

Cas limites :
• Coût mémoire n listes.

Considérations de performance :
• n allocations list.

Exemples :
• defaultdict(list) Côté collections.

Remarques :
• Réponse : {"a": [1], "b": [], "c": []}.`,

  1925: `Intersection de vues de clés avec un set

Débutant :
• d.keys() & {"a","c"} donne l’intersection : clés présentes dans les deux → {'a'}.

Intermédiaire :
• dict_keys supporte &, |, -, ^ avec sets (Python 3).

Expert :
• Résultat est un set des clés communes.

Concepts clés :
• Opérations ensemblistes sur vues.

Distinctions clés :
• & ne retourne pas un dict_values.

Fonctionnement :
• Clés du dict : a,b ; intersection avec a,c → a seul.

Exécution étape par étape :
1. Construction set intersection.

Ordre des opérations :
• Vue keys puis opérateur &.

Cas d'utilisation courants :
• Filtrer colonnes présentes.

Cas limites :
• Types non set à droite : parfois convertibles (autre set-like).

Considérations de performance :
• Dépend des tailles.

Exemples :
• keys & keys entre deux dicts.

Remarques :
• Réponse : {'a'}.`,
};
