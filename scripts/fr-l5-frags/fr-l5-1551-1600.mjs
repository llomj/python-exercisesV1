/** Level 5 FR 1551–1600 — level5.ts questions 51–100 (index/count through len of concat). */
export default {
  1551: `La bonne réponse est « 1 » : sur [1, 2, 3], la méthode index(2) renvoie l’indice de la première occurrence de 2, soit la position 1 (le deuxième élément).

Débutant :
• Les indices commencent à 0 : 1 est à l’index 0, 2 à l’index 1.
• index(valeur) parcourt la liste du début et s’arrête à la première correspondance.

Intermédiaire :
• Si la valeur est absente, ValueError est levée (contrairement à count qui renvoie 0).
• Des formes index(valeur, start) et index(valeur, start, stop) limitent la fenêtre de recherche.

Expert :
• La complexité est linéaire dans le pire cas ; pour des recherches répétées sur de gros tableaux, un dict ou un index inversé peut être préférable.

Concepts clés :
• Méthode list.index ; première occurrence ; indices 0-based.

Distinctions clés :
• index → position ; count → nombre d’occurrences ; in → test d’appartenance booléen.

Fonctionnement :
• Python compare chaque élément à la cible jusqu’à égalité, puis renvoie l’indice trouvé.

Exécution étape par étape :
1. Liste [1, 2, 3] ; cible 2.
2. Index 0 : 1 ≠ 2 ; index 1 : 2 == 2 → renvoyer 1.

Ordre des opérations :
• L’appel de méthode s’évalue après la création de la liste littérale.

Cas d'utilisation courants :
• Retrouver la position d’un élément connu ; valider l’ordre avant traitement.

Cas limites :
• Doublons : seule la première position est renvoyée ; valeur absente → exception.

Considérations de performance :
• O(n) dans le pire cas sur une liste simple.

Exemples :
• [10, 20, 30].index(30) → 2.

Remarques :
• Vérifiez souvent avec if x in lst avant index(x) pour éviter ValueError.`,

  1552: `La bonne réponse est « 1 » : dans [1, 2, 2, 3], index(2) renvoie toujours l’indice de la première occurrence, ici 1 ; le 2 suivant à l’index 2 est ignoré.

Débutant :
• index ne « compte » pas toutes les positions ; il s’arrête au premier 2 trouvé.

Intermédiaire :
• Pour la « prochaine » occurrence, utilisez index(2, start) en repartant après la position trouvée.

Expert :
• Pour toutes les positions, une boucle ou une liste en compréhension avec enumerate est adaptée.

Concepts clés :
• Première occurrence ; liste avec doublons.

Distinctions clés :
• index(2) ≠ « liste des indices » ; count(2) donnerait 2 ici.

Fonctionnement :
• Parcours séquentiel depuis l’index 0 jusqu’à match.

Exécution étape par étape :
1. Indices 0..1 : valeur 2 trouvée à 1 → retour 1 immédiat.

Ordre des opérations :
• Évaluation de la liste, puis appel index(2).

Cas d'utilisation courants :
• Dédupliquer ou analyser la première apparition d’un marqueur.

Cas limites :
• Plusieurs occurrences identiques : comportement identique, seul le premier indice compte.

Considérations de performance :
• Même coût asymptotique que pour une liste sans doublon jusqu’au premier match.

Exemples :
• [2, 2, 2].index(2) → 0.

Remarques :
• Notez la différence pédagogique avec count sur la même liste (ici count serait 2).`,

  1553: `La bonne réponse est « 1 » : count(2) sur [1, 2, 3] compte combien de fois 2 apparaît, une seule fois.

Débutant :
• count renvoie un entier ≥ 0 ; jamais d’exception pour valeur absente (0).

Intermédiaire :
• Égalité au sens == : 2 et 2.0 comptent comme la même valeur pour les entiers/flottants usuels.

Expert :
• count utilise l’égalité des éléments ; objets personnalisés suivent __eq__.

Concepts clés :
• Méthode list.count ; dénombrement d’occurrences.

Distinctions clés :
• count → cardinal ; index → première position ; in → existence booléenne.

Fonctionnement :
• Parcours complet de la liste et incrémentation du compteur sur chaque égalité.

Exécution étape par étape :
1. Parcourir 1, 2, 3 ; un seul égal à 2 → total 1.

Ordre des opérations :
• Liste construite puis count appelé.

Cas d'utilisation courants :
• Fréquences, votes, validation de données catégorielles.

Cas limites :
• Liste vide : count(x) → 0 pour tout x.

Considérations de performance :
• O(n) : tout le contenu est parcouru.

Exemples :
• [2, 2, 2].count(2) → 3.

Remarques :
• Pour de très grandes données répétitives, un Counter peut être plus expressif.`,

  1554: `La bonne réponse est « 2 » : sur [1, 2, 2, 3], count(2) additionne les deux occurrences aux indices 1 et 2.

Débutant :
• Contrairement à index, count ne s’arrête pas au premier 2 ; il parcourt toute la liste.

Intermédiaire :
• count(2) vaut 2 alors que index(2) reste 1 (première seulement).

Expert :
• Les occurrences peuvent être non contiguës ; count les agrège toutes.

Concepts clés :
• Occurrences multiples ; dénombrement total.

Distinctions clés :
• Toujours distinguer « première position » et « nombre total ».

Fonctionnement :
• Itération sur chaque élément et test d’égalité avec l’argument.

Exécution étape par étape :
1. Éléments : 1 (non), 2 (oui, 1), 2 (oui, 2), 3 (non) → 2.

Ordre des opérations :
• Pas de court-circuit pédagogique : tout est visité.

Cas d'utilisation courants :
• Statistiques sur séries avec répétitions (notes, tags).

Cas limites :
• Valeur jamais présente → 0.

Considérations de performance :
• Linéaire en la taille de la liste.

Exemples :
• [1, 2, 2, 2, 3].count(2) → 3.

Remarques :
• C’est l’exemple canonique pour contraster index et count sur doublons.`,

  1555: `La bonne réponse est « 0 » : [1, 2, 3].count(5) est 0 car 5 n’apparaît pas ; count ne lève pas d’erreur.

Débutant :
• 0 signifie « aucune occurrence », pas une erreur.

Intermédiaire :
• Ne pas confondre avec index(5) qui lèverait ValueError.

Expert :
• count est « sûr » pour tester la présence avec > 0, mais in est plus idiomatique pour un booléen.

Concepts clés :
• Résultat 0 ; absence de valeur.

Distinctions clés :
• count vs index sur valeur manquante.

Fonctionnement :
• Parcours complet sans match → compteur final 0.

Exécution étape par étape :
1. Comparer 5 à 1, 2, 3 ; aucune égalité → 0.

Ordre des opérations :
• Évaluation de la liste puis de count(5).

Cas d'utilisation courants :
• Files de validation, comptage optionnel de clés rares.

Cas limites :
• Liste vide : count quoi que ce soit → 0.

Considérations de performance :
• Toujours O(n) car le parcours est complet.

Exemples :
• [].count(0) → 0.

Remarques :
• Préférez x in lst pour un test booléen rapide à lire.`,

  1556: `La bonne réponse est « ValueError » : list.index sur une valeur absente lève ValueError (message du type x not in list).

Débutant :
• Ce n’est ni None ni -1 : Python signale explicitement l’absence par une exception.

Intermédiaire :
• Encapsuler avec try/except ou tester if valeur in liste avant index.

Expert :
• ValueError est le type standard pour « valeur incorrecte ou absente » dans cette API.

Concepts clés :
• Exception ; contrat de index.

Distinctions clés :
• count renvoie 0 ; index lève ; opérateur in renvoie False.

Fonctionnement :
• Recherche jusqu’à la fin de la liste ; échec → lever l’exception.

Exécution étape par étape :
1. Parcourir [1, 2, 3] à la recherche de 5 ; fin de liste sans succès → ValueError.

Ordre des opérations :
• L’expression index est une opération qui peut interrompre le flux normal.

Cas d'utilisation courants :
• Invariants stricts : échec immédiat si donnée obligatoire manquante.

Cas limites :
• Liste vide : toute index(v) absente lève.

Considérations de performance :
• Échec après O(n) dans le pire cas.

Exemples :
• [1, 2, 3].index(1) → 0 ; .index(99) → ValueError.

Remarques :
• Pour les débutants, c’est le piège classique par rapport aux langages qui renvoient -1.`,

  1557: `La bonne réponse est « 1 » : [1, 2, 3].index(2, 1) cherche 2 en commençant à l’index 1 (inclus) ; le 2 est bien à l’index 1.

Débutant :
• Le second argument est la position de départ ; la recherche inclut cette case.

Intermédiaire :
• index(2, 0) donnerait aussi 1 ici ; le start sert surtout quand on veut sauter un préfixe.

Expert :
• start peut être négatif (interprété comme pour le slicing) selon les versions ; restez sur des starts ≥ 0 pour la clarté.

Concepts clés :
• index(valeur, start) ; fenêtre à partir de start.

Distinctions clés :
• Sans start, même résultat ici ; avec doublons, start change quelle occurrence est trouvée.

Fonctionnement :
• Parcours à partir de l’indice start jusqu’à trouver ou échouer.

Exécution étape par étape :
1. start=1 ; case 1 vaut 2 → retour 1.

Ordre des opérations :
• Arguments évalués de gauche à droite : valeur puis start.

Cas d'utilisation courants :
• Ignorer un en-tête connu avant de chercher la prochaine occurrence.

Cas limites :
• Si la valeur n’existe qu’avant start, ValueError même si elle existe plus tôt dans la liste.

Considérations de performance :
• Dans le pire cas, toujours linéaire sur la partie parcourue.

Exemples :
• [1, 2, 2, 3].index(2, 2) → 2 (on saute le premier 2).

Remarques :
• Très utile pour simuler « occurrences suivantes » sans regex.`,

  1558: `La bonne réponse est « 2 » : [1, 2, 2, 3].index(2, 2) commence à l’index 2 ; on ignore le 2 à l’index 1 et on trouve le suivant à l’index 2.

Débutant :
• Les positions avant start sont invisibles pour cet appel.

Intermédiaire :
• C’est la manière idiomatique d’obtenir la « deuxième » occurrence après avoir localisé la première.

Expert :
• Pour enchaîner plusieurs recherches, boucle avec pos = lst.index(x, pos+1) jusqu’à ValueError.

Concepts clés :
• Start inclus ; deuxième occurrence.

Distinctions clés :
• index(2) → 1 ; index(2, 2) → 2 sur cette liste.

Fonctionnement :
• Scan à partir de l’indice 2 : premier 2 rencontré est à l’index 2.

Exécution étape par étape :
1. Indices 0–1 ignorés par le start ; à l’index 2, valeur 2 → retour 2.

Ordre des opérations :
• start fixe le point d’entrée du scan.

Cas d'utilisation courants :
• Parser des champs répétés, journaux avec marqueurs dupliqués.

Cas limites :
• Si aucun 2 après start, ValueError.

Considérations de performance :
• Coût proportionnel au nombre d’éléments examinés après start.

Exemples :
• [0, 2, 2].index(2, 1) → 1 ou 2 selon la liste exacte ; ici focus sur [1,2,2,3].

Remarques :
• Retenez le schéma « start = dernière_position_trouvée + 1 » pour enchaîner.`,

  1559: `La bonne réponse est « 1 » : index(2, 1, 3) cherche 2 dans la demi-intervalle d’indices [1, 3), donc indices 1 et 2 seulement ; le premier 2 est à l’index 1.

Débutant :
• stop est exclus, comme en découpage lst[start:stop].

Intermédiaire :
• La même règle [start, stop) s’applique ; l’index 3 n’est pas visité.

Expert :
• Trois arguments = recherche bornée ; pratique pour traiter des « segments » sans copier.

Concepts clés :
• index(valeur, start, stop) ; stop exclus.

Distinctions clés :
• Sans stop, on parcourt jusqu’à la fin ; avec stop, fenêtre stricte.

Fonctionnement :
• Itération des indices start ≤ i < stop ; premier match renvoie i.

Exécution étape par étape :
1. Fenêtre [1,3) : cases 1 puis 2 ; match à 1 avec valeur 2 → 1.

Ordre des opérations :
• start et stop calculés puis recherche bornée.

Cas d'utilisation courants :
• Chercher dans une fenêtre glissante sans sous-lister.

Cas limites :
• Si la valeur n’est que hors [start, stop), ValueError même si elle existe ailleurs.

Considérations de performance :
• Au plus (stop - start) comparaisons.

Exemples :
• [1, 2, 3].index(3, 0, 3) → 2 ; .index(3, 0, 2) → erreur.

Remarques :
• Pensez « slicing mental » pour mémoriser l’exclusivité de stop.`,

  1560: `La bonne réponse est « ValueError » : index(2, 0, 1) ne regarde que l’index 0 (car stop=1 exclus) ; la case 0 vaut 1, donc 2 est introuvable dans la fenêtre.

Débutant :
• Même si 2 est dans la liste globale, la fenêtre [0,1) est trop étroite.

Intermédiaire :
• Confusion fréquente : « 2 est dans la liste » mais pas dans le sous-intervalle demandé.

Expert :
• Cela illustre que index à trois arguments est une recherche locale, pas globale.

Concepts clés :
• Fenêtre vide de résultat ; ValueError.

Distinctions clés :
• index(2) trouverait 1 ; index(2,0,1) échoue.

Fonctionnement :
• Un seul indice candidat (0) ; pas de match → exception.

Exécution étape par étape :
1. Indices parcourus : uniquement 0 ; valeur 1 ≠ 2 → ValueError.

Ordre des opérations :
• Évaluation des trois arguments puis recherche bornée.

Cas d'utilisation courants :
• Déboguer des tranches où l’on « sait » qu’un élément devrait être présent.

Cas limites :
• start == stop : fenêtre vide → ValueError systématique pour toute valeur.

Considérations de performance :
• Très peu de comparaisons ici, mais le coût reste O(taille fenêtre).

Exemples :
• [1, 2, 3].index(2, 1, 2) → ValueError (fenêtre [1,2) ne contient pas 2).

Remarques :
• Dessinez la liste et encadrez [start, stop) pour éviter l’erreur.`,

  1561: `La bonne réponse est « [1, 2, 3] » : sorted([3, 1, 2]) renvoie une nouvelle liste triée par ordre croissant, sans modifier l’original.

Débutant :
• sorted est une fonction built-in ; le résultat est toujours une liste (pour un itérable d’entrée standard).

Intermédiaire :
• Tri stable en Python : éléments égaux gardent l’ordre relatif d’origine.

Expert :
• Le tri utilise TimSort ; performances bonnes sur données déjà partiellement ordonnées.

Concepts clés :
• sorted ; nouvelle liste ; ordre croissant par défaut.

Distinctions clés :
• sorted ≠ .sort() : la méthode modifie sur place et renvoie None.

Fonctionnement :
• Construction d’une nouvelle séquence triée à partir des éléments de l’itérable.

Exécution étape par étape :
1. Entrée [3,1,2] ; comparaisons ; sortie [1,2,3].

Ordre des opérations :
• Appel de fonction : argument liste évalué puis tri.

Cas d'utilisation courants :
• Affichage, tests, pipelines sans effet de bord sur la source.

Cas limites :
• Éléments non comparables entre eux → TypeError.

Considérations de performance :
• O(n log n) en général.

Exemples :
• sorted([2, 2, 1]) → [1, 2, 2].

Remarques :
• Gardez sorted pour l’immutabilité logique des données source.`,

  1562: `La bonne réponse est « [3, 2, 1] » : sorted([3, 1, 2], reverse=True) trie en ordre décroissant.

Débutant :
• reverse=True inverse l’ordre final après le tri « normal ».

Intermédiaire :
• On peut aussi trier croissant puis [::-1], mais reverse=True évite une copie supplémentaire dans certains usages.

Expert :
• Combiner reverse=True avec key= pour des tris multi-critères.

Concepts clés :
• Paramètre reverse ; tri décroissant.

Distinctions clés :
• reverse sur sorted inverse le résultat ; ce n’est pas un tri abs sur valeurs absolues.

Fonctionnement :
• Tri selon les clés puis inversion de l’ordre des positions si reverse=True.

Exécution étape par étape :
1. Données 3,1,2 ; ordre décroissant attendu → 3,2,1.

Ordre des opérations :
• Évaluation liste, puis reverse flag, puis tri.

Cas d'utilisation courants :
• Classements « top » ; dates les plus récentes en premier avec clé adaptée.

Cas limites :
• Même contraintes de comparabilité qu’un tri classique.

Considérations de performance :
• Même ordre asymptotique qu’un tri sans reverse.

Exemples :
• sorted([1], reverse=True) → [1].

Remarques :
• Lisez reverse comme « plus grand d’abord » pour des nombres.`,

  1563: `La bonne réponse est « None » : la méthode list.sort() trie la liste en place et renvoie explicitement None.

Débutant :
• Ne faites pas x = lst.sort() en espérant une liste : x sera None.

Intermédiaire :
• La liste originale est réordonnée ; références existantes voient le nouvel ordre.

Expert :
• Tri en place peut réduire la pression mémoire vs sorted qui alloue une nouvelle liste.

Concepts clés :
• sort in-place ; retour None.

Distinctions clés :
• sorted(données) nouvelle liste ; données.sort() mutation.

Fonctionnement :
• Algorithme de tri sur le buffer interne de la liste.

Exécution étape par étape :
1. [3,1,2].sort() modifie l’objet liste en [1,2,3] ; valeur de l’expression : None.

Ordre des opérations :
• Accès attribut sort puis appel.

Cas d'utilisation courants :
• Optimisation in-memory ; APIs qui mutent une structure partagée.

Cas limites :
• Éléments non comparables → TypeError ; liste vide → reste vide, None quand même.

Considérations de performance :
• Pas de nouvelle liste allouée pour le résultat (hors travail interne).

Exemples :
• a = [2,1] ; a.sort() ; a → [1,2].

Remarques :
• C’est l’un des pièges classiques des quiz « quelle est la valeur de l’expression ? ».`,

  1564: `La bonne réponse est « None » : list.reverse() inverse la liste sur place et renvoie None.

Débutant :
• Comme sort(), reverse() mute ; pas de nouvelle liste renvoyée.

Intermédiaire :
• Pour une copie inversée sans mutation, utilisez slicing [::-1] ou reversed + list.

Expert :
• reverse() est O(n) et en place ; utile quand toutes les références doivent voir l’inverse.

Concepts clés :
• Mutation ; None ; ordre inversé.

Distinctions clés :
• reversed() itérateur paresseux ; [::-1] nouvelle liste ; .reverse() None + effet de bord.

Fonctionnement :
• Permutation des éléments pour refléter l’ordre miroir.

Exécution étape par étape :
1. [3,1,2].reverse() → liste [2,1,3] ; expression None.

Ordre des opérations :
• Méthode sur l’objet liste existant.

Cas d'utilisation courants :
• Piles, historiques affichés dernier en premier sur la même structure.

Cas limites :
• Liste vide ou un élément : opération triviale, toujours None.

Considérations de performance :
• Linéaire en n.

Exemples :
• a=[1] ; a.reverse() ; a → [1].

Remarques :
• Retenez le duo sort/reverse : tous deux « procédure » Python (None).`,

  1565: `La bonne réponse est l’option qui dit que sort() modifie sur place tandis que sorted() renvoie une nouvelle liste.

Débutant :
• sorted ne change pas votre variable liste si vous ne réaffectez pas ; sort change l’objet existant.

Intermédiaire :
• Les deux acceptent key= et reverse=, mais la sémantique de retour diffère.

Expert :
• Choisir sort pour effets localisés et caches chauds ; sorted pour expressions fonctionnelles et enchaînements.

Concepts clés :
• In-place vs nouvelle valeur ; None vs liste.

Distinctions clés :
• Évitez sorted(lst).sort() : inutile et piégeux.

Fonctionnement :
• sorted construit ; sort réarrange le tampon existant.

Exécution étape par étape :
1. Comparer les effets sur l’identité id(liste) et le retour de fonction.

Ordre des opérations :
• N/A conceptuel ; distinction d’API.

Cas d'utilisation courants :
• Données partagées → attention au sort mutateur ; données immuables préfèrent sorted.

Cas limites :
• Tuple : pas de .sort() ; utiliser sorted(tuple).

Considérations de performance :
• Coût mémoire supérieur pour sorted.

Exemples :
• b = sorted(a) laisse a intact si a est une liste.

Remarques :
• Question-type pour valider la lecture de la documentation officielle.`,

  1566: `La bonne réponse est « list_reverseiterator object » : reversed([1, 2, 3]) renvoie un itérateur inversé, pas une liste matérialisée.

Débutant :
• Afficher l’objet montre un type iterator ; list(...) le matérialise.

Intermédiaire :
• Un itérateur se consomme une fois ; re-parcourir recrée un nouvel reversed.

Expert :
• Économie mémoire sur grosses séquences vs [::-1] qui duplique.

Concepts clés :
• reversed ; itérateur ; paresse.

Distinctions clés :
• reversed vs [::-1] vs .reverse().

Fonctionnement :
• Objet qui se souvient de la séquence et parcourt les indices à rebours à la demande.

Exécution étape par étape :
1. Appel reversed → allocation iterator ; pas encore de liste [3,2,1].

Ordre des opérations :
• reversed prend l’itérable après évaluation de la liste.

Cas d'utilisation courants :
• boucles for x in reversed(data) sans copie complète.

Cas limites :
• Itérable infini ou custom : comportement défini par __reversed__ ou séquence.

Considérations de performance :
• Pas de copie immédiate de n éléments.

Exemples :
• next(iter(reversed([1,2]))) → 2.

Remarques :
• C’est la réponse attendue dans les QCM qui testent le type exact.`,

  1567: `La bonne réponse est « [3, 2, 1] » : list(reversed([1, 2, 3])) consomme l’itérateur inversé et construit une nouvelle liste.

Débutant :
• list() « aspire » tous les éléments de l’itérateur dans l’ordre produit.

Intermédiaire :
• Nouvelle liste distincte de l’originale ; l’originale [1,2,3] inchangée.

Expert :
• Double étape : création iterator + allocation liste ; coût mémoire O(n).

Concepts clés :
• Conversion iterator → list ; ordre inversé.

Distinctions clés :
• Sans list(), vous gardez l’objet iterator.

Fonctionnement :
• Itération jusqu’à StopIteration en poussant chaque élément dans la liste résultat.

Exécution étape par étape :
1. reversed produit 3, puis 2, puis 1 ; list agrège → [3,2,1].

Ordre des opérations :
• reversed d’abord, constructeur list ensuite.

Cas d'utilisation courants :
• Besoin d’indexation ou de len sur une version inversée.

Cas limites :
• reversed sur liste vide → [].

Considérations de performance :
• Similaire à [::-1] pour le coût asymptotique de construction.

Exemples :
• list(reversed([1])) → [1].

Remarques :
• Choix de style : [::-1] souvent plus court à lire.`,

  1568: `La bonne réponse est l’option qui dit que [::-1] renvoie une liste tandis que reversed() renvoie un itérateur.

Débutant :
• Tranche avec pas -1 crée tout de suite une nouvelle liste complète.

Intermédiaire :
• reversed est paresseux ; list() ou boucle pour matérialiser.

Expert :
• Pour très grandes listes, reversed + traitement flux peut éviter le pic mémoire de [::-1].

Concepts clés :
• Slicing ; type de retour ; évaluation paresseuse vs immédiate.

Distinctions clés :
• Les deux parcourent en ordre inverse conceptuel, mais pas le même type ni le même moment d’allocation.

Fonctionnement :
• Slicing : copie selon le pas ; reversed : objet itérateur sans copie immédiate.

Exécution étape par étape :
1. [::-1] alloue n éléments ; reversed retourne immédiatement un iterator léger.

Ordre des opérations :
• Sous-expressions de la slice vs appel fonction reversed.

Cas d'utilisation courants :
• API exigeant list → slice ou list(reversed).

Cas limites :
• Itérables non séquentiels : [::-1] nécessite une séquence ; reversed fonctionne sur tout itérable avec __reversed__ ou séquence.

Considérations de performance :
• [::-1] coût mémoire O(n) garanti pour la nouvelle liste.

Exemples :
• type([1,2][::-1]) est list ; type(reversed([1,2])) est list_reverseiterator.

Remarques :
• Question centrale pour comprendre l’écosystème « inversion » en Python.`,

  1569: `La bonne réponse est « ['a', 'b', 'c'] » : sorted trie les chaînes selon l’ordre Unicode/ASCII (ici ordre alphabétique simple minuscules).

Débutant :
• sorted renvoie une nouvelle liste ; l’entrée ['c','a','b'] n’est pas modifiée.

Intermédiaire :
• Majuscules vs minuscules : 'A' < 'a' en Unicode ; attention aux clés de tri.

Expert :
• Utiliser key=str.lower pour un tri insensible à la casse.

Concepts clés :
• sorted sur str ; ordre lexicographique.

Distinctions clés :
• Tri de chaînes ≠ tri numérique de caractères isolés sans contexte.

Fonctionnement :
• Comparaisons pairwise selon les points de code jusqu’à ordre total.

Exécution étape par étape :
1. Comparer 'a','b','c' ; ordre croissant → ['a','b','c'].

Ordre des opérations :
• sorted lit l’itérable puis produit la liste triée.

Cas d'utilisation courants :
• Menus, index, fichiers, clés de configuration.

Cas limites :
• Mélange types incomparables str/int → erreur.

Considérations de performance :
• O(n log n) sur le nombre de chaînes.

Exemples :
• sorted(['b','a']) → ['a','b'].

Remarques :
• Pour l’utilisateur francophone, attention aux accents : l’ordre brut Unicode peut surprendre.`,

  1570: `La bonne réponse est « [3, 2, 1] » : key=lambda x: -x trie par les opposés, ce qui inverse l’ordre numérique pour des entiers.

Débutant :
• Les clés comparées sont -3, -1, -2 ; l’ordre croissant des clés donne 3, puis 2, puis 1 pour les originaux.

Intermédiaire :
• Équivalent conceptuel à reverse=True sur des entiers simples, mais key reste utile pour des critères composites.

Expert :
• Attention aux NaN flottants : comparaisons peuvent casser la totalité de l’ordre.

Concepts clés :
• Paramètre key ; tri par transformation.

Distinctions clés :
• key ne modifie pas les éléments stockés dans la liste résultat.

Fonctionnement :
• Calcul de clé pour chaque élément ; tri stable sur ces clés.

Exécution étape par étape :
1. Clés : -3,-1,-2 ; tri croissant des clés → positions [3,2,1].

Ordre des opérations :
• lambda appelée plusieurs fois par élément (implémentation optimisée en C mais conceptuellement par clé).

Cas d'utilisation courants :
• Trier des tuples par second membre, des objets par attribut.

Cas limites :
• Overflow rare sur entiers Python illimités ; pas un souci pédagogique ici.

Considérations de performance :
• Coût des appels key ; négligeable pour n petit.

Exemples :
• sorted([1,2,3], key=lambda x: -x) → [3,2,1].

Remarques :
• Montre que reverse=True n’est pas le seul chemin vers un ordre décroissant.`,

  1571: `La bonne réponse est « [1, 2, 3] » : copy() produit une copie superficielle — nouvelle liste, mêmes éléments.

Débutant :
• Pour des nombres immuables, copie superficielle = indépendance totale visuelle.

Intermédiaire :
• Si les éléments étaient mutables (sous-listes), ils seraient partagés.

Expert :
• copy.copy au niveau module fait analogue pour les listes.

Concepts clés :
• list.copy ; shallow copy ; nouvel id pour la liste.

Distinctions clés :
• copy vs référence simple b = a.

Fonctionnement :
• Allocation d’un nouveau tableau de pointeurs vers les mêmes objets éléments.

Exécution étape par étape :
1. Nouvelle liste ; remplissage avec références aux int 1,2,3.

Ordre des opérations :
• Méthode sur l’objet liste source.

Cas d'utilisation courants :
• Dupliquer avant append/extend sans toucher la source.

Cas limites :
• Liste vide → [] copié.

Considérations de performance :
• O(n) pour la taille de la liste.

Exemples :
• a=[1,2]; b=a.copy(); b[0]=99 → a inchangé.

Remarques :
• Première étape avant d’introduire deepcopy sur structures imbriquées.`,

  1572: `La bonne réponse est « [1, 2, 3] » : list([1, 2, 3]) construit une nouvelle liste shallow à partir de l’itérable donné.

Débutant :
• Le constructeur list « copie » souvent une liste existante en pratique pédagogique.

Intermédiaire :
• Fonctionne aussi sur tuples, chaînes, range — polymorphisme du constructeur.

Expert :
• list(it) matérialise tout itérateur fini ; attention aux générateurs infinis.

Concepts clés :
• Constructeur list ; copie superficielle depuis une liste.

Distinctions clés :
• list(d) vs d.copy() vs d[:] — trois idiomes proches.

Fonctionnement :
• Itération sur l’argument et append logique dans la nouvelle structure.

Exécution étape par étape :
1. Itérer 1,2,3 depuis la liste source ; construire nouvelle liste identique en valeurs.

Ordre des opérations :
• Évaluation de l’argument puis appel list.

Cas d'utilisation courants :
• Normaliser un itérable en liste mutable.

Cas limites :
• None n’est pas itérable → TypeError.

Considérations de performance :
• Linéaire en la longueur.

Exemples :
• list((1,2)) → [1,2].

Remarques :
• Bon rappel : « conversion » et « copie » se confondent souvent pour les listes.`,

  1573: `La bonne réponse est « [1, 2, 3] » : la tranche [:] copie toute la liste (shallow copy idiomatique).

Débutant :
• [:] signifie du début à la fin avec le pas par défaut 1.

Intermédiaire :
• Même sémantique de copie superficielle que copy() pour une liste plate.

Expert :
• En micro-optimisation, lisibilité : copy() est plus explicite pour les débutants.

Concepts clés :
• Slicing ; copie complète ; nouvel objet liste.

Distinctions clés :
• lst[:] vs lst : la seconde est une autre référence, pas une copie.

Fonctionnement :
• Création d’une nouvelle liste avec slice assign logic.

Exécution étape par étape :
1. Indices implicites start=None, stop=None → tous les éléments copiés.

Ordre des opérations :
• Expression slice appliquée à la liste après création de celle-ci.

Cas d'utilisation courants :
• Cloner rapidement avant mutation dans du code ancien.

Cas limites :
• Liste vide → [] copié.

Considérations de performance :
• O(n) temps et espace pour la nouvelle liste.

Exemples :
• a=[1]; b=a[:]; b.append(2) → a reste [1].

Remarques :
• Idiome historique Python 2 encore valide et courant.`,

  1574: `La bonne réponse est l’option qui dit qu’une copie superficielle duplique l’enveloppe mais partage le contenu imbriqué, alors qu’une copie profonde duplique aussi les objets internes.

Débutant :
• Sur [1,2,3] seul, shallow et deep « ressemblent » ; la différence apparaît avec des listes dans la liste.

Intermédiaire :
• copy.copy vs copy.deepcopy du module copy.

Expert :
• deepcopy gère cycles, références partagées et certains types spéciaux via le registre _memo.

Concepts clés :
• Shallow vs deep ; partage de références internes.

Distinctions clés :
• Indépendance de la liste externe ≠ indépendance des sous-objets.

Fonctionnement :
• Shallow : nouvelle liste, pointeurs vers mêmes sous-objets ; deep : récursion de duplication.

Exécution étape par étape :
1. Visualiser boîtes et flèches : shallow duplique la boîte externe, pas les boîtes internes.

Ordre des opérations :
• Conceptuel ; choix d’API avant mutation.

Cas d'utilisation courants :
• Graphes, JSON nested, matrices comme listes de listes.

Cas limites :
• Objets non copiables (locks, fichiers ouverts) compliquent deepcopy.

Considérations de performance :
• Deepcopy peut être coûteux sur grosses structures.

Exemples :
• Voir questions suivantes avec [[1],[2]].

Remarques :
• Question fondamentale avant d’écrire des mutateurs sur données hiérarchiques.`,

  1575: `La bonne réponse est « [1, 2, 3] (shallow copy) » : copy.copy sur une liste plate produit une nouvelle liste avec les mêmes éléments.

Débutant :
• import copy puis copy.copy(lst) est la forme explicite module-level.

Intermédiaire :
• Pour une liste de nombres, comportement perçu identique à lst.copy().

Expert :
• copy.copy délègue à __copy__ s’il existe sur le type.

Concepts clés :
• Module copy ; fonction copy.copy ; shallow.

Distinctions clés :
• copy.copy ≠ assignment ; ≠ deepcopy.

Fonctionnement :
• Dispatch vers l’implémentation de copie superficielle du type liste.

Exécution étape par étape :
1. Après import, copy.copy reçoit [1,2,3] ; nouvelle liste allouée.

Ordre des opérations :
• import s’exécute ; puis appel copy.copy (dans l’énoncé du quiz, considéré comme disponible).

Cas d'utilisation courants :
• Copier des structures hétérogènes shallow quand seuls les conteneurs de premier niveau doivent diverger.

Cas limites :
• Sans import copy, NameError — ici l’énoncé le suppose.

Considérations de performance :
• Comparable à list.copy.

Exemples :
• copy.copy([[1]]) : la liste interne [1] est partagée.

Remarques :
• L’intitulé du quiz lie import et expression ; retenez l’effet shallow.`,

  1576: `La bonne réponse est « [1, 2, 3] (deep copy) » : deepcopy sur une liste plate se comporte comme shallow car il n’y a rien à cloner en profondeur au-delà des immuables.

Débutant :
• Valeurs affichées identiques ; la nuance apparaît sur structures imbriquées.

Intermédiaire :
• deepcopy garantit l’indépendance récursive des objets mutables contenus.

Expert :
• deepcopy conserve le graphe : objets partagés le restent dans la copie.

Concepts clés :
• deepcopy ; récursion ; indépendance nested.

Distinctions clés :
• deepcopy plus lourd mais sûr pour arbres/listes de listes.

Fonctionnement :
• Traversée récursive avec mémo pour cycles.

Exécution étape par étape :
1. Liste plate : création nouvelle liste, éléments immuables référencés comme avant.

Ordre des opérations :
• import copy puis deepcopy.

Cas d'utilisation courants :
• Cloner des configurations JSON-like avant modification destructive.

Cas limites :
• Récursion très profonde possible → récursion limit.

Considérations de performance :
• Sur gros graphes, coût mémoire et temps supérieur à shallow.

Exemples :
• Voir Q sur [[1],[2]] pour l’effet visible.

Remarques :
• Même résultat visible ici ne signifie pas équivalence sémantique générale.`,

  1577: `La bonne réponse est « [1, 2, 3] » : b = a lie b au même objet liste ; b.append(3) mute cette liste partagée, donc a la voit aussi.

Débutant :
• Les noms a et b sont deux étiquettes sur une seule liste en mémoire.

Intermédiaire :
• is vérifierait a is b True ici.

Expert :
• Modèle « noms pointent vers objets » : piège classique en Python.

Concepts clés :
• Référence ; mutation ; append in-place.

Distinctions clés :
• b = a vs b = a.copy().

Fonctionnement :
• append redimensionne le tableau sous-jacent de la liste partagée.

Exécution étape par étape :
1. Créer [1,2] ; a pointe dessus ; b pointe dessus ; append(3) → [1,2,3] ; a lit cette liste.

Ordre des opérations :
• Assignations gauche à droite puis append.

Cas d'utilisation courants :
• Partage intentionnel de buffers ; bugs si copie oubliée.

Cas limites :
• Réassigner b = [] ne change pas a sans mutation explicite de l’ancien objet.

Considérations de performance :
• Pas de copie : O(1) amortized append.

Exemples :
• Deux variables, une liste : un seul append suffit à les « synchroniser ».

Remarques :
• Toujours se demander « est-ce une copie ou un alias ? » avant de muter.`,

  1578: `La bonne réponse est « [1, 2] » : b = a.copy() crée une liste distincte ; append sur b n’affecte pas a.

Débutant :
• Deux listes séparées ; append ne touche qu’à b.

Intermédiaire :
• id(a) != id(b) après copy.

Expert :
• Si les éléments étaient mutables partagés, a pourrait encore être affecté indirectement.

Concepts clés :
• Copie superficielle ; indépendance au premier niveau.

Distinctions clés :
• Même scénario que Q précédente mais avec copy → résultat opposé pour a.

Fonctionnement :
• append sur la nouvelle liste uniquement.

Exécution étape par étape :
1. a=[1,2] ; b copie ; b.append(3) ; a reste longueur 2.

Ordre des opérations :
• copy puis append sur l’objet copié.

Cas d'utilisation courants :
• Fonctions qui « travaillent sur une copie locale ».

Cas limites :
• copy insuffisante pour listes imbriquées — question suivante.

Considérations de performance :
• Coût O(len(a)) pour la copie initiale.

Exemples :
• Pattern défensif avant tri ou append en pipeline.

Remarques :
• La paire 77/78 enseigne référence vs copie en une leçon compacte.`,

  1579: `La bonne réponse est « [[1, 3], [2]] » : shallow copy du conteneur externe mais les sous-listes [1] et [2] sont partagées ; b[0].append(3) mute la sous-liste vue aussi par a[0].

Débutant :
• a[0] et b[0] pointent vers la même sous-liste interne.

Intermédiaire :
• copy() a dupliqué la liste externe, pas les objets list internes.

Expert :
• Visualisation graphe : deux arêtes vers le même nœud [1].

Concepts clés :
• Shallow copy ; mutation nested ; effet visible sur a.

Distinctions clés :
• Versus deepcopy qui clonerait la sous-liste.

Fonctionnement :
• append sur l’objet list interne partagé.

Exécution étape par étape :
1. b = a.copy() ; b[0] est le même objet que a[0] ; .append(3) → [1,3] vu des deux côtés.

Ordre des opérations :
• Indexation puis append sur l’objet interne.

Cas d'utilisation courants :
• Grilles 2D naïves avec listes de listes — bug fréquent.

Cas limites :
• Répéter [[]]*n crée un partage encore pire ; autre piège.

Considérations de performance :
• Shallow reste attractif mais exige discipline.

Exemples :
• [[1],[2]] avec copy : un append interne fuit entre vues.

Remarques :
• Souvent corrigé par deepcopy ou list comprehension de copies.`,

  1580: `La bonne réponse est « [[1], [2]] » : deepcopy clone aussi les sous-listes ; b[0].append(3) ne modifie que la copie interne de b.

Débutant :
• a reste visuellement inchangé après mutation de b au niveau imbriqué.

Intermédiaire :
• deepcopy est plus lente mais isole les structures.

Expert :
• deepcopy respecte les cycles et duplications logiques du graphe source.

Concepts clés :
• Indépendance nested ; deepcopy.

Distinctions clés :
• Comparer directement avec la question shallow précédente.

Fonctionnement :
• Nouvelle sous-liste pour b[0], distincte de a[0].

Exécution étape par étape :
1. deepcopy construit nouvelles listes externes et internes ; append sur b[0] n’atteint pas a[0].

Ordre des opérations :
• deepcopy d’abord, puis mutations sur b.

Cas d'utilisation courants :
• Undo stacks, simulations d’états, clones de configs.

Cas limites :
• Objets non copiables lèvent des erreurs spécifiques.

Considérations de performance :
• Sur grandes structures, profiler avant d’abus de deepcopy.

Exemples :
• a[0] is b[0] est False après deepcopy.

Remarques :
• Trio pédagogique : assign, shallow, deep — vous maîtrisez les données mutables.`,

  1581: `La bonne réponse est « a=1, b=2, c=3 » : le dépaquetage assigne positionnellement les trois éléments de la liste aux trois noms.

Débutant :
• Le nombre de variables à gauche doit égaler la longueur (sauf usage de *).

Intermédiaire :
• Fonctionne aussi avec tout itérable à longueur fixe (tuple, etc.).

Expert :
• AST : unpacking est compilé en opérations ROT_* et stores optimisées.

Concepts clés :
• Sequence unpacking ; affectation multiple.

Distinctions clés :
• a,b,c = t vs a = t (tuple singleton implicite absent ici).

Fonctionnement :
• Itération sur la séquence source et assignation successive.

Exécution étape par étape :
1. Lire 1→a, 2→b, 3→c.

Ordre des opérations :
• Côté droit évalué entièrement avant assignations.

Cas d'utilisation courants :
• x,y = point ; a,b,c = couleur RGB.

Cas limites :
• Trop ou pas assez de valeurs → ValueError.

Considérations de performance :
• Négligeable ; lisibilité prime.

Exemples :
• a,b = [1,2] analogue.

Remarques :
• Base avant d’introduire l’étoile * dans les patterns.`,

  1582: `La bonne réponse est « a=1, b=[2,3,4] » : a, *b = ... place le premier élément dans a et tous les restants dans une liste b.

Débutant :
• b est toujours une liste, même un seul restant ou aucun.

Intermédiaire :
• Un seul * par niveau de dépaquetage (sauf syntaxes avancées contrôlées).

Expert :
• Utile pour implémenter des signatures « tête + reste » lisibles.

Concepts clés :
• Starred target ; liste collectrice.

Distinctions clés :
• *b n’est pas un tuple ; type list pour le reste.

Fonctionnement :
• Premier élément fixe ; tous les suivants agrégés dans b.

Exécution étape par étape :
1. a←1 ; reste [2,3,4]→b.

Ordre des opérations :
• Validation du pattern de longueur lors de l’unpacking.

Cas d'utilisation courants :
• def head,*tail patterns en assignation ; CLI args.

Cas limites :
• Liste d’un seul élément : b=[].

Considérations de performance :
• Construction d’une petite liste pour le reste.

Exemples :
• a,*b = [1] → b=[].

Remarques :
• Prépare la symétrie avec *a, b = ... dans la question suivante.`,

  1583: `La bonne réponse est « a=[1,2,3], b=4 » : *a, b collecte tous les éléments sauf le dernier dans a (liste) et le dernier dans b.

Débutant :
• Le dernier nom simple reçoit toujours la valeur finale après que le * a pris le préfixe.

Intermédiaire :
• Symétrie avec a, *b mais côté gauche vs droite inversé.

Expert :
• Combine bien avec des pipelines « tout sauf footer ».

Concepts clés :
• Starred prefix ; dernier élément isolé.

Distinctions clés :
• *a, b n’est pas le même pattern que a, *b sur la même liste.

Fonctionnement :
• Partition en préfixe (liste) et dernier scalaire.

Exécution étape par étape :
1. Préfixe longueur n-1 → a ; dernier → b=4.

Ordre des opérations :
• Vérification que la liste a au moins un élément (sinon ValueError sur certains patterns).

Cas d'utilisation courants :
• Séparer chemins de fichier et nom, ou files et extension approximative.

Cas limites :
• Un seul élément [4] → a=[], b=4.

Considérations de performance :
• Création liste pour préfixe.

Exemples :
• *a,b = [1,2] → a=[1], b=2.

Remarques :
• Dessinez des barres | entre préfixe et dernier pour mémoriser.`,

  1584: `La bonne réponse est « a=1, b=2, c=[] » : après a et b, il ne reste aucun élément pour *c, donc c est la liste vide (pas None).

Débutant :
• * « mange » zéro élément restant → [].

Intermédiaire :
• Évite les bugs où l’on suppose None pour « rien ».

Expert :
• Cohérent avec la garantie de type list pour cibles étoilées.

Concepts clés :
• Liste vide du starred ; longueur exacte 2 + reste 0.

Distinctions clés :
• Sans *c, le pattern a,b = [1,2] serait valide mais pas a,b,c.

Fonctionnement :
• Assignations fixes puis collecte vide.

Exécution étape par étape :
1. a←1 ; b←2 ; c←[].

Ordre des opérations :
• Pattern matching de longueur lors de l’affectation.

Cas d'utilisation courants :
• APIs où « reste optionnel » peut être vide.

Cas limites :
• Si moins de deux éléments → ValueError.

Considérations de performance :
• Liste vide allouée ; coût trivial.

Exemples :
• a,*mid,b = [1,2] cas plus avancé à explorer ailleurs.

Remarques :
• Bon rappel : vide explicite vs absence d’objet.`,

  1585: `La bonne réponse est « [1, 2, 3, 4] » : dans un littéral de liste, * décompresse chaque itérable en éléments individuels concaténés.

Débutant :
• Ce n’est pas une liste de deux listes mais une liste plate de quatre nombres.

Intermédiaire :
• Généralisable : [*a, *b, *c] fusionne plusieurs sources.

Expert :
• PEP 448 étend * et ** dans littéraux ; cohérent avec dict unpacking.

Concepts clés :
• Itérable unpacking dans literal ; flatten logique local.

Distinctions clés :
• [[1,2],[3,4]] vs [*[1,2],*[3,4]].

Fonctionnement :
• Construction d’une liste en étendant chaque *.

Exécution étape par étape :
1. Étendre [1,2] puis [3,4] dans l’ordre → quatre éléments.

Ordre des opérations :
• Évaluation des sous-listes puis expansion dans le littéral.

Cas d'utilisation courants :
• Concaténation de plusieurs listes sans + intermédiaire.

Cas limites :
• Itérable infini → boucle impossible à matérialiser.

Considérations de performance :
• Similaire à extend successifs.

Exemples :
• [0, *[1,2]] → [0,1,2].

Remarques :
• Style moderne souvent préféré à chaines de + pour la clarté.`,

  1586: `La bonne réponse est l’option qui affirme que les deux formes produisent la liste [1, 2, 3] : concaténation + et littéral avec * sont ici deux syntaxes pour le même résultat.

Débutant :
• Deux expressions différentes, même contenu et ordre.

Intermédiaire :
• + exige deux listes ; * accepte tout itérable compatible.

Expert :
• Lisibilité et extensibilité : [*many_lists] peut être dynamique.

Concepts clés :
• Équivalence de résultat ; styles distincts.

Distinctions clés :
• Micro-performances et objets intermédiaires peuvent différer légèrement selon versions.

Fonctionnement :
• + appelle __add__ sur list ; literal * utilise BUILD_LIST et unpack opcodes.

Exécution étape par étape :
1. Évaluer chaque côté indépendamment ; comparer égalité structurelle True.

Ordre des opérations :
• Deux expressions séparées dans l’énoncé vs.

Cas d'utilisation courants :
• Choisir * pour fusionner plusieurs morceaux dans un macro-littéral.

Cas limites :
• Types non list avec + différent de list unpacking.

Considérations de performance :
• Négligeable à cette taille.

Exemples :
• [1,2]+[3] == [*[1,2],3] → True.

Remarques :
• La question teste la sémantique, pas la préférence stylistique.`,

  1587: `La bonne réponse est « 3 » : max([1, 2, 3]) parcourt les éléments et retourne le plus grand au sens de >.

Débutant :
• max fonctionne sur tout itérable fini de valeurs comparables.

Intermédiaire :
• Variante max(a,b,c) existe aussi ; ici un seul argument itérable.

Expert :
• Paramètre key= comme pour sorted ; default= pour itérable vide (3.4+).

Concepts clés :
• Built-in max ; comparaison totale.

Distinctions clés :
• max vs fonction « maximum manuel » en boucle.

Fonctionnement :
• Scan linéaire avec suivi du meilleur candidat vu.

Exécution étape par étape :
1. Candidat 1 ; 2>1 ; 3>2 → retour 3.

Ordre des opérations :
• Création liste puis appel max.

Cas d'utilisation courants :
• Scores, dates, priorités.

Cas limites :
• Itérable vide sans default → ValueError.

Considérations de performance :
• O(n) ; pas de tri complet.

Exemples :
• max([3]) → 3.

Remarques :
• Pour plusieurs listes, utilisez max sur une concaténation ou key sur critère.`,

  1588: `La bonne réponse est « 1 » : min([1, 2, 3]) renvoie le plus petit élément.

Débutant :
• Symétrique de max ; même règles de comparabilité.

Intermédiaire :
• Chaînes comparées lexicographiquement si liste homogène str.

Expert :
• key= permet min sur objets non directement ordonnés de façon naturelle.

Concepts clés :
• Built-in min ; ordre croissant implicite.

Distinctions clés :
• min vs sorted(lst)[0] : sorted est O(n log n), min est O(n).

Fonctionnement :
• Parcours avec meilleur (plus petit) candidat.

Exécution étape par étape :
1. Candidat 1 ; 2 et 3 plus grands → reste 1.

Ordre des opérations :
• Liste puis min.

Cas d'utilisation courants :
• Chercher le plus petit coût, la date la plus ancienne.

Cas limites :
• Vide → ValueError sans default.

Considérations de performance :
• Linéaire.

Exemples :
• min([2,2]) → 2.

Remarques :
• Paire min/max à maîtriser avant reduce ou bibliothèques stats.`,

  1589: `La bonne réponse est « 6 » : sum([1, 2, 3]) additionne tous les éléments (1+2+3).

Débutant :
• sum démarre à 0 par défaut ; start peut changer l’élément neutre.

Intermédiaire :
• sum([]) vaut 0.

Expert :
• Pour flottants très nombreux, math.fsum est plus stable numériquement.

Concepts clés :
• Agrégation arithmétique ; itération.

Distinctions clés :
• sum vs boucle manuelle ; sum n’aplatit pas les listes imbriquées.

Fonctionnement :
• Accumulateur mis à jour pour chaque élément.

Exécution étape par étape :
1. 0+1=1 ; +2=3 ; +3=6.

Ordre des opérations :
• Liste construite puis sum.

Cas d'utilisation courants :
• Totaux, moyennes (avec division), comptages pondérés simples.

Cas limites :
• Types non additifs → TypeError.

Considérations de performance :
• Implémenté en C ; rapide.

Exemples :
• sum([10]) → 10.

Remarques :
• Ne pas utiliser sum sur listes de listes sans itertools.chain.`,

  1590: `La bonne réponse est « False » : all([True, True, False]) exige que chaque élément soit vrai au sens booléen ; False casse la condition.

Débutant :
• all([]) est True (vacuité universellement vraie), mais ici non vide avec un False.

Intermédiaire :
• Court-circuit : s’arrête au premier faux.

Expert :
• Ne confondez pas avec any.

Concepts clés :
• Quantificateur universel logique ; truthiness.

Distinctions clés :
• all vs boucle manuelle avec flags.

Fonctionnement :
• Test bool(elem) pour chaque élément jusqu’à faux ou fin.

Exécution étape par étape :
1. True ok ; True ok ; False → résultat False immédiat.

Ordre des opérations :
• Évaluation lazy des éléments jusqu’au court-circuit (éléments simples ici).

Cas d'utilisation courants :
• Valider que toutes les lignes satisfont un prédicat.

Cas limites :
• Éléments non booléens : 0, "", None sont faux.

Considérations de performance :
• Peut éviter un parcours complet grâce au short-circuit.

Exemples :
• all([1,2,3]) → True.

Remarques :
• Duo pédagogique évident avec any dans la question suivante.`,

  1591: `La bonne réponse est « True » : any([False, False, True]) retourne True dès qu’au moins un élément est vrai.

Débutant :
• Parcours jusqu’au premier truthy ; ici le dernier True suffit.

Intermédiaire :
• any([]) est False.

Expert :
• Court-circuit au premier True peut éviter des calculs coûteux si générateur.

Concepts clés :
• Quantificateur existentiel ; truthiness.

Distinctions clés :
• any vs all ; opérateur or sur deux valeurs seulement.

Fonctionnement :
• bool sur chaque élément ; arrêt au premier True.

Exécution étape par étape :
1. False, False, True → True au troisième test.

Ordre des opérations :
• Short-circuit dès succès.

Cas d'utilisation courants :
• Détecter une anomalie dans une série de flags.

Cas limites :
• Si tous faux, False.

Considérations de performance :
• Meilleur cas O(1) si le début est truthy.

Exemples :
• any([0,0,1]) → True.

Remarques :
• Lecture naturelle : « y a-t-il au moins un oui ? ».`,

  1592: `La bonne réponse est « [1, 2, 3, 1, 2, 3] » : multiplier une liste par 2 répète la séquence entière deux fois (concaténation répétée).

Débutant :
• Ce n’est pas une multiplication élément par élément (ce serait numpy ou une boucle).

Intermédiaire :
• [0]*n crée des références répétées du même objet mutable — piège séparé.

Expert :
• Complexité temps et espace O(k*n) pour k répétitions d’une liste de taille n.

Concepts clés :
• Opérateur * sur list ; répétition de séquence.

Distinctions clés :
• * sur list vs * sur int en arithmétique scalaire.

Fonctionnement :
• Allocation nouvelle liste longueur k*len(source) avec références dupliquées.

Exécution étape par étape :
1. Séquence [1,2,3] deux fois → six entrées dans l’ordre.

Ordre des opérations :
• Liste puis multiplication scalaire à droite.

Cas d'utilisation courants :
• Padding, motifs, grilles initiales « template ».

Cas limites :
• *0 → [] ; *(-1) → [] (comportement de répétition Python).

Considérations de performance :
• Mémoire proportionnelle au produit taille * facteur.

Exemples :
• [1]*3 → [1,1,1] avec références au même int 1.

Remarques :
• Toujours distinguer répétition de structure et copie profonde de contenu.`,

  1593: `La bonne réponse est « True » : l’égalité == des listes compare élément par élément avec == ; 1 == 1.0 et 2 == 2.0 sont vrais.

Débutant :
• Le type exact int/float n’a pas à coïncider si les valeurs numériques sont égales.

Intermédiaire :
• is serait faux entre objets distincts, mais == parle de valeur ici.

Expert :
• Égalité des listes délègue __eq__ récursivement ; attention aux cycles rares.

Concepts clés :
• Égalité structurelle ; coercition logique via == des éléments.

Distinctions clés :
• == vs is pour listes différentes mais « mêmes valeurs ».

Fonctionnement :
• Comparaison longueur puis chaque paire d’éléments.

Exécution étape par étape :
1. Longueurs égales ; comparer paires (1,1.0) True, (2,2.0) True → True global.

Ordre des opérations :
• Deux littéraux listes puis ==.

Cas d'utilisation courants :
• Tests unitaires sur données numériques mixtes.

Cas limites :
• float('nan') == float('nan') est False — exception notable.

Considérations de performance :
• Linéaire en la taille commune.

Exemples :
• [0] == [0.0] → True.

Remarques :
• Pour tests stricts de type, combinez == avec type(...) checks.`,

  1594: `La bonne réponse est « False » : deux listes de longueurs différentes ne peuvent pas être égales avec ==, même si un préfixe coïncide.

Débutant :
• [1,2] a 2 éléments ; [1,2,3] en a 3 → échec immédiat.

Intermédiaire :
• L’ordre lexicographique < ou > peut quand même comparer des longueurs différentes (voir questions suivantes), mais == exige égalité stricte partout.

Expert :
• list et tuple ne se mélangent pas avec == : [1] == (1,) est False malgré des valeurs « proches » visuellement.

Concepts clés :
• Longueur ; égalité stricte.

Distinctions clés :
• Préfixe commun ≠ listes égales.

Fonctionnement :
• L’algorithme de == repère d’abord une différence de longueur → False.

Exécution étape par étape :
1. len 2 vs 3 → False sans comparer le 3 final.

Ordre des opérations :
• Comparaison rapide des tailles avant détail.

Cas d'utilisation courants :
• Validation de formes de données (vecteurs même dimension).

Cas limites :
• Deux vides [] == [] → True.

Considérations de performance :
• Court-circuit rapide sur longueurs.

Exemples :
• [1] == [1,1] → False.

Remarques :
• Ne présumez jamais l’égalité sur préfixe seul.`,

  1595: `La bonne réponse est « True » : [1, 2] != [1, 3] car le deuxième élément diffère même si le premier est identique.

Débutant :
• != est la négation logique de == pour les listes.

Intermédiaire :
• Comparaison élément par élément jusqu’à différence ou fin.

Expert :
• Chaînage de comparaisons a != b != c a une sémantique spécifique Python (a!=b and b!=c), différente de cette question simple.

Concepts clés :
• Inégalité structurelle ; élément différant.

Distinctions clés :
• != ne compare pas les id des listes sauf si listes différentes avec mêmes valeurs → False sur !=.

Fonctionnement :
• Dès 2 != 3, résultat True pour l’ensemble.

Exécution étape par étape :
1. Compare index0 : 1==1 ; index1 : 2!=3 → != True.

Ordre des opérations :
• De gauche à droite sur les paires.

Cas d'utilisation courants :
• Détecter divergence de snapshots.

Cas limites :
• Listes de longueur différente → != True sauf cas pathologiques d’implémentation — ici lengths égales.

Considérations de performance :
• S’arrête à la première différence.

Exemples :
• [1,2] != [2,1] → True (ordre).

Remarques :
• != encode souvent « au moins une différence ».`,

  1596: `La bonne réponse est « True » : [1, 2] < [1, 2, 3] en comparaison lexicographique car le préfixe commun est égal et la liste plus courte est « inférieure ».

Débutant :
• Analogie dictionnaire : « ap » < « apple ».

Intermédiaire :
• Si un premier élément différait, cet élément déciderait avant la longueur.

Expert :
• Règle générale : comparer élément par élément ; si une séquence se termine, elle est plus petite si l’autre continue avec égalité jusqu’ici.

Concepts clés :
• Ordre lexicographique ; préfixe.

Distinctions clés :
• < entre listes ≠ < entre longueurs seules brutalement sans règle Python.

Fonctionnement :
• Compare 1==1, 2==2 ; fin de gauche alors droite continue → gauche plus petite.

Exécution étape par étape :
1. Index0 tie ; index1 tie ; gauche épuisée → True pour <.

Ordre des opérations :
• Comparaisons paresseuses jusqu’à décision.

Cas d'utilisation courants :
• Trier des listes de listes (clés composites).

Cas limites :
• Types non comparables → TypeError avant décision.

Considérations de performance :
• O(min(len)) jusqu’à divergence.

Exemples :
• [1] < [1,0] → True.

Remarques :
• La question jumelle inverse utilise > avec les mêmes principes.`,

  1597: `La bonne réponse est « True » : [1, 2, 3] > [1, 2] car la seconde est un préfixe strict de la première.

Débutant :
• C’est le miroir de la question < précédente en inversant les opérandes.

Intermédiaire :
• Égalité des premiers éléments puis la plus longue « gagne » pour >.

Expert :
• Cohérent avec tri stable de séquences imbriquées.

Concepts clés :
• Comparaison lexicographique ; longueur après préfixe égal.

Distinctions clés :
• > n’est pas « plus d’éléments » en toute généralité sans égalité préalable du préfixe.

Fonctionnement :
• Tie sur 1 et 2 ; droite finit → gauche plus grande.

Exécution étape par étape :
1. Comparer éléments communs ; épuisement de [1,2] alors [1,2,3] continue → True.

Ordre des opérations :
• Même pipeline que < mais sens opposé.

Cas d'utilisation courants :
• Classements par tuples de clés de longueur variable.

Cas limites :
• [1,2,3] > [1,2,4] décide sur le troisième élément avant la longueur.

Considérations de performance :
• Identique à < en coût.

Exemples :
• [2] > [1,9,9] → True (2>1 immédiatement).

Remarques :
• Montre que la longueur n’est consultée qu’après égalité du préfixe commun.`,

  1598: `La bonne réponse est « [1, 2, 3, 3] » : * sur listes a une priorité plus haute que +, donc [3]*2 d’abord → [3,3], puis concaténation avec [1,2].

Débutant :
• Pensez PEMDAS adapté : multiplication de séquence avant addition de listes.

Intermédiaire :
• [1,2]+[3]*2 ≠ ([1,2]+[3])*2 (voir question suivante).

Expert :
• Les parenthèses restent l’outil ultime pour lever toute ambiguïté de lecture.

Concepts clés :
• Précédence des opérateurs ; répétition puis concaténation.

Distinctions clés :
• Résultat longueur 4 ici vs 6 avec parenthèses différentes.

Fonctionnement :
• Évaluation de [3]*2 puis __add__ sur [1,2].

Exécution étape par étape :
1. [3]*2 → [3,3] ; [1,2]+[3,3] → [1,2,3,3].

Ordre des opérations :
• * avant + selon tableau de précédence Python.

Cas d'utilisation courants :
• Construction de buffers avec motif répété suffixé.

Cas limites :
• Chaînes vides et répétitions 0 changent les tailles attendues.

Considérations de performance :
• Deux allocations typiques : résultat * puis +.

Exemples :
• [0]+[1]*3 → [0,1,1,1].

Remarques :
• Les quiz adorent piéger avec des parenthèses — maîtrisez les deux formes.`,

  1599: `La bonne réponse est « [1, 2, 3, 1, 2, 3] » : les parenthèses forcent ([1, 2] + [3]) d’abord → [1,2,3], puis *2 répète cette liste entière deux fois.

Débutant :
• Même éléments que deux copies consécutives de [1,2,3].

Intermédiaire :
• Longueur finale 6 ; diffère de [1,2,3,3] de la question précédente.

Expert :
• Illustre que la structure des parenthèses change totalement le motif répété.

Concepts clés :
• Groupement ; concaténation avant répétition.

Distinctions clés :
• Comparez avec l’expression sans parenthèses de Q1598.

Fonctionnement :
• Addition listes puis multiplication de séquence.

Exécution étape par étape :
1. + → [1,2,3] ; *2 → doublement complet.

Ordre des opérations :
• Parenthèses > * > + devient ici parenthèses d’abord localement.

Cas d'utilisation courants :
• Répéter un pattern composite (en-tête + bloc) plusieurs fois.

Cas limites :
• *0 après parenthèses → [].

Considérations de performance :
• Taille proportionnelle au produit longueur motif * facteur.

Exemples :
• ([1]+[2])*3 → [1,2,1,2,1,2].

Remarques :
• Reliez mentalement à la propriété distributive… qui n’est pas valable pour + et * de listes comme pour les réels.`,

  1600: `La bonne réponse est « 4 » : [1, 2] + [3, 4] concatène en [1, 2, 3, 4] ; len compte quatre éléments.

Débutant :
• len s’applique au résultat de +, pas séparément 2 et 2 sans addition.

Intermédiaire :
• len(a)+len(b) serait équivalent mathématiquement ici mais l’énoncé impose l’expression composée.

Expert :
• Chaînes d’opérations longues : attention aux coûts intermédiaires sur très grosses listes.

Concepts clés :
• Concaténation ; longueur ; évaluation intérieure.

Distinctions clés :
• len([a,b]) où a,b sont listes ≠ len(a)+len(b) en type si a,b pas aplatis — ici + aplati.

Fonctionnement :
• + construit nouvelle liste de taille somme ; len lit length.

Exécution étape par étape :
1. + produit longueur 4 ; len retourne 4.

Ordre des opérations :
• + avant len car parenthèses implicites autour de l’argument de len.

Cas d'utilisation courants :
• Vérifier taille après fusion de buffers.

Cas limites :
• + avec [] ne change pas la longueur d’un côté.

Considérations de performance :
• + alloue une nouvelle liste de taille totale ; len est O(1).

Exemples :
• len([1]+[]) → 1.

Remarques :
• Fermeture logique du bloc : combine opérateurs de liste et agrégats built-in.`,
};
