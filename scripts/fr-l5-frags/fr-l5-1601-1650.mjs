/** Level 5 FR 1601–1650 — level5_intermediate_a.ts questions 1–50 (list comprehensions & tuples). */
export default {
  1601: `La bonne réponse est « [0, 1, 2, 3, 4] » : la compréhension [x for x in range(5)] parcourt range(5) et place chaque x tel quel dans une nouvelle liste.

Débutant :
• Syntaxe [expression for variable in itérable] : ici l’expression est simplement x.
• range(5) produit 0, 1, 2, 3, 4 (le stop est exclus).

Intermédiaire :
• On obtient une nouvelle liste ; l’itérable source n’est pas modifié.
• Équivalent lisible d’une boucle for qui append chaque valeur.

Expert :
• CPython optimise les compréhensions ; pour d’énormes flux, un générateur ou itertools peut éviter la liste entière en mémoire.

Concepts clés :
• Compréhension de liste ; range(n) ; indices implicites 0..n-1.

Distinctions clés :
• Copier/collector des valeurs ≠ filtrer (pas de if ici) ≠ transformer (autre expression que x).

Fonctionnement :
• Pour chaque élément produit par range(5), évaluer x et l’ajouter au résultat.

Exécution étape par étape :
1. range(5) émet 0 → liste reçoit 0.
2. Puis 1, 2, 3, 4 de la même façon → [0, 1, 2, 3, 4].

Ordre des opérations :
• range(5) est évalué comme itérable ; la compréhension consomme ses valeurs dans l’ordre.

Cas d'utilisation courants :
• Matérialiser une suite en liste ; base avant filtres ou transformations.

Cas limites :
• range(0) → [] ; ce pattern ne lève pas d’exception sur itérable vide.

Considérations de performance :
• Coût mémoire O(n) pour la liste finale ; n = 5 ici.

Exemples :
• [x for x in range(3)] → [0, 1, 2].

Remarques :
• range(5) n’inclut jamais 5 ; confondre stop inclus/exclus est une erreur fréquente.`,

  1602: `La bonne réponse est « [0, 1, 4, 9, 16] » : chaque x issu de range(5) est remplacé par x**2 dans la liste résultante.

Débutant :
• ** est l’exposant ; 0²=0, 1²=1, 2²=4, 3²=9, 4²=16.

Intermédiaire :
• L’expression avant for peut être arbitraire tant qu’elle est valide pour chaque x.
• Proche de map(lambda x: x**2, range(5)) matérialisé en liste.

Expert :
• Attention aux grands exposants ou flottants : précision et coût différents des entiers petits.

Concepts clés :
• Transformation dans une compréhension ; puissance ** sur entiers.

Distinctions clés :
• [x**2 ...] élève au carré ; [x*2 ...] doublerait chaque valeur.

Fonctionnement :
• Pour chaque x, calculer x**2 puis append logique au résultat.

Exécution étape par étape :
1. x=0 → 0 ; x=1 → 1 ; x=2 → 4 ; x=3 → 9 ; x=4 → 16.

Ordre des opérations :
• ** lié à x s’évalue pour chaque itération avant passage au suivant.

Cas d'utilisation courants :
• Séries numériques, quadratiques, préparation de données.

Cas limites :
• x négatif : carré positif ; pas le cas ici avec range(5).

Considérations de performance :
• n petites opérations entières ; négligeable pour n=5.

Exemples :
• [x**3 for x in range(3)] → [0, 1, 8].

Remarques :
• Pour la racine ou log, gardez les types cohérents (int vs float).`,

  1603: `La bonne réponse est « [0, 2, 4, 6, 8] » : le if x % 2 == 0 ne garde que les entiers pairs de 0 à 9.

Débutant :
• % est le reste de la division ; pair ⇔ reste 0 quand on divise par 2.
• range(10) va de 0 à 9 inclus pour le dernier.

Intermédiaire :
• Clause if en fin de compréhension = filtre, pas expression ternaire au début.
• Les valeurs impaires sont entièrement ignorées (pas de None).

Expert :
• Pour de gros volumes, si le test est coûteux, parfois un itérateur ou une vue évite la liste complète.

Concepts clés :
• Compréhension filtrée ; modulo ; parité.

Distinctions clés :
• Filtrer les pairs ≠ construire range(0,10,2) directement (même résultat ici, autre outil).

Fonctionnement :
• N’ajouter x que lorsque x % 2 == 0 est vrai.

Exécution étape par étape :
1. 0 → pair ; 1 → impaire (sautée) ; … jusqu’à 9 ; paires : 0,2,4,6,8.

Ordre des opérations :
• Pour chaque x, évaluer la condition avant d’inclure x.

Cas d'utilisation courants :
• Nettoyage de données, sélection d’indices pairs, préparation de signaux discrets.

Cas limites :
• range(0) → [] ; aucune exception si rien ne passe le filtre.

Considérations de performance :
• Un seul parcours ; coût linéaire en la taille de range(10).

Exemples :
• [x for x in range(6) if x % 2 == 1] → [1, 3, 5].

Remarques :
• x % 2 == 0 est la forme idiomatique ; bool(x % 2) testerait « non nul », pas la parité stricte.`,

  1604: `La bonne réponse est « [1, 9, 25] » : on ne garde que les x impairs de range(6), puis on les élève au carré.

Débutant :
• Impair : x % 2 != 0 (ou == 1 pour les entiers positifs ici).
• Après filtre, les x restants sont 1, 3, 5.

Intermédiaire :
• Ordre Python : d’abord le for produit x, puis le if décide, puis x**2 est l’expression produite.
• Donc on ne calcule le carré que pour les candidats acceptés.

Expert :
• Chaîner filtre + map en une ligne améliore la lisibilité mais peut masquer des coûts si l’expression est lourde.

Concepts clés :
• Filtre + transformation dans une même compréhension ; range(6) → 0..5.

Distinctions clés :
• Sans le if, [x**2 for x in range(6)] inclurait 0, 4, 16.

Fonctionnement :
• Pour chaque x dans 0..5, si impair, pousser x**2.

Exécution étape par étape :
1. 0 pair → ignoré ; 1 impair → 1 ; 3 → 9 ; 5 → 25.

Ordre des opérations :
• Test de parité avant évaluation de x**2 pour cet x.

Cas d'utilisation courants :
• Signaux impairs, échantillonnage alterné, pipelines de données.

Cas limites :
• Si aucun impair dans l’intervalle, liste vide (ex. range(1) après filtre impair).

Considérations de performance :
• Même O(n) que une compréhension sans filtre sur la longueur parcourue.

Exemples :
• [x**2 for x in range(10) if x % 2 == 0][:3] → [0, 4, 16] (autre pattern).

Remarques :
• Reliez mentalement « filtre d’abord » pour éviter de mettre le if au mauvais endroit.`,

  1605: `La bonne réponse est « ["HELLO", "WORLD"] » : str.upper() renvoie une nouvelle chaîne en majuscules pour chaque élément de la liste source.

Débutant :
• Les chaînes sont immuables : upper() ne modifie pas "hello" sur place.
• La liste d’entrée ["hello", "world"] reste inchangée.

Intermédiaire :
• L’expression de compréhension peut être un appel de méthode sur la variable de boucle.
• upper() est défini sur str ; une valeur non-str provoquerait une erreur.

Expert :
• Normalisation Unicode : upper() suit les règles Unicode ; cas spéciaux (ex. certaines lettres locales) peuvent surprendre.

Concepts clés :
• Compréhension sur listes de str ; méthode upper.

Distinctions clés :
• upper() ≠ capitalize() ≠ title() ; ici tout le mot passe en capitales.

Fonctionnement :
• Pour chaque x str, produire x.upper() dans la nouvelle liste.

Exécution étape par étape :
1. "hello".upper() → "HELLO" ; "world".upper() → "WORLD".

Ordre des opérations :
• Ordre des éléments de la liste source conservé.

Cas d'utilisation courants :
• Normalisation pour comparaisons insensibles à la casse, clés temporaires.

Cas limites :
• "" → "" ; pas d’erreur sur chaîne vide.

Considérations de performance :
• Crée une nouvelle str par élément ; acceptable pour petites listes.

Exemples :
• [x.lower() for x in ["A", "B"]] → ["a", "b"].

Remarques :
• Pour une seule chaîne, "hello".upper() suffit ; la compréhension scale à N chaînes.`,

  1606: `La bonne réponse est « [2, 5, 3] » : len(w) mesure le nombre de caractères (Unicode code points) de chaque chaîne.

Débutant :
• "hi" → 2 caractères ; "hello" → 5 ; "hey" → 3.

Intermédiaire :
• len fonctionne sur tout objet à taille définie (séquence, collection).
• La compréhension préserve l’ordre des longueurs selon l’ordre des mots.

Expert :
• Graphemes vs code points : len compte les code points, pas toujours les « lettres visuelles ».

Concepts clés :
• len sur str ; compréhension avec fonction built-in.

Distinctions clés :
• len("hey") ≠ len(["h","e","y"]) en contexte liste (ici ce sont des str atomiques).

Fonctionnement :
• Pour chaque w, évaluer len(w) et collecter l’entier.

Exécution étape par étape :
1. len("hi")=2, len("hello")=5, len("hey")=3 → [2,5,3].

Ordre des opérations :
• len appelé une fois par mot, de gauche à droite.

Cas d'utilisation courants :
• Features pour ML/NLP simple, validation de longueurs, histogrammes.

Cas limites :
• Chaîne vide → 0 dans la liste si "" était dans la source.

Considérations de performance :
• len(str) est O(1) en CPython (taille stockée), donc très bon ici.

Exemples :
• [len(w) for w in ["a", "ab"]] → [1, 2].

Remarques :
• Ne confondez pas len avec la mémoire en octets (encode pour bytes).`,

  1607: `La bonne réponse est « [0, 15] » : i doit être multiple de 3 et de 5 sur 0..19, donc multiple de 15 ; 0 et 15 seulement.

Débutant :
• and exige les deux conditions vraies en même temps.
• 0 est divisible par tout entier non nul en Python (0 % k == 0).

Intermédiaire :
• i % 3 == 0 and i % 5 == 0 ⇔ i % 15 == 0 pour des entiers (arithmétique modulaire).
• 30 serait exclu car hors range(20).

Expert :
• Généralisation : PPCM des moduli pour fusionner des tests de divisibilité.

Concepts clés :
• Filtre composé ; divisibilité ; range borné.

Distinctions clés :
• or aurait élargi le filtre ; ici c’est l’intersection des multiples.

Fonctionnement :
• Parcourir i ; n’inclure que si les deux restes sont nuls.

Exécution étape par étape :
1. Tester 0 → ok ; 15 → ok ; 30 absent ; autres multiples de 15 absents dans 0..19.

Ordre des opérations :
• Les deux % sont évalués pour chaque i avant and.

Cas d'utilisation courants :
• FizzBuzz, fenêtres de planification, rythmes cycliques.

Cas limites :
• Si la plage ne contient aucun multiple, résultat [].

Considérations de performance :
• Test constant par élément ; n=20 trivial.

Exemples :
• [i for i in range(50) if i % 6 == 0 and i % 10 == 0][:3] → [0, 30] (PPCM 30).

Remarques :
• Notez que 0 est souvent oublié dans les raisonnements « multiples de 15 ».`,

  1608: `La bonne réponse est « [[0, 1, 2], [0, 1, 2]] » : la compréhension externe itère deux fois (i in range(2)) ; à chaque fois la liste interne [j for j in range(3)] vaut [0,1,2].

Débutant :
• Liste de listes : deux éléments, chacun est une liste de trois entiers.
• i n’apparaît pas dans l’expression interne : il ne sert qu’à répéter.

Intermédiaire :
• Chaque évaluation interne crée une nouvelle liste (deux objets distincts en mémoire).
• Ce n’est pas un produit cartésien aplati : voir question 1609 pour la différence.

Expert :
• Piège classique : [[0]*3]*2 partage des sous-listes ; ici chaque [0,1,2] est indépendant.

Concepts clés :
• Compréhension imbriquée ; matrice 2×3 logique.

Distinctions clés :
• Deux listes identiques en valeur ≠ même objet (is différent en général).

Fonctionnement :
• Pour chaque i, construire une liste interne par compréhension sur j.

Exécution étape par étape :
1. i=0 → [0,1,2] ; i=1 → [0,1,2] → résultat [[0,1,2],[0,1,2]].

Ordre des opérations :
• L’interne est entièrement évaluée pour chaque itération externe.

Cas d'utilisation courants :
• Grilles initiales, tableaux, jeux, DP basique.

Cas limites :
• range(2) ou range(3) à 0 → sous-listes ou conteneur vide possibles.

Considérations de performance :
• Coût proportionnel au produit des tailles des boucles.

Exemples :
• [[0 for _ in range(3)] for _ in range(2)] → [[0,0,0],[0,0,0]].

Remarques :
• Si vous avez besoin de i dans l’interne, utilisez i dans l’expression interne explicitement.`,

  1609: `La bonne réponse est « [10, 20, 20, 40] » : deux clauses for imbriquent les boucles gauche→droite : pour chaque x de [1,2], on parcourt tout y de [10,20].

Débutant :
• Ordre : (1,10), (1,20), (2,10), (2,20) → produits 10, 20, 20, 40.

Intermédiaire :
• Une seule liste plate : pas de sous-listes par x.
• Équivalent à double boucle for avec append.

Expert :
• itertools.product([1,2],[10,20]) donne les mêmes paires en itérateur.

Concepts clés :
• Multiplication de listes en compréhension ; produit cartésien aplati.

Distinctions clés :
• Diffère de [[x*y for y in ...] for x in ...] qui ferait une liste de listes.

Fonctionnement :
• Fixer x, balayer tous les y, puis x suivant.

Exécution étape par étape :
1. x=1,y=10→10 ; y=20→20 ; x=2,y=10→20 ; y=20→40.

Ordre des opérations :
• x est choisi sur la lente externe, y sur la rapide interne (comme for classiques).

Cas d'utilisation courants :
• Combinaisons, tables de multiplication, jointures naïves.

Cas limites :
• Liste vide sur un des itérables → résultat [] immédiat.

Considérations de performance :
• Taille len(A)*len(B) ; attention à l’explosion combinatoire.

Exemples :
• [a+b for a in [0,1] for b in [0,10]] → [0,10,1,11] si entiers (ici + addition).

Remarques :
• Lire les for de gauche à droite comme des boucles emboîtées du haut vers le bas.`,

  1610: `La bonne réponse est « [(0, 0), (0, 1), (1, 0), (1, 1)] » : chaque combinaison (x,y) avec x,y ∈ {0,1} devient un tuple dans une liste plate.

Débutant :
• (x, y) avec parenthèses crée un tuple à deux éléments.
• Même ordre de boucles que 1609 : x externe, y interne.

Intermédiaire :
• Liste de tuples, pas ensemble : doublons possibles si la logique change ; ici pas de doublons.
• zip n’est pas utilisé : on construit les paires par boucles croisées.

Expert :
• Generalisation en dimensions d : nested fors ou product répété.

Concepts clés :
• Tuples en compréhension ; grille 2×2 ; produit cartésien.

Distinctions clés :
• [(x,y) ...] liste de tuples ≠ {(x,y)} ensemble (hashable/requis set).

Fonctionnement :
• Pour chaque x dans {0,1}, pour chaque y dans {0,1}, ajouter (x,y).

Exécution étape par étape :
1. (0,0),(0,1) puis (1,0),(1,1).

Ordre des opérations :
• Évaluation des tuples dans l’ordre des boucles imbriquées.

Cas d'utilisation courants :
• Coordonnées discrètes, cases d’échiquier, produits finis.

Cas limites :
• range(0) sur une dimension → liste vide.

Considérations de performance :
• Quatre éléments ici ; croissance |X|·|Y|.

Exemples :
• [(i, j) for i in range(2) for j in range(3)][0] → (0,0).

Remarques :
• Si vous avez besoin de listes internes au lieu de tuples, utilisez [x, y] dans l’expression.`,

  1611: `La bonne réponse est « ["h", "l", "l"] » : on itère caractère par caractère sur "hello" et on conserve ceux qui ne sont pas des voyelles a,e,i,o,u.

Débutant :
• Une chaîne est itérable : chaque c est une str d’un caractère.
• not in teste l’appartenance à la chaîne "aeiou".

Intermédiaire :
• Résultat : liste de caractères, pas une chaîne unique ; pour regrouper, utilisez "".join(...).
• c in "aeiou" serait le complément (voyelles seulement).

Expert :
• Complexité linéaire en longueur × coût du test ; "aeiou" petit donc négligeable.

Concepts clés :
• Compréhension sur str ; filtrage par appartenance ; consonnes ici.

Distinctions clés :
• list("hello") duplique tout ; le if retire e et o ici.

Fonctionnement :
• Pour chaque c, si c absent de "aeiou", ajouter c.

Exécution étape par étape :
1. h gardé ; e filtré ; l,l gardés ; o filtré.

Ordre des opérations :
• Ordre des caractères de la str source conservé.

Cas d'utilisation courants :
• Tokenisation naïve, suppression de classes de caractères, jeux sur mots.

Cas limites :
• Accents : "é" n’est pas dans "aeiou" ASCII ; i18n demande autre jeu de voyelles.

Considérations de performance :
• Parcours unique de la chaîne.

Exemples :
• [c for c in "test" if c not in "aeiou"] → ["t", "s", "t"].

Remarques :
• Pour insensibilité à la casse, normalisez d’abord avec casefold() ou lower().`,

  1612: `La bonne réponse est « {0: 0, 1: 1, 2: 4, 3: 9} » : accolades avec clé: valeur avant for définissent une compréhension de dictionnaire.

Débutant :
• Chaque x devient une clé ; la valeur est x**2.
• Les clés 0..3 sont uniques → pas de collision.

Intermédiaire :
• Sans deux-points dans { ... for }, ce serait un ensemble (set), pas un dict.
• L’ordre d’insertion est conservé en Python 3.7+ (comme un dict littéral).

Expert :
• Clés doivent être hashables ; entiers ok ; listes comme clés casseraient.

Concepts clés :
• Dict comprehension ; mapping valeur → carré ; range(4).

Distinctions clés :
• {x**2 for x in range(4)} serait un set de carrés, pas des paires clé-valeur.

Fonctionnement :
• Pour chaque x, insérer la paire x: x**2.

Exécution étape par étape :
1. x=0→0:0 ; 1→1:1 ; 2→2:4 ; 3→3:9.

Ordre des opérations :
• Clés évaluées avant valeurs pour chaque itération (valeur peut dépendre de x).

Cas d'utilisation courants :
• Tables de lookup, index inversés simples, caches dérivés.

Cas limites :
• Clés dupliquées écrasent les précédentes (pas le cas ici).

Considérations de performance :
• O(n) insertions ; n petit.

Exemples :
• {k: k+1 for k in range(2)} → {0:1, 1:2}.

Remarques :
• Pour inverser un dict, attention aux valeurs non uniques (perte d’information).`,

  1613: `La bonne réponse est « {0, 1, 2} » : compréhension d’ensemble {expr for ...} sans deux-points ; les restes modulo 3 pour 0..9 alternent mais l’ensemble déduplique.

Débutant :
• Set = valeurs uniques ; pas d’ordre garanti d’affichage (mais le contenu est {0,1,2}).
• x % 3 donne seulement 0, 1 ou 2 pour tout entier.

Intermédiaire :
• Ne pas confondre avec liste [x%3 ...] qui garderait 10 éléments avec répétitions.
• dict aurait exigé une syntaxe clé: valeur.

Expert :
• Égalité des éléments suit == ; pour objets custom, dépend de __hash__/__eq__.

Concepts clés :
• Set comprehension ; modulo ; unicité.

Distinctions clés :
• Ensemble des restes ≠ liste des restes dans l’ordre du range.

Fonctionnement :
• Calculer x%3 pour x de 0 à 9 ; insérer dans un set (ignore doublons).

Exécution étape par étape :
1. Suite des restes 0,1,2,0,1,... → set final {0,1,2}.

Ordre des opérations :
• Itération linéaire sur range(10).

Cas d'utilisation courants :
• Tags distincts, langues vues, ids uniques dérivés.

Cas limites :
• range(0) → set() vide.

Considérations de performance :
• set grandit avec cardinalité des valeurs distinctes, pas avec n seul.

Exemples :
• {x % 2 for x in range(5)} → {0, 1}.

Remarques :
• Ne vous fiez pas à l’ordre d’impression des sets pour des tests.`,

  1614: `La bonne réponse est « [1, 2, 3] » : expression ternaire x if x > 0 else -x dans la partie « map » de la compréhension — chaque entrée produit une valeur (pas de filtre final).

Débutant :
• Si x positif, garder x ; sinon utiliser -x (valeur absolue pour ces entiers).
• -1 → 1 ; 2 → 2 ; -3 → 3.

Intermédiaire :
• Diffère de if en fin de compréhension qui supprime des éléments.
• Ici len(result) == len(source).

Expert :
• abs(x) serait plus clair en production pour ce cas précis.

Concepts clés :
• if/else dans l’expression ; valeur absolue via signe.

Distinctions clés :
• [x for x in lst if x>0] réduirait la longueur ; ici non.

Fonctionnement :
• Pour chaque x, évaluer la condition x>0 et choisir la branche.

Exécution étape par étape :
1. -1 faux → -(-1)=1 ; 2 vrai → 2 ; -3 faux → 3.

Ordre des opérations :
• La ternaire est évaluée par élément, avant ajout à la liste.

Cas d'utilisation courants :
• Clamping simple, signes, remapping conditionnel dense.

Cas limites :
• x==0 : 0 > 0 faux → -0 = 0 ; cohérent avec abs.

Considérations de performance :
• Identique à une boucle for avec append.

Exemples :
• [("pos" if x>0 else "neg") for x in [-1,1]] → ["neg","pos"].

Remarques :
• Syntaxe val : si cond autre_val est réservée à if/else, pas à la ternaire Python.`,

  1615: `La bonne réponse est « [1, 4] » : enumerate("hello") fournit (index, caractère) ; on collecte l’indice i lorsque c est une voyelle.

Débutant :
• Positions : h=0, e=1, l=2, l=3, o=4 → voyelles aux indices 1 et 4.

Intermédiaire :
• Déballage i, c dans le for ; l’expression de sortie est i (pas c).
• if c in "aeiou" porte sur le caractère.

Expert :
• enumerate(..., start=k) décalerait tous les indices retournés.

Concepts clés :
• enumerate ; unpacking ; filtre sur caractère, sortie position.

Distinctions clés :
• [c for ... if c in vowels] donnerait ["e","o"], pas les indices.

Fonctionnement :
• Avancer dans la chaîne avec compteur ; si voyelle, pousser l’index courant.

Exécution étape par étape :
1. (0,h) rejeté ; (1,e) ok ; (2,l),(3,l) rejetés ; (4,o) ok.

Ordre des opérations :
• enumerate produit les paires dans l’ordre de la str.

Cas d'utilisation courants :
• Repérer positions de marqueurs, parsing, alignements.

Cas limites :
• Chaîne vide → aucune itération → [].

Considérations de performance :
• Un seul passage O(n) sur la longueur.

Exemples :
• [i for i,ch in enumerate("aba") if ch=="a"] → [0,2].

Remarques :
• Pour positions de sous-chaînes, str.find ou regex sont autres outils.`,

  1616: `La bonne réponse est « 14 » : sum reçoit une expression génératrice (parenthèses implicites autour de x**2 for x in range(4)) et accumule 0+1+4+9.

Débutant :
• Carrés : 0,1,4,9 ; somme 14.

Intermédiaire :
• Pas de crochets : pas de liste intermédiaire, itération paresseuse jusqu’à épuisement.
• sum sur générateur vide vaut 0.

Expert :
• math.fsum sur flottants pour meilleure stabilité ; ici entiers exacts.

Concepts clés :
• Générateur dans appel de fonction ; agrégation sum ; range(4).

Distinctions clés :
• sum([x**2 for x in range(4)]) même résultat mais alloue la liste.

Fonctionnement :
• sum demande au générateur chaque x**2 et additionne.

Exécution étape par étape :
1. Itérer 0..3, accumuler 0,1,4,9 → total 14.

Ordre des opérations :
• L’argument de sum est un générateur ; son corps s’exécute à la demande.

Cas d'utilisation courants :
• Statistiques streaming, éviter gros tableaux temporaires.

Cas limites :
• start de sum permet valeur initiale (défaut 0).

Considérations de performance :
• Mémoire O(1) côté générateur ; temps O(n).

Exemples :
• sum(x for x in range(5)) → 10.

Remarques :
• Deuxième argument start : sum((1,2), 10) → 13 (autre usage de sum).`,

  1617: `La bonne réponse est « [4, 5] » : filter garde les éléments où lambda x: x > 3 est vrai ; list matérialise l’itérateur.

Débutant :
• 1,2,3 exclus ; 4 et 5 inclus.

Intermédiaire :
• filter renvoie un objet filter (itérateur) ; sans list(), on ne voit pas la liste.
• Équivalent : [x for x in lst if x>3].

Expert :
• Sur Python 3, filter(None, it) retire les valeurs « fausses » (falsy).

Concepts clés :
• filter ; lambda ; matérialisation list().

Distinctions clés :
• map transforme ; filter sélectionne ; zip appaire.

Fonctionnement :
• Pour chaque élément, appeler la fonction ; si truthy du résultat, produire l’élément.

Exécution étape par étape :
1. Tester >3 pour 1..5 ; garder 4,5 dans l’ordre.

Ordre des opérations :
• Ordre source préservé par filter.

Cas d'utilisation courants :
• Style fonctionnel, pipelines lisibles avec list(map(...)) etc.

Cas limites :
• Fonction renvoyant non-bool : truthiness utilisée.

Considérations de performance :
• Linéaire ; un passage.

Exemples :
• list(filter(lambda n: n%2==0, range(5))) → [0,2,4].

Remarques :
• Préférez souvent une compréhension pour la lisibilité en Python moderne.`,

  1618: `La bonne réponse est « [2, 4, 6] » : map applique lambda x: x*2 à chaque élément de [1,2,3] ; list consomme l’itérateur.

Débutant :
• Doublement : 2,4,6.

Intermédiaire :
• map retourne un map object ; conversion list nécessaire pour afficher une liste concrète.
• Équivalent : [x*2 for x in [1,2,3]].

Expert :
• map peut prendre plusieurs itérables : fonction n-aire.

Concepts clés :
• map ; lambda ; transformation uniforme.

Distinctions clés :
• map change les valeurs ; filter les choisit ; pas de zip ici.

Fonctionnement :
• Appliquer la fonction à chaque élément en séquence.

Exécution étape par étape :
1. 1→2, 2→4, 3→6.

Ordre des opérations :
• Évaluation paresseuse jusqu’à list().

Cas d'utilisation courants :
• Vectorisation légère, conversion de colonnes.

Cas limites :
• Itérable vide → [].

Considérations de performance :
• map en CPython est efficace ; lisibilité parfois moindre vs compréhension.

Exemples :
• list(map(len, ["a","ab"])) → [1,2].

Remarques :
• Pour built-in sans lambda : list(map(str, ...)) est idiomatique.`,

  1619: `La bonne réponse est « ["1", "2", "3"] » : map(str, ...) applique la classe/fonction str à chaque int, produisant des chaînes.

Débutant :
• str(1)=="1", etc.

Intermédiaire :
• Pas besoin de lambda : str est déjà callable.
• Types homogènes sortants : tous str.

Expert :
• str respecte __str__ pour objets custom ; ici int standard.

Concepts clés :
• map avec built-in ; conversion de type en masse.

Distinctions clés :
• Repr vs str : map(str,...) utilise str, pas repr (souvent identique pour int).

Fonctionnement :
• Pour chaque entier, construire sa représentation décimale usuelle en str.

Exécution étape par étape :
1. "1","2","3" dans l’ordre.

Ordre des opérations :
• list() force la consommation complète du map.

Cas d'utilisation courants :
• Avant "".join sur nombres, sérialisation simple, affichage.

Cas limites :
• Non-numériques dans la source feraient échouer str? str fonctionne sur beaucoup de types.

Considérations de performance :
• Linéaire ; alloue n chaînes.

Exemples :
• list(map(int, ["10","20"])) → [10,20].

Remarques :
• Pour bases autres que 10, int(x, base) au lieu de map(int,...).`,

  1620: `La bonne réponse est « [(1, "a"), (2, "b"), (3, "c")] » : zip aligne les i-èmes éléments ; chaque paire devient un tuple.

Débutant :
• Même longueur ici → trois paires, pas de troncature.

Intermédiaire :
• zip renvoie un itérateur ; list() matérialise.
• Si une liste était plus courte, zip s’arrêterait à la plus courte.

Expert :
• itertools.zip_longest pour remplir les manques avec sentinelle.

Concepts clés :
• zip ; tuples ; parallélisme de listes.

Distinctions clés :
• zip ≠ produit cartésien ; voir questions 1609–1610.

Fonctionnement :
• Avancer deux curseurs en parallèle ; yield (x,y) à chaque pas.

Exécution étape par étape :
1. (1,a),(2,b),(3,c).

Ordre des opérations :
• zip consomme les deux itérables en lockstep.

Cas d'utilisation courants :
• Fusion clés/valeurs parallèles, boucles doubles compactes.

Cas limites :
• zip([], [1]) → [].

Considérations de performance :
• Lazy jusqu’à list() ; mémoire proportionnelle au nombre de paires matérialisées.

Exemples :
• list(zip([1,2],[3])) → [(1,3)].

Remarques :
• dict(zip(keys, values)) est un idiome fréquent pour construire un dict.`,

  1621: `La bonne réponse est « {"a": 1, "b": 2} » : zip associe "a"→1 et "b"→2 ; dict construit le mapping à partir des paires.

Débutant :
• dict attend un itérable de paires (clé, valeur).
• zip produit ("a",1), ("b",2).

Intermédiaire :
• Clés doivent être hashables : str ok.
• Ordre d’insertion suit zip (Python 3.7+).

Expert :
• Si listes de longueurs différentes, zip tronque ; dict ignorera les paires manquantes au-delà.

Concepts clés :
• dict(zip(...)) ; parallèle clés/valeurs ; construction idiomatique.

Distinctions clés :
• dict([["a",1]]) invalide sans conversion en tuple de paires ; zip fournit des tuples.

Fonctionnement :
• Matérialiser les paires puis les insérer dans le hash map.

Exécution étape par étape :
1. zip → deux tuples ; dict les ingère → {"a":1,"b":2}.

Ordre des opérations :
• zip évalué comme argument de dict(...) avant construction.

Cas d'utilisation courants :
• Colonnes CSV → dict, config, mapping rapide.

Cas limites :
• Clés dupliquées dans le zip des clés : dernière gagne.

Considérations de performance :
• Linéaire en nombre de paires.

Exemples :
• dict(zip("ab", range(2))) → {"a":0,"b":1}.

Remarques :
• fromkeys est autre outil quand toutes les valeurs sont identiques.`,

  1622: `La bonne réponse est « [(0, "a"), (1, "b"), (2, "c")] » : enumerate ajoute un compteur commençant à 0 à chaque caractère de "abc".

Débutant :
• enumerate → paires (index, valeur).
• list matérialise l’itérateur.

Intermédiaire :
• Par défaut start=0 ; voir 1623 pour start custom.
• Fonctionne sur toute séquence itérable.

Expert :
• enumerate est optimisé en C ; préférable à range(len(s)) manuel.

Concepts clés :
• enumerate ; str iterable ; list d’tuple.

Distinctions clés :
• list("abc") donnerait les caractères seuls sans indices.

Fonctionnement :
• Avancer dans "abc" avec compteur croissant, produire tuple à chaque pas.

Exécution étape par étape :
1. (0,a),(1,b),(2,c).

Ordre des opérations :
• Ordre des caractères respecté.

Cas d'utilisation courants :
• Boucles avec index, journalisation de lignes, UI numérotée.

Cas limites :
• str vide → [].

Considérations de performance :
• O(n) temps et mémoire pour la liste matérialisée.

Exemples :
• list(enumerate([10,20])) → [(0,10),(1,20)].

Remarques :
• start peut être négatif ou grand ; sert à l’affichage plus qu’à la logique interne.`,

  1623: `La bonne réponse est « [(1, "a"), (2, "b"), (3, "c")] » : start=1 décale le compteur : premier élément reçoit l’indice 1.

Débutant :
• Même chaîne "abc" ; seuls les premiers membres des tuples changent vs enumerate par défaut.

Intermédiaire :
• start n’affecte pas les caractères, uniquement l’entier de position rapporté.
• Utile pour affichage humain 1-based.

Expert :
• Pour fichiers, combinez avec line numbering et gardez cohérence avec slices 0-based ailleurs.

Concepts clés :
• Paramètre start de enumerate ; décalage d’indice.

Distinctions clés :
• Ne confondez pas indice affiché et indice pour indexer la str (toujours 0-based sur s[i]).

Fonctionnement :
• Initialiser compteur à 1 puis incrémenter à chaque yield.

Exécution étape par étape :
1. (1,a),(2,b),(3,c).

Ordre des opérations :
• Arguments nommés : start=1 après l’itérable.

Cas d'utilisation courants :
• Numéros de ligne UI, rapports, logs « Ligne k ».

Cas limites :
• start élevé : indices grands mais valides.

Considérations de performance :
• Identique à enumerate standard.

Exemples :
• list(enumerate("x", start=10)) → [(10,"x")].

Remarques :
• Si vous réindexez pour accéder à la liste originale, soustrayez start.`,

  1624: `La bonne réponse est « [1, 3] » : sur les paires clé/valeur du dict littéral, on exclut k=="b" et on collecte seulement v.

Débutant :
• items() donne ("a",1),("b",2),("c",3) (ordre d’insertion du littéral).
• On garde 1 et 3.

Intermédiaire :
• Le filtre porte sur k ; l’expression est v.
• k, v unpacking dans le for.

Expert :
• Sur gros dicts, évitez recréer le dict littéral à chaque fois en code réel ; gardez une variable.

Concepts clés :
• dict.items ; compréhension avec tuple unpacking ; filtre sur clé.

Distinctions clés :
• [k for ... if ...] donnerait les clés, pas les valeurs.

Fonctionnement :
• Itérer paires ; si clé différente de "b", append v.

Exécution étape par étape :
1. a→1 ok ; b→2 skip ; c→3 ok → [1,3].

Ordre des opérations :
• Ordre de parcours = ordre d’itération du dict (insertion 3.7+).

Cas d'utilisation courants :
• Projection de valeurs, masquage de champs sensibles.

Cas limites :
• Clé manquante : ici littéral fixe, pas d’KeyError dans ce pattern.

Considérations de performance :
• O(n) sur nombre d’items.

Exemples :
• [k for k,v in {"x":1,"y":2}.items() if v>1] → ["y"].

Remarques :
• dict comprehension peut parfois remplacer boucle + filtre plus clairement.`,

  1625: `La bonne réponse est « "0 1 2 3 4" » : la compréhension fabrique des str ; " ".join les concatène avec des espaces entre.

Débutant :
• join exige un itérable de str ; d’où str(x) pour chaque entier.

Intermédiaire :
• join est une méthode du séparateur, pas une fonction globale.
• Pas de virgule : séparateur espace simple.

Expert :
• Performance : join sur liste est idiomatique ; éviter + répété en boucle.

Concepts clés :
• str.join ; compréhension interne ; range(5).

Distinctions clés :
• "".join(...) collerait sans séparateur ; ",".join ajouterait virgules.

Fonctionnement :
• Construire la liste de chaînes puis join avec " ".

Exécution étape par étape :
1. ["0","1","2","3","4"] → join → une seule str.

Ordre des opérations :
• Compréhension entière avant join (argument évalué).

Cas d'utilisation courants :
• Rendu texte, logs, sorties utilisateur.

Cas limites :
• Si un élément n’est pas str sans conversion → TypeError.

Considérations de performance :
• join linéaire en total des longueurs ; meilleur que concaténations répétées.

Exemples :
• "-".join(str(i) for i in range(3)) → "0-1-2".

Remarques :
• join n’ajoute pas d’espace de fin ; propre pour CSV manuel avec sep choisi.`,

  1626: `La bonne réponse est « <class 'tuple'> » : la littérale avec parenthèses et virgules (1, 2, 3) construit un tuple ; type() renvoie sa classe.

Débutant :
• tuple ≠ list (crochets) ni set (accolades seules sans :).

Intermédiaire :
• type renvoie l’objet type ; repr affiché comme <class 'tuple'>.

Expert :
• isinstance((1,2,3), tuple) teste plus souvent l’API en code robuste.

Concepts clés :
• Littéral tuple ; type() ; immutabilité (conceptuelle ici).

Distinctions clés :
• type((1,2,3)) tuple ; type([1,2,3]) list.

Fonctionnement :
• Créer le tuple puis interroger sa classe.

Exécution étape par étape :
1. Tuple construit ; type retourne la méta-classe tuple.

Ordre des opérations :
• L’argument de type est évalué avant l’appel.

Cas d'utilisation courants :
• REPL, introspection, validation de données.

Cas limites :
• tuple vide () est aussi un tuple.

Considérations de performance :
• Négligeable.

Exemples :
• type((1,)) → <class 'tuple'>.

Remarques :
• Ne confondez pas type et __class__ (souvent égaux pour instances normales).`,

  1627: `La bonne réponse est « Oui, la virgule finale en fait un tuple » : (1,) contient un seul élément ; la virgule est le signal syntaxique, pas les parenthèses seules.

Débutant :
• Sans virgule, (1) est juste l’entier 1 groupé.

Intermédiaire :
• Les parenthèses sont souvent optionnelles : 1, crée aussi un tuple d’un élément.

Expert :
• Trailing comma dans les littéraux multi-lignes évite erreurs de fusion de lignes.

Concepts clés :
• Tuple à un élément ; virgule obligatoire ; syntaxe Python.

Distinctions clés :
• (1,) tuple ; (1) int ; distinction critique pour les débutants.

Fonctionnement :
• Le parseur voit la virgule et construit un tuple singleton.

Exécution étape par étape :
1. Littérale analysée comme tuple d’arité 1.

Ordre des opérations :
• N/A expression atomique.

Cas d'utilisation courants :
• Singletons dans structures de données, retours de fonctions uniques.

Cas limites :
• (()) imbriqué : tuple contenant tuple vide possible.

Considérations de performance :
• Tuple petit et immuable, très léger.

Exemples :
• len((1,)) → 1.

Remarques :
• Dans les print ou return, pensez à la virgule pour ne pas « déballer » par erreur.`,

  1628: `La bonne réponse est « Non, c’est simplement l’entier 1 avec des parenthèses de regroupement » : pas de virgule ⇒ pas de tuple.

Débutant :
• (1) == 1 est True.

Intermédiaire :
• Les parenthèses servent aussi en arithmétique ; ici simple groupement d’une valeur.

Expert :
• AST : pas de nœud tuple sans trailing comma ou éléments multiples.

Concepts clés :
• Regroupement vs tuple ; piège (1) vs (1,).

Distinctions clés :
• type((1)) int ; type((1,)) tuple.

Fonctionnement :
• Évaluer l’expression entre parenthèses → 1.

Exécution étape par étape :
1. Parenthèses retournent la valeur interne sans créer tuple.

Ordre des opérations :
• Comme pour toute expression parenthésée.

Cas d'utilisation courants :
• Précédence d’opérateurs ; clarifier des expressions.

Cas limites :
• (1+2)*3 utilise parenthèses non tuple.

Considérations de performance :
• Aucun surcoût structurel.

Exemples :
• isinstance((1), int) → True.

Remarques :
• En SQL ou maths, parenthèses ressemblent mais sémantique Python spécifique.`,

  1629: `La bonne réponse est « <class 'tuple'> » : (1,) est un tuple singleton ; type le confirme.

Débutant :
• La virgule après 1 crée le tuple.

Intermédiaire :
• len((1,)) vaut 1 ; accès [0] vaut 1.

Expert :
• hash((1,)) est défini car contenu entier hashable.

Concepts clés :
• type sur singleton tuple ; trailing comma.

Distinctions clés :
• Comparez mentalement à 1628 pour ancrer la différence.

Fonctionnement :
• Construire tuple ; passer à type.

Exécution étape par étape :
1. Tuple créé ; type renvoie classe tuple.

Ordre des opérations :
• Évaluation de l’argument avant type().

Cas d'utilisation courants :
• Tests unitaires sur types, validation de retours API.

Cas limites :
• Tuple vide () : type toujours tuple.

Considérations de performance :
• trivialement petit.

Exemples :
• (1,) * 3 → (1,1,1).

Remarques :
• Affichage REPL montre souvent (1,) avec virgule pour lisibilité.`,

  1630: `La bonne réponse est « <class 'int'> » : (1) sans virgule se réduit à l’int 1 ; type((1)) est donc int.

Débutant :
• Même valeur que 1 nu.

Intermédiaire :
• Référence croisée : 1628 et 1629 pour la leçon complète.

Expert :
• Dans les annotations ou génériques, (T) peut être interprété comme expression, pas tuple — autre contexte mais même piège lexical.

Concepts clés :
• int ; parenthèses de groupement ; absence de tuple.

Distinctions clés :
• Un seul caractère de syntaxe (virgule) change le type.

Fonctionnement :
• Réduire (1) → 1 ; type sur int.

Exécution étape par étape :
1. Pas de construction tuple.

Ordre des opérations :
• Appel type après évaluation de l’argument.

Cas d'utilisation courants :
• Débogage pédagogique, QCM.

Cas limites :
• (()) reste tuple vide dans tuple ? (()) parse comme tuple contenant tuple vide — hors sujet ici.

Considérations de performance :
• N/A.

Exemples :
• type((((1)))) → int (parenthèses imbriquées sans virgule).

Remarques :
• Relire la règle : la virgule construit le tuple, pas la paire de parenthèses.`,

  1631: `La bonne réponse est « (1, 2, 3) » : tuple(...) prend un itérable (ici une liste) et construit un tuple immuable avec les mêmes éléments dans l’ordre.

Débutant :
• La liste [1,2,3] n’est pas modifiée ; un nouvel objet tuple est créé.

Intermédiaire :
• Tout itérable convient : str, range, set (ordre peut varier pour set).

Expert :
• tuple() sans argument fabrique () ; copie superficielle des références d’objets contenus.

Concepts clés :
• Constructeur tuple ; conversion list→tuple ; immutabilité.

Distinctions clés :
• tuple([a,b]) nouvelle coque ; éléments mutables restent mutables à l’intérieur.

Fonctionnement :
• Itérer la liste, pousser chaque élément dans le tuple construit.

Exécution étape par étape :
1. Lire 1,2,3 dans l’ordre → (1,2,3).

Ordre des opérations :
• L’argument liste est évalué avant l’appel tuple().

Cas d'utilisation courants :
• Clés composites, retours multiples figés, passage à des API immuables.

Cas limites :
• Itérable infini : ne pas convertir (boucle infinie).

Considérations de performance :
• Allocation d’un tuple de taille n en O(n).

Exemples :
• tuple("ab") → ("a","b").

Remarques :
• list(tuple(lst)) est une copie « shallow » en liste mutable.`,

  1632: `La bonne réponse est « [1, 2, 3] » : list() consomme le tuple (1,2,3) et produit une liste mutable aux mêmes éléments.

Débutant :
• Le tuple source reste inchangé ; nouvelle liste séparée.

Intermédiaire :
• Utile avant .append/.sort si vous aviez un tuple.

Expert :
• Shallow : si le tuple contenait des listes, ce sont les mêmes objets list dans la nouvelle liste.

Concepts clés :
• Constructeur list ; conversion tuple→list.

Distinctions clés :
• list ne copie pas profondément ; copy.deepcopy autre besoin.

Fonctionnement :
• Itérer le tuple, remplir la liste.

Exécution étape par étape :
1. Éléments 1,2,3 copiés en conteneur liste.

Ordre des opérations :
• Tuple évalué puis parcouru.

Cas d'utilisation courants :
• Édition locale de données venues d’un tuple.

Cas limites :
• list(()) → [].

Considérations de performance :
• O(n) temps et mémoire pour la nouvelle liste.

Exemples :
• list((i for i in range(2))) → [0,1].

Remarques :
• Évitez de convertir aller-retour sans raison ; choisissez le bon type tôt.`,

  1633: `La bonne réponse est « 1 » : l’index 0 désigne le premier élément du tuple (1,2,3).

Débutant :
• Indexation 0-based comme les listes et str.

Intermédiaire :
• Le résultat est un int, pas un tuple d’un élément.

Expert :
• Les tuples supportent aussi slice et index multi-dim si nested.

Concepts clés :
• tuple[i] ; premier élément ; séquence.

Distinctions clés :
• (1,2,3)[0] valeur seule ; (1,2,3)[0:1] tuple singleton.

Fonctionnement :
• Accès direct par offset sous-jacent.

Exécution étape par étape :
1. Référencer slot 0 → 1.

Ordre des opérations :
• Création du tuple littéral puis opérateur [].

Cas d'utilisation courants :
• Déballage partiel mental, coord x,y,z.

Cas limites :
• Index hors bornes → IndexError.

Considérations de performance :
• O(1) accès.

Exemples :
• ("a","b")[1] → "b".

Remarques :
• Pas d’assignation t[i]=... sur tuple (immuabilité).`,

  1634: `La bonne réponse est « 3 » : l’indice -1 pointe toujours vers le dernier élément.

Débutant :
• (1,2,3) dernier est 3 ; -1 est la notation idiomatique.

Intermédiaire :
• -len est le premier élément ; au-delà → IndexError.

Expert :
• Cohérent avec list et str ; utile quand la longueur varie.

Concepts clés :
• Indexation négative ; fin de séquence.

Distinctions clés :
• [-1] dernier élément ≠ [:-1] slice « tout sauf dernier ».

Fonctionnement :
• len+i pour i négatif.

Exécution étape par étape :
1. len=3 ; -1 → offset 2 → valeur 3.

Ordre des opérations :
• Tuple créé ; puis [] appliqué.

Cas d'utilisation courants :
• Dernière colonne CSV tuple, queue, timestamp final.

Cas limites :
• Tuple vide : [-1] impossible.

Considérations de performance :
• O(1).

Exemples :
• (10,20,30)[-2] → 20.

Remarques :
• Préférez souvent unpacking pour 2-tuples au lieu d’indices magiques.`,

  1635: `La bonne réponse est « (2, 3) » : le slice [1:] sur tuple renvoie un nouveau tuple des éléments à partir de l’index 1 jusqu’à la fin.

Débutant :
• Indices 1 et 2 valent 2 et 3 ; le type reste tuple.

Intermédiaire :
• Pas de copie profonde des éléments : références partagées si objets mutables.

Expert :
• Slice avec pas [::2] etc. suit mêmes règles que list.

Concepts clés :
• Slicing ; immutabilité du tuple source ; nouveau tuple.

Distinctions clés :
• [1:] vs [1] (tuple singleton slice explicite [1:2]).

Fonctionnement :
• Construire un tuple des éléments sélectionnés.

Exécution étape par étape :
1. Start=1, stop=fin → (2,3).

Ordre des opérations :
• Slice sur tuple appelle __getitem__ avec slice object.

Cas d'utilisation courants :
• Tête/queue de données immuables, pattern « cdr ».

Cas limites :
• [1:1] → () vide.

Considérations de performance :
• O(k) pour k éléments copiés (références).

Exemples :
• (1,2,3)[:2] → (1,2).

Remarques :
• Pour « supprimer » le premier élément d’un tuple, reconstruire ou slice comme ici.`,

  1636: `La bonne réponse est « 3 » : len compte trois slots dans (1, 2, 3).

Débutant :
• len généralise aux séquences.

Intermédiaire :
• len((1,)) vaut 1 ; len(()) vaut 0.

Expert :
• Pour grands tuples, len est O(1) en CPython (taille stockée).

Concepts clés :
• len ; cardinal d’un tuple.

Distinctions clés :
• len ≠ somme des éléments ; ici entiers mais concept différent.

Fonctionnement :
• Lire le champ de taille interne.

Exécution étape par étape :
1. Compter 1,2,3 → 3.

Ordre des opérations :
• Tuple construit puis len appelé.

Cas d'utilisation courants :
• Garde-fous, boucles for i in range(len(t)) (souvent enumerate préférable).

Cas limites :
• Nested : len compte éléments top-level seulement.

Considérations de performance :
• O(1) temps.

Exemples :
• len((1,(2,3))) → 2.

Remarques :
• Ne confondez pas profondeur et longueur plate.`,

  1637: `La bonne réponse est « (1, 2, 3, 4) » : + sur tuples concatène sans additionner terme à terme.

Débutant :
• Nouveau tuple ; opérandes inchangés.

Intermédiaire :
• Impossible tuple + list sans conversion explicite.

Expert :
• Somme répétée en boucle peut être quadratique ; itertools.chain pour gros volumes.

Concepts clés :
• Concaténation + ; immutabilité → nouvelle instance.

Distinctions clés :
• Diffère du + numérique ou vectoriel mathématique.

Fonctionnement :
• Allouer tuple de longueur somme, copier références dans l’ordre.

Exécution étape par étape :
1. (1,2) puis (3,4) → (1,2,3,4).

Ordre des opérations :
• Gauche puis droite.

Cas d'utilisation courants :
• Assembler segments immuables, chemins symboliques simples.

Cas limites :
• () + (1,) → (1,).

Considérations de performance :
• O(n+m) pour tailles n,m.

Exemples :
• ("a",)+("b",) → ("a","b") (notez la virgule singleton).

Remarques :
• * sur tuple répète ; + concatène ; ne pas inverser mentalement.`,

  1638: `La bonne réponse est « (1, 2, 1, 2, 1, 2) » : * répète la séquence entière trois fois, pas les éléments un par un numériquement.

Débutant :
• Ce n’est pas (3,6) ; pas d’addition membre à membre.

Intermédiaire :
• Similaire à liste * n et str * n.

Expert :
• Attention : ([1,2],)*3 partage trois fois la même liste interne si mutable dans le tuple.

Concepts clés :
• Répétition * sur tuple ; nouvelle séquence plate.

Distinctions clés :
• * concatène des répétitions vs + qui joint deux tuples distincts.

Fonctionnement :
• Dupliquer le pattern (1,2) trois fois bout à bout.

Exécution étape par étape :
1. (1,2) + (1,2) + (1,2) conceptuellement.

Ordre des opérations :
• Évalue opérandes puis répétition.

Cas d'utilisation courants :
• Padding, grilles initiales, tests.

Cas limites :
• n=0 → () ; n négatif interdit (ValueError sur certaines séquences ? tuple*neg error).

Considérations de performance :
• O(longueur résultat).

Exemples :
• (0,)*5 → cinq zéros.

Remarques :
• valider que n est entier ≥0 pour éviter surprises.`,

  1639: `La bonne réponse est « True » : l’opérateur in teste l’appartenance par égalité successive jusqu’au premier match.

Débutant :
• 2 est un élément du tuple → True.

Intermédiaire :
• Complexité O(n) tuple ; sets offrent O(1) moyen pour tests répétés.

Expert :
• in délègue à __contains__ ; pour types custom, comportement défini par la classe.

Concepts clés :
• Membership in ; tuple ; booléen.

Distinctions clés :
• in ≠ index() (lève si absent) ; in renvoie False silencieux.

Fonctionnement :
• Parcourir éléments ; comparer avec ==.

Exécution étape par étape :
1. Tester 1, puis 2 → match → True court-circuit.

Ordre des opérations :
• Court-circuit dès succès.

Cas d'utilisation courants :
• Validation d’énumérations, flags, petits registres.

Cas limites :
• NaN : x in (float('nan'),) est False même si « même » valeur (NaN != NaN).

Considérations de performance :
• Linéaire sur petits tuples OK.

Exemples :
• 0 in (0,) → True.

Remarques :
• Pour dict, in teste les clés, pas les valeurs.`,

  1640: `La bonne réponse est « 1 » : count(2) compte combien de fois la valeur 2 apparaît dans (1,2,3), une seule fois.

Débutant :
• Méthode de séquence ; tuple en a deux utiles : count et index.

Intermédiaire :
• Utilise == ; pas d’exception si absent (0).

Expert :
• Sur tuples géants, count est O(n) complet.

Concepts clés :
• tuple.count ; occurrences.

Distinctions clés :
• count vs index (première position) vs in (booléen).

Fonctionnement :
• Scanner linéairement et incrémenter.

Exécution étape par étape :
1. Voir 2 une fois → retour 1.

Ordre des opérations :
• Tuple littéral puis appel méthode.

Cas d'utilisation courants :
• Petites stats, validation de doublons.

Cas limites :
• (2,2,2).count(2) → 3.

Considérations de performance :
• O(n).

Exemples :
• ().count(1) → 0.

Remarques :
• collections.Counter pour histogrammes multi-valeurs.`,

  1641: `La bonne réponse est « 1 » : index(2) renvoie la position de la première occurrence de 2, ici l’indice 1 (0-based).

Débutant :
• Position 0 → 1, position 1 → 2, position 2 → 3.

Intermédiaire :
• Si 2 manquait : ValueError (contrairement à count).

Expert :
• Formes index(x, start, stop) pour fenêtrer la recherche.

Concepts clés :
• tuple.index ; première occurrence ; erreur si absent.

Distinctions clés :
• index → position ; count → multiplicité ; in → existence.

Fonctionnement :
• Parcours linéaire jusqu’à ==.

Exécution étape par étape :
1. Compare à 1 (non), puis 2 (oui) → retour 1.

Ordre des opérations :
• Scan de gauche à droite.

Cas d'utilisation courants :
• Localiser un marqueur, aligner des buffers.

Cas limites :
• Doublons : seule la première position ; pour toutes, boucle enumerate.

Considérations de performance :
• O(n) pire cas.

Exemples :
• (2,2).index(2) → 0.

Remarques :
• Souvent on combine if x in t avant t.index(x) pour éviter l’exception.`,

  1642: `La bonne réponse est « Non, les tuples sont immuables » : on ne peut pas réassigner t[0] ni muter la structure du tuple.

Débutant :
• Immuable = pas d’assignation d’élément, pas d’append.

Intermédiaire :
• t[0]=5 lève TypeError: 'tuple' object does not support item assignment.

Expert :
• Pour « modifier », créez un nouveau tuple (slice, concat) ou utilisez une structure mutable.

Concepts clés :
• Immutabilité du tuple ; interdiction d’item assignment.

Distinctions clés :
• Liste mutable vs tuple immuable ; même opérateur [] sémantique différente.

Fonctionnement :
• Le tuple pointe vers des références ; la grille de slots du tuple est fixe.

Exécution étape par étape :
1. Tentative d’écriture sur slot → erreur.

Ordre des opérations :
• N/A mutation refusée.

Cas d'utilisation courants :
• Clés dict, éléments de set, données figées.

Cas limites :
• Tuple vide () immuable mais trivial.

Considérations de performance :
• Immuabilité permet certaines optimisations et partage sûr.

Exemples :
• t=(1,2); t+=(3,) crée un nouveau tuple (réaffectation de nom).

Remarques :
• Immuabilité « superficielle » : voir 1643 si élément interne mutable.`,

  1643: `La bonne réponse est « (1, [2, 3, 4]) » : le tuple ne change pas de structure (toujours int + liste), mais la liste interne est mutable et .append(4) la modifie en place.

Débutant :
• t[1] reste la même liste ; son contenu grandit.

Intermédiaire :
• t[1] = autre_liste serait interdit (mutation du tuple) ; t[1].append est OK.

Expert :
• Risque de partage : deux références à la même liste mutent ensemble.

Concepts clés :
• Immuabilité superficielle ; méthode append sur list ; références.

Distinctions clés :
• Changer le contenu d’un objet contenu ≠ remplacer la référence dans le tuple.

Fonctionnement :
• Résoudre t[1] → liste ; appeler append sur cet objet.

Exécution étape par étape :
1. Liste [2,3] → append 4 → [2,3,4] ; tuple affiché reflète la mutation.

Ordre des opérations :
• Accès attribut/méthode puis mutation de la liste.

Cas d'utilisation courants :
• Structs hybrides, caches internes, pièges pédagogiques utiles.

Cas limites :
• Si la 2e composante n’était pas list, append impossible.

Considérations de performance :
• append amorti O(1) ; pas de copie du tuple.

Exemples :
• t=(1,[]); t[1]+=[1] attention avec += sur liste (in-place mais piège d’affichage similaire).

Remarques :
• Pour de vraies structures figées, utilisez tuple de tuples ou types frozen.`,

  1644: `La bonne réponse est « 10 » : le déballage (unpacking) a, b = (10, 20) assigne 10 à a et 20 à b.

Débutant :
• Le nombre de variables à gauche doit égaler la longueur du tuple.

Intermédiaire :
• Fonctionne avec tout itérable à droite, pas seulement tuple littéral.

Expert :
• *rest et déballage étendu Python 3 pour motifs plus riches.

Concepts clés :
• Tuple unpacking ; affectation multiple.

Distinctions clés :
• a = (10,20) met le tuple entier dans a ; ici a scalaire.

Fonctionnement :
• Évaluer le RHS ; distribuer aux noms LHS.

Exécution étape par étape :
1. RHS (10,20) ; lier a←10, b←20.

Ordre des opérations :
• RHS d’abord, puis assignations (simultanées sémantiquement pour swap).

Cas d'utilisation courants :
• Retours de fonction multiples, permutation de variables.

Cas limites :
• Longueurs différentes → ValueError.

Considérations de performance :
• Négligeable.

Exemples :
• x,y = y,x équivalent conceptuel au swap (voir 1645).

Remarques :
• Lire la PEP sur l’ordre d’assignation pour structures imbriquées avancées.`,

  1645: `La bonne réponse est « Échange les valeurs de a et de b » : le RHS b, a est évalué en premier comme un tuple temporaire, puis déballé dans a, b.

Débutant :
• Pas de variable temporaire explicite nécessaire.

Intermédiaire :
• Évite les erreurs classiques d’échange avec deux assignations séquentielles.

Expert :
• Le mécanisme généralise à rotations multi-variables via packing/unpacking.

Concepts clés :
• Évaluation RHS avant assignation LHS ; idiome Python.

Distinctions clés :
• Différent de a=b ; b=a qui perdrait l’ancien a.

Fonctionnement :
• Construire tuple (b_val, a_val) puis binder a,b.

Exécution étape par étape :
1. Lire b et a courants ; produire paire ; réassigner dans l’ordre gauche.

Ordre des opérations :
• RHS entièrement avant bindings finaux (modèle CPython).

Cas d'utilisation courants :
• Tri local, swaps en algorithmes, concision.

Cas limites :
• Si a ou b sont propriétés avec setters coûteux, effets de bord possibles.

Considérations de performance :
• Très bon ; pas d’allocation massive.

Exemples :
• a,b,c = b,c,a rotation triple.

Remarques :
• Préférez ce style lisible aux XOR tricks obsolètes.`,

  1646: `La bonne réponse est « True » : == sur tuples compare longueur puis chaque paire d’éléments avec == en court-circuit.

Débutant :
• Même longueur 3 ; 1==1, 2==2, 3==3.

Intermédiaire :
• Ordre compte : (1,2) != (2,1).

Expert :
• Récursif sur structures imbriquées via == élémentaire.

Concepts clés :
• Égalité structurelle ; tuple.

Distinctions clés :
• is teste identité d’objet, pas égalité de valeur.

Fonctionnement :
• Comparer tailles puis éléments de gauche à droite.

Exécution étape par étape :
1. Longueurs ok ; toutes paires ok → True.

Ordre des opérations :
• Comparaisons court-circuitées au premier False.

Cas d'utilisation courants :
• Tests, validation de records immuables.

Cas limites :
• NaN dans tuple brise l’intuition d’égalité réflexive.

Considérations de performance :
• O(n) sur nombre d’éléments comparés jusqu’à divergence.

Exemples :
• (1,)==(1,) → True.

Remarques :
• != est la négation logique de == pour tuples.`,

  1647: `La bonne réponse est « True » : comparaison lexicographique : premier élément 1==1, puis 2<3 décide True sans regarder au-delà.

Débutant :
• « Comme le dictionnaire » mais pour nombres : compare position par position.

Intermédiaire :
• Si premier différent, on s’arrête ; ici second slot tranche.

Expert :
• Exige que les éléments comparables pour < ; sinon TypeError.

Concepts clés :
• Ordre lexicographique ; opérateur < sur tuple.

Distinctions clés :
• (1,2) < (1,2) est False (égalité, pas strictement inférieur).

Fonctionnement :
• Trouver première paire inégale ; sinon comparer longueurs (voir 1648).

Exécution étape par étape :
1. Compare 1 vs 1 tie ; 2 vs 3 → 2<3 True.

Ordre des opérations :
• Évaluation paresseuse des slots suivants si tranché avant.

Cas d'utilisation courants :
• Tri de listes de tuples, clés composites, versions.

Cas limites :
• Types hétérogènes incompatibles → TypeError en Python 3.

Considérations de performance :
• O(k) k profondeur jusqu’à décision.

Exemples :
• (2,0) < (1,9) → False car 2>1 au premier slot.

Remarques :
• Reliez à la comparaison de chaînes pour intuition.`,

  1648: `La bonne réponse est « True » : après avoir épuisé les éléments du tuple gauche, s’il est préfixe strict du droit, il est considéré plus petit.

Débutant :
• (1,2) est « plus court » mais match complet du préfixe de (1,2,3).

Intermédiaire :
• Analogie str : "ab" < "abc".

Expert :
• Règle générale des séquences en Python 3 pour <.

Concepts clés :
• Préfixe ; longueur différente ; comparaison lexicographique étendue.

Distinctions clés :
• Inverse : (1,2,3) < (1,2) → False.

Fonctionnement :
• Comparer éléments tant que possible ; si égalité partout côté plus court, le plus court est plus petit.

Exécution étape par étape :
1. 1==1, 2==2 ; gauche fini, droite continue → gauche plus petit.

Ordre des opérations :
• Détection fin d’un opérande après égalités.

Cas d'utilisation courants :
• Clés de version (1,0) vs (1,0,0), tri stable.

Cas limites :
• () < (1,) → True.

Considérations de performance :
• O(min(len)).

Exemples :
• (1,) < (1,0) → True.

Remarques :
• Documentez ce comportement si vos tuples représentent des versions.`,

  1649: `La bonne réponse est « Oui, les tuples dont tous les éléments sont hashables le sont » : (1,2,3) ne contient que des int hashables → le tuple est hashable ; hash(...) est défini.

Débutant :
• hashable permet clés de dict et éléments de set.

Intermédiaire :
• Récursif : tous les sous-éléments doivent être hashables pour le tuple global.

Expert :
• hash aléatoire salé entre processus possibles (sécurité) mais opération existe.

Concepts clés :
• Hashabilité ; tuple pur d’ints ; fonction hash.

Distinctions clés :
• hashable ≠ mutable ; tuple immuable mais pas toujours hashable si contenu mutable.

Fonctionnement :
• Combiner les hashes des éléments selon l’algorithme interne.

Exécution étape par étape :
1. Vérifier éléments ; calculer hash composite.

Ordre des opérations :
• hash appelle la logique du type tuple.

Cas d'utilisation courants :
• Clés composites dict, caches memoization.

Cas limites :
• Tuple vide () est hashable.

Considérations de performance :
• O(n) sur nombre d’éléments hashés.

Exemples :
• {(1,2)} est un set valide.

Remarques :
• Évitez de dépendre de la valeur numérique exacte du hash entre runs.`,

  1650: `La bonne réponse est « Non, TypeError car la liste interne n’est pas hashable » : hasher le tuple exige hasher chaque élément ; list n’a pas de hash → TypeError: unhashable type: 'list'.

Débutant :
• list mutable → pas hashable.

Intermédiaire :
• tuple imbriqué de tuples hashables serait OK : (1,(2,3)).

Expert :
• Même piège avec dict ou set imbriqués dans tuple.

Concepts clés :
• Hashabilité profonde ; list interdite ; exception.

Distinctions clés :
• (1,[2,3]) tuple extérieur existe mais n’est pas hashable.

Fonctionnement :
• Tentative de hash sur liste interne → échec propage.

Exécution étape par étape :
1. hash(1) ok ; hash([2,3]) lève.

Ordre des opérations :
• Court-circuit à la première composante non hashable.

Cas d'utilisation courants :
• Débogage de structures pour clés dict.

Cas limites :
• frozenset ou tuple à la place de list rétablit hash si contenu ok.

Considérations de performance :
• N/A avant échec rapide.

Exemples :
• hash((1, frozenset({2}))) peut fonctionner selon éléments.

Remarques :
• Modélisez données immuables si vous avez besoin de clés composites stables.`,
};
