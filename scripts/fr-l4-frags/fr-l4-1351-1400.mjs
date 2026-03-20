/** Level 4 FR 1351–1400 — level4_for_loops.ts Q55–100 + level4_while_batch1.ts Q1–4. */
export default {
  1351: `La bonne réponse est 3 : dans « banana », la lettre « a » apparaît trois fois ; le compteur utilise dict.get pour incrémenter sans KeyError.

Débutant :
• On parcourt chaque caractère ch de word.
• counts.get(ch, 0) donne l’ancien total ou 0 si la clé est nouvelle.
• counts[ch] = … + 1 met à jour ; pour « a », on arrive à 3.

Intermédiaire :
• Équivalent idiomatique : collections.Counter(word).
• Évite if ch in counts … else … en une seule affectation.

Expert :
• Complexité O(n) sur la longueur de la chaîne ; espace O(k) pour k lettres distinctes.

Concepts clés :
• Fréquences par dictionnaire ; get avec défaut 0.

Distinctions clés :
• get(k, 0) vs counts[k] seul (risque KeyError la première fois).

Fonctionnement :
• Chaque tour lit une lettre, récupère le compte courant, ajoute 1, réécrit la clé.

Exécution étape par étape :
1. counts vide ; b, a, n, a, n, a incrémentent les clés.
2. À chaque « a », le compte passe 1, puis 2, puis 3.
3. counts["a"] vaut 3.

Ordre des opérations :
• get puis addition puis assignation à chaque itération, dans l’ordre du mot.

Cas d'utilisation courants :
• Histogrammes, analyse de texte, validation de saisie.

Cas limites :
• Chaîne vide : boucle jamais exécutée ; counts["a"] lèverait KeyError si consulté.

Considérations de performance :
• Pour très gros flux, un compteur dédié ou array peut être plus adapté selon l’alphabet.

Exemples :
• Compter les votes : counts[candidat] = counts.get(candidat, 0) + 1.

Remarques :
• Même logique que la question sur hist["a"] mais ici la clé est explicitement counts["a"].`,

  1352: `La bonne réponse est [10, 30, 50] : range(0, len(lst), 2) parcourt les indices 0, 2, 4.

Débutant :
• len(lst) vaut 5 ; range(0, 5, 2) produit 0, 2, 4.
• On append lst[i] pour ces indices seulement.
• Résultat : 10, puis 30, puis 50.

Intermédiaire :
• Même effet que lst[::2] en une ligne.
• Le pas 2 « saute » une position à chaque fois.

Expert :
• Généralisable à tout pas k pour sous-échantillonnage d’indices.

Concepts clés :
• range avec pas ; indexation de liste par position.

Distinctions clés :
• Éléments d’indices pairs vs valeurs paires (autre question).

Fonctionnement :
• La boucle ne visite que les positions 0, 2, 4 de la liste de cinq éléments.

Exécution étape par étape :
1. i=0 → append 10.
2. i=2 → append 30.
3. i=4 → append 50.
4. Fin de range.

Ordre des opérations :
• len(lst) évalué une fois ; chaque append après lecture lst[i].

Cas d'utilisation courants :
• Traitement d’une colonne sur deux, échantillonnage, grilles.

Cas limites :
• Liste vide : range(0,0,2) vide ; result reste [].

Considérations de performance :
• O(n) en nombre d’indices visités ; slice peut être plus lisible.

Exemples :
• Prendre chaque troisième ligne : range(0, n, 3).

Remarques :
• Ne pas confondre avec range(0, len(lst), 1) qui prendrait tous les éléments.`,

  1353: `La bonne réponse est [5, 4, 3, 2, 1] : range(5, 0, -1) décompte depuis 5 et s’arrête avant 0.

Débutant :
• Le troisième argument -1 est le pas négatif.
• La borne haute 0 est exclue comme pour range positif.
• Donc 5, 4, 3, 2, 1 — pas de 0 dans la liste.

Intermédiaire :
• Proche de reversed(range(1, 6)) pour le même ensemble de valeurs.
• list() matérialise l’itérateur paresseux.

Expert :
• range refuse un pas 0 ; mélange start/stop/step demande un peu d’habitude.

Concepts clés :
• range décroissant ; borne stop exclue.

Distinctions clés :
• [5,…,1] vs [5,…,1,0] (stop différent ou pas mal choisi).

Fonctionnement :
• Python génère les entiers en décrémentant jusqu’à ce que la prochaine valeur serait < stop pour ce sens.

Exécution étape par étape :
1. Valeur courante 5, puis 4, 3, 2, 1.
2. Prochain serait 0, qui n’est pas > stop dans la sémantique du range descendant… (strictement : on s’arrête avant d’atteindre la borne).
3. list() collecte ces cinq entiers.

Ordre des opérations :
• Construction lazy du range, puis consommation pour la liste.

Cas d'utilisation courants :
• Compte à rebours, indices inverses, parcours inverse sans reversed explicite.

Cas limites :
• range(5, 0, 1) donne séquence vide (pas incohérent avec le pas).

Considérations de performance :
• range reste O(1) en mémoire jusqu’à list().

Exemples :
• for i in range(n, 0, -1): print(i) pour n…1.

Remarques :
• Bien vérifier stop quand on veut inclure ou exclure 0.`,

  1354: `La bonne réponse est 'Hello World' : split puis capitalize sur chaque mot, puis join par un espace.

Débutant :
• "hello world".split() → ['hello', 'world'].
• capitalize() met la première lettre en majuscule, le reste en minuscule.
• join recolle avec un espace.

Intermédiaire :
• title() sur la phrase entière peut différer sur des cas comme « they're ».
• Ici deux mots simples → même effet visuel qu’un title naïf.

Expert :
• Compréhension dans l’argument de join : évaluation stricte gauche-droite des mots.

Concepts clés :
• split / capitalize / join ; traitement par token.

Distinctions clés :
• capitalize vs upper vs title (couverture et règles différentes).

Fonctionnement :
• Liste intermédiaire de mots capitalisés, puis concaténation contrôlée.

Exécution étape par étape :
1. split produit la liste de mots.
2. La compréhension applique capitalize à chaque w.
3. " ".join assemble 'Hello World'.

Ordre des opérations :
• split d’abord, puis compréhension, puis join.

Cas d'utilisation courants :
• Titres d’affichage, noms propres simples, normalisation légère.

Cas limites :
• Chaîne vide ou uniquement espaces : split peut donner [] → join → ''.

Considérations de performance :
• Pour très grandes chaînes, éviter de recréer beaucoup de sous-chaînes inutilement.

Exemples :
• [w.lower() for w in s.split()] pour tout en minuscules.

Remarques :
• Les guillemets dans l’énoncé utilisent des apostrophes Python ; le résultat logique est Hello World.`,

  1355: `La bonne réponse est [3, 4] : la compréhension garde les x de a qui sont aussi dans b, dans l’ordre de a.

Débutant :
• a = [1,2,3,4] ; b = [3,4,5,6].
• 1 et 2 ne sont pas dans b ; 3 et 4 oui.
• Donc [3, 4].

Intermédiaire :
• x in b sur liste est O(len(b)) par test — acceptable pour petites données.
• set(b) accélérerait les tests si b est grand.

Expert :
• Préserver l’ordre du premier iterable est une propriété utile par rapport à set & set.

Concepts clés :
• Intersection « ordonnée » via filtre et in.

Distinctions clés :
• Ordre de a vs ordre de b ; vs ensemble mathématique sans ordre.

Fonctionnement :
• Pour chaque x dans a, test d’appartenance à b ; append implicite si vrai.

Exécution étape par étape :
1. x=1,2 : faux.
2. x=3,4 : vrai → inclus.
3. Liste finale [3,4].

Ordre des opérations :
• Parcours linéaire de a ; chaque in parcourt b.

Cas d'utilisation courants :
• Recouper deux listes, tags communs, ids présents dans deux sources.

Cas limites :
• Doublons dans a : s’ils sont dans b, ils réapparaissent (pas de déduplication).

Considérations de performance :
• Passer b en set pour O(1) amorti par test si tailles non triviales.

Exemples :
• [x for x in users_a if x in set(users_b)].

Remarques :
• Ne pas confondre avec l’union (tous les éléments des deux).`,

  1356: `La bonne réponse est [1, 2, 3, 4, 5] : copie de a puis ajout des éléments de b absents de result.

Débutant :
• result commence comme copie de a → [1,2,3].
• Pour x dans b : 3 est déjà présent, ignoré ; 4 et 5 ajoutés.
• Union sans doublon, ordre : d’abord a, puis nouveautés de b.

Intermédiaire :
• x not in result est O(n) par test sur liste — pattern pédagogique clair.
• dict.fromkeys(a+b) ou | sur dicts en 3.9+ sont des variantes.

Expert :
• Pour de grandes données, set ou clés dict pour membership O(1).

Concepts clés :
• Union de listes sans duplication ; test not in.

Distinctions clés :
• vs result.extend(b) qui dupliquerait le 3.

Fonctionnement :
• append conditionnel après membership sur la liste accumulée.

Exécution étape par étape :
1. result = [1,2,3].
2. x=3 : not in ? faux.
3. x=4,5 : not in ? vrai → append.

Ordre des opérations :
• list(a) puis boucle sur b avec tests.

Cas d'utilisation courants :
• Fusionner des listes de préférences, ids uniques en gardant l’ordre.

Cas limites :
• Si a contient des doublons, ils sont conservés tels quels dans la copie.

Considérations de performance :
• Remplacer result par structure set pour membership si besoin.

Exemples :
• list(dict.fromkeys(a + b)) idiomatique en 3.7+.

Remarques :
• Le 3 commun n’apparaît qu’une fois dans le résultat final.`,

  1357: `La bonne réponse est IndexError : supprimer pendant une boucle for i in range(len(nums)) décale les indices alors que range est fixé.

Débutant :
• Au début len(nums)=5, range(5) figé.
• Après suppression d’un pair, la liste raccourcit.
• Un i ultérieur peut dépasser la nouvelle longueur → IndexError.

Intermédiaire :
• Même piège avec insert/remove en boucle indexée.
• Solutions : parcourir à l’envers, ou copie, ou liste en compréhension.

Expert :
• La séquence d’indices ne se « recalcule » pas à chaque tour pour for-range.

Concepts clés :
• Mutation + indexation simultanées ; longueur figée du range.

Distinctions clés :
• Erreur d’index vs résultat partiel faux sans exception (autres bugs).

Fonctionnement :
• del réduit la taille ; nums[i] lit encore avec i prévu pour l’ancienne taille.

Exécution étape par étape :
1. Premier pair supprimé, liste plus courte.
2. i augmente selon le range d’origine.
3. Accès hors limites → IndexError.

Ordre des opérations :
• range construit une fois ; del à l’intérieur ne met pas range à jour.

Cas d'utilisation courants :
• Anti-pattern montré pour enseigner l’itération sûre.

Cas limites :
• Selon quels éléments sont pairs, l’erreur peut survenir tôt ou tard.

Considérations de performance :
• Filtrer avec [x for x in nums if x%2] crée une nouvelle liste propre.

Exemples :
• for x in nums[:]: ... del ou remove sur original.

Remarques :
• Mémotechnique : ne pas modifier la liste qu’on indexe avec range(len).`,

  1358: `La bonne réponse est [1, 3, 5] : itération sur une copie nums[:] pendant remove sur l’original.

Débutant :
• nums[:] shallow copy : la boucle parcourt [1,2,3,4,5] figée.
• remove enlève les pairs du nums original.
• Reste 1,3,5.

Intermédiaire :
• Sans copie, remove pendant itération directe saute des éléments.
• Ici la source d’itération ne change pas.

Expert :
• [x for x in nums if x%2] évite la mutation et est souvent plus claire.

Concepts clés :
• Copie de liste pour itération sûre ; remove par valeur.

Distinctions clés :
• nums[:] vs nums (référence) ; remove vs del par index.

Fonctionnement :
• Pour chaque x de la copie, si pair, on retire la première occurrence de x dans nums.

Exécution étape par étape :
1. Copie fixe 1…5.
2. x=2,4 : remove depuis nums.
3. nums final impairs seulement.

Ordre des opérations :
• Itération sur copie ; mutation sur original à chaque remove.

Cas d'utilisation courants :
• Nettoyer une liste en place sans casser l’itérateur.

Cas limites :
• Doublons : remove enlève une seule occurrence à la fois (ok ici).

Considérations de performance :
• remove est O(n) ; pour gros volumes préférer compréhension.

Exemples :
• Filtrer None : for x in lst[:]: if x is None: lst.remove(x).

Remarques :
• Pattern standard en tutoriels « safe removal ».`,

  1359: `La bonne réponse est [[0], [1, 1], [2, 2, 2]] : [i] * (i+1) répète une liste d’un élément.

Débutant :
• i=0 : [0]*1 → [0].
• i=1 : [1]*2 → [1,1].
• i=2 : [2]*3 → [2,2,2].

Intermédiaire :
• Attention : [[]]*3 partage la même sous-liste ; ici ce sont des int, pas de piège de mutabilité.

Expert :
• Structure triangulaire utile pour exercices de listes imbriquées.

Concepts clés :
• Multiplication de liste ; append dans une boucle.

Distinctions clés :
• Répéter [i] vs répéter [i, j] (contenu différent).

Fonctionnement :
• Chaque tour crée une nouvelle sous-liste littérale puis la duplique par *.

Exécution étape par étape :
1. result=[].
2. Trois append successifs avec sous-listes de taille croissante.
3. Structure finale en « escalier ».

Ordre des opérations :
• range(3) → i puis évaluation [i]*(i+1) puis append.

Cas d'utilisation courants :
• Génération de motifs, grilles triangulaires pédagogiques.

Cas limites :
• Si les éléments étaient mutables partagés, * aliénerait les références.

Considérations de performance :
• Coût modeste pour petits i ; éviter * sur grosses sous-listes inutilement.

Exemples :
• [[0]*i for i in range(1,4)] autre variante (attention au partage si [0] remplacé par liste).

Remarques :
• Bien distinguer longueur i+1 et valeur répétée i.`,

  1360: `La bonne réponse est [1, True] : isinstance(True, int) est vrai car bool est une sous-classe de int.

Débutant :
• 1 est un int → gardé.
• "a" et 2.5 exclus.
• True : bool mais isinstance(..., int) vrai → gardé.

Intermédiaire :
• Pour exclure les bools : type(x) is int.
• ou isinstance(x, int) and not isinstance(x, bool).

Expert :
• Historique : bool hérite de int pour compat (True==1, False==0 en égalité).

Concepts clés :
• isinstance et hiérarchie bool ⊂ int.

Distinctions clés :
• Filtrage « vrais entiers » vs entiers au sens isinstance large.

Fonctionnement :
• La compréhension teste chaque élément contre le prédicat isinstance(x, int).

Exécution étape par étape :
1. 1 → vrai.
2. "a", 2.5 → faux.
3. True → vrai à cause de la sous-classe.

Ordre des opérations :
• Tests dans l’ordre de mixed.

Cas d'utilisation courants :
• Validation de données hétérogènes ; piège classique en quiz.

Cas limites :
• bool(False) aussi isinstance False? Non, False est bool donc int en isinstance → exclure si besoin.

Considérations de performance :
• Prédicat simple ; pas d’impact notable.

Exemples :
• nums = [x for x in data if type(x) is int].

Remarques :
• Question piège utile pour enseigner la différence type / isinstance.`,

  1361: `La bonne réponse est [1, 4, 9, 16] : chaque x de nums est élevé au carré puis ajouté à squared.

Débutant :
• x parcourt 1, 2, 3, 4 dans l’ordre.
• x ** 2 donne 1, 4, 9, 16.
• append construit la nouvelle liste dans le même ordre.

Intermédiaire :
• Équivalent : [x**2 for x in nums] ou list(map(lambda x: x*x, nums)).
• La boucle explicite reste pédagogique pour le pattern « map manuel ».

Expert :
• Attention aux grands entiers : Python les gère en précision illimitée mais coût mémoire/temps croît.

Concepts clés :
• Transformation élément par élément ; accumulateur de liste.

Distinctions clés :
• Carré (x**2) vs double (x*2) ou x**3.

Fonctionnement :
• squared commence vide ; chaque itération évalue x**2 puis append.

Exécution étape par étape :
1. x=1 → append 1.
2. x=2 → append 4.
3. x=3 → append 9.
4. x=4 → append 16.

Ordre des opérations :
• Lecture de nums gauche-droite ; pas de mutation de nums.

Cas d'utilisation courants :
• Normalisation numérique, distances, géométrie simple.

Cas limites :
• nums vide → boucle jamais → squared == [].

Considérations de performance :
• Compréhension souvent un peu plus rapide qu’append répété en CPython.

Exemples :
• Cubes : append(x**3) sur la même structure.

Remarques :
• Ne pas confondre **2 avec 2*x.`,

  1362: `La bonne réponse est [4, 5, 6] : seuls les éléments strictement supérieurs à 3 sont conservés.

Débutant :
• La condition est x > 3, pas >=.
• Parmi 1…6, restent 4, 5, 6.
• 3 est exclu.

Intermédiaire :
• filter(lambda x: x>3, lst) donnerait le même contenu en itérable.
• La compréhension matérialise une liste.

Expert :
• Ordre préservé comme pour toute compréhension sur une séquence ordonnée.

Concepts clés :
• Compréhension avec filtre ; comparaison stricte.

Distinctions clés :
• x > 3 vs x >= 3 (inclurait 3).

Fonctionnement :
• Python évalue chaque x ; n’ajoute à la liste que si le booléen du if est vrai.

Exécution étape par étape :
1. 1,2,3 : faux.
2. 4,5,6 : vrai → dans la liste résultante.

Ordre des opérations :
• Parcours séquentiel de la liste littérale source.

Cas d'utilisation courants :
• Seuils, filtrage de scores, suppression de bruit sous un minimum.

Cas limites :
• Liste vide → résultat vide.

Considérations de performance :
• Un seul passage O(n).

Exemples :
• [x for x in data if x % 2 == 0] pour les pairs.

Remarques :
• Relire l’énoncé : le 3 est frontalier et est rejeté ici.`,

  1363: `La bonne réponse est [(0, 0), (1, 1), (2, 4)] : pour i dans range(3), chaque tuple est (i, i**2).

Débutant :
• i vaut 0, 1, 2.
• i**2 vaut 0, 1, 4.
• Les parenthèses forment des tuples immuables dans la liste.

Intermédiaire :
• zip(range(3), map(...)) ou (i, i*i) équivalent à i**2 ici.
• Les tuples permettent de garder paire « valeur / carré » ensemble.

Expert :
• Liste de tuples souvent utilisée avant conversion en dict si les clés sont uniques.

Concepts clés :
• Compréhension avec tuple literal ; range(3).

Distinctions clés :
• Tuple (i, i**2) vs liste [i, i**2] (mutabilité et syntaxe).

Fonctionnement :
• Chaque itération crée un nouveau tuple ; la liste les référence.

Exécution étape par étape :
1. i=0 → (0,0).
2. i=1 → (1,1).
3. i=2 → (2,4).

Ordre des opérations :
• ** avant construction du tuple ; pas de partage entre tuples.

Cas d'utilisation courants :
• Tableaux de points (x, f(x)), export CSV simple.

Cas limites :
• range(3) exclut 3 ; pas de (3,9) ici.

Considérations de performance :
• Très léger pour trois éléments.

Exemples :
• [(i, i**3) for i in range(4)] pour les cubes 0…3.

Remarques :
• Vérifier que range(3) est bien 0,1,2 et non 1…3.`,

  1364: `La bonne réponse est [] : le générateur est entièrement consommé par la boucle for, puis list(gen) ne reçoit plus rien.

Débutant :
• gen = (x for x in range(3)) est un itérateur à usage unique.
• for _ in gen lit 0, 1, 2 puis épuise gen.
• list(gen) après coup construit une liste vide.

Intermédiaire :
• Différence clé avec list(range(3)) qui est réutilisable.
• Pour réitérer, il faut recréer le générateur.

Expert :
• Le protocole itérateur garde un état interne ; une fois StopIteration, fin.

Concepts clés :
• Générateur ; épuisement ; itérateur stateful.

Distinctions clés :
• gen expression vs liste en compréhension [x for x in range(3)].

Fonctionnement :
• La boucle for appelle __next__ jusqu’à épuisement ; gen reste vide après.

Exécution étape par étape :
1. Création du gen.
2. Trois itérations for consomment 0,1,2.
3. list(gen) → aucun élément restant → [].

Ordre des opérations :
• Consommation séquentielle stricte.

Cas d'utilisation courants :
• Flux volumineux, pipelines lazy ; attention à ne pas réutiliser par erreur.

Cas limites :
• Si la boucle break avant la fin, le reste peut encore être listé.

Considérations de performance :
• Lazy évite de stocker tous les éléments en mémoire d’un coup.

Exemples :
• g = (n*n for n in range(10)) ; sum(g) puis list(g) → [].

Remarques :
• Erreur fréquente en débogage : « pourquoi ma liste est vide ? » après double consommation.`,

  1365: `La bonne réponse est 14 : d = {0:0, 1:1, 2:4, 3:9} puis somme des valeurs 0+1+4+9.

Débutant :
• La compréhension de dict crée les paires clé → carré pour 0…3.
• La boucle for k, v in d.items() additionne toutes les v dans total.
• 0+1+4+9 = 14.

Intermédiaire :
• Plus court : sum(d.values()) ou sum(x**2 for x in range(4)).
• items() évite de re-indexer par clé.

Expert :
• Ordre d’itération sur dict en 3.7+ est d’insertion ; ici n’affecte pas la somme commutative.

Concepts clés :
• Dict comprehension ; agrégation par boucle.

Distinctions clés :
• Sommer les valeurs vs sommer les clés (autre exercice).

Fonctionnement :
• Construction complète de d avant la boucle ; total accumulé tour par tour.

Exécution étape par étape :
1. d construit en une expression.
2. total=0 puis +0, +1, +4, +9.
3. total vaut 14.

Ordre des opérations :
• Compréhension dict évaluée entièrement, puis itération .items().

Cas d'utilisation courants :
• Totaux par catégorie, énergie d’un histogramme de carrés.

Cas limites :
• Dict vide → total reste 0.

Considérations de performance :
• Une passe sur les items suffit ; éviter de refaire d[k] si v déjà disponible.

Exemples :
• total des valeurs après impôt : for k,v in prix.items(): total += v * taux[k].

Remarques :
• Vérifier les bornes de range(4) : clés 0,1,2,3 seulement.`,

  1366: `La bonne réponse est 24 : produit cumulatif 1×2×3×4 avec accumulateur product.

Débutant :
• product commence à 1 (élément neutre de la multiplication).
• 1*2=2, *3=6, *4=24.
• Dernière valeur affichée : 24.

Intermédiaire :
• functools.reduce ou math.prod en bibliothèque standard.
• Même schéma que une somme avec total=0 mais opération *.

Expert :
• Liste vide : convention souvent 1 pour prod vide en math, mais ici la boucle ne tourne pas → 1.

Concepts clés :
• Réduction / fold multiplicatif ; identité multiplicative 1.

Distinctions clés :
• Produit vs somme ; vs product initialisé à 0 (bug classique → 0).

Fonctionnement :
• Chaque n met à jour product par multiplication in-place.

Exécution étape par étape :
1. product=1, n=2 → 2.
2. n=3 → 6.
3. n=4 → 24.

Ordre des opérations :
• Ordre des nums respecté ; multiplication commutative ici mais pas toujours pour d’autres ops.

Cas d'utilisation courants :
• Factorielles partielles, volumes, probabilités composées.

Cas limites :
• Un zéro dans nums zéroise le produit dès qu’il est rencontré.

Considérations de performance :
• math.prod évite la boucle Python si disponible.

Exemples :
• Même code avec [2,2,2] → 8.

Remarques :
• Question 1385 reprend un produit similaire sur la même liste [1,2,3,4] — mémoriser le pattern.`,

  1367: `La bonne réponse est [0, 1, 1, 2, 3, 5] : quatre append ajoutent chaque fois la somme des deux derniers éléments.

Débutant :
• Départ [0, 1].
• append 1+0=1 → [0,1,1].
• puis 1+1=2, 2+1=3, 3+2=5.
• Quatre tours de boucle → six éléments au total.

Intermédiaire :
• fib[-1] et fib[-2] lisent toujours les deux derniers après chaque agrandissement.
• Équivalent itératif standard du Fibonacci.

Expert :
• Complexité temporelle O(k) pour k append ; espace O(k).

Concepts clés :
• Suite de Fibonacci ; indices négatifs de liste.

Distinctions clés :
• Quatre itérations vs « n premiers termes » : ici on part de [0,1] longueur 2.

Fonctionnement :
• Chaque _ ignore l’index ; seul le contenu de fib guide la récurrence.

Exécution étape par étape :
1. fib=[0,1] ; append 1.
2. append 2, puis 3, puis 5 sur les états intermédiaires.

Ordre des opérations :
• append agrandit la liste avant le tour suivant.

Cas d'utilisation courants :
• Algorithmes, tests de performance, exercices d’induction.

Cas limites :
• Mauvaise initialisation [1,1] changerait toute la suite.

Considérations de performance :
• fib[-1] en O(1) amorti ; éviter recalculs exponentiels récursifs naïfs.

Exemples :
• Générer 10 termes : range(8) avec même init si on veut 10 nombres.

Remarques :
• Compter les append : ici exactement quatre nombres ajoutés après [0,1].`,

  1368: `La bonne réponse est [5, 7, 9] : zip(*[[1,2,3],[4,5,6]]) transpose puis on additionne chaque paire.

Débutant :
• * décompose la liste extérieure en deux arguments de zip.
• zip aligne (1,4), (2,5), (3,6).
• a+b donne 5, 7, 9.

Intermédiaire :
• Sans étoile : zip([1,2,3],[4,5,6]) directement.
• * est utile quand les lignes sont dans une liste de listes.

Expert :
• zip s’arrête au plus court ; ici longueurs égales.

Concepts clés :
• Unpacking * ; zip ; somme paire à paire.

Distinctions clés :
• zip vs itertools.zip_longest pour longueurs inégales.

Fonctionnement :
• La compréhension consomme l’itérateur zip une paire à la fois.

Exécution étape par étape :
1. zip produit (1,4) → 5.
2. (2,5) → 7.
3. (3,6) → 9.

Ordre des opérations :
• Évaluation de la liste interne, puis zip, puis compréhension.

Cas d'utilisation courants :
• Addition de vecteurs, fusion colonne par colonne de matrices lignes.

Cas limites :
• Si une ligne est plus courte, zip tronque silencieusement.

Considérations de performance :
• zip est lazy ; list(...) autour matérialiserait si besoin.

Exemples :
• [a*b for a,b in zip(row1, row2)] pour produit terme à terme.

Remarques :
• Bien visualiser la transposition : lignes → colonnes pour zip(*).`,

  1369: `La bonne réponse est 2 : setdefault n’insère la clé qu’à la première occurrence ; le premier « l » est à l’index 2 dans « hello ».

Débutant :
• enumerate("hello") donne (0,h), (1,e), (2,l), (3,l), (4,o).
• À la première « l », result n’a pas encore « l » → setdefault enregistre i=2.
• À la seconde « l », la clé existe → setdefault ne change rien.

Intermédiaire :
• dict.get ne convient pas seul si on veut « première position seulement » sans test if.
• defaultdict(list) autre style pour accumuler, pas pour « première seule ».

Expert :
• setdefault retourne la valeur existante ou définit et retourne la valeur par défaut.

Concepts clés :
• setdefault ; première occurrence ; enumerate.

Distinctions clés :
• Première vs dernière occurrence (pour la dernière, il faudrait écraser à chaque fois).

Fonctionnement :
• Parcours gauche-droite de la chaîne ; ordre des caractères fixe le gagnant.

Exécution étape par étape :
1. h, e : nouvelles clés avec leurs indices.
2. Premier l : clé 'l' → 2.
3. Second l : 'l' déjà présent → inchangé.

Ordre des opérations :
• setdefault teste présence de clé avant assignation.

Cas d'utilisation courants :
• Index du premier token, ancrage de spans en parsing simple.

Cas limites :
• Chaîne sans 'l' : KeyError si on lit result["l"] après coup.

Considérations de performance :
• O(n) sur la longueur du mot.

Exemples :
• Même idée pour premier espace : setdefault(' ', i).

Remarques :
• Ne pas confondre avec la position du second « l » (3).`,

  1370: `La bonne réponse est [2, 4, 1, 7] : une passe de bubble sort sur [4,2,7,1] — deux swaps.

Débutant :
• i=0 : 4>2 → échange → [2,4,7,1].
• i=1 : 4>7 ? non.
• i=2 : 7>1 → échange → [2,4,1,7].

Intermédiaire :
• Un passage ne trie pas complètement ; le maximum tend à « remonter » vers la fin.
• Ici 7 finit à droite après un swap avec 1.

Expert :
• Tri complet exigerait plusieurs passes ou autre algorithme.

Concepts clés :
• Comparaison adjacente ; tuple swap en Python.

Distinctions clés :
• État après une passe vs liste entièrement triée.

Fonctionnement :
• range(len-1) évite nums[i+1] hors limites.

Exécution étape par étape :
1. Swap (0,1).
2. Pas de swap (1,2).
3. Swap (2,3).

Ordre des opérations :
• Indices croissants ; la liste mutée sert aux comparaisons suivantes.

Cas d'utilisation courants :
• Pédagogie algorithmique ; rare en prod pour grandes n.

Cas limites :
• Liste déjà triée : aucun swap.

Considérations de performance :
• O(n) par passe ; tri bulle complet O(n²).

Exemples :
• Même code sur [1,2,3,4] laisse la liste inchangée.

Remarques :
• Le « plus grand » de la passe n’est pas toujours en dernière position si plusieurs swaps — ici 7 arrive bien à l’index 3.`,

  1371: `La bonne réponse est {'a': 4, 'b': 2} : la clé « a » reçoit 1 puis 3 (total 4), « b » reçoit 2.

Débutant :
• d.get(k, 0) lit l’ancienne somme ou 0.
• ('a',1) → d['a']=1 ; ('b',2) → d['b']=2 ; ('a',3) → d['a']=1+3=4.

Intermédiaire :
• Pattern d’agrégation identique au compteur mais avec des valeurs arbitraires à additionner.
• defaultdict(int) évite le get explicite.

Expert :
• Si les valeurs n’étaient pas additives, il faudrait une autre règle de fusion.

Concepts clés :
• Accumulation par clé ; get avec défaut 0 pour somme.

Distinctions clés :
• Remplacer vs accumuler : ici toujours +v sur l’existant.

Fonctionnement :
• Chaque paire (k,v) met à jour une seule entrée du dictionnaire.

Exécution étape par étape :
1. Vide → après ('a',1) : a=1.
2. ('b',2) : b=2.
3. ('a',3) : a=4.

Ordre des opérations :
• Ordre des tuples dans la liste contrôle l’ordre d’accumulation.

Cas d'utilisation courants :
• Ventes par produit, scores cumulés par équipe.

Cas limites :
• Clés non hashables interdites (ici str ok).

Considérations de performance :
• Dict O(1) amorti par mise à jour.

Exemples :
• Fusionner des logs : même boucle sur liste de (user, delta).

Remarques :
• Vérifier que 1+3 fait bien 4 pour la clé répétée « a ».`,

  1372: `La bonne réponse est {'a': 3, 'b': 2} : result.update(d1) puis update(d2) ; la seconde update écrase « a ».

Débutant :
• result commence vide.
• Après d1 : {'a':1}.
• Après d2 : 'a' vaut 3, 'b' vaut 2.

Intermédiaire :
• Même sémantique que {**d1, **d2} ou d1 | d2 (3.9+) pour cet enchaînement.
• update modifie sur place et retourne None.

Expert :
• Ordre des updates détermine le gagnant en cas de conflit de clés.

Concepts clés :
• dict.update ; fusion avec écrasement des clés communes.

Distinctions clés :
• Première valeur vs dernière valeur pour une même clé.

Fonctionnement :
• Chaque update parcourt le dict argument et écrit dans result.

Exécution étape par étape :
1. result={}.
2. update(d1) → a:1.
3. update(d2) → a remplacé par 3, b ajouté à 2.

Ordre des opérations :
• Les deux updates s’exécutent séquentiellement, jamais en parallèle.

Cas d'utilisation courants :
• Fusion de configuration (defaults puis overrides).

Cas limites :
• update avec itérable de paires ou autre mapping accepté aussi.

Considérations de performance :
• Linéaire en la taille des dicts fusionnés.

Exemples :
• options = {}; options.update(base); options.update(user).

Remarques :
• Si l’ordre était inversé (d2 puis d1), « a » serait 1.`,

  1373: `La bonne réponse est [1, 3] : setdefault('a', []) crée une liste vide au premier « a », puis append 1 puis 3.

Débutant :
• ('a',1) : pas de clé 'a' → liste [] puis append 1 → [1].
• ('b',2) : clé 'b' → [2].
• ('a',3) : 'a' existe → même liste → append 3 → [1,3].

Intermédiaire :
• Même pattern que group-by ; ici valeurs pour la clé « a » seulement demandées.
• collections.defaultdict(list) évite setdefault.

Expert :
• setdefault retourne la liste (nouvelle ou existante) ; append mute cette liste.

Concepts clés :
• Regroupement par clé ; listes mutables comme valeurs de dict.

Distinctions clés :
• Liste partagée par clé vs nouvelle liste à chaque fois (ici une liste par clé).

Fonctionnement :
• Chaque append modifie l’objet liste référencé par groups['a'].

Exécution étape par étape :
1. Premier tuple a : création liste et append 1.
2. b : autre liste.
3. Second a : réutilisation liste de a, append 3.

Ordre des opérations :
• setdefault puis append à chaque ligne de items.

Cas d'utilisation courants :
• Inverser un index, regrouper transactions par compte.

Cas limites :
• Oublier [] dans setdefault mettrait None — erreur au append.

Considérations de performance :
• append amorti O(1) ; setdefault O(1) amorti.

Exemples :
• Regrouper notes par matière avec setdefault(matière, []).

Remarques :
• groups["b"] serait [2] — seule la clé « a » est interrogée ici.`,

  1374: `La bonne réponse est [6, 9, 12] : fenêtres de longueur 3 qui glissent sur [1,2,3,4,5].

Débutant :
• len(nums)-2 vaut 3 → i = 0,1,2.
• nums[0:3] somme 6 ; [1:4] → 9 ; [2:5] → 12.

Intermédiaire :
• Nombre de fenêtres = len - taille + 1 = 5 - 3 + 1 = 3.
• sum sur slice copie une sous-liste à chaque fois (simple mais pas optimal pour gigantesque n).

Expert :
• Fenêtre glissante O(n) possible en maintenant total += entrée - sortie.

Concepts clés :
• Slice nums[i:i+3] ; sum ; boucle sur départ de fenêtre.

Distinctions clés :
• Longueur de fenêtre 3 codée en dur dans i+3.

Fonctionnement :
• Chaque i fixe le début ; la slice extrait trois éléments contigus.

Exécution étape par étape :
1. i=0 → [1,2,3] → 6.
2. i=1 → [2,3,4] → 9.
3. i=2 → [3,4,5] → 12.

Ordre des opérations :
• range borné pour éviter slice au-delà de la fin.

Cas d'utilisation courants :
• Moyennes mobiles, lissage de séries, vision par patch.

Cas limites :
• len(nums) < 3 : range vide, sums reste [].

Considérations de performance :
• sum(slice) répété coûte O(taille fenêtre) par i.

Exemples :
• Fenêtre 2 : range(len(nums)-1) et i:i+2.

Remarques :
• Vérifier que ce n’est pas len(nums)-3 par erreur (ici c’est -2 pour trois éléments).`,

  1375: `La bonne réponse est [3, 4, 5, 1, 2] : deux rotations gauche via pop(0) puis append.

Débutant :
• Départ [1,2,3,4,5].
• Premier tour : pop(0) enlève 1, append → [2,3,4,5,1].
• Second : pop(0) enlève 2 → [3,4,5,1,2].

Intermédiaire :
• pop(0) est O(n) sur liste Python ; deque.rotate plus efficace en production.
• Deux rotations = décaler le bloc initial de deux positions.

Expert :
• Équivalent conceptuel : lst[2:]+lst[:2] pour k=2 sur cette liste.

Concepts clés :
• Rotation ; pop en tête ; append en queue.

Distinctions clés :
• Rotation gauche vs droite (pop fin vs pop début autre code).

Fonctionnement :
• Chaque itération mute lst ; la suivante voit la nouvelle tête.

Exécution étape par étape :
1. Retirer 1, queue 1.
2. Retirer 2, queue 2.
3. État final [3,4,5,1,2].

Ordre des opérations :
• Deux tours de range(2) strictement séquentiels.

Cas d'utilisation courants :
• Tampons circulaires naïfs, puzzles de tableau.

Cas limites :
• Liste vide : pop lève IndexError.

Considérations de performance :
• Éviter pop(0) répété sur grandes listes.

Exemples :
• Une seule rotation de [1,2,3] → [2,3,1].

Remarques :
• Ne pas confondre avec rotate droite (appendleft côté deque).`,

  1376: `La bonne réponse est [1, 2] : chaque dict interne contribue ses valeurs via extend sur vals.

Débutant :
• data.values() donne {'a':1} puis {'b':2}.
• inner.values() → [1] puis [2].
• extend ajoute élément par élément : vals devient [1,2].

Intermédiaire :
• extend vs append : append aurait mis des objets liste, pas les entiers seuls.
• Platitude du résultat vient d’extend.

Expert :
• Si un inner avait plusieurs valeurs, toutes seraient étendues dans l’ordre.

Concepts clés :
• Dict imbriqué ; values() ; extend pour aplatir.

Distinctions clés :
• Liste des dicts internes vs liste des valeurs numériques.

Fonctionnement :
• Boucle sur les dicts enfants ; extraction des valeurs sans toucher aux clés internes 'a','b'.

Exécution étape par étape :
1. Premier inner : extend([1]).
2. Second inner : extend([2]).
3. vals == [1,2].

Ordre des opérations :
• Ordre de data.values() suit l’ordre d’insertion en 3.7+.

Cas d'utilisation courants :
• Aplatir JSON hiérarchique à un niveau, métriques agrégées.

Cas limites :
• data vide → vals reste [].

Considérations de performance :
• extend en lot réduit les append Python individuels.

Exemples :
• Même code si inner = {'x':10,'y':20} → [10,20] pour cette entrée.

Remarques :
• Ce n’est pas ['a','b'] : on lit .values(), pas les clés internes.`,

  1377: `La bonne réponse est ['num', 'op', 'num'] : classification caractère par caractère de "3+5".

Débutant :
• '3' n’est pas dans "+-*" → 'num'.
• '+' est dans la chaîne d’opérateurs → 'op'.
• '5' → 'num'.

Intermédiaire :
• in teste sous-chaîne pour un caractère unique : membership d’un seul signe.
• Base d’un tokenizer rudimentaire.

Expert :
• Ordre du ternaire : condition testée avant branches.

Concepts clés :
• Compréhension ; opérateur ternaire Python ; membership in.

Distinctions clés :
• Classer le caractère vs garder le caractère lui-même.

Fonctionnement :
• Itération gauche-droite sur la chaîne littérale "3+5".

Exécution étape par étape :
1. ch='3' → num.
2. ch='+' → op.
3. ch='5' → num.

Ordre des opérations :
• Pas d’espace dans la chaîne : trois caractères seulement.

Cas d'utilisation courants :
• Lexers minimalistes, validation de format.

Cas limites :
• '*' absent de "+-*" ? Ici il est présent dans la chaîne de test.

Considérations de performance :
• Négligeable pour trois caractères.

Exemples :
• Étendre avec elif pour 'par' pour parenthèses.

Remarques :
• Ne pas renvoyer les chiffres '3','5' : l’énoncé demande les étiquettes.`,

  1378: `La bonne réponse est 10 : somme jusqu’au sentinel 0 exclus — 3+7 puis break.

Débutant :
• x=3 → total=3.
• x=7 → total=10.
• x=0 → break avant d’ajouter quoi que ce soit de plus.

Intermédiaire :
• 5 et 2 ne sont jamaus lus après le break.
• Pattern « arrêt sur marqueur ».

Expert :
• Sentinel 0 ambigu si 0 est aussi donnée légitime — le contexte métier importe.

Concepts clés :
• break ; accumulateur ; valeur sentinelle.

Distinctions clés :
• Total avec break vs somme de toute la liste (17 sans break).

Fonctionnement :
• Chaque itération teste avant d’ajouter ; le 0 déclenche sortie immédiate.

Exécution étape par étape :
1. 3 lu, total 3.
2. 7 lu, total 10.
3. 0 lu, condition break, boucle finie.

Ordre des opérations :
• break court-circuite le += pour les éléments suivants.

Cas d'utilisation courants :
• Lecture jusqu’à EOF symbolique, parsing de flux.

Cas limites :
• Liste sans 0 : somme de tout.

Considérations de performance :
• Un seul passage jusqu’au break.

Exemples :
• Sentinel None pour arrêter sur trou dans iterable option.

Remarques :
• 3+7=10, pas 17 — piège fréquent si on oublie le break.`,

  1379: `La bonne réponse est [True, False, True] : comparaisons adjacentes sur [1,3,2,4].

Débutant :
• i=0 : nums[0]<nums[1] → 1<3 True.
• i=1 : 3<2 False.
• i=2 : 2<4 True.

Intermédiaire :
• len(nums)-1 comparaisons pour n éléments.
• zip(nums, nums[1:]) est une variante idiomatique.

Expert :
• all(...) sur cette liste testerait si strictement croissant.

Concepts clés :
• Paire consécutive ; range sur indices ; booléens dans liste.

Distinctions clés :
• Croissant strict vs non strict (<=).

Fonctionnement :
• Chaque i sélectionne nums[i] et nums[i+1] sans modifier nums.

Exécution étape par étape :
1. Indices 0,1,2 seulement.
2. Trois booléens produits dans l’ordre.

Ordre des opérations :
• Évaluation paresseuse nulle ici ; chaque comparaison indépendante.

Cas d'utilisation courants :
• Détecter une bosse ou une décroissance locale dans une série.

Cas limites :
• Liste de longueur 1 : range(0) → liste vide de comparaisons.

Considérations de performance :
• O(n) comparaisons linéaires.

Exemples :
• Détection tri : all(nums[i] <= nums[i+1] for i in range(len(nums)-1)).

Remarques :
• Le False au milieu vient du pic 3 puis baisse vers 2.`,

  1380: `La bonne réponse est [1, 2, 4, 8, 16, 32] : 2**i pour i de 0 à 5 inclus.

Débutant :
• range(6) → 0,1,2,3,4,5.
• 2**0=1, **1=2, **2=4, **3=8, **4=16, **5=32.

Intermédiaire :
• Relation avec décalage binaire : 1 << i pour entiers.
• Géométrique de raison 2.

Expert :
• Overflow n’existe pas en int Python ; croissance illimitée en précision.

Concepts clés :
• Exposant ** ; range exclusif de la borne supérieure.

Distinctions clés :
• Commencer à 1 (liste [2,4,...]) serait range(1,7) ou autre.

Fonctionnement :
• Compréhension mappe chaque i vers une puissance de deux.

Exécution étape par étape :
1. Six valeurs de i successivement.
2. Six puissances calculées et collectées.

Ordre des opérations :
• ** prioritaire sur la construction du littéral liste.

Cas d'utilisation courants :
• Tailles de buffers, exponentiation rapide pédagogique.

Cas limites :
• i négatif hors range ici.

Considérations de performance :
• ** sur petits entiers très rapide.

Exemples :
• [2**i for i in range(4)] → [1,2,4,8].

Remarques :
• Six éléments, pas sept : range(6) a six valeurs.`,

  1381: `La bonne réponse est '0:a-1:b-2:c' : enumerate puis f-string, puis join avec '-'.

Débutant :
• enumerate(["a","b","c"]) → (0,a), (1,b), (2,c).
• f"{i}:{v}" donne '0:a', '1:b', '2:c'.
• "-".join les relie avec tirets.

Intermédiaire :
• join exige des str ; f-string garantit le type texte.
• Ordre index puis valeur comme dans l’énoncé.

Expert :
• join sur générateur str acceptable : join(map(...)) évite liste intermédiaire.

Concepts clés :
• enumerate ; f-string ; str.join.

Distinctions clés :
• Séparateur '-' vs ' ' ou ':' global différent.

Fonctionnement :
• Compréhension construit la liste de morceaux, join une seule concaténation efficace.

Exécution étape par étape :
1. Liste de trois fragments formatés.
2. join insère '-' entre eux.

Ordre des opérations :
• enumerate puis compréhension puis join de gauche à droite.

Cas d'utilisation courants :
• Clés composites textuelles, journaux, export léger.

Cas limites :
• Liste vide → join → chaîne vide ''.

Considérations de performance :
• join O(total length) mieux que += répété.

Exemples :
• Même pattern pour horodatage : f"{t}:{msg}".

Remarques :
• Respecter l’ordre i:v comme dans la réponse attendue.`,

  1382: `La bonne réponse est 'ac' : concaténation de chaînes par clé avec get(k, "").

Débutant :
• (1,'a') : ''+'a'='a'.
• (2,'b') : clé 2 → 'b'.
• (1,'c') : get(1,'')='a' → 'a'+'c'='ac'.

Intermédiaire :
• Même squelette que somme avec 0 mais neutre '' pour texte.
• defaultdict(str) alternative.

Expert :
• Complexité cumulative des concaténations peut devenir quadratique si énormément d’ajouts — list + join en prod.

Concepts clés :
• Accumulation str ; dict.get avec défaut chaîne vide.

Distinctions clés :
• d[1] final vs d[2] qui serait 'b'.

Fonctionnement :
• Chaque tuple met à jour une entrée par concaténation.

Exécution étape par étape :
1. d[1]='a'.
2. d[2]='b'.
3. d[1]='ac'.

Ordre des opérations :
• Deuxième tuple sur clé 1 lit l’ancienne valeur 'a'.

Cas d'utilisation courants :
• Assembler des morceaux HTML/SQL par id, journaux concaténés.

Cas limites :
• Clés non str en clé dict ici int — autorisé.

Considérations de performance :
• Préférer list par clé puis ''.join si très long.

Exemples :
• d[k] = d.get(k, "") + sep + v avec séparateur.

Remarques :
• On demande d[1], pas d[2].`,

  1383: `La bonne réponse est 'ABCDE' : chr(i) pour i de 65 à 69 (exclu 70).

Débutant :
• range(65, 70) produit 65,66,67,68,69.
• chr(65)='A', …, chr(69)='E'.
• join sans séparateur colle les cinq lettres.

Intermédiaire :
• ord('A')==65 ; fonction inverse chr.
• 70 exclu donc pas de 'F'.

Expert :
• Unicode au-delà d’ASCII : chr accepte tout point de code valide.

Concepts clés :
• chr ; range half-open ; join.

Distinctions clés :
• Majuscules ASCII vs minuscules (97 départ).

Fonctionnement :
• Compréhension matérialise les caractères avant join.

Exécution étape par étape :
1. Cinq entiers consécutifs.
2. Cinq caractères.
3. Une chaîne finale ABCDE.

Ordre des opérations :
• chr appliqué à chaque i avant concaténation.

Cas d'utilisation courants :
• Générer alphabets, ROT basique, tests de charset.

Cas limites :
• chr hors plage Unicode lève ValueError.

Considérations de performance :
• Négligeable pour cinq caractères.

Exemples :
• minuscules : range(97, 102) → 'abcde'.

Remarques :
• Ne pas inclure 70 : la borne haute du range est exclusive.`,

  1384: `La bonne réponse est [3, 1, 2, 4] : premier passage garde l’ordre d’apparition, set pour détecter les doublons.

Débutant :
• 3 nouveau → unique et seen {3}.
• 1 → [3,1].
• 2 → [3,1,2].
• Second 1 et 3 ignorés.
• 4 → [3,1,2,4].

Intermédiaire :
• list(dict.fromkeys(items)) plus court en 3.7+ pour même effet.
• seen.add en O(1) amorti.

Expert :
• Préserve l’ordre contrairement à sorted(set(...)) qui trie.

Concepts clés :
• Déduplication ordonnée ; ensemble auxiliaire.

Distinctions clés :
• Première occurrence vs dernière (ici premières seulement).

Fonctionnement :
• x not in seen avant add garantit unicité de traitement.

Exécution étape par étape :
1. Parcours séquentiel de items.
2. Append seulement si x jamais vu.
3. Résultat final longueur 4.

Ordre des opérations :
• Un seul passage sur items.

Cas d'utilisation courants :
• Filtrer logs en gardant chronologie, UI de sélection unique.

Cas limites :
• Éléments non hashables ne peuvent pas aller dans set.

Considérations de performance :
• Linéaire temps, espace O(k) pour k uniques.

Exemples :
• Garder premiers mots distincts d’une phrase tokenisée.

Remarques :
• [1,2,3,4] serait l’ordre trié des uniques, pas celui demandé.`,

  1385: `La bonne réponse est 24 : même idée que la question produit sur [1,2,3,4] — 1×2×3×4.

Débutant :
• product démarre à 1.
• Multiplications successives jusqu’à 24.

Intermédiaire :
• Identique structurellement à 1366 ; renforce le pattern reduce multiplicatif.
• math.prod([1,2,3,4]) direct.

Expert :
• Si nums contenait 0, produit immédiat 0.

Concepts clés :
• Produit itéré ; neutre 1.

Distinctions clés :
• Cette question explicite nums identiques à 1366 mais formulation « cumulative product ».

Fonctionnement :
• Boucle for x in nums : product *= x.

Exécution étape par étape :
1. product=1, x=1 → *=1 → 1.
2. x=2 → 2 ; x=3 → 6 ; x=4 → 24.

Ordre des opérations :
• Initialisation product=1 avant boucle ; *= appliqué pour chaque x dans l’ordre de nums.

Cas d'utilisation courants :
• Arrangements, volumes discrets, probabilités.

Cas limites :
• Liste vide : product reste 1.

Considérations de performance :
• Constant pour quatre entiers.

Exemples :
• Ajouter 5 en fin de liste → 120.

Remarques :
• Aligné sur l’énoncé nums = [1,2,3,4] du fichier source.`,

  1386: `La bonne réponse est [0, 1, 2, 10, 11, 12] : boucle externe sur deux range, interne append chaque x.

Débutant :
• Premier r = range(3) → 0,1,2.
• Second r = range(10,13) → 10,11,12.
• result concatène dans cet ordre.

Intermédiaire :
• itertools.chain(range(3), range(10,13)) idée équivalente.
• Liste de range objets : pas d’aplatissement automatique sans boucle.

Expert :
• Généralise à N plages dans une liste de ranges.

Concepts clés :
• Boucles imbriquées sur itérables de itérables ; range bornes.

Distinctions clés :
• [range(3), range(10,13)] comme objets vs leurs éléments aplat ici.

Fonctionnement :
• r parcourt deux objets range distincts successivement.

Exécution étape par étape :
1. x prend 0,1,2.
2. Puis x prend 10,11,12.
3. result a six entiers dans l’ordre.

Ordre des opérations :
• Ordre des ranges dans la liste [range(3), range(10,13)] fixe l’ordre global.

Cas d'utilisation courants :
• Traiter plusieurs segments d’indices non contigus.

Cas limites :
• Si la liste de ranges était vide, rien n’est ajouté.

Considérations de performance :
• Faible coût ; éviter de recréer ranges dans boucle chaude inutilement.

Exemples :
• Ajouter range(20,22) dans la liste pour un troisième bloc.

Remarques :
• Ne pas intercaler 3 après 2 : tout range(3) vient avant range(10,13).`,

  1387: `La bonne réponse est [[1, 2], [3, 4], [5, 6]] : pas de 2 sur range(0, len(data), 2) avec slices de longueur 2.

Débutant :
• len(data)=6 ; i = 0,2,4.
• data[0:2]=[1,2] ; [2:4]=[3,4] ; [4:6]=[5,6].

Intermédiaire :
• Dernier morceau plus court si longueur impaire — ici paire, trois blocs pleins.
• zip_longest si besoin de padding.

Expert :
• Généraliser chunk size n : range(0, len, n) et i:i+n.

Concepts clés :
• Chunking ; slice ; pas du range égal à taille de bloc.

Distinctions clés :
• Trois paires vs deux triplets (autre pas).

Fonctionnement :
• Chaque append ajoute une sous-liste copiée par slice.

Exécution étape par étape :
1. i=0 slice longueur 2.
2. i=2 idem.
3. i=4 idem.

Ordre des opérations :
• Slices ne dépassent pas fin de liste : Python tronque proprement (pas ici).

Cas d'utilisation courants :
• Pagination, batch processing, réseau par paquets.

Cas limites :
• data vide : range vide → chunks [].

Considérations de performance :
• sum sur gros chunks peut coûter ; ici léger.

Exemples :
• Pas 3 sur [1..9] → [[1,2,3], [4,5,6], [7,8,9]].

Remarques :
• Pas de [] final : range(0,6,2) s’arrête à 4 sans 6 pour démarrer chunk vide.`,

  1388: `La bonne réponse est ['hi', 'hey'] : groupement par première lettre, clé 'h'.

Débutant :
• "hi" → clé 'h' liste ['hi'].
• "hey" → même clé, append → ['hi','hey'].
• "bye" → clé 'b', pas demandée.

Intermédiaire :
• w[0] suppose mot non vide — ici ok.
• setdefault comme dans autres questions de groupement.

Expert :
• Indexation Unicode : première « lettre » peut être un surrogate pair rare ; hors scope ici.

Concepts clés :
• w[0] ; setdefault(list) ; agrégation par préfixe.

Distinctions clés :
• d["h"] vs d["b"] contenu différent.

Fonctionnement :
• Un seul dict partagé ; listes par lettre initiale.

Exécution étape par étape :
1. hi : création liste sous 'h'.
2. hey : append sous 'h'.
3. bye : clé 'b' séparée.

Ordre des opérations :
• Ordre des mots dans words impose l’ordre dans les listes.

Cas d'utilisation courants :
• Index inversé pour autocomplétion par préfixe.

Cas limites :
• Mot vide : w[0] lève IndexError.

Considérations de performance :
• Linéaire en nombre de mots.

Exemples :
• Regrouper par longueur : clé len(w).

Remarques :
• Réponse attendue liste de deux chaînes, pas une seule.`,

  1389: `La bonne réponse est [1, 'x', 2, 'y', 3, 'z'] : extend([a[i], b[i]]) à chaque indice.

Débutant :
• i=0 : extend [1,'x'].
• i=1 : [2,'y'].
• i=2 : [3,'z'].
• Alternance stricte dans result.

Intermédiaire :
• Variante : [v for pair in zip(a,b) for v in pair].
• len(a) suppose a et b même longueur — ici 3.

Expert :
• Si longueurs différentes, range(len(a)) peut provoquer IndexError sur b[i].

Concepts clés :
• Interleave ; extend ; index parallèle.

Distinctions clés :
• Flat liste vs liste de paires [[1,'x'], ...].

Fonctionnement :
• Chaque tour ajoute deux éléments consécutifs à result.

Exécution étape par étape :
1. Après i=0 : [1,'x'].
2. Après i=1 : … +2,'y'.
3. Après i=2 : … +3,'z'.

Ordre des opérations :
• extend évalue la liste à deux éléments puis étend.

Cas d'utilisation courants :
• Fusionner colonnes, formats entrelacés pour I/O.

Cas limites :
• a vide : boucle vide, result vide.

Considérations de performance :
• zip serait plus sûr pour longueurs égales sans index manuel.

Exemples :
• Interleave trois listes : boucle sur zip(a,b,c) avec extend.

Remarques :
• Types mixtes int/str autorisés dans une même liste Python.`,

  1390: `La bonne réponse est 3 : histogramme sur "banana" pour la lettre "a".

Débutant :
• Même schéma que counts avec get(ch,0)+1.
• Trois « a » dans banana aux positions impaires en index 0-based : indices 1,3,5 → trois occurrences.

Intermédiaire :
• hist["a"] lit après boucle complète.
• Counter('banana')["a"] identique.

Expert :
• Espace O(alphabet) pour lettres minuscules limitées.

Concepts clés :
• Fréquence ; dict ; chaîne banana spécifique.

Distinctions clés :
• hist["a"] vs hist["n"] qui vaut 2.

Fonctionnement :
• Chaque caractère met à jour son compteur indépendamment.

Exécution étape par étape :
1. Parcours des six lettres.
2. a incrémenté trois fois.
3. Lecture hist["a"] → 3.

Ordre des opérations :
• Ordre des lettres du mot fixe les étapes d’incrément.

Cas d'utilisation courants :
• NLP basique, jeux de lettres, validation.

Cas limites :
• Clé absente si mot sans 'a' — KeyError à la lecture.

Considérations de performance :
• O(longueur mot).

Exemples :
• Compter espaces dans une phrase avec même boucle.

Remarques :
• Aligné sur la chaîne littérale "banana" de l’énoncé.`,

  1391: `La bonne réponse est [0, 6] : x divisible par 2 et par 3 ⇔ multiple de 6 dans range(10).

Débutant :
• Tests x%2==0 et x%3==0.
• 0 : oui (0 divisible par tout entier non nul en Python pour %).
• 6 : oui. 12 hors range.

Intermédiaire :
• x % 6 == 0 plus direct.
• and short-circuit : si premier test faux, second non évalué.

Expert :
• Attention : 0 est inclus — oubli fréquent.

Concepts clés :
• and logique ; divisibilité ; compréhension filtrante.

Distinctions clés :
• [6] seul oublierait 0 ; [0,3,6,9] confondrait or avec and.

Fonctionnement :
• range(10) génère 0…9 ; filtre applique les deux congruences.

Exécution étape par étape :
1. 0 passe.
2. 6 passe.
3. Autres multiples de 6 absents avant 12.

Ordre des opérations :
• Pour chaque x, évaluation paresseuse possible sur and.

Cas d'utilisation courants :
• Critères multiples sur grille de dates, filtrage combiné.

Cas limites :
• Si range commençait à 1, 0 disparaîtrait.

Considérations de performance :
• Test unique %6 plus lisible en production.

Exemples :
• Nombres pairs et >5 : x%2==0 and x>5.

Remarques :
• lcm(2,3)=6 clarifie la logique mathématique.`,

  1392: `La bonne réponse est {'b': 2, 'c': 3} : compréhension de dict filtre les paires avec v > 1.

Débutant :
• ('a',1) exclu car 1 > 1 faux.
• ('b',2) et ('c',3) passent.

Intermédiaire :
• Ordre d’insertion conservé en 3.7+ dans le dict résultat.
• Équivalent : {k:v for k,v in d.items() if v>1} sur un dict nommé intermédiaire.

Expert :
• Filtrer avant ou après création du gros dict change coût mémoire.

Concepts clés :
• Dict comprehension ; if final ; items().

Distinctions clés :
• Sous-ensemble de paires vs transformation des valeurs.

Fonctionnement :
• Itération sur le dict littéral anonyme du énoncé via .items().

Exécution étape par étape :
1. Parcours trois paires.
2. Seulement deux retenues.
3. Nouveau dict deux entrées.

Ordre des opérations :
• Évaluation du dict source puis construction cible.

Cas d'utilisation courants :
• Nettoyer config, enlever entrées sous seuil.

Cas limites :
• Si aucune valeur >1, dict vide.

Considérations de performance :
• Un seul passage sur les items.

Exemples :
• Garder scores > seuil : if v >= pass_mark.

Remarques :
• 'a' disparaît entièrement du résultat.`,

  1393: `La bonne réponse est [(0, 'x'), (1, 'y'), (2, 'z')] : enumerate sur la chaîne "xyz".

Débutant :
• enumerate produit (0,'x'), (1,'y'), (2,'z').
• La compréhension recopie ces tuples dans une liste.

Intermédiaire :
• list(enumerate("xyz")) équivalent direct.
• Pas d’inversion (car, index) ici.

Expert :
• start optionnel d’enumerate si indices doivent commencer à 1.

Concepts clés :
• enumerate ; chaîne comme iterable de caractères.

Distinctions clés :
• Tuple (i,c) vs str de longueur 2 ambiguë — ici tuple explicite.

Fonctionnement :
• Un tuple neuf par caractère, indice croissant automatique.

Exécution étape par étape :
1. Trois itérations enumerate.
2. Liste de trois paires ordonnées.

Ordre des opérations :
• Gauche-droite de "xyz".

Cas d'utilisation courants :
• Affichage numéroté, édition avec curseur, diff.

Cas limites :
• Chaîne vide → liste vide.

Considérations de performance :
• O(n) mémoire pour n caractères.

Exemples :
• enumerate("xyz", start=1) pour 1-based.

Remarques :
• Respecter l’ordre des éléments du tuple (index, lettre).`,

  1394: `La bonne réponse est ['HELLO', 'WORLD'] : split puis upper() sur chaque mot.

Débutant :
• split → ['hello','world'].
• upper met tout en majuscules.
• Liste des deux mots criers.

Intermédiaire :
• "hello world".upper() donnerait 'HELLO WORLD' en une chaîne unique, pas la liste demandée.
• Compréhension mot à mot.

Expert :
• casfold() pour comparaisons insensibles à la casse unicode, pas pour affichage brut.

Concepts clés :
• split ; str.upper ; liste en compréhension.

Distinctions clés :
• Liste de str vs une seule str jointe.

Fonctionnement :
• upper appliqué à chaque token indépendamment.

Exécution étape par étape :
1. Token hello → HELLO.
2. Token world → WORLD.

Ordre des opérations :
• split d’abord sinon upper sur la phrase entière changerait la structure.

Cas d'utilisation courants :
• Normalisation pour clés d’index, bannières ASCII.

Cas limites :
• Multiples espaces : split sans arg groupe les séparateurs.

Considérations de performance :
• Très bon pour deux mots.

Exemples :
• [w.lower() for w in s.split()] pour casse minimale.

Remarques :
• Ce n’est pas title() : toutes les lettres deviennent majuscules.`,

  1395: `La bonne réponse est {'name': 'Alice', 'age': 30} : zip associe clés et valeurs puis dict construit le mapping.

Débutant :
• zip(["name","age"],["Alice",30]) paire dans l’ordre.
• dict prend ces paires comme items.

Intermédiaire :
• Si une liste est plus longue, zip tronque — ici égales longueur 2.
• Alternative dict(zip(...)) idiomatique.

Expert :
• Clés dupliquées dans le premier iterable : la dernière gagne si étendu — pas le cas.

Concepts clés :
• zip ; dict constructeur depuis paires.

Distinctions clés :
• dict de clés strings vs inversion des rôles (autre réponse piège).

Fonctionnement :
• Évaluation zip lazy puis consommation par dict.

Exécution étape par étape :
1. Première paire name→Alice.
2. Seconde age→30.
3. dict final deux entrées.

Ordre des opérations :
• Les littéraux listes évalués avant zip.

Cas d'utilisation courants :
• Lire CSV en colonnes parallèles, construire enregistrements.

Cas limites :
• zip vide → dict vide.

Considérations de performance :
• Linéaire en nombre de paires.

Exemples :
• dict(zip(keys, values)) avec listes lues depuis fichier.

Remarques :
• 30 reste int dans le dict, pas chaîne.`,

  1396: `La bonne réponse est [[0], [0, 1], [0, 1, 2], [0, 1, 2, 3]] : compréhension externe sur i, interne range(i).

Débutant :
• i=1 → inner range(1) → [0].
• i=2 → [0,1].
• i=3 → [0,1,2].
• i=4 → [0,1,2,3].

Intermédiaire :
• La borne haute externe range(1,5) exclut i=5.
• j variable interne omise dans l’énoncé : seules les valeurs 0…i-1 apparaissent.

Expert :
• Structure triangulaire utile pour précalculer coefficients ou motifs 2D.

Concepts clés :
• Compréhension imbriquée ; range dépendant de variable externe.

Distinctions clés :
• [[0,1,2,3]] serait une seule ligne interne longue — ici quatre lignes de longueurs différentes.

Fonctionnement :
• Chaque i fixe la longueur de la liste interne avant append implicite de la compréhension.

Exécution étape par étape :
1. Quatre valeurs de i.
2. Quatre listes internes créées.
3. Liste externe de quatre éléments.

Ordre des opérations :
• i croissant ; pour chaque i, j parcourt 0…i-1.

Cas d'utilisation courants :
• Matrices triangulaires inférieures, préfixes croissants.

Cas limites :
• Si range(1,1) vide, résultat [].

Considérations de performance :
• Coût O(n²) pour n lignes triangulaires jusqu’à n.

Exemples :
• Remplacer 0 par j pour [[], [1], [2,3], ...] variante.

Remarques :
• Chaque sous-liste commence toujours par 0 ici car range(i) démarre à 0.`,

  1397: `La bonne réponse est 4 : boucle while n > 0 avec n //= 10 enlève un chiffre par tour pour n=1234.

Débutant :
• count augmente à chaque passage.
• 1234→123→12→1→0 : quatre divisions entières.

Intermédiaire :
• Équivalent à len(str(1234)) pour entiers positifs sans signe.
• n devient 0 : condition while fausse, arrêt.

Expert :
• Pour n=0 initial, la boucle ne s’exécute pas : count resterait 0 (cas limite).

Concepts clés :
• Division entière //10 ; comptage de digits ; while.

Distinctions clés :
• Compter chiffres vs sommer chiffres (autre algorithme).

Fonctionnement :
• Chaque itération incrémente count puis réduit n.

Exécution étape par étape :
1. n=1234 count 1.
2. n=123 count 2.
3. n=12 count 3.
4. n=1 count 4.
5. n=0 stop.

Ordre des opérations :
• Test while avant corps ; //= après += selon indentation du code source.

Cas d'utilisation courants :
• Valider longueur saisie, bases numériques, cryptage pédagogique.

Cas limites :
• Entiers négatifs : boucle infinie si non traités — hors énoncé positif.

Considérations de performance :
• O(log10 n) tours.

Exemples :
• n=9 → un seul tour.

Remarques :
• Aligné sur n=1234 du fichier level4_while_batch1.`,

  1398: `La bonne réponse est 4321 : inversion décimale avec rev = rev*10 + n%10 et n //=10.

Débutant :
• n%10 prend le dernier chiffre.
• rev multiplie par 10 et ajoute ce chiffre.
• Répété jusqu’à n=0.

Intermédiaire :
• Trajet : 4→43→432→4321 pour les chiffres de 1234.
• Alternative str inversée mais ici arithmétique pure.

Expert :
• Zéros finaux dans l’original deviennent zéros en tête invisibles en int (ex. 1200 → 21).

Concepts clés :
• % et // pour digits ; accumulation rev.

Distinctions clés :
• Inverse entier vs inverse chaîne avec zéros de tête conservés.

Fonctionnement :
• Chaque tour déplace un digit de n vers rev.

Exécution étape par étape :
1. 4 extrait rev=4 n=123.
2. 3 → rev=43 n=12.
3. 2 → rev=432 n=1.
4. 1 → rev=4321 n=0.

Ordre des opérations :
• % avant // dans le même tour selon le code source.

Cas d'utilisation courants :
• Tests palindrome numérique, génération de nombres miroir.

Cas limites :
• n=0 au départ : rev reste 0, boucle immédiate.

Considérations de performance :
• O(nombre de chiffres).

Exemples :
• n=7 → rev=7 direct.

Remarques :
• Même pattern que les cours d’algorithmique classiques sur les entiers.`,

  1399: `La bonne réponse est 6 : algorithme d’Euclide while b avec a, b = b, a % b sur 48 et 18.

Débutant :
• Tant que b non nul, remplacer (a,b) par (b, reste).
• (48,18)→(18,12)→(12,6)→(6,0) ; a vaut 6.

Intermédiaire :
• b devient falsy 0 → sortie ; a contient le pgcd.
• while b: équivalent à while b != 0.

Expert :
• Complexité O(log min(a,b)) en pratique pour entiers.

Concepts clés :
• PGCD ; modulo ; tuple assignment simultané.

Distinctions clés :
• Dernier a non nul vs dernier b avant zéro.

Fonctionnement :
• Chaque affectation utilise l’ancien a,b pour calculer le nouveau couple.

Exécution étape par étape :
1. 48%18=12 → a=18 b=12.
2. 18%12=6 → a=12 b=6.
3. 12%6=0 → a=6 b=0.
4. while faux.

Ordre des opérations :
• Évaluation du membre droit avant liaison des noms a,b.

Cas d'utilisation courants :
• Réduction de fractions, crypto élémentaire, puzzles arithmétiques.

Cas limites :
• Deux zéros : boucle immédiate mais pgcd mal défini mathématiquement.

Considérations de performance :
• Très rapide pour des int Python.

Exemples :
• pgcd(17,13)=1 en quelques restes.

Remarques :
• Valeurs initiales 48,18 du lot while batch1.`,

  1400: `La bonne réponse est 3 : à la sortie par break, mid vaut l’indice tel que nums[mid]==7 dans [1,3,5,7,9].

Débutant :
• Premier milieu (0+4)//2=2 → nums[2]=5 <7 → lo=3.
• Second milieu (3+4)//2=3 → nums[3]=7 → branche else break.
• La variable mid vaut donc 3 (indice, pas la valeur 7).

Intermédiaire :
• Distinction index vs valeur : la cible 7 est à l’index 3.
• Complexité logarithmique sur tableau trié.

Expert :
• Invariant : si présent, la cible reste dans [lo,hi] jusqu’à trouvaille.

Concepts clés :
• Recherche binaire ; // pour milieu ; break.

Distinctions clés :
• mid après break vs mid du premier tour (2).

Fonctionnement :
• Chaque itération réduit lo/hi selon comparaison avec la cible 7.

Exécution étape par étape :
1. lo=0 hi=4 mid=2 valeur 5<7 lo←3.
2. lo=3 hi=4 mid=3 valeur 7==7 break.
3. mid lu comme 3.

Ordre des opérations :
• Calcul de mid en début de corps à chaque entrée dans while.

Cas d'utilisation courants :
• Tableaux triés, bornes sur fonctions monotones.

Cas limites :
• Élément absent : boucle jusqu’à épuisement sans else break (autre code).

Considérations de performance :
• Deux comparaisons ici seulement pour cette taille.

Exemples :
• Cible 1 ou 9 aux extrémités : un ou plusieurs milieux successifs.

Remarques :
• L’énoncé attend l’indice mid=3, pas la valeur trouvée 7.`,
};
