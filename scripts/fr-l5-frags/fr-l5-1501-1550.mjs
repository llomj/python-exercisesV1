/** Level 5 FR 1501–1550 — listes littérales, indices, tranches, concaténation, méthodes. Aligné sur les 50 premiers motifs de level5.ts. */
export default {
  1501: `Une liste

Débutant :
• L’expression [1, 2, 3] est une liste : trois entiers dans l’ordre.
• Les crochets [] délimitent le littéral de liste.

Intermédiaire :
• list est un type séquence ordonnée et mutable.
• Les éléments peuvent être de types différents ; ici ce sont des int.

Expert :
• Le littéral construit un objet list en mémoire ; chaque élément est une référence (ici des int immuables).

Concepts clés :
• Littéral de liste, ordre, mutabilité, type list.

Distinctions clés :
• Liste [1, 2, 3] vs tuple (1, 2, 3) vs ensemble {1, 2, 3} vs dict {clé: valeur}.

Fonctionnement :
• Python analyse les crochets, crée une liste et y place 1, puis 2, puis 3.

Exécution étape par étape :
1. Évaluation du littéral : création de la liste.
2. Remplissage gauche à droite avec les valeurs séparées par des virgules.
3. L’expression a pour valeur cet objet list.

Ordre des opérations :
• Pas d’appel de fonction : construction directe du littéral.

Cas d'utilisation courants :
• Accumuler des données ordonnées, représenter une séquence modifiable.

Cas limites :
• [] est une liste vide ; une virgule finale est autorisée : [1, 2, 3,].

Considérations de performance :
• Petite liste : coût négligeable ; éviter de dupliquer de très grandes listes sans besoin.

Exemples :
• type([1, 2, 3]) → <class 'list'>
• [1, 2, 3][0] → 1

Remarques :
• « Liste » est la bonne réponse par rapport aux autres types proposés.`,

  1502: `[1, 2, 3]

Débutant :
• list([1, 2, 3]) fabrique une nouvelle liste contenant 1, 2 et 3.
• On obtient le même contenu que la liste passée en argument.

Intermédiaire :
• list(itérable) parcourt l’itérable et construit une list ; ici l’entrée est déjà une liste.

Expert :
• C’est une copie superficielle : nouvel objet list, mêmes éléments (références copiées une couche).

Concepts clés :
• Constructeur list(), conversion d’itérable, copie superficielle.

Distinctions clés :
• list([1,2,3]) vs [1,2,3] seul (nouvel objet) ; list("ab") → ['a','b'].

Fonctionnement :
• Python appelle list.__new__ puis remplit depuis l’itérable [1, 2, 3].

Exécution étape par étape :
1. L’argument [1, 2, 3] est évalué (liste existante).
2. list() itère : 1, 2, 3 ajoutés à la nouvelle liste.
3. Retour : [1, 2, 3].

Ordre des opérations :
• D’abord l’argument, puis la construction de la nouvelle liste.

Cas d'utilisation courants :
• Convertir tuple, chaîne, range en list ; dupliquer une liste en surface.

Cas limites :
• list() sans argument → [] ; list([]) → [] (nouvelle liste vide).

Considérations de performance :
• Copie O(n) en temps ; pour gros volumes, évaluer si une vue ou itérateur suffit.

Exemples :
• list((1, 2, 3)) → [1, 2, 3]
• list(range(3)) → [0, 1, 2]

Remarques :
• La réponse affichée est le contenu [1, 2, 3], pas le mot « liste ».`,

  1503: `Liste vide

Débutant :
• [] est une liste sans éléments, de longueur 0.
• Ce n’est pas une erreur : c’est un objet list valide.

Intermédiaire :
• bool([]) est False (falsy), mais len([]) vaut 0, pas « absence d’objet ».

Expert :
• On peut muter tout de suite : [].append(1) rend la liste [1] sur la même instance si on la garde en variable.

Concepts clés :
• Littéral de liste vide, longueur nulle, vérité en booléen.

Distinctions clés :
• [] vs () (tuple vide) vs set() (ensemble vide) vs {} (dict vide en littéral).

Fonctionnement :
• Création d’une liste sans slots d’éléments initiaux.

Exécution étape par étape :
1. Construction du conteneur list vide.
2. Valeur de l’expression : [].
3. Prêt pour append, extend, etc.

Ordre des opérations :
• Littéral immédiat, pas d’appel.

Cas d'utilisation courants :
• Initialiser result = [] avant une boucle, représenter « aucun élément ».

Cas limites :
• Accéder à [][0] lève IndexError ; la liste vide elle-même est permise.

Considérations de performance :
• Réutiliser une liste et .clear() vs recréer [] selon le contexte.

Exemples :
• len([]) → 0
• [] + [1] → [1]

Remarques :
• « Liste vide » correspond à l’option correcte du QCM.`,

  1504: `[]

Débutant :
• list() sans argument crée une liste vide, comme le littéral [].
• Le résultat s’affiche souvent comme [].

Intermédiaire :
• list() est le constructeur du type list ; zéro argument ⇒ pas d’itération initiale.

Expert :
• list() == [] est True en valeurs égales ; ce sont en général deux objets distincts : list() is [] est False.

Concepts clés :
• Constructeur sans argument, liste vide, équivalence ==.

Distinctions clés :
• list() vs [] (style) ; list(None) lève TypeError.

Fonctionnement :
• Appel du constructeur builtin list avec 0 paramètre.

Exécution étape par étape :
1. Résolution du nom list.
2. Appel sans iterable.
3. Retour d’une nouvelle liste vide.

Ordre des opérations :
• Appel de fonction simple.

Cas d'utilisation courants :
• Symétrie avec d’autres constructeurs (dict(), set()), clarté dans du code générique.

Cas limites :
• list(0) est invalide : un iterable est requis si on passe un argument.

Considérations de performance :
• Identique à [] pour la création vide.

Exemples :
• list() → []
• type(list()) → <class 'list'>

Remarques :
• La bonne réponse est la forme [] parmi les choix proposés.`,

  1505: `1

Débutant :
• [1, 2, 3][0] lit le premier élément : l’indice 0.
• La valeur est 1.

Intermédiaire :
• L’indexation utilise des entiers ; 0 est toujours le premier élément en Python.

Expert :
• a[i] appelle __getitem__ sur la liste ; ici i=0.

Concepts clés :
• Indexation base zéro, accès par [].

Distinctions clés :
• [0] premier élément vs [1] deuxième ; ne pas confondre avec la longueur.

Fonctionnement :
• La liste est évaluée, puis l’indice 0 récupère la référence à l’int 1.

Exécution étape par étape :
1. Construire ou référencer [1, 2, 3].
2. Appliquer __getitem__(0).
3. Retourner 1.

Ordre des opérations :
• Sous-expression liste, puis crochet.

Cas d'utilisation courants :
• Tête de liste, premier caractère d’une représentation, accès direct O(1) amorti.

Cas limites :
• Indice hors plage : IndexError ; liste vide : tout indice positif invalide.

Considérations de performance :
• Accès par indice en O(1) pour list CPython.

Exemples :
• ['a','b'][0] → 'a'
• [1, 2, 3][-3] → 1

Remarques :
• Réponse attendue : la chaîne "1" côté QCM, soit l’entier 1 dans le code.`,

  1506: `2

Débutant :
• À l’indice 1 se trouve le deuxième élément de [1, 2, 3], soit 2.
• Les indices commencent à 0.

Intermédiaire :
• Correspondance : 0→1er, 1→2e, 2→3e.

Expert :
• Cohérent avec str, tuple, bytes : mêmes règles d’indexation.

Concepts clés :
• Deuxième élément, index 1.

Distinctions clés :
• [1] vs 1 (valeur scalaire) ; ne pas confondre l’indice avec la valeur affichée par hasard ici.

Fonctionnement :
• __getitem__(1) sur la liste renvoie l’élément à la position 1.

Exécution étape par étape :
1. Liste [1, 2, 3] prête.
2. Indice 1 valide (0 ≤ 1 < len).
3. Valeur 2 retournée.

Ordre des opérations :
• Évaluation liste puis index.

Cas d'utilisation courants :
• Accéder au « second » champ d’un enregistrement stocké en liste.

Cas limites :
• Sur liste de longueur 1, [1] lève IndexError.

Considérations de performance :
• O(1) pour l’accès.

Exemples :
• [10, 20, 30][1] → 20

Remarques :
• La question teste explicitement l’index 1, pas -1.`,

  1507: `3

Débutant :
• L’indice -1 désigne le dernier élément : ici 3.
• Les indices négatifs comptent depuis la fin.

Intermédiaire :
• -1 → dernier, -2 → avant-dernier, etc., sans calculer len.

Expert :
• Formule : pour longueur n, -1 correspond à l’indice n-1.

Concepts clés :
• Indexation négative, dernier élément.

Distinctions clés :
• [-1] dernier vs [0] premier ; [len-1] équivalent à [-1] si len > 0.

Fonctionnement :
• Python traduit l’indice négatif en indice positif avant accès.

Exécution étape par étape :
1. Liste [1, 2, 3] de longueur 3.
2. -1 mappe à l’indice 2.
3. Valeur 3.

Ordre des opérations :
• Normalisation de l’indice puis __getitem__.

Cas d'utilisation courants :
• Dernier élément d’historique, dernier token, queue LIFO simple en lecture.

Cas limites :
• Liste vide : [-1] lève IndexError.

Considérations de performance :
• Même coût asymptotique qu’un accès positif.

Exemples :
• [1, 2, 3][-2] → 2

Remarques :
• Réponse 3, dernier élément.`,

  1508: `2

Débutant :
• L’indice -2 pointe l’avant-dernier élément de [1, 2, 3], soit 2.
• -1 serait 3.

Intermédiaire :
• Parcours mental depuis la fin : positions -3, -2, -1 pour 1, 2, 3.

Expert :
• Avec n=3, -2 ≡ indice 1 (n-2).

Concepts clés :
• Deuxième en partant de la fin, index -2.

Distinctions clés :
• [-2] vs [2] (troisième depuis le début, ici aussi 3).

Fonctionnement :
• Conversion de -2 en indice 1 puis accès.

Exécution étape par étape :
1. Longueur 3.
2. -2 → indice 1.
3. Élément 2.

Ordre des opérations :
• Liste puis crochet avec indice négatif.

Cas d'utilisation courants :
• Pénultième valeur, tendance sur deux derniers points.

Cas limites :
• Liste d’un seul élément : -2 hors plage → IndexError.

Considérations de performance :
• O(1).

Exemples :
• [1, 2, 3, 4][-2] → 3

Remarques :
• Ne pas confondre valeur affichée (2) et indice utilisé (-2).`,

  1509: `3

Débutant :
• len([1, 2, 3]) compte les éléments : il y en a trois.
• Résultat : l’entier 3.

Intermédiaire :
• len fonctionne sur tout objet à taille finie (séquences, collections).

Expert :
• len appelle __len__ ; pour list, c’est la longueur stockée.

Concepts clés :
• Longueur de liste, builtin len.

Distinctions clés :
• len vs index max (len-1) ; len ne regarde pas la « grandeur » des nombres, seulement le nombre d’emplacements.

Fonctionnement :
• len reçoit la liste et retourne le nombre d’éléments.

Exécution étape par étape :
1. Évaluer [1, 2, 3].
2. Appeler len(liste).
3. Retour 3.

Ordre des opérations :
• Littéral puis appel de fonction.

Cas d'utilisation courants :
• Boucles bornées, validations, décisions si la liste est vide.

Cas limites :
• len([]) == 0 ; itérables infinis (ex. certains générateurs) : len peut échouer.

Considérations de performance :
• len sur list est O(1) en CPython.

Exemples :
• len([1]) → 1
• len([[1,2],[3]]) → 2 (deux éléments, pas « profondeur »).

Remarques :
• Réponse « 3 », pas la liste elle-même.`,

  1510: `0

Débutant :
• len([]) vaut 0 car aucun élément n’est présent.
• Liste vide ≠ None.

Intermédiaire :
• if not lst: est idiomatique pour « vide » ; len(lst)==0 est explicite.

Expert :
• [] est toujours un objet ; id([]) existe, seule la cardinalité est 0.

Concepts clés :
• Cardinalité zéro, liste vide.

Distinctions clés :
• len([]) vs bool([]) (False) vs None (pas une liste).

Fonctionnement :
• len sur liste vide retourne 0 immédiatement.

Exécution étape par étape :
1. Construire [].
2. len compte 0 élément.
3. Retour 0.

Ordre des opérations :
• Fonction len sur littéral vide.

Cas d'utilisation courants :
• Garde-fous avant pop, file d’attente, pipelines sans données.

Cas limites :
• len(None) lève TypeError — ce n’est pas une liste.

Considérations de performance :
• O(1).

Exemples :
• len(list()) → 0

Remarques :
• Choisir 0 parmi les entiers proposés.`,

  1511: `[2, 3]

Débutant :
• La tranche [1:3] prend les indices 1 et 2, pas le 3 : borne de fin exclue.
• Éléments : 2 puis 3 → [2, 3].

Intermédiaire :
• Intervalle semi-ouvert [start, stop) en indices.

Expert :
• Nouvelle liste ; la sous-liste est une copie superficielle des éléments référencés.

Concepts clés :
• Découpage [start:stop], stop exclus.

Distinctions clés :
• [1:3] vs indexation simple [1] (un seul élément, pas une liste).

Fonctionnement :
• Python construit une nouvelle list en copiant les références aux indices autorisés.

Exécution étape par étape :
1. Liste base [1, 2, 3, 4].
2. Plage d’indices 1 inclus à 3 exclus → indices 1,2.
3. [2, 3] créée.

Ordre des opérations :
• Littéral puis application de slice.

Cas d'utilisation courants :
• Extraire un segment, fenêtre sur une série, sauter l’élément d’indice 0.

Cas limites :
• Si stop ≤ start, tranche vide ; bornes hors limites sont clippées (pas d’erreur).

Considérations de performance :
• Coût proportionnel à la longueur de la tranche.

Exemples :
• [1, 2, 3, 4][0:2] → [1, 2]

Remarques :
• Ne pas inclure l’indice 3 (valeur 4) dans ce découpage.`,

  1512: `[1, 2]

Débutant :
• [:2] signifie « du début jusqu’à l’indice 2 non compris » : indices 0 et 1.
• Valeurs 1 et 2.

Intermédiaire :
• Start omis ⇒ 0 ; stop omis en fin ⇒ len (ici stop explicite 2).

Expert :
• Idiom [:n] pour les n premiers éléments.

Concepts clés :
• Start implicite 0, préfixe de longueur n.

Distinctions clés :
• [:2] vs [2:] (suffixe à partir de l’indice 2).

Fonctionnement :
• Slice avec défauts start=0, stop=2, step=1.

Exécution étape par étape :
1. Liste [1, 2, 3, 4].
2. Indices 0,1 sélectionnés.
3. [1, 2] produite.

Ordre des opérations :
• Application directe des défauts de slice.

Cas d'utilisation courants :
• Aperçu des k premiers résultats, tête de fichier tokenisé.

Cas limites :
• [:0] → [] ; [:100] sur courte liste → toute la liste.

Considérations de performance :
• Copie O(k) pour k éléments pris.

Exemples :
• [1, 2, 3][:2] → [1, 2]

Remarques :
• Réponse [1, 2], pas [2, 3].`,

  1513: `[3, 4]

Débutant :
• [2:] commence à l’indice 2 inclus et va jusqu’à la fin : éléments 3 et 4.
• Résultat [3, 4].

Intermédiaire :
• Stop omis ⇒ jusqu’à len ; utile pour « reste ».

Expert :
• Sur liste de longueur n, [n:] est [] ; [0:] est copie superficielle complète.

Concepts clés :
• Suffixe, start explicite, stop implicite fin.

Distinctions clés :
• [2:] vs [:2] (préfixe) ; [2:len] équivalent explicite.

Fonctionnement :
• Slice start=2, stop=len, step=1.

Exécution étape par étape :
1. Indices valides 0..3.
2. À partir de 2 : valeurs aux indices 2 et 3.
3. [3, 4].

Ordre des opérations :
• Slice après création de la liste.

Cas d'utilisation courants :
• Ignorer un en-tête fixe, queue après split.

Cas limites :
• [10:] sur cette liste → [] (clip sans erreur).

Considérations de performance :
• Linéaire en nombre d’éléments copiés.

Exemples :
• [1, 2, 3, 4][1:] → [2, 3, 4]

Remarques :
• Attention : l’indice de départ est 2, pas « 2 éléments ».`,

  1514: `[1, 3]

Débutant :
• [::2] parcourt toute la liste avec un pas de 2 : indices 0 et 2.
• Éléments 1 et 3.

Intermédiaire :
• step=2 signifie « un sur deux » en partant du début (avec start/stop par défaut).

Expert :
• [::k] généralise l’échantillonnage régulier ; [::1] est copie identique (nouvelle liste).

Concepts clés :
• Pas positif, éléments espacés.

Distinctions clés :
• [::2] vs [1::2] (éléments d’indices impairs si len suffisante).

Fonctionnement :
• Itération sur indices 0, 2, 4, … tant que < len.

Exécution étape par étape :
1. Liste [1, 2, 3, 4], len=4.
2. Indices 0,2.
3. [1, 3].

Ordre des opérations :
• Slice complète avec step.

Cas d'utilisation courants :
• Séparer positions paires/impaires, sous-échantillon.

Cas limites :
• [::0] lève ValueError ; pas négatif plus tard ([::-1]).

Considérations de performance :
• O(n) pour parcourir même si peu d’éléments retenus.

Exemples :
• [0,1,2,3,4][::2] → [0, 2, 4]

Remarques :
• Ce n’est ni [2,4] ni [1,2].`,

  1515: `[4, 3, 2, 1]

Débutant :
• [::-1] inverse l’ordre des éléments : dernier devient premier.
• [1, 2, 3, 4] → [4, 3, 2, 1].

Intermédiaire :
• step négatif parcourt de la fin vers le début ; start/stop omis couvrent toute la séquence.

Expert :
• Nouvelle liste ; l’originale reste inchangée ; reversed() donne un itérateur sans copie immédiate.

Concepts clés :
• Inversion par slice, pas -1.

Distinctions clés :
• lst[::-1] vs lst.reverse() (en place, None) vs reversed(lst).

Fonctionnement :
• Python construit une liste en lisant les indices dans l’ordre imposé par step -1.

Exécution étape par étape :
1. Indices parcourus 3,2,1,0.
2. Éléments 4,3,2,1 collectés.
3. Nouvelle liste retournée.

Ordre des opérations :
• Slice avec step négatif après liste.

Cas d'utilisation courants :
• Palindrome check, pile affichée du haut vers le bas, lecture inverse.

Cas limites :
• [] inversé reste [].

Considérations de performance :
• O(n) temps et espace pour la nouvelle liste.

Exemples :
• [1, 2, 3][::-1] → [3, 2, 1]

Remarques :
• Réponse exacte [4, 3, 2, 1].`,

  1516: `[2, 3]

Débutant :
• [1:-1] enlève le premier (indice 0) et le dernier (indice -1 exclu comme stop).
• Il reste les indices 1 et 2 : 2 et 3.

Intermédiaire :
• Start=1 inclus, stop=-1 exclus ⇒ s’arrête avant le dernier élément.

Expert :
• Sur liste courte [1,2], [1:-1] est [] (stop avant start après normalisation).

Concepts clés :
• « Milieu », tranche avec borne négative en stop.

Distinctions clés :
• [1:-1] vs [1:len-1] équivalent si len≥2 ; différent de [1:] qui garde le dernier.

Fonctionnement :
• Normalisation de -1 en len-1 pour stop.

Exécution étape par étape :
1. len=4, stop -1 → indice 3 exclus.
2. Indices inclus de 1 à 2.
3. [2, 3].

Ordre des opérations :
• Slice mixte signes.

Cas d'utilisation courants :
• Retirer première et dernière colonne d’une ligne splittée, quotes.

Cas limites :
• Liste d’un élément : souvent tranche vide avec ce motif.

Considérations de performance :
• Linéaire en taille de la tranche.

Exemples :
• [1, 2, 3, 4, 5][1:-1] → [2, 3, 4]

Remarques :
• Le 4 (dernier) est exclu.`,

  1517: `[1, 2, 3]

Débutant :
• [:] avec les deux bornes omises copie toute la liste dans une nouvelle liste.
• Contenu identique [1, 2, 3].

Intermédiaire :
• C’est une copie superficielle : un seul niveau ; sous-listes partagées si présentes.

Expert :
• a is a[:] est False (nouveaux objets) ; a == a[:] est True.

Concepts clés :
• Copie par slice [:], clone de surface.

Distinctions clés :
• [:] vs .copy() vs list(a) — tous shallow copy pour list simple.

Fonctionnement :
• start défaut 0, stop défaut len, step 1.

Exécution étape par étape :
1. Parcourir tous les indices.
2. Construire nouvelle liste avec mêmes références d’éléments.
3. Retourner la copie.

Ordre des opérations :
• Slice pleine.

Cas d'utilisation courants :
• Éviter de muter l’original lors de tris locaux, snapshots légers.

Cas limites :
• Pour listes imbriquées, mutation interne visible depuis les deux côtés.

Considérations de performance :
• O(n) ; pour très grandes listes, envisager besoin réel de copie.

Exemples :
• a = [1,2,3]; b = a[:]; a.append(4) → b inchangé

Remarques :
• Réponse [1, 2, 3] mais nouvel objet list.`,

  1518: `[2, 4]

Débutant :
• [1:4:2] commence à l’indice 1, s’arrête avant 4, pas 2 : indices 1 puis 3.
• Valeurs 2 et 4.

Intermédiaire :
• Combine borne supérieure exclusive et saut.

Expert :
• Généralisation : tout slice [start:stop:step] filtre une progression arithmétique d’indices.

Concepts clés :
• Tranche à trois paramètres, pas explicite.

Distinctions clés :
• [1:4:2] (indices 1 et 3) vs [1:4] (indices 1, 2 et 3 → [2, 3, 4] sur la même liste de départ).

Fonctionnement :
• Indices candidats dans [1,4) : 1,2,3 ; avec step 2 depuis 1 : 1,3.

Exécution étape par étape :
1. start=1, stop=4, step=2.
2. Séquence d’indices 1,3.
3. Éléments 2,4.

Ordre des opérations :
• Normalisation puis itération par pas.

Cas d'utilisation courants :
• Sous-échantillonner une plage intérieure d’une liste.

Cas limites :
• Si le pas ne « tombe » sur aucun indice valide, liste vide.

Considérations de performance :
• O(n) sur la fenêtre parcourue.

Exemples :
• [1, 2, 3, 4, 5][0:5:2] → [1, 3, 5]

Remarques :
• Réponse [2, 4], pas [1, 3].`,

  1519: `[]

Débutant :
• [0:0] a start == stop : intervalle vide d’indices, donc liste vide.
• Aucun élément n’est inclus car stop est exclus.

Intermédiaire :
• Utile en assignation par slice pour insertion sans remplacement : lst[i:i] = [x].

Expert :
• Pour tout i, [i:i] est [] en lecture ; en écriture, point d’insertion.

Concepts clés :
• Tranche vide, borne égale.

Distinctions clés :
• [0:0] vs [0:1] (premier élément seul).

Fonctionnement :
• Plage d’indices [0,0) vide.

Exécution étape par étape :
1. Aucun indice à collecter.
2. Retour [].

Ordre des opérations :
• Slice immédiat.

Cas d'utilisation courants :
• Tests, insertions, démonstration de stop exclus.

Cas limites :
• [3:3] sur [1,2,3] est aussi [].

Considérations de performance :
• Coût minimal.

Exemples :
• [1, 2, 3][2:2] → []

Remarques :
• Ce n’est pas une erreur : slice « vide » est valide.`,

  1520: `[]

Débutant :
• Avec [1, 2, 3], les indices valides sont 0–2 ; [5:10] commence après la fin.
• Python ne lève pas d’erreur : la tranche est vide.

Intermédiaire :
• Clipping : start et stop sont ramenés dans [0, len].

Expert :
• Diffère de l’indexation simple lst[5] qui, elle, lève IndexError.

Concepts clés :
• Slice tolérant, liste vide si fenêtre hors contenu utile.

Distinctions clés :
• Tranche hors bornes vs index hors bornes.

Fonctionnement :
• Fenêtre effective devient vide après clip.

Exécution étape par étape :
1. len=3, start demandé 5 ≥ len → clip.
2. Aucun élément sélectionné.
3. [].

Ordre des opérations :
• Slice avec normalisation des bornes.

Cas d'utilisation courants :
• Découpages robustes sans if préalable sur len.

Cas limites :
• [-100:100] sur petite liste renvoie toute la liste clippée.

Considérations de performance :
• Toujours O(k) sur la taille effective, ici k=0.

Exemples :
• [1, 2, 3][3:5] → []

Remarques :
• Réponse [] et non Error.`,

  1521: `[1, 2, 3, 4]

Débutant :
• Le + entre deux listes les concatène dans l’ordre : [1, 2] puis [3, 4].
• Nouvelle liste ; les opérandes ne sont pas modifiés.

Intermédiaire :
• + exige deux listes (ou types compatibles via surcharge) ; ici list + list.

Expert :
• Implémentation __add__ : allocation d’une nouvelle séquence de taille len(a)+len(b).

Concepts clés :
• Concaténation, nouvelle liste.

Distinctions clés :
• + vs extend (en place, None) vs append (un seul objet).

Fonctionnement :
• Parcours de la première liste, puis de la seconde, copie des références.

Exécution étape par étape :
1. Évaluer [1, 2] et [3, 4].
2. Construire nouvelle liste longueur 4.
3. Retour [1, 2, 3, 4].

Ordre des opérations :
• Opérande gauche puis droite, puis addition.

Cas d'utilisation courants :
• Fusionner résultats, construire chemins symboliques simples en morceaux.

Cas limites :
• [] + [1] → [1] ; grand volume ⇒ coût mémoire.

Considérations de performance :
• O(n+m) temps et espace ; pour accumulations massives, préférer extend répété ou list comprehension.

Exemples :
• ['a'] + ['b','c'] → ['a','b','c']

Remarques :
• Les originaux [1,2] et [3,4] restent inchangés s’ils sont liés à des variables.`,

  1522: `[1, 2, 1, 2, 1, 2]

Débutant :
• [1, 2] * 3 répète la séquence entière trois fois d’affilée.
• Ordre : [1,2], encore [1,2], encore [1,2].

Intermédiaire :
• Le multiplicateur doit être entier ; * 0 donne [].

Expert :
• Équivalent à [1,2]+[1,2]+[1,2] mais optimisé dans l’interpréteur.

Concepts clés :
• Répétition de liste, opérateur *.

Distinctions clés :
• [1,2]*3 vs [1,2,3] (ce n’est pas « étendre avec 3 »).

Fonctionnement :
• Création d’une nouvelle liste en dupliquant le motif.

Exécution étape par étape :
1. Motif longueur 2, facteur 3.
2. Copier le motif trois fois.
3. Liste de 6 éléments.

Ordre des opérations :
• Liste puis multiplication scalaire entière.

Cas d'utilisation courants :
• Pad initial, grilles, placeholders [0]*n.

Cas limites :
• Attention avec objets mutables partagés : [[0]]*3 partage trois fois la même sous-liste.

Considérations de performance :
• Linéaire en len(motif)*k ; piège mémoire si k énorme.

Exemples :
• [0]*5 → [0, 0, 0, 0, 0]

Remarques :
• Ce n’est pas [3,6] (produit terme à terme inexistant pour list*int autrement).`,

  1523: `[]

Débutant :
• [1] * 0 répète zéro fois : aucun élément, donc [].
• Comme multiplier par zéro « vide » le motif.

Intermédiaire :
• Fonctionne pour tout motif : ['a']*0 → [].

Expert :
• k négatif lève ValueError pour séquences.

Concepts clés :
• Répétition nulle, liste vide.

Distinctions clés :
• *0 vs + [] vs clear() sur variable existante.

Fonctionnement :
• Boucle interne zéro itération de collage.

Exécution étape par étape :
1. Motif [1], facteur 0.
2. Aucune copie.
3. [].

Ordre des opérations :
• binaire liste * int.

Cas d'utilisation courants :
• Réinitialiser visuellement un buffer, tests.

Cas limites :
• * -1 invalide.

Considérations de performance :
• Instantané.

Exemples :
• [1,2]*0 → []

Remarques :
• Réponse [] et non [1].`,

  1524: `Vrai

Débutant :
• L’opérateur in teste l’appartenance : 2 est bien un élément de [1, 2, 3].
• Résultat True.

Intermédiaire :
• Égalité au sens == avec les éléments ; ordre linéaire pour list.

Expert :
• Complexité O(n) dans le pire cas list ; sets offrent membership O(1) moyen.

Concepts clés :
• Test d’appartenance, booléen.

Distinctions clés :
• in vs index() (lève si absent) vs count.

Fonctionnement :
• Parcours des éléments jusqu’à match ou fin.

Exécution étape par étape :
1. Cible 2.
2. Compare à 1, puis 2 : succès.
3. True.

Ordre des opérations :
• x in seq : x puis seq.

Cas d'utilisation courants :
• if x in options:, validation, filtres.

Cas limites :
• [3] in [1,2,3] cherche la liste [3], pas le nombre 3 — faux ici.

Considérations de performance :
• Pour grosses données répétées, structurer autrement.

Exemples :
• 'a' in ['a','b'] → True

Remarques :
• Affichage QCM « True » ; en français on dit Vrai pour la première ligne.`,

  1525: `Faux

Débutant :
• 5 n’apparaît pas dans [1, 2, 3], donc in renvoie False.
• Pas d’exception : simple test booléen.

Intermédiaire :
• Complément logique : not in pour « absent ».

Expert :
• __contains__ sur list délègue à une recherche linéaire générique.

Concepts clés :
• Non-appartenance.

Distinctions clés :
• 5 in ... vs remove(5) qui lèverait ValueError.

Fonctionnement :
• Scan complet sans trouver 5.

Exécution étape par étape :
1. Compare à 1, 2, 3.
2. Échec final.
3. False.

Ordre des opérations :
• Court-circuit dès match ; ici parcours complet.

Cas d'utilisation courants :
• Garde avant remove, sets de validité.

Cas limites :
• Floating-point : attention aux égalités approximatives rares en liste d’objets mixtes.

Considérations de performance :
• O(n).

Exemples :
• 10 in [1, 2, 3] → False

Remarques :
• Réponse Faux / False selon affichage du quiz.`,

  1526: `Vrai

Débutant :
• == compare le contenu : mêmes éléments dans le même ordre ⇒ True.
• [1, 2] et [1, 2] sont égaux au sens valeur.

Intermédiaire :
• Deux objets list distincts peuvent être == sans être is.

Expert :
• __eq__ sur list compare pairwise ; s’arrête au premier différent ou longueurs.

Concepts clés :
• Égalité structurelle des listes.

Distinctions clés :
• == vs is (identité mémoire).

Fonctionnement :
• Comparaison élément par élément 1==1, 2==2.

Exécution étape par étape :
1. Longueurs égales.
2. Tous les couples égaux.
3. True.

Ordre des opérations :
• Gauche puis droite, comparaison listes.

Cas d'utilisation courants :
• Tests unitaires, validation de résultats.

Cas limites :
• [1] == [1.0] est True (1 == 1.0).

Considérations de performance :
• O(n) temps, peut court-circuiter tôt.

Exemples :
• [] == [] → True

Remarques :
• Ce n’est pas une question d’identité d’objet.`,

  1527: `Faux

Débutant :
• Même nombres mais ordre différent : [1, 2] vs [2, 1] ne sont pas ==.
• == tient compte de la position.

Intermédiaire :
• Ensemble mathématique « même éléments » ≠ liste Python égale.

Expert :
• Premier indice où 1 vs 2 diffère décide False immédiatement.

Concepts clés :
• Ordre des éléments dans ==.

Distinctions clés :
• sorted([2,1]) == sorted([1,2]) serait True, pas les listes brutes.

Fonctionnement :
• Compare index 0 : 1 vs 2 → différent → False.

Exécution étape par étape :
1. Longueurs égales.
2. Premier mismatch.
3. False.

Ordre des opérations :
• Comparaison lexicographique des listes alignée sur ==.

Cas d'utilisation courants :
• Détecter permutations différentes.

Cas limites :
• Listes de longueurs différentes : False sans regarder le contenu si tailles diffèrent.

Considérations de performance :
• O(1) meilleur cas ici (premier élément).

Exemples :
• [1,2] == [1,2,3] → False

Remarques :
• Ne pas confondre « mêmes valeurs globales » et « même séquence ».`,

  1528: `Faux

Débutant :
• is teste si c’est le même objet en mémoire ; deux littéraux [1, 2] créent en général deux listes.
• Donc False.

Intermédiaire :
• Même contenu == True peut coexister avec is False.

Expert :
• L’interpréteur ne garantit pas la fusion de littéraux mutables comme il le peut pour petits ints.

Concepts clés :
• Identité vs égalité.

Distinctions clés :
• a = [1,2]; b = a; a is b → True.

Fonctionnement :
• Création de deux objets distincts pour chaque littéral.

Exécution étape par étape :
1. Construire liste A.
2. Construire liste B.
3. Comparer identité : différents.

Ordre des opérations :
• Créations puis is.

Cas d'utilisation courants :
• None is None, sentinelles partagées ; rarement is sur list littérales.

Cas limites :
• is sur petits int (-5..256) peut être True par cache — ne s’applique pas aux listes.

Considérations de performance :
• Négligeable ; lecture conceptuelle importante.

Exemples :
• [] is [] → False en CPython usuel

Remarques :
• Pour comparer le contenu, utilisez ==.`,

  1529: `Vrai

Débutant :
• Python compare les listes dans l’ordre lexicographique : premier élément égal (1), puis 2 < 3.
• Donc [1, 2] < [1, 3] est True.

Intermédiaire :
• Règle identique aux chaînes : comparaison élément à élément.

Expert :
• Si un préfixe est plus court et égal partout, la liste plus courte est plus petite.

Concepts clés :
• Ordre lexicographique sur séquences.

Distinctions clés :
• < sur list vs < sur éléments internes (types comparables requis).

Fonctionnement :
• Compare index 0 : 1==1 ; index 1 : 2<3 ⇒ True.

Exécution étape par étape :
1. Égalité jusqu’au premier différent.
2. 2 < 3.
3. True.

Ordre des opérations :
• Comparaison raccourcie.

Cas d'utilisation courants :
• sorted([[1,2],[1,1],[2,0]]), clés composites.

Cas limites :
• Types non ordonnables entre eux lèvent TypeError.

Considérations de performance :
• O(min(len)) jusqu’au différent.

Exemples :
• [1,2] < [2,0] → True (car 1<2)

Remarques :
• [1,2] < [1,2] est False (égalité).`,

  1530: `Vrai

Débutant :
• Tous les éléments de [1, 2] coïncident avec le début de [1, 2, 3] ; la première liste est plus courte.
• En ordre lexicographique, le préfixe propre est « plus petit ».

Intermédiaire :
• Après indices 0 et 1 égaux, la gauche est épuisée, la droite non ⇒ gauche < droite.

Expert :
• Analogie avec 'ab' < 'abc' pour chaînes.

Concepts clés :
• Préfixe strict plus court, comparaison de longueurs implicite en fin.

Distinctions clés :
• [1,2] < [1,2] est False ; égalité stricte.

Fonctionnement :
• Compare 1==1, 2==2 ; fin de gauche avant droite ⇒ True.

Exécution étape par étape :
1. Parcours aligné jusqu’à fin de la plus courte.
2. Égalité partout sur la portion gauche.
3. len gauche < len droite ⇒ True.

Ordre des opérations :
• Comparaison séquentielle complète du préfixe.

Cas d'utilisation courants :
• Version tuples (1,2) vs (1,2,0), tri stable.

Cas limites :
• [] < [0] est True (liste vide préfixe).

Considérations de performance :
• O(longueur du préfixe commun).

Exemples :
• [1] < [1,0] → True

Remarques :
• Inverse : [1,2,3] < [1,2] est False.`,

  1531: `None

Débutant :
• append(3) ajoute 3 à la fin de la liste en place.
• La méthode renvoie None, pas la liste modifiée.

Intermédiaire :
• Piège fréquent : x = lst.append(4) met None dans x.

Expert :
• API cohérente avec d’autres mutateurs in-place qui retournent None.

Concepts clés :
• append, mutation, valeur de retour None.

Distinctions clés :
• append vs + (nouvelle liste) ; append vs extend.

Fonctionnement :
• __iadd__ n’est pas utilisé ; append appelle la logique CPython d’insertion fin.

Exécution étape par étape :
1. Liste cible [1,2,3] construite (littéral éphémère).
2. append(3) pousse l’élément (ici doublon conceptuel si on repart de [1,2] — question : [1,2].append(3)).
3. Retour None à l’expression.

Ordre des opérations :
• Appel de méthode sur objet temporaire.

Cas d'utilisation courants :
• Construction itérative de résultats.

Cas limites :
• append accepte tout objet, y compris une autre liste (imbriquée).

Considérations de performance :
• Amortized O(1) fin de liste.

Exemples :
• a=[]; a.append(1); a → [1]

Remarques :
• Réponse None ; ne pas chaîner .append().append() en pensant réutiliser la liste via retour.`,

  1532: `None

Débutant :
• extend([3,4]) ajoute chaque élément de l’itérable à la fin : 3 puis 4.
• Retour None.

Intermédiaire :
• Diffère de append([3,4]) qui ajouterait une seule sous-liste.

Expert :
• extend parcourt __iter__ de l’argument.

Concepts clés :
• extend, déroulement d’itérable, None.

Distinctions clés :
• extend vs + sur variables persistantes.

Fonctionnement :
• Pour chaque élément de [3,4], append interne.

Exécution étape par étape :
1. Liste [1,2].
2. Itération 3,4.
3. Liste devient [1,2,3,4], None renvoyé.

Ordre des opérations :
• Méthode sur liste temporaire.

Cas d'utilisation courants :
• Fusionner sans créer liste intermédiaire via + répété.

Cas limites :
• extend('ab') insère des caractères, pas la chaîne entière.

Considérations de performance :
• O(len(iterable)) ajouts.

Exemples :
• a=[1]; a.extend((2,3)); a → [1,2,3]

Remarques :
• Toujours None en valeur de l’expression complète.`,

  1533: `None

Débutant :
• insert(1, 5) place 5 à l’indice 1 : [1, 5, 2].
• La méthode renvoie None.

Intermédiaire :
• Les éléments à partir de l’indice 1 sont décalés vers la droite.

Expert :
• Coût O(n) dans le pire cas décalages ; deque peut être préférable pour insertions front fréquentes.

Concepts clés :
• insert(index, valeur), décalage, None.

Distinctions clés :
• insert vs append en fin.

Fonctionnement :
• Vérification des bornes, décalage, écriture à la position.

Exécution étape par étape :
1. Liste [1,2].
2. Insérer 5 à la position 1.
3. [1,5,2], None.

Ordre des opérations :
• Appel insert après création de la liste cible.

Cas d'utilisation courants :
• Maintenir ordre trié par insertions ponctuelles (naïf).

Cas limites :
• Indices négatifs autorisés avec sémantique Python ; > len équivalent append.

Considérations de performance :
• O(n) pour grandes listes.

Exemples :
• [0,2].insert(1,1) → None, liste [0,1,2]

Remarques :
• Ne pas attendre la nouvelle liste en retour.`,

  1534: `None

Débutant :
• insert(0, 0) insère 0 au tout début : [0, 1, 2].
• Retour None.

Intermédiaire :
• Équivalent conceptuel à prepend ; pas de méthode prepend native.

Expert :
• Sur longues listes, pop(0)/insert(0) coûteux ; collections.deque pour bords.

Concepts clés :
• Insertion tête, None.

Distinctions clés :
• insert(0,x) vs [x]+lst (nouvelle liste).

Fonctionnement :
• Décale tous les éléments existants d’un cran.

Exécution étape par étape :
1. [1,2].
2. Place 0 à l’indice 0.
3. [0,1,2], None.

Ordre des opérations :
• Méthode sur littéral temporaire.

Cas d'utilisation courants :
• FIFO naïf, empiler en tête.

Cas limites :
• insert(0) sur [] donne [x].

Considérations de performance :
• O(n).

Exemples :
• lst=['b']; lst.insert(0,'a') → ['a','b'], None

Remarques :
• La valeur affichée du QCM est None.`,

  1535: `None

Débutant :
• insert(10, 5) avec une liste de longueur 2 : indice trop grand ⇒ Python ajoute à la fin comme un append.
• Liste [1, 2, 5], retour None.

Intermédiaire :
• Pas d’erreur : comportement silencieux de clippage supérieur.

Expert :
• Documenté comme insertion après la dernière position si index ≥ len.

Concepts clés :
• insert avec indice hors plage haute, append effectif.

Distinctions clés :
• Contrairement à lst[10] lecture qui est erreur.

Fonctionnement :
• Ramener l’index à len puis insérer.

Exécution étape par étape :
1. len=2, index demandé 10.
2. Traité comme insert à la fin.
3. [1,2,5], None.

Ordre des opérations :
• Validation d’indice puis insertion.

Cas d'utilisation courants :
• Code générique sans calculer len avant append.

Cas limites :
• Indices négatifs hors plage basse ont aussi des règles spécifiques.

Considérations de performance :
• O(1) amorti en fin, pas de décalage si fin.

Exemples :
• [].insert(5,1) → [1], None

Remarques :
• Réponse None ; effet utile : élément en queue.`,

  1536: `append ajoute un seul élément ; extend ajoute tous les éléments d’un itérable

Débutant :
• append(x) met x tel quel en une seule case.
• extend(it) parcourt it et ajoute chaque élément.

Intermédiaire :
• append([3,4]) imbrique la sous-liste ; extend([3,4]) aplatit deux niveaux ici.

Expert :
• Choix d’API pour signaler mutation in-place via None.

Concepts clés :
• Un objet vs N éléments issus d’un iterable.

Distinctions clés :
• Voir question append([3]) vs extend([3]) dans la même série.

Fonctionnement :
• append : un push ; extend : boucle d’append.

Exécution étape par étape :
1. append reçoit une référence unique.
2. extend demande __iter__ puis append répété.

Ordre des opérations :
• Distinction conceptuelle, pas une expression unique.

Cas d'utilisation courants :
• append pour scalaire unique ; extend pour concaténation in-place.

Cas limites :
• extend(str) décompose en caractères.

Considérations de performance :
• extend peut préallouer mieux que append répété manuellement dans certaines boucles.

Exemples :
• [1,2].append([3]) → [1,2,[3]] ; .extend([3]) → [1,2,3]

Remarques :
• Réponse alignée sur l’option « append adds one item, extend adds multiple ».`,

  1537: `+ crée une nouvelle liste ; extend modifie la liste existante en place

Débutant :
• [1,2] + [3] produit une nouvelle liste sans changer les opérandes d’origine s’ils sont dans des variables séparées.
• .extend([3]) modifie la liste cible et renvoie None.

Intermédiaire :
• Mémoire : + alloue ; extend réutilise la capacité existante quand possible.

Expert :
• Chaînage fonctionnel vs style impératif mutable.

Concepts clés :
• Pureté partielle (+) vs mutation (extend).

Distinctions clés :
• a = a + b réassigne si a doit changer ; a.extend(b) pas de réassignation.

Fonctionnement :
• + appelle __add__ list ; extend itère append.

Exécution étape par étape :
1. + : nouvelle liste construite.
2. extend : mutation sur self.

Ordre des opérations :
• Deux phrases comparées dans l’énoncé.

Cas d'utilisation courants :
• + pour expressions immuables locales ; extend pour buffers longue durée.

Cas limites :
• + avec types incompatibles lève TypeError.

Considérations de performance :
• + coût O(n+m) nouvelle allocation ; extend O(m) ajouts.

Exemples :
• a=[1,2]; b=a+[3]; a inchangé ; a.extend([3]) change a

Remarques :
• Traduire l’option correcte du QCM en français pour la ligne 1.`,

  1538: `None

Débutant :
• append([3]) ajoute la liste entière [3] comme un seul élément : [1, 2, [3]].
• La méthode renvoie None (réponse attendue du QCM à l’indice « None » seul).

Intermédiaire :
• Ce n’est pas une erreur : c’est le comportement voulu de append.

Expert :
• Si vous vouliez [1,2,3], utilisez extend([3]) ou append(3).

Concepts clés :
• append d’un conteneur, imbrication, None.

Distinctions clés :
• Réponse « None, liste devient [1,2,[3]] » décrit l’effet ; le choix exact du quiz ici est l’option None seule.

Fonctionnement :
• Un seul push de l’objet liste argument.

Exécution étape par étape :
1. Liste [1,2].
2. append référence sous-liste [3].
3. None.

Ordre des opérations :
• Comme append standard.

Cas d'utilisation courants :
• Graphes, matrices en liste de listes.

Cas limites :
• Partage d’objets mutables si on réutilise la même sous-liste.

Considérations de performance :
• O(1) amorti.

Exemples :
• [].append([]) → [[]], None

Remarques :
• Insister : valeur de retour None, pas la liste modifiée.`,

  1539: `None

Débutant :
• extend([3]) parcourt l’itérable [3] : un seul élément 3 à ajouter.
• Liste devient [1, 2, 3] ; retour None.

Intermédiaire :
• Même résultat valeur que append(3) ici, mais mécanisme extend.

Expert :
• extend généralise à toute taille d’itérable.

Concepts clés :
• extend d’une liste d’un élément, aplatissement local.

Distinctions clés :
• extend([3]) vs append([3]) — effets différents déjà vus.

Fonctionnement :
• Itération une fois, append 3.

Exécution étape par étape :
1. [1,2].
2. Itère 3.
3. [1,2,3], None.

Ordre des opérations :
• Méthode extend.

Cas d'utilisation courants :
• Coller morceaux variables d’itérables.

Cas limites :
• extend([]) ne change rien, None quand même.

Considérations de performance :
• O(k).

Exemples :
• [1].extend([2,3]) → [1,2,3], None

Remarques :
• QCM : option None seule correspond à la valeur renvoyée.`,

  1540: `None

Débutant :
• Une chaîne est itérable caractère par caractère ; extend('ab') ajoute 'a' puis 'b'.
• Liste [1, 2, 'a', 'b'] ; None renvoyé.

Intermédiaire :
• append('ab') aurait ajouté une seule chaîne 'ab'.

Expert :
• extend accepte tout iterable : fichiers, générateurs, etc.

Concepts clés :
• Itération de str, extend polymorphe.

Distinctions clés :
• extend(str) vs split + extend.

Fonctionnement :
• __iter__ sur 'ab' produit deux caractères.

Exécution étape par étape :
1. [1,2].
2. Itère 'a','b'.
3. Nouvelle forme [1,2,'a','b'], None.

Ordre des opérations :
• extend après création liste.

Cas d'utilisation courants :
• Construire buffers mixtes texte / données.

Cas limites :
• extend(bytes) en Python 3 ajoute des int 0-255, pas des caractères str.

Considérations de performance :
• O(len(str)).

Exemples :
• [].extend('x') → ['x'], None

Remarques :
• Réponse None pour l’expression ; effet sur la liste temporaire du snippet.`,

  1541: `3

Débutant :
• pop() sans argument enlève et renvoie le dernier élément : 3.
• La liste devient [1, 2] sur une variable persistante ; ici on lit la valeur retournée.

Intermédiaire :
• LIFO naturel pour piles.

Expert :
• pop() équivalent pop(-1) pour list.

Concepts clés :
• pop, dernier élément, valeur de retour non None.

Distinctions clés :
• pop vs remove (valeur) vs del (pas de retour).

Fonctionnement :
• Retrait en fin, renvoi de la référence extraite.

Exécution étape par étape :
1. Liste [1,2,3].
2. Retirer index -1.
3. Retour 3.

Ordre des opérations :
• Méthode sur littéral temporaire.

Cas d'utilisation courants :
• Annuler dernière action, parseurs.

Cas limites :
• pop sur [] lève IndexError.

Considérations de performance :
• O(1) amorti en fin.

Exemples :
• [1].pop() → 1

Remarques :
• Réponse 3, pas la liste tronquée.`,

  1542: `1

Débutant :
• pop(0) retire le premier élément et le renvoie : 1.
• File FIFO naïve.

Intermédiaire :
• Coût O(n) car décalage des éléments restants.

Expert :
• collections.deque.popleft en O(1) pour grosses files.

Concepts clés :
• pop par indice, tête de liste.

Distinctions clés :
• pop(0) vs pop() fin.

Fonctionnement :
• Retrait à l’indice 0, décalage.

Exécution étape par étape :
1. [1,2,3].
2. Extraire indice 0.
3. Retour 1.

Ordre des opérations :
• pop après création liste.

Cas d'utilisation courants :
• Traitement de queue simple.

Cas limites :
• Indice hors plage : IndexError.

Considérations de performance :
• Éviter pop(0) répété sur très grandes listes.

Exemples :
• [5,6].pop(0) → 5

Remarques :
• Réponse 1.`,

  1543: `None

Débutant :
• remove(2) supprime la première occurrence de la valeur 2.
• La méthode renvoie None, pas 2.

Intermédiaire :
• Si plusieurs 2, seul le premier est retiré.

Expert :
• Lève ValueError si la valeur est absente.

Concepts clés :
• remove par valeur, effet in-place, None.

Distinctions clés :
• remove vs pop(indice) qui retourne l’élément.

Fonctionnement :
• Recherche linéaire puis décalage.

Exécution étape par étape :
1. [1,2,3].
2. Trouver 2 à l’indice 1, le retirer.
3. None.

Ordre des opérations :
• Appel remove.

Cas d'utilisation courants :
• Nettoyer une valeur connue sans connaître l’indice.

Cas limites :
• remove sur doublons : une passe ne suffit pas pour tout effacer.

Considérations de performance :
• O(n) recherche + décalage.

Exemples :
• ['x','y','x'].remove('x') → None, liste ['y','x']

Remarques :
• Ne pas écrire x = lst.remove(v) pour récupérer v.`,

  1544: `None

Débutant :
• Deux 2 sont présents ; remove(2) enlève seulement le premier.
• Liste [1, 2, 3] après coup ; la méthode renvoie None.

Intermédiaire :
• Pour tout supprimer, boucle ou comprehension filtrante.

Expert :
• Complexité linéaire par appel.

Concepts clés :
• Première occurrence seulement, None.

Distinctions clés :
• Comprendre que le second 2 reste.

Fonctionnement :
• Scan jusqu’au premier match, suppression locale.

Exécution étape par étape :
1. [1,2,2,3].
2. Retirer premier 2 à l’indice 1.
3. [1,2,3], None.

Ordre des opérations :
• remove unique passe.

Cas d'utilisation courants :
• Dédupliquer partiellement, file d’événements identiques.

Cas limites :
• Enchaîner remove même valeur jusqu’à épuisement si nécessaire.

Considérations de performance :
• Plusieurs remove peuvent devenir quadratique.

Exemples :
• while 2 in a: a.remove(2) (attention perf)

Remarques :
• QCM : choisir None comme valeur de retour de l’expression.`,

  1545: `None

Débutant :
• clear() vide la liste : [] ; retour None.
• L’objet list existe toujours si lié à une variable.

Intermédiaire :
• Diffère de réassigner a = [] qui peut changer la référence partagée.

Expert :
• clear libère les références aux éléments, pas nécessairement les objets eux-mêmes s’ils sont référencés ailleurs.

Concepts clés :
• Vider in-place, None.

Distinctions clés :
• clear vs del lst[:] (similaire) vs lst = [].

Fonctionnement :
• Réinitialise la longueur à 0.

Exécution étape par étape :
1. [1,2,3].
2. Retirer tous les éléments.
3. None.

Ordre des opérations :
• Méthode clear.

Cas d'utilisation courants :
• Réutiliser buffer sans recréer l’identité d’objet.

Cas limites :
• clear sur [] est no-op, None.

Considérations de performance :
• O(n) libération références.

Exemples :
• a=[1,2]; a.clear(); len(a) → 0

Remarques :
• Réponse None, pas [].`,

  1546: `pop utilise un indice ; remove utilise une valeur

Débutant :
• pop(i) enlève l’élément à la position i et le renvoie.
• remove(x) cherche la valeur x et la supprime, sans la renvoyer (None).

Intermédiaire :
• Erreurs typiques : IndexError vs ValueError.

Expert :
• API symétrique à des besoins différents : accès positionnel vs sémantique.

Concepts clés :
• Position vs égalité de valeur, valeurs de retour.

Distinctions clés :
• pop() dernier élément par défaut.

Fonctionnement :
• pop : __getitem__ + compactage ; remove : recherche + compactage.

Exécution étape par étape :
1. Identifier critère index ou valeur.
2. Modifier liste.
3. pop retourne élément ; remove None.

Ordre des opérations :
• Question conceptuelle sur différences d’usage.

Cas d'utilisation courants :
• Piles (pop fin), suppression par clé métier (remove).

Cas limites :
• pop sur vide, remove si absent.

Considérations de performance :
• pop fin O(1) amorti ; pop0 O(n) ; remove O(n).

Exemples :
• [1,2,3].pop(1) → 2 ; .remove(2) → None

Remarques :
• Traduire l’option correcte du QCM en français pour la ligne 1.`,

  1547: `IndexError

Débutant :
• pop sur liste vide n’a aucun élément à retirer : Python lève IndexError.
• Ce n’est ni None ni [].

Intermédiaire :
• Message typique : pop from empty list.

Expert :
• À gérer avec if lst: ou try/except selon style.

Concepts clés :
• Erreur d’index pour pop vide.

Distinctions clés :
• Contrairement à certaines APIs qui renvoient None ailleurs.

Fonctionnement :
• Vérification longueur 0 avant retrait.

Exécution étape par étape :
1. [].
2. pop demandé.
3. Exception.

Ordre des opérations :
• Appel pop immédiat.

Cas d'utilisation courants :
• Files robustes, boucles consommant jusqu’à épuisement.

Cas limites :
• pop(0) sur [] idem IndexError.

Considérations de performance :
• N/A hors chemin d’erreur.

Exemples :
• try: [].pop()
• except IndexError: pass

Remarques :
• Choisir IndexError exact du QCM.`,

  1548: `ValueError

Débutant :
• remove(5) sur [1,2,3] : 5 introuvable ⇒ ValueError.
• Pas silencieux.

Intermédiaire :
• Prévenir avec if x in lst avant remove.

Expert :
• Message list.remove(x): x not in list.

Concepts clés :
• Erreur de valeur manquante.

Distinctions clés :
• ValueError vs KeyError dict.

Fonctionnement :
• Scan complet sans match puis lever.

Exécution étape par étape :
1. Recherche 5.
2. Échec.
3. ValueError.

Ordre des opérations :
• remove appelé directement.

Cas d'utilisation courants :
• Invariants violés, données inattendues.

Cas limites :
• None dans liste : remove(None) cherche exactement None.

Considérations de performance :
• O(n) avant échec.

Exemples :
• [1,2,3].remove(10) → ValueError

Remarques :
• Réponse ValueError du QCM.`,

  1549: `3

Débutant :
• pop(-1) retire le dernier élément comme pop() sans argument.
• Retour 3.

Intermédiaire :
• Cohérent avec indexation négative.

Expert :
• pop(-2) enlève l’avant-dernier, etc.

Concepts clés :
• pop avec indice négatif.

Distinctions clés :
• pop(-1) vs pop() lisibilité.

Fonctionnement :
• Conversion -1 → dernier index valide.

Exécution étape par étape :
1. [1,2,3], len=3.
2. -1 → 2.
3. Extraire 3.

Ordre des opérations :
• pop argument optionnel négatif.

Cas d'utilisation courants :
• Symétrie pédagogique avec [-1] lecture.

Cas limites :
• pop(-len) == pop(0) premier élément.

Considérations de performance :
• O(1) amorti en fin.

Exemples :
• [1,2,3].pop(-1) == [1,2,3].pop()

Remarques :
• Réponse 3.`,

  1550: `None, la liste devient [1, 3]

Débutant :
• del a[i] supprime l’élément d’indice i sans renvoyer de valeur : en pratique « None » côté expression (instruction).
• Sur a = [1,2,3], del a[1] donne [1,3].

Intermédiaire :
• del n’est pas une fonction retournant l’élément : contrairement à pop.

Expert :
• del [1,2,3][1] sur littéral est ambigu en usage réel ; l’intention pédagogique du QCM est del sur variable : retirer l’élément 2.

Concepts clés :
• Instruction del, suppression par indice, pas de valeur de retour.

Distinctions clés :
• del vs pop vs remove.

Fonctionnement :
• Décroche la référence à l’indice et compacte.

Exécution étape par étape :
1. Liste cible (variable) [1,2,3].
2. Supprimer indice 1.
3. Résultat [1,3], pas de retour utilisable.

Ordre des opérations :
• Statement del après binding réel en code.

Cas d'utilisation courants :
• Supprimer sans besoin de récupérer la valeur.

Cas limites :
• Indice hors plage : IndexError.

Considérations de performance :
• O(n) décalage comme remove interne.

Exemples :
• a=[1,2,3]; del a[0]; a → [2,3]

Remarques :
• Ligne 1 reprend l’option correcte du quiz : effet [1,3] et absence de valeur de retour utile.`,
};
