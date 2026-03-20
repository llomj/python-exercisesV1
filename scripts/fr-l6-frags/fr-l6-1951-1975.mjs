/** Level 6 FR 1951–1975 — level6_intermediate_b.ts Q1–25 */
export default {
  1951: `Dict comprehension avec listes internes

Débutant :
• Pour chaque x de range(4), la valeur est [y for y in range(x)] : liste des entiers de 0 à x-1.

Intermédiaire :
• x=0 → range(0) vide → [] ; x=1 → [0] ; x=2 → [0,1] ; x=3 → [0,1,2].

Expert :
• Compréhension imbriquée : la boucle externe fixe x, la liste interne dépend de x.

Concepts clés :
• Dict comprehension, list comprehension interne, range.

Distinctions clés :
• range(x) exclut x ; ne pas confondre avec range(x+1).

Fonctionnement :
• Construction successive des clés 0,1,2,3 avec leurs listes.

Exécution étape par étape :
1. x=0 → 0:[] ; x=1 → 1:[0] ; x=2 → 2:[0,1] ; x=3 → 3:[0,1,2].

Ordre des opérations :
• Évaluation de range(4) puis chaque branche interne.

Cas d'utilisation courants :
• Tables d’adjacence, préfixes [0..k-1].

Cas limites :
• x=0 donne liste vide, valide.

Considérations de performance :
• Coût quadratique cumulé en taille des listes.

Exemples :
• Même motif pour factorielles ou cumuls.

Remarques :
• Réponse : {0: [], 1: [0], 2: [0, 1], 3: [0, 1, 2]}.`,

  1952: `Longueurs des chaînes par clé

Débutant :
• La comprehension remplace chaque valeur par len(v) : "hello" → 5, "hi" → 2.

Intermédiaire :
• Les clés a et b restent ; seules les valeurs changent de type (str → int).

Expert :
• On pourrait chaîner d’autres fonctions (upper, strip) de la même manière.

Concepts clés :
• Transformation valeur par entrée, items().

Distinctions clés :
• Ne pas inverser clé/valeur ici.

Fonctionnement :
• Itération sur ("a","hello"), ("b","hi").

Exécution étape par étape :
1. a:5, b:2.

Ordre des opérations :
• len appelé pour chaque v.

Cas d'utilisation courants :
• Résumés de longueur de champs texte.

Cas limites :
• v non str → erreur sur len.

Considérations de performance :
• O(total des longueurs de chaînes).

Exemples :
• len(strip(v)) pour ignorer espaces.

Remarques :
• Réponse : {"a": 5, "b": 2}.`,

  1953: `Fréquence des caractères

Débutant :
• set("hello") donne les lettres uniques ; pour chaque c, "hello".count(c) compte les occurrences.

Intermédiaire :
• La lettre "l" apparaît deux fois dans "hello" → valeur 2.

Expert :
• L’ordre des clés dans le dict final n’est pas garanti pour l’affichage, mais la valeur pour "l" est 2.

Concepts clés :
• count sur str, set pour uniques, comprehension.

Distinctions clés :
• collections.Counter est plus idiomatique en production.

Fonctionnement :
• Pour c='l', count retourne 2.

Exécution étape par étape :
1. Construction du mapping lettre → effectif.

Ordre des opérations :
• set puis boucle sur caractères uniques.

Cas d'utilisation courants :
• Histogrammes simples, analyse texte.

Cas limites :
• Chaîne vide → set vide → dict vide.

Considérations de performance :
• count répété O(n²) sur longueur ; acceptable pour petit texte.

Remarques :
• Réponse : 2 pour la clé "l".`,

  1954: `enumerate vers dict

Débutant :
• enumerate("abc") produit (0,'a'), (1,'b'), (2,'c') ; le dict associe indice → caractère.

Intermédiaire :
• Clés entières 0..2, valeurs str une lettre.

Expert :
• Inverse partiel d’une liste indexable.

Concepts clés :
• enumerate, unpacking i,c.

Distinctions clés :
• Pas {char: index} ici mais {index: char}.

Fonctionnement :
• Chaque tuple devient une paire.

Exécution étape par étape :
1. 0:"a", 1:"b", 2:"c".

Ordre des opérations :
• Parcours gauche-droite de la chaîne.

Cas d'utilisation courants :
• Position → caractère pour parsers.

Cas limites :
• Unicode : un caractère peut être hors BMP (hors QCM).

Considérations de performance :
• O(n).

Exemples :
• dict(enumerate(lst)) idiomatique.

Remarques :
• Réponse : {0: "a", 1: "b", 2: "c"}.`,

  1955: `zip de deux itérables

Débutant :
• zip("abc", range(1,4)) aligne a:1, b:2, c:3.

Intermédiaire :
• range(1,4) = 1,2,3 (4 exclu).

Expert :
• Même longueur ici ; sinon zip tronque.

Concepts clés :
• zip, dict comprehension, caractères comme clés.

Distinctions clés :
• zip strict en 3.10+ pour exiger même longueur.

Fonctionnement :
• Trois paires consommées.

Exécution étape par étape :
1. Construction {"a":1,"b":2,"c":3}.

Ordre des opérations :
• zip lazy puis comprehension.

Cas d'utilisation courants :
• Deux colonnes parallèles → mapping.

Cas limites :
• Itérables de longueurs différentes.

Considérations de performance :
• O(n).

Exemples :
• dict(zip(keys, values)).

Remarques :
• Réponse : {"a": 1, "b": 2, "c": 3}.`,

  1956: `Clés en majuscules et valeurs doublées

Débutant :
• k.upper() pour 'A','B' ; v*2 double les entiers → {"A":2,"B":4}.

Intermédiaire :
• upper() ne modifie pas la clé originale dans le dict source, seulement dans la nouvelle paire.

Expert :
• Si deux clés lower différentes donnaient la même UPPER, collision (pas ici).

Concepts clés :
• Méthode str sur clé, arithmétique sur valeur.

Distinctions clés :
• vs k.lower() selon normalisation voulue.

Fonctionnement :
• Itération items du dict littéral.

Exécution étape par étape :
1. A:2, B:4.

Ordre des opérations :
• Ordre d’insertion du dict source.

Cas d'utilisation courants :
• Normalisation de clés pour comparaison.

Cas limites :
• k non str → pas de upper.

Considérations de performance :
• O(n).

Exemples :
• strip() pour nettoyer clés.

Remarques :
• Réponse : {"A": 2, "B": 4}.`,

  1957: `Comptage de mots avec set

Débutant :
• split() découpe la phrase ; pour chaque mot unique w, words.count(w) donne l’effectif ; "the" apparaît deux fois.

Intermédiaire :
• set(words) évite de recompt plusieurs fois la même clé pour la construction, mais count compte quand même sur la liste complète.

Expert :
• Counter(words) serait plus direct.

Concepts clés :
• split, count, set des uniques, accès final ["the"].

Distinctions clés :
• Distinction liste complète vs mots uniques pour les clés du dict intermédiaire.

Fonctionnement :
• Compter "the" dans la liste tokens.

Exécution étape par étape :
1. the → 2.

Ordre des opérations :
• Création du dict comprehension puis indexation.

Cas d'utilisation courants :
• Nuage de mots, TF simple.

Cas limites :
• Casse et ponctuation affectent les tokens (hors normalisation ici).

Considérations de performance :
• count répété coûteux sur gros texte.

Remarques :
• Réponse : 2.`,

  1958: `Valeurs booléennes dans le dict

Débutant :
• x % 2 == 0 teste la parité pour x dans range(5) → 0..4.

Intermédiaire :
• 0,2,4 → True ; 1,3 → False.

Expert :
• Les clés sont les entiers x, les valeurs sont des bool.

Concepts clés :
• Modulo, comparaison, dict comprehension.

Distinctions clés :
• True/False vs 1/0 affichés.

Fonctionnement :
• Cinq entrées construites.

Exécution étape par étape :
1. 0:T, 1:F, 2:T, 3:F, 4:T.

Ordre des opérations :
• range(5) séquentiel.

Cas d'utilisation courants :
• Masques pair/impair, flags.

Cas limites :
• x négatif : % se comporte différemment en math pur mais range(5) positif.

Considérations de performance :
• O(n).

Exemples :
• x % 3 == 0 pour multiples de 3.

Remarques :
• Réponse : {0: True, 1: False, 2: True, 3: False, 4: True}.`,

  1959: `Clés str depuis range

Débutant :
• str(x) pour x=0,1,2 donne clés '0','1','2' avec valeurs 0,1,2.

Intermédiaire :
• Même motif que plus tôt au niveau 6 : clés texte vs int.

Expert :
• json.dumps sérialise souvent les clés en str.

Concepts clés :
• str() en position de clé.

Distinctions clés :
• 0 et '0' ne sont pas la même clé.

Fonctionnement :
• range(3) itère 0,1,2.

Exécution étape par étape :
1. Trois paires.

Ordre des opérations :
• str puis insertion.

Cas d'utilisation courants :
• Alignement sur APIs clés string.

Cas limites :
• str sur types non triviaux.

Considérations de performance :
• Très bon pour n petit.

Exemples :
• f"{x}" équivalent conceptuel.

Remarques :
• Réponse : {"0": 0, "1": 1, "2": 2}.`,

  1960: `Clés tuple avec filtre

Débutant :
• i,j dans range(3), i!=j ; clé (i,j), valeur i*j ; (1,2) → 1*2=2.

Intermédiaire :
• Les paires (0,0) etc. sont exclues.

Expert :
• Grille 3x3 sans diagonale.

Concepts clés :
• Double boucle en comprehension, tuple clé, condition if.

Distinctions clés :
• (1,2) vs (2,1) deux clés distinctes.

Fonctionnement :
• Lookup d[(1,2)] après construction.

Exécution étape par étape :
1. Accès à la clé (1,2) → 2.

Ordre des opérations :
• Évaluation du dict puis [].

Cas d'utilisation courants :
• Matrices creuses indexées par coordonnées.

Cas limites :
• Clé absente si filtre l’exclut → KeyError.

Considérations de performance :
• O(n²) pour les ranges ici.

Exemples :
• Graphe orienté sans boucles i==j.

Remarques :
• Réponse : 2.`,

  1961: `Filtrer les valeurs paires

Débutant :
• Garde les paires où v % 2 == 0 → b:2 et d:4.

Intermédiaire :
• a:1 et c:3 exclus.

Expert :
• v % 2 == 0 inclut 0 si présent.

Concepts clés :
• Prédicat sur valeur dans comprehension.

Distinctions clés :
• Filtrer sur clé vs valeur.

Fonctionnement :
• Test de parité sur chaque v.

Exécution étape par étape :
1. Résultat deux entrées.

Ordre des opérations :
• Ordre d’origine conservé pour les survivants.

Cas d'utilisation courants :
• Extraire champs numériques pairs.

Cas limites :
• Valeurs non int → erreur sur %.

Considérations de performance :
• O(n).

Exemples :
• if v > seuil.

Remarques :
• Réponse : {"b": 2, "d": 4}.`,

  1962: `sorted(items) puis dict

Débutant :
• sorted sur les paires trie par clé (tuple order) → ordre a,b,c puis reconstruction dict.

Intermédiaire :
• Les valeurs suivent leurs clés triées.

Expert :
• dict accepte itérable de paires.

Concepts clés :
• sorted(items), ordre lexicographique des clés str.

Distinctions clés :
• sorted(d) donne seulement les clés.

Fonctionnement :
• ('a',1), ('b',2), ('c',3).

Exécution étape par étape :
1. Même contenu que le dict d’origine mais ordre d’insertion réordonné a,b,c.

Ordre des opérations :
• sorted puis constructeur.

Cas d'utilisation courants :
• Canoniser pour comparaison.

Cas limites :
• Clés non comparables.

Considérations de performance :
• O(n log n).

Exemples :
• key=lambda kv: kv[1] pour tri par valeur.

Remarques :
• Réponse : {"a": 1, "b": 2, "c": 3}.`,

  1963: `Négation des valeurs

Débutant :
• -v pour chaque valeur : 1→-1, -2→2, 3→-3.

Intermédiaire :
• Signe inversé sauf zéro (hors cas).

Expert :
• Pour types non numériques, __neg__ requis.

Concepts clés :
• Transformation unaire en comprehension.

Distinctions clés :
• Pas le même effet que not v (bool).

Fonctionnement :
• k inchangé, v remplacé par -v.

Exécution étape par étape :
1. a:-1, b:2, c:-3.

Ordre des opérations :
• Parcours items.

Cas d'utilisation courants :
• Inverser soldes, offsets.

Cas limites :
• Overflow rare en int Python.

Considérations de performance :
• O(n).

Exemples :
• abs(v) voir 1964.

Remarques :
• Réponse : {"a": -1, "b": 2, "c": -3}.`,

  1964: `Valeur absolue

Débutant :
• abs(-1)=1, abs(-2)=2 → {"a":1,"b":2}.

Intermédiaire :
• Utile pour distances, magnitudes.

Expert :
• abs sur complexe autre comportement (hors QCM).

Concepts clés :
• abs builtin.

Distinctions clés :
• vs math.fabs (float).

Fonctionnement :
• Parcours des paires négatives.

Exécution étape par étape :
1. Positifs résultants.

Ordre des opérations :
• items puis comprehension.

Cas d'utilisation courants :
• Normaliser écarts.

Cas limites :
• Types non supportés par abs.

Considérations de performance :
• O(n).

Exemples :
• hypot pour 2D.

Remarques :
• Réponse : {"a": 1, "b": 2}.`,

  1965: `Liste des clés d’un dict comprehension

Débutant :
• {x:x for x in [1,2,2,3,3]} : clés uniques 1,2,3 → dict trois entrées ; list() donne les clés en ordre d’insertion [1,2,3].

Intermédiaire :
• Les doublons dans la liste source ne créent pas plusieurs clés identiques.

Expert :
• La dernière occurrence d’une clé réécrit la valeur (ici même valeur).

Concepts clés :
• Unicité des clés, stabilisation de l’ordre.

Distinctions clés :
• list du dict vs list de la liste source.

Fonctionnement :
• Construction dict puis itération clés.

Exécution étape par étape :
1. [1,2,3].

Ordre des opérations :
• Comprehension dict puis list().

Cas d'utilisation courants :
• Dédupliquer tout en gardant ordre premier vu.

Cas limites :
• Si valeurs différaient pour clés répétées, dernière gagne.

Considérations de performance :
• O(n).

Exemples :
• dict.fromkeys(seq) pour clés sans valeur calculée.

Remarques :
• Réponse : [1, 2, 3].`,

  1966: `Exclure les None

Débutant :
• if v is not None garde a:1 et c:3, enlève b:None.

Intermédiaire :
• is not None distingue absence de falsy 0 ou False si besoin ailleurs.

Expert :
• Parfois on filtre if v pour exclure tous les falsy, pas seulement None.

Concepts clés :
• Test identité None, filtre comprehension.

Distinctions clés :
• get(k) is None vs k absent.

Fonctionnement :
• Trois paires candidates, une rejetée.

Exécution étape par étape :
1. {"a":1,"c":3}.

Ordre des opérations :
• Ordre items d’origine pour les conservés.

Cas d'utilisation courants :
• Nettoyer JSON avec null.

Cas limites :
• NaN n’est pas None.

Considérations de performance :
• O(n).

Exemples :
• if v is not None and v != "".

Remarques :
• Réponse : {"a": 1, "c": 3}.`,

  1967: `Littéral fusionné ** et clé c

Débutant :
• ** dépaquette deux dicts puis "c":3 s’ajoute → a:1,b:2,c:3.

Intermédiaire :
• Une seule expression construit un dict neuf.

Expert :
• Collisions : ordre des ** décide (dernier gagne).

Concepts clés :
• Unpacking, littéral mixte.

Distinctions clés :
• vs plusieurs update.

Fonctionnement :
• Fusion gauche-droite puis paire c.

Exécution étape par étape :
1. Trois clés.

Ordre des opérations :
• Évaluation des sous-dicts puis fusion.

Cas d'utilisation courants :
• Defaults + patch + constante.

Cas limites :
• Clés dynamiques en expression.

Considérations de performance :
• Nouvelle allocation.

Exemples :
• {**os.environ, **local}.

Remarques :
• Réponse : {"a": 1, "b": 2, "c": 3}.`,

  1968: `Union | entre dict() (3.9+)

Débutant :
• dict(a=1) | dict(b=2) produit un nouveau dict avec a et b.

Intermédiaire :
• Ni operand n’est muté.

Expert :
• Nécessite Python 3.9+ pour | sur dict.

Concepts clés :
• Opérateur | sur mappings.

Distinctions clés :
• vs {**x, **y}.

Fonctionnement :
• Fusion sans collision ici.

Exécution étape par étape :
1. {"a":1,"b":2}.

Ordre des opérations :
• Évaluation des deux dict puis |.

Cas d'utilisation courants :
• Composer options immuables.

Cas limites :
• Clé dupliquée : droite gagne.

Considérations de performance :
• Nouveau dict.

Exemples :
• Chaîne a|b|c.

Remarques :
• Réponse : {"a": 1, "b": 2}.`,

  1969: `Chaîne de |

Débutant :
• Premier merge a,b ; puis avec b:3 écrase b ; puis ajoute c:4.

Intermédiaire :
• Évaluation de gauche à droite : le | est binaire, donc ((d1|d2)|d3).

Expert :
• b passe de 2 à 3 au second merge.

Concepts clés :
• Associativité effective par paires successives.

Distinctions clés :
• Dernier b gagne sur clé b.

Fonctionnement :
• Résultat final a:1,b:3,c:4.

Exécution étape par étape :
1. Étapes binaires successives.

Ordre des opérations :
• Parenthèsage implicite gauche-droite.

Cas d'utilisation courants :
• Defaults, env, CLI en chaîne.

Cas limites :
• Version <3.9 indisponible.

Considérations de performance :
• Plusieurs copies intermédiaires possibles.

Exemples :
• Réduire avec functools si nombreux.

Remarques :
• Réponse : {"a": 1, "b": 3, "c": 4}.`,

  1970: `|= mise à jour

Débutant :
• d |= {"a":2,"b":3} écrase a et ajoute/écrase b sur le même objet.

Intermédiaire :
• d devient {"a":2,"b":3}.

Expert :
• Comme update mais opérateur 3.9+.

Concepts clés :
• Fusion in-place.

Distinctions clés :
• | sans = créerait un nouveau dict.

Fonctionnement :
• __ior__ sur dict.

Exécution étape par étape :
1. Partant de {"a":1} → {"a":2,"b":3}.

Ordre des opérations :
• Statement sur d nommé.

Cas d'utilisation courants :
• Patch incrémental d’une config tenue en variable.

Cas limites :
• SyntaxError sur anciennes versions.

Considérations de performance :
• Évite parfois grande copie temporaire.

Exemples :
• d |= other en boucle.

Remarques :
• Réponse : {"a": 2, "b": 3}.`,

  1971: `ChainMap : première carte

Débutant :
• c["x"] cherche dans a puis b ; x est dans a → 1.

Intermédiaire :
• Pas de copie des dicts sous-jacents.

Expert :
• Modifier a["x"] se répercute sur c.

Concepts clés :
• Chaîne de recherches, vue composite.

Distinctions clés :
• vs fusion | où une seule valeur finale.

Fonctionnement :
• Hit sur premier mapping.

Exécution étape par étape :
1. a servi pour x.

Ordre des opérations :
• import puis construction puis [].

Cas d'utilisation courants :
• defaults < environnement < CLI.

Cas limites :
• Clé absente partout → KeyError.

Considérations de performance :
• Pire cas O(nombre de maps).

Exemples :
• ChainMap(locals(), globals()).

Remarques :
• Réponse : 1.`,

  1972: `ChainMap : première valeur gagne

Débutant :
• x dans a et b : a est consulté en premier → 1, jamais 2.

Intermédiaire :
• Inverse sémantique de | où la droite écrase souvent.

Expert :
• Utile pour ombres style portée lexicale.

Concepts clés :
• Politique first-wins.

Distinctions clés :
• Documenter l’ordre des arguments ChainMap.

Fonctionnement :
• a masque b pour la clé x.

Exécution étape par étape :
1. Retour 1.

Ordre des opérations :
• Ordre des maps dans le constructeur.

Cas d'utilisation courants :
• Utilisateur au-dessus des défauts.

Cas limites :
• Ordre inversé par erreur inverse la priorité.

Considérations de performance :
• Petit nombre de maps en pratique.

Exemples :
• Voir question fusion | pour last-wins.

Remarques :
• Réponse : 1.`,

  1973: `ChainMap : fallback

Débutant :
• y absent de a, trouvé dans b → 2.

Intermédiaire :
• Parcours séquentiel des maps.

Expert :
• Si ni a ni b n’avaient y → KeyError.

Concepts clés :
• Recherche multi-niveaux.

Distinctions clés :
• Similaire à get en chaîne manuelle.

Fonctionnement :
• Échec sur a, succès sur b.

Exécution étape par étape :
1. Retour 2.

Ordre des opérations :
• c["y"].

Cas d'utilisation courants :
• Valeur par défaut dans carte suivante.

Cas limites :
• Clé manquante partout.

Considérations de performance :
• Linéaire en nombre de maps.

Exemples :
• Trois couches de config.

Remarques :
• Réponse : 2.`,

  1974: `list(ChainMap) et ordre des clés

Débutant :
• list(c) sur un ChainMap renvoie la liste des clés uniques selon la règle interne de fusion : pour la question, le résultat attendu est ["b", "a"] (voir banque).

Intermédiaire :
• L’implémentation construit une vue en combinant les maps (souvent en mettant à jour depuis la dernière carte vers la première), ce qui peut inverser l’ordre par rapport à l’intuition « d’abord la première carte ».

Expert :
• Pour un ordre prévisible, utiliser explicitement list(dict.fromkeys(...)) ou trier.

Concepts clés :
• Itération ChainMap, clés uniques, piège d’ordre.

Distinctions clés :
• list(c) n’est pas list(c.items()).

Fonctionnement :
• CPython fusionne pour produire l’ensemble des clés ; l’ordre affiché correspond à la réponse du QCM.

Exécution étape par étape :
1. Clés finales uniques b et a dans l’ordre indiqué par la banque.

Ordre des opérations :
• Itération du ChainMap matérialisée en liste.

Cas d'utilisation courants :
• Inspecter toutes les clés visibles à travers les couches.

Cas limites :
• Ne pas dépendre de cet ordre pour de la logique métier sans vérifier la version.

Considérations de performance :
• Construire la liste coûte O(n) sur le nombre total d’entrées vues.

Exemples :
• sorted(c) pour ordre alphabétique stable.

Remarques :
• Réponse du quiz : ["b", "a"].`,

  1975: `max(d, key=lambda k: d[k])

Débutant :
• max parcourt les clés mais compare les valeurs via d[k] ; la clé de plus grande valeur est "c" (3).

Intermédiaire :
• Retourne la clé, pas la valeur.

Expert :
• Équivalent mental à max(d.items(), key=lambda kv: kv[1])[0].

Concepts clés :
• Argument key de max, lookup dans d.

Distinctions clés :
• max(d) comparerait les clés str lexicographiquement.

Fonctionnement :
• Compare 1,2,3 pour a,b,c.

Exécution étape par étape :
1. Gagnant c.

Ordre des opérations :
• max sur itérable de clés.

Cas d'utilisation courants :
• Trouver le nom du score maximal.

Cas limites :
• dict vide → ValueError.

Considérations de performance :
• O(n).

Exemples :
• min(..., key=...) pour le minimum.

Remarques :
• Réponse : 'c'.`,
};
