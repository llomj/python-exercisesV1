/** Level 2 FR 701–750 — math module, floor/ceil/trunc, constants, inf/nan, log, factorial, divmod, round, fsum, copysign, pow, isclose, degrees/radians, hypot */
export default {
  701: `math.sqrt(16) vaut 4.0 : la racine carrée renvoie toujours un float, même pour un carré parfait.

Débutant :
• import math puis math.sqrt(16) donne 4.0, pas 4.

Intermédiaire :
• 16 ** 0.5 donne aussi 4.0. Pour un int en Python 3.8+, math.isqrt(16) → 4.

Expert :
• math.sqrt(x) pour x < 0 lève ValueError.

Concepts clés :
• sqrt calcule la racine carrée ; le type de retour est float.

Distinctions clés :
• vs ** 0.5 (même résultat) ; vs math.isqrt (int, 3.8+).

Fonctionnement :
• Le module math fournit des fonctions numériques ; sqrt utilise IEEE 754.

Exécution étape par étape :
1. import math charge le module.
2. math.sqrt(16) évalue 16, calcule √16 → 4.0.

Ordre des opérations :
• L'appel de fonction a priorité sur les opérateurs autour.

Cas d'utilisation courants :
• géométrie, distances, normalisation.

Cas limites :
• math.sqrt(-1) → ValueError ; math.sqrt(0) → 0.0.

Considérations de performance :
• sqrt est optimisé en C.

Exemples :
• math.sqrt(9) → 3.0 ; math.sqrt(2) → ~1.414

Remarques :
• Toujours importer math avant d'utiliser math.sqrt.`,
  702: `math.sqrt(2) est une approximation float : √2 est irrationnel, donc non représentable exactement.

Débutant :
• Le résultat est proche de 1,414… mais pas exact.

Intermédiaire :
• IEEE 754 double précision : ~15 chiffres significatifs. math.sqrt(2)**2 ≠ 2 exactement.

Expert :
• Pour l'arithmétique exacte : decimal ou fractions.

Concepts clés :
• Les flottants sont des approximations ; les irrationnels ne sont jamais exacts.

Distinctions clés :
• vs Fraction pour des rationnels exacts.

Fonctionnement :
• sqrt utilise l'algorithme matériel IEEE 754.

Exécution étape par étape :
1. 2 est passé à sqrt.
2. Renvoie le float le plus proche de √2.

Ordre des opérations :
• Appel simple.

Cas d'utilisation courants :
• calculs géométriques, physique.

Cas limites :
• math.sqrt(2)**2 == 2 → False à cause des arrondis.

Considérations de performance :
• Très rapide (instruction CPU dédiée).

Exemples :
• math.sqrt(2) → 1.4142135623730951

Remarques :
• math.isclose() pour comparer des flottants.`,
  703: `math.floor(3.7) vaut 3 : arrondit vers le bas (vers moins l'infini).

Débutant :
• floor = plancher ; on garde la partie entière en dessous.

Intermédiaire :
• Renvoie un int en Python 3. Pour les positifs, floor(x) == int(x).

Expert :
• Pour les négatifs : floor(-3.7) = -4, int(-3.7) = -3.

Concepts clés :
• floor(x) = plus grand entier ≤ x.

Distinctions clés :
• vs ceil (vers le haut) ; vs trunc (vers zéro).

Fonctionnement :
• floor va toujours vers moins l'infini sur la droite numérique.

Exécution étape par étape :
1. 3.7 est passé.
2. floor renvoie 3 (int).

Ordre des opérations :
• Appel de fonction.

Cas d'utilisation courants :
• pagination, division en parts entières.

Cas limites :
• floor(3.0) → 3 ; floor(-3.7) → -4.

Considérations de performance :
• O(1).

Exemples :
• math.floor(3.1) → 3 ; math.floor(3.9) → 3

Remarques :
• // utilise le même sens (floor division).`,
  704: `math.floor(-3.7) vaut -4 : floor arrondit vers moins l'infini, pas vers zéro.

Débutant :
• -4 est « en dessous » de -3.7 sur la droite numérique.

Intermédiaire :
• int(-3.7) → -3 (troncature vers zéro). floor(-3.7) → -4.

Expert :
• -17 // 5 = -4 car // utilise floor.

Concepts clés :
• floor va vers moins l'infini ; int/trunc vers zéro.

Distinctions clés :
• floor vs int pour les négatifs : comportement différent.

Fonctionnement :
• -4 ≤ -3.7, donc -4 est le plancher.

Exécution étape par étape :
1. -3.7.
2. floor → -4.

Ordre des opérations :
• Simple.

Cas d'utilisation courants :
• division euclidienne, indices négatifs.

Cas limites :
• floor(-3.0) → -3.

Considérations de performance :
• O(1).

Exemples :
• math.floor(-3.2) → -4 ; int(-3.7) → -3

Remarques :
• C'est la différence clé entre floor et trunc.`,
  705: `math.ceil(3.2) vaut 4 : arrondit vers le haut (vers plus l'infini).

Débutant :
• ceil = plafond ; on prend l'entier au-dessus.

Intermédiaire :
• Renvoie int. ceil(3.0) → 3 (déjà entier).

Expert :
• Pour négatifs : ceil(-3.2) → -3 (vers zéro).

Concepts clés :
• ceil(x) = plus petit entier ≥ x.

Distinctions clés :
• vs floor ; vs round (arrondi bancaire).

Fonctionnement :
• ceil va toujours vers plus l'infini.

Exécution étape par étape :
1. 3.2.
2. ceil → 4.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• nombre de pages, conteneurs, plafonds.

Cas limites :
• ceil(3.0) → 3.

Considérations de performance :
• O(1).

Exemples :
• math.ceil(3.1) → 4 ; math.ceil(3.9) → 4

Remarques :
• Utile pour « combien de X pour couvrir Y ».`,
  706: `math.ceil(-3.2) vaut -3 : ceil arrondit vers plus l'infini (vers zéro pour les négatifs).

Débutant :
• -3 est au-dessus de -3.2 sur la droite numérique.

Intermédiaire :
• floor(-3.2) → -4 ; ceil(-3.2) → -3.

Expert :
• ceil et floor sont symétriques pour les négatifs.

Concepts clés :
• Pour négatifs, ceil va vers zéro.

Distinctions clés :
• vs floor(-3.2) = -4.

Fonctionnement :
• -3 ≥ -3.2, donc -3 est le plafond.

Exécution étape par étape :
1. -3.2.
2. ceil → -3.

Ordre des opérations :
• Simple.

Cas d'utilisation courants :
• bornes supérieures, intervalles.

Cas limites :
• ceil(-3.0) → -3.

Considérations de performance :
• O(1).

Exemples :
• math.ceil(-3.7) → -3

Remarques :
• Miroir de floor pour les négatifs.`,
  707: `math.trunc(3.7) vaut 3 : troncature vers zéro (supprime la partie décimale).

Débutant :
• trunc enlève tout après la virgule.

Intermédiaire :
• Pour positifs : trunc(x) == int(x) == floor(x).

Expert :
• Pour négatifs : trunc(-3.7) = -3, floor(-3.7) = -4.

Concepts clés :
• trunc va toujours vers zéro.

Distinctions clés :
• vs floor (différent pour négatifs) ; trunc == int.

Fonctionnement :
• Supprime la partie fractionnaire sans arrondir.

Exécution étape par étape :
1. 3.7.
2. trunc → 3.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• tronquer des flottants vers entier.

Cas limites :
• trunc(3.0) → 3.

Considérations de performance :
• O(1).

Exemples :
• math.trunc(3.7) → 3 ; int(3.7) → 3

Remarques :
• int() et trunc() sont équivalents.`,
  708: `math.trunc(-3.7) vaut -3 : trunc va vers zéro, contrairement à floor qui va vers -∞.

Débutant :
• On garde -3, on enlève .7.

Intermédiaire :
• floor(-3.7) → -4 ; trunc(-3.7) → -3.

Expert :
• Tableau : x=3.7 → trunc=3, floor=3, ceil=4 ; x=-3.7 → trunc=-3, floor=-4, ceil=-3.

Concepts clés :
• trunc = vers zéro ; floor = vers -∞.

Distinctions clés :
• C'est la différence essentielle trunc vs floor.

Fonctionnement :
• trunc supprime .7, garde -3.

Exécution étape par étape :
1. -3.7.
2. trunc → -3.

Ordre des opérations :
• Simple.

Cas d'utilisation courants :
• conversion vers entier « tronqué ».

Cas limites :
• trunc(-3.0) → -3.

Considérations de performance :
• O(1).

Exemples :
• int(-3.7) → -3 (identique)

Remarques :
• En C/Java, la division entière tronque ; Python utilise floor.`,
  709: `math.floor(3.7) et int(3.7) donnent le même résultat : 3.

Débutant :
• Les deux renvoient 3 pour les nombres positifs.

Intermédiaire :
• Pour positifs, tronquer vers zéro = floor vers -∞ (même direction).

Expert :
• Pour négatifs, ils divergent.

Concepts clés :
• Équivalence floor == int uniquement pour x ≥ 0.

Distinctions clés :
• Pour x < 0 : floor(x) ≤ int(x).

Fonctionnement :
• Même direction d'arrondi pour positifs.

Exécution étape par étape :
1. 3.7.
2. floor et int → 3.

Ordre des opérations :
• Deux appels indépendants.

Cas d'utilisation courants :
• Remplacer floor par int quand on sait x ≥ 0.

Cas limites :
• x = 3.0 : les deux → 3.

Considérations de performance :
• int() légèrement plus rapide (built-in).

Exemples :
• math.floor(3.7) == int(3.7) → True

Remarques :
• Ne pas supposer l'équivalence pour négatifs.`,
  710: `int(-3.7) donne -3, math.floor(-3.7) donne -4 : int tronque vers zéro, floor vers -∞.

Débutant :
• int enlève .7 → -3 ; floor va « plus bas » → -4.

Intermédiaire :
• Python // utilise floor : -17 // 5 = -4.

Expert :
• En C : -17/5 = -3 (troncature).

Concepts clés :
• int = troncature vers zéro ; floor = vers moins l'infini.

Distinctions clés :
• C'est la distinction la plus importante en division Python.

Fonctionnement :
• int(-3.7) supprime .7. floor(-3.7) prend -4 car -4 ≤ -3.7.

Exécution étape par étape :
1. -3.7.
2. int → -3 ; floor → -4.

Ordre des opérations :
• Deux évaluations.

Cas d'utilisation courants :
• division euclidienne, modulo cohérent.

Cas limites :
• -3.0 : les deux → -3.

Considérations de performance :
• O(1).

Exemples :
• -7 // 2 = -4 ; int(-7/2) = -3

Remarques :
• La formule a == (a//b)*b + a%b est toujours vraie.`,
  711: `math.pi vaut environ 3,14159… : constante π (rapport circonférence/diamètre).

Débutant :
• math.pi est une approximation de π.

Intermédiaire :
• Float 64 bits, ~15 chiffres significatifs. Irrationnel et transcendant.

Expert :
• math.pi * 2 = demi-périmètre du cercle unité.

Concepts clés :
• π est une constante mathématique fondamentale.

Distinctions clés :
• vs math.e (Euler) ; vs constantes définies à la main.

Fonctionnement :
• Constante prédéfinie dans le module math.

Exécution étape par étape :
1. import math.
2. math.pi → 3.141592653589793.

Ordre des opérations :
• Accès attribut.

Cas d'utilisation courants :
• trigonométrie, géométrie, physique.

Cas limites :
• Pas exact (float) ; pour plus de précision : decimal.

Considérations de performance :
• Lecture immédiate.

Exemples :
• 2 * math.pi * r pour circonférence

Remarques :
• Toujours importer math.`,
  712: `math.e vaut environ 2,71828… : nombre d'Euler, base du logarithme naturel.

Débutant :
• math.e est la base des exponentielles et ln.

Intermédiaire :
• e = lim (1+1/n)^n. math.log(math.e) = 1.0.

Expert :
• Utilisé en croissance exponentielle, intérêts composés, calcul.

Concepts clés :
• e est la base du logarithme naturel (ln).

Distinctions clés :
• vs math.pi ; vs 2.718... littéral.

Fonctionnement :
• Constante float dans math.

Exécution étape par étape :
1. math.e.
2. → 2.718281828459045.

Ordre des opérations :
• Accès.

Cas d'utilisation courants :
• math.log, exponentielles, modèles.

Cas limites :
• Float, pas exact.

Considérations de performance :
• O(1).

Exemples :
• math.log(math.e) → 1.0

Remarques :
• exp(1) == math.e (approximativement).`,
  713: `type(math.inf).__name__ vaut 'float' : math.inf est une valeur float spéciale (infini positif).

Débutant :
• inf est un float, pas un type séparé.

Intermédiaire :
• Équivalent à float('inf'). Tout nombre fini < inf.

Expert :
• inf + 1 = inf ; inf - inf = nan.

Concepts clés :
• math.inf est de type float (IEEE 754).

Distinctions clés :
• vs int ; vs un type « inf » inexistant.

Fonctionnement :
• Valeur spéciale du standard IEEE 754.

Exécution étape par étape :
1. math.inf.
2. type(...).__name__ → 'float'.

Ordre des opérations :
• Accès, puis type, puis __name__.

Cas d'utilisation courants :
• bornes supérieures, comparaisons.

Cas limites :
• inf == inf → True.

Considérations de performance :
• O(1).

Exemples :
• math.inf > 10**100 → True

Remarques :
• float('inf') fonctionne aussi.`,
  714: `math.inf > 10**100 vaut True : l'infini est plus grand que tout nombre fini.

Débutant :
• Même 10^100 (gogol) est plus petit que l'infini.

Intermédiaire :
• 10**100 est un int énorme mais fini.

Expert :
• math.inf > 10**10000 → True aussi.

Concepts clés :
• Par définition, inf > n pour tout n fini.

Distinctions clés :
• vs comparaisons entre finis.

Fonctionnement :
• Comparaison IEEE 754 : inf domine.

Exécution étape par étape :
1. 10**100, math.inf.
2. > → True.

Ordre des opérations :
• ** puis >.

Cas d'utilisation courants :
• initialiser un « plus grand que tout ».

Cas limites :
• math.inf == math.inf → True.

Considérations de performance :
• Comparaison immédiate.

Exemples :
• min avec inf comme borne initiale

Remarques :
• -math.inf est plus petit que tout fini.`,
  715: `-math.inf < -10**100 vaut True : l'infini négatif est plus petit que tout nombre fini.

Débutant :
• -inf est « moins que tout ».

Intermédiaire :
• -10**100 est très négatif mais fini.

Expert :
• -math.inf == -math.inf → True.

Concepts clés :
• -inf < n pour tout n fini.

Distinctions clés :
• vs math.inf (positif).

Fonctionnement :
• -math.inf = float('-inf').

Exécution étape par étape :
1. -10**100, -math.inf.
2. < → True.

Ordre des opérations :
• Unaire -, **, puis <.

Cas d'utilisation courants :
• borne inférieure initiale pour min.

Cas limites :
• -inf - inf = -inf.

Considérations de performance :
• O(1).

Exemples :
• -math.inf < -999999 → True

Remarques :
• Symétrique de math.inf pour le positif.`,
  716: `type(math.nan).__name__ vaut 'float' : math.nan (Not a Number) est un float spécial.

Débutant :
• nan représente un résultat indéfini (ex. 0/0 en float).

Intermédiaire :
• Équivalent à float('nan'). Propage dans les calculs sans lever d'erreur.

Expert :
• IEEE 754 « quiet NaN ».

Concepts clés :
• nan est de type float, pas un type séparé.

Distinctions clés :
• vs None ; vs inf.

Fonctionnement :
• Valeur spéciale pour résultats non définis.

Exécution étape par étape :
1. math.nan.
2. type(...).__name__ → 'float'.

Ordre des opérations :
• Chaînage d'accès.

Cas d'utilisation courants :
• détecter des résultats invalides.

Cas limites :
• nan == nan → False (unique en Python).

Considérations de performance :
• O(1).

Exemples :
• 0.0/0.0 ou math.inf - math.inf → nan

Remarques :
• Utiliser math.isnan() pour tester.`,
  717: `math.nan == math.nan vaut False : NaN n'est égal à rien, pas même à lui-même (IEEE 754).

Débutant :
• C'est la seule valeur où x == x est False.

Intermédiaire :
• Par design : deux résultats indéfinis ne sont pas « les mêmes ».

Expert :
• x != x est un test rapide pour NaN.

Concepts clés :
• NaN représente l'indéfini ; comparaison indéfinie → False.

Distinctions clés :
• vs toute autre valeur (x == x pour les autres).

Fonctionnement :
• Règle IEEE 754 explicite.

Exécution étape par étape :
1. math.nan == math.nan.
2. → False.

Ordre des opérations :
• ==.

Cas d'utilisation courants :
• Ne jamais utiliser == pour tester NaN.

Cas limites :
• float('nan') == float('nan') → False.

Considérations de performance :
• Comparaison immédiate.

Exemples :
• math.isnan(x) pour tester correctement

Remarques :
• Toujours utiliser math.isnan().`,
  718: `math.isnan(math.nan) vaut True : c'est la bonne façon de détecter NaN.

Débutant :
• isnan dit si une valeur est NaN.

Intermédiaire :
• math.isnan(3.14) → False. math.isnan(math.inf) → False.

Expert :
• Alternative : x != x (True seulement si x est NaN).

Concepts clés :
• == ne fonctionne pas pour NaN ; utiliser isnan.

Distinctions clés :
• vs == ; vs isinf.

Fonctionnement :
• isnan teste le bit pattern IEEE 754.

Exécution étape par étape :
1. math.nan.
2. isnan(...) → True.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• validation de résultats flottants.

Cas limites :
• isnan(0) → False ; isnan(inf) → False.

Considérations de performance :
• O(1).

Exemples :
• if math.isnan(x): handle_error()

Remarques :
• Essentiel après des calculs pouvant produire NaN.`,
  719: `math.isinf(math.inf) vaut True : isinf détecte l'infini (positif ou négatif).

Débutant :
• isinf renvoie True pour inf et -inf.

Intermédiaire :
• math.isinf(3.14) → False. math.isinf(math.nan) → False.

Expert :
• float('inf') et float('-inf') sont aussi détectés.

Concepts clés :
• isinf teste si la valeur est ±∞.

Distinctions clés :
• vs isnan ; vs isfinite.

Fonctionnement :
• Test sur la représentation IEEE 754.

Exécution étape par étape :
1. math.inf.
2. isinf(...) → True.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• validation, débordements.

Cas limites :
• isinf(nan) → False.

Considérations de performance :
• O(1).

Exemples :
• math.isinf(-math.inf) → True

Remarques :
• isfinite = not (isinf or isnan).`,
  720: `math.isfinite(3.14) vaut True : isfinite renvoie True pour les nombres « normaux » (ni inf ni nan).

Débutant :
• 3.14 est un nombre fini, donc True.

Intermédiaire :
• isfinite(x) == (not isinf(x) and not isnan(x)).

Expert :
• 10**100 est fini ; inf et nan ne le sont pas.

Concepts clés :
• isfinite = ni infini ni NaN.

Distinctions clés :
• vs isinf ; vs isnan.

Fonctionnement :
• Test combiné.

Exécution étape par étape :
1. 3.14.
2. isfinite(...) → True.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• validation avant calculs sensibles.

Cas limites :
• isfinite(0) → True.

Considérations de performance :
• O(1).

Exemples :
• if math.isfinite(x): safe_compute(x)

Remarques :
• Le check le plus conservateur.`,
  721: `math.isfinite(math.inf) vaut False : l'infini n'est pas un nombre fini.

Débutant :
• inf n'est pas fini, donc isfinite → False.

Intermédiaire :
• isfinite(inf) = False ; isfinite(nan) = False.

Expert :
• Seuls les nombres « normaux » donnent True.

Concepts clés :
• inf et nan ne sont pas finis.

Distinctions clés :
• vs isfinite(3.14) = True.

Fonctionnement :
• isfinite exclut inf et nan.

Exécution étape par étape :
1. math.inf.
2. isfinite(...) → False.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• filtrer les valeurs valides.

Cas limites :
• isfinite(-math.inf) → False.

Considérations de performance :
• O(1).

Exemples :
• [x for x in vals if math.isfinite(x)]

Remarques :
• Complément de isinf et isnan.`,
  722: `math.log(1) vaut 0.0 : le logarithme naturel de 1 est 0 (car e^0 = 1).

Débutant :
• ln(1) = 0 pour toute base en fait.

Intermédiaire :
• math.log(0) lève ValueError. math.log(x) pour x < 0 aussi.

Expert :
• log_b(1) = 0 pour toute base b.

Concepts clés :
• log(1) = 0 par définition des logarithmes.

Distinctions clés :
• vs log(e) = 1 ; vs log(0) erreur.

Fonctionnement :
• log = logarithme naturel (base e).

Exécution étape par étape :
1. 1.
2. log(1) → 0.0.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• formules exponentielles, décroissance.

Cas limites :
• log(0) → ValueError.

Considérations de performance :
• O(1) pour les valeurs courantes.

Exemples :
• math.log(math.e) → 1.0

Remarques :
• math.log10, math.log2 pour autres bases.`,
  723: `math.log(math.e) vaut 1.0 : le log naturel de e est 1 (car e^1 = e).

Débutant :
• ln(e) = 1 par définition.

Intermédiaire :
• math.log(e**n) ≈ n (avec imprécision float).

Expert :
• Le log naturel est l'inverse de exp.

Concepts clés :
• log_e(e) = 1.

Distinctions clés :
• vs log(1) = 0 ; vs log10(10) = 1.

Fonctionnement :
• Relation inverse exp/log.

Exécution étape par étape :
1. math.e.
2. log(...) → 1.0.

Ordre des opérations :
• Accès e, puis log.

Cas d'utilisation courants :
• simplification d'expressions.

Cas limites :
• log(e**2) → 2.0 (approx).

Considérations de performance :
• O(1).

Exemples :
• math.log(math.e**3) → 3.0 (approx)

Remarques :
• Vérification utile : log(exp(x)) ≈ x.`,
  724: `math.log10(100) vaut 2.0 : logarithme en base 10 (10^2 = 100).

Débutant :
• log10 donne la puissance de 10.

Intermédiaire :
• math.log10(1000) = 3.0. math.log(x, 10) équivalent.

Expert :
• log10(10**n) = n (approx).

Concepts clés :
• log10 = log en base 10.

Distinctions clés :
• vs math.log (base e) ; vs math.log2.

Fonctionnement :
• math.log10(x) = log(x)/log(10).

Exécution étape par étape :
1. 100.
2. log10(100) → 2.0.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• ordres de grandeur, échelles logarithmiques.

Cas limites :
• log10(1) = 0 ; log10(0) → ValueError.

Considérations de performance :
• O(1).

Exemples :
• math.log10(1000) → 3.0

Remarques :
• Utile pour les puissances de 10.`,
  725: `math.log2(8) vaut 3.0 : logarithme en base 2 (2^3 = 8).

Débutant :
• log2 donne la puissance de 2.

Intermédiaire :
• Utile en informatique (bits, arbres binaires).

Expert :
• log2(2**n) = n. Souvent plus précis que log(x)/log(2).

Concepts clés :
• log2 = log en base 2.

Distinctions clés :
• vs log ; vs log10.

Fonctionnement :
• Optimisé pour la base 2.

Exécution étape par étape :
1. 8.
2. log2(8) → 3.0.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• complexité, profondeur d'arbre, bits.

Cas limites :
• log2(1) = 0.

Considérations de performance :
• Souvent plus rapide que log(x,2).

Exemples :
• math.log2(1024) → 10.0

Remarques :
• Python 3.3+.`,
  726: `math.factorial(5) vaut 120 : 5! = 5×4×3×2×1 = 120.

Débutant :
• factorial(n) = produit des entiers de 1 à n.

Intermédiaire :
• factorial(0) = 1 par convention. n doit être entier ≥ 0.

Expert :
• ValueError pour n < 0. Overflow pour n grand (ex. 10000).

Concepts clés :
• n! = n × (n-1) × … × 1 ; 0! = 1.

Distinctions clés :
• vs boucle manuelle ; vs récursion.

Fonctionnement :
• Implémentation C optimisée.

Exécution étape par étape :
1. 5.
2. 5*4*3*2*1 → 120.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• combinatoire, permutations, probas.

Cas limites :
• factorial(0) → 1.

Considérations de performance :
• O(n). Grands n → gros entiers.

Exemples :
• math.factorial(6) → 720

Remarques :
• Pas de float ; int uniquement.`,
  727: `math.gcd(12, 18) vaut 6 : plus grand diviseur commun.

Débutant :
• gcd trouve le plus grand entier qui divise les deux.

Intermédiaire :
• math.gcd(0, n) = n. math.gcd(a, b) = gcd(b, a).

Expert :
• Algorithme d'Euclide. Gère les négatifs (valeur absolue).

Concepts clés :
• PGCD : plus grand diviseur commun de a et b.

Distinctions clés :
• vs math.lcm ; vs fractions.gcd (déprécié).

Fonctionnement :
• Algorithme d'Euclide itératif.

Exécution étape par étape :
1. 12, 18.
2. gcd → 6.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• simplifier des fractions, algorithmes.

Cas limites :
• gcd(0, 5) → 5 ; gcd(-12, 18) → 6.

Considérations de performance :
• O(log(min(a,b))).

Exemples :
• math.gcd(48, 18) → 6

Remarques :
• Python 3.5+.`,
  728: `math.lcm(4, 6) vaut 12 : plus petit commun multiple (Python 3.9+).

Débutant :
• lcm donne le plus petit entier divisible par les deux.

Intermédiaire :
• lcm(a, b) = abs(a*b) / gcd(a, b).

Expert :
• lcm(0, n) = 0. ValueError si les deux sont 0 (en pratique 0).

Concepts clés :
• PPCM : plus petit multiple commun.

Distinctions clés :
• vs gcd ; vs calcul manuel.

Fonctionnement :
• Utilise gcd en interne.

Exécution étape par étape :
1. 4, 6.
2. lcm → 12.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• périodes, synchronisation, fractions.

Cas limites :
• lcm(0, 5) → 0.

Considérations de performance :
• O(log(min(a,b))).

Exemples :
• math.lcm(3, 5) → 15

Remarques :
• Python 3.9+.`,
  729: `math.comb(n, k) : combinaisons (choix de k parmi n, sans ordre).

Débutant :
• comb(n, k) = n! / (k! * (n-k)!).

Intermédiaire :
• math.comb(5, 2) = 10. k doit être 0 ≤ k ≤ n.

Expert :
• Python 3.8+. Équivalent à factorial(n)//(factorial(k)*factorial(n-k)) mais évite overflow.

Concepts clés :
• C(n,k) = nombre de façons de choisir k éléments parmi n.

Distinctions clés :
• vs math.perm (ordre compte).

Fonctionnement :
• Formule combinatoire optimisée.

Exécution étape par étape :
1. n, k.
2. comb → entier.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• probas, dénombrement, binôme.

Cas limites :
• comb(n, 0) = comb(n, n) = 1.

Considérations de performance :
• O(min(k, n-k)).

Exemples :
• math.comb(5, 2) → 10

Remarques :
• Pas de float.`,
  730: `math.perm(n, k) : arrangements (choix ordonnés de k parmi n).

Débutant :
• perm(n, k) = n! / (n-k)!.

Intermédiaire :
• math.perm(5, 2) = 20. L'ordre compte.

Expert :
• Python 3.8+. perm(n, n) = factorial(n).

Concepts clés :
• P(n,k) = nombre de listes ordonnées de k éléments distincts parmi n.

Distinctions clés :
• vs comb (ordre ne compte pas).

Fonctionnement :
• n * (n-1) * … * (n-k+1).

Exécution étape par étape :
1. n, k.
2. perm → entier.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• probas, tirages ordonnés.

Cas limites :
• perm(n, 0) = 1.

Considérations de performance :
• O(k).

Exemples :
• math.perm(5, 3) → 60

Remarques :
• Python 3.8+.`,
  731: `divmod(17, 5) vaut (3, 2) : quotient et reste en un appel.

Débutant :
• divmod(a, b) = (a // b, a % b).

Intermédiaire :
• 17 = 3*5 + 2. Plus efficace qu'appeler // et % séparément.

Expert :
• Pour négatifs, suit la même règle que // et % (floor division).

Concepts clés :
• divmod = (quotient, reste) en une fois.

Distinctions clés :
• vs // et % séparés (même résultat, un seul appel).

Fonctionnement :
• Utilise la division floor de Python.

Exécution étape par étape :
1. 17, 5.
2. divmod → (3, 2).

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• conversion base, pagination, division euclidienne.

Cas limites :
• divmod(0, 5) → (0, 0). divmod(17, 0) → ZeroDivisionError.

Considérations de performance :
• Un seul appel C vs deux.

Exemples :
• q, r = divmod(17, 5)

Remarques :
• a == q*b + r toujours.`,
  732: `divmod(-17, 5) : pour dividende négatif, quotient et reste suivent floor division.

Débutant :
• -17 // 5 = -4, -17 % 5 = 3. divmod(-17, 5) = (-4, 3).

Intermédiaire :
• -17 = (-4)*5 + 3. Le reste a le signe du diviseur.

Expert :
• Cohérent avec la formule a = q*b + r.

Concepts clés :
• divmod suit // et % (floor).

Distinctions clés :
• vs langages qui tronquent (C, Java).

Fonctionnement :
• Quotient = floor(-17/5) = -4.

Exécution étape par étape :
1. -17, 5.
2. divmod → (-4, 3).

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• division euclidienne avec négatifs.

Cas limites :
• divmod(-17, -5) = (3, -2).

Considérations de performance :
• O(1).

Exemples :
• q, r = divmod(-17, 5)  # q=-4, r=3

Remarques :
• Le reste est toujours 0 ≤ r < |b| (pour b > 0).`,
  733: `divmod avec diviseur négatif : le reste suit le signe du diviseur.

Débutant :
• divmod(17, -5) = (-4, -3). 17 = (-4)*(-5) + (-3).

Intermédiaire :
• Le quotient est arrondi vers -∞.

Expert :
• r a le signe de b ; |r| < |b|.

Concepts clés :
• Même règle floor que pour a et b positifs.

Distinctions clés :
• Comportement Python vs C.

Fonctionnement :
• floor(17/-5) = -4 ; reste = 17 - (-4)*(-5) = -3.

Exécution étape par étape :
1. 17, -5.
2. divmod → (-4, -3).

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• algorithmes avec diviseur négatif.

Cas limites :
• divmod(-17, -5) = (3, -2).

Considérations de performance :
• O(1).

Exemples :
• Vérifier : -4*(-5) + (-3) = 17

Remarques :
• Toujours a == q*b + r.`,
  734: `round() avec des flottants : les représentations binaires peuvent causer des surprises.

Débutant :
• 0.1 + 0.2 ≠ 0.3 exactement. round peut sembler « faux ».

Intermédiaire :
• round(2.675, 2) peut donner 2.67 ou 2.68 (banker's rounding, float interne).

Expert :
• IEEE 754 : 2.675 n'est pas représentable exactement ; le float stocké est proche.

Concepts clés :
• Les flottants sont des approximations ; round amplifie parfois les imprécisions.

Distinctions clés :
• vs Decimal pour arrondis déterministes.

Fonctionnement :
• round utilise la valeur binaire réelle, pas la décimale « idéale ».

Exécution étape par étape :
1. Float en mémoire (binaire).
2. round selon banker's rounding.

Ordre des opérations :
• Évaluation, puis round.

Cas d'utilisation courants :
• Affichage, rapports. Attention aux imprécisions.

Cas limites :
• round(2.5) → 2 (pair le plus proche) ; round(3.5) → 4.

Considérations de performance :
• O(1).

Exemples :
• from decimal import Decimal ; round(Decimal('2.675'), 2)

Remarques :
• Pour la finance : Decimal.`,
  735: `round(x, -2) arrondit aux centaines : round(1234.5, -2) → 1200.0.

Débutant :
• ndigits négatif arrondit à gauche de la virgule.

Intermédiaire :
• round(1234.5, -1) → 1230.0 ; round(1234.5, -3) → 1000.0.

Expert :
• Banker's rounding : 1250 → 1200 (pair), 1350 → 1400 (pair).

Concepts clés :
• ndigits < 0 arrondit aux puissances de 10.

Distinctions clés :
• vs round(x, 2) (décimales) ; vs round(x) (entier).

Fonctionnement :
• round(x, -n) ≈ round(x / 10**n) * 10**n.

Exécution étape par étape :
1. 1234.5, -2.
2. round → 1200.0.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• arrondir à la centaine, millier.

Cas limites :
• round(1250, -2) → 1200 ou 1300 (banker).

Considérations de performance :
• O(1).

Exemples :
• round(5678, -2) → 5700

Remarques :
• Renvoie float si ndigits fourni.`,
  736: `round avec banker's rounding aux centaines : 1250 → 1200 (pair le plus proche).

Débutant :
• .5 va vers le pair le plus proche (évite biais).

Intermédiaire :
• round(1250, -2) = 1200 ; round(1350, -2) = 1400.

Expert :
• round_half_to_even : 2.5→2, 3.5→4.

Concepts clés :
• Banker's rounding = arrondi au pair le plus proche pour .5.

Distinctions clés :
• vs arrondi « classique » (toujours vers le haut pour .5).

Fonctionnement :
• Pour 1250 : 12 et 13 sont à égale distance ; 12 est pair → 1200.

Exécution étape par étape :
1. 1250, -2.
2. round → 1200.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• statistiques, réduction de biais cumulatif.

Cas limites :
• round(2.5) → 2 ; round(3.5) → 4.

Considérations de performance :
• O(1).

Exemples :
• round(1350, -2) → 1400

Remarques :
• Standard IEEE 754.`,
  737: `round(1350, -2) avec banker's rounding → 1400 : 13 et 14 à égale distance, 14 pair.

Débutant :
• 1350 est à mi-chemin entre 1300 et 1400 ; on choisit le pair (1400).

Intermédiaire :
• round(1450, -2) → 1400 (14 pair) ; round(1550, -2) → 1600.

Expert :
• Cohérent avec round(3.5) → 4.

Concepts clés :
• Même règle pour tous les ordres de grandeur.

Distinctions clés :
• vs 1350 arrondi « vers le haut » systématique → 1400 (ici pareil par hasard).

Fonctionnement :
• 13.5 → 14 (pair) ; donc 1350 → 1400.

Exécution étape par étape :
1. 1350, -2.
2. round → 1400.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• arrondis non biaisés.

Cas limites :
• 1250 → 1200 ; 1350 → 1400.

Considérations de performance :
• O(1).

Exemples :
• round(2.5), round(3.5) pour voir la règle

Remarques :
• Évite l'accumulation de biais.`,
  738: `round peut corriger des imprécisions float visibles : round(0.1 + 0.2, 1) → 0.3.

Débutant :
• 0.1 + 0.2 donne 0.30000000000000004 ; round(..., 1) → 0.3.

Intermédiaire :
• round ne « répare » pas toujours ; ça dépend du float interne.

Expert :
• Pour des calculs critiques : Decimal ou fractions.

Concepts clés :
• round réduit les décimales affichées ; pas une vraie « correction ».

Distinctions clés :
• vs Decimal ; vs formatage pour affichage.

Fonctionnement :
• round(arrondit à ndigits décimales (en base 10 approx).

Exécution étape par étape :
1. 0.1 + 0.2 → 0.3000...04.
2. round(..., 1) → 0.3.

Ordre des opérations :
• + puis round.

Cas d'utilisation courants :
• masquer les artefacts d'affichage float.

Cas limites :
• round(2.675, 2) peut varier selon le float interne.

Considérations de performance :
• O(1).

Exemples :
• round(0.1 + 0.2, 10) peut ne pas donner 0.3

Remarques :
• Solution fiable : Decimal.`,
  739: `math.fsum([0.1, 0.2, 0.3]) est plus précis que sum() : évite les erreurs d'accumulation.

Débutant :
• fsum utilise un algorithme qui limite les erreurs d'arrondi.

Intermédiaire :
• sum([0.1]*10) peut ≠ 1.0 ; fsum([0.1]*10) ≈ 1.0.

Expert :
• Algorithme de Kahan (ou similaire) ; O(n) mais plus précis.

Concepts clés :
• fsum = sum flottant à précision accrue.

Distinctions clés :
• vs sum (accumulation naïve).

Fonctionnement :
• Compense les erreurs d'arrondi cumulatives.

Exécution étape par étape :
1. Itérable de floats.
2. fsum → somme plus précise.

Ordre des opérations :
• Itération et accumulation.

Cas d'utilisation courants :
• sommes de flottants (finances, stats).

Cas limites :
• fsum([]) → 0.0.

Considérations de performance :
• Un peu plus lent que sum.

Exemples :
• math.fsum([0.1]*10) ≈ 1.0

Remarques :
• Préférer fsum pour listes de floats.`,
  740: `math.copysign(x, y) copie le signe de y sur la valeur absolue de x.

Débutant :
• copysign(3.0, -1) → -3.0 ; copysign(-3.0, 1) → 3.0.

Intermédiaire :
• Utile pour forcer un signe connu. Gère -0.0 et +0.0.

Expert :
• copysign(math.inf, -1) → -inf.

Concepts clés :
• |x| avec le signe de y.

Distinctions clés :
• vs abs ; vs multiplication par signe.

Fonctionnement :
• Prend |x| et applique signe de y.

Exécution étape par étape :
1. x, y.
2. copysign → valeur avec signe de y.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• normalisation de signe, calculs vectoriels.

Cas limites :
• copysign(0, -1) → -0.0.

Considérations de performance :
• O(1).

Exemples :
• math.copysign(5, -1) → -5.0

Remarques :
• Renvoie toujours float.`,
  741: `pow(2, 100) gère les grands exposants : 2**100 = 1267650600228229401496703205376.

Débutant :
• pow(a, b) = a**b. Les entiers Python n'ont pas de limite pratique.

Intermédiaire :
• pow(2, 1000) fonctionne. Pour float, overflow possible.

Expert :
• pow(x, y, z) pour exponentiation modulaire (x**y % z) plus efficace.

Concepts clés :
• pow = exponentiation. Entiers arbitrairement grands.

Distinctions clés :
• vs ** ; vs math.pow (float uniquement).

Fonctionnement :
• Exponentiation par carrés pour grands exposants.

Exécution étape par étape :
1. 2, 100.
2. pow → grand int.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• crypto, grands nombres.

Cas limites :
• pow(2, 10**6) crée un très gros int.

Considérations de performance :
• O(log b) multiplications.

Exemples :
• pow(10, 100) → googol

Remarques :
• int illimité en Python.`,
  742: `pow(2, -3) vaut 0.125 : exposant négatif = inverse. 2^(-3) = 1/8.

Débutant :
• a^(-n) = 1 / a^n.

Intermédiaire :
• pow(10, -2) = 0.01. Fonctionne avec float.

Expert :
• pow(0, -n) → ZeroDivisionError (0^(-1) indéfini).

Concepts clés :
• Exposant négatif = division par la puissance positive.

Distinctions clés :
• vs exposant positif ; vs pow avec modulo.

Fonctionnement :
• pow(2, -3) = 1 / 2**3 = 0.125.

Exécution étape par étape :
1. 2, -3.
2. pow → 0.125.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• échelles, décimaux.

Cas limites :
• pow(0, -1) → erreur.

Considérations de performance :
• O(1) pour petits exposants.

Exemples :
• pow(5, -2) → 0.04

Remarques :
• Renvoie float si exposant négatif (sauf base int et résultat entier).`,
  743: `pow(4, 0.5) vaut 2.0 : exposant fractionnaire = racine. 4^0.5 = √4.

Débutant :
• x^0.5 = sqrt(x). x^(1/n) = racine n-ième.

Intermédiaire :
• pow(9, 0.5) = 3.0. Renvoie toujours float pour exposant float.

Expert :
• pow(-4, 0.5) → complexe en Python 3 (sqrt de négatif).

Concepts clés :
• a^(1/2) = √a ; a^(p/q) = racine q-ième de a^p.

Distinctions clés :
• vs math.sqrt (carré uniquement).

Fonctionnement :
• Exponentiation réelle via log/exp.

Exécution étape par étape :
1. 4, 0.5.
2. pow → 2.0.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• racines, puissances fractionnaires.

Cas limites :
• pow(-1, 0.5) → (0+1j) en Python 3.

Considérations de performance :
• Plus lent que sqrt pour carré.

Exemples :
• pow(8, 1/3) → 2.0 (racine cubique)

Remarques :
• math.sqrt(x) plus clair pour carré.`,
  744: `math.pow(2, 3) renvoie toujours un float : 8.0, pas 8.

Débutant :
• math.pow convertit en float et renvoie float.

Intermédiaire :
• pow(2, 3) ou 2**3 peuvent renvoyer int. math.pow force float.

Expert :
• math.pow(-2, 0.5) → ValueError (pas de complexe). pow(-2, 0.5) → complex.

Concepts clés :
• math.pow = exponentiation float uniquement.

Distinctions clés :
• vs built-in pow (peut renvoyer int) ; vs **.

Fonctionnement :
• Conversion des arguments en float, puis exponentiation.

Exécution étape par étape :
1. 2, 3.
2. math.pow → 8.0.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• Quand on veut explicitement un float.

Cas limites :
• math.pow(10, 308) peut overflow → inf.

Considérations de performance :
• Similaire à ** pour float.

Exemples :
• math.pow(3, 2) → 9.0

Remarques :
• Pas de forme à 3 arguments (modulo).`,
  745: `2**0.5 et math.sqrt(2) donnent le même résultat (approx 1.414...).

Débutant :
• Les deux calculent √2.

Intermédiaire :
• 2**0.5 peut être très légèrement différent selon l'implémentation.

Expert :
• sqrt peut utiliser une instruction CPU dédiée ; **0.5 passe par log/exp.

Concepts clés :
• Équivalence mathématique ; même résultat en pratique.

Distinctions clés :
• Clarté : sqrt est plus explicite pour racine carrée.

Fonctionnement :
• Deux chemins de calcul vers √2.

Exécution étape par étape :
1. 2**0.5 ou math.sqrt(2).
2. → ~1.414.

Ordre des opérations :
• ** ou appel.

Cas d'utilisation courants :
• Géométrie, distances.

Cas limites :
• Pour -2 : 2**0.5 OK ; math.sqrt(-2) → ValueError.

Considérations de performance :
• sqrt souvent plus rapide.

Exemples :
• (2**0.5)**2 ≈ 2.0

Remarques :
• Préférer sqrt pour la lisibilité.`,
  746: `math.isclose(a, b) compare deux flottants avec tolérance : évite a == b sur float.

Débutant :
• isclose(0.1 + 0.2, 0.3) → True (malgré imprécision).

Intermédiaire :
• Tolérance relative par défaut. math.isclose(1e9, 1e9+1) peut être True.

Expert :
• rel_tol (défaut 1e-9), abs_tol (défaut 0). Gère inf et nan.

Concepts clés :
• Comparaison « proche » au lieu d'égalité exacte.

Distinctions clés :
• vs == ; vs abs(a-b) < epsilon.

Fonctionnement :
• |a-b| ≤ max(rel_tol*max(|a|,|b|), abs_tol).

Exécution étape par étape :
1. a, b.
2. isclose → True/False.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• tests unitaires, physique, stats.

Cas limites :
• isclose(0, 0) → True ; isclose(inf, inf) → True.

Considérations de performance :
• O(1).

Exemples :
• math.isclose(0.1+0.2, 0.3) → True

Remarques :
• Python 3.5+. Essentiel pour les float.`,
  747: `math.isclose avec abs_tol : tolérance absolue pour les petits nombres.

Débutant :
• abs_tol fixe une marge absolue. isclose(0, 0.001, abs_tol=0.01) → True.

Intermédiaire :
• rel_tol seul peut échouer près de zéro (rel_tol*max(|a|,|b|) ≈ 0).

Expert :
• La condition utilise max(rel_tol*..., abs_tol).

Concepts clés :
• abs_tol = seuil absolu ; rel_tol = seuil relatif.

Distinctions clés :
• vs rel_tol seul (problème près de 0).

Fonctionnement :
• |a-b| ≤ max(rel_tol * max(|a|,|b|), abs_tol).

Exécution étape par étape :
1. a, b, abs_tol=...
2. isclose → bool.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• Comparer des valeurs proches de zéro.

Cas limites :
• isclose(0, 1e-10, abs_tol=1e-9) → True.

Considérations de performance :
• O(1).

Exemples :
• math.isclose(1e-10, 2e-10, abs_tol=1e-9) → True

Remarques :
• Toujours spécifier abs_tol si on compare près de 0.`,
  748: `math.degrees(math.pi) vaut 180.0 : conversion radians → degrés.

Débutant :
• π radians = 180°. degrees(π) = 180.

Intermédiaire :
• degrees(x) = x * 180 / π.

Expert :
• math.radians est l'inverse.

Concepts clés :
• 360° = 2π rad. degrees(rad) = rad * 180/π.

Distinctions clés :
• vs math.radians (degrés → radians).

Fonctionnement :
• Multiplication par 180/π.

Exécution étape par étape :
1. math.pi.
2. degrees(...) → 180.0.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• trigonométrie, affichage angles.

Cas limites :
• degrees(0) → 0.0.

Considérations de performance :
• O(1).

Exemples :
• math.degrees(math.pi/2) → 90.0

Remarques :
• Les fonctions trigo de math utilisent les radians.`,
  749: `math.radians(180) vaut π (environ 3.14159...) : conversion degrés → radians.

Débutant :
• 180° = π rad. radians(180) = π.

Intermédiaire :
• radians(deg) = deg * π / 180.

Expert :
• math.sin(math.radians(90)) = 1.0.

Concepts clés :
• radians = unité naturelle pour sin, cos, tan.

Distinctions clés :
• vs math.degrees.

Fonctionnement :
• Multiplication par π/180.

Exécution étape par étape :
1. 180.
2. radians(...) → 3.14159...

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• passer des degrés à sin/cos.

Cas limites :
• radians(0) → 0.0.

Considérations de performance :
• O(1).

Exemples :
• math.radians(90) → 1.5707... (π/2)

Remarques :
• Toujours convertir avant d'appeler sin/cos.`,
  750: `math.hypot(3, 4) vaut 5.0 : hypoténuse d'un triangle rectangle (théorème de Pythagore).

Débutant :
• hypot(x, y) = √(x² + y²). 3-4-5 est un triplet classique.

Intermédiaire :
• math.hypot(3, 4) = 5.0. Évite overflow par rapport à sqrt(x*x + y*y).

Expert :
• hypot(x, y, z, ...) accepte plusieurs arguments (Python 3.8+). Distance euclidienne.

Concepts clés :
• hypoténuse = √(a² + b²).

Distinctions clés :
• vs sqrt(x*x + y*y) (risque overflow pour grands x,y).

Fonctionnement :
• Calcul numériquement stable.

Exécution étape par étape :
1. 3, 4.
2. hypot → 5.0.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• distances 2D/3D, normes.

Cas limites :
• hypot(0, 0) → 0.0.

Considérations de performance :
• O(1). Plus sûr que sqrt(x²+y²) pour grands nombres.

Exemples :
• math.hypot(1, 1) → 1.414... (√2)

Remarques :
• Équivalent à sqrt(x*x + y*y) mais robuste.`,
};
