/** Level 4 FR 1251–1300 — enumerate, zip, comprehensions, generators, map/filter, iter. Aligned with level4.ts Q51-96 + level4ForLoopPatterns Q1-4. */
export default {
  1251: `[(0, 'a'), (1, 'b'), (2, 'c')] : enumerate() associe index et élément.

Débutant :
• enumerate(['a', 'b', 'c']) associe chaque élément à son index.
• L'index commence à 0 par défaut.
• list() convertit en liste de tuples.

Intermédiaire :
• enumerate() retourne un itérateur paresseux de (index, élément).
• Utile pour for i, item in enumerate(items): sans range(len()).

Expert :
• enumerate() est O(1) en mémoire ; list() matérialise en O(n).

Concepts clés :
• enumerate(iterable) → (index, élément), start=0 par défaut.

Distinctions clés :
• enumerate() vs range(len()) ; enumerate vs zip (un seul itérable).

Fonctionnement :
• enumerate parcourt ['a','b','c'] et produit (0,'a'), (1,'b'), (2,'c').

Exécution étape par étape :
1. enumerate(['a','b','c']) créé.
2. Premier tuple : (0, 'a'), puis (1, 'b'), (2, 'c').
3. list() collecte les trois tuples.

Ordre des opérations :
• Création de l'enumerate, itération, list().

Cas d'utilisation courants :
• Boucles avec index et valeur : for i, x in enumerate(lst).

Cas limites :
• enumerate([]) → [] ; enumerate(['x']) → [(0,'x')].

Considérations de performance :
• enumerate paresseux ; list() force O(n).

Exemples :
• list(enumerate(['a','b','c'])) → [(0,'a'),(1,'b'),(2,'c')]
• for i,v in enumerate('xy'): print(i,v) → 0 x, 1 y

Remarques :
• Préférer enumerate à range(len(items)) pour un style Pythonique.`,

  1252: `[(1, 'a'), (2, 'b')] : start=1 change l'index de départ.

Débutant :
• enumerate(['a','b'], start=1) commence à 1 au lieu de 0.
• Premier tuple : (1, 'a'), deuxième : (2, 'b').
• Utile pour une numérotation humaine (1, 2, 3...).

Intermédiaire :
• start n'affecte pas les éléments, seulement le compteur.
• enumerate(iterable, start=N) pour index personnalisé.

Expert :
• start peut être négatif ou flottant ; le compteur s'incrémente de 1.

Concepts clés :
• enumerate(iterable, start=N) → index commence à N.

Distinctions clés :
• start=1 vs start=0 ; enumerate avec start vs sans.

Fonctionnement :
• Compteur initial = 1 ; pour 'a' → (1,'a'), pour 'b' → (2,'b').

Exécution étape par étape :
1. enumerate(['a','b'], start=1) initialisé.
2. (1,'a') puis (2,'b') produits.
3. list() → [(1,'a'), (2,'b')].

Ordre des opérations :
• start évalué, puis itération avec compteur incrémenté.

Cas d'utilisation courants :
• Affichage numéroté 1-based : for i, x in enumerate(items, start=1).

Cas limites :
• start=0 équivalent au défaut ; start=10 → (10,'a'), (11,'b').

Considérations de performance :
• Négligeable ; même coût que enumerate sans start.

Exemples :
• list(enumerate(['a','b'], start=1)) → [(1,'a'),(2,'b')]
• list(enumerate(['x'], start=100)) → [(100,'x')]

Remarques :
• start=1 pour listes affichées à l'utilisateur (1er, 2e, 3e...).`,

  1253: `[(1, 'a'), (2, 'b')] : zip() associe éléments correspondants.

Débutant :
• zip([1,2], ['a','b']) associe 1 avec 'a', 2 avec 'b'.
• Retourne des tuples (élément1, élément2).
• list() convertit en liste.

Intermédiaire :
• zip() s'arrête au plus court des itérables.
• Utile pour for x, y in zip(list1, list2):.

Expert :
• zip() retourne un itérateur paresseux ; pas de liste intermédiaire.

Concepts clés :
• zip(iter1, iter2) → (iter1[i], iter2[i]) pour chaque i.

Distinctions clés :
• zip vs enumerate (deux itérables vs un) ; zip vs concaténation.

Fonctionnement :
• Premier de chaque : (1,'a'), deuxième : (2,'b').

Exécution étape par étape :
1. zip([1,2], ['a','b']) créé.
2. (1,'a') puis (2,'b') produits.
3. list() → [(1,'a'), (2,'b')].

Ordre des opérations :
• zip construit l'itérateur ; list() consomme.

Cas d'utilisation courants :
• Parcours parallèle : for n, c in zip(nums, chars).

Cas limites :
• Longueurs égales → tous les éléments appariés.

Considérations de performance :
• zip paresseux ; O(min(len1, len2)) éléments.

Exemples :
• list(zip([1,2], ['a','b'])) → [(1,'a'),(2,'b')]
• dict(zip(keys, vals)) → dictionnaire

Remarques :
• zip est idéal pour combiner des séquences parallèles.`,

  1254: `[(1, 'a'), (2, 'b')] : zip() s'arrête au plus court ; 'c' ignoré.

Débutant :
• zip([1,2], ['a','b','c']) associe jusqu'à épuisement du plus court.
• Seuls (1,'a') et (2,'b') sont produits ; 'c' n'a pas de partenaire.
• Aucun None inséré.

Intermédiaire :
• zip() ne remplit pas les manques ; itertools.zip_longest le fait.
• Longueur du résultat = min(longueurs des itérables).

Expert :
• Les éléments excédentaires ne sont jamais consommés (économie mémoire).

Concepts clés :
• zip s'arrête au plus court ; pas de padding automatique.

Distinctions clés :
• zip (court) vs zip_longest (remplit avec fillvalue).

Fonctionnement :
• 1↔'a', 2↔'b' ; plus d'éléments dans [1,2] → stop.

Exécution étape par étape :
1. zip([1,2], ['a','b','c']) créé.
2. (1,'a'), (2,'b') produits.
3. [1,2] épuisé → fin ; 'c' jamais utilisé.

Ordre des opérations :
• next() sur chaque itérateur ; stop dès qu'un est vide.

Cas d'utilisation courants :
• Parcours parallèle quand les longueurs peuvent différer.

Cas limites :
• zip([1], ['a','b','c']) → [(1,'a')] ; le plus court gagne.

Considérations de performance :
• Éléments excédentaires non lus = économie.

Exemples :
• list(zip([1,2], ['a','b','c'])) → [(1,'a'),(2,'b')]
• list(zip([1,2,3], ['x'])) → [(1,'x')]

Remarques :
• Vérifier les longueurs si l'égalité est requise.`,

  1255: `[(1, 'a'), (2, 'b')] : zip() s'arrête au plus court ; 3 ignoré.

Débutant :
• zip([1,2,3], ['a','b']) produit deux tuples seulement.
• Le 3 n'a pas de lettre correspondante.
• Même comportement que 1254, ordre inversé.

Intermédiaire :
• La liste de lettres est plus courte ; zip s'arrête après 'b'.
• Aucun (3, None) ; zip ne remplit jamais.

Expert :
• L'itérateur de [1,2,3] n'est pas entièrement consommé.

Concepts clés :
• zip s'arrête au premier itérable épuisé.

Distinctions clés :
• Premier plus long vs second plus long : même résultat (min).

Fonctionnement :
• (1,'a'), (2,'b') ; ['a','b'] épuisé → stop.

Exécution étape par étape :
1. zip([1,2,3], ['a','b']) créé.
2. (1,'a'), (2,'b') produits.
3. ['a','b'] épuisé → 3 jamais apparié.

Ordre des opérations :
• next() sur les deux ; stop quand l'un manque.

Cas d'utilisation courants :
• Combiner des listes de longueurs potentiellement différentes.

Cas limites :
• zip([], [1,2,3]) → [] ; un vide suffit.

Considérations de performance :
• Itérateur le plus long peut rester partiellement non consommé.

Exemples :
• list(zip([1,2,3], ['a','b'])) → [(1,'a'),(2,'b')]
• list(zip([1], ['a','b'])) → [(1,'a')]

Remarques :
• Comportement symétrique : le plus court détermine la longueur.`,

  1256: `[(1, 2, 3)] : zip() avec trois itérables produit des triplets.

Débutant :
• zip([1],[2],[3]) associe le premier de chacun : (1,2,3).
• Un seul tuple car chaque liste n'a qu'un élément.
• zip accepte plus de deux itérables.

Intermédiaire :
• zip(iter1, iter2, iter3) → (a, b, c) pour chaque position.
• Même règle du plus court pour 3+ itérables.

Expert :
• zip(*iterables) avec * pour décompresser une liste d'itérables.

Concepts clés :
• zip(iter1, iter2, ..., iterN) → N-uplets.

Distinctions clés :
• zip à 2 args vs 3+ ; zip([1],[2],[3]) vs zip([1,2],[3,4]).

Fonctionnement :
• Position 0 : (1, 2, 3) ; pas de position 1.

Exécution étape par étape :
1. zip([1],[2],[3]) créé.
2. Premier (et seul) triplet : (1, 2, 3).
3. list() → [(1, 2, 3)].

Ordre des opérations :
• next() sur les trois itérables ; un tuple par position.

Cas d'utilisation courants :
• Transposer des lignes en colonnes : zip(*rows).

Cas limites :
• zip([1],[2],[3,4]) → [(1,2,3)] ; plus court = 1.

Considérations de performance :
• O(min des longueurs) en temps.

Exemples :
• list(zip([1],[2],[3])) → [(1,2,3)]
• list(zip([1,2],[3,4],[5,6])) → [(1,3,5),(2,4,6)]

Remarques :
• zip(*matrix) transpose une liste de listes.`,

  1257: `[] : zip() avec un itérable vide retourne une liste vide.

Débutant :
• zip([]) n'a aucun élément à apparier.
• Résultat : liste vide [].
• Aucune erreur.

Intermédiaire :
• Un seul argument vide suffit pour vider le résultat.
• zip([], [1,2,3]) → [] ; zip([1,2], []) → [].

Expert :
• zip() sans arguments → itérateur vide (zéro yield).

Concepts clés :
• zip avec un itérable vide → résultat vide.

Distinctions clés :
• zip([]) vs zip([1],[]) vs zip() (zéro args).

Fonctionnement :
• Aucun élément à traiter → itérateur vide.

Exécution étape par étape :
1. zip([]) créé.
2. Aucun tuple produit.
3. list() → [].

Ordre des opérations :
• Évaluation immédiate ; pas d'itération.

Cas d'utilisation courants :
• Gestion des cas vides ; pas de crash.

Cas limites :
• zip([]) → [] ; zip() → [] ; zip([],[]) → [].

Considérations de performance :
• O(1) ; retour immédiat.

Exemples :
• list(zip([])) → []
• list(zip([1,2], [])) → []

Remarques :
• Toujours gérer le cas vide en production.`,

  1258: `Oui : enumerate() fonctionne avec toute chaîne, caractère par caractère.

Débutant :
• enumerate("abc") associe chaque caractère à son index.
• Résultat : (0,'a'), (1,'b'), (2,'c').
• Les chaînes sont des itérables.

Intermédiaire :
• enumerate() accepte tout itérable : listes, chaînes, tuples, etc.
• for i, c in enumerate("hello"): traite chaque caractère avec position.

Expert :
• Les chaînes itèrent sur les caractères (pas les octets en UTF-8).

Concepts clés :
• enumerate(iterable) ; les chaînes sont des itérables de caractères.

Distinctions clés :
• enumerate sur str vs sur list ; caractères vs éléments.

Fonctionnement :
• "abc" itère 'a','b','c' ; enumerate ajoute 0,1,2.

Exécution étape par étape :
1. enumerate("abc") créé.
2. (0,'a'), (1,'b'), (2,'c') produits.
3. Même logique que pour une liste.

Ordre des opérations :
• Itération sur la chaîne, compteur incrémenté.

Cas d'utilisation courants :
• Traitement de texte avec position : for i, c in enumerate(s).

Cas limites :
• enumerate("") → [] ; enumerate("x") → [(0,'x')].

Considérations de performance :
• O(n) avec n = len(chaîne).

Exemples :
• list(enumerate("abc")) → [(0,'a'),(1,'b'),(2,'c')]
• [i for i,c in enumerate("hi") if c=='i'] → [1]

Remarques :
• enumerate + chaîne = motif courant pour analyse de texte.`,

  1259: `Oui : zip() fonctionne avec les chaînes, caractère par caractère.

Débutant :
• zip("ab", "cd") associe 'a' avec 'c', 'b' avec 'd'.
• Résultat : [('a','c'), ('b','d')].
• Utile pour comparer deux chaînes position par position.

Intermédiaire :
• zip() accepte tout itérable ; les chaînes itèrent sur les caractères.
• for c1, c2 in zip(s1, s2): compare caractère à caractère.

Expert :
• zip(s1, s2) s'arrête au plus court ; pas de padding.

Concepts clés :
• zip(iter1, iter2) ; chaînes = itérables de caractères.

Distinctions clés :
• zip sur str vs sur list ; appariement caractère à caractère.

Fonctionnement :
• "ab" et "cd" → ('a','c'), ('b','d').

Exécution étape par étape :
1. zip("ab", "cd") créé.
2. ('a','c') puis ('b','d') produits.
3. list() → [('a','c'), ('b','d')].

Ordre des opérations :
• next() sur chaque chaîne ; caractères appariés.

Cas d'utilisation courants :
• Comparaison de chaînes, fusion caractère à caractère.

Cas limites :
• zip("a", "xyz") → [('a','x')] ; plus court = 1.

Considérations de performance :
• O(min(len(s1), len(s2))).

Exemples :
• list(zip("ab","cd")) → [('a','c'),('b','d')]
• [c1+c2 for c1,c2 in zip("ab","xy")] → ['ax','by']

Remarques :
• zip + chaînes = comparaison ou transformation parallèle.`,

  1260: `[('a', 'c'), ('b', 'd')] : zip() sur chaînes associe caractères.

Débutant :
• zip('ab', 'cd') associe 'a'↔'c' et 'b'↔'d'.
• Résultat : liste de tuples de caractères.
• Même syntaxe que pour les listes.

Intermédiaire :
• Les chaînes sont des itérables ; zip les traite comme des séquences.
• Pas de conversion nécessaire ; Python itère naturellement.

Expert :
• zip retourne un itérateur ; list() le matérialise.

Concepts clés :
• zip(str1, str2) → tuples (char1, char2).

Distinctions clés :
• zip('ab','cd') vs zip(['a','b'],['c','d']) ; même résultat conceptuel.

Fonctionnement :
• Premier caractère de chaque : ('a','c') ; deuxième : ('b','d').

Exécution étape par étape :
1. zip('ab','cd') créé.
2. ('a','c'), ('b','d') produits.
3. list() → [('a','c'), ('b','d')].

Ordre des opérations :
• Itération sur les deux chaînes en parallèle.

Cas d'utilisation courants :
• Comparer deux chaînes, construire une nouvelle chaîne.

Cas limites :
• zip('','ab') → [] ; zip('a','bc') → [('a','b')].

Considérations de performance :
• O(min(len1, len2)).

Exemples :
• list(zip('ab','cd')) → [('a','c'),('b','d')]
• ''.join(c1+c2 for c1,c2 in zip('ab','xy')) → 'axby'

Remarques :
• zip de chaînes = opérations caractère à caractère.`,

  1261: `[0, 1, 2] : compréhension de liste basique, équivalent à list(range(3)).

Débutant :
• [x for x in range(3)] parcourt 0, 1, 2 et les met dans une liste.
• Syntaxe : [expression for variable in iterable].
• Résultat : [0, 1, 2].

Intermédiaire :
• La compréhension est plus flexible que list(range(3)) si on ajoute une transformation.
• Équivalent à : result = []; for x in range(3): result.append(x).

Expert :
• Compréhension souvent plus rapide qu'une boucle + append (optimisation C).

Concepts clés :
• [expr for x in iterable] ; expression = x ici (identité).

Distinctions clés :
• [x for x in range(3)] vs list(range(3)) ; compréhension vs constructeur.

Fonctionnement :
• x=0 → 0, x=1 → 1, x=2 → 2 ; liste [0,1,2].

Exécution étape par étape :
1. range(3) produit 0, 1, 2.
2. Pour chaque x, expression x évaluée.
3. Résultats collectés dans une liste.

Ordre des opérations :
• for clause d'abord, puis expression, puis collecte.

Cas d'utilisation courants :
• Créer des listes à partir d'itérables avec transformation optionnelle.

Cas limites :
• [x for x in range(0)] → [] ; [x for x in [1]] → [1].

Considérations de performance :
• O(n) ; souvent plus rapide qu'une boucle for explicite.

Exemples :
• [x for x in range(3)] → [0,1,2]
• [x for x in range(5)] → [0,1,2,3,4]

Remarques :
• Pour une simple conversion, list(range(3)) suffit.`,

  1262: `[0, 2, 4] : compréhension avec transformation x*2.

Débutant :
• [x*2 for x in range(3)] double chaque valeur : 0, 2, 4.
• L'expression peut être une opération, pas seulement x.
• range(3) donne 0, 1, 2 → doublés : 0, 2, 4.

Intermédiaire :
• expression for item in iterable : l'expression est évaluée à chaque tour.
• Équivalent à : [0*2, 1*2, 2*2].

Expert :
• La transformation est appliquée à la volée ; pas de liste intermédiaire.

Concepts clés :
• [expr for x in iterable] ; expr = x*2 transforme chaque élément.

Distinctions clés :
• [x*2 for x in range(3)] vs [x for x in range(3)] ; transformation vs identité.

Fonctionnement :
• x=0 → 0*2=0 ; x=1 → 2 ; x=2 → 4.

Exécution étape par étape :
1. range(3) : 0, 1, 2.
2. Pour chaque x : x*2 → 0, 2, 4.
3. Liste [0, 2, 4].

Ordre des opérations :
• Itération, évaluation de l'expression, append.

Cas d'utilisation courants :
• Doubler, carrer, convertir : [f(x) for x in items].

Cas limites :
• [x*2 for x in []] → [] ; [x*2 for x in [7]] → [14].

Considérations de performance :
• O(n) ; une seule passe.

Exemples :
• [x*2 for x in range(3)] → [0,2,4]
• [x+1 for x in range(3)] → [1,2,3]

Remarques :
• Les compréhensions avec transformation sont très courantes.`,

  1263: `[0, 2, 4] : compréhension avec filtre if x % 2 == 0 (nombres pairs).

Débutant :
• [x for x in range(5) if x % 2 == 0] garde seulement les pairs.
• range(5) = 0,1,2,3,4 ; pairs = 0, 2, 4.
• Le if filtre avant d'ajouter à la liste.

Intermédiaire :
• [expr for x in iterable if condition] : condition évaluée pour chaque x.
• Seuls les x où condition est True sont inclus.

Expert :
• Le if est évalué avant l'expression ; pas d'expression si condition False.

Concepts clés :
• if condition filtre les éléments ; seuls les True passent.

Distinctions clés :
• if à la fin (filtre) vs x if cond else y (ternaire dans expr).

Fonctionnement :
• 0%2==0 ✓, 1✗, 2✓, 3✗, 4✓ → [0,2,4].

Exécution étape par étape :
1. x=0 : 0%2==0 True → inclure 0.
2. x=1 : False → ignorer.
3. x=2,4 : True → inclure. Liste [0,2,4].

Ordre des opérations :
• for → if → expression (si if True).

Cas d'utilisation courants :
• Filtrer des listes : evens = [x for x in nums if x%2==0].

Cas limites :
• [x for x in range(1) if x%2==0] → [0] ; range(2) → [0].

Considérations de performance :
• O(n) ; une passe, pas de liste intermédiaire pour le filtre.

Exemples :
• [x for x in range(5) if x%2==0] → [0,2,4]
• [x for x in range(5) if x>2] → [3,4]

Remarques :
• Filtre + transformation possible : [x*2 for x in range(5) if x%2==0].`,

  1264: `[1, 3] : compréhension avec filtre if x % 2 == 1 (nombres impairs).

Débutant :
• [x for x in range(5) if x % 2 == 1] garde seulement les impairs.
• range(5) = 0,1,2,3,4 ; impairs = 1, 3.
• x % 2 == 1 signifie « reste 1 quand divisé par 2 ».

Intermédiaire :
• Équivalent à x % 2 != 0 ; 0 est pair donc exclu.
• Même structure que 1263, condition inversée.

Expert :
• x % 2 == 1 et x % 2 != 0 équivalents pour entiers ; 0%2==0.

Concepts clés :
• Filtre impairs : x % 2 == 1 ou x % 2 != 0.

Distinctions clés :
• Pairs (x%2==0) vs impairs (x%2==1) ; 0 est pair.

Fonctionnement :
• 0✗, 1✓, 2✗, 3✓, 4✗ → [1,3].

Exécution étape par étape :
1. x=0 : 0%2==1 False → ignorer.
2. x=1,3 : True → inclure.
3. Liste [1, 3].

Ordre des opérations :
• for → if → expression.

Cas d'utilisation courants :
• odds = [x for x in nums if x%2==1].

Cas limites :
• [x for x in range(1) if x%2==1] → [] ; 0 est pair.

Considérations de performance :
• O(n).

Exemples :
• [x for x in range(5) if x%2==1] → [1,3]
• [x for x in range(10) if x%2==1] → [1,3,5,7,9]

Remarques :
• Pour négatifs, x%2 peut être -1 en Python ; x%2!=0 plus robuste.`,

  1265: `[0, 1, 4] : compréhension avec x**2 (carrés).

Débutant :
• [x**2 for x in range(3)] calcule le carré de chaque valeur.
• 0**2=0, 1**2=1, 2**2=4.
• ** est l'opérateur d'exponentiation.

Intermédiaire :
• x**2 équivaut à x*x pour entiers.
• Transformation mathématique courante.

Expert :
• Pour grands x, x**2 peut dépasser int ; utiliser avec précaution.

Concepts clés :
• expression = x**2 ; transformation par exponentiation.

Distinctions clés :
• x**2 vs x*2 (carré vs double) ; ** a priorité haute.

Fonctionnement :
• 0→0, 1→1, 2→4 ; liste [0,1,4].

Exécution étape par étape :
1. range(3) : 0, 1, 2.
2. 0**2, 1**2, 2**2 → 0, 1, 4.
3. [0, 1, 4].

Ordre des opérations :
• for → expression (x**2).

Cas d'utilisation courants :
• squares = [x**2 for x in range(n)].

Cas limites :
• [x**2 for x in [0]] → [0] ; [x**2 for x in [-1,0,1]] → [1,0,1].

Considérations de performance :
• O(n) ; ** est une opération binaire.

Exemples :
• [x**2 for x in range(3)] → [0,1,4]
• [x**2 for x in range(1,4)] → [1,4,9]

Remarques :
• x**0.5 pour racine carrée ; x**3 pour cube.`,

  1266: `[0, 2, 2] : compréhension avec expression conditionnelle (ternaire).

Débutant :
• [x if x%2==0 else x*2 for x in range(3)] : si pair garder x, sinon doubler.
• x=0 pair→0 ; x=1 impair→2 ; x=2 pair→2.
• Syntaxe : a if condition else b.

Intermédiaire :
• L'expression conditionnelle est dans la partie expression, pas un if de filtre.
• Tous les x sont traités ; le résultat varie selon pair/impair.

Expert :
• Ordre : condition évaluée d'abord, puis a ou b (court-circuit).

Concepts clés :
• expr1 if condition else expr2 ; ternaire dans l'expression.

Distinctions clés :
• x if cond else y (dans expr) vs if cond à la fin (filtre, exclut des éléments).

Fonctionnement :
• 0 : pair → 0 ; 1 : impair → 2 ; 2 : pair → 2.

Exécution étape par étape :
1. x=0 : 0%2==0 True → x=0.
2. x=1 : False → x*2=2.
3. x=2 : True → x=2. Liste [0,2,2].

Ordre des opérations :
• for → condition → expr1 ou expr2.

Cas d'utilisation courants :
• Transformation conditionnelle : [x if cond else f(x) for x in items].

Cas limites :
• Tous pairs → [x for x in range(3) if x%2==0] différent (filtre).

Considérations de performance :
• O(n) ; une condition par élément.

Exemples :
• [x if x%2==0 else x*2 for x in range(3)] → [0,2,2]
• [x if x>0 else 0 for x in [-1,0,1]] → [0,0,1]

Remarques :
• Ne pas confondre le ternaire (tous éléments) et le filtre if (sous-ensemble).`,

  1267: `{0: 0, 1: 1, 2: 4} : compréhension de dictionnaire, clé x, valeur x**2.

Débutant :
• {x: x**2 for x in range(3)} crée un dict : 0→0, 1→1, 2→4.
• Syntaxe : {clé: valeur for x in iterable}.
• Les accolades avec : indiquent un dictionnaire.

Intermédiaire :
• Dict comprehension : {k: v for ...} ; set comprehension : {x for ...} (sans :).
• Les clés doivent être hashables.

Expert :
• Dernière valeur gagne en cas de clés dupliquées ; ici pas de doublon.

Concepts clés :
• {key_expr: value_expr for x in iterable} ; clé: valeur.

Distinctions clés :
• {x: x**2} (dict) vs {x**2} (set) ; le : fait la différence.

Fonctionnement :
• x=0 → 0:0 ; x=1 → 1:1 ; x=2 → 2:4.

Exécution étape par étape :
1. range(3) : 0, 1, 2.
2. Paires 0:0, 1:1, 2:4.
3. Dict {0:0, 1:1, 2:4}.

Ordre des opérations :
• for → clé, valeur → insertion dans le dict.

Cas d'utilisation courants :
• squares = {x: x**2 for x in range(n)}.

Cas limites :
• {} ou {x: x for x in []} → {}.

Considérations de performance :
• O(n) ; dict en moyenne O(1) par insertion.

Exemples :
• {x: x**2 for x in range(3)} → {0:0, 1:1, 2:4}
• {x: x*2 for x in range(3)} → {0:0, 1:2, 2:4}

Remarques :
• Dict comprehensions plus lisibles que boucles + d[k]=v.`,

  1268: `{0, 1, 4} : compréhension d'ensemble (set), pas de clé:valeur.

Débutant :
• {x**2 for x in range(3)} crée un ensemble avec 0, 1, 4.
• Pas de : donc c'est un set, pas un dict.
• Les sets n'ont pas de doublons ni d'ordre.

Intermédiaire :
• {expr for x in iterable} ; une seule expression, pas de paire clé-valeur.
• {0, 1, 4} : ordre d'affichage peut varier.

Expert :
• Sets sont hashables ; éléments doivent être hashables.

Concepts clés :
• {expr for x in iterable} = set comprehension ; pas de :.

Distinctions clés :
• {x**2 for x in range(3)} (set) vs {x: x**2 for x in range(3)} (dict).

Fonctionnement :
• 0**2, 1**2, 2**2 → 0, 1, 4 ; set {0,1,4}.

Exécution étape par étape :
1. range(3) : 0, 1, 2.
2. x**2 → 0, 1, 4.
3. Set {0, 1, 4} (ordre non garanti).

Ordre des opérations :
• for → expression → ajout au set.

Cas d'utilisation courants :
• unique_squares = {x**2 for x in nums}.

Cas limites :
• {x**2 for x in [-1,0,1]} → {0, 1} ; doublon 1 supprimé.

Considérations de performance :
• O(n) ; set lookup O(1) en moyenne.

Exemples :
• {x**2 for x in range(3)} → {0,1,4}
• {x for x in 'hello'} → {'h','e','l','o'}

Remarques :
• Set = unicité ; dict = mapping clé→valeur.`,

  1269: `{0: 0, 1: 2, 2: 4} : compréhension de dict, clé x, valeur x*2.

Débutant :
• {x: x*2 for x in range(3)} : 0→0, 1→2, 2→4.
• Même structure que 1267, transformation différente.
• Doubler chaque valeur comme valeur du dict.

Intermédiaire :
• Clé = élément original, valeur = transformation.
• Utile pour tables de multiplication, mappings.

Expert :
• dict.fromkeys(range(3), 0) donnerait {0:0, 1:0, 2:0} ; pas de transformation par élément.

Concepts clés :
• {x: x*2} ; clé inchangée, valeur transformée.

Distinctions clés :
• {x: x*2} vs {x: x**2} ; double vs carré.

Fonctionnement :
• 0:0, 1:2, 2:4.

Exécution étape par étape :
1. range(3) : 0, 1, 2.
2. 0:0, 1:2, 2:4.
3. {0:0, 1:2, 2:4}.

Ordre des opérations :
• for → clé, valeur → dict.

Cas d'utilisation courants :
• doubled = {x: x*2 for x in numbers}.

Cas limites :
• {x: x*2 for x in []} → {}.

Considérations de performance :
• O(n).

Exemples :
• {x: x*2 for x in range(3)} → {0:0, 1:2, 2:4}
• {x: x+10 for x in range(3)} → {0:10, 1:11, 2:12}

Remarques :
• Dict comprehension pour mapping clé→valeur transformée.`,

  1270: `{0, 2, 4} : compréhension d'ensemble avec filtre (pairs).

Débutant :
• {x for x in range(5) if x%2==0} : ensemble des nombres pairs.
• range(5) = 0..4 ; pairs = 0, 2, 4.
• Set = pas de doublons (ici aucun).

Intermédiaire :
• Même syntaxe que liste avec if, mais résultat en set.
• {expr for x in iterable if condition}.

Expert :
• Set garantit unicité ; si le filtre produisait des doublons, un seul resterait.

Concepts clés :
• Set comprehension + filtre if.

Distinctions clés :
• {x for x in range(5) if x%2==0} (set) vs [x for x in range(5) if x%2==0] (list).

Fonctionnement :
• 0, 2, 4 passent le filtre ; set {0, 2, 4}.

Exécution étape par étape :
1. x=0 : 0%2==0 True → 0.
2. x=1,3 : False → ignorés.
3. x=2,4 : True → 2, 4. Set {0, 2, 4}.

Ordre des opérations :
• for → if → expression → set.

Cas d'utilisation courants :
• evens = {x for x in nums if x%2==0}.

Cas limites :
• {x for x in range(1) if x%2==0} → {0}.

Considérations de performance :
• O(n).

Exemples :
• {x for x in range(5) if x%2==0} → {0,2,4}
• {x for x in range(10) if x>5} → {6,7,8,9}

Remarques :
• Set + filtre = ensemble unique des éléments qui passent.`,

  1271: `{'a': 'a', 'b': 'b', 'c': 'c'} : dict comprehension sur chaîne, identité.

Débutant :
• {x: x for x in 'abc'} : chaque caractère est clé et valeur.
• 'abc' itère 'a','b','c' ; paires 'a':'a', etc.
• Crée un mapping identité caractère→caractère.

Intermédiaire :
• Les chaînes sont itérables ; x parcourt les caractères.
• Utile pour normalisation, validation de caractères autorisés.

Expert :
• dict.fromkeys('abc') → {'a':None, 'b':None, 'c':None} ; pas de valeur personnalisée.

Concepts clés :
• Dict comprehension sur str ; clé et valeur = caractère.

Distinctions clés :
• {x: x for x in 'abc'} vs {x for x in 'abc'} ; dict vs set.

Fonctionnement :
• 'a':'a', 'b':'b', 'c':'c'.

Exécution étape par étape :
1. 'abc' itère 'a','b','c'.
2. Pour chaque x : x:x.
3. {'a':'a', 'b':'b', 'c':'c'}.

Ordre des opérations :
• for sur str → clé:valeur.

Cas d'utilisation courants :
• char_map = {c: c for c in allowed_chars}.

Cas limites :
• {x: x for x in ''} → {}.

Considérations de performance :
• O(n) avec n = len(chaîne).

Exemples :
• {x: x for x in 'abc'} → {'a':'a','b':'b','c':'c'}
• {x: x.upper() for x in 'abc'} → {'a':'A','b':'B','c':'C'}

Remarques :
• Identité sur str = ensemble de caractères comme clés de dict.`,

  1272: `{'A', 'B', 'C'} : set comprehension avec .upper() sur chaque caractère.

Débutant :
• {x.upper() for x in 'abc'} : applique .upper() à chaque lettre.
• 'a'→'A', 'b'→'B', 'c'→'C'.
• Résultat : ensemble {'A','B','C'}.

Intermédiaire :
• L'expression peut être un appel de méthode.
• Set = pas d'ordre ; affichage peut varier.

Expert :
• Pour str avec majuscules déjà, .upper() est idempotent.

Concepts clés :
• {expr for x in iterable} ; expr = x.upper().

Distinctions clés :
• {x.upper() for x in 'abc'} (set) vs [x.upper() for x in 'abc'] (list).

Fonctionnement :
• 'a'.upper()='A', etc. ; set {'A','B','C'}.

Exécution étape par étape :
1. 'abc' : 'a','b','c'.
2. .upper() → 'A','B','C'.
3. Set {'A','B','C'}.

Ordre des opérations :
• for → expression (méthode) → set.

Cas d'utilisation courants :
• uppercase_chars = {c.upper() for c in text}.

Cas limites :
• {x.upper() for x in ''} → set().

Considérations de performance :
• O(n).

Exemples :
• {x.upper() for x in 'abc'} → {'A','B','C'}
• {x.lower() for x in 'ABC'} → {'a','b','c'}

Remarques :
• Set de caractères en majuscules = normalisation pour comparaison.`,

  1273: `{'a': 1, 'ab': 2, 'abc': 3} : dict comprehension, clé=chaîne, valeur=len().

Débutant :
• {x: len(x) for x in ['a','ab','abc']} : chaque chaîne mappée à sa longueur.
• 'a'→1, 'ab'→2, 'abc'→3.
• len() compte les caractères.

Intermédiaire :
• La clé peut être l'élément, la valeur une fonction de l'élément.
• Utile pour index de longueurs, caches.

Expert :
• len() O(1) pour str en CPython (longueur stockée).

Concepts clés :
• {x: len(x)} ; valeur = fonction de la clé.

Distinctions clés :
• {x: len(x)} vs {len(x) for x in ...} ; dict vs set de longueurs.

Fonctionnement :
• 'a':1, 'ab':2, 'abc':3.

Exécution étape par étape :
1. Liste ['a','ab','abc'].
2. Pour chaque x : x: len(x).
3. {'a':1, 'ab':2, 'abc':3}.

Ordre des opérations :
• for → len(x) → paire clé:valeur.

Cas d'utilisation courants :
• length_index = {s: len(s) for s in strings}.

Cas limites :
• {x: len(x) for x in ['']} → {'': 0}.

Considérations de performance :
• O(n) ; len() O(1) par chaîne.

Exemples :
• {x: len(x) for x in ['a','ab','abc']} → {'a':1,'ab':2,'abc':3}
• {x: len(x) for x in ['hi','hello']} → {'hi':2,'hello':5}

Remarques :
• Dict str→len = index de longueur utile pour tri ou filtrage.`,

  1274: `{'h', 'e', 'l', 'o'} : set comprehension sur 'hello' ; doublons supprimés.

Débutant :
• {x for x in 'hello'} : ensemble des caractères uniques.
• 'hello' a deux 'l' ; le set n'en garde qu'un.
• Résultat : {'h','e','l','o'} (4 éléments).

Intermédiaire :
• Les sets ne contiennent pas de doublons.
• Ordre non garanti ; affichage peut varier.

Expert :
• Déduplication en O(n) ; utile pour compter caractères uniques.

Concepts clés :
• Set = unicité ; {x for x in iterable} déduplique.

Distinctions clés :
• {x for x in 'hello'} vs [x for x in 'hello'] ; set vs list (avec doublons).

Fonctionnement :
• 'h','e','l','l','o' → set enlève le second 'l'.

Exécution étape par étape :
1. 'hello' itère 'h','e','l','l','o'.
2. Chaque caractère ajouté au set.
3. Doublon 'l' ignoré. {'h','e','l','o'}.

Ordre des opérations :
• for → add au set (si pas déjà présent).

Cas d'utilisation courants :
• unique_chars = {c for c in text}.

Cas limites :
• {x for x in 'aaa'} → {'a'} ; {x for x in ''} → set().

Considérations de performance :
• O(n) ; set add O(1) en moyenne.

Exemples :
• {x for x in 'hello'} → {'h','e','l','o'}
• len({x for x in 'hello'}) → 4

Remarques :
• Set sur une chaîne = caractères uniques ; classique pour déduplication.`,

  1275: `{1: 2, 2: 4} : dict comprehension avec filtre if x > 0.

Débutant :
• {x: x*2 for x in range(3) if x > 0} : exclut 0, garde 1 et 2.
• 1:2, 2:4 ; 0 est filtré car 0>0 est False.
• Filtre avant de créer la paire.

Intermédiaire :
• {k: v for x in iterable if condition} ; condition sur x.
• Seuls les x qui passent créent une entrée.

Expert :
• Le filtre réduit le nombre d'insertions ; pas de clé 0.

Concepts clés :
• Dict comprehension + if ; filtre les éléments avant mapping.

Distinctions clés :
• if x>0 (exclut 0) vs pas de filtre (inclut 0).

Fonctionnement :
• x=0 : 0>0 False → ignoré.
• x=1,2 : True → 1:2, 2:4.

Exécution étape par étape :
1. x=0 : if False → skip.
2. x=1 : 1:2.
3. x=2 : 2:4. {1:2, 2:4}.

Ordre des opérations :
• for → if → clé:valeur.

Cas d'utilisation courants :
• {x: f(x) for x in items if x > 0}.

Cas limites :
• {x: x*2 for x in range(1) if x>0} → {} ; 0 exclu.

Considérations de performance :
• O(n) ; moins d'insertions si filtre restrictif.

Exemples :
• {x: x*2 for x in range(3) if x>0} → {1:2, 2:4}
• {x: x**2 for x in range(5) if x%2==1} → {1:1, 3:9}

Remarques :
• Filtre + transformation = dict partiel sur sous-ensemble.`,

  1276: `{0, 2} : set comprehension avec ternaire ; doublons supprimés.

Débutant :
• {x if x%2==0 else x*2 for x in range(3)} : pair→x, impair→x*2.
• 0→0, 1→2, 2→2 ; le set enlève le doublon 2.
• Résultat : {0, 2}.

Intermédiaire :
• Expression conditionnelle produit 0, 2, 2 ; set garde {0, 2}.
• Le ternaire s'applique à tous les x ; le set déduplique.

Expert :
• 1 et 2 produisent tous deux 2 ; un seul 2 dans le set.

Concepts clés :
• Ternaire dans set comprehension ; set enlève doublons.

Distinctions clés :
• {x if cond else y} (set, déduplique) vs [x if cond else y] (list, garde tout).

Fonctionnement :
• 0→0, 1→2, 2→2 ; set {0, 2}.

Exécution étape par étape :
1. x=0 : pair → 0.
2. x=1 : impair → 2.
3. x=2 : pair → 2. Set {0, 2} (un seul 2).

Ordre des opérations :
• for → ternaire → add au set.

Cas d'utilisation courants :
• Valeurs transformées uniques : {f(x) for x in items}.

Cas limites :
• Si tous produisent la même valeur → set d'un élément.

Considérations de performance :
• O(n) ; déduplication automatique.

Exemples :
• {x if x%2==0 else x*2 for x in range(3)} → {0, 2}
• {x*2 for x in range(3)} → {0, 2, 4} (pas de doublon)

Remarques :
• Set + ternaire = ensemble des résultats transformés uniques.`,

  1277: `Objet generator : (x for x in range(3)) crée un générateur paresseux.

Débutant :
• (x for x in range(3)) avec parenthèses, pas crochets.
• Ne produit pas [0,1,2] immédiatement ; crée un générateur.
• Les valeurs sont produites à la demande.

Intermédiaire :
• Parenthèses = generator expression ; crochets = list comprehension.
• Économie mémoire : pas de liste matérialisée.

Expert :
• Une fois consommé, le générateur est épuisé ; pas de réutilisation.

Concepts clés :
• (expr for x in iterable) = generator ; paresseux, un seul passage.

Distinctions clés :
• (x for x in range(3)) (generator) vs [x for x in range(3)] (list).

Fonctionnement :
• Crée un objet qui yield 0, 1, 2 quand itéré.

Exécution étape par étape :
1. (x for x in range(3)) évalué → generator object.
2. Pas d'itération tant qu'on ne consomme pas.
3. next() ou for déclenche la production.

Ordre des opérations :
• Création du generator ; consommation différée.

Cas d'utilisation courants :
• gen = (x**2 for x in large_range) ; économie mémoire.

Cas limites :
• (x for x in []) → generator vide ; next() → StopIteration.

Considérations de performance :
• O(1) à la création ; O(n) à la consommation.

Exemples :
• g = (x for x in range(3)); list(g) → [0,1,2]
• type((x for x in range(1))) → <class 'generator'>

Remarques :
• Parenthèses obligatoires pour generator ; pas [].`,

  1278: `[0, 1, 2] : list() consomme le générateur et produit une liste.

Débutant :
• list((x for x in range(3))) : le générateur est itéré, valeurs collectées.
• Équivalent à [x for x in range(3)].
• list() peut prendre un itérable (dont generator).

Intermédiaire :
• list() force l'évaluation complète du générateur.
• Après list(g), g est épuisé ; list(g) à nouveau → [].

Expert :
• list() construit la liste en une passe ; pas de liste intermédiaire.

Concepts clés :
• list(iterable) matérialise tout itérable, y compris generator.

Distinctions clés :
• list((x for x in range(3))) vs (x for x in range(3)) ; list vs generator.

Fonctionnement :
• Generator yield 0, 1, 2 ; list() les collecte.

Exécution étape par étape :
1. (x for x in range(3)) créé.
2. list() appelle next() jusqu'à StopIteration.
3. [0, 1, 2] retourné.

Ordre des opérations :
• Generator créé → list() itère → liste construite.

Cas d'utilisation courants :
• Résultat matérialisé quand nécessaire : list(gen).

Cas limites :
• list((x for x in [])) → [].

Considérations de performance :
• O(n) temps et mémoire.

Exemples :
• list((x for x in range(3))) → [0,1,2]
• list((x*2 for x in range(3))) → [0,2,4]

Remarques :
• list(generator) = façon standard de matérialiser un generator.`,

  1279: `(0, 1, 2) : tuple() consomme le générateur et produit un tuple.

Débutant :
• tuple((x for x in range(3))) : même principe que list(), mais tuple.
• Résultat : (0, 1, 2) — tuple immuable.
• tuple() accepte tout itérable.

Intermédiaire :
• tuple() construit un tuple ; immuable après création.
• Équivalent à tuple([0,1,2]) pour ce cas.

Expert :
• tuple() est légèrement plus rapide que list() pour petits itérables (moins d'allocations).

Concepts clés :
• tuple(iterable) matérialise en tuple ; immuable.

Distinctions clés :
• tuple((x for x in range(3))) vs list(...) ; tuple vs list.

Fonctionnement :
• Generator → 0, 1, 2 ; tuple() collecte en (0, 1, 2).

Exécution étape par étape :
1. Generator créé.
2. tuple() itère et collecte.
3. (0, 1, 2) retourné.

Ordre des opérations :
• Generator → tuple() → tuple.

Cas d'utilisation courants :
• Résultat immuable : t = tuple(gen).

Cas limites :
• tuple((x for x in [])) → ().

Considérations de performance :
• O(n).

Exemples :
• tuple((x for x in range(3))) → (0,1,2)
• tuple((x**2 for x in range(3))) → (0,1,4)

Remarques :
• tuple pour séquences immuables ; list pour modifiables.`,

  1280: `3 : sum() sur un generator expression, 0+1+2=3.

Débutant :
• sum(x for x in range(3)) : additionne 0, 1, 2.
• Pas besoin de list() ; sum() accepte un itérable directement.
• Économie mémoire : pas de liste intermédiaire.

Intermédiaire :
• sum(iterable) consomme l'itérable et additionne.
• sum(iterable, start=0) ; start par défaut 0.

Expert :
• sum() en C ; une seule passe, accumulation en O(1) mémoire supplémentaire.

Concepts clés :
• sum(iterable) ; generator expression est un itérable.

Distinctions clés :
• sum(x for x in range(3)) vs sum([0,1,2]) ; generator vs list (même résultat).

Fonctionnement :
• 0+1+2 = 3.

Exécution étape par étape :
1. Generator (x for x in range(3)) créé.
2. sum() itère : acc = 0+0, +1, +2.
3. Retourne 3.

Ordre des opérations :
• sum reçoit l'itérable ; accumulation séquentielle.

Cas d'utilisation courants :
• total = sum(x for x in items) ; pas de list intermédiaire.

Cas limites :
• sum(x for x in range(0)) → 0 ; sum([], 10) → 10.

Considérations de performance :
• O(n) temps, O(1) mémoire supplémentaire.

Exemples :
• sum(x for x in range(3)) → 3
• sum(x**2 for x in range(3)) → 5

Remarques :
• sum + generator = pattern efficace pour totaux.`,

  1281: `2 : max() sur generator, maximum de 0, 1, 2.

Débutant :
• max(x for x in range(3)) : parcourt 0, 1, 2, retourne 2.
• max() accepte un itérable ; pas besoin de list().
• Économie mémoire pour grands itérables.

Intermédiaire :
• max(iterable) ; éléments doivent être comparables.
• max(iterable, default=x) pour itérable vide.

Expert :
• max() court-circuite partiellement ; doit voir tous les éléments pour garantir le max.

Concepts clés :
• max(iterable) ; generator est un itérable.

Distinctions clés :
• max(x for x in range(3)) vs max([0,1,2]) ; même résultat.

Fonctionnement :
• Parcourt 0, 1, 2 ; garde le plus grand : 2.

Exécution étape par étape :
1. Generator créé.
2. max() itère, compare, garde 2.
3. Retourne 2.

Ordre des opérations :
• max consomme l'itérable ; comparaisons successives.

Cas d'utilisation courants :
• largest = max(x for x in items).

Cas limites :
• max(x for x in range(0)) → ValueError ; utiliser default.

Considérations de performance :
• O(n) ; une passe.

Exemples :
• max(x for x in range(3)) → 2
• max(x**2 for x in range(3)) → 4

Remarques :
• max/min sur generator = pas de liste intermédiaire.`,

  1282: `0 : min() sur generator, minimum de 0, 1, 2.

Débutant :
• min(x for x in range(3)) : parcourt 0, 1, 2, retourne 0.
• min() accepte un itérable.
• Même principe que max(), valeur minimale.

Intermédiaire :
• min(iterable) ; éléments comparables.
• min(iterable, default=x) pour vide.

Expert :
• min() O(n) ; doit parcourir tout pour garantir le min.

Concepts clés :
• min(iterable) ; generator acceptable.

Distinctions clés :
• min vs max ; min(x for x in range(3)) → 0.

Fonctionnement :
• 0, 1, 2 ; min = 0.

Exécution étape par étape :
1. Generator créé.
2. min() itère, garde 0.
3. Retourne 0.

Ordre des opérations :
• min consomme ; comparaisons.

Cas d'utilisation courants :
• smallest = min(x for x in items).

Cas limites :
• min(x for x in []) → ValueError.

Considérations de performance :
• O(n).

Exemples :
• min(x for x in range(3)) → 0
• min(x for x in range(1,4)) → 1

Remarques :
• min/max sur generator = efficace en mémoire.`,

  1283: `True : all(x > 0 for x in range(1, 3)) — tous (1 et 2) sont > 0.

Débutant :
• all(x > 0 for x in range(1, 3)) : range(1,3) = 1, 2.
• 1>0 True, 2>0 True ; tous True → all() retourne True.
• all() exige que tous les éléments soient truthy.

Intermédiaire :
• all(iterable) ; court-circuite au premier False.
• Ici pas de False ; retourne True.

Expert :
• all([]) → True (vacuous truth) ; aucun élément falsy.

Concepts clés :
• all(iterable) ; True si tous truthy, False sinon.

Distinctions clés :
• all(x>0 for x in range(1,3)) vs any(...) ; tous vs au moins un.

Fonctionnement :
• 1>0, 2>0 → True, True ; all → True.

Exécution étape par étape :
1. range(1,3) : 1, 2.
2. 1>0 True, 2>0 True.
3. all([True,True]) → True.

Ordre des opérations :
• Generator produit booléens ; all() court-circuite si False.

Cas d'utilisation courants :
• if all(x > 0 for x in nums): validation.

Cas limites :
• all(x>0 for x in range(0,3)) → False (0 pas > 0).

Considérations de performance :
• Court-circuit ; stop au premier False.

Exemples :
• all(x>0 for x in range(1,3)) → True
• all(x>0 for x in range(0,3)) → False

Remarques :
• all + generator = validation efficace.`,

  1284: `False : any(x > 2 for x in range(3)) — aucun n'est > 2.

Débutant :
• any(x > 2 for x in range(3)) : range(3) = 0, 1, 2.
• 0>2 False, 1>2 False, 2>2 False ; aucun True → any() retourne False.
• any() retourne True si au moins un élément est truthy.

Intermédiaire :
• any(iterable) ; court-circuite au premier True.
• Ici tous False ; parcourt tout puis False.

Expert :
• any([]) → False ; aucun élément truthy.

Concepts clés :
• any(iterable) ; True si au moins un truthy.

Distinctions clés :
• any(x>2 for x in range(3)) vs all(...) ; au moins un vs tous.

Fonctionnement :
• 0>2, 1>2, 2>2 → False, False, False ; any → False.

Exécution étape par étape :
1. range(3) : 0, 1, 2.
2. Tous >2 ? Non.
3. any([False,False,False]) → False.

Ordre des opérations :
• Generator → any() court-circuite au premier True (ici jamais).

Cas d'utilisation courants :
• if any(x > 10 for x in nums): existe un grand.

Cas limites :
• any(x>1 for x in range(3)) → True (2>1).

Considérations de performance :
• Court-circuit au premier True.

Exemples :
• any(x>2 for x in range(3)) → False
• any(x>1 for x in range(3)) → True

Remarques :
• any + generator = recherche d'existence efficace.`,

  1285: `Objet generator : (x*2 for x in range(3)) — transformation paresseuse.

Débutant :
• (x*2 for x in range(3)) : générateur qui doublera chaque valeur.
• Pas de liste ; valeurs 0, 2, 4 produites à la demande.
• Parenthèses = generator, pas list.

Intermédiaire :
• Même syntaxe que list comprehension mais avec ().
• Transformation appliquée lors de l'itération.

Expert :
• Équivalent fonctionnel à map(lambda x: x*2, range(3)) en style generator.

Concepts clés :
• (expr for x in iterable) ; expr = x*2 ici.

Distinctions clés :
• (x*2 for x in range(3)) vs [x*2 for x in range(3)] ; generator vs list.

Fonctionnement :
• Quand itéré : 0, 2, 4.

Exécution étape par étape :
1. Generator créé.
2. next() ou for : 0*2, 1*2, 2*2.
3. Yield 0, 2, 4.

Ordre des opérations :
• Création paresseuse ; production à la consommation.

Cas d'utilisation courants :
• gen = (x*2 for x in large_list) ; économie mémoire.

Cas limites :
• (x*2 for x in []) → generator vide.

Considérations de performance :
• O(1) création ; O(n) consommation.

Exemples :
• list((x*2 for x in range(3))) → [0,2,4]
• sum((x*2 for x in range(3))) → 6

Remarques :
• Generator avec transformation = map-like paresseux.`,

  1286: `[0, 2, 4] : list() matérialise le generator (x*2 for x in range(3)).

Débutant :
• list((x*2 for x in range(3))) : consomme le generator, collecte 0, 2, 4.
• Équivalent à [x*2 for x in range(3)].
• Résultat : liste [0, 2, 4].

Intermédiaire :
• list() force l'itération complète du generator.
• Transformation x*2 appliquée pendant la consommation.

Expert :
• list() alloue la liste en une passe ; pas de réallocations multiples.

Concepts clés :
• list(generator) matérialise ; même résultat que list comprehension.

Distinctions clés :
• list((x*2 for x in range(3))) vs (x*2 for x in range(3)) ; list vs generator.

Fonctionnement :
• Generator yield 0, 2, 4 ; list() → [0, 2, 4].

Exécution étape par étape :
1. Generator créé.
2. list() itère : 0, 2, 4.
3. [0, 2, 4] retourné.

Ordre des opérations :
• Generator → list() → liste.

Cas d'utilisation courants :
• Résultat matérialisé quand on a besoin d'une liste.

Cas limites :
• list((x*2 for x in [])) → [].

Considérations de performance :
• O(n) temps et mémoire.

Exemples :
• list((x*2 for x in range(3))) → [0,2,4]
• list((x**2 for x in range(3))) → [0,1,4]

Remarques :
• list + generator = conversion explicite en liste.`,

  1287: `[0, 2, 4] : map(lambda x: x*2, range(3)) applique la fonction à chaque élément.

Débutant :
• map(lambda x: x*2, range(3)) : applique « doubler » à 0, 1, 2.
• map() retourne un map object ; list() le convertit en liste.
• Équivalent fonctionnel à [x*2 for x in range(3)].

Intermédiaire :
• map(fonction, iterable) ; fonction appliquée à chaque élément.
• map est paresseux ; list() force l'évaluation.

Expert :
• map() en C ; souvent plus rapide que lambda+comprehension pour fonctions simples.

Concepts clés :
• map(f, iterable) ; f appliquée à chaque élément.

Distinctions clés :
• map(lambda x: x*2, ...) vs [x*2 for x in ...] ; style fonctionnel vs comprehension.

Fonctionnement :
• 0→0, 1→2, 2→4 ; map object itéré par list().

Exécution étape par étape :
1. map(lambda x: x*2, range(3)) créé.
2. list() consomme : 0*2, 1*2, 2*2.
3. [0, 2, 4].

Ordre des opérations :
• map créé ; list() itère sur map.

Cas d'utilisation courants :
• list(map(str, nums)) ; list(map(int, strings)).

Cas limites :
• list(map(lambda x: x*2, [])) → [].

Considérations de performance :
• O(n) ; map optimisé en C.

Exemples :
• list(map(lambda x: x*2, range(3))) → [0,2,4]
• list(map(str, range(3))) → ['0','1','2']

Remarques :
• map + lambda = style fonctionnel ; comprehension souvent plus lisible.`,

  1288: `[0, 2, 4] : filter(lambda x: x%2==0, range(5)) garde les pairs.

Débutant :
• filter(lambda x: x%2==0, range(5)) : garde 0, 2, 4.
• filter() retourne un filter object ; list() le convertit.
• La lambda retourne True pour pairs, False pour impairs.

Intermédiaire :
• filter(fonction, iterable) ; garde les éléments où fonction(x) est True.
• Équivalent à [x for x in range(5) if x%2==0].

Expert :
• filter est paresseux ; même comportement que comprehension avec if.

Concepts clés :
• filter(predicate, iterable) ; garde les éléments où predicate True.

Distinctions clés :
• filter vs map ; filter garde/supprime, map transforme.

Fonctionnement :
• 0✓, 1✗, 2✓, 3✗, 4✓ → [0, 2, 4].

Exécution étape par étape :
1. filter créé.
2. Pour chaque x : x%2==0 ? Garde si True.
3. list() → [0, 2, 4].

Ordre des opérations :
• filter créé ; list() consomme.

Cas d'utilisation courants :
• evens = list(filter(lambda x: x%2==0, nums)).

Cas limites :
• list(filter(lambda x: x%2==0, [])) → [].

Considérations de performance :
• O(n) ; une passe.

Exemples :
• list(filter(lambda x: x%2==0, range(5))) → [0,2,4]
• list(filter(lambda x: x>2, range(5))) → [3,4]

Remarques :
• filter(None, iterable) supprime les falsy.`,

  1289: `['0', '1', '2'] : map(str, range(3)) convertit chaque int en str.

Débutant :
• map(str, range(3)) : applique str() à 0, 1, 2.
• str(0)='0', str(1)='1', str(2)='2'.
• list() convertit le map object en liste.

Intermédiaire :
• map() peut prendre une fonction built-in (str, int, float).
• Pas besoin de lambda pour conversion simple.

Expert :
• str est une fonction ; map(str, iterable) très courant pour affichage.

Concepts clés :
• map(str, iterable) ; conversion int→str.

Distinctions clés :
• map(str, ...) vs [str(x) for x in ...] ; même résultat.

Fonctionnement :
• str(0), str(1), str(2) → '0','1','2'.

Exécution étape par étape :
1. map(str, range(3)) créé.
2. list() consomme : '0','1','2'.
3. ['0','1','2'].

Ordre des opérations :
• map → list().

Cas d'utilisation courants :
• strings = list(map(str, numbers)) ; pour join, affichage.

Cas limites :
• list(map(str, [])) → [].

Considérations de performance :
• O(n) ; str() O(log n) par entier en moyenne.

Exemples :
• list(map(str, range(3))) → ['0','1','2']
• list(map(int, ['1','2','3'])) → [1,2,3]

Remarques :
• map(str, ...) = conversion en chaînes pour affichage.`,

  1290: `[1, 2, 'a'] : filter(None, ...) supprime les valeurs falsy.

Débutant :
• filter(None, [0, 1, 2, '', 'a']) : supprime 0 et '' (falsy).
• Garde 1, 2, 'a' (truthy).
• filter(None, ...) = garder seulement les truthy.

Intermédiaire :
• Quand le premier argument est None, filter utilise bool comme prédicat.
• Falsy : 0, '', None, [], False, etc.

Expert :
• Équivalent à [x for x in iterable if x] ; plus concis.

Concepts clés :
• filter(None, iterable) ; supprime falsy, garde truthy.

Distinctions clés :
• filter(None, ...) vs filter(lambda x: x, ...) ; identiques.

Fonctionnement :
• 0✗, 1✓, 2✓, ''✗, 'a'✓ → [1, 2, 'a'].

Exécution étape par étape :
1. filter(None, [...]) créé.
2. Pour chaque : bool(x) ; garde si True.
3. [1, 2, 'a'].

Ordre des opérations :
• filter → list().

Cas d'utilisation courants :
• truthy_only = list(filter(None, items)).

Cas limites :
• list(filter(None, [0,0,0])) → [].

Considérations de performance :
• O(n).

Exemples :
• list(filter(None, [0,1,2,'','a'])) → [1,2,'a']
• list(filter(None, [None, 1, '', 2])) → [1, 2]

Remarques :
• filter(None, ...) = idiome pour supprimer falsy.`,

  1291: `0 : next(iter(range(3))) récupère le premier élément de l'itérateur.

Débutant :
• iter(range(3)) crée un itérateur à partir du range.
• next() retourne le prochain élément : 0.
• Chaque next() avance l'itérateur.

Intermédiaire :
• iter(iterable) → iterator ; next(iterator) → élément suivant.
• for utilise iter() et next() en interne.

Expert :
• next(it, default) évite StopIteration si fourni ; ici pas de default.

Concepts clés :
• iter() crée un iterator ; next() consomme un élément.

Distinctions clés :
• next(iter(...)) vs list(...)[0] ; next avance l'itérateur.

Fonctionnement :
• iter(range(3)) → iterator ; next() → 0.

Exécution étape par étape :
1. iter(range(3)) créé.
2. next() demande le premier élément.
3. 0 retourné ; iterator pointe maintenant sur 1.

Ordre des opérations :
• iter() puis next().

Cas d'utilisation courants :
• first = next(iter(items)) ; consommation manuelle.

Cas limites :
• next(iter([])) → StopIteration.

Considérations de performance :
• O(1) pour next().

Exemples :
• next(iter(range(3))) → 0
• it = iter([1,2,3]); next(it) → 1

Remarques :
• next + iter = accès manuel au premier élément.`,

  1292: `list_iterator object : iter([1,2,3]) crée un itérateur sur la liste.

Débutant :
• iter([1,2,3]) retourne un objet itérateur, pas la liste.
• L'itérateur permet de parcourir un élément à la fois.
• for et next() utilisent les itérateurs.

Intermédiaire :
• iter(iterable) appelle __iter__() ; retourne self pour les iterators.
• L'itérateur garde la position ; next() l'avance.

Expert :
• Les listes sont iterables ; iter() retourne un list_iterator.

Concepts clés :
• iter(iterable) → iterator ; nécessaire pour next().

Distinctions clés :
• iter([1,2,3]) vs [1,2,3] ; iterator vs list.

Fonctionnement :
• iter() crée un objet qui yield 1, 2, 3 à la demande.

Exécution étape par étape :
1. iter([1,2,3]) appelé.
2. list.__iter__() retourne list_iterator.
3. Objet prêt pour next() ou for.

Ordre des opérations :
• iter() → création de l'iterator.

Cas d'utilisation courants :
• it = iter(lst) ; contrôle manuel de l'itération.

Cas limites :
• iter([]) → iterator vide ; next() → StopIteration.

Considérations de performance :
• O(1) ; pas de copie de la liste.

Exemples :
• type(iter([1,2,3])) → <class 'list_iterator'>
• next(iter([1,2,3])) → 1

Remarques :
• iter() = passer d'iterable à iterator.`,

  1293: `[1, 2, 3] : list(iter([1,2,3])) consomme l'itérateur et reconstruit la liste.

Débutant :
• iter([1,2,3]) crée un itérateur.
• list() parcourt l'itérateur et collecte tous les éléments.
• Résultat : [1, 2, 3] (copie des éléments).

Intermédiaire :
• list() accepte tout itérable ; iter() retourne un itérable (iterator).
• Après list(it), it est épuisé ; list(it) à nouveau → [].

Expert :
• list(iter(lst)) crée une shallow copy ; équivalent à lst.copy() pour liste.

Concepts clés :
• list(iterator) consomme tout l'iterator ; reconstruit une liste.

Distinctions clés :
• list(iter([1,2,3])) vs [1,2,3] ; copie via iterator.

Fonctionnement :
• iter() → iterator ; list() itère et collecte 1, 2, 3.

Exécution étape par étape :
1. iter([1,2,3]) créé.
2. list() appelle next() jusqu'à StopIteration.
3. [1, 2, 3] retourné.

Ordre des opérations :
• iter() → list().

Cas d'utilisation courants :
• Copie via iterator ; matérialiser un iterator.

Cas limites :
• list(iter([])) → [].

Considérations de performance :
• O(n) ; une copie.

Exemples :
• list(iter([1,2,3])) → [1,2,3]
• it = iter([1,2,3]); list(it); list(it) → [] (épuisé)

Remarques :
• list(iter(x)) = façon de consommer un iterator en liste.`,

  1294: `6 : sum([1, 2, 3]) additionne tous les éléments.

Débutant :
• sum([1, 2, 3]) : 1 + 2 + 3 = 6.
• sum() accepte tout itérable de nombres.
• Retourne le total.

Intermédiaire :
• sum(iterable, start=0) ; start ajouté au total.
• sum([], 10) → 10.

Expert :
• sum() en C ; évite overflow pour int en Python 3 (arbitrary precision).

Concepts clés :
• sum(iterable) ; addition de tous les éléments.

Distinctions clés :
• sum([1,2,3]) vs sum((1,2,3)) ; list vs tuple, même résultat.

Fonctionnement :
• 1+2+3 = 6.

Exécution étape par étape :
1. sum([1,2,3]) reçoit la liste.
2. Accumulation : 0+1=1, +2=3, +3=6.
3. Retourne 6.

Ordre des opérations :
• Itération, accumulation, retour.

Cas d'utilisation courants :
• total = sum(numbers).

Cas limites :
• sum([]) → 0 ; sum([1], 10) → 11.

Considérations de performance :
• O(n).

Exemples :
• sum([1,2,3]) → 6
• sum(range(5)) → 10

Remarques :
• sum = agrégation de base pour nombres.`,

  1295: `False : all([True, True, False]) — pas tous truthy.

Débutant :
• all([True, True, False]) : vérifie si tous sont truthy.
• True, True, False ; False est falsy → all() retourne False.
• all() retourne True seulement si tous les éléments sont truthy.

Intermédiaire :
• all() court-circuite : s'arrête au premier falsy.
• all([]) → True (vacuous truth).

Expert :
• Équivalent à : not any(not x for x in iterable).

Concepts clés :
• all(iterable) ; True si tous truthy, False sinon.

Distinctions clés :
• all([True,True,False]) vs any([True,True,False]) ; all vs any.

Fonctionnement :
• True ✓, True ✓, False ✗ → False.

Exécution étape par étape :
1. Premier élément True.
2. Deuxième True.
3. Troisième False → retourne False immédiatement.

Ordre des opérations :
• Parcours séquentiel ; court-circuit au premier False.

Cas d'utilisation courants :
• if all(conditions): validation.

Cas limites :
• all([True,True,True]) → True ; all([]) → True.

Considérations de performance :
• Court-circuit ; peut ne pas tout parcourir.

Exemples :
• all([True,True,False]) → False
• all([1,2,3]) → True

Remarques :
• all = « tous satisfont » ; any = « au moins un ».`,

  1296: `True : any([False, False, True]) — au moins un truthy.

Débutant :
• any([False, False, True]) : vérifie si au moins un est truthy.
• False, False, True ; True est truthy → any() retourne True.
• any() retourne True dès qu'un élément est truthy.

Intermédiaire :
• any() court-circuite : s'arrête au premier truthy.
• any([]) → False.

Expert :
• Équivalent à : True in (bool(x) for x in iterable) conceptuellement.

Concepts clés :
• any(iterable) ; True si au moins un truthy.

Distinctions clés :
• any([False,False,True]) vs all([False,False,True]) ; any vs all.

Fonctionnement :
• False ✗, False ✗, True ✓ → True.

Exécution étape par étape :
1. Premier False.
2. Deuxième False.
3. Troisième True → retourne True immédiatement.

Ordre des opérations :
• Parcours ; court-circuit au premier True.

Cas d'utilisation courants :
• if any(conditions): au moins une condition vraie.

Cas limites :
• any([False,False,False]) → False ; any([]) → False.

Considérations de performance :
• Court-circuit ; peut s'arrêter tôt.

Exemples :
• any([False,False,True]) → True
• any([0,0,1]) → True

Remarques :
• any = recherche d'existence ; très utile pour validation.`,

  1297: `[0, 1, 2, 1, 2, 3] : boucles for imbriquées, somme i+j pour chaque (i,j).

Débutant :
• Boucle externe i : 0, 1 ; boucle interne j : 0, 1, 2.
• Pour chaque (i,j), on ajoute i+j : (0,0)→0, (0,1)→1, (0,2)→2, (1,0)→1, (1,1)→2, (1,2)→3.
• La boucle interne fait un tour complet pour chaque valeur de i.

Intermédiaire :
• Produit cartésien de range(2) × range(3) ; 2×3 = 6 itérations.
• L'ordre : d'abord tous les j pour i=0, puis tous les j pour i=1.

Expert :
• Complexité O(n×m) ; motif courant pour matrices, grilles.

Concepts clés :
• Boucles imbriquées : for i in range(n): for j in range(m): ; produit cartésien.

Distinctions clés :
• for i: for j (imbriqué) vs for i,j in product(range(2), range(3)) (itertools).

Fonctionnement :
• i=0 : j=0,1,2 → 0,1,2 ; i=1 : j=0,1,2 → 1,2,3.

Exécution étape par étape :
1. i=0, j=0 : 0+0=0 ; j=1 : 1 ; j=2 : 2.
2. i=1, j=0 : 1 ; j=1 : 2 ; j=2 : 3.
3. result = [0,1,2,1,2,3].

Ordre des opérations :
• Boucle externe ; pour chaque i, boucle interne complète.

Cas d'utilisation courants :
• Tables de multiplication, grilles 2D, parcours de matrices.

Cas limites :
• range(0) dans l'une des boucles → résultat vide.

Considérations de performance :
• O(n×m) ; attention aux grandes tailles.

Exemples :
• [[i+j for j in range(3)] for i in range(2)] → [[0,1,2],[1,2,3]]
• 2×3 = 6 append au total

Remarques :
• Boucles imbriquées = produit cartésien des ranges.`,

  1298: `12 fois : boucle externe 4× boucle interne 3 = 12.

Débutant :
• for i in range(4) : 4 tours ; pour chaque i, for j in range(3) : 3 tours.
• Total : 4 × 3 = 12 exécutions de print(i, j).
• La boucle interne s'exécute entièrement à chaque tour de l'externe.

Intermédiaire :
• Nombre total = produit des longueurs : len(range(4)) × len(range(3)) = 12.
• Pour n×m, complexité O(n×m).

Expert :
• Deux boucles imbriquées sur n éléments chacune → O(n²).

Concepts clés :
• Itérations imbriquées : total = produit des compteurs.

Distinctions clés :
• 4×3=12 vs 4+3=7 ; multiplication, pas addition.

Fonctionnement :
• 4 valeurs de i ; pour chacune, 3 valeurs de j ; 4×3=12.

Exécution étape par étape :
1. i=0 : print(0,0), (0,1), (0,2) — 3 fois.
2. i=1,2,3 : idem 3 fois chacun.
3. Total : 12 prints.

Ordre des opérations :
• Externe : 4 itérations ; interne : 3 par itération externe.

Cas d'utilisation courants :
• Parcours de tableaux 2D ; matrices n×m.

Cas limites :
• range(0) dans l'une → 0 exécutions.

Considérations de performance :
• O(n×m) ; éviter si n,m grands.

Exemples :
• 4×3=12 ; 10×10=100
• for i in range(2): for j in range(2): → 4 fois

Remarques :
• Toujours multiplier les compteurs pour le total.`,

  1299: `[[1, 2, 3], [2, 4, 6]] : compréhension imbriquée, table de multiplication.

Débutant :
• [[i*j for j in range(1,4)] for i in range(1,3)] : i=1,2 ; j=1,2,3.
• i=1 : [1*1, 1*2, 1*3] = [1,2,3] ; i=2 : [2*1, 2*2, 2*3] = [2,4,6].
• Résultat : liste de listes (matrice 2×3).

Intermédiaire :
• Compréhension imbriquée : externe construit les lignes, interne les colonnes.
• range(1,4) = 1,2,3 ; range(1,3) = 1,2.

Expert :
• Structure [[expr for j in ...] for i in ...] ; ordre de lecture = gauche à droite = imbrication.

Concepts clés :
• Compréhension imbriquée ; ligne i, colonne j ; i*j.

Distinctions clés :
• [[i*j for j in ...] for i in ...] vs [[i*j for i in ...] for j in ...] ; ordre des boucles.

Fonctionnement :
• Ligne 1 : [1,2,3] ; ligne 2 : [2,4,6].

Exécution étape par étape :
1. i=1 : j=1,2,3 → 1,2,3 ; ligne [1,2,3].
2. i=2 : j=1,2,3 → 2,4,6 ; ligne [2,4,6].
3. [[1,2,3], [2,4,6]].

Ordre des opérations :
• for i (externe) ; pour chaque i, for j (interne) ; collecte.

Cas d'utilisation courants :
• Tables de multiplication ; matrices ; grilles 2D.

Cas limites :
• range(1,1) → [] ; matrice vide.

Considérations de performance :
• O(n×m) ; allocation de n listes.

Exemples :
• [[i*j for j in range(1,4)] for i in range(1,3)] → [[1,2,3],[2,4,6]]
• [[i+j for j in range(2)] for i in range(2)] → [[0,1],[1,2]]

Remarques :
• Compréhension imbriquée = construction de matrices.`,

  1300: `"done" : le else de for s'exécute quand la boucle se termine sans break.

Débutant :
• for i in range(3): pass — la boucle fait 3 tours sans rien faire.
• else: print("done") — exécuté car aucun break n'a eu lieu.
• Le else est attaché au for, pas au if.

Intermédiaire :
• for-else : else exécuté si sortie « normale » (épuisement de l'itérable).
• Si break dans la boucle, le else est sauté.

Expert :
• Sémantique : else = « else no break » ; utile pour recherche (found vs not found).

Concepts clés :
• for-else ; else exécuté si pas de break.

Distinctions clés :
• for-else (sortie normale) vs break (else sauté).

Fonctionnement :
• Boucle complète 0, 1, 2 ; pas de break → else exécuté.

Exécution étape par étape :
1. for i in range(3) : i=0, 1, 2 ; pass à chaque fois.
2. Boucle terminée normalement.
3. else: print("done") → affiche "done".

Ordre des opérations :
• Boucle for ; si pas de break, bloc else.

Cas d'utilisation courants :
• Recherche : for x in items: if cond: break; else: print("not found").

Cas limites :
• for i in range(0): ... else: ... → else exécuté (zéro itération, pas de break).

Considérations de performance :
• Négligeable ; une évaluation de else.

Exemples :
• for i in range(3): pass
• else: print("done")  # affiche "done"
• for i in range(3): break
• else: print("no")  # n'affiche pas

Remarques :
• for-else = motif « pas trouvé » après recherche.`,
};
