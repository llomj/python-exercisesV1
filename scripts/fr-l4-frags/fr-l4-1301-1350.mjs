/** Level 4 FR 1301–1350 — for/else, variables, dicts, zip, range, compréhensions. Aligné sur level4_for_loops.ts (questions 5–54). */
export default {
  1301: `Rien n'est affiché : un break interrompt la boucle, donc le else du for ne s'exécute pas — « completed » n'apparaît jamais.

Débutant :
• for i in range(5) parcourt 0…4 ; à i == 2, break sort de la boucle.
• Le bloc else aligné sur for s'exécute seulement si la boucle se termine sans break.
• Ici la sortie est par break → else ignoré → aucun print.

Intermédiaire :
• La clause else d'un for n'est pas un « sinon si la condition est fausse » : c'est « sinon aucun break ».
• continue n'empêche pas l'else ; seul break (ou return dans une fonction) change ce comportement.

Expert :
• Sémantique CPython : sortie normale de l'itérateur → else exécuté ; sortie par break → else sauté.
• Utile pour distinguer « parcours complet » vs « sortie anticipée » sans variable booléenne.

Concepts clés :
• for / break / else ; achèvement normal vs interruption.

Distinctions clés :
• else du for vs else du if ; vs while/else (même idée : pas de break).

Fonctionnement :
• Itérations jusqu'à i=2, break ; le else n'est pas évalué après un break.

Exécution étape par étape :
1. i=0,1 : pas de break.
2. i=2 : break → fin de la boucle for.
3. Le else du for est ignoré ; rien n'est imprimé.

Ordre des opérations :
• Chaque tour : test if, éventuel break ; après la boucle, else seulement si pas de break.

Cas d'utilisation courants :
• Recherche avec message « non trouvé » uniquement si parcours complet.

Cas limites :
• Si le break est dans une fonction imbriquée, ce n'est pas le même break (pas ce cas ici).

Considérations de performance :
• Coût négligeable ; lisibilité du pattern for-else.

Exemples :
• for n in nums: ... break / else: print("aucun") — même logique.

Remarques :
• Mémotechnique : else = « pas interrompu par break ».`,

  1302: `Affiche « all odd » : aucun pair, donc pas de break, et le else du for s'exécute.

Débutant :
• nums = [1, 3, 5, 7] : tous impairs, n % 2 == 0 jamais vrai.
• break jamais appelé → la boucle finit normalement → else imprime « all odd ».

Intermédiaire :
• Pattern classique « recherche d'un élément satisfaisant une condition » : else = « rien trouvé ».
• Si un pair existait, break après le print « even found » → else non exécuté.

Expert :
• Équivalent conceptuel à un drapeau found=False, mais plus idiomatique en Python.

Concepts clés :
• for-else comme « complétion sans succès de la recherche ».

Distinctions clés :
• Ici else annonce l'absence de pair, pas une erreur.

Fonctionnement :
• Chaque n est testé ; la boucle va au bout ; else s'exécute une fois.

Exécution étape par étape :
1. n=1,3,5,7 : aucun ne déclenche le if pair.
2. Fin d'itération normale.
3. else : print « all odd ».

Ordre des opérations :
• Tests dans l'ordre de la liste ; else après le dernier tour.

Cas d'utilisation courants :
• Valider qu'une propriété tient pour tous les éléments sans break.

Cas limites :
• Liste vide : corps jamais exécuté, else s'exécute quand même (toujours « pas de break »).

Considérations de performance :
• Parcourt toute la liste si aucun pair — acceptable pour petites données.

Exemples :
• Chercher un diviseur : for d in range(2,n): if n%d==0: break / else: « premier ».

Remarques :
• Ne pas confondre avec « tous impairs » logique : ici le message vient du else du for.`,

  1303: `Affiche 4 : après la boucle, la variable de boucle x garde sa dernière valeur (4) pour range(5).

Débutant :
• for x in range(5) : x vaut 0, puis 1, … jusqu'à 4.
• Après la boucle, x existe encore dans la portée englobante et vaut 4.
• print(x) affiche donc 4, pas 5.

Intermédiaire :
• range(5) s'arrête avant 5 ; la dernière valeur assignée à x est 4.
• Ce n'est pas comme une variable locale de bloc C/Java.

Expert :
• La cible du for est réassignée à chaque itération ; au terme, elle reste sur le dernier élément produit.

Concepts clés :
• Fuite de la variable de boucle en Python 3.

Distinctions clés :
• Dernière valeur vs len(itérable) ; vs IndexError sur liste vide (autre question).

Fonctionnement :
• Itérations complètes avec pass ; ensuite print utilise x encore lié.

Exécution étape par étape :
1. x prend 0,1,2,3,4 successivement.
2. Boucle terminée ; x vaut 4.
3. print(x) → 4.

Ordre des opérations :
• D'abord la boucle, puis print après.

Cas d'utilisation courants :
• Parfois utilisé pour le dernier élément traité (mais risqué si boucle vide).

Cas limites :
• Si break au milieu, x vaut l'élément courant au moment du break.

Considérations de performance :
• Négligeable.

Exemples :
• for x in []: pass puis print(x) → NameError si x non défini avant.

Remarques :
• Pour éviter la confusion, réinitialiser explicitement une variable après la boucle si besoin.`,

  1304: `NameError : avec for x in []:, le corps ne s'exécute jamais, donc x n'est jamais assigné ; print(x) échoue si x n'existait pas avant.

Débutant :
• Liste vide : zéro itération.
• Sans tour de boucle, l'instruction d'assignation à x ne s'exécute pas.
• print(x) cherche x → non défini → NameError.

Intermédiaire :
• Si x avait été défini avant la boucle, l'ancienne valeur serait encore là (piège différent).

Expert :
• Le cadre de boucle prépare la cible, mais l'assignation n'a lieu qu'à chaque next() de l'itérateur.

Concepts clés :
• Itérable vide et variable de boucle non liée.

Distinctions clés :
• NameError vs valeur « résiduelle » d'une boucle précédente.

Fonctionnement :
• Itérateur épuisé immédiatement ; aucune assignation à x.

Exécution étape par étape :
1. Entrée dans for x in [].
2. Aucune itération.
3. print(x) : x absent → NameError.

Ordre des opérations :
• Contrôle de flux sort de la boucle sans avoir assigné x.

Cas d'utilisation courants :
• Toujours initialiser ou tester la liste avant d'utiliser la variable après la boucle.

Cas limites :
• Même chose pour tout itérable vide.

Considérations de performance :
• N/A.

Exemples :
• x = None avant la boucle si vous devez lire x après.

Remarques :
• Bonne pratique : ne pas compter sur x après un for sans garantir au moins une itération.`,

  1305: `result vaut [100, 101, 102] : à chaque tour, i est d'abord pris depuis range(3) (0,1,2), puis i += 100 dans le corps ne change pas l'itérateur.

Débutant :
• range(3) fournit 0, puis 1, puis 2.
• Après i += 100 : 100, 101, 102 ajoutés à result.

Intermédiaire :
• Modifier la variable de boucle n'avance pas « manuellement » l'itérateur ; la valeur suivante vient toujours du next() interne.

Expert :
• Le protocole d'itération est indépendant des réassignations locales de i pendant le corps.

Concepts clés :
• Variable de boucle vs état interne de l'itérateur range.

Distinctions clés :
• Différent d'une boucle while où i contrôle tout.

Fonctionnement :
• Chaque itération : bind i ← valeur du range ; corps : i += 100 ; append.

Exécution étape par étape :
1. i=0 → i=100 → append 100.
2. i=1 → i=101 → append 101.
3. i=2 → i=102 → append 102.

Ordre des opérations :
• Assignation depuis l'itérateur avant le corps, à chaque tour.

Cas d'utilisation courants :
• Anti-pattern pédagogique : montrer qu'il ne faut pas « piloter » un for ainsi.

Cas limites :
• Avec d'autres itérables mutables, la confusion est encore plus grande.

Considérations de performance :
• O(n) append.

Exemples :
• Utiliser une variable séparée offset si vous devez combiner index et décalage.

Remarques :
• Pour transformer l'index, préférer for i in range(3): utiliser i+100 explicitement.`,

  1306: `["a1", "b2"] : la compréhension parcourt .items(), dépaquette k et v, et concatène k + str(v).

Débutant :
• {"a":1,"b":2}.items() donne des paires ('a',1) et ('b',2) (ordre d'insertion en 3.7+).
• k + str(v) donne "a"+"1"="a1", "b"+"2"="b2".

Intermédiaire :
• Sans str(v), int + str provoquerait TypeError.

Expert :
• Vue dynamique sur le dict ; ici le littéral est figé à la construction.

Concepts clés :
• dict.items(), dépaquetage k,v, compréhension de liste.

Distinctions clés :
• .items() vs .keys() vs .values().

Fonctionnement :
• Pour chaque paire : évaluer k + str(v), collecter dans une liste.

Exécution étape par étape :
1. Premier item : a, 1 → "a1".
2. Second : b, 2 → "b2".
3. Liste ["a1","b2"].

Ordre des opérations :
• Itération selon l'ordre du dict.

Cas d'utilisation courants :
• Formater des paires clé-valeur pour affichage ou logs.

Cas limites :
• Clés non str : il faudrait str(k) aussi.

Considérations de performance :
• Linéaire en nombre d'items.

Exemples :
• [f"{k}={v}" for k,v in d.items()] — même idée.

Remarques :
• Pour de grandes structures, un générateur entre parenthèses évite la liste matérialisée.`,

  1307: `60 : sum sur dict.values() additionne 10 + 20 + 30.

Débutant :
• .values() expose 10, 20, 30.
• sum les additionne → 60.

Intermédiaire :
• sum() attend un itérable numérique ; l'ordre suit celui du dict (insertion en 3.7+).

Expert :
• Vue values ; pas de copie des valeurs scalaires.

Concepts clés :
• Agrégation sur les valeurs d'un mapping.

Distinctions clés :
• sum(d) parcourrait les clés (souvent erreur ou pas l'intention).

Fonctionnement :
• Itération sur la vue values ; accumulateur interne du sum.

Exécution étape par étape :
1. Valeurs 10, 20, 30 produites.
2. Accumulation 60.

Ordre des opérations :
• Gauche à droite selon l'itération du dict.

Cas d'utilisation courants :
• Totaux, inventaires, scores agrégés.

Cas limites :
• dict vide → sum 0 ; valeurs non numériques → TypeError.

Considérations de performance :
• CPython optimise sum sur petits entiers.

Exemples :
• sum(point[1] for point in d.items()) si besoin de filtrer.

Remarques :
• Pour flottants, prudence avec l'associativité ; math.fsum pour stabilité.`,

  1308: `RuntimeError : en CPython, modifier la taille d'un dict pendant l'itération sur ses clés (for k in d) est interdit — ici ajouter "c" change la taille.

Débutant :
• La boucle commence sur d = {"a":1,"b":2}.
• d["c"]=3 ajoute une entrée pendant l'itération → erreur.

Intermédiaire :
• Modifier une valeur existante sans changer les clés est souvent permis ; ajouter/supprimer des clés non.

Expert :
• Détection lors de l'itération pour garantir un comportement défini.

Concepts clés :
• Itération sûre sur dict vs mutation de structure.

Distinctions clés :
• RuntimeError ici vs KeyError ou logique erronée dans d'autres cas.

Fonctionnement :
• Itérateur du dict invalide si taille change.

Exécution étape par étape :
1. Entrée dans for k in d.
2. Corps tente d'agrandir d → RuntimeError.

Ordre des opérations :
• Erreur avant fin de boucle.

Cas d'utilisation courants :
• Itérer sur list(d.keys()) ou dict.copy() pour collecter les changements à appliquer après.

Cas limites :
• Même problème avec pop, clear, update qui changent les clés.

Considérations de performance :
• list(keys) coûte O(n) mémoire mais évite l'erreur.

Exemples :
• for k in list(d): d[k2]=... après planification.

Remarques :
• Consulter la doc « dictionary views » pour les règles exactes de mutation.`,

  1309: `"abc" : dépaquetage (num, letter) ; seules les lettres sont concaténées.

Débutant :
• Paires (1,"a"), (2,"b"), (3,"c").
• result += letter → "a"+"b"+"c".

Intermédiaire :
• num est ignoré mais doit exister pour le dépaquetage (2 variables, tuple de taille 2).

Expert :
• Généralisable à des enregistrements de largeur fixe.

Concepts clés :
• for avec cibles multiples, itération sur liste de tuples.

Distinctions clés :
• Différent d'une seule variable qui serait le tuple entier.

Fonctionnement :
• Chaque tuple assigné à (num, letter) ; corps utilise letter.

Exécution étape par étape :
1. num=1, letter='a' → result "a".
2. idem 'b','c'.

Ordre des opérations :
• Ordre de la liste pairs.

Cas d'utilisation courants :
• Lignes CSV, coordonnées (x,y) avec une composante utile.

Cas limites :
• Tuple de mauvaise longueur → ValueError au dépaquetage.

Considérations de performance :
• Concaténation répétée O(n²) sur très longues chaînes ; ici négligeable.

Exemples :
• "".join(letter for _, letter in pairs) plus efficace sur gros volume.

Remarques :
• Utiliser _ pour num si lint exige une variable non utilisée.`,

  1310: `[6, 15] : dépaquetage imbriqué a, (b, c) puis a+b+c pour chaque ligne.

Débutant :
• (1,(2,3)) → a=1, b=2, c=3 → somme 6.
• (4,(5,6)) → 4+5+6=15.

Intermédiaire :
• Le motif à droite du for doit refléter la forme de chaque élément.

Expert :
• Aligné sur l'assignation imbriquée PEP 448 / unpacking généralisé.

Concepts clés :
• Nested unpacking dans la cible du for.

Distinctions clés :
• vs aplatir d'abord avec une boucle interne explicite.

Fonctionnement :
• Pour chaque élément de data, une assignation structurelle puis append.

Exécution étape par étape :
1. Premier tuple : 1+2+3=6.
2. Second : 4+5+6=15.

Ordre des opérations :
• Évaluation des sommes entières gauche à droite.

Cas d'utilisation courants :
• Arbres, records avec sous-champs fixes.

Cas limites :
• Structure hétérogène → erreur de forme.

Considérations de performance :
• Linéaire en nombre d'éléments.

Exemples :
• Même idée avec *rest pour queues variables.

Remarques :
• Si la structure devient trop profonde, nommer des sous-structures clarifie le code.`,

  1311: `2 : dans "hello", voyelles e et o → count = 2.

Débutant :
• Itération caractère par caractère.
• ch in "aeiou" teste la voyelle.

Intermédiaire :
• minuscules seulement ; "E" ne compterait pas ici.

Expert :
• Ordre O(n) sur la longueur de la chaîne ; ensemble frozenset('aeiou') pour tests répétés.

Concepts clés :
• Chaîne itérable, comptage conditionnel.

Distinctions clés :
• vs str.count qui compte une sous-chaîne exacte.

Fonctionnement :
• Pour chaque ch : test membership, incrément éventuel.

Exécution étape par étape :
• h,l,l non voyelles ; e,o voyelles → 2.

Ordre des opérations :
• De gauche à droite dans "hello".

Cas d'utilisation courants :
• Validation lexicale, analyse simple.

Cas limites :
• Chaîne vide → 0.

Considérations de performance :
• Pour très long texte, considérer sets ou regex selon besoin.

Exemples :
• sum(1 for ch in s if ch in "aeiou").

Remarques :
• Normaliser casse (lower()) si entrée utilisateur.`,

  1312: `"cba" : construction par préfixage rev = ch + rev à chaque caractère.

Débutant :
• "a" → "a" ; puis "b"+"a"="ba" ; puis "c"+"ba"="cba".

Intermédiaire :
• s[::-1] ou reversed(s) sont plus idiomatiques pour inverser.

Expert :
• Coût quadratique si la chaîne est très longue (nouvelles chaînes à chaque +).

Concepts clés :
• Inversion par accumulation, immutabilité des str.

Distinctions clés :
• Préfixer vs suffixer (ordre inverse du résultat).

Fonctionnement :
• Itération gauche-droite sur s, construction droite-gauche dans rev.

Exécution étape par étape :
1. rev "" ; 'a' → "a".
2. 'b' → "ba".
3. 'c' → "cba".

Ordre des opérations :
• Un tour par caractère.

Cas d'utilisation courants :
• Pédagogie ; palindromes simples.

Cas limites :
• s vide → "".

Considérations de performance :
• Préférer join(reversed(s)) sur grandes données.

Exemples :
• "".join(reversed("abc")) → "cba".

Remarques :
• bytearray si mutation in-place nécessaire pour bytes-like.`,

  1313: `[(1, "x"), (2, "y")] : zip s'arrête à la plus courte séquence — ici 2 paires, le 3 de la première liste est ignoré.

Débutant :
• zip paire 1 avec x, 2 avec y ; fin car plus de second élément.

Intermédiaire :
• Pas d'erreur, pas de None implicite — troncature silencieuse.

Expert :
• itertools.zip_longest pour compléter avec fillvalue.

Concepts clés :
• zip, arrêt au minimum des longueurs.

Distinctions clés :
• vs zip strict (3.10+) qui lève si longueurs différentes.

Fonctionnement :
• Itérateur paresseux ; list() matérialise.

Exécution étape par étape :
1. Premier next → (1,"x").
2. Second → (2,"y").
3. Fin (liste 2 épuisée).

Ordre des opérations :
• Avance synchronisée sur les deux itérables.

Cas d'utilisation courants :
• Fusionner colonnes de données de même longueur attendue.

Cas limites :
• zip vide + non vide → liste vide.

Considérations de performance :
• Paresseux, O(min(n,m)) pour consommer.

Exemples :
• dict(zip(keys, vals)) — attention aux longueurs.

Remarques :
• Valider len() ou zip(..., strict=True) si les longueurs doivent coïncider.`,

  1314: `[(10, "a"), (11, "b"), (12, "c")] : enumerate(..., start=10) fixe le premier indice à 10 puis incrémente.

Débutant :
• start=10 ne saute pas d'éléments : toujours a,b,c dans l'ordre.

Intermédiaire :
• Équivalent à un compteur manuel initialisé à 10.

Expert :
• Le second argument est nommé start (pas seulement positionnel après l'itérable en style ancien).

Concepts clés :
• enumerate, décalage d'index pour affichage humain (lignes 1-based, etc.).

Distinctions clés :
• vs range(len) + indexation manuelle.

Fonctionnement :
• Chaque élément reçoit (index, valeur) avec index croissant depuis start.

Exécution étape par étape :
1. (10,"a"), (11,"b"), (12,"c").

Ordre des opérations :
• Incrément du compteur après chaque yield.

Cas d'utilisation courants :
• Numéros de ligne, pagination, clés séquentielles.

Cas limites :
• start peut être négatif ou n'importe quel entier.

Considérations de performance :
• Léger surcoût par rapport à une boucle index seule.

Exemples :
• for lineno, line in enumerate(lines, start=1): ...

Remarques :
• Pour dict, enumerate(d) numérote les clés, pas les items.`,

  1315: `[10, 7, 4, 1] : range(10, 0, -3) compte à rebours, stop=0 exclus → dernier valide 1.

Débutant :
• 10, 7, 4, 1 ; le suivant serait -2 < 0 → arrêt.

Intermédiaire :
• Pas de 0 dans la liste car stop est exclus même en descendant.

Expert :
• Si start <= stop avec step négatif, séquence vide.

Concepts clés :
• range à pas négatif, borne stop exclusive.

Distinctions clés :
• vs reversed(range(1,11)) pour d'autres motifs.

Fonctionnement :
• Incrément par step jusqu'à franchir stop (non inclus).

Exécution étape par étape :
• Valeurs générées tant que la condition d'arrêt n'est pas dépassée.

Ordre des opérations :
• Évaluation des trois arguments une fois à la construction.

Cas d'utilisation courants :
• Indices décroissants, compte à rebours.

Cas limites :
• step=0 → ValueError.

Considérations de performance :
• Objet range compact.

Exemples :
• list(range(5, -1, -1)) → [5,4,3,2,1,0].

Remarques :
• Attention aux boucles while si bornes calculées dynamiquement.`,

  1316: `[0, 20, 60] : pour items = [10,20,30], les indices 0,1,2 donnent items[i]*i → 0, 20, 60.

Débutant :
• range(len(items)) → 0,1,2.
• 10*0=0, 20*1=20, 30*2=60.

Intermédiaire :
• Préférer souvent enumerate(items) pour clarté : [v*i for i,v in enumerate(items)].

Expert :
• len() appelé une fois dans range(len(items)) à la construction du range.

Concepts clés :
• Indexation + compréhension, pattern range(len()).

Distinctions clés :
• vs zip avec une autre séquence d'indices.

Fonctionnement :
• Double boucle logique compressée : un for implicite sur les indices.

Exécution étape par étape :
1. i=0 → 10*0.
2. i=1 → 20*1.
3. i=2 → 30*2.

Ordre des opérations :
• len évalué, puis range, puis itération.

Cas d'utilisation courants :
• Positions pondérées, matrices plates.

Cas limites :
• liste vide → compréhension vide.

Considérations de performance :
• enumerate évite indexation répétée si logique complexe.

Exemples :
• [i*v for i,v in enumerate([10,20,30])] — même résultat.

Remarques :
• Vérifier que len et indices restent cohérents si la liste mute.`,

  1317: `[1, 2, 3, 4, 5, 6] : compréhension imbriquée lue comme double boucle — d'abord row, puis x dans row.

Débutant :
• Première ligne [1,2], puis [3,4], puis [5,6] ; tous les x à plat.

Intermédiaire :
• L'ordre des for suit celui des boucles for imbriquées équivalentes.

Expert :
• Équivalent à itertools.chain.from_iterable sur une profondeur.

Concepts clés :
• List comprehension multi-for, aplatissement d'un niveau.

Distinctions clés :
• vs [[...] for row in ...] qui garde la structure.

Fonctionnement :
• Itération externe sur les lignes, interne sur les éléments.

Exécution étape par étape :
• Produire 1,2, puis 3,4, puis 5,6 dans une seule liste.

Ordre des opérations :
• Gauche-droite = externe → interne.

Cas d'utilisation courants :
• Normaliser des lots de listes.

Cas limites :
• Lignes vides contribuent 0 élément.

Considérations de performance :
• Une passe, allocation d'une liste de taille totale.

Exemples :
• sum(x for row in matrix for x in row) pour total.

Remarques :
• Au-delà de deux niveaux, une boucle explicite peut mieux se lire.`,

  1318: `3 : la boucle break à i=3 (multiple de 3) ; else ignoré ; print(i) affiche 3.

Débutant :
• i=2 : 2%3≠0 ; i=3 : 3%3==0 → break.
• Variable i vaut 3 après break.

Intermédiaire :
• « no break » ne s'imprime pas car break a eu lieu.

Expert :
• Combine break, for-else et persistance de i.

Concepts clés :
• break, modulo, valeur de boucle après interruption.

Distinctions clés :
• vs boucle complète jusqu'à 9 sans break.

Fonctionnement :
• Test et break dans le corps ; else du for sauté.

Exécution étape par étape :
1. i=2 continue.
2. i=3 break.
3. print(i) → 3.

Ordre des opérations :
• break termine immédiatement la boucle for.

Cas d'utilisation courants :
• Premier diviseur, premier élément satisfaisant une condition.

Cas limites :
• Si aucun multiple, else s'exécute et i serait la dernière valeur (ici 9) — pas le cas.

Considérations de performance :
• Arrêt anticipé = gain si trouvé tôt.

Exemples :
• Même schéma pour chercher un caractère.

Remarques :
• Ne pas supposer i « non défini » après break : il reste lié.`,

  1319: `L'ordre d'itération sur un set n'est pas garanti (non déterministe entre exécutions / implémentations pour ce qui est observable).

Débutant :
• On peut parcourir un set avec for, mais l'ordre des éléments n'est pas une API stable à utiliser en logique métier.

Intermédiaire :
• Depuis 3.7+ les dicts sont ordonnés ; les sets restent des collections non ordonnées.

Expert :
• L'ordre dépend du hachage et de la table interne — ne pas sérialiser en supposant un ordre.

Concepts clés :
• set, itération sans garantie d'ordre.

Distinctions clés :
• vs list et tuple ordonnés ; vs dict.keys() ordonnés.

Fonctionnement :
• Itération sur la structure hachée interne.

Exécution étape par étape :
• Tous les éléments visités une fois, ordre imprévisible logiquement.

Ordre des opérations :
• Non spécifié par le langage pour les sets.

Cas d'utilisation courants :
• Tester appartenance, unicité ; trier avec sorted(s) si besoin d'ordre.

Cas limites :
• set vide : zéro itération.

Considérations de performance :
• Itération O(n).

Exemples :
• for x in sorted({3,1,2}): ... → ordre déterministe.

Remarques :
• En pratique CPython peut montrer un ordre « stable » pour une session, mais ne pas s'y fier.`,

  1320: `[72, 105] : itérer sur bytes produit des entiers 0–255 (ici codes ASCII de 'H' et 'i').

Débutant :
• H → 72, i → 105.

Intermédiaire :
• Contrairement à str, pas de sous-chaînes d'un caractère.

Expert :
• Pour caractères Unicode décodés : b.decode() puis itérer la str.

Concepts clés :
• bytes comme séquence d'octets, pas de texte.

Distinctions clés :
• vs for c in "Hi" → str d'un caractère.

Fonctionnement :
• __iter__ sur bytes yield des int.

Exécution étape par étape :
• Liste des deux octets sous forme d'entiers.

Ordre des opérations :
• Ordre des octets dans le littéral.

Cas d'utilisation courants :
• Protocoles binaires, fichiers en mode 'rb'.

Cas limites :
• Multi-octets UTF-8 : un caractère ≠ un octet.

Considérations de performance :
• Très efficace, pas de décodage implicite.

Exemples :
• list(b"ABC") → [65,66,67].

Remarques :
• bytearray se comporte pareil à l'itération.`,

  1321: `12 : 3 valeurs de i × 4 valeurs de j → 12 tuples dans la compréhension.

Débutant :
• Produit cartésien range(3) × range(4).

Intermédiaire :
• Même longueur que itertools.product(range(3), range(4)).

Expert :
• Mémoire : liste de 12 tuples créés.

Concepts clés :
• Double for en compréhension, cardinalité multiplicative.

Distinctions clés :
• vs zip qui tronque.

Fonctionnement :
• Pour chaque i, pour chaque j, émettre (i,j).

Exécution étape par étape :
• i=0 avec j=0..3, puis i=1, puis i=2.

Ordre des opérations :
• i varie lentement, j rapidement (comme boucles imbriquées classiques).

Cas d'utilisation courants :
• Grilles, paires d'indices, tables de vérité.

Cas limites :
• Si un range est vide → 0 tuples.

Considérations de performance :
• Attention n×m grand → générateur ou itération paresseuse.

Exemples :
• len([(i,j) for i in range(2) for j in range(5)]) → 10.

Remarques :
• Pour grandes grilles, éviter matérialiser toute la liste.`,

  1322: `[(0, 'x'), (1, 'y')] : enumerate sur un dict itère sur les clés seulement, avec un compteur.

Débutant :
• Clés 'x' puis 'y' (ordre d'insertion) ; indices 0 et 1.

Intermédiaire :
• Pour (clé, valeur) indexées : enumerate(d.items()).

Expert :
• enumerate(d) ≈ zip(range(len(d)), d) conceptuellement (sans matérialiser).

Concepts clés :
• Itération par défaut d'un dict = clés.

Distinctions clés :
• vs enumerate(dict.values()) ou items().

Fonctionnement :
• Itérateur sur keys view + compteur.

Exécution étape par étape :
1. (0,'x'), (1,'y') selon l'ordre du dict.

Ordre des opérations :
• Cohérent avec l'ordre d'insertion (3.7+).

Cas d'utilisation courants :
• Numéroter des clés pour affichage.

Cas limites :
• dict vide → liste vide.

Considérations de performance :
• Une passe O(n).

Exemples :
• {k:i for i,k in enumerate(d)} — inversion index/clé.

Remarques :
• Ne pas supposer un ordre « alphabétique » sans sorted().`,

  1323: `[3, 2, 1] : reversed retourne un itérateur inversé sans modifier la liste d'origine.

Débutant :
• list() consomme l'itérateur → ordre inverse de [1,2,3].

Intermédiaire :
• lst.reverse() muterait la liste et renverrait None — différent.

Expert :
• reversed accepte tout objet séquence avec __len__ et __getitem__ ou __reversed__.

Concepts clés :
• reversed, immutabilité de la source, copie de vue via itération.

Distinctions clés :
• vs slicing [::-1] qui crée une nouvelle liste pour les listes.

Fonctionnement :
• Itération depuis la fin.

Exécution étape par étape :
• Yield 3, puis 2, puis 1.

Ordre des opérations :
• list() force la consommation complète.

Cas d'utilisation courants :
• Parcours inverse, piles logiques.

Cas limites :
• set/dict non supportés directement par reversed.

Considérations de performance :
• reversed sur list est efficace en CPython.

Exemples :
• tuple(reversed((1,2,3))) → (3,2,1).

Remarques :
• Pour inverser en place, .reverse() sur la liste elle-même.`,

  1324: `['a', 'b', 'c'] : sorted(d) trie la liste des clés du dict.

Débutant :
• Clés "c","a","b" → ordre lexicographique a,b,c.

Intermédiaire :
• Les valeurs ne participent pas au tri par défaut.

Expert :
• sorted(d.items()) pour trier des paires (clé par défaut puis valeur en tie-break).

Concepts clés :
• sorted sur dict = tri des clés.

Distinctions clés :
• vs tri par valeurs : sorted(d, key=d.get).

Fonctionnement :
• Itération sur les clés, tri Timsort, nouvelle liste.

Exécution étape par étape :
• Liste matérialisée de str triées.

Ordre des opérations :
• Tri stable.

Cas d'utilisation courants :
• Affichage ordonné de configuration, JSON keys triées.

Cas limites :
• Clés hétérogènes non comparables → TypeError.

Considérations de performance :
• O(n log n) pour le tri.

Exemples :
• sorted({"b":1,"a":2}) → ['a','b'].

Remarques :
• Pour locale humaine, module locale ou clé de tri personnalisée.`,

  1325: `[[2, 3], [5]] : dépaquetage avec *rest ; rest est toujours une liste, éventuellement d'un seul élément.

Débutant :
• (1,2,3) → first=1, rest=[2,3].
• (4,5) → first=4, rest=[5].

Intermédiaire :
• rest n'est jamais un tuple dans ce contexte starred — liste pour le « reste ».

Expert :
• Sujette aux mêmes règles que l'unpacking en assignation simple.

Concepts clés :
• starred target en boucle for, longueurs variables par ligne.

Distinctions clés :
• vs first, second sans * quand la longueur est fixe.

Fonctionnement :
• Chaque élément de la liste de tuples est unpacké selon le motif.

Exécution étape par étape :
• Deux append de listes rest.

Ordre des opérations :
• Erreur si aucun élément pour *rest (tuple trop court).

Cas d'utilisation courants :
• En-tête + queue variable, arguments variadiques simulés.

Cas limites :
• Tuple d'un seul élément : rest=[].

Considérations de performance :
• Petites listes internes créées.

Exemples :
• first, *rest = (1,2,3) hors boucle — même logique.

Remarques :
• Documenter le format attendu des tuples pour la maintenance.`,

  1326: `{'a': 1, 'b': 2} : zip paire les listes ; la boucle remplit le dict.

Débutant :
• ('a',1) puis ('b',2) → d['a']=1, d['b']=2.

Intermédiaire :
• dict(zip(keys, vals)) idiomatique équivalent.

Expert :
• Si longueurs différentes, zip tronque — ici égales.

Concepts clés :
• Construction de mapping depuis séquences parallèles.

Distinctions clés :
• vs deux listes séparées sans association explicite.

Fonctionnement :
• Itération sur zip, assignation aux clés.

Exécution étape par étape :
• Deux assignations successives.

Ordre des opérations :
• Ordre parallèle keys/vals.

Cas d'utilisation courants :
• Colonnes CSV, listes lues depuis fichiers.

Cas limites :
• Clés dupliquées dans keys : dernière gagne.

Considérations de performance :
• Linéaire.

Exemples :
• {k: v**2 for k,v in zip(keys, vals)} — variante.

Remarques :
• En Python 3.10+, zip(..., strict=True) pour exiger même longueur.`,

  1327: `'Pto' : range(0, len(s), 2) sur "Python" (longueur 6) donne indices 0,2,4 → P, t, o.

Débutant :
• s[0]='P', s[2]='t', s[4]='o'.

Intermédiaire :
• Équivalent à s[::2].

Expert :
• s[i] est O(1) pour str ; résultat toujours str concaténées.

Concepts clés :
• range avec pas, indexation de chaîne.

Distinctions clés :
• vs chaque caractère : pas de 1.

Fonctionnement :
• Boucle sur indices pairs seulement.

Exécution étape par étape :
• i=0,2,4 ; trois concaténations.

Ordre des opérations :
• len(s) évalué une fois dans range.

Cas d'utilisation courants :
• Sous-échantillonnage, grilles.

Cas limites :
• Chaîne vide : range vide.

Considérations de performance :
• Concaténation répétée peut coûter sur très longues chaînes.

Exemples :
• "".join(s[i] for i in range(0,len(s),2)).

Remarques :
• Préférer le slice s[::2] pour clarté.`,

  1328: `3 : trois lettres 'a' dans "banana".

Débutant :
• Positions avec 'a' : indices 1,3,5.

Intermédiaire :
• "banana".count("a") == 3 directement.

Expert :
• Boucle explicite utile si condition plus riche que égalité simple.

Concepts clés :
• Comptage par itération conditionnelle.

Distinctions clés :
• vs len([...]) filtré.

Fonctionnement :
• Incrément quand ch == "a".

Exécution étape par étape :
• Six tours, trois incréments.

Ordre des opérations :
• Ordre des caractères gauche-droite.

Cas d'utilisation courants :
• Fréquences, validation.

Cas limites :
• Sensible à la casse.

Considérations de performance :
• O(n).

Exemples :
• sum(1 for ch in s if ch=="a").

Remarques :
• Counter de collections pour histogrammes complets.`,

  1329: `9 : algorithme du maximum — m initialisé au premier élément puis mis à jour si n > m.

Débutant :
• Parcours 3,7,2,9,4 ; le plus grand vu est 9.

Intermédiaire :
• Initialiser avec nums[0] gère tous négatifs (contrairement à m=0).

Expert :
• Un seul passage, O(n) temps, O(1) mémoire extra.

Concepts clés :
• Réduction par boucle, invariant « m est le max du préfixe parcouru ».

Distinctions clés :
• vs max(nums) built-in.

Fonctionnement :
• Comparaison et assignation conditionnelle chaque tour.

Exécution étape par étape :
• m passe à 7 puis 9 ; 4 ne change rien.

Ordre des opérations :
• Ordre de la liste d'entrée.

Cas d'utilisation courants :
• Streams, capteurs, sans stocker toute l'histoire.

Cas limites :
• Liste d'un élément : m est cet élément ; liste vide → IndexError sur nums[0].

Considérations de performance :
• Préférer max() sauf besoin pédagogique ou break custom.

Exemples :
• Trouver min en inversant la comparaison.

Remarques :
• Pour NaN flottants, les comparaisons ont des pièges spécifiques.`,

  1330: `[1, 2, 3, 4, 5] : double boucle append chaque élément de chaque sous-liste.

Débutant :
• Sous-listes [1,2], [3], [4,5] visitées en séquence.

Intermédiaire :
• Un seul niveau aplati ; [[1,2],3] nécessiterait autre logique.

Expert :
• itertools.chain.from_iterable équivalent fonctionnel.

Concepts clés :
• Boucles imbriquées pour aplatissement.

Distinctions clés :
• vs extend sur chaque sub.

Fonctionnement :
• append dans la boucle interne.

Exécution étape par étape :
• Sept append au total ici.

Ordre des opérations :
• Ordre ligne puis colonne.

Cas d'utilisation courants :
• Données groupées puis normalisées.

Cas limites :
• Sous-liste vide : aucun append pour cette ligne.

Considérations de performance :
• O(total éléments).

Exemples :
• flat.extend(sub) alternative.

Remarques :
• Pour arbres profonds, récursivité ou pile explicite.`,

  1331: `[3, 7, 11] : sommes x+y pour chaque paire (1,2), (3,4), (5,6).

Débutant :
• 1+2, 3+4, 5+6.

Intermédiaire :
• Dépaquetage parallèle x,y stable pour tuples de taille 2.

Expert :
• Généralisable à zip avec deux listes au lieu de liste de tuples.

Concepts clés :
• Données tabulaires en tuples, agrégation par ligne.

Distinctions clés :
• vs somme globale sum de tous les x puis tous les y (pas demandé).

Fonctionnement :
• Une somme par tuple.

Exécution étape par étape :
• Trois append.

Ordre des opérations :
• Ordre de pairs.

Cas d'utilisation courants :
• Vecteurs 2D, soldes débit/crédit.

Cas limites :
• Tuple mal formé → erreur.

Considérations de performance :
• Linéaire.

Exemples :
• [x*y for x,y in pairs] pour produits.

Remarques :
• dataclasses / namedtuple peuvent remplacer les tuples nus pour la lisibilité.`,

  1332: `60 : accumulateur total += n pour 10+20+30.

Débutant :
• 0+10=10, +20=30, +30=60.

Intermédiaire :
• sum([10,20,30]) équivalent.

Expert :
• Pour grands entiers ou flottants, mêmes considérations que sum().

Concepts clés :
• Pattern accumulateur en boucle.

Distinctions clés :
• vs liste des cumulés (running total — autre question).

Fonctionnement :
• Réaffectation de total à chaque itération.

Exécution étape par étape :
• Trois additions.

Ordre des opérations :
• Séquentiel strict (important pour str ou list +=).

Cas d'utilisation courants :
• Réductions custom (pas seulement +).

Cas limites :
• Liste vide → 0 initial reste.

Considérations de performance :
• Built-in sum souvent plus rapide.

Exemples :
• functools.reduce(operator.add, nums, 0).

Remarques :
• Pour précision décimale, utiliser Decimal et quantize.`,

  1333: `4 : premier entier pair rencontré ; return sort immédiatement de la fonction sans examiner 6.

Débutant :
• 1 impair, 3 impair, 4 pair → return 4.

Intermédiaire :
• Le return dans la boucle court-circuite le reste de lst et le return None final.

Expert :
• Utile pour la complexité moyenne en recherche.

Concepts clés :
• return anticipé dans une boucle.

Distinctions clés :
• vs collecter tous les pairs.

Fonctionnement :
• Appel f([1,3,4,6]) exécute la boucle jusqu'au return.

Exécution étape par étape :
• Arrêt à 4, 6 jamais testé.

Ordre des opérations :
• Ordre de la liste.

Cas d'utilisation courants :
• Validation « au moins un », parsing.

Cas limites :
• Aucun pair → None après boucle complète.

Considérations de performance :
• Meilleur cas O(1) si pair en tête.

Exemples :
• next((x for x in lst if x%2==0), None) style fonctionnel.

Remarques :
• Documenter si plusieurs candidats possibles lequel est choisi (premier).`,

  1334: `[0, 3, 6, 9] : filtre x%3==0 sur range(10), 0 inclus.

Débutant :
• Multiples de 3 entre 0 et 9.

Intermédiaire :
• list(range(0,10,3)) même résultat ici.

Expert :
• Compréhension avec if = filtre, pas branchement valeur (voir ternaire ailleurs).

Concepts clés :
• List comprehension conditionnelle finale.

Distinctions clés :
• vs if expression avant for (mapping).

Fonctionnement :
• Évaluer x, tester, inclure si vrai.

Exécution étape par étape :
• 0,3,6,9 retenus.

Ordre des opérations :
• Ordre croissant du range.

Cas d'utilisation courants :
• Filtrer données en une ligne lisible.

Cas limites :
• Filtre toujours faux → [].

Considérations de performance :
• Légèrement plus rapide qu'append en boucle sur CPython.

Exemples :
• [x for x in range(10) if x%2==0 and x%3==0] → [0,6].

Remarques :
• Garder la lisibilité : plusieurs clauses if peuvent aller sur plusieurs lignes.`,

  1335: `15 : int("3")+int("5")+int("7").

Débutant :
• Conversion str → int puis somme entière.

Intermédiaire :
• Sans int(), += concaténerait en str (ou TypeError selon types).

Expert :
• Gestion d'erreurs serait nécessaire pour lignes non numériques.

Concepts clés :
• Boucle parse-et-accumule.

Distinctions clés :
• vs join des chaînes "357".

Fonctionnement :
• Pour chaque line : int puis addition.

Exécution étape par étape :
• 3+5+7=15.

Ordre des opérations :
• Ordre de la liste lines.

Cas d'utilisation courants :
• Fichiers texte, CSV simples.

Cas limites :
• int("") ou int(" 3\\n") — strip() souvent requis en prod.

Considérations de performance :
• int est rapide pour petites chaînes.

Exemples :
• total += float(line) pour décimaux.

Remarques :
• locale.atof si virgule décimale locale.`,

  1336: `[(10, 20), (20, 30), (30, 40)] : fenêtre glissante de taille 2 sur nums.

Débutant :
• range(len(nums)-1) → indices 0,1,2 pour paires adjacentes.

Intermédiaire :
• zip(nums, nums[1:]) alternative idiomatique.

Expert :
• Évite IndexError en s'arrêtant à n-2.

Concepts clés :
• Indices i et i+1 synchronisés.

Distinctions clés :
• vs paires (10,30) saut d'un cran.

Fonctionnement :
• Append tuple à chaque i.

Exécution étape par étape :
• Trois tuples produits.

Ordre des opérations :
• Gauche-droite.

Cas d'utilisation courants :
• Différences consécutives, validation de séries.

Cas limites :
• len(nums)<2 → range vide.

Considérations de performance :
• O(n) temps, O(n) mémoire pour la liste de paires.

Exemples :
• [b-a for a,b in pairs] pour deltas.

Remarques :
• itertools.pairwise en 3.10+ remplace ce motif.`,

  1337: `1 : enumerate(["cat","dog","bird"]) ; "dog" à l'indice 1.

Débutant :
• i=0,x='cat' ; i=1,x='dog' → return 1.

Intermédiaire :
• lst.index("dog") donnerait 1 mais lève si absent.

Expert :
• O(n) linéaire ; pas de structure indexée.

Concepts clés :
• Recherche linéaire avec index simultané.

Distinctions clés :
• vs dict inverse pour O(1) lookups répétés.

Fonctionnement :
• return dès égalité.

Exécution étape par étape :
• Arrêt au second élément.

Ordre des opérations :
• Comparaisons dans l'ordre.

Cas d'utilisation courants :
• Trouver position, diagnostics.

Cas limites :
• Non trouvé → -1 ici par contrat de f.

Considérations de performance :
• Pour très grandes listes triées, bisect possible.

Exemples :
• next(i for i,v in enumerate(lst) if v==val) sans défaut.

Remarques :
• Égalité == vs is pour objets mutables.`,

  1338: `[16, 25] : walrus y := x**2 ; seuls les y > 10 sont gardés (x=4→16, x=5→25).

Débutant :
• Carrés 0,1,4,9 ne dépassent pas 10 ; 16 et 25 oui.

Intermédiaire :
• := lie y dans le if et réutilise sa valeur pour append.

Expert :
• Nécessite Python 3.8+ ; attention aux portées en compréhensions (scope display en 3.8+).

Concepts clés :
• Assignment expression, filtre sur valeur calculée une fois.

Distinctions clés :
• vs y=x**2 sur ligne séparée (souvent plus lisible).

Fonctionnement :
• Chaque x : calculer y, tester, append si vrai.

Exécution étape par étape :
• x=4,5 seuls passent le test.

Ordre des opérations :
• Carré puis comparaison.

Cas d'utilisation courants :
• Éviter double appel coûteux dans condition et corps.

Cas limites :
• Portée de y en list comprehension suit les règles 3.8+ (leak corrigé).

Considérations de performance :
• Un seul calcul de x**2 par itération.

Exemples :
• while (line := f.readline()): ...

Remarques :
• PEP 572 ; préférer parfois une boucle for explicite pour clarté.`,

  1339: `[0, 3, 6] : range(n*n) avec n=3 → 0..8 ; filtre i % n == 0.

Débutant :
• Multiples de 3 strictement avant 9.

Intermédiaire :
• range(9) exclut 9.

Expert :
• Motif grille : une ligne sur n en index linéarisé.

Concepts clés :
• Borne dynamique dans range, modulo pour périodicité.

Distinctions clés :
• vs i % n == n-1 (dernière colonne).

Fonctionnement :
• Append quand reste nul à la division par n.

Exécution étape par étape :
• i=0,3,6.

Ordre des opérations :
• Évaluation de n*n une fois.

Cas d'utilisation courants :
• Indices de début de ligne, stride.

Cas limites :
• n=0 ferait range(0) mais modulo zéro serait erreur si testé — ici n=3.

Considérations de performance :
• Peut remplacer par range(0, n*n, n) directement.

Exemples :
• [i for i in range(0,9,3)] identique.

Remarques :
• Simplifier le range évite le if.`,

  1340: `[1, 3] : int('1') et int('3') réussissent ; int('two') lève ValueError, attrapée, pass ignore cette entrée.

Débutant :
• try/except par élément.

Intermédiaire :
• La boucle continue après pass.

Expert :
• Pour logging, remplacer pass par continue explicite ou comptage d'erreurs.

Concepts clés :
• Gestion d'erreurs intégrée à l'itération.

Distinctions clés :
• vs laisser l'exception stopper toute la boucle.

Fonctionnement :
• append seulement sur succès de int.

Exécution étape par étape :
• Deux succès, une exception avalée.

Ordre des opérations :
• Ordre de values.

Cas d'utilisation courants :
• Données sales, CSV.

Cas limites :
• except trop large masque des bugs — cibler ValueError.

Considérations de performance :
• try/except en Python a un coût faible si rare.

Exemples :
• str.isdigit() préalable pour éviter exceptions.

Remarques :
• En production, journaliser les lignes rejetées.`,

  1341: `{'a': 0, 'b': 1, 'c': 2} : clé → index de position via enumerate sur la chaîne "abc".

Débutant :
• idx=0,char='a' → d['a']=0, etc.

Intermédiaire :
• Inverser idx et char donnerait {0:'a',...}.

Expert :
• Si caractères dupliqués, la dernière écriture gagne.

Concepts clés :
• enumerate sur str, construction de dict.

Distinctions clés :
• vs dict(zip("abc", range(3))) similaire.

Fonctionnement :
• Assignation result[char]=idx.

Exécution étape par étape :
• Trois insertions.

Ordre des opérations :
• Indices depuis 0 par défaut.

Cas d'utilisation courants :
• Table de premier index de caractère.

Cas limites :
• Chaîne vide → dict vide.

Considérations de performance :
• O(n) insertions hash.

Exemples :
• {c:i for i,c in enumerate("aba")} → dernier index pour 'a'.

Remarques :
• Pour comptage, utiliser Counter.`,

  1342: `'hello-world' : str.join insère le séparateur entre les éléments, pas aux extrémités.

Débutant :
• Deux mots, un tiret entre.

Intermédiaire :
• join exige un itérable de str ; chaque élément doit être str.

Expert :
• Complexité linéaire en taille totale, allocation unique efficace.

Concepts clés :
• join vs concaténation répétée.

Distinctions clés :
• "-".join(["hello","world"]) vs "hello" + "-" + "world".

Fonctionnement :
• Méthode sur le séparateur, argument liste des morceaux.

Exécution étape par étape :
• Construction du résultat avec tirets internes.

Ordre des opérations :
• Ordre de la liste préservé.

Cas d'utilisation courants :
• CSV manuel, chemins, slugs.

Cas limites :
• Liste vide → '' ; un seul élément → sans séparateur interne.

Considérations de performance :
• Préférer join pour nombreuses pièces.

Exemples :
• ",".join(map(str, range(3))) → "0,1,2".

Remarques :
• pathlib.Path pour chemins réels multiplateforme.`,

  1343: `3 : break ne sort que de la boucle interne for j ; count += 1 s'exécute une fois par tour de i externe (3 fois).

Débutant :
• Pour chaque i, j=0 ; j=1 déclenche break → sortie de la boucle j ; puis count++ dans i.

Intermédiaire :
• Pas de break sur la boucle externe.

Expert :
• Pour sortir de plusieurs niveaux, flag, fonction, ou exception contrôlée (rare).

Concepts clés :
• Portée lexicale de break (boucle la plus interne).

Distinctions clés :
• vs labeled break (absent en Python).

Fonctionnement :
• Chaque i : une incrémentation de count après la boucle j interrompue tôt.

Exécution étape par étape :
• Trois incréments de count.

Ordre des opérations :
• Structure i externe, j interne.

Cas d'utilisation courants :
• Recherche dans matrice avec arrêt ligne partielle.

Cas limites :
• Si la boucle interne ne break jamais, count serait 3*3=9 — pas le cas ici.

Considérations de performance :
• Compréhension de la structure évite bugs subtils.

Exemples :
• Même comptage si condition sur j==0 avec continue différent.

Remarques :
• Refactoriser en fonction avec return peut clarifier les sorties multiples.`,

  1344: `4 : continue sur j==1 saute l'incrément pour ce j ; par i on compte j=0 et j=2 → 2 ; deux i → 4.

Débutant :
• Pour chaque i (0 et 1), inner j=0 count+, j=1 continue, j=2 count+.

Intermédiaire :
• continue n'affecte que la boucle j.

Expert :
• Différent d'un break qui aurait arrêté le reste des j pour ce i.

Concepts clés :
• continue dans boucle interne, comptage conditionnel.

Distinctions clés :
• vs pass qui exécuterait quand même count+=1.

Fonctionnement :
• Saut au prochain j sans exécuter le reste du corps.

Exécution étape par étape :
• 2 incréments par i, total 4.

Ordre des opérations :
• j de 0 à 2 pour chaque i.

Cas d'utilisation courants :
• Ignorer séparateurs, lignes vides.

Cas limites :
• Si inner range vide, count inchangé pour cet i.

Considérations de performance :
• Structure O(outer×inner).

Exemples :
• Filtrer éléments sans append explicite.

Remarques :
• Tester mentalement avec petits range pour vérifier.`,

  1345: `['a', 'b', 'c'] : sorted trie par premier élément de tuple ; v donne les secondes composantes dans l'ordre trié.

Débutant :
• Ordre des tuples (1,a), (2,b), (3,c).

Intermédiaire :
• Tri stable si égalité sur première clé.

Expert :
• key= pour trier sur autre champ sans changer les tuples.

Concepts clés :
• sorted + unpacking + agrégation des v.

Distinctions clés :
• vs tri sur str seconde colonne seulement.

Fonctionnement :
• sorted copie, trie, puis boucle for consomme dans l'ordre.

Exécution étape par étape :
• Append 'a','b','c'.

Ordre des opérations :
• Tri O(n log n) puis O(n) construction.

Cas d'utilisation courants :
• Classement de records avant affichage.

Cas limites :
• Types non comparables dans la clé primaire → erreur.

Considérations de performance :
• sorted crée une liste ; si grande, envisager heapq.

Exemples :
• sorted(pairs, key=lambda t: t[1]) pour tri sur nom.

Remarques :
• itemgetter de operator peut remplacer lambda.`,

  1346: `[[1, 3], [2, 4]] : transposition — pour chaque colonne i, row prend matrix[j][i] pour j=0,1.

Débutant :
• Colonne 0 : 1 et 3 ; colonne 1 : 2 et 4.

Intermédiaire :
• zip(*matrix) ou list(map(list, zip(*matrix))) idiomatique.

Expert :
• Hypothèse matrice rectangulaire 2×2 ici.

Concepts clés :
• Indices échangés j,i pour transpose.

Distinctions clés :
• vs rotation 90° (autre formule).

Fonctionnement :
• Boucle externe sur colonnes, interne sur lignes.

Exécution étape par étape :
• Deux lignes construites dans t.

Ordre des opérations :
• Append row puis append à t.

Cas d'utilisation courants :
• Algèbre linéaire débutante, images.

Cas limites :
• Lignes de longueurs différentes → IndexError possible.

Considérations de performance :
• numpy.transpose pour grosses matrices.

Exemples :
• [[matrix[r][c] for r in range(len(matrix))] for c in range(len(matrix[0]))] général.

Remarques :
• Vérifier que toutes les lignes ont même len avant de transposer naïvement.`,

  1347: `[0, 6, 12, 18] : deux if en compréhension = ET logique ; pairs ET multiples de 3 ⇔ multiples de 6 (0 inclus).

Débutant :
• Tester chaque x dans 0..19 pour pair et divisible par 3.

Intermédiaire :
• Équivalent à x % 6 == 0 dans ce contexte numérique.

Expert :
• Ordre des filtres peut influencer micro-performances si tests coûteux (court-circuit).

Concepts clés :
• Filtres multiples en compréhension = conjonction.

Distinctions clés :
• vs if imbriqués avec or (disjonction).

Fonctionnement :
• x doit passer tous les if finaux.

Exécution étape par étape :
• 0,6,12,18 retenus ; 24 hors range.

Ordre des opérations :
• Croissant.

Cas d'utilisation courants :
• Contraintes multiples sur séquences.

Cas limites :
• Redondance de conditions peut nuire à la lisibilité — simplifier.

Considérations de performance :
• Un seul modulo si refactorisé.

Exemples :
• [x for x in range(20) if x%6==0].

Remarques :
• La forme compacte x%6==0 est plus claire si équivalente.`,

  1348: `['even', 'odd', 'even', 'odd'] : ternaire avant for mappe chaque x de 0..3.

Débutant :
• 0 pair, 1 impair, 2 pair, 3 impair.

Intermédiaire :
• La partie (expression avant for) est évaluée pour chaque x ; un if placé après for filtrerait au lieu de mapper.

Expert :
• Priorité : l'expression de gauche est le mapping, pas un filtre.

Concepts clés :
• Conditional expression dans compréhension, position avant for.

Distinctions clés :
• vs [("even" if x%2==0 else "odd") for x in range(4)] identique avec parenthèses pour lisibilité.

Fonctionnement :
• Pour chaque x, choisir la branche du ternaire.

Exécution étape par étape :
• Quatre chaînes produites.

Ordre des opérations :
• x de 0 à 3.

Cas d'utilisation courants :
• Normaliser libellés, bucketing.

Cas limites :
• Oublier le else du ternaire → SyntaxError.

Considérations de performance :
• Linéaire.

Exemples :
• [x if x>0 else 0 for x in nums] — clamp positif.

Remarques :
• Si logique complexe, fonction nommée dans le mapping.`,

  1349: `[1, 3, 6, 10] : total cumulé ; à chaque n on ajoute puis on enregistre l'état de total.

Débutant :
• Après 1 →1 ; +2→3 ; +3→6 ; +4→10.

Intermédiaire :
• Différent de n'append que n (feuille de route des entrées).

Expert :
• itertools.accumulate(nums) équivalent fonctionnel.

Concepts clés :
• Préfixes / sommes cumulées, état partagé total.

Distinctions clés :
• vs liste des n seuls.

Fonctionnement :
• total += n puis append(total).

Exécution étape par étape :
• Quatre append.

Ordre des opérations :
• Ordre de nums.

Cas d'utilisation courants :
• Soldes courants, intégrales discrètes simples.

Cas limites :
• nums vide → running vide si boucle jamais entrée.

Considérations de performance :
• O(n) temps et mémoire pour la liste running.

Exemples :
• Courbes de performance cumulée.

Remarques :
• Vérifier débordement si entiers très grands (Python gère les longs int).`,

  1350: `False : 7 est impair → all_even devient False et break ; 8 n'est pas examiné.

Débutant :
• 2 et 4 passent ; 7 déclenche le if n%2!=0.

Intermédiaire :
• Équivalent logique à all(n%2==0 for n in nums) mais avec arrêt court.

Expert :
• break évite travail inutile après contre-exemple.

Concepts clés :
• Drapeau booléen + break pour « tous satisfont ».

Distinctions clés :
• vs for-else affirmant l'absence de contre-exemple sans flag.

Fonctionnement :
• Lecture séquentielle jusqu'au premier impair.

Exécution étape par étape :
• Mise à False au troisième élément utile (7), sortie.

Ordre des opérations :
• Ordre de nums.

Cas d'utilisation courants :
• Validation batch, invariants.

Cas limites :
• Liste vide : boucle jamais, all_even reste True.

Considérations de performance :
• Meilleur cas O(1) si impair en tête.

Exemples :
• any() pour existence, all() pour universalité.

Remarques :
• Le vide est « tous pairs » ici — vérifier si c'est le contrat métier voulu.`,
};
