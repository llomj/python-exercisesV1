/** Level 4 FR 1451–1500 — level4_while_batch3.ts Q55–78 + level4_while_batch4.ts Q79–104. */
export default {
  1451: `La bonne réponse est 14 : avec s = "3+4*2", result démarre à 3 puis applique +4 (7) puis *2 (14) en parcourant la chaîne par pas de 2 — sans priorité du * comme en maths.

Débutant :
• int(s[0]) initialise result à 3 ; i commence à 0.
• op = s[i+1], val = int(s[i+2]) ; + ou * met à jour result ; i += 2.
• Après deux tours, i vaut 4 et i+1 < len(s) est faux.

Intermédiaire :
• Ce n’est pas eval ni PEMDAS : l’ordre est celui du programme, pas celui des opérateurs.
• L’option 11 serait 3+(4*2) avec * prioritaire.

Expert :
• Pour la précédence réelle, il faudrait parser (pile, priorité, récursion).

Concepts clés :
• Micro-évaluateur linéaire ; while sur indices ; lecture opérande/opérateur.

Distinctions clés :
• Gauche-à-droite « naïf » vs évaluation algébrique standard.

Fonctionnement :
• Chaque itération consomme un opérateur et un chiffre après la position i.

Exécution étape par étape :
1. result=3, i=0 → '+', 4 → result=7, i=2.
2. '*', 2 → result=14, i=4 → sortie de boucle.

Ordre des opérations :
• Les additions/multiplications du corps suivent l’ordre d’écriture dans s, pas la hiérarchie.

Cas d'utilisation courants :
• Langages miniatures, exercices sur parsers, quiz « piège » sur la précédence.

Cas limites :
• Chaîne mal formée, opérateurs non supportés ou longueur impaire : ce code suppose un motif strict.

Considérations de performance :
• O(len(s)) simple ; concaténation ici n’intervient pas.

Exemples :
• Même idée sur "2+3*4" donnerait 20 (2+3 puis *4) avec ce schéma d’indices.

Remarques :
• Retenez : 14 prouve que le programme ignore 4*2 avant +3.`,

  1452: `La bonne réponse est "edcba" : on parcourt "abcde" de l’index len(s)-1 jusqu’à 0 en concaténant s[i].

Débutant :
• i = 4, 3, …, 0 ; result += s[i] construit la chaîne inversée.
• Ordre des caractères : e, d, c, b, a.

Intermédiaire :
• Équivalent idiomatique : s[::-1] ou reversed(s) avec join.
• Ici, while explicite pour voir les indices.

Expert :
• Concaténer dans une boucle est O(n²) sur de très longues chaînes ; list + join est O(n).

Concepts clés :
• Indices négatifs décroissants ; accumulation de chaîne ; condition i >= 0.

Distinctions clés :
• Inversion par indices décroissants vs lecture avant-arrière par len-1-i.

Fonctionnement :
• Une itération par caractère, du dernier au premier.

Exécution étape par étape :
1. i=4 → 'e' ; i=3 → 'ed' ; … jusqu’à i=0 → 'edcba'.
2. i=-1 → la boucle s’arrête.

Ordre des opérations :
• len(s)-1 évalué une fois au départ ; décrément après chaque append logique.

Cas d'utilisation courants :
• Palindromes, affichage inverse, piles symboliques.

Cas limites :
• Chaîne vide : len(s)-1 = -1, la boucle ne s’exécute pas ; result reste "".

Considérations de performance :
• Préférer join pour de gros textes.

Exemples :
• "ab" → "ba" avec le même motif d’indices.

Remarques :
• Ne confondez pas avec une rotation d’un seul caractère.`,

  1453: `La bonne réponse est 3 : le préfixe commun de "prefix" et "prelude" est "pre" (longueur 3) ; la boucle s’arrête à la première divergence f vs l.

Débutant :
• i augmente tant que i < len(a), i < len(b) et a[i] == b[i].
• p, r, e matchent ; à i=3, 'f' != 'l'.

Intermédiaire :
• Résultat utilisable comme a[:i] ou b[:i].
• Les trois tests du while évitent IndexError.

Expert :
• Base des tries, autocomplétion, plus long préfixe commun de plusieurs chaînes (généralisations).

Concepts clés :
• Comparaisons caractère par caractère ; borne double (deux longueurs).

Distinctions clés :
• Longueur du préfixe vs sous-chaîne la plus longue répétée ailleurs.

Fonctionnement :
• i est à la fois compteur et longueur du préfixe validé.

Exécution étape par étape :
1. i=0,1,2 : égalité ; i devient 3.
2. Test i=3 échoue sur les caractères → sortie, i vaut 3.

Ordre des opérations :
• and court-circuité : si une chaîne est plus courte, on s’arrête avant la fin de l’autre.

Cas d'utilisation courants :
• Routes URL communes, diff de fichiers, édition collaborative.

Cas limites :
• Une chaîne vide : i reste 0 ; préfixe vide.

Considérations de performance :
• O(min(len(a),len(b))) dans le pire cas.

Exemples :
• "abc" vs "abx" → i=2.

Remarques :
• La valeur affichée est i, pas la sous-chaîne.`,

  1454: `La bonne réponse est 5 : avec n=10 et alternance up True/False, on retire 3 puis 1 puis 3 puis 1 puis 3 jusqu’à n <= 0 après cinq tours.

Débutant :
• up True : n -= 3 ; up False : n -= 1 ; up = not up chaque fois ; count += 1.
• Séquence des n : 10→7→6→3→2→-1.

Intermédiaire :
• Le drapeau up force deux « vitesses » de décroissance.
• count compte les itérations, pas directement la valeur de n.

Expert :
• Modélise des pas variables (charge/décharge, simulation discrète).

Concepts clés :
• Booléen bascule ; while sur n > 0 ; compteur d’itérations.

Distinctions clés :
• Alternance -3/-1 vs pas constant (n -= k chaque fois).

Fonctionnement :
• Chaque passage met à jour n, inverse up, incrémente count.

Exécution étape par étape :
1. T, -3 → 7, count 1 ; F, -1 → 6, count 2 ; T, -3 → 3, count 3.
2. F, -1 → 2, count 4 ; T, -3 → -1, count 5 ; condition while fausse.

Ordre des opérations :
• Le test while se fait en tête de boucle ; n peut finir négatif.

Cas d'utilisation courants :
• Jeux, simulations énergétiques, planification à deux modes.

Cas limites :
• Si le premier pas suffisait à rendre n <= 0, count serait 1.

Considérations de performance :
• Nombre d’itérations borné par la taille de n et les pas.

Exemples :
• Changer les pas modifie fortement count pour le même n initial.

Remarques :
• Ne pas oublier que le dernier n peut être < 0 avant le test suivant.`,

  1455: `La bonne réponse est 2 : on avance i tant que nums[i] >= 3 ; au premier 2 (<3), break laisse i à 2 sans i += 1 après le test.

Débutant :
• nums = [4,6,2,8] ; 4 et 6 passent (i devient 1 puis 2).
• À i=2, nums[2]=2 < 3 → break immédiat.

Intermédiaire :
• Différent d’un scan qui incrémente après break : ici i pointe sur l’élément fautif.
• break sort du while, pas du if seul.

Expert :
• Pattern « première position satisfaisant un prédicat » avec garde.

Concepts clés :
• break ; index courant ; comparaison élément/liste.

Distinctions clés :
• Trouver l’index vs compter combien sont <3.

Fonctionnement :
• Corps : if déclenche break sinon i += 1.

Exécution étape par étape :
1. i=0, 4≥3 → i=1.
2. i=1, 6≥3 → i=2.
3. i=2, 2<3 → break → i reste 2.

Ordre des opérations :
• Le test while utilise i < len avant accès sûr (ici break avant fin).

Cas d'utilisation courants :
• Chercher seuil, premier défaut, sentinelles.

Cas limites :
• Liste vide : i=0 < 0 faux, i reste 0 ; pas d’accès.

Considérations de performance :
• O(k) jusqu’au premier match.

Exemples :
• Premier pair, premier négatif : même squelette.

Remarques :
• Si tous passent le test, la boucle irait jusqu’à i==len (non le cas ici).`,

  1456: `La bonne réponse est [20, 13, 6] : tant que n > 0, on append n puis n -= 7 ; après 6, n vaut -1 et la boucle s’arrête — le -1 n’est pas ajouté.

Débutant :
• Append avant soustraction : 20, puis 13, puis 6.
• Ensuite n=-1, while faux.

Intermédiaire :
• Si l’ordre était n-=7 puis append, la liste changerait.
• Trois éléments, pas quatre.

Expert :
• Décompte à pas large utile pour quotas, batches, « sauts » de planning.

Concepts clés :
• while sur n > 0 ; append puis mise à jour ; liste accumulatrice.

Distinctions clés :
• Inclure ou non la valeur après franchissement de 0 selon l’ordre des instructions.

Fonctionnement :
• Chaque itération capture l’état avant de descendre sous zéro éventuellement.

Exécution étape par étape :
1. n=20 → append 20 → n=13.
2. n=13 → append 13 → n=6.
3. n=6 → append 6 → n=-1 → fin.

Ordre des opérations :
• La condition while est réévaluée après le corps complet.

Cas d'utilisation courants :
• Découper une quantité par paquets de taille fixe (variantes).

Cas limites :
• n initialement ≤0 : liste vide.

Considérations de performance :
• O(nombre d’itérations) ~ linéaire en n/7.

Exemples :
• Pas 1 avec n=3 → [3,2,1] même logique d’arrêt.

Remarques :
• [20,13,6,-1] serait faux ici car -1 n’est jamais append.`,

  1457: `La bonne réponse est 9 : x et limit évoluent ensemble — (0,10)→(3,9)→(6,8)→(9,7) puis 9<7 est faux.

Débutant :
• Tant que x < limit : x += 3 et limit -= 1.
• Quatre « demi-pas » de convergence bord/bord.

Intermédiaire :
• Contrairement à une limite fixe, le plafond descend pendant que x monte.
• Sortie anticipée vs while x < 10 seul.

Expert :
• Illustre des modèles où contrainte et état coévoluent (budget + progression).

Concepts clés :
• Double mise à jour ; condition composée ; entiers.

Distinctions clés :
• x final 9 vs x=12 si limit restait 10.

Fonctionnement :
• Chaque tour re-teste la relation strictement inférieure.

Exécution étape par étape :
1. 0<10 → 3,9 ; 3<9 → 6,8 ; 6<8 → 9,7.
2. 9<7 faux → x final 9.

Ordre des opérations :
• Les deux affectations du corps s’enchaînent avant le prochain test.

Cas d'utilisation courants :
• Fenêtres glissantes conceptuelles, quotas qui se resserrent.

Cas limites :
• Mauvais pas peut empêcher la terminaison (pas ici).

Considérations de performance :
• Petit nombre d’itérations ; pas de souci.

Exemples :
• Si seul x augmentait, le nombre de tours serait différent.

Remarques :
• Lisez toujours qui bouge dans la condition ET dans le corps.`,

  1458: `La bonne réponse est "ABCABCA" : tasks = ["A","B","C"], count va de 0 à 6, result += tasks[i % 3] à chaque fois.

Débutant :
• i % 3 cycle 0,1,2,0,1,2,0 sur i=0..6.
• Sept caractères : A,B,C,A,B,C,A.

Intermédiaire :
• Round-robin : même idée que files circulaires, scheduling simple.
• count borne le nombre d’étapes indépendamment de len(tasks).

Expert :
• Généralise à des files de longueurs différentes avec files et priorités.

Concepts clés :
• Modulo pour indices circulaires ; accumulation de chaîne.

Distinctions clés :
• Sept tours avec trois tâches vs répéter la chaîne "ABC" deux fois +1.

Fonctionnement :
• i s’incrémente toujours ; le modulo choisit la tâche.

Exécution étape par étape :
1. i=0..6 produit la séquence d’indices modulo 3 ci-dessus.
2. Concaténation finale ABCABCA.

Ordre des opérations :
• len(tasks) lu chaque fois (ici constant).

Cas d'utilisation courants :
• Répartition équitable, buffers circulaires, jeux multijoueurs simplifiés.

Cas limites :
• Liste vide : ZeroDivisionError sur % — non applicable ici.

Considérations de performance :
• O(count) ; chaînes longues → join.

Exemples :
• count=4 → "ABCA".

Remarques :
• Même esprit que la question liste cyclique plus loin, mais sur des lettres.`,

  1459: `La bonne réponse est 3 : sur "((())())", depth monte sur '(' et descend sur ')' ; le maximum atteint est 3.

Débutant :
• '(' : depth += 1 puis max_d = max(max_d, depth).
• ')' : depth -= 1.

Intermédiaire :
• Profondeur = niveau d’imbrication, pas nombre total de parenthèses.
• Valide l’idée de pile implicite.

Expert :
• Variante : détecter déséquilibre si depth<0 ou depth final ≠0.

Concepts clés :
• Scanner une chaîne ; compteur de nesting ; max courant.

Distinctions clés :
• max_d mis à jour seulement sur '(' vs à chaque pas.

Fonctionnement :
• i parcourt chaque caractère une fois.

Exécution étape par étape :
1. Séquence des depth : jusqu’au pic 3 au troisième '(' consécutif du bloc interne.
2. Fermetures ramènent depth avant la fin à 0.

Ordre des opérations :
• Mise à jour de max_d après incrément évite de comparer sur ')'.

Cas d'utilisation courants :
• Parseurs, surlignage d’éditeur, vérificateurs syntaxiques.

Cas limites :
• Chaîne vide : max_d reste 0.

Considérations de performance :
• O(len(s)) temps, O(1) mémoire.

Exemples :
• "()" → max_d 1 ; "((()))" → 3.

Remarques :
• Ne confondez pas avec le nombre de paires bien formées seules.`,

  1460: `La bonne réponse est "111221" : une étape look-and-say sur "1211" regroupe les runs — 1×'1', 1×'2', 2×'1' → "11"+"12"+"21".

Débutant :
• Boucle externe sur i ; boucle interne compte les répétitions du même ch.
• result += str(count) + ch puis i += count.

Intermédiaire :
• Lecture run-length ; base de la suite de Conway.
• Le compteur interne avance i sans rechever le même caractère.

Expert :
• Croissance exponentielle de la longueur sur itérations successives (culture math).

Concepts clés :
• Deux while imbriqués ; regroupement de caractères identiques consécutifs.

Distinctions clés :
• Description d’une chaîne vs générer la suivante dans la suite infinie.

Fonctionnement :
• ch = s[i] ancre le run ; count s’étend tant que s[i+count]==ch.

Exécution étape par étape :
1. '1' seul → "11" ; i avance de 1.
2. '2' seul → "12" ; puis '1' double → "21" ; concat → "111221".

Ordre des opérations :
• Tests d’indices i+count < len(s) pour éviter dépassement.

Cas d'utilisation courants :
• Compression RLE pédagogique, puzzles, propriétés combinatoires.

Cas limites :
• Chaîne vide : result reste "".

Considérations de performance :
• O(n) pour une étape sur longueur n dans ce style.

Exemples :
• "1" → "11" ; "11" → "21".

Remarques :
• Lisez à voix haute : « un 1, un 2, deux 1 ».`,

  1461: `La bonne réponse est (12, 15) : la condition not(x<=y or x<10) continue tant que x>y et x>=10 ; après divisions entières et +5 sur y, on s’arrête quand x<=y.

Débutant :
• x,y = 100,0 puis x//=2, y+=5 chaque tour tant que la condition est vraie.
• Étapes : (50,5), (25,10), (12,15) puis 12<=15 rend la condition fausse.

Intermédiaire :
• De Morgan : not(A or B) ≡ (not A) et (not B) aide à relire le while.
• Halving + montée de y : convergence « ciseaux ».

Expert :
• Modèle de boucles avec condition booléenne riche ; piège classique d’inversion.

Concepts clés :
• not, or, comparaisons chaînées implicitement ; division entière.

Distinctions clés :
• Arrêt sur x<=y vs arrêt sur x<10 seul.

Fonctionnement :
• Évalue d’abord (x<=y or x<10), puis not.

Exécution étape par étape :
1. (100,0) vrai pour continuer → (50,5) → (25,10) → (12,15).
2. À (12,15), x<=y vrai → or vrai → not faux.

Ordre des opérations :
• //= et += séquentiels après le test d’entrée.

Cas d'utilisation courants :
• Simulations bidimensionnelles, budgets vs seuils.

Cas limites :
• Si x devenait <10 avant x<=y, l’or raccourcirait aussi la boucle.

Considérations de performance :
• Peu d’itérations ; log2(x) style.

Exemples :
• Même squelette avec autres pas modifie le point fixe observé.

Remarques :
• Retenez : le tuple affiché est bien (12,15), pas symétrique autour d’un milieu entier.`,

  1462: `La bonne réponse est True : n=64 ; tant que n>1 et n pair, n//=2 ; à la fin n==1, signe d’une puissance de deux.

Débutant :
• 64→32→16→8→4→2→1 puis le while échoue sur n>1.
• n==1 est True.

Intermédiaire :
• Si à un moment n impair >1, la boucle s’arrête avec n!=1 → False.
• Équivalent bit : (n & (n-1))==0 pour n>0.

Expert :
• Détecte 2^k sans logarithmes ; lié à représentations binaires.

Concepts clés :
• while avec conjonction ; parité via n%2 ; division entière.

Distinctions clés :
• Test final n==1 vs test « reste puissance » pendant la boucle.

Fonctionnement :
• La seconde clause n%2==0 protège contre faux positifs (ex. 12→6→3).

Exécution étape par étape :
1. Divisions successives tant que pair et >1.
2. Sortie avec n=1 ; expression booléenne True.

Ordre des opérations :
• n>1 évalué avant n%2 grâce au court-circuit — ici sans effet sur 1.

Cas d'utilisation courants :
• Taille de buffers puissance de 2, FFT, alignements mémoire.

Cas limites :
• n=0 ou n=1 : boucle jamais ou immédiatement ; n==1 traité correctement pour 1 (2^0).

Considérations de performance :
• O(log n) divisions.

Exemples :
• 18 → 9 s’arrête tôt → False pour n==1.

Remarques :
• 64 est 2^6 ; six divisions pour tomber à 1.`,

  1463: `La bonne réponse est 3 : n=13 (binaire 1101) ; count += n&1 puis n>>=1 jusqu’à n falsy — trois bits à 1.

Débutant :
• n&1 vaut 1 si le bit faible est 1.
• Décalage >> rejette ce bit ; répéter jusqu’à n=0.

Intermédiaire :
• Popcount / poids de Hamming pour petits entiers.
• while n: s’arrête quand n devient 0.

Expert :
• Variante Kernighan : n &= n-1 pour sauter au prochain 1 ; ici version linéaire simple.

Concepts clés :
• Masque binaire &1 ; décalage à droite >> ; boucle while sur entier.

Distinctions clés :
• Compter les 1 vs valeur de n finale.

Fonctionnement :
• Chaque itération examine exactement un bit (LSB).

Exécution étape par étape :
1. 13 → +1, n=6 ; 6 → +0, n=3 ; 3 → +1, n=1 ; 1 → +1, n=0.
2. count=3.

Ordre des opérations :
• Addition puis décalage à chaque passage.

Cas d'utilisation courants :
• Cryptographie légère, jeux de bits, compétitions.

Cas limites :
• n=0 : boucle jamais, count 0.

Considérations de performance :
• O(log n) bits ; versions spéciales CPU (popcnt).

Exemples :
• 8 (1000) → un seul 1.

Remarques :
• bin(13).count("1") vérifie le résultat rapidement en REPL.`,

  1464: `La bonne réponse est "hello" : deux while simulent strip — lo monte après espaces de tête, hi descend avant espaces de queue, puis slice s[lo:hi+1].

Débutant :
• s = "  hello  " ; lo s’arrête à l’indice du 'h' (2).
• hi recule jusqu’au 'o' (6) ; slice [2:7] donne "hello".

Intermédiaire :
• Équivalent à s.strip() pour espaces simples.
• Garde hi >= lo évite traversée incohérente si tout espace.

Expert :
• Deux pointeurs O(n) ; généralisable à un ensemble de caractères à zapper.

Concepts clés :
• Indices lo/hi ; slices exclusif-fin ; caractères espace.

Distinctions clés :
• Enlever uniquement bords vs remplacer tous les espaces internes.

Fonctionnement :
• Première boucle : avance lo ; seconde : réduit hi.

Exécution étape par étape :
1. lo=0,1 puis s[2]='h' stop.
2. hi=len-1 puis 7,6 avec s[6]='o' stop.
3. s[2:7] → "hello".

Ordre des opérations :
• len(s)-1 une fois pour hi initial.

Cas d'utilisation courants :
• Normalisation de saisie utilisateur, parsing CSV maison.

Cas limites :
• Chaîne uniquement espaces : lo dépasse hi → slice vide.

Considérations de performance :
• Linéaire ; deux passes sur les bords seulement.

Exemples :
• Sans espaces externes, lo=0 hi=len-1 → chaîne entière.

Remarques :
• strip() gère plus de blancs Unicode ; ce code est minimal ASCII.`,

  1465: `La bonne réponse est ["Hi there", "world"] : largeur 10, on greffe les mots ; ajouter " world" dépasserait 14>10 donc nouvelle ligne avant "world".

Débutant :
• Premier mot "Hi" ; second " there" tient (longueur totale 8 avec espace).
• " world" ferait 14 > 10 → flush ligne, nouvelle ligne "world".

Intermédiaire :
• Le +1 compte l’espace entre mots.
• Algorithme glouton, pas optimal global (cf. TeX).

Expert :
• Utile pour rendu terminal, légendes, aperçus texte.

Concepts clés :
• Accumulateur line ; liste lines ; test de longueur cumulée.

Distinctions clés :
• Dernier mot seul sur ligne vs tout sur une ligne si largeur immense.

Fonctionnement :
• Trois branches : ligne vide, ligne non vide, dépassement.

Exécution étape par étape :
1. line="Hi" ; line="Hi there".
2. Prochain mot trop long → append "Hi there", line="world".
3. Fin : append "world".

Ordre des opérations :
• len(line) + 1 + len(words[i]) calculé avant décision.

Cas d'utilisation courants :
• Word wrap, SMS multi-segments, UI monospace.

Cas limites :
• Mot plus long que width : ici non ; sinon il faudrait couper autrement.

Considérations de performance :
• O(nombre de caractères) avec concaténations répétées — acceptable petit.

Exemples :
• width=5 sur ["abcde","f"] → lignes séparées si aucune coupe interne.

Remarques :
• Vérifiez toujours le +1 de l’espace dans la condition.`,

  1466: `La bonne réponse est [98, 79] : msg = [72,101] (ASCII 'H','e') ; chaque octet XOR 42.

Débutant :
• 72^42 = 98 ; 101^42 = 79.
• Liste enc construite en boucle.

Intermédiaire :
• XOR est involutif : même clé re XOR retrouve l’original.
• Schéma de chiffrement symétrique très simplifié.

Expert :
• Vrais chiffreurs utilisent nonces, clés longues, modes (CTR, etc.).

Concepts clés :
• ^ sur entiers ; boucle indexée ; liste résultat.

Distinctions clés :
• XOR bitwise vs addition modulo 256.

Fonctionnement :
• Un append par élément de msg.

Exécution étape par étape :
1. i=0 → append 98.
2. i=1 → append 79 ; fin.

Ordre des opérations :
• len(msg) fixe la durée.

Cas d'utilisation courants :
• Obfuscation légère, CTF, démonstrations pédagogiques.

Cas limites :
• Clé 0 laisse les octets inchangés.

Considérations de performance :
• O(n) trivial.

Exemples :
• Décoder : enc[i] ^ key pour chaque i.

Remarques :
• Ne réutilisez pas une clé courte ainsi en production.`,

  1467: `La bonne réponse est [1, 2] : tant que lst non vide et dernier élément >2, pop() enlève la fin.

Débutant :
• 5,4,3 >2 sortent ; 2 stoppe car lst[-1]>2 faux.
• Garde lst and évite pop sur liste vide.

Intermédiaire :
• Pattern « trim suffix while predicate ».
• pop() coût amorti O(1) mais décale indices logiquement.

Expert :
• Pour files immuables, filtrer ou deux pointeurs seraient d’autres choix.

Concepts clés :
• Vérité d’une liste ; lst[-1] ; pop side-effect.

Distinctions clés :
• Enlever tant que >2 vs enlever exactement trois éléments.

Fonctionnement :
• Réévalue la fin après chaque pop.

Exécution étape par étape :
1. [1..5] → pop 5 → [1..4] → pop 4 → [1..3] → pop 3 → [1,2].
2. 2>2 faux → arrêt.

Ordre des opérations :
• Court-circuit lst and : si vide, pas d’accès [-1].

Cas d'utilisation courants :
• Nettoyer scores finaux, zeros de queue, logs.

Cas limites :
• Liste vide dès le départ : while faux immédiatement.

Considérations de performance :
• O(k) pops pour k suffixes satisfaisant la condition.

Exemples :
• Seuil 0 pour enlever négatifs en fin : changer la condition.

Remarques :
• Ne modifiez pas la liste pendant itération avant sans plan clair.`,

  1468: `La bonne réponse est 6 : vider d avec popitem dans un while d: et sommer les valeurs 1+2+3.

Débutant :
• Chaque popitem retire une paire ; total augmente de v.
• Trois tours → total 6 ; d vide.

Intermédiaire :
• Ordre LIFO en 3.7+ mais la somme commute.
• while d: exploite le dictionnaire faux si vide.

Expert :
• popitem() vs pop(k) : ici pas besoin de connaître les clés.

Concepts clés :
• Vérité d’un dict ; unpacking k,v ; accumulation.

Distinctions clés :
• Sommer valeurs vs concaténer clés.

Fonctionnement :
• Boucle jusqu’à épuisement des paires.

Exécution étape par étape :
1. Retire par ex. ('c',3) total=3, etc. — ordre interne mais somme 6 garantie.
2. dict vide → while stop.

Ordre des opérations :
• popitem atomique : enlève puis retourne.

Cas d'utilisation courants :
• Files de tâches restantes, compteurs à consommer.

Cas limites :
• dict déjà vide : total reste 0.

Considérations de performance :
• O(n) pour n paires.

Exemples :
• Valeurs non numériques casseraient += — ici int uniquement.

Remarques :
• Ne supposez pas un ordre alphabétique des popitem.`,

  1469: `La bonne réponse est [2, 34] : scanner "a2b34c", boucle interne regroupe chiffres consécutifs avant int().

Débutant :
• À '2', inner while lit "2" → 2.
• À '3', inner while lit "34" → 34.

Intermédiaire :
• Tokenizer minimal pour entiers multi-chiffres.
• i avancé par la boucle interne évite retraiter les mêmes chiffres.

Expert :
• Base pour lexer (floats, signes) avec états supplémentaires.

Concepts clés :
• isdigit ; boucles imbriquées ; accumulation chaîne temporaire.

Distinctions clés :
• [2,3,4] serait lecture chiffre à chiffre sans regroupement.

Fonctionnement :
• Branche else avance i sur non-chiffres.

Exécution étape par étape :
1. i saute 'a', atteint '2', consomme le run, append 2.
2. Même chose pour "34" après 'b'.

Ordre des opérations :
• int(n) après construction de la chaîne du run.

Cas d'utilisation courants :
• Parser logs, identifiants alphanumériques.

Cas limites :
• Chaîne sans chiffre → liste vide.

Considérations de performance :
• O(len(s)).

Exemples :
• "007" → entier 7 (leading zeros perdus par int).

Remarques :
• Pour préserver zeros, gardez des chaînes, pas des int.`,

  1470: `La bonne réponse est [1, 3, 6, 10, 15] : n de 1 à 5, total cumule n à chaque fois et append après addition — nombres triangulaires.

Débutant :
• total 1, puis 1+2=3, +3=6, +4=10, +5=15.
• Chaque append capture le cumul courant.

Intermédiaire :
• T(k)=k(k+1)/2 ; ici liste des T(1)..T(5).
• Distinct d’append n seul ([1..5]).

Expert :
• Apparaît en combinatoire, sommes de suites arithmétiques.

Concepts clés :
• Somme partielle ; while n<=5 ; append après mise à jour.

Distinctions clés :
• Cumul vs liste des termes n.

Fonctionnement :
• Incrémenter n en fin de corps après usage.

Exécution étape par étape :
1. n=1 → total 1 append 1.
2. Jusqu’à n=5 → 15 append dernier.

Ordre des opérations :
• total += n avant append garantit la bonne série.

Cas d'utilisation courants :
• Coûts cumulés, aires de triangles de points, DP simple.

Cas limites :
• Si la condition bornait mal, liste tronquée ou vide.

Considérations de performance :
• O(n) pour n borné.

Exemples :
• Jusqu’à 4 → [1,3,6,10].

Remarques :
• 15 est aussi la somme 1+2+3+4+5 « directe » mais ici on montre les partiels.`,

  1471: `La bonne réponse est (6, 5) : a monte, b descend jusqu’à ce que a<b soit faux ; avec 1 et 10 on termine à (6,5).

Débutant :
• Paire (1,10)→(2,9)→(3,8)→(4,7)→(5,6)→(6,5).
• 6<5 faux → stop.

Intermédiaire :
• Somme a+b constante 11 impaire → ils ne se croisent pas sur un entier égal.
• Différent d’un cas pair où a==b possible.

Expert :
• Cherche milieu discret, dichotomies, fusion de listes triées (esprit).

Concepts clés :
• Deux variables mises à jour ; condition a<b ; pas de 1 chacun.

Distinctions clés :
• (6,5) vs (5,5) selon parité des bornes initiales.

Fonctionnement :
• Chaque itération rapproche les extrémités d’une unité chacune.

Exécution étape par étape :
1. Répéter tant que a<b.
2. Sortie avec a=6,b=5.

Ordre des opérations :
• += et -= après test d’entrée.

Cas d'utilisation courants :
• Recherche par deux pointeurs, collision de intervalles.

Cas limites :
• a>=b initialement : boucle jamais.

Considérations de performance :
• O(b-a) pas dans le pire cas simple.

Exemples :
• (0,0) immédiat.

Remarques :
• Visualisez deux marcheurs sur une ligne qui se rapprochent.`,

  1472: `La bonne réponse est [20.0, 30.0, 40.0] : fenêtre 3 sur [10..50], moyennes des slices [0:3],[1:4],[2:5].

Débutant :
• i=0..2 car i<=len(data)-window.
• sum/3.0 donne 20, puis 30, puis 40.

Intermédiaire :
• Moyenne mobile simple ; utile pour lissage.
• i+=1 fait glisser la fenêtre d’un cran.

Expert :
• Version incrémentale évite de resommer toute la fenêtre (hors sujet ici).

Concepts clés :
• Slice data[i:i+window] ; sum ; division flottante.

Distinctions clés :
• Trois fenêtres pour len 5 et window 3, pas quatre.

Fonctionnement :
• Append une moyenne par position de départ valide.

Exécution étape par étape :
1. [10,20,30]→20.0 ; [20,30,40]→30.0 ; [30,40,50]→40.0.
2. i=3 stop car 3<=2 faux.

Ordre des opérations :
• len(data)-window calculé à chaque test (optimisable).

Cas d'utilisation courants :
• Séries temporelles, capteurs bruités, graphiques.

Cas limites :
• data plus court que window : liste vide de moyennes.

Considérations de performance :
• O(n*window) naïf ; acceptable petit n.

Exemples :
• window=1 → copie des valeurs en float.

Remarques :
• Vérifiez l’inégalité i<=len-window pour inclure la dernière fenêtre.`,

  1473: `La bonne réponse est [10, 20, 30, 10, 20] : cinq itérations i=0..4, lst[i % 3] cycle sur trois éléments.

Débutant :
• Indices modulo 3 : 0,1,2,0,1.
• Valeurs correspondantes 10,20,30,10,20.

Intermédiaire :
• Même idée que round-robin sur lettres mais avec entiers.
• len(lst) dans le modulo généralise.

Expert :
• Tampon circulaire sans deque explicite.

Concepts clés :
• Modulo pour wrap ; liste résultat séparée.

Distinctions clés :
• Cinq append vs itérer toute la liste une fois.

Fonctionnement :
• i compte les tours, pas l’index brut sans modulo.

Exécution étape par étape :
1. i=0..4 comme ci-dessus.
2. result length 5.

Ordre des opérations :
• i%len(lst) avant indexation.

Cas d'utilisation courants :
• Répétition de motifs, buffers, musique séquentielle.

Cas limites :
• lst vide : division par zéro — non ici.

Considérations de performance :
• O(n) pour n itérations demandées.

Exemples :
• i<7 ajouterait encore 30 au cycle.

Remarques :
• Comparez avec la chaîne ABCABCA (même logique cyclique).`,

  1474: `La bonne réponse est (-10, 3) : chaque tour retire 20 pv et incrémente turns ; la condition while hp>0 est testée en tête, donc hp peut finir négatif.

Débutant :
• 50→30 (t=1)→10 (t=2)→-10 (t=3) puis test faux.
• (-10,3) reflète l’état après la troisième soustraction.

Intermédiaire :
• Piège jeu-vidéo : sans clamp, les dégâts dépassent les pv restants.
• Le corps s’exécute une fois de trop par rapport à « mourir exactement à 0 ».

Expert :
• Modélisations doivent choisir entre appliquer dégâts puis clamp ou arrêter à 0.

Concepts clés :
• Boucle jeu ; compteur de tours ; état hp mutable.

Distinctions clés :
• (-10,3) vs (0,3) si on plafonnait hp à 0 chaque fois.

Fonctionnement :
• turns += 1 toujours après hp -= 20 dans un tour complet.

Exécution étape par étape :
1. Entrées successives tant que hp>0 avant le corps suivant.
2. Troisième soustraction rend hp négatif ; boucle suivante refuse d’entrer.

Ordre des opérations :
• Évaluation while puis éventuel corps.

Cas d'utilisation courants :
• Combat au tour par tour, simulations de ressource.

Cas limites :
• hp multiple exact de dégât → 0 final possible avec un tour de moins ou plus selon valeurs.

Considérations de performance :
• Négligeable.

Exemples :
• Dégâts 15 sur 50 → trois tours aussi mais fin différente.

Remarques :
• Lisez bien que la sortie montre hp négatif volontairement.`,

  1475: `La bonne réponse est 5 : a,b = 0,1 puis cinq fois a,b = b, a+b donne la suite de Fibonacci sur a final.

Débutant :
• Tuple assignment évalue d’abord le membre droit avec les anciennes a,b.
• Après 5 itérations, a vaut 5 (b vaut 8 mais on demande a).

Intermédiaire :
• i sert seulement de compteur ; la récurrence est dans le swap.
• Faux piège : penser que a devient 8 après 5 tours.

Expert :
• Complexité O(n) pour F(n) naïf ainsi ; matrices ou formule pour grands n.

Concepts clés :
• a,b = b, a+b ; boucle while comptée ; Fibonacci itératif.

Distinctions clés :
• Valeur de a vs b après la même itération ; nombre d’itérations vs indice.

Fonctionnement :
• Chaque tour recalcule la paire (F_{k+1}, F_{k+2}) à partir de (F_k,F_{k+1}) selon initialisation.

Exécution étape par étape :
1. Départ (0,1) ; cinq mises à jour mènent à a=5,b=8 à la sortie.
2. Affichage de a seul → 5.

Ordre des opérations :
• Le RHS lit les anciennes valeurs avant affectation simultanée.

Cas d'utilisation courants :
• Tests de performance, algorithmes combinatoires, animations discrètes.

Cas limites :
• i<0 non ; i=0 donnerait a inchangé (0).

Considérations de performance :
• Constant mémoire O(1) pour cette méthode.

Exemples :
• i<3 → a=2 avec même départ.

Remarques :
• Retenez : 5 est F_5 dans la numérotation 0,1,1,2,3,5 selon point de départ choisi.`,

  1476: `La bonne réponse est 7 : i va de 1 à 10 ; continue saute count quand i%3==0, donc 3,6,9 exclus → 7 incréments.

Débutant :
• i += 1 en tête évite boucle infinie.
• Multiples de 3 ne comptent pas ; les 7 autres oui.

Intermédiaire :
• continue reprend directement le while sans exécuter count+=1 ce tour.
• 10 - 3 = 7 comptages effectifs.

Expert :
• Pattern filtrage dans boucle while vs if sans continue.

Concepts clés :
• continue ; modulo ; compteur conditionnel.

Distinctions clés :
• Placer i+=1 avant continue vs après (risque infini).

Fonctionnement :
• Chaque itération incrémente i systématiquement.

Exécution étape par étape :
1. i parcourt 1..10.
2. Tours 3,6,9 : continue ; autres : count+=1 → total 7.

Ordre des opérations :
• Test while puis corps ; continue saute la fin du corps.

Cas d'utilisation courants :
• Ignorer lignes invalides, échantillonnage, validations.

Cas limites :
• i<1 initial autrement changerait le décompte.

Considérations de performance :
• O(n) sur la borne supérieure.

Exemples :
• Filtrer pairs : if i%2==0: continue.

Remarques :
• Sans i+=1 avant continue, i pourrait rester bloqué.`,

  1477: `La bonne réponse est 385 : atoi manuel avec result = result*10 + int(s[i]) sur "385".

Débutant :
• 0→3→38→385 en trois tours.
• Horner / construction décimale gauche-droite.

Intermédiaire :
• Même principe que int(s) pour chiffres ASCII positifs sans signe.
• Évite pow explicite.

Expert :
• Généralisable base b avec *b au lieu de *10.

Concepts clés :
• Accumulateur entier ; boucle sur indices ; int(caractère).

Distinctions clés :
• Construction vs découpage droite-gauche (itoa inverse).

Fonctionnement :
• Chaque chiffre décale l’ancien résultat d’un rang décimal.

Exécution étape par étape :
1. i=0 '3' → 3.
2. i=1 '8' → 38.
3. i=2 '5' → 385.

Ordre des opérations :
• Multiplication avant addition à chaque étape.

Cas d'utilisation courants :
• Parsing réseau, formats stricts, embedded sans int().

Cas limites :
• Caractères non numériques lèveraient ValueError sur int().

Considérations de performance :
• O(len(s)) simple.

Exemples :
• "007" → 7 (pas de préservation des zéros de tête).

Remarques :
• Gérer signe '-' nécessiterait une branche supplémentaire.`,

  1478: `La bonne réponse est "407" : n>0, on préfixe str(n%10) à result puis n//=10 — digits extraits droite-gauche mais affichage corrigé.

Débutant :
• 407%10=7 → "7" ; 40%10=0 → "07" ; 4%10=4 → "407".
• Boucle s’arrête quand n=0.

Intermédiaire :
• Préserver le zéro central est crucial ; concaténation à gauche.
• Inverse de la question 1477.

Expert :
• Pour bases autres que 10, remplacer %10,//10 et mapping des digits.

Concepts clés :
• n%10 chiffre faible ; n//=10 shift décimal ; chaîne accumulée.

Distinctions clés :
• Préfixer vs suffixer (ordre des digits).

Fonctionnement :
• Chaque itération retire un chiffre du côté droit de l’entier.

Exécution étape par étape :
1. Étapes 7,0,4 comme ci-dessus.
2. n=0 stop.

Ordre des opérations :
• str avant concaténation ; //= entier.

Cas d'utilisation courants :
• Affichage bases custom, serializers pédagogiques.

Cas limites :
• n=0 au départ : boucle jamais → result "" (cas non couvert ici).

Considérations de performance :
• O(log10 n) tours.

Exemples :
• 1200 → "1200" avec zéros internes conservés.

Remarques :
• str(n) en production évite cette boucle.`,

  1479: `La bonne réponse est 32 : p double tant que p*2<=50 ; séquence 1,2,4,8,16,32 puis 64>50 stop.

Débutant :
• p commence à 1 ; while teste le double avant de l’accepter.
• Dernière valeur valide 32.

Intermédiaire :
• Plus grande puissance de 2 ≤ n (ici n=50).
• Lié à floor(log2 n).

Expert :
• Bit hacks : décaler bits depuis MSB pour grandes valeurs.

Concepts clés :
• *=2 ; condition sur produit ; entiers.

Distinctions clés :
• 32 vs 64 (première puissance trop grande).

Fonctionnement :
• p reste toujours ≤ n à la sortie.

Exécution étape par étape :
1. Double jusqu’à ce que le prochain dépasse 50.
2. p final 32.

Ordre des opérations :
• Test utilise p*2 sans modifier p avant décision.

Cas d'utilisation courants :
• Tailles de tampons, FFT, arbres binaires complets.

Cas limites :
• n<1 adapterait l’initialisation (non montré).

Considérations de performance :
• O(log n) multiplications.

Exemples :
• n=32 → sortie 32 immédiate après dernier test vrai.

Remarques :
• 50 n’est pas une puissance de 2 ; d’où 32 pas 50.`,

  1480: `La bonne réponse est [0, 0, 1, 2, 2] : algorithme drapeau néerlandais à trois voies sur {0,1,2}.

Débutant :
• lo,mid,hi partitionnent : 0 à gauche, 1 au centre, 2 à droite.
• Swaps déplacent mid selon arr[mid].

Intermédiaire :
• O(n) un passage ; stable seulement partiellement selon variantes.
• Utile pour pivot triple en quicksort 3-way.

Expert :
• Pointeurs doivent respecter invariants ; branche 2 ne incrémente pas mid après swap avec hi.

Concepts clés :
• Trois indices ; échanges en place ; while mid<=hi.

Distinctions clés :
• Tri complet vs partition seule autour de valeurs connues.

Fonctionnement :
• mid scanne ; 0 swap lo/mid avance les deux ; 1 avance mid ; 2 swap mid/hi réduit hi.

Exécution étape par étape :
1. Sur [2,0,1,2,0], swaps réorganisent progressivement.
2. Fin : tous les 0 puis 1 puis 2.

Ordre des opérations :
• Évaluer arr[mid] avant mutations ; hi peut reculer sans avancer mid dans branche 2.

Cas d'utilisation courants :
• Couleurs, bandes, quicksort 3 partitions.

Cas limites :
• Tableau constant : mid traverse rapidement.

Considérations de performance :
• Linéaire temps, O(1) espace.

Exemples :
• Déjà trié : peu d’échanges.

Remarques :
• Retracez à la main une petite instance pour mémoriser les trois cas.`,

  1481: `La bonne réponse est 21 : x=2 puis x**=3→8, x%=5→3, x*=7→21 — affectations augmentées enchaînées.

Débutant :
• **= puissance, %= reste, *= multiplication — chacune réécrit x.
• Pas de while ici : séquence linéaire trois opérations.

Intermédiaire :
• x%=5 sur 8 donne 3 ; 3*7=21.
• Ordre strict requis : permuter les lignes changerait le résultat.

Expert :
• Équivalents : x = x op y pour chaque opérateur, avec réévaluation de x entre.

Concepts clés :
• Opérateurs **=, %=, *= ; réaffectation successive.

Distinctions clés :
• Résultat 21 vs 56 si on oubliait le modulo intermédiaire.

Fonctionnement :
• Chaque ligne lit x courant puis écrit le nouveau x.

Exécution étape par étape :
1. 2**3=8.
2. 8%5=3.
3. 3*7=21.

Ordre des opérations :
• Pas de court-circuit : trois statements séparés.

Cas d'utilisation courants :
• Normalisation cyclique (angles), modular arithmetic pipelines.

Cas limites :
• Division par zéro possible avec %=0 ailleurs — pas ici.

Considérations de performance :
• Négligeable.

Exemples :
• x=10 ; x%=6 ; x*=2 → 8.

Remarques :
• Même question « chaînée » que demandé : enchaînement des opérateurs sur x.`,

  1482: `La bonne réponse est 24 : Euclidean sur (12,8) donne PGCD 4 puis lcm = a*b//x avec x le dernier gcd.

Débutant :
• while y: x,y = y, x%y → (8,4)→(4,0) ; x=4.
• lcm = 12*8//4 = 24.

Intermédiaire :
• Identité lcm*gcd = |a*b| pour entiers positifs.
• while y: s’arrête quand y devient 0.

Expert :
• Attention débordements : utiliser // et fractions pour très grands nombres.

Concepts clés :
• Algorithme d’Euclide ; lcm à partir du gcd ; tuple swap.

Distinctions clés :
• 24 vs 96 (oubli de division par gcd).

Fonctionnement :
• Réduction répétée par modulo jusqu’à reste nul.

Exécution étape par étape :
1. x,y initialisés à 12,8.
2. Boucle jusqu’à y=0 avec x=4.
3. lcm calculé avec ce x.

Ordre des opérations :
• Division entière // pour lcm.

Cas d'utilisation courants :
• Rythmes communs, calendriers, crypto élémentaire.

Cas limites :
• a ou b nul : formule à adapter (non couvert).

Considérations de performance :
• O(log min(a,b)) en pratique.

Exemples :
• lcm(5,7)=35 car gcd 1.

Remarques :
• math.lcm existe en 3.9+ mais l’exercice réimplémente l’idée.`,

  1483: `La bonne réponse est {3: 2, 2: 2, 1: 2} : extraire chiffres de 112233 par %10,//10 et freq[d]=freq.get(d,0)+1.

Débutant :
• Chaque digit droit incrémente sa clé.
• 1,2,3 apparaissent chacun deux fois.

Intermédiaire :
• Ordre d’insertion reflète premier dernier chiffre rencontré (3 puis 2 puis 1) mais valeurs 2 partout.
• dict.get évite KeyError.

Expert :
• collections.Counter serait plus concis.

Concepts clés :
• n%10 digit faible ; //=10 ; histogramme dict.

Distinctions clés :
• Fréquences vs liste des digits dans l’ordre.

Fonctionnement :
• Boucle jusqu’à n=0.

Exécution étape par étape :
1. Parcours droite-gauche des chiffres de 112233.
2. Comptes finaux 2 pour chaque digit présent.

Ordre des opérations :
• get puis +1 puis assignation.

Cas d'utilisation courants :
• checksums légers, jeux, validation ISBN simplifiée.

Cas limites :
• n=0 : boucle immédiate ; dict vide.

Considérations de performance :
• O(log10 n) itérations.

Exemples :
• 100 → {0:2,1:1} selon ordre traitement.

Remarques :
• L’affichage exact du dict peut varier en ordre mais pas en comptes.`,

  1484: `La bonne réponse est 3 : avec lst = [1, 2, 3, 0, 5], la garde i < len(lst) and lst[i] != 0 incrémente i tant que l’élément courant est non nul ; au premier 0, la boucle ne rentre pas dans le corps et i reste 3.

Débutant :
• lst = [1,2,3,0,5] ; indices 0,1,2 OK ; à 3, lst[3]==0 stop.
• i reste 3 (pas incrémenté après échec).

Intermédiaire :
• Court-circuit : si i>=len, lst[i] non évalué → pas d’IndexError.
• Recherche sentinelle 0.

Expert :
• Généralise à tout prédicat avec garde de bornes.

Concepts clés :
• and court-circuité ; indexation ; boucle while.

Distinctions clés :
• Index du zéro vs somme jusqu’au zéro.

Fonctionnement :
• i+=1 seulement tant que condition vraie au début du tour.

Exécution étape par étape :
1. i=0,1,2 incrémentés.
2. À i=3, condition fausse → fin avec i=3.

Ordre des opérations :
• Évalue d’abord i<len(lst).

Cas d'utilisation courants :
• Parser jusqu’à terminateur, buffer C-style.

Cas limites :
• Pas de zéro : i atteint len après dernier incrément ? Ici présence de 0 garantit arrêt avant.

Considérations de performance :
• O(position du zéro).

Exemples :
• 0 en tête : i=0 immédiat faux? lst[0]!=0 faux d’entrée → boucle jamais, i=0.

Remarques :
• Vérifiez : au premier 0, on ne fait pas i+=1.`,

  1485: `La bonne réponse est [14] : notation postfixe [3,4,"+",2,"*"] → pile 3,4 puis +→7 puis push 2 puis *→14.

Débutant :
• int → append ; opérateur → pop b puis a (ordre!) puis push résultat.
• * applique 7*2.

Intermédiaire :
• b,a = stack.pop(), stack.pop() aligne a op b pour + et * commutatifs mais vital pour -/.
• RPN sans parenthèses.

Expert :
• Vérifications d’arité, erreurs de pile insuffisante en vrai parseur.

Concepts clés :
• Pile LIFO ; isinstance ; dispatch op.

Distinctions clés :
• Postfix vs infix avec parenthèses.

Fonctionnement :
• Un seul résultat final reste si expression valide.

Exécution étape par étape :
1. Push 3,4 ; '+' → 7.
2. Push 2 ; '*' → 14.

Ordre des opérations :
• pop twice puis append once par opérateur.

Cas d'utilisation courants :
• Calculatrices HP, compilateurs, DSL.

Cas limites :
• Expression mal formée : IndexError possible.

Considérations de performance :
• O(n) sur tokens.

Exemples :
• [2,3,"-"] avec b,a pop donne 2-3=-1 (non commutatif).

Remarques :
• Retenez l’ordre des pop pour − et /.`,

  1486: `La bonne réponse est 3 : parse "a,bb,ccc" avec i parcourant 0..len inclusive, coupures sur ',' ou fin.

Débutant :
• Quand i atteint une virgule ou len, append s[start:i] puis start=i+1.
• Trois champs : a, bb, ccc.

Intermédiaire :
• i<=len avec test i==len capture le dernier segment après dernière virgule.
• Équivaut split(",") pour ce cas simple.

Expert :
• CSV réel gère quotes, échappements — ici naïf.

Concepts clés :
• Deux pointeurs start,i ; while ; append slice.

Distinctions clés :
• len(parts) vs len(s).

Fonctionnement :
• i s’incrémente toujours ; start saute après séparateur.

Exécution étape par étape :
1. Virgules positions 1 et 4 déclenchent deux appends intermédiaires.
2. Fin de chaîne déclenche troisième append.

Ordre des opérations :
• Condition if i==len(s) or s[i]=="," avant append.

Cas d'utilisation courants :
• Logs tabulaires, parsing config minimale.

Cas limites :
• Chaîne vide : un champ "" possible selon logique — pas ce s.

Considérations de performance :
• O(n) scan unique.

Exemples :
• ",a," → champs vides possibles avec ce schéma.

Remarques :
• start = i+1 évite de garder la virgule dans le champ.`,

  1487: `La bonne réponse est 2 : recherche naïve de "cab" dans "abcabc" trouve match à i=2 (sous-chaîne s[2:5]).

Débutant :
• i=0 "abc"≠ ; i=1 "bca"≠ ; i=2 "cab"== → found=2 break.
• Boucle bornée par len(text)-len(pat).

Intermédiaire :
• Équivalent à text.find(pat) pour première occurrence.
• Coût O(n*m) naïf.

Expert :
• KMP/Boyer-Moore réduisent recompares.

Concepts clés :
• Fenêtre glissante ; slice comparaison ; break.

Distinctions clés :
• Indice début vs fin ; -1 si absent (ici 2).

Fonctionnement :
• Comparaisons text[i:i+len(pat)] == pat.

Exécution étape par étape :
1. Essais i=0,1 échouent.
2. i=2 succès → found=2.

Ordre des opérations :
• len(pat) constant précalculable.

Cas d'utilisation courants :
• Recherche sous-chaîne, plagiarism light, bioinfo naïf.

Cas limites :
• pat vide : définition spéciale — non ici.

Considérations de performance :
• Peut être lent sur très grandes entrées.

Exemples :
• pat plus long que text : boucle jamais, found=-1.

Remarques :
• Retenez que l’index est celui du c début de "cab".`,

  1488: `La bonne réponse est 4 : not(x>=4 or x<=0) ≡ (x<4 et x>0) ; x part de 1 et s’incrémente jusqu’à sortir de ]0,4[.

Débutant :
• x=1,2,3 satisfont 0<x<4 ; boucle tourne.
• À x=4, x>=4 vrai → or vrai → not faux.

Intermédiaire :
• Lois de De Morgan pour relire la négation.
• x+=1 chaque passage.

Expert :
• Frontière inclusive/exclusive cruciale sur comparateurs.

Concepts clés :
• not, or, inégalités ; while sur entier.

Distinctions clés :
• Sortie à 4 vs 3 selon condition (ici 4).

Fonctionnement :
• Teste la condition avant chaque incrément suivant.

Exécution étape par étape :
1. x=1,2,3 : boucle exécute x+=1 → devient 2,3,4.
2. Avant un cinquième corps, x=4 fait échouer la garde.

Ordre des opérations :
• x évalué une fois par test while.

Cas d'utilisation courants :
• Garde-fous sur intervalles, validation bornes.

Cas limites :
• x initial hors intervalle : boucle jamais ou immédiate selon valeur.

Considérations de performance :
• Quelques itérations seulement.

Exemples :
• Remplacer par while 0<x<4: même famille.

Remarques :
• x final affiché est 4, pas 3.`,

  1489: `La bonne réponse est (True, 1) : fenêtre de longueur len(target) sur data ; première égalité [3,5,3] commence à i=1.

Débutant :
• i=0 [1,3,5]≠ ; i=1 [3,5,3]== → found True, break.
• i vaut 1 à la sortie.

Intermédiaire :
• Comme find sur liste via slicing.
• bornes i <= len(data)-len(target).

Expert :
• Peut optimiser sans slice alloué (comparaison manuelle).

Concepts clés :
• Sous-liste contiguë ; booléen found ; break.

Distinctions clés :
• (True,1) vs (True,3) autre occurrence plus loin.

Fonctionnement :
• Incrémente i jusqu’à match ou fin des positions.

Exécution étape par étape :
1. Test positions 0 puis 1.
2. Match à 1 interrompt avec found True.

Ordre des opérations :
• len(data)-len(target) calcule dernier départ valide.

Cas d'utilisation courants :
• Détection motifs capteurs, séquences ADN simplifiées, logs.

Cas limites :
• target plus long que data : pas d’itération, found False.

Considérations de performance :
• O(n*m) naïf avec slices.

Exemples :
• target=[1] → premier indice de 1.

Remarques :
• Retenez i du début du motif, pas de son milieu.`,

  1490: `La bonne réponse est (14, 5) : une passe calcule total=3+1+4+1+5=14 et met à jour mx quand nums[i]>mx.

Débutant :
• mx initial nums[0]=3 ; max devient 4 puis 5.
• total cumule tous les éléments.

Intermédiaire :
• Alternative : built-ins sum(nums) et max(nums) mais double passage.
• Ici un seul while.

Expert :
• Pattern streaming pour flux infinis (avec précautions).

Concepts clés :
• Deux accumulateurs ; comparaison ; index i.

Distinctions clés :
• (14,5) vs (5,14) ordre du tuple demandé.

Fonctionnement :
• Chaque élément met à jour total systématiquement ; mx conditionnellement.

Exécution étape par étape :
1. Parcourt 3,1,4,1,5 en mettant à jour total et mx.
2. Fin tuple (14,5).

Ordre des opérations :
• mx initialise avant boucle sur premier élément déjà.

Cas d'utilisation courants :
• Stats en ligne, capteurs, réductions multiples.

Cas limites :
• Liste vide : accès nums[0] erreur — non ici.

Considérations de performance :
• O(n) temps, O(1) mémoire extra.

Exemples :
• Tous égaux : mx reste la première valeur si jamais strict >.

Remarques :
• Si > remplacé par >=, mx prendrait la dernière occurrence max.`,

  1491: `La bonne réponse est 354 : h = (h*31 + ord(s[i])) % 1000 sur "abc" avec h successif 97, 105 puis 354.

Débutant :
• 'a'→97 ; (97*31+98)%1000=105 ; (105*31+99)%1000=354.
• Prime 31 style hashCode Java.

Intermédiaire :
• Hash polynomial roulant modulo pour borner la valeur.
• Collisions possibles modulo petit.

Expert :
• Choisir base premier et grand modulo réduit collisions (ici pédagogique 1000).

Concepts clés :
• ord ; multiplication-addition-modulo ; boucle sur chaîne.

Distinctions clés :
• Valeur finale vs hash sans modulo (énorme).

Fonctionnement :
• h agrège tous les caractères dans l’ordre gauche-droite.

Exécution étape par étape :
1. i=0 'a' → 97.
2. i=1 'b' → 105.
3. i=2 'c' → 354.

Ordre des opérations :
• %1000 après chaque étape pour rester borné.

Cas d'utilisation courants :
• Tables de hachage, Rabin-Karp simplifié, fingerprints.

Cas limites :
• Chaîne vide : h=0.

Considérations de performance :
• O(len(s)) ; modulo coût négligeable.

Exemples :
• Changer 31 ou 1000 change complètement h.

Remarques :
• h n’est pas cryptographiquement sûr.`,

  1492: `La bonne réponse est "olleh" : i=0..len-1, on append s[len-1-i] — parcours indices croissants mais caractères depuis la fin.

Débutant :
• Indices accédés 4,3,2,1,0 pour "hello".
• Concaténation produit olleh.

Intermédiaire :
• Diffère de la question 1452 (i décroissant) mais même résultat sur même entrée.
• Coût concat répété O(n²) théorique.

Expert :
• ''.join(list comprehension) plus efficace.

Concepts clés :
• len(s)-1-i ; while compteur avant len ; inversion.

Distinctions clés :
• Index arithmétique vs boucle décrémentale.

Fonctionnement :
• Chaque tour ajoute un caractère du revers.

Exécution étape par étape :
1. i=0 → 'o' ; i=1 → 'ol' ; … jusqu’à 'olleh'.

Ordre des opérations :
• len(s) recalculé chaque fois (micro-optimisable).

Cas d'utilisation courants :
• Miroirs de chaînes, tests palindrome brut.

Cas limites :
• len 0 : boucle vide.

Considérations de performance :
• Préférer slicing [::-1] en production.

Exemples :
• Même technique sur "ab" → "ba".

Remarques :
• Comparez mentalement avec s[i] décroissant de 1452.`,

  1493: `La bonne réponse est "ff" : conversion hex par %16 et //16 avec table "0123456789abcdef", préfixage à result.

Débutant :
• 255%16=15→'f', n=15 ; 15%16=15→'f', n=0.
• Préfixage donne "ff" (minuscules).

Intermédiaire :
• Vérification 15*16+15=255.
• Similaire à itoa mais base 16.

Expert :
• hex(255)[2:] équivalent rapide ; uppercase via table ou .upper().

Concepts clés :
• Division-módulo base B ; lookup string ; prepend.

Distinctions clés :
• "ff" vs "FF" (casse) — ici minuscule forcée par la table.

Fonctionnement :
• Boucle jusqu’à n=0 ; ordre digits corrigé par préfixage.

Exécution étape par étape :
1. Premier 'f' depuis nibble faible de 255.
2. Second 'f' depuis 15.

Ordre des opérations :
• n //= 16 après extraction du digit.

Cas d'utilisation courants :
• Couleurs web, dumps mémoire, flags bitmask.

Cas limites :
• n=0 : boucle vide → "" (cas particulier à traiter ailleurs).

Considérations de performance :
• O(log16 n).

Exemples :
• 16 → "10" avec même schéma.

Remarques :
• La chaîne lookup fixe la casse des lettres a-f.`,

  1494: `La bonne réponse est [1, 2, 3, 4, 5] : double while — pour chaque ligne i, j parcourt colonnes variables, append chaque élément.

Débutant :
• Ligne0 [1,2] ; ligne1 [3] ; ligne2 [4,5] → aplatissement dans l’ordre lecture.
• j réinitialisé à 0 pour chaque nouvelle ligne.

Intermédiaire :
• Liste irrégulière (jagged) gérée car len(matrix[i]) varie.
• Équivalent list comprehension imbriquée.

Expert :
• itertools.chain.from_iterable pour style fonctionnel.

Concepts clés :
• Boucles imbriquées while ; indices i,j ; append.

Distinctions clés :
• Aplatir vs copier la matrice.

Fonctionnement :
• i contrôle la ligne courante ; j balaie la sous-liste.

Exécution étape par étape :
1. i=0 j=0,1 → 1,2.
2. i=1 j=0 → 3.
3. i=2 j=0,1 → 4,5.

Ordre des opérations :
• Incrément j inner avant i outer.

Cas d'utilisation courants :
• Grilles CSV, images 2D, batch flatten.

Cas limites :
• Matrice vide : flat reste [].

Considérations de performance :
• O(total éléments).

Exemples :
• Lignes vides internes : aucun append pour cette ligne.

Remarques :
• Attention à réinitialiser j pour chaque i.`,

  1495: `La bonne réponse est 8 : while 1 <= x <= 5 double x ; séquence 1→2→4→8 puis chaîne fausse car 8<=5 faux.

Débutant :
• Comparaison chaînée signifie (1<=x) et (x<=5).
• Sortie quand x=8.

Intermédiaire :
• Feature Python lisible ; autres langages exigent and explicite.
• *=2 chaque itération réussie.

Expert :
• Attention aux tests chaînés non transitifs si on mélange types (pas ici).

Concepts clés :
• chained comparison ; while ; *=.

Distinctions clés :
• x final 8 vs 6 si la condition différait.

Fonctionnement :
• Réévalue la chaîne après chaque doublement.

Exécution étape par étape :
1. 1∈[1,5] →2 ; 2∈→4 ; 4∈→8.
2. Test suivant 1<=8 vrai mais 8<=5 faux → stop.

Ordre des opérations :
• Les deux comparaisons doivent être vraies.

Cas d'utilisation courants :
• Borner intervalles, valider saisie numérique.

Cas limites :
• x initial hors intervalle : boucle jamais.

Considérations de performance :
• Très petit nombre de tours.

Exemples :
• Pas *=3 changerait la sortie rapidement.

Remarques :
• Ne traduisez pas naïvement 1 <= x <= 5 en C sans splitter.`,

  1496: `La bonne réponse est 6 : pièces gloutonnes [25,10,5,1] pour 67 cents — deux 25, un 10, un 5, deux 1.

Débutant :
• Tant que amount>0, si amount>=coins[i] on consomme cette pièce sinon i+=1.
• Comptage total 2+1+1+2=6.

Intermédiaire :
• Optimal pour ces dénominations US, pas pour tout ensemble.
• i pointe sur la plus grande pièce utilisable courante.

Expert :
• Contre-exemple classique coins [1,3,4] amount 6 : glouton donne 3 pièces, optimal 2.

Concepts clés :
• Glouton ; liste ordonnée ; while amount ; compteur.

Distinctions clés :
• 6 pièces vs 67 pièces (trop de 1 cent seul).

Fonctionnement :
• Diminue amount quand une grande pièce rentre ; avance i sinon.

Exécution étape par étape :
1. 67-25-25=17 ; puis 10 →7 ; 5→2 ; 1+1→0.
2. count=6.

Ordre des opérations :
• Ne pas trier coins dans la boucle : ordre initial supposé décroissant.

Cas d'utilisation courants :
• Caisse, rendu monnaie, exercices DP vs glouton.

Cas limites :
• amount 0 d’entrée : count 0.

Considérations de performance :
• O(amount) pire cas pièces de 1.

Exemples :
• amount=30 → 25+5 en 2 coups.

Remarques :
• Retenez : optimalité dépend des pièces, pas de l’algorithme seul.`,

  1497: `La bonne réponse est 5 : rows et total accumulent des lignes pyramidales ; on ajoute une ligne k si total + k + 1 <= 15.

Débutant :
• k=1..5 : totaux cumulés 1,3,6,10,15 correspondent à sommes 1+2+...+k.
• k=6 ferait total+6+1>15 donc arrêt après 5 lignes complètes.

Intermédiaire :
• Nombres triangulaires T(k)=k(k+1)/2.
• Condition teste la ligne suivante avant incrémentation combinée rows/total.

Expert :
• Modélise remplissage de capacité avec coût croissant par ligne.

Concepts clés :
• Deux accumulateurs ; while sur inégalité ; incréments liés.

Distinctions clés :
• rows=5 vs total=15 (quantités différentes).

Fonctionnement :
• rows +=1 puis total += rows chaque admission (ici rows représente l’index de ligne courante ajoutée).

Exécution étape par étape :
1. Itérations jusqu’à total=15 avec rows=5.
2. Test suivant échoue pour la sixième ligne.

Ordre des opérations :
• Évalue total + rows + 1 avec valeurs avant incrément du tour courant.

Cas d'utilisation courants :
• Capacité cargo, quotas cumulatifs, puzzles.

Cas limites :
• Limite très petite peut donner 0 lignes.

Considérations de performance :
• O(rows) trivial.

Exemples :
• Plafond 10 → 4 lignes (total 10).

Remarques :
• Relisez la condition : elle inclut +1 au-delà du total actuel.`,

  1498: `La bonne réponse est 6 : générateur yield 1,2,3 consommé par while True / next jusqu’à StopIteration — total = 1+2+3.

Débutant :
• next(g) avance jusqu’au prochain yield.
• Après le troisième yield, next lève StopIteration capturée.

Intermédiaire :
• Équivaut à for v in gen(): total += v.
• while True + try/except est la désucrage manuelle.

Expert :
• Générateurs gardent l’état entre next ; utiles pour flux.

Concepts clés :
• yield ; StopIteration ; next ; accumulateur.

Distinctions clés :
• Somme 6 vs nombre d’appels next (4 dont le dernier exception).

Fonctionnement :
• Chaque next réveille gen jusqu’au yield suivant ou fin.

Exécution étape par étape :
1. total=1 puis 3 puis 6.
2. Quatrième next lève → break.

Ordre des opérations :
• try entoure next pour gérer fin propre.

Cas d'utilisation courants :
• Pipelines lazy, gros fichiers ligne à ligne.

Cas limites :
• Générateur vide : total reste 0.

Considérations de performance :
• Mémoire O(1) pour le générateur seul.

Exemples :
• yields supplémentaires prolongent la somme.

Remarques :
• Ne confondez pas valeur retournée de return en generator (PEP 380) — pas ici.`,

  1499: `La bonne réponse est 2 : sur "(()())", depth monte/descend ; max_d = max(max_d, depth) après chaque '(' atteint un pic de 2.

Débutant :
• '(' incrémente depth et met max_d à jour ; ')' décrémente seulement.
• Pic à 2, pas 3 (chaîne différente de ((())) ).

Intermédiaire :
• Variante par rapport à max_d seulement sur '(' vs mise à jour chaque pas.
• Chaîne équilibrée finit depth=0.

Expert :
• Détecter malformation si depth<0 en cours ou fin ≠0.

Concepts clés :
• Profondeur ; max courant ; scan unique.

Distinctions clés :
• 2 vs 3 comme autre exercice avec plus de nesting.

Fonctionnement :
• i linéaire sur len(s).

Exécution étape par étape :
1. Séquence des depth : jamais 3 dans cette chaîne précise.
2. max_d retient 2.

Ordre des opérations :
• max() après incrément depth sur '('.

Cas d'utilisation courants :
• Valider expressions, SQL imbriqué, JSON profondeur.

Cas limites :
• Chaîne vide : max_d 0.

Considérations de performance :
• O(n).

Exemples :
• "((()))" donnerait 3 — autre donnée.

Remarques :
• Reliez toujours max_d à la chaîne affichée, pas à un autre exercice.`,

  1500: `La bonne réponse est 6 : round-robin sur charges [3,2,1] avec while any(t>0) et for interne — chaque unité de travail compte un tour, total 3+2+1.

Débutant :
• Chaque passage complet diminue chaque tâche positive d’1 quand son tour arrive.
• Compteur turns additionne chaque décrément.

Intermédiaire :
• any(t>0 for t in tasks) régénère l’état après chaque round externe.
• Somme des tâches égale nombre total de tours ici.

Expert :
• Modèle CPU time slicing simplifié ; files réelles ont priorités et quantum variables.

Concepts clés :
• while + for imbriqués ; any générateur ; mutation liste tasks.

Distinctions clés :
• 6 tours vs 3 rounds visuels (multiples décréments par round).

Fonctionnement :
• Répète tant qu’au moins une tâche a travail restant.

Exécution étape par étape :
1. Rounds successifs réduisent [3,2,1] jusqu’à [0,0,0].
2. turns cumulés =6.

Ordre des opérations :
• for parcourt indices dans ordre croissant chaque outer iteration.

Cas d'utilisation courants :
• Ordonnancement équitable, files multi-clients, simulations files d’attente.

Cas limites :
• Toutes tâches 0 au départ : boucle while jamais.

Considérations de performance :
• O(total travail * len(tasks)) naïf.

Exemples :
• [1,1,1] → 3 tours.

Remarques :
• Vérifiez que turns est bien la somme des charges initiales dans ce schéma précis.`,
};
