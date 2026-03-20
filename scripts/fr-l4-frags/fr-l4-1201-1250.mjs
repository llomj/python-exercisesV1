/** Level 4 FR 1201–1250 — range, loops, break/continue, for/while. Aligned with level4.ts. */
export default {
  1201: `5 fois : range(5) génère 0, 1, 2, 3, 4 — cinq itérations.

Débutant :
• range(5) crée une séquence de 0 à 4.
• Une boucle for i in range(5) s'exécute 5 fois.
• i prend les valeurs 0, 1, 2, 3, 4.

Intermédiaire :
• range(n) utilise start=0 et stop=n par défaut.
• La borne stop est exclusive : 5 n'est pas inclus.
• C'est le motif standard pour un nombre fixe d'itérations.

Expert :
• range() retourne un objet range (itérable paresseux), pas une liste.
• Mémoire O(1) : les valeurs sont générées à la demande.

Concepts clés :
• range(n) = 0 à n-1, borne exclusive, itérations fixes.

Distinctions clés :
• range(5) (5 itérations) vs range(0,5) (identique) vs range(1,5) (4 itérations).

Fonctionnement :
• range(5) produit 0, 1, 2, 3, 4 ; for consomme chaque valeur une fois.

Exécution étape par étape :
1. range(5) crée l'objet range.
2. for demande le prochain élément : 0, 1, 2, 3, 4.
3. Cinq itérations au total.

Ordre des opérations :
• Création du range, puis itération séquentielle.

Cas d'utilisation courants :
• Boucles à nombre fixe d'itérations, indices 0 à n-1.

Cas limites :
• range(0) → zéro itération ; range(1) → une seule (0).

Considérations de performance :
• O(1) en mémoire ; pas de liste matérialisée.

Exemples :
• for i in range(5): print(i) → 0 1 2 3 4
• len(range(5)) → 5

Remarques :
• range(5) et range(0, 5) sont équivalents.`,

  1202: `[0, 1, 2, 3, 4] : list() matérialise range(5) en liste.

Débutant :
• range(5) génère 0, 1, 2, 3, 4.
• list() convertit l'itérable en liste.
• Résultat : [0, 1, 2, 3, 4].

Intermédiaire :
• range est paresseux ; list() force l'évaluation complète.
• 5 n'est pas inclus (borne stop exclusive).

Expert :
• list(range(5)) consomme tout l'itérable et crée une liste en O(n).

Concepts clés :
• list(iterable), range paresseux, borne exclusive.

Distinctions clés :
• list(range(5)) vs [0,1,2,3,4] (même contenu) ; range(5) seul n'est pas une liste.

Fonctionnement :
• range(5) fournit 0,1,2,3,4 ; list() les collecte dans une liste.

Exécution étape par étape :
1. range(5) créé.
2. list() itère : 0, 1, 2, 3, 4.
3. Liste [0, 1, 2, 3, 4] retournée.

Ordre des opérations :
• range(5) puis list() sur l'itérable.

Cas d'utilisation courants :
• Inspecter le contenu d'un range, créer des séquences numériques.

Cas limites :
• list(range(0)) → [] ; list(range(1)) → [0].

Considérations de performance :
• O(n) en temps et mémoire.

Exemples :
• list(range(5)) → [0, 1, 2, 3, 4]
• list(range(3)) → [0, 1, 2]

Remarques :
• Préférer range() directement dans les boucles pour économiser la mémoire.`,

  1203: `[1, 2, 3] : range(1, 4) va de 1 (inclus) à 4 (exclus).

Débutant :
• range(1, 4) commence à 1 et s'arrête avant 4.
• Valeurs : 1, 2, 3.
• list() les met dans une liste.

Intermédiaire :
• Premier argument = start (inclus), deuxième = stop (exclus).
• Convention demi-ouverte [start, stop) en Python.

Expert :
• range(start, stop) sans step utilise step=1 implicitement.

Concepts clés :
• range(start, stop), start inclus, stop exclus, intervalle [start, stop).

Distinctions clés :
• range(1,4) → [1,2,3] vs range(4) → [0,1,2,3] vs range(1,5) → [1,2,3,4].

Fonctionnement :
• Génération de 1, 2, 3 ; stop=4 jamais atteint.

Exécution étape par étape :
1. range(1, 4) initialisé.
2. Valeurs produites : 1, 2, 3.
3. list() → [1, 2, 3].

Ordre des opérations :
• start=1, stop=4, step=1 ; génération séquentielle.

Cas d'utilisation courants :
• Boucles à partir de 1, plages personnalisées.

Cas limites :
• range(1, 1) → [] ; range(2, 5) → [2, 3, 4].

Considérations de performance :
• O(n) avec n = stop - start si start < stop.

Exemples :
• list(range(1, 4)) → [1, 2, 3]
• list(range(2, 6)) → [2, 3, 4, 5]

Remarques :
• La borne stop n'est jamais incluse — règle Python cohérente.`,

  1204: `[0, 2, 4, 6, 8] : range(0, 10, 2) — pairs de 0 à 8.

Débutant :
• range(0, 10, 2) : start=0, stop=10, step=2.
• Valeurs : 0, 2, 4, 6, 8.
• 10 n'est pas inclus.

Intermédiaire :
• Le step positif avance de 2 en 2.
• Dernière valeur < 10 : 8.

Expert :
• range(start, stop, step) ; si step>0, on s'arrête dès que valeur >= stop.

Concepts clés :
• range(start, stop, step), incrément, borne exclusive.

Distinctions clés :
• range(0,10,2) vs range(0,10) (tous les entiers) ; step négatif pour compter à rebours.

Fonctionnement :
• 0, +2→2, +2→4, +2→6, +2→8 ; 8+2=10 >= stop → fin.

Exécution étape par étape :
1. val=0 < 10 → inclus.
2. val=2, 4, 6, 8 → inclus.
3. val=10 >= 10 → exclu, fin.

Ordre des opérations :
• start, puis répéter +step jusqu'à atteindre ou dépasser stop.

Cas d'utilisation courants :
• Nombres pairs, indices espacés, échantillonnage.

Cas limites :
• range(0, 1, 2) → [0] ; range(0, 0, 2) → [].

Considérations de performance :
• O((stop-start)/step) valeurs générées.

Exemples :
• list(range(0, 10, 2)) → [0, 2, 4, 6, 8]
• list(range(0, 5, 2)) → [0, 2, 4]

Remarques :
• Pour les pairs de 0 à n : range(0, n+1, 2) si n pair.`,

  1205: `[1, 3, 5] : range(1, 6, 2) — impairs de 1 à 5.

Débutant :
• range(1, 6, 2) : start=1, stop=6, step=2.
• Valeurs : 1, 3, 5.
• 6 et 7 ne sont pas inclus.

Intermédiaire :
• Step=2 saute un nombre sur deux.
• Génère les impairs dans [1, 6).

Expert :
• Équivalent à [i for i in range(1,6) if i%2==1] mais plus efficace.

Concepts clés :
• range avec step, impairs, intervalle [1, 6).

Distinctions clés :
• range(1,6,2) → [1,3,5] vs range(0,6,2) → [0,2,4] ; start change la parité.

Fonctionnement :
• 1, 3, 5 ; 5+2=7 >= 6 → arrêt.

Exécution étape par étape :
1. 1 < 6 → 1.
2. 3 < 6 → 3.
3. 5 < 6 → 5 ; 7 >= 6 → fin.

Ordre des opérations :
• Incrément de 2 à partir de 1 jusqu'à < 6.

Cas d'utilisation courants :
• Indices impairs, nombres impairs dans une plage.

Cas limites :
• range(1, 2, 2) → [1] ; range(1, 1, 2) → [].

Considérations de performance :
• O(n/2) valeurs pour une plage de n.

Exemples :
• list(range(1, 6, 2)) → [1, 3, 5]
• list(range(1, 10, 2)) → [1, 3, 5, 7, 9]

Remarques :
• Pour impairs jusqu'à n : range(1, n+1, 2).`,

  1206: `[5, 4, 3, 2] : range(5, 1, -1) — compte à rebours.

Débutant :
• range(5, 1, -1) : start=5, stop=1, step=-1.
• Valeurs : 5, 4, 3, 2.
• 1 n'est pas inclus (stop exclus).

Intermédiaire :
• Step négatif : on décrémente.
• On s'arrête quand valeur <= stop (car step<0).

Expert :
• Avec step négatif, la condition d'arrêt est value <= stop.

Concepts clés :
• range avec step négatif, compte à rebours, stop exclus.

Distinctions clés :
• range(5,1,-1) vs range(5,0,-1) (inclut 1) vs reversed(range(2,6)).

Fonctionnement :
• 5, 4, 3, 2 ; 2-1=1 <= 1 → fin (1 exclus par convention).

Exécution étape par étape :
1. 5 > 1 → 5.
2. 4, 3, 2 > 1 → inclus.
3. 1 <= 1 (stop) → exclu, fin.

Ordre des opérations :
• Décrément de 1 à partir de 5 jusqu'à > 1.

Cas d'utilisation courants :
• Parcours inverse, tri décroissant manuel.

Cas limites :
• range(5, 5, -1) → [] ; range(3, 1, -1) → [3, 2].

Considérations de performance :
• O(n) avec n = start - stop.

Exemples :
• list(range(5, 1, -1)) → [5, 4, 3, 2]
• list(range(10, 0, -2)) → [10, 8, 6, 4, 2]

Remarques :
• Pour inclure 1 : range(5, 0, -1) → [5,4,3,2,1].`,

  1207: `[] : range(0) ne génère aucune valeur.

Débutant :
• range(0) signifie « de 0 à avant 0 ».
• Aucune valeur : liste vide.

Intermédiaire :
• range(0) équivaut à range(0, 0) ou range(0, n, n) pour n>0.
• Boucle for i in range(0) : corps jamais exécuté.

Expert :
• Cas limite important : boucles conditionnellement vides.

Concepts clés :
• range(0), itérable vide, zéro itération.

Distinctions clés :
• range(0) vs range(1) (une valeur) ; list(range(0)) vs [].

Fonctionnement :
• start=0, stop=0 ; dès le départ value >= stop → rien.

Exécution étape par étape :
1. range(0) créé.
2. Première valeur : 0 >= 0 (stop) → aucune production.
3. list() → [].

Ordre des opérations :
• Vérification immédiate : start >= stop → vide.

Cas d'utilisation courants :
• Boucles dont le nombre d'itérations peut être 0.

Cas limites :
• range(0), range(-1) en Python 3 : range(-1) produit [] car -1 < 0 et step=1.

Considérations de performance :
• O(1) — aucune valeur générée.

Exemples :
• list(range(0)) → []
• for i in range(0): ... # jamais exécuté

Remarques :
• range(0) est un itérable vide valide.`,

  1208: `[] : range(1, 1) — start égal à stop, plage vide.

Débutant :
• range(1, 1) : de 1 à avant 1.
• Aucune valeur entre les deux.
• Liste vide.

Intermédiaire :
• Quand start >= stop (avec step positif), range est vide.
• Même logique que range(0).

Expert :
• range(n, n) est toujours vide pour tout n.

Concepts clés :
• Plage vide, start == stop, borne exclusive.

Distinctions clés :
• range(1,1) vs range(1,2) ([1]) ; intervalle [1,1) vide en mathématiques.

Fonctionnement :
• start=1, stop=1 ; 1 >= 1 → aucune valeur.

Exécution étape par étape :
1. range(1, 1) initialisé.
2. Première valeur 1 >= stop 1 → vide.
3. list() → [].

Ordre des opérations :
• start, stop ; si start >= stop → fin immédiate.

Cas d'utilisation courants :
• Boucles avec bornes calculées pouvant être égales.

Cas limites :
• range(5, 5) → [] ; range(0, 0) → [].

Considérations de performance :
• O(1).

Exemples :
• list(range(1, 1)) → []
• list(range(7, 7)) → []

Remarques :
• [start, stop) avec start=stop est l'ensemble vide.`,

  1209: `0 : range(5)[0] est le premier élément (index 0).

Débutant :
• range(5) = 0, 1, 2, 3, 4.
• L'index 0 donne le premier : 0.

Intermédiaire :
• range supporte l'indexation comme une séquence.
• Accès O(1) par index (implémentation optimisée).

Expert :
• range implémente __getitem__ ; pas besoin de matérialiser la liste.

Concepts clés :
• Indexation de range, premier élément, séquence.

Distinctions clés :
• range(5)[0] vs range(5)[-1] (dernier) ; range(5)[5] → IndexError.

Fonctionnement :
• Formule : start + index * step ; pour range(5) : 0 + 0*1 = 0.

Exécution étape par étape :
1. range(5) : start=0, stop=5, step=1.
2. Index 0 → valeur 0.
3. Retour 0.

Ordre des opérations :
• Calcul direct : start + i * step pour index i.

Cas d'utilisation courants :
• Accès au premier élément sans list().

Cas limites :
• range(5)[-1] → 4 ; range(0)[0] → IndexError.

Considérations de performance :
• O(1) — calcul arithmétique, pas d'itération.

Exemples :
• range(5)[0] → 0
• range(1, 10)[0] → 1

Remarques :
• range est une séquence immuable.`,

  1210: `4 : range(5)[-1] est le dernier élément.

Débutant :
• range(5) = 0, 1, 2, 3, 4.
• Index -1 = dernier : 4.

Intermédiaire :
• Index négatif : -1 = dernier, -2 = avant-dernier, etc.
• range(5)[-1] équivaut à range(5)[len(range(5))-1].

Expert :
• range convertit les index négatifs : -1 → 4 pour len=5.

Concepts clés :
• Indexation négative, dernier élément, séquence.

Distinctions clés :
• range(5)[-1] (4) vs range(5)[0] (0) ; range(1)[-1] (0).

Fonctionnement :
• -1 interprété comme index 4 ; valeur = 4.

Exécution étape par étape :
1. len(range(5)) = 5.
2. Index -1 → index effectif 4.
3. Valeur à 4 : 4.

Ordre des opérations :
• Conversion index négatif, puis calcul start + i*step.

Cas d'utilisation courants :
• Dernier élément d'une plage sans matérialiser.

Cas limites :
• range(0)[-1] → IndexError ; range(1)[-1] → 0.

Considérations de performance :
• O(1).

Exemples :
• range(5)[-1] → 4
• range(1, 6)[-1] → 5

Remarques :
• range(5)[-2] → 3 (avant-dernier).`,

  1211: `5 : len(range(5)) compte les éléments (0 à 4).

Débutant :
• range(5) a 5 valeurs : 0, 1, 2, 3, 4.
• len() retourne 5.

Intermédiaire :
• Formule : max(0, (stop - start + step - 1) // step) pour step>0.
• Ici : (5-0+1-1)//1 = 5.

Expert :
• len(range) est O(1) — calcul arithmétique sans itération.

Concepts clés :
• len sur range, nombre d'éléments, O(1).

Distinctions clés :
• len(range(5)) (5) vs len(range(0)) (0) ; len(list(range(5))) (5, mais O(n)).

Fonctionnement :
• Calcul direct du nombre de valeurs dans la plage.

Exécution étape par étape :
1. start=0, stop=5, step=1.
2. Nombre = ceil((5-0)/1) = 5.
3. Retour 5.

Ordre des opérations :
• Formule (stop-start)/step, plafonnée à 0.

Cas d'utilisation courants :
• Vérifier la taille d'une plage sans la matérialiser.

Cas limites :
• len(range(0)) → 0 ; len(range(1,1)) → 0.

Considérations de performance :
• O(1).

Exemples :
• len(range(5)) → 5
• len(range(2, 10, 3)) → 3

Remarques :
• range connaît sa longueur sans parcourir les éléments.`,

  1212: `10 : sum(range(5)) = 0+1+2+3+4 = 10.

Débutant :
• range(5) donne 0, 1, 2, 3, 4.
• sum() les additionne : 10.

Intermédiaire :
• sum(iterable) accepte tout itérable.
• Formule 0+1+...+n-1 = n*(n-1)/2 ; pour n=5 : 10.

Expert :
• sum consomme l'itérable ; avec range, pas de liste intermédiaire.

Concepts clés :
• sum(iterable), somme des n premiers entiers, formule n(n-1)/2.

Distinctions clés :
• sum(range(5)) (10) vs sum([0,1,2,3,4]) (10) ; sum(range(0)) (0).

Fonctionnement :
• Itération sur 0,1,2,3,4 ; accumulation 0+1+2+3+4=10.

Exécution étape par étape :
1. total=0.
2. +0, +1, +2, +3, +4.
3. total=10.

Ordre des opérations :
• Parcours séquentiel, accumulation.

Cas d'utilisation courants :
• Somme des indices, formules arithmétiques.

Cas limites :
• sum(range(0)) → 0 ; sum(range(1)) → 0.

Considérations de performance :
• O(n) en temps, O(1) en mémoire avec range.

Exemples :
• sum(range(5)) → 10
• sum(range(1, 6)) → 15

Remarques :
• sum(range(n)) = n*(n-1)//2.`,

  1213: `0 : min(range(5)) — le plus petit est 0.

Débutant :
• range(5) = 0, 1, 2, 3, 4.
• min() retourne le minimum : 0.

Intermédiaire :
• Avec step positif, le minimum est toujours start.
• min(range(start, stop, step)) = start si step > 0.

Expert :
• min peut être O(1) pour range si optimisé (start connu).

Concepts clés :
• min(iterable), premier élément avec step positif.

Distinctions clés :
• min(range(5)) (0) vs min(range(1,5)) (1) ; min(range(5,0,-1)) (1).

Fonctionnement :
• Parcours des valeurs ; 0 est le plus petit.

Exécution étape par étape :
1. Valeurs 0, 1, 2, 3, 4.
2. Comparaison : 0 minimum.
3. Retour 0.

Ordre des opérations :
• Itération, comparaison à chaque étape.

Cas d'utilisation courants :
• Borne inférieure d'une plage.

Cas limites :
• min(range(0)) → ValueError (itérable vide).

Considérations de performance :
• O(n) en général ; O(1) si start connu pour range.

Exemples :
• min(range(5)) → 0
• min(range(3, 8)) → 3

Remarques :
• Pour range(n), min = 0 ; pour range(1,n+1), min = 1.`,

  1214: `4 : max(range(5)) — le plus grand est 4.

Débutant :
• range(5) = 0, 1, 2, 3, 4.
• max() retourne le maximum : 4.

Intermédiaire :
• Avec step positif, le maximum est la dernière valeur avant stop.
• Pour range(5) : 4 = stop - 1.

Expert :
• max(range(start, stop, step)) avec step>0 = dernière valeur générée.

Concepts clés :
• max(iterable), dernier élément, borne exclusive.

Distinctions clés :
• max(range(5)) (4) vs max(range(1,5)) (4) ; max(range(5,0,-1)) (5).

Fonctionnement :
• Parcours 0,1,2,3,4 ; 4 est le plus grand.

Exécution étape par étape :
1. Valeurs 0, 1, 2, 3, 4.
2. Comparaison : 4 maximum.
3. Retour 4.

Ordre des opérations :
• Itération, comparaison.

Cas d'utilisation courants :
• Borne supérieure effective d'une plage.

Cas limites :
• max(range(0)) → ValueError.

Considérations de performance :
• O(n) ; pour range, dernière valeur = start + (n-1)*step.

Exemples :
• max(range(5)) → 4
• max(range(0, 10, 2)) → 8

Remarques :
• Pour range(n), max = n-1.`,

  1215: `True : 3 est dans range(5) (0, 1, 2, 3, 4).

Débutant :
• range(5) contient 0, 1, 2, 3, 4.
• 3 in range(5) → True.

Intermédiaire :
• L'opérateur in teste l'appartenance.
• Pour range, test O(1) par formule arithmétique (valeur dans la plage et alignée sur le step).

Expert :
• range.__contains__ utilise : (val - start) % step == 0 et start <= val < stop (pour step>0).

Concepts clés :
• in, appartenance, range, test O(1).

Distinctions clés :
• 3 in range(5) (True) vs 5 in range(5) (False) ; 10 in range(5) (False).

Fonctionnement :
• 3 entre 0 et 5, (3-0)%1==0 → True.

Exécution étape par étape :
1. start=0, stop=5, step=1.
2. 0 <= 3 < 5 ? Oui.
3. (3-0) % 1 == 0 ? Oui → True.

Ordre des opérations :
• Vérification directe sans itération.

Cas d'utilisation courants :
• Test rapide si un entier est dans une plage.

Cas limites :
• 0 in range(5) → True ; 4 in range(5) → True.

Considérations de performance :
• O(1) pour range.

Exemples :
• 3 in range(5) → True
• 3 in range(1, 5) → True

Remarques :
• Beaucoup plus efficace que 3 in list(range(5)).`,

  1216: `False : 10 n'est pas dans range(5) (0 à 4).

Débutant :
• range(5) va de 0 à 4.
• 10 >= 5 (stop) → pas dans la plage.
• 10 in range(5) → False.

Intermédiaire :
• La borne stop est exclusive : 5 n'est pas inclus.
• 10 dépasse la plage.

Expert :
• 10 >= stop → False immédiat, pas d'itération.

Concepts clés :
• Appartenance, borne exclusive, hors plage.

Distinctions clés :
• 10 in range(5) (False) vs 4 in range(5) (True) ; 5 in range(5) (False).

Fonctionnement :
• 10 >= 5 (stop) → False.

Exécution étape par étape :
1. start=0, stop=5.
2. 10 < 5 ? Non.
3. Retour False.

Ordre des opérations :
• Comparaison avec stop (et start si step négatif).

Cas d'utilisation courants :
• Validation qu'un index est dans les bornes.

Cas limites :
• -1 in range(5) → False ; 5 in range(5) → False.

Considérations de performance :
• O(1).

Exemples :
• 10 in range(5) → False
• 10 in range(11) → True

Remarques :
• Pour range(5), valeurs valides : 0, 1, 2, 3, 4.`,

  1217: `False : 3 est dans range(5), donc 3 not in range(5) → False.

Débutant :
• 3 in range(5) → True.
• not True → False.
• 3 not in range(5) → False.

Intermédiaire :
• not in est la négation de in.
• x not in s équivaut à not (x in s).

Expert :
• Même efficacité O(1) que in pour range.

Concepts clés :
• not in, négation d'appartenance.

Distinctions clés :
• 3 not in range(5) (False) vs 10 not in range(5) (True).

Fonctionnement :
• 3 in range(5) → True ; not True → False.

Exécution étape par étape :
1. 3 in range(5) → True.
2. not True → False.
3. Retour False.

Ordre des opérations :
• Évaluation de in, puis négation.

Cas d'utilisation courants :
• Vérifier qu'une valeur n'est pas dans une plage.

Cas limites :
• 0 not in range(5) → False ; 5 not in range(5) → True.

Considérations de performance :
• O(1) pour range.

Exemples :
• 3 not in range(5) → False
• 10 not in range(5) → True

Remarques :
• not in est l'inverse logique de in.`,

  1218: `True : 10 n'est pas dans range(5), donc 10 not in range(5) → True.

Débutant :
• 10 in range(5) → False.
• not False → True.
• 10 not in range(5) → True.

Intermédiaire :
• 10 hors de [0, 5) → not in retourne True.

Expert :
• Cohérent avec 10 in range(5) == False.

Concepts clés :
• not in, valeur hors plage.

Distinctions clés :
• 10 not in range(5) (True) vs 3 not in range(5) (False).

Fonctionnement :
• 10 in range(5) → False ; not False → True.

Exécution étape par étape :
1. 10 in range(5) → False.
2. not False → True.
3. Retour True.

Ordre des opérations :
• Test in, puis négation.

Cas d'utilisation courants :
• Garde pour valeurs hors limites.

Cas limites :
• 5 not in range(5) → True ; -1 not in range(5) → True.

Considérations de performance :
• O(1).

Exemples :
• 10 not in range(5) → True
• 0 not in range(5) → False

Remarques :
• Utiliser pour valider des entrées.`,

  1219: `[4, 3, 2, 1, 0] : reversed(range(5)) inverse l'ordre.

Débutant :
• range(5) = 0, 1, 2, 3, 4.
• reversed() parcourt à l'envers : 4, 3, 2, 1, 0.
• list() donne [4, 3, 2, 1, 0].

Intermédiaire :
• reversed() retourne un itérateur, pas une liste.
• Équivalent à range(4, -1, -1).

Expert :
• reversed(range(n)) est optimisé : utilise range(n-1, -1, -1) en interne.

Concepts clés :
• reversed(seq), ordre inverse, itérateur.

Distinctions clés :
• list(reversed(range(5))) vs list(range(5, -1, -1)) ; reversed sur liste vs range.

Fonctionnement :
• Parcours de la fin vers le début : 4, 3, 2, 1, 0.

Exécution étape par étape :
1. range(5) : 0..4.
2. reversed : parcours 4, 3, 2, 1, 0.
3. list() → [4, 3, 2, 1, 0].

Ordre des opérations :
• reversed crée un itérateur inverse, list consomme.

Cas d'utilisation courants :
• Parcours inverse sans modifier la source.

Cas limites :
• list(reversed(range(0))) → [] ; list(reversed(range(1))) → [0].

Considérations de performance :
• O(n) temps, O(1) mémoire pour l'itérateur.

Exemples :
• list(reversed(range(5))) → [4, 3, 2, 1, 0]
• list(reversed(range(1, 4))) → [3, 2, 1]

Remarques :
• reversed préserve la source ; ne modifie pas range.`,

  1220: `[1, 2, 3, 4, 5] : sorted() trie par ordre croissant.

Débutant :
• range(5, 0, -1) = [5, 4, 3, 2, 1].
• sorted() trie : [1, 2, 3, 4, 5].

Intermédiaire :
• sorted(iterable) retourne une nouvelle liste triée.
• Par défaut : ordre croissant (reverse=False).

Expert :
• sorted accepte tout itérable ; range(5,0,-1) est consommé et trié.

Concepts clés :
• sorted(iterable), tri croissant, nouvelle liste.

Distinctions clés :
• sorted(range(5,0,-1)) vs list(range(5,0,-1)) (ordre inverse) ; sorted vs .sort().

Fonctionnement :
• Itération sur 5,4,3,2,1 ; tri en place (Timsort) ; liste [1,2,3,4,5].

Exécution étape par étape :
1. Consommer range(5,0,-1) → 5,4,3,2,1.
2. Tri par comparaison.
3. Retour [1, 2, 3, 4, 5].

Ordre des opérations :
• Collecte des éléments, tri, retour.

Cas d'utilisation courants :
• Obtenir une plage croissante à partir d'une décroissante.

Cas limites :
• sorted(range(0)) → [] ; sorted(range(1)) → [0].

Considérations de performance :
• O(n log n) pour le tri.

Exemples :
• sorted(range(5, 0, -1)) → [1, 2, 3, 4, 5]
• sorted([3, 1, 2]) → [1, 2, 3]

Remarques :
• Préférer list(range(1, 6)) si on veut directement [1,2,3,4,5].`,

  1221: `continue : saute le reste du cycle et passe à l'itération suivante.

Débutant :
• continue ignore le code restant dans la boucle.
• Passe directement à l'itération suivante.

Intermédiaire :
• Dans for : avance au prochain élément.
• Dans while : réévalue la condition.

Expert :
• continue ne termine pas la boucle ; break oui.

Concepts clés :
• continue, saut d'itération, contrôle de flux.

Distinctions clés :
• continue (passe à la suite) vs break (sort de la boucle) ; continue vs pass.

Fonctionnement :
• Interruption du corps actuel ; reprise au prochain tour.

Exécution étape par étape :
1. Exécution du corps jusqu'à continue.
2. Saut du reste du corps.
3. Prochaine itération (ou fin si plus d'éléments).

Ordre des opérations :
• continue interrompt, pas de sortie de boucle.

Cas d'utilisation courants :
• Ignorer certains éléments (filtrage dans une boucle).

Cas limites :
• continue dans une boucle vide ; continue dans la dernière itération.

Considérations de performance :
• Coût négligeable.

Exemples :
• for i in range(5): if i==2: continue; print(i) → 0,1,3,4

Remarques :
• continue ne s'utilise qu'à l'intérieur d'une boucle.`,

  1222: `break : termine immédiatement la boucle.

Débutant :
• break sort de la boucle (for ou while).
• Le code après la boucle s'exécute.

Intermédiaire :
• break quitte uniquement la boucle la plus intérieure.
• Le bloc else d'un for/while ne s'exécute pas si break a été atteint.

Expert :
• break fait un saut vers la première instruction après la boucle.

Concepts clés :
• break, sortie de boucle, terminaison prématurée.

Distinctions clés :
• break (sort) vs continue (passe au suivant) ; break vs return.

Fonctionnement :
• Interruption immédiate ; sortie de la boucle.

Exécution étape par étape :
1. Exécution jusqu'à break.
2. Sortie de la boucle.
3. Exécution du code suivant.

Ordre des opérations :
• break interrompt et sort.

Cas d'utilisation courants :
• Recherche (sortir quand trouvé), validation (sortir si erreur).

Cas limites :
• break dans boucle imbriquée : sort seulement de la boucle intérieure.

Considérations de performance :
• Permet d'éviter des itérations inutiles.

Exemples :
• for i in range(5): if i==2: break → sort à i=2

Remarques :
• break sans boucle → SyntaxError.`,

  1223: `pass : instruction vide, ne fait rien (placeholder).

Débutant :
• pass est une instruction qui n'a aucun effet.
• Utile pour un bloc syntaxiquement requis mais vide.

Intermédiaire :
• Obligatoire quand un bloc doit exister (après :, def, class, etc.).
• Évite SyntaxError pour corps vides.

Expert :
• pass est un no-op ; le bytecode peut l'optimiser complètement.

Concepts clés :
• pass, placeholder, bloc vide, no-op.

Distinctions clés :
• pass (rien) vs ... (ellipsis, aussi valide) ; pass vs commentaire.

Fonctionnement :
• L'interpréteur passe à l'instruction suivante sans action.

Exécution étape par étape :
1. Rencontre de pass.
2. Aucune opération.
3. Suite du flux.

Ordre des opérations :
• pass consommé, exécution continue.

Cas d'utilisation courants :
• Stub de fonction/classe, boucle vide temporaire.

Cas limites :
• while True: pass → boucle infinie (ne fait rien).

Considérations de performance :
• Coût négligeable.

Exemples :
• def f(): pass
• for i in range(5): pass

Remarques :
• pass est parfois remplacé par ... dans les stubs.`,

  1224: `while True: — boucle infinie (condition toujours vraie).

Débutant :
• True est toujours vrai.
• La boucle ne se termine jamais par la condition.
• Il faut break ou return pour sortir.

Intermédiaire :
• Pattern courant : boucle avec sortie explicite (break, return).
• Utilisé pour menus, serveurs, lecture jusqu'à sentinelle.

Expert :
• Éviter les boucles infinies accidentelles ; toujours prévoir une sortie.

Concepts clés :
• Boucle infinie, condition constante, sortie explicite.

Distinctions clés :
• while True vs while 1 (équivalent) ; while True vs for sans fin.

Fonctionnement :
• Condition évaluée → True ; corps exécuté ; répété indéfiniment.

Exécution étape par étape :
1. Évaluer True → True.
2. Exécuter le corps.
3. Revenir à l'étape 1 (sauf break/return).

Ordre des opérations :
• Condition, corps, condition, corps, ...

Cas d'utilisation courants :
• Boucle principale, attente d'événement, menu interactif.

Cas limites :
• while True: break → une itération ; while True: pass → infini.

Considérations de performance :
• Boucle infinie = blocage si pas de sortie.

Exemples :
• while True: x = input(); if x == 'q': break

Remarques :
• Toujours prévoir une condition de sortie.`,

  1225: `for i in range(5): pass — boucle vide qui s'exécute 5 fois.

Débutant :
• for i in range(5) : 5 itérations (i = 0,1,2,3,4).
• pass ne fait rien.
• La boucle termine normalement.

Intermédiaire :
• Corps vide ; utile pour compter ou retarder (avec time.sleep).
• Équivalent à exécuter pass 5 fois.

Expert :
• Le bloc else du for s'exécuterait (pas de break).

Concepts clés :
• for avec pass, boucle vide, 5 itérations.

Distinctions clés :
• for i in range(5): pass vs for i in range(0): pass (0 itérations).

Fonctionnement :
• i=0, pass ; i=1, pass ; ... ; i=4, pass ; fin.

Exécution étape par étape :
1. i=0, pass.
2. i=1, pass ; ... i=4, pass.
3. Fin de la boucle.

Ordre des opérations :
• Itération sur range(5), pass à chaque fois.

Cas d'utilisation courants :
• Placeholder, boucle de temporisation.

Cas limites :
• for i in range(0): pass → aucune itération.

Considérations de performance :
• 5 itérations, coût minimal (pass).

Exemples :
• for i in range(5): pass  # i vaut 0,1,2,3,4

Remarques :
• Souvent remplacé par une logique utile dans le corps.`,

  1226: `Non : break en dehors d'une boucle provoque une SyntaxError.

Débutant :
• break ne s'utilise que dans for ou while.
• En dehors → erreur de syntaxe.

Intermédiaire :
• Python vérifie la syntaxe à la compilation.
• break doit être dans le corps d'une boucle.

Expert :
• Le compilateur détecte les break « orphelins » ; pas d'exécution possible.

Concepts clés :
• break, portée, SyntaxError, contexte de boucle.

Distinctions clés :
• break dans for (valide) vs break au niveau module (SyntaxError) ; break vs return.

Fonctionnement :
• Analyse syntaxique : break sans boucle englobante → erreur.

Exécution étape par étape :
1. Parsing du fichier.
2. Détection de break hors boucle.
3. SyntaxError avant exécution.

Ordre des opérations :
• Vérification à la compilation.

Cas d'utilisation courants :
• Aucun ; break doit être dans une boucle.

Cas limites :
• break dans une fonction mais hors boucle → SyntaxError.

Considérations de performance :
• N/A — le code ne s'exécute pas.

Exemples :
• break  # SyntaxError
• if True: break  # SyntaxError (if n'est pas une boucle)

Remarques :
• Idem pour continue.`,

  1227: `Non : continue en dehors d'une boucle provoque une SyntaxError.

Débutant :
• continue ne s'utilise que dans for ou while.
• En dehors → erreur de syntaxe.

Intermédiaire :
• Même règle que break : contexte de boucle requis.
• if, try, with, etc. ne suffisent pas.

Expert :
• continue et break sont des instructions de boucle uniquement.

Concepts clés :
• continue, portée, SyntaxError, boucle requise.

Distinctions clés :
• continue dans for (valide) vs continue au niveau module (SyntaxError).

Fonctionnement :
• Parsing : continue sans boucle → SyntaxError.

Exécution étape par étape :
1. Compilation.
2. continue hors boucle détecté.
3. SyntaxError.

Ordre des opérations :
• Vérification statique.

Cas d'utilisation courants :
• Aucun hors boucle.

Cas limites :
• continue dans else de if (sans boucle) → SyntaxError.

Considérations de performance :
• N/A.

Exemples :
• continue  # SyntaxError
• for i in range(3): continue  # OK

Remarques :
• break et continue partagent la même contrainte.`,

  1228: `break sort uniquement de la boucle intérieure (la plus proche).

Débutant :
• Dans des boucles imbriquées, break quitte seulement la boucle où il se trouve.
• Les boucles extérieures continuent.

Intermédiaire :
• for i in range(3): for j in range(3): if j==1: break → break sort du for j.
• Le for i continue avec le prochain i.

Expert :
• Pour sortir de plusieurs niveaux, utiliser un flag ou return.

Concepts clés :
• break, boucles imbriquées, sortie locale.

Distinctions clés :
• break dans boucle intérieure vs break dans boucle extérieure ; break vs return.

Fonctionnement :
• break termine la boucle la plus intérieure contenant le break.

Exécution étape par étape :
1. Boucle extérieure : i=0.
2. Boucle intérieure : j=0, j=1 → break.
3. Sortie du for j ; for i continue (i=1, 2, ...).

Ordre des opérations :
• break n'affecte que la boucle immédiate.

Cas d'utilisation courants :
• Recherche 2D : sortir de la boucle interne quand trouvé.

Cas limites :
• Un seul niveau : break sort complètement.

Considérations de performance :
• Évite des itérations inutiles dans la boucle intérieure.

Exemples :
• for i in range(2): for j in range(3): if j==1: break  # 2 tours du for i

Remarques :
• Pour sortir des deux : utiliser found = True et if found: break dans l'extérieur.`,

  1229: `continue saute au prochain tour de la boucle intérieure uniquement.

Débutant :
• continue dans une boucle imbriquée affecte la boucle la plus proche.
• La boucle extérieure continue normalement.

Intermédiaire :
• for i in range(2): for j in range(3): if j==1: continue; print(j)
• continue passe au prochain j ; le for i n'est pas affecté.

Expert :
• continue ne remonte pas aux boucles extérieures.

Concepts clés :
• continue, boucles imbriquées, saut local.

Distinctions clés :
• continue (prochain j) vs break (sort du for j) ; continue vs pass.

Fonctionnement :
• continue interrompt le corps du for j, passe au j suivant.

Exécution étape par étape :
1. i=0, j=0 : pas de continue, print.
2. j=1 : continue → j=2.
3. j=2 : print ; fin for j ; i=1, etc.

Ordre des opérations :
• continue agit sur la boucle immédiate.

Cas d'utilisation courants :
• Ignorer certains (i,j) dans une grille.

Cas limites :
• continue dans la dernière itération de j → passage au prochain i.

Considérations de performance :
• Évite du travail dans le corps pour certains (i,j).

Exemples :
• for i in range(2): for j in range(3): if j==1: continue; print(i,j)
• Affiche (0,0),(0,2),(1,0),(1,2)

Remarques :
• continue ne fait pas passer au prochain i.`,

  1230: `Oui : for peut avoir un bloc else (exécuté si pas de break).

Débutant :
• for ... else : le else s'exécute quand la boucle se termine normalement.
• Si break est exécuté, le else est ignoré.

Intermédiaire :
• Pattern « recherche » : else = « non trouvé ».
• for x in seq: if cond: break else: print("pas trouvé")

Expert :
• Le else des boucles est spécifique à Python ; souvent méconnu.

Concepts clés :
• for-else, exécution sans break, pattern de recherche.

Distinctions clés :
• for-else (exécuté si pas de break) vs if-else ; for-else vs while-else.

Fonctionnement :
• Fin normale de la boucle → else exécuté ; break → else sauté.

Exécution étape par étape :
1. Itérations complètes sans break.
2. Sortie normale du for.
3. Bloc else exécuté.

Ordre des opérations :
• Boucle, puis else si pas de break.

Cas d'utilisation courants :
• Recherche avec message « non trouvé » si aucun break.

Cas limites :
• for i in range(0): ... else: → else exécuté (boucle vide, pas de break).

Considérations de performance :
• Négligeable.

Exemples :
• for i in range(3): pass
• else: print("done")  # affiche "done"

Remarques :
• Le else des boucles n'a rien à voir avec if-else.`,

  1231: `Oui : les chaînes sont itérables, caractère par caractère.

Débutant :
• for c in "abc" : c vaut 'a', puis 'b', puis 'c'.
• Les chaînes sont des séquences d'unicodes.

Intermédiaire :
• str est itérable ; chaque élément est un caractère (str de longueur 1).
• for char in s: traite chaque caractère.

Expert :
• Itération O(n) sur n caractères ; les chaînes sont immuables.

Concepts clés :
• str itérable, caractère, séquence.

Distinctions clés :
• for c in "abc" (caractères) vs for i in range(len(s)) (indices) ; str vs list.

Fonctionnement :
• Itération séquentielle sur les caractères.

Exécution étape par étape :
1. Premier caractère 'a' → c='a'.
2. 'b' → c='b', 'c' → c='c'.
3. Fin.

Ordre des opérations :
• Parcours de gauche à droite.

Cas d'utilisation courants :
• Traiter chaque caractère, compter, chercher.

Cas limites :
• Chaîne vide : for c in "": ... → aucune itération.

Considérations de performance :
• O(n) pour n caractères.

Exemples :
• for c in "abc": print(c)  # a, b, c
• list("abc") → ['a','b','c']

Remarques :
• Pour avoir indices et caractères : enumerate(s).`,

  1232: `Les caractères 'a', 'b', 'c' — un par un.

Débutant :
• for char in "abc" : char vaut 'a', puis 'b', puis 'c'.
• Trois itérations, une par caractère.

Intermédiaire :
• "abc" est une séquence de 3 caractères.
• Chaque élément est une chaîne de longueur 1.

Expert :
• Itération sur les codepoints Unicode (en Python 3).

Concepts clés :
• Itération sur str, caractère, élément.

Distinctions clés :
• for char in "abc" (char='a','b','c') vs for i in "abc" (i idem) ; in sur str.

Fonctionnement :
• __iter__ de str produit les caractères un par un.

Exécution étape par étape :
1. char = 'a'.
2. char = 'b'.
3. char = 'c' ; fin.

Ordre des opérations :
• Parcours séquentiel.

Cas d'utilisation courants :
• Analyse de chaîne, validation, transformation.

Cas limites :
• "abc"[0] = 'a' ; itération donne le même ordre.

Considérations de performance :
• O(1) par caractère.

Exemples :
• [c for c in "abc"] → ['a','b','c']
• for char in "abc": print(char, end='')  # abc

Remarques :
• Les caractères sont des str, pas des int (contrairement à C).`,

  1233: `Oui : les listes sont itérables, élément par élément.

Débutant :
• for item in [1, 2, 3] : item vaut 1, puis 2, puis 3.
• Pas besoin d'indice pour parcourir.

Intermédiaire :
• list est itérable ; chaque élément est visité dans l'ordre.
• Équivalent à for i in range(len(L)): L[i] mais plus pythonique.

Expert :
• Itération par __iter__ ; modification de la liste pendant l'itération peut être dangereuse.

Concepts clés :
• list itérable, parcours séquentiel, élément.

Distinctions clés :
• for item in L (valeurs) vs for i in range(len(L)) (indices) ; list vs tuple.

Fonctionnement :
• Itération de gauche à droite sur les éléments.

Exécution étape par étape :
1. item = 1.
2. item = 2.
3. item = 3 ; fin.

Ordre des opérations :
• Parcours selon l'ordre d'insertion.

Cas d'utilisation courants :
• Traiter chaque élément, somme, recherche.

Cas limites :
• Liste vide : aucune itération ; liste à un élément : une itération.

Considérations de performance :
• O(n) pour n éléments.

Exemples :
• for item in [1, 2, 3]: print(item)  # 1 2 3
• sum([1, 2, 3])  # itère en interne

Remarques :
• Ne pas modifier la liste pendant l'itération (suppression/insertion).`,

  1234: `Les éléments 1, 2, 3 — un par un (pas les clés).

Débutant :
• for item in [1, 2, 3] : item vaut 1, puis 2, puis 3.
• On itère sur les valeurs, pas sur des indices.

Intermédiaire :
• [1, 2, 3] est une liste ; les éléments sont 1, 2, 3.
• Pas de clés : c'est une séquence, pas un dict.

Expert :
• Contrairement au dict, la liste n'a pas de clé/valeur ; seulement des valeurs indexées.

Concepts clés :
• Itération sur liste, valeurs, séquence.

Distinctions clés :
• for item in [1,2,3] (1,2,3) vs for k in d (clés) ; list vs dict.

Fonctionnement :
• Parcours des valeurs dans l'ordre.

Exécution étape par étape :
1. item = 1.
2. item = 2.
3. item = 3 ; fin.

Ordre des opérations :
• Ordre d'index 0, 1, 2.

Cas d'utilisation courants :
• Traiter chaque nombre, accumulation.

Cas limites :
• [1, 1, 1] : item vaut 1 trois fois.

Considérations de performance :
• O(n).

Exemples :
• for item in [1, 2, 3]: print(item * 2)  # 2 4 6
• [x for x in [1, 2, 3]] → [1, 2, 3]

Remarques :
• Pour indices et valeurs : enumerate([1, 2, 3]).`,

  1235: `Oui : on peut itérer sur un dictionnaire (sur les clés par défaut).

Débutant :
• for key in {"a": 1, "b": 2} : key vaut 'a', puis 'b'.
• L'ordre est préservé (Python 3.7+).

Intermédiaire :
• for k in d itère sur les clés.
• Pour clés et valeurs : for k, v in d.items().

Expert :
• dict est itérable ; __iter__ donne les clés. .keys(), .values(), .items() pour d'autres vues.

Concepts clés :
• dict itérable, clés, ordre d'insertion.

Distinctions clés :
• for k in d (clés) vs for v in d.values() (valeurs) ; dict vs list.

Fonctionnement :
• Itération sur les clés dans l'ordre d'insertion.

Exécution étape par étape :
1. key = 'a'.
2. key = 'b' ; fin.

Ordre des opérations :
• Parcours des clés.

Cas d'utilisation courants :
• Parcourir les entrées, recherche, transformation.

Cas limites :
• Modifier d pendant l'itération peut lever RuntimeError.

Considérations de performance :
• O(n) pour n paires.

Exemples :
• for k in {"a":1,"b":2}: print(k)  # a b
• list({"a":1,"b":2}) → ['a','b']

Remarques :
• for k in d équivaut à for k in d.keys().`,

  1236: `Les clés 'a' et 'b' — pas les valeurs.

Débutant :
• for key in {"a": 1, "b": 2} : key vaut 'a', puis 'b'.
• Les valeurs 1 et 2 ne sont pas directement itérées.

Intermédiaire :
• Par défaut, itérer sur un dict donne les clés.
• Pour les valeurs : d.values() ; pour les deux : d.items().

Expert :
• for x in d : x = clé. Pour valeur : d[x] ou d.get(x).

Concepts clés :
• Itération sur dict, clés, pas valeurs.

Distinctions clés :
• for key in d (clés) vs for v in d.values() (valeurs) ; in sur dict teste les clés.

Fonctionnement :
• __iter__ du dict retourne un itérateur sur les clés.

Exécution étape par étape :
1. key = 'a'.
2. key = 'b' ; fin.

Ordre des opérations :
• Ordre d'insertion des clés.

Cas d'utilisation courants :
• Parcourir les clés, accéder aux valeurs via d[key].

Cas limites :
• dict vide : aucune itération.

Considérations de performance :
• O(n) clés.

Exemples :
• for key in {"a":1,"b":2}: print(key, d[key])  # a 1, b 2
• list({"a":1,"b":2}) → ['a','b']

Remarques :
• Pour (clé, valeur) : for k, v in d.items().`,

  1237: `for : plus adapté aux collections de taille connue.

Débutant :
• for parcourt une collection (liste, range, chaîne).
• Pas besoin de gérer un compteur ou une condition.

Intermédiaire :
• for x in seq : Python gère l'itération.
• Plus lisible et moins d'erreurs (pas d'oubli d'incrément).

Expert :
• for est le pattern « pythonic » pour parcourir un itérable fixe.

Concepts clés :
• for, collection fixe, itérable, parcours direct.

Distinctions clés :
• for (collection connue) vs while (nombre d'itérations variable) ; for vs while.

Fonctionnement :
• Consommation de l'itérable jusqu'à épuisement.

Exécution étape par étape :
1. Obtenir l'itérateur de la collection.
2. next() jusqu'à StopIteration.
3. Fin.

Ordre des opérations :
• Un élément par itération.

Cas d'utilisation courants :
• Parcourir listes, chaînes, ranges, dicts.

Cas limites :
• Collection vide : aucune itération.

Considérations de performance :
• Efficace, pas de gestion manuelle d'indice.

Exemples :
• for x in [1, 2, 3]: print(x)
• for i in range(10): ...

Remarques :
• Préférer for quand la collection existe.`,

  1238: `while : adapté quand le nombre d'itérations est inconnu.

Débutant :
• while répète tant qu'une condition est vraie.
• On ne sait pas à l'avance combien de fois.

Intermédiaire :
• Exemples : lecture jusqu'à sentinelle, convergence, attente d'événement.
• La condition peut dépendre de calculs dans la boucle.

Expert :
• while est plus flexible ; risque de boucle infinie si la condition ne devient jamais fausse.

Concepts clés :
• while, itérations inconnues, condition dynamique.

Distinctions clés :
• while (condition) vs for (itérable) ; while vs for.

Fonctionnement :
• Évaluer condition ; si True, corps ; répéter.

Exécution étape par étape :
1. Évaluer condition.
2. Si True : corps, retour à 1.
3. Si False : sortie.

Ordre des opérations :
• Condition, corps, condition, ...

Cas d'utilisation courants :
• Jeux (boucle principale), parsing, algorithmes de convergence.

Cas limites :
• while False : corps jamais exécuté.

Considérations de performance :
• Dépend de la condition et du corps.

Exemples :
• while True: x = input(); if x == 'q': break
• while n > 0: n //= 2

Remarques :
• Toujours s'assurer que la condition peut devenir False.`,

  1239: `0, 1, 2 — une ligne par valeur (print(i) à chaque tour).

Débutant :
• for i in range(3) : i = 0, 1, 2.
• print(i) affiche chaque valeur sur une ligne.

Intermédiaire :
• range(3) = 0, 1, 2.
• Trois appels à print : 0, puis 1, puis 2.

Expert :
• print() ajoute un saut de ligne par défaut (end='\\n').

Concepts clés :
• for, range(3), print, sortie standard.

Distinctions clés :
• range(3) (0,1,2) vs range(1,4) (1,2,3) ; print(i) vs print(i, end='').

Fonctionnement :
• i=0 → print(0) ; i=1 → print(1) ; i=2 → print(2).

Exécution étape par étape :
1. i=0, print(0).
2. i=1, print(1).
3. i=2, print(2) ; fin.

Ordre des opérations :
• Itération, print à chaque fois.

Cas d'utilisation courants :
• Débogage, affichage de séquences.

Cas limites :
• range(0) : rien n'est affiché.

Considérations de performance :
• O(n) prints.

Exemples :
• for i in range(3): print(i)
• # Sortie : 0\\n1\\n2

Remarques :
• Pour tout sur une ligne : print(i, end=' ').`,

  1240: `1, 2, 3 — une ligne par valeur.

Débutant :
• for i in range(1, 4) : i = 1, 2, 3.
• print(i) affiche 1, puis 2, puis 3.

Intermédiaire :
• range(1, 4) exclut 4 ; valeurs 1, 2, 3.
• Trois itérations, trois prints.

Expert :
• Équivalent à for i in [1, 2, 3]: print(i).

Concepts clés :
• range(1, 4), start inclus, stop exclus, print.

Distinctions clés :
• range(1,4) vs range(4) (0,1,2,3) ; même nombre d'itérations que range(3).

Fonctionnement :
• i=1, print(1) ; i=2, print(2) ; i=3, print(3).

Exécution étape par étape :
1. i=1, print(1).
2. i=2, print(2).
3. i=3, print(3) ; fin.

Ordre des opérations :
• Itération sur 1, 2, 3.

Cas d'utilisation courants :
• Affichage à partir de 1, boucles 1-indexées.

Cas limites :
• range(1, 1) : aucune sortie.

Considérations de performance :
• O(n) pour n = stop - start.

Exemples :
• for i in range(1, 4): print(i)
• # Sortie : 1\\n2\\n3

Remarques :
• range(1, 4) = [1, 2, 3].`,

  1241: `Boucle qui s'exécute une fois puis break — sort immédiatement.

Débutant :
• while True : condition toujours vraie.
• break : sort dès la première itération.
• Une seule exécution du corps (vide ou avec break).

Intermédiaire :
• Pattern : while True: break = une itération puis sortie.
• Le corps peut contenir du code avant le break.

Expert :
• Utile pour structure « faire au moins une fois » (do-while simulé).

Concepts clés :
• while True, break, une itération.

Distinctions clés :
• while True: break vs while False: pass (zéro itération) ; break immédiat.

Fonctionnement :
• Condition True → corps (break) → sortie.

Exécution étape par étape :
1. Évaluer True → True.
2. Exécuter corps ; rencontrer break.
3. Sortie de la boucle.

Ordre des opérations :
• Une entrée, break, sortie.

Cas d'utilisation courants :
• Do-while simulé, boucle avec sortie immédiate possible.

Cas limites :
• while True: pass (sans break) → infini.

Considérations de performance :
• Une itération, coût minimal.

Exemples :
• while True: break  # une itération, rien ne s'exécute avant break
• x = 0; while True: x += 1; break  # x = 1

Remarques :
• Le corps s'exécute au moins une fois avant le break.`,

  1242: `Boucle qui ne s'exécute jamais — corps ignoré.

Débutant :
• while False : la condition est toujours fausse.
• Le corps n'est jamais exécuté.
• pass ou tout autre code : jamais atteint.

Intermédiaire :
• Équivalent à une boucle avec 0 itération.
• La condition est évaluée une fois → False → sortie.

Expert :
• Code mort : le corps peut contenir n'importe quoi, il ne s'exécutera pas.

Concepts clés :
• while False, zéro itération, condition constante.

Distinctions clés :
• while False vs while True: break (une itération) ; condition évaluée une fois.

Fonctionnement :
• Évaluer False → pas d'exécution du corps, sortie immédiate.

Exécution étape par étape :
1. Évaluer False → False.
2. Sortie sans exécuter le corps.
3. Suite du programme.

Ordre des opérations :
• Une évaluation, sortie.

Cas d'utilisation courants :
• Désactiver du code temporairement (while False: ...).

Cas limites :
• while 0 : idem (0 est falsy).

Considérations de performance :
• Une évaluation, O(1).

Exemples :
• while False: print("jamais")  # rien
• while False: pass  # rien

Remarques :
• Pattern rare ; souvent dû à une erreur.`,

  1243: `x = 3 : la boucle incrémente x jusqu'à ce que x < 3 soit faux.

Débutant :
• x = 0 ; while x < 3 : x += 1.
• Itérations : x=0→1, x=1→2, x=2→3.
• Quand x=3, 3 < 3 est False → sortie. x vaut 3.

Intermédiaire :
• Trois itérations ; x passe de 0 à 3.
• += 1 est équivalent à x = x + 1.

Expert :
• Résultat final : x = 3. La condition x < 3 est évaluée avant chaque itération.

Concepts clés :
• while, condition, incrément, variable de boucle.

Distinctions clés :
• x += 1 vs x = x + 1 (équivalents ici) ; while x < 3 vs for x in range(3).

Fonctionnement :
• x=0: 0<3→x=1 ; x=1: 1<3→x=2 ; x=2: 2<3→x=3 ; 3<3→False, sortie.

Exécution étape par étape :
1. x=0, 0<3 True, x=1.
2. x=1, 1<3 True, x=2.
3. x=2, 2<3 True, x=3 ; 3<3 False → fin. x=3.

Ordre des opérations :
• Condition, corps (x += 1), condition, ...

Cas d'utilisation courants :
• Compteur jusqu'à une borne.

Cas limites :
• x = 0; while x < 0: x += 1 → x reste 0 (aucune itération).

Considérations de performance :
• 3 itérations.

Exemples :
• x = 0; while x < 3: x += 1  # x = 3
• Équivalent à for _ in range(3): x += 1 avec x=0 au départ

Remarques :
• x += 1 et x = x + 1 donnent le même résultat ici.`,

  1244: `x = 3 : même résultat que x += 1.

Débutant :
• x = x + 1 fait la même chose que x += 1.
• x passe de 0 à 1, 2, 3.
• Résultat : x = 3.

Intermédiaire :
• += est un opérateur d'affectation augmentée.
• x = x + 1 et x += 1 sont équivalents pour les entiers.

Expert :
• Pour les types mutables (list), += peut modifier en place ; x = x + 1 crée un nouvel objet. Pour int, identique.

Concepts clés :
• x = x + 1, incrément, équivalence avec +=.

Distinctions clés :
• x = x + 1 vs x += 1 (int : même effet) ; pour list : a += b vs a = a + b différent.

Fonctionnement :
• Même déroulement que 1243 : x = 0, 1, 2, 3.

Exécution étape par étape :
1. x=0, 0<3, x = 0+1 = 1.
2. x=1, 1<3, x = 1+1 = 2.
3. x=2, 2<3, x = 2+1 = 3 ; 3<3 False → fin.

Ordre des opérations :
• Condition, x = x + 1, condition, ...

Cas d'utilisation courants :
• Incrément explicite (style plus verbeux).

Cas limites :
• Identique à 1243 pour les entiers.

Considérations de performance :
• Même coût pour int.

Exemples :
• x = 0; while x < 3: x = x + 1  # x = 3
• Équivalent à x += 1

Remarques :
• Pour int, préférer += par concision.`,

  1245: `x = 0 : la condition x < 0 est fausse dès le départ, aucune itération.

Débutant :
• x = 0 ; while x < 0 : x += 1.
• 0 < 0 est False.
• Le corps n'est jamais exécuté. x reste 0.

Intermédiaire :
• Condition fausse dès la première évaluation.
• Équivalent à while False pour ce x initial.

Expert :
• Boucle à zéro itération ; x inchangé.

Concepts clés :
• Condition fausse initialement, zéro itération.

Distinctions clés :
• while x < 0 (0 itérations) vs while x < 1 (1 itération) ; borne inférieure.

Fonctionnement :
• Évaluer 0 < 0 → False ; sortie immédiate ; x = 0.

Exécution étape par étape :
1. x = 0.
2. 0 < 0 ? False.
3. Sortie. x = 0.

Ordre des opérations :
• Une évaluation, sortie.

Cas d'utilisation courants :
• Boucle dont la borne peut être <= valeur initiale.

Cas limites :
• x = -1; while x < 0: x += 1 → une itération, x = 0.

Considérations de performance :
• O(1), une évaluation.

Exemples :
• x = 0; while x < 0: x += 1  # x = 0
• while 0 < 0: pass  # jamais exécuté

Remarques :
• Vérifier que la condition peut être vraie au moins une fois.`,

  1246: `Oui : while peut avoir un bloc else (exécuté si pas de break).

Débutant :
• while cond: ... else: ...
• Le else s'exécute quand la boucle se termine normalement (condition False).
• Si break est exécuté, le else est sauté.

Intermédiaire :
• Même sémantique que for-else.
• else = « la boucle n'a pas été interrompue par break ».

Expert :
• Pattern recherche : while avec break ; else = « non trouvé ».

Concepts clés :
• while-else, sortie normale, pas de break.

Distinctions clés :
• while-else (exécuté si pas de break) vs if-else ; while-else vs for-else.

Fonctionnement :
• Sortie par condition fausse → else exécuté ; sortie par break → else sauté.

Exécution étape par étape :
1. Condition False (sortie normale) → else.
2. break → else ignoré.
3. Suite du programme.

Ordre des opérations :
• Boucle, puis else si pas de break.

Cas d'utilisation courants :
• Recherche avec message « non trouvé » si aucun break.

Cas limites :
• while False: ... else: ... → else exécuté (pas d'itération, pas de break).

Considérations de performance :
• Négligeable.

Exemples :
• x = 0; while x < 3: x += 1
• else: print("done")  # affiche "done"
• while True: break
• else: print("no")  # n'affiche pas

Remarques :
• Le else des while a la même logique que pour for.`,

  1247: `Boucle infinie — ne se termine jamais (sauf break/return).

Débutant :
• Si la condition est toujours True, la boucle ne s'arrête pas.
• Le programme reste bloqué dans la boucle.
• Il faut break, return ou une exception pour sortir.

Intermédiaire :
• Exemple : while True: ... sans break.
• Risque de boucle infinie si la condition ne devient jamais fausse.

Expert :
• Vérifier que la variable de condition est modifiée dans le corps pour atteindre False.

Concepts clés :
• Boucle infinie, condition constante True, blocage.

Distinctions clés :
• while True (infini) vs while x < 10 (fini si x augmente) ; condition qui ne change pas.

Fonctionnement :
• Condition toujours True → corps exécuté indéfiniment.

Exécution étape par étape :
1. True → corps.
2. True → corps.
3. ... (jamais de fin naturelle).

Ordre des opérations :
• Répétition infinie.

Cas d'utilisation courants :
• Serveur, menu, boucle principale avec sortie explicite.

Cas limites :
• while True: break → une itération.

Considérations de performance :
• Blocage si pas de sortie ; consommation CPU.

Exemples :
• while True: pass  # infini
• while 1: ...  # infini (1 est truthy)

Remarques :
• Toujours prévoir une sortie (break, return).`,

  1248: `La boucle ne s'exécute jamais — zéro itération.

Débutant :
• Si la condition est toujours False, le corps n'est jamais exécuté.
• La boucle est « vide ».
• Le programme continue après le while.

Intermédiaire :
• Exemple : while False: ... ou while 0: ...
• Condition évaluée une fois → False → sortie immédiate.

Expert :
• Code mort dans le corps ; équivalent à ne pas avoir de boucle.

Concepts clés :
• Condition fausse, zéro itération, sortie immédiate.

Distinctions clés :
• while False (0 itérations) vs while True (infini) ; condition constante.

Fonctionnement :
• Évaluer condition → False → sortie sans exécuter le corps.

Exécution étape par étape :
1. Évaluer False.
2. Sortie immédiate.
3. Suite du programme.

Ordre des opérations :
• Une évaluation, sortie.

Cas d'utilisation courants :
• Désactiver du code (while False: ...).

Cas limites :
• while 0, while None, while [] : tous falsy, zéro itération.

Considérations de performance :
• O(1), une évaluation.

Exemples :
• while False: print("jamais")  # rien
• x = 5; while x < 0: x += 1  # x reste 5

Remarques :
• Vérifier que la condition peut être vraie si on veut des itérations.`,

  1249: `Oui, mais ça ne change pas l'itération : for reprend la prochaine valeur.

Débutant :
• On peut faire i = 10 dans for i in range(5).
• Mais à l'itération suivante, i prendra la valeur suivante du range (1, 2, 3, 4).
• La modification est « écrasée ».

Intermédiaire :
• La variable de boucle est réaffectée à chaque tour.
• Modifier i ne change pas la séquence parcourue ni le nombre d'itérations.

Expert :
• Déconseillé : source de confusion. Utiliser une autre variable si besoin.

Concepts clés :
• Variable de boucle, réaffectation à chaque itération, séquence inchangée.

Distinctions clés :
• Modifier i (sans effet sur la boucle) vs modifier un élément de liste (affecte la liste) ; for vs while.

Fonctionnement :
• i=0, on peut faire i=99 ; prochain tour : i=1 (valeur suivante du range).

Exécution étape par étape :
1. i=0, corps (i peut être modifié).
2. i=1 (prochaine valeur du range).
3. ... jusqu'à i=4.

Ordre des opérations :
• next() sur l'itérateur, assignation à i, corps.

Cas d'utilisation courants :
• Généralement à éviter ; utiliser une variable séparée.

Cas limites :
• for i in L: i = 0 ne modifie pas L.

Considérations de performance :
• Négligeable.

Exemples :
• for i in range(3): i = 10; print(i)  # 10, 10, 10 (i réaffecté à chaque fois)
• La séquence reste 0, 1, 2.

Remarques :
• Pour modifier une collection, utiliser les indices ou une copie.`,

  1250: `Oui : modifier la variable de condition est le principe du while.

Débutant :
• Dans while x < 3: x += 1, on modifie x pour que la condition devienne fausse.
• C'est nécessaire pour éviter une boucle infinie.
• Sans modification, la boucle ne s'arrêterait jamais (si condition vraie).

Intermédiaire :
• La variable de condition doit être mise à jour dans le corps.
• C'est la différence avec for : le programmeur gère la progression.

Expert :
• Oublier de modifier la variable → boucle infinie. Toujours s'assurer que la condition peut devenir fausse.

Concepts clés :
• Variable de condition, modification dans le corps, progression vers la sortie.

Distinctions clés :
• while (on modifie la condition) vs for (Python gère) ; modification requise vs automatique.

Fonctionnement :
• x=0, x<3 True, x+=1 → x=1 ; ... ; x=3, x<3 False → sortie.

Exécution étape par étape :
1. Évaluer x < 3.
2. Si True : corps (x += 1).
3. Retour à 1 ; si False, sortie.

Ordre des opérations :
• Condition, corps (modification), condition, ...

Cas d'utilisation courants :
• Compteurs, convergence, lecture jusqu'à sentinelle.

Cas limites :
• Modifier une variable qui n'affecte pas la condition → boucle infinie.

Considérations de performance :
• Dépend du corps et de la condition.

Exemples :
• x = 0; while x < 3: x += 1  # x modifié, boucle termine
• x = 0; while x < 3: pass  # x jamais modifié → infini

Remarques :
• La modification de la variable de condition est essentielle au while.`,
};
