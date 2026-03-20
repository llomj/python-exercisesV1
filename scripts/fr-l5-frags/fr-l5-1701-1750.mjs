/** Level 5 FR 1701–1750 — level5_expert_a.ts (50 questions, file order). */
export default {
  1701: `La bonne réponse est « [1, 10, 20, 30, 4, 5] » : l’affectation par tranche remplace les éléments aux indices 1 et 2 par trois nouvelles valeurs ; la liste s’allonge.

Débutant :
• a[1:3] cible les positions 1 et 2 (deux éléments).
• On peut affecter une liste de taille différente : Python insère ou retire en place.

Intermédiaire :
• Ce n’est pas comme a[1:3] = x qui remplace par un seul objet : ici toute la séquence de droite remplace la tranche.
• id(a) reste le même : modification sur place.

Expert :
• La sémantique générale est « supprimer la tranche puis insérer les nouveaux éléments à cet endroit » ; complexité liée au déplacement des éléments suivants.

Concepts clés :
• Affectation sur tranche ; agrandissement / réduction de liste ; indices 0-based.

Distinctions clés :
• Tranche avec pas (étendue) impose une longueur égale ; tranche simple non.

Fonctionnement :
• Python retire les éléments couverts par [1:3], puis insère 10, 20, 30 à la position 1.

Exécution étape par étape :
1. a = [1, 2, 3, 4, 5].
2. Tranche [1:3] : éléments 2 et 3.
3. Remplacement par [10, 20, 30] → [1, 10, 20, 30, 4, 5].

Ordre des opérations :
• Création de la liste littérale, puis évaluation de la tranche et de la liste de droite, puis affectation.

Cas d'utilisation courants :
• Édition in-place de sous-séquences ; éviter de reconstruire toute la liste.

Cas limites :
• Indices hors bornes sont clippés pour les tranches ; liste vide en partie droite supprime la tranche.

Considérations de performance :
• Déplacer beaucoup d’éléments peut coûter O(n) sur la taille de la liste.

Exemples :
• a[2:2] = [99] insère sans supprimer d’élément existant.

Remarques :
• Pour une copie indépendante, utilisez a[:] ou list(a) avant de modifier.`,

  1702: `La bonne réponse est « [10, 2, 20, 4, 30] » : avec un pas, l’affectation sur tranche exige autant de valeurs que d’indices sélectionnés ; ici a[::2] touche les indices 0, 2 et 4.

Débutant :
• a[::2] prend un élément sur deux en partant du début.
• On remplace chaque position sélectionnée par la valeur correspondante.

Intermédiaire :
• Longueur différente → ValueError (contrairement à une tranche sans pas).
• Les indices non sélectionnés (1 et 3) restent inchangés.

Expert :
• CPython impose l’égalité des longueurs pour les assignations de tranches étendues ; pensez « remplacement position par position ».

Concepts clés :
• Tranche avec step ; assignation étendue ; correspondance des longueurs.

Distinctions clés :
• del a[::2] supprime des éléments ; a[::2] = [] n’est pas équivalent sans la bonne longueur.

Fonctionnement :
• Positions 0,2,4 reçoivent 10, 20, 30 ; le reste de la liste est préservé.

Exécution étape par étape :
1. Liste [1,2,3,4,5] ; sélection indices 0,2,4.
2. Remplacer 1→10, 3→20, 5→30.
3. Résultat [10,2,20,4,30].

Ordre des opérations :
• Construction de la liste, puis assignation atomique sur la tranche étendue.

Cas d'utilisation courants :
• Mettre à jour des colonnes ou des cases espacées régulièrement.

Cas limites :
• Mauvaise longueur : ValueError ; step 0 interdit.

Considérations de performance :
• Opération C optimisée mais toujours dépendante de la taille et du pas.

Exemples :
• a[::2] = [10,20] sur len 5 sélectionne 3 positions → erreur.

Remarques :
• Pour supprimer des positions espacées, préférez del a[::2] plutôt qu’une liste vide mal dimensionnée.`,

  1703: `La bonne réponse est « [1, 5] » : affecter [] à a[1:4] supprime les éléments aux indices 1, 2 et 3 sans insérer de remplaçants.

Débutant :
• La tranche [1:4] couvre trois éléments (jusqu’à l’indice 3 inclus côté « stop exclus » : indices 1,2,3).
• Une liste vide « remplace » par rien → suppression.

Intermédiaire :
• Équivalent à del a[1:4] pour cet effet.
• La liste rétrécit sur place.

Expert :
• Même principe que l’insertion par tranche vide a[i:i] = seq pour insérer sans retirer.

Concepts clés :
• Suppression par tranche ; affectation de liste vide.

Distinctions clés :
• a[1:4] = [] retire ; a[1:1] = [x] insère sans retirer.

Fonctionnement :
• Python retire le segment [2,3,4] de la liste d’origine, laissant [1,5].

Exécution étape par étape :
1. Avant : [1,2,3,4,5].
2. Indices 1–3 supprimés.
3. Après : [1,5].

Ordre des opérations :
• Évaluation de a et de la tranche, puis mutation de la liste.

Cas d'utilisation courants :
• Retirer un bloc contigu d’éléments efficacement.

Cas limites :
• Tranche vide (start == stop) avec [] ne change rien.

Considérations de performance :
• Décalage des éléments suivants en O(n) dans le pire cas.

Exemples :
• a[0:0] = [] est une no-op.

Remarques :
• Pour filtrer par prédicat, une compréhension ou list.remove en boucle ont d’autres compromis.`,

  1704: `La bonne réponse est « [2, 4] » : del a[::2] supprime les éléments aux indices 0, 2 et 4 (valeurs 1, 3, 5), il reste [2, 4].

Débutant :
• del retire des éléments ; avec un pas, plusieurs positions sautées disparaissent.
• Les éléments restants se compactent.

Intermédiaire :
• On ne peut pas simplement faire a[::2] = [] : l’assignation étendue exigerait une séquence de longueur fixe ; del est l’outil adapté.

Expert :
• del sur tranche étendue est bien défini et supprime dans l’ordre des indices décroissants en interne pour rester cohérent.

Concepts clés :
• del sur séquence ; tranche avec step ; suppression multiple.

Distinctions clés :
• Affectation étendue vs del pour retirer des cases espacées.

Fonctionnement :
• Indices 0,2,4 supprimés ; [2] et [4] conservés dans l’ordre.

Exécution étape par étape :
1. [1,2,3,4,5].
2. Suppression positions paires → valeurs impaires de la liste d’origine enlevées.
3. [2,4].

Ordre des opérations :
• del s’applique à la sous-sélection renvoyée par la tranche sur l’objet liste.

Cas d'utilisation courants :
• Nettoyer des colonnes alternées dans une structure linéarisée.

Cas limites :
• Liste vide ou un seul élément : résultats triviaux ou [].

Considérations de performance :
• Coût lié au nombre d’éléments et aux décalages.

Exemples :
• del a[1::2] supprime les indices impairs.

Remarques :
• Pour reconstruire sans les indices pairs, une compréhension peut être plus lisible.`,

  1705: `La bonne réponse est « [1, 2, 3, 4, 5] » : a[len(a):] est une tranche vide à la fin ; y affecter [4, 5] ajoute ces éléments comme avec extend.

Débutant :
• len(a) pointe juste après le dernier indice ; la tranche « de la fin à la fin » est vide.
• Affecter une liste insère à cet endroit → ajout en queue.

Intermédiaire :
• Équivaut à a.extend([4, 5]) pour ces valeurs.
• Pas de liste imbriquée : ce ne sont pas des append d’un seul objet liste.

Expert :
• Idiome utile quand l’indice de fin est calculé dynamiquement (concaténation générique sur séquences mutables).

Concepts clés :
• Tranche à la fin ; insertion ; équivalent sémantique à extend.

Distinctions clés :
• append([4,5]) ajouterait une sous-liste ; ici deux entiers séparés.

Fonctionnement :
• Insertion après l’élément d’indice len(a)-1, sans retirer d’élément existant.

Exécution étape par étape :
1. a = [1,2,3] ; len(a)=3 ; a[3:] est vide.
2. a[3:] = [4,5] insère 4 puis 5.
3. [1,2,3,4,5].

Ordre des opérations :
• len(a) évalué avant la construction de la tranche sur l’objet liste courant.

Cas d'utilisation courants :
• Coller une queue calculée sans créer une nouvelle liste par +.

Cas limites :
• Si la tranche n’est pas à la fin mais vide a[i:i], insertion au milieu.

Considérations de performance :
• Comparable à extend pour l’amortissement des append.

Exemples :
• a[:0] = [0] préfixe la liste.

Remarques :
• Pour immuables (tuple), on ne peut pas faire cette affectation.`,

  1706: `La bonne réponse est « [10, 20, 1, 2, 3] » : a[0:0] est une tranche vide au début ; l’affectation insère 10 et 20 avant l’ancien indice 0.

Débutant :
• start et stop à 0 → aucun élément retiré, insertion en tête.
• L’ordre d’insertion respecte l’ordre de la séquence de droite.

Intermédiaire :
• Équivalent à plusieurs insert en tête en ordre inverse, ou à un insert répété si une seule valeur.
• Les éléments existants se décalent vers la droite.

Expert :
• Généralisation : a[i:i] = seq insère seq avant l’indice i sans suppression.

Concepts clés :
• Tranche vide ; insertion préfixe ; décalage des indices.

Distinctions clés :
• a.insert(0, x) pour une valeur ; la tranche accepte plusieurs éléments d’un coup.

Fonctionnement :
• Python ouvre un « trou » à l’indice 0 et y place 10, 20, puis rattache 1,2,3.

Exécution étape par étape :
1. [1,2,3].
2. Insertion [10,20] en position 0.
3. [10,20,1,2,3].

Ordre des opérations :
• Liste cible puis séquence droite évaluées, puis mutation.

Cas d'utilisation courants :
• Préfixer des en-têtes ou buffers lus en bloc.

Cas limites :
• Grande liste : coût du décalage O(n).

Considérations de performance :
• Pour insertions fréquentes en tête, deque.appendleft est O(1).

Exemples :
• a[2:2] = [99] insère au milieu.

Remarques :
• Ne confondez pas avec a[0:0] = [[]] qui insère une liste vide comme élément.`,

  1707: `La bonne réponse est « [1, 10, 2, 3] » : a[1:1] est une tranche vide en position 1 ; on insère 10 avant l’élément qui était à l’indice 1.

Débutant :
• Deux fois le même indice → plage vide → insertion pure.
• Le 1 initial reste en tête, le 10 est entre 1 et 2.

Intermédiaire :
• Même effet que a.insert(1, 10) pour une seule valeur.
• La tranche permet d’insérer plusieurs éléments d’un coup.

Expert :
• Pattern général a[i:i] = iterable pour « ouvrir » la liste à l’indice i.

Concepts clés :
• Insertion indexée ; tranche vide a[i:i].

Distinctions clés :
• a[1:2] = [10] remplace l’élément à l’indice 1 au lieu d’insérer avant lui.

Fonctionnement :
• Aucune suppression ; décalage de 2 et 3 vers la droite.

Exécution étape par étape :
1. [1,2,3].
2. Insertion à l’indice 1.
3. [1,10,2,3].

Ordre des opérations :
• Évaluation de a[1:1] comme slice assignment target.

Cas d'utilisation courants :
• Injecter des éléments au milieu sans reconstruire toute la liste.

Cas limites :
• i = len(a) : append logique en fin via a[len(a):len(a)] = seq.

Considérations de performance :
• Décalage O(n) des éléments à droite de i.

Exemples :
• a[0:0] = [] ne fait rien.

Remarques :
• Pour files FIFO efficaces, voir collections.deque.`,

  1708: `La bonne réponse est « [2, 3, 4] » : slice(1, 4) équivaut à la notation [1:4] ; sur la liste donnée, ce sont les éléments aux indices 1, 2 et 3.

Débutant :
• slice(début, fin) : fin exclue, comme dans [début:fin].
• Objet slice réutilisable dans les crochets.

Intermédiaire :
• slice(None, None, step) correspond à [::step].
• Utile pour paramétrer des extractions (API, pandas-like sur listes).

Expert :
• Les attributs .start, .stop, .step existent sur l’objet slice pour introspection.

Concepts clés :
• Fonction built-in slice ; équivalence avec [start:stop].

Distinctions clés :
• slice n’indexe pas seul : il doit être passé à seq[s].

Fonctionnement :
• [1,2,3,4,5][slice(1,4)] parcourt les indices 1,2,3.

Exécution étape par étape :
1. Création de slice(1,4).
2. Application à la liste à cinq éléments.
3. Sous-liste [2,3,4].

Ordre des opérations :
• Liste littérale puis slice(), puis __getitem__.

Cas d'utilisation courants :
• Passer des bornes de fenêtre comme arguments de fonction.

Cas limites :
• Bornes négatives et None suivent les mêmes règles que la syntaxe :.

Considérations de performance :
• Négligeable vs indexation directe.

Exemples :
• s = slice(None, -1) ; x[s] enlève souvent le dernier élément.

Remarques :
• slice supporte le troisième argument step en slice(start, stop, step).`,

  1709: `La bonne réponse est « [0, 2, 4, 6, 8] » : slice(0, 10, 2) équivaut à [0:10:2] ; on prend un élément sur deux dans la liste 0..9.

Débutant :
• Le troisième argument est le pas ; on commence à 0, on avance de 2.
• Les indices sélectionnés sont 0,2,4,6,8 (10 exclu).

Intermédiaire :
• Même résultat que list(range(10))[0:10:2].
• s.start, s.stop, s.step décrivent la fenêtre.

Expert :
• Les slices normalisent les indices ; pour séquences longues, le pas peut réduire la copie matérielle créée.

Concepts clés :
• Slice à trois arguments ; pas positif ; stop exclus.

Distinctions clés :
• [::2] sans stop va jusqu’au bout ; ici stop=10 borne explicitement.

Fonctionnement :
• Itération d’indices 0,2,4,6,8 sur la liste affichée.

Exécution étape par étape :
1. Liste [0,1,...,9].
2. Indices pairs strictement < 10.
3. Valeurs [0,2,4,6,8].

Ordre des opérations :
• slice(0,10,2) puis __getitem__.

Cas d'utilisation courants :
• Sous-échantillonnage simple de séries ordonnées.

Cas limites :
• Pas négatif : start et stop doivent être cohérents pour un résultat non vide.

Considérations de performance :
• Crée une nouvelle liste des éléments référencés.

Exemples :
• slice(1, None, 2) pour les indices impairs.

Remarques :
• Pour de grands tableaux numériques, numpy offre des vues plus riches ; ici ce sont des listes Python.`,

  1710: `La bonne réponse est « "olleh" » : [::-1] parcourt la chaîne de la fin vers le début avec un pas de -1, ce qui inverse l’ordre des caractères.

Débutant :
• Les chaînes sont des séquences ; le slicing fonctionne comme pour les listes.
• Le résultat est une nouvelle chaîne (immuabilité).

Intermédiaire :
• Idiome standard pour tester un palindrome : s == s[::-1].
• reversed(s) donne un itérateur ; il faut ''.join(...) pour une chaîne.

Expert :
• Pas de copie « vue » : nouvelle chaîne allouée, coût O(n) en temps et espace.

Concepts clés :
• Slice avec step -1 ; inversion de séquence.

Distinctions clés :
• list.reverse() modifie en place et renvoie None ; [::-1] produit une nouvelle séquence.

Fonctionnement :
• h-e-l-l-o lu depuis l’index 4 vers 0 → olleh.

Exécution étape par étape :
1. Chaîne "hello", longueur 5.
2. Indices 4,3,2,1,0.
3. "olleh".

Ordre des opérations :
• Littéral chaîne puis application du slice.

Cas d'utilisation courants :
• Inversion affichage, palindromes, endianness de petites représentations.

Cas limites :
• ""[::-1] reste "".

Considérations de performance :
• Linéaire en la longueur ; acceptable pour chaînes usuelles.

Exemples :
• [1,2,3][::-1] → [3,2,1].

Remarques :
• Pour bytes/bytearray, même syntaxe avec nuances de mutabilité pour bytearray.`,

  1711: `La bonne réponse est « False » : b = a[:] crée une liste superficielle distincte ; is compare l’identité d’objet, pas l’égalité des valeurs.

Débutant :
• a[:] copie les éléments dans une nouvelle liste.
• b is a demande si c’est le même objet en mémoire.

Intermédiaire :
• b == a serait True (mêmes valeurs).
• Même logique pour list(a), a.copy(), copy.copy(a) sur liste plate.

Expert :
• id(b) != id(a) en général ; partage des références internes si éléments mutables (copie superficielle).

Concepts clés :
• Copie superficielle ; opérateur is ; égalité vs identité.

Distinctions clés :
• is vs == ; alias (b = a) vs copie (b = a[:]).

Fonctionnement :
• Nouvelle allocation de liste ; éléments référencés comme dans a pour une liste d’entiers.

Exécution étape par étape :
1. Création de [1,2,3] pour a.
2. a[:] produit une deuxième liste avec les mêmes éléments.
3. is → False.

Ordre des opérations :
• Slice sur a puis assignation à b puis comparaison is.

Cas d'utilisation courants :
• Éviter qu’une fonction mutateur ne modifie la liste d’origine.

Cas limites :
• Petits entiers peuvent partager id entre variables, mais pas les listes elles-mêmes.

Considérations de performance :
• Copie O(n) pour une liste de taille n.

Exemples :
• b = a puis b.append(4) modifie aussi a.

Remarques :
• Pour arbres de listes, exiger deepcopy pour l’indépendance totale.`,

  1712: `La bonne réponse est « False » : a[:] construit une nouvelle liste ; id(a) et id(a[:]) désignent deux objets différents tant qu’ils coexistent.

Débutant :
• id renvoie l’identité (souvent l’adresse en CPython).
• Deux listes distinctes → deux id.

Intermédiaire :
• La comparaison id(a) == id(a[:]) évalue a[:] à chaque fois : objet frais.
• Même résultat False pour list(a).

Expert :
• Ne pas confondre avec l’internement de certains immuables ; les listes ne sont pas « cachées » ainsi.

Concepts clés :
• id() ; objet temporaire a[:] ; identité.

Distinctions clés :
• id(a)==id(b) avec b=a → True (alias).

Fonctionnement :
• Création d’une copie superficielle, comparaison des identifiants.

Exécution étape par étape :
1. Évaluation de id(a).
2. Création de a[:], évaluation de id sur ce nouvel objet.
3. False.

Ordre des opérations :
• Appels id de gauche à droite ; le slice est une sous-expression.

Cas d'utilisation courants :
• Déboguer partage de références et fuites logiques.

Cas limites :
• Après garbage collection, un id peut être réutilisé pour un autre objet (ne pas stocker id comme clé stable long terme hors cadre d’usage courant).

Considérations de performance :
• Créer a[:] coûte O(n) temps et mémoire.

Exemples :
• id([]) == id([]) est typiquement False (deux listes vides distinctes).

Remarques :
• Utilisez is pour comparer à None, singletons, ou alias voulus.`,

  1713: `La bonne réponse est « (3, 2, 1) » : le slicing avec [::-1] fonctionne sur les tuples et renvoie un nouveau tuple inversé.

Débutant :
• Tuple = séquence immuable ; lecture par indices et tranches autorisée.
• [::-1] produit un nouvel objet tuple.

Intermédiaire :
• Impossible d’affecter à une tranche de tuple (TypeError) ; seulement lecture + reconstruction.
• Le résultat reste un tuple, pas une liste.

Expert :
• Coût linéaire ; nouveau tuple alloué avec références aux mêmes éléments immuables.

Concepts clés :
• Tuple ; inversion par slice ; immuabilité.

Distinctions clés :
• [::-1] sur liste renvoie une liste ; ici type préservé (tuple).

Fonctionnement :
• Parcours inverse des trois éléments.

Exécution étape par étape :
1. (1,2,3) indices 0,1,2.
2. Ordre de lecture 2,1,0.
3. (3,2,1).

Ordre des opérations :
• Littéral tuple puis __getitem__ avec slice.

Cas d'utilisation courants :
• Inverser des enregistrements immuables pour affichage ou comparaison.

Cas limites :
• Tuple vide : ()[::-1] → ().

Considérations de performance :
• Linéaire en la taille du tuple.

Exemples :
• tuple(reversed((1,2,3))) équivalent sémantique.

Remarques :
• reversed évite la copie immédiate si vous itérez une seule fois.`,

  1714: `La bonne réponse est « "pto" » : "python"[::2] prend les indices 0, 2, 4 → p, t, o.

Débutant :
• [::2] signifie début implicite 0, fin implicite fin, pas 2.
• Caractères espacés d’une position dans la chaîne d’origine.

Intermédiaire :
• [1::2] donnerait les indices impairs (y, h, n) pour cette chaîne.
• Même logique sur listes ou tuples.

Expert :
• UTF-8 en mémoire : un caractère « logique » peut être plusieurs points de code ; ici tous des BMP simples.

Concepts clés :
• Pas dans une chaîne ; indices pairs.

Distinctions clés :
• [::2] vs [::-1] (inversion).

Fonctionnement :
• Indices 0→p, 2→t, 4→o ; stop avant fin effective.

Exécution étape par étape :
1. Chaîne longueur 6, indices 0..5.
2. Sélection 0,2,4.
3. "pto".

Ordre des opérations :
• Littéral puis slice.

Cas d'utilisation courants :
• Sous-échantillonner des symboles pour motifs ou validation rapide.

Cas limites :
• Chaîne de longueur 1 : résultat d’un caractère.

Considérations de performance :
• Nouvelle chaîne allouée.

Exemples :
• "abcdef"[::2] → "ace".

Remarques :
• Pour texte Unicode complexe, considérez les graphemes plutôt que l’indexation naïve.`,

  1715: `La bonne réponse est « [7, 6, 5, 4, 3] » : avec un pas négatif, la tranche [7:2:-1] part de l’indice 7 vers l’indice 3 ; l’indice d’arrêt 2 est exclu.

Débutant :
• Step -1 parcourt de la droite vers la gauche.
• On commence à 7, puis 6,5,4,3 ; on s’arrête avant 2.

Intermédiaire :
• [2:7:-1] serait vide car on ne peut pas reculer de 2 vers 7 avec pas -1.
• stop est toujours exclus, sens avant ou arrière.

Expert :
• Normalisation des indices utilise len ; ici les bornes sont déjà valides sur range(10).

Concepts clés :
• Slice à pas négatif ; exclusion du stop ; start > stop pour résultat non vide.

Distinctions clés :
• [7:3] sans pas négatif donnerait [] (sens positif incohérent).

Fonctionnement :
• Liste [0..9] ; collecte des éléments aux indices 7 à 3 inclus côté parcours.

Exécution étape par étape :
1. list(range(10)) construit dix entiers.
2. Indices parcourus : 7,6,5,4,3.
3. Valeurs [7,6,5,4,3].

Ordre des opérations :
• range puis list puis slice.

Cas d'utilisation courants :
• Inverser une sous-fenêtre sans toucher le reste.

Cas limites :
• start et stop égaux → [] avec pas non nul.

Considérations de performance :
• Création d’une sous-liste proportionnelle à la longueur de la tranche.

Exemples :
• s[::-1] inverse toute la séquence.

Remarques :
• Pour inverser un itérateur long, reversed() peut être préférable en mémoire.`,

  1716: `La bonne réponse est « [[1, 2, 5], [3, 4]] » : b = a[:] copie seulement le conteneur externe ; b[0] et a[0] pointent vers la même sous-liste, donc append(5) la modifie pour les deux.

Débutant :
• La copie superficielle duplique la liste extérieure, pas les objets intérieurs.
• append sur une sous-liste partagée se voit via a et b.

Intermédiaire :
• b[0] is a[0] → True avant et après append.
• Seule la première ligne interne change ; la seconde reste [3,4].

Expert :
• Même piège avec list(a), copy.copy(a), a.copy() sur structures imbriquées.

Concepts clés :
• Copie superficielle ; références partagées ; listes imbriquées.

Distinctions clés :
• deepcopy pour indépendance récursive ; copie plate pour perf quand sûr.

Fonctionnement :
• Mutation de l’objet liste interne référencé deux fois.

Exécution étape par étape :
1. a = deux sous-listes distinctes pour [1,2] et [3,4].
2. b partage les références sur ces mêmes objets.
3. append sur b[0] → [1,2,5] visible dans a[0].

Ordre des opérations :
• Création de a, slice copy, puis append sur élément 0 de b.

Cas d'utilisation courants :
• Cloner des graphes légers ; toujours auditer la profondeur.

Cas limites :
• Si les éléments internes sont immuables (int, str, tuple de hashables), le piège disparaît.

Considérations de performance :
• deepcopy est plus coûteux mais sûr pour arbres profonds.

Exemples :
• copy.deepcopy(a) puis b[0].append n’affecte pas a.

Remarques :
• Documentez si une fonction « clone » est shallow ou deep.`,

  1717: `La bonne réponse est « True » : list(a) alloue une nouvelle liste de premier niveau mais réutilise les références des éléments ; b[0] et a[0] sont le même objet liste.

Débutant :
• list(...) convertit ou copie le conteneur en liste, niveau supérieur seulement.
• is sur éléments internes peut être True malgré b is a → False.

Intermédiaire :
• b is a est False (conteneurs distincts).
• b[0] is a[0] est True (même sous-liste).

Expert :
• Cohérent avec itertools ou constructions génériques acceptant Iterable.

Concepts clés :
• Constructeur list sur liste existante ; shallow copy implicite.

Distinctions clés :
• list(a) vs a[:] vs copy.copy(a) sur listes : même sémantique superficielle.

Fonctionnement :
• Nouvelle « coquille » liste pointant vers les mêmes enfants mutables.

Exécution étape par étape :
1. a = [[1,2],[3,4]].
2. b = list(a) : nouvelle liste longueur 2.
3. Indices 0 et 1 référencent les mêmes objets que a.

Ordre des opérations :
• Évaluation de a, appel list, comparaison is sur éléments.

Cas d'utilisation courants :
• Normaliser en list pour APIs ; attention aux effets de bord.

Cas limites :
• list() sur générateur épuise l’itérateur ; ici a est déjà une liste.

Considérations de performance :
• O(n) pour le conteneur top-level ; pas de duplication des sous-listes.

Exemples :
• [x for x in a] copie aussi superficiellement les références.

Remarques :
• Pour matrice indépendante : [[row[:] for row in a]] ou deepcopy.`,

  1718: `La bonne réponse est « [[1, 2]] » : copy.copy fait une copie superficielle ; la liste interne [1] est partagée, donc append(2) modifie aussi a[0].

Débutant :
• import copy puis copy.copy sur une liste ne duplique pas les listes internes.
• Un seul objet [1] existe, référencé deux fois.

Intermédiaire :
• copy.deepcopy aurait créé une nouvelle liste interne.
• b[0] is a[0] reste True ici.

Expert :
• __copy__ personnalisé pourrait changer ce comportement sur classes user-defined ; pas pour list builtin.

Concepts clés :
• Module copy ; shallow copy ; mutation partagée.

Distinctions clés :
• copy.copy vs deepcopy ; performance vs isolation.

Fonctionnement :
• append sur la liste interne unique → [1,2] vu par a et b.

Exécution étape par étape :
1. a = [[1]].
2. b = copy.copy(a) : nouvelle liste externe.
3. b[0].append(2) mute l’unique interne.

Ordre des opérations :
• import (déjà fait dans l’énoncé), copy, append.

Cas d'utilisation courants :
• Dupliquer des structures avant mutation ; choisir la profondeur adéquate.

Cas limites :
• Structures cycliques : deepcopy gère ; shallow peut laisser des cycles identiques.

Considérations de performance :
• deepcopy traverse tout le graphe.

Exemples :
• a = [[1]] ; b = a[:] ; même piège.

Remarques :
• En revue de code, signaler copy.copy sur containers imbriqués.`,

  1719: `La bonne réponse est « [[1]] » : copy.deepcopy clone récursivement ; b[0] devient une liste distincte, append(2) ne touche pas a.

Débutant :
• deepcopy « descend » dans les objets mutables imbriqués.
• Après mutation de b, a reste [[1]].

Intermédiaire :
• b[0] is a[0] → False après deepcopy.
• deepcopy gère mémoïsation pour cycles.

Expert :
• Hooks __deepcopy__ personnalisables ; défaut récursif sur dict, list, set, etc.

Concepts clés :
• Copie profonde ; indépendance des niveaux internes.

Distinctions clés :
• deepcopy vs sérialisation (pickle) pour clones trans-processus.

Fonctionnement :
• Nouvelle liste externe et nouvelle liste interne [1] pour b.

Exécution étape par étape :
1. deepcopy(a) duplique conteneur et enfant.
2. b[0].append(2) → b devient [[1,2]].
3. a reste [[1]].

Ordre des opérations :
• deepcopy avant append sur b.

Cas d'utilisation courants :
• Configurations JSON-like modifiables sans effet sur le modèle source.

Cas limites :
• Objets non copiables (fichiers ouverts, verrous) lèvent des erreurs.

Considérations de performance :
• Coût potentiellement élevé sur gros graphes.

Exemples :
• deepcopy({"x": [1]}) isole aussi les valeurs mutables.

Remarques :
• Pour structures immuables (tuple de hashables), shallow suffit souvent.`,

  1720: `La bonne réponse est « [1, 2, 3, 4] » : pour les listes, += appelle __iadd__ et étend la liste en place ; b est alias de a, donc b reflète [4] ajouté.

Débutant :
• b = a : deux noms, une liste.
• a += [4] ne crée pas une nouvelle liste (contrairement à a = a + [4] dans d’autres cas).

Intermédiaire :
• a += [4] ≈ extend([4]) sur place.
• id(a) inchangé.

Expert :
• Détails du protocole in-place des ABC pour mutable sequences.

Concepts clés :
• __iadd__ sur list ; alias ; mutation en place.

Distinctions clés :
• a = a + [4] rebind a et laisse b sur l’ancienne liste (question 1722).

Fonctionnement :
• extend ajoute 4 à la fin de l’objet liste partagé.

Exécution étape par étape :
1. a et b pointent sur [1,2,3].
2. += ajoute 4 sur cet objet.
3. b vaut [1,2,3,4].

Ordre des opérations :
• Assignation alias puis opération in-place augmentée.

Cas d'utilisation courants :
• Accumulateurs partagés (attention aux effets de bord).

Cas limites :
• Tuple += crée nouvel objet (question suivante).

Considérations de performance :
• Souvent meilleur que concaténation + réassignation pour grandes listes.

Exemples :
• a.extend([4]) même effet ici.

Remarques :
• Documentez quand une fonction garde une référence sur une liste mutable passée.`,

  1721: `La bonne réponse est « (1, 2, 3) » : les tuples sont immuables ; a += (4,) construit un nouveau tuple et rattache le nom a, tandis que b reste lié à l’ancien (1,2,3).

Débutant :
• On ne peut pas « étendre » un tuple existant.
• b continue de désigner l’objet tuple d’origine.

Intermédiaire :
• a += (4,) ≈ a = a + (4,) pour tuple.
• Après cela, a is b est False.

Expert :
• bool n’hérite pas de tuple mais l’idée « pas de __iadd__ in-place » est analogue pour immuables.

Concepts clés :
• Immuabilité du tuple ; rebinding de nom vs mutation.

Distinctions clés :
• Liste += mutateur ; tuple += reconstruction + assignation.

Fonctionnement :
• Création de (1,2,3,4) puis assignation à a ; b inchangé.

Exécution étape par étape :
1. a et b → même tuple (1,2,3).
2. a += (4,) crée nouveau tuple, a seul rebondé.
3. b → (1,2,3).

Ordre des opérations :
• Addition de tuples puis assignation au nom a.

Cas d'utilisation courants :
• Accumuler en tuple de façon pure : souvent préférer liste puis tuple().

Cas limites :
• Concaténation répétée O(n²) si fait naïvement en boucle.

Considérations de performance :
• Pour construction dynamique, list puis conversion finale.

Exemples :
• a = (1,) ; a += (2,) → nouvel objet à chaque fois.

Remarques :
• namedtuple._replace est un autre pattern d’« update » immuable.`,

  1722: `La bonne réponse est « [1, 2, 3] » : a + [4] produit une nouvelle liste ; l’assignation à a change seulement le nom a, pas l’objet que b référence encore.

Débutant :
• + sur listes crée une nouvelle liste concaténée.
• b pointe toujours vers l’ancienne liste trois éléments.

Intermédiaire :
• a is b avant : True ; après a = a + [4] : False.
• Pattern sûr pour ne pas affecter les alias.

Expert :
• __add__ vs __iadd__ : pas d’optimisation in-place pour + pur.

Concepts clés :
• Concaténation non destructive ; rebinding.

Distinctions clés :
• Comparez avec += sur liste (question 1720).

Fonctionnement :
• Nouvelle liste [1,2,3,4] assignée à a seul.

Exécution étape par étape :
1. b et a → [1,2,3].
2. Évalue a + [4] → nouvelle liste.
3. a rebondé ; b inchangé.

Ordre des opérations :
• Addition puis assignation simple.

Cas d'utilisation courants :
• Fonctions pures qui retournent nouvelle liste sans muter l’entrée.

Cas limites :
• Coût mémoire/temps pour très grandes listes.

Considérations de performance :
• Peut doubler temporairement l’usage mémoire pendant la copie.

Exemples :
• a = [*a, 4] en Python 3 crée aussi une nouvelle liste.

Remarques :
• itertools.chain pour enchaîner sans matérialiser tôt.`,

  1723: `La bonne réponse est « [[1,0,0],[0,0,0],[0,0,0]] » : la compréhension [[0]*3 for _ in range(3)] crée trois listes internes distinctes ; seul a[0][0] devient 1.

Débutant :
• Chaque itération fabrique un nouveau [0,0,0].
• Modifier une ligne ne change pas les autres.

Intermédiaire :
• a[0] is a[1] → False.
• Contrast avec [[0]*3]*3 (question 1724).

Expert :
• Modèle mental : une boucle for explicite avec append de nouvelles listes.

Concepts clés :
• Liste en compréhension ; indépendance des lignes ; matrice 2D.

Distinctions clés :
• * sur liste interne crée une ligne ; * sur liste de lignes partage les lignes.

Fonctionnement :
• a[0][0] = 1 affecte uniquement la première sous-liste.

Exécution étape par étape :
1. Trois listes [0,0,0] créées séparément.
2. Assignation d’index [0][0].
3. Première ligne [1,0,0], autres inchangées.

Ordre des opérations :
• Compréhension puis assignation double indice.

Cas d'utilisation courants :
• Grilles de jeu, DP tables, tableaux 2D corrects.

Cas limites :
• [0]*0 dans une compréhension : lignes vides répétées mais distinctes.

Considérations de performance :
• O(r*c) mémoire pour r lignes de c colonnes.

Exemples :
• [[0 for _ in range(3)] for _ in range(3)] équivalent.

Remarques :
• numpy.zeros pour grosses matrices numériques.`,

  1724: `La bonne réponse est « [[1,0,0],[1,0,0],[1,0,0]] » : [[0]*3]*3 répète trois fois la même référence de liste interne ; a[0][0] = 1 modifie cette liste partagée visible partout.

Débutant :
• Le * externe duplique les références, pas les clones profonds.
• Les trois « lignes » sont un seul objet liste.

Intermédiaire :
• a[0] is a[1] is a[2] → True.
• Classique piège d’entretien / enseignement.

Expert :
• Même problème avec dicts ou sets mutables dans des multiplications de listes.

Concepts clés :
• Multiplication de liste ; alias multiples ; mutation visible globalement.

Distinctions clés :
• Compréhension (1723) vs multiplication (1724).

Fonctionnement :
• Une seule sous-liste [0,0,0] mutée en [1,0,0] pour toutes les entrées.

Exécution étape par étape :
1. [0]*3 crée une liste L.
2. [L]*3 crée [L,L,L].
3. Mutation sur L via n’importe quelle ligne.

Ordre des opérations :
• Création de L, puis conteneur de références.

Cas d'utilisation courants :
• Initialiser counts : préférer [0]*n pour entiers immuables, pas pour listes.

Cas limites :
• [[ ]]*3 partage des listes vides identiques (question 1725).

Considérations de performance :
• Erreur logique coûteuse à déboguer malgré coût O(1) de création.

Exemples :
• id(a[0]) == id(a[2]) True.

Remarques :
• Tests unitaires sur structures 2D devraient vérifier l’indépendance des lignes.`,

  1725: `La bonne réponse est « [[1], [1], [1]] » : [[]]*3 pointe trois fois vers la même liste vide ; append(1) sur a[0] remplit cette liste unique, vue par toutes les entrées.

Débutant :
• Une seule liste interne vide existe.
• Les trois slots du conteneur externe la référencent.

Intermédiaire :
• a[0] is a[1] is a[2] → True.
• Correction : [[] for _ in range(3)].

Expert :
• Généralisation : jamais * une liste de mutables si vous voulez des clones indépendants.

Concepts clés :
• Liste de listes vides partagées ; append visible partout.

Distinctions clés :
• [[]]*3 vs [[] for _ in range(3)].

Fonctionnement :
• append(1) sur l’unique sous-liste → [1] pour chaque « ligne ».

Exécution étape par étape :
1. Création d’une liste vide L.
2. Conteneur [L,L,L].
3. a[0].append(1) mute L.

Ordre des opérations :
• Multiplication puis append sur premier élément.

Cas d'utilisation courants :
• Buckets dans algorithme : initialiser avec compréhension.

Cas limites :
• Même piège avec [set()]*n ou [{}]*n.

Considérations de performance :
• Compréhension légèrement plus chère mais correcte.

Exemples :
• [{}]*2 partage le même dict (dangereux).

Remarques :
• Lire Flake8 / ruff plugins parfois détectent ce motif.`,

  1726: `La bonne réponse est « ["y", "x", "x"] » : ["x"]*3 partage trois références à la même chaîne "x", mais les chaînes sont immuables ; a[0] = "y" rebondit seulement l’indice 0 vers un nouvel objet "y".

Débutant :
• L’affectation d’élément remplace la référence dans la liste, elle ne modifie pas la chaîne "x".
• Les indices 1 et 2 pointent encore vers "x".

Intermédiaire :
• Si les éléments étaient mutables (listes), le partage via * poserait problème.
• Ici immuabilité rend le partage inoffensif jusqu’à réassignation d’indices.

Expert :
• Internement CPython peut partager "x" ; id identique pour les entrées jusqu’à réassignation partielle.

Concepts clés :
• Immuabilité des str ; réassignation d’élément de liste ; multiplication de liste.

Distinctions clés :
• a[0].append vs a[0] = sur str (pas d’append).

Fonctionnement :
• Liste trois références à "x" ; index 0 remplacé par référence à "y".

Exécution étape par étape :
1. a = ["x","x","x"] logiquement.
2. a[0] = "y".
3. ["y","x","x"].

Ordre des opérations :
• Création liste puis assignation indexée.

Cas d'utilisation courants :
• Grilles de caractères ou tokens initialisés identiquement.

Cas limites :
• Remplacer tous les "x" nécessite compréhension ou boucle, pas une seule assignation d’indice.

Considérations de performance :
• Réassignation O(1) amortie pour liste.

Exemples :
• [0]*5 puis a[2]=1 → seul le 2 change.

Remarques :
• Pour buffers mutables de caractères, bytearray est adapté.`,

  1727: `La bonne réponse est « [1, 2, 3] » : b = a.copy() duplique la liste plate ; a.append(4) ne modifie que a, pas b.

Débutant :
• copy() sur liste crée une nouvelle liste des mêmes éléments.
• append ajoute à la fin de l’objet liste ciblé par a.

Intermédiaire :
• Éléments immuables → copie superficielle = indépendance complète.
• b is a → False.

Expert :
• Si les éléments étaient mutables, il faudrait surveiller le partage (non le cas ici).

Concepts clés :
• list.copy ; append ; indépendance pour liste plate d’immuables.

Distinctions clés :
• copy vs alias ; copy vs deepcopy selon contenu.

Fonctionnement :
• append étend uniquement la liste référencée par a.

Exécution étape par étape :
1. b copie [1,2,3].
2. a.append(4) → a = [1,2,3,4].
3. b reste [1,2,3].

Ordre des opérations :
• copy puis append sur a.

Cas d'utilisation courants :
• Snapshot avant transformation destructive.

Cas limites :
• Liste vide : copy() reste [] indépendant.

Considérations de performance :
• O(n) pour la copie superficielle.

Exemples :
• b = a[:] même effet.

Remarques :
• En threading, copies ne rendent pas automatiquement thread-safe les objets internes mutables.`,

  1728: `La bonne réponse est « {1, 2, 3} » : b = a.copy() clone l’ensemble ; a.add(4) n’affecte pas b car les sets sont distincts.

Débutant :
• Les sets ont copy() comme les dicts.
• add modifie seulement le set référencé par a.

Intermédiaire :
• Éléments hashables uniquement ; pas de sous-sets mutables ici.
• set(a) ou {*a} donnerait aussi une copie superficielle.

Expert :
• copy() est O(n) sur la taille du set ; même sémantique que dict.copy pour indépendance top-level.

Concepts clés :
• set.copy ; mutation add ; indépendance.

Distinctions clés :
• frozenset n’a pas add ; set oui.

Fonctionnement :
• Deux hash tables distinctes après copy.

Exécution étape par étape :
1. b reçoit copie de {1,2,3}.
2. a.add(4) → a = {1,2,3,4}.
3. b = {1,2,3}.

Ordre des opérations :
• copy puis add.

Cas d'utilisation courants :
• Traiter un sous-ensemble sans polluer l’original.

Cas limites :
• Éléments non hashables interdits dans set.

Considérations de performance :
• add moyenne O(1) ; copy linéaire.

Exemples :
• b = set(a) idem shallow.

Remarques :
• Les éléments eux-mêmes sont partagés (objets mutables rares comme éléments de set : interdit sauf cas spéciaux).`,

  1729: `La bonne réponse est « {"x": 1} » : dict.copy() duplique le mapping au premier niveau ; ajouter une nouvelle clé "y" sur a ne modifie pas b.

Débutant :
• Chaque dict a ses propres clés après copy.
• b ne voit pas les clés ajoutées ultérieurement à a seulement.

Intermédiaire :
• Les valeurs mutables restent partagées (question 1730).
• a.keys() indépendants après ajout sur a.

Expert :
• Pour vue dynamique, .copy() n’est pas une vue : c’est un clone shallow du mapping.

Concepts clés :
• dict.copy ; clés indépendantes ; shallow.

Distinctions clés :
• copy vs alias b = a ; copy vs deepcopy.

Fonctionnement :
• b conserve exactement {"x":1} ; a gagne "y".

Exécution étape par étape :
1. b = copie superficielle.
2. a["y"] = 2 sur a uniquement.
3. b inchangé pour les clés.

Ordre des opérations :
• copy puis assignation de clé sur a.

Cas d'utilisation courants :
• Paramètres par défaut copiés avant mutation.

Cas limites :
• Clés manquantes : KeyError sur accès direct.

Considérations de performance :
• copy linéaire en nombre d’entrées.

Exemples :
• dict(a) similaire.

Remarques :
• dataclasses.replace ou copy avec champs nested suivent d’autres patterns.`,

  1730: `La bonne réponse est « {"x": [1, 2]} » : dict.copy() est superficiel ; la valeur liste sous "x" est partagée, donc append(2) sur a["x"] modifie aussi b["x"].

Débutant :
• Nouveau dict, mais mêmes objets valeurs.
• Deux clés "x" pointent vers la même liste.

Intermédiaire :
• a["x"] is b["x"] → True.
• deepcopy du dict isolerait les listes.

Expert :
• Même problème avec attributs de classes partageant listes mutables.

Concepts clés :
• Copie superficielle de dict ; valeurs mutables partagées.

Distinctions clés :
• Ajouter une nouvelle clé (1729) vs muter valeur existante (1730).

Fonctionnement :
• append mute l’objet liste unique référencé par les deux dicts.

Exécution étape par étape :
1. b = a.copy().
2. Liste sous "x" = [1] partagée.
3. append(2) → [1,2] visible des deux côtés.

Ordre des opérations :
• copy puis mutation de la valeur via a.

Cas d'utilisation courants :
• Cloner config JSON : deepcopy ou copie explicite des listes.

Cas limites :
• Remplacer a["x"] = [1] rebondit seulement a si b garde l’ancienne ref (selon ordre).

Considérations de performance :
• deepcopy plus lourd mais sûr.

Exemples :
• {k: v[:] for k,v in a.items()} pour un niveau de listes.

Remarques :
• Tests d’égalité == entre dicts reflètent l’état courant des valeurs partagées.`,

  1731: `La bonne réponse est « 2 » : append puis append puis pop() retire le dernier élément (LIFO) ; la pile contenait 1 puis 2, donc pop renvoie 2.

Débutant :
• append empile à droite.
• pop() sans indice dépile à droite.

Intermédiaire :
• Complexité amortie O(1) en bout de liste.
• Utile pour DFS, annulation, parseurs.

Expert :
• list n’est pas thread-safe sans verrou externe.

Concepts clés :
• Pile LIFO ; append ; pop.

Distinctions clés :
• pop(0) file côté liste mais O(n) ; deque pour FIFO O(1).

Fonctionnement :
• État [1] puis [1,2] puis pop → 2.

Exécution étape par étape :
1. stack=[].
2. append 1 → [1].
3. append 2 → [1,2].
4. pop → retourne 2, stack [1].

Ordre des opérations :
• Séquence d’appels dans l’ordre textuel.

Cas d'utilisation courants :
• Parenthèses matching, undo stacks.

Cas limites :
• pop sur liste vide : IndexError.

Considérations de performance :
• Préférer fin de liste pour pop fréquents.

Exemples :
• stack[-1] pour peek sans retirer.

Remarques :
• collections.deque offre aussi pop append symétriques O(1) aux deux bouts.`,

  1732: `La bonne réponse est « [1, 2] » : pop() enlève et renvoie le dernier élément 3 ; la liste devient [1, 2].

Débutant :
• pop modifie la liste en place.
• Sans capture de valeur, le 3 est perdu sauf assignation result = stack.pop().

Intermédiaire :
• pop(i) retire l’indice i avec coût variable.
• pop() seul est le cas pile.

Expert :
• Slice del stack[-1:] alternative moins idiomatique.

Concepts clés :
• pop fin de liste ; mutation ; valeur retournée.

Distinctions clés :
• pop vs stack[-1] seul (pas de retrait).

Fonctionnement :
• Retrait de l’élément d’indice len-1.

Exécution étape par étape :
1. [1,2,3].
2. pop retire 3.
3. [1,2].

Ordre des opérations :
• Un appel pop sur l’objet liste.

Cas d'utilisation courants :
• Consommer une pile d’états.

Cas limites :
• Liste singleton → [] après pop.

Considérations de performance :
• O(1) amortized à la fin.

Exemples :
• while stack: process(stack.pop()).

Remarques :
• Ne pas pop pendant itération forward sur la même liste sans précaution.`,

  1733: `La bonne réponse est « 1 » : deque.popleft() retire l’élément le plus à gauche en O(1) ; file FIFO : premier entré (1) sort en premier.

Débutant :
• deque = double-ended queue.
• popleft enlève « devant ».

Intermédiaire :
• Sur une list, pop(0) serait O(n) à cause des décalages.
• deque optimise les deux extrémités.

Expert :
• Implémentation bloc chaînée en CPython ; maxlen option (question suivante).

Concepts clés :
• deque ; popleft ; FIFO.

Distinctions clés :
• pop() sur deque retire à droite ; popleft à gauche.

Fonctionnement :
• deque([1,2,3]) → retire 1, reste [2,3].

Exécution étape par étape :
1. Import collections.deque.
2. q initialisé avec trois éléments.
3. popleft → 1.

Ordre des opérations :
• import puis construction deque puis popleft.

Cas d'utilisation courants :
• BFS, files d’événements, buffers ordonnés.

Cas limites :
• deque vide : IndexError sur popleft.

Considérations de performance :
• O(1) aux deux bouts vs list.

Exemples :
• rotate, extendleft autres opérations utiles.

Remarques :
• Pour async queues, asyncio.Queue ajoute la concurrence.`,

  1734: `La bonne réponse est « [0, 1, 2, 3] » : appendleft(0) ajoute 0 à gauche du deque ; list(q) reflète l’ordre gauche-droite.

Débutant :
• appendleft pousse devant sans décaler toute une liste Python comme insert(0) sur list.
• Ordre final 0 puis anciens éléments.

Intermédiaire :
• list(q) matérialise une liste ordonnée tête→queue.
• append droit resterait append classique.

Expert :
• deque thread-safety : pas garantie sans synchronisation.

Concepts clés :
• appendleft ; deque ; conversion list.

Distinctions clés :
• appendleft vs insert(0) sur list pour coût.

Fonctionnement :
• q devient deque([0,1,2,3]) logiquement.

Exécution étape par étape :
1. q = [1,2,3] en deque.
2. appendleft(0).
3. list(q) → [0,1,2,3].

Ordre des opérations :
• import, deque, appendleft, list().

Cas d'utilisation courants :
• Push front dans parcours bidirectionnels.

Cas limites :
• maxlen peut éjecter l’autre côté si défini.

Considérations de performance :
• O(1) appendleft documenté.

Exemples :
• combinaison append / appendleft pour deque bidirectionnel.

Remarques :
• Vérifier version Python : deque stable depuis longtemps.`,

  1735: `La bonne réponse est « [2, 3, 4] » : deque(maxlen=3) garde au plus trois éléments ; extend ajoute 1,2,3,4 séquentiellement, en éjectant le plus ancien quand on dépasse 3.

Débutant :
• Après 1,2,3 la deque est pleine.
• Quand 4 arrive, 1 tombe à gauche (côté opposé à l’ajout par extend à droite).

Intermédiaire :
• Comportement de fenêtre glissante « derniers N ».
• maxlen figé après création.

Expert :
• Utile pour logs circulaires ou moyennes mobiles simples.

Concepts clés :
• maxlen ; deque ; éviction automatique.

Distinctions clés :
• list[-3:] sans deque ne modifie pas la liste source automatiquement.

Fonctionnement :
• Séquence d’extensions pousse 1 puis 2 puis 3 ; 4 remplace la tête en évacuant 1.

Exécution étape par étape :
1. deque vide maxlen 3.
2. extend [1,2,3,4] un par un.
3. État final [2,3,4].

Ordre des opérations :
• extend itère l’input dans l’ordre.

Cas d'utilisation courants :
• Buffer derniers messages ; contrôle de débit.

Cas limites :
• maxlen=0 : deque toujours vide si on push.

Considérations de performance :
• O(1) par append avec eviction.

Exemples :
• deque([1,2,3], maxlen=3) puis append(4) même effet final.

Remarques :
• Pour stats scientifiques, rolling en numpy/pandas plus riche.`,

  1736: `La bonne réponse est « [1, 2, 3] » : range(len(a)) est fixé une fois à range(3) ; chaque pop(0) retire le premier élément, la compréhension collecte 1 puis 2 puis 3.

Débutant :
• len(a) n’est pas réévalué à chaque tour de compréhension.
• pop(0) renvoie la tête courante.

Intermédiaire :
• Coût O(n²) sur list car chaque pop(0) décale.
• deque.popleft serait préférable pour files réelles.

Expert :
• Portée de l’expression range : évaluée avant la boucle de compréhension.

Concepts clés :
• Compréhension avec effet de bord ; pop(0) ; longueur figée.

Distinctions clés :
• while a: a.pop(0) avec condition dynamique vs range(len(a)) figé.

Fonctionnement :
• Trois itérations : pop→1, pop→2, pop→3 ; liste finit vide.

Exécution étape par étape :
1. range(3) itère trois fois.
2. États de a : [1,2,3]→[2,3]→[3]→[].
3. Valeurs collectées [1,2,3].

Ordre des opérations :
• Construction du range puis boucle de compréhension.

Cas d'utilisation courants :
• Piège pédagogique ; peu recommandé en production sur grandes listes.

Cas limites :
• Si len mal synchronisé avec mutations autres, surprises possibles.

Considérations de performance :
• Quadratique ici.

Exemples :
• [a.pop() for _ in range(len(a))] dépile fin → ordre inverse.

Remarques :
• Éviter effets de bord dans compréhensions pour code clair.`,

  1737: `La bonne réponse est « [1, 2, 5] » : a[2:4] = [] supprime les éléments aux indices 2 et 3 (valeurs 3 et 4) ; il reste [1, 2, 5].

Débutant :
• stop de la tranche est exclus ; [2:4] couvre indices 2 et 3.
• Affecter [] retire sans insérer.

Intermédiaire :
• Équivalent à del a[2:4].
• 5 à l’indice 4 devient indice 2 après suppression.

Expert :
• Pour suppressions multiples non contiguës, compréhension ou boucle inverse sont plus sûres.

Concepts clés :
• Suppression par tranche vide ; indices ; compaction.

Distinctions clés :
• [2:4] vs [2:5] bornes off-by-one.

Fonctionnement :
• Retrait du segment [3,4] de la liste d’origine.

Exécution étape par étape :
1. [1,2,3,4,5].
2. Indices 2,3 supprimés.
3. [1,2,5].

Ordre des opérations :
• Slice assignment sur liste existante.

Cas d'utilisation courants :
• Retirer un intervalle au milieu d’un historique.

Cas limites :
• Tranche vide ne change rien ; pleine liste → [].

Considérations de performance :
• Décalage O(n) des éléments après la zone.

Exemples :
• a[1:3]=[] sur [0,1,2,3] → [0,3].

Remarques :
• Vérifier toujours stop exclus pour éviter de garder un élément de trop.`,

  1738: `La bonne réponse est « Des éléments peuvent être sautés » (formulation équivalente de l’option correcte en anglais « Elements may be skipped ») : modifier une liste pendant une boucle for peut décaler les éléments et faire sauter des entrées car le compteur interne avance indépendamment.

Débutant :
• for sur liste utilise un index interne qui s’incrémente.
• remove ou pop change la longueur et les positions.

Intermédiaire :
• Pas de RuntimeError systématique ; comportement sournois.
• Copie a[:] pour itérer ou compréhension pour filtrer.

Expert :
• CPython optimise mais le modèle reste « ne pas muter la séquence itérée ».

Concepts clés :
• Itération + mutation ; indices ; éléments manqués.

Distinctions clés :
• Erreur explicite vs silence avec résultat partiel.

Fonctionnement :
• Après suppression, l’élément suivant glisse à l’index courant déjà « passé ».

Exécution étape par étape :
1. Itération atteint un indice i.
2. Suppression décale i+1 vers i.
3. Boucle incrémente i, sautant l’ancien contenu déplacé.

Ordre des opérations :
• Corps de boucle peut s’exécuter avant incrément ; mutation entre-temps.

Cas d'utilisation courants :
• Anti-pattern à montrer en revue ; refactor vers nouvelle liste.

Cas limites :
• Certains motifs semblent « marcher » par chance (ordre des valeurs).

Considérations de performance :
• Copies temporaires souvent moins chères que bugs.

Exemples :
• [x for x in a if x % 2] au lieu de remove en boucle.

Remarques :
• Pour dict, RuntimeError si taille change pendant itération (dict protégé).`,

  1739: `La bonne réponse est « [1, 3, 4] » : la compréhension filtre x != 2 sans muter a ; b est une nouvelle liste.

Débutant :
• if dans une compréhension garde seulement les éléments vrais.
• 2 est exclu.

Intermédiaire :
• a reste [1,2,3,4] ; b reçoit copie filtrée.
• Pour modifier a sur place : a[:] = [...].

Expert :
• Court-circuit identique à boucle for avec append.

Concepts clés :
• Compréhension conditionnelle ; filtrage non destructif.

Distinctions clés :
• remove vs filter comprehension.

Fonctionnement :
• Parcours de a ; test !=2 ; collecte 1,3,4.

Exécution étape par étape :
1. x=1 gardé ; x=2 rejeté ; x=3,4 gardés.
2. b construit en une passe.

Ordre des opérations :
• Évaluation de a puis construction de b.

Cas d'utilisation courants :
• Nettoyage données, pipelines fonctionnels légers.

Cas limites :
• Filtres complexes : extraire prédicat nommé pour lisibilité.

Considérations de performance :
• Une passe O(n) plus cache-friendly que multiples remove.

Exemples :
• [x for x in a if x % 2] pour impairs.

Remarques :
• filter() builtin retourne itérateur ; list(filter(...)) équivalent.`,

  1740: `La bonne réponse est « [0, 1, 2, 3] » : insert(0, 0) place la valeur 0 avant l’ancien indice 0 ; tout se décale.

Débutant :
• insert(index, valeur) insère avant index.
• insert(0, x) préfixe.

Intermédiaire :
• Coût O(n) car décalage de tous les éléments.
• deque.appendleft pour files fréquentes.

Expert :
• insert accepte index jusqu’à len(a) (append logique).

Concepts clés :
• list.insert ; préfixe ; décalage.

Distinctions clés :
• insert(0,0) vs a[0:0]=[0] idiomatique équivalent.

Fonctionnement :
• Ouvre position 0, place 0, décale 1,2,3.

Exécution étape par étape :
1. [1,2,3].
2. insert tête.
3. [0,1,2,3].

Ordre des opérations :
• Appel méthode sur objet liste mutable.

Cas d'utilisation courants :
• FIFO naïf, priorités simples (souvent mauvais choix perf).

Cas limites :
• Index négatif autorisé avec sémantique Python.

Considérations de performance :
• Éviter insert(0) répété massif.

Exemples :
• bisect.insort pour listes triées.

Remarques :
• Préférer deque si profil d’accès est clairement bouts de liste.`,

  1741: `La bonne réponse est « [1, 3, 4, 5] » : set([...]) enlève les doublons puis sorted renvoie une liste triée croissante.

Débutant :
• set ne garde qu’une fois chaque valeur hashable.
• sorted produit une nouvelle liste ordonnée.

Intermédiaire :
• Perte d’ordre d’origine avant tri.
• Pour préserver l’ordre d’apparition : dict.fromkeys.

Expert :
• sorted accepte key et reverse ; ici défaut numérique.

Concepts clés :
• Déduplication ; tri ; composition set→sorted.

Distinctions clés :
• sorted(liste) vs liste.sort() (en place, None).

Fonctionnement :
• Ensemble {1,3,4,5} puis tri → [1,3,4,5].

Exécution étape par étape :
1. Doublon 1 supprimé conceptuellement.
2. sorted matérialise liste croissante.

Ordre des opérations :
• set() puis sorted() sur iterable résultant.

Cas d'utilisation courants :
• Entrées utilisateur uniques triées, clés canoniques.

Cas limites :
• Éléments non comparables entre eux → TypeError au tri.

Considérations de performance :
• set O(n) ; sort O(n log n).

Exemples :
• sorted({3,1,2}) même idée.

Remarques :
• frozenset si besoin d’ensemble immuable hashable ensuite.`,

  1742: `La bonne réponse est « True » : list(reversed(a)) matérialise [3,2,1] ; a[::-1] produit la même liste ; l’égalité structurelle est vraie.

Débutant :
• reversed retourne un itérateur ; list() le consomme en liste.
• [::-1] crée directement une copie inversée.

Intermédiaire :
• Égalité == compare éléments dans l’ordre, pas les types d’itérateurs intermédiaires.
• reversed est paresseux jusqu’à consommation.

Expert :
• Pour très grandes séquences, itérer reversed sans list() économise mémoire.

Concepts clés :
• reversed ; slice inverse ; égalité de listes.

Distinctions clés :
• Itérateur vs liste matérialisée.

Fonctionnement :
• Deux chemins produisent mêmes éléments ordonnés.

Exécution étape par étape :
1. a = [1,2,3].
2. list(reversed(a)) → [3,2,1].
3. a[::-1] → [3,2,1] ; == True.

Ordre des opérations :
• Évaluation des deux côtés puis comparaison.

Cas d'utilisation courants :
• Vérifications symétriques, tests unitaires sur ordre.

Cas limites :
• Objet custom sans __reversed__ peut échouer avec reversed.

Considérations de performance :
• Slice crée liste tout de suite ; reversed seul évite copie si une passe.

Exemples :
• tuple(reversed(a)) comparable à tuple(a[::-1]).

Remarques :
• Ne pas confondre avec a.reverse() qui renvoie None.`,

  1743: `La bonne réponse est « [3, 2, 1] » : reverse() inverse la liste sur place ; la valeur de retour est None mais a est mutée.

Débutant :
• Appeler a.reverse() modifie a directement.
• L’ordre devient dernier → premier.

Intermédiaire :
• Ne pas assigner result = a.reverse() en espérant une liste.
• O(n) temps, O(1) espace auxiliaire typique.

Expert :
• Implémentation in-place par échanges symétriques.

Concepts clés :
• list.reverse ; mutation ; None retourné.

Distinctions clés :
• reverse vs reversed vs [::-1].

Fonctionnement :
• Permute éléments pour refléter ordre inverse.

Exécution étape par étape :
1. [1,2,3].
2. reverse in place.
3. [3,2,1].

Ordre des opérations :
• Méthode sur self liste.

Cas d'utilisation courants :
• Préparer données pour affichage sans allouer nouvelle liste si alias OK.

Cas limites :
• Liste vide : no-op.

Considérations de performance :
• Souvent plus économe que copie+slice sur grosses listes si mutation permise.

Exemples :
• a[::-1] si besoin de garder l’original intact.

Remarques :
• Tri stable utilise d’autres algorithmes ; reverse n’est pas un tri.`,

  1744: `La bonne réponse est « True » : a.reverse() renvoie None ; l’expression None is None est vraie (même singleton).

Débutant :
• Méthodes in-place comme reverse, sort, append retournent None.
• is teste identité avec None.

Intermédiaire :
• a est néanmoins devenu [3,2,1] après l’appel, mais la valeur de l’expression est None.
• Pattern volontaire pour éviter chaînages confus.

Expert :
• PEP conventions sur API mutatrices retournant None.

Concepts clés :
• None singleton ; reverse retour ; is.

Distinctions clés :
• (a.reverse() or a) idiome parfois vu mais peu lisible.

Fonctionnement :
• Appel reverse → None ; comparaison is None → True.

Exécution étape par étape :
1. reverse exécuté, liste inversée.
2. Résultat d’appel None.
3. None is None True.

Ordre des opérations :
• Appel puis is.

Cas d'utilisation courants :
• Vérifier qu’on n’a pas oublié que reverse ne renvoie pas de liste.

Cas limites :
• Pas d’ambiguïté ici ; seulement booléen.

Considérations de performance :
• Négligeable.

Exemples :
• sorted(a) vs a.sort() même convention de retour.

Remarques :
• Préférez tests explicites sur a plutôt que sur valeur de reverse().`,

  1745: `La bonne réponse est « [0, 1, 2, 3, 4] » : extend parcourt range(5) et ajoute chaque entier ; ce n’est pas append du range entier.

Débutant :
• extend déroule l’itérable élément par élément.
• range(5) produit 0..4.

Intermédiaire :
• append(range(5)) mettrait un seul objet range dans la liste.
• extend accepte tout iterable.

Expert :
• extend interne peut prédimensionner si taille connue (optimisation impl).

Concepts clés :
• extend vs append ; range ; itération.

Distinctions clés :
• a + list(range) crée nouvelle liste ; extend mute.

Fonctionnement :
• Pour chaque i dans range(5), append i à a.

Exécution étape par étape :
1. a=[].
2. extend itère 0,1,2,3,4.
3. Liste finale croissante.

Ordre des opérations :
• Création range puis extend.

Cas d'utilisation courants :
• Construire listes depuis générateurs ou fichiers ligne par ligne.

Cas limites :
• extend sur string déploie des caractères, pas une chaîne entière.

Considérations de performance :
• Souvent meilleur que append répété en Python pur grâce au code C.

Exemples :
• a.extend("ab") → ['a','b'].

Remarques :
• itertools.chain pour enchaîner sans concaténations intermédiaires.`,

  1746: `La bonne réponse est « [0, 3, 6, 9] » : sur dix éléments 0..9, [::3] sélectionne indices 0,3,6,9.

Débutant :
• Pas 3 saute deux éléments entre chaque pris.
• Dernier indice 9 < 10 donc inclus.

Intermédiaire :
• Équivalent à slice(None, None, 3) après matérialisation de la liste.
• len 10 ⇒ indices max 9.

Expert :
• Généralisation : [::k] sur range n sans list pour économiser mémoire si itération suffit.

Concepts clés :
• Slice avec pas ; liste depuis range.

Distinctions clés :
• [1::3] décalerait le départ aux impairs pour cette liste.

Fonctionnement :
• Extraction des éléments aux positions multiples de 3.

Exécution étape par étape :
1. list(range(10)) longueur 10.
2. Indices 0,3,6,9.
3. Valeurs identiques aux indices ici.

Ordre des opérations :
• range, list, puis slice.

Cas d'utilisation courants :
• Sous-échantillonnage, grilles, stride dans traitement signal.

Cas limites :
• Liste plus courte : peut se terminer avant dernier multiple.

Considérations de performance :
• Crée nouvelle liste références partagées (entiers petits).

Exemples :
• "abcdefghij"[::3] → 'adgj'.

Remarques :
• numpy slicing offre vues ; Python list copie.`,

  1747: `La bonne réponse est « 1 » : seul l’élément [2,3] est une instance de list ; 1 est int, (4,5) est tuple ; sum des 1 vaut 1.

Débutant :
• isinstance(x, list) teste le type (sous-classes incluses pour autres types, pas ici).
• Générateur dans sum compte les True.

Intermédiaire :
• sum(1 for ...) évite list matérielle intermédiaire complète.
• isinstance accepte tuple de types pour unions.

Expert :
• ABC collections.abc pour tests protocolaires vs type concret.

Concepts clés :
• isinstance ; générateur ; comptage booléen.

Distinctions clés :
• type(x) is list vs isinstance stricte exacte.

Fonctionnement :
• Un seul x satisfait le test sur trois éléments.

Exécution étape par étape :
1. x=1 False.
2. x=[2,3] True → +1.
3. x=(4,5) False → sum=1.

Ordre des opérations :
• sum consomme le générateur gauche à droite.

Cas d'utilisation courants :
• Valider structures JSON hétérogènes.

Cas limites :
• list sous-classes rares comptent comme list avec isinstance.

Considérations de performance :
• Une passe O(n) sans liste temporaire des flags.

Exemples :
• sum(isinstance(x, (list,tuple)) for x in a) élargit le critère.

Remarques :
• Ne confondez pas len avec sum de 1 ; ici effectif pour filtrage.`,

  1748: `La bonne réponse est « [1, 2, 3, 4, 5] » : la compréhension imbriquée parcourt chaque sous-liste puis chaque x, aplatissant un niveau dans l’ordre gauche-droite.

Débutant :
• Lire les for de gauche à droite comme des boucles externes puis internes.
• Résultat concatène tous les éléments feuilles.

Intermédiaire :
• Équivalent à double boucle for avec append.
• Ne flatten pas au-delà d’un niveau.

Expert :
• itertools.chain.from_iterable pour lisibilité sur grandes données.

Concepts clés :
• Compréhension imbriquée ; aplatissement d’un niveau ; ordre.

Distinctions clés :
• [[...]] compréhension sans inner for garderait sous-listes.

Fonctionnement :
• Parcours [1,2], puis [3,4], puis [5] ; collecte linéaire.

Exécution étape par étape :
1. sublist [1,2] → 1,2.
2. [3,4] → 3,4.
3. [5] → 5.

Ordre des opérations :
• Évaluation de la liste de sous-listes puis double boucle implicite.

Cas d'utilisation courants :
• Aplatir entrées groupées, batches.

Cas limites :
• Sous-listes vides ne contribuent rien mais conservent ordre.

Considérations de performance :
• Linéaire en nombre total d’éléments feuilles.

Exemples :
• sum(list_of_lists, []) déconseillé O(n²) ; préférer chain.

Remarques :
• Récursion nécessaire pour arbres profonds irréguliers.`,

  1749: `La bonne réponse est « True » : en Python, bool est une sous-classe de int ; isinstance(True, int) est vrai, donc tous les éléments satisfont la condition dans all(...).

Débutant :
• True et False sont aussi des ints numériques (1 et 0) dans les contextes arithmétiques.
• all exige que chaque booléen itéré soit truthy.

Intermédiaire :
• isinstance(True, bool) aussi vrai ; hiérarchie bool ⊂ int.
• Surprise fréquente lors de validations de type strict.

Expert :
• Si vous voulez exclure les booléens, utilisez type(x) is int.

Concepts clés :
• bool sous-classe int ; isinstance ; all.

Distinctions clés :
• isinstance vs type exact ; PEP 285.

Fonctionnement :
• Tests sur 1, True, 3 → trois True ; all → True.

Exécution étape par étape :
1. Générateur trois tests isinstance True.
2. all court-circuite seulement sur False ; ici jamais.

Ordre des opérations :
• all consomme le générateur jusqu’à fin ou premier False.

Cas d'utilisation courants :
• Validation hétérogène à éviter si vous devez rejeter les booléens.

Cas limites :
• False est aussi int subclass mais valeur 0 ; isinstance toujours True.

Considérations de performance :
• Court-circuit possible sur longues séquences si premier False tôt.

Exemples :
• True + 1 == 2 démonstration historique.

Remarques :
• En JSON, true n’est pas un int ; seulement modèle Python.`,

  1750: `La bonne réponse est « [4, 5, 6] » : a[:] = [4,5,6] remplace le contenu de l’objet liste existant ; b est alias de a, donc b voit aussi [4,5,6] sans changer l’identité de l’objet liste.

Débutant :
• b = a partage l’objet ; pas une copie.
• Affectation sur tranche entière remplace tous les éléments mais garde le même conteneur.

Intermédiaire :
• Diffère de a = [4,5,6] qui rebind a seul et laisserait b sur l’ancienne liste.
• id(a) stable avec a[:] = ....

Expert :
• Utile pour fonctions qui doivent remplir une liste passée sans casser références externes.

Concepts clés :
• Alias ; slice assign full ; mutation in-place du contenu.

Distinctions clés :
• a[:] = seq vs a = seq pour alias.

Fonctionnement :
• Remplace longueur et éléments en un appel C optimisé.

Exécution étape par étape :
1. a et b → [1,2,3] même id.
2. a[:] = [4,5,6] remplace contenu.
3. b affiche [4,5,6] ; a is b True.

Ordre des opérations :
• Création liste droite puis assignation slice sur self.

Cas d'utilisation courants :
• Réinitialiser buffer partagé, pattern observer léger.

Cas limites :
• Si d’autres threads lisent sans lock, risques concurrents.

Considérations de performance :
• Souvent meilleur que clear + extend multiples.

Exemples :
• a[:] = [] vide sans rebinder le nom a hors alias.

Remarques :
• Toujours clarifier dans APIs si mutation in-place est attendue.`,
};
